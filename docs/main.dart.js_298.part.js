((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,C,D,G,N,O,P,Q,V,W,X,I,Y,Z,R,S,T,A_,A0,A1,K,A={
zC(d,e,f){var w=d.a,v=d.b,u=d.c
return new A.L(w+(e.a-w)*f,v+(e.b-v)*f,u+(e.c-u)*f)},
bBl(d,e){var w=Math.cos(e),v=Math.sin(e),u=d.a,t=d.c
return new A.L(u*w+t*v,d.b,-u*v+t*w)},
Cu(d,e,f,g){var w,v,u,t,s,r,q,p,o=new A.fIv(Math.cos(e),Math.sin(e)),n=new A.fIt(f),m=new A.fIu(n,e,o,g),l=new A.fIs(n,e,o),k=C.a([],x.z)
for(w=d.length,v=x.o,u=0;u<d.length;d.length===w||(0,C.K)(d),++u){t=d[u]
s=C.a([],v)
for(r=t.a,q=r.length,p=0;p<r.length;r.length===q||(0,C.K)(r),++p)s.push(m.$1(r[p]))
k.push(new A.tc(s,l.$1(t.b),t.c,t.d,t.e,t.f,t.r,t.w,t.x))}return k},
G6(d,e,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
if(d.length<3)return d
w=C.a([D.d.gL(d)],x.o)
for(v=1;u=v+1,u<d.length;v=u){t=d[v-1]
s=d[v]
r=d[u]
q=s.a
p=s.b
o=s.c
n=new A.L(q-t.a,p-t.b,o-t.c)
m=new A.L(r.a-q,r.b-p,r.c-o)
l=Math.min(e,n.gT0()*0.5)
k=Math.min(e,m.gT0()*0.5)
j=n.gqu(0)
i=new A.L(q-j.a*l,p-j.b*l,o-j.c*l)
j=m.gqu(0)
h=new A.L(q+j.a*k,p+j.b*k,o+j.c*k)
for(g=0;g<=a0;++g){f=g/a0
w.push(A.zC(A.zC(i,s,f),A.zC(s,h,f),f))}}w.push(D.d.gam(d))
return w},
agr(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
if(a3.length<3)return a3
w=C.a([],x.o)
for(v=0;u=v+1,t=a3.length,u<t;v=u){s=v===0?a3[v]:a3[v-1]
r=a3[v]
q=a3[u]
p=v+2
o=p<t?a3[p]:q
for(t=s.a,p=r.a,n=q.a,m=o.a,l=s.b,k=r.b,j=q.b,i=o.b,h=s.c,g=r.c,f=q.c,e=o.c,d=0;d<a4;++d){a0=d/a4
a1=a0*a0
a2=new A.fIm(a0,a1,a1*a0)
w.push(new A.L(a2.$4(t,p,n,m),a2.$4(l,k,j,i),a2.$4(h,g,f,e)))}}w.push(D.d.gam(a3))
return w},
hH1(d){var w,v,u,t,s,r,q,p,o,n
for(w=d.length,v=!0,u=!0,t=0;t<w;++t)if(d[t].c>=0.5)u=!1
else v=!1
if(v)return d
if(u)return B.d07
s=C.a([],x.o)
for(r=0;w=d.length,r<w;){q=d[r];++r
p=d[r%w]
w=q.c
o=w>=0.5
n=p.c
if(o)s.push(q)
if(o!==n>=0.5)s.push(A.zC(q,p,(0.5-w)/(n-w)))}return s},
hHP(a3,a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=a5[0],a1=a0.a,a2=a0.b
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
d.clipRect(C.c4(new C.aa(0,0,320,180)),$.qE()[1],!0)
a4.c.$3(a3,new C.at(320,180),a6)
d.restore()},
L:function L(d,e,f){this.a=d
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
Wu:function Wu(d,e,f){this.a=d
this.b=e
this.c=f},
mG:function mG(d){var _=this
_.a=d
_.c=_.b=0
_.d=1
_.e=0},
bUB:function bUB(d,e){this.a=d
this.b=e},
bUC:function bUC(d){this.a=d},
bUA:function bUA(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
bUD:function bUD(d,e,f){this.a=d
this.b=e
this.c=f},
bUz:function bUz(d,e){this.a=d
this.b=e},
bUE:function bUE(d,e,f){this.a=d
this.b=e
this.c=f},
fIv:function fIv(d,e){this.a=d
this.b=e},
fIt:function fIt(d){this.a=d},
fIu:function fIu(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fIs:function fIs(d,e,f){this.a=d
this.b=e
this.c=f},
fIm:function fIm(d,e,f){this.a=d
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
bOI:function bOI(d){this.a=d},
b3v:function b3v(d,e,f,g,h,i,j,k,l){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.w=j
_.x=k
_.a=l},
cl1:function cl1(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cl2:function cl2(d,e){this.a=d
this.b=e},
ckZ:function ckZ(){},
cl_:function cl_(d,e,f){this.a=d
this.b=e
this.c=f},
cl0:function cl0(){},
J8:function J8(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
atb:function atb(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
boz:function boz(d,e,f,g,h){var _=this
_.d=$
_.e=d
_.f=e
_.r=f
_.w=40
_.bq$=g
_.a7$=h
_.c=_.a=null},
eQp:function eQp(d){this.a=d},
eQo:function eQo(d){this.a=d},
eQl:function eQl(d){this.a=d},
eQm:function eQm(d){this.a=d},
eQn:function eQn(d){this.a=d},
aLl:function aLl(){},
aSk(d,e,f,g,h,i,j){return new A.a3n(g,i,h,e,f,j)},
Ac(d){return D.d.ix($.hkK(),new A.flo(d))},
bBK(d,e){var w,v,u=d.e,t=new C.J(u,new A.fIK(),C.T(u).k("J<1,n>")).fG(0)
u=e.b
w=C.a3(u).k("bc<2>")
v=C.d9(new C.bc(u,w),w.k("H.E"))
return t.d9(0,v.gkN(v))},
hgF(d,e,f,g,h){var w,v
if(e.a&&e.c===0){if(e.r)return"SHOCK! The breaker was still ON and you touched a live wire. Always turn the power OFF and test the wires first."
return"STOP! The breaker is still ON, so these wires are live (120 volts). Turn the breaker OFF first. This can shock you badly."}if(e.c!==0)return"The device is already in the box. Pull it out again to change the wires."
if(!e.r&&!h&&!g.c.t(0,f))return d.r.$2(f,g)
w=e.b
v=g.a
if(w.h(0,v)!=null)return"That place already has a wire. Tap the wire to take it off first."
if(new C.bc(w,C.a3(w).k("bc<2>")).t(0,f))return"That wire is already fastened. Tap it to take it off if you want to move it."
w.n(0,v,f)
return null},
afd(b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8=null,a9=new A.flu(b1),b0=new A.fls(b1)
for(w=b2.b,w=new C.cJ(w,C.a3(w).k("cJ<1,2>")).gag(0),v=0,u=0,t=0,s=0,r=0,q=0,p=0,o=0,n=0,m=0;w.C();){l=w.d
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
a6=new C.a2(w,new A.flq(),h).gM(0)
a7=new C.a2(w,new A.flr(),h).gM(0)
if(t>0||o>0)return B.fCQ
w=u>0
if(!(w&&s>0))h=r>0&&v>0
else h=!0
if(h)return B.fCX
if(w&&r>0)return B.fCR
if(q>0||n>0)return B.fCU
if(m>0&&v<a6)return B.fCW
if(v<a6)return B.fCS
if(a7>0&&s<a7)return B.fCV
if(p===0)return B.fCP
return B.fCT},
bxj(d,e){var w
if(d==="light"||d==="fan")w=e.c===0?6.4:0.6
else w=e.c===0?4.7:-0.25
return w},
bzs(d,e,f){var w,v
if(d==="light"||d==="fan"){w=A.bxj(d,f)
v=f.c===0?w-3.2:w
switch(e){case 51:return new A.L(-1.5,-0.3,v)
case 52:return new A.L(0,-0.3,v)
default:return new A.L(1.5,-0.3,v)}}w=A.bxj(d,f)
switch(e){case 21:return new A.L(0.98,-0.2+(d==="gfci"?0.95:0.85),w-0.45)
case 22:return new A.L(0.98,-0.2+(d==="gfci"?-0.75:-0.55),w-0.45)
case 23:return new A.L(-0.98,-0.2+(d==="gfci"?0.95:0.85),w-0.45)
case 24:return new A.L(-0.98,-0.2+(d==="gfci"?-0.75:-0.55),w-0.45)
default:return new A.L(0,-1.98,w+0.52)}},
fRY(a9,b0,b1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=C.a([],x.z),a6=new A.mG(a5),a7=a9.a,a8=a7==="light"||a7==="fan"
if(b1){a6.b=1
a6.j0(B.fzk,B.aQK,B.uE,3)
a6.j0(B.fA7,B.aQK,B.uE,3)
a6.j0(B.fBa,B.aR0,B.uE,2)
a6.j0(B.fAu,B.aR0,B.uE,2)
a6.b=2
a6.q7(B.fz_,B.aQF,B.m0,0.05,3)
a6.q7(B.fyG,B.aQF,B.m0,0.05,3)
a6.q7(B.fyy,B.fBu,B.m0,0.05,2)}w=A.h7D(a6,a7,!0)
v=new A.fjv(a6,b0,a7,a8)
u=D.d.gL(w)
t=a7==="switch"
if(t){s=D.d.gam(w)
v.$5(10,u.af(0,B.fv1),B.fBc,"blackLine",B.K8)
v.$5(13,s.af(0,B.fBi),B.fxx,"blackLoad",B.K8)
v.$5(12,u.af(0,B.fzT),B.fx7,"ground",B.wS)
a6.b=6
r=x.o
a6.jM(C.a([u.af(0,B.aQD),B.fvl,B.Tj],r),0.075,B.wB,!1,0.3,8)
a6.jM(C.a([s.af(0,B.aQD),B.fzp,B.Tj],r),0.075,B.wB,!1,0.3,8)
a6.Ka(B.Tj,B.fB7,0.28,B.ab9,0.18,0.3,10)}else{v.$5(10,u.af(0,B.fxA),B.fvh,"black",B.K8)
v.$5(11,u.af(0,B.fyu),B.fzw,"white",B.wB)
v.$5(12,u.af(0,B.fyM),B.fyH,"ground",B.wS)}if(a8)A.h8B(a6,a7,b0)
else A.h8h(a6,a7,A.bxj(a7,b0),b0.w,!1)
if(b0.e&&b0.c===0){a6.b=0
a6.d=0.5
for(r=a9.f,q=r.length,p=0;p<q;++p){o=r[p]
n=A.bzs(a7,o.a,b0)
if(o.e)m=D.cp
else{l=o.f
if(l==="ground")m=D.bn
else{l=l==="neutral"?D.c:B.Vu
m=l}}if(a8)l=0
else{l=n.a
if(l>0.4)l=0.12
else l=l<-0.4?-0.12:0}if(a8)k=0.6
else k=Math.abs(n.a)<0.4?0.2:0
a6.j_(new A.L(n.a+l,n.b+0,n.c+k),0.36,m,4,8,0.1)}a6.d=1}if(b0.c>=2&&!a8)A.haD(a6,b0.w)
r=!1
if(b0.c>=2)if(b0.d)r=a7==="outlet"||a7==="gfci"
if(r)A.hPi(a6,b0.a&&!b0.w)
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
g=A.bxj(a7,b0)
e=q?"Ceiling fan":"Ceiling light"
q=q?"The motor housing with blades. It has three wires: black (motor), white (neutral) and green (ground).":"The light fixture with a frosted dome. It has three wires: black, white and green."
d=C.E([1,B.dUo,2,B.dUC,3,new A.da(r,"A box that holds the wire connections. Every connection must be inside a box, never loose in the wall or the ceiling."+l,new A.L(0,0,-1.2),9),4,new A.da(k,"The yellow jacket holds three wires: black (hot), white (neutral) and bare copper (ground). Yellow means 12 gauge wire for a 20 amp circuit. White jackets are 14 gauge for 15 amps.",new A.L(-0.4,1.5,-1.8),8),5,B.dUY,10,new A.da("Black wire: hot","The hot wire brings the power from the breaker. It is the dangerous one. "+j,new A.L(-0.8,-0.8,1.2),7),13,B.dUa,11,new A.da("White wire: neutral","The neutral wire carries the power back to the panel. "+i,new A.L(0,-0.8,1.2),7),12,new A.da("Bare copper wire: ground","The ground wire is a safety path. If a wire touches metal, the current runs down the ground instead of through you. "+h,new A.L(0.5,-0.8,1.2),7),6,B.dUA,20,new A.da(f,t,new A.L(0,-0.2,g),9),21,B.dUF,22,B.dUX,23,B.dUy,24,B.dUD,25,B.dUr,26,B.dUG,27,B.dUS,28,B.dUl,30,B.dU5,31,B.dU3,51,B.dUB,52,B.dU7,53,B.dUK,54,new A.da(e,q,new A.L(0,0,6.4),9),55,B.dUU],x.S,x.q)
a0=C.a([],x.E)
if(b0.f&&b0.c===0)for(t=a9.f,r=t.length,p=0;p<r;++p){o=t[p]
n=A.bzs(a7,o.a,b0)
a1=o.f
A:{q="hot"===a1
if(q){l=B.etY
break A}if("neutral"===a1){l=B.elb
break A}if("ground"===a1){l=B.enH
break A}l=B.ebn
break A}a2=l.a
if(a8){B:{if(q){k="BLACK NUT \xb7 HOT"
break B}if("neutral"===a1){k="WHITE NUT \xb7 NEUTRAL"
break B}k="GROUND"
break B}a3=k}else a3=a2
if(a8){C:{if(q){q=B.fyf
break C}if("neutral"===a1){q=B.fyc
break C}q=B.fBE
break C}a4=q}else{q=n.a
if(q>0.4)k=3.8
else k=q<-0.4?-4.2:0
a4=new A.L(k,Math.abs(q)<0.4?-3:-0.4,1)}a0.push(new A.ub(new A.L(n.a+a4.a,n.b+a4.b,n.c+a4.c),a3,l.b))}if(b0.a&&b0.c===0)a0.push(B.bOm)
return new A.zk(a5,d,a0,B.vv)},
h7D(d,e,f){var w,v,u=e==="light"||e==="fan"
d.b=3
if(u){d.e5(B.aR2,B.aQJ,2.2,B.wR,0.3,18)
d.a2H(B.aQJ,B.w5,2.2,B.wR,!1,!0,0.3,18)}else{d.bS(B.aR2,B.fz5,B.wR,0.3)
d.bS(B.fxl,B.aQx,B.wR,0.3)
d.bS(B.fvH,B.aQx,B.wR,0.3)
d.bS(B.fyC,B.aQO,B.wR,0.3)
d.bS(B.fya,B.aQO,B.wR,0.3)}w=C.a([],x.o)
v=new A.f5Y(d,f,w)
if(e==="switch"){v.$2(4,B.cOx)
v.$2(5,B.cMP)}else v.$2(4,B.cZO)
return w},
hgJ(d,e){var w
A:{if(10===e){w=d==="switch"?"blackLine":"black"
break A}if(13===e){w="blackLoad"
break A}if(11===e){w="white"
break A}if(12===e){w="ground"
break A}w=null
break A}return w},
h8h(d,e,f,g,h){var w,v,u,t,s,r,q,p,o,n,m,l,k=new A.L(0,-0.2,f),j=e==="switch",i=e==="gfci"
if(g)w=B.wM
else w=j?B.baQ:B.W6
v=i?3.1:2.95
d.e=0
d.b=20
if(!h){d.bS(k.af(0,B.fwC),new A.L(1.5,v,1.3),w,0.25)
d.e=0.15
d.b=26
u=k.af(0,B.fwu)
d.bS(u,B.fB8,g?B.b82:B.Kn,0.8)
d.cM(k.af(0,B.fzQ),B.fCf,B.DM)}d.e=0.3
d.b=27
u=k.af(0,B.fxT)
d.bS(u,new A.L(1.3,i?2.85:2.7,0.16),w,0.3)
if(j){d.e=0.7
d.b=28
u=k.af(0,B.fzo)
d.bS(u,B.fxz,g?B.wM:G.Wg,0.35)
u=k.af(0,B.fAT)
d.bS(u,B.fAt,g?B.wM:B.abQ,0.35)}else{d.e=0.6
u=i?E.aqP:B.daG
t=u.length
s=f+0.47
r=f+0.46
q=f+0.5
p=0
for(;p<t;++p){o=u[p]
d.b=27
n=-0.2+(o+0.04)
d.cM(new A.L(-0.28,n,s),B.fz4,B.DV)
d.cM(new A.L(0.28,n,s),B.fxX,B.DV)
n=-0.2+(o-0.32)
d.pi(new A.L(0,n,r),new A.L(0,n,q),0.11,B.DV,10)}if(i){d.e=0.7
d.b=28
d.bS(k.af(0,B.fzF),B.aQz,B.be1,0.3)
d.bS(k.af(0,B.fBj),B.aQz,B.aef,0.3)}}if(h){d.e=0
return}m=i?0.95:0.85
l=i?-0.75:-0.55
u=new A.f7h(d,k)
if(!j){u.$6$taped(23,-1,m,B.ac8,B.acy,i)
u.$5(24,-1,l,B.ac8,B.acy)}u.$6$taped(21,1,m,B.Vu,B.adO,i)
u.$5(22,1,l,B.Vu,B.adO)
d.e=0.9
d.b=25
d.e5(k.af(0,B.fyA),k.af(0,B.fBF),0.18,B.bfQ,0.7,12)
d.cM(k.af(0,B.fye),B.fyE,D.ec)
d.bS(k.af(0,B.fwH),B.fzH,B.b4Z,0.6)
d.e=0},
h8B(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k=e==="fan",j=A.bxj(e,f)
d.e=0
d.b=55
w=j-0.3
v=j+0.3
u=k?3.3:3.5
t=f.w?B.wM:B.bbl
d.e5(new A.L(0,0,w),new A.L(0,0,v),u,t,0.45,20)
d.b=54
if(k){u=j+4.2
d.e5(new A.L(0,0,v),new A.L(0,0,u),0.45,B.b7Z,0.5,10)
v=j+7.4
d.e5(new A.L(0,0,u),new A.L(0,0,v),3.6,B.V4,0.5,18)
d.e5(new A.L(0,0,v),new A.L(0,0,j+8.6),1.6,B.bfd,0.7,14)}else{d.d=0.92
v=f.w?B.wM:B.b8Q
d.j_(new A.L(0,0,j+1.2),3.6,v,6,14,0.7)
d.d=1}d.b=54
s=[B.elk,B.e8C,B.erP]
for(v=x.o,r=j-3.2,q=0;q<3;++q){u=s[q]
p=f.c===0?r:j
t=u.b.a
d.jM(C.a([new A.L(t,-0.3,w),new A.L(t,-0.3,p+0.4)],v),0.07,u.a,!1,0.3,6)}if(f.c===0)for(w=[B.eeI,B.emP,B.euq],v=f.b,q=0;q<3;++q){o=w[q]
u=o.a
n=A.bzs(e,u,f)
d.b=u
d.e=0.8
t=n.a+0
m=n.b+0
l=n.c
d.e5(new A.L(t,m,l+-0.2),new A.L(t,m,l+0.3),0.09,B.wS,0.6,6)
if(v.ah(0,u))d.Ka(new A.L(t,m,l+-0.5),new A.L(t,m,l+0.9),0.4,o.b,0.26,0.4,8)
d.e=0}},
haD(d,e){var w
d.e=0.4
d.b=30
w=e?B.wM:B.b4a
d.bS(B.fzB,B.aQP,w,0.3)
d.bS(B.fyZ,B.aQP,w,0.3)
d.bS(B.fvF,B.aQW,w,0.3)
d.bS(B.fw7,B.fwP,w,0.3)
d.bS(B.fBB,B.aQW,w,0.3)
d.e5(B.fy1,B.fyX,0.1,B.Kn,0.8,10)
d.e=0},
hPi(d,e){var w,v
d.b=31
for(w=0;w<2;++w){v=B.cR_[w]
d.e5(new A.L(v,0.52,0.2),new A.L(v,0.52,1.9),0.04,B.Kn,0.8,6)}d.bS(B.fuw,B.fB0,B.b8y,0.35)
d.b80(B.aQL,0.2,e?D.Vw:B.bc_,0.9)
if(e){d.d=0.35
d.j_(B.aQL,0.5,D.Vw,4,8,0)
d.d=1}},
mc:function mc(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.e=g
_.f=h},
Xr:function Xr(d){var _=this
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
a3n:function a3n(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.d=f
_.e=g
_.f=h
_.r=i},
fmt:function fmt(){},
fmu:function fmu(){},
fmv:function fmv(){},
fmw:function fmw(){},
fmx:function fmx(){},
flo:function flo(d){this.a=d},
fIK:function fIK(){},
BK:function BK(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
flu:function flu(d){this.a=d},
flv:function flv(d){this.a=d},
fls:function fls(d){this.a=d},
flt:function flt(d){this.a=d},
flq:function flq(){},
flr:function flr(){},
fjv:function fjv(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fjw:function fjw(d){this.a=d},
f5Y:function f5Y(d,e,f){this.a=d
this.b=e
this.c=f},
f7h:function f7h(d,e){this.a=d
this.b=e},
fjj(d){return D.d.dM(B.a0D,new A.fjk(d),new A.fjl())},
yx(d,e,f,g,h,i,j,k){var w=x.S
return new A.S6(d,e,f,g,h,i,j,k,C.a([],x._),C.a([0,0,0],x.t),C.aX(w),C.V(w,x.N),C.a([],x.I))},
fYN(d){var w=new A.aTB(d)
w.c1Q()
return w},
hpy(d){var w=new A.aTB(7)
w.buK(d)
return w},
i2L(d){var w,v=d.c
A:{if("bedroom"===v){w=1
break A}if("kitchen"===v||"bathroom"===v){w=2
break A}w=0
break A}return w},
aTi:function aTi(d,e,f,g){var _=this
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
Dg:function Dg(d,e,f){this.a=d
this.b=e
this.c=f},
u7:function u7(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fjk:function fjk(d){this.a=d},
fjl:function fjl(){},
ps:function ps(d,e,f){this.a=d
this.b=e
this.c=f},
aTw:function aTw(d,e,f){this.a=d
this.b=e
this.c=f},
S6:function S6(d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
_.db="light"
_.dx=p
_.dy=null
_.fr=!1
_.fx=0
_.fy=""
_.id=_.go=null},
bO9:function bO9(){},
aTB:function aTB(d){var _=this
_.a=""
_.b=d
_.c=!1
_.d=$
_.e=0},
bOK:function bOK(){},
bOL:function bOL(){},
bOP:function bOP(){},
bOO:function bOO(){},
bON:function bON(){},
bOM:function bOM(){},
aZ_(d,e,f){return new A.aoO(f,d,e,null)},
aoO:function aoO(d,e,f,g){var _=this
_.d=d
_.f=e
_.r=f
_.a=g},
aCb:function aCb(d){var _=this
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
_.c=_.a=null},
e0p:function e0p(){},
e0n:function e0n(d){this.a=d},
e0o:function e0o(d){this.a=d},
e_C:function e_C(d,e,f){this.a=d
this.b=e
this.c=f},
e_D:function e_D(d){this.a=d},
e_B:function e_B(d){this.a=d},
e_E:function e_E(d,e){this.a=d
this.b=e},
e_b:function e_b(d,e){this.a=d
this.b=e},
e_K:function e_K(d){this.a=d},
e_i:function e_i(d,e){this.a=d
this.b=e},
e_j:function e_j(d,e){this.a=d
this.b=e},
e_k:function e_k(d,e){this.a=d
this.b=e},
e_l:function e_l(d,e){this.a=d
this.b=e},
e_m:function e_m(d,e,f){this.a=d
this.b=e
this.c=f},
e_h:function e_h(d,e){this.a=d
this.b=e},
e_n:function e_n(d){this.a=d},
e_s:function e_s(d,e){this.a=d
this.b=e},
e_q:function e_q(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e_p:function e_p(d,e,f){this.a=d
this.b=e
this.c=f},
e_r:function e_r(d,e,f){this.a=d
this.b=e
this.c=f},
e_o:function e_o(d,e){this.a=d
this.b=e},
e00:function e00(d){this.a=d},
e_Z:function e_Z(d){this.a=d},
e0_:function e0_(d,e){this.a=d
this.b=e},
e_S:function e_S(d,e,f){this.a=d
this.b=e
this.c=f},
e_R:function e_R(){},
e_T:function e_T(){},
e_U:function e_U(d,e){this.a=d
this.b=e},
e_V:function e_V(d){this.a=d},
e_W:function e_W(d){this.a=d},
e_X:function e_X(d){this.a=d},
e_Y:function e_Y(d){this.a=d},
e_P:function e_P(d){this.a=d},
e_O:function e_O(d){this.a=d},
e_M:function e_M(d,e,f){this.a=d
this.b=e
this.c=f},
e_L:function e_L(d,e){this.a=d
this.b=e},
e_N:function e_N(d,e){this.a=d
this.b=e},
e_G:function e_G(d,e){this.a=d
this.b=e},
e_H:function e_H(d){this.a=d},
e_F:function e_F(d,e){this.a=d
this.b=e},
e_I:function e_I(){},
e_J:function e_J(d){this.a=d},
e_d:function e_d(d){this.a=d},
e_e:function e_e(d){this.a=d},
e01:function e01(d){this.a=d},
e_g:function e_g(d){this.a=d},
e_f:function e_f(d){this.a=d},
dZV:function dZV(d){this.a=d},
dZU:function dZU(d,e,f){this.a=d
this.b=e
this.c=f},
dZP:function dZP(){},
dZQ:function dZQ(){},
dZR:function dZR(d){this.a=d},
dZS:function dZS(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e_c:function e_c(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e_Q:function e_Q(d,e){this.a=d
this.b=e},
e_z:function e_z(d,e){this.a=d
this.b=e},
e_A:function e_A(d,e){this.a=d
this.b=e},
dZT:function dZT(d,e){this.a=d
this.b=e},
e_0:function e_0(d){this.a=d},
e_1:function e_1(d){this.a=d},
e_2:function e_2(d){this.a=d},
e_3:function e_3(d){this.a=d},
e_4:function e_4(d,e){this.a=d
this.b=e},
e_5:function e_5(d){this.a=d},
e__:function e__(d){this.a=d},
e_6:function e_6(d,e){this.a=d
this.b=e},
dZZ:function dZZ(d,e){this.a=d
this.b=e},
e_7:function e_7(d,e){this.a=d
this.b=e},
dZY:function dZY(d,e){this.a=d
this.b=e},
e_8:function e_8(d){this.a=d},
dZX:function dZX(d){this.a=d},
e_9:function e_9(d,e){this.a=d
this.b=e},
dZW:function dZW(d,e){this.a=d
this.b=e},
e_a:function e_a(d,e){this.a=d
this.b=e},
e0e:function e0e(d,e){this.a=d
this.b=e},
e09:function e09(d){this.a=d},
e08:function e08(){},
e07:function e07(d){this.a=d},
e0f:function e0f(d){this.a=d},
e06:function e06(d){this.a=d},
e0g:function e0g(d){this.a=d},
e0h:function e0h(d){this.a=d},
e05:function e05(d){this.a=d},
e0i:function e0i(d){this.a=d},
e04:function e04(d){this.a=d},
e0j:function e0j(d){this.a=d},
e0k:function e0k(d){this.a=d},
e0l:function e0l(d){this.a=d},
e0m:function e0m(d){this.a=d},
e0a:function e0a(d){this.a=d},
e0b:function e0b(d){this.a=d},
e0c:function e0c(d){this.a=d},
e03:function e03(){},
e0d:function e0d(d){this.a=d},
e02:function e02(d){this.a=d},
e_y:function e_y(d){this.a=d},
e_v:function e_v(d,e,f){this.a=d
this.b=e
this.c=f},
e_w:function e_w(d,e){this.a=d
this.b=e},
e_u:function e_u(d){this.a=d},
e_x:function e_x(d,e){this.a=d
this.b=e},
e_t:function e_t(d){this.a=d},
bgx:function bgx(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
dlr:function dlr(d,e){this.a=d
this.b=e},
bfW:function bfW(d,e){this.b=d
this.a=e},
hbV(e6,e7,e8,e9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1="walls",e2="GFCI outlet",e3="Wall outlet",e4="\ud83d\udeb0 Needs plumbing",e5=e6.c
if(e5==="outside")return A.hLP(e6,e8)
w=x.z
v=C.a([],w)
u=new A.mG(v)
t=C.V(x.S,x.q)
s=C.a([],x.E)
r=C.a([],x.a)
q=e6.grL(0)
p=e6.gtV(0)
o=C.a([],x.O)
for(n=e6.z,m=n.length,l=0;l<n.length;n.length===m||(0,C.K)(n),++l)o.push(B.auS[n[l]])
k=B.auF[e6.Q]
j=new A.fjG(e7)
u.b=j.$2("floor",310)
n=p/2
m=q+2.4
i=p+2
h=k.b
g=k.c
f=g==="tile"
if(f)e=0.35
else e=g==="wood"?0.15:0
u.q7(new A.L(0,-0.6,n),new A.L(m,1.2,i),h,e,3)
t.n(0,310,new A.da("Floor","The "+k.a.toLowerCase()+" floor.",new A.L(0,0,n),140))
u.b=0
if(g==="wood")for(g=-q/2,d=1;d<8;++d){f=C.aq(h,D.w,0.25)
f.toString
u.cM(new A.L(g+d*q/8,0.05,n),new A.L(0.3,0.2,p),f)}else if(f)for(h=-q/2,d=1;d<6;++d){u.cM(new A.L(h+d*q/6,0.05,n),new A.L(0.3,0.2,p),B.aaS)
u.cM(new A.L(0,0.05,d*p/6),new A.L(q,0.2,0.3),B.aaS)}u.b=j.$2(e1,300)
u.j0(new A.L(0,48,-0.6),new A.L(m,96,1.2),o[0],3)
u.b=j.$2(e1,301)
h=-q
g=h/2
u.j0(new A.L(g-0.6,48,n),new A.L(1.2,96,p),o[1],3)
u.b=j.$2(e1,302)
f=q/2
u.j0(new A.L(f+0.6,48,n),new A.L(1.2,96,p),o[2],3)
t.n(0,300,B.dUc)
t.n(0,301,B.dUg)
t.n(0,302,B.dUp)
u.b=0
u.bS(new A.L(0,2.5,0.4),new A.L(q,5,0.8),B.qu,0.1)
u.bS(new A.L(g+0.4,2.5,n),new A.L(0.8,5,p),B.qu,0.1)
u.bS(new A.L(f-0.4,2.5,n),new A.L(0.8,5,p),B.qu,0.1)
u.b=j.$2("ceiling",320)
u.d=e7==="ceiling"?0.6:0.4
u.j0(new A.L(0,96.6,n),new A.L(m,1.2,i),B.atw[e6.as],2)
u.d=1
u.b=0
u.bS(new A.L(0,94,1),new A.L(q,3,1.4),D.c,0.2)
u.bS(new A.L(g+1,94,n),new A.L(1.4,3,p),D.c,0.2)
u.bS(new A.L(f-1,94,n),new A.L(1.4,3,p),D.c,0.2)
t.n(0,320,new A.da("Ceiling","Pick a colour above to paint the ceiling.",new A.L(0,96,n),140))
o=e6.w
a0=D.d.b8(o,new A.fjy())?"left":"right"
m=e5==="hall"
if(!m){i=C.a([],w)
a1=new A.mG(i)
a1.cM(B.fBT,B.fve,B.A8)
a1.bS(B.ftB,B.fyo,B.Ww,0.5)
a1.cM(B.aQj,B.fzs,B.A8)
a1.cM(B.aQj,B.fx0,B.A8)
a2=p*0.55
D.d.v(v,a0==="right"?A.Cu(i,0,-1.5707963267948966,new A.L(f,0,a2)):A.Cu(i,0,1.5707963267948966,new A.L(g,0,a2)))}for(i=e6.at,d=0;d<o.length;++d){a3=o[d]
a4=i.t(0,d)
e=C.a([],w)
a5=new A.mG(e)
a6=a5.b=600+d
a5.cM(B.fzj,B.fz6,B.qu)
if(a4){a5.b=0
a5.cM(B.fy8,B.fwg,B.K6)
a5.b=a6
a7=A.bBl(B.fC7,-1.25)
a5.aiP(new A.L(-12.5+a7.a,0+a7.b,1.2+a7.c),B.fvG,B.JN,0.15,-1.25)}else{a5.bS(B.fyh,B.fxE,B.JN,0.15)
a5.bS(B.fyn,B.fyB,B.DD,0.8)
a5.cM(B.fyD,B.aR_,B.KN)
a5.cM(B.fBQ,B.aR_,B.KN)}a8=a3.a
A:{if("left"===a8){e=A.Cu(e,0,1.5707963267948966,new A.L(g,0,a3.b+n-40))
break A}if("right"===a8){e=A.Cu(e,0,-1.5707963267948966,new A.L(f,0,a3.b+n-40))
break A}e=A.Cu(e,0,0,new A.L(a3.b,0,0))
break A}D.d.v(v,e)
t.n(0,a6,new A.da("Door","Tap the door to go through it.",B.aQa,90))}for(n=e6.x,i=n.length,l=0;l<n.length;n.length===i||(0,C.K)(n),++l){a9=n[l]
e=a9.b
a6=B.yx.h(0,e)
a6.toString
a7=C.a([],w)
b0=new A.mG(a7)
b1=100+a9.a
b0.b=j.$2("furniture",b1)
A.hIu(b0,e,B.cve[a9.f])
D.d.v(v,A.Cu(a7,0,a9.e*3.141592653589793/2,new A.L(a9.c,0,a9.d)))
t.n(0,b1,new A.da(a6.a,"Move it with the arrow buttons, turn it, change its colour or take it out.",new A.L(a9.c,12,a9.d),90))}b2=p*0.5
w=C.T(o)
b3=D.k.D(new C.cQ(new C.a2(o,new A.fjz(),w.k("a2<1>")),new A.fjA(),w.k("cQ<1,O>")).cH(0,g+30,new A.fjB())+24,g+10,f-10)
b4=e6.db==="fan"
b5=e6.ga4l()
b6=b5&&e6.gT6()&&e6.cy
u.b=703
if(b4){u.pi(new A.L(0,95.5,b2),new A.L(0,86,b2),1,B.rI,8)
u.e5(new A.L(0,86,b2),new A.L(0,79,b2),6,D.t5,0.5,14)
w=b6?B.A6:D.dL
u.e5(new A.L(0,79,b2),new A.L(0,76,b2),3.6,w,0.6,12)}else{w=b6?B.A6:D.dL
u.e5(new A.L(0,95.5,b2),new A.L(0,93,b2),7,w,0.6,16)}if(b6&&!b4){u.b=0
u.d=0.2
u.cFm(new A.L(0,93,b2),new A.L(0,0.5,b2),36,B.A6,!1,14)
u.d=1}b7=b4?"Ceiling fan":"Ceiling light"
if(!b5)b8="It has no power yet. "+(e6.fy.length!==0?"Tap it to wire it.":"The room still needs wiring: use the Wiring button.")
else if(!e6.gT6())b8="It is ready: wire the wall switch to turn it on."
else{w=e6.cy?"It is on. Tap the wall switch (or tap this) to turn it off.":"It is off. Tap the wall switch (or tap this) to turn it on."
b8=w}t.n(0,703,new A.da(b7,b8,new A.L(0,88,b2),80))
w=e5==="bathroom"
o=!w
b9=!o||e5==="kitchen"||e6.fy==="gfci"
n=e6.gaEV()
i=b9?e2:e3
e=e6.fy.length!==0||e6.glp()
a6=b9?e2:e3
a6=C.a([new C.eN([0,700,h/4,n,i]),new C.eN([1,701,q/4,e,a6])],x.R)
for(n=e6.dx,d=0;d<n.length;++d){i=n[d]
h=i.a
if(h!=="switch"){e=i.c
h=e.c>=2&&A.afd(A.Ac(h),e).a==="ok"
e=n[d].a==="gfci"?"Added GFCI outlet":"Added outlet"
a6.push(new C.eN([2+d,800+d,i.b,h,e]))}}for(i=a6.length,h=e6.cx,l=0;l<a6.length;a6.length===i||(0,C.K)(a6),++l){e=a6[l].a
d=e[0]
c0=e[1]
c1=e[2]
c2=e[3]
c3=e[4]
u.b=c0
u.e=0.4
u.d=0.55
e=c2?D.b7:D.aC
u.cM(new A.L(c1,14,0.25),B.fwz,e)
u.d=1
u.e=0
e=c2?B.adG:D.t5
u.bS(new A.L(c1,14,0.9),B.fzE,e,0.25)
u.b=0
for(c4=0;c4<2;++c4)for(e=14+E.tN[c4]*2.8,c5=0;c5<2;++c5)u.cM(new A.L(c1+B.cWk[c5],e,1.7),B.fC4,B.bcb)
u.cM(new A.L(c1,14,1.7),B.fzC,D.dL)
if(!c2)e="This one is not wired yet. Tap it to wire it."
else e=h.h(0,d)==null?"Tap it to plug something in.":"Tap it to plug something else in, or to unplug."
t.n(0,c0,new A.da(c3,e,new A.L(c1,14,2),60))}i=C.a([new C.by(702,b3,e6.gT6())],x.Q)
for(d=0;d<n.length;++d){e=n[d]
a7=e.a
if(a7==="switch"){b1=e.c
a7=b1.c>=2&&A.afd(A.Ac(a7),b1).a==="ok"
i.push(new C.by(800+d,e.b,a7))}}for(n=i.length,l=0;l<i.length;i.length===n||(0,C.K)(i),++l){e=i[l]
c0=e.a
c1=e.b
c2=e.c
u.b=c0
u.e=0.4
u.d=0.55
e=c2?D.b7:D.aC
u.cM(new A.L(c1,48,0.25),B.fxu,e)
u.d=1
u.e=0
e=c2?B.adG:D.t5
u.bS(new A.L(c1,48,0.9),B.fx9,e,0.25)
u.cM(new A.L(c1,e6.cy&&c2?49.2:46.8,1.9),B.fx4,B.bhI)
if(!c2)e="Not wired yet. Tap it to wire it."
else if(e6.cy)e="On. Tap to turn the "+(b4?"fan":"light")+" off."
else e="Off. Tap to turn the "+(b4?"fan":"light")+" on."
t.n(0,c0,new A.da("Light switch",e,new A.L(c1,48,2),60))}if(!e6.ga4l()&&e6.fy.length===0)s.push(new A.ub(new A.L(0,70,b2),"\u26a1 No power: needs wiring",D.bL))
n=!1
if(e6.fy.length!==0)if(!e6.gyx()){n=e6.fy
n=!(n==="ptrap"||n==="faucet")}if(n)s.push(new A.ub(new A.L(0,40,14),"\ud83d\udc46 Tap the red one to wire it",D.bL))
for(n=a6.length,i=x.o,e=e6.a,l=0;l<a6.length;a6.length===n||(0,C.K)(a6),++l){a7=a6[l].a
d=a7[0]
c1=a7[2]
c2=a7[3]
c6=h.h(0,d)
if(c6==null||!c2)continue
c7=A.fjj(c6)
a7=u.b=720+d
u.jM(C.a([new A.L(c1,12,1.8),new A.L(c1,6,3),new A.L(c1,2,11)],i),0.3,B.ad5,!1,0.2,6)
b1=c7.d
c8=b1>0
if(c8){c9=b1*0.56
u.bS(new A.L(c1,2,15),new A.L(b1*0.45,4,14),B.rI,0.3)
u.bS(new A.L(c1,8,15),B.fwj,B.rI,0.3)
d0=12+c9/2
u.bS(new A.L(c1,d0,15),new A.L(b1,c9,3),E.DY,0.5)
b1=(b1-3.5)/2
d1=c1-b1
d2=(c9-3.5)/2
d3=d0+d2
b1=c1+b1
d2=d0-d2
r.push(new A.Wu(C.a([new A.L(d1,d3,16.6),new A.L(b1,d3,16.6),new A.L(b1,d2,16.6),new A.L(d1,d2,16.6)],i),a7,new A.fjC(d*7+e)))}else{b1=c7.a
if(b1==="lamp"){u.e5(new A.L(c1,0,14),new A.L(c1,1,14),6,B.V4,0.4,14)
u.e5(new A.L(c1,1,14),new A.L(c1,22,14),1,B.KO,0.5,8)
b1=e6.cy?B.A6:U.W8
u.B3(new A.L(c1,20,14),new A.L(c1,32,14),9,b1,!1,!0,5.5,0.2,16)}else{u.bS(new A.L(c1,9,15),B.fuC,B.DB,0.1)
if(b1==="toaster"){u.bS(new A.L(c1,23,15),B.fuA,B.ky,0.8)
u.cM(new A.L(c1,28.2,15),B.fAk,B.adU)}else{u.Ka(new A.L(c1-7,21,15),new A.L(c1+7,21,15),3.6,B.Kw,3,0.6,12)
u.bS(new A.L(c1-8,14.5,15),B.fyw,B.Kw,0.6)}}}b1=c8?"It is playing NGMY ads. Tap it to watch full screen with the remote.":"It is plugged in and running. Tap the outlet to unplug it or plug in something else."
t.n(0,a7,new A.da(c7.b,b1,new A.L(c1,16,14),90))}d4=e6.dy
if(d4!=null){c7=A.fjj(d4)
n=m?0.5:0.9
d5=c7.d*n
c9=d5*0.56
d6=d5-2.5
d7=c9-2.5
u.b=730
if(m){u.bS(new A.L(f-1.4,52,50),new A.L(2.6,c9+3,d5+3),B.K6,0.5)
u.bS(new A.L(f-2.8,52,50),new A.L(0.2,c9,d5),H.mK,0.7)
if(e6.fr){d8=f-2.95
n=d7/2
m=52+n
h=d6/2
e=50-h
h=50+h
n=52-n
r.push(new A.Wu(C.a([new A.L(d8,m,e),new A.L(d8,m,h),new A.L(d8,n,h),new A.L(d8,n,e)],i),730,new A.fjD(e6)))}}else{B:{if("living"===e5){n=44
break B}if("kitchen"===e5){n=36
break B}if("bathroom"===e5){n=10
break B}n=34
break B}d9=w?66:58
u.bS(new A.L(n,d9,1.4),new A.L(d5+3,c9+3,2.6),B.K6,0.5)
u.bS(new A.L(n,d9,2.8),new A.L(d5,c9,0.2),H.mK,0.7)
if(e6.fr){m=d6/2
h=n-m
e=d7/2
a6=d9+e
m=n+m
e=d9-e
r.push(new A.Wu(C.a([new A.L(h,a6,2.95),new A.L(m,a6,2.95),new A.L(m,e,2.95),new A.L(h,e,2.95)],i),730,new A.fjE(e6)))}}n=e6.fr?"It is on and playing "+E.jT[e6.fx].a+". Tap it to watch full screen with the remote.":"The TV is off. Tap it to turn it on."
t.n(0,730,new A.da(c7.b,n,new A.L(0,56,4),110))}if(!o||e5==="kitchen"){c2=e6.gop()
e5=new A.fjF(u)
if(w){e0=g+17
if(c2){u.b=710
u.Ka(new A.L(6,0.5,14),new A.L(6,15,14),8,B.A1,5.6,0.8,18)
u.e5(new A.L(6,15,14),new A.L(6,16,14),9,B.KF,0.8,18)
u.bS(new A.L(6,21,5),B.fuH,B.A1,0.8)
u.bS(new A.L(6,28,5),B.fy0,B.KF,0.8)}else{u.b=710
u.d=0.3
u.cM(new A.L(6,14,9),B.fuE,D.b0)
u.d=1
e5.$2(-4,8)}u.b=711
u.bS(new A.L(34,14,10),B.fv9,B.DB,0.1)
u.bS(new A.L(34,29,10),B.fvb,B.acf,0.4)
if(c2){u.e5(new A.L(34,29.3,10),new A.L(34,30.1,10),6.5,D.c,0.6,18)
u.bfZ(C.a([new A.L(34,30,4),new A.L(34,36,4),new A.L(34,38,7)],i),0.6,B.ky,0.9,8)}else{e5.$2(28,18)
e5.$2(40,18)}u.b=712
if(c2){u.bS(new A.L(e0,8,38),B.aQk,B.ae5,0.7)
u.bS(new A.L(e0,16.2,38),B.fAW,B.Vm,0.8)
u.e5(new A.L(e0,30,3),new A.L(e0,52,3),0.7,B.ky,0.9,8)
u.e5(new A.L(e0,52,3),new A.L(e0,52,10),0.7,B.ky,0.9,8)}else{u.d=0.3
u.cM(new A.L(e0,8,38),B.aQk,D.b0)
u.d=1
e5.$2(e0-4,34)
e5.$2(e0+4,34)}e5=c2?"Fitted on its flange with a wax ring, and the supply hose joins the shut-off valve.":"There is no toilet yet: only the flange and the water stub. Use the Plumbing button to fit it."
t.n(0,710,new A.da("Toilet",e5,new A.L(6,14,10),70))
e5=c2?"The faucet, the hoses and the P-trap are fitted.":"The sink is not plumbed. Use the Plumbing button."
t.n(0,711,new A.da("Vanity sink",e5,new A.L(34,28,10),70))
e5=c2?"The bath is in and connected.":"The bath is not connected yet."
t.n(0,712,new A.da("Bath",e5,new A.L(e0,10,38),90))
if(!c2)s.push(new A.ub(new A.L(0,40,14),e4,D.bj))}else{u.b=0
u.bS(new A.L(g+15,36,14),B.fuZ,B.acB,0.6)
u.cM(new A.L(g+28.5,36,14.4),B.fzq,D.dL)
w=f-30
u.bS(new A.L(w,15,14),B.fvW,B.V9,0.1)
u.bS(new A.L(w,31,14),B.fw0,B.rI,0.5)
u.bS(new A.L(f-44,32.4,14),B.aQd,D.l1,0.3)
u.bS(new A.L(f-16,32.4,14),B.aQd,D.l1,0.3)
u.b=713
u.bS(new A.L(0,15,14),B.fvI,B.DB,0.1)
u.bS(new A.L(0,31,14),B.fvJ,B.E4,0.5)
if(c2){u.e5(new A.L(0,32.1,14),new A.L(0,32.7,14),8,B.DT,0.8,18)
u.bfZ(C.a([new A.L(0,32,5),new A.L(0,42,5),new A.L(0,44,9),new A.L(0,44,13)],i),0.7,B.ky,0.9,8)}else{e5.$2(-8,18)
e5.$2(8,18)}e5=c2?"The faucet, the hoses and the drain are fitted.":"The kitchen sink is not plumbed yet. Use the Plumbing button."
t.n(0,713,new A.da("Kitchen sink",e5,new A.L(0,30,14),70))
if(!c2)s.push(new A.ub(new A.L(0,48,14),e4,D.bj))}}return new A.zk(v,t,s,r)},
hLP(d,e){var w,v,u,t=x.z,s=C.a([],t),r=new A.mG(s),q=C.V(x.S,x.q),p=C.a([],x.E)
r.j0(B.fAZ,B.fwv,B.b64,4)
r.cM(B.fyR,B.fxZ,E.DG)
r.cM(B.fzg,B.fxK,B.V9)
r.j0(B.fuf,B.fuW,B.VI,3)
r.cM(B.fwA,B.fv6,B.b4k)
t=C.a([],t)
new A.mG(t).q7(B.w5,B.fuX,B.baZ,0.1,2)
D.d.v(s,A.Cu(t,0.5,0,B.ftI))
D.d.v(s,A.Cu(t,-0.5,0,B.ftJ))
r.cM(B.ftL,B.fuY,B.b9l)
r.cM(B.fy7,B.aR7,B.VI)
r.cM(B.fBh,B.aR7,B.VI)
for(w=0;w<4;++w){v=B.d4u[w]
r.cM(new A.L(v,62,10.5),B.fBZ,B.qu)
r.bS(new A.L(v,62,11.2),B.fBY,B.Ww,0.6)
r.cM(new A.L(v,62,11.6),B.fyO,B.qu)
r.cM(new A.L(v,62,11.6),B.fxS,B.qu)}r.cM(B.fu0,B.fvw,E.DG)
r.cM(B.fzP,B.fw3,B.qu)
r.b=600
r.bS(B.fvC,B.fxJ,B.JN,0.2)
r.bS(B.fwq,B.fwt,B.DD,0.8)
r.cM(B.fwE,B.aQG,B.KN)
r.cM(B.fyz,B.aQG,B.KN)
q.n(0,600,B.dUn)
r.b=0
r.pi(B.fup,B.fuq,5,B.Er,8)
r.EX(B.fur,28,B.aaH,6,10)
r.EX(B.ful,18,B.abv,5,8)
for(w=0;w<4;++w)r.EX(new A.L(B.d4p[w],6,24),7,B.b9a,4,8)
r.pi(B.fvd,B.fvf,1.4,B.Er,6)
r.bS(B.fvg,B.fus,B.bbx,0.3)
t=e===0
u=t?"\u2705 The house is finished":"\ud83c\udfe0 "+e+" rooms still need work"
p.push(new A.ub(B.ftH,u,t?D.cZ:D.dT))
return new A.zk(s,q,p,B.vv)},
hSm(d,e,f){var w,v,u,t,s=C.a([],x.z),r=new A.mG(s),q=d.c==="outside"
if(q||q)return s
if(f!=null&&f.a===d.a)A.hMw(r,f,e)
w=d.gtV(0)
if(d.db==="fan"){v=d.ga4l()&&d.gT6()&&d.cy?e*7:0
r.b=703
for(q=w*0.5,u=0;u<4;++u){t=v+u*3.141592653589793/2
r.aiP(new A.L(Math.cos(t)*15,81,q+Math.sin(t)*15),B.fBN,B.DB,0.1,-t)}}return s},
hMw(d,e,f){var w,v,u,t=C.a([],x.z),s=new A.mG(t),r=e.e,q=r?Math.sin(f*7.5)*0.75:0,p=r?Math.abs(Math.sin(f*15))*0.8:0,o=new A.fed(s),n=-q
r=13+p
o.$5(new A.L(-2.3,r,0),13,3.4,B.acV,q)
o.$5(new A.L(2.3,r,0),13,3.4,B.acV,n)
s.cM(new A.L(-2.3,0.8,1.6+q*6),B.aQE,D.c)
s.cM(new A.L(2.3,0.8,1.6+n*6),B.aQE,D.c)
s.bS(new A.L(0,20+p,0),B.fy5,D.aJ,0.05)
s.EX(new A.L(0,33.5+p,0),5.4,B.VD,6,10)
s.EX(new A.L(0,35.2+p,-1.4),5.6,D.VZ,5,9)
for(r=33.8+p,w=0;w<2;++w)s.EX(new A.L(B.cDF[w],r,4.7),0.8,D.l1,3,5)
s.cM(new A.L(0,31.4+p,5.1),B.fAc,D.es)
r=26+p
v=e.r
u=v?-0.6:n
o.$5(new A.L(-5.6,r,0),12,2.8,B.VD,u)
u=v?-1.35:q
o.$5(new A.L(5.6,r,0),12,2.8,B.VD,u)
if(v)s.e5(new A.L(5.6,17.2+p,10.5),new A.L(5.6,22+p,10.5),1.7,D.aW,0.5,8)
D.d.v(d.a,A.Cu(t,0,e.d,new A.L(e.b,0,e.c)))},
hIu(d,e,f){var w,v,u,t=C.aq(f,D.w,Math.abs(-0.25))
t.toString
w=C.aq(f,D.c,Math.abs(0.2))
w.toString
switch(e){case"bed":d.bS(B.a7r,B.fvV,B.Er,0.1)
d.bS(B.ftM,B.fvN,f,0.05)
d.cM(B.fAI,B.aQf,B.ad6)
d.cM(B.fuy,B.aQf,B.ad6)
d.bS(B.ftX,B.fvX,B.Er,0.1)
d.cM(B.ftQ,B.fAp,w)
break
case"nightstand":d.bS(B.Th,B.fuB,f,0.1)
d.cM(B.fzK,B.fwb,t)
d.cM(B.fC0,B.fvq,B.acM)
d.cM(B.ftY,B.fwD,B.A6)
break
case"wardrobe":d.bS(B.fu4,B.fvx,f,0.1)
d.cM(B.fwQ,B.fvE,t)
d.bS(B.fyi,B.aQR,B.DD,0.8)
d.bS(B.fC9,B.aQR,B.DD,0.8)
break
case"desk":d.bS(B.aQ9,B.fvB,f,0.1)
d.cM(B.fAK,B.aQi,t)
d.cM(B.fuT,B.aQi,t)
d.bS(B.fu9,B.fuU,B.K6,0.5)
d.cM(B.fu2,B.fw5,D.t5)
break
case"rug":d.j0(B.fBx,B.fuI,f,2)
d.cM(B.fwI,B.fB3,w)
break
case"sofa":d.bS(B.Th,B.fwn,f,0.05)
d.bS(B.ftW,B.fwo,t,0.05)
d.bS(B.fAM,B.aQq,t,0.05)
d.bS(B.fvk,B.aQq,t,0.05)
d.cM(B.fAH,B.aQg,w)
d.cM(B.fux,B.aQg,w)
break
case"armchair":d.bS(B.Th,B.fv7,f,0.05)
d.bS(B.ftV,B.fv8,t,0.05)
d.cM(B.fAG,B.aQn,t)
d.cM(B.fuu,B.aQn,t)
break
case"coffee":d.bS(B.aQ8,B.fvu,f,0.2)
for(v=0;v<4;++v){w=B.d4g[v]
d.cM(new A.L(w.a,6.5,w.b),B.fv2,t)}d.bS(B.fxt,B.fww,D.bX,0.5)
break
case"tvstand":d.bS(B.aQb,B.fvL,f,0.1)
d.cM(B.fwl,B.fxj,t)
d.bS(B.fu3,B.fvA,E.DY,0.7)
d.bS(B.fxw,B.fxb,D.fl,0.9)
d.cM(B.ftS,B.fwx,B.rI)
break
case"dining":d.bS(B.aQ9,B.fvM,f,0.2)
for(v=0;v<4;++v){w=B.czG[v]
d.cM(new A.L(w.a,13,w.b),B.fvp,t)}break
case"chair":d.bS(B.ftO,B.fuF,f,0.1)
d.bS(B.fu_,B.fuD,f,0.1)
for(v=0;v<4;++v){w=B.cW1[v]
d.cM(new A.L(w.a,7.5,w.b),B.fuS,t)}break
case"plant":d.pi(B.w5,B.aQb,5,D.dj,10)
d.EX(B.ftP,8,B.aaH,5,8)
d.EX(B.fvo,5,B.abv,4,8)
break
case"lamp":d.pi(B.w5,B.w6,4.5,B.rI,10)
d.pi(B.w6,B.fuc,0.7,B.rI,6)
d.cFn(B.fua,B.fug,6,B.A6,3.5,12)
break
case"console":d.bS(B.ftZ,B.fvv,f,0.15)
d.cM(B.fxH,B.aQh,t)
d.cM(B.fwL,B.aQh,t)
d.cM(B.Th,B.fAV,t)
break
case"shelf":d.bS(B.fu1,B.fvj,f,0.1)
for(u=0;u<4;++u){t=10+u*15
d.cM(new A.L(0,t,1),B.fvc,B.rI)
w=D.o.F(u,2)
d.cM(new A.L(-8+w*6,t,2),B.fvT,[D.eM,D.dS,D.fm,D.dT][u])
d.cM(new A.L(4+w*4,t,2),B.fwy,[D.dT,D.fm,D.eM,D.dS][u])}break
default:d.cM(B.a7r,B.fum,f)}},
fjG:function fjG(d){this.a=d},
fjy:function fjy(){},
fjz:function fjz(){},
fjA:function fjA(){},
fjB:function fjB(){},
fjC:function fjC(d){this.a=d},
fjD:function fjD(d){this.a=d},
fjE:function fjE(d){this.a=d},
fjF:function fjF(d){this.a=d},
fed:function fed(d){this.a=d},
fYO(){var w=x.S
return new A.bOR(C.ew([72],w),C.aX(w),C.aX(w),C.aX(w))},
hSn(d){var w
A:{if(81===d){w="outlet"
break A}if(82===d){w="switch"
break A}if(84===d){w="gfci"
break A}if(86===d||87===d){w="ptrap"
break A}if(85===d){w="faucet"
break A}w=null
break A}return w},
af1(a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=C.a([],x.z),a0=new A.mG(d)
a0.b=70
a0.j0(B.fA6,B.fB9,B.bb5,4)
a0.c=1
a0.b=91
w=new A.fjL(a0)
w.$3(B.fxd,B.fwN,15)
w.$4$alongX(B.fAU,B.fze,11,!1)
w.$4$alongX(B.fvP,B.fwU,11,!1)
w.$4$alongX(B.fAJ,B.fxo,6,!1)
w.$4$alongX(B.fwh,B.fzf,6,!1)
for(v=0;v<=12;++v)a0.aB8(new A.L(-12+v*2,8.4,0),B.fzI,B.VQ,!1,0.05)
a0.c=2
a0.b=92
u=new A.fjI(a0)
u.$2(B.ccn,B.rU)
u.$2(B.d1K,B.nu)
u.$2(B.d5Z,B.nu)
t=new A.fjH(a0)
t.$1(B.cLp)
t.$1(B.cQP)
a0.c=3
a0.b=93
s=new A.fjK(a0)
s.$1(B.cKq)
s.$2$col(B.cIV,B.wB)
s.$2$col(B.cIa,B.wB)
s.$1(B.cZU)
a0.c=4
a0.b=0
a0.d=0.22
a0.j0(B.fwT,B.fyK,B.zV,4)
a0.j0(B.fyI,B.aQM,B.zV,4)
a0.j0(B.fxe,B.aQM,B.zV,4)
a0.j0(B.fxO,B.aQQ,B.zV,3)
a0.j0(B.fBX,B.aQQ,B.zV,3)
a0.d=1
a0.c=5
a0.e=0.3
a0.b=0
a0.q7(B.fAF,B.fwR,B.b8Z,0.1,4)
a0.b=71
a0.bS(B.fAa,B.fzJ,B.abb,0.5)
a0.cM(B.fBH,B.fxD,B.DM)
r=[72,73,74,75,76]
for(q=a1.d,p=a1.e,v=0;v<5;++v){o=D.o.F(v,2)
n=D.o.an(v,2)
m=r[v]
l=q.t(0,m)
k=p.t(0,m)
a0.b=m
m=9.55+o*0.5
j=5.7-n*0.5
a0.bS(new A.L(m,j,-7.5),B.fwB,B.ael,0.3)
if(l)i=0
else i=k?-0.07:0.07
if(l)h=D.cb
else h=k?D.bo:D.bX
a0.bS(new A.L(m+0,j+i,-7.42),B.fxr,h,0.4)}a0.b=90
a0.bS(B.fzh,B.fvS,B.bhz,0.1)
a0.bS(B.fAX,B.fx5,B.Wl,0.1)
a0.bS(B.fCg,B.aR3,B.Wl,0.1)
a0.bS(B.fx_,B.aR3,B.Wl,0.1)
g=new A.fjJ(a0)
g.$3(81,B.fwm,a1.x?B.wM:B.W6)
a0.b=81
a0.cM(B.fzi,B.aQY,B.DV)
a0.cM(B.fyb,B.aQY,B.DV)
g.$5$h$w(82,B.fBK,G.Wg,0.65,0.4)
a0.b=82
a0.bS(B.fAs,B.fvR,B.abQ,0.4)
f=!q.t(0,72)
a0.b=83
a0.e5(B.fAl,B.aQA,0.5,B.bfv,0.4,14)
a0.b80(B.fBm,0.3,f?A1.W9:B.baO,0.7)
if(f){a0.b=0
a0.d=0.22
a0.j_(B.aQt,1.5,B.Vr,4,10,0)
a0.d=1}a0.b=94
a0.bS(B.fBf,B.aR5,B.m0,0.1)
a0.bS(B.fzt,B.aR5,B.m0,0.1)
a0.bS(B.fBI,B.fxg,B.m0,0.1)
a0.q7(B.fyV,B.fBo,B.E4,0.5,2)
a0.bS(B.fA8,B.fCc,B.DT,0.7)
a0.b=85
a0.jM(A.G6(B.cU8,0.2,6),0.055,B.ky,!1,0.9,8)
a0.b=84
a0.bS(B.fBv,B.fAA,B.W6,0.3)
a0.cM(B.fxV,B.fBG,a1.y?B.acn:B.aef)
a0.b=86
a0.jM(A.G6(B.cLR,0.35,3),0.11,B.p9,!1,0.3,8)
a0.b=87
a0.e5(B.fys,B.fAd,0.19,a1.c?B.Ve:B.bdE,0.3,8)
a0.b=88
a0.bS(B.fvz,B.fwF,B.A1,0.7)
a0.Ka(B.fA5,B.aQZ,0.72,B.A1,0.55,0.7,16)
a0.e5(B.aQZ,B.fz1,0.78,B.bf8,0.7,16)
a0.b=89
a0.e5(B.fB_,B.aQv,0.85,B.b4R,0.6,18)
a0.e5(B.aQv,B.fyJ,0.5,B.b4S,0.5,12)
a0.cM(B.fzz,B.fC6,B.bdy)
a0.b=95
for(p=a1.f,m=a1.r,v=0;v<3;++v){e=B.csl[v]
if(m.t(0,v)){j=e.a
i=e.b
a0.cM(new A.L(j,i,-7.82),B.fAn,B.zV)
a0.cM(new A.L(j,i,-7.79),B.fyN,B.b7I)}else if(p.t(0,v)){j=e.a
i=e.b
a0.cM(new A.L(j,i,-7.82),B.fuQ,B.adn)
a0.cM(new A.L(j,i,-7.8),B.fzr,B.bhP)}}if(a1.w){a0.b=96
a0.e5(B.fyP,B.fyp,0.1,D.dj,0.7,8)}a0.e=0
a0.c=6
a0.b=0
a0.d=0.4
a0.beT(B.aQo,B.aQX,B.a7x,B.a7v,B.abh,B.fzb,!0)
a0.beT(B.aQU,B.aR1,B.a7v,B.a7x,B.abh,B.fAr,!0)
a0.bfX(B.aQo,B.aR1,B.a7v,B.abw)
a0.bfX(B.aQX,B.aQU,B.a7x,B.abw)
a0.d=1
p=q.t(0,72)?"This breaker has TRIPPED (it is in the middle, orange). The living room has no power. Tap it to flip it off and on again.":"This breaker is ON. The living room has power."
q=q.t(0,72)?"The light is off because the living room breaker has tripped.":"The ceiling light is on."
m=a1.b
j=m&&!a1.c?"Water is dripping from the slip nut here. Pick the wrench, then tap the nut to tighten it.":"The P-trap holds a water seal that blocks sewer gas. Tap Open lesson to build one."
m=m&&!a1.c?"This slip nut is loose and the trap is dripping. Pick the wrench and tap here to tighten it.":"The slip nut is tight."
return new A.zk(d,C.E([70,B.dUV,91,B.dUk,92,B.dUE,93,B.dUM,71,B.dUZ,72,new A.da("Living room breaker",p,B.fC2,3.5),73,B.dUw,74,B.dUO,75,B.dUb,76,B.dUH,81,B.dUJ,82,B.dU2,83,new A.da("Ceiling light",q,B.aQA,7),84,B.dUP,85,B.dUd,86,new A.da("P-trap under the sink",j,B.fA4,4.5),87,new A.da("Slip nut (leaking?)",m,B.aQC,3.5),88,B.dU_,89,B.dUN,90,B.dUR,94,B.dUv,95,B.dUT,96,B.dU4],x.S,x.q),B.GC,B.vv)},
hcB(d,e){var w,v,u,t,s,r,q,p=C.a([],x.z),o=new A.mG(p)
o.c=5
o.e=0.8
if(d.w)for(w=e*1.5,v=0;v<6;++v){u=D.k.F(w+v/6,1)
o.j_(new A.L(3.4+Math.sin(v*2)*0.12,3.3-u*u*2.8,-7.7),0.05,D.K5,3,6,0.9)}if(d.as){u=D.k.F(e*1.1,1)
o.j_(new A.L(3,3.9-u*u*0.7,-6.95),0.05,B.Vo,3,6,0.9)}if(d.Q)for(w=e*1.6,v=0;v<6;++v){u=D.k.F(w+v/6,1)
o.j_(new A.L(8.2+Math.sin(v*1.7)*0.15,2.2-u*1.5,-7.2),0.05,B.Vo,3,6,0.9)}if(d.at){o.d=0.55
o.bS(B.fwZ,B.fxR,B.bfl,0.8)
o.d=1}if(d.x)for(w=e*2,t=e*6,v=0;v<8;++v){u=D.k.F(w+v*0.13,1)
s=v*2.4+t
r=Math.cos(s)
s=Math.sin(s)
q=C.aq(E.Wo,E.Wt,1-u)
q.toString
o.j_(new A.L(-3.2+r*u*0.7,1.3+s*u*0.7,-7.6+u*0.3),0.05,q,3,5,0)}if(d.z&&!d.d.t(0,72)){o.b=0
o.d=D.k.D((Math.sin(e*17)+Math.sin(e*29)+2)/4*0.5,0,0.6)
o.j_(B.aQt,1.5,B.Vr,4,10,0)
o.d=1}if(d.b&&!d.c){for(w=e*1.3,v=0;v<5;++v){u=D.k.F(w+v*0.2,1)
o.j_(new A.L(3.05,1.45-u*u*1.4,-6.95),0.05,B.KI,3,6,0.9)}o.d=0.5
o.bS(B.fwM,new A.L(0.7+0.3*Math.sin(e),0.02,0.5),B.KI,0.9)
o.d=1}return p},
bOR:function bOR(d,e,f,g){var _=this
_.a=5
_.b=!0
_.c=!1
_.d=d
_.e=e
_.f=f
_.r=g
_.at=_.as=_.Q=_.z=_.y=_.x=_.w=!1},
fjL:function fjL(d){this.a=d},
fjI:function fjI(d){this.a=d},
fjH:function fjH(d){this.a=d},
fjK:function fjK(d){this.a=d},
fjJ:function fjJ(d){this.a=d},
mV(d,e,f,g){var w
try{F.dF(d,"",e,0,f,g)}catch(w){}},
y4(){A.mV(880,80,0.25,"tri")
C.bN(S.af3,new A.fkF(),x.H)},
hui(){return new A.My(null)},
WO(d,e,f,g,h,i,j,k,l,m,n,o,p,q){return new A.b4N(o,d,n,m,g,e,j,k,f,h,p,q,i,l,null)},
Q7(d,e,f,g,h){var w=null,v=g?e.j(0.25):D.w.j(0.5),u=C.m(18),t=C.I(g?e:D.b5,D.r,1),s=x.p,r=C.a([],s)
D.d.v(r,C.a([C.W(f,g?e:D.ad,w,w,w,16),D.ea],s))
r.push(C.d(d,w,w,w,w,w,w,C.l(w,w,g?e:D.ad,w,w,w,w,w,w,w,w,12,w,w,D.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w))
return C.aE(w,C.p(w,C.A(r,D.m,w,D.e,D.Q,0,w,w),D.f,w,w,new C.o(v,w,t,u,w,w,D.n),w,w,w,w,D.h3,w,w,w),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,h,w,w,w,w,w,w,!1,D.a8)},
y3(d,e,f,g){var w=null,v=f==null,u=v?D.dq:g.j(0.9),t=C.m(14),s=C.W(e,v?D.c_:D.w,w,w,w,18)
return C.D(C.aE(w,C.p(w,C.A(C.a([s,D.bp,new C.dm(1,D.ci,C.d(d,w,w,w,w,w,w,C.l(w,w,v?D.c_:D.w,w,w,w,w,w,w,w,w,12.5,w,w,D.u,w,w,!0,w,w,w,w,w,w,w,w),D.L,w,w),w)],x.p),D.m,w,D.ba,D.j,0,w,w),D.f,w,w,new C.o(u,w,w,t,w,w,D.n),w,w,w,w,D.uS,w,w,w),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,!1,D.a8),1)},
fAS(d,e,f,g){return C.bV(E.nx,null,new A.fAU(e,g,f),d,!0,!0,!0,D.lN,!1,!1,x.H)},
fkF:function fkF(){},
F9:function F9(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
My:function My(d){this.a=d},
bht:function bht(){this.d=!1
this.c=this.a=null},
dJ7:function dJ7(d){this.a=d},
dJa:function dJa(d){this.a=d},
dJb:function dJb(d){this.a=d},
dJ9:function dJ9(d){this.a=d},
dJc:function dJc(d){this.a=d},
dJ8:function dJ8(d){this.a=d},
dJe:function dJe(d){this.a=d},
dJf:function dJf(d){this.a=d},
dJg:function dJg(d){this.a=d},
dJh:function dJh(d){this.a=d},
dJi:function dJi(d){this.a=d},
dJj:function dJj(d){this.a=d},
dJk:function dJk(d){this.a=d},
dJl:function dJl(d,e){this.a=d
this.b=e},
dJd:function dJd(d){this.a=d},
b4N:function b4N(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
coG:function coG(d){this.a=d},
coH:function coH(d){this.a=d},
fAU:function fAU(d,e,f){this.a=d
this.b=e
this.c=f},
fAT:function fAT(){},
AS:function AS(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
bQW:function bQW(d){this.a=d},
GN:function GN(d,e,f){this.c=d
this.d=e
this.a=f},
ay2:function ay2(){var _=this
_.r=_.f=_.e=_.d=$
_.w=""
_.x=0
_.y=null
_.z=!1
_.Q=0
_.c=_.a=_.as=null},
d1k:function d1k(d,e,f){this.a=d
this.b=e
this.c=f},
d1l:function d1l(d){this.a=d},
d1j:function d1j(d){this.a=d},
d1d:function d1d(d){this.a=d},
d1c:function d1c(d){this.a=d},
d1e:function d1e(d){this.a=d},
d1f:function d1f(d){this.a=d},
d1g:function d1g(d,e){this.a=d
this.b=e},
d1h:function d1h(d,e){this.a=d
this.b=e},
d1i:function d1i(d){this.a=d},
d1m:function d1m(d){this.a=d},
d1u:function d1u(){},
d1x:function d1x(d,e,f){this.a=d
this.b=e
this.c=f},
d1v:function d1v(d){this.a=d},
d1t:function d1t(d){this.a=d},
d1w:function d1w(d){this.a=d},
d1s:function d1s(d){this.a=d},
d1y:function d1y(d){this.a=d},
d1z:function d1z(d){this.a=d},
d1A:function d1A(d){this.a=d},
d1B:function d1B(d,e){this.a=d
this.b=e},
d1r:function d1r(d,e){this.a=d
this.b=e},
d1C:function d1C(d){this.a=d},
d1q:function d1q(d){this.a=d},
d1D:function d1D(d){this.a=d},
d1p:function d1p(d){this.a=d},
d1E:function d1E(d){this.a=d},
d1o:function d1o(d){this.a=d},
d1F:function d1F(d){this.a=d},
d1n:function d1n(d){this.a=d},
a8c:function a8c(d,e){this.c=d
this.a=e},
aDY:function aDY(){var _=this
_.f=_.e=_.d=$
_.r=""
_.w=0
_.x=null
_.y=!1
_.c=_.a=_.z=null},
eK5:function eK5(d,e,f){this.a=d
this.b=e
this.c=f},
eK6:function eK6(d){this.a=d},
eK4:function eK4(d){this.a=d},
eJZ:function eJZ(d){this.a=d},
eK_:function eK_(d,e){this.a=d
this.b=e},
eK0:function eK0(d,e){this.a=d
this.b=e},
eK1:function eK1(d,e){this.a=d
this.b=e},
eK2:function eK2(d){this.a=d},
eK3:function eK3(d,e){this.a=d
this.b=e},
eKa:function eKa(){},
eKe:function eKe(d,e){this.a=d
this.b=e},
eKb:function eKb(d){this.a=d},
eKc:function eKc(d,e){this.a=d
this.b=e},
eK9:function eK9(d,e){this.a=d
this.b=e},
eKd:function eKd(d){this.a=d},
eK8:function eK8(d){this.a=d},
eK7:function eK7(){},
a3E:function a3E(d,e){this.c=d
this.a=e},
ayh:function ayh(){var _=this
_.f=_.e=_.d=$
_.r=""
_.w=0
_.x=null
_.y=!1
_.c=_.a=_.z=null},
d4f:function d4f(d,e,f){this.a=d
this.b=e
this.c=f},
d4g:function d4g(d){this.a=d},
d4e:function d4e(d){this.a=d},
d47:function d47(d){this.a=d},
d4a:function d4a(d){this.a=d},
d4b:function d4b(d,e){this.a=d
this.b=e},
d4c:function d4c(d,e){this.a=d
this.b=e},
d49:function d49(d){this.a=d},
d4d:function d4d(d,e){this.a=d
this.b=e},
d48:function d48(d){this.a=d},
d4k:function d4k(){},
d4q:function d4q(d,e){this.a=d
this.b=e},
d4l:function d4l(d){this.a=d},
d4m:function d4m(d){this.a=d},
d4j:function d4j(d){this.a=d},
d4o:function d4o(d,e){this.a=d
this.b=e},
d4i:function d4i(d,e){this.a=d
this.b=e},
d4n:function d4n(d){this.a=d},
d4p:function d4p(d){this.a=d},
d4h:function d4h(d){this.a=d},
az9:function az9(d){this.a=d},
aza:function aza(d){var _=this
_.d=d
_.f=_.e=$
_.r=0
_.w=""
_.x=null
_.y=!1
_.c=_.a=_.z=null},
dbj:function dbj(d,e,f){this.a=d
this.b=e
this.c=f},
dbk:function dbk(d){this.a=d},
dbi:function dbi(d){this.a=d},
dbd:function dbd(d){this.a=d},
dbf:function dbf(d,e){this.a=d
this.b=e},
dbg:function dbg(d,e){this.a=d
this.b=e},
dbh:function dbh(d,e){this.a=d
this.b=e},
dbe:function dbe(d){this.a=d},
dbs:function dbs(d,e){this.a=d
this.b=e},
dbn:function dbn(d,e){this.a=d
this.b=e},
dbp:function dbp(d){this.a=d},
dbo:function dbo(d){this.a=d},
dbq:function dbq(d){this.a=d},
dbm:function dbm(d){this.a=d},
dbr:function dbr(d){this.a=d},
dbl:function dbl(d,e){this.a=d
this.b=e},
jw:function jw(d,e){this.a=d
this.b=e},
LV:function LV(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a5J:function a5J(d){this.a=d},
c4B:function c4B(d){this.a=d},
fNL(){var w=x.N
return new A.cfp(C.aX(w),C.E(["n1",!1,"n2",!1],w,x.y),C.V(x.S,w))},
i1Y(d,e,f){var w,v
if(!f.c.t(0,e)){w=f.d
return e==="hot"?"The red (hot) hose goes on the LEFT side only. "+w:"The blue (cold) hose goes on the RIGHT side only. "+w}w=d.e
v=f.a
if(w.h(0,v)!=null)return"That connection already has a hose."
w.n(0,v,e)
return null},
fAg(){var w,v,u=C.a([B.aQl,B.fyk],x.o)
for(w=1;w<=12;++w){v=3.141592653589793+3.141592653589793*w/12
u.push(new A.L(3+3*Math.cos(v),0.2+3*Math.sin(v),0))}D.d.v(u,A.G6(B.cVl,1,6))
return u},
bz8(d){var w,v,u,t,s="trap",r=C.a([],x.z),q=new A.mG(r)
q.b=49
q.q7(B.fuL,B.fvs,B.m0,0.1,2)
q.q7(B.fBV,B.fuN,B.m0,0.1,2)
q.b=47
q.j0(B.fza,B.fvt,B.uE,3)
q.j0(B.fv5,B.fuO,B.uE,3)
q.b=46
q.q7(B.fvU,B.fzM,B.E4,0.5,3)
q.b9W(B.fAE,B.aQ8,6.5,B.DT,!0,0.7,20)
q.e5(B.fA1,B.fy4,1.5,B.ky,0.85,14)
q.b=48
q.a2H(B.a7y,B.fxc,0.92,B.p9,!1,!0,0.3,14)
q.cQo(B.a7y,B.fBr,1,0.72,B.p9,0.3)
w=new A.fkl(d,q)
w.$5(41,B.a1i,B.ky,0.85,"tail")
w.$5(42,A.fAg(),B.p9,0.3,s)
w.$5(43,B.a27,B.p9,0.3,"arm")
w=new A.fkk(d,q)
v=d.a
w.$6(44,"n1",B.a7u,B.w6,B.fxm,v.t(0,"tail")&&v.t(0,s))
w.$6(45,"n2",B.a7w,B.Ti,B.fAz,v.t(0,s)&&v.t(0,"arm"))
if(v.t(0,s)){q.b=0
q.d=0.55
q.e=0.4
u=A.fAg()
w=C.T(u).k("a2<1>")
t=C.B(new C.a2(u,new A.fkj(),w),w.k("H.E"))
if(t.length>1)q.aGH(t,0.4092,B.bhA,!1,!0,0.6,8)
q.d=1
q.e=0}return new A.zk(r,C.E([41,B.dUf,42,B.dUh,43,B.dUL,44,B.dUz,45,B.dUW,46,B.dUm,47,B.dUt,48,B.dTY,49,B.dUj],x.S,x.q),B.GC,B.vv)},
i_X(d,e){var w,v,u,t,s,r,q,p=C.a([],x.z),o=new A.mG(p),n=d.d
if(n.length!==0){w=n==="n1"?B.fC8:B.fB6
for(n=e*1.4,v=w.a+0,u=w.b,t=w.c+0,s=0;s<5;++s){r=D.k.F(n+s*0.2,1)
o.j_(new A.L(v,u+(-r*6*r-r*1.5),t),0.22*(1-r*0.3),B.KI,3,6,0.9)}}else if(d.c){n=x.x
v=C.B(B.a1i,n)
u=A.fAg()
D.d.v(v,C.db(u,1,null,C.T(u).c))
D.d.v(v,C.db(B.a27,1,null,n))
for(n=e*0.45,s=0;s<18;++s){r=D.k.F(n+s/18,1)
q=D.o.D(D.k.bw(r*(v.length-1)),0,v.length-2)
u=v.length
o.j_(A.zC(v[q],v[q+1],r*(u-1)-q),0.38,B.bh3,3,6,0.9)}for(n=e*2.2,s=0;s<6;++s)o.j_(new A.L(0,14-D.k.F(n+s/6,1)*5.4,0),0.3,B.Vo,3,6,0.9)}return p},
afe(d){switch(d){case 61:return B.fuK
case 62:return B.fB4
case 63:return B.fyF
default:return B.fyv}},
fSn(d){var w=d==="hot",v=A.afe(w?61:62),u=A.afe(w?63:64),t=w?-1:1
return A.agr(C.a([v,v.af(0,new A.L(t*0.6,2.2,1.2)),A.zC(v,u,0.5).af(0,new A.L(t*1.4,0,2.6)),u.af(0,new A.L(-t*0.2,-2,1)),u],x.o),6)},
aNc(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=C.a([],x.z),e=new A.mG(f)
e.b=67
e.j0(B.fuJ,B.fvi,B.uE,3)
e.b=66
e.q7(B.fyj,B.fBq,B.E4,0.5,3)
e.pi(B.fAm,B.fzm,5.5,E.DY,16)
e.b=65
e.e5(B.fBg,B.aQT,3.4,B.ky,0.9,20)
e.jM(A.G6(B.d_s,1.4,6),0.5,B.ky,!0,0.9,12)
for(w=0;w<2;++w){v=B.cW3[w]
u=v*1.2
e.e5(new A.L(u,15.5,-3.6),new A.L(u,17.7,-3.6),0.38,B.ky,0.9,10)
t=v<0?B.rU:B.nu
e.e5(new A.L(u,17.7,-3.6),new A.L(u,18.6,-3.6),0.6,t,0.6,12)}for(u=[B.edZ,B.e9R],w=0;w<2;++w){t=u[w]
v=t.b
e.b=t.a
e.e5(new A.L(v,15.3,-3.6),new A.L(v,11.4,-3.6),0.45,B.ky,0.9,10)
e.e5(new A.L(v,11.4,-3.6),new A.L(v,10.7,-3.6),0.3,B.bdi,0.6,8)
e.yS(new A.L(v,11.3,-3.6),new A.L(v,11.9,-3.6),0.78,0.48,B.bf6,0.7,8)}for(u=[B.ev2,B.ewL],w=0;w<2;++w){t=u[w]
v=t.b
e.b=t.a
e.e5(new A.L(v,-1.5,-6),new A.L(v,-1.5,-3.6),0.4,B.JX,0.7,12)
e.e5(new A.L(v,-1.5,-4.4),new A.L(v,0.7,-4.4),0.78,B.rK,0.8,12)
e.e5(new A.L(v,0.7,-4.4),new A.L(v,1.5,-3.6),0.38,B.rK,0.8,10)
e.e5(new A.L(v,-0.2,-4.4),new A.L(v,-0.2,-3.1),0.2,B.aaY,0.7,8)
e.e5(new A.L(v,-0.2,-3.1),new A.L(v,-0.2,-2.8),0.95,t.c,0.5,12)
e.yS(new A.L(v,1.2,-3.6),new A.L(v,1.9,-3.6),0.78,0.4,B.rK,0.8,8)}for(u=x.o,w=0;w<2;++w){s=B.d1O[w]
t=s==="hot"
r=t?B.ctf:B.cts
q=C.T(r).k("a2<1>")
p=C.B(new C.a2(r,new A.fjx(d,s),q),q.k("H.E"))
e.b=t?68:69
o=t?B.rU:B.nu
t=p.length
if(t===2){n=A.fSn(s)
e.jM(n,0.34,B.Kz,!1,0.7,8)
m=n.length/2|0
e.jM(C.a([n[m-1],n[m],n[m+1]],u),0.4,o,!1,0.4,8)
for(t=r.length,l=0;l<t;++l){k=A.afe(r[l])
q=k.a+0
j=k.b
i=k.c+0
e.yS(new A.L(q,j+-0.2,i),new A.L(q,j+0.6,i),0.62,0.3,B.rK,0.8,8)}}else if(t===1){k=A.afe(D.d.gL(p))
h=D.d.gL(p)===D.d.gL(r)?1:-1
t=k.a+0
q=k.b
j=k.c
e.jM(C.a([k,new A.L(t,q+h*1.4,j+1),new A.L(t,q+h*3,j+2.4)],u),0.34,B.Kz,!1,0.7,8)
j+=0
e.yS(new A.L(t,q+-0.2,j),new A.L(t,q+0.6,j),0.62,0.3,B.rK,0.8,8)}}if(d.r){e.b=0
e.d=0.5
for(u=d.e,w=0;w<4;++w){g=B.a22[w]
t=g.a
if(u.h(0,t)!=null)continue
t=A.afe(t)
q=g.c.t(0,"hot")?B.rU:B.nu
e.j_(new A.L(t.a+0,t.b+0,t.c+0.9),0.65,q,4,8,0.1)}e.d=1}return new A.zk(f,C.E([61,B.dU6,62,B.dU8,63,B.dU1,64,B.dU9,65,B.dUu,66,B.dUq,67,B.dTZ,68,B.dV_,69,B.dUx],x.S,x.q),B.GC,B.vv)},
hRV(d,e){var w,v,u,t,s,r,q,p,o,n=C.a([],x.z),m=new A.mG(n)
if(!d.f)return n
w=d.e
v=w.h(0,61)==="hot"&&w.h(0,63)==="hot"
u=w.h(0,62)==="cold"&&w.h(0,64)==="cold"
t=new A.flN(e,m)
if(v){s=A.fSn("hot")
for(r=e*0.5,q=0;q<10;++q){p=D.k.F(r+q/10,1)
o=D.o.D(D.k.bw(p*(s.length-1)),0,s.length-2)
m.j_(A.zC(s[o],s[o+1],p*(s.length-1)-o),0.2,D.K5,3,6,0.9)}}else if(w.h(0,61)==null)t.$2(61,D.K5)
if(u){s=A.fSn("cold")
for(w=e*0.5,q=0;q<10;++q){p=D.k.F(w+q/10,1)
o=D.o.D(D.k.bw(p*(s.length-1)),0,s.length-2)
m.j_(A.zC(s[o],s[o+1],p*(s.length-1)-o),0.2,B.VV,3,6,0.9)}}else if(w.h(0,62)==null)t.$2(62,B.VV)
if(v&&u)for(w=e*2,q=0;q<8;++q){p=D.k.F(w+q/8,1)
r=C.aq(B.bh7,B.VV,0.5)
r.toString
m.j_(new A.L(0,21-p*6.5,1.6),0.26,r,3,6,0.9)}return n},
flL(d){return D.d.d9(B.a22,new A.flM(d))},
cfp:function cfp(d,e,f){var _=this
_.a=d
_.b=e
_.c=!1
_.d=""
_.e=f
_.r=_.f=!1},
El:function El(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fkl:function fkl(d,e){this.a=d
this.b=e},
fkk:function fkk(d,e){this.a=d
this.b=e},
fkj:function fkj(){},
fjx:function fjx(d,e){this.a=d
this.b=e},
flN:function flN(d,e){this.a=d
this.b=e},
flM:function flM(d){this.a=d},
fNK(d,e,f){var w=x.N
w=new A.cff(e,d,C.aX(w),C.V(w,x.S),C.aX(w))
w.bv9(d,e,f)
return w},
hbX(b7,b8,b9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=C.a([],x.z),b3=new A.mG(b2),b4=C.V(x.S,x.q),b5=C.a([],x.E),b6=b7.c
b6===$&&C.c()
w=b6.a==="bathroom"
v=w?28:0
b3.b=9199
b3.j0(B.fAO,B.fBU,B.b7l,4)
b3.j0(B.fzL,B.fB2,B.Vm,4)
b3.j0(new A.L(v+19.8+0.6,24,16),B.fy3,B.uE,2)
b4.n(0,9199,B.dUi)
b3.b=9198
b3.bS(new A.L(v,0.6,10),B.fBe,B.m0,0.1)
b3.bS(new A.L(v,29.4,18.6),B.fxQ,B.m0,0.1)
b3.bS(new A.L(v-19.4,13.6,10.5),B.fBJ,B.m0,0.1)
for(u=[B.ezv,B.ezr,B.eyq,B.eyn],t=0;t<4;++t){s=u[t].a
b3.bS(new A.L(v+s[0],33,s[1]),new A.L(s[2],2.4,s[3]),B.E4,0.5)}b3.a2H(new A.L(v,27,8),new A.L(v,34.3,8),8,B.ae5,!1,!0,0.7,20)
b3.e5(new A.L(v,27,8),new A.L(v,27.2,8),8,B.b9K,0.5,20)
b3.pi(new A.L(v,27.1,8),new A.L(v,27.3,8),1.4,B.rI,12)
b3.a2H(new A.L(v+15,23.6,8),new A.L(v+19.4,23.6,8),0.92,B.p9,!1,!0,0.3,12)
b4.n(0,9198,B.dUI)
b3.b=9400
b3.e5(new A.L(-56,18,0),new A.L(-56,18,6),1.5,B.rK,0.8,12)
u=b7.r?B.nu:D.bo
b3.e5(new A.L(-57,18,6),new A.L(-55,18,6.5),4,u,0.5,14)
b3.e5(new A.L(-56,16,0),new A.L(-56,20,0),1,B.JX,0.7,10)
u=b7.r?"The water is ON. Turn it OFF with your hand before you cut into any pipe, and turn it ON to test your work.":"The water is OFF. Turn it ON to test your work."
b4.n(0,9400,new A.da("Main water valve",u,new A.L(-56,18,4),22))
u=b7.r
s=u?"MAIN WATER: ON":"MAIN WATER: OFF"
u=u?D.dS:D.bo
b5.push(new A.ub(new A.L(-56,24,6),s,u))
r=new A.fki(b3)
u=v-8
r.$1(u)
s=v+8
r.$1(s)
if(w)r.$1(-40)
q=new A.L(v,21,8)
p=new A.fkg(q)
o=new A.fka(b3,b7)
n=new A.fkb(b3,b7)
m=new A.fkh(b7,b4,b9,b8,b5)
l=b6.c
for(b6=l.length,k=b7.x,j=b7.e,i=b7.f,h=x.o,t=0;t<b6;++t){g=l[t]
f=g.a
e=j.t(0,f)
if(e){d=b7.uM(0,f)
a0=i.h(0,f)
if(a0==null)a0=0
a1=d.r-a0>0}else a1=!1
a2=D.d.cI(l,g)
a3=9100+a2
k.t(0,f)
switch(f){case"flange":a4=new A.L(-30,0.3,14)
if(e){b3.b=a3
b3.e5(a4,new A.L(-30,0.8999999999999999,14),5.5,B.p9,0.4,18)
b3.yS(new A.L(-30,0.8,14),new A.L(-30,1.2,14),5.5,3.2,B.rK,0.8,18)}else n.$3(f,new A.L(-30,0.8,14),B.fuo)
m.$3(g,a4,"Flange spot")
break
case"wax":a4=new A.L(-30,1.2,14)
if(e){b3.b=a3
b3.yS(a4,new A.L(-30,2.3,14),4.2,2.4,B.bhX,0.2,18)}else n.$3(f,new A.L(-30,1.7,14),B.fzV)
m.$3(g,a4,"Wax ring spot")
break
case"toilet":if(e){b3.b=a3
b3.Ka(new A.L(-30,0.5,14),new A.L(-30,16,14),8.5,B.A1,6,0.8,20)
b3.e5(new A.L(-30,16,14),new A.L(-30,17,14),9.5,B.KF,0.8,20)
b3.bS(new A.L(-30,22,4.5),B.aQe,B.A1,0.8)
b3.bS(new A.L(-30,29.2,4.5),B.fwW,B.KF,0.8)}else{b3.b=a3
b3.d=0.32
b3.pi(new A.L(-30,0.5,14),new A.L(-30,17,14),8.5,D.b0,16)
b3.cM(new A.L(-30,22,4.5),B.aQe,D.b0)
b3.d=1}m.$3(g,new A.L(-30,12,12),"Toilet spot")
break
case"bolts":if(e){for(f=9200+a2*2,a5=0;a5<2;++a5){a6=B.avM[a5]
b3.b=f+(a6<0?0:1)
d=-30+a6
b3.e5(new A.L(d,0.5,17),new A.L(d,3.6,17),0.45,B.DT,0.8,8)
a0=a1?D.cw:B.DT
b3.e5(new A.L(d,3.4,17),new A.L(d,4.6,17),1.2,a0,0.8,6)}f=a1?"The nuts are loose. Tighten them with the wrench, a little at a time so the porcelain does not crack.":"The toilet is bolted down."
b4.n(0,a3,new A.da(g.c,f,new A.L(-30,3,17),20))}else for(a5=0;a5<2;++a5){a6=B.avM[a5]
b3.b=a3
b3.d=0.4
f=-30+a6
b3.pi(new A.L(f,0.5,17),new A.L(f,4.6,17),1.2,D.b0,8)
b3.d=1}m.$3(g,new A.L(-30,3,17),"Bolts")
break
case"tvalve":A.fRR(b3,a3,new A.L(-40,8,1.6),e,B.nu,new A.fk7(n,g,-30))
m.$3(g,new A.L(-40,8,2),"Valve")
break
case"those":if(e){b3.b=a3
b3.jM(A.agr(C.a([new A.L(-40,10,1.6),new A.L(-42,14,3.5),new A.L(-36,17,3.6),new A.L(-32,21,2.5)],h),6),0.55,B.Kz,!1,0.7,8)
b3.jM(C.a([new A.L(-36.8,15.5,3.6),new A.L(-35,16.4,3.6)],h),0.62,B.nu,!1,0.4,8)
if(a1)b3.pi(new A.L(-40,10,1.6),new A.L(-40,11.2,1.6),0.9,D.cw,8)}else o.$3$r(f,A.agr(C.a([new A.L(-40,10,1.6),new A.L(-42,14,3.5),new A.L(-36,17,3.6),new A.L(-32,21,2.5)],h),6),0.9)
m.$3(g,new A.L(-36,15,3),"Toilet hose")
break
case"faucet":if(e){b3.b=a3
b3.e5(new A.L(v,34.2,8),new A.L(v,34.6,8),3.6,B.ky,0.9,20)
b3.jM(A.G6(C.a([new A.L(v,34.6,8),new A.L(v,40,8),new A.L(v,43,10),new A.L(v,43,14),new A.L(v,41.2,14.6)],h),1.4,6),0.5,B.ky,!0,0.9,10)
for(a5=0;a5<2;++a5){a6=E.avK[a5]
f=v+a6
b3.e5(new A.L(f,34.6,8),new A.L(f,36.6,8),0.5,B.ky,0.9,8)
d=a6<0?B.rU:B.nu
b3.e5(new A.L(f,36.6,8),new A.L(f,37.6,8),0.8,d,0.6,10)}for(a5=0;a5<2;++a5){f=v+B.d4q[a5]
b3.e5(new A.L(f,34,8),new A.L(f,28.4,8),0.45,B.ky,0.9,8)}}else n.$3(f,new A.L(v,38,9),B.fun)
m.$3(g,new A.L(v,38,8),"Faucet spot")
break
case"vhot":A.fRR(b3,a3,new A.L(u,8,1.6),e,B.rU,new A.fk8(n,g,v))
m.$3(g,new A.L(u,8,2),"Hot valve")
break
case"vcold":A.fRR(b3,a3,new A.L(s,8,1.6),e,B.nu,new A.fk9(n,g,v))
m.$3(g,new A.L(s,8,2),"Cold valve")
break
case"hhot":case"hcold":a7=f==="hhot"
a8=a7?-1:1
d=v+a8*3
a9=A.agr(C.a([new A.L(v+a8*8,10.5,1.8),new A.L(v+a8*9,16,3.5),new A.L(v+a8*6,22,4.2),new A.L(d,27.5,6),new A.L(d,28.6,8)],h),6)
if(e){b3.b=a3
b3.jM(a9,0.5,B.Kz,!1,0.7,8)
b0=a9.length/2|0
f=C.a([a9[b0-1],a9[b0],a9[b0+1]],h)
b3.jM(f,0.58,a7?B.rU:B.nu,!1,0.4,8)
if(a1){f=D.d.gL(a9)
d=D.d.gL(a9)
b3.pi(f,new A.L(d.a+0,d.b+1.4,d.c+0),0.9,D.cw,8)
d=D.d.gam(a9)
b3.pi(new A.L(d.a,d.b-1.4,d.c),D.d.gam(a9),0.9,D.cw,8)}}else o.$3$r(f,a9,0.9)
f=a9[a9.length/2|0]
m.$3(g,f,a7?"Hot hose":"Cold hose")
break
case"tail":case"trap":case"arm":d=f==="tail"
if(d)a0=B.a1i
else a0=f==="trap"?A.fAg():B.a27
b1=p.$1(a0)
if(e){b3.b=a3
a0=d?B.ky:B.p9
b3.a5g(b1,0.66,a0,!1,!0,!0,d?0.85:0.3,12)}else o.$3$r(f,b1,0.78)
a0=J.a8(b1)
a0=a0.h(b1,a0.gM(b1)/2|0)
if(d)f="Tailpiece"
else f=f==="trap"?"P-trap":"Trap arm"
m.$3(g,a0,f)
break}}b6=new A.fke(l,b7,b3,b4)
b6.$4("trap",q.af(0,B.a7u),B.w6,0)
b6.$4("arm",q.af(0,B.a7w),B.Ti,1)
return new A.zk(b2,b4,b5,B.vv)},
fRR(d,e,f,g,h,i){if(!g){i.$0()
return}d.b=e
d.e5(f.af(0,B.fzW),f.af(0,B.aQS),0.9,B.rK,0.8,12)
d.e5(f.af(0,B.aQS),f.af(0,B.fxM),0.45,B.rK,0.8,10)
d.e5(f.af(0,B.fBb),f.af(0,B.aR6),0.3,B.aaY,0.7,8)
d.e5(f.af(0,B.aR6),f.af(0,B.fBw),1.2,h,0.5,12)},
i_R(a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=C.a([],x.z),e=new A.mG(f),d=a0.x
if(d.a===0)return f
w=a0.c
w===$&&C.c()
v=new A.fA5(w.a==="bathroom"?28:0,-30)
for(d=C.ea(d,d.r,C.a3(d).c),u=d.$ti.c,t=a0.e;d.C();){s=d.d
if(s==null)s=u.a(s)
r=v.$1(s)
q=D.d.ix(w.c,new A.fA4(s)).b==="valve"||!t.t(0,s)
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
e.j_(new A.L(s+l*k*m,p+(k*j-k*k*i),o+(1.5+k*h)),g,B.KI,3,6,0.9);++n}}return f},
n9:function n9(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
VV:function VV(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cff:function cff(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.d=_.c=$
_.e=f
_.f=g
_.r=!0
_.w=0
_.x=h
_.y=!1},
cfj:function cfj(d){this.a=d},
cfk:function cfk(d){this.a=d},
cfg:function cfg(d){this.a=d},
cfl:function cfl(d){this.a=d},
cfm:function cfm(d){this.a=d},
cfn:function cfn(){},
cfo:function cfo(){},
cfh:function cfh(d){this.a=d},
cfi:function cfi(d){this.a=d},
fki:function fki(d){this.a=d},
fkg:function fkg(d){this.a=d},
fka:function fka(d,e){this.a=d
this.b=e},
fkd:function fkd(d){this.a=d},
fkb:function fkb(d,e){this.a=d
this.b=e},
fkc:function fkc(d){this.a=d},
fkh:function fkh(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fk7:function fk7(d,e,f){this.a=d
this.b=e
this.c=f},
fk8:function fk8(d,e,f){this.a=d
this.b=e
this.c=f},
fk9:function fk9(d,e,f){this.a=d
this.b=e
this.c=f},
fke:function fke(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fkf:function fkf(d){this.a=d},
fA5:function fA5(d,e){this.a=d
this.b=e},
fA4:function fA4(d){this.a=d},
UV:function UV(d,e){this.d=d
this.a=e},
aCG:function aCG(d,e){var _=this
_.e=_.d=$
_.f=d
_.r=$
_.w=e
_.x=""
_.y=0
_.z=null
_.as=_.Q=!1
_.c=_.a=_.at=null},
edZ:function edZ(d,e,f){this.a=d
this.b=e
this.c=f},
ee_:function ee_(d){this.a=d},
edY:function edY(d){this.a=d},
edS:function edS(d){this.a=d},
ee0:function ee0(d){this.a=d},
edK:function edK(d,e){this.a=d
this.b=e},
edL:function edL(d,e){this.a=d
this.b=e},
edM:function edM(d){this.a=d},
edR:function edR(d){this.a=d},
edP:function edP(d){this.a=d},
edQ:function edQ(d,e){this.a=d
this.b=e},
edX:function edX(d){this.a=d},
edO:function edO(d,e,f){this.a=d
this.b=e
this.c=f},
edN:function edN(d,e,f){this.a=d
this.b=e
this.c=f},
ee1:function ee1(d){this.a=d},
ee5:function ee5(d,e){this.a=d
this.b=e},
ee3:function ee3(){},
ee2:function ee2(d){this.a=d},
ee4:function ee4(d,e){this.a=d
this.b=e},
edW:function edW(d){this.a=d},
edU:function edU(d,e){this.a=d
this.b=e},
edT:function edT(d,e){this.a=d
this.b=e},
edV:function edV(d,e){this.a=d
this.b=e},
kX(d){return D.d.ix(B.tI,new A.fIl(d))},
fOa(d,e,f,g){var w=x.S,v=x.N
w=new A.b3i(g,f,C.V(w,v),C.aX(w),C.aX(w),C.V(w,x.j),C.a([new A.WA(),new A.WA()],x.X),C.V(w,x.W),C.aX(w),C.V(w,v),C.aX(w),C.a([],x.s))
w.cf4(d,e)
return w},
hA8(d){var w
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
fIl:function fIl(d){this.a=d},
pF:function pF(d,e,f){this.a=d
this.b=e
this.c=f},
WA:function WA(){var _=this
_.a=!1
_.b=0
_.c=!0
_.d=!1},
atE:function atE(d,e){var _=this
_.a=!1
_.b=d
_.c=e
_.e=_.d=!1},
aRZ:function aRZ(d,e){this.a=d
this.b=e
this.c=!1},
eC:function eC(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
b3i:function b3i(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
ckb:function ckb(){},
cki:function cki(d){this.a=d},
ckj:function ckj(d){this.a=d},
ckk:function ckk(d,e){this.a=d
this.b=e},
ckl:function ckl(d,e){this.a=d
this.b=e},
ckn:function ckn(d){this.a=d},
ckm:function ckm(d,e){this.a=d
this.b=e},
cka:function cka(d){this.a=d},
ck8:function ck8(){},
ck9:function ck9(d){this.a=d},
ckg:function ckg(){},
ckh:function ckh(){},
ckc:function ckc(){},
ckd:function ckd(d){this.a=d},
cke:function cke(d){this.a=d},
cko:function cko(d){this.a=d},
ckf:function ckf(d){this.a=d},
fN2(d,e,f){return new A.UY(e,f,d,null)},
kT:function kT(d,e,f){this.a=d
this.b=e
this.c=f},
UY:function UY(d,e,f,g){var _=this
_.d=d
_.e=e
_.f=f
_.a=g},
aCN:function aCN(d,e,f){var _=this
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
eil:function eil(d,e,f){this.a=d
this.b=e
this.c=f},
eim:function eim(d){this.a=d},
eik:function eik(d){this.a=d},
ehA:function ehA(d){this.a=d},
ehB:function ehB(d){this.a=d},
ehz:function ehz(d){this.a=d},
ehC:function ehC(d){this.a=d},
ehD:function ehD(d){this.a=d},
ehL:function ehL(d){this.a=d},
ehE:function ehE(d){this.a=d},
ei2:function ei2(d,e){this.a=d
this.b=e},
ehM:function ehM(d){this.a=d},
eih:function eih(d){this.a=d},
eii:function eii(d){this.a=d},
eij:function eij(d,e){this.a=d
this.b=e},
eif:function eif(d){this.a=d},
eig:function eig(d,e){this.a=d
this.b=e},
eie:function eie(d){this.a=d},
eia:function eia(d){this.a=d},
eib:function eib(d,e,f){this.a=d
this.b=e
this.c=f},
eic:function eic(d){this.a=d},
eid:function eid(d,e,f){this.a=d
this.b=e
this.c=f},
ein:function ein(d,e){this.a=d
this.b=e},
ehK:function ehK(d){this.a=d},
ehI:function ehI(d){this.a=d},
ehJ:function ehJ(d,e){this.a=d
this.b=e},
ehH:function ehH(d){this.a=d},
ehF:function ehF(d){this.a=d},
ehG:function ehG(d,e){this.a=d
this.b=e},
ehN:function ehN(d,e){this.a=d
this.b=e},
ei0:function ei0(){},
ei1:function ei1(){},
ehO:function ehO(d){this.a=d},
ehP:function ehP(d){this.a=d},
ehQ:function ehQ(d){this.a=d},
ehT:function ehT(){},
ehU:function ehU(){},
ehV:function ehV(){},
ehW:function ehW(){},
ehX:function ehX(){},
ehY:function ehY(d){this.a=d},
ehZ:function ehZ(){},
ei_:function ei_(d){this.a=d},
ehR:function ehR(d){this.a=d},
ehS:function ehS(){},
eiE:function eiE(d,e){this.a=d
this.b=e},
eiG:function eiG(d){this.a=d},
eis:function eis(d){this.a=d},
eiF:function eiF(d){this.a=d},
eiv:function eiv(d){this.a=d},
eiw:function eiw(d,e){this.a=d
this.b=e},
eiu:function eiu(d,e){this.a=d
this.b=e},
eix:function eix(d,e){this.a=d
this.b=e},
eit:function eit(d,e){this.a=d
this.b=e},
eiH:function eiH(d,e){this.a=d
this.b=e},
eir:function eir(d,e){this.a=d
this.b=e},
eiI:function eiI(d){this.a=d},
eiq:function eiq(d){this.a=d},
eiJ:function eiJ(d,e){this.a=d
this.b=e},
eip:function eip(d,e){this.a=d
this.b=e},
eiK:function eiK(d){this.a=d},
eiL:function eiL(d){this.a=d},
eiM:function eiM(d,e,f){this.a=d
this.b=e
this.c=f},
eio:function eio(d,e,f){this.a=d
this.b=e
this.c=f},
eiy:function eiy(d){this.a=d},
eiz:function eiz(d,e){this.a=d
this.b=e},
eiA:function eiA(d){this.a=d},
eiB:function eiB(d){this.a=d},
eiC:function eiC(d){this.a=d},
eiD:function eiD(d){this.a=d},
ei9:function ei9(d){this.a=d},
ei8:function ei8(d){this.a=d},
ei5:function ei5(d,e){this.a=d
this.b=e},
ei3:function ei3(){},
ei4:function ei4(){},
ei6:function ei6(d,e){this.a=d
this.b=e},
ei7:function ei7(d,e){this.a=d
this.b=e},
a1E(d,e){var w=d.d,v=e.a,u=e.c,t=e.b,s=w.a,r=w.b
w=w.c
return d.c?new A.L(s+v,r-u,w+t):new A.L(s+v,r+t,w+u)},
fR9(d,e,f){var w,v,u,t,s,r=d.a,q=e.d,p=e.c?A.Cu(r,1.5707963267948966,0,q):A.Cu(r,0,0,q)
r=C.a([],x.z)
for(q=p.length,w=0;w<p.length;p.length===q||(0,C.K)(p),++w){v=p[w]
u=v.d
u=u===0?0:f.$1(u)
r.push(new A.tc(v.a,v.b,v.c,u,v.e,v.f,v.r,v.w,v.x))}q=C.V(x.S,x.q)
for(u=d.b,u=u.gdL(u),u=u.gag(u);u.C();){t=u.gU(u)
s=f.$1(t.a)
t=t.b
q.n(0,s,new A.da(t.a,t.b,A.a1E(e,t.c),t.d))}return new C.z(r,q)},
hLQ(a3,a4,a5,a6,a7,a8,a9,b0,b1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=x.i,a2=C.ew([a4,a5],a1)
for(w=b1.length,v=0;v<b1.length;b1.length===w||(0,C.K)(b1),++v){u=b1[v].a
a2.J(0,D.k.D(u[0],a4,a5))
a2.J(0,D.k.D(u[1],a4,a5))}t=C.B(a2,a2.$ti.k("cl.E"))
D.d.ff(t)
for(w=C.T(b1).k("a2<1>"),u=w.k("H.E"),s=0;r=s+1,r<t.length;s=r){q=t[s]
p=t[r]
o=p-q
if(o<0.01)continue
n=(q+p)/2
m=C.B(new C.a2(b1,new A.fdW(n),w),u)
l=C.ew([a6,a7],a1)
for(k=m.length,v=0;v<m.length;m.length===k||(0,C.K)(m),++v){j=m[v].a
l.J(0,D.k.D(j[2],a6,a7))
l.J(0,D.k.D(j[3],a6,a7))}i=C.B(l,l.$ti.k("cl.E"))
D.d.ff(i)
for(k=!(o>30),h=0;g=h+1,g<i.length;h=g){f=i[h]
e=i[g]
j=e-f
if(j<0.01)continue
d=(f+e)/2
if(D.d.b8(m,new A.fdX(d)))continue
a0=!k||j>60?2:1
a3.j0(new A.L(n,d,a8),new A.L(o,j,a9),b0,a0)}}},
Ci(c9,d0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1=x.z,c2=C.a([],c1),c3=new A.mG(c2),c4=C.a([],x.a),c5=x.E,c6=C.a([],c5),c7=x.S,c8=C.V(c7,x.q)
c3.b=8001
c3.q7(B.fwr,B.fym,B.KO,0.15,4)
c3.j0(B.fwe,B.aQw,B.aaU,3)
c3.bS(B.fAQ,B.fBC,B.Ww,0.5)
c3.cM(B.aQy,B.fw9,B.A8)
c3.cM(B.aQy,B.fBL,B.A8)
c3.j0(B.fyq,B.aQw,B.aaU,3)
c3.bS(B.fwa,B.fyr,B.JN,0.15)
c3.bS(B.fyS,B.fyt,B.DD,0.8)
c3.b=0
c3.d=c9.gyg()?0.42:0.1
c3.j0(B.fvm,B.fzR,c9.gyg()?B.qu:B.b4_,3)
c3.d=1
c3.b=8001
if(!c9.gyg())for(w=0;w<10;++w)c3.aB8(new A.L(-72+w*16,51.3,55),B.fAb,B.m0,!1,0.05)
else{c3.bS(B.fz8,B.fxs,D.c,0.2)
c3.bS(B.fCh,B.aQH,D.c,0.2)
c3.bS(B.fwY,B.aQH,D.c,0.2)}if(c9.gyg())c3.bS(B.fx3,B.fxv,B.qu,0.2)
c3.b=8001
c3.j0(B.fBt,B.fBW,B.bav,2)
c3.bS(B.fAS,B.fvZ,B.acH,0.1)
c3.bS(B.fAR,B.fw_,B.Vn,0.1)
c3.bS(B.fAN,B.aQp,B.Vn,0.1)
c3.bS(B.fv_,B.aQp,B.Vn,0.1)
c8.n(0,8001,B.dU0)
c3.b=8002
c3.q7(B.fC5,B.aQs,B.m0,0.05,3)
c3.q7(B.fvD,B.aQs,B.m0,0.05,3)
c8.n(0,8002,B.dUs)
for(v=c9.y,w=0;u=$.Gd(),w<u.length;++w){t=1000+w
c3.b=t
c3.cAY(new A.L(u[w],0,-2.25),B.fA0,B.m0,!1,0.05,2)
s=v.t(0,w)?"This one has a hole for the cable.":"Tap it with the drill to put a hole through it."
c8.n(0,t,new A.da("Wall stud","A 2x4 stud, one of the vertical posts in the wall. They stand 16 inches apart. "+s,new A.L(u[w],20,-2),60))
if(v.t(0,w)){c3.b=0
c3.e=0.6
c3.cM(new A.L(u[w],40,-2.25),B.fwc,B.adn)
c3.e=0}}c3.b=8000
c3.bS(B.fv4,B.fuv,B.abb,0.5)
c3.e=0.4
c3.cM(B.fyd,B.fBd,B.DM)
for(r=0;r<6;++r)for(v=19.5-r*3.6,q=0;q<2;++q)c3.bS(new A.L(61.6+q*4.8,v,0.5),B.ftz,B.ael,0.3)
p=c9.ax&&!c9.ay
v=p?0.6:0
if(c9.ay)u=D.cb
else u=p?D.bL:D.k9
c3.bS(new A.L(64,-2.5+v,0.9),B.fxq,u,0.4)
c3.e=0
if(c9.ay)v="The main breaker has TRIPPED (orange). Tap it to flip it fully OFF, fix the problem, then turn it ON."
else v=c9.ax?"The power is ON. Tap to turn it OFF. Always turn it OFF before you touch any wire.":"The power is OFF. Tap to turn it ON."
c8.n(0,8000,new A.da("Breaker panel",v,B.fw1,60))
c3.b=8003
for(v=c9.z,u=C.ea(v,v.r,C.a3(v).c),t=x.o,s=u.$ti.c;u.C();){o=u.d
n=A.kX(o==null?s.a(o):o)
o=n.d
m=o.a-0.35
l=C.a([B.fAD,B.fz7,new A.L(m,40,-3.2)],t)
if(n.c)D.d.v(l,C.a([new A.L(m,51.4,-3.2),new A.L(m,51.4,o.c+11)],t))
else l.push(new A.L(m,o.b+11,-3.4))
c3.jM(A.G6(l,3,6),0.2,B.VY,!1,0.35,6)}c8.n(0,8003,B.dUQ)
for(u=x.V,s=c9.Q,k=0;k<3;++k){j=B.nS[k]
i=s.h(0,j)
if(i==null||!i.a)continue
if(i.e)h=B.bfI
else h=i.d?B.bh2:B.bgt
o=C.a([],u)
for(m=i.b,l=C.a3(m),g=new C.nI(m,m.r,l.k("nI<1>")),g.c=m.e,l=l.c;g.C();){m=g.d
if(m==null)m=l.a(m)
o.push(new C.cK([A.kX(m).d.a-1.15,A.kX(m).d.a+1.15,A.kX(m).d.b-2,A.kX(m).d.b+2]))}m=6100+k
c3.b=m
A.hLQ(c3,j,j+48,-47,47,-0.25,0.5,h,o)
o=i.e?"Painted and finished.":"A 4 by 8 foot sheet of drywall (gypsum between two layers of paper). It is screwed to the studs."
c8.n(0,m,new A.da("Drywall sheet",o,new A.L(j+24,0,0),90))
c3.b=0
c3.e=0.3
for(o=i.c,m=C.a3(o),l=new C.nI(o,o.r,m.k("nI<1>")),l.c=o.e,m=m.c;l.C();){o=l.d
if(o==null)o=m.a(o)
f=D.o.an(o,10)
e=D.o.F(o,10)
c3.j_(new A.L($.Gd()[f],-40+e*16,0.1),0.34,B.DM,3,5,0.3)}c3.e=0}for(u=d0.a,o=u!=="tape",m=c9.as,l=u!=="mud",g=u==="sand",w=0;w<2;w=a1){d=-24+48*w
a0=s.h(0,B.nS[w])
a0=a0==null?null:a0.a
a1=w+1
a2=s.h(0,B.nS[a1])
a2=a2==null?null:a2.a
if(a0!==!0||a2!==!0)continue
a3=m[w]
a0=6200+w
c3.b=a0
if(a3.a&&!a3.d){a2=a3.b
if(a2===0)h=B.bfL
else h=a3.c?B.bci:B.b89
c3.e=0.5
c3.cM(new A.L(d,0,0.08+0.02*a2),new A.L(2.2+a2*1.4,94,0.12),h)
c3.e=0}else if(!o||!l||g){c3.d=0.45
c3.e=0.6
c3.cM(new A.L(d,0,0.12),B.fxC,D.b0)
c3.e=0
c3.d=1}if(a3.d)a2="Smooth and ready for paint."
else if(!a3.a)a2="The joint between two sheets. It needs tape and three coats of joint compound."
else{a2=a3.b
a4=a2===1?"":"s"
a4="Taped, with "+a2+" coat"+a4+" of mud."
a2=a4}c8.n(0,a0,new A.da("Seam",a2,new A.L(d,0,0),70))}for(o=d0.b,m=c9.x,l=c9.at,g=x.N,a5=0;a5<7;++a5){n=B.tI[a5]
a0=n.a
a6=m.ah(0,a0)
a7=l.h(0,a0)
a8=o===a0&&a7!=null
if(!a6)continue
a2=n.c
if(a2)a9=n.e==="fan"?"fan":"light"
else{a4=a7==null?null:a7.a
a9=a4==null?"outlet":a4}if(a8){b0=A.Ac(a7.a)
a0=a7.b
b1=A.fRY(b0,a0,!1)
b2=A.fR9(b1,n,new A.fkm(n))
D.d.v(c2,b2.a)
c8.v(0,b2.b)
if(a0.f&&a0.c===0){a0=C.a([],c5)
for(a2=b1.c,a4=a2.length,b3=0;b3<a2.length;a2.length===a4||(0,C.K)(a2),++b3){b4=a2[b3]
a0.push(new A.ub(A.a1E(n,b4.a),b4.b,b4.c))}D.d.v(c6,a0)}}else if(a7!=null&&a7.b.c>=2){a4=a7.a
b5=a7.b
b6=b5.w
b7=C.a([],c1)
b8=new A.mG(b7)
b9=new A.Xr(C.V(c7,g))
b9.c=2
b9.w=b6
if(a4==="light"||a4==="fan")A.h8B(b8,a4,b9)
else{A.h8h(b8,a4,-0.25,b6,!0)
A.haD(b8,b6)}D.d.v(c2,A.fR9(new A.zk(b7,B.dg9,B.GC,B.vv),n,new A.fkn(n)).a)
if(!a2){c3.b=3000+a0
c3.e=0.4
c3.d=0.55
a2=n.d
b5=b5.w?D.aC:D.b7
c3.cM(new A.L(a2.a,a2.b,a2.c+0.2),B.fxF,b5)
c3.d=1
c3.e=0}c8.n(0,3000+a0,new A.da(A.hHJ(a4),A.hHI(c9,a0),A.a1E(n,B.a7q),22))}else{a4=C.a([],c1)
A.h7D(new A.mG(a4),a9,!1)
D.d.v(c2,A.fR9(new A.zk(a4,B.dgL,B.GC,B.vv),n,new A.fko(n)).a)
a2=a2?"Ceiling box":"Electrical box"
a4=v.t(0,a0)?"The box is mounted and the cable is in. A device can be wired here.":"The box is mounted. Pull the cable to it."
c8.n(0,2000+a0,new A.da(a2,a4,A.a1E(n,B.a7q),24))}}c0=new A.fkr(c3)
if(u==="wall"||u==="ceiling"||u==="fanbox")for(a5=0;a5<7;++a5){n=B.tI[a5]
c1=n.a
if(m.ah(0,c1))continue
c5=n.c
c7=n.d
s=c7.a
o=c7.b
a0=c5?new A.L(s,o-1,c7.c):new A.L(s,o,1.5)
a2=c5?B.fwi:B.fxk
c0.$4$round(2000+c1,a0,a2,c5)
c1=c5?new A.L(s,o-8,c7.c):new A.L(s,o+7,3)
c6.push(new A.ub(c1,n.b,D.fh))}else if(u==="cable")for(a5=0;a5<7;++a5){n=B.tI[a5]
c1=n.a
if(!m.ah(0,c1)||v.t(0,c1))continue
c5=n.c
c7=n.d
s=c7.a
o=c7.b
c7=c5?new A.L(s,o-1,c7.c):new A.L(s,o,1.5)
s=c5?B.aQu:B.fws
c0.$5$col$round(2000+c1,c7,s,D.cp,c5)}else if(u==="knife")for(a5=0;a5<7;++a5){n=B.tI[a5]
if(n.c||!m.ah(0,n.a))continue
c1=n.d
c5=c1.a
i=c9.anQ(c5)
if(i==null||i.b.t(0,n.a))continue
c0.$4$col(2000+n.a,new A.L(c5,c1.b,0.5),B.fxp,D.cw)}else if(u==="sheet")for(w=0;w<5;){j=B.a24[w]
c0.$3(6000+w,new A.L(j,0,0.3),B.fA3);++w
c6.push(new A.ub(new A.L(j,50,1),"edge "+w,D.fh))}else if(u==="screw")for(a5=0;a5<3;++a5){j=B.nS[a5]
i=s.h(0,j)
if(i==null||!i.a)continue
for(c1=c9.ao9(j),c5=c1.length,c7=i.c,o=j+48,b3=0;b3<c1.length;c1.length===c5||(0,C.K)(c1),++b3){f=c1[b3]
for(a0=f*10,a2=7000+a0,r=0;r<6;++r){if(c7.t(0,a0+r))continue
c0.$3(a2+r,new A.L($.Gd()[f],-40+r*16,0.5),B.aQm)}a2=$.Gd()
if(f+1<a2.length&&a2[f]+16<=o)for(a0=7500+a0,r=0;r<6;r+=2)c0.$4$col(a0+r,new A.L(a2[f]+8,-40+r*16+8,0.5),B.aQm,D.dy)}}if(!C.ew(["wall","ceiling","fanbox","cable","knife","sheet","screw",""],g).t(0,u))c1=D.d.t(B.GG,u)||C.ew(["outlet","gfci","switch","light","fan"],g).t(0,u)
else c1=!1
if(c1)for(c1=c9.CW,a5=0;a5<7;++a5){n=B.tI[a5]
if(D.d.t(B.GG,u)){c5=n.a
a7=l.h(0,c5)
if(a7!=null){c7=a7.a
c7=(c7==="outlet"||c7==="gfci")&&a7.b.c>=2&&!c1.ah(0,c5)}else c7=!1
if(c7){c7=n.d
c0.$4$col(3000+c5,new A.L(c7.a,c7.b,1.2),B.fxG,D.bc)}}else{c5=n.a
if(m.ah(0,c5)&&v.t(0,c5)&&!l.ah(0,c5)){c7=n.c
s=n.d
o=s.a
g=s.b
s=c7?new A.L(o,g-1,s.c):new A.L(o,g,1.2)
o=c7?B.aQu:B.fzZ
c0.$4$round(2000+c5,s,o,c7)}}}for(c1=c9.CW,c5=new C.cJ(c1,C.a3(c1).k("cJ<1,2>")).gag(0);c5.C();){j=c5.d
c7=j.a
n=A.kX(c7)
v=c3.b=8100+c7
u=n.d
d=u.a
u=u.b
c3.jM(A.G6(C.a([new A.L(d,u,2.5),new A.L(d,-46,3.5),new A.L(d,-46,22)],t),4,6),0.28,B.ad5,!1,0.2,6)
c3.bS(new A.L(d,u,1.6),B.fx2,B.b5u,0.3)
u=j.b
switch(u){case"tv":c3.bS(new A.L(d,-45,24),B.fvK,B.acL,0.2)
c3.bS(new A.L(d,-19,24),B.fwp,E.DY,0.4)
if(c1.ah(0,c7))c7=c9.ax&&!c9.ay&&c9.a2T(c7)
else c7=!1
if(c7){c7=d-38.5
s=d+38.5
c4.push(new A.Wu(C.a([new A.L(c7,1.5,25.7),new A.L(s,1.5,25.7),new A.L(s,-39.5,25.7),new A.L(c7,-39.5,25.7)],t),v,new A.fkp(j)))}break
case"lamp":c3.e5(new A.L(d,-47.5,24),new A.L(d,-46.5,24),6,B.V4,0.4,14)
c3.e5(new A.L(d,-46.5,24),new A.L(d,-22,24),1,B.KO,0.5,8)
c3.B3(new A.L(d,-26,24),new A.L(d,-12,24),9,U.W8,!1,!0,5.5,0.2,16)
break
case"toaster":c3.bS(new A.L(d,-42.5,24),B.fuG,B.ky,0.8)
c3.cM(new A.L(d,-38,24),B.fAC,B.adU)
break
default:c3.bS(new A.L(d,-43.5,24),B.fuV,B.acL,0.2)
c3.Ka(new A.L(d-6,-38,24),new A.L(d+8,-38,24),3.4,B.Kw,3,0.6,12)
c3.aiP(new A.L(d-8,-43,24),B.fuM,B.Kw,0.6,0)}c7=A.hFU(u)
s="Plugged into "+n.b
u=u==="tv"?s+". Tap it to watch NGMY ads full screen. Use the Unplug tool to unplug it.":s+". Tap it to unplug."
c8.n(0,v,new A.da(c7,u,new A.L(d,-35,20),60))}for(a5=0;a5<7;++a5){n=B.tI[a5]
c8.ci(0,2000+n.a,new A.fkq(n))}return new A.zk(c2,c8,c6,c4)},
hHJ(d){var w
A:{if("gfci"===d){w="GFCI outlet"
break A}if("switch"===d){w="Light switch"
break A}if("light"===d){w="Ceiling light"
break A}if("fan"===d){w="Ceiling fan"
break A}w="Outlet"
break A}return w},
hFU(d){var w
A:{if("tv"===d){w="TV"
break A}if("lamp"===d){w="Lamp"
break A}if("toaster"===d){w="Toaster"
break A}w="Hair dryer"
break A}return w},
hHI(d,e){var w,v=d.at.h(0,e)
if(v==null)return""
if(v.b.w)return"BURNT. It was wired wrong and it burnt out. Pull it out and put in a new one."
w=v.a
if(w==="switch")return d.ch.t(0,e)?"The switch is ON. Tap to turn it off.":"The switch is OFF. Tap to flip it on."
if(w==="light"||w==="fan")return d.al6(e)?"It is running.":"It is off. Flip its switch (breaker on)."
w=d.CW.h(0,e)
return"Tap with a TV, lamp, toaster or hair dryer in your hand to plug it in. Plugged: "+(w==null?"nothing":w)+"."},
i05(a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=C.a([],x.z),a0=new A.mG(d)
for(w=D.d.gag(B.tI),v=new C.fG(w,new A.fAp()),u=a1.at,t=a2*7;v.C();){s=w.gU(0)
r=s.a
q=u.h(0,r)
if(q==null||q.b.c<1)continue
p=a1.al6(r)?t:0.4
a0.b=3000+r
s=s.d
r=s.a
o=s.b-6.6
s=s.c
for(n=0;n<4;++n){m=p+n*3.141592653589793/2
l=A.bBl(B.fut,m)
a0.aiP(new A.L(r+l.a,o+l.b,s+l.c),B.fBP,B.b6t,0.3,m)}}w=a1.d
w===$&&C.c()
w=D.d.gag(w)
v=new C.fG(w,new A.fAq())
u=a2*5
while(v.C()){s=w.gU(0).a
if(a1.al6(s)){k=A.kX(s)
a0.b=0
a0.d=0.25+0.05*Math.sin(u)
s=k.d
a0.j_(new A.L(s.a,s.b-5,s.c),11,B.Vr,4,10,0)
a0.d=1}}for(w=a1.CW,v=new C.cJ(w,C.a3(w).k("cJ<1,2>")).gag(0),u=a2*1.6,s=a2*6;v.C();){j=v.d
r=j.a
if(w.ah(0,r))o=a1.ax&&!a1.ay&&a1.a2T(r)
else o=!1
if(!o)continue
i=A.kX(r).d.a
a0.b=8100+r
switch(j.b){case"tv":break
case"lamp":a0.b=0
a0.d=0.3+0.05*Math.sin(s)
a0.j_(new A.L(i,-19,24),11,O.V6,4,10,0)
a0.d=1
break
case"toaster":a0.e=0.8
r=C.aq(B.acn,O.Wc,(Math.sin(s)+1)/2)
r.toString
a0.cM(new A.L(i,-38.2,24),new A.L(13,0.3,6),r)
a0.e=0
break
default:for(r=i+9,h=0;h<6;++h)a0.j_(new A.L(r+D.k.F(u+h/6,1)*22,-38+Math.sin(h*2)*2,24),0.6,B.bcE,3,5,0.2)}}for(w=new C.cJ(a3,C.a3(a3).k("cJ<1,2>")).gag(0),v=a2*0.7,u=a2*2.2;w.C();){j=w.d
s=j.b
if(a2>s)continue
k=A.kX(j.a)
g=D.k.D(s-a2,0,3)
a0.b=0
for(h=0;h<14;++h){f=D.k.F(u+h*0.137,1)
m=h*2.4+t
e=A.a1E(k,new A.L(Math.cos(m)*f*7,Math.sin(m)*f*7-f*f*6,3+f*4))
s=D.k.D(g,0.3,1)
r=C.aq(E.Wo,E.Wt,1-f)
r.toString
a0.j_(e,0.35*s,r,3,5,0)}a0.d=0.35
for(h=0;h<5;++h){f=D.k.F(v+h*0.2,1)
s=f*3
a0.j_(A.a1E(k,new A.L(Math.sin(h*1.7)*2,f*10,5+s)),1.2+s,B.bhK,3,6,0)}a0.d=1}return d},
vO:function vO(d,e,f){this.a=d
this.b=e
this.c=f},
fdW:function fdW(d){this.a=d},
fdX:function fdX(d){this.a=d},
fkm:function fkm(d){this.a=d},
fkn:function fkn(d){this.a=d},
fko:function fko(d){this.a=d},
fkr:function fkr(d){this.a=d},
fkp:function fkp(d){this.a=d},
fkq:function fkq(d){this.a=d},
fAp:function fAp(){},
fAq:function fAq(){},
h4k(d,e){var w=new A.cns(e,d,A.fYO())
w.bvm(4,d,e)
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
Ln:function Ln(d,e){this.a=d
this.b=e
this.c=!1},
cns:function cns(d,e,f){var _=this
_.a=d
_.b=e
_.c=$
_.d=f
_.e=3
_.r=_.f=0
_.w=!1},
cnx:function cnx(d){this.a=d},
cnt:function cnt(){},
cnv:function cnv(){},
cnw:function cnw(){},
cnu:function cnu(d){this.a=d},
apK:function apK(d,e){this.d=d
this.a=e},
aCR:function aCR(d,e){var _=this
_.e=_.d=$
_.f=d
_.r=$
_.w=e
_.x="inspect"
_.y=0
_.z=null
_.at=_.as=_.Q=!1
_.c=_.a=_.ax=null},
ek8:function ek8(d,e,f){this.a=d
this.b=e
this.c=f},
ek9:function ek9(d){this.a=d},
ek7:function ek7(d){this.a=d},
ejY:function ejY(d){this.a=d},
ek2:function ek2(d){this.a=d},
ek3:function ek3(d){this.a=d},
ek1:function ek1(d){this.a=d},
ek4:function ek4(d,e){this.a=d
this.b=e},
ek5:function ek5(d){this.a=d},
ek6:function ek6(d){this.a=d},
ek0:function ek0(d){this.a=d},
ek_:function ek_(d,e){this.a=d
this.b=e},
ejX:function ejX(d){this.a=d},
ejV:function ejV(d){this.a=d},
ejW:function ejW(d,e){this.a=d
this.b=e},
ejZ:function ejZ(d){this.a=d},
ekl:function ekl(d,e){this.a=d
this.b=e},
ekh:function ekh(){},
ekg:function ekg(d){this.a=d},
eki:function eki(){},
ekj:function ekj(){},
ekk:function ekk(d,e){this.a=d
this.b=e},
ekf:function ekf(d,e){this.a=d
this.b=e},
eke:function eke(d){this.a=d},
ekd:function ekd(d){this.a=d},
ekb:function ekb(d,e){this.a=d
this.b=e},
eka:function eka(){},
ekc:function ekc(d,e){this.a=d
this.b=e},
ceN:function ceN(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.r=i
_.w=j},
P_:function P_(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
bOQ:function bOQ(d,e,f){var _=this
_.a=d
_.b=e
_.c=f
_.d=$}},B,F,E,H,A2,U,L,M,A3,A4
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
A.L.prototype={
af(d,e){return new A.L(this.a+e.a,this.b+e.b,this.c+e.c)},
aC(d,e){return new A.L(this.a-e.a,this.b-e.b,this.c-e.c)},
aK(d,e){return new A.L(this.a*e,this.b*e,this.c*e)},
S0(d){var w=this.b,v=d.c,u=this.c,t=d.b,s=d.a,r=this.a
return new A.L(w*v-u*t,u*s-r*v,r*t-w*s)},
gT0(){var w=this.a,v=this.b,u=this.c
return Math.sqrt(w*w+v*v+u*u)},
gqu(d){var w=this,v=w.gT0()
return v<1e-9?w:new A.L(w.a/v,w.b/v,w.c/v)}}
A.tc.prototype={}
A.da.prototype={}
A.ub.prototype={}
A.zk.prototype={}
A.Wu.prototype={}
A.mG.prototype={
beT(d,e,f,g,h,i,j){var w=this,v=i.gqu(0)
w.a.push(new A.tc(C.a([d,e,f,g],x.o),v,h,w.b,0,w.d,!0,w.c,w.e))},
bfX(d,e,f,g){var w=this,v=e.aC(0,d).S0(f.aC(0,d)),u=v.gqu(0)
w.a.push(new A.tc(C.a([d,e,f],x.o),u,g,w.b,0,w.d,!0,w.c,w.e))},
JS(d,e,f,g,h,i,j){var w,v,u,t=e.a/2,s=e.b/2,r=e.c/2,q=new A.bUA(this,i,new A.bUB(j,d),new A.bUC(j),f,h),p=-t,o=-s,n=2*t,m=2*s
q.$4(new A.L(0,0,1),new A.L(p,o,r),new A.L(n,0,0),new A.L(0,m,0))
w=-r
q.$4(new A.L(0,0,-1),new A.L(t,o,w),new A.L(-2*t,0,0),new A.L(0,m,0))
v=-2*r
q.$4(new A.L(1,0,0),new A.L(t,o,r),new A.L(0,0,v),new A.L(0,m,0))
u=2*r
q.$4(new A.L(-1,0,0),new A.L(p,o,w),new A.L(0,0,u),new A.L(0,m,0))
if(g){q.$4(new A.L(0,1,0),new A.L(p,s,r),new A.L(n,0,0),new A.L(0,0,v))
q.$4(new A.L(0,-1,0),new A.L(p,o,w),new A.L(n,0,0),new A.L(0,0,u))}},
j0(d,e,f,g){return this.JS(d,e,f,!0,0,g,0)},
aB8(d,e,f,g,h){return this.JS(d,e,f,g,h,1,0)},
q7(d,e,f,g,h){return this.JS(d,e,f,!0,g,h,0)},
bS(d,e,f,g){return this.JS(d,e,f,!0,g,1,0)},
cM(d,e,f){return this.JS(d,e,f,!0,0,1,0)},
aiP(d,e,f,g,h){return this.JS(d,e,f,!0,g,1,h)},
cAY(d,e,f,g,h,i){return this.JS(d,e,f,g,h,i,0)},
B3(b3,b4,b5,b6,b7,b8,b9,c0,c1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6=this,a7=b4.aC(0,b3).gqu(0),a8=a7.b,a9=a7.S0(Math.abs(a8)<0.9?B.w6:B.Ti).gqu(0),b0=a7.S0(a9).gqu(0),b1=b9<0?b5:b9,b2=new A.bUD(a9,c1,b0)
for(w=a6.a,v=b3.a,u=b3.b,t=b3.c,s=b4.a,r=b4.b,q=b4.c,p=x.o,o=a7.a*-1,a8*=-1,n=a7.c*-1,m=0;m<c1;){l=b2.$1(m);++m
k=b2.$1(m)
j=l.a
i=k.a
h=l.b
g=k.b
f=l.c
e=k.c
d=new A.L(j+i,h+g,f+e).gqu(0)
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
w.push(new A.tc(C.a([new A.L(a0,a1,a2),new A.L(a3,a4,a5),new A.L(i,g,e),new A.L(j,h,f)],p),d,b6,a6.b,c0,a6.d,b8,a6.c,a6.e))
if(b7){w.push(new A.tc(C.a([b3,new A.L(a3,a4,a5),new A.L(a0,a1,a2)],p),new A.L(o,a8,n),b6,a6.b,c0,a6.d,!1,a6.c,a6.e))
w.push(new A.tc(C.a([b4,new A.L(j,h,f),new A.L(i,g,e)],p),a7,b6,a6.b,c0,a6.d,!1,a6.c,a6.e))}}},
e5(d,e,f,g,h,i){return this.B3(d,e,f,g,!0,!1,-1,h,i)},
Ka(d,e,f,g,h,i,j){return this.B3(d,e,f,g,!0,!1,h,i,j)},
a2H(d,e,f,g,h,i,j,k){return this.B3(d,e,f,g,h,i,-1,j,k)},
pi(d,e,f,g,h){return this.B3(d,e,f,g,!0,!1,-1,0,h)},
b9W(d,e,f,g,h,i,j){return this.B3(d,e,f,g,h,!1,-1,i,j)},
cFm(d,e,f,g,h,i){return this.B3(d,e,f,g,h,!1,-1,0,i)},
cFn(d,e,f,g,h,i){return this.B3(d,e,f,g,!0,!1,h,0,i)},
j_(a7,a8,a9,b0,b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=this,a6=new A.bUz(b0,b1)
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
w.push(new A.tc(C.a([new A.L(v+j*a8,u+i*a8,t+h*a8),new A.L(v+g*a8,u+f*a8,t+e*a8),new A.L(v+d*a8,u+a0*a8,t+a1*a8),new A.L(v+a2*a8,u+a3*a8,t+a4*a8)],s),new A.L(j+g+d+a2,i+f+a0+a3,h+e+a1+a4).gqu(0),a9,a5.b,b2,a5.d,!1,a5.c,a5.e))}},
b80(d,e,f,g){return this.j_(d,e,f,6,10,g)},
EX(d,e,f,g,h){return this.j_(d,e,f,g,h,0.4)},
a5g(d,e,f,g,h,i,j,k){var w,v,u,t,s
for(w=0;v=w+1,v<d.length;w=v){u=d[v]
t=d[w]
if(new A.L(u.a-t.a,u.b-t.b,u.c-t.c).gT0()<0.000001)continue
u=d[w]
t=d[v]
if(g)s=w===0||w===d.length-2
else s=!1
this.a2H(u,t,e,f,s,h,j,k)}if(i)for(u=e*0.98,w=1;v=w+1,v<d.length;w=v)this.j_(d[w],u,f,4,k,j)},
jM(d,e,f,g,h,i){return this.a5g(d,e,f,!0,!1,g,h,i)},
aGH(d,e,f,g,h,i,j){return this.a5g(d,e,f,g,!1,h,i,j)},
bfZ(d,e,f,g,h){return this.a5g(d,e,f,!0,!1,!0,g,h)},
yS(a4,a5,a6,a7,a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=this
a3.b9W(a4,a5,a6,a8,!1,a9,b0)
w=a5.aC(0,a4).gqu(0)
v=w.S0(Math.abs(w.b)<0.9?B.w6:B.Ti).gqu(0)
u=new A.bUE(v,b0,w.S0(v).gqu(0))
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
s.push(new A.tc(C.a([new A.L(p+i*a7,m+h*a7,l+j*a7),new A.L(p+f*a6,m+e*a6,l+g*a6),new A.L(p+a0*a6,m+a1*a6,l+d*a6),new A.L(p+a2.a*a7,m+a2.b*a7,l+a2.c*a7)],r),n,a8,a3.b,a9,a3.d,!1,a3.c,a3.e))}}},
cQo(d,e,f,g,h,i){return this.yS(d,e,f,g,h,i,16)}}
A.Ay.prototype={
anK(d){var w,v,u,t=this
t.x=d
if(!d){w=t.a
v=t.r
u=t.w
t.a=D.k.D(w,v-u,v+u)}t.aZ()},
mz(d,e,f,g){var w=this
w.y=f
w.z=d
w.Q=g
w.as=e
w.aZ()},
Gn(d,e){return this.mz(d,null,e,null)},
bjJ(d){return this.mz(null,null,d,null)},
aGt(d){var w,v,u,t=this
if(!(t.y!=null||t.z!=null||t.Q!=null||t.as!=null))return
w=1-Math.exp(-d*7)
v=t.y
if(v!=null){u=A.zC(t.d,v,w)
t.d=u
if(u.aC(0,v).gT0()<0.02){v=t.y
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
an6(d){var w=this
w.z=null
w.c=D.k.D(w.c*d,6,w.f)
w.aZ()}}
A.bOI.prototype={
cOg(d){var w,v,u,t
for(w=this.a,v=w.length-1,u=d.a,t=d.b;v>=0;--v)if(w[v].a.gbI().a.contains(u,t))return w[v].b
return 0}}
A.b3v.prototype={
gaGv(d){var w=this.r.a
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
q=new A.cl1(Math.cos(d3.a),Math.sin(d3.a),Math.cos(d3.b),Math.sin(d3.b))
p=new A.cl2(d0,q)
o=B.fyW.gqu(0)
n=o.af(0,B.ftF).gqu(0)
m=C.a([],x.G)
d2=d0.w
d3=d0.b
l=d3.a
if(!(d2==null)){d4=C.B(l,x.e)
D.d.v(d4,d2.$1(d0.gaGv(0)))
l=d4}for(d2=l.length,d4=d0.e,d5=x.h,w=d4!==0,v=o.a,u=o.b,k=o.c,j=x.o,i=d0.f,h=i!=null,g=n.a,f=n.b,e=n.c,d=d0.r,a0=0;a0<l.length;l.length===d2||(0,C.K)(l),++a0){a1=l[a0]
if(h&&!i.$1(a1.w))continue
a2=C.a([],j)
for(a3=a1.a,a4=a3.length,a5=0;a5<a3.length;a3.length===a4||(0,C.K)(a3),++a5)a2.push(p.$1(a3[a5]))
a6=A.hH1(a2)
a2=a6.length
if(a2<3)continue
for(a7=0,a8=B.w5,a5=0;a5<a2;++a5){a9=a6[a5]
a3=a9.c
a7+=a3
a8=new A.L(a8.a+a9.a,a8.b+a9.b,a8.c+a3)}a2=1/a2
b0=q.$1(a1.b)
a3=b0.a
a4=b0.b
b1=b0.c
if(a3*(a8.a*a2)+a4*(a8.b*a2)+b1*(a8.c*a2)>0){if(!a1.r)continue
b0=new A.L(a3*-1,a4*-1,b1*-1)}a2=b0.a
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
m.push(new A.J8(d1,b8,new C.w(a2,(b5&255)/255,(b6&255)/255,(b7&255)/255,D.t),a7/a3-a1.x,a4,a2<0.99,b1))}for(d2=d3.d,d4=d2.length,v=x.T,u=x.g,a0=0;a0<d2.length;d2.length===d4||(0,C.K)(d2),++a0){c2=d2[a0]
k=C.a([],j)
for(i=c2.a,a5=0;a5<4;++a5)k.push(p.$1(i[a5]))
if(D.d.b8(k,new A.ckZ()))continue
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
b0=q.$1(new A.L(a2.a-a4,a2.b-b1,a2.c-a3).S0(new A.L(i.a-a4,i.b-b1,i.c-a3)))
if(b0.a*((h.a+g.a+f.a+e.a)*0.25)+b0.b*((h.b+g.b+f.b+e.b)*0.25)+b0.c*d>0)continue
i=C.a([],u)
for(h=k.length,a5=0;a5<k.length;k.length===h||(0,C.K)(k),++a5){a9=k[a5]
g=a9.c
i.push(new C.u(s+a9.a*t/g,r-a9.b*t/g))}k=$.X()
h=C.a([],d5)
g=C.B(i,v)
h.push(new C.QQ(g,!0))
m.push(new A.J8(new A.cl_(d0,c2,i),new C.aQ(k.r,D.ap,d1,d1,h),D.K,d-0.6,c2.b,!1,!1))}D.d.b1(m,new A.cl0())
d2=d0.d.a
D.d.a8(d2)
$.X()
c3=C.M()
c3.b=D.V
c4=C.M()
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
c7=C.M()
c7.b=D.ae
c7.c=1.4
c7.r=D.c.j(0.35+0.25*Math.sin(d0.gaGv(0)*6)).gp(0)
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
A.J8.prototype={}
A.atb.prototype={
T(){return new A.boz(new A.bOI(C.a([],x.J)),new C.eL(0,$.aw()),D.bx,null,null)}}
A.boz.prototype={
a_(){var w,v=this
v.a1()
w=v.qa(new A.eQp(v))
w.iV(0)
v.d!==$&&C.aO()
v.d=w},
q(){var w=this.d
w===$&&C.c()
w.q()
w=this.f
w.S$=$.aw()
w.P$=0
this.btS()},
B(d){var w,v=this,u=null,t=v.a,s=t.c,r=t.d,q=t.e,p=t.r,o=v.f
t=t.w
w=C.a([r,o],x.U)
w=C.a([C.jr(new C.et(C.b3(u,u,u,new A.b3v(s,r,v.e,q,p,o,t,v.a.x,new C.h3(w)),D.f_),u),D.q,u)],x.p)
v.a.toString
return C.oJ(D.jr,C.aE(D.c5,new C.an(D.W,u,D.b_,D.q,w,u),D.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new A.eQl(v),new A.eQm(v),u,u,u,u,u,u,u,new A.eQn(v),u,u,u,!1,D.a8),u,u,u,u,u,u,new A.eQo(v),u)}}
A.aLl.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbu())
w.a7$=null
w.a2()},
aQ(){this.aX()
this.aW()
this.bv()}}
A.mc.prototype={}
A.Xr.prototype={}
A.zI.prototype={}
A.a3n.prototype={}
A.BK.prototype={
gj5(){return this.a==="ok"}}
A.aTi.prototype={}
A.q8.prototype={}
A.Dg.prototype={}
A.u7.prototype={}
A.ps.prototype={}
A.aTw.prototype={
gBa(){var w=this.c
return w.c>=2&&A.afd(A.Ac(this.a),w).a==="ok"},
gda(d){return this.c}}
A.S6.prototype={
gyx(){var w,v,u=this.fy,t=u==="ptrap"
if(t||u==="faucet"){w=this.id
if(w==null)return!1
if(t)if(w.a.a===3){u=w.b
u=new C.bc(u,C.a3(u).k("bc<2>")).d9(0,new A.bO9())&&w.c}else u=!1
else u=A.flL(w)&&w.f
return u}v=this.go
return v!=null&&v.c>=2&&A.afd(A.Ac(u),v).a==="ok"},
ga4l(){var w=this.fy
if(w.length===0)w=this.glp()
else w=w!=="fan"||this.gyx()
return w},
gT6(){var w=this.fy
if(w.length===0)w=this.glp()
else w=w!=="switch"||this.gyx()
return w},
gaEV(){var w=this.fy
if(w.length===0)w=this.glp()
else w=!(w==="outlet"||w==="gfci")||this.gyx()
return w},
grL(d){var w,v=this.c
A:{if("bathroom"===v){w=110
break A}if("kitchen"===v){w=140
break A}if("living"===v){w=180
break A}if("hall"===v){w=240
break A}if("outside"===v){w=300
break A}w=130
break A}return w},
gtV(d){var w,v=this.c
A:{if("bathroom"===v){w=100
break A}if("kitchen"===v){w=110
break A}if("living"===v){w=120
break A}if("hall"===v){w=64
break A}if("outside"===v){w=200
break A}w=112
break A}return w},
glp(){var w,v=this
if(v.c!=="outside"){w=v.fy
if(w.length!==0)w=w==="ptrap"||w==="faucet"||v.gyx()
else{w=v.ch
w=w==null?null:w.gaCt()
if(w==null)w=!v.ax}}else w=!0
return w},
gop(){var w=this,v=w.c
if(v==="bathroom"||v==="kitchen"){v=w.fy
if(v.length!==0)v=!(v==="ptrap"||v==="faucet")||w.gyx()
else{v=w.CW
v=v==null?null:v.gBa()
if(v==null)v=!w.ay}}else v=!0
return v},
SE(d){var w,v,u,t
for(w=this.x,v=w.length,u=0;u<v;++u){t=w[u]
if(t.a===d)return t}return null},
l7(d,e,f,g){var w=this,v=w.y++,u=f==null?0:f,t=new A.aTi(v,e,u,g==null?w.gtV(0)*0.6:g)
w.x.push(t)
w.aBs(0,t)
return t},
J(d,e){return this.l7(0,e,null,null)},
aBs(d,e){var w,v,u,t=B.yx.h(0,e.b)
t.toString
w=(e.e&1)===1
v=w?t.d:t.c
u=w?t.c:t.d
t=v/2
e.c=D.k.D(e.c,-this.grL(0)/2+t+1,this.grL(0)/2-t-1)
t=u/2
e.d=D.k.D(e.d,t+1,this.gtV(0)-t-1)}}
A.aTB.prototype={
buK(d){var w,v,u
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
u.fy=d
u.db=d==="fan"?"fan":"light"
if(d==="gfci")u.Q=5
u.ay=u.ax=!1
u.Q=v==="bathroom"||v==="kitchen"?5:0
this.aR6(u)
u.dy="bangtv"
u.fr=!0
u.fx=Math.max(0,D.d.bd(E.jT,new A.bOK()))
this.d=C.a([u],x.A)},
cLa(){var w,v,u,t,s,r
for(w=this.gwf(),v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u){t=w[u]
t.CW=t.ch=null
s=t.ax=!0
r=t.c
t.ay=r!=="bathroom"?r==="kitchen":s
t.cy=!1
t.cx.a8(0)
D.d.a8(t.dx)}},
c1Q(){var w,v,u,t,s,r,q,p=this,o="back",n="bedroom",m="bathroom",l=new C.eT()
l.dH(p.b)
w=new A.bOL()
v=x.D
u=C.a([],v)
for(t=0;t<8;++t)u.push(new A.ps(o,-98+t*28,B.cOS[t]))
u.push(B.bw9)
u.push(B.bwb)
s=C.a([A.yx(0,"Bedroom 1",n,0,0,2,2,C.a([w.$1(-30)],v)),A.yx(1,"Bedroom 2",n,2,0,2,2,C.a([w.$1(-30)],v)),A.yx(2,"Bathroom 1",m,4,0,1,2,C.a([w.$1(-30)],v)),A.yx(3,"Bedroom 3",n,5,0,2,2,C.a([w.$1(-30)],v)),A.yx(4,"Bathroom 2",m,7,0,2,2,C.a([w.$1(-30)],v)),A.yx(5,"Hall","hall",0,2,9,1,u),A.yx(6,"Bedroom 4",n,0,3,2,2,C.a([w.$1(-30)],v)),A.yx(7,"Bedroom 5",n,2,3,2,2,C.a([w.$1(-30)],v)),A.yx(8,"Bathroom 3",m,4,3,1,2,C.a([w.$1(-30)],v)),A.yx(9,"Kitchen","kitchen",5,3,2,2,C.a([new A.ps(o,-50,5),B.bwc],v)),A.yx(10,"Living room","living",7,3,2,2,C.a([new A.ps(o,-70,5),B.bwa,B.bw8],v)),A.yx(11,"Garden","outside",0,5,9,1,C.a([B.bw7],v))],x.A)
p.d=s
for(r=0;r<12;++r){q=s[r]
v=q.c
if(v==="outside")continue
q.db=v==="bedroom"?"fan":"light"
q.ax=l.aj()<0.6
q.ay=(v==="bathroom"||v==="kitchen")&&l.aj()<0.7
D.d.hb(q.z,0,3,l.aB(8))
A:{if("bathroom"===v){v=5+l.aB(2)
break A}if("kitchen"===v){v=5+l.aB(2)
break A}if("bedroom"===v){v=2+l.aB(3)
break A}if("living"===v){v=l.aB(2)
break A}v=l.aB(2)
break A}q.Q=v
q.as=l.aB(4)
p.aR6(q)}v=p.d
v[3].ax=!0
v[2].ay=!0},
aR6(d){var w="rug",v="nightstand",u="plant",t=d.grL(0)/2
switch(d.c){case"bedroom":d.l7(0,w,0,d.gtV(0)*0.55)
d.l7(0,"bed",0,46)
d.l7(0,v,-42,14)
d.l7(0,v,42,14)
d.l7(0,"wardrobe",-t+12,76).e=1
d.l7(0,"desk",t-14,80).e=3
break
case"living":d.l7(0,w,0,70)
d.l7(0,"sofa",0,100)
d.l7(0,"coffee",0,68)
d.l7(0,"tvstand",0,14)
d.l7(0,"armchair",-60,60)
d.l7(0,u,76,14)
d.l7(0,"lamp",-76,14)
break
case"kitchen":d.l7(0,"dining",0,78)
d.l7(0,"chair",-24,78).e=1
d.l7(0,"chair",24,78).e=3
d.l7(0,u,58,20)
break
case"bathroom":d.l7(0,w,0,62).e=0
d.l7(0,u,d.grL(0)/2-12,d.gtV(0)-12)
break
case"hall":d.l7(0,w,0,36)
d.l7(0,u,108,50)
break}},
gwf(){var w,v,u,t=C.a([],x.A),s=this.d
s===$&&C.c()
w=s.length
v=0
for(;v<s.length;s.length===w||(0,C.K)(s),++v){u=s[v]
if(u.c!=="outside")t.push(u)}return t},
gcRA(){var w=this.gwf()
return new C.a2(w,new A.bOP(),C.T(w).k("a2<1>")).gM(0)},
gcOu(){var w=this.d
w===$&&C.c()
return new C.a2(w,new A.bOO(),C.T(w).k("a2<1>")).gM(0)},
gcOt(){var w=this.d
w===$&&C.c()
return new C.a2(w,new A.bON(),C.T(w).k("a2<1>")).gM(0)},
gcHm(){var w=this.gwf()
return new C.a2(w,new A.bOM(),C.T(w).k("a2<1>")).gM(0)}}
A.aoO.prototype={
T(){var w=new C.BA()
$.Cw()
w.iV(0)
return new A.aCb(w)}}
A.aCb.prototype={
gbeK(){var w=this.d
w===$&&C.c()
w=w.gwf()
return new C.a2(w,new A.e0p(),C.T(w).k("a2<1>")).gM(0)},
a_(){var w,v,u,t,s=this
s.a1()
w=s.a.r
if(w.length!==0)w=s.d=A.hpy(w)
else{w=$.aTC==null
if(w){w=D.o.F(Date.now(),1e5)
$.aTC=A.fYN(w)}w=$.aTC
w.toString
w=s.d=w}v=s.a
w.c=v.d||w.c
u=new A.Ay(-0.05,0.1,120,B.fu7,$.aw())
u.f=560
s.e=u
if(v.f.length!==0){w=w.gwf()
t=new C.a2(w,new A.e0n(s),C.T(w).k("a2<1>"))
if(!t.gal(0)){w=s.d
w===$&&C.c()
w.e=t.gL(0).a}}w=s.d
w===$&&C.c()
v=w.d
v===$&&C.c()
s.f=A.hbV(v[w.e],"look",s.gbeK(),0)
s.av4(!0)
$.aT.x1$.push(new A.e0o(s))},
q(){var w=this.ay
if(w!=null)w.a9(0)
w=this.db
if(w!=null)w.a9(0)
this.a2()},
bXb(){var w,v=this.d
v===$&&C.c()
w=v.a
A:{if("switch"===w){v="The ceiling light is already in. Tap the red switch on the wall and wire it. Then flip it to see the light work."
break A}if("outlet"===w){v="Tap the red outlet on the wall and wire it. Then plug in a lamp or a TV to test it."
break A}if("gfci"===w){v="Tap the red GFCI outlet and wire it. Then plug in a hair dryer to test it."
break A}if("fan"===w){v="Tap the ceiling fan and wire it. Then flip the wall switch and watch it spin."
break A}if("ptrap"===w){v="The sink has no drain yet. Tap the sink and build the drain under it."
break A}v="The faucet is not connected yet. Tap the sink and connect the hoses."
break A}return v},
av4(d){var w,v,u,t,s,r,q=this,p=q.d
p===$&&C.c()
w=p.d
w===$&&C.c()
v=w[p.e]
if(v.c==="outside"){p=q.e
p===$&&C.c()
p.w=0.9
u=B.fue
t=380
s=0.22
r=-0.1}else if(q.x){u=new A.L(0,40,v.gtV(0)*0.3)
t=Math.max(v.grL(0)*0.8,v.gtV(0)*0.9)+10
p=q.e
p===$&&C.c()
p.w=1.3
s=0.1
r=-0.05}else{u=new A.L(0,30,v.gtV(0)*0.45)
t=(v.grL(0)*1.2>v.gtV(0)*1.4?v.grL(0)*1.2:v.gtV(0)*1.4)+30
p=q.e
p===$&&C.c()
p.w=0.9
s=0.5
r=-0.12}if(d){p.d=u
p.c=t
p.a=r
p.b=s}else p.mz(t,s,u,r)},
Yr(){return this.av4(!1)},
kH(){var w,v,u=this,t=u.d
t===$&&C.c()
w=t.d
w===$&&C.c()
t=w[t.e]
w=u.r
v=u.z
u.f=A.hbV(t,w,u.gbeK(),v)},
OH(d,e){var w=this,v=w.ay
if(v!=null)v.a9(0)
w.m(new A.e_C(w,d,e))
w.ay=C.cM(D.ed,new A.e_D(w))},
lQ(d){return this.OH(d,!0)},
QC(d){this.m(new A.e_E(this,d))
A.mV(660,50,0.25,"tri")},
av5(d,e){var w=this,v=w.d
v===$&&C.c()
if(d!==v.e){v=v.d
v===$&&C.c()
v=d>=v.length}else v=!0
if(v)return
if(!e&&w.CW!=null)w.ah3()
w.m(new A.e_b(w,d))
w.Yr()
A.mV(520,60,0.25,"tri")},
ack(d){return this.av5(d,!1)},
aUo(d){var w,v,u,t=this
if(d===700){w=t.d
w===$&&C.c()
v=w.d
v===$&&C.c()
return v[w.e].gaEV()}if(d===701){w=t.d
w===$&&C.c()
v=w.d
v===$&&C.c()
w=v[w.e]
return w.fy.length!==0||w.glp()}if(d===702){w=t.d
w===$&&C.c()
v=w.d
v===$&&C.c()
return v[w.e].gT6()}if(d===703){w=t.d
w===$&&C.c()
v=w.d
v===$&&C.c()
return v[w.e].ga4l()}if(d>=800&&d<820){u=d-800
w=t.d
w===$&&C.c()
v=w.d
v===$&&C.c()
w=v[w.e].dx
return u<w.length&&w[u].gBa()}if(d===720){w=t.d
w===$&&C.c()
v=w.d
v===$&&C.c()
return v[w.e].gaEV()}if(d===721){w=t.d
w===$&&C.c()
v=w.d
v===$&&C.c()
w=v[w.e]
return w.fy.length!==0||w.glp()}if(d>=722&&d<728){u=d-720-2
w=t.d
w===$&&C.c()
v=w.d
v===$&&C.c()
w=v[w.e].dx
return u<w.length&&w[u].gBa()}w=t.d
w===$&&C.c()
v=w.d
v===$&&C.c()
return v[w.e].glp()},
b52(){var w,v,u=this,t=u.d
t===$&&C.c()
w=t.d
w===$&&C.c()
v=w[t.e].db==="fan"
u.m(new A.e_K(u))
t=u.d
w=t.d
w===$&&C.c()
if(w[t.e].cy)t=v?"The fan spins.":"The light is on."
else t=v?"The fan stops.":"The light is off."
u.lQ(t)
t=u.d
w=t.d
w===$&&C.c()
A.mV(w[t.e].cy?900:500,60,0.25,"tri")},
c1U(d){var w,v,u,t,s,r,q,p,o,n,m=this
if(d===0)return
if(d>=100&&d<200){if(m.r!=="furniture")return
m.m(new A.e_i(m,d))
w=m.d
w===$&&C.c()
v=w.d
v===$&&C.c()
u=v[w.e].SE(m.z)
if(u!=null)m.lQ(B.yx.h(0,u.b).a+": move it with the arrows.")
return}if(d===300||d===301||d===302){if(m.r!=="walls")return
m.m(new A.e_j(m,d))
m.lQ("Wall picked. Choose a paint colour.")
return}if(d>=600&&d<620){t=d-600
w=m.d
w===$&&C.c()
v=w.d
v===$&&C.c()
w=v[w.e].w
if(t>=w.length)return
if(m.r==="doors"){m.m(new A.e_k(m,t))
w=m.d
v=w.d
v===$&&C.c()
A.mV(v[w.e].at.t(0,t)?700:450,70,0.25,"tri")
return}w=w[t]
m.m(new A.e_l(m,t))
A.mV(700,70,0.25,"tri")
C.bN(D.mS,new A.e_m(m,t,w.c),x.P)
return}w=d===700
v=!w
s=!0
if(v)if(d!==701){if(d!==702)if(d!==703)if(!(d>=800&&d<820))r=d>=720&&d<728
else r=s
else r=s
else r=s
s=r}if(m.w&&s){q=m.aUo(d)
A.mV(q?1400:500,160,0.25,"tri")
w=q?"The tester glows and beeps: LIVE, 120 volts. Never touch a live wire. Switch the breaker off first.":"The tester stays dark: no power here. It still needs wiring."
m.OH(w,!q)
return}if(!v||d===701){if(m.aUo(d))m.awP(w?0:1)
else m.aQO()
return}if(d>=800&&d<820){t=d-800
w=m.d
w===$&&C.c()
v=w.d
v===$&&C.c()
w=v[w.e].dx
if(t>=w.length)return
p=w[t]
if(!p.gBa())m.ai7(t)
else if(p.a==="switch")m.b52()
else m.awP(2+t)
return}if(d===702||d===703){w=m.d
w===$&&C.c()
v=w.d
v===$&&C.c()
if(v[w.e].gT6()){w=m.d
v=w.d
v===$&&C.c()
w=!v[w.e].ga4l()}else w=!0
if(w)m.aQO()
else m.b52()
return}if(d===730){w=m.d
w===$&&C.c()
v=w.d
v===$&&C.c()
w=v[w.e]
o=w.dy
if(o==null)return
if(!w.fr){m.m(new A.e_n(m))
w=m.d
v=w.d
v===$&&C.c()
m.lQ("The TV is on and playing "+E.jT[v[w.e].fx].a+".")}else{n=A.fjj(o)
w=m.c
w.toString
F.fHN(w,0,n.a,!0,D.uP,n.b)}return}if(d>=720&&d<728){w=m.d
w===$&&C.c()
v=w.d
v===$&&C.c()
r=d-720
o=v[w.e].cx.h(0,r)
if(o==null)return
n=A.fjj(o)
if(n.d>0){w=m.c
w.toString
F.fHN(w,0,n.a,!0,D.uP,n.b)}else m.awP(r)
return}if(d===710||d===711||d===712||d===713){w=m.d
w===$&&C.c()
v=w.d
v===$&&C.c()
if(!v[w.e].gop())if(m.d.a.length!==0)m.DE()
else m.ZH()
else{w=m.f
w===$&&C.c()
t=w.b.h(0,d)
if(t!=null)m.lQ(t.a+": "+t.b)}}},
awP(d){var w=this.c
w.toString
return C.bV(E.nx,null,new A.e_s(this,d),w,!0,!0,!1,D.lN,!1,!1,x.H)},
cwO(){var w=this.c
w.toString
return C.bV(E.nx,null,new A.e00(this),w,!0,!0,!0,D.lN,!1,!1,x.H)},
cwg(){var w=this.c
w.toString
return C.bV(E.nx,null,new A.e_P(this),w,!0,!0,!0,D.lN,!1,!1,x.H)},
cs4(d){var w,v,u,t=this,s=t.db
if(s!=null)s.a9(0)
s=t.d
s===$&&C.c()
s=s.gwf()
w=s.length
v=0
for(;v<w;++v){u=s[v]
if(u.dy==null)u.dy="bangtv"
u.fr=!0}s=t.d
w=new A.bOQ(s,d,C.a([],x.Y))
w.buL(s,d)
t.CW=w
t.cx=t.ch.gu_()/1000
t.x=!0
t.r="look"
t.w=!1
t.m(new A.e_G(t,t.CW.aB0(0).a))
t.Yr()
t.db=C.dC(D.fx,new A.e_H(t))
t.m(new A.e_I())},
ah3(){var w=this,v=w.db
if(v!=null)v.a9(0)
w.db=null
w.m(new A.e_J(w))
w.Yr()},
c1V(){var w=this.CW
if(w==null)return null
return w.aB0(this.ch.gu_()/1000-this.cx)},
aQO(){var w=this.d
w===$&&C.c()
if(w.a.length!==0)this.DE()
else this.ZQ()},
DE(){var w=0,v=C.j(x.H),u,t=this,s,r,q,p
var $async$DE=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:p=t.d
p===$&&C.c()
s=p.d
s===$&&C.c()
r=s[p.e]
if(r.gyx()){t.lQ("This lesson is done. Try everything: it all works.")
w=1
break}p=r.fy
w=p==="ptrap"||p==="faucet"?3:5
break
case 3:if(r.id==null)r.id=A.fNL()
p=t.c
p.toString
w=6
return C.b(C.a5(p,!1).ce(C.ej(new A.e_d(r),!1,null,x.H)),$async$DE)
case 6:w=4
break
case 5:if(r.go==null)r.go=new A.Xr(C.V(x.S,x.N))
p=t.c
p.toString
w=7
return C.b(C.a5(p,!1).ce(C.ej(new A.e_e(r),!1,null,x.H)),$async$DE)
case 7:case 4:if(t.c==null){w=1
break}t.m(t.gYs())
if(r.gyx()){q=r.fy
A:{if("switch"===q){p="Done! Tap the switch on the wall: the light comes on."
break A}if("fan"===q){p="Done! Tap the wall switch and the fan spins."
break A}if("outlet"===q||"gfci"===q){p="Done! Tap the outlet and plug something in."
break A}p="Done! The sink works."
break A}t.lQ(p)}case 1:return C.h(u,v)}})
return C.i($async$DE,v)},
ai7(d){return this.cz9(d)},
cz9(d){var w=0,v=C.j(x.H),u,t=this,s,r,q
var $async$ai7=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:q=t.d
q===$&&C.c()
s=q.d
s===$&&C.c()
r=s[q.e].dx[d]
q=t.c
q.toString
w=3
return C.b(C.a5(q,!1).ce(C.ej(new A.e01(r),!1,null,x.H)),$async$ai7)
case 3:if(t.c==null){w=1
break}t.m(t.gYs())
if(r.gBa())t.lQ("Wired! "+(r.a==="switch"?"Tap it to turn the light on and off.":"Tap it to plug something in."))
case 1:return C.h(u,v)}})
return C.i($async$ai7,v)},
ZQ(){var w=0,v=C.j(x.H),u,t=this,s,r,q,p
var $async$ZQ=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:p=t.d
p===$&&C.c()
s=p.d
s===$&&C.c()
r=s[p.e]
if(r.c==="outside"){w=1
break}s=r.ch
if(s==null){q=A.fOa(A.i2L(r),r.b,!1,p.b*37+r.a)
q.aD1()
if(!r.ax)q.cBX()
r.ch=q
p=q}else p=s
p.b=t.d.c
p=t.c
p.toString
w=3
return C.b(C.a5(p,!1).ce(C.ej(new A.e_g(r),!1,null,x.H)),$async$ZQ)
case 3:if(t.c==null){w=1
break}t.m(t.gYs())
if(r.glp())t.lQ(r.b+": the wiring is finished. The light has power.")
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
if(!(s==="bathroom"||s==="kitchen")){t.OH("This room has no plumbing. Bathrooms and the kitchen do.",!1)
w=1
break}q=r.CW
if(q==null){s=s==="kitchen"?"kitchen":"bathroom"
s=r.CW=A.fNK(!1,p.b*41+r.a,s)
p=s}else p=q
if(!r.ay&&!p.gaiD())r.CW.cBW()
r.CW.b=t.d.c
p=t.c
p.toString
w=3
return C.b(C.a5(p,!1).ce(C.ej(new A.e_f(r),!1,null,x.H)),$async$ZH)
case 3:if(t.c==null){w=1
break}t.m(t.gYs())
if(r.gop())t.lQ(r.b+": the plumbing is finished and nothing leaks.")
case 1:return C.h(u,v)}})
return C.i($async$ZH,v)},
bwO(){var w=this.c
w.toString
return C.bV(E.nx,null,new A.dZV(this),w,!0,!0,!1,D.lN,!1,!1,x.H)},
bwr(d){var w,v,u,t,s,r,q,p,o=this,n=o.d
n===$&&C.c()
w=n.d
w===$&&C.c()
v=w[n.e]
n=v.c
if(n==="outside"||n==="hall"){o.OH("Add devices in a room, not in the hall or the garden.",!1)
return}n=v.dx
if(n.length>=4){o.OH("This room already has four added devices.",!1)
return}w=C.a([-v.grL(0)/4,v.grL(0)/4],x.n)
for(u=v.w,t=D.d.gag(u),s=new C.fG(t,new A.dZP());s.C();)w.push(t.gU(0).b)
for(u=D.d.gag(u),t=new C.fG(u,new A.dZQ());t.C();)w.push(u.gU(0).b+24)
for(u=n.length,r=0;r<n.length;n.length===u||(0,C.K)(n),++r)w.push(n[r].b)
p=-v.grL(0)/2+14
for(;;){if(!(p<=v.grL(0)/2-14)){q=null
break}if(D.d.d9(w,new A.dZR(p))){q=p
break}p+=6}if(q==null){o.OH("There is no free place left on the back wall.",!1)
return}o.m(new A.dZS(o,v,d,q))
o.lQ("Added. It is red because it is not wired: tap it to wire it.")},
acl(d,e){var w,v,u=this,t=u.d
t===$&&C.c()
w=t.d
w===$&&C.c()
v=w[t.e].SE(u.z)
if(v==null)return
u.m(new A.e_c(u,v,d,e))},
c1Z(){var w,v,u=this,t=u.d
t===$&&C.c()
w=t.d
w===$&&C.c()
v=w[t.e].SE(u.z)
if(v==null)return
u.m(new A.e_Q(u,v))},
cix(){var w,v,u=this,t=u.d
t===$&&C.c()
w=t.d
w===$&&C.c()
v=w[t.e].SE(u.z)
if(v==null)return
u.m(new A.e_z(u,v))
u.lQ(B.yx.h(0,v.b).a+": "+B.cHT[v.f]+".")},
c1X(d){var w,v,u=this,t=u.d
t===$&&C.c()
w=t.d
w===$&&C.c()
v=w[t.e].SE(u.z)
if(v==null)return
u.m(new A.e_A(u,v))},
bwu(d){var w,v=this,u=v.d
u===$&&C.c()
w=u.d
w===$&&C.c()
v.m(new A.dZT(v,w[u.e].J(0,d)))
v.lQ(B.yx.h(0,d).a+" added. Move it with the arrows.")},
OG(d,e,f,g,h){var w=null,v=e?g.j(0.25):D.c.j(0.07),u=C.m(14),t=e?g:D.b5
t=C.I(t,D.r,e?2:1)
v=C.a([C.p(w,C.d(d,w,w,w,w,w,w,C.l(w,w,e?g:D.c,w,w,w,w,w,w,w,w,12.5,w,w,D.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),D.f,w,w,new C.o(v,w,t,u,w,w,D.n),w,w,w,w,A_.Xl,w,w,w)],x.p)
if(h)v.push(C.ao(w,C.p(w,w,D.f,w,w,new C.o(D.aC,w,C.I(B.Kl,D.r,2),w,w,w,D.a6),w,11,w,w,w,w,w,11),w,w,w,-2,-3,w))
return new C.C(D.fy,C.aE(w,new C.an(D.W,w,D.aa,D.f,v,w),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,!1,D.a8),w)},
ve(d,e,f,g){return this.OG(d,e,f,g,!1)},
Ic(d,e,f){return this.OG(d,e,f,D.aJ,!1)},
azj(d,e,f,g){var w=null,v=g==null,u=v?34:w,t=v?w:D.l4,s=C.m(10),r=e?D.c:D.b5
r=C.I(r,D.r,e?3:1)
if(v)v=w
else v=C.av(C.d(g,w,w,w,w,w,w,C.l(w,w,d.j1()>0.5?D.w:D.c,w,w,w,w,w,w,w,w,12,w,w,D.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,w,w)
return new C.C(E.tf,C.aE(w,C.p(w,v,D.f,w,w,new C.o(d,w,r,s,w,w,D.n),w,34,w,w,t,w,w,u),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,!1,D.a8),w)},
cte(d,e,f){return this.azj(d,e,f,null)},
GR(d,e){var w=null,v=D.c.j(0.1),u=C.m(10),t=C.I(D.b5,D.r,1)
return new C.C(D.fy,C.aE(w,C.p(w,C.W(d,D.c,w,w,w,20),D.f,w,w,new C.o(v,w,t,u,w,w,D.n),w,36,w,w,w,w,w,40),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,e,w,w,w,w,w,w,!1,D.a8),w)},
bEN(){var w,v,u,t,s,r,q,p,o,n,m=this,l=null
if(m.CW!=null){w=m.dx
return C.A(C.a([C.D(C.d("\ud83c\udfac "+(w.length===0?"Walking in":w),l,1,D.a2,l,l,l,B.eW3,l,l,l),1),m.ve("\u23f9 Stop the tour",!0,m.gcsn(),D.cr)],x.p),D.m,l,D.e,D.j,0,l,l)}switch(m.r){case"furniture":w=m.d
w===$&&C.c()
v=w.d
v===$&&C.c()
u=v[w.e].SE(m.z)
w=x.p
v=C.a([],w)
if(u!=null)v.push(new C.a6(l,40,C.cB(C.a([m.GR(D.ps,new A.e_0(m)),m.GR(D.j7,new A.e_1(m)),m.GR(D.va,new A.e_2(m)),m.GR(D.ts,new A.e_3(m)),m.GR(G.akC,m.gc1Y()),m.GR(D.mZ,m.gciw()),m.GR(D.e4,m.gc1W(m))],w),l,l,l,l,D.aQ,!1),l))
else v.push(B.aTA)
w=C.a([],w)
for(t=B.yx.gdL(B.yx),t=t.gag(t);t.C();){s=t.gU(t)
r=s.b
w.push(m.ve(r.b+" "+r.a,!1,new A.e_4(m,s),D.b0))}v.push(new C.a6(l,40,C.cB(w,l,l,l,l,D.aQ,!1),l))
return C.v(v,D.m,l,D.e,D.Q,0,D.p)
case"walls":w=m.Q
v=w<0
w=v?"All walls":"Wall "+(w+1)+": tap Look to reset"
v=C.a([m.Ic(w,v,new A.e_5(m))],x.p)
for(q=0;q<8;++q)v.push(m.azj(B.auS[q],!1,new A.e_6(m,q),B.dav[q]))
return new C.a6(l,40,C.cB(v,l,l,l,l,D.aQ,!1),l)
case"floor":w=C.a([],x.p)
for(q=0;q<7;++q){v=B.auF[q]
t=m.d
t===$&&C.c()
s=t.d
s===$&&C.c()
w.push(m.azj(v.b,s[t.e].Q===q,new A.e_7(m,q),v.a))}return new C.a6(l,40,C.cB(w,l,l,l,l,D.aQ,!1),l)
case"ceiling":w=m.d
w===$&&C.c()
v=w.d
v===$&&C.c()
w=v[w.e].db==="fan"?"\ud83c\udf00 Fan (tap for light)":"\ud83d\udca1 Light (tap for fan)"
w=C.a([m.ve(w,!1,new A.e_8(m),D.b7)],x.p)
for(q=0;q<4;++q){v=B.atw[q]
t=m.d
s=t.d
s===$&&C.c()
w.push(m.cte(v,s[t.e].as===q,new A.e_9(m,q)))}return new C.a6(l,40,C.cB(w,l,l,l,l,D.aQ,!1),l)
default:p=C.aX(x.S)
w=C.a([],x.p)
v=m.d
v===$&&C.c()
t=v.d
t===$&&C.c()
v=t[v.e].w
t=v.length
o=0
for(;o<v.length;v.length===t||(0,C.K)(v),++o){n=v[o]
s=n.c
if(p.J(0,s)){r=m.d.d
r===$&&C.c()
s=r[s]
r=s.glp()&&s.gop()
w.push(m.OG("\ud83d\udeaa "+s.b,!1,new A.e_a(m,n),D.b0,!r))}}return new C.a6(l,40,C.cB(w,l,l,l,l,D.aQ,!1),l)}},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.d
h===$&&C.c()
w=h.d
w===$&&C.c()
v=w[h.e]
h=C.aI(d,i,x.w).w
w=j.d
if(w.a.length!==0)w=v.gyx()?"Done \u2713":"To do"
else w=""+w.gcHm()+"/"+j.d.gwf().length+" done"
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
if(j.y&&j.d.a.length===0)n.push(new A.bgx(j.d,j.gc1R(),Math.min(138,h.a.a*0.36),i))
h=A.WO(t,new A.e07(j),q,s,i,i,new A.e08(),r,p,new A.e09(j),j.gc1T(),u,n,i)
u=j.x?"\ud83d\udd2d See the whole room":"\ud83c\udfe0 Be inside"
u=C.a([j.ve(u,!1,new A.e0f(j),D.b0)],o)
if(j.d.a.length===0){t=j.CW!=null
s=t?"\u23f9 Stop tour":"\ud83c\udfac Tour"
u.push(j.ve(s,t,new A.e0g(j),D.bZ))}u.push(j.ve("\ud83d\udcfa TV",!1,j.gcwN(),D.ct))
if(j.d.a.length===0)u.push(j.ve("\u2795 Add",!1,j.gbwN(),D.bc))
u.push(j.ve("\ud83d\udd26 Tester",j.w,new A.e0h(j),D.cw))
if(j.d.a.length!==0)u.push(j.OG("\ud83d\udd27 Do the lesson",!1,j.gc1S(),D.cp,!v.gyx()))
else{t=j.OG("\u26a1 Wiring",!1,j.gcaI(),D.cp,!v.glp())
s=v.c
s=(s==="bathroom"||s==="kitchen")&&!v.gop()
D.d.v(u,C.a([t,j.OG("\ud83d\udeb0 Plumbing",!1,j.gca7(),D.ct,s),j.ve("\ud83d\uddfa Map",j.y,new A.e0i(j),D.by)],o))}u=C.cB(u,i,i,i,i,D.aQ,!1)
t=j.Ic("\ud83d\udc41 Look",j.r==="look",new A.e0j(j))
s=j.Ic("\ud83d\udecb Furniture",j.r==="furniture",new A.e0k(j))
r=j.Ic("\ud83e\uddf1 Walls",j.r==="walls",new A.e0l(j))
q=j.Ic("\ud83d\udfeb Floor",j.r==="floor",new A.e0m(j))
p=j.Ic("\u2b1c Ceiling",j.r==="ceiling",new A.e0a(j))
n=j.Ic("\ud83d\udeaa Doors",j.r==="doors",new A.e0b(j))
m=j.ve("\ud83d\udcd8 Learn",!1,new A.e0c(d),D.by)
l=j.d.c
k=l?"\ud83d\udd25 Practice":"\ud83c\udf93 Learn mode"
return new A.AS(v.b,D.aJ,h,C.v(C.a([new C.a6(i,40,u,i),D.at,new C.a6(i,40,C.cB(C.a([t,s,r,q,p,n,m,j.ve(k,l,new A.e0d(j),D.cr)],o),i,i,i,i,D.aQ,!1),i),D.at,j.bEN()],o),D.F,i,D.e,D.Q,0,D.p),new A.e0e(j,d),w,i)},
cgG(d){return C.bV(E.nx,null,new A.e_y(this),d,!0,!0,!0,D.lN,!1,!1,x.H)}}
A.bgx.prototype={
B(d){var w=null,v=D.k.D((this.e-10)/126,0.5,1),u=D.w.j(0.6),t=C.m(12),s=C.I(D.b5,D.r,1)
return C.p(w,new C.a6(126*v,84*v,C.aE(w,C.f1(D.A,C.b3(w,w,w,new A.bfW(this.c,w),B.eG4),D.f,D.zG),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new A.dlr(this,v),w,w,w,w,!1,D.a8),w),D.f,w,w,new C.o(u,w,s,t,w,w,D.n),w,w,w,w,D.lB,w,w,w)}}
A.bfW.prototype={
a6(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=this.b,e=f.d
e===$&&C.c()
w=e.length
v=d.a
u=0
for(;u<e.length;e.length===w||(0,C.K)(e),++u){t=e[u]
s=t.d*14+1
r=t.e*14+1
q=s+(t.f*14-2)
p=r+(t.r*14-2)
o=new C.aa(s,r,q,p)
n=t.a===f.e
if(t.glp()&&t.gop())m=D.bn
else m=!t.glp()?D.aC:D.d7
l=C.bz(o,D.hy)
$.X()
k=new C.as(D.X,D.V,D.a_,D.a0,D.Z)
k.r=m.j(t.glp()&&t.gop()?0.35:0.5).gp(0)
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
break A}h=new C.km(new C.eo(l,g,g,D.cO,g,g,g,g,g,g,B.eVg),D.a5,D.ch,new C.jm(1),g,g,g,g,D.cd,g)
h.eO()
l=h.b
k=l.c
l=l.a.c
h.a6(d,new C.u(s+(q-s)/2-k/2,r+(p-r)/2-l.gbb(l)/2))}},
aq(d){return!0}}
A.bOR.prototype={}
A.F9.prototype={}
A.My.prototype={
T(){return new A.bht()}}
A.bht.prototype={
A0(d){var w=this.c
w.toString
return C.a5(w,!1).ce(C.ej(new A.dJ7(d),!1,null,x.H))},
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null
$.aqo="tech"
w=C.aH(l,l,l,l,K.nN,l,l,l,new A.dJa(d),l,l,l,l,l,l)
v=D.aJ.j(0.16)
u=C.m(13)
t=x.p
u=C.A(C.a([w,C.p(l,B.b2k,D.f,l,l,new C.o(v,l,C.I(D.aJ.j(0.6),D.r,1),u,l,l,D.n),l,40,l,l,l,l,l,40),D.aw,B.btE],t),D.m,l,D.e,D.j,0,l,l)
v=C.A(C.a([C.D(m.aWx("Learn mode",!m.d,D.bc,new A.dJb(m)),1),D.ab,C.D(m.aWx("Practice mode",m.d,D.cr,new A.dJc(m)),1)],t),D.m,l,D.e,D.j,0,l,l)
w=C.m(20)
s=C.I(D.aJ,D.r,1.6)
w=C.aE(l,C.p(l,C.A(C.a([B.f5i,D.ew,B.btB,B.bCf],t),D.m,l,D.e,D.j,0,l,l),D.f,l,l,new C.o(l,l,s,w,l,B.bRK,D.n),l,l,l,l,D.bU,l,l,l),D.y,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,new A.dJe(m),l,l,l,l,l,l,!1,D.a8)
s=C.d("JOBS",l,l,l,l,l,l,B.aNi,l,l,l)
r=m.aWw(C.a([m.DF("\ud83d\udd0c","Wire a room","Go to a room that needs wiring",D.bn,new A.dJf(m)),m.DF("\ud83d\udebd","Plumb a room","Go to a bathroom or kitchen",D.aW,new A.dJg(m)),m.DF("\ud83d\udd27","Fix a house","Walk the house and fix every sign",D.aJ,new A.dJh(m)),m.DF("\ud83e\uddf1","Build a room","Frame, drywall, then wire",D.bc,new A.dJi(m)),m.DF("\u26a1","Wiring bench","Just the wiring, one room",D.cp,new A.dJj(m)),m.DF("\ud83d\udcde","Service calls","A customer rings with problems",D.iZ,new A.dJk(m))],t))
q=C.d("LESSONS",l,l,l,l,l,l,B.aNi,l,l,l)
p=C.a([],t)
for(o=0;o<7;++o){n=B.cOs[o]
p.push(m.DF(n.b,n.c,n.d,n.e,new A.dJl(m,n)))}p.push(m.DF("\ud83d\udcd8","Learn the trades","Short cards for beginners",D.by,new A.dJd(m)))
return C.cb(l,D.bW,C.bm(!0,C.cB(C.a([u,D.ac,v,D.ac,w,new C.C(B.agP,s,l),r,new C.C(B.agP,q,l),m.aWw(p)],t),l,B.afT,l,l,D.ah,!1),!0,!1,D.ag,!0,!0),l,!1,!1,l,l)},
aWx(d,e,f,g){var w=null,v=e?f.j(0.2):D.c.j(0.06),u=C.m(14),t=e?f:D.b5
t=C.I(t,D.r,e?2:1)
return C.aE(w,C.p(w,C.av(C.d(d,w,w,w,w,w,w,C.l(w,w,e?f:D.ad,w,w,w,w,w,w,w,w,13,w,w,D.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,w,w),D.f,w,w,new C.o(v,w,t,u,w,w,D.n),w,w,w,w,D.jp,w,w,w),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,!1,D.a8)},
aWw(d){var w,v,u,t,s=null,r=x.p,q=C.a([],r)
for(w=0;v=d.length,w<v;w+=2){u=d[w]
t=w+1
v=t<v?d[t]:D.bH
q.push(new C.C(D.cG,new C.Du(new C.co(D.aQ,D.e,D.j,D.aj,s,D.p,s,0,C.a([new C.bE(1,D.bi,u,s),D.ab,new C.bE(1,D.bi,v,s)],r),s),s),s))}return C.v(q,D.m,s,D.e,D.j,0,D.p)},
DF(d,e,f,g,h){var w=null,v=C.m(16),u=C.I(g.j(0.5),D.r,1)
return C.aE(w,C.p(w,C.v(C.a([C.d(d,w,w,w,w,w,w,D.It,w,w,w),D.ao,C.d(e,w,w,w,w,w,w,W.Io,w,w,w),D.bz,C.d(f,w,2,D.a2,w,w,w,B.eR0,w,w,w)],x.p),D.F,w,D.e,D.j,0,D.p),D.f,w,w,new C.o(B.Kl,w,u,v,w,w,D.n),w,w,w,w,D.bk,w,w,w),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,h,w,w,w,w,w,w,!1,D.a8)}}
A.b4N.prototype={
B(d){var w,v,u,t,s,r=this,q=null,p=x.p,o=C.a([C.bZ(0,new A.atb(r.c,r.d,r.r,r.e,r.x,r.w,E.VS,q),0,0,0)],p),n=r.as,m=n!=null
if(m)o.push(C.ao(q,C.v(n,D.F,q,D.e,D.j,0,D.p),q,q,8,q,8,q))
n=C.a([],p)
w=r.at
if(w!=null)D.d.v(n,w)
n.push(r.av6(D.hv,"Zoom in",new A.coG(r)))
n.push(r.av6(D.xR,"Zoom out",new A.coH(r)))
w=r.f
n.push(r.av6(B.byR,"Back to the whole view",w))
o.push(C.ao(q,C.v(n,D.m,q,D.e,D.j,0,D.p),q,q,q,8,8,q))
n=r.y
if(n!=null){v=r.ay
if(v==null)m=m?60:10
else m=v
v=r.z
u=(v?D.ec:D.es).j(0.95)
t=C.m(14)
s=C.I(v?D.bc:D.cr,D.r,1)
o.push(C.ao(q,C.p(q,C.d(n,q,q,q,q,q,q,B.eSy,q,q,q),D.f,q,q,new C.o(u,q,s,t,q,q,D.n),q,q,q,q,D.on,q,q,q),q,q,10,62,m,q))}n=r.Q
if(n!=null){m=C.m(16)
v=C.I(D.b5,D.r,1)
n=C.a([C.d(n.a,q,q,q,q,q,q,B.f2v,q,q,q),D.d0,C.d(n.b,q,q,q,q,q,q,E.SK,q,q,q)],p)
u=r.ax
if(u!=null)D.d.v(n,C.a([D.ao,u],p))
o.push(C.ao(8,C.p(q,C.A(C.a([C.D(C.v(n,D.F,q,D.e,D.j,0,D.p),1),C.aH(q,q,q,q,D.FX,q,q,q,w,q,q,q,q,q,D.c7)],p),D.F,q,D.e,D.j,0,q,q),D.f,q,q,new C.o(E.aaD,q,v,m,q,q,D.n),q,q,q,q,E.afC,q,q,q),q,q,10,10,q,q))}return new C.an(D.W,q,D.aa,D.q,o,q)},
av6(d,e,f){var w=null,v=D.w.j(0.55),u=C.I(D.b5,D.r,1)
return new C.C(D.eO,C.ho(C.aE(w,C.p(w,C.W(d,D.c,w,w,w,20),D.f,w,w,new C.o(v,w,u,w,w,w,D.a6),w,38,w,w,w,w,w,38),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,!1,D.a8),w,e,w,w),w)}}
A.AS.prototype={
B(d){var w=this,v=null,u=C.aH(v,v,v,v,K.nN,v,v,v,new A.bQW(d),v,v,v,v,v,v),t=w.d,s=C.D(C.d(w.c,v,v,v,v,v,v,C.l(v,v,t,v,v,v,v,v,v,v,v,16,v,v,D.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),1),r=t.j(0.15),q=C.m(16),p=C.I(t.j(0.6),D.r,1),o=x.p
q=C.A(C.a([u,s,C.aE(v,C.p(v,C.A(C.a([C.W(A3.aj3,t,v,v,v,17),D.ea,C.d(w.w,v,v,v,v,v,v,C.l(v,v,t,v,v,v,v,v,v,v,v,12,v,v,D.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],o),D.m,v,D.e,D.Q,0,v,v),D.f,v,v,new C.o(r,v,p,q,v,v,D.n),v,v,v,v,D.th,v,v,v),D.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,w.r,v,v,v,v,v,v,!1,D.a8)],o),D.m,v,D.e,D.j,0,v,v)
p=C.aI(d,v,x.w).w
return C.cb(v,D.bW,C.bm(!0,C.v(C.a([new C.C(B.brV,q,v),C.p(v,C.cd(w.f,D.q,v,D.y,v,v,v,v,D.ah),D.f,v,new C.aY(0,1/0,0,p.a.b*0.34),B.aYW,v,v,v,v,E.Xj,v,v,1/0),C.D(C.bv(A2.a8X,w.e,D.aq),1)],o),D.m,v,D.e,D.j,0,D.p),!0,!1,D.ag,!0,!0),v,!1,!1,v,v)}}
A.GN.prototype={
T(){return new A.ay2()},
gda(d){return this.d}}
A.ay2.prototype={
gFA(){var w,v=this,u=v.d
if(u===$){w=A.Ac(v.a.c)
v.d!==$&&C.bM()
v.d=w
u=w}return u},
geR(d){var w,v=this.e
if(v===$){w=this.a.d
v=this.e=w==null?new A.Xr(C.V(x.S,x.N)):w}return v},
gkL(){var w=this.f
return w===$?this.f=new A.Ay(0.42,0.26,12,B.fx8,$.aw()):w},
goy(){var w=this,v=w.r
return v===$?w.r=A.fRY(w.gFA(),w.geR(0),!0):v},
q(){var w=this.as
if(w!=null)w.a9(0)
this.a2()},
kn(d,e){var w=this,v=w.as
if(v!=null)v.a9(0)
w.m(new A.d1k(w,d,e))
w.as=C.cM(D.l3,new A.d1l(w))},
oS(d){return this.kn(d,!1)},
xm(){var w=this.geR(0)
w.d=w.d&&w.a&&w.c>=2
this.r=A.fRY(this.gFA(),w,!0)},
nQ(){var w=this,v=w.gkL(),u=w.geR(0).c===0,t=u?2.8:0.4
u=u?12:10
v.mz(u,0.26,new A.L(0,0.1,t),0.42)
w.m(new A.d1d(w))},
c2_(){var w,v,u,t="ground",s=this.geR(0),r=!s.a||s.c>0,q=new A.d1c(this)
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
if(d===0){p.nQ()
return}w=p.gFA()
v=w.f
u=C.T(v).k("a2<1>")
t=C.B(new C.a2(v,new A.d1e(d),u),u.k("H.E"))
v=w.a
s=A.hgJ(v,d)
if(s!=null){u=p.geR(0)
u=u.c===0&&u.b.iL(0,s)}else u=!1
if(u){w=p.geR(0)
if(w.a){A.mV(180,220,0.25,"square")
p.oS("STOP! The power is still on. Turn the breaker OFF before you touch any wire.")
return}w=w.b
w.bn(w,new A.d1f(s))
p.m(p.gc22())
p.kn("Wire taken off the screw.",!0)
return}if(t.length!==0&&p.w.length!==0&&p.geR(0).c===0){u=p.geR(0)
r=A.hgF(w,u,p.w,D.d.gL(t),!1)
if(r!=null){++p.Q
A.mV(180,220,0.25,"square")
p.oS(r)}else{A.y4()
p.m(new A.d1g(p,d))
if(A.bBK(w,u))p.kn("Every wire is on the right screw. Now push the device into the box.",!0)
else p.kn(D.d.gL(t).b+": fastened correctly.",!0)
p.gkL().Gn(7,A.bzs(v,d,u))
p.w=""}return}q=p.goy().b.h(0,d)
if(q!=null){p.m(new A.d1h(p,d))
w=p.gkL()
v=q.c
w.Gn(q.d,v)}},
cfE(){var w,v=this
v.m(new A.d1i(v))
w=v.geR(0)
if(w.a){A.mV(120,200,0.25,"saw")
if(w.c===0)v.oS("The breaker is ON. The wires are LIVE at 120 volts. Turn it OFF before you touch anything.")}else{A.mV(600,100,0.25,"tri")
v.kn("Breaker OFF. It is safe to work on the wires. (In real life, always test them with a tester first.)",!0)}},
cuv(){var w,v,u=this
u.m(new A.d1m(u))
A.y4()
w=u.gFA().a
A:{if("switch"===w){v="Power on. Flip the switch and the light turns on: both black wires are on brass screws, so the switch opens and closes the hot wire. The lesson is complete! Mistakes: "+u.Q+"."
break A}if("gfci"===w){v="Power on. Press RESET (it clicks), then TEST: it must shut the outlet off. Wired on LINE, it protects the whole circuit. The lesson is complete! Mistakes: "+u.Q+"."
break A}v="The tester glows: this outlet has 120 volts and is wired correctly. The lesson is complete! Mistakes: "+u.Q+"."
break A}u.kn(v,!0)},
B(a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d=f.c2_(),a0=D.d.bd(d,new A.d1u())
if(a0<0)w="All done"
else{f.gFA()
w="Step "+(a0+1)+"/7"}v=f.gFA()
u=f.geR(0)
t=A.bBK(v,u)&&!u.a
s=f.goy()
r=f.gkL()
q=f.x
p=f.y
o=f.z
n=q!==0?f.goy().b.h(0,f.x):e
m=(u.a?D.es:D.ec).j(0.95)
l=C.m(18)
k=u.a
j=C.I(k?D.cr:D.bc,D.r,1.5)
i=C.W(k?D.h4:B.ajV,D.c,e,e,e,18)
h=x.p
l=A.WO(r,e,o,q,n,e,e,p,e,f.gId(),f.gIe(),s,C.a([C.aE(e,C.p(e,C.A(C.a([i,D.ea,C.d(k?"Breaker ON (live)":"Breaker OFF (safe)",e,e,e,e,e,e,D.nd,e,e,e)],h),D.m,e,D.e,D.Q,0,e,e),D.f,e,e,new C.o(m,e,j,l,e,e,D.n),e,e,e,e,D.h3,e,e,e),D.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,f.gcfD(),e,e,e,e,e,e,!1,D.a8)],h),C.a([A.Q7("Hints",D.aJ,D.qN,u.e,new A.d1v(f)),D.ao,A.Q7("Labels",D.aW,M.MS,u.f,new A.d1w(f)),D.ao,A.Q7("Brass side",B.bfS,E.ak0,!1,new A.d1y(f)),D.ao,A.Q7("Silver side",B.Kn,D.MY,!1,new A.d1z(f)),D.P],h))
j=C.a([],h)
s=u.c
if(s===0){s=C.a([],h)
for(r=D.d.gag(v.e),q=new C.fG(r,new A.d1A(f));q.C();){p=r.gU(0)
o=p.c
n=new C.aV(14,14)
m=f.w
k=p.a
m=m===k
i=m?D.b0:D.b5
g=new C.az(i,m?3:1,D.r,-1)
i=C.a([],h)
if(u.b.iL(0,k))i.push(new C.C(D.fy,C.W(D.ee,p.d,e,e,e,18),e))
m=p.b
k=p.d
i.push(new C.x(m,e,new C.F(!0,k,e,e,e,e,13,D.u,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e),e,e,e,e,e,e,e,e,e))
s.push(new C.C(D.j5,C.aE(e,C.p(e,new C.co(D.aQ,D.e,D.j,D.m,e,D.p,e,0,i,e),D.f,e,e,new C.o(o,e,new C.bP(g,g,g,g),new C.bp(n,n,n,n),e,e,D.n),e,e,e,e,D.hH,e,e,e),D.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new A.d1B(f,p),e,e,e,e,e,e,!1,D.a8),e))}s=C.c_(D.bD,s,D.bt,6,8)
if(t)u="Push it into the box"
else u=u.a?"Turn the breaker OFF first":"Fasten every wire first"
D.d.v(j,C.a([s,D.P,C.A(C.a([A.y3(u,B.akA,t?new A.d1C(f):e,D.aJ)],h),D.m,e,D.e,D.j,0,e,e)],h))}else if(s===1)D.d.v(j,C.a([C.A(C.a([A.y3("Pull it back out",D.qQ,new A.d1D(f),D.ad),D.ab,A.y3("Put the cover plate on",L.vb,new A.d1E(f),D.aJ)],h),D.m,e,D.e,D.j,0,e,e)],h))
else{s=A.y3("Start over",D.la,new A.d1F(f),D.ad)
u=u.d
r=u?"Tested \u2713":"Power on and test"
D.d.v(j,C.a([C.A(C.a([s,D.ab,A.y3(r,D.h4,u?e:f.gcuu(),D.aJ)],h),D.m,e,D.e,D.j,0,e,e)],h))}return new A.AS(v.b,D.aJ,l,C.v(j,D.m,e,D.e,D.Q,0,D.p),new A.d1x(f,a1,d),w,e)}}
A.a8c.prototype={
T(){return new A.aDY()},
gda(d){return this.c}}
A.aDY.prototype={
geR(d){var w,v=this.d
if(v===$){w=this.a.c
v=this.d=w==null?A.fNL():w}return v},
gkL(){var w=this.e
return w===$?this.e=new A.Ay(-0.3,0.18,40,B.aQr,$.aw()):w},
goy(){var w=this.f
return w===$?this.f=A.bz8(this.geR(0)):w},
q(){var w=this.z
if(w!=null)w.a9(0)
this.a2()},
kn(d,e){var w=this,v=w.z
if(v!=null)v.a9(0)
w.m(new A.eK5(w,d,e))
w.z=C.cM(D.l3,new A.eK6(w))},
oS(d){return this.kn(d,!1)},
nQ(){this.gkL().mz(40,0.18,B.aQr,-0.3)
this.m(new A.eJZ(this))},
If(d){var w,v,u,t,s,r,q=this,p="square"
if(d===0){q.nQ()
return}w=C.E([41,"tail",42,"trap",43,"arm"],x.S,x.N).h(0,d)
if(w!=null&&!q.geR(0).a.t(0,w)){v=q.r
if(v.length===0){if(w==="tail")v="tailpiece"
else v=w==="trap"?"P-trap":"trap arm"
q.oS("Pick the "+v+" from the buttons below first, then tap its glowing outline.")
return}if(v!==w){A.mV(180,220,0.25,p)
u=q.r
A:{if("tail"===u){v="The tailpiece is the straight pipe that hangs from the sink. It goes at the very top, under the drain."
break A}if("trap"===u){v="The P-trap is the U-shaped bend. It goes right under the tailpiece, in the middle."
break A}v="The trap arm is the long straight pipe that goes into the wall. It goes last, on the right."
break A}q.oS(v)
return}if(w==="trap"&&!q.geR(0).a.t(0,"tail")){A.mV(180,220,0.25,p)
q.oS("Start from the top: put the tailpiece on first, then the trap under it.")
return}if(w==="arm"&&!q.geR(0).a.t(0,"trap")){A.mV(180,220,0.25,p)
q.oS("The trap arm joins the trap. Put the P-trap on first.")
return}q.m(new A.eK_(q,w))
A.y4()
q.kn("Piece in place. "+(q.geR(0).a.a===3?"Now tighten the two slip nuts: tap each nut.":"Pick the next piece."),!0)
return}v=d===44
if(v||d===45){t=v?"n1":"n2"
if(q.geR(0).b.h(0,t)!==!0){q.m(new A.eK0(q,t))
A.y4()
q.kn("Slip nut hand tightened. In real life give it a quarter turn more with pliers, but never over-tighten plastic.",!0)
return}}s=q.goy().b.h(0,d)
if(s!=null){q.m(new A.eK1(q,d))
v=q.gkL()
r=s.c
v.Gn(s.d,r)}},
c24(){var w=this,v=x.m,u=C.B(new C.a2(C.a(["n1","n2"],x.s),new A.eK2(w),v),v.k("H.E"))
w.m(new A.eK3(w,u))
if(u.length!==0){A.mV(180,220,0.25,"square")
w.oS("It is dripping from a loose slip nut! Tap the nut and tighten it, then run the water again.")}else{A.y4()
w.kn("No leaks. The water flows through the trap and into the wall. The little pool in the U-bend stays there and blocks sewer gas. The lesson is complete!",!0)}},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.geR(0),i=j.a,h=i.t(0,"tail"),g=i.t(0,"trap"),f=i.t(0,"arm"),e=j.b
e=e.h(0,"n1")===!0&&e.h(0,"n2")===!0
w=C.a([h,g,f,e,j.c&&j.d.length===0],x.u)
v=D.d.bd(w,new A.eKa())
u=i.a===3
j=v<0?"All done":"Step "+(v+1)+"/5"
h=l.goy()
g=l.gkL()
f=l.w
e=l.x
t=l.y
s=f!==0?l.goy().b.h(0,l.w):k
h=A.WO(g,new A.eKb(l),t,f,s,k,k,e,k,l.gId(),l.gIe(),h,k,k)
e=x.p
s=C.a([],e)
for(r=0;r<3;++r){q=B.d8H[r]
g=i.t(0,q)?k:new A.eKc(l,q)
f=i.t(0,q)?D.dq:D.fl
t=new C.aV(14,14)
p=l.r===q
o=p?D.b0:D.b5
n=new C.az(o,p?3:1,D.r,-1)
o=C.a([],e)
if(i.t(0,q))o.push(B.e10)
p=B.dgo.h(0,q)
p.toString
m=i.t(0,q)?D.c_:D.c
o.push(new C.x(p,k,new C.F(!0,m,k,k,k,k,13,D.u,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k),k,k,k,k,k,k,k,k,k))
s.push(new C.C(D.j5,C.aE(k,C.p(k,new C.co(D.aQ,D.e,D.j,D.m,k,D.p,k,0,o,k),D.f,k,k,new C.o(f,k,new C.bP(n,n,n,n),new C.bp(t,t,t,t),k,k,D.n),k,k,k,k,D.hH,k,k,k),D.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,g,k,k,k,k,k,k,!1,D.a8),k))}i=C.c_(D.bD,s,D.bt,6,8)
g=A.y3("Start over",D.la,new A.eKd(l),D.ad)
f=u?"Run the water":"Build the drain first"
return new A.AS("Sink drain (P-trap)",D.ct,h,C.v(C.a([i,D.P,C.A(C.a([g,D.ab,A.y3(f,D.pE,u?l.gc23():k,D.ct)],e),D.m,k,D.e,D.j,0,k,k)],e),D.m,k,D.e,D.Q,0,D.p),new A.eKe(d,w),j,k)}}
A.a3E.prototype={
T(){return new A.ayh()},
gda(d){return this.c}}
A.ayh.prototype={
geR(d){var w,v=this.d
if(v===$){w=this.a.c
v=this.d=w==null?A.fNL():w}return v},
gkL(){var w=this.e
return w===$?this.e=new A.Ay(-0.25,0.2,36,B.aQc,$.aw()):w},
goy(){var w=this.f
return w===$?this.f=A.aNc(this.geR(0)):w},
q(){var w=this.z
if(w!=null)w.a9(0)
this.a2()},
kn(d,e){var w=this,v=w.z
if(v!=null)v.a9(0)
w.m(new A.d4f(w,d,e))
w.z=C.cM(D.l3,new A.d4g(w))},
oS(d){return this.kn(d,!1)},
nQ(){this.gkL().mz(36,0.2,B.aQc,-0.25)
this.m(new A.d47(this))},
If(d){var w,v,u,t,s,r,q=this
if(d===0){q.nQ()
return}w=x.k
v=C.B(new C.a2(B.a22,new A.d4a(d),w),w.k("H.E"))
if(v.length!==0&&q.r.length!==0){w=q.geR(0)
u=A.i1Y(w,q.r,D.d.gL(v))
if(u!=null){A.mV(180,220,0.25,"square")
q.oS(u)}else{A.y4()
q.m(new A.d4b(q,d))
q.gkL().Gn(12,A.afe(d))
q.kn(A.flL(w)?"All four ends are connected. Now open the valves.":D.d.gL(v).b+": connected.",!0)}return}w=d===68
if(w||d===69){t=w?"hot":"cold"
if(q.geR(0).e.iL(0,t)){q.m(new A.d4c(q,t))
q.kn("Hose taken off.",!0)
return}}s=q.goy().b.h(0,d)
if(s!=null){q.m(new A.d4d(q,d))
w=q.gkL()
r=s.c
w.Gn(s.d,r)}},
c21(d){var w,v=this
v.m(new A.d48(v))
w=v.geR(0)
if(!w.f){v.kn("Valves closed.",!0)
return}if(A.flL(w)){A.y4()
v.kn("Hot and cold flow through the hoses and out of the faucet. No leaks. The lesson is complete!",!0)}else{A.mV(180,220,0.25,"square")
v.oS("Water is spraying out of a valve that has no hose! Close the valves and finish connecting the hoses first.")}},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=n.geR(0),k=l.r||l.e.a!==0,j=l.e,i=j.h(0,61)==="hot"&&j.h(0,63)==="hot",h=j.h(0,62)==="cold"&&j.h(0,64)==="cold",g=C.a([k,i,h,l.f&&A.flL(l)],x.u),f=D.d.bd(g,new A.d4k())
k=f<0?"All done":"Step "+(f+1)+"/4"
i=n.goy()
h=n.gkL()
w=n.w
v=n.x
u=n.y
t=w!==0?n.goy().b.h(0,n.w):m
s=x.p
i=A.WO(h,new A.d4l(n),u,w,t,m,m,v,m,n.gId(),n.gIe(),i,m,C.a([A.Q7("Hints",D.aJ,D.qN,l.r,new A.d4m(n)),D.P],s))
v=C.a([],s)
for(r=0;r<2;++r){h={}
w=B.d8c[r]
h.a=null
q=w.a
h.a=q
u=new C.aV(14,14)
t=n.r===q
p=t?D.b0:D.b5
o=new C.az(p,t?3:1,D.r,-1)
p=C.a([],s)
t=C.a3(j).k("bc<2>")
if(new C.a2(new C.bc(j,t),new A.d4n(h),t.k("a2<H.E>")).gM(0)===2)p.push(B.e12)
p.push(new C.x(w.b,m,D.rn,m,m,m,m,m,m,m,m,m))
v.push(new C.C(D.j5,C.aE(m,C.p(m,new C.co(D.aQ,D.e,D.j,D.m,m,D.p,m,0,p,m),D.f,m,m,new C.o(w.c,m,new C.bP(o,o,o,o),new C.bp(u,u,u,u),m,m,D.n),m,m,m,m,D.hH,m,m,m),D.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new A.d4o(h,n),m,m,m,m,m,m,!1,D.a8),m))}j=C.c_(D.bD,v,D.bt,6,8)
h=A.y3("Start over",D.la,new A.d4p(n),D.ad)
l=l.f?"Close the valves":"Open the valves"
return new A.AS("Faucet supply lines",D.cr,i,C.v(C.a([j,D.P,C.A(C.a([h,D.ab,A.y3(l,D.pE,n.gc20(n),D.cr)],s),D.m,m,D.e,D.j,0,m,m)],s),D.m,m,D.e,D.Q,0,D.p),new A.d4q(d,g),k,m)}}
A.az9.prototype={
T(){return new A.aza(A.fYO())}}
A.aza.prototype={
gkL(){var w,v=this.e
if(v===$){w=new A.Ay(-0.3,0.48,46,B.Tg,$.aw())
w.f=80
this.e=w
v=w}return v},
goy(){var w=this.f
return w===$?this.f=A.af1(this.d):w},
q(){var w=this.z
if(w!=null)w.a9(0)
this.a2()},
kn(d,e){var w=this,v=w.z
if(v!=null)v.a9(0)
w.m(new A.dbj(w,d,e))
w.z=C.cM(D.l3,new A.dbk(w))},
oS(d){return this.kn(d,!1)},
nQ(){this.gkL().mz(46,0.48,B.Tg,-0.3)
this.m(new A.dbd(this))},
If(d){var w,v,u,t=this
if(d===0){t.nQ()
return}if(d===72){w=t.d
w=w.d.t(0,72)&&w.a>=5}else w=!1
if(w){t.m(new A.dbf(t,d))
A.y4()
t.kn("You flipped the breaker fully OFF and then ON. The living room light is back on. A breaker trips when a circuit is overloaded: find out why before it trips again.",!0)
t.gkL().Gn(22,B.fAo)
return}w=d===87
if(w||d===86){v=t.d
v=v.b&&!v.c&&v.a>=5}else v=!1
if(v){if(t.w==="wrench"&&w){t.m(new A.dbg(t,d))
A.y4()
t.kn("You tightened the slip nut with the wrench. The drip has stopped.",!0)
return}A.mV(180,220,0.25,"square")
t.oS(w?"Hand tightening is not enough here. Pick the wrench first, then tap the nut.":"The water is dripping from the slip nut on the trap. Pick the wrench, then tap the nut.")}u=t.goy().b.h(0,d)
if(u!=null){t.m(new A.dbh(t,d))
w=t.gkL()
v=u.c
w.Gn(u.d,v)}},
c9M(d){var w,v
A:{if("ptrap"===d){w=B.e6R
break A}if("faucet"===d){w=B.bv2
break A}w=new A.GN(d,null,null)
break A}v=this.c
v.toString
C.a5(v,!1).ce(C.ej(new A.dbe(w),!1,null,x.H))},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.d,l=B.d3H[m.a],k=o.r,j=k===0?n:A.hSn(k)
k=m.d.t(0,72)
w=!m.b||m.c
v=C.a([!k,w],x.u)
w=m.a
k=o.goy()
u=o.gkL()
t=o.r
s=o.x
r=o.y
q=t!==0?o.goy().b.h(0,o.r):n
p=j==null?n:C.aE(n,C.p(n,B.f3G,D.f,n,n,new C.o(D.aJ,n,n,C.m(12),n,n,D.n),n,n,n,n,D.th,n,n,n),D.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new A.dbn(o,j),n,n,n,n,n,n,!1,D.a8)
k=A.WO(u,new A.dbo(o),r,t,q,p,new A.dbp(o),s,n,o.gId(),o.gIe(),k,n,n)
s=l.a
p=x.p
q=C.A(C.a([C.D(C.d(""+(m.a+1)+". "+s,n,n,n,n,n,n,B.eXj,n,n,n),1),A.Q7("Wrench",D.aW,D.qI,o.w==="wrench",new A.dbq(o))],p),D.m,n,D.e,D.j,0,n,n)
t=C.d(l.b,n,3,D.a2,n,n,n,B.eYo,n,n,n)
m=C.kR(D.by,6,s,6,0,new A.dbr(o),m.a)
u=v[0]
s=u?"\u2705 Living room power fixed":"\u26a0 Living room has no power"
s=C.D(C.d(s,n,n,n,n,n,n,C.l(n,n,u?D.ey:D.f9,n,n,n,n,n,n,n,n,11.5,n,n,D.I,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),1)
u=v[1]
r=u?"\u2705 Sink leak fixed":"\u26a0 Kitchen sink drips"
return new A.AS("Build and fix a house",D.by,k,C.v(C.a([q,D.bz,t,m,C.A(C.a([s,C.D(C.d(r,n,n,n,n,n,n,C.l(n,n,u?D.ey:D.f9,n,n,n,n,n,n,n,n,11.5,n,n,D.I,n,n,!0,n,n,n,n,n,n,n,n),D.dK,n,n),1)],p),D.m,n,D.e,D.j,0,n,n)],p),D.m,n,D.e,D.Q,0,D.p),new A.dbs(d,v),"Stage "+(w+1)+"/7",n)}}
A.jw.prototype={}
A.LV.prototype={}
A.a5J.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=x.p,k=C.a([C.A(C.a([C.aH(m,m,m,m,K.nN,m,m,m,new A.c4B(d),m,m,m,m,m,m),B.fdd],l),D.m,m,D.e,D.j,0,m,m)],l)
for(w=0;w<5;++w){v=B.dae[w]
u=v.c
t=C.a([new C.C(D.agO,new C.x(v.b+"  "+v.a.toUpperCase(),m,new C.F(!0,u,m,m,m,m,12,D.u,m,1.1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m,m,m,m,m,m,m),m)],l)
for(s=v.d,r=s.length,q=0;q<r;++q){p=s[q]
o=new C.aV(14,14)
n=new C.az(u.j(0.35),1,D.r,-1)
t.push(C.p(m,C.v(C.a([new C.x(p.a,m,D.jB,m,m,m,m,m,m,m,m,m),D.d0,new C.x(p.b,m,E.SK,m,m,m,m,m,m,m,m,m)],l),D.F,m,D.e,D.j,0,D.p),D.f,m,m,new C.o(B.Kl,m,new C.bP(n,n,n,n),new C.bp(o,o,o,o),m,m,D.n),m,m,m,D.cG,D.bk,m,m,m))}D.d.v(k,t)}return C.cb(m,D.bW,C.bm(!0,C.cB(k,m,B.afT,m,m,D.ah,!1),!0,!1,D.ag,!0,!0),m,!1,!1,m,m)}}
A.cfp.prototype={}
A.El.prototype={}
A.n9.prototype={}
A.VV.prototype={}
A.cff.prototype={
bv9(d,e,f){var w,v=this
if(f!=null)w=D.d.ix(B.aui,new A.cfj(f))
else{w=new C.eT()
w.dH(v.a)
w=B.aui[w.aB(2)]}v.c!==$&&C.aO()
v.c=w
w=new C.eT()
w.dH(v.a+7)
w=w.hf()
v.d!==$&&C.aO()
v.d=w},
uM(d,e){var w=this.c
w===$&&C.c()
return D.d.ix(w.c,new A.cfk(e))},
Ok(d){++this.w
return new A.eC(!1,d,!1,"")},
c_A(d){var w=d.d
return new C.J(w,new A.cfg(this),C.T(w).k("J<1,n>")).aH(0," and ")},
bev(d,e){var w,v,u,t,s=this,r=s.uM(0,e),q=s.e
if(q.t(0,e))return s.Ok("The "+r.c.toLowerCase()+" is already there.")
if(d!==r.b)return s.Ok(s.b?"That does not go here.":"That does not go here. This spot is for the "+r.c.toLowerCase()+".")
for(w=r.d,v=w.length,u=0;u<v;++u)if(!q.t(0,w[u])){q=s.b?"Not yet: something has to go in first.":"Not yet. "+r.e+" Put in the "+s.c_A(r)+" first.";++s.w
return new A.eC(!1,q,!1,"")}if(r.f&&s.r)return s.Ok(s.b?"The water is still on!":"Stop! The water is still on. Cutting into a pipe with the water on floods the room. Turn the water off at the main valve first (pick the hand and tap the main valve).")
q.J(0,e)
s.y=!1
s.x.a8(0)
if(r.r>0)t=s.b?"":" It is only loose. Pick the wrench and tap it to tighten the joints."
else t=""
return new A.eC(!0,r.c+" fitted."+t,!1,"")},
bfK(d){var w,v,u,t,s=this,r=s.uM(0,d)
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
bds(d){var w=this.uM(0,d),v=this.f.h(0,d)
if(v==null)v=0
return w.r-v},
aGC(){var w,v,u,t,s,r,q=this
q.r=!q.r
w=q.x
w.a8(0)
if(!q.r)return B.aTf
v=q.c
v===$&&C.c()
u=v.c
t=C.T(u).k("a2<1>")
s=C.B(new C.a2(u,new A.cfl(q),t),t.k("H.E"))
v=v.c
u=C.T(v).k("a2<1>")
r=C.B(new C.a2(v,new A.cfm(q),u),u.k("H.E"))
q.y=!0
if(s.length!==0){w.v(0,new C.J(s,new A.cfn(),C.T(s).k("J<1,n>")));++q.w
return new A.eC(!1,"Water is spraying from an open pipe where the "+D.d.gL(s).c.toLowerCase()+" should be! Turn the water off and finish the job.",!0,"")}if(r.length!==0){w.v(0,new C.J(r,new A.cfo(),C.T(r).k("J<1,n>")));++q.w
return new A.eC(!1,"The "+D.d.gL(r).c.toLowerCase()+" is leaking from a loose joint. Turn the water off, tighten it with the wrench, then test again.",!0,"")}if(!q.gaiD())return B.aT5
return B.aST},
cBW(){var w,v,u,t,s,r,q,p=this
p.r=!0
p.aGC()
w=p.c
w===$&&C.c()
v=w.c
u=v.length
t=0
for(;t<u;++t){s=v[t]
p.bev(s.b,s.a)}for(w=w.c,v=w.length,t=0;t<v;++t){s=w[t]
for(u=s.r,r=s.a,q=0;q<u;++q)p.bfK(r)}p.aGC()
p.w=0},
gaiD(){var w=this.c
w===$&&C.c()
return D.d.d9(w.c,new A.cfh(this))},
gcAh(){var w=this.c
w===$&&C.c()
return D.d.d9(w.c,new A.cfi(this))},
gBa(){var w=this
return w.gaiD()&&w.gcAh()&&w.r&&w.y&&w.x.a===0}}
A.UV.prototype={
T(){var w,v=new A.Ay(-0.25,0.4,175,B.aQV,$.aw())
v.f=200
w=new C.BA()
$.Cw()
w.iV(0)
return new A.aCG(v,w)}}
A.aCG.prototype={
gCg(d){var w=this.d
if(w===$){this.a.toString
w=D.o.F(Date.now(),1e5)
this.d=w}return w},
a_(){var w,v=this
v.a1()
w=v.a.d
if(w==null){w=v.gCg(0)
v.a.toString
w=A.fNK(!1,w,null)}v.e=w
v.r=A.hbX(w,v.x,!w.b)},
q(){var w=this.at
if(w!=null)w.a9(0)
this.a2()},
acm(){var w=this.e
w===$&&C.c()
return this.r=A.hbX(w,this.x,!w.b)},
aWA(d,e){var w=this,v=w.at
if(v!=null)v.a9(0)
w.m(new A.edZ(w,d,e))
w.at=C.cM(D.jm,new A.ee_(w))},
aWz(){this.f.mz(175,0.4,B.aQV,-0.25)
this.m(new A.edS(this))},
csd(d){var w,v,u=this.e
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
aw0(d){var w=this.e
w===$&&C.c();++w.w
return new A.eC(!1,d,!1,"")},
c28(d){return this.aWy(d)},
cry(d){var w
A:{if("main"===d){w=9400
break A}w=this.e
w===$&&C.c()
w=w.c
w===$&&C.c()
w=9100+D.d.bd(w.c,new A.ee0(d))
break A}this.aWy(w)},
b3x(){var w,v,u,t,s,r,q,p=this,o=p.x
if(o==="hand")return C.a([B.eoC],x.L)
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
q=r.uM(0,s)
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
aWy(d){var w,v,u,t,s,r=this
if(d===0)return
w=r.r
w===$&&C.c()
v=w.b.h(0,d)
if(r.x.length===0){r.m(new A.edK(r,d))
if(v!=null)r.aWA(v.a+": "+v.b,!0)
return}u=r.csd(d)
w=r.x
if(w==="hand")if(d===9400){w=r.e
w===$&&C.c()
t=w.aGC()}else{w=r.e
w===$&&C.c()
t=r.aw0(w.b?"Your hand is only for the main water valve.":"Your hand is for the main water valve. Parts are placed by picking them from the tray.")}else if(w==="wrench")if(u==null){w=r.e
w===$&&C.c()
t=r.aw0(w.b?"Nothing to tighten.":"There is nothing to tighten there.")}else{w=r.e
w===$&&C.c()
t=w.bfK(u)}else if(u==null){w=r.e
w===$&&C.c()
t=r.aw0(w.b?"Not there.":"That does not go there. Tap one of the glowing spots.")}else{s=r.e
s===$&&C.c()
t=s.bev(w,u)}w=t.a
if(w)A.y4()
else A.mV(180,220,0.25,"square")
r.m(new A.edL(r,d))
w=w&&!t.c
r.aWA(t.b,w)
w=r.e
w===$&&C.c()
if(w.gBa()&&!r.as){r.as=!0
$.aT.x1$.push(new A.edM(r))}},
c25(){var w=null,v=this.c
v.toString
C.c9(w,w,!0,w,new A.edR(this),v,w,!0,!0,x.H)},
aVy(){this.m(new A.edX(this))
this.aWz()},
av7(d,e,f){var w,v=null,u=this.x===d,t=u?D.aJ.j(0.25):D.c.j(0.07),s=C.m(14),r=u?D.aJ:D.b5
r=C.I(r,D.r,u?2:1)
w=C.W(f,u?D.aJ:D.ad,v,v,v,19)
return new C.C(E.tf,C.aE(v,C.p(v,C.A(C.a([w,D.bp,C.d(e,v,v,v,v,v,v,C.l(v,v,u?D.aJ:D.c,v,v,v,v,v,v,v,v,12.5,v,v,D.I,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),D.m,v,D.e,D.j,0,v,v),D.f,v,v,new C.o(t,v,r,s,v,v,D.n),v,v,v,v,D.h2,v,v,v),D.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new A.edO(this,u,d),v,v,v,v,v,v,!1,D.a8),v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.e
h===$&&C.c()
h=h.c
h===$&&C.c()
h=h.c
w=new C.a2(h,new A.ee1(j),C.T(h).k("a2<1>")).gM(0)
h=j.e.c
h===$&&C.c()
v=j.r
v===$&&C.c()
u=j.y
t=j.z
s=j.Q
r=u!==0?v.b.h(0,u):i
v=A.WO(j.f,new A.ee2(j),s,u,r,i,new A.ee3(),t,i,j.gc26(),j.gc27(),v,i,i)
t=x.p
r=C.a([],t)
if(j.x.length!==0&&j.b3x().length!==0){u=C.a([],t)
for(s=j.b3x(),q=s.length,p=0;p<s.length;s.length===q||(0,C.K)(s),++p){o={}
n=s[p]
o.a=null
o.a=n.a
m=new C.aV(12,12)
l=new C.az(D.b0,1,D.r,-1)
u.push(C.aE(i,C.p(i,new C.x("\ud83d\udccd "+n.b,i,D.o_,i,i,i,i,i,i,i,i,i),D.f,i,i,new C.o(D.fh.j(0.35),i,new C.bP(l,l,l,l),new C.bp(m,m,m,m),i,i,D.n),i,i,i,i,B.Xm,i,i,i),D.y,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new A.ee4(o,j),i,i,i,i,i,i,!1,D.a8))}r.push(new C.C(D.eO,C.c_(D.bD,u,D.bt,6,6),i))}u=j.e
if(u.b)u="Practice mode: no hints. Build it in the right order."
else if(u.gaiD())u="Everything is fitted. Tighten every joint, then turn the main water on to test."
else{u=j.e.c
u===$&&C.c()
u="Job: "+u.d}r.push(new C.bI(D.a3,i,i,C.d(u,i,2,D.a2,i,i,i,B.aNz,i,i,i),i))
r.push(D.P)
t=C.a([j.av7("hand","Hand",B.aku),j.av7("wrench","Wrench",D.qI)],t)
for(p=0;p<11;++p){k=B.bT7[p]
u=B.dek.h(0,k)
u.toString
t.push(j.av7(k,u,Y.ajT))}r.push(new C.a6(i,52,C.cB(t,i,i,i,i,D.aQ,!1),i))
return new A.AS("Plumbing job: "+h.b,D.aW,v,C.v(r,D.m,i,D.e,D.Q,0,D.p),new A.ee5(j,d),""+w+"/"+h.c.length+" fitted",i)},
bXu(d){return C.bV(E.nx,null,new A.edW(this),d,!0,!0,!0,D.lN,!1,!1,x.H)}}
A.yo.prototype={}
A.pF.prototype={}
A.WA.prototype={}
A.atE.prototype={}
A.aRZ.prototype={}
A.eC.prototype={
gj5(){return this.a}}
A.b3i.prototype={
cf4(d,e){var w,v,u,t,s=this,r=null,q="outlet",p="switch",o=new C.eT()
o.dH(s.a)
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
gali(){var w,v=C.aX(x.S),u=this.d
u===$&&C.c()
w=0
for(;w<4;++w)v.J(0,u[w].a)
return v},
cNL(d){var w,v,u=this.d
u===$&&C.c()
w=0
for(;w<4;++w){v=u[w]
if(v.a===d)return v}return null},
fK(d){++this.f
return new A.eC(!1,d,!1,"")},
aD1(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.d
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
h.z.v(0,h.gali())
for(g=h.Q,w=x.S,v=0;v<3;++v){q=B.nS[v]
u=C.aX(w)
s=C.aX(w)
p=new A.atE(u,s)
p.d=p.e=p.a=!0
for(o=h.ao9(q),n=o.length,m=0;m<o.length;o.length===n||(0,C.K)(o),++m)for(l=o[m]*10,k=0;k<6;++k)s.J(0,l+k)
for(s=h.gali(),o=C.a3(s),n=new C.nI(s,s.r,o.k("nI<1>")),n.c=s.e,o=o.c,s=q+48;n.C();){l=n.d
if(l==null)l=o.a(l)
t=A.kX(l)
if(!t.c){j=t.d.a
j=j>=q&&j<=s}else j=!1
if(j)u.J(0,l)}g.n(0,q,p)}for(g=h.as,v=0;v<2;++v){i=g[v]
i.a=!0
i.b=3
i.d=i.c=!0}},
cBX(){var w,v,u,t,s,r,q,p,o,n,m=this,l=m.d
l===$&&C.c()
w=0
for(;w<4;++w){v=l[w]
m.bcu(v.a,v.b)}for(u=x.S,t=x.N,s=m.at,w=0;w<4;++w){r=l[w].a
q=s.h(0,r)
if(q==null)continue
p=q.a
A:{if("outlet"===p){o=C.E([25,"ground",23,"white",21,"black"],u,t)
break A}if("gfci"===p){o=C.E([25,"ground",24,"white",22,"black"],u,t)
break A}if("switch"===p){o=C.E([25,"ground",21,"blackLine",22,"blackLoad"],u,t)
break A}o=C.E([53,"ground",52,"white",51,"black"],u,t)
break A}for(o=new C.LZ(o,o.r,o.e,C.a3(o).k("LZ<1,2>"));o.C();){n=o.d
m.baR(r,n.b,n.a)}m.beO(r)
m.b9J(r)}if(!m.ax)m.aGA()
for(w=0;w<4;++w){v=l[w]
u=v.b
if(u==="outlet"||u==="gfci"){u=v.a
m.bex(u,"lamp")
m.bg1(u)}}for(l=D.d.gag(l),u=new C.fG(l,new A.ckb());u.C();){t=l.gU(0).a
m.aDc(t)
m.aDc(t)}},
aIW(d){var w,v,u=A.kX(d).d.a,t=C.a([],x.t)
for(w=0;v=$.Gd(),w<v.length;++w){v=v[w]
if(v>u&&v<64)t.push(w)}return t},
cLF(d,e){var w,v,u=this,t=u.x
if(t.ah(0,d))return u.fK("There is already a box at "+A.kX(d).b+".")
w=A.kX(d)
v=w.c
if(!v&&e!=="wall")return u.fK("That is a ceiling box. On the wall you use a plain wall box (the blue one with ears).")
if(v&&e==="wall")return u.fK("A wall box cannot go in the ceiling. Use a round ceiling box.")
if(w.e==="fan"&&e!=="fan"){if(!u.b)return u.fK('A fan is heavy and it shakes. It needs a box that says "fan rated". A plain ceiling box can let the fan fall.')
t.n(0,d,e);++u.f
return B.aTt}t.n(0,d,e)
t=v?"ceiling joist":"side of the stud"
return new A.eC(!0,w.b+": box fixed to the "+t+".",!1,"")},
cGo(d){var w,v=this
if(d<0||d>=$.Gd().length)return B.aTn
w=v.y
if(w.t(0,d))return v.fK("That stud already has a hole.")
if(v.x.a===0)return v.fK("Mount the boxes first. Then you know where the cable has to go and which studs need a hole.")
w.J(0,d)
return B.aT7},
cOM(d){var w,v,u,t,s=this,r=A.kX(d)
if(!s.x.ah(0,d))return s.fK("There is no box at "+r.b+". Mount the box first, then pull the cable to it.")
w=s.z
if(w.t(0,d))return s.fK("The cable is already there.")
v=s.aIW(d)
u=C.T(v).k("a2<1>")
t=C.B(new C.a2(v,new A.cki(s),u),u.k("H.E"))
if(t.length!==0){w=D.o.V($.Gd()[D.d.gL(t)])
v=t.length
u=v===1?"it":"the studs"
return s.fK("The cable is stuck: the stud at "+w+" inches has no hole. Drill "+u+" first ("+v+" left on the way).")}w.J(0,d)
return new A.eC(!0,"Cable pulled from the panel to "+r.b+", through the studs and along the ceiling.",!1,"")},
gaGp(){return this.gali().d9(0,new A.ckj(this))},
anQ(d){var w,v,u,t
for(w=this.Q,w=new C.cJ(w,C.a3(w).k("cJ<1,2>")).gag(0);w.C();){v=w.d
u=v.b
if(u.a){t=v.a
t=d>=t&&d<=t+48}else t=!1
if(t)return u}return null},
cJ4(d){var w,v,u=this
if(!u.gaGp())return u.fK("Finish the rough-in first. The cable and the boxes must be in before the drywall hides the studs.")
if(!D.d.t(B.a24,d))return B.aSW
if(!D.d.t(B.nS,d))return u.fK("The edge of the sheet would land between two studs. The sheet needs a stud under every edge, so there is nothing to screw it to. Start at the left corner (a stud) and move one sheet width (48 inches) at a time.")
w=u.Q
v=w.h(0,d)
if((v==null?null:v.a)===!0)return u.fK("There is already a sheet there.")
v=w.h(0,d)
if(v==null){v=x.S
v=new A.atE(C.aX(v),C.aX(v))}v.a=!0
w.n(0,d,v)
return B.aT6},
ao9(d){var w,v,u,t=C.a([],x.t)
for(w=d+48,v=0;u=$.Gd(),v<u.length;++v){u=u[v]
if(u>=d&&u<=w)t.push(v)}return t},
cFj(d){var w,v,u=this,t=A.kX(d)
if(t.c)return u.fK("Ceiling fixtures do not need an opening in the wall.")
if(!u.x.ah(0,d))return u.fK("There is no box at "+t.b+".")
w=u.anQ(t.d.a)
if(w==null)return u.fK("There is no sheet over this box yet. Hang the sheet first, then cut the opening.")
v=w.b
if(v.t(0,d))return u.fK("The opening is already cut.")
v.J(0,d)
return B.aTg},
aIc(d,e,f){var w,v,u,t,s,r=this
if(f)return r.fK("Missed the stud! There is only air behind the sheet here. The screw would pull through the paper. Screw only where a stud is behind the sheet (every 16 inches).")
w=x.bS
v=C.B(new C.a2(B.nS,new A.ckk(r,d),w),w.k("H.E"))
if(v.length===0)return r.fK("There is no sheet here yet.")
u=d*10+e
if(D.d.d9(v,new A.ckl(r,u)))return r.fK("There is already a screw there.")
for(w=v.length,t=r.Q,s=0;s<v.length;v.length===w||(0,C.K)(v),++s)t.h(0,v[s]).c.J(0,u)
return B.aTi},
bjZ(d,e){return this.aIc(d,e,!1)},
blv(d){var w=this.Q.h(0,d)
if(w==null||!w.a)return!1
return D.d.d9(this.ao9(d),new A.ckn(w))},
gaAP(){return D.d.d9(B.nS,new A.cka(this))},
gaAO(){var w=this.gali()
return new C.a2(w,new A.ck8(),C.a3(w).k("a2<cl.E>")).d9(0,new A.ck9(this))},
cQC(d){var w,v=this
if(!v.gaAP())return v.fK("Hang all the sheets first.")
if(!D.d.d9(B.nS,v.ganR()))return v.fK("Finish screwing every sheet to the studs first. Tape goes on a solid wall.")
w=v.as[d]
if(w.a)return v.fK("This seam already has tape.")
w.c=w.a=!0
return B.aT_},
cLI(d){var w,v=this,u=v.as[d]
if(!u.a)return v.fK("Tape first. The mud goes over the tape.")
if(!u.c)return v.fK("The last coat is still wet. Let it dry before the next coat.")
w=u.b
if(w>=3)return v.fK("Three coats are enough. Now sand it.");++w
u.b=w
u.c=!1
return new A.eC(!0,"Coat "+w+" of joint compound spread. Let it dry.",!1,"")},
cKD(){var w,v=this.as
if(D.d.d9(v,new A.ckg()))return B.aTd
for(w=0;w<2;++w)v[w].c=!0
return B.aTr},
bjN(d){var w=this,v=w.as[d]
if(v.b<3)return w.fK("Put on all three coats of mud first. Sanding now would just rub off the tape.")
if(!v.c)return w.fK("The mud is still wet. Let it dry first.")
if(v.d)return w.fK("Already sanded.")
v.d=!0
return B.aSX},
cO_(d){var w=this,v=w.Q.h(0,d)
if(v==null||!v.a)return w.fK("There is no sheet there.")
if(!w.gaAO())return w.fK("Cut the openings for the boxes before you paint. Otherwise the paint covers the boxes.")
if(!D.d.d9(w.as,new A.ckh()))return w.fK("Sand the seams first. Paint shows every bump.")
if(v.e)return w.fK("This sheet is already painted.")
v.e=!0
return B.aSU},
gyg(){var w=this
return w.gaAP()&&D.d.d9(B.nS,w.ganR())&&w.gaAO()&&D.d.d9(w.as,new A.ckc())&&D.d.d9(B.nS,new A.ckd(w))},
Mz(){var w,v
for(w=this.at,w=new C.dt(w,w.r,w.e);w.C();){v=w.d.b
v.a=this.ax&&!this.ay}},
bWI(d,e){if(d.c)return e==="light"||e==="fan"?"":"A ceiling box holds a light or a fan, not an outlet or a switch."
return e==="outlet"||e==="gfci"||e==="switch"?"":"A light or a fan hangs from the ceiling. A wall box holds an outlet, a GFCI or a switch."},
bcu(d,e){var w,v,u,t,s,r=this,q=A.kX(d)
if(!r.gyg())return r.fK("Finish the drywall first. Devices go in after the walls are painted.")
w=r.x
if(!w.ah(0,d)||!r.z.t(0,d))return r.fK("There is no box with cable at "+q.b+".")
v=r.at
if(v.ah(0,d))return r.fK("There is already a device there. Pull it out first if you want to move it.")
u=r.bWI(q,e)
if(u.length!==0)return r.fK(u)
t=e==="switch"
if(!(t&&q.e==="low"))s=!t&&!q.c&&q.e==="switch"
else s=!0
if(s){if(!r.b)return r.fK(t?"A switch goes about 48 inches from the floor, where a hand falls naturally. This box is down at outlet height.":"Outlets go low, about 16 inches from the floor. This box is up at switch height.");++r.f
r.cy.push("Wrong height at "+q.b+".")}s=e==="fan"
if(s&&w.h(0,d)!=="fan")if(!r.b)return r.fK("This box is not fan rated. A fan on it can fall. Take the box out and put in a fan-rated one.")
w=new A.Xr(C.V(x.S,x.N))
w.r=r.b
w.a=r.ax&&!r.ay
v.n(0,d,new A.aRZ(e,w))
if(e==="light")w="Light fixture"
else if(s)w="Ceiling fan"
else if(e==="gfci")w="GFCI outlet"
else w=t?"Switch":"Outlet"
return new A.eC(!0,w+" is held up to "+q.b+". Turn the breaker OFF, then wire it.",!1,"")},
cPN(d){var w=this,v=w.at,u=v.h(0,d)
if(u==null)return B.aT3
if(w.ax&&!w.ay&&!u.b.w){if(w.b)return w.a0M()
return w.a10()}v.W(0,d)
w.CW.W(0,d)
w.cx.W(0,d)
w.ch.W(0,d)
return B.aTl},
a10(){++this.r;++this.f
return B.aTj},
a0M(){var w,v,u=this;++u.r;--u.e
u.ax=!1
u.Mz()
w=u.e
if(w<=0){u.w=!0
return B.aT2}v=w===1?"life":"lives"
return new A.eC(!1,"ZAP! You touched a live wire and got a shock. The breaker is now off. "+w+" "+v+" left. Always turn the breaker OFF and test the wires first.",!0,"shock")},
baR(d,e,f){var w,v,u,t=this,s=t.at.h(0,d)
if(s==null)return B.a8p
t.Mz()
w=A.Ac(s.a)
v=D.d.ix(w.f,new A.cke(f))
u=A.hgF(w,s.b,e,v,!0)
if(u==null){if(!t.b&&!v.c.t(0,e)){++t.f
return new A.eC(!0,v.b+": fastened. Careful: "+C.t(w.r.$2(e,v))+" It will burn or trip the breaker when the power comes on.",!0,"")}return new A.eC(!0,v.b+": wire fastened.",!1,"")}if(D.a.a0(u,"SHOCK"))return t.a0M()
if(D.a.a0(u,"STOP"))return t.a10();++t.f
return new A.eC(!1,u,!1,"")},
cR6(d,e){var w,v=this,u=v.at.h(0,d)
if(u==null)return B.U6
v.Mz()
w=u.b
if(w.a&&w.c===0){if(v.b)return v.a0M()
return v.a10()}w=w.b
w.bn(w,new A.cko(e))
return B.aTq},
beO(d){var w,v,u=this,t=u.at.h(0,d)
if(t==null)return B.a8p
w=A.Ac(t.a)
v=t.b
if(!A.bBK(w,v))return u.fK("Every wire must be fastened first.")
if(u.ax&&!u.ay){if(u.b)return u.a0M()
return u.a10()}v.c=1
return B.aTb},
cON(d){var w,v=this,u=v.at.h(0,d)
if(u==null)return B.U6
if(v.ax&&!v.ay){if(v.b)return v.a0M()
return v.a10()}w=u.b
w.c=0
w.d=!1
return B.aTh},
b9J(d){var w=this.at.h(0,d)
if(w==null||w.b.c!==1)return this.fK("Push the device into the box first.")
w.b.c=2
return B.aTk},
aH0(d){var w=this.at
return A.afd(A.Ac(w.h(0,d).a),w.h(0,d).b)},
aGA(){var w=this
if(w.ay){w.ax=w.ay=!1
w.Mz()
return B.aT9}w.ax=!w.ax
w.Mz()
if(!w.ax)return B.aT1
return w.c29()},
c29(){var w,v,u,t,s,r,q,p,o,n=this,m=C.a([],x.s)
for(w=n.at,v=new C.cJ(w,C.a3(w).k("cJ<1,2>")).gag(0),u=n.cx,t=!1,s=!1;v.C();){r=v.d
q=r.b.b
if(q.c===0)continue
p=r.a
o=A.afd(A.Ac(w.h(0,p).a),w.h(0,p).b)
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
return B.aTe},
aDc(d){var w,v,u,t,s,r,q=this,p=q.at,o=p.h(0,d)
if(o==null||o.a!=="switch"||o.b.c<2)return B.aTp
w=q.ch
if(w.t(0,d))w.W(0,d)
else w.J(0,d)
v=q.d
v===$&&C.c()
u=C.T(v).k("a2<1>")
t=C.B(new C.a2(v,new A.ckf(d),u),u.k("H.E"))
if(t.length===0)return B.aTa
s=D.d.gL(t)
v=s.a
r=q.al6(v)
if(w.t(0,d)&&r){p=p.h(0,v)
if(p!=null)p.c=!0
return new A.eC(!0,(s.b==="fan"?"The fan spins":"The light turns on")+". The switch works.",!1,"")}if(w.t(0,d)){p=s.b
return new A.eC(!1,(p==="fan"?"The fan":"The light")+" did not come on. Check the breaker and the wires on the switch and on the "+p+".",!1,"")}return B.aTo},
a2T(d){var w,v=this.at.h(0,d)
if(v!=null){w=v.b
w=w.c<2||w.w}else w=!0
if(w)return!1
return this.aH0(d).c},
al6(d){var w=this,v=w.cNL(d),u=v==null,t=u?null:v.c,s=!0
if(!u)if(t!=null)u=!(w.ax&&!w.ay)||!w.a2T(d)||!w.a2T(t)
else u=s
else u=s
if(u)return!1
return w.ch.t(0,t)},
bex(d,e){var w,v,u=this,t=u.at.h(0,d)
if(t!=null){w=t.a
w=w!=="outlet"&&w!=="gfci"||t.b.c<2}else w=!0
if(w)return u.fK("There is no finished outlet there to plug into.")
w=u.CW
if(w.ah(0,d))return u.fK("Something is already plugged in.")
w.n(0,d,e)
if(t.b.w)return B.aT4
if(u.ax&&!u.ay&&u.a2T(d)){t.c=!0
v=u.aH0(d)
w=v.a
if(w==="reversed"||w==="noGround")return new A.eC(!0,"It runs, but be careful: "+v.b,!0,"")
return new A.eC(!0,A.hA8(e)+" runs. The outlet works.",!1,"")}if(!(u.ax&&!u.ay))return B.aT8
return new A.eC(!1,"Nothing happens. "+u.aH0(d).b,!0,"")},
bg1(d){if(this.CW.W(0,d)==null)return B.U6
return B.aT0},
gaCt(){var w,v,u,t,s,r=this.d
r===$&&C.c()
w=this.at
v=0
for(;v<4;++v){u=r[v]
t=u.a
s=w.h(0,t)
if(s==null||s.a!==u.b||s.b.c<2)return!1
if(A.afd(A.Ac(w.h(0,t).a),w.h(0,t).b).a!=="ok")return!1
t=u.b
if(t==="outlet"||t==="gfci"){if(!s.c)return!1}else if(t!=="switch"&&!s.c)return!1}return!0}}
A.kT.prototype={}
A.UY.prototype={
T(){var w,v=new A.Ay(-0.12,0.4,205,B.a7s,$.aw())
v.f=300
w=new C.BA()
$.Cw()
w.iV(0)
return new A.aCN(v,w,C.V(x.S,x.i))}}
A.aCN.prototype={
gCg(d){var w=this.e
if(w===$){this.a.toString
w=D.o.F(Date.now(),1e5)
this.e=w}return w},
a_(){var w,v=this
v.a1()
w=v.a.d
if(w==null){w=v.gCg(0)
w=A.fOa(null,null,v.a.f,w)}v.d=w
if(v.a.d!=null&&w.gyg())v.y=2
if(v.a.e){v.d.aD1()
v.y=2}v.r=A.Ci(v.d,new A.vO(v.z,v.Q,!1))
w=v.f
w.r=0
w.w=1.1},
q(){var w=this.cy
if(w!=null)w.a9(0)
this.a2()},
A1(d,e){var w=this,v=w.cy
if(v!=null)v.a9(0)
w.m(new A.eil(w,d,e))
w.cy=C.cM(D.jm,new A.eim(w))},
ava(d){return this.A1(d,!1)},
ko(d){var w,v,u,t,s,r=this,q=d.a
if(q)A.y4()
else A.mV(180,220,0.25,"square")
w=d.d
if(w==="shock"){C.fK()
r.m(new A.ehA(r))
C.bN(D.mS,new A.ehB(r),x.P)}if(w==="burn"||w==="trip"){w=r.d
w===$&&C.c()
w=w.cx
w=C.ea(w,w.r,C.a3(w).c)
v=r.x
u=r.w
t=w.$ti.c
while(w.C()){s=w.d
if(s==null)s=t.a(s)
v.n(0,s,u.gu_()/1000+3.5)}C.fK()
A.mV(150,300,0.5,"noise")}w=r.d
w===$&&C.c()
r.r=A.Ci(w,new A.vO(r.z,r.Q,!1))
q=q&&!d.c
r.A1(d.b,q)
if(r.d.w&&r.c!=null)$.aT.x1$.push(new A.ehC(r))
if(r.d.gaCt()&&!r.cx){r.cx=!0
$.aT.x1$.push(new A.ehD(r))}},
b15(){var w=this.ch?3.141592653589793:-0.12
this.f.mz(205,0.4,B.a7s,w)},
aR5(){var w,v,u=this
u.ch=!1
w=u.f
w.anK(!1)
w.r=0
u.m(new A.ehL(u))
v=u.d
v===$&&C.c()
u.r=A.Ci(v,new A.vO(u.z,u.Q,!1))
w.mz(205,0.4,B.a7s,-0.12)},
bzl(){var w,v,u=this
u.ch=!0
w=u.f
w.anK(!0)
u.m(new A.ehE(u))
v=u.d
v===$&&C.c()
u.r=A.Ci(v,new A.vO(u.z,u.Q,!1))
w.mz(190,0.3,B.fui,3.141592653589793)},
Yt(d,e){var w,v,u,t=this,s=A.kX(e),r=t.f
r.anK(!1)
r.r=0
t.m(new A.ei2(t,e))
w=t.d
w===$&&C.c()
t.r=A.Ci(w,new A.vO(t.z,t.Q,!1))
v=A.a1E(s,B.ftD)
w=s.c
u=w?22:15
r.mz(u,w?-0.8:0.26,v,0.3)},
av8(){var w,v=this
v.m(new A.ehM(v))
w=v.d
w===$&&C.c()
v.r=A.Ci(w,new A.vO(v.z,v.Q,!1))
v.b15()},
c2e(d){var w,v,u,t,s,r,q=this
if(d===0){if(q.Q<0)q.m(new A.eih(q))
return}w=q.Q
if(w>=0)v=!(d>=5000&&d<5700)
else v=!1
if(v)return
if(d>=5000&&d<5700){v=d-5000
u=D.o.an(v,100)
if(w!==u){if(q.z==="tester")q.azy(u)
else{q.m(new A.eii(q))
q.Yt(0,u)}return}q.aZQ(u,D.o.F(v,100))
return}if(d>=1000&&d<1010)if(q.z==="drill"){w=q.d
w===$&&C.c()
q.ko(w.cGo(d-1000))
return}if(d>=2000&&d<2007){q.aZT(d-2000)
return}if(d>=3000&&d<3007){q.aZR(d-3000)
return}if(d>=6000&&d<6005){if(q.z==="sheet"){w=q.d
w===$&&C.c()
q.ko(w.cJ4(B.a24[d-6000]))}return}if(d>=6100&&d<6103){t=B.nS[d-6100]
if(q.z==="paint"){w=q.d
w===$&&C.c()
q.ko(w.cO_(t))
return}}if(d>=6200&&d<6202){s=d-6200
switch(q.z){case"tape":w=q.d
w===$&&C.c()
q.ko(w.cQC(s))
return
case"mud":w=q.d
w===$&&C.c()
q.ko(w.cLI(s))
return
case"sand":w=q.d
w===$&&C.c()
q.ko(w.bjN(s))
return}}if(d>=7000&&d<7100){if(q.z==="screw"){w=q.d
w===$&&C.c()
v=d-7000
q.ko(w.bjZ(D.o.an(v,10),D.o.F(v,10)))}return}if(d>=7500&&d<7600){if(q.z==="screw"){w=q.d
w===$&&C.c()
v=d-7500
q.ko(w.aIc(D.o.an(v,10),D.o.F(v,10),!0))}return}if(d===8000){w=q.d
w===$&&C.c()
q.ko(w.aGA())
return}if(d>=8100&&d<8107){u=d-8100
w=q.d
w===$&&C.c()
if(w.CW.h(0,u)==="tv"&&q.z!=="unplug"){w=q.c
w.toString
F.fHN(w,0,"tv",!0,D.uP,"Samsung Neo QLED 8K")
return}q.ko(q.d.bg1(u))
return}if(q.z==="look"){w=q.r
w===$&&C.c()
r=w.b.h(0,d)
if(r!=null){q.m(new A.eij(q,d))
q.A1(r.a+": "+r.b,!0)}}},
aZT(d){var w,v,u,t=this,s=t.d
s===$&&C.c()
if(s.at.ah(0,d)){s=t.z
s=s!=="tester"&&s!=="look"&&!D.d.t(B.GG,s)}else s=!1
if(s){t.m(new A.eif(t))
t.Yt(0,d)
return}s=t.z
switch(s){case"wall":case"ceiling":case"fanbox":w=t.d
t.ko(w.cLF(d,s==="fanbox"?"fan":s))
return
case"cable":t.ko(t.d.cOM(d))
return
case"knife":t.ko(t.d.cFj(d))
return
case"outlet":case"gfci":case"switch":case"light":case"fan":v=t.d.bcu(d,s)
t.ko(v)
if(v.a){t.d.at.h(0,d).b.f=!t.d.b
t.z=""
t.Yt(0,d)}return
case"tester":t.azy(d)
return}if(t.d.at.ah(0,d)){t.Yt(0,d)
return}s=t.r
s===$&&C.c()
u=s.b.h(0,2000+d)
if(u!=null){t.m(new A.eig(t,d))
t.A1(u.a+": "+u.b,!0)}},
azy(d){var w,v=this.d
v===$&&C.c()
w=v.ax&&!v.ay&&v.x.ah(0,d)&&this.d.z.t(0,d)
v=w?"The tester glows: this box is LIVE (120 volts). Turn the breaker OFF before you touch any wire.":"The tester stays dark: no power here. It is safe to work. (Test again after you turn the breaker off, every time.)"
this.A1(v,!w)
A.mV(w?1400:500,120,0.25,"tri")},
aZR(d){var w,v=this,u=v.d
u===$&&C.c()
w=u.at.h(0,d)
if(w==null)return
if(D.d.t(B.GG,v.z)){v.ko(v.d.bex(d,v.z))
return}u=v.z
if(u==="tester"){v.azy(d)
return}if(u==="flip"){if(w.a==="switch"&&w.b.c>=2)v.ko(v.d.aDc(d))
else v.ava("Only a finished switch can be flipped.")
return}v.m(new A.eie(v))
v.Yt(0,d)},
aZQ(d,e){var w,v,u,t,s,r,q,p=this,o=p.d
o===$&&C.c()
w=o.at.h(0,d)
if(w==null)return
o=w.a
v=A.Ac(o).f
u=C.T(v).k("a2<1>")
t=C.B(new C.a2(v,new A.eia(e),u),u.k("H.E"))
s=A.hgJ(o,e)
if(s!=null){o=w.b
o=o.b.iL(0,s)&&o.c===0}else o=!1
if(o){p.ko(p.d.cR6(d,s))
return}if(t.length!==0&&w.b.c===0){o=p.at
if(o.length===0){p.ava("Pick a wire below first, then tap "+D.d.gL(t).b+".")
p.m(new A.eib(p,d,e))
return}r=p.d.baR(d,o,e)
p.ko(r)
if(r.a)p.m(new A.eic(p))
return}o=p.r
o===$&&C.c()
q=o.b.h(0,5000+d*100+e)
if(q!=null){p.m(new A.eid(p,d,e))
p.A1(q.a+": "+q.b,!0)}},
c2f(){var w,v,u,t,s,r,q=this,p=C.a([],x.K)
for(w=0;w<7;++w){v=B.tI[w]
u=q.d
u===$&&C.c()
t=v.a
s=u.at.ah(0,t)
r=q.z
A:{u=!1
if("wall"===r){u=!v.c&&!q.d.x.ah(0,t)
break A}if("ceiling"===r||"fanbox"===r){u=v.c&&!q.d.x.ah(0,t)
break A}if("cable"===r){u=q.d.x.ah(0,t)&&!q.d.z.t(0,t)
break A}if("knife"===r){u=!v.c&&q.d.x.ah(0,t)
break A}if("outlet"===r||"gfci"===r||"switch"===r){u=!v.c&&q.d.x.ah(0,t)&&!s
break A}if("light"===r||"fan"===r){u=v.c&&q.d.x.ah(0,t)&&!s
break A}if("tv"===r||"lamp"===r||"toaster"===r||"hairdryer"===r){if(s)u=q.d.at.h(0,t).a==="outlet"||q.d.at.h(0,t).a==="gfci"
break A}if("tester"===r){u=q.d.x.ah(0,t)
break A}break A}if(u)p.push(new C.z(t,v.b))}return p},
crz(){var w,v,u,t,s,r,q,p=null,o=this.c2f()
if(o.length===0)return D.bH
w=C.a([],x.p)
for(v=o.length,u=0;u<o.length;o.length===v||(0,C.K)(o),++u){t={}
s=o[u]
t.a=null
t.a=s.a
r=new C.aV(12,12)
q=new C.az(D.b0,1,D.r,-1)
w.push(C.aE(p,C.p(p,new C.x("\ud83d\udccd "+s.b,p,D.o_,p,p,p,p,p,p,p,p,p),D.f,p,p,new C.o(D.fh.j(0.35),p,new C.bP(q,q,q,q),new C.bp(r,r,r,r),p,p,D.n),p,p,p,p,B.Xm,p,p,p),D.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new A.ein(t,this),p,p,p,p,p,p,!1,D.a8))}return new C.C(D.i6,C.c_(D.bD,w,D.bt,6,6),p)},
bLd(){var w=null,v=this.c
v.toString
C.c9(w,w,!1,w,new A.ehK(this),v,w,!0,!0,x.H)},
c2a(){var w=null,v=this.c
v.toString
C.c9(w,w,!0,w,new A.ehH(this),v,w,!0,!0,x.H)},
av9(d){this.m(new A.ehN(this,d))
this.aR5()},
aWB(){return this.av9(!1)},
c2c(){var w,v,u,t,s,r,q,p,o,n=this,m=n.d
m===$&&C.c()
if(m.w)return"The job is over."
switch(n.y){case 0:m=m.d
m===$&&C.c()
w=C.T(m).k("a2<1>")
v=C.B(new C.a2(m,new A.ehO(n),w),w.k("H.E"))
if(v.length!==0){u=D.d.gL(v)
t=A.kX(u.a)
m=u.b
if(m==="gfci")m="a GFCI"
if(t.c)w=t.e==="fan"?"fan box":"ceiling box"
else w="wall box"
return"Mount a box at "+t.b+" ("+m+" goes here): pick a "+w+", then tap the glowing spot."}m=n.d.d
m===$&&C.c()
w=C.T(m).k("a2<1>")
s=C.B(new C.a2(m,new A.ehP(n),w),w.k("H.E"))
if(s.length!==0){t=D.d.gL(s).a
m=n.d.aIW(t)
r=new C.a2(m,new A.ehQ(n),C.T(m).k("a2<1>")).gM(0)
return r>0?"The cable comes from the panel on the right. Pick the drill and tap each stud on the way to "+A.kX(t).b+" ("+r+" left).":"Pick the cable roll and tap "+A.kX(t).b+"."}return"Rough-in done! Open 2 Drywall."
case 1:if(!m.gaGp())return"Finish the rough-in first (tab 1). Drywall hides the wires."
if(!n.d.gaAP())return"Pick a drywall sheet and tap a stud edge to hang it. Three sheets cover the wall."
if(!n.d.gaAO())return"Pick the drywall saw and tap each box to cut its opening."
if(!D.d.d9(B.nS,n.d.ganR()))return"Pick the screw gun and put a screw in every glowing spot on the studs."
if(D.d.b8(n.d.as,new A.ehT()))return"Pick the tape and tap each seam between two sheets."
if(D.d.b8(n.d.as,new A.ehU()))return D.d.b8(n.d.as,new A.ehV())?'The mud is wet. Press "Let it dry", then the next coat.':"Pick the mud and tap each seam. It needs three coats, with drying in between."
if(D.d.b8(n.d.as,new A.ehW()))return D.d.b8(n.d.as,new A.ehX())?'Press "Let it dry", then sand.':"Pick the sander and tap each seam."
if(!n.d.gyg())return"Pick the roller and paint each sheet."
return"Drywall done! Open 3 Devices."
default:if(!m.gyg())return"Finish the drywall first (tab 2)."
m=n.d.d
m===$&&C.c()
w=C.T(m).k("a2<1>")
q=C.B(new C.a2(m,new A.ehY(n),w),w.k("H.E"))
if(q.length!==0){u=D.d.gL(q)
m=u.b
if(m==="gfci")m="GFCI"
return"Pick the "+m+" and tap "+A.kX(u.a).b+". ("+C.t(new A.ei0().$1(new C.J(q,new A.ehZ(),C.T(q).k("J<1,G>"))))+" still need a device.)"}m=n.d.d
m===$&&C.c()
w=C.T(m).k("a2<1>")
p=C.B(new C.a2(m,new A.ei_(n),w),w.k("H.E"))
if(p.length!==0)return"Tap "+A.kX(D.d.gL(p).a).b+" to work on it: breaker OFF, wires, push in, cover on."
m=n.d
if(!m.ax)return"Turn the breaker ON (tap the panel or the breaker button) and test."
m=m.d
m===$&&C.c()
w=C.T(m).k("a2<1>")
o=C.B(new C.a2(m,new A.ehR(n),w),w.k("H.E"))
if(o.length!==0)return"Pick the TV or the lamp and plug it into "+A.kX(D.d.gL(o).a).b+" to test it."
m=n.d.d
m===$&&C.c()
return"Flip the wall switch to test the "+(D.d.b8(m,new A.ehS())?"fan":"light")+"."}},
B(a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this,a2=null,a3=B.cZX[a1.y],a4=a1.Q
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
for(l=0;l<3;++l)m.push(new C.C(D.Lg,new C.x(l<a1.d.e?"\u2764\ufe0f":"\ud83d\udda4",a2,D.zb,a2,a2,a2,a2,a2,a2,a2,a2,a2),a2))
m.push(D.bp)
k=a1.d
if(k.ay)k=D.jJ
else{k=k.ax
k=k?D.es:D.ec}k=k.j(0.95)
j=C.m(16)
i=a1.d
h=i.ay
if(h)g=D.cw
else{g=i.ax
g=g?D.cr:D.bc}g=C.I(g,D.r,1.4)
if(h)i="TRIPPED: tap to reset"
else{i=i.ax
i=i?"Breaker ON":"Breaker OFF"}m.push(C.aE(a2,C.p(a2,C.d(i,a2,a2,a2,a2,a2,a2,B.eVM,a2,a2,a2),D.f,a2,a2,new C.o(k,a2,g,j,a2,a2,D.n),a2,a2,a2,a2,D.qD,a2,a2,a2),D.y,!1,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,new A.eiv(a1),a2,a2,a2,a2,a2,a2,!1,D.a8))
m=C.a([C.A(m,D.m,a2,D.e,D.Q,0,a2,a2)],n)
k=a1.ch
j=k?"In front":"Behind the wall"
i=k?G.ajq:G.ajp
k=C.a([A.Q7(j,D.by,i,k,k?a1.gbMH():a1.gbzk()),D.ao],n)
if(!a4){j=v.b
D.d.v(k,C.a([A.Q7("Labels",D.aW,M.MS,j.f,new A.eiw(a1,v)),D.ao,A.Q7("Hints",D.aJ,D.qN,j.e,new A.eix(a1,v)),D.P],n))}s=A.WO(a1.f,new A.eiF(a1),p,r,o,a2,a2,q,a2,new A.eiG(a1),a1.gc2d(),s,m,k)
r=C.a([],n)
if(a4){a4=C.a([],n)
for(l=0;l<3;++l){q=l<2?6:0
p=a1.y===l?D.aJ.j(0.2):D.dq
o=new C.aV(12,12)
f=new C.az(a1.y===l?D.aJ:D.bF,1,D.r,-1)
if(l===0)m=a1.d.gaGp()
else{m=a1.d
m=l===1?m.gyg():m.gaCt()}m=m?"\u2705 ":""
k=B.d7i[l]
j=a1.y===l?D.aJ:D.ad
a4.push(new C.bE(1,D.bi,C.aE(a2,C.p(a2,new C.cq(D.A,a2,a2,new C.x(m+k,a2,new C.F(!0,j,a2,a2,a2,a2,12,D.u,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2),a2,a2,a2,a2,a2,a2,a2,a2,a2),a2),D.f,a2,a2,new C.o(p,a2,new C.bP(f,f,f,f),new C.bp(o,o,o,o),a2,a2,D.n),a2,a2,a2,new C.Q(0,0,q,0),A0.Lj,a2,a2,a2),D.y,!1,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,new A.eiH(a1,l),a2,a2,a2,a2,a2,a2,!1,D.a8),a2))}a4=C.a([C.A(a4,D.m,a2,D.e,D.j,0,a2,a2),D.ao],n)
if(!a1.d.b){q=D.aW.j(0.1)
p=C.m(10)
o=C.I(D.aW.j(0.4),D.r,1)
a4.push(C.p(a2,C.d("\ud83d\udc49 "+a1.c2c(),a2,2,D.a2,a2,a2,a2,B.eXe,a2,a2,a2),D.f,a2,a2,new C.o(q,a2,o,p,a2,a2,D.n),a2,a2,a2,a2,D.cj,a2,a2,1/0))}else a4.push(B.fdM)
a4.push(D.ao)
q=C.a([],n)
if(a1.y<2&&!a1.d.gyg())q.push(new C.C(E.tf,C.aE(a2,C.p(a2,B.b25,D.f,a2,a2,new C.o(D.dS,a2,a2,C.m(14),a2,a2,D.n),a2,a2,a2,a2,D.h2,a2,a2,a2),D.y,!1,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,new A.eiI(a1),a2,a2,a2,a2,a2,a2,!1,D.a8),a2))
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
q.push(new C.C(E.tf,C.aE(a2,C.p(a2,new C.co(D.aQ,D.e,D.j,D.m,a2,D.p,a2,0,C.a([j,D.bp,new C.x(d.b,a2,new C.F(!0,o,a2,a2,a2,a2,12.5,D.I,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2),a2,a2,a2,a2,a2,a2,a2,a2,a2)],n),a2),D.f,a2,a2,new C.o(m,a2,new C.bP(f,f,f,f),new C.bp(k,k,k,k),a2,a2,D.n),a2,a2,a2,a2,D.h2,a2,a2,a2),D.y,!1,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,new A.eiJ(a1,d),a2,a2,a2,a2,a2,a2,!1,D.a8),a2))}if(a1.y===1)q.push(new C.C(E.tf,C.aE(a2,C.p(a2,B.b1Y,D.f,a2,a2,new C.o(D.ec,a2,a2,C.m(14),a2,a2,D.n),a2,a2,a2,a2,D.h2,a2,a2,a2),D.y,!1,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,new A.eiK(a1),a2,a2,a2,a2,a2,a2,!1,D.a8),a2))
a4.push(new C.a6(a2,52,C.cB(q,a2,a2,a2,a2,D.aQ,!1),a2))
if(a1.z.length!==0)a4.push(a1.crz())
D.d.v(r,a4)}else{a4=C.a([],n)
q=v.b
if(q.c===0)for(p=D.d.gag(u.e),o=new C.fG(p,new A.eiL(v)),m=q.b;o.C();){k=p.gU(0)
j=k.c
i=new C.aV(14,14)
h=a1.at
g=k.a
h=h===g
a0=h?D.b0:D.b5
f=new C.az(a0,h?3:1,D.r,-1)
a0=C.a([],n)
if(m.iL(0,g))a0.push(new C.C(D.Lh,C.W(D.ee,k.d,a2,a2,a2,17),a2))
h=k.b
g=k.d
a0.push(new C.x(h,a2,new C.F(!0,g,a2,a2,a2,a2,12.5,D.u,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2),a2,a2,a2,a2,a2,a2,a2,a2,a2))
a4.push(C.aE(a2,C.p(a2,new C.co(D.aQ,D.e,D.Q,D.m,a2,D.p,a2,0,a0,a2),D.f,a2,a2,new C.o(j,a2,new C.bP(f,f,f,f),new C.bp(i,i,i,i),a2,a2,D.n),a2,a2,a2,a2,D.x9,a2,a2,a2),D.y,!1,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,new A.eiM(a1,v,k),a2,a2,a2,a2,a2,a2,!1,D.a8))}a4=C.a([C.c_(D.bD,a4,D.bt,6,8)],n)
if(q.c===0&&a1.at.length!==0){p=C.a([],n)
for(o=D.d.gag(u.f),m=new C.fG(o,new A.eiy(v));m.C();){k=o.gU(0)
j=D.fh.j(0.35)
i=new C.aV(12,12)
f=new C.az(D.b0,1,D.r,-1)
p.push(C.aE(a2,C.p(a2,new C.x("\u279c "+k.b,a2,D.o_,a2,a2,a2,a2,a2,a2,a2,a2,a2),D.f,a2,a2,new C.o(j,a2,new C.bP(f,f,f,f),new C.bp(i,i,i,i),a2,a2,D.n),a2,a2,a2,a2,B.Xm,a2,a2,a2),D.y,!1,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,new A.eiz(a1,k),a2,a2,a2,a2,a2,a2,!1,D.a8))}a4.push(new C.C(D.kc,C.c_(D.bD,p,D.bt,6,6),a2))}a4.push(D.P)
p=C.a([A.y3("Back to the room",D.ps,a1.gc2b(),D.ad),D.ab],n)
if(q.c===0){u.toString
o=A.bBK(u,q)?"Push it into the box":"Fasten every wire"
p.push(A.y3(o,B.akA,A.bBK(u,q)?new A.eiA(a1):a2,D.aJ))}if(q.c===1)D.d.v(p,C.a([A.y3("Pull it out",D.qQ,new A.eiB(a1),D.ad),D.ab,A.y3("Cover on",L.vb,new A.eiC(a1),D.aJ)],n))
if(q.c>=2){q=q.w
o=q?"Take out the burnt one":"Pull it out again"
q=q?D.cr:D.ad
p.push(A.y3(o,B.bzk,new A.eiD(a1),q))}a4.push(C.A(p,D.m,a2,D.e,D.j,0,a2,a2))
D.d.v(r,a4)}a4=C.a([new A.AS(t+" job",D.aJ,s,C.v(r,D.m,a2,D.e,D.Q,0,D.p),new A.eiE(a1,a5),"Phase "+(w+1)+"/3",a2)],n)
if(a1.CW)a4.push(C.bZ(0,C.e3(C.p(a2,a2,D.f,B.adW,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2),!0,a2),0,0,0))
return new C.an(D.W,a2,D.aa,D.q,a4,a2)},
clo(d){var w=this.d
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
break A}this.A1(w,!0)},
caO(d){return C.bV(E.nx,null,new A.ei9(this),d,!0,!0,!0,D.lN,!1,!1,x.H)}}
A.vO.prototype={}
A.qP.prototype={
a4(){return"FaultKind."+this.b}}
A.tZ.prototype={}
A.Ln.prototype={}
A.cns.prototype={
bvm(d,e,f){var w,v,u,t,s,r,q,p=this,o=new C.eT()
o.dH(p.a)
w=C.B(B.cYz,x.F)
D.d.fo(w,o)
v=C.aX(x.S)
u=C.a([],x.c)
for(t=w.length,s=0;s<w.length;w.length===t||(0,C.K)(w),++s){r=w[s]
q=B.vz.h(0,r).e
if(v.t(0,q))continue
v.J(0,q)
u.push(new A.Ln(r,o.aB(3)))
if(u.length>=d)break}p.c!==$&&C.aO()
p.c=u
p.avb()},
po(d,e){var w=this.c
w===$&&C.c()
return D.d.b8(w,new A.cnx(e))},
avb(){var w,v,u,t,s=this,r=s.d,q=r.d
q.a8(0)
if(s.po(0,B.YI))q.J(0,72)
if(s.po(0,B.YJ))q.J(0,75)
q=s.po(0,B.LX)
r.b=q
r.c=!q
r.w=s.po(0,B.LY)
r.x=s.po(0,B.YN)
r.y=s.po(0,B.YO)
r.z=s.po(0,B.YM)
r.Q=s.po(0,B.YP)
r.as=s.po(0,B.YQ)
r.at=s.po(0,B.YL)
q=r.f
q.a8(0)
r=r.r
r.a8(0)
w=s.c
w===$&&C.c()
w=D.d.gag(w)
v=new C.fG(w,new A.cnt())
while(v.C()){u=w.gU(0)
t=u.c
u=u.b
if(t)r.J(0,u)
else q.J(0,u)}},
gcAf(){var w=this.c
w===$&&C.c()
return D.d.d9(w,new A.cnv())},
gcHr(){var w=this.c
w===$&&C.c()
return new C.a2(w,new A.cnw(),C.T(w).k("a2<1>")).gM(0)},
cH4(d){var w,v,u,t,s,r,q,p=this.c
p===$&&C.c()
w=p.length
v=d===86
u=d===92
t=0
for(;t<p.length;p.length===w||(0,C.K)(p),++t){s=p[t]
r=s.a
q=!0
if(B.vz.h(0,r).e!==d)if(!(r===B.LX&&v))r=r===B.LY&&u
else r=q
else r=q
if(r)return s}return null},
aWC(d){++this.f
return new A.eC(!1,d,!1,"")},
c2g(){var w,v,u,t,s=this;++s.r;--s.e
for(w=s.d,v=w.d,w=w.e,u=0;u<4;++u){t=B.asT[u]
if(!v.t(0,t))w.J(0,t)}w=s.e
if(w<=0){s.w=!0
return B.aSZ}v=w===1?"life":"lives"
return new A.eC(!1,"ZAP! You touched a live wire and got a shock. All the breakers were knocked off. "+w+" "+v+" left. Turn the breaker OFF first.",!0,"shock")},
cRm(d,e){var w,v,u,t,s=this
if(s.w)return B.aSV
if(D.d.t(B.asT,e))return s.bzP(d,e)
w=s.cH4(e)
if(d==="inspect"){if(w==null||w.c)return B.aSY
return new A.eC(!0,"You look and test: "+B.vz.h(0,w.a).b,!1,"")}if(w==null||w.c)return new A.eC(!1,s.b?"Nothing needs fixing there.":"There is nothing wrong with this, so the "+C.t(B.Qe.h(0,d))+' is not needed. Use "Look and test" on things to find the problem.',!1,"")
v=B.vz.h(0,w.a)
if(d!==v.c){++s.f
return new A.eC(!1,s.b?"That is not the right tool for this problem.":"The "+C.t(B.Qe.h(0,d))+" does not fix this. "+v.b,!1,"")}u=v.f
if(u!==0){t=s.d
u=!t.d.t(0,u)&&!t.e.t(0,u)}else u=!1
if(u){if(s.b)return s.c2g()
return s.aWC("STOP! "+v.r+" The wires here are live (120 volts). Tap the breaker in the panel (with your hand) to switch it off.")}w.c=!0
s.avb()
return new A.eC(!0,v.d,!1,"")},
bzP(d,e){var w,v,u,t,s=this
if(d==="inspect"){w=s.d
if(w.d.t(0,e))w="This breaker has tripped: it sits in the middle (orange)."
else w=w.e.t(0,e)?"This breaker is switched OFF.":"This breaker is ON."
return new A.eC(!0,w,!1,"")}if(d!=="hand")return s.aWC(s.b?"Use your hand on a breaker.":"A breaker is switched with your hand, not with a "+C.t(B.Qe.h(0,d))+".")
w=s.d
v=w.d
if(v.t(0,e)){w=s.c
w===$&&C.c()
u=C.T(w).k("a2<1>")
t=C.B(new C.a2(w,new A.cnu(e),u),u.k("H.E"))
if(t.length!==0){D.d.gL(t).c=!0
s.avb()
return new A.eC(!0,B.vz.h(0,D.d.gL(t).a).d,!1,"")}v.W(0,e)
return B.aTs}w=w.e
if(w.t(0,e)){w.W(0,e)
return B.aTm}w.J(0,e)
return B.aTc}}
A.apK.prototype={
T(){var w,v=new A.Ay(-0.3,0.48,46,B.Tg,$.aw())
v.f=80
w=new C.BA()
$.Cw()
w.iV(0)
return new A.aCR(v,w)}}
A.aCR.prototype={
gK(){var w=this.d
w===$&&C.c()
return w},
gCg(d){var w=this.e
if(w===$){this.a.toString
w=D.o.F(Date.now(),1e5)
this.e=w}return w},
a_(){var w,v=this
v.a1()
w=v.gCg(0)
w=A.h4k(v.a.d,w)
v.d=w
v.r=A.af1(w.d)},
q(){var w=this.ax
if(w!=null)w.a9(0)
this.a2()},
c2l(d,e){var w=this,v=w.ax
if(v!=null)v.a9(0)
w.m(new A.ek8(w,d,e))
w.ax=C.cM(D.jm,new A.ek9(w))},
aWD(){this.f.mz(46,0.48,B.Tg,-0.3)
this.m(new A.ejY(this))},
c2k(d){var w,v,u=this
if(d===0)return
w=u.d
w===$&&C.c()
v=w.cRm(u.x,d)
w=v.a
if(w)A.y4()
else A.mV(180,220,0.25,"square")
if(v.d==="shock"){C.fK()
u.m(new A.ek2(u))
C.bN(D.mS,new A.ek3(u),x.P)}u.m(new A.ek4(u,d))
w=w&&!v.c
u.c2l(v.b,w)
w=u.d
if(w.w)$.aT.x1$.push(new A.ek5(u))
else if(w.gcAf()&&!u.at){u.at=!0
$.aT.x1$.push(new A.ek6(u))}},
caV(){var w=null,v=this.c
v.toString
C.c9(w,w,!1,w,new A.ek0(this),v,w,!0,!0,x.H)},
c2h(){var w=null,v=this.c
v.toString
C.c9(w,w,!0,w,new A.ejX(this),v,w,!0,!0,x.H)},
auz(){this.m(new A.ejZ(this))
this.aWD()},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.d
g===$&&C.c()
g=g.gcHr()
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
for(o=0;o<3;++o)p.push(new C.C(D.Lg,new C.x(o<i.d.e?"\u2764\ufe0f":"\ud83d\udda4",h,D.zb,h,h,h,h,h,h,h,h,h),h))
v=A.WO(i.f,new A.ekg(i),s,u,r,h,new A.ekh(),t,h,i.gc2i(),i.gc2j(),v,C.a([C.A(p,D.m,h,D.e,D.Q,0,h,h)],q),h)
u=i.d.c
u===$&&C.c()
t=C.T(u)
t=new C.cQ(new C.a2(u,new A.eki(),t.k("a2<1>")),new A.ekj(),t.k("cQ<1,n>")).aH(0,"  \xb7  ")
u=C.d("Customer: "+(t.length===0?"All fixed!":t),h,2,D.a2,h,h,h,B.aNz,h,h,h)
t=C.a([],q)
for(n=0;n<10;++n){m=B.db7[n]
s=i.x===m?D.aJ.j(0.25):D.c.j(0.07)
r=new C.aV(14,14)
p=i.x===m
l=p?D.aJ:D.b5
k=new C.az(l,p?2:1,D.r,-1)
l=B.dgP.h(0,m)
p=C.W(l,i.x===m?D.aJ:D.ad,h,h,h,19)
l=B.Qe.h(0,m)
l.toString
j=i.x===m?D.aJ:D.c
t.push(new C.C(E.tf,C.aE(h,C.p(h,new C.co(D.aQ,D.e,D.j,D.m,h,D.p,h,0,C.a([p,D.bp,new C.x(l,h,new C.F(!0,j,h,h,h,h,12.5,D.I,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h),h,h,h,h,h,h,h,h,h)],q),h),D.f,h,h,new C.o(s,h,new C.bP(k,k,k,k),new C.bp(r,r,r,r),h,h,D.n),h,h,h,h,D.h2,h,h,h),D.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new A.ekk(i,m),h,h,h,h,h,h,!1,D.a8),h))}g=C.a([new A.AS("Service call",D.aW,v,C.v(C.a([new C.bI(D.a3,h,h,u,h),D.P,new C.a6(h,52,C.cB(t,h,h,h,h,D.aQ,!1),h)],q),D.m,h,D.e,D.Q,0,D.p),new A.ekl(i,d),""+g+"/"+w+" fixed",h)],q)
if(i.as)g.push(C.bZ(0,C.e3(C.p(h,h,D.f,B.adW,h,h,h,h,h,h,h,h,h,h),!0,h),0,0,0))
return new C.an(D.W,h,D.aa,D.q,g,h)},
cv2(d){return C.bV(E.nx,null,new A.eke(this),d,!0,!0,!0,D.lN,!1,!1,x.H)},
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
$1$target(d){return this.gK().$1$target(d)},
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
A.ceN.prototype={}
A.P_.prototype={}
A.bOQ.prototype={
buL(d,e){var w,v,u,t,s,r,q,p,o=this,n=C.a([],x.A)
for(w=o.a,v=0;v<11;++v){u=B.cS_[v]
t=w.d
t===$&&C.c()
n.push(t[u])}w=n.length
s=Math.max(3,o.b/w)
for(t=o.c,r=0,v=0;v<n.length;n.length===w||(0,C.K)(n),++v,r=p){q=n[v]
p=r+s
t.push(new C.cK([q,o.bX7(q),r,p]))}o.d!==$&&C.aO()
o.d=r},
bX7(d){var w=d.grL(0),v=d.gtV(0)
switch(d.c){case"living":return B.fGD
case"kitchen":return new A.P_(C.a([B.epF,new C.z(-w/2+24,40),new C.z(0,v*0.62)],x.f),!1,1,"Getting a drink from the fridge",1)
case"hall":return new A.P_(C.a([B.epK,B.e8o,B.ecV],x.f),!1,-1,"Walking down the hall",1)
case"bathroom":return new A.P_(C.a([B.aK7,B.e9Q,new C.z(0,v*0.6)],x.f),!0,-1,"Washing hands at the sink",1)
default:return new A.P_(C.a([B.aK7,new C.z(0,v*0.66),new C.z(-w/2+14,76)],x.f),!0,-1,"Watching TV in the bedroom",2)}},
aB0(d){var w,v,u,t,s,r,q,p,o=this,n=o.d
n===$&&C.c()
w=D.k.D(d,0,n-0.001)
for(n=o.c,v=n.length,u=0;u<v;++u){t=n[u].a
s=t[0]
r=t[1]
q=t[2]
p=t[3]
if(w>=q&&w<p)return o.b_b(s,r,(w-q)/(p-q))}n=D.d.gam(n).a
return o.b_b(n[0],n[1],1)},
b_b(a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=a1.a,d=C.a([],x.n)
for(w=0,v=1;v<3;++v){u=v-1
t=Math.sqrt(Math.pow(e[v].a-e[u].a,2)+Math.pow(e[v].b-e[u].b,2))
d.push(t)
w+=t}s=D.k.D(a2/0.82,0,1)*w
u=d.length-1
r=0
q=0
for(;;){if(!(q<u&&r+d[q]<s))break
r+=d[q];++q}u=d[q]
p=u===0?0:D.k.D((s-r)/u,0,1)
o=e[q]
n=e[q+1]
u=o.a
m=n.a-u
l=o.b
k=n.b-l
j=a2<0.82
if(j)i=Math.atan2(m,k)
else i=a1.b?3.141592653589793:0
h=q+(p>0.99?1:0)
g=a1.c
f=g>=0&&h>=g
g=h>=a1.e?a1.d:"Walking in"
return new A.ceN(a0.a,u+m*p,l+k*p,i,j,f,g)}}
var z=a.updateTypes(["~()","R(n9)","R(pF)","L(L)","~(G)","R(WA)","ak<tc>(O)","R(Ln)","R(S6)","R(mc)","ay<~>()","R(zI)","n(n,mc)","R(ps)","L(G)","n(n9)","GN(Y)","R(El)","R(u7)","R(L)","R(yo)","u7()","ps(O)","UY(Y)","UV(Y)","R(vu)","G(J8,J8)","a5J(Y)","O(ps)","~(L,O,O,w,O)","~(L,L,G{alongX:R})","~(ak<L>,w)","L(G,G)","~(ak<L>{col:w})","~(G,L,w{h:O,w:O})","~(G,ak<L>)","n(Ln)","~(G,n,L,L,L,R)","R(VV)","~(L,L,L,L)","~(G,L,L,n,w)","ak<L>(ak<L>)","~(G{keepTour:R})","~(n,L,L)","~(n9,L,n)","~(n,L,L,G)","L(n)","~(ak<L>)","R(G)","R(a3n)","n(zI)","G(pF)","~(G,L,L{col:w,round:R})","da()","~(n,ak<L>{r:O})","~(G,ak<L>,w,O,n)"])
A.bUB.prototype={
$1(d){var w=this.a
w=w===0?d:A.bBl(d,w)
return w.af(0,this.b)},
$S:z+3}
A.bUC.prototype={
$1(d){var w=this.a
return w===0?d:A.bBl(d,w)},
$S:z+3}
A.bUA.prototype={
$4(b5,b6,b7,b8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=this
for(w=b4.b,v=b7.a,u=b7.b,t=b7.c,s=b6.a,r=b6.b,q=b6.c,p=b8.a,o=b8.b,n=b8.c,m=1/w,l=v*m,k=u*m,j=t*m,i=p*m,h=o*m,m=n*m,g=b4.a,f=g.a,e=b4.c,d=x.o,a0=b4.d,a1=b4.e,a2=b4.f,a3=0;a3<w;++a3)for(a4=a3/w,a5=s+v*a4,a6=r+u*a4,a4=q+t*a4,a7=0;a7<w;++a7){a8=a7/w
a9=a5+p*a8
b0=a6+o*a8
a8=a4+n*a8
b1=a9+l
b2=b0+k
b3=a8+j
f.push(new A.tc(C.a([e.$1(new A.L(a9,b0,a8)),e.$1(new A.L(b1,b2,b3)),e.$1(new A.L(b1+i,b2+h,b3+m)),e.$1(new A.L(a9+i,b0+h,a8+m))],d),a0.$1(b5),a1,g.b,a2,g.d,!1,g.c,g.e))}},
$S:z+39}
A.bUD.prototype={
$1(d){var w=d*2*3.141592653589793/this.b
return this.a.aK(0,Math.cos(w)).af(0,this.c.aK(0,Math.sin(w)))},
$S:z+14}
A.bUz.prototype={
$2(d,e){var w=3.141592653589793*d/this.a,v=6.283185307179586*e/this.b
return new A.L(Math.sin(w)*Math.cos(v),Math.cos(w),Math.sin(w)*Math.sin(v))},
$S:z+32}
A.bUE.prototype={
$1(d){var w=d*2*3.141592653589793/this.b
return this.a.aK(0,Math.cos(w)).af(0,this.c.aK(0,Math.sin(w)))},
$S:z+14}
A.fIv.prototype={
$1(d){var w=d.b,v=this.a,u=d.c,t=this.b
return new A.L(d.a,w*v-u*t,w*t+u*v)},
$S:z+3}
A.fIt.prototype={
$1(d){var w=this.a
return w===0?d:A.bBl(d,w)},
$S:z+3}
A.fIu.prototype={
$1(d){var w=this,v=w.b===0?d:w.c.$1(d)
return J.fJp(w.a.$1(v),w.d)},
$S:z+3}
A.fIs.prototype={
$1(d){var w=this.b===0?d:this.c.$1(d)
return this.a.$1(w)},
$S:z+3}
A.fIm.prototype={
$4(d,e,f,g){var w=-d
return 0.5*(2*e+(w+f)*this.a+(2*d-5*e+4*f-g)*this.b+(w+3*e-3*f+g)*this.c)},
$S:1783}
A.cl1.prototype={
$1(d){var w=this,v=d.a,u=w.a,t=d.c,s=w.b,r=-v*s+t*u,q=d.b,p=w.c,o=w.d
return new A.L(v*u+t*s,q*p-r*o,-(q*o+r*p))},
$S:z+3}
A.cl2.prototype={
$1(d){var w=this.a.c,v=this.b.$1(d.aC(0,w.d))
return new A.L(v.a,v.b,v.c+w.c)},
$S:z+3}
A.ckZ.prototype={
$1(d){return d.c<1},
$S:z+19}
A.cl_.prototype={
$1(d){return A.hHP(d,this.b,this.c,this.a.gaGv(0))},
$S:1784}
A.cl0.prototype={
$2(d,e){return D.k.aL(e.d,d.d)},
$S:z+26}
A.eQp.prototype={
$1(d){var w=this.a,v=w.r,u=d.a
w.r=d
w.a.d.aGt(D.k.D((u-v.a)/1e6,0,0.1))
w.f.sp(0,u/1e6)},
$S:8}
A.eQo.prototype={
$1(d){if(x.C.b(d))this.a.a.d.an6(1+d.grS().b*0.0012)},
$S:251}
A.eQl.prototype={
$1(d){var w=this.a
return w.w=w.a.d.c},
$S:261}
A.eQm.prototype={
$1(d){var w,v,u,t=this.a,s=t.a
if(d.w>=2){s=s.d
s.an6(t.w/d.d/s.c)}else{t=s.d
s=d.a
t.as=t.Q=null
w=t.a+=-s.a*0.009
if(!t.x){v=t.r
u=t.w
t.a=D.k.D(w,v-u,v+u)}t.b=D.k.D(t.b+s.b*0.009,-1.25,1.35)
t.aZ()}},
$S:212}
A.eQn.prototype={
$1(d){var w=this.a
w=w.a.f.$1(w.e.cOg(d.b))
return w},
$S:50}
A.fmt.prototype={
$2(d,e){var w
A:{if("black"===d){w=e.a===25?"The black wire carries the power (hot). It never goes on the green ground screw. Hot goes to a BRASS screw.":"The black (hot) wire goes on a BRASS screw, not on the silver one. Silver is for white (neutral)."
break A}if("white"===d){w=e.a===25?"The white wire is the neutral. The green screw is only for the ground wire. Neutral goes to a SILVER screw.":"The white (neutral) wire goes on a SILVER screw, not on brass. Brass is for the black (hot) wire."
break A}w="The bare copper ground wire only goes on the GREEN screw. It keeps you safe if something goes wrong."
break A}return w},
$S:z+12}
A.fmu.prototype={
$2(d,e){return d==="ground"?y.j:"A black (hot) wire never goes on the green ground screw. The two black wires go on the two BRASS screws."},
$S:z+12}
A.fmv.prototype={
$2(d,e){var w
if(e.e)w="Those are the LOAD screws. They are covered with tape because power must come in on the LINE side. If you wire the LOAD side the GFCI will not protect you."
else A:{if("black"===d){w="The black (hot) wire goes on the BRASS LINE screw."
break A}if("white"===d){w="The white (neutral) wire goes on the SILVER LINE screw."
break A}w=y.j
break A}return w},
$S:z+12}
A.fmw.prototype={
$2(d,e){var w
A:{if("black"===d){w="The black (hot) wire joins the fixture BLACK wire. Not the white one, and never the green ground."
break A}if("white"===d){w="The white (neutral) wire joins the fixture WHITE wire. Not the black one, and never the green ground."
break A}w="The bare copper ground wire joins the fixture GREEN ground wire only."
break A}return w},
$S:z+12}
A.fmx.prototype={
$2(d,e){var w
A:{if("black"===d){w="The black (hot) wire joins the fan BLACK wire. Not the white one, and never the green ground."
break A}if("white"===d){w="The white (neutral) wire joins the fan WHITE wire. Not the black one, and never the green ground."
break A}w="The bare copper ground wire joins the fan GREEN ground wire only."
break A}return w},
$S:z+12}
A.flo.prototype={
$1(d){return d.a===this.a},
$S:z+49}
A.fIK.prototype={
$1(d){return d.a},
$S:z+50}
A.flu.prototype={
$1(d){return D.d.ix(this.a.f,new A.flv(d)).f},
$S:76}
A.flv.prototype={
$1(d){return d.a===this.a},
$S:z+9}
A.fls.prototype={
$1(d){return D.d.ix(this.a.e,new A.flt(d)).e},
$S:13}
A.flt.prototype={
$1(d){return d.a===this.a},
$S:z+11}
A.flq.prototype={
$1(d){return d.e==="hot"},
$S:z+11}
A.flr.prototype={
$1(d){return d.e==="neutral"},
$S:z+11}
A.fjv.prototype={
$5(d,e,f,g,h){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=j.a
i.b=d
w=j.b
v=w.b
u=C.a3(v).k("cJ<1,2>")
t=u.k("a2<H.E>")
s=C.B(new C.a2(new C.cJ(v,u),new A.fjw(g),t),t.k("H.E"))
r=g==="ground"
q=r?B.wS:h
p=r?0.6:0.3
if(w.c>0){o=e.af(0,B.fz0)
i.jM(A.agr(C.a([e,e.af(0,B.fxI),o],x.o),4),0.085,q,!1,p,8)
return}if(s.length!==0){n=A.bzs(j.c,D.d.gL(s).a,w)
w=A.zC(e,n,0.5)
v=n.a>0
m=w.af(0,new A.L(v?0.5:-0.5,0.2,0.9))
w=e.af(0,B.fB5)
if(j.d)v=0
else v=v?0.06:-0.06
l=A.agr(C.a([e,w,m,n.af(0,new A.L(v,0,0.08)),n],x.o),5)
k=D.d.dn(l,0,D.k.bw(l.length*0.8))
i.jM(k,0.085,q,!1,p,8)
if(!r)i.jM(D.d.fH(l,k.length-1),0.061200000000000004,B.wS,!1,0.6,8)}else{l=A.agr(C.a([e,e.af(0,B.fvO),A.zC(e,f,0.6),f],x.o),5)
k=r?l:D.d.dn(l,0,D.k.bw(l.length*0.86))
i.jM(k,0.085,q,!1,p,8)
if(!r)i.jM(D.d.fH(l,k.length-1),0.061200000000000004,B.wS,!1,0.6,8)}},
$S:z+40}
A.fjw.prototype={
$1(d){return d.b===this.a},
$S:1785}
A.f5Y.prototype={
$2(d,e){var w,v=this.a
v.b=d
w=A.G6(e,0.9,6)
if(this.b)v.jM(w,0.2,B.VY,!1,0.35,10)
this.c.push(D.d.gam(w))},
$S:z+35}
A.f7h.prototype={
$6$taped(d,e,f,g,h,i){var w,v,u,t=this.a
t.e=0.9
t.b=d
w=this.b
v=w.a+e*0.75
u=w.b+f
w=w.c-0.45
t.bS(new A.L(v,u,w),B.fC_,h,0.7)
t.e5(new A.L(v,u,w),new A.L(v+e*0.22,u,w),0.17,g,0.9,12)
t.cM(new A.L(v+e*0.23,u,w),B.fAq,B.DM)
if(i)t.bS(new A.L(v+e*0.05,u,w),B.fAi,D.cp,0.2)},
$5(d,e,f,g,h){return this.$6$taped(d,e,f,g,h,!1)},
$S:1786}
A.fjk.prototype={
$1(d){return d.a===this.a},
$S:z+18}
A.fjl.prototype={
$0(){return B.ahV},
$S:z+21}
A.bO9.prototype={
$1(d){return d},
$S:141}
A.bOK.prototype={
$1(d){return d.a==="Jobs"},
$S:z+25}
A.bOL.prototype={
$1(d){return new A.ps("back",d,5)},
$S:z+22}
A.bOP.prototype={
$1(d){return d.glp()},
$S:z+8}
A.bOO.prototype={
$1(d){var w=d.c
return(w==="bathroom"||w==="kitchen")&&d.gop()},
$S:z+8}
A.bON.prototype={
$1(d){var w=d.c
return w==="bathroom"||w==="kitchen"},
$S:z+8}
A.bOM.prototype={
$1(d){return d.glp()&&d.gop()},
$S:z+8}
A.e0p.prototype={
$1(d){return!(d.glp()&&d.gop())},
$S:z+8}
A.e0n.prototype={
$1(d){var w,v=this.a.a.f
A:{if("wiring"===v){w=!d.glp()
break A}if("plumbing"===v){w=!d.gop()
break A}w=!(d.glp()&&d.gop())
break A}return w},
$S:z+8}
A.e0o.prototype={
$1(d){var w,v=this.a
if(v.c==null)return
w=v.d
w===$&&C.c()
if(w.a.length!==0)v.lQ(v.bXb())
else{w=v.a.f
if(w.length!==0){A:{if("wiring"===w){w="This room needs wiring: press the Wiring button, or tap the red outlet or the light."
break A}if("plumbing"===w){w="This room needs plumbing: press the Plumbing button, or tap the toilet or the sink."
break A}w="Walk through the house and fix what the signs say is wrong."
break A}v.lQ(w)}}},
$S:8}
A.e_C.prototype={
$0(){var w=this.a
w.at=this.b
w.ax=this.c},
$S:0}
A.e_D.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.e_B(w))},
$S:0}
A.e_B.prototype={
$0(){return this.a.at=null},
$S:0}
A.e_E.prototype={
$0(){var w=this.a
w.r=this.b
w.z=0
w.Q=-1
w.as=0
w.kH()},
$S:0}
A.e_b.prototype={
$0(){var w=this.a,v=w.d
v===$&&C.c()
v.e=this.b
w.z=0
w.Q=-1
w.as=0
w.at=null
w.kH()},
$S:0}
A.e_K.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.d
w===$&&C.c()
u=w[u.e]
u.cy=!u.cy
v.kH()},
$S:0}
A.e_i.prototype={
$0(){var w=this.a,v=this.b
w.z=v-100
w.as=v
w.kH()},
$S:0}
A.e_j.prototype={
$0(){var w=this.a,v=this.b
w.Q=v-300
w.as=v},
$S:0}
A.e_k.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&C.c()
w=t.d
w===$&&C.c()
v=this.b
if(!w[t.e].at.W(0,v)){t=u.d
w=t.d
w===$&&C.c()
w[t.e].at.J(0,v)}u.kH()},
$S:0}
A.e_l.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.d
w===$&&C.c()
w[u.e].at.J(0,this.b)
v.kH()},
$S:0}
A.e_m.prototype={
$0(){var w=this.a
if(w.c==null)return
w.m(new A.e_h(w,this.b))
w.ack(this.c)},
$S:11}
A.e_h.prototype={
$0(){var w,v=this.a.d
v===$&&C.c()
w=v.d
w===$&&C.c()
return w[v.e].at.W(0,this.b)},
$S:0}
A.e_n.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.d
w===$&&C.c()
w[u.e].fr=!0
v.kH()},
$S:0}
A.e_s.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n=null,m=x.p,l=C.a([],m)
for(w=this.a,v=this.b,u=0;u<8;++u){t=B.a0D[u]
s=D.c.j(0.08)
r=new C.aV(12,12)
q=w.d
q===$&&C.c()
p=q.d
p===$&&C.c()
o=new C.az(p[q.e].cx.h(0,v)===t.a?D.aJ:D.b5,1,D.r,-1)
l.push(C.aE(n,C.p(n,new C.x(t.c+" "+t.b,n,D.SX,n,n,n,n,n,n,n,n,n),D.f,n,n,new C.o(s,n,new C.bP(o,o,o,o),new C.bp(r,r,r,r),n,n,D.n),n,n,n,n,D.eh,n,n,n),D.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new A.e_q(w,d,v,t),n,n,n,n,n,n,!1,D.a8))}s=w.d
s===$&&C.c()
r=s.d
r===$&&C.c()
if(r[s.e].cx.h(0,v)!=null)l.push(C.aE(n,C.p(n,B.fjd,D.f,n,n,new C.o(D.es,n,n,C.m(12),n,n,D.n),n,n,n,n,D.eh,n,n,n),D.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new A.e_r(w,d,v),n,n,n,n,n,n,!1,D.a8))
return C.bm(!0,new C.C(D.bU,C.v(C.a([B.ffA,D.S,C.c_(D.bD,l,D.bt,8,8)],m),D.F,n,D.e,D.Q,0,D.p),n),!0,!1,D.ag,!0,!0)},
$S:29}
A.e_q.prototype={
$0(){var w,v,u,t=this
C.a5(t.b,!1).N(null)
w=t.a
v=t.d
w.m(new A.e_p(w,t.c,v))
u=v.b
w.lQ(v.d>0?u+" is on and playing NGMY ads. Tap it to watch full screen.":u+" is plugged in and running.")
A.mV(820,70,0.25,"tri")},
$S:0}
A.e_p.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.d
w===$&&C.c()
w[u.e].cx.n(0,this.b,this.c.a)
v.kH()},
$S:0}
A.e_r.prototype={
$0(){C.a5(this.b,!1).N(null)
var w=this.a
w.m(new A.e_o(w,this.c))
w.lQ("Unplugged.")},
$S:0}
A.e_o.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.d
w===$&&C.c()
w[u.e].cx.W(0,this.b)
v.kH()},
$S:0}
A.e00.prototype={
$1(d){return new C.e1(new A.e_Z(this.a),null)},
$S:20}
A.e_Z.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=null,n=this.a,m=new A.e0_(n,e),l=n.d
l===$&&C.c()
w=l.d
w===$&&C.c()
l=C.d("TV in "+w[l.e].b,o,o,o,o,o,o,D.du,o,o,o)
w=x.p
v=C.a([],w)
for(u=D.d.gag(B.a0D),t=new C.fG(u,new A.e_T());t.C();){s=u.gU(0)
r=s.b
q=n.d
p=q.d
p===$&&C.c()
q=p[q.e].dy===s.a?D.aJ:D.fh
v.push(m.$3$color(r,new A.e_U(n,s),q))}v=C.c_(D.bD,v,D.bt,8,8)
u=C.a([],w)
t=n.d
s=t.d
s===$&&C.c()
t=s[t.e]
if(t.dy!=null){t=t.fr?"\u23fb Turn this TV off":"\u23fb Turn this TV on"
u.push(m.$2(t,new A.e_V(n)))}t=n.d
s=t.d
s===$&&C.c()
if(s[t.e].dy!=null&&t.a.length===0)u.push(m.$3$color("\ud83d\uddd1 Take it down",new A.e_W(n),D.es))
if(n.d.a.length===0)u.push(m.$3$color("\ud83d\udcfa A TV in every room, all on",new A.e_X(n),D.cZ))
if(n.d.a.length===0)u.push(m.$3$color("\u23fb All TVs off",new A.e_Y(n),D.bo))
return C.bm(!0,new C.C(D.bU,C.v(C.a([l,D.S,v,D.S,C.c_(D.bD,u,D.bt,8,8)],w),D.F,o,D.e,D.Q,0,D.p),o),!0,!1,D.ag,!0,!0)},
$S:89}
A.e0_.prototype={
$3$color(d,e,f){var w=null,v=f.j(0.4),u=C.m(12),t=C.I(f,D.r,1)
return C.aE(w,C.p(w,C.d(d,w,w,w,w,w,w,H.z9,w,w,w),D.f,w,w,new C.o(v,w,t,u,w,w,D.n),w,w,w,w,T.EJ,w,w,w),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new A.e_S(this.a,e,this.b),w,w,w,w,w,w,!1,D.a8)},
$2(d,e){return this.$3$color(d,e,D.fh)},
$S:1787}
A.e_S.prototype={
$0(){this.b.$0()
this.c.$1(new A.e_R())
var w=this.a
w.m(w.gYs())},
$S:0}
A.e_R.prototype={
$0(){},
$S:0}
A.e_T.prototype={
$1(d){return d.d>0},
$S:z+18}
A.e_U.prototype={
$0(){var w,v=this.a.d
v===$&&C.c()
w=v.d
w===$&&C.c()
v=w[v.e]
v.dy=this.b.a
v.fr=!0},
$S:0}
A.e_V.prototype={
$0(){var w,v=this.a.d
v===$&&C.c()
w=v.d
w===$&&C.c()
v=w[v.e]
return v.fr=!v.fr},
$S:0}
A.e_W.prototype={
$0(){var w,v=this.a.d
v===$&&C.c()
w=v.d
w===$&&C.c()
v=w[v.e]
v.dy=null
v.fr=!1},
$S:0}
A.e_X.prototype={
$0(){var w,v,u,t=this.a.d
t===$&&C.c()
t=t.gwf()
w=t.length
v=0
for(;v<w;++v){u=t[v]
if(u.dy==null)u.dy="bangtv"
u.fr=!0}},
$S:0}
A.e_Y.prototype={
$0(){var w,v,u=this.a.d
u===$&&C.c()
u=u.gwf()
w=u.length
v=0
for(;v<w;++v)u[v].fr=!1},
$S:0}
A.e_P.prototype={
$1(d){return new C.e1(new A.e_O(this.a),null)},
$S:20}
A.e_O.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=null,n=x.p,m=C.a([],n)
for(w=this.a,v=0;v<5;++v){u=B.d9t[v]
t=w.cy===u?D.aJ.j(0.25):D.c.j(0.07)
s=new C.aV(12,12)
r=w.cy===u
q=r?D.aJ:D.b5
p=new C.az(q,r?2:1,D.r,-1)
if(u<60)q=""+u+" seconds"
else q=u===60?"1 minute":""+(u/60|0)+" minutes"
r=r?D.aJ:D.c
m.push(C.aE(o,C.p(o,new C.x(q,o,new C.F(!0,r,o,o,o,o,13,D.u,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),o,o,o,o,o,o,o,o,o),D.f,o,o,new C.o(t,o,new C.bP(p,p,p,p),new C.bp(s,s,s,s),o,o,D.n),o,o,o,o,D.iN,o,o,o),D.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new A.e_M(w,e,u),o,o,o,o,o,o,!1,D.a8))}return C.bm(!0,new C.C(D.bU,C.v(C.a([B.fle,D.at,B.fpE,D.ac,C.c_(D.bD,m,D.bt,8,8),D.az,C.dp(A4.akS,B.f6E,new A.e_N(w,d),o)],n),D.F,o,D.e,D.Q,0,D.p),o),!0,!1,D.ag,!0,!0)},
$S:89}
A.e_M.prototype={
$0(){return this.b.$1(new A.e_L(this.a,this.c))},
$S:0}
A.e_L.prototype={
$0(){return this.a.cy=this.b},
$S:0}
A.e_N.prototype={
$0(){C.a5(this.b,!1).N(null)
var w=this.a
w.cs4(w.cy)},
$S:0}
A.e_G.prototype={
$0(){var w=this.a,v=w.d
v===$&&C.c()
v.e=this.b
w.at=null
w.kH()},
$S:0}
A.e_H.prototype={
$1(d){var w,v,u,t,s=this.a,r=s.CW
if(r==null||s.c==null)return
w=s.ch.gu_()/1000-s.cx
v=r.d
v===$&&C.c()
if(w>=v){s.ah3()
s.lQ("The tour is over. Press Tour to walk the house again.")
return}u=r.aB0(w)
v=u.a
t=s.d
t===$&&C.c()
if(v!==t.e)s.av5(v,!0)
else{v=s.e
v===$&&C.c()
v.bjJ(new A.L(u.b*0.55,38,Math.max(20,u.c*0.5+10)))}if(u.w!==s.dx)s.m(new A.e_F(s,u))},
$S:14}
A.e_F.prototype={
$0(){return this.a.dx=this.b.w},
$S:0}
A.e_I.prototype={
$0(){},
$S:0}
A.e_J.prototype={
$0(){var w=this.a
w.CW=null
w.dx=""},
$S:0}
A.e_d.prototype={
$1(d){var w=this.a,v=w.fy
w=w.id
return v==="ptrap"?new A.a8c(w,null):new A.a3E(w,null)},
$S:1788}
A.e_e.prototype={
$1(d){var w=this.a
return new A.GN(w.fy,w.go,null)},
$S:z+16}
A.e01.prototype={
$1(d){var w=this.a
return new A.GN(w.a,w.c,null)},
$S:z+16}
A.e_g.prototype={
$1(d){return A.fN2(!1,this.a.ch,!1)},
$S:z+23}
A.e_f.prototype={
$1(d){return new A.UV(this.a.CW,null)},
$S:z+24}
A.dZV.prototype={
$1(d){var w,v,u,t,s,r,q,p=null,o=this.a,n=o.d
n===$&&C.c()
w=n.d
w===$&&C.c()
n=C.d("Add to "+w[n.e].b,p,p,p,p,p,p,D.du,p,p,p)
w=x.p
v=C.a([],w)
for(u=0;u<3;++u){t={}
s=B.daY[u]
t.a=null
t.a=s.a
r=new C.aV(12,12)
q=new C.az(D.b0,1,D.r,-1)
v.push(C.aE(p,C.p(p,new C.x(s.b,p,D.rn,p,p,p,p,p,p,p,p,p),D.f,p,p,new C.o(D.fh.j(0.4),p,new C.bP(q,q,q,q),new C.bp(r,r,r,r),p,p,D.n),p,p,p,p,T.EJ,p,p,p),D.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new A.dZU(t,o,d),p,p,p,p,p,p,!1,D.a8))}return C.bm(!0,new C.C(D.bU,C.v(C.a([n,D.at,B.fnq,D.ac,C.c_(D.bD,v,D.bt,8,8)],w),D.F,p,D.e,D.Q,0,D.p),p),!0,!1,D.ag,!0,!0)},
$S:29}
A.dZU.prototype={
$0(){C.a5(this.c,!1).N(null)
this.b.bwr(this.a.a)},
$S:0}
A.dZP.prototype={
$1(d){return d.a==="back"},
$S:z+13}
A.dZQ.prototype={
$1(d){return d.a==="back"},
$S:z+13}
A.dZR.prototype={
$1(d){return Math.abs(d-this.a)>13},
$S:121}
A.dZS.prototype={
$0(){var w=this
w.b.dx.push(new A.aTw(w.c,w.d,new A.Xr(C.V(x.S,x.N))))
w.a.kH()},
$S:0}
A.e_c.prototype={
$0(){var w,v,u,t=this,s=t.b
s.c=s.c+t.c
s.d=s.d+t.d
w=t.a
v=w.d
v===$&&C.c()
u=v.d
u===$&&C.c()
u[v.e].aBs(0,s)
w.kH()},
$S:0}
A.e_Q.prototype={
$0(){var w,v,u,t=this.b
t.e=(t.e+1)%4
w=this.a
v=w.d
v===$&&C.c()
u=v.d
u===$&&C.c()
u[v.e].aBs(0,t)
w.kH()},
$S:0}
A.e_z.prototype={
$0(){var w=this.b
w.f=(w.f+1)%6
this.a.kH()},
$S:0}
A.e_A.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.d
w===$&&C.c()
D.d.W(w[u.e].x,this.b)
v.as=v.z=0
v.kH()},
$S:0}
A.dZT.prototype={
$0(){var w=this.a,v=this.b.a
w.z=v
w.as=100+v
w.kH()},
$S:0}
A.e_0.prototype={
$0(){return this.a.acl(-6,0)},
$S:0}
A.e_1.prototype={
$0(){return this.a.acl(6,0)},
$S:0}
A.e_2.prototype={
$0(){return this.a.acl(0,-6)},
$S:0}
A.e_3.prototype={
$0(){return this.a.acl(0,6)},
$S:0}
A.e_4.prototype={
$0(){return this.a.bwu(this.b.a)},
$S:0}
A.e_5.prototype={
$0(){var w=this.a
return w.m(new A.e__(w))},
$S:0}
A.e__.prototype={
$0(){return this.a.Q=-1},
$S:0}
A.e_6.prototype={
$0(){var w=this.a
w.m(new A.dZZ(w,this.b))},
$S:0}
A.dZZ.prototype={
$0(){var w,v=this.a,u=v.Q,t=this.b,s=v.d
if(u<0){s===$&&C.c()
u=s.d
u===$&&C.c()
D.d.hb(u[s.e].z,0,3,t)}else{s===$&&C.c()
w=s.d
w===$&&C.c()
w[s.e].z[u]=t}v.kH()},
$S:0}
A.e_7.prototype={
$0(){var w=this.a
w.m(new A.dZY(w,this.b))},
$S:0}
A.dZY.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.d
w===$&&C.c()
w[u.e].Q=this.b
v.kH()},
$S:0}
A.e_8.prototype={
$0(){var w=this.a
w.m(new A.dZX(w))},
$S:0}
A.dZX.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.d
w===$&&C.c()
u=w[u.e]
u.db=u.db==="fan"?"light":"fan"
v.kH()},
$S:0}
A.e_9.prototype={
$0(){var w=this.a
w.m(new A.dZW(w,this.b))},
$S:0}
A.dZW.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.d
w===$&&C.c()
w[u.e].as=this.b
v.kH()},
$S:0}
A.e_a.prototype={
$0(){return this.a.ack(this.b.c)},
$S:0}
A.e0e.prototype={
$0(){var w=this.a,v=w.d
v===$&&C.c()
return v.a.length!==0?w.DE():w.cgG(this.b)},
$S:0}
A.e09.prototype={
$0(){return this.a.Yr()},
$S:0}
A.e08.prototype={
$1(d){return d<=5},
$S:34}
A.e07.prototype={
$1(d){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.d
w===$&&C.c()
return A.hSm(w[u.e],v.ch.gu_()/1000,v.c1V())},
$S:z+6}
A.e0f.prototype={
$0(){var w=this.a
w.m(new A.e06(w))
w.Yr()},
$S:0}
A.e06.prototype={
$0(){var w=this.a
return w.x=!w.x},
$S:0}
A.e0g.prototype={
$0(){var w=this.a
return w.CW!=null?w.ah3():w.cwg()},
$S:0}
A.e0h.prototype={
$0(){var w=this.a
return w.m(new A.e05(w))},
$S:0}
A.e05.prototype={
$0(){var w=this.a,v=!w.w
w.w=v
if(v)w.lQ("Voltage tester in your hand: tap an outlet, a switch or the light.")},
$S:0}
A.e0i.prototype={
$0(){var w=this.a
return w.m(new A.e04(w))},
$S:0}
A.e04.prototype={
$0(){var w=this.a
return w.y=!w.y},
$S:0}
A.e0j.prototype={
$0(){return this.a.QC("look")},
$S:0}
A.e0k.prototype={
$0(){return this.a.QC("furniture")},
$S:0}
A.e0l.prototype={
$0(){return this.a.QC("walls")},
$S:0}
A.e0m.prototype={
$0(){return this.a.QC("floor")},
$S:0}
A.e0a.prototype={
$0(){return this.a.QC("ceiling")},
$S:0}
A.e0b.prototype={
$0(){return this.a.QC("doors")},
$S:0}
A.e0c.prototype={
$0(){return C.a5(this.a,!1).ce(C.ej(new A.e03(),!1,null,x.H))},
$S:0}
A.e03.prototype={
$1(d){return B.aCZ},
$S:z+27}
A.e0d.prototype={
$0(){var w=this.a
return w.m(new A.e02(w))},
$S:0}
A.e02.prototype={
$0(){var w=this.a.d
w===$&&C.c()
return w.c=!w.c},
$S:0}
A.e_y.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=C.aI(d,m,x.w).w,k=this.a,j=k.d
j===$&&C.c()
w=x.p
j=C.a([B.fcj,D.at,C.d("Wiring "+j.gcRA()+"/"+k.d.gwf().length+" \xb7 Plumbing "+k.d.gcOu()+"/"+k.d.gcOt(),m,m,m,m,m,m,B.In,m,m,m),D.S],w)
for(v=k.d.gwf(),u=v.length,t=0;t<v.length;v.length===u||(0,C.K)(v),++t){s=v[t]
r=D.c.j(0.05)
q=new C.aV(12,12)
p=new C.az(s.glp()&&s.gop()?D.bc.j(0.5):D.bF,1,D.r,-1)
if(s.glp()&&s.gop())o="\u2705 finished"
else{o=s.glp()?"":"\u26a1 wiring  "
o+=s.gop()?"":"\ud83d\udeb0 plumbing"}n=s.glp()&&s.gop()?D.ey:D.ad
j.push(C.aE(m,C.p(m,new C.co(D.aQ,D.e,D.j,D.m,m,D.p,m,0,C.a([new C.bE(1,D.bi,new C.x(s.b,m,B.f1Q,m,m,m,m,m,m,m,m,m),m),new C.x(o,m,new C.F(!0,n,m,m,m,m,12,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m,m,m,m,m,m,m)],w),m),D.f,m,m,new C.o(r,m,new C.bP(p,p,p,p),new C.bp(q,q,q,q),m,m,D.n),m,m,m,D.eO,D.bR,m,m,m),D.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new A.e_v(k,d,s),m,m,m,m,m,m,!1,D.a8))}j.push(D.P)
j.push(C.dT(B.f9u,new A.e_w(k,d),m))
j.push(D.P)
j.push(C.bJ(B.f5U,new A.e_x(k,d),m))
return C.bm(!0,new C.cU(new C.aY(0,1/0,0,l.a.b*0.75),C.cB(j,m,D.bU,m,m,D.ah,!0),m),!0,!1,D.ag,!0,!0)},
$S:29}
A.e_v.prototype={
$0(){C.a5(this.b,!1).N(null)
this.a.ack(this.c.a)},
$S:0}
A.e_w.prototype={
$0(){C.a5(this.b,!1).N(null)
var w=this.a
w.m(new A.e_u(w))
w.lQ("Every room needs its wiring and plumbing again. Wire the whole house from the start.")},
$S:0}
A.e_u.prototype={
$0(){var w=this.a,v=w.d
v===$&&C.c()
v.cLa()
w.kH()},
$S:0}
A.e_x.prototype={
$0(){C.a5(this.b,!1).N(null)
$.aTC=A.fYN(D.o.F(Date.now(),1e5))
var w=this.a
w.m(new A.e_t(w))
w.av4(!0)},
$S:0}
A.e_t.prototype={
$0(){var w=this.a,v=$.aTC
v.toString
w.d=v
w.r="look"
w.z=0
w.Q=-1
w.as=0
w.kH()},
$S:0}
A.dlr.prototype={
$1(d){var w,v,u,t,s,r=d.b,q=14*this.b,p=D.k.e9(r.a,q),o=D.k.e9(r.b,q)
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
A.fjG.prototype={
$2(d,e){return this.a===d?e:0},
$S:1789}
A.fjy.prototype={
$1(d){return d.a==="right"},
$S:z+13}
A.fjz.prototype={
$1(d){return d.a==="back"},
$S:z+13}
A.fjA.prototype={
$1(d){return d.b},
$S:z+28}
A.fjB.prototype={
$2(d,e){return e},
$S:85}
A.fjC.prototype={
$3(d,e,f){return F.aOA(d,e,0,f+this.a)},
$S:319}
A.fjD.prototype={
$3(d,e,f){var w=this.a
return F.aOA(d,e,w.fx,f+w.a)},
$S:319}
A.fjE.prototype={
$3(d,e,f){var w=this.a
return F.aOA(d,e,w.fx,f+w.a)},
$S:319}
A.fjF.prototype={
$2(d,e){var w=this.a
w.b=0
w.e5(new A.L(d,e,0),new A.L(d,e,2.2),0.7,B.JX,0.7,10)},
$S:1791}
A.fed.prototype={
$5(d,e,f,g,h){var w=C.a([],x.z)
new A.mG(w).bS(new A.L(0,-e/2,0),new A.L(f,e,f),g,0.05)
D.d.v(this.a.a,A.Cu(w,h,0,d))},
$S:z+29}
A.fjL.prototype={
$4$alongX(d,e,f,g){var w,v,u,t,s,r,q,p,o,n
for(w=this.a,v=0;v<=f;++v){u=A.zC(d,e,v/f)
w.aB8(new A.L(u.a,4,u.c),B.fCb,B.VQ,!1,0.05)}t=A.zC(d,e,0.5)
for(s=e.aC(0,d).gT0()+0.15,r=t.a,q=t.c,p=0;p<2;++p){o=B.cZA[p]
n=g?new A.L(s,0.16,0.3):new A.L(0.3,0.16,s)
w.bS(new A.L(r,o,q),n,B.VQ,0.05)}},
$3(d,e,f){return this.$4$alongX(d,e,f,!0)},
$S:z+30}
A.fjI.prototype={
$2(d,e){return this.a.jM(A.G6(d,0.35,3),0.06,e,!1,0.4,6)},
$S:z+31}
A.fjH.prototype={
$1(d){return this.a.jM(A.G6(d,0.5,3),0.14,B.p9,!1,0.3,8)},
$S:z+47}
A.fjK.prototype={
$2$col(d,e){return this.a.jM(A.G6(d,0.4,3),0.055,e,!1,0.35,6)},
$1(d){return this.$2$col(d,B.VY)},
$S:z+33}
A.fjJ.prototype={
$5$h$w(d,e,f,g,h){var w=this.a
w.b=d
w.bS(e,new A.L(h,g,0.06),f,0.3)},
$3(d,e,f){return this.$5$h$w(d,e,f,0.7,0.45)},
$S:z+34}
A.fkF.prototype={
$0(){return A.mV(1320,120,0.25,"tri")},
$S:0}
A.dJ7.prototype={
$1(d){return this.a},
$S:41}
A.dJa.prototype={
$0(){return C.a5(this.a,!1).m1()},
$S:0}
A.dJb.prototype={
$0(){var w=this.a
return w.m(new A.dJ9(w))},
$S:0}
A.dJ9.prototype={
$0(){return this.a.d=!1},
$S:0}
A.dJc.prototype={
$0(){var w=this.a
return w.m(new A.dJ8(w))},
$S:0}
A.dJ8.prototype={
$0(){return this.a.d=!0},
$S:0}
A.dJe.prototype={
$0(){var w=this.a
return w.A0(A.aZ_("","",w.d))},
$S:0}
A.dJf.prototype={
$0(){var w=this.a
return w.A0(A.aZ_("wiring","",w.d))},
$S:0}
A.dJg.prototype={
$0(){var w=this.a
return w.A0(A.aZ_("plumbing","",w.d))},
$S:0}
A.dJh.prototype={
$0(){var w=this.a
return w.A0(A.aZ_("fix","",w.d))},
$S:0}
A.dJi.prototype={
$0(){var w=this.a
return w.A0(A.fN2(w.d,null,!1))},
$S:0}
A.dJj.prototype={
$0(){var w=this.a
return w.A0(A.fN2(w.d,null,!0))},
$S:0}
A.dJk.prototype={
$0(){var w=this.a
return w.A0(new A.apK(w.d,null))},
$S:0}
A.dJl.prototype={
$0(){var w=this.b.a
w=w==="house"?B.fFD:A.aZ_("",w,!1)
return this.a.A0(w)},
$S:0}
A.dJd.prototype={
$0(){return this.a.A0(B.aCZ)},
$S:0}
A.coG.prototype={
$0(){return this.a.d.an6(0.8)},
$S:0}
A.coH.prototype={
$0(){return this.a.d.an6(1.25)},
$S:0}
A.fAU.prototype={
$1(d){var w,v,u,t,s,r,q,p,o=null,n=C.aI(d,o,x.w).w,m=this.b,l=this.c,k=l.length,j=x.p,i=C.a([C.d(this.a,o,o,o,o,o,o,D.du,o,o,o),D.at,C.d(""+new C.a2(m,new A.fAT(),C.T(m).k("a2<1>")).gM(0)+" of "+k+" steps done",o,o,o,o,o,o,B.In,o,o,o),D.S],j)
for(w=0;w<k;++w){v=D.c.j(0.05)
u=new C.aV(14,14)
t=new C.az(m[w]?D.bc.j(0.6):D.bF,1,D.r,-1)
s=m[w]
r=s?"\u2705":""+(w+1)+"."
q=s?D.c:D.aJ
p=l[w]
s=s?D.ay:D.c
i.push(C.p(o,new C.co(D.aQ,D.e,D.j,D.F,o,D.p,o,0,C.a([new C.x(r,o,new C.F(!0,q,o,o,o,o,14,D.u,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),o,o,o,o,o,o,o,o,o),D.aw,new C.bE(1,D.bi,new C.x(p,o,new C.F(!0,s,o,o,o,o,13,o,o,o,o,o,1.4,o,o,o,o,o,o,o,o,o,o,o,o,o),o,o,o,o,o,o,o,o,o),o)],j),o),D.f,o,o,new C.o(v,o,new C.bP(t,t,t,t),new C.bp(u,u,u,u),o,o,D.n),o,o,o,D.cG,D.bk,o,o,o))}return C.bm(!0,new C.cU(new C.aY(0,1/0,0,n.a.b*0.75),C.cB(i,o,D.bU,o,o,D.ah,!0),o),!0,!1,D.ag,!0,!0)},
$S:29}
A.fAT.prototype={
$1(d){return d},
$S:141}
A.bQW.prototype={
$0(){return C.a5(this.a,!1).m1()},
$S:0}
A.d1k.prototype={
$0(){var w=this.a
w.y=this.b
w.z=this.c},
$S:0}
A.d1l.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.d1j(w))},
$S:0}
A.d1j.prototype={
$0(){return this.a.y=null},
$S:0}
A.d1d.prototype={
$0(){return this.a.x=0},
$S:0}
A.d1c.prototype={
$1(d){var w=this.a.geR(0).b
return new C.bc(w,C.a3(w).k("bc<2>")).t(0,d)},
$S:3}
A.d1e.prototype={
$1(d){return d.a===this.a},
$S:z+9}
A.d1f.prototype={
$2(d,e){return e===this.a},
$S:439}
A.d1g.prototype={
$0(){var w=this.a
w.xm()
w.x=this.b},
$S:0}
A.d1h.prototype={
$0(){return this.a.x=this.b},
$S:0}
A.d1i.prototype={
$0(){var w=this.a,v=w.geR(0),u=v.a
v.a=!u
if(u)v.d=!1
w.xm()},
$S:0}
A.d1m.prototype={
$0(){var w=this.a,v=w.geR(0)
v.d=v.a=!0
w.xm()},
$S:0}
A.d1u.prototype={
$1(d){return!d},
$S:141}
A.d1x.prototype={
$0(){var w=this.a.gFA()
return A.fAS(this.b,w.b,w.d,this.c)},
$S:0}
A.d1v.prototype={
$0(){var w=this.a
return w.m(new A.d1t(w))},
$S:0}
A.d1t.prototype={
$0(){var w=this.a,v=w.geR(0)
v.e=!v.e
w.xm()},
$S:0}
A.d1w.prototype={
$0(){var w=this.a
return w.m(new A.d1s(w))},
$S:0}
A.d1s.prototype={
$0(){var w=this.a,v=w.geR(0)
v.f=!v.f
w.xm()},
$S:0}
A.d1y.prototype={
$0(){var w=this.a,v=w.gkL()
return v.mz(10,0.2,new A.L(0.6,0,w.geR(0).c===0?4.2:0.4),-0.95)},
$S:0}
A.d1z.prototype={
$0(){var w=this.a,v=w.gkL()
return v.mz(10,0.2,new A.L(-0.6,0,w.geR(0).c===0?4.2:0.4),0.95)},
$S:0}
A.d1A.prototype={
$1(d){return!this.a.geR(0).b.iL(0,d.a)},
$S:z+11}
A.d1B.prototype={
$0(){var w=this.a,v=this.b,u=v.a
if(w.geR(0).b.iL(0,u)){w.oS("That wire is already fastened. Tap the wire in the 3D view to take it off if you want to move it.")
return}w.m(new A.d1r(w,v))
if(w.w.length!==0){if(u==="ground")w.gkL().mz(8,0.55,B.fzu,0.15)
else if(u==="white")w.gkL().mz(8.5,0.2,B.fBl,0.95)
else w.gkL().mz(8.5,0.2,B.fvy,-0.95)
w.kn(v.b+": now tap the screw it belongs on.",!0)}},
$S:0}
A.d1r.prototype={
$0(){var w=this.a,v=this.b.a
return w.w=w.w===v?"":v},
$S:0}
A.d1C.prototype={
$0(){var w=this.a
w.m(new A.d1q(w))
A.y4()
w.kn("The wires are folded back and the device is pushed into the box. Now put the cover plate on.",!0)
w.nQ()},
$S:0}
A.d1q.prototype={
$0(){var w=this.a
w.geR(0).c=1
w.xm()},
$S:0}
A.d1D.prototype={
$0(){var w=this.a
w.m(new A.d1p(w))
w.nQ()},
$S:0}
A.d1p.prototype={
$0(){var w=this.a
w.geR(0).c=0
w.xm()},
$S:0}
A.d1E.prototype={
$0(){var w=this.a
w.m(new A.d1o(w))
A.y4()
w.kn("Cover plate on. Now turn the power on and test.",!0)},
$S:0}
A.d1o.prototype={
$0(){var w=this.a
w.geR(0).c=2
w.xm()},
$S:0}
A.d1F.prototype={
$0(){var w=this.a
w.m(new A.d1n(w))
w.nQ()},
$S:0}
A.d1n.prototype={
$0(){var w=this.a,v=w.geR(0)
v.c=0
v.b.a8(0)
v.a=!0
v.d=!1
w.Q=0
w.w=""
w.x=0
w.xm()},
$S:0}
A.eK5.prototype={
$0(){var w=this.a
w.x=this.b
w.y=this.c},
$S:0}
A.eK6.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.eK4(w))},
$S:0}
A.eK4.prototype={
$0(){return this.a.x=null},
$S:0}
A.eJZ.prototype={
$0(){return this.a.w=0},
$S:0}
A.eK_.prototype={
$0(){var w=this.a,v=w.geR(0)
v.a.J(0,this.b)
v.c=!1
v.d=""
w.f=A.bz8(v)
w.r=""},
$S:0}
A.eK0.prototype={
$0(){var w=this.a,v=w.geR(0)
v.b.n(0,this.b,!0)
v.d=""
w.f=A.bz8(v)},
$S:0}
A.eK1.prototype={
$0(){return this.a.w=this.b},
$S:0}
A.eK2.prototype={
$1(d){return this.a.geR(0).b.h(0,d)!==!0},
$S:3}
A.eK3.prototype={
$0(){var w,v=this.a,u=v.geR(0)
u.c=!0
w=this.b
u.d=w.length===0?"":D.d.gL(w)
v.f=A.bz8(u)},
$S:0}
A.eKa.prototype={
$1(d){return!d},
$S:141}
A.eKe.prototype={
$0(){return A.fAS(this.a,"Sink drain (P-trap)",B.d10,this.b)},
$S:0}
A.eKb.prototype={
$1(d){return A.i_X(this.a.geR(0),d)},
$S:z+6}
A.eKc.prototype={
$0(){var w=this.a
return w.m(new A.eK9(w,this.b))},
$S:0}
A.eK9.prototype={
$0(){var w=this.a,v=this.b
return w.r=w.r===v?"":v},
$S:0}
A.eKd.prototype={
$0(){var w=this.a
w.m(new A.eK8(w))
w.nQ()},
$S:0}
A.eK8.prototype={
$0(){var w,v=this.a,u=v.geR(0)
u.a.a8(0)
w=u.b
w.aGJ(w,new A.eK7())
u.c=!1
v.r=u.d=""
v.w=0
v.f=A.bz8(u)},
$S:0}
A.eK7.prototype={
$2(d,e){return!1},
$S:1793}
A.d4f.prototype={
$0(){var w=this.a
w.x=this.b
w.y=this.c},
$S:0}
A.d4g.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.d4e(w))},
$S:0}
A.d4e.prototype={
$0(){return this.a.x=null},
$S:0}
A.d47.prototype={
$0(){return this.a.w=0},
$S:0}
A.d4a.prototype={
$1(d){return d.a===this.a},
$S:z+17}
A.d4b.prototype={
$0(){var w=this.a,v=w.geR(0)
v.f=!1
w.f=A.aNc(v)
w.w=this.b},
$S:0}
A.d4c.prototype={
$0(){var w=this.a,v=w.geR(0),u=v.e
u.bn(u,new A.d49(this.b))
v.f=!1
w.f=A.aNc(v)},
$S:0}
A.d49.prototype={
$2(d,e){return e===this.a},
$S:439}
A.d4d.prototype={
$0(){return this.a.w=this.b},
$S:0}
A.d48.prototype={
$0(){var w=this.a,v=w.geR(0)
v.f=!v.f
w.f=A.aNc(v)},
$S:0}
A.d4k.prototype={
$1(d){return!d},
$S:141}
A.d4q.prototype={
$0(){return A.fAS(this.a,"Faucet supply lines",B.dc6,this.b)},
$S:0}
A.d4l.prototype={
$1(d){return A.hRV(this.a.geR(0),d)},
$S:z+6}
A.d4m.prototype={
$0(){var w=this.a
return w.m(new A.d4j(w))},
$S:0}
A.d4j.prototype={
$0(){var w=this.a,v=w.geR(0)
v.r=!v.r
w.f=A.aNc(v)},
$S:0}
A.d4o.prototype={
$0(){var w=this.b
return w.m(new A.d4i(this.a,w))},
$S:0}
A.d4i.prototype={
$0(){var w=this.b,v=w.r,u=this.a.a
return w.r=v===u?"":u},
$S:0}
A.d4n.prototype={
$1(d){return d===this.a.a},
$S:3}
A.d4p.prototype={
$0(){var w=this.a
w.m(new A.d4h(w))
w.nQ()},
$S:0}
A.d4h.prototype={
$0(){var w=this.a,v=w.geR(0)
v.e.a8(0)
v.f=!1
w.r=""
w.w=0
w.f=A.aNc(v)},
$S:0}
A.dbj.prototype={
$0(){var w=this.a
w.x=this.b
w.y=this.c},
$S:0}
A.dbk.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.dbi(w))},
$S:0}
A.dbi.prototype={
$0(){return this.a.x=null},
$S:0}
A.dbd.prototype={
$0(){return this.a.r=0},
$S:0}
A.dbf.prototype={
$0(){var w=this.a,v=w.d
v.d.W(0,72)
w.f=A.af1(v)
w.r=this.b},
$S:0}
A.dbg.prototype={
$0(){var w=this.a,v=w.d
v.c=!0
v.b=!1
w.f=A.af1(v)
w.r=this.b},
$S:0}
A.dbh.prototype={
$0(){return this.a.r=this.b},
$S:0}
A.dbe.prototype={
$1(d){return this.a},
$S:41}
A.dbs.prototype={
$0(){return A.fAS(this.a,"Fix the house",B.ccl,this.b)},
$S:0}
A.dbn.prototype={
$0(){return this.a.c9M(this.b)},
$S:0}
A.dbp.prototype={
$1(d){return d<=this.a.d.a},
$S:34}
A.dbo.prototype={
$1(d){return A.hcB(this.a.d,d)},
$S:z+6}
A.dbq.prototype={
$0(){var w=this.a
return w.m(new A.dbm(w))},
$S:0}
A.dbm.prototype={
$0(){var w=this.a
return w.w=w.w==="wrench"?"":"wrench"},
$S:0}
A.dbr.prototype={
$1(d){var w=this.a
return w.m(new A.dbl(w,d))},
$S:6}
A.dbl.prototype={
$0(){var w=this.a,v=w.d,u=D.k.V(this.b)
v.a=u
if(u<5)w.r=0
w.f=A.af1(v)},
$S:0}
A.c4B.prototype={
$0(){return C.a5(this.a,!1).m1()},
$S:0}
A.fkl.prototype={
$5(d,e,f,g,h){var w=this.a.a.t(0,h),v=this.b
v.b=d
if(w)v.a5g(e,0.66,f,!1,!0,!0,g,14)
else{v.d=0.3
v.aGH(e,0.74,D.b0,!1,!0,0,8)
v.d=1}},
$S:z+55}
A.fkk.prototype={
$6(d,e,f,g,h,i){var w,v
if(!i)return
w=this.a.b.h(0,e)
v=w===!0?f:f.af(0,h)
w=this.b
w.e=0.5
w.b=d
w.e5(v.aC(0,g.aK(0,0.6)),v.af(0,g.aK(0,0.6)),1.12,B.p9,0.35,8)
w.yS(v.aC(0,g.aK(0,0.62)),v.aC(0,g.aK(0,0.5)),1.2,0.5,B.Ve,0.2,8)
w.b=0
w.yS(f.aC(0,g.aK(0,0.05)),f.af(0,g.aK(0,0.08)),0.82,0.55,B.bf1,0.1,12)
w.e=0},
$S:z+37}
A.fkj.prototype={
$1(d){return d.b<-0.6},
$S:z+19}
A.fjx.prototype={
$1(d){return this.a.e.h(0,d)===this.b},
$S:34}
A.flN.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=A.afe(d)
for(w=this.a*1.6,v=this.b,u=p.a,t=p.b,s=p.c,r=0;r<7;++r){q=D.k.F(w+r/7,1)
v.j_(new A.L(u+Math.sin(r*2.1)*q*1.4,t+(q*2.4-q*q*6.5),s+(1+q*2.5)),0.2,e,3,6,0.9)}},
$S:1794}
A.flM.prototype={
$1(d){return this.a.e.h(0,d.a)!=null},
$S:z+17}
A.cfj.prototype={
$1(d){return d.a===this.a},
$S:z+38}
A.cfk.prototype={
$1(d){return d.a===this.a},
$S:z+1}
A.cfg.prototype={
$1(d){return this.a.uM(0,d).c.toLowerCase()},
$S:13}
A.cfl.prototype={
$1(d){var w
if(!this.a.e.t(0,d.a)){w=d.b
w=w==="valve"||D.a.a0(w,"hose")}else w=!1
return w},
$S:z+1}
A.cfm.prototype={
$1(d){var w=this.a,v=d.a
return w.e.t(0,v)&&w.bds(v)>0},
$S:z+1}
A.cfn.prototype={
$1(d){return d.a},
$S:z+15}
A.cfo.prototype={
$1(d){return d.a},
$S:z+15}
A.cfh.prototype={
$1(d){return this.a.e.t(0,d.a)},
$S:z+1}
A.cfi.prototype={
$1(d){var w=this.a,v=d.a
return w.bds(v)<=0||!w.e.t(0,v)},
$S:z+1}
A.fki.prototype={
$1(d){var w=this.a
w.b=0
w.e5(new A.L(d,8,0),new A.L(d,8,1.6),0.5,B.JX,0.7,10)},
$S:6}
A.fkg.prototype={
$1(d){var w,v,u,t,s,r,q=C.a([],x.o)
for(w=d.length,v=this.a,u=v.a,t=v.b,v=v.c,s=0;s<d.length;d.length===w||(0,C.K)(d),++s){r=d[s]
q.push(new A.L(r.a+u,r.b+t,r.c+v))}return q},
$S:z+41}
A.fka.prototype={
$3$r(d,e,f){var w=this.a,v=this.b.c
v===$&&C.c()
w.b=9100+D.d.bd(v.c,new A.fkd(d))
w.d=0.32
w.aGH(e,f,D.b0,!1,!0,0,8)
w.d=1},
$2(d,e){return this.$3$r(d,e,1.2)},
$S:z+54}
A.fkd.prototype={
$1(d){return d.a===this.a},
$S:z+1}
A.fkb.prototype={
$3(d,e,f){var w=this.a,v=this.b.c
v===$&&C.c()
w.b=9100+D.d.bd(v.c,new A.fkc(d))
w.d=0.32
w.cM(e,f,D.b0)
w.d=1},
$S:z+43}
A.fkc.prototype={
$1(d){return d.a===this.a},
$S:z+1}
A.fkh.prototype={
$3(d,e,f){var w,v,u,t=this,s=t.a,r=s.c
r===$&&C.c()
w=D.d.cI(r.c,d)
r=d.c
v=s.e
u=d.a
if(v.t(0,u))s="Fitted."
else{s=s.b?"":d.e
s="A spot for the "+r.toLowerCase()+". "+s}t.b.n(0,9100+w,new A.da(r,s,e,26))
if(t.c&&!v.t(0,u)&&t.d.length!==0)t.e.push(new A.ub(e.af(0,B.fuh),f,D.fh))},
$S:z+44}
A.fk7.prototype={
$0(){return this.a.$3(this.b.a,new A.L(this.c-10,9,2.4),B.a7t)},
$S:0}
A.fk8.prototype={
$0(){return this.a.$3(this.b.a,new A.L(this.c-8,9,2.4),B.a7t)},
$S:0}
A.fk9.prototype={
$0(){return this.a.$3(this.b.a,new A.L(this.c+8,9,2.4),B.a7t)},
$S:0}
A.fke.prototype={
$4(d,e,f,g){var w,v,u,t,s=this
if(D.d.bd(s.a,new A.fkf(d))<0||!s.b.e.t(0,d))return
w=s.b.f.h(0,d)
v=(w==null?0:w)>=1
w=s.c
u=9260+g
w.b=u
t=v?e:e.af(0,f.aK(0,1.7))
w.e5(t.aC(0,f.aK(0,0.6)),t.af(0,f.aK(0,0.6)),1.12,B.p9,0.35,8)
w.yS(t.aC(0,f.aK(0,0.62)),t.aC(0,f.aK(0,0.5)),1.2,0.5,B.Ve,0.2,8)
w=v?"Tight.":"Loose. Tap it with the wrench to tighten it."
s.d.n(0,u,new A.da("Slip nut",w,e,10))},
$S:z+45}
A.fkf.prototype={
$1(d){return d.a===this.a},
$S:z+1}
A.fA5.prototype={
$1(d){var w,v=this
A:{if("vhot"===d||"hhot"===d){w=new A.L(v.a-8,9,2)
break A}if("vcold"===d||"hcold"===d){w=new A.L(v.a+8,9,2)
break A}if("tvalve"===d||"those"===d){w=new A.L(v.b-10,9,2)
break A}if("bolts"===d){w=new A.L(v.b,2,17)
break A}if("faucet"===d){w=new A.L(v.a,30,8)
break A}if("tail"===d){w=new A.L(v.a,22,8)
break A}if("trap"===d){w=new A.L(v.a,24.7,8)
break A}w=new A.L(v.a+8.9,23.6,8)
break A}return w},
$S:z+46}
A.fA4.prototype={
$1(d){return d.a===this.a},
$S:z+1}
A.edZ.prototype={
$0(){var w=this.a
w.z=this.b
w.Q=this.c},
$S:0}
A.ee_.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.edY(w))},
$S:0}
A.edY.prototype={
$0(){return this.a.z=null},
$S:0}
A.edS.prototype={
$0(){return this.a.y=0},
$S:0}
A.ee0.prototype={
$1(d){return d.a===this.a},
$S:z+1}
A.edK.prototype={
$0(){return this.a.y=this.b},
$S:0}
A.edL.prototype={
$0(){var w=this.a
w.acm()
w.y=this.b},
$S:0}
A.edM.prototype={
$1(d){return this.a.c25()},
$S:8}
A.edR.prototype={
$1(d){var w,v=null,u=this.a,t=u.e
t===$&&C.c()
w=t.c
w===$&&C.c()
t=C.d("The "+w.b.toLowerCase()+" is finished and nothing leaks.\n\nMistakes: "+t.w+"\n\nThe next job is different.",v,v,v,v,v,v,B.a6u,v,v,v)
return C.eh(C.a([C.bK(!1,B.aPk,v,v,!0,v,v,new A.edP(d),v,v),C.bJ(B.fcu,new A.edQ(u,d),v)],x.p),v,v,E.mN,t,v,v,v,v,B.fe3,v)},
$S:19}
A.edP.prototype={
$0(){C.a5(this.a,!1).N(null)
return null},
$S:0}
A.edQ.prototype={
$0(){C.a5(this.b,!1).N(null)
this.a.aVy()},
$S:0}
A.edX.prototype={
$0(){var w,v,u=this.a
u.d=D.o.F(Date.now(),1e5)
w=u.gCg(0)
v=u.e
v===$&&C.c()
u.e=A.fNK(v.b,w,null)
u.x=""
u.as=!1
u.z=null
u.y=0
u.acm()},
$S:0}
A.edO.prototype={
$0(){var w=this.a
return w.m(new A.edN(w,this.b,this.c))},
$S:0}
A.edN.prototype={
$0(){var w=this.a
w.x=this.b?"":this.c
w.acm()},
$S:0}
A.ee1.prototype={
$1(d){var w=this.a.e
w===$&&C.c()
return w.e.t(0,d.a)},
$S:z+1}
A.ee5.prototype={
$0(){return this.a.bXu(this.b)},
$S:0}
A.ee3.prototype={
$1(d){return d<=5},
$S:34}
A.ee2.prototype={
$1(d){var w=this.a,v=w.e
v===$&&C.c()
return A.i_R(v,w.w.gu_()/1000)},
$S:z+6}
A.ee4.prototype={
$0(){return this.b.cry(this.a.a)},
$S:0}
A.edW.prototype={
$1(d){var w,v,u,t,s,r,q,p=null,o=this.a,n=o.e
n===$&&C.c()
w=x.p
n=C.a([B.fpe,D.at,C.d("Mistakes "+n.w,p,p,p,p,p,p,B.In,p,p,p),D.S],w)
v=o.e.c
v===$&&C.c()
v=v.c
u=v.length
t=0
for(;t<u;++t){s=v[t]
r=D.c.j(0.05)
q=new C.aV(12,12)
n.push(C.p(p,new C.x((o.e.e.t(0,s.a)?"\u2705":"\ud83d\udd27")+" "+s.c,p,B.ePN,p,p,p,p,p,p,p,p,p),D.f,p,p,new C.o(r,p,p,new C.bp(q,q,q,q),p,p,D.n),p,p,p,D.eO,D.bR,p,p,p))}n.push(D.ao)
n.push(B.f4v)
n.push(D.P)
n.push(C.A(C.a([B.btk,C.auj(p,p,p,p,!1,D.y,p,p,p,p,p,p,new A.edU(o,d),p,p,p,p,p,p,p,p,o.e.b)],w),D.m,p,D.e,D.j,0,p,p))
n.push(C.bJ(B.aPm,new A.edV(o,d),p))
return C.bm(!0,C.cB(n,p,D.bU,p,p,D.ah,!0),!0,!1,D.ag,!0,!0)},
$S:29}
A.edU.prototype={
$1(d){var w=this.a
w.m(new A.edT(w,d))
C.a5(this.b,!1).N(null)},
$S:9}
A.edT.prototype={
$0(){var w=this.a,v=w.e
v===$&&C.c()
v.b=this.b
w.acm()},
$S:0}
A.edV.prototype={
$0(){C.a5(this.b,!1).N(null)
this.a.aVy()},
$S:0}
A.fIl.prototype={
$1(d){return d.a===this.a},
$S:z+20}
A.ckb.prototype={
$1(d){return d.b==="switch"},
$S:z+2}
A.cki.prototype={
$1(d){return!this.a.y.t(0,d)},
$S:34}
A.ckj.prototype={
$1(d){var w=this.a
return w.x.ah(0,d)&&w.z.t(0,d)},
$S:34}
A.ckk.prototype={
$1(d){var w=$.Gd()[this.b],v=!1
if(w>=d)if(w<=d+48){w=this.a.Q.h(0,d)
w=(w==null?null:w.a)===!0}else w=v
else w=v
return w},
$S:34}
A.ckl.prototype={
$1(d){return this.a.Q.h(0,d).c.t(0,this.b)},
$S:34}
A.ckn.prototype={
$1(d){var w,v=J.e0(6,x.S)
for(w=0;w<6;++w)v[w]=w
return D.d.d9(v,new A.ckm(this.a,d))},
$S:34}
A.ckm.prototype={
$1(d){return this.a.c.t(0,this.b*10+d)},
$S:34}
A.cka.prototype={
$1(d){var w=this.a.Q.h(0,d)
return(w==null?null:w.a)===!0},
$S:34}
A.ck8.prototype={
$1(d){return!A.kX(d).c},
$S:34}
A.ck9.prototype={
$1(d){var w=this.a.anQ(A.kX(d).d.a)
return(w==null?null:w.b.t(0,d))===!0},
$S:34}
A.ckg.prototype={
$1(d){return d.c},
$S:z+5}
A.ckh.prototype={
$1(d){return d.d},
$S:z+5}
A.ckc.prototype={
$1(d){return d.d},
$S:z+5}
A.ckd.prototype={
$1(d){var w=this.a.Q.h(0,d)
return(w==null?null:w.e)===!0},
$S:34}
A.cke.prototype={
$1(d){return d.a===this.a},
$S:z+9}
A.cko.prototype={
$2(d,e){return e===this.a},
$S:439}
A.ckf.prototype={
$1(d){return d.c===this.a},
$S:z+2}
A.eil.prototype={
$0(){var w=this.a
w.ax=this.b
w.ay=this.c},
$S:0}
A.eim.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.eik(w))},
$S:0}
A.eik.prototype={
$0(){return this.a.ax=null},
$S:0}
A.ehA.prototype={
$0(){return this.a.CW=!0},
$S:0}
A.ehB.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.ehz(w))},
$S:11}
A.ehz.prototype={
$0(){return this.a.CW=!1},
$S:0}
A.ehC.prototype={
$1(d){return this.a.bLd()},
$S:8}
A.ehD.prototype={
$1(d){return this.a.c2a()},
$S:8}
A.ehL.prototype={
$0(){return this.a.Q=-1},
$S:0}
A.ehE.prototype={
$0(){return this.a.Q=-1},
$S:0}
A.ei2.prototype={
$0(){var w=this.a
w.Q=this.b
w.z=w.at=""
w.ch=!1},
$S:0}
A.ehM.prototype={
$0(){var w=this.a
w.Q=-1
w.at=""},
$S:0}
A.eih.prototype={
$0(){return this.a.as=0},
$S:0}
A.eii.prototype={
$0(){return this.a.z=""},
$S:0}
A.eij.prototype={
$0(){return this.a.as=this.b},
$S:0}
A.eif.prototype={
$0(){return this.a.z=""},
$S:0}
A.eig.prototype={
$0(){return this.a.as=2000+this.b},
$S:0}
A.eie.prototype={
$0(){return this.a.z=""},
$S:0}
A.eia.prototype={
$1(d){return d.a===this.a},
$S:z+9}
A.eib.prototype={
$0(){return this.a.as=5000+this.b*100+this.c},
$S:0}
A.eic.prototype={
$0(){var w=this.a
w.at=""
w.as=0},
$S:0}
A.eid.prototype={
$0(){return this.a.as=5000+this.b*100+this.c},
$S:0}
A.ein.prototype={
$0(){var w=this.b,v=D.d.t(B.GG,w.z),u=this.a.a
if(v)w.aZR(u)
else w.aZT(u)},
$S:0}
A.ehK.prototype={
$1(d){var w=null
return C.eh(C.a([C.bK(!1,B.fg_,w,w,!0,w,w,new A.ehI(d),w,w),C.bJ(D.IE,new A.ehJ(this.a,d),w)],x.p),w,w,E.mN,B.f5D,w,w,w,w,B.fcS,w)},
$S:19}
A.ehI.prototype={
$0(){C.a5(this.a,!1).N(null)
return null},
$S:0}
A.ehJ.prototype={
$0(){C.a5(this.b,!1).N(null)
this.a.av9(!0)},
$S:0}
A.ehH.prototype={
$1(d){var w,v=null,u=this.a,t=u.d
t===$&&C.c()
w=t.c
w===$&&C.c()
t=C.d("The "+w.toLowerCase()+" is built, wired, painted and tested.\n\nMistakes: "+t.f+"\nShocks: "+t.r+"\nLives left: "+t.e+"\n\nEvery job is a little different. Ready for another one?",v,v,v,v,v,v,B.a6u,v,v,v)
return C.eh(C.a([C.bK(!1,B.fq3,v,v,!0,v,v,new A.ehF(d),v,v),C.bJ(B.fcL,new A.ehG(u,d),v)],x.p),v,v,E.mN,t,v,v,v,v,B.fkk,v)},
$S:19}
A.ehF.prototype={
$0(){C.a5(this.a,!1).N(null)
return null},
$S:0}
A.ehG.prototype={
$0(){C.a5(this.b,!1).N(null)
this.a.aWB()},
$S:0}
A.ehN.prototype={
$0(){var w,v,u
if(!this.b)this.a.e=D.o.F(Date.now(),1e5)
w=this.a
v=w.gCg(0)
u=w.d
u===$&&C.c()
w.d=A.fOa(null,null,u.b,v)
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
A.ei0.prototype={
$1(d){return new C.J(d,new A.ei1(),d.$ti.k("J<aj.E,n>")).aH(0,", ")},
$S:1795}
A.ei1.prototype={
$1(d){return A.kX(d).b},
$S:76}
A.ehO.prototype={
$1(d){var w=this.a.d
w===$&&C.c()
return!w.x.ah(0,d.a)},
$S:z+2}
A.ehP.prototype={
$1(d){var w=this.a.d
w===$&&C.c()
return!w.z.t(0,d.a)},
$S:z+2}
A.ehQ.prototype={
$1(d){var w=this.a.d
w===$&&C.c()
return!w.y.t(0,d)},
$S:34}
A.ehT.prototype={
$1(d){return!d.a},
$S:z+5}
A.ehU.prototype={
$1(d){return d.b<3},
$S:z+5}
A.ehV.prototype={
$1(d){return!d.c},
$S:z+5}
A.ehW.prototype={
$1(d){return!d.d},
$S:z+5}
A.ehX.prototype={
$1(d){return!d.c},
$S:z+5}
A.ehY.prototype={
$1(d){var w=this.a.d
w===$&&C.c()
w=w.at.h(0,d.a)
w=w==null?null:w.a
return w!==d.b},
$S:z+2}
A.ehZ.prototype={
$1(d){return d.a},
$S:z+51}
A.ei_.prototype={
$1(d){var w=this.a.d
w===$&&C.c()
w=w.at.h(0,d.a)
w=w==null?null:w.b.c
return(w==null?0:w)<2},
$S:z+2}
A.ehR.prototype={
$1(d){var w=d.b
if(w==="outlet"||w==="gfci"){w=this.a.d
w===$&&C.c()
w=w.at.h(0,d.a)
w=(w==null?null:w.c)!==!0}else w=!1
return w},
$S:z+2}
A.ehS.prototype={
$1(d){return d.b==="fan"},
$S:z+2}
A.eiE.prototype={
$0(){return this.a.caO(this.b)},
$S:0}
A.eiG.prototype={
$0(){var w=this.a
if(w.Q>=0)w.av8()
else{w.m(new A.eis(w))
w.b15()}},
$S:0}
A.eis.prototype={
$0(){return this.a.as=0},
$S:0}
A.eiF.prototype={
$1(d){var w=this.a,v=w.d
v===$&&C.c()
return A.i05(v,w.w.gu_()/1000,w.x)},
$S:z+6}
A.eiv.prototype={
$0(){var w=this.a,v=w.d
v===$&&C.c()
return w.ko(v.aGA())},
$S:0}
A.eiw.prototype={
$0(){var w=this.a
return w.m(new A.eiu(w,this.b))},
$S:0}
A.eiu.prototype={
$0(){var w,v=this.b.b
v.f=!v.f
v=this.a
w=v.d
w===$&&C.c()
v.r=A.Ci(w,new A.vO(v.z,v.Q,!1))},
$S:0}
A.eix.prototype={
$0(){var w=this.a
return w.m(new A.eit(w,this.b))},
$S:0}
A.eit.prototype={
$0(){var w,v=this.b.b
v.e=!v.e
v=this.a
w=v.d
w===$&&C.c()
v.r=A.Ci(w,new A.vO(v.z,v.Q,!1))},
$S:0}
A.eiH.prototype={
$0(){var w=this.a
return w.m(new A.eir(w,this.b))},
$S:0}
A.eir.prototype={
$0(){var w,v=this.a
v.y=this.b
v.z=""
w=v.d
w===$&&C.c()
v.r=A.Ci(w,new A.vO("",v.Q,!1))},
$S:0}
A.eiI.prototype={
$0(){var w=this.a
return w.m(new A.eiq(w))},
$S:0}
A.eiq.prototype={
$0(){var w=this.a,v=w.d
v===$&&C.c()
v.aD1()
w.y=2
w.z=""
w.r=A.Ci(w.d,new A.vO("",w.Q,!1))
w.A1("The boxes, the cable and the walls are done. Now the wiring: pick an Outlet or a Switch from the tray, then tap its box on the wall.",!0)},
$S:0}
A.eiJ.prototype={
$0(){var w=this.a
return w.m(new A.eip(w,this.b))},
$S:0}
A.eip.prototype={
$0(){var w,v=this.a,u=this.b.a,t=v.z===u?"":u
v.z=t
v.as=0
w=v.d
w===$&&C.c()
v.r=A.Ci(w,new A.vO(t,v.Q,!1))
if(v.z.length!==0)v.clo(u)},
$S:0}
A.eiK.prototype={
$0(){var w=this.a,v=w.d
v===$&&C.c()
return w.ko(v.cKD())},
$S:0}
A.eiL.prototype={
$1(d){return!this.a.b.b.iL(0,d.a)},
$S:z+11}
A.eiM.prototype={
$0(){var w=this.a
return w.m(new A.eio(w,this.b,this.c))},
$S:0}
A.eio.prototype={
$0(){var w,v=this,u=v.c,t=u.a
if(v.b.b.b.iL(0,t)){v.a.ava("That wire is already fastened. Tap the wire in the 3D view to take it off.")
return}w=v.a
if(w.at===t)t=""
w.at=t
if(t.length!==0)w.A1(u.b+": now tap the screw it belongs on, or press the matching button below.",!0)},
$S:0}
A.eiy.prototype={
$1(d){return!this.a.b.b.ah(0,d.a)},
$S:z+9}
A.eiz.prototype={
$0(){var w=this.a
return w.aZQ(w.Q,this.b.a)},
$S:0}
A.eiA.prototype={
$0(){var w=this.a,v=w.d
v===$&&C.c()
return w.ko(v.beO(w.Q))},
$S:0}
A.eiB.prototype={
$0(){var w=this.a,v=w.d
v===$&&C.c()
return w.ko(v.cON(w.Q))},
$S:0}
A.eiC.prototype={
$0(){var w=this.a,v=w.d
v===$&&C.c()
return w.ko(v.b9J(w.Q))},
$S:0}
A.eiD.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.cPN(v.Q)
v.ko(w)
if(w.a)v.av8()},
$S:0}
A.ei9.prototype={
$1(d){return new C.e1(new A.ei8(this.a),null)},
$S:20}
A.ei8.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=C.aI(d,l,x.w).w,j=this.a,i=j.d
i===$&&C.c()
w=i.c
w===$&&C.c()
v=x.p
i=C.a([C.d("Job: "+w,l,l,l,l,l,l,D.du,l,l,l),D.at,C.d("Mistakes "+i.f+" \xb7 Shocks "+i.r+" \xb7 Lives "+i.e,l,l,l,l,l,l,B.In,l,l,l),D.S,B.fgx,D.ao],v)
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
i.push(C.p(l,new C.x(o+" "+n+" at "+p.b+m,l,D.rl,l,l,l,l,l,l,l,l,l),D.f,l,l,new C.o(s,l,new C.bP(q,q,q,q),new C.bp(r,r,r,r),l,l,D.n),l,l,l,D.eO,D.bR,l,l,l))}i.push(D.S)
i.push(C.A(C.a([B.buj,C.auj(l,l,l,l,!1,D.y,l,l,l,l,l,l,new A.ei5(j,e),l,l,l,l,l,l,l,l,j.d.b)],v),D.m,l,D.e,D.j,0,l,l))
i.push(D.ao)
i.push(C.A(C.a([C.D(C.dT(B.f6L,new A.ei6(j,d),l),1),D.ab,C.D(C.bJ(B.aPm,new A.ei7(j,d),l),1)],v),D.m,l,D.e,D.j,0,l,l))
return C.bm(!0,new C.cU(new C.aY(0,1/0,0,k.a.b*0.8),C.cB(i,l,D.bU,l,l,D.ah,!0),l),!0,!1,D.ag,!0,!0)},
$S:89}
A.ei5.prototype={
$1(d){var w=this.a,v=w.d
v===$&&C.c()
v.b=d
for(v=v.at,v=new C.dt(v,v.r,v.e);v.C();)v.d.b.r=d
this.b.$1(new A.ei3())
w.m(new A.ei4())},
$S:9}
A.ei3.prototype={
$0(){},
$S:0}
A.ei4.prototype={
$0(){},
$S:0}
A.ei6.prototype={
$0(){C.a5(this.b,!1).N(null)
this.a.av9(!0)},
$S:0}
A.ei7.prototype={
$0(){C.a5(this.b,!1).N(null)
this.a.aWB()},
$S:0}
A.fdW.prototype={
$1(d){var w=this.a,v=d.a
return w>v[0]&&w<v[1]},
$S:704}
A.fdX.prototype={
$1(d){var w=this.a,v=d.a
return w>v[2]&&w<v[3]},
$S:704}
A.fkm.prototype={
$1(d){return 5000+this.a.a*100+d},
$S:74}
A.fkn.prototype={
$1(d){return 3000+this.a.a},
$S:74}
A.fko.prototype={
$1(d){return 2000+this.a.a},
$S:74}
A.fkr.prototype={
$5$col$round(d,e,f,g,h){var w=this.a
w.b=d
w.d=0.5
w.e=0.9
if(h)w.pi(e.aC(0,B.w6),e.af(0,B.w6),f.a/2,g,14)
else w.cM(e,f,g)
w.e=0
w.d=1},
$3(d,e,f){return this.$5$col$round(d,e,f,D.b0,!1)},
$4$round(d,e,f,g){return this.$5$col$round(d,e,f,D.b0,g)},
$4$col(d,e,f,g){return this.$5$col$round(d,e,f,g,!1)},
$S:z+52}
A.fkp.prototype={
$3(d,e,f){return F.aOA(d,e,0,f+this.a.a*5)},
$S:319}
A.fkq.prototype={
$0(){var w,v=this.a
if(v.c)w="A place in the ceiling for a "+(v.e==="fan"?"fan (needs a fan-rated box)":"light")+"."
else w="A place on the wall at "+(v.e==="switch"?"switch height, about 48 inches from the floor":"outlet height, about 16 inches from the floor")+"."
return new A.da(v.b,w,A.a1E(v,B.a7q),26)},
$S:z+53}
A.fAp.prototype={
$1(d){return d.e==="fan"},
$S:z+20}
A.fAq.prototype={
$1(d){return d.b==="light"},
$S:z+2}
A.cnx.prototype={
$1(d){return d.a===this.a&&!d.c},
$S:z+7}
A.cnt.prototype={
$1(d){return d.a===B.YK},
$S:z+7}
A.cnv.prototype={
$1(d){return d.c},
$S:z+7}
A.cnw.prototype={
$1(d){return d.c},
$S:z+7}
A.cnu.prototype={
$1(d){return B.vz.h(0,d.a).e===this.a&&!d.c},
$S:z+7}
A.ek8.prototype={
$0(){var w=this.a
w.z=this.b
w.Q=this.c},
$S:0}
A.ek9.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.ek7(w))},
$S:0}
A.ek7.prototype={
$0(){return this.a.z=null},
$S:0}
A.ejY.prototype={
$0(){return this.a.y=0},
$S:0}
A.ek2.prototype={
$0(){return this.a.as=!0},
$S:0}
A.ek3.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.ek1(w))},
$S:11}
A.ek1.prototype={
$0(){return this.a.as=!1},
$S:0}
A.ek4.prototype={
$0(){var w=this.a,v=w.d
v===$&&C.c()
w.r=A.af1(v.d)
w.y=this.b},
$S:0}
A.ek5.prototype={
$1(d){return this.a.caV()},
$S:8}
A.ek6.prototype={
$1(d){return this.a.c2h()},
$S:8}
A.ek0.prototype={
$1(d){var w=null
return C.eh(C.a([C.bJ(B.fdZ,new A.ek_(this.a,d),w)],x.p),w,w,E.mN,B.fd7,w,w,w,w,B.fj6,w)},
$S:19}
A.ek_.prototype={
$0(){C.a5(this.b,!1).N(null)
this.a.auz()},
$S:0}
A.ejX.prototype={
$1(d){var w=null,v=this.a,u=v.d
u===$&&C.c()
u=C.d("Every problem on the customer's list is fixed.\n\nMistakes: "+u.f+"\nShocks: "+u.r+"\nLives left: "+u.e+"\n\nThe next call will have different problems.",w,w,w,w,w,w,B.a6u,w,w,w)
return C.eh(C.a([C.bK(!1,B.aPk,w,w,!0,w,w,new A.ejV(d),w,w),C.bJ(B.ffc,new A.ejW(v,d),w)],x.p),w,w,E.mN,u,w,w,w,w,B.fln,w)},
$S:19}
A.ejV.prototype={
$0(){C.a5(this.a,!1).N(null)
return null},
$S:0}
A.ejW.prototype={
$0(){C.a5(this.b,!1).N(null)
this.a.auz()},
$S:0}
A.ejZ.prototype={
$0(){var w,v,u=this.a
u.e=D.o.F(Date.now(),1e5)
w=u.gCg(0)
v=u.d
v===$&&C.c()
w=A.h4k(v.b,w)
u.d=w
u.r=A.af1(w.d)
u.at=!1
u.z=null
u.y=0},
$S:0}
A.ekl.prototype={
$0(){return this.a.cv2(this.b)},
$S:0}
A.ekh.prototype={
$1(d){return d<=5},
$S:34}
A.ekg.prototype={
$1(d){var w=this.a,v=w.d
v===$&&C.c()
return A.hcB(v.d,w.w.gu_()/1000)},
$S:z+6}
A.eki.prototype={
$1(d){return!d.c},
$S:z+7}
A.ekj.prototype={
$1(d){return B.vz.h(0,d.a).a},
$S:z+36}
A.ekk.prototype={
$0(){var w=this.a
return w.m(new A.ekf(w,this.b))},
$S:0}
A.ekf.prototype={
$0(){return this.a.x=this.b},
$S:0}
A.eke.prototype={
$1(d){return new C.e1(new A.ekd(this.a),null)},
$S:20}
A.ekd.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=this.a,j=k.d
j===$&&C.c()
w=x.p
j=C.a([B.fbB,D.at,C.d("Mistakes "+j.f+" \xb7 Shocks "+j.r+" \xb7 Lives "+j.e,l,l,l,l,l,l,B.In,l,l,l),D.S],w)
v=k.d.c
v===$&&C.c()
u=v.length
t=0
for(;t<v.length;v.length===u||(0,C.K)(v),++t){s=v[t]
r=D.c.j(0.05)
q=new C.aV(14,14)
p=new C.az(s.c?D.bc.j(0.6):D.bF,1,D.r,-1)
o=s.c?"\u2705":"\ud83d\udd27"
n=B.vz.h(0,s.a).a
m=s.c?D.ay:D.c
j.push(C.p(l,new C.x(o+" "+n,l,new C.F(!0,m,l,l,l,l,13.5,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l),l,l,l,l,l,l,l,l,l),D.f,l,l,new C.o(r,l,new C.bP(p,p,p,p),new C.bp(q,q,q,q),l,l,D.n),l,l,l,D.cG,D.bk,l,l,l))}j.push(D.ao)
j.push(B.fgH)
j.push(D.P)
j.push(C.A(C.a([B.btj,C.auj(l,l,l,l,!1,D.y,l,l,l,l,l,l,new A.ekb(k,e),l,l,l,l,l,l,l,l,k.d.b)],w),D.m,l,D.e,D.j,0,l,l))
j.push(C.bJ(B.fjw,new A.ekc(k,d),l))
return C.bm(!0,C.cB(j,l,D.bU,l,l,D.ah,!0),!0,!1,D.ag,!0,!0)},
$S:89}
A.ekb.prototype={
$1(d){var w=this.a.d
w===$&&C.c()
w.b=d
this.b.$1(new A.eka())},
$S:9}
A.eka.prototype={
$0(){},
$S:0}
A.ekc.prototype={
$0(){C.a5(this.b,!1).N(null)
this.a.auz()},
$S:0};(function aliases(){var w=A.aLl.prototype
w.btS=w.q})();(function installTearOffs(){var w=a._instance_0u,v=a.installInstanceTearOff,u=a._instance_1u,t=a._instance_0i
var s
w(s=A.aCb.prototype,"gYs","kH",0)
v(s,"gc1R",0,1,null,["$2$keepTour","$1"],["av5","ack"],42,0,0)
u(s,"gc1T","c1U",4)
w(s,"gcwN","cwO",10)
w(s,"gcsn","ah3",0)
w(s,"gc1S","DE",10)
w(s,"gcaI","ZQ",10)
w(s,"gca7","ZH",10)
w(s,"gbwN","bwO",10)
w(s,"gc1Y","c1Z",0)
w(s,"gciw","cix",0)
t(s,"gc1W","c1X",0)
w(s=A.ay2.prototype,"gc22","xm",0)
w(s,"gId","nQ",0)
u(s,"gIe","If",4)
w(s,"gcfD","cfE",0)
w(s,"gcuu","cuv",0)
w(s=A.aDY.prototype,"gId","nQ",0)
u(s,"gIe","If",4)
w(s,"gc23","c24",0)
w(s=A.ayh.prototype,"gId","nQ",0)
u(s,"gIe","If",4)
t(s,"gc20","c21",0)
w(s=A.aza.prototype,"gId","nQ",0)
u(s,"gIe","If",4)
w(s=A.aCG.prototype,"gc26","aWz",0)
u(s,"gc27","c28",4)
u(A.b3i.prototype,"ganR","blv",48)
w(s=A.aCN.prototype,"gbMH","aR5",0)
w(s,"gbzk","bzl",0)
w(s,"gc2b","av8",0)
u(s,"gc2d","c2e",4)
w(s=A.aCR.prototype,"gc2i","aWD",0)
u(s,"gc2j","c2k",4)})();(function inheritance(){var w=a.mixinHard,v=a.inheritMany,u=a.inherit
v(C.aC,[A.L,A.tc,A.da,A.ub,A.zk,A.Wu,A.mG,A.bOI,A.J8,A.mc,A.Xr,A.zI,A.a3n,A.BK,A.aTi,A.q8,A.Dg,A.u7,A.ps,A.aTw,A.S6,A.aTB,A.bOR,A.F9,A.jw,A.LV,A.cfp,A.El,A.n9,A.VV,A.cff,A.yo,A.pF,A.WA,A.atE,A.aRZ,A.eC,A.b3i,A.kT,A.vO,A.tZ,A.Ln,A.cns,A.ceN,A.P_,A.bOQ])
v(C.hS,[A.bUB,A.bUC,A.bUA,A.bUD,A.bUE,A.fIv,A.fIt,A.fIu,A.fIs,A.fIm,A.cl1,A.cl2,A.ckZ,A.cl_,A.eQp,A.eQo,A.eQl,A.eQm,A.eQn,A.flo,A.fIK,A.flu,A.flv,A.fls,A.flt,A.flq,A.flr,A.fjv,A.fjw,A.f7h,A.fjk,A.bO9,A.bOK,A.bOL,A.bOP,A.bOO,A.bON,A.bOM,A.e0p,A.e0n,A.e0o,A.e_s,A.e00,A.e0_,A.e_T,A.e_P,A.e_H,A.e_d,A.e_e,A.e01,A.e_g,A.e_f,A.dZV,A.dZP,A.dZQ,A.dZR,A.e08,A.e07,A.e03,A.e_y,A.dlr,A.fjy,A.fjz,A.fjA,A.fjC,A.fjD,A.fjE,A.fed,A.fjL,A.fjH,A.fjK,A.fjJ,A.dJ7,A.fAU,A.fAT,A.d1c,A.d1e,A.d1u,A.d1A,A.eK2,A.eKa,A.eKb,A.d4a,A.d4k,A.d4l,A.d4n,A.dbe,A.dbp,A.dbo,A.dbr,A.fkl,A.fkk,A.fkj,A.fjx,A.flM,A.cfj,A.cfk,A.cfg,A.cfl,A.cfm,A.cfn,A.cfo,A.cfh,A.cfi,A.fki,A.fkg,A.fka,A.fkd,A.fkb,A.fkc,A.fkh,A.fke,A.fkf,A.fA5,A.fA4,A.ee0,A.edM,A.edR,A.ee1,A.ee3,A.ee2,A.edW,A.edU,A.fIl,A.ckb,A.cki,A.ckj,A.ckk,A.ckl,A.ckn,A.ckm,A.cka,A.ck8,A.ck9,A.ckg,A.ckh,A.ckc,A.ckd,A.cke,A.ckf,A.ehC,A.ehD,A.eia,A.ehK,A.ehH,A.ei0,A.ei1,A.ehO,A.ehP,A.ehQ,A.ehT,A.ehU,A.ehV,A.ehW,A.ehX,A.ehY,A.ehZ,A.ei_,A.ehR,A.ehS,A.eiF,A.eiL,A.eiy,A.ei9,A.ei5,A.fdW,A.fdX,A.fkm,A.fkn,A.fko,A.fkr,A.fkp,A.fAp,A.fAq,A.cnx,A.cnt,A.cnv,A.cnw,A.cnu,A.ek5,A.ek6,A.ek0,A.ejX,A.ekh,A.ekg,A.eki,A.ekj,A.eke,A.ekb])
v(C.kc,[A.bUz,A.cl0,A.fmt,A.fmu,A.fmv,A.fmw,A.fmx,A.f5Y,A.e_Z,A.e_O,A.fjG,A.fjB,A.fjF,A.fjI,A.d1f,A.eK7,A.d49,A.flN,A.cko,A.ei8,A.ekd])
u(A.Ay,C.oA)
v(C.mC,[A.b3v,A.bfW])
v(C.ag,[A.atb,A.aoO,A.My,A.GN,A.a8c,A.a3E,A.az9,A.UV,A.UY,A.apK])
v(C.ah,[A.aLl,A.aCb,A.bht,A.ay2,A.aDY,A.ayh,A.aza,A.aCG,A.aCN,A.aCR])
u(A.boz,A.aLl)
v(C.j2,[A.fjl,A.e_C,A.e_D,A.e_B,A.e_E,A.e_b,A.e_K,A.e_i,A.e_j,A.e_k,A.e_l,A.e_m,A.e_h,A.e_n,A.e_q,A.e_p,A.e_r,A.e_o,A.e_S,A.e_R,A.e_U,A.e_V,A.e_W,A.e_X,A.e_Y,A.e_M,A.e_L,A.e_N,A.e_G,A.e_F,A.e_I,A.e_J,A.dZU,A.dZS,A.e_c,A.e_Q,A.e_z,A.e_A,A.dZT,A.e_0,A.e_1,A.e_2,A.e_3,A.e_4,A.e_5,A.e__,A.e_6,A.dZZ,A.e_7,A.dZY,A.e_8,A.dZX,A.e_9,A.dZW,A.e_a,A.e0e,A.e09,A.e0f,A.e06,A.e0g,A.e0h,A.e05,A.e0i,A.e04,A.e0j,A.e0k,A.e0l,A.e0m,A.e0a,A.e0b,A.e0c,A.e0d,A.e02,A.e_v,A.e_w,A.e_u,A.e_x,A.e_t,A.fkF,A.dJa,A.dJb,A.dJ9,A.dJc,A.dJ8,A.dJe,A.dJf,A.dJg,A.dJh,A.dJi,A.dJj,A.dJk,A.dJl,A.dJd,A.coG,A.coH,A.bQW,A.d1k,A.d1l,A.d1j,A.d1d,A.d1g,A.d1h,A.d1i,A.d1m,A.d1x,A.d1v,A.d1t,A.d1w,A.d1s,A.d1y,A.d1z,A.d1B,A.d1r,A.d1C,A.d1q,A.d1D,A.d1p,A.d1E,A.d1o,A.d1F,A.d1n,A.eK5,A.eK6,A.eK4,A.eJZ,A.eK_,A.eK0,A.eK1,A.eK3,A.eKe,A.eKc,A.eK9,A.eKd,A.eK8,A.d4f,A.d4g,A.d4e,A.d47,A.d4b,A.d4c,A.d4d,A.d48,A.d4q,A.d4m,A.d4j,A.d4o,A.d4i,A.d4p,A.d4h,A.dbj,A.dbk,A.dbi,A.dbd,A.dbf,A.dbg,A.dbh,A.dbs,A.dbn,A.dbq,A.dbm,A.dbl,A.c4B,A.fk7,A.fk8,A.fk9,A.edZ,A.ee_,A.edY,A.edS,A.edK,A.edL,A.edP,A.edQ,A.edX,A.edO,A.edN,A.ee5,A.ee4,A.edT,A.edV,A.eil,A.eim,A.eik,A.ehA,A.ehB,A.ehz,A.ehL,A.ehE,A.ei2,A.ehM,A.eih,A.eii,A.eij,A.eif,A.eig,A.eie,A.eib,A.eic,A.eid,A.ein,A.ehI,A.ehJ,A.ehF,A.ehG,A.ehN,A.eiE,A.eiG,A.eis,A.eiv,A.eiw,A.eiu,A.eix,A.eit,A.eiH,A.eir,A.eiI,A.eiq,A.eiJ,A.eip,A.eiK,A.eiM,A.eio,A.eiz,A.eiA,A.eiB,A.eiC,A.eiD,A.ei3,A.ei4,A.ei6,A.ei7,A.fkq,A.ek8,A.ek9,A.ek7,A.ejY,A.ek2,A.ek3,A.ek1,A.ek4,A.ek_,A.ejV,A.ejW,A.ejZ,A.ekl,A.ekk,A.ekf,A.eka,A.ekc])
v(C.au,[A.bgx,A.b4N,A.AS,A.a5J])
u(A.qP,C.m_)
w(A.aLl,C.c8)})()
C.jR(b.typeUniverse,JSON.parse('{"atb":{"ag":[],"r":[]},"Ay":{"aB":[]},"b3v":{"aB":[]},"boz":{"ah":["atb"]},"aoO":{"ag":[],"r":[]},"aCb":{"ah":["aoO"]},"bgx":{"au":[],"r":[]},"bfW":{"aB":[]},"GN":{"ag":[],"r":[]},"a8c":{"ag":[],"r":[]},"a3E":{"ag":[],"r":[]},"az9":{"ag":[],"r":[]},"My":{"ag":[],"r":[]},"bht":{"ah":["My"]},"b4N":{"au":[],"r":[]},"AS":{"au":[],"r":[]},"ay2":{"ah":["GN"]},"aDY":{"ah":["a8c"]},"ayh":{"ah":["a3E"]},"aza":{"ah":["az9"]},"a5J":{"au":[],"r":[]},"UV":{"ag":[],"r":[]},"aCG":{"ah":["UV"]},"UY":{"ag":[],"r":[]},"aCN":{"ah":["UY"]},"apK":{"ag":[],"r":[]},"aCR":{"ah":["apK"]}}'))
var y={g:"A shut-off valve goes on the pipe that comes out of the wall.",x:"Fasten the bare copper ground to the GREEN screw.",s:"Pick a paint colour above to change this wall.",E:"Switch the power on and flip the wall switch.",j:"The bare copper ground wire only goes on the GREEN screw.",u:"The gold screws are BRASS. They are for the HOT wire (black).",o:"The white-silver screws are NICKEL. They are for the NEUTRAL wire (white).",r:"Turn the breaker OFF and test that the wires are dead."}
var x=(function rtii(){var w=C.ax
return{l:w("bq<n,n>"),M:w("eV<n>"),W:w("aRZ"),F:w("qP"),O:w("P<w>"),c:w("P<Ln>"),_:w("P<aTi>"),D:w("P<ps>"),I:w("P<aTw>"),A:w("P<S6>"),r:w("P<mc>"),E:w("P<ub>"),Z:w("P<jw>"),g:w("P<u>"),B:w("P<pF>"),v:w("P<n9>"),h:w("P<hm>"),z:w("P<tc>"),J:w("P<+(a7D,G)>"),L:w("P<+(n,n)>"),f:w("P<+(O,O)>"),K:w("P<+(G,n)>"),Q:w("P<+(G,O,R)>"),Y:w("P<+(S6,P_,O,O)>"),V:w("P<+(O,O,O,O)>"),R:w("P<+(G,G,O,R,n)>"),a:w("P<Wu>"),X:w("P<WA>"),s:w("P<n>"),o:w("P<L>"),p:w("P<r>"),d:w("P<zI>"),G:w("P<J8>"),b:w("P<kT>"),u:w("P<R>"),n:w("P<O>"),t:w("P<G>"),U:w("P<aB?>"),w:w("iy"),P:w("cn"),q:w("da"),T:w("u"),C:w("Il"),e:w("tc"),j:w("atE"),N:w("n"),x:w("L"),k:w("a2<El>"),m:w("a2<n>"),bS:w("a2<G>"),y:w("R"),i:w("O"),S:w("G"),H:w("~")}})();(function constants(){var w=a.makeConstList
B.aST=new A.eC(!0,"The water is on and nothing leaks. Perfect job!",!1,"")
B.aSU=new A.eC(!0,"Primer and paint rolled on.",!1,"")
B.aSV=new A.eC(!1,"This call is over. Start a new one.",!1,"")
B.aSW=new A.eC(!1,"That is not a place for a sheet.",!1,"")
B.aSX=new A.eC(!0,"Sanded smooth. Wear a mask: the dust is bad to breathe.",!1,"")
B.a8p=new A.eC(!1,"There is no device here.",!1,"")
B.aSY=new A.eC(!0,"You look closely. Everything looks fine here.",!1,"")
B.aSZ=new A.eC(!1,"ZAP! You were shocked badly and it was your last life. Always turn the breaker OFF and test before you touch wires.",!0,"shock")
B.aT_=new A.eC(!0,"Paper tape pressed into the seam.",!1,"")
B.aT0=new A.eC(!0,"Unplugged.",!1,"")
B.aT1=new A.eC(!0,"Breaker OFF. It is safe to work on the wires.",!1,"")
B.aT2=new A.eC(!1,"ZAP! You were shocked badly. That was your last life: the job is over. Lesson: ALWAYS turn the breaker OFF and test the wires before you touch them.",!0,"shock")
B.aT3=new A.eC(!1,"There is nothing there.",!1,"")
B.aT4=new A.eC(!1,"The outlet is burnt. Nothing works. Pull it out and put in a new one.",!0,"")
B.aT5=new A.eC(!0,"The water is on and nothing leaks yet, but the job is not finished.",!1,"")
B.aT6=new A.eC(!0,"Sheet hung. Now screw it to the studs.",!1,"")
B.aT7=new A.eC(!0,"Hole drilled through the middle of the stud, at the cable height. Holes go in the center so a nail cannot reach the cable.",!1,"")
B.aT8=new A.eC(!0,"Plugged in. Nothing happens because the breaker is off. Turn it on to test.",!1,"")
B.aT9=new A.eC(!0,"You flipped the tripped breaker fully OFF. Fix the problem before you turn it on again.",!1,"")
B.aTa=new A.eC(!0,"Click.",!1,"")
B.aTb=new A.eC(!0,"The wires are folded back and the device is in the box. Now put the cover on.",!1,"")
B.aTc=new A.eC(!0,"Breaker OFF. The wires on this circuit are dead now. (Always test them to be sure.)",!1,"")
B.aTd=new A.eC(!1,"Nothing is wet.",!1,"")
B.aTe=new A.eC(!0,"Power is on.",!1,"")
B.aTf=new A.eC(!0,"Water OFF at the main valve. You can cut into the pipes safely now.",!1,"")
B.aTg=new A.eC(!0,"Opening cut around the box with the drywall saw. Keep it tight: the plate has to cover the edge.",!1,"")
B.aTh=new A.eC(!0,"Device pulled out of the box.",!1,"")
B.aTi=new A.eC(!0,"Screw set just below the paper, not through it.",!1,"")
B.aTj=new A.eC(!1,"ZAP! You touched a live wire. In Learn mode you are not hurt, but in real life this can kill. Switch the breaker OFF and test the wires first.",!0,"shock")
B.aTk=new A.eC(!0,"Cover on. Now you can turn the breaker on and test.",!1,"")
B.U6=new A.eC(!1,"",!1,"")
B.aTl=new A.eC(!0,"Device taken out. You can put it somewhere else, or put in a new one.",!1,"")
B.aTm=new A.eC(!0,"Breaker back ON.",!1,"")
B.aTn=new A.eC(!1,"That is not a stud.",!1,"")
B.aTo=new A.eC(!0,"Off.",!1,"")
B.aTp=new A.eC(!1,"Nothing to flip yet.",!1,"")
B.aTq=new A.eC(!0,"Wire taken off.",!1,"")
B.aTr=new A.eC(!0,"The mud is dry.",!1,"")
B.aTs=new A.eC(!0,"Breaker reset.",!1,"")
B.aTt=new A.eC(!0,"Box mounted. (Careful: this is not a fan-rated box. A fan on it could fall.)",!1,"")
B.fkT=new C.x("Tap a piece of furniture, or add one:",null,N.Su,null,null,null,null,null,null,null,null,null)
B.e1p=new C.C(D.nG,B.fkT,null)
B.aTA=new C.bI(D.a3,null,null,B.e1p,null)
B.Kl=new C.w(1,0.08627450980392157,0.10588235294117647,0.1411764705882353,D.t)
B.aWu=new C.bP(D.Y,D.Y,V.uv,D.Y)
B.aYW=new C.o(B.Kl,null,B.aWu,null,null,null,D.n)
B.flu=new C.x("\u2600\ufe0f Let it dry",null,H.z9,null,null,null,null,null,null,null,null,null)
B.b1Y=new C.cq(D.A,null,null,B.flu,null)
B.flg=new C.x("\u23e9 Skip to the wiring",null,H.z9,null,null,null,null,null,null,null,null,null)
B.b25=new C.cq(D.A,null,null,B.flg,null)
B.fai=new C.x("\ud83c\udfd7\ufe0f",null,D.ui,null,null,null,null,null,null,null,null,null)
B.b2k=new C.cq(D.A,null,null,B.fai,null)
B.b4_=new C.w(1,0.9294117647058824,0.9098039215686274,0.8627450980392157,D.t)
B.b4a=new C.w(1,0.9725490196078431,0.9647058823529412,0.9333333333333333,D.t)
B.JN=new C.w(1,0.5450980392156862,0.3686274509803922,0.20392156862745098,D.t)
B.b4k=new C.w(1,0.611764705882353,0.5568627450980392,0.4588235294117647,D.t)
B.aaH=new C.w(1,0.24705882352941178,0.5607843137254902,0.30980392156862746,D.t)
B.wB=new C.w(1,0.9450980392156862,0.9450980392156862,0.9176470588235294,D.t)
B.b4R=new C.w(1,0.9098039215686274,0.9254901960784314,0.9372549019607843,D.t)
B.b4S=new C.w(1,0.4823529411764706,0.5098039215686274,0.5450980392156862,D.t)
B.b4Z=new C.w(1,0.10588235294117647,0.4980392156862745,0.20392156862745098,D.t)
B.aaS=new C.w(1,0.7215686274509804,0.7450980392156863,0.7725490196078432,D.t)
B.DB=new C.w(1,0.5450980392156862,0.3686274509803922,0.23529411764705882,D.t)
B.aaU=new C.w(1,0.8509803921568627,0.8274509803921568,0.7725490196078432,D.t)
B.aaY=new C.w(1,0.6549019607843137,0.6784313725490196,0.7098039215686275,D.t)
B.rI=new C.w(1,0.16862745098039217,0.17647058823529413,0.2,D.t)
B.b5u=new C.w(1,0.13333333333333333,0.13725490196078433,0.14901960784313725,D.t)
B.DD=new C.w(1,0.8980392156862745,0.7529411764705882,0.4823529411764706,D.t)
B.JX=new C.w(1,0.8156862745098039,0.5098039215686274,0.27450980392156865,D.t)
B.V4=new C.w(1,0.5411764705882353,0.41568627450980394,0.2784313725490196,D.t)
B.b64=new C.w(1,0.2980392156862745,0.5450980392156862,0.2901960784313726,D.t)
B.rK=new C.w(1,0.788235294117647,0.6274509803921569,0.22745098039215686,D.t)
B.ab9=new C.w(1,0.9411764705882353,0.5411764705882353,0.1411764705882353,D.t)
B.abb=new C.w(1,0.5568627450980392,0.5843137254901961,0.6196078431372549,D.t)
B.b6t=new C.w(1,0.47843137254901963,0.35294117647058826,0.22745098039215686,D.t)
B.ky=new C.w(1,0.788235294117647,0.807843137254902,0.8392156862745098,D.t)
B.V9=new C.w(1,0.4196078431372549,0.45098039215686275,0.5019607843137255,D.t)
B.abh=new C.w(1,0.5568627450980392,0.35294117647058826,0.2901960784313726,D.t)
B.zV=new C.w(1,0.9294117647058824,0.9176470588235294,0.8784313725490196,D.t)
B.b7l=new C.w(1,0.5490196078431373,0.5764705882352941,0.6078431372549019,D.t)
B.DM=new C.w(1,0.22745098039215686,0.24705882352941178,0.2784313725490196,D.t)
B.Ve=new C.w(1,0.8980392156862745,0.8980392156862745,0.8666666666666667,D.t)
B.K6=new C.w(1,0.10588235294117647,0.11372549019607843,0.13333333333333333,D.t)
B.abv=new C.w(1,0.30980392156862746,0.6588235294117647,0.3764705882352941,D.t)
B.abw=new C.w(1,0.8509803921568627,0.803921568627451,0.7215686274509804,D.t)
B.K8=new C.w(1,0.11764705882352941,0.11764705882352941,0.12549019607843137,D.t)
B.b7I=new C.w(1,0.8862745098039215,0.8745098039215686,0.8235294117647058,D.t)
B.b7Z=new C.w(1,0.5411764705882353,0.4823529411764706,0.41568627450980394,D.t)
B.b82=new C.w(1,0.34901960784313724,0.3176470588235294,0.29411764705882354,D.t)
B.b89=new C.w(1,0.8117647058823529,0.792156862745098,0.7411764705882353,D.t)
B.Vm=new C.w(1,0.8117647058823529,0.8901960784313725,0.9176470588235294,D.t)
B.Vn=new C.w(1,0.3333333333333333,0.396078431372549,0.4823529411764706,D.t)
B.Vo=new C.w(1,0.5529411764705883,0.7843137254901961,1,D.t)
B.Vr=new C.w(1,1,0.9019607843137255,0.5019607843137255,D.t)
B.b8y=new C.w(1,0.9490196078431372,0.7607843137254902,0.10588235294117647,D.t)
B.abQ=new C.w(1,0.9490196078431372,0.9411764705882353,0.9019607843137255,D.t)
B.b8Q=new C.w(1,0.9686274509803922,0.9607843137254902,0.9333333333333333,D.t)
B.nu=new C.w(1,0.1843137254901961,0.49019607843137253,0.8823529411764706,D.t)
B.b8Z=new C.w(1,0.788235294117647,0.7176470588235294,0.6078431372549019,D.t)
B.Vu=new C.w(1,0.8901960784313725,0.6627450980392157,0.10980392156862745,D.t)
B.DT=new C.w(1,0.7137254901960784,0.7372549019607844,0.7686274509803922,D.t)
B.b9a=new C.w(1,0.22745098039215686,0.49019607843137253,0.26666666666666666,D.t)
B.uE=new C.w(1,0.9019607843137255,0.8823529411764706,0.8352941176470589,D.t)
B.b9l=new C.w(1,0.3686274509803922,0.17647058823529413,0.13725490196078433,D.t)
B.DV=new C.w(1,0.09019607843137255,0.09411764705882353,0.10588235294117647,D.t)
B.A1=new C.w(1,0.9725490196078431,0.9725490196078431,0.9568627450980393,D.t)
B.ac8=new C.w(1,0.9450980392156862,0.9568627450980393,0.9725490196078431,D.t)
B.b9K=new C.w(1,0.9019607843137255,0.9019607843137255,0.8784313725490196,D.t)
B.acf=new C.w(1,0.8941176470588236,0.9058823529411765,0.9176470588235294,D.t)
B.m0=new C.w(1,0.7686274509803922,0.6039215686274509,0.3843137254901961,D.t)
B.VD=new C.w(1,0.9450980392156862,0.7607843137254902,0.49019607843137253,D.t)
B.acn=new C.w(1,1,0.35294117647058826,0.12156862745098039,D.t)
B.bav=new C.w(1,0.5411764705882353,0.29411764705882354,0.29411764705882354,D.t)
B.VI=new C.w(1,0.9098039215686274,0.8509803921568627,0.7372549019607844,D.t)
B.A6=new C.w(1,1,0.9450980392156862,0.6588235294117647,D.t)
B.baO=new C.w(1,0.5411764705882353,0.5411764705882353,0.5176470588235295,D.t)
B.baQ=new C.w(1,0.9647058823529412,0.9568627450980393,0.9254901960784314,D.t)
B.baZ=new C.w(1,0.47843137254901963,0.23137254901960785,0.1803921568627451,D.t)
B.bb5=new C.w(1,0.6078431372549019,0.6078431372549019,0.592156862745098,D.t)
B.A8=new C.w(1,0.9568627450980393,0.9450980392156862,0.9176470588235294,D.t)
B.rU=new C.w(1,0.8862745098039215,0.23137254901960785,0.23137254901960785,D.t)
B.p9=new C.w(1,0.9490196078431372,0.9490196078431372,0.9254901960784314,D.t)
B.acy=new C.w(1,0.788235294117647,0.8117647058823529,0.8392156862745098,D.t)
B.bbl=new C.w(1,0.9294117647058824,0.9215686274509803,0.8941176470588236,D.t)
B.VQ=new C.w(1,0.8392156862745098,0.6823529411764706,0.4470588235294118,D.t)
B.acB=new C.w(1,0.9098039215686274,0.9098039215686274,0.9098039215686274,D.t)
B.bbx=new C.w(1,0.16862745098039217,0.2980392156862745,0.49411764705882355,D.t)
B.E4=new C.w(1,0.2901960784313726,0.2980392156862745,0.32941176470588235,D.t)
B.acH=new C.w(1,0.3686274509803922,0.43137254901960786,0.5176470588235295,D.t)
B.bc_=new C.w(1,0.3568627450980392,0.10196078431372549,0.09019607843137255,D.t)
B.acL=new C.w(1,0.23137254901960785,0.1843137254901961,0.14901960784313725,D.t)
B.acM=new C.w(1,0.8509803921568627,0.788235294117647,0.6588235294117647,D.t)
B.qu=new C.w(1,0.9686274509803922,0.9568627450980393,0.9254901960784314,D.t)
B.bcb=new C.w(1,0.13333333333333333,0.1450980392156863,0.16862745098039217,D.t)
B.VV=new C.w(1,0.4980392156862745,0.7215686274509804,1,D.t)
B.wM=new C.w(1,0.16470588235294117,0.1450980392156863,0.13725490196078433,D.t)
B.bci=new C.w(1,0.9450980392156862,0.9294117647058824,0.8784313725490196,D.t)
B.Kn=new C.w(1,0.796078431372549,0.8156862745098039,0.8392156862745098,D.t)
B.VY=new C.w(1,0.8980392156862745,0.7254901960784313,0.11764705882352941,D.t)
B.acV=new C.w(1,0.23137254901960785,0.3568627450980392,0.6470588235294118,D.t)
B.bcE=new C.w(1,0.7490196078431373,0.8901960784313725,1,D.t)
B.ad5=new C.w(1,0.10588235294117647,0.10588235294117647,0.11372549019607843,D.t)
B.ad6=new C.w(1,0.9490196078431372,0.9490196078431372,0.9333333333333333,D.t)
B.bdi=new C.w(1,0.6274509803921569,0.6509803921568628,0.6823529411764706,D.t)
B.bdy=new C.w(1,0.8156862745098039,0.35294117647058826,0.22745098039215686,D.t)
B.bdE=new C.w(1,0.8509803921568627,0.788235294117647,0.6274509803921569,D.t)
B.W6=new C.w(1,0.9490196078431372,0.9176470588235294,0.8274509803921568,D.t)
B.adn=new C.w(1,0.10588235294117647,0.07058823529411765,0.03529411764705882,D.t)
B.be1=new C.w(1,0.12549019607843137,0.13333333333333333,0.14901960784313725,D.t)
B.Kw=new C.w(1,0.8862745098039215,0.27058823529411763,0.35294117647058826,D.t)
B.wR=new C.w(1,0.17254901960784313,0.4196078431372549,0.8392156862745098,D.t)
B.wS=new C.w(1,0.7607843137254902,0.4627450980392157,0.22745098039215686,D.t)
B.Kz=new C.w(1,0.7254901960784313,0.7450980392156863,0.7764705882352941,D.t)
B.adG=new C.w(1,0.9686274509803922,0.9490196078431372,0.9019607843137255,D.t)
B.bf1=new C.w(1,0.2,0.21176470588235294,0.23137254901960785,D.t)
B.bf6=new C.w(1,0.7098039215686275,0.7333333333333333,0.7647058823529411,D.t)
B.bf8=new C.w(1,0.9294117647058824,0.9294117647058824,0.9098039215686274,D.t)
B.bfd=new C.w(1,0.9098039215686274,0.8941176470588236,0.8549019607843137,D.t)
B.adO=new C.w(1,0.7686274509803922,0.5411764705882353,0.11764705882352941,D.t)
B.bfl=new C.w(1,0.43529411764705883,0.7137254901960784,1,D.t)
B.bfv=new C.w(1,0.9137254901960784,0.8980392156862745,0.8549019607843137,D.t)
B.adU=new C.w(1,0.18823529411764706,0.2,0.22745098039215686,D.t)
B.KF=new C.w(1,0.9372549019607843,0.9372549019607843,0.9176470588235294,D.t)
B.adW=new C.w(0.6666666666666666,1,0.16470588235294117,0.10196078431372549,D.t)
B.bfI=new C.w(1,0.9372549019607843,0.9137254901960784,0.8627450980392157,D.t)
B.bfL=new C.w(1,0.9294117647058824,0.9019607843137255,0.8156862745098039,D.t)
B.Wl=new C.w(1,0.4196078431372549,0.24705882352941178,0.19215686274509805,D.t)
B.bfQ=new C.w(1,0.12156862745098039,0.6392156862745098,0.2627450980392157,D.t)
B.bfS=new C.w(1,0.803921568627451,0.6274509803921569,0.2,D.t)
B.KI=new C.w(1,0.3607843137254902,0.7019607843137254,1,D.t)
B.ae5=new C.w(1,0.9568627450980393,0.9568627450980393,0.9411764705882353,D.t)
B.bgt=new C.w(1,0.8431372549019608,0.8,0.6588235294117647,D.t)
B.bh2=new C.w(1,0.9019607843137255,0.8745098039215686,0.796078431372549,D.t)
B.bh3=new C.w(1,0.30980392156862746,0.6588235294117647,1,D.t)
B.bh7=new C.w(1,1,0.6196078431372549,0.6196078431372549,D.t)
B.aef=new C.w(1,0.8431372549019608,0.16470588235294117,0.16470588235294117,D.t)
B.KN=new C.w(1,0.47843137254901963,0.30980392156862746,0.1568627450980392,D.t)
B.KO=new C.w(1,0.6901960784313725,0.5411764705882353,0.3568627450980392,D.t)
B.Ww=new C.w(1,0.6078431372549019,0.8274509803921568,0.9607843137254902,D.t)
B.bhz=new C.w(1,0.48627450980392156,0.2901960784313726,0.22745098039215686,D.t)
B.bhA=new C.w(1,0.23137254901960785,0.6078431372549019,1,D.t)
B.bhI=new C.w(1,0.8509803921568627,0.8235294117647058,0.7607843137254902,D.t)
B.bhK=new C.w(1,0.29411764705882354,0.29411764705882354,0.3137254901960784,D.t)
B.Er=new C.w(1,0.4196078431372549,0.2901960784313726,0.19607843137254902,D.t)
B.ael=new C.w(1,0.13333333333333333,0.14901960784313725,0.17254901960784313,D.t)
B.bhP=new C.w(1,0.8117647058823529,0.788235294117647,0.7215686274509804,D.t)
B.bhX=new C.w(1,0.5450980392156862,0.4196078431372549,0.24705882352941178,D.t)
B.Xm=new C.Q(11,9,11,9)
B.afT=new C.Q(14,8,14,24)
B.agP=new C.Q(4,18,4,8)
B.brV=new C.Q(4,4,8,4)
B.fqq=new C.x("Practice mode (no explanations, real shocks)",null,D.ST,null,null,null,null,null,null,null,null,null)
B.btj=new C.bE(1,D.bi,B.fqq,null)
B.fmd=new C.x("Practice mode (no hints, no labels)",null,D.ST,null,null,null,null,null,null,null,null,null)
B.btk=new C.bE(1,D.bi,B.fmd,null)
B.f0k=new C.F(!0,D.aJ,null,null,null,null,18,D.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.feJ=new C.x("My House",null,B.f0k,null,null,null,null,null,null,null,null,null)
B.eUH=new C.F(!0,D.ad,null,null,null,null,12.5,null,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.f71=new C.x("5 bedrooms, 3 bathrooms. Walk in and fix what is wrong.",null,B.eUH,null,null,null,null,null,null,null,null,null)
B.cTk=w([B.feJ,D.bz,B.f71],x.p)
B.biA=new C.fl(D.ah,D.e,D.j,D.F,null,D.p,null,0,B.cTk,null)
B.btB=new C.bE(1,D.bi,B.biA,null)
B.fen=new C.x("Construction Lab",null,Q.vU,null,null,null,null,null,null,null,null,null)
B.f3P=new C.x("Wire it. Plumb it. Fix a house.",null,D.hn,null,null,null,null,null,null,null,null,null)
B.cWJ=w([B.fen,B.f3P],x.p)
B.biH=new C.fl(D.ah,D.e,D.j,D.F,null,D.p,null,0,B.cWJ,null)
B.btE=new C.bE(1,D.bi,B.biH,null)
B.flT=new C.x("Practice mode (no hints, real shocks and fires)",null,D.ST,null,null,null,null,null,null,null,null,null)
B.buj=new C.bE(1,D.bi,B.flT,null)
B.bv2=new A.a3E(null,null)
B.YI=new A.qP(0,"tripped")
B.YJ=new A.qP(1,"noHotWater")
B.YK=new A.qP(10,"wallHole")
B.YL=new A.qP(11,"clogged")
B.LX=new A.qP(2,"nutLeak")
B.LY=new A.qP(3,"pexLeak")
B.YM=new A.qP(5,"flicker")
B.YN=new A.qP(6,"burntOutlet")
B.YO=new A.qP(7,"gfciTripped")
B.YP=new A.qP(8,"runningToilet")
B.YQ=new A.qP(9,"dripFaucet")
B.bw7=new A.ps("back",0,10)
B.bw8=new A.ps("back",56,11)
B.bw9=new A.ps("left",32,9)
B.bwa=new A.ps("left",40,9)
B.bwb=new A.ps("right",32,10)
B.bwc=new A.ps("right",40,10)
B.ahV=new A.u7("tv",'Samsung Neo QLED 55"',"\ud83d\udcfa",48)
B.byR=new C.a0(63015,"MaterialIcons",!1)
B.bzk=new C.a0(63228,"MaterialIcons",!1)
B.ajV=new C.a0(983222,"MaterialIcons",!1)
B.aku=new C.a0(983775,"MaterialIcons",!1)
B.akA=new C.a0(983894,"MaterialIcons",!1)
B.bCf=new C.ae(D.eo,null,D.aJ,null,null,null)
B.fAB=new A.L(-0.4,4.2,-2.4)
B.bOm=new A.ub(B.fAB,"LIVE 120 V",D.bL)
B.bcG=new C.w(1,0.12156862745098039,0.10196078431372549,0.07058823529411765,D.t)
B.cOV=w([D.Wn,B.bcG],x.O)
B.bRK=new C.a7(D.a3,D.a7,D.x,B.cOV,null,null)
B.bT7=w(["flange","wax","toilet","bolts","valve","hosehot","hosecold","faucet","tail","trap","arm"],x.s)
B.fzn=new A.L(-57.8,-32,0)
B.b_s=new A.yo(0,"Outlet spot 1",!1,B.fzn,"low")
B.fzS=new A.L(-9.8,-32,0)
B.b_p=new A.yo(1,"Outlet spot 2",!1,B.fzS,"low")
B.fA9=new A.L(38.2,-32,0)
B.b_v=new A.yo(2,"Outlet spot 3",!1,B.fA9,"low")
B.fz3=new A.L(-25.8,0,0)
B.b_t=new A.yo(3,"Switch spot 1",!1,B.fz3,"switch")
B.fzN=new A.L(22.2,0,0)
B.b_r=new A.yo(4,"Switch spot 2",!1,B.fzN,"switch")
B.fAL=new A.L(-30,48,40)
B.b_u=new A.yo(5,"Ceiling light spot",!0,B.fAL,"light")
B.fva=new A.L(30,48,40)
B.b_q=new A.yo(6,"Ceiling fan spot",!0,B.fva,"fan")
B.tI=w([B.b_s,B.b_p,B.b_v,B.b_t,B.b_r,B.b_u,B.b_q],C.ax("P<yo>"))
B.ccl=w(["The living room has no power: find the tripped breaker in the panel and reset it.","The kitchen sink drips: pick the wrench and tighten the slip nut under the sink. (Build the house up to Fixtures to see the problems.)"],x.s)
B.fA_=new A.L(11,4.6,-6)
B.fwK=new A.L(11,5.4,-7.85)
B.fzA=new A.L(3.4,5.4,-7.85)
B.aQB=new A.L(3.4,3.4,-7.85)
B.ccn=w([B.fA_,B.fwK,B.fzA,B.aQB],x.o)
B.egr=new C.z(-9.5,4.6)
B.eiG=new C.z(-5.9,2.3)
B.eon=new C.z(8.8,4.4)
B.csl=w([B.egr,B.eiG,B.eon],x.f)
B.bwj=new A.u7("bangtv",'Beovision TV 77"',"\ud83d\udcfa",66)
B.bwh=new A.u7("sonytv",'Sony Bravia 75"',"\ud83d\udcfa",64)
B.bwd=new A.u7("lgtv",'LG OLED 65"',"\ud83d\udcfa",56)
B.bwf=new A.u7("appletv",'Apple TV 4K 50"',"\ud83d\udcfa",44)
B.bwg=new A.u7("lamp","Table lamp","\ud83d\udca1",0)
B.bwi=new A.u7("toaster","Toaster","\ud83c\udf5e",0)
B.bwe=new A.u7("hairdryer","Hair dryer","\ud83d\udc87",0)
B.a0D=w([B.bwj,B.bwh,B.bwd,B.ahV,B.bwf,B.bwg,B.bwi,B.bwe],C.ax("P<u7>"))
B.ctf=w([61,63],x.t)
B.cts=w([62,64],x.t)
B.b8r=new C.w(1,0.6039215686274509,0.30980392156862746,0.30980392156862746,D.t)
B.bhR=new C.w(1,0.30980392156862746,0.47843137254901963,0.3686274509803922,D.t)
B.cve=w([B.DB,B.acH,B.b8r,B.bhR,B.acM,D.t5],x.O)
B.asT=w([72,73,74,75],x.t)
B.epD=new C.z(-25,-15)
B.e9r=new C.z(25,-15)
B.epC=new C.z(-25,15)
B.e9q=new C.z(25,15)
B.czG=w([B.epD,B.e9r,B.epC,B.e9q],x.f)
B.cDF=w([-1.9,1.9],x.n)
B.cHo=w([y.r,"Two cables come into the box: one from the breaker panel (LINE) and one going to the light (LOAD).","Twist the two white wires together with a wire nut. A switch does not cut the neutral.",y.x,"Fasten the black wire from the panel to one BRASS screw.","Fasten the black wire that goes to the light to the other BRASS screw.","Push the switch into the box, put the plate on and test with the power on."],x.s)
B.dWg={black:0}
B.I0=new C.eV(B.dWg,1,x.M)
B.bwz=new A.mc(51,"Black wire nut: HOT",B.I0,!1,"hot")
B.dX1={white:0}
B.HZ=new C.eV(B.dX1,1,x.M)
B.bwo=new A.mc(52,"White wire nut: NEUTRAL",B.HZ,!1,"neutral")
B.dWw={ground:0}
B.RU=new C.eV(B.dWw,1,x.M)
B.bwl=new A.mc(53,"Green ground connection",B.RU,!1,"ground")
B.cHx=w([B.bwz,B.bwo,B.bwl],x.r)
B.bwA=new A.mc(51,"Black wire nut: HOT",B.I0,!1,"hot")
B.bwp=new A.mc(52,"White wire nut: NEUTRAL",B.HZ,!1,"neutral")
B.bwm=new A.mc(53,"Green ground connection",B.RU,!1,"ground")
B.cHw=w([B.bwA,B.bwp,B.bwm],x.r)
B.cHT=w(["Walnut","Blue grey","Brick red","Sage green","Sand","Charcoal"],x.s)
B.fxy=new A.L(-6.5,7.5,-7.85)
B.fxB=new A.L(-6.5,7.8,-3)
B.cIa=w([B.fxy,B.fxB],x.o)
B.b98=new C.w(1,0.9176470588235294,0.9490196078431372,0.9686274509803922,D.t)
B.bdN=new C.w(1,0.9647058823529412,0.9098039215686274,0.9098039215686274,D.t)
B.bcX=new C.w(1,0.9529411764705882,0.9215686274509803,0.7843137254901961,D.t)
B.atw=w([B.A8,B.b98,B.bdN,B.bcX],x.O)
B.cIO=w([y.r,"The cable comes in through the top of the box. Strip about 3/4 inch of insulation from each wire.","Fasten the bare copper ground wire to the GREEN screw.","Fasten the white (neutral) wire to a SILVER screw.","Fasten the black (hot) wire to a BRASS screw. Wrap each wire clockwise under its screw.","Fold the wires back and push the outlet into the box.","Put the cover plate on, then turn the power on and test."],x.s)
B.fBz=new A.L(-3.6,7.5,-7.85)
B.fxf=new A.L(-3.6,4.2,-7.85)
B.cIV=w([B.fBz,B.fxf],x.o)
B.dWf={blackLine:0,blackLoad:1}
B.aL7=new C.eV(B.dWf,2,x.M)
B.bwx=new A.mc(21,"Brass screw (top)",B.aL7,!1,"hot")
B.bwy=new A.mc(22,"Brass screw (bottom)",B.aL7,!1,"hot")
B.ahW=new A.mc(25,"Green screw: GROUND",B.RU,!1,"ground")
B.cJp=w([B.bwx,B.bwy,B.ahW],x.r)
B.fAg=new A.L(9.8,6,-7.85)
B.fwO=new A.L(9.8,7.5,-7.85)
B.fBM=new A.L(-8,7.5,-7.85)
B.fyl=new A.L(-8,1.5,-7.85)
B.cKq=w([B.fAg,B.fwO,B.fBM,B.fyl],x.o)
B.aQI=new A.L(5,1.8,-7.85)
B.fyY=new A.L(5,-0.1,-7.85)
B.fzG=new A.L(12.5,-0.1,-7.85)
B.cLp=w([B.aQI,B.fyY,B.fzG],x.o)
B.ftC=new A.L(3,3.1,-7.1)
B.aQC=new A.L(3,1.7,-7.1)
B.fzD=new A.L(3,1,-7.1)
B.fv0=new A.L(3.65,0.5,-7.1)
B.fvQ=new A.L(4.3,1,-7.1)
B.fyU=new A.L(4.3,1.8,-7.1)
B.fBO=new A.L(5,1.8,-7.1)
B.cLR=w([B.ftC,B.aQC,B.fzD,B.fv0,B.fvQ,B.fyU,B.fBO,B.aQI],x.o)
B.fBk=new A.L(0.6,11,-3.4)
B.fwf=new A.L(0.6,3.2,-3.2)
B.fB1=new A.L(0.6,2.2,-1.9)
B.fw6=new A.L(0.6,0.7,-1.5)
B.cMP=w([B.fBk,B.fwf,B.fB1,B.fw6],x.o)
B.fvr=new A.L(0,8.3,0)
B.aQl=new A.L(0,3.9,0)
B.a1i=w([B.fvr,B.aQl],x.o)
B.cOe=w([y.r,"Make sure the box is rated for a fan. A plain light box cannot carry the weight and the shaking.","Join the house ground wire to the fan ground.","Join the house white wire to the fan white wire with a wire nut.","Join the house black wire to the fan black wire with a wire nut.","Push the wires up into the box and fasten the canopy to the ceiling.",y.E],x.s)
B.fGJ=new A.F9("outlet","\ud83d\udd0c","Wall outlet","Black to brass, white to silver",D.aJ)
B.fGG=new A.F9("switch","\ud83d\udca1","Light switch","Two blacks and a wire nut",D.aW)
B.fGH=new A.F9("gfci","\ud83d\udee1\ufe0f","GFCI outlet","LINE and LOAD near water",D.bs)
B.fGK=new A.F9("fan","\ud83c\udf00","Ceiling fan","Black, white, green and a fan box",D.b7)
B.fGI=new A.F9("ptrap","\ud83e\udea0","Sink drain (P-trap)","Build a drain with a water seal",D.ct)
B.fGF=new A.F9("faucet","\ud83d\udeb0","Faucet supply lines","Hot left, cold right",D.cr)
B.fGE=new A.F9("house","\ud83c\udfd7\ufe0f","Build and fix a house","Stage by stage, then repair",D.by)
B.cOs=w([B.fGJ,B.fGG,B.fGH,B.fGK,B.fGI,B.fGF,B.fGE],C.ax("P<F9>"))
B.fAv=new A.L(-0.6,11,-3.4)
B.fwS=new A.L(-0.6,3.2,-3.2)
B.fzX=new A.L(-0.6,2.2,-1.9)
B.fC1=new A.L(-0.6,0.7,-1.5)
B.cOx=w([B.fAv,B.fwS,B.fzX,B.fC1],x.o)
B.cOS=w([0,1,2,3,4,6,7,8],x.t)
B.e0i=new A.n9("flange","flange","Toilet flange",D.T,"The flange is fixed to the floor over the drain. Everything else sits on it.",!1,0)
B.d0I=w(["flange"],x.s)
B.e0g=new A.n9("wax","wax","Wax ring",B.d0I,"The wax ring goes on the flange before the toilet. It makes the seal against sewer gas and water.",!1,0)
B.dai=w(["wax"],x.s)
B.e0d=new A.n9("toilet","toilet","Toilet",B.dai,"The toilet is lowered straight down onto the wax ring. The ring has to be there first.",!1,0)
B.d8N=w(["toilet"],x.s)
B.e0h=new A.n9("bolts","bolts","Toilet bolts",B.d8N,"The two bolts hold the toilet to the flange. Set the toilet first.",!1,2)
B.e0e=new A.n9("tvalve","valve","Toilet shut-off valve",D.T,"The shut-off valve goes on the pipe that comes out of the wall.",!0,0)
B.d8T=w(["tvalve","toilet"],x.s)
B.e0f=new A.n9("those","hosecold","Toilet supply hose",B.d8T,"The hose joins the valve to the toilet tank, so both must be there first.",!1,2)
B.aFc=new A.n9("faucet","faucet","Faucet",D.T,"The faucet goes through the hole in the counter.",!1,0)
B.aFf=new A.n9("vhot","valve","Hot shut-off valve (left)",D.T,y.g,!0,0)
B.aFd=new A.n9("vcold","valve","Cold shut-off valve (right)",D.T,y.g,!0,0)
B.d9J=w(["vhot","faucet"],x.s)
B.aFg=new A.n9("hhot","hosehot","Hot supply hose",B.d9J,"The hose joins the hot valve to the faucet, so the valve and the faucet must be there first.",!1,2)
B.d9G=w(["vcold","faucet"],x.s)
B.aFe=new A.n9("hcold","hosecold","Cold supply hose",B.d9G,"The hose joins the cold valve to the faucet, so the valve and the faucet must be there first.",!1,2)
B.aFb=new A.n9("tail","tail","Tailpiece",D.T,"The tailpiece hangs from the sink drain. It is the first piece of the drain.",!1,0)
B.d8G=w(["tail"],x.s)
B.aFh=new A.n9("trap","trap","P-trap",B.d8G,"The P-trap joins the tailpiece. Build the drain from the top down.",!1,1)
B.d8O=w(["trap"],x.s)
B.aFi=new A.n9("arm","arm","Trap arm",B.d8O,"The trap arm joins the trap and goes into the wall.",!1,1)
B.cKX=w([B.e0i,B.e0g,B.e0d,B.e0h,B.e0e,B.e0f,B.aFc,B.aFf,B.aFd,B.aFg,B.aFe,B.aFb,B.aFh,B.aFi],x.v)
B.e5J=new A.VV("bathroom","Bathroom",B.cKX,"Fit out a bathroom: a toilet and a sink with its faucet, supply hoses and drain.")
B.d2l=w([B.aFc,B.aFf,B.aFd,B.aFg,B.aFe,B.aFb,B.aFh,B.aFi],x.v)
B.e5K=new A.VV("kitchen","Kitchen",B.d2l,"Fit out a kitchen sink: the faucet, the hot and cold supplies and the drain.")
B.aui=w([B.e5J,B.e5K],C.ax("P<VV>"))
B.bwt=new A.mc(21,"LOAD hot (brass, taped)",D.I_,!0,"load")
B.bwv=new A.mc(22,"LINE hot (brass)",B.I0,!1,"hot")
B.bwu=new A.mc(23,"LOAD neutral (silver, taped)",D.I_,!0,"load")
B.bwn=new A.mc(24,"LINE neutral (silver)",B.HZ,!1,"neutral")
B.cQw=w([B.bwt,B.bwv,B.bwu,B.bwn,B.ahW],x.r)
B.ftA=new A.L(8.2,0.9,-6.3)
B.fA2=new A.L(8.2,-0.1,-6.3)
B.fuR=new A.L(8.2,-0.1,-7.85)
B.cQP=w([B.ftA,B.fA2,B.fuR],x.o)
B.cR_=w([-0.28,0.28],x.n)
B.cS_=w([10,9,5,0,2,1,3,4,6,7,8],x.t)
B.bvH=new A.Dg("Oak",B.KO,"wood")
B.bvJ=new A.Dg("Dark wood",B.Er,"wood")
B.bgu=new C.w(1,0.5529411764705883,0.5647058823529412,0.5882352941176471,D.t)
B.bvL=new A.Dg("Grey carpet",B.bgu,"carpet")
B.bg_=new C.w(1,0.3568627450980392,0.4980392156862745,0.6509803921568628,D.t)
B.bvI=new A.Dg("Blue carpet",B.bg_,"carpet")
B.bdM=new C.w(1,0.8470588235294118,0.803921568627451,0.7058823529411765,D.t)
B.bvF=new A.Dg("Cream carpet",B.bdM,"carpet")
B.bvK=new A.Dg("White tile",B.acf,"tile")
B.bvG=new A.Dg("Slate tile",B.V9,"tile")
B.auF=w([B.bvH,B.bvJ,B.bvL,B.bvI,B.bvF,B.bvK,B.bvG],C.ax("P<Dg>"))
B.fzY=new A.L(3,3.2,-7.85)
B.fC3=new A.L(3,4,-7.85)
B.fBA=new A.L(3,4.2,-7.4)
B.fuk=new A.L(3,3.95,-7)
B.cU8=w([B.fzY,B.fC3,B.fBA,B.fuk],x.o)
B.fAj=new A.L(6,0.2,0)
B.fzd=new A.L(6,2.6,0)
B.aR4=new A.L(8.6,2.6,0)
B.cVl=w([B.fAj,B.fzd,B.aR4],x.o)
B.epJ=new C.z(-7,-7)
B.ect=new C.z(7,-7)
B.epI=new C.z(-7,7)
B.ecs=new C.z(7,7)
B.cW1=w([B.epJ,B.ect,B.epI,B.ecs],x.f)
B.cW3=w([-2.4,2.4],x.n)
B.cWk=w([-1.6,1.6],x.n)
B.adF=new C.w(1,0.14901960784313725,0.14901960784313725,0.16470588235294117,D.t)
B.fDi=new A.zI("blackLine","Black \xb7 from the breaker",B.adF,D.c,"hot")
B.bbI=new C.w(1,0.22745098039215686,0.1803921568627451,0.1803921568627451,D.t)
B.fDl=new A.zI("blackLoad","Black \xb7 to the light",B.bbI,D.c,"hot")
B.aRl=new A.zI("ground","Bare copper \xb7 ground",B.wS,D.c,"ground")
B.cWn=w([B.fDi,B.fDl,B.aRl],x.d)
B.b6q=new C.w(1,0.9294117647058824,0.9019607843137255,0.8392156862745098,D.t)
B.b4J=new C.w(1,0.9137254901960784,0.8274509803921568,0.8274509803921568,D.t)
B.b3Z=new C.w(1,0.8352941176470589,0.8941176470588236,0.8156862745098039,D.t)
B.bb8=new C.w(1,0.9529411764705882,0.8901960784313725,0.6549019607843137,D.t)
B.b8B=new C.w(1,0.7254901960784313,0.7647058823529411,0.8666666666666667,D.t)
B.bg6=new C.w(1,0.5607843137254902,0.6392156862745098,0.6588235294117647,D.t)
B.auS=w([B.b6q,B.Vm,B.b4J,B.b3Z,B.bb8,B.b8B,B.acB,B.bg6],x.O)
B.ahG=new A.qP(4,"deadOutlet")
B.cYz=w([B.YI,B.YJ,B.LX,B.LY,B.ahG,B.YM,B.YN,B.YO,B.YP,B.YQ,B.YK,B.YL],C.ax("P<qP>"))
B.cZ1=w([y.r,"Find the LINE and LOAD screws. LOAD is covered with yellow tape. Leave it covered unless you feed another outlet.",y.x,"Fasten the white wire to the silver LINE screw.","Fasten the black wire to the brass LINE screw.","Push the GFCI into the box and put the plate on.","Turn the power on, press RESET, then press TEST. It must click off."],x.s)
B.cZA=w([0.1,8.05],x.n)
B.fxU=new A.L(-0.35,11,-3.4)
B.fwX=new A.L(-0.35,3.2,-3.2)
B.fzl=new A.L(-0.35,2.2,-1.9)
B.fw2=new A.L(-0.35,0.7,-1.5)
B.cZO=w([B.fxU,B.fwX,B.fzl,B.fw2],x.o)
B.fBs=new A.L(5.2,7.5,-7.85)
B.fz9=new A.L(5.2,4,-7.85)
B.cZU=w([B.fBs,B.fz9],x.o)
B.a7T=new A.kT("look","Look",D.fa)
B.fG3=new A.kT("wall","Wall box",N.ajc)
B.fG2=new A.kT("ceiling","Ceiling box",D.qH)
B.fGc=new A.kT("fanbox","Fan box",M.Ms)
B.fGj=new A.kT("drill","Drill",D.xD)
B.fGd=new A.kT("cable","Cable roll",E.aj1)
B.d13=w([B.a7T,B.fG3,B.fG2,B.fGc,B.fGj,B.fGd],x.b)
B.fGi=new A.kT("sheet","Drywall sheet",D.Bi)
B.fG6=new A.kT("knife","Drywall saw",D.Fq)
B.fG4=new A.kT("screw","Screw gun",R.FA)
B.fGl=new A.kT("tape","Tape",D.tx)
B.fGh=new A.kT("mud","Mud",Z.ZR)
B.fGp=new A.kT("sand","Sander",D.Fo)
B.bBH=new C.a0(985109,"MaterialIcons",!1)
B.fGa=new A.kT("paint","Roller",B.bBH)
B.cYH=w([B.a7T,B.fGi,B.fG6,B.fG4,B.fGl,B.fGh,B.fGp,B.fGa],x.b)
B.fGe=new A.kT("tester","Voltage tester",D.qL)
B.ajW=new C.a0(983223,"MaterialIcons",!1)
B.fGm=new A.kT("outlet","Outlet",B.ajW)
B.fG8=new A.kT("gfci","GFCI",D.tE)
B.fGk=new A.kT("switch","Switch",E.N3)
B.fGg=new A.kT("light","Light",D.qN)
B.bBF=new C.a0(985094,"MaterialIcons",!1)
B.fGb=new A.kT("fan","Fan",B.bBF)
B.fGf=new A.kT("tv","TV",S.akj)
B.bzW=new C.a0(63571,"MaterialIcons",!1)
B.fG9=new A.kT("lamp","Lamp",B.bzW)
B.byJ=new C.a0(62944,"MaterialIcons",!1)
B.fG7=new A.kT("toaster","Toaster",B.byJ)
B.bzi=new C.a0(63209,"MaterialIcons",!1)
B.fGo=new A.kT("hairdryer","Hair dryer",B.bzi)
B.fGn=new A.kT("flip","Flip switch",E.N3)
B.fG5=new A.kT("unplug","Unplug",B.ajV)
B.d3v=w([B.a7T,B.fGe,B.fGm,B.fG8,B.fGk,B.fGg,B.fGb,B.fGf,B.fG9,B.fG7,B.fGo,B.fGn,B.fG5],x.b)
B.cZX=w([B.d13,B.cYH,B.d3v],C.ax("P<ak<kT>>"))
B.aQT=new A.L(0,15.5,-3.6)
B.fy2=new A.L(0,20,-3.6)
B.fBS=new A.L(0,22.5,-2)
B.fwG=new A.L(0,22.5,1.1999999999999997)
B.fy9=new A.L(0,21.1,1.6)
B.d_s=w([B.aQT,B.fy2,B.fBS,B.fwG,B.fy9],x.o)
B.GC=w([],x.E)
B.vv=w([],x.a)
B.d07=w([],x.o)
B.d10=w(["Look at the pieces: the tailpiece, the P-trap and the trap arm. Pick the tailpiece first and tap its glowing outline under the sink.","Pick the P-trap (the U-shaped bend) and tap its glowing outline. It joins the tailpiece.","Pick the trap arm and tap its outline. It joins the trap to the wall drain.","Slide each slip nut up to its joint and hand tighten it: tap the nuts.","Run the water and look for leaks. The U-bend keeps a plug of water that blocks sewer gas."],x.s)
B.fuz=new A.L(11.4,4.6,-6)
B.fyg=new A.L(11.4,5,-7.85)
B.fw4=new A.L(2.6,5,-7.85)
B.fwk=new A.L(2.6,3.4,-7.85)
B.d1K=w([B.fuz,B.fyg,B.fw4,B.fwk],x.o)
B.d1O=w(["hot","cold"],x.s)
B.fDk=new A.zI("black","Black \xb7 hot",B.adF,D.c,"hot")
B.fDj=new A.zI("white","White \xb7 neutral",B.wB,D.aA,"neutral")
B.PG=w([B.fDk,B.fDj,B.aRl],x.d)
B.ep6=new C.z("Slab","First the concrete slab (the foundation) is poured and left to cure. Every wall sits on it.")
B.ere=new C.z("Framing","The carpenters build the wall frames from 2x4 studs, spaced 16 inches apart, with plates on the top and bottom.")
B.eh1=new C.z("Plumbing rough-in","The plumber runs the hot (red) and cold (blue) water lines and the white drain pipes inside the walls and floor before anything is closed up.")
B.eno=new C.z("Electrical rough-in","The electrician runs the yellow and white cables from the breaker panel to every box, and fixes the boxes to the studs.")
B.eoq=new C.z("Drywall","Drywall covers the frame. Here it is see-through so you can still look at the pipes and wires behind it.")
B.ehq=new C.z("Fixtures","Last come the outlets, switches, light, sink, toilet and water heater. This is where most repairs happen.")
B.eiC=new C.z("Roof","The roof goes on to keep everything dry. It is see-through here so you can keep looking inside.")
B.d3H=w([B.ep6,B.ere,B.eh1,B.eno,B.eoq,B.ehq,B.eiC],x.L)
B.epy=new C.z(-17,-9)
B.e8P=new C.z(17,-9)
B.epx=new C.z(-17,9)
B.e8O=new C.z(17,9)
B.d4g=w([B.epy,B.e8P,B.epx,B.e8O],x.f)
B.d4p=w([-30,30,-70,70],x.n)
B.d4q=w([-3,3],x.n)
B.nS=w([-72,-24,24],x.t)
B.d4u=w([-90,-50,50,90],x.n)
B.avM=w([-9,9],x.n)
B.fw8=new A.L(8.2,5,-7.85)
B.fzc=new A.L(8.2,1.2,-7.85)
B.fAw=new A.L(8.2,1,-7.4)
B.d5Z=w([B.fw8,B.fzc,B.fAw],x.o)
B.dWx={hot:0}
B.aLb=new C.eV(B.dWx,1,x.M)
B.e5H=new A.El(61,"Hot shut-off valve (left)",B.aLb,"Hot is always on the LEFT. The red hose goes on the left valve.")
B.dWl={cold:0}
B.aLj=new C.eV(B.dWl,1,x.M)
B.e5I=new A.El(62,"Cold shut-off valve (right)",B.aLj,"Cold is always on the RIGHT. The blue hose goes on the right valve.")
B.e5F=new A.El(63,"Hot faucet inlet (left)",B.aLb,"The left faucet inlet takes the hot (red) hose.")
B.e5G=new A.El(64,"Cold faucet inlet (right)",B.aLj,"The right faucet inlet takes the cold (blue) hose.")
B.a22=w([B.e5H,B.e5I,B.e5F,B.e5G],C.ax("P<El>"))
B.a24=w([-72,-48,-24,0,24],x.t)
B.d7i=w(["1 Rough-in","2 Drywall","3 Devices"],x.s)
B.evc=new C.by("hot","Hot hose (red)",B.rU)
B.evR=new C.by("cold","Cold hose (blue)",B.nu)
B.d8c=w([B.evc,B.evR],C.ax("P<+(n,n,w)>"))
B.a7y=new A.L(15,2.6,0)
B.a27=w([B.aR4,B.a7y],x.o)
B.d8H=w(["tail","trap","arm"],x.s)
B.GG=w(["tv","lamp","toaster","hairdryer"],x.s)
B.d9l=w([y.r,"Hold the fixture up to the ceiling box. It has three short wires: black, white and green.","Join the house ground wire to the fixture ground.","Join the house white wire to the fixture white wire with a wire nut.","Join the house black wire to the fixture black wire with a wire nut.","Push the wires into the box and fasten the fixture to the ceiling.",y.E],x.s)
B.d9t=w([30,60,120,180,300],x.t)
B.bOG=new A.jw("Breaker off, then test","Before you touch any wire, switch its breaker OFF, then check with a voltage tester that the wire is dead. A switch on the wall is not enough.")
B.bOt=new A.jw("Lock out, tag out","On a real job you put a lock or a note on the panel so nobody switches the power back on while you work.")
B.bON=new A.jw("Water and power","Water carries electricity. Near sinks, tubs and outdoors the outlets must be GFCI, and wet hands never touch wires.")
B.bOy=new A.jw("Eyes, ears, lungs","Safety glasses for drilling and cutting, ear protection for loud tools, and a mask when you sand drywall dust or cut tile.")
B.bOM=new A.jw("Shut the water off","Before you cut or loosen a pipe, close the main water valve and open a faucet to drain the line.")
B.d3c=w([B.bOG,B.bOt,B.bON,B.bOy,B.bOM],x.Z)
B.bOZ=new A.LV("Safety first","\ud83e\uddba",D.cr,B.d3c)
B.bOO=new A.jw("Wire colours","Black is hot (it carries the power), white is neutral (the way back), bare copper or green is ground (the safety path). Red is a second hot, often used for a switched line.")
B.bOV=new A.jw("Screw colours","On an outlet the brass screw takes the hot wire, the silver screw takes the neutral and the green screw takes the ground.")
B.bOI=new A.jw("Wire size","14 gauge wire is for 15 amp circuits (lights and outlets). 12 gauge is for 20 amp circuits (kitchens). A thinner wire than the breaker allows can overheat and start a fire.")
B.bOC=new A.jw("Breakers","A breaker is a safety switch. It trips when a circuit carries too much current, so the wires never get hot enough to burn.")
B.bOQ=new A.jw("Wire nuts","Strip about 3/4 inch, twist the bare ends together clockwise, and screw on the nut until no bare copper shows. Give each wire a gentle tug.")
B.bOW=new A.jw("Switches","A switch cuts the hot wire only. The neutral goes straight through to the light.")
B.bOX=new A.jw("GFCI","A GFCI outlet watches the current going out and coming back. If a little leaks (through water or a person) it cuts the power in a fraction of a second.")
B.bOv=new A.jw("Ceiling fans","A fan shakes and is heavy. It needs a box that says fan rated, fixed to the joist, not a plain light box.")
B.bOx=new A.jw("Heights","Outlets sit about 16 inches from the floor. Switches sit about 48 inches up, where your hand falls.")
B.cXb=w([B.bOO,B.bOV,B.bOI,B.bOC,B.bOQ,B.bOW,B.bOX,B.bOv,B.bOx],x.Z)
B.bP1=new A.LV("Wiring basics","\u26a1",D.cp,B.cXb)
B.bOu=new A.jw("Hot left, cold right","On a faucet, hot is on the left and cold on the right. Hot lines are marked red and cold lines blue.")
B.bOH=new A.jw("The P-trap","The curved pipe under a sink always holds a little water. That water seal stops sewer gas coming up the drain.")
B.bOS=new A.jw("Shut-off valves","Every sink and toilet has its own small valve, so you can stop the water to one fixture without turning off the whole house.")
B.bOA=new A.jw("Slip nuts","Drain joints are sealed by a washer and a slip nut. Tighten by hand and a quarter turn: too much force cracks plastic.")
B.bOz=new A.jw("Wax ring","A toilet sits on a wax ring that seals it to the floor drain. A toilet is lowered straight down once, and cannot be slid around.")
B.bOP=new A.jw("Drain slope","Drains fall about 1/4 inch per foot so water and waste keep moving. Too flat and it clogs, too steep and the water leaves the solids behind.")
B.bOU=new A.jw("Order of work","Plumbing goes from the top down on the drain (tailpiece, trap, arm) and from the wall out on the supply (valve, hose, fixture).")
B.c5q=w([B.bOu,B.bOH,B.bOS,B.bOA,B.bOz,B.bOP,B.bOU],x.Z)
B.bP_=new A.LV("Plumbing basics","\ud83d\udeb0",D.ct,B.c5q)
B.bOw=new A.jw("Studs","Studs are the vertical 2x4 posts inside a wall, 16 inches apart from centre to centre. Everything is fixed to them.")
B.bOK=new A.jw("Drilling studs","Holes for cable go through the middle of the stud, so a nail or screw cannot reach the wire.")
B.bOB=new A.jw("Drywall","A sheet is 4 feet wide, so its edges land on studs 48 inches apart. Screws go into studs only, just under the paper.")
B.bOE=new A.jw("Taping and mud","Seams get paper tape and three thin coats of joint compound, sanded smooth between coats, then primer and paint.")
B.bOT=new A.jw("Order of a build","Frame, run the pipes and wires (rough-in), inspect, hang drywall, finish it, paint, then fit the fixtures and devices.")
B.cJm=w([B.bOw,B.bOK,B.bOB,B.bOE,B.bOT],x.Z)
B.bOY=new A.LV("Framing and walls","\ud83c\udfe0",D.dT,B.cJm)
B.bOF=new A.jw("Voltage tester","A pen that glows or beeps near live wires. Test it on a known live outlet first, so you know it works.")
B.bOL=new A.jw("Wire strippers","Strip the plastic off without nicking the copper. A nick weakens the wire.")
B.bOR=new A.jw("Adjustable wrench","For nuts on valves and hoses. Hold the fitting steady with a second wrench so you do not twist the pipe.")
B.bOJ=new A.jw("Drill and screw gun","A drill makes holes through studs. A screw gun sets drywall screws to the right depth.")
B.bOD=new A.jw("Level and tape measure","Measure twice, cut once. A level makes sure outlets, shelves and pipes are straight.")
B.daA=w([B.bOF,B.bOL,B.bOR,B.bOJ,B.bOD],x.Z)
B.bP0=new A.LV("Tools","\ud83e\uddf0",D.bs,B.daA)
B.dae=w([B.bOZ,B.bP1,B.bP_,B.bOY,B.bP0],C.ax("P<LV>"))
B.bwr=new A.mc(21,"Brass screw (top): HOT side",B.I0,!1,"hot")
B.bwq=new A.mc(22,"Brass screw (bottom): HOT side",B.I0,!1,"hot")
B.bws=new A.mc(23,"Silver screw (top): NEUTRAL side",B.HZ,!1,"neutral")
B.bww=new A.mc(24,"Silver screw (bottom): NEUTRAL side",B.HZ,!1,"neutral")
B.bwk=new A.mc(25,"Green screw: GROUND",B.RU,!1,"ground")
B.daf=w([B.bwr,B.bwq,B.bws,B.bww,B.bwk],x.r)
B.dav=w(["Cream","Sky","Blush","Mint","Butter","Periwinkle","White","Slate"],x.s)
B.daG=w([0.72,-0.72],x.n)
B.edI=new C.z("outlet","\ud83d\udd0c Outlet")
B.eql=new C.z("gfci","\ud83d\udee1\ufe0f GFCI outlet")
B.emL=new C.z("switch","\ud83d\udca1 Light switch")
B.daY=w([B.edI,B.eql,B.emL],x.L)
B.db7=w(["inspect","hand","screwdriver","pliers","wrench","crimper","plunger","flapper","newoutlet","patch"],x.s)
B.dc6=w(["Look under the sink. The wall has two shut-off valves: hot on the LEFT (red handle) and cold on the RIGHT (blue handle).","Pick the red hot hose. Tap the left shut-off valve, then the left faucet inlet.","Pick the blue cold hose. Tap the right shut-off valve, then the right faucet inlet.","Open the valves slowly and turn on the faucet. Check every connection for drips."],x.s)
B.dWv={flange:0,wax:1,toilet:2,bolts:3,valve:4,hosehot:5,hosecold:6,faucet:7,tail:8,trap:9,arm:10}
B.dek=new C.bq(B.dWv,["Flange","Wax ring","Toilet","Bolts","Shut-off valve","Hot hose","Cold hose","Faucet","Tailpiece","P-trap","Trap arm"],x.l)
B.bv4=new A.tZ("The living room has no power at all.","The living room breaker is sitting in the middle (orange). It has tripped. Flip it fully OFF and ON again, by hand.","hand","Breaker reset. The living room has power again.",72,0,"")
B.bve=new A.tZ("There is no hot water.","The water heater breaker has tripped (orange). Reset it by hand.","hand","Breaker reset. The water heater is heating again.",75,0,"")
B.bvb=new A.tZ("Water is dripping under the kitchen sink.","The slip nut on the P-trap is loose and the joint drips. Tighten it with the wrench.","wrench","Slip nut tightened. The drip stopped.",87,0,"")
B.bv3=new A.tZ("There is a wet spot on the wall behind the kitchen.","A crimped joint in the hot water line is leaking. A crimp joint is squeezed with a crimping tool, not tightened with a wrench.","crimper","The joint is crimped again and it does not leak.",96,0,"")
B.bv8=new A.tZ("The outlet by the sofa does not work, but the lights do.","The tester finds power at the box but the outlet is dead: a screw on the outlet has come loose. Turn the breaker off first, then tighten the screws with the screwdriver.","screwdriver","You tightened the loose screw. The outlet works again.",81,72,"Turn the living room breaker OFF first.")
B.bv5=new A.tZ("The living room light flickers.","A wire nut in the light box has worked loose. Turn the breaker off, then twist the wire nut tight with the pliers.","pliers","You twisted the wire nut tight. The light is steady.",83,72,"Turn the living room breaker OFF first.")
B.bv6=new A.tZ("The kitchen outlet sparks and smells burnt.","The outlet has burnt. Turn the breaker off and replace it with a new outlet.","newoutlet","New outlet fitted. No more sparks.",84,73,"Turn the kitchen breaker OFF first.")
B.bvc=new A.tZ("The kitchen outlets are dead.","The GFCI outlet has tripped. Press its RESET button by hand.","hand","You pressed RESET. The kitchen outlets work.",84,0,"")
B.bv7=new A.tZ("The toilet keeps running.","The rubber flapper in the tank no longer seals, so water leaks into the bowl all the time. Replace the flapper.","flapper","New flapper fitted. The toilet stops running.",88,0,"")
B.bva=new A.tZ("The kitchen faucet drips.","The faucet washer is worn. Tighten the packing nut with the wrench, then check.","wrench","The faucet is sealed. No more drips.",85,0,"")
B.bv9=new A.tZ("There is a hole in the wall.","A hole in the drywall. Stick a drywall patch over it, then tape, mud, sand and paint it.","patch","Patch fitted. Now it only needs mud, sanding and paint.",95,0,"")
B.bvd=new A.tZ("The kitchen sink drains very slowly.","The drain is clogged. Use the plunger.","plunger","The clog is gone. The sink drains fast.",94,0,"")
B.vz=new C.dQ([B.YI,B.bv4,B.YJ,B.bve,B.LX,B.bvb,B.LY,B.bv3,B.ahG,B.bv8,B.YM,B.bv5,B.YN,B.bv6,B.YO,B.bvc,B.YP,B.bv7,B.YQ,B.bva,B.YK,B.bv9,B.YL,B.bvd],C.ax("dQ<qP,tZ>"))
B.dg9=new C.bq(D.ia,[],C.ax("bq<G,da>"))
B.dWt={tail:0,trap:1,arm:2}
B.dgo=new C.bq(B.dWt,["Tailpiece","P-trap","Trap arm"],x.l)
B.dVX={bed:0,nightstand:1,wardrobe:2,desk:3,rug:4,sofa:5,armchair:6,coffee:7,tvstand:8,dining:9,chair:10,plant:11,lamp:12,console:13,shelf:14}
B.bvX=new A.q8("Bed","\ud83d\udecf\ufe0f",60,80)
B.bw0=new A.q8("Night table","\ud83e\ude91",16,16)
B.bw4=new A.q8("Wardrobe","\ud83d\udeaa",44,20)
B.bvV=new A.q8("Desk","\ud83d\udda5\ufe0f",48,24)
B.bvR=new A.q8("Rug","\ud83d\udfe5",70,50)
B.bvY=new A.q8("Sofa","\ud83d\udecb\ufe0f",80,32)
B.bw3=new A.q8("Armchair","\ud83d\udcba",30,30)
B.bvU=new A.q8("Coffee table","\u2615",40,24)
B.bw1=new A.q8("TV stand","\ud83d\udcfa",56,18)
B.bvS=new A.q8("Dining table","\ud83c\udf7d\ufe0f",56,36)
B.bvT=new A.q8("Chair","\ud83e\ude91",18,18)
B.bw2=new A.q8("Plant","\ud83e\udeb4",14,14)
B.bvZ=new A.q8("Floor lamp","\ud83d\udca1",10,10)
B.bvW=new A.q8("Console table","\ud83d\uddc4\ufe0f",44,14)
B.bw_=new A.q8("Bookshelf","\ud83d\udcda",36,12)
B.yx=new C.bq(B.dVX,[B.bvX,B.bw0,B.bw4,B.bvV,B.bvR,B.bvY,B.bw3,B.bvU,B.bw1,B.bvS,B.bvT,B.bw2,B.bvZ,B.bvW,B.bw_],C.ax("bq<n,q8>"))
B.fAf=new A.L(0,0,-1.2)
B.dUe=new A.da("Electrical box","The box is ready. Pull a cable to it, then wire a device.",B.fAf,9)
B.dgL=new C.dQ([3,B.dUe],C.ax("dQ<G,da>"))
B.aEf={inspect:0,hand:1,screwdriver:2,pliers:3,wrench:4,crimper:5,plunger:6,flapper:7,newoutlet:8,patch:9}
B.Qe=new C.bq(B.aEf,["Look and test","Hand","Screwdriver","Pliers","Wrench","Crimp tool","Plunger","New flapper","New outlet","Drywall patch"],x.l)
B.bz3=new C.a0(63072,"MaterialIcons",!1)
B.dgP=new C.bq(B.aEf,[D.fa,B.aku,R.FA,D.Fq,D.qI,B.bz3,X.a_m,D.pE,B.ajW,L.vb],C.ax("bq<n,a0>"))
B.aCZ=new A.a5J(null)
B.fBD=new A.L(16,2.6,0)
B.dTY=new A.da("Wall drain","The pipe stub that comes out of the wall. The trap arm slides into it.",B.fBD,8)
B.fu5=new A.L(0,3,-6)
B.dTZ=new A.da("Wall","The copper supply pipes come out of the wall here.",B.fu5,24)
B.fzU=new A.L(8.2,1,-7)
B.dU_=new A.da("Toilet","The tank fills from the cold supply on the wall. The bowl drains into the white pipe in the floor.",B.fzU,7)
B.ftE=new A.L(0,0,40)
B.dU0=new A.da("The room","A room to build from bare studs to finished, working electrics. The walls hold the cable, the boxes and the devices.",B.ftE,190)
B.fxP=new A.L(-2.4,11.5,-3.6)
B.dU1=new A.da("Hot faucet inlet","The threaded tail under the faucet where the hot supply hose screws on.",B.fxP,7)
B.fv3=new A.L(-3.6,4,-7.8)
B.dU2=new A.da("Light switch","Controls the ceiling light. Tap Open lesson to wire one.",B.fv3,4.5)
B.fyT=new A.L(0,0.5,2)
B.dU3=new A.da("Voltage tester","A tester that glows when it touches live power.",B.fyT,6)
B.dU4=new A.da("Pipe joint","A crimped joint in the hot water line.",B.aQB,4)
B.fy6=new A.L(0,-0.2,0.2)
B.dU5=new A.da("Cover plate","The plate covers the box and the edges of the drywall so nobody touches the wires.",B.fy6,8)
B.fAY=new A.L(-4.6,0.5,-3.4)
B.dU6=new A.da("Hot shut-off valve","The angle stop valve on the hot pipe. Turn the handle to stop the water to the faucet without shutting off the whole house. Hot is always on the left.",B.fAY,8)
B.fzv=new A.L(0,-0.3,3.2)
B.dU7=new A.da("White wire nut: NEUTRAL","Twist the house white wire and the fixture white wire together under this cap.",B.fzv,6)
B.fyL=new A.L(4.6,0.5,-3.4)
B.dU8=new A.da("Cold shut-off valve","The angle stop valve on the cold pipe. Cold is always on the right.",B.fyL,8)
B.fuP=new A.L(2.4,11.5,-3.6)
B.dU9=new A.da("Cold faucet inlet","The threaded tail under the faucet where the cold supply hose screws on.",B.fuP,7)
B.fCd=new A.L(0.8,-0.8,1.2)
B.dUa=new A.da("Black wire to the light","This black wire carries power to the light once the switch is on. It goes on the other brass screw.",B.fCd,7)
B.fxN=new A.L(10.05,5.2,-7.5)
B.dUb=new A.da("Water heater breaker","A big circuit for the water heater. It is ON.",B.fxN,3.5)
B.aQa=new A.L(0,40,0)
B.dUc=new A.da("Back wall",y.s,B.aQa,140)
B.fzO=new A.L(3,3.8,-7.4)
B.dUd=new A.da("Kitchen faucet","Hot on the left, cold on the right. Tap Open lesson to connect the supply hoses.",B.fzO,4.5)
B.a7r=new A.L(0,6,0)
B.dUf=new A.da("Tailpiece","The straight pipe that hangs from the sink drain. Its bottom end is smooth so the slip nut can slide on and grip it.",B.a7r,10)
B.fAP=new A.L(-60,40,50)
B.dUg=new A.da("Left wall",y.s,B.fAP,140)
B.fvn=new A.L(3,1,0)
B.dUh=new A.da("P-trap","The U-shaped bend. It always keeps a little water inside, and that water plug blocks sewer gas from coming back up into the house.",B.fvn,11)
B.ftT=new A.L(0,20,5)
B.dUi=new A.da("The room","A bare room with the water supply stubs and the drain stub already in the wall and floor.",B.ftT,120)
B.fuj=new A.L(0,-8,0)
B.dUj=new A.da("Cabinet","The cabinet under the sink where the drain is built.",B.fuj,22)
B.fud=new A.L(0,4,-8)
B.dUk=new A.da("Wall framing","2x4 studs 16 inches apart. Pipes and cables run through holes drilled in the middle of the studs, never along the edge where a nail could hit them.",B.fud,18)
B.aQN=new A.L(0,-0.2,5.1)
B.dUl=new A.da("TEST and RESET buttons","Press TEST to make the GFCI trip. Press RESET to turn it back on. Test it once a month.",B.aQN,5)
B.ftK=new A.L(0,11,0)
B.dUm=new A.da("Sink","The sink bowl and the counter. The drain flange at the bottom is where the tailpiece starts.",B.ftK,16)
B.fu6=new A.L(0,40,12)
B.dUn=new A.da("Front door","Tap the door to go inside the house.",B.fu6,220)
B.w5=new A.L(0,0,0)
B.dUo=new A.da("Drywall","The wall surface. A hole is cut in it for the electrical box.",B.w5,22)
B.fvY=new A.L(60,40,50)
B.dUp=new A.da("Right wall",y.s,B.fvY,140)
B.ftN=new A.L(0,14,-3)
B.dUq=new A.da("Counter and sink","The faucet is mounted through a hole in the counter.",B.ftN,20)
B.fx6=new A.L(0,-1.9,5)
B.dUr=new A.da("GREEN screw: GROUND","The green screw is for the bare copper ground wire.",B.fx6,5)
B.fub=new A.L(0,47,-2)
B.dUs=new A.da("Top and bottom plate","The horizontal 2x4s at the top and the bottom of the wall. The studs stand between them.",B.fub,70)
B.ftG=new A.L(0,0,-8)
B.dUt=new A.da("Wall","Behind the wall the drain pipe goes down to the sewer line.",B.ftG,22)
B.ftR=new A.L(0,19,-3)
B.dUu=new A.da("Faucet","The faucet with hot on the left (red) and cold on the right (blue).",B.ftR,14)
B.fwd=new A.L(3.5,2,-7.2)
B.dUv=new A.da("Kitchen counter and cabinet","The cabinet under the sink is where the drain and the shut-off valves live.",B.fwd,9)
B.fxi=new A.L(10.05,5.7,-7.5)
B.dUw=new A.da("Kitchen breaker","Protects the kitchen outlets. It is ON.",B.fxi,3.5)
B.fxW=new A.L(4,6,-2.5)
B.dUx=new A.da("Cold supply hose","A braided steel hose with a rubber liner and a blue band.",B.fxW,9)
B.fyQ=new A.L(-1,0.6,4.3)
B.dUy=new A.da("SILVER screw: NEUTRAL side",y.o,B.fyQ,5)
B.a7u=new A.L(0,3.7,0)
B.dUz=new A.da("Slip nut","A big plastic nut. Slide it on the pipe first, then the washer, then join the pieces and hand tighten. A rubber washer inside makes the seal.",B.a7u,7)
B.Tj=new A.L(0,-1,-0.6)
B.dUA=new A.da("Wire nut","A twist-on cap that joins wires safely. The two white wires are joined here because a switch only cuts the hot wire.",B.Tj,5)
B.fy_=new A.L(-1.5,-0.3,3.2)
B.dUB=new A.da("Black wire nut: HOT","Twist the house black wire and the fixture black wire together under this cap.",B.fy_,6)
B.fxh=new A.L(-1.9,0,-2)
B.dUC=new A.da("Wood stud","The 2x4 frame inside the wall. The electrical box is nailed or screwed to a stud so it cannot move.",B.fxh,16)
B.fAe=new A.L(-1,-0.8,4.3)
B.dUD=new A.da("SILVER screw: NEUTRAL side",y.o,B.fAe,5)
B.fBR=new A.L(6,3,-7.8)
B.dUE=new A.da("Water and drain pipes","Red is hot water, blue is cold water (PEX tubing). The white pipes are drains. They slope down so the waste flows away.",B.fBR,14)
B.fAh=new A.L(1,0.6,4.3)
B.dUF=new A.da("BRASS screw: HOT side",y.u,B.fAh,5)
B.fAx=new A.L(0,-0.2,4.9)
B.dUG=new A.da("Mounting strap (yoke)","The metal strap with two screw slots. Long screws through the ears hold the device in the box.",B.fAx,7)
B.fCa=new A.L(9.55,4.7,-7.5)
B.dUH=new A.da("Spare breaker","A spare circuit.",B.fCa,3.5)
B.ftU=new A.L(0,20,8)
B.dUI=new A.da("Vanity and counter","The cabinet that holds the sink. The pipes live inside it.",B.ftU,70)
B.fBn=new A.L(-3.2,1.3,-7.8)
B.dUJ=new A.da("Living room outlet","A standard outlet. Tap Open lesson to wire one in 3D.",B.fBn,4.5)
B.fAy=new A.L(1.5,-0.3,3.2)
B.dUK=new A.da("Green ground connection","Join the bare copper house ground wire to the green fixture ground wire.",B.fAy,6)
B.fxa=new A.L(12,2.6,0)
B.dUL=new A.da("Trap arm","The pipe that carries the waste water from the trap into the wall. It must slope down toward the wall, about 1/4 inch per foot.",B.fxa,9)
B.fyx=new A.L(0,6.5,-7.8)
B.dUM=new A.da("Electrical cables","Cables run from the breaker panel to every outlet, switch and light. Yellow is 12 gauge for 20 amps. White is 14 gauge for 15 amps.",B.fyx,16)
B.fz2=new A.L(11.2,2.3,-6)
B.dUN=new A.da("Water heater","Heats the water. The cold line goes in at the top and the hot line comes out at the top.",B.fz2,9)
B.fzy=new A.L(9.55,5.2,-7.5)
B.dUO=new A.da("Bathroom breaker","Protects the bathroom. It is ON.",B.fzy,3.5)
B.fxn=new A.L(5.2,3.9,-7.8)
B.dUP=new A.da("Kitchen GFCI outlet","Outlets near water must be GFCI. Tap Open lesson to wire one.",B.fxn,4.5)
B.fu8=new A.L(0,40,-3)
B.dUQ=new A.da("Electrical cable","Yellow 12/2 cable with ground: it carries power from the breaker panel through the holes in the studs to each box.",B.fu8,80)
B.fxL=new A.L(-8.4,1.2,-6.4)
B.dUR=new A.da("Sofa","Just furniture, to show the size of the room.",B.fxL,10)
B.dUS=new A.da("Outlet face","Two outlets. The short slot is hot, the long slot is neutral, and the round hole is ground.",B.aQN,6)
B.fwV=new A.L(0,4,-7.8)
B.dUT=new A.da("Wall","The drywall of the back wall.",B.fwV,16)
B.fBp=new A.L(0,0,0.6)
B.dUU=new A.da("Canopy","The round cover that hides the box and the wire connections against the ceiling.",B.fBp,8)
B.dUV=new A.da("Concrete slab","The foundation. It carries the whole weight of the house. Plumbing drains are placed before it is poured.",B.w5,30)
B.a7w=new A.L(8.9,2.6,0)
B.dUW=new A.da("Slip nut","Hand tighten it, then about a quarter turn with pliers. Over-tightening cracks the plastic.",B.a7w,7)
B.fzx=new A.L(1,-0.8,4.3)
B.dUX=new A.da("BRASS screw: HOT side",y.u,B.fzx,5)
B.fwJ=new A.L(0.6,1.5,-1.8)
B.dUY=new A.da("Cable to the light (LOAD)","This cable carries the switched power on to the light. The black wire here only has power when the switch is on.",B.fwJ,8)
B.fx1=new A.L(9.8,5,-7.5)
B.dUZ=new A.da("Breaker panel","The main electrical panel. Each breaker protects one circuit. A breaker that is in the middle position has TRIPPED. Flip it fully OFF and then ON to reset.",B.fx1,6)
B.fxY=new A.L(-4,6,-2.5)
B.dV_=new A.da("Hot supply hose","A braided steel hose with a rubber liner and a red band. Hand tighten the nuts, then a quarter turn with a wrench.",B.fxY,9)
B.bF6=new C.ae(D.ee,18,D.bc,null,null,null)
B.e10=new C.C(D.fy,B.bF6,null)
B.e12=new C.C(D.fy,G.am0,null)
B.e6R=new A.a8c(null,null)
B.e8o=new C.z(0,22)
B.e8C=new C.z(B.wB,B.w5)
B.e9Q=new C.z(34,40)
B.e9R=new C.z(64,2.4)
B.ebn=new C.z("LOAD (taped)",D.dj)
B.ecV=new C.z(98,12)
B.edZ=new C.z(63,-2.4)
B.eeI=new C.z(51,B.ab9)
B.bcs=new C.w(1,0.3568627450980392,0.39215686274509803,0.4392156862745098,D.t)
B.elb=new C.z("SILVER \xb7 NEUTRAL",B.bcs)
B.fBy=new A.L(-1.5,0,0)
B.elk=new C.z(B.K8,B.fBy)
B.b51=new C.w(1,0.8196078431372549,0.29411764705882354,0.22745098039215686,D.t)
B.emP=new C.z(52,B.b51)
B.b9q=new C.w(1,0.12156862745098039,0.47843137254901963,0.22745098039215686,D.t)
B.enH=new C.z("GREEN \xb7 GROUND",B.b9q)
B.eoC=new C.z("main","Main water valve")
B.aK7=new C.z(-30,10)
B.epF=new C.z(-50,10)
B.epK=new C.z(-98,12)
B.adu=new C.w(1,0.1843137254901961,0.6352941176470588,0.30980392156862746,D.t)
B.fCe=new A.L(1.5,0,0)
B.erP=new C.z(B.adu,B.fCe)
B.b63=new C.w(1,0.6039215686274509,0.4196078431372549,0.047058823529411764,D.t)
B.etY=new C.z("BRASS \xb7 HOT",B.b63)
B.euq=new C.z(53,B.adu)
B.ev2=new C.by(61,-4.6,B.rU)
B.ewL=new C.by(62,4.6,B.nu)
B.eyn=new C.cK([0,17.1,16.4,5.8])
B.eyq=new C.cK([0,-0.1,16.4,4.2])
B.ezr=new C.cK([15.6,9,14.8,22])
B.ezv=new C.cK([-15.6,9,14.8,22])
B.eG4=new C.at(126,84)
B.ePN=new C.F(!0,D.c,null,null,null,null,13.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.aNi=new C.F(!0,D.aJ,null,null,null,null,12,D.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.eR0=new C.F(!0,D.ay,null,null,null,null,11.5,null,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.eSy=new C.F(!0,D.c,null,null,null,null,12.5,D.O,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.aNz=new C.F(!0,D.ad,null,null,null,null,12,D.O,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.a6u=new C.F(!0,D.ad,null,null,null,null,null,null,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.eVg=new C.F(!0,null,null,null,null,null,9,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.In=new C.F(!0,D.aJ,null,null,null,null,12.5,D.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.eVM=new C.F(!0,D.c,null,null,null,null,11.5,D.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.eW3=new C.F(!0,D.bJ,null,null,null,null,13,D.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.eXe=new C.F(!0,D.fg,null,null,null,null,11.5,D.O,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.eXj=new C.F(!0,D.ez,null,null,null,null,14,D.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.eYo=new C.F(!0,D.aR,null,null,null,null,12,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.f1Q=new C.F(!0,D.c,null,null,null,null,13.5,D.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.f2v=new C.F(!0,D.b0,null,null,null,null,14.5,D.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.eQ0=new C.F(!0,D.w,null,null,null,null,12,D.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.f3G=new C.x("Open the 3D lesson",null,B.eQ0,null,null,null,null,null,null,null,null,null)
B.f4v=new C.x("Tip: pick a part, then tap its glowing spot. Joints on hoses, bolts and the drain are only loose: pick the Wrench and tap them. Use your Hand on the main water valve: turn the water OFF before you cut into a pipe, and ON to test for leaks.",null,E.a6m,null,null,null,null,null,null,null,null,null)
B.eQn=new C.F(!0,null,null,null,null,null,40,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.f5i=new C.x("\ud83c\udfe0",null,B.eQn,null,null,null,null,null,null,null,null,null)
B.f5D=new C.x("You used all three lives. Electricity does not give second chances, so in real life you turn the breaker OFF and test the wires every single time. Try the job again.",null,D.zc,null,null,null,null,null,null,null,null,null)
B.f5U=new C.x("A different house",null,null,null,null,null,null,null,null,null,null,null)
B.f6E=new C.x("Play the tour",null,null,null,null,null,null,null,null,null,null,null)
B.f6L=new C.x("Start this job again",null,null,null,null,null,null,null,null,null,null,null)
B.f9u=new C.x("Start from a bare house (wire everything)",null,null,null,null,null,null,null,null,null,null,null)
B.fbB=new C.x("The customer says\u2026",null,D.du,null,null,null,null,null,null,null,null,null)
B.fcj=new C.x("What the house needs",null,D.du,null,null,null,null,null,null,null,null,null)
B.fcu=new C.x("Next job",null,null,null,null,null,null,null,null,null,null,null)
B.fcL=new C.x("New job",null,null,null,null,null,null,null,null,null,null,null)
B.aNU=new C.F(!0,D.cr,null,null,null,null,null,D.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fcS=new C.x("Job over",null,B.aNU,null,null,null,null,null,null,null,null,null)
B.fd7=new C.x("Three shocks. In real life you switch the breaker off and test the wires, every time. Try another call.",null,D.zc,null,null,null,null,null,null,null,null,null)
B.fdd=new C.x("Learn the trades",null,Q.vU,null,null,null,null,null,null,null,null,null)
B.fdM=new C.x("Practice mode: no hints. You will only hear from me when something is wrong.",null,P.SE,null,null,null,null,null,null,null,null,null)
B.fdZ=new C.x("New call",null,null,null,null,null,null,null,null,null,null,null)
B.fe3=new C.x("Job done! \ud83c\udf89",null,I.SH,null,null,null,null,null,null,null,null,null)
B.ffc=new C.x("Next call",null,null,null,null,null,null,null,null,null,null,null)
B.ffA=new C.x("Plug in",null,D.du,null,null,null,null,null,null,null,null,null)
B.fg_=new C.x("Look around",null,null,null,null,null,null,null,null,null,null,null)
B.fgx=new C.x("The customer wants:",null,D.a6E,null,null,null,null,null,null,null,null,null)
B.fgH=new C.x('Tip: pick "Look and test" and tap things to find out what is wrong. Then pick the right tool. Turn the breaker off (hand) before you touch any wire.',null,E.a6m,null,null,null,null,null,null,null,null,null)
B.fj6=new C.x("Call over",null,B.aNU,null,null,null,null,null,null,null,null,null)
B.fjd=new C.x("\u23cf Unplug",null,H.z9,null,null,null,null,null,null,null,null,null)
B.fjw=new C.x("A different call",null,null,null,null,null,null,null,null,null,null,null)
B.fkk=new C.x("Job complete! \ud83c\udf89",null,I.SH,null,null,null,null,null,null,null,null,null)
B.fle=new C.x("House tour \ud83c\udfac",null,D.du,null,null,null,null,null,null,null,null,null)
B.fln=new C.x("All fixed! \ud83c\udf89",null,I.SH,null,null,null,null,null,null,null,null,null)
B.aPk=new C.x("Stay",null,null,null,null,null,null,null,null,null,null,null)
B.aPm=new C.x("A different job",null,null,null,null,null,null,null,null,null,null,null)
B.fnq=new C.x("It goes on the back wall, not wired yet. Tap the red one to wire it yourself.",null,P.Sw,null,null,null,null,null,null,null,null,null)
B.fpe=new C.x("The job",null,D.du,null,null,null,null,null,null,null,null,null)
B.fpE=new C.x("A little person walks through the whole house: the living room, the kitchen (a drink from the fridge), the hall, the bedrooms and the bathrooms. Every TV is switched on first. Choose how long it takes.",null,D.SM,null,null,null,null,null,null,null,null,null)
B.fq3=new C.x("Stay in the room",null,null,null,null,null,null,null,null,null,null,null)
B.ftz=new A.L(3.6,2.6,0.6)
B.ftB=new A.L(0,56,0.9)
B.ftD=new A.L(0,0,3)
B.a7q=new A.L(0,0,4)
B.ftF=new A.L(0,0,-1)
B.ftH=new A.L(0,100,30)
B.ftI=new A.L(0,114,8)
B.ftJ=new A.L(0,114,-34)
B.ftL=new A.L(0,127,-13)
B.aQ8=new A.L(0,14,0)
B.ftM=new A.L(0,14,2)
B.ftO=new A.L(0,16,0)
B.ftP=new A.L(0,17,0)
B.ftQ=new A.L(0,19,14)
B.w6=new A.L(0,1,0)
B.ftS=new A.L(0,20,0)
B.ftV=new A.L(0,22,-11)
B.ftW=new A.L(0,22,-12)
B.ftX=new A.L(0,22,-39)
B.ftY=new A.L(0,23,0)
B.ftZ=new A.L(0,24,0)
B.aQ9=new A.L(0,28,0)
B.fu_=new A.L(0,28,-8)
B.fu0=new A.L(0,2,18)
B.fu1=new A.L(0,30,0)
B.fu2=new A.L(0,31,-6)
B.fu3=new A.L(0,34,0)
B.fu4=new A.L(0,36,0)
B.fu7=new A.L(0,40,40)
B.fu9=new A.L(0,40,-6)
B.fua=new A.L(0,46,0)
B.fuc=new A.L(0,48,0)
B.Tg=new A.L(0,4,-2)
B.fue=new A.L(0,50,40)
B.fuf=new A.L(0,50,-10)
B.fug=new A.L(0,58,0)
B.fuh=new A.L(0,5,4)
B.Th=new A.L(0,8,0)
B.aQb=new A.L(0,9,0)
B.aQc=new A.L(0,9,-3)
B.a7s=new A.L(0,-4,28)
B.fui=new A.L(0,-4,-20)
B.ful=new A.L(100,52,74)
B.fum=new A.L(10,12,10)
B.fun=new A.L(10,8,10)
B.fuo=new A.L(11,1,11)
B.fup=new A.L(120,0,70)
B.fuq=new A.L(120,40,70)
B.fur=new A.L(120,62,70)
B.aQd=new A.L(12,1,12)
B.fus=new A.L(12,9,18)
B.fut=new A.L(13,0,0)
B.fuu=new A.L(13,15,2)
B.fuv=new A.L(13,28,3)
B.fuw=new A.L(0,0.52,2.35)
B.fux=new A.L(14,17,4)
B.fuy=new A.L(14,20,-28)
B.fuA=new A.L(16,10,10)
B.fuB=new A.L(16,16,16)
B.fuC=new A.L(18,18,14)
B.fuD=new A.L(18,22,2)
B.fuE=new A.L(18,28,16)
B.fuF=new A.L(18,2,18)
B.fuG=new A.L(18,9,11)
B.fuH=new A.L(19,13,7)
B.fuI=new A.L(70,0.6,50)
B.fuJ=new A.L(0,3,-6.5)
B.fuK=new A.L(-4.6,1.5,-3.6)
B.fuL=new A.L(0,-13.5,-1.5)
B.fuM=new A.L(4,10,3.5)
B.Ti=new A.L(1,0,0)
B.fuN=new A.L(1,26,14)
B.fuO=new A.L(1,28,14)
B.fuQ=new A.L(1,0.9,0.06)
B.fuS=new A.L(1.6,15,1.6)
B.aQe=new A.L(20,14,7)
B.fuT=new A.L(22,14,0)
B.fuU=new A.L(22,14,2)
B.fuV=new A.L(22,3,10)
B.fuW=new A.L(240,100,40)
B.aQf=new A.L(24,6,14)
B.fuX=new A.L(260,3,56)
B.fuY=new A.L(262,3,5)
B.aQg=new A.L(26,4,22)
B.fuZ=new A.L(26,72,26)
B.fv_=new A.L(26,-34,96)
B.fv1=new A.L(-0.1,0,0)
B.fv2=new A.L(2,13,2)
B.aQh=new A.L(2,23,12)
B.aQi=new A.L(2,28,22)
B.fv4=new A.L(64,10,-1.4)
B.fv5=new A.L(19.6,0,-1.5)
B.fv6=new A.L(244,6,1.4)
B.aQj=new A.L(0,56,1.3)
B.fv7=new A.L(30,16,30)
B.aQk=new A.L(30,16,72)
B.fv8=new A.L(30,24,8)
B.fv9=new A.L(30,28,18)
B.fvb=new A.L(32,2,20)
B.fvc=new A.L(33,11,10)
B.fvd=new A.L(34,0,150)
B.fve=new A.L(34,30,1)
B.fvf=new A.L(34,30,150)
B.fvg=new A.L(34,33,150)
B.fvh=new A.L(-1,-1.7,2.3)
B.fvi=new A.L(36,30,1)
B.fvj=new A.L(36,60,12)
B.fvk=new A.L(37,16,0)
B.fvl=new A.L(-0.2,-0.3,-0.4)
B.fvm=new A.L(0,48.6,55)
B.fvo=new A.L(3,22,2)
B.fvp=new A.L(3,26,3)
B.a7t=new A.L(3,3,3)
B.fvq=new A.L(3,5,3)
B.fvs=new A.L(40,1,14)
B.fvt=new A.L(40,28,1)
B.fvu=new A.L(40,2,24)
B.fvv=new A.L(44,2,14)
B.fvw=new A.L(44,4,14)
B.fvx=new A.L(44,72,20)
B.fvy=new A.L(0.9,0,4.4)
B.fvz=new A.L(8.2,1.9,-7.55)
B.fvA=new A.L(46,26,2)
B.fvB=new A.L(48,2,24)
B.fvC=new A.L(0,41,11.6)
B.fvD=new A.L(0,-47.25,-2.25)
B.fvE=new A.L(0.6,68,0.4)
B.fvF=new A.L(0,1.59,0.14)
B.fvG=new A.L(25,79,1.4)
B.fvH=new A.L(1,0,-1.2)
B.fvI=new A.L(50,30,26)
B.fvJ=new A.L(52,2,28)
B.fvK=new A.L(54,5,18)
B.fvL=new A.L(56,18,18)
B.fvM=new A.L(56,2,36)
B.fvN=new A.L(58,9,74)
B.fvO=new A.L(0,-0.8,0.9)
B.fvP=new A.L(11.9,0,-8)
B.aQm=new A.L(1.6,1.6,0.4)
B.fvR=new A.L(0.16,0.32,0.07)
B.aQn=new A.L(5,12,26)
B.fvS=new A.L(5,1,2)
B.fvT=new A.L(5,9,8)
B.fvU=new A.L(0,14.3,-1.5)
B.aQo=new A.L(-13,8.6,-9.5)
B.fvV=new A.L(60,12,80)
B.fvW=new A.L(60,30,26)
B.fvX=new A.L(60,30,3)
B.fvZ=new A.L(62,18,20)
B.fw_=new A.L(62,22,6)
B.fw0=new A.L(62,2,28)
B.fw1=new A.L(64,10,0)
B.fw3=new A.L(34,84,1.2)
B.aQp=new A.L(6,14,20)
B.aQq=new A.L(6,14,32)
B.fw5=new A.L(6,4,4)
B.fw7=new A.L(0,-0.2,0.14)
B.fw9=new A.L(0.3,38,2)
B.fwa=new A.L(72,-17,70)
B.fwb=new A.L(12,5,0.4)
B.fwc=new A.L(1.6,1.7,3.6)
B.fwe=new A.L(-72.8,0,55)
B.fwg=new A.L(25,79,0.2)
B.fwh=new A.L(7,0,-8)
B.fwi=new A.L(7,2,7)
B.aQr=new A.L(7,3,0)
B.fwj=new A.L(7,8,3)
B.fwl=new A.L(0,11,9.2)
B.fwm=new A.L(-3.2,1.3,-7.82)
B.fwn=new A.L(80,16,32)
B.fwo=new A.L(80,26,8)
B.aQs=new A.L(147,1.5,3.5)
B.fwp=new A.L(82,46,3)
B.aQt=new A.L(-6.5,6.9,-3)
B.fwq=new A.L(8,40,12.6)
B.fwr=new A.L(0,-48.6,55)
B.fws=new A.L(5.5,8.5,3)
B.fwt=new A.L(2.6,2.6,1.8)
B.fwu=new A.L(0,0,0.26)
B.fwv=new A.L(420,1.2,320)
B.fww=new A.L(8,2,6)
B.aQu=new A.L(8,2,8)
B.fwx=new A.L(8,4,4)
B.fwy=new A.L(8,9,8)
B.fwz=new A.L(15,19,0.5)
B.fwA=new A.L(0,3,10.5)
B.fwB=new A.L(0.4,0.38,0.12)
B.fwC=new A.L(0,0,-0.43)
B.aQv=new A.L(11.2,4.5,-6)
B.aQw=new A.L(1.2,96,112)
B.aQx=new A.L(0.08,3.8,2.4)
B.fwD=new A.L(9,5,9)
B.fwE=new A.L(0,58,12.4)
B.fwF=new A.L(1.5,1.3,0.6)
B.fwH=new A.L(0,-1.78,0.27)
B.fwI=new A.L(0,0.62,0)
B.fwL=new A.L(20,11.5,0)
B.fwM=new A.L(3.2,0.12,-6.7)
B.fwN=new A.L(12,0,-8.1)
B.fwP=new A.L(1.25,0.28,0.1)
B.fwQ=new A.L(0,36,10.2)
B.fwR=new A.L(24,0.08,16)
B.fwT=new A.L(0,4,-7.9)
B.fwU=new A.L(11.9,0,8)
B.fwW=new A.L(21,1.4,8)
B.fwY=new A.L(71.2,46.6,55)
B.fwZ=new A.L(3,3.28,-7.2)
B.fx_=new A.L(-6.1,1.2,-6.4)
B.fx0=new A.L(1.4,26,0.4)
B.fx2=new A.L(2.8,3.4,2.4)
B.fx3=new A.L(0,-45.5,0.5)
B.fx4=new A.L(1.8,4,1)
B.fx5=new A.L(5,1.6,0.5)
B.fx7=new A.L(0.1,-2,2.4)
B.fx8=new A.L(0,0.2,2.8)
B.fx9=new A.L(6,10,1.4)
B.fxb=new A.L(43,23,0.3)
B.fxc=new A.L(18.9,2.6,0)
B.fxd=new A.L(-12,0,-8.1)
B.fxe=new A.L(11.8,4,0)
B.aQy=new A.L(-71.7,6,55)
B.fxg=new A.L(5.6,0.3,1.9)
B.fxj=new A.L(52,8,0.4)
B.fxk=new A.L(4.6,7.6,3)
B.fxl=new A.L(-1,0,-1.2)
B.fxm=new A.L(0,1.7,0)
B.fxo=new A.L(-1,0,1.5)
B.fxp=new A.L(5,8,0.4)
B.fxq=new A.L(5,2.2,0.8)
B.fxr=new A.L(0.18,0.12,0.08)
B.fxs=new A.L(147,3,1.4)
B.fxt=new A.L(4,16.2,0)
B.fxu=new A.L(10,15,0.5)
B.fxv=new A.L(144,5,0.7)
B.fxw=new A.L(0,34,1.1)
B.fxx=new A.L(1.2,-1.7,2.3)
B.fxz=new A.L(0.82,1.7,0.3)
B.fxA=new A.L(-0.12,0,0)
B.fxC=new A.L(3.5,94,0.2)
B.fxD=new A.L(1.1,2.05,0.04)
B.fxE=new A.L(25,79,1.2)
B.fxF=new A.L(10,14,0.5)
B.fxG=new A.L(5,8,0.5)
B.fxH=new A.L(-20,11.5,0)
B.fxI=new A.L(0,-0.5,0.6)
B.fxJ=new A.L(28,80,1.4)
B.fxK=new A.L(46,0.2,170)
B.fxM=new A.L(0,3.4,0.8)
B.fxO=new A.L(-0.85,4,-3.2)
B.fxQ=new A.L(40,7.2,1.2)
B.aQz=new A.L(0.42,0.34,0.12)
B.fxR=new A.L(1.7,0.08,1.2)
B.fxS=new A.L(1.2,24,0.4)
B.fxT=new A.L(0,0,0.38)
B.fxV=new A.L(5.2,3.9,-7.76)
B.fxX=new A.L(0.07,0.3,0.03)
B.fxZ=new A.L(22,0.2,130)
B.fy0=new A.L(20,1.4,8)
B.fy1=new A.L(0,-0.2,0.19)
B.fy3=new A.L(1.2,49,36)
B.fy4=new A.L(0,9.3,0)
B.fy5=new A.L(9,14,5.5)
B.fy7=new A.L(-120.5,108,-10)
B.fy8=new A.L(0,40,0.95)
B.fya=new A.L(0,-1.9,-1.2)
B.fyb=new A.L(-3.2,1.15,-7.78)
B.fyc=new A.L(0,-3.4,1.2)
B.fyd=new A.L(64,10,0.2)
B.fye=new A.L(0,-1.78,0.53)
B.aQA=new A.L(-6.5,7.4,-3)
B.fyf=new A.L(-4.6,-2,1.2)
B.fyh=new A.L(0,40,1.4)
B.fyi=new A.L(-3,36,10.6)
B.fyj=new A.L(0,14.5,-1.5)
B.fyk=new A.L(0,0.2,0)
B.fym=new A.L(160,1.2,120)
B.fyn=new A.L(7,40,2.4)
B.fyo=new A.L(30,26,0.6)
B.fyp=new A.L(3.4,3.25,-7.85)
B.fyq=new A.L(72.8,0,55)
B.fyr=new A.L(0.5,62,30)
B.fys=new A.L(3,1.55,-7.1)
B.fyt=new A.L(0.4,3,3)
B.aQD=new A.L(0,-0.1,0.1)
B.fyu=new A.L(0,0,0.04)
B.fyv=new A.L(2.4,11.6,-3.6)
B.fyw=new A.L(4,11,3.5)
B.fyy=new A.L(5,8.6,-2.25)
B.fyz=new A.L(0,22,12.4)
B.fyA=new A.L(0,-1.78,0.3)
B.fyB=new A.L(2.2,2.2,1.8)
B.fyC=new A.L(0,1.9,-1.2)
B.fyD=new A.L(0,56,2.1)
B.fyE=new A.L(0.26,0.04,0.02)
B.fyF=new A.L(-2.4,11.6,-3.6)
B.fyG=new A.L(11.25,0,-2.25)
B.fyH=new A.L(1,-1.8,2.4)
B.fyI=new A.L(-11.8,4,0)
B.fyJ=new A.L(11.2,4.7,-6)
B.fyK=new A.L(24,8,0.05)
B.aQE=new A.L(3.6,1.6,5)
B.fyM=new A.L(0.12,0,0)
B.fyN=new A.L(1.1,1.1,0.03)
B.fyO=new A.L(20,1.2,0.4)
B.fyP=new A.L(3.4,3.55,-7.85)
B.fyR=new A.L(0,0.05,110)
B.fyS=new A.L(71.6,-22,62)
B.aQF=new A.L(1.5,18,3.5)
B.fyV=new A.L(3.5,3.1,-7.15)
B.fyW=new A.L(-0.28,0.55,-0.8)
B.fyX=new A.L(0,-0.2,0.24000000000000002)
B.aQG=new A.L(20,26,0.3)
B.fyZ=new A.L(1,-0.2,0.14)
B.fz_=new A.L(-1.9,0,-2.25)
B.fz0=new A.L(0,-0.9,1.1)
B.fz1=new A.L(8.2,1.05,-6.7)
B.fz4=new A.L(0.07,0.4,0.03)
B.fz5=new A.L(2,3.8,0.08)
B.fz6=new A.L(31,83,0.9)
B.fz7=new A.L(64,40,-3.2)
B.aQH=new A.L(1.4,3,112)
B.fz8=new A.L(0,46.6,0.8)
B.fza=new A.L(0,0,-8.8)
B.fzb=new A.L(0,0.7,-1)
B.fze=new A.L(-11.9,0,8)
B.fzf=new A.L(7,0,1.5)
B.fzg=new A.L(-90,0.05,130)
B.fzh=new A.L(-8.4,0.7,-6.4)
B.fzi=new A.L(-3.2,1.45,-7.78)
B.fzj=new A.L(0,41,0.45)
B.fzk=new A.L(-6.575,0,-0.25)
B.fzm=new A.L(0,14.6,-1.5)
B.aQJ=new A.L(0,0,-2.3)
B.a7v=new A.L(-13,12.5,0)
B.fzo=new A.L(0,0,0.62)
B.fzp=new A.L(0.2,-0.3,-0.4)
B.aQK=new A.L(10.85,18,0.5)
B.fzq=new A.L(0.6,70,0.6)
B.fzr=new A.L(1.4,1.3,0.02)
B.fzs=new A.L(30,1.4,0.4)
B.fzt=new A.L(6.3,1.5,-7.2)
B.aQL=new A.L(0,0.62,2.85)
B.aQM=new A.L(0.05,8,16)
B.fzu=new A.L(0,-1.2,5)
B.fzw=new A.L(0.2,-2,2.6)
B.fzz=new A.L(11.2,2.4,-5.18)
B.fzB=new A.L(-1,-0.2,0.14)
B.fzC=new A.L(1.2,1.2,0.3)
B.aQO=new A.L(2,0.08,2.4)
B.fzE=new A.L(9.5,13.5,1.4)
B.fzF=new A.L(-0.32,0,0.5)
B.fzH=new A.L(0.8,0.55,0.05)
B.fzI=new A.L(0.14,0.35,17)
B.fzJ=new A.L(1.4,2.4,0.3)
B.fzK=new A.L(0,11,8.2)
B.fzL=new A.L(0,24,-0.6)
B.fzM=new A.L(40,1.6,14)
B.fzP=new A.L(0,42,10.6)
B.fzQ=new A.L(0,1.95,0.31)
B.fzR=new A.L(150,1.2,112)
B.aQP=new A.L(0.75,4.5,0.1)
B.fzT=new A.L(0.12,0,0.05)
B.fzV=new A.L(9,1.2,9)
B.fzW=new A.L(0,-0.5,0)
B.fzZ=new A.L(5.5,8.5,0.5)
B.aQQ=new A.L(0.05,8,9.6)
B.fA0=new A.L(1.5,94,3.5)
B.fA1=new A.L(0,8.2,0)
B.fA3=new A.L(4,94,0.4)
B.aQR=new A.L(1.4,8,1)
B.fA4=new A.L(3.7,1.2,-7.1)
B.fA5=new A.L(8.2,0.05,-6.7)
B.fA6=new A.L(0,-0.3,0)
B.fA7=new A.L(6.575,0,-0.25)
B.aQS=new A.L(0,1.8,0)
B.fA8=new A.L(3,3.21,-7.2)
B.fAa=new A.L(9.8,5,-7.75)
B.fAb=new A.L(1.5,3.5,112)
B.fAc=new A.L(2.4,0.5,0.4)
B.fAd=new A.L(3,1.85,-7.1)
B.a7x=new A.L(13,12.5,0)
B.fAi=new A.L(0.34,0.66,0.9)
B.fAk=new A.L(12,0.4,6)
B.fAl=new A.L(-6.5,7.9,-3)
B.fAm=new A.L(0,13.6,-1.5)
B.fAn=new A.L(1.5,1.5,0.05)
B.fAo=new A.L(-6.5,5,-3)
B.fAp=new A.L(58.4,1.6,50)
B.fAq=new A.L(0.02,0.28,0.05)
B.fAr=new A.L(0,0.7,1)
B.aQU=new A.L(13,8.6,9.5)
B.fAs=new A.L(-3.6,4,-7.76)
B.fAt=new A.L(0.82,0.9,0.05)
B.fAu=new A.L(0,-5.5,-0.25)
B.fAz=new A.L(1.9,0,0)
B.fAA=new A.L(0.45,0.72,0.06)
B.fAC=new A.L(14,0.4,7)
B.fAD=new A.L(64,24,-3.2)
B.fAE=new A.L(0,9.2,0)
B.fAF=new A.L(0,0.03,0)
B.fAG=new A.L(-13,15,2)
B.fAH=new A.L(-14,17,4)
B.fAI=new A.L(-14,20,-28)
B.fAJ=new A.L(-1,0,-8)
B.fAK=new A.L(-22,14,0)
B.fAM=new A.L(-37,16,0)
B.fAN=new A.L(-42,-34,96)
B.fAO=new A.L(0,-0.6,22)
B.aQV=new A.L(-4,20,8)
B.fAQ=new A.L(-72,6,55)
B.fAR=new A.L(-8,-28,104)
B.fAS=new A.L(-8,-39,96)
B.fAT=new A.L(0,0.35,0.78)
B.fAU=new A.L(-11.9,0,-8)
B.fAV=new A.L(38,1.4,12)
B.fAW=new A.L(25,0.5,66)
B.fAX=new A.L(-8.4,1.9,-7.2)
B.fAZ=new A.L(0,-0.6,100)
B.aQW=new A.L(1.25,1,0.1)
B.fB_=new A.L(11.2,0,-6)
B.fB0=new A.L(1.2,1.1,0.8)
B.fB2=new A.L(150,49,1.2)
B.fB3=new A.L(62,0.2,42)
B.fB4=new A.L(4.6,1.5,-3.6)
B.fB5=new A.L(0,-0.7,0.8)
B.fB6=new A.L(8.9,1.9,0.9)
B.fB7=new A.L(0,-1.55,-0.6)
B.fB8=new A.L(1.78,4.25,0.08)
B.fB9=new A.L(27,0.6,19)
B.fBa=new A.L(0,5.5,-0.25)
B.fBb=new A.L(0,0.7,0)
B.fBc=new A.L(-1.2,-1.6,2.2)
B.fBd=new A.L(11,25,0.3)
B.aQX=new A.L(13,8.6,-9.5)
B.aQY=new A.L(0.05,0.12,0.03)
B.aQZ=new A.L(8.2,0.95,-6.7)
B.fBe=new A.L(40,1.2,22)
B.fBf=new A.L(0.7,1.5,-7.2)
B.fBg=new A.L(0,15.3,-3.6)
B.fBh=new A.L(120.5,108,-10)
B.fBi=new A.L(0.1,0,0)
B.fBj=new A.L(0.32,0,0.5)
B.fBl=new A.L(-0.9,0,4.4)
B.fBm=new A.L(-6.5,7.2,-3)
B.fBo=new A.L(6.2,0.18,2.1)
B.fBq=new A.L(36,1.6,12)
B.fBr=new A.L(15.5,2.6,0)
B.fBt=new A.L(-8,-47.8,70)
B.fBu=new A.L(14,1.5,3.5)
B.aR_=new A.L(17,24,0.3)
B.fBv=new A.L(5.2,3.9,-7.82)
B.fBw=new A.L(0,0.7,2.4)
B.fBx=new A.L(0,0.3,0)
B.aR0=new A.L(2.3,7,0.5)
B.aR1=new A.L(-13,8.6,9.5)
B.fBB=new A.L(0,-1.99,0.14)
B.fBC=new A.L(0.4,36,34)
B.fBE=new A.L(4.6,-2,1.2)
B.aR2=new A.L(0,0,-2.4)
B.fBF=new A.L(0,-1.78,0.52)
B.fBG=new A.L(0.12,0.1,0.03)
B.fBH=new A.L(9.8,5,-7.58)
B.aR3=new A.L(0.5,1.4,2)
B.fBI=new A.L(3.5,0.15,-7.2)
B.fBJ=new A.L(1.2,26.4,20)
B.fBK=new A.L(-3.6,4,-7.82)
B.fBL=new A.L(0.3,2,36)
B.fBN=new A.L(24,0.8,6.5)
B.fBP=new A.L(22,0.5,5)
B.fBQ=new A.L(0,22,2.1)
B.fBT=new A.L(0,56,0.5)
B.fBU=new A.L(150,1.2,70)
B.fBV=new A.L(-19.5,-1,-1.5)
B.fBW=new A.L(80,0.5,60)
B.fBX=new A.L(6.85,4,-3.2)
B.fBY=new A.L(20,24,0.6)
B.fBZ=new A.L(24,28,1.2)
B.aR5=new A.L(0.12,3,1.9)
B.fC_=new A.L(0.06,0.62,0.8)
B.fC0=new A.L(0,18.5,0)
B.fC2=new A.L(9.55,5.7,-7.5)
B.fC4=new A.L(0.8,2.4,0.3)
B.aR6=new A.L(0,0.7,2)
B.aR7=new A.L(1.5,16,40)
B.fC5=new A.L(0,47.25,-2.25)
B.fC6=new A.L(0.5,0.5,0.04)
B.fC7=new A.L(12.5,39,0.6)
B.fC8=new A.L(0,3,0.9)
B.fC9=new A.L(3,36,10.6)
B.fCb=new A.L(0.14,8,0.3)
B.fCc=new A.L(1.9,0.05,1.35)
B.fCf=new A.L(0.6,0.12,0.03)
B.fCg=new A.L(-10.7,1.2,-6.4)
B.fCh=new A.L(-71.2,46.6,55)
B.fCP=new A.BK("noGround","It works, but there is no ground wire. Without a ground nothing protects you if an appliance fails.",!0,!1,!1)
B.fCQ=new A.BK("short","A hot wire touched the ground. That is a short circuit: huge current, sparks and fire. The breaker slams off.",!1,!0,!0)
B.fCR=new A.BK("reversed","Hot and neutral are swapped (reversed polarity). Things still run, but the metal part of a lamp or appliance is live. That can shock someone. Black goes on brass, white on silver.",!0,!1,!1)
B.fCS=new A.BK("dead","The hot wire is not connected to the right place, so nothing gets power. The device is dead.",!1,!1,!1)
B.fCT=new A.BK("ok","Wired correctly. Hot, neutral and ground are all in the right place.",!0,!1,!1)
B.fCU=new A.BK("bonded","The neutral and the ground were joined. A GFCI or the breaker may trip for no reason, and current can flow where it should not.",!0,!0,!1)
B.fCV=new A.BK("openNeutral","The neutral wire is not connected. Nothing runs, but the hot wire is still connected, so the slots can still be live. That is dangerous.",!1,!1,!1)
B.fCW=new A.BK("dead","The wires are on the taped LOAD screws, so no power reaches the outlet. Power comes in on LINE.",!1,!1,!1)
B.fCX=new A.BK("short","The hot and the neutral were joined together. That is a short circuit: a bang, sparks and a tripped breaker.",!1,!0,!0)
B.fFD=new A.az9(null)
B.epH=new C.z(-70,10)
B.epB=new C.z(-20,50)
B.e8p=new C.z(0,44)
B.cVS=w([B.epH,B.epB,B.e8p],x.f)
B.fGD=new A.P_(B.cVS,!0,-1,"Watching the big TV",2)})();(function staticFields(){$.aTC=null})();(function lazyInitializers(){var w=a.lazyFinal
w($,"iaQ","hkK",()=>C.a([A.aSk("Wire a standard 120 volt receptacle: black to brass, white to silver, bare copper to green.",B.PG,B.daf,"outlet",B.cIO,"Wall outlet",new A.fmt()),A.aSk("A single-pole switch breaks the hot wire to the light: two black wires go on the two brass screws.",B.cWn,B.cJp,"switch",B.cHo,"Light switch",new A.fmu()),A.aSk("A GFCI protects you near water. Power comes in on LINE. The LOAD screws (covered with tape) feed other outlets.",B.PG,B.cQw,"gfci",B.cZ1,"GFCI outlet",new A.fmv()),A.aSk("Join the house wires to the fixture wires with wire nuts: black to black, white to white, ground to ground.",B.PG,B.cHw,"light",B.d9l,"Ceiling light",new A.fmw()),A.aSk("A fan hangs from a strong fan-rated box. Join black, white and ground with wire nuts, then fasten the canopy.",B.PG,B.cHx,"fan",B.cOe,"Ceiling fan",new A.fmx())],C.ax("P<a3n>")))
w($,"ib0","Gd",()=>{var v,u=C.a([],x.n)
for(v=0;v<10;++v)u.push(-72+16*v)
return u})})()};
(a=>{a["x+GStCxWsDySPFHQM45sKO2F+Is="]=a.current})($__dart_deferred_initializers__);