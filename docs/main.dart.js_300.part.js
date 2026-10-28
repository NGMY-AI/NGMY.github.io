((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,C,D,V,G,N,O,W,P,Q,X,I,Y,Z,R,S,T,A_,A0,A1,A2,K,A={
zC(d,e,f){var w=d.a,v=d.b,u=d.c
return new A.J(w+(e.a-w)*f,v+(e.b-v)*f,u+(e.c-u)*f)},
bBs(d,e){var w=Math.cos(e),v=Math.sin(e),u=d.a,t=d.c
return new A.J(u*w+t*v,d.b,-u*v+t*w)},
Ap(d,e,f,g){var w,v,u,t,s,r,q,p,o=new A.fJf(Math.cos(e),Math.sin(e)),n=new A.fJd(f),m=new A.fJe(n,e,o,g),l=new A.fJc(n,e,o),k=C.a([],x.z)
for(w=d.length,v=x.o,u=0;u<d.length;d.length===w||(0,C.L)(d),++u){t=d[u]
s=C.a([],v)
for(r=t.a,q=r.length,p=0;p<r.length;r.length===q||(0,C.L)(r),++p)s.push(m.$1(r[p]))
k.push(new A.nD(s,l.$1(t.b),t.c,t.d,t.e,t.f,t.r,t.w,t.x,t.y,t.z))}return k},
G9(d,e,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
if(d.length<3)return d
w=C.a([D.d.gL(d)],x.o)
for(v=1;u=v+1,u<d.length;v=u){t=d[v-1]
s=d[v]
r=d[u]
q=s.a
p=s.b
o=s.c
n=new A.J(q-t.a,p-t.b,o-t.c)
m=new A.J(r.a-q,r.b-p,r.c-o)
l=Math.min(e,n.gT3()*0.5)
k=Math.min(e,m.gT3()*0.5)
j=n.gpD(0)
i=new A.J(q-j.a*l,p-j.b*l,o-j.c*l)
j=m.gpD(0)
h=new A.J(q+j.a*k,p+j.b*k,o+j.c*k)
for(g=0;g<=a0;++g){f=g/a0
w.push(A.zC(A.zC(i,s,f),A.zC(s,h,f),f))}}w.push(D.d.gal(d))
return w},
agt(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
if(a3.length<3)return a3
w=C.a([],x.o)
for(v=0;u=v+1,t=a3.length,u<t;v=u){s=v===0?a3[v]:a3[v-1]
r=a3[v]
q=a3[u]
p=v+2
o=p<t?a3[p]:q
for(t=s.a,p=r.a,n=q.a,m=o.a,l=s.b,k=r.b,j=q.b,i=o.b,h=s.c,g=r.c,f=q.c,e=o.c,d=0;d<a4;++d){a0=d/a4
a1=a0*a0
a2=new A.fJ6(a0,a1,a1*a0)
w.push(new A.J(a2.$4(t,p,n,m),a2.$4(l,k,j,i),a2.$4(h,g,f,e)))}}w.push(D.d.gal(a3))
return w},
hHV(d){var w,v,u,t,s,r,q,p,o,n
for(w=d.length,v=!0,u=!0,t=0;t<w;++t)if(d[t].c>=0.5)u=!1
else v=!1
if(v)return d
if(u)return B.d15
s=C.a([],x.o)
for(r=0;w=d.length,r<w;){q=d[r];++r
p=d[r%w]
w=q.c
o=w>=0.5
n=p.c
if(o)s.push(q)
if(o!==n>=0.5)s.push(A.zC(q,p,(0.5-w)/(n-w)))}return s},
hII(a4,a5,a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=a6[0],a2=a1.a,a3=a1.b
a1=a6[1]
w=a1.a
v=a1.b
a1=a6[2]
u=a1.a
t=a1.b
a1=a6[3]
s=a1.a
r=a1.b
q=w-u
p=s-u
o=a2-w+u-s
n=v-t
m=r-t
l=a3-v+t-r
if(Math.abs(o)<1e-9&&Math.abs(l)<1e-9){k=w-a2
j=s-a2
i=v-a3
h=r-a3
g=0
f=0}else{e=q*m-p*n
if(Math.abs(e)<1e-9)return
g=(o*m-p*l)/e
f=(q*l-o*n)/e
k=w-a2+g*w
j=s-a2+f*s
i=v-a3+g*v
h=r-a3+f*r}d=a5.e
a1=new Float64Array(16)
a1[15]=1
a1[14]=0
a1[13]=a3
a1[12]=a2
a1[11]=0
a1[10]=1
a1[9]=0
a1[8]=0
a1[7]=f/d
a1[6]=0
a1[5]=h/d
a1[4]=j/d
a1[3]=g/320
a1[2]=0
a1[1]=i/320
a1[0]=k/320
a0=a4.a
J.bA(a0.save())
a4.av(0,a1)
a0.clipRect(C.c4(new C.aa(0,0,320,0+d)),$.qG()[1],!0)
a5.c.$3(a4,new C.at(320,d),a7)
a0.restore()},
J:function J(d,e,f){this.a=d
this.b=e
this.c=f},
nD:function nD(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
_.z=n},
d3:function d3(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
rZ:function rZ(d,e,f){this.a=d
this.b=e
this.c=f},
zk:function zk(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Wv:function Wv(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.e=g
_.f=h
_.r=i},
kj:function kj(d){var _=this
_.a=d
_.c=_.b=0
_.d=1
_.e=0
_.f=2
_.r=!1
_.x=_.w=0},
bUO:function bUO(d,e){this.a=d
this.b=e},
bUP:function bUP(d){this.a=d},
bUN:function bUN(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
bUQ:function bUQ(d,e,f){this.a=d
this.b=e
this.c=f},
bUM:function bUM(d,e){this.a=d
this.b=e},
bUR:function bUR(d,e,f){this.a=d
this.b=e
this.c=f},
fJf:function fJf(d,e){this.a=d
this.b=e},
fJd:function fJd(d){this.a=d},
fJe:function fJe(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fJc:function fJc(d,e,f){this.a=d
this.b=e
this.c=f},
fJ6:function fJ6(d,e,f){this.a=d
this.b=e
this.c=f},
Az:function Az(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=6
_.f=160
_.r=-1.25
_.w=1.35
_.x=0
_.y=1.25
_.z=!1
_.ax=_.at=_.as=_.Q=null
_.P$=0
_.S$=h
_.bt$=_.bL$=0},
bFY:function bFY(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bFX:function bFX(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bOS:function bOS(d){this.a=d},
b3y:function b3y(d,e,f,g,h,i,j,k,l){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.w=j
_.x=k
_.a=l},
clh:function clh(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cli:function cli(d,e){this.a=d
this.b=e},
cld:function cld(){},
cle:function cle(d,e,f){this.a=d
this.b=e
this.c=f},
clg:function clg(d,e){this.a=d
this.b=e},
clf:function clf(d){this.a=d},
BU:function BU(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=0
_.d=f
_.e=g
_.f=h
_.r=i
_.w=j
_.x=k
_.y=l},
ate:function ate(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.z=k
_.a=l},
boD:function boD(d,e,f,g,h,i){var _=this
_.d=$
_.e=d
_.f=e
_.r=f
_.w=40
_.x=g
_.bq$=h
_.a7$=i
_.c=_.a=null},
eQP:function eQP(d){this.a=d},
eQO:function eQO(d){this.a=d},
eQL:function eQL(d){this.a=d},
eQM:function eQM(d){this.a=d},
eQN:function eQN(d){this.a=d},
eQJ:function eQJ(d){this.a=d},
eQK:function eQK(d,e){this.a=d
this.b=e},
aLo:function aLo(){},
aSn(d,e,f,g,h,i,j){return new A.a3p(g,i,h,e,f,j)},
Ac(d){return D.d.iA($.hlD(),new A.fm7(d))},
bBR(d,e){var w,v,u=d.e,t=new C.K(u,new A.fJy(),C.T(u).k("K<1,n>")).fH(0)
u=e.b
w=C.a3(u).k("bc<2>")
v=C.da(new C.bc(u,w),w.k("H.E"))
return t.d9(0,v.gkS(v))},
hhx(d,e,f,g,h){var w,v
if(e.a&&e.c===0){if(e.r)return"SHOCK! The breaker was still ON and you touched a live wire. Always turn the power OFF and test the wires first."
return"STOP! The breaker is still ON, so these wires are live (120 volts). Turn the breaker OFF first. This can shock you badly."}if(e.c!==0)return"The device is already in the box. Pull it out again to change the wires."
if(!e.r&&!h&&!g.c.t(0,f))return d.r.$2(f,g)
w=e.b
v=g.a
if(w.h(0,v)!=null)return"That place already has a wire. Tap the wire to take it off first."
if(new C.bc(w,C.a3(w).k("bc<2>")).t(0,f))return"That wire is already fastened. Tap it to take it off if you want to move it."
w.n(0,v,f)
return null},
aff(b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8=null,a9=new A.fmd(b1),b0=new A.fmb(b1)
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
a6=new C.a2(w,new A.fm9(),h).gM(0)
a7=new C.a2(w,new A.fma(),h).gM(0)
if(t>0||o>0)return B.fET
w=u>0
if(!(w&&s>0))h=r>0&&v>0
else h=!0
if(h)return B.fF_
if(w&&r>0)return B.fEU
if(q>0||n>0)return B.fEX
if(m>0&&v<a6)return B.fEZ
if(v<a6)return B.fEV
if(a7>0&&s<a7)return B.fEY
if(p===0)return B.fES
return B.fEW},
bxp(d,e){var w
if(d==="light"||d==="fan")w=e.c===0?6.4:0.6
else w=e.c===0?4.7:-0.25
return w},
bzz(d,e,f){var w,v
if(d==="light"||d==="fan"){w=A.bxp(d,f)
v=f.c===0?w-3.2:w
switch(e){case 51:return new A.J(-1.5,-0.3,v)
case 52:return new A.J(0,-0.3,v)
default:return new A.J(1.5,-0.3,v)}}w=A.bxp(d,f)
switch(e){case 21:return new A.J(0.98,-0.2+(d==="gfci"?0.95:0.85),w-0.45)
case 22:return new A.J(0.98,-0.2+(d==="gfci"?-0.75:-0.55),w-0.45)
case 23:return new A.J(-0.98,-0.2+(d==="gfci"?0.95:0.85),w-0.45)
case 24:return new A.J(-0.98,-0.2+(d==="gfci"?-0.75:-0.55),w-0.45)
default:return new A.J(0,-1.98,w+0.52)}},
fSL(a9,b0,b1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=C.a([],x.z),a6=new A.kj(a5),a7=a9.a,a8=a7==="light"||a7==="fan"
if(b1){a6.b=1
a6.iO(B.fB0,B.aR3,B.uI,3)
a6.iO(B.fBT,B.aR3,B.uI,3)
a6.iO(B.fD7,B.aRl,B.uI,2)
a6.iO(B.fCg,B.aRl,B.uI,2)
a6.b=2
a6.qb(B.fAG,B.aR_,B.m2,0.05,3)
a6.qb(B.fAk,B.aR_,B.m2,0.05,3)
a6.qb(B.fAd,B.fDt,B.m2,0.05,2)}w=A.h8r(a6,a7,!0)
v=new A.fkb(a6,b0,a7,a8)
u=D.d.gL(w)
t=a7==="switch"
if(t){s=D.d.gal(w)
v.$5(10,u.ad(0,B.fww),B.fDa,"blackLine",B.Kd)
v.$5(13,s.ad(0,B.fDf),B.fz9,"blackLoad",B.Kd)
v.$5(12,u.ad(0,B.fBC),B.fyG,"ground",B.wY)
a6.b=6
r=x.o
a6.jP(C.a([u.ad(0,B.aQZ),B.fwN,B.Tr],r),0.075,B.wG,!1,0.3,8)
a6.jP(C.a([s.ad(0,B.aQZ),B.fB5,B.Tr],r),0.075,B.wG,!1,0.3,8)
a6.Kb(B.Tr,B.fD4,0.28,B.abo,0.18,0.3,10)}else{v.$5(10,u.ad(0,B.fzd),B.fwJ,"black",B.Kd)
v.$5(11,u.ad(0,B.fA9),B.fBd,"white",B.wG)
v.$5(12,u.ad(0,B.fAq),B.fAl,"ground",B.wY)}if(a8)A.h9q(a6,a7,b0)
else A.h95(a6,a7,A.bxp(a7,b0),b0.w,!1)
if(b0.e&&b0.c===0){a6.b=0
a6.d=0.5
for(r=a9.f,q=r.length,p=0;p<q;++p){o=r[p]
n=A.bzz(a7,o.a,b0)
if(o.e)m=D.cp
else{l=o.f
if(l==="ground")m=D.bn
else{l=l==="neutral"?D.c:B.VD
m=l}}if(a8)l=0
else{l=n.a
if(l>0.4)l=0.12
else l=l<-0.4?-0.12:0}if(a8)k=0.6
else k=Math.abs(n.a)<0.4?0.2:0
a6.iN(new A.J(n.a+l,n.b+0,n.c+k),0.36,m,4,8,0.1)}a6.d=1}if(b0.c>=2&&!a8)A.hbu(a6,b0.w)
r=!1
if(b0.c>=2)if(b0.d)r=a7==="outlet"||a7==="gfci"
if(r)A.hQa(a6,b0.a&&!b0.w)
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
g=A.bxp(a7,b0)
e=q?"Ceiling fan":"Ceiling light"
q=q?"The motor housing with blades. It has three wires: black (motor), white (neutral) and green (ground).":"The light fixture with a frosted dome. It has three wires: black, white and green."
d=C.E([1,B.dVw,2,B.dVK,3,new A.d3(r,"A box that holds the wire connections. Every connection must be inside a box, never loose in the wall or the ceiling."+l,new A.J(0,0,-1.2),9),4,new A.d3(k,"The yellow jacket holds three wires: black (hot), white (neutral) and bare copper (ground). Yellow means 12 gauge wire for a 20 amp circuit. White jackets are 14 gauge for 15 amps.",new A.J(-0.4,1.5,-1.8),8),5,B.dW6,10,new A.d3("Black wire: hot","The hot wire brings the power from the breaker. It is the dangerous one. "+j,new A.J(-0.8,-0.8,1.2),7),13,B.dVi,11,new A.d3("White wire: neutral","The neutral wire carries the power back to the panel. "+i,new A.J(0,-0.8,1.2),7),12,new A.d3("Bare copper wire: ground","The ground wire is a safety path. If a wire touches metal, the current runs down the ground instead of through you. "+h,new A.J(0.5,-0.8,1.2),7),6,B.dVI,20,new A.d3(f,t,new A.J(0,-0.2,g),9),21,B.dVN,22,B.dW5,23,B.dVG,24,B.dVL,25,B.dVz,26,B.dVO,27,B.dW_,28,B.dVu,30,B.dVd,31,B.dVb,51,B.dVJ,52,B.dVf,53,B.dVS,54,new A.d3(e,q,new A.J(0,0,6.4),9),55,B.dW1],x.S,x.q)
a0=C.a([],x.E)
if(b0.f&&b0.c===0)for(t=a9.f,r=t.length,p=0;p<r;++p){o=t[p]
n=A.bzz(a7,o.a,b0)
a1=o.f
A:{q="hot"===a1
if(q){l=B.eva
break A}if("neutral"===a1){l=B.emm
break A}if("ground"===a1){l=B.eoS
break A}l=B.ecx
break A}a2=l.a
if(a8){B:{if(q){k="BLACK NUT \xb7 HOT"
break B}if("neutral"===a1){k="WHITE NUT \xb7 NEUTRAL"
break B}k="GROUND"
break B}a3=k}else a3=a2
if(a8){C:{if(q){q=B.fzT
break C}if("neutral"===a1){q=B.fzP
break C}q=B.fDC
break C}a4=q}else{q=n.a
if(q>0.4)k=3.8
else k=q<-0.4?-4.2:0
a4=new A.J(k,Math.abs(q)<0.4?-3:-0.4,1)}a0.push(new A.rZ(new A.J(n.a+a4.a,n.b+a4.b,n.c+a4.c),a3,l.b))}if(b0.a&&b0.c===0)a0.push(B.bPm)
return new A.zk(a5,d,a0,B.vA)},
h8r(d,e,f){var w,v,u=e==="light"||e==="fan"
d.b=3
if(u){d.e5(B.aRn,B.aR2,2.2,B.wX,0.3,18)
d.a2L(B.aR2,B.hb,2.2,B.wX,!1,!0,0.3,18)}else{d.bP(B.aRn,B.fAM,B.wX,0.3)
d.bP(B.fyY,B.aQS,B.wX,0.3)
d.bP(B.fxb,B.aQS,B.wX,0.3)
d.bP(B.fAg,B.aR7,B.wX,0.3)
d.bP(B.fzN,B.aR7,B.wX,0.3)}w=C.a([],x.o)
v=new A.f6n(d,f,w)
if(e==="switch"){v.$2(4,B.cPy)
v.$2(5,B.cNP)}else v.$2(4,B.d_L)
return w},
hhC(d,e){var w
A:{if(10===e){w=d==="switch"?"blackLine":"black"
break A}if(13===e){w="blackLoad"
break A}if(11===e){w="white"
break A}if(12===e){w="ground"
break A}w=null
break A}return w},
h95(d,e,f,g,h){var w,v,u,t,s,r,q,p,o,n,m,l,k=new A.J(0,-0.2,f),j=e==="switch",i=e==="gfci"
if(g)w=B.wS
else w=j?B.bbg:B.Wh
v=i?3.1:2.95
d.e=0
d.b=20
if(!h){d.bP(k.ad(0,B.fy7),new A.J(1.5,v,1.3),w,0.25)
d.e=0.15
d.b=26
u=k.ad(0,B.fy1)
d.bP(u,B.fD5,g?B.b8t:B.Ks,0.8)
d.ct(k.ad(0,B.fBz),B.fEh,B.DQ)}d.e=0.3
d.b=27
u=k.ad(0,B.fzw)
d.bP(u,new A.J(1.3,i?2.85:2.7,0.16),w,0.3)
if(j){d.e=0.7
d.b=28
u=k.ad(0,B.fB4)
d.bP(u,B.fzb,g?B.wS:G.Wr,0.35)
u=k.ad(0,B.fCO)
d.bP(u,B.fCf,g?B.wS:B.ac4,0.35)}else{d.e=0.6
u=i?E.ar4:B.dbM
t=u.length
s=f+0.47
r=f+0.46
q=f+0.5
p=0
for(;p<t;++p){o=u[p]
d.b=27
n=-0.2+(o+0.04)
d.ct(new A.J(-0.28,n,s),B.fAL,B.DZ)
d.ct(new A.J(0.28,n,s),B.fzB,B.DZ)
n=-0.2+(o-0.32)
d.jF(new A.J(0,n,r),new A.J(0,n,q),0.11,B.DZ,10)}if(i){d.e=0.7
d.b=28
d.bP(k.ad(0,B.fBo),B.aQV,B.bew,0.3)
d.bP(k.ad(0,B.fDg),B.aQV,B.aev,0.3)}}if(h){d.e=0
return}m=i?0.95:0.85
l=i?-0.75:-0.55
u=new A.f7H(d,k)
if(!j){u.$6$taped(23,-1,m,B.acn,B.acN,i)
u.$5(24,-1,l,B.acn,B.acN)}u.$6$taped(21,1,m,B.VD,B.ae1,i)
u.$5(22,1,l,B.VD,B.ae1)
d.e=0.9
d.b=25
d.e5(k.ad(0,B.fAe),k.ad(0,B.fDD),0.18,B.bgm,0.7,12)
d.ct(k.ad(0,B.fzR),B.fAi,D.ec)
d.bP(k.ad(0,B.fyc),B.fBr,B.b5m,0.6)
d.e=0},
h9q(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k=e==="fan",j=A.bxp(e,f)
d.e=0
d.b=55
w=j-0.3
v=j+0.3
u=k?3.3:3.5
t=f.w?B.wS:B.bbL
d.e5(new A.J(0,0,w),new A.J(0,0,v),u,t,0.45,20)
d.b=54
if(k){u=j+4.2
d.e5(new A.J(0,0,v),new A.J(0,0,u),0.45,B.b8p,0.5,10)
v=j+7.4
d.e5(new A.J(0,0,u),new A.J(0,0,v),3.6,B.Vd,0.5,18)
d.e5(new A.J(0,0,v),new A.J(0,0,j+8.6),1.6,B.bfJ,0.7,14)}else{d.d=0.92
v=f.w?B.wS:B.b9g
d.iN(new A.J(0,0,j+1.2),3.6,v,6,14,0.7)
d.d=1}d.b=54
s=[B.emv,B.e9K,B.et_]
for(v=x.o,r=j-3.2,q=0;q<3;++q){u=s[q]
p=f.c===0?r:j
t=u.b.a
d.jP(C.a([new A.J(t,-0.3,w),new A.J(t,-0.3,p+0.4)],v),0.07,u.a,!1,0.3,6)}if(f.c===0)for(w=[B.efR,B.eo_,B.evD],v=f.b,q=0;q<3;++q){o=w[q]
u=o.a
n=A.bzz(e,u,f)
d.b=u
d.e=0.8
t=n.a+0
m=n.b+0
l=n.c
d.e5(new A.J(t,m,l+-0.2),new A.J(t,m,l+0.3),0.09,B.wY,0.6,6)
if(v.ah(0,u))d.Kb(new A.J(t,m,l+-0.5),new A.J(t,m,l+0.9),0.4,o.b,0.26,0.4,8)
d.e=0}},
hbu(d,e){var w
d.e=0.4
d.b=30
w=e?B.wS:B.b4x
d.bP(B.fBi,B.aR8,w,0.3)
d.bP(B.fAF,B.aR8,w,0.3)
d.bP(B.fx8,B.aRf,w,0.3)
d.bP(B.fxC,B.fyk,w,0.3)
d.bP(B.fDz,B.aRf,w,0.3)
d.e5(B.fzG,B.fAC,0.1,B.Ks,0.8,10)
d.e=0},
hQa(d,e){var w,v
d.b=31
for(w=0;w<2;++w){v=B.cRZ[w]
d.e5(new A.J(v,0.52,0.2),new A.J(v,0.52,1.9),0.04,B.Ks,0.8,6)}d.bP(B.fvP,B.fCX,B.b8Z,0.35)
d.b8a(B.aR4,0.2,e?D.VF:B.bcp,0.9)
if(e){d.d=0.35
d.iN(B.aR4,0.5,D.VF,4,8,0)
d.d=1}},
mf:function mf(d,e,f,g,h){var _=this
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
a3p:function a3p(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.d=f
_.e=g
_.f=h
_.r=i},
fnd:function fnd(){},
fne:function fne(){},
fnf:function fnf(){},
fng:function fng(){},
fnh:function fnh(){},
fm7:function fm7(d){this.a=d},
fJy:function fJy(){},
BL:function BL(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fmd:function fmd(d){this.a=d},
fme:function fme(d){this.a=d},
fmb:function fmb(d){this.a=d},
fmc:function fmc(d){this.a=d},
fm9:function fm9(){},
fma:function fma(){},
fkb:function fkb(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fkc:function fkc(d){this.a=d},
f6n:function f6n(d,e,f){this.a=d
this.b=e
this.c=f},
f7H:function f7H(d,e){this.a=d
this.b=e},
bza(d){return D.d.dM(B.a0X,new A.fk0(d),new A.fk1())},
hhB(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j={},i=new A.fJx(),h=new A.fJu(),g=d.c
if(g==="hall"){w=e.e?d.gkv(0)-14:Math.min(e.d,d.gkv(0)-14)
v=i.$1(w)
return new A.b6y(w,v,d.gkv(0)/2,h.$1(v))}u=d.ghq(0)
t=d.ghq(0)/2-6
if(g==="bathroom")t=14
g=C.a([],x.f)
for(s=d.w,r=s.length,q=0;q<s.length;s.length===r||(0,C.L)(s),++q){p=s[q]
if(p.a==="back"){o=p.b
g.push(new C.z(o-19,o+19))}}D.d.b_(g,new A.fJv())
n=j.a=j.b=-u/2+6
m=new A.fJw(j)
for(u=g.length,q=0;q<g.length;g.length===u||(0,C.L)(g),++q){s=g[q]
l=s.a
if(l>n)m.$2(n,Math.min(l,t))
n=Math.max(n,s.b)}if(n<t)m.$2(n,t)
k=Math.max(30,j.a-j.b-4)
w=e.e?k:Math.min(e.d,k)
v=i.$1(w)
return new A.b6y(w,v,(j.b+j.a)/2,h.$1(v))},
yx(d,e,f,g,h,i,j,k){var w=x.S
return new A.a3T(d,e,f,g,h,i,j,k,C.a([],x._),C.a([0,0,0],x.t),C.aW(w),C.V(w,x.i),C.V(w,x.N),C.a([],x.I))},
fZA(d){var w=new A.aTE(d)
w.c29()
return w},
hqr(d){var w=new A.aTE(7)
w.buZ(d)
return w},
i3E(d){var w,v=d.c
A:{if("bedroom"===v){w=1
break A}if("kitchen"===v||"bathroom"===v){w=2
break A}w=0
break A}return w},
aTl:function aTl(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.f=_.e=0},
hk:function hk(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Di:function Di(d,e,f){this.a=d
this.b=e
this.c=f},
pu:function pu(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fk0:function fk0(d){this.a=d},
fk1:function fk1(){},
b6y:function b6y(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fJx:function fJx(){},
fJu:function fJu(){},
fJv:function fJv(){},
fJw:function fJw(d){this.a=d},
qb:function qb(d,e,f){this.a=d
this.b=e
this.c=f},
aTz:function aTz(d,e,f){this.a=d
this.b=e
this.c=f},
a3T:function a3T(d,e,f,g,h,i,j,k,l,m,n,o,p,q){var _=this
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
_.fx=_.fr=null
_.fy=!1
_.go=0
_.id=""
_.k2=_.k1=null},
bOj:function bOj(){},
aTE:function aTE(d){var _=this
_.a=""
_.b=d
_.c=!1
_.d=$
_.e=0},
bOU:function bOU(){},
bOV:function bOV(){},
bOZ:function bOZ(){},
bOY:function bOY(){},
bOX:function bOX(){},
bOW:function bOW(){},
aZ2(d,e,f){return new A.aoQ(f,d,e,null)},
aoQ:function aoQ(d,e,f,g){var _=this
_.d=d
_.f=e
_.r=f
_.a=g},
aCe:function aCe(d,e,f){var _=this
_.f=_.e=_.d=$
_.r="look"
_.w=!1
_.y=_.x=!0
_.z=!1
_.Q=0
_.as=-1
_.at=0
_.ax=null
_.ay=!0
_.ch=null
_.CW=d
_.cx=null
_.cy=0
_.db=60
_.dx=null
_.dy=""
_.fr=e
_.fx=!1
_.fy=f
_.go=null
_.id=0
_.c=_.a=null},
e0N:function e0N(){},
e0L:function e0L(d){this.a=d},
e0M:function e0M(d){this.a=d},
e0g:function e0g(d,e,f){this.a=d
this.b=e
this.c=f},
e0h:function e0h(d){this.a=d},
e0f:function e0f(d){this.a=d},
e0i:function e0i(d,e){this.a=d
this.b=e},
e_P:function e_P(d,e){this.a=d
this.b=e},
e0n:function e0n(d){this.a=d},
e_W:function e_W(d,e){this.a=d
this.b=e},
e_X:function e_X(d,e){this.a=d
this.b=e},
e_Y:function e_Y(d,e){this.a=d
this.b=e},
e_Z:function e_Z(d,e){this.a=d
this.b=e},
e0_:function e0_(d,e,f){this.a=d
this.b=e
this.c=f},
e_V:function e_V(d,e){this.a=d
this.b=e},
e00:function e00(d){this.a=d},
e06:function e06(d,e){this.a=d
this.b=e},
e03:function e03(){},
e04:function e04(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e02:function e02(d,e,f){this.a=d
this.b=e
this.c=f},
e05:function e05(d,e,f){this.a=d
this.b=e
this.c=f},
e01:function e01(d,e){this.a=d
this.b=e},
e0G:function e0G(d){this.a=d},
e0E:function e0E(d){this.a=d},
e0F:function e0F(d,e){this.a=d
this.b=e},
e0x:function e0x(d,e,f){this.a=d
this.b=e
this.c=f},
e0w:function e0w(){},
e0y:function e0y(){},
e0z:function e0z(d,e){this.a=d
this.b=e},
e0A:function e0A(d){this.a=d},
e0B:function e0B(d){this.a=d},
e0C:function e0C(d){this.a=d},
e0D:function e0D(d){this.a=d},
e0t:function e0t(d){this.a=d},
e0s:function e0s(d){this.a=d},
e0q:function e0q(d,e,f){this.a=d
this.b=e
this.c=f},
e0p:function e0p(d,e){this.a=d
this.b=e},
e0r:function e0r(d,e){this.a=d
this.b=e},
e0j:function e0j(d,e){this.a=d
this.b=e},
e0k:function e0k(d){this.a=d},
e0l:function e0l(){},
e0u:function e0u(d,e){this.a=d
this.b=e},
e0o:function e0o(d,e){this.a=d
this.b=e},
e0m:function e0m(d){this.a=d},
e_R:function e_R(d){this.a=d},
e_S:function e_S(d){this.a=d},
e0H:function e0H(d){this.a=d},
e_U:function e_U(d){this.a=d},
e_T:function e_T(d){this.a=d},
e_a:function e_a(d){this.a=d},
e_9:function e_9(d,e,f){this.a=d
this.b=e
this.c=f},
e_4:function e_4(){},
e_5:function e_5(){},
e_6:function e_6(d){this.a=d},
e_7:function e_7(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e_Q:function e_Q(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e0v:function e0v(d,e){this.a=d
this.b=e},
e0d:function e0d(d,e){this.a=d
this.b=e},
e0e:function e0e(d,e){this.a=d
this.b=e},
e_8:function e_8(d,e){this.a=d
this.b=e},
e_E:function e_E(d){this.a=d},
e_F:function e_F(d){this.a=d},
e_G:function e_G(d){this.a=d},
e_H:function e_H(d){this.a=d},
e_I:function e_I(d,e){this.a=d
this.b=e},
e_J:function e_J(d){this.a=d},
e_D:function e_D(d){this.a=d},
e_K:function e_K(d,e){this.a=d
this.b=e},
e_C:function e_C(d,e){this.a=d
this.b=e},
e_L:function e_L(d,e){this.a=d
this.b=e},
e_B:function e_B(d,e){this.a=d
this.b=e},
e_M:function e_M(d){this.a=d},
e_A:function e_A(d){this.a=d},
e_N:function e_N(d,e){this.a=d
this.b=e},
e_z:function e_z(d,e){this.a=d
this.b=e},
e_O:function e_O(d,e){this.a=d
this.b=e},
e0K:function e0K(d){this.a=d},
e0I:function e0I(d){this.a=d},
e0J:function e0J(d){this.a=d},
e_q:function e_q(d,e){this.a=d
this.b=e},
e_j:function e_j(d){this.a=d},
e_i:function e_i(){},
e_h:function e_h(d){this.a=d},
e_r:function e_r(d){this.a=d},
e_g:function e_g(d){this.a=d},
e_s:function e_s(d){this.a=d},
e_t:function e_t(d){this.a=d},
e_f:function e_f(d){this.a=d},
e_u:function e_u(d){this.a=d},
e_v:function e_v(d){this.a=d},
e_e:function e_e(d){this.a=d},
e_w:function e_w(d){this.a=d},
e_d:function e_d(d){this.a=d},
e_x:function e_x(d){this.a=d},
e_y:function e_y(d){this.a=d},
e_k:function e_k(d){this.a=d},
e_l:function e_l(d){this.a=d},
e_m:function e_m(d){this.a=d},
e_n:function e_n(d){this.a=d},
e_o:function e_o(d){this.a=d},
e_c:function e_c(){},
e_p:function e_p(d){this.a=d},
e_b:function e_b(d){this.a=d},
e0c:function e0c(d){this.a=d},
e09:function e09(d,e,f){this.a=d
this.b=e
this.c=f},
e0a:function e0a(d,e){this.a=d
this.b=e},
e08:function e08(d){this.a=d},
e0b:function e0b(d,e){this.a=d
this.b=e},
e07:function e07(d){this.a=d},
bgB:function bgB(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
dlH:function dlH(d,e){this.a=d
this.b=e},
bg_:function bg_(d,e){this.b=d
this.a=e},
hcN(e4,e5,e6,e7,e8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9="walls",e0="GFCI outlet",e1="Wall outlet",e2="\ud83d\udeb0 Needs plumbing",e3=e4.c
if(e3==="outside")return A.hMI(e4,e7,e6,e8)
w=x.z
v=C.a([],w)
u=new A.kj(v)
t=C.V(x.S,x.q)
s=C.a([],x.E)
r=C.a([],x.h)
q=e4.ghq(0)
p=e4.gkv(0)
o=C.a([],x.O)
for(n=e4.z,m=n.length,l=0;l<n.length;n.length===m||(0,C.L)(n),++l)o.push(B.av8[n[l]])
k=B.auW[e4.Q]
j=new A.fkp(e6)
u.f=0
u.b=j.$2("floor",310)
n=p/2
m=q+2.4
i=p+2
h=k.b
g=k.c
f=g==="tile"
if(f)e=0.35
else e=g==="wood"?0.15:0
u.qb(new A.J(0,-0.6,n),new A.J(m,1.2,i),h,e,3)
t.n(0,310,new A.d3("Floor","The "+k.a.toLowerCase()+" floor.",new A.J(0,0,n),140))
u.b=0
if(g==="wood")for(g=-q/2,d=1;d<8;++d){f=C.aq(h,D.w,0.25)
f.toString
u.ct(new A.J(g+d*q/8,0.05,n),new A.J(0.3,0.2,p),f)}else if(f)for(h=-q/2,d=1;d<6;++d){u.ct(new A.J(h+d*q/6,0.05,n),new A.J(0.3,0.2,p),B.ab4)
u.ct(new A.J(0,0.05,d*p/6),new A.J(q,0.2,0.3),B.ab4)}u.b=j.$2(d9,300)
u.iO(new A.J(0,48,-0.6),new A.J(m,96,1.2),o[0],3)
u.b=j.$2(d9,301)
h=-q
g=h/2
u.iO(new A.J(g-0.6,48,n),new A.J(1.2,96,p),o[1],3)
u.b=j.$2(d9,302)
f=q/2
u.iO(new A.J(f+0.6,48,n),new A.J(1.2,96,p),o[2],3)
t.n(0,300,B.dVk)
t.n(0,301,B.dVo)
t.n(0,302,B.dVx)
if(e5){u.b=0
u.iO(new A.J(0,48,p+0.6),new A.J(m,96,1.2),o[0],3)}u.b=0
u.f=1
u.bP(new A.J(0,2.5,0.4),new A.J(q,5,0.8),B.oi,0.1)
u.bP(new A.J(g+0.4,2.5,n),new A.J(0.8,5,p),B.oi,0.1)
u.bP(new A.J(f-0.4,2.5,n),new A.J(0.8,5,p),B.oi,0.1)
u.f=e5?0:3
u.b=j.$2("ceiling",320)
if(e5)o=1
else o=e6==="ceiling"?0.6:0.4
u.d=o
u.iO(new A.J(0,96.6,n),new A.J(m,1.2,i),B.atN[e4.as],2)
u.f=u.d=1
u.b=0
u.bP(new A.J(0,94,1),new A.J(q,3,1.4),D.c,0.2)
u.bP(new A.J(g+1,94,n),new A.J(1.4,3,p),D.c,0.2)
u.bP(new A.J(f-1,94,n),new A.J(1.4,3,p),D.c,0.2)
t.n(0,320,new A.d3("Ceiling","Pick a colour above to paint the ceiling.",new A.J(0,96,n),140))
n=e4.w
a0=D.d.b8(n,new A.fke())?"left":"right"
o=e3==="hall"
if(!o){m=C.a([],w)
a1=new A.kj(m)
a1.f=1
a1.ct(B.fDT,B.fwI,B.Aa)
a1.bP(B.fuT,B.fA1,B.Ew,0.5)
a1.ct(B.aQC,B.fB8,B.Aa)
a1.ct(B.aQC,B.fyy,B.Aa)
a2=p*0.55
if(e5)D.d.v(v,A.Ap(m,0,3.141592653589793,new A.J(0,0,p+0.2)))
D.d.v(v,a0==="right"?A.Ap(m,0,-1.5707963267948966,new A.J(f,0,a2)):A.Ap(m,0,1.5707963267948966,new A.J(g,0,a2)))}for(m=e4.ax,i=e4.at,d=0;d<n.length;++d){a3=n[d]
a4=m.h(0,d)
if(a4==null)a4=i.t(0,d)?1.25:0
e=C.a([],w)
a5=new A.kj(e)
a5.f=1
a6=a5.b=600+d
a5.ct(B.fB_,B.fAN,B.oi)
a7=C.a([],w)
a8=new A.kj(a7)
a8.r=!0
a8.b=a6
if(a4>0.04){a5.b=0
a9=A.hJP(a3.c)
b0=a9.a
a5.ct(B.fzL,B.fxN,b0)
a5.ct(B.fAs,B.fEb,a9.b)
b1=C.aq(b0,D.w,0.25)
b1.toString
a5.ct(B.fzS,B.fCV,b1)
b2=-a4
b1=A.bBs(B.fE8,b2)
a8.aiT(new A.J(-12.5+b1.a,0+b1.b,1.2+b1.c),B.fxa,B.JS,0.15,b2)}else{a5.bP(B.fzV,B.fzh,B.JS,0.15)
a5.bP(B.fA0,B.fAf,B.DH,0.8)
a5.ct(B.fAh,B.aRj,B.KS)
a5.ct(B.fDQ,B.aRj,B.KS)}b1=new A.fkn(a3,q,p)
D.d.v(v,b1.$1(e))
D.d.v(v,b1.$1(a7))
t.n(0,a6,new A.d3("Door","Tap the door to go through it.",B.aQs,90))}for(m=e4.x,i=m.length,l=0;l<m.length;m.length===i||(0,C.L)(m),++l){b3=m[l]
e=b3.b
a6=B.tS.h(0,e)
a6.toString
a7=C.a([],w)
b4=new A.kj(a7)
b4.r=!0
b4.f=e==="rug"?1:2
b1=100+b3.a
b4.b=j.$2("furniture",b1)
A.h9B(b4,e,B.at5[b3.f])
D.d.v(v,A.Ap(a7,0,b3.e*3.141592653589793/2,new A.J(b3.c,0,b3.d)))
t.n(0,b1,new A.d3(a6.a,y.b,new A.J(b3.c,12,b3.d),90))}u.f=2
u.r=!0
b5=p*0.5
w=C.T(n)
m=f-10
b6=D.k.D(new C.cQ(new C.a2(n,new A.fkf(),w.k("a2<1>")),new A.fkg(),w.k("cQ<1,N>")).cI(0,g+30,new A.fkh())+24,g+10,m)
b7=e4.dx==="fan"
b8=e4.ga4q()
b9=b8&&e4.gT9()&&e4.db
u.b=703
if(b7){u.jF(new A.J(0,95.5,b5),new A.J(0,86,b5),1,B.mE,8)
u.e5(new A.J(0,86,b5),new A.J(0,79,b5),6,D.t9,0.5,14)
w=b9?B.rW:D.dL
u.e5(new A.J(0,79,b5),new A.J(0,76,b5),3.6,w,0.6,12)}else{w=b9?B.rW:D.dL
u.e5(new A.J(0,95.5,b5),new A.J(0,93,b5),7,w,0.6,16)}if(b9&&!b7){u.b=0
u.f=3
u.d=0.2
u.ba5(new A.J(0,93,b5),new A.J(0,0.5,b5),36,B.rW,!1,14)
u.d=1
u.f=2}c0=b7?"Ceiling fan":"Ceiling light"
if(!b8)c1="It has no power yet. "+(e4.id.length!==0?"Tap it to wire it.":"The room still needs wiring: use the Wiring button.")
else if(!e4.gT9())c1="It is ready: wire the wall switch to turn it on."
else{w=e4.db?"It is on. Tap the wall switch (or tap this) to turn it off.":"It is off. Tap the wall switch (or tap this) to turn it on."
c1=w}t.n(0,703,new A.d3(c0,c1,new A.J(0,88,b5),80))
w=e3==="bathroom"
n=!w
c2=!n||e3==="kitchen"||e4.id==="gfci"
i=e4.gaF0()
e=c2?e0:e1
a6=e4.id.length!==0||e4.glt()
a7=c2?e0:e1
a7=C.a([new C.eN([0,700,h/4,i,e]),new C.eN([1,701,q/4,a6,a7])],x.R)
for(i=e4.dy,d=0;d<i.length;++d){h=i[d]
e=h.a
if(e!=="switch"){a6=h.c
e=a6.c>=2&&A.aff(A.Ac(e),a6).a==="ok"
a6=i[d].a==="gfci"?"Added GFCI outlet":"Added outlet"
a7.push(new C.eN([2+d,800+d,h.b,e,a6]))}}u.f=1
u.r=!1
for(h=a7.length,e=e4.cy,l=0;l<a7.length;a7.length===h||(0,C.L)(a7),++l){a6=a7[l].a
d=a6[0]
c3=a6[1]
c4=a6[2]
c5=a6[3]
c6=a6[4]
u.b=c3
u.e=0.4
u.d=0.55
a6=c5?D.b7:D.aB
u.ct(new A.J(c4,14,0.25),B.fy5,a6)
u.d=1
u.e=0
a6=c5?B.adU:D.t9
u.bP(new A.J(c4,14,0.9),B.fBl,a6,0.25)
u.b=0
for(c7=0;c7<2;++c7)for(a6=14+E.oJ[c7]*2.8,c8=0;c8<2;++c8)u.ct(new A.J(c4+B.cXh[c8],a6,1.7),B.fE3,B.bcC)
u.ct(new A.J(c4,14,1.7),B.fBj,D.dL)
if(!c5)a6="This one is not wired yet. Tap it to wire it."
else a6=e.h(0,d)==null?"Tap it to plug something in.":"Tap it to plug something else in, or to unplug."
t.n(0,c3,new A.d3(c6,a6,new A.J(c4,14,2),60))}h=C.a([new C.bv(702,b6,e4.gT9())],x.Q)
for(d=0;d<i.length;++d){a6=i[d]
b1=a6.a
if(b1==="switch"){c9=a6.c
b1=c9.c>=2&&A.aff(A.Ac(b1),c9).a==="ok"
h.push(new C.bv(800+d,a6.b,b1))}}for(i=h.length,l=0;l<h.length;h.length===i||(0,C.L)(h),++l){a6=h[l]
c3=a6.a
c4=a6.b
c5=a6.c
u.b=c3
u.e=0.4
u.d=0.55
a6=c5?D.b7:D.aB
u.ct(new A.J(c4,48,0.25),B.fz6,a6)
u.d=1
u.e=0
a6=c5?B.adU:D.t9
u.bP(new A.J(c4,48,0.9),B.fyJ,a6,0.25)
u.ct(new A.J(c4,e4.db&&c5?49.2:46.8,1.9),B.fyD,B.bif)
if(!c5)a6="Not wired yet. Tap it to wire it."
else if(e4.db)a6="On. Tap to turn the "+(b7?"fan":"light")+" off."
else a6="Off. Tap to turn the "+(b7?"fan":"light")+" on."
t.n(0,c3,new A.d3("Light switch",a6,new A.J(c4,48,2),60))}if(!e4.ga4q()&&e4.id.length===0)s.push(new A.rZ(new A.J(0,70,b5),"\u26a1 No power: needs wiring",D.bL))
i=!1
if(e4.id.length!==0)if(!e4.gyz()){i=e4.id
i=!(i==="ptrap"||i==="faucet")}if(i)s.push(new A.rZ(new A.J(0,40,14),"\ud83d\udc46 Tap the red one to wire it",D.bL))
u.f=2
u.r=!0
for(i=a7.length,h=x.o,a6=e4.a,l=0;l<a7.length;a7.length===i||(0,C.L)(a7),++l){b1=a7[l].a
d=b1[0]
c4=b1[2]
c5=b1[3]
d0=e.h(0,d)
if(d0==null||!c5)continue
d1=A.bza(d0)
b1=u.b=720+d
u.jP(C.a([new A.J(c4,12,1.8),new A.J(c4,6,3),new A.J(c4,2,11)],h),0.3,B.Wc,!1,0.2,6)
c9=d1.d
d2=c9<=0
if(!d2||d1.e){b2=c9*0.56
u.bP(new A.J(c4,2,15),new A.J(c9*0.45,4,14),B.mE,0.3)
u.bP(new A.J(c4,8,15),B.fxQ,B.mE,0.3)
d3=12+b2/2
u.bP(new A.J(c4,d3,15),new A.J(c9,b2,3),E.E1,0.5)
c9=(c9-3.5)/2
d4=c4-c9
d5=(b2-3.5)/2
d6=d3+d5
c9=c4+c9
d5=d3-d5
r.push(new A.Wv(C.a([new A.J(d4,d6,16.6),new A.J(c9,d6,16.6),new A.J(c9,d5,16.6),new A.J(d4,d5,16.6)],h),b1,new A.fki(d*7+a6),180,9,2))}else{c9=d1.a
if(c9==="lamp"){u.e5(new A.J(c4,0,14),new A.J(c4,1,14),6,B.Vd,0.4,14)
u.e5(new A.J(c4,1,14),new A.J(c4,22,14),1,B.Al,0.5,8)
c9=e4.db?B.rW:U.Wj
u.yg(new A.J(c4,20,14),new A.J(c4,32,14),9,c9,!1,!0,5.5,0.2,16)}else{u.bP(new A.J(c4,9,15),B.fvX,B.DF,0.1)
if(c9==="toaster"){u.bP(new A.J(c4,23,15),B.fvU,B.kA,0.8)
u.ct(new A.J(c4,28.2,15),B.fC5,B.ae7)}else{u.Kb(new A.J(c4-7,21,15),new A.J(c4+7,21,15),3.6,B.KB,3,0.6,12)
u.bP(new A.J(c4-8,14.5,15),B.fAb,B.KB,0.6)}}}c9=!d2||d1.e?"It is playing NGMY ads. Tap it to watch full screen with the remote.":"It is plugged in and running. Tap the outlet to unplug it or plug in something else."
t.n(0,b1,new A.d3(d1.b,c9,new A.J(c4,16,14),90))}u.f=1
u.r=!1
d7=new A.fkk(e4,u,q,r,t)
d7.$2(e4.fr,0)
if(o)d7.$2(e4.fx,1)
u.f=2
o=u.r=!0
if(n?e3==="kitchen":o){c5=e4.got()
e3=new A.fko(u)
if(w){d8=g+17
if(c5){u.b=710
u.Kb(new A.J(6,0.5,14),new A.J(6,15,14),8,B.A4,5.6,0.8,18)
u.e5(new A.J(6,15,14),new A.J(6,16,14),9,B.KK,0.8,18)
u.bP(new A.J(6,21,5),B.fw2,B.A4,0.8)
u.bP(new A.J(6,28,5),B.fzF,B.KK,0.8)}else{u.b=710
u.d=0.3
u.f=3
u.ct(new A.J(6,14,9),B.fvZ,D.b1)
u.d=1
u.f=2
e3.$2(-4,8)}u.b=711
u.bP(new A.J(34,14,10),B.fwE,B.DF,0.1)
u.bP(new A.J(34,29,10),B.fwG,B.VL,0.4)
if(c5){u.e5(new A.J(34,29.3,10),new A.J(34,30.1,10),6.5,D.c,0.6,18)
u.bgc(C.a([new A.J(34,30,4),new A.J(34,36,4),new A.J(34,38,7)],h),0.6,B.kA,0.9,8)}else{e3.$2(28,18)
e3.$2(40,18)}u.b=712
if(c5){u.bP(new A.J(d8,8,38),B.aQD,B.aek,0.7)
u.bP(new A.J(d8,16.2,38),B.fCR,B.Vv,0.8)
u.e5(new A.J(d8,30,3),new A.J(d8,52,3),0.7,B.kA,0.9,8)
u.e5(new A.J(d8,52,3),new A.J(d8,52,10),0.7,B.kA,0.9,8)}else{u.d=0.3
u.f=3
u.ct(new A.J(d8,8,38),B.aQD,D.b1)
u.d=1
u.f=2
e3.$2(d8-4,34)
e3.$2(d8+4,34)}e3=c5?"Fitted on its flange with a wax ring, and the supply hose joins the shut-off valve.":"There is no toilet yet: only the flange and the water stub. Use the Plumbing button to fit it."
t.n(0,710,new A.d3("Toilet",e3,new A.J(6,14,10),70))
e3=c5?"The faucet, the hoses and the P-trap are fitted.":"The sink is not plumbed. Use the Plumbing button."
t.n(0,711,new A.d3("Vanity sink",e3,new A.J(34,28,10),70))
e3=c5?"The bath is in and connected.":"The bath is not connected yet."
t.n(0,712,new A.d3("Bath",e3,new A.J(d8,10,38),90))
if(!c5)s.push(new A.rZ(new A.J(0,40,14),e2,D.bi))}else{u.b=0
u.bP(new A.J(g+15,36,14),B.fwt,B.acQ,0.6)
u.ct(new A.J(g+28.5,36,14.4),B.fB6,D.dL)
u.bP(new A.J(m,15,14),B.fwg,B.abw,0.1)
u.bP(new A.J(m,31,14),B.fwl,B.mE,0.5)
u.bP(new A.J(f-15,32.4,14),B.aQT,D.lx,0.3)
u.bP(new A.J(f-5,32.4,14),B.aQT,D.lx,0.3)
u.b=713
u.bP(new A.J(30,15,14),B.fwX,B.DF,0.1)
u.bP(new A.J(30,31,14),B.fwY,B.E8,0.5)
if(c5){u.e5(new A.J(30,32.1,14),new A.J(30,32.7,14),8,B.DX,0.8,18)
u.bgc(C.a([new A.J(30,32,5),new A.J(30,42,5),new A.J(30,44,9),new A.J(30,44,13)],h),0.7,B.kA,0.9,8)}else{e3.$2(22,18)
e3.$2(38,18)}e3=c5?"The faucet, the hoses and the drain are fitted.":"The kitchen sink is not plumbed yet. Use the Plumbing button."
t.n(0,713,new A.d3("Kitchen sink",e3,new A.J(30,30,14),70))
if(!c5)s.push(new A.rZ(new A.J(30,48,14),e2,D.bi))}}for(e3=D.d.gag(B.avw),w=new C.fx(e3,new A.fkj(e4));w.C();){o=e3.gU(0)
n=o.ghZ(o)
m=o.gbgK(o)
i=o.gqq(o)
h=o.gcSw(o)?D.bL:D.ff
s.push(new A.rZ(new A.J(n,74,m),i,h))
t.n(0,D.o.ad(900,o.gj6(o)),new A.d3(o.gqq(o),"Tap to see how they are, feed them or give medicine.",new A.J(o.ghZ(o),36,o.gbgK(o)),90))}return new A.zk(v,t,s,r)},
a0n(d,e,f,g,h,i,j,k,l){var w=-h/2,v=i/2,u=h/2,t=-i/2
d.cPn(e.ad(0,f.aF(0,w)).ad(0,g.aF(0,v)),e.ad(0,f.aF(0,u)).ad(0,g.aF(0,v)),e.ad(0,f.aF(0,u)).ad(0,g.aF(0,t)),e.ad(0,f.aF(0,w)).ad(0,g.aF(0,t)),j,k,l)},
hMI(a1,a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=x.z,i=C.a([],j),h=new A.kj(i),g=C.V(x.S,x.q),f=C.a([],x.E),e=a1.ghq(0),d=a1.gkv(0),a0=new A.fem(a3)
h.f=0
h.b=a0.$2("floor",310)
h.iO(new A.J(0,-0.6,d/2-60),new A.J(e*2.2,1.2,d*2.2),B.abn,5)
g.n(0,310,B.dVs)
h.b=0
h.f=1
h.ct(new A.J(0,0.15,60),B.fyB,E.DK)
for(w=0;w<6;++w)h.ct(new A.J(0,0.35,8+w*22),B.fBn,B.bfa)
h.f=2
h.x=$.bUL=$.bUL+1
h.iO(B.fvy,B.fwn,B.VT,3)
h.ct(B.fvo,B.fwo,B.b4I)
v=new A.fen(h)
u=new A.fel(h)
for(t=0;t<4;++t)v.$5(B.hb,B.wa,B.a7D,B.d5y[t],62)
u.$5(B.hb,B.wa,B.a7D,0,600)
for(t=0;t<2;++t)v.$5(B.aQm,B.Ts,B.Tn,B.d5v[t],62)
u.$5(B.aQm,B.Ts,B.Tn,0,0)
for(t=0;t<2;++t){s=B.d5m[t]
v.$5(B.fvL,B.Tn,B.wa,s,62)
v.$5(B.fCu,B.a7D,B.Ts,-s,62)}r=C.a([],j)
new A.kj(r).qb(B.hb,B.fws,B.acJ,0.1,2)
h.aGL(B.fy0,B.fE5,B.fyN,B.VT,B.wa,!1)
h.aGL(B.fx2,B.fBL,B.fBD,B.VT,B.Ts,!1)
h.x=0
h.r=!0
D.d.v(i,A.Ap(r,0.5,0,B.fuZ))
D.d.v(i,A.Ap(r,-0.5,0,B.fv_))
h.ct(B.fv1,B.fwr,B.VH)
h.ct(B.fxF,B.fvS,B.beY)
h.ct(B.fxG,B.fvW,B.An)
h.ct(B.fvk,B.fxd,E.DK)
h.jF(B.fCA,B.fCB,2.2,B.oi,8)
h.jF(B.fwh,B.fwi,2.2,B.oi,8)
h.bP(B.fvE,B.fxh,B.acJ,0.1)
g.n(0,600,B.dW3)
h.r=!0
for(r=a1.x,q=r.length,t=0;t<r.length;r.length===q||(0,C.L)(r),++t){p=r[t]
o=p.b
n=B.tS.h(0,o)
n.toString
m=C.a([],j)
l=new A.kj(m)
l.r=!0
l.f=o==="road"||o==="pond"||o==="rug"?1:2
k=100+p.a
l.b=a0.$2("furniture",k)
A.h9B(l,o,B.at5[p.f])
D.d.v(i,A.Ap(m,0,p.e*3.141592653589793/2,new A.J(p.c,0,p.d)))
g.n(0,k,new A.d3(n.a,y.b,new A.J(p.c,12,p.d),140))}j=a2===0
r=j?"\u2705 The house is finished":"\ud83c\udfe0 "+a2+" rooms still need work"
f.push(new A.rZ(B.fv6,r,j?D.d_:D.dT))
return new A.zk(i,g,f,B.vA)},
hTe(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=C.a([],x.z),l=new A.kj(m),k=l.r=!0,j=d.c==="outside"
if(!j?j:k)return m
if(f!=null&&f.a===d.a)A.hbm(l,f,e,0,B.b0Y)
for(k=D.d.gag(B.avw),j=new C.fx(k,new A.fn2(d)),w=d.a;j.C();){v=k.gU(0)
u=v.ghZ(v)
t=v.gbgK(v)
s=v.gcSW()
r=v.gqE(v)
A.hbm(l,new A.arC(w,u,t,s,!1,!1,!1,!1,"","",-1,0,-1,0),e,D.o.ad(900,v.gj6(v)),r)}q=d.gkv(0)
if(d.dx==="fan"){p=d.ga4q()&&d.gT9()&&d.db?e*7:0
l.b=703
for(k=q*0.5,o=0;o<4;++o){n=p+o*3.141592653589793/2
l.aiT(new A.J(Math.cos(n)*15,81,k+Math.sin(n)*15),B.fDM,B.DF,0.1,-n)}}return m},
hJP(d){var w
A:{if(5===d){w=B.epx
break A}if(9===d){w=B.etC
break A}if(10===d){w=B.eil
break A}if(11===d){w=B.eus
break A}if(2===d||4===d||8===d){w=B.e9r
break A}w=B.ekN
break A}return w},
hck(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=C.a([],x.z)
for(w=d.length,v=e.a,u=e.b,t=e.c,s=f.a,r=f.b,q=f.c,p=x.o,o=0;o<d.length;d.length===w||(0,C.L)(d),++o){n=d[o]
m=C.a([],p)
for(l=n.a,k=l.length,j=0;j<l.length;l.length===k||(0,C.L)(l),++j){i=l[j]
m.push(new A.J(s+(i.a-s)*v,r+(i.b-r)*u,q+(i.c-q)*t))}l=n.b
h.push(new A.nD(m,new A.J(l.a/v,l.b/u,l.c/t).gpD(0),n.c,n.d,n.e,n.f,n.r,n.w,n.x,n.y,n.z))}return h},
hbm(a8,a9,b0,b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6=C.a([],x.z),a7=new A.kj(a6)
a7.b=b1
a7.r=!0
w=C.aq(B.wH,D.w,0.16)
w.toString
v=a9.e
u=v?Math.sin(a9.at*3.141592653589793):0
t=x.n
s=C.a([],t)
for(r=0;r<2;++r)s.push(u*E.oJ[r]*0.6)
q=C.a([],t)
for(p=s.length,r=0;r<s.length;s.length===p||(0,C.L)(s),++r){o=s[r]
q.push(v?Math.max(0,-o)*1.5+0.1:0.04)}t=C.a([],t)
for(n=0;n<2;++n)t.push(16*Math.cos(s[n])+15.5*Math.cos(s[n]+q[n]))
m=Math.max(t[0],t[1])+3.3
l=new A.feV(b1,a7)
k=new A.feH(a7)
for(n=0;n<2;++n){t=(n===0?-1:1)*2.9
j=new A.J(t,m,0)
t+=0
p=m+-16*Math.cos(s[n])
i=0+-16*Math.sin(s[n])
h=new A.J(t,p,i)
g=s[n]+q[n]
t+=0
p+=-15.5*Math.cos(g)
i+=-15.5*Math.sin(g)
a7.kt(j,3.6,B.JR,4,8)
k.$5(j,h,3.5,2.7,B.JR)
k.$5(h,new A.J(t,p,i),2.6,1.9,B.JR)
t+=0
i+=2
l.$3(new A.feI(),B.fAP,new A.J(t,p+-1.6,i))
l.$3(new A.feJ(),B.fyR,new A.J(t,p+-2.9,i))}l.$3(new A.feK(B.JR),B.fzi,new A.J(0,m+1.2,0))
l.$3(new A.feN(B.WF),B.fAx,new A.J(0,m+2.5,0))
l.$3(new A.feO(),B.fw6,new A.J(0,m+2.4,0))
l.$3(new A.feP(B.WF),B.fA3,new A.J(0,m+19.6,0))
a7.jF(new A.J(0,m+20.5,0.2),new A.J(0,m+24.2,0.5),2,B.wH,8)
t=m+29
f=new A.J(0,t,0.6)
l.$3(new A.feQ(B.wH),B.fC4,f)
l.$3(new A.feR(B.wH),B.fBq,f.ad(0,B.fx9))
l.$3(new A.feS(B.VQ),B.fxY,f.ad(0,B.fAA))
l.$3(new A.feT(B.VQ),B.fzl,f.ad(0,B.fEk))
for(s=t+-0.2,q=t+0.4,t+=1.9,r=0;r<2;++r){e=E.oJ[r]
a7.kt(new A.J(0+e*4.2,s,0.6),1,B.wH,3,6)
p=0+e*1.8
l.$3(new A.feU(),B.fDh,new A.J(p,q,4.75))
a7.kt(new A.J(p,q,5.1),0.5,D.Ei,3,6)
a7.ct(new A.J(p,t,4.8),B.fDV,B.VQ)}l.$3(new A.feL(w),B.fE4,f.ad(0,B.fyM))
a7.ct(f.ad(0,B.fAE),B.fzA,B.bcJ)
for(w=m+19.3,t=-u,s=a9.f,q=a9.r,p=a9.w,r=0;r<2;++r){e=E.oJ[r]
i=e*7
d=t*e*0.5
a0=v?-0.45:-0.12
a1=e>0
if(a1&&s){d=-0.8
a0=-1.2}if(a1&&q){d=-1
a0=-0.6}if(a1&&p){d=-1.55
a0=-0.1}a2=w+-11.5*Math.cos(d)
a3=0+-11.5*Math.sin(d)
a4=new A.J(i,a2,a3)
g=d+a0
a2+=-10.5*Math.cos(g)
a3+=-10.5*Math.sin(g)
k.$5(new A.J(i,w,0),a4,2.8,2.3,B.WF)
k.$5(a4,new A.J(i,a2,a3),2.1,1.6,B.wH)
l.$3(new A.feM(B.wH),B.fCT,new A.J(i,a2+-1.3,a3+0.2))
if(a1&&s){a5=a3+0
a7.e5(new A.J(i,a2+-2.6,a5),new A.J(i,a2+2.6,a5),1.7,D.aW,0.5,8)}if(a1&&q){a7.bP(new A.J(i,a2+-0.4,a3+2.6),B.fA6,D.Ei,0.3)
a7.ct(new A.J(i,a2+0.2,a3+3.8),B.fyw,D.aB)}}D.d.v(a8.a,A.Ap(a6,0,a9.d,new A.J(a9.b,0,a9.c)))},
h9B(d,e,f){var w,v,u,t,s,r,q=C.aq(f,D.w,Math.abs(-0.25))
q.toString
w=C.aq(f,D.c,Math.abs(0.2))
w.toString
switch(e){case"bed":d.bP(B.Tq,B.fxs,B.An,0.1)
d.bP(B.fv4,B.fxj,f,0.05)
d.ct(B.fCx,B.aQy,B.adk)
d.ct(B.fvR,B.aQy,B.adk)
d.bP(B.fvg,B.fxt,B.An,0.1)
d.ct(B.fv8,B.fCa,w)
break
case"nightstand":d.bP(B.IT,B.fvV,f,0.1)
d.ct(B.fBu,B.fxI,q)
d.ct(B.fE_,B.fwS,B.ad0)
d.ct(B.fvh,B.fy9,B.rW)
break
case"wardrobe":d.bP(B.fvm,B.fx_,f,0.1)
d.ct(B.fyl,B.fx7,q)
d.bP(B.fzW,B.aRa,B.DH,0.8)
d.bP(B.fEa,B.aRa,B.DH,0.8)
break
case"desk":d.bP(B.aQp,B.fx5,f,0.1)
d.ct(B.fCC,B.aQB,q)
d.ct(B.fwj,B.aQB,q)
d.bP(B.fvu,B.fwk,B.Kb,0.5)
d.ct(B.fvl,B.fxA,D.t9)
break
case"rug":d.iO(B.aRk,B.fw3,f,2)
d.ct(B.fyd,B.fD0,w)
break
case"sofa":d.bP(B.IT,B.fxU,f,0.05)
d.bP(B.fvf,B.fxV,q,0.05)
d.bP(B.fCF,B.aQL,q,0.05)
d.bP(B.fwM,B.aQL,q,0.05)
d.ct(B.fCw,B.aQz,w)
d.ct(B.fvQ,B.aQz,w)
break
case"armchair":d.bP(B.IT,B.fwC,f,0.05)
d.bP(B.fve,B.fwD,q,0.05)
d.ct(B.fCv,B.aQI,q)
d.ct(B.fvN,B.aQI,q)
break
case"coffee":d.bP(B.To,B.fwW,f,0.2)
for(v=0;v<4;++v){w=B.d5g[v]
d.ct(new A.J(w.a,6.5,w.b),B.fwx,q)}d.bP(B.fz5,B.fy2,D.bV,0.5)
break
case"tvstand":d.bP(B.aQu,B.fxf,f,0.1)
d.ct(B.fxS,B.fyW,q)
d.bP(B.aQr,B.fx4,E.E1,0.7)
d.bP(B.fz8,B.fyL,D.fm,0.9)
d.ct(B.fva,B.fy3,B.mE)
break
case"dining":d.bP(B.aQp,B.fxg,f,0.2)
for(v=0;v<4;++v){w=B.cAG[v]
d.ct(new A.J(w.a,13,w.b),B.fwR,q)}break
case"chair":d.bP(B.fv7,B.fw_,f,0.1)
d.bP(B.fvj,B.fvY,f,0.1)
for(v=0;v<4;++v){w=B.cWZ[v]
d.ct(new A.J(w.a,7.5,w.b),B.fwf,q)}break
case"plant":d.jF(B.hb,B.aQu,5,D.da,10)
d.kt(B.aQo,8,B.aaU,5,8)
d.kt(B.fwQ,5,B.Vq,4,8)
break
case"lamp":d.jF(B.hb,B.lT,4.5,B.mE,10)
d.jF(B.lT,B.aQt,0.7,B.mE,6)
d.aCq(B.fvv,B.fvB,6,B.rW,3.5,12)
break
case"console":d.bP(B.fvi,B.aQG,f,0.15)
d.ct(B.fzm,B.aQA,q)
d.ct(B.fyg,B.aQA,q)
d.ct(B.IT,B.fCQ,q)
break
case"shelf":d.bP(B.aQq,B.fwL,f,0.1)
for(u=0;u<4;++u){q=10+u*15
d.ct(new A.J(0,q,1),B.fwH,B.mE)
w=D.o.G(u,2)
d.ct(new A.J(-8+w*6,q,2),B.fxq,[D.eM,D.dS,D.ff,D.dT][u])
d.ct(new A.J(4+w*4,q,2),B.fy4,[D.dT,D.ff,D.eM,D.dS][u])}break
case"tree":d.aCq(B.hb,B.aQr,4.2,B.An,3,8)
d.kt(B.aQt,17,B.aaU,5,9)
d.kt(B.fy8,11,B.Vq,4,8)
d.kt(B.fCL,12,B.bcm,4,8)
break
case"pine":d.jF(B.hb,B.aQn,3,B.An,8)
for(u=0;u<3;++u){q=u*14
d.aCq(new A.J(0,8+q,0),new A.J(0,26+q,0),14-u*3.5,B.abh,1.5,10)}break
case"bush":d.kt(B.IT,9,B.b9B,4,8)
d.kt(B.fxp,6.5,B.Vq,4,8)
break
case"flowers":for(v=0;v<5;++v){q=B.d3Z[v]
t=q.a
s=q.b
d.jF(new A.J(t,0,s),new A.J(t,7,s),0.4,B.abh,5)
d.kt(new A.J(t,8,s),2.2,q.c,3,6)}break
case"fence":for(v=0;v<4;++v)d.bP(new A.J(B.d5r[v],9,0),B.fBm,f,0.05)
d.ct(B.Tq,B.aRp,q)
d.ct(B.fv3,B.aRp,q)
break
case"lamppost":d.jF(B.hb,B.fvz,1.3,B.mE,8)
d.jF(B.hb,B.fvn,3.5,B.mE,8)
d.kt(B.fvA,4,B.rW,4,8)
break
case"bench":d.bP(B.fv2,B.aQG,f,0.1)
d.bP(B.fvd,B.fwZ,f,0.1)
d.ct(B.fCy,B.aQE,B.mE)
d.ct(B.fw0,B.aQE,B.mE)
break
case"car":d.bP(B.aQn,B.fxX,f,0.4)
d.bP(B.fCI,B.fx3,f,0.4)
d.bP(B.fw5,B.fzc,B.Ew,0.6)
d.ct(B.fD_,B.aQw,B.rW)
d.ct(B.fzD,B.aQw,B.rW)
for(v=0;v<2;++v){t=B.d5p[v]
d.jF(new A.J(t,5,-18),new A.J(t,5,-21),5.5,D.Ei,12)
d.jF(new A.J(t,5,18),new A.J(t,5,21),5.5,D.Ei,12)}break
case"road":d.ct(B.aRk,B.fyH,B.ben)
for(v=0;v<4;++v)d.ct(new A.J(B.d5t[v],0.7,0),B.fDo,B.bdp)
break
case"pond":q=C.a([],x.z)
r=new A.kj(q)
r.b=d.b
r.f=d.f
r.r=!0
r.e5(B.hb,B.fCl,28,B.bel,0.8,22)
D.d.v(d.a,A.hck(q,B.fys,B.hb))
for(v=0;v<3;++v){q=B.cSZ[v]
d.kt(new A.J(q.a,1.2,q.b),2.6,B.baR,3,6)}break
case"swing":d.jF(B.fCD,B.fwq,1.6,D.da,8)
for(v=0;v<2;++v){t=E.a27[v]
d.jF(new A.J(t,38,0),new A.J(t,0,14),1.4,D.da,6)
d.jF(new A.J(t,38,0),new A.J(t,0,-14),1.4,D.da,6)}for(v=0;v<2;++v){t=E.a28[v]
d.jF(new A.J(t,38,0),new A.J(t,15,0),0.3,B.mE,4)}d.ct(B.To,B.fDG,f)
break
case"shed":d.bP(B.To,B.fxc,f,0.05)
d.ct(B.aQq,B.fxi,B.VH)
d.ct(B.fCh,B.fCb,q)
break
case"doghouse":d.bP(B.fvD,B.fwp,f,0.05)
d.ct(B.fwB,B.fD8,B.VH)
d.ct(B.fBa,B.fDP,B.Kb)
break
default:d.ct(B.Tq,B.fvI,f)}},
fkp:function fkp(d){this.a=d},
fke:function fke(){},
fkn:function fkn(d,e,f){this.a=d
this.b=e
this.c=f},
fkf:function fkf(){},
fkg:function fkg(){},
fkh:function fkh(){},
fki:function fki(d){this.a=d},
fkk:function fkk(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fkl:function fkl(d,e){this.a=d
this.b=e},
fkm:function fkm(d){this.a=d},
fko:function fko(d){this.a=d},
fkj:function fkj(d){this.a=d},
fem:function fem(d){this.a=d},
fen:function fen(d){this.a=d},
fel:function fel(d){this.a=d},
fn2:function fn2(d){this.a=d},
feV:function feV(d,e){this.a=d
this.b=e},
feH:function feH(d){this.a=d},
feI:function feI(){},
feJ:function feJ(){},
feK:function feK(d){this.a=d},
feN:function feN(d){this.a=d},
feO:function feO(){},
feP:function feP(d){this.a=d},
feQ:function feQ(d){this.a=d},
feR:function feR(d){this.a=d},
feS:function feS(d){this.a=d},
feT:function feT(d){this.a=d},
feU:function feU(){},
feL:function feL(d){this.a=d},
feM:function feM(d){this.a=d},
fZB(){var w=x.S
return new A.bP2(C.eu([72],w),C.aW(w),C.aW(w),C.aW(w))},
hTf(d){var w
A:{if(81===d){w="outlet"
break A}if(82===d){w="switch"
break A}if(84===d){w="gfci"
break A}if(86===d||87===d){w="ptrap"
break A}if(85===d){w="faucet"
break A}w=null
break A}return w},
af3(a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=C.a([],x.z),a0=new A.kj(d)
a0.b=70
a0.iO(B.fBS,B.fD6,B.bbv,4)
a0.c=1
a0.b=91
w=new A.fku(a0)
w.$3(B.fyP,B.fyi,15)
w.$4$alongX(B.fCP,B.fAW,11,!1)
w.$4$alongX(B.fxl,B.fyp,11,!1)
w.$4$alongX(B.fCz,B.fz0,6,!1)
w.$4$alongX(B.fxO,B.fAX,6,!1)
for(v=0;v<=12;++v)a0.aBd(new A.J(-12+v*2,8.4,0),B.fBs,B.W0,!1,0.05)
a0.c=2
a0.b=92
u=new A.fkr(a0)
u.$2(B.cdo,B.rY)
u.$2(B.d2J,B.nx)
u.$2(B.d73,B.nx)
t=new A.fkq(a0)
t.$1(B.cMp)
t.$1(B.cRO)
a0.c=3
a0.b=93
s=new A.fkt(a0)
s.$1(B.cLq)
s.$2$col(B.cJU,B.wG)
s.$2$col(B.cJ9,B.wG)
s.$1(B.d_R)
a0.c=4
a0.b=0
a0.d=0.22
a0.iO(B.fyo,B.fAo,B.zY,4)
a0.iO(B.fAm,B.aR5,B.zY,4)
a0.iO(B.fyQ,B.aR5,B.zY,4)
a0.iO(B.fzs,B.aR9,B.zY,3)
a0.iO(B.fDY,B.aR9,B.zY,3)
a0.d=1
a0.c=5
a0.e=0.3
a0.b=0
a0.qb(B.fCt,B.fym,B.b9p,0.1,4)
a0.b=71
a0.bP(B.fBW,B.fBt,B.abq,0.5)
a0.ct(B.fDF,B.fzg,B.DQ)
r=[72,73,74,75,76]
for(q=a1.d,p=a1.e,v=0;v<5;++v){o=D.o.G(v,2)
n=D.o.an(v,2)
m=r[v]
l=q.t(0,m)
k=p.t(0,m)
a0.b=m
m=9.55+o*0.5
j=5.7-n*0.5
a0.bP(new A.J(m,j,-7.5),B.fy6,B.aeB,0.3)
if(l)i=0
else i=k?-0.07:0.07
if(l)h=D.cb
else h=k?D.bo:D.bV
a0.bP(new A.J(m+0,j+i,-7.42),B.fz3,h,0.4)}a0.b=90
a0.bP(B.fAY,B.fxo,B.bi6,0.1)
a0.bP(B.fCS,B.fyE,B.Ww,0.1)
a0.bP(B.fEi,B.aRo,B.Ww,0.1)
a0.bP(B.fyx,B.aRo,B.Ww,0.1)
g=new A.fks(a0)
g.$3(81,B.fxT,a1.x?B.wS:B.Wh)
a0.b=81
a0.ct(B.fAZ,B.aRh,B.DZ)
a0.ct(B.fzO,B.aRh,B.DZ)
g.$5$h$w(82,B.fDJ,G.Wr,0.65,0.4)
a0.b=82
a0.bP(B.fCe,B.fxn,B.ac4,0.4)
f=!q.t(0,72)
a0.b=83
a0.e5(B.fC6,B.aQW,0.5,B.bg1,0.4,14)
a0.b8a(B.fDk,0.3,f?A2.Wk:B.bbe,0.7)
if(f){a0.b=0
a0.d=0.22
a0.iN(B.aQO,1.5,B.VA,4,10,0)
a0.d=1}a0.b=94
a0.bP(B.fDd,B.aRr,B.m2,0.1)
a0.bP(B.fB9,B.aRr,B.m2,0.1)
a0.bP(B.fDH,B.fyT,B.m2,0.1)
a0.qb(B.fAz,B.fDm,B.E8,0.5,2)
a0.bP(B.fBU,B.fEe,B.DX,0.7)
a0.b=85
a0.jP(A.G9(B.cV6,0.2,6),0.055,B.kA,!1,0.9,8)
a0.b=84
a0.bP(B.fDu,B.fCo,B.Wh,0.3)
a0.ct(B.fzy,B.fDE,a1.y?B.acB:B.aev)
a0.b=86
a0.jP(A.G9(B.cMR,0.35,3),0.11,B.pf,!1,0.3,8)
a0.b=87
a0.e5(B.fA7,B.fBY,0.19,a1.c?B.Vm:B.be6,0.3,8)
a0.b=88
a0.bP(B.fx1,B.fya,B.A4,0.7)
a0.Kb(B.fBR,B.aRi,0.72,B.A4,0.55,0.7,16)
a0.e5(B.aRi,B.fAI,0.78,B.bfE,0.7,16)
a0.b=89
a0.e5(B.fCW,B.aQQ,0.85,B.b5e,0.6,18)
a0.e5(B.aQQ,B.fAn,0.5,B.b5f,0.5,12)
a0.ct(B.fBg,B.fE7,B.be0)
a0.b=95
for(p=a1.f,m=a1.r,v=0;v<3;++v){e=B.ctm[v]
if(m.t(0,v)){j=e.a
i=e.b
a0.ct(new A.J(j,i,-7.82),B.fC8,B.zY)
a0.ct(new A.J(j,i,-7.79),B.fAr,B.b88)}else if(p.t(0,v)){j=e.a
i=e.b
a0.ct(new A.J(j,i,-7.82),B.fwd,B.adB)
a0.ct(new A.J(j,i,-7.8),B.fB7,B.bim)}}if(a1.w){a0.b=96
a0.e5(B.fAt,B.fA2,0.1,D.da,0.7,8)}a0.e=0
a0.c=6
a0.b=0
a0.d=0.4
a0.bf4(B.aQJ,B.aRg,B.a7K,B.a7I,B.abx,B.fAT,!0)
a0.bf4(B.aRd,B.aRm,B.a7I,B.a7K,B.abx,B.fCd,!0)
a0.bga(B.aQJ,B.aRm,B.a7I,B.abL)
a0.bga(B.aRg,B.aRd,B.a7K,B.abL)
a0.d=1
p=q.t(0,72)?"This breaker has TRIPPED (it is in the middle, orange). The living room has no power. Tap it to flip it off and on again.":"This breaker is ON. The living room has power."
q=q.t(0,72)?"The light is off because the living room breaker has tripped.":"The ceiling light is on."
m=a1.b
j=m&&!a1.c?"Water is dripping from the slip nut here. Pick the wrench, then tap the nut to tighten it.":"The P-trap holds a water seal that blocks sewer gas. Tap Open lesson to build one."
m=m&&!a1.c?"This slip nut is loose and the trap is dripping. Pick the wrench and tap here to tighten it.":"The slip nut is tight."
return new A.zk(d,C.E([70,B.dW2,91,B.dVt,92,B.dVM,93,B.dVU,71,B.dW7,72,new A.d3("Living room breaker",p,B.fE1,3.5),73,B.dVE,74,B.dVW,75,B.dVj,76,B.dVP,81,B.dVR,82,B.dVa,83,new A.d3("Ceiling light",q,B.aQW,7),84,B.dVX,85,B.dVl,86,new A.d3("P-trap under the sink",j,B.fBQ,4.5),87,new A.d3("Slip nut (leaking?)",m,B.aQY,3.5),88,B.dV7,89,B.dVV,90,B.dVZ,94,B.dVD,95,B.dW0,96,B.dVc],x.S,x.q),B.GH,B.vA)},
hdt(d,e){var w,v,u,t,s,r,q,p=C.a([],x.z),o=new A.kj(p)
o.c=5
o.e=0.8
if(d.w)for(w=e*1.5,v=0;v<6;++v){u=D.k.G(w+v/6,1)
o.iN(new A.J(3.4+Math.sin(v*2)*0.12,3.3-u*u*2.8,-7.7),0.05,D.Ka,3,6,0.9)}if(d.as){u=D.k.G(e*1.1,1)
o.iN(new A.J(3,3.9-u*u*0.7,-6.95),0.05,B.Vx,3,6,0.9)}if(d.Q)for(w=e*1.6,v=0;v<6;++v){u=D.k.G(w+v/6,1)
o.iN(new A.J(8.2+Math.sin(v*1.7)*0.15,2.2-u*1.5,-7.2),0.05,B.Vx,3,6,0.9)}if(d.at){o.d=0.55
o.bP(B.fyv,B.fzv,B.bfR,0.8)
o.d=1}if(d.x)for(w=e*2,t=e*6,v=0;v<8;++v){u=D.k.G(w+v*0.13,1)
s=v*2.4+t
r=Math.cos(s)
s=Math.sin(s)
q=C.aq(E.Wy,E.WD,1-u)
q.toString
o.iN(new A.J(-3.2+r*u*0.7,1.3+s*u*0.7,-7.6+u*0.3),0.05,q,3,5,0)}if(d.z&&!d.d.t(0,72)){o.b=0
o.d=D.k.D((Math.sin(e*17)+Math.sin(e*29)+2)/4*0.5,0,0.6)
o.iN(B.aQO,1.5,B.VA,4,10,0)
o.d=1}if(d.b&&!d.c){for(w=e*1.3,v=0;v<5;++v){u=D.k.G(w+v*0.2,1)
o.iN(new A.J(3.05,1.45-u*u*1.4,-6.95),0.05,B.KN,3,6,0.9)}o.d=0.5
o.bP(B.fyh,new A.J(0.7+0.3*Math.sin(e),0.02,0.5),B.KN,0.9)
o.d=1}return p},
bP2:function bP2(d,e,f,g){var _=this
_.a=5
_.b=!0
_.c=!1
_.d=d
_.e=e
_.f=f
_.r=g
_.at=_.as=_.Q=_.z=_.y=_.x=_.w=!1},
fku:function fku(d){this.a=d},
fkr:function fkr(d){this.a=d},
fkq:function fkq(d){this.a=d},
fkt:function fkt(d){this.a=d},
fks:function fks(d){this.a=d},
m4(d,e,f,g){var w
try{F.dF(d,"",e,0,f,g)}catch(w){}},
y4(){A.m4(880,80,0.25,"tri")
C.bN(S.afj,new A.flo(),x.H)},
hvb(){return new A.MB(null)},
WP(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){return new A.b4Q(p,d,o,n,g,e,j,k,f,h,q,r,i,l,m,null)},
Q9(d,e,f,g,h){var w=null,v=g?e.j(0.25):D.w.j(0.5),u=C.m(18),t=C.I(g?e:D.b5,D.r,1),s=x.p,r=C.a([],s)
D.d.v(r,C.a([C.W(f,g?e:D.ad,w,w,w,16),D.ea],s))
r.push(C.d(d,w,w,w,w,w,w,C.l(w,w,g?e:D.ad,w,w,w,w,w,w,w,w,12,w,w,D.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w))
return C.aE(w,C.p(w,C.A(r,D.m,w,D.e,D.Q,0,w,w),D.f,w,w,new C.o(v,w,t,u,w,w,D.n),w,w,w,w,D.h3,w,w,w),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,h,w,w,w,w,w,w,!1,D.a8)},
y3(d,e,f,g){var w=null,v=f==null,u=v?D.dq:g.j(0.9),t=C.m(14),s=C.W(e,v?D.c_:D.w,w,w,w,18)
return C.D(C.aE(w,C.p(w,C.A(C.a([s,D.bp,new C.dm(1,D.ci,C.d(d,w,w,w,w,w,w,C.l(w,w,v?D.c_:D.w,w,w,w,w,w,w,w,w,12.5,w,w,D.u,w,w,!0,w,w,w,w,w,w,w,w),D.L,w,w),w)],x.p),D.m,w,D.ba,D.j,0,w,w),D.f,w,w,new C.o(u,w,w,t,w,w,D.n),w,w,w,w,D.uW,w,w,w),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,!1,D.a8),1)},
fBC(d,e,f,g){return C.bW(E.nA,null,new A.fBE(e,g,f),d,!0,!0,!0,D.lO,!1,!1,x.H)},
flo:function flo(){},
Fc:function Fc(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
MB:function MB(d){this.a=d},
bhx:function bhx(){this.d=!1
this.c=this.a=null},
dJn:function dJn(d){this.a=d},
dJq:function dJq(d){this.a=d},
dJr:function dJr(d){this.a=d},
dJp:function dJp(d){this.a=d},
dJs:function dJs(d){this.a=d},
dJo:function dJo(d){this.a=d},
dJu:function dJu(d){this.a=d},
dJv:function dJv(d){this.a=d},
dJw:function dJw(d){this.a=d},
dJx:function dJx(d){this.a=d},
dJy:function dJy(d){this.a=d},
dJz:function dJz(d){this.a=d},
dJA:function dJA(d){this.a=d},
dJB:function dJB(d,e){this.a=d
this.b=e},
dJt:function dJt(d){this.a=d},
b4Q:function b4Q(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){var _=this
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
_.ch=r
_.a=s},
coW:function coW(d){this.a=d},
coX:function coX(d){this.a=d},
fBE:function fBE(d,e,f){this.a=d
this.b=e
this.c=f},
fBD:function fBD(){},
AT:function AT(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
bR7:function bR7(d){this.a=d},
GP:function GP(d,e,f){this.c=d
this.d=e
this.a=f},
ay5:function ay5(){var _=this
_.r=_.f=_.e=_.d=$
_.w=""
_.x=0
_.y=null
_.z=!1
_.Q=0
_.c=_.a=_.as=null},
d1A:function d1A(d,e,f){this.a=d
this.b=e
this.c=f},
d1B:function d1B(d){this.a=d},
d1z:function d1z(d){this.a=d},
d1t:function d1t(d){this.a=d},
d1s:function d1s(d){this.a=d},
d1u:function d1u(d){this.a=d},
d1v:function d1v(d){this.a=d},
d1w:function d1w(d,e){this.a=d
this.b=e},
d1x:function d1x(d,e){this.a=d
this.b=e},
d1y:function d1y(d){this.a=d},
d1C:function d1C(d){this.a=d},
d1K:function d1K(){},
d1N:function d1N(d,e,f){this.a=d
this.b=e
this.c=f},
d1L:function d1L(d){this.a=d},
d1J:function d1J(d){this.a=d},
d1M:function d1M(d){this.a=d},
d1I:function d1I(d){this.a=d},
d1O:function d1O(d){this.a=d},
d1P:function d1P(d){this.a=d},
d1Q:function d1Q(d){this.a=d},
d1R:function d1R(d,e){this.a=d
this.b=e},
d1H:function d1H(d,e){this.a=d
this.b=e},
d1S:function d1S(d){this.a=d},
d1G:function d1G(d){this.a=d},
d1T:function d1T(d){this.a=d},
d1F:function d1F(d){this.a=d},
d1U:function d1U(d){this.a=d},
d1E:function d1E(d){this.a=d},
d1V:function d1V(d){this.a=d},
d1D:function d1D(d){this.a=d},
a8e:function a8e(d,e){this.c=d
this.a=e},
aE0:function aE0(){var _=this
_.f=_.e=_.d=$
_.r=""
_.w=0
_.x=null
_.y=!1
_.c=_.a=_.z=null},
eKt:function eKt(d,e,f){this.a=d
this.b=e
this.c=f},
eKu:function eKu(d){this.a=d},
eKs:function eKs(d){this.a=d},
eKm:function eKm(d){this.a=d},
eKn:function eKn(d,e){this.a=d
this.b=e},
eKo:function eKo(d,e){this.a=d
this.b=e},
eKp:function eKp(d,e){this.a=d
this.b=e},
eKq:function eKq(d){this.a=d},
eKr:function eKr(d,e){this.a=d
this.b=e},
eKy:function eKy(){},
eKC:function eKC(d,e){this.a=d
this.b=e},
eKz:function eKz(d){this.a=d},
eKA:function eKA(d,e){this.a=d
this.b=e},
eKx:function eKx(d,e){this.a=d
this.b=e},
eKB:function eKB(d){this.a=d},
eKw:function eKw(d){this.a=d},
eKv:function eKv(){},
a3G:function a3G(d,e){this.c=d
this.a=e},
ayk:function ayk(){var _=this
_.f=_.e=_.d=$
_.r=""
_.w=0
_.x=null
_.y=!1
_.c=_.a=_.z=null},
d4v:function d4v(d,e,f){this.a=d
this.b=e
this.c=f},
d4w:function d4w(d){this.a=d},
d4u:function d4u(d){this.a=d},
d4n:function d4n(d){this.a=d},
d4q:function d4q(d){this.a=d},
d4r:function d4r(d,e){this.a=d
this.b=e},
d4s:function d4s(d,e){this.a=d
this.b=e},
d4p:function d4p(d){this.a=d},
d4t:function d4t(d,e){this.a=d
this.b=e},
d4o:function d4o(d){this.a=d},
d4A:function d4A(){},
d4G:function d4G(d,e){this.a=d
this.b=e},
d4B:function d4B(d){this.a=d},
d4C:function d4C(d){this.a=d},
d4z:function d4z(d){this.a=d},
d4E:function d4E(d,e){this.a=d
this.b=e},
d4y:function d4y(d,e){this.a=d
this.b=e},
d4D:function d4D(d){this.a=d},
d4F:function d4F(d){this.a=d},
d4x:function d4x(d){this.a=d},
azc:function azc(d){this.a=d},
azd:function azd(d){var _=this
_.d=d
_.f=_.e=$
_.r=0
_.w=""
_.x=null
_.y=!1
_.c=_.a=_.z=null},
dbz:function dbz(d,e,f){this.a=d
this.b=e
this.c=f},
dbA:function dbA(d){this.a=d},
dby:function dby(d){this.a=d},
dbt:function dbt(d){this.a=d},
dbv:function dbv(d,e){this.a=d
this.b=e},
dbw:function dbw(d,e){this.a=d
this.b=e},
dbx:function dbx(d,e){this.a=d
this.b=e},
dbu:function dbu(d){this.a=d},
dbI:function dbI(d,e){this.a=d
this.b=e},
dbD:function dbD(d,e){this.a=d
this.b=e},
dbF:function dbF(d){this.a=d},
dbE:function dbE(d){this.a=d},
dbG:function dbG(d){this.a=d},
dbC:function dbC(d){this.a=d},
dbH:function dbH(d){this.a=d},
dbB:function dbB(d,e){this.a=d
this.b=e},
jx:function jx(d,e){this.a=d
this.b=e},
LY:function LY(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a5L:function a5L(d){this.a=d},
c4O:function c4O(d){this.a=d},
fOz(){var w=x.N
return new A.cfC(C.aW(w),C.E(["n1",!1,"n2",!1],w,x.y),C.V(x.S,w))},
i2R(d,e,f){var w,v
if(!f.c.t(0,e)){w=f.d
return e==="hot"?"The red (hot) hose goes on the LEFT side only. "+w:"The blue (cold) hose goes on the RIGHT side only. "+w}w=d.e
v=f.a
if(w.h(0,v)!=null)return"That connection already has a hose."
w.n(0,v,e)
return null},
fB0(){var w,v,u=C.a([B.aQF,B.fzY],x.o)
for(w=1;w<=12;++w){v=3.141592653589793+3.141592653589793*w/12
u.push(new A.J(3+3*Math.cos(v),0.2+3*Math.sin(v),0))}D.d.v(u,A.G9(B.cWj,1,6))
return u},
bzf(d){var w,v,u,t,s="trap",r=C.a([],x.z),q=new A.kj(r)
q.b=49
q.qb(B.fw8,B.fwU,B.m2,0.1,2)
q.qb(B.fDW,B.fwa,B.m2,0.1,2)
q.b=47
q.iO(B.fAS,B.fwV,B.uI,3)
q.iO(B.fwA,B.fwb,B.uI,3)
q.b=46
q.qb(B.fxr,B.fBw,B.E8,0.5,3)
q.ba7(B.fCs,B.To,6.5,B.DX,!0,0.7,20)
q.e5(B.fBN,B.fzJ,1.5,B.kA,0.85,14)
q.b=48
q.a2L(B.a7L,B.fyO,0.92,B.pf,!1,!0,0.3,14)
q.cQM(B.a7L,B.fDq,1,0.72,B.pf,0.3)
w=new A.fl4(d,q)
w.$5(41,B.a1t,B.kA,0.85,"tail")
w.$5(42,A.fB0(),B.pf,0.3,s)
w.$5(43,B.a2k,B.pf,0.3,"arm")
w=new A.fl3(d,q)
v=d.a
w.$6(44,"n1",B.a7H,B.lT,B.fyZ,v.t(0,"tail")&&v.t(0,s))
w.$6(45,"n2",B.a7J,B.wa,B.fCn,v.t(0,s)&&v.t(0,"arm"))
if(v.t(0,s)){q.b=0
q.d=0.55
q.e=0.4
u=A.fB0()
w=C.T(u).k("a2<1>")
t=C.B(new C.a2(u,new A.fl2(),w),w.k("H.E"))
if(t.length>1)q.aGO(t,0.4092,B.bi7,!1,!0,0.6,8)
q.d=1
q.e=0}return new A.zk(r,C.E([41,B.dVn,42,B.dVp,43,B.dVT,44,B.dVH,45,B.dW4,46,B.dVv,47,B.dVB,48,B.dV5,49,B.dVr],x.S,x.q),B.GH,B.vA)},
i0Q(d,e){var w,v,u,t,s,r,q,p=C.a([],x.z),o=new A.kj(p),n=d.d
if(n.length!==0){w=n==="n1"?B.fE9:B.fD3
for(n=e*1.4,v=w.a+0,u=w.b,t=w.c+0,s=0;s<5;++s){r=D.k.G(n+s*0.2,1)
o.iN(new A.J(v,u+(-r*6*r-r*1.5),t),0.22*(1-r*0.3),B.KN,3,6,0.9)}}else if(d.c){n=x.x
v=C.B(B.a1t,n)
u=A.fB0()
D.d.v(v,C.dc(u,1,null,C.T(u).c))
D.d.v(v,C.dc(B.a2k,1,null,n))
for(n=e*0.45,s=0;s<18;++s){r=D.k.G(n+s/18,1)
q=D.o.D(D.k.bw(r*(v.length-1)),0,v.length-2)
u=v.length
o.iN(A.zC(v[q],v[q+1],r*(u-1)-q),0.38,B.bhA,3,6,0.9)}for(n=e*2.2,s=0;s<6;++s)o.iN(new A.J(0,14-D.k.G(n+s/6,1)*5.4,0),0.3,B.Vx,3,6,0.9)}return p},
afg(d){switch(d){case 61:return B.fw7
case 62:return B.fD1
case 63:return B.fAj
default:return B.fAa}},
fTa(d){var w=d==="hot",v=A.afg(w?61:62),u=A.afg(w?63:64),t=w?-1:1
return A.agt(C.a([v,v.ad(0,new A.J(t*0.6,2.2,1.2)),A.zC(v,u,0.5).ad(0,new A.J(t*1.4,0,2.6)),u.ad(0,new A.J(-t*0.2,-2,1)),u],x.o),6)},
aNf(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=C.a([],x.z),e=new A.kj(f)
e.b=67
e.iO(B.fw4,B.fwK,B.uI,3)
e.b=66
e.qb(B.fzX,B.fDp,B.E8,0.5,3)
e.jF(B.fC7,B.fB2,5.5,E.E1,16)
e.b=65
e.e5(B.fDe,B.aRc,3.4,B.kA,0.9,20)
e.jP(A.G9(B.d0p,1.4,6),0.5,B.kA,!0,0.9,12)
for(w=0;w<2;++w){v=B.cX0[w]
u=v*1.2
e.e5(new A.J(u,15.5,-3.6),new A.J(u,17.7,-3.6),0.38,B.kA,0.9,10)
t=v<0?B.rY:B.nx
e.e5(new A.J(u,17.7,-3.6),new A.J(u,18.6,-3.6),0.6,t,0.6,12)}for(u=[B.ef7,B.eb0],w=0;w<2;++w){t=u[w]
v=t.b
e.b=t.a
e.e5(new A.J(v,15.3,-3.6),new A.J(v,11.4,-3.6),0.45,B.kA,0.9,10)
e.e5(new A.J(v,11.4,-3.6),new A.J(v,10.7,-3.6),0.3,B.bdL,0.6,8)
e.yU(new A.J(v,11.3,-3.6),new A.J(v,11.9,-3.6),0.78,0.48,B.bfC,0.7,8)}for(u=[B.ewg,B.ey_],w=0;w<2;++w){t=u[w]
v=t.b
e.b=t.a
e.e5(new A.J(v,-1.5,-6),new A.J(v,-1.5,-3.6),0.4,B.K1,0.7,12)
e.e5(new A.J(v,-1.5,-4.4),new A.J(v,0.7,-4.4),0.78,B.rN,0.8,12)
e.e5(new A.J(v,0.7,-4.4),new A.J(v,1.5,-3.6),0.38,B.rN,0.8,10)
e.e5(new A.J(v,-0.2,-4.4),new A.J(v,-0.2,-3.1),0.2,B.aba,0.7,8)
e.e5(new A.J(v,-0.2,-3.1),new A.J(v,-0.2,-2.8),0.95,t.c,0.5,12)
e.yU(new A.J(v,1.2,-3.6),new A.J(v,1.9,-3.6),0.78,0.4,B.rN,0.8,8)}for(u=x.o,w=0;w<2;++w){s=B.d2N[w]
t=s==="hot"
r=t?B.cug:B.cut
q=C.T(r).k("a2<1>")
p=C.B(new C.a2(r,new A.fkd(d,s),q),q.k("H.E"))
e.b=t?68:69
o=t?B.rY:B.nx
t=p.length
if(t===2){n=A.fTa(s)
e.jP(n,0.34,B.KE,!1,0.7,8)
m=n.length/2|0
e.jP(C.a([n[m-1],n[m],n[m+1]],u),0.4,o,!1,0.4,8)
for(t=r.length,l=0;l<t;++l){k=A.afg(r[l])
q=k.a+0
j=k.b
i=k.c+0
e.yU(new A.J(q,j+-0.2,i),new A.J(q,j+0.6,i),0.62,0.3,B.rN,0.8,8)}}else if(t===1){k=A.afg(D.d.gL(p))
h=D.d.gL(p)===D.d.gL(r)?1:-1
t=k.a+0
q=k.b
j=k.c
e.jP(C.a([k,new A.J(t,q+h*1.4,j+1),new A.J(t,q+h*3,j+2.4)],u),0.34,B.KE,!1,0.7,8)
j+=0
e.yU(new A.J(t,q+-0.2,j),new A.J(t,q+0.6,j),0.62,0.3,B.rN,0.8,8)}}if(d.r){e.b=0
e.d=0.5
for(u=d.e,w=0;w<4;++w){g=B.a2f[w]
t=g.a
if(u.h(0,t)!=null)continue
t=A.afg(t)
q=g.c.t(0,"hot")?B.rY:B.nx
e.iN(new A.J(t.a+0,t.b+0,t.c+0.9),0.65,q,4,8,0.1)}e.d=1}return new A.zk(f,C.E([61,B.dVe,62,B.dVg,63,B.dV9,64,B.dVh,65,B.dVC,66,B.dVy,67,B.dV6,68,B.dW8,69,B.dVF],x.S,x.q),B.GH,B.vA)},
hSN(d,e){var w,v,u,t,s,r,q,p,o,n=C.a([],x.z),m=new A.kj(n)
if(!d.f)return n
w=d.e
v=w.h(0,61)==="hot"&&w.h(0,63)==="hot"
u=w.h(0,62)==="cold"&&w.h(0,64)==="cold"
t=new A.fmw(e,m)
if(v){s=A.fTa("hot")
for(r=e*0.5,q=0;q<10;++q){p=D.k.G(r+q/10,1)
o=D.o.D(D.k.bw(p*(s.length-1)),0,s.length-2)
m.iN(A.zC(s[o],s[o+1],p*(s.length-1)-o),0.2,D.Ka,3,6,0.9)}}else if(w.h(0,61)==null)t.$2(61,D.Ka)
if(u){s=A.fTa("cold")
for(w=e*0.5,q=0;q<10;++q){p=D.k.G(w+q/10,1)
o=D.o.D(D.k.bw(p*(s.length-1)),0,s.length-2)
m.iN(A.zC(s[o],s[o+1],p*(s.length-1)-o),0.2,B.W5,3,6,0.9)}}else if(w.h(0,62)==null)t.$2(62,B.W5)
if(v&&u)for(w=e*2,q=0;q<8;++q){p=D.k.G(w+q/8,1)
r=C.aq(B.bhE,B.W5,0.5)
r.toString
m.iN(new A.J(0,21-p*6.5,1.6),0.26,r,3,6,0.9)}return n},
fmu(d){return D.d.d9(B.a2f,new A.fmv(d))},
cfC:function cfC(d,e,f){var _=this
_.a=d
_.b=e
_.c=!1
_.d=""
_.e=f
_.r=_.f=!1},
En:function En(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fl4:function fl4(d,e){this.a=d
this.b=e},
fl3:function fl3(d,e){this.a=d
this.b=e},
fl2:function fl2(){},
fkd:function fkd(d,e){this.a=d
this.b=e},
fmw:function fmw(d,e){this.a=d
this.b=e},
fmv:function fmv(d){this.a=d},
fOy(d,e,f){var w=x.N
w=new A.cfs(e,d,C.aW(w),C.V(w,x.S),C.aW(w))
w.bvn(d,e,f)
return w},
hcP(b7,b8,b9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=C.a([],x.z),b3=new A.kj(b2),b4=C.V(x.S,x.q),b5=C.a([],x.E),b6=b7.c
b6===$&&C.c()
w=b6.a==="bathroom"
v=w?28:0
b3.b=9199
b3.iO(B.fCH,B.fDU,B.b7M,4)
b3.iO(B.fBv,B.fCZ,B.Vv,4)
b3.iO(new A.J(v+19.8+0.6,24,16),B.fzI,B.uI,2)
b4.n(0,9199,B.dVq)
b3.b=9198
b3.bP(new A.J(v,0.6,10),B.fDc,B.m2,0.1)
b3.bP(new A.J(v,29.4,18.6),B.fzu,B.m2,0.1)
b3.bP(new A.J(v-19.4,13.6,10.5),B.fDI,B.m2,0.1)
for(u=[B.eAN,B.eAJ,B.ezI,B.ezF],t=0;t<4;++t){s=u[t].a
b3.bP(new A.J(v+s[0],33,s[1]),new A.J(s[2],2.4,s[3]),B.E8,0.5)}b3.a2L(new A.J(v,27,8),new A.J(v,34.3,8),8,B.aek,!1,!0,0.7,20)
b3.e5(new A.J(v,27,8),new A.J(v,27.2,8),8,B.ba9,0.5,20)
b3.jF(new A.J(v,27.1,8),new A.J(v,27.3,8),1.4,B.mE,12)
b3.a2L(new A.J(v+15,23.6,8),new A.J(v+19.4,23.6,8),0.92,B.pf,!1,!0,0.3,12)
b4.n(0,9198,B.dVQ)
b3.b=9400
b3.e5(new A.J(-56,18,0),new A.J(-56,18,6),1.5,B.rN,0.8,12)
u=b7.r?B.nx:D.bo
b3.e5(new A.J(-57,18,6),new A.J(-55,18,6.5),4,u,0.5,14)
b3.e5(new A.J(-56,16,0),new A.J(-56,20,0),1,B.K1,0.7,10)
u=b7.r?"The water is ON. Turn it OFF with your hand before you cut into any pipe, and turn it ON to test your work.":"The water is OFF. Turn it ON to test your work."
b4.n(0,9400,new A.d3("Main water valve",u,new A.J(-56,18,4),22))
u=b7.r
s=u?"MAIN WATER: ON":"MAIN WATER: OFF"
u=u?D.dS:D.bo
b5.push(new A.rZ(new A.J(-56,24,6),s,u))
r=new A.fl1(b3)
u=v-8
r.$1(u)
s=v+8
r.$1(s)
if(w)r.$1(-40)
q=new A.J(v,21,8)
p=new A.fl_(q)
o=new A.fkU(b3,b7)
n=new A.fkV(b3,b7)
m=new A.fl0(b7,b4,b9,b8,b5)
l=b6.c
for(b6=l.length,k=b7.x,j=b7.e,i=b7.f,h=x.o,t=0;t<b6;++t){g=l[t]
f=g.a
e=j.t(0,f)
if(e){d=b7.uO(0,f)
a0=i.h(0,f)
if(a0==null)a0=0
a1=d.r-a0>0}else a1=!1
a2=D.d.cJ(l,g)
a3=9100+a2
k.t(0,f)
switch(f){case"flange":a4=new A.J(-30,0.3,14)
if(e){b3.b=a3
b3.e5(a4,new A.J(-30,0.8999999999999999,14),5.5,B.pf,0.4,18)
b3.yU(new A.J(-30,0.8,14),new A.J(-30,1.2,14),5.5,3.2,B.rN,0.8,18)}else n.$3(f,new A.J(-30,0.8,14),B.fvK)
m.$3(g,a4,"Flange spot")
break
case"wax":a4=new A.J(-30,1.2,14)
if(e){b3.b=a3
b3.yU(a4,new A.J(-30,2.3,14),4.2,2.4,B.biu,0.2,18)}else n.$3(f,new A.J(-30,1.7,14),B.fBF)
m.$3(g,a4,"Wax ring spot")
break
case"toilet":if(e){b3.b=a3
b3.Kb(new A.J(-30,0.5,14),new A.J(-30,16,14),8.5,B.A4,6,0.8,20)
b3.e5(new A.J(-30,16,14),new A.J(-30,17,14),9.5,B.KK,0.8,20)
b3.bP(new A.J(-30,22,4.5),B.aQx,B.A4,0.8)
b3.bP(new A.J(-30,29.2,4.5),B.fyr,B.KK,0.8)}else{b3.b=a3
b3.d=0.32
b3.jF(new A.J(-30,0.5,14),new A.J(-30,17,14),8.5,D.b1,16)
b3.ct(new A.J(-30,22,4.5),B.aQx,D.b1)
b3.d=1}m.$3(g,new A.J(-30,12,12),"Toilet spot")
break
case"bolts":if(e){for(f=9200+a2*2,a5=0;a5<2;++a5){a6=B.aw1[a5]
b3.b=f+(a6<0?0:1)
d=-30+a6
b3.e5(new A.J(d,0.5,17),new A.J(d,3.6,17),0.45,B.DX,0.8,8)
a0=a1?D.cv:B.DX
b3.e5(new A.J(d,3.4,17),new A.J(d,4.6,17),1.2,a0,0.8,6)}f=a1?"The nuts are loose. Tighten them with the wrench, a little at a time so the porcelain does not crack.":"The toilet is bolted down."
b4.n(0,a3,new A.d3(g.c,f,new A.J(-30,3,17),20))}else for(a5=0;a5<2;++a5){a6=B.aw1[a5]
b3.b=a3
b3.d=0.4
f=-30+a6
b3.jF(new A.J(f,0.5,17),new A.J(f,4.6,17),1.2,D.b1,8)
b3.d=1}m.$3(g,new A.J(-30,3,17),"Bolts")
break
case"tvalve":A.fSE(b3,a3,new A.J(-40,8,1.6),e,B.nx,new A.fkR(n,g,-30))
m.$3(g,new A.J(-40,8,2),"Valve")
break
case"those":if(e){b3.b=a3
b3.jP(A.agt(C.a([new A.J(-40,10,1.6),new A.J(-42,14,3.5),new A.J(-36,17,3.6),new A.J(-32,21,2.5)],h),6),0.55,B.KE,!1,0.7,8)
b3.jP(C.a([new A.J(-36.8,15.5,3.6),new A.J(-35,16.4,3.6)],h),0.62,B.nx,!1,0.4,8)
if(a1)b3.jF(new A.J(-40,10,1.6),new A.J(-40,11.2,1.6),0.9,D.cv,8)}else o.$3$r(f,A.agt(C.a([new A.J(-40,10,1.6),new A.J(-42,14,3.5),new A.J(-36,17,3.6),new A.J(-32,21,2.5)],h),6),0.9)
m.$3(g,new A.J(-36,15,3),"Toilet hose")
break
case"faucet":if(e){b3.b=a3
b3.e5(new A.J(v,34.2,8),new A.J(v,34.6,8),3.6,B.kA,0.9,20)
b3.jP(A.G9(C.a([new A.J(v,34.6,8),new A.J(v,40,8),new A.J(v,43,10),new A.J(v,43,14),new A.J(v,41.2,14.6)],h),1.4,6),0.5,B.kA,!0,0.9,10)
for(a5=0;a5<2;++a5){a6=E.a28[a5]
f=v+a6
b3.e5(new A.J(f,34.6,8),new A.J(f,36.6,8),0.5,B.kA,0.9,8)
d=a6<0?B.rY:B.nx
b3.e5(new A.J(f,36.6,8),new A.J(f,37.6,8),0.8,d,0.6,10)}for(a5=0;a5<2;++a5){f=v+B.d5s[a5]
b3.e5(new A.J(f,34,8),new A.J(f,28.4,8),0.45,B.kA,0.9,8)}}else n.$3(f,new A.J(v,38,9),B.fvJ)
m.$3(g,new A.J(v,38,8),"Faucet spot")
break
case"vhot":A.fSE(b3,a3,new A.J(u,8,1.6),e,B.rY,new A.fkS(n,g,v))
m.$3(g,new A.J(u,8,2),"Hot valve")
break
case"vcold":A.fSE(b3,a3,new A.J(s,8,1.6),e,B.nx,new A.fkT(n,g,v))
m.$3(g,new A.J(s,8,2),"Cold valve")
break
case"hhot":case"hcold":a7=f==="hhot"
a8=a7?-1:1
d=v+a8*3
a9=A.agt(C.a([new A.J(v+a8*8,10.5,1.8),new A.J(v+a8*9,16,3.5),new A.J(v+a8*6,22,4.2),new A.J(d,27.5,6),new A.J(d,28.6,8)],h),6)
if(e){b3.b=a3
b3.jP(a9,0.5,B.KE,!1,0.7,8)
b0=a9.length/2|0
f=C.a([a9[b0-1],a9[b0],a9[b0+1]],h)
b3.jP(f,0.58,a7?B.rY:B.nx,!1,0.4,8)
if(a1){f=D.d.gL(a9)
d=D.d.gL(a9)
b3.jF(f,new A.J(d.a+0,d.b+1.4,d.c+0),0.9,D.cv,8)
d=D.d.gal(a9)
b3.jF(new A.J(d.a,d.b-1.4,d.c),D.d.gal(a9),0.9,D.cv,8)}}else o.$3$r(f,a9,0.9)
f=a9[a9.length/2|0]
m.$3(g,f,a7?"Hot hose":"Cold hose")
break
case"tail":case"trap":case"arm":d=f==="tail"
if(d)a0=B.a1t
else a0=f==="trap"?A.fB0():B.a2k
b1=p.$1(a0)
if(e){b3.b=a3
a0=d?B.kA:B.pf
b3.a5l(b1,0.66,a0,!1,!0,!0,d?0.85:0.3,12)}else o.$3$r(f,b1,0.78)
a0=J.a8(b1)
a0=a0.h(b1,a0.gM(b1)/2|0)
if(d)f="Tailpiece"
else f=f==="trap"?"P-trap":"Trap arm"
m.$3(g,a0,f)
break}}b6=new A.fkY(l,b7,b3,b4)
b6.$4("trap",q.ad(0,B.a7H),B.lT,0)
b6.$4("arm",q.ad(0,B.a7J),B.wa,1)
return new A.zk(b2,b4,b5,B.vA)},
fSE(d,e,f,g,h,i){if(!g){i.$0()
return}d.b=e
d.e5(f.ad(0,B.fBG),f.ad(0,B.aRb),0.9,B.rN,0.8,12)
d.e5(f.ad(0,B.aRb),f.ad(0,B.fzq),0.45,B.rN,0.8,10)
d.e5(f.ad(0,B.fD9),f.ad(0,B.aRs),0.3,B.aba,0.7,8)
d.e5(f.ad(0,B.aRs),f.ad(0,B.fDv),1.2,h,0.5,12)},
i0K(a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=C.a([],x.z),e=new A.kj(f),d=a0.x
if(d.a===0)return f
w=a0.c
w===$&&C.c()
v=new A.fAQ(w.a==="bathroom"?28:0,-30)
for(d=C.ea(d,d.r,C.a3(d).c),u=d.$ti.c,t=a0.e;d.C();){s=d.d
if(s==null)s=u.a(s)
r=v.$1(s)
q=D.d.iA(w.c,new A.fAP(s)).b==="valve"||!t.t(0,s)
s=r.a
p=r.b
o=r.c
n=0
for(;;){if(!(n<(q?10:5)))break
m=q?1.8:1.2
l=q?10:5
k=D.k.G(a1*m+n/l,1)
l=Math.sin(n*2.1)
m=q?3:0.6
j=q?4:-0.5
i=q?14:8
h=q?6:0.8
g=q?0.5:0.35
e.iN(new A.J(s+l*k*m,p+(k*j-k*k*i),o+(1.5+k*h)),g,B.KN,3,6,0.9);++n}}return f},
nb:function nb(d,e,f,g,h,i,j){var _=this
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
cfs:function cfs(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.d=_.c=$
_.e=f
_.f=g
_.r=!0
_.w=0
_.x=h
_.y=!1},
cfw:function cfw(d){this.a=d},
cfx:function cfx(d){this.a=d},
cft:function cft(d){this.a=d},
cfy:function cfy(d){this.a=d},
cfz:function cfz(d){this.a=d},
cfA:function cfA(){},
cfB:function cfB(){},
cfu:function cfu(d){this.a=d},
cfv:function cfv(d){this.a=d},
fl1:function fl1(d){this.a=d},
fl_:function fl_(d){this.a=d},
fkU:function fkU(d,e){this.a=d
this.b=e},
fkX:function fkX(d){this.a=d},
fkV:function fkV(d,e){this.a=d
this.b=e},
fkW:function fkW(d){this.a=d},
fl0:function fl0(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fkR:function fkR(d,e,f){this.a=d
this.b=e
this.c=f},
fkS:function fkS(d,e,f){this.a=d
this.b=e
this.c=f},
fkT:function fkT(d,e,f){this.a=d
this.b=e
this.c=f},
fkY:function fkY(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fkZ:function fkZ(d){this.a=d},
fAQ:function fAQ(d,e){this.a=d
this.b=e},
fAP:function fAP(d){this.a=d},
UW:function UW(d,e){this.d=d
this.a=e},
aCJ:function aCJ(d,e){var _=this
_.e=_.d=$
_.f=d
_.r=$
_.w=e
_.x=""
_.y=0
_.z=null
_.as=_.Q=!1
_.c=_.a=_.at=null},
eem:function eem(d,e,f){this.a=d
this.b=e
this.c=f},
een:function een(d){this.a=d},
eel:function eel(d){this.a=d},
eef:function eef(d){this.a=d},
eeo:function eeo(d){this.a=d},
ee7:function ee7(d,e){this.a=d
this.b=e},
ee8:function ee8(d,e){this.a=d
this.b=e},
ee9:function ee9(d){this.a=d},
eee:function eee(d){this.a=d},
eec:function eec(d){this.a=d},
eed:function eed(d,e){this.a=d
this.b=e},
eek:function eek(d){this.a=d},
eeb:function eeb(d,e,f){this.a=d
this.b=e
this.c=f},
eea:function eea(d,e,f){this.a=d
this.b=e
this.c=f},
eep:function eep(d){this.a=d},
eet:function eet(d,e){this.a=d
this.b=e},
eer:function eer(){},
eeq:function eeq(d){this.a=d},
ees:function ees(d,e){this.a=d
this.b=e},
eej:function eej(d){this.a=d},
eeh:function eeh(d,e){this.a=d
this.b=e},
eeg:function eeg(d,e){this.a=d
this.b=e},
eei:function eei(d,e){this.a=d
this.b=e},
kZ(d){return D.d.iA(B.tM,new A.fJ5(d))},
fOY(d,e,f,g){var w=x.S,v=x.N
w=new A.b3l(g,f,C.V(w,v),C.aW(w),C.aW(w),C.V(w,x.al),C.a([new A.WB(),new A.WB()],x.Y),C.V(w,x.W),C.aW(w),C.V(w,v),C.aW(w),C.a([],x.s))
w.cfp(d,e)
return w},
hB1(d){var w
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
fJ5:function fJ5(d){this.a=d},
pH:function pH(d,e,f){this.a=d
this.b=e
this.c=f},
WB:function WB(){var _=this
_.a=!1
_.b=0
_.c=!0
_.d=!1},
atH:function atH(d,e){var _=this
_.a=!1
_.b=d
_.c=e
_.e=_.d=!1},
aS1:function aS1(d,e){this.a=d
this.b=e
this.c=!1},
eC:function eC(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
b3l:function b3l(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
ckq:function ckq(){},
ckx:function ckx(d){this.a=d},
cky:function cky(d){this.a=d},
ckz:function ckz(d,e){this.a=d
this.b=e},
ckA:function ckA(d,e){this.a=d
this.b=e},
ckC:function ckC(d){this.a=d},
ckB:function ckB(d,e){this.a=d
this.b=e},
ckp:function ckp(d){this.a=d},
ckn:function ckn(){},
cko:function cko(d){this.a=d},
ckv:function ckv(){},
ckw:function ckw(){},
ckr:function ckr(){},
cks:function cks(d){this.a=d},
ckt:function ckt(d){this.a=d},
ckD:function ckD(d){this.a=d},
cku:function cku(d){this.a=d},
fNR(d,e,f){return new A.UZ(e,f,d,null)},
kV:function kV(d,e,f){this.a=d
this.b=e
this.c=f},
UZ:function UZ(d,e,f,g){var _=this
_.d=d
_.e=e
_.f=f
_.a=g},
aCQ:function aCQ(d,e,f){var _=this
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
eiJ:function eiJ(d,e,f){this.a=d
this.b=e
this.c=f},
eiK:function eiK(d){this.a=d},
eiI:function eiI(d){this.a=d},
ehY:function ehY(d){this.a=d},
ehZ:function ehZ(d){this.a=d},
ehX:function ehX(d){this.a=d},
ei_:function ei_(d){this.a=d},
ei0:function ei0(d){this.a=d},
ei8:function ei8(d){this.a=d},
ei1:function ei1(d){this.a=d},
eiq:function eiq(d,e){this.a=d
this.b=e},
ei9:function ei9(d){this.a=d},
eiF:function eiF(d){this.a=d},
eiG:function eiG(d){this.a=d},
eiH:function eiH(d,e){this.a=d
this.b=e},
eiD:function eiD(d){this.a=d},
eiE:function eiE(d,e){this.a=d
this.b=e},
eiC:function eiC(d){this.a=d},
eiy:function eiy(d){this.a=d},
eiz:function eiz(d,e,f){this.a=d
this.b=e
this.c=f},
eiA:function eiA(d){this.a=d},
eiB:function eiB(d,e,f){this.a=d
this.b=e
this.c=f},
eiL:function eiL(d,e){this.a=d
this.b=e},
ei7:function ei7(d){this.a=d},
ei5:function ei5(d){this.a=d},
ei6:function ei6(d,e){this.a=d
this.b=e},
ei4:function ei4(d){this.a=d},
ei2:function ei2(d){this.a=d},
ei3:function ei3(d,e){this.a=d
this.b=e},
eia:function eia(d,e){this.a=d
this.b=e},
eio:function eio(){},
eip:function eip(){},
eib:function eib(d){this.a=d},
eic:function eic(d){this.a=d},
eid:function eid(d){this.a=d},
eig:function eig(){},
eih:function eih(){},
eii:function eii(){},
eij:function eij(){},
eik:function eik(){},
eil:function eil(d){this.a=d},
eim:function eim(){},
ein:function ein(d){this.a=d},
eie:function eie(d){this.a=d},
eif:function eif(){},
ej1:function ej1(d,e){this.a=d
this.b=e},
ej3:function ej3(d){this.a=d},
eiQ:function eiQ(d){this.a=d},
ej2:function ej2(d){this.a=d},
eiT:function eiT(d){this.a=d},
eiU:function eiU(d,e){this.a=d
this.b=e},
eiS:function eiS(d,e){this.a=d
this.b=e},
eiV:function eiV(d,e){this.a=d
this.b=e},
eiR:function eiR(d,e){this.a=d
this.b=e},
ej4:function ej4(d,e){this.a=d
this.b=e},
eiP:function eiP(d,e){this.a=d
this.b=e},
ej5:function ej5(d){this.a=d},
eiO:function eiO(d){this.a=d},
ej6:function ej6(d,e){this.a=d
this.b=e},
eiN:function eiN(d,e){this.a=d
this.b=e},
ej7:function ej7(d){this.a=d},
ej8:function ej8(d){this.a=d},
ej9:function ej9(d,e,f){this.a=d
this.b=e
this.c=f},
eiM:function eiM(d,e,f){this.a=d
this.b=e
this.c=f},
eiW:function eiW(d){this.a=d},
eiX:function eiX(d,e){this.a=d
this.b=e},
eiY:function eiY(d){this.a=d},
eiZ:function eiZ(d){this.a=d},
ej_:function ej_(d){this.a=d},
ej0:function ej0(d){this.a=d},
eix:function eix(d){this.a=d},
eiw:function eiw(d){this.a=d},
eit:function eit(d,e){this.a=d
this.b=e},
eir:function eir(){},
eis:function eis(){},
eiu:function eiu(d,e){this.a=d
this.b=e},
eiv:function eiv(d,e){this.a=d
this.b=e},
a1G(d,e){var w=d.d,v=e.a,u=e.c,t=e.b,s=w.a,r=w.b
w=w.c
return d.c?new A.J(s+v,r-u,w+t):new A.J(s+v,r+t,w+u)},
fRX(d,e,f){var w,v,u,t,s,r=d.a,q=e.d,p=e.c?A.Ap(r,1.5707963267948966,0,q):A.Ap(r,0,0,q)
r=C.a([],x.z)
for(q=p.length,w=0;w<p.length;p.length===q||(0,C.L)(p),++w){v=p[w]
u=v.d
u=u===0?0:f.$1(u)
r.push(new A.nD(v.a,v.b,v.c,u,v.e,v.f,v.r,v.w,v.x,2,0))}q=C.V(x.S,x.q)
for(u=d.b,u=u.gdL(u),u=u.gag(u);u.C();){t=u.gU(u)
s=f.$1(t.a)
t=t.b
q.n(0,s,new A.d3(t.a,t.b,A.a1G(e,t.c),t.d))}return new C.z(r,q)},
hMJ(a3,a4,a5,a6,a7,a8,a9,b0,b1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=x.i,a2=C.eu([a4,a5],a1)
for(w=b1.length,v=0;v<b1.length;b1.length===w||(0,C.L)(b1),++v){u=b1[v].a
a2.K(0,D.k.D(u[0],a4,a5))
a2.K(0,D.k.D(u[1],a4,a5))}t=C.B(a2,a2.$ti.k("cl.E"))
D.d.fg(t)
for(w=C.T(b1).k("a2<1>"),u=w.k("H.E"),s=0;r=s+1,r<t.length;s=r){q=t[s]
p=t[r]
o=p-q
if(o<0.01)continue
n=(q+p)/2
m=C.B(new C.a2(b1,new A.fep(n),w),u)
l=C.eu([a6,a7],a1)
for(k=m.length,v=0;v<m.length;m.length===k||(0,C.L)(m),++v){j=m[v].a
l.K(0,D.k.D(j[2],a6,a7))
l.K(0,D.k.D(j[3],a6,a7))}i=C.B(l,l.$ti.k("cl.E"))
D.d.fg(i)
for(k=!(o>30),h=0;g=h+1,g<i.length;h=g){f=i[h]
e=i[g]
j=e-f
if(j<0.01)continue
d=(f+e)/2
if(D.d.b8(m,new A.feq(d)))continue
a0=!k||j>60?2:1
a3.iO(new A.J(n,d,a8),new A.J(o,j,a9),b0,a0)}}},
Ck(c9,d0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1=x.z,c2=C.a([],c1),c3=new A.kj(c2),c4=C.a([],x.h),c5=x.E,c6=C.a([],c5),c7=x.S,c8=C.V(c7,x.q)
c3.b=8001
c3.qb(B.fxZ,B.fA_,B.Al,0.15,4)
c3.iO(B.fxL,B.aQR,B.ab6,3)
c3.bP(B.fCK,B.fDA,B.Ew,0.5)
c3.ct(B.aQU,B.fxE,B.Aa)
c3.ct(B.aQU,B.fDK,B.Aa)
c3.iO(B.fA4,B.aQR,B.ab6,3)
c3.bP(B.fxH,B.fA5,B.JS,0.15)
c3.bP(B.fAv,B.fA8,B.DH,0.8)
c3.b=0
c3.d=c9.gyi()?0.42:0.1
c3.iO(B.fwO,B.fBA,c9.gyi()?B.oi:B.b4m,3)
c3.d=1
c3.b=8001
if(!c9.gyi())for(w=0;w<10;++w)c3.aBd(new A.J(-72+w*16,51.3,55),B.fBX,B.m2,!1,0.05)
else{c3.bP(B.fAQ,B.fz4,D.c,0.2)
c3.bP(B.fEj,B.aR0,D.c,0.2)
c3.bP(B.fyu,B.aR0,D.c,0.2)}if(c9.gyi())c3.bP(B.fyC,B.fz7,B.oi,0.2)
c3.b=8001
c3.iO(B.fDs,B.fDX,B.baW,2)
c3.bP(B.fCN,B.fxv,B.acW,0.1)
c3.bP(B.fCM,B.fxw,B.Vw,0.1)
c3.bP(B.fCG,B.aQK,B.Vw,0.1)
c3.bP(B.fwu,B.aQK,B.Vw,0.1)
c8.n(0,8001,B.dV8)
c3.b=8002
c3.qb(B.fE6,B.aQN,B.m2,0.05,3)
c3.qb(B.fx6,B.aQN,B.m2,0.05,3)
c8.n(0,8002,B.dVA)
for(v=c9.y,w=0;u=$.Gg(),w<u.length;++w){t=1000+w
c3.b=t
c3.cBl(new A.J(u[w],0,-2.25),B.fBM,B.m2,!1,0.05,2)
s=v.t(0,w)?"This one has a hole for the cable.":"Tap it with the drill to put a hole through it."
c8.n(0,t,new A.d3("Wall stud","A 2x4 stud, one of the vertical posts in the wall. They stand 16 inches apart. "+s,new A.J(u[w],20,-2),60))
if(v.t(0,w)){c3.b=0
c3.e=0.6
c3.ct(new A.J(u[w],40,-2.25),B.fxJ,B.adB)
c3.e=0}}c3.b=8000
c3.bP(B.fwz,B.fvO,B.abq,0.5)
c3.e=0.4
c3.ct(B.fzQ,B.fDb,B.DQ)
for(r=0;r<6;++r)for(v=19.5-r*3.6,q=0;q<2;++q)c3.bP(new A.J(61.6+q*4.8,v,0.5),B.fuR,B.aeB,0.3)
p=c9.ax&&!c9.ay
v=p?0.6:0
if(c9.ay)u=D.cb
else u=p?D.bL:D.ka
c3.bP(new A.J(64,-2.5+v,0.9),B.fz2,u,0.4)
c3.e=0
if(c9.ay)v="The main breaker has TRIPPED (orange). Tap it to flip it fully OFF, fix the problem, then turn it ON."
else v=c9.ax?"The power is ON. Tap to turn it OFF. Always turn it OFF before you touch any wire.":"The power is OFF. Tap to turn it ON."
c8.n(0,8000,new A.d3("Breaker panel",v,B.fxx,60))
c3.b=8003
for(v=c9.z,u=C.ea(v,v.r,C.a3(v).c),t=x.o,s=u.$ti.c;u.C();){o=u.d
n=A.kZ(o==null?s.a(o):o)
o=n.d
m=o.a-0.35
l=C.a([B.fCr,B.fAO,new A.J(m,40,-3.2)],t)
if(n.c)D.d.v(l,C.a([new A.J(m,51.4,-3.2),new A.J(m,51.4,o.c+11)],t))
else l.push(new A.J(m,o.b+11,-3.4))
c3.jP(A.G9(l,3,6),0.2,B.W8,!1,0.35,6)}c8.n(0,8003,B.dVY)
for(u=x.X,s=c9.Q,k=0;k<3;++k){j=B.nV[k]
i=s.h(0,j)
if(i==null||!i.a)continue
if(i.e)h=B.bge
else h=i.d?B.bhz:B.bh0
o=C.a([],u)
for(m=i.b,l=C.a3(m),g=new C.mT(m,m.r,l.k("mT<1>")),g.c=m.e,l=l.c;g.C();){m=g.d
if(m==null)m=l.a(m)
o.push(new C.cL([A.kZ(m).d.a-1.15,A.kZ(m).d.a+1.15,A.kZ(m).d.b-2,A.kZ(m).d.b+2]))}m=6100+k
c3.b=m
A.hMJ(c3,j,j+48,-47,47,-0.25,0.5,h,o)
o=i.e?"Painted and finished.":"A 4 by 8 foot sheet of drywall (gypsum between two layers of paper). It is screwed to the studs."
c8.n(0,m,new A.d3("Drywall sheet",o,new A.J(j+24,0,0),90))
c3.b=0
c3.e=0.3
for(o=i.c,m=C.a3(o),l=new C.mT(o,o.r,m.k("mT<1>")),l.c=o.e,m=m.c;l.C();){o=l.d
if(o==null)o=m.a(o)
f=D.o.an(o,10)
e=D.o.G(o,10)
c3.iN(new A.J($.Gg()[f],-40+e*16,0.1),0.34,B.DQ,3,5,0.3)}c3.e=0}for(u=d0.a,o=u!=="tape",m=c9.as,l=u!=="mud",g=u==="sand",w=0;w<2;w=a1){d=-24+48*w
a0=s.h(0,B.nV[w])
a0=a0==null?null:a0.a
a1=w+1
a2=s.h(0,B.nV[a1])
a2=a2==null?null:a2.a
if(a0!==!0||a2!==!0)continue
a3=m[w]
a0=6200+w
c3.b=a0
if(a3.a&&!a3.d){a2=a3.b
if(a2===0)h=B.bgh
else h=a3.c?B.bcK:B.b8A
c3.e=0.5
c3.ct(new A.J(d,0,0.08+0.02*a2),new A.J(2.2+a2*1.4,94,0.12),h)
c3.e=0}else if(!o||!l||g){c3.d=0.45
c3.e=0.6
c3.ct(new A.J(d,0,0.12),B.fzf,D.b1)
c3.e=0
c3.d=1}if(a3.d)a2="Smooth and ready for paint."
else if(!a3.a)a2="The joint between two sheets. It needs tape and three coats of joint compound."
else{a2=a3.b
a4=a2===1?"":"s"
a4="Taped, with "+a2+" coat"+a4+" of mud."
a2=a4}c8.n(0,a0,new A.d3("Seam",a2,new A.J(d,0,0),70))}for(o=d0.b,m=c9.x,l=c9.at,g=x.N,a5=0;a5<7;++a5){n=B.tM[a5]
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
b1=A.fSL(b0,a0,!1)
b2=A.fRX(b1,n,new A.fl5(n))
D.d.v(c2,b2.a)
c8.v(0,b2.b)
if(a0.f&&a0.c===0){a0=C.a([],c5)
for(a2=b1.c,a4=a2.length,b3=0;b3<a2.length;a2.length===a4||(0,C.L)(a2),++b3){b4=a2[b3]
a0.push(new A.rZ(A.a1G(n,b4.a),b4.b,b4.c))}D.d.v(c6,a0)}}else if(a7!=null&&a7.b.c>=2){a4=a7.a
b5=a7.b
b6=b5.w
b7=C.a([],c1)
b8=new A.kj(b7)
b9=new A.Xs(C.V(c7,g))
b9.c=2
b9.w=b6
if(a4==="light"||a4==="fan")A.h9q(b8,a4,b9)
else{A.h95(b8,a4,-0.25,b6,!0)
A.hbu(b8,b6)}D.d.v(c2,A.fRX(new A.zk(b7,B.dhf,B.GH,B.vA),n,new A.fl6(n)).a)
if(!a2){c3.b=3000+a0
c3.e=0.4
c3.d=0.55
a2=n.d
b5=b5.w?D.aB:D.b7
c3.ct(new A.J(a2.a,a2.b,a2.c+0.2),B.fzj,b5)
c3.d=1
c3.e=0}c8.n(0,3000+a0,new A.d3(A.hIC(a4),A.hIB(c9,a0),A.a1G(n,B.a7E),22))}else{a4=C.a([],c1)
A.h8r(new A.kj(a4),a9,!1)
D.d.v(c2,A.fRX(new A.zk(a4,B.dhR,B.GH,B.vA),n,new A.fl7(n)).a)
a2=a2?"Ceiling box":"Electrical box"
a4=v.t(0,a0)?"The box is mounted and the cable is in. A device can be wired here.":"The box is mounted. Pull the cable to it."
c8.n(0,2000+a0,new A.d3(a2,a4,A.a1G(n,B.a7E),24))}}c0=new A.fla(c3)
if(u==="wall"||u==="ceiling"||u==="fanbox")for(a5=0;a5<7;++a5){n=B.tM[a5]
c1=n.a
if(m.ah(0,c1))continue
c5=n.c
c7=n.d
s=c7.a
o=c7.b
a0=c5?new A.J(s,o-1,c7.c):new A.J(s,o,1.5)
a2=c5?B.fxP:B.fyX
c0.$4$round(2000+c1,a0,a2,c5)
c1=c5?new A.J(s,o-8,c7.c):new A.J(s,o+7,3)
c6.push(new A.rZ(c1,n.b,D.fi))}else if(u==="cable")for(a5=0;a5<7;++a5){n=B.tM[a5]
c1=n.a
if(!m.ah(0,c1)||v.t(0,c1))continue
c5=n.c
c7=n.d
s=c7.a
o=c7.b
c7=c5?new A.J(s,o-1,c7.c):new A.J(s,o,1.5)
s=c5?B.aQP:B.fy_
c0.$5$col$round(2000+c1,c7,s,D.cp,c5)}else if(u==="knife")for(a5=0;a5<7;++a5){n=B.tM[a5]
if(n.c||!m.ah(0,n.a))continue
c1=n.d
c5=c1.a
i=c9.anT(c5)
if(i==null||i.b.t(0,n.a))continue
c0.$4$col(2000+n.a,new A.J(c5,c1.b,0.5),B.fz1,D.cv)}else if(u==="sheet")for(w=0;w<5;){j=B.a2h[w]
c0.$3(6000+w,new A.J(j,0,0.3),B.fBP);++w
c6.push(new A.rZ(new A.J(j,50,1),"edge "+w,D.fi))}else if(u==="screw")for(a5=0;a5<3;++a5){j=B.nV[a5]
i=s.h(0,j)
if(i==null||!i.a)continue
for(c1=c9.aoc(j),c5=c1.length,c7=i.c,o=j+48,b3=0;b3<c1.length;c1.length===c5||(0,C.L)(c1),++b3){f=c1[b3]
for(a0=f*10,a2=7000+a0,r=0;r<6;++r){if(c7.t(0,a0+r))continue
c0.$3(a2+r,new A.J($.Gg()[f],-40+r*16,0.5),B.aQH)}a2=$.Gg()
if(f+1<a2.length&&a2[f]+16<=o)for(a0=7500+a0,r=0;r<6;r+=2)c0.$4$col(a0+r,new A.J(a2[f]+8,-40+r*16+8,0.5),B.aQH,D.dy)}}if(!C.eu(["wall","ceiling","fanbox","cable","knife","sheet","screw",""],g).t(0,u))c1=D.d.t(B.GL,u)||C.eu(["outlet","gfci","switch","light","fan"],g).t(0,u)
else c1=!1
if(c1)for(c1=c9.CW,a5=0;a5<7;++a5){n=B.tM[a5]
if(D.d.t(B.GL,u)){c5=n.a
a7=l.h(0,c5)
if(a7!=null){c7=a7.a
c7=(c7==="outlet"||c7==="gfci")&&a7.b.c>=2&&!c1.ah(0,c5)}else c7=!1
if(c7){c7=n.d
c0.$4$col(3000+c5,new A.J(c7.a,c7.b,1.2),B.fzk,D.bc)}}else{c5=n.a
if(m.ah(0,c5)&&v.t(0,c5)&&!l.ah(0,c5)){c7=n.c
s=n.d
o=s.a
g=s.b
s=c7?new A.J(o,g-1,s.c):new A.J(o,g,1.2)
o=c7?B.aQP:B.fBJ
c0.$4$round(2000+c5,s,o,c7)}}}for(c1=c9.CW,c5=new C.cJ(c1,C.a3(c1).k("cJ<1,2>")).gag(0);c5.C();){j=c5.d
c7=j.a
n=A.kZ(c7)
v=c3.b=8100+c7
u=n.d
d=u.a
u=u.b
c3.jP(A.G9(C.a([new A.J(d,u,2.5),new A.J(d,-46,3.5),new A.J(d,-46,22)],t),4,6),0.28,B.Wc,!1,0.2,6)
c3.bP(new A.J(d,u,1.6),B.fyA,B.b5S,0.3)
u=j.b
switch(u){case"tv":c3.bP(new A.J(d,-45,24),B.fxe,B.ad_,0.2)
c3.bP(new A.J(d,-19,24),B.fxW,E.E1,0.4)
if(c1.ah(0,c7))c7=c9.ax&&!c9.ay&&c9.a2X(c7)
else c7=!1
if(c7){c7=d-38.5
s=d+38.5
c4.push(new A.Wv(C.a([new A.J(c7,1.5,25.7),new A.J(s,1.5,25.7),new A.J(s,-39.5,25.7),new A.J(c7,-39.5,25.7)],t),v,new A.fl8(j),180,9,2))}break
case"lamp":c3.e5(new A.J(d,-47.5,24),new A.J(d,-46.5,24),6,B.Vd,0.4,14)
c3.e5(new A.J(d,-46.5,24),new A.J(d,-22,24),1,B.Al,0.5,8)
c3.yg(new A.J(d,-26,24),new A.J(d,-12,24),9,U.Wj,!1,!0,5.5,0.2,16)
break
case"toaster":c3.bP(new A.J(d,-42.5,24),B.fw1,B.kA,0.8)
c3.ct(new A.J(d,-38,24),B.fCq,B.ae7)
break
default:c3.bP(new A.J(d,-43.5,24),B.fwm,B.ad_,0.2)
c3.Kb(new A.J(d-6,-38,24),new A.J(d+8,-38,24),3.4,B.KB,3,0.6,12)
c3.aiT(new A.J(d-8,-43,24),B.fw9,B.KB,0.6,0)}c7=A.hGN(u)
s="Plugged into "+n.b
u=u==="tv"?s+". Tap it to watch NGMY ads full screen. Use the Unplug tool to unplug it.":s+". Tap it to unplug."
c8.n(0,v,new A.d3(c7,u,new A.J(d,-35,20),60))}for(a5=0;a5<7;++a5){n=B.tM[a5]
c8.ci(0,2000+n.a,new A.fl9(n))}return new A.zk(c2,c8,c6,c4)},
hIC(d){var w
A:{if("gfci"===d){w="GFCI outlet"
break A}if("switch"===d){w="Light switch"
break A}if("light"===d){w="Ceiling light"
break A}if("fan"===d){w="Ceiling fan"
break A}w="Outlet"
break A}return w},
hGN(d){var w
A:{if("tv"===d){w="TV"
break A}if("lamp"===d){w="Lamp"
break A}if("toaster"===d){w="Toaster"
break A}w="Hair dryer"
break A}return w},
hIB(d,e){var w,v=d.at.h(0,e)
if(v==null)return""
if(v.b.w)return"BURNT. It was wired wrong and it burnt out. Pull it out and put in a new one."
w=v.a
if(w==="switch")return d.ch.t(0,e)?"The switch is ON. Tap to turn it off.":"The switch is OFF. Tap to flip it on."
if(w==="light"||w==="fan")return d.ala(e)?"It is running.":"It is off. Flip its switch (breaker on)."
w=d.CW.h(0,e)
return"Tap with a TV, lamp, toaster or hair dryer in your hand to plug it in. Plugged: "+(w==null?"nothing":w)+"."},
i0Z(a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=C.a([],x.z),a0=new A.kj(d)
for(w=D.d.gag(B.tM),v=new C.fx(w,new A.fB9()),u=a1.at,t=a2*7;v.C();){s=w.gU(0)
r=s.a
q=u.h(0,r)
if(q==null||q.b.c<1)continue
p=a1.ala(r)?t:0.4
a0.b=3000+r
s=s.d
r=s.a
o=s.b-6.6
s=s.c
for(n=0;n<4;++n){m=p+n*3.141592653589793/2
l=A.bBs(B.fvM,m)
a0.aiT(new A.J(r+l.a,o+l.b,s+l.c),B.fDO,B.b6S,0.3,m)}}w=a1.d
w===$&&C.c()
w=D.d.gag(w)
v=new C.fx(w,new A.fBa())
u=a2*5
while(v.C()){s=w.gU(0).a
if(a1.ala(s)){k=A.kZ(s)
a0.b=0
a0.d=0.25+0.05*Math.sin(u)
s=k.d
a0.iN(new A.J(s.a,s.b-5,s.c),11,B.VA,4,10,0)
a0.d=1}}for(w=a1.CW,v=new C.cJ(w,C.a3(w).k("cJ<1,2>")).gag(0),u=a2*1.6,s=a2*6;v.C();){j=v.d
r=j.a
if(w.ah(0,r))o=a1.ax&&!a1.ay&&a1.a2X(r)
else o=!1
if(!o)continue
i=A.kZ(r).d.a
a0.b=8100+r
switch(j.b){case"tv":break
case"lamp":a0.b=0
a0.d=0.3+0.05*Math.sin(s)
a0.iN(new A.J(i,-19,24),11,O.Vf,4,10,0)
a0.d=1
break
case"toaster":a0.e=0.8
r=C.aq(B.acB,O.Wn,(Math.sin(s)+1)/2)
r.toString
a0.ct(new A.J(i,-38.2,24),new A.J(13,0.3,6),r)
a0.e=0
break
default:for(r=i+9,h=0;h<6;++h)a0.iN(new A.J(r+D.k.G(u+h/6,1)*22,-38+Math.sin(h*2)*2,24),0.6,B.bd5,3,5,0.2)}}for(w=new C.cJ(a3,C.a3(a3).k("cJ<1,2>")).gag(0),v=a2*0.7,u=a2*2.2;w.C();){j=w.d
s=j.b
if(a2>s)continue
k=A.kZ(j.a)
g=D.k.D(s-a2,0,3)
a0.b=0
for(h=0;h<14;++h){f=D.k.G(u+h*0.137,1)
m=h*2.4+t
e=A.a1G(k,new A.J(Math.cos(m)*f*7,Math.sin(m)*f*7-f*f*6,3+f*4))
s=D.k.D(g,0.3,1)
r=C.aq(E.Wy,E.WD,1-f)
r.toString
a0.iN(e,0.35*s,r,3,5,0)}a0.d=0.35
for(h=0;h<5;++h){f=D.k.G(v+h*0.2,1)
s=f*3
a0.iN(A.a1G(k,new A.J(Math.sin(h*1.7)*2,f*10,5+s)),1.2+s,B.bih,3,6,0)}a0.d=1}return d},
vO:function vO(d,e,f){this.a=d
this.b=e
this.c=f},
fep:function fep(d){this.a=d},
feq:function feq(d){this.a=d},
fl5:function fl5(d){this.a=d},
fl6:function fl6(d){this.a=d},
fl7:function fl7(d){this.a=d},
fla:function fla(d){this.a=d},
fl8:function fl8(d){this.a=d},
fl9:function fl9(d){this.a=d},
fB9:function fB9(){},
fBa:function fBa(){},
h58(d,e){var w=new A.cnI(e,d,A.fZB())
w.bvA(4,d,e)
return w},
qR:function qR(d,e){this.a=d
this.b=e},
u0:function u0(d,e,f,g,h,i,j){var _=this
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
cnI:function cnI(d,e,f){var _=this
_.a=d
_.b=e
_.c=$
_.d=f
_.e=3
_.r=_.f=0
_.w=!1},
cnN:function cnN(d){this.a=d},
cnJ:function cnJ(){},
cnL:function cnL(){},
cnM:function cnM(){},
cnK:function cnK(d){this.a=d},
apM:function apM(d,e){this.d=d
this.a=e},
aCU:function aCU(d,e){var _=this
_.e=_.d=$
_.f=d
_.r=$
_.w=e
_.x="inspect"
_.y=0
_.z=null
_.at=_.as=_.Q=!1
_.c=_.a=_.ax=null},
ekw:function ekw(d,e,f){this.a=d
this.b=e
this.c=f},
ekx:function ekx(d){this.a=d},
ekv:function ekv(d){this.a=d},
ekl:function ekl(d){this.a=d},
ekq:function ekq(d){this.a=d},
ekr:function ekr(d){this.a=d},
ekp:function ekp(d){this.a=d},
eks:function eks(d,e){this.a=d
this.b=e},
ekt:function ekt(d){this.a=d},
eku:function eku(d){this.a=d},
eko:function eko(d){this.a=d},
ekn:function ekn(d,e){this.a=d
this.b=e},
ekk:function ekk(d){this.a=d},
eki:function eki(d){this.a=d},
ekj:function ekj(d,e){this.a=d
this.b=e},
ekm:function ekm(d){this.a=d},
ekJ:function ekJ(d,e){this.a=d
this.b=e},
ekF:function ekF(){},
ekE:function ekE(d){this.a=d},
ekG:function ekG(){},
ekH:function ekH(){},
ekI:function ekI(d,e){this.a=d
this.b=e},
ekD:function ekD(d,e){this.a=d
this.b=e},
ekC:function ekC(d){this.a=d},
ekB:function ekB(d){this.a=d},
ekz:function ekz(d,e){this.a=d
this.b=e},
eky:function eky(){},
ekA:function ekA(d,e){this.a=d
this.b=e},
i0w(d){var w,v,u,t,s,r,q,p,o,n,m=d.ghq(0),l=C.a([],x.T)
for(w=d.x,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u){t=w[u]
s=t.b
if(s==="rug")continue
s=B.tS.h(0,s)
s.toString
r=(t.e&1)===1
q=r?s.d:s.c
p=r?s.c:s.d
s=t.c
r=q/2
o=t.d
n=p/2
l.push(new A.Ho(s-r,s+r,o-n,o+n))}switch(d.c){case"kitchen":w=-m/2
l.push(new A.Ho(w,w+28,0,28))
l.push(new A.Ho(10,m/2,0,28))
break
case"bathroom":l.push(B.diL)
l.push(B.diK)
w=-m/2
l.push(new A.Ho(w,w+33,0,75))
break}return l},
boQ(d,e,f,g,h,i,j,k,l,m,n,o){var w=new A.boP(d,i,m,o,n,l,g,f,k,j,e,h,C.a([],x.n))
w.bvP(d,e,f,g,h,i,j,k,l,m,n,o)
return w},
h98(d,e){var w,v,u,t=d.w,s=D.d.bc(t,new A.f7I(e))
if(s<0)s=0
w=t[s]
v=d.ghq(0)
u=d.gkv(0)
t=w.b
switch(w.a){case"left":return new C.bv(new C.z(-v/2+18,D.k.D(t+u/2-40,10,u-10)),1.5707963267948966,s)
case"right":return new C.bv(new C.z(v/2-18,D.k.D(t+u/2-40,10,u-10)),-1.5707963267948966,s)
default:return new C.bv(new C.z(D.o.D(t,-v/2+12,v/2-12),18),0,s)}},
arC:function arC(d,e,f,g,h,i,j,k,l,m,n,o,p,q){var _=this
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
cf_:function cf_(){},
Ho:function Ho(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ckm:function ckm(d,e){var _=this
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
boP:function boP(d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
f7I:function f7I(d){this.a=d},
bP_:function bP_(d,e,f){var _=this
_.a=d
_.b=e
_.c=f
_.d=$},
bP0:function bP0(d,e){this.a=d
this.b=e},
bP1:function bP1(d){this.a=d}},B,F,E,H,A3,U,L,M,A4,A5
J=c[1]
C=c[0]
D=c[2]
V=c[81]
G=c[91]
N=c[102]
O=c[112]
W=c[108]
P=c[109]
Q=c[104]
X=c[103]
I=c[84]
Y=c[97]
Z=c[106]
R=c[105]
S=c[107]
T=c[100]
A_=c[90]
A0=c[98]
A1=c[93]
A2=c[111]
K=c[92]
A=a.updateHolder(c[24],A)
B=c[88]
F=c[26]
E=c[89]
H=c[99]
A3=c[61]
U=c[110]
L=c[96]
M=c[95]
A4=c[94]
A5=c[101]
A.J.prototype={
ad(d,e){return new A.J(this.a+e.a,this.b+e.b,this.c+e.c)},
aC(d,e){return new A.J(this.a-e.a,this.b-e.b,this.c-e.c)},
aF(d,e){return new A.J(this.a*e,this.b*e,this.c*e)},
S3(d){var w=this.b,v=d.c,u=this.c,t=d.b,s=d.a,r=this.a
return new A.J(w*v-u*t,u*s-r*v,r*t-w*s)},
gT3(){var w=this.a,v=this.b,u=this.c
return Math.sqrt(w*w+v*v+u*u)},
gpD(d){var w=this,v=w.gT3()
return v<1e-9?w:new A.J(w.a/v,w.b/v,w.c/v)}}
A.nD.prototype={}
A.d3.prototype={}
A.rZ.prototype={}
A.zk.prototype={}
A.Wv.prototype={}
A.kj.prototype={
Vg(){var w=this.x
if(!(w!==0))if(this.r){w=$.bUL+1
$.bUL=w}else w=0
this.w=w},
bf5(d,e,f,g,h,i,j,k){var w=this,v=i.gpD(0)
w.a.push(new A.nD(C.a([d,e,f,g],x.o),v,h,w.b,j,w.d,k,w.c,w.e,w.f,w.w))},
bf4(d,e,f,g,h,i,j){return this.bf5(d,e,f,g,h,i,0,j)},
cPn(d,e,f,g,h,i,j){return this.bf5(d,e,f,g,h,i,j,!1)},
aGL(d,e,f,g,h,i){var w=this,v=(h==null?e.aC(0,d).S3(f.aC(0,d)):h).gpD(0)
w.a.push(new A.nD(C.a([d,e,f],x.o),v,g,w.b,0,w.d,i,w.c,w.e,w.f,w.w))},
bga(d,e,f,g){return this.aGL(d,e,f,g,null,!0)},
JT(d,e,f,g,h,i,j){var w,v,u,t,s,r,q,p,o,n,m
this.Vg()
w=e.a/2
v=e.b/2
u=e.c/2
t=new A.bUN(this,i,new A.bUO(j,d),new A.bUP(j),f,h)
s=-w
r=-v
q=2*w
p=2*v
t.$4(new A.J(0,0,1),new A.J(s,r,u),new A.J(q,0,0),new A.J(0,p,0))
o=-u
t.$4(new A.J(0,0,-1),new A.J(w,r,o),new A.J(-2*w,0,0),new A.J(0,p,0))
n=-2*u
t.$4(new A.J(1,0,0),new A.J(w,r,u),new A.J(0,0,n),new A.J(0,p,0))
m=2*u
t.$4(new A.J(-1,0,0),new A.J(s,r,o),new A.J(0,0,m),new A.J(0,p,0))
if(g){t.$4(new A.J(0,1,0),new A.J(s,v,u),new A.J(q,0,0),new A.J(0,0,n))
t.$4(new A.J(0,-1,0),new A.J(s,r,o),new A.J(q,0,0),new A.J(0,0,m))}},
iO(d,e,f,g){return this.JT(d,e,f,!0,0,g,0)},
aBd(d,e,f,g,h){return this.JT(d,e,f,g,h,1,0)},
qb(d,e,f,g,h){return this.JT(d,e,f,!0,g,h,0)},
bP(d,e,f,g){return this.JT(d,e,f,!0,g,1,0)},
ct(d,e,f){return this.JT(d,e,f,!0,0,1,0)},
aiT(d,e,f,g,h){return this.JT(d,e,f,!0,g,1,h)},
cBl(d,e,f,g,h,i){return this.JT(d,e,f,g,h,i,0)},
yg(b3,b4,b5,b6,b7,b8,b9,c0,c1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this
b2.Vg()
w=b4.aC(0,b3).gpD(0)
v=w.b
u=w.S3(Math.abs(v)<0.9?B.lT:B.wa).gpD(0)
t=w.S3(u).gpD(0)
s=b9<0?b5:b9
r=new A.bUQ(u,c1,t)
for(q=b2.a,p=b3.a,o=b3.b,n=b3.c,m=b4.a,l=b4.b,k=b4.c,j=x.o,i=w.a*-1,v*=-1,h=w.c*-1,g=0;g<c1;){f=r.$1(g);++g
e=r.$1(g)
d=f.a
a0=e.a
a1=f.b
a2=e.b
a3=f.c
a4=e.c
a5=new A.J(d+a0,a1+a2,a3+a4).gpD(0)
a6=p+d*b5
a7=o+a1*b5
a8=n+a3*b5
a9=p+a0*b5
b0=o+a2*b5
b1=n+a4*b5
a0=m+a0*s
a2=l+a2*s
a4=k+a4*s
d=m+d*s
a1=l+a1*s
a3=k+a3*s
q.push(new A.nD(C.a([new A.J(a6,a7,a8),new A.J(a9,b0,b1),new A.J(a0,a2,a4),new A.J(d,a1,a3)],j),a5,b6,b2.b,c0,b2.d,b8,b2.c,b2.e,b2.f,b2.w))
if(b7){q.push(new A.nD(C.a([b3,new A.J(a9,b0,b1),new A.J(a6,a7,a8)],j),new A.J(i,v,h),b6,b2.b,c0,b2.d,!1,b2.c,b2.e,b2.f,b2.w))
q.push(new A.nD(C.a([b4,new A.J(d,a1,a3),new A.J(a0,a2,a4)],j),w,b6,b2.b,c0,b2.d,!1,b2.c,b2.e,b2.f,b2.w))}}},
e5(d,e,f,g,h,i){return this.yg(d,e,f,g,!0,!1,-1,h,i)},
Kb(d,e,f,g,h,i,j){return this.yg(d,e,f,g,!0,!1,h,i,j)},
a2L(d,e,f,g,h,i,j,k){return this.yg(d,e,f,g,h,i,-1,j,k)},
jF(d,e,f,g,h){return this.yg(d,e,f,g,!0,!1,-1,0,h)},
ba7(d,e,f,g,h,i,j){return this.yg(d,e,f,g,h,!1,-1,i,j)},
ba5(d,e,f,g,h,i){return this.yg(d,e,f,g,h,!1,-1,0,i)},
aCq(d,e,f,g,h,i){return this.yg(d,e,f,g,!0,!1,h,0,i)},
ba6(d,e,f,g,h,i,j){return this.yg(d,e,f,g,h,!1,i,0,j)},
iN(a7,a8,a9,b0,b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6=this
a6.Vg()
w=new A.bUM(b0,b1)
for(v=a6.a,u=a7.a,t=a7.b,s=a7.c,r=x.o,q=0;q<b0;q=p)for(p=q+1,o=0;o<b1;o=m){n=w.$2(q,o)
m=o+1
l=w.$2(q,m)
k=w.$2(p,m)
j=w.$2(p,o)
i=n.a
h=n.b
g=n.c
f=l.a
e=l.b
d=l.c
a0=k.a
a1=k.b
a2=k.c
a3=j.a
a4=j.b
a5=j.c
v.push(new A.nD(C.a([new A.J(u+i*a8,t+h*a8,s+g*a8),new A.J(u+f*a8,t+e*a8,s+d*a8),new A.J(u+a0*a8,t+a1*a8,s+a2*a8),new A.J(u+a3*a8,t+a4*a8,s+a5*a8)],r),new A.J(i+f+a0+a3,h+e+a1+a4,g+d+a2+a5).gpD(0),a9,a6.b,b2,a6.d,!1,a6.c,a6.e,a6.f,a6.w))}},
b8a(d,e,f,g){return this.iN(d,e,f,6,10,g)},
kt(d,e,f,g,h){return this.iN(d,e,f,g,h,0.4)},
a5l(d,e,f,g,h,i,j,k){var w,v,u,t,s
this.Vg()
for(w=0;v=w+1,v<d.length;w=v){u=d[v]
t=d[w]
if(new A.J(u.a-t.a,u.b-t.b,u.c-t.c).gT3()<0.000001)continue
u=d[w]
t=d[v]
if(g)s=w===0||w===d.length-2
else s=!1
this.a2L(u,t,e,f,s,h,j,k)}if(i)for(u=e*0.98,w=1;v=w+1,v<d.length;w=v)this.iN(d[w],u,f,4,k,j)},
jP(d,e,f,g,h,i){return this.a5l(d,e,f,!0,!1,g,h,i)},
aGO(d,e,f,g,h,i,j){return this.a5l(d,e,f,g,!1,h,i,j)},
bgc(d,e,f,g,h){return this.a5l(d,e,f,!0,!1,!0,g,h)},
yU(a4,a5,a6,a7,a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=this
a3.Vg()
a3.ba7(a4,a5,a6,a8,!1,a9,b0)
w=a5.aC(0,a4).gpD(0)
v=w.S3(Math.abs(w.b)<0.9?B.lT:B.wa).gpD(0)
u=new A.bUR(v,b0,w.S3(v).gpD(0))
for(t=[new C.z(a4,w.aF(0,-1)),new C.z(a5,w)],s=a3.a,r=x.o,q=0;q<2;++q){p=t[q]
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
s.push(new A.nD(C.a([new A.J(p+i*a7,m+h*a7,l+j*a7),new A.J(p+f*a6,m+e*a6,l+g*a6),new A.J(p+a0*a6,m+a1*a6,l+d*a6),new A.J(p+a2.a*a7,m+a2.b*a7,l+a2.c*a7)],r),n,a8,a3.b,a9,a3.d,!1,a3.c,a3.e,a3.f,a3.w))}}},
cQM(d,e,f,g,h,i){return this.yU(d,e,f,g,h,i,16)}}
A.Az.prototype={
Gt(d){var w,v,u,t=this
t.z=d
if(!d){w=t.a
v=t.x
u=t.y
t.a=D.k.D(w,v-u,v+u)}t.aZ()},
lR(d,e,f,g){var w=this
w.Q=f
w.as=d
w.at=g
w.ax=e
w.aZ()},
zc(d,e){return this.lR(d,null,e,null)},
bjY(d){return this.lR(null,null,d,null)},
aGz(d){var w,v,u,t=this
if(!(t.Q!=null||t.as!=null||t.at!=null||t.ax!=null))return
w=1-Math.exp(-d*7)
v=t.Q
if(v!=null){u=A.zC(t.d,v,w)
t.d=u
if(u.aC(0,v).gT3()<0.02){v=t.Q
v.toString
t.d=v
t.Q=null}}v=t.as
if(v!=null){u=t.c
u+=(v-u)*w
t.c=u
if(Math.abs(u-v)<0.05){t.c=v
t.as=null}}v=t.at
if(v!=null){u=t.a
u+=(v-u)*w
t.a=u
if(Math.abs(u-v)<0.003){t.a=v
t.at=null}}v=t.ax
if(v!=null){u=t.b
u+=(v-u)*w
t.b=u
if(Math.abs(u-v)<0.003){t.b=v
t.ax=null}}t.aZ()},
cHQ(d,e){var w,v,u,t,s=this,r=e.a,q=e.b,p=Math.min(r,q)*1.15,o=Math.cos(s.a),n=Math.sin(s.a)
q=new A.bFX(s,new A.bFY(Math.cos(s.b),Math.sin(s.b),o,n),(d.a-r/2)/p,-(d.b-q/2)/p)
w=q.$1(0)
r=q.$1(1).b
v=w.b
u=r-v
if(Math.abs(u)<1e-9)return null
t=(0-v)/u
if(t<=0)return null
return q.$1(t)},
ana(d){var w=this
w.as=null
w.c=D.k.D(w.c*d,w.e,w.f)
w.aZ()}}
A.bOS.prototype={
cOD(d){var w,v,u,t
for(w=this.a,v=w.length-1,u=d.a,t=d.b;v>=0;--v)if(w[v].a.gbI().a.contains(u,t))return w[v].b
return 0}}
A.b3y.prototype={
gaGB(d){var w=this.r.a
return w==null?0:w},
a6(d9,e0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3=this,d4=null,d5=e0.a,d6=e0.b,d7=0+d5,d8=0+d6
$.X()
w=C.M()
v=d3.x
u=C.aq(v,D.c,0.06)
u.toString
w.sau(new C.a7(D.b0,D.b6,D.x,C.a([u,v],x.O),d4,d4).aw(0,new C.aa(0,0,d7,d8)))
d9.aY(new C.aa(0,0,d7,d8),w)
t=Math.min(d5,d6)*1.15
s=d5/2
r=d6/2
d6=d3.c
q=new A.clh(Math.cos(d6.a),Math.sin(d6.a),Math.cos(d6.b),Math.sin(d6.b))
p=new A.cli(d3,q)
o=B.fAB.gpD(0)
n=o.ad(0,B.Tn).gpD(0)
m=C.a([],x.G)
d5=d3.w
d6=d3.b
l=d6.a
if(!(d5==null)){d7=C.B(l,x.a1)
D.d.v(d7,d5.$1(d3.gaGB(0)))
l=d7}for(d5=l.length,d7=d3.e,d8=x.k,w=d7!==0,v=o.a,u=o.b,k=o.c,j=x.o,i=d3.f,h=i!=null,g=n.a,f=n.b,e=n.c,d=d3.r,a0=0;a0<l.length;l.length===d5||(0,C.L)(l),++a0){a1=l[a0]
if(h&&!i.$1(a1.w))continue
a2=C.a([],j)
for(a3=a1.a,a4=a3.length,a5=0;a5<a3.length;a3.length===a4||(0,C.L)(a3),++a5)a2.push(p.$1(a3[a5]))
a6=A.hHV(a2)
a2=a6.length
if(a2<3)continue
for(a7=0,a8=B.hb,a5=0;a5<a2;++a5){a9=a6[a5]
a3=a9.c
a7+=a3
a8=new A.J(a8.a+a9.a,a8.b+a9.b,a8.c+a3)}a2=1/a2
b0=q.$1(a1.b)
a3=b0.a
a4=b0.b
b1=b0.c
if(a3*(a8.a*a2)+a4*(a8.b*a2)+b1*(a8.c*a2)>0){if(!a1.r)continue
b0=new A.J(a3*-1,a4*-1,b1*-1)}a2=b0.a
a3=b0.b
a4=b0.c
b2=0.56+0.58*Math.max(0,a2*v+a3*u+a4*k)
b1=a1.e
b3=b1>0?Math.pow(Math.max(0,a2*g+a3*f+a4*e),28)*b1:0
b4=a1.c
if(w&&a1.d===d7){a2=d.a
a2=C.aq(b4,D.b1,0.28+0.14*Math.sin((a2==null?0:a2)*6))
a2.toString
b2+=0.12
b4=a2}a2=255*b3*0.55
b5=D.k.V(D.k.D(b4.gb6(b4)*255*b2+a2,0,255))
b6=D.k.V(D.k.D(b4.gbf()*255*b2+a2,0,255))
b7=D.k.V(D.k.D(b4.gbg(b4)*255*b2+a2,0,255))
a2=$.X()
a3=C.a([],d8)
b8=new C.aQ(a2.r,D.ap,d4,d4,a3)
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
b8.e=null}}a2=new C.bE()
a3.push(a2)
a3=b8.f
if(a3!=null)a2.bx(a3)
a2=b8.e
if(a2!=null)a2.a.delete()
b8.e=null
a2=a1.f
a3=a6.length
a4=a1.d
b1=a4===d7&&w
m.push(new A.BU(a1.y,a1.z,d4,b8,new C.w(a2,(b5&255)/255,(b6&255)/255,(b7&255)/255,D.t),a7/a3-a1.x,a4,a2<0.99,b1))}for(d5=d6.d,d7=d5.length,v=x.c2,u=x.g,a0=0;a0<d5.length;d5.length===d7||(0,C.L)(d5),++a0){c2=d5[a0]
k=C.a([],j)
for(i=c2.a,a5=0;a5<4;++a5)k.push(p.$1(i[a5]))
if(D.d.b8(k,new A.cld()))continue
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
b0=q.$1(new A.J(a2.a-a4,a2.b-b1,a2.c-a3).S3(new A.J(i.a-a4,i.b-b1,i.c-a3)))
if(b0.a*((h.a+g.a+f.a+e.a)*0.25)+b0.b*((h.b+g.b+f.b+e.b)*0.25)+b0.c*d>0)continue
i=C.a([],u)
for(h=k.length,a5=0;a5<k.length;k.length===h||(0,C.L)(k),++a5){a9=k[a5]
g=a9.c
i.push(new C.u(s+a9.a*t/g,r-a9.b*t/g))}k=$.X()
h=C.a([],d8)
g=C.B(i,v)
h.push(new C.QS(g,!0))
m.push(new A.BU(c2.r,0,new A.cle(d3,c2,i),new C.aQ(k.r,D.ap,d4,d4,h),D.K,d-c2.f,c2.b,!1,!1))}d5=x.S
c3=C.V(d5,x.i)
c4=C.V(d5,d5)
for(d5=m.length,a0=0;d7=m.length,a0<d7;m.length===d5||(0,C.L)(m),++a0){c5=m[a0]
d7=c5.b
if(d7!==0){d8=c3.h(0,d7)
if(d8==null)d8=0
c3.n(0,d7,d8+c5.r)
d8=c4.h(0,d7)
c4.n(0,d7,(d8==null?0:d8)+1)}}for(b9=0;b9<d7;++b9)m[b9].c=b9
D.d.b_(m,new A.clf(new A.clg(c3,c4)))
d5=d3.d.a
D.d.a8(d5)
$.X()
c6=C.M()
c6.b=D.V
c7=C.M()
c7.b=D.ae
c7.c=0.8
for(d7=m.length,d8=d9.a,a0=0;a0<m.length;m.length===d7||(0,C.L)(m),++a0){c8=m[a0]
v=c8.d
if(v!=null){v.$1(d9)
v=c8.w
if(v!==0)d5.push(new C.z(c8.e,v))
continue}v=c8.f
c6.r=v.gp(0)
u=c8.e
c9=c6.H()
k=u.e
d8.drawPath((k==null?u.e=new C.cF(u.gbI().a.snapshot()):k).a,c9)
c9.delete()
if(!c8.x){c7.r=v.gp(0)
c9=c7.H()
v=u.e
d8.drawPath((v==null?u.e=new C.cF(u.gbI().a.snapshot()):v).a,c9)
c9.delete()}v=c8.w
if(v!==0)d5.push(new C.z(u,v))}if(w){$.X()
d0=C.M()
d0.b=D.ae
d0.c=1.4
d0.r=D.c.j(0.35+0.25*Math.sin(d3.gaGB(0)*6)).gp(0)
for(d5=m.length,a0=0;a0<m.length;m.length===d5||(0,C.L)(m),++a0){c8=m[a0]
if(c8.y){d7=c8.e
c9=d0.H()
w=d7.e
d8.drawPath((w==null?d7.e=new C.cF(d7.gbI().a.snapshot()):w).a,c9)
c9.delete()}}}for(d5=d6.c,d6=d5.length,a0=0;a0<d5.length;d5.length===d6||(0,C.L)(d5),++a0){d1=d5[a0]
a9=p.$1(d1.a)
d7=a9.c
if(d7<1)continue
w=s+a9.a*t/d7
d7=r-a9.b*t/d7
d2=new C.ko(new C.eo(d1.b,d4,d4,D.cO,d4,d4,d4,d4,d4,d4,new C.F(!0,D.c,d4,d4,d4,d4,11,D.u,d4,d4,d4,d4,d4,d4,d4,d4,d4,d4,d4,d4,d4,d4,d4,d4,d4,d4)),D.a5,D.ch,new C.jn(1),d4,d4,d4,d4,D.cd,d4)
d2.eP()
v=d2.b
u=v.c
v=v.a.c
b5=C.bz(C.cu(new C.u(w,d7),v.gbb(v)+8,u+14),D.iB)
$.X()
u=new C.as(D.X,D.V,D.a_,D.a0,D.Z)
u.r=d1.c.j(0.92).gp(0)
c9=u.H()
d8.drawRRect(C.ep(b5),c9)
c9.delete()
u=new C.as(D.X,D.V,D.a_,D.a0,D.Z)
u.b=D.ae
u.c=1
u.r=D.ad.gp(0)
c9=u.H()
d8.drawRRect(C.ep(b5),c9)
c9.delete()
u=d2.b
v=u.c
u=u.a.c
d2.a6(d9,new C.u(w-v/2,d7-u.gbb(u)/2))}},
aq(d){return!0}}
A.BU.prototype={}
A.ate.prototype={
T(){return new A.boD(new A.bOS(C.a([],x.J)),new C.eL(0,$.aw()),D.bx,D.J,null,null)}}
A.boD.prototype={
a_(){var w,v=this
v.a1()
w=v.qe(new A.eQP(v))
w.iZ(0)
v.d!==$&&C.aO()
v.d=w},
q(){var w=this.d
w===$&&C.c()
w.q()
w=this.f
w.S$=$.aw()
w.P$=0
this.bu6()},
B(d){var w,v,u,t,s,r,q=this,p=null,o=q.a,n=o.z==null,m=n?p:new A.eQJ(q)
n=n?p:new A.eQK(q,d)
w=o.c
v=o.d
u=o.e
t=o.r
s=q.f
o=o.w
r=C.a([v,s],x.U)
r=C.a([C.js(new C.es(C.b3(p,p,p,new A.b3y(w,v,q.e,u,t,s,o,q.a.x,new C.h3(r)),D.f0),p),D.q,p)],x.p)
q.a.toString
return C.oL(D.js,C.aE(D.c5,new C.an(D.W,p,D.b_,D.q,r,p),D.y,!1,p,n,m,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new A.eQL(q),new A.eQM(q),p,p,p,p,p,p,p,new A.eQN(q),p,p,p,!1,D.a8),p,p,p,p,p,p,new A.eQO(q),p)}}
A.aLo.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbu())
w.a7$=null
w.a2()},
aQ(){this.aX()
this.aW()
this.bv()}}
A.mf.prototype={}
A.Xs.prototype={}
A.zI.prototype={}
A.a3p.prototype={}
A.BL.prototype={
gj8(){return this.a==="ok"}}
A.aTl.prototype={}
A.hk.prototype={}
A.Di.prototype={}
A.pu.prototype={}
A.b6y.prototype={}
A.qb.prototype={}
A.aTz.prototype={
gBc(){var w=this.c
return w.c>=2&&A.aff(A.Ac(this.a),w).a==="ok"},
gda(d){return this.c}}
A.a3T.prototype={
gyz(){var w,v,u=this.id,t=u==="ptrap"
if(t||u==="faucet"){w=this.k2
if(w==null)return!1
if(t)if(w.a.a===3){u=w.b
u=new C.bc(u,C.a3(u).k("bc<2>")).d9(0,new A.bOj())&&w.c}else u=!1
else u=A.fmu(w)&&w.f
return u}v=this.k1
return v!=null&&v.c>=2&&A.aff(A.Ac(u),v).a==="ok"},
ga4q(){var w=this.id
if(w.length===0)w=this.glt()
else w=w!=="fan"||this.gyz()
return w},
gT9(){var w=this.id
if(w.length===0)w=this.glt()
else w=w!=="switch"||this.gyz()
return w},
gaF0(){var w=this.id
if(w.length===0)w=this.glt()
else w=!(w==="outlet"||w==="gfci")||this.gyz()
return w},
ghq(d){var w,v=this.c
A:{if("bathroom"===v){w=110
break A}if("kitchen"===v){w=140
break A}if("living"===v){w=180
break A}if("hall"===v){w=300
break A}if("outside"===v){w=1200
break A}w=130
break A}return w},
gkv(d){var w,v=this.c
A:{if("bathroom"===v){w=100
break A}if("kitchen"===v){w=110
break A}if("living"===v){w=120
break A}if("hall"===v){w=90
break A}if("outside"===v){w=900
break A}w=112
break A}return w},
glt(){var w,v=this
if(v.c!=="outside"){w=v.id
if(w.length!==0)w=w==="ptrap"||w==="faucet"||v.gyz()
else{w=v.CW
w=w==null?null:w.gaCz()
if(w==null)w=!v.ay}}else w=!0
return w},
got(){var w=this,v=w.c
if(v==="bathroom"||v==="kitchen"){v=w.id
if(v.length!==0)v=!(v==="ptrap"||v==="faucet")||w.gyz()
else{v=w.cx
v=v==null?null:v.gBc()
if(v==null)v=!w.ch}}else v=!0
return v},
SH(d){var w,v,u,t
for(w=this.x,v=w.length,u=0;u<v;++u){t=w[u]
if(t.a===d)return t}return null},
ey(d,e,f,g){var w=this,v=w.y++,u=f==null?0:f,t=new A.aTl(v,e,u,g==null?w.gkv(0)*0.6:g)
w.x.push(t)
w.aBx(0,t)
return t},
K(d,e){return this.ey(0,e,null,null)},
aBx(d,e){var w,v,u,t=e.b,s=B.tS.h(0,t)
s.toString
w=(e.e&1)===1
v=w?s.d:s.c
u=w?s.c:s.d
s=v/2
e.c=D.k.D(e.c,-this.ghq(0)/2+s+1,this.ghq(0)/2-s-1)
s=u/2
e.d=D.k.D(e.d,s+1,this.gkv(0)-s-1)
if(D.d.t(B.d8T,t)){e.c=D.k.V(e.c/40)*40
e.d=D.k.V(e.d/40)*40}}}
A.aTE.prototype={
buZ(d){var w,v,u
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
u.id=d
u.dx=d==="fan"?"fan":"light"
if(d==="gfci")u.Q=5
u.ch=u.ay=!1
u.Q=v==="bathroom"||v==="kitchen"?5:0
this.as9(u)
u.fr="bangtv"
u.fy=!0
u.go=Math.max(0,D.d.bc(E.jU,new A.bOU()))
this.d=C.a([u],x.A)},
cLx(){var w,v,u,t,s,r
for(w=this.gwg(),v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u){t=w[u]
t.cx=t.CW=null
s=t.ay=!0
r=t.c
t.ch=r!=="bathroom"?r==="kitchen":s
t.db=!1
t.cy.a8(0)
D.d.a8(t.dy)}},
c29(){var w,v,u,t,s,r,q,p=this,o="back",n="bedroom",m="bathroom",l=new C.eT()
l.dI(p.b)
w=new A.bOV()
v=x.D
u=C.a([],v)
for(t=0;t<10;++t)u.push(new A.qb(o,-126+t*28,B.bUF[t]))
s=C.a([A.yx(0,"Bedroom 1",n,0,0,2,2,C.a([w.$1(-48)],v)),A.yx(1,"Bedroom 2",n,2,0,2,2,C.a([w.$1(-48)],v)),A.yx(2,"Bathroom 1",m,4,0,1,2,C.a([B.Z7],v)),A.yx(3,"Bedroom 3",n,5,0,2,2,C.a([w.$1(-48)],v)),A.yx(4,"Bathroom 2",m,7,0,2,2,C.a([B.Z7],v)),A.yx(5,"Hall","hall",0,2,9,1,u),A.yx(6,"Bedroom 4",n,0,3,2,2,C.a([w.$1(-48)],v)),A.yx(7,"Bedroom 5",n,2,3,2,2,C.a([w.$1(-48)],v)),A.yx(8,"Bathroom 3",m,4,3,1,2,C.a([B.Z7],v)),A.yx(9,"Kitchen","kitchen",5,3,2,2,C.a([new A.qb(o,-26,5),B.bx9],v)),A.yx(10,"Living room","living",7,3,2,2,C.a([new A.qb(o,-70,5),B.bx8,B.bx7],v)),A.yx(11,"Garden","outside",0,5,9,1,C.a([B.bx6],v))],x.A)
p.d=s
for(r=0;r<12;++r){q=s[r]
v=q.c
if(v==="outside"){p.as9(q)
continue}q.dx=v==="bedroom"?"fan":"light"
q.ay=l.aj()<0.6
q.ch=(v==="bathroom"||v==="kitchen")&&l.aj()<0.7
D.d.hc(q.z,0,3,l.aB(8))
A:{if("bathroom"===v){v=5+l.aB(2)
break A}if("kitchen"===v){v=5+l.aB(2)
break A}if("bedroom"===v){v=2+l.aB(3)
break A}if("living"===v){v=l.aB(2)
break A}v=l.aB(2)
break A}q.Q=v
q.as=l.aB(4)
p.as9(q)}v=p.d
v[3].ay=!0
v[2].ch=!0},
as9(d){var w,v,u="rug",t="plant",s="lamppost",r="fence",q=d.ghq(0)/2
switch(d.c){case"bedroom":d.ey(0,u,0,d.gkv(0)*0.55)
d.ey(0,"bed",24,46)
d.ey(0,"nightstand",-8,14)
d.ey(0,"wardrobe",-q+12,70).e=1
d.ey(0,"desk",q-14,100).e=3
break
case"living":d.ey(0,u,0,70)
d.ey(0,"sofa",0,100)
d.ey(0,"coffee",0,68)
d.ey(0,"armchair",66,70)
d.ey(0,t,76,14)
d.ey(0,"lamp",-76,14)
break
case"kitchen":d.ey(0,"dining",0,78)
d.ey(0,"chair",-24,78).e=1
d.ey(0,"chair",24,78).e=3
d.ey(0,t,58,20)
break
case"bathroom":d.ey(0,u,0,62).e=0
d.ey(0,t,d.ghq(0)/2-12,d.gkv(0)-12)
break
case"outside":for(w=-320;w<=320;w+=40)d.ey(0,w===0?"roadcross":"road",w,360)
for(v=320;v>=160;v-=40)d.ey(0,"road",0,v).e=1
d.ey(0,"shop",-200,270)
d.ey(0,"hospital",210,275)
d.ey(0,"firestation",-340,275)
d.ey(0,"school",360,275)
d.ey(0,"house2",-140,150)
d.ey(0,"car",-120,360)
d.ey(0,"ambulance",120,360).e=2
d.ey(0,"firetruck",-340,318)
d.ey(0,"tree",-190,60)
d.ey(0,"tree",190,90)
d.ey(0,"pine",250,40)
d.ey(0,"pine",-260,30)
d.ey(0,"bush",-70,20)
d.ey(0,"bush",70,20)
d.ey(0,"flowers",-30,24)
d.ey(0,"flowers",30,24)
d.ey(0,s,40,330)
d.ey(0,s,-80,330)
d.ey(0,"bench",120,190)
d.ey(0,"pond",160,470)
d.ey(0,"dog",60,60)
d.ey(0,"cat",-50,80)
d.ey(0,"cow",-300,520)
d.ey(0,"cow",-240,560)
d.ey(0,"sheep",-180,540)
d.ey(0,"horse",260,560)
d.ey(0,"chicken",-100,500)
d.ey(0,r,-270,480)
d.ey(0,r,-206,480)
d.ey(0,r,-142,480)
break
case"hall":d.ey(0,u,0,46)
d.ey(0,t,-60,76)
d.ey(0,t,60,76)
break}},
gwg(){var w,v,u,t=C.a([],x.A),s=this.d
s===$&&C.c()
w=s.length
v=0
for(;v<s.length;s.length===w||(0,C.L)(s),++v){u=s[v]
if(u.c!=="outside")t.push(u)}return t},
gcRZ(){var w=this.gwg()
return new C.a2(w,new A.bOZ(),C.T(w).k("a2<1>")).gM(0)},
gcOR(){var w=this.d
w===$&&C.c()
return new C.a2(w,new A.bOY(),C.T(w).k("a2<1>")).gM(0)},
gcOQ(){var w=this.d
w===$&&C.c()
return new C.a2(w,new A.bOX(),C.T(w).k("a2<1>")).gM(0)},
gcHI(){var w=this.gwg()
return new C.a2(w,new A.bOW(),C.T(w).k("a2<1>")).gM(0)}}
A.aoQ.prototype={
T(){var w=new C.BB()
$.Cx()
w.iZ(0)
return new A.aCe(w,C.aW(x.N),new C.cp(null,x.e))}}
A.aCe.prototype={
gbeW(){var w=this.d
w===$&&C.c()
w=w.gwg()
return new C.a2(w,new A.e0N(),C.T(w).k("a2<1>")).gM(0)},
a_(){var w,v,u,t,s=this
s.a1()
w=s.a.r
if(w.length!==0)w=s.d=A.hqr(w)
else{w=$.aTF==null
if(w){w=D.o.G(Date.now(),1e5)
$.aTF=A.fZA(w)}w=$.aTF
w.toString
w=s.d=w}v=s.a
w.c=v.d||w.c
u=new A.Az(-0.05,0.1,120,B.fvs,$.aw())
u.f=560
s.e=u
if(v.f.length!==0){w=w.gwg()
t=new C.a2(w,new A.e0L(s),C.T(w).k("a2<1>"))
if(!t.gam(0)){w=s.d
w===$&&C.c()
w.e=t.gL(0).a}}w=s.d
w===$&&C.c()
v=w.d
v===$&&C.c()
s.f=A.hcN(v[w.e],!1,"look",s.gbeW(),0)
s.ava(!0)
$.aT.x1$.push(new A.e0M(s))},
q(){var w=this.ch
if(w!=null)w.a9(0)
w=this.dx
if(w!=null)w.a9(0)
this.a2()},
bXv(){var w,v=this.d
v===$&&C.c()
w=v.a
A:{if("switch"===w){v="The ceiling light is already in. Tap the red switch on the wall and wire it. Then flip it to see the light work."
break A}if("outlet"===w){v="Tap the red outlet on the wall and wire it. Then plug in a lamp or a TV to test it."
break A}if("gfci"===w){v="Tap the red GFCI outlet and wire it. Then plug in a hair dryer to test it."
break A}if("fan"===w){v="Tap the ceiling fan and wire it. Then flip the wall switch and watch it spin."
break A}if("ptrap"===w){v="The sink has no drain yet. Tap the sink and build the drain under it."
break A}v="The faucet is not connected yet. Tap the sink and connect the hoses."
break A}return v},
ava(d){var w,v,u,t,s,r,q=this,p=q.d
p===$&&C.c()
w=p.d
w===$&&C.c()
v=w[p.e]
u=-0.05
if(q.z){t=new A.J(0,48,v.gkv(0)*0.55)
p=q.e
p===$&&C.c()
p.e=2
p.f=12
p.r=-1.2
p.w=1.2
p.Gt(!0)
s=3
r=0}else if(v.c==="outside"){p=q.e
p===$&&C.c()
p.e=30
p.f=1100
p.r=0.03
p.w=1.35
p.Gt(!0)
t=B.fvr
s=540
r=0.35
u=-0.25}else if(q.x){t=new A.J(0,40,v.gkv(0)*0.3)
s=Math.max(v.ghq(0)*0.8,v.gkv(0)*0.9)+10
p=q.e
p===$&&C.c()
p.e=6
p.f=s*1.6
p.r=0.03
p.w=1.35
p.y=0.5
p.Gt(!1)
r=0.1}else{t=new A.J(0,30,v.gkv(0)*0.45)
s=(v.ghq(0)*1.2>v.gkv(0)*1.4?v.ghq(0)*1.2:v.gkv(0)*1.4)+30
p=q.e
p===$&&C.c()
p.e=6
p.f=560
p.r=0.1
p.w=1.35
p.y=0.9
p.Gt(!1)
r=0.5
u=-0.12}p=q.e
if(d){p===$&&C.c()
p.d=t
p.c=s
p.a=u
p.b=r}else{p===$&&C.c()
p.lR(s,r,t,u)}},
OI(){return this.ava(!1)},
bJ7(d,e){var w,v,u,t,s,r,q=this,p=q.e
p===$&&C.c()
w=p.cHQ(d,e)
if(w==null)return
p=q.d
p===$&&C.c()
v=p.d
v===$&&C.c()
u=v[p.e]
if(q.z){t=D.k.D(w.a,-u.ghq(0)/2+10,u.ghq(0)/2-10)
s=D.k.D(w.c,10,u.gkv(0)-10)
q.e.bjY(new A.J(t,48,s))}else{p=q.e
v=w.a
r=w.c
if(u.c==="outside")p.zc(Math.max(60,p.c*0.55),new A.J(v,30,r))
else{v=D.k.D(v,-u.ghq(0)/2,u.ghq(0)/2)
r=D.k.D(r,0,u.gkv(0))
p.zc(Math.max(40,q.e.c*0.6),new A.J(v,36,r))}}A.m4(560,50,0.25,"tri")},
k5(){var w,v,u,t=this,s=t.d
s===$&&C.c()
w=s.d
w===$&&C.c()
s=w[s.e]
w=t.r
v=t.Q
u=t.gbeW()
t.f=A.hcN(s,t.z,w,u,v)},
OK(d,e){var w=this,v=w.ch
if(v!=null)v.a9(0)
w.m(new A.e0g(w,d,e))
w.ch=C.cM(D.ed,new A.e0h(w))},
lx(d){return this.OK(d,!0)},
QF(d){this.m(new A.e0i(this,d))
A.m4(660,50,0.25,"tri")},
avb(d,e){var w=this,v=w.d
v===$&&C.c()
if(d!==v.e){v=v.d
v===$&&C.c()
v=d>=v.length}else v=!0
if(v)return
if(!e&&w.cx!=null)w.a1b()
w.m(new A.e_P(w,d))
w.OI()
A.m4(520,60,0.25,"tri")},
Yv(d){return this.avb(d,!1)},
aUv(d){var w,v,u,t=this
if(d===700){w=t.d
w===$&&C.c()
v=w.d
v===$&&C.c()
return v[w.e].gaF0()}if(d===701){w=t.d
w===$&&C.c()
v=w.d
v===$&&C.c()
w=v[w.e]
return w.id.length!==0||w.glt()}if(d===702){w=t.d
w===$&&C.c()
v=w.d
v===$&&C.c()
return v[w.e].gT9()}if(d===703){w=t.d
w===$&&C.c()
v=w.d
v===$&&C.c()
return v[w.e].ga4q()}if(d>=800&&d<820){u=d-800
w=t.d
w===$&&C.c()
v=w.d
v===$&&C.c()
w=v[w.e].dy
return u<w.length&&w[u].gBc()}if(d===720){w=t.d
w===$&&C.c()
v=w.d
v===$&&C.c()
return v[w.e].gaF0()}if(d===721){w=t.d
w===$&&C.c()
v=w.d
v===$&&C.c()
w=v[w.e]
return w.id.length!==0||w.glt()}if(d>=722&&d<728){u=d-720-2
w=t.d
w===$&&C.c()
v=w.d
v===$&&C.c()
w=v[w.e].dy
return u<w.length&&w[u].gBc()}w=t.d
w===$&&C.c()
v=w.d
v===$&&C.c()
return v[w.e].glt()},
b5b(){var w,v,u=this,t=u.d
t===$&&C.c()
w=t.d
w===$&&C.c()
v=w[t.e].dx==="fan"
u.m(new A.e0n(u))
t=u.d
w=t.d
w===$&&C.c()
if(w[t.e].db)t=v?"The fan spins.":"The light is on."
else t=v?"The fan stops.":"The light is off."
u.lx(t)
t=u.d
w=t.d
w===$&&C.c()
A.m4(w[t.e].db?900:500,60,0.25,"tri")},
c2d(d){var w,v,u,t,s,r,q,p,o,n,m=this
if(d===0)return
if(d>=100&&d<200){if(m.r!=="furniture")return
m.m(new A.e_W(m,d))
w=m.d
w===$&&C.c()
v=w.d
v===$&&C.c()
u=v[w.e].SH(m.Q)
if(u!=null)m.lx(B.tS.h(0,u.b).a+": move it with the arrows.")
return}if(d===300||d===301||d===302){if(m.r!=="walls")return
m.m(new A.e_X(m,d))
m.lx("Wall picked. Choose a paint colour.")
return}if(d>=600&&d<620){t=d-600
w=m.d
w===$&&C.c()
v=w.d
v===$&&C.c()
w=v[w.e].w
if(t>=w.length)return
if(m.r==="doors"){m.m(new A.e_Y(m,t))
w=m.d
v=w.d
v===$&&C.c()
A.m4(v[w.e].at.t(0,t)?700:450,70,0.25,"tri")
return}w=w[t]
m.m(new A.e_Z(m,t))
A.m4(700,70,0.25,"tri")
C.bN(D.mV,new A.e0_(m,t,w.c),x.P)
return}w=d===700
v=!w
s=!0
if(v)if(d!==701){if(d!==702)if(d!==703)if(!(d>=800&&d<820))r=d>=720&&d<728
else r=s
else r=s
else r=s
s=r}if(m.w&&s){q=m.aUv(d)
A.m4(q?1400:500,160,0.25,"tri")
w=q?"The tester glows and beeps: LIVE, 120 volts. Never touch a live wire. Switch the breaker off first.":"The tester stays dark: no power here. It still needs wiring."
m.OK(w,!q)
return}if(!v||d===701){if(m.aUv(d))m.awV(w?0:1)
else m.aQV()
return}if(d>=800&&d<820){t=d-800
w=m.d
w===$&&C.c()
v=w.d
v===$&&C.c()
w=v[w.e].dy
if(t>=w.length)return
p=w[t]
if(!p.gBc())m.aib(t)
else if(p.a==="switch")m.b5b()
else m.awV(2+t)
return}if(d===702||d===703){w=m.d
w===$&&C.c()
v=w.d
v===$&&C.c()
if(v[w.e].gT9()){w=m.d
v=w.d
v===$&&C.c()
w=!v[w.e].ga4q()}else w=!0
if(w)m.aQV()
else m.b5b()
return}w=d===730
if(w||d===731){v=m.d
if(w){v===$&&C.c()
w=v.d
w===$&&C.c()
r=v.e
o=w[r].fr}else{v===$&&C.c()
w=v.d
w===$&&C.c()
r=v.e
o=w[r].fx}if(o==null)return
v===$&&C.c()
if(!w[r].fy){m.m(new A.e00(m))
w=m.d
v=w.d
v===$&&C.c()
m.lx("The TV is on and playing "+E.jU[v[w.e].go].a+".")}else{n=A.bza(o)
w=m.c
w.toString
F.fIx(w,0,n.a,!0,D.uT,n.b)}return}if(d>=720&&d<728){w=m.d
w===$&&C.c()
v=w.d
v===$&&C.c()
r=d-720
o=v[w.e].cy.h(0,r)
if(o==null)return
n=A.bza(o)
if(n.d>0||n.e){w=m.c
w.toString
F.fIx(w,0,n.a,!0,D.uT,n.b)}else m.awV(r)
return}if(d===710||d===711||d===712||d===713){w=m.d
w===$&&C.c()
v=w.d
v===$&&C.c()
if(!v[w.e].got())if(m.d.a.length!==0)m.DG()
else m.ZK()
else{w=m.f
w===$&&C.c()
t=w.b.h(0,d)
if(t!=null)m.lx(t.a+": "+t.b)}}},
awV(d){var w=this.c
w.toString
return C.bW(E.nA,null,new A.e06(this,d),w,!0,!0,!1,D.lO,!1,!1,x.H)},
cxb(){var w=this.c
w.toString
return C.bW(E.nA,null,new A.e0G(this),w,!0,!0,!0,D.lO,!1,!1,x.H)},
cwD(){var w=this.c
w.toString
return C.bW(E.nA,null,new A.e0t(this),w,!0,!0,!0,D.lO,!1,!1,x.H)},
csr(d){var w,v,u,t=this,s=t.dx
if(s!=null)s.a9(0)
s=t.d
s===$&&C.c()
s=s.gwg()
w=s.length
v=0
for(;v<w;++v){u=s[v]
if(u.fr==null)u.fr="tv100"
if(u.c==="hall")if(u.fx==null)u.fx="tv100"
u.fy=!0}t.z=!1
s=new A.bP_(t.d,d,C.a([],x.m))
s.c2F()
t.cx=s
t.cy=t.CW.gu2()/1000
t.x=!0
t.r="look"
t.w=!1
s=D.d.gL(t.cx.c)
t.fr.a8(0)
t.fx=!1
t.m(new A.e0j(t,s.a))
t.OI()
t.dx=C.dC(D.j5,new A.e0k(t))
t.m(new A.e0l())},
bJ2(d,e){var w,v=d.w[e],u=v.a
A:{if("left"===u){w=new A.J(-d.ghq(0)/2,40,v.b+d.gkv(0)/2-40)
break A}if("right"===u){w=new A.J(d.ghq(0)/2,40,v.b+d.gkv(0)/2-40)
break A}w=new A.J(v.b,40,0)
break A}return w},
cwE(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=i.cx
if(h==null||i.c==null)return
w=i.CW.gu2()/1000-i.cy
v=h.d
v===$&&C.c()
if(w>=v){i.a1b()
i.lx("The tour is over. Press Tour to walk the house again.")
return}if(i.fx)return
u=h.b85(w)
v=i.d
v===$&&C.c()
t=v.e
if(u.a!==t){i.ahC(u)
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
if(D.a.a0(q,"ad")&&i.fr.K(0,q)){s.go=D.o.G(s.go+1,8)
A.m4(1000,50,0.25,"tri")
p=!0}if(p)i.m(i.gOJ())
m=Math.max(s.ghq(0)*0.95,s.gkv(0)*1.15)+20
t=t&&v<s.w.length
q=u.b
if(t){l=i.bJ2(s,v)
k=D.dA.av(0,D.k.D(u.Q,0,1))
j=s.w[v].a
v=i.e
v===$&&C.c()
t=j==="back"?14:0
if(j==="left")n=0.55*k
else n=j==="right"?-0.55*k:-0.03
v.lR(m+(70-m)*k,0.2-0.07*k,new A.J(l.a*0.9+q*0.1,36,l.c+t),n)}else{v=i.e
v===$&&C.c()
v.lR(m,0.24,new A.J(q*0.7,30,u.c*0.6+8),-0.05-q/(s.ghq(0)/2)*0.2)}if(u.x!==i.dy)i.m(new A.e0u(i,u))},
ahC(d){return this.cwC(d)},
cwC(d){var w=0,v=C.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j
var $async$ahC=C.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:l={}
r.fx=!0
l.a=null
t=4
p=$.aT.ak$.x.h(0,r.fy)
p=p==null?null:p.gb7()
q=x.aP.a(p)
p=q
p=p==null?null:p.lP(0.6).cM(0,D.kd)
j=l
w=7
return C.b(x.j.b(p)?p:C.dP(p,x.cG),$async$ahC)
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
case 6:if(r.c==null||r.cx==null){r.fx=!1
w=1
break}p=r.d
p===$&&C.c()
n=p.d
n===$&&C.c()
n[p.e].ax.a8(0)
r.avb(d.a,!0)
p=r.d
n=p.d
n===$&&C.c()
m=n[p.e]
p=d.as
if(p>=0&&p<m.w.length)m.ax.n(0,p,1.25)
r.m(new A.e0o(l,r))
l=r.e
l===$&&C.c()
l.d=new A.J(d.b,36,d.c+4)
l.c=70
l.a=-0.03
l.b=0.15
r.fx=!1
case 1:return C.h(u,v)
case 2:return C.f(s.at(-1),v)}})
return C.i($async$ahC,v)},
a1b(){var w,v,u,t=this,s=t.dx
if(s!=null)s.a9(0)
t.dx=null
s=t.d
s===$&&C.c()
s=s.d
s===$&&C.c()
w=s.length
v=0
for(;v<s.length;s.length===w||(0,C.L)(s),++v){u=s[v]
u.at.a8(0)
u.ax.a8(0)}t.go=null
t.fx=!1
t.m(new A.e0m(t))
t.OI()},
cfM(){var w=this.cx
if(w==null)return null
return w.b85(this.CW.gu2()/1000-this.cy)},
aQV(){var w=this.d
w===$&&C.c()
if(w.a.length!==0)this.DG()
else this.ZT()},
DG(){var w=0,v=C.j(x.H),u,t=this,s,r,q,p
var $async$DG=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:p=t.d
p===$&&C.c()
s=p.d
s===$&&C.c()
r=s[p.e]
if(r.gyz()){t.lx("This lesson is done. Try everything: it all works.")
w=1
break}p=r.id
w=p==="ptrap"||p==="faucet"?3:5
break
case 3:if(r.k2==null)r.k2=A.fOz()
p=t.c
p.toString
w=6
return C.b(C.a5(p,!1).ce(C.ej(new A.e_R(r),!1,null,x.H)),$async$DG)
case 6:w=4
break
case 5:if(r.k1==null)r.k1=new A.Xs(C.V(x.S,x.N))
p=t.c
p.toString
w=7
return C.b(C.a5(p,!1).ce(C.ej(new A.e_S(r),!1,null,x.H)),$async$DG)
case 7:case 4:if(t.c==null){w=1
break}t.m(t.gOJ())
if(r.gyz()){q=r.id
A:{if("switch"===q){p="Done! Tap the switch on the wall: the light comes on."
break A}if("fan"===q){p="Done! Tap the wall switch and the fan spins."
break A}if("outlet"===q||"gfci"===q){p="Done! Tap the outlet and plug something in."
break A}p="Done! The sink works."
break A}t.lx(p)}case 1:return C.h(u,v)}})
return C.i($async$DG,v)},
aib(d){return this.czx(d)},
czx(d){var w=0,v=C.j(x.H),u,t=this,s,r,q
var $async$aib=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:q=t.d
q===$&&C.c()
s=q.d
s===$&&C.c()
r=s[q.e].dy[d]
q=t.c
q.toString
w=3
return C.b(C.a5(q,!1).ce(C.ej(new A.e0H(r),!1,null,x.H)),$async$aib)
case 3:if(t.c==null){w=1
break}t.m(t.gOJ())
if(r.gBc())t.lx("Wired! "+(r.a==="switch"?"Tap it to turn the light on and off.":"Tap it to plug something in."))
case 1:return C.h(u,v)}})
return C.i($async$aib,v)},
ZT(){var w=0,v=C.j(x.H),u,t=this,s,r,q,p
var $async$ZT=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:p=t.d
p===$&&C.c()
s=p.d
s===$&&C.c()
r=s[p.e]
if(r.c==="outside"){w=1
break}s=r.CW
if(s==null){q=A.fOY(A.i3E(r),r.b,!1,p.b*37+r.a)
q.aD7()
if(!r.ay)q.cCk()
r.CW=q
p=q}else p=s
p.b=t.d.c
p=t.c
p.toString
w=3
return C.b(C.a5(p,!1).ce(C.ej(new A.e_U(r),!1,null,x.H)),$async$ZT)
case 3:if(t.c==null){w=1
break}t.m(t.gOJ())
if(r.glt())t.lx(r.b+": the wiring is finished. The light has power.")
case 1:return C.h(u,v)}})
return C.i($async$ZT,v)},
ZK(){var w=0,v=C.j(x.H),u,t=this,s,r,q,p
var $async$ZK=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:p=t.d
p===$&&C.c()
s=p.d
s===$&&C.c()
r=s[p.e]
s=r.c
if(!(s==="bathroom"||s==="kitchen")){t.OK("This room has no plumbing. Bathrooms and the kitchen do.",!1)
w=1
break}q=r.cx
if(q==null){s=s==="kitchen"?"kitchen":"bathroom"
s=r.cx=A.fOy(!1,p.b*41+r.a,s)
p=s}else p=q
if(!r.ch&&!p.gaiH())r.cx.cCj()
r.cx.b=t.d.c
p=t.c
p.toString
w=3
return C.b(C.a5(p,!1).ce(C.ej(new A.e_T(r),!1,null,x.H)),$async$ZK)
case 3:if(t.c==null){w=1
break}t.m(t.gOJ())
if(r.got())t.lx(r.b+": the plumbing is finished and nothing leaks.")
case 1:return C.h(u,v)}})
return C.i($async$ZK,v)},
bx2(){var w=this.c
w.toString
return C.bW(E.nA,null,new A.e_a(this),w,!0,!0,!1,D.lO,!1,!1,x.H)},
bwG(d){var w,v,u,t,s,r,q,p,o=this,n=o.d
n===$&&C.c()
w=n.d
w===$&&C.c()
v=w[n.e]
n=v.c
if(n==="outside"||n==="hall"){o.OK("Add devices in a room, not in the hall or the garden.",!1)
return}n=v.dy
if(n.length>=4){o.OK("This room already has four added devices.",!1)
return}w=C.a([-v.ghq(0)/4,v.ghq(0)/4],x.n)
for(u=v.w,t=D.d.gag(u),s=new C.fx(t,new A.e_4());s.C();)w.push(t.gU(0).b)
for(u=D.d.gag(u),t=new C.fx(u,new A.e_5());t.C();)w.push(u.gU(0).b+24)
for(u=n.length,r=0;r<n.length;n.length===u||(0,C.L)(n),++r)w.push(n[r].b)
p=-v.ghq(0)/2+14
for(;;){if(!(p<=v.ghq(0)/2-14)){q=null
break}if(D.d.d9(w,new A.e_6(p))){q=p
break}p+=6}if(q==null){o.OK("There is no free place left on the back wall.",!1)
return}o.m(new A.e_7(o,v,d,q))
o.lx("Added. It is red because it is not wired: tap it to wire it.")},
acp(d,e){var w,v,u=this,t=u.d
t===$&&C.c()
w=t.d
w===$&&C.c()
v=w[t.e].SH(u.Q)
if(v==null)return
u.m(new A.e_Q(u,v,d,e))},
c2h(){var w,v,u=this,t=u.d
t===$&&C.c()
w=t.d
w===$&&C.c()
v=w[t.e].SH(u.Q)
if(v==null)return
u.m(new A.e0v(u,v))},
ciT(){var w,v,u=this,t=u.d
t===$&&C.c()
w=t.d
w===$&&C.c()
v=w[t.e].SH(u.Q)
if(v==null)return
u.m(new A.e0d(u,v))
u.lx(B.tS.h(0,v.b).a+": "+B.cIS[v.f]+".")},
c2f(d){var w,v,u=this,t=u.d
t===$&&C.c()
w=t.d
w===$&&C.c()
v=w[t.e].SH(u.Q)
if(v==null)return
u.m(new A.e0e(u,v))},
bwJ(d){var w,v=this,u=v.d
u===$&&C.c()
w=u.d
w===$&&C.c()
v.m(new A.e_8(v,w[u.e].K(0,d)))
v.lx(B.tS.h(0,d).a+" added. Move it with the arrows.")},
OH(d,e,f,g,h){var w=null,v=e?g.j(0.25):D.c.j(0.07),u=C.m(14),t=e?g:D.b5
t=C.I(t,D.r,e?2:1)
v=C.a([C.p(w,C.d(d,w,w,w,w,w,w,C.l(w,w,e?g:D.c,w,w,w,w,w,w,w,w,12.5,w,w,D.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),D.f,w,w,new C.o(v,w,t,u,w,w,D.n),w,w,w,w,A_.Xv,w,w,w)],x.p)
if(h)v.push(C.ao(w,C.p(w,w,D.f,w,w,new C.o(D.aB,w,C.I(B.Kq,D.r,2),w,w,w,D.a6),w,11,w,w,w,w,w,11),w,w,w,-2,-3,w))
return new C.C(D.fx,C.aE(w,new C.an(D.W,w,D.aa,D.f,v,w),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,!1,D.a8),w)},
qZ(d,e,f,g){return this.OH(d,e,f,g,!1)},
Id(d,e,f){return this.OH(d,e,f,D.aI,!1)},
azp(d,e,f,g){var w=null,v=g==null,u=v?34:w,t=v?w:D.l4,s=C.m(10),r=e?D.c:D.b5
r=C.I(r,D.r,e?3:1)
if(v)v=w
else v=C.av(C.d(g,w,w,w,w,w,w,C.l(w,w,d.j3()>0.5?D.w:D.c,w,w,w,w,w,w,w,w,12,w,w,D.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,w,w)
return new C.C(E.tj,C.aE(w,C.p(w,v,D.f,w,w,new C.o(d,w,r,s,w,w,D.n),w,34,w,w,t,w,w,u),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,!1,D.a8),w)},
ctB(d,e,f){return this.azp(d,e,f,null)},
GS(d,e){var w=null,v=D.c.j(0.1),u=C.m(10),t=C.I(D.b5,D.r,1)
return new C.C(D.fx,C.aE(w,C.p(w,C.W(d,D.c,w,w,w,20),D.f,w,w,new C.o(v,w,t,u,w,w,D.n),w,36,w,w,w,w,w,40),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,e,w,w,w,w,w,w,!1,D.a8),w)},
bF2(){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null
if(k.cx!=null){w=k.dy
return C.A(C.a([C.D(C.d("\ud83c\udfac "+(w.length===0?"Walking in":w),j,1,D.a2,j,j,j,B.eXk,j,j,j),1),k.qZ("\u23f9 Stop the tour",!0,k.gcsK(),D.cr)],x.p),D.m,j,D.e,D.j,0,j,j)}switch(k.r){case"furniture":w=k.d
w===$&&C.c()
v=w.d
v===$&&C.c()
u=v[w.e].SH(k.Q)
w=x.p
v=C.a([],w)
if(u!=null)v.push(new C.a6(j,40,C.cB(C.a([k.GS(D.py,new A.e_E(k)),k.GS(D.j9,new A.e_F(k)),k.GS(D.vf,new A.e_G(k)),k.GS(D.tw,new A.e_H(k)),k.GS(G.akS,k.gc2g()),k.GS(D.n1,k.gciS()),k.GS(D.e4,k.gc2e(k))],w),j,j,j,j,D.aQ,!1),j))
else v.push(B.aTV)
w=C.a([],w)
for(t=B.tS.gdL(B.tS),t=t.gag(t);t.C();){s=t.gU(t)
r=D.d.t(B.cP0,s.a)
q=k.d
p=q.d
p===$&&C.c()
if(r===(p[q.e].c==="outside")){r=s.b
w.push(k.qZ(r.b+" "+r.a,!1,new A.e_I(k,s),D.b1))}}v.push(new C.a6(j,40,C.cB(w,j,j,j,j,D.aQ,!1),j))
return C.v(v,D.m,j,D.e,D.Q,0,D.p)
case"walls":w=k.as
v=w<0
w=v?"All walls":"Wall "+(w+1)+": tap Look to reset"
v=C.a([k.Id(w,v,new A.e_J(k))],x.p)
for(o=0;o<8;++o)v.push(k.azp(B.av8[o],!1,new A.e_K(k,o),B.dbB[o]))
return new C.a6(j,40,C.cB(v,j,j,j,j,D.aQ,!1),j)
case"floor":w=C.a([],x.p)
for(o=0;o<7;++o){v=B.auW[o]
t=k.d
t===$&&C.c()
s=t.d
s===$&&C.c()
w.push(k.azp(v.b,s[t.e].Q===o,new A.e_L(k,o),v.a))}return new C.a6(j,40,C.cB(w,j,j,j,j,D.aQ,!1),j)
case"ceiling":w=k.d
w===$&&C.c()
v=w.d
v===$&&C.c()
w=v[w.e].dx==="fan"?"\ud83c\udf00 Fan (tap for light)":"\ud83d\udca1 Light (tap for fan)"
w=C.a([k.qZ(w,!1,new A.e_M(k),D.b7)],x.p)
for(o=0;o<4;++o){v=B.atN[o]
t=k.d
s=t.d
s===$&&C.c()
w.push(k.ctB(v,s[t.e].as===o,new A.e_N(k,o)))}return new C.a6(j,40,C.cB(w,j,j,j,j,D.aQ,!1),j)
default:n=C.aW(x.S)
w=C.a([],x.p)
v=k.d
v===$&&C.c()
t=v.d
t===$&&C.c()
v=t[v.e].w
t=v.length
m=0
for(;m<v.length;v.length===t||(0,C.L)(v),++m){l=v[m]
s=l.c
if(n.K(0,s)){r=k.d.d
r===$&&C.c()
s=r[s]
r=s.glt()&&s.got()
w.push(k.OH("\ud83d\udeaa "+s.b,!1,new A.e_O(k,l),D.b1,!r))}}return new C.a6(j,40,C.cB(w,j,j,j,j,D.aQ,!1),j)}},
B(d){var w=this,v=null,u=C.a([C.bY(0,new C.es(w.bB2(d),w.fy),0,0,0)],x.p)
if(w.go!=null)u.push(C.bY(0,C.e_(C.mv(new A.e0J(w),v,D.dA,D.i7,new C.cw(w.id,x.ba),new A.e0K(w),new C.bm(1,0,x.be),x.i),!0,v),0,0,0))
return new C.an(D.W,v,D.aa,D.q,u,v)},
bB2(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.d
h===$&&C.c()
w=h.d
w===$&&C.c()
v=w[h.e]
h=C.aI(d,i,x.w).w
w=j.d
if(w.a.length!==0)w=v.gyz()?"Done \u2713":"To do"
else w=""+w.gcHI()+"/"+j.d.gwg().length+" done"
u=j.f
u===$&&C.c()
t=j.e
t===$&&C.c()
s=j.at
r=j.ax
q=j.ay
p=j.y&&j.d.a.length===0?104:10
o=x.p
n=C.a([],o)
if(j.y&&j.d.a.length===0)n.push(new A.bgB(j.d,j.gc2a(),Math.min(138,h.a.a*0.36),i))
h=A.WP(t,new A.e_h(j),q,s,i,i,new A.e_i(),r,p,j.gbJ6(),new A.e_j(j),j.gc2c(),u,n,i)
u=j.x?"\ud83d\udd2d See the whole room":"\ud83c\udfe0 Be inside"
u=C.a([j.qZ(u,!1,new A.e_r(j),D.b1)],o)
if(j.d.a.length===0){t=j.cx!=null
s=t?"\u23f9 Stop tour":"\ud83c\udfac Tour"
u.push(j.qZ(s,t,new A.e_s(j),D.bZ))}t=j.z
s=t?"\ud83d\udeb6 Stop looking round":"\ud83d\udd04 Look all round (360)"
u.push(j.qZ(s,t,new A.e_t(j),D.cv))
u.push(j.qZ("\ud83d\udcfa TV",!1,j.gcxa(),D.ct))
t=j.d
if(t.a.length===0){s=t.d
s===$&&C.c()
t=s[t.e].c!=="outside"?"\ud83c\udf33 Go outside":"\ud83c\udfe0 Go inside"
u.push(j.qZ(t,!1,new A.e_u(j),D.bc))}if(j.d.a.length===0)u.push(j.qZ("\u2795 Add",!1,j.gbx1(),D.bc))
u.push(j.qZ("\ud83d\udd26 Tester",j.w,new A.e_v(j),D.cv))
if(j.d.a.length!==0)u.push(j.OH("\ud83d\udd27 Do the lesson",!1,j.gc2b(),D.cp,!v.gyz()))
else{t=j.OH("\u26a1 Wiring",!1,j.gcb2(),D.cp,!v.glt())
s=v.c
s=(s==="bathroom"||s==="kitchen")&&!v.got()
D.d.v(u,C.a([t,j.OH("\ud83d\udeb0 Plumbing",!1,j.gcas(),D.ct,s),j.qZ("\ud83d\uddfa Map",j.y,new A.e_w(j),D.by)],o))}u=C.cB(u,i,i,i,i,D.aQ,!1)
t=j.Id("\ud83d\udc41 Look",j.r==="look",new A.e_x(j))
s=j.Id("\ud83d\udecb Furniture",j.r==="furniture",new A.e_y(j))
r=j.Id("\ud83e\uddf1 Walls",j.r==="walls",new A.e_k(j))
q=j.Id("\ud83d\udfeb Floor",j.r==="floor",new A.e_l(j))
p=j.Id("\u2b1c Ceiling",j.r==="ceiling",new A.e_m(j))
n=j.Id("\ud83d\udeaa Doors",j.r==="doors",new A.e_n(j))
m=j.qZ("\ud83d\udcd8 Learn",!1,new A.e_o(d),D.by)
l=j.d.c
k=l?"\ud83d\udd25 Practice":"\ud83c\udf93 Learn mode"
return new A.AT(v.b,D.aI,h,C.v(C.a([new C.a6(i,40,u,i),D.at,new C.a6(i,40,C.cB(C.a([t,s,r,q,p,n,m,j.qZ(k,l,new A.e_p(j),D.cr)],o),i,i,i,i,D.aQ,!1),i),D.at,j.bF2()],o),D.F,i,D.e,D.Q,0,D.p),new A.e_q(j,d),w,i)},
ch1(d){return C.bW(E.nA,null,new A.e0c(this),d,!0,!0,!0,D.lO,!1,!1,x.H)}}
A.bgB.prototype={
B(d){var w=null,v=D.k.D((this.e-10)/126,0.5,1),u=D.w.j(0.6),t=C.m(12),s=C.I(D.b5,D.r,1)
return C.p(w,new C.a6(126*v,84*v,C.aE(w,C.f1(D.A,C.b3(w,w,w,new A.bg_(this.c,w),B.eHm),D.f,D.wu),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new A.dlH(this,v),w,w,w,w,!1,D.a8),w),D.f,w,w,new C.o(u,w,s,t,w,w,D.n),w,w,w,w,D.lC,w,w,w)}}
A.bg_.prototype={
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
if(t.glt()&&t.got())m=D.bn
else m=!t.glt()?D.aB:D.d7
l=C.bz(o,D.hz)
$.X()
k=new C.as(D.X,D.V,D.a_,D.a0,D.Z)
k.r=m.j(t.glt()&&t.got()?0.35:0.5).gp(0)
j=k.H()
v.drawRRect(C.ep(l),j)
j.delete()
l=C.bz(o,D.hz)
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
break A}h=new C.ko(new C.eo(l,g,g,D.cO,g,g,g,g,g,g,B.eWx),D.a5,D.ch,new C.jn(1),g,g,g,g,D.cd,g)
h.eP()
l=h.b
k=l.c
l=l.a.c
h.a6(d,new C.u(s+(q-s)/2-k/2,r+(p-r)/2-l.gbb(l)/2))}},
aq(d){return!0}}
A.bP2.prototype={}
A.Fc.prototype={}
A.MB.prototype={
T(){return new A.bhx()}}
A.bhx.prototype={
A3(d){var w=this.c
w.toString
return C.a5(w,!1).ce(C.ej(new A.dJn(d),!1,null,x.H))},
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null
$.aqq="tech"
w=C.aH(l,l,l,l,K.nQ,l,l,l,new A.dJq(d),l,l,l,l,l,l)
v=D.aI.j(0.16)
u=C.m(13)
t=x.p
u=C.A(C.a([w,C.p(l,B.b2G,D.f,l,l,new C.o(v,l,C.I(D.aI.j(0.6),D.r,1),u,l,l,D.n),l,40,l,l,l,l,l,40),D.aw,B.bua],t),D.m,l,D.e,D.j,0,l,l)
v=C.A(C.a([C.D(m.aWG("Learn mode",!m.d,D.bc,new A.dJr(m)),1),D.ab,C.D(m.aWG("Practice mode",m.d,D.cr,new A.dJs(m)),1)],t),D.m,l,D.e,D.j,0,l,l)
w=C.m(26)
s=C.I(D.aI,D.r,1.8)
r=x.V
q=C.a([new C.ac(0,D.G,D.aI.j(0.28),D.dk,26)],r)
q=C.aE(l,C.p(l,C.v(C.a([C.p(l,B.b35,D.f,l,l,new C.o(D.aI.j(0.2),l,C.I(D.aI,D.r,2),l,C.a([new C.ac(0,D.G,D.aI.j(0.5),D.J,22)],r),l,D.a6),l,78,l,l,l,l,l,78),D.ac,B.fdW,D.at,B.fkj,D.ay,C.p(l,B.fdS,D.f,l,l,new C.o(D.aI,l,l,C.m(20),l,l,D.n),l,l,l,l,A1.agQ,l,l,l)],t),D.m,l,D.e,D.j,0,D.p),D.f,l,l,new C.o(l,l,s,w,q,B.bRk,D.n),l,l,l,l,D.v5,l,l,l),D.y,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,new A.dJu(m),l,l,l,l,l,l,!1,D.a8)
w=m.aWF("JOBS")
s=m.aWE(C.a([m.DH("\ud83d\udd0c","Wire a room","Go to a room that needs wiring",D.bn,new A.dJv(m)),m.DH("\ud83d\udebd","Plumb a room","Go to a bathroom or kitchen",D.aW,new A.dJw(m)),m.DH("\ud83d\udd27","Fix a house","Walk the house and fix every sign",D.aI,new A.dJx(m)),m.DH("\ud83e\uddf1","Build a room","Frame, drywall, then wire",D.bc,new A.dJy(m)),m.DH("\u26a1","Wiring bench","Just the wiring, one room",D.cp,new A.dJz(m)),m.DH("\ud83d\udcde","Service calls","A customer rings with problems",D.j_,new A.dJA(m))],t))
r=m.aWF("LESSONS")
p=C.a([],t)
for(o=0;o<7;++o){n=B.cPt[o]
p.push(m.DH(n.b,n.c,n.d,n.e,new A.dJB(m,n)))}p.push(m.DH("\ud83d\udcd8","Learn the trades","Short cards for beginners",D.by,new A.dJt(m)))
return C.cb(l,D.bX,C.bn(!0,C.cB(C.a([u,D.ac,v,D.ac,q,w,s,r,m.aWE(p)],t),l,B.ag8,l,l,D.ai,!1),!0,!1,D.ag,!0,!0),l,!1,!1,l,l)},
aWF(d){var w=null
return new C.C(B.bsf,C.A(C.a([C.D(C.p(w,w,D.f,D.aI.j(0.35),w,w,w,1,w,w,w,w,w,w),1),new C.C(D.fQ,C.d(d,w,w,w,w,w,w,B.eTg,w,w,w),w),C.D(C.p(w,w,D.f,D.aI.j(0.35),w,w,w,1,w,w,w,w,w,w),1)],x.p),D.m,w,D.e,D.j,0,w,w),w)},
aWG(d,e,f,g){var w=null,v=e?f.j(0.2):D.c.j(0.06),u=C.m(18),t=e?f:D.b5
t=C.I(t,D.r,e?2:1)
return C.aE(w,C.p(w,C.av(C.d(d,w,w,w,w,w,w,C.l(w,w,e?f:D.ad,w,w,w,w,w,w,w,w,13,w,w,D.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,w,w),D.f,w,w,new C.o(v,w,t,u,w,w,D.n),w,w,w,w,D.eZ,w,w,w),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,!1,D.a8)},
aWE(d){var w,v,u,t,s=null,r=x.p,q=C.a([],r)
for(w=0;v=d.length,w<v;w+=2){u=d[w]
t=w+1
v=t<v?d[t]:D.bH
q.push(new C.C(D.cG,new C.Dw(new C.co(D.aQ,D.e,D.j,D.aj,s,D.p,s,0,C.a([new C.bF(1,D.bj,u,s),D.ab,new C.bF(1,D.bj,v,s)],r),s),s),s))}return C.v(q,D.m,s,D.e,D.j,0,D.p)},
DH(d,e,f,g,h){var w=null,v=C.a([g.j(0.2),B.Kq],x.O),u=C.m(22),t=C.I(g.j(0.55),D.r,1.4),s=x.V,r=C.a([new C.ac(0,D.G,g.j(0.18),D.cx,16)],s),q=g.j(0.22),p=C.I(g.j(0.7),D.r,1.5)
s=C.a([new C.ac(0,D.G,g.j(0.35),D.J,14)],s)
return C.aE(w,C.p(w,C.v(C.a([C.p(w,C.av(C.d(d,w,w,w,w,w,w,D.a6Z,w,w,w),w,w,w),D.f,w,w,new C.o(q,w,p,w,s,w,D.a6),w,56,w,w,w,w,w,56),D.S,C.d(e,w,w,w,w,w,w,D.ji,D.L,w,w),D.cZ,C.d(f,w,2,D.a2,w,w,w,B.f3f,D.L,w,w)],x.p),D.m,w,D.ba,D.j,0,D.p),D.f,w,w,new C.o(w,w,t,u,r,new C.a7(D.b0,D.b6,D.x,v,w,w),D.n),w,w,w,w,B.bnv,w,w,w),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,h,w,w,w,w,w,w,!1,D.a8)}}
A.b4Q.prototype={
B(d){var w,v,u,t,s,r=this,q=null,p=x.p,o=C.a([C.bY(0,new A.ate(r.c,r.d,r.r,r.e,r.x,r.w,E.W2,r.ch,q),0,0,0)],p),n=r.as,m=n!=null
if(m)o.push(C.ao(q,C.v(n,D.F,q,D.e,D.j,0,D.p),q,q,8,q,8,q))
n=C.a([],p)
w=r.at
if(w!=null)D.d.v(n,w)
n.push(r.avc(D.hw,"Zoom in",new A.coW(r)))
n.push(r.avc(D.xW,"Zoom out",new A.coX(r)))
w=r.f
n.push(r.avc(B.bzS,"Back to the whole view",w))
o.push(C.ao(q,C.v(n,D.m,q,D.e,D.j,0,D.p),q,q,q,8,8,q))
n=r.y
if(n!=null){v=r.ay
if(v==null)m=m?60:10
else m=v
v=r.z
u=(v?D.ec:D.ew).j(0.95)
t=C.m(14)
s=C.I(v?D.bc:D.cr,D.r,1)
o.push(C.ao(q,C.p(q,C.d(n,q,q,q,q,q,q,B.eTQ,q,q,q),D.f,q,q,new C.o(u,q,s,t,q,q,D.n),q,q,q,q,D.or,q,q,q),q,q,10,62,m,q))}n=r.Q
if(n!=null){m=C.m(16)
v=C.I(D.b5,D.r,1)
n=C.a([C.d(n.a,q,q,q,q,q,q,B.f3M,q,q,q),D.cZ,C.d(n.b,q,q,q,q,q,q,E.SR,q,q,q)],p)
u=r.ax
if(u!=null)D.d.v(n,C.a([D.ao,u],p))
o.push(C.ao(8,C.p(q,C.A(C.a([C.D(C.v(n,D.F,q,D.e,D.j,0,D.p),1),C.aH(q,q,q,q,D.G1,q,q,q,w,q,q,q,q,q,D.c7)],p),D.F,q,D.e,D.j,0,q,q),D.f,q,q,new C.o(E.aaQ,q,v,m,q,q,D.n),q,q,q,q,E.afS,q,q,q),q,q,10,10,q,q))}return new C.an(D.W,q,D.aa,D.q,o,q)},
avc(d,e,f){var w=null,v=D.w.j(0.55),u=C.I(D.b5,D.r,1)
return new C.C(D.eO,C.hp(C.aE(w,C.p(w,C.W(d,D.c,w,w,w,20),D.f,w,w,new C.o(v,w,u,w,w,w,D.a6),w,38,w,w,w,w,w,38),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,!1,D.a8),w,e,w,w),w)}}
A.AT.prototype={
B(d){var w=this,v=null,u=C.aH(v,v,v,v,K.nQ,v,v,v,new A.bR7(d),v,v,v,v,v,v),t=w.d,s=C.D(C.d(w.c,v,v,v,v,v,v,C.l(v,v,t,v,v,v,v,v,v,v,v,16,v,v,D.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),1),r=t.j(0.15),q=C.m(16),p=C.I(t.j(0.6),D.r,1),o=x.p
q=C.A(C.a([u,s,C.aE(v,C.p(v,C.A(C.a([C.W(A4.ajj,t,v,v,v,17),D.ea,C.d(w.w,v,v,v,v,v,v,C.l(v,v,t,v,v,v,v,v,v,v,v,12,v,v,D.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],o),D.m,v,D.e,D.Q,0,v,v),D.f,v,v,new C.o(r,v,p,q,v,v,D.n),v,v,v,v,D.tl,v,v,v),D.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,w.r,v,v,v,v,v,v,!1,D.a8)],o),D.m,v,D.e,D.j,0,v,v)
p=C.aI(d,v,x.w).w
return C.cb(v,D.bX,C.bn(!0,C.v(C.a([new C.C(B.bss,q,v),C.p(v,C.cd(w.f,D.q,v,D.y,v,v,v,v,D.ai),D.f,v,new C.aY(0,1/0,0,p.a.b*0.34),B.aZg,v,v,v,v,E.Xt,v,v,1/0),C.D(C.bw(A3.a99,w.e,D.aq),1)],o),D.m,v,D.e,D.j,0,D.p),!0,!1,D.ag,!0,!0),v,!1,!1,v,v)}}
A.GP.prototype={
T(){return new A.ay5()},
gda(d){return this.d}}
A.ay5.prototype={
gFB(){var w,v=this,u=v.d
if(u===$){w=A.Ac(v.a.c)
v.d!==$&&C.bM()
v.d=w
u=w}return u},
geS(d){var w,v=this.e
if(v===$){w=this.a.d
v=this.e=w==null?new A.Xs(C.V(x.S,x.N)):w}return v},
gkQ(){var w=this.f
return w===$?this.f=new A.Az(0.42,0.26,12,B.fyI,$.aw()):w},
goC(){var w=this,v=w.r
return v===$?w.r=A.fSL(w.gFB(),w.geS(0),!0):v},
q(){var w=this.as
if(w!=null)w.a9(0)
this.a2()},
kr(d,e){var w=this,v=w.as
if(v!=null)v.a9(0)
w.m(new A.d1A(w,d,e))
w.as=C.cM(D.l3,new A.d1B(w))},
oW(d){return this.kr(d,!1)},
xn(){var w=this.geS(0)
w.d=w.d&&w.a&&w.c>=2
this.r=A.fSL(this.gFB(),w,!0)},
nU(){var w=this,v=w.gkQ(),u=w.geS(0).c===0,t=u?2.8:0.4
u=u?12:10
v.lR(u,0.26,new A.J(0,0.1,t),0.42)
w.m(new A.d1t(w))},
c2i(){var w,v,u,t="ground",s=this.geS(0),r=!s.a||s.c>0,q=new A.d1s(this)
switch(this.gFB().a){case"switch":w=q.$1(t)
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
Ig(d){var w,v,u,t,s,r,q,p=this
if(d===0){p.nU()
return}w=p.gFB()
v=w.f
u=C.T(v).k("a2<1>")
t=C.B(new C.a2(v,new A.d1u(d),u),u.k("H.E"))
v=w.a
s=A.hhC(v,d)
if(s!=null){u=p.geS(0)
u=u.c===0&&u.b.iP(0,s)}else u=!1
if(u){w=p.geS(0)
if(w.a){A.m4(180,220,0.25,"square")
p.oW("STOP! The power is still on. Turn the breaker OFF before you touch any wire.")
return}w=w.b
w.bn(w,new A.d1v(s))
p.m(p.gc2l())
p.kr("Wire taken off the screw.",!0)
return}if(t.length!==0&&p.w.length!==0&&p.geS(0).c===0){u=p.geS(0)
r=A.hhx(w,u,p.w,D.d.gL(t),!1)
if(r!=null){++p.Q
A.m4(180,220,0.25,"square")
p.oW(r)}else{A.y4()
p.m(new A.d1w(p,d))
if(A.bBR(w,u))p.kr("Every wire is on the right screw. Now push the device into the box.",!0)
else p.kr(D.d.gL(t).b+": fastened correctly.",!0)
p.gkQ().zc(7,A.bzz(v,d,u))
p.w=""}return}q=p.goC().b.h(0,d)
if(q!=null){p.m(new A.d1x(p,d))
w=p.gkQ()
v=q.c
w.zc(q.d,v)}},
cg_(){var w,v=this
v.m(new A.d1y(v))
w=v.geS(0)
if(w.a){A.m4(120,200,0.25,"saw")
if(w.c===0)v.oW("The breaker is ON. The wires are LIVE at 120 volts. Turn it OFF before you touch anything.")}else{A.m4(600,100,0.25,"tri")
v.kr("Breaker OFF. It is safe to work on the wires. (In real life, always test them with a tester first.)",!0)}},
cuR(){var w,v,u=this
u.m(new A.d1C(u))
A.y4()
w=u.gFB().a
A:{if("switch"===w){v="Power on. Flip the switch and the light turns on: both black wires are on brass screws, so the switch opens and closes the hot wire. The lesson is complete! Mistakes: "+u.Q+"."
break A}if("gfci"===w){v="Power on. Press RESET (it clicks), then TEST: it must shut the outlet off. Wired on LINE, it protects the whole circuit. The lesson is complete! Mistakes: "+u.Q+"."
break A}v="The tester glows: this outlet has 120 volts and is wired correctly. The lesson is complete! Mistakes: "+u.Q+"."
break A}u.kr(v,!0)},
B(a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d=f.c2i(),a0=D.d.bc(d,new A.d1K())
if(a0<0)w="All done"
else{f.gFB()
w="Step "+(a0+1)+"/7"}v=f.gFB()
u=f.geS(0)
t=A.bBR(v,u)&&!u.a
s=f.goC()
r=f.gkQ()
q=f.x
p=f.y
o=f.z
n=q!==0?f.goC().b.h(0,f.x):e
m=(u.a?D.ew:D.ec).j(0.95)
l=C.m(18)
k=u.a
j=C.I(k?D.cr:D.bc,D.r,1.5)
i=C.W(k?D.h4:B.aka,D.c,e,e,e,18)
h=x.p
l=A.WP(r,e,o,q,n,e,e,p,e,e,f.gIe(),f.gIf(),s,C.a([C.aE(e,C.p(e,C.A(C.a([i,D.ea,C.d(k?"Breaker ON (live)":"Breaker OFF (safe)",e,e,e,e,e,e,D.ng,e,e,e)],h),D.m,e,D.e,D.Q,0,e,e),D.f,e,e,new C.o(m,e,j,l,e,e,D.n),e,e,e,e,D.h3,e,e,e),D.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,f.gcfZ(),e,e,e,e,e,e,!1,D.a8)],h),C.a([A.Q9("Hints",D.aI,D.qR,u.e,new A.d1L(f)),D.ao,A.Q9("Labels",D.aW,M.MW,u.f,new A.d1M(f)),D.ao,A.Q9("Brass side",B.bgo,E.akg,!1,new A.d1O(f)),D.ao,A.Q9("Silver side",B.Ks,D.N1,!1,new A.d1P(f)),D.P],h))
j=C.a([],h)
s=u.c
if(s===0){s=C.a([],h)
for(r=D.d.gag(v.e),q=new C.fx(r,new A.d1Q(f));q.C();){p=r.gU(0)
o=p.c
n=new C.aV(14,14)
m=f.w
k=p.a
m=m===k
i=m?D.b1:D.b5
g=new C.az(i,m?3:1,D.r,-1)
i=C.a([],h)
if(u.b.iP(0,k))i.push(new C.C(D.fx,C.W(D.ee,p.d,e,e,e,18),e))
m=p.b
k=p.d
i.push(new C.x(m,e,new C.F(!0,k,e,e,e,e,13,D.u,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e),e,e,e,e,e,e,e,e,e))
s.push(new C.C(D.j7,C.aE(e,C.p(e,new C.co(D.aQ,D.e,D.j,D.m,e,D.p,e,0,i,e),D.f,e,e,new C.o(o,e,new C.bP(g,g,g,g),new C.bp(n,n,n,n),e,e,D.n),e,e,e,e,D.hI,e,e,e),D.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new A.d1R(f,p),e,e,e,e,e,e,!1,D.a8),e))}s=C.c_(D.bD,s,D.bt,6,8)
if(t)u="Push it into the box"
else u=u.a?"Turn the breaker OFF first":"Fasten every wire first"
D.d.v(j,C.a([s,D.P,C.A(C.a([A.y3(u,B.akQ,t?new A.d1S(f):e,D.aI)],h),D.m,e,D.e,D.j,0,e,e)],h))}else if(s===1)D.d.v(j,C.a([C.A(C.a([A.y3("Pull it back out",D.qU,new A.d1T(f),D.ad),D.ab,A.y3("Put the cover plate on",L.vg,new A.d1U(f),D.aI)],h),D.m,e,D.e,D.j,0,e,e)],h))
else{s=A.y3("Start over",D.la,new A.d1V(f),D.ad)
u=u.d
r=u?"Tested \u2713":"Power on and test"
D.d.v(j,C.a([C.A(C.a([s,D.ab,A.y3(r,D.h4,u?e:f.gcuQ(),D.aI)],h),D.m,e,D.e,D.j,0,e,e)],h))}return new A.AT(v.b,D.aI,l,C.v(j,D.m,e,D.e,D.Q,0,D.p),new A.d1N(f,a1,d),w,e)}}
A.a8e.prototype={
T(){return new A.aE0()},
gda(d){return this.c}}
A.aE0.prototype={
geS(d){var w,v=this.d
if(v===$){w=this.a.c
v=this.d=w==null?A.fOz():w}return v},
gkQ(){var w=this.e
return w===$?this.e=new A.Az(-0.3,0.18,40,B.aQM,$.aw()):w},
goC(){var w=this.f
return w===$?this.f=A.bzf(this.geS(0)):w},
q(){var w=this.z
if(w!=null)w.a9(0)
this.a2()},
kr(d,e){var w=this,v=w.z
if(v!=null)v.a9(0)
w.m(new A.eKt(w,d,e))
w.z=C.cM(D.l3,new A.eKu(w))},
oW(d){return this.kr(d,!1)},
nU(){this.gkQ().lR(40,0.18,B.aQM,-0.3)
this.m(new A.eKm(this))},
Ig(d){var w,v,u,t,s,r,q=this,p="square"
if(d===0){q.nU()
return}w=C.E([41,"tail",42,"trap",43,"arm"],x.S,x.N).h(0,d)
if(w!=null&&!q.geS(0).a.t(0,w)){v=q.r
if(v.length===0){if(w==="tail")v="tailpiece"
else v=w==="trap"?"P-trap":"trap arm"
q.oW("Pick the "+v+" from the buttons below first, then tap its glowing outline.")
return}if(v!==w){A.m4(180,220,0.25,p)
u=q.r
A:{if("tail"===u){v="The tailpiece is the straight pipe that hangs from the sink. It goes at the very top, under the drain."
break A}if("trap"===u){v="The P-trap is the U-shaped bend. It goes right under the tailpiece, in the middle."
break A}v="The trap arm is the long straight pipe that goes into the wall. It goes last, on the right."
break A}q.oW(v)
return}if(w==="trap"&&!q.geS(0).a.t(0,"tail")){A.m4(180,220,0.25,p)
q.oW("Start from the top: put the tailpiece on first, then the trap under it.")
return}if(w==="arm"&&!q.geS(0).a.t(0,"trap")){A.m4(180,220,0.25,p)
q.oW("The trap arm joins the trap. Put the P-trap on first.")
return}q.m(new A.eKn(q,w))
A.y4()
q.kr("Piece in place. "+(q.geS(0).a.a===3?"Now tighten the two slip nuts: tap each nut.":"Pick the next piece."),!0)
return}v=d===44
if(v||d===45){t=v?"n1":"n2"
if(q.geS(0).b.h(0,t)!==!0){q.m(new A.eKo(q,t))
A.y4()
q.kr("Slip nut hand tightened. In real life give it a quarter turn more with pliers, but never over-tighten plastic.",!0)
return}}s=q.goC().b.h(0,d)
if(s!=null){q.m(new A.eKp(q,d))
v=q.gkQ()
r=s.c
v.zc(s.d,r)}},
c2n(){var w=this,v=x.bw,u=C.B(new C.a2(C.a(["n1","n2"],x.s),new A.eKq(w),v),v.k("H.E"))
w.m(new A.eKr(w,u))
if(u.length!==0){A.m4(180,220,0.25,"square")
w.oW("It is dripping from a loose slip nut! Tap the nut and tighten it, then run the water again.")}else{A.y4()
w.kr("No leaks. The water flows through the trap and into the wall. The little pool in the U-bend stays there and blocks sewer gas. The lesson is complete!",!0)}},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.geS(0),i=j.a,h=i.t(0,"tail"),g=i.t(0,"trap"),f=i.t(0,"arm"),e=j.b
e=e.h(0,"n1")===!0&&e.h(0,"n2")===!0
w=C.a([h,g,f,e,j.c&&j.d.length===0],x.u)
v=D.d.bc(w,new A.eKy())
u=i.a===3
j=v<0?"All done":"Step "+(v+1)+"/5"
h=l.goC()
g=l.gkQ()
f=l.w
e=l.x
t=l.y
s=f!==0?l.goC().b.h(0,l.w):k
h=A.WP(g,new A.eKz(l),t,f,s,k,k,e,k,k,l.gIe(),l.gIf(),h,k,k)
e=x.p
s=C.a([],e)
for(r=0;r<3;++r){q=B.d9N[r]
g=i.t(0,q)?k:new A.eKA(l,q)
f=i.t(0,q)?D.dq:D.fm
t=new C.aV(14,14)
p=l.r===q
o=p?D.b1:D.b5
n=new C.az(o,p?3:1,D.r,-1)
o=C.a([],e)
if(i.t(0,q))o.push(B.e29)
p=B.dhu.h(0,q)
p.toString
m=i.t(0,q)?D.c_:D.c
o.push(new C.x(p,k,new C.F(!0,m,k,k,k,k,13,D.u,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k),k,k,k,k,k,k,k,k,k))
s.push(new C.C(D.j7,C.aE(k,C.p(k,new C.co(D.aQ,D.e,D.j,D.m,k,D.p,k,0,o,k),D.f,k,k,new C.o(f,k,new C.bP(n,n,n,n),new C.bp(t,t,t,t),k,k,D.n),k,k,k,k,D.hI,k,k,k),D.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,g,k,k,k,k,k,k,!1,D.a8),k))}i=C.c_(D.bD,s,D.bt,6,8)
g=A.y3("Start over",D.la,new A.eKB(l),D.ad)
f=u?"Run the water":"Build the drain first"
return new A.AT("Sink drain (P-trap)",D.ct,h,C.v(C.a([i,D.P,C.A(C.a([g,D.ab,A.y3(f,D.pK,u?l.gc2m():k,D.ct)],e),D.m,k,D.e,D.j,0,k,k)],e),D.m,k,D.e,D.Q,0,D.p),new A.eKC(d,w),j,k)}}
A.a3G.prototype={
T(){return new A.ayk()},
gda(d){return this.c}}
A.ayk.prototype={
geS(d){var w,v=this.d
if(v===$){w=this.a.c
v=this.d=w==null?A.fOz():w}return v},
gkQ(){var w=this.e
return w===$?this.e=new A.Az(-0.25,0.2,36,B.aQv,$.aw()):w},
goC(){var w=this.f
return w===$?this.f=A.aNf(this.geS(0)):w},
q(){var w=this.z
if(w!=null)w.a9(0)
this.a2()},
kr(d,e){var w=this,v=w.z
if(v!=null)v.a9(0)
w.m(new A.d4v(w,d,e))
w.z=C.cM(D.l3,new A.d4w(w))},
oW(d){return this.kr(d,!1)},
nU(){this.gkQ().lR(36,0.2,B.aQv,-0.25)
this.m(new A.d4n(this))},
Ig(d){var w,v,u,t,s,r,q=this
if(d===0){q.nU()
return}w=x.br
v=C.B(new C.a2(B.a2f,new A.d4q(d),w),w.k("H.E"))
if(v.length!==0&&q.r.length!==0){w=q.geS(0)
u=A.i2R(w,q.r,D.d.gL(v))
if(u!=null){A.m4(180,220,0.25,"square")
q.oW(u)}else{A.y4()
q.m(new A.d4r(q,d))
q.gkQ().zc(12,A.afg(d))
q.kr(A.fmu(w)?"All four ends are connected. Now open the valves.":D.d.gL(v).b+": connected.",!0)}return}w=d===68
if(w||d===69){t=w?"hot":"cold"
if(q.geS(0).e.iP(0,t)){q.m(new A.d4s(q,t))
q.kr("Hose taken off.",!0)
return}}s=q.goC().b.h(0,d)
if(s!=null){q.m(new A.d4t(q,d))
w=q.gkQ()
r=s.c
w.zc(s.d,r)}},
c2k(d){var w,v=this
v.m(new A.d4o(v))
w=v.geS(0)
if(!w.f){v.kr("Valves closed.",!0)
return}if(A.fmu(w)){A.y4()
v.kr("Hot and cold flow through the hoses and out of the faucet. No leaks. The lesson is complete!",!0)}else{A.m4(180,220,0.25,"square")
v.oW("Water is spraying out of a valve that has no hose! Close the valves and finish connecting the hoses first.")}},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=n.geS(0),k=l.r||l.e.a!==0,j=l.e,i=j.h(0,61)==="hot"&&j.h(0,63)==="hot",h=j.h(0,62)==="cold"&&j.h(0,64)==="cold",g=C.a([k,i,h,l.f&&A.fmu(l)],x.u),f=D.d.bc(g,new A.d4A())
k=f<0?"All done":"Step "+(f+1)+"/4"
i=n.goC()
h=n.gkQ()
w=n.w
v=n.x
u=n.y
t=w!==0?n.goC().b.h(0,n.w):m
s=x.p
i=A.WP(h,new A.d4B(n),u,w,t,m,m,v,m,m,n.gIe(),n.gIf(),i,m,C.a([A.Q9("Hints",D.aI,D.qR,l.r,new A.d4C(n)),D.P],s))
v=C.a([],s)
for(r=0;r<2;++r){h={}
w=B.d9h[r]
h.a=null
q=w.a
h.a=q
u=new C.aV(14,14)
t=n.r===q
p=t?D.b1:D.b5
o=new C.az(p,t?3:1,D.r,-1)
p=C.a([],s)
t=C.a3(j).k("bc<2>")
if(new C.a2(new C.bc(j,t),new A.d4D(h),t.k("a2<H.E>")).gM(0)===2)p.push(B.e2b)
p.push(new C.x(w.b,m,D.rr,m,m,m,m,m,m,m,m,m))
v.push(new C.C(D.j7,C.aE(m,C.p(m,new C.co(D.aQ,D.e,D.j,D.m,m,D.p,m,0,p,m),D.f,m,m,new C.o(w.c,m,new C.bP(o,o,o,o),new C.bp(u,u,u,u),m,m,D.n),m,m,m,m,D.hI,m,m,m),D.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new A.d4E(h,n),m,m,m,m,m,m,!1,D.a8),m))}j=C.c_(D.bD,v,D.bt,6,8)
h=A.y3("Start over",D.la,new A.d4F(n),D.ad)
l=l.f?"Close the valves":"Open the valves"
return new A.AT("Faucet supply lines",D.cr,i,C.v(C.a([j,D.P,C.A(C.a([h,D.ab,A.y3(l,D.pK,n.gc2j(n),D.cr)],s),D.m,m,D.e,D.j,0,m,m)],s),D.m,m,D.e,D.Q,0,D.p),new A.d4G(d,g),k,m)}}
A.azc.prototype={
T(){return new A.azd(A.fZB())}}
A.azd.prototype={
gkQ(){var w,v=this.e
if(v===$){w=new A.Az(-0.3,0.48,46,B.Tp,$.aw())
w.f=80
this.e=w
v=w}return v},
goC(){var w=this.f
return w===$?this.f=A.af3(this.d):w},
q(){var w=this.z
if(w!=null)w.a9(0)
this.a2()},
kr(d,e){var w=this,v=w.z
if(v!=null)v.a9(0)
w.m(new A.dbz(w,d,e))
w.z=C.cM(D.l3,new A.dbA(w))},
oW(d){return this.kr(d,!1)},
nU(){this.gkQ().lR(46,0.48,B.Tp,-0.3)
this.m(new A.dbt(this))},
Ig(d){var w,v,u,t=this
if(d===0){t.nU()
return}if(d===72){w=t.d
w=w.d.t(0,72)&&w.a>=5}else w=!1
if(w){t.m(new A.dbv(t,d))
A.y4()
t.kr("You flipped the breaker fully OFF and then ON. The living room light is back on. A breaker trips when a circuit is overloaded: find out why before it trips again.",!0)
t.gkQ().zc(22,B.fC9)
return}w=d===87
if(w||d===86){v=t.d
v=v.b&&!v.c&&v.a>=5}else v=!1
if(v){if(t.w==="wrench"&&w){t.m(new A.dbw(t,d))
A.y4()
t.kr("You tightened the slip nut with the wrench. The drip has stopped.",!0)
return}A.m4(180,220,0.25,"square")
t.oW(w?"Hand tightening is not enough here. Pick the wrench first, then tap the nut.":"The water is dripping from the slip nut on the trap. Pick the wrench, then tap the nut.")}u=t.goC().b.h(0,d)
if(u!=null){t.m(new A.dbx(t,d))
w=t.gkQ()
v=u.c
w.zc(u.d,v)}},
ca6(d){var w,v
A:{if("ptrap"===d){w=B.e8_
break A}if("faucet"===d){w=B.bvz
break A}w=new A.GP(d,null,null)
break A}v=this.c
v.toString
C.a5(v,!1).ce(C.ej(new A.dbu(w),!1,null,x.H))},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.d,l=B.d4H[m.a],k=o.r,j=k===0?n:A.hTf(k)
k=m.d.t(0,72)
w=!m.b||m.c
v=C.a([!k,w],x.u)
w=m.a
k=o.goC()
u=o.gkQ()
t=o.r
s=o.x
r=o.y
q=t!==0?o.goC().b.h(0,o.r):n
p=j==null?n:C.aE(n,C.p(n,B.f4X,D.f,n,n,new C.o(D.aI,n,n,C.m(12),n,n,D.n),n,n,n,n,D.tl,n,n,n),D.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new A.dbD(o,j),n,n,n,n,n,n,!1,D.a8)
k=A.WP(u,new A.dbE(o),r,t,q,p,new A.dbF(o),s,n,n,o.gIe(),o.gIf(),k,n,n)
s=l.a
p=x.p
q=C.A(C.a([C.D(C.d(""+(m.a+1)+". "+s,n,n,n,n,n,n,B.eYA,n,n,n),1),A.Q9("Wrench",D.aW,D.qM,o.w==="wrench",new A.dbG(o))],p),D.m,n,D.e,D.j,0,n,n)
t=C.d(l.b,n,3,D.a2,n,n,n,B.eZF,n,n,n)
m=C.kT(D.by,6,s,6,0,new A.dbH(o),m.a)
u=v[0]
s=u?"\u2705 Living room power fixed":"\u26a0 Living room has no power"
s=C.D(C.d(s,n,n,n,n,n,n,C.l(n,n,u?D.ex:D.f9,n,n,n,n,n,n,n,n,11.5,n,n,D.I,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),1)
u=v[1]
r=u?"\u2705 Sink leak fixed":"\u26a0 Kitchen sink drips"
return new A.AT("Build and fix a house",D.by,k,C.v(C.a([q,D.bA,t,m,C.A(C.a([s,C.D(C.d(r,n,n,n,n,n,n,C.l(n,n,u?D.ex:D.f9,n,n,n,n,n,n,n,n,11.5,n,n,D.I,n,n,!0,n,n,n,n,n,n,n,n),D.dK,n,n),1)],p),D.m,n,D.e,D.j,0,n,n)],p),D.m,n,D.e,D.Q,0,D.p),new A.dbI(d,v),"Stage "+(w+1)+"/7",n)}}
A.jx.prototype={}
A.LY.prototype={}
A.a5L.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=x.p,k=C.a([C.A(C.a([C.aH(m,m,m,m,K.nQ,m,m,m,new A.c4O(d),m,m,m,m,m,m),B.fev],l),D.m,m,D.e,D.j,0,m,m)],l)
for(w=0;w<5;++w){v=B.dbk[w]
u=v.c
t=C.a([new C.C(D.ah4,new C.x(v.b+"  "+v.a.toUpperCase(),m,new C.F(!0,u,m,m,m,m,12,D.u,m,1.1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m,m,m,m,m,m,m),m)],l)
for(s=v.d,r=s.length,q=0;q<r;++q){p=s[q]
o=new C.aV(14,14)
n=new C.az(u.j(0.35),1,D.r,-1)
t.push(C.p(m,C.v(C.a([new C.x(p.a,m,D.ji,m,m,m,m,m,m,m,m,m),D.cZ,new C.x(p.b,m,E.SR,m,m,m,m,m,m,m,m,m)],l),D.F,m,D.e,D.j,0,D.p),D.f,m,m,new C.o(B.Kq,m,new C.bP(n,n,n,n),new C.bp(o,o,o,o),m,m,D.n),m,m,m,D.cG,D.bm,m,m,m))}D.d.v(k,t)}return C.cb(m,D.bX,C.bn(!0,C.cB(k,m,B.ag8,m,m,D.ai,!1),!0,!1,D.ag,!0,!0),m,!1,!1,m,m)}}
A.cfC.prototype={}
A.En.prototype={}
A.nb.prototype={}
A.VW.prototype={}
A.cfs.prototype={
bvn(d,e,f){var w,v=this
if(f!=null)w=D.d.iA(B.auz,new A.cfw(f))
else{w=new C.eT()
w.dI(v.a)
w=B.auz[w.aB(2)]}v.c!==$&&C.aO()
v.c=w
w=new C.eT()
w.dI(v.a+7)
w=w.hg()
v.d!==$&&C.aO()
v.d=w},
uO(d,e){var w=this.c
w===$&&C.c()
return D.d.iA(w.c,new A.cfx(e))},
Ol(d){++this.w
return new A.eC(!1,d,!1,"")},
c_U(d){var w=d.d
return new C.K(w,new A.cft(this),C.T(w).k("K<1,n>")).aI(0," and ")},
beH(d,e){var w,v,u,t,s=this,r=s.uO(0,e),q=s.e
if(q.t(0,e))return s.Ol("The "+r.c.toLowerCase()+" is already there.")
if(d!==r.b)return s.Ol(s.b?"That does not go here.":"That does not go here. This spot is for the "+r.c.toLowerCase()+".")
for(w=r.d,v=w.length,u=0;u<v;++u)if(!q.t(0,w[u])){q=s.b?"Not yet: something has to go in first.":"Not yet. "+r.e+" Put in the "+s.c_U(r)+" first.";++s.w
return new A.eC(!1,q,!1,"")}if(r.f&&s.r)return s.Ol(s.b?"The water is still on!":"Stop! The water is still on. Cutting into a pipe with the water on floods the room. Turn the water off at the main valve first (pick the hand and tap the main valve).")
q.K(0,e)
s.y=!1
s.x.a8(0)
if(r.r>0)t=s.b?"":" It is only loose. Pick the wrench and tap it to tighten the joints."
else t=""
return new A.eC(!0,r.c+" fitted."+t,!1,"")},
bfY(d){var w,v,u,t,s=this,r=s.uO(0,d)
if(!s.e.t(0,d))return s.Ol(s.b?"Nothing to tighten yet.":"There is nothing to tighten yet: the "+r.c.toLowerCase()+" is not fitted.")
w=r.r
if(w===0)return s.Ol(s.b?"That does not need tightening.":"The "+r.c.toLowerCase()+" does not have joints to tighten. It just sits in place.")
v=s.f
u=v.h(0,d)
if(u==null)u=0
if(u>=w)return s.Ol("Already tight. More force would crack it.")
t=u+1
v.n(0,d,t)
s.x.a8(0)
s.y=!1
v=r.c
return new A.eC(!0,t>=w?v+": every joint is tight now.":v+": one joint tightened, one to go.",!1,"")},
bdE(d){var w=this.uO(0,d),v=this.f.h(0,d)
if(v==null)v=0
return w.r-v},
aGI(){var w,v,u,t,s,r,q=this
q.r=!q.r
w=q.x
w.a8(0)
if(!q.r)return B.aTA
v=q.c
v===$&&C.c()
u=v.c
t=C.T(u).k("a2<1>")
s=C.B(new C.a2(u,new A.cfy(q),t),t.k("H.E"))
v=v.c
u=C.T(v).k("a2<1>")
r=C.B(new C.a2(v,new A.cfz(q),u),u.k("H.E"))
q.y=!0
if(s.length!==0){w.v(0,new C.K(s,new A.cfA(),C.T(s).k("K<1,n>")));++q.w
return new A.eC(!1,"Water is spraying from an open pipe where the "+D.d.gL(s).c.toLowerCase()+" should be! Turn the water off and finish the job.",!0,"")}if(r.length!==0){w.v(0,new C.K(r,new A.cfB(),C.T(r).k("K<1,n>")));++q.w
return new A.eC(!1,"The "+D.d.gL(r).c.toLowerCase()+" is leaking from a loose joint. Turn the water off, tighten it with the wrench, then test again.",!0,"")}if(!q.gaiH())return B.aTq
return B.aTd},
cCj(){var w,v,u,t,s,r,q,p=this
p.r=!0
p.aGI()
w=p.c
w===$&&C.c()
v=w.c
u=v.length
t=0
for(;t<u;++t){s=v[t]
p.beH(s.b,s.a)}for(w=w.c,v=w.length,t=0;t<v;++t){s=w[t]
for(u=s.r,r=s.a,q=0;q<u;++q)p.bfY(r)}p.aGI()
p.w=0},
gaiH(){var w=this.c
w===$&&C.c()
return D.d.d9(w.c,new A.cfu(this))},
gcAF(){var w=this.c
w===$&&C.c()
return D.d.d9(w.c,new A.cfv(this))},
gBc(){var w=this
return w.gaiH()&&w.gcAF()&&w.r&&w.y&&w.x.a===0}}
A.UW.prototype={
T(){var w,v=new A.Az(-0.25,0.4,175,B.aRe,$.aw())
v.f=200
w=new C.BB()
$.Cx()
w.iZ(0)
return new A.aCJ(v,w)}}
A.aCJ.prototype={
gCi(d){var w=this.d
if(w===$){this.a.toString
w=D.o.G(Date.now(),1e5)
this.d=w}return w},
a_(){var w,v=this
v.a1()
w=v.a.d
if(w==null){w=v.gCi(0)
v.a.toString
w=A.fOy(!1,w,null)}v.e=w
v.r=A.hcP(w,v.x,!w.b)},
q(){var w=this.at
if(w!=null)w.a9(0)
this.a2()},
acq(){var w=this.e
w===$&&C.c()
return this.r=A.hcP(w,this.x,!w.b)},
aWJ(d,e){var w=this,v=w.at
if(v!=null)v.a9(0)
w.m(new A.eem(w,d,e))
w.at=C.cM(D.jp,new A.een(w))},
aWI(){this.f.lR(175,0.4,B.aRe,-0.25)
this.m(new A.eef(this))},
csA(d){var w,v,u=this.e
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
aw6(d){var w=this.e
w===$&&C.c();++w.w
return new A.eC(!1,d,!1,"")},
c2r(d){return this.aWH(d)},
crU(d){var w
A:{if("main"===d){w=9400
break A}w=this.e
w===$&&C.c()
w=w.c
w===$&&C.c()
w=9100+D.d.bc(w.c,new A.eeo(d))
break A}this.aWH(w)},
b3G(){var w,v,u,t,s,r,q,p=this,o=p.x
if(o==="hand")return C.a([B.epO],x.L)
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
q=r.uO(0,s)
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
aWH(d){var w,v,u,t,s,r=this
if(d===0)return
w=r.r
w===$&&C.c()
v=w.b.h(0,d)
if(r.x.length===0){r.m(new A.ee7(r,d))
if(v!=null)r.aWJ(v.a+": "+v.b,!0)
return}u=r.csA(d)
w=r.x
if(w==="hand")if(d===9400){w=r.e
w===$&&C.c()
t=w.aGI()}else{w=r.e
w===$&&C.c()
t=r.aw6(w.b?"Your hand is only for the main water valve.":"Your hand is for the main water valve. Parts are placed by picking them from the tray.")}else if(w==="wrench")if(u==null){w=r.e
w===$&&C.c()
t=r.aw6(w.b?"Nothing to tighten.":"There is nothing to tighten there.")}else{w=r.e
w===$&&C.c()
t=w.bfY(u)}else if(u==null){w=r.e
w===$&&C.c()
t=r.aw6(w.b?"Not there.":"That does not go there. Tap one of the glowing spots.")}else{s=r.e
s===$&&C.c()
t=s.beH(w,u)}w=t.a
if(w)A.y4()
else A.m4(180,220,0.25,"square")
r.m(new A.ee8(r,d))
w=w&&!t.c
r.aWJ(t.b,w)
w=r.e
w===$&&C.c()
if(w.gBc()&&!r.as){r.as=!0
$.aT.x1$.push(new A.ee9(r))}},
c2o(){var w=null,v=this.c
v.toString
C.c9(w,w,!0,w,new A.eee(this),v,w,!0,!0,x.H)},
aVG(){this.m(new A.eek(this))
this.aWI()},
avd(d,e,f){var w,v=null,u=this.x===d,t=u?D.aI.j(0.25):D.c.j(0.07),s=C.m(14),r=u?D.aI:D.b5
r=C.I(r,D.r,u?2:1)
w=C.W(f,u?D.aI:D.ad,v,v,v,19)
return new C.C(E.tj,C.aE(v,C.p(v,C.A(C.a([w,D.bp,C.d(e,v,v,v,v,v,v,C.l(v,v,u?D.aI:D.c,v,v,v,v,v,v,v,v,12.5,v,v,D.I,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),D.m,v,D.e,D.j,0,v,v),D.f,v,v,new C.o(t,v,r,s,v,v,D.n),v,v,v,v,D.fQ,v,v,v),D.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new A.eeb(this,u,d),v,v,v,v,v,v,!1,D.a8),v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.e
h===$&&C.c()
h=h.c
h===$&&C.c()
h=h.c
w=new C.a2(h,new A.eep(j),C.T(h).k("a2<1>")).gM(0)
h=j.e.c
h===$&&C.c()
v=j.r
v===$&&C.c()
u=j.y
t=j.z
s=j.Q
r=u!==0?v.b.h(0,u):i
v=A.WP(j.f,new A.eeq(j),s,u,r,i,new A.eer(),t,i,i,j.gc2p(),j.gc2q(),v,i,i)
t=x.p
r=C.a([],t)
if(j.x.length!==0&&j.b3G().length!==0){u=C.a([],t)
for(s=j.b3G(),q=s.length,p=0;p<s.length;s.length===q||(0,C.L)(s),++p){o={}
n=s[p]
o.a=null
o.a=n.a
m=new C.aV(12,12)
l=new C.az(D.b1,1,D.r,-1)
u.push(C.aE(i,C.p(i,new C.x("\ud83d\udccd "+n.b,i,D.o2,i,i,i,i,i,i,i,i,i),D.f,i,i,new C.o(D.fi.j(0.35),i,new C.bP(l,l,l,l),new C.bp(m,m,m,m),i,i,D.n),i,i,i,i,B.Xw,i,i,i),D.y,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new A.ees(o,j),i,i,i,i,i,i,!1,D.a8))}r.push(new C.C(D.eO,C.c_(D.bD,u,D.bt,6,6),i))}u=j.e
if(u.b)u="Practice mode: no hints. Build it in the right order."
else if(u.gaiH())u="Everything is fitted. Tighten every joint, then turn the main water on to test."
else{u=j.e.c
u===$&&C.c()
u="Job: "+u.d}r.push(new C.bI(D.a3,i,i,C.d(u,i,2,D.a2,i,i,i,B.aNN,i,i,i),i))
r.push(D.P)
t=C.a([j.avd("hand","Hand",B.akK),j.avd("wrench","Wrench",D.qM)],t)
for(p=0;p<11;++p){k=B.bU7[p]
u=B.dfq.h(0,k)
u.toString
t.push(j.avd(k,u,Y.ak8))}r.push(new C.a6(i,52,C.cB(t,i,i,i,i,D.aQ,!1),i))
return new A.AT("Plumbing job: "+h.b,D.aW,v,C.v(r,D.m,i,D.e,D.Q,0,D.p),new A.eet(j,d),""+w+"/"+h.c.length+" fitted",i)},
bXO(d){return C.bW(E.nA,null,new A.eej(this),d,!0,!0,!0,D.lO,!1,!1,x.H)}}
A.yo.prototype={}
A.pH.prototype={}
A.WB.prototype={}
A.atH.prototype={}
A.aS1.prototype={}
A.eC.prototype={
gj8(){return this.a}}
A.b3l.prototype={
cfp(d,e){var w,v,u,t,s=this,r=null,q="outlet",p="switch",o=new C.eT()
o.dI(s.a)
w=d==null?o.aB(3):d
v=C.a([0,1,2],x.t)
D.d.fq(v,o)
u=3+o.aB(2)
switch(w){case 0:t=e==null?"Living room":e
s.c!==$&&C.aO()
s.c=t
t=C.a([new A.pH(v[0],q,r),new A.pH(v[1],q,r),new A.pH(5,"light",u),new A.pH(u,p,r)],x.B)
s.d!==$&&C.aO()
s.d=t
break
case 1:t=e==null?"Bedroom":e
s.c!==$&&C.aO()
s.c=t
t=C.a([new A.pH(v[0],q,r),new A.pH(v[1],q,r),new A.pH(6,"fan",u),new A.pH(u,p,r)],x.B)
s.d!==$&&C.aO()
s.d=t
break
default:t=e==null?"Kitchen":e
s.c!==$&&C.aO()
s.c=t
t=C.a([new A.pH(v[0],"gfci",r),new A.pH(v[1],"gfci",r),new A.pH(5,"light",u),new A.pH(u,p,r)],x.B)
s.d!==$&&C.aO()
s.d=t}},
galn(){var w,v=C.aW(x.S),u=this.d
u===$&&C.c()
w=0
for(;w<4;++w)v.K(0,u[w].a)
return v},
cO7(d){var w,v,u=this.d
u===$&&C.c()
w=0
for(;w<4;++w){v=u[w]
if(v.a===d)return v}return null},
fL(d){++this.f
return new A.eC(!1,d,!1,"")},
aD7(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.d
g===$&&C.c()
w=h.x
v=0
for(;v<4;++v){u=g[v].a
t=A.kZ(u)
if(t.e==="fan")s="fan"
else s=t.c?"ceiling":"wall"
w.n(0,u,s)}g=C.a([],x.t)
for(r=0;r<$.Gg().length;++r)g.push(r)
h.y.v(0,g)
h.z.v(0,h.galn())
for(g=h.Q,w=x.S,v=0;v<3;++v){q=B.nV[v]
u=C.aW(w)
s=C.aW(w)
p=new A.atH(u,s)
p.d=p.e=p.a=!0
for(o=h.aoc(q),n=o.length,m=0;m<o.length;o.length===n||(0,C.L)(o),++m)for(l=o[m]*10,k=0;k<6;++k)s.K(0,l+k)
for(s=h.galn(),o=C.a3(s),n=new C.mT(s,s.r,o.k("mT<1>")),n.c=s.e,o=o.c,s=q+48;n.C();){l=n.d
if(l==null)l=o.a(l)
t=A.kZ(l)
if(!t.c){j=t.d.a
j=j>=q&&j<=s}else j=!1
if(j)u.K(0,l)}g.n(0,q,p)}for(g=h.as,v=0;v<2;++v){i=g[v]
i.a=!0
i.b=3
i.d=i.c=!0}},
cCk(){var w,v,u,t,s,r,q,p,o,n,m=this,l=m.d
l===$&&C.c()
w=0
for(;w<4;++w){v=l[w]
m.bcG(v.a,v.b)}for(u=x.S,t=x.N,s=m.at,w=0;w<4;++w){r=l[w].a
q=s.h(0,r)
if(q==null)continue
p=q.a
A:{if("outlet"===p){o=C.E([25,"ground",23,"white",21,"black"],u,t)
break A}if("gfci"===p){o=C.E([25,"ground",24,"white",22,"black"],u,t)
break A}if("switch"===p){o=C.E([25,"ground",21,"blackLine",22,"blackLoad"],u,t)
break A}o=C.E([53,"ground",52,"white",51,"black"],u,t)
break A}for(o=new C.M1(o,o.r,o.e,C.a3(o).k("M1<1,2>"));o.C();){n=o.d
m.bb2(r,n.b,n.a)}m.bf_(r)
m.b9T(r)}if(!m.ax)m.aGG()
for(w=0;w<4;++w){v=l[w]
u=v.b
if(u==="outlet"||u==="gfci"){u=v.a
m.beJ(u,"lamp")
m.bgf(u)}}for(l=D.d.gag(l),u=new C.fx(l,new A.ckq());u.C();){t=l.gU(0).a
m.aDi(t)
m.aDi(t)}},
aJ2(d){var w,v,u=A.kZ(d).d.a,t=C.a([],x.t)
for(w=0;v=$.Gg(),w<v.length;++w){v=v[w]
if(v>u&&v<64)t.push(w)}return t},
cM1(d,e){var w,v,u=this,t=u.x
if(t.ah(0,d))return u.fL("There is already a box at "+A.kZ(d).b+".")
w=A.kZ(d)
v=w.c
if(!v&&e!=="wall")return u.fL("That is a ceiling box. On the wall you use a plain wall box (the blue one with ears).")
if(v&&e==="wall")return u.fL("A wall box cannot go in the ceiling. Use a round ceiling box.")
if(w.e==="fan"&&e!=="fan"){if(!u.b)return u.fL('A fan is heavy and it shakes. It needs a box that says "fan rated". A plain ceiling box can let the fan fall.')
t.n(0,d,e);++u.f
return B.aTO}t.n(0,d,e)
t=v?"ceiling joist":"side of the stud"
return new A.eC(!0,w.b+": box fixed to the "+t+".",!1,"")},
cGK(d){var w,v=this
if(d<0||d>=$.Gg().length)return B.aTI
w=v.y
if(w.t(0,d))return v.fL("That stud already has a hole.")
if(v.x.a===0)return v.fL("Mount the boxes first. Then you know where the cable has to go and which studs need a hole.")
w.K(0,d)
return B.aTs},
cP8(d){var w,v,u,t,s=this,r=A.kZ(d)
if(!s.x.ah(0,d))return s.fL("There is no box at "+r.b+". Mount the box first, then pull the cable to it.")
w=s.z
if(w.t(0,d))return s.fL("The cable is already there.")
v=s.aJ2(d)
u=C.T(v).k("a2<1>")
t=C.B(new C.a2(v,new A.ckx(s),u),u.k("H.E"))
if(t.length!==0){w=D.o.V($.Gg()[D.d.gL(t)])
v=t.length
u=v===1?"it":"the studs"
return s.fL("The cable is stuck: the stud at "+w+" inches has no hole. Drill "+u+" first ("+v+" left on the way).")}w.K(0,d)
return new A.eC(!0,"Cable pulled from the panel to "+r.b+", through the studs and along the ceiling.",!1,"")},
gaGv(){return this.galn().d9(0,new A.cky(this))},
anT(d){var w,v,u,t
for(w=this.Q,w=new C.cJ(w,C.a3(w).k("cJ<1,2>")).gag(0);w.C();){v=w.d
u=v.b
if(u.a){t=v.a
t=d>=t&&d<=t+48}else t=!1
if(t)return u}return null},
cJr(d){var w,v,u=this
if(!u.gaGv())return u.fL("Finish the rough-in first. The cable and the boxes must be in before the drywall hides the studs.")
if(!D.d.t(B.a2h,d))return B.aTg
if(!D.d.t(B.nV,d))return u.fL("The edge of the sheet would land between two studs. The sheet needs a stud under every edge, so there is nothing to screw it to. Start at the left corner (a stud) and move one sheet width (48 inches) at a time.")
w=u.Q
v=w.h(0,d)
if((v==null?null:v.a)===!0)return u.fL("There is already a sheet there.")
v=w.h(0,d)
if(v==null){v=x.S
v=new A.atH(C.aW(v),C.aW(v))}v.a=!0
w.n(0,d,v)
return B.aTr},
aoc(d){var w,v,u,t=C.a([],x.t)
for(w=d+48,v=0;u=$.Gg(),v<u.length;++v){u=u[v]
if(u>=d&&u<=w)t.push(v)}return t},
cFH(d){var w,v,u=this,t=A.kZ(d)
if(t.c)return u.fL("Ceiling fixtures do not need an opening in the wall.")
if(!u.x.ah(0,d))return u.fL("There is no box at "+t.b+".")
w=u.anT(t.d.a)
if(w==null)return u.fL("There is no sheet over this box yet. Hang the sheet first, then cut the opening.")
v=w.b
if(v.t(0,d))return u.fL("The opening is already cut.")
v.K(0,d)
return B.aTB},
aIj(d,e,f){var w,v,u,t,s,r=this
if(f)return r.fL("Missed the stud! There is only air behind the sheet here. The screw would pull through the paper. Screw only where a stud is behind the sheet (every 16 inches).")
w=x.bS
v=C.B(new C.a2(B.nV,new A.ckz(r,d),w),w.k("H.E"))
if(v.length===0)return r.fL("There is no sheet here yet.")
u=d*10+e
if(D.d.d9(v,new A.ckA(r,u)))return r.fL("There is already a screw there.")
for(w=v.length,t=r.Q,s=0;s<v.length;v.length===w||(0,C.L)(v),++s)t.h(0,v[s]).c.K(0,u)
return B.aTD},
bkd(d,e){return this.aIj(d,e,!1)},
blK(d){var w=this.Q.h(0,d)
if(w==null||!w.a)return!1
return D.d.d9(this.aoc(d),new A.ckC(w))},
gaAV(){return D.d.d9(B.nV,new A.ckp(this))},
gaAU(){var w=this.galn()
return new C.a2(w,new A.ckn(),C.a3(w).k("a2<cl.E>")).d9(0,new A.cko(this))},
cR0(d){var w,v=this
if(!v.gaAV())return v.fL("Hang all the sheets first.")
if(!D.d.d9(B.nV,v.ganU()))return v.fL("Finish screwing every sheet to the studs first. Tape goes on a solid wall.")
w=v.as[d]
if(w.a)return v.fL("This seam already has tape.")
w.c=w.a=!0
return B.aTk},
cM4(d){var w,v=this,u=v.as[d]
if(!u.a)return v.fL("Tape first. The mud goes over the tape.")
if(!u.c)return v.fL("The last coat is still wet. Let it dry before the next coat.")
w=u.b
if(w>=3)return v.fL("Three coats are enough. Now sand it.");++w
u.b=w
u.c=!1
return new A.eC(!0,"Coat "+w+" of joint compound spread. Let it dry.",!1,"")},
cL_(){var w,v=this.as
if(D.d.d9(v,new A.ckv()))return B.aTy
for(w=0;w<2;++w)v[w].c=!0
return B.aTM},
bk1(d){var w=this,v=w.as[d]
if(v.b<3)return w.fL("Put on all three coats of mud first. Sanding now would just rub off the tape.")
if(!v.c)return w.fL("The mud is still wet. Let it dry first.")
if(v.d)return w.fL("Already sanded.")
v.d=!0
return B.aTh},
cOm(d){var w=this,v=w.Q.h(0,d)
if(v==null||!v.a)return w.fL("There is no sheet there.")
if(!w.gaAU())return w.fL("Cut the openings for the boxes before you paint. Otherwise the paint covers the boxes.")
if(!D.d.d9(w.as,new A.ckw()))return w.fL("Sand the seams first. Paint shows every bump.")
if(v.e)return w.fL("This sheet is already painted.")
v.e=!0
return B.aTe},
gyi(){var w=this
return w.gaAV()&&D.d.d9(B.nV,w.ganU())&&w.gaAU()&&D.d.d9(w.as,new A.ckr())&&D.d.d9(B.nV,new A.cks(w))},
MA(){var w,v
for(w=this.at,w=new C.dt(w,w.r,w.e);w.C();){v=w.d.b
v.a=this.ax&&!this.ay}},
bX2(d,e){if(d.c)return e==="light"||e==="fan"?"":"A ceiling box holds a light or a fan, not an outlet or a switch."
return e==="outlet"||e==="gfci"||e==="switch"?"":"A light or a fan hangs from the ceiling. A wall box holds an outlet, a GFCI or a switch."},
bcG(d,e){var w,v,u,t,s,r=this,q=A.kZ(d)
if(!r.gyi())return r.fL("Finish the drywall first. Devices go in after the walls are painted.")
w=r.x
if(!w.ah(0,d)||!r.z.t(0,d))return r.fL("There is no box with cable at "+q.b+".")
v=r.at
if(v.ah(0,d))return r.fL("There is already a device there. Pull it out first if you want to move it.")
u=r.bX2(q,e)
if(u.length!==0)return r.fL(u)
t=e==="switch"
if(!(t&&q.e==="low"))s=!t&&!q.c&&q.e==="switch"
else s=!0
if(s){if(!r.b)return r.fL(t?"A switch goes about 48 inches from the floor, where a hand falls naturally. This box is down at outlet height.":"Outlets go low, about 16 inches from the floor. This box is up at switch height.");++r.f
r.cy.push("Wrong height at "+q.b+".")}s=e==="fan"
if(s&&w.h(0,d)!=="fan")if(!r.b)return r.fL("This box is not fan rated. A fan on it can fall. Take the box out and put in a fan-rated one.")
w=new A.Xs(C.V(x.S,x.N))
w.r=r.b
w.a=r.ax&&!r.ay
v.n(0,d,new A.aS1(e,w))
if(e==="light")w="Light fixture"
else if(s)w="Ceiling fan"
else if(e==="gfci")w="GFCI outlet"
else w=t?"Switch":"Outlet"
return new A.eC(!0,w+" is held up to "+q.b+". Turn the breaker OFF, then wire it.",!1,"")},
cQa(d){var w=this,v=w.at,u=v.h(0,d)
if(u==null)return B.aTo
if(w.ax&&!w.ay&&!u.b.w){if(w.b)return w.a0P()
return w.a13()}v.W(0,d)
w.CW.W(0,d)
w.cx.W(0,d)
w.ch.W(0,d)
return B.aTG},
a13(){++this.r;++this.f
return B.aTE},
a0P(){var w,v,u=this;++u.r;--u.e
u.ax=!1
u.MA()
w=u.e
if(w<=0){u.w=!0
return B.aTn}v=w===1?"life":"lives"
return new A.eC(!1,"ZAP! You touched a live wire and got a shock. The breaker is now off. "+w+" "+v+" left. Always turn the breaker OFF and test the wires first.",!0,"shock")},
bb2(d,e,f){var w,v,u,t=this,s=t.at.h(0,d)
if(s==null)return B.a8C
t.MA()
w=A.Ac(s.a)
v=D.d.iA(w.f,new A.ckt(f))
u=A.hhx(w,s.b,e,v,!0)
if(u==null){if(!t.b&&!v.c.t(0,e)){++t.f
return new A.eC(!0,v.b+": fastened. Careful: "+C.t(w.r.$2(e,v))+" It will burn or trip the breaker when the power comes on.",!0,"")}return new A.eC(!0,v.b+": wire fastened.",!1,"")}if(D.a.a0(u,"SHOCK"))return t.a0P()
if(D.a.a0(u,"STOP"))return t.a13();++t.f
return new A.eC(!1,u,!1,"")},
cRv(d,e){var w,v=this,u=v.at.h(0,d)
if(u==null)return B.Uf
v.MA()
w=u.b
if(w.a&&w.c===0){if(v.b)return v.a0P()
return v.a13()}w=w.b
w.bn(w,new A.ckD(e))
return B.aTL},
bf_(d){var w,v,u=this,t=u.at.h(0,d)
if(t==null)return B.a8C
w=A.Ac(t.a)
v=t.b
if(!A.bBR(w,v))return u.fL("Every wire must be fastened first.")
if(u.ax&&!u.ay){if(u.b)return u.a0P()
return u.a13()}v.c=1
return B.aTw},
cP9(d){var w,v=this,u=v.at.h(0,d)
if(u==null)return B.Uf
if(v.ax&&!v.ay){if(v.b)return v.a0P()
return v.a13()}w=u.b
w.c=0
w.d=!1
return B.aTC},
b9T(d){var w=this.at.h(0,d)
if(w==null||w.b.c!==1)return this.fL("Push the device into the box first.")
w.b.c=2
return B.aTF},
aH7(d){var w=this.at
return A.aff(A.Ac(w.h(0,d).a),w.h(0,d).b)},
aGG(){var w=this
if(w.ay){w.ax=w.ay=!1
w.MA()
return B.aTu}w.ax=!w.ax
w.MA()
if(!w.ax)return B.aTm
return w.c2s()},
c2s(){var w,v,u,t,s,r,q,p,o,n=this,m=C.a([],x.s)
for(w=n.at,v=new C.cJ(w,C.a3(w).k("cJ<1,2>")).gag(0),u=n.cx,t=!1,s=!1;v.C();){r=v.d
q=r.b.b
if(q.c===0)continue
p=r.a
o=A.aff(A.Ac(w.h(0,p).a),w.h(0,p).b)
q.d=q.c>=2
if(o.d)t=!0
if(o.e){q.w=!0
u.K(0,p)
s=!0}if(o.a!=="ok")m.push(A.kZ(p).b+": "+o.b)}if(t){n.ay=!0
n.MA()
w=s?"BANG! Sparks and smoke. ":""
v=D.d.aI(m," ")
u=s?"burn":"trip"
return new A.eC(!1,w+"The breaker tripped. "+v+" Fix it, then flip the breaker OFF and ON again.",!0,u)}if(m.length!==0)return new A.eC(!0,"Power is on. "+D.d.aI(m," "),!0,"")
return B.aTz},
aDi(d){var w,v,u,t,s,r,q=this,p=q.at,o=p.h(0,d)
if(o==null||o.a!=="switch"||o.b.c<2)return B.aTK
w=q.ch
if(w.t(0,d))w.W(0,d)
else w.K(0,d)
v=q.d
v===$&&C.c()
u=C.T(v).k("a2<1>")
t=C.B(new C.a2(v,new A.cku(d),u),u.k("H.E"))
if(t.length===0)return B.aTv
s=D.d.gL(t)
v=s.a
r=q.ala(v)
if(w.t(0,d)&&r){p=p.h(0,v)
if(p!=null)p.c=!0
return new A.eC(!0,(s.b==="fan"?"The fan spins":"The light turns on")+". The switch works.",!1,"")}if(w.t(0,d)){p=s.b
return new A.eC(!1,(p==="fan"?"The fan":"The light")+" did not come on. Check the breaker and the wires on the switch and on the "+p+".",!1,"")}return B.aTJ},
a2X(d){var w,v=this.at.h(0,d)
if(v!=null){w=v.b
w=w.c<2||w.w}else w=!0
if(w)return!1
return this.aH7(d).c},
ala(d){var w=this,v=w.cO7(d),u=v==null,t=u?null:v.c,s=!0
if(!u)if(t!=null)u=!(w.ax&&!w.ay)||!w.a2X(d)||!w.a2X(t)
else u=s
else u=s
if(u)return!1
return w.ch.t(0,t)},
beJ(d,e){var w,v,u=this,t=u.at.h(0,d)
if(t!=null){w=t.a
w=w!=="outlet"&&w!=="gfci"||t.b.c<2}else w=!0
if(w)return u.fL("There is no finished outlet there to plug into.")
w=u.CW
if(w.ah(0,d))return u.fL("Something is already plugged in.")
w.n(0,d,e)
if(t.b.w)return B.aTp
if(u.ax&&!u.ay&&u.a2X(d)){t.c=!0
v=u.aH7(d)
w=v.a
if(w==="reversed"||w==="noGround")return new A.eC(!0,"It runs, but be careful: "+v.b,!0,"")
return new A.eC(!0,A.hB1(e)+" runs. The outlet works.",!1,"")}if(!(u.ax&&!u.ay))return B.aTt
return new A.eC(!1,"Nothing happens. "+u.aH7(d).b,!0,"")},
bgf(d){if(this.CW.W(0,d)==null)return B.Uf
return B.aTl},
gaCz(){var w,v,u,t,s,r=this.d
r===$&&C.c()
w=this.at
v=0
for(;v<4;++v){u=r[v]
t=u.a
s=w.h(0,t)
if(s==null||s.a!==u.b||s.b.c<2)return!1
if(A.aff(A.Ac(w.h(0,t).a),w.h(0,t).b).a!=="ok")return!1
t=u.b
if(t==="outlet"||t==="gfci"){if(!s.c)return!1}else if(t!=="switch"&&!s.c)return!1}return!0}}
A.kV.prototype={}
A.UZ.prototype={
T(){var w,v=new A.Az(-0.12,0.4,205,B.a7F,$.aw())
v.f=300
w=new C.BB()
$.Cx()
w.iZ(0)
return new A.aCQ(v,w,C.V(x.S,x.i))}}
A.aCQ.prototype={
gCi(d){var w=this.e
if(w===$){this.a.toString
w=D.o.G(Date.now(),1e5)
this.e=w}return w},
a_(){var w,v=this
v.a1()
w=v.a.d
if(w==null){w=v.gCi(0)
w=A.fOY(null,null,v.a.f,w)}v.d=w
if(v.a.d!=null&&w.gyi())v.y=2
if(v.a.e){v.d.aD7()
v.y=2}v.r=A.Ck(v.d,new A.vO(v.z,v.Q,!1))
w=v.f
w.x=0
w.y=1.1},
q(){var w=this.cy
if(w!=null)w.a9(0)
this.a2()},
A4(d,e){var w=this,v=w.cy
if(v!=null)v.a9(0)
w.m(new A.eiJ(w,d,e))
w.cy=C.cM(D.jp,new A.eiK(w))},
avh(d){return this.A4(d,!1)},
ks(d){var w,v,u,t,s,r=this,q=d.a
if(q)A.y4()
else A.m4(180,220,0.25,"square")
w=d.d
if(w==="shock"){C.fK()
r.m(new A.ehY(r))
C.bN(D.mV,new A.ehZ(r),x.P)}if(w==="burn"||w==="trip"){w=r.d
w===$&&C.c()
w=w.cx
w=C.ea(w,w.r,C.a3(w).c)
v=r.x
u=r.w
t=w.$ti.c
while(w.C()){s=w.d
if(s==null)s=t.a(s)
v.n(0,s,u.gu2()/1000+3.5)}C.fK()
A.m4(150,300,0.5,"noise")}w=r.d
w===$&&C.c()
r.r=A.Ck(w,new A.vO(r.z,r.Q,!1))
q=q&&!d.c
r.A4(d.b,q)
if(r.d.w&&r.c!=null)$.aT.x1$.push(new A.ei_(r))
if(r.d.gaCz()&&!r.cx){r.cx=!0
$.aT.x1$.push(new A.ei0(r))}},
b1e(){var w=this.ch?3.141592653589793:-0.12
this.f.lR(205,0.4,B.a7F,w)},
aRc(){var w,v,u=this
u.ch=!1
w=u.f
w.Gt(!1)
w.x=0
u.m(new A.ei8(u))
v=u.d
v===$&&C.c()
u.r=A.Ck(v,new A.vO(u.z,u.Q,!1))
w.lR(205,0.4,B.a7F,-0.12)},
bzA(){var w,v,u=this
u.ch=!0
w=u.f
w.Gt(!0)
u.m(new A.ei1(u))
v=u.d
v===$&&C.c()
u.r=A.Ck(v,new A.vO(u.z,u.Q,!1))
w.lR(190,0.3,B.fvF,3.141592653589793)},
Yw(d,e){var w,v,u,t=this,s=A.kZ(e),r=t.f
r.Gt(!1)
r.x=0
t.m(new A.eiq(t,e))
w=t.d
w===$&&C.c()
t.r=A.Ck(w,new A.vO(t.z,t.Q,!1))
v=A.a1G(s,B.fuW)
w=s.c
u=w?22:15
r.lR(u,w?-0.8:0.26,v,0.3)},
avf(){var w,v=this
v.m(new A.ei9(v))
w=v.d
w===$&&C.c()
v.r=A.Ck(w,new A.vO(v.z,v.Q,!1))
v.b1e()},
c2x(d){var w,v,u,t,s,r,q=this
if(d===0){if(q.Q<0)q.m(new A.eiF(q))
return}w=q.Q
if(w>=0)v=!(d>=5000&&d<5700)
else v=!1
if(v)return
if(d>=5000&&d<5700){v=d-5000
u=D.o.an(v,100)
if(w!==u){if(q.z==="tester")q.azE(u)
else{q.m(new A.eiG(q))
q.Yw(0,u)}return}q.b__(u,D.o.G(v,100))
return}if(d>=1000&&d<1010)if(q.z==="drill"){w=q.d
w===$&&C.c()
q.ks(w.cGK(d-1000))
return}if(d>=2000&&d<2007){q.b_2(d-2000)
return}if(d>=3000&&d<3007){q.b_0(d-3000)
return}if(d>=6000&&d<6005){if(q.z==="sheet"){w=q.d
w===$&&C.c()
q.ks(w.cJr(B.a2h[d-6000]))}return}if(d>=6100&&d<6103){t=B.nV[d-6100]
if(q.z==="paint"){w=q.d
w===$&&C.c()
q.ks(w.cOm(t))
return}}if(d>=6200&&d<6202){s=d-6200
switch(q.z){case"tape":w=q.d
w===$&&C.c()
q.ks(w.cR0(s))
return
case"mud":w=q.d
w===$&&C.c()
q.ks(w.cM4(s))
return
case"sand":w=q.d
w===$&&C.c()
q.ks(w.bk1(s))
return}}if(d>=7000&&d<7100){if(q.z==="screw"){w=q.d
w===$&&C.c()
v=d-7000
q.ks(w.bkd(D.o.an(v,10),D.o.G(v,10)))}return}if(d>=7500&&d<7600){if(q.z==="screw"){w=q.d
w===$&&C.c()
v=d-7500
q.ks(w.aIj(D.o.an(v,10),D.o.G(v,10),!0))}return}if(d===8000){w=q.d
w===$&&C.c()
q.ks(w.aGG())
return}if(d>=8100&&d<8107){u=d-8100
w=q.d
w===$&&C.c()
if(w.CW.h(0,u)==="tv"&&q.z!=="unplug"){w=q.c
w.toString
F.fIx(w,0,"tv",!0,D.uT,"Samsung Neo QLED 8K")
return}q.ks(q.d.bgf(u))
return}if(q.z==="look"){w=q.r
w===$&&C.c()
r=w.b.h(0,d)
if(r!=null){q.m(new A.eiH(q,d))
q.A4(r.a+": "+r.b,!0)}}},
b_2(d){var w,v,u,t=this,s=t.d
s===$&&C.c()
if(s.at.ah(0,d)){s=t.z
s=s!=="tester"&&s!=="look"&&!D.d.t(B.GL,s)}else s=!1
if(s){t.m(new A.eiD(t))
t.Yw(0,d)
return}s=t.z
switch(s){case"wall":case"ceiling":case"fanbox":w=t.d
t.ks(w.cM1(d,s==="fanbox"?"fan":s))
return
case"cable":t.ks(t.d.cP8(d))
return
case"knife":t.ks(t.d.cFH(d))
return
case"outlet":case"gfci":case"switch":case"light":case"fan":v=t.d.bcG(d,s)
t.ks(v)
if(v.a){t.d.at.h(0,d).b.f=!t.d.b
t.z=""
t.Yw(0,d)}return
case"tester":t.azE(d)
return}if(t.d.at.ah(0,d)){t.Yw(0,d)
return}s=t.r
s===$&&C.c()
u=s.b.h(0,2000+d)
if(u!=null){t.m(new A.eiE(t,d))
t.A4(u.a+": "+u.b,!0)}},
azE(d){var w,v=this.d
v===$&&C.c()
w=v.ax&&!v.ay&&v.x.ah(0,d)&&this.d.z.t(0,d)
v=w?"The tester glows: this box is LIVE (120 volts). Turn the breaker OFF before you touch any wire.":"The tester stays dark: no power here. It is safe to work. (Test again after you turn the breaker off, every time.)"
this.A4(v,!w)
A.m4(w?1400:500,120,0.25,"tri")},
b_0(d){var w,v=this,u=v.d
u===$&&C.c()
w=u.at.h(0,d)
if(w==null)return
if(D.d.t(B.GL,v.z)){v.ks(v.d.beJ(d,v.z))
return}u=v.z
if(u==="tester"){v.azE(d)
return}if(u==="flip"){if(w.a==="switch"&&w.b.c>=2)v.ks(v.d.aDi(d))
else v.avh("Only a finished switch can be flipped.")
return}v.m(new A.eiC(v))
v.Yw(0,d)},
b__(d,e){var w,v,u,t,s,r,q,p=this,o=p.d
o===$&&C.c()
w=o.at.h(0,d)
if(w==null)return
o=w.a
v=A.Ac(o).f
u=C.T(v).k("a2<1>")
t=C.B(new C.a2(v,new A.eiy(e),u),u.k("H.E"))
s=A.hhC(o,e)
if(s!=null){o=w.b
o=o.b.iP(0,s)&&o.c===0}else o=!1
if(o){p.ks(p.d.cRv(d,s))
return}if(t.length!==0&&w.b.c===0){o=p.at
if(o.length===0){p.avh("Pick a wire below first, then tap "+D.d.gL(t).b+".")
p.m(new A.eiz(p,d,e))
return}r=p.d.bb2(d,o,e)
p.ks(r)
if(r.a)p.m(new A.eiA(p))
return}o=p.r
o===$&&C.c()
q=o.b.h(0,5000+d*100+e)
if(q!=null){p.m(new A.eiB(p,d,e))
p.A4(q.a+": "+q.b,!0)}},
c2y(){var w,v,u,t,s,r,q=this,p=C.a([],x.K)
for(w=0;w<7;++w){v=B.tM[w]
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
crV(){var w,v,u,t,s,r,q,p=null,o=this.c2y()
if(o.length===0)return D.bH
w=C.a([],x.p)
for(v=o.length,u=0;u<o.length;o.length===v||(0,C.L)(o),++u){t={}
s=o[u]
t.a=null
t.a=s.a
r=new C.aV(12,12)
q=new C.az(D.b1,1,D.r,-1)
w.push(C.aE(p,C.p(p,new C.x("\ud83d\udccd "+s.b,p,D.o2,p,p,p,p,p,p,p,p,p),D.f,p,p,new C.o(D.fi.j(0.35),p,new C.bP(q,q,q,q),new C.bp(r,r,r,r),p,p,D.n),p,p,p,p,B.Xw,p,p,p),D.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new A.eiL(t,this),p,p,p,p,p,p,!1,D.a8))}return new C.C(D.i8,C.c_(D.bD,w,D.bt,6,6),p)},
bLx(){var w=null,v=this.c
v.toString
C.c9(w,w,!1,w,new A.ei7(this),v,w,!0,!0,x.H)},
c2t(){var w=null,v=this.c
v.toString
C.c9(w,w,!0,w,new A.ei4(this),v,w,!0,!0,x.H)},
avg(d){this.m(new A.eia(this,d))
this.aRc()},
aWK(){return this.avg(!1)},
c2v(){var w,v,u,t,s,r,q,p,o,n=this,m=n.d
m===$&&C.c()
if(m.w)return"The job is over."
switch(n.y){case 0:m=m.d
m===$&&C.c()
w=C.T(m).k("a2<1>")
v=C.B(new C.a2(m,new A.eib(n),w),w.k("H.E"))
if(v.length!==0){u=D.d.gL(v)
t=A.kZ(u.a)
m=u.b
if(m==="gfci")m="a GFCI"
if(t.c)w=t.e==="fan"?"fan box":"ceiling box"
else w="wall box"
return"Mount a box at "+t.b+" ("+m+" goes here): pick a "+w+", then tap the glowing spot."}m=n.d.d
m===$&&C.c()
w=C.T(m).k("a2<1>")
s=C.B(new C.a2(m,new A.eic(n),w),w.k("H.E"))
if(s.length!==0){t=D.d.gL(s).a
m=n.d.aJ2(t)
r=new C.a2(m,new A.eid(n),C.T(m).k("a2<1>")).gM(0)
return r>0?"The cable comes from the panel on the right. Pick the drill and tap each stud on the way to "+A.kZ(t).b+" ("+r+" left).":"Pick the cable roll and tap "+A.kZ(t).b+"."}return"Rough-in done! Open 2 Drywall."
case 1:if(!m.gaGv())return"Finish the rough-in first (tab 1). Drywall hides the wires."
if(!n.d.gaAV())return"Pick a drywall sheet and tap a stud edge to hang it. Three sheets cover the wall."
if(!n.d.gaAU())return"Pick the drywall saw and tap each box to cut its opening."
if(!D.d.d9(B.nV,n.d.ganU()))return"Pick the screw gun and put a screw in every glowing spot on the studs."
if(D.d.b8(n.d.as,new A.eig()))return"Pick the tape and tap each seam between two sheets."
if(D.d.b8(n.d.as,new A.eih()))return D.d.b8(n.d.as,new A.eii())?'The mud is wet. Press "Let it dry", then the next coat.':"Pick the mud and tap each seam. It needs three coats, with drying in between."
if(D.d.b8(n.d.as,new A.eij()))return D.d.b8(n.d.as,new A.eik())?'Press "Let it dry", then sand.':"Pick the sander and tap each seam."
if(!n.d.gyi())return"Pick the roller and paint each sheet."
return"Drywall done! Open 3 Devices."
default:if(!m.gyi())return"Finish the drywall first (tab 2)."
m=n.d.d
m===$&&C.c()
w=C.T(m).k("a2<1>")
q=C.B(new C.a2(m,new A.eil(n),w),w.k("H.E"))
if(q.length!==0){u=D.d.gL(q)
m=u.b
if(m==="gfci")m="GFCI"
return"Pick the "+m+" and tap "+A.kZ(u.a).b+". ("+C.t(new A.eio().$1(new C.K(q,new A.eim(),C.T(q).k("K<1,G>"))))+" still need a device.)"}m=n.d.d
m===$&&C.c()
w=C.T(m).k("a2<1>")
p=C.B(new C.a2(m,new A.ein(n),w),w.k("H.E"))
if(p.length!==0)return"Tap "+A.kZ(D.d.gL(p).a).b+" to work on it: breaker OFF, wires, push in, cover on."
m=n.d
if(!m.ax)return"Turn the breaker ON (tap the panel or the breaker button) and test."
m=m.d
m===$&&C.c()
w=C.T(m).k("a2<1>")
o=C.B(new C.a2(m,new A.eie(n),w),w.k("H.E"))
if(o.length!==0)return"Pick the TV or the lamp and plug it into "+A.kZ(D.d.gL(o).a).b+" to test it."
m=n.d.d
m===$&&C.c()
return"Flip the wall switch to test the "+(D.d.b8(m,new A.eif())?"fan":"light")+"."}},
B(a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this,a2=null,a3=B.d_U[a1.y],a4=a1.Q
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
for(l=0;l<3;++l)m.push(new C.C(D.Lk,new C.x(l<a1.d.e?"\u2764\ufe0f":"\ud83d\udda4",a2,D.zf,a2,a2,a2,a2,a2,a2,a2,a2,a2),a2))
m.push(D.bp)
k=a1.d
if(k.ay)k=D.jJ
else{k=k.ax
k=k?D.ew:D.ec}k=k.j(0.95)
j=C.m(16)
i=a1.d
h=i.ay
if(h)g=D.cv
else{g=i.ax
g=g?D.cr:D.bc}g=C.I(g,D.r,1.4)
if(h)i="TRIPPED: tap to reset"
else{i=i.ax
i=i?"Breaker ON":"Breaker OFF"}m.push(C.aE(a2,C.p(a2,C.d(i,a2,a2,a2,a2,a2,a2,B.eX2,a2,a2,a2),D.f,a2,a2,new C.o(k,a2,g,j,a2,a2,D.n),a2,a2,a2,a2,D.qH,a2,a2,a2),D.y,!1,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,new A.eiT(a1),a2,a2,a2,a2,a2,a2,!1,D.a8))
m=C.a([C.A(m,D.m,a2,D.e,D.Q,0,a2,a2)],n)
k=a1.ch
j=k?"In front":"Behind the wall"
i=k?G.ajG:G.ajF
k=C.a([A.Q9(j,D.by,i,k,k?a1.gbN0():a1.gbzz()),D.ao],n)
if(!a4){j=v.b
D.d.v(k,C.a([A.Q9("Labels",D.aW,M.MW,j.f,new A.eiU(a1,v)),D.ao,A.Q9("Hints",D.aI,D.qR,j.e,new A.eiV(a1,v)),D.P],n))}s=A.WP(a1.f,new A.ej2(a1),p,r,o,a2,a2,q,a2,a2,new A.ej3(a1),a1.gc2w(),s,m,k)
r=C.a([],n)
if(a4){a4=C.a([],n)
for(l=0;l<3;++l){q=l<2?6:0
p=a1.y===l?D.aI.j(0.2):D.dq
o=new C.aV(12,12)
f=new C.az(a1.y===l?D.aI:D.bF,1,D.r,-1)
if(l===0)m=a1.d.gaGv()
else{m=a1.d
m=l===1?m.gyi():m.gaCz()}m=m?"\u2705 ":""
k=B.d8m[l]
j=a1.y===l?D.aI:D.ad
a4.push(new C.bF(1,D.bj,C.aE(a2,C.p(a2,new C.cq(D.A,a2,a2,new C.x(m+k,a2,new C.F(!0,j,a2,a2,a2,a2,12,D.u,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2),a2,a2,a2,a2,a2,a2,a2,a2,a2),a2),D.f,a2,a2,new C.o(p,a2,new C.bP(f,f,f,f),new C.bp(o,o,o,o),a2,a2,D.n),a2,a2,a2,new C.Q(0,0,q,0),A0.Ln,a2,a2,a2),D.y,!1,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,new A.ej4(a1,l),a2,a2,a2,a2,a2,a2,!1,D.a8),a2))}a4=C.a([C.A(a4,D.m,a2,D.e,D.j,0,a2,a2),D.ao],n)
if(!a1.d.b){q=D.aW.j(0.1)
p=C.m(10)
o=C.I(D.aW.j(0.4),D.r,1)
a4.push(C.p(a2,C.d("\ud83d\udc49 "+a1.c2v(),a2,2,D.a2,a2,a2,a2,B.eYv,a2,a2,a2),D.f,a2,a2,new C.o(q,a2,o,p,a2,a2,D.n),a2,a2,a2,a2,D.cj,a2,a2,1/0))}else a4.push(B.ff3)
a4.push(D.ao)
q=C.a([],n)
if(a1.y<2&&!a1.d.gyi())q.push(new C.C(E.tj,C.aE(a2,C.p(a2,B.b2r,D.f,a2,a2,new C.o(D.dS,a2,a2,C.m(14),a2,a2,D.n),a2,a2,a2,a2,D.fQ,a2,a2,a2),D.y,!1,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,new A.ej5(a1),a2,a2,a2,a2,a2,a2,!1,D.a8),a2))
for(p=a3.length,e=0;e<p;++e){d=a3[e]
o=d.a
m=a1.z===o?D.aI.j(0.25):D.c.j(0.07)
k=new C.aV(14,14)
o=a1.z===o
j=o?D.aI:D.b5
f=new C.az(j,o?2:1,D.r,-1)
j=o?D.aI:D.ad
j=C.W(d.c,j,a2,a2,a2,19)
o=o?D.aI:D.c
q.push(new C.C(E.tj,C.aE(a2,C.p(a2,new C.co(D.aQ,D.e,D.j,D.m,a2,D.p,a2,0,C.a([j,D.bp,new C.x(d.b,a2,new C.F(!0,o,a2,a2,a2,a2,12.5,D.I,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2),a2,a2,a2,a2,a2,a2,a2,a2,a2)],n),a2),D.f,a2,a2,new C.o(m,a2,new C.bP(f,f,f,f),new C.bp(k,k,k,k),a2,a2,D.n),a2,a2,a2,a2,D.fQ,a2,a2,a2),D.y,!1,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,new A.ej6(a1,d),a2,a2,a2,a2,a2,a2,!1,D.a8),a2))}if(a1.y===1)q.push(new C.C(E.tj,C.aE(a2,C.p(a2,B.b2j,D.f,a2,a2,new C.o(D.ec,a2,a2,C.m(14),a2,a2,D.n),a2,a2,a2,a2,D.fQ,a2,a2,a2),D.y,!1,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,new A.ej7(a1),a2,a2,a2,a2,a2,a2,!1,D.a8),a2))
a4.push(new C.a6(a2,52,C.cB(q,a2,a2,a2,a2,D.aQ,!1),a2))
if(a1.z.length!==0)a4.push(a1.crV())
D.d.v(r,a4)}else{a4=C.a([],n)
q=v.b
if(q.c===0)for(p=D.d.gag(u.e),o=new C.fx(p,new A.ej8(v)),m=q.b;o.C();){k=p.gU(0)
j=k.c
i=new C.aV(14,14)
h=a1.at
g=k.a
h=h===g
a0=h?D.b1:D.b5
f=new C.az(a0,h?3:1,D.r,-1)
a0=C.a([],n)
if(m.iP(0,g))a0.push(new C.C(D.Ll,C.W(D.ee,k.d,a2,a2,a2,17),a2))
h=k.b
g=k.d
a0.push(new C.x(h,a2,new C.F(!0,g,a2,a2,a2,a2,12.5,D.u,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2),a2,a2,a2,a2,a2,a2,a2,a2,a2))
a4.push(C.aE(a2,C.p(a2,new C.co(D.aQ,D.e,D.Q,D.m,a2,D.p,a2,0,a0,a2),D.f,a2,a2,new C.o(j,a2,new C.bP(f,f,f,f),new C.bp(i,i,i,i),a2,a2,D.n),a2,a2,a2,a2,D.xf,a2,a2,a2),D.y,!1,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,new A.ej9(a1,v,k),a2,a2,a2,a2,a2,a2,!1,D.a8))}a4=C.a([C.c_(D.bD,a4,D.bt,6,8)],n)
if(q.c===0&&a1.at.length!==0){p=C.a([],n)
for(o=D.d.gag(u.f),m=new C.fx(o,new A.eiW(v));m.C();){k=o.gU(0)
j=D.fi.j(0.35)
i=new C.aV(12,12)
f=new C.az(D.b1,1,D.r,-1)
p.push(C.aE(a2,C.p(a2,new C.x("\u279c "+k.b,a2,D.o2,a2,a2,a2,a2,a2,a2,a2,a2,a2),D.f,a2,a2,new C.o(j,a2,new C.bP(f,f,f,f),new C.bp(i,i,i,i),a2,a2,D.n),a2,a2,a2,a2,B.Xw,a2,a2,a2),D.y,!1,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,new A.eiX(a1,k),a2,a2,a2,a2,a2,a2,!1,D.a8))}a4.push(new C.C(D.ke,C.c_(D.bD,p,D.bt,6,6),a2))}a4.push(D.P)
p=C.a([A.y3("Back to the room",D.py,a1.gc2u(),D.ad),D.ab],n)
if(q.c===0){u.toString
o=A.bBR(u,q)?"Push it into the box":"Fasten every wire"
p.push(A.y3(o,B.akQ,A.bBR(u,q)?new A.eiY(a1):a2,D.aI))}if(q.c===1)D.d.v(p,C.a([A.y3("Pull it out",D.qU,new A.eiZ(a1),D.ad),D.ab,A.y3("Cover on",L.vg,new A.ej_(a1),D.aI)],n))
if(q.c>=2){q=q.w
o=q?"Take out the burnt one":"Pull it out again"
q=q?D.cr:D.ad
p.push(A.y3(o,B.bAl,new A.ej0(a1),q))}a4.push(C.A(p,D.m,a2,D.e,D.j,0,a2,a2))
D.d.v(r,a4)}a4=C.a([new A.AT(t+" job",D.aI,s,C.v(r,D.m,a2,D.e,D.Q,0,D.p),new A.ej1(a1,a5),"Phase "+(w+1)+"/3",a2)],n)
if(a1.CW)a4.push(C.bY(0,C.e_(C.p(a2,a2,D.f,B.ae9,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2),!0,a2),0,0,0))
return new C.an(D.W,a2,D.aa,D.q,a4,a2)},
clK(d){var w=this.d
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
break A}this.A4(w,!0)},
cb8(d){return C.bW(E.nA,null,new A.eix(this),d,!0,!0,!0,D.lO,!1,!1,x.H)}}
A.vO.prototype={}
A.qR.prototype={
a4(){return"FaultKind."+this.b}}
A.u0.prototype={}
A.Lp.prototype={}
A.cnI.prototype={
bvA(d,e,f){var w,v,u,t,s,r,q,p=this,o=new C.eT()
o.dI(p.a)
w=C.B(B.cZw,x.F)
D.d.fq(w,o)
v=C.aW(x.S)
u=C.a([],x.c)
for(t=w.length,s=0;s<w.length;w.length===t||(0,C.L)(w),++s){r=w[s]
q=B.vE.h(0,r).e
if(v.t(0,q))continue
v.K(0,q)
u.push(new A.Lp(r,o.aB(3)))
if(u.length>=d)break}p.c!==$&&C.aO()
p.c=u
p.avi()},
pr(d,e){var w=this.c
w===$&&C.c()
return D.d.b8(w,new A.cnN(e))},
avi(){var w,v,u,t,s=this,r=s.d,q=r.d
q.a8(0)
if(s.pr(0,B.YS))q.K(0,72)
if(s.pr(0,B.YT))q.K(0,75)
q=s.pr(0,B.M0)
r.b=q
r.c=!q
r.w=s.pr(0,B.M1)
r.x=s.pr(0,B.YX)
r.y=s.pr(0,B.YY)
r.z=s.pr(0,B.YW)
r.Q=s.pr(0,B.YZ)
r.as=s.pr(0,B.Z_)
r.at=s.pr(0,B.YV)
q=r.f
q.a8(0)
r=r.r
r.a8(0)
w=s.c
w===$&&C.c()
w=D.d.gag(w)
v=new C.fx(w,new A.cnJ())
while(v.C()){u=w.gU(0)
t=u.c
u=u.b
if(t)r.K(0,u)
else q.K(0,u)}},
gcAD(){var w=this.c
w===$&&C.c()
return D.d.d9(w,new A.cnL())},
gcHN(){var w=this.c
w===$&&C.c()
return new C.a2(w,new A.cnM(),C.T(w).k("a2<1>")).gM(0)},
cHq(d){var w,v,u,t,s,r,q,p=this.c
p===$&&C.c()
w=p.length
v=d===86
u=d===92
t=0
for(;t<p.length;p.length===w||(0,C.L)(p),++t){s=p[t]
r=s.a
q=!0
if(B.vE.h(0,r).e!==d)if(!(r===B.M0&&v))r=r===B.M1&&u
else r=q
else r=q
if(r)return s}return null},
aWL(d){++this.f
return new A.eC(!1,d,!1,"")},
c2z(){var w,v,u,t,s=this;++s.r;--s.e
for(w=s.d,v=w.d,w=w.e,u=0;u<4;++u){t=B.at9[u]
if(!v.t(0,t))w.K(0,t)}w=s.e
if(w<=0){s.w=!0
return B.aTj}v=w===1?"life":"lives"
return new A.eC(!1,"ZAP! You touched a live wire and got a shock. All the breakers were knocked off. "+w+" "+v+" left. Turn the breaker OFF first.",!0,"shock")},
cRL(d,e){var w,v,u,t,s=this
if(s.w)return B.aTf
if(D.d.t(B.at9,e))return s.bA3(d,e)
w=s.cHq(e)
if(d==="inspect"){if(w==null||w.c)return B.aTi
return new A.eC(!0,"You look and test: "+B.vE.h(0,w.a).b,!1,"")}if(w==null||w.c)return new A.eC(!1,s.b?"Nothing needs fixing there.":"There is nothing wrong with this, so the "+C.t(B.Qi.h(0,d))+' is not needed. Use "Look and test" on things to find the problem.',!1,"")
v=B.vE.h(0,w.a)
if(d!==v.c){++s.f
return new A.eC(!1,s.b?"That is not the right tool for this problem.":"The "+C.t(B.Qi.h(0,d))+" does not fix this. "+v.b,!1,"")}u=v.f
if(u!==0){t=s.d
u=!t.d.t(0,u)&&!t.e.t(0,u)}else u=!1
if(u){if(s.b)return s.c2z()
return s.aWL("STOP! "+v.r+" The wires here are live (120 volts). Tap the breaker in the panel (with your hand) to switch it off.")}w.c=!0
s.avi()
return new A.eC(!0,v.d,!1,"")},
bA3(d,e){var w,v,u,t,s=this
if(d==="inspect"){w=s.d
if(w.d.t(0,e))w="This breaker has tripped: it sits in the middle (orange)."
else w=w.e.t(0,e)?"This breaker is switched OFF.":"This breaker is ON."
return new A.eC(!0,w,!1,"")}if(d!=="hand")return s.aWL(s.b?"Use your hand on a breaker.":"A breaker is switched with your hand, not with a "+C.t(B.Qi.h(0,d))+".")
w=s.d
v=w.d
if(v.t(0,e)){w=s.c
w===$&&C.c()
u=C.T(w).k("a2<1>")
t=C.B(new C.a2(w,new A.cnK(e),u),u.k("H.E"))
if(t.length!==0){D.d.gL(t).c=!0
s.avi()
return new A.eC(!0,B.vE.h(0,D.d.gL(t).a).d,!1,"")}v.W(0,e)
return B.aTN}w=w.e
if(w.t(0,e)){w.W(0,e)
return B.aTH}w.K(0,e)
return B.aTx}}
A.apM.prototype={
T(){var w,v=new A.Az(-0.3,0.48,46,B.Tp,$.aw())
v.f=80
w=new C.BB()
$.Cx()
w.iZ(0)
return new A.aCU(v,w)}}
A.aCU.prototype={
gJ(){var w=this.d
w===$&&C.c()
return w},
gCi(d){var w=this.e
if(w===$){this.a.toString
w=D.o.G(Date.now(),1e5)
this.e=w}return w},
a_(){var w,v=this
v.a1()
w=v.gCi(0)
w=A.h58(v.a.d,w)
v.d=w
v.r=A.af3(w.d)},
q(){var w=this.ax
if(w!=null)w.a9(0)
this.a2()},
c2E(d,e){var w=this,v=w.ax
if(v!=null)v.a9(0)
w.m(new A.ekw(w,d,e))
w.ax=C.cM(D.jp,new A.ekx(w))},
aWM(){this.f.lR(46,0.48,B.Tp,-0.3)
this.m(new A.ekl(this))},
c2D(d){var w,v,u=this
if(d===0)return
w=u.d
w===$&&C.c()
v=w.cRL(u.x,d)
w=v.a
if(w)A.y4()
else A.m4(180,220,0.25,"square")
if(v.d==="shock"){C.fK()
u.m(new A.ekq(u))
C.bN(D.mV,new A.ekr(u),x.P)}u.m(new A.eks(u,d))
w=w&&!v.c
u.c2E(v.b,w)
w=u.d
if(w.w)$.aT.x1$.push(new A.ekt(u))
else if(w.gcAD()&&!u.at){u.at=!0
$.aT.x1$.push(new A.eku(u))}},
cbf(){var w=null,v=this.c
v.toString
C.c9(w,w,!1,w,new A.eko(this),v,w,!0,!0,x.H)},
c2A(){var w=null,v=this.c
v.toString
C.c9(w,w,!0,w,new A.ekk(this),v,w,!0,!0,x.H)},
auF(){this.m(new A.ekm(this))
this.aWM()},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.d
g===$&&C.c()
g=g.gcHN()
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
for(o=0;o<3;++o)p.push(new C.C(D.Lk,new C.x(o<i.d.e?"\u2764\ufe0f":"\ud83d\udda4",h,D.zf,h,h,h,h,h,h,h,h,h),h))
v=A.WP(i.f,new A.ekE(i),s,u,r,h,new A.ekF(),t,h,h,i.gc2B(),i.gc2C(),v,C.a([C.A(p,D.m,h,D.e,D.Q,0,h,h)],q),h)
u=i.d.c
u===$&&C.c()
t=C.T(u)
t=new C.cQ(new C.a2(u,new A.ekG(),t.k("a2<1>")),new A.ekH(),t.k("cQ<1,n>")).aI(0,"  \xb7  ")
u=C.d("Customer: "+(t.length===0?"All fixed!":t),h,2,D.a2,h,h,h,B.aNN,h,h,h)
t=C.a([],q)
for(n=0;n<10;++n){m=B.dcd[n]
s=i.x===m?D.aI.j(0.25):D.c.j(0.07)
r=new C.aV(14,14)
p=i.x===m
l=p?D.aI:D.b5
k=new C.az(l,p?2:1,D.r,-1)
l=B.dhV.h(0,m)
p=C.W(l,i.x===m?D.aI:D.ad,h,h,h,19)
l=B.Qi.h(0,m)
l.toString
j=i.x===m?D.aI:D.c
t.push(new C.C(E.tj,C.aE(h,C.p(h,new C.co(D.aQ,D.e,D.j,D.m,h,D.p,h,0,C.a([p,D.bp,new C.x(l,h,new C.F(!0,j,h,h,h,h,12.5,D.I,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h),h,h,h,h,h,h,h,h,h)],q),h),D.f,h,h,new C.o(s,h,new C.bP(k,k,k,k),new C.bp(r,r,r,r),h,h,D.n),h,h,h,h,D.fQ,h,h,h),D.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new A.ekI(i,m),h,h,h,h,h,h,!1,D.a8),h))}g=C.a([new A.AT("Service call",D.aW,v,C.v(C.a([new C.bI(D.a3,h,h,u,h),D.P,new C.a6(h,52,C.cB(t,h,h,h,h,D.aQ,!1),h)],q),D.m,h,D.e,D.Q,0,D.p),new A.ekJ(i,d),""+g+"/"+w+" fixed",h)],q)
if(i.as)g.push(C.bY(0,C.e_(C.p(h,h,D.f,B.ae9,h,h,h,h,h,h,h,h,h,h),!0,h),0,0,0))
return new C.an(D.W,h,D.aa,D.q,g,h)},
cvo(d){return C.bW(E.nA,null,new A.ekC(this),d,!0,!0,!0,D.lO,!1,!1,x.H)},
$0(){return this.gJ().$0()},
$1(d){return this.gJ().$1(d)},
$2(d,e){return this.gJ().$2(d,e)},
$3$1(d,e,f,g){return this.gJ().$3$1(d,e,f,g)},
$1$2$onError(d,e,f){return this.gJ().$1$2$onError(d,e,f)},
$2$1(d,e,f){return this.gJ().$2$1(d,e,f)},
$1$1(d,e){return this.gJ().$1$1(d,e)},
$3(d,e,f){return this.gJ().$3(d,e,f)},
$4(d,e,f,g){return this.gJ().$4(d,e,f,g)},
$3$3(d,e,f,g,h,i){return this.gJ().$3$3(d,e,f,g,h,i)},
$2$2(d,e,f,g){return this.gJ().$2$2(d,e,f,g)},
$1$2(d,e,f){return this.gJ().$1$2(d,e,f)},
$4$cancelOnError$onDone$onError(d,e,f,g){return this.gJ().$4$cancelOnError$onDone$onError(d,e,f,g)},
$1$growable(d){return this.gJ().$1$growable(d)},
$1$highContrast(d){return this.gJ().$1$highContrast(d)},
$1$accessibilityFeatures(d){return this.gJ().$1$accessibilityFeatures(d)},
$2$disableAnimations$reduceMotion(d,e){return this.gJ().$2$disableAnimations$reduceMotion(d,e)},
$1$platformBrightness(d){return this.gJ().$1$platformBrightness(d)},
$1$accessibleNavigation(d){return this.gJ().$1$accessibleNavigation(d)},
$1$semanticsEnabled(d){return this.gJ().$1$semanticsEnabled(d)},
$1$locales(d){return this.gJ().$1$locales(d)},
$1$paragraphSpacingOverride(d){return this.gJ().$1$paragraphSpacingOverride(d)},
$1$wordSpacingOverride(d){return this.gJ().$1$wordSpacingOverride(d)},
$1$letterSpacingOverride(d){return this.gJ().$1$letterSpacingOverride(d)},
$1$lineHeightScaleFactorOverride(d){return this.gJ().$1$lineHeightScaleFactorOverride(d)},
$1$textScaleFactor(d){return this.gJ().$1$textScaleFactor(d)},
$13$buttons$change$device$kind$physicalX$physicalY$pressure$pressureMax$scale$signalKind$timeStamp$viewId(d,e,f,g,h,i,j,k,l,m,n,o,p){return this.gJ().$13$buttons$change$device$kind$physicalX$physicalY$pressure$pressureMax$scale$signalKind$timeStamp$viewId(d,e,f,g,h,i,j,k,l,m,n,o,p)},
$15$buttons$change$device$kind$onRespond$physicalX$physicalY$pressure$pressureMax$scrollDeltaX$scrollDeltaY$signalKind$timeStamp$viewId(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){return this.gJ().$15$buttons$change$device$kind$onRespond$physicalX$physicalY$pressure$pressureMax$scrollDeltaX$scrollDeltaY$signalKind$timeStamp$viewId(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r)},
$26$buttons$change$device$distance$distanceMax$kind$obscured$orientation$physicalX$physicalY$platformData$pressure$pressureMax$pressureMin$radiusMajor$radiusMax$radiusMin$radiusMinor$scale$scrollDeltaX$scrollDeltaY$signalKind$size$tilt$timeStamp$viewId(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0,a1,a2,a3,a4,a5){return this.gJ().$26$buttons$change$device$distance$distanceMax$kind$obscured$orientation$physicalX$physicalY$platformData$pressure$pressureMax$pressureMin$radiusMajor$radiusMax$radiusMin$radiusMinor$scale$scrollDeltaX$scrollDeltaY$signalKind$size$tilt$timeStamp$viewId(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0,a1,a2,a3,a4,a5)},
$6$device$pressureMax$signalKind$timeStamp$viewId(d,e,f,g,h,i){return this.gJ().$6$device$pressureMax$signalKind$timeStamp$viewId(d,e,f,g,h,i)},
$3$data$details$event(d,e,f){return this.gJ().$3$data$details$event(d,e,f)},
$13$buttons$change$device$kind$physicalX$physicalY$pressure$pressureMax$signalKind$tilt$timeStamp$viewId(d,e,f,g,h,i,j,k,l,m,n,o,p){return this.gJ().$13$buttons$change$device$kind$physicalX$physicalY$pressure$pressureMax$signalKind$tilt$timeStamp$viewId(d,e,f,g,h,i,j,k,l,m,n,o,p)},
$2$specification$zoneValues(d,e){return this.gJ().$2$specification$zoneValues(d,e)},
$5(d,e,f,g,h){return this.gJ().$5(d,e,f,g,h)},
$3$4(d,e,f,g,h,i,j){return this.gJ().$3$4(d,e,f,g,h,i,j)},
$2$4(d,e,f,g,h,i){return this.gJ().$2$4(d,e,f,g,h,i)},
$1$4(d,e,f,g,h){return this.gJ().$1$4(d,e,f,g,h)},
$3$6(d,e,f,g,h,i,j,k,l){return this.gJ().$3$6(d,e,f,g,h,i,j,k,l)},
$2$5(d,e,f,g,h,i,j){return this.gJ().$2$5(d,e,f,g,h,i,j)},
$1$style(d){return this.gJ().$1$style(d)},
$2$priority$scheduler(d,e){return this.gJ().$2$priority$scheduler(d,e)},
$1$allowPlatformDefault(d){return this.gJ().$1$allowPlatformDefault(d)},
$2$position(d,e){return this.gJ().$2$position(d,e)},
$1$debugBuildRoot(d){return this.gJ().$1$debugBuildRoot(d)},
$2$defaultBlurTileMode(d,e){return this.gJ().$2$defaultBlurTileMode(d,e)},
$2$aspect(d,e){return this.gJ().$2$aspect(d,e)},
$1$isLiveRegion(d){return this.gJ().$1$isLiveRegion(d)},
$1$namesRoute(d){return this.gJ().$1$namesRoute(d)},
$1$scopesRoute(d){return this.gJ().$1$scopesRoute(d)},
$1$isImage(d){return this.gJ().$1$isImage(d)},
$1$isInMutuallyExclusiveGroup(d){return this.gJ().$1$isInMutuallyExclusiveGroup(d)},
$1$isAccessibilityFocusBlocked(d){return this.gJ().$1$isAccessibilityFocusBlocked(d)},
$1$isFocused(d){return this.gJ().$1$isFocused(d)},
$1$isHeader(d){return this.gJ().$1$isHeader(d)},
$1$isExpanded(d){return this.gJ().$1$isExpanded(d)},
$1$isButton(d){return this.gJ().$1$isButton(d)},
$1$isSelected(d){return this.gJ().$1$isSelected(d)},
$1$isToggled(d){return this.gJ().$1$isToggled(d)},
$1$isChecked(d){return this.gJ().$1$isChecked(d)},
$1$isEnabled(d){return this.gJ().$1$isEnabled(d)},
$1$findFirstFocus(d){return this.gJ().$1$findFirstFocus(d)},
$6$alignment$alignmentPolicy$curve$duration$targetRenderObject(d,e,f,g,h,i){return this.gJ().$6$alignment$alignmentPolicy$curve$duration$targetRenderObject(d,e,f,g,h,i)},
$1$alpha(d){return this.gJ().$1$alpha(d)},
$1$2$retryIf(d,e,f){return this.gJ().$1$2$retryIf(d,e,f)},
$1$end(d){return this.gJ().$1$end(d)},
$1$text(d){return this.gJ().$1$text(d)},
$1$line(d){return this.gJ().$1$line(d)},
$2$color(d,e){return this.gJ().$2$color(d,e)},
$2$withDrive(d,e){return this.gJ().$2$withDrive(d,e)},
$1$scheme(d){return this.gJ().$1$scheme(d)},
$1$2$arguments(d,e,f){return this.gJ().$1$2$arguments(d,e,f)},
$1$0(d){return this.gJ().$1$0(d)},
$3$replace$state(d,e,f){return this.gJ().$3$replace$state(d,e,f)},
$2$params(d,e){return this.gJ().$2$params(d,e)},
$3$onAction$onChange(d,e,f){return this.gJ().$3$onAction$onChange(d,e,f)},
$2$composingBaseOffset$composingExtentOffset(d,e){return this.gJ().$2$composingBaseOffset$composingExtentOffset(d,e)},
$2$baseOffset$extentOffset(d,e){return this.gJ().$2$baseOffset$extentOffset(d,e)},
$2$imperativeRemoval(d,e){return this.gJ().$2$imperativeRemoval(d,e)},
$1$range(d){return this.gJ().$1$range(d)},
$1$colorSpace(d){return this.gJ().$1$colorSpace(d)},
$3$forgottenChildren(d,e,f){return this.gJ().$3$forgottenChildren(d,e,f)},
$2$after(d,e){return this.gJ().$2$after(d,e)},
$1$reversed(d){return this.gJ().$1$reversed(d)},
$3$imperativeRemoval$isReplaced(d,e,f){return this.gJ().$3$imperativeRemoval$isReplaced(d,e,f)},
$2$alignmentPolicy(d,e){return this.gJ().$2$alignmentPolicy(d,e)},
$2$ignoreCurrentFocus(d,e){return this.gJ().$2$ignoreCurrentFocus(d,e)},
$3$alignmentPolicy$forward(d,e,f){return this.gJ().$3$alignmentPolicy$forward(d,e,f)},
$5$alignment$alignmentPolicy$curve$duration(d,e,f,g,h){return this.gJ().$5$alignment$alignmentPolicy$curve$duration(d,e,f,g,h)},
$1$5(d,e,f,g,h,i){return this.gJ().$1$5(d,e,f,g,h,i)},
$3$textDirection(d,e,f){return this.gJ().$3$textDirection(d,e,f)},
$3$debugReport(d,e,f){return this.gJ().$3$debugReport(d,e,f)},
$1$padding(d){return this.gJ().$1$padding(d)},
$2$3(d,e,f,g,h){return this.gJ().$2$3(d,e,f,g,h)},
$3$onDone$onError(d,e,f){return this.gJ().$3$onDone$onError(d,e,f)},
$2$0(d,e){return this.gJ().$2$0(d,e)},
$1$queryParameters(d){return this.gJ().$1$queryParameters(d)},
$2$headers(d,e){return this.gJ().$2$headers(d,e)},
$3$body$headers(d,e,f){return this.gJ().$3$body$headers(d,e,f)},
$4$isLocal$mimeType(d,e,f,g){return this.gJ().$4$isLocal$mimeType(d,e,f,g)},
$2$onError(d,e){return this.gJ().$2$onError(d,e)},
$13$blRadiusX$blRadiusY$bottom$brRadiusX$brRadiusY$left$right$tlRadiusX$tlRadiusY$top$trRadiusX$trRadiusY$uniformRadii(d,e,f,g,h,i,j,k,l,m,n,o,p){return this.gJ().$13$blRadiusX$blRadiusY$bottom$brRadiusX$brRadiusY$left$right$tlRadiusX$tlRadiusY$top$trRadiusX$trRadiusY$uniformRadii(d,e,f,g,h,i,j,k,l,m,n,o,p)},
$1$minimum(d){return this.gJ().$1$minimum(d)},
$2$reversed(d,e){return this.gJ().$2$reversed(d,e)},
$1$reverse(d){return this.gJ().$1$reverse(d)},
$2$textDirection(d,e){return this.gJ().$2$textDirection(d,e)},
$4$borderRadius$circularity$eccentricity$side(d,e,f,g){return this.gJ().$4$borderRadius$circularity$eccentricity$side(d,e,f,g)},
$3$context$exception$stack(d,e,f){return this.gJ().$3$context$exception$stack(d,e,f)},
$2$exception$stack(d,e){return this.gJ().$2$exception$stack(d,e)},
$2$getTargetSize(d,e){return this.gJ().$2$getTargetSize(d,e)},
$4$allowUpscaling$cacheHeight$cacheWidth(d,e,f,g){return this.gJ().$4$allowUpscaling$cacheHeight$cacheWidth(d,e,f,g)},
$5$constraints$delegate$parent$resizable$title(d,e,f,g,h){return this.gJ().$5$constraints$delegate$parent$resizable$title(d,e,f,g,h)},
$2$maxWidth$minWidth(d,e){return this.gJ().$2$maxWidth$minWidth(d,e)},
$2$maxHeight$minHeight(d,e){return this.gJ().$2$maxHeight$minHeight(d,e)},
$1$iconTheme(d){return this.gJ().$1$iconTheme(d)},
$1$side(d){return this.gJ().$1$side(d)},
$1$color(d){return this.gJ().$1$color(d)},
$2$color$fontSize(d,e){return this.gJ().$2$color$fontSize(d,e)},
$3$padding$viewInsets$viewPadding(d,e,f){return this.gJ().$3$padding$viewInsets$viewPadding(d,e,f)},
$1$withDelay(d){return this.gJ().$1$withDelay(d)},
$3$cancel$down$reason(d,e,f){return this.gJ().$3$cancel$down$reason(d,e,f)},
$2$down$up(d,e){return this.gJ().$2$down$up(d,e)},
$1$down(d){return this.gJ().$1$down(d)},
$1$move(d){return this.gJ().$1$move(d)},
$1$brightness(d){return this.gJ().$1$brightness(d)},
$9$applyTextScaling$color$fill$grade$opacity$opticalSize$shadows$size$weight(d,e,f,g,h,i,j,k,l){return this.gJ().$9$applyTextScaling$color$fill$grade$opacity$opticalSize$shadows$size$weight(d,e,f,g,h,i,j,k,l)},
$2$minHeight$minWidth(d,e){return this.gJ().$2$minHeight$minWidth(d,e)},
$2$isPrivate$localRole(d,e){return this.gJ().$2$isPrivate$localRole(d,e)},
$7$code$collaboratorEmails$isPrivate$localRole$members$name$ownerEmail(d,e,f,g,h,i,j){return this.gJ().$7$code$collaboratorEmails$isPrivate$localRole$members$name$ownerEmail(d,e,f,g,h,i,j)},
$2$localRole$ownerEmail(d,e){return this.gJ().$2$localRole$ownerEmail(d,e)},
$1$opacity(d){return this.gJ().$1$opacity(d)},
$3$foregroundColor$iconSize$overlayColor(d,e,f){return this.gJ().$3$foregroundColor$iconSize$overlayColor(d,e,f)},
$2$maxScaleFactor$minScaleFactor(d,e){return this.gJ().$2$maxScaleFactor$minScaleFactor(d,e)},
$1$textScaler(d){return this.gJ().$1$textScaler(d)},
$1$velocity(d){return this.gJ().$1$velocity(d)},
$3$dimensions$textScaler(d,e,f){return this.gJ().$3$dimensions$textScaler(d,e,f)},
$3$allowedExtensions$type$withData(d,e,f){return this.gJ().$3$allowedExtensions$type$withData(d,e,f)},
$1$ownerEmail(d){return this.gJ().$1$ownerEmail(d)},
$3$cancelOnError$onError(d,e,f){return this.gJ().$3$cancelOnError$onError(d,e,f)},
$6$availableCameras$cameraDirection$isInitialized$isRunning$size$torchState(d,e,f,g,h,i){return this.gJ().$6$availableCameras$cameraDirection$isInitialized$isRunning$size$torchState(d,e,f,g,h,i)},
$7$cameraDirection$error$isInitialized$isRunning$size$torchState$zoomScale(d,e,f,g,h,i,j){return this.gJ().$7$cameraDirection$error$isInitialized$isRunning$size$torchState$zoomScale(d,e,f,g,h,i,j)},
$3$cancelOnError$onDone(d,e,f){return this.gJ().$3$cancelOnError$onDone(d,e,f)},
$1$zoomScale(d){return this.gJ().$1$zoomScale(d)},
$1$torchState(d){return this.gJ().$1$torchState(d)},
$1$visibleChildrenPerParent(d){return this.gJ().$1$visibleChildrenPerParent(d)},
$1$contentPadding(d){return this.gJ().$1$contentPadding(d)},
$3$boxHeightStyle(d,e,f){return this.gJ().$3$boxHeightStyle(d,e,f)},
$3$includePlaceholders$includeSemanticsLabels(d,e,f){return this.gJ().$3$includePlaceholders$includeSemanticsLabels(d,e,f)},
$4$boxHeightStyle$boxWidthStyle(d,e,f,g){return this.gJ().$4$boxHeightStyle$boxWidthStyle(d,e,f,g)},
$1$selection(d){return this.gJ().$1$selection(d)},
$1$rect(d){return this.gJ().$1$rect(d)},
$4$curve$descendant$duration$rect(d,e,f,g){return this.gJ().$4$curve$descendant$duration$rect(d,e,f,g)},
$2$cause$from(d,e){return this.gJ().$2$cause$from(d,e)},
$1$composing(d){return this.gJ().$1$composing(d)},
$1$affinity(d){return this.gJ().$1$affinity(d)},
$3$code$details$message(d,e,f){return this.gJ().$3$code$details$message(d,e,f)},
$2$code$message(d,e){return this.gJ().$2$code$message(d,e)},
$2$composing$selection(d,e){return this.gJ().$2$composing$selection(d,e)},
$25$background$backgroundColor$color$debugLabel$decoration$decorationColor$decorationStyle$decorationThickness$fontFamily$fontFamilyFallback$fontFeatures$fontSize$fontStyle$fontVariations$fontWeight$foreground$height$leadingDistribution$letterSpacing$locale$overflow$package$shadows$textBaseline$wordSpacing(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0,a1,a2,a3,a4){return this.gJ().$25$background$backgroundColor$color$debugLabel$decoration$decorationColor$decorationStyle$decorationThickness$fontFamily$fontFamilyFallback$fontFeatures$fontSize$fontStyle$fontVariations$fontWeight$foreground$height$leadingDistribution$letterSpacing$locale$overflow$package$shadows$textBaseline$wordSpacing(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0,a1,a2,a3,a4)},
$3$context$style$withComposing(d,e,f){return this.gJ().$3$context$style$withComposing(d,e,f)},
$5$baseline$baselineOffset(d,e,f,g,h){return this.gJ().$5$baseline$baselineOffset(d,e,f,g,h)},
$2$above(d,e){return this.gJ().$2$above(d,e)},
$2$below(d,e){return this.gJ().$2$below(d,e)},
$1$bottom(d){return this.gJ().$1$bottom(d)},
$3$curve$duration$rect(d,e,f){return this.gJ().$3$curve$duration$rect(d,e,f)},
$2$affinity$extentOffset(d,e){return this.gJ().$2$affinity$extentOffset(d,e)},
$5$alpha$blue$colorSpace$green$red(d,e,f,g,h){return this.gJ().$5$alpha$blue$colorSpace$green$red(d,e,f,g,h)},
$2$overscroll$scrollbars(d,e){return this.gJ().$2$overscroll$scrollbars(d,e)},
$2$initialRestore(d,e){return this.gJ().$2$initialRestore(d,e)},
$1$direction(d){return this.gJ().$1$direction(d)},
$1$hasImplicitScrolling(d){return this.gJ().$1$hasImplicitScrolling(d)},
$4$axis$rect(d,e,f,g){return this.gJ().$4$axis$rect(d,e,f,g)},
$1$isReadOnly(d){return this.gJ().$1$isReadOnly(d)},
$1$isTextField(d){return this.gJ().$1$isTextField(d)},
$1$isMultiline(d){return this.gJ().$1$isMultiline(d)},
$1$isObscured(d){return this.gJ().$1$isObscured(d)},
$1$spellCheckService(d){return this.gJ().$1$spellCheckService(d)},
$1$height(d){return this.gJ().$1$height(d)},
$1$borderSide(d){return this.gJ().$1$borderSide(d)},
$35$alignLabelWithHint$border$constraints$contentPadding$counterStyle$disabledBorder$enabledBorder$errorBorder$errorMaxLines$errorStyle$fillColor$filled$floatingLabelAlignment$floatingLabelBehavior$floatingLabelStyle$focusColor$focusedBorder$focusedErrorBorder$helperMaxLines$helperStyle$hintFadeDuration$hintMaxLines$hintStyle$hoverColor$iconColor$isCollapsed$isDense$labelStyle$prefixIconColor$prefixIconConstraints$prefixStyle$suffixIconColor$suffixIconConstraints$suffixStyle$visualDensity(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4){return this.gJ().$35$alignLabelWithHint$border$constraints$contentPadding$counterStyle$disabledBorder$enabledBorder$errorBorder$errorMaxLines$errorStyle$fillColor$filled$floatingLabelAlignment$floatingLabelBehavior$floatingLabelStyle$focusColor$focusedBorder$focusedErrorBorder$helperMaxLines$helperStyle$hintFadeDuration$hintMaxLines$hintStyle$hoverColor$iconColor$isCollapsed$isDense$labelStyle$prefixIconColor$prefixIconConstraints$prefixStyle$suffixIconColor$suffixIconConstraints$suffixStyle$visualDensity(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4)},
$2$enabled$hintMaxLines(d,e){return this.gJ().$2$enabled$hintMaxLines(d,e)},
$4$counterStyle$counterText$errorText$semanticCounterText(d,e,f,g){return this.gJ().$4$counterStyle$counterText$errorText$semanticCounterText(d,e,f,g)},
$2$counterText$semanticCounterText(d,e){return this.gJ().$2$counterText$semanticCounterText(d,e)},
$1$extentOffset(d){return this.gJ().$1$extentOffset(d)},
$2$body$title(d,e){return this.gJ().$2$body$title(d,e)},
$1$chapters(d){return this.gJ().$1$chapters(d)},
$1$picture(d){return this.gJ().$1$picture(d)},
$1$photo(d){return this.gJ().$1$photo(d)},
$3$composing$selection$text(d,e,f){return this.gJ().$3$composing$selection$text(d,e,f)},
$1$scrollbars(d){return this.gJ().$1$scrollbars(d)},
$3$rect(d,e,f){return this.gJ().$3$rect(d,e,f)},
$2$hitTest$paintTransform(d,e){return this.gJ().$2$hitTest$paintTransform(d,e)},
$3$crossAxisPosition$mainAxisPosition(d,e,f){return this.gJ().$3$crossAxisPosition$mainAxisPosition(d,e,f)},
$2$padding$viewPadding(d,e){return this.gJ().$2$padding$viewPadding(d,e)},
$2$isClosing(d,e){return this.gJ().$2$isClosing(d,e)},
$3$parentUsesSize(d,e,f){return this.gJ().$3$parentUsesSize(d,e,f)},
$1$inherited(d){return this.gJ().$1$inherited(d)},
$6$font$fontBold$fontBoldItalic$fontFallback$fontItalic$fontNormal(d,e,f,g,h,i){return this.gJ().$6$font$fontBold$fontBoldItalic$fontFallback$fontItalic$fontNormal(d,e,f,g,h,i)},
$1$lineSpacing(d){return this.gJ().$1$lineSpacing(d)},
$1$fontSize(d){return this.gJ().$1$fontSize(d)},
$2$fontSize$fontWeight(d,e){return this.gJ().$2$fontSize$fontWeight(d,e)},
$2$letterSpacing(d,e){return this.gJ().$2$letterSpacing(d,e)},
$5$font$fontBold$fontBoldItalic$fontItalic$fontNormal(d,e,f,g,h){return this.gJ().$5$font$fontBold$fontBoldItalic$fontItalic$fontNormal(d,e,f,g,h)},
$4$annotation$baseline$style$text(d,e,f,g){return this.gJ().$4$annotation$baseline$style$text(d,e,f,g)},
$1$noPixels(d){return this.gJ().$1$noPixels(d)},
$6(d,e,f,g,h,i){return this.gJ().$6(d,e,f,g,h,i)},
$2$frame(d,e){return this.gJ().$2$frame(d,e)},
$2$length$position(d,e){return this.gJ().$2$length$position(d,e)},
$1$numChannels(d){return this.gJ().$1$numChannels(d)},
$2$offset(d,e){return this.gJ().$2$offset(d,e)},
$1$width(d){return this.gJ().$1$width(d)},
$2$heading(d,e){return this.gJ().$2$heading(d,e)},
$1$advanceWidth(d){return this.gJ().$1$advanceWidth(d)},
$1$format(d){return this.gJ().$1$format(d)},
$1$includeChildren(d){return this.gJ().$1$includeChildren(d)},
$1$cover(d){return this.gJ().$1$cover(d)},
$3$imageQuality$maxWidth$source(d,e,f){return this.gJ().$3$imageQuality$maxWidth$source(d,e,f)},
$2$options$source(d,e){return this.gJ().$2$options$source(d,e)},
$1$font(d){return this.gJ().$1$font(d)},
$1$position(d){return this.gJ().$1$position(d)},
$1$resetColors(d){return this.gJ().$1$resetColors(d)},
$1$bg2(d){return this.gJ().$1$bg2(d)},
$1$accent(d){return this.gJ().$1$accent(d)},
$1$ink(d){return this.gJ().$1$ink(d)},
$1$bg1(d){return this.gJ().$1$bg1(d)},
$4$font$position$resetColors$template(d,e,f,g){return this.gJ().$4$font$position$resetColors$template(d,e,f,g)},
$1$header(d){return this.gJ().$1$header(d)},
$3$author$subtitle$title(d,e,f){return this.gJ().$3$author$subtitle$title(d,e,f)},
$1$maxScaleFactor(d){return this.gJ().$1$maxScaleFactor(d)},
$1$task(d){return this.gJ().$1$task(d)},
$1$oldWidget(d){return this.gJ().$1$oldWidget(d)},
$1$isSlider(d){return this.gJ().$1$isSlider(d)},
$3$isDiscrete$parentBox$sliderTheme(d,e,f){return this.gJ().$3$isDiscrete$parentBox$sliderTheme(d,e,f)},
$1$ribbon(d){return this.gJ().$1$ribbon(d)},
$1$texture(d){return this.gJ().$1$texture(d)},
$1$frame(d){return this.gJ().$1$frame(d)},
$1$titleSize(d){return this.gJ().$1$titleSize(d)},
$1$foil(d){return this.gJ().$1$foil(d)},
$1$emblem(d){return this.gJ().$1$emblem(d)},
$2$backgroundColor$foregroundColor(d,e){return this.gJ().$2$backgroundColor$foregroundColor(d,e)},
$11$author$emblem$foil$frame$position$ribbon$style$subtitle$texture$title$titleSize(d,e,f,g,h,i,j,k,l,m,n){return this.gJ().$11$author$emblem$foil$frame$position$ribbon$style$subtitle$texture$title$titleSize(d,e,f,g,h,i,j,k,l,m,n)},
$1$members(d){return this.gJ().$1$members(d)},
$3$collaboratorEmails$localRole$ownerEmail(d,e,f){return this.gJ().$3$collaboratorEmails$localRole$ownerEmail(d,e,f)},
$1$isPrivate(d){return this.gJ().$1$isPrivate(d)},
$2$code$name(d,e){return this.gJ().$2$code$name(d,e)},
$2$label$value(d,e){return this.gJ().$2$label$value(d,e)},
$3$icon$label$onTap(d,e,f){return this.gJ().$3$icon$label$onTap(d,e,f)},
$4$color$icon$label$onTap(d,e,f,g){return this.gJ().$4$color$icon$label$onTap(d,e,f,g)},
$2$fallback(d,e){return this.gJ().$2$fallback(d,e)},
$1$suffixIcon(d){return this.gJ().$1$suffixIcon(d)},
$4$activeTrackColor$inactiveTrackColor$overlayColor$thumbColor(d,e,f,g){return this.gJ().$4$activeTrackColor$inactiveTrackColor$overlayColor$thumbColor(d,e,f,g)},
$4$imageQuality$maxHeight$maxWidth$source(d,e,f,g){return this.gJ().$4$imageQuality$maxHeight$maxWidth$source(d,e,f,g)},
$1$border(d){return this.gJ().$1$border(d)},
$1$errorText(d){return this.gJ().$1$errorText(d)},
$2$index(d,e){return this.gJ().$2$index(d,e)},
$2$canvas$page(d,e){return this.gJ().$2$canvas$page(d,e)},
$4$bold$valueColor(d,e,f,g){return this.gJ().$4$bold$valueColor(d,e,f,g)},
$1$items(d){return this.gJ().$1$items(d)},
$3$hint(d,e,f){return this.gJ().$3$hint(d,e,f)},
$1$thumbnailPath(d){return this.gJ().$1$thumbnailPath(d)},
$6$icon$iconColor$onTap$p$subtitle$title(d,e,f,g,h,i){return this.gJ().$6$icon$iconColor$onTap$p$subtitle$title(d,e,f,g,h,i)},
$4$copyText(d,e,f,g){return this.gJ().$4$copyText(d,e,f,g)},
$5$amount$memberEmail$memberName$registryId$walletDeposit(d,e,f,g,h){return this.gJ().$5$amount$memberEmail$memberName$registryId$walletDeposit(d,e,f,g,h)},
$2$icon(d,e){return this.gJ().$2$icon(d,e)},
$3$helper$icon(d,e,f){return this.gJ().$3$helper$icon(d,e,f)},
$3$fileOptions(d,e,f){return this.gJ().$3$fileOptions(d,e,f)},
$2$defaultColor(d,e){return this.gJ().$2$defaultColor(d,e)},
$2$child$context(d,e){return this.gJ().$2$child$context(d,e)},
$1$2$params(d,e,f){return this.gJ().$1$2$params(d,e,f)},
$2$prefer(d,e){return this.gJ().$2$prefer(d,e)},
$1$child(d){return this.gJ().$1$child(d)},
$3$mimeType(d,e,f){return this.gJ().$3$mimeType(d,e,f)},
$3$imageQuality$limit$maxWidth(d,e,f){return this.gJ().$3$imageQuality$limit$maxWidth(d,e,f)},
$1$options(d){return this.gJ().$1$options(d)},
$3$begin$child$end(d,e,f){return this.gJ().$3$begin$child$end(d,e,f)},
$8$enableDomStorage$enableJavaScript$headers$universalLinksOnly$useSafariVC$useWebView$webOnlyWindowName(d,e,f,g,h,i,j,k){return this.gJ().$8$enableDomStorage$enableJavaScript$headers$universalLinksOnly$useSafariVC$useWebView$webOnlyWindowName(d,e,f,g,h,i,j,k)},
$5$onChanged$textCapitalization(d,e,f,g,h){return this.gJ().$5$onChanged$textCapitalization(d,e,f,g,h)},
$6$hint$onChanged$textCapitalization(d,e,f,g,h,i){return this.gJ().$6$hint$onChanged$textCapitalization(d,e,f,g,h,i)},
$5$hint$onChanged(d,e,f,g,h){return this.gJ().$5$hint$onChanged(d,e,f,g,h)},
$6$hint$maxLines$onChanged(d,e,f,g,h,i){return this.gJ().$6$hint$maxLines$onChanged(d,e,f,g,h,i)},
$5$label$primary(d,e,f,g,h){return this.gJ().$5$label$primary(d,e,f,g,h)},
$5$dot$tip(d,e,f,g,h){return this.gJ().$5$dot$tip(d,e,f,g,h)},
$5$badge$label(d,e,f,g,h){return this.gJ().$5$badge$label(d,e,f,g,h)},
$6$badge$caption$tip(d,e,f,g,h,i){return this.gJ().$6$badge$caption$tip(d,e,f,g,h,i)},
$5$caption$tip(d,e,f,g,h){return this.gJ().$5$caption$tip(d,e,f,g,h)},
$4$imageQuality$maxWidth$preferredCameraDevice$source(d,e,f,g){return this.gJ().$4$imageQuality$maxWidth$preferredCameraDevice$source(d,e,f,g)},
$4$colors(d,e,f,g){return this.gJ().$4$colors(d,e,f,g)},
$4$busy(d,e,f,g){return this.gJ().$4$busy(d,e,f,g)},
$2$hint(d,e){return this.gJ().$2$hint(d,e)},
$6$animation$controller$max$min$target$tween(d,e,f,g,h,i){return this.gJ().$6$animation$controller$max$min$target$tween(d,e,f,g,h,i)},
$1$hour(d){return this.gJ().$1$hour(d)},
$1$minute(d){return this.gJ().$1$minute(d)},
$3$error$errorText$hintText(d,e,f){return this.gJ().$3$error$errorText$hintText(d,e,f)},
$2$suffixIcon$suffixIconConstraints(d,e){return this.gJ().$2$suffixIcon$suffixIconConstraints(d,e)},
$1$fillColor(d){return this.gJ().$1$fillColor(d)},
$4$overscroll$physics$platform$scrollbars(d,e,f,g){return this.gJ().$4$overscroll$physics$platform$scrollbars(d,e,f,g)},
$3$colorScheme$dialogTheme$timePickerTheme(d,e,f){return this.gJ().$3$colorScheme$dialogTheme$timePickerTheme(d,e,f)},
$2$onTimeout(d,e){return this.gJ().$2$onTimeout(d,e)},
$2$test(d,e){return this.gJ().$2$test(d,e)},
$1$overscroll(d){return this.gJ().$1$overscroll(d)},
$1$inherit(d){return this.gJ().$1$inherit(d)},
$2$fit(d,e){return this.gJ().$2$fit(d,e)},
$3$weight(d,e,f){return this.gJ().$3$weight(d,e,f)},
$3$isDark$label$value(d,e,f){return this.gJ().$3$isDark$label$value(d,e,f)},
$6$color$icon$isDark$label$onTap$value(d,e,f,g,h,i){return this.gJ().$6$color$icon$isDark$label$onTap$value(d,e,f,g,h,i)},
$1$orderId(d){return this.gJ().$1$orderId(d)},
$1$url(d){return this.gJ().$1$url(d)},
$2$headers$method(d,e){return this.gJ().$2$headers$method(d,e)},
$3$2$method$url(d,e,f,g,h){return this.gJ().$3$2$method$url(d,e,f,g,h)},
$3$3$body$method$url(d,e,f,g,h,i){return this.gJ().$3$3$body$method$url(d,e,f,g,h,i)},
$1$isPlaying(d){return this.gJ().$1$isPlaying(d)},
$3$caption$isCompleted$position(d,e,f){return this.gJ().$3$caption$isCompleted$position(d,e,f)},
$1$isLooping(d){return this.gJ().$1$isLooping(d)},
$6$duration$errorDescription$isCompleted$isInitialized$rotationCorrection$size(d,e,f,g,h,i){return this.gJ().$6$duration$errorDescription$isCompleted$isInitialized$rotationCorrection$size(d,e,f,g,h,i)},
$1$isCompleted(d){return this.gJ().$1$isCompleted(d)},
$1$buffered(d){return this.gJ().$1$buffered(d)},
$1$isBuffering(d){return this.gJ().$1$isBuffering(d)},
$2$isCompleted$isPlaying(d,e){return this.gJ().$2$isCompleted$isPlaying(d,e)},
$3$hintText$prefixIcon(d,e,f){return this.gJ().$3$hintText$prefixIcon(d,e,f)},
$1$locationSettings(d){return this.gJ().$1$locationSettings(d)},
$3$enableHighAccuracy$maximumAge$timeout(d,e,f){return this.gJ().$3$enableHighAccuracy$maximumAge$timeout(d,e,f)},
$2$hitTest$paintOffset(d,e){return this.gJ().$2$hitTest$paintOffset(d,e)},
$3$height$width(d,e,f){return this.gJ().$3$height$width(d,e,f)},
$1$force(d){return this.gJ().$1$force(d)},
$3$maxDuration$preferredCameraDevice$source(d,e,f){return this.gJ().$3$maxDuration$preferredCameraDevice$source(d,e,f)},
$1$silent(d){return this.gJ().$1$silent(d)},
$2$lockFor(d,e){return this.gJ().$2$lockFor(d,e)},
$6$helps(d,e,f,g,h,i){return this.gJ().$6$helps(d,e,f,g,h,i)},
$1$useStateColumn(d){return this.gJ().$1$useStateColumn(d)},
$4$copyable(d,e,f,g){return this.gJ().$4$copyable(d,e,f,g)},
$2$child$last(d,e){return this.gJ().$2$child$last(d,e)},
$6$accent$date$icon$subtitle$title(d,e,f,g,h,i){return this.gJ().$6$accent$date$icon$subtitle$title(d,e,f,g,h,i)},
$5$bg$fg$icon$onPressed$tooltip(d,e,f,g,h){return this.gJ().$5$bg$fg$icon$onPressed$tooltip(d,e,f,g,h)},
$4$ageAt(d,e,f,g){return this.gJ().$4$ageAt(d,e,f,g)},
$2$prefix(d,e){return this.gJ().$2$prefix(d,e)},
$7$accent$child$expanded$icon$onToggle$subtitle$title(d,e,f,g,h,i,j){return this.gJ().$7$accent$child$expanded$icon$onToggle$subtitle$title(d,e,f,g,h,i,j)},
$3$phone(d,e,f){return this.gJ().$3$phone(d,e,f)},
$5$enableScrollToHighlight$excludeSemantics$useMaterial3(d,e,f,g,h){return this.gJ().$5$enableScrollToHighlight$excludeSemantics$useMaterial3(d,e,f,g,h)},
$4$focusedIndex$useMaterial3(d,e,f,g){return this.gJ().$4$focusedIndex$useMaterial3(d,e,f,g)},
$1$minimumSize(d){return this.gJ().$1$minimumSize(d)},
$4$backgroundColor$foregroundColor$iconColor$overlayColor(d,e,f,g){return this.gJ().$4$backgroundColor$foregroundColor$iconColor$overlayColor(d,e,f,g)},
$1$prefixIcon(d){return this.gJ().$1$prefixIcon(d)},
$1$relatives(d){return this.gJ().$1$relatives(d)},
$1$relation(d){return this.gJ().$1$relation(d)},
$1$gender(d){return this.gJ().$1$gender(d)},
$5$accent$delayMs$icon$onTap$title(d,e,f,g,h){return this.gJ().$5$accent$delayMs$icon$onTap$title(d,e,f,g,h)},
$3$size$weight(d,e,f){return this.gJ().$3$size$weight(d,e,f)},
$4$align$size$weight(d,e,f,g){return this.gJ().$4$align$size$weight(d,e,f,g)},
$2$label(d,e){return this.gJ().$2$label(d,e)},
$1$state(d){return this.gJ().$1$state(d)},
$3$amount$description$fund(d,e,f){return this.gJ().$3$amount$description$fund(d,e,f)},
$3$amount$description$spendingId(d,e,f){return this.gJ().$3$amount$description$spendingId(d,e,f)},
$4$hideBudget$hideSpendings$hideTransactions$state(d,e,f,g){return this.gJ().$4$hideBudget$hideSpendings$hideTransactions$state(d,e,f,g)},
$3$label$onChanged$value(d,e,f){return this.gJ().$3$label$onChanged$value(d,e,f)},
$2$amount$state(d,e){return this.gJ().$2$amount$state(d,e)},
$1$colorScheme(d){return this.gJ().$1$colorScheme(d)},
$3$amount$description$direction(d,e,f){return this.gJ().$3$amount$description$direction(d,e,f)},
$4$confirmLabel$message$stepNum$title(d,e,f,g){return this.gJ().$4$confirmLabel$message$stepNum$title(d,e,f,g)},
$5$confirmLabel$message$requireTypeAllStates$stepNum$title(d,e,f,g,h){return this.gJ().$5$confirmLabel$message$requireTypeAllStates$stepNum$title(d,e,f,g,h)},
$4$hint$multiline(d,e,f,g){return this.gJ().$4$hint$multiline(d,e,f,g)},
$3$multiline(d,e,f){return this.gJ().$3$multiline(d,e,f)},
$2$campaignId$campaignTitle(d,e){return this.gJ().$2$campaignId$campaignTitle(d,e)},
$5$color$icon$onCopyTap$title$value(d,e,f,g,h){return this.gJ().$5$color$icon$onCopyTap$title$value(d,e,f,g,h)},
$4$big(d,e,f,g){return this.gJ().$4$big(d,e,f,g)},
$4$color$icon$onTap$tooltip(d,e,f,g){return this.gJ().$4$color$icon$onTap$tooltip(d,e,f,g)},
$3$color(d,e,f){return this.gJ().$3$color(d,e,f)},
$3$copied$error$state(d,e,f){return this.gJ().$3$copied$error$state(d,e,f)},
$2$spin(d,e){return this.gJ().$2$spin(d,e)},
$1$appIcon(d){return this.gJ().$1$appIcon(d)},
$3$bold$depth(d,e,f){return this.gJ().$3$bold$depth(d,e,f)},
$2$depth(d,e){return this.gJ().$2$depth(d,e)},
$4$depth$onTap$selected(d,e,f,g){return this.gJ().$4$depth$onTap$selected(d,e,f,g)},
$3$depth$selected(d,e,f){return this.gJ().$3$depth$selected(d,e,f)},
$2$data$kind(d,e){return this.gJ().$2$data$kind(d,e)},
$1$updatedAt(d){return this.gJ().$1$updatedAt(d)},
$1$publicUrl(d){return this.gJ().$1$publicUrl(d)},
$8$customCode$database$id$publicUrl$publishedAt$reviewNote$slug$status(d,e,f,g,h,i,j,k){return this.gJ().$8$customCode$database$id$publicUrl$publishedAt$reviewNote$slug$status(d,e,f,g,h,i,j,k)},
$3$appIcon$tagline$themeColor(d,e,f){return this.gJ().$3$appIcon$tagline$themeColor(d,e,f)},
$6$id$publicUrl$publishedAt$reviewNote$slug$status(d,e,f,g,h,i){return this.gJ().$6$id$publicUrl$publishedAt$reviewNote$slug$status(d,e,f,g,h,i)},
$3$maxLines(d,e,f){return this.gJ().$3$maxLines(d,e,f)},
$3$keyboard(d,e,f){return this.gJ().$3$keyboard(d,e,f)},
$1$amountColor(d){return this.gJ().$1$amountColor(d)},
$4$on$tooltip(d,e,f,g){return this.gJ().$4$on$tooltip(d,e,f,g)},
$3$tooltip(d,e,f){return this.gJ().$3$tooltip(d,e,f)},
$2$ownerEmail$updatedAt(d,e){return this.gJ().$2$ownerEmail$updatedAt(d,e)},
$3$allowMultiple$type$withData(d,e,f){return this.gJ().$3$allowMultiple$type$withData(d,e,f)},
$1$screens(d){return this.gJ().$1$screens(d)},
$3$cancelLeap$leapingIndicator(d,e,f){return this.gJ().$3$cancelLeap$leapingIndicator(d,e,f)},
$3$hasGesture$source(d,e,f){return this.gJ().$3$hasGesture$source(d,e,f)},
$4$hasGesture$source(d,e,f,g){return this.gJ().$4$hasGesture$source(d,e,f,g)},
$1$3$manager$onTick$sum(d,e,f,g){return this.gJ().$1$3$manager$onTick$sum(d,e,f,g)},
$2$camera$tileZoom(d,e){return this.gJ().$2$camera$tileZoom(d,e)},
$2$fadeIn$instantaneous(d,e){return this.gJ().$2$fadeIn$instantaneous(d,e)},
$1$additionalHeaders(d){return this.gJ().$1$additionalHeaders(d)},
$2$bytes$headers(d,e){return this.gJ().$2$bytes$headers(d,e)},
$1$fadeIn(d){return this.gJ().$1$fadeIn(d)},
$2$lat$lng(d,e){return this.gJ().$2$lat$lng(d,e)},
$1$address(d){return this.gJ().$1$address(d)},
$1$title(d){return this.gJ().$1$title(d)},
$1$database(d){return this.gJ().$1$database(d)},
$3$reviewNote$status$updatedAt(d,e,f){return this.gJ().$3$reviewNote$status$updatedAt(d,e,f)},
$3$publicUrl$seoDescription$slug(d,e,f){return this.gJ().$3$publicUrl$seoDescription$slug(d,e,f)},
$4$publishedAt$reviewNote$status$updatedAt(d,e,f,g){return this.gJ().$4$publishedAt$reviewNote$status$updatedAt(d,e,f,g)},
$6$joinedAt$onTap(d,e,f,g,h,i){return this.gJ().$6$joinedAt$onTap(d,e,f,g,h,i)},
$5$accent(d,e,f,g,h){return this.gJ().$5$accent(d,e,f,g,h)},
$5$danger(d,e,f,g,h){return this.gJ().$5$danger(d,e,f,g,h)},
$1$r(d){return this.gJ().$1$r(d)},
$1$f(d){return this.gJ().$1$f(d)},
$7$key(d,e,f,g,h,i,j){return this.gJ().$7$key(d,e,f,g,h,i,j)},
$8$fx$key(d,e,f,g,h,i,j,k){return this.gJ().$8$fx$key(d,e,f,g,h,i,j,k)},
$8$anim$delay$key(d,e,f,g,h,i,j,k){return this.gJ().$8$anim$delay$key(d,e,f,g,h,i,j,k)},
$9$anim$delay$fx$key(d,e,f,g,h,i,j,k,l){return this.gJ().$9$anim$delay$fx$key(d,e,f,g,h,i,j,k,l)},
$11$align$anim$delay$fx$key(d,e,f,g,h,i,j,k,l,m,n){return this.gJ().$11$align$anim$delay$fx$key(d,e,f,g,h,i,j,k,l,m,n)},
$10$align$anim$key$weight(d,e,f,g,h,i,j,k,l,m){return this.gJ().$10$align$anim$key$weight(d,e,f,g,h,i,j,k,l,m)},
$10$align$color$delay$key(d,e,f,g,h,i,j,k,l,m){return this.gJ().$10$align$color$delay$key(d,e,f,g,h,i,j,k,l,m)},
$8$anim$fx$key(d,e,f,g,h,i,j,k){return this.gJ().$8$anim$fx$key(d,e,f,g,h,i,j,k)},
$9$fx$key$rotation(d,e,f,g,h,i,j,k,l){return this.gJ().$9$fx$key$rotation(d,e,f,g,h,i,j,k,l)},
$9$anim$key$weight(d,e,f,g,h,i,j,k,l){return this.gJ().$9$anim$key$weight(d,e,f,g,h,i,j,k,l)},
$9$color$delay$key(d,e,f,g,h,i,j,k,l){return this.gJ().$9$color$delay$key(d,e,f,g,h,i,j,k,l)},
$11$anim$color$fx$key$weight(d,e,f,g,h,i,j,k,l,m,n){return this.gJ().$11$anim$color$fx$key$weight(d,e,f,g,h,i,j,k,l,m,n)},
$11$align$anim$key$style$weight(d,e,f,g,h,i,j,k,l,m,n){return this.gJ().$11$align$anim$key$style$weight(d,e,f,g,h,i,j,k,l,m,n)},
$11$anim$bullets$color$delay$key(d,e,f,g,h,i,j,k,l,m,n){return this.gJ().$11$anim$bullets$color$delay$key(d,e,f,g,h,i,j,k,l,m,n)},
$8(d,e,f,g,h,i,j,k){return this.gJ().$8(d,e,f,g,h,i,j,k)},
$12$anim$delay$stroke$strokeWidth(d,e,f,g,h,i,j,k,l,m,n,o){return this.gJ().$12$anim$delay$stroke$strokeWidth(d,e,f,g,h,i,j,k,l,m,n,o)},
$5$size(d,e,f,g,h){return this.gJ().$5$size(d,e,f,g,h)},
$10$anim$delay(d,e,f,g,h,i,j,k,l,m){return this.gJ().$10$anim$delay(d,e,f,g,h,i,j,k,l,m)},
$9(d,e,f,g,h,i,j,k,l){return this.gJ().$9(d,e,f,g,h,i,j,k,l)},
$13$anim$delay$rotation$stroke$strokeWidth(d,e,f,g,h,i,j,k,l,m,n,o,p){return this.gJ().$13$anim$delay$rotation$stroke$strokeWidth(d,e,f,g,h,i,j,k,l,m,n,o,p)},
$2$ctx$label(d,e){return this.gJ().$2$ctx$label(d,e)},
$6$accent$ctx$icon$subtitle$title$value(d,e,f,g,h,i){return this.gJ().$6$accent$ctx$icon$subtitle$title$value(d,e,f,g,h,i)},
$3$sharePositionOrigin$subject(d,e,f){return this.gJ().$3$sharePositionOrigin$subject(d,e,f)},
$9$align$weight(d,e,f,g,h,i,j,k,l){return this.gJ().$9$align$weight(d,e,f,g,h,i,j,k,l)},
$10$align$style$weight(d,e,f,g,h,i,j,k,l,m){return this.gJ().$10$align$style$weight(d,e,f,g,h,i,j,k,l,m)},
$8$weight(d,e,f,g,h,i,j,k){return this.gJ().$8$weight(d,e,f,g,h,i,j,k)},
$5$doc$history$instruction$photo$template(d,e,f,g,h){return this.gJ().$5$doc$history$instruction$photo$template(d,e,f,g,h)},
$4$paper$photo$request$template(d,e,f,g){return this.gJ().$4$paper$photo$request$template(d,e,f,g)},
$1$paper(d){return this.gJ().$1$paper(d)},
$2$fontFamily(d,e){return this.gJ().$2$fontFamily(d,e)},
$6$child$h$label$on$onTap$w(d,e,f,g,h,i){return this.gJ().$6$child$h$label$on$onTap$w(d,e,f,g,h,i)},
$6$activeTrackColor$inactiveTrackColor$overlayColor$thumbColor$thumbShape$trackHeight(d,e,f,g,h,i){return this.gJ().$6$activeTrackColor$inactiveTrackColor$overlayColor$thumbColor$thumbShape$trackHeight(d,e,f,g,h,i)},
$2$radius(d,e){return this.gJ().$2$radius(d,e)},
$6$shown(d,e,f,g,h,i){return this.gJ().$6$shown(d,e,f,g,h,i)},
$3$on$onTap(d,e,f){return this.gJ().$3$on$onTap(d,e,f)},
$1$size(d){return this.gJ().$1$size(d)},
$2$logo$style(d,e){return this.gJ().$2$logo$style(d,e)},
$1$logo(d){return this.gJ().$1$logo(d)},
$1$subtitle(d){return this.gJ().$1$subtitle(d)},
$3$accent$isDark(d,e,f){return this.gJ().$3$accent$isDark(d,e,f)},
$7$color$enabled$icon$isDark$onTap$subtitle$title(d,e,f,g,h,i,j){return this.gJ().$7$color$enabled$icon$isDark$onTap$subtitle$title(d,e,f,g,h,i,j)},
$8$color$enabled$icon$isDark$isPro$onTap$subtitle$title(d,e,f,g,h,i,j,k){return this.gJ().$8$color$enabled$icon$isDark$isPro$onTap$subtitle$title(d,e,f,g,h,i,j,k)},
$2$selection$text(d,e){return this.gJ().$2$selection$text(d,e)},
$2$orElse(d,e){return this.gJ().$2$orElse(d,e)},
$11$colors$onTap$orbit$phase$preview$pulse$scan$subtitle$t$thumbHeight$title(d,e,f,g,h,i,j,k,l,m,n){return this.gJ().$11$colors$onTap$orbit$phase$preview$pulse$scan$subtitle$t$thumbHeight$title(d,e,f,g,h,i,j,k,l,m,n)},
$1$imageQuality(d){return this.gJ().$1$imageQuality(d)},
$2$height$offsetLeft(d,e){return this.gJ().$2$height$offsetLeft(d,e)},
$3$size(d,e,f){return this.gJ().$3$size(d,e,f)},
$2$size(d,e){return this.gJ().$2$size(d,e)},
$1$existing(d){return this.gJ().$1$existing(d)},
$1$fromTemplate(d){return this.gJ().$1$fromTemplate(d)},
$1$lastContacted(d){return this.gJ().$1$lastContacted(d)},
$1$favorite(d){return this.gJ().$1$favorite(d)},
$4$hint(d,e,f,g){return this.gJ().$4$hint(d,e,f,g)},
$4$count(d,e,f,g){return this.gJ().$4$count(d,e,f,g)},
$5$color$count(d,e,f,g,h){return this.gJ().$5$color$count(d,e,f,g,h)},
$3$tip(d,e,f){return this.gJ().$3$tip(d,e,f)},
$4$color$tip(d,e,f,g){return this.gJ().$4$color$tip(d,e,f,g)},
$1$note(d){return this.gJ().$1$note(d)},
$1$letterSpacing(d){return this.gJ().$1$letterSpacing(d)},
$4$glyph$label$onTap$selected(d,e,f,g){return this.gJ().$4$glyph$label$onTap$selected(d,e,f,g)},
$2$imageQuality$source(d,e){return this.gJ().$2$imageQuality$source(d,e)},
$1$fontWeight(d){return this.gJ().$1$fontWeight(d)},
$5$cardAddress$cardHours$cardPhone$cardWebsite$centerLabel(d,e,f,g,h){return this.gJ().$5$cardAddress$cardHours$cardPhone$cardWebsite$centerLabel(d,e,f,g,h)},
$3$child$title(d,e,f){return this.gJ().$3$child$title(d,e,f)},
$2$logoBase64$showCardLogo(d,e){return this.gJ().$2$logoBase64$showCardLogo(d,e)},
$1$moduleShape(d){return this.gJ().$1$moduleShape(d)},
$1$eyeShape(d){return this.gJ().$1$eyeShape(d)},
$3$accent$background$foreground(d,e,f){return this.gJ().$3$accent$background$foreground(d,e,f)},
$1$cornerStyle(d){return this.gJ().$1$cornerStyle(d)},
$1$centerLabel(d){return this.gJ().$1$centerLabel(d)},
$1$cardWebsite(d){return this.gJ().$1$cardWebsite(d)},
$1$cardHours(d){return this.gJ().$1$cardHours(d)},
$1$cardAddress(d){return this.gJ().$1$cardAddress(d)},
$1$cardPhone(d){return this.gJ().$1$cardPhone(d)},
$1$cardTemplate(d){return this.gJ().$1$cardTemplate(d)},
$1$displayMode(d){return this.gJ().$1$displayMode(d)},
$5$candidateName$ctaText$headline$marqueeText$supportLine(d,e,f,g,h){return this.gJ().$5$candidateName$ctaText$headline$marqueeText$supportLine(d,e,f,g,h)},
$4$onChanged(d,e,f,g){return this.gJ().$4$onChanged(d,e,f,g)},
$6$bioNote$candidateName$ctaText$headline$marqueeText$supportLine(d,e,f,g,h,i){return this.gJ().$6$bioNote$candidateName$ctaText$headline$marqueeText$supportLine(d,e,f,g,h,i)},
$9$active$candidateName$ctaText$durationDays$endsAt$headline$publishedBy$startsAt$updatedAt(d,e,f,g,h,i,j,k,l){return this.gJ().$9$active$candidateName$ctaText$durationDays$endsAt$headline$publishedBy$startsAt$updatedAt(d,e,f,g,h,i,j,k,l)},
$1$photoUrl(d){return this.gJ().$1$photoUrl(d)},
$1$backgroundUrl(d){return this.gJ().$1$backgroundUrl(d)},
$2$accentArgb$slideStyle(d,e){return this.gJ().$2$accentArgb$slideStyle(d,e)},
$1$accentArgb(d){return this.gJ().$1$accentArgb(d)},
$1$showMarquee(d){return this.gJ().$1$showMarquee(d)},
$1$showCirclePhoto(d){return this.gJ().$1$showCirclePhoto(d)},
$9$backgroundUrl$bioNote$candidateId$candidateName$ctaText$headline$marqueeText$photoUrl$supportLine(d,e,f,g,h,i,j,k,l){return this.gJ().$9$backgroundUrl$bioNote$candidateId$candidateName$ctaText$headline$marqueeText$photoUrl$supportLine(d,e,f,g,h,i,j,k,l)},
$3$onTap$selected(d,e,f){return this.gJ().$3$onTap$selected(d,e,f)},
$1$period(d){return this.gJ().$1$period(d)},
$4$activeTrackColor$inactiveTrackColor$thumbColor$trackHeight(d,e,f,g){return this.gJ().$4$activeTrackColor$inactiveTrackColor$thumbColor$trackHeight(d,e,f,g)},
$5$fileNameOverrides$sharePositionOrigin$subject$text(d,e,f,g,h){return this.gJ().$5$fileNameOverrides$sharePositionOrigin$subject$text(d,e,f,g,h)},
$2$volume(d,e){return this.gJ().$2$volume(d,e)},
$2$coinsDelta$won(d,e){return this.gJ().$2$coinsDelta$won(d,e)},
$4$isFront$revealDates(d,e,f,g){return this.gJ().$4$isFront$revealDates(d,e,f,g)},
$2$dy$opacity(d,e){return this.gJ().$2$dy$opacity(d,e)},
$2$dx$opacity(d,e){return this.gJ().$2$dx$opacity(d,e)},
$2$opacity$scale(d,e){return this.gJ().$2$opacity$scale(d,e)},
$3$angle$opacity$scale(d,e,f){return this.gJ().$3$angle$opacity$scale(d,e,f)},
$3$dy$opacity$scale(d,e,f){return this.gJ().$3$dy$opacity$scale(d,e,f)},
$1$frontSpendingId(d){return this.gJ().$1$frontSpendingId(d)},
$1$imageBase64(d){return this.gJ().$1$imageBase64(d)},
$1$civicIdJson(d){return this.gJ().$1$civicIdJson(d)},
$2$businessCardJson$description(d,e){return this.gJ().$2$businessCardJson$description(d,e)},
$2$autoPlay$style(d,e){return this.gJ().$2$autoPlay$style(d,e)},
$6$amount$date$description$note$receiptItems$receiptMerchant(d,e,f,g,h,i){return this.gJ().$6$amount$date$description$note$receiptItems$receiptMerchant(d,e,f,g,h,i)},
$4$bold$color(d,e,f,g){return this.gJ().$4$bold$color(d,e,f,g)},
$2$cloudRequest(d,e){return this.gJ().$2$cloudRequest(d,e)},
$1$source(d){return this.gJ().$1$source(d)},
$1$reason(d){return this.gJ().$1$reason(d)},
$1$complete(d){return this.gJ().$1$complete(d)},
$3$bonus(d,e,f){return this.gJ().$3$bonus(d,e,f)},
$2$allowDecrease$syncBalance(d,e){return this.gJ().$2$allowDecrease$syncBalance(d,e)},
$2$allowDecrease(d,e){return this.gJ().$2$allowDecrease(d,e)},
$2$isFinal(d,e){return this.gJ().$2$isFinal(d,e)},
$1$sortOrder(d){return this.gJ().$1$sortOrder(d)},
$3$colorValue$icon$title(d,e,f){return this.gJ().$3$colorValue$icon$title(d,e,f)},
$1$questions(d){return this.gJ().$1$questions(d)},
$2$id$sortOrder(d,e){return this.gJ().$2$id$sortOrder(d,e)},
$1$bumpWalletRevision(d){return this.gJ().$1$bumpWalletRevision(d)},
$2$bumpWalletRevision(d,e){return this.gJ().$2$bumpWalletRevision(d,e)},
$2$fromCloudRelay(d,e){return this.gJ().$2$fromCloudRelay(d,e)},
$4$body$cooldown$tag$title(d,e,f,g){return this.gJ().$4$body$cooldown$tag$title(d,e,f,g)},
$6$animDelayMs(d,e,f,g,h,i){return this.gJ().$6$animDelayMs(d,e,f,g,h,i)},
$3$backgroundColor$foregroundColor$overlayColor(d,e,f){return this.gJ().$3$backgroundColor$foregroundColor$overlayColor(d,e,f)},
$7$accent$children$expanded$icon$onToggle$subtitle$title(d,e,f,g,h,i,j){return this.gJ().$7$accent$children$expanded$icon$onToggle$subtitle$title(d,e,f,g,h,i,j)},
$2$suffix(d,e){return this.gJ().$2$suffix(d,e)},
$3$hint$suffix(d,e,f){return this.gJ().$3$hint$suffix(d,e,f)},
$7$amount$giftName$storeAddress$storeListingId$storeSellerEmail$storeSellerName$styleId(d,e,f,g,h,i,j){return this.gJ().$7$amount$giftName$storeAddress$storeListingId$storeSellerEmail$storeSellerName$styleId(d,e,f,g,h,i,j)},
$8$amount$giftName$pending$storeAddress$storeListingId$storeSellerEmail$storeSellerName$styleId(d,e,f,g,h,i,j,k){return this.gJ().$8$amount$giftName$pending$storeAddress$storeListingId$storeSellerEmail$storeSellerName$styleId(d,e,f,g,h,i,j,k)},
$3$fromState$member$toState(d,e,f){return this.gJ().$3$fromState$member$toState(d,e,f)},
$3$showActions(d,e,f){return this.gJ().$3$showActions(d,e,f)},
$4$type(d,e,f,g){return this.gJ().$4$type(d,e,f,g)},
$5$fmt$type(d,e,f,g,h){return this.gJ().$5$fmt$type(d,e,f,g,h)},
$8$amount$giftName$storeAddress$storeListingId$storeSellerEmail$storeSellerName$styleId(d,e,f,g,h,i,j,k){return this.gJ().$8$amount$giftName$storeAddress$storeListingId$storeSellerEmail$storeSellerName$styleId(d,e,f,g,h,i,j,k)},
$1$stashToken(d){return this.gJ().$1$stashToken(d)},
$1$shortCode(d){return this.gJ().$1$shortCode(d)},
$1$preselectedCode(d){return this.gJ().$1$preselectedCode(d)},
$2$type$withData(d,e){return this.gJ().$2$type$withData(d,e)},
$2$isLuxury(d,e){return this.gJ().$2$isLuxury(d,e)},
$3$onChanged(d,e,f){return this.gJ().$3$onChanged(d,e,f)},
$4$hint$onChanged(d,e,f,g){return this.gJ().$4$hint$onChanged(d,e,f,g)},
$4$keyboard$onChanged(d,e,f,g){return this.gJ().$4$keyboard$onChanged(d,e,f,g)},
$5$hint$keyboard$onChanged(d,e,f,g,h){return this.gJ().$5$hint$keyboard$onChanged(d,e,f,g,h)},
$4$maxLines$onChanged(d,e,f,g){return this.gJ().$4$maxLines$onChanged(d,e,f,g)},
$1$record(d){return this.gJ().$1$record(d)},
$2$clearPendingDelete$stock(d,e){return this.gJ().$2$clearPendingDelete$stock(d,e)},
$2$pendingDeleteAt$stock(d,e){return this.gJ().$2$pendingDeleteAt$stock(d,e)},
$1$barcode(d){return this.gJ().$1$barcode(d)},
$4$controller$hint$icon$label(d,e,f,g){return this.gJ().$4$controller$hint$icon$label(d,e,f,g)},
$5$controller$hint$icon$label$onChanged(d,e,f,g,h){return this.gJ().$5$controller$hint$icon$label$onChanged(d,e,f,g,h)},
$5$controller$hint$icon$label$maxLines(d,e,f,g,h){return this.gJ().$5$controller$hint$icon$label$maxLines(d,e,f,g,h)},
$5$controller$hint$icon$label$obscure(d,e,f,g,h){return this.gJ().$5$controller$hint$icon$label$obscure(d,e,f,g,h)},
$3$async(d,e,f){return this.gJ().$3$async(d,e,f)},
$3$icon$onTap$tooltip(d,e,f){return this.gJ().$3$icon$onTap$tooltip(d,e,f)},
$3$aspect$facingMode$pipEnabled(d,e,f){return this.gJ().$3$aspect$facingMode$pipEnabled(d,e,f)},
$1$restoreHost(d){return this.gJ().$1$restoreHost(d)},
$1$hostStream(d){return this.gJ().$1$hostStream(d)},
$2$withAudio(d,e){return this.gJ().$2$withAudio(d,e)},
$6$align(d,e,f,g,h,i){return this.gJ().$6$align(d,e,f,g,h,i)},
$7(d,e,f,g,h,i,j){return this.gJ().$7(d,e,f,g,h,i,j)},
$4$triangles(d,e,f,g){return this.gJ().$4$triangles(d,e,f,g)},
$4$angledTop(d,e,f,g){return this.gJ().$4$angledTop(d,e,f,g)},
$10$accent$badge$bannerColors$brandBg$brandFg$crown$footerBg$textColor(d,e,f,g,h,i,j,k,l,m){return this.gJ().$10$accent$badge$bannerColors$brandBg$brandFg$crown$footerBg$textColor(d,e,f,g,h,i,j,k,l,m)},
$9$accent$badge$bannerColors$brandBg$brandFg$footerBg$textColor(d,e,f,g,h,i,j,k,l){return this.gJ().$9$accent$badge$bannerColors$brandBg$brandFg$footerBg$textColor(d,e,f,g,h,i,j,k,l)},
$11$accent$badge$bannerColors$brandBg$brandFg$crimsonVelvet$crown$footerBg$textColor(d,e,f,g,h,i,j,k,l,m,n){return this.gJ().$11$accent$badge$bannerColors$brandBg$brandFg$crimsonVelvet$crown$footerBg$textColor(d,e,f,g,h,i,j,k,l,m,n)},
$10$accent$badge$bannerColors$brandBg$brandFg$footerBg$marble$textColor(d,e,f,g,h,i,j,k,l,m){return this.gJ().$10$accent$badge$bannerColors$brandBg$brandFg$footerBg$marble$textColor(d,e,f,g,h,i,j,k,l,m)},
$1$maxWidth(d){return this.gJ().$1$maxWidth(d)},
$1$dividerColor(d){return this.gJ().$1$dividerColor(d)},
$8$removeBottomInset$removeBottomPadding$removeLeftPadding$removeRightPadding$removeTopPadding(d,e,f,g,h,i,j,k){return this.gJ().$8$removeBottomInset$removeBottomPadding$removeLeftPadding$removeRightPadding$removeTopPadding(d,e,f,g,h,i,j,k)},
$7$removeBottomPadding$removeLeftPadding$removeRightPadding$removeTopPadding(d,e,f,g,h,i,j){return this.gJ().$7$removeBottomPadding$removeLeftPadding$removeRightPadding$removeTopPadding(d,e,f,g,h,i,j)},
$8$maintainBottomViewPadding$removeBottomPadding$removeLeftPadding$removeRightPadding$removeTopPadding(d,e,f,g,h,i,j,k){return this.gJ().$8$maintainBottomViewPadding$removeBottomPadding$removeLeftPadding$removeRightPadding$removeTopPadding(d,e,f,g,h,i,j,k)},
$1$floatingActionButtonScale(d){return this.gJ().$1$floatingActionButtonScale(d)},
$1$removeBottom(d){return this.gJ().$1$removeBottom(d)},
$2$viewInsets$viewPadding(d,e){return this.gJ().$2$viewInsets$viewPadding(d,e)},
$3$2$headers$maybeSingle(d,e,f,g,h){return this.gJ().$3$2$headers$maybeSingle(d,e,f,g,h)},
$2$boldText$textScaler(d,e){return this.gJ().$2$boldText$textScaler(d,e)},
$1$viewInsets(d){return this.gJ().$1$viewInsets(d)},
$6$banner$body$incomeTransaction$sound$tag$title(d,e,f,g,h,i){return this.gJ().$6$banner$body$incomeTransaction$sound$tag$title(d,e,f,g,h,i)},
$5$adminDashboardAlert$body$cooldown$tag$title(d,e,f,g,h){return this.gJ().$5$adminDashboardAlert$body$cooldown$tag$title(d,e,f,g,h)},
$2$where(d,e){return this.gJ().$2$where(d,e)},
$3$tag(d,e,f){return this.gJ().$3$tag(d,e,f)},
$6$adminDashboardAlert$body$cooldown$showInAppBanner$tag$title(d,e,f,g,h,i){return this.gJ().$6$adminDashboardAlert$body$cooldown$showInAppBanner$tag$title(d,e,f,g,h,i)},
$5$body$cooldown$important$tag$title(d,e,f,g,h){return this.gJ().$5$body$cooldown$important$tag$title(d,e,f,g,h)},
$4$body$important$tag$title(d,e,f,g){return this.gJ().$4$body$important$tag$title(d,e,f,g)},
$3$body$tag$title(d,e,f){return this.gJ().$3$body$tag$title(d,e,f)},
$5$body$incomeAmount$sound$tag$title(d,e,f,g,h){return this.gJ().$5$body$incomeAmount$sound$tag$title(d,e,f,g,h)},
$2$primaryTextTheme$textTheme(d,e){return this.gJ().$2$primaryTextTheme$textTheme(d,e)},
$3$bodyColor$decorationColor$displayColor(d,e,f){return this.gJ().$3$bodyColor$decorationColor$displayColor(d,e,f)},
$1$fontFamily(d){return this.gJ().$1$fontFamily(d)},
$1$fontFamilyFallback(d){return this.gJ().$1$fontFamilyFallback(d)},
$2$bottom$top(d,e){return this.gJ().$2$bottom$top(d,e)},
$3$icon$isDark$onTap(d,e,f){return this.gJ().$3$icon$isDark$onTap(d,e,f)},
$3$isDark$onReply(d,e,f){return this.gJ().$3$isDark$onReply(d,e,f)},
$3$canvasColor$dialogBackgroundColor$scaffoldBackgroundColor(d,e,f){return this.gJ().$3$canvasColor$dialogBackgroundColor$scaffoldBackgroundColor(d,e,f)},
$2$body$overlay(d,e){return this.gJ().$2$body$overlay(d,e)},
$2$body$paidStampOnLeft(d,e){return this.gJ().$2$body$paidStampOnLeft(d,e)},
$1$body(d){return this.gJ().$1$body(d)},
$3$body$overlay$paidStampOnLeft(d,e,f){return this.gJ().$3$body$overlay$paidStampOnLeft(d,e,f)},
$4$body$paidStampOnLeft$showCrownBand$topBand(d,e,f,g){return this.gJ().$4$body$paidStampOnLeft$showCrownBand$topBand(d,e,f,g)},
$3$body$showCrownBand$topBand(d,e,f){return this.gJ().$3$body$showCrownBand$topBand(d,e,f)},
$3$controller$hint$icon(d,e,f){return this.gJ().$3$controller$hint$icon(d,e,f)},
$5$autofocus$focusNode$mouseCursor$painter$size(d,e,f,g,h){return this.gJ().$5$autofocus$focusNode$mouseCursor$painter$size(d,e,f,g,h)},
$4$icon$rows$title(d,e,f,g){return this.gJ().$4$icon$rows$title(d,e,f,g)},
$3$strong(d,e,f){return this.gJ().$3$strong(d,e,f)},
$4$color$strong(d,e,f,g){return this.gJ().$4$color$strong(d,e,f,g)},
$1$removeTop(d){return this.gJ().$1$removeTop(d)},
$3$card(d,e,f){return this.gJ().$3$card(d,e,f)},
$4$child$glow$glowAt$radius(d,e,f,g){return this.gJ().$4$child$glow$glowAt$radius(d,e,f,g)},
$5$activeTrackColor$inactiveTrackColor$overlayColor$thumbColor$trackHeight(d,e,f,g,h){return this.gJ().$5$activeTrackColor$inactiveTrackColor$overlayColor$thumbColor$trackHeight(d,e,f,g,h)},
$3$eccentric(d,e,f){return this.gJ().$3$eccentric(d,e,f)},
$4$vol(d,e,f,g){return this.gJ().$4$vol(d,e,f,g)},
$4$sweep(d,e,f,g){return this.gJ().$4$sweep(d,e,f,g)},
$4$iconOnly(d,e,f,g){return this.gJ().$4$iconOnly(d,e,f,g)},
$3$ghost(d,e,f){return this.gJ().$3$ghost(d,e,f)},
$3$big(d,e,f){return this.gJ().$3$big(d,e,f)},
$5$color$on(d,e,f,g,h){return this.gJ().$5$color$on(d,e,f,g,h)},
$6$fs$h$radius$ring$w(d,e,f,g,h,i){return this.gJ().$6$fs$h$radius$ring$w(d,e,f,g,h,i)},
$2$dist$target(d,e){return this.gJ().$2$dist$target(d,e)},
$4$split(d,e,f,g){return this.gJ().$4$split(d,e,f,g)},
$4$alongX(d,e,f,g){return this.gJ().$4$alongX(d,e,f,g)},
$5$ends$shine(d,e,f,g,h){return this.gJ().$5$ends$shine(d,e,f,g,h)},
$2$col(d,e){return this.gJ().$2$col(d,e)},
$5$shine$split(d,e,f,g,h){return this.gJ().$5$shine$split(d,e,f,g,h)},
$4$shine(d,e,f,g){return this.gJ().$4$shine(d,e,f,g)},
$5$h$w(d,e,f,g,h){return this.gJ().$5$h$w(d,e,f,g,h)},
$6$shine$sides(d,e,f,g,h,i){return this.gJ().$6$shine$sides(d,e,f,g,h,i)},
$6$joints$shine$sides(d,e,f,g,h,i){return this.gJ().$6$joints$shine$sides(d,e,f,g,h,i)},
$7$r1$shine$sides(d,e,f,g,h,i,j){return this.gJ().$7$r1$shine$sides(d,e,f,g,h,i,j)},
$7$normal$twoSided(d,e,f,g,h,i,j){return this.gJ().$7$normal$twoSided(d,e,f,g,h,i,j)},
$8$caps$inner$shine$sides(d,e,f,g,h,i,j,k){return this.gJ().$8$caps$inner$shine$sides(d,e,f,g,h,i,j,k)},
$5$sides(d,e,f,g,h){return this.gJ().$5$sides(d,e,f,g,h)},
$7$caps$shine$sides(d,e,f,g,h,i,j){return this.gJ().$7$caps$shine$sides(d,e,f,g,h,i,j)},
$6$shine(d,e,f,g,h,i){return this.gJ().$6$shine(d,e,f,g,h,i)},
$7$endCaps$joints$shine$sides(d,e,f,g,h,i,j){return this.gJ().$7$endCaps$joints$shine$sides(d,e,f,g,h,i,j)},
$6$taped(d,e,f,g,h,i){return this.gJ().$6$taped(d,e,f,g,h,i)},
$4$color(d,e,f,g){return this.gJ().$4$color(d,e,f,g)},
$5$shine$yaw(d,e,f,g,h){return this.gJ().$5$shine$yaw(d,e,f,g,h)},
$6$caps$sides(d,e,f,g,h,i){return this.gJ().$6$caps$sides(d,e,f,g,h,i)},
$5$shine$sides(d,e,f,g,h){return this.gJ().$5$shine$sides(d,e,f,g,h)},
$5$lat$lon(d,e,f,g,h){return this.gJ().$5$lat$lon(d,e,f,g,h)},
$6$r1$sides(d,e,f,g,h,i){return this.gJ().$6$r1$sides(d,e,f,g,h,i)},
$7$normal$shine(d,e,f,g,h,i,j){return this.gJ().$7$normal$shine(d,e,f,g,h,i,j)},
$3$r(d,e,f){return this.gJ().$3$r(d,e,f)},
$6$ends$shine$split(d,e,f,g,h,i){return this.gJ().$6$ends$shine$split(d,e,f,g,h,i)},
$4$round(d,e,f,g){return this.gJ().$4$round(d,e,f,g)},
$5$col$round(d,e,f,g,h){return this.gJ().$5$col$round(d,e,f,g,h)},
$4$col(d,e,f,g){return this.gJ().$4$col(d,e,f,g)},
$1$target(d){return this.gJ().$1$target(d)},
$1$pixelRatio(d){return this.gJ().$1$pixelRatio(d)},
$7$caps$r1$sides(d,e,f,g,h,i,j){return this.gJ().$7$caps$r1$sides(d,e,f,g,h,i,j)},
$2$flip(d,e){return this.gJ().$2$flip(d,e)},
$4$left$top(d,e,f,g){return this.gJ().$4$left$top(d,e,f,g)},
$3$color$size(d,e,f){return this.gJ().$3$color$size(d,e,f)},
$4$color$size$weight(d,e,f,g){return this.gJ().$4$color$size$weight(d,e,f,g)},
$4$bottom$left(d,e,f,g){return this.gJ().$4$bottom$left(d,e,f,g)},
$4$right$top(d,e,f,g){return this.gJ().$4$right$top(d,e,f,g)},
$4$letterSpacing$size$weight(d,e,f,g){return this.gJ().$4$letterSpacing$size$weight(d,e,f,g)},
$4$color$letterSpacing$size(d,e,f,g){return this.gJ().$4$color$letterSpacing$size(d,e,f,g)},
$4$bottom$right(d,e,f,g){return this.gJ().$4$bottom$right(d,e,f,g)},
$5$left$right$top(d,e,f,g,h){return this.gJ().$5$left$right$top(d,e,f,g,h)},
$5$bottom$left$right(d,e,f,g,h){return this.gJ().$5$bottom$left$right(d,e,f,g,h)},
$5$color$letterSpacing$size$weight(d,e,f,g,h){return this.gJ().$5$color$letterSpacing$size$weight(d,e,f,g,h)},
$4$color$maxLines$size(d,e,f,g){return this.gJ().$4$color$maxLines$size(d,e,f,g)},
$5$color$maxLines$size$weight(d,e,f,g,h){return this.gJ().$5$color$maxLines$size$weight(d,e,f,g,h)},
$3$fill(d,e,f){return this.gJ().$3$fill(d,e,f)},
$3$color$defaultColor$disabledColor(d,e,f){return this.gJ().$3$color$defaultColor$disabledColor(d,e,f)},
$3$backgroundColor$color$defaultColor(d,e,f){return this.gJ().$3$backgroundColor$color$defaultColor(d,e,f)},
$3$color$defaultColor$selectedColor(d,e,f){return this.gJ().$3$color$defaultColor$selectedColor(d,e,f)},
$2$color$size(d,e){return this.gJ().$2$color$size(d,e)},
$3$color$fontStyle$fontWeight(d,e,f){return this.gJ().$3$color$fontStyle$fontWeight(d,e,f)},
$4$alignment$downsample$fit(d,e,f,g){return this.gJ().$4$alignment$downsample$fit(d,e,f,g)},
$8$minPageHeight(d,e,f,g,h,i,j,k){return this.gJ().$8$minPageHeight(d,e,f,g,h,i,j,k)},
$9$headerH$panel(d,e,f,g,h,i,j,k,l){return this.gJ().$9$headerH$panel(d,e,f,g,h,i,j,k,l)},
$9$headerH$softPanel(d,e,f,g,h,i,j,k,l){return this.gJ().$9$headerH$softPanel(d,e,f,g,h,i,j,k,l)},
$9$minPageHeight$nameOverride$topGap(d,e,f,g,h,i,j,k,l){return this.gJ().$9$minPageHeight$nameOverride$topGap(d,e,f,g,h,i,j,k,l)},
$7$minPageHeight(d,e,f,g,h,i,j){return this.gJ().$7$minPageHeight(d,e,f,g,h,i,j)},
$8$minPageHeight$topGap(d,e,f,g,h,i,j,k){return this.gJ().$8$minPageHeight$topGap(d,e,f,g,h,i,j,k)},
$4$fit$height$width(d,e,f,g){return this.gJ().$4$fit$height$width(d,e,f,g)},
$8$minPageHeight$nameOverride(d,e,f,g,h,i,j,k){return this.gJ().$8$minPageHeight$nameOverride(d,e,f,g,h,i,j,k)},
$5$bg$fg(d,e,f,g,h){return this.gJ().$5$bg$fg(d,e,f,g,h)},
$3$radius(d,e,f){return this.gJ().$3$radius(d,e,f)},
$2$letterSpacing$shadows(d,e){return this.gJ().$2$letterSpacing$shadows(d,e)},
$5$background(d,e,f,g,h){return this.gJ().$5$background(d,e,f,g,h)},
$1$shadows(d){return this.gJ().$1$shadows(d)},
$4$radius(d,e,f,g){return this.gJ().$4$radius(d,e,f,g)},
$5$header(d,e,f,g,h){return this.gJ().$5$header(d,e,f,g,h)},
$3$gap(d,e,f){return this.gJ().$3$gap(d,e,f)},
$9$minPageHeight$nameOverride$wrapLink(d,e,f,g,h,i,j,k,l){return this.gJ().$9$minPageHeight$nameOverride$wrapLink(d,e,f,g,h,i,j,k,l)},
$9$minPageHeight$topGap$wrapLink(d,e,f,g,h,i,j,k,l){return this.gJ().$9$minPageHeight$topGap$wrapLink(d,e,f,g,h,i,j,k,l)},
$8$minPageHeight$wrapLink(d,e,f,g,h,i,j,k){return this.gJ().$8$minPageHeight$wrapLink(d,e,f,g,h,i,j,k)},
$3$alignment$fit(d,e,f){return this.gJ().$3$alignment$fit(d,e,f)},
$2$front(d,e){return this.gJ().$2$front(d,e)},
$9$avatarSize$belowAvatar$curveH$curvePainter$headerH$minPageHeight$pad$ring$tpl(d,e,f,g,h,i,j,k,l){return this.gJ().$9$avatarSize$belowAvatar$curveH$curvePainter$headerH$minPageHeight$pad$ring$tpl(d,e,f,g,h,i,j,k,l)},
$6$minPageHeight(d,e,f,g,h,i){return this.gJ().$6$minPageHeight(d,e,f,g,h,i)},
$4$spacing$weight(d,e,f,g){return this.gJ().$4$spacing$weight(d,e,f,g)},
$5$color$spacing$weight(d,e,f,g,h){return this.gJ().$5$color$spacing$weight(d,e,f,g,h)},
$5$height$spacing$weight(d,e,f,g,h){return this.gJ().$5$height$spacing$weight(d,e,f,g,h)},
$5$align$lines$max$min(d,e,f,g,h){return this.gJ().$5$align$lines$max$min(d,e,f,g,h)},
$4$align$lines$max(d,e,f,g){return this.gJ().$4$align$lines$max(d,e,f,g)},
$1$thick(d){return this.gJ().$1$thick(d)},
$5$color$lines$max$min(d,e,f,g,h){return this.gJ().$5$color$lines$max$min(d,e,f,g,h)},
$3$color$max(d,e,f){return this.gJ().$3$color$max(d,e,f)},
$5$color$height$weight(d,e,f,g,h){return this.gJ().$5$color$height$weight(d,e,f,g,h)},
$2$startSize(d,e){return this.gJ().$2$startSize(d,e)},
$2$align(d,e){return this.gJ().$2$align(d,e)},
$1$lines(d){return this.gJ().$1$lines(d)},
$3$lines$max(d,e,f){return this.gJ().$3$lines$max(d,e,f)},
$2$max(d,e){return this.gJ().$2$max(d,e)},
$5$height$style$weight(d,e,f,g,h){return this.gJ().$5$height$style$weight(d,e,f,g,h)},
$3$align$max(d,e,f){return this.gJ().$3$align$max(d,e,f)},
$3$sidebar$startSize(d,e,f){return this.gJ().$3$sidebar$startSize(d,e,f)},
$6$color$height$style$weight(d,e,f,g,h,i){return this.gJ().$6$color$height$style$weight(d,e,f,g,h,i)},
$2$lines(d,e){return this.gJ().$2$lines(d,e)},
$4$height$weight(d,e,f,g){return this.gJ().$4$height$weight(d,e,f,g)},
$3$gap$startSize(d,e,f){return this.gJ().$3$gap$startSize(d,e,f)},
$3$height(d,e,f){return this.gJ().$3$height(d,e,f)},
$5$color$height$style(d,e,f,g,h){return this.gJ().$5$color$height$style(d,e,f,g,h)},
$4$height$style(d,e,f,g){return this.gJ().$4$height$style(d,e,f,g)},
$4$color$height(d,e,f,g){return this.gJ().$4$color$height(d,e,f,g)},
$8$height(d,e,f,g,h,i,j,k){return this.gJ().$8$height(d,e,f,g,h,i,j,k)},
$6$color$height$spacing$weight(d,e,f,g,h,i){return this.gJ().$6$color$height$spacing$weight(d,e,f,g,h,i)},
$2$double_$thick(d,e){return this.gJ().$2$double_$thick(d,e)},
$2$color$thick(d,e){return this.gJ().$2$color$thick(d,e)},
$4$child$label$onTap$selected(d,e,f,g){return this.gJ().$4$child$label$onTap$selected(d,e,f,g)},
$2$color$fontStyle(d,e){return this.gJ().$2$color$fontStyle(d,e)},
$4$stroke(d,e,f,g){return this.gJ().$4$stroke(d,e,f,g)},
$4$clipSingleLine(d,e,f,g){return this.gJ().$4$clipSingleLine(d,e,f,g)},
$2$padding$size(d,e){return this.gJ().$2$padding$size(d,e)},
$1$female(d){return this.gJ().$1$female(d)},
$1$w(d){return this.gJ().$1$w(d)},
$1$h(d){return this.gJ().$1$h(d)},
$1$visualDensity(d){return this.gJ().$1$visualDensity(d)},
$3$overscroll$physics$scrollbars(d,e,f){return this.gJ().$3$overscroll$physics$scrollbars(d,e,f)},
$3$bold(d,e,f){return this.gJ().$3$bold(d,e,f)},
$1$borderRadius(d){return this.gJ().$1$borderRadius(d)},
$2$color$height(d,e){return this.gJ().$2$color$height(d,e)},
$2$fillColor$hintText(d,e){return this.gJ().$2$fillColor$hintText(d,e)},
$2$force(d,e){return this.gJ().$2$force(d,e)},
$2$sendGen$text(d,e){return this.gJ().$2$sendGen$text(d,e)},
$4$framed$options$sendGen$text(d,e,f,g){return this.gJ().$4$framed$options$sendGen$text(d,e,f,g)},
$4$options$parseExtrasForUserText$sendGen$text(d,e,f,g){return this.gJ().$4$options$parseExtrasForUserText$sendGen$text(d,e,f,g)},
$4$applicantDetails$recentUserMessages$startUrl$task(d,e,f,g){return this.gJ().$4$applicantDetails$recentUserMessages$startUrl$task(d,e,f,g)},
$3$parseExtrasForUserText$sendGen$text(d,e,f){return this.gJ().$3$parseExtrasForUserText$sendGen$text(d,e,f)},
$3$creds$prompt$userText(d,e,f){return this.gJ().$3$creds$prompt$userText(d,e,f)},
$3$imageB64$sendGen$text(d,e,f){return this.gJ().$3$imageB64$sendGen$text(d,e,f)},
$3$options$sendGen$text(d,e,f){return this.gJ().$3$options$sendGen$text(d,e,f)},
$3$adultMode$seed(d,e,f){return this.gJ().$3$adultMode$seed(d,e,f)},
$1$baseUrl(d){return this.gJ().$1$baseUrl(d)},
$3$adultGeneration$sceneText$varietySeed(d,e,f){return this.gJ().$3$adultGeneration$sceneText$varietySeed(d,e,f)},
$6$checked$context$onCheckboxChanged$onRowTap$overlayColor$tristate(d,e,f,g,h,i){return this.gJ().$6$checked$context$onCheckboxChanged$onRowTap$overlayColor$tristate(d,e,f,g,h,i)},
$7$icon$iconBg$iconColor$onTap$subtitle$title(d,e,f,g,h,i,j){return this.gJ().$7$icon$iconBg$iconColor$onTap$subtitle$title(d,e,f,g,h,i,j)},
$1$foregroundColor(d){return this.gJ().$1$foregroundColor(d)},
$2$reverse(d,e){return this.gJ().$2$reverse(d,e)},
$2$left$right(d,e){return this.gJ().$2$left$right(d,e)},
$4$displayFeatures$padding$viewInsets$viewPadding(d,e,f,g){return this.gJ().$4$displayFeatures$padding$viewInsets$viewPadding(d,e,f,g)},
$1$iconColor(d){return this.gJ().$1$iconColor(d)},
$1$selectable(d){return this.gJ().$1$selectable(d)},
$2$value(d,e){return this.gJ().$2$value(d,e)},
$1$details(d){return this.gJ().$1$details(d)},
$11$borderRadius$color$containedInkWell$controller$customBorder$onRemoved$position$radius$rectCallback$referenceBox$textDirection(d,e,f,g,h,i,j,k,l,m,n){return this.gJ().$11$borderRadius$color$containedInkWell$controller$customBorder$onRemoved$position$radius$rectCallback$referenceBox$textDirection(d,e,f,g,h,i,j,k,l,m,n)},
$10$borderRadius$color$controller$customBorder$onRemoved$position$radius$rectCallback$referenceBox$textDirection(d,e,f,g,h,i,j,k,l,m){return this.gJ().$10$borderRadius$color$controller$customBorder$onRemoved$position$radius$rectCallback$referenceBox$textDirection(d,e,f,g,h,i,j,k,l,m)},
$1$context(d){return this.gJ().$1$context(d)},
$1$textTheme(d){return this.gJ().$1$textTheme(d)},
$1$hintText(d){return this.gJ().$1$hintText(d)},
$2$fragment$queryParameters(d,e){return this.gJ().$2$fragment$queryParameters(d,e)},
$1$pkceAsyncStorage(d){return this.gJ().$1$pkceAsyncStorage(d)},
$1$localStorage(d){return this.gJ().$1$localStorage(d)},
$2$onDone(d,e){return this.gJ().$2$onDone(d,e)},
$2$isRunning$torchState(d,e){return this.gJ().$2$isRunning$torchState(d,e)},
$1$onlyDirtyChildren(d){return this.gJ().$1$onlyDirtyChildren(d)},
$1$usedSemanticsIds(d){return this.gJ().$1$usedSemanticsIds(d)},
$2$descendant$rect(d,e){return this.gJ().$2$descendant$rect(d,e)},
$1$isHidden(d){return this.gJ().$1$isHidden(d)},
$1$config(d){return this.gJ().$1$config(d)},
$1$isRequired(d){return this.gJ().$1$isRequired(d)},
$1$isKeyboardKey(d){return this.gJ().$1$isKeyboardKey(d)},
$1$isLink(d){return this.gJ().$1$isLink(d)},
$1$3$onlyFirst(d,e,f,g){return this.gJ().$1$3$onlyFirst(d,e,f,g)},
$1$oldLayer(d){return this.gJ().$1$oldLayer(d)},
$6$oldLayer(d,e,f,g,h,i){return this.gJ().$6$oldLayer(d,e,f,g,h,i)},
$4$textDirection(d,e,f,g){return this.gJ().$4$textDirection(d,e,f,g)},
$1$maximum(d){return this.gJ().$1$maximum(d)},
$1$strokeAlign(d){return this.gJ().$1$strokeAlign(d)},
$6$blend$blendMode(d,e,f,g,h,i){return this.gJ().$6$blend$blendMode(d,e,f,g,h,i)},
$5$borderRadius$shape$textDirection(d,e,f,g,h){return this.gJ().$5$borderRadius$shape$textDirection(d,e,f,g,h)},
$4$isDiscrete$offset$parentBox$sliderTheme(d,e,f,g){return this.gJ().$4$isDiscrete$offset$parentBox$sliderTheme(d,e,f,g)},
$1$trackGap(d){return this.gJ().$1$trackGap(d)},
$10$enableAnimation$isDiscrete$isEnabled$parentBox$secondaryOffset$sliderTheme$textDirection$thumbCenter(d,e,f,g,h,i,j,k,l,m){return this.gJ().$10$enableAnimation$isDiscrete$isEnabled$parentBox$secondaryOffset$sliderTheme$textDirection$thumbCenter(d,e,f,g,h,i,j,k,l,m)},
$12$activationAnimation$enableAnimation$isDiscrete$labelPainter$parentBox$sizeWithOverflow$sliderTheme$textDirection$textScaleFactor$value(d,e,f,g,h,i,j,k,l,m,n,o){return this.gJ().$12$activationAnimation$enableAnimation$isDiscrete$labelPainter$parentBox$sizeWithOverflow$sliderTheme$textDirection$textScaleFactor$value(d,e,f,g,h,i,j,k,l,m,n,o)},
$1$thumbSize(d){return this.gJ().$1$thumbSize(d)},
$5$alpha$glow$step(d,e,f,g,h){return this.gJ().$5$alpha$glow$step(d,e,f,g,h)},
$3$a$b(d,e,f){return this.gJ().$3$a$b(d,e,f)},
$2$vertical(d,e){return this.gJ().$2$vertical(d,e)},
$6$back(d,e,f,g,h,i){return this.gJ().$6$back(d,e,f,g,h,i)},
$4$bottomLeft$topRight(d,e,f,g){return this.gJ().$4$bottomLeft$topRight(d,e,f,g)},
$2$selected(d,e){return this.gJ().$2$selected(d,e)},
$3$color$endFraction$startFraction(d,e,f){return this.gJ().$3$color$endFraction$startFraction(d,e,f)},
$6$gapExtent$gapPercentage$gapStart$textDirection(d,e,f,g,h,i){return this.gJ().$6$gapExtent$gapPercentage$gapStart$textDirection(d,e,f,g,h,i)},
$2$parentUsesSize(d,e){return this.gJ().$2$parentUsesSize(d,e)},
$1$maxHeight(d){return this.gJ().$1$maxHeight(d)},
$4$isScrolling$newPosition$oldPosition$velocity(d,e,f,g){return this.gJ().$4$isScrolling$newPosition$oldPosition$velocity(d,e,f,g)},
$2$maxExtent$minExtent(d,e){return this.gJ().$2$maxExtent$minExtent(d,e)},
$1$maxExtent(d){return this.gJ().$1$maxExtent(d)},
$2$bottomNavigationBarTop$floatingActionButtonArea(d,e){return this.gJ().$2$bottomNavigationBarTop$floatingActionButtonArea(d,e)},
$2$from$to(d,e){return this.gJ().$2$from$to(d,e)},
$2$scheduleNewFrame(d,e){return this.gJ().$2$scheduleNewFrame(d,e)},
$2$accept$capture(d,e){return this.gJ().$2$accept$capture(d,e)},
$2$accept$multiple(d,e){return this.gJ().$2$accept$multiple(d,e)},
$2$female$size(d,e){return this.gJ().$2$female$size(d,e)},
$2$h$w(d,e){return this.gJ().$2$h$w(d,e)},
$5$max$min(d,e,f,g,h){return this.gJ().$5$max$min(d,e,f,g,h)},
$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){return this.gJ().$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r)},
$2$f$r(d,e){return this.gJ().$2$f$r(d,e)},
$1$radius(d){return this.gJ().$1$radius(d)},
$4$gender$phone(d,e,f,g){return this.gJ().$4$gender$phone(d,e,f,g)},
$3$hint$prefix(d,e,f){return this.gJ().$3$hint$prefix(d,e,f)},
$3$helperText$prefixText(d,e,f){return this.gJ().$3$helperText$prefixText(d,e,f)},
$1$verifyUrls(d){return this.gJ().$1$verifyUrls(d)},
$2$wrapWidth(d,e){return this.gJ().$2$wrapWidth(d,e)}}
A.arC.prototype={}
A.cf_.prototype={}
A.Ho.prototype={}
A.ckm.prototype={
c2G(d){return-this.a.ghq(0)/2+d*4},
a3w(d,e){var w,v,u,t=this.a
if(d<-t.ghq(0)/2+6||d>t.ghq(0)/2-6||e<6||e>t.gkv(0)-6)return!1
for(t=this.b,w=t.length,v=0;v<w;++v){u=t[v]
if(d>u.a-9&&d<u.b+9&&e>u.c-9&&e<u.d+9)return!1}return!0},
aWN(d,e,f){var w,v,u=e.a,t=f.a-u,s=e.b,r=f.b-s,q=Math.max(1,D.k.dw(Math.sqrt(Math.pow(t,2)+Math.pow(r,2))/2))
for(w=0;w<=q;++w){v=w/q
if(!this.a3w(u+t*v,s+r*v))return!1}return!0},
aVx(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=a0.a,f=h.a,e=D.k.V((g+f.ghq(0)/2)/4),d=h.c
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
if(!h.a3w(-f.ghq(0)/2+k,j))continue
i=Math.pow(-f.ghq(0)/2+k-g,2)+Math.pow(j-e,2)
if(i<o){p=new C.z(n,l)
o=i}}if(p!=null)return p}return null},
bfR(b9,c0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5=this,b6=1e9,b7=b5.aVx(b9),b8=b5.aVx(c0)
if(b7==null||b8==null)return C.a([b9,c0],x.f)
w=b8.a
v=b5.c2G(w)
u=b8.b
t=new C.z(v,u*4)
if(b5.aWN(0,b9,t))return C.a([b9,t],x.f)
v=b7.a
s=b5.d
s===$&&C.c()
r=b7.b
q=x.S
p=C.eu([v*s+r],q)
o=C.V(q,q)
n=x.i
m=C.E([v*s+r,0],q,n)
l=C.E([v*s+r,b5.bOZ(v,r,b8)],q,n)
k=w*s+u
v=b5.a
r=p.$ti
q=r.k("mT<1>")
r=r.c
i=0
for(;;){if(p.a!==0){h=i+1
n=i<6000
i=h}else n=!1
if(!n){j=!1
break}g=p.e
if(g==null)C.ba(C.bd("No elements"))
f=g.a
for(n=new C.mT(p,p.r,q),n.c=g;n.C();){e=n.d
d=e==null?r.a(e):e
e=l.h(0,d)
if(e==null)e=b6
a0=l.h(0,f)
if(e<(a0==null?b6:a0))f=d}if(f===k){j=!0
break}p.W(0,f)
a1=D.o.e3(f,s)
a2=D.o.G(f,s)
for(n=a2*4,e=a1*4,a3=-1;a3<=1;++a3)for(a0=a3===0,a4=!a0,a5=a1+a3,a6=a5*4,a7=a5-w,a8=-1;a8<=1;++a8){if(a0&&a8===0)continue
a9=a2+a8
b0=!0
if(a5>=0)if(a9>=0){b0=b5.c
b0===$&&C.c()
b0=a5>=b0||a9>=s||!b5.a3w(-v.ghq(0)/2+a6,a9*4)}if(b0)continue
b0=!1
if(a4)if(a8!==0)b0=!b5.a3w(-v.ghq(0)/2+a6,n)||!b5.a3w(-v.ghq(0)/2+e,a9*4)
if(b0)continue
b1=a5*s+a9
b0=m.h(0,f)
b0.toString
b2=b0+(a4&&a8!==0?1.4142:1)
b0=m.h(0,b1)
if(b2<(b0==null?b6:b0)){o.n(0,b1,f)
m.n(0,b1,b2)
l.n(0,b1,b2+Math.sqrt(Math.pow(a7,2)+Math.pow(a9-u,2)))
p.K(0,b1)}}}if(!j)return C.a([b9,t],x.f)
b3=C.a([k],x.t)
while(o.ah(0,D.d.gal(b3))){w=o.h(0,D.d.gal(b3))
w.toString
b3.push(w)}w=x.f
u=C.a([b9],w)
for(r=x.cb,q=new C.dw(b3,r),q=new C.bV(q,q.gM(0),r.k("bV<ai.E>")),r=r.k("ai.E");q.C();){n=q.d
if(n==null)n=r.a(n)
e=D.o.e3(n,s)
u.push(new C.z(-v.ghq(0)/2+e*4,D.o.G(n,s)*4))}b4=C.a([D.d.gL(u)],w)
for(a5=0;a9=u.length-1,a5<a9;a5=a9){w=a5+1
for(;;){if(!(a9>w&&!b5.aWN(0,u[a5],u[a9])))break;--a9}b4.push(u[a9])}return b4},
bOZ(d,e,f){return Math.sqrt(Math.pow(d-f.a,2)+Math.pow(e-f.b,2))}}
A.Jc.prototype={}
A.boP.prototype={
bvP(d,e,f,g,h,i,j,k,l,m,n,o){var w,v,u,t,s=this.b
if(s!=null)for(w=this.as,v=1;v<s.length;++v){u=v-1
t=Math.sqrt(Math.pow(s[v].a-s[u].a,2)+Math.pow(s[v].b-s[u].b,2))
w.push(t)
this.at+=t}}}
A.bP_.prototype={
asA(d){var w,v,u=d.ghq(0),t=new A.bP0(d,u)
switch(d.c){case"living":w=t.$1(46)
return C.a([B.fHB,new A.Jc(w.a,w.b,4,"Switching the ad on the big TV",!1,!0,!0,"ad")],x.a)
case"kitchen":return C.a([new A.Jc(new C.z(-u/2+40,42),3.141592653589793,2.8,"Getting a drink from the fridge",!0,!1,!1,""),B.fHA],x.a)
case"bathroom":return B.d9j
case"bedroom":v=t.$1(44)
return C.a([new A.Jc(v.a,v.b,3.4,"Switching the ad on the TV",!1,!0,!0,"ad")],x.a)
default:return B.d0Z}},
atS(a0,a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=e.a.d
d===$&&C.c()
w=d[a0]
v=new A.ckm(w,A.i0w(w))
v.c=D.k.dw(w.ghq(0)/4)+1
v.d=D.k.dw(w.gkv(0)/4)+1
u=A.h98(w,a1)
t=u.a
s=u.c
d=e.c
r=d.length
q=a3.length===0?"Walking in":a3
d.push(A.boQ(a0,"",!1,q,-1,null,!1,!1,0.5,t.a,u.b,t.b))
for(q=e.asA(w),p=q.length,o=t,n=0;n<q.length;q.length===p||(0,C.L)(q),++n){m=q[n]
l=v.bfR(o,m.a)
k=m.e
if(k)j=C.dr(m.d,"Having",0)
else j=!1
d.push(A.boQ(a0,"",j,"Walking",-1,l,!1,!1,0,0,0,0))
o=D.d.gal(l)
d.push(A.boQ(a0,m.w,k,m.d,-1,null,m.r,m.f,m.c,o.a,m.b,o.b))}if(a2!=null){i=A.h98(w,a2)
h=i.c
l=v.bfR(o,i.a)
g=e.asA(w).length!==0&&D.d.gal(e.asA(w)).e
d.push(A.boQ(a0,"",g,"Walking to the next room",-1,l,!1,!1,0,0,0,0))
o=D.d.gal(l)
d.push(A.boQ(a0,"",g,"Opening the door",h,null,!1,!1,1.8,o.a,e.bJ3(w,h),o.b))}for(f=r;f<d.length;++f)d[f].ay=s},
aUk(d,e,f){return this.atS(d,e,f,"")},
bJ3(d,e){var w,v=d.w[e].a
A:{if("left"===v){w=-1.5707963267948966
break A}if("right"===v){w=1.5707963267948966
break A}w=3.141592653589793
break A}return w},
c2F(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
j.atS(10,11,9,"Coming in through the front door")
j.aUk(9,10,5)
for(w=9,v=0;v<8;++v,w=u){u=B.cKB[v]
j.atS(5,w,u,"Walking down the hall")
j.aUk(u,5,v===7?null:5)}t=j.b
s=Math.min(1,t/120)
for(r=j.c,q=r.length,p=0,o=0,n=0;n<q;++n){m=r[n]
if(m.b==null)p+=m.f*=s
else o+=m.at}l=o/Math.max(4,t-p)
for(t=l<=0,k=0,n=0;n<q;++n){m=r[n]
if(m.b!=null)m.f=t?0.1:Math.max(0.05,m.at/l)
m.ax=k
k+=m.f}j.d!==$&&C.aO()
j.d=k},
b85(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g={},f=this.d
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
return new A.arC(v,f.c,f.d,f.e,!1,f.w,f.x,s,f.r,p,o,n,f.ay,0)}v=new A.bP1(g)
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
return new A.arC(f.a,v,s,p,!0,o.w,!1,!1,o.r,"",-1,0,o.ay,m/12)}}
var z=a.updateTypes(["~()","~(kj)","R(nb)","J(J)","R(pH)","~(G)","R(WB)","ak<nD>(N)","R(Lp)","R(a3T)","n(n,mf)","R(mf)","R(zI)","ay<~>()","R(qb)","R(pu)","J(G)","R(J)","GP(Y)","R(h4Y)","R(En)","n(nb)","R(yo)","~(G{keepTour:R})","J(N)","~(J,J,J,J)","UZ(Y)","UW(Y)","~(G,J,J,n,w)","~(G,ak<J>)","a5L(Y)","ak<nD>(ak<nD>)","N(qb)","N(BU)","~(J,J,J,N,N)","~(J,J,J,N,G)","~(~(kj),J,J)","~(J,J,N,N,w)","pu()","~(J,J,G{alongX:R})","~(ak<J>,w)","~(ak<J>)","n(Lp)","~(G,J,w{h:N,w:N})","R(vu)","~(G,ak<J>,w,N,n)","~(G,n,J,J,J,R)","R(VW)","qb(N)","G(BU,BU)","ak<J>(ak<J>)","~(n,ak<J>{r:N})","~(n,J,J)","~(nb,J,n)","~(n,J,J,G)","J(n)","~(u,at)","R(G)","J(G,G)","R(a3p)","G(pH)","~(G,J,J{col:w,round:R})","d3()","n(zI)","~(ak<J>{col:w})"])
A.bUO.prototype={
$1(d){var w=this.a
w=w===0?d:A.bBs(d,w)
return w.ad(0,this.b)},
$S:z+3}
A.bUP.prototype={
$1(d){var w=this.a
return w===0?d:A.bBs(d,w)},
$S:z+3}
A.bUN.prototype={
$4(b5,b6,b7,b8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=this
for(w=b4.b,v=b7.a,u=b7.b,t=b7.c,s=b6.a,r=b6.b,q=b6.c,p=b8.a,o=b8.b,n=b8.c,m=1/w,l=v*m,k=u*m,j=t*m,i=p*m,h=o*m,m=n*m,g=b4.a,f=g.a,e=b4.c,d=x.o,a0=b4.d,a1=b4.e,a2=b4.f,a3=0;a3<w;++a3)for(a4=a3/w,a5=s+v*a4,a6=r+u*a4,a4=q+t*a4,a7=0;a7<w;++a7){a8=a7/w
a9=a5+p*a8
b0=a6+o*a8
a8=a4+n*a8
b1=a9+l
b2=b0+k
b3=a8+j
f.push(new A.nD(C.a([e.$1(new A.J(a9,b0,a8)),e.$1(new A.J(b1,b2,b3)),e.$1(new A.J(b1+i,b2+h,b3+m)),e.$1(new A.J(a9+i,b0+h,a8+m))],d),a0.$1(b5),a1,g.b,a2,g.d,!1,g.c,g.e,g.f,g.w))}},
$S:z+25}
A.bUQ.prototype={
$1(d){var w=d*2*3.141592653589793/this.b
return this.a.aF(0,Math.cos(w)).ad(0,this.c.aF(0,Math.sin(w)))},
$S:z+16}
A.bUM.prototype={
$2(d,e){var w=3.141592653589793*d/this.a,v=6.283185307179586*e/this.b
return new A.J(Math.sin(w)*Math.cos(v),Math.cos(w),Math.sin(w)*Math.sin(v))},
$S:z+58}
A.bUR.prototype={
$1(d){var w=d*2*3.141592653589793/this.b
return this.a.aF(0,Math.cos(w)).ad(0,this.c.aF(0,Math.sin(w)))},
$S:z+16}
A.fJf.prototype={
$1(d){var w=d.b,v=this.a,u=d.c,t=this.b
return new A.J(d.a,w*v-u*t,w*t+u*v)},
$S:z+3}
A.fJd.prototype={
$1(d){var w=this.a
return w===0?d:A.bBs(d,w)},
$S:z+3}
A.fJe.prototype={
$1(d){var w=this,v=w.b===0?d:w.c.$1(d)
return J.fKd(w.a.$1(v),w.d)},
$S:z+3}
A.fJc.prototype={
$1(d){var w=this.b===0?d:this.c.$1(d)
return this.a.$1(w)},
$S:z+3}
A.fJ6.prototype={
$4(d,e,f,g){var w=-d
return 0.5*(2*e+(w+f)*this.a+(2*d-5*e+4*f-g)*this.b+(w+3*e-3*f+g)*this.c)},
$S:1783}
A.bFY.prototype={
$1(d){var w=this,v=-d.c,u=d.b,t=w.a,s=w.b,r=v*t-u*s,q=d.a,p=w.c,o=w.d
return new A.J(q*p-r*o,u*t+v*s,q*o+r*p)},
$S:z+3}
A.bFX.prototype={
$1(d){var w=this,v=w.a
return v.d.ad(0,w.b.$1(new A.J(w.c*d,w.d*d,d-v.c)))},
$S:z+24}
A.clh.prototype={
$1(d){var w=this,v=d.a,u=w.a,t=d.c,s=w.b,r=-v*s+t*u,q=d.b,p=w.c,o=w.d
return new A.J(v*u+t*s,q*p-r*o,-(q*o+r*p))},
$S:z+3}
A.cli.prototype={
$1(d){var w=this.a.c,v=this.b.$1(d.aC(0,w.d))
return new A.J(v.a,v.b,v.c+w.c)},
$S:z+3}
A.cld.prototype={
$1(d){return d.c<1},
$S:z+17}
A.cle.prototype={
$1(d){return A.hII(d,this.b,this.c,this.a.gaGB(0))},
$S:1784}
A.clg.prototype={
$1(d){var w,v=d.b
if(v!==0){w=this.a.h(0,v)
w.toString
v=this.b.h(0,v)
v.toString
v=w/v}else v=d.r
return v},
$S:z+33}
A.clf.prototype={
$2(d,e){var w,v,u=D.o.aL(d.a,e.a)
if(u!==0)return u
w=this.a
v=J.Cz(w.$1(e),w.$1(d))
return v!==0?v:D.o.aL(d.c,e.c)},
$S:z+49}
A.eQP.prototype={
$1(d){var w=this.a,v=w.r,u=d.a
w.r=d
w.a.d.aGz(D.k.D((u-v.a)/1e6,0,0.1))
w.f.sp(0,u/1e6)},
$S:8}
A.eQO.prototype={
$1(d){if(x.C.b(d))this.a.a.d.ana(1+d.grX().b*0.0012)},
$S:267}
A.eQL.prototype={
$1(d){var w=this.a
return w.w=w.a.d.c},
$S:246}
A.eQM.prototype={
$1(d){var w,v,u,t=this.a,s=t.a
if(d.w>=2){s=s.d
s.ana(t.w/d.d/s.c)}else{t=s.d
s=d.a
t.ax=t.at=null
w=t.a+=-s.a*0.009
if(!t.z){v=t.x
u=t.y
t.a=D.k.D(w,v-u,v+u)}t.b=D.k.D(t.b+s.b*0.009,t.r,t.w)
t.aZ()}},
$S:233}
A.eQN.prototype={
$1(d){var w=this.a
w=w.a.f.$1(w.e.cOD(d.b))
return w},
$S:49}
A.eQJ.prototype={
$1(d){return this.a.x=d.b},
$S:22}
A.eQK.prototype={
$0(){var w,v=this.a,u=v.a.z
u.toString
v=v.x
w=this.b.gY(0)
return u.$2(v,w==null?D.au:w)},
$S:0}
A.fnd.prototype={
$2(d,e){var w
A:{if("black"===d){w=e.a===25?"The black wire carries the power (hot). It never goes on the green ground screw. Hot goes to a BRASS screw.":"The black (hot) wire goes on a BRASS screw, not on the silver one. Silver is for white (neutral)."
break A}if("white"===d){w=e.a===25?"The white wire is the neutral. The green screw is only for the ground wire. Neutral goes to a SILVER screw.":"The white (neutral) wire goes on a SILVER screw, not on brass. Brass is for the black (hot) wire."
break A}w="The bare copper ground wire only goes on the GREEN screw. It keeps you safe if something goes wrong."
break A}return w},
$S:z+10}
A.fne.prototype={
$2(d,e){return d==="ground"?y.j:"A black (hot) wire never goes on the green ground screw. The two black wires go on the two BRASS screws."},
$S:z+10}
A.fnf.prototype={
$2(d,e){var w
if(e.e)w="Those are the LOAD screws. They are covered with tape because power must come in on the LINE side. If you wire the LOAD side the GFCI will not protect you."
else A:{if("black"===d){w="The black (hot) wire goes on the BRASS LINE screw."
break A}if("white"===d){w="The white (neutral) wire goes on the SILVER LINE screw."
break A}w=y.j
break A}return w},
$S:z+10}
A.fng.prototype={
$2(d,e){var w
A:{if("black"===d){w="The black (hot) wire joins the fixture BLACK wire. Not the white one, and never the green ground."
break A}if("white"===d){w="The white (neutral) wire joins the fixture WHITE wire. Not the black one, and never the green ground."
break A}w="The bare copper ground wire joins the fixture GREEN ground wire only."
break A}return w},
$S:z+10}
A.fnh.prototype={
$2(d,e){var w
A:{if("black"===d){w="The black (hot) wire joins the fan BLACK wire. Not the white one, and never the green ground."
break A}if("white"===d){w="The white (neutral) wire joins the fan WHITE wire. Not the black one, and never the green ground."
break A}w="The bare copper ground wire joins the fan GREEN ground wire only."
break A}return w},
$S:z+10}
A.fm7.prototype={
$1(d){return d.a===this.a},
$S:z+59}
A.fJy.prototype={
$1(d){return d.a},
$S:z+63}
A.fmd.prototype={
$1(d){return D.d.iA(this.a.f,new A.fme(d)).f},
$S:78}
A.fme.prototype={
$1(d){return d.a===this.a},
$S:z+11}
A.fmb.prototype={
$1(d){return D.d.iA(this.a.e,new A.fmc(d)).e},
$S:13}
A.fmc.prototype={
$1(d){return d.a===this.a},
$S:z+12}
A.fm9.prototype={
$1(d){return d.e==="hot"},
$S:z+12}
A.fma.prototype={
$1(d){return d.e==="neutral"},
$S:z+12}
A.fkb.prototype={
$5(d,e,f,g,h){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=j.a
i.b=d
w=j.b
v=w.b
u=C.a3(v).k("cJ<1,2>")
t=u.k("a2<H.E>")
s=C.B(new C.a2(new C.cJ(v,u),new A.fkc(g),t),t.k("H.E"))
r=g==="ground"
q=r?B.wY:h
p=r?0.6:0.3
if(w.c>0){o=e.ad(0,B.fAH)
i.jP(A.agt(C.a([e,e.ad(0,B.fzn),o],x.o),4),0.085,q,!1,p,8)
return}if(s.length!==0){n=A.bzz(j.c,D.d.gL(s).a,w)
w=A.zC(e,n,0.5)
v=n.a>0
m=w.ad(0,new A.J(v?0.5:-0.5,0.2,0.9))
w=e.ad(0,B.fD2)
if(j.d)v=0
else v=v?0.06:-0.06
l=A.agt(C.a([e,w,m,n.ad(0,new A.J(v,0,0.08)),n],x.o),5)
k=D.d.dn(l,0,D.k.bw(l.length*0.8))
i.jP(k,0.085,q,!1,p,8)
if(!r)i.jP(D.d.fI(l,k.length-1),0.061200000000000004,B.wY,!1,0.6,8)}else{l=A.agt(C.a([e,e.ad(0,B.fxk),A.zC(e,f,0.6),f],x.o),5)
k=r?l:D.d.dn(l,0,D.k.bw(l.length*0.86))
i.jP(k,0.085,q,!1,p,8)
if(!r)i.jP(D.d.fI(l,k.length-1),0.061200000000000004,B.wY,!1,0.6,8)}},
$S:z+28}
A.fkc.prototype={
$1(d){return d.b===this.a},
$S:1785}
A.f6n.prototype={
$2(d,e){var w,v=this.a
v.b=d
w=A.G9(e,0.9,6)
if(this.b)v.jP(w,0.2,B.W8,!1,0.35,10)
this.c.push(D.d.gal(w))},
$S:z+29}
A.f7H.prototype={
$6$taped(d,e,f,g,h,i){var w,v,u,t=this.a
t.e=0.9
t.b=d
w=this.b
v=w.a+e*0.75
u=w.b+f
w=w.c-0.45
t.bP(new A.J(v,u,w),B.fDZ,h,0.7)
t.e5(new A.J(v,u,w),new A.J(v+e*0.22,u,w),0.17,g,0.9,12)
t.ct(new A.J(v+e*0.23,u,w),B.fCc,B.DQ)
if(i)t.bP(new A.J(v+e*0.05,u,w),B.fC2,D.cp,0.2)},
$5(d,e,f,g,h){return this.$6$taped(d,e,f,g,h,!1)},
$S:1786}
A.fk0.prototype={
$1(d){return d.a===this.a},
$S:z+15}
A.fk1.prototype={
$0(){return B.aia},
$S:z+38}
A.fJx.prototype={
$1(d){var w=d>60?62:99
return Math.min(d*0.5625,w)},
$S:5}
A.fJu.prototype={
$1(d){return d>40?30+d/2:58},
$S:5}
A.fJv.prototype={
$2(d,e){return D.k.aL(d.a,e.a)},
$S:1787}
A.fJw.prototype={
$2(d,e){var w=this.a
if(e-d>w.a-w.b){w.b=d
w.a=e}},
$S:702}
A.bOj.prototype={
$1(d){return d},
$S:151}
A.bOU.prototype={
$1(d){return d.a==="Jobs"},
$S:z+44}
A.bOV.prototype={
$1(d){return new A.qb("back",d,5)},
$S:z+48}
A.bOZ.prototype={
$1(d){return d.glt()},
$S:z+9}
A.bOY.prototype={
$1(d){var w=d.c
return(w==="bathroom"||w==="kitchen")&&d.got()},
$S:z+9}
A.bOX.prototype={
$1(d){var w=d.c
return w==="bathroom"||w==="kitchen"},
$S:z+9}
A.bOW.prototype={
$1(d){return d.glt()&&d.got()},
$S:z+9}
A.e0N.prototype={
$1(d){return!(d.glt()&&d.got())},
$S:z+9}
A.e0L.prototype={
$1(d){var w,v=this.a.a.f
A:{if("wiring"===v){w=!d.glt()
break A}if("plumbing"===v){w=!d.got()
break A}w=!(d.glt()&&d.got())
break A}return w},
$S:z+9}
A.e0M.prototype={
$1(d){var w,v=this.a
if(v.c==null)return
w=v.d
w===$&&C.c()
if(w.a.length!==0)v.lx(v.bXv())
else{w=v.a.f
if(w.length!==0){A:{if("wiring"===w){w="This room needs wiring: press the Wiring button, or tap the red outlet or the light."
break A}if("plumbing"===w){w="This room needs plumbing: press the Plumbing button, or tap the toilet or the sink."
break A}w="Walk through the house and fix what the signs say is wrong."
break A}v.lx(w)}}},
$S:8}
A.e0g.prototype={
$0(){var w=this.a
w.ax=this.b
w.ay=this.c},
$S:0}
A.e0h.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.e0f(w))},
$S:0}
A.e0f.prototype={
$0(){return this.a.ax=null},
$S:0}
A.e0i.prototype={
$0(){var w=this.a
w.r=this.b
w.Q=0
w.as=-1
w.at=0
w.k5()},
$S:0}
A.e_P.prototype={
$0(){var w=this.a,v=w.d
v===$&&C.c()
v.e=this.b
w.Q=0
w.as=-1
w.at=0
w.ax=null
w.k5()},
$S:0}
A.e0n.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.d
w===$&&C.c()
u=w[u.e]
u.db=!u.db
v.k5()},
$S:0}
A.e_W.prototype={
$0(){var w=this.a,v=this.b
w.Q=v-100
w.at=v
w.k5()},
$S:0}
A.e_X.prototype={
$0(){var w=this.a,v=this.b
w.as=v-300
w.at=v},
$S:0}
A.e_Y.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&C.c()
w=t.d
w===$&&C.c()
v=this.b
if(!w[t.e].at.W(0,v)){t=u.d
w=t.d
w===$&&C.c()
w[t.e].at.K(0,v)}u.k5()},
$S:0}
A.e_Z.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.d
w===$&&C.c()
w[u.e].at.K(0,this.b)
v.k5()},
$S:0}
A.e0_.prototype={
$0(){var w=this.a
if(w.c==null)return
w.m(new A.e_V(w,this.b))
w.Yv(this.c)},
$S:11}
A.e_V.prototype={
$0(){var w,v=this.a.d
v===$&&C.c()
w=v.d
w===$&&C.c()
return w[v.e].at.W(0,this.b)},
$S:0}
A.e00.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.d
w===$&&C.c()
w[u.e].fy=!0
v.k5()},
$S:0}
A.e06.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=x.p,k=C.a([],l)
for(w=D.d.gag(B.a0X),v=new C.fx(w,new A.e03()),u=this.a,t=this.b;v.C();){s=w.gU(0)
r=D.c.j(0.08)
q=new C.aV(12,12)
p=u.d
p===$&&C.c()
o=p.d
o===$&&C.c()
n=new C.az(o[p.e].cy.h(0,t)===s.a?D.aI:D.b5,1,D.r,-1)
k.push(C.aE(m,C.p(m,new C.x(s.c+" "+s.b,m,D.T3,m,m,m,m,m,m,m,m,m),D.f,m,m,new C.o(r,m,new C.bP(n,n,n,n),new C.bp(q,q,q,q),m,m,D.n),m,m,m,m,D.eh,m,m,m),D.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new A.e04(u,d,t,s),m,m,m,m,m,m,!1,D.a8))}w=u.d
w===$&&C.c()
v=w.d
v===$&&C.c()
if(v[w.e].cy.h(0,t)!=null)k.push(C.aE(m,C.p(m,B.fkv,D.f,m,m,new C.o(D.ew,m,m,C.m(12),m,m,D.n),m,m,m,m,D.eh,m,m,m),D.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new A.e05(u,d,t),m,m,m,m,m,m,!1,D.a8))
return C.bn(!0,new C.C(D.bW,C.v(C.a([B.fgR,D.S,C.c_(D.bD,k,D.bt,8,8)],l),D.F,m,D.e,D.Q,0,D.p),m),!0,!1,D.ag,!0,!0)},
$S:27}
A.e03.prototype={
$1(d){return!(d.d>70||d.e)},
$S:z+15}
A.e04.prototype={
$0(){var w,v,u,t=this
C.a5(t.b,!1).N(null)
w=t.a
v=t.d
w.m(new A.e02(w,t.c,v))
u=v.d>0||v.e
v=v.b
w.lx(u?v+" is on and playing NGMY ads. Tap it to watch full screen.":v+" is plugged in and running.")
A.m4(820,70,0.25,"tri")},
$S:0}
A.e02.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.d
w===$&&C.c()
w[u.e].cy.n(0,this.b,this.c.a)
v.k5()},
$S:0}
A.e05.prototype={
$0(){C.a5(this.b,!1).N(null)
var w=this.a
w.m(new A.e01(w,this.c))
w.lx("Unplugged.")},
$S:0}
A.e01.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.d
w===$&&C.c()
w[u.e].cy.W(0,this.b)
v.k5()},
$S:0}
A.e0G.prototype={
$1(d){return new C.e2(new A.e0E(this.a),null)},
$S:20}
A.e0E.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=null,n=this.a,m=new A.e0F(n,e),l=n.d
l===$&&C.c()
w=l.d
w===$&&C.c()
l=C.d("TV in "+w[l.e].b,o,o,o,o,o,o,D.du,o,o,o)
w=x.p
v=C.a([],w)
for(u=D.d.gag(B.a0X),t=new C.fx(u,new A.e0y());t.C();){s=u.gU(0)
r=s.b
q=n.d
p=q.d
p===$&&C.c()
q=p[q.e].fr===s.a?D.aI:D.fi
v.push(m.$3$color(r,new A.e0z(n,s),q))}v=C.c_(D.bD,v,D.bt,8,8)
u=C.a([],w)
t=n.d
s=t.d
s===$&&C.c()
t=s[t.e]
if(t.fr!=null){t=t.fy?"\u23fb Turn this TV off":"\u23fb Turn this TV on"
u.push(m.$2(t,new A.e0A(n)))}t=n.d
s=t.d
s===$&&C.c()
if(s[t.e].fr!=null&&t.a.length===0)u.push(m.$3$color("\ud83d\uddd1 Take it down",new A.e0B(n),D.ew))
if(n.d.a.length===0)u.push(m.$3$color("\ud83d\udcfa A TV in every room, all on",new A.e0C(n),D.d_))
if(n.d.a.length===0)u.push(m.$3$color("\u23fb All TVs off",new A.e0D(n),D.bo))
return C.bn(!0,new C.C(D.bW,C.v(C.a([l,D.S,v,D.S,C.c_(D.bD,u,D.bt,8,8)],w),D.F,o,D.e,D.Q,0,D.p),o),!0,!1,D.ag,!0,!0)},
$S:88}
A.e0F.prototype={
$3$color(d,e,f){var w=null,v=f.j(0.4),u=C.m(12),t=C.I(f,D.r,1)
return C.aE(w,C.p(w,C.d(d,w,w,w,w,w,w,H.zd,w,w,w),D.f,w,w,new C.o(v,w,t,u,w,w,D.n),w,w,w,w,T.EO,w,w,w),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new A.e0x(this.a,e,this.b),w,w,w,w,w,w,!1,D.a8)},
$2(d,e){return this.$3$color(d,e,D.fi)},
$S:1789}
A.e0x.prototype={
$0(){this.b.$0()
this.c.$1(new A.e0w())
var w=this.a
w.m(w.gOJ())},
$S:0}
A.e0w.prototype={
$0(){},
$S:0}
A.e0y.prototype={
$1(d){return d.d>0||d.e},
$S:z+15}
A.e0z.prototype={
$0(){var w,v=this.a.d
v===$&&C.c()
w=v.d
w===$&&C.c()
v=w[v.e]
w=this.b.a
v.fr=w
if(v.c==="hall")v.fx=w
v.fy=!0},
$S:0}
A.e0A.prototype={
$0(){var w,v=this.a.d
v===$&&C.c()
w=v.d
w===$&&C.c()
v=w[v.e]
return v.fy=!v.fy},
$S:0}
A.e0B.prototype={
$0(){var w,v=this.a.d
v===$&&C.c()
w=v.d
w===$&&C.c()
v=w[v.e]
v.fr=null
v.fy=!1},
$S:0}
A.e0C.prototype={
$0(){var w,v,u,t=this.a.d
t===$&&C.c()
t=t.gwg()
w=t.length
v=0
for(;v<w;++v){u=t[v]
if(u.fr==null)u.fr="tv100"
if(u.c==="hall")if(u.fx==null)u.fx="tv100"
u.fy=!0}},
$S:0}
A.e0D.prototype={
$0(){var w,v,u=this.a.d
u===$&&C.c()
u=u.gwg()
w=u.length
v=0
for(;v<w;++v)u[v].fy=!1},
$S:0}
A.e0t.prototype={
$1(d){return new C.e2(new A.e0s(this.a),null)},
$S:20}
A.e0s.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=null,n=x.p,m=C.a([],n)
for(w=this.a,v=0;v<5;++v){u=B.daz[v]
t=w.db===u?D.aI.j(0.25):D.c.j(0.07)
s=new C.aV(12,12)
r=w.db===u
q=r?D.aI:D.b5
p=new C.az(q,r?2:1,D.r,-1)
if(u<60)q=""+u+" seconds"
else q=u===60?"1 minute":""+(u/60|0)+" minutes"
r=r?D.aI:D.c
m.push(C.aE(o,C.p(o,new C.x(q,o,new C.F(!0,r,o,o,o,o,13,D.u,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),o,o,o,o,o,o,o,o,o),D.f,o,o,new C.o(t,o,new C.bP(p,p,p,p),new C.bp(s,s,s,s),o,o,D.n),o,o,o,o,D.iO,o,o,o),D.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new A.e0q(w,e,u),o,o,o,o,o,o,!1,D.a8))}return C.bn(!0,new C.C(D.bW,C.v(C.a([B.fmw,D.at,B.fqW,D.ac,C.c_(D.bD,m,D.bt,8,8),D.ay,C.dp(A5.al7,B.f7U,new A.e0r(w,d),o)],n),D.F,o,D.e,D.Q,0,D.p),o),!0,!1,D.ag,!0,!0)},
$S:88}
A.e0q.prototype={
$0(){return this.b.$1(new A.e0p(this.a,this.c))},
$S:0}
A.e0p.prototype={
$0(){return this.a.db=this.b},
$S:0}
A.e0r.prototype={
$0(){C.a5(this.b,!1).N(null)
var w=this.a
w.csr(w.db)},
$S:0}
A.e0j.prototype={
$0(){var w=this.a,v=w.d
v===$&&C.c()
v.e=this.b
w.ax=null
w.k5()},
$S:0}
A.e0k.prototype={
$1(d){return this.a.cwE()},
$S:14}
A.e0l.prototype={
$0(){},
$S:0}
A.e0u.prototype={
$0(){return this.a.dy=this.b.x},
$S:0}
A.e0o.prototype={
$0(){var w=this.b
w.k5()
w.go=this.a.a;++w.id},
$S:0}
A.e0m.prototype={
$0(){var w=this.a
w.cx=null
w.dy=""},
$S:0}
A.e_R.prototype={
$1(d){var w=this.a,v=w.id
w=w.k2
return v==="ptrap"?new A.a8e(w,null):new A.a3G(w,null)},
$S:1790}
A.e_S.prototype={
$1(d){var w=this.a
return new A.GP(w.id,w.k1,null)},
$S:z+18}
A.e0H.prototype={
$1(d){var w=this.a
return new A.GP(w.a,w.c,null)},
$S:z+18}
A.e_U.prototype={
$1(d){return A.fNR(!1,this.a.CW,!1)},
$S:z+26}
A.e_T.prototype={
$1(d){return new A.UW(this.a.cx,null)},
$S:z+27}
A.e_a.prototype={
$1(d){var w,v,u,t,s,r,q,p=null,o=this.a,n=o.d
n===$&&C.c()
w=n.d
w===$&&C.c()
n=C.d("Add to "+w[n.e].b,p,p,p,p,p,p,D.du,p,p,p)
w=x.p
v=C.a([],w)
for(u=0;u<3;++u){t={}
s=B.dc3[u]
t.a=null
t.a=s.a
r=new C.aV(12,12)
q=new C.az(D.b1,1,D.r,-1)
v.push(C.aE(p,C.p(p,new C.x(s.b,p,D.rr,p,p,p,p,p,p,p,p,p),D.f,p,p,new C.o(D.fi.j(0.4),p,new C.bP(q,q,q,q),new C.bp(r,r,r,r),p,p,D.n),p,p,p,p,T.EO,p,p,p),D.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new A.e_9(t,o,d),p,p,p,p,p,p,!1,D.a8))}return C.bn(!0,new C.C(D.bW,C.v(C.a([n,D.at,B.foJ,D.ac,C.c_(D.bD,v,D.bt,8,8)],w),D.F,p,D.e,D.Q,0,D.p),p),!0,!1,D.ag,!0,!0)},
$S:27}
A.e_9.prototype={
$0(){C.a5(this.c,!1).N(null)
this.b.bwG(this.a.a)},
$S:0}
A.e_4.prototype={
$1(d){return d.a==="back"},
$S:z+14}
A.e_5.prototype={
$1(d){return d.a==="back"},
$S:z+14}
A.e_6.prototype={
$1(d){return Math.abs(d-this.a)>13},
$S:118}
A.e_7.prototype={
$0(){var w=this
w.b.dy.push(new A.aTz(w.c,w.d,new A.Xs(C.V(x.S,x.N))))
w.a.k5()},
$S:0}
A.e_Q.prototype={
$0(){var w,v,u,t=this,s=t.b
s.c=s.c+t.c
s.d=s.d+t.d
w=t.a
v=w.d
v===$&&C.c()
u=v.d
u===$&&C.c()
u[v.e].aBx(0,s)
w.k5()},
$S:0}
A.e0v.prototype={
$0(){var w,v,u,t=this.b
t.e=(t.e+1)%4
w=this.a
v=w.d
v===$&&C.c()
u=v.d
u===$&&C.c()
u[v.e].aBx(0,t)
w.k5()},
$S:0}
A.e0d.prototype={
$0(){var w=this.b
w.f=(w.f+1)%6
this.a.k5()},
$S:0}
A.e0e.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.d
w===$&&C.c()
D.d.W(w[u.e].x,this.b)
v.at=v.Q=0
v.k5()},
$S:0}
A.e_8.prototype={
$0(){var w=this.a,v=this.b.a
w.Q=v
w.at=100+v
w.k5()},
$S:0}
A.e_E.prototype={
$0(){return this.a.acp(-6,0)},
$S:0}
A.e_F.prototype={
$0(){return this.a.acp(6,0)},
$S:0}
A.e_G.prototype={
$0(){return this.a.acp(0,-6)},
$S:0}
A.e_H.prototype={
$0(){return this.a.acp(0,6)},
$S:0}
A.e_I.prototype={
$0(){return this.a.bwJ(this.b.a)},
$S:0}
A.e_J.prototype={
$0(){var w=this.a
return w.m(new A.e_D(w))},
$S:0}
A.e_D.prototype={
$0(){return this.a.as=-1},
$S:0}
A.e_K.prototype={
$0(){var w=this.a
w.m(new A.e_C(w,this.b))},
$S:0}
A.e_C.prototype={
$0(){var w,v=this.a,u=v.as,t=this.b,s=v.d
if(u<0){s===$&&C.c()
u=s.d
u===$&&C.c()
D.d.hc(u[s.e].z,0,3,t)}else{s===$&&C.c()
w=s.d
w===$&&C.c()
w[s.e].z[u]=t}v.k5()},
$S:0}
A.e_L.prototype={
$0(){var w=this.a
w.m(new A.e_B(w,this.b))},
$S:0}
A.e_B.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.d
w===$&&C.c()
w[u.e].Q=this.b
v.k5()},
$S:0}
A.e_M.prototype={
$0(){var w=this.a
w.m(new A.e_A(w))},
$S:0}
A.e_A.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.d
w===$&&C.c()
u=w[u.e]
u.dx=u.dx==="fan"?"light":"fan"
v.k5()},
$S:0}
A.e_N.prototype={
$0(){var w=this.a
w.m(new A.e_z(w,this.b))},
$S:0}
A.e_z.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.d
w===$&&C.c()
w[u.e].as=this.b
v.k5()},
$S:0}
A.e_O.prototype={
$0(){return this.a.Yv(this.b.c)},
$S:0}
A.e0K.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.e0I(w))},
$S:0}
A.e0I.prototype={
$0(){return this.a.go=null},
$S:0}
A.e0J.prototype={
$3(d,e,f){var w=null
return C.db(C.cgX(D.A,w,w,w,w,D.cm,D.wu,w,this.a.go,!1,!1,!1,w,D.oE,1,w),e)},
$S:105}
A.e_q.prototype={
$0(){var w=this.a,v=w.d
v===$&&C.c()
return v.a.length!==0?w.DG():w.ch1(this.b)},
$S:0}
A.e_j.prototype={
$0(){return this.a.OI()},
$S:0}
A.e_i.prototype={
$1(d){return d<=5},
$S:33}
A.e_h.prototype={
$1(d){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.d
w===$&&C.c()
return A.hTe(w[u.e],v.CW.gu2()/1000,v.cfM())},
$S:z+7}
A.e_r.prototype={
$0(){var w=this.a
w.m(new A.e_g(w))
w.OI()},
$S:0}
A.e_g.prototype={
$0(){var w=this.a
return w.x=!w.x},
$S:0}
A.e_s.prototype={
$0(){var w=this.a
return w.cx!=null?w.a1b():w.cwD()},
$S:0}
A.e_t.prototype={
$0(){var w=this.a
w.m(new A.e_f(w))
w.OI()
if(w.z)w.lx("Drag to turn all the way round. Double tap a spot on the floor to walk there.")},
$S:0}
A.e_f.prototype={
$0(){var w=this.a,v=!w.z
w.z=v
if(v&&w.cx!=null)w.a1b()
w.k5()},
$S:0}
A.e_u.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.d
w===$&&C.c()
return v.Yv(w[u.e].c!=="outside"?11:10)},
$S:0}
A.e_v.prototype={
$0(){var w=this.a
return w.m(new A.e_e(w))},
$S:0}
A.e_e.prototype={
$0(){var w=this.a,v=!w.w
w.w=v
if(v)w.lx("Voltage tester in your hand: tap an outlet, a switch or the light.")},
$S:0}
A.e_w.prototype={
$0(){var w=this.a
return w.m(new A.e_d(w))},
$S:0}
A.e_d.prototype={
$0(){var w=this.a
return w.y=!w.y},
$S:0}
A.e_x.prototype={
$0(){return this.a.QF("look")},
$S:0}
A.e_y.prototype={
$0(){return this.a.QF("furniture")},
$S:0}
A.e_k.prototype={
$0(){return this.a.QF("walls")},
$S:0}
A.e_l.prototype={
$0(){return this.a.QF("floor")},
$S:0}
A.e_m.prototype={
$0(){return this.a.QF("ceiling")},
$S:0}
A.e_n.prototype={
$0(){return this.a.QF("doors")},
$S:0}
A.e_o.prototype={
$0(){return C.a5(this.a,!1).ce(C.ej(new A.e_c(),!1,null,x.H))},
$S:0}
A.e_c.prototype={
$1(d){return B.aDe},
$S:z+30}
A.e_p.prototype={
$0(){var w=this.a
return w.m(new A.e_b(w))},
$S:0}
A.e_b.prototype={
$0(){var w=this.a.d
w===$&&C.c()
return w.c=!w.c},
$S:0}
A.e0c.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=C.aI(d,m,x.w).w,k=this.a,j=k.d
j===$&&C.c()
w=x.p
j=C.a([B.fdz,D.at,C.d("Wiring "+j.gcRZ()+"/"+k.d.gwg().length+" \xb7 Plumbing "+k.d.gcOR()+"/"+k.d.gcOQ(),m,m,m,m,m,m,B.Is,m,m,m),D.S],w)
for(v=k.d.gwg(),u=v.length,t=0;t<v.length;v.length===u||(0,C.L)(v),++t){s=v[t]
r=D.c.j(0.05)
q=new C.aV(12,12)
p=new C.az(s.glt()&&s.got()?D.bc.j(0.5):D.bF,1,D.r,-1)
if(s.glt()&&s.got())o="\u2705 finished"
else{o=s.glt()?"":"\u26a1 wiring  "
o+=s.got()?"":"\ud83d\udeb0 plumbing"}n=s.glt()&&s.got()?D.ex:D.ad
j.push(C.aE(m,C.p(m,new C.co(D.aQ,D.e,D.j,D.m,m,D.p,m,0,C.a([new C.bF(1,D.bj,new C.x(s.b,m,B.f35,m,m,m,m,m,m,m,m,m),m),new C.x(o,m,new C.F(!0,n,m,m,m,m,12,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m,m,m,m,m,m,m)],w),m),D.f,m,m,new C.o(r,m,new C.bP(p,p,p,p),new C.bp(q,q,q,q),m,m,D.n),m,m,m,D.eO,D.bR,m,m,m),D.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new A.e09(k,d,s),m,m,m,m,m,m,!1,D.a8))}j.push(D.P)
j.push(C.dT(B.faJ,new A.e0a(k,d),m))
j.push(D.P)
j.push(C.bJ(B.f79,new A.e0b(k,d),m))
return C.bn(!0,new C.cU(new C.aY(0,1/0,0,l.a.b*0.75),C.cB(j,m,D.bW,m,m,D.ai,!0),m),!0,!1,D.ag,!0,!0)},
$S:27}
A.e09.prototype={
$0(){C.a5(this.b,!1).N(null)
this.a.Yv(this.c.a)},
$S:0}
A.e0a.prototype={
$0(){C.a5(this.b,!1).N(null)
var w=this.a
w.m(new A.e08(w))
w.lx("Every room needs its wiring and plumbing again. Wire the whole house from the start.")},
$S:0}
A.e08.prototype={
$0(){var w=this.a,v=w.d
v===$&&C.c()
v.cLx()
w.k5()},
$S:0}
A.e0b.prototype={
$0(){C.a5(this.b,!1).N(null)
$.aTF=A.fZA(D.o.G(Date.now(),1e5))
var w=this.a
w.m(new A.e07(w))
w.ava(!0)},
$S:0}
A.e07.prototype={
$0(){var w=this.a,v=$.aTF
v.toString
w.d=v
w.r="look"
w.Q=0
w.as=-1
w.at=0
w.k5()},
$S:0}
A.dlH.prototype={
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
A.fkp.prototype={
$2(d,e){return this.a===d?e:0},
$S:703}
A.fke.prototype={
$1(d){return d.a==="right"},
$S:z+14}
A.fkn.prototype={
$1(d){var w=this,v=w.a,u=v.a
A:{if("left"===u){v=A.Ap(d,0,1.5707963267948966,new A.J(-w.b/2,0,v.b+w.c/2-40))
break A}if("right"===u){v=A.Ap(d,0,-1.5707963267948966,new A.J(w.b/2,0,v.b+w.c/2-40))
break A}v=A.Ap(d,0,0,new A.J(v.b,0,0))
break A}return v},
$S:z+31}
A.fkf.prototype={
$1(d){return d.a==="back"},
$S:z+14}
A.fkg.prototype={
$1(d){return d.b},
$S:z+32}
A.fkh.prototype={
$2(d,e){return e},
$S:87}
A.fki.prototype={
$3(d,e,f){return F.aOD(d,e,0,f+this.a)},
$S:313}
A.fkk.prototype={
$2(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this
if(a2==null)return
w=A.bza(a2)
v=a1.a
u=A.hhB(v,w)
t=u.a
s=u.b
r=u.d
q=t-2.5
p=s-2.5
o=a1.b
n=o.b=730+a3
o.e=5
if(v.c==="hall"){m=a3===1
l=a1.c
k=m?-l/2:l/2
j=m?1:-1
i=u.c
o.bP(new A.J(k+j*1.4,r,i),new A.J(2.6,s+3,t+3),B.Kb,0.5)
o.bP(new A.J(k+j*2.8,r,i),new A.J(0.2,s,t),H.mN,0.7)
if(v.fy){h=k+j*2.95
l=q/2
g=m?i+l:i-l
f=m?i-l:i+l
l=p/2
e=r+l
l=r-l
a1.d.push(new A.Wv(C.a([new A.J(h,e,g),new A.J(h,e,f),new A.J(h,l,f),new A.J(h,l,g)],x.o),n,new A.fkl(v,a3),320*p/q,9,1))}}else{k=u.c
o.bP(new A.J(k,r,1.4),new A.J(t+3,s+3,2.6),B.Kb,0.5)
o.bP(new A.J(k,r,2.8),new A.J(t,s,0.2),H.mN,0.7)
if(v.fy){l=q/2
e=k-l
d=p/2
a0=r+d
l=k+l
d=r-d
a1.d.push(new A.Wv(C.a([new A.J(e,a0,2.95),new A.J(l,a0,2.95),new A.J(l,d,2.95),new A.J(e,d,2.95)],x.o),n,new A.fkm(v),320*p/q,9,1))}}o.e=0
v=v.fy?"It is on and playing "+E.jU[v.go].a+". Tap it to watch full screen with the remote.":"The TV is off. Tap it to turn it on."
a1.e.n(0,n,new A.d3(w.b,v,new A.J(0,r,4),110))},
$S:1793}
A.fkl.prototype={
$3(d,e,f){var w=this.a
return F.aOD(d,e,w.go,f+w.a+this.b*3)},
$S:313}
A.fkm.prototype={
$3(d,e,f){var w=this.a
return F.aOD(d,e,w.go,f+w.a)},
$S:313}
A.fko.prototype={
$2(d,e){var w=this.a,v=w.f,u=w.r
w.f=1
w.r=!1
w.b=0
w.e5(new A.J(d,e,0),new A.J(d,e,2.2),0.7,B.K1,0.7,10)
w.f=v
w.r=u},
$S:702}
A.fkj.prototype={
$1(d){d.gcQO()
return!1},
$S:z+19}
A.fem.prototype={
$2(d,e){return this.a===d?e:0},
$S:703}
A.fen.prototype={
$5(d,e,f,g,h){var w=d.ad(0,e.aF(0,g)).ad(0,new A.J(0,h,0)),v=this.a
A.a0n(v,w.ad(0,f.aF(0,0.1)),e,B.lT,26,30,B.oi,f,0)
A.a0n(v,w.ad(0,f.aF(0,0.2)),e,B.lT,22,26,B.Ew,f,0.6)
A.a0n(v,w.ad(0,f.aF(0,0.3)),e,B.lT,22,1.2,B.oi,f,0)
A.a0n(v,w.ad(0,f.aF(0,0.3)),e,B.lT,1.2,26,B.oi,f,0)},
$S:z+34}
A.fel.prototype={
$5(d,e,f,g,h){var w=d.ad(0,e.aF(0,g)),v=this.a,u=v.b
A.a0n(v,w.ad(0,new A.J(0,42,0)).ad(0,f.aF(0,0.1)),e,B.lT,34,84,B.oi,f,0)
v.b=h
A.a0n(v,w.ad(0,new A.J(0,41,0)).ad(0,f.aF(0,0.2)),e,B.lT,28,80,B.JS,f,0.2)
v.b=0
A.a0n(v,w.ad(0,new A.J(0,58,0)).ad(0,f.aF(0,0.3)),e,B.lT,20,26,B.KS,f,0)
A.a0n(v,w.ad(0,new A.J(0,22,0)).ad(0,f.aF(0,0.3)),e,B.lT,20,26,B.KS,f,0)
v.bP(w.ad(0,e.aF(0,9)).ad(0,new A.J(0,40,0)).ad(0,f.aF(0,1)),new A.J(2.6,2.6,2.6),B.DH,0.8)
v.b=u},
$S:z+35}
A.fn2.prototype={
$1(d){d.gcQO()
return!1},
$S:z+19}
A.feV.prototype={
$3(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k=x.z,j=C.a([],k),i=new A.kj(j)
i.b=this.a
i.r=!0
d.$1(i)
k=C.a([],k)
for(j=A.hck(j,e,B.hb),w=j.length,v=f.a,u=f.b,t=f.c,s=x.o,r=0;r<j.length;j.length===w||(0,C.L)(j),++r){q=j[r]
p=C.a([],s)
for(o=q.a,n=o.length,m=0;m<o.length;o.length===n||(0,C.L)(o),++m){l=o[m]
p.push(new A.J(l.a+v,l.b+u,l.c+t))}k.push(new A.nD(p,q.b,q.c,q.d,q.e,q.f,q.r,q.w,q.x,q.y,q.z))}D.d.v(this.b.a,k)},
$S:z+36}
A.feH.prototype={
$5(d,e,f,g,h){var w=this.a
w.ba6(d,e,f,h,!1,g,10)
w.kt(e,g*1.04,h,4,8)},
$S:z+37}
A.feI.prototype={
$1(d){return d.iN(B.hb,2.6,B.Wc,4,8,0.15)},
$S:z+1}
A.feJ.prototype={
$1(d){return d.kt(B.hb,2.6,D.bV,3,8)},
$S:z+1}
A.feK.prototype={
$1(d){return d.kt(B.hb,5.2,this.a,4,10)},
$S:z+1}
A.feN.prototype={
$1(d){return d.ba6(B.hb,B.aQo,4.9,this.a,!1,6.5,12)},
$S:z+1}
A.feO.prototype={
$1(d){return d.ba5(B.hb,B.fzo,5.1,B.b7H,!1,12)},
$S:z+1}
A.feP.prototype={
$1(d){return d.kt(B.hb,6.7,this.a,4,10)},
$S:z+1}
A.feQ.prototype={
$1(d){return d.kt(B.hb,4.7,this.a,6,12)},
$S:z+1}
A.feR.prototype={
$1(d){return d.kt(B.hb,3,this.a,4,8)},
$S:z+1}
A.feS.prototype={
$1(d){return d.kt(B.hb,5,this.a,5,10)},
$S:z+1}
A.feT.prototype={
$1(d){return d.kt(B.hb,3.6,this.a,3,8)},
$S:z+1}
A.feU.prototype={
$1(d){return d.kt(B.hb,1,D.c,3,6)},
$S:z+1}
A.feL.prototype={
$1(d){return d.kt(B.hb,1,this.a,3,6)},
$S:z+1}
A.feM.prototype={
$1(d){return d.kt(B.hb,1.9,this.a,4,8)},
$S:z+1}
A.fku.prototype={
$4$alongX(d,e,f,g){var w,v,u,t,s,r,q,p,o,n
for(w=this.a,v=0;v<=f;++v){u=A.zC(d,e,v/f)
w.aBd(new A.J(u.a,4,u.c),B.fEd,B.W0,!1,0.05)}t=A.zC(d,e,0.5)
for(s=e.aC(0,d).gT3()+0.15,r=t.a,q=t.c,p=0;p<2;++p){o=B.d_x[p]
n=g?new A.J(s,0.16,0.3):new A.J(0.3,0.16,s)
w.bP(new A.J(r,o,q),n,B.W0,0.05)}},
$3(d,e,f){return this.$4$alongX(d,e,f,!0)},
$S:z+39}
A.fkr.prototype={
$2(d,e){return this.a.jP(A.G9(d,0.35,3),0.06,e,!1,0.4,6)},
$S:z+40}
A.fkq.prototype={
$1(d){return this.a.jP(A.G9(d,0.5,3),0.14,B.pf,!1,0.3,8)},
$S:z+41}
A.fkt.prototype={
$2$col(d,e){return this.a.jP(A.G9(d,0.4,3),0.055,e,!1,0.35,6)},
$1(d){return this.$2$col(d,B.W8)},
$S:z+64}
A.fks.prototype={
$5$h$w(d,e,f,g,h){var w=this.a
w.b=d
w.bP(e,new A.J(h,g,0.06),f,0.3)},
$3(d,e,f){return this.$5$h$w(d,e,f,0.7,0.45)},
$S:z+43}
A.flo.prototype={
$0(){return A.m4(1320,120,0.25,"tri")},
$S:0}
A.dJn.prototype={
$1(d){return this.a},
$S:41}
A.dJq.prototype={
$0(){return C.a5(this.a,!1).m7()},
$S:0}
A.dJr.prototype={
$0(){var w=this.a
return w.m(new A.dJp(w))},
$S:0}
A.dJp.prototype={
$0(){return this.a.d=!1},
$S:0}
A.dJs.prototype={
$0(){var w=this.a
return w.m(new A.dJo(w))},
$S:0}
A.dJo.prototype={
$0(){return this.a.d=!0},
$S:0}
A.dJu.prototype={
$0(){var w=this.a
return w.A3(A.aZ2("","",w.d))},
$S:0}
A.dJv.prototype={
$0(){var w=this.a
return w.A3(A.aZ2("wiring","",w.d))},
$S:0}
A.dJw.prototype={
$0(){var w=this.a
return w.A3(A.aZ2("plumbing","",w.d))},
$S:0}
A.dJx.prototype={
$0(){var w=this.a
return w.A3(A.aZ2("fix","",w.d))},
$S:0}
A.dJy.prototype={
$0(){var w=this.a
return w.A3(A.fNR(w.d,null,!1))},
$S:0}
A.dJz.prototype={
$0(){var w=this.a
return w.A3(A.fNR(w.d,null,!0))},
$S:0}
A.dJA.prototype={
$0(){var w=this.a
return w.A3(new A.apM(w.d,null))},
$S:0}
A.dJB.prototype={
$0(){var w=this.b.a
w=w==="house"?B.fHJ:A.aZ2("",w,!1)
return this.a.A3(w)},
$S:0}
A.dJt.prototype={
$0(){return this.a.A3(B.aDe)},
$S:0}
A.coW.prototype={
$0(){return this.a.d.ana(0.8)},
$S:0}
A.coX.prototype={
$0(){return this.a.d.ana(1.25)},
$S:0}
A.fBE.prototype={
$1(d){var w,v,u,t,s,r,q,p,o=null,n=C.aI(d,o,x.w).w,m=this.b,l=this.c,k=l.length,j=x.p,i=C.a([C.d(this.a,o,o,o,o,o,o,D.du,o,o,o),D.at,C.d(""+new C.a2(m,new A.fBD(),C.T(m).k("a2<1>")).gM(0)+" of "+k+" steps done",o,o,o,o,o,o,B.Is,o,o,o),D.S],j)
for(w=0;w<k;++w){v=D.c.j(0.05)
u=new C.aV(14,14)
t=new C.az(m[w]?D.bc.j(0.6):D.bF,1,D.r,-1)
s=m[w]
r=s?"\u2705":""+(w+1)+"."
q=s?D.c:D.aI
p=l[w]
s=s?D.az:D.c
i.push(C.p(o,new C.co(D.aQ,D.e,D.j,D.F,o,D.p,o,0,C.a([new C.x(r,o,new C.F(!0,q,o,o,o,o,14,D.u,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),o,o,o,o,o,o,o,o,o),D.aw,new C.bF(1,D.bj,new C.x(p,o,new C.F(!0,s,o,o,o,o,13,o,o,o,o,o,1.4,o,o,o,o,o,o,o,o,o,o,o,o,o),o,o,o,o,o,o,o,o,o),o)],j),o),D.f,o,o,new C.o(v,o,new C.bP(t,t,t,t),new C.bp(u,u,u,u),o,o,D.n),o,o,o,D.cG,D.bm,o,o,o))}return C.bn(!0,new C.cU(new C.aY(0,1/0,0,n.a.b*0.75),C.cB(i,o,D.bW,o,o,D.ai,!0),o),!0,!1,D.ag,!0,!0)},
$S:27}
A.fBD.prototype={
$1(d){return d},
$S:151}
A.bR7.prototype={
$0(){return C.a5(this.a,!1).m7()},
$S:0}
A.d1A.prototype={
$0(){var w=this.a
w.y=this.b
w.z=this.c},
$S:0}
A.d1B.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.d1z(w))},
$S:0}
A.d1z.prototype={
$0(){return this.a.y=null},
$S:0}
A.d1t.prototype={
$0(){return this.a.x=0},
$S:0}
A.d1s.prototype={
$1(d){var w=this.a.geS(0).b
return new C.bc(w,C.a3(w).k("bc<2>")).t(0,d)},
$S:3}
A.d1u.prototype={
$1(d){return d.a===this.a},
$S:z+11}
A.d1v.prototype={
$2(d,e){return e===this.a},
$S:403}
A.d1w.prototype={
$0(){var w=this.a
w.xn()
w.x=this.b},
$S:0}
A.d1x.prototype={
$0(){return this.a.x=this.b},
$S:0}
A.d1y.prototype={
$0(){var w=this.a,v=w.geS(0),u=v.a
v.a=!u
if(u)v.d=!1
w.xn()},
$S:0}
A.d1C.prototype={
$0(){var w=this.a,v=w.geS(0)
v.d=v.a=!0
w.xn()},
$S:0}
A.d1K.prototype={
$1(d){return!d},
$S:151}
A.d1N.prototype={
$0(){var w=this.a.gFB()
return A.fBC(this.b,w.b,w.d,this.c)},
$S:0}
A.d1L.prototype={
$0(){var w=this.a
return w.m(new A.d1J(w))},
$S:0}
A.d1J.prototype={
$0(){var w=this.a,v=w.geS(0)
v.e=!v.e
w.xn()},
$S:0}
A.d1M.prototype={
$0(){var w=this.a
return w.m(new A.d1I(w))},
$S:0}
A.d1I.prototype={
$0(){var w=this.a,v=w.geS(0)
v.f=!v.f
w.xn()},
$S:0}
A.d1O.prototype={
$0(){var w=this.a,v=w.gkQ()
return v.lR(10,0.2,new A.J(0.6,0,w.geS(0).c===0?4.2:0.4),-0.95)},
$S:0}
A.d1P.prototype={
$0(){var w=this.a,v=w.gkQ()
return v.lR(10,0.2,new A.J(-0.6,0,w.geS(0).c===0?4.2:0.4),0.95)},
$S:0}
A.d1Q.prototype={
$1(d){return!this.a.geS(0).b.iP(0,d.a)},
$S:z+12}
A.d1R.prototype={
$0(){var w=this.a,v=this.b,u=v.a
if(w.geS(0).b.iP(0,u)){w.oW("That wire is already fastened. Tap the wire in the 3D view to take it off if you want to move it.")
return}w.m(new A.d1H(w,v))
if(w.w.length!==0){if(u==="ground")w.gkQ().lR(8,0.55,B.fBb,0.15)
else if(u==="white")w.gkQ().lR(8.5,0.2,B.fDj,0.95)
else w.gkQ().lR(8.5,0.2,B.fx0,-0.95)
w.kr(v.b+": now tap the screw it belongs on.",!0)}},
$S:0}
A.d1H.prototype={
$0(){var w=this.a,v=this.b.a
return w.w=w.w===v?"":v},
$S:0}
A.d1S.prototype={
$0(){var w=this.a
w.m(new A.d1G(w))
A.y4()
w.kr("The wires are folded back and the device is pushed into the box. Now put the cover plate on.",!0)
w.nU()},
$S:0}
A.d1G.prototype={
$0(){var w=this.a
w.geS(0).c=1
w.xn()},
$S:0}
A.d1T.prototype={
$0(){var w=this.a
w.m(new A.d1F(w))
w.nU()},
$S:0}
A.d1F.prototype={
$0(){var w=this.a
w.geS(0).c=0
w.xn()},
$S:0}
A.d1U.prototype={
$0(){var w=this.a
w.m(new A.d1E(w))
A.y4()
w.kr("Cover plate on. Now turn the power on and test.",!0)},
$S:0}
A.d1E.prototype={
$0(){var w=this.a
w.geS(0).c=2
w.xn()},
$S:0}
A.d1V.prototype={
$0(){var w=this.a
w.m(new A.d1D(w))
w.nU()},
$S:0}
A.d1D.prototype={
$0(){var w=this.a,v=w.geS(0)
v.c=0
v.b.a8(0)
v.a=!0
v.d=!1
w.Q=0
w.w=""
w.x=0
w.xn()},
$S:0}
A.eKt.prototype={
$0(){var w=this.a
w.x=this.b
w.y=this.c},
$S:0}
A.eKu.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.eKs(w))},
$S:0}
A.eKs.prototype={
$0(){return this.a.x=null},
$S:0}
A.eKm.prototype={
$0(){return this.a.w=0},
$S:0}
A.eKn.prototype={
$0(){var w=this.a,v=w.geS(0)
v.a.K(0,this.b)
v.c=!1
v.d=""
w.f=A.bzf(v)
w.r=""},
$S:0}
A.eKo.prototype={
$0(){var w=this.a,v=w.geS(0)
v.b.n(0,this.b,!0)
v.d=""
w.f=A.bzf(v)},
$S:0}
A.eKp.prototype={
$0(){return this.a.w=this.b},
$S:0}
A.eKq.prototype={
$1(d){return this.a.geS(0).b.h(0,d)!==!0},
$S:3}
A.eKr.prototype={
$0(){var w,v=this.a,u=v.geS(0)
u.c=!0
w=this.b
u.d=w.length===0?"":D.d.gL(w)
v.f=A.bzf(u)},
$S:0}
A.eKy.prototype={
$1(d){return!d},
$S:151}
A.eKC.prototype={
$0(){return A.fBC(this.a,"Sink drain (P-trap)",B.d2_,this.b)},
$S:0}
A.eKz.prototype={
$1(d){return A.i0Q(this.a.geS(0),d)},
$S:z+7}
A.eKA.prototype={
$0(){var w=this.a
return w.m(new A.eKx(w,this.b))},
$S:0}
A.eKx.prototype={
$0(){var w=this.a,v=this.b
return w.r=w.r===v?"":v},
$S:0}
A.eKB.prototype={
$0(){var w=this.a
w.m(new A.eKw(w))
w.nU()},
$S:0}
A.eKw.prototype={
$0(){var w,v=this.a,u=v.geS(0)
u.a.a8(0)
w=u.b
w.aGQ(w,new A.eKv())
u.c=!1
v.r=u.d=""
v.w=0
v.f=A.bzf(u)},
$S:0}
A.eKv.prototype={
$2(d,e){return!1},
$S:1795}
A.d4v.prototype={
$0(){var w=this.a
w.x=this.b
w.y=this.c},
$S:0}
A.d4w.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.d4u(w))},
$S:0}
A.d4u.prototype={
$0(){return this.a.x=null},
$S:0}
A.d4n.prototype={
$0(){return this.a.w=0},
$S:0}
A.d4q.prototype={
$1(d){return d.a===this.a},
$S:z+20}
A.d4r.prototype={
$0(){var w=this.a,v=w.geS(0)
v.f=!1
w.f=A.aNf(v)
w.w=this.b},
$S:0}
A.d4s.prototype={
$0(){var w=this.a,v=w.geS(0),u=v.e
u.bn(u,new A.d4p(this.b))
v.f=!1
w.f=A.aNf(v)},
$S:0}
A.d4p.prototype={
$2(d,e){return e===this.a},
$S:403}
A.d4t.prototype={
$0(){return this.a.w=this.b},
$S:0}
A.d4o.prototype={
$0(){var w=this.a,v=w.geS(0)
v.f=!v.f
w.f=A.aNf(v)},
$S:0}
A.d4A.prototype={
$1(d){return!d},
$S:151}
A.d4G.prototype={
$0(){return A.fBC(this.a,"Faucet supply lines",B.ddc,this.b)},
$S:0}
A.d4B.prototype={
$1(d){return A.hSN(this.a.geS(0),d)},
$S:z+7}
A.d4C.prototype={
$0(){var w=this.a
return w.m(new A.d4z(w))},
$S:0}
A.d4z.prototype={
$0(){var w=this.a,v=w.geS(0)
v.r=!v.r
w.f=A.aNf(v)},
$S:0}
A.d4E.prototype={
$0(){var w=this.b
return w.m(new A.d4y(this.a,w))},
$S:0}
A.d4y.prototype={
$0(){var w=this.b,v=w.r,u=this.a.a
return w.r=v===u?"":u},
$S:0}
A.d4D.prototype={
$1(d){return d===this.a.a},
$S:3}
A.d4F.prototype={
$0(){var w=this.a
w.m(new A.d4x(w))
w.nU()},
$S:0}
A.d4x.prototype={
$0(){var w=this.a,v=w.geS(0)
v.e.a8(0)
v.f=!1
w.r=""
w.w=0
w.f=A.aNf(v)},
$S:0}
A.dbz.prototype={
$0(){var w=this.a
w.x=this.b
w.y=this.c},
$S:0}
A.dbA.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.dby(w))},
$S:0}
A.dby.prototype={
$0(){return this.a.x=null},
$S:0}
A.dbt.prototype={
$0(){return this.a.r=0},
$S:0}
A.dbv.prototype={
$0(){var w=this.a,v=w.d
v.d.W(0,72)
w.f=A.af3(v)
w.r=this.b},
$S:0}
A.dbw.prototype={
$0(){var w=this.a,v=w.d
v.c=!0
v.b=!1
w.f=A.af3(v)
w.r=this.b},
$S:0}
A.dbx.prototype={
$0(){return this.a.r=this.b},
$S:0}
A.dbu.prototype={
$1(d){return this.a},
$S:41}
A.dbI.prototype={
$0(){return A.fBC(this.a,"Fix the house",B.cdm,this.b)},
$S:0}
A.dbD.prototype={
$0(){return this.a.ca6(this.b)},
$S:0}
A.dbF.prototype={
$1(d){return d<=this.a.d.a},
$S:33}
A.dbE.prototype={
$1(d){return A.hdt(this.a.d,d)},
$S:z+7}
A.dbG.prototype={
$0(){var w=this.a
return w.m(new A.dbC(w))},
$S:0}
A.dbC.prototype={
$0(){var w=this.a
return w.w=w.w==="wrench"?"":"wrench"},
$S:0}
A.dbH.prototype={
$1(d){var w=this.a
return w.m(new A.dbB(w,d))},
$S:6}
A.dbB.prototype={
$0(){var w=this.a,v=w.d,u=D.k.V(this.b)
v.a=u
if(u<5)w.r=0
w.f=A.af3(v)},
$S:0}
A.c4O.prototype={
$0(){return C.a5(this.a,!1).m7()},
$S:0}
A.fl4.prototype={
$5(d,e,f,g,h){var w=this.a.a.t(0,h),v=this.b
v.b=d
if(w)v.a5l(e,0.66,f,!1,!0,!0,g,14)
else{v.d=0.3
v.aGO(e,0.74,D.b1,!1,!0,0,8)
v.d=1}},
$S:z+45}
A.fl3.prototype={
$6(d,e,f,g,h,i){var w,v
if(!i)return
w=this.a.b.h(0,e)
v=w===!0?f:f.ad(0,h)
w=this.b
w.e=0.5
w.b=d
w.e5(v.aC(0,g.aF(0,0.6)),v.ad(0,g.aF(0,0.6)),1.12,B.pf,0.35,8)
w.yU(v.aC(0,g.aF(0,0.62)),v.aC(0,g.aF(0,0.5)),1.2,0.5,B.Vm,0.2,8)
w.b=0
w.yU(f.aC(0,g.aF(0,0.05)),f.ad(0,g.aF(0,0.08)),0.82,0.55,B.bfx,0.1,12)
w.e=0},
$S:z+46}
A.fl2.prototype={
$1(d){return d.b<-0.6},
$S:z+17}
A.fkd.prototype={
$1(d){return this.a.e.h(0,d)===this.b},
$S:33}
A.fmw.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=A.afg(d)
for(w=this.a*1.6,v=this.b,u=p.a,t=p.b,s=p.c,r=0;r<7;++r){q=D.k.G(w+r/7,1)
v.iN(new A.J(u+Math.sin(r*2.1)*q*1.4,t+(q*2.4-q*q*6.5),s+(1+q*2.5)),0.2,e,3,6,0.9)}},
$S:1796}
A.fmv.prototype={
$1(d){return this.a.e.h(0,d.a)!=null},
$S:z+20}
A.cfw.prototype={
$1(d){return d.a===this.a},
$S:z+47}
A.cfx.prototype={
$1(d){return d.a===this.a},
$S:z+2}
A.cft.prototype={
$1(d){return this.a.uO(0,d).c.toLowerCase()},
$S:13}
A.cfy.prototype={
$1(d){var w
if(!this.a.e.t(0,d.a)){w=d.b
w=w==="valve"||D.a.a0(w,"hose")}else w=!1
return w},
$S:z+2}
A.cfz.prototype={
$1(d){var w=this.a,v=d.a
return w.e.t(0,v)&&w.bdE(v)>0},
$S:z+2}
A.cfA.prototype={
$1(d){return d.a},
$S:z+21}
A.cfB.prototype={
$1(d){return d.a},
$S:z+21}
A.cfu.prototype={
$1(d){return this.a.e.t(0,d.a)},
$S:z+2}
A.cfv.prototype={
$1(d){var w=this.a,v=d.a
return w.bdE(v)<=0||!w.e.t(0,v)},
$S:z+2}
A.fl1.prototype={
$1(d){var w=this.a
w.b=0
w.e5(new A.J(d,8,0),new A.J(d,8,1.6),0.5,B.K1,0.7,10)},
$S:6}
A.fl_.prototype={
$1(d){var w,v,u,t,s,r,q=C.a([],x.o)
for(w=d.length,v=this.a,u=v.a,t=v.b,v=v.c,s=0;s<d.length;d.length===w||(0,C.L)(d),++s){r=d[s]
q.push(new A.J(r.a+u,r.b+t,r.c+v))}return q},
$S:z+50}
A.fkU.prototype={
$3$r(d,e,f){var w=this.a,v=this.b.c
v===$&&C.c()
w.b=9100+D.d.bc(v.c,new A.fkX(d))
w.d=0.32
w.aGO(e,f,D.b1,!1,!0,0,8)
w.d=1},
$2(d,e){return this.$3$r(d,e,1.2)},
$S:z+51}
A.fkX.prototype={
$1(d){return d.a===this.a},
$S:z+2}
A.fkV.prototype={
$3(d,e,f){var w=this.a,v=this.b.c
v===$&&C.c()
w.b=9100+D.d.bc(v.c,new A.fkW(d))
w.d=0.32
w.ct(e,f,D.b1)
w.d=1},
$S:z+52}
A.fkW.prototype={
$1(d){return d.a===this.a},
$S:z+2}
A.fl0.prototype={
$3(d,e,f){var w,v,u,t=this,s=t.a,r=s.c
r===$&&C.c()
w=D.d.cJ(r.c,d)
r=d.c
v=s.e
u=d.a
if(v.t(0,u))s="Fitted."
else{s=s.b?"":d.e
s="A spot for the "+r.toLowerCase()+". "+s}t.b.n(0,9100+w,new A.d3(r,s,e,26))
if(t.c&&!v.t(0,u)&&t.d.length!==0)t.e.push(new A.rZ(e.ad(0,B.fvC),f,D.fi))},
$S:z+53}
A.fkR.prototype={
$0(){return this.a.$3(this.b.a,new A.J(this.c-10,9,2.4),B.a7G)},
$S:0}
A.fkS.prototype={
$0(){return this.a.$3(this.b.a,new A.J(this.c-8,9,2.4),B.a7G)},
$S:0}
A.fkT.prototype={
$0(){return this.a.$3(this.b.a,new A.J(this.c+8,9,2.4),B.a7G)},
$S:0}
A.fkY.prototype={
$4(d,e,f,g){var w,v,u,t,s=this
if(D.d.bc(s.a,new A.fkZ(d))<0||!s.b.e.t(0,d))return
w=s.b.f.h(0,d)
v=(w==null?0:w)>=1
w=s.c
u=9260+g
w.b=u
t=v?e:e.ad(0,f.aF(0,1.7))
w.e5(t.aC(0,f.aF(0,0.6)),t.ad(0,f.aF(0,0.6)),1.12,B.pf,0.35,8)
w.yU(t.aC(0,f.aF(0,0.62)),t.aC(0,f.aF(0,0.5)),1.2,0.5,B.Vm,0.2,8)
w=v?"Tight.":"Loose. Tap it with the wrench to tighten it."
s.d.n(0,u,new A.d3("Slip nut",w,e,10))},
$S:z+54}
A.fkZ.prototype={
$1(d){return d.a===this.a},
$S:z+2}
A.fAQ.prototype={
$1(d){var w,v=this
A:{if("vhot"===d||"hhot"===d){w=new A.J(v.a-8,9,2)
break A}if("vcold"===d||"hcold"===d){w=new A.J(v.a+8,9,2)
break A}if("tvalve"===d||"those"===d){w=new A.J(v.b-10,9,2)
break A}if("bolts"===d){w=new A.J(v.b,2,17)
break A}if("faucet"===d){w=new A.J(v.a,30,8)
break A}if("tail"===d){w=new A.J(v.a,22,8)
break A}if("trap"===d){w=new A.J(v.a,24.7,8)
break A}w=new A.J(v.a+8.9,23.6,8)
break A}return w},
$S:z+55}
A.fAP.prototype={
$1(d){return d.a===this.a},
$S:z+2}
A.eem.prototype={
$0(){var w=this.a
w.z=this.b
w.Q=this.c},
$S:0}
A.een.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.eel(w))},
$S:0}
A.eel.prototype={
$0(){return this.a.z=null},
$S:0}
A.eef.prototype={
$0(){return this.a.y=0},
$S:0}
A.eeo.prototype={
$1(d){return d.a===this.a},
$S:z+2}
A.ee7.prototype={
$0(){return this.a.y=this.b},
$S:0}
A.ee8.prototype={
$0(){var w=this.a
w.acq()
w.y=this.b},
$S:0}
A.ee9.prototype={
$1(d){return this.a.c2o()},
$S:8}
A.eee.prototype={
$1(d){var w,v=null,u=this.a,t=u.e
t===$&&C.c()
w=t.c
w===$&&C.c()
t=C.d("The "+w.b.toLowerCase()+" is finished and nothing leaks.\n\nMistakes: "+t.w+"\n\nThe next job is different.",v,v,v,v,v,v,B.a6G,v,v,v)
return C.eh(C.a([C.bK(!1,B.aPy,v,v,!0,v,v,new A.eec(d),v,v),C.bJ(B.fdK,new A.eed(u,d),v)],x.p),v,v,E.mQ,t,v,v,v,v,B.ffl,v)},
$S:19}
A.eec.prototype={
$0(){C.a5(this.a,!1).N(null)
return null},
$S:0}
A.eed.prototype={
$0(){C.a5(this.b,!1).N(null)
this.a.aVG()},
$S:0}
A.eek.prototype={
$0(){var w,v,u=this.a
u.d=D.o.G(Date.now(),1e5)
w=u.gCi(0)
v=u.e
v===$&&C.c()
u.e=A.fOy(v.b,w,null)
u.x=""
u.as=!1
u.z=null
u.y=0
u.acq()},
$S:0}
A.eeb.prototype={
$0(){var w=this.a
return w.m(new A.eea(w,this.b,this.c))},
$S:0}
A.eea.prototype={
$0(){var w=this.a
w.x=this.b?"":this.c
w.acq()},
$S:0}
A.eep.prototype={
$1(d){var w=this.a.e
w===$&&C.c()
return w.e.t(0,d.a)},
$S:z+2}
A.eet.prototype={
$0(){return this.a.bXO(this.b)},
$S:0}
A.eer.prototype={
$1(d){return d<=5},
$S:33}
A.eeq.prototype={
$1(d){var w=this.a,v=w.e
v===$&&C.c()
return A.i0K(v,w.w.gu2()/1000)},
$S:z+7}
A.ees.prototype={
$0(){return this.b.crU(this.a.a)},
$S:0}
A.eej.prototype={
$1(d){var w,v,u,t,s,r,q,p=null,o=this.a,n=o.e
n===$&&C.c()
w=x.p
n=C.a([B.fqw,D.at,C.d("Mistakes "+n.w,p,p,p,p,p,p,B.Is,p,p,p),D.S],w)
v=o.e.c
v===$&&C.c()
v=v.c
u=v.length
t=0
for(;t<u;++t){s=v[t]
r=D.c.j(0.05)
q=new C.aV(12,12)
n.push(C.p(p,new C.x((o.e.e.t(0,s.a)?"\u2705":"\ud83d\udd27")+" "+s.c,p,B.eR4,p,p,p,p,p,p,p,p,p),D.f,p,p,new C.o(r,p,p,new C.bp(q,q,q,q),p,p,D.n),p,p,p,D.eO,D.bR,p,p,p))}n.push(D.ao)
n.push(B.f5M)
n.push(D.P)
n.push(C.A(C.a([B.btS,C.aum(p,p,p,p,!1,D.y,p,p,p,p,p,p,new A.eeh(o,d),p,p,p,p,p,p,p,p,o.e.b)],w),D.m,p,D.e,D.j,0,p,p))
n.push(C.bJ(B.aPA,new A.eei(o,d),p))
return C.bn(!0,C.cB(n,p,D.bW,p,p,D.ai,!0),!0,!1,D.ag,!0,!0)},
$S:27}
A.eeh.prototype={
$1(d){var w=this.a
w.m(new A.eeg(w,d))
C.a5(this.b,!1).N(null)},
$S:9}
A.eeg.prototype={
$0(){var w=this.a,v=w.e
v===$&&C.c()
v.b=this.b
w.acq()},
$S:0}
A.eei.prototype={
$0(){C.a5(this.b,!1).N(null)
this.a.aVG()},
$S:0}
A.fJ5.prototype={
$1(d){return d.a===this.a},
$S:z+22}
A.ckq.prototype={
$1(d){return d.b==="switch"},
$S:z+4}
A.ckx.prototype={
$1(d){return!this.a.y.t(0,d)},
$S:33}
A.cky.prototype={
$1(d){var w=this.a
return w.x.ah(0,d)&&w.z.t(0,d)},
$S:33}
A.ckz.prototype={
$1(d){var w=$.Gg()[this.b],v=!1
if(w>=d)if(w<=d+48){w=this.a.Q.h(0,d)
w=(w==null?null:w.a)===!0}else w=v
else w=v
return w},
$S:33}
A.ckA.prototype={
$1(d){return this.a.Q.h(0,d).c.t(0,this.b)},
$S:33}
A.ckC.prototype={
$1(d){var w,v=J.e1(6,x.S)
for(w=0;w<6;++w)v[w]=w
return D.d.d9(v,new A.ckB(this.a,d))},
$S:33}
A.ckB.prototype={
$1(d){return this.a.c.t(0,this.b*10+d)},
$S:33}
A.ckp.prototype={
$1(d){var w=this.a.Q.h(0,d)
return(w==null?null:w.a)===!0},
$S:33}
A.ckn.prototype={
$1(d){return!A.kZ(d).c},
$S:33}
A.cko.prototype={
$1(d){var w=this.a.anT(A.kZ(d).d.a)
return(w==null?null:w.b.t(0,d))===!0},
$S:33}
A.ckv.prototype={
$1(d){return d.c},
$S:z+6}
A.ckw.prototype={
$1(d){return d.d},
$S:z+6}
A.ckr.prototype={
$1(d){return d.d},
$S:z+6}
A.cks.prototype={
$1(d){var w=this.a.Q.h(0,d)
return(w==null?null:w.e)===!0},
$S:33}
A.ckt.prototype={
$1(d){return d.a===this.a},
$S:z+11}
A.ckD.prototype={
$2(d,e){return e===this.a},
$S:403}
A.cku.prototype={
$1(d){return d.c===this.a},
$S:z+4}
A.eiJ.prototype={
$0(){var w=this.a
w.ax=this.b
w.ay=this.c},
$S:0}
A.eiK.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.eiI(w))},
$S:0}
A.eiI.prototype={
$0(){return this.a.ax=null},
$S:0}
A.ehY.prototype={
$0(){return this.a.CW=!0},
$S:0}
A.ehZ.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.ehX(w))},
$S:11}
A.ehX.prototype={
$0(){return this.a.CW=!1},
$S:0}
A.ei_.prototype={
$1(d){return this.a.bLx()},
$S:8}
A.ei0.prototype={
$1(d){return this.a.c2t()},
$S:8}
A.ei8.prototype={
$0(){return this.a.Q=-1},
$S:0}
A.ei1.prototype={
$0(){return this.a.Q=-1},
$S:0}
A.eiq.prototype={
$0(){var w=this.a
w.Q=this.b
w.z=w.at=""
w.ch=!1},
$S:0}
A.ei9.prototype={
$0(){var w=this.a
w.Q=-1
w.at=""},
$S:0}
A.eiF.prototype={
$0(){return this.a.as=0},
$S:0}
A.eiG.prototype={
$0(){return this.a.z=""},
$S:0}
A.eiH.prototype={
$0(){return this.a.as=this.b},
$S:0}
A.eiD.prototype={
$0(){return this.a.z=""},
$S:0}
A.eiE.prototype={
$0(){return this.a.as=2000+this.b},
$S:0}
A.eiC.prototype={
$0(){return this.a.z=""},
$S:0}
A.eiy.prototype={
$1(d){return d.a===this.a},
$S:z+11}
A.eiz.prototype={
$0(){return this.a.as=5000+this.b*100+this.c},
$S:0}
A.eiA.prototype={
$0(){var w=this.a
w.at=""
w.as=0},
$S:0}
A.eiB.prototype={
$0(){return this.a.as=5000+this.b*100+this.c},
$S:0}
A.eiL.prototype={
$0(){var w=this.b,v=D.d.t(B.GL,w.z),u=this.a.a
if(v)w.b_0(u)
else w.b_2(u)},
$S:0}
A.ei7.prototype={
$1(d){var w=null
return C.eh(C.a([C.bK(!1,B.fhg,w,w,!0,w,w,new A.ei5(d),w,w),C.bJ(D.IH,new A.ei6(this.a,d),w)],x.p),w,w,E.mQ,B.f6T,w,w,w,w,B.fe9,w)},
$S:19}
A.ei5.prototype={
$0(){C.a5(this.a,!1).N(null)
return null},
$S:0}
A.ei6.prototype={
$0(){C.a5(this.b,!1).N(null)
this.a.avg(!0)},
$S:0}
A.ei4.prototype={
$1(d){var w,v=null,u=this.a,t=u.d
t===$&&C.c()
w=t.c
w===$&&C.c()
t=C.d("The "+w.toLowerCase()+" is built, wired, painted and tested.\n\nMistakes: "+t.f+"\nShocks: "+t.r+"\nLives left: "+t.e+"\n\nEvery job is a little different. Ready for another one?",v,v,v,v,v,v,B.a6G,v,v,v)
return C.eh(C.a([C.bK(!1,B.frl,v,v,!0,v,v,new A.ei2(d),v,v),C.bJ(B.fe2,new A.ei3(u,d),v)],x.p),v,v,E.mQ,t,v,v,v,v,B.flC,v)},
$S:19}
A.ei2.prototype={
$0(){C.a5(this.a,!1).N(null)
return null},
$S:0}
A.ei3.prototype={
$0(){C.a5(this.b,!1).N(null)
this.a.aWK()},
$S:0}
A.eia.prototype={
$0(){var w,v,u
if(!this.b)this.a.e=D.o.G(Date.now(),1e5)
w=this.a
v=w.gCi(0)
u=w.d
u===$&&C.c()
w.d=A.fOY(null,null,u.b,v)
w.y=0
w.z=""
w.Q=-1
w.at=""
w.as=0
w.cx=!1
w.x.a8(0)
w.ax=null
w.r=A.Ck(w.d,new A.vO(w.z,w.Q,!1))},
$S:0}
A.eio.prototype={
$1(d){return new C.K(d,new A.eip(),d.$ti.k("K<ai.E,n>")).aI(0,", ")},
$S:1797}
A.eip.prototype={
$1(d){return A.kZ(d).b},
$S:78}
A.eib.prototype={
$1(d){var w=this.a.d
w===$&&C.c()
return!w.x.ah(0,d.a)},
$S:z+4}
A.eic.prototype={
$1(d){var w=this.a.d
w===$&&C.c()
return!w.z.t(0,d.a)},
$S:z+4}
A.eid.prototype={
$1(d){var w=this.a.d
w===$&&C.c()
return!w.y.t(0,d)},
$S:33}
A.eig.prototype={
$1(d){return!d.a},
$S:z+6}
A.eih.prototype={
$1(d){return d.b<3},
$S:z+6}
A.eii.prototype={
$1(d){return!d.c},
$S:z+6}
A.eij.prototype={
$1(d){return!d.d},
$S:z+6}
A.eik.prototype={
$1(d){return!d.c},
$S:z+6}
A.eil.prototype={
$1(d){var w=this.a.d
w===$&&C.c()
w=w.at.h(0,d.a)
w=w==null?null:w.a
return w!==d.b},
$S:z+4}
A.eim.prototype={
$1(d){return d.a},
$S:z+60}
A.ein.prototype={
$1(d){var w=this.a.d
w===$&&C.c()
w=w.at.h(0,d.a)
w=w==null?null:w.b.c
return(w==null?0:w)<2},
$S:z+4}
A.eie.prototype={
$1(d){var w=d.b
if(w==="outlet"||w==="gfci"){w=this.a.d
w===$&&C.c()
w=w.at.h(0,d.a)
w=(w==null?null:w.c)!==!0}else w=!1
return w},
$S:z+4}
A.eif.prototype={
$1(d){return d.b==="fan"},
$S:z+4}
A.ej1.prototype={
$0(){return this.a.cb8(this.b)},
$S:0}
A.ej3.prototype={
$0(){var w=this.a
if(w.Q>=0)w.avf()
else{w.m(new A.eiQ(w))
w.b1e()}},
$S:0}
A.eiQ.prototype={
$0(){return this.a.as=0},
$S:0}
A.ej2.prototype={
$1(d){var w=this.a,v=w.d
v===$&&C.c()
return A.i0Z(v,w.w.gu2()/1000,w.x)},
$S:z+7}
A.eiT.prototype={
$0(){var w=this.a,v=w.d
v===$&&C.c()
return w.ks(v.aGG())},
$S:0}
A.eiU.prototype={
$0(){var w=this.a
return w.m(new A.eiS(w,this.b))},
$S:0}
A.eiS.prototype={
$0(){var w,v=this.b.b
v.f=!v.f
v=this.a
w=v.d
w===$&&C.c()
v.r=A.Ck(w,new A.vO(v.z,v.Q,!1))},
$S:0}
A.eiV.prototype={
$0(){var w=this.a
return w.m(new A.eiR(w,this.b))},
$S:0}
A.eiR.prototype={
$0(){var w,v=this.b.b
v.e=!v.e
v=this.a
w=v.d
w===$&&C.c()
v.r=A.Ck(w,new A.vO(v.z,v.Q,!1))},
$S:0}
A.ej4.prototype={
$0(){var w=this.a
return w.m(new A.eiP(w,this.b))},
$S:0}
A.eiP.prototype={
$0(){var w,v=this.a
v.y=this.b
v.z=""
w=v.d
w===$&&C.c()
v.r=A.Ck(w,new A.vO("",v.Q,!1))},
$S:0}
A.ej5.prototype={
$0(){var w=this.a
return w.m(new A.eiO(w))},
$S:0}
A.eiO.prototype={
$0(){var w=this.a,v=w.d
v===$&&C.c()
v.aD7()
w.y=2
w.z=""
w.r=A.Ck(w.d,new A.vO("",w.Q,!1))
w.A4("The boxes, the cable and the walls are done. Now the wiring: pick an Outlet or a Switch from the tray, then tap its box on the wall.",!0)},
$S:0}
A.ej6.prototype={
$0(){var w=this.a
return w.m(new A.eiN(w,this.b))},
$S:0}
A.eiN.prototype={
$0(){var w,v=this.a,u=this.b.a,t=v.z===u?"":u
v.z=t
v.as=0
w=v.d
w===$&&C.c()
v.r=A.Ck(w,new A.vO(t,v.Q,!1))
if(v.z.length!==0)v.clK(u)},
$S:0}
A.ej7.prototype={
$0(){var w=this.a,v=w.d
v===$&&C.c()
return w.ks(v.cL_())},
$S:0}
A.ej8.prototype={
$1(d){return!this.a.b.b.iP(0,d.a)},
$S:z+12}
A.ej9.prototype={
$0(){var w=this.a
return w.m(new A.eiM(w,this.b,this.c))},
$S:0}
A.eiM.prototype={
$0(){var w,v=this,u=v.c,t=u.a
if(v.b.b.b.iP(0,t)){v.a.avh("That wire is already fastened. Tap the wire in the 3D view to take it off.")
return}w=v.a
if(w.at===t)t=""
w.at=t
if(t.length!==0)w.A4(u.b+": now tap the screw it belongs on, or press the matching button below.",!0)},
$S:0}
A.eiW.prototype={
$1(d){return!this.a.b.b.ah(0,d.a)},
$S:z+11}
A.eiX.prototype={
$0(){var w=this.a
return w.b__(w.Q,this.b.a)},
$S:0}
A.eiY.prototype={
$0(){var w=this.a,v=w.d
v===$&&C.c()
return w.ks(v.bf_(w.Q))},
$S:0}
A.eiZ.prototype={
$0(){var w=this.a,v=w.d
v===$&&C.c()
return w.ks(v.cP9(w.Q))},
$S:0}
A.ej_.prototype={
$0(){var w=this.a,v=w.d
v===$&&C.c()
return w.ks(v.b9T(w.Q))},
$S:0}
A.ej0.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.cQa(v.Q)
v.ks(w)
if(w.a)v.avf()},
$S:0}
A.eix.prototype={
$1(d){return new C.e2(new A.eiw(this.a),null)},
$S:20}
A.eiw.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=C.aI(d,l,x.w).w,j=this.a,i=j.d
i===$&&C.c()
w=i.c
w===$&&C.c()
v=x.p
i=C.a([C.d("Job: "+w,l,l,l,l,l,l,D.du,l,l,l),D.at,C.d("Mistakes "+i.f+" \xb7 Shocks "+i.r+" \xb7 Lives "+i.e,l,l,l,l,l,l,B.Is,l,l,l),D.S,B.fhO,D.ao],v)
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
p=A.kZ(p)
m=t.c
m=m!=null?", turned on by "+A.kZ(m).b:""
i.push(C.p(l,new C.x(o+" "+n+" at "+p.b+m,l,D.rp,l,l,l,l,l,l,l,l,l),D.f,l,l,new C.o(s,l,new C.bP(q,q,q,q),new C.bp(r,r,r,r),l,l,D.n),l,l,l,D.eO,D.bR,l,l,l))}i.push(D.S)
i.push(C.A(C.a([B.buQ,C.aum(l,l,l,l,!1,D.y,l,l,l,l,l,l,new A.eit(j,e),l,l,l,l,l,l,l,l,j.d.b)],v),D.m,l,D.e,D.j,0,l,l))
i.push(D.ao)
i.push(C.A(C.a([C.D(C.dT(B.f80,new A.eiu(j,d),l),1),D.ab,C.D(C.bJ(B.aPA,new A.eiv(j,d),l),1)],v),D.m,l,D.e,D.j,0,l,l))
return C.bn(!0,new C.cU(new C.aY(0,1/0,0,k.a.b*0.8),C.cB(i,l,D.bW,l,l,D.ai,!0),l),!0,!1,D.ag,!0,!0)},
$S:88}
A.eit.prototype={
$1(d){var w=this.a,v=w.d
v===$&&C.c()
v.b=d
for(v=v.at,v=new C.dt(v,v.r,v.e);v.C();)v.d.b.r=d
this.b.$1(new A.eir())
w.m(new A.eis())},
$S:9}
A.eir.prototype={
$0(){},
$S:0}
A.eis.prototype={
$0(){},
$S:0}
A.eiu.prototype={
$0(){C.a5(this.b,!1).N(null)
this.a.avg(!0)},
$S:0}
A.eiv.prototype={
$0(){C.a5(this.b,!1).N(null)
this.a.aWK()},
$S:0}
A.fep.prototype={
$1(d){var w=this.a,v=d.a
return w>v[0]&&w<v[1]},
$S:706}
A.feq.prototype={
$1(d){var w=this.a,v=d.a
return w>v[2]&&w<v[3]},
$S:706}
A.fl5.prototype={
$1(d){return 5000+this.a.a*100+d},
$S:73}
A.fl6.prototype={
$1(d){return 3000+this.a.a},
$S:73}
A.fl7.prototype={
$1(d){return 2000+this.a.a},
$S:73}
A.fla.prototype={
$5$col$round(d,e,f,g,h){var w=this.a
w.b=d
w.d=0.5
w.e=0.9
if(h)w.jF(e.aC(0,B.lT),e.ad(0,B.lT),f.a/2,g,14)
else w.ct(e,f,g)
w.e=0
w.d=1},
$3(d,e,f){return this.$5$col$round(d,e,f,D.b1,!1)},
$4$round(d,e,f,g){return this.$5$col$round(d,e,f,D.b1,g)},
$4$col(d,e,f,g){return this.$5$col$round(d,e,f,g,!1)},
$S:z+61}
A.fl8.prototype={
$3(d,e,f){return F.aOD(d,e,0,f+this.a.a*5)},
$S:313}
A.fl9.prototype={
$0(){var w,v=this.a
if(v.c)w="A place in the ceiling for a "+(v.e==="fan"?"fan (needs a fan-rated box)":"light")+"."
else w="A place on the wall at "+(v.e==="switch"?"switch height, about 48 inches from the floor":"outlet height, about 16 inches from the floor")+"."
return new A.d3(v.b,w,A.a1G(v,B.a7E),26)},
$S:z+62}
A.fB9.prototype={
$1(d){return d.e==="fan"},
$S:z+22}
A.fBa.prototype={
$1(d){return d.b==="light"},
$S:z+4}
A.cnN.prototype={
$1(d){return d.a===this.a&&!d.c},
$S:z+8}
A.cnJ.prototype={
$1(d){return d.a===B.YU},
$S:z+8}
A.cnL.prototype={
$1(d){return d.c},
$S:z+8}
A.cnM.prototype={
$1(d){return d.c},
$S:z+8}
A.cnK.prototype={
$1(d){return B.vE.h(0,d.a).e===this.a&&!d.c},
$S:z+8}
A.ekw.prototype={
$0(){var w=this.a
w.z=this.b
w.Q=this.c},
$S:0}
A.ekx.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.ekv(w))},
$S:0}
A.ekv.prototype={
$0(){return this.a.z=null},
$S:0}
A.ekl.prototype={
$0(){return this.a.y=0},
$S:0}
A.ekq.prototype={
$0(){return this.a.as=!0},
$S:0}
A.ekr.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.ekp(w))},
$S:11}
A.ekp.prototype={
$0(){return this.a.as=!1},
$S:0}
A.eks.prototype={
$0(){var w=this.a,v=w.d
v===$&&C.c()
w.r=A.af3(v.d)
w.y=this.b},
$S:0}
A.ekt.prototype={
$1(d){return this.a.cbf()},
$S:8}
A.eku.prototype={
$1(d){return this.a.c2A()},
$S:8}
A.eko.prototype={
$1(d){var w=null
return C.eh(C.a([C.bJ(B.ffg,new A.ekn(this.a,d),w)],x.p),w,w,E.mQ,B.fep,w,w,w,w,B.fko,w)},
$S:19}
A.ekn.prototype={
$0(){C.a5(this.b,!1).N(null)
this.a.auF()},
$S:0}
A.ekk.prototype={
$1(d){var w=null,v=this.a,u=v.d
u===$&&C.c()
u=C.d("Every problem on the customer's list is fixed.\n\nMistakes: "+u.f+"\nShocks: "+u.r+"\nLives left: "+u.e+"\n\nThe next call will have different problems.",w,w,w,w,w,w,B.a6G,w,w,w)
return C.eh(C.a([C.bK(!1,B.aPy,w,w,!0,w,w,new A.eki(d),w,w),C.bJ(B.fgt,new A.ekj(v,d),w)],x.p),w,w,E.mQ,u,w,w,w,w,B.fmF,w)},
$S:19}
A.eki.prototype={
$0(){C.a5(this.a,!1).N(null)
return null},
$S:0}
A.ekj.prototype={
$0(){C.a5(this.b,!1).N(null)
this.a.auF()},
$S:0}
A.ekm.prototype={
$0(){var w,v,u=this.a
u.e=D.o.G(Date.now(),1e5)
w=u.gCi(0)
v=u.d
v===$&&C.c()
w=A.h58(v.b,w)
u.d=w
u.r=A.af3(w.d)
u.at=!1
u.z=null
u.y=0},
$S:0}
A.ekJ.prototype={
$0(){return this.a.cvo(this.b)},
$S:0}
A.ekF.prototype={
$1(d){return d<=5},
$S:33}
A.ekE.prototype={
$1(d){var w=this.a,v=w.d
v===$&&C.c()
return A.hdt(v.d,w.w.gu2()/1000)},
$S:z+7}
A.ekG.prototype={
$1(d){return!d.c},
$S:z+8}
A.ekH.prototype={
$1(d){return B.vE.h(0,d.a).a},
$S:z+42}
A.ekI.prototype={
$0(){var w=this.a
return w.m(new A.ekD(w,this.b))},
$S:0}
A.ekD.prototype={
$0(){return this.a.x=this.b},
$S:0}
A.ekC.prototype={
$1(d){return new C.e2(new A.ekB(this.a),null)},
$S:20}
A.ekB.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=this.a,j=k.d
j===$&&C.c()
w=x.p
j=C.a([B.fcR,D.at,C.d("Mistakes "+j.f+" \xb7 Shocks "+j.r+" \xb7 Lives "+j.e,l,l,l,l,l,l,B.Is,l,l,l),D.S],w)
v=k.d.c
v===$&&C.c()
u=v.length
t=0
for(;t<v.length;v.length===u||(0,C.L)(v),++t){s=v[t]
r=D.c.j(0.05)
q=new C.aV(14,14)
p=new C.az(s.c?D.bc.j(0.6):D.bF,1,D.r,-1)
o=s.c?"\u2705":"\ud83d\udd27"
n=B.vE.h(0,s.a).a
m=s.c?D.az:D.c
j.push(C.p(l,new C.x(o+" "+n,l,new C.F(!0,m,l,l,l,l,13.5,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l),l,l,l,l,l,l,l,l,l),D.f,l,l,new C.o(r,l,new C.bP(p,p,p,p),new C.bp(q,q,q,q),l,l,D.n),l,l,l,D.cG,D.bm,l,l,l))}j.push(D.ao)
j.push(B.fhY)
j.push(D.P)
j.push(C.A(C.a([B.btR,C.aum(l,l,l,l,!1,D.y,l,l,l,l,l,l,new A.ekz(k,e),l,l,l,l,l,l,l,l,k.d.b)],w),D.m,l,D.e,D.j,0,l,l))
j.push(C.bJ(B.fkO,new A.ekA(k,d),l))
return C.bn(!0,C.cB(j,l,D.bW,l,l,D.ai,!0),!0,!1,D.ag,!0,!0)},
$S:88}
A.ekz.prototype={
$1(d){var w=this.a.d
w===$&&C.c()
w.b=d
this.b.$1(new A.eky())},
$S:9}
A.eky.prototype={
$0(){},
$S:0}
A.ekA.prototype={
$0(){C.a5(this.b,!1).N(null)
this.a.auF()},
$S:0}
A.f7I.prototype={
$1(d){return d.c===this.a},
$S:z+14}
A.bP0.prototype={
$1(d){var w,v,u,t=this.a,s=t.fr,r=A.hhB(t,A.bza(s==null?"tv100":s))
t=r.c
s=r.a/2
w=t-s-18
v=this.b
u=-v/2+14
if(w<u)w=t+s+18
w=D.k.D(w,u,v/2-14)
return new C.z(new C.z(w,d),Math.atan2(t-w,-d))},
$S:1799}
A.bP1.prototype={
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
$S:1800};(function aliases(){var w=A.aLo.prototype
w.bu6=w.q})();(function installTearOffs(){var w=a._instance_2u,v=a._instance_0u,u=a.installInstanceTearOff,t=a._instance_1u,s=a._instance_0i
var r
w(r=A.aCe.prototype,"gbJ6","bJ7",56)
v(r,"gOJ","k5",0)
u(r,"gc2a",0,1,null,["$2$keepTour","$1"],["avb","Yv"],23,0,0)
t(r,"gc2c","c2d",5)
v(r,"gcxa","cxb",13)
v(r,"gcsK","a1b",0)
v(r,"gc2b","DG",13)
v(r,"gcb2","ZT",13)
v(r,"gcas","ZK",13)
v(r,"gbx1","bx2",13)
v(r,"gc2g","c2h",0)
v(r,"gciS","ciT",0)
s(r,"gc2e","c2f",0)
v(r=A.ay5.prototype,"gc2l","xn",0)
v(r,"gIe","nU",0)
t(r,"gIf","Ig",5)
v(r,"gcfZ","cg_",0)
v(r,"gcuQ","cuR",0)
v(r=A.aE0.prototype,"gIe","nU",0)
t(r,"gIf","Ig",5)
v(r,"gc2m","c2n",0)
v(r=A.ayk.prototype,"gIe","nU",0)
t(r,"gIf","Ig",5)
s(r,"gc2j","c2k",0)
v(r=A.azd.prototype,"gIe","nU",0)
t(r,"gIf","Ig",5)
v(r=A.aCJ.prototype,"gc2p","aWI",0)
t(r,"gc2q","c2r",5)
t(A.b3l.prototype,"ganU","blK",57)
v(r=A.aCQ.prototype,"gbN0","aRc",0)
v(r,"gbzz","bzA",0)
v(r,"gc2u","avf",0)
t(r,"gc2w","c2x",5)
v(r=A.aCU.prototype,"gc2B","aWM",0)
t(r,"gc2C","c2D",5)})();(function inheritance(){var w=a.mixinHard,v=a.inheritMany,u=a.inherit
v(C.aC,[A.J,A.nD,A.d3,A.rZ,A.zk,A.Wv,A.kj,A.bOS,A.BU,A.mf,A.Xs,A.zI,A.a3p,A.BL,A.aTl,A.hk,A.Di,A.pu,A.b6y,A.qb,A.aTz,A.a3T,A.aTE,A.bP2,A.Fc,A.jx,A.LY,A.cfC,A.En,A.nb,A.VW,A.cfs,A.yo,A.pH,A.WB,A.atH,A.aS1,A.eC,A.b3l,A.kV,A.vO,A.u0,A.Lp,A.cnI,A.arC,A.cf_,A.Ho,A.ckm,A.Jc,A.boP,A.bP_])
v(C.hT,[A.bUO,A.bUP,A.bUN,A.bUQ,A.bUR,A.fJf,A.fJd,A.fJe,A.fJc,A.fJ6,A.bFY,A.bFX,A.clh,A.cli,A.cld,A.cle,A.clg,A.eQP,A.eQO,A.eQL,A.eQM,A.eQN,A.eQJ,A.fm7,A.fJy,A.fmd,A.fme,A.fmb,A.fmc,A.fm9,A.fma,A.fkb,A.fkc,A.f7H,A.fk0,A.fJx,A.fJu,A.bOj,A.bOU,A.bOV,A.bOZ,A.bOY,A.bOX,A.bOW,A.e0N,A.e0L,A.e0M,A.e06,A.e03,A.e0G,A.e0F,A.e0y,A.e0t,A.e0k,A.e_R,A.e_S,A.e0H,A.e_U,A.e_T,A.e_a,A.e_4,A.e_5,A.e_6,A.e0J,A.e_i,A.e_h,A.e_c,A.e0c,A.dlH,A.fke,A.fkn,A.fkf,A.fkg,A.fki,A.fkl,A.fkm,A.fkj,A.fen,A.fel,A.fn2,A.feV,A.feH,A.feI,A.feJ,A.feK,A.feN,A.feO,A.feP,A.feQ,A.feR,A.feS,A.feT,A.feU,A.feL,A.feM,A.fku,A.fkq,A.fkt,A.fks,A.dJn,A.fBE,A.fBD,A.d1s,A.d1u,A.d1K,A.d1Q,A.eKq,A.eKy,A.eKz,A.d4q,A.d4A,A.d4B,A.d4D,A.dbu,A.dbF,A.dbE,A.dbH,A.fl4,A.fl3,A.fl2,A.fkd,A.fmv,A.cfw,A.cfx,A.cft,A.cfy,A.cfz,A.cfA,A.cfB,A.cfu,A.cfv,A.fl1,A.fl_,A.fkU,A.fkX,A.fkV,A.fkW,A.fl0,A.fkY,A.fkZ,A.fAQ,A.fAP,A.eeo,A.ee9,A.eee,A.eep,A.eer,A.eeq,A.eej,A.eeh,A.fJ5,A.ckq,A.ckx,A.cky,A.ckz,A.ckA,A.ckC,A.ckB,A.ckp,A.ckn,A.cko,A.ckv,A.ckw,A.ckr,A.cks,A.ckt,A.cku,A.ei_,A.ei0,A.eiy,A.ei7,A.ei4,A.eio,A.eip,A.eib,A.eic,A.eid,A.eig,A.eih,A.eii,A.eij,A.eik,A.eil,A.eim,A.ein,A.eie,A.eif,A.ej2,A.ej8,A.eiW,A.eix,A.eit,A.fep,A.feq,A.fl5,A.fl6,A.fl7,A.fla,A.fl8,A.fB9,A.fBa,A.cnN,A.cnJ,A.cnL,A.cnM,A.cnK,A.ekt,A.eku,A.eko,A.ekk,A.ekF,A.ekE,A.ekG,A.ekH,A.ekC,A.ekz,A.f7I,A.bP0,A.bP1])
v(C.kd,[A.bUM,A.clf,A.fnd,A.fne,A.fnf,A.fng,A.fnh,A.f6n,A.fJv,A.fJw,A.e0E,A.e0s,A.fkp,A.fkh,A.fkk,A.fko,A.fem,A.fkr,A.d1v,A.eKv,A.d4p,A.fmw,A.ckD,A.eiw,A.ekB])
u(A.Az,C.oC)
v(C.mG,[A.b3y,A.bg_])
v(C.ag,[A.ate,A.aoQ,A.MB,A.GP,A.a8e,A.a3G,A.azc,A.UW,A.UZ,A.apM])
v(C.ah,[A.aLo,A.aCe,A.bhx,A.ay5,A.aE0,A.ayk,A.azd,A.aCJ,A.aCQ,A.aCU])
u(A.boD,A.aLo)
v(C.j3,[A.eQK,A.fk1,A.e0g,A.e0h,A.e0f,A.e0i,A.e_P,A.e0n,A.e_W,A.e_X,A.e_Y,A.e_Z,A.e0_,A.e_V,A.e00,A.e04,A.e02,A.e05,A.e01,A.e0x,A.e0w,A.e0z,A.e0A,A.e0B,A.e0C,A.e0D,A.e0q,A.e0p,A.e0r,A.e0j,A.e0l,A.e0u,A.e0o,A.e0m,A.e_9,A.e_7,A.e_Q,A.e0v,A.e0d,A.e0e,A.e_8,A.e_E,A.e_F,A.e_G,A.e_H,A.e_I,A.e_J,A.e_D,A.e_K,A.e_C,A.e_L,A.e_B,A.e_M,A.e_A,A.e_N,A.e_z,A.e_O,A.e0K,A.e0I,A.e_q,A.e_j,A.e_r,A.e_g,A.e_s,A.e_t,A.e_f,A.e_u,A.e_v,A.e_e,A.e_w,A.e_d,A.e_x,A.e_y,A.e_k,A.e_l,A.e_m,A.e_n,A.e_o,A.e_p,A.e_b,A.e09,A.e0a,A.e08,A.e0b,A.e07,A.flo,A.dJq,A.dJr,A.dJp,A.dJs,A.dJo,A.dJu,A.dJv,A.dJw,A.dJx,A.dJy,A.dJz,A.dJA,A.dJB,A.dJt,A.coW,A.coX,A.bR7,A.d1A,A.d1B,A.d1z,A.d1t,A.d1w,A.d1x,A.d1y,A.d1C,A.d1N,A.d1L,A.d1J,A.d1M,A.d1I,A.d1O,A.d1P,A.d1R,A.d1H,A.d1S,A.d1G,A.d1T,A.d1F,A.d1U,A.d1E,A.d1V,A.d1D,A.eKt,A.eKu,A.eKs,A.eKm,A.eKn,A.eKo,A.eKp,A.eKr,A.eKC,A.eKA,A.eKx,A.eKB,A.eKw,A.d4v,A.d4w,A.d4u,A.d4n,A.d4r,A.d4s,A.d4t,A.d4o,A.d4G,A.d4C,A.d4z,A.d4E,A.d4y,A.d4F,A.d4x,A.dbz,A.dbA,A.dby,A.dbt,A.dbv,A.dbw,A.dbx,A.dbI,A.dbD,A.dbG,A.dbC,A.dbB,A.c4O,A.fkR,A.fkS,A.fkT,A.eem,A.een,A.eel,A.eef,A.ee7,A.ee8,A.eec,A.eed,A.eek,A.eeb,A.eea,A.eet,A.ees,A.eeg,A.eei,A.eiJ,A.eiK,A.eiI,A.ehY,A.ehZ,A.ehX,A.ei8,A.ei1,A.eiq,A.ei9,A.eiF,A.eiG,A.eiH,A.eiD,A.eiE,A.eiC,A.eiz,A.eiA,A.eiB,A.eiL,A.ei5,A.ei6,A.ei2,A.ei3,A.eia,A.ej1,A.ej3,A.eiQ,A.eiT,A.eiU,A.eiS,A.eiV,A.eiR,A.ej4,A.eiP,A.ej5,A.eiO,A.ej6,A.eiN,A.ej7,A.ej9,A.eiM,A.eiX,A.eiY,A.eiZ,A.ej_,A.ej0,A.eir,A.eis,A.eiu,A.eiv,A.fl9,A.ekw,A.ekx,A.ekv,A.ekl,A.ekq,A.ekr,A.ekp,A.eks,A.ekn,A.eki,A.ekj,A.ekm,A.ekJ,A.ekI,A.ekD,A.eky,A.ekA])
v(C.au,[A.bgB,A.b4Q,A.AT,A.a5L])
u(A.qR,C.m1)
w(A.aLo,C.c8)})()
C.jS(b.typeUniverse,JSON.parse('{"ate":{"ag":[],"r":[]},"Az":{"aB":[]},"b3y":{"aB":[]},"boD":{"ah":["ate"]},"aoQ":{"ag":[],"r":[]},"aCe":{"ah":["aoQ"]},"bgB":{"au":[],"r":[]},"bg_":{"aB":[]},"GP":{"ag":[],"r":[]},"a8e":{"ag":[],"r":[]},"a3G":{"ag":[],"r":[]},"azc":{"ag":[],"r":[]},"MB":{"ag":[],"r":[]},"bhx":{"ah":["MB"]},"b4Q":{"au":[],"r":[]},"AT":{"au":[],"r":[]},"ay5":{"ah":["GP"]},"aE0":{"ah":["a8e"]},"ayk":{"ah":["a3G"]},"azd":{"ah":["azc"]},"a5L":{"au":[],"r":[]},"UW":{"ag":[],"r":[]},"aCJ":{"ah":["UW"]},"UZ":{"ag":[],"r":[]},"aCQ":{"ah":["UZ"]},"apM":{"ag":[],"r":[]},"aCU":{"ah":["apM"]}}'))
var y={g:"A shut-off valve goes on the pipe that comes out of the wall.",x:"Fasten the bare copper ground to the GREEN screw.",b:"Move it with the arrow buttons, turn it, change its colour or take it out.",s:"Pick a paint colour above to change this wall.",E:"Switch the power on and flip the wall switch.",j:"The bare copper ground wire only goes on the GREEN screw.",u:"The gold screws are BRASS. They are for the HOT wire (black).",o:"The white-silver screws are NICKEL. They are for the NEUTRAL wire (white).",r:"Turn the breaker OFF and test that the wires are dead."}
var x=(function rtii(){var w=C.ax
return{l:w("bq<n,n>"),M:w("eV<n>"),W:w("aS1"),F:w("qR"),j:w("ay<LG?>"),V:w("P<ac>"),O:w("P<w>"),c:w("P<Lp>"),_:w("P<aTl>"),D:w("P<qb>"),I:w("P<aTz>"),A:w("P<a3T>"),r:w("P<mf>"),E:w("P<rZ>"),Z:w("P<jx>"),T:w("P<Ho>"),g:w("P<u>"),B:w("P<pH>"),v:w("P<nb>"),k:w("P<hn>"),z:w("P<nD>"),J:w("P<+(a7F,G)>"),L:w("P<+(n,n)>"),f:w("P<+(N,N)>"),K:w("P<+(G,n)>"),Q:w("P<+(G,N,R)>"),X:w("P<+(N,N,N,N)>"),R:w("P<+(G,G,N,R,n)>"),h:w("P<Wv>"),Y:w("P<WB>"),s:w("P<n>"),o:w("P<J>"),p:w("P<r>"),d:w("P<zI>"),G:w("P<BU>"),a:w("P<Jc>"),b:w("P<kV>"),m:w("P<boP>"),u:w("P<R>"),n:w("P<N>"),t:w("P<G>"),U:w("P<aB?>"),e:w("cp<ah<ag>>"),w:w("iz"),P:w("cn"),q:w("d3"),c2:w("u"),C:w("Io"),a1:w("nD"),cb:w("dw<G>"),al:w("atH"),N:w("n"),be:w("bm<N>"),x:w("J"),ba:w("cw<G>"),br:w("a2<En>"),bw:w("a2<n>"),bS:w("a2<G>"),y:w("R"),i:w("N"),S:w("G"),cG:w("LG?"),aP:w("pK?"),H:w("~")}})();(function constants(){var w=a.makeConstList
B.aTd=new A.eC(!0,"The water is on and nothing leaks. Perfect job!",!1,"")
B.aTe=new A.eC(!0,"Primer and paint rolled on.",!1,"")
B.aTf=new A.eC(!1,"This call is over. Start a new one.",!1,"")
B.aTg=new A.eC(!1,"That is not a place for a sheet.",!1,"")
B.aTh=new A.eC(!0,"Sanded smooth. Wear a mask: the dust is bad to breathe.",!1,"")
B.a8C=new A.eC(!1,"There is no device here.",!1,"")
B.aTi=new A.eC(!0,"You look closely. Everything looks fine here.",!1,"")
B.aTj=new A.eC(!1,"ZAP! You were shocked badly and it was your last life. Always turn the breaker OFF and test before you touch wires.",!0,"shock")
B.aTk=new A.eC(!0,"Paper tape pressed into the seam.",!1,"")
B.aTl=new A.eC(!0,"Unplugged.",!1,"")
B.aTm=new A.eC(!0,"Breaker OFF. It is safe to work on the wires.",!1,"")
B.aTn=new A.eC(!1,"ZAP! You were shocked badly. That was your last life: the job is over. Lesson: ALWAYS turn the breaker OFF and test the wires before you touch them.",!0,"shock")
B.aTo=new A.eC(!1,"There is nothing there.",!1,"")
B.aTp=new A.eC(!1,"The outlet is burnt. Nothing works. Pull it out and put in a new one.",!0,"")
B.aTq=new A.eC(!0,"The water is on and nothing leaks yet, but the job is not finished.",!1,"")
B.aTr=new A.eC(!0,"Sheet hung. Now screw it to the studs.",!1,"")
B.aTs=new A.eC(!0,"Hole drilled through the middle of the stud, at the cable height. Holes go in the center so a nail cannot reach the cable.",!1,"")
B.aTt=new A.eC(!0,"Plugged in. Nothing happens because the breaker is off. Turn it on to test.",!1,"")
B.aTu=new A.eC(!0,"You flipped the tripped breaker fully OFF. Fix the problem before you turn it on again.",!1,"")
B.aTv=new A.eC(!0,"Click.",!1,"")
B.aTw=new A.eC(!0,"The wires are folded back and the device is in the box. Now put the cover on.",!1,"")
B.aTx=new A.eC(!0,"Breaker OFF. The wires on this circuit are dead now. (Always test them to be sure.)",!1,"")
B.aTy=new A.eC(!1,"Nothing is wet.",!1,"")
B.aTz=new A.eC(!0,"Power is on.",!1,"")
B.aTA=new A.eC(!0,"Water OFF at the main valve. You can cut into the pipes safely now.",!1,"")
B.aTB=new A.eC(!0,"Opening cut around the box with the drywall saw. Keep it tight: the plate has to cover the edge.",!1,"")
B.aTC=new A.eC(!0,"Device pulled out of the box.",!1,"")
B.aTD=new A.eC(!0,"Screw set just below the paper, not through it.",!1,"")
B.aTE=new A.eC(!1,"ZAP! You touched a live wire. In Learn mode you are not hurt, but in real life this can kill. Switch the breaker OFF and test the wires first.",!0,"shock")
B.aTF=new A.eC(!0,"Cover on. Now you can turn the breaker on and test.",!1,"")
B.Uf=new A.eC(!1,"",!1,"")
B.aTG=new A.eC(!0,"Device taken out. You can put it somewhere else, or put in a new one.",!1,"")
B.aTH=new A.eC(!0,"Breaker back ON.",!1,"")
B.aTI=new A.eC(!1,"That is not a stud.",!1,"")
B.aTJ=new A.eC(!0,"Off.",!1,"")
B.aTK=new A.eC(!1,"Nothing to flip yet.",!1,"")
B.aTL=new A.eC(!0,"Wire taken off.",!1,"")
B.aTM=new A.eC(!0,"The mud is dry.",!1,"")
B.aTN=new A.eC(!0,"Breaker reset.",!1,"")
B.aTO=new A.eC(!0,"Box mounted. (Careful: this is not a fan-rated box. A fan on it could fall.)",!1,"")
B.fma=new C.x("Tap a piece of furniture, or add one:",null,N.Sz,null,null,null,null,null,null,null,null,null)
B.e2y=new C.C(D.nJ,B.fma,null)
B.aTV=new C.bI(D.a3,null,null,B.e2y,null)
B.Kq=new C.w(1,0.08627450980392157,0.10588235294117647,0.1411764705882353,D.t)
B.aWP=new C.bP(D.Y,D.Y,X.uz,D.Y)
B.aZg=new C.o(B.Kq,null,B.aWP,null,null,null,D.n)
B.wH=new C.w(1,0.8784313725490196,0.6431372549019608,0.48627450980392156,D.t)
B.VQ=new C.w(1,0.16470588235294117,0.10196078431372549,0.06274509803921569,D.t)
B.WF=new C.w(1,0.1843137254901961,0.43529411764705883,0.7098039215686275,D.t)
B.JR=new C.w(1,0.1803921568627451,0.20392156862745098,0.25098039215686274,D.t)
B.b0Y=new A.cf_()
B.fmM=new C.x("\u2600\ufe0f Let it dry",null,H.zd,null,null,null,null,null,null,null,null,null)
B.b2j=new C.cq(D.A,null,null,B.fmM,null)
B.fmy=new C.x("\u23e9 Skip to the wiring",null,H.zd,null,null,null,null,null,null,null,null,null)
B.b2r=new C.cq(D.A,null,null,B.fmy,null)
B.fby=new C.x("\ud83c\udfd7\ufe0f",null,D.um,null,null,null,null,null,null,null,null,null)
B.b2G=new C.cq(D.A,null,null,B.fby,null)
B.fbn=new C.x("\ud83c\udfe0",null,D.aOv,null,null,null,null,null,null,null,null,null)
B.b35=new C.cq(D.A,null,null,B.fbn,null)
B.b4m=new C.w(1,0.9294117647058824,0.9098039215686274,0.8627450980392157,D.t)
B.b4x=new C.w(1,0.9725490196078431,0.9647058823529412,0.9333333333333333,D.t)
B.JS=new C.w(1,0.5450980392156862,0.3686274509803922,0.20392156862745098,D.t)
B.b4I=new C.w(1,0.611764705882353,0.5568627450980392,0.4588235294117647,D.t)
B.aaU=new C.w(1,0.24705882352941178,0.5607843137254902,0.30980392156862746,D.t)
B.wG=new C.w(1,0.9450980392156862,0.9450980392156862,0.9176470588235294,D.t)
B.b5e=new C.w(1,0.9098039215686274,0.9254901960784314,0.9372549019607843,D.t)
B.b5f=new C.w(1,0.4823529411764706,0.5098039215686274,0.5450980392156862,D.t)
B.b5m=new C.w(1,0.10588235294117647,0.4980392156862745,0.20392156862745098,D.t)
B.ab4=new C.w(1,0.7215686274509804,0.7450980392156863,0.7725490196078432,D.t)
B.DF=new C.w(1,0.5450980392156862,0.3686274509803922,0.23529411764705882,D.t)
B.ab6=new C.w(1,0.8509803921568627,0.8274509803921568,0.7725490196078432,D.t)
B.aba=new C.w(1,0.6549019607843137,0.6784313725490196,0.7098039215686275,D.t)
B.mE=new C.w(1,0.16862745098039217,0.17647058823529413,0.2,D.t)
B.b5S=new C.w(1,0.13333333333333333,0.13725490196078433,0.14901960784313725,D.t)
B.DH=new C.w(1,0.8980392156862745,0.7529411764705882,0.4823529411764706,D.t)
B.K1=new C.w(1,0.8156862745098039,0.5098039215686274,0.27450980392156865,D.t)
B.Vd=new C.w(1,0.5411764705882353,0.41568627450980394,0.2784313725490196,D.t)
B.abh=new C.w(1,0.1843137254901961,0.4196078431372549,0.23529411764705882,D.t)
B.abn=new C.w(1,0.2980392156862745,0.5450980392156862,0.2901960784313726,D.t)
B.rN=new C.w(1,0.788235294117647,0.6274509803921569,0.22745098039215686,D.t)
B.abo=new C.w(1,0.9411764705882353,0.5411764705882353,0.1411764705882353,D.t)
B.abq=new C.w(1,0.5568627450980392,0.5843137254901961,0.6196078431372549,D.t)
B.b6S=new C.w(1,0.47843137254901963,0.35294117647058826,0.22745098039215686,D.t)
B.kA=new C.w(1,0.788235294117647,0.807843137254902,0.8392156862745098,D.t)
B.abw=new C.w(1,0.4196078431372549,0.45098039215686275,0.5019607843137255,D.t)
B.abx=new C.w(1,0.5568627450980392,0.35294117647058826,0.2901960784313726,D.t)
B.zY=new C.w(1,0.9294117647058824,0.9176470588235294,0.8784313725490196,D.t)
B.b7H=new C.w(1,0.22745098039215686,0.22745098039215686,0.24705882352941178,D.t)
B.b7M=new C.w(1,0.5490196078431373,0.5764705882352941,0.6078431372549019,D.t)
B.DQ=new C.w(1,0.22745098039215686,0.24705882352941178,0.2784313725490196,D.t)
B.Vm=new C.w(1,0.8980392156862745,0.8980392156862745,0.8666666666666667,D.t)
B.Kb=new C.w(1,0.10588235294117647,0.11372549019607843,0.13333333333333333,D.t)
B.Vq=new C.w(1,0.30980392156862746,0.6588235294117647,0.3764705882352941,D.t)
B.abL=new C.w(1,0.8509803921568627,0.803921568627451,0.7215686274509804,D.t)
B.Kd=new C.w(1,0.11764705882352941,0.11764705882352941,0.12549019607843137,D.t)
B.b88=new C.w(1,0.8862745098039215,0.8745098039215686,0.8235294117647058,D.t)
B.b8p=new C.w(1,0.5411764705882353,0.4823529411764706,0.41568627450980394,D.t)
B.b8t=new C.w(1,0.34901960784313724,0.3176470588235294,0.29411764705882354,D.t)
B.b8A=new C.w(1,0.8117647058823529,0.792156862745098,0.7411764705882353,D.t)
B.Vv=new C.w(1,0.8117647058823529,0.8901960784313725,0.9176470588235294,D.t)
B.Vw=new C.w(1,0.3333333333333333,0.396078431372549,0.4823529411764706,D.t)
B.Vx=new C.w(1,0.5529411764705883,0.7843137254901961,1,D.t)
B.VA=new C.w(1,1,0.9019607843137255,0.5019607843137255,D.t)
B.b8Z=new C.w(1,0.9490196078431372,0.7607843137254902,0.10588235294117647,D.t)
B.ac4=new C.w(1,0.9490196078431372,0.9411764705882353,0.9019607843137255,D.t)
B.b9g=new C.w(1,0.9686274509803922,0.9607843137254902,0.9333333333333333,D.t)
B.nx=new C.w(1,0.1843137254901961,0.49019607843137253,0.8823529411764706,D.t)
B.b9p=new C.w(1,0.788235294117647,0.7176470588235294,0.6078431372549019,D.t)
B.VD=new C.w(1,0.8901960784313725,0.6627450980392157,0.10980392156862745,D.t)
B.DX=new C.w(1,0.7137254901960784,0.7372549019607844,0.7686274509803922,D.t)
B.b9B=new C.w(1,0.22745098039215686,0.49019607843137253,0.26666666666666666,D.t)
B.uI=new C.w(1,0.9019607843137255,0.8823529411764706,0.8352941176470589,D.t)
B.VH=new C.w(1,0.3686274509803922,0.17647058823529413,0.13725490196078433,D.t)
B.DZ=new C.w(1,0.09019607843137255,0.09411764705882353,0.10588235294117647,D.t)
B.A4=new C.w(1,0.9725490196078431,0.9725490196078431,0.9568627450980393,D.t)
B.acn=new C.w(1,0.9450980392156862,0.9568627450980393,0.9725490196078431,D.t)
B.ba9=new C.w(1,0.9019607843137255,0.9019607843137255,0.8784313725490196,D.t)
B.VL=new C.w(1,0.8941176470588236,0.9058823529411765,0.9176470588235294,D.t)
B.m2=new C.w(1,0.7686274509803922,0.6039215686274509,0.3843137254901961,D.t)
B.acB=new C.w(1,1,0.35294117647058826,0.12156862745098039,D.t)
B.baR=new C.w(1,0.5411764705882353,0.5607843137254902,0.596078431372549,D.t)
B.baW=new C.w(1,0.5411764705882353,0.29411764705882354,0.29411764705882354,D.t)
B.VT=new C.w(1,0.9098039215686274,0.8509803921568627,0.7372549019607844,D.t)
B.rW=new C.w(1,1,0.9450980392156862,0.6588235294117647,D.t)
B.bbe=new C.w(1,0.5411764705882353,0.5411764705882353,0.5176470588235295,D.t)
B.bbg=new C.w(1,0.9647058823529412,0.9568627450980393,0.9254901960784314,D.t)
B.acJ=new C.w(1,0.47843137254901963,0.23137254901960785,0.1803921568627451,D.t)
B.bbv=new C.w(1,0.6078431372549019,0.6078431372549019,0.592156862745098,D.t)
B.Aa=new C.w(1,0.9568627450980393,0.9450980392156862,0.9176470588235294,D.t)
B.rY=new C.w(1,0.8862745098039215,0.23137254901960785,0.23137254901960785,D.t)
B.pf=new C.w(1,0.9490196078431372,0.9490196078431372,0.9254901960784314,D.t)
B.acN=new C.w(1,0.788235294117647,0.8117647058823529,0.8392156862745098,D.t)
B.bbL=new C.w(1,0.9294117647058824,0.9215686274509803,0.8941176470588236,D.t)
B.W0=new C.w(1,0.8392156862745098,0.6823529411764706,0.4470588235294118,D.t)
B.acQ=new C.w(1,0.9098039215686274,0.9098039215686274,0.9098039215686274,D.t)
B.E8=new C.w(1,0.2901960784313726,0.2980392156862745,0.32941176470588235,D.t)
B.acW=new C.w(1,0.3686274509803922,0.43137254901960786,0.5176470588235295,D.t)
B.bcm=new C.w(1,0.20784313725490197,0.47843137254901963,0.26666666666666666,D.t)
B.bcp=new C.w(1,0.3568627450980392,0.10196078431372549,0.09019607843137255,D.t)
B.ad_=new C.w(1,0.23137254901960785,0.1843137254901961,0.14901960784313725,D.t)
B.ad0=new C.w(1,0.8509803921568627,0.788235294117647,0.6588235294117647,D.t)
B.oi=new C.w(1,0.9686274509803922,0.9568627450980393,0.9254901960784314,D.t)
B.bcC=new C.w(1,0.13333333333333333,0.1450980392156863,0.16862745098039217,D.t)
B.W5=new C.w(1,0.4980392156862745,0.7215686274509804,1,D.t)
B.wS=new C.w(1,0.16470588235294117,0.1450980392156863,0.13725490196078433,D.t)
B.bcJ=new C.w(1,0.5411764705882353,0.23137254901960785,0.23137254901960785,D.t)
B.bcK=new C.w(1,0.9450980392156862,0.9294117647058824,0.8784313725490196,D.t)
B.Ks=new C.w(1,0.796078431372549,0.8156862745098039,0.8392156862745098,D.t)
B.W8=new C.w(1,0.8980392156862745,0.7254901960784313,0.11764705882352941,D.t)
B.bd5=new C.w(1,0.7490196078431373,0.8901960784313725,1,D.t)
B.Wc=new C.w(1,0.10588235294117647,0.10588235294117647,0.11372549019607843,D.t)
B.bdp=new C.w(1,0.9529411764705882,0.9058823529411765,0.6313725490196078,D.t)
B.adk=new C.w(1,0.9490196078431372,0.9490196078431372,0.9333333333333333,D.t)
B.bdL=new C.w(1,0.6274509803921569,0.6509803921568628,0.6823529411764706,D.t)
B.be0=new C.w(1,0.8156862745098039,0.35294117647058826,0.22745098039215686,D.t)
B.be6=new C.w(1,0.8509803921568627,0.788235294117647,0.6274509803921569,D.t)
B.Wh=new C.w(1,0.9490196078431372,0.9176470588235294,0.8274509803921568,D.t)
B.adB=new C.w(1,0.10588235294117647,0.07058823529411765,0.03529411764705882,D.t)
B.bel=new C.w(1,0.3607843137254902,0.7019607843137254,0.9098039215686274,D.t)
B.ben=new C.w(1,0.24705882352941178,0.26666666666666666,0.3137254901960784,D.t)
B.bew=new C.w(1,0.12549019607843137,0.13333333333333333,0.14901960784313725,D.t)
B.KB=new C.w(1,0.8862745098039215,0.27058823529411763,0.35294117647058826,D.t)
B.wX=new C.w(1,0.17254901960784313,0.4196078431372549,0.8392156862745098,D.t)
B.wY=new C.w(1,0.7607843137254902,0.4627450980392157,0.22745098039215686,D.t)
B.KE=new C.w(1,0.7254901960784313,0.7450980392156863,0.7764705882352941,D.t)
B.beY=new C.w(1,0.611764705882353,0.35294117647058826,0.27058823529411763,D.t)
B.bfa=new C.w(1,0.611764705882353,0.5882352941176471,0.5450980392156862,D.t)
B.adU=new C.w(1,0.9686274509803922,0.9490196078431372,0.9019607843137255,D.t)
B.bfx=new C.w(1,0.2,0.21176470588235294,0.23137254901960785,D.t)
B.bfC=new C.w(1,0.7098039215686275,0.7333333333333333,0.7647058823529411,D.t)
B.bfE=new C.w(1,0.9294117647058824,0.9294117647058824,0.9098039215686274,D.t)
B.bfJ=new C.w(1,0.9098039215686274,0.8941176470588236,0.8549019607843137,D.t)
B.ae1=new C.w(1,0.7686274509803922,0.5411764705882353,0.11764705882352941,D.t)
B.bfR=new C.w(1,0.43529411764705883,0.7137254901960784,1,D.t)
B.bg1=new C.w(1,0.9137254901960784,0.8980392156862745,0.8549019607843137,D.t)
B.ae7=new C.w(1,0.18823529411764706,0.2,0.22745098039215686,D.t)
B.KK=new C.w(1,0.9372549019607843,0.9372549019607843,0.9176470588235294,D.t)
B.ae9=new C.w(0.6666666666666666,1,0.16470588235294117,0.10196078431372549,D.t)
B.bge=new C.w(1,0.9372549019607843,0.9137254901960784,0.8627450980392157,D.t)
B.bgh=new C.w(1,0.9294117647058824,0.9019607843137255,0.8156862745098039,D.t)
B.Ww=new C.w(1,0.4196078431372549,0.24705882352941178,0.19215686274509805,D.t)
B.bgm=new C.w(1,0.12156862745098039,0.6392156862745098,0.2627450980392157,D.t)
B.bgo=new C.w(1,0.803921568627451,0.6274509803921569,0.2,D.t)
B.KN=new C.w(1,0.3607843137254902,0.7019607843137254,1,D.t)
B.aek=new C.w(1,0.9568627450980393,0.9568627450980393,0.9411764705882353,D.t)
B.bh0=new C.w(1,0.8431372549019608,0.8,0.6588235294117647,D.t)
B.bhz=new C.w(1,0.9019607843137255,0.8745098039215686,0.796078431372549,D.t)
B.bhA=new C.w(1,0.30980392156862746,0.6588235294117647,1,D.t)
B.bhE=new C.w(1,1,0.6196078431372549,0.6196078431372549,D.t)
B.aev=new C.w(1,0.8431372549019608,0.16470588235294117,0.16470588235294117,D.t)
B.KS=new C.w(1,0.47843137254901963,0.30980392156862746,0.1568627450980392,D.t)
B.Al=new C.w(1,0.6901960784313725,0.5411764705882353,0.3568627450980392,D.t)
B.Ew=new C.w(1,0.6078431372549019,0.8274509803921568,0.9607843137254902,D.t)
B.bi6=new C.w(1,0.48627450980392156,0.2901960784313726,0.22745098039215686,D.t)
B.bi7=new C.w(1,0.23137254901960785,0.6078431372549019,1,D.t)
B.bif=new C.w(1,0.8509803921568627,0.8235294117647058,0.7607843137254902,D.t)
B.bih=new C.w(1,0.29411764705882354,0.29411764705882354,0.3137254901960784,D.t)
B.An=new C.w(1,0.4196078431372549,0.2901960784313726,0.19607843137254902,D.t)
B.aeB=new C.w(1,0.13333333333333333,0.14901960784313725,0.17254901960784313,D.t)
B.bim=new C.w(1,0.8117647058823529,0.788235294117647,0.7215686274509804,D.t)
B.biu=new C.w(1,0.5450980392156862,0.4196078431372549,0.24705882352941178,D.t)
B.bnv=new C.Q(10,16,10,14)
B.Xw=new C.Q(11,9,11,9)
B.ag8=new C.Q(14,8,14,24)
B.bsf=new C.Q(4,22,4,12)
B.bss=new C.Q(4,4,8,4)
B.frI=new C.x("Practice mode (no explanations, real shocks)",null,D.T_,null,null,null,null,null,null,null,null,null)
B.btR=new C.bF(1,D.bj,B.frI,null)
B.fnv=new C.x("Practice mode (no hints, no labels)",null,D.T_,null,null,null,null,null,null,null,null,null)
B.btS=new C.bF(1,D.bj,B.fnv,null)
B.ffF=new C.x("Construction Lab",null,Q.vZ,null,null,null,null,null,null,null,null,null)
B.f55=new C.x("Wire it. Plumb it. Fix a house.",null,D.ho,null,null,null,null,null,null,null,null,null)
B.cXG=w([B.ffF,B.f55],x.p)
B.bjd=new C.fp(D.ai,D.e,D.j,D.F,null,D.p,null,0,B.cXG,null)
B.bua=new C.bF(1,D.bj,B.bjd,null)
B.fna=new C.x("Practice mode (no hints, real shocks and fires)",null,D.T_,null,null,null,null,null,null,null,null,null)
B.buQ=new C.bF(1,D.bj,B.fna,null)
B.bvz=new A.a3G(null,null)
B.YS=new A.qR(0,"tripped")
B.YT=new A.qR(1,"noHotWater")
B.YU=new A.qR(10,"wallHole")
B.YV=new A.qR(11,"clogged")
B.M0=new A.qR(2,"nutLeak")
B.M1=new A.qR(3,"pexLeak")
B.YW=new A.qR(5,"flicker")
B.YX=new A.qR(6,"burntOutlet")
B.YY=new A.qR(7,"gfciTripped")
B.YZ=new A.qR(8,"runningToilet")
B.Z_=new A.qR(9,"dripFaucet")
B.bx6=new A.qb("back",0,10)
B.bx7=new A.qb("back",56,11)
B.bx8=new A.qb("left",40,9)
B.bx9=new A.qb("right",40,10)
B.Z7=new A.qb("right",50,5)
B.aia=new A.pu("tv100",'Giant 100"',"\ud83d\udcfa",89,!1)
B.bzS=new C.a0(63015,"MaterialIcons",!1)
B.bAl=new C.a0(63228,"MaterialIcons",!1)
B.aka=new C.a0(983222,"MaterialIcons",!1)
B.akK=new C.a0(983775,"MaterialIcons",!1)
B.akQ=new C.a0(983894,"MaterialIcons",!1)
B.fCp=new A.J(-0.4,4.2,-2.4)
B.bPm=new A.rZ(B.fCp,"LIVE 120 V",D.bL)
B.bfT=new C.w(1,0.2901960784313726,0.20392156862745098,0.0784313725490196,D.t)
B.bd7=new C.w(1,0.12156862745098039,0.10196078431372549,0.07058823529411765,D.t)
B.b73=new C.w(1,0.16470588235294117,0.12156862745098039,0.07058823529411765,D.t)
B.d6K=w([B.bfT,B.bd7,B.b73],x.O)
B.bRk=new C.a7(D.ax,D.aD,D.x,B.d6K,null,null)
B.bU7=w(["flange","wax","toilet","bolts","valve","hosehot","hosecold","faucet","tail","trap","arm"],x.s)
B.bUF=w([0,1,2,3,4,6,7,8,9,10],x.t)
B.fB3=new A.J(-57.8,-32,0)
B.b_N=new A.yo(0,"Outlet spot 1",!1,B.fB3,"low")
B.fBB=new A.J(-9.8,-32,0)
B.b_K=new A.yo(1,"Outlet spot 2",!1,B.fBB,"low")
B.fBV=new A.J(38.2,-32,0)
B.b_Q=new A.yo(2,"Outlet spot 3",!1,B.fBV,"low")
B.fAK=new A.J(-25.8,0,0)
B.b_O=new A.yo(3,"Switch spot 1",!1,B.fAK,"switch")
B.fBx=new A.J(22.2,0,0)
B.b_M=new A.yo(4,"Switch spot 2",!1,B.fBx,"switch")
B.fCE=new A.J(-30,48,40)
B.b_P=new A.yo(5,"Ceiling light spot",!0,B.fCE,"light")
B.fwF=new A.J(30,48,40)
B.b_L=new A.yo(6,"Ceiling fan spot",!0,B.fwF,"fan")
B.tM=w([B.b_N,B.b_K,B.b_Q,B.b_O,B.b_M,B.b_P,B.b_L],C.ax("P<yo>"))
B.cdm=w(["The living room has no power: find the tripped breaker in the panel and reset it.","The kitchen sink drips: pick the wrench and tighten the slip nut under the sink. (Build the house up to Fixtures to see the problems.)"],x.s)
B.fBK=new A.J(11,4.6,-6)
B.fyf=new A.J(11,5.4,-7.85)
B.fBh=new A.J(3.4,5.4,-7.85)
B.aQX=new A.J(3.4,3.4,-7.85)
B.cdo=w([B.fBK,B.fyf,B.fBh,B.aQX],x.o)
B.ehA=new C.z(-9.5,4.6)
B.ejQ=new C.z(-5.9,2.3)
B.epz=new C.z(8.8,4.4)
B.ctm=w([B.ehA,B.ejQ,B.epz],x.f)
B.cug=w([61,63],x.t)
B.cut=w([62,64],x.t)
B.b8S=new C.w(1,0.6039215686274509,0.30980392156862746,0.30980392156862746,D.t)
B.bio=new C.w(1,0.30980392156862746,0.47843137254901963,0.3686274509803922,D.t)
B.at5=w([B.DF,B.acW,B.b8S,B.bio,B.ad0,D.t9],x.O)
B.at9=w([72,73,74,75],x.t)
B.eqQ=new C.z(-25,-15)
B.eaz=new C.z(25,-15)
B.eqP=new C.z(-25,15)
B.eay=new C.z(25,15)
B.cAG=w([B.eqQ,B.eaz,B.eqP,B.eay],x.f)
B.bxb=new A.pu("wall","Whole-wall TV","\ud83c\udfac",0,!0)
B.bxj=new A.pu("tv200",'Cinema 200"',"\ud83c\udfac",175,!1)
B.bxe=new A.pu("tv150",'Cinema 150"',"\ud83c\udfac",130,!1)
B.bxf=new A.pu("bangtv",'Beovision TV 77"',"\ud83d\udcfa",66,!1)
B.bxa=new A.pu("sonytv",'Sony Bravia 75"',"\ud83d\udcfa",64,!1)
B.bxk=new A.pu("lgtv",'LG OLED 65"',"\ud83d\udcfa",56,!1)
B.bxd=new A.pu("tv",'Samsung Neo QLED 55"',"\ud83d\udcfa",48,!1)
B.bxi=new A.pu("appletv",'Apple TV 4K 50"',"\ud83d\udcfa",44,!1)
B.bxh=new A.pu("lamp","Table lamp","\ud83d\udca1",0,!1)
B.bxg=new A.pu("toaster","Toaster","\ud83c\udf5e",0,!1)
B.bxc=new A.pu("hairdryer","Hair dryer","\ud83d\udc87",0,!1)
B.a0X=w([B.bxb,B.bxj,B.bxe,B.aia,B.bxf,B.bxa,B.bxk,B.bxd,B.bxi,B.bxh,B.bxg,B.bxc],C.ax("P<pu>"))
B.cIn=w([y.r,"Two cables come into the box: one from the breaker panel (LINE) and one going to the light (LOAD).","Twist the two white wires together with a wire nut. A switch does not cut the neutral.",y.x,"Fasten the black wire from the panel to one BRASS screw.","Fasten the black wire that goes to the light to the other BRASS screw.","Push the switch into the box, put the plate on and test with the power on."],x.s)
B.dXp={black:0}
B.I5=new C.eV(B.dXp,1,x.M)
B.bxA=new A.mf(51,"Black wire nut: HOT",B.I5,!1,"hot")
B.dYa={white:0}
B.I3=new C.eV(B.dYa,1,x.M)
B.bxp=new A.mf(52,"White wire nut: NEUTRAL",B.I3,!1,"neutral")
B.dXF={ground:0}
B.RY=new C.eV(B.dXF,1,x.M)
B.bxm=new A.mf(53,"Green ground connection",B.RY,!1,"ground")
B.cIw=w([B.bxA,B.bxp,B.bxm],x.r)
B.bxB=new A.mf(51,"Black wire nut: HOT",B.I5,!1,"hot")
B.bxq=new A.mf(52,"White wire nut: NEUTRAL",B.I3,!1,"neutral")
B.bxn=new A.mf(53,"Green ground connection",B.RY,!1,"ground")
B.cIv=w([B.bxB,B.bxq,B.bxn],x.r)
B.cIS=w(["Walnut","Blue grey","Brick red","Sage green","Sand","Charcoal"],x.s)
B.fza=new A.J(-6.5,7.5,-7.85)
B.fze=new A.J(-6.5,7.8,-3)
B.cJ9=w([B.fza,B.fze],x.o)
B.b9z=new C.w(1,0.9176470588235294,0.9490196078431372,0.9686274509803922,D.t)
B.bef=new C.w(1,0.9647058823529412,0.9098039215686274,0.9098039215686274,D.t)
B.bdo=new C.w(1,0.9529411764705882,0.9215686274509803,0.7843137254901961,D.t)
B.atN=w([B.Aa,B.b9z,B.bef,B.bdo],x.O)
B.cJN=w([y.r,"The cable comes in through the top of the box. Strip about 3/4 inch of insulation from each wire.","Fasten the bare copper ground wire to the GREEN screw.","Fasten the white (neutral) wire to a SILVER screw.","Fasten the black (hot) wire to a BRASS screw. Wrap each wire clockwise under its screw.","Fold the wires back and push the outlet into the box.","Put the cover plate on, then turn the power on and test."],x.s)
B.fDx=new A.J(-3.6,7.5,-7.85)
B.fyS=new A.J(-3.6,4.2,-7.85)
B.cJU=w([B.fDx,B.fyS],x.o)
B.dXo={blackLine:0,blackLoad:1}
B.aLm=new C.eV(B.dXo,2,x.M)
B.bxy=new A.mf(21,"Brass screw (top)",B.aLm,!1,"hot")
B.bxz=new A.mf(22,"Brass screw (bottom)",B.aLm,!1,"hot")
B.aib=new A.mf(25,"Green screw: GROUND",B.RY,!1,"ground")
B.cKo=w([B.bxy,B.bxz,B.aib],x.r)
B.cKB=w([0,2,1,3,4,6,7,8],x.t)
B.fC0=new A.J(9.8,6,-7.85)
B.fyj=new A.J(9.8,7.5,-7.85)
B.fDL=new A.J(-8,7.5,-7.85)
B.fzZ=new A.J(-8,1.5,-7.85)
B.cLq=w([B.fC0,B.fyj,B.fDL,B.fzZ],x.o)
B.aR1=new A.J(5,1.8,-7.85)
B.fAD=new A.J(5,-0.1,-7.85)
B.fBp=new A.J(12.5,-0.1,-7.85)
B.cMp=w([B.aR1,B.fAD,B.fBp],x.o)
B.fuU=new A.J(3,3.1,-7.1)
B.aQY=new A.J(3,1.7,-7.1)
B.fBk=new A.J(3,1,-7.1)
B.fwv=new A.J(3.65,0.5,-7.1)
B.fxm=new A.J(4.3,1,-7.1)
B.fAy=new A.J(4.3,1.8,-7.1)
B.fDN=new A.J(5,1.8,-7.1)
B.cMR=w([B.fuU,B.aQY,B.fBk,B.fwv,B.fxm,B.fAy,B.fDN,B.aR1],x.o)
B.fDi=new A.J(0.6,11,-3.4)
B.fxM=new A.J(0.6,3.2,-3.2)
B.fCY=new A.J(0.6,2.2,-1.9)
B.fxB=new A.J(0.6,0.7,-1.5)
B.cNP=w([B.fDi,B.fxM,B.fCY,B.fxB],x.o)
B.cP0=w(["road","roadturn","roadtee","roadcross","house2","shop","hospital","firestation","school","car","firetruck","ambulance","dog","cat","cow","sheep","chicken","horse","tree","pine","bush","flowers","fence","lamppost","bench","pond","swing","shed","doghouse"],x.s)
B.fwT=new A.J(0,8.3,0)
B.aQF=new A.J(0,3.9,0)
B.a1t=w([B.fwT,B.aQF],x.o)
B.cPf=w([y.r,"Make sure the box is rated for a fan. A plain light box cannot carry the weight and the shaking.","Join the house ground wire to the fan ground.","Join the house white wire to the fan white wire with a wire nut.","Join the house black wire to the fan black wire with a wire nut.","Push the wires up into the box and fasten the canopy to the ceiling.",y.E],x.s)
B.fIO=new A.Fc("outlet","\ud83d\udd0c","Wall outlet","Black to brass, white to silver",D.aI)
B.fIL=new A.Fc("switch","\ud83d\udca1","Light switch","Two blacks and a wire nut",D.aW)
B.fIM=new A.Fc("gfci","\ud83d\udee1\ufe0f","GFCI outlet","LINE and LOAD near water",D.bs)
B.fIP=new A.Fc("fan","\ud83c\udf00","Ceiling fan","Black, white, green and a fan box",D.b7)
B.fIN=new A.Fc("ptrap","\ud83e\udea0","Sink drain (P-trap)","Build a drain with a water seal",D.ct)
B.fIK=new A.Fc("faucet","\ud83d\udeb0","Faucet supply lines","Hot left, cold right",D.cr)
B.fIJ=new A.Fc("house","\ud83c\udfd7\ufe0f","Build and fix a house","Stage by stage, then repair",D.by)
B.cPt=w([B.fIO,B.fIL,B.fIM,B.fIP,B.fIN,B.fIK,B.fIJ],C.ax("P<Fc>"))
B.fCi=new A.J(-0.6,11,-3.4)
B.fyn=new A.J(-0.6,3.2,-3.2)
B.fBH=new A.J(-0.6,2.2,-1.9)
B.fE0=new A.J(-0.6,0.7,-1.5)
B.cPy=w([B.fCi,B.fyn,B.fBH,B.fE0],x.o)
B.e1r=new A.nb("flange","flange","Toilet flange",D.T,"The flange is fixed to the floor over the drain. Everything else sits on it.",!1,0)
B.d1G=w(["flange"],x.s)
B.e1p=new A.nb("wax","wax","Wax ring",B.d1G,"The wax ring goes on the flange before the toilet. It makes the seal against sewer gas and water.",!1,0)
B.dbo=w(["wax"],x.s)
B.e1m=new A.nb("toilet","toilet","Toilet",B.dbo,"The toilet is lowered straight down onto the wax ring. The ring has to be there first.",!1,0)
B.d9T=w(["toilet"],x.s)
B.e1q=new A.nb("bolts","bolts","Toilet bolts",B.d9T,"The two bolts hold the toilet to the flange. Set the toilet first.",!1,2)
B.e1n=new A.nb("tvalve","valve","Toilet shut-off valve",D.T,"The shut-off valve goes on the pipe that comes out of the wall.",!0,0)
B.d9Z=w(["tvalve","toilet"],x.s)
B.e1o=new A.nb("those","hosecold","Toilet supply hose",B.d9Z,"The hose joins the valve to the toilet tank, so both must be there first.",!1,2)
B.aFs=new A.nb("faucet","faucet","Faucet",D.T,"The faucet goes through the hole in the counter.",!1,0)
B.aFv=new A.nb("vhot","valve","Hot shut-off valve (left)",D.T,y.g,!0,0)
B.aFt=new A.nb("vcold","valve","Cold shut-off valve (right)",D.T,y.g,!0,0)
B.daP=w(["vhot","faucet"],x.s)
B.aFw=new A.nb("hhot","hosehot","Hot supply hose",B.daP,"The hose joins the hot valve to the faucet, so the valve and the faucet must be there first.",!1,2)
B.daM=w(["vcold","faucet"],x.s)
B.aFu=new A.nb("hcold","hosecold","Cold supply hose",B.daM,"The hose joins the cold valve to the faucet, so the valve and the faucet must be there first.",!1,2)
B.aFr=new A.nb("tail","tail","Tailpiece",D.T,"The tailpiece hangs from the sink drain. It is the first piece of the drain.",!1,0)
B.d9M=w(["tail"],x.s)
B.aFx=new A.nb("trap","trap","P-trap",B.d9M,"The P-trap joins the tailpiece. Build the drain from the top down.",!1,1)
B.d9U=w(["trap"],x.s)
B.aFy=new A.nb("arm","arm","Trap arm",B.d9U,"The trap arm joins the trap and goes into the wall.",!1,1)
B.cLX=w([B.e1r,B.e1p,B.e1m,B.e1q,B.e1n,B.e1o,B.aFs,B.aFv,B.aFt,B.aFw,B.aFu,B.aFr,B.aFx,B.aFy],x.v)
B.e6S=new A.VW("bathroom","Bathroom",B.cLX,"Fit out a bathroom: a toilet and a sink with its faucet, supply hoses and drain.")
B.d3k=w([B.aFs,B.aFv,B.aFt,B.aFw,B.aFu,B.aFr,B.aFx,B.aFy],x.v)
B.e6T=new A.VW("kitchen","Kitchen",B.d3k,"Fit out a kitchen sink: the faucet, the hot and cold supplies and the drain.")
B.auz=w([B.e6S,B.e6T],C.ax("P<VW>"))
B.bxu=new A.mf(21,"LOAD hot (brass, taped)",D.I4,!0,"load")
B.bxw=new A.mf(22,"LINE hot (brass)",B.I5,!1,"hot")
B.bxv=new A.mf(23,"LOAD neutral (silver, taped)",D.I4,!0,"load")
B.bxo=new A.mf(24,"LINE neutral (silver)",B.I3,!1,"neutral")
B.cRv=w([B.bxu,B.bxw,B.bxv,B.bxo,B.aib],x.r)
B.fuS=new A.J(8.2,0.9,-6.3)
B.fBO=new A.J(8.2,-0.1,-6.3)
B.fwe=new A.J(8.2,-0.1,-7.85)
B.cRO=w([B.fuS,B.fBO,B.fwe],x.o)
B.cRZ=w([-0.28,0.28],x.n)
B.eqR=new C.z(-34,-6)
B.eaX=new C.z(30,10)
B.eqJ=new C.z(-10,24)
B.cSZ=w([B.eqR,B.eaX,B.eqJ],x.f)
B.bwd=new A.Di("Oak",B.Al,"wood")
B.bwf=new A.Di("Dark wood",B.An,"wood")
B.ael=new C.w(1,0.5529411764705883,0.5647058823529412,0.5882352941176471,D.t)
B.bwh=new A.Di("Grey carpet",B.ael,"carpet")
B.bgw=new C.w(1,0.3568627450980392,0.4980392156862745,0.6509803921568628,D.t)
B.bwe=new A.Di("Blue carpet",B.bgw,"carpet")
B.bee=new C.w(1,0.8470588235294118,0.803921568627451,0.7058823529411765,D.t)
B.bwb=new A.Di("Cream carpet",B.bee,"carpet")
B.bwg=new A.Di("White tile",B.VL,"tile")
B.bwc=new A.Di("Slate tile",B.abw,"tile")
B.auW=w([B.bwd,B.bwf,B.bwh,B.bwe,B.bwb,B.bwg,B.bwc],C.ax("P<Di>"))
B.fBI=new A.J(3,3.2,-7.85)
B.fE2=new A.J(3,4,-7.85)
B.fDy=new A.J(3,4.2,-7.4)
B.fvH=new A.J(3,3.95,-7)
B.cV6=w([B.fBI,B.fE2,B.fDy,B.fvH],x.o)
B.fC3=new A.J(6,0.2,0)
B.fAV=new A.J(6,2.6,0)
B.aRq=new A.J(8.6,2.6,0)
B.cWj=w([B.fC3,B.fAV,B.aRq],x.o)
B.eqV=new C.z(-7,-7)
B.edD=new C.z(7,-7)
B.eqU=new C.z(-7,7)
B.edC=new C.z(7,7)
B.cWZ=w([B.eqV,B.edD,B.eqU,B.edC],x.f)
B.cX0=w([-2.4,2.4],x.n)
B.cXh=w([-1.6,1.6],x.n)
B.adT=new C.w(1,0.14901960784313725,0.14901960784313725,0.16470588235294117,D.t)
B.fFl=new A.zI("blackLine","Black \xb7 from the breaker",B.adT,D.c,"hot")
B.bc6=new C.w(1,0.22745098039215686,0.1803921568627451,0.1803921568627451,D.t)
B.fFo=new A.zI("blackLoad","Black \xb7 to the light",B.bc6,D.c,"hot")
B.aRG=new A.zI("ground","Bare copper \xb7 ground",B.wY,D.c,"ground")
B.cXk=w([B.fFl,B.fFo,B.aRG],x.d)
B.b6P=new C.w(1,0.9294117647058824,0.9019607843137255,0.8392156862745098,D.t)
B.b56=new C.w(1,0.9137254901960784,0.8274509803921568,0.8274509803921568,D.t)
B.b4l=new C.w(1,0.8352941176470589,0.8941176470588236,0.8156862745098039,D.t)
B.bby=new C.w(1,0.9529411764705882,0.8901960784313725,0.6549019607843137,D.t)
B.b91=new C.w(1,0.7254901960784313,0.7647058823529411,0.8666666666666667,D.t)
B.bgD=new C.w(1,0.5607843137254902,0.6392156862745098,0.6588235294117647,D.t)
B.av8=w([B.b6P,B.Vv,B.b56,B.b4l,B.bby,B.b91,B.acQ,B.bgD],x.O)
B.ahW=new A.qR(4,"deadOutlet")
B.cZw=w([B.YS,B.YT,B.M0,B.M1,B.ahW,B.YW,B.YX,B.YY,B.YZ,B.Z_,B.YU,B.YV],C.ax("P<qR>"))
B.cZZ=w([y.r,"Find the LINE and LOAD screws. LOAD is covered with yellow tape. Leave it covered unless you feed another outlet.",y.x,"Fasten the white wire to the silver LINE screw.","Fasten the black wire to the brass LINE screw.","Push the GFCI into the box and put the plate on.","Turn the power on, press RESET, then press TEST. It must click off."],x.s)
B.d_x=w([0.1,8.05],x.n)
B.fzx=new A.J(-0.35,11,-3.4)
B.fyt=new A.J(-0.35,3.2,-3.2)
B.fB1=new A.J(-0.35,2.2,-1.9)
B.fxy=new A.J(-0.35,0.7,-1.5)
B.d_L=w([B.fzx,B.fyt,B.fB1,B.fxy],x.o)
B.fDr=new A.J(5.2,7.5,-7.85)
B.fAR=new A.J(5.2,4,-7.85)
B.d_R=w([B.fDr,B.fAR],x.o)
B.a85=new A.kV("look","Look",D.fa)
B.fI9=new A.kV("wall","Wall box",N.ajs)
B.fI8=new A.kV("ceiling","Ceiling box",D.qL)
B.fIi=new A.kV("fanbox","Fan box",M.Mw)
B.fIp=new A.kV("drill","Drill",D.xI)
B.fIj=new A.kV("cable","Cable roll",E.ajh)
B.d22=w([B.a85,B.fI9,B.fI8,B.fIi,B.fIp,B.fIj],x.b)
B.fIo=new A.kV("sheet","Drywall sheet",D.Bm)
B.fIc=new A.kV("knife","Drywall saw",D.Fv)
B.fIa=new A.kV("screw","Screw gun",R.FF)
B.fIr=new A.kV("tape","Tape",D.tB)
B.fIn=new A.kV("mud","Mud",Z.a_1)
B.fIv=new A.kV("sand","Sander",D.Ft)
B.bCI=new C.a0(985109,"MaterialIcons",!1)
B.fIg=new A.kV("paint","Roller",B.bCI)
B.cZE=w([B.a85,B.fIo,B.fIc,B.fIa,B.fIr,B.fIn,B.fIv,B.fIg],x.b)
B.fIk=new A.kV("tester","Voltage tester",D.qP)
B.akb=new C.a0(983223,"MaterialIcons",!1)
B.fIs=new A.kV("outlet","Outlet",B.akb)
B.fIe=new A.kV("gfci","GFCI",D.tI)
B.fIq=new A.kV("switch","Switch",E.N7)
B.fIm=new A.kV("light","Light",D.qR)
B.bCG=new C.a0(985094,"MaterialIcons",!1)
B.fIh=new A.kV("fan","Fan",B.bCG)
B.fIl=new A.kV("tv","TV",S.akz)
B.bAX=new C.a0(63571,"MaterialIcons",!1)
B.fIf=new A.kV("lamp","Lamp",B.bAX)
B.bzK=new C.a0(62944,"MaterialIcons",!1)
B.fId=new A.kV("toaster","Toaster",B.bzK)
B.bAj=new C.a0(63209,"MaterialIcons",!1)
B.fIu=new A.kV("hairdryer","Hair dryer",B.bAj)
B.fIt=new A.kV("flip","Flip switch",E.N7)
B.fIb=new A.kV("unplug","Unplug",B.aka)
B.d4v=w([B.a85,B.fIk,B.fIs,B.fIe,B.fIq,B.fIm,B.fIh,B.fIl,B.fIf,B.fId,B.fIu,B.fIt,B.fIb],x.b)
B.d_U=w([B.d22,B.cZE,B.d4v],C.ax("P<ak<kV>>"))
B.aRc=new A.J(0,15.5,-3.6)
B.fzH=new A.J(0,20,-3.6)
B.fDS=new A.J(0,22.5,-2)
B.fyb=new A.J(0,22.5,1.1999999999999997)
B.fzM=new A.J(0,21.1,1.6)
B.d0p=w([B.aRc,B.fzH,B.fDS,B.fyb,B.fzM],x.o)
B.GH=w([],x.E)
B.avw=w([],C.ax("P<h4Y>"))
B.vA=w([],x.h)
B.d15=w([],x.o)
B.d0Z=w([],x.a)
B.d2_=w(["Look at the pieces: the tailpiece, the P-trap and the trap arm. Pick the tailpiece first and tap its glowing outline under the sink.","Pick the P-trap (the U-shaped bend) and tap its glowing outline. It joins the tailpiece.","Pick the trap arm and tap its outline. It joins the trap to the wall drain.","Slide each slip nut up to its joint and hand tighten it: tap the nuts.","Run the water and look for leaks. The U-bend keeps a plug of water that blocks sewer gas."],x.s)
B.fvT=new A.J(11.4,4.6,-6)
B.fzU=new A.J(11.4,5,-7.85)
B.fxz=new A.J(2.6,5,-7.85)
B.fxR=new A.J(2.6,3.4,-7.85)
B.d2J=w([B.fvT,B.fzU,B.fxz,B.fxR],x.o)
B.d2N=w(["hot","cold"],x.s)
B.fFn=new A.zI("black","Black \xb7 hot",B.adT,D.c,"hot")
B.fFm=new A.zI("white","White \xb7 neutral",B.wG,D.aA,"neutral")
B.PK=w([B.fFn,B.fFm,B.aRG],x.d)
B.ey7=new C.bv(-6,-4,D.bZ)
B.ewQ=new C.bv(5,-5,D.cp)
B.ey5=new C.bv(0,1,D.aB)
B.eyy=new C.bv(-5,5,D.by)
B.ew7=new C.bv(6,4,D.c)
B.d3Z=w([B.ey7,B.ewQ,B.ey5,B.eyy,B.ew7],C.ax("P<+(N,N,w)>"))
B.eqi=new C.z("Slab","First the concrete slab (the foundation) is poured and left to cure. Every wall sits on it.")
B.esp=new C.z("Framing","The carpenters build the wall frames from 2x4 studs, spaced 16 inches apart, with plates on the top and bottom.")
B.eia=new C.z("Plumbing rough-in","The plumber runs the hot (red) and cold (blue) water lines and the white drain pipes inside the walls and floor before anything is closed up.")
B.eoz=new C.z("Electrical rough-in","The electrician runs the yellow and white cables from the breaker panel to every box, and fixes the boxes to the studs.")
B.epC=new C.z("Drywall","Drywall covers the frame. Here it is see-through so you can still look at the pipes and wires behind it.")
B.eiA=new C.z("Fixtures","Last come the outlets, switches, light, sink, toilet and water heater. This is where most repairs happen.")
B.ejM=new C.z("Roof","The roof goes on to keep everything dry. It is see-through here so you can keep looking inside.")
B.d4H=w([B.eqi,B.esp,B.eia,B.eoz,B.epC,B.eiA,B.ejM],x.L)
B.eqL=new C.z(-17,-9)
B.e9X=new C.z(17,-9)
B.eqK=new C.z(-17,9)
B.e9W=new C.z(17,9)
B.d5g=w([B.eqL,B.e9X,B.eqK,B.e9W],x.f)
B.d5m=w([-14,14],x.n)
B.d5p=w([-26,26],x.n)
B.d5r=w([-30,-10,10,30],x.n)
B.d5s=w([-3,3],x.n)
B.d5t=w([-48,-16,16,48],x.n)
B.nV=w([-72,-24,24],x.t)
B.d5v=w([-80,80],x.n)
B.d5y=w([-90,-52,52,90],x.n)
B.aw1=w([-9,9],x.n)
B.fxD=new A.J(8.2,5,-7.85)
B.fAU=new A.J(8.2,1.2,-7.85)
B.fCj=new A.J(8.2,1,-7.4)
B.d73=w([B.fxD,B.fAU,B.fCj],x.o)
B.dXG={hot:0}
B.aLq=new C.eV(B.dXG,1,x.M)
B.e6Q=new A.En(61,"Hot shut-off valve (left)",B.aLq,"Hot is always on the LEFT. The red hose goes on the left valve.")
B.dXu={cold:0}
B.aLy=new C.eV(B.dXu,1,x.M)
B.e6R=new A.En(62,"Cold shut-off valve (right)",B.aLy,"Cold is always on the RIGHT. The blue hose goes on the right valve.")
B.e6O=new A.En(63,"Hot faucet inlet (left)",B.aLq,"The left faucet inlet takes the hot (red) hose.")
B.e6P=new A.En(64,"Cold faucet inlet (right)",B.aLy,"The right faucet inlet takes the cold (blue) hose.")
B.a2f=w([B.e6Q,B.e6R,B.e6O,B.e6P],C.ax("P<En>"))
B.a2h=w([-72,-48,-24,0,24],x.t)
B.d8m=w(["1 Rough-in","2 Drywall","3 Devices"],x.s)
B.d8T=w(["road","roadturn","roadtee","roadcross"],x.s)
B.ewq=new C.bv("hot","Hot hose (red)",B.rY)
B.ex5=new C.bv("cold","Cold hose (blue)",B.nx)
B.d9h=w([B.ewq,B.ex5],C.ax("P<+(n,n,w)>"))
B.eaZ=new C.z(34,40)
B.fHC=new A.Jc(B.eaZ,3.141592653589793,2.6,"Washing hands at the sink",!1,!1,!1,"")
B.d9j=w([B.fHC],x.a)
B.a7L=new A.J(15,2.6,0)
B.a2k=w([B.aRq,B.a7L],x.o)
B.d9N=w(["tail","trap","arm"],x.s)
B.GL=w(["tv","lamp","toaster","hairdryer"],x.s)
B.dar=w([y.r,"Hold the fixture up to the ceiling box. It has three short wires: black, white and green.","Join the house ground wire to the fixture ground.","Join the house white wire to the fixture white wire with a wire nut.","Join the house black wire to the fixture black wire with a wire nut.","Push the wires into the box and fasten the fixture to the ceiling.",y.E],x.s)
B.daz=w([30,60,120,180,300],x.t)
B.bPG=new A.jx("Breaker off, then test","Before you touch any wire, switch its breaker OFF, then check with a voltage tester that the wire is dead. A switch on the wall is not enough.")
B.bPt=new A.jx("Lock out, tag out","On a real job you put a lock or a note on the panel so nobody switches the power back on while you work.")
B.bPN=new A.jx("Water and power","Water carries electricity. Near sinks, tubs and outdoors the outlets must be GFCI, and wet hands never touch wires.")
B.bPy=new A.jx("Eyes, ears, lungs","Safety glasses for drilling and cutting, ear protection for loud tools, and a mask when you sand drywall dust or cut tile.")
B.bPM=new A.jx("Shut the water off","Before you cut or loosen a pipe, close the main water valve and open a faucet to drain the line.")
B.d4c=w([B.bPG,B.bPt,B.bPN,B.bPy,B.bPM],x.Z)
B.bPZ=new A.LY("Safety first","\ud83e\uddba",D.cr,B.d4c)
B.bPO=new A.jx("Wire colours","Black is hot (it carries the power), white is neutral (the way back), bare copper or green is ground (the safety path). Red is a second hot, often used for a switched line.")
B.bPV=new A.jx("Screw colours","On an outlet the brass screw takes the hot wire, the silver screw takes the neutral and the green screw takes the ground.")
B.bPI=new A.jx("Wire size","14 gauge wire is for 15 amp circuits (lights and outlets). 12 gauge is for 20 amp circuits (kitchens). A thinner wire than the breaker allows can overheat and start a fire.")
B.bPC=new A.jx("Breakers","A breaker is a safety switch. It trips when a circuit carries too much current, so the wires never get hot enough to burn.")
B.bPQ=new A.jx("Wire nuts","Strip about 3/4 inch, twist the bare ends together clockwise, and screw on the nut until no bare copper shows. Give each wire a gentle tug.")
B.bPW=new A.jx("Switches","A switch cuts the hot wire only. The neutral goes straight through to the light.")
B.bPX=new A.jx("GFCI","A GFCI outlet watches the current going out and coming back. If a little leaks (through water or a person) it cuts the power in a fraction of a second.")
B.bPv=new A.jx("Ceiling fans","A fan shakes and is heavy. It needs a box that says fan rated, fixed to the joist, not a plain light box.")
B.bPx=new A.jx("Heights","Outlets sit about 16 inches from the floor. Switches sit about 48 inches up, where your hand falls.")
B.cY8=w([B.bPO,B.bPV,B.bPI,B.bPC,B.bPQ,B.bPW,B.bPX,B.bPv,B.bPx],x.Z)
B.bQ1=new A.LY("Wiring basics","\u26a1",D.cp,B.cY8)
B.bPu=new A.jx("Hot left, cold right","On a faucet, hot is on the left and cold on the right. Hot lines are marked red and cold lines blue.")
B.bPH=new A.jx("The P-trap","The curved pipe under a sink always holds a little water. That water seal stops sewer gas coming up the drain.")
B.bPS=new A.jx("Shut-off valves","Every sink and toilet has its own small valve, so you can stop the water to one fixture without turning off the whole house.")
B.bPA=new A.jx("Slip nuts","Drain joints are sealed by a washer and a slip nut. Tighten by hand and a quarter turn: too much force cracks plastic.")
B.bPz=new A.jx("Wax ring","A toilet sits on a wax ring that seals it to the floor drain. A toilet is lowered straight down once, and cannot be slid around.")
B.bPP=new A.jx("Drain slope","Drains fall about 1/4 inch per foot so water and waste keep moving. Too flat and it clogs, too steep and the water leaves the solids behind.")
B.bPU=new A.jx("Order of work","Plumbing goes from the top down on the drain (tailpiece, trap, arm) and from the wall out on the supply (valve, hose, fixture).")
B.c6r=w([B.bPu,B.bPH,B.bPS,B.bPA,B.bPz,B.bPP,B.bPU],x.Z)
B.bQ_=new A.LY("Plumbing basics","\ud83d\udeb0",D.ct,B.c6r)
B.bPw=new A.jx("Studs","Studs are the vertical 2x4 posts inside a wall, 16 inches apart from centre to centre. Everything is fixed to them.")
B.bPK=new A.jx("Drilling studs","Holes for cable go through the middle of the stud, so a nail or screw cannot reach the wire.")
B.bPB=new A.jx("Drywall","A sheet is 4 feet wide, so its edges land on studs 48 inches apart. Screws go into studs only, just under the paper.")
B.bPE=new A.jx("Taping and mud","Seams get paper tape and three thin coats of joint compound, sanded smooth between coats, then primer and paint.")
B.bPT=new A.jx("Order of a build","Frame, run the pipes and wires (rough-in), inspect, hang drywall, finish it, paint, then fit the fixtures and devices.")
B.cKl=w([B.bPw,B.bPK,B.bPB,B.bPE,B.bPT],x.Z)
B.bPY=new A.LY("Framing and walls","\ud83c\udfe0",D.dT,B.cKl)
B.bPF=new A.jx("Voltage tester","A pen that glows or beeps near live wires. Test it on a known live outlet first, so you know it works.")
B.bPL=new A.jx("Wire strippers","Strip the plastic off without nicking the copper. A nick weakens the wire.")
B.bPR=new A.jx("Adjustable wrench","For nuts on valves and hoses. Hold the fitting steady with a second wrench so you do not twist the pipe.")
B.bPJ=new A.jx("Drill and screw gun","A drill makes holes through studs. A screw gun sets drywall screws to the right depth.")
B.bPD=new A.jx("Level and tape measure","Measure twice, cut once. A level makes sure outlets, shelves and pipes are straight.")
B.dbG=w([B.bPF,B.bPL,B.bPR,B.bPJ,B.bPD],x.Z)
B.bQ0=new A.LY("Tools","\ud83e\uddf0",D.bs,B.dbG)
B.dbk=w([B.bPZ,B.bQ1,B.bQ_,B.bPY,B.bQ0],C.ax("P<LY>"))
B.bxs=new A.mf(21,"Brass screw (top): HOT side",B.I5,!1,"hot")
B.bxr=new A.mf(22,"Brass screw (bottom): HOT side",B.I5,!1,"hot")
B.bxt=new A.mf(23,"Silver screw (top): NEUTRAL side",B.I3,!1,"neutral")
B.bxx=new A.mf(24,"Silver screw (bottom): NEUTRAL side",B.I3,!1,"neutral")
B.bxl=new A.mf(25,"Green screw: GROUND",B.RY,!1,"ground")
B.dbl=w([B.bxs,B.bxr,B.bxt,B.bxx,B.bxl],x.r)
B.dbB=w(["Cream","Sky","Blush","Mint","Butter","Periwinkle","White","Slate"],x.s)
B.dbM=w([0.72,-0.72],x.n)
B.eeR=new C.z("outlet","\ud83d\udd0c Outlet")
B.erw=new C.z("gfci","\ud83d\udee1\ufe0f GFCI outlet")
B.enW=new C.z("switch","\ud83d\udca1 Light switch")
B.dc3=w([B.eeR,B.erw,B.enW],x.L)
B.dcd=w(["inspect","hand","screwdriver","pliers","wrench","crimper","plunger","flapper","newoutlet","patch"],x.s)
B.ddc=w(["Look under the sink. The wall has two shut-off valves: hot on the LEFT (red handle) and cold on the RIGHT (blue handle).","Pick the red hot hose. Tap the left shut-off valve, then the left faucet inlet.","Pick the blue cold hose. Tap the right shut-off valve, then the right faucet inlet.","Open the valves slowly and turn on the faucet. Check every connection for drips."],x.s)
B.dXE={flange:0,wax:1,toilet:2,bolts:3,valve:4,hosehot:5,hosecold:6,faucet:7,tail:8,trap:9,arm:10}
B.dfq=new C.bq(B.dXE,["Flange","Wax ring","Toilet","Bolts","Shut-off valve","Hot hose","Cold hose","Faucet","Tailpiece","P-trap","Trap arm"],x.l)
B.bvB=new A.u0("The living room has no power at all.","The living room breaker is sitting in the middle (orange). It has tripped. Flip it fully OFF and ON again, by hand.","hand","Breaker reset. The living room has power again.",72,0,"")
B.bvL=new A.u0("There is no hot water.","The water heater breaker has tripped (orange). Reset it by hand.","hand","Breaker reset. The water heater is heating again.",75,0,"")
B.bvI=new A.u0("Water is dripping under the kitchen sink.","The slip nut on the P-trap is loose and the joint drips. Tighten it with the wrench.","wrench","Slip nut tightened. The drip stopped.",87,0,"")
B.bvA=new A.u0("There is a wet spot on the wall behind the kitchen.","A crimped joint in the hot water line is leaking. A crimp joint is squeezed with a crimping tool, not tightened with a wrench.","crimper","The joint is crimped again and it does not leak.",96,0,"")
B.bvF=new A.u0("The outlet by the sofa does not work, but the lights do.","The tester finds power at the box but the outlet is dead: a screw on the outlet has come loose. Turn the breaker off first, then tighten the screws with the screwdriver.","screwdriver","You tightened the loose screw. The outlet works again.",81,72,"Turn the living room breaker OFF first.")
B.bvC=new A.u0("The living room light flickers.","A wire nut in the light box has worked loose. Turn the breaker off, then twist the wire nut tight with the pliers.","pliers","You twisted the wire nut tight. The light is steady.",83,72,"Turn the living room breaker OFF first.")
B.bvD=new A.u0("The kitchen outlet sparks and smells burnt.","The outlet has burnt. Turn the breaker off and replace it with a new outlet.","newoutlet","New outlet fitted. No more sparks.",84,73,"Turn the kitchen breaker OFF first.")
B.bvJ=new A.u0("The kitchen outlets are dead.","The GFCI outlet has tripped. Press its RESET button by hand.","hand","You pressed RESET. The kitchen outlets work.",84,0,"")
B.bvE=new A.u0("The toilet keeps running.","The rubber flapper in the tank no longer seals, so water leaks into the bowl all the time. Replace the flapper.","flapper","New flapper fitted. The toilet stops running.",88,0,"")
B.bvH=new A.u0("The kitchen faucet drips.","The faucet washer is worn. Tighten the packing nut with the wrench, then check.","wrench","The faucet is sealed. No more drips.",85,0,"")
B.bvG=new A.u0("There is a hole in the wall.","A hole in the drywall. Stick a drywall patch over it, then tape, mud, sand and paint it.","patch","Patch fitted. Now it only needs mud, sanding and paint.",95,0,"")
B.bvK=new A.u0("The kitchen sink drains very slowly.","The drain is clogged. Use the plunger.","plunger","The clog is gone. The sink drains fast.",94,0,"")
B.vE=new C.dR([B.YS,B.bvB,B.YT,B.bvL,B.M0,B.bvI,B.M1,B.bvA,B.ahW,B.bvF,B.YW,B.bvC,B.YX,B.bvD,B.YY,B.bvJ,B.YZ,B.bvE,B.Z_,B.bvH,B.YU,B.bvG,B.YV,B.bvK],C.ax("dR<qR,u0>"))
B.dhf=new C.bq(D.ic,[],C.ax("bq<G,d3>"))
B.dXC={tail:0,trap:1,arm:2}
B.dhu=new C.bq(B.dXC,["Tailpiece","P-trap","Trap arm"],x.l)
B.dWn={bed:0,nightstand:1,wardrobe:2,desk:3,rug:4,sofa:5,armchair:6,coffee:7,tvstand:8,dining:9,chair:10,plant:11,lamp:12,console:13,shelf:14,tree:15,pine:16,bush:17,flowers:18,fence:19,lamppost:20,bench:21,car:22,road:23,roadturn:24,roadtee:25,roadcross:26,house2:27,shop:28,hospital:29,firestation:30,school:31,firetruck:32,ambulance:33,dog:34,cat:35,cow:36,sheep:37,chicken:38,horse:39,pond:40,swing:41,shed:42,doghouse:43}
B.bwK=new A.hk("Bed","\ud83d\udecf\ufe0f",60,80)
B.bwV=new A.hk("Night table","\ud83e\ude91",16,16)
B.bx1=new A.hk("Wardrobe","\ud83d\udeaa",44,20)
B.bwH=new A.hk("Desk","\ud83d\udda5\ufe0f",48,24)
B.bwo=new A.hk("Rug","\ud83d\udfe5",70,50)
B.bwO=new A.hk("Sofa","\ud83d\udecb\ufe0f",80,32)
B.bx_=new A.hk("Armchair","\ud83d\udcba",30,30)
B.bwC=new A.hk("Coffee table","\u2615",40,24)
B.bwW=new A.hk("TV stand","\ud83d\udcfa",56,18)
B.bwv=new A.hk("Dining table","\ud83c\udf7d\ufe0f",56,36)
B.bwy=new A.hk("Chair","\ud83e\ude91",18,18)
B.bwX=new A.hk("Plant","\ud83e\udeb4",14,14)
B.bwQ=new A.hk("Floor lamp","\ud83d\udca1",10,10)
B.bwI=new A.hk("Console table","\ud83d\uddc4\ufe0f",44,14)
B.bwT=new A.hk("Bookshelf","\ud83d\udcda",36,12)
B.bx0=new A.hk("Tree","\ud83c\udf33",36,36)
B.bwE=new A.hk("Pine tree","\ud83c\udf32",30,30)
B.bwt=new A.hk("Bush","\ud83c\udf3f",18,18)
B.bwN=new A.hk("Flowers","\ud83c\udf37",22,22)
B.bwp=new A.hk("Fence","\ud83d\udea7",64,6)
B.bww=new A.hk("Street lamp","\ud83c\udfee",8,8)
B.bwJ=new A.hk("Bench","\ud83e\ude91",44,16)
B.bwq=new A.hk("Car","\ud83d\ude97",84,40)
B.bwB=new A.hk("Road","\ud83d\udee3\ufe0f",40,40)
B.bws=new A.hk("Road corner","\u21aa\ufe0f",40,40)
B.bx2=new A.hk("Road T-junction","\u22a4",40,40)
B.bwD=new A.hk("Crossroads","\u271a",40,40)
B.bwP=new A.hk("House","\ud83c\udfe0",72,60)
B.bwn=new A.hk("Shop","\ud83c\udfea",84,60)
B.bwz=new A.hk("Hospital","\ud83c\udfe5",110,70)
B.bwM=new A.hk("Fire station","\ud83d\ude92",90,64)
B.bwF=new A.hk("School","\ud83c\udfeb",124,70)
B.bwU=new A.hk("Fire truck","\ud83d\ude92",96,40)
B.bwG=new A.hk("Ambulance","\ud83d\ude91",84,40)
B.bwx=new A.hk("Dog","\ud83d\udc15",22,10)
B.bwA=new A.hk("Cat","\ud83d\udc08",16,8)
B.bwR=new A.hk("Cow","\ud83d\udc04",38,16)
B.bwu=new A.hk("Sheep","\ud83d\udc11",26,14)
B.bwS=new A.hk("Chicken","\ud83d\udc14",12,8)
B.bwr=new A.hk("Horse","\ud83d\udc0e",46,16)
B.bwY=new A.hk("Pond","\ud83d\udca7",80,56)
B.bwL=new A.hk("Swing set","\ud83c\udfa0",56,40)
B.bwZ=new A.hk("Shed","\ud83d\uded6",50,42)
B.bx3=new A.hk("Dog house","\ud83d\udc15",24,22)
B.tS=new C.bq(B.dWn,[B.bwK,B.bwV,B.bx1,B.bwH,B.bwo,B.bwO,B.bx_,B.bwC,B.bwW,B.bwv,B.bwy,B.bwX,B.bwQ,B.bwI,B.bwT,B.bx0,B.bwE,B.bwt,B.bwN,B.bwp,B.bww,B.bwJ,B.bwq,B.bwB,B.bws,B.bx2,B.bwD,B.bwP,B.bwn,B.bwz,B.bwM,B.bwF,B.bwU,B.bwG,B.bwx,B.bwA,B.bwR,B.bwu,B.bwS,B.bwr,B.bwY,B.bwL,B.bwZ,B.bx3],C.ax("bq<n,hk>"))
B.fC_=new A.J(0,0,-1.2)
B.dVm=new A.d3("Electrical box","The box is ready. Pull a cable to it, then wire a device.",B.fC_,9)
B.dhR=new C.dR([3,B.dVm],C.ax("dR<G,d3>"))
B.aEv={inspect:0,hand:1,screwdriver:2,pliers:3,wrench:4,crimper:5,plunger:6,flapper:7,newoutlet:8,patch:9}
B.Qi=new C.bq(B.aEv,["Look and test","Hand","Screwdriver","Pliers","Wrench","Crimp tool","Plunger","New flapper","New outlet","Drywall patch"],x.l)
B.bA4=new C.a0(63072,"MaterialIcons",!1)
B.dhV=new C.bq(B.aEv,[D.fa,B.akK,R.FF,D.Fv,D.qM,B.bA4,W.a_x,D.pK,B.akb,L.vg],C.ax("bq<n,a0>"))
B.diK=new A.Ho(18,50,0,20)
B.diL=new A.Ho(-4,16,0,24)
B.aDe=new A.a5L(null)
B.fDB=new A.J(16,2.6,0)
B.dV5=new A.d3("Wall drain","The pipe stub that comes out of the wall. The trap arm slides into it.",B.fDB,8)
B.fvp=new A.J(0,3,-6)
B.dV6=new A.d3("Wall","The copper supply pipes come out of the wall here.",B.fvp,24)
B.fBE=new A.J(8.2,1,-7)
B.dV7=new A.d3("Toilet","The tank fills from the cold supply on the wall. The bowl drains into the white pipe in the floor.",B.fBE,7)
B.fuX=new A.J(0,0,40)
B.dV8=new A.d3("The room","A room to build from bare studs to finished, working electrics. The walls hold the cable, the boxes and the devices.",B.fuX,190)
B.fzt=new A.J(-2.4,11.5,-3.6)
B.dV9=new A.d3("Hot faucet inlet","The threaded tail under the faucet where the hot supply hose screws on.",B.fzt,7)
B.fwy=new A.J(-3.6,4,-7.8)
B.dVa=new A.d3("Light switch","Controls the ceiling light. Tap Open lesson to wire one.",B.fwy,4.5)
B.fAw=new A.J(0,0.5,2)
B.dVb=new A.d3("Voltage tester","A tester that glows when it touches live power.",B.fAw,6)
B.dVc=new A.d3("Pipe joint","A crimped joint in the hot water line.",B.aQX,4)
B.fzK=new A.J(0,-0.2,0.2)
B.dVd=new A.d3("Cover plate","The plate covers the box and the edges of the drywall so nobody touches the wires.",B.fzK,8)
B.fCU=new A.J(-4.6,0.5,-3.4)
B.dVe=new A.d3("Hot shut-off valve","The angle stop valve on the hot pipe. Turn the handle to stop the water to the faucet without shutting off the whole house. Hot is always on the left.",B.fCU,8)
B.fBc=new A.J(0,-0.3,3.2)
B.dVf=new A.d3("White wire nut: NEUTRAL","Twist the house white wire and the fixture white wire together under this cap.",B.fBc,6)
B.fAp=new A.J(4.6,0.5,-3.4)
B.dVg=new A.d3("Cold shut-off valve","The angle stop valve on the cold pipe. Cold is always on the right.",B.fAp,8)
B.fwc=new A.J(2.4,11.5,-3.6)
B.dVh=new A.d3("Cold faucet inlet","The threaded tail under the faucet where the cold supply hose screws on.",B.fwc,7)
B.fEf=new A.J(0.8,-0.8,1.2)
B.dVi=new A.d3("Black wire to the light","This black wire carries power to the light once the switch is on. It goes on the other brass screw.",B.fEf,7)
B.fzr=new A.J(10.05,5.2,-7.5)
B.dVj=new A.d3("Water heater breaker","A big circuit for the water heater. It is ON.",B.fzr,3.5)
B.aQs=new A.J(0,40,0)
B.dVk=new A.d3("Back wall",y.s,B.aQs,140)
B.fBy=new A.J(3,3.8,-7.4)
B.dVl=new A.d3("Kitchen faucet","Hot on the left, cold on the right. Tap Open lesson to connect the supply hoses.",B.fBy,4.5)
B.Tq=new A.J(0,6,0)
B.dVn=new A.d3("Tailpiece","The straight pipe that hangs from the sink drain. Its bottom end is smooth so the slip nut can slide on and grip it.",B.Tq,10)
B.fCJ=new A.J(-60,40,50)
B.dVo=new A.d3("Left wall",y.s,B.fCJ,140)
B.fwP=new A.J(3,1,0)
B.dVp=new A.d3("P-trap","The U-shaped bend. It always keeps a little water inside, and that water plug blocks sewer gas from coming back up into the house.",B.fwP,11)
B.fvb=new A.J(0,20,5)
B.dVq=new A.d3("The room","A bare room with the water supply stubs and the drain stub already in the wall and floor.",B.fvb,120)
B.fvG=new A.J(0,-8,0)
B.dVr=new A.d3("Cabinet","The cabinet under the sink where the drain is built.",B.fvG,22)
B.fuV=new A.J(0,0,150)
B.dVs=new A.d3("Lawn","The grass. Walls, floors and the sky stay as they are, but you can add things to the garden with the Furniture button.",B.fuV,400)
B.fvx=new A.J(0,4,-8)
B.dVt=new A.d3("Wall framing","2x4 studs 16 inches apart. Pipes and cables run through holes drilled in the middle of the studs, never along the edge where a nail could hit them.",B.fvx,18)
B.aR6=new A.J(0,-0.2,5.1)
B.dVu=new A.d3("TEST and RESET buttons","Press TEST to make the GFCI trip. Press RESET to turn it back on. Test it once a month.",B.aR6,5)
B.fv0=new A.J(0,11,0)
B.dVv=new A.d3("Sink","The sink bowl and the counter. The drain flange at the bottom is where the tailpiece starts.",B.fv0,16)
B.hb=new A.J(0,0,0)
B.dVw=new A.d3("Drywall","The wall surface. A hole is cut in it for the electrical box.",B.hb,22)
B.fxu=new A.J(60,40,50)
B.dVx=new A.d3("Right wall",y.s,B.fxu,140)
B.fv5=new A.J(0,14,-3)
B.dVy=new A.d3("Counter and sink","The faucet is mounted through a hole in the counter.",B.fv5,20)
B.fyF=new A.J(0,-1.9,5)
B.dVz=new A.d3("GREEN screw: GROUND","The green screw is for the bare copper ground wire.",B.fyF,5)
B.fvw=new A.J(0,47,-2)
B.dVA=new A.d3("Top and bottom plate","The horizontal 2x4s at the top and the bottom of the wall. The studs stand between them.",B.fvw,70)
B.fuY=new A.J(0,0,-8)
B.dVB=new A.d3("Wall","Behind the wall the drain pipe goes down to the sewer line.",B.fuY,22)
B.fv9=new A.J(0,19,-3)
B.dVC=new A.d3("Faucet","The faucet with hot on the left (red) and cold on the right (blue).",B.fv9,14)
B.fxK=new A.J(3.5,2,-7.2)
B.dVD=new A.d3("Kitchen counter and cabinet","The cabinet under the sink is where the drain and the shut-off valves live.",B.fxK,9)
B.fyV=new A.J(10.05,5.7,-7.5)
B.dVE=new A.d3("Kitchen breaker","Protects the kitchen outlets. It is ON.",B.fyV,3.5)
B.fzz=new A.J(4,6,-2.5)
B.dVF=new A.d3("Cold supply hose","A braided steel hose with a rubber liner and a blue band.",B.fzz,9)
B.fAu=new A.J(-1,0.6,4.3)
B.dVG=new A.d3("SILVER screw: NEUTRAL side",y.o,B.fAu,5)
B.a7H=new A.J(0,3.7,0)
B.dVH=new A.d3("Slip nut","A big plastic nut. Slide it on the pipe first, then the washer, then join the pieces and hand tighten. A rubber washer inside makes the seal.",B.a7H,7)
B.Tr=new A.J(0,-1,-0.6)
B.dVI=new A.d3("Wire nut","A twist-on cap that joins wires safely. The two white wires are joined here because a switch only cuts the hot wire.",B.Tr,5)
B.fzE=new A.J(-1.5,-0.3,3.2)
B.dVJ=new A.d3("Black wire nut: HOT","Twist the house black wire and the fixture black wire together under this cap.",B.fzE,6)
B.fyU=new A.J(-1.9,0,-2)
B.dVK=new A.d3("Wood stud","The 2x4 frame inside the wall. The electrical box is nailed or screwed to a stud so it cannot move.",B.fyU,16)
B.fBZ=new A.J(-1,-0.8,4.3)
B.dVL=new A.d3("SILVER screw: NEUTRAL side",y.o,B.fBZ,5)
B.fDR=new A.J(6,3,-7.8)
B.dVM=new A.d3("Water and drain pipes","Red is hot water, blue is cold water (PEX tubing). The white pipes are drains. They slope down so the waste flows away.",B.fDR,14)
B.fC1=new A.J(1,0.6,4.3)
B.dVN=new A.d3("BRASS screw: HOT side",y.u,B.fC1,5)
B.fCk=new A.J(0,-0.2,4.9)
B.dVO=new A.d3("Mounting strap (yoke)","The metal strap with two screw slots. Long screws through the ears hold the device in the box.",B.fCk,7)
B.fEc=new A.J(9.55,4.7,-7.5)
B.dVP=new A.d3("Spare breaker","A spare circuit.",B.fEc,3.5)
B.fvc=new A.J(0,20,8)
B.dVQ=new A.d3("Vanity and counter","The cabinet that holds the sink. The pipes live inside it.",B.fvc,70)
B.fDl=new A.J(-3.2,1.3,-7.8)
B.dVR=new A.d3("Living room outlet","A standard outlet. Tap Open lesson to wire one in 3D.",B.fDl,4.5)
B.fCm=new A.J(1.5,-0.3,3.2)
B.dVS=new A.d3("Green ground connection","Join the bare copper house ground wire to the green fixture ground wire.",B.fCm,6)
B.fyK=new A.J(12,2.6,0)
B.dVT=new A.d3("Trap arm","The pipe that carries the waste water from the trap into the wall. It must slope down toward the wall, about 1/4 inch per foot.",B.fyK,9)
B.fAc=new A.J(0,6.5,-7.8)
B.dVU=new A.d3("Electrical cables","Cables run from the breaker panel to every outlet, switch and light. Yellow is 12 gauge for 20 amps. White is 14 gauge for 15 amps.",B.fAc,16)
B.fAJ=new A.J(11.2,2.3,-6)
B.dVV=new A.d3("Water heater","Heats the water. The cold line goes in at the top and the hot line comes out at the top.",B.fAJ,9)
B.fBf=new A.J(9.55,5.2,-7.5)
B.dVW=new A.d3("Bathroom breaker","Protects the bathroom. It is ON.",B.fBf,3.5)
B.fz_=new A.J(5.2,3.9,-7.8)
B.dVX=new A.d3("Kitchen GFCI outlet","Outlets near water must be GFCI. Tap Open lesson to wire one.",B.fz_,4.5)
B.fvt=new A.J(0,40,-3)
B.dVY=new A.d3("Electrical cable","Yellow 12/2 cable with ground: it carries power from the breaker panel through the holes in the studs to each box.",B.fvt,80)
B.fzp=new A.J(-8.4,1.2,-6.4)
B.dVZ=new A.d3("Sofa","Just furniture, to show the size of the room.",B.fzp,10)
B.dW_=new A.d3("Outlet face","Two outlets. The short slot is hot, the long slot is neutral, and the round hole is ground.",B.aR6,6)
B.fyq=new A.J(0,4,-7.8)
B.dW0=new A.d3("Wall","The drywall of the back wall.",B.fyq,16)
B.fDn=new A.J(0,0,0.6)
B.dW1=new A.d3("Canopy","The round cover that hides the box and the wire connections against the ceiling.",B.fDn,8)
B.dW2=new A.d3("Concrete slab","The foundation. It carries the whole weight of the house. Plumbing drains are placed before it is poured.",B.hb,30)
B.fvq=new A.J(0,40,12)
B.dW3=new A.d3("Front door","Tap the door to go inside the house.",B.fvq,260)
B.a7J=new A.J(8.9,2.6,0)
B.dW4=new A.d3("Slip nut","Hand tighten it, then about a quarter turn with pliers. Over-tightening cracks the plastic.",B.a7J,7)
B.fBe=new A.J(1,-0.8,4.3)
B.dW5=new A.d3("BRASS screw: HOT side",y.u,B.fBe,5)
B.fye=new A.J(0.6,1.5,-1.8)
B.dW6=new A.d3("Cable to the light (LOAD)","This cable carries the switched power on to the light. The black wire here only has power when the switch is on.",B.fye,8)
B.fyz=new A.J(9.8,5,-7.5)
B.dW7=new A.d3("Breaker panel","The main electrical panel. Each breaker protects one circuit. A breaker that is in the middle position has TRIPPED. Flip it fully OFF and then ON to reset.",B.fyz,6)
B.fzC=new A.J(-4,6,-2.5)
B.dW8=new A.d3("Hot supply hose","A braided steel hose with a rubber liner and a red band. Hand tighten the nuts, then a quarter turn with a wrench.",B.fzC,9)
B.bG6=new C.ae(D.ee,18,D.bc,null,null,null)
B.e29=new C.C(D.fx,B.bG6,null)
B.e2b=new C.C(D.fx,G.amg,null)
B.e8_=new A.a8e(null,null)
B.bhT=new C.w(1,0.8392156862745098,0.9019607843137255,0.9176470588235294,D.t)
B.e9r=new C.z(B.bhT,B.VL)
B.e9K=new C.z(B.wG,B.hb)
B.eb0=new C.z(64,2.4)
B.ecx=new C.z("LOAD (taped)",D.da)
B.ef7=new C.z(63,-2.4)
B.efR=new C.z(51,B.abo)
B.b6f=new C.w(1,0.9137254901960784,0.8705882352941177,0.7607843137254902,D.t)
B.eil=new C.z(B.b6f,B.Al)
B.b4D=new C.w(1,0.7647058823529411,0.8117647058823529,0.9019607843137255,D.t)
B.ekN=new C.z(B.b4D,B.ael)
B.bcU=new C.w(1,0.3568627450980392,0.39215686274509803,0.4392156862745098,D.t)
B.emm=new C.z("SILVER \xb7 NEUTRAL",B.bcU)
B.fDw=new A.J(-1.5,0,0)
B.emv=new C.z(B.Kd,B.fDw)
B.b5p=new C.w(1,0.8196078431372549,0.29411764705882354,0.22745098039215686,D.t)
B.eo_=new C.z(52,B.b5p)
B.b9Q=new C.w(1,0.12156862745098039,0.47843137254901963,0.22745098039215686,D.t)
B.eoS=new C.z("GREEN \xb7 GROUND",B.b9Q)
B.bgV=new C.w(1,0.9450980392156862,0.9098039215686274,0.8235294117647058,D.t)
B.epx=new C.z(B.bgV,B.Al)
B.epO=new C.z("main","Main water valve")
B.adI=new C.w(1,0.1843137254901961,0.6352941176470588,0.30980392156862746,D.t)
B.fEg=new A.J(1.5,0,0)
B.et_=new C.z(B.adI,B.fEg)
B.b6M=new C.w(1,0.9529411764705882,0.9411764705882353,0.9098039215686274,D.t)
B.bcr=new C.w(1,0.4823529411764706,0.5294117647058824,0.5803921568627451,D.t)
B.etC=new C.z(B.b6M,B.bcr)
B.eus=new C.z(B.Ew,B.abn)
B.b6s=new C.w(1,0.6039215686274509,0.4196078431372549,0.047058823529411764,D.t)
B.eva=new C.z("BRASS \xb7 HOT",B.b6s)
B.evD=new C.z(53,B.adI)
B.ewg=new C.bv(61,-4.6,B.rY)
B.ey_=new C.bv(62,4.6,B.nx)
B.ezF=new C.cL([0,17.1,16.4,5.8])
B.ezI=new C.cL([0,-0.1,16.4,4.2])
B.eAJ=new C.cL([15.6,9,14.8,22])
B.eAN=new C.cL([-15.6,9,14.8,22])
B.eHm=new C.at(126,84)
B.eR4=new C.F(!0,D.c,null,null,null,null,13.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.eTg=new C.F(!0,D.aI,null,null,null,null,12.5,D.u,null,2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.eTQ=new C.F(!0,D.c,null,null,null,null,12.5,D.O,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.aNN=new C.F(!0,D.ad,null,null,null,null,12,D.O,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.a6G=new C.F(!0,D.ad,null,null,null,null,null,null,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.eWx=new C.F(!0,null,null,null,null,null,9,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.Is=new C.F(!0,D.aI,null,null,null,null,12.5,D.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.eX2=new C.F(!0,D.c,null,null,null,null,11.5,D.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.eXk=new C.F(!0,D.bJ,null,null,null,null,13,D.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.eYv=new C.F(!0,D.fh,null,null,null,null,11.5,D.O,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.eYA=new C.F(!0,D.ey,null,null,null,null,14,D.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.eZF=new C.F(!0,D.aR,null,null,null,null,12,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.f35=new C.F(!0,D.c,null,null,null,null,13.5,D.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.f3f=new C.F(!0,D.aR,null,null,null,null,11.5,null,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.f3M=new C.F(!0,D.b1,null,null,null,null,14.5,D.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.eRi=new C.F(!0,D.w,null,null,null,null,12,D.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.f4X=new C.x("Open the 3D lesson",null,B.eRi,null,null,null,null,null,null,null,null,null)
B.f5M=new C.x("Tip: pick a part, then tap its glowing spot. Joints on hoses, bolts and the drain are only loose: pick the Wrench and tap them. Use your Hand on the main water valve: turn the water OFF before you cut into a pipe, and ON to test for leaks.",null,E.a6y,null,null,null,null,null,null,null,null,null)
B.f6T=new C.x("You used all three lives. Electricity does not give second chances, so in real life you turn the breaker OFF and test the wires every single time. Try the job again.",null,D.zg,null,null,null,null,null,null,null,null,null)
B.f79=new C.x("A different house",null,null,null,null,null,null,null,null,null,null,null)
B.f7U=new C.x("Play the tour",null,null,null,null,null,null,null,null,null,null,null)
B.f80=new C.x("Start this job again",null,null,null,null,null,null,null,null,null,null,null)
B.faJ=new C.x("Start from a bare house (wire everything)",null,null,null,null,null,null,null,null,null,null,null)
B.fcR=new C.x("The customer says\u2026",null,D.du,null,null,null,null,null,null,null,null,null)
B.fdz=new C.x("What the house needs",null,D.du,null,null,null,null,null,null,null,null,null)
B.fdK=new C.x("Next job",null,null,null,null,null,null,null,null,null,null,null)
B.eSI=new C.F(!0,D.w,null,null,null,null,14,D.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fdS=new C.x("Go in",null,B.eSI,null,null,null,null,null,null,null,null,null)
B.f0u=new C.F(!0,D.aI,null,null,null,null,22,D.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fdW=new C.x("My House",null,B.f0u,null,D.L,null,null,null,null,null,null,null)
B.fe2=new C.x("New job",null,null,null,null,null,null,null,null,null,null,null)
B.aO7=new C.F(!0,D.cr,null,null,null,null,null,D.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fe9=new C.x("Job over",null,B.aO7,null,null,null,null,null,null,null,null,null)
B.fep=new C.x("Three shocks. In real life you switch the breaker off and test the wires, every time. Try another call.",null,D.zg,null,null,null,null,null,null,null,null,null)
B.fev=new C.x("Learn the trades",null,Q.vZ,null,null,null,null,null,null,null,null,null)
B.ff3=new C.x("Practice mode: no hints. You will only hear from me when something is wrong.",null,P.SK,null,null,null,null,null,null,null,null,null)
B.ffg=new C.x("New call",null,null,null,null,null,null,null,null,null,null,null)
B.ffl=new C.x("Job done! \ud83c\udf89",null,I.SO,null,null,null,null,null,null,null,null,null)
B.fgt=new C.x("Next call",null,null,null,null,null,null,null,null,null,null,null)
B.fgR=new C.x("Plug in",null,D.du,null,null,null,null,null,null,null,null,null)
B.fhg=new C.x("Look around",null,null,null,null,null,null,null,null,null,null,null)
B.fhO=new C.x("The customer wants:",null,D.a6Q,null,null,null,null,null,null,null,null,null)
B.fhY=new C.x('Tip: pick "Look and test" and tap things to find out what is wrong. Then pick the right tool. Turn the breaker off (hand) before you touch any wire.',null,E.a6y,null,null,null,null,null,null,null,null,null)
B.fkj=new C.x("5 bedrooms, 3 bathrooms and a garden. Walk in, look all round, fix what is wrong.",null,V.Sv,null,D.L,null,null,null,null,null,null,null)
B.fko=new C.x("Call over",null,B.aO7,null,null,null,null,null,null,null,null,null)
B.fkv=new C.x("\u23cf Unplug",null,H.zd,null,null,null,null,null,null,null,null,null)
B.fkO=new C.x("A different call",null,null,null,null,null,null,null,null,null,null,null)
B.flC=new C.x("Job complete! \ud83c\udf89",null,I.SO,null,null,null,null,null,null,null,null,null)
B.fmw=new C.x("House tour \ud83c\udfac",null,D.du,null,null,null,null,null,null,null,null,null)
B.fmF=new C.x("All fixed! \ud83c\udf89",null,I.SO,null,null,null,null,null,null,null,null,null)
B.aPy=new C.x("Stay",null,null,null,null,null,null,null,null,null,null,null)
B.aPA=new C.x("A different job",null,null,null,null,null,null,null,null,null,null,null)
B.foJ=new C.x("It goes on the back wall, not wired yet. Tap the red one to wire it yourself.",null,P.SB,null,null,null,null,null,null,null,null,null)
B.fqw=new C.x("The job",null,D.du,null,null,null,null,null,null,null,null,null)
B.fqW=new C.x("A little person walks through the whole house: the living room, the kitchen (a drink from the fridge), the hall, the bedrooms and the bathrooms. Every TV is switched on first. Choose how long it takes.",null,D.ST,null,null,null,null,null,null,null,null,null)
B.frl=new C.x("Stay in the room",null,null,null,null,null,null,null,null,null,null,null)
B.fuR=new A.J(3.6,2.6,0.6)
B.fuT=new A.J(0,56,0.9)
B.a7D=new A.J(0,0,1)
B.fuW=new A.J(0,0,3)
B.a7E=new A.J(0,0,4)
B.Tn=new A.J(0,0,-1)
B.aQm=new A.J(0,0,-60)
B.aQn=new A.J(0,10,0)
B.fuZ=new A.J(0,115,3)
B.fv_=new A.J(0,115,-63)
B.fv1=new A.J(0,128,-30)
B.fv2=new A.J(0,12,0)
B.fv3=new A.J(0,13,0)
B.To=new A.J(0,14,0)
B.fv4=new A.J(0,14,2)
B.fv6=new A.J(0,150,8)
B.fv7=new A.J(0,16,0)
B.aQo=new A.J(0,17,0)
B.fv8=new A.J(0,19,14)
B.lT=new A.J(0,1,0)
B.fva=new A.J(0,20,0)
B.fvd=new A.J(0,20,-6)
B.fve=new A.J(0,22,-11)
B.fvf=new A.J(0,22,-12)
B.fvg=new A.J(0,22,-39)
B.fvh=new A.J(0,23,0)
B.fvi=new A.J(0,24,0)
B.aQp=new A.J(0,28,0)
B.fvj=new A.J(0,28,-8)
B.fvk=new A.J(0,2,14)
B.aQq=new A.J(0,30,0)
B.fvl=new A.J(0,31,-6)
B.aQr=new A.J(0,34,0)
B.fvm=new A.J(0,36,0)
B.fvn=new A.J(0,3,0)
B.fvo=new A.J(0,3,-30)
B.fvr=new A.J(0,40,150)
B.fvs=new A.J(0,40,40)
B.fvu=new A.J(0,40,-6)
B.fvv=new A.J(0,46,0)
B.aQt=new A.J(0,48,0)
B.Tp=new A.J(0,4,-2)
B.fvy=new A.J(0,50,-30)
B.fvz=new A.J(0,52,0)
B.fvA=new A.J(0,55,0)
B.fvB=new A.J(0,58,0)
B.fvC=new A.J(0,5,4)
B.fvD=new A.J(0,7,0)
B.IT=new A.J(0,8,0)
B.fvE=new A.J(0,94,13)
B.aQu=new A.J(0,9,0)
B.aQv=new A.J(0,9,-3)
B.a7F=new A.J(0,-4,28)
B.fvF=new A.J(0,-4,-20)
B.fvI=new A.J(10,12,10)
B.fvJ=new A.J(10,8,10)
B.fvK=new A.J(11,1,11)
B.fvL=new A.J(120,0,-30)
B.fvM=new A.J(13,0,0)
B.fvN=new A.J(13,15,2)
B.fvO=new A.J(13,28,3)
B.fvP=new A.J(0,0.52,2.35)
B.fvQ=new A.J(14,17,4)
B.fvR=new A.J(14,20,-28)
B.fvS=new A.J(14,36,14)
B.fvU=new A.J(16,10,10)
B.fvV=new A.J(16,16,16)
B.fvW=new A.J(17,3,17)
B.fvX=new A.J(18,18,14)
B.fvY=new A.J(18,22,2)
B.fvZ=new A.J(18,28,16)
B.fw_=new A.J(18,2,18)
B.fw0=new A.J(18,6,0)
B.fw1=new A.J(18,9,11)
B.fw2=new A.J(19,13,7)
B.fw3=new A.J(70,0.6,50)
B.fw4=new A.J(0,3,-6.5)
B.fw5=new A.J(-4,20.4,0)
B.fw6=new A.J(1,1,0.64)
B.fw7=new A.J(-4.6,1.5,-3.6)
B.fw8=new A.J(0,-13.5,-1.5)
B.fw9=new A.J(4,10,3.5)
B.wa=new A.J(1,0,0)
B.fwa=new A.J(1,26,14)
B.fwb=new A.J(1,28,14)
B.aQw=new A.J(1,3,6)
B.fwd=new A.J(1,0.9,0.06)
B.fwf=new A.J(1.6,15,1.6)
B.aQx=new A.J(20,14,7)
B.fwg=new A.J(20,30,26)
B.fwh=new A.J(20,4,26)
B.fwi=new A.J(20,92,26)
B.fwj=new A.J(22,14,0)
B.fwk=new A.J(22,14,2)
B.fwl=new A.J(22,2,28)
B.fwm=new A.J(22,3,10)
B.fwn=new A.J(240,100,60)
B.fwo=new A.J(244,6,64)
B.fwp=new A.J(24,14,22)
B.fwq=new A.J(24,38,0)
B.aQy=new A.J(24,6,14)
B.fwr=new A.J(262,3,5)
B.fws=new A.J(262,3,56)
B.aQz=new A.J(26,4,22)
B.fwt=new A.J(26,72,26)
B.fwu=new A.J(26,-34,96)
B.fww=new A.J(-0.1,0,0)
B.fwx=new A.J(2,13,2)
B.aQA=new A.J(2,23,12)
B.aQB=new A.J(2,28,22)
B.fwz=new A.J(64,10,-1.4)
B.fwA=new A.J(19.6,0,-1.5)
B.aQC=new A.J(0,56,1.3)
B.fwB=new A.J(0,15.5,0)
B.fwC=new A.J(30,16,30)
B.aQD=new A.J(30,16,72)
B.fwD=new A.J(30,24,8)
B.fwE=new A.J(30,28,18)
B.fwG=new A.J(32,2,20)
B.fwH=new A.J(33,11,10)
B.fwI=new A.J(34,30,1)
B.fwJ=new A.J(-1,-1.7,2.3)
B.fwK=new A.J(36,30,1)
B.fwL=new A.J(36,60,12)
B.fwM=new A.J(37,16,0)
B.fwN=new A.J(-0.2,-0.3,-0.4)
B.fwO=new A.J(0,48.6,55)
B.aQE=new A.J(3,12,12)
B.fwQ=new A.J(3,22,2)
B.fwR=new A.J(3,26,3)
B.a7G=new A.J(3,3,3)
B.fwS=new A.J(3,5,3)
B.fwU=new A.J(40,1,14)
B.fwV=new A.J(40,28,1)
B.fwW=new A.J(40,2,24)
B.fwX=new A.J(40,30,26)
B.fwY=new A.J(42,2,28)
B.fwZ=new A.J(44,10,2)
B.aQG=new A.J(44,2,14)
B.fx_=new A.J(44,72,20)
B.fx0=new A.J(0.9,0,4.4)
B.fx1=new A.J(8.2,1.9,-7.55)
B.fx2=new A.J(-120.1,100,-60)
B.fx3=new A.J(46,10,34)
B.fx4=new A.J(46,26,2)
B.fx5=new A.J(48,2,24)
B.fx6=new A.J(0,-47.25,-2.25)
B.fx7=new A.J(0.6,68,0.4)
B.fx8=new A.J(0,1.59,0.14)
B.fx9=new A.J(0,-3.4,1)
B.fxa=new A.J(25,79,1.4)
B.fxb=new A.J(1,0,-1.2)
B.fxc=new A.J(50,28,42)
B.fxd=new A.J(50,4,28)
B.fxe=new A.J(54,5,18)
B.fxf=new A.J(56,18,18)
B.fxg=new A.J(56,2,36)
B.fxh=new A.J(56,3,32)
B.fxi=new A.J(56,3,48)
B.fxj=new A.J(58,9,74)
B.fxk=new A.J(0,-0.8,0.9)
B.fxl=new A.J(11.9,0,-8)
B.aQH=new A.J(1.6,1.6,0.4)
B.fxn=new A.J(0.16,0.32,0.07)
B.aQI=new A.J(5,12,26)
B.fxo=new A.J(5,1,2)
B.fxp=new A.J(5,6,3)
B.fxq=new A.J(5,9,8)
B.fxr=new A.J(0,14.3,-1.5)
B.aQJ=new A.J(-13,8.6,-9.5)
B.fxs=new A.J(60,12,80)
B.fxt=new A.J(60,30,3)
B.fxv=new A.J(62,18,20)
B.fxw=new A.J(62,22,6)
B.fxx=new A.J(64,10,0)
B.aQK=new A.J(6,14,20)
B.aQL=new A.J(6,14,32)
B.fxA=new A.J(6,4,4)
B.fxC=new A.J(0,-0.2,0.14)
B.fxE=new A.J(0.3,38,2)
B.fxF=new A.J(70,125,-45)
B.fxG=new A.J(70,144,-45)
B.fxH=new A.J(72,-17,70)
B.fxI=new A.J(12,5,0.4)
B.fxJ=new A.J(1.6,1.7,3.6)
B.fxL=new A.J(-72.8,0,55)
B.fxN=new A.J(25,79,0.2)
B.fxO=new A.J(7,0,-8)
B.fxP=new A.J(7,2,7)
B.aQM=new A.J(7,3,0)
B.fxQ=new A.J(7,8,3)
B.fxS=new A.J(0,11,9.2)
B.fxT=new A.J(-3.2,1.3,-7.82)
B.fxU=new A.J(80,16,32)
B.fxV=new A.J(80,26,8)
B.aQN=new A.J(147,1.5,3.5)
B.fxW=new A.J(82,46,3)
B.aQO=new A.J(-6.5,6.9,-3)
B.fxX=new A.J(84,10,38)
B.fxY=new A.J(0.93,0.92,1)
B.fxZ=new A.J(0,-48.6,55)
B.fy_=new A.J(5.5,8.5,3)
B.fy0=new A.J(120.1,100,0)
B.fy1=new A.J(0,0,0.26)
B.fy2=new A.J(8,2,6)
B.aQP=new A.J(8,2,8)
B.fy3=new A.J(8,4,4)
B.fy4=new A.J(8,9,8)
B.fy5=new A.J(15,19,0.5)
B.fy6=new A.J(0.4,0.38,0.12)
B.fy7=new A.J(0,0,-0.43)
B.aQQ=new A.J(11.2,4.5,-6)
B.aQR=new A.J(1.2,96,112)
B.aQS=new A.J(0.08,3.8,2.4)
B.aQT=new A.J(9,1,9)
B.fy8=new A.J(9,40,4)
B.fy9=new A.J(9,5,9)
B.fya=new A.J(1.5,1.3,0.6)
B.fyc=new A.J(0,-1.78,0.27)
B.fyd=new A.J(0,0.62,0)
B.fyg=new A.J(20,11.5,0)
B.fyh=new A.J(3.2,0.12,-6.7)
B.fyi=new A.J(12,0,-8.1)
B.fyk=new A.J(1.25,0.28,0.1)
B.fyl=new A.J(0,36,10.2)
B.fym=new A.J(24,0.08,16)
B.fyo=new A.J(0,4,-7.9)
B.fyp=new A.J(11.9,0,8)
B.fyr=new A.J(21,1.4,8)
B.fys=new A.J(1.4,1,1)
B.fyu=new A.J(71.2,46.6,55)
B.fyv=new A.J(3,3.28,-7.2)
B.fyw=new A.J(1.4,0.3,1)
B.fyx=new A.J(-6.1,1.2,-6.4)
B.fyy=new A.J(1.4,26,0.4)
B.fyA=new A.J(2.8,3.4,2.4)
B.fyB=new A.J(26,0.3,130)
B.fyC=new A.J(0,-45.5,0.5)
B.fyD=new A.J(1.8,4,1)
B.fyE=new A.J(5,1.6,0.5)
B.fyG=new A.J(0.1,-2,2.4)
B.fyH=new A.J(120,0.6,44)
B.fyI=new A.J(0,0.2,2.8)
B.fyJ=new A.J(6,10,1.4)
B.fyL=new A.J(43,23,0.3)
B.fyM=new A.J(0,-1.2,4.7)
B.fyN=new A.J(120.1,124,-30)
B.fyO=new A.J(18.9,2.6,0)
B.fyP=new A.J(-12,0,-8.1)
B.fyQ=new A.J(11.8,4,0)
B.fyR=new A.J(0.97,0.18,2.25)
B.aQU=new A.J(-71.7,6,55)
B.fyT=new A.J(5.6,0.3,1.9)
B.fyW=new A.J(52,8,0.4)
B.fyX=new A.J(4.6,7.6,3)
B.fyY=new A.J(-1,0,-1.2)
B.fyZ=new A.J(0,1.7,0)
B.fz0=new A.J(-1,0,1.5)
B.fz1=new A.J(5,8,0.4)
B.fz2=new A.J(5,2.2,0.8)
B.fz3=new A.J(0.18,0.12,0.08)
B.fz4=new A.J(147,3,1.4)
B.fz5=new A.J(4,16.2,0)
B.fz6=new A.J(10,15,0.5)
B.fz7=new A.J(144,5,0.7)
B.fz8=new A.J(0,34,1.1)
B.fz9=new A.J(1.2,-1.7,2.3)
B.fzb=new A.J(0.82,1.7,0.3)
B.fzc=new A.J(47,7,34.4)
B.fzd=new A.J(-0.12,0,0)
B.fzf=new A.J(3.5,94,0.2)
B.fzg=new A.J(1.1,2.05,0.04)
B.fzh=new A.J(25,79,1.2)
B.fzi=new A.J(1.12,0.78,0.76)
B.fzj=new A.J(10,14,0.5)
B.fzk=new A.J(5,8,0.5)
B.fzl=new A.J(1.1,0.5,0.7)
B.fzm=new A.J(-20,11.5,0)
B.fzn=new A.J(0,-0.5,0.6)
B.fzo=new A.J(0,1.4,0)
B.fzq=new A.J(0,3.4,0.8)
B.fzs=new A.J(-0.85,4,-3.2)
B.fzu=new A.J(40,7.2,1.2)
B.aQV=new A.J(0.42,0.34,0.12)
B.fzv=new A.J(1.7,0.08,1.2)
B.fzw=new A.J(0,0,0.38)
B.fzy=new A.J(5.2,3.9,-7.76)
B.fzA=new A.J(2.6,0.45,0.5)
B.fzB=new A.J(0.07,0.3,0.03)
B.fzD=new A.J(41.5,11,12)
B.fzF=new A.J(20,1.4,8)
B.fzG=new A.J(0,-0.2,0.19)
B.fzI=new A.J(1.2,49,36)
B.fzJ=new A.J(0,9.3,0)
B.fzL=new A.J(0,40,0.95)
B.fzN=new A.J(0,-1.9,-1.2)
B.fzO=new A.J(-3.2,1.15,-7.78)
B.fzP=new A.J(0,-3.4,1.2)
B.fzQ=new A.J(64,10,0.2)
B.fzR=new A.J(0,-1.78,0.53)
B.aQW=new A.J(-6.5,7.4,-3)
B.fzS=new A.J(0,76,1.1)
B.fzT=new A.J(-4.6,-2,1.2)
B.fzV=new A.J(0,40,1.4)
B.fzW=new A.J(-3,36,10.6)
B.fzX=new A.J(0,14.5,-1.5)
B.fzY=new A.J(0,0.2,0)
B.fA_=new A.J(160,1.2,120)
B.fA0=new A.J(7,40,2.4)
B.fA1=new A.J(30,26,0.6)
B.fA2=new A.J(3.4,3.25,-7.85)
B.fA3=new A.J(1.12,0.5,0.62)
B.fA4=new A.J(72.8,0,55)
B.fA5=new A.J(0.5,62,30)
B.fA6=new A.J(2.2,1.1,6.4)
B.fA7=new A.J(3,1.55,-7.1)
B.fA8=new A.J(0.4,3,3)
B.aQZ=new A.J(0,-0.1,0.1)
B.fA9=new A.J(0,0,0.04)
B.fAa=new A.J(2.4,11.6,-3.6)
B.fAb=new A.J(4,11,3.5)
B.fAd=new A.J(5,8.6,-2.25)
B.fAe=new A.J(0,-1.78,0.3)
B.fAf=new A.J(2.2,2.2,1.8)
B.fAg=new A.J(0,1.9,-1.2)
B.fAh=new A.J(0,56,2.1)
B.fAi=new A.J(0.26,0.04,0.02)
B.fAj=new A.J(-2.4,11.6,-3.6)
B.fAk=new A.J(11.25,0,-2.25)
B.fAl=new A.J(1,-1.8,2.4)
B.fAm=new A.J(-11.8,4,0)
B.fAn=new A.J(11.2,4.7,-6)
B.fAo=new A.J(24,8,0.05)
B.fAq=new A.J(0.12,0,0)
B.fAr=new A.J(1.1,1.1,0.03)
B.fAs=new A.J(0,5,1.1)
B.fAt=new A.J(3.4,3.55,-7.85)
B.fAv=new A.J(71.6,-22,62)
B.fAx=new A.J(1,1,0.62)
B.aR_=new A.J(1.5,18,3.5)
B.fAz=new A.J(3.5,3.1,-7.15)
B.fAA=new A.J(0,1.5,-0.9)
B.fAB=new A.J(-0.28,0.55,-0.8)
B.fAC=new A.J(0,-0.2,0.24000000000000002)
B.fAE=new A.J(0,-3.3,4)
B.fAF=new A.J(1,-0.2,0.14)
B.fAG=new A.J(-1.9,0,-2.25)
B.fAH=new A.J(0,-0.9,1.1)
B.fAI=new A.J(8.2,1.05,-6.7)
B.fAL=new A.J(0.07,0.4,0.03)
B.fAM=new A.J(2,3.8,0.08)
B.fAN=new A.J(31,83,0.9)
B.fAO=new A.J(64,40,-3.2)
B.fAP=new A.J(0.95,0.62,2.2)
B.aR0=new A.J(1.4,3,112)
B.fAQ=new A.J(0,46.6,0.8)
B.fAS=new A.J(0,0,-8.8)
B.fAT=new A.J(0,0.7,-1)
B.fAW=new A.J(-11.9,0,8)
B.fAX=new A.J(7,0,1.5)
B.fAY=new A.J(-8.4,0.7,-6.4)
B.fAZ=new A.J(-3.2,1.45,-7.78)
B.fB_=new A.J(0,41,0.45)
B.fB0=new A.J(-6.575,0,-0.25)
B.fB2=new A.J(0,14.6,-1.5)
B.aR2=new A.J(0,0,-2.3)
B.a7I=new A.J(-13,12.5,0)
B.fB4=new A.J(0,0,0.62)
B.fB5=new A.J(0.2,-0.3,-0.4)
B.aR3=new A.J(10.85,18,0.5)
B.fB6=new A.J(0.6,70,0.6)
B.fB7=new A.J(1.4,1.3,0.02)
B.fB8=new A.J(30,1.4,0.4)
B.fB9=new A.J(6.3,1.5,-7.2)
B.fBa=new A.J(0,5,11.2)
B.aR4=new A.J(0,0.62,2.85)
B.aR5=new A.J(0.05,8,16)
B.fBb=new A.J(0,-1.2,5)
B.fBd=new A.J(0.2,-2,2.6)
B.fBg=new A.J(11.2,2.4,-5.18)
B.fBi=new A.J(-1,-0.2,0.14)
B.fBj=new A.J(1.2,1.2,0.3)
B.aR7=new A.J(2,0.08,2.4)
B.fBl=new A.J(9.5,13.5,1.4)
B.fBm=new A.J(2.2,18,2.2)
B.fBn=new A.J(22,0.2,0.8)
B.fBo=new A.J(-0.32,0,0.5)
B.fBq=new A.J(1,0.8,0.95)
B.fBr=new A.J(0.8,0.55,0.05)
B.fBs=new A.J(0.14,0.35,17)
B.fBt=new A.J(1.4,2.4,0.3)
B.fBu=new A.J(0,11,8.2)
B.fBv=new A.J(0,24,-0.6)
B.fBw=new A.J(40,1.6,14)
B.fBz=new A.J(0,1.95,0.31)
B.fBA=new A.J(150,1.2,112)
B.aR8=new A.J(0.75,4.5,0.1)
B.fBC=new A.J(0.12,0,0.05)
B.fBD=new A.J(-120.1,124,-30)
B.fBF=new A.J(9,1.2,9)
B.fBG=new A.J(0,-0.5,0)
B.fBJ=new A.J(5.5,8.5,0.5)
B.aR9=new A.J(0.05,8,9.6)
B.fBL=new A.J(-120.1,100,0)
B.fBM=new A.J(1.5,94,3.5)
B.fBN=new A.J(0,8.2,0)
B.fBP=new A.J(4,94,0.4)
B.aRa=new A.J(1.4,8,1)
B.fBQ=new A.J(3.7,1.2,-7.1)
B.fBR=new A.J(8.2,0.05,-6.7)
B.fBS=new A.J(0,-0.3,0)
B.fBT=new A.J(6.575,0,-0.25)
B.aRb=new A.J(0,1.8,0)
B.fBU=new A.J(3,3.21,-7.2)
B.fBW=new A.J(9.8,5,-7.75)
B.fBX=new A.J(1.5,3.5,112)
B.fBY=new A.J(3,1.85,-7.1)
B.a7K=new A.J(13,12.5,0)
B.fC2=new A.J(0.34,0.66,0.9)
B.fC4=new A.J(0.9,1.08,0.98)
B.fC5=new A.J(12,0.4,6)
B.fC6=new A.J(-6.5,7.9,-3)
B.fC7=new A.J(0,13.6,-1.5)
B.fC8=new A.J(1.5,1.5,0.05)
B.fC9=new A.J(-6.5,5,-3)
B.fCa=new A.J(58.4,1.6,50)
B.fCb=new A.J(16,22,0.6)
B.fCc=new A.J(0.02,0.28,0.05)
B.fCd=new A.J(0,0.7,1)
B.aRd=new A.J(13,8.6,9.5)
B.fCe=new A.J(-3.6,4,-7.76)
B.fCf=new A.J(0.82,0.9,0.05)
B.fCg=new A.J(0,-5.5,-0.25)
B.fCh=new A.J(0,11,21.2)
B.fCl=new A.J(0,0.6,0)
B.fCn=new A.J(1.9,0,0)
B.fCo=new A.J(0.45,0.72,0.06)
B.fCq=new A.J(14,0.4,7)
B.fCr=new A.J(64,24,-3.2)
B.fCs=new A.J(0,9.2,0)
B.fCt=new A.J(0,0.03,0)
B.fCu=new A.J(-120,0,-30)
B.fCv=new A.J(-13,15,2)
B.fCw=new A.J(-14,17,4)
B.fCx=new A.J(-14,20,-28)
B.fCy=new A.J(-18,6,0)
B.Ts=new A.J(-1,0,0)
B.fCz=new A.J(-1,0,-8)
B.fCA=new A.J(-20,4,26)
B.fCB=new A.J(-20,92,26)
B.fCC=new A.J(-22,14,0)
B.fCD=new A.J(-24,38,0)
B.fCF=new A.J(-37,16,0)
B.fCG=new A.J(-42,-34,96)
B.fCH=new A.J(0,-0.6,22)
B.fCI=new A.J(-4,20,0)
B.aRe=new A.J(-4,20,8)
B.fCK=new A.J(-72,6,55)
B.fCL=new A.J(-8,42,-5)
B.fCM=new A.J(-8,-28,104)
B.fCN=new A.J(-8,-39,96)
B.fCO=new A.J(0,0.35,0.78)
B.fCP=new A.J(-11.9,0,-8)
B.fCQ=new A.J(38,1.4,12)
B.fCR=new A.J(25,0.5,66)
B.fCS=new A.J(-8.4,1.9,-7.2)
B.fCT=new A.J(0.85,1.15,0.9)
B.fCV=new A.J(25,6,0.2)
B.aRf=new A.J(1.25,1,0.1)
B.fCW=new A.J(11.2,0,-6)
B.fCX=new A.J(1.2,1.1,0.8)
B.fCZ=new A.J(150,49,1.2)
B.fD_=new A.J(41.5,11,-12)
B.fD0=new A.J(62,0.2,42)
B.fD1=new A.J(4.6,1.5,-3.6)
B.fD2=new A.J(0,-0.7,0.8)
B.fD3=new A.J(8.9,1.9,0.9)
B.fD4=new A.J(0,-1.55,-0.6)
B.fD5=new A.J(1.78,4.25,0.08)
B.fD6=new A.J(27,0.6,19)
B.fD7=new A.J(0,5.5,-0.25)
B.fD8=new A.J(28,2.5,26)
B.fD9=new A.J(0,0.7,0)
B.fDa=new A.J(-1.2,-1.6,2.2)
B.fDb=new A.J(11,25,0.3)
B.aRg=new A.J(13,8.6,-9.5)
B.aRh=new A.J(0.05,0.12,0.03)
B.aRi=new A.J(8.2,0.95,-6.7)
B.fDc=new A.J(40,1.2,22)
B.fDd=new A.J(0.7,1.5,-7.2)
B.fDe=new A.J(0,15.3,-3.6)
B.fDf=new A.J(0.1,0,0)
B.fDg=new A.J(0.32,0,0.5)
B.fDh=new A.J(1.1,0.8,0.6)
B.fDj=new A.J(-0.9,0,4.4)
B.fDk=new A.J(-6.5,7.2,-3)
B.fDm=new A.J(6.2,0.18,2.1)
B.fDo=new A.J(14,0.2,1.6)
B.fDp=new A.J(36,1.6,12)
B.fDq=new A.J(15.5,2.6,0)
B.fDs=new A.J(-8,-47.8,70)
B.fDt=new A.J(14,1.5,3.5)
B.aRj=new A.J(17,24,0.3)
B.fDu=new A.J(5.2,3.9,-7.82)
B.fDv=new A.J(0,0.7,2.4)
B.aRk=new A.J(0,0.3,0)
B.aRl=new A.J(2.3,7,0.5)
B.aRm=new A.J(-13,8.6,9.5)
B.fDz=new A.J(0,-1.99,0.14)
B.fDA=new A.J(0.4,36,34)
B.fDC=new A.J(4.6,-2,1.2)
B.aRn=new A.J(0,0,-2.4)
B.fDD=new A.J(0,-1.78,0.52)
B.fDE=new A.J(0.12,0.1,0.03)
B.fDF=new A.J(9.8,5,-7.58)
B.fDG=new A.J(14,1.5,5)
B.aRo=new A.J(0.5,1.4,2)
B.fDH=new A.J(3.5,0.15,-7.2)
B.aRp=new A.J(64,2,1.2)
B.fDI=new A.J(1.2,26.4,20)
B.fDJ=new A.J(-3.6,4,-7.82)
B.fDK=new A.J(0.3,2,36)
B.fDM=new A.J(24,0.8,6.5)
B.fDO=new A.J(22,0.5,5)
B.fDP=new A.J(9,10,0.6)
B.fDQ=new A.J(0,22,2.1)
B.fDT=new A.J(0,56,0.5)
B.fDU=new A.J(150,1.2,70)
B.fDV=new A.J(2.1,0.4,0.5)
B.fDW=new A.J(-19.5,-1,-1.5)
B.fDX=new A.J(80,0.5,60)
B.fDY=new A.J(6.85,4,-3.2)
B.aRr=new A.J(0.12,3,1.9)
B.fDZ=new A.J(0.06,0.62,0.8)
B.fE_=new A.J(0,18.5,0)
B.fE1=new A.J(9.55,5.7,-7.5)
B.fE3=new A.J(0.8,2.4,0.3)
B.aRs=new A.J(0,0.7,2)
B.fE4=new A.J(0.8,1.1,1.2)
B.fE5=new A.J(120.1,100,-60)
B.fE6=new A.J(0,47.25,-2.25)
B.fE7=new A.J(0.5,0.5,0.04)
B.fE8=new A.J(12.5,39,0.6)
B.fE9=new A.J(0,3,0.9)
B.fEa=new A.J(3,36,10.6)
B.fEb=new A.J(25,10,0.2)
B.fEd=new A.J(0.14,8,0.3)
B.fEe=new A.J(1.9,0.05,1.35)
B.fEh=new A.J(0.6,0.12,0.03)
B.fEi=new A.J(-10.7,1.2,-6.4)
B.fEj=new A.J(-71.2,46.6,55)
B.fEk=new A.J(0,3.7,2.6)
B.fES=new A.BL("noGround","It works, but there is no ground wire. Without a ground nothing protects you if an appliance fails.",!0,!1,!1)
B.fET=new A.BL("short","A hot wire touched the ground. That is a short circuit: huge current, sparks and fire. The breaker slams off.",!1,!0,!0)
B.fEU=new A.BL("reversed","Hot and neutral are swapped (reversed polarity). Things still run, but the metal part of a lamp or appliance is live. That can shock someone. Black goes on brass, white on silver.",!0,!1,!1)
B.fEV=new A.BL("dead","The hot wire is not connected to the right place, so nothing gets power. The device is dead.",!1,!1,!1)
B.fEW=new A.BL("ok","Wired correctly. Hot, neutral and ground are all in the right place.",!0,!1,!1)
B.fEX=new A.BL("bonded","The neutral and the ground were joined. A GFCI or the breaker may trip for no reason, and current can flow where it should not.",!0,!0,!1)
B.fEY=new A.BL("openNeutral","The neutral wire is not connected. Nothing runs, but the hot wire is still connected, so the slots can still be live. That is dangerous.",!1,!1,!1)
B.fEZ=new A.BL("dead","The wires are on the taped LOAD screws, so no power reaches the outlet. Power comes in on LINE.",!1,!1,!1)
B.fF_=new A.BL("short","The hot and the neutral were joined together. That is a short circuit: a bang, sparks and a tripped breaker.",!1,!0,!0)
B.eqO=new C.z(-20,46)
B.fHA=new A.Jc(B.eqO,0,2.4,"Having the drink",!0,!1,!1,"")
B.eb_=new C.z(34,62)
B.fHB=new A.Jc(B.eb_,3.141592653589793,2.2,"Picking up the remote",!1,!0,!1,"")
B.fHJ=new A.azc(null)})();(function staticFields(){$.bUL=0
$.aTF=null})();(function lazyInitializers(){var w=a.lazyFinal
w($,"ibJ","hlD",()=>C.a([A.aSn("Wire a standard 120 volt receptacle: black to brass, white to silver, bare copper to green.",B.PK,B.dbl,"outlet",B.cJN,"Wall outlet",new A.fnd()),A.aSn("A single-pole switch breaks the hot wire to the light: two black wires go on the two brass screws.",B.cXk,B.cKo,"switch",B.cIn,"Light switch",new A.fne()),A.aSn("A GFCI protects you near water. Power comes in on LINE. The LOAD screws (covered with tape) feed other outlets.",B.PK,B.cRv,"gfci",B.cZZ,"GFCI outlet",new A.fnf()),A.aSn("Join the house wires to the fixture wires with wire nuts: black to black, white to white, ground to ground.",B.PK,B.cIv,"light",B.dar,"Ceiling light",new A.fng()),A.aSn("A fan hangs from a strong fan-rated box. Join black, white and ground with wire nuts, then fasten the canopy.",B.PK,B.cIw,"fan",B.cPf,"Ceiling fan",new A.fnh())],C.ax("P<a3p>")))
w($,"ibU","Gg",()=>{var v,u=C.a([],x.n)
for(v=0;v<10;++v)u.push(-72+16*v)
return u})})()};
(a=>{a["Vp//CSh0fkv4Dx20pUOIIf8fOUI="]=a.current})($__dart_deferred_initializers__);