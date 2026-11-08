((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,C,D,A5,G,A6,O,H,A7,A8,P,A9,Aa,Ab,K,Q,A0,Ac,T,Ad,U,A1,Ae,V,W,Af,X,Y,A2,Z,A3,Ag,L,R,A={eUJ:function eUJ(d,e){this.a=d
this.b=e},a9u:function a9u(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.at=g
_.CW=h
_.a=i
_.$ti=j},adY:function adY(d,e){var _=this
_.d=null
_.e=$
_.G2$=d
_.c=_.a=null
_.$ti=e},boc:function boc(d){this.a=d},aMX:function aMX(){},
o_(d,e,f){var w=d.a,v=d.b,u=d.c
return new A.r(w+(e.a-w)*f,v+(e.b-v)*f,u+(e.c-u)*f)},
vs(d,e){var w=Math.cos(e),v=Math.sin(e),u=d.a,t=d.c
return new A.r(u*w+t*v,d.b,-u*v+t*w)},
o8(d,e,f,g){var w,v,u,t,s,r,q,p,o=new A.fTc(Math.cos(e),Math.sin(e)),n=new A.fTa(f),m=new A.fTb(n,e,o,g),l=new A.fT9(n,e,o),k=C.a([],x.z)
for(w=d.length,v=x.o,u=0;u<d.length;d.length===w||(0,C.M)(d),++u){t=d[u]
s=C.a([],v)
for(r=t.a,q=r.length,p=0;p<r.length;r.length===q||(0,C.M)(r),++p)s.push(m.$1(r[p]))
k.push(new A.lP(s,l.$1(t.b),t.c,t.d,t.e,t.f,t.r,t.w,t.x,t.y,t.z))}return k},
GY(d,e,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
if(d.length<3)return d
w=C.a([D.d.gI(d)],x.o)
for(v=1;u=v+1,u<d.length;v=u){t=d[v-1]
s=d[v]
r=d[u]
q=s.a
p=s.b
o=s.c
n=new A.r(q-t.a,p-t.b,o-t.c)
m=new A.r(r.a-q,r.b-p,r.c-o)
l=Math.min(e,n.guN()*0.5)
k=Math.min(e,m.guN()*0.5)
j=n.goT(0)
i=new A.r(q-j.a*l,p-j.b*l,o-j.c*l)
j=m.goT(0)
h=new A.r(q+j.a*k,p+j.b*k,o+j.c*k)
for(g=0;g<=a0;++g){f=g/a0
w.push(A.o_(A.o_(i,s,f),A.o_(s,h,f),f))}}w.push(D.d.gal(d))
return w},
ahP(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
if(a3.length<3)return a3
w=C.a([],x.o)
for(v=0;u=v+1,t=a3.length,u<t;v=u){s=v===0?a3[v]:a3[v-1]
r=a3[v]
q=a3[u]
p=v+2
o=p<t?a3[p]:q
for(t=s.a,p=r.a,n=q.a,m=o.a,l=s.b,k=r.b,j=q.b,i=o.b,h=s.c,g=r.c,f=q.c,e=o.c,d=0;d<a4;++d){a0=d/a4
a1=a0*a0
a2=new A.fSY(a0,a1,a1*a0)
w.push(new A.r(a2.$4(t,p,n,m),a2.$4(l,k,j,i),a2.$4(h,g,f,e)))}}w.push(D.d.gal(a3))
return w},
hyy(){if($.h7H)return
$.h7H=!0
C.az().bL(new A.bIb(),x.P).eW(new A.bIc())},
h7I(){C.az().bL(new A.bId(),x.P).eW(new A.bIe())},
hTo(d){var w,v,u,t,s,r,q,p,o,n
for(w=d.length,v=!0,u=!0,t=0;t<w;++t)if(d[t].c>=0.5)u=!1
else v=!1
if(v)return d
if(u)return B.ry
s=C.a([],x.o)
for(r=0;w=d.length,r<w;){q=d[r];++r
p=d[r%w]
w=q.c
o=w>=0.5
n=p.c
if(o)s.push(q)
if(o!==n>=0.5)s.push(A.o_(q,p,(0.5-w)/(n-w)))}return s},
h1B(a2,a3,a4){var w,v,u,t,s,r,q,p=J.a4(a2),o=p.h(a2,0).a,n=p.h(a2,0).b,m=p.h(a2,1).a,l=p.h(a2,1).b,k=p.h(a2,2).a,j=p.h(a2,2).b,i=p.h(a2,3).a,h=p.h(a2,3).b,g=m-k,f=i-k,e=o-m+k-i,d=l-j,a0=h-j,a1=n-l+j-h
if(Math.abs(e)<1e-9&&Math.abs(a1)<1e-9){w=m-o
v=i-o
u=l-n
t=h-n
s=0
r=0}else{q=g*a0-f*d
if(Math.abs(q)<1e-9)return null
s=(e*a0-f*a1)/q
r=(g*a1-e*d)/q
w=m-o+s*m
v=i-o+r*i
u=l-n+s*l
t=h-n+r*h}p=new Float64Array(16)
p[15]=1
p[14]=0
p[13]=n
p[12]=o
p[11]=0
p[10]=1
p[9]=0
p[8]=0
p[7]=r/a4
p[6]=0
p[5]=t/a4
p[4]=v/a4
p[3]=s/a3
p[2]=0
p[1]=u/a3
p[0]=w/a3
return new C.eC(p)},
hUf(d,e,f,g){var w,v=e.d,u=e.e,t=A.h1B(f,v,u)
if(t==null)return
w=d.a
J.bq(w.save())
d.aw(0,t.a)
w.clipRect(C.bQ(new C.a5(0,0,v,0+u)),$.nc()[1],!0)
e.c.$3(d,new C.au(v,u),g)
w.restore()},
hUg(d,e,f,g,h,i){var w,v,u,t,s,r,q,p,o,n,m,l,k=e.d,j=e.e
$.V()
w=new C.pI()
e.c.$3(C.z1(w,null),new C.au(k,j),i)
v=w.nS()
u=k/g
t=j/h
for(s=f.length,r=d.a,q=0+u,p=0+t,o=0;o<f.length;f.length===s||(0,C.M)(f),++o){n=f[o]
m=A.h1B(n.c,u,t)
if(m==null)continue
J.bq(r.save())
l=m.a
r.concat(C.fT4(C.H1(l)))
r.clipRect(C.bQ(new C.a5(0,0,q,p)),$.nc()[1],!0)
r.translate(-n.a*u,-n.b*t)
n=v.b
n===$&&C.c()
n=n.a
n===$&&C.c()
n=n.a
n.toString
r.drawPicture(n)
r.restore()}v.t()},
fZn(d,e,f,g,h,i,j,k,l,m){return new A.auZ(l,e,h,k,i,f,g,d,m,j,null)},
r:function r(d,e,f){this.a=d
this.b=e
this.c=f},
lP:function lP(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
cW:function cW(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
hf:function hf(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
tI:function tI(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fK:function fK(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
fk:function fk(d){var _=this
_.a=d
_.c=_.b=0
_.d=1
_.e=0
_.f=2
_.r=!1
_.x=_.w=0},
bZi:function bZi(d,e){this.a=d
this.b=e},
bZj:function bZj(d){this.a=d},
bZh:function bZh(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
bZk:function bZk(d,e,f){this.a=d
this.b=e
this.c=f},
bZg:function bZg(d,e){this.a=d
this.b=e},
bZl:function bZl(d,e,f){this.a=d
this.b=e
this.c=f},
fTc:function fTc(d,e){this.a=d
this.b=e},
fTa:function fTa(d){this.a=d},
fTb:function fTb(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fT9:function fT9(d,e,f){this.a=d
this.b=e
this.c=f},
fSY:function fSY(d,e,f){this.a=d
this.b=e
this.c=f},
x7:function x7(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=6
_.f=160
_.r=0
_.w=-1.25
_.x=1.35
_.y=0
_.z=1.25
_.Q=!1
_.ay=_.ax=_.at=_.as=null
_.P$=0
_.T$=h
_.bu$=_.bI$=0},
bIb:function bIb(){},
bIc:function bIc(){},
bId:function bId(){},
bIe:function bIe(){},
bIg:function bIg(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bIf:function bIf(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bIa:function bIa(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bI9:function bI9(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bT7:function bT7(d){this.a=d},
b5x:function b5x(d,e,f,g,h,i,j,k,l,m,n){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.w=j
_.x=k
_.y=l
_.z=m
_.a=n},
cqT:function cqT(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cqU:function cqU(d,e){this.a=d
this.b=e},
cqM:function cqM(){},
cqN:function cqN(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
cqL:function cqL(d){this.a=d},
cqO:function cqO(){},
cqP:function cqP(d,e,f){this.a=d
this.b=e
this.c=f},
cqQ:function cqQ(){},
cqS:function cqS(d,e){this.a=d
this.b=e},
cqR:function cqR(d){this.a=d},
cAE:function cAE(d,e){this.a=d
this.b=e},
As:function As(d,e,f,g,h,i,j,k,l){var _=this
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
auZ:function auZ(d,e,f,g,h,i,j,k,l,m,n){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.Q=l
_.as=m
_.a=n},
bqL:function bqL(d,e,f,g,h,i){var _=this
_.d=$
_.e=d
_.f=e
_.r=f
_.w=1
_.x=0
_.y=g
_.bx$=h
_.aa$=i
_.c=_.a=null},
eYc:function eYc(d){this.a=d},
eYb:function eYb(d){this.a=d},
eY8:function eY8(d){this.a=d},
eY9:function eY9(d){this.a=d},
eYa:function eYa(d){this.a=d},
eY6:function eY6(d){this.a=d},
eY7:function eY7(d,e){this.a=d
this.b=e},
aN5:function aN5(){},
fVW(d){var w,v,u=$.fVV.h(0,d)
if(u!=null)return C.f8(u,x.c)
w=B.a4S.h(0,d)
if(w==null)return C.f8(null,x.c)
v=$.fVU.h(0,d)
if(v==null){v=new A.bS2(w,d).$0()
$.fVU.n(0,d,v)}return v},
aVi(d){var w=0,v=C.j(x.H),u
var $async$aVi=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:w=2
return C.b(A.fVW(d),$async$aVi)
case 2:u=J.aV(B.a4S.ges(B.a4S))
case 3:if(!u.C()){w=4
break}w=5
return C.b(A.fVW(u.gR(u)),$async$aVi)
case 5:w=3
break
case 4:return C.h(null,v)}})
return C.i($async$aVi,v)},
hBE(d){var w,v,u=new Float64Array(d*16)
for(w=0;w<d;++w){v=w*16
u[v+15]=1
u[v+10]=1
u[v+5]=1
u[v]=1}return u},
h9g(d,e,f){var w,v,u,t
if(d>e){w=d
v=e}else{w=e
v=d}if(w>f){u=w
w=f}else u=f
if(v>w){t=w
w=v
v=t}return(v*65536+w)*65536+u},
hBF(d,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=d.c,g=d.b===1,f=g?4:3,e=h.length
if(e===0)return
w=d.a*f
if(a0<=h[0]||e===1){for(g=d.d,v=a1.$flags|0,u=0;u<f;++u){t=g[u]
v&2&&C.aj(a1)
a1[w+u]=t}return}s=e-1
if(a0>=h[s]){for(g=d.d,v=s*f,t=a1.$flags|0,u=0;u<f;++u){r=g[v+u]
t&2&&C.aj(a1)
a1[w+u]=r}return}for(q=0;s-q>1;){p=D.o.aC(q+s,1)
if(h[p]<=a0)q=p
else s=p}if(d.e)o=0
else{v=h[q]
o=(a0-v)/(h[s]-v)}n=d.d
if(!g){for(g=q*3,v=s*3,t=a1.$flags|0,u=0;u<3;++u){r=n[g+u]
m=n[v+u]
t&2&&C.aj(a1)
a1[w+u]=r+(m-r)*o}return}for(g=q*4,v=s*4,l=0,u=0;u<4;++u)l+=n[g+u]*n[v+u]
k=l<0?-1:1
for(t=a1.$flags|0,j=0,u=0;u<4;++u){r=n[g+u]
i=r+(k*n[v+u]-r)*o
t&2&&C.aj(a1)
a1[w+u]=i
j+=i*i}j=Math.sqrt(j)
if(j>1e-9)for(u=0;u<4;++u){g=w+u
v=a1[g]
t&2&&C.aj(a1)
a1[g]=v/j}},
h9h(d,a0,a1,a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
for(w=a0+4,v=a0+8,u=a0+12,t=a3.$flags|0,s=0;s<4;++s)for(r=s*4,q=a4+r,r=a2+r,p=r+1,o=r+2,n=r+3,m=0;m<4;++m){l=d[a0+m]
k=a1[r]
j=d[w+m]
i=a1[p]
h=d[v+m]
g=a1[o]
f=d[u+m]
e=a1[n]
t&2&&C.aj(a3)
a3[q+m]=l*k+j*i+h*g+f*e}},
i0Y(d,e){var w=D.o.aC(d,16)&255,v=D.o.aC(d,8)&255,u=d&255,t=0.35+(0.299*w+0.587*v+0.114*u)/255,s=new A.frs()
return C.a_(255,s.$2(w,e.gb7(e)*255*t),s.$2(v,e.gbf()*255*t),s.$2(u,e.gbd(e)*255*t))},
bba:function bba(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
bbv:function bbv(d,e){this.b=d
this.c=e},
bgy:function bgy(d,e,f){this.a=d
this.b=e
this.c=f},
dmg:function dmg(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=$},
Mq:function Mq(d,e,f,g,h){var _=this
_.a=d
_.c=_.b=$
_.d=-1
_.e=e
_.y=_.x=_.w=_.r=_.f=$
_.z=f
_.ax=_.at=_.as=_.Q=$
_.ay=0
_.ch=g
_.CW=h},
bS2:function bS2(d,e){this.a=d
this.b=e},
bRV:function bRV(){},
bRS:function bRS(d,e){this.a=d
this.b=e},
bRR:function bRR(){},
bRX:function bRX(d,e,f){this.a=d
this.b=e
this.c=f},
bRY:function bRY(d){this.a=d},
bRZ:function bRZ(d){this.a=d},
bRW:function bRW(d,e){this.a=d
this.b=e},
bRT:function bRT(d){this.a=d},
bRU:function bRU(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
bS1:function bS1(d){this.a=d},
bS_:function bS_(){},
bS0:function bS0(d){this.a=d},
bS3:function bS3(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
frs:function frs(){},
drO:function drO(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
dgt:function dgt(d,e){this.a=d
this.b=e},
hye(){var w,v=J.e4(6,x.ff)
for(w=0;w<6;++w)v[w]=new A.aSb()
return new A.bGu(v)},
afC(d){return A.hTP(d)},
hTP(d){var w=0,v=C.j(x.eT),u,t=2,s=[],r,q,p,o,n
var $async$afC=C.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:if(d==null){u=null
w=1
break}t=4
w=7
return C.b(C.fwy(d,null),$async$afC)
case 7:r=f
n=J
w=8
return C.b(r.lG(),$async$afC)
case 8:q=n.a2U(f)
u=q
w=1
break
t=2
w=6
break
case 4:t=3
o=s.pop()
u=null
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return C.h(u,v)
case 2:return C.f(s.at(-1),v)}})
return C.i($async$afC,v)},
hrM(a5,a6,a7,a8,a9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
if(a8.a){w=a7/8
if(a9===0){v=D.k.bm(w)
A.nb(a5,a6,a7,D.o.F(v,2)===0?0:1+D.o.an(v,2))}else A.nb(a5,a6,a7,a9+1+D.k.bm(w))
return}u=B.a4m[a8.e]
w=a6.a
t=a6.b
s=0+t
r=new C.a5(0,0,0+w,s)
$.V()
q=C.K()
q.sar(new C.a9(D.a3,D.a8,D.x,C.a([u.b,u.c],x.O),null,null).aA(0,r))
a5.aU(r,q)
q=t*0.04
p=r.ct(-q)
o=C.K()
o.b=D.ac
o.c=t*0.025
n=u.e
o.r=n.gp(0)
a5.aU(p,o)
m=t*0.1
l=a8.x
if(l!=null){p=m+w*0.4
o=m+(t-m*2)
k=new C.a5(m,m,p,o)
j=p-m
i=l.c
o-=m
h=l.d
v=Math.max(j/i,o/h)
g=C.bN(new C.t(i/2,h/2),o/v,j/v)
j=a5.a
J.bq(j.save())
o=t*0.05
j.clipRRect(C.eL(C.bz(k,new C.aQ(o,o))),$.oR(),!0)
o=C.K()
o.Q=D.cf
a5.ow(l,g,k,o)
j.restore()
f=p+m*0.8}else f=m
e=a8.w
if(e==null)e=$.VW
p=t*0.3
o=f+p
p=m+p
d=new C.a5(f,m,o,p)
j=d.gbN()
o-=f
i=C.K()
i.r=B.EN.gp(0)
a5.ae(j,o/2,i)
if(e!=null){j=e.c
i=e.d
v=Math.min(o*0.8/j,(p-m)*0.8/i)
o=C.bN(d.gbN(),i*v,j*v)
h=C.K()
h.Q=D.cf
a5.ow(e,new C.a5(0,0,j,i),o,h)}o=new A.fKb()
a0=w-f-m
j=u.d
a1=o.$4(a8.b,t*0.17,j,a0)
a1.a5(a5,new C.t(f,p+q))
a2=o.$5$w(a8.c,t*0.09,n,a0,D.O)
n=a1.b.a.c
a2.a5(a5,new C.t(f,p+t*0.06+n.gbc(n)))
a3=o.$6$lines$w(a8.d,t*0.08,j.j(0.85),a0,1,D.H)
j=a3.b
o=j.c
j=j.a.c
a3.a5(a5,new C.t(w-m-o,t-m-j.gbc(j)))
a4=(D.k.F(a7*0.35,1.6)-0.3)*w
j=a5.a
J.bq(j.save())
j.clipRect(C.bQ(r),$.nc()[1],!0)
t=C.K()
t.r=D.c.j(0.1).gp(0)
a5.aU(new C.a5(a4,0,a4+w*0.1,s),t)
j.restore()},
i2f(d,e){var w,v,u,t,s=d.w
if(s.length===0){s=d.e
w=d.r
return new C.cw([-s/2,s/2,w+d.f,w])}v=s[e]
s=v.e
u=d.e*s
t=d.r+v.d
return new C.cw([-u/2,u/2,t+d.f*s,t])},
bAj(d,e,f,g){var w,v,u,t,s,r,q,p,o=new C.a5(0,0,0+e.a,0+e.b)
$.V()
w=C.K()
w.r=B.bg9.gp(0)
d.aU(o,w)
v=o.ct(-(e.gdB()*0.06))
w=d.a
J.bq(w.save())
w.clipRect(C.bQ(v),$.nc()[1],!0)
u=v.a
t=v.b
w.translate(u,t)
u=v.c-u
t=v.d-t
if((g&1)===0){s=0+u
r=0+t
q=C.K()
q.sar(B.c2H.aA(0,new C.a5(0,0,s,r)))
d.aU(new C.a5(0,0,s,r),q)
p=t*0.82
J.bq(w.save())
w.translate((u-p)/2,(t-p)/2)
A.hrR(d,new C.au(p,p),f)
w.restore()}else A.nb(d,new C.au(u,t),f,g)
w.restore()},
hYm(d,e,f){var w,v,u,t,s=e.a,r=e.b
$.V()
w=C.K()
w.r=B.boj.gp(0)
d.aU(new C.a5(0,0,0+s,0+r),w)
v=C.K()
v.r=B.bke.gp(0)
w=s*0.12
u=r*0.07
t=w+s*0.76
d.aU(new C.a5(w,u,t,u+r*0.38),v)
u=r*0.52
d.aU(new C.a5(w,u,t,u+r*0.4),v)
u=C.K()
u.r=F.fv.gp(0)
d.ae(new C.t(s*0.82,r*0.5),s*0.05,u)},
h2h(d9,e0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6=x.z,d7=C.a([],d6),d8=new A.fk(d7)
d8.f=0
d8.Gv(B.h4D,B.fVh,B.fVg,B.h4C,B.bi4,B.e8)
d8.f=1
d8.Gv(B.h_3,B.fXW,B.h67,B.fZB,B.LU,B.e8)
for(w=-2100;w<2100;w+=90){v=w+45
d8.Gv(new A.r(w,0.8,637),new A.r(v,0.8,637),new A.r(v,0.8,643),new A.r(w,0.8,643),B.Xf,B.e8)}d8.f=2
u=d9.e
t=d9.f
s=d9.r
v=d9.w
r=v.length
q=r!==0
p=d9.a
o=12
switch(p){case"tower":n=D.aP
break
case"neon":n=D.bc
break
case"screen":n=D.au
o=6
break
case"roof":n=D.aw
break
case"gate":n=D.d8
break
case"duo":n=D.bc
break
case"line3":n=D.bm
break
case"far3":n=D.aE
break
case"skyline":n=D.by
break
case"lines6":n=D.aP
break
case"scatter":n=D.bc
break
default:n=F.fv}m=p==="roof"
l=m?3:2
k=q?720:900
j=k*t/u
i=C.a([],x.a)
r=q?r:1
for(h=e0.b,g=x.o,f=-o,e=f-0.8,d=p==="highway",a0=f/2,f=p!=="neon",a1=a0-0.2,a2=p==="screen",a3=s-16,a4=(14+s-7)/2,a5=s-21,a6=s-7,a7=0;a7<r;++a7){a8=q?v[a7]:B.abl
a9=a8.e
b0=u*a9
b1=t*a9
b2=new A.fsS(a8)
b3=C.a([],d6)
b4=new A.fk(b3)
b4.f=l
b5=C.a([],d6)
b6=new A.fk(b5)
b6.f=l
b7=A.i2f(d9,a7).a
b8=b7[0]
b9=b7[1]
c0=b7[2]
c1=b7[3]
c2=(b8+b9)/2
c3=(c0+c1)/2
b7=b2.$1(new A.r(c2,c3,a1))
c4=!f||a2?D.au:D.cp
c5=a8.c
b4.wj(b7,new A.r(b0+16,b1+16,o),c4,0.2,c5)
c6=7*Math.max(1,a9*0.8)
c4=b0+14
b6.wj(b2.$1(new A.r(c2,c0+3,3)),new A.r(c4,c6,8),n,0.4,c5)
b6.wj(b2.$1(new A.r(c2,c1-3,3)),new A.r(c4,c6,8),n,0.4,c5)
b7=b1+14
b6.wj(b2.$1(new A.r(b8-3,c3,3)),new A.r(c6,b7,8),n,0.4,c5)
b6.wj(b2.$1(new A.r(b9+3,c3,3)),new A.r(c6,b7,8),n,0.4,c5)
D.d.v(d7,b3)
D.d.v(d7,b5)
b5=C.a([],d6)
c7=new A.fk(b5)
c8=Math.max(6,b0*0.018)
c9=new A.fsT(i,l)
switch(q?"sep":p){case"tower":c7.dL(new A.r(0,0,a0),new A.r(0,a6,a0),c8*1.9,D.he,12)
c7.dL(new A.r(0,0,a0),new A.r(0,14,a0),c8*2.8,D.au,12)
break
case"screen":c7.aO(new A.r(0,7,-10),new A.r(b0*0.6,14,70),D.au)
c7.aO(new A.r(0,a4,a0),new A.r(60,a5,14),D.he)
break
case"roof":c7.n6(B.fRb,B.fXc,B.bej,0.1,4)
c7.n6(B.fRQ,B.fXi,D.dv,0.15,4)
c7.hm(B.fRv,B.fXh,D.dv,4)
c7.n6(B.h4R,B.fUr,B.bft,0.1,2)
c7.hm(B.h4Q,B.fUD,D.dv,2)
c7.aO(B.fUO,B.fW6,B.nP)
c7.aO(B.fR0,B.fTb,D.el)
c9.$6$px(B.h2X,0,210,126,new A.fsL(),360)
c9.$6$px(B.h3W,0,210,126,new A.fsM(),360)
c9.$6$px(B.h_N,0,72,116,A.ibu(),140)
c9.$6$px(B.h7h,0,130,80,new A.fsN(),300)
for(d0=0;d0<3;++d0){d1=-60-d0*90
c9.$6$px(new A.r(310.8,140,d1),1.5707963267948966,80,64,new A.fsO(d0),240)
c9.$6$px(new A.r(310.8,55,d1),1.5707963267948966,60,60,A.h4I(),200)}for(d0=0;d0<2;++d0){d1=-65-d0*110
c9.$6$px(new A.r(-490.8,95,d1),-1.5707963267948966,90,60,new A.fsP(d0),240)
c9.$6$px(new A.r(-490.8,40,d1),-1.5707963267948966,50,50,A.h4I(),180)}c9.$6$px(new A.r(0,100,-285.8),3.141592653589793,580,170,A.hrD(),900)
break
case"gate":for(b3=b0/2+25,b7=s+b1,c4=b7+26,c5=c8*1.6,d2=0;d2<2;++d2){d3=F.je[d2]*b3
c7.dL(new A.r(d3,0,a0),new A.r(d3,c4,a0),c5,D.he,12)}c7.aY(new A.r(0,b7+17,a0),new A.r(b0+80,18,22),D.he,0.2)
break
default:for(b3=s+a8.d-7,d2=0;d2<2;++d2){b7=F.je[d2]*b0*0.3
c7.dL(b2.$1(new A.r(b7,0,a0)),b2.$1(new A.r(b7,b3,a0)),c8,D.he,10)}if(d)c7.aO(new A.r(0,a3,14),new A.r(c4,3,24),D.he)}D.d.v(d7,b5)
d4=h[a7]
i.push(new A.fK(C.a([b2.$1(new A.r(b8,c0,0.8)),b2.$1(new A.r(b9,c0,0.8)),b2.$1(new A.r(b9,c1,0.8)),b2.$1(new A.r(b8,c1,0.8))],g),0,new A.fsQ(d4,a7),k,j,60,l,0,!1))
i.push(new A.fK(C.a([b2.$1(new A.r(b9,c0,e)),b2.$1(new A.r(b8,c0,e)),b2.$1(new A.r(b8,c1,e)),b2.$1(new A.r(b9,c1,e))],g),0,new A.fsR(d4,a7),k,j,60,l,0,!1))}d6=C.a([],d6)
d5=new A.fk(d6)
for(d2=0;d2<9;++d2){v=B.cZy[d2]
w=v.a
d1=v.b
if(m&&d1>200)continue
d5.dL(new A.r(w,0,d1),new A.r(w,55,d1),7,B.pX,6)
d5.fo(new A.r(w,98,d1),46,E.WO,3,6)}for(d2=0;d2<6;++d2){w=B.dnt[d2]
d5.dL(new A.r(w,0,580),new A.r(w,90,580),3,D.he,5)
d5.fo(new A.r(w,95,580),8,B.o0,3,6)}D.d.v(d7,d6)
return new A.tI(d7,B.RI,B.ze,i,null,6000)},
hkb(d){return d*d*(3-2*d)},
ffd(d,e,f,g,h){var w=new A.ffe(h)
return new A.r(w.$4(d.a,e.a,f.a,g.a),w.$4(d.b,e.b,f.b,g.b),w.$4(d.c,e.c,f.c,g.c))},
hl6(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=D.k.E(e,0,30)
if(f==null){w=C.a([],x.n)
for(v=J.a4(d),u=0;u<v.gL(d);++u)w.push(30*u/(v.gL(d)-1))
t=w}else t=f
w=J.a4(d)
v=J.a4(t)
s=0
for(;;){r=s+2
if(!(r<w.gL(d)&&v.h(t,s+1)<=m))break;++s}w=s+1
q=A.hkb(D.k.E((m-v.h(t,s))/(v.h(t,w)-v.h(t,s)),0,1))
v=new A.fiB(d)
p=s-1
o=A.ffd(v.$1(p).a,v.$1(s).a,v.$1(w).a,v.$1(r).a,q)
n=A.ffd(v.$1(p).b,v.$1(s).b,v.$1(w).b,v.$1(r).b,q)
r=Math.sin(m*1.3)
v=Math.sin(m*1.9)
w=Math.cos(m*1.1)
return new C.z(new A.r(o.a+r*3,Math.max(o.b+v*2.5,18),o.c+w*3),n)},
i15(d){return $.i14.c4(0,d.a,new A.fry(d))},
hnw(d){return $.i16.c4(0,d.a,new A.frv(d))},
i2e(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=d.a
if(i==="scatter")return A.hl6(B.dbR,e,null)
if(d.w.length!==0)return A.hl6(A.hnw(d),e,A.i15(d))
w=B.dta.h(0,i)
if(w==null)w=B.aNz
v=B.csK[w.a]
u=w.b?-1:1
t=new A.r(d.ga43(0),d.r+d.gGH()/2,d.ga44())
s=new A.fsD(t,u,d)
r=new A.fsE(t,u,d)
q=D.k.E(e,0,30)
i=v.length
p=0
for(;;){o=p+2
if(!(o<i&&v[p+1].a<=q))break;++p}i=v[p].a
n=p+1
m=A.hkb(D.k.E((q-i)/(v[n].a-i),0,1))
i=new A.fsF(v)
l=p-1
k=A.ffd(s.$1(i.$1(l)),s.$1(i.$1(p)),s.$1(i.$1(n)),s.$1(i.$1(o)),m)
j=A.ffd(r.$1(i.$1(l)),r.$1(i.$1(p)),r.$1(i.$1(n)),r.$1(i.$1(o)),m)
return new C.z(new A.r(k.a,Math.max(k.b,18),k.c),j)},
lz:function lz(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
r5:function r5(d,e,f,g,h,i,j,k,l,m){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l
_.y=m},
bGw:function bGw(d){this.a=d},
Hg:function Hg(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
aSb:function aSb(){var _=this
_.a=!0
_.b="NEW GLOBAL MOVEMENT FOR YOUTH"
_.c="Videos, slides, blogs and books."
_.d="ngmy.org"
_.e=0
_.x=_.w=_.r=_.f=null},
bGu:function bGu(d){this.a="highway"
this.b=d},
bGv:function bGv(d){this.a=d},
fKb:function fKb(){},
fsS:function fsS(d){this.a=d},
fsT:function fsT(d,e){this.a=d
this.b=e},
fsU:function fsU(d,e){this.a=d
this.b=e},
fsL:function fsL(){},
fsM:function fsM(){},
fsN:function fsN(){},
fsO:function fsO(d){this.a=d},
fsP:function fsP(d){this.a=d},
fsQ:function fsQ(d,e){this.a=d
this.b=e},
fsR:function fsR(d,e){this.a=d
this.b=e},
hl:function hl(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
ffe:function ffe(d){this.a=d},
fiB:function fiB(d){this.a=d},
fry:function fry(d){this.a=d},
frx:function frx(){},
frv:function frv(d){this.a=d},
frw:function frw(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fsD:function fsD(d,e,f){this.a=d
this.b=e
this.c=f},
fsE:function fsE(d,e,f){this.a=d
this.b=e
this.c=f},
fsF:function fsF(d){this.a=d},
aok:function aok(d){this.a=d},
aol:function aol(d,e){var _=this
_.d=d
_.r=_.f=_.e=$
_.w=e
_.x=-1
_.y=!1
_.z=""
_.c=_.a=null},
c2i:function c2i(d){this.a=d},
c2g:function c2g(d){this.a=d},
c2f:function c2f(){},
c23:function c23(d){this.a=d},
c29:function c29(d,e){this.a=d
this.b=e},
c2h:function c2h(d){this.a=d},
c26:function c26(d,e){this.a=d
this.b=e},
c25:function c25(d){this.a=d},
c1E:function c1E(){},
c24:function c24(d){this.a=d},
c28:function c28(d){this.a=d},
c27:function c27(d,e,f){this.a=d
this.b=e
this.c=f},
c22:function c22(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
c21:function c21(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
c1Z:function c1Z(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
c2_:function c2_(d,e){this.a=d
this.b=e},
c1U:function c1U(d,e,f){this.a=d
this.b=e
this.c=f},
c20:function c20(d){this.a=d},
c1X:function c1X(d,e){this.a=d
this.b=e},
c1W:function c1W(){},
c1Y:function c1Y(d,e){this.a=d
this.b=e},
c1V:function c1V(){},
c1J:function c1J(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
c1I:function c1I(){},
c1K:function c1K(d){this.a=d},
c1L:function c1L(d){this.a=d},
c1M:function c1M(d){this.a=d},
c1N:function c1N(d,e){this.a=d
this.b=e},
c1O:function c1O(d,e,f){this.a=d
this.b=e
this.c=f},
c1P:function c1P(d,e){this.a=d
this.b=e},
c1Q:function c1Q(d,e,f){this.a=d
this.b=e
this.c=f},
c1R:function c1R(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
c1H:function c1H(){},
c1S:function c1S(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
c1F:function c1F(){},
c1G:function c1G(){},
c1T:function c1T(d){this.a=d},
c2c:function c2c(d){this.a=d},
c2d:function c2d(d){this.a=d},
c2b:function c2b(d){this.a=d},
c2e:function c2e(d){this.a=d},
c2a:function c2a(d){this.a=d},
h26(d,e,f,g){var w,v,u,t=null,s=e.r
s=s==null?t:D.k.V(s)
w=D.k.V(f)
v=e.b
v=v==null?t:v.l()
u=d+"|"+C.w(s)+"|"+w+"|"+C.w(v)
v=$.hns.h(0,u)
if(v==null){s=C.fS(t,t,g,t,C.cX(t,t,t,t,t,t,t,t,t,e,d),D.a6,D.c5,t,D.dP,D.c4)
s.qR(f)
$.hns.n(0,u,s)}else s=v
return s},
nb(a5,a6,a7,a8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4=D.o.F(a8,17)
if(a4===0){A.fKi(a5,a6,a7,0)
w=a6.a
v=(D.k.F(a7*0.35,1.6)-0.3)*w
u=a5.a
J.bq(u.save())
t=0+a6.b
u.clipRect(C.bQ(new C.a5(0,0,0+w,t)),$.nc()[1],!0)
$.V()
s=C.K()
s.r=D.c.j(0.12).gp(0)
a5.aU(new C.a5(v,0,v+w*0.12,t),s)
u.restore()
return}if(a4>=8){I.RI(a5,a6,a4-8,a7)
return}r=B.cTT[a4-1]
w=a6.a
u=a6.b
q=new C.a5(0,0,0+w,0+u)
t=$.V()
s=C.K()
s.sar(new C.a9(D.ay,D.aD,D.x,C.a([r.c,r.d],x.O),a3,a3).aA(0,q))
a5.aU(q,s)
s=a5.a
J.bq(s.save())
s.clipRect(C.bQ(q),$.nc()[1],!0)
p=C.K()
p.r=D.c.j(0.07).gp(0)
for(o=u*0.4,n=w*0.07,m=a7*w*0.05,l=w*2,k=w*0.4,j=x.g,t=t.r,i=-4;i<14;++i){v=D.k.F(i*w/7+m,l)-k
h=C.a([],j)
g=new C.aI(t,D.ai,a3,a3,h)
h.push(new C.b0(v,0))
h.push(new C.ap(v+n,0))
f=v-o
h.push(new C.ap(f+n,u))
h.push(new C.ap(f,u))
h.push(new C.bv())
e=p.H()
h=g.gbB().a.snapshot()
s.drawPath((g.e=new C.cv(h)).a,e)
e.delete()}t=Math.sin(a7*2)
n=C.K()
m=r.e
n.r=m.j(0.18).gp(0)
a5.ae(new C.t(w*0.88,u*0.3),u*(0.22+0.03*t),n)
s.restore()
s=w*0.06
A.h26(r.a,C.l(a3,a3,D.c,a3,a3,a3,a3,a3,a3,a3,a3,u*0.22,a3,a3,D.u,a3,a3,!0,a3,u*0.012,a3,a3,a3,a3,a3,a3),w*0.9,1).a5(a5,new C.t(s,u*0.2))
A.h26(r.b,C.l(a3,a3,m,a3,a3,a3,a3,a3,a3,a3,a3,u*0.1,a3,a3,D.O,a3,a3,!0,a3,a3,a3,a3,a3,a3,a3,a3),w*0.8,2).a5(a5,new C.t(s,u*0.5))
d=$.VW
m=u*0.76
if(d!=null){t=d.c
n=d.d
a0=Math.min((s+o-s)/t,(m+u*0.16-m)/n)
o=C.K()
o.Q=D.cf
a5.ow(d,new C.a5(0,0,t,n),new C.a5(s,m,s+t*a0,m+n*a0),o)}else{a1=C.fS(a3,a3,a3,a3,C.cX(a3,a3,a3,a3,a3,a3,a3,a3,a3,C.l(a3,a3,D.c,a3,a3,a3,a3,a3,a3,a3,a3,u*0.12,a3,a3,D.u,a3,a3,!0,a3,a3,a3,a3,a3,a3,a3,a3),"NGMY"),D.a6,D.c5,a3,D.dP,D.c4)
a1.eI()
a1.a5(a5,new C.t(s,m))}a2=A.h26("ngmy.org",C.l(a3,a3,D.ae,a3,a3,a3,a3,a3,a3,a3,a3,u*0.08,a3,a3,D.H,a3,a3,!0,a3,a3,a3,a3,a3,a3,a3,a3),400,1)
a2.a5(a5,new C.t(w-a2.b.c-w*0.05,u*0.82))},
FM:function FM(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
KZ(d){return D.d.dM(B.QD,new A.fv8(d),new A.fv9())},
yG(d){var w=B.ht.h(0,d.b),v=d.e*3.141592653589793/2,u=w.d/2+30
return new C.z(d.c+Math.sin(v)*u,d.d+Math.cos(v)*u)},
hzI(d){var w=C.a([],x.C),v=C.a([],x.fW),u=new C.eb()
u.d5(7)
w=new A.bKR(d,u,w,v)
w.by0(d,7)
return w},
z5:function z5(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fv8:function fv8(d){this.a=d},
fv9:function fv9(){},
xc:function xc(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=null
_.w=_.r=!1
_.x=0},
aTk:function aTk(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.x=_.w=_.r=0
_.y=null
_.CW=_.ch=_.ay=_.ax=_.Q=_.z=0
_.cx=j
_.cy=0
_.db=!1
_.dx=0},
a45:function a45(d,e,f,g,h,i,j,k){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.w=j
_.x=k},
ak1:function ak1(d,e,f){this.a=d
this.b=e
this.c=f},
bKR:function bKR(d,e,f,g){var _=this
_.a=d
_.c=_.b=$
_.d=e
_.e=f
_.f=g
_.r=1
_.w=$
_.x=null
_.Q=_.z=_.y=0
_.as=1},
bKT:function bKT(d){this.a=d},
bKV:function bKV(d,e){this.a=d
this.b=e},
bKW:function bKW(){},
bKS:function bKS(d,e){this.a=d
this.b=e},
bKX:function bKX(){},
bKU:function bKU(d,e,f){this.a=d
this.b=e
this.c=f},
h7N(d){var w=d.x
return C.bt(w.length,D.d.cL(w,0,new A.bIY()),D.h,D.h,D.h,D.h,D.h,D.h,D.h,D.h,D.h,D.h,D.h,D.h,D.h,D.h,D.h,D.h,D.h,D.h)},
icF(d){var w,v,u
for(w=0,v=0;u=v+1,u<d.length;v=u)w+=Math.sqrt(Math.pow(d[u].a-d[v].a,2)+Math.pow(d[u].b-d[v].b,2))
return w},
icL(d,e){var w,v,u,t,s,r,q,p,o
for(w=e,v=0;u=v+1,u<d.length;v=u){t=d[u]
s=d[v]
r=t.a-s.a
q=t.b-s.b
p=Math.sqrt(r*r+q*q)
if(p<0.000001)continue
if(w<=p||v+2===d.length){o=D.k.E(w/p,0,1)
t=d[v]
return new C.bj(t.a+r*o,t.b+q*o,Math.atan2(r,q))}w-=p}return new C.bj(D.d.gal(d).a,D.d.gal(d).b,0)},
bIX:function bIX(d){var _=this
_.a=d
_.e=_.d=_.c=_.b=$
_.f=-1},
bIY:function bIY(){},
dgW:function dgW(d,e){this.a=d
this.b=e},
fWt(d,e,f){return new A.aXX(f,d,e,null)},
h2C(d){return D.k.dk((1-D.k.E(d,0,1))*12)},
aSH:function aSH(d){var _=this
_.b=_.a=1
_.d=_.c=0
_.e=1
_.f=!1
_.r=0
_.w=!1
_.P$=0
_.T$=d
_.bu$=_.bI$=0},
aXX:function aXX(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
Ui:function Ui(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
c_U:function c_U(d){this.a=d},
rJ:function rJ(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
fjE(d){var w=d.d-d.b-200
return new C.bph([157.07963267948966,2*w+380+628.3185307179587,w,190])},
L3(d,e){var w,v=A.fjE(d).a,u=v[2],t=v[3],s=v[0]
v=v[1]
w=D.k.F(e,v)
if(w<0)w+=v
v=new A.fys()
if(w<u)return new C.cw([d.b+100+w,445,1,0])
w-=u
if(w<s)return v.$4(d.d-100,545,-1.5707963267948966,w)
w-=s
if(w<t)return new C.cw([d.d,545+w,0,1])
w-=t
if(w<s)return v.$4(d.d-100,735,0,w)
w-=s
if(w<u)return new C.cw([d.d-100-w,835,-1,0])
w-=u
if(w<s)return v.$4(d.b+100,735,1.5707963267948966,w)
w-=s
if(w<t)return new C.cw([d.b,735-w,0,-1])
return v.$4(d.b+100,545,3.141592653589793,w-t)},
fV5(d,e,f){return new A.aSG(d,e,f)},
h2T(d,e){var w=D.k.F(e+d.c,28)
if(w<12)return 0
if(w<15)return 1
return 2},
hiT(d,e,f,g){var w=x.n
w=new A.bvZ(d,e,f,g,C.a([],w),C.a([],w))
w.bz5(d,e,f,g)
return w},
hyQ(){var w,v=C.a([],x.n)
for(w=0;w<4;++w)v.push(B.kj[w].r)
return new A.bIZ(v,C.c2(4,0,!1,x.i),B.ayy)},
i_D(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=C.a([],x.z)
for(w=d.length,v=e.a,u=e.b,t=e.c,s=x.o,r=0;r<d.length;d.length===w||(0,C.M)(d),++r){q=d[r]
p=C.a([],s)
for(o=q.a,n=o.length,m=0;m<o.length;o.length===n||(0,C.M)(o),++m){l=o[m]
p.push(new A.r(l.a*v,l.b*u,l.c*t))}k.push(new A.lP(p,q.b,q.c,q.d,q.e,q.f,q.r,q.w,q.x,q.y,q.z))}return k},
hSM(){var w,v,u,t,s=new A.fk(C.a([],x.z))
s.r=!0
s.aY(B.fRp,B.fTM,D.d8,0.3)
s.aY(B.h51,B.fTC,D.bN,0.2)
s.aY(B.a9K,B.fTA,B.hS,0.6)
s.aY(B.h02,B.fUh,B.hS,0.6)
s.aO(B.h_8,B.fTO,D.bI)
for(w=0;w<2;++w)s.aO(new A.r(75.5,9,B.a46[w]),B.a9P,B.o0)
for(w=0;w<2;++w){v=B.dic[w]
for(u=0;u<2;++u){t=B.di3[u]
s.dL(new A.r(v,7,t-1.5),new A.r(v,7,t+1.5),7.5,D.nb,12)}}return s},
hZb(d,e){var w,v,u,t,s,r=new A.fk(C.a([],x.z))
r.r=!0
r.aY(B.aU6,B.fSR,D.bN,0.4)
r.aY(B.h5j,B.fWx,D.bN,0.4)
r.aY(B.h5k,B.fWB,B.hS,0.6)
r.aO(B.x_,B.fSW,D.dK)
w=D.k.F(d*5+e,2)<1
r.aY(B.h7p,B.aUk,w?D.aw:D.ev,0.6)
r.aY(B.h3l,B.aUk,w?D.d8:D.d0,0.6)
for(v=0;v<2;++v){u=B.di8[v]
for(t=0;t<2;++t){s=B.di1[t]
r.dL(new A.r(u,6.5,s-1.5),new A.r(u,6.5,s+1.5),6.5,D.nb,12)}}return r},
ieR(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=x.z,a5=C.a([],a4)
for(w=0;w<4;++w){v=B.kj[w]
u=$.aQJ()
t=D.d.cD(B.kj,v)
u.Fw(0,a6)
t=A.L3(B.kj[t],u.a[t]).a
s=t[0]
r=t[1]
q=t[2]
p=t[3]
u=v.a==="bus"
o=u?A.hSM():A.hZb(a6,w)
u=u?B.aV7:B.aUr
D.d.v(a5,A.o8(A.i_D(o.a,u),0,Math.atan2(q,p)-1.5707963267948966,new A.r(s,0,r)))}for(u=$.bEh(),t=u.length,n=0;n<u.length;u.length===t||(0,C.M)(u),++n)D.d.v(a5,A.hWC(u[n],a6))
for(u=a6*0.9,t=x.o,m=a6*22,l=a6*0.09,w=0;w<2;++w){k=B.a3I[w].a
j=k[0]
i=k[1]
h=k[2]
g=l+w*3.141592653589793
k=Math.cos(g)
f=Math.sin(g)
e=Math.atan2(-Math.sin(g),Math.cos(g))
d=C.a([],a4)
a0=new A.fk(d)
a0.r=!0
a0.aY(B.f_,B.fW0,D.bx,0.4)
a0.aY(B.fTW,B.fT_,B.hS,0.7)
a0.dL(B.fU2,B.fXg,2.6,D.bx,8)
a0.aO(B.fXd,B.h2Z,D.bN)
a0.dL(B.x_,B.a9I,1.2,B.hm,8)
for(a1=0;a1<2;++a1)a0.aDf(new A.r(0,13.4,0),B.fZi,B.hm,m+a1*3.141592653589793/2)
for(n=0;n<2;++n){a2=E.az8[n]
a0.aO(new A.r(0,-11,a2),B.fZ0,B.hm)
a0.aO(new A.r(-10,-6,a2),B.aV5,B.hm)
a0.aO(new A.r(10,-6,a2),B.aV5,B.hm)}for(n=0;n<2;++n){a3=B.az4[n]
a0.jf(C.a([new A.r(a3*0.45,-10,0),new A.r(a3,-22,0)],t),0.3,B.hm,!1,0,4)}D.d.v(a5,A.o8(d,0,e-1.5707963267948966,new A.r(j+520*k,h+Math.sin(u+w)*5,i+520*f)))}return a5},
ieS(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=C.a([],x.a),f=new A.fT7()
for(w=0;w<4;++w){v={}
u=B.kj[w]
v.a=v.b=null
t=$.aQJ()
s=D.d.cD(B.kj,u)
t.Fw(0,d)
s=A.L3(B.kj[s],t.a[s]).a
v.b=s[0]
v.a=s[1]
s=new A.fT5(v,Math.atan2(s[2],s[3])-1.5707963267948966)
v=u.a==="bus"
r=v?B.aV7:B.aUr
t=v?51:38
q=t*r.a
t=v?25:19
p=r.b
o=t*p
n=(v?7.5:5.5)*p
v=v?21.8:18.2
m=v*r.c
v=-q
t=u.w
g.push(f.$7(s.$3(v,o,m),s.$3(q,o,m),s.$3(q,n,m),s.$3(v,n,m),t,1200,220))
p=-m
g.push(f.$7(s.$3(q,o,p),s.$3(v,o,p),s.$3(v,n,p),s.$3(q,n,p),t+5,1200,220))}for(v=d*0.09,t=d*0.9,w=0;w<2;++w){s=B.a3I[w].a
l=s[0]
k=s[1]
j=s[2]
i=s[3]
h=v+w*3.141592653589793
s=Math.cos(h)
p=Math.sin(h)
p=new A.fT6(Math.atan2(-Math.sin(h),Math.cos(h))-1.5707963267948966,l+520*s,j+Math.sin(t+w)*5,k+520*p)
g.push(f.$7(p.$2(-42,-22),p.$2(42,-22),p.$2(42,-44),p.$2(-42,-44),i,900,230))
g.push(f.$7(p.$2(42,-22.3),p.$2(-42,-22.3),p.$2(-42,-44.3),p.$2(42,-44.3),i,900,230))}return g},
hWC(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k=B.kj[d.a*2],j=d.b,i=A.L3(k,j).a,h=i[0],g=i[1],f=i[2],e=i[3]
j=A.L3(k,j+22).a
j=[j[0],j[1],f,e,h+-e*56,g+f*56]
w=A.h2T(d,a0)
v=D.k.F(a0+d.c,28)
u=v>=17&&v<26
i=C.a([],x.z)
t=new A.fk(i)
t.r=!0
t.dL(B.f_,B.aUf,1.7,D.he,6)
t.aY(B.fSu,B.fXS,D.au,0.3)
for(s=w===2,r=w===1,q=w===0,p=0;p<3;++p){o=!0
if(!(p===0&&s))if(!(p===1&&r)){n=p===2&&q
o=n}n=o?B.deW[p]:B.cGQ[p]
m=o?0.9:0.1
t.fT(new A.r(-3.9,74-p*8,0),3.3,n,4,7,m)}t.aY(B.fRZ,B.fT0,D.au,0.3)
if(u){t.fo(B.fZ4,1.6,D.be,4,6)
t.aO(B.h2V,B.h2C,D.be)
t.aO(B.fZt,B.aVt,D.be)
t.aO(B.h1K,B.aVt,D.be)}else{t.aO(B.h_v,B.h3L,D.aw)
for(l=-2;l<=1;++l)t.aO(new A.r(l*1.25+0.6,40,-4.9),B.h46,D.aw)
t.aO(B.h6P,B.h_F,D.aw)}return A.o8(i,0,Math.atan2(j[2],j[3])-1.5707963267948966,new A.r(j[4],0,j[5]))},
i38(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=C.a([],x.z),i=new A.fk(j)
i.f=1
i.e=90
w=new A.fuH(i)
for(v=$.bEh(),u=v.length,t=0;t<v.length;v.length===u||(0,C.M)(v),++t){s=v[t]
r=B.kj[s.a*2]
q=s.b
p=A.L3(r,q+22).a
o=p[0]
n=p[1]
m=p[2]
l=p[3]
for(k=-4;k<=4;++k)w.$8(o,n,m,l,0,-25+k*11,18,5)
q=A.L3(r,q-6).a
w.$8(q[0],q[1],m,l,0,0,2.2,46)}return j},
Sk:function Sk(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.d=f
_.r=g
_.w=h},
fys:function fys(){},
aSG:function aSG(d,e,f){this.a=d
this.b=e
this.c=f},
bvZ:function bvZ(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=-1},
fcs:function fcs(d,e){this.a=d
this.b=e},
bIZ:function bIZ(d,e,f){var _=this
_.a=d
_.b=e
_.c=0
_.d=f},
bJ_:function bJ_(){},
fT7:function fT7(){},
fT8:function fT8(d){this.a=d},
fT5:function fT5(d,e){this.a=d
this.b=e},
fT6:function fT6(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fuH:function fuH(d){this.a=d},
fuI:function fuI(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
Ac:function Ac(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.x=0},
cy5:function cy5(d,e,f){var _=this
_.a=d
_.b=e
_.d=_.c=$
_.e=f
_.f=null
_.w=_.r=0
_.x=1
_.y=0},
cy7:function cy7(d){this.a=d},
cy8:function cy8(){},
cy6:function cy6(){},
hsJ(d){return d.b==="hq"?12:D.o.E(D.k.bm((210+D.o.F(B.z7[d.f].l(),5)*24)/22),8,14)},
fV4(d,e,f){var w=new A.bIL(d,e,f,B.ayH,B.a2b,C.a([],x.a),C.aX(x.S))
w.at=new A.b8S(null,-138,138,12,316,0,296,3.141592653589793,w.cau())
w.ax=w.cFi()
return w},
px:function px(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bIL:function bIL(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=1
_.r=$
_.x=_.w=!1
_.y=0
_.z=1
_.Q=!0
_.as=i
_.ay=_.ax=_.at=$
_.ch=null
_.CW=j
_.cx=null
_.dx=_.db=_.cy=!1},
bIM:function bIM(){},
bIT:function bIT(d){this.a=d},
bIU:function bIU(d){this.a=d},
bIV:function bIV(d){this.a=d},
bIW:function bIW(d){this.a=d},
bIN:function bIN(d){this.a=d},
bIO:function bIO(){},
bIP:function bIP(){},
bIQ:function bIQ(d){this.a=d},
bIR:function bIR(d){this.a=d},
bIS:function bIS(d){this.a=d},
fVa(d,e){var w=C.a([],x.ha),v=C.a([new A.LR(),new A.LR(),new A.LR()],x.gQ),u=C.a([],x.s),t=new C.eb()
t.d5(e)
w=new A.aT5(d,t,w,v,u)
w.bxZ(d,e)
return w},
h80(d,e){var w,v,u,t,s,r,q,p,o=J.a4(e),n=x.fF,m=n.a(o.h(e,"wired"))
if(m==null)m=D.uC
w=n.a(o.h(e,"plumbed"))
if(w==null)w=D.uC
for(o=d.gqM(),n=o.length,v=J.a4(w),u=J.a4(m),t=0;t<o.length;o.length===n||(0,C.M)(o),++t){s=o[t]
r=""+s.a
q=u.h(m,r)
if(C.qY(q)){s.ay=!q
s.CW=null}p=v.h(w,r)
if(C.qY(p)){r=s.c
r=r==="bathroom"||r==="kitchen"}else r=!1
if(r){s.ch=!p
s.fr=null}}},
fVb(d){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=J.a4(d),j=C.aK(k.h(d,"seed"))
j=j==null?l:D.k.O(j)
if(j==null)j=1
w=C.aK(k.h(d,"clock"))
w=w==null?l:D.k.O(w)
v=A.fVa(j,(w==null?0:w)+7)
j=C.aK(k.h(d,"points"))
j=j==null?l:D.k.O(j)
v.r=j==null?10:j
j=C.aK(k.h(d,"food"))
j=j==null?l:D.k.O(j)
v.w=j==null?8:j
j=C.aK(k.h(d,"medicine"))
j=j==null?l:D.k.O(j)
v.x=j==null?4:j
j=C.aK(k.h(d,"served"))
j=j==null?l:D.k.O(j)
v.y=j==null?0:j
j=C.aK(k.h(d,"saved"))
j=j==null?l:D.k.O(j)
v.z=j==null?0:j
j=C.aK(k.h(d,"clock"))
if(j==null)j=l
v.as=j==null?0:j
j=C.aK(k.h(d,"nextCall"))
j=j==null?l:D.k.O(j)
v.Q=j==null?1:j
j=x.U
u=j.a(k.h(d,"res"))
if(u==null)u=D.cy
w=J.a4(u)
t=x.G
s=0
for(;;){r=v.c
r===$&&C.c()
if(!(s<r.length&&s<w.gL(u)))break
q=t.a(w.h(u,s))
r=v.c[s]
p=J.a4(q)
r.b=C.e5(p.h(q,"hunger"))
r.c=C.e5(p.h(q,"health"))
r.d=C.e5(p.h(q,"comfort"))
r.e=J.A(p.h(q,"sick"),!0)
r.f=!J.A(p.h(q,"alive"),!1)
p=C.aK(p.h(q,"bed"))
p=p==null?l:D.k.O(p)
r.r=p==null?-1:p;++s}o=j.a(k.h(d,"beds"))
if(o==null)o=D.cy
w=J.a4(o)
r=v.e
s=0
for(;;){if(!(s<r.length&&s<w.gL(o)))break
q=t.a(w.h(o,s))
p=r[s]
n=J.a4(q)
p.a=D.k.O(C.e5(n.h(q,"res")))
p.b=C.e5(n.h(q,"care"))
p.c=C.e5(n.h(q,"heal"));++s}k=j.a(k.h(d,"calls"))
k=J.aV(k==null?D.cy:k)
j=v.d
while(k.C()){m=t.a(k.gR(k))
w=J.a4(m)
r=new A.HY(D.k.O(C.e5(w.h(m,"id"))),D.k.O(C.e5(w.h(m,"res"))),C.cP(w.h(m,"kind")),C.cP(w.h(m,"msg")),D.k.O(C.e5(w.h(m,"reward"))))
r.f=C.e5(w.h(m,"age"))
j.push(r)}return v},
aT7(){var w=0,v=C.j(x.dy),u,t=2,s=[],r,q,p,o,n
var $async$aT7=C.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return C.b(C.az(),$async$aT7)
case 7:r=e
q=C.aU(J.q(r.a,"ngmy_community_v1"))
if(q==null){u=null
w=1
break}p=x.b.a(D.T.aN(0,q,null))
u=p
w=1
break
t=2
w=6
break
case 4:t=3
n=s.pop()
u=null
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return C.h(u,v)
case 2:return C.f(s.at(-1),v)}})
return C.i($async$aT7,v)},
aT6(){var w=0,v=C.j(x.H),u=1,t=[],s,r,q
var $async$aT6=C.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
w=6
return C.b(C.az(),$async$aT6)
case 6:s=e
w=7
return C.b(J.hy(s,"ngmy_community_v1"),$async$aT6)
case 7:u=1
w=5
break
case 3:u=2
q=t.pop()
w=5
break
case 2:w=1
break
case 5:return C.h(null,v)
case 1:return C.f(t.at(-1),v)}})
return C.i($async$aT6,v)},
Ff:function Ff(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
OP:function OP(d){var _=this
_.a=d
_.b=25
_.d=_.c=100
_.e=!1
_.f=!0
_.r=-1},
HY:function HY(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=0},
LR:function LR(){this.a=-1
this.b=100
this.c=0},
aT5:function aT5(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=$
_.d=f
_.e=g
_.f=h
_.r=10
_.w=8
_.x=4
_.z=_.y=0
_.Q=1
_.as=0
_.at=45},
bJA:function bJA(){},
bJx:function bJx(d){this.a=d},
bJy:function bJy(d,e){this.a=d
this.b=e},
bJz:function bJz(){},
bJE:function bJE(d){this.a=d},
bJC:function bJC(d){this.a=d},
bJD:function bJD(){},
bJB:function bJB(d){this.a=d},
bJF:function bJF(){},
apk:function apk(d,e){this.c=d
this.a=e},
bjC:function bjC(){var _=this
_.d=null
_.e=$
_.f=null
_.r=$
_.x=_.w=null
_.y=0
_.c=_.a=null},
dPd:function dPd(d,e){this.a=d
this.b=e},
dPe:function dPe(d){this.a=d},
dPq:function dPq(){},
dPk:function dPk(d,e){this.a=d
this.b=e},
dPl:function dPl(d){this.a=d},
dPj:function dPj(d){this.a=d},
dP9:function dP9(){},
dPa:function dPa(){},
dPt:function dPt(){},
dPu:function dPu(){},
dPs:function dPs(d,e){this.a=d
this.b=e},
dPr:function dPr(d,e){this.a=d
this.b=e},
dP8:function dP8(d,e){this.a=d
this.b=e},
dPf:function dPf(d,e,f){this.a=d
this.b=e
this.c=f},
dPg:function dPg(d,e,f){this.a=d
this.b=e
this.c=f},
dPh:function dPh(d,e,f){this.a=d
this.b=e
this.c=f},
dPi:function dPi(d,e){this.a=d
this.b=e},
dPc:function dPc(d,e,f){this.a=d
this.b=e
this.c=f},
dPb:function dPb(d,e,f){this.a=d
this.b=e
this.c=f},
dPn:function dPn(d,e){this.a=d
this.b=e},
dPo:function dPo(d,e){this.a=d
this.b=e},
dPp:function dPp(d){this.a=d},
dPm:function dPm(d){this.a=d},
dPv:function dPv(d){this.a=d},
dPw:function dPw(){},
acs:function acs(d,e,f){this.c=d
this.d=e
this.a=f},
beA:function beA(d,e){this.b=d
this.a=e},
vH(d,e,f,g,h,i,j,k,l,m,n){return new A.SP(g,m,d,k,e,f,n,h,l,i,j)},
t0(d){return D.d.h_($.hwT(),new A.fvi(d))},
bDS(d,e){var w,v,u=d.e,t=new C.N(u,new A.fTI(),C.S(u).k("N<1,n>")).fH(0)
u=e.b
w=C.a6(u).k("bc<2>")
v=C.de(new C.bc(u,w),w.k("J.E"))
return t.d9(0,v.gkM(v))},
hsL(d,e,f,g,h){var w,v
if(e.a&&e.c===0){if(e.r)return"SHOCK! The breaker was still ON and you touched a live wire. Always turn the power OFF and test the wires first."
return"STOP! The breaker is still ON, so these wires are live (120 volts). Turn the breaker OFF first. This can shock you badly."}if(e.c!==0)return"The device is already in the box. Pull it out again to change the wires."
if(!e.r&&!e.y&&!h&&!g.c.q(0,f))return d.r.$2(f,g)
w=e.b
v=g.a
if(w.h(0,v)!=null)return"That place already has a wire. Tap the wire to take it off first."
if(new C.bc(w,C.a6(w).k("bc<2>")).q(0,f))return"That wire is already fastened. Tap it to take it off if you want to move it."
w.n(0,v,f)
return null},
h2s(d,e){var w,v,u,t,s,r,q=new A.fuu(),p=new A.fuv(),o=C.a([],x.bm)
for(w=e.b,w=new C.cH(w,C.a6(w).k("cH<1,2>")).gaf(0),v=d.f,u=d.e;w.C();){t=w.d
t.toString
s=D.d.h_(v,new A.fus(t))
r=D.d.h_(u,new A.fut(t))
o.push(new A.a40(new A.czU(r.a,q.$1(r.e)),new A.cwj(p.$1(s.f))))}return o},
fKZ(d){var w=d.e,v=C.S(w).k("Z<1>")
return new A.bL0(new C.Z(w,new A.fL_(),v).gL(0),new C.Z(w,new A.fL0(),v).gL(0),d.y)},
L_(d,e){var w,v,u,t,s,r,q=A.hod(A.fKZ(d),A.h2s(d,e),e.x),p=q.c,o=new A.fvv(q),n=q.b,m=n.length===0?null:D.d.f9(n,new A.fvs())
n=q.a===B.v0
if(n)w="ok"
else if(o.$1("SHORT")||o.$1("HOT_TO_GROUND"))w="short"
else{if(o.$1("REVERSED"))v="reversed"
else if(o.$1("NEUTRAL_GROUND"))v="bonded"
else if(o.$1("GROUND_AS_CURRENT"))v="groundWire"
else if(o.$1("OPEN_NEUTRAL"))v="openNeutral"
else if(o.$1("UNVERIFIED"))v="unverified"
else v=o.$1("MISSING_GROUND")?"noGround":"dead"
w=v}if(d.x&&!e.y)for(v=e.b,v=new C.cH(v,C.a6(v).k("cH<1,2>")).gaf(0),u=d.f;v.C();){t=v.d
t.toString
s=D.d.h_(u,new A.fvt(t))
if(!s.c.q(0,t.b)){n=s.d
return new A.b8o("dead","The "+D.d.h_(d.e,new A.fvu(t)).b+" is on the wrong terminal ("+s.b+"). "+n,!1,!1,!1,"none",n)}}r=n?"Wired correctly. Hot, neutral and ground are all in the right place, and every safety check passes.":m.c+" "+p.c
n=m==null?null:m.e
if(n==null)n=""
return new A.b8o(w,r,p.d,p.e,p.f,p.b,n)},
h2U(d){var w,v,u
for(w=$.fUl(),v=0;v<10;++v){u=w[v]
if(u.a===d)return u.w}return d},
aNR(d,e){var w
if(d==="light"||d==="fan")w=e.c===0?6.4:0.6
else w=e.c===0?4.7:-0.25
return w},
aP7(d,e,f){var w,v
if(d==="light"||d==="fan"){w=A.aNR(d,f)
v=f.c===0?w-3.2:w
switch(e){case 51:return new A.r(-1.5,-0.3,v)
case 52:return new A.r(0,-0.3,v)
default:return new A.r(1.5,-0.3,v)}}w=A.aNR(d,f)
switch(e){case 21:return new A.r(0.98,-0.2+(d==="gfci"?0.95:0.85),w-0.45)
case 22:return new A.r(0.98,-0.2+(d==="gfci"?-0.75:-0.55),w-0.45)
case 23:return new A.r(-0.98,-0.2+(d==="gfci"?0.95:0.85),w-0.45)
case 24:return new A.r(-0.98,-0.2+(d==="gfci"?-0.75:-0.55),w-0.45)
default:return new A.r(0,-1.98,w+0.52)}},
h2g(b5,b6,b7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=C.a([],x.z),b2=new A.fk(b1),b3=A.h2U(b5.a),b4=b3==="light"||b3==="fan"
if(b7){b2.b=1
b2.hm(B.h1Z,B.aVo,B.vz,3)
b2.hm(B.h3c,B.aVo,B.vz,3)
b2.hm(B.h5V,B.aVK,B.vz,2)
b2.hm(B.h3O,B.aVK,B.vz,2)
b2.b=2
b2.n6(B.h1x,B.aVi,B.jp,0.05,3)
b2.n6(B.h0Y,B.aVi,B.jp,0.05,3)
b2.n6(B.h0R,B.h6q,B.jp,0.05,2)}w=b5.w.length===0
v=A.hjq(b2,w?b3:"outlet",!0)
u=new A.fsJ(b2,b6,b3,b4)
t=D.d.gI(v)
s=!w
if(s){r=b5.e
q=r.length
for(p=t.a,o=t.b+0,n=t.c,m=q-1,l=q===1,k=0;k<q;++k){j=r[k]
i=l?0:k/m-0.5
h=D.o.F(k,2)
if(j.e==="ground")g=B.vH
else{g=j.c
if(g.A(0,B.oK))g=B.oK}u.$5(60+k,new A.r(p+i*0.5,o,n+0.04*k),new A.r(i*3.6,-1.7-0.12*h,2.3+0.15*k),j.a,g)}}else if(b3==="switch"){f=D.d.gal(v)
u.$5(10,t.a9(0,B.fV6),B.h5Y,"blackLine",B.Ls)
u.$5(13,f.a9(0,B.h65),B.h_d,"blackLoad",B.Ls)
u.$5(12,t.a9(0,B.h2M),B.fZr,"ground",B.vH)
b2.b=6
r=x.o
b2.jf(C.a([t.a9(0,B.aVf),B.fVO,B.UT],r),0.075,B.oK,!1,0.3,8)
b2.jf(C.a([f.a9(0,B.aVf),B.h23,B.UT],r),0.075,B.oK,!1,0.3,8)
b2.By(B.UT,B.h5Q,0.28,B.adO,0.18,0.3,10)}else{u.$5(10,t.a9(0,B.h_m),B.fVB,"black",B.Ls)
u.$5(11,t.a9(0,B.h0L),B.h2e,"white",B.oK)
u.$5(12,t.a9(0,B.h18),B.h0Z,"ground",B.vH)}if(b4)A.hkq(b2,b3,b6)
else A.hk4(b2,b3,A.aNR(b3,b6),b6.w,!1,s)
if(b6.e&&b6.c===0){b2.b=0
b2.d=0.5
for(r=b5.f,p=r.length,e=0;e<p;++e){d=r[e]
a0=A.aP7(b3,d.a,b6)
if(d.e)a1=D.bI
else{o=d.f
if(o==="ground")a1=D.be
else{o=o==="neutral"?D.c:B.Xg
a1=o}}if(b4)o=0
else{o=a0.a
if(o>0.4)o=0.12
else o=o<-0.4?-0.12:0}if(b4)n=0.6
else n=Math.abs(a0.a)<0.4?0.2:0
b2.fT(new A.r(a0.a+o,a0.b+0,a0.c+n),0.36,a1,4,8,0.1)}b2.d=1}if(b6.c>=2&&!b4)A.hmt(b2,b6.w)
r=!1
if(b6.c>=2)if(b6.d)r=b3==="outlet"||b3==="gfci"
if(r)A.i0V(b2,b6.a&&!b6.w)
r=b4?"Ceiling box":"Electrical box"
p=b3==="fan"
o=p?' A fan needs a box that says "fan rated".':""
n=b3==="switch"
m=n?"Cable from the breaker panel (LINE)":"NM-B cable (Romex)"
l=b4?"It joins the fixture black wire with a wire nut.":"It goes on a brass screw."
h=b4?"It joins the fixture white wire.":"It goes on a silver screw."
g=b4?"It joins the green fixture ground wire.":"It goes on the green screw."
a2=b3==="gfci"
if(a2)a3="GFCI outlet"
else a3=n?"Light switch":"Receptacle (outlet)"
if(a2)n="It checks that the current going out equals the current coming back. If some leaks (through water or a person) it shuts off in a fraction of a second."
else n=n?"A rocker that opens and closes the black wire to the light.":"The outlet. Each side has two slots and a ground hole. The short slot is hot, the long slot is neutral."
a2=A.aNR(b3,b6)
a4=p?"Ceiling fan":"Ceiling light"
p=p?"The motor housing with blades. It has three wires: black (motor), white (neutral) and green (ground).":"The light fixture with a frosted dome. It has three wires: black, white and green."
a5=C.G([1,B.e87,2,B.e8l,3,new A.cW(r,"A box that holds the wire connections. Every connection must be inside a box, never loose in the wall or the ceiling."+o,new A.r(0,0,-1.2),9),4,new A.cW(m,"The yellow jacket holds three wires: black (hot), white (neutral) and bare copper (ground). Yellow means 12 gauge wire for a 20 amp circuit. White jackets are 14 gauge for 15 amps.",new A.r(-0.4,1.5,-1.8),8),5,B.e8I,10,new A.cW("Black wire: hot","The hot wire brings the power from the breaker. It is the dangerous one. "+l,new A.r(-0.8,-0.8,1.2),7),13,B.e7U,11,new A.cW("White wire: neutral","The neutral wire carries the power back to the panel. "+h,new A.r(0,-0.8,1.2),7),12,new A.cW("Bare copper wire: ground","The ground wire is a safety path. If a wire touches metal, the current runs down the ground instead of through you. "+g,new A.r(0.5,-0.8,1.2),7),6,B.e8j,20,new A.cW(a3,n,new A.r(0,-0.2,a2),9),21,B.e8o,22,B.e8H,23,B.e8h,24,B.e8m,25,B.e8a,26,B.e8p,27,B.e8B,28,B.e85,30,B.e7P,31,B.e7N,51,B.e8k,52,B.e7R,53,B.e8t,54,new A.cW(a4,p,new A.r(0,0,6.4),9),55,B.e8D],x.S,x.q)
if(s){a5.n(0,20,new A.cW(b5.b,b5.c,new A.r(0,-0.2,A.aNR(b3,b6)),9))
for(s=b5.e,r=s.length,k=0;k<r;++k)a5.n(0,60+k,new A.cW(s[k].b,"Pick this wire up, then tap the screw it belongs on. Tap it again on the screw to take it off.",new A.r(-0.8+k*0.5,-0.8,1.2),7))
for(s=b5.f,r=s.length,e=0;e<r;++e){a6=s[e]
p=a6.a
a5.n(0,p,new A.cW(a6.b,a6.d,A.aP7(b3,p,b6),5))}}a7=C.a([],x.E)
if(b6.f&&b6.c===0)for(s=b5.f,r=s.length,e=0;e<r;++e){d=s[e]
a0=A.aP7(b3,d.a,b6)
a8=d.f
A:{p="hot"===a8
if(p){o=B.eMZ
break A}if("neutral"===a8){o=B.eDd
break A}if("ground"===a8){o=B.eFI
break A}o=B.eso
break A}a9=o.a
if(b4){B:{if(p){n="BLACK NUT \xb7 HOT"
break B}if("neutral"===a8){n="WHITE NUT \xb7 NEUTRAL"
break B}n="GROUND"
break B}i=n}else i=w?a9:d.b
if(b4){C:{if(p){p=B.h0n
break C}if("neutral"===a8){p=B.h0i
break C}p=B.h6D
break C}b0=p}else{p=a0.a
if(p>0.4)n=3.8
else n=p<-0.4?-4.2:0
b0=new A.r(n,Math.abs(p)<0.4?-3:-0.4,1)}a7.push(new A.hf(new A.r(a0.a+b0.a,a0.b+b0.b,a0.c+b0.c),i,o.b,0))}if(b6.a&&b6.c===0)a7.push(B.bZ7)
return new A.tI(b1,a5,a7,B.wr,null,0)},
hjq(d,e,f){var w,v,u=e==="light"||e==="fan"
d.b=3
if(u){d.dQ(B.aVM,B.aVn,2.2,B.xN,0.3,18)
d.T0(B.aVn,B.f_,2.2,B.xN,!1,!0,0.3,18)}else{d.aY(B.aVM,B.h1G,B.xN,0.3)
d.aY(B.fZS,B.aV3,B.xN,0.3)
d.aY(B.fWv,B.aV3,B.xN,0.3)
d.aY(B.h0U,B.aVs,B.xN,0.3)
d.aY(B.h0g,B.aVs,B.xN,0.3)}w=C.a([],x.o)
v=new A.feb(d,f,w)
if(e==="switch"){v.$2(4,B.d_J)
v.$2(5,B.cYR)}else v.$2(4,B.dbS)
return w},
hsQ(d,e){var w,v=$.fUl(),u=new C.Z(v,new A.fTH(d),C.S(v).k("Z<1>"))
if(!u.gam(0)){w=e-60
return w>=0&&w<u.gI(0).e.length?u.gI(0).e[w].a:null}return A.hWz(d,e)},
hWz(d,e){var w
A:{if(10===e){w=d==="switch"?"blackLine":"black"
break A}if(13===e){w="blackLoad"
break A}if(11===e){w="white"
break A}if(12===e){w="ground"
break A}w=null
break A}return w},
hk4(d,e,f,g,h,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k=new A.r(0,-0.2,f),j=e==="switch",i=e==="gfci"
if(g)w=B.xI
else w=j?B.bhV:B.XT
v=i?3.1:2.95
d.e=0
d.b=20
if(!h){d.aY(k.a9(0,B.fYB),new A.r(1.5,v,1.3),w,0.25)
d.e=0.15
d.b=26
u=k.a9(0,B.fYj)
d.aY(u,B.h5S,g?B.bex:B.LM,0.8)
d.aO(k.a9(0,B.h2J),B.h7C,B.ER)}d.e=0.3
d.b=27
u=k.a9(0,B.h_Q)
d.aY(u,new A.r(1.3,i?2.85:2.7,0.16),w,0.3)
if(j){d.e=0.7
d.b=28
u=k.a9(0,B.h21)
d.aY(u,B.h_k,g?B.xI:G.Y4,0.35)
u=k.a9(0,B.h5p)
d.aY(u,B.h3N,g?B.xI:B.aeB,0.35)}else{d.e=0.6
u=i?E.atX:B.dp7
t=u.length
s=f+0.47
r=f+0.46
q=f+0.5
p=0
for(;p<t;++p){o=u[p]
d.b=27
n=-0.2+(o+0.04)
d.aO(new A.r(-0.28,n,s),B.h1F,B.F1)
d.aO(new A.r(0.28,n,s),B.h_X,B.F1)
n=-0.2+(o-0.32)
d.dL(new A.r(0,n,r),new A.r(0,n,q),0.11,B.F1,10)}if(i){d.e=0.7
d.b=28
d.aY(k.a9(0,B.h2r),B.aV9,B.blw,0.3)
d.aY(k.a9(0,B.h66),B.aV9,B.ahj,0.3)}}if(h){d.e=0
return}m=i?0.95:0.85
l=i?-0.75:-0.55
u=new A.ffv(d,k)
if(!j||a0){u.$6$taped(23,-1,m,B.aeZ,B.afv,i)
u.$5(24,-1,l,B.aeZ,B.afv)}u.$6$taped(21,1,m,B.Xg,B.agO,i)
u.$5(22,1,l,B.Xg,B.agO)
d.e=0.9
d.b=25
d.dQ(k.a9(0,B.h0S),k.a9(0,B.h6I),0.18,B.bnC,0.7,12)
d.aO(k.a9(0,B.h0k),B.h0W,D.dY)
d.aY(k.a9(0,B.fYL),B.h2w,B.baX,0.6)
d.e=0},
hkq(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=e==="fan",i=A.aNR(e,f)
d.e=0
d.b=55
w=i-0.3
v=i+0.3
u=j?3.3:3.5
t=f.w?B.xI:B.bis
d.dQ(new A.r(0,0,w),new A.r(0,0,v),u,t,0.45,20)
d.b=54
if(j){u=i+4.2
d.dQ(new A.r(0,0,v),new A.r(0,0,u),0.45,B.ber,0.5,10)
v=i+7.4
d.dQ(new A.r(0,0,u),new A.r(0,0,v),3.6,B.WN,0.5,18)
d.dQ(new A.r(0,0,v),new A.r(0,0,i+8.6),1.6,B.bmQ,0.7,14)}else{d.d=0.92
v=f.w?B.xI:B.bfw
d.fT(new A.r(0,0,i+1.2),3.6,v,6,14,0.7)
d.d=1}v=d.b=54
s=[B.eDm,B.epa,B.eKE]
for(u=x.o,r=i-3.2,q=0,p=0;p<3;++p){t=s[p]
o=f.c===0
d.b=o?B.cCz[q]:v;++q
n=o?r:i
o=t.b.a
d.jf(C.a([new A.r(o,-0.3,w),new A.r(o,-0.3,n+0.4)],u),0.07,t.a,!1,0.3,6)}if(f.c===0)for(w=[B.ewi,B.eES,B.eNq],v=f.b,p=0;p<3;++p){m=w[p]
u=m.a
l=A.aP7(e,u,f)
d.b=u
d.e=0.8
t=l.a+0
o=l.b+0
k=l.c
d.dQ(new A.r(t,o,k+-0.2),new A.r(t,o,k+0.3),0.09,B.vH,0.6,6)
if(v.ai(0,u))d.By(new A.r(t,o,k+-0.5),new A.r(t,o,k+0.9),0.4,m.b,0.26,0.4,8)
d.e=0}},
hmt(d,e){var w
d.e=0.4
d.b=30
w=e?B.xI:B.ba3
d.aY(B.h2j,B.aVu,w,0.3)
d.aY(B.h1v,B.aVu,w,0.3)
d.aY(B.fWp,B.aVD,w,0.3)
d.aY(B.fXs,B.fYX,w,0.3)
d.aY(B.h6A,B.aVD,w,0.3)
d.dQ(B.h03,B.h1r,0.1,B.LM,0.8,10)
d.e=0},
i0V(d,e){var w,v
d.b=31
for(w=0;w<2;++w){v=B.d2i[w]
d.dQ(new A.r(v,0.52,0.2),new A.r(v,0.52,1.9),0.04,B.LM,0.8,6)}d.aY(B.fTy,B.h5E,B.bfa,0.35)
d.baZ(B.aVp,0.2,e?D.Xi:B.bjc,0.9)
if(e){d.d=0.35
d.fT(B.aVp,0.5,D.Xi,4,8,0)
d.d=1}},
fH:function fH(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
Cu:function Cu(d){var _=this
_.a=!0
_.b=d
_.c=0
_.w=_.r=_.f=_.e=_.d=!1
_.x=!0
_.y=!1
_.z=""},
jy:function jy(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
SP:function SP(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
fwC:function fwC(){},
fwD:function fwD(){},
fwE:function fwE(){},
fwF:function fwF(){},
fwG:function fwG(){},
fvi:function fvi(d){this.a=d},
fTI:function fTI(){},
b8o:function b8o(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.r=i
_.w=j},
fuu:function fuu(){},
fuv:function fuv(){},
fus:function fus(d){this.a=d},
fut:function fut(d){this.a=d},
fL_:function fL_(){},
fL0:function fL0(){},
fvv:function fvv(d){this.a=d},
fvw:function fvw(d){this.a=d},
fvs:function fvs(){},
fvt:function fvt(d){this.a=d},
fvu:function fvu(d){this.a=d},
fsJ:function fsJ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fsK:function fsK(d){this.a=d},
feb:function feb(d,e,f){this.a=d
this.b=e
this.c=f},
fTH:function fTH(d){this.a=d},
ffv:function ffv(d,e){this.a=d
this.b=e},
agx(d){var w
A:{if("outlet"===d){w="Outlet"
break A}if("gfci"===d){w="GFCI outlet"
break A}if("switch"===d){w="Light switch"
break A}if("light"===d){w="Ceiling light"
break A}if("fan"===d){w="Ceiling fan"
break A}w=A.t0(d).b
break A}return w},
fwH:function fwH(){},
fwI:function fwI(){},
fwJ:function fwJ(){},
fwK:function fwK(){},
fwL:function fwL(){},
fwM:function fwM(){},
fwN:function fwN(){},
fwO:function fwO(){},
fwP:function fwP(){},
fwQ:function fwQ(){},
aOX(d){return D.d.dM(B.a2V,new A.fsu(d),new A.fsv())},
h5f(d,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i={},h=new A.fTE(),g=new A.fTB(),f=d.c,e=f==="hall"
if(!e&&d.p1!=="back"){w=a0.e?d.ghn(0)-14:Math.min(a0.d,d.ghn(0)-14)
v=h.$1(w)
return new A.abr(w,v,d.ghn(0)/2,g.$1(v))}if(e&&a1<2){w=a0.e?d.ghn(0)-14:Math.min(a0.d,d.ghn(0)-14)
v=h.$1(w)
return new A.abr(w,v,d.ghn(0)/2,g.$1(v))}if(e){f=C.a([],x.n)
for(e=d.w,u=e.length,t=0;t<e.length;e.length===u||(0,C.M)(e),++t){s=e[t]
if(s.b==="back"&&!s.a)f.push(s.c)}r=f.length===0?-40:D.d.f9(f,D.vt)-19-8
q=f.length===0?40:D.d.f9(f,D.pB)+19+8
p=d.gev(0)/2-8
f=a1===2?(-p+r)/2:(q+p)/2
return new A.abr(p-q,106,f,61)}e=d.gev(0)
q=d.gev(0)/2-6
if(f==="bathroom"&&!d.ok)q=14
f=C.a([],x.f)
for(u=d.w,o=u.length,t=0;t<u.length;u.length===o||(0,C.M)(u),++t){s=u[t]
if(s.b==="back"&&!s.a){n=s.c
f.push(new C.z(n-19,n+19))}}D.d.aV(f,new A.fTC())
m=i.a=i.b=-e/2+6
l=new A.fTD(i)
for(e=f.length,t=0;t<f.length;f.length===e||(0,C.M)(f),++t){u=f[t]
k=u.a
if(k>m)l.$2(m,Math.min(k,q))
m=Math.max(m,u.b)}if(m<q)l.$2(m,q)
j=Math.max(30,i.a-i.b-4)
w=a0.e?j:Math.min(a0.d,j)
v=h.$1(w)
return new A.abr(w,v,(i.b+i.a)/2,g.$1(v))},
zc(d,e,f,g,h,i,j,k){var w=x.S
return new A.a51(d,e,f,g,h,i,j,k,C.a([],x._),C.a([0,0,0],x.t),C.aX(w),C.T(w,x.i),C.T(w,x.cR),C.T(w,w),C.T(w,x.gh),C.T(w,x.N),C.a([],x.cX),C.aX(w),C.aX(w))},
aVw(d){var w=new A.aVv(d)
w.c6x()
return w},
hBT(d){var w=new A.aVv(7)
w.byb(d)
return w},
ifI(d){var w,v=d.c
A:{if("bedroom"===v){w=1
break A}if("kitchen"===v||"bathroom"===v){w=2
break A}w=0
break A}return w},
ma:function ma(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.f=_.e=0},
fn:function fn(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
DX:function DX(d,e,f){this.a=d
this.b=e
this.c=f},
pO:function pO(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fsu:function fsu(d){this.a=d},
fsv:function fsv(){},
abr:function abr(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fTE:function fTE(){},
fTB:function fTB(){},
fTC:function fTC(){},
fTD:function fTD(d){this.a=d},
oh:function oh(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aVq:function aVq(d,e,f){this.a=d
this.b=e
this.c=f},
a51:function a51(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v){var _=this
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
_.CW=null
_.cx=p
_.cy=q
_.db=r
_.fr=_.dy=_.dx=null
_.fx=s
_.fy=!1
_.go="light"
_.id=t
_.k2=_.k1=null
_.k3=u
_.k4=v
_.ok=!1
_.p1="back"
_.p2=!1
_.p3=0
_.p4=""
_.RG=_.R8=null},
bSz:function bSz(){},
bSy:function bSy(){},
aVv:function aVv(d){var _=this
_.a=""
_.b=d
_.c=!1
_.d=$
_.e=0},
bT9:function bT9(){},
bTa:function bTa(){},
bTb:function bTb(d){this.a=d},
bTc:function bTc(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bTd:function bTd(d,e){this.a=d
this.b=e},
bTh:function bTh(d){this.a=d},
bTe:function bTe(d,e){this.a=d
this.b=e},
bTg:function bTg(d,e,f){this.a=d
this.b=e
this.c=f},
bTf:function bTf(d,e,f){this.a=d
this.b=e
this.c=f},
bTl:function bTl(){},
bTk:function bTk(){},
bTj:function bTj(){},
bTi:function bTi(){},
b_Z(d,e,f){return new A.IM(!1,d,e,null)},
hoc(d){var w=A.vs(B.ij,d.e*3.141592653589793/2)
return new C.z(w.a,w.c)},
i2l(b3,b4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8=null,a9="A helicopter with its billboard",b0={},b1=C.a([],x.dI),b2=x.o
b0.a=C.a([],b2)
b0.b=C.a([],b2)
b0.c=C.a([],x.s)
b0.d=!1
w=new A.ft3(b0,b1)
v=new A.fta(b0)
u=new A.ft5(b3)
t=new A.ftb(b3)
s=new A.fsW(new A.ft4(t),new A.ft1(t,u))
r=new A.ft7(b0,u,s,v)
q=new A.ft8(b0,new A.ft9(r),s)
p=new A.ft6(b0,w,b1)
b2=D.d.q(B.de_,b4)
o=!b2
n=x._
m=C.a([],n)
for(l=b3.x,k=l.length,j=0;j<l.length;l.length===k||(0,C.M)(l),++j){i=l[j]
h=i.b
if(h==="billboard"||h==="cornersign"||h==="adboard"||h==="tower"||h==="hq")m.push(i)}k=C.S(l).k("Z<1>")
g=new C.Z(l,new A.fsX(),k)
h=C.a([],n)
for(f=l.length,j=0;j<l.length;l.length===f||(0,C.M)(l),++j){i=l[j]
e=i.b
if(e==="house2"||e==="bighouse")h.push(i)}v.$3$note(B.fSE,B.fRJ,"Welcome to NGMY Town")
if(!g.gam(0))q.$1(g.gI(0))
if(b4==="city"||o){v.$2(B.h57,B.h4u)
v.$2(B.h5c,B.h4t)
v.$2(B.fS4,B.fQJ)
v.$2(B.fXC,B.fUp)
v.$2(B.fXx,B.fUq)
v.$2(B.fSo,B.fQL)
w.$1$speed(200)}if(b4==="billboards"||o){d={}
v.$2(B.h4P,B.h4K)
v.$3$note(B.fRV,B.Ac,"The big NGMY logo board: New Global Movement for Youth")
v.$2(B.fU8,B.Ac)
v.$2(B.fUX,B.Ac)
v.$2(B.fSU,B.Ac)
v.$2(B.h4j,B.Ac)
v.$2(B.h4B,B.Ac)
v.$2(B.h4c,B.h4v)
d.a=!g.gaf(0).C()?B.fQK:new A.r(g.gI(0).c,0,g.gI(0).d)
a0=C.C(m,x.eB)
a1=0
for(;;){if(a0.length!==0)m=a1<(o?8:80)
else m=!1
if(!m)break
D.d.aV(a0,new A.fsY(d))
i=D.d.cG(a0,0)
q.$1(i)
d.a=new A.r(i.c,0,i.d);++a1}w.$1$speed(105)
for(a2=0;a2<2;++a2)b1.push(new A.Mc(B.ry,B.ry,130,6,a9,a8,!1,a8,a2))}if(b4==="edges"){n=C.a([],n)
for(m=l.length,j=0;j<l.length;l.length===m||(0,C.M)(l),++j){i=l[j]
f=i.b
if(f==="adboard"||f==="cornersign")n.push(i)}D.d.aV(n,new A.fsZ(new A.fsV()))
for(m=n.length,j=0;j<n.length;n.length===m||(0,C.M)(n),++j){i=n[j]
f=b0.a
if(f.length>1){a3=D.d.gal(f)
f=i.c
e=i.d
v.$2(new A.r((a3.a+f)/2,430,(a3.c+e)/2),new A.r(f,100,e))}q.$1(i)}w.$1$speed(150)}if(b4==="houses"||o){a2=0
for(;;){n=h.length
if(a2<n)m=a2<(o?2:5)
else m=!1
if(!m)break
i=h[(a2*5+1)%n]
r.$7$note(i,150,50,270,330,70,i.b==="bighouse"?"A big house with TV windows":"A house");++a2}a4=new C.Z(h,new A.ft_(),x.am)
if(!a4.gam(0)){i=a4.gI(0)
a5=A.hoc(i)
n=i.c
m=i.d
v.$2(new A.r(n+a5.a*220,110,m+a5.b*220),new A.r(n,45,m))
p.$1(i)}}if(b4==="hospital"||o)for(j=0;j<3;++j){a6=B.df5[j]
i=new C.Z(l,new A.ft0(a6),k)
if(!i.gaf(0).C())continue
a7=i.gaf(0)
if(!a7.C())C.b8(C.ft())
r.$7$note(a7.gR(0),160,50,300,360,60,"The "+a6)
a7=i.gaf(0)
if(!a7.C())C.b8(C.ft())
p.$1(a7.gR(0))}w.$0()
if(b4==="traffic"||o){if(b2){for(a2=0;a2<2;++a2)b1.push(new A.Mc(B.ry,B.ry,130,6,a9,a8,!1,a8,a2))
o=!1}a2=0
for(;;){if(a2<4)b2=a2<(o?2:4)
else b2=!1
if(!b2)break
b1.push(new A.Mc(B.ry,B.ry,130,6,B.kj[a2].a==="bus"?"A self-driving bus with its billboards":"A self-driving police car",a8,!1,a2,a8));++a2}}return b1},
IM:function IM(d,e,f,g){var _=this
_.d=d
_.f=e
_.r=f
_.a=g},
aE3:function aE3(d,e,f,g,h,i,j,k,l,m,n,o,p,q){var _=this
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
_.fx=null
_.fy=""
_.id=_.go=!1
_.k1=0
_.k4=_.k3=_.k2=!1
_.p2=_.p1=_.ok=null
_.p3=f
_.R8=_.p4=!1
_.RG=null
_.rx=g
_.to=_.ry=0
_.x1=h
_.x2=i
_.xr=j
_.y1=null
_.y2=!1
_.bi=k
_.b8=!1
_.Z=l
_.az=null
_.aE=0
_.aK=!1
_.b1=_.aB=null
_.bK=_.bb=_.b0=0
_.aH=null
_.bh=!1
_.bD=null
_.c7=0
_.c5=m
_.cK=null
_.cl=n
_.P=_.bz=null
_.T=0
_.bI=o
_.bu=null
_.bW=0
_.f_=_.er=_.eh=!1
_.ab=1
_.ex=400
_.ah=_.fw=!1
_.bA=_.ak=null
_.bZ=0
_.dt=""
_.cI=null
_.eG=p
_.hK=_.hJ=0
_.ja=-1
_.iL=q
_.h3=!1
_.mI=_.l9=-1e5
_.lu=0
_.c=_.a=_.qL=_.t0=null},
e9S:function e9S(){},
e9P:function e9P(d){this.a=d},
e9Q:function e9Q(d){this.a=d},
e9O:function e9O(){},
e9R:function e9R(d){this.a=d},
e8C:function e8C(d,e,f){this.a=d
this.b=e
this.c=f},
e8D:function e8D(d){this.a=d},
e8B:function e8B(d){this.a=d},
e8E:function e8E(d,e){this.a=d
this.b=e},
e7a:function e7a(d,e){this.a=d
this.b=e},
e94:function e94(d){this.a=d},
e87:function e87(d){this.a=d},
e88:function e88(d,e){this.a=d
this.b=e},
e89:function e89(d,e){this.a=d
this.b=e},
e8a:function e8a(d,e){this.a=d
this.b=e},
e8b:function e8b(d){this.a=d},
e6E:function e6E(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e6C:function e6C(d,e,f){this.a=d
this.b=e
this.c=f},
e6B:function e6B(d,e){this.a=d
this.b=e},
e6D:function e6D(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e6z:function e6z(d,e){this.a=d
this.b=e},
e6A:function e6A(d,e,f){this.a=d
this.b=e
this.c=f},
e6y:function e6y(d,e){this.a=d
this.b=e},
e6N:function e6N(d){this.a=d},
e6O:function e6O(d){this.a=d},
e6P:function e6P(d){this.a=d},
e80:function e80(d){this.a=d},
e82:function e82(d){this.a=d},
e81:function e81(d){this.a=d},
e83:function e83(d){this.a=d},
e8_:function e8_(d){this.a=d},
e84:function e84(d){this.a=d},
e7Z:function e7Z(d){this.a=d},
e85:function e85(d){this.a=d},
e7Y:function e7Y(d){this.a=d},
e86:function e86(d){this.a=d},
e7X:function e7X(d){this.a=d},
e6e:function e6e(d){this.a=d},
e6f:function e6f(d){this.a=d},
e6Z:function e6Z(d){this.a=d},
e70:function e70(d){this.a=d},
e7_:function e7_(d){this.a=d},
e71:function e71(d){this.a=d},
e6Y:function e6Y(d){this.a=d},
e72:function e72(d){this.a=d},
e6X:function e6X(d){this.a=d},
e73:function e73(d){this.a=d},
e6W:function e6W(d){this.a=d},
e74:function e74(d){this.a=d},
e6V:function e6V(d){this.a=d},
e75:function e75(d){this.a=d},
e6U:function e6U(d){this.a=d},
e76:function e76(d){this.a=d},
e6T:function e6T(d){this.a=d},
e92:function e92(){},
e93:function e93(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
e90:function e90(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e9_:function e9_(d){this.a=d},
e91:function e91(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e7o:function e7o(d){this.a=d},
e5d:function e5d(){},
e9v:function e9v(){},
e5E:function e5E(){},
e7j:function e7j(d){this.a=d},
e7i:function e7i(d){this.a=d},
e7k:function e7k(d){this.a=d},
e7h:function e7h(d){this.a=d},
e9w:function e9w(d,e){this.a=d
this.b=e},
e9u:function e9u(d){this.a=d},
e8I:function e8I(d,e,f){this.a=d
this.b=e
this.c=f},
e8J:function e8J(d,e){this.a=d
this.b=e},
e8H:function e8H(d,e){this.a=d
this.b=e},
e8G:function e8G(d){this.a=d},
e8F:function e8F(d){this.a=d},
e7I:function e7I(){},
e7J:function e7J(){},
e7F:function e7F(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
e7H:function e7H(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e7G:function e7G(d){this.a=d},
e7D:function e7D(d){this.a=d},
e7C:function e7C(d){this.a=d},
e7E:function e7E(d,e){this.a=d
this.b=e},
e7B:function e7B(d,e){this.a=d
this.b=e},
e77:function e77(d){this.a=d},
e78:function e78(d){this.a=d},
e8y:function e8y(){},
e6L:function e6L(d){this.a=d},
e6K:function e6K(d){this.a=d},
e6M:function e6M(d,e){this.a=d
this.b=e},
e6x:function e6x(d){this.a=d},
e7p:function e7p(){},
e8K:function e8K(d,e){this.a=d
this.b=e},
e6J:function e6J(){},
e8V:function e8V(d){this.a=d},
e6H:function e6H(d){this.a=d},
e6I:function e6I(d,e){this.a=d
this.b=e},
e6G:function e6G(d){this.a=d},
e6F:function e6F(d){this.a=d},
e7e:function e7e(){},
e8U:function e8U(d,e){this.a=d
this.b=e},
e9J:function e9J(){},
e6g:function e6g(){},
e7b:function e7b(d,e){this.a=d
this.b=e},
e7c:function e7c(d){this.a=d},
e7d:function e7d(){},
e6R:function e6R(){},
e6S:function e6S(d){this.a=d},
e7r:function e7r(){},
e7s:function e7s(d,e){this.a=d
this.b=e},
e5L:function e5L(){},
e5K:function e5K(){},
e5M:function e5M(d){this.a=d},
e5J:function e5J(d){this.a=d},
e5N:function e5N(d){this.a=d},
e5I:function e5I(d){this.a=d},
e5O:function e5O(d,e){this.a=d
this.b=e},
e5H:function e5H(d){this.a=d},
e5P:function e5P(d,e){this.a=d
this.b=e},
e5G:function e5G(d,e){this.a=d
this.b=e},
e5Q:function e5Q(d){this.a=d},
e5F:function e5F(d){this.a=d},
e6c:function e6c(d){this.a=d},
e6d:function e6d(d){this.a=d},
e8x:function e8x(d,e,f){this.a=d
this.b=e
this.c=f},
e8v:function e8v(d,e,f){this.a=d
this.b=e
this.c=f},
e8w:function e8w(d,e){this.a=d
this.b=e},
e8r:function e8r(d,e,f){this.a=d
this.b=e
this.c=f},
e8q:function e8q(){},
e8s:function e8s(d,e){this.a=d
this.b=e},
e8t:function e8t(d,e){this.a=d
this.b=e},
e8u:function e8u(d,e){this.a=d
this.b=e},
e8h:function e8h(d,e){this.a=d
this.b=e},
e8e:function e8e(){},
e8f:function e8f(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e8d:function e8d(d,e,f){this.a=d
this.b=e
this.c=f},
e8g:function e8g(d,e,f){this.a=d
this.b=e
this.c=f},
e8c:function e8c(d,e){this.a=d
this.b=e},
e9t:function e9t(d){this.a=d},
e9r:function e9r(d){this.a=d},
e9s:function e9s(d,e){this.a=d
this.b=e},
e9j:function e9j(d,e,f){this.a=d
this.b=e
this.c=f},
e9i:function e9i(){},
e9k:function e9k(){},
e9l:function e9l(d,e){this.a=d
this.b=e},
e9m:function e9m(d,e){this.a=d
this.b=e},
e9n:function e9n(d){this.a=d},
e9o:function e9o(d){this.a=d},
e9p:function e9p(d){this.a=d},
e9q:function e9q(d){this.a=d},
e9f:function e9f(d){this.a=d},
e9d:function e9d(d){this.a=d},
e9e:function e9e(){},
e99:function e99(d,e,f){this.a=d
this.b=e
this.c=f},
e97:function e97(d){this.a=d},
e98:function e98(){},
e9a:function e9a(d,e,f){this.a=d
this.b=e
this.c=f},
e96:function e96(d,e){this.a=d
this.b=e},
e9b:function e9b(d,e){this.a=d
this.b=e},
e9c:function e9c(d,e){this.a=d
this.b=e},
e8R:function e8R(d,e){this.a=d
this.b=e},
e8S:function e8S(d){this.a=d},
e8T:function e8T(){},
e9g:function e9g(d,e){this.a=d
this.b=e},
e95:function e95(d,e){this.a=d
this.b=e},
e8Y:function e8Y(d){this.a=d},
e8Z:function e8Z(){},
e8Q:function e8Q(){},
e8X:function e8X(){},
e9E:function e9E(d){this.a=d},
e9F:function e9F(d){this.a=d},
e9G:function e9G(d){this.a=d},
e9H:function e9H(){},
e9x:function e9x(d){this.a=d},
e9y:function e9y(d){this.a=d},
e9z:function e9z(d,e){this.a=d
this.b=e},
e9A:function e9A(d,e){this.a=d
this.b=e},
e9B:function e9B(d,e){this.a=d
this.b=e},
e9C:function e9C(d,e){this.a=d
this.b=e},
e9D:function e9D(d,e){this.a=d
this.b=e},
e6Q:function e6Q(){},
e7w:function e7w(d){this.a=d},
e7t:function e7t(){},
e7u:function e7u(){},
e7v:function e7v(){},
e7f:function e7f(){},
e7g:function e7g(d){this.a=d},
e8L:function e8L(){},
e79:function e79(d){this.a=d},
e8z:function e8z(){},
e8A:function e8A(d){this.a=d},
e8M:function e8M(d){this.a=d},
e8N:function e8N(d){this.a=d},
e7m:function e7m(d){this.a=d},
e7l:function e7l(d){this.a=d},
e7n:function e7n(d){this.a=d},
e8O:function e8O(d){this.a=d},
e8P:function e8P(){},
e8W:function e8W(d){this.a=d},
e7L:function e7L(){},
e7M:function e7M(d){this.a=d},
e7U:function e7U(d){this.a=d},
e7V:function e7V(){},
e7W:function e7W(d){this.a=d},
e7O:function e7O(d){this.a=d},
e7P:function e7P(d,e){this.a=d
this.b=e},
e7N:function e7N(d,e){this.a=d
this.b=e},
e7Q:function e7Q(d,e){this.a=d
this.b=e},
e7T:function e7T(d){this.a=d},
e7R:function e7R(d){this.a=d},
e7K:function e7K(d){this.a=d},
e7S:function e7S(d){this.a=d},
e7x:function e7x(d){this.a=d},
e7y:function e7y(d){this.a=d},
e9I:function e9I(d){this.a=d},
e7A:function e7A(d){this.a=d},
e7z:function e7z(d){this.a=d},
e5c:function e5c(d){this.a=d},
e5b:function e5b(d,e,f){this.a=d
this.b=e
this.c=f},
e56:function e56(){},
e57:function e57(){},
e58:function e58(d){this.a=d},
e59:function e59(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e7q:function e7q(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
e9h:function e9h(d,e){this.a=d
this.b=e},
e8o:function e8o(d,e){this.a=d
this.b=e},
e8p:function e8p(d,e){this.a=d
this.b=e},
e5a:function e5a(d,e){this.a=d
this.b=e},
e6m:function e6m(d){this.a=d},
e6n:function e6n(d){this.a=d},
e6o:function e6o(d){this.a=d},
e6p:function e6p(d){this.a=d},
e6q:function e6q(d,e){this.a=d
this.b=e},
e6r:function e6r(d){this.a=d},
e6l:function e6l(d){this.a=d},
e6s:function e6s(d,e){this.a=d
this.b=e},
e6k:function e6k(d,e){this.a=d
this.b=e},
e6t:function e6t(d,e){this.a=d
this.b=e},
e6j:function e6j(d,e){this.a=d
this.b=e},
e6u:function e6u(d){this.a=d},
e6i:function e6i(d){this.a=d},
e6v:function e6v(d,e){this.a=d
this.b=e},
e6h:function e6h(d,e){this.a=d
this.b=e},
e6w:function e6w(d,e){this.a=d
this.b=e},
e9L:function e9L(d){this.a=d},
e9N:function e9N(d){this.a=d},
e9K:function e9K(d){this.a=d},
e9M:function e9M(d){this.a=d},
e5Z:function e5Z(d){this.a=d},
e6_:function e6_(d){this.a=d},
e60:function e60(d){this.a=d},
e64:function e64(d){this.a=d},
e65:function e65(d){this.a=d},
e66:function e66(d){this.a=d},
e5Y:function e5Y(d){this.a=d},
e67:function e67(d){this.a=d},
e5X:function e5X(d){this.a=d},
e68:function e68(d){this.a=d},
e5W:function e5W(d){this.a=d},
e69:function e69(d){this.a=d},
e6a:function e6a(d){this.a=d},
e5V:function e5V(d){this.a=d},
e6b:function e6b(d){this.a=d},
e5U:function e5U(d){this.a=d},
e61:function e61(d){this.a=d},
e5T:function e5T(d){this.a=d},
e62:function e62(d){this.a=d},
e5S:function e5S(d){this.a=d},
e63:function e63(d){this.a=d},
e5R:function e5R(d){this.a=d},
e5j:function e5j(d){this.a=d},
e5x:function e5x(d){this.a=d},
e5w:function e5w(){},
e5k:function e5k(d){this.a=d},
e5l:function e5l(d){this.a=d},
e5y:function e5y(){},
e5o:function e5o(d,e){this.a=d
this.b=e},
e5z:function e5z(d){this.a=d},
e5i:function e5i(d){this.a=d},
e5A:function e5A(d){this.a=d},
e5B:function e5B(d){this.a=d},
e5h:function e5h(d){this.a=d},
e5C:function e5C(d){this.a=d},
e5D:function e5D(d){this.a=d},
e5m:function e5m(d){this.a=d},
e5g:function e5g(d){this.a=d},
e5n:function e5n(d){this.a=d},
e5f:function e5f(d){this.a=d},
e5p:function e5p(d){this.a=d},
e5q:function e5q(d){this.a=d},
e5r:function e5r(d){this.a=d},
e5s:function e5s(d){this.a=d},
e5t:function e5t(d){this.a=d},
e5u:function e5u(d){this.a=d},
e5v:function e5v(d){this.a=d},
e5e:function e5e(){},
e8n:function e8n(d){this.a=d},
e8k:function e8k(d,e,f){this.a=d
this.b=e
this.c=f},
e8l:function e8l(d,e){this.a=d
this.b=e},
e8j:function e8j(d){this.a=d},
e8m:function e8m(d,e){this.a=d
this.b=e},
e8i:function e8i(d){this.a=d},
biJ:function biJ(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
dsd:function dsd(d,e){this.a=d
this.b=e},
bi8:function bi8(d,e){this.b=d
this.a=e},
aIf:function aIf(d,e){this.c=d
this.a=e},
bsA:function bsA(){this.c=this.a=this.d=null},
f1o:function f1o(d,e){this.a=d
this.b=e},
f1n:function f1n(d){this.a=d},
f1q:function f1q(d){this.a=d},
f1r:function f1r(d){this.a=d},
f1s:function f1s(d){this.a=d},
f1p:function f1p(d){this.a=d},
eX6:function eX6(d,e,f){var _=this
_.a=d
_.b=e
_.c=f
_.d=0
_.e=1
_.f=3
_.r=0
_.w=112
_.x=!1},
Mc:function Mc(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
Q6:function Q6(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
ft3:function ft3(d,e){this.a=d
this.b=e},
fta:function fta(d){this.a=d},
ft5:function ft5(d){this.a=d},
ftb:function ftb(d){this.a=d},
ft4:function ft4(d){this.a=d},
ft1:function ft1(d,e){this.a=d
this.b=e},
ft2:function ft2(d,e){this.a=d
this.b=e},
fsW:function fsW(d,e){this.a=d
this.b=e},
ft7:function ft7(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ft9:function ft9(d){this.a=d},
ft8:function ft8(d,e,f){this.a=d
this.b=e
this.c=f},
ft6:function ft6(d,e,f){this.a=d
this.b=e
this.c=f},
fsX:function fsX(){},
fsY:function fsY(d){this.a=d},
fsV:function fsV(){},
fsZ:function fsZ(d){this.a=d},
ft_:function ft_(){},
ft0:function ft0(d){this.a=d},
hdS(){var w=$.hdR
return w==null?$.hdR=new A.ceI().$0():w},
icC(d,e,f){var w,v,u,t,s,r,q,p,o,n=null,m=e.a,l=e.b,k=new C.a5(0,0,0+m,0+l),j=C.bz(k,D.iB)
$.V()
w=C.K()
w.sar(B.c2s.aA(0,k))
d.aD(j,w)
v=C.K()
v.b=D.ac
v.r=F.fv.gp(0)
v.c=l*0.025
w=l*0.05
j=l*0.08
d.aD(C.bz(k.ct(-w),new C.aQ(j,j)),v)
w=C.bz(k.ct(-(l*0.1)),new C.aQ(w,w))
v.c=l*0.01
d.aD(w,v)
u=new C.t(m/2,l/2)
t=l*0.36
l=C.K()
l.r=G.afP.gp(0)
d.ae(u,t*1.1,l)
l=C.K()
l.r=F.fv.gp(0)
d.ae(u,t,l)
l=C.K()
l.r=B.EN.gp(0)
d.ae(u,t*0.9,l)
l=C.K()
l.b=D.ac
l.r=E.jJ.gp(0)
l.c=t*0.04
d.ae(u,t*0.95,l)
s=$.VW
r=C.bN(u,t*1.2,t*1.5)
if(s!=null){m=s.c
l=s.d
q=Math.min((r.c-r.a)/m,(r.d-r.b)/l)
p=C.bN(r.gbN(),l*q,m*q)
j=C.K()
j.Q=D.cf
d.ow(s,new C.a5(0,0,m,l),p,j)}else{o=C.fS(n,n,n,n,C.cX(n,n,n,n,n,n,n,n,n,C.l(n,n,E.jJ,n,n,n,n,n,n,n,n,t*0.6,n,n,D.u,n,n,!0,n,n,n,n,n,n,n,n),"NGMY"),D.a6,D.c5,n,D.dP,D.c4)
o.eI()
m=o.b
l=m.c
m=m.a.c
o.a5(d,u.aF(0,new C.t(l/2,m.gbc(m)/2)))}},
hrR(d,e,f){var w,v,u,t,s,r,q,p,o=null,n=e.eg(D.J),m=e.gdB()/2
$.V()
w=C.K()
w.r=F.fv.gp(0)
d.ae(n,m,w)
w=C.K()
w.r=B.EN.gp(0)
d.ae(n,m*0.9,w)
w=C.K()
w.b=D.ac
w.r=E.jJ.gp(0)
w.c=m*0.04
d.ae(n,m*0.93,w)
v=$.VW
u=C.bN(n,m*1.2,m*1.5)
if(v!=null){w=v.c
t=v.d
s=Math.min((u.c-u.a)/w,(u.d-u.b)/t)
r=C.bN(u.gbN(),t*s,w*s)
q=C.K()
q.Q=D.cf
d.ow(v,new C.a5(0,0,w,t),r,q)}else{p=C.fS(o,o,o,o,C.cX(o,o,o,o,o,o,o,o,o,C.l(o,o,E.jJ,o,o,o,o,o,o,o,o,m*0.6,o,o,D.u,o,o,!0,o,o,o,o,o,o,o,o),"NGMY"),D.a6,D.c5,o,D.dP,D.c4)
p.eI()
w=p.b
t=w.c
w=w.a.c
p.a5(d,n.aF(0,new C.t(t/2,w.gbc(w)/2)))}},
GX(d,e,f,g,h){var w,v,u,t,s,r,q,p,o,n,m=null,l=e.a,k=e.b,j=new C.a5(0,0,0+l,0+k),i=e.gdB()*0.08
i=C.bz(j,new C.aQ(i,i))
$.V()
w=C.K()
w.sar(B.apU.aA(0,j))
d.aD(i,w)
w=j.ct(-(e.gdB()*0.045))
i=e.gdB()*0.06
i=C.bz(w,new C.aQ(i,i))
w=C.K()
w.b=D.ac
w.r=F.fv.gp(0)
w.c=e.gdB()*0.035
d.aD(i,w)
v=k*0.33
u=new C.t(k*0.6,k*0.5)
w=C.K()
w.r=F.fv.gp(0)
d.ae(u,v,w)
w=C.K()
w.r=B.EN.gp(0)
d.ae(u,v*0.88,w)
t=$.VW
s=C.bN(u,v*1.15,v*1.4)
if(t!=null){i=t.c
w=t.d
r=Math.min((s.c-s.a)/i,(s.d-s.b)/w)
q=C.bN(s.gbN(),w*r,i*r)
p=C.K()
p.Q=D.cf
d.ow(t,new C.a5(0,0,i,w),q,p)}else{o=C.fS(m,m,m,m,C.cX(m,m,m,m,m,m,m,m,m,C.l(m,m,E.jJ,m,m,m,m,m,m,m,m,v*0.55,m,m,D.u,m,m,!0,m,m,m,m,m,m,m,m),"NGMY"),D.a6,D.c5,m,D.dP,D.c4)
o.eI()
i=o.b
w=i.c
i=i.a.c
o.a5(d,u.aF(0,new C.t(w/2,i.gbc(i)/2)))}n=k*1.08
l=new A.fKm(l-n-k*0.2,d,n)
l.$4(g,k*0.36,D.c,k*0.16)
l.$4(h,k*0.14,F.fv,k*0.62)},
hnx(d){return 210+D.o.F(d.l(),5)*24},
fKi(d,e,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k="NEW GLOBAL",j="MOVEMENT",i="FOR YOUTH",h=e.a,g=e.b,f=new C.a5(0,0,0+h,0+g)
A:{if(0===a1){w=B.apU
break A}if(1===a1){w=B.c2h
break A}w=B.c0k
break A}v=e.gdB()*0.06
v=C.bz(f,new C.aQ(v,v))
$.V()
u=C.K()
u.sar(w.aA(0,f))
d.aD(v,u)
t=C.K()
t.b=D.ac
w=a1===2
t.r=(w?E.jJ:F.fv).gp(0)
t.c=e.gdB()*0.04
v=f.ct(-(e.gdB()*0.05))
u=e.gdB()*0.05
d.aD(C.bz(v,new C.aQ(u,u)),t)
u=f.ct(-(e.gdB()*0.1))
v=e.gdB()*0.03
v=C.bz(u,new C.aQ(v,v))
t.c=e.gdB()*0.012
d.aD(v,t)
if(a1===1)s=E.jJ
else s=w?E.jJ:D.c
w=new A.fKk($.VW,d,s)
v=new A.fKj(s,e,d)
u=g*0.4
r=g*0.12
if(a1===0){q=g*0.5
p=new C.t(g*0.62,q)
o=C.K()
o.r=F.fv.gp(0)
d.ae(p,g*0.34,o)
o=C.K()
o.r=B.EN.gp(0)
d.ae(p,g*0.3,o)
w.$1(C.bN(p,u,q))
n=g*1.04
m=h-r
r=new A.fKl(e)
h=r.$1(k)
q=r.$1(j)
r=r.$1(i)
r=Math.max(C.jR(q),C.jR(r))
l=(n+m)/2
r=g*0.16*Math.min(1,(m-n)/Math.max(C.jR(h),r))
v.$3(k,new C.t(l,g*0.2),r)
v.$3(j,new C.t(l,u),r)
v.$3(i,new C.t(l,g*0.6),r)}else{q=h/2
w.$1(C.bN(new C.t(q,g*0.42),u,h*0.6))
v.$3("NGMY",new C.t(q,g*0.68),r)
v.$4$w(i,new C.t(q,g*0.82),g*0.06,D.O)}},
hnP(f8,f9,g0,g1,g2,g3,g4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1,e2,e3,e4,e5,e6,e7,e8,e9,f0,f1,f2,f3="walls",f4="GFCI outlet",f5="Wall outlet",f6="\ud83d\udeb0 Needs plumbing",f7=f8.c
if(f7==="outside")return A.hYl(f8,g2,g1,g4,g3,g0)
f8.cHi()
w=x.z
v=C.a([],w)
u=new A.fk(v)
t=C.T(x.S,x.q)
s=C.a([],x.E)
r=C.a([],x.a)
q=f8.gev(0)
p=f8.ghn(0)
o=C.a([],x.O)
for(n=f8.z,m=n.length,l=0;l<n.length;n.length===m||(0,C.M)(n),++l)o.push(B.ay5[n[l]])
k=B.axP[f8.Q]
j=new A.ftr(g1)
u.f=-1
u.b=j.$2("floor",310)
i=$.dQ+1
u.x=$.dQ=i
n=p/2
m=q+2.4
h=p+2
g=k.b
f=k.c
e=f==="tile"
if(e)d=0.35
else d=f==="wood"?0.15:0
u.n6(new A.r(0,-0.6,n),new A.r(m,1.2,h),g,d,3)
t.n(0,310,new A.cW("Floor","The "+k.a.toLowerCase()+" floor.",new A.r(0,0,n),140))
u.b=0
if(f==="wood")for(f=-q/2,a0=1;a0<8;++a0){e=C.ar(g,D.w,0.25)
e.toString
u.aO(new A.r(f+a0*q/8,0.05,n),new A.r(0.3,0.2,p),e)}else if(e)for(g=-q/2,a0=1;a0<6;++a0){u.aO(new A.r(g+a0*q/6,0.05,n),new A.r(0.3,0.2,p),B.adu)
u.aO(new A.r(0,0.05,a0*p/6),new A.r(q,0.2,0.3),B.adu)}u.x=0
g=f7==="hall"
if(g){a1=Math.min(q*0.5,p*1.5)
a2=p-14
f=-a1/2
e=a1/2
r.push(new A.fK(C.a([new A.r(f,0.5,14),new A.r(e,0.5,14),new A.r(e,0.5,a2),new A.r(f,0.5,a2)],x.o),0,A.hrD(),900,900*(a2-14)/a1,60,-1,i,!1))}u.f=0
u.b=j.$2(f3,300)
a3=u.x=$.dQ=$.dQ+1
u.hm(new A.r(0,65,-0.6),new A.r(m,130,1.2),o[0],3)
u.x=0
u.b=j.$2(f3,301)
a4=u.x=$.dQ=$.dQ+1
f=-q
e=f/2
u.hm(new A.r(e-0.6,65,n),new A.r(1.2,130,p),o[1],3)
u.x=0
u.b=j.$2(f3,302)
a5=u.x=$.dQ=$.dQ+1
d=q/2
u.hm(new A.r(d+0.6,65,n),new A.r(1.2,130,p),o[2],3)
u.x=0
t.n(0,300,B.e7W)
t.n(0,301,B.e8_)
t.n(0,302,B.e88)
if(f9){u.b=0
u.hm(new A.r(0,65,p+0.6),new A.r(m,130,1.2),o[0],3)}u.f=u.b=0
u.x=a3
u.aY(new A.r(0,2.5,0.4),new A.r(q,5,0.8),B.ky,0.1)
u.x=a4
u.aY(new A.r(e+0.4,2.5,n),new A.r(0.8,5,p),B.ky,0.1)
u.x=a5
u.aY(new A.r(d-0.4,2.5,n),new A.r(0.8,5,p),B.ky,0.1)
u.x=0
u.f=f9?0:3
u.b=j.$2("ceiling",320)
if(f9)o=1
else o=g1==="ceiling"?0.6:0.4
u.d=o
u.hm(new A.r(0,130.6,n),new A.r(m,1.2,h),B.awF[f8.as],2)
u.d=1
u.b=u.f=0
u.x=a3
u.aY(new A.r(0,128,1),new A.r(q,3,1.4),D.c,0.2)
u.x=a4
u.aY(new A.r(e+1,128,n),new A.r(1.4,3,p),D.c,0.2)
u.x=a5
u.aY(new A.r(d-1,128,n),new A.r(1.4,3,p),D.c,0.2)
u.x=0
t.n(0,320,new A.cW("Ceiling","Pick a colour above to paint the ceiling.",new A.r(0,130,n),140))
h=f8.w
a6=D.d.b3(h,new A.ftd())?"left":"right"
if(!g){o=new A.fto()
a7=p*0.55
if(f9)D.d.v(v,A.o8(o.$0(),0,3.141592653589793,new A.r(0,0,p+0.2)))
D.d.v(v,a6==="right"?A.o8(o.$0(),0,-1.5707963267948966,new A.r(d,0,a7)):A.o8(o.$0(),0,1.5707963267948966,new A.r(e,0,a7)))}for(o=f8.ax,m=f8.at,a0=0;a0<h.length;++a0){a8=h[a0]
if(a8.a)continue
a9=o.h(0,a0)
if(a9==null)a9=m.q(0,a0)?1.25:0
b0=C.a([],w)
b1=new A.fk(b0)
b1.f=1
b1.x=$.dQ=$.dQ+1
b2=b1.b=600+a0
b1.aO(B.h1Y,B.h1H,B.ky)
b3=C.a([],w)
b4=new A.fk(b3)
b4.r=!0
b4.b=b2
if(a9>0.04){b1.b=0
b5=A.hVo(a8.d)
b6=b5.a
b1.aO(B.h0b,B.fXP,b6)
b1.aO(B.h1d,B.h7w,b5.b)
b7=C.ar(b6,D.w,0.25)
b7.toString
b1.aO(B.h0m,B.h5A,b7)
b8=-a9
b7=A.vs(B.h7r,b8)
b4.wj(new A.r(-12.5+b7.a,0+b7.b,1.2+b7.c),B.fWu,B.vv,0.15,b8)}else{b1.aY(B.h0p,B.h_q,B.vv,0.15)
b1.aY(B.h0x,B.h0T,B.EH,0.8)
b1.aO(B.h0V,B.aVJ,B.Mf)
b1.aO(B.h6Y,B.aVJ,B.Mf)}b7=new A.ftp(a8,q,p)
D.d.v(v,b7.$1(b0))
D.d.v(v,b7.$1(b3))
t.n(0,b2,new A.cW("Door","Tap the door to go through it.",B.aUa,90))}for(o=f8.x,m=o.length,l=0;l<o.length;o.length===m||(0,C.M)(o),++l){b9=o[l]
b0=b9.b
b2=B.ht.h(0,b0)
b2.toString
b3=C.a([],w)
c0=new A.fk(b3)
c0.r=!0
c0.f=b0==="rug"?1:2
b7=100+b9.a
c0.b=j.$2("furniture",b7)
A.h0s(c0,b0,B.z7[b9.f])
D.d.v(v,A.o8(A.i0d(b3,0.8),0,b9.e*3.141592653589793/2,new A.r(b9.c,0,b9.d)))
t.n(0,b7,new A.cW(b2.a,y.M,new A.r(b9.c,12,b9.d),90))}u.f=2
u.r=!0
c1=p*0.5
w=C.S(h)
o=d-10
c2=D.k.E(new C.cQ(new C.Z(h,new A.fte(),w.k("Z<1>")),new A.ftf(),w.k("cQ<1,L>")).cL(0,e+30,new A.ftg())+24,e+10,o)
c3=f8.go==="fan"
c4=f8.ga5L()
c5=c4&&f8.gM1()&&f8.fy
u.b=703
if(c3){u.dL(new A.r(0,129.5,c1),new A.r(0,120,c1),1,B.hm,8)
u.dQ(new A.r(0,120,c1),new A.r(0,113,c1),6,D.j7,0.5,14)
w=c5?B.o0:D.dv
u.dQ(new A.r(0,113,c1),new A.r(0,110,c1),3.6,w,0.6,12)}else{w=c5?B.o0:D.dv
u.dQ(new A.r(0,129.5,c1),new A.r(0,127,c1),7,w,0.6,16)}if(c5&&!c3){u.b=0
u.f=3
u.d=0.2
u.aEv(new A.r(0,127,c1),new A.r(0,0.5,c1),36,B.o0,!1,14)
u.d=1
u.f=2}c6=c3?"Ceiling fan":"Ceiling light"
if(!c4)c7="It has no power yet. "+(f8.p4.length!==0?"Tap it to wire it.":"The room still needs wiring: use the Wiring button.")
else if(!f8.gM1())c7="It is ready: wire the wall switch to turn it on."
else{w=f8.fy?"It is on. Tap the wall switch (or tap this) to turn it off.":"It is off. Tap the wall switch (or tap this) to turn it on."
c7=w}t.n(0,703,new A.cW(c6,c7,new A.r(0,122,c1),80))
w=f7==="bathroom"
m=!w
c8=!m||f7==="kitchen"||f8.p4==="gfci"
h=f8.gan8()
b0=c8?f4:f5
b2=f8.p4.length!==0||f8.If(1)
b3=c8?f4:f5
b3=C.a([new C.e9([0,700,f/4,h,b0]),new C.e9([1,701,q/4,b2,b3])],x.az)
for(h=f8.id,a0=0;a0<h.length;++a0){f=h[a0]
b0=f.a
if(b0!=="switch"){b2=f.c
b0=b2.c>=2&&A.L_(A.t0(b0),b2).a==="ok"
b2=h[a0].a==="gfci"?"Added GFCI outlet":"Added outlet"
b3.push(new C.e9([2+a0,800+a0,f.b,b0,b2]))}}u.f=1
u.r=!1
for(f=b3.length,b0=f8.fx,l=0;l<b3.length;b3.length===f||(0,C.M)(b3),++l){b2=b3[l].a
a0=b2[0]
c9=b2[1]
d0=b2[2]
d1=b2[3]
d2=b2[4]
u.x=$.dQ=$.dQ+1
u.b=c9
u.e=0.4
u.d=0.55
d3=2
if(!d1)if(a0<2){b2=f8.p4
if(b2.length!==0)b2=d3
else{b2=f8.CW
if(b2!=null)b2=b2.bhl(a0)
else b2=f8.ay?0:2}d3=b2}else d3=0
if(d1)b2=D.be
else b2=d3===1?D.aE:D.aw
u.aO(new A.r(d0,14,0.25),B.fYt,b2)
u.d=1
u.e=0
b2=d1?B.M5:D.j7
u.aY(new A.r(d0,14,0.9),B.h2o,b2,0.25)
u.b=0
for(d4=0;d4<2;++d4)for(b2=14+F.je[d4]*2.8,d5=0;d5<2;++d5)u.aO(new A.r(d0+B.QL[d5],b2,1.7),B.h7i,B.afM)
u.aO(new A.r(d0,14,1.7),B.h2m,D.dv)
u.x=0
if(!d1)b2="This one is not wired yet. Tap it to wire it."
else b2=b0.h(0,a0)==null?"Tap it to plug something in.":"Tap it to plug something else in, or to unplug."
t.n(0,c9,new A.cW(d2,b2,new A.r(d0,14,2),60))}f=C.a([new C.bj(702,c2,f8.gM1())],x.al)
for(a0=0;a0<h.length;++a0){b2=h[a0]
b7=b2.a
if(b7==="switch"){d6=b2.c
b7=d6.c>=2&&A.L_(A.t0(b7),d6).a==="ok"
f.push(new C.bj(800+a0,b2.b,b7))}}for(h=f.length,l=0;l<f.length;f.length===h||(0,C.M)(f),++l){b2=f[l]
d0=b2.b
d1=b2.c
u.x=$.dQ=$.dQ+1
c9=u.b=b2.a
u.e=0.4
u.d=0.55
d7=2
if(!d1)if(c9===702){b2=f8.p4
if(b2.length!==0)b2=d7
else{b2=f8.CW
if(b2!=null)b2=b2.bhl(3)
else b2=f8.ay?0:2}d7=b2}else d7=0
if(d1)b2=D.be
else b2=d7===1?D.aE:D.aw
u.aO(new A.r(d0,48,0.25),B.h_b,b2)
u.d=1
u.e=0
b2=d1?B.M5:D.j7
u.aY(new A.r(d0,48,0.9),B.fZv,b2,0.25)
u.aO(new A.r(d0,f8.fy&&d1?49.2:46.8,1.9),B.fZm,B.ahr)
u.x=0
if(!d1)b2="Not wired yet. Tap it to wire it."
else if(f8.fy)b2="On. Tap to turn the "+(c3?"fan":"light")+" off."
else b2="Off. Tap to turn the "+(c3?"fan":"light")+" on."
t.n(0,c9,new A.cW("Light switch",b2,new A.r(d0,48,2),60))}if(f8.p4.length===0&&!f8.gkG()){if(f8.p4.length===0)h=f8.gkG()
else h=!0
if(h)d8=D.X
else{h=C.a([],x.s)
if(!f8.gan8())h.push("outlet 1")
if(!(f8.p4.length!==0||f8.If(1)))h.push("outlet 2")
if(!f8.ga5L())h.push(f8.go==="fan"?"ceiling fan":"ceiling light")
if(!f8.gM1())h.push("switch")
d8=h}h=d8.length===0?"\u26a1 No power: needs wiring":"\u26a1 Still to wire: "+D.d.aG(d8,", ")
s.push(new A.hf(new A.r(0,104,c1),h,D.bx,0))}h=!1
if(f8.p4.length!==0)if(!f8.gyZ()){h=f8.p4
h=!(h==="ptrap"||h==="faucet")}if(h)s.push(new A.hf(new A.r(0,40,14),"\ud83d\udc46 Tap the red one to wire it",D.bx,0))
u.f=2
u.r=!0
for(h=b3.length,f=x.o,b2=f8.a,l=0;l<b3.length;b3.length===h||(0,C.M)(b3),++l){b7=b3[l].a
a0=b7[0]
d0=b7[2]
d1=b7[3]
d9=b0.h(0,a0)
if(d9==null||!d1)continue
e0=A.aOX(d9)
b7=u.b=720+a0
u.jf(C.a([new A.r(d0,12,1.8),new A.r(d0,6,3),new A.r(d0,2,11)],f),0.3,B.XO,!1,0.2,6)
d6=e0.d
e1=d6<=0
if(!e1||e0.e){b8=d6*0.56
e2=$.dQ+1
u.x=$.dQ=e2
u.aY(new A.r(d0,2,15),new A.r(d6*0.45,4,14),B.hm,0.3)
u.aY(new A.r(d0,8,15),B.fXV,B.hm,0.3)
e3=12+b8/2
u.aY(new A.r(d0,e3,15),new A.r(d6,b8,3),E.F4,0.5)
d6=(d6-3.5)/2
e4=d0-d6
e5=(b8-3.5)/2
e6=e3+e5
d6=d0+d6
e5=e3-e5
r.push(new A.fK(C.a([new A.r(e4,e6,16.6),new A.r(d6,e6,16.6),new A.r(d6,e5,16.6),new A.r(e4,e5,16.6)],f),b7,new A.fth(a0*7+b2),320,180,9,2,e2,!0))
u.x=0}else{d6=e0.a
if(d6==="lamp"){u.dQ(new A.r(d0,0,14),new A.r(d0,1,14),6,B.WN,0.4,14)
u.dQ(new A.r(d0,1,14),new A.r(d0,22,14),1,B.Bd,0.5,8)
d6=f8.fy?B.o0:S.XV
u.yJ(new A.r(d0,20,14),new A.r(d0,32,14),9,d6,!1,!0,5.5,0.2,16)}else{u.aY(new A.r(d0,9,15),B.fTY,B.nP,0.1)
if(d6==="toaster"){u.aY(new A.r(d0,23,15),B.fTR,B.jG,0.8)
u.aO(new A.r(d0,28.2,15),B.h3z,B.agV)}else{u.By(new A.r(d0-7,21,15),new A.r(d0+7,21,15),3.6,B.LY,3,0.6,12)
u.aY(new A.r(d0-8,14.5,15),B.h0P,B.LY,0.6)}}}d6=!e1||e0.e?"It is playing NGMY ads. Tap it to watch full screen with the remote.":"It is plugged in and running. Tap the outlet to unplug it or plug in something else."
t.n(0,b7,new A.cW(e0.b,d6,new A.r(d0,16,14),90))}u.f=1
u.r=!1
e7=new A.ftj(f8,u,q,r,t)
e7.$2(f8.k1,0)
if(g){e7.$2(f8.k2,1)
e7.$2(f8.k1,2)
h=f8.k2
e7.$2(h==null?f8.k1:h,3)}if(g)for(e8=p-14,h=d-14,a0=0;a0<4;++a0){e9=(D.o.F(a0,2)===0?-1:1)*h
f0=a0<2?14:e8
f1=Math.atan2(-e9,-(n-f0)*-1)
u.f=2
u.r=!1
u.x=$.dQ=$.dQ+1
g=19e3+a0
u.b=g
u.aO(new A.r(e9,125,f0),B.fWX,D.j7)
u.wj(new A.r(e9,118,f0),B.fT6,D.bO,0.4,f1)
u.wj(new A.r(e9+Math.sin(f1)*8.5,118,f0+Math.cos(f1)*8.5),B.fXU,D.au,0.6,f1)
u.fo(new A.r(e9-Math.sin(f1)*5+Math.cos(f1)*3,122,f0-Math.cos(f1)*5-Math.sin(f1)*3),1.4,D.aw,3,5)
u.b=u.x=0
t.n(0,g,new A.cW("Hall camera","Tap it and you look from here, like your eyes.",new A.r(e9,118,f0),60))}u.f=2
u.r=!0
if(!m||f7==="kitchen"){f7=f8.p4
f7=f7.length===0||f7==="ptrap"||f7==="faucet"}else f7=!1
if(f7){d1=f8.gjN()
f7=new A.ftq(u)
if(w){f2=e+17
if(d1){u.b=710
u.By(new A.r(6,0.5,14),new A.r(6,15,14),8,B.AX,5.6,0.8,18)
u.dQ(new A.r(6,15,14),new A.r(6,16,14),9,B.M7,0.8,18)
u.aY(new A.r(6,21,5),B.fU9,B.AX,0.8)
u.aY(new A.r(6,28,5),B.h01,B.M7,0.8)}else{u.b=710
u.d=0.3
u.f=3
u.aO(new A.r(6,14,9),B.fU0,D.b2)
u.d=1
u.f=2
f7.$2(-4,8)}u.b=711
u.aY(new A.r(34,14,10),B.fVo,B.nP,0.1)
u.aY(new A.r(34,29,10),B.fVv,B.Xo,0.4)
if(d1){u.dQ(new A.r(34,29.3,10),new A.r(34,30.1,10),6.5,D.c,0.6,18)
u.bj9(C.a([new A.r(34,30,4),new A.r(34,36,4),new A.r(34,38,7)],f),0.6,B.jG,0.9,8)}else{f7.$2(28,18)
f7.$2(40,18)}u.b=712
if(d1){u.aY(new A.r(f2,8,38),B.aUF,B.Ye,0.7)
u.aY(new A.r(f2,16.2,38),B.h5u,B.X8,0.8)
u.dQ(new A.r(f2,30,3),new A.r(f2,52,3),0.7,B.jG,0.9,8)
u.dQ(new A.r(f2,52,3),new A.r(f2,52,10),0.7,B.jG,0.9,8)}else{u.d=0.3
u.f=3
u.aO(new A.r(f2,8,38),B.aUF,D.b2)
u.d=1
u.f=2
f7.$2(f2-4,34)
f7.$2(f2+4,34)}f7=d1?"Fitted on its flange with a wax ring, and the supply hose joins the shut-off valve.":"There is no toilet yet: only the flange and the water stub. Use the Plumbing button to fit it."
t.n(0,710,new A.cW("Toilet",f7,new A.r(6,14,10),70))
f7=d1?"The faucet, the hoses and the P-trap are fitted.":"The sink is not plumbed. Use the Plumbing button."
t.n(0,711,new A.cW("Vanity sink",f7,new A.r(34,28,10),70))
f7=d1?"The bath is in and connected.":"The bath is not connected yet."
t.n(0,712,new A.cW("Bath",f7,new A.r(f2,10,38),90))
if(!d1)s.push(new A.hf(new A.r(0,40,14),f6,D.bj,0))}else{u.b=0
u.aY(new A.r(e+15,36,14),B.fV1,B.afy,0.6)
u.aO(new A.r(e+28.5,36,14.4),B.h25,D.dv)
u.aY(new A.r(o,15,14),B.fUz,B.adY,0.1)
u.aY(new A.r(o,31,14),B.fUK,B.hm,0.5)
u.aY(new A.r(d-15,32.4,14),B.aV4,D.j8,0.3)
u.aY(new A.r(d-5,32.4,14),B.aV4,D.j8,0.3)
u.b=713
u.aY(new A.r(30,15,14),B.fW5,B.nP,0.1)
u.aY(new A.r(30,31,14),B.fW9,B.LJ,0.5)
if(d1){u.dQ(new A.r(30,32.1,14),new A.r(30,32.7,14),8,B.F_,0.8,18)
u.bj9(C.a([new A.r(30,32,5),new A.r(30,42,5),new A.r(30,44,9),new A.r(30,44,13)],f),0.7,B.jG,0.9,8)}else{f7.$2(22,18)
f7.$2(38,18)}f7=d1?"The faucet, the hoses and the drain are fitted.":"The kitchen sink is not plumbed yet. Use the Plumbing button."
t.n(0,713,new A.cW("Kitchen sink",f7,new A.r(30,30,14),70))
if(!d1)s.push(new A.hf(new A.r(30,48,14),f6,D.bj,0))}}for(f7=D.d.gaf(g3),w=new C.f5(f7,new A.fti(f8));w.C();){o=f7.gR(0)
t.n(0,900+o.a,new A.cW(o.r,"Tap to see how they are, feed them or give medicine.",new A.r(o.c,36,o.d),90))}return new A.tI(v,t,s,r,new C.cw([e,d,0,p]),0)},
kD(d,e,f,g,h,i,j,k,l){var w=-h/2,v=i/2,u=h/2,t=-i/2
d.cV1(e.a9(0,f.aI(0,w)).a9(0,g.aI(0,v)),e.a9(0,f.aI(0,u)).a9(0,g.aI(0,v)),e.a9(0,f.aI(0,u)).a9(0,g.aI(0,t)),e.a9(0,f.aI(0,w)).a9(0,g.aI(0,t)),j,k,l)},
hYl(d6,d7,d8,d9,e0,e1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5=-158,c6=1000,c7=x.z,c8=C.a([],c7),c9=new A.fk(c8),d0=x.S,d1=C.T(d0,x.q),d2=C.a([],x.E),d3=d6.gev(0),d4=d6.ghn(0),d5=new A.fmE(d8)
c9.f=0
c9.b=d5.$2("floor",310)
c9.hm(new A.r(0,-0.6,d4/2-60),new A.r(d3*2.5,1.2,d4*2.5),B.WQ,5)
d1.n(0,310,B.e83)
c9.b=0
c9.f=1
c9.aO(new A.r(0,0.15,60),B.fZk,E.EK)
for(w=0;w<6;++w)c9.aO(new A.r(0,0.35,8+w*22),B.h2q,B.bmd)
c9.f=2
v=$.dQ+1
c9.x=$.dQ=v
c9.hm(B.fSx,B.fUQ,B.LE,3)
c9.aO(B.fS2,B.fUR,B.ade)
u=new A.fmF(c9)
t=new A.fmA(c9)
for(s=0;s<4;++s){r=B.dil[s]
u.$5(B.f_,B.hy,B.ij,r,62)
u.$5(B.f_,B.hy,B.ij,r,122)}t.$5(B.f_,B.hy,B.ij,0,600)
for(s=0;s<2;++s){r=B.az7[s]
u.$5(B.a9H,B.qG,B.t8,r,62)
u.$5(B.a9H,B.qG,B.t8,r,122)}t.$5(B.a9H,B.qG,B.t8,0,0)
for(s=0;s<2;++s){q=B.a46[s]
u.$5(B.fTg,B.t8,B.hy,q,62)
u.$5(B.h4i,B.ij,B.qG,-q,62)}p=C.a([],c7)
new A.fk(p).n6(B.f_,B.fUZ,B.LH,0.1,2)
c9.a6J(B.h48,B.h2R,B.h24,B.LE,B.hy,!1)
c9.a6J(B.h2a,B.fX4,B.h2u,B.LE,B.qG,!1)
c9.x=0
c9.r=!0
D.d.v(c8,A.o8(p,0.5,0,B.fRd))
D.d.v(c8,A.o8(p,-0.5,0,B.fRe))
c9.aO(B.fRg,B.fUY,B.Xk)
c9.aO(B.fXy,B.fTK,B.agw)
c9.aO(B.fXz,B.aUq,B.pX)
c9.aO(B.fRP,B.fWA,E.EK)
c9.dL(B.h4x,B.h4y,2.2,B.ky,8)
c9.dL(B.fUB,B.fUC,2.2,B.ky,8)
c9.aY(B.fSG,B.fWJ,B.LH,0.1)
d1.n(0,600,B.e8F)
p=x.a
o=C.a([],p)
n=new A.fmB(o,v)
n.$4(B.fZ5,B.h2B,B.h3i,B.h1b)
n.$5$poster(B.fXu,B.fWj,B.fYk,B.h36,1)
n.$5$poster(B.h_2,B.h_h,B.fYJ,B.h33,2)
n.$5$poster(B.h3d,B.h7E,B.h0K,B.h2A,0)
c9.r=!0
m=C.T(d0,d0)
for(d0=d6.x,l=d0.length,s=0;s<d0.length;d0.length===l||(0,C.M)(d0),++s){k=d0[s]
j=k.a
i=100+j
if(e1.q(0,i))continue
h=k.b
if(D.d.q(B.Hw,h)){d1.n(0,i,new A.cW(B.ht.h(0,h).a,"It wanders about. Move it with the arrow buttons or take it out.",new A.r(k.c,12,k.d),140))
continue}g=B.ht.h(0,h)
g.toString
f=C.a([],c7)
e=new A.fk(f)
d=e.r=!0
e.f=D.d.q(B.a4g,h)?1:2
a0=h==="hospital"
e.b=(!a0?h==="shop":d)?i:d5.$2("furniture",i)
A.h0s(e,h,B.z7[k.f])
if(f.length!==0)m.n(0,j,D.d.gI(f).z)
D.d.v(c8,A.o8(f,0,k.e*3.141592653589793/2,new A.r(k.c,0,k.d)))
if(a0)j="The hospital: tap it to see the beds and treat the patients."
else j=h==="shop"?"The shop: tap it to buy food and medicine.":y.M
d1.n(0,i,new A.cW(g.a,j,new A.r(k.c,12,k.d),140))}a1=C.a([],x._)
for(l=D.d.gaf(d0),j=new C.f5(l,new A.fm1()),i=d6.k3;j.C();){h=l.gR(0)
g=h.a
a2=i.q(0,g)
f=h.b==="pole"
d=h.c
a0=h.d
a3=f?new A.r(d+20,86,a0):new A.r(d,55,a0)
d=C.a([],c7)
a4=new A.fk(d)
a0=f?4.6:4.2
a5=a2?D.e5:B.o0
a4.fT(a3,a0,a5,3,6,a2?0.1:0)
if(!a2){a4.d=0.2
a4.fT(a3,10,B.o0,2,6,0)
a4.d=1}D.d.v(c8,d)
if(a2)d2.push(new A.hf(new A.r(a3.a+0,a3.b+14,a3.c+0),"\u26a1 Light out: tap to go and fix it",D.bx,2e4+g))
if(f)a1.push(h)}D.d.aV(a1,new A.fm2())
for(l=x.o,w=0;a6=w+1,a6<a1.length;w=a6){a7=a1[w]
a8=a1[a6]
if(Math.abs(a7.d-a8.d)>1||Math.abs(a8.c-a7.c)>170)continue
j=C.a([],c7)
a9=new A.fk(j)
for(s=0;s<3;++s){b0=B.az3[s]
i=a7.c
h=a7.d
g=a8.c
a9.jf(C.a([new A.r(i+b0,121,h),new A.r((i+g)/2+b0,117,h),new A.r(g+b0,121,h)],l),0.35,D.au,!1,0,4)}D.d.v(c8,j)}for(j=D.d.gaf(d0),i=new C.f5(j,new A.fm3(d6)),h=d6.cy;i.C();){g=j.gR(0)
f=g.c
d=g.b==="hq"?190:130
a0=g.d
g=g.a
d2.push(new A.hf(new A.r(f,d,a0+40),"\u26a1 Level "+C.w(h.h(0,g))+" has no power: tap to go and fix it",D.bx,2e4+g))}for(j=D.d.gaf(d0),i=new C.f5(j,new A.fme(d6));i.C();){h=j.gR(0)
g=h.b
f=B.ht.h(0,g)
f.toString
d=h.c
g=g==="bighouse"?120:82
d2.push(new A.hf(new A.r(d,g,h.d),"\u26a1 No power: tap to go in and fix it",D.bx,2e4+h.a))
g=C.a([],c7)
b1=new A.fk(g)
b1.d=0.45
d=h.c
b1.aO(new A.r(d,30,h.d),new A.r(f.c+2,60,f.d+2),D.dd)
b1.d=1
D.d.v(c8,g)}if(d6.c==="outside")D.d.v(c8,A.i38())
b2=C.a([],p)
for(c7=D.d.gaf(d0),d0=new C.f5(c7,new A.fmp());d0.C();){p=c7.gR(0)
d3=new A.fmD(p.e*3.141592653589793/2,p)
b3=m.h(0,p.a)
if(b3==null)b3=0
j=p.b
if(j==="billboard"){b2.push(new A.fK(C.a([d3.$3(-33,62.5,2),d3.$3(33,62.5,2),d3.$3(33,31.5,2),d3.$3(-33,31.5,2)],l),0,new A.fmu(p),960,450,4,2,b3,!1))
b2.push(new A.fK(C.a([d3.$3(33,62.5,-2),d3.$3(-33,62.5,-2),d3.$3(-33,31.5,-2),d3.$3(33,31.5,-2)],l),0,new A.fmv(p),960,450,4,2,b3,!1))}else{i=j==="townsign"
if(i||j==="cornersign"){b4=i?178:71
b5=i?57:31
b6=i?252:122
b7=i?3.6:3
b8=i?"Welcome to NGMY City \xb7 New Global Movement for Youth":"Welcome to NGMY City"
b9=i?1400:700
c0=i?450:300
p=-b4
j=b6+b5
i=b6-b5
b2.push(new A.fK(C.a([d3.$3(p,j,b7),d3.$3(b4,j,b7),d3.$3(b4,i,b7),d3.$3(p,i,b7)],l),0,new A.fmw(b8),b9,c0,4,2,b3,!1))
h=-b7
b2.push(new A.fK(C.a([d3.$3(b4,j,h),d3.$3(p,j,h),d3.$3(p,i,h),d3.$3(b4,i,h)],l),0,new A.fmx(b8),b9,c0,4,2,b3,!1))}else if(j==="adboard"){b2.push(new A.fK(C.a([d3.$3(c5,195,3.6),d3.$3(158,195,3.6),d3.$3(158,90,3.6),d3.$3(c5,90,3.6)],l),0,new A.fmy(p),1280,424,4,2,b3,!1))
b2.push(new A.fK(C.a([d3.$3(158,195,-3.6),d3.$3(c5,195,-3.6),d3.$3(c5,90,-3.6),d3.$3(158,90,-3.6)],l),0,new A.fmz(p),1280,424,4,2,b3,!1))}else if(j==="tower"){c1=210+D.o.F(B.z7[p.f].l(),5)*24
j=c1-8
i=c1-54
b2.push(new A.fK(C.a([d3.$3(-40,j,35.9),d3.$3(40,j,35.9),d3.$3(40,i,35.9),d3.$3(-40,i,35.9)],l),0,new A.fm4(p),800,460,8,2,b3,!1))
b2.push(new A.fK(C.a([d3.$3(40,j,-35.9),d3.$3(-40,j,-35.9),d3.$3(-40,i,-35.9),d3.$3(40,i,-35.9)],l),0,new A.fm5(p),800,460,8,2,b3,!1))
b2.push(new A.fK(C.a([d3.$3(50.9,j,28),d3.$3(50.9,j,-28),d3.$3(50.9,i,-28),d3.$3(50.9,i,28)],l),0,new A.fm6(p),640,460,8,2,b3,!1))
b2.push(new A.fK(C.a([d3.$3(-50.9,j,-28),d3.$3(-50.9,j,28),d3.$3(-50.9,i,28),d3.$3(-50.9,i,-28)],l),0,new A.fm7(p),640,460,8,2,b3,!1))
i=c1+58
j=c1+22
b2.push(new A.fK(C.a([d3.$3(-40,i,1.7),d3.$3(40,i,1.7),d3.$3(40,j,1.7),d3.$3(-40,j,1.7)],l),0,new A.fm8(p),960,400,8,2,b3,!1))
b2.push(new A.fK(C.a([d3.$3(40,i,-1.7),d3.$3(-40,i,-1.7),d3.$3(-40,j,-1.7),d3.$3(40,j,-1.7)],l),0,new A.fm9(p),960,400,8,2,b3,!1))}else if(j==="hq"){b2.push(new A.fK(C.a([d3.$3(-70,108,45.9),d3.$3(70,108,45.9),d3.$3(70,52,45.9),d3.$3(-70,52,45.9)],l),0,new A.fma(),c6,400,8,2,b3,!1))
b2.push(new A.fK(C.a([d3.$3(-48,215,30.2),d3.$3(48,215,30.2),d3.$3(48,175,30.2),d3.$3(-48,175,30.2)],l),0,new A.fmb(),900,380,8,2,b3,!1))
b2.push(new A.fK(C.a([d3.$3(70,108,-45.9),d3.$3(-70,108,-45.9),d3.$3(-70,52,-45.9),d3.$3(70,52,-45.9)],l),0,new A.fmc(),c6,400,8,2,b3,!1))
b2.push(new A.fK(C.a([d3.$3(48,215,-30.2),d3.$3(-48,215,-30.2),d3.$3(-48,175,-30.2),d3.$3(48,175,-30.2)],l),0,new A.fmd(),900,380,8,2,b3,!1))
b2.push(new A.fK(C.a([d3.$3(-54,328,1.7),d3.$3(54,328,1.7),d3.$3(54,294,1.7),d3.$3(-54,294,1.7)],l),0,new A.fmf(p),c6,360,8,2,b3,!1))
b2.push(new A.fK(C.a([d3.$3(54,328,-1.7),d3.$3(-54,328,-1.7),d3.$3(-54,294,-1.7),d3.$3(54,294,-1.7)],l),0,new A.fmg(p),c6,360,8,2,b3,!1))
b2.push(new A.fK(C.a([d3.$3(85.9,118,36),d3.$3(85.9,118,-36),d3.$3(85.9,62,-36),d3.$3(85.9,62,36)],l),0,new A.fmh(p),720,560,8,2,b3,!1))
b2.push(new A.fK(C.a([d3.$3(-85.9,118,-36),d3.$3(-85.9,118,36),d3.$3(-85.9,62,36),d3.$3(-85.9,62,-36)],l),0,new A.fmi(p),720,560,8,2,b3,!1))}else if(j==="store")b2.push(new A.fK(C.a([d3.$3(-54,85,37.7),d3.$3(54,85,37.7),d3.$3(54,67,37.7),d3.$3(-54,67,37.7)],l),0,new A.fmj(),900,150,6,2,b3,!1))
else if(j==="ubstation"){b2.push(new A.fK(C.a([d3.$3(40,106,31.9),d3.$3(76,106,31.9),d3.$3(76,86,31.9),d3.$3(40,86,31.9)],l),0,new A.fmk(),480,270,8,2,b3,!1))
b2.push(new A.fK(C.a([d3.$3(76,106,28.1),d3.$3(40,106,28.1),d3.$3(40,86,28.1),d3.$3(76,86,28.1)],l),0,new A.fml(),480,270,8,2,b3,!1))}else if(j==="dmv")b2.push(new A.fK(C.a([d3.$3(-50,85,38.6),d3.$3(50,85,38.6),d3.$3(50,67,38.6),d3.$3(-50,67,38.6)],l),0,new A.fmm(),900,160,8,2,b3,!1))
else if(j==="gasstation")b2.push(new A.fK(C.a([d3.$3(-86,107,35.7),d3.$3(-54,107,35.7),d3.$3(-54,85,35.7),d3.$3(-86,85,35.7)],l),0,new A.fmn(),480,330,6,2,b3,!1))
else for(c2=0;c2<2;++c2){c3=c2===0?-40:40
j=c3-26
i=c3+26
b2.push(new A.fK(C.a([d3.$3(j,70,60.7),d3.$3(i,70,60.7),d3.$3(i,40,60.7),d3.$3(j,40,60.7)],l),0,new A.fmo(p,c2),720,520,9,2,b3,!1))}}}for(c7=D.d.gaf(e0),d0=new C.f5(c7,new A.fmq(d6));d0.C();){p=c7.gR(0)
d2.push(new A.hf(new A.r(p.c,82,p.d),p.Q,D.cN,0))}for(c7=D.d.gaf(e0),d0=new C.f5(c7,new A.fmr(d6));d0.C();){p=c7.gR(0)
d2.push(new A.hf(new A.r(p.c,80,p.d),"\ud83d\udcde Help!",D.bx,0))}c7=d7===0
d0=c7?"\u2705 The house is finished":"\ud83c\udfe0 "+d7+" rooms still need work"
d2.push(new A.hf(B.fRw,d0,c7?D.cS:D.dV,0))
c4=c9.x=$.dQ=$.dQ+1
for(s=0;s<2;++s){r=B.az7[s]
c9.dL(new A.r(r,0,-118),new A.r(r,215,-118),3,D.j7,8)}c9.aY(B.Ac,B.fUW,D.au,0.3)
c9.x=0
o.push(new A.fK(B.cLA,0,new A.fms(),c6,336,4,2,c4,!1))
o.push(new A.fK(B.df_,0,new A.fmt(),c6,336,4,2,c4,!1))
c7=C.C(o,x.K)
D.d.v(c7,b2)
return new A.tI(c8,d1,d2,c7,null,4000)},
i44(a4,a5,a6,a7,a8,a9,b0,b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=x.z,a2=C.a([],a1),a3=new A.fk(a2)
a3.r=!0
if(a4.c==="outside"){w=b0!=null
if(w&&b0.a===a4.a)A.wD(a3,b0,a5,b1,!0,0,null)
if(a6&&w&&b0.a===a4.a){w=C.a([],a1)
v=b0.b
u=b0.d
new A.fk(w).aO(new A.r(v+Math.sin(u)*9,46+b0.y,b0.c+Math.cos(u)*9),B.aUp,B.jp)
D.d.v(a2,w)}if(a8!=null){w=C.a([],a1)
t=new A.fk(w)
t.r=!0
v=a8.a
A.h0s(t,v[0],B.z7[v[4]])
D.d.v(a2,A.o8(w,0,v[3]-1.5707963267948966,new A.r(v[1],0,v[2])))}for(w=D.d.gaf(a4.x),v=new C.f5(w,new A.fwo()),u=a5*6,s=a9==="furniture";v.C();){r=w.gR(0)
q=r.a
p=a5*(0.25+D.o.F(q,5)*0.04)+q*1.7
o=r.c
n=Math.cos(p)
m=r.d
l=Math.sin(p)
k=Math.atan2(-Math.sin(p),Math.cos(p))
j=C.a([],a1)
i=new A.fk(j)
i.r=!0
i.b=s?100+q:0
A.hiY(i,r.b,B.z7[r.f],Math.sin(u+q)*0.5)
D.d.v(a2,A.o8(j,0,k,new A.r(o+n*10,0,m+l*10)))}for(w=D.d.gaf(b2),v=new C.f5(w,new A.fwp(a4)),u=a4.a;v.C();){s=w.gR(0)
r=s.c
q=s.d
o=s.e
n=s.f
A.wD(a3,new A.xW(u,r,q,o,!1,!1,!1,!1,!1,0,!1,!1,"","",-1,0,-1,0),a5,n,!1,900+s.a,n.c)
A.hSb(a3,s,a5)}for(w=a7.length,h=0;h<a7.length;a7.length===w||(0,C.M)(a7),++h){g=a7[h]
v=g.b
s=g.c
r=g.d
A.wD(a3,new A.xW(u,v,s,r,g.f,!1,!1,!1,!1,0,!1,!1,"","",-1,0,-1,g.e),a5,g.w,!1,0,g.x)
if(g.r){q=C.a([],a1)
new A.fk(q).aO(new A.r(v+Math.sin(r)*9,46,s+Math.cos(r)*9),B.fTv,F.fv)
D.d.v(a2,q)}}return a2}if(b0!=null&&b0.a===a4.a)A.wD(a3,b0,a5,b1,!0,0,null)
for(a1=D.d.gaf(b2),w=new C.f5(a1,new A.fwq(a4)),v=a4.a,u=a5*0.5;w.C();){s=a1.gR(0)
r=s.y
q=r>0
f=q?Math.sin(u+s.a)*r:0
r=s.c
o=s.d
if(q)n=Math.cos(u+s.a)>=0?1.5707963267948966:-1.5707963267948966
else n=s.x?0.5:s.e
A.wD(a3,new A.xW(v,r+f,o,n,q,!1,!1,!1,s.x,0,!1,!1,"","",-1,0,-1,0),a5,s.f,!1,900+s.a,null)}e=a4.ghn(0)
if(a4.go==="fan"){d=a4.ga5L()&&a4.gM1()&&a4.fy?a5*7:0
a3.b=703
for(a1=e*0.5,a0=0;a0<4;++a0){p=d+a0*3.141592653589793/2
a3.wj(new A.r(Math.cos(p)*15,115,a1+Math.sin(p)*15),B.h6T,B.nP,0.1,-p)}}return a2},
hVo(d){var w
A:{if(5===d){w=B.eGo
break A}if(9===d){w=B.eLg
break A}if(10===d){w=B.eyW
break A}if(11===d){w=B.eMc
break A}if(2===d||4===d||8===d){w=B.eoM
break A}w=B.eBw
break A}return w},
fsh(b0,b1,b2,b3,b4,b5,b6,b7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9
for(w=b2.a,v=b2.b,u=b2.c,t=b1.a,s=b1.b,r=b1.c,q=b3.a,p=q*0.1,o=b3.b,n=o*0.1,m=b3.c,l=m*0.1,k=q*0.2,j=o*0.2,i=m*0.2,q*=0.3,o*=0.3,m*=0.3,h=-b4/2,g=b5-1,f=b5===1,e=0;e<b5;++e){d=f?0:h+b4*e/g
for(a0=b6.length,a1=s+v*d,a2=t+w*d+0,a3=r+u*d+0,a4=a2+p,a5=a3+l,a6=a2+k,a7=a3+i,a2+=q,a3+=m,a8=0;a8<b6.length;b6.length===a0||(0,C.M)(b6),++a8){a9=a1+b6[a8]
A.kD(b0,new A.r(a4,a9+n,a5),b2,B.e8,14,17,B.ky,b3,0)
A.kD(b0,new A.r(a6,a9+j,a7),b2,B.e8,11,14,b7,b3,0.6)
A.kD(b0,new A.r(a2,a9+o,a3),b2,B.e8,11,0.9,B.ky,b3,0)}}},
hjs(a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0
A:{if("shop"===a2){w=B.eTR
break A}if("hospital"===a2){w=B.eTM
break A}if("firestation"===a2){w=B.eTt
break A}if("school"===a2){w=B.eTm
break A}w=B.eT5
break A}w=w.a
v=w[0]
u=w[1]
t=w[2]
s=w[3]
r=w[4]
q=u/2
p=v/2
a1.x=$.dQ=$.dQ+1
a1.hm(new A.r(0,t/2,0),new A.r(v,t,u),s,2)
a1.aO(new A.r(0,2.5,0),new A.r(v+3,5,u+3),B.ade)
w=a2==="hospital"
if(w)o=C.a([14,30,46],x.n)
else if(a2==="school"){n=C.a([14,32],x.n)
o=n}else{n=x.n
n=a2==="house2"?C.a([26],n):C.a([22],n)
o=n}m=D.o.E(D.k.bm(v/24),2,5)
n=a2==="firestation"
l=n?C.a([34],x.n):o
k=v-30
A.fsh(a1,new A.r(0,0,q).a9(0,B.f_),B.hy,B.ij,k,m,l,B.hS)
j=q+0.4
if(n){A.kD(a1,new A.r(-14,17,j),B.hy,B.e8,34,34,D.he,B.ij,0.2)
for(i=q+0.5,h=0;h<6;++h)A.kD(a1,new A.r(-14,4+h*6,i),B.hy,B.e8,33,0.8,D.dv,B.ij,0)
A.kD(a1,new A.r(24,15,j),B.hy,B.e8,14,30,B.vv,B.ij,0)}else{A.kD(a1,new A.r(0,14,q+0.3),B.hy,B.e8,18,28,B.ky,B.ij,0)
A.kD(a1,new A.r(0,13,j),B.hy,B.e8,14,26,B.vv,B.ij,0.2)}switch(a2){case"hospital":i=t-8
A.kD(a1,new A.r(0,i,j),B.hy,B.e8,30,9,D.bx,B.ij,0)
j=q+0.5
A.kD(a1,new A.r(0,i,j),B.hy,B.e8,24,2.6,D.c,B.ij,0)
A.kD(a1,new A.r(0,i,j),B.hy,B.e8,2.6,7,D.c,B.ij,0)
break
case"shop":for(i=q+3,h=0;h<6;++h){g=(h&1)===0?D.aw:D.c
A.kD(a1,new A.r(-30+h*12,33,i),B.hy,B.e8,6,6,g,B.ij,0)}A.kD(a1,new A.r(0,t-4,j),B.hy,B.e8,36,6,a3,B.ij,0)
break
case"firestation":A.kD(a1,new A.r(0,t-5,j),B.hy,B.e8,40,7,D.bI,B.ij,0)
break
case"school":A.kD(a1,new A.r(0,t-5,j),B.hy,B.e8,40,7,D.bj,B.ij,0)
break}j=-q
A.fsh(a1,new A.r(0,0,j),B.qG,B.t8,k,m,l,B.hS)
A.kD(a1,new A.r(0,13,j-0.4),B.qG,B.e8,14,26,B.vv,B.t8,0)
f=D.o.E(D.k.bm(u/24),1,3)
k=u-26
A.fsh(a1,new A.r(p,0,0),B.t8,B.hy,k,f,l,B.hS)
i=-p
A.fsh(a1,new A.r(i,0,0),B.ij,B.qG,k,f,l,B.hS)
a1.x=0
k=x.z
g=C.a([],k)
e=new A.fk(g)
e.r=!0
e.b=a1.b
e.f=a1.f
if(a2==="house2"||a2==="school"){w=C.a([],k)
d=new A.fk(w)
d.r=!0
d.b=a1.b
d.f=a1.f
d.aY(B.f_,new A.r(v+6,2.5,u*0.58),r,0.1)
n=a1.a
k=t+5
D.d.v(n,A.o8(w,0.42,0,new A.r(0,k,u*0.25)))
a0=-u
D.d.v(n,A.o8(w,-0.42,0,new A.r(0,k,a0*0.25)))
k=p+0.2
w=t+12
a1.a6J(new A.r(k,t,q),new A.r(k,t,j),new A.r(k,w,0),s,B.hy,!1)
i-=0.2
a1.a6J(new A.r(i,t,j),new A.r(i,t,q),new A.r(i,w,0),s,B.qG,!1)
if(a2==="school"){w=q-10
e.aO(new A.r(0,t+18,w),B.fTZ,D.aeY)
e.aO(new A.r(0,t+30,w),B.fUM,r)
e.dL(new A.r(0,t+31,w),new A.r(0,t+46,w),0.6,D.dv,6)
e.aO(new A.r(5,t+44,w),B.h3g,D.aw)}else e.aO(new A.r(v*0.28,t+14,a0*0.1),B.fYl,B.agw)}else{k=v+2
e.aY(new A.r(0,t+1.5,0),new A.r(k,3,u+2),r,0.05)
e.aO(new A.r(0,t+4,q+0.5),new A.r(k,4,1.4),a3)
if(w){w=v*0.25
k=-u*0.15
e.aO(new A.r(w,t+5,k),B.fV0,D.bs)
e.aO(new A.r(w,t+6.2,k),B.h3u,D.c)}if(n){w=p-10
n=-u*0.2
e.aO(new A.r(w,t+16,n),B.fTJ,B.afr)
e.aO(new A.r(w,t+32,n),B.aUq,r)}}D.d.v(a1.a,g)},
i_g(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=d.f,f=d.e
d.f=1
d.e=0
if(e==="road"){d.Gv(B.h04,B.h11,B.h_7,B.h1k,B.LU,B.e8)
d.e=90
for(w=0;w<2;++w){v=B.QL[w]
u=v-0.7
t=v+0.7
d.Gv(new A.r(-20,0.9,u),new A.r(20,0.9,u),new A.r(20,0.9,t),new A.r(-20,0.9,t),B.Xf,B.e8)}for(w=0;w<2;++w){v=B.dib[w]
u=v-0.8
t=v+0.8
d.Gv(new A.r(-20,0.9,u),new A.r(20,0.9,u),new A.r(20,0.9,t),new A.r(-20,0.9,t),D.bO,B.e8)}d.f=g
d.e=f
return}d.Gv(B.h1a,B.h7d,B.h_5,B.fYO,B.LU,B.e8)
d.e=90
A:{if("roadturn"===e){u=B.dgW
break A}if("roadtee"===e){u=B.cZE
break A}u=B.cg5
break A}for(t=u.length,w=0;w<t;++w){s=u[w]
r=s.a
q=s.b
for(s=q!==0,p=r!==0,o=30*r,n=30*q,m=0;m<2;++m){l=B.QL[m]
k=p?o:l
j=s?n:l
i=p?36:1.4
h=s?36:1.4
d.aO(new A.r(k,0.95,j),new A.r(i,0.1,h),B.Xf)}}d.f=g
d.e=f},
hiY(d,e,f,g){var w=new A.fcY(d,g)
switch(e){case"dog":d.aY(B.x_,B.h6z,f,0.05)
d.fo(B.fZq,3.4,f,4,8)
d.aO(B.h1A,B.fYh,D.LN)
d.aO(B.h2W,B.aVa,B.hm)
d.aO(B.h7n,B.aVa,B.hm)
d.dL(B.h3J,B.fRa,0.8,f,5)
w.$5(B.dfG,6,6,1.7,f)
break
case"cat":d.aY(B.Ad,B.fYc,f,0.05)
d.fo(B.fSz,2.7,f,4,8)
d.aO(B.h64,B.aUt,f)
d.aO(B.h68,B.aUt,f)
d.dL(B.fSy,B.fR2,0.7,f,5)
w.$5(B.ddm,4,4,1.2,f)
break
case"cow":d.aY(B.a9J,B.fTF,D.bN,0.05)
d.aO(B.h6j,B.h5D,B.hm)
d.aO(B.h_M,B.fYf,B.hm)
d.aO(B.fRq,B.fYq,D.bN)
d.aO(B.fRh,B.h7G,D.nO)
d.aO(B.fYG,B.aUu,D.bO)
d.aO(B.h7j,B.aUu,D.bO)
d.dL(B.fRt,B.fSB,0.7,B.hm,5)
w.$5(B.d2h,11,11,3.2,D.bO)
break
case"sheep":d.fo(B.a9I,8.5,D.pQ,4,8)
d.fo(B.fR8,7,D.pQ,4,8)
d.fo(B.fR4,3.4,B.hm,4,8)
w.$5(B.dfA,8,8,1.8,B.hm)
break
case"chicken":d.fo(B.Ad,4,f,4,8)
d.fo(B.fQQ,2.2,f,3,6)
d.aO(B.fR_,B.h5x,D.bx)
d.aO(B.fZy,B.fZ8,D.aE)
d.aO(B.fSD,B.fWw,f)
w.$5(B.d0n,3,3,0.8,D.aE)
break
case"horse":d.aY(B.fRx,B.fTe,f,0.1)
d.KX(B.fRH,B.fRY,4.2,f,3,8)
d.aO(B.fS_,B.fX1,f)
d.aO(B.fS8,B.h5w,B.hm)
d.dL(B.fRM,B.fSC,1.8,B.hm,6)
w.$5(B.d_H,16,16,2.6,f)
break
default:d.aO(B.Ad,B.fYo,f)}},
fr3(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=C.a([],x.z)
for(w=d.length,v=e.a,u=e.b,t=e.c,s=f.a,r=f.b,q=f.c,p=x.o,o=0;o<d.length;d.length===w||(0,C.M)(d),++o){n=d[o]
m=C.a([],p)
for(l=n.a,k=l.length,j=0;j<l.length;l.length===k||(0,C.M)(l),++j){i=l[j]
m.push(new A.r(s+(i.a-s)*v,r+(i.b-r)*u,q+(i.c-q)*t))}l=n.b
h.push(new A.lP(m,new A.r(l.a/v,l.b/u,l.c/t).goT(0),n.c,n.d,n.e,n.f,n.r,n.w,n.x,n.y,n.z))}return h},
hSb(d,e,f){var w,v,u,t,s,r=e.z
if(r.length===0)return
w=e.e
v=new A.fcO(e,Math.sin(w),Math.cos(w))
u=d.b
d.b=0
switch(r){case"feed":d.KX(v.$3(14,0,8),v.$3(14,9,8),4.5,B.nP,5.5,10)
for(r=f*0.9,t=0;t<9;++t){s=D.k.F(r+t/9,1)
d.fT(v.$3(10+s*26,26-s*22,Math.sin(t*2.1)*4),0.9,D.n4,3,5,0)}break
case"cook":d.aY(v.$2(18,9),B.fUJ,D.j7,0.2)
d.aO(v.$2(18,18.4),B.fY_,D.fu)
d.d=0.3
for(r=f*0.5,t=0;t<6;++t){s=D.k.F(r+t/6,1)
d.fT(v.$2(18+Math.sin(t*1.9)*3,22+s*22),2+s*4,D.EO,3,6,0)}d.d=1
break
case"wash":d.KX(v.$3(20,0,-10),v.$3(20,8,-10),4,D.aR,5,10)
for(r=f*1.4,t=0;t<12;++t){s=D.k.F(r+t/12,1)
d.fT(v.$3(8+s*24,30-s*s*26,6),0.8,D.hn,3,5,0.3)}break
case"water":d.aY(v.$3(12,22,7),B.fYn,D.eh,0.2)
for(r=f*1.2,t=0;t<10;++t){s=D.k.F(r+t/10,1)
d.fT(v.$3(18+s*8,22-s*22,7),0.7,D.hn,3,5,0.3)}break
case"teach":d.aY(v.$2(22,26),B.h3I,D.dY,0.1)
d.aO(v.$2(22.8,26),B.h1j,D.bN)
break
case"duty":d.aO(v.$3(0,74,0),B.h_I,D.K)
break}d.b=u},
wD(d,e,f,g,h,i,j){var w,v,u,t
if(e.Q){w=C.a([],x.z)
A.wD(new A.fk(w),A.ati(!1,0,-1,"",!1,0,"",-1,e.CW*0.5,!1,!1,!1,e.a,!1,e.e,0,0,0),f,g,h,i,j)
D.d.v(d.a,A.o8(w,1.5707963267948966,e.d,new A.r(e.b,9,e.c)))
return}w=g.e
v=$.fVV.h(0,w)
if(v==null){A.hZ3(d,e,f,i,w==="xbot"?B.SQ:new A.rF(g.a,g.b,g.c,g.d,"human"))
return}w=e.e
u=e.z
t=w&&!u&&e.CW>0?e.CW*12:null
D.d.v(d.a,v.cUv(h,i,e.y,u,f,j,t,w,e.b,e.d,e.c))},
hZ3(b2,b3,b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0=C.a([],x.z),b1=new A.fk(b0)
b1.b=b5
b1.r=!0
w=b6.a
v=C.ar(w,D.w,0.16)
v.toString
u=b6.b
t=b6.c
s=b6.d
r=b3.e
q=r?Math.sin(b3.CW*3.141592653589793):0
p=x.n
o=C.a([],p)
for(n=0;n<2;++n)o.push(q*F.je[n]*0.6)
m=C.a([],p)
for(l=o.length,n=0;n<o.length;o.length===l||(0,C.M)(o),++n){k=o[n]
m.push(r?Math.max(0,-k)*1.5+0.1:0.04)}p=C.a([],p)
for(j=0;j<2;++j)p.push(16*Math.cos(o[j])+15.5*Math.cos(o[j]+m[j]))
i=Math.max(p[0],p[1])+3.3
h=new A.fnb(b5,b1)
g=new A.fmY(b1)
for(j=0;j<2;++j){p=(j===0?-1:1)*2.9
f=new A.r(p,i,0)
p+=0
l=i+-16*Math.cos(o[j])
e=0+-16*Math.sin(o[j])
d=new A.r(p,l,e)
a0=o[j]+m[j]
p+=0
l+=-15.5*Math.cos(a0)
e+=-15.5*Math.sin(a0)
b1.fo(f,3.6,s,4,8)
g.$5(f,d,3.5,2.7,s)
g.$5(d,new A.r(p,l,e),2.6,1.9,s)
p+=0
e+=2
h.$3(new A.fmZ(),B.h1J,new A.r(p,l+-1.6,e))
h.$3(new A.fn_(),B.fZH,new A.r(p,l+-2.9,e))}h.$3(new A.fn0(s),B.h_r,new A.r(0,i+1.2,0))
h.$3(new A.fn3(t),B.h1m,new A.r(0,i+2.5,0))
h.$3(new A.fn4(),B.fUd,new A.r(0,i+2.4,0))
h.$3(new A.fn5(t),B.h0A,new A.r(0,i+19.6,0))
b1.dL(new A.r(0,i+20.5,0.2),new A.r(0,i+24.2,0.5),2,w,8)
p=i+29
a1=new A.r(0,p,0.6)
h.$3(new A.fn6(w),B.h3y,a1)
h.$3(new A.fn7(w),B.h2v,a1.a9(0,B.fWt))
h.$3(new A.fn8(u),B.fYb,a1.a9(0,B.h1p))
h.$3(new A.fn9(u),B.h_x,a1.a9(0,B.h7I))
for(o=p+-0.2,m=p+0.4,p+=1.9,n=0;n<2;++n){a2=F.je[n]
b1.fo(new A.r(0+a2*4.2,o,0.6),1,w,3,6)
l=0+a2*1.8
h.$3(new A.fna(),B.h6a,new A.r(l,m,4.75))
b1.fo(new A.r(l,m,5.1),0.5,D.nb,3,6)
b1.aO(new A.r(l,p,4.8),B.h74,u)}h.$3(new A.fn1(v),B.h7k,a1.a9(0,B.fZz))
b1.aO(a1.a9(0,B.h1t),B.h_W,B.bjw)
for(v=i+19.3,p=-q,o=b3.f,m=b3.r,l=b3.w,n=0;n<2;++n){a2=F.je[n]
e=a2*7
a3=p*a2*0.5
a4=r?-0.45:-0.12
a5=a2>0
if(a5&&o){a3=-0.8
a4=-1.2}if(a5&&m){a3=-1
a4=-0.6}if(a5&&l){a3=-1.55
a4=-0.1}a6=v+-11.5*Math.cos(a3)
a7=0+-11.5*Math.sin(a3)
a8=new A.r(e,a6,a7)
a0=a3+a4
a6+=-10.5*Math.cos(a0)
a7+=-10.5*Math.sin(a0)
g.$5(new A.r(e,v,0),a8,2.8,2.3,t)
g.$5(a8,new A.r(e,a6,a7),2.1,1.6,w)
h.$3(new A.fn2(w),B.h5y,new A.r(e,a6+-1.3,a7+0.2))
if(a5&&o){a9=a7+0
b1.dQ(new A.r(e,a6+-2.6,a9),new A.r(e,a6+2.6,a9),1.7,D.aR,0.5,8)}if(a5&&m){b1.aY(new A.r(e,a6+-0.4,a7+2.6),B.h0G,D.nb,0.3)
b1.aO(new A.r(e,a6+0.2,a7+3.8),B.fZe,D.aw)}}D.d.v(b2.a,A.o8(b0,0,b3.d,new A.r(b3.b,b3.y,b3.c)))},
i0d(d,e){var w,v,u,t,s,r,q,p,o,n=C.a([],x.z)
for(w=d.length,v=x.o,u=0;u<d.length;d.length===w||(0,C.M)(d),++u){t=d[u]
s=C.a([],v)
for(r=t.a,q=r.length,p=0;p<r.length;r.length===q||(0,C.M)(r),++p){o=r[p]
s.push(new A.r(o.a*e,o.b*e,o.c*e))}n.push(new A.lP(s,t.b,t.c,t.d,t.e,t.f,t.r,t.w,t.x,t.y,t.z))}return n},
h0s(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=C.ar(f,D.w,Math.abs(-0.25))
h.toString
w=C.ar(f,D.c,Math.abs(0.2))
w.toString
A:{if("bed"===e){d.aY(B.Ad,B.fX8,B.pX,0.1)
d.aY(B.fR6,B.fWQ,f,0.05)
d.aO(B.h4q,B.aUw,B.ag5)
d.aO(B.fTI,B.aUw,B.ag5)
d.aY(B.fRA,B.fXa,B.pX,0.1)
d.aO(B.fRk,B.h3D,w)
break A}if("nightstand"===e){d.aY(B.x_,B.fTS,f,0.1)
d.aO(B.h2z,B.fXF,h)
d.aO(B.h7c,B.fVY,B.afJ)
d.aO(B.fRD,B.fYD,B.o0)
break A}if("wardrobe"===e){d.aY(B.fRX,B.fWc,f,0.1)
d.aO(B.fYZ,B.fWm,h)
d.aY(B.h0q,B.aVw,B.EH,0.8)
d.aY(B.h7v,B.aVw,B.EH,0.8)
break A}if("desk"===e){d.aY(B.UR,B.fWi,f,0.1)
d.aO(B.h4z,B.aUB,h)
d.aO(B.fUF,B.aUB,h)
d.aY(B.fSe,B.fUG,B.Lq,0.5)
d.aO(B.fRU,B.fXo,D.j7)
break A}if("rug"===e){d.hm(B.h6t,B.fUa,f,2)
d.aO(B.fYM,B.h5I,w)
break A}if("sofa"===e){d.aY(B.x_,B.fY0,f,0.05)
d.aY(B.fRz,B.fY1,h,0.05)
d.aY(B.h4N,B.aUV,h,0.05)
d.aY(B.fVJ,B.aUV,h,0.05)
d.aO(B.h4p,B.aUx,w)
d.aO(B.fTH,B.aUx,w)
break A}if("armchair"===e){d.aY(B.x_,B.fVl,f,0.05)
d.aY(B.fRy,B.fVn,h,0.05)
d.aO(B.h4l,B.aUS,h)
d.aO(B.fTw,B.aUS,h)
break A}if("coffee"===e){d.aY(B.K7,B.fW4,f,0.2)
for(v=0;v<4;++v){w=B.dhQ[v]
d.aO(new A.r(w.a,6.5,w.b),B.fV8,h)}d.aY(B.h_9,B.fYm,D.bO,0.5)
break A}if("tvstand"===e){d.aY(B.a9N,B.fWH,f,0.1)
d.aO(B.fXY,B.fZP,h)
d.aO(B.fRj,B.fUy,B.hm)
break A}if("dining"===e){d.aY(B.UR,B.fWI,f,0.2)
for(v=0;v<4;++v){w=B.cLj[v]
d.aO(new A.r(w.a,13,w.b),B.fVV,h)}break A}if("chair"===e){d.aY(B.fRf,B.fU1,f,0.1)
d.aY(B.fRO,B.fU_,f,0.1)
for(v=0;v<4;++v){w=B.d7M[v]
d.aO(new A.r(w.a,7.5,w.b),B.fUv,h)}break A}if("plant"===e){d.dL(B.f_,B.a9N,5,D.d9,10)
d.fo(B.a9J,8,B.EF,5,8)
d.fo(B.fVU,5,B.X3,4,8)
break A}if("lamp"===e){d.dL(B.f_,B.e8,4.5,B.hm,10)
d.dL(B.e8,B.aUc,0.7,B.hm,6)
d.KX(B.fSg,B.a9L,6,B.o0,3.5,12)
break A}if("console"===e){d.aY(B.fRG,B.aUQ,f,0.15)
d.aO(B.h_y,B.aUA,h)
d.aO(B.fYR,B.aUA,h)
d.aO(B.x_,B.h5t,h)
break A}if("shelf"===e){d.aY(B.a9K,B.fVH,f,0.1)
for(u=0;u<4;++u){h=10+u*15
d.aO(new A.r(0,h,1),B.fVw,B.hm)
w=D.o.F(u,2)
d.aO(new A.r(-8+w*6,h,2),B.fX3,[D.el,D.dK,D.eh,D.dV][u])
d.aO(new A.r(4+w*4,h,2),B.fYp,[D.dV,D.eh,D.el,D.dK][u])}break A}if("tree"===e){d.KX(B.f_,B.fRW,4.2,B.pX,3,8)
d.fo(B.aUc,17,B.EF,5,9)
d.fo(B.fYC,11,B.X3,4,8)
d.fo(B.h5l,12,B.bj8,4,8)
break A}if("pine"===e){d.dL(B.f_,B.aU4,3,B.pX,8)
for(u=0;u<3;++u){h=u*14
d.KX(new A.r(0,8+h,0),new A.r(0,26+h,0),14-u*3.5,B.adI,1.5,10)}break A}if("bush"===e){d.fo(B.x_,9,B.bfW,4,8)
d.fo(B.fX2,6.5,B.X3,4,8)
break A}if("flowers"===e){for(v=0;v<5;++v){h=B.dgs[v]
t=h.a
s=h.b
d.dL(new A.r(t,0,s),new A.r(t,7,s),0.4,B.adI,5)
d.fo(new A.r(t,8,s),2.2,h.c,3,6)}break A}if("fence"===e){for(v=0;v<4;++v)d.aY(new A.r(B.di7[v],9,0),B.h2p,f,0.05)
d.aO(B.Ad,B.aVO,h)
d.aO(B.a9I,B.aVO,h)
break A}if("lamppost"===e){d.dL(B.f_,B.aUd,1.3,B.hm,5)
d.dL(B.f_,B.fS0,3.5,B.hm,6)
break A}if("bench"===e){d.aY(B.aU6,B.aUQ,f,0.1)
d.aY(B.fRu,B.fWa,f,0.1)
d.aO(B.h4r,B.aUN,B.hm)
d.aO(B.fU3,B.aUN,B.hm)
break A}if("car"===e){d.aY(B.aU4,B.fY7,f,0.4)
d.aY(B.h4X,B.fWf,f,0.4)
d.aY(B.fUc,B.h_l,B.hS,0.6)
d.aO(B.h5H,B.a9P,B.o0)
d.aO(B.h_Z,B.a9P,B.o0)
for(v=0;v<2;++v){t=B.a48[v]
d.dL(new A.r(t,5,-18),new A.r(t,5,-21),5.5,D.nb,12)
d.dL(new A.r(t,5,18),new A.r(t,5,21),5.5,D.nb,12)}break A}if("road"===e||"roadturn"===e||"roadtee"===e||"roadcross"===e){A.i_g(d,e)
break A}if("roundabout"===e){d.dL(B.f_,B.h_f,72,B.LU,16)
d.dL(B.h_z,B.aVz,17,D.bl,10)
d.dL(B.aVz,B.aVg,15,B.bin,10)
d.fo(B.a9N,6,E.WO,3,6)
d.dL(B.aVg,B.a9M,0.9,B.pX,5)
break A}if("house2"===e||"shop"===e||"hospital"===e||"firestation"===e||"school"===e){h=C.a([],x.z)
r=new A.fk(h)
r.b=d.b
r.r=!0
r.f=d.f
A.hjs(r,e,f)
D.d.v(d.a,A.fr3(h,B.h39,B.f_))
break A}if("bighouse"===e){h=C.a([],x.z)
q=new A.fk(h)
q.b=d.b
q.r=!0
q.f=d.f
A.hjs(q,"house2",f)
D.d.v(d.a,A.fr3(h,B.h3U,B.f_))
break A}if("pole"===e){d.KX(B.f_,B.fQY,2.6,B.pX,2,5)
d.aO(B.fQU,B.fWh,B.beg)
for(v=0;v<3;++v){t=B.az3[v]
d.dL(new A.r(t,116,0),new A.r(t,121,0),1.1,D.bN,4)}d.dL(B.fWs,B.fWq,5.5,D.bl,6)
d.aO(B.fTo,B.fUx,D.j7)
break A}if("crate"===e){d.aY(B.a9M,B.fV_,B.jp,0.05)
d.aO(B.h7a,B.fTX,B.vv)
d.fT(B.h50,3.4,D.aw,3,5,0.3)
d.fT(B.fWY,3.4,D.aE,3,5,0.3)
break A}if("billboard"===e){d.x=$.dQ=$.dQ+1
for(v=0;v<2;++v){t=B.a48[v]
d.dL(new A.r(t,0,-1),new A.r(t,40,-1),1.6,D.j7,8)}d.aY(B.fSh,B.fXD,D.cp,0.3)
d.x=0
break A}if("tower"===e||"hq"===e){d.x=$.dQ=$.dQ+1
p=e==="hq"
o=p?170:100
n=p?90:70
m=p?150:A.hnx(f)
l=p?D.bO:B.dnl[D.o.F(f.l()>>>4,6)]
k=new A.fgM(d)
d.aY(new A.r(0,m/2,0),new A.r(o,m,n),l,0.25)
k.$4(o,n,20,m-8)
if(p){h=o*0.66
w=n*0.66
d.aY(new A.r(0,m+60,0),new A.r(h,120,w),D.bN,0.25)
k.$4(h,w,m+16,m+112)
d.aY(new A.r(0,m+124,0),new A.r(o*0.7,8,n*0.7),F.fv,0.4)}else{d.aO(new A.r(0,m+3,0),new A.r(o+4,6,n+4),D.cp)
d.aO(new A.r(o*0.2,m+12,0),new A.r(o*0.3,12,n*0.3),D.dv)}j=p?m+128:m+6
for(h=o*0.3,h=[-h,h],w=j+8,v=0;v<2;++v)d.aO(new A.r(h[v],w,0),B.fVS,D.j7)
h=p?112:84
d.aY(new A.r(0,j+34,0),new A.r(h,38,3),E.jJ,0.3)
h=n/2
A.kD(d,new A.r(0,17,h+0.6),B.hy,B.e8,34,34,D.cp,B.ij,0.5)
A.kD(d,new A.r(0,17,h+0.7),B.e8.FN(B.ij),B.e8,1.2,34,B.hS,B.ij,0.6)
d.aY(new A.r(0,38,h+5),B.fWg,F.fv,0.3)
d.x=0
break A}if("store"===e){d.x=$.dQ=$.dQ+1
d.aY(B.UR,B.aUm,f,0.2)
d.aO(B.a9L,B.aUn,D.cp)
A.kD(d,B.aVT,B.hy,B.e8,112,30,B.hS,B.ij,0.6)
d.aO(B.aUb,B.aUl,D.bx)
d.aO(B.aUe,B.aUi,D.au)
d.x=0
break A}if("dmv"===e){d.x=$.dQ=$.dQ+1
d.aY(B.UR,B.aUm,D.aM,0.2)
d.aO(B.a9L,B.aUn,D.d8)
A.kD(d,B.aVT,B.hy,B.e8,112,30,B.hS,B.ij,0.6)
d.aO(B.aUb,B.aUl,D.bj)
d.aO(B.aUe,B.aUi,D.d8)
d.aO(B.h0D,B.h3f,D.bI)
d.aO(B.h6U,B.fXm,D.d8)
d.x=0
break A}if("ubstation"===e){d.x=$.dQ=$.dQ+1
for(v=0;v<2;++v){t=B.did[v]
for(i=0;i<2;++i){s=E.Rd[i]
d.dL(new A.r(t,0,s),new A.r(t,50,s),2.2,D.aJ,6)}}d.aY(B.aUd,B.fTk,D.au,0.3)
d.aO(B.fSr,B.fTm,D.bI)
d.aY(B.fRN,B.fTd,D.dt,0.6)
d.aO(B.fQV,B.fY4,D.bs)
d.aO(B.fSw,B.fXI,D.aJ)
d.dL(B.fWL,B.fWO,2,D.j7,6)
d.aO(B.fWP,B.fVM,D.au)
d.aO(B.fZI,B.h_B,D.bI)
d.aO(B.h72,B.h5s,D.c)
d.x=0
break A}if("gasstation"===e){d.x=$.dQ=$.dQ+1
for(v=0;v<2;++v){t=B.az6[v]
for(i=0;i<2;++i){s=B.cEb[i]
d.dL(new A.r(t,0,s),new A.r(t,46,s),2.4,D.bO,6)}}d.aY(B.fSj,B.fTr,D.bx,0.3)
d.aO(B.h7l,B.fTt,F.fv)
for(v=0;v<2;++v){t=E.Rd[v]
d.aY(new A.r(t,9,20),B.fXR,D.ip,0.3)
d.aO(new A.r(t,15,20.2),B.fV5,D.bx)}d.aY(B.fRm,B.fY2,f,0.2)
d.dL(B.h59,B.h5a,2.2,D.j7,6)
d.aO(B.h5b,B.fVy,D.au)
d.x=0
break A}if("townsign"===e){d.x=$.dQ=$.dQ+1
for(v=0;v<2;++v){t=B.di_[v]
d.dL(new A.r(t,0,0),new A.r(t,316,0),5.5,D.j7,6)}d.aY(B.fRL,B.fVC,E.jJ,0.3)
d.aO(B.fRS,B.aUM,F.fv)
d.aO(B.fRi,B.aUM,F.fv)
d.x=0
break A}if("adboard"===e){d.x=$.dQ=$.dQ+1
for(v=0;v<2;++v){t=B.dhZ[v]
d.dL(new A.r(t,0,0),new A.r(t,205,0),4.5,D.j7,6)}d.aY(B.fR3,B.fVu,E.jJ,0.3)
d.aO(B.fRo,B.aUG,F.fv)
d.aO(B.aUf,B.aUG,F.fv)
d.x=0
break A}if("cornersign"===e){d.x=$.dQ=$.dQ+1
for(v=0;v<2;++v){t=B.az6[v]
d.dL(new A.r(t,0,0),new A.r(t,125,0),3,D.j7,6)}d.aY(B.fQX,B.fTN,E.jJ,0.3)
d.aO(B.fRc,B.fTP,F.fv)
d.x=0
break A}if("firetruck"===e){d.aY(B.aU5,B.fYz,D.bx,0.3)
d.aY(B.fVD,B.fUE,D.bx,0.3)
d.aY(B.h2c,B.fWT,B.hS,0.6)
d.aO(B.h4d,B.h63,D.dv)
for(u=0;u<6;++u)d.aO(new A.r(-34+u*11,24,0),B.h13,D.dv)
d.aO(B.fVE,B.aV_,D.d0)
d.aO(B.h2I,B.fZX,B.bkg)
for(v=0;v<3;++v){t=B.di9[v]
d.dL(new A.r(t,6,-19),new A.r(t,6,-22.5),6,D.nb,12)
d.dL(new A.r(t,6,19),new A.r(t,6,22.5),6,D.nb,12)}break A}if("ambulance"===e){d.aY(B.K7,B.fY8,D.c,0.4)
d.aY(B.fVm,B.fUT,D.c,0.4)
d.aY(B.h_e,B.h3n,B.hS,0.6)
d.aO(B.h6F,B.aVj,D.bx)
d.aO(B.h0N,B.aVj,D.bx)
d.aO(B.aVF,B.h0c,D.bx)
d.aO(B.aVF,B.fZE,D.bx)
d.aO(B.fVp,B.aV_,D.aw)
for(v=0;v<2;++v){t=B.a48[v]
d.dL(new A.r(t,6,-19),new A.r(t,6,-22.5),6,D.nb,12)
d.dL(new A.r(t,6,19),new A.r(t,6,22.5),6,D.nb,12)}break A}if("dog"===e||"cat"===e||"cow"===e||"sheep"===e||"chicken"===e||"horse"===e){A.hiY(d,e,f,0)
break A}if("pond"===e){h=C.a([],x.z)
q=new A.fk(h)
q.b=d.b
q.f=d.f
q.r=!0
q.dQ(B.f_,B.h3Y,28,B.blm,0.8,22)
D.d.v(d.a,A.fr3(h,B.fZ9,B.f_))
for(v=0;v<3;++v){h=B.d3r[v]
d.fo(new A.r(h.a,1.2,h.b),2.6,B.aff,3,6)}break A}if("swing"===e){d.dL(B.h4A,B.fUV,1.6,D.d9,8)
for(v=0;v<2;++v){t=E.a47[v]
d.dL(new A.r(t,38,0),new A.r(t,0,14),1.4,D.d9,6)
d.dL(new A.r(t,38,0),new A.r(t,0,-14),1.4,D.d9,6)}for(v=0;v<2;++v){t=E.a49[v]
d.dL(new A.r(t,38,0),new A.r(t,15,0),0.3,B.hm,4)}d.aO(B.K7,B.h6L,f)
break A}if("shed"===e){d.aY(B.K7,B.fWz,f,0.05)
d.aO(B.a9K,B.fWK,B.Xk)
d.aO(B.h3P,B.h3E,h)
break A}if("doghouse"===e){d.aY(B.a9M,B.fUU,f,0.05)
d.aO(B.fVf,B.h5W,B.Xk)
d.aO(B.h2b,B.h6X,B.Lq)
break A}d.aO(B.Ad,B.fSZ,f)}},
ceI:function ceI(){},
fKm:function fKm(d,e,f){this.a=d
this.b=e
this.c=f},
fKk:function fKk(d,e,f){this.a=d
this.b=e
this.c=f},
fKj:function fKj(d,e,f){this.a=d
this.b=e
this.c=f},
fKl:function fKl(d){this.a=d},
ftr:function ftr(d){this.a=d},
ftd:function ftd(){},
fto:function fto(){},
ftp:function ftp(d,e,f){this.a=d
this.b=e
this.c=f},
fte:function fte(){},
ftf:function ftf(){},
ftg:function ftg(){},
fth:function fth(d){this.a=d},
ftj:function ftj(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
ftk:function ftk(d,e,f){this.a=d
this.b=e
this.c=f},
ftl:function ftl(d,e,f){this.a=d
this.b=e
this.c=f},
ftm:function ftm(d,e,f){this.a=d
this.b=e
this.c=f},
ftn:function ftn(d,e,f){this.a=d
this.b=e
this.c=f},
ftq:function ftq(d){this.a=d},
fti:function fti(d){this.a=d},
fmE:function fmE(d){this.a=d},
fmF:function fmF(d){this.a=d},
fmA:function fmA(d){this.a=d},
fmB:function fmB(d,e){this.a=d
this.b=e},
fmC:function fmC(d){this.a=d},
fm1:function fm1(){},
fm2:function fm2(){},
fm3:function fm3(d){this.a=d},
fme:function fme(d){this.a=d},
fmp:function fmp(){},
fmD:function fmD(d,e){this.a=d
this.b=e},
fmu:function fmu(d){this.a=d},
fmv:function fmv(d){this.a=d},
fmw:function fmw(d){this.a=d},
fmx:function fmx(d){this.a=d},
fmy:function fmy(d){this.a=d},
fmz:function fmz(d){this.a=d},
fm4:function fm4(d){this.a=d},
fm5:function fm5(d){this.a=d},
fm6:function fm6(d){this.a=d},
fm7:function fm7(d){this.a=d},
fm8:function fm8(d){this.a=d},
fm9:function fm9(d){this.a=d},
fma:function fma(){},
fmb:function fmb(){},
fmc:function fmc(){},
fmd:function fmd(){},
fmf:function fmf(d){this.a=d},
fmg:function fmg(d){this.a=d},
fmh:function fmh(d){this.a=d},
fmi:function fmi(d){this.a=d},
fmj:function fmj(){},
fmk:function fmk(){},
fml:function fml(){},
fmm:function fmm(){},
fmn:function fmn(){},
fmo:function fmo(d,e){this.a=d
this.b=e},
fmq:function fmq(d){this.a=d},
fmr:function fmr(d){this.a=d},
fms:function fms(){},
fmt:function fmt(){},
fwo:function fwo(){},
fwp:function fwp(d){this.a=d},
fwq:function fwq(d){this.a=d},
fcY:function fcY(d,e){this.a=d
this.b=e},
fcO:function fcO(d,e,f){this.a=d
this.b=e
this.c=f},
fnb:function fnb(d,e){this.a=d
this.b=e},
fmY:function fmY(d){this.a=d},
fmZ:function fmZ(){},
fn_:function fn_(){},
fn0:function fn0(d){this.a=d},
fn3:function fn3(d){this.a=d},
fn4:function fn4(){},
fn5:function fn5(d){this.a=d},
fn6:function fn6(d){this.a=d},
fn7:function fn7(d){this.a=d},
fn8:function fn8(d){this.a=d},
fn9:function fn9(d){this.a=d},
fna:function fna(){},
fn1:function fn1(d){this.a=d},
fn2:function fn2(d){this.a=d},
fgM:function fgM(d){this.a=d},
h9r(){var w=x.S
return new A.bTo(C.ey([72],w),C.aX(w),C.aX(w),C.aX(w))},
i45(d){var w
A:{if(81===d){w="outlet"
break A}if(82===d){w="switch"
break A}if(84===d){w="gfci"
break A}if(86===d||87===d){w="ptrap"
break A}if(85===d){w="faucet"
break A}w=null
break A}return w},
ago(a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=C.a([],x.z),a0=new A.fk(d)
a0.b=70
a0.hm(B.h3b,B.h5T,B.bic,4)
a0.c=1
a0.b=91
w=new A.ftw(a0)
w.$3(B.fZD,B.fYU,15)
w.$4$alongX(B.h5r,B.h1T,11,!1)
w.$4$alongX(B.fWS,B.fZ3,11,!1)
w.$4$alongX(B.h4s,B.fZV,6,!1)
w.$4$alongX(B.fXQ,B.h1U,6,!1)
for(v=0;v<=12;++v)a0.aDg(new A.r(-12+v*2,8.4,0),B.h2x,B.XC,!1,0.05)
a0.c=2
a0.b=92
u=new A.ftt(a0)
u.$2(B.cnA,B.tB)
u.$2(B.df1,B.nX)
u.$2(B.djY,B.nX)
t=new A.fts(a0)
t.$1(B.cXn)
t.$1(B.d26)
a0.c=3
a0.b=93
s=new A.ftv(a0)
s.$1(B.cWl)
s.$2$col(B.cUI,B.oK)
s.$2$col(B.cTP,B.oK)
s.$1(B.dbY)
a0.c=4
a0.b=0
a0.d=0.22
a0.hm(B.fZ2,B.h16,B.AS,4)
a0.hm(B.h12,B.aVq,B.AS,4)
a0.hm(B.fZG,B.aVq,B.AS,4)
a0.hm(B.h_K,B.aVv,B.AS,3)
a0.hm(B.h78,B.aVv,B.AS,3)
a0.d=1
a0.c=5
a0.e=0.3
a0.b=0
a0.n6(B.h49,B.fZ_,B.bfH,0.1,4)
a0.b=71
a0.aY(B.h3j,B.h2y,B.WU,0.5)
a0.aO(B.h6K,B.h_p,B.ER)
r=[72,73,74,75,76]
for(q=a1.d,p=a1.e,v=0;v<5;++v){o=D.o.F(v,2)
n=D.o.an(v,2)
m=r[v]
l=q.q(0,m)
k=p.q(0,m)
a0.b=m
m=9.55+o*0.5
j=5.7-n*0.5
a0.aY(new A.r(m,j,-7.5),B.fYA,B.Yq,0.3)
if(l)i=0
else i=k?-0.07:0.07
if(l)h=D.ca
else h=k?D.bl:D.bO
a0.aY(new A.r(m+0,j+i,-7.42),B.h_4,h,0.4)}a0.b=90
a0.aY(B.h1V,B.fWZ,B.bpC,0.1)
a0.aY(B.h5v,B.fZn,B.Ya,0.1)
a0.aY(B.h7D,B.aVN,B.Ya,0.1)
a0.aY(B.fZg,B.aVN,B.Ya,0.1)
g=new A.ftu(a0)
g.$3(81,B.fXZ,a1.x?B.xI:B.XT)
a0.b=81
a0.aO(B.h1W,B.aVH,B.F1)
a0.aO(B.h0h,B.aVH,B.F1)
g.$5$h$w(82,B.h6O,G.Y4,0.65,0.4)
a0.b=82
a0.aY(B.h3M,B.fWW,B.aeB,0.4)
f=!q.q(0,72)
a0.b=83
a0.dQ(B.h3A,B.aVb,0.5,B.bne,0.4,14)
a0.baZ(B.h6e,0.3,f?Y.XX:B.bhT,0.7)
if(f){a0.b=0
a0.d=0.22
a0.fT(B.aUZ,1.5,B.Xc,4,10,0)
a0.d=1}a0.b=94
a0.aY(B.h61,B.aVR,B.jp,0.1)
a0.aY(B.h28,B.aVR,B.jp,0.1)
a0.aY(B.h6M,B.fZM,B.jp,0.1)
a0.n6(B.h1o,B.h6h,B.LJ,0.5,2)
a0.aY(B.h3e,B.h7z,B.F_,0.7)
a0.b=85
a0.jf(A.GY(B.d5L,0.2,6),0.055,B.jG,!1,0.9,8)
a0.b=84
a0.aY(B.h6r,B.h41,B.XT,0.3)
a0.aO(B.h_S,B.h6J,a1.y?B.afe:B.ahj)
a0.b=86
a0.jf(A.GY(B.cXQ,0.35,3),0.11,B.pN,!1,0.3,8)
a0.b=87
a0.dQ(B.h0I,B.h3p,0.19,a1.c?B.X_:B.bl2,0.3,8)
a0.b=88
a0.aY(B.fWe,B.fYI,B.AX,0.7)
a0.By(B.h3a,B.aVI,0.72,B.AX,0.55,0.7,16)
a0.dQ(B.aVI,B.h1z,0.78,B.bmK,0.7,16)
a0.b=89
a0.dQ(B.h5B,B.aV1,0.85,B.baO,0.6,18)
a0.dQ(B.aV1,B.h14,0.5,B.baQ,0.5,12)
a0.aO(B.h2h,B.h7q,B.bkX)
a0.b=95
for(p=a1.f,m=a1.r,v=0;v<3;++v){e=B.cDQ[v]
if(m.q(0,v)){j=e.a
i=e.b
a0.aO(new A.r(j,i,-7.82),B.h3B,B.AS)
a0.aO(new A.r(j,i,-7.79),B.h19,B.be7)}else if(p.q(0,v)){j=e.a
i=e.b
a0.aO(new A.r(j,i,-7.82),B.fUm,B.agn)
a0.aO(new A.r(j,i,-7.8),B.h26,B.bpS)}}if(a1.w){a0.b=96
a0.dQ(B.h1f,B.h0z,0.1,D.d9,0.7,8)}a0.e=0
a0.c=6
a0.b=0
a0.d=0.4
a0.bhY(B.aUT,B.aVG,B.a9U,B.a9S,B.adZ,B.h1Q,!0)
a0.bhY(B.aVB,B.aVL,B.a9S,B.a9U,B.adZ,B.h3H,!0)
a0.bj7(B.aUT,B.aVL,B.a9S,B.aec)
a0.bj7(B.aVG,B.aVB,B.a9U,B.aec)
a0.d=1
p=q.q(0,72)?"This breaker has TRIPPED (it is in the middle, orange). The living room has no power. Tap it to flip it off and on again.":"This breaker is ON. The living room has power."
q=q.q(0,72)?"The light is off because the living room breaker has tripped.":"The ceiling light is on."
m=a1.b
j=m&&!a1.c?"Water is dripping from the slip nut here. Pick the wrench, then tap the nut to tighten it.":"The P-trap holds a water seal that blocks sewer gas. Tap Open lesson to build one."
m=m&&!a1.c?"This slip nut is loose and the trap is dripping. Pick the wrench and tap here to tighten it.":"The slip nut is tight."
return new A.tI(d,C.G([70,B.e8E,91,B.e84,92,B.e8n,93,B.e8v,71,B.e8J,72,new A.cW("Living room breaker",p,B.h7f,3.5),73,B.e8f,74,B.e8x,75,B.e7V,76,B.e8q,81,B.e8s,82,B.e7M,83,new A.cW("Ceiling light",q,B.aVb,7),84,B.e8y,85,B.e7X,86,new A.cW("P-trap under the sink",j,B.h38,4.5),87,new A.cW("Slip nut (leaking?)",m,B.aVe,3.5),88,B.e7J,89,B.e8w,90,B.e8A,94,B.e8e,95,B.e8C,96,B.e7O],x.S,x.q),B.ze,B.wr,null,0)},
hoy(d,e){var w,v,u,t,s,r,q,p=C.a([],x.z),o=new A.fk(p)
o.c=5
o.e=0.8
if(d.w)for(w=e*1.5,v=0;v<6;++v){u=D.k.F(w+v/6,1)
o.fT(new A.r(3.4+Math.sin(v*2)*0.12,3.3-u*u*2.8,-7.7),0.05,D.Lp,3,6,0.9)}if(d.as){u=D.k.F(e*1.1,1)
o.fT(new A.r(3,3.9-u*u*0.7,-6.95),0.05,B.X9,3,6,0.9)}if(d.Q)for(w=e*1.6,v=0;v<6;++v){u=D.k.F(w+v/6,1)
o.fT(new A.r(8.2+Math.sin(v*1.7)*0.15,2.2-u*1.5,-7.2),0.05,B.X9,3,6,0.9)}if(d.at){o.d=0.55
o.aY(B.fZd,B.h_P,B.bn0,0.8)
o.d=1}if(d.x)for(w=e*2,t=e*6,v=0;v<8;++v){u=D.k.F(w+v*0.13,1)
s=v*2.4+t
r=Math.cos(s)
s=Math.sin(s)
q=C.ar(F.Ma,E.Yk,1-u)
q.toString
o.fT(new A.r(-3.2+r*u*0.7,1.3+s*u*0.7,-7.6+u*0.3),0.05,q,3,5,0)}if(d.z&&!d.d.q(0,72)){o.b=0
o.d=D.k.E((Math.sin(e*17)+Math.sin(e*29)+2)/4*0.5,0,0.6)
o.fT(B.aUZ,1.5,B.Xc,4,10,0)
o.d=1}if(d.b&&!d.c){for(w=e*1.3,v=0;v<5;++v){u=D.k.F(w+v*0.2,1)
o.fT(new A.r(3.05,1.45-u*u*1.4,-6.95),0.05,B.Yd,3,6,0.9)}o.d=0.5
o.aY(B.fYT,new A.r(0.7+0.3*Math.sin(e),0.02,0.5),B.Yd,0.9)
o.d=1}return p},
bTo:function bTo(d,e,f,g){var _=this
_.a=5
_.b=!0
_.c=!1
_.d=d
_.e=e
_.f=f
_.r=g
_.at=_.as=_.Q=_.z=_.y=_.x=_.w=!1},
ftw:function ftw(d){this.a=d},
ftt:function ftt(d){this.a=d},
fts:function fts(d){this.a=d},
ftv:function ftv(d){this.a=d},
ftu:function ftu(d){this.a=d},
fU(d,e,f,g){var w
try{I.dX(d,"",e,0,f,g)}catch(w){}},
yE(){A.fU(880,80,0.25,"tri")
C.bO(V.aia,new A.fur(),x.H)},
hGE(){return new A.Nv(null)},
XT(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w){return new A.b6Q(t,d,u,s,f,r,q,j,g,h,m,n,i,k,v,w,l,o,p,e,null)},
wL(d,e,f,g,h){var w=null,v=g?e.j(0.25):D.w.j(0.5),u=C.m(18),t=C.I(g?e:D.aZ,D.r,1),s=x.p,r=C.a([],s)
D.d.v(r,C.a([C.X(f,g?e:D.ae,w,w,w,16),D.ej],s))
r.push(C.d(d,w,w,w,w,w,w,C.l(w,w,g?e:D.ae,w,w,w,w,w,w,w,w,12,w,w,D.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w))
return C.aB(w,C.p(w,C.B(r,D.m,w,D.e,D.P,0,w,w),D.f,w,w,new C.o(v,w,t,u,w,w,D.n),w,w,w,w,D.hf,w,w,w),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,h,w,w,w,w,w,w,!1,D.a4)},
u5(d,e,f,g){var w=null,v=f==null,u=v?D.ds:g.j(0.9),t=C.m(14),s=C.X(e,v?D.bU:D.w,w,w,w,18)
return C.E(C.aB(w,C.p(w,C.B(C.a([s,D.bo,new C.ds(1,D.cn,C.d(d,w,w,w,w,w,w,C.l(w,w,v?D.bU:D.w,w,w,w,w,w,w,w,w,12.5,w,w,D.u,w,w,!0,w,w,w,w,w,w,w,w),D.L,w,w),w)],x.p),D.m,w,D.b8,D.j,0,w,w),D.f,w,w,new C.o(u,w,w,t,w,w,D.n),w,w,w,w,D.tV,w,w,w),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,!1,D.a4),1)},
fLr(d,e,f,g){return C.bT(E.lv,null,new A.fLt(e,g,f),d,!0,!0,!0,D.jZ,!1,!1,x.H)},
TO(d,e,f,g,h,i,j){return new A.aWV(i,d,g,f,e,h,j,null)},
fur:function fur(){},
pu:function pu(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
Nv:function Nv(d){this.a=d},
bjD:function bjD(){this.c=this.a=null},
dPx:function dPx(d){this.a=d},
dPy:function dPy(d){this.a=d},
dPz:function dPz(d){this.a=d},
dPA:function dPA(d){this.a=d},
dPE:function dPE(d){this.a=d},
dPF:function dPF(d){this.a=d},
dPG:function dPG(d){this.a=d},
dPH:function dPH(d){this.a=d},
dPI:function dPI(d){this.a=d},
dPJ:function dPJ(d){this.a=d},
dPK:function dPK(d){this.a=d},
dPL:function dPL(d){this.a=d},
dPB:function dPB(d,e){this.a=d
this.b=e},
dPC:function dPC(d){this.a=d},
dPD:function dPD(d){this.a=d},
avT:function avT(d,e){this.c=d
this.a=e},
bso:function bso(){this.c=this.a=this.d=null},
f1e:function f1e(d){this.a=d},
f1d:function f1d(){},
b6Q:function b6Q(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0){var _=this
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
_.CW=s
_.cx=t
_.cy=u
_.db=v
_.dx=w
_.a=a0},
cuw:function cuw(){},
cux:function cux(){},
fLt:function fLt(d,e,f){this.a=d
this.b=e
this.c=f},
fLs:function fLs(){},
aWV:function aWV(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
bVu:function bVu(d){this.a=d},
DO:function DO(d,e,f){this.c=d
this.d=e
this.a=f},
azW:function azW(d){var _=this
_.r=_.f=_.e=_.d=$
_.w=""
_.x=0
_.y=null
_.z=!1
_.Q=0
_.as=null
_.at=d
_.ax=0
_.c=_.a=null},
d81:function d81(d,e){this.a=d
this.b=e},
d8_:function d8_(d,e,f){this.a=d
this.b=e
this.c=f},
d80:function d80(d){this.a=d},
d7Z:function d7Z(d){this.a=d},
d7N:function d7N(d){this.a=d},
d7O:function d7O(d){this.a=d},
d7M:function d7M(d){this.a=d},
d7P:function d7P(d){this.a=d},
d7Q:function d7Q(d){this.a=d},
d7R:function d7R(d){this.a=d},
d7S:function d7S(d){this.a=d},
d7T:function d7T(d,e,f){this.a=d
this.b=e
this.c=f},
d7U:function d7U(d){this.a=d},
d7V:function d7V(d,e){this.a=d
this.b=e},
d7W:function d7W(d,e){this.a=d
this.b=e},
d7X:function d7X(d,e){this.a=d
this.b=e},
d7Y:function d7Y(d){this.a=d},
d82:function d82(d,e){this.a=d
this.b=e},
d83:function d83(d){this.a=d},
d8c:function d8c(){},
d8l:function d8l(d,e,f){this.a=d
this.b=e
this.c=f},
d8s:function d8s(d){this.a=d},
d89:function d89(){},
d8d:function d8d(d){this.a=d},
d8e:function d8e(d){this.a=d},
d8m:function d8m(d){this.a=d},
d8n:function d8n(d){this.a=d},
d8b:function d8b(d){this.a=d},
d8o:function d8o(d){this.a=d},
d8a:function d8a(d){this.a=d},
d8p:function d8p(d){this.a=d},
d8q:function d8q(d){this.a=d},
d8r:function d8r(d){this.a=d},
d8t:function d8t(d){this.a=d},
d8f:function d8f(d,e){this.a=d
this.b=e},
d88:function d88(d,e){this.a=d
this.b=e},
d8g:function d8g(d,e){this.a=d
this.b=e},
d8h:function d8h(d){this.a=d},
d87:function d87(d){this.a=d},
d8i:function d8i(d){this.a=d},
d86:function d86(d){this.a=d},
d8j:function d8j(d){this.a=d},
d85:function d85(d){this.a=d},
d8k:function d8k(d){this.a=d},
d84:function d84(d){this.a=d},
a9n:function a9n(d,e){this.c=d
this.a=e},
aFN:function aFN(){var _=this
_.f=_.e=_.d=$
_.r=""
_.w=0
_.x=null
_.y=!1
_.c=_.a=_.z=null},
eRF:function eRF(d,e,f){this.a=d
this.b=e
this.c=f},
eRG:function eRG(d){this.a=d},
eRE:function eRE(d){this.a=d},
eRy:function eRy(d){this.a=d},
eRz:function eRz(d,e){this.a=d
this.b=e},
eRA:function eRA(d,e){this.a=d
this.b=e},
eRB:function eRB(d,e){this.a=d
this.b=e},
eRC:function eRC(d){this.a=d},
eRD:function eRD(d,e){this.a=d
this.b=e},
eRK:function eRK(){},
eRO:function eRO(d,e){this.a=d
this.b=e},
eRL:function eRL(d){this.a=d},
eRM:function eRM(d,e){this.a=d
this.b=e},
eRJ:function eRJ(d,e){this.a=d
this.b=e},
eRN:function eRN(d){this.a=d},
eRI:function eRI(d){this.a=d},
eRH:function eRH(){},
a4O:function a4O(d,e){this.c=d
this.a=e},
aAc:function aAc(){var _=this
_.f=_.e=_.d=$
_.r=""
_.w=0
_.x=null
_.y=!1
_.c=_.a=_.z=null},
db3:function db3(d,e,f){this.a=d
this.b=e
this.c=f},
db4:function db4(d){this.a=d},
db2:function db2(d){this.a=d},
daW:function daW(d){this.a=d},
daZ:function daZ(d){this.a=d},
db_:function db_(d,e){this.a=d
this.b=e},
db0:function db0(d,e){this.a=d
this.b=e},
daY:function daY(d){this.a=d},
db1:function db1(d,e){this.a=d
this.b=e},
daX:function daX(d){this.a=d},
db8:function db8(){},
dbe:function dbe(d,e){this.a=d
this.b=e},
db9:function db9(d){this.a=d},
dba:function dba(d){this.a=d},
db7:function db7(d){this.a=d},
dbc:function dbc(d,e){this.a=d
this.b=e},
db6:function db6(d,e){this.a=d
this.b=e},
dbb:function dbb(d){this.a=d},
dbd:function dbd(d){this.a=d},
db5:function db5(d){this.a=d},
aB4:function aB4(d){this.a=d},
aB5:function aB5(d){var _=this
_.d=d
_.f=_.e=$
_.r=0
_.w=""
_.x=null
_.y=!1
_.c=_.a=_.z=null},
di7:function di7(d,e,f){this.a=d
this.b=e
this.c=f},
di8:function di8(d){this.a=d},
di6:function di6(d){this.a=d},
di1:function di1(d){this.a=d},
di3:function di3(d,e){this.a=d
this.b=e},
di4:function di4(d,e){this.a=d
this.b=e},
di5:function di5(d,e){this.a=d
this.b=e},
di2:function di2(d){this.a=d},
dig:function dig(d,e){this.a=d
this.b=e},
dib:function dib(d,e){this.a=d
this.b=e},
did:function did(d){this.a=d},
dic:function dic(d){this.a=d},
die:function die(d){this.a=d},
dia:function dia(d){this.a=d},
dif:function dif(d){this.a=d},
di9:function di9(d,e){this.a=d
this.b=e},
afr:function afr(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bw1:function bw1(){var _=this
_.d=null
_.e=!1
_.c=_.a=null},
fcw:function fcw(d){this.a=d},
fcu:function fcu(d){this.a=d},
fcv:function fcv(d){this.a=d},
fct:function fct(d){this.a=d},
fcy:function fcy(d){this.a=d},
fcz:function fcz(d){this.a=d},
fcx:function fcx(d){this.a=d},
jJ:function jJ(d,e){this.a=d
this.b=e},
MT:function MT(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a6Q:function a6Q(d){this.a=d},
ca2:function ca2(d){this.a=d},
fYU(){var w=x.N
return new A.cl7(C.aX(w),C.G(["n1",!1,"n2",!1],w,x.R),C.T(x.S,w))},
ieW(d,e,f){var w,v
if(!f.c.q(0,e)){w=f.d
return e==="hot"?"The red (hot) hose goes on the LEFT side only. "+w:"The blue (cold) hose goes on the RIGHT side only. "+w}w=d.e
v=f.a
if(w.h(0,v)!=null)return"That connection already has a hose."
w.n(0,v,e)
return null},
fKM(){var w,v,u=C.a([B.aUP,B.h0t],x.o)
for(w=1;w<=12;++w){v=3.141592653589793+3.141592653589793*w/12
u.push(new A.r(3+3*Math.cos(v),0.2+3*Math.sin(v),0))}D.d.v(u,A.GY(B.d73,1,6))
return u},
bBj(d){var w,v,u,t,s="trap",r=C.a([],x.z),q=new A.fk(r)
q.b=49
q.n6(B.fUf,B.fW1,B.jp,0.1,2)
q.n6(B.h76,B.fUj,B.jp,0.1,2)
q.b=47
q.hm(B.h1P,B.fW2,B.vz,3)
q.hm(B.fVe,B.fUk,B.vz,3)
q.b=46
q.n6(B.fX5,B.h2E,B.LJ,0.5,3)
q.bcX(B.h47,B.K7,6.5,B.F_,!0,0.7,20)
q.dQ(B.h32,B.h07,1.5,B.jG,0.85,14)
q.b=48
q.T0(B.a9W,B.fZA,0.92,B.pN,!1,!0,0.3,14)
q.cWr(B.a9W,B.h6n,1,0.72,B.pN,0.3)
w=new A.fu7(d,q)
w.$5(41,B.a3t,B.jG,0.85,"tail")
w.$5(42,A.fKM(),B.pN,0.3,s)
w.$5(43,B.a4n,B.pN,0.3,"arm")
w=new A.fu6(d,q)
v=d.a
w.$6(44,"n1",B.a9R,B.e8,B.fZT,v.q(0,"tail")&&v.q(0,s))
w.$6(45,"n2",B.a9T,B.hy,B.h40,v.q(0,s)&&v.q(0,"arm"))
if(v.q(0,s)){q.b=0
q.d=0.55
q.e=0.4
u=A.fKM()
w=C.S(u).k("Z<1>")
t=C.C(new C.Z(u,new A.fu5(),w),w.k("J.E"))
if(t.length>1)q.aIS(t,0.4092,B.Yo,!1,!0,0.6,8)
q.d=1
q.e=0}return new A.tI(r,C.G([41,B.e7Z,42,B.e80,43,B.e8u,44,B.e8i,45,B.e8G,46,B.e86,47,B.e8c,48,B.e7H,49,B.e82],x.S,x.q),B.ze,B.wr,null,0)},
icS(d,e){var w,v,u,t,s,r,q,p=C.a([],x.z),o=new A.fk(p),n=d.d
if(n.length!==0){w=n==="n1"?B.h7t:B.h5M
for(n=e*1.4,v=w.a+0,u=w.b,t=w.c+0,s=0;s<5;++s){r=D.k.F(n+s*0.2,1)
o.fT(new A.r(v,u+(-r*6*r-r*1.5),t),0.22*(1-r*0.3),B.Yd,3,6,0.9)}}else if(d.c){n=x.Q
v=C.C(B.a3t,n)
u=A.fKM()
D.d.v(v,C.d1(u,1,null,C.S(u).c))
D.d.v(v,C.d1(B.a4n,1,null,n))
for(n=e*0.45,s=0;s<18;++s){r=D.k.F(n+s/18,1)
q=D.o.E(D.k.bm(r*(v.length-1)),0,v.length-2)
u=v.length
o.fT(A.o_(v[q],v[q+1],r*(u-1)-q),0.38,B.bp0,3,6,0.9)}for(n=e*2.2,s=0;s<6;++s)o.fT(new A.r(0,14-D.k.F(n+s/6,1)*5.4,0),0.3,B.X9,3,6,0.9)}return p},
agB(d){switch(d){case 61:return B.fUe
case 62:return B.h5J
case 63:return B.h0X
default:return B.h0O}},
h2K(d){var w=d==="hot",v=A.agB(w?61:62),u=A.agB(w?63:64),t=w?-1:1
return A.ahP(C.a([v,v.a9(0,new A.r(t*0.6,2.2,1.2)),A.o_(v,u,0.5).a9(0,new A.r(t*1.4,0,2.6)),u.a9(0,new A.r(-t*0.2,-2,1)),u],x.o),6)},
aOZ(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=C.a([],x.z),e=new A.fk(f)
e.b=67
e.hm(B.fUb,B.fVF,B.vz,3)
e.b=66
e.n6(B.h0r,B.h6m,B.LJ,0.5,3)
e.T0(B.aUD,B.h75,7.6,B.Ye,!1,!0,0.7,28)
e.dQ(B.aUD,B.h3o,7.6,B.af_,0.5,28)
e.dQ(B.fVQ,B.h_C,1.2,B.jG,0.9,14)
e.aY(B.h2P,B.aUs,B.jp,0.1)
e.aY(B.h6E,B.aUs,B.jp,0.1)
e.b=65
e.dQ(B.h62,B.aVA,3.4,B.jG,0.9,20)
e.jf(A.GY(B.dcv,1.4,6),0.5,B.jG,!0,0.9,12)
for(w=0;w<2;++w){v=B.d7O[w]
u=v*1.2
e.dQ(new A.r(u,15.5,-3.6),new A.r(u,17.7,-3.6),0.38,B.jG,0.9,10)
t=v<0?B.tB:B.nX
e.dQ(new A.r(u,17.7,-3.6),new A.r(u,18.6,-3.6),0.6,t,0.6,12)}for(u=[B.evw,B.eqL],w=0;w<2;++w){t=u[w]
v=t.b
e.b=t.a
e.dQ(new A.r(v,15.3,-3.6),new A.r(v,11.4,-3.6),0.45,B.jG,0.9,10)
e.dQ(new A.r(v,11.4,-3.6),new A.r(v,10.7,-3.6),0.3,B.bkD,0.6,8)
e.zj(new A.r(v,11.3,-3.6),new A.r(v,11.9,-3.6),0.78,0.48,B.bmJ,0.7,8)}for(u=[B.eOa,B.ePX],w=0;w<2;++w){t=u[w]
v=t.b
e.b=t.a
e.dQ(new A.r(v,-1.5,-6),new A.r(v,-1.5,-3.6),0.4,B.Lg,0.7,12)
e.dQ(new A.r(v,-1.5,-4.4),new A.r(v,0.7,-4.4),1,B.jG,0.9,14)
e.dQ(new A.r(v,0.7,-4.4),new A.r(v,1.5,-3.6),0.45,B.jG,0.9,10)
e.dQ(new A.r(v,-0.2,-4.4),new A.r(v,-0.2,-3.1),0.2,B.adA,0.7,8)
e.dQ(new A.r(v,-0.2,-3.1),new A.r(v,-0.2,-2.4000000000000004),1.45,t.c,0.5,14)
e.zj(new A.r(v,1.2,-3.6),new A.r(v,1.9,-3.6),0.78,0.4,B.xw,0.8,8)}for(u=x.o,w=0;w<2;++w){s=B.df6[w]
t=s==="hot"
r=t?B.cEM:B.cEZ
q=C.S(r).k("Z<1>")
p=C.C(new C.Z(r,new A.ftc(d,s),q),q.k("J.E"))
e.b=t?68:69
o=t?B.tB:B.nX
t=p.length
if(t===2){n=A.h2K(s)
e.jf(n,0.34,B.M0,!1,0.7,8)
m=n.length/2|0
e.jf(C.a([n[m-1],n[m],n[m+1]],u),0.4,o,!1,0.4,8)
for(t=r.length,l=0;l<t;++l){k=A.agB(r[l])
q=k.a+0
j=k.b
i=k.c+0
e.zj(new A.r(q,j+-0.2,i),new A.r(q,j+0.6,i),0.62,0.3,B.xw,0.8,8)}}else if(t===1){k=A.agB(D.d.gI(p))
h=D.d.gI(p)===D.d.gI(r)?1:-1
t=k.a+0
q=k.b
j=k.c
e.jf(C.a([k,new A.r(t,q+h*1.4,j+1),new A.r(t,q+h*3,j+2.4)],u),0.34,B.M0,!1,0.7,8)
j+=0
e.zj(new A.r(t,q+-0.2,j),new A.r(t,q+0.6,j),0.62,0.3,B.xw,0.8,8)}}if(d.r){e.b=0
e.d=0.5
for(u=d.e,w=0;w<4;++w){g=B.a4h[w]
t=g.a
if(u.h(0,t)!=null)continue
t=A.agB(t)
q=g.c.q(0,"hot")?B.tB:B.nX
e.fT(new A.r(t.a+0,t.b+0,t.c+0.9),0.65,q,4,8,0.1)}e.d=1}return new A.tI(f,C.G([61,B.e7Q,62,B.e7S,63,B.e7L,64,B.e7T,65,B.e8d,66,B.e89,67,B.e7I,68,B.e8K,69,B.e8g],x.S,x.q),B.ze,B.wr,null,0)},
i3D(d,e){var w,v,u,t,s,r,q,p,o,n=C.a([],x.z),m=new A.fk(n)
if(!d.f)return n
w=d.e
v=w.h(0,61)==="hot"&&w.h(0,63)==="hot"
u=w.h(0,62)==="cold"&&w.h(0,64)==="cold"
t=new A.fvO(e,m)
if(v){s=A.h2K("hot")
for(r=e*0.5,q=0;q<10;++q){p=D.k.F(r+q/10,1)
o=D.o.E(D.k.bm(p*(s.length-1)),0,s.length-2)
m.fT(A.o_(s[o],s[o+1],p*(s.length-1)-o),0.2,D.Lp,3,6,0.9)}}else if(w.h(0,61)==null)t.$2(61,D.Lp)
if(u){s=A.h2K("cold")
for(w=e*0.5,q=0;q<10;++q){p=D.k.F(w+q/10,1)
o=D.o.E(D.k.bm(p*(s.length-1)),0,s.length-2)
m.fT(A.o_(s[o],s[o+1],p*(s.length-1)-o),0.2,B.XH,3,6,0.9)}}else if(w.h(0,62)==null)t.$2(62,B.XH)
if(v&&u)for(w=e*2,q=0;q<8;++q){p=D.k.F(w+q/8,1)
r=C.ar(B.bp6,B.XH,0.5)
r.toString
m.fT(new A.r(0,21-p*6.5,1.6),0.26,r,3,6,0.9)}return n},
fvM(d){return D.d.d9(B.a4h,new A.fvN(d))},
cl7:function cl7(d,e,f){var _=this
_.a=d
_.b=e
_.c=!1
_.d=""
_.e=f
_.r=_.f=!1},
F4:function F4(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fu7:function fu7(d,e){this.a=d
this.b=e},
fu6:function fu6(d,e){this.a=d
this.b=e},
fu5:function fu5(){},
ftc:function ftc(d,e){this.a=d
this.b=e},
fvO:function fvO(d,e){this.a=d
this.b=e},
fvN:function fvN(d){this.a=d},
fYT(d,e,f){var w=x.N
w=new A.ckY(e,d,C.aX(w),C.T(w,x.S),C.aX(w))
w.byA(d,e,f)
return w},
hnR(c0,c1,c2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5=C.a([],x.z),b6=new A.fk(b5),b7=C.T(x.S,x.q),b8=C.a([],x.E),b9=c0.c
b9===$&&C.c()
w=b9.a==="bathroom"
v=w?28:0
b6.b=9199
b6.hm(B.h4W,B.h71,B.bdI,4)
b6.hm(B.h2D,B.h5G,B.X8,4)
b6.hm(new A.r(v+19.8+0.6,24,16),B.h06,B.vz,2)
b7.n(0,9199,B.e81)
b6.b=9198
b6.aY(new A.r(v,0.6,10),B.h60,B.jp,0.1)
b6.aY(new A.r(v,29.4,18.6),B.h_O,B.jp,0.1)
b6.aY(new A.r(v-19.4,13.6,10.5),B.h6N,B.jp,0.1)
for(u=[B.eSX,B.eST,B.eRQ,B.eRN],t=0;t<4;++t){s=u[t].a
b6.aY(new A.r(v+s[0],33,s[1]),new A.r(s[2],2.4,s[3]),B.bq0,0.6)}b6.T0(new A.r(v,27,8),new A.r(v,34.3,8),10.5,B.Ye,!1,!0,0.7,24)
b6.dQ(new A.r(v,27,8),new A.r(v,27.2,8),10.5,B.af_,0.5,24)
if(w){b6.aY(new A.r(v,46,0.6),B.h_V,D.bO,0.3)
b6.aY(new A.r(v,46,1.1),B.fZW,B.hS,0.9)}b6.dL(new A.r(v,27.1,8),new A.r(v,27.3,8),1.4,B.hm,12)
b6.T0(new A.r(v+15,23.6,8),new A.r(v+19.4,23.6,8),0.92,B.pN,!1,!0,0.3,12)
b7.n(0,9198,B.e8r)
b6.b=9400
b6.dQ(new A.r(-56,18,0),new A.r(-56,18,6),1.5,B.xw,0.8,12)
u=c0.r?B.nX:D.bl
b6.dQ(new A.r(-57,18,6),new A.r(-55,18,6.5),4,u,0.5,14)
b6.dQ(new A.r(-56,16,0),new A.r(-56,20,0),1,B.Lg,0.7,10)
u=c0.r?"The water is ON. Turn it OFF with your hand before you cut into any pipe, and turn it ON to test your work.":"The water is OFF. Turn it ON to test your work."
b7.n(0,9400,new A.cW("Main water valve",u,new A.r(-56,18,4),22))
u=c0.r
s=u?"MAIN WATER: ON":"MAIN WATER: OFF"
u=u?D.dK:D.bl
b8.push(new A.hf(new A.r(-56,24,6),s,u,0))
r=new A.fu4(b6)
u=v-8
r.$1(u)
s=v+8
r.$1(s)
if(w)r.$1(-40)
q=new A.r(v,21,8)
p=new A.fu2(q)
o=new A.ftX(b6,c0)
n=new A.ftY(b6,c0)
m=new A.fu3(c0,b7,c2,c1,b8)
l=b9.c
for(k=l.length,j=c0.x,i=c0.e,h=c0.f,g=x.o,t=0;t<k;++t){f=l[t]
e=f.a
d=i.q(0,e)
if(d){a0=c0.vf(0,e)
a1=h.h(0,e)
if(a1==null)a1=0
a2=a0.r-a1>0}else a2=!1
a3=D.d.cD(l,f)
a4=9100+a3
j.q(0,e)
switch(e){case"flange":a5=new A.r(-30,0.3,14)
if(d){b6.b=a4
b6.dQ(a5,new A.r(-30,0.8999999999999999,14),5.5,B.pN,0.4,18)
b6.zj(new A.r(-30,0.8,14),new A.r(-30,1.2,14),5.5,3.2,B.xw,0.8,18)}else n.$3(e,new A.r(-30,0.8,14),B.fTf)
m.$3(f,a5,"Flange spot")
break
case"wax":a5=new A.r(-30,1.2,14)
if(d){b6.b=a4
b6.zj(a5,new A.r(-30,2.3,14),4.2,2.4,B.bq3,0.2,18)}else n.$3(e,new A.r(-30,1.7,14),B.h2Q)
m.$3(f,a5,"Wax ring spot")
break
case"toilet":if(d){b6.b=a4
b6.By(new A.r(-30,0.5,14),new A.r(-30,16,14),8.5,B.AX,6,0.8,20)
b6.dQ(new A.r(-30,16,14),new A.r(-30,17,14),9.5,B.M7,0.8,20)
b6.aY(new A.r(-30,22,4.5),B.aUv,B.AX,0.8)
b6.aY(new A.r(-30,29.2,4.5),B.fZ7,B.M7,0.8)}else{b6.b=a4
b6.d=0.32
b6.dL(new A.r(-30,0.5,14),new A.r(-30,17,14),8.5,D.b2,16)
b6.aO(new A.r(-30,22,4.5),B.aUv,D.b2)
b6.d=1}m.$3(f,new A.r(-30,12,12),"Toilet spot")
break
case"bolts":if(d){for(e=9200+a3*2,a6=0;a6<2;++a6){a7=B.aza[a6]
b6.b=e+(a7<0?0:1)
a0=-30+a7
b6.dQ(new A.r(a0,0.5,17),new A.r(a0,3.6,17),0.45,B.F_,0.8,8)
a1=a2?D.cZ:B.F_
b6.dQ(new A.r(a0,3.4,17),new A.r(a0,4.6,17),1.2,a1,0.8,6)}e=a2?"The nuts are loose. Tighten them with the wrench, a little at a time so the porcelain does not crack.":"The toilet is bolted down."
b7.n(0,a4,new A.cW(f.c,e,new A.r(-30,3,17),20))}else for(a6=0;a6<2;++a6){a7=B.aza[a6]
b6.b=a4
b6.d=0.4
e=-30+a7
b6.dL(new A.r(e,0.5,17),new A.r(e,4.6,17),1.2,D.b2,8)
b6.d=1}m.$3(f,new A.r(-30,3,17),"Bolts")
break
case"tvalve":A.h29(b6,a4,new A.r(-40,8,1.6),d,B.nX,new A.ftT(n,f,-30))
m.$3(f,new A.r(-40,8,2),"Valve")
break
case"those":if(d){b6.b=a4
b6.jf(A.ahP(C.a([new A.r(-40,10,1.6),new A.r(-42,14,3.5),new A.r(-36,17,3.6),new A.r(-32,21,2.5)],g),6),0.55,B.M0,!1,0.7,8)
b6.jf(C.a([new A.r(-36.8,15.5,3.6),new A.r(-35,16.4,3.6)],g),0.62,B.nX,!1,0.4,8)
if(a2)b6.dL(new A.r(-40,10,1.6),new A.r(-40,11.2,1.6),0.9,D.cZ,8)}else o.$3$r(e,A.ahP(C.a([new A.r(-40,10,1.6),new A.r(-42,14,3.5),new A.r(-36,17,3.6),new A.r(-32,21,2.5)],g),6),0.9)
m.$3(f,new A.r(-36,15,3),"Toilet hose")
break
case"faucet":if(d){b6.b=a4
b6.dQ(new A.r(v,34.2,8),new A.r(v,34.6,8),3.6,B.jG,0.9,20)
b6.jf(A.GY(C.a([new A.r(v,34.6,8),new A.r(v,40,8),new A.r(v,43,10),new A.r(v,43,14),new A.r(v,41.2,14.6)],g),1.4,6),0.5,B.jG,!0,0.9,10)
for(a6=0;a6<2;++a6){a7=E.a49[a6]
e=v+a7
b6.dQ(new A.r(e,34.6,8),new A.r(e,36.6,8),0.5,B.jG,0.9,8)
a0=a7<0?B.tB:B.nX
b6.dQ(new A.r(e,36.6,8),new A.r(e,37.6,8),0.8,a0,0.6,10)}for(a6=0;a6<2;++a6){e=v+B.dia[a6]
b6.dQ(new A.r(e,34,8),new A.r(e,28.4,8),0.45,B.jG,0.9,8)}}else n.$3(e,new A.r(v,38,9),B.fT5)
m.$3(f,new A.r(v,38,8),"Faucet spot")
break
case"vhot":A.h29(b6,a4,new A.r(u,8,1.6),d,B.tB,new A.ftU(n,f,v))
m.$3(f,new A.r(u,8,2),"Hot valve")
break
case"vcold":A.h29(b6,a4,new A.r(s,8,1.6),d,B.nX,new A.ftV(n,f,v))
m.$3(f,new A.r(s,8,2),"Cold valve")
break
case"hhot":case"hcold":a8=e==="hhot"
a9=a8?-1:1
a0=v+a9*3
b0=A.ahP(C.a([new A.r(v+a9*8,10.5,1.8),new A.r(v+a9*9,16,3.5),new A.r(v+a9*6,22,4.2),new A.r(a0,27.5,6),new A.r(a0,28.6,8)],g),6)
if(d){b6.b=a4
b6.jf(b0,0.5,B.M0,!1,0.7,8)
b1=b0.length/2|0
e=C.a([b0[b1-1],b0[b1],b0[b1+1]],g)
b6.jf(e,0.58,a8?B.tB:B.nX,!1,0.4,8)
if(a2){e=D.d.gI(b0)
a0=D.d.gI(b0)
b6.dL(e,new A.r(a0.a+0,a0.b+1.4,a0.c+0),0.9,D.cZ,8)
a0=D.d.gal(b0)
b6.dL(new A.r(a0.a,a0.b-1.4,a0.c),D.d.gal(b0),0.9,D.cZ,8)}}else o.$3$r(e,b0,0.9)
e=b0[b0.length/2|0]
m.$3(f,e,a8?"Hot hose":"Cold hose")
break
case"tail":case"trap":case"arm":a0=e==="tail"
if(a0)a1=B.a3t
else a1=e==="trap"?A.fKM():B.a4n
b2=p.$1(a1)
if(d){b6.b=a4
a1=a0?B.jG:B.pN
b6.a6K(b2,0.66,a1,!1,!0,!0,a0?0.85:0.3,12)}else o.$3$r(e,b2,0.78)
a1=J.a4(b2)
a1=a1.h(b2,a1.gL(b2)/2|0)
if(a0)e="Tailpiece"
else e=e==="trap"?"P-trap":"Trap arm"
m.$3(f,a1,e)
break}}b3=new A.fu0(l,c0,b6,b7)
b3.$4("trap",q.a9(0,B.a9R),B.e8,0)
b3.$4("arm",q.a9(0,B.a9T),B.hy,1)
for(u=C.en(j,j.r,C.a6(j).c),s=u.$ti.c;u.C();){k=u.d
if(k==null)k=s.a(k)
b4=D.d.h_(b9.c,new A.ftW(k))
k=A.hrX(c0,k)
b8.push(new A.hf(new A.r(k.a+0,k.b+6,k.c+4),"\ud83d\udca7 LEAK: "+b4.c,D.bx,0))}return new A.tI(b5,b7,b8,B.wr,null,0)},
h29(d,e,f,g,h,i){if(!g){i.$0()
return}d.b=e
d.dQ(f.a9(0,B.h2S),f.a9(0,B.aVy),0.9,B.xw,0.8,12)
d.dQ(f.a9(0,B.aVy),f.a9(0,B.h_G),0.45,B.xw,0.8,10)
d.dQ(f.a9(0,B.h5X),f.a9(0,B.aVS),0.3,B.adA,0.7,8)
d.dQ(f.a9(0,B.aVS),f.a9(0,B.h6s),1.2,h,0.5,12)},
hrX(d,e){var w,v=d.c
v===$&&C.c()
w=v.a==="bathroom"?28:0
A:{if("vhot"===e||"hhot"===e){v=new A.r(w-8,9,2)
break A}if("vcold"===e||"hcold"===e){v=new A.r(w+8,9,2)
break A}if("tvalve"===e||"those"===e){v=new A.r(-40,9,2)
break A}if("bolts"===e){v=new A.r(-30,2,17)
break A}if("faucet"===e){v=new A.r(w,30,8)
break A}if("tail"===e){v=new A.r(w,22,8)
break A}if("trap"===e){v=new A.r(w,24.7,8)
break A}v=new A.r(w+8.9,23.6,8)
break A}return v},
icK(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=C.a([],x.z),f=new A.fk(g),e=d.x
if(e.a===0)return g
for(e=C.en(e,e.r,C.a6(e).c),w=a0*2,v=e.$ti.c,u=d.e;e.C();){t=e.d
if(t==null)t=v.a(t)
s=A.hrX(d,t)
r=d.c
r===$&&C.c()
q=D.d.h_(r.c,new A.fKA(t)).b==="valve"||!u.q(0,t)
t=s.a
r=s.b
p=s.c
o=0
for(;;){if(!(o<(q?14:8)))break
n=q?1.8:1.2
m=q?14:8
l=D.k.F(a0*n+o/m,1)
m=Math.sin(o*2.1)
n=q?4:0.8
k=q?5:-0.5
j=q?16:10
i=q?7:1
h=q?1.1:0.9
f.fT(new A.r(t+m*l*n,r+(l*k-l*l*j),p+(1.5+l*i)),h,B.Yo,3,6,0.5);++o}f.d=0.55
f.dQ(new A.r(t,0.3,11),new A.r(t,0.5,11),7+2*Math.sin(w),B.Yo,0.6,18)
f.d=1}return g},
nq:function nq(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
X_:function X_(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ckY:function ckY(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.d=_.c=$
_.e=f
_.f=g
_.r=!0
_.w=0
_.x=h
_.y=!1},
cl1:function cl1(d){this.a=d},
cl2:function cl2(d){this.a=d},
ckZ:function ckZ(d){this.a=d},
cl3:function cl3(d){this.a=d},
cl4:function cl4(d){this.a=d},
cl5:function cl5(){},
cl6:function cl6(){},
cl_:function cl_(d){this.a=d},
cl0:function cl0(d){this.a=d},
fu4:function fu4(d){this.a=d},
fu2:function fu2(d){this.a=d},
ftX:function ftX(d,e){this.a=d
this.b=e},
fu_:function fu_(d){this.a=d},
ftY:function ftY(d,e){this.a=d
this.b=e},
ftZ:function ftZ(d){this.a=d},
fu3:function fu3(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
ftT:function ftT(d,e,f){this.a=d
this.b=e
this.c=f},
ftU:function ftU(d,e,f){this.a=d
this.b=e
this.c=f},
ftV:function ftV(d,e,f){this.a=d
this.b=e
this.c=f},
fu0:function fu0(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fu1:function fu1(d){this.a=d},
ftW:function ftW(d){this.a=d},
fKA:function fKA(d){this.a=d},
W1:function W1(d,e){this.d=d
this.a=e},
aEu:function aEu(d,e){var _=this
_.e=_.d=$
_.f=d
_.r=$
_.w=e
_.x=""
_.y=0
_.z=null
_.as=_.Q=!1
_.c=_.a=_.at=null},
elE:function elE(d,e,f){this.a=d
this.b=e
this.c=f},
elF:function elF(d){this.a=d},
elD:function elD(d){this.a=d},
elx:function elx(d){this.a=d},
elJ:function elJ(d){this.a=d},
elm:function elm(d,e){this.a=d
this.b=e},
eln:function eln(d,e){this.a=d
this.b=e},
elo:function elo(d){this.a=d},
elt:function elt(d){this.a=d},
elr:function elr(d){this.a=d},
els:function els(d,e){this.a=d
this.b=e},
elC:function elC(d){this.a=d},
elK:function elK(d){this.a=d},
elu:function elu(d){this.a=d},
elv:function elv(){},
elw:function elw(d){this.a=d},
elG:function elG(d,e){this.a=d
this.b=e},
elH:function elH(d){this.a=d},
elI:function elI(d,e){this.a=d
this.b=e},
elq:function elq(d,e,f){this.a=d
this.b=e
this.c=f},
elp:function elp(d,e,f){this.a=d
this.b=e
this.c=f},
elL:function elL(d){this.a=d},
elP:function elP(d,e){this.a=d
this.b=e},
elN:function elN(){},
elM:function elM(d){this.a=d},
elO:function elO(d,e){this.a=d
this.b=e},
elB:function elB(d){this.a=d},
elz:function elz(d,e){this.a=d
this.b=e},
ely:function ely(d,e){this.a=d
this.b=e},
elA:function elA(d,e){this.a=d
this.b=e},
jU(d){return D.d.h_(B.uw,new A.fSX(d))},
cpT(d,e,f,g,h){var w=x.S,v=x.N
v=new A.Xt(g,f,C.T(w,v),C.aX(w),C.aX(w),C.T(w,x.cH),C.a([new A.XF(),new A.XF()],x.gD),C.T(w,x.cD),C.aX(w),C.T(w,v),C.aX(w),C.a([],x.s),C.T(w,v))
v.cjZ(d,e,h)
return v},
cpU(d){var w
A:{if("tv"===d){w="The TV"
break A}if("lamp"===d){w="The lamp"
break A}if("toaster"===d){w="The toaster"
break A}w="The hair dryer"
break A}return w},
fZk(d,e){var w=!0
if(d!==e)if(!(D.d.q(B.lG,d)&&D.d.q(B.lG,e)))if(!(D.d.q(B.jS,d)&&D.d.q(B.jS,e)))if(d==="light"||d==="fan")w=e==="light"||e==="fan"
else w=!1
return w},
z0:function z0(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fSX:function fSX(d){this.a=d},
os:function os(d,e,f){this.a=d
this.b=e
this.c=f},
XF:function XF(){var _=this
_.a=!1
_.b=0
_.c=!0
_.d=!1},
avr:function avr(d,e){var _=this
_.a=!1
_.b=d
_.c=e
_.e=_.d=!1},
aTU:function aTU(d,e){this.a=d
this.b=e
this.c=!1},
ex:function ex(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Xt:function Xt(d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
_.cy=o
_.db=p
_.dx=!1},
cpY:function cpY(){},
cq4:function cq4(d){this.a=d},
cq5:function cq5(d){this.a=d},
cq6:function cq6(d,e){this.a=d
this.b=e},
cq7:function cq7(d,e){this.a=d
this.b=e},
cq9:function cq9(d){this.a=d},
cq8:function cq8(d,e){this.a=d
this.b=e},
cpX:function cpX(d){this.a=d},
cpV:function cpV(){},
cpW:function cpW(d){this.a=d},
cq2:function cq2(){},
cq3:function cq3(){},
cpZ:function cpZ(){},
cq_:function cq_(d){this.a=d},
cq0:function cq0(d){this.a=d},
cqa:function cqa(d){this.a=d},
cq1:function cq1(d){this.a=d},
cgt(d,e,f){return new A.O7(!1,e,f,!1,null)},
iV:function iV(d,e,f){this.a=d
this.b=e
this.c=f},
O7:function O7(d,e,f,g,h){var _=this
_.c=d
_.e=e
_.f=f
_.r=g
_.a=h},
aEB:function aEB(d,e,f){var _=this
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
eqi:function eqi(d,e,f){this.a=d
this.b=e
this.c=f},
eqj:function eqj(d){this.a=d},
eqh:function eqh(d){this.a=d},
epk:function epk(d){this.a=d},
epl:function epl(d){this.a=d},
epj:function epj(d){this.a=d},
epm:function epm(d){this.a=d},
epn:function epn(d){this.a=d},
epi:function epi(d){this.a=d},
epo:function epo(d){this.a=d},
epp:function epp(d){this.a=d},
epz:function epz(d){this.a=d},
epB:function epB(d){this.a=d},
epq:function epq(){},
epr:function epr(d){this.a=d},
eps:function eps(d){this.a=d},
epS:function epS(d,e){this.a=d
this.b=e},
epA:function epA(d){this.a=d},
eqe:function eqe(d){this.a=d},
eqf:function eqf(d){this.a=d},
eqg:function eqg(d,e){this.a=d
this.b=e},
eqc:function eqc(d){this.a=d},
eqd:function eqd(d,e){this.a=d
this.b=e},
eqb:function eqb(d){this.a=d},
eq3:function eq3(d){this.a=d},
eq4:function eq4(d){this.a=d},
eq5:function eq5(d){this.a=d},
eq6:function eq6(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eq7:function eq7(d){this.a=d},
eq8:function eq8(d,e,f){this.a=d
this.b=e
this.c=f},
eq9:function eq9(d){this.a=d},
eqa:function eqa(d,e,f){this.a=d
this.b=e
this.c=f},
eqk:function eqk(d,e){this.a=d
this.b=e},
epy:function epy(d){this.a=d},
epw:function epw(d){this.a=d},
epx:function epx(d,e){this.a=d
this.b=e},
epv:function epv(d){this.a=d},
ept:function ept(d){this.a=d},
epu:function epu(d,e){this.a=d
this.b=e},
epC:function epC(d,e){this.a=d
this.b=e},
epQ:function epQ(){},
epR:function epR(){},
epD:function epD(d){this.a=d},
epE:function epE(d){this.a=d},
epF:function epF(d){this.a=d},
epI:function epI(){},
epJ:function epJ(){},
epK:function epK(){},
epL:function epL(){},
epM:function epM(){},
epN:function epN(d){this.a=d},
epO:function epO(){},
epP:function epP(d){this.a=d},
epG:function epG(d){this.a=d},
epH:function epH(){},
eqD:function eqD(d,e){this.a=d
this.b=e},
eqF:function eqF(d){this.a=d},
eqp:function eqp(d){this.a=d},
eqE:function eqE(d){this.a=d},
eqs:function eqs(d){this.a=d},
eqt:function eqt(d,e){this.a=d
this.b=e},
eqr:function eqr(d,e){this.a=d
this.b=e},
equ:function equ(d,e){this.a=d
this.b=e},
eqq:function eqq(d,e){this.a=d
this.b=e},
eqG:function eqG(d,e){this.a=d
this.b=e},
eqo:function eqo(d,e){this.a=d
this.b=e},
eqH:function eqH(d){this.a=d},
eqn:function eqn(d){this.a=d},
eqI:function eqI(d,e){this.a=d
this.b=e},
eqm:function eqm(d,e){this.a=d
this.b=e},
eqJ:function eqJ(d){this.a=d},
eqK:function eqK(d){this.a=d},
eqL:function eqL(d,e,f){this.a=d
this.b=e
this.c=f},
eql:function eql(d,e,f){this.a=d
this.b=e
this.c=f},
eqv:function eqv(d){this.a=d},
eqw:function eqw(d,e){this.a=d
this.b=e},
eqx:function eqx(d){this.a=d},
eqy:function eqy(d){this.a=d},
eqz:function eqz(d){this.a=d},
eqA:function eqA(d){this.a=d},
eqB:function eqB(d){this.a=d},
eqC:function eqC(d,e){this.a=d
this.b=e},
eq2:function eq2(d,e){this.a=d
this.b=e},
eq1:function eq1(d,e){this.a=d
this.b=e},
epW:function epW(d,e){this.a=d
this.b=e},
epU:function epU(){},
epV:function epV(){},
epX:function epX(d,e){this.a=d
this.b=e},
epT:function epT(){},
epY:function epY(d){this.a=d},
epZ:function epZ(d,e,f){this.a=d
this.b=e
this.c=f},
eq_:function eq_(d,e){this.a=d
this.b=e},
eq0:function eq0(d,e){this.a=d
this.b=e},
ahO(d,e){var w=d.d,v=e.a,u=e.c,t=e.b,s=w.a,r=w.b
w=w.c
return d.c?new A.r(s+v,r-u,w+t):new A.r(s+v,r+t,w+u)},
h1p(d,e,f,g){var w,v,u,t,s,r=d.a,q=e.d,p=e.c?A.o8(r,1.5707963267948966,0,q):A.o8(r,0,0,q)
r=C.a([],x.z)
for(q=p.length,w=0;w<p.length;p.length===q||(0,C.M)(p),++w){v=p[w]
u=v.d
u=u===0?0:f.$1(u)
t=v.f
s=t<0.99?3:2
r.push(new A.lP(v.a,v.b,v.c,u,v.e,t,v.r,v.w,v.x,s,g))}q=C.T(x.S,x.q)
for(u=d.b,u=u.gdT(u),u=u.gaf(u);u.C();){t=u.gR(u)
s=f.$1(t.a)
t=t.b
q.n(0,s,new A.cW(t.a,t.b,A.ahO(e,t.c),t.d))}return new C.z(r,q)},
hYn(a3,a4,a5,a6,a7,a8,a9,b0,b1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=x.i,a2=C.ey([a4,a5],a1)
for(w=b1.length,v=0;v<b1.length;b1.length===w||(0,C.M)(b1),++v){u=b1[v].a
a2.M(0,D.k.E(u[0],a4,a5))
a2.M(0,D.k.E(u[1],a4,a5))}t=C.C(a2,a2.$ti.k("cr.E"))
D.d.fc(t)
for(w=C.S(b1).k("Z<1>"),u=w.k("J.E"),s=0;r=s+1,r<t.length;s=r){q=t[s]
p=t[r]
o=p-q
if(o<0.01)continue
n=(q+p)/2
m=C.C(new C.Z(b1,new A.fmG(n),w),u)
l=C.ey([a6,a7],a1)
for(k=m.length,v=0;v<m.length;m.length===k||(0,C.M)(m),++v){j=m[v].a
l.M(0,D.k.E(j[2],a6,a7))
l.M(0,D.k.E(j[3],a6,a7))}i=C.C(l,l.$ti.k("cr.E"))
D.d.fc(i)
for(k=!(o>30),h=0;g=h+1,g<i.length;h=g){f=i[h]
e=i[g]
j=e-f
if(j<0.01)continue
d=(f+e)/2
if(D.d.b3(m,new A.fmH(d)))continue
a0=!k||j>60?2:1
a3.hm(new A.r(n,d,a8),new A.r(o,j,a9),b0,a0)}}},
wK(d1,d2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1=null,c2=x.z,c3=C.a([],c2),c4=new A.fk(c3),c5=C.a([],x.a),c6=x.E,c7=C.a([],c6),c8=x.S,c9=C.T(c8,x.q),d0=$.dQ=$.dQ+1
c4.f=-1
c4.b=8001
c4.n6(B.fYg,B.h0w,B.Bd,0.15,4)
c4.f=0
c4.hm(B.fXM,B.aV2,B.adw,3)
c4.aY(B.h5d,B.h6B,B.hS,0.5)
c4.aO(B.aV8,B.fXv,B.B0)
c4.aO(B.aV8,B.h6Q,B.B0)
c4.hm(B.h0B,B.aV2,B.adw,3)
c4.aY(B.fXE,B.h0C,B.vv,0.15)
c4.aY(B.h1h,B.h0J,B.EH,0.8)
c4.b=0
c4.f=3
c4.d=d1.gwA()?0.42:0.1
c4.hm(B.fVR,B.h2K,d1.gwA()?B.ky:B.b9S,3)
c4.d=1
c4.f=2
c4.b=8001
if(!d1.gwA())for(w=0;w<10;++w)c4.aDg(new A.r(-72+w*16,51.3,55),B.h3k,B.jp,!1,0.05)
else{c4.x=d0
c4.aY(B.h1M,B.h_6,D.c,0.2)
c4.aY(B.h7F,B.aVk,D.c,0.2)
c4.aY(B.fZc,B.aVk,D.c,0.2)}if(d1.gwA()){c4.x=d0
c4.aY(B.fZl,B.h_c,B.ky,0.2)}c4.x=0
c4.b=8001
c4.r=!0
c4.hm(B.h6p,B.h77,B.afh,2)
c4.aY(B.h5n,B.fXe,B.XE,0.1)
c4.aY(B.h5m,B.fXf,B.Lu,0.1)
c4.aY(B.h4V,B.aUU,B.Lu,0.1)
c4.aY(B.fV3,B.aUU,B.Lu,0.1)
c4.r=!1
c9.n(0,8001,B.e7K)
c4.x=d0
c4.b=8002
c4.n6(B.h7o,B.aUY,B.jp,0.05,3)
c4.n6(B.fWk,B.aUY,B.jp,0.05,3)
c9.n(0,8002,B.e8b)
for(v=d1.y,w=0;u=$.H5(),w<u.length;++w){t=1000+w
c4.b=t
c4.cGF(new A.r(u[w],0,-2.25),B.h31,B.jp,!1,0.05,2)
s=v.q(0,w)?"This one has a hole for the cable.":"Tap it with the drill to put a hole through it."
c9.n(0,t,new A.cW("Wall stud","A 2x4 stud, one of the vertical posts in the wall. They stand 16 inches apart. "+s,new A.r(u[w],20,-2),60))
if(v.q(0,w)){c4.b=0
c4.e=0.6
c4.aO(new A.r(u[w],40,-2.25),B.fXK,B.agn)
c4.e=0}}c4.b=8000
c4.aY(B.fVc,B.fTx,B.WU,0.5)
c4.e=0.4
c4.aO(B.h0j,B.h5Z,B.ER)
for(r=0;r<6;++r)for(v=19.5-r*3.6,q=0;q<2;++q)c4.aY(new A.r(61.6+q*4.8,v,0.5),B.fQB,B.Yq,0.3)
p=d1.ax&&!d1.ay
v=p?0.6:0
if(d1.ay)u=D.ca
else u=p?D.bx:D.he
c4.aY(new A.r(64,-2.5+v,0.9),B.h_1,u,0.4)
c4.e=0
if(d1.ay)v="The main breaker has TRIPPED (orange). Tap it to flip it fully OFF, fix the problem, then turn it ON."
else v=d1.ax?"The power is ON. Tap to turn it OFF. Always turn it OFF before you touch any wire.":"The power is OFF. Tap to turn it ON."
c9.n(0,8000,new A.cW("Breaker panel",v,B.fXj,60))
c4.b=8003
for(v=d1.z,u=C.en(v,v.r,C.a6(v).c),t=x.o,s=u.$ti.c;u.C();){o=u.d
n=A.jU(o==null?s.a(o):o)
o=n.d
m=o.a-0.35
l=C.a([B.h45,B.h1I,new A.r(m,40,-3.2)],t)
if(n.c)D.d.v(l,C.a([new A.r(m,51.4,-3.2),new A.r(m,51.4,o.c+11)],t))
else l.push(new A.r(m,o.b+11,-3.4))
c4.jf(A.GY(l,3,6),0.2,B.XK,!1,0.35,6)}c9.n(0,8003,B.e8z)
for(u=x.eV,s=d1.Q,k=0;k<3;++k){j=B.ol[k]
i=s.h(0,j)
if(i==null||!i.a)continue
if(i.e)h=B.bnu
else h=i.d?B.boZ:B.bol
o=C.a([],u)
for(m=i.b,l=C.a6(m),g=new C.mk(m,m.r,l.k("mk<1>")),g.c=m.e,l=l.c;g.C();){m=g.d
if(m==null)m=l.a(m)
o.push(new C.cw([A.jU(m).d.a-1.15,A.jU(m).d.a+1.15,A.jU(m).d.b-2,A.jU(m).d.b+2]))}m=6100+k
c4.b=m
A.hYn(c4,j,j+48,-47,47,-0.25,0.5,h,o)
o=i.e?"Painted and finished.":"A 4 by 8 foot sheet of drywall (gypsum between two layers of paper). It is screwed to the studs."
c9.n(0,m,new A.cW("Drywall sheet",o,new A.r(j+24,0,0),90))
c4.b=0
c4.e=0.3
for(o=i.c,m=C.a6(o),l=new C.mk(o,o.r,m.k("mk<1>")),l.c=o.e,m=m.c;l.C();){o=l.d
if(o==null)o=m.a(o)
f=D.o.an(o,10)
e=D.o.F(o,10)
c4.fT(new A.r($.H5()[f],-40+e*16,0.1),0.34,B.ER,3,5,0.3)}c4.e=0}for(u=d2.a,o=u!=="tape",m=d1.as,l=u!=="mud",g=u==="sand",w=0;w<2;w=a1){d=-24+48*w
a0=s.h(0,B.ol[w])
a0=a0==null?c1:a0.a
a1=w+1
a2=s.h(0,B.ol[a1])
a2=a2==null?c1:a2.a
if(a0!==!0||a2!==!0)continue
a3=m[w]
a0=6200+w
c4.b=a0
if(a3.a&&!a3.d){a2=a3.b
if(a2===0)h=B.bnx
else h=a3.c?B.bjx:B.beG
c4.e=0.5
c4.aO(new A.r(d,0,0.08+0.02*a2),new A.r(2.2+a2*1.4,94,0.12),h)
c4.e=0}else if(!o||!l||g){c4.d=0.45
c4.e=0.6
c4.aO(new A.r(d,0,0.12),B.h_o,D.b2)
c4.e=0
c4.d=1}if(a3.d)a2="Smooth and ready for paint."
else if(!a3.a)a2="The joint between two sheets. It needs tape and three coats of joint compound."
else{a2=a3.b
a4=a2===1?"":"s"
a4="Taped, with "+a2+" coat"+a4+" of mud."
a2=a4}c9.n(0,a0,new A.cW("Seam",a2,new A.r(d,0,0),70))}for(o=d2.b,m=d1.x,l=d1.at,g=x.N,a5=0;a5<7;++a5){n=B.uw[a5]
a0=n.a
a6=m.ai(0,a0)
a7=l.h(0,a0)
a8=o===a0&&a7!=null
if(!a6)continue
a2=n.c
if(a2)a9=n.e==="fan"?"fan":"light"
else{a4=a7==null?c1:a7.a
a9=a4==null?"outlet":a4}if(a8){b0=A.t0(a7.a)
a0=a7.b
b1=A.h2g(b0,a0,!1)
b2=A.h1p(b1,n,new A.fu8(n),d0)
D.d.v(c3,b2.a)
c9.v(0,b2.b)
if(a0.f&&a0.c===0){a0=C.a([],c6)
for(a2=b1.c,a4=a2.length,b3=0;b3<a2.length;a2.length===a4||(0,C.M)(a2),++b3){b4=a2[b3]
a0.push(new A.hf(A.ahO(n,b4.a),b4.b,b4.c,0))}D.d.v(c7,a0)}}else if(a7!=null&&a7.b.c>=2){a4=a7.a
b5=a7.b
b6=b5.w
b7=C.a([],c2)
b8=new A.fk(b7)
b9=new A.Cu(C.T(c8,g))
b9.c=2
b9.w=b6
if(a4==="light"||a4==="fan")A.hkq(b8,a4,b9)
else{A.hk4(b8,A.h2U(a4),-0.25,b6,!0,!1)
A.hmt(b8,b6)}D.d.v(c3,A.h1p(new A.tI(b7,B.RI,B.ze,B.wr,c1,0),n,new A.fu9(n),d0).a)
if(!a2){c4.f=3
c4.b=3000+a0
c4.e=0.4
c4.d=0.55
a2=n.d
b5=b5.w?D.aw:D.bc
c4.aO(new A.r(a2.a,a2.b,a2.c+0.2),B.h_t,b5)
c4.d=1
c4.f=2
c4.e=0}c9.n(0,3000+a0,new A.cW(A.hU7(a4),A.hU6(d1,a0),A.ahO(n,B.a9G),22))}else{a4=C.a([],c2)
b5=A.h2U(a9)===a9?a9:"outlet"
A.hjq(new A.fk(a4),b5,!1)
D.d.v(c3,A.h1p(new A.tI(a4,B.dvj,B.ze,B.wr,c1,0),n,new A.fua(n),d0).a)
a2=a2?"Ceiling box":"Electrical box"
a4=v.q(0,a0)?"The box is mounted and the cable is in. A device can be wired here.":"The box is mounted. Pull the cable to it."
c9.n(0,2000+a0,new A.cW(a2,a4,A.ahO(n,B.a9G),24))}}c4.x=0
c0=new A.fud(c4)
if(u==="wall"||u==="ceiling"||u==="fanbox")for(a5=0;a5<7;++a5){n=B.uw[a5]
c2=n.a
if(m.ai(0,c2))continue
c6=n.c
c8=n.d
s=c8.a
o=c8.b
a0=c6?new A.r(s,o-1,c8.c):new A.r(s,o,1.5)
a2=c6?B.fXT:B.fZR
c0.$4$round(2000+c2,a0,a2,c6)
c2=c6?new A.r(s,o-8,c8.c):new A.r(s,o+7,3)
c7.push(new A.hf(c2,n.b,D.f5,0))}else if(u==="cable")for(a5=0;a5<7;++a5){n=B.uw[a5]
c2=n.a
if(!m.ai(0,c2)||v.q(0,c2))continue
c6=n.c
c8=n.d
s=c8.a
o=c8.b
c8=c6?new A.r(s,o-1,c8.c):new A.r(s,o,1.5)
s=c6?B.aV0:B.fYi
c0.$5$col$round(2000+c2,c8,s,D.bI,c6)}else if(u==="knife")for(a5=0;a5<7;++a5){n=B.uw[a5]
if(n.c||!m.ai(0,n.a))continue
c2=n.d
c6=c2.a
i=d1.apK(c6)
if(i==null||i.b.q(0,n.a))continue
c0.$4$col(2000+n.a,new A.r(c6,c2.b,0.5),B.fZZ,D.cZ)}else if(u==="sheet")for(w=0;w<5;){j=B.a4j[w]
c0.$3(6000+w,new A.r(j,0,0.3),B.h35);++w
c7.push(new A.hf(new A.r(j,50,1),"edge "+w,D.f5,0))}else if(u==="screw")for(a5=0;a5<3;++a5){j=B.ol[a5]
i=s.h(0,j)
if(i==null||!i.a)continue
for(c2=d1.aq2(j),c6=c2.length,c8=i.c,o=j+48,b3=0;b3<c2.length;c2.length===c6||(0,C.M)(c2),++b3){f=c2[b3]
for(a0=f*10,a2=7000+a0,r=0;r<6;++r){if(c8.q(0,a0+r))continue
c0.$3(a2+r,new A.r($.H5()[f],-40+r*16,0.5),B.aUR)}a2=$.H5()
if(f+1<a2.length&&a2[f]+16<=o)for(a0=7500+a0,r=0;r<6;r+=2)c0.$4$col(a0+r,new A.r(a2[f]+8,-40+r*16+8,0.5),B.aUR,D.dt)}}if(!C.ey(["wall","ceiling","fanbox","cable","knife","sheet","screw",""],g).q(0,u))c2=D.d.q(B.HH,u)||C.ey(["outlet","gfci","switch","light","fan"],g).q(0,u)||D.d.q(B.lG,u)||D.d.q(B.jS,u)
else c2=!1
if(c2)for(c2=d1.CW,a5=0;a5<7;++a5){n=B.uw[a5]
if(D.d.q(B.HH,u)){c6=n.a
a7=l.h(0,c6)
if(a7!=null&&D.d.q(B.lG,a7.a)&&a7.b.c>=2&&!c2.ai(0,c6)){c8=n.d
c0.$4$col(3000+c6,new A.r(c8.a,c8.b,1.2),B.h_w,D.bm)}}else{c6=n.a
if(m.ai(0,c6)&&v.q(0,c6)&&!l.ai(0,c6)){c8=n.c
s=n.d
o=s.a
g=s.b
s=c8?new A.r(o,g-1,s.c):new A.r(o,g,1.2)
o=c8?B.aV0:B.h3_
c0.$4$round(2000+c6,s,o,c8)}}}c4.r=!0
for(c2=d1.CW,c6=new C.cH(c2,C.a6(c2).k("cH<1,2>")).gaf(0);c6.C();){j=c6.d
c8=j.a
n=A.jU(c8)
v=n.d
d=v.a
c4.b=8200+c8
v=v.b
c4.jf(A.GY(C.a([new A.r(d,v,2.5),new A.r(d,-46,3.5),new A.r(d,-46,22)],t),4,6),0.55,B.XO,!1,0.2,6)
c4.aY(new A.r(d,v,1.8),B.h1e,B.bdV,0.3)
v=c4.b=8100+c8
u=j.b
switch(u){case"tv":c4.aY(new A.r(d,-45,24),B.fWE,B.afI,0.2)
c4.aY(new A.r(d,-19,24),B.fY6,E.F4,0.4)
if(c2.ai(0,c8))c8=d1.ax&&!d1.ay&&d1.a4g(c8)
else c8=!1
if(c8){c8=d-38.5
s=d+38.5
c5.push(new A.fK(C.a([new A.r(c8,1.5,25.7),new A.r(s,1.5,25.7),new A.r(s,-39.5,25.7),new A.r(c8,-39.5,25.7)],t),v,new A.fub(j),320,180,9,2,0,!1))}break
case"lamp":c4.dQ(new A.r(d,-47.5,24),new A.r(d,-46.5,24),6,B.WN,0.4,14)
c4.dQ(new A.r(d,-46.5,24),new A.r(d,-22,24),1,B.Bd,0.5,8)
c4.yJ(new A.r(d,-26,24),new A.r(d,-12,24),9,S.XV,!1,!0,5.5,0.2,16)
break
case"toaster":c4.aY(new A.r(d,-42.5,24),B.fU6,B.jG,0.8)
c4.aO(new A.r(d,-38,24),B.h44,B.agV)
break
default:c4.aY(new A.r(d,-43.5,24),B.fUL,B.afI,0.2)
c4.By(new A.r(d-6,-38,24),new A.r(d+8,-38,24),3.4,B.LY,3,0.6,12)
c4.wj(new A.r(d-8,-43,24),B.fUg,B.LY,0.6,0)}c8=A.hSj(u)
s="Plugged into "+n.b
u=u==="tv"?s+". To unplug it, go behind it (the Behind the TV button) and tap the plug on the wall.":s+". Tap it to unplug."
c9.n(0,v,new A.cW(c8,u,new A.r(d,-35,20),60))}c4.r=!1
for(a5=0;a5<7;++a5){n=B.uw[a5]
c9.c4(0,2000+n.a,new A.fuc(n))}return new A.tI(c3,c9,c7,c5,c1,0)},
hU7(d){var w
A:{if("gfci"===d){w="GFCI outlet"
break A}if("switch"===d){w="Light switch"
break A}if("light"===d){w="Ceiling light"
break A}if("fan"===d){w="Ceiling fan"
break A}if("outlet"===d){w="Outlet"
break A}w=A.agx(d)
break A}return w},
hSj(d){var w
A:{if("tv"===d){w="TV"
break A}if("lamp"===d){w="Lamp"
break A}if("toaster"===d){w="Toaster"
break A}w="Hair dryer"
break A}return w},
hU6(d,e){var w,v=d.at.h(0,e)
if(v==null)return""
if(v.b.w)return"BURNT. It was wired wrong and it burnt out. Pull it out and put in a new one."
w=v.a
if(D.d.q(B.jS,w))return d.ch.q(0,e)?"The switch is ON. Tap to turn it off.":"The switch is OFF. Tap to flip it on."
if(w==="light"||w==="fan")return d.amT(e)?"It is running.":"It is off. Flip its switch (breaker on)."
w=d.CW.h(0,e)
return"Tap with a TV, lamp, toaster or hair dryer in your hand to plug it in. Plugged: "+(w==null?"nothing":w)+"."},
id0(a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=C.a([],x.z),a0=new A.fk(d)
for(w=D.d.gaf(B.uw),v=new C.f5(w,new A.fKV()),u=a1.at,t=a2*7;v.C();){s=w.gR(0)
r=s.a
q=u.h(0,r)
if(q==null||q.b.c<1)continue
p=a1.amT(r)?t:0.4
a0.b=3000+r
s=s.d
r=s.a
o=s.b-6.6
s=s.c
for(n=0;n<4;++n){m=p+n*3.141592653589793/2
l=A.vs(B.fTu,m)
a0.wj(new A.r(r+l.a,o+l.b,s+l.c),B.h6W,B.bcB,0.3,m)}}w=a1.d
w===$&&C.c()
w=D.d.gaf(w)
v=new C.f5(w,new A.fKW())
u=a2*5
while(v.C()){s=w.gR(0).a
if(a1.amT(s)){k=A.jU(s)
a0.b=0
a0.d=0.25+0.05*Math.sin(u)
s=k.d
a0.fT(new A.r(s.a,s.b-5,s.c),11,B.Xc,4,10,0)
a0.d=1}}for(w=a1.CW,v=new C.cH(w,C.a6(w).k("cH<1,2>")).gaf(0),u=a2*1.6,s=a2*6;v.C();){j=v.d
r=j.a
if(w.ai(0,r))o=a1.ax&&!a1.ay&&a1.a4g(r)
else o=!1
if(!o)continue
i=A.jU(r).d.a
a0.b=8100+r
switch(j.b){case"tv":break
case"lamp":a0.b=0
a0.d=0.3+0.05*Math.sin(s)
a0.fT(new A.r(i,-19,24),11,H.AR,4,10,0)
a0.d=1
break
case"toaster":a0.e=0.8
r=C.ar(B.afe,H.M2,(Math.sin(s)+1)/2)
r.toString
a0.aO(new A.r(i,-38.2,24),new A.r(13,0.3,6),r)
a0.e=0
break
default:for(r=i+9,h=0;h<6;++h)a0.fT(new A.r(r+D.k.F(u+h/6,1)*22,-38+Math.sin(h*2)*2,24),0.6,B.bjU,3,5,0.2)}}for(w=a1.db,w=new C.cH(w,C.a6(w).k("cH<1,2>")).gaf(0),v=a1.cx;w.C();){j=w.d
u=j.a
k=A.jU(u)
g=a3.h(0,u)
f=a2<=(g==null?0:g)
e=v.q(0,u)
if(!f&&!e)continue
u=f?j.b:"smolder"
A.hoh(a0,u,new A.fKX(k),1,a2)}return d},
rH:function rH(d,e,f){this.a=d
this.b=e
this.c=f},
fmG:function fmG(d){this.a=d},
fmH:function fmH(d){this.a=d},
fu8:function fu8(d){this.a=d},
fu9:function fu9(d){this.a=d},
fua:function fua(d){this.a=d},
fud:function fud(d){this.a=d},
fub:function fub(d){this.a=d},
fuc:function fuc(d){this.a=d},
fKV:function fKV(){},
fKW:function fKW(){},
fKX:function fKX(d){this.a=d},
hg4(d,e){var w=new A.ctj(e,d,A.h9r())
w.byN(4,d,e)
return w},
re:function re(d,e){this.a=d
this.b=e},
up:function up(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
Mj:function Mj(d,e){this.a=d
this.b=e
this.c=!1},
ctj:function ctj(d,e,f){var _=this
_.a=d
_.b=e
_.c=$
_.d=f
_.e=3
_.r=_.f=0
_.w=!1},
cto:function cto(d){this.a=d},
ctk:function ctk(){},
ctm:function ctm(){},
ctn:function ctn(){},
ctl:function ctl(d){this.a=d},
art:function art(d,e){this.d=d
this.a=e},
aEF:function aEF(d,e){var _=this
_.e=_.d=$
_.f=d
_.r=$
_.w=e
_.x="inspect"
_.y=0
_.z=null
_.at=_.as=_.Q=!1
_.c=_.a=_.ax=null},
es7:function es7(d,e,f){this.a=d
this.b=e
this.c=f},
es8:function es8(d){this.a=d},
es6:function es6(d){this.a=d},
erX:function erX(d){this.a=d},
es1:function es1(d){this.a=d},
es2:function es2(d){this.a=d},
es0:function es0(d){this.a=d},
es3:function es3(d,e){this.a=d
this.b=e},
es4:function es4(d){this.a=d},
es5:function es5(d){this.a=d},
es_:function es_(d){this.a=d},
erZ:function erZ(d,e){this.a=d
this.b=e},
erW:function erW(d){this.a=d},
erU:function erU(d){this.a=d},
erV:function erV(d,e){this.a=d
this.b=e},
erY:function erY(d){this.a=d},
esk:function esk(d,e){this.a=d
this.b=e},
esg:function esg(){},
esf:function esf(d){this.a=d},
esh:function esh(){},
esi:function esi(){},
esj:function esj(d,e){this.a=d
this.b=e},
ese:function ese(d,e){this.a=d
this.b=e},
esd:function esd(d){this.a=d},
esc:function esc(d){this.a=d},
esa:function esa(d,e){this.a=d
this.b=e},
es9:function es9(){},
esb:function esb(d,e){this.a=d
this.b=e},
ati(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){return new A.xW(p,s,u,t,r,h,o,n,m,i,q,d,j,g,k,e,f,l)},
ict(d){var w,v,u,t,s,r,q,p,o,n,m=d.gev(0),l=C.a([],x.T)
for(w=d.x,v=w.length,u=0;u<w.length;w.length===v||(0,C.M)(w),++u){t=w[u]
s=t.b
if(s==="rug")continue
s=B.ht.h(0,s)
s.toString
r=(t.e&1)===1
q=r?s.d:s.c
p=r?s.c:s.d
s=t.c
r=q/2
o=t.d
n=p/2
l.push(new A.i8(s-r,s+r,o-n,o+n))}switch(d.c){case"kitchen":w=-m/2
l.push(new A.i8(w,w+28,0,28))
l.push(new A.i8(10,m/2,0,28))
break
case"bathroom":l.push(B.dwn)
l.push(B.dw3)
w=-m/2
l.push(new A.i8(w,w+33,0,75))
break}return l},
bqY(d,e,f,g,h,i,j,k,l,m,n,o){var w=new A.bqX(d,i,m,o,n,l,g,f,k,j,e,h,C.a([],x.n))
w.bz2(d,e,f,g,h,i,j,k,l,m,n,o)
return w},
hk7(d,e){var w,v,u,t=d.w,s=D.d.bg(t,new A.ffw(e))
if(s<0)s=0
w=t[s]
v=d.gev(0)
u=d.ghn(0)
t=w.c
switch(w.b){case"left":return new C.bj(new C.z(-v/2+18,D.k.E(t+u/2-40,10,u-10)),1.5707963267948966,s)
case"right":return new C.bj(new C.z(v/2-18,D.k.E(t+u/2-40,10,u-10)),-1.5707963267948966,s)
default:return new C.bj(new C.z(D.o.E(t,-v/2+12,v/2-12),18),0,s)}},
xW:function xW(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){var _=this
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
_.at=q
_.ax=r
_.ay=s
_.ch=t
_.CW=u},
rF:function rF(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a9J:function a9J(d,e,f,g,h,i,j,k,l,m,n){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.x=k
_.y=l
_.z=m
_.Q=n},
i8:function i8(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cpS:function cpS(d,e){var _=this
_.a=d
_.b=e
_.d=_.c=$},
Au:function Au(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
bqX:function bqX(d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
ffw:function ffw(d){this.a=d},
aVx:function aVx(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=$},
bTm:function bTm(d,e){this.a=d
this.b=e},
bTn:function bTn(d){this.a=d},
hrJ(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=C.a([B.dwg],x.T)
for(w=d.x,v=w.length,u=0;u<w.length;w.length===v||(0,C.M)(w),++u){t=w[u]
if(t.a===e)continue
s=t.b
if(D.d.q(B.a4g,s)||D.d.q(B.Hw,s)||s==="bush")continue
r=s==="townsign"
if(r||s==="adboard"){q=r?178:150
for(s=[-q,q],p=0;p<2;++p){o=s[p]
n=t.e*3.141592653589793/2
r=Math.cos(n)
m=Math.sin(n)
r=t.c+o*r
m=t.d+-o*m
i.push(new A.i8(r-8,r+8,m-8,m+8))}continue}r=B.ht.h(0,s)
r.toString
m=(t.e&1)===1
l=m?r.d:r.c
k=m?r.c:r.d
if(s==="tree"||s==="pine"){l=10
k=10}s=t.c
r=l/2
m=t.d
j=k/2
i.push(new A.i8(s-r,s+r,m-j,m+j))}return i},
hhi(d,e,f){var w=new A.b8S(d,-d.gev(0)/2+10,d.gev(0)/2-10,-760,d.ghn(0)-10,e,f,0,B.dd6)
w.Mk(0)
return w},
b8S:function b8S(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=!1
_.y=0
_.z=!1
_.as=_.Q=0
_.at=null
_.ax=l
_.ay=7
_.ch=1
_.CW=null},
ak6:function ak6(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h},
apG:function apG(d){this.a=d},
bdp:function bdp(d){var _=this
_.d=0
_.e=!1
_.f=d
_.c=_.a=_.r=null},
d4C:function d4C(d){this.a=d},
d4D:function d4D(d,e){this.a=d
this.b=e},
d4B:function d4B(d,e){this.a=d
this.b=e},
d4E:function d4E(d){this.a=d},
d4A:function d4A(d){this.a=d},
d4F:function d4F(d){this.a=d},
d4z:function d4z(d){this.a=d},
d4G:function d4G(d,e){this.a=d
this.b=e},
d4y:function d4y(d,e,f){this.a=d
this.b=e
this.c=f},
d4H:function d4H(d,e){this.a=d
this.b=e},
d4I:function d4I(d){this.a=d},
d4x:function d4x(d){this.a=d},
hoh(d,e,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
if(e==="none"||e.length===0)return
d.b=0
w=new A.fvQ(a2,d,a0,a1)
v=new A.fvP(d,a2,a0,a1)
switch(e){case"arc":u=D.k.bm(a2*14)
for(t=0.1*a1,s=x.o,r=u*3.1,q=0;q<3;++q){p=Math.sin((r+q*7.7)*12.9898)*43758.5453
if(p-Math.floor(p)<0.3)continue
o=q*2
n=2.2-o
m=C.a([],s)
for(o=1.6-o-n,l=u+q*13,k=0;k<=6;++k){j=k/6
if(k===0||k===6)i=0
else{p=Math.sin((l+k)*12.9898)*43758.5453
i=(p-Math.floor(p)-0.5)*1.6}m.push(a0.$1(new A.r(-1.8+3.6*j,n+o*j+i,3.3)))}p=Math.sin((u+q)*12.9898)*43758.5453
o=C.ar(D.c,D.co,p-Math.floor(p))
o.toString
d.jf(m,t,o,!1,0,4)}d.d=0.16+0.1*Math.sin(a2*31)
d.fT(a0.$1(B.h2Y),3.2*a1,D.dt,4,8,0)
d.d=1
break
case"spark":w.$2(22,7)
d.d=0.2+0.1*Math.sin(a2*26)
d.fT(a0.$1(B.aV6),2.4*a1,H.AR,4,8,0)
d.d=1
break
case"smoke":d.d=0.3+0.08*Math.sin(a2*7)
d.fT(a0.$1(B.fX6),2.6*a1,D.aw,4,8,0)
d.d=1
v.$3(9,0.8,11)
w.$2(5,3)
break
case"fire":d.d=0.3+0.12*Math.sin(a2*20)
d.fT(a0.$1(B.aV6),4.4*a1,D.cZ,4,8,0)
d.d=1
h=D.k.bm(a2*11)
for(t=0.85*a1,s=0.05*a1,r=0.5*a1,o=0.04*a1,k=0;k<6;++k){p=-2.2+k*0.88
g=Math.sin((h+k*5)*12.9898)*43758.5453
f=2.4+(g-Math.floor(g))*3.6
l=a0.$1(new A.r(p,-2.2,3))
g=Math.sin((h+k)*12.9898)*43758.5453
d.By(l,a0.$1(new A.r(p+(g-Math.floor(g)-0.5)*1.2,-2.2+f,3.4)),t,D.fu,s,0,6)
d.By(a0.$1(new A.r(p,-2.2,3.1)),a0.$1(new A.r(p,-2.2+f*0.62,3.5)),r,D.bI,o,0,6)}w.$2(16,6)
v.$3(10,1,13)
break
case"smolder":v.$3(4,0.9,9)
break}},
fvQ:function fvQ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fvP:function fvP(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fZm(d){var w
switch(d.a){case 0:w="CORRECT"
break
case 1:w="INCORRECT"
break
case 2:w="UNSAFE"
break
case 3:w="INCOMPLETE"
break
case 4:w="REQUIRES VERIFICATION"
break
default:w=null}return w},
auU(d){var w
switch(d.a){case 0:w=0
break
case 3:w=1
break
case 4:w=2
break
case 1:w=3
break
case 2:w=4
break
default:w=null}return w},
hod(d,e,a0){var w,v,u,t,s=C.a([],x.fB),r=new A.fvk(s),q=new A.fvp(e),p=q.$2(B.UZ,B.Jp),o=q.$2(B.UZ,B.Jq),n=q.$2(B.UZ,B.Jr),m=q.$2(B.V_,B.Jq),l=q.$2(B.V_,B.Jp),k=q.$2(B.V_,B.Jr),j=q.$2(B.V0,B.Jr),i=q.$2(B.V0,B.Jp),h=q.$2(B.V0,B.Jq),g=new C.Z(e,new A.fvl(),C.S(e).k("Z<1>")).gL(0),f=D.d.b3(e,new A.fvm())
if(f)r.$5("UNVERIFIED",B.eWT,"A conductor is in use whose function was never verified. A wire color alone does not prove what a wire does.","Verify every conductor with a tester before you connect it.","Identify each wire with a tester and the device diagram, then connect it.")
if(D.d.b3(e,new A.fvn()))r.$5("LOOSE",B.rS,"A connection is loose. A loose connection heats up and can arc.","Every conductor must be fastened tightly under its screw or connector.","Tighten the connection.")
if(D.d.b3(e,new A.fvo()))r.$5("EXPOSED",B.rS,"Bare copper is showing outside the terminal. An exposed energized conductor can shock or short.","No conductor may be left exposed.","Trim the wire so only the part under the screw is bare.")
if(!a0)r.$5("SUPPORT",B.rS,"The box or support is not rated for this device. It can fall.","A fixture or fan must hang from a box or bracket rated for its weight.","Use a box rated for this fixture (a fan-rated box for a fan).")
if(n>0||i>0)r.$5("HOT_TO_GROUND",B.rS,"The hot wire is connected to the ground. That is a short circuit to ground: a very large current.","The equipment ground never carries current in normal use, and the hot wire never touches it.","Hot goes on the hot terminal (brass). Ground goes only on the green screw.")
f=o>0
if(!(f&&m>0))w=l>0&&p>0
else w=!0
if(w)r.$5("SHORT",B.rS,"The hot and the neutral are connected together. That is a short circuit.","Hot and neutral must never touch each other.","Put each wire on its own terminal.")
else if(f||l>0)r.$5("REVERSED",B.rS,"Hot and neutral are reversed (reversed polarity). The device may still seem to work, but the parts that should be dead are live. This is a shock hazard.","Hot goes to the brass (hot) terminal and neutral to the silver (neutral) terminal.","Swap them: black (hot) to brass, white (neutral) to silver.")
if(k>0||h>0)r.$5("NEUTRAL_GROUND",B.rS,"The neutral and the equipment ground are joined at the device. Current can flow on the ground path and trip protective devices.","The neutral is never used as the equipment ground, and the two are not joined at the device.","Neutral to the silver terminal only. Ground to the green screw only.")
if(!(i>0&&n===0))f=h>0&&k===0
else f=!0
if(f)r.$5("GROUND_AS_CURRENT",B.rS,"The equipment ground was fastened to a terminal that carries current. The ground must never be used as a normal conductor.","The equipment ground goes only to the ground terminal.","Move the bare copper (ground) wire to the green screw.")
if(g>0&&p<d.b)r.$5("LOAD_SIDE",B.aOg,"The wires are on the LOAD screws. Power must come in on LINE; on LOAD the device would not protect or feed anything.","Supply (line) conductors go to the LINE terminals.","Move the wires to the LINE screws.")
f=d.b
if(p<f&&g===0&&o===0&&l===0&&n===0)r.$5("MISSING_HOT",B.Th,"The hot wire is not on the hot terminal, so the device gets no power.","The device needs its hot connection.","Connect the black (hot) wire to the brass terminal.")
if(p>=f){f=d.c
f=m<f&&f>0&&l===0&&k===0}else f=!1
if(f)r.$5("OPEN_NEUTRAL",B.rS,"The neutral is not connected, but the hot wire is. The device will not run, and parts of it can still be live. There may be nothing to see.","The neutral return conductor must be connected.","Connect the white (neutral) wire to the silver terminal.")
if(d.d&&j===0)r.$5("MISSING_GROUND",B.rS,"There is no equipment ground. It may seem to work, but nothing protects you if a fault happens.","A required equipment ground must be connected to the ground terminal.","Connect the bare copper (ground) wire to the green screw.")
for(f=s.length,v=B.v0,u=0;u<f;++u){t=s[u].b
if(A.auU(t)>A.auU(v))v=t}return new A.b5u(v,s,A.hTF(s,e))},
hTF(d,e){var w=new A.ff3(d)
if(w.$1("SHORT")||w.$1("HOT_TO_GROUND"))return B.brg
if(w.$1("LOOSE"))return B.br8
if(w.$1("EXPOSED"))return B.bre
if(w.$1("GROUND_AS_CURRENT"))return B.bri
if(w.$1("REVERSED"))return B.brh
if(w.$1("NEUTRAL_GROUND"))return B.brj
if(w.$1("SUPPORT"))return B.brf
if(w.$1("OPEN_NEUTRAL"))return B.brd
if(w.$1("LOAD_SIDE")||w.$1("MISSING_HOT"))return B.br6
if(w.$1("UNVERIFIED"))return B.br7
if(w.$1("MISSING_GROUND"))return B.bra
return B.brc},
hNH(d){var w
switch(d.a.c.a){case 0:w=d.b.c===B.Jp
break
case 1:w=d.b.c===B.Jq
break
case 2:w=d.b.c===B.Jr
break
case 3:w=!1
break
default:w=null}return w},
hoe(d,e,f){var w,v,u,t,s=C.a([],x.fB)
e.bQ(0,new A.fvr(f,s))
for(w=s.length,v=B.v0,u=0;u<w;++u){t=s[u].b
if(A.auU(t)>A.auU(v))v=t}return new A.b5u(v,s,v===B.v0?B.brb:B.br9)},
Jx:function Jx(d,e){this.a=d
this.b=e},
FB:function FB(d,e){this.a=d
this.b=e},
FI:function FI(d,e){this.a=d
this.b=e},
cwj:function cwj(d){this.c=d},
czU:function czU(d,e){this.a=d
this.c=e},
a40:function a40(d,e){this.a=d
this.b=e},
bL0:function bL0(d,e,f){this.b=d
this.c=e
this.d=f},
we:function we(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
tg:function tg(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h},
b5u:function b5u(d,e,f){this.a=d
this.b=e
this.c=f},
fvk:function fvk(d){this.a=d},
fvp:function fvp(d){this.a=d},
fvq:function fvq(d,e){this.a=d
this.b=e},
fvl:function fvl(){},
fvm:function fvm(){},
fvn:function fvn(){},
fvo:function fvo(){},
ff3:function ff3(d){this.a=d},
ff4:function ff4(d){this.a=d},
aaR:function aaR(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aaS:function aaS(d,e,f){this.a=d
this.b=e
this.c=f},
v4:function v4(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
b4c:function b4c(d,e){this.a=d
this.b=e},
b7n:function b7n(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cwl:function cwl(d,e,f){this.a=d
this.b=e
this.c=f},
cwm:function cwm(){},
cwn:function cwn(){},
cwo:function cwo(){},
Pz:function Pz(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fvr:function fvr(d,e){this.a=d
this.b=e},
h1W(d){var w
switch(d.a){case 0:w=D.bm
break
case 1:w=D.cZ
break
case 2:w=D.cs
break
case 3:w=D.bI
break
case 4:w=D.by
break
default:w=null}return w},
h55(d){return C.bT(E.lv,null,new A.fSU(),d,!0,!0,!0,D.jZ,!1,!1,x.H)},
hsB(d,e,f,g){var w=x.S
return C.bT(E.lv,null,new A.fSS(new A.cwl(e,f,C.T(w,w)),g),d,!0,!0,!0,D.jZ,!1,!1,x.dZ)},
fSU:function fSU(){},
fSS:function fSS(d,e){this.a=d
this.b=e},
a0W:function a0W(d,e,f){this.c=d
this.d=e
this.a=f},
btF:function btF(d){var _=this
_.d=d
_.c=_.a=_.e=null},
f5c:function f5c(d,e){this.a=d
this.b=e},
f5b:function f5b(d,e,f){this.a=d
this.b=e
this.c=f},
f5d:function f5d(d){this.a=d},
f5a:function f5a(d,e){this.a=d
this.b=e},
f5e:function f5e(){},
f5f:function f5f(d){this.a=d},
a4X:function a4X(d,e){var _=this
_.a=d
_.b=e
_.c=!1
_.d=null},
bQZ:function bQZ(d){this.a=d},
bQY:function bQY(d){this.a=d}},B,I,E,Ah,F,N,S,Ai,A_,M,Aj,A4
J=c[1]
C=c[0]
D=c[2]
A5=c[85]
G=c[95]
A6=c[128]
O=c[117]
H=c[105]
A7=c[114]
A8=c[127]
P=c[115]
A9=c[93]
Aa=c[119]
Ab=c[92]
K=c[90]
Q=c[122]
A0=c[82]
Ac=c[111]
T=c[126]
Ad=c[125]
U=c[120]
A1=c[124]
Ae=c[118]
V=c[112]
W=c[96]
Af=c[103]
X=c[116]
Y=c[113]
A2=c[100]
Z=c[107]
A3=c[121]
Ag=c[123]
L=c[99]
R=c[101]
A=a.updateHolder(c[24],A)
B=c[94]
I=c[26]
E=c[97]
Ah=c[65]
F=c[98]
N=c[30]
S=c[104]
Ai=c[108]
A_=c[110]
M=c[102]
Aj=c[109]
A4=c[106]
A.eUJ.prototype={
a4(){return"_RadioType."+this.b}}
A.a9u.prototype={
U(){return new A.adY(null,this.$ti.k("adY<1>"))}}
A.adY.prototype={
gcmJ(){var w=this.e
return w===$?this.e=new A.boc(this):w},
galC(){var w=this.G2$
w=w==null?null:w.gapr()
return w==null?this.a.d:w},
gaz3(){this.a.toString
return!0},
bV_(){var w=this,v=w.a.c,u=w.galC()
if(v===u)return
w.a4R(v===w.galC()?null:v)},
a4R(d){var w=this.G2$
if(w!=null)w.glB().$1(d)
this.a.e.$1(d)},
d3(){var w,v=this
v.eD()
w=v.c
w.toString
v.sa6l(N.fZa(w,v.$ti.c))},
t(){this.sa6l(null)
var w=this.d
if(w!=null)w.t()
this.a1()},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.a
m.toString
switch(0){case 0:w=o.gcmJ()
v=w.a.galC()
o.a.toString
u=new C.HH(!0,N.hLS(n,!1,n,o.gaz3(),n,w,v,n,n,D.kk,n,n,n,n,n,!1,m.c,o.$ti.c),n)
break}C.amF(d)
o.a.toString
A:{m=new C.z(u,n)
break A}t=C.P(d)
s=N.fZb(d)
o.a.toString
w=s.b
w=w==null?n:w.aS(C.aX(x.c1))
r=w
if(r==null)r=t.ax.y
w=o.a.at
v=o.gaz3()
q=o.gaz3()?o.gbUZ():n
p=o.d
if(p==null){p=C.jZ(!0,n,!0,!0,n,n,!1)
o.d=p}return new C.zp(C.dM(!1,n,!0,n,v,p,n,n,!1,n,m.a,n,n,n,n,q,!1,r,n,n,n,n,n,n,w,n,m.b,n),n)}}
A.boc.prototype={
gapr(){return this.a.galC()},
glB(){return this.a.gLy()},
bi8(d){},
bjf(d){},
gdc(d){return this.a}}
A.aMX.prototype={}
A.r.prototype={
a9(d,e){return new A.r(this.a+e.a,this.b+e.b,this.c+e.c)},
aF(d,e){return new A.r(this.a-e.a,this.b-e.b,this.c-e.c)},
aI(d,e){return new A.r(this.a*e,this.b*e,this.c*e)},
FN(d){var w=this.b,v=d.c,u=this.c,t=d.b,s=d.a,r=this.a
return new A.r(w*v-u*t,u*s-r*v,r*t-w*s)},
guN(){var w=this.a,v=this.b,u=this.c
return Math.sqrt(w*w+v*v+u*u)},
goT(d){var w=this,v=w.guN()
return v<1e-9?w:new A.r(w.a/v,w.b/v,w.c/v)}}
A.lP.prototype={}
A.cW.prototype={}
A.hf.prototype={}
A.tI.prototype={}
A.fK.prototype={}
A.fk.prototype={
Wh(){var w=this.x
if(!(w!==0))if(this.r){w=$.dQ+1
$.dQ=w}else w=0
this.w=w},
aI4(d,e,f,g,h,i,j,k){var w=this,v=i.goT(0)
w.a.push(new A.lP(C.a([d,e,f,g],x.o),v,h,w.b,j,w.d,k,w.c,w.e,w.f,w.w))},
bhY(d,e,f,g,h,i,j){return this.aI4(d,e,f,g,h,i,0,j)},
cV1(d,e,f,g,h,i,j){return this.aI4(d,e,f,g,h,i,j,!1)},
Gv(d,e,f,g,h,i){return this.aI4(d,e,f,g,h,i,0,!1)},
a6J(d,e,f,g,h,i){var w=this,v=(h==null?e.aF(0,d).FN(f.aF(0,d)):h).goT(0)
w.a.push(new A.lP(C.a([d,e,f],x.o),v,g,w.b,0,w.d,i,w.c,w.e,w.f,w.w))},
bj7(d,e,f,g){return this.a6J(d,e,f,g,null,!0)},
FB(d,e,f,g,h,i,j){var w,v,u,t,s,r,q,p,o,n,m
this.Wh()
w=e.a/2
v=e.b/2
u=e.c/2
t=new A.bZh(this,i,new A.bZi(j,d),new A.bZj(j),f,h)
s=-w
r=-v
q=2*w
p=2*v
t.$4(new A.r(0,0,1),new A.r(s,r,u),new A.r(q,0,0),new A.r(0,p,0))
o=-u
t.$4(new A.r(0,0,-1),new A.r(w,r,o),new A.r(-2*w,0,0),new A.r(0,p,0))
n=-2*u
t.$4(new A.r(1,0,0),new A.r(w,r,u),new A.r(0,0,n),new A.r(0,p,0))
m=2*u
t.$4(new A.r(-1,0,0),new A.r(s,r,o),new A.r(0,0,m),new A.r(0,p,0))
if(g){t.$4(new A.r(0,1,0),new A.r(s,v,u),new A.r(q,0,0),new A.r(0,0,n))
t.$4(new A.r(0,-1,0),new A.r(s,r,o),new A.r(q,0,0),new A.r(0,0,m))}},
hm(d,e,f,g){return this.FB(d,e,f,!0,0,g,0)},
aDg(d,e,f,g,h){return this.FB(d,e,f,g,h,1,0)},
n6(d,e,f,g,h){return this.FB(d,e,f,!0,g,h,0)},
aY(d,e,f,g){return this.FB(d,e,f,!0,g,1,0)},
aO(d,e,f){return this.FB(d,e,f,!0,0,1,0)},
wj(d,e,f,g,h){return this.FB(d,e,f,!0,g,1,h)},
cGF(d,e,f,g,h,i){return this.FB(d,e,f,g,h,i,0)},
aDf(d,e,f,g){return this.FB(d,e,f,!0,0,1,g)},
yJ(b3,b4,b5,b6,b7,b8,b9,c0,c1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this
b2.Wh()
w=b4.aF(0,b3).goT(0)
v=w.b
u=w.FN(Math.abs(v)<0.9?B.e8:B.hy).goT(0)
t=w.FN(u).goT(0)
s=b9<0?b5:b9
r=new A.bZk(u,c1,t)
for(q=b2.a,p=b3.a,o=b3.b,n=b3.c,m=b4.a,l=b4.b,k=b4.c,j=x.o,i=w.a*-1,v*=-1,h=w.c*-1,g=0;g<c1;){f=r.$1(g);++g
e=r.$1(g)
d=f.a
a0=e.a
a1=f.b
a2=e.b
a3=f.c
a4=e.c
a5=new A.r(d+a0,a1+a2,a3+a4).goT(0)
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
q.push(new A.lP(C.a([new A.r(a6,a7,a8),new A.r(a9,b0,b1),new A.r(a0,a2,a4),new A.r(d,a1,a3)],j),a5,b6,b2.b,c0,b2.d,b8,b2.c,b2.e,b2.f,b2.w))
if(b7){q.push(new A.lP(C.a([b3,new A.r(a9,b0,b1),new A.r(a6,a7,a8)],j),new A.r(i,v,h),b6,b2.b,c0,b2.d,!1,b2.c,b2.e,b2.f,b2.w))
q.push(new A.lP(C.a([b4,new A.r(d,a1,a3),new A.r(a0,a2,a4)],j),w,b6,b2.b,c0,b2.d,!1,b2.c,b2.e,b2.f,b2.w))}}},
dQ(d,e,f,g,h,i){return this.yJ(d,e,f,g,!0,!1,-1,h,i)},
By(d,e,f,g,h,i,j){return this.yJ(d,e,f,g,!0,!1,h,i,j)},
T0(d,e,f,g,h,i,j,k){return this.yJ(d,e,f,g,h,i,-1,j,k)},
bcX(d,e,f,g,h,i,j){return this.yJ(d,e,f,g,h,!1,-1,i,j)},
dL(d,e,f,g,h){return this.yJ(d,e,f,g,!0,!1,-1,0,h)},
aEv(d,e,f,g,h,i){return this.yJ(d,e,f,g,h,!1,-1,0,i)},
KX(d,e,f,g,h,i){return this.yJ(d,e,f,g,!0,!1,h,0,i)},
bcW(d,e,f,g,h,i,j){return this.yJ(d,e,f,g,h,!1,i,0,j)},
fT(a7,a8,a9,b0,b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6=this
a6.Wh()
w=new A.bZg(b0,b1)
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
v.push(new A.lP(C.a([new A.r(u+i*a8,t+h*a8,s+g*a8),new A.r(u+f*a8,t+e*a8,s+d*a8),new A.r(u+a0*a8,t+a1*a8,s+a2*a8),new A.r(u+a3*a8,t+a4*a8,s+a5*a8)],r),new A.r(i+f+a0+a3,h+e+a1+a4,g+d+a2+a5).goT(0),a9,a6.b,b2,a6.d,!1,a6.c,a6.e,a6.f,a6.w))}},
baZ(d,e,f,g){return this.fT(d,e,f,6,10,g)},
fo(d,e,f,g,h){return this.fT(d,e,f,g,h,0.4)},
a6K(d,e,f,g,h,i,j,k){var w,v,u,t,s
this.Wh()
for(w=0;v=w+1,v<d.length;w=v){u=d[v]
t=d[w]
if(new A.r(u.a-t.a,u.b-t.b,u.c-t.c).guN()<0.000001)continue
u=d[w]
t=d[v]
if(g)s=w===0||w===d.length-2
else s=!1
this.T0(u,t,e,f,s,h,j,k)}if(i)for(u=e*0.98,w=1;v=w+1,v<d.length;w=v)this.fT(d[w],u,f,4,k,j)},
jf(d,e,f,g,h,i){return this.a6K(d,e,f,!0,!1,g,h,i)},
aIS(d,e,f,g,h,i,j){return this.a6K(d,e,f,g,!1,h,i,j)},
bj9(d,e,f,g,h){return this.a6K(d,e,f,!0,!1,!0,g,h)},
zj(a4,a5,a6,a7,a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=this
a3.Wh()
a3.bcX(a4,a5,a6,a8,!1,a9,b0)
w=a5.aF(0,a4).goT(0)
v=w.FN(Math.abs(w.b)<0.9?B.e8:B.hy).goT(0)
u=new A.bZl(v,b0,w.FN(v).goT(0))
for(t=[new C.z(a4,w.aI(0,-1)),new C.z(a5,w)],s=a3.a,r=x.o,q=0;q<2;++q){p=t[q]
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
s.push(new A.lP(C.a([new A.r(p+i*a7,m+h*a7,l+j*a7),new A.r(p+f*a6,m+e*a6,l+g*a6),new A.r(p+a0*a6,m+a1*a6,l+d*a6),new A.r(p+a2.a*a7,m+a2.b*a7,l+a2.c*a7)],r),n,a8,a3.b,a9,a3.d,!1,a3.c,a3.e,a3.f,a3.w))}}},
cWr(d,e,f,g,h,i){return this.zj(d,e,f,g,h,i,16)}}
A.x7.prototype={
r2(d){var w,v,u,t=this
t.Q=d
if(!d){w=t.a
v=t.y
u=t.z
t.a=D.k.E(w,v-u,v+u)}t.aT()},
hP(d,e,f,g){var w=this
w.as=f
w.at=d
w.ax=g
w.ay=e
w.aT()},
xb(d,e){return this.hP(d,null,e,null)},
bmZ(d){return this.hP(d,null,null,null)},
apn(d){return this.hP(null,null,d,null)},
apo(d,e,f){return this.hP(d,e,f,null)},
N8(d,e,f,g){var w=this
w.ay=w.ax=w.at=w.as=null
w.d=f
w.c=d
w.a=g
w.b=e
w.aT()},
a6x(d){var w,v,u,t=this
if(!(t.as!=null||t.at!=null||t.ax!=null||t.ay!=null))return
w=1-Math.exp(-d*7)
v=t.as
if(v!=null){u=A.o_(t.d,v,w)
t.d=u
if(u.aF(0,v).guN()<0.02){v=t.as
v.toString
t.d=v
t.as=null}}v=t.at
if(v!=null){u=t.c
u+=(v-u)*w
t.c=u
if(Math.abs(u-v)<0.05){t.c=v
t.at=null}}v=t.ax
if(v!=null){u=t.a
u+=(v-u)*w
t.a=u
if(Math.abs(u-v)<0.003){t.a=v
t.ax=null}}v=t.ay
if(v!=null){u=t.b
u+=(v-u)*w
t.b=u
if(Math.abs(u-v)<0.003){t.b=v
t.ay=null}}t.aT()},
cXG(d,e){var w,v,u,t,s=this,r=e.a,q=e.b,p=Math.min(r,q)*1.15,o=Math.cos(s.a),n=Math.sin(s.a)
q=new A.bIf(s,new A.bIg(Math.cos(s.b),Math.sin(s.b),o,n),(d.a-r/2)/p,-(d.b-q/2)/p)
w=q.$1(0)
r=q.$1(1).c
v=w.c
u=r-v
if(Math.abs(u)<1e-9)return null
t=(0-v)/u
if(t<=0)return null
return q.$1(t)},
beh(d,e,f){var w,v,u,t,s=this,r=e.a,q=e.b,p=Math.min(r,q)*1.15,o=Math.cos(s.a),n=Math.sin(s.a)
q=new A.bI9(s,new A.bIa(Math.cos(s.b),Math.sin(s.b),o,n),(d.a-r/2)/p,-(d.b-q/2)/p)
w=q.$1(0)
r=q.$1(1).b
v=w.b
u=r-v
if(Math.abs(u)<1e-9)return null
t=(f-v)/u
if(t<=0)return null
return q.$1(t)},
cNn(d,e){return this.beh(d,e,0)},
aoZ(d){var w=this
w.at=null
w.c=D.k.E(w.c*d,w.e,w.f)
w.aT()}}
A.bT7.prototype={
cUf(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this.a,f=g.length-1,e=a0.a,d=a0.b
for(;;){if(!(f>=0)){w=0
v=null
break}if(g[f].a.gbB().a.contains(e,d)){u=g[f]
w=u.b
u=u.a.gbB().a.getBounds()
v=new C.a5(u[0],u[1],u[2],u[3])
break}--f}if(w!==0&&v.gdB()<16)return w
for(u=g.length,t=0,s=1/0,r=0;r<g.length;g.length===u||(0,C.M)(g),++r){q=g[r]
p=q.a.gbB().a.getBounds()
o=p[0]
n=p[1]
m=p[2]
p=p[3]
l=Math.abs(m-o)
k=Math.abs(p-n)
if(Math.min(l,k)>22||Math.max(l,k)>150)continue
j=Math.max(Math.max(o-e,e-m),0)
i=Math.max(Math.max(n-d,d-p),0)
h=Math.sqrt(j*j+i*i)
if(h<=18&&h<s){t=q.b
s=h}}return t!==0?t:w}}
A.b5x.prototype={
gMB(d){var w=this.r.a
return w==null?0:w},
cgJ(b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=null,a8=b2.a,a9=b2.b,b0=new C.a5(0,0,0+a8,0+a9)
$.V()
w=C.K()
w.sar(B.c11.aA(0,b0))
b1.aU(b0,w)
v=this.c.a*90
w=b1.a
J.bq(w.save())
w.translate(a8*0.45-v,a9*0.3)
b1.j_(0,-0.45)
for(u=x.O,t=0;t<3;++t){s=C.bN(D.J,a9*(0.2-t*0.05),a8*(1.9-t*0.4))
r=[B.beb,D.aR,D.r5][t]
q=new C.aq(D.U,D.S,D.Y,D.Z,D.W)
q.sar(new C.c0(D.A,0.5,D.x,a7,0,C.a([r.j(0.3-t*0.07),r.j(0)],u),a7,a7).aA(0,s))
p=q.H()
w.drawOval(C.bQ(s),p)
p.delete()}w.restore()
o=new C.eb()
o.d5(11)
n=C.K()
for(q=this.r,t=0;t<170;++t){m=D.k.F(D.k.F(o.aj()*a8*1.5-v*(0.4+o.aj()*0.6),a8)+a8,a8)
l=o.aj()
k=o.aj()
j=q.a
if(j==null)j=0
n.r=D.c.j((0.35+0.65*k)*(0.55+0.45*Math.sin(j*(1+k*2)+t))).gp(0)
p=n.H()
w.drawCircle(m,l*a9*0.85,0.5+k*1.4,p)
p.delete()}l=a8*0.8-v*0.3
j=a9*0.17
i=new C.t(l,j)
h=Math.min(a8,a9)*0.12
g=h*1.5
f=$.V()
e=C.K()
e.sar(new C.c0(D.A,0.5,D.x,a7,0,C.a([D.aR.j(0.28),B.bkP],u),a7,a7).aA(0,C.bX(i,g)))
b1.ae(i,g,e)
J.bq(w.save())
f=new C.aI(f.r,D.ai,a7,a7,C.a([],x.g))
f.D(new C.jC(C.bX(i,h)))
b1.mE(0,f)
f=C.K()
f.sar(B.eo4.aA(0,C.bX(i,h)))
b1.ae(i,h,f)
d=C.K()
d.r=B.bez.gp(0)
for(a0=0;a0<4;++a0){u=B.cYv[a0].a
a1=u[0]
a2=u[1]
a3=u[2]
a4=u[3]
u=q.a
u=C.bN(new C.t(l+(a1*h+Math.sin((u==null?0:u)*0.05)*h*0.08),j+a2*h),a4*h*2,a3*h*2)
p=d.H()
w.drawOval(C.bQ(u),p)
p.delete()}$.V()
a5=C.K()
a5.r=D.c.j(0.55).gp(0)
for(u=h*0.16,a0=0;a0<3;++a0){q=B.cVz[a0]
q=C.bN(new C.t(l+q.a*h,j+q.b*h),u,q.c*h*2)
p=a5.H()
w.drawOval(C.bQ(q),p)
p.delete()}u=i.a9(0,new C.t(h*0.45,h*0.35))
$.V()
q=C.K()
q.r=D.w.j(0.38).gp(0)
b1.ae(u,h,q)
w.restore()
a6=new C.t(a8*0.18-v*0.2,a9*0.12)
w=C.K()
w.r=B.bfL.gp(0)
b1.ae(a6,h*0.28,w)
w=h*0.05
q=a6.a9(0,new C.t(h*0.08,w))
u=C.K()
u.r=B.aeF.gp(0)
b1.ae(q,h*0.07,u)
u=-h
u=a6.a9(0,new C.t(u*0.1,u*0.09))
q=C.K()
q.r=B.aeF.gp(0)
b1.ae(u,w,q)},
a5(i9,j0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1,e2,e3,e4,e5,e6,e7,e8,e9,f0,f1,f2,f3,f4,f5,f6,f7,f8,f9,g0,g1,g2,g3,g4,g5,g6,g7,g8,g9,h0,h1,h2,h3,h4,h5,h6,h7,h8,h9,i0,i1,i2,i3,i4,i5,i6=this,i7=null,i8={}
if(i6.z)i6.cgJ(i9,j0)
else{w=0+j0.a
v=0+j0.b
$.V()
u=C.K()
t=i6.y
s=C.ar(t,D.c,0.06)
s.toString
u.sar(new C.a9(D.b3,D.b6,D.x,C.a([s,t],x.O),i7,i7).aA(0,new C.a5(0,0,w,v)))
i9.aU(new C.a5(0,0,w,v),u)}r=j0.a
q=j0.b
p=Math.min(r,q)*1.15
o=r/2
n=q/2
w=i6.c
m=Math.cos(w.a)
l=Math.sin(w.a)
k=Math.cos(w.b)
j=new A.cqT(m,l,k,Math.sin(w.b))
i=new A.cqU(i6,j)
v=i6.b
h=v.e
if(h!=null){u=w.d
t=w.c*k
g=u.a-t*l
s=h.a
f=s[0]
e=g<f-1||g>s[1]+1||u.c+t*m<s[2]-1
d=e?i.$1(new A.r((f+s[1])/2,40,(s[2]+s[3])/2)).c:0}else{e=!1
d=0}u=x.S
t=x.i
a0=C.T(u,t)
a1=C.T(u,u)
if(e)for(s=v.a,f=s.length,a2=0;a2<s.length;s.length===f||(0,C.M)(s),++a2){a3=s[a2]
if(a3.y!==0||a3.z===0)continue
for(a4=a3.a,a5=a4.length,a6=0,a7=0;a7<a4.length;a4.length===a5||(0,C.M)(a4),++a7)a6+=i.$1(a4[a7]).c
a5=a3.z
a8=a0.h(0,a5)
if(a8==null)a8=0
a0.n(0,a5,a8+a6/a4.length)
a4=a1.h(0,a5)
a1.n(0,a5,(a4==null?0:a4)+1)}s=v.f
a9=s<=0?0:1800+(s-1800)*D.k.E((w.c-200)/600,0,1)
b0=Math.max(Math.max(w.c*2.4+450,a9),w.r)
b1=C.T(u,t)
b2=C.T(u,u)
b3=B.h1q.goT(0)
b4=b3.a9(0,B.t8).goT(0)
b5=C.a([],x.bl)
w=i6.w
b6=v.a
if(!(w==null)){s=C.C(b6,x.fX)
D.d.v(s,w.$1(i6.gMB(0)))
b6=s}for(w=b6.length,s=i6.e,f=x.g,a4=s!==0,a5=b3.a,a8=b3.b,b7=b3.c,b8=x.o,b9=i6.f,c0=b9!=null,c1=r+8,c2=q+8,c3=b4.a,c4=b4.b,c5=b4.c,c6=i6.r,a2=0;a2<b6.length;b6.length===w||(0,C.M)(b6),++a2){a3=b6[a2]
if(c0&&!b9.$1(a3.w))continue
c7=j.$1(a3.b)
c8=a3.a
c9=i.$1(c8[0])
d0=c7.a
d1=c9.a
d2=c7.b
d3=c9.b
d4=c7.c
d5=d0*d1+d2*d3+d4*c9.c>0
if(d5&&!a3.r)continue
if(d5)c7=new A.r(d0*-1,d2*-1,d4*-1)
c9=C.a([],b8)
for(d0=c8.length,a7=0;a7<c8.length;c8.length===d0||(0,C.M)(c8),++a7)c9.push(i.$1(c8[a7]))
d6=A.hTo(c9)
c8=d6.length
if(c8<3)continue
for(d7=0,d8=B.f_,a7=0;a7<c8;++a7){d9=d6[a7]
c9=d9.c
d7+=c9
d8=new A.r(d8.a+d9.a,d8.b+d9.b,d8.c+c9)}c8=d8.c*(1/c8)
c9=!1
if(e)if(a3.y===0){c9=a3.z
if(c9!==0){c8=a0.h(0,c9)
c8.toString
c9=a1.h(0,c9)
c9.toString
c9=c8/c9
c8=c9}c8=c8<d}else c8=c9
else c8=c9
if(c8)continue
for(c8=d6.length,e0=1/0,a7=0;a7<c8;++a7){e1=d6[a7].c
if(e1<e0)e0=e1}if(e0>b0)continue
for(e2=1/0,e3=-1/0,e4=1/0,e5=-1/0,a7=0;a7<c8;++a7){d9=d6[a7]
c9=d9.c
e6=o+d9.a*p/c9
e7=n-d9.b*p/c9
if(e6<e2)e2=e6
if(e6>e3)e3=e6
if(e7<e4)e4=e7
if(e7>e5)e5=e7}if(e3-e2<0.6&&e5-e4<0.6)continue
if(e3<-8||e2>c1||e5<-8||e4>c2){c8=a3.z
if(c8!==0){c9=b1.h(0,c8)
if(c9==null)c9=0
b1.n(0,c8,c9+d7/d6.length-a3.x)
c9=b2.h(0,c8)
b2.n(0,c8,(c9==null?0:c9)+1)}continue}c8=c7.a
c9=c7.b
d0=c7.c
e8=0.56+0.58*Math.max(0,c8*a5+c9*a8+d0*b7)
d1=a3.e
e9=d1>0?Math.pow(Math.max(0,c8*c3+c9*c4+d0*c5),28)*d1:0
f0=a3.c
if(a4&&a3.d===s){c8=c6.a
c8=C.ar(f0,D.b2,0.28+0.14*Math.sin((c8==null?0:c8)*6))
c8.toString
e8+=0.12
f0=c8}c8=255*e9*0.55
f1=D.k.V(D.k.E(f0.gb7(f0)*255*e8+c8,0,255))
f2=D.k.V(D.k.E(f0.gbf()*255*e8+c8,0,255))
f3=D.k.V(D.k.E(f0.gbd(f0)*255*e8+c8,0,255))
c8=$.V()
c9=C.a([],f)
f4=new C.aI(c8.r,D.ai,i7,i7,c9)
for(f5=0;f5<d6.length;++f5){d9=d6[f5]
c8=d9.c
e6=o+d9.a*p/c8
e7=n-d9.b*p/c8
if(f5===0){c8=new C.b0(e6,e7)
c9.push(c8)
d0=f4.f
if(d0!=null)c8.by(d0)
c8=f4.e
if(c8!=null)c8.a.delete()
f4.e=null}else{c8=new C.ap(e6,e7)
c9.push(c8)
d0=f4.f
if(d0!=null)c8.by(d0)
c8=f4.e
if(c8!=null)c8.a.delete()
f4.e=null}}c8=new C.bv()
c9.push(c8)
c9=f4.f
if(c9!=null)c8.by(c9)
c8=f4.e
if(c8!=null)c8.a.delete()
f4.e=null
c8=a3.f
c9=d6.length
d0=a3.d
d1=d0===s&&a4
b5.push(new A.As(a3.y,a3.z,i7,f4,new C.u(c8,(f1&255)/255,(f2&255)/255,(f3&255)/255,D.q),d7/c9-a3.x,d0,c8<0.99,d1))}w=i6.x
f6=v.d
if(w==null)f7=f6
else{s=C.C(f6,x.K)
D.d.v(s,w.$1(i6.gMB(0)))
f7=s}w=x.n
f8=C.a([],w)
f9=C.a([0],w)
i8.a=i8.b=0
g0=f6.length
for(w=x.dx,s=x.dN,a5=x.gp,g1=0;g1<f7.length;++g1){g2=f7[g1]
a8=C.a([],b8)
for(b7=g2.a,a2=0;a2<4;++a2)a8.push(i.$1(b7[a2]))
b9=a8[0]
c0=a8[1]
c3=a8[2]
c4=a8[3]
c5=(b9.c+c0.c+c3.c+c4.c)*0.25
c6=b7[3]
c8=b7[0]
c9=c8.a
d0=c8.b
c8=c8.c
b7=b7[1]
c7=j.$1(new A.r(c6.a-c9,c6.b-d0,c6.c-c8).FN(new A.r(b7.a-c9,b7.b-d0,b7.c-c8)))
if(c7.a*((b9.a+c0.a+c3.a+c4.a)*0.25)+c7.b*((b9.b+c0.b+c3.b+c4.b)*0.25)+c7.c*c5>0&&!g2.x)continue
if(c5>b0)continue
if(D.d.d9(a8,new A.cqM())){b7=C.a([],s)
for(b9=a8.length,a2=0;a2<a8.length;a8.length===b9||(0,C.M)(a8),++a2){d9=a8[a2]
c0=d9.c
b7.push(new C.t(o+d9.a*p/c0,n-d9.b*p/c0))}for(a8=b7.length,g3=1/0,g4=-1/0,g5=1/0,g6=-1/0,a2=0;a2<a8;++a2){g7=b7[a2]
g8=g7.a
if(g8<g3)g3=g8
if(g8>g4)g4=g8
g9=g7.b
if(g9<g5)g5=g9
if(g9>g6)g6=g9}if(g4<-8||g3>c1||g6<-8||g5>c2){a8=g2.w
if(a8!==0){b7=b1.h(0,a8)
b1.n(0,a8,(b7==null?0:b7)+c5-g2.f)
b7=b2.h(0,a8)
b2.n(0,a8,(b7==null?0:b7)+1)}continue}a8=$.V()
b9=C.a([],f)
f4=new C.aI(a8.r,D.ai,i7,i7,b9)
a8=C.C(b7,w)
b9.push(new C.LD(a8,!0))
a8=f4.gbB().a.getBounds()
b9=a8[0]
c0=a8[1]
h0=(a8[2]-b9)*(a8[3]-c0)
f8.push(h0)
b5.push(new A.As(g2.r,g2.w,new A.cqN(i8,i6,g1<g0,h0,f9,g2,b7,f4),f4,D.K,c5-g2.f,g2.b,!1,!1))
continue}h1=new A.cqL(a8)
h2=C.a([],a5)
a8=$.V()
b7=C.a([],f)
f4=new C.aI(a8.r,D.ai,i7,i7,b7)
for(h3=0;h3<6;h3=h4)for(a8=h3/6,h4=h3+1,b9=h4/6,f5=0;f5<8;f5=h5){c0=f5/8
h5=f5+1
c3=h5/8
h6=C.a([h1.$2(c0,a8),h1.$2(c3,a8),h1.$2(c3,b9),h1.$2(c0,b9)],b8)
if(D.d.b3(h6,new A.cqO()))continue
c0=C.a([],s)
for(a2=0;a2<4;++a2){d9=h6[a2]
c3=d9.c
c0.push(new C.t(o+d9.a*p/c3,n-d9.b*p/c3))}h2.push(new C.bj(f5,h3,c0))
c0=C.C(c0,w)
c0=new C.LD(c0,!0)
b7.push(c0)
c3=f4.f
if(c3!=null)c0.by(c3)
c0=f4.e
if(c0!=null)c0.a.delete()
f4.e=null}if(h2.length===0)continue
b5.push(new A.As(g2.r,g2.w,new A.cqP(i6,g2,h2),f4,D.K,c5-g2.f,g2.b,!1,!1))}D.d.aV(f8,new A.cqQ())
f9[0]=f8.length>6?f8[5]:0
h7=C.dP(b1,u,t)
h8=C.dP(b2,u,u)
for(w=b5.length,a2=0;u=b5.length,a2<u;b5.length===w||(0,C.M)(b5),++a2){h9=b5[a2]
u=h9.b
if(u!==0){t=h7.h(0,u)
if(t==null)t=0
h7.n(0,u,t+h9.r)
t=h8.h(0,u)
h8.n(0,u,(t==null?0:t)+1)}}for(f5=0;f5<u;++f5)b5[f5].c=f5
D.d.aV(b5,new A.cqR(new A.cqS(h7,h8)))
w=i6.d.a
D.d.a8(w)
$.V()
i0=C.K()
i0.b=D.S
i1=C.K()
i1.b=D.ac
i1.c=0.8
for(u=b5.length,t=i9.a,a2=0;a2<b5.length;b5.length===u||(0,C.M)(b5),++a2){i2=b5[a2]
s=i2.d
if(s!=null){s.$1(i9)
s=i2.w
if(s!==0)w.push(new C.z(i2.e,s))
continue}s=i2.f
i0.r=s.gp(0)
a5=i2.e
i3=i0.H()
a8=a5.e
t.drawPath((a8==null?a5.e=new C.cv(a5.gbB().a.snapshot()):a8).a,i3)
i3.delete()
if(!i2.x){i1.r=s.gp(0)
i3=i1.H()
s=a5.e
t.drawPath((s==null?a5.e=new C.cv(a5.gbB().a.snapshot()):s).a,i3)
i3.delete()}s=i2.w
if(s!==0)w.push(new C.z(a5,s))}if(a4){$.V()
g7=C.K()
g7.b=D.ac
g7.c=1.4
g7.r=D.c.j(0.35+0.25*Math.sin(i6.gMB(0)*6)).gp(0)
for(u=b5.length,a2=0;a2<b5.length;b5.length===u||(0,C.M)(b5),++a2){i2=b5[a2]
if(i2.y){s=i2.e
i3=g7.H()
a4=s.e
t.drawPath((a4==null?s.e=new C.cv(s.gbB().a.snapshot()):a4).a,i3)
i3.delete()}}}for(v=v.c,u=v.length,a2=0;a2<v.length;v.length===u||(0,C.M)(v),++a2){i4=v[a2]
d9=i.$1(i4.a)
s=d9.c
if(s<1)continue
a4=o+d9.a*p/s
s=n-d9.b*p/s
i5=new C.kz(new C.eH(i4.b,i7,i7,D.cY,i7,i7,i7,i7,i7,i7,new C.F(!0,D.c,i7,i7,i7,i7,11,D.u,i7,i7,i7,i7,i7,i7,i7,i7,i7,i7,i7,i7,i7,i7,i7,i7,i7,i7)),D.a6,D.c5,new C.km(1),i7,i7,i7,i7,D.c4,i7)
i5.eI()
a5=i5.b
a8=a5.c
a5=a5.a.c
f1=C.bz(C.bN(new C.t(a4,s),a5.gbc(a5)+8,a8+14),D.ii)
a8=$.V()
a5=new C.aq(D.U,D.S,D.Y,D.Z,D.W)
a5.r=i4.c.j(0.92).gp(0)
i3=a5.H()
t.drawRRect(C.eL(f1),i3)
i3.delete()
a5=new C.aq(D.U,D.S,D.Y,D.Z,D.W)
a5.b=D.ac
a5.c=1
a5.r=D.ae.gp(0)
i3=a5.H()
t.drawRRect(C.eL(f1),i3)
i3.delete()
a5=i5.b
b7=a5.c
a5=a5.a.c
i5.a5(i9,new C.t(a4-b7/2,s-a5.gbc(a5)/2))
s=i4.d
if(s!==0){a4=C.a([],f)
a4.push(new C.iN(f1))
w.push(new C.z(new C.aI(a8.r,D.ai,i7,i7,a4),s))}}},
av(d){return!0}}
A.cAE.prototype={}
A.As.prototype={}
A.auZ.prototype={
U(){return new A.bqL(new A.bT7(C.a([],x.a6)),new C.eJ(0,$.ax()),D.bE,D.J,null,null)}}
A.bqL.prototype={
a_(){var w,v=this
v.a2()
A.hyy()
w=v.rU(new A.eYc(v))
w.hj(0)
v.d!==$&&C.aP()
v.d=w},
t(){var w=this.d
w===$&&C.c()
w.t()
w=this.f
w.T$=$.ax()
w.P$=0
this.bxg()},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.a,l=m.as==null,k=l?n:new A.eY6(o)
l=l?n:new A.eY7(o,d)
w=m.c
v=m.d
u=m.e
t=m.r
s=o.f
r=m.w
m=m.x
q=C.a([v,s],x.dS)
p=o.a
q=C.a([C.jD(new C.eG(C.b4(n,n,n,new A.b5x(w,v,o.e,u,t,s,r,m,p.y,p.Q,new C.h5(q)),D.fL),n),D.t,n)],x.p)
o.a.toString
return C.nI(D.jz,C.aB(D.cc,new C.an(D.a_,n,D.b1,D.t,q,n),D.y,!1,n,l,k,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new A.eY8(o),new A.eY9(o),n,n,n,n,n,n,n,new A.eYa(o),n,n,n,!1,D.a4),n,n,n,n,n,n,new A.eYb(o),n)}}
A.aN5.prototype={
t(){var w=this,v=w.aa$
if(v!=null)v.a6(0,w.gbE())
w.aa$=null
w.a1()},
aW(){this.b6()
this.b5()
this.bF()}}
A.bba.prototype={}
A.bbv.prototype={}
A.bgy.prototype={}
A.dmg.prototype={}
A.Mq.prototype={
Pj(d){return this.cn0(d)},
cn0(e4){var w=0,v=C.j(x.H),u=this,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1,e2,e3
var $async$Pj=C.e(function(e6,e7){if(e6===1)return C.f(e7,v)
for(;;)switch(w){case 0:if(e4.getUint32(0,!0)!==1179937895)throw C.W("not a glb file")
for(n=x.b,m=12,l=null,k=null;m+8<=e4.byteLength;){j=e4.getUint32(m,!0)
i=e4.getUint32(m+4,!0)
h=J.eZ(D.dF.gaQ(e4),e4.byteOffset+m+8,j)
if(i===1313821514)l=n.a(D.T.aN(0,new C.Gf(!1).DA(h,0,null,!0),null))
if(i===5130562)k=h
m+=8+j}if(l==null||k==null)throw C.W("empty glb")
g=new A.dgt(l,k)
f=J.a4(l)
e=x.j
d=J.kF(e.a(f.h(l,"nodes")),n)
n=d.a
a0=J.a4(n)
a1=a0.gL(n)
a2=x.S
u.b=C.c2(a1,-1,!1,a2)
a3=C.a([],x.s)
for(a4=d.$ti,a5=a4.k("bS<c_.E>"),a6=new C.bS(d,d.gL(0),a5),a7=a4.k("c_.E");a6.C();){a8=a6.d
a8=C.aU(J.q(a8==null?a7.a(a8):a8,"name"))
if(a8==null)a8=""
a3.push(a8.toLowerCase())}u.c=a3
u.d=D.d.bg(a3,new A.bRV())
a3=x.gL
a6=C.a([],a3)
for(a5=new C.bS(d,d.gL(0),a5),a8=x.U,a9=x.t;a5.C();){b0=a5.d
if(b0==null)b0=a7.a(b0)
b1=C.a([],a9)
b0=a8.a(J.q(b0,"children"))
b0=J.aV(b0==null?D.cy:b0)
while(b0.C())b1.push(D.k.O(C.e5(b0.gR(b0))))
a6.push(b1)}u.f=a6
for(a5=u.b,b2=0;b2<a1;++b2)for(a7=a6[b2],b0=a7.length,b3=0;b3<b0;++b3)a5[a7[b3]]=b2
a5=C.a([],a9)
a6=e.a(f.h(l,"scenes"))
a7=C.aK(f.h(l,"scene"))
a7=a7==null?null:D.k.O(a7)
a6=J.aV(e.a(J.q(J.q(a6,a7==null?0:a7),"nodes")))
while(a6.C())a5.push(D.k.O(C.e5(a6.gR(a6))))
u.r=a5
a5=a1*3
u.w=new Float64Array(a5)
u.x=new Float64Array(a1*4)
u.y=new Float64Array(a5)
for(a5=x.Y,a4=a4.y[1],b2=0;b2<a1;++b2){b4=a4.a(a0.h(n,b2))
a6=J.a4(b4)
a7=a8.a(a6.h(b4,"translation"))
b5=a7==null?null:J.kF(a7,a5)
if(b5==null)b5=G.aqf
a7=a8.a(a6.h(b4,"rotation"))
b6=a7==null?null:J.kF(a7,a5)
if(b6==null)b6=B.c3g
a6=a8.a(a6.h(b4,"scale"))
b7=a6==null?null:J.kF(a6,a5)
if(b7==null)b7=B.cgi
for(a6=b2*3,a7=J.a4(b5),b0=J.a4(b7),b8=0;b8<3;++b8){b1=u.w
b9=a6+b8
c0=a7.h(b5,b8)
b1.$flags&2&&C.aj(b1)
b1[b9]=c0
c0=u.y
b1=b0.h(b7,b8)
c0.$flags&2&&C.aj(c0)
c0[b9]=b1}for(a6=b2*4,a7=J.a4(b6),b8=0;b8<4;++b8){b0=u.x
b1=a7.h(b6,b8)
b0.$flags&2&&C.aj(b0)
b0[a6+b8]=b1}}u.Q=C.a([],a3)
u.as=C.a([],x.dh)
n=a8.a(f.h(l,"skins"))
n=J.aV(n==null?D.cy:n)
while(n.C()){b7=n.gR(n)
a0=C.a([],a9)
for(a3=J.a4(b7),a4=J.aV(e.a(a3.h(b7,"joints")));a4.C();)a0.push(D.k.O(C.e5(a4.gR(a4))))
u.Q.push(a0)
c1=a3.h(b7,"inverseBindMatrices")!=null?g.Fq(D.k.O(C.e5(a3.h(b7,"inverseBindMatrices")))).a:null
a3=u.as
a3.push(c1==null?A.hBE(a0.length):c1)}n=a8.a(f.h(l,"animations"))
n=J.aV(n==null?D.cy:n)
a0=u.z
a3=x.G
a4=x.gR
while(n.C()){c2=n.gR(n)
c3=C.a([],a4)
a5=J.a4(c2)
c4=e.a(a5.h(c2,"samplers"))
for(a6=J.aV(e.a(a5.h(c2,"channels"))),a7=J.a4(c4),c5=0;a6.C();){c6=a6.gR(a6)
a9=J.a4(c6)
c7=a3.a(a9.h(c6,"target"))
b0=J.a4(c7)
b1=C.aK(b0.h(c7,"node"))
c8=b1==null?null:D.k.O(b1)
c9=b0.h(c7,"path")
A:{if("translation"===c9){b0=0
break A}if("rotation"===c9){b0=1
break A}if("scale"===c9){b0=2
break A}b0=-1
break A}if(c8==null||b0<0)continue
b7=a3.a(a7.h(c4,D.k.O(C.e5(a9.h(c6,"sampler")))))
a9=J.a4(b7)
d0=g.Fq(D.k.O(C.e5(a9.h(b7,"input")))).a
d1=g.Fq(D.k.O(C.e5(a9.h(b7,"output")))).a
d2=a9.h(b7,"interpolation")
if(d2==null)d2="LINEAR"
d3=b0===1?4:3
a9=J.l9(d2)
if(a9.A(d2,"CUBICSPLINE")){b1=d0.length
d4=new Float64Array(b1*d3)
for(b2=0;b2<b1;++b2)for(b9=b2*d3,c0=(b2*3+1)*d3,b8=0;b8<d3;++b8)d4[b9+b8]=d1[c0+b8]
d1=d4}if(!D.om.gam(d0)){b1=d0.length
if(b1===0)C.b8(C.ft())
c5=Math.max(c5,d0[b1-1])}c3.push(new A.bba(c8,b0,d0,d1,a9.A(d2,"STEP")))}d5=C.aU(a5.h(c2,"name"))
if(d5==null)d5="clip"+a0.a
a0.n(0,d5,new A.bbv(c5,c3))}t=C.T(a2,x.c9)
s=0
n=x.H
e="Could not read a picture of "+u.a+": "
case 2:a0=s
a2=a8.a(f.h(l,"images"))
a2=a2==null?null:J.ad(a2)
if(!(a0<(a2==null?0:a2))){w=3
break}r=g.cPp(s)
if(r==null){w=4
break}try{a0=r
d6=C.h2E(a0)
q=d6==null?null:d6.pN(0,a0,null)
if(q!=null){p=q.cI_(D.cb,4)
a0=s
a2=p.a
a2=a2==null?null:a2.a
if(a2==null)a2=0
a3=p.a
a3=a3==null?null:a3.b
if(a3==null)a3=0
d7=p
a4=d7.gqU()
d8=4!==a4?d7.cHZ(null,4):d7
a4=d8.a
a4=a4==null?null:a4.bm8(d8!==d7,D.b8B)
if(a4==null){a4=d7.a
a4=a4==null?null:J.eV(a4.gaQ(a4))
if(a4==null){a4=d7.a
a4=a4==null?null:a4.gaQ(a4)
if(a4==null)a4=D.aH.gaQ(new Uint8Array(0))
a4=J.eV(a4)}}J.aG(t,a0,new A.bgy(a2,a3,new Uint8Array(C.ch(a4))))}}catch(e5){o=C.ab(e5)
$.am.$1(e+C.w(o))}w=5
return C.b(C.bO(D.bE,null,n),$async$Pj)
case 5:case 4:++s
w=2
break
case 3:e0=u.bR0(l,g,d,t)
w=6
return C.b(C.bO(D.bE,null,n),$async$Pj)
case 6:u.at=u.b7N(e0,5000)
w=7
return C.b(C.bO(D.bE,null,n),$async$Pj)
case 7:u.ax=u.b7N(e0,1100)
n=u.at
n.r=u.b3_(n)
n=u.ax
n.r=u.b3_(n)
e1=u.ayQ(null,0)
e2=u.b5U(u.at,e1)
for(n=e2.length,e3=1/0,s=1;s<n;s+=3)e3=Math.min(e3,e2[s])
u.ay=isFinite(e3)?e3:0
return C.h(null,v)}})
return C.i($async$Pj,v)},
coq(d){var w,v,u
for(w=d;w>=0;){v=this.c
v===$&&C.c()
u=v[w]
if(!C.cU(u,"head",0))v=C.cU(u,"neck",0)
else v=!0
if(v)return 0
if(!C.cU(u,"leftshoulder",0))v=C.cU(u,"leftarm",0)
else v=!0
if(v)return 1
if(!C.cU(u,"rightshoulder",0))v=C.cU(u,"rightarm",0)
else v=!0
if(v)return 2
v=!0
if(!C.cU(u,"leftupleg",0))if(!C.cU(u,"leftleg",0))v=C.cU(u,"leftfoot",0)
if(v)return 3
v=!0
if(!C.cU(u,"rightupleg",0))if(!C.cU(u,"rightleg",0))v=C.cU(u,"rightfoot",0)
if(v)return 4
v=this.b
v===$&&C.c()
w=v[w]}return 5},
b3_(d){var w,v,u,t,s,r,q,p,o,n,m=d.a.length/3|0,l=new Uint8Array(m)
for(w=d.b,v=d.c,u=d.d,t=0;t<m;++t){s=u[t]
if(s!==255){r=this.Q
r===$&&C.c()
r=s>=r.length}else r=!0
if(r){l[t]=5
continue}for(r=t*4,q=0,p=1;p<4;++p)if(v[r+p]>v[r+q])q=p
o=w[r+q]
r=this.Q
r===$&&C.c()
n=r[s]
l[t]=o<n.length?this.coq(n[o]):5}return l},
bR0(e9,f0,f1,f2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1,e2=null,e3="POSITION",e4="JOINTS_0",e5="WEIGHTS_0",e6=J.a4(e9),e7=x.U,e8=e7.a(e6.h(e9,"materials"))
if(e8==null)e8=D.cy
w=x.b
v=J.kF(e8,w)
e8=e7.a(e6.h(e9,"textures"))
u=J.kF(e8==null?D.cy:e8,w)
e8=x.j
t=J.kF(e8.a(e6.h(e9,"meshes")),w)
e6=x.n
s=C.a([],e6)
r=x.t
q=C.a([],r)
p=C.a([],e6)
o=C.a([],r)
n=C.a([],r)
m=C.a([],r)
for(e6=f1.a,r=J.a4(e6),l=t.a,k=J.a4(l),j=t.$ti.y[1],i=x.N,h=x.A,g=x.fF,f=x.Y,e=x.G,d=v.a,a0=J.a4(d),a1=v.$ti.y[1],a2=u.a,a3=J.a4(a2),a4=u.$ti.y[1],a5=this.ch,a6=f1.$ti.y[1],a7=0;a7<r.gL(e6);++a7){a8=a6.a(r.h(e6,a7))
a9=J.a4(a8)
b0=C.aK(a9.h(a8,"mesh"))
b1=b0==null?e2:D.k.O(b0)
if(b1==null)continue
a9=C.aK(a9.h(a8,"skin"))
b2=a9==null?e2:D.k.O(a9)
for(a9=J.kF(e8.a(J.q(j.a(k.h(l,b1)),"primitives")),w),b0=a9.$ti,a9=new C.bS(a9,a9.gL(0),b0.k("bS<c_.E>")),b3=b2==null,b0=b0.k("c_.E");a9.C();){b4=a9.d
if(b4==null)b4=b0.a(b4)
b5=J.a4(b4)
b6=J.H6(e.a(b5.h(b4,"attributes")),i,h)
if(b6.h(0,e3)==null||b5.h(b4,"indices")==null)continue
b7=f0.Fq(D.k.O(C.e5(b6.h(0,e3)))).a
b8=b7.length/3|0
b9=b6.h(0,e4)!=null?f0.Fq(D.k.O(C.e5(b6.h(0,e4)))).a:e2
c0=b6.h(0,e5)!=null?f0.Fq(D.k.O(C.e5(b6.h(0,e5)))).a:e2
c1=C.aK(b5.h(b4,"material"))
c2=c1==null?e2:D.k.O(c1)
c1=g.a(J.q(c2!=null?a1.a(a0.h(d,c2)):D.cz,"pbrMetallicRoughness"))
c3=c1==null?e2:J.H6(c1,i,h)
if(c3==null)c3=D.cz
c1=e7.a(c3.h(0,"baseColorFactor"))
c4=c1==null?e2:J.kF(c1,f)
if(c4==null)c4=B.cgj
c1=g.a(c3.h(0,"baseColorTexture"))
c5=c1==null?e2:J.H6(c1,i,h)
c1=c5==null
c6=C.aK(c1?e2:c5.h(0,"texCoord"))
c7=c6==null?e2:D.k.O(c6)
c8=b6.h(0,"TEXCOORD_"+(c7==null?0:c7))
c9=c8!=null?f0.Fq(D.k.O(C.e5(c8))).a:e2
if(!c1){c1=C.aK(J.q(a4.a(a3.h(a2,D.k.O(C.e5(c5.h(0,"index"))))),"source"))
d0=c1==null?e2:D.k.O(c1)
d1=d0!=null?f2.h(0,d0):e2}else d1=e2
d2=s.length/3|0
D.d.v(s,b7)
for(c1=c0!=null,c6=b9!=null,d3=0;d3<b8;++d3){o.push(b3?255:b2)
for(d4=d3*4,d5=0;d5<4;++d5){q.push(c6?D.k.O(b9[d4+d5]):0)
if(c1)d6=c0[d4+d5]
else d6=d5===0?1:0
p.push(d6)}}d7=f0.Fq(D.k.O(C.e5(b5.h(b4,"indices")))).a
for(b4=d7.length,d8=0;b5=d8+2,b5<b4;d8+=3){d9=D.k.O(d7[d8])
e0=D.k.O(d7[d8+1])
e1=D.k.O(d7[b5])
n.push(d2+d9)
n.push(d2+e0)
n.push(d2+e1)
m.push(this.bP8(d1,c9,d9,e0,e1,c4))}if(b3)a5.push(new C.bj(d2,b8,a7))}}return new A.drO(new Float64Array(C.ch(s)),new Uint16Array(C.ch(q)),new Float64Array(C.ch(p)),new Uint8Array(C.ch(o)),new Int32Array(C.ch(n)),new Int32Array(C.ch(m)))},
bP8(d,e,f,g,h,i){var w,v,u,t,s,r,q,p=J.a4(i),o=p.h(i,0),n=p.h(i,1),m=p.h(i,2)
if(d!=null&&e!=null){w={}
p=f*2
v=g*2
u=h*2
t=(e[p]+e[v]+e[u])/3
s=(e[p+1]+e[v+1]+e[u+1])/3
r=w.a=w.b=w.c=0
q=new A.bRS(w,d)
q.$2(t,s)
for(p=[f,g,h];r<3;++r){v=p[r]*2
q.$2((t+e[v])/2,(s+e[v+1])/2)}o*=w.c/4/255
n*=w.b/4/255
m*=w.a/4/255}p=new A.bRR()
return(p.$1(o)<<16|p.$1(n)<<8|p.$1(m)|4278190080)>>>0},
b7N(d7,d8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4={},d5=d7.a,d6=d5.length/3|0
d4.a=d4.b=d4.c=1/0
for(w=-1/0,v=-1/0,u=-1/0,t=0,s=1/0,r=1/0,q=1/0;t<d6;++t,q=j,r=k,s=l){p=t*3
o=d5[p]
n=d5[p+1]
m=d5[p+2]
l=Math.min(s,o)
d4.c=l
w=Math.max(w,o)
k=Math.min(r,n)
d4.b=k
v=Math.max(v,n)
j=Math.min(q,m)
d4.a=j
u=Math.max(u,m)}i=Math.max(w-s,Math.max(v-r,u-q))
h=new A.bRX(d4,d6,d7)
g=new A.bRZ(d7)
f=i/400
e=i/8
s=x.t
d=C.a([0],s)
a0=h.$2(e,d)
for(t=0;t<9;++t){a1=(f+e)/2
a2=h.$2(a1,d)
if(g.$1(a2)>d8)f=a1
else{a0=a2
e=a1}}for(r=a0.length,a3=0,a4=0;a4<r;++a4)a3=Math.max(a3,a0[a4]+1)
a5=new Float64Array(a3)
a6=new Float64Array(a3)
a7=new Float64Array(a3)
a8=new Int32Array(a3)
for(t=0;t<d6;++t){a9=a0[t]
r=t*3
a5[a9]=a5[a9]+d5[r]
a6[a9]=a6[a9]+d5[r+1]
a7[a9]=a7[a9]+d5[r+2]
a8[a9]=a8[a9]+1}b0=new Int32Array(a3)
D.jU.ht(b0,0,a3,-1)
b1=new Float64Array(a3)
D.om.ht(b1,0,a3,1/0)
for(t=0;t<d6;++t){a9=a0[t]
r=t*3
q=d5[r]
p=a5[a9]
b2=a8[a9]
b3=q-p/b2
b4=d5[r+1]-a6[a9]/b2
b5=d5[r+2]-a7[a9]/b2
b6=b3*b3+b4*b4+b5*b5
if(b6<b1[a9]){b1[a9]=b6
b0[a9]=t}}b7=C.a([],s)
s=x.S
b8=C.T(s,x.dg)
b9=C.T(s,s)
for(s=d7.e,r=s.length,q=d7.f,p=x.n,c0=0;c0<r;c0+=3){c1=a0[s[c0]]
c2=a0[s[c0+1]]
a9=a0[s[c0+2]]
if(c1===c2||c2===a9||c1===a9)continue
c3=A.h9g(c1,c2,a9)
c4=q[D.o.an(c0,3)]
c5=b8.h(0,c3)
b2=c4&255
if(c5==null){b8.n(0,c3,C.a([D.o.aC(c4,16)&255,D.o.aC(c4,8)&255,b2,1],p))
b9.n(0,c3,b7.length/3|0)
b7.push(c1)
b7.push(c2)
b7.push(a9)}else{c5[0]=c5[0]+(D.o.aC(c4,16)&255)
c5[1]=c5[1]+(D.o.aC(c4,8)&255)
c5[2]=c5[2]+b2
c5[3]=c5[3]+1}}s=b7.length
c6=new Int32Array(s/3|0)
b8.bQ(0,new A.bRW(c6,b9))
c7=new Float64Array(a3*3)
s=a3*4
c8=new Uint16Array(s)
c9=new Float64Array(s)
d0=new Uint8Array(a3)
for(s=d7.d,r=d7.b,q=d7.c,a9=0;a9<a3;++a9){d1=b0[a9]
for(p=a9*3,b2=d1*3,c3=0;c3<3;++c3)c7[p+c3]=d5[b2+c3]
for(p=a9*4,b2=d1*4,c3=0;c3<4;++c3){d2=p+c3
d3=b2+c3
c8[d2]=r[d3]
c9[d2]=q[d3]}d0[a9]=s[d1]}return new A.dmg(c7,c8,c9,d0,new Int32Array(C.ch(b7)),c6)},
ayQ(a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=d.b
a0===$&&C.c()
w=d.w
w===$&&C.c()
v=new Float64Array(C.ch(w))
w=d.x
w===$&&C.c()
u=new Float64Array(C.ch(w))
w=d.y
w===$&&C.c()
t=new Float64Array(C.ch(w))
s=a1==null?null:d.z.h(0,a1)
if(s!=null&&s.b>0){w=s.b
r=a2-Math.floor(a2/w)*w
for(w=s.c,q=w.length,p=0;p<w.length;w.length===q||(0,C.M)(w),++p){o=w[p]
n=o.b
if(n===0)n=v
else n=n===1?u:t
A.hBF(o,r,n)}}m=d.CW.c4(0,"world",new A.bRT(a0.length))
l=new A.bRU(d,v,u,t,new Float64Array(16),m)
a0=d.r
a0===$&&C.c()
w=a0.length
p=0
for(;p<a0.length;a0.length===w||(0,C.M)(a0),++p)l.$1(a0[p])
a0=d.Q
a0===$&&C.c()
w=a0.length
k=0
p=0
for(;p<w;++p)k+=a0[p].length
a0=d.ch
w=a0.length
j=new Float64Array((k+w)*16)
for(i=0,h=0;w=d.Q,h<w.length;++h){g=w[h]
for(f=0;f<g.length;++f){w=g[f]
q=d.as
q===$&&C.c()
A.h9h(m,w*16,q[h],f*16,j,i)
i+=16}}for(w=a0.length,p=0;p<a0.length;a0.length===w||(0,C.M)(a0),++p,i=e){e=i+16
D.om.ek(j,i,e,m,a0[p].c*16)}return j},
b5U(b8,b9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=b8.a,b4=b3.length/3|0,b5=new Float64Array(b4*3),b6=C.a([],x.t),b7=this.Q
b7===$&&C.c()
w=b7.length
v=0
u=0
for(;u<b7.length;b7.length===w||(0,C.M)(b7),++u){t=b7[u]
b6.push(v)
v+=t.length*16}for(b7=b8.b,w=b8.c,s=b8.d,r=this.ch.length!==0,q=v+4,p=v+8,o=v+12,n=v+1,m=v+5,l=v+9,k=v+13,j=v+2,i=v+6,h=v+10,g=v+14,f=0;f<b4;++f){e=f*3
d=b3[e]
a0=e+1
a1=b3[a0]
a2=e+2
a3=b3[a2]
a4=s[f]
if(a4===255)if(r){a5=b9[v]*d+b9[q]*a1+b9[p]*a3+b9[o]
a6=b9[n]*d+b9[m]*a1+b9[l]*a3+b9[k]
a7=b9[j]*d+b9[i]*a1+b9[h]*a3+b9[g]}else{a7=a3
a6=a1
a5=d}else for(a8=f*4,a5=0,a6=0,a7=0,a9=0;a9<4;++a9){b0=a8+a9
b1=w[b0]
if(b1===0)continue
b2=b6[a4]+b7[b0]*16
a5+=b1*(b9[b2]*d+b9[b2+4]*a1+b9[b2+8]*a3+b9[b2+12])
a6+=b1*(b9[b2+1]*d+b9[b2+5]*a1+b9[b2+9]*a3+b9[b2+13])
a7+=b1*(b9[b2+2]*d+b9[b2+6]*a1+b9[b2+10]*a3+b9[b2+14])}b5[e]=a5
b5[a0]=a6
b5[a2]=a7}return b5},
cHo(d,e){var w,v,u=new A.bS1(this)
if(d){w=u.$1("run")
v=w==null?u.$1("walk"):w}else if(e){w=u.$1("walk")
v=w}else{w=u.$1("idle")
if(w==null)w=u.$1("samba")
v=w}if(v!=null)return v
u=u.$1("samba")
if(u==null){u=this.z
u=new C.cu(u,C.a6(u).k("cu<1>")).dM(0,new A.bS_(),new A.bS0(this))}return u},
cUv(a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=this,a6="world",a7={}
if(a8){w=a5.at
w===$&&C.c()
v=w}else{w=a5.ax
w===$&&C.c()
v=w}u=a5.cHo(b1,b5)
w=a5.z.h(0,u)
t=w==null?null:w.b
if(t==null)t=1
if(b5&&b4!=null&&D.a.q(u.toLowerCase(),"walk"))s=b4/50*t
else{w=B.duG.h(0,a5.a)
s=b2*(w==null?1:w)}w=a5.e
r=w.h(0,u)
if(r==null){a5.ayQ(u,0)
if(a5.d>=0){q=a5.CW
r=new C.z(q.h(0,a6)[a5.d*16+12],q.h(0,a6)[a5.d*16+14])}else r=D.zN
w.n(0,u,r)}p=a5.ayQ(u,s)
a7.a=a7.b=0
if(a5.d>=0){w=a5.CW
a7.b=w.h(0,a6)[a5.d*16+12]-r.a
a7.a=w.h(0,a6)[a5.d*16+14]-r.b}o=a5.b5U(v,p)
w=B.dvh.h(0,a5.a)
n=b7+(w==null?0:w)
m=C.im(v.a.length/3|0,new A.bS3(a7,a5,o,36,b0,Math.cos(n),Math.sin(n),b6,b8),!0,x.Q)
w=C.a([],x.t)
for(l=0;l<6;++l){q=$.dQ+1
$.dQ=q
w.push(q)}k=C.a([],x.z)
for(q=v.e,j=q.length,i=v.f,h=b3==null,g=x.o,f=0;f<j;f+=3){e=m[q[f]]
d=m[q[f+1]]
a0=m[q[f+2]]
a1=e.a
a2=e.b
a3=e.c
a4=new A.r(d.a-a1,d.b-a2,d.c-a3).FN(new A.r(a0.a-a1,a0.b-a2,a0.c-a3)).goT(0)
a3=C.a([e,d,a0],g)
a1=h?C.b1(i[D.o.an(f,3)]):A.i0Y(i[D.o.an(f,3)],b3)
a2=v.r
a2===$&&C.c()
k.push(new A.lP(a3,a4,a1,a9,0.08,1,!1,0,0,2,w[a2[q[f]]]))}return k}}
A.drO.prototype={}
A.dgt.prototype={
cPp(d){var w,v,u=this.a,t=J.a4(u),s=x.j,r=x.G,q=C.aK(J.q(r.a(J.q(s.a(t.h(u,"images")),d)),"bufferView")),p=q==null?null:D.k.O(q)
if(p==null)return null
w=r.a(J.q(s.a(t.h(u,"bufferViews")),p))
u=J.a4(w)
t=C.aK(u.h(w,"byteOffset"))
v=t==null?null:D.k.O(t)
if(v==null)v=0
return C.Ae(this.b,v,v+D.k.O(C.e5(u.h(w,"byteLength"))))},
Fq(a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=null,g="byteOffset",f=this.a,e=J.a4(f),d=x.j,a0=x.G,a1=a0.a(J.q(d.a(e.h(f,"accessors")),a5)),a2=J.a4(a1),a3=D.k.O(C.e5(a2.h(a1,"count"))),a4=a2.h(a1,"type")
A:{w=1
if("SCALAR"===a4)break A
if("VEC2"===a4){w=2
break A}if("VEC3"===a4){w=3
break A}if("VEC4"===a4){w=4
break A}if("MAT2"===a4){w=4
break A}if("MAT3"===a4){w=9
break A}if("MAT4"===a4){w=16
break A}break A}v=D.k.O(C.e5(a2.h(a1,"componentType")))
B:{if(5120===v||5121===v){u=1
break B}if(5122===v||5123===v){u=2
break B}u=4
break B}t=J.A(a2.h(a1,"normalized"),!0)
s=new Float64Array(a3*w)
r=C.aK(a2.h(a1,"bufferView"))
q=r==null?h:D.k.O(r)
if(q==null)return new C.z(s,w)
p=a0.a(J.q(d.a(e.h(f,"bufferViews")),q))
f=J.a4(p)
e=C.aK(f.h(p,g))
e=e==null?h:D.k.O(e)
if(e==null)e=0
a2=C.aK(a2.h(a1,g))
d=a2==null?h:D.k.O(a2)
o=e+(d==null?0:d)
f=C.aK(f.h(p,"byteStride"))
n=f==null?h:D.k.O(f)
if(n==null)n=w*u
m=C.aSu(this.b)
for(l=0;l<a3;++l)for(f=l*w,e=o+l*n,k=0;k<w;++k){j=e+k*u
switch(v){case 5120:i=m.getInt8(j)
if(t)i=Math.max(i/127,-1)
break
case 5121:i=m.getUint8(j)
if(t)i/=255
break
case 5122:i=m.getInt16(j,!0)
if(t)i=Math.max(i/32767,-1)
break
case 5123:i=m.getUint16(j,!0)
if(t)i/=65535
break
case 5125:i=m.getUint32(j,!0)
break
default:i=m.getFloat32(j,!0)}s[f+k]=i}return new C.z(s,w)}}
A.lz.prototype={}
A.r5.prototype={
gDj(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=1e9,d=-1e9,a0=this.w,a1=a0.length
if(a1===0){a0=this.e
return new C.cw([-a0/2,a0/2,-12,0])}for(w=this.e,v=-w,u=d,t=e,s=u,r=t,q=0;q<a1;++q){p=a0[q]
for(o=p.e,o=[v*o/2,w*o/2],n=p.c,m=p.a,l=p.b,k=0;k<2;++k){j=o[k]
for(i=[-12,0],h=0;h<2;++h){g=A.vs(new A.r(j,0,i[h]),n)
f=g.a+m
r=Math.min(r,f)
s=Math.max(s,f)
f=g.c+l
t=Math.min(t,f)
u=Math.max(u,f)}}}return new C.cw([r,s,t,u])},
gaoH(){return this.gDj().a[1]-this.gDj().a[0]},
gGH(){var w=this.w
return w.length===0?this.f:new C.N(w,new A.bGw(this),C.S(w).k("N<1,L>")).f9(0,D.pB)},
gbda(){return this.gDj().a[3]-this.gDj().a[2]},
ga43(d){return this.w.length===0?0:(this.gDj().a[0]+this.gDj().a[1])/2},
ga44(){return this.w.length===0?0:(this.gDj().a[2]+this.gDj().a[3])/2},
ged(d){var w=this
return Math.max(Math.max(w.gaoH(),w.gbda()),Math.max(w.gGH()*1.3,w.x))*w.y}}
A.Hg.prototype={}
A.aSb.prototype={
bix(){var w=this
w.a=!0
w.b="NEW GLOBAL MOVEMENT FOR YOUTH"
w.c="Videos, slides, blogs and books."
w.d="ngmy.org"
w.e=0
w.x=w.w=w.r=w.f=null},
ag(){var w,v=this,u=C.T(x.N,x.A)
u.n(0,"custom",!v.a)
u.n(0,"headline",v.b)
u.n(0,"subtitle",v.c)
u.n(0,"footer",v.d)
u.n(0,"scheme",v.e)
w=v.f
if(w!=null)u.n(0,"logo",D.cI.gcs().aM(w))
w=v.r
if(w!=null)u.n(0,"pic",D.cI.gcs().aM(w))
return u},
TD(d){var w,v=this,u=J.a4(d)
v.a=!J.A(u.h(d,"custom"),!0)
w=C.aU(u.h(d,"headline"))
v.b=w==null?"NEW GLOBAL MOVEMENT FOR YOUTH":w
w=C.aU(u.h(d,"subtitle"))
v.c=w==null?"Videos, slides, blogs and books.":w
w=C.aU(u.h(d,"footer"))
v.d=w==null?"ngmy.org":w
w=C.aK(u.h(d,"scheme"))
w=w==null?null:D.k.O(w)
v.e=D.o.E(w==null?0:w,0,5)
v.f=typeof u.h(d,"logo")=="string"?D.cF.aM(C.cP(u.h(d,"logo"))):null
v.r=typeof u.h(d,"pic")=="string"?D.cF.aM(C.cP(u.h(d,"pic"))):null}}
A.bGu.prototype={
cWc(){var w,v,u
for(w=this.b,v=w.length,u=0;u<w.length;w.length===v||(0,C.M)(w),++u)w[u].bix()},
ag(){var w,v,u,t=this.a,s=C.a([],x.c7)
for(w=this.b,v=w.length,u=0;u<w.length;w.length===v||(0,C.M)(w),++u)s.push(w[u].ag())
return C.G(["template",t,"signs",s],x.N,x.A)},
TD(d){var w,v,u,t,s,r,q
this.a=D.d.b3(B.a2D,new A.bGv(d))?C.cP(J.q(d,"template")):"highway"
w=J.q(d,"signs")
if(x.j.b(w)){v=J.a4(w)
u=x.G
t=this.b
s=x.N
r=x.A
q=0
for(;;){if(!(q<6&&q<v.gL(w)))break
if(u.b(v.h(w,q)))t[q].TD(C.a2(u.a(v.h(w,q)),s,r));++q}}else this.b[0].TD(d)}}
A.hl.prototype={}
A.aok.prototype={
U(){var w=A.hye()
$.yQ()
return new A.aol(w,new C.y6())}}
A.aol.prototype={
gij(){var w,v=this.e
if(v===$){w=new A.x7(0.5,0.25,420,B.fQW,$.ax())
w.e=30
w.f=5000
w.w=0.02
w.x=1.4
w.r2(!0)
this.e!==$&&C.bF()
this.e=w
v=w}return v},
gawU(){var w=this.r
return w===$?this.r=new A.a4X(this.gc5k(),W.Bl):w},
gzr(){return D.d.h_(B.a2D,new A.c2i(this))},
a_(){var w=this
w.a2()
w.f=A.h2h(w.gzr(),w.d)
w.ab5()
A.hdS().bL(new A.c2g(w),x.P)
w.Pn()},
t(){this.gawU().bR(0)
var w=this.gij()
w.T$=$.ax()
w.P$=0
this.a1()},
ab5(){var w=this.gzr(),v=this.gij(),u=w.ga43(0),t=w.gGH(),s=w.ga44()
v.N8(w.ged(0)*1.9,0.22,new A.r(u,w.r+t/2,s),0.45)},
Pn(){var w=0,v=C.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i
var $async$Pn=C.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return C.b(C.az(),$async$Pn)
case 7:q=e
p=C.aU(J.q(q.a,"ngmy_billboard_studio_v1"))
if(p==null){w=1
break}n=r.d
n.TD(x.b.a(D.T.aN(0,p,null)))
n=n.b,m=n.length,l=0
case 8:if(!(l<n.length)){w=10
break}o=n[l]
i=o
w=11
return C.b(A.afC(o.f),$async$Pn)
case 11:i.w=e
i=o
w=12
return C.b(A.afC(o.r),$async$Pn)
case 12:i.x=e
case 9:n.length===m||(0,C.M)(n),++l
w=8
break
case 10:if(r.c==null){w=1
break}r.m(new A.c23(r))
t=2
w=6
break
case 4:t=3
j=s.pop()
w=6
break
case 3:w=2
break
case 6:case 1:return C.h(u,v)
case 2:return C.f(s.at(-1),v)}})
return C.i($async$Pn,v)},
IL(){var w=0,v=C.j(x.H),u=1,t=[],s=this,r,q,p
var $async$IL=C.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
w=6
return C.b(C.az(),$async$IL)
case 6:r=e
w=7
return C.b(r.aq("String","ngmy_billboard_studio_v1",D.T.ao(s.d.ag(),null)),$async$IL)
case 7:u=1
w=5
break
case 3:u=2
p=t.pop()
w=5
break
case 2:w=1
break
case 5:return C.h(null,v)
case 1:return C.f(t.at(-1),v)}})
return C.i($async$IL,v)},
c5l(){var w,v,u,t,s,r,q,p=this
if(!(p.x>=0)||p.c==null)return
w=p.w.gik()/1000
if(w>=30){p.aB5(!0)
return}v=A.i2e(p.gzr(),w)
u=v.b
t=u.aF(0,v.a)
s=Math.max(8,t.guN())
r=p.gij()
q=Math.atan2(t.a,-t.c)
r.N8(s,Math.asin(D.k.E(-t.b/s,-1,1)),u,q)
p.m(new A.c29(p,w))},
bpF(){var w,v=this
v.gij().w=-1.4
w=v.w
w.jP(0)
w.hj(0)
v.m(new A.c2h(v))
v.gawU().hj(0)},
aB5(d){var w,v=this
v.gawU().bR(0)
w=v.w
if(w.b==null)w.b=$.a9i.$0()
v.gij().w=0.02
v.m(new A.c26(v,d))
v.ab5()},
cxO(){return this.aB5(!1)},
ctL(d){var w=this
w.d.a=d
w.m(new A.c25(w))
w.ab5()
w.IL()},
Zk(d){this.d.b[d].a=!1
this.m(new A.c1E())
this.IL()},
IK(d,e){return this.cjr(d,e)},
cjr(d,e){var w=0,v=C.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k
var $async$IK=C.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
m=e?400:900
w=7
return C.b(new C.hV().kW(85,m,D.eJ),$async$IK)
case 7:q=g
if(q==null){w=1
break}w=8
return C.b(q.fj(),$async$IK)
case 8:p=g
w=9
return C.b(A.afC(p),$async$IK)
case 9:o=g
if(o==null){w=1
break}n=r.d.b[d]
if(e){n.f=p
n.w=o}else{n.r=p
n.x=o}r.Zk(d)
t=2
w=6
break
case 4:t=3
k=s.pop()
if(r.c!=null)r.m(new A.c24(r))
w=6
break
case 3:w=2
break
case 6:case 1:return C.h(u,v)
case 2:return C.f(s.at(-1),v)}})
return C.i($async$IK,v)},
czR(){var w=this.c
w.toString
C.bT(D.au,null,new A.c28(this),w,!0,!0,!0,D.jZ,!1,!1,x.H)},
bNu(){var w,v,u,t,s,r,q=this,p={}
p.a=0
w=q.d.b[0]
v=w.b
u=$.ax()
t=new C.as(new C.bb(v,D.b4,D.aO),u)
v=w.c
s=new C.as(new C.bb(v,D.b4,D.aO),u)
w=w.d
r=new C.as(new C.bb(w,D.b4,D.aO),u)
w=q.c
w.toString
C.bT(D.au,null,new A.c21(p,q,new A.c22(p,q,t,s,r),t,s,r),w,!0,!0,!0,D.jZ,!1,!1,x.H)},
awW(d,e,f,g){var w=null,v=g?f.j(0.3):D.w.j(0.6),u=C.m(20),t=C.I(f,D.r,1)
return C.aB(w,C.p(w,C.d(d,w,w,w,w,w,w,C.l(w,w,f,w,w,w,w,w,w,w,w,13,w,w,D.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),D.f,w,w,new C.o(v,w,t,u,w,w,D.n),w,w,w,w,D.iQ,w,w,w),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,e,w,w,w,w,w,w,!1,D.a4)},
awV(d,e,f){return this.awW(d,e,f,!1)},
c5j(d,e,f){return this.awW(d,e,D.aR,f)},
B(d){var w,v,u,t,s,r=this,q=null,p=C.aH(d,q,x.w).w.r,o=r.f
o===$&&C.c()
w=x.p
o=C.a([C.bU(0,A.fZn(E.B3,r.gij(),q,q,0,q,q,q,o,!0),0,0,0)],w)
if(!(r.x>=0))o.push(C.ao(q,C.B(C.a([C.aB(q,C.p(q,D.a1D,D.f,q,q,new C.o(D.w.j(0.55),q,C.I(D.bU,D.r,1),q,q,q,D.a5),q,40,q,q,q,q,q,40),D.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new A.c2c(d),q,q,q,q,q,q,!1,D.a4),D.as,C.E(C.d("Billboard studio \xb7 "+r.gzr().c,q,q,q,q,q,q,B.f9H,q,q,q),1)],w),D.m,q,D.e,D.j,0,q,q),q,q,8,8,p.b+8,q))
if(r.x>=0&&r.y)o.push(C.bU(0,C.aB(D.cc,q,D.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new A.c2d(r),q,q,q,q,q,q,!1,D.a4),0,0,0))
if(!(r.x>=0&&r.y)){v=C.a([],w)
if(r.z.length!==0&&!(r.x>=0)){u=D.dY.j(0.95)
t=C.m(12)
s=C.I(D.bm,D.r,1)
v.push(C.p(q,C.d(r.z,q,q,q,q,q,q,D.Ua,q,q,q),D.f,q,q,new C.o(u,q,s,t,q,q,D.n),q,q,q,D.ct,D.bT,q,q,q))}w=C.a([],w)
if(!(r.x>=0))w.push(r.awV("\ud83e\udea7 Choose billboard",r.gczQ(),F.fv))
if(!(r.x>=0))w.push(r.awV("\u270f\ufe0f Edit",r.gbNt(),D.bm))
if(r.x>=0)w.push(r.awW("\u23f9 Stop the drone",r.gcxN(),D.cs,!0))
if(r.x>=0)w.push(r.awV("\ud83d\udc41 Hide everything",new A.c2e(r),D.aM))
if(!(r.x>=0))w.push(r.c5j("\ud83c\udfac 30 second drone shot",r.gbpE(),!0))
v.push(C.bW(D.fA,w,D.bq,8,8))
o.push(C.ao(p.d+12,C.x(v,D.m,q,D.e,D.P,0,D.p),q,q,10,10,q,q))}return C.c5(q,D.w,new C.an(D.a_,q,D.aa,D.t,o,q),q,!1,!1,q,q)}}
A.FM.prototype={}
A.z5.prototype={}
A.xc.prototype={}
A.aTk.prototype={}
A.a45.prototype={}
A.ak1.prototype={}
A.bKR.prototype={
by0(d,e){var w,v,u,t,s,r,q,p=this,o=x._,n=C.a([],o)
for(w=p.a.x,v=w.length,u=0;u<w.length;w.length===v||(0,C.M)(w),++u){t=w[u]
s=t.b
if(s==="house2"||s==="bighouse")n.push(t)}p.b!==$&&C.aP()
p.b=n
o=C.a([],o)
for(n=w.length,u=0;u<w.length;w.length===n||(0,C.M)(w),++u){t=w[u]
if(D.d.b3(B.QD,new A.bKT(t)))o.push(t)}p.c!==$&&C.aP()
p.c=o
for(o=p.f,r=0;r<5;++r){q=p.cmL()
n=B.dqB[r]
w=B.df9[r]
o.push(new A.aTk(n,w,new A.rF(B.awi[r],B.LD,w,B.L6,B.dkb[r]),58+r*7.5,q.a,q.b,B.ayy))}p.Uq(0)},
cmL(){var w,v=this.c
v===$&&C.c()
w=v.length
if(w===0)return B.eoW
return A.yG(v[this.d.au(w)])},
cUH(d){var w,v,u,t,s,r,q,p=this,o=C.a([],x._),n=p.c
n===$&&C.c()
w=n.length
v=0
for(;v<n.length;n.length===w||(0,C.M)(n),++v){u=n[v]
t=u.b
if(t==="store"||t==="shop"||t==="gasstation")o.push(u)}if(o.length===0)return
D.d.aV(o,new A.bKV(p,d))
for(n=p.e,s=0,v=0;v<2;++v){r=B.diE[v]
q=o[D.o.F(s,o.length)];++s;++p.r
w=new A.xc(r,q,d,r==="medicine"?30:24)
w.w=!0
D.d.c8(n,0,w)}},
Uq(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=j.d,h=j.e,g=x._,f=C.S(h).k("Z<1>"),e=0
for(;;){if(new C.Z(h,new A.bKW(),f).gL(0)<7){w=e+1
v=e<30
e=w}else v=!1
if(!v)break
u=B.QD[i.au(5)]
v=C.a([],g)
t=j.c
t===$&&C.c()
s=t.length
r=u.d
q=0
for(;q<t.length;t.length===s||(0,C.M)(t),++q){p=t[q]
if(r.q(0,p.b))v.push(p)}t=v.length
if(t!==0){s=j.b
s===$&&C.c()
s=s.length===0}else s=!0
if(s)return
o=v[i.au(t)]
v=j.b
v===$&&C.c()
n=v[i.au(v.length)]
m=A.yG(o)
l=A.yG(n)
k=Math.sqrt(Math.pow(m.a-l.a,2)+Math.pow(m.b-l.b,2));++j.r
h.push(new A.xc(u.a,o,n,6+D.o.E(D.k.V(k/70),0,22)))}},
cWE(d,e,f){if(this.x!=null||e.f!=null||!D.d.q(this.e,e))return!1
e.f=-1
e.x=f
this.x=e
return!0},
a3(d){var w=this.x
if(w==null)return
w.f=null
w.r=!1
this.x=null},
ga6v(d){var w=this.x
if(w==null)return null
return A.yG(w.r?w.d:w.c)},
bjr(d,e,f){var w,v,u,t,s,r,q,p=this,o=p.x
if(o==null)return null
if(f-o.x>360){p.a3(0)
return B.bsb}w=p.ga6v(0)
if(Math.sqrt(Math.pow(w.a-d,2)+Math.pow(w.b-e,2))>58)return null
if(!o.r){o.r=!0
v=o.b
u=A.KZ(v)
v=A.KZ(v)
t=B.ht.h(0,o.c.b).a
s=o.w?"hospital":"house"
return new A.ak1("pickup",u.b+" You picked up the "+v.c.toLowerCase()+" at the "+t.toLowerCase()+". Now take it to the "+s+".",0)}D.d.W(p.e,o)
p.x=null;++p.z;++p.y
v=p.Q
u=o.e
p.Q=v+u
p.Uq(f)
r=A.KZ(o.b).b+" Delivered! +"+u+" points."
if(p.y>=8){p.Q+=40
r+=" You won the race with 8 deliveries: +40 points!"
p.aYa()
q=40}else q=0
v=q>0?"won":"delivered"
return new A.ak1(v,r,u+q)},
aYa(){var w,v,u;++this.as
this.y=0
for(w=this.f,v=w.length,u=0;u<v;++u)w[u].r=0},
Fw(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
for(w=j.f,v=w.length,u=j.e,t=e+2,s=j.d,r=x.C,q=null,p=0;p<w.length;w.length===v||(0,C.M)(w),++p){o=w[p]
n=o.ch
if(n===0){if(e<o.CW)continue
n=C.a([],r)
for(m=u.length,l=0;l<u.length;u.length===m||(0,C.M)(u),++l){k=u[l]
if(k.f==null)n.push(k)}if(n.length===0)continue
D.d.aV(n,new A.bKS(j,o))
k=n[Math.min(n.length-1,s.au(3))]
k.f=D.d.cD(w,o)
o.y=k
j.b6r(o,e,1,k.c)}else if(e>=o.Q){if(!o.db){o.e=o.ax
o.f=o.ay
o.db=!0
o.dx=e+(n===1?1.6:1.3)
continue}if(e<o.dx)continue
o.db=!1
m=o.y
m.toString
if(n===1)j.b6r(o,e,2,m.d)
else{D.d.W(u,m)
o.y=null
o.ch=0;++o.w;++o.r
o.x=o.x+m.e
o.CW=t+s.aj()*5
j.Uq(e)
if(o.r>=8){q=o.a+" won the race with 8 deliveries! A new round starts."
j.aYa()}}}}return q},
aYY(d,e){return Math.sqrt(Math.pow(e.a-d.e,2)+Math.pow(e.b-d.f,2))},
b6r(d,e,f,g){var w,v,u,t=this,s=A.yG(g),r=B.ht.h(0,g.b),q=g.e*3.141592653589793/2,p=r.d/2-2,o=g.c+Math.sin(q)*p,n=g.d+Math.cos(q)*p
d.ch=f
d.ax=o
d.ay=n
w=t.w
if(w===$){v=new A.bIX(t.a)
v.aYZ()
t.w!==$&&C.bF()
t.w=v
w=v}u=C.C(w.aon(new C.z(d.e,d.f),s),x.J)
u.push(new C.z(o,n))
d.cx=u
o=A.icF(u)
d.cy=o
d.z=e
d.Q=e+Math.max(1,o/d.d)},
alY(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=C.a([],x.B)
for(w=this.f,v=w.length,u=d*2.2,t=0;t<w.length;w.length===v||(0,C.M)(w),++t){s=w[t]
r=s.e
q=s.f
if(s.db)continue
if(s.ch!==0&&d>=s.z&&s.cx.length>1){p=s.z
o=D.k.E((d-p)/Math.max(0.01,s.Q-p),0,1)
n=A.icL(s.cx,s.cy*o)
r=n.a
q=n.b
m=n.c
l=o<1}else{m=0
l=!1}k.push(new A.a45(r,q,m,u+s.d,l,s.ch===2,s.c,s.b))}return k},
cWC(){var w,v,u,t,s=C.a([new C.bj("You",this.y,this.Q)],x.aJ)
for(w=this.f,v=w.length,u=0;u<w.length;w.length===v||(0,C.M)(w),++u){t=w[u]
s.push(new C.bj(t.a,t.r,t.x))}D.d.aV(s,new A.bKX())
return s},
qV(d,e,f){var w,v,u,t,s=C.a([],x.C)
for(w=this.e,v=w.length,u=0;u<w.length;w.length===v||(0,C.M)(w),++u){t=w[u]
if(t.f==null)s.push(t)}D.d.aV(s,new A.bKU(this,e,f))
return s},
aa4(d,e,f){return Math.sqrt(Math.pow(f.a-d,2)+Math.pow(f.b-e,2))}}
A.bIX.prototype={
aZ1(d){return-this.a.gev(0)/2+8+d*24},
aYZ(){var w,v,u,t,s=this,r=s.a
s.d=A.hrJ(r,null)
s.b=D.k.dk((r.gev(0)-16)/24)+1
w=D.k.dk((r.ghn(0)-10- -750)/24)+1
s.c=w
s.e=C.c2(s.b*w,!1,!1,x.R)
for(v=0;v<s.b;++v)for(w=v*24,u=0;t=s.c,u<t;++u)s.e[v*t+u]=s.abX(-r.gev(0)/2+8+w,-750+u*24)
s.f=A.h7N(r)},
abX(d,e){var w,v,u=this.a
if(d<-u.gev(0)/2+12||d>u.gev(0)/2-12||e<-756||e>u.ghn(0)-14)return!0
u=this.d
u===$&&C.c()
w=u.length
v=0
for(;v<w;++v)if(u[v].aG1(d,e,14))return!0
return!1},
aZ_(d,e,f){var w,v,u=e.a,t=f.a-u,s=e.b,r=f.b-s,q=Math.max(1,D.k.dk(Math.sqrt(Math.pow(t,2)+Math.pow(r,2))/8))
for(w=0;w<=q;++w){v=w/q
if(this.abX(u+t*v,s+r*v))return!1}return!0},
aZ0(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=d.a,h=j.a,g=D.k.V((i+h.gev(0)/2-8)/24),f=j.b
f===$&&C.c()
w=D.o.E(g,0,f-1)
f=d.b
g=D.k.V((f- -750)/24)
v=j.c
v===$&&C.c()
u=D.o.E(g,0,v-1)
for(t=0;t<24;++t){for(s=-t,r=s,q=null,p=1/0;r<=t;++r)for(o=w+r,g=Math.abs(r),n=s;n<=t;++n){if(Math.max(g,Math.abs(n))!==t)continue
m=u+n
v=!0
if(o>=0)if(m>=0)if(!(o>=j.b)){l=j.c
if(!(m>=l)){v=j.e
v===$&&C.c()
l=v[o*l+m]
v=l}}if(v)continue
k=Math.pow(-h.gev(0)/2+8+o*24-i,2)+Math.pow(-750+m*24-f,2)
if(k<p){q=new C.z(o,m)
p=k}}if(q!=null)return q}return null},
aon(d,e){var w,v,u,t,s,r,q,p,o,n,m=this
if(A.h7N(m.a)!==m.f)m.aYZ()
w=m.aZ0(d)
v=m.aZ0(e)
if(w==null||v==null)return C.a([d,e],x.f)
u=new C.z(m.aZ1(w.a),-750+w.b*24)
t=new C.z(m.aZ1(v.a),-750+v.b*24)
s=x.f
r=m.abX(d.a,d.b)?C.a([d],s):C.a([],s)
q=m.abX(e.a,e.b)?C.a([e],s):C.a([],s)
p=C.a([],s)
o=r.length===0?d:u
n=q.length===0?e:t
if(m.aZ_(0,o,n))D.d.v(p,C.a([o,n],s))
else D.d.v(p,m.csx(w,v,o,n))
s=C.C(r,x.J)
D.d.v(s,p)
D.d.v(s,q)
return s},
csx(a9,b0,b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this,a3=x.t,a4=C.a([],a3),a5=new A.dgW(a4,C.a([],x.n)),a6=x.S,a7=C.T(a6,a6),a8=C.T(a6,x.i)
a6=a9.a
w=a2.c
w===$&&C.c()
v=a9.b
u=a6*w+v
t=b0.a
s=b0.b
r=t*w+s
a8.n(0,u,0)
a5.anT(u,a2.c5Q(a6,v,b0))
p=0
for(;;){if(a4.length!==0){o=p+1
a6=p<4e4
p=o}else a6=!1
if(!a6){q=!1
break}n=a5.eJ()
if(n===r){q=!0
break}a6=a2.c
m=D.o.e9(n,a6)
l=D.o.F(n,a6)
for(k=-1;k<=1;++k)for(a6=k===0,w=!a6,j=m+k,v=j-t,i=-1;i<=1;++i){if(a6&&i===0)continue
h=l+i
g=!0
if(j>=0)if(h>=0){f=a2.b
f===$&&C.c()
if(j<f){f=a2.c
if(!(h>=f)){g=a2.e
g===$&&C.c()
f=g[j*f+h]
g=f}}}if(g)continue
g=!1
if(w)if(i!==0){g=a2.e
g===$&&C.c()
f=a2.c
g=g[j*f+l]||g[m*f+l+i]}if(g)continue
e=j*a2.c+h
g=a8.h(0,n)
g.toString
d=g+(w&&i!==0?1.4142:1)
g=a8.h(0,e)
if(d<(g==null?1e9:g)){a7.n(0,e,n)
a8.n(0,e,d)
a5.anT(e,d+Math.sqrt(Math.pow(v,2)+Math.pow(h-s,2)))}}}if(!q)return C.a([b1,b2],x.f)
a0=C.a([r],a3)
while(a7.ai(0,D.d.gal(a0))){a3=a7.h(0,D.d.gal(a0))
a3.toString
a0.push(a3)}a3=x.f
a4=C.a([b1],a3)
for(a6=x.c5,w=new C.dx(a0,a6),w=new C.bS(w,w.gL(0),a6.k("bS<ak.E>")),v=a2.a,a6=a6.k("ak.E");w.C();){t=w.d
if(t==null)t=a6.a(t)
s=a2.c
g=D.o.e9(t,s)
a4.push(new C.z(-v.gev(0)/2+8+g*24,-750+D.o.F(t,s)*24))}a4.push(b2)
a1=C.a([D.d.gI(a4)],a3)
for(j=0;h=a4.length-1,j<h;j=h){a3=j+1
for(;;){if(!(h>a3&&!a2.aZ_(0,a4[j],a4[h])))break;--h}a1.push(a4[h])}return a1},
c5Q(d,e,f){return Math.sqrt(Math.pow(d-f.a,2)+Math.pow(e-f.b,2))}}
A.dgW.prototype={
gcm(d){return this.a.length!==0},
anT(d,e){var w,v,u,t=this.a
t.push(d)
w=this.b
w.push(e)
v=t.length-1
for(;v>0;v=u){u=D.o.an(v-1,2)
if(w[u]<=w[v])break
this.b75(v,u)}},
eJ(){var w,v,u,t,s,r=this.a,q=D.d.gI(r),p=r.pop(),o=this.b,n=o.pop()
if(r.length!==0){r[0]=p
o[0]=n
for(w=0;;w=s){v=2*w+1
u=v+1
t=r.length
s=v<t&&o[v]<o[w]?v:w
if(u<t&&o[u]<o[s])s=u
if(s===w)break
this.b75(w,s)}}return q},
b75(d,e){var w,v=this.a,u=v[d]
v[d]=v[e]
v[e]=u
v=this.b
w=v[d]
v[d]=v[e]
v[e]=w}}
A.aSH.prototype={
biT(d,e,f){var w,v,u,t,s=this,r=null,q=s.d
if(q>0){q-=d
s.d=q
if(q<=0){s.d=0
s.c=180
s.r+=5
w="You did not reach a shop in time: you lost 5 stars. You must rest for three minutes, or eat something."}else w=r
s.aT()
return w}q=s.c
if(q>0){q-=d
s.c=q
if(q<=0){s.c=0
s.a=0.5
w="You have rested. Your energy is back to half. Find some food in a shop to keep going."}else w=r
s.aT()
return w}if(f){v=s.a
u=s.e
q=D.k.E(u-d/120,0,1)
s.e=q
q=q<=0?1.8:1
t=s.f?1.5:1
t=s.a=D.k.E(s.a-d*(q*t)/120,0,1)
if(t<=0){s.d=20
w="You have no energy left: you crawl on the ground. Get to a shop and buy food within 20 seconds, or you lose 5 stars."}else if(v>=0.25&&t<0.25)w="You are getting tired. Find a shop and buy some food."
else w=u>=0.3&&s.e<0.3?"You are thirsty. Buy some water or juice at a shop, or you will tire much faster.":r
s.aT()}else w=r
if(e){v=s.b
q=s.b=D.k.E(v-d/120,0,1)
if(q<=0&&v>0)w="The car is out of gas. Get to a gas station (walk, then buy gas) to carry on."
else if(v>=0.25&&q<0.25)w="The gas is low. Drive to a gas station."
s.aT()}return w},
a6x(d){return this.biT(d,!1,!1)}}
A.aXX.prototype={
B(d){var w,v,u,t,s,r=null,q=D.k.E(this.c,0,1)
if(q>0.5)w=D.be
else w=q>0.25?D.bI:D.aw
v=C.a([],x.p)
u=this.d
v.push(new C.D(D.q6,C.d(this.e,r,r,r,r,r,r,C.l(r,r,r,r,r,r,r,r,r,r,r,u,r,r,r,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),r))
t=C.m(u/3)
s=C.I(D.ae,D.r,1.5)
v.push(C.E(C.p(r,new C.bL(D.a3,r,r,C.Bt(D.A,C.c1(r,new C.o(w,r,r,C.m(u/4),r,r,D.n),D.bf),1,q),r),D.f,r,r,new C.o(D.aW,r,s,t,r,r,D.n),r,u,r,r,D.no,r,r,r),1))
v.push(C.p(r,r,D.f,r,r,new C.o(D.ae,r,r,C.m(1),r,r,D.n),r,u*0.45,r,B.byp,r,r,r,3))
return C.B(v,D.m,r,D.e,D.P,0,r,r)}}
A.Ui.prototype={
B(d){return new C.tp(new A.c_U(this),null,this.c,null)}}
A.rJ.prototype={}
A.Sk.prototype={
gL(d){return this.a==="bus"?120:95.94999999999999}}
A.aSG.prototype={}
A.bvZ.prototype={
bz5(d,e,f,g){var w,v,u,t,s,r,q,p,o,n,m
for(w=this.e,v=this.f,u=0;u<4;++u){t=B.kj[u]
s=A.fjE(t).a[1]
r=new A.fcs(this,t)
q=0
for(;;){if(!(r.$1(q)&&q<s))break;++q}for(p=-1,o=0,n=0;n<s;++n){m=D.o.F(q+n,s)
if(r.$1(m)){if(p<0)p=m;++o}else if(p>=0)break}w.push(p)
v.push(o)}}}
A.bIZ.prototype={
jP(d){var w,v,u,t
for(w=this.a,v=this.b,u=0;u<4;++u){w[u]=B.kj[u].r
v[u]=0}t=this.c=0
for(w=$.fUf();t<2;++t)w[t].r=-1},
Fw(d,e){var w,v,u,t=this
if(e<t.c-0.0001)t.jP(0)
w=t.c
if(e-w>90){w=e-2
t.c=w}for(v=e-1e-9;w<v;){u=Math.min(0.05,e-w)
t.cxD(u)
w=t.c+=u}},
cxD(b8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7=this
for(w=$.fUf(),v=b7.a,u=0;u<2;++u){t=w[u]
s=t.r
if(s<0)continue
r=A.fjE(B.kj[s]).a[1]
q=D.k.F(v[s]-t.e[s],r)
if(q<0)q+=r
if(q>=t.f[s]&&q<r/2)t.r=-1}for(w=b7.b,p=110*b8,o=40*b8,n=0;n<4;++n){m=B.kj[n]
r=A.fjE(m).a[1]
l=m.a==="bus"
k=(l?120:95.94999999999999)/2
j=new A.bJ_()
for(i=34,h=0;h<4;++h){if(h===n||D.o.an(n,2)!==D.o.an(h,2))continue
g=D.k.F(v[h]-v[n],r)
if(g<0)g+=r
g-=k+(B.kj[h].a==="bus"?120:95.94999999999999)/2
if(g<400)i=Math.min(i,C.jR(j.$1(g-18)))}for(f=$.bEh(),e=f.length,d=r-30,u=0;u<f.length;f.length===e||(0,C.M)(f),++u){a0=f[u]
if(a0.a!==D.o.an(n,2))continue
a1=A.h2T(a0,b7.c)
if(a1===0)continue
a2=D.k.F(a0.b-(v[n]+k),r)
if(a2<0)a2+=r
if(a2>d)continue
if(a2<260)a3=!(a1===1&&a2<w[n]*1.2)
else a3=!1
if(a3)i=Math.min(i,C.jR(j.$1(a2-4)))}for(f=$.fUf(),u=0;u<2;++u){t=f[u]
a4=t.e[n]
if(a4<0)continue
e=v[n]
a2=D.k.F(a4-e,r)
if(a2<0)a2+=r
if(D.k.F(e-a4,r)<t.f[n]){if(t.r<0)t.r=n
continue}if(t.r===n)continue
e=w[n]
for(d=$.bEh(),a3=d.length,a5=b7.c,a6=!1,a7=0;a7<a3;++a7){a0=d[a7]
if(a0.a!==D.o.an(n,2)||A.h2T(a0,a5)===0)continue
a8=D.k.F(a0.b-(v[n]+k),r)
if((a8<0?a8+r:a8)<a2)a6=!0}if(t.r<0&&a2<40+e*e/220+20&&!a6){t.r=n
continue}if(a2<400)i=Math.min(i,C.jR(j.$1(a2-10)))}f=A.L3(m,v[n]).a
a9=f[0]
b0=f[1]
b1=f[2]
b2=f[3]
for(f=b7.d,e=f.length,d=k-5,a3=k+110,u=0;u<f.length;f.length===e||(0,C.M)(f),++u){a5=f[u]
b3=a5.a-a9
b4=a5.b-b0
b5=b3*b1+b4*b2
a5=!1
if(b5>d)if(b5<a3){a5=l?33.54:31.45
a5=Math.abs(-b3*b2+b4*b1)<a5/2+16}if(a5)i=Math.min(i,C.jR(j.$1(b5-k-10)))}b6=w[n]
l=b6<i?Math.min(i,b6+o):Math.max(i,b6-p)
w[n]=l
if(l<0){w[n]=0
l=0}v[n]=v[n]+l*b8}},
cUA(d,e,f){this.Fw(0,f)
return A.L3(B.kj[e],this.a[e])},
cPh(d,e){var w,v,u,t,s,r,q,p,o,n,m,l
for(w=this.a,v=this.b,u=0;u<4;++u){if(v[u]<4)continue
t=B.kj[u]
s=A.L3(t,w[u]).a
r=s[0]
q=s[1]
p=s[2]
o=s[3]
n=d-r
m=e-q
s=t.a==="bus"
l=s?120:95.94999999999999
if(Math.abs(n*p+m*o)<l/2+6){s=s?33.54:31.45
s=Math.abs(-n*o+m*p)<s/2+7}else s=!1
if(s)return u}return-1}}
A.Ac.prototype={
ga8_(){var w=this.d,v=w.e*3.141592653589793/2,u=Math.sin(v),t=Math.cos(v),s=this.r-1
return new C.z(w.c+u*42-t*s*24,w.d+t*42+u*s*24)}}
A.cy5.prototype={
byV(d,e){var w,v,u,t,s=this,r=x._,q=C.a([],r)
for(w=s.a.x,v=w.length,u=0;u<w.length;w.length===v||(0,C.M)(w),++u){t=w[u]
if(t.b==="ubstation")q.push(t)}s.c!==$&&C.aP()
s.c=q
r=C.a([],r)
for(q=w.length,u=0;u<w.length;w.length===q||(0,C.M)(w),++u){t=w[u]
v=t.b
if(v==="house2"||v==="bighouse")r.push(t)}s.d!==$&&C.aP()
s.d=r
s.Uq(0)},
Uq(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.d
f===$&&C.c()
if(f.length===0)return
w=g.c
w===$&&C.c()
v=w.length
u=g.b
t=g.e
s=C.S(t)
r=s.k("Z<1>")
s=s.k("cQ<1,H>")
q=s.k("J.E")
p=0
for(;p<w.length;w.length===v||(0,C.M)(w),++p){o=w[p]
n=C.pS(q)
n.v(0,new C.cQ(new C.Z(t,new A.cy7(o),r),new A.cy8(),s))
for(m=0;m<3;++m){if(n.q(0,m))continue
l=g.f
k=l==null
if((k?null:l.d)===o)l=(k?null:l.r)===m
else l=!1
if(l)continue
l=g.x++
j=f[u.au(f.length)]
i=A.yG(j)
h=Math.sqrt(Math.pow(o.c-i.a,2)+Math.pow(o.d-i.b,2))
l=new A.Ac(l,B.dfF[u.au(12)],new A.rF(B.awi[u.au(5)],B.LD,B.dnr[u.au(6)],D.aJ,"human"),o,j,6+D.o.E(D.k.V(h/45),0,30),m)
l.x=d
t.push(l)}}},
apZ(d,e){var w,v,u,t=this.c
t===$&&C.c()
w=t.length
v=0
for(;v<t.length;t.length===w||(0,C.M)(t),++v){u=t[v]
if(Math.sqrt(Math.pow(u.c-d,2)+Math.pow(u.d-e,2))<150)return u}return null},
cUl(d,e){var w,v,u,t,s,r,q=this
if(q.f!=null)return null
w=q.apZ(d,e)
if(w==null)return null
v=C.a([],x.bz)
for(u=q.e,t=u.length,s=0;s<u.length;u.length===t||(0,C.M)(u),++s){r=u[s]
if(r.d===w)v.push(r)}if(v.length===0)return null
D.d.aV(v,new A.cy6())
r=D.d.gI(v)
D.d.W(u,r)
return q.f=r},
ga6v(d){var w=this.f
return w==null?null:A.yG(w.e)},
cMe(d,e,f){var w,v,u=this,t=u.f,s=u.ga6v(0)
if(t==null||s==null)return 0
if(Math.sqrt(Math.pow(s.a-d,2)+Math.pow(s.b-e,2))>70)return 0
u.f=null;++u.r
w=u.w
v=t.f
u.w=w+v
u.y=f+4
u.Uq(f)
return v},
alY(d){var w,v,u,t,s,r,q,p
if(d<this.y)return B.HE
w=C.a([],x.B)
for(v=this.e,u=v.length,t=d*1.4,s=0;s<v.length;v.length===u||(0,C.M)(v),++s){r=v[s]
q=r.d
p=r.c
w.push(new A.a45(r.ga8_().a,r.ga8_().b,Math.atan2(q.c-r.ga8_().a,q.d-r.ga8_().b)+3.141592653589793,t+r.a,!1,!1,p,p.c))}return w}}
A.px.prototype={}
A.bIL.prototype={
gLT(){var w,v=this,u=v.r
if(u===$){w=A.hsJ(v.b)
v.r!==$&&C.bF()
v.r=w
u=w}return u},
cau(){var w,v=this.a
A:{if("hospital"===v){w=B.cuv
break A}if("dmv"===v){w=B.dnN
break A}if("shop"===v){w=B.cUz
break A}if("school"===v){w=B.d2v
break A}if("firestation"===v){w=B.dhi
break A}if("tower"===v){w=B.dby
break A}w=B.dlP
break A}return w},
cFi(){var w,v=this.a
A:{if("hospital"===v){w=B.cur
break A}if("dmv"===v){w=B.d4r
break A}if("shop"===v){w=B.d_a
break A}if("school"===v){w=B.dbj
break A}if("firestation"===v){w=B.d8s
break A}if("tower"===v){w=B.dq9
break A}w=B.cU4
break A}return w},
ft(d,e){var w,v,u,t,s,r,q,p=this,o=p.ax
o===$&&C.c()
w=o.length
v=p.CW
u=p.a==="tower"
t=null
s=0
for(;s<w;++s){r=o[s]
q=p.at
q===$&&C.c()
if(!(Math.sqrt(Math.pow(q.f-r.b,2)+Math.pow(q.r-r.c,2))<r.d)){if(u&&r.a===2)p.x=!1
v.W(0,r.a)
continue}q=r.a
if(!v.M(0,q))continue
t=p.c6r(q,e)}if(t!=null)p.B(e)
return t},
c6r(d,e){var w,v,u,t,s,r=this,q="The city is still loading.",p="The breaker panel on level "
switch(r.a){case"hospital":if(e==null)return q
if(d===0){w=e.gC0()
v=C.S(w).k("Z<1>")
u=C.C(new C.Z(w,new A.bIM(),v),v.k("J.E"))
if(u.length===0)return"The desk: nobody needs the hospital right now. "+e.x+" doses of medicine in stock."
return e.aCS(D.d.gI(u))}t=d-1
if(e.e[t].a<0)return"This bed is empty. Admit someone at the desk first."
return e.bj6(t)
case"shop":if(e==null)return q
if(d!==2){r.db=!0
if(d===0)w="The food shelves: have a look and choose what to buy."
else w=r.b.b==="gasstation"?"The shelf for the car: have a look.":"The medicine shelf: have a look and choose."
return w}w=r.cx
if(w==null){r.db=!0
return"The counter. Bring goods to sell: pick up crates in the city and carry them here. Or choose what to buy."}s=w==="crate"?6:4
e.r+=s
r.cx=null
return"You sold your goods at the market. +"+s+" points. Go and fetch more."
case"dmv":r.dx=!0
return"The licence desk: you can get your Uber licence here."
case"school":if(d===0){w=e==null
if(!w)e.r+=3
w=w?null:e.r
return"You taught the class a lesson. +3 points. "+B.a3j[D.o.F(w==null?0:w,5)]}w=e==null?null:e.r
return"The library: "+B.a3j[D.o.F(w==null?1:w,5)]
case"firestation":if(d===0){if(e!=null)e.r+=2
return"You checked the equipment with the firefighters. +2 points. Keep the extinguishers charged."}w=e==null?null:e.r
return"Fire drill: "+B.a3j[D.o.F((w==null?0:w)+1,5)]
case"tower":if(d===0){r.w=!0
return"The elevator: choose your level (you are on level "+r.f+" of "+r.gLT()+")."}if(d===2){r.x=!0
return"The balcony on level "+r.f+": the whole town is below you."}if(r.c){r.cy=!0
return p+r.f+". This office has no power. Let us find the wiring fault."}return p+r.f+": every breaker is on and the office has power."
default:if(d===0){if(r.c){r.cy=!0
return"The breaker panel. This house has no power. Let us find the wiring fault."}return"The breaker panel: every breaker is on and the house has power."}return r.c?"The outlet is dead: there is no power in this house.":"The outlet works. Everything here is wired right."}},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this
g.ch=d
w=g.a
if(w==="cabin"){g.bDE()
return}v=C.a([],x.z)
u=new A.fk(v)
t=C.a([],x.E)
A:{if("hospital"===w){s=B.ezK
break A}if("shop"===w){s=B.etK
break A}if("dmv"===w){s=B.ew1
break A}if("school"===w){s=B.eMu
break A}if("firestation"===w){s=B.eAG
break A}if("tower"===w){s=new C.z(g.c?B.aeT:B.bpj,B.beK)
break A}s=new C.z(g.c?B.aeT:B.bnc,B.jp)
break A}r=s.a
u.f=-1
u.n6(B.h0a,B.fZs,s.b,0.2,3)
u.f=0
u.x=$.dQ=$.dQ+1
u.hm(B.fYE,B.aVl,r,3)
u.x=0
u.x=$.dQ=$.dQ+1
u.hm(B.fXr,B.a9V,r,3)
u.x=0
s=w==="tower"
if(s){u.f=3
u.d=0.18
u.aO(B.aVx,B.a9V,B.Yn)
u.d=1
u.f=0}else{u.x=$.dQ=$.dQ+1
u.hm(B.aVx,B.a9V,r,3)
u.x=0}u.f=0
q=s&&g.f>1
p=$.dQ+1
if(q){u.x=$.dQ=p
u.hm(B.fZF,B.aVl,r,3)
u.x=0}else{u.x=$.dQ=p
u.hm(new A.r(-94,70,320.6),new A.r(113.2,140,1.2),r,2)
u.x=0
u.x=$.dQ=$.dQ+1
u.hm(new A.r(94,70,320.6),new A.r(113.2,140,1.2),r,2)
u.x=0
u.x=$.dQ=$.dQ+1
u.aO(new A.r(0,102,320.6),new A.r(76,76,1.2),r)
u.x=0
u.x=$.dQ=$.dQ+1
u.aY(B.h1c,B.h6i,B.bap,0.5)
u.x=0}u.f=1
for(o=0;o<3;++o){n=B.dhW[o]
u.aO(new A.r(n,78,0.6),B.h5R,B.ky)
u.aY(new A.r(n,78,0.8),B.fXJ,B.hS,0.6)}for(q=!s,o=0;o<2;++o){m=B.cBM[o]
u.aO(new A.r(-149.6,78,m),B.aVd,B.ky)
u.aY(new A.r(-149.2,78,m),B.aVP,B.hS,0.6)
if(q){u.aO(new A.r(149.6,78,m),B.aVd,B.ky)
u.aY(new A.r(149.2,78,m),B.aVP,B.hS,0.6)}}u.aO(B.h1i,B.h6g,B.ky)
u.aO(B.h1w,B.fVj,D.bO)
u.f=2
u.r=!0
for(q=w!=="house2",p=w==="bighouse",o=0;o<3;++o){n=B.dik[o]
for(l=0;l<2;++l){m=B.cBN[l]
u.dL(new A.r(n,138,m),new A.r(n,122,m),0.5,D.j7,4)
k=(!q||p||s)&&g.c?D.he:B.o0
u.fo(new A.r(n,120,m),5,k,3,6)}}switch(w){case"hospital":g.bZ2(u,t,d)
break
case"shop":g.cun(u,t)
break
case"dmv":g.bMh(u,t)
break
case"school":g.cs3(u,t)
break
case"firestation":g.cxz(u,t)
break
case"tower":g.cBF(u,t)
break
default:u.f=1
u.aO(B.h7m,B.h2H,g.c?B.pX:B.afh)
u.f=2
u.aY(B.h4S,B.fSS,B.XE,0.1)
u.aY(B.h4T,B.fST,B.Lu,0.1)
u.aY(B.fSA,B.fX9,B.nP,0.2)
u.aY(B.fYS,B.h73,E.F4,0.4)
u.aO(B.fTi,B.fTU,B.ag_)
u.fo(B.h4k,10,B.EF,3,6)
g.b9W(u,t)}u.f=1
if(s&&g.f>1)t.push(B.bZ2)
else{u.aO(B.h1L,B.h_a,D.cS)
t.push(B.bZ1)}if(d!=null){w=d.r
k=d.w
j=d.x
i=g.cx!=null?"   \ud83d\udce6 carrying":""
t.push(new A.hf(B.fQZ,"\u2b50 "+w+"   \ud83c\udf5e "+k+"   \ud83d\udc8a "+j+i,D.M,0))}h=C.a([],x.a)
if(s){u.f=2
u.e=0
u.aY(B.fSN,B.aVh,D.au,0.3)
u.aY(B.fYY,B.aVh,D.au,0.3)
u.aY(B.h1E,B.h5U,D.au,0.3)
w=x.o
h.push(new A.fK(C.a([B.fYr,B.h22,B.h10,B.h3K],w),0,new A.bIT(g),960,560,60,2,0,!1))
h.push(new A.fK(C.a([B.fVP,B.h7s,B.fUS,B.h5P],w),0,new A.bIU(g),960,560,60,2,0,!1))
h.push(new A.fK(C.a([B.h5C,B.fQE,B.fXN,B.h_j],w),0,new A.bIV(g),960,560,60,2,0,!1))}if((!q||p)&&!g.c)h.push(new A.fK(C.a([B.h2t,B.fZC,B.h15,B.h1_],x.o),0,new A.bIW(g),960,480,60,2,0,!1))
g.ay=new A.tI(v,B.RI,t,h,null,0)},
rq(d,e,f,g,h){var w=d.f
d.f=1
d.dL(new A.r(e,0.2,f),new A.r(e,0.6,f),g,h,20)
d.f=w},
bZ2(d,e,f){var w,v,u,t,s,r,q,p,o
d.f=1
d.aO(B.aUg,B.fVx,D.bx)
d.aO(B.aUg,B.fT2,D.bx)
d.f=2
d.aY(B.h5e,B.fYd,B.nP,0.15)
d.aY(B.h5f,B.fYw,D.bN,0.3)
d.aO(B.h4h,B.fXn,D.aR)
this.rq(d,-80,66,22,D.co)
e.push(B.bZ8)
e.push(B.bYY)
for(w=0;w<2;++w)d.aO(new A.r(-105,8,B.ccp[w]),B.fWM,D.bs)
d.fo(B.fTp,9,B.EF,3,6)
for(v=f!=null,u=0;u<3;++u){t=48+u*50
d.aO(new A.r(76,8,t),B.fYa,D.cr)
d.aO(new A.r(76,14,t),B.fY5,D.aP)
d.aO(new A.r(108,18,t),B.fTn,D.c)
s=v&&u<f.e.length?f.e[u]:null
if(s!=null&&s.a>=0){r=f.c
r===$&&C.c()
q=r[s.a]
r=s.b>70?D.bm:D.cs
d.aO(new A.r(54,24,t),B.fVA,r)
r=s.b>70
p=r?"cared for":"needs treatment"
r=r?D.eh:D.bx
e.push(new A.hf(new A.r(76,40,t),q.a.b+"  "+p,r,0))}else e.push(new A.hf(new A.r(76,30,t),"Free bed "+(u+1),D.bs,0))
r=t-2
o=d.f
d.f=1
d.dL(new A.r(20,0.2,r),new A.r(20,0.6,r),16,D.aE,20)
d.f=o}},
bMh(d,e){var w,v,u,t,s
d.f=2
d.r=!0
d.x=$.dQ=$.dQ+1
d.aY(B.aU7,B.fTz,D.bs,0.15)
d.aY(B.aU9,B.fTB,D.bN,0.3)
d.aY(B.h4M,B.fUH,D.au,0.3)
d.aY(B.h3T,B.fZp,D.bc,0.5)
d.aO(B.h4L,B.fXp,D.aJ)
d.aO(B.fVq,B.fTT,D.bI)
d.x=0
d.x=$.dQ=$.dQ+1
d.aO(B.aUL,B.aUj,D.cp)
d.aO(B.aUH,B.aUo,D.bj)
d.fo(B.aUI,5.5,B.aeg,5,8)
d.fo(B.aUJ,5.7,D.au,3,8)
d.x=0
d.x=$.dQ=$.dQ+1
d.aO(B.h4o,B.fVX,D.aP)
for(w=0;w<3;++w){v=90+w*30
d.aDf(new A.r(-146,62,v),B.fUi,[D.bx,D.bI,D.bj][w],0)
d.aO(new A.r(-145.6,62,v),B.h5L,D.c)}d.aO(B.fTD,B.fVW,D.h0)
d.aO(B.h0E,B.h6y,D.c)
d.aO(B.h_U,B.h5q,D.bx)
d.x=0
for(u=0;u<4;++u){t=B.dhX[u]
d.x=$.dQ=$.dQ+1
d.aO(new A.r(t,9,150),B.fUN,D.bj)
d.aO(new A.r(t,17,160),B.fUI,D.bj)
d.aO(new A.r(t-8,4,150),B.aUC,D.aJ)
d.aO(new A.r(t+8,4,150),B.aUC,D.aJ)
d.x=0}d.x=$.dQ=$.dQ+1
d.aO(B.fS1,B.fXA,D.bL)
d.aY(B.fR5,B.fWC,D.aw,0.4)
d.aY(B.h4Y,B.fV2,D.dt,0.5)
for(u=0;u<2;++u){t=E.az2[u]
for(s=0;s<2;++s){v=B.cci[s]
d.dL(new A.r(t,9,v-1.5),new A.r(t,9,v+1.5),5,D.au,8)}}d.x=0
this.rq(d,0,78,24,D.aR)
e.push(B.bZ5)
e.push(B.bYZ)
e.push(B.bZ6)},
aUu(a5,a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=a6*128
A:{if(1===a7){w=B.d7x
break A}if(2===a7){w=B.d8P
break A}w=B.d2L
break A}a5.x=$.dQ=$.dQ+1
a5.aO(new A.r(a6*148,40,120),B.fWr,B.aed)
for(v=0;v<2;++v)a5.aO(new A.r(a4,40,B.cFZ[v]),B.fW7,B.aed)
a5.aO(new A.r(a4,4,120),B.fW8,B.bgM)
for(u=0;u<4;++u)a5.aY(new A.r(a4,11+u*18,120),B.fW3,B.bpQ,0.1)
for(t=a7===0,s=w.length,r=a6*2.7,u=0;u<4;++u){q=12+u*18
for(p=q+6.6,o=q+3.2,n=u*7,m=q+10,l=q+12.5,k=q+7,j=q+8,i=q+2.5,h=q+5.5,g=0;g<9;++g){f=76+g*11
for(e=n+g*3,d=u+g+a7,a0=0;a0<2;++a0){a1=a6*(114+a0*14)
a2=w[D.o.F(e+a0*5+a7,s)]
switch(D.o.F(d+a0,4)){case 0:a5.dQ(new A.r(a1,q,f),new A.r(a1,j,f),3.2,a2,0.3,8)
a5.aEv(new A.r(a1,i,f),new A.r(a1,h,f),3.3,D.c,!1,8)
break
case 1:a5.aY(new A.r(a1,k,f),B.h_0,a2,0.1)
a5.aO(new A.r(a1-r,j,f),B.h2l,D.c)
break
case 2:a5.dQ(new A.r(a1,q,f),new A.r(a1,m,f),2.4,a2,0.45,8)
a5.dL(new A.r(a1,m,f),new A.r(a1,l,f),1.2,D.c,6)
break
default:a3=t?B.bpW:a2
a5.aY(new A.r(a1,o,f),B.h1O,a3,0.05)
a3=t?B.bdp:D.c
a5.aO(new A.r(a1,p,f),B.fYN,a3)}}}}a5.x=0},
aTt(d,e){var w,v,u,t,s,r,q,p
d.x=$.dQ=$.dQ+1
d.aY(new A.r(e,32,11),B.fWN,D.bO,0.3)
d.aO(new A.r(e,33,22.4),B.fWD,D.bn)
for(w=e-21,v=0;v<3;++v){u=v*17
d.aO(new A.r(e,15+u,21),B.fWy,D.bL)
for(t=16+u,u=27+u,s=v*2,r=0;r<7;++r){q=w+r*7
d.dQ(new A.r(q,t,21.6),new A.r(q,u,21.6),2.2,B.cYw[D.o.F(r+s,6)],0.5,6)}}d.x=0
p=d.f
d.f=3
d.d=0.2
d.aO(new A.r(e,33,23.2),B.h79,B.Yn)
d.d=1
d.f=p},
cun(d,e){var w,v,u,t,s,r,q,p,o,n=this,m=n.b.b==="gasstation"
d.f=2
d.r=!0
d.x=$.dQ=$.dQ+1
d.aY(B.aU7,B.fTh,B.nP,0.15)
d.aY(B.aU9,B.fTj,D.bN,0.3)
d.aO(B.fZQ,B.h6H,B.bq1)
d.aY(B.h4G,B.fUw,D.e5,0.3)
d.aY(B.h4I,B.fTV,D.bc,0.5)
d.aO(B.fRT,B.fT3,D.au)
for(w=0;w<6;++w)d.aO(new A.r(14+w*7.5,33,47),B.fX0,B.dnu[D.o.F(w,4)])
d.x=0
d.x=$.dQ=$.dQ+1
d.aO(B.aUL,B.aUj,D.cp)
d.aO(B.aUH,B.aUo,D.cS)
d.aO(B.h1X,B.h09,D.vG)
d.fo(B.aUI,5.5,B.aeg,5,8)
d.fo(B.aUJ,5.7,B.bev,3,8)
d.x=0
n.aUu(d,-1,0)
n.aUu(d,1,m?2:1)
n.aTt(d,-104)
n.aTt(d,104)
for(v=[B.eu8,B.eIU],u=0;u<2;++u){t=v[u]
s=t.a
r=t.b
d.x=$.dQ=$.dQ+1
d.aO(new A.r(s,5,170),B.fVL,B.ag_)
d.aO(new A.r(s,11,160),B.fVN,B.bhu)
for(t=s-13.5,q=J.a4(r),w=0;w<4;++w)for(p=t+w*9,o=0;o<3;++o)d.fo(new A.r(p,12.5,163+o*7.5),4.2,q.h(r,D.o.F(w+o,3)),4,6)
d.x=0}d.x=$.dQ=$.dQ+1
d.aO(B.aU3,B.fTa,m?D.bx:D.cS)
d.aO(B.h4g,B.aUz,D.aE)
d.aO(B.fTc,B.aUz,m?D.bn:D.aR)
d.x=0
n.rq(d,-64,120,24,D.bI)
n.rq(d,64,120,24,D.by)
n.rq(d,0,84,22,D.be)
e.push(new A.hf(B.fQT,m?"\u26fd NGMY Gas shop":"\ud83d\uded2 NGMY Mart",D.M,0))
e.push(B.bZ_)
e.push(new A.hf(B.fY9,m?"\ud83d\udee2 For the car":"\ud83d\udc8a Medicine and health",D.j5,0))
e.push(B.bZ9)
e.push(B.bZ0)
e.push(B.bZa)},
cs3(d,e){var w,v,u,t,s
d.aY(B.fSv,B.h7H,D.dY,0.1)
d.aO(B.h6v,B.h37,B.blM)
d.aY(B.fR7,B.fTq,B.nP,0.15)
for(w=0;w<4;++w){v=B.dag[w]
u=v.a
t=v.b
for(s=0;s<2;++s){v=u+B.a46[s]
d.aO(new A.r(v,10,t),B.fUA,B.jp)
d.aO(new A.r(v,5,t),B.fV7,D.bl)}}this.rq(d,0,80,24,D.bI)
this.rq(d,90,56,20,D.co)
e.push(B.bYW)
e.push(B.bZ3)},
cxz(d,e){var w,v,u,t,s
d.aY(B.fR1,B.fU7,D.bx,0.3)
d.aY(B.h52,B.fX7,D.bx,0.3)
for(w=0;w<2;++w){v=B.dih[w]
for(u=0;u<2;++u){t=B.cqq[u]
d.dL(new A.r(v,6,t-1.5),new A.r(v,6,t+1.5),8,D.nb,10)}}for(s=0;s<5;++s)d.aO(new A.r(-142,30,110+s*18),B.fT4,D.al)
d.dL(B.fT8,B.fT9,2,D.bI,6)
this.rq(d,-60,130,24,D.aE)
this.rq(d,80,56,20,D.co)
e.push(B.bYU)
e.push(B.bZ4)},
cBF(d,e){var w,v,u,t,s,r,q,p,o,n=this
d.f=1
d.aO(B.h69,B.h0e,B.doJ[D.o.F(n.f,5)])
d.f=2
d.b=19502
d.aO(B.fZf,B.fYe,D.M)
d.aY(B.fWU,B.aUX,D.bs,0.5)
d.aY(B.fVd,B.aUX,D.bs,0.5)
d.aY(B.fVI,B.fSV,D.bs,0.5)
d.e=16
d.aY(B.fSH,B.fYH,D.bc,0.4)
d.aO(B.h__,B.fW_,D.au)
d.aO(B.h3S,B.fT1,D.e5)
d.fo(B.fZL,2,D.bI,3,5)
d.fo(B.fWn,2,D.be,3,5)
d.b=d.e=0
n.rq(d,0,70,26,D.aR)
for(w=0;w<3;++w){v=B.cU8[w]
u=v.a
t=v.b
d.aY(new A.r(u,15,t),B.fWb,B.nP,0.2)
d.aO(new A.r(u-19,7,t),B.aUO,D.j7)
d.aO(new A.r(u+19,7,t),B.aUO,D.j7)
d.aY(new A.r(u,24,t-4),B.fTE,E.F4,0.5)
d.aO(new A.r(u,9,t+18),B.fTL,D.cp)
d.aO(new A.r(u,16,t+25),B.fTG,D.cp)}n.rq(d,105,100,26,D.be)
d.d=0.3
d.f=3
d.aO(new A.r(144,14,100),B.fWo,B.Yn)
d.d=1
d.f=2
for(w=0;w<5;++w)d.aY(new A.r(144,14,B.d0Q[w]),B.h0v,D.dv,0.5)
d.fo(B.fTs,10,B.EF,3,6)
d.aO(B.fTl,B.fVt,B.nP)
s=-(n.f*22)
d.f=-1
d.aO(new A.r(520,s-1,105),B.fYu,B.WQ)
d.aO(B.fXB,B.fVa,B.hS)
d.f=1
for(v=n.b.a,r=v*7,q=0;q<15;++q){p=30+D.o.F(r+q*13,90)
o=B.d5Y[D.o.F(v+q,4)]
d.aO(new A.r(215+D.o.F(q,5)*80,s+p/2,-60+D.o.an(q,5)*135),new A.r(38,p,38),o)}e.push(new A.hf(B.fQR,"\ud83c\udfe2 LEVEL "+n.f+" of "+n.gLT(),D.dK,19502))
e.push(B.bYV)
e.push(B.bYX)
n.b9W(d,e)},
bDE(){var w,v,u,t=C.a([],x.z),s=new A.fk(t)
s.f=-1
s.aY(B.h_J,B.h6l,D.bs,0.3)
s.f=0
s.x=$.dQ=$.dQ+1
s.aY(B.h4O,B.aUy,B.aeK,0.4)
s.x=0
s.x=$.dQ=$.dQ+1
s.aY(B.fVK,B.aUy,B.aeK,0.4)
s.x=0
s.f=1
s.aO(B.fQO,B.fXH,D.aM)
s.f=2
s.r=!0
for(w=0;w<2;++w)s.aY(new A.r(B.az4[w],40,38),B.h_g,D.bL,0.7)
s.aY(B.fSI,B.h3r,D.xF,0.2)
for(w=0;w<2;++w)s.aY(new A.r(B.di4[w],45,80),B.fU5,D.aJ,0.3)
s.aY(B.fSF,B.fXG,D.aJ,0.3)
s.aO(B.fSk,B.fVG,D.al)
s.aY(B.h6G,B.aVE,D.au,0.3)
s.aY(B.h0_,B.aVE,D.au,0.3)
v=this.as
D.d.a8(v)
u=x.o
v.push(new A.fK(C.a([B.h0H,B.fZY,B.h2k,B.h6_],u),0,new A.bIN(this),520,230,6,2,0,!1))
v.push(new A.fK(C.a([B.fYF,B.fYW,B.h5O,B.h2O],u),0,new A.bIO(),720,600,30,2,0,!1))
v.push(new A.fK(C.a([B.h0F,B.h3R,B.h1C,B.h0d],u),0,new A.bIP(),720,600,30,2,0,!1))
v=C.C(v,x.K)
this.ay=new A.tI(t,B.RI,B.ze,v,null,0)},
b9W(d,e){var w,v,u,t,s,r,q,p,o=this,n="dead, tap to fix it"
d.b=19500
d.aY(B.h4n,B.fX_,B.WU,0.5)
for(w=0;w<4;++w){v=o.c&&w===0?D.ca:B.Yq
d.aO(new A.r(-144.2,62-w*6,45),B.h_s,v)}d.b=0
o.rq(d,-100,100,22,o.c?D.aw:D.be)
o.rq(d,90,100,22,D.co)
v=o.c
if(v){u=o.d
t=u[0]&&u[1]}else t=!0
s=!v||o.d[3]
r=!v||o.d[2]
v=C.a([],x.s)
u=o.d
if(!(u[0]&&u[1])&&o.c)v.push("outlets")
if(!r)v.push("ceiling light")
if(!s)v.push("switch")
d.f=1
d.d=0.6
d.b=19500
d.aO(B.fWl,B.fUn,o.c?D.aw:D.be)
d.b=19501
d.aO(B.fYx,B.fZa,t?D.be:D.aw)
d.aO(B.h55,B.fZx,s?D.be:D.aw)
d.aO(B.h_u,B.h1u,r?D.be:D.aw)
d.d=1
d.aY(B.h42,B.fZJ,B.M5,0.25)
for(q=0;q<2;++q)for(u=26+F.je[q]*3.4,p=0;p<2;++p)d.aO(new A.r(95+B.QL[p],u,2.6),B.h0l,B.afM)
d.aY(B.h6c,B.h29,B.M5,0.25)
d.aO(new A.r(-60,s?52:48,2.8),B.fV9,B.ahr)
d.b=0
d.f=2
if(o.c)v=v.length===0?"\u26a1 Breaker panel: tap to switch the power on":"\u26a1 Breaker panel: still to fix: "+D.d.aG(v,", ")
else v="\u26a1 Breaker panel: all fine"
e.push(new A.hf(B.h4m,v,o.c?D.bx:D.eh,19500))
v=new A.bIQ(o)
u=t?"\ud83d\udd0c Outlets: fixed":"\ud83d\udd0c Outlet: "+C.w(v.$2(D.a2c,n))
e.push(new A.hf(B.fYy,u,t?D.eh:D.bx,19501))
u=s?"\ud83d\udca1 Switch: fixed":"\ud83d\udca1 Switch: "+C.w(v.$2(B.cog,"no power, tap to fix it"))
e.push(new A.hf(B.h56,u,s?D.eh:D.bx,19501))
v=r?"\ud83d\udca1 Ceiling light: fixed":"\ud83d\udca1 Ceiling light: "+C.w(v.$2(B.cgO,n))
e.push(new A.hf(B.fQS,v,r?D.eh:D.bx,19501))
if(o.c)e.push(B.bYT)},
cMi(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=x.z,i=C.a([],j),h=new A.fk(i),g=k.a,f=g==="tower"
if(f||g==="cabin"){w=C.a([],j)
v=new A.fk(w)
if(f){v.e=16
for(u=0;u<2;++u)v.aY(new A.r(F.je[u]*(24+21*k.y),42,6.6),B.h5N,D.aP,0.7)}else{v.e=16
for(u=0;u<2;++u)v.aY(new A.r(F.je[u]*(9+18*k.y),40,78.6),B.fU4,D.aM,0.7)}D.d.v(i,w)}switch(g){case"shop":A.wD(h,B.eld,d,B.IM,!1,0,D.b5)
break
case"hospital":A.wD(h,B.elh,d,B.SP,!1,0,D.bP)
t=D.k.F(d*12,220)
g=t<110
f=g?t:220-t
g=g?0:3.141592653589793
A.wD(h,A.ati(!1,0,-1,"",!1,0,"",-1,t/12,!1,!1,!1,0,!1,!0,6,g,40+f),d,B.IM,!1,0,D.bO)
s=k.ch
if(s!=null){g=s.e
r=0
for(;;){if(!(r<g.length&&r<3))break
A:{q=g[r]
if(q.a<0)break A
f=C.a([],j)
w=s.c
w===$&&C.c()
p=w[q.a].a.e
A.wD(new A.fk(f),B.elg,d,p,!1,0,p.c)
D.d.v(i,A.o8(f,-1.5707963267948966,-1.5707963267948966,new A.r(46,27,48+r*50)))}++r}}break
case"school":A.wD(h,B.eli,d,B.SP,!1,0,D.bj)
for(u=0;u<3;++u){g=B.d4j[u]
A.wD(h,new A.xW(0,g.a,g.b,3.141592653589793,!1,!1,!1,!1,!1,0,!1,!1,"","",-1,0,-1,0),d,B.IM,!1,0,g.c)}break
case"firestation":A.wD(h,B.ele,d,B.IM,!1,0,D.bx)
A.wD(h,B.elf,d,B.SP,!1,0,D.aE)
break
default:break}g=k.at
g===$&&C.c()
f=g.f
w=g.r
o=g.w
n=g.x
m=g.y
l=g.z&&n
A.wD(h,A.ati(!1,0,-1,"",!1,g.Q,"",-1,m,!1,!1,!1,0,l,n,f,o,w),d,e,!0,0,null)
if(k.cx!=null){j=C.a([],j)
new A.fk(j).aO(new A.r(g.f+Math.sin(g.w)*9,48+g.Q,g.r+Math.cos(g.w)*9),B.aUp,B.jp)
D.d.v(i,j)}return i},
gdc(d){return this.e}}
A.Ff.prototype={}
A.OP.prototype={
gU3(){var w,v=this
if(!v.f)return"has died"
if(v.r>=0)return"in hospital"
if(v.c<30)return"in danger"
if(v.e)return"sick"
w=v.b
if(w>80)return"starving"
if(w>55)return"hungry"
if(v.d<40)return"unhappy at home"
return"fine"},
gaDb(d){var w,v=this.gU3()
A:{if("has died"===v){w="\ud83d\udd6f"
break A}if("in hospital"===v){w="\ud83c\udfe5"
break A}if("in danger"===v){w="\ud83c\udd98"
break A}if("sick"===v){w="\ud83e\udd12"
break A}if("starving"===v||"hungry"===v){w="\ud83c\udf7d"
break A}if("unhappy at home"===v){w="\ud83d\ude1f"
break A}w="\ud83d\ude42"
break A}return w}}
A.HY.prototype={}
A.LR.prototype={}
A.aT5.prototype={
bxZ(d,e){var w,v=C.a([],x.fP)
for(w=0;w<7;++w)v.push(new A.OP(B.CE[w]))
this.c=v
v[1].b=55
v[4].b=40},
gC0(){var w,v,u,t=C.a([],x.fP),s=this.c
s===$&&C.c()
w=s.length
v=0
for(;v<s.length;s.length===w||(0,C.M)(s),++v){u=s[v]
if(u.f)t.push(u)}return t},
gcLg(){var w=this.c
w===$&&C.c()
return new C.Z(w,new A.bJA(),C.S(w).k("Z<1>")).gL(0)},
PA(d){var w=this.f
D.d.c8(w,0,d)
if(w.length>12)w.pop()},
aCT(a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this
a1.as+=a3
for(w=a1.gC0(),v=w.length,u=-0.6*a3,t=0.8*a3,s=0.2*a3,r=a1.b,q=0.012*a3,p=a1.f,o=0.15*a3,n=0;n<w.length;w.length===v||(0,C.M)(w),++n){m=w[n]
l=a4.d
l===$&&C.c()
k=m.a
j=l[k.c]
i=j.gkG()
l=k.d
if(l>=0)h=!a4.d[l].gjN()
else{l=j.c
h=(l==="bathroom"||l==="kitchen")&&!j.gjN()}if(m.r<0){m.b=Math.min(100,m.b+s)
l=i?0:45
g=h?35:0
f=m.d
f+=D.k.E(100-l-g-f,u,t)
m.d=f
if(!m.e)l=(f<40||m.b>85)&&r.aj()<q
else l=!1
if(l){m.e=!0
D.d.c8(p,0,k.b+" has fallen sick. Give medicine, or send them to the hospital.")
if(p.length>12)p.pop()}e=m.b>=95?0.9:0
if(m.e)e+=0.55
if(m.d<15)e+=0.4
if(e>0)l=m.c=m.c-e*a3
else{l=m.c
if(l<100){l=Math.min(100,l+o)
m.c=l}}if(l<=0)a1.aRy(m)}}for(w=a1.e,v=1.2*a3,u=2.2*a3,d=0;d<w.length;++d){a0=w[d]
t=a0.a
if(t<0)continue
s=a1.c
s===$&&C.c()
m=s[t]
if(!m.f){a0.a=-1
continue}t=a0.b=Math.max(0,a0.b-a3)
if(t>30)a0.c=Math.min(100,a0.c+u)
else if(t<=0)if((m.c-=v)<=0){a1.aRy(m)
a0.a=-1
continue}if(a0.c>=100){m.e=!1
m.r=-1
m.c=Math.max(m.c,80)
m.b=Math.min(m.b,30)
a0.a=-1
a0.c=0
a0.b=100
a1.r+=8;++a1.z
D.d.c8(p,0,m.a.b+" is better and went home. +8 points.")
if(p.length>12)p.pop()}}for(w=a1.d,v=w.length,n=0;n<v;++n)w[n].f+=a3
a1.Nn(a4)
if((a1.at-=a3)<=0){a1.at=60+r.aj()*50
a1.cGH(a4)}},
aRy(d){var w
d.f=!1
d.c=0
w=d.r
if(w>=0)this.e[w].a=-1
d.r=-1
D.d.bt(this.d,new A.bJx(d))
this.PA(d.a.b+" has died. Keep up with everybody's needs: food, medicine and a home that works.")},
aVi(d,e){return D.d.b3(this.d,new A.bJy(d,e))},
Nn(d){var w,v,u,t,s,r,q,p,o,n=this,m=n.d,l=C.C(m,x.fC),k=l.length,j=n.f,i=0
for(;i<l.length;l.length===k||(0,C.M)(l),++i){w=l[i]
v=B.CE[w.b]
u=w.c==="power"
if(u){t=d.d
t===$&&C.c()
s=t[v.c].gkG()}else{t=v.d
r=d.d
if(t>=0){r===$&&C.c()
t=r[t].gjN()
s=t}else{r===$&&C.c()
t=r[v.c].gjN()
s=t}}if(s){D.d.W(m,w)
t=w.e
n.r=n.r+t;++n.y
u=u?"power is back":"leak is fixed"
D.d.c8(j,0,v.b+"'s "+u+". +"+t+" points. Thank you!")
if(j.length>12)j.pop()}}for(l=n.gC0(),k=l.length,u=n.b,i=0;i<l.length;l.length===k||(0,C.M)(l),++i){q=l[i]
if(m.length>=4)break
t=d.d
t===$&&C.c()
r=q.a
p=t[r.c]
if(!p.gkG()&&!n.aVi(r.a,"power")){m.push(new A.HY(n.Q++,r.a,"power",B.cYj[u.au(3)],15))
D.d.c8(j,0,r.b+" is calling for help: no power.")
if(j.length>12)j.pop()}t=r.d
o=t>=0?d.d[t]:p
t=o.c
if((t==="bathroom"||t==="kitchen")&&!o.gjN()&&!n.aVi(r.a,"leak")&&m.length<4){m.push(new A.HY(n.Q++,r.a,"leak",B.d5N[u.au(3)],15))
D.d.c8(j,0,r.b+" is calling for help: a leak.")
if(j.length>12)j.pop()}}},
cGH(d){var w,v,u,t,s,r,q=this
if(q.d.length>=3||q.gC0().length===0)return
w=q.b
v=q.gC0()[w.au(q.gC0().length)]
u=d.d
u===$&&C.c()
t=v.a
s=u[t.c]
t=t.d
r=t>=0?u[t]:s
u=r.c
if((u==="bathroom"||u==="kitchen")&&r.gjN()&&w.he()){r.ch=!0
r.fr=null}else if(s.gkG()){s.ay=!0
s.CW=null
s.fy=!1
s.fx.a8(0)}else return
q.Nn(d)},
bdW(d){var w,v,u,t=this
if(!d.f)return d.a.b+" has died."
if(d.r>=0)return d.a.b+" is in hospital and is fed there."
w=d.b
if(w<20)return d.a.b+" is not hungry."
v=t.w
if(v<=0)return"There is no food left. Buy some in the shop."
t.w=v-1
d.b=Math.max(0,w-65)
t.r+=2
u=d.a.b+" ate and feels better. +2 points."
t.PA(u)
return u},
aKc(d){var w,v,u=this
if(!d.f)return d.a.b+" has died."
if(!d.e)return d.a.b+" is not sick."
w=u.x
if(w<=0)return y.D
u.x=w-1
d.e=!1
d.c=Math.min(100,d.c+20)
u.r+=3
v=d.a.b+" took the medicine and is better. +3 points."
u.PA(v)
return v},
aCS(d){var w,v,u,t
if(!d.f)return d.a.b+" has died."
if(d.r>=0)return d.a.b+" is already in hospital."
if(!d.e&&d.c>60)return d.a.b+" is not ill enough for the hospital."
w=this.e
v=D.d.bg(w,new A.bJz())
if(v<0)return"The hospital is full. Treat the patients first, they go home when they are better."
w=w[v]
u=d.a
w.a=u.a
w.b=100
w.c=0
d.r=v
t=u.b+" is in bed "+(v+1)+" of the hospital. Keep up with their care."
this.PA(t)
return t},
bj6(d){var w,v,u=this,t=u.e[d],s=t.a
if(s<0)return"This bed is empty."
if(t.b>70)return"The patient is cared for already."
w=u.x
if(w<=0)return y.D
u.x=w-1
t.b=100;++u.r
w=u.c
w===$&&C.c()
v=w[s].a.b+" was treated. +1 point."
u.PA(v)
return v},
aDn(d){var w,v=this
switch(d){case"food":w=v.r
if(w<10)return"You need 10 points for 5 portions of food."
v.r=w-10
v.w+=5
return"You bought 5 portions of food."
default:w=v.r
if(w<12)return"You need 12 points for 3 doses of medicine."
v.r=w-12
v.x+=3
return"You bought 3 doses of medicine."}},
cQf(d){return d.r<0},
be6(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=C.a([],x.e3),e=d.d
e===$&&C.c()
w=e[a0]
if(w.c!=="outside")return f
v=new A.bJC(new A.bJE(w))
for(e=D.d.gaf(this.gC0()),u=new C.f5(e,this.gcQe()),t=this.d,s=0;u.C();){r=e.gR(0)
q=D.d.b3(t,new A.bJB(r))
p=v.$2(r,s).a
o=p[0]
n=p[1]
m=p[2]
l=p[3]
k=p[4]
p=r.a
j=q?0.4:m
i=q?"\ud83d\udcde ":""
h=r.gaDb(0)
r.gU3()
r=q?"":l
g=q?"":k
f.push(new A.a9J(p.a,a0,o,n,j,p.e,i+p.b+" "+h,q,0,r,g));++s}return f},
cWZ(a2){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.r,j=l.w,i=l.x,h=l.y,g=l.z,f=l.as,e=l.Q,d=x.ez,a0=C.a([],d),a1=l.c
a1===$&&C.c()
w=a1.length
v=x.N
u=x.aU
t=0
for(;t<a1.length;a1.length===w||(0,C.M)(a1),++t){s=a1[t]
a0.push(C.G(["hunger",s.b,"health",s.c,"comfort",s.d,"sick",s.e,"alive",s.f,"bed",s.r],v,u))}a1=C.a([],x.f4)
for(w=l.e,r=w.length,q=x.Y,t=0;t<w.length;w.length===r||(0,C.M)(w),++t){p=w[t]
a1.push(C.G(["res",p.a,"care",p.b,"heal",p.c],v,q))}d=C.a([],d)
for(w=l.d,r=w.length,t=0;t<w.length;w.length===r||(0,C.M)(w),++t){o=w[t]
d.push(C.G(["id",o.a,"res",o.b,"kind",o.c,"msg",o.d,"reward",o.e,"age",o.f],v,u))}w=x.R
u=C.T(v,w)
for(r=a2.gqM(),q=r.length,t=0;t<r.length;r.length===q||(0,C.M)(r),++t){n=r[t]
u.n(0,""+n.a,n.gkG())}w=C.T(v,w)
for(r=D.d.gaf(a2.gqM()),q=new C.f5(r,new A.bJF());q.C();){m=r.gR(0)
w.n(0,""+m.a,m.gjN())}return C.G(["v",1,"seed",l.a,"points",k,"food",j,"medicine",i,"served",h,"saved",g,"clock",f,"nextCall",e,"res",a0,"beds",a1,"calls",d,"wired",u,"plumbed",w],v,x.A)},
CN(d,e){return this.bn9(0,e)},
bn9(d,e){var w=0,v=C.j(x.H),u=1,t=[],s=this,r,q,p,o
var $async$CN=C.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return C.b(C.az(),$async$CN)
case 6:r=g
q=C.dP(s.cWZ(e),x.N,x.A)
J.aG(q,"at",Date.now())
w=7
return C.b(r.aq("String","ngmy_community_v1",D.T.ao(q,null)),$async$CN)
case 7:u=1
w=5
break
case 3:u=2
o=t.pop()
w=5
break
case 2:w=1
break
case 5:return C.h(null,v)
case 1:return C.f(t.at(-1),v)}})
return C.i($async$CN,v)}}
A.apk.prototype={
U(){return new A.bjC()}}
A.bjC.prototype={
gbiS(){var w=this.r
return w===$?this.r=this.a.c:w},
a_(){this.a2()
this.ZE()},
ZE(){return this.c0Y()},
c0Y(){var w=0,v=C.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$ZE=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:m={}
w=3
return C.b(A.aT7(),$async$ZE)
case 3:l=e
if(t.c==null){w=1
break}m.a=null
if(l!=null){s=J.a4(l)
r=C.aK(s.h(l,"seed"))
q=r==null?null:D.k.O(r)
if(q==null)q=1
r=$.E0
if((r==null?null:r.b)===q){r.toString
t.e=r}else{r=A.aVw(q)
t.e=$.E0=r
A.h80(r,l)}m.a=A.fVb(l)
r=Date.now()
s=C.aK(s.h(l,"at"))
s=s==null?null:D.k.O(s)
p=D.k.E((r-(s==null?Date.now():s))/1000*0.15,0,90)
while(p>0){o=p>5?5:p
s=m.a
r=t.e
r===$&&C.c()
s.aCT(0,o,r)
p-=o}}else{s=$.E0
if(s==null)s=$.E0=A.aVw(D.o.F(Date.now(),1e5))
t.e=s
s=s.b
n=A.fVa(s,s)
m.a=n
n.Nn(t.e)}$.ajC=m.a
t.m(new A.dPd(m,t))
t.f=C.dm(D.fS,new A.dPe(t))
case 1:return C.h(u,v)}})
return C.i($async$ZE,v)},
c6w(){var w,v,u,t=this,s=t.d
if(s==null||t.c==null)return
w=s.f
v=w.length===0?"":D.d.gI(w)
u=t.e
u===$&&C.c()
s.aCT(0,1,u)
if(w.length!==0&&D.d.gI(w)!==v)t.IV(D.d.gI(w))
if(++t.y%8===0)s.CN(0,t.e)
t.m(new A.dPq())},
t(){var w,v=this,u=v.f
if(u!=null)u.a3(0)
u=v.x
if(u!=null)u.a3(0)
u=v.d
if(u!=null){w=v.e
w===$&&C.c()
u.CN(0,w)}v.a1()},
IV(d){var w=this,v=w.x
if(v!=null)v.a3(0)
w.m(new A.dPk(w,d))
w.x=C.cL(D.tT,new A.dPl(w))},
abw(d){return this.bSy(d)},
bSy(d){var w=0,v=C.j(x.H),u,t=this,s,r,q
var $async$abw=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:q=B.CE[d.b]
if(d.c==="power")s=q.c
else{r=q.d
s=r>=0?r:q.c}r=t.e
r===$&&C.c()
r.e=s
r=t.c
r.toString
w=3
return C.b(C.a3(r,!1).cg(C.e_(new A.dP9(),!1,null,x.H)),$async$abw)
case 3:if(t.c==null){w=1
break}r=t.d
if(r!=null)r.Nn(t.e)
r=t.d
if(r!=null)r.CN(0,t.e)
t.m(new A.dPa())
case 1:return C.h(u,v)}})
return C.i($async$abw,v)},
ajH(d){return this.cEd(d)},
cEd(d){var w=0,v=C.j(x.H),u,t=this,s
var $async$ajH=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:s=t.e
s===$&&C.c()
s.e=d.a.c
s=t.c
s.toString
w=3
return C.b(C.a3(s,!1).cg(C.e_(new A.dPt(),!1,null,x.H)),$async$ajH)
case 3:if(t.c==null){w=1
break}s=t.d
if(s!=null)s.Nn(t.e)
t.m(new A.dPu())
case 1:return C.h(u,v)}})
return C.i($async$ajH,v)},
ZF(d,e){var w=null,v=e.j(0.18),u=C.m(14),t=C.I(e.j(0.7),D.r,1)
return C.p(w,C.d(d,w,w,w,w,w,w,C.l(w,w,e,w,w,w,w,w,w,w,w,12.5,w,w,D.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),D.f,w,w,new C.o(v,w,t,u,w,w,D.n),w,w,w,w,L.aiw,w,w,w)},
Wf(d,e,f){var w=null
return new C.D(D.nk,C.B(C.a([new C.a7(62,w,C.d(d,w,w,w,w,w,w,A2.a8R,w,w,w),w),C.E(C.bx(C.m(6),C.lk(D.bz,w,w,8,w,D.k.E(e/100,0,1),new C.m5(f,x.dw)),D.aq),1)],x.p),D.m,w,D.e,D.j,0,w,w),w)},
PB(d,e,f){var w=null,v=e==null,u=v?D.ds:f.j(0.22),t=C.m(12),s=C.I(v?D.aZ:f,D.r,1)
return C.aB(w,C.p(w,C.d(d,w,w,w,w,w,w,C.l(w,w,v?D.bU:f,w,w,w,w,w,w,w,w,12.5,w,w,D.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),D.f,w,w,new C.o(u,w,s,t,w,w,D.n),w,w,w,w,D.nm,w,w,w),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,e,w,w,w,w,w,w,!1,D.a4)},
ae0(d,e){return this.PB(d,e,D.aE)},
PC(d,e){var w=null,v=C.a([e.j(0.1),B.F9],x.O),u=C.m(18)
return C.p(w,d,D.f,w,w,new C.o(w,w,C.I(e.j(0.5),D.r,1),u,w,new C.a9(D.b3,D.b6,D.x,v,w,w),D.n),w,w,w,D.d1,D.bh,w,w,w)},
c6s(d){return this.PC(d,D.aZ)},
aZa(d,e,f){var w,v=null,u=this.gbiS()===d,t=u?D.aE.j(0.22):D.c.j(0.06),s=C.m(14),r=u?D.aE:D.aZ
r=C.I(r,D.r,u?2:1)
w=f>0?e+" ("+f+")":e
return C.E(C.aB(v,C.p(v,C.at(C.d(w,v,v,v,v,v,v,C.l(v,v,u?D.aE:D.ae,v,v,v,v,v,v,v,v,12.5,v,v,D.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,v),D.f,v,v,new C.o(t,v,r,s,v,v,D.n),v,v,v,D.jy,D.jM,v,v,v),D.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new A.dPs(this,d),v,v,v,v,v,v,!1,D.a4),1)},
ax6(d,e){return this.aZa(d,e,0)},
bFi(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=d.d
if(l.length===0)return new C.D(D.ey,C.x(B.deA,D.m,m,D.e,D.j,0,D.p),m)
w=x.p
v=C.a([],w)
for(u=l.length,t=0;t<l.length;l.length===u||(0,C.M)(l),++t){s=l[t]
r=s.c==="power"
q=r?D.bI:D.co
p=B.CE[s.b]
o=r?"\u26a1 Power":"\ud83d\udeb0 Leak"
r=r?D.bI:D.co
v.push(n.PC(C.x(C.a([new C.cb(D.aN,D.e,D.j,D.m,m,D.p,m,0,C.a([new A.acs(p.e,44,m),D.as,new C.bA(1,D.bd,new C.y(p.b,m,D.hx,m,m,m,m,m,m,m,m,m),m),n.ZF(o+"  +"+s.e,r)],w),m),D.N,new C.y('"'+s.d+'"',m,B.fho,m,m,m,m,m,m,m,m,m),D.R,new C.bL(D.a8,m,m,n.ae0("\ud83d\udd27 Go and fix it",new A.dP8(n,s)),m)],w),D.E,m,D.e,D.j,0,D.p),q))}return C.x(v,D.m,m,D.e,D.j,0,D.p)},
c6u(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=x.p,k=C.a([],l),j=d.c
j===$&&C.c()
w=j.length
v=0
for(;v<j.length;j.length===w||(0,C.M)(j),++v){u=j[v]
t=u.f
if(!t)s=D.aZ
else s=u.gU3()==="fine"?D.bm:D.cs
t=t?1:0.5
r=u.a
q=u.gaDb(0)
p=u.gU3()
o=u.gU3()==="fine"?D.eo:D.f3
r=C.a([new C.cb(D.aN,D.e,D.j,D.m,m,D.p,m,0,C.a([new A.acs(r.e,50,m),D.as,new C.bA(1,D.bd,C.x(C.a([new C.y(r.b+"  "+q,m,D.hx,m,m,m,m,m,m,m,m,m),new C.y(r.f,m,B.aRa,m,m,m,m,m,m,m,m,m),new C.y("Now: "+p,m,new C.F(!0,o,m,m,m,m,12.5,D.H,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m,m,m,m,m,m,m)],l),D.E,m,D.e,D.j,0,D.p),m)],l),m),D.N,n.Wf("Food",100-u.b,D.cZ),n.Wf("Health",u.c,D.bm),n.Wf("Home",u.d,D.co)],l)
if(u.f){q=n.ae0("\ud83c\udf5e Feed",new A.dPf(n,d,u))
p=n.PB("\ud83d\udc8a Medicine",u.e?new A.dPg(n,d,u):m,D.by)
D.d.v(r,C.a([D.am,new C.Cv(D.bD,8,8,D.bq,C.a([q,p,n.PB("\ud83c\udfe5 Hospital",u.r>=0?m:new A.dPh(n,d,u),D.cs),n.PB("\ud83c\udfe0 Visit",new A.dPi(n,u),D.b2)],l),m)],l))}k.push(n.PC(new C.kw(t,C.x(r,D.E,m,D.e,D.j,0,D.p),m),s))}return C.x(k,D.m,m,D.e,D.j,0,D.p)},
c6t(d){var w,v,u,t,s=null,r=x.p,q=C.a([B.eh_],r)
for(w=d.e,v=0;v<w.length;++v){u=w[v].a<0
t=u?D.aZ:D.cs
q.push(this.PC(u?new C.cb(D.aN,D.e,D.j,D.m,s,D.p,s,0,C.a([B.fGz,D.as,new C.y("Bed "+(v+1)+": empty",s,B.faW,s,s,s,s,s,s,s,s,s)],r),s):new C.fd(new A.dPc(this,d,v),s),t))}return C.x(q,D.m,s,D.e,D.j,0,D.p)},
c6v(d){var w=this,v=null,u=x.p,t=w.PC(C.B(C.a([B.fs8,D.as,B.bCr,w.ae0("Buy",new A.dPn(w,d))],u),D.m,v,D.e,D.j,0,v,v),D.cZ),s=w.PC(C.B(C.a([B.fNz,D.as,B.bCH,w.PB("Buy",new A.dPo(w,d),D.by)],u),D.m,v,D.e,D.j,0,v,v),D.by),r=C.a([B.fHz,D.am,C.d("Calls answered: "+d.y+"\nPatients sent home better: "+d.z+"\nPeople lost: "+d.gcLg(),v,v,v,v,v,v,B.aS7,v,v,v)],u)
if(d.gC0().length===0)D.d.v(r,C.a([D.R,w.ae0("Start a new community",new A.dPp(w))],u))
return C.x(C.a([t,s,w.c6s(C.x(r,D.E,v,D.e,D.j,0,D.p))],u),D.m,v,D.e,D.j,0,D.p)},
B(d){var w,v,u,t,s,r,q=this,p=null,o=q.d
if(o==null)w=D.mp
else{w=x.p
v=C.B(C.a([C.aJ(p,p,p,p,R.ns,p,p,p,new A.dPv(d),p,p,p,p,p,p),B.bC7,q.ZF("\u2b50 "+o.r,D.aE)],w),D.m,p,D.e,D.j,0,p,p)
u=q.ZF("\ud83c\udf5e "+o.w,D.cZ)
t=q.ZF("\ud83d\udc8a "+o.x,D.by)
s=o.e
s=C.B(C.a([u,D.ab,t,D.ab,q.ZF("\ud83c\udfe5 "+new C.Z(s,new A.dPw(),C.S(s).k("Z<1>")).gL(0)+"/"+s.length,D.cs)],w),D.m,p,D.b8,D.j,0,p,p)
t=C.B(C.a([q.aZa("calls","\ud83d\udcde Calls",o.d.length),q.ax6("people","\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc67 People"),q.ax6("hospital","\ud83c\udfe5 Hospital"),q.ax6("shop","\ud83d\uded2 Shop")],w),D.m,p,D.e,D.j,0,p,p)
r=q.gbiS()
A:{if("people"===r){u=q.c6u(o)
break A}if("hospital"===r){u=q.c6t(o)
break A}if("shop"===r){u=q.c6v(o)
break A}u=q.bFi(o)
break A}w=C.a([new C.D(B.bAz,v,p),new C.D(D.Bu,s,p),new C.D(B.bBs,t,p),D.N,C.E(C.cq(C.a([u],w),p,D.MP,p,p,D.ag,!1),1)],w)
if(q.w!=null){v=D.dY.j(0.96)
u=C.m(14)
t=C.I(D.bm,D.r,1)
s=q.w
s.toString
w.push(C.p(p,C.d(s,p,p,p,p,p,p,B.fdw,p,p,p),D.f,p,p,new C.o(v,p,t,u,p,p,D.n),p,p,p,G.aiz,D.bh,p,p,1/0))}w=C.x(w,D.m,p,D.e,D.j,0,D.p)}return C.c5(p,D.bZ,C.bm(!0,w,!0,!1,D.af,!0,!0),p,!1,!1,p,p)}}
A.acs.prototype={
B(d){var w=null,v=this.d
return new C.a7(v,v,C.b4(w,w,w,new A.beA(this.c,w),D.ax),w)},
gY(d){return this.d}}
A.beA.prototype={
a5(d,e){var w,v,u,t,s=e.a,r=s/2,q=$.V(),p=C.K()
p.r=D.ds.gp(0)
d.ae(new C.t(r,r),r,p)
p=d.a
J.bq(p.save())
q=new C.aI(q.r,D.ai,null,null,C.a([],x.g))
r=0+s
q.D(new C.jC(new C.a5(0,0,r,r)))
d.mE(0,q)
q=s*0.1
r=s*0.78
w=s*0.5
v=C.K()
u=this.b
v.r=u.c.gp(0)
d.dX(new C.a5(q,r,q+s*0.8,r+w),v)
v=s*0.27
r=s*0.16
t=C.K()
t.r=u.a.gp(0)
d.dX(new C.a5(v,r,v+s*0.46,r+s*0.56),t)
t=s*0.24
r=C.K()
r.r=u.b.gp(0)
d.e2(new C.a5(t,q,t+s*0.52,q+w),3.14,3.14,!0,r)
r=s*0.44
q=s*0.035
t=C.K()
t.r=D.nb.gp(0)
d.ae(new C.t(s*0.42,r),q,t)
t=C.K()
t.r=D.nb.gp(0)
d.ae(new C.t(s*0.58,r),q,t)
t=s*0.4
q=C.K()
q.b=D.ac
q.c=1.4
q.r=D.ev.gp(0)
d.e2(new C.a5(t,w,t+s*0.2,w+s*0.12),0.2,2.7,!1,q)
p.restore()},
av(d){return!1}}
A.fH.prototype={}
A.Cu.prototype={}
A.jy.prototype={}
A.SP.prototype={}
A.b8o.prototype={
gjL(){return this.a==="ok"}}
A.ma.prototype={}
A.fn.prototype={}
A.DX.prototype={}
A.pO.prototype={}
A.abr.prototype={}
A.oh.prototype={}
A.aVq.prototype={
gwy(){var w=this.c
return w.c>=2&&A.L_(A.t0(this.a),w).a==="ok"},
gdc(d){return this.c}}
A.a51.prototype={
gyZ(){var w,v,u=this.p4,t=u==="ptrap"
if(t||u==="faucet"){w=this.RG
if(w==null)return!1
if(t)if(w.a.a===3){u=w.b
u=new C.bc(u,C.a6(u).k("bc<2>")).d9(0,new A.bSz())&&w.c}else u=!1
else u=A.fvM(w)&&w.f
return u}v=this.R8
return v!=null&&v.c>=2&&A.L_(A.t0(u),v).a==="ok"},
If(d){var w
if(this.c!=="outside"){w=this.CW
w=w!=null?w.tb(d):!this.ay}else w=!0
return w},
ga5L(){var w=this.p4
if(w.length===0)w=this.If(2)
else w=w!=="fan"||this.gyZ()
return w},
gM1(){var w=this.p4
if(w.length===0)w=this.If(3)
else w=!D.d.q(B.jS,w)||this.gyZ()
return w},
gan8(){var w=this.p4
if(w.length===0)w=this.If(0)
else w=!D.d.q(B.lG,w)||this.gyZ()
return w},
gev(d){var w,v
if(this.ok)w=260
else{v=this.c
A:{if("bathroom"===v){w=110
break A}if("kitchen"===v){w=140
break A}if("living"===v){w=180
break A}if("hall"===v){w=480
break A}if("outside"===v){w=2600
break A}w=130
break A}}return w},
ghn(d){var w,v=180
if(!this.ok){w=this.c
A:{if("bathroom"===w){v=100
break A}if("kitchen"===w){v=110
break A}if("living"===w){v=120
break A}if("hall"===w)break A
if("outside"===w){v=2100
break A}v=112
break A}}return v},
gkG(){var w,v=this
if(v.c!=="outside"){w=v.p4
if(w.length!==0)w=w==="ptrap"||w==="faucet"||v.gyZ()
else{w=v.CW
w=w==null?null:w.gbjD()
if(w==null)w=!v.ay}}else w=!0
return w},
gjN(){var w=this,v=w.c
if(v==="bathroom"||v==="kitchen"){v=w.p4
if(v.length!==0)v=!(v==="ptrap"||v==="faucet")||w.gyZ()
else{v=w.fr
v=v==null?null:v.gwy()
if(v==null)v=!w.ch}}else v=!0
return v},
BO(d){var w,v,u,t
for(w=this.x,v=w.length,u=0;u<v;++u){t=w[u]
if(t.a===d)return t}return null},
dw(d,e,f,g){var w=this,v=w.y++,u=f==null?0:f,t=new A.ma(v,e,u,g==null?w.ghn(0)*0.6:g)
w.x.push(t)
w.a3F(0,t)
return t},
M(d,e){return this.dw(0,e,null,null)},
cHi(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=d.k1
if(a0!=null){w=d.c
w=w==="outside"||w==="hall"}else w=!0
if(w)return
v=A.h5f(d,A.aOX(a0),0)
w=v.c
u=v.a/2
t=w-u-6
s=w+u+6
for(w=D.d.gaf(d.x),u=new C.f5(w,new A.bSy());u.C();){r=w.gR(0)
q=B.ht.h(0,r.b)
q.toString
p=(r.e&1)===1
o=p?q.d:q.c
n=p?q.c:q.d
q=d.p1
if(q==="back"){q=n/2
if(!(r.d-q>=52)){m=r.c
l=o/2
m=m+l<=t||m-l>=s}else m=!0
if(m)continue
m=o/2
k=s+m+1
j=t-m-1
i=d.gev(0)/2-m-1
m=k<=i
if(m){l=r.c
l=Math.abs(l-k)<=Math.abs(l-j)}else l=!1
if(!l)m=j<-i&&m
else m=!0
if(m)r.c=k
else if(j>=-i)r.c=j
else r.d=52+q+1}else{q=q==="left"
h=q?-d.gev(0)/2:d.gev(0)/2
m=r.c
l=o/2
if(q?m-l<h+52:m+l>h-52){m=r.d
g=n/2
m=m+g<=t||m-g>=s}else m=!0
if(m)continue
m=n/2
f=s+m+1
e=t-m-1
if(f<=d.ghn(0)-m-1)r.d=f
else if(e>=m+1)r.d=e
else r.c=q?h+52+l+1:h-52-l-1}}},
a3F(d,e){var w,v,u,t,s,r=this,q=e.b,p=B.ht.h(0,q)
p.toString
w=(e.e&1)===1
v=w?p.d:p.c
u=w?p.c:p.d
p=v/2
e.c=D.k.E(e.c,-r.gev(0)/2+p+1,r.gev(0)/2-p-1)
p=e.d
t=u/2
s=r.c==="outside"?-760+t:t+1
e.d=D.k.E(p,s,r.ghn(0)-t-1)
if(D.d.q(B.Rg,q)){e.c=D.k.V(e.c/40)*40
e.d=D.k.V(e.d/40)*40}}}
A.aVv.prototype={
byb(d){var w,v,u
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
break B}u=A.zc(0,w,v,0,0,1,1,C.a([],x.dY))
u.p4=d
u.go=d==="fan"?"fan":"light"
if(d==="gfci")u.Q=5
u.ch=u.ay=!1
u.Q=v==="bathroom"||v==="kitchen"?5:0
u.ok=!0
u.k1="tv150"
u.p2=!0
u.p3=Math.max(0,D.d.bg(E.ki,new A.bT9()))
this.d=C.a([u],x.D)},
cR6(){var w,v,u,t,s,r
for(w=this.gqM(),v=w.length,u=0;u<w.length;w.length===v||(0,C.M)(w),++u){t=w[u]
t.fr=t.CW=null
s=t.ay=!0
r=t.c
t.ch=r!=="bathroom"?r==="kitchen":s
t.fy=!1
t.fx.a8(0)
D.d.a8(t.id)}},
c6x(){var w,v,u,t,s,r,q,p=this,o="back",n="bedroom",m="bathroom",l=new C.eb()
l.d5(p.b)
w=new A.bTa()
v=x.dY
u=C.a([B.bG0,B.bFY,B.bFZ],v)
for(t=0;t<7;++t){s=B.cgL[t]
u.push(new A.oh(!0,o,-150+s.a*50,s.b))}r=p.d=C.a([A.zc(0,"Bedroom 1",n,0,0,2,2,C.a([w.$1(-48)],v)),A.zc(1,"Bedroom 2",n,2,0,2,2,C.a([w.$1(-48)],v)),A.zc(2,"Bathroom 1",m,4,0,1,2,C.a([B.a_Z],v)),A.zc(3,"Bedroom 3",n,5,0,2,2,C.a([w.$1(-48)],v)),A.zc(4,"Bathroom 2",m,7,0,2,2,C.a([B.a_Z],v)),A.zc(5,"Hall","hall",0,2,9,1,u),A.zc(6,"Bedroom 4",n,0,3,2,2,C.a([w.$1(-48)],v)),A.zc(7,"Bedroom 5",n,2,3,2,2,C.a([w.$1(-48)],v)),A.zc(8,"Bathroom 3",m,4,3,1,2,C.a([B.a_Z],v)),A.zc(9,"Kitchen","kitchen",5,3,2,2,C.a([new A.oh(!1,o,-26,5),B.bG2],v)),A.zc(10,"Living room","living",7,3,2,2,C.a([new A.oh(!1,o,-70,5),B.bG1,B.bG_],v)),A.zc(11,"Garden","outside",0,5,9,1,C.a([B.bFX],v))],x.D)
for(v=r.length,t=0;t<r.length;r.length===v||(0,C.M)(r),++t){q=r[t]
u=q.c
if(u==="outside"){p.aTv(q)
continue}q.go=u==="bedroom"?"fan":"light"
q.ay=l.aj()<0.6
q.ch=(u==="bathroom"||u==="kitchen")&&l.aj()<0.7
D.d.ht(q.z,0,3,l.au(8))
A:{if("bathroom"===u){u=5+l.au(2)
break A}if("kitchen"===u){u=5+l.au(2)
break A}if("bedroom"===u){u=2+l.au(3)
break A}if("living"===u){u=l.au(2)
break A}u=l.au(2)
break A}q.Q=u
q.as=l.au(4)
p.aTv(q)}v=p.d
u=v[5]
u.k2=u.k1="tv100"
u.p2=!0
v[3].ay=!0
v[2].ch=!0},
aTv(b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4="plant",a5="roadcross",a6="road",a7="roundabout",a8="house2",a9="bighouse",b0="adboard",b1="flowers",b2=b3.gev(0)/2
switch(b3.c){case"bedroom":b3.dw(0,"rug",0,b3.ghn(0)*0.55)
b3.dw(0,"bed",24,46)
b3.dw(0,"nightstand",-8,14)
b3.dw(0,"wardrobe",-b2+12,70).e=1
b3.dw(0,"desk",b2-14,100).e=3
break
case"living":b3.dw(0,"rug",0,70)
b3.dw(0,"sofa",0,100)
b3.dw(0,"coffee",0,68)
b3.dw(0,"armchair",66,70)
b3.dw(0,a4,76,14)
b3.dw(0,"lamp",-76,14)
break
case"kitchen":b3.dw(0,"dining",0,78)
b3.dw(0,"chair",-24,78).e=1
b3.dw(0,"chair",24,78).e=3
b3.dw(0,a4,58,20)
break
case"bathroom":b3.dw(0,"rug",0,62).e=0
b3.dw(0,a4,b3.gev(0)/2-12,b3.ghn(0)-12)
break
case"outside":for(w=-780;w<=780;w+=40){v=Math.abs(w)<1
b3.dw(0,v?a5:a6,w,420)
b3.dw(0,v?a5:a6,w,860)}for(u=200;u<=820;u+=40){if(Math.abs(u-420)<1||Math.abs(u-860)<1)continue
b3.dw(0,a6,0,u).e=1}for(t=0;t<2;++t){s=B.dig[t]
for(u=460;u<859;u+=40)b3.dw(0,a6,s,u).e=1}for(t=0;t<3;++t){s=B.dif[t]
b3.dw(0,a7,s,420)
b3.dw(0,a7,s,860)}r=new A.bTb(b3)
b3.dw(0,"shop",-250,225)
b3.dw(0,"hospital",250,215)
b3.dw(0,"firestation",-480,225)
b3.dw(0,"school",520,210)
for(t=0;t<14;++t){v=B.d6C[t]
w=v.a
u=v.b
if(r.$4(w,u,60,40))b3.dw(0,"billboard",w,u)}for(t=0;t<4;++t){v=B.dmk[t]
w=v.a
u=v.b
if(r.$2(w,u))b3.dw(0,a8,w,u)}for(t=0;t<3;++t){v=B.cVd[t]
u=v.a
q=v.b
p=v.c
for(v=u<900,w=-800;w<=800;w+=q){o=Math.abs(w)
if(o<100)continue
if(v&&o>400)continue
if(r.$2(w,u))b3.dw(0,p&&D.o.F(D.k.e9(w,q),2)===0?a9:a8,w,u)}}for(t=0;t<2;++t){v=B.cu2[t]
w=v.a
u=v.b
if(r.$2(w,u))b3.dw(0,a9,w,u)}for(w=-1220;w<=1220;w+=40){if(Math.abs(w)>780){b3.dw(0,a6,w,420)
b3.dw(0,a6,w,860)}b3.dw(0,a6,w,1460)
b3.dw(0,a6,w,1700)}for(u=900;u<1459;u+=40)b3.dw(0,a6,0,u).e=1
v=C.a([],x._)
for(o=b3.x,n=o.length,t=0;t<o.length;o.length===n||(0,C.M)(o),++t){m=o[t]
l=m.b
if(D.d.q(B.Rg,l)||l==="roundabout")v.push(m)}k=new A.bTd(v,b3)
j=new A.bTe(b3,new A.bTh(b3))
j.$3("gasstation",6,B.d1u)
j.$3("dmv",1,B.dp0)
j.$3("ubstation",3,B.cTs)
i=0
h=0
for(;;){if(!(h<7&&i<90))break
u=-560+h*300
v=h*3
o=u<100
g=0
for(;;){if(!(g<=5&&i<90))break
A:{w=-1150+g*420
if(Math.abs(w)<170&&o)break A
f=D.o.F(g*7+v,5)===0?a9:a8
e=B.ht.h(0,f)
if(k.$4(w,u,e.c,e.d)){b3.dw(0,f,w,u);++i}}++g}++h}for(d=0,t=0;t<11;++t,d=a0){v=B.cW8[t]
a0=d+1
b3.dw(0,v.b,v.a,1560).f=D.o.F(d,6)}for(t=0;t<11;++t,d=a0){v=B.dkf[t]
a0=d+1
b3.dw(0,v.b,v.a,1860).f=D.o.F(d,6)}b3.dw(0,"townsign",0,640)
for(t=0;t<4;++t){v=B.deP[t]
b3.dw(0,"cornersign",v.a,v.b)}for(t=0;t<5;++t)b3.dw(0,b0,B.d4N[t],2045)
for(t=0;t<4;++t)b3.dw(0,b0,B.dij[t],-690)
for(t=0;t<4;++t){u=B.coq[t]
a1=b3.dw(0,b0,-1245,u)
a1.e=1
a1.c=-1245
b3.a3F(0,a1)
a2=b3.dw(0,b0,1245,u)
a2.e=3
a2.c=1245
b3.a3F(0,a2)}for(w=-1200;w<=1200;w+=480){for(t=0;t<4;++t)b3.dw(0,"pole",w,B.csL[t])
for(v=Math.abs(w)<1100,o=w+240,t=0;t<4;++t){u=B.czS[t]
if(v)b3.dw(0,"lamppost",o,u)}}b3.dw(0,"car",-300,490).e=2
b3.dw(0,"ambulance",110,345)
b3.dw(0,"firetruck",-385,345)
for(t=0;t<10;++t){v=B.dnV[t]
w=v.a
u=v.b
b3.dw(0,Math.abs(w)>400||u>1000?"pine":"tree",w,u)}b3.dw(0,"bush",-70,20)
b3.dw(0,"bush",70,20)
b3.dw(0,b1,-30,24)
b3.dw(0,b1,30,24)
b3.dw(0,b1,90,205)
b3.dw(0,"bench",-60,195)
b3.dw(0,"bench",150,300)
b3.dw(0,"pond",-160,1340)
b3.dw(0,"dog",60,60)
b3.dw(0,"cat",-50,80)
b3.dw(0,"cow",-640,1280)
b3.dw(0,"cow",-570,1330)
b3.dw(0,"sheep",-500,1300)
b3.dw(0,"horse",560,1330)
b3.dw(0,"chicken",-440,1340)
for(a3=0;a3<4;++a3)b3.dw(0,"fence",-680+a3*64,1220)
for(t=0;t<6;++t){v=B.czq[t]
b3.dw(0,"crate",v.a,v.b)}break
case"hall":default:}},
gqM(){var w,v,u,t=C.a([],x.D),s=this.d
s===$&&C.c()
w=s.length
v=0
for(;v<s.length;s.length===w||(0,C.M)(s),++v){u=s[v]
if(u.c!=="outside")t.push(u)}return t},
gcXK(){var w=this.gqM()
return new C.Z(w,new A.bTl(),C.S(w).k("Z<1>")).gL(0)},
gcUu(){var w=this.d
w===$&&C.c()
return new C.Z(w,new A.bTk(),C.S(w).k("Z<1>")).gL(0)},
gcUt(){var w=this.d
w===$&&C.c()
return new C.Z(w,new A.bTj(),C.S(w).k("Z<1>")).gL(0)},
gcNe(){var w=this.gqM()
return new C.Z(w,new A.bTi(),C.S(w).k("Z<1>")).gL(0)}}
A.IM.prototype={
U(){var w,v,u,t,s=new C.y6()
$.yQ()
s.hj(0)
w=$.ax()
v=$.ht_()
u=x.S
t=C.a([],x.aQ)
return new A.aE3(s,B.ayw,new C.eJ("",w),B.dd4,B.ry,B.ry,D.CL,C.aX(x.N),new C.cz(null,x.eF),v,C.T(u,x.i),C.aX(u),t,D.cW)}}
A.aE3.prototype={
ghH(){var w,v,u=$.ajC
if(u!=null){w=u.a
v=this.d
v===$&&C.c()
v=w===v.b
w=v}else w=!1
return w?u:null},
azc(){var w,v,u=this.ghH()
if(u==null)u=null
else{w=this.d
w===$&&C.c()
v=w.d
v===$&&C.c()
w=u.be6(w,v[w.e].a)
u=w}this.fr=u==null?B.ayw:u},
gbhO(){var w=this.d
w===$&&C.c()
w=w.gqM()
return new C.Z(w,new A.e9S(),C.S(w).k("Z<1>")).gL(0)},
a_(){var w,v,u,t,s,r=this
r.a2()
w=r.a.r
if(w.length!==0)w=r.d=A.hBT(w)
else{w=$.E0==null
if(w){w=D.o.F(Date.now(),1e5)
$.E0=A.aVw(w)
r.eh=!0}w=$.E0
w.toString
w=r.d=w}v=r.a
v.toString
u=w.c
w.c=u
u=new A.x7(-0.05,0.1,120,B.fSa,$.ax())
u.f=560
r.e=u
v=v.f
if(v==="city")w.e=11
if(v.length!==0){w=w.gqM()
t=new C.Z(w,new A.e9P(r),C.S(w).k("Z<1>"))
if(!t.gam(0)){w=r.d
w===$&&C.c()
w.e=t.gI(0).a}}A.aVi($.ahn)
A.hdS()
r.aiy()
r.azc()
w=r.d
w===$&&C.c()
v=w.d
v===$&&C.c()
w=v[w.e]
v=r.gbhO()
u=r.d
s=u.d
s===$&&C.c()
r.f=A.hnP(w,s[u.e].c!=="outside",B.aP0,"look",v,r.fr,0)
r.ae1(!0)
r.YH()
r.fx=C.dm(D.fT,new A.e9Q(r))
$.aW.x1$.push(new A.e9R(r))},
t(){var w=this,v=w.p1
if(v!=null)v.bR(0)
v=w.RG
if(v!=null)v.bR(0)
v=w.b1
if(v!=null)v.bR(0)
v=w.ch
if(v!=null)v.a3(0)
v=w.dx
if(v!=null)v.a3(0)
v=w.fx
if(v!=null)v.a3(0)
v=w.bu
if(v!=null)v.a3(0)
v=w.P
if(v!=null)v.a3(0)
w.a1()},
c0s(){var w,v=this.d
v===$&&C.c()
w=v.a
A:{if("switch"===w){v="The ceiling light is already in. Tap the red switch on the wall and wire it. Then flip it to see the light work."
break A}if("outlet"===w){v="Tap the red outlet on the wall and wire it. Then plug in a lamp or a TV to test it."
break A}if("gfci"===w){v="Tap the red GFCI outlet and wire it. Then plug in a hair dryer to test it."
break A}if("fan"===w){v="Tap the ceiling fan and wire it. Then flip the wall switch and watch it spin."
break A}if("ptrap"===w){v="The sink has no drain yet. Tap the sink and build the drain under it."
break A}v="The faucet is not connected yet. Tap the sink and connect the hoses."
break A}return v},
ae1(d){var w,v,u,t,s,r,q=this,p=q.d
p===$&&C.c()
w=p.d
w===$&&C.c()
v=w[p.e]
if(q.z){u=new A.r(0,40,v.ghn(0)*0.5)
t=Math.max(v.gev(0),v.ghn(0))*0.6
p=q.e
p===$&&C.c()
p.e=20
p.f=260
p.w=-1.2
p.x=1.2
p.r2(!0)
s=0.12
r=-0.05}else if(v.c==="outside"){p=q.e
p===$&&C.c()
p.e=30
p.f=2400
p.w=0.03
p.x=1.35
p.r2(!0)
u=B.fS7
t=540
s=0.35
r=-0.25}else if(q.x){u=new A.r(0,46,v.ghn(0)*0.1)
t=v.ghn(0)*0.74
p=q.e
p===$&&C.c()
p.e=6
p.f=v.ghn(0)*0.78
p.w=0.02
p.x=1.35
p.r2(!0)
s=0.05
r=0}else{u=new A.r(0,30,v.ghn(0)*0.45)
t=(v.gev(0)*1.2>v.ghn(0)*1.4?v.gev(0)*1.2:v.ghn(0)*1.4)+30
p=q.e
p===$&&C.c()
p.e=6
p.f=560
p.w=0.1
p.x=1.35
p.r2(!0)
s=0.5
r=-0.12}p=q.e
if(d){p===$&&C.c()
p.d=u
p.c=t
p.a=r
p.b=s}else{p===$&&C.c()
p.hP(t,s,u,r)}},
xR(){return this.ae1(!1)},
bMw(d,e){var w,v,u,t,s,r,q,p,o=this,n=o.e
n===$&&C.c()
w=n.cNn(d,e)
if(w==null)return
n=o.d
n===$&&C.c()
v=n.d
v===$&&C.c()
u=v[n.e]
t=o.aH
if(t!=null){n=t.at
n===$&&C.c()
n.at=new C.z(D.k.E(w.a,-138,138),D.k.E(w.c,12,316))}else if(o.z){s=D.k.E(w.a,-u.gev(0)/2+10,u.gev(0)/2-10)
r=D.k.E(w.c,10,u.ghn(0)-10)
o.e.apn(new A.r(s,48,r))}else{n=u.c==="outside"
if(n&&o.aK&&o.aB!=null){n=o.aB
n.toString
n.at=new C.z(D.k.E(w.a,-u.gev(0)/2+12,u.gev(0)/2-12),D.k.E(w.c,-290,u.ghn(0)-12))}else{v=o.e
q=w.a
p=w.c
if(n)v.apo(Math.max(70,v.c*0.4),0.32,new A.r(q,30,p))
else{n=D.k.E(q,-u.gev(0)/2+8,u.gev(0)/2-8)
p=D.k.E(p,8,u.ghn(0)-8)
v.apo(Math.max(36,o.e.c*0.35),0.2,new A.r(n,40,p))}}}A.fU(560,50,0.25,"tri")},
iB(){var w,v,u,t,s,r,q,p,o=this
o.azc()
w=o.aH
if(w!=null){v=w.ay
v===$&&C.c()}else{v=o.d
v===$&&C.c()
u=v.d
u===$&&C.c()
v=u[v.e]
u=o.r
t=o.Q
s=o.gbhO()
if(!o.z)if(o.x){r=o.d
q=r.d
q===$&&C.c()
r=q[r.e].c!=="outside"&&o.cx==null}else r=!1
else r=!0
q=o.fr
p=o.bD
v=A.hnP(v,r,p!=null?C.ey([100+p.a],x.S):B.aP0,u,s,q,t)}o.f=v},
ef(d,e){var w=this,v=w.ch
if(v!=null)v.a3(0)
w.m(new A.e8C(w,d,e))
w.ch=C.cL(D.em,new A.e8D(w))},
iC(d){return this.ef(d,!0)},
PD(d){this.m(new A.e8E(this,d))
A.fU(660,50,0.25,"tri")},
ax7(d,e){var w,v=this,u=v.d
u===$&&C.c()
if(d!==u.e){u=u.d
u===$&&C.c()
u=d>=u.length}else u=!0
if(u)return
if(v.aK&&d!==11)v.a2o()
v.cK=v.bD=v.aH=null
if(!e&&v.cx!=null)v.RT()
v.m(new A.e7a(v,d))
u=v.d
w=u.d
w===$&&C.c()
u=w[u.e]
if(u.c==="outside")v.aB=A.hhi(u,0,24)
v.xR()
A.fU(520,60,0.25,"tri")},
Au(d){return this.ax7(d,!1)},
aWV(d){var w,v,u,t=this
if(d===700){w=t.d
w===$&&C.c()
v=w.d
v===$&&C.c()
return v[w.e].gan8()}if(d===701){w=t.d
w===$&&C.c()
v=w.d
v===$&&C.c()
w=v[w.e]
return w.p4.length!==0||w.If(1)}if(d===702){w=t.d
w===$&&C.c()
v=w.d
v===$&&C.c()
return v[w.e].gM1()}if(d===703){w=t.d
w===$&&C.c()
v=w.d
v===$&&C.c()
return v[w.e].ga5L()}if(d>=800&&d<820){u=d-800
w=t.d
w===$&&C.c()
v=w.d
v===$&&C.c()
w=v[w.e].id
return u<w.length&&w[u].gwy()}if(d===720){w=t.d
w===$&&C.c()
v=w.d
v===$&&C.c()
return v[w.e].gan8()}if(d===721){w=t.d
w===$&&C.c()
v=w.d
v===$&&C.c()
w=v[w.e]
return w.p4.length!==0||w.If(1)}if(d>=722&&d<728){u=d-720-2
w=t.d
w===$&&C.c()
v=w.d
v===$&&C.c()
w=v[w.e].id
return u<w.length&&w[u].gwy()}w=t.d
w===$&&C.c()
v=w.d
v===$&&C.c()
return v[w.e].gkG()},
b8_(){var w,v,u=this,t=u.d
t===$&&C.c()
w=t.d
w===$&&C.c()
v=w[t.e].go==="fan"
u.m(new A.e94(u))
t=u.d
w=t.d
w===$&&C.c()
if(w[t.e].fy)t=v?"The fan spins.":"The light is on."
else t=v?"The fan stops.":"The light is off."
u.iC(t)
t=u.d
w=t.d
w===$&&C.c()
A.fU(w[t.e].fy?900:500,60,0.25,"tri")},
c6F(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this
if(a0===0)return
if(a0>=19e3&&a0<19004){w=a0-19e3
v=d.d
v===$&&C.c()
u=v.d
u===$&&C.c()
t=u[v.e]
v=D.o.F(w,2)===0?-1:1
s=v*(t.gev(0)/2-14)
r=w<2?14:t.ghn(0)-14
q=Math.atan2(-s,-(t.ghn(0)/2-r))
w=Math.cos(0.12)
v=Math.sin(q)
u=Math.sin(0.12)
p=Math.cos(0.12)
o=Math.cos(q)
n=d.e
n===$&&C.c()
n.e=6
n.hP(26,0.12,new A.r(s+26*w*v,106-26*u,r-26*p*o),q)
d.ef("You are looking from the camera in the corner. Drag to look round, or tap a camera for another corner.",!0)
A.fU(700,70,0.25,"tri")
return}if(a0>=2e4&&a0<23e3){w=d.d
w===$&&C.c()
v=w.d
v===$&&C.c()
m=v[w.e].BO(a0-2e4)
if(m!=null)d.bSA(m)
return}if(a0===19502){w=d.aH
if((w==null?null:w.a==="tower")===!0)d.m(new A.e87(d))
return}if(a0===19500||a0===19501){l=d.aH
if(l!=null)if(l.c)d.Yf(l)
else d.ef("This one works: the house has power.",!0)
return}if(a0>=900&&a0<920){d.cpD(a0-900)
return}if(a0>=100&&a0<200){w=d.d
w===$&&C.c()
v=w.d
v===$&&C.c()
k=v[w.e].BO(a0-100)
w=d.d
v=w.d
v===$&&C.c()
u=!1
if(v[w.e].c==="outside")if(d.r!=="furniture")if(k!=null){w=k.b
w=w==="hospital"||w==="shop"}else w=u
else w=u
else w=u
if(w){d.zY(k.b)
return}if(d.r!=="furniture")return
d.m(new A.e88(d,a0))
w=d.d
v=w.d
v===$&&C.c()
m=v[w.e].BO(d.Q)
if(m!=null)d.iC(B.ht.h(0,m.b).a+": move it with the arrows.")
return}if(a0===300||a0===301||a0===302){if(d.r!=="walls")return
d.m(new A.e89(d,a0))
d.iC("Wall picked. Choose a paint colour.")
return}if(a0>=600&&a0<620){j=a0-600
w=d.d
w===$&&C.c()
v=w.d
v===$&&C.c()
if(j>=v[w.e].w.length)return
if(d.r==="doors"){d.m(new A.e8a(d,j))
w=d.d
v=w.d
v===$&&C.c()
A.fU(v[w.e].at.q(0,j)?700:450,70,0.25,"tri")
return}d.bMp(j)
return}w=a0===700
v=!w
i=!0
if(v)if(a0!==701){if(a0!==702)if(a0!==703)if(!(a0>=800&&a0<820))u=a0>=720&&a0<728
else u=i
else u=i
else u=i
i=u}if(d.w&&i){h=d.aWV(a0)
A.fU(h?1400:500,160,0.25,"tri")
w=h?"The tester glows and beeps: LIVE, 120 volts. Never touch a live wire. Switch the breaker off first.":"The tester stays dark: no power here. It still needs wiring."
d.ef(w,!h)
return}if(!v||a0===701){if(d.aWV(a0))d.ayO(w?0:1)
else d.aTb()
return}if(a0>=800&&a0<820){j=a0-800
w=d.d
w===$&&C.c()
v=w.d
v===$&&C.c()
w=v[w.e].id
if(j>=w.length)return
g=w[j]
if(!g.gwy())d.ajP(j)
else if(g.a==="switch")d.b8_()
else d.ayO(2+j)
return}if(a0===702||a0===703){w=d.d
w===$&&C.c()
v=w.d
v===$&&C.c()
if(v[w.e].gM1()){w=d.d
v=w.d
v===$&&C.c()
w=!v[w.e].ga5L()}else w=!0
if(w)d.aTb()
else d.b8_()
return}if(a0>=730&&a0<=733){w=a0===730||a0===732
v=d.d
if(w){v===$&&C.c()
w=v.d
w===$&&C.c()
u=v.e
f=w[u].k1}else{v===$&&C.c()
w=v.d
w===$&&C.c()
u=v.e
p=w[u]
o=p.k2
f=o==null?p.k1:o}if(f==null)return
v===$&&C.c()
if(!w[u].p2){d.m(new A.e8b(d))
w=d.d
v=w.d
v===$&&C.c()
d.iC("The TV is on and playing "+E.ki[v[w.e].p3].a+".")}else{e=A.aOX(f)
w=d.c
w.toString
I.h54(w,0,e.a,!0,D.xY,e.b)}return}if(a0>=720&&a0<728){w=d.d
w===$&&C.c()
v=w.d
v===$&&C.c()
u=a0-720
f=v[w.e].fx.h(0,u)
if(f==null)return
e=A.aOX(f)
if(e.d>0||e.e){w=d.c
w.toString
I.h54(w,0,e.a,!0,D.xY,e.b)}else d.ayO(u)
return}if(a0===710||a0===711||a0===712||a0===713){w=d.d
w===$&&C.c()
v=w.d
v===$&&C.c()
if(!v[w.e].gjN())if(d.d.a.length!==0)d.Ef()
else d.a_V()
else{w=d.f
w===$&&C.c()
j=w.b.h(0,a0)
if(j!=null)d.iC(j.a+": "+j.b)}}},
bMp(d){var w,v,u,t=this.d
t===$&&C.c()
w=t.d
w===$&&C.c()
v=w[t.e].w[d].d
u=v<w.length?w[v].b:"the next room"
t=this.c
t.toString
return C.bT(E.lv,null,new A.e6E(this,u,d,v),t,!0,!0,!1,D.jZ,!1,!1,x.H)},
bOq(){var w,v,u=this
u.m(new A.e6N(u))
if(!u.aK){w=u.d
w===$&&C.c()
v=w.d
v===$&&C.c()
w=v[w.e].c==="outside"}else w=!1
if(w)u.a2k()
w=u.d
w===$&&C.c()
v=w.d
v===$&&C.c()
if(v[w.e].c!=="outside")u.xR()},
bOs(){this.m(new A.e6O(this))
this.ef("Phone view: the city fills your phone standing up. Pick a drone film and start filming.",!0)},
bOM(){var w=this
if(w.p4)w.a2n()
w.m(new A.e6P(w))},
cj0(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.c
n.toString
w=C.aH(n,o,x.w).w
n=new A.e80(p)
v=x.p
u=C.a([C.bU(0,d,0,0,0)],v)
t=w.r.b
if(p.fw)u.push(C.ao(o,C.aB(D.iu,B.f0y,D.y,!1,o,new A.e83(p),o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!1,D.a4),o,o,0,o,t,o))
else{s=n.$2(D.cx,p.gbOL())
r=p.p4?D.GP:D.C4
r=n.$2(r,new A.e84(p))
q=p.h3?B.amT:M.C6
u.push(C.ao(o,C.B(C.a([s,r,n.$2(q,new A.e85(p)),n.$2(D.us,new A.e86(p))],v),D.m,o,D.e,D.j,0,o,o),o,o,10,o,t+8,o))}return C.c5(o,D.w,new C.an(D.a_,o,D.aa,D.t,u,o),o,!1,!1,o,o)},
bGP(d){var w,v,u,t,s,r,q=this,p=null,o=q.c
o.toString
w=C.aH(o,p,x.w).w
o=new A.e6e(q)
if(q.er){v=w.a
u=v.b
v=v.a
t=q.ab
s=w.bcD(D.af,new C.au(u,v),D.af)
return C.c5(p,D.w,C.at(new C.y2(t,C.rp(new C.a7(u,v,new C.an(D.a_,p,D.aa,D.t,C.a([C.bU(0,d,0,0,0),C.ao(p,C.aB(D.iu,B.f0E,D.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,o,p,p,p,p,p,p,!1,D.a4),p,p,0,p,0,p)],x.p),p),p),s),p),p,p,p),p,!1,!1,p,p)}r=q.f_?w.r.b:0
return C.c5(p,D.w,new C.an(D.a_,p,D.aa,D.t,C.a([C.bU(0,d,0,0,0),C.ao(p,C.aB(D.iu,B.f0F,D.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,o,p,p,p,p,p,p,!1,D.a4),p,p,0,p,r,p)],x.p),p),p,!1,!1,p,p)},
bQO(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.c
k.toString
w=C.aH(k,l,x.w).w
k=w.a
v=k.b
k=k.a
u=new A.e6Z(m)
t=m.ab
s=w.bcD(D.af,new C.au(v,k),D.af)
r=x.p
q=C.a([C.bU(0,d,0,0,0)],r)
if(m.fw)q.push(C.ao(l,C.aB(D.iu,B.f0x,D.y,!1,l,new A.e71(m),l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,!1,D.a4),l,l,0,l,0,l))
else{p=u.$2(Af.a0W,new A.e72(m))
o=u.$2(D.a1l,new A.e73(m))
n=m.h3?B.amT:M.C6
r=C.a([p,o,u.$2(n,new A.e74(m)),u.$2(D.us,new A.e75(m))],r)
p=m.d
p===$&&C.c()
o=p.d
o===$&&C.c()
if(o[p.e].c==="outside"){p=m.p4?D.GP:D.C4
r.push(u.$2(p,new A.e76(m)))}if(m.gajQ())r.push(C.aB(l,C.p(l,B.bTz,D.f,l,l,new C.o(D.cS,l,C.I(D.c,D.r,1),l,l,l,D.a5),l,40,l,D.it,l,l,l,40),D.y,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,m.gaQ3(),l,l,l,l,l,l,!1,D.a4))
q.push(C.ao(l,C.B(r,D.m,l,D.e,D.j,0,l,l),l,l,10,l,10,l))}return C.c5(l,D.w,C.at(new C.y2(t,C.rp(new C.a7(v,k,new C.an(D.a_,l,D.aa,D.t,q,l),l),s),l),l,l,l),l,!1,!1,l,l)},
czZ(d){var w,v,u,t=B.CE[d.b]
if(d.c==="power")w=t.c
else{v=t.d
w=v>=0?v:t.c}v=this.d
v===$&&C.c()
v=v.d
v===$&&C.c()
u=w<v.length?v[w].b:"the house"
v=this.c
v.toString
return C.bT(D.au,null,new A.e93(this,t,new A.e92(),d,u,w),v,!0,!0,!0,S.a7p,!1,!1,x.H)},
c1z(){var w,v,u=this,t=u.d
t===$&&C.c()
w=t.d
w===$&&C.c()
v=w[t.e]
if(v.c==="outside")return
u.m(new A.e7o(u))
t=u.e
t===$&&C.c()
t.e=20
t.f=300
t.w=-0.95
t.x=1.35
t.r2(!0)
t=u.e
w=v.ghn(0)
t.hP(Math.max(v.gev(0),v.ghn(0))*0.75,-0.5,new A.r(0,118,w*0.5),-0.05)
u.ef("Looking up at the ceiling from the floor. Drag to look round.",!0)},
gpj(){var w,v,u=this.d
u===$&&C.c()
u=u.d
u===$&&C.c()
w=new C.Z(u,new A.e5d(),C.S(u).k("Z<1>"))
if(!w.gaf(0).C())return null
v=w.gI(0)
u=v.dx
return u==null?v.dx=A.hzI(v):u},
aRk(d){var w,v,u=this
if(d==null)return
w=d.c
if(w>0){v=u.ghH()
if(v!=null)v.r+=w}w=d.a
A.fU(w==="pickup"?700:940,120,0.25,"tri")
u.ef(d.b,w!=="expired")
u.m(u.giR())},
gKm(){var w,v,u,t=this.d
t===$&&C.c()
t=t.d
t===$&&C.c()
w=new C.Z(t,new A.e9v(),C.S(t).k("Z<1>"))
if(!w.gaf(0).C())return null
v=w.gI(0)
t=v.dy
if(t==null){t=C.a([],x.bz)
u=new C.eb()
u.d5(11)
t=new A.cy5(v,u,t)
t.byV(v,11)
v.dy=t}return t},
bEW(){var w,v,u=this,t=u.ghH()
if(t==null)return
w=u.c5
if(w.w)u.ef("You already have your Uber licence.",!0)
else{v=t.r
if(v<40)u.ef("The licence costs 40 points. You have "+v+". Earn more with jobs and deliveries.",!1)
else{t.r=v-40
w.w=!0
A.fU(880,140,0.25,"tri")
u.ef("You passed! Here is your Uber licence. Drive a car to an Uber station and the people waiting will get in.",!0)}}u.m(new A.e5E())
w=u.aH
if(w!=null)w.B(u.ghH())},
c0x(){var w,v,u,t,s=this,r=null,q=s.ghH(),p=s.c5.w,o=D.w.j(0.55),n=C.m(28),m=C.I(D.aZ,D.r,1),l=x.p,k=C.B(C.a([B.fvi,D.as,B.bDe,C.aB(r,D.ru,D.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new A.e7j(s),r,r,r,r,r,r,!1,D.a4)],l),D.m,r,D.e,D.j,0,r,r),j=C.d(p?"You are a licensed Uber driver. Drive a car to an Uber station (the yellow and black shelter): the people waiting get in, and you take them to their house. The fare is paid when you get there.":"With the Uber licence you can take the people waiting at the Uber stations home and be paid for every ride. The car needs gas, so watch the gas bar.",r,r,r,r,r,r,B.fbC,r,r,r),i=q==null,h=i?r:q.r
h=C.d("You have "+(h==null?0:h)+" \u2b50",r,r,r,r,r,r,B.fjs,r,r,r)
w=p?new A.e7k(s):s.gbEV()
if(p)v=D.be
else{v=i?r:q.r
v=(v==null?0:v)>=40?D.bI:D.bz}u=C.m(16)
t=p?"\u2713 Licensed":"Get the licence \xb7 40 \u2b50"
if(!p){i=i?r:q.r
i=(i==null?0:i)>=40}else i=!0
return C.p(D.A,C.p(r,C.x(C.a([k,D.R,j,D.R,h,D.R,C.aB(r,C.p(D.A,C.d(t,r,r,r,r,r,r,C.l(r,r,i?D.w:D.bU,r,r,r,r,r,r,r,r,16,r,r,D.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),D.f,r,r,new C.o(v,r,r,u,r,r,D.n),r,50,r,r,r,r,r,r),D.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,w,r,r,r,r,r,r,!1,D.a4)],l),D.aj,r,D.e,D.P,0,D.p),D.f,r,r,new C.o(r,r,m,n,r,B.z4,D.n),r,r,r,D.bB,D.bQ,r,r,330),D.f,o,r,r,r,r,r,r,r,r,r,r)},
cCl(d){var w,v,u,t=this,s=t.gKm()
if(s!=null){w=s.c
w===$&&C.c()
w=w.length===0}else w=!0
if(w)return
v=s.cMe(d.f,d.r,t.CW.gik()/1000)
if(v>0){w=t.ghH()
if(w!=null)w.r+=v
A.fU(940,140,0.25,"tri")
t.ef("\ud83d\ude96 You dropped the passenger at the house. Fare: +"+v+" points. Thank you!",!0)
t.m(t.giR())
return}if(s.f==null&&s.apZ(d.f,d.r)!=null&&D.d.b3(s.e,new A.e9w(s,d))){w=t.c5
if(!w.w){if(Date.now()-t.k1>2e4){t.k1=Date.now()
t.ef("People are waiting for a ride, but you need an Uber licence first. Get it at the licence office.",!1)}return}if(w.b<=0)return
u=s.cUl(d.f,d.r)
if(u!=null){A.fU(700,100,0.25,"tri")
t.ef("\ud83d\ude96 "+u.b+" got in. Take them to their house (follow the yellow line): "+u.f+" points.",!0)
t.m(t.giR())}}},
cCk(){var w,v,u,t,s,r,q,p=this,o=p.gKm()
if(o==null)return
w=o.f
if(w!=null){p.ef("\ud83d\ude96 "+w.b+" is in the car and wants to go home: "+w.f+" points. Follow the yellow line to the house.",!0)
return}if(!p.c5.w){v=C.a([],x._)
u=p.d
u===$&&C.c()
t=u.d
t===$&&C.c()
u=t[u.e].x
t=u.length
s=0
for(;s<u.length;u.length===t||(0,C.M)(u),++s){r=u[s]
if(r.b==="dmv")v.push(r)}if(v.length===0){p.ef("There is no licence office in this town yet.",!1)
return}p.S6(D.d.gI(v))
p.ef("You are at the licence office. Walk in through the door and onto the blue mat to get your Uber licence.",!0)
return}v=o.c
v===$&&C.c()
if(v.length===0){p.ef("There is no Uber station in this town yet.",!1)
return}q=p.aB
v=C.C(v,x.eB)
D.d.aV(v,new A.e9u(q))
p.S6(D.d.gI(v))
p.ef("You are at an Uber station. Get in the car parked next to it and drive up to the people waiting. They get in by themselves.",!0)},
aOH(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=" points for the ",i=k.ghH()
if(i==null)return
w=d.a
v=w==="bread"
if(v||w==="medicine"){u=i.aDn(v?"food":"medicine")
t=!D.a.a0(u,"You need")}else{v=d.r
t=!1
if(v>0){w=w==="tank"
s=w?A.h2C(k.c5.b):d.e
r=k.c5
q=r.b
if(q>=0.99)u="The tank is already full."
else{p=i.r
o=p<s
if(o)u="You need "+s+" points for that. Earn more with jobs and deliveries."
else{i.r=p-s
r.b=D.k.E(q+v,0,1)
r.aT()
v=""+s
u=w?"You filled the tank for "+v+" points.":"You put gas in the car. -"+v+" points."}t=!o}}else if(d.x){w=k.c5
if(!w.f)u="You feel fine: you do not need pills."
else{v=i.r
r=d.e
q=v<r
if(q)u="You need "+r+j+d.c.toLowerCase()+"."
else{i.r=v-r
w.f=!1
w.aT()
u="You took the pills. You feel well again."}t=!q}}else{w=d.f
v=w>0
if(v){r=k.c5
n=r.a<0.98||r.c>0||r.d>0}else n=!1
r=d.w
q=r>0
m=q&&k.c5.e<0.97
if(!n&&!m)u=v?"You are not hungry: your energy is full.":"You are not thirsty."
else{p=i.r
o=d.e
l=p<o
if(l)u="You need "+o+j+d.c.toLowerCase()+"."
else{i.r=p-o
if(v){v=k.c5
w=D.k.E(v.a+w,0,1)
v.a=w
if(w>=0.3)v.d=v.c=0
v.aT()}if(q){w=k.c5
w.e=D.k.E(w.e+r,0,1)
w.aT()}w=k.c5
w=w.d>0||w.c>0?"Still too tired: eat more.":"You feel stronger."
u="You had the "+d.c.toLowerCase()+". "+w}t=!l}}}A.fU(t?880:300,90,0.25,"tri")
k.ef(u,t)
w=k.aH
if(w!=null)w.B(k.ghH())
k.m(k.giR())},
cuo(){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.ghH(),i=l.aH
i=i==null?k:i.b.b==="gasstation"
w=i===!0
i=l.c
i.toString
v=C.aH(i,k,x.w).w.a
i=v.a
u=i>v.b*1.15
t=new A.e8H(u,new A.e8I(l,j,u))
s=C.d(w?"\u26fd":"\ud83d\uded2",k,k,k,k,k,k,D.wQ,k,k,k)
r=C.d(w?"NGMY Gas shop":"NGMY Mart",k,k,k,k,k,k,D.fr,k,k,k)
q=j==null?k:j.r
p=x.p
q=C.a([s,D.as,C.E(C.x(C.a([r,C.d("You have "+(q==null?0:q)+" \u2b50",k,k,k,k,k,k,B.fdY,k,k,k)],p),D.E,k,D.e,D.j,0,D.p),1)],p)
if(u)q.push(new C.a7(190,k,new A.Ui(l.c5,w,14,k),k))
q.push(D.ba)
q.push(C.aB(k,B.bQi,D.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new A.e8G(l),k,k,k,k,k,k,!1,D.a4))
o=C.B(q,D.m,k,D.e,D.j,0,k,k)
n=t.$2("FOOD AND DRINKS (energy)",B.d60)
s=w?"GAS":"HEALTH AND THE TOWN"
m=t.$2(s,w?B.di5:B.deT)
t=D.w.j(0.55)
i=u?Math.min(i-24,820):340
s=C.m(28)
r=C.I(D.aZ,D.r,1)
q=C.a([o,D.R],p)
if(!u)D.d.v(q,C.a([new A.Ui(l.c5,w,14,k),D.N],p))
if(u)q.push(C.B(C.a([C.E(n,5),D.es,C.E(m,3)],p),D.E,k,D.e,D.j,0,k,k))
else D.d.v(q,C.a([n,m],p))
return C.p(D.A,C.eQ(D.A,C.p(k,C.x(q,D.aj,k,D.e,D.P,0,D.p),D.f,k,k,new C.o(k,k,r,s,k,B.z4,D.n),k,k,k,D.bh,D.bQ,k,k,i),D.f,D.e0),D.f,t,k,k,k,k,k,k,k,k,k,k)},
cfD(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=this,a1=null,a2=a0.gpj()
a2.toString
w=a0.aB
v=w==null
u=v?a1:w.f
if(u==null)u=0
t=v?a1:w.r
if(t==null)t=300
s=a2.x
r=new A.e7J()
q=new A.e7F(a0,u,t,r,new A.e7I(),s,a2)
p=a2.cWC()
o=["\ud83e\udd47","\ud83e\udd48","\ud83e\udd49","4","5","6"]
v=D.w.j(0.55)
n=C.m(28)
m=C.I(D.aZ,D.r,1)
l=x.p
k=C.a([C.B(C.a([B.fCC,D.as,C.E(C.x(C.a([B.fEo,C.d("Race "+a2.as+": first to 8 wins +40",a1,a1,a1,a1,a1,a1,H.v8,a1,a1,a1)],l),D.E,a1,D.e,D.j,0,D.p),1),C.aB(a1,D.ru,D.y,!1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,new A.e7D(a0),a1,a1,a1,a1,a1,a1,!1,D.a4)],l),D.m,a1,D.e,D.j,0,a1,a1),D.ad],l)
if(s!=null){j=D.bI.j(0.14)
i=C.m(16)
h=C.I(D.bI,D.r,1)
g=s.b
f=C.d(A.KZ(g).b,a1,a1,a1,a1,a1,a1,D.JH,a1,a1,a1)
k.push(C.p(a1,C.B(C.a([f,D.as,C.E(C.d(s.r?"You have the "+A.KZ(g).c.toLowerCase()+". Take it to the house (follow the yellow line).":"Go to the "+r.$1(s.c).toLowerCase()+" to pick up the "+A.KZ(g).c.toLowerCase()+".",a1,a1,a1,a1,a1,a1,D.oz,a1,a1,a1),1),C.aB(a1,B.fsT,D.y,!1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,new A.e7E(a0,a2),a1,a1,a1,a1,a1,a1,!1,D.a4)],l),D.m,a1,D.e,D.j,0,a1,a1),D.f,a1,a1,new C.o(j,a1,h,i,a1,a1,D.n),a1,a1,a1,D.d1,D.bh,a1,a1,a1))}else{j=C.a([B.fHb,D.N],l)
for(a2=a2.qV(0,u,t),a2=C.d1(a2,0,C.dB(6,"count",x.S),C.S(a2).c),i=a2.$ti,a2=new C.bS(a2,a2.gL(0),i.k("bS<ak.E>")),i=i.k("ak.E");a2.C();){h=a2.d
j.push(q.$1(h==null?i.a(h):h))}D.d.v(k,j)}k.push(D.am)
k.push(B.fwb)
k.push(D.N)
for(e=0;e<p.length;++e){a2=p[e].a==="You"?D.aR.j(0.18):D.c.j(0.05)
j=new C.aQ(12,12)
i=p[e]
h=i.a
g=h==="You"
d=new C.ay(g?D.aR:D.ds,1,D.r,-1)
f=o[e]
g=g?D.u:D.O
k.push(C.p(a1,new C.cb(D.aN,D.e,D.j,D.m,a1,D.p,a1,0,C.a([new C.a7(26,a1,new C.y(f,a1,D.aR_,a1,a1,a1,a1,a1,a1,a1,a1,a1),a1),new C.bA(1,D.bd,new C.y(h,a1,new C.F(!0,D.c,a1,a1,a1,a1,a1,g,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1,a1,a1,a1,a1,a1,a1),a1),new C.y(""+i.b+"/8",a1,K.JJ,a1,a1,a1,a1,a1,a1,a1,a1,a1),D.as,new C.y(""+i.c+" pts",a1,B.fbs,a1,a1,a1,a1,a1,a1,a1,a1,a1)],l),a1),D.f,a1,a1,new C.o(a2,a1,new C.bI(d,d,d,d),new C.bk(j,j,j,j),a1,a1,D.n),a1,a1,a1,D.eG,D.l3,a1,a1,a1))}return C.p(D.A,C.eQ(D.A,C.p(a1,C.x(k,D.aj,a1,D.e,D.P,0,D.p),D.f,a1,a1,new C.o(a1,a1,m,n,a1,B.z4,D.n),a1,a1,a1,D.bB,D.bQ,a1,a1,340),D.f,D.e0),D.f,v,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1)},
bSz(d){var w,v,u=this,t=u.aH
if(t==null||t.a!=="tower"||u.ok!=null)return
w=t.f
if(d===w){u.m(new A.e77(u))
return}u.p2=t
w=new A.eX6(w,d,Date.now())
v=t.at
v===$&&C.c()
w.r=v.f
w.w=v.r
u.ok=w
t.y=u.bb=u.b0=0
u.m(new A.e78(u))
w=u.e
w===$&&C.c()
w.hP(175,0.28,B.fSb,0)
u.ef("Going to level "+d+": walking to the elevator.",!0)
w=u.p1
if(w!=null)w.bR(0)
w=new A.a4X(u.gcqn(),W.Bl)
w.hj(0)
u.p1=w},
DH(d){var w=D.k.E(d,0,1)
return w*w*(3-2*w)},
cqo(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d="tri",a0=e.ok,a1=e.p2
if(a0==null||a1==null||e.c==null){w=e.p1
if(w!=null)w.bR(0)
return}v=Date.now()
u=(v-a0.c)/1000
w=a0.b
t=a0.a
s=w>t
switch(a0.d){case 0:r=a1.at
r===$&&C.c()
if(u<1){q=e.DH(u/1)
p=a0.r
r.f=p*(1-q)
o=a0.w
n=62-o
r.r=o+n*q
r.w=Math.atan2(-p,n)
r.x=!0}else if(u<1.8){r.f=0
r.r=62
r.w=3.141592653589793
r.x=!1}else if(u<2.5){r.r=62-44*e.DH((u-1.8)/0.7)
r.w=3.141592653589793
r.x=!0}else r.x=!1
r.y+=0.3
a1.y=e.DH((u-0.8)/0.8)
if(u>=2.6){a0.d=1
a0.c=v
a0.f=3+D.o.E(Math.abs(w-t)-1,0,99)*1.1
a0.e=t
m=A.fV4("cabin",a1.b,!1)
m.z=t
m.Q=s
m.y=1
w=m.at
w===$&&C.c()
w.f=0
w.r=58
w.w=0
w.x=!1
m.B(null)
e.aH=m
w=s?"\u25b2":"\u25bc"
e.p3.sp(0,w+"  "+C.w(t===1?"L":t))
e.m(e.giR())
w=e.e
w===$&&C.c()
w.N8(54,0.1,B.fSp,3.141592653589793)
A.fU(520,70,0.25,d)}break
case 1:m=e.aH
if(m==null||m.a!=="cabin")return
l=a0.f
if(u<0.9)r=1-e.DH(u/0.9)
else{r=l-0.9
r=u>r?e.DH((u-r)/0.9):0}m.y=r
k=u>0.9&&u<l-0.9
if(k){j=D.o.E(t+D.k.V((w-t)*e.DH((u-0.9)/(l-1.8))),1,m.gLT())
if(j!==a0.e){m.z=a0.e=j
t=s?"\u25b2":"\u25bc"
e.p3.sp(0,t+"  "+C.w(j===1?"L":j))
A.fU(500+j*22,45,0.2,d)}}i=k?1:0.25
t=e.e
t===$&&C.c()
r=Math.sin(u*5.3)
p=Math.sin(u*2.1)
o=Math.sin(u*0.9)
n=Math.sin(u*8)
t.N8(54+p*1.2,0.1+Math.sin(u*6.1)*0.007*i,new A.r(0,52+r*0.5*i,52),3.141592653589793+o*0.5+n*0.01*i)
if(u>l-0.9&&!a0.x){a0.x=!0
m.z=w
e.p3.sp(0,C.w(w===1?"L":w))
A.fU(880,140,0.3,d)
C.bO(D.fH,new A.e8y(),x.H)}if(u>=l){a0.d=2
a0.c=v
h=a1.b.a
t=e.d
t===$&&C.c()
r=t.d
r===$&&C.c()
t=r[t.e].cy.h(0,h)
g=e.gIq().h(0,h*100+w)
a1.f=D.o.E(w,1,a1.gLT())
a1.c=t===w
w=a1.at
w===$&&C.c()
w.f=0
w.r=112
w.w=3.141592653589793
a1.x=!1
a1.CW.a8(0)
a1.B(a1.ch)
e.aiR(a1,g)
a1.B(e.ghH())
w.f=0
w.r=16
w.w=0
w.x=!1
a1.y=1
e.aH=a1
e.m(e.giR())
e.e.N8(175,0.28,B.fSc,0)}break
default:w=a1.at
w===$&&C.c()
q=e.DH(u/1.6)
w.f=0
w.r=16+96*q
w.w=0
w.x=u<1.6
w.y+=0.3
a1.y=1-e.DH((u-1.3)/0.8)
t=e.e
t===$&&C.c()
t.apn(new A.r(0,40,w.r*0.7+14))
if(u>=2.2){f=a1.c
t=e.p1
if(t!=null)t.bR(0)
e.ok=null
w.x=!1
a1.y=0
e.m(e.giR())
e.e.hP(170,0.4,B.fRR,0)
A.fU(660,80,0.25,d)
w=""+a1.f
e.ef(f?"Level "+w+". This office has no power: walk onto the red mat at the breaker panel, or tap the red frames.":"Level "+w+" of "+a1.gLT()+".",!0)}}},
bNU(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.aH
if(g==null||g.a!=="tower")return D.bJ
w=i.d
w===$&&C.c()
v=w.d
v===$&&C.c()
u=v[w.e].cy.h(0,g.b.a)
w=D.w.j(0.55)
v=C.m(28)
t=C.I(D.aZ,D.r,1)
s=g.f
r=g.gLT()
q=x.p
s=C.B(C.a([B.fLd,D.as,C.E(C.x(C.a([B.fDo,C.d("You are on level "+s+" of "+r,h,h,h,h,h,h,H.v8,h,h,h)],q),D.E,h,D.e,D.j,0,D.p),1),C.aB(h,D.ru,D.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new A.e6L(i),h,h,h,h,h,h,!1,D.a4)],q),D.m,h,D.e,D.j,0,h,h)
p=C.a([],q)
for(;r>=1;--r){if(r===g.f)o=D.aR
else o=r===u?D.bx.j(0.35):D.c.j(0.08)
n=new C.aQ(14,14)
m=r===u
if(m)l=D.aw
else l=r===g.f?D.c:D.aZ
k=r===g.f
j=new C.ay(l,k||m?2:1,D.r,-1)
l=r===1?"L":""+r
k=k?D.w:D.c
l=C.a([new C.y(l,h,new C.F(!0,k,h,h,h,h,19,D.u,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h),h,h,h,h,h,h,h,h,h)],q)
if(m)l.push(B.fLy)
p.push(C.aB(h,C.p(D.A,C.x(l,D.m,h,D.b8,D.j,0,D.p),D.f,h,h,new C.o(o,h,new C.bI(j,j,j,j),new C.bk(n,n,n,n),h,h,D.n),h,52,h,h,h,h,h,58),D.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new A.e6M(i,r),h,h,h,h,h,h,!1,D.a4))}return C.p(D.A,C.eQ(D.A,C.p(h,C.x(C.a([s,D.ad,B.fJt,D.R,C.bW(D.bD,p,D.bq,8,8),D.am,B.fuG],q),D.aj,h,D.e,D.P,0,D.p),D.f,h,h,new C.o(h,h,t,v,h,B.z4,D.n),h,h,h,D.bB,D.bQ,h,h,330),D.f,D.e0),D.f,w,h,h,h,h,h,h,h,h,h,h)},
atx(){var w,v,u,t,s,r,q=this,p=q.e
p===$&&C.c()
w=Math.cos(p.b)
v=Math.sin(q.e.b)
p=q.e
u=p.d
t=p.c
p=Math.sin(p.a)
s=q.e
r=s.c
return new C.z(u.a9(0,new A.r(-t*w*p,r*v,r*w*Math.cos(s.a))),q.e.d)},
aQE(d,e,f,g,h){var w=new A.e6x(h)
return new A.r(w.$4(d.a,e.a,f.a,g.a),w.$4(d.b,e.b,f.b,g.b),w.$4(d.c,e.c,f.c,g.c))},
c26(d){var w=this.d
w===$&&C.c()
w=w.d
w===$&&C.c()
return A.i2l(D.d.h_(w,new A.e7p()),d)},
cx8(d){var w,v,u=this
u.AY()
u.RT()
if(u.aK)u.a2o()
u.aH=null
w=u.c26(d)
if(w.length===0)return
u.m(new A.e8K(u,w))
v=u.e
v===$&&C.c()
v.r=4800
v.e=6
v.f=2600
v.w=-1.2
v.x=1.4
v.r2(!0)
u.ado()
v=u.RG
if(v!=null)v.bR(0)
v=new A.a4X(u.gbN8(),W.Bl)
v.hj(0)
u.RG=v},
ado(){var w,v,u,t,s,r,q,p=this,o=++p.ry,n=p.rx
if(o>=n.length){p.a2n()
return}w=n[o]
p.to=Date.now()
o=w.f
n=o==null
if(!n){v=o.b
if(v==="store"||v==="gasstation")v="shop"
else if(v==="hq")v="tower"
u=p.d
u===$&&C.c()
t=u.d
t===$&&C.c()
u=t[u.e]
t=o.a
u=A.fV4(v,o,u.k4.q(0,t))
u.B(p.ghH())
p.aH=u
p.aiR(u,p.gIq().h(0,t))
t=p.aH
t.toString
t.B(p.ghH())
p.m(p.giR())}s=w.r
if(s&&p.aH!=null){p.aH=null
p.m(p.giR())}if(w.w==null&&w.x==null){s=!n||s
r=p.atx()
o=x.o
n=C.a([],o)
v=!s
if(v)n.push(r.a)
D.d.v(n,w.a)
p.x1=n
o=C.a([],o)
if(v)o.push(r.b)
D.d.v(o,w.b)
p.x2=o
p.xr=C.a([0],x.n)
for(q=1;q<p.x1.length;++q){o=p.xr
n=D.d.gal(o)
v=p.x1
u=v[q]
v=v[q-1]
D.d.M(o,n+Math.max(1,new A.r(u.a-v.a,u.b-v.b,u.c-v.c).guN()))}}o=w.e
if(o!=null)p.ef("\ud83d\ude81 "+o,!0)},
bN9(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this
if(!a2.p4||a2.c==null)return
w=a2.rx[a2.ry]
v=(Date.now()-a2.to)/1000
u=w.x
if(u!=null){t=a2.CW.gik()/1000
s=B.a3I[u].a
r=s[0]
q=s[1]
p=s[2]
o=t*0.09+u*3.141592653589793
t=[r+520*Math.cos(o),p+Math.sin(t*0.9+u)*5,q+520*Math.sin(o),-Math.sin(o),Math.cos(o)]
s=t[0]
n=t[1]-33
t=t[2]
m=new A.r(s,n,t)
u=(u&1)===0?0.6:2.4
l=u+v*0.5
k=new A.r(s+Math.cos(l)*175,n+35,t+Math.sin(l)*175)
if(v<3){j=v/3
i=j*j*(3-2*j)
h=a2.atx()
k=A.o_(h.a,k,i)
m=A.o_(h.b,m,i)}if(v>=w.d){a2.ado()
return}}else{u=w.w
if(u!=null){u=B.kj[u]
t=a2.CW.gik()
t=$.aQJ().cUA(0,D.d.cD(B.kj,u),t/1000).a
u=t[0]
m=new A.r(u,26,t[1])
l=v*0.6+0.8
k=new A.r(u+Math.sin(l)*190,85,t[1]+Math.cos(l)*190)
if(v<2.5){j=v/2.5
i=j*j*(3-2*j)
g=a2.atx()
k=A.o_(g.a,k,i)
m=A.o_(g.b,m,i)}if(v>=w.d){a2.ado()
return}}else{f=v*w.c
if(a2.x1.length<2||f>=D.d.gal(a2.xr)){a2.ado()
return}u=a2.xr
t=u.length
e=0
for(;;){s=e+2
if(!(s<t&&u[e+1]<=f))break;++e}t=u[e]
n=e+1
d=D.k.E((f-t)/(u[n]-t),0,1)
t=new A.e6J()
u=e-1
k=a2.aQE(t.$2(a2.x1,u),t.$2(a2.x1,e),t.$2(a2.x1,n),t.$2(a2.x1,s),d)
m=a2.aQE(t.$2(a2.x2,u),t.$2(a2.x2,e),t.$2(a2.x2,n),t.$2(a2.x2,s),d)}}a0=m.aF(0,k)
a1=Math.max(8,a0.guN())
u=a2.e
u===$&&C.c()
t=Math.atan2(a0.a,-a0.c)
u.N8(a1,Math.asin(D.k.E(-a0.b/a1,-1,1)),m,t)},
a2n(){var w=this,v=w.e
v===$&&C.c()
v.r=0
v=w.RG
if(v!=null)v.bR(0)
w.RG=null
if(w.c==null)return
w.m(new A.e8V(w))
w.xR()
w.ef("The drone has landed.",!0)},
bN7(){var w=null,v=new A.e6H(this),u=D.w.j(0.55),t=C.m(28),s=C.I(D.aZ,D.r,1),r=x.p
return C.p(D.A,C.eQ(D.A,C.p(w,C.x(C.a([C.B(C.a([B.fJg,D.as,B.bCM,C.aB(w,D.ru,D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new A.e6G(this),w,w,w,w,w,w,!1,D.a4)],r),D.m,w,D.e,D.j,0,w,w),B.fwg,v.$4("\ud83c\udf06","The whole city","High flights over every street","city"),v.$4("\ud83e\udea7","Billboards and NGMY logos","Close to every ad, and the big logo board","billboards"),v.$4("\ud83c\udfc1","Edge billboards only","A tour round the big boards at the edges of the city","edges"),v.$4("\ud83c\udfe0","Houses","Fly by the houses, then go inside a big one","houses"),v.$4("\ud83c\udfe5","Hospital, shop and school","Fly in and look round inside each","hospital"),v.$4("\ud83d\ude8c","Traffic","Follow the self-driving buses and police cars","traffic"),v.$4("\ud83c\udfac","Everything","A little of all of it","all")],r),D.aj,w,D.e,D.P,0,D.p),D.f,w,w,new C.o(w,w,s,t,w,B.z4,D.n),w,w,w,D.bB,D.bQ,w,w,330),D.f,D.e0),D.f,u,w,w,w,w,w,w,w,w,w,w)},
gIq(){var w=this.d
w===$&&C.c()
w=w.d
w===$&&C.c()
return D.d.h_(w,new A.e7e()).cx},
atJ(d){var w,v=C.a([],x.u)
for(w=0;w<4;++w)v.push(d.tb(w))
return v},
cxv(d){var w,v,u=C.a([],x.t)
for(w=0;w<4;++w){if(!d.tb(w)){v=d.d
v===$&&C.c()
v=w>=v.length}else v=!0
u.push(v?0:new A.e8U(d,w).$0())}return u},
cEA(d,e){var w,v,u,t,s,r=d.d
r===$&&C.c()
if(e>=r.length)return""
w=r[e]
r=w.a
v=d.at.h(0,r)
u=v==null
t=u?null:v.a
s=A.agx(t==null?w.b:t).toLowerCase()
if(u||!A.fZk(w.b,v.a))return"nothing put in yet at "+A.jU(r).b
if(v.b.c<2)return"the "+s+" at "+A.jU(r).b+" is not finished: fasten every wire and close it"
return"the "+s+" at "+A.jU(r).b+" works but is NOT wired safely: "+d.aoV(r).b},
aiR(d,e){var w=e==null
d.d=w?B.ayH:this.atJ(e)
d.e=w?B.a2b:this.cxv(e)},
gb9Y(){var w,v,u=this.aH
if(u==null||!u.c)return null
w=u.a
v=u.b.a
return w==="tower"?v*100+u.f:v},
gajQ(){var w,v=this.gb9Y(),u=v==null?null:this.gIq().h(0,v)
if(u!=null)w=u.gbjD()||D.d.d9(this.atJ(u),new A.e9J())
else w=!1
return w},
as9(){var w,v,u,t,s,r=this,q=r.aH,p=r.gb9Y(),o=p==null,n=o?null:r.gIq().h(0,p)
if(q==null||o||n==null)return
if(!D.d.d9(r.atJ(n),new A.e6g())){r.ef("Not quite done: the wiring is not right yet. Open the wiring bench again (tap the panel) and check every wire.",!1)
return}w=q.b
r.gIq().W(0,p)
o=q.a==="tower"
v=r.d
u=w.a
if(o){v===$&&C.c()
t=v.d
t===$&&C.c()
t[v.e].cy.W(0,u)}else{v===$&&C.c()
t=v.d
t===$&&C.c()
t[v.e].k4.W(0,u)}q.c=!1
s=10+r.iL.au(26)
v=r.ghH()
if(v!=null)v.r+=s
r.l9=Date.now()
r.lu=0
q.d=B.dn0
q.e=B.a2b
q.B(r.ghH())
r.m(r.giR())
A.fU(880,120,0.3,"tri")
v=r.d
v===$&&C.c()
u=v.d
u===$&&C.c()
v=u[v.e]
u=v.k4.a
v=v.cy.a
o=o?"The power is back on level "+q.f+".":"The power is back in the house."
v=u+v>0?" The other red tags in the city are different places that still have no power.":""
r.ef("\u2705 JOB COMPLETE! "+o+" +"+s+" stars."+v,!0)},
Yf(d){return this.bZ4(d)},
bZ4(d){var w=0,v=C.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k
var $async$Yf=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:l=d.b
k=l.a
if(d.a==="tower")k=k*100+d.f
s=t.gIq().c4(0,k,new A.e7b(l,d))
w=3
return C.b(t.y6(C.e_(new A.e7c(s),!1,null,x.H)),$async$Yf)
case 3:if(t.c==null){w=1
break}t.aiR(d,s)
if(t.gajQ())t.as9()
else{d.B(t.ghH())
t.m(t.giR())
r=x.s
q=C.a([],r)
if(s.tb(0))q.push("outlet 1")
if(s.tb(1))q.push("outlet 2")
if(s.tb(2))q.push("the ceiling light")
if(s.tb(3))q.push("the switch")
p=C.a([],r)
if(!s.tb(0))p.push("outlet 1")
if(!s.tb(1))p.push("outlet 2")
if(!s.tb(2))p.push("the ceiling light")
if(!s.tb(3))p.push("the switch")
r=C.a([],r)
for(o=0;o<4;++o)if(!s.tb(o))r.push(t.cEA(s,o))
n=x.cc
m=C.C(new C.Z(r,new A.e7d(),n),n.k("J.E"))
r=q.length===0?"Nothing is fixed yet":"Fixed so far: "+D.d.aG(q,", ")
p=D.d.aG(p,", ")
q=m.length===0?"":"Why: "+C.d1(m,0,C.dB(2,"count",x.S),C.S(m).c).aG(0,"; ")+". "
t.ef(r+". Still to do: "+p+". "+q+"Tap the red frames to carry on.",!1)}case 1:return C.h(u,v)}})
return C.i($async$Yf,v)},
aaY(d){return this.bPX(d)},
bPX(d){var w=0,v=C.j(x.H),u,t=this,s,r,q,p,o
var $async$aaY=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:o=t.d
o===$&&C.c()
s=o.d
s===$&&C.c()
r=d.a
q=s[o.e].db.c4(0,r,new A.e6R())
w=3
return C.b(t.y6(C.e_(new A.e6S(q),!1,null,x.H)),$async$aaY)
case 3:if(t.c==null){w=1
break}if(q.c>=2&&A.L_(A.t0("light"),q).a==="ok"){o=t.d
s=o.d
s===$&&C.c()
s[o.e].db.W(0,r)
o=t.d
s=o.d
s===$&&C.c()
s[o.e].k3.W(0,r)
p=10+t.iL.au(26)
r=t.ghH()
if(r!=null)r.r+=p
t.m(t.giR())
t.ef("The street light is on again. You wired it correctly: black to black, white to white, ground to ground. +"+p+" stars.",!0)}else t.ef("The light is still out: finish the wiring and fit the cover, then it comes on.",!1)
case 1:return C.h(u,v)}})
return C.i($async$aaY,v)},
c6z(){var w,v,u=this,t=u.aB
if(t==null)return
w=u.d
w===$&&C.c()
v=w.d
v===$&&C.c()
v[w.e].dw(0,"crate",t.f+Math.sin(t.w)*34,t.r+Math.cos(t.w)*34)
u.ak=null
u.m(u.giR())
u.ef("You put the crate down.",!0)},
c40(){var w,v,u,t,s,r,q,p,o=this,n=o.d
n===$&&C.c()
n=n.d
n===$&&C.c()
w=D.d.h_(n,new A.e7r())
if(o.gaWg())return
n=x._
v=C.a([],n)
for(u=w.x,t=u.length,s=w.k4,r=0;r<u.length;u.length===t||(0,C.M)(u),++r){q=u[r]
p=q.b
if(p==="house2"||p==="bighouse"){p=q.a
p=!s.q(0,p)&&p!==o.ja}else p=!1
if(p)v.push(q)}if(s.a<2&&v.length!==0&&o.bz==null&&o.bA==null){q=v[o.iL.au(v.length)]
v=q.a
s.M(0,v)
o.ja=v
o.b3K(new A.Q6(q,q.b==="bighouse"?"the big house":"the house","power","",0))}n=C.a([],n)
for(v=u.length,t=w.k3,r=0;r<u.length;u.length===v||(0,C.M)(u),++r){q=u[r]
s=q.b
if((s==="pole"||s==="lamppost")&&!t.q(0,q.a))n.push(q)}if(t.a<3&&n.length!==0&&D.o.F(o.bW,90)===0){t.M(0,n[D.o.F(o.bW*5,n.length)].a)
o.ef("\u26a1 A street light went out in the town. Find it (it is dark, with a red sign) and fix it.",!1)}n=o.d
v=n.d
v===$&&C.c()
if(v[n.e].c==="outside"&&o.aH==null)o.m(o.giR())},
awy(d){return this.c41(d)},
c41(d){var w=0,v=C.j(x.H),u=this
var $async$awy=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:u.m(new A.e7s(u,d))
return C.h(null,v)}})
return C.i($async$awy,v)},
aWr(){var w,v=this.cI,u=v==null?null:v.a
if(u==null)return null
w=A.vs(new A.r(0,0,B.ht.h(0,u.b).d/2+60),u.e*3.141592653589793/2)
return new C.z(u.c+w.a,u.d+w.c)},
avG(){var w=this.aB,v=this.aWr()
if(w==null||v==null)return null
return D.k.V(Math.sqrt(Math.pow(v.a-w.f,2)+Math.pow(v.b-w.r,2))/10)},
cqG(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.aB,g=j.gKm()
g=g==null?i:g.ga6v(0)
if(g==null){g=j.gpj()
g=g==null?i:g.ga6v(0)
w=g}else w=g
if(w==null)w=j.aWr()
g=!1
if(j.cI==null){v=j.gpj()
if((v==null?i:v.x)==null){g=j.gKm()
g=(g==null?i:g.f)==null}}v=!0
if(!g)if(h!=null)if(w!=null){g=j.d
g===$&&C.c()
v=g.d
v===$&&C.c()
g=v[g.e].c!=="outside"||j.aH!=null}else g=v
else g=v
else g=v
if(g)return B.ayA
g=C.a([],x.z)
u=new A.fk(g)
u.f=1
v=w.a
t=v-h.f
s=w.b
r=s-h.r
q=Math.sqrt(t*t+r*r)
if(q>60){p=Math.atan2(t,r)
o=t/q
n=r/q
m=q-30
l=0
k=46
for(;;){if(!(k<m&&l<70))break
u.aDf(new A.r(h.f+o*k,1.4,h.r+n*k),B.h7u,D.bI,p)
k+=26;++l}}u.f=3
u.d=0.4
u.dL(new A.r(v,0,s),new A.r(v,170,s),4,D.bI,8)
u.dL(new A.r(v,0,s),new A.r(v,1.6,s),24,D.bI,14)
return g},
bFy(){var w,v,u,t,s,r,q,p=this,o=null,n=p.y1,m=new A.e5L(),l=new A.e5K(),k=x.p
if(n!=null){w=p.avG()
v=C.a([C.B(C.a([C.h7(D.aE,o,C.d(n.gbdJ(),o,o,o,o,o,o,D.pt,o,o,o),o,24),D.ba,C.E(C.x(C.a([C.d(n.gaDp(),o,o,o,o,o,o,D.de,o,o,o),B.fEL],k),D.E,o,D.e,D.j,0,D.p),1),C.aB(o,D.ru,D.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new A.e5M(p),o,o,o,o,o,o,!1,D.a4)],k),D.m,o,D.e,D.j,0,o,o),D.ad],k)
for(u=n.gaGC(0),t=0;t<3;++t)v.push(m.$1(u[t]))
u=D.bI.j(0.12)
s=C.m(14)
r=C.I(D.bI.j(0.5),D.r,1)
v.push(C.p(o,C.B(C.a([B.bX_,D.as,C.E(C.d(w==null?"A yellow line on the ground will show you the way.":"Follow the yellow line on the ground. It is about "+C.w(w)+" metres away.",o,o,o,o,o,o,D.oz,o,o,o),1)],k),D.m,o,D.e,D.j,0,o,o),D.f,o,o,new C.o(u,o,r,s,o,o,D.n),o,o,o,D.l_,D.bT,o,o,o))
v.push(l.$5$primary(A4.GH,"Show me the way",D.bI,new A.e5N(p),!0))
v.push(l.$4(B.bJy,"Take me there",D.bm,new A.e5O(p,n)))
v.push(l.$4(D.jR,"Later",D.aE,new A.e5P(p,n)))
q=C.x(v,D.aj,o,D.e,D.P,0,D.p)}else q=C.x(C.a([B.eWw,D.ad,m.$1("Hello, this is the City office. A few calls were missed."),m.$1("Please answer the phone, so you can keep working."),m.$1("Every call is a person who needs help. Thank you for answering!"),l.$5$primary(D.hI,"OK, I will answer",D.bm,new A.e5Q(p),!0)],k),D.aj,o,D.e,D.P,0,D.p)
k=D.w.j(0.55)
v=C.m(28)
return C.p(D.A,C.eQ(D.A,C.p(o,q,D.f,o,o,new C.o(o,o,C.I(D.aZ,D.r,1),v,B.dmF,B.z4,D.n),o,o,o,D.bB,D.bQ,o,o,330),D.f,D.e0),D.f,k,o,o,o,o,o,o,o,o,o,o)},
csY(){var w,v,u,t,s=this,r=s.d
r===$&&C.c()
w=r.d
w===$&&C.c()
v=w[r.e].BO(s.Q)
if(v==null)return
u=B.dup.h(0,v.b)
if(u==null){s.ef("This cannot be sold.",!1)
return}r=s.d
w=r.d
w===$&&C.c()
D.d.W(w[r.e].x,v)
r=s.d
w=r.d
w===$&&C.c()
r=w[r.e]
w=v.a
r.k4.W(0,w)
r=s.d
t=r.d
t===$&&C.c()
t[r.e].k3.W(0,w)
s.Q=0
w=s.ghH()
if(w!=null)w.r+=u
s.m(s.giR())
s.ef("Sold for "+C.w(u)+" points.",!0)},
zY(d){return this.bGD(d)},
bGD(d){var w=0,v=C.j(x.H),u,t=this,s
var $async$zY=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return C.b(C.bT(D.K,null,new A.e6c(d),s,!0,!0,!0,null,!1,!1,x.H),$async$zY)
case 3:if(t.c==null){w=1
break}t.m(new A.e6d(t))
case 1:return C.h(u,v)}})
return C.i($async$zY,v)},
cpD(d){var w,v,u=this.ghH()
if(u!=null){w=u.c
w===$&&C.c()
w=d>=w.length}else w=!0
if(w)return C.f8(null,x.H)
w=u.c
w===$&&C.c()
v=w[d]
w=this.c
w.toString
return C.bT(E.lv,null,new A.e8x(this,v,u),w,!0,!0,!0,D.jZ,!1,!1,x.H)},
ayO(d){var w=this.c
w.toString
return C.bT(E.lv,null,new A.e8h(this,d),w,!0,!0,!1,D.jZ,!1,!1,x.H)},
cCe(){var w=this.c
w.toString
return C.bT(E.lv,null,new A.e9t(this),w,!0,!0,!0,D.jZ,!1,!1,x.H)},
cBD(){var w=this.c
w.toString
return C.bT(D.K,null,new A.e9f(this),w,!0,!0,!0,null,!1,!1,x.H)},
b6C(d,e){var w,v,u,t=this,s=t.dx
if(s!=null)s.a3(0)
s=t.d
s===$&&C.c()
s=s.gqM()
w=s.length
v=0
for(;v<w;++v){u=s[v]
if(u.k1==null)u.k1="tv100"
if(u.c==="hall")if(u.k2==null)u.k2="tv100"
u.p2=!0}t.z=!1
s=x.fG
w=t.d
if(e){s=new A.aVx(!0,w,d,C.a([],s))
s.aZk()}else{s=new A.aVx(!1,w,d,C.a([],s))
s.aZk()}t.cx=s
t.cy=t.CW.gik()/1000
t.x=!0
t.r="look"
t.w=!1
s=D.d.gI(t.cx.d)
t.bi.a8(0)
t.b8=!1
t.m(new A.e8R(t,s.a))
t.xR()
t.dx=C.dm(D.jv,new A.e8S(t))
t.m(new A.e8T())},
cxr(d){return this.b6C(d,!1)},
bMq(d,e){var w,v=d.w[e],u=v.b
A:{if("left"===u){w=new A.r(-d.gev(0)/2,40,v.c+d.ghn(0)/2-40)
break A}if("right"===u){w=new A.r(d.gev(0)/2,40,v.c+d.ghn(0)/2-40)
break A}w=new A.r(v.c,40,0)
break A}return w},
cBE(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=i.cx
if(h==null||i.c==null)return
w=i.CW.gik()/1000-i.cy
v=h.e
v===$&&C.c()
if(w>=v){i.RT()
i.iC("The tour is over. Press Tour to walk the house again.")
return}if(i.b8)return
u=h.baU(w)
v=i.d
v===$&&C.c()
t=v.e
if(u.a!==t){i.aje(u)
return}v=v.d
v===$&&C.c()
s=v[t]
v=u.ch
if(v>=0&&v<s.w.length){t=s.ax
r=t.h(0,v)
if(r==null)r=0
q=u.e
if(!q&&u.ax<0){p=r<1.25
if(p)t.n(0,v,1.25)}else{p=q&&r>0
if(p)t.n(0,v,Math.max(0,r-0.3))}}else p=!1
v=u.ax
t=v>=0
if(t&&v<s.w.length){o=1.25*D.dZ.aw(0,D.k.E(u.ay,0,1))
q=s.ax
n=q.h(0,v)
if((n==null?0:n)!==o){q.n(0,v,o)
p=!0}}q=u.at
if(D.a.a0(q,"ad")&&i.bi.M(0,q)){s.p3=D.o.F(s.p3+1,8)
A.fU(1000,50,0.25,"tri")
p=!0}if(p)i.m(i.giR())
m=Math.max(s.gev(0)*0.95,s.ghn(0)*1.15)+20
t=t&&v<s.w.length
q=u.b
if(t){l=i.bMq(s,v)
k=D.dB.aw(0,D.k.E(u.ay,0,1))
j=s.w[v].b
v=i.e
v===$&&C.c()
t=j==="back"?14:0
if(j==="left")n=0.55*k
else n=j==="right"?-0.55*k:-0.03
v.hP(m+(70-m)*k,0.2-0.07*k,new A.r(l.a*0.9+q*0.1,36,l.c+t),n)}else{v=i.e
v===$&&C.c()
v.hP(m,0.24,new A.r(q*0.7,30,u.c*0.6+8),-0.05-q/(s.gev(0)/2)*0.2)}if(u.as!==i.dy)i.m(new A.e9g(i,u))},
aje(d){return this.cBC(d)},
cBC(d){var w=0,v=C.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j
var $async$aje=C.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:l={}
r.b8=!0
l.a=null
t=4
p=$.aW.ak$.x.h(0,r.Z)
p=p==null?null:p.gba()
q=x.cU.a(p)
p=q
p=p==null?null:p.m2(0.6).da(0,D.j9)
j=l
w=7
return C.b(x.fa.b(p)?p:C.dT(p,x.eT),$async$aje)
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
case 6:if(r.c==null||r.cx==null){r.b8=!1
w=1
break}p=r.d
p===$&&C.c()
n=p.d
n===$&&C.c()
n[p.e].ax.a8(0)
r.ax7(d.a,!0)
p=r.d
n=p.d
n===$&&C.c()
m=n[p.e]
p=d.ch
if(p>=0&&p<m.w.length)m.ax.n(0,p,1.25)
r.m(new A.e95(l,r))
l=r.e
l===$&&C.c()
l.d=new A.r(d.b,36,d.c+4)
l.c=70
l.a=-0.03
l.b=0.15
r.b8=!1
case 1:return C.h(u,v)
case 2:return C.f(s.at(-1),v)}})
return C.i($async$aje,v)},
RT(){var w,v,u,t=this,s=t.dx
if(s!=null)s.a3(0)
t.dx=null
s=t.d
s===$&&C.c()
s=s.d
s===$&&C.c()
w=s.length
v=0
for(;v<s.length;s.length===w||(0,C.M)(s),++v){u=s[v]
u.at.a8(0)
u.ax.a8(0)}t.az=null
t.b8=!1
t.m(new A.e8Y(t))
t.xR()},
ckl(){var w,v,u,t,s,r,q,p,o,n=this,m=n.cx
if(m!=null)return m.baU(n.CW.gik()/1000-n.cy)
w=n.aB
if(n.bD!=null)return null
if(w!=null){v=n.d
v===$&&C.c()
u=v.d
u===$&&C.c()
v=u[v.e].c==="outside"}else v=!1
if(v){v=n.d
v===$&&C.c()
u=v.d
u===$&&C.c()
v=u[v.e]
u=w.f
t=w.r
s=w.w
r=w.x
q=w.y
p=w.z&&r
o=w.Q
return A.ati(n.c5.d>0,0,-1,"",!1,o,"",-1,q,!1,!1,!1,v.a,p,r,u,s,t)}return null},
b7l(){var w,v=this,u=v.c5,t=u.r
if(t<=0)return
u.r=0
w=v.ghH()
if(w!=null)w.r=Math.max(0,w.r-t)
if(v.c!=null)v.m(new A.e8Z())},
a2k(){var w,v=this,u=v.d
u===$&&C.c()
w=u.d
w===$&&C.c()
u=w[u.e]
if(u.c!=="outside")return
w=v.aB;(w==null?v.aB=A.hhi(u,0,24):w).Mk(0)
v.aK=!0
v.bK=Date.now()
u=v.b1
if(u!=null)u.bR(0)
u=new A.a4X(v.gcEj(),D.Z2)
u.hj(0)
v.b1=u
v.m(new A.e8Q())
v.iC("Slide the round stick to walk. Walk up to a door to go in: the house, the hospital or the shop. Double tap a spot to go there.")},
a2o(){var w,v=this
v.aK=!1
v.bb=v.b0=0
v.bh=!1
w=v.b1
if(w!=null)w.bR(0)
v.b1=null
w=v.aB
if(w!=null)w.x=!1
v.m(new A.e8X())},
cEk(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.aH,e=f==null
if(e)w=null
else{v=f.at
v===$&&C.c()
w=v}if(w==null)w=g.aB
if(g.ok!=null)return
v=!0
if(w!=null)if(g.c!=null)if(e){v=g.d
v===$&&C.c()
u=v.d
u===$&&C.c()
v=u[v.e].c!=="outside"}else v=!1
if(v)return
t=Date.now()
s=D.k.E((t-g.bK)/1000,0,0.1)
g.bK=t
w.Mk(0)
w.z=g.bh&&g.bD==null
if(g.bD==null)w.aIU()
w.cMW(s)
v=g.e
v===$&&C.c()
r=Math.sin(v.a)
q=Math.cos(g.e.a)
v=g.bb
u=g.b0
p=g.bD==null
o=g.c5
n=p?o.c>0:o.b<=0
if(p)w.ch=o.d>0?0.28:1
if(n){if((u!==0||v!==0||w.at!=null)&&t-g.c7>6000){g.c7=t
g.ef(p?"You are too tired to walk. Rest a little, or buy some food in a shop.":"The car has no gas. Get out, walk to a gas station and buy gas.",!1)}w.at=null
m=!1}else if(u!==0||v!==0){w.at=null
m=w.aL7(0,r*v+q*u,-q*v+r*u,s)}else m=w.Fw(0,s)
v=!m
if(v)w.x=!1
if(g.bZ===0){u=g.d
u===$&&C.c()
p=u.d
p===$&&C.c()
l=p[u.e].c==="outside"}else l=!1
if(l){u=m&&g.bD==null
k=o.biT(s,m&&g.bD!=null,u)}else k=null
if(k!=null)g.ef(k,!1)
g.b7l()
if(!v||w.Q>0){v=g.e
u=w.f
p=w.r
v.as=null
v.d=new A.r(u,30,p)
v.aT()}if(!e){f.cx=g.ak
j=f.ft(0,g.ghH())
g.ak=f.cx
if(j!=null){g.iC(j)
g.m(g.giR())}if(f.cy){f.cy=!1
g.Yf(f)}if(f.dx){f.dx=!1
if(!g.id)g.m(new A.e9E(g))}if(f.db){f.db=!1
if(!g.k2)g.m(new A.e9F(g))}if(f.w){f.w=!1
if(!g.k3)g.m(new A.e9G(g))}e=f.x
if(e!==g.k4){g.k4=e
v=g.e
if(e)v.hP(330,0.35,B.fUP,1.35)
else v.hP(170,0.4,new A.r(0,30,110),0)}e=f.at
e===$&&C.c()
v=!1
if(e.r>308)if(Math.abs(e.f)<36)e=!(f.a==="tower"&&f.f>1)
else e=v
else e=v
if(e)g.aWI()
if(!g.k4&&g.ok==null)g.c_S()
return}e=!1
if(g.bD==null){e=g.gpj()
e=(e==null?null:e.x)!=null}if(e){e=g.gpj()
e.toString
g.aRk(e.bjr(w.f,w.r,g.CW.gik()/1000))}e=!1
if(g.bD==null){e=g.d
e===$&&C.c()
v=e.d
v===$&&C.c()
e=v[e.e].c==="outside"&&g.ok==null&&g.bZ===0}if(e){e=$.aQJ()
e.Fw(0,g.CW.gik()/1000)
i=e.cPh(w.f,w.r)
if(i>=0)g.cqs(i)}e=g.bD
if(e!=null)g.cCl(w)
if(m&&g.bD==null){if(Math.abs(w.f)<24){e=w.r
e=e>-2&&e<14}else e=!1
if(e)if(!(Math.abs(w.w)>2.2)){e=w.at
e=e!=null&&e.b<4}else e=!0
else e=!1
if(e){g.a2o()
g.Au(10)
g.iC("You are inside the living room. Use Go outside to come back out.")
return}e=g.d
e===$&&C.c()
v=e.d
v===$&&C.c()
e=D.d.gaf(v[e.e].x)
v=new C.f5(e,new A.e9H())
while(v.C()){u=e.gR(0)
h=A.vs(new A.r(0,0,B.ht.h(0,u.b).d/2+10),u.e*3.141592653589793/2)
if(Math.abs(w.f-(u.c+h.a))<22&&Math.abs(w.r-(u.d+h.c))<16){g.aaH(u)
return}}}g.cCE(w)},
c_S(){var w,v,u,t,s,r,q,p,o,n,m=this,l=m.e
l===$&&C.c()
w=l.c
for(v=0;v<40;++v,l=q){u=Math.cos(l.b)
t=Math.sin(m.e.b)
l=m.e
s=l.d
r=l.c
l=Math.sin(l.a)
q=m.e
p=q.d.c+q.c*u*Math.cos(q.a)
q=m.e
o=q.d
n=q.c
if(Math.abs(s.a-r*u*l)<=140&&p>=12&&p<=310&&o.b+n*t<=132){l=q
break}l=q.e
if(n<=l){l=q
break}q.c=Math.max(l,n*0.93)}s=l.c
if(s!==w)l.bmZ(s)},
aaH(d){var w,v,u,t,s,r,q=this
q.bb=q.b0=0
w=d.b
if(w==="store"||w==="gasstation")w="shop"
else if(w==="hq")w="tower"
v=q.d
v===$&&C.c()
u=v.d
u===$&&C.c()
t=d.a
s=A.fV4(w,d,u[v.e].k4.q(0,t))
s.cx=q.ak
s.B(q.ghH())
q.aiR(s,q.gIq().h(0,t))
s.B(q.ghH())
q.aH=s
q.cK=null
w=s.a
if(w==="tower"){v=q.d
u=v.d
u===$&&C.c()
r=u[v.e].cy.h(0,t)
v=q.cI
if(v!=null&&v.c==="office"&&r!=null)q.k3=!0}v=q.e
v===$&&C.c()
v.e=60
v.f=420
v.w=0.15
v.x=1.35
v.r2(!0)
q.e.hP(170,0.4,new A.r(0,30,110),0)
q.m(q.giR())
A:{if("hospital"===w){w="The hospital. Walk onto the blue mat to admit the sick, and up to a bed to treat the patient. Walk to the green mat to go out."
break A}if("dmv"===w){w="The licence office. Walk onto the blue mat at the desk to get your Uber licence. Walk to the green mat to go out."
break A}if("tower"===w){w="The lobby of an office tower. Walk onto the blue mat (or tap the elevator) to choose a level. Walk to the green mat to go out."
break A}if("house2"===w||"bighouse"===w){w="The house. Walk onto the red or green mat at the breaker panel. Walk to the green mat to go out."
break A}if("school"===w){w="The school. Walk onto the mats to teach the class or read in the library. Walk to the green mat to go out."
break A}if("firestation"===w){w="The fire station. Walk onto the mats to check the equipment. Walk to the green mat to go out."
break A}w="The shop. Walk onto the yellow mat for food and the purple mat for medicine. Walk to the green mat to go out."
break A}q.iC(w)
A.fU(660,80,0.25,"tri")},
aWI(){var w,v,u,t=this,s=t.aH,r=t.aB
if(s==null||r==null)return
w=s.b
v=B.ht.h(0,w.b)
v.toString
t.ak=s.cx
t.aH=null
t.bb=t.b0=0
u=A.vs(new A.r(0,0,v.d/2+30),w.e*3.141592653589793/2)
r.f=w.c+u.a
r.r=w.d+u.c
r.w=0
r.at=null
r.Mk(0)
t.m(t.giR())
t.xR()
v=t.e
v===$&&C.c()
v.apn(new A.r(r.f,30,r.r))
t.iC("You are back in the city.")},
cCE(d){var w,v,u,t,s,r,q,p,o,n,m=this,l={}
l.a=null
w=m.bD==null
v=!1
if(!w||m.ak==null){u=m.c5.b
if(u<(!w?0.7:0.99)){u=m.d
u===$&&C.c()
t=u.d
t===$&&C.c()
u=D.d.b3(t[u.e].x,new A.e9x(d))
v=u}}if(v)l.a=new C.G6(new A.e9y(m),"\u26fd Buy gas ("+A.h2C(m.c5.b)+" \u2b50)")
else if(!w)l.a=new C.G6(m.gbS0(),"\ud83d\udeaa Get out")
else{if(m.ak!=null)l.a=new C.G6(m.gc6y(),"\u2b07 Put the crate down")
w=m.d
w===$&&C.c()
u=w.d
u===$&&C.c()
w=u[w.e].x
u=w.length
s=0
for(;s<w.length;w.length===u||(0,C.M)(w),++s){r=w[s]
q=Math.sqrt(Math.pow(d.f-r.c,2)+Math.pow(d.r-r.d,2))
t=r.b
p=B.ht.h(0,t).a.toLowerCase()
if(l.a!=null)break
if(t==="crate"&&q<46){l.a=new C.G6(new A.e9z(m,r),"\ud83d\udce6 Pick up the crate")
break}if(t==="pole"||t==="lamppost"){o=m.d
n=o.d
n===$&&C.c()
o=n[o.e].k3.q(0,r.a)&&q<60}else o=!1
if(o){l.a=new C.G6(new A.e9A(m,r),"\ud83d\udd27 Fix the street light")
break}if(D.d.q(B.Hw,t)&&q<36){l.a=new C.G6(new A.e9B(m,r),"\ud83c\udf4e Feed the "+p)
break}if(D.d.q(B.dbt,t)&&q<60){l.a=new C.G6(new A.e9C(m,r),"\ud83d\ude97 Get in the "+p)
break}}}w=l.a
w=w==null?null:w.b
u=m.cK
if(w!=(u==null?null:u.b))m.m(new A.e9D(l,m))},
bPd(d){var w,v=this,u=v.cl,t=d.a,s=u.h(0,t),r=B.ht.h(0,d.b).a
if(s!=null&&v.CW.gik()/1000-s<30){v.ef("The "+r.toLowerCase()+" has just eaten. Come back in a little while.",!1)
return}u.n(0,t,v.CW.gik()/1000)
u=v.ghH()
if(u==null)w=null
else{++u.r
w="You fed the "+r.toLowerCase()+". +1 point."
u.PA(w)}if(w==null)w="You fed the "+r.toLowerCase()+"."
A.fU(880,90,0.25,"tri")
v.m(new A.e6Q())
v.iC(w)},
bRQ(d){var w=this,v=w.aB
if(v==null)return
w.bD=d
v.CW=d.a
v.ay=22
v.ch=2.4
v.f=d.c
v.r=d.d
v.w=Math.atan2(Math.cos(d.e*3.141592653589793/2),-Math.sin(d.e*3.141592653589793/2))
v.at=null
v.Mk(0)
w.m(w.giR())
w.iC("You are driving the "+B.ht.h(0,d.b).a.toLowerCase()+". Slide the stick to drive. Press Get out to stop.")
A.fU(300,120,0.25,"tri")},
bS1(){var w,v,u,t,s,r,q=this,p=q.bD,o=q.aB
if(p==null||o==null)return
p.c=o.f
p.d=o.r
w=o.w
p.e=D.o.F(D.k.V((w-1.5707963267948966)/1.5707963267948966),4)
v=w+1.5707963267948966
o.CW=q.bD=null
o.ay=7
o.ch=1
o.z=!1
o.Mk(0)
for(w=[46,62,80],u=0;u<3;++u){t=w[u]
s=o.f+Math.sin(v)*t
r=o.r+Math.cos(v)*t
if(!o.KE(s,r)){o.f=s
o.r=r
break}}o.aIU()
q.m(q.giR())
q.iC("You got out.")},
bN6(){var w=this.bD,v=this.aB
if(w==null||v==null)return null
return new C.e9([w.b,v.f,v.r,v.w,w.f])},
y6(d){return this.cmr(d)},
cmr(d){var w=0,v=C.j(x.H),u=1,t=[],s=[],r=this,q
var $async$y6=C.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:++r.bZ
u=2
q=r.c
q.toString
w=5
return C.b(C.a3(q,!1).cg(d),$async$y6)
case 5:s.push(4)
w=3
break
case 2:s=[1]
case 3:u=1;--r.bZ
w=s.pop()
break
case 4:return C.h(null,v)
case 1:return C.f(t.at(-1),v)}})
return C.i($async$y6,v)},
YH(){var w=0,v=C.j(x.H),u=1,t=[],s,r,q
var $async$YH=C.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
w=6
return C.b(C.az(),$async$YH)
case 6:s=e
w=C.ew(J.q(s.a,"ngmy_city_locked_until"))!=null?7:8
break
case 7:w=9
return C.b(J.hy(s,"ngmy_city_locked_until"),$async$YH)
case 9:case 8:u=1
w=5
break
case 3:u=2
q=t.pop()
w=5
break
case 2:w=1
break
case 5:return C.h(null,v)
case 1:return C.f(t.at(-1),v)}})
return C.i($async$YH,v)},
aBe(d){var w=this,v=++w.hJ
if(v>=3){w.hJ=0
w.AY()
w.b_G()}else if(v===2){w.ef(d+". That is two in a row.",!1)
w.b_G()}else w.ef(d+". Answer the phone and finish the job, or you lose your place.",!1)},
b_G(){A.fU(1046,160,0.3,"sine")
this.m(new A.e7w(this))},
gaWg(){return this.bZ>0||this.cI!=null||Date.now()<0||this.p4},
c6C(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this,a2=a1.d
a2===$&&C.c()
a2=a2.d
a2===$&&C.c()
w=D.d.h_(a2,new A.e7t())
v=a1.ghH()
a2=x._
u=C.a([],a2)
for(t=w.x,s=t.length,r=w.k4,q=0;q<t.length;t.length===s||(0,C.M)(t),++q){p=t[q]
o=p.b
if(o==="house2"||o==="bighouse"){o=p.a
o=!r.q(0,o)&&o!==a1.ja}else o=!1
if(o)u.push(p)}s=C.a([],a2)
for(o=t.length,n=w.k3,q=0;q<t.length;t.length===o||(0,C.M)(t),++q){p=t[q]
m=p.b
if((m==="pole"||m==="lamppost")&&!n.q(0,p.a))s.push(p)}l=new C.Z(t,new A.e7u(),C.S(t).k("Z<1>"))
k=C.a([0,1,2,3],x.t)
o=a1.iL
D.d.dO(k,o)
a2=C.a([],a2)
for(m=t.length,j=w.cy,q=0;q<t.length;t.length===m||(0,C.M)(t),++q){p=t[q]
i=p.b
if((i==="tower"||i==="hq")&&!j.ai(0,p.a))a2.push(p)}for(t=k.length,m=v!=null,q=0;q<k.length;k.length===t||(0,C.M)(k),++q){h=k[q]
if(h===0&&u.length!==0&&r.a<4){p=u[o.au(u.length)]
a2=p.a
r.M(0,a2)
a1.ja=a2
return new A.Q6(p,p.b==="bighouse"?"the big house":"the house","power","",0)}if(h===1&&m&&!l.gam(0)){i=v.gC0()
g=C.S(i).k("Z<1>")
f=C.C(new C.Z(i,new A.e7v(),g),g.k("J.E"))
i=f.length
if(i!==0){e=f[o.au(i)]
e.e=!0
e.c=Math.min(e.c,70)
d=l.gaf(0)
if(!d.C())C.b8(C.ft())
return new A.Q6(d.gR(0),"the hospital","sick",e.a.b,0)}}if(h===3&&a2.length!==0&&j.a<3){p=a2[o.au(a2.length)]
a0=2+o.au(A.hsJ(p)-1)
j.n(0,p.a,a0)
return new A.Q6(p,p.b==="hq"?"the NGMY company building":"the office tower","office","",a0)}if(h===2&&s.length!==0&&n.a<4){p=s[o.au(s.length)]
n.M(0,p.a)
return new A.Q6(p,"the street","light","",0)}}return null},
aWq(d){var w,v,u,t=this.d
t===$&&C.c()
t=t.d
t===$&&C.c()
w=D.d.h_(t,new A.e7f())
switch(d.c){case"power":return!w.k4.q(0,d.a.a)
case"light":return!w.k3.q(0,d.a.a)
case"office":return!w.cy.ai(0,d.a.a)
default:v=this.ghH()
if(v==null)return!1
t=v.c
t===$&&C.c()
u=new C.Z(t,new A.e7g(d),C.S(t).k("Z<1>"))
if(!u.gaf(0).C())return!0
return u.gI(0).r>=0||!u.gI(0).e||!u.gI(0).f}},
S6(d){var w,v,u,t=this,s=t.aB
if(s!=null){w=t.d
w===$&&C.c()
v=w.d
v===$&&C.c()
w=v[w.e].c!=="outside"}else w=!0
if(w)return
if(t.aH!=null)t.aWI()
s.at=null
s.Mk(0)
u=t.bQL(d,s)
s.f=u.a
s.r=u.b
s.aIU()
w=t.e
w===$&&C.c()
w.xb(170,new A.r(s.f,30,s.r))
if(!t.aK)t.a2k()},
bQL(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=d.b,i=B.ht.h(0,j)
i.toString
w=B.aOS.q(0,j)
v=w?i.d/2+32:34
u=A.vs(new A.r(0,0,1),d.e*3.141592653589793/2)
j=u.c
i=u.a
t=-i
s=C.a([],x.f)
if(w)for(r=0;r<5;++r)for(q=v+B.d8r[r],p=i*q,q=j*q,o=0;o<5;++o){n=B.cZ2[o]
s.push(new C.z(d.c+p+j*n,d.d+q+t*n))}else for(m=0;m<12;++m){l=m*3.141592653589793/6
s.push(new C.z(d.c+Math.cos(l)*v,d.d+Math.sin(l)*v))}for(j=s.length,r=0;r<s.length;s.length===j||(0,C.M)(s),++r){k=s[r]
if(!e.KE(k.a,k.b))return k}return D.d.gI(s)},
cxg(d){var w,v,u=this
u.cI=d
u.hK=0
u.S6(d.a)
w=d.c
A:{if("sick"===w){v="New job: "+d.d+" is sick. Go into the hospital and onto the desk."
break A}if("light"===w){v="New job: a street light is out. Tap the dark light to fix it."
break A}v="New job: a house has no power. Walk in and fix it at the panel."
break A}u.ef(v,!0)
u.m(new A.e8L())},
bSA(d){var w,v=this,u=v.d
u===$&&C.c()
w=u.d
w===$&&C.c()
if(w[u.e].c!=="outside")return
v.S6(d)
u=d.b
if(u==="house2"||u==="bighouse")v.aaH(d)
else if(u==="tower"||u==="hq"){v.aaH(d)
v.m(new A.e79(v))}else v.ef(y.Y,!0)},
cBM(){var w,v,u,t=$.aQJ(),s=C.a([],x.f),r=this.gpj()
r=r==null?null:r.alY(this.CW.gik()/1000)
if(r==null)r=B.HE
w=r.length
v=0
for(;v<r.length;r.length===w||(0,C.M)(r),++v){u=r[v]
s.push(new C.z(u.b,u.c))}t.d=s
return A.ieR(this.CW.gik()/1000)},
cqs(d){var w,v,u,t,s,r=this,q=Date.now()
if(q-r.mI<1e4)return
r.mI=q
w=r.aB
if(w==null)return
A.fU(110,600,0.5,"noise")
C.fG()
r.bb=r.b0=0
w.at=null
v=r.c5
v.a=Math.min(v.a,0.2)
v.c=v.d=0
u=B.kj[d].a==="bus"?"bus":"police car"
v=r.d
v===$&&C.c()
t=v.d
t===$&&C.c()
v=t[v.e].x
t=C.S(v).k("Z<1>")
s=C.C(new C.Z(v,new A.e8z(),t),t.k("J.E"))
if(s.length===0){r.ef("A "+u+" ran you over! Always cross at the zebra crossing when the green walking person shows.",!1)
return}v=r.gpj()
if(v!=null)v.cUH(D.d.gI(s))
r.S6(D.d.gI(s))
r.aaH(D.d.gI(s))
r.ef("\ud83d\ude91 A "+u+" ran you over! An ambulance brought you to the hospital. Medicine and food are being ordered for you: they are on the Orders board. Cross at the zebra crossing when the green walking person shows.",!1)
r.m(new A.e8A(r))},
aiy(){var w=0,v=C.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g
var $async$aiy=C.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:h=r.d
h===$&&C.c()
if(h.a.length!==0){w=1
break}q=null
p=$.ajC
w=p==null||p.a!==h.b?3:4
break
case 3:t=6
w=9
return C.b(A.aT7(),$async$aiy)
case 9:q=e
t=2
w=8
break
case 6:t=5
g=s.pop()
w=8
break
case 5:w=2
break
case 8:case 4:if(r.c==null){w=1
break}n=$.ajC
if(n!=null&&n.a===r.d.b)m=n
else{if(q!=null){h=C.aK(J.q(q,"seed"))
h=h==null?null:D.k.O(h)
if(h==null)h=-1
h=h===r.d.b}else h=!1
if(h)m=A.fVb(q)
else if(q!=null&&r.eh){h=C.aK(J.q(q,"seed"))
l=h==null?null:D.k.O(h)
h=A.aVw(l==null?r.d.b:l)
r.d=$.E0=h
A.h80(h,q)
m=A.fVb(q)}else{h=r.d.b
m=A.fVa(h,h)
m.Nn(r.d)}}$.ajC=m
for(h=m.d,k=h.length,j=r.bI,i=0;i<h.length;h.length===k||(0,C.M)(h),++i)j.M(0,h[i].a)
r.m(new A.e8M(r))
r.bu=C.dm(D.fS,new A.e8N(r))
case 1:return C.h(u,v)
case 2:return C.f(s.at(-1),v)}})
return C.i($async$aiy,v)},
c6B(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=i.ghH()
if(h==null||i.c==null)return
if(i.cx==null){w=i.d
w===$&&C.c()
h.aCT(0,1,w)}if(++i.bW%8===0){w=i.d
w===$&&C.c()
h.CN(0,w)}if(i.aH!=null&&i.gajQ())i.as9()
w=!1
if(!i.aK)if(i.bZ===0){v=i.d
v===$&&C.c()
u=v.d
u===$&&C.c()
if(u[v.e].c==="outside"){w=i.c5
w=w.c>0||w.d>0}}if(w){t=i.c5.a6x(1)
if(t!=null)i.ef(t,!1)
i.b7l()}if(i.aK){w=i.d
w===$&&C.c()
v=w.d
v===$&&C.c()
w=v[w.e].c==="outside"&&!i.c5.f&&i.iL.au(240)===0}else w=!1
if(w){w=i.c5
w.f=!0
w.aT()
i.ef("You feel unwell: a headache. You tire faster until you take pills from a shop.",!1)}if(Date.now()<0||i.bZ>0)return
w=!1
if(D.o.F(i.bW,45)===20){v=i.d
v===$&&C.c()
if(v.a.length===0){w=v.d
w===$&&C.c()
v=w[v.e].c==="outside"
w=v}}if(w)i.c40()
w=i.d
w===$&&C.c()
if(w.a.length===0){v=w.d
v===$&&C.c()
v=v[w.e].c==="outside"}else v=!1
if(v){w=i.gpj()
s=w==null?null:w.Fw(0,i.CW.gik()/1000)
if(s!=null)i.ef("\ud83c\udfc1 "+s,!0)
r=i.aB
if(r!=null){w=i.gpj()
w=(w==null?null:w.x)!=null&&i.aH==null}else w=!1
if(w){w=i.gpj()
w.toString
i.aRk(w.bjr(r.f,r.r,i.CW.gik()/1000))}q=i.cI
if(q!=null){++i.hK
if(i.aWq(q)){i.hJ=0
i.l9=Date.now()
i.lu=0
i.cI=null
i.hK=0
if(q.c==="sick"){p=10+i.iL.au(26)
w=i.ghH()
if(w!=null)w.r+=p
i.ef("The sick person is at the hospital. +"+p+" stars. Well done.",!0)}if(i.c!=null)i.m(i.giR())}else if(i.hK>=240){i.cI=null
i.hK=0
i.aBe("The job was not finished in time")}}else{w=i.eG
if(w.length!==0&&i.aH==null&&i.bz==null&&i.bA==null&&Date.now()-i.l9>1e4){o=D.d.cG(w,0)
if(!i.aWq(o))i.cxg(o)}else if(i.bz==null&&i.bA==null&&++i.lu>=45)i.cti()}}else{v=w.d
v===$&&C.c()
if(v[w.e].c!=="outside")i.lu=0}for(w=h.d,v=w.length,u=i.bI,n=0;n<w.length;w.length===v||(0,C.M)(w),++n){m=w[n]
l=i.d
k=l.d
k===$&&C.c()
if(k[l.e].c!=="outside")continue
if((i.bZ>0||i.cI!=null||Date.now()<0||i.p4)&&!u.q(0,m.a))continue
if(u.M(0,m.a)){i.lu=0
i.bz=m
i.bA=null
i.b6w()}}u.pm(new A.e7m(h),!0)
j=i.bz
if(j!=null&&!D.d.b3(w,new A.e7n(j)))i.AY()},
cti(){var w,v,u=this
u.lu=0
w=u.c6C()
if(w==null)return
if(u.gaWg()){v=u.eG
if(v.length<3)v.push(w)
return}u.b3K(w)},
b3K(d){var w=this
w.lu=0
w.bz=null
w.bA=d
w.b6w()},
b6w(){var w,v=this
v.T=0
w=v.P
if(w!=null)w.a3(0)
v.P=C.dm(D.rc,new A.e8O(v))
v.m(new A.e8P())},
AY(){var w=this,v=w.P
if(v!=null)v.a3(0)
w.P=null
if(w.c==null)return
w.m(new A.e8W(w))},
cfQ(){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null
if(l.ok!=null)return k
if(l.aK){w=l.d
w===$&&C.c()
v=w.d
v===$&&C.c()
u=v[w.e].c==="outside"}else u=!1
t=l.bz
s=l.bA
if(!u&&t==null&&s==null)return k
r=l.ex
w=new A.e7L()
v=new A.e7U(r)
q=x.p
p=C.a([],q)
if(s!=null){o=C.h7(D.aE,k,C.d(s.gbdJ(),k,k,k,k,k,k,D.nD,k,k,k),k,28)
n=s.gaDp()
p.push(v.$7$about$avatar$glow$onAnswer$onDecline$onLater$who(s.gbpM(),o,D.bI,new A.e7N(l,s),new A.e7O(l),new A.e7P(l,s),n))}if(t!=null){o=B.CE[t.b]
n=o.b
p.push(v.$6$about$avatar$glow$onAnswer$onDecline$who("NGMY City \xb7 mobile",C.h7(o.e.c,k,C.d(n[0],k,k,k,k,k,k,D.Jy,k,k,k),k,28),D.bm,new A.e7Q(l,t),l.gcxM(),n))}if(u){v=C.a([],q)
o=l.cK
if(o!=null)v.push(w.$3$col("\u270b "+o.b,o.a,D.bI))
o=C.a([],q)
if(l.bD==null){n=l.bh
m=n?"\ud83c\udfc3 Run: on":"\ud83c\udfc3 Run"
o.push(w.$3$on(m,new A.e7R(l),n))}if(l.bD==null)o.push(w.$3$col("\u2b06 Jump",new A.e7S(l),D.co))
v.push(C.B(o,D.m,k,D.e,D.P,0,k,k))
w=l.bD==null
o=w?206:140
v.push(new C.D(D.a_0,new C.a7(o,k,new A.Ui(l.c5,!w,12,k),k),k))
p.push(new C.D(B.bz0,C.B(C.a([new A.aIf(new A.e7T(l),k),C.x(v,D.dE,k,D.e,D.P,0,D.p)],q),D.dE,k,D.iy,D.j,0,k,k),k))}return new C.a7(r,k,C.x(p,D.m,k,D.e,D.P,0,D.p),k)},
aTb(){var w=this.d
w===$&&C.c()
if(w.a.length!==0)this.Ef()
else this.a03()},
Ef(){var w=0,v=C.j(x.H),u,t=this,s,r,q,p
var $async$Ef=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:p=t.d
p===$&&C.c()
s=p.d
s===$&&C.c()
r=s[p.e]
if(r.gyZ()){t.iC("This lesson is done. Try everything: it all works.")
w=1
break}p=r.p4
w=p==="ptrap"||p==="faucet"?3:5
break
case 3:if(r.RG==null)r.RG=A.fYU()
w=6
return C.b(t.y6(C.e_(new A.e7x(r),!1,null,x.H)),$async$Ef)
case 6:w=4
break
case 5:if(r.R8==null)r.R8=new A.Cu(C.T(x.S,x.N))
w=7
return C.b(t.y6(C.e_(new A.e7y(r),!1,null,x.H)),$async$Ef)
case 7:case 4:if(t.c==null){w=1
break}t.m(t.giR())
if(r.gyZ()){p=t.ghH()
if(p!=null)p.r+=10
q=r.p4
A:{p="Done! Tap the outlet and plug something in."
if("switch"===q){p="Done! Tap the switch on the wall: the light comes on."
break A}if("fan"===q){p="Done! Tap the wall switch and the fan spins."
break A}if("outlet"===q||"gfci"===q)break A
s=D.d.q(B.jS,q)
if(s){p="Done! Tap the switch on the wall: it works."
break A}s=D.d.q(B.lG,r.p4)
if(s)break A
p="Done! The sink works."
break A}t.iC(p)}case 1:return C.h(u,v)}})
return C.i($async$Ef,v)},
ajP(d){return this.cEJ(d)},
cEJ(d){var w=0,v=C.j(x.H),u,t=this,s,r,q,p
var $async$ajP=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:p=t.d
p===$&&C.c()
s=p.d
s===$&&C.c()
r=s[p.e].id[d]
q=r.gwy()
w=3
return C.b(t.y6(C.e_(new A.e9I(r),!1,null,x.H)),$async$ajP)
case 3:if(t.c==null){w=1
break}t.m(t.giR())
if(r.gwy()&&!q){p=t.ghH()
if(p!=null)p.r+=8}if(r.gwy()){p=q?"":"You are paid 8 stars. "
s=r.a==="switch"?"Tap it to turn the light on and off.":"Tap it to plug something in."
t.iC("Wired! "+p+s)}case 1:return C.h(u,v)}})
return C.i($async$ajP,v)},
a03(){var w=0,v=C.j(x.H),u,t=this,s,r,q,p,o,n
var $async$a03=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:n=t.d
n===$&&C.c()
s=n.d
s===$&&C.c()
r=s[n.e]
if(r.c==="outside"){w=1
break}s=r.CW
if(s==null){q=A.cpT(A.ifI(r),r.b,!1,n.b*37+r.a,!1)
q.alN()
if(!r.ay)q.cHJ()
r.CW=q
n=q}else n=s
n.b=t.d.c
p=r.gkG()
w=3
return C.b(t.y6(C.e_(new A.e7A(r),!1,null,x.H)),$async$a03)
case 3:if(t.c==null){w=1
break}t.m(t.giR())
if(r.gkG()&&!p){o=10+t.iL.au(26)
n=t.ghH()
if(n!=null)n.r+=o
n=r.gjN()?"":" The room still needs its plumbing, so it stays red until the pipes are done too."
t.ef(r.b+": the wiring is finished and the light has power. You are paid "+o+" stars!"+n,!0)}else if(r.gkG()){n=r.gjN()?"":" The room still needs its plumbing."
t.iC(r.b+": the wiring is finished. The light has power."+n)}case 1:return C.h(u,v)}})
return C.i($async$a03,v)},
a_V(){var w=0,v=C.j(x.H),u,t=this,s,r,q,p,o,n
var $async$a_V=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:n=t.d
n===$&&C.c()
s=n.d
s===$&&C.c()
r=s[n.e]
s=r.c
if(!(s==="bathroom"||s==="kitchen")){t.ef("This room has no plumbing. Bathrooms and the kitchen do.",!1)
w=1
break}q=r.fr
if(q==null){s=s==="kitchen"?"kitchen":"bathroom"
s=r.fr=A.fYT(!1,n.b*41+r.a,s)
n=s}else n=q
if(!r.ch&&!n.ga3l())r.fr.cHI()
r.fr.b=t.d.c
p=r.gjN()
w=3
return C.b(t.y6(C.e_(new A.e7z(r),!1,null,x.H)),$async$a_V)
case 3:if(t.c==null){w=1
break}t.m(t.giR())
if(r.gjN()&&!p){o=10+t.iL.au(26)
n=t.ghH()
if(n!=null)n.r+=o
t.ef(r.b+": the plumbing is finished and nothing leaks. You are paid "+o+" stars!",!0)}else if(r.gjN())t.iC(r.b+": the plumbing is finished and nothing leaks.")
case 1:return C.h(u,v)}})
return C.i($async$a_V,v)},
bAg(){var w=this.c
w.toString
return C.bT(E.lv,null,new A.e5c(this),w,!0,!0,!1,D.jZ,!1,!1,x.H)},
bzV(d){var w,v,u,t,s,r,q,p,o=this,n=o.d
n===$&&C.c()
w=n.d
w===$&&C.c()
v=w[n.e]
n=v.c
if(n==="outside"||n==="hall"){o.ef("Add devices in a room, not in the hall or the garden.",!1)
return}n=v.id
if(n.length>=4){o.ef("This room already has four added devices.",!1)
return}w=C.a([-v.gev(0)/4,v.gev(0)/4],x.n)
for(u=v.w,t=D.d.gaf(u),s=new C.f5(t,new A.e56());s.C();)w.push(t.gR(0).c)
for(u=D.d.gaf(u),t=new C.f5(u,new A.e57());t.C();)w.push(u.gR(0).c+24)
for(u=n.length,r=0;r<n.length;n.length===u||(0,C.M)(n),++r)w.push(n[r].b)
p=-v.gev(0)/2+14
for(;;){if(!(p<=v.gev(0)/2-14)){q=null
break}if(D.d.d9(w,new A.e58(p))){q=p
break}p+=6}if(q==null){o.ef("There is no free place left on the back wall.",!1)
return}o.m(new A.e59(o,v,d,q))
o.iC("Added. It is red because it is not wired: tap it to wire it.")},
ae2(d,e){var w,v,u=this,t=u.d
t===$&&C.c()
w=t.d
w===$&&C.c()
v=w[t.e].BO(u.Q)
if(v==null)return
u.m(new A.e7q(u,v,D.d.q(B.Rg,v.b),d,e))},
c6J(){var w,v,u=this,t=u.d
t===$&&C.c()
w=t.d
w===$&&C.c()
v=w[t.e].BO(u.Q)
if(v==null)return
u.m(new A.e9h(u,v))},
cnA(){var w,v,u=this,t=u.d
t===$&&C.c()
w=t.d
w===$&&C.c()
v=w[t.e].BO(u.Q)
if(v==null)return
u.m(new A.e8o(u,v))
u.iC(B.ht.h(0,v.b).a+": "+B.cTy[v.f]+".")},
c6H(d){var w,v,u=this,t=u.d
t===$&&C.c()
w=t.d
w===$&&C.c()
v=w[t.e].BO(u.Q)
if(v==null)return
u.m(new A.e8p(u,v))},
bzY(d){var w,v=this,u=v.d
u===$&&C.c()
w=u.d
w===$&&C.c()
v.m(new A.e5a(v,w[u.e].M(0,d)))
v.iC(B.ht.h(0,d).a+" added. Move it with the arrows.")},
At(d,e,f,g,h){var w=null,v=e?g.j(0.25):D.c.j(0.07),u=C.m(14),t=e?g:D.aZ
t=C.I(t,D.r,e?2:1)
v=C.a([C.p(w,C.d(d,w,w,w,w,w,w,C.l(w,w,e?g:D.c,w,w,w,w,w,w,w,w,11,w,w,D.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),D.f,w,w,new C.o(v,w,t,u,w,w,D.n),w,w,w,w,D.eH,w,w,w)],x.p)
if(h)v.push(C.ao(w,C.p(w,w,D.f,w,w,new C.o(D.aw,w,C.I(B.F9,D.r,2),w,w,w,D.a5),w,11,w,w,w,w,w,11),w,w,w,-2,-3,w))
return new C.D(D.fw,C.aB(w,new C.an(D.a_,w,D.aa,D.f,v,w),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,!1,D.a4),w)},
ig(d,e,f,g){return this.At(d,e,f,g,!1)},
IW(d,e,f){return this.At(d,e,f,D.aE,!1)},
aBl(d,e,f,g){var w=null,v=g==null,u=v?34:w,t=v?w:D.l1,s=C.m(10),r=e?D.c:D.aZ
r=C.I(r,D.r,e?3:1)
if(v)v=w
else v=C.at(C.d(g,w,w,w,w,w,w,C.l(w,w,d.jp()>0.5?D.w:D.c,w,w,w,w,w,w,w,w,12,w,w,D.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,w,w)
return new C.D(E.tU,C.aB(w,C.p(w,v,D.f,w,w,new C.o(d,w,r,s,w,w,D.n),w,34,w,w,t,w,w,u),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,!1,D.a4),w)},
cyF(d,e,f){return this.aBl(d,e,f,null)},
Dg(d,e){var w=null,v=D.c.j(0.1),u=C.m(10),t=C.I(D.aZ,D.r,1)
return new C.D(D.fw,C.aB(w,C.p(w,C.X(d,D.c,w,w,w,20),D.f,w,w,new C.o(v,w,t,u,w,w,D.n),w,36,w,w,w,w,w,40),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,e,w,w,w,w,w,w,!1,D.a4),w)},
bIm(){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null
if(k.cx!=null){w=k.dy
return C.B(C.a([C.E(C.d("\ud83c\udfac "+(w.length===0?"Walking in":w),j,1,D.a2,j,j,j,B.fgk,j,j,j),1),k.ig("\u23f9 Stop the tour",!0,k.gcxP(),D.cs)],x.p),D.m,j,D.e,D.j,0,j,j)}switch(k.r){case"furniture":w=k.d
w===$&&C.c()
v=w.d
v===$&&C.c()
u=v[w.e].BO(k.Q)
w=x.p
v=C.a([],w)
if(u!=null){t=C.a([k.Dg(D.l4,new A.e6m(k)),k.Dg(D.jP,new A.e6n(k)),k.Dg(D.w5,new A.e6o(k)),k.Dg(D.ua,new A.e6p(k)),k.Dg(G.anM,k.gc6I()),k.Dg(D.nq,k.gcnz())],w)
s=k.d
r=s.d
r===$&&C.c()
if(r[s.e].c==="outside")t.push(k.Dg(D.Op,k.gcsX()))
t.push(k.Dg(D.ec,k.gc6G(k)))
v.push(new C.a7(j,30,C.cq(t,j,j,j,j,D.aN,!1),j))}else v.push(B.aYs)
w=C.a([],w)
for(t=B.ht.gdT(B.ht),t=t.gaf(t);t.C();){s=t.gR(t)
r=D.d.q(B.deG,s.a)
q=k.d
p=q.d
p===$&&C.c()
if(r===(p[q.e].c==="outside")){r=s.b
w.push(k.ig(r.b+" "+r.a,!1,new A.e6q(k,s),D.b2))}}v.push(new C.a7(j,30,C.cq(w,j,j,j,j,D.aN,!1),j))
return C.x(v,D.m,j,D.e,D.P,0,D.p)
case"walls":w=k.as
v=w<0
w=v?"All walls":"Wall "+(w+1)+": tap Look to reset"
v=C.a([k.IW(w,v,new A.e6r(k))],x.p)
for(o=0;o<8;++o)v.push(k.aBl(B.ay5[o],!1,new A.e6s(k,o),B.doV[o]))
return new C.a7(j,30,C.cq(v,j,j,j,j,D.aN,!1),j)
case"floor":w=C.a([],x.p)
for(o=0;o<7;++o){v=B.axP[o]
t=k.d
t===$&&C.c()
s=t.d
s===$&&C.c()
w.push(k.aBl(v.b,s[t.e].Q===o,new A.e6t(k,o),v.a))}return new C.a7(j,30,C.cq(w,j,j,j,j,D.aN,!1),j)
case"ceiling":w=k.d
w===$&&C.c()
v=w.d
v===$&&C.c()
w=v[w.e].go==="fan"?"\ud83c\udf00 Fan (tap for light)":"\ud83d\udca1 Light (tap for fan)"
w=C.a([k.ig(w,!1,new A.e6u(k),D.bc)],x.p)
for(o=0;o<4;++o){v=B.awF[o]
t=k.d
s=t.d
s===$&&C.c()
w.push(k.cyF(v,s[t.e].as===o,new A.e6v(k,o)))}return new C.a7(j,30,C.cq(w,j,j,j,j,D.aN,!1),j)
default:n=C.aX(x.S)
w=C.a([k.ig("\u26f6 Full screen",!1,k.gbOp(),D.aR)],x.p)
v=k.d
v===$&&C.c()
t=v.d
t===$&&C.c()
if(t[v.e].c==="outside")w.push(k.ig("\ud83d\udcf1 Phone",!1,k.gbOr(),D.c8))
v=k.d
t=v.d
t===$&&C.c()
v=t[v.e].w
t=v.length
m=0
for(;m<v.length;v.length===t||(0,C.M)(v),++m){l=v[m]
s=l.d
if(n.M(0,s)){r=k.d.d
r===$&&C.c()
s=r[s]
r=s.gkG()&&s.gjN()
w.push(k.At("\ud83d\udeaa "+s.b,!1,new A.e6w(k,l),D.b2,!r))}}return new C.a7(j,30,C.cq(w,j,j,j,j,D.aN,!1),j)}},
B(d){var w,v=this,u=null
if(Date.now()<0){w=C.dE(0,0,0,0-Date.now(),0,0).a
return C.c5(u,F.n9,C.bm(!0,C.at(new C.D(D.rh,C.x(C.a([B.fFL,D.ad,B.fFS,D.R,B.fG4,D.aA,C.d("It opens again in "+D.o.an(w,36e8)+"h "+D.o.F(D.o.an(w,6e7),60)+"m",u,u,u,u,u,u,B.fib,u,u,u),D.dW,C.bH(D.aSI,new A.e9L(d),u)],x.p),D.m,u,D.e,D.P,0,D.p),u),u,u,u),!0,!1,D.af,!0,!0),u,!1,!1,u,u)}w=C.a([C.bU(0,new C.eG(v.bEl(d),v.Z),0,0,0)],x.p)
if(v.az!=null)w.push(C.bU(0,C.e2(C.l5(new A.e9M(v),u,D.dB,D.hD,new C.cs(v.aE,x.ac),new A.e9N(v),new C.bn(1,0,x.g6),x.i),!0,u),0,0,0))
return new C.an(D.a_,u,D.aa,D.t,w,u)},
bGC(){var w,v,u=this,t=null,s=C.a([],x.p)
if(u.gajQ())s.push(u.ig("\u2705 Complete work",!0,u.gaQ3(),D.be))
w=u.aK
v=w?"\u23f9 Stop walking":"\ud83d\udeb6 Walk the city"
s.push(u.ig(v,w,w?u.gb6O():u.gb6z(),D.bm))
s.push(u.ig("\ud83c\udfd7 Build",!1,u.gaMT(),D.bm))
w=u.ghH()
w=w==null?t:w.d.length
if(w==null)w=0
s.push(u.At("\ud83d\udcde Calls",!1,new A.e5Z(u),D.c8,w>0))
s.push(u.ig("\ud83c\udfe5 Hospital",!1,new A.e6_(u),D.cs))
s.push(u.ig("\ud83d\uded2 Shop",!1,new A.e60(u),D.cZ))
s.push(u.ig("\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc67 People",!1,new A.e64(u),D.co))
s.push(u.ig("\ud83c\udfe0 Go inside",!1,new A.e65(u),D.bm))
w=u.aH
if((w==null?t:w.a==="shop")===!0)s.push(u.ig("\ud83d\uded2 Buy things",u.k2,new A.e66(u),D.bI))
w=u.aH
if((w==null?t:w.a==="tower")===!0)s.push(u.ig("\ud83c\udfe2 Level "+w.f+" of "+w.gLT(),!1,new A.e67(u),D.co))
if(u.cI!=null)s.push(u.ig("\ud83d\udccb My job"+(u.avG()==null?"":" \xb7 "+C.w(u.avG())+" m"),!1,new A.e68(u),D.bI))
w=u.eG.length
if(w!==0)s.push(u.ig("\u23f3 Waiting: "+w,!1,new A.e69(u),D.aE))
s.push(u.At("\ud83d\udef5 Orders",u.gpj().x!=null,new A.e6a(u),D.bI,u.gpj().x==null))
w=u.p4
v=w?"\u23f9 Stop drone":"\ud83d\ude81 Drone"
s.push(u.ig(v,w,new A.e6b(u),D.aR))
w=u.h3
v=w?"\ud83c\udff7 Show tags":"\ud83c\udff7 Hide tags"
s.push(u.ig(v,w,new A.e61(u),D.cs))
s.push(u.ig("\ud83d\udc41 Hide all",!1,new A.e62(u),D.bL))
w=u.gKm()
s.push(u.ig("\ud83d\ude96 Uber",(w==null?t:w.f)!=null,u.gcCj(),D.bI))
s.push(u.ig("\ud83d\uddfa Map",u.y,new A.e63(u),D.by))
return s},
gcvX(){var w,v,u,t,s,r,q,p,o=this
if(!o.h3){w=o.f
w===$&&C.c()
return w}w=o.t0
v=o.f
v===$&&C.c()
if(w===v&&o.qL!=null){w=o.qL
w.toString
return w}o.t0=v
w=C.a([],x.E)
for(u=o.f.c,t=u.length,s=0;s<u.length;u.length===t||(0,C.M)(u),++s){r=u[s]
q=!1
if(r.d===0)if(!r.c.A(0,D.bx)){p=r.b
if(!C.cU(p,"rooms still need work",0))q=!C.cU(p,"house is finished",0)}if(q)w.push(r)}u=o.f
return o.qL=new A.tI(v.a,v.b,w,u.d,u.e,0)},
bEl(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d=f.d
d===$&&C.c()
w=d.d
w===$&&C.c()
v=w[d.e]
d=x.w
w=C.aH(a0,e,d).w.a
u=f.er?w.b:w.a
f.ex=u
w=f.d
t=w.d
t===$&&C.c()
t=t[w.e].c==="outside"&&f.aH==null
w=w.a.length!==0?e:new A.e5j(f)
s=f.gcvX()
r=f.e
r===$&&C.c()
q=f.at
p=f.ax
o=f.ay
n=f.ah
if(f.er)d=62
else if(f.f_)d=C.aH(a0,e,d).w.r.b+66
else d=f.y&&f.d.a.length===0?104:10
m=f.cfQ()
l=x.p
k=C.a([],l)
if(f.y&&f.d.a.length===0&&!f.er)k.push(new A.biJ(f.d,f.gc6A(),Math.min(138,u*0.36),e))
j=A.XT(n,m,r,new A.e5k(f),new A.e5l(f),o,q,e,e,new A.e5w(),p,d,f.gbMv(),new A.e5x(f),f.gc6E(),s,t,w,k,e)
i=f.y1!=null||f.y2||f.R8||f.k3||f.go||f.k2||f.id
d=f.ok
h=(d==null?e:d.d)===1
if((i||h)&&!f.ah){d=C.a([j],l)
if(i){if(f.id)w=f.c0x()
else if(f.k2)w=f.cuo()
else if(f.go)w=f.cfD()
else if(f.k3)w=f.bNU()
else w=f.R8?f.bN7():f.bFy()
d.push(C.bU(0,w,0,0,0))}if(h)d.push(C.ao(e,C.e2(C.at(new C.jO(f.p3,new A.e5y(),e,e,x.cI),e,e,e),!0,e),e,e,0,0,74,e))
g=new C.an(D.a_,e,D.b1,D.t,d,e)}else g=j
if(f.ah)return f.bGP(g)
if(f.er)return f.bQO(g)
if(f.f_)return f.cj0(g)
d=f.d
if(d.a.length!==0)d=v.gyZ()?"Done \u2713":"To do"
else d=""+d.gcNe()+"/"+f.d.gqM().length+" done"
w=f.d
t=w.d
t===$&&C.c()
w=t[w.e].c==="outside"
t=!w?e:new A.Ui(f.c5,f.bD!=null,12,e)
if(w)w=f.bGC()
else{w=f.x?"\ud83d\udd2d See the whole room":"\ud83c\udfe0 Be inside"
w=C.a([f.ig(w,!1,new A.e5z(f),D.b2)],l)
if(f.d.a.length===0){s=f.cx!=null
r=s?"\u23f9 Stop tour":"\ud83c\udfac Tour"
w.push(f.ig(r,s,new A.e5A(f),D.c8))}w.push(f.ig("\u2b06 Look up at the ceiling",!1,f.gc1y(),D.b2))
s=f.z
r=s?"\ud83d\udeb6 Stop looking round":"\ud83d\udd04 Look all round (360)"
w.push(f.ig(r,s,new A.e5B(f),D.cZ))
w.push(f.ig("\ud83d\udcfa TV",!1,f.gcCd(),D.co))
s=f.d
if(s.a.length===0){r=s.d
r===$&&C.c()
s=r[s.e].c!=="outside"?"\ud83c\udf33 Go outside":"\ud83c\udfe0 Go inside"
w.push(f.ig(s,!1,new A.e5C(f),D.bm))}s=f.d
r=s.d
r===$&&C.c()
if(r[s.e].c==="outside"){s=f.aK
r=s?"\u23f9 Stop walking":"\ud83d\udeb6 Walk about"
w.push(f.ig(r,s,s?f.gb6O():f.gb6z(),D.bm))}if(f.d.a.length===0)w.push(f.ig("\u2795 Add",!1,f.gaMT(),D.bm))
if(f.d.a.length===0){s=f.ghH()
s=s==null?e:s.d.length
if(s==null)s=0
w.push(f.At("\ud83c\udfd8 Community",!1,new A.e5D(f),D.c8,s>0))}w.push(f.ig("\ud83d\udd26 Tester",f.w,new A.e5m(f),D.cZ))
if(f.d.a.length!==0)w.push(f.At("\ud83d\udd27 Do the lesson",!1,f.gc6D(),D.bI,!v.gyZ()))
else{s=f.At("\u26a1 Wiring",!1,f.gcfw(),D.bI,!v.gkG())
r=v.c
r=(r==="bathroom"||r==="kitchen")&&!v.gjN()
D.d.v(w,C.a([s,f.At("\ud83d\udeb0 Plumbing",!1,f.gceW(),D.co,r),f.ig("\ud83d\uddfa Map",f.y,new A.e5n(f),D.by)],l))}}return A.TO(D.aE,new A.e5o(f,a0),C.x(C.a([new C.a7(e,30,C.cq(w,e,e,e,e,D.aN,!1),e),D.av,new C.a7(e,30,C.cq(C.a([f.IW("\ud83d\udc41 Look",f.r==="look",new A.e5p(f)),f.IW("\ud83d\udecb Furniture",f.r==="furniture",new A.e5q(f)),f.IW("\ud83e\uddf1 Walls",f.r==="walls",new A.e5r(f)),f.IW("\ud83d\udfeb Floor",f.r==="floor",new A.e5s(f)),f.IW("\u2b1c Ceiling",f.r==="ceiling",new A.e5t(f)),f.IW("\ud83d\udeaa Doors",f.r==="doors",new A.e5u(f)),f.ig("\ud83d\udcd8 Learn",!1,new A.e5v(a0),D.by)],l),e,e,e,e,D.aN,!1),e),D.av,f.bIm()],l),D.E,e,D.e,D.P,0,D.p),g,d,v.b,t)},
clA(d){return C.bT(E.lv,null,new A.e8n(this),d,!0,!0,!0,D.jZ,!1,!1,x.H)}}
A.biJ.prototype={
B(d){var w=null,v=D.k.E((this.e-10)/126,0.5,1),u=D.w.j(0.6),t=C.m(12),s=C.I(D.aZ,D.r,1)
return C.p(w,new C.a7(126*v,84*v,C.aB(w,C.eQ(D.A,C.b4(w,w,w,new A.bi8(this.c,w),B.f_A),D.f,D.xk),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new A.dsd(this,v),w,w,w,w,!1,D.a4),w),D.f,w,w,new C.o(u,w,s,t,w,w,D.n),w,w,w,w,D.m1,w,w,w)}}
A.bi8.prototype={
a5(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=this.b,e=f.d
e===$&&C.c()
w=e.length
v=d.a
u=0
for(;u<e.length;e.length===w||(0,C.M)(e),++u){t=e[u]
s=t.d*14+1
r=t.e*14+1
q=s+(t.f*14-2)
p=r+(t.r*14-2)
o=new C.a5(s,r,q,p)
n=t.a===f.e
if(t.gkG()&&t.gjN())m=D.be
else m=!t.gkG()?D.aw:D.d0
l=C.bz(o,D.hM)
$.V()
k=new C.aq(D.U,D.S,D.Y,D.Z,D.W)
k.r=m.j(t.gkG()&&t.gjN()?0.35:0.5).gp(0)
j=k.H()
v.drawRRect(C.eL(l),j)
j.delete()
l=C.bz(o,D.hM)
k=new C.aq(D.U,D.S,D.Y,D.Z,D.W)
k.b=D.ac
k.c=n?2.2:0.8
k.r=(n?D.c:D.bU).gp(0)
j=k.H()
v.drawRRect(C.eL(l),j)
j.delete()
i=t.c
A:{if("bedroom"===i){l="\ud83d\udecf"
break A}if("bathroom"===i){l="\ud83d\udebf"
break A}if("kitchen"===i){l="\ud83c\udf73"
break A}if("living"===i){l="\ud83d\udecb"
break A}if("outside"===i){l="\ud83c\udf33"
break A}l=""
break A}h=new C.kz(new C.eH(l,g,g,D.cY,g,g,g,g,g,g,B.ffx),D.a6,D.c5,new C.km(1),g,g,g,g,D.c4,g)
h.eI()
l=h.b
k=l.c
l=l.a.c
h.a5(d,new C.t(s+(q-s)/2-k/2,r+(p-r)/2-l.gbc(l)/2))}},
av(d){return!0}}
A.aIf.prototype={
U(){return new A.bsA()},
bh7(d,e){return this.c.$2(d,e)}}
A.bsA.prototype={
aZc(d){var w,v,u={},t=u.a=d.aF(0,B.edf),s=t.gcH()>46?u.a=t.eQ(0,t.gcH()).aI(0,46):t,r=s.a/46,q=-s.b/46,p=Math.sqrt(r*r+q*q)
s=this.a
s.toString
w=p<0.15
v=w?0:r
s.bh7(v,w?0:q)
this.m(new A.f1o(u,this))},
aZb(){this.a.bh7(0,0)
this.m(new A.f1n(this))},
B(d){var w=this,v=null,u=C.p(v,v,D.f,v,v,new C.o(D.w.j(0.42),v,C.I(D.bm.j(0.9),D.r,2.4),v,v,v,D.a5),v,132,v,v,v,v,v,132),t=C.p(v,v,D.f,v,v,new C.o(v,v,C.I(D.bm.j(0.25),D.r,1.5),v,v,v,D.a5),v,66,v,v,v,v,v,66),s=w.d,r=s==null
if(r)s=D.J
return C.nI(D.cc,new C.a7(132,132,new C.an(D.A,v,D.aa,D.t,C.a([u,t,C.dJ(C.p(v,v,D.f,v,v,new C.o(D.bm.j(r?0.55:0.9),v,C.I(D.c,D.r,2),v,v,v,D.a5),v,56,v,v,v,v,v,56),s)],x.p),v),v),v,new A.f1p(w),new A.f1q(w),v,new A.f1r(w),v,v,new A.f1s(w))}}
A.eX6.prototype={}
A.Mc.prototype={}
A.Q6.prototype={
gbdJ(){var w,v=this.c
A:{if("sick"===v){w="\ud83e\udd12"
break A}if("light"===v){w="\ud83d\udca1"
break A}if("office"===v){w="\ud83c\udfe2"
break A}w="\u26a1"
break A}return w},
gaDp(){var w,v=this.c
A:{if("sick"===v){w=this.d
if(w.length===0)w="A neighbour"
break A}if("light"===v){w="City lights office"
break A}if("office"===v){w="Office manager"
break A}w="Your neighbour"
break A}return w},
gbpM(){var w,v=this.c
A:{if("sick"===v){w="Needs a doctor"
break A}if("light"===v){w="A street light is out"
break A}if("office"===v){w="No power in an office"
break A}w="No power at a house"
break A}return w},
gaGC(d){var w,v=this,u="I will pay you between 10 and 35 stars. Thank you!",t=v.c
A:{if("sick"===t){w=C.a(["Hello! "+v.gaDp()+" is very sick and cannot get up.","Please take them to the hospital: walk into the hospital and onto the desk to admit them.",u],x.s)
break A}if("office"===t){w=""+v.e
w=C.a(["Hello, this is the office manager. The office on level "+w+" of "+v.b+" has lost its power and nobody can work.","Please take the elevator up to level "+w+", and fix the wiring at the breaker panel there.",u],x.s)
break A}if("light"===t){w=C.a(["Hello! A street light is out and the street is dark.","It is the dark one with the red sign. Could you fix its wiring?",u],x.s)
break A}w=C.a(["Hello! All the lights went out in "+v.b+". The power is off in the whole house.","Could you check the breaker panel inside and fix the wiring? Switch the power off before you touch anything.",u],x.s)
break A}return w}}
A.bTo.prototype={}
A.pu.prototype={}
A.Nv.prototype={
U(){return new A.bjD()}}
A.bjD.prototype={
ru(d){var w=this.c
w.toString
return C.a3(w,!1).cg(C.e_(new A.dPx(d),!1,null,x.H))},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null
$.as5="tech"
w=C.aJ(m,m,m,m,R.ns,m,m,m,new A.dPy(d),m,m,m,m,m,m)
v=D.aE.j(0.16)
u=C.m(13)
t=x.p
u=C.B(C.a([w,C.p(m,B.b8_,D.f,m,m,new C.o(v,m,C.I(D.aE.j(0.6),D.r,1),u,m,m,D.n),m,40,m,m,m,m,m,40),D.as,B.bCl],t),D.m,m,D.e,D.j,0,m,m)
v=C.m(26)
w=C.I(D.aE,D.r,1.8)
s=x.V
r=C.a([new C.ac(0,D.G,D.aE.j(0.28),D.dq,26)],s)
r=C.aB(m,C.p(m,C.x(C.a([C.p(m,B.b8s,D.f,m,m,new C.o(D.aE.j(0.2),m,C.I(D.aE,D.r,2),m,C.a([new C.ac(0,D.G,D.aE.j(0.5),D.J,22)],s),m,D.a5),m,78,m,m,m,m,m,78),D.ad,B.fyR,D.av,B.fFz,D.aA,C.p(m,B.fyN,D.f,m,m,new C.o(D.aE,m,m,C.m(20),m,m,D.n),m,m,m,m,Z.ajK,m,m,m)],t),D.m,m,D.e,D.j,0,D.p),D.f,m,m,new C.o(m,m,w,v,r,B.c0c,D.n),m,m,m,m,D.vV,m,m,m),D.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new A.dPz(n),m,m,m,m,m,m,!1,D.a4)
v=D.w.j(0.6)
w=C.m(16)
w=C.a([r,C.ao(m,C.aB(m,C.p(m,B.fNh,D.f,m,m,new C.o(v,m,C.I(F.fv,D.r,1.4),w,m,m,D.n),m,m,m,m,B.bvL,m,m,m),D.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new A.dPA(n),m,m,m,m,m,m,!1,D.a4),m,m,m,10,10,m)],t)
v=n.aZe("JOBS")
r=n.aZd(C.a([n.vG("\ud83d\udd0c","Wire a room","Go to a room that needs wiring",D.be,new A.dPE(n)),n.vG("\ud83d\udebd","Plumb a room","Go to a bathroom or kitchen",D.aR,new A.dPF(n)),n.vG("\ud83d\udd27","Fix a house","Walk the house and fix every sign",D.aE,new A.dPG(n)),n.vG("\ud83e\uddf1","Build a room","Frame, drywall, then wire",D.bm,new A.dPH(n)),n.vG("\u26a1","Wiring bench","Just the wiring, one room",D.bI,new A.dPI(n)),n.vG("\ud83e\uddea","Safety inspection","A test job: marked when you submit",D.by,new A.dPJ(n)),n.vG("\ud83d\udcde","Service calls","A customer rings with problems",D.i8,new A.dPK(n)),n.vG("\ud83c\udfd8","Neighbourhood jobs","Fix lights and wiring around the city",D.aR,new A.dPL(n))],t))
s=n.aZe("LESSONS")
q=C.a([],t)
for(p=0;p<17;++p){o=B.ddl[p]
q.push(n.vG(o.b,o.c,o.d,o.e,new A.dPB(n,o)))}q.push(n.vG("\ud83e\udde0","Diagram lessons","Three-way switch, fan with light",D.by,new A.dPC(n)))
q.push(n.vG("\ud83d\udcd8","Learn the trades","Short cards for beginners",D.by,new A.dPD(n)))
return C.c5(m,D.bZ,C.bm(!0,C.cq(C.a([u,D.ad,new C.an(D.a_,m,D.aa,D.t,w,m),v,r,s,n.aZd(q)],t),m,B.aj0,m,m,D.ag,!1),!0,!1,D.af,!0,!0),m,!1,!1,m,m)},
aZe(d){var w=null
return new C.D(B.bAk,C.B(C.a([C.E(C.p(w,w,D.f,D.aE.j(0.35),w,w,w,1,w,w,w,w,w,w),1),new C.D(D.fI,C.d(d,w,w,w,w,w,w,B.fc1,w,w,w),w),C.E(C.p(w,w,D.f,D.aE.j(0.35),w,w,w,1,w,w,w,w,w,w),1)],x.p),D.m,w,D.e,D.j,0,w,w),w)},
aZd(d){var w,v,u,t,s=null,r=x.p,q=C.a([],r)
for(w=0;v=d.length,w<v;w+=2){u=d[w]
t=w+1
v=t<v?d[t]:D.bJ
q.push(new C.D(D.ct,new C.Ea(new C.cb(D.aN,D.e,D.j,D.aj,s,D.p,s,0,C.a([new C.bA(1,D.bd,u,s),D.ab,new C.bA(1,D.bd,v,s)],r),s),s),s))}return C.x(q,D.m,s,D.e,D.j,0,D.p)},
vG(d,e,f,g,h){var w=null,v=C.a([g.j(0.2),B.F9],x.O),u=C.m(22),t=C.I(g.j(0.55),D.r,1.4),s=x.V,r=C.a([new C.ac(0,D.G,g.j(0.18),D.cv,16)],s),q=g.j(0.22),p=C.I(g.j(0.7),D.r,1.5)
s=C.a([new C.ac(0,D.G,g.j(0.35),D.J,14)],s)
return C.aB(w,C.p(w,C.x(C.a([C.p(w,C.at(C.d(d,w,w,w,w,w,w,D.wQ,w,w,w),w,w,w),D.f,w,w,new C.o(q,w,p,w,s,w,D.a5),w,56,w,w,w,w,w,56),D.R,C.d(e,w,w,w,w,w,w,D.iY,D.L,w,w),D.cK,C.d(f,w,2,D.a2,w,w,w,B.fnx,D.L,w,w)],x.p),D.m,w,D.b8,D.j,0,D.p),D.f,w,w,new C.o(w,w,t,u,r,new C.a9(D.b3,D.b6,D.x,v,w,w),D.n),w,w,w,w,B.bvt,w,w,w),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,h,w,w,w,w,w,w,!1,D.a4)}}
A.avT.prototype={
U(){return new A.bso()},
bps(){return this.c.$0()}}
A.bso.prototype={
a_(){this.a2()
this.d=C.dm(D.nj,new A.f1e(this))},
t(){var w=this.d
if(w!=null)w.a3(0)
this.a1()},
B(d){var w=null,v=D.w.j(0.6),u=C.m(18),t=C.I(D.bI,D.r,1.5)
return C.p(w,C.d("\u2b50 "+C.w(this.a.bps()),w,w,w,w,w,w,B.fcl,w,w,w),D.f,w,w,new C.o(v,w,t,u,w,w,D.n),w,w,w,D.it,D.rf,w,w,w)}}
A.b6Q.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null
if(n.d)return A.fZn(E.B3,n.r,n.z,n.Q,n.y,n.as,n.db,n.w,n.f,n.c)
w=n.r
v=x.p
u=C.a([C.bU(0,A.fZn(E.B3,w,n.z,n.Q,n.y,n.as,n.db,n.w,n.f,n.c),0,0,0)],v)
t=n.ch
s=t!=null
if(s)u.push(C.ao(m,C.x(t,D.E,m,D.e,D.j,0,D.p),m,m,8,m,8,m))
t=C.a([],v)
r=n.CW
if(r!=null)D.d.v(t,r)
r=C.a([],v)
q=n.e
if(q!=null)r.push(new A.avT(q,m))
r.push(new A.afr(D.hH,"Zoom in",w,!1,m))
t.push(C.B(r,D.m,m,D.e,D.P,0,m,m))
t.push(new A.afr(D.yM,"Zoom out",w,!0,m))
w=n.x
t.push(n.ax8(B.bJc,"Back to the whole view",w))
t.push(n.ax8(Ai.Cd,"Flip up and down swiping",new A.cuw()))
t.push(n.ax8(D.kg,"Flip left and right swiping",new A.cux()))
u.push(C.ao(m,C.x(t,D.dE,m,D.e,D.j,0,D.p),m,m,m,8,8,m))
t=n.dx
if(t!=null)u.push(C.ao(14,C.at(t,m,m,m),m,m,0,0,m,m))
t=n.at
if(t!=null){r=n.cy
if(r==null)s=s?60:10
else s=r
r=n.ax
q=(r?D.dY:D.ev).j(0.95)
p=C.m(14)
o=C.I(r?D.bm:D.cs,D.r,1)
u.push(C.ao(m,C.p(m,C.d(t,m,m,m,m,m,m,B.fcC,m,m,m),D.f,m,m,new C.o(q,m,o,p,m,m,D.n),m,m,m,m,D.nm,m,m,m),m,m,10,62,s,m))}t=n.ay
if(t!=null){s=C.m(16)
r=C.I(D.aZ,D.r,1)
t=C.a([C.d(t.a,m,m,m,m,m,m,B.fo4,m,m,m),D.cK,C.d(t.b,m,m,m,m,m,m,E.Un,m,m,m)],v)
q=n.cx
if(q!=null)D.d.v(t,C.a([D.am,q],v))
u.push(C.ao(8,C.p(m,C.B(C.a([C.E(C.x(t,D.E,m,D.e,D.j,0,D.p),1),C.aJ(m,m,m,m,D.H_,m,m,m,w,m,m,m,m,m,D.cd)],v),D.E,m,D.e,D.j,0,m,m),D.f,m,m,new C.o(E.adc,m,r,s,m,m,D.n),m,m,m,m,E.aiL,m,m,m),m,m,10,10,m,m))}return new C.an(D.a_,m,D.aa,D.t,u,m)},
ax8(d,e,f){var w=null,v=D.w.j(0.55),u=C.I(D.aZ,D.r,1)
return new C.D(D.eG,C.hc(C.aB(w,C.p(w,C.X(d,D.c,w,w,w,20),D.f,w,w,new C.o(v,w,u,w,w,w,D.a5),w,38,w,w,w,w,w,38),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,!1,D.a4),w,e,w,w),w)}}
A.aWV.prototype={
B(d){var w,v=this,u=null,t=x.p,s=C.a([C.aJ(u,u,u,u,R.ns,u,u,u,new A.bVu(d),u,u,u,u,u,u)],t),r=v.x,q=v.c,p=v.d
if(r==null)s.push(C.E(C.d(q,u,u,u,u,u,u,C.l(u,u,p,u,u,u,u,u,u,u,u,16,u,u,D.u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),1))
else D.d.v(s,C.a([C.d(q,u,u,u,u,u,u,C.l(u,u,p,u,u,u,u,u,u,u,u,16,u,u,D.u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),D.as,C.E(r,1),D.as],t))
r=p.j(0.15)
q=C.m(16)
w=C.I(p.j(0.6),D.r,1)
s.push(C.aB(u,C.p(u,C.B(C.a([C.X(Aj.amg,p,u,u,u,17),D.ej,C.d(v.w,u,u,u,u,u,u,C.l(u,u,p,u,u,u,u,u,u,u,u,12,u,u,D.u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],t),D.m,u,D.e,D.P,0,u,u),D.f,u,u,new C.o(r,u,w,q,u,u,D.n),u,u,u,u,D.rf,u,u,u),D.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,v.r,u,u,u,u,u,u,!1,D.a4))
s=C.B(s,D.m,u,D.e,D.j,0,u,u)
q=C.aH(d,u,x.w).w
return C.c5(u,D.bZ,C.bm(!0,C.x(C.a([new C.D(B.bAx,s,u),C.p(u,C.cd(v.f,D.t,u,D.y,u,u,u,u,D.ag),D.f,u,new C.aY(0,1/0,0,q.a.b*0.34),B.b3t,u,u,u,u,E.Zk,u,u,1/0),C.E(C.bx(Ah.abq,v.e,D.aq),1)],t),D.m,u,D.e,D.j,0,D.p),!0,!1,D.af,!0,!0),u,!1,!1,u,u)}}
A.DO.prototype={
U(){var w=new C.y6()
$.yQ()
w.hj(0)
return new A.azW(w)},
gdc(d){return this.d}}
A.azW.prototype={
gyY(){var w,v=this,u=v.d
if(u===$){w=A.t0(v.a.c)
v.d!==$&&C.bF()
v.d=w
u=w}return u},
gep(d){var w,v=this.e
if(v===$){w=this.a.d
v=this.e=w==null?new A.Cu(C.T(x.S,x.N)):w}return v},
garz(){var w=this.gyY().a
return w==="light"||w==="fan"},
gij(){var w,v=this,u=v.f
if(u===$){w=v.garz()?new A.x7(1.15,0.12,11,B.UU,$.ax()):new A.x7(0.42,0.26,12,B.fZu,$.ax())
v.f!==$&&C.bF()
u=v.f=w}return u},
gp0(){var w=this,v=w.r
return v===$?w.r=A.h2g(w.gyY(),w.gep(0),!0):v},
aAi(d){var w
this.m(new A.d81(this,d))
A:{if("practice"===d){w="Practice: you can put a wire anywhere. The mistake shows when the power goes on."
break A}if("test"===d){w="Test: put every wire where you think it goes. Nothing is marked until you submit."
break A}w="Learn: a wrong wire is refused and explained."
break A}this.j7(w,!0)},
t(){var w=this.as
if(w!=null)w.a3(0)
this.a1()},
j7(d,e){var w=this,v=w.as
if(v!=null)v.a3(0)
w.m(new A.d8_(w,d,e))
w.as=C.cL(D.ly,new A.d80(w))},
ny(d){return this.j7(d,!1)},
qw(){var w=this.gep(0)
w.d=w.d&&w.a&&w.c>=2
this.r=A.h2g(this.gyY(),w,!0)},
of(){var w,v,u,t=this
if(t.garz()&&t.gep(0).c===0){t.gij().hP(11,0.12,B.UU,1.15)
t.m(new A.d7N(t))
return}w=t.gij()
v=t.gep(0).c===0
u=v?2.8:0.4
v=v?12:10
w.hP(v,0.26,new A.r(0,0.1,u),0.42)
t.m(new A.d7O(t))},
aX4(d){var w=this
if(w.garz()){w.gij().hP(9,0.12,B.UU,1.15)
return}if(d==="ground")w.gij().hP(8,0.55,B.h2d,0.15)
else if(d==="white")w.gij().hP(8.5,0.2,B.h6d,0.95)
else w.gij().hP(8.5,0.2,B.fWd,-0.95)},
c6K(){var w,v,u,t,s="ground",r=this.gep(0),q=!r.a||r.c>0,p=new A.d7M(this),o=this.gyY()
switch(o.a){case"switch":o=p.$1(s)
w=p.$1("blackLine")
v=p.$1("blackLoad")
return C.a([q,q,q,o,w,v,r.c>=2&&r.d],x.u)
case"gfci":o=p.$1(s)
w=p.$1("white")
v=p.$1("black")
u=r.c>=2
return C.a([q,q,o,w,v,u,u&&r.d],x.u)
case"outlet":case"light":case"fan":o=p.$1(s)
w=p.$1("white")
v=p.$1("black")
u=r.c
r=u>=2&&r.d
return C.a([q,q,o,w,v,u>=1,r],x.u)
default:w=C.a([q,q],x.u)
for(o=o.e,v=o.length,t=0;t<v;++t)w.push(p.$1(o[t].a))
w.push(r.c>=1)
w.push(r.c>=2&&r.d)
return w}},
IZ(d){var w,v,u,t,s,r,q,p,o,n=this,m="square",l="STOP! The power is still on. Turn the breaker OFF before you touch any wire.",k="Recorded."
if(d===0){n.of()
return}if(B.aOW.q(0,d))return
w=n.gyY()
v=w.f
u=C.S(v).k("Z<1>")
t=C.C(new C.Z(v,new A.d7P(d),u),u.k("J.E"))
v=w.a
s=A.hsQ(v,d)
u=s!=null
if(u){r=n.gep(0)
r=r.c===0&&r.b.iH(0,s)}else r=!1
if(r){w=n.gep(0)
if(w.a){A.fU(180,220,0.25,m)
n.ny(l)
return}w=w.b
w.bt(w,new A.d7Q(s))
n.m(n.gc6N())
n.j7("Wire taken off the screw.",!0)
return}r=!1
if(t.length!==0){q=n.gep(0)
if(q.c===0){q=q.b
if(q.ai(0,d))r=n.w.length===0||q.h(0,d)===n.w}}if(r){w=n.gep(0)
if(w.a){A.fU(180,220,0.25,m)
n.ny(l)
return}w.b.W(0,d)
n.m(new A.d7R(n))
n.j7(w.y?k:"Wire taken off.",!0)
return}if(u){u=n.gep(0)
u=u.c===0&&!u.b.iH(0,s)&&D.d.b3(w.e,new A.d7S(s))}else u=!1
if(u){n.m(new A.d7T(n,s,d))
if(n.w.length!==0){n.aX4(s)
n.j7(D.d.h_(w.e,new A.d7U(s)).b+": picked up. Now tap the screw, nut or wire it joins.",!0)}return}if(t.length!==0&&n.w.length!==0&&n.gep(0).c===0){u=n.gep(0)
p=A.hsL(w,u,n.w,D.d.gI(t),!1)
if(p!=null){++n.Q
A.fU(180,220,0.25,m)
n.ny(p)}else if(u.y){A.fU(520,60,0.25,"tri")
n.m(new A.d7V(n,d))
n.j7(k,!0)
n.w=""}else{A.yE()
n.m(new A.d7W(n,d))
if(u.r)n.j7(D.d.gI(t).b+": fastened.",!0)
else if(A.bDS(w,u))n.j7("Every wire is on the right screw. Now push the device into the box.",!0)
else n.j7(D.d.gI(t).b+": fastened correctly.",!0)
n.gij().xb(7,A.aP7(v,d,u))
n.w=""}return}o=n.gp0().b.h(0,d)
if(o!=null){n.m(new A.d7X(n,d))
w=n.gij()
v=o.c
w.xb(o.d,v)}},
ckz(){var w,v=this
v.m(new A.d7Y(v))
w=v.gep(0)
if(w.a){A.fU(120,200,0.25,"saw")
if(w.c===0)v.ny("The breaker is ON. The wires are LIVE at 120 volts. Turn it OFF before you touch anything.")}else{A.fU(600,100,0.25,"tri")
v.j7("Breaker OFF. It is safe to work on the wires. (In real life, always test them with a tester first.)",!0)}},
czU(){var w,v,u=this,t="The tester glows: this outlet has 120 volts and is wired correctly. The lesson is complete! Mistakes: ",s=" is wired correctly: every wire is on the terminal that belongs to it. The lesson is complete! Mistakes: ",r=u.gyY(),q=u.gep(0),p=A.L_(r,q)
if(p.a!=="ok"){u.m(new A.d82(u,p));++u.Q
A.fU(180,220,0.25,"square")
C.fG()
r=p.r==="arc"
w=r?95:150
A.fU(w,450,0.5,r?"saw":"noise")
if(q.y)r=p.d?"The breaker tripped.":"Power is on."
else r=p.b+"\nHow to fix it: "+p.w
u.ny(r)
return}u.m(new A.d83(u))
A.yE()
v=r.a
A:{if("switch"===v){r="Power on. Flip the switch and the light turns on: both black wires are on brass screws, so the switch opens and closes the hot wire. The lesson is complete! Mistakes: "+u.Q+"."
break A}if("gfci"===v){r="Power on. Press RESET (it clicks), then TEST: it must shut the outlet off. Wired on LINE, it protects the whole circuit. The lesson is complete! Mistakes: "+u.Q+"."
break A}if("outlet"===v){r=t+u.Q+"."
break A}q=D.d.q(B.jS,v)
if(q){r="Power on. "+r.b+(s+u.Q+".")
break A}if(v!=="light"&&v!=="fan"){r="Power on. The "+r.b.toLowerCase()+(s+u.Q+".")
break A}r=t+u.Q+"."
break A}u.j7(r,!0)},
B(a1){var w,v=this,u=null,t=v.c6K(),s=D.d.bg(t,new A.d8c()),r=s<0?"All done":"Step "+(s+1)+"/"+v.gyY().d.length,q=v.gyY(),p=v.gep(0),o=A.bDS(q,p)&&!p.a,n=v.gp0(),m=v.gij(),l=v.x,k=v.y,j=v.z,i=l!==0?v.gp0().b.h(0,v.x):u,h=(p.a?D.ev:D.dY).j(0.95),g=C.m(18),f=p.a,e=C.I(f?D.cs:D.bm,D.r,1.5),d=C.X(f?D.hq:B.bKQ,D.c,u,u,u,18),a0=x.p
g=C.a([C.aB(u,C.p(u,C.B(C.a([d,D.ej,C.d(f?"Breaker ON (live)":"Breaker OFF (safe)",u,u,u,u,u,u,D.nE,u,u,u)],a0),D.m,u,D.e,D.P,0,u,u),D.f,u,u,new C.o(h,u,e,g,u,u,D.n),u,u,u,u,D.hf,u,u,u),D.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,v.gcky(),u,u,u,u,u,u,!1,D.a4)],a0)
h=!p.r&&!p.y
h=C.a([A.wL("Learn",D.bm,D.wg,h,new A.d8d(v)),D.am,A.wL("Practice",D.cs,D.p1,p.r,new A.d8e(v)),D.am,A.wL("Test",D.by,D.ue,p.y,new A.d8m(v)),D.am],a0)
if(!p.y)D.d.v(h,C.a([A.wL("Hints",D.aE,D.ro,p.e,new A.d8n(v)),D.am,A.wL("Labels",D.aR,M.C6,p.f,new A.d8o(v)),D.am,A.wL("Wire guide",D.mv,D.o9,!1,new A.d8p(a1)),D.am],a0))
h.push(A.wL("Brass side",B.bnE,E.anc,!1,new A.d8q(v)))
h.push(D.am)
h.push(A.wL("Silver side",B.LM,D.On,!1,new A.d8r(v)))
h.push(D.N)
n=A.XT(!1,u,m,new A.d8s(v),u,j,l,i,u,u,k,u,u,v.gIX(),v.gIY(),n,!1,u,g,h)
m=C.a([],a0)
l=p.c
if(l===0){l=C.a([],a0)
for(k=D.d.gaf(q.e),j=new C.f5(k,new A.d8t(v));j.C();){i=k.gR(0)
h=i.c
g=new C.aQ(14,14)
f=v.w
e=i.a
f=f===e
d=f?D.b2:D.aZ
w=new C.ay(d,f?3:1,D.r,-1)
d=C.a([],a0)
if(p.b.iH(0,e))d.push(new C.D(D.fw,C.X(D.eb,i.d,u,u,u,18),u))
f=i.b
e=i.d
d.push(new C.y(f,u,new C.F(!0,e,u,u,u,u,13,D.u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u),u,u,u,u,u,u,u,u,u))
l.push(new C.D(D.it,C.aB(u,C.p(u,new C.cb(D.aN,D.e,D.j,D.m,u,D.p,u,0,d,u),D.f,u,u,new C.o(h,u,new C.bI(w,w,w,w),new C.bk(g,g,g,g),u,u,D.n),u,u,u,u,D.hF,u,u,u),D.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new A.d8f(v,i),u,u,u,u,u,u,!1,D.a4),u))}l=C.a([C.bW(D.bD,l,D.bq,6,8)],a0)
if(p.y)D.d.v(l,C.a([C.B(C.a([A.u5("Submit the test",D.ue,new A.d8g(v,a1),D.by)],a0),D.m,u,D.e,D.j,0,u,u),D.N],a0))
l.push(D.N)
if(o)p="Push it into the box"
else p=p.a?"Turn the breaker OFF first":"Fasten every wire first"
l.push(C.B(C.a([A.u5(p,B.anK,o?new A.d8h(v):u,D.aE)],a0),D.m,u,D.e,D.j,0,u,u))
D.d.v(m,l)}else if(l===1)D.d.v(m,C.a([C.B(C.a([A.u5("Pull it back out",D.rs,new A.d8i(v),D.ae),D.ab,A.u5("Put the cover plate on",A_.w6,new A.d8j(v),D.aE)],a0),D.m,u,D.e,D.j,0,u,u)],a0))
else{l=A.u5("Start over",D.l8,new A.d8k(v),D.ae)
p=p.d
k=p?"Tested \u2713":"Power on and test"
D.d.v(m,C.a([C.B(C.a([l,D.ab,A.u5(k,D.hq,p?u:v.gczT(),D.aE)],a0),D.m,u,D.e,D.j,0,u,u)],a0))}return A.TO(D.aE,new A.d8l(v,a1,t),C.x(m,D.m,u,D.e,D.P,0,D.p),n,r,q.b,u)}}
A.a9n.prototype={
U(){return new A.aFN()},
gdc(d){return this.c}}
A.aFN.prototype={
gep(d){var w,v=this.d
if(v===$){w=this.a.c
v=this.d=w==null?A.fYU():w}return v},
gij(){var w=this.e
return w===$?this.e=new A.x7(-0.3,0.18,40,B.aUW,$.ax()):w},
gp0(){var w=this.f
return w===$?this.f=A.bBj(this.gep(0)):w},
t(){var w=this.z
if(w!=null)w.a3(0)
this.a1()},
j7(d,e){var w=this,v=w.z
if(v!=null)v.a3(0)
w.m(new A.eRF(w,d,e))
w.z=C.cL(D.ly,new A.eRG(w))},
ny(d){return this.j7(d,!1)},
of(){this.gij().hP(40,0.18,B.aUW,-0.3)
this.m(new A.eRy(this))},
IZ(d){var w,v,u,t,s,r,q=this,p="square"
if(d===0){q.of()
return}w=C.G([41,"tail",42,"trap",43,"arm"],x.S,x.N).h(0,d)
if(w!=null&&!q.gep(0).a.q(0,w)){v=q.r
if(v.length===0){if(w==="tail")v="tailpiece"
else v=w==="trap"?"P-trap":"trap arm"
q.ny("Pick the "+v+" from the buttons below first, then tap its glowing outline.")
return}if(v!==w){A.fU(180,220,0.25,p)
u=q.r
A:{if("tail"===u){v="The tailpiece is the straight pipe that hangs from the sink. It goes at the very top, under the drain."
break A}if("trap"===u){v="The P-trap is the U-shaped bend. It goes right under the tailpiece, in the middle."
break A}v="The trap arm is the long straight pipe that goes into the wall. It goes last, on the right."
break A}q.ny(v)
return}if(w==="trap"&&!q.gep(0).a.q(0,"tail")){A.fU(180,220,0.25,p)
q.ny("Start from the top: put the tailpiece on first, then the trap under it.")
return}if(w==="arm"&&!q.gep(0).a.q(0,"trap")){A.fU(180,220,0.25,p)
q.ny("The trap arm joins the trap. Put the P-trap on first.")
return}q.m(new A.eRz(q,w))
A.yE()
q.j7("Piece in place. "+(q.gep(0).a.a===3?"Now tighten the two slip nuts: tap each nut.":"Pick the next piece."),!0)
return}v=d===44
if(v||d===45){t=v?"n1":"n2"
if(q.gep(0).b.h(0,t)!==!0){q.m(new A.eRA(q,t))
A.yE()
q.j7("Slip nut hand tightened. In real life give it a quarter turn more with pliers, but never over-tighten plastic.",!0)
return}}s=q.gp0().b.h(0,d)
if(s!=null){q.m(new A.eRB(q,d))
v=q.gij()
r=s.c
v.xb(s.d,r)}},
c6P(){var w=this,v=x.cc,u=C.C(new C.Z(C.a(["n1","n2"],x.s),new A.eRC(w),v),v.k("J.E"))
w.m(new A.eRD(w,u))
if(u.length!==0){A.fU(180,220,0.25,"square")
w.ny("It is dripping from a loose slip nut! Tap the nut and tighten it, then run the water again.")}else{A.yE()
w.j7("No leaks. The water flows through the trap and into the wall. The little pool in the U-bend stays there and blocks sewer gas. The lesson is complete!",!0)}},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.gep(0),i=j.a,h=i.q(0,"tail"),g=i.q(0,"trap"),f=i.q(0,"arm"),e=j.b
e=e.h(0,"n1")===!0&&e.h(0,"n2")===!0
w=C.a([h,g,f,e,j.c&&j.d.length===0],x.u)
v=D.d.bg(w,new A.eRK())
u=i.a===3
j=v<0?"All done":"Step "+(v+1)+"/5"
h=l.gp0()
g=l.gij()
f=l.w
e=l.x
t=l.y
s=f!==0?l.gp0().b.h(0,l.w):k
h=A.XT(!1,k,g,new A.eRL(l),k,t,f,s,k,k,e,k,k,l.gIX(),l.gIY(),h,!1,k,k,k)
e=x.p
s=C.a([],e)
for(r=0;r<3;++r){q=B.dmT[r]
g=i.q(0,q)?k:new A.eRM(l,q)
f=i.q(0,q)?D.ds:D.fF
t=new C.aQ(14,14)
p=l.r===q
o=p?D.b2:D.aZ
n=new C.ay(o,p?3:1,D.r,-1)
o=C.a([],e)
if(i.q(0,q))o.push(B.ehg)
p=B.dv_.h(0,q)
p.toString
m=i.q(0,q)?D.bU:D.c
o.push(new C.y(p,k,new C.F(!0,m,k,k,k,k,13,D.u,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k),k,k,k,k,k,k,k,k,k))
s.push(new C.D(D.it,C.aB(k,C.p(k,new C.cb(D.aN,D.e,D.j,D.m,k,D.p,k,0,o,k),D.f,k,k,new C.o(f,k,new C.bI(n,n,n,n),new C.bk(t,t,t,t),k,k,D.n),k,k,k,k,D.hF,k,k,k),D.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,g,k,k,k,k,k,k,!1,D.a4),k))}i=C.bW(D.bD,s,D.bq,6,8)
g=A.u5("Start over",D.l8,new A.eRN(l),D.ae)
f=u?"Run the water":"Build the drain first"
return A.TO(D.co,new A.eRO(d,w),C.x(C.a([i,D.N,C.B(C.a([g,D.ab,A.u5(f,D.qj,u?l.gc6O():k,D.co)],e),D.m,k,D.e,D.j,0,k,k)],e),D.m,k,D.e,D.P,0,D.p),h,j,"Sink drain (P-trap)",k)}}
A.a4O.prototype={
U(){return new A.aAc()},
gdc(d){return this.c}}
A.aAc.prototype={
gep(d){var w,v=this.d
if(v===$){w=this.a.c
v=this.d=w==null?A.fYU():w}return v},
gij(){var w=this.e
return w===$?this.e=new A.x7(-0.25,0.2,36,B.aUh,$.ax()):w},
gp0(){var w=this.f
return w===$?this.f=A.aOZ(this.gep(0)):w},
t(){var w=this.z
if(w!=null)w.a3(0)
this.a1()},
j7(d,e){var w=this,v=w.z
if(v!=null)v.a3(0)
w.m(new A.db3(w,d,e))
w.z=C.cL(D.ly,new A.db4(w))},
ny(d){return this.j7(d,!1)},
of(){this.gij().hP(36,0.2,B.aUh,-0.25)
this.m(new A.daW(this))},
IZ(d){var w,v,u,t,s,r,q=this
if(d===0){q.of()
return}w=x.fZ
v=C.C(new C.Z(B.a4h,new A.daZ(d),w),w.k("J.E"))
if(v.length!==0&&q.r.length!==0){w=q.gep(0)
u=A.ieW(w,q.r,D.d.gI(v))
if(u!=null){A.fU(180,220,0.25,"square")
q.ny(u)}else{A.yE()
q.m(new A.db_(q,d))
q.gij().xb(12,A.agB(d))
q.j7(A.fvM(w)?"All four ends are connected. Now open the valves.":D.d.gI(v).b+": connected.",!0)}return}w=d===68
if(w||d===69){t=w?"hot":"cold"
if(q.gep(0).e.iH(0,t)){q.m(new A.db0(q,t))
q.j7("Hose taken off.",!0)
return}}s=q.gp0().b.h(0,d)
if(s!=null){q.m(new A.db1(q,d))
w=q.gij()
r=s.c
w.xb(s.d,r)}},
c6M(d){var w,v=this
v.m(new A.daX(v))
w=v.gep(0)
if(!w.f){v.j7("Valves closed.",!0)
return}if(A.fvM(w)){A.yE()
v.j7("Hot and cold flow through the hoses and out of the faucet. No leaks. The lesson is complete!",!0)}else{A.fU(180,220,0.25,"square")
v.ny("Water is spraying out of a valve that has no hose! Close the valves and finish connecting the hoses first.")}},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=n.gep(0),k=l.r||l.e.a!==0,j=l.e,i=j.h(0,61)==="hot"&&j.h(0,63)==="hot",h=j.h(0,62)==="cold"&&j.h(0,64)==="cold",g=C.a([k,i,h,l.f&&A.fvM(l)],x.u),f=D.d.bg(g,new A.db8())
k=f<0?"All done":"Step "+(f+1)+"/4"
i=n.gp0()
h=n.gij()
w=n.w
v=n.x
u=n.y
t=w!==0?n.gp0().b.h(0,n.w):m
s=x.p
i=A.XT(!1,m,h,new A.db9(n),m,u,w,t,m,m,v,m,m,n.gIX(),n.gIY(),i,!1,m,m,C.a([A.wL("Hints",D.aE,D.ro,l.r,new A.dba(n)),D.N],s))
v=C.a([],s)
for(r=0;r<2;++r){h={}
w=B.dml[r]
h.a=null
q=w.a
h.a=q
u=new C.aQ(14,14)
t=n.r===q
p=t?D.b2:D.aZ
o=new C.ay(p,t?3:1,D.r,-1)
p=C.a([],s)
t=C.a6(j).k("bc<2>")
if(new C.Z(new C.bc(j,t),new A.dbb(h),t.k("Z<J.E>")).gL(0)===2)p.push(B.ehi)
p.push(new C.y(w.b,m,D.t5,m,m,m,m,m,m,m,m,m))
v.push(new C.D(D.it,C.aB(m,C.p(m,new C.cb(D.aN,D.e,D.j,D.m,m,D.p,m,0,p,m),D.f,m,m,new C.o(w.c,m,new C.bI(o,o,o,o),new C.bk(u,u,u,u),m,m,D.n),m,m,m,m,D.hF,m,m,m),D.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new A.dbc(h,n),m,m,m,m,m,m,!1,D.a4),m))}j=C.bW(D.bD,v,D.bq,6,8)
h=A.u5("Start over",D.l8,new A.dbd(n),D.ae)
l=l.f?"Close the valves":"Open the valves"
return A.TO(D.cs,new A.dbe(d,g),C.x(C.a([j,D.N,C.B(C.a([h,D.ab,A.u5(l,D.qj,n.gc6L(n),D.cs)],s),D.m,m,D.e,D.j,0,m,m)],s),D.m,m,D.e,D.P,0,D.p),i,k,"Faucet supply lines",m)}}
A.aB4.prototype={
U(){return new A.aB5(A.h9r())}}
A.aB5.prototype={
gij(){var w,v=this.e
if(v===$){w=new A.x7(-0.3,0.48,46,B.US,$.ax())
w.f=80
this.e=w
v=w}return v},
gp0(){var w=this.f
return w===$?this.f=A.ago(this.d):w},
t(){var w=this.z
if(w!=null)w.a3(0)
this.a1()},
j7(d,e){var w=this,v=w.z
if(v!=null)v.a3(0)
w.m(new A.di7(w,d,e))
w.z=C.cL(D.ly,new A.di8(w))},
ny(d){return this.j7(d,!1)},
of(){this.gij().hP(46,0.48,B.US,-0.3)
this.m(new A.di1(this))},
IZ(d){var w,v,u,t=this
if(d===0){t.of()
return}if(d===72){w=t.d
w=w.d.q(0,72)&&w.a>=5}else w=!1
if(w){t.m(new A.di3(t,d))
A.yE()
t.j7("You flipped the breaker fully OFF and then ON. The living room light is back on. A breaker trips when a circuit is overloaded: find out why before it trips again.",!0)
t.gij().xb(22,B.h3C)
return}w=d===87
if(w||d===86){v=t.d
v=v.b&&!v.c&&v.a>=5}else v=!1
if(v){if(t.w==="wrench"&&w){t.m(new A.di4(t,d))
A.yE()
t.j7("You tightened the slip nut with the wrench. The drip has stopped.",!0)
return}A.fU(180,220,0.25,"square")
t.ny(w?"Hand tightening is not enough here. Pick the wrench first, then tap the nut.":"The water is dripping from the slip nut on the trap. Pick the wrench, then tap the nut.")}u=t.gp0().b.h(0,d)
if(u!=null){t.m(new A.di5(t,d))
w=t.gij()
v=u.c
w.xb(u.d,v)}},
ceA(d){var w,v
A:{if("ptrap"===d){w=B.enl
break A}if("faucet"===d){w=B.bEb
break A}w=new A.DO(d,null,null)
break A}v=this.c
v.toString
C.a3(v,!1).cg(C.e_(new A.di2(w),!1,null,x.H))},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.d,l=B.dhe[m.a],k=o.r,j=k===0?n:A.i45(k)
k=m.d.q(0,72)
w=!m.b||m.c
v=C.a([!k,w],x.u)
w=m.a
k=o.gp0()
u=o.gij()
t=o.r
s=o.x
r=o.y
q=t!==0?o.gp0().b.h(0,o.r):n
p=j==null?n:C.aB(n,C.p(n,B.fpn,D.f,n,n,new C.o(D.aE,n,n,C.m(12),n,n,D.n),n,n,n,n,D.rf,n,n,n),D.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new A.dib(o,j),n,n,n,n,n,n,!1,D.a4)
k=A.XT(!1,n,u,new A.dic(o),n,r,t,q,p,new A.did(o),s,n,n,o.gIX(),o.gIY(),k,!1,n,n,n)
s=l.a
p=x.p
q=C.B(C.a([C.E(C.d(""+(m.a+1)+". "+s,n,n,n,n,n,n,B.fhE,n,n,n),1),A.wL("Wrench",D.aR,D.p1,o.w==="wrench",new A.die(o))],p),D.m,n,D.e,D.j,0,n,n)
t=C.d(l.b,n,3,D.a2,n,n,n,B.fiK,n,n,n)
m=C.l4(D.by,6,s,6,0,new A.dif(o),m.a)
u=v[0]
s=u?"\u2705 Living room power fixed":"\u26a0 Living room has no power"
s=C.E(C.d(s,n,n,n,n,n,n,C.l(n,n,u?D.eo:D.f3,n,n,n,n,n,n,n,n,11.5,n,n,D.H,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),1)
u=v[1]
r=u?"\u2705 Sink leak fixed":"\u26a0 Kitchen sink drips"
return A.TO(D.by,new A.dig(d,v),C.x(C.a([q,D.bC,t,m,C.B(C.a([s,C.E(C.d(r,n,n,n,n,n,n,C.l(n,n,u?D.eo:D.f3,n,n,n,n,n,n,n,n,11.5,n,n,D.H,n,n,!0,n,n,n,n,n,n,n,n),D.dT,n,n),1)],p),D.m,n,D.e,D.j,0,n,n)],p),D.m,n,D.e,D.P,0,D.p),k,"Stage "+(w+1)+"/7","Build and fix a house",n)}}
A.afr.prototype={
U(){return new A.bw1()}}
A.bw1.prototype={
b6K(){var w=this,v=w.d
if(v!=null)v.a3(0)
w.d=null
if(w.e&&w.c!=null)w.m(new A.fcw(w))},
c6Q(d){var w,v,u=this
u.m(new A.fcu(u))
w=u.a
v=w.e
v.aoZ(w.f?1.45:0.69)
v=u.d
if(v!=null)v.a3(0)
u.d=C.cL(D.kC,new A.fcv(u))},
t(){var w=this.d
if(w!=null)w.a3(0)
this.a1()},
B(d){var w=this,v=null,u=w.a.d,t=D.w.j(w.e?0.8:0.55),s=w.e,r=s?D.bI:D.aZ
r=C.I(r,D.r,s?2:1)
return new C.D(D.eG,C.hc(C.nI(D.cc,C.p(v,C.X(w.a.c,D.c,v,v,v,22),D.f,v,v,new C.o(t,v,r,v,v,v,D.a5),v,44,v,v,v,v,v,44),v,new A.fcx(w),new A.fcy(w),v,v,v,v,new A.fcz(w)),v,u,v,v),v)}}
A.jJ.prototype={}
A.MT.prototype={}
A.a6Q.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=x.p,k=C.a([C.B(C.a([C.aJ(m,m,m,m,R.ns,m,m,m,new A.ca2(d),m,m,m,m,m,m),B.fzs],l),D.m,m,D.e,D.j,0,m,m)],l)
for(w=0;w<5;++w){v=B.doC[w]
u=v.c
t=C.a([new C.D(D.ajZ,new C.y(v.b+"  "+v.a.toUpperCase(),m,new C.F(!0,u,m,m,m,m,12,D.u,m,1.1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m,m,m,m,m,m,m),m)],l)
for(s=v.d,r=s.length,q=0;q<r;++q){p=s[q]
o=new C.aQ(14,14)
n=new C.ay(u.j(0.35),1,D.r,-1)
t.push(C.p(m,C.x(C.a([new C.y(p.a,m,D.iY,m,m,m,m,m,m,m,m,m),D.cK,new C.y(p.b,m,E.Un,m,m,m,m,m,m,m,m,m)],l),D.E,m,D.e,D.j,0,D.p),D.f,m,m,new C.o(B.F9,m,new C.bI(n,n,n,n),new C.bk(o,o,o,o),m,m,D.n),m,m,m,D.ct,D.bh,m,m,m))}D.d.v(k,t)}return C.c5(m,D.bZ,C.bm(!0,C.cq(k,m,B.aj0,m,m,D.ag,!1),!0,!1,D.af,!0,!0),m,!1,!1,m,m)}}
A.cl7.prototype={}
A.F4.prototype={}
A.nq.prototype={}
A.X_.prototype={}
A.ckY.prototype={
byA(d,e,f){var w,v=this
if(f!=null)w=D.d.h_(B.axt,new A.cl1(f))
else{w=new C.eb()
w.d5(v.a)
w=B.axt[w.au(2)]}v.c!==$&&C.aP()
v.c=w
w=new C.eb()
w.d5(v.a+7)
w=w.he()
v.d!==$&&C.aP()
v.d=w},
vf(d,e){var w=this.c
w===$&&C.c()
return D.d.h_(w.c,new A.cl2(e))},
Pa(d){++this.w
return new A.ex(!1,d,!1,"")},
c4_(d){var w=d.d
return new C.N(w,new A.ckZ(this),C.S(w).k("N<1,n>")).aG(0," and ")},
bhz(d,e){var w,v,u,t,s=this,r=s.vf(0,e),q=s.e
if(q.q(0,e))return s.Pa("The "+r.c.toLowerCase()+" is already there.")
if(d!==r.b)return s.Pa(s.b?"That does not go here.":"That does not go here. This spot is for the "+r.c.toLowerCase()+".")
for(w=r.d,v=w.length,u=0;u<v;++u)if(!q.q(0,w[u])){q=s.b?"Not yet: something has to go in first.":"Not yet. "+r.e+" Put in the "+s.c4_(r)+" first.";++s.w
return new A.ex(!1,q,!1,"")}if(r.f&&s.r)return s.Pa(s.b?"The water is still on!":"Stop! The water is still on. Cutting into a pipe with the water on floods the room. Turn the water off at the main valve first (pick the hand and tap the main valve).")
q.M(0,e)
s.y=!1
s.x.a8(0)
if(r.r>0)t=s.b?"":" It is only loose. Pick the wrench and tap it to tighten the joints."
else t=""
return new A.ex(!0,r.c+" fitted."+t,!1,"")},
biU(d){var w,v,u,t,s=this,r=s.vf(0,d)
if(!s.e.q(0,d))return s.Pa(s.b?"Nothing to tighten yet.":"There is nothing to tighten yet: the "+r.c.toLowerCase()+" is not fitted.")
w=r.r
if(w===0)return s.Pa(s.b?"That does not need tightening.":"The "+r.c.toLowerCase()+" does not have joints to tighten. It just sits in place.")
v=s.f
u=v.h(0,d)
if(u==null)u=0
if(u>=w)return s.Pa("Already tight. More force would crack it.")
t=u+1
v.n(0,d,t)
s.x.a8(0)
s.y=!1
v=r.c
return new A.ex(!0,t>=w?v+": every joint is tight now.":v+": one joint tightened, one to go.",!1,"")},
aGJ(d){var w=this.vf(0,d),v=this.f.h(0,d)
if(v==null)v=0
return w.r-v},
aIN(){var w,v,u,t,s,r,q=this
q.r=!q.r
w=q.x
w.a8(0)
if(!q.r)return B.aY7
v=q.c
v===$&&C.c()
u=v.c
t=C.S(u).k("Z<1>")
s=C.C(new C.Z(u,new A.cl3(q),t),t.k("J.E"))
v=v.c
u=C.S(v).k("Z<1>")
r=C.C(new C.Z(v,new A.cl4(q),u),u.k("J.E"))
q.y=!0
if(s.length!==0){w.v(0,new C.N(s,new A.cl5(),C.S(s).k("N<1,n>")));++q.w
return new A.ex(!1,"Water is spraying from an open pipe where the "+D.d.gI(s).c.toLowerCase()+" should be! Turn the water off and finish the job.",!0,"")}if(r.length!==0){w.v(0,new C.N(r,new A.cl6(),C.S(r).k("N<1,n>")));++q.w
return new A.ex(!1,"The "+D.d.gI(r).c.toLowerCase()+" is leaking from a loose joint. Turn the water off, tighten it with the wrench, then test again.",!0,"")}if(!q.ga3l())return B.aXY
return B.aXK},
cHI(){var w,v,u,t,s,r,q,p=this
p.r=!0
p.aIN()
w=p.c
w===$&&C.c()
v=w.c
u=v.length
t=0
for(;t<u;++t){s=v[t]
p.bhz(s.b,s.a)}for(w=w.c,v=w.length,t=0;t<v;++t){s=w[t]
for(u=s.r,r=s.a,q=0;q<u;++q)p.biU(r)}p.aIN()
p.w=0},
ga3l(){var w=this.c
w===$&&C.c()
return D.d.d9(w.c,new A.cl_(this))},
gcFV(){var w=this.c
w===$&&C.c()
return D.d.d9(w.c,new A.cl0(this))},
gwy(){var w=this
return w.ga3l()&&w.gcFV()&&w.r&&w.y&&w.x.a===0}}
A.W1.prototype={
U(){var w,v=new A.x7(-0.25,0.4,135,B.aVC,$.ax())
v.f=200
w=new C.y6()
$.yQ()
w.hj(0)
return new A.aEu(v,w)}}
A.aEu.prototype={
gCO(d){var w=this.d
if(w===$){this.a.toString
w=D.o.F(Date.now(),1e5)
this.d=w}return w},
a_(){var w,v=this
v.a2()
w=v.a.d
if(w==null){w=v.gCO(0)
v.a.toString
w=A.fYT(!1,w,null)}v.e=w
v.r=A.hnR(w,v.x,!w.b)},
t(){var w=this.at
if(w!=null)w.a3(0)
this.a1()},
ZG(){var w=this.e
w===$&&C.c()
return this.r=A.hnR(w,this.x,!w.b)},
axa(d,e){var w=this,v=w.at
if(v!=null)v.a3(0)
w.m(new A.elE(w,d,e))
w.at=C.cL(D.ju,new A.elF(w))},
aZg(){this.f.hP(135,0.4,B.aVC,-0.25)
this.m(new A.elx(this))},
cxC(d){var w,v,u=this.e
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
ay0(d){var w=this.e
w===$&&C.c();++w.w
return new A.ex(!1,d,!1,"")},
c6U(d){return this.aZf(d)},
cwT(d){var w
A:{if("main"===d){w=9400
break A}w=this.e
w===$&&C.c()
w=w.c
w===$&&C.c()
w=9100+D.d.bg(w.c,new A.elJ(d))
break A}this.aZf(w)},
b6h(){var w,v,u,t,s,r,q,p=this,o=p.x
if(o==="hand")return C.a([B.eGF],x.L)
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
if(p.e.e.q(0,s)){r=p.e
q=r.vf(0,s)
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
if(t.b===p.x&&!p.e.e.q(0,t.a))o.push(new C.z(t.a,t.c))}return o},
aZf(d){var w,v,u,t,s,r=this
if(d===0)return
w=r.r
w===$&&C.c()
v=w.b.h(0,d)
if(r.x.length===0){r.m(new A.elm(r,d))
if(v!=null)r.axa(v.a+": "+v.b,!0)
return}u=r.cxC(d)
w=r.x
if(w==="hand")if(d===9400){w=r.e
w===$&&C.c()
t=w.aIN()}else{w=r.e
w===$&&C.c()
t=r.ay0(w.b?"Your hand is only for the main water valve.":"Your hand is for the main water valve. Parts are placed by picking them from the tray.")}else if(w==="wrench")if(u==null){w=r.e
w===$&&C.c()
t=r.ay0(w.b?"Nothing to tighten.":"There is nothing to tighten there.")}else{w=r.e
w===$&&C.c()
t=w.biU(u)}else if(u==null){w=r.e
w===$&&C.c()
t=r.ay0(w.b?"Not there.":"That does not go there. Tap one of the glowing spots.")}else{s=r.e
s===$&&C.c()
t=s.bhz(w,u)}w=t.a
if(w)A.yE()
else A.fU(180,220,0.25,"square")
r.m(new A.eln(r,d))
w=w&&!t.c
r.axa(t.b,w)
w=r.e
w===$&&C.c()
if(w.gwy()&&!r.as){r.as=!0
$.aW.x1$.push(new A.elo(r))}},
c6R(){var w=null,v=this.c
v.toString
C.cf(w,w,!0,w,new A.elt(this),v,w,!0,!0,x.H)},
aY6(){this.m(new A.elC(this))
this.aZg()},
gcBZ(){var w,v,u,t=C.a([],x.s)
for(w=0;w<11;++w){v=B.c35[w]
u=this.e
u===$&&C.c()
u=u.c
u===$&&C.c()
if(D.d.b3(u.c,new A.elK(v)))t.push(v)}return t},
c4n(){var w,v,u,t,s=this.e
s===$&&C.c()
s=s.c
s===$&&C.c()
s=s.c
w=s.length
v=0
for(;v<w;++v){u=s[v]
if(!this.e.e.q(0,u.a)){t=this.e.e
t=D.d.d9(u.d,t.gkM(t))}else t=!1
if(t)return u}return null},
aUy(){var w,v,u,t=this,s=t.e
s===$&&C.c()
if(s.x.a!==0){s=s.c
s===$&&C.c()
s=s.c
w=C.S(s)
v=new C.cQ(new C.Z(s,new A.elu(t),w.k("Z<1>")),new A.elv(),w.k("cQ<1,n>")).aG(0,", ")
s=t.e
if(s.r)return new C.bj("\ud83d\udca7 Water is leaking at: "+v+". First turn the main water OFF: pick Hand and tap the main valve.","hand","main")
return new C.bj("\ud83d\udca7 It leaked at: "+v+". Pick the Wrench and tap it to tighten the joint. Then turn the water ON again to test.","wrench",s.x.gI(0))}if(!s.ga3l()){u=t.c4n()
if(u==null)return B.eQy
if(u.f&&t.e.r)return B.eQ6
s=u.b
w=B.aF_.h(0,s)
if(w==null)w=s
return new C.bj("Next: pick "+w+" from the tray, then tap "+u.c.toLowerCase()+" (the glowing spot). "+u.e,s,u.a)}s=t.e.c
s===$&&C.c()
s=s.c
w=C.S(s).k("Z<1>")
v=C.C(new C.Z(s,new A.elw(t),w),w.k("J.E"))
if(v.length!==0)return new C.bj("Everything is fitted. Now tighten each joint: pick the Wrench and tap "+D.d.gI(v).c.toLowerCase()+".","wrench",D.d.gI(v).a)
if(!t.e.r)return B.eP4
return B.eQX},
cve(){var w,v,u,t,s=this,r={}
r.a=r.b=null
w=s.aUy()
r.b=w.b
r.a=w.c
s.m(new A.elG(r,s))
v=r.a
if(v!=null){if(v==="main")u=9400
else{v=s.e
v===$&&C.c()
v=v.c
v===$&&C.c()
u=9100+D.d.bg(v.c,new A.elH(r))}r=s.r
r===$&&C.c()
t=r.b.h(0,u)
if(t!=null)s.f.hP(70,0.3,t.c,-0.2)
s.m(new A.elI(s,u))}s.axa(w.a,!0)},
ax9(d,e,f){var w,v=null,u=this.x===d,t=u?D.aE.j(0.25):D.c.j(0.07),s=C.m(14),r=u?D.aE:D.aZ
r=C.I(r,D.r,u?2:1)
w=C.X(f,u?D.aE:D.ae,v,v,v,19)
return new C.D(E.tU,C.aB(v,C.p(v,C.B(C.a([w,D.bo,C.d(e,v,v,v,v,v,v,C.l(v,v,u?D.aE:D.c,v,v,v,v,v,v,v,v,12.5,v,v,D.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),D.m,v,D.e,D.j,0,v,v),D.f,v,v,new C.o(t,v,r,s,v,v,D.n),v,v,v,v,D.fI,v,v,v),D.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new A.elq(this,u,d),v,v,v,v,v,v,!1,D.a4),v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.e
h===$&&C.c()
h=h.c
h===$&&C.c()
h=h.c
w=new C.Z(h,new A.elL(j),C.S(h).k("Z<1>")).gL(0)
h=j.e.c
h===$&&C.c()
v=j.r
v===$&&C.c()
u=j.y
t=j.z
s=j.Q
r=u!==0?v.b.h(0,u):i
v=A.XT(!1,i,j.f,new A.elM(j),i,s,u,r,i,new A.elN(),t,i,i,j.gc6S(),j.gc6T(),v,!1,i,i,i)
t=x.p
r=C.a([],t)
if(!j.e.b){u=D.aR.j(0.12)
s=C.m(12)
q=C.I(D.aR.j(0.6),D.r,1)
r.push(C.p(i,C.B(C.a([C.E(C.d("\ud83d\udc49 "+j.aUy().a,i,4,D.a2,i,i,i,B.fov,i,i,i),1),D.bo,C.bH(B.fs9,j.gcvd(),C.bp(i,i,i,i,i,B.f_q,D.l1,i,i,i,i,i))],t),D.m,i,D.e,D.j,0,i,i),D.f,i,i,new C.o(u,i,q,s,i,i,D.n),i,i,i,D.eG,D.Zm,i,i,1/0))}if(j.x.length!==0&&j.b6h().length!==0){u=C.a([],t)
for(s=j.b6h(),q=s.length,p=0;p<s.length;s.length===q||(0,C.M)(s),++p){o={}
n=s[p]
o.a=null
o.a=n.a
m=new C.aQ(12,12)
l=new C.ay(D.b2,1,D.r,-1)
u.push(C.aB(i,C.p(i,new C.y("\ud83d\udccd "+n.b,i,D.ow,i,i,i,i,i,i,i,i,i),D.f,i,i,new C.o(D.f5.j(0.35),i,new C.bI(l,l,l,l),new C.bk(m,m,m,m),i,i,D.n),i,i,i,i,B.Zn,i,i,i),D.y,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new A.elO(o,j),i,i,i,i,i,i,!1,D.a4))}r.push(new C.D(D.eG,C.bW(D.bD,u,D.bq,6,6),i))}u=j.e
if(u.b)u="Practice mode: no hints. Build it in the right order."
else if(u.ga3l())u="Everything is fitted. Tighten every joint, then turn the main water on to test."
else{u=j.e.c
u===$&&C.c()
u="Job: "+u.d}r.push(new C.bL(D.a3,i,i,C.d(u,i,2,D.a2,i,i,i,B.aRp,i,i,i),i))
r.push(D.N)
t=C.a([j.ax9("hand","Hand",B.anE),j.ax9("wrench","Wrench",D.p1)],t)
for(u=j.gcBZ(),s=u.length,p=0;p<u.length;u.length===s||(0,C.M)(u),++p){k=u[p]
q=B.aF_.h(0,k)
q.toString
t.push(j.ax9(k,q,Ac.an6))}r.push(new C.a7(i,52,C.cq(t,i,i,i,i,D.aN,!1),i))
return A.TO(D.aR,new A.elP(j,d),C.x(r,D.m,i,D.e,D.P,0,D.p),v,""+w+"/"+h.c.length+" fitted","Plumbing job: "+h.b,i)},
c0M(d){return C.bT(E.lv,null,new A.elB(this),d,!0,!0,!0,D.jZ,!1,!1,x.H)}}
A.z0.prototype={}
A.os.prototype={}
A.XF.prototype={}
A.avr.prototype={}
A.aTU.prototype={}
A.ex.prototype={
gjL(){return this.a}}
A.Xt.prototype={
cjZ(d,e,f){var w,v,u,t,s=this,r=null,q="outlet",p="switch",o=new C.eb()
o.d5(s.a)
w=d==null?o.au(3):d
v=C.a([0,1,2],x.t)
D.d.dO(v,o)
u=3+o.au(2)
switch(w){case 0:t=e==null?"Living room":e
s.c!==$&&C.aP()
s.c=t
t=C.a([new A.os(v[0],q,r),new A.os(v[1],q,r),new A.os(5,"light",u),new A.os(u,p,r)],x.F)
s.d!==$&&C.aP()
s.d=t
break
case 1:t=e==null?"Bedroom":e
s.c!==$&&C.aP()
s.c=t
t=C.a([new A.os(v[0],q,r),new A.os(v[1],q,r),new A.os(6,"fan",u),new A.os(u,p,r)],x.F)
s.d!==$&&C.aP()
s.d=t
break
default:t=e==null?"Kitchen":e
s.c!==$&&C.aP()
s.c=t
t=C.a([new A.os(v[0],"gfci",r),new A.os(v[1],"gfci",r),new A.os(5,"light",u),new A.os(u,p,r)],x.F)
s.d!==$&&C.aP()
s.d=t}if(f){t[1]=new A.os(t[1].a,B.dh_[o.au(5)],r)
t=s.d
t===$&&C.c()
t[3]=new A.os(t[3].a,B.dix[o.au(5)],r)}},
gan5(){var w,v,u=C.aX(x.S),t=this.d
t===$&&C.c()
w=t.length
v=0
for(;v<t.length;t.length===w||(0,C.M)(t),++v)u.M(0,t[v].a)
return u},
cTK(d){var w,v,u,t=this.d
t===$&&C.c()
w=t.length
v=0
for(;v<w;++v){u=t[v]
if(u.a===d)return u}return null},
fS(d){++this.f
return new A.ex(!1,d,!1,"")},
alN(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.d
g===$&&C.c()
w=g.length
v=h.x
u=0
for(;u<g.length;g.length===w||(0,C.M)(g),++u){t=g[u].a
s=A.jU(t)
if(s.e==="fan")r="fan"
else r=s.c?"ceiling":"wall"
v.n(0,t,r)}g=C.a([],x.t)
for(q=0;q<$.H5().length;++q)g.push(q)
h.y.v(0,g)
h.z.v(0,h.gan5())
for(g=h.Q,w=x.S,u=0;u<3;++u){p=B.ol[u]
v=C.aX(w)
t=C.aX(w)
o=new A.avr(v,t)
o.d=o.e=o.a=!0
for(r=h.aq2(p),n=r.length,m=0;m<r.length;r.length===n||(0,C.M)(r),++m)for(l=r[m]*10,k=0;k<6;++k)t.M(0,l+k)
for(t=h.gan5(),r=C.a6(t),n=new C.mk(t,t.r,r.k("mk<1>")),n.c=t.e,r=r.c,t=p+48;n.C();){l=n.d
if(l==null)l=r.a(l)
s=A.jU(l)
if(!s.c){j=s.d.a
j=j>=p&&j<=t}else j=!1
if(j)v.M(0,l)}g.n(0,p,o)}for(g=h.as,u=0;u<2;++u){i=g[u]
i.a=!0
i.b=3
i.d=i.c=!0}},
cHJ(){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=k.d
j===$&&C.c()
w=j.length
v=0
for(;v<j.length;j.length===w||(0,C.M)(j),++v){u=j[v]
k.bfz(u.a,u.b)}for(w=j.length,t=x.S,s=x.N,r=k.at,v=0;v<j.length;j.length===w||(0,C.M)(j),++v){q=j[v].a
p=r.h(0,q)
if(p==null)continue
o=p.a
n=A.t0(o)
if(n.w.length!==0)m=n.z
else{A:{if("outlet"===o){o=C.G([25,"ground",23,"white",21,"black"],t,s)
break A}if("gfci"===o){o=C.G([25,"ground",24,"white",22,"black"],t,s)
break A}if("switch"===o){o=C.G([25,"ground",21,"blackLine",22,"blackLoad"],t,s)
break A}o=C.G([53,"ground",52,"white",51,"black"],t,s)
break A}m=o}for(o=m.gdT(m),o=o.gaf(o);o.C();){l=o.gR(o)
k.bdV(q,l.b,l.a)}k.bhT(q)
k.bcJ(q)}if(!k.ax)k.aIL()
for(w=j.length,v=0;v<j.length;j.length===w||(0,C.M)(j),++v){u=j[v]
if(D.d.q(B.lG,u.b)){t=u.a
k.bhB(t,"lamp")
k.bjd(t)}}for(j=D.d.gaf(j),w=new C.f5(j,new A.cpY());w.C();){t=j.gR(0).a
k.aFm(t)
k.aFm(t)}},
aLa(d){var w,v,u=A.jU(d).d.a,t=C.a([],x.t)
for(w=0;v=$.H5(),w<v.length;++w){v=v[w]
if(v>u&&v<64)t.push(w)}return t},
cRD(d,e){var w,v,u=this,t=u.x
if(t.ai(0,d))return u.fS("There is already a box at "+A.jU(d).b+".")
w=A.jU(d)
v=w.c
if(!v&&e!=="wall")return u.fS("That is a ceiling box. On the wall you use a plain wall box (the blue one with ears).")
if(v&&e==="wall")return u.fS("A wall box cannot go in the ceiling. Use a round ceiling box.")
if(w.e==="fan"&&e!=="fan"){if(!u.b)return u.fS('A fan is heavy and it shakes. It needs a box that says "fan rated". A plain ceiling box can let the fan fall.')
t.n(0,d,e);++u.f
return B.aYl}t.n(0,d,e)
t=v?"ceiling joist":"side of the stud"
return new A.ex(!0,w.b+": box fixed to the "+t+".",!1,"")},
cMc(d){var w,v=this
if(d<0||d>=$.H5().length)return B.aYf
w=v.y
if(w.q(0,d))return v.fS("That stud already has a hole.")
if(v.x.a===0)return v.fS("Mount the boxes first. Then you know where the cable has to go and which studs need a hole.")
w.M(0,d)
return B.aY_},
cUP(d){var w,v,u,t,s=this,r=A.jU(d)
if(!s.x.ai(0,d))return s.fS("There is no box at "+r.b+". Mount the box first, then pull the cable to it.")
w=s.z
if(w.q(0,d))return s.fS("The cable is already there.")
v=s.aLa(d)
u=C.S(v).k("Z<1>")
t=C.C(new C.Z(v,new A.cq4(s),u),u.k("J.E"))
if(t.length!==0){w=D.o.V($.H5()[D.d.gI(t)])
v=t.length
u=v===1?"it":"the studs"
return s.fS("The cable is stuck: the stud at "+w+" inches has no hole. Drill "+u+" first ("+v+" left on the way).")}w.M(0,d)
return new A.ex(!0,"Cable pulled from the panel to "+r.b+", through the studs and along the ceiling.",!1,"")},
gaIC(){return this.gan5().d9(0,new A.cq5(this))},
apK(d){var w,v,u,t
for(w=this.Q,w=new C.cH(w,C.a6(w).k("cH<1,2>")).gaf(0);w.C();){v=w.d
u=v.b
if(u.a){t=v.a
t=d>=t&&d<=t+48}else t=!1
if(t)return u}return null},
cOY(d){var w,v,u=this
if(!u.gaIC())return u.fS("Finish the rough-in first. The cable and the boxes must be in before the drywall hides the studs.")
if(!D.d.q(B.a4j,d))return B.aXO
if(!D.d.q(B.ol,d))return u.fS("The edge of the sheet would land between two studs. The sheet needs a stud under every edge, so there is nothing to screw it to. Start at the left corner (a stud) and move one sheet width (48 inches) at a time.")
w=u.Q
v=w.h(0,d)
if((v==null?null:v.a)===!0)return u.fS("There is already a sheet there.")
v=w.h(0,d)
if(v==null){v=x.S
v=new A.avr(C.aX(v),C.aX(v))}v.a=!0
w.n(0,d,v)
return B.aXZ},
aq2(d){var w,v,u,t=C.a([],x.t)
for(w=d+48,v=0;u=$.H5(),v<u.length;++v){u=u[v]
if(u>=d&&u<=w)t.push(v)}return t},
cL8(d){var w,v,u=this,t=A.jU(d)
if(t.c)return u.fS("Ceiling fixtures do not need an opening in the wall.")
if(!u.x.ai(0,d))return u.fS("There is no box at "+t.b+".")
w=u.apK(t.d.a)
if(w==null)return u.fS("There is no sheet over this box yet. Hang the sheet first, then cut the opening.")
v=w.b
if(v.q(0,d))return u.fS("The opening is already cut.")
v.M(0,d)
return B.aY8},
aKp(d,e,f){var w,v,u,t,s,r=this
if(f)return r.fS("Missed the stud! There is only air behind the sheet here. The screw would pull through the paper. Screw only where a stud is behind the sheet (every 16 inches).")
w=x.dD
v=C.C(new C.Z(B.ol,new A.cq6(r,d),w),w.k("J.E"))
if(v.length===0)return r.fS("There is no sheet here yet.")
u=d*10+e
if(D.d.d9(v,new A.cq7(r,u)))return r.fS("There is already a screw there.")
for(w=v.length,t=r.Q,s=0;s<v.length;v.length===w||(0,C.M)(v),++s)t.h(0,v[s]).c.M(0,u)
return B.aYa},
bni(d,e){return this.aKp(d,e,!1)},
boP(d){var w=this.Q.h(0,d)
if(w==null||!w.a)return!1
return D.d.d9(this.aq2(d),new A.cq9(w))},
gaCV(){return D.d.d9(B.ol,new A.cpX(this))},
gaCU(){var w=this.gan5()
return new C.Z(w,new A.cpV(),C.a6(w).k("Z<cr.E>")).d9(0,new A.cpW(this))},
cWI(d){var w,v=this
if(!v.gaCV())return v.fS("Hang all the sheets first.")
if(!D.d.d9(B.ol,v.gapL()))return v.fS("Finish screwing every sheet to the studs first. Tape goes on a solid wall.")
w=v.as[d]
if(w.a)return v.fS("This seam already has tape.")
w.c=w.a=!0
return B.aXS},
cRG(d){var w,v=this,u=v.as[d]
if(!u.a)return v.fS("Tape first. The mud goes over the tape.")
if(!u.c)return v.fS("The last coat is still wet. Let it dry before the next coat.")
w=u.b
if(w>=3)return v.fS("Three coats are enough. Now sand it.");++w
u.b=w
u.c=!1
return new A.ex(!0,"Coat "+w+" of joint compound spread. Let it dry.",!1,"")},
cQA(){var w,v=this.as
if(D.d.d9(v,new A.cq2()))return B.aY5
for(w=0;w<2;++w)v[w].c=!0
return B.aYj},
bn4(d){var w=this,v=w.as[d]
if(v.b<3)return w.fS("Put on all three coats of mud first. Sanding now would just rub off the tape.")
if(!v.c)return w.fS("The mud is still wet. Let it dry first.")
if(v.d)return w.fS("Already sanded.")
v.d=!0
return B.aXP},
cTZ(d){var w=this,v=w.Q.h(0,d)
if(v==null||!v.a)return w.fS("There is no sheet there.")
if(!w.gaCU())return w.fS("Cut the openings for the boxes before you paint. Otherwise the paint covers the boxes.")
if(!D.d.d9(w.as,new A.cq3()))return w.fS("Sand the seams first. Paint shows every bump.")
if(v.e)return w.fS("This sheet is already painted.")
v.e=!0
return B.aXL},
gwA(){var w=this
return w.gaCV()&&D.d.d9(B.ol,w.gapL())&&w.gaCU()&&D.d.d9(w.as,new A.cpZ())&&D.d.d9(B.ol,new A.cq_(w))},
No(){var w,v
for(w=this.at,w=new C.dr(w,w.r,w.e);w.C();){v=w.d.b
v.a=this.ax&&!this.ay}},
c0_(d,e){if(d.c)return e==="light"||e==="fan"?"":"A ceiling box holds a light or a fan, not an outlet or a switch."
return D.d.q(B.lG,e)||D.d.q(B.jS,e)?"":"A light or a fan hangs from the ceiling. A wall box holds an outlet, a GFCI or a switch."},
bfz(d,e){var w,v,u,t,s,r=this,q=A.jU(d)
if(!r.gwA())return r.fS("Finish the drywall first. Devices go in after the walls are painted.")
w=r.x
if(!w.ai(0,d)||!r.z.q(0,d))return r.fS("There is no box with cable at "+q.b+".")
v=r.at
if(v.ai(0,d))return r.fS("There is already a device there. Pull it out first if you want to move it.")
u=r.c0_(q,e)
if(u.length!==0)return r.fS(u)
if(!(D.d.q(B.jS,e)&&q.e==="low"))t=!D.d.q(B.jS,e)&&!q.c&&q.e==="switch"
else t=!0
if(t){if(!r.b)return r.fS(D.d.q(B.jS,e)?"A switch goes about 48 inches from the floor, where a hand falls naturally. This box is down at outlet height.":"Outlets go low, about 16 inches from the floor. This box is up at switch height.");++r.f
r.cy.push("Wrong height at "+q.b+".")}t=e==="fan"
if(t&&w.h(0,d)!=="fan")if(!r.b)return r.fS("This box is not fan rated. A fan on it can fall. Take the box out and put in a fan-rated one.")
s=new A.Cu(C.T(x.S,x.N))
s.r=r.b
s.y=r.dx
s.x=!(t&&w.h(0,d)!=="fan")
s.a=r.ax&&!r.ay
v.n(0,d,new A.aTU(e,s))
if(e==="light")w="Light fixture"
else if(t)w="Ceiling fan"
else if(e==="gfci")w="GFCI outlet"
else w=e==="switch"?"Switch":A.agx(e)
return new A.ex(!0,w+" is held up to "+q.b+". Turn the breaker OFF, then wire it.",!1,"")},
bid(d){var w=this,v=w.at,u=v.h(0,d)
if(u==null)return B.aXW
if(w.ax&&!w.ay&&!u.b.w){if(w.b)return w.a20()
return w.a2f()}v.W(0,d)
w.CW.W(0,d)
w.cx.W(0,d)
w.ch.W(0,d)
return B.aYd},
a2f(){++this.r;++this.f
return B.aYb},
a20(){var w,v,u=this;++u.r;--u.e
u.ax=!1
u.No()
w=u.e
if(w<=0){u.w=!0
return B.aXV}v=w===1?"life":"lives"
return new A.ex(!1,"ZAP! You touched a live wire and got a shock. The breaker is now off. "+w+" "+v+" left. Always turn the breaker OFF and test the wires first.",!0,"shock")},
bdV(d,e,f){var w,v,u,t,s=this,r=s.at.h(0,d)
if(r==null)return B.aaT
s.No()
w=A.t0(r.a)
v=D.d.h_(w.f,new A.cq0(f))
u=A.hsL(w,r.b,e,v,!0)
t=u==null
if(t&&s.dx)return B.aXN
if(t){if(!s.b&&!v.c.q(0,e)){++s.f
return new A.ex(!0,v.b+": fastened. Careful: "+C.w(w.r.$2(e,v))+" It will burn or trip the breaker when the power comes on.",!0,"")}return new A.ex(!0,v.b+": wire fastened.",!1,"")}if(D.a.a0(u,"SHOCK"))return s.a20()
if(D.a.a0(u,"STOP"))return s.a2f();++s.f
return new A.ex(!1,u,!1,"")},
bjb(d,e){var w,v=this,u=v.at.h(0,d)
if(u==null)return B.VM
v.No()
w=u.b
if(w.a&&w.c===0){if(v.b)return v.a20()
return v.a2f()}w=w.b
w.bt(w,new A.cqa(e))
return B.aYi},
bhT(d){var w,v,u=this,t=u.at.h(0,d)
if(t==null)return B.aaT
w=A.t0(t.a)
v=t.b
if(!A.bDS(w,v))return u.fS("Every wire must be fastened first.")
if(u.ax&&!u.ay){if(u.b)return u.a20()
return u.a2f()}v.c=1
return B.aY3},
bhR(d){var w,v=this,u=v.at.h(0,d)
if(u==null)return B.VM
if(v.ax&&!v.ay){if(v.b)return v.a20()
return v.a2f()}w=u.b
w.c=0
w.d=!1
return B.aY9},
bcJ(d){var w=this.at.h(0,d)
if(w==null||w.b.c!==1)return this.fS("Push the device into the box first.")
w.b.c=2
return B.aYc},
cWJ(){var w,v,u,t,s,r,q,p,o,n=C.a([],x.fJ),m=this.d
m===$&&C.c()
w=m.length
v=this.at
u=0
for(;u<m.length;m.length===w||(0,C.M)(m),++u){t=m[u]
s=t.a
r=v.h(0,s)
q=t.b
p=A.t0(q)
o=A.jU(s).b+": "+p.b
if(r==null||r.a!==q){n.push(new A.aaR(o,A.fKZ(p),B.dd5,!0))
continue}s=A.fKZ(p)
q=r.b
n.push(new A.aaR(o,s,A.h2s(p,q),q.x))}return n},
cWK(){var w,v,u,t,s,r=C.aX(x.N),q=this.d
q===$&&C.c()
w=q.length
v=0
for(;v<q.length;q.length===w||(0,C.M)(q),++v)r.M(0,q[v].b)
q=C.a([],x.W)
for(r=C.en(r,r.r,r.$ti.c),w=r.$ti.c;r.C();){u=r.d
u=B.aFd.h(0,u==null?w.a(u):u)
if(u==null)u=B.ayv
t=C.S(u)
s=new C.jw(u,0,2,t.k("jw<1>"))
s.pd(u,0,2,t.c)
D.d.v(q,s)}return q},
aoV(d){var w=this.at
return A.L_(A.t0(w.h(0,d).a),w.h(0,d).b)},
aIL(){var w=this
if(w.ay){w.ax=w.ay=!1
w.No()
return B.aY1}w.ax=!w.ax
w.No()
if(!w.ax)return B.aXU
return w.c6V()},
c6V(){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=C.a([],x.s),i=k.db
i.a8(0)
for(w=k.at,v=new C.cH(w,C.a6(w).k("cH<1,2>")).gaf(0),u=k.cx,t=!1,s=!1,r=!1;v.C();){q=v.d
p=q.b.b
if(p.c===0)continue
o=q.a
n=A.L_(A.t0(w.h(0,o).a),w.h(0,o).b)
p.d=p.c>=2
m=n.r
if(m!=="none"){i.n(0,o,m)
p.z=m
r=!0}if(n.d)t=!0
if(n.e){p.w=!0
u.M(0,o)
s=!0}if(n.a!=="ok"&&!k.dx)j.push(A.jU(o).b+": "+n.b)}if(t){k.ay=!0
k.No()
l=s?"BANG! Sparks, smoke and flames. ":"Snap! "
i=k.dx?"The breaker tripped.":l+" The breaker tripped. "+D.d.aG(j," ")+" Fix it, then flip the breaker OFF and ON again."
return new A.ex(!1,i,!0,s?"burn":"trip")}if(r)return new A.ex(!1,k.dx?"Power is on.":"Power is on, and something is wrong. "+D.d.aG(j," "),!0,"arc")
if(j.length!==0)return new A.ex(!0,"Power is on. "+D.d.aG(j," "),!0,"")
return B.aY6},
aFm(d){var w,v,u,t,s,r,q=this,p=q.at,o=p.h(0,d)
if(o==null||!D.d.q(B.jS,o.a)||o.b.c<2)return B.aYh
w=q.ch
if(w.q(0,d))w.W(0,d)
else w.M(0,d)
v=q.d
v===$&&C.c()
u=C.S(v).k("Z<1>")
t=C.C(new C.Z(v,new A.cq1(d),u),u.k("J.E"))
if(t.length===0)return B.aY2
s=D.d.gI(t)
v=s.a
r=q.amT(v)
if(w.q(0,d)&&r){p=p.h(0,v)
if(p!=null)p.c=!0
return new A.ex(!0,(s.b==="fan"?"The fan spins":"The light turns on")+". The switch works.",!1,"")}if(w.q(0,d)){p=s.b
return new A.ex(!1,(p==="fan"?"The fan":"The light")+" did not come on. Check the breaker and the wires on the switch and on the "+p+".",!1,"")}return B.aYg},
a4g(d){var w,v=this.at.h(0,d)
if(v!=null){w=v.b
w=w.c<2||w.w}else w=!0
if(w)return!1
return this.aoV(d).c},
amT(d){var w=this,v=w.cTK(d),u=v==null,t=u?null:v.c,s=!0
if(!u)if(t!=null)u=!(w.ax&&!w.ay)||!w.a4g(d)||!w.a4g(t)
else u=s
else u=s
if(u)return!1
return w.ch.q(0,t)},
bhB(d,e){var w,v,u,t=this,s="Nothing happens.",r=t.at.h(0,d)
if(r==null||!D.d.q(B.lG,r.a)||r.b.c<2)return t.fS("There is no finished outlet there to plug into.")
w=t.CW
if(w.ai(0,d))return t.fS("Something is already plugged in.")
w.n(0,d,e)
w=r.b
if(w.w)return B.aXX
v=t.aoV(d)
if(t.ax&&!t.ay&&t.a4g(d)){r.c=!0
if(v.a!=="ok"){w=t.dx
u=w?A.cpU(e)+" runs.":A.cpU(e)+" runs, but this outlet is NOT safe. "+v.b
return new A.ex(!0,u,!w,"")}return new A.ex(!0,A.cpU(e)+" runs. The outlet works.",!1,"")}if(!(t.ax&&!t.ay))return B.aY0
u=v.r
if(u!=="none"){t.db.n(0,d,u)
w.z=u
w=t.dx?s:A.cpU(e)+" does not run. "+v.b
return new A.ex(!1,w,!0,u==="fire"?"burn":"arc")}return new A.ex(!1,t.dx?s:"Nothing happens. "+v.b,!0,"")},
bjd(d){if(this.CW.W(0,d)==null)return B.VM
return B.aXT},
bhl(d){var w,v=this
if(d>=0){w=v.d
w===$&&C.c()
w=d>=w.length}else w=!0
if(w)return 2
if(v.tb(d))return 2
w=v.d
w===$&&C.c()
return v.at.h(0,w[d].a)==null?0:1},
tb(d){var w,v,u,t=this
if(d>=0){w=t.d
w===$&&C.c()
w=d>=w.length}else w=!0
if(w)return!0
w=t.d
w===$&&C.c()
v=w[d]
w=v.a
u=t.at.h(0,w)
if(u==null||!A.fZk(v.b,u.a)||u.b.c<2)return!1
return t.aoV(w).a==="ok"},
gbjD(){var w,v,u,t,s,r,q,p,o,n=this.d
n===$&&C.c()
w=n.length
v=this.at
u=0
for(;u<n.length;n.length===w||(0,C.M)(n),++u){t=n[u]
s=t.a
r=v.h(0,s)
if(r!=null){q=t.b
p=r.a
o=!0
if(q!==p)if(!(D.d.q(B.lG,q)&&D.d.q(B.lG,p)))if(!(D.d.q(B.jS,q)&&D.d.q(B.jS,p)))if(q==="light"||q==="fan")q=p==="light"||p==="fan"
else q=!1
else q=o
else q=o
else q=o
q=!q||r.b.c<2}else q=!0
if(q)return!1
if(A.L_(A.t0(v.h(0,s).a),v.h(0,s).b).a!=="ok")return!1}return!0},
gbdd(){var w,v,u,t,s,r,q,p,o,n=this.d
n===$&&C.c()
w=n.length
v=this.at
u=0
for(;u<n.length;n.length===w||(0,C.M)(n),++u){t=n[u]
s=t.a
r=v.h(0,s)
if(r!=null){q=t.b
p=r.a
o=!0
if(q!==p)if(!(D.d.q(B.lG,q)&&D.d.q(B.lG,p)))if(!(D.d.q(B.jS,q)&&D.d.q(B.jS,p)))if(q==="light"||q==="fan")q=p==="light"||p==="fan"
else q=!1
else q=o
else q=o
else q=o
q=!q||r.b.c<2}else q=!0
if(q)return!1
if(A.L_(A.t0(v.h(0,s).a),v.h(0,s).b).a!=="ok")return!1
s=t.b
if(D.d.q(B.lG,s)){if(!r.c)return!1}else if(!D.d.q(B.jS,s)&&!r.c)return!1}return!0}}
A.iV.prototype={}
A.O7.prototype={
U(){var w,v=new A.x7(-0.12,0.4,205,B.a9O,$.ax())
v.f=300
v.z=0.7
v.w=0.05
w=new C.y6()
$.yQ()
w.hj(0)
return new A.aEB(v,w,C.T(x.S,x.i))}}
A.aEB.prototype={
gCO(d){var w=this.e
if(w===$){this.a.toString
w=D.o.F(Date.now(),1e5)
this.e=w}return w},
a_(){var w,v,u=this
u.a2()
w=u.a.e
if(w==null){w=u.gCO(0)
u.a.toString
w=A.cpT(null,null,!1,w,!0)}u.d=w
v=u.a
if(v.c)w.dx=!0
if(v.e!=null&&w.gwA())u.y=2
if(u.a.f){u.d.alN()
u.y=2}u.r=A.wK(u.d,new A.rH(u.z,u.Q,!1))
w=u.f
w.y=0
w.z=1.1},
t(){var w=this.cy
if(w!=null)w.a3(0)
this.a1()},
c73(){var w=this,v=w.d
v===$&&C.c()
w.r=A.wK(v,new A.rH(w.z,w.Q,!1))},
qx(d,e){var w=this,v=w.cy
if(v!=null)v.a3(0)
w.m(new A.eqi(w,d,e))
w.cy=C.cL(D.ju,new A.eqj(w))},
ae4(d){return this.qx(d,!1)},
jz(d){var w,v,u,t,s,r,q,p,o=this,n=d.a
if(n)A.yE()
else A.fU(180,220,0.25,"square")
w=d.d
if(w==="shock"){C.fG()
o.m(new A.epk(o))
C.bO(D.mz,new A.epl(o),x.P)}v=w==="burn"
if(v||w==="trip"||w==="arc"){u=o.d
u===$&&C.c()
u=u.db
u=new C.hB(u,u.r,u.e)
t=o.x
s=o.w
while(u.C()){r=u.d
q=s.gik()
p=o.d.db.h(0,r)==="fire"?7:4.5
t.n(0,r,q/1000+p)}C.fG()
w=w==="arc"
u=w?95:150
t=w?500:300
A.fU(u,t,0.5,w?"saw":"noise")
if(v){o.m(new A.epm(o))
C.bO(D.eO,new A.epn(o),x.P)}}w=o.d
w===$&&C.c()
o.r=A.wK(w,new A.rH(o.z,o.Q,!1))
n=n&&!d.c
o.qx(d.b,n)
if(o.d.w&&o.c!=null)$.aW.x1$.push(new A.epo(o))
if(o.d.gbdd()&&!o.cx){o.cx=!0
$.aW.x1$.push(new A.epp(o))}},
b3N(){var w=this.ch?3.141592653589793:-0.12
this.f.hP(205,0.4,B.a9O,w)},
c6Y(d,e){var w,v,u,t,s
if(this.Q>=0)return
w=this.f
v=w.cXG(d,e)
if(v==null||Math.abs(v.a)>78||Math.abs(v.b)>52)v=w.beh(d,e,-47)
if(v==null)return
u=D.k.E(v.a,-70,70)
t=D.k.E(v.b,-46,48)
s=D.k.E(v.c,-6,100)
w.xb(Math.max(34,w.c*0.45),new A.r(u,t,s))
A.fU(560,50,0.25,"tri")},
aTu(){var w,v,u=this
u.ch=!1
w=u.f
w.w=0.05
w.z=0.7
w.r2(!1)
w.y=0
u.m(new A.epz(u))
v=u.d
v===$&&C.c()
u.r=A.wK(v,new A.rH(u.z,u.Q,!1))
w.hP(205,0.4,B.a9O,-0.12)},
c1x(){var w,v,u=this
u.ch=!1
w=u.f
w.r2(!1)
w.w=-0.95
w.y=0
w.z=1
u.m(new A.epB(u))
v=u.d
v===$&&C.c()
u.r=A.wK(v,new A.rH(u.z,u.Q,!1))
w.hP(82,-0.55,B.fSf,-0.12)},
bCP(){var w,v,u,t,s=this,r=s.d
r===$&&C.c()
r=r.CW
w=C.a6(r).k("cH<1,2>")
v=w.k("Z<J.E>")
u=C.C(new C.Z(new C.cH(r,w),new A.epq(),v),v.k("J.E"))
if(u.length===0){s.ae4("Plug a TV into an outlet first. Then you can look behind it.")
return}t=A.jU(D.d.gI(u).a).d.a
s.ch=!1
r=s.f
r.r2(!1)
r.w=0.02
r.y=0
r.z=1.7
s.m(new A.epr(s))
s.r=A.wK(s.d,new A.rH(s.z,s.Q,!1))
w=t<0?-1.4:1.4
r.hP(60,0.12,new A.r(t,-30,14),w)
s.qx("This is the back of the TV. Tap the TV or its plug to pull the plug.",!0)},
bCN(){var w,v,u=this
u.ch=!0
w=u.f
w.r2(!0)
u.m(new A.eps(u))
v=u.d
v===$&&C.c()
u.r=A.wK(v,new A.rH(u.z,u.Q,!1))
w.hP(190,0.3,B.fSJ,3.141592653589793)},
ZH(d,e){var w,v,u,t,s=this,r=A.jU(e),q=s.f
q.r2(!1)
q.y=0
s.m(new A.epS(s,e))
w=s.d
w===$&&C.c()
s.r=A.wK(w,new A.rH(s.z,s.Q,!1))
v=A.ahO(r,B.fQH)
w=r.c
u=w?20:15
t=w?1.2:0.3
q.hP(u,w?-0.12:0.26,v,t)},
ae3(){var w,v=this
v.m(new A.epA(v))
w=v.d
w===$&&C.c()
v.r=A.wK(w,new A.rH(v.z,v.Q,!1))
v.b3N()},
c71(d){var w,v,u,t,s,r,q,p=this
if(d===0){if(p.Q<0)p.m(new A.eqe(p))
return}w=p.Q
if(w>=0)v=!(d>=5000&&d<5700)
else v=!1
if(v)return
if(d>=5000&&d<5700){v=d-5000
u=D.o.an(v,100)
if(w!==u){if(p.z==="tester")p.aBB(u)
else{p.m(new A.eqf(p))
p.ZH(0,u)}return}p.b1v(u,D.o.F(v,100))
return}if(d>=1000&&d<1010)if(p.z==="drill"){w=p.d
w===$&&C.c()
p.jz(w.cMc(d-1000))
return}if(d>=2000&&d<2007){p.b1x(d-2000)
return}if(d>=3000&&d<3007){p.b1w(d-3000)
return}if(d>=6000&&d<6005){if(p.z==="sheet"){w=p.d
w===$&&C.c()
p.jz(w.cOY(B.a4j[d-6000]))}return}if(d>=6100&&d<6103){t=B.ol[d-6100]
if(p.z==="paint"){w=p.d
w===$&&C.c()
p.jz(w.cTZ(t))
return}}if(d>=6200&&d<6202){s=d-6200
switch(p.z){case"tape":w=p.d
w===$&&C.c()
p.jz(w.cWI(s))
return
case"mud":w=p.d
w===$&&C.c()
p.jz(w.cRG(s))
return
case"sand":w=p.d
w===$&&C.c()
p.jz(w.bn4(s))
return}}if(d>=7000&&d<7100){if(p.z==="screw"){w=p.d
w===$&&C.c()
v=d-7000
p.jz(w.bni(D.o.an(v,10),D.o.F(v,10)))}return}if(d>=7500&&d<7600){if(p.z==="screw"){w=p.d
w===$&&C.c()
v=d-7500
p.jz(w.aKp(D.o.an(v,10),D.o.F(v,10),!0))}return}if(d===8000){w=p.d
w===$&&C.c()
p.jz(w.aIL())
return}if(d>=8200&&d<8207){w=p.d
w===$&&C.c()
p.jz(w.bjd(d-8200))
return}if(d>=8100&&d<8107){w=p.d
w===$&&C.c()
r=w.CW.h(0,d-8100)
A:{if("tv"===r){w="The TV"
break A}if("lamp"===r){w="The lamp"
break A}if("toaster"===r){w="The toaster"
break A}w="The hair dryer"
break A}p.qx(w+" is plugged in. To pull the plug, go behind it (the Behind the TV button) and tap the plug on the wall.",!0)
return}if(p.z==="look"){w=p.r
w===$&&C.c()
q=w.b.h(0,d)
if(q!=null){p.m(new A.eqg(p,d))
p.qx(q.a+": "+q.b,!0)}}},
b1x(d){var w,v,u,t=this,s=t.d
s===$&&C.c()
if(s.at.ai(0,d)){s=t.z
s=s!=="tester"&&s!=="look"&&!D.d.q(B.HH,s)}else s=!1
if(s){t.m(new A.eqc(t))
t.ZH(0,d)
return}s=t.z
switch(s){case"wall":case"ceiling":case"fanbox":w=t.d
t.jz(w.cRD(d,s==="fanbox"?"fan":s))
return
case"cable":t.jz(t.d.cUP(d))
return
case"knife":t.jz(t.d.cL8(d))
return
case"outlet":case"gfci":case"switch":case"split":case"v240four":case"v240three":case"v240only":case"isolated":case"switch2p":case"switch3":case"switch4":case"switchsmart":case"switchcombo":case"light":case"fan":v=t.d.bfz(d,s)
t.jz(v)
if(v.a){s=t.d.at.h(0,d).b
w=t.d
s.f=!w.b&&!w.dx
t.z=""
t.ZH(0,d)}return
case"tester":t.aBB(d)
return}if(t.d.at.ai(0,d)){t.ZH(0,d)
return}if(t.d.gwA()&&t.d.x.ai(0,d)&&!t.d.at.ai(0,d)){t.qx("This box is empty. Pick what you want to put in (an outlet, a switch, a light or a fan) from the tray, then tap the box.",!0)
return}s=t.r
s===$&&C.c()
u=s.b.h(0,2000+d)
if(u!=null){t.m(new A.eqd(t,d))
t.qx(u.a+": "+u.b,!0)}},
aBB(d){var w,v=this.d
v===$&&C.c()
w=v.ax&&!v.ay&&v.x.ai(0,d)&&this.d.z.q(0,d)
v=w?"The tester glows: this box is LIVE (120 volts). Turn the breaker OFF before you touch any wire.":"The tester stays dark: no power here. It is safe to work. (Test again after you turn the breaker off, every time.)"
this.qx(v,!w)
A.fU(w?1400:500,120,0.25,"tri")},
b1w(d){var w,v=this,u=v.d
u===$&&C.c()
w=u.at.h(0,d)
if(w==null)return
if(D.d.q(B.HH,v.z)){v.jz(v.d.bhB(d,v.z))
return}u=v.z
if(u==="tester"){v.aBB(d)
return}if(u==="flip"){if(D.d.q(B.jS,w.a)&&w.b.c>=2)v.jz(v.d.aFm(d))
else v.ae4("Only a finished switch can be flipped.")
return}v.m(new A.eqb(v))
v.ZH(0,d)},
b1v(d,e){var w,v,u,t,s,r,q,p,o=this,n=o.d
n===$&&C.c()
w=n.at.h(0,d)
if(w==null)return
if(B.aOW.q(0,e))return
n=w.a
v=A.t0(n)
u=v.f
t=C.S(u).k("Z<1>")
s=C.C(new C.Z(u,new A.eq3(e),t),t.k("J.E"))
r=A.hsQ(n,e)
n=r!=null
if(n){u=w.b
u=u.b.iH(0,r)&&u.c===0}else u=!1
if(u){o.jz(o.d.bjb(d,r))
return}u=!1
if(s.length!==0){t=w.b
if(t.c===0){t=t.b
if(t.h(0,e)!=null)u=o.at.length===0||t.h(0,e)===o.at}}if(u){n=o.d
u=w.b.b.h(0,e)
u.toString
o.jz(n.bjb(d,u))
o.m(new A.eq4(o))
return}if(n){n=w.b
n=n.c===0&&!n.b.iH(0,r)&&D.d.b3(v.e,new A.eq5(r))}else n=!1
if(n){o.m(new A.eq6(o,r,d,e))
if(o.at.length!==0)o.qx(D.d.h_(v.e,new A.eq7(r)).b+": picked up. Now tap where it joins.",!0)
return}if(s.length!==0&&w.b.c===0){n=o.at
if(n.length===0){o.ae4("Pick a wire below first, then tap "+D.d.gI(s).b+".")
o.m(new A.eq8(o,d,e))
return}q=o.d.bdV(d,n,e)
o.jz(q)
if(q.a)o.m(new A.eq9(o))
return}n=o.r
n===$&&C.c()
p=n.b.h(0,5000+d*100+e)
if(p!=null){o.m(new A.eqa(o,d,e))
o.qx(p.a+": "+p.b,!0)}},
c74(){var w,v,u,t,s,r,q=this,p=C.a([],x.ek)
for(w=0;w<7;++w){v=B.uw[w]
u=q.d
u===$&&C.c()
t=v.a
s=u.at.ai(0,t)
r=q.z
A:{if("wall"===r){u=!v.c&&!q.d.x.ai(0,t)
break A}if("ceiling"===r||"fanbox"===r){u=v.c&&!q.d.x.ai(0,t)
break A}if("cable"===r){u=q.d.x.ai(0,t)&&!q.d.z.q(0,t)
break A}if("knife"===r){u=!v.c&&q.d.x.ai(0,t)
break A}u=D.d.q(B.lG,r)||D.d.q(B.jS,q.z)
if(u){u=!v.c&&q.d.x.ai(0,t)&&!s
break A}if("light"===r||"fan"===r){u=v.c&&q.d.x.ai(0,t)&&!s
break A}if("tv"===r||"lamp"===r||"toaster"===r||"hairdryer"===r){u=s&&D.d.q(B.lG,q.d.at.h(0,t).a)
break A}if("tester"===r){u=q.d.x.ai(0,t)
break A}u=!1
break A}if(u)p.push(new C.z(t,v.b))}return p},
cwU(){var w,v,u,t,s,r,q,p=null,o=this.c74()
if(o.length===0)return D.bJ
w=C.a([],x.p)
for(v=o.length,u=0;u<o.length;o.length===v||(0,C.M)(o),++u){t={}
s=o[u]
t.a=null
t.a=s.a
r=new C.aQ(12,12)
q=new C.ay(D.b2,1,D.r,-1)
w.push(C.aB(p,C.p(p,new C.y("\ud83d\udccd "+s.b,p,D.ow,p,p,p,p,p,p,p,p,p),D.f,p,p,new C.o(D.f5.j(0.35),p,new C.bI(q,q,q,q),new C.bk(r,r,r,r),p,p,D.n),p,p,p,p,B.Zn,p,p,p),D.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new A.eqk(t,this),p,p,p,p,p,p,!1,D.a4))}return new C.D(D.ic,C.bW(D.bD,w,D.bq,6,6),p)},
bPc(){var w=null,v=this.c
v.toString
C.cf(w,w,!1,w,new A.epy(this),v,w,!0,!0,x.H)},
c6W(){var w=null,v=this.c
v.toString
C.cf(w,w,!0,w,new A.epv(this),v,w,!0,!0,x.H)},
axb(d){this.m(new A.epC(this,d))
this.aTu()},
aZh(){return this.axb(!1)},
c7_(){var w,v,u,t,s,r,q,p,o,n=this,m=n.d
m===$&&C.c()
if(m.w)return"The job is over."
switch(n.y){case 0:m=m.d
m===$&&C.c()
w=C.S(m).k("Z<1>")
v=C.C(new C.Z(m,new A.epD(n),w),w.k("J.E"))
if(v.length!==0){u=D.d.gI(v)
t=A.jU(u.a)
m=A.agx(u.b)
if(t.c)w=t.e==="fan"?"fan box":"ceiling box"
else w="wall box"
return"Mount a box at "+t.b+" ("+m.toLowerCase()+" goes here): pick a "+w+", then tap the glowing spot."}m=n.d.d
m===$&&C.c()
w=C.S(m).k("Z<1>")
s=C.C(new C.Z(m,new A.epE(n),w),w.k("J.E"))
if(s.length!==0){t=D.d.gI(s).a
m=n.d.aLa(t)
r=new C.Z(m,new A.epF(n),C.S(m).k("Z<1>")).gL(0)
return r>0?"The cable comes from the panel on the right. Pick the drill and tap each stud on the way to "+A.jU(t).b+" ("+r+" left).":"Pick the cable roll and tap "+A.jU(t).b+"."}return"Rough-in done! Open 2 Drywall."
case 1:if(!m.gaIC())return"Finish the rough-in first (tab 1). Drywall hides the wires."
if(!n.d.gaCV())return"Pick a drywall sheet and tap a stud edge to hang it. Three sheets cover the wall."
if(!n.d.gaCU())return"Pick the drywall saw and tap each box to cut its opening."
if(!D.d.d9(B.ol,n.d.gapL()))return"Pick the screw gun and put a screw in every glowing spot on the studs."
if(D.d.b3(n.d.as,new A.epI()))return"Pick the tape and tap each seam between two sheets."
if(D.d.b3(n.d.as,new A.epJ()))return D.d.b3(n.d.as,new A.epK())?'The mud is wet. Press "Let it dry", then the next coat.':"Pick the mud and tap each seam. It needs three coats, with drying in between."
if(D.d.b3(n.d.as,new A.epL()))return D.d.b3(n.d.as,new A.epM())?'Press "Let it dry", then sand.':"Pick the sander and tap each seam."
if(!n.d.gwA())return"Pick the roller and paint each sheet."
return"Drywall done! Open 3 Devices."
default:if(!m.gwA())return"Finish the drywall first (tab 2)."
m=n.d.d
m===$&&C.c()
w=C.S(m).k("Z<1>")
q=C.C(new C.Z(m,new A.epN(n),w),w.k("J.E"))
if(q.length!==0){u=D.d.gI(q)
return"The breaker being on is not the end: the job is done only when every device is in and wired. Tap the blue square at "+A.jU(u.a).b+" to put in the "+A.agx(u.b).toLowerCase()+". ("+C.w(new A.epQ().$1(new C.N(q,new A.epO(),C.S(q).k("N<1,H>"))))+" still need a device.)"}m=n.d.d
m===$&&C.c()
w=C.S(m).k("Z<1>")
p=C.C(new C.Z(m,new A.epP(n),w),w.k("J.E"))
if(p.length!==0)return"Tap "+A.jU(D.d.gI(p).a).b+" to work on it: breaker OFF, wires, push in, cover on."
m=n.d
if(!m.ax)return"Turn the breaker ON (tap the panel or the breaker button) and test."
m=m.d
m===$&&C.c()
w=C.S(m).k("Z<1>")
o=C.C(new C.Z(m,new A.epG(n),w),w.k("J.E"))
if(o.length!==0)return"Pick the TV or the lamp and plug it into "+A.jU(D.d.gI(o).a).b+" to test it."
m=n.d.d
m===$&&C.c()
return"Flip the wall switch to test the "+(D.d.b3(m,new A.epH())?"fan":"light")+"."}},
B(a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this,a2=null,a3=B.dn6[a1.y],a4=a1.Q
if(a4>=0){w=a1.d
w===$&&C.c()
v=w.at.h(0,a4)}else v=a2
a4=v==null
u=a4?a2:A.t0(v.a)
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
for(l=0;l<3;++l)m.push(new C.D(D.MK,new C.y(l<a1.d.e?"\u2764\ufe0f":"\ud83d\udda4",a2,D.A7,a2,a2,a2,a2,a2,a2,a2,a2,a2),a2))
m.push(D.bo)
k=a1.d
if(k.ay)k=D.k9
else{k=k.ax
k=k?D.ev:D.dY}k=k.j(0.95)
j=C.m(16)
i=a1.d
h=i.ay
if(h)g=D.cZ
else{g=i.ax
g=g?D.cs:D.bm}g=C.I(g,D.r,1.4)
if(h)i="TRIPPED: tap to reset"
else{i=i.ax
i=i?"Breaker ON":"Breaker OFF"}m.push(C.aB(a2,C.p(a2,C.d(i,a2,a2,a2,a2,a2,a2,B.fg1,a2,a2,a2),D.f,a2,a2,new C.o(k,a2,g,j,a2,a2,D.n),a2,a2,a2,a2,D.re,a2,a2,a2),D.y,!1,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,new A.eqs(a1),a2,a2,a2,a2,a2,a2,!1,D.a4))
m=C.a([C.B(m,D.m,a2,D.e,D.P,0,a2,a2)],n)
k=a1.ch
j=k?"In front":"Behind the wall"
i=k?G.amD:G.amC
k=C.a([A.wL(j,D.by,i,k,k?a1.gbQK():a1.gbCM()),D.am,A.wL("Look up",D.b2,B.bLn,!1,a1.gc1w()),D.am,A.wL("Behind the TV",D.cZ,V.a1q,!1,a1.gbCO()),D.am],n)
if(!a4){j=v.b
D.d.v(k,C.a([A.wL("Labels",D.aR,M.C6,j.f,new A.eqt(a1,v)),D.am,A.wL("Hints",D.aE,D.ro,j.e,new A.equ(a1,v)),D.N],n))}s=A.XT(!1,a2,a1.f,new A.eqE(a1),a2,p,r,o,a2,a2,q,a2,a1.gc6X(),new A.eqF(a1),a1.gc70(),s,!1,a2,m,k)
r=C.a([],n)
if(a4){a4=C.a([],n)
for(l=0;l<3;++l){q=l<2?6:0
p=a1.y===l?D.aE.j(0.2):D.ds
o=new C.aQ(12,12)
f=new C.ay(a1.y===l?D.aE:D.bz,1,D.r,-1)
if(l===0)m=a1.d.gaIC()
else{m=a1.d
m=l===1?m.gwA():m.gbdd()}m=m?"\u2705 ":""
k=B.dll[l]
j=a1.y===l?D.aE:D.ae
a4.push(new C.bA(1,D.bd,C.aB(a2,C.p(a2,new C.ci(D.A,a2,a2,new C.y(m+k,a2,new C.F(!0,j,a2,a2,a2,a2,12,D.u,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2),a2,a2,a2,a2,a2,a2,a2,a2,a2),a2),D.f,a2,a2,new C.o(p,a2,new C.bI(f,f,f,f),new C.bk(o,o,o,o),a2,a2,D.n),a2,a2,a2,new C.Q(0,0,q,0),A2.MN,a2,a2,a2),D.y,!1,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,new A.eqG(a1,l),a2,a2,a2,a2,a2,a2,!1,D.a4),a2))}a4=C.a([C.B(a4,D.m,a2,D.e,D.j,0,a2,a2),D.am],n)
if(!a1.d.b){q=D.aR.j(0.1)
p=C.m(10)
o=C.I(D.aR.j(0.4),D.r,1)
a4.push(C.p(a2,C.d("\ud83d\udc49 "+a1.c7_(),a2,2,D.a2,a2,a2,a2,B.fhz,a2,a2,a2),D.f,a2,a2,new C.o(q,a2,o,p,a2,a2,D.n),a2,a2,a2,a2,D.cm,a2,a2,1/0))}else a4.push(B.fA0)
a4.push(D.am)
q=C.a([],n)
if(a1.y<2&&!a1.d.gwA())q.push(new C.D(E.tU,C.aB(a2,C.p(a2,B.b7K,D.f,a2,a2,new C.o(D.dK,a2,a2,C.m(14),a2,a2,D.n),a2,a2,a2,a2,D.fI,a2,a2,a2),D.y,!1,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,new A.eqH(a1),a2,a2,a2,a2,a2,a2,!1,D.a4),a2))
for(p=a3.length,e=0;e<p;++e){d=a3[e]
o=d.a
m=a1.z===o?D.aE.j(0.25):D.c.j(0.07)
k=new C.aQ(14,14)
o=a1.z===o
j=o?D.aE:D.aZ
f=new C.ay(j,o?2:1,D.r,-1)
j=o?D.aE:D.ae
j=C.X(d.c,j,a2,a2,a2,19)
o=o?D.aE:D.c
q.push(new C.D(E.tU,C.aB(a2,C.p(a2,new C.cb(D.aN,D.e,D.j,D.m,a2,D.p,a2,0,C.a([j,D.bo,new C.y(d.b,a2,new C.F(!0,o,a2,a2,a2,a2,12.5,D.H,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2),a2,a2,a2,a2,a2,a2,a2,a2,a2)],n),a2),D.f,a2,a2,new C.o(m,a2,new C.bI(f,f,f,f),new C.bk(k,k,k,k),a2,a2,D.n),a2,a2,a2,a2,D.fI,a2,a2,a2),D.y,!1,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,new A.eqI(a1,d),a2,a2,a2,a2,a2,a2,!1,D.a4),a2))}if(a1.y===1)q.push(new C.D(E.tU,C.aB(a2,C.p(a2,B.b7C,D.f,a2,a2,new C.o(D.dY,a2,a2,C.m(14),a2,a2,D.n),a2,a2,a2,a2,D.fI,a2,a2,a2),D.y,!1,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,new A.eqJ(a1),a2,a2,a2,a2,a2,a2,!1,D.a4),a2))
a4.push(new C.a7(a2,52,C.cq(q,a2,a2,a2,a2,D.aN,!1),a2))
if(a1.z.length!==0)a4.push(a1.cwU())
D.d.v(r,a4)}else{a4=C.a([],n)
q=v.b
if(q.c===0)for(p=D.d.gaf(u.e),o=new C.f5(p,new A.eqK(v)),m=q.b;o.C();){k=p.gR(0)
j=k.c
i=new C.aQ(14,14)
h=a1.at
g=k.a
h=h===g
a0=h?D.b2:D.aZ
f=new C.ay(a0,h?3:1,D.r,-1)
a0=C.a([],n)
if(m.iH(0,g))a0.push(new C.D(D.ML,C.X(D.eb,k.d,a2,a2,a2,17),a2))
h=k.b
g=k.d
a0.push(new C.y(h,a2,new C.F(!0,g,a2,a2,a2,a2,12.5,D.u,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2),a2,a2,a2,a2,a2,a2,a2,a2,a2))
a4.push(C.aB(a2,C.p(a2,new C.cb(D.aN,D.e,D.P,D.m,a2,D.p,a2,0,a0,a2),D.f,a2,a2,new C.o(j,a2,new C.bI(f,f,f,f),new C.bk(i,i,i,i),a2,a2,D.n),a2,a2,a2,a2,D.y4,a2,a2,a2),D.y,!1,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,new A.eqL(a1,v,k),a2,a2,a2,a2,a2,a2,!1,D.a4))}a4=C.a([C.bW(D.bD,a4,D.bq,6,8)],n)
if(q.c===0&&a1.at.length!==0){p=C.a([],n)
for(o=D.d.gaf(u.f),m=new C.f5(o,new A.eqv(v));m.C();){k=o.gR(0)
j=D.f5.j(0.35)
i=new C.aQ(12,12)
f=new C.ay(D.b2,1,D.r,-1)
p.push(C.aB(a2,C.p(a2,new C.y("\u279c "+k.b,a2,D.ow,a2,a2,a2,a2,a2,a2,a2,a2,a2),D.f,a2,a2,new C.o(j,a2,new C.bI(f,f,f,f),new C.bk(i,i,i,i),a2,a2,D.n),a2,a2,a2,a2,B.Zn,a2,a2,a2),D.y,!1,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,new A.eqw(a1,k),a2,a2,a2,a2,a2,a2,!1,D.a4))}a4.push(new C.D(D.jN,C.bW(D.bD,p,D.bq,6,6),a2))}a4.push(D.N)
p=C.a([A.u5("Back to the room",D.l4,a1.gc6Z(),D.ae),D.ab],n)
if(q.c===0){u.toString
o=A.bDS(u,q)?"Push it into the box":"Fasten every wire"
p.push(A.u5(o,B.anK,A.bDS(u,q)?new A.eqx(a1):a2,D.aE))}if(q.c===1)D.d.v(p,C.a([A.u5("Pull it out",D.rs,new A.eqy(a1),D.ae),D.ab,A.u5("Cover on",A_.w6,new A.eqz(a1),D.aE)],n))
o=q.c>=2
if(o&&q.w)p.push(A.u5("Take out the burnt one",B.amv,new A.eqA(a1),D.cs))
else if(o)p.push(A.u5("Pull it out of the wall",B.amv,new A.eqB(a1),D.ae))
a4.push(C.B(p,D.m,a2,D.e,D.j,0,a2,a2))
if(!q.w)D.d.v(a4,C.a([D.N,C.B(C.a([A.u5("Take it out and put in a different "+(D.d.q(B.jS,v.a)?"switch":"one"),D.kg,new A.eqC(a1,v),D.aR)],n),D.m,a2,D.e,D.j,0,a2,a2)],n))
D.d.v(r,a4)}a4=C.a([A.TO(D.aE,new A.eqD(a1,a5),C.x(r,D.m,a2,D.e,D.P,0,D.p),s,"Phase "+(w+1)+"/3",t+" job",a2)],n)
if(a1.CW)a4.push(C.bU(0,C.e2(C.p(a2,a2,D.f,B.agX,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2),!0,a2),0,0,0))
return new C.an(D.a_,a2,D.aa,D.t,a4,a2)},
cqv(d){var w=this.d
w===$&&C.c()
if(w.b||w.dx)return
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
break A}this.qx(w,!0)},
cfC(d){return C.bT(E.lv,null,new A.eq2(this,d),d,!0,!0,!0,D.jZ,!1,!1,x.H)}}
A.rH.prototype={}
A.re.prototype={
a4(){return"FaultKind."+this.b}}
A.up.prototype={}
A.Mj.prototype={}
A.ctj.prototype={
byN(d,e,f){var w,v,u,t,s,r,q,p=this,o=new C.eb()
o.d5(p.a)
w=C.C(B.dav,x.eP)
D.d.dO(w,o)
v=C.aX(x.S)
u=C.a([],x.gw)
for(t=w.length,s=0;s<w.length;w.length===t||(0,C.M)(w),++s){r=w[s]
q=B.wv.h(0,r).e
if(v.q(0,q))continue
v.M(0,q)
u.push(new A.Mj(r,o.au(3)))
if(u.length>=d)break}p.c!==$&&C.aP()
p.c=u
p.axc()},
pV(d,e){var w=this.c
w===$&&C.c()
return D.d.b3(w,new A.cto(e))},
axc(){var w,v,u,t,s=this,r=s.d,q=r.d
q.a8(0)
if(s.pV(0,B.a_J))q.M(0,72)
if(s.pV(0,B.a_K))q.M(0,75)
q=s.pV(0,B.Nq)
r.b=q
r.c=!q
r.w=s.pV(0,B.Nr)
r.x=s.pV(0,B.a_O)
r.y=s.pV(0,B.a_P)
r.z=s.pV(0,B.a_N)
r.Q=s.pV(0,B.a_Q)
r.as=s.pV(0,B.a_R)
r.at=s.pV(0,B.a_M)
q=r.f
q.a8(0)
r=r.r
r.a8(0)
w=s.c
w===$&&C.c()
w=D.d.gaf(w)
v=new C.f5(w,new A.ctk())
while(v.C()){u=w.gR(0)
t=u.c
u=u.b
if(t)r.M(0,u)
else q.M(0,u)}},
gcFT(){var w=this.c
w===$&&C.c()
return D.d.d9(w,new A.ctm())},
gcNj(){var w=this.c
w===$&&C.c()
return new C.Z(w,new A.ctn(),C.S(w).k("Z<1>")).gL(0)},
cMX(d){var w,v,u,t,s,r,q,p=this.c
p===$&&C.c()
w=p.length
v=d===86
u=d===92
t=0
for(;t<p.length;p.length===w||(0,C.M)(p),++t){s=p[t]
r=s.a
q=!0
if(B.wv.h(0,r).e!==d)if(!(r===B.Nq&&v))r=r===B.Nr&&u
else r=q
else r=q
if(r)return s}return null},
aZi(d){++this.f
return new A.ex(!1,d,!1,"")},
c75(){var w,v,u,t,s=this;++s.r;--s.e
for(w=s.d,v=w.d,w=w.e,u=0;u<4;++u){t=B.aw0[u]
if(!v.q(0,t))w.M(0,t)}w=s.e
if(w<=0){s.w=!0
return B.aXR}v=w===1?"life":"lives"
return new A.ex(!1,"ZAP! You touched a live wire and got a shock. All the breakers were knocked off. "+w+" "+v+" left. Turn the breaker OFF first.",!0,"shock")},
cXv(d,e){var w,v,u,t,s=this
if(s.w)return B.aXM
if(D.d.q(B.aw0,e))return s.bDi(d,e)
w=s.cMX(e)
if(d==="inspect"){if(w==null||w.c)return B.aXQ
return new A.ex(!0,"You look and test: "+B.wv.h(0,w.a).b,!1,"")}if(w==null||w.c)return new A.ex(!1,s.b?"Nothing needs fixing there.":"There is nothing wrong with this, so the "+C.w(B.RK.h(0,d))+' is not needed. Use "Look and test" on things to find the problem.',!1,"")
v=B.wv.h(0,w.a)
if(d!==v.c){++s.f
return new A.ex(!1,s.b?"That is not the right tool for this problem.":"The "+C.w(B.RK.h(0,d))+" does not fix this. "+v.b,!1,"")}u=v.f
if(u!==0){t=s.d
u=!t.d.q(0,u)&&!t.e.q(0,u)}else u=!1
if(u){if(s.b)return s.c75()
return s.aZi("STOP! "+v.r+" The wires here are live (120 volts). Tap the breaker in the panel (with your hand) to switch it off.")}w.c=!0
s.axc()
return new A.ex(!0,v.d,!1,"")},
bDi(d,e){var w,v,u,t,s=this
if(d==="inspect"){w=s.d
if(w.d.q(0,e))w="This breaker has tripped: it sits in the middle (orange)."
else w=w.e.q(0,e)?"This breaker is switched OFF.":"This breaker is ON."
return new A.ex(!0,w,!1,"")}if(d!=="hand")return s.aZi(s.b?"Use your hand on a breaker.":"A breaker is switched with your hand, not with a "+C.w(B.RK.h(0,d))+".")
w=s.d
v=w.d
if(v.q(0,e)){w=s.c
w===$&&C.c()
u=C.S(w).k("Z<1>")
t=C.C(new C.Z(w,new A.ctl(e),u),u.k("J.E"))
if(t.length!==0){D.d.gI(t).c=!0
s.axc()
return new A.ex(!0,B.wv.h(0,D.d.gI(t).a).d,!1,"")}v.W(0,e)
return B.aYk}w=w.e
if(w.q(0,e)){w.W(0,e)
return B.aYe}w.M(0,e)
return B.aY4}}
A.art.prototype={
U(){var w,v=new A.x7(-0.3,0.48,46,B.US,$.ax())
v.f=80
w=new C.y6()
$.yQ()
w.hj(0)
return new A.aEF(v,w)}}
A.aEF.prototype={
gK(){var w=this.d
w===$&&C.c()
return w},
gCO(d){var w=this.e
if(w===$){this.a.toString
w=D.o.F(Date.now(),1e5)
this.e=w}return w},
a_(){var w,v=this
v.a2()
w=v.gCO(0)
v.a.toString
w=A.hg4(!1,w)
v.d=w
v.r=A.ago(w.d)},
t(){var w=this.ax
if(w!=null)w.a3(0)
this.a1()},
c7a(d,e){var w=this,v=w.ax
if(v!=null)v.a3(0)
w.m(new A.es7(w,d,e))
w.ax=C.cL(D.ju,new A.es8(w))},
aZj(){this.f.hP(46,0.48,B.US,-0.3)
this.m(new A.erX(this))},
c79(d){var w,v,u=this
if(d===0)return
w=u.d
w===$&&C.c()
v=w.cXv(u.x,d)
w=v.a
if(w)A.yE()
else A.fU(180,220,0.25,"square")
if(v.d==="shock"){C.fG()
u.m(new A.es1(u))
C.bO(D.mz,new A.es2(u),x.P)}u.m(new A.es3(u,d))
w=w&&!v.c
u.c7a(v.b,w)
w=u.d
if(w.w)$.aW.x1$.push(new A.es4(u))
else if(w.gcFT()&&!u.at){u.at=!0
$.aW.x1$.push(new A.es5(u))}},
cfK(){var w=null,v=this.c
v.toString
C.cf(w,w,!1,w,new A.es_(this),v,w,!0,!0,x.H)},
c76(){var w=null,v=this.c
v.toString
C.cf(w,w,!0,w,new A.erW(this),v,w,!0,!0,x.H)},
awA(){this.m(new A.erY(this))
this.aZj()},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.d
g===$&&C.c()
g=g.gcNj()
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
for(o=0;o<3;++o)p.push(new C.D(D.MK,new C.y(o<i.d.e?"\u2764\ufe0f":"\ud83d\udda4",h,D.A7,h,h,h,h,h,h,h,h,h),h))
v=A.XT(!1,h,i.f,new A.esf(i),h,s,u,r,h,new A.esg(),t,h,h,i.gc77(),i.gc78(),v,!1,h,C.a([C.B(p,D.m,h,D.e,D.P,0,h,h)],q),h)
u=i.d.c
u===$&&C.c()
t=C.S(u)
t=new C.cQ(new C.Z(u,new A.esh(),t.k("Z<1>")),new A.esi(),t.k("cQ<1,n>")).aG(0,"  \xb7  ")
u=C.d("Customer: "+(t.length===0?"All fixed!":t),h,2,D.a2,h,h,h,B.aRp,h,h,h)
t=C.a([],q)
for(n=0;n<10;++n){m=B.dpD[n]
s=i.x===m?D.aE.j(0.25):D.c.j(0.07)
r=new C.aQ(14,14)
p=i.x===m
l=p?D.aE:D.aZ
k=new C.ay(l,p?2:1,D.r,-1)
l=B.dvn.h(0,m)
p=C.X(l,i.x===m?D.aE:D.ae,h,h,h,19)
l=B.RK.h(0,m)
l.toString
j=i.x===m?D.aE:D.c
t.push(new C.D(E.tU,C.aB(h,C.p(h,new C.cb(D.aN,D.e,D.j,D.m,h,D.p,h,0,C.a([p,D.bo,new C.y(l,h,new C.F(!0,j,h,h,h,h,12.5,D.H,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h),h,h,h,h,h,h,h,h,h)],q),h),D.f,h,h,new C.o(s,h,new C.bI(k,k,k,k),new C.bk(r,r,r,r),h,h,D.n),h,h,h,h,D.fI,h,h,h),D.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new A.esj(i,m),h,h,h,h,h,h,!1,D.a4),h))}g=C.a([A.TO(D.aR,new A.esk(i,d),C.x(C.a([new C.bL(D.a3,h,h,u,h),D.N,new C.a7(h,52,C.cq(t,h,h,h,h,D.aN,!1),h)],q),D.m,h,D.e,D.P,0,D.p),v,""+g+"/"+w+" fixed","Service call",h)],q)
if(i.as)g.push(C.bU(0,C.e2(C.p(h,h,D.f,B.agX,h,h,h,h,h,h,h,h,h,h),!0,h),0,0,0))
return new C.an(D.a_,h,D.aa,D.t,g,h)},
cAs(d){return C.bT(E.lv,null,new A.esd(this),d,!0,!0,!0,D.jZ,!1,!1,x.H)},
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
$8$code$collaboratorEmails$isPrivate$localRole$members$name$ownerEmail$visibleChildrenPerParent(d,e,f,g,h,i,j,k){return this.gK().$8$code$collaboratorEmails$isPrivate$localRole$members$name$ownerEmail$visibleChildrenPerParent(d,e,f,g,h,i,j,k)},
$3$allowedExtensions$type$withData(d,e,f){return this.gK().$3$allowedExtensions$type$withData(d,e,f)},
$1$ownerEmail(d){return this.gK().$1$ownerEmail(d)},
$3$cancelOnError$onError(d,e,f){return this.gK().$3$cancelOnError$onError(d,e,f)},
$6$availableCameras$cameraDirection$isInitialized$isRunning$size$torchState(d,e,f,g,h,i){return this.gK().$6$availableCameras$cameraDirection$isInitialized$isRunning$size$torchState(d,e,f,g,h,i)},
$7$cameraDirection$error$isInitialized$isRunning$size$torchState$zoomScale(d,e,f,g,h,i,j){return this.gK().$7$cameraDirection$error$isInitialized$isRunning$size$torchState$zoomScale(d,e,f,g,h,i,j)},
$3$cancelOnError$onDone(d,e,f){return this.gK().$3$cancelOnError$onDone(d,e,f)},
$1$zoomScale(d){return this.gK().$1$zoomScale(d)},
$1$torchState(d){return this.gK().$1$torchState(d)},
$1$visibleChildrenPerParent(d){return this.gK().$1$visibleChildrenPerParent(d)},
$2$padding$viewPadding(d,e){return this.gK().$2$padding$viewPadding(d,e)},
$2$isClosing(d,e){return this.gK().$2$isClosing(d,e)},
$6$tag(d,e,f,g,h,i){return this.gK().$6$tag(d,e,f,g,h,i)},
$1$games(d){return this.gK().$1$games(d)},
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
$4$autofocus$child$focusNode$mouseCursor(d,e,f,g){return this.gK().$4$autofocus$child$focusNode$mouseCursor(d,e,f,g)},
$1$task(d){return this.gK().$1$task(d)},
$1$oldWidget(d){return this.gK().$1$oldWidget(d)},
$2$defaultColor(d,e){return this.gK().$2$defaultColor(d,e)},
$2$child$context(d,e){return this.gK().$2$child$context(d,e)},
$1$contentPadding(d){return this.gK().$1$contentPadding(d)},
$2$body$title(d,e){return this.gK().$2$body$title(d,e)},
$1$chapters(d){return this.gK().$1$chapters(d)},
$1$picture(d){return this.gK().$1$picture(d)},
$1$photo(d){return this.gK().$1$photo(d)},
$3$composing$selection$text(d,e,f){return this.gK().$3$composing$selection$text(d,e,f)},
$1$scrollbars(d){return this.gK().$1$scrollbars(d)},
$3$rect(d,e,f){return this.gK().$3$rect(d,e,f)},
$2$hitTest$paintTransform(d,e){return this.gK().$2$hitTest$paintTransform(d,e)},
$3$crossAxisPosition$mainAxisPosition(d,e,f){return this.gK().$3$crossAxisPosition$mainAxisPosition(d,e,f)},
$3$parentUsesSize(d,e,f){return this.gK().$3$parentUsesSize(d,e,f)},
$1$inherited(d){return this.gK().$1$inherited(d)},
$6$font$fontBold$fontBoldItalic$fontFallback$fontItalic$fontNormal(d,e,f,g,h,i){return this.gK().$6$font$fontBold$fontBoldItalic$fontFallback$fontItalic$fontNormal(d,e,f,g,h,i)},
$1$lineSpacing(d){return this.gK().$1$lineSpacing(d)},
$1$fontSize(d){return this.gK().$1$fontSize(d)},
$2$fontSize$fontWeight(d,e){return this.gK().$2$fontSize$fontWeight(d,e)},
$2$letterSpacing(d,e){return this.gK().$2$letterSpacing(d,e)},
$5$font$fontBold$fontBoldItalic$fontItalic$fontNormal(d,e,f,g,h){return this.gK().$5$font$fontBold$fontBoldItalic$fontItalic$fontNormal(d,e,f,g,h)},
$4$annotation$baseline$style$text(d,e,f,g){return this.gK().$4$annotation$baseline$style$text(d,e,f,g)},
$3$format$noAnimation$numChannels(d,e,f){return this.gK().$3$format$noAnimation$numChannels(d,e,f)},
$6(d,e,f,g,h,i){return this.gK().$6(d,e,f,g,h,i)},
$1$noPixels(d){return this.gK().$1$noPixels(d)},
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
$5$fileNameOverrides$sharePositionOrigin$subject$text(d,e,f,g,h){return this.gK().$5$fileNameOverrides$sharePositionOrigin$subject$text(d,e,f,g,h)},
$3$onTap$selected(d,e,f){return this.gK().$3$onTap$selected(d,e,f)},
$1$period(d){return this.gK().$1$period(d)},
$4$activeTrackColor$inactiveTrackColor$thumbColor$trackHeight(d,e,f,g){return this.gK().$4$activeTrackColor$inactiveTrackColor$thumbColor$trackHeight(d,e,f,g)},
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
$4$vol(d,e,f,g){return this.gK().$4$vol(d,e,f,g)},
$4$sweep(d,e,f,g){return this.gK().$4$sweep(d,e,f,g)},
$4$iconOnly(d,e,f,g){return this.gK().$4$iconOnly(d,e,f,g)},
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
$7$normal$twoSided(d,e,f,g,h,i,j){return this.gK().$7$normal$twoSided(d,e,f,g,h,i,j)},
$8$caps$inner$shine$sides(d,e,f,g,h,i,j,k){return this.gK().$8$caps$inner$shine$sides(d,e,f,g,h,i,j,k)},
$7$caps$shine$sides(d,e,f,g,h,i,j){return this.gK().$7$caps$shine$sides(d,e,f,g,h,i,j)},
$6$shine(d,e,f,g,h,i){return this.gK().$6$shine(d,e,f,g,h,i)},
$7$endCaps$joints$shine$sides(d,e,f,g,h,i,j){return this.gK().$7$endCaps$joints$shine$sides(d,e,f,g,h,i,j)},
$5$sides(d,e,f,g,h){return this.gK().$5$sides(d,e,f,g,h)},
$6$taped(d,e,f,g,h,i){return this.gK().$6$taped(d,e,f,g,h,i)},
$4$color(d,e,f,g){return this.gK().$4$color(d,e,f,g)},
$5$shine$yaw(d,e,f,g,h){return this.gK().$5$shine$yaw(d,e,f,g,h)},
$6$caps$sides(d,e,f,g,h,i){return this.gK().$6$caps$sides(d,e,f,g,h,i)},
$5$lat$lon(d,e,f,g,h){return this.gK().$5$lat$lon(d,e,f,g,h)},
$5$shine$sides(d,e,f,g,h){return this.gK().$5$shine$sides(d,e,f,g,h)},
$6$r1$sides(d,e,f,g,h,i){return this.gK().$6$r1$sides(d,e,f,g,h,i)},
$7$normal$shine(d,e,f,g,h,i,j){return this.gK().$7$normal$shine(d,e,f,g,h,i,j)},
$6$normal(d,e,f,g,h,i){return this.gK().$6$normal(d,e,f,g,h,i)},
$5$poster(d,e,f,g,h){return this.gK().$5$poster(d,e,f,g,h)},
$4$w(d,e,f,g){return this.gK().$4$w(d,e,f,g)},
$3$r(d,e,f){return this.gK().$3$r(d,e,f)},
$6$ends$shine$split(d,e,f,g,h,i){return this.gK().$6$ends$shine$split(d,e,f,g,h,i)},
$4$round(d,e,f,g){return this.gK().$4$round(d,e,f,g)},
$5$col$round(d,e,f,g,h){return this.gK().$5$col$round(d,e,f,g,h)},
$4$col(d,e,f,g){return this.gK().$4$col(d,e,f,g)},
$4$yaw(d,e,f,g){return this.gK().$4$yaw(d,e,f,g)},
$1$dist(d){return this.gK().$1$dist(d)},
$1$target(d){return this.gK().$1$target(d)},
$3$col(d,e,f){return this.gK().$3$col(d,e,f)},
$3$dist$pitch$target(d,e,f){return this.gK().$3$dist$pitch$target(d,e,f)},
$1$pixelRatio(d){return this.gK().$1$pixelRatio(d)},
$2$format$numChannels(d,e){return this.gK().$2$format$numChannels(d,e)},
$2$alpha$numChannels(d,e){return this.gK().$2$alpha$numChannels(d,e)},
$3$padding$size$viewPadding(d,e,f){return this.gK().$3$padding$size$viewPadding(d,e,f)},
$5$primary(d,e,f,g,h){return this.gK().$5$primary(d,e,f,g,h)},
$3$note(d,e,f){return this.gK().$3$note(d,e,f)},
$1$speed(d){return this.gK().$1$speed(d)},
$7$note(d,e,f,g,h,i,j){return this.gK().$7$note(d,e,f,g,h,i,j)},
$7$caps$r1$sides(d,e,f,g,h,i,j){return this.gK().$7$caps$r1$sides(d,e,f,g,h,i,j)},
$7$about$avatar$glow$onAnswer$onDecline$onLater$who(d,e,f,g,h,i,j){return this.gK().$7$about$avatar$glow$onAnswer$onDecline$onLater$who(d,e,f,g,h,i,j)},
$6$about$avatar$glow$onAnswer$onDecline$who(d,e,f,g,h,i){return this.gK().$6$about$avatar$glow$onAnswer$onDecline$who(d,e,f,g,h,i)},
$3$on(d,e,f){return this.gK().$3$on(d,e,f)},
$2$mine(d,e){return this.gK().$2$mine(d,e)},
$5$big(d,e,f,g,h){return this.gK().$5$big(d,e,f,g,h)},
$6$px(d,e,f,g,h,i){return this.gK().$6$px(d,e,f,g,h,i)},
$5$w(d,e,f,g,h){return this.gK().$5$w(d,e,f,g,h)},
$6$lines$w(d,e,f,g,h,i){return this.gK().$6$lines$w(d,e,f,g,h,i)},
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
$4$col$on(d,e,f,g){return this.gK().$4$col$on(d,e,f,g)},
$5$max$min(d,e,f,g,h){return this.gK().$5$max$min(d,e,f,g,h)},
$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){return this.gK().$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r)},
$2$f$r(d,e){return this.gK().$2$f$r(d,e)},
$1$radius(d){return this.gK().$1$radius(d)},
$4$gender$phone(d,e,f,g){return this.gK().$4$gender$phone(d,e,f,g)},
$3$hint$prefix(d,e,f){return this.gK().$3$hint$prefix(d,e,f)},
$3$helperText$prefixText(d,e,f){return this.gK().$3$helperText$prefixText(d,e,f)},
$1$verifyUrls(d){return this.gK().$1$verifyUrls(d)},
$2$wrapWidth(d,e){return this.gK().$2$wrapWidth(d,e)}}
A.xW.prototype={
gkB(d){return this.x}}
A.rF.prototype={}
A.a9J.prototype={}
A.i8.prototype={
aG1(d,e,f){var w=this
return d>w.a-f&&d<w.b+f&&e>w.c-f&&e<w.d+f}}
A.cpS.prototype={
c7b(d){return-this.a.gev(0)/2+d*4},
a4Q(d,e){var w,v,u=this.a
if(d<-u.gev(0)/2+6||d>u.gev(0)/2-6||e<6||e>u.ghn(0)-6)return!1
for(u=this.b,w=u.length,v=0;v<w;++v)if(u[v].aG1(d,e,9))return!1
return!0},
aZl(d,e,f){var w,v,u=e.a,t=f.a-u,s=e.b,r=f.b-s,q=Math.max(1,D.k.dk(Math.sqrt(Math.pow(t,2)+Math.pow(r,2))/2))
for(w=0;w<=q;++w){v=w/q
if(!this.a4Q(u+t*v,s+r*v))return!1}return!0},
aXY(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=a0.a,f=h.a,e=D.k.V((g+f.gev(0)/2)/4),d=h.c
d===$&&C.c()
w=D.o.E(e,0,d-1)
e=a0.b
v=D.k.V(e/4)
u=h.d
u===$&&C.c()
t=D.o.E(v,0,u-1)
for(s=0;s<16;++s){for(r=-s,q=r,p=null,o=1/0;q<=s;++q)for(n=w+q,v=Math.abs(q),m=r;m<=s;++m){if(Math.max(v,Math.abs(m))!==s)continue
l=t+m
if(n<0||l<0||n>=d||l>=u)continue
k=n*4
j=l*4
if(!h.a4Q(-f.gev(0)/2+k,j))continue
i=Math.pow(-f.gev(0)/2+k-g,2)+Math.pow(j-e,2)
if(i<o){p=new C.z(n,l)
o=i}}if(p!=null)return p}return null},
aon(b9,c0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5=this,b6=1e9,b7=b5.aXY(b9),b8=b5.aXY(c0)
if(b7==null||b8==null)return C.a([b9,c0],x.f)
w=b8.a
v=b5.c7b(w)
u=b8.b
t=new C.z(v,u*4)
if(b5.aZl(0,b9,t))return C.a([b9,t],x.f)
v=b7.a
s=b5.d
s===$&&C.c()
r=b7.b
q=x.S
p=C.ey([v*s+r],q)
o=C.T(q,q)
n=x.i
m=C.G([v*s+r,0],q,n)
l=C.G([v*s+r,b5.bSR(v,r,b8)],q,n)
k=w*s+u
v=b5.a
r=p.$ti
q=r.k("mk<1>")
r=r.c
i=0
for(;;){if(p.a!==0){h=i+1
n=i<6000
i=h}else n=!1
if(!n){j=!1
break}g=p.e
if(g==null)C.b8(C.bd("No elements"))
f=g.a
for(n=new C.mk(p,p.r,q),n.c=g;n.C();){e=n.d
d=e==null?r.a(e):e
e=l.h(0,d)
if(e==null)e=b6
a0=l.h(0,f)
if(e<(a0==null?b6:a0))f=d}if(f===k){j=!0
break}p.W(0,f)
a1=D.o.e9(f,s)
a2=D.o.F(f,s)
for(n=a2*4,e=a1*4,a3=-1;a3<=1;++a3)for(a0=a3===0,a4=!a0,a5=a1+a3,a6=a5*4,a7=a5-w,a8=-1;a8<=1;++a8){if(a0&&a8===0)continue
a9=a2+a8
b0=!0
if(a5>=0)if(a9>=0){b0=b5.c
b0===$&&C.c()
b0=a5>=b0||a9>=s||!b5.a4Q(-v.gev(0)/2+a6,a9*4)}if(b0)continue
b0=!1
if(a4)if(a8!==0)b0=!b5.a4Q(-v.gev(0)/2+a6,n)||!b5.a4Q(-v.gev(0)/2+e,a9*4)
if(b0)continue
b1=a5*s+a9
b0=m.h(0,f)
b0.toString
b2=b0+(a4&&a8!==0?1.4142:1)
b0=m.h(0,b1)
if(b2<(b0==null?b6:b0)){o.n(0,b1,f)
m.n(0,b1,b2)
l.n(0,b1,b2+Math.sqrt(Math.pow(a7,2)+Math.pow(a9-u,2)))
p.M(0,b1)}}}if(!j)return C.a([b9,t],x.f)
b3=C.a([k],x.t)
while(o.ai(0,D.d.gal(b3))){w=o.h(0,D.d.gal(b3))
w.toString
b3.push(w)}w=x.f
u=C.a([b9],w)
for(r=x.c5,q=new C.dx(b3,r),q=new C.bS(q,q.gL(0),r.k("bS<ak.E>")),r=r.k("ak.E");q.C();){n=q.d
if(n==null)n=r.a(n)
e=D.o.e9(n,s)
u.push(new C.z(-v.gev(0)/2+e*4,D.o.F(n,s)*4))}b4=C.a([D.d.gI(u)],w)
for(a5=0;a9=u.length-1,a5<a9;a5=a9){w=a5+1
for(;;){if(!(a9>w&&!b5.aZl(0,u[a5],u[a9])))break;--a9}b4.push(u[a9])}return b4},
bSR(d,e,f){return Math.sqrt(Math.pow(d-f.a,2)+Math.pow(e-f.b,2))}}
A.Au.prototype={}
A.bqX.prototype={
bz2(d,e,f,g,h,i,j,k,l,m,n,o){var w,v,u,t,s=this.b
if(s!=null)for(w=this.as,v=1;v<s.length;++v){u=v-1
t=Math.sqrt(Math.pow(s[v].a-s[u].a,2)+Math.pow(s[v].b-s[u].b,2))
w.push(t)
this.at+=t}}}
A.aVx.prototype={
aut(d){var w,v,u=d.gev(0),t=new A.bTm(d,u)
switch(d.c){case"living":w=t.$1(46)
return C.a([B.hbl,new A.Au(w.a,w.b,4,"Switching the ad on the big TV",!1,!0,!0,"ad")],x.h)
case"kitchen":return C.a([new A.Au(new C.z(-u/2+40,42),3.141592653589793,2.8,"Getting a drink from the fridge",!0,!1,!1,""),B.hbk],x.h)
case"bathroom":return B.dmn
case"bedroom":v=t.$1(44)
return C.a([new A.Au(v.a,v.b,3.4,"Switching the ad on the TV",!1,!0,!0,"ad")],x.h)
case"hall":if(!this.a)return B.ayz
return C.a([new A.Au(new C.z(-d.gev(0)/2+80,90),3.141592653589793,3,"Looking at the left video wall",!1,!1,!0,""),new A.Au(B.eoV,0,2.4,"Looking over the lounge and the logo carpet",!1,!1,!1,""),new A.Au(new C.z(d.gev(0)/2-80,90),3.141592653589793,3,"Looking at the right video wall",!1,!1,!0,"")],x.h)
default:return B.ayz}},
acp(a0,a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=e.b.d
d===$&&C.c()
w=d[a0]
v=new A.cpS(w,A.ict(w))
v.c=D.k.dk(w.gev(0)/4)+1
v.d=D.k.dk(w.ghn(0)/4)+1
u=A.hk7(w,a1)
t=u.a
s=u.c
d=e.d
r=d.length
q=a3.length===0?"Walking in":a3
d.push(A.bqY(a0,"",!1,q,-1,null,!1,!1,0.5,t.a,u.b,t.b))
for(q=e.aut(w),p=q.length,o=t,n=0;n<q.length;q.length===p||(0,C.M)(q),++n){m=q[n]
l=v.aon(o,m.a)
k=m.e
if(k)j=C.cU(m.d,"Having",0)
else j=!1
d.push(A.bqY(a0,"",j,"Walking",-1,l,!1,!1,0,0,0,0))
o=D.d.gal(l)
d.push(A.bqY(a0,m.w,k,m.d,-1,null,m.r,m.f,m.c,o.a,m.b,o.b))}if(a2!=null){i=A.hk7(w,a2)
h=i.c
l=v.aon(o,i.a)
g=e.aut(w).length!==0&&D.d.gal(e.aut(w)).e
d.push(A.bqY(a0,"",g,"Walking to the next room",-1,l,!1,!1,0,0,0,0))
o=D.d.gal(l)
d.push(A.bqY(a0,"",g,"Opening the door",h,null,!1,!1,1.8,o.a,e.bMr(w,h),o.b))}for(f=r;f<d.length;++f)d[f].ay=s},
aWK(d,e,f){return this.acp(d,e,f,"")},
bMr(d,e){var w,v=d.w[e].b
A:{if("left"===v){w=-1.5707963267948966
break A}if("right"===v){w=1.5707963267948966
break A}w=3.141592653589793
break A}return w},
aZk(){var w,v,u=this
if(u.a){u.acp(5,10,9,"Walking into the hall")
u.aZm()
return}u.acp(10,11,9,"Coming in through the front door")
u.aWK(9,10,5)
u.acp(5,9,0,"Walking down the hall")
for(w=0;w<8;++w){v=B.cVt[w]
u.aWK(v,5,w===7?null:5)}u.aZm()},
aZm(){var w,v,u,t,s,r,q,p,o=this,n=o.c,m=Math.min(1,n/120)
for(w=o.d,v=w.length,u=0,t=0,s=0;s<v;++s){r=w[s]
if(r.b==null)u+=r.f*=m
else t+=r.at}q=t/Math.max(4,n-u)
for(n=q<=0,p=0,s=0;s<v;++s){r=w[s]
if(r.b!=null)r.f=n?0.1:Math.max(0.05,r.at/q)
r.ax=p
p+=r.f}o.e!==$&&C.aP()
o.e=p},
baU(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g={},f=this.e
f===$&&C.c()
w=D.k.E(d,0,f-0.001)
f=this.d
g.a=D.d.gal(f)
for(v=f.length,u=0;u<v;++u){t=f[u]
s=t.ax
if(w>=s&&w<s+t.f){g.a=t
break}}f=g.a
v=f.f
r=v<=0?0:D.k.E((w-f.ax)/v,0,1)
f=g.a
if(f.b==null){q=r>0.5
v=f.a
s=f.y&&q
p=q&&f.z.length!==0?f.z+":"+v:""
o=f.Q
n=o>=0?r:0
return A.ati(!1,n,f.ay,p,f.w,0,f.r,o,0,!1,s,f.x,v,!1,!1,f.c,f.e,f.d)}v=new A.bTn(g)
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
i=f.a-D.d.gI(v).a
v=g.a.b
v.toString
v=D.d.gal(v)
f=g.a.b
f.toString
h=v.b-D.d.gI(f).b}f=g.a
v=l.a
s=l.b
p=Math.atan2(i,h)
o=g.a
return A.ati(!1,0,o.ay,"",o.w,0,o.r,-1,m/12,!1,!1,!1,f.a,!1,!0,v,p,s)}}
A.b8S.prototype={
Mk(d){var w=this.a
if(w!=null)this.ax=A.hrJ(w,this.CW)},
aIU(){var w,v,u,t,s,r,q=this
if(!q.KE(q.f,q.r))return!1
for(w=6;w<=320;w+=6){v=Math.max(8,D.k.V(w/6)*3)
for(u=0;u<v;++u){t=u*2*3.141592653589793/v
s=q.f+Math.cos(t)*w
r=q.r+Math.sin(t)*w
if(!q.KE(s,r)){q.f=s
q.r=r
q.at=null
return!0}}}return!1},
KE(d,e){var w,v,u,t,s=this
if(d<s.b||d>s.c||e<s.d||e>s.e)return!0
for(w=s.ax,v=w.length,u=s.ay,t=0;t<v;++t)if(w[t].aG1(d,e,u))return!0
return!1},
aL7(d,e,f,g){var w,v,u,t,s,r,q,p,o=this,n=Math.sqrt(e*e+f*f)
if(n<0.000001)return o.x=!1
w=e/n
v=f/n
u=o.ch
t=o.z?1.9:1
s=115*u*t*Math.min(1,n)*g
r=o.f+w*s
q=o.r+v*s
p=!0
if(o.KE(r,q))if(!o.KE(r,o.r))q=o.r
else{p=!o.KE(o.f,q)
if(p)r=o.f}if(p){o.f=r
o.r=q
o.w=Math.atan2(w,v)
o.y=o.y+s/12}return o.x=p},
cMW(d){var w,v=this,u=v.Q
if(u<=0&&v.as<=0)return
w=v.as
u+=w*d
v.Q=u
v.as=w-560*d
if(u<=0)v.as=v.Q=0},
Fw(d,e){var w,v,u,t=this,s=t.at
if(s==null)return!1
w=s.a-t.f
v=s.b-t.r
if(Math.sqrt(w*w+v*v)<4){t.at=null
return t.x=!1}u=t.aL7(0,w,v,e)
if(!u){t.at=null
t.x=!1}return u}}
A.ak6.prototype={}
A.apG.prototype={
U(){var w=x.N
return new A.bdp(C.T(w,w))}}
A.bdp.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=x.p,g=C.eD(C.a([C.aJ(i,i,i,i,B.bOR,i,i,i,new A.d4C(d),i,i,i,i,i,i)],h),i,i,!0,!0,E.lv,i,1,i,i,i,!1,i,!1,i,i,i,i,!0,i,i,i,i,i,B.fwU,i,i,i,1,i,!0),f=C.a([],h)
for(w=0;w<2;++w)f.push(C.j0(i,i,i,new C.y(D.d.gI(B.zf[w].b.split(" (")),i,i,i,i,i,i,i,i,i,i,i),i,new A.d4D(j,w),j.d===w,i,i,i,i))
f=C.bW(D.bD,f,D.bq,0,8)
v=j.e
v=C.bW(D.bD,C.a([C.j0(i,i,i,B.fM4,i,new A.d4E(j),!v,i,i,i,i),C.j0(i,i,i,B.fIh,i,new A.d4F(j),v,i,i,i,i)],h),D.bq,0,8)
u=B.zf[j.d]
u=C.a([f,D.N,v,D.R,C.d(u.b,i,i,i,i,i,i,D.de,i,i,i),D.av,C.d(u.c,i,i,i,i,i,i,Ab.DS,i,i,i),D.R],h)
for(f=B.zf[j.d].e,f=J.aV(f.ges(f)),v=x.N,t=x.e7,s=j.f,r=x.bP;f.C();){q=f.gR(f)
p=s.h(0,q)
o=C.a([],r)
for(n=B.zf[j.d].d,m=0;m<5;++m){l=n[m]
o.push(new C.eE(l,new C.y(l,i,D.oz,i,i,i,i,i,i,i,i,i),D.f1,i,t))}p=C.a([new C.y(q,i,B.fkj,i,i,i,i,i,i,i,i,i),C.SN(i,E.lv,B.fso,i,!1,!0,o,new A.d4G(j,q),i,i,p,v)],h)
if(!j.e&&s.h(0,q)!=null)p.push(new C.fd(new A.d4H(j,q),i))
p.push(D.am)
D.d.v(u,p)}u.push(C.bH(C.d(j.e?"Submit the test":"Check my wiring",i,i,i,i,i,i,i,i,i,i),new A.d4I(j),i))
f=j.r
if(f!=null){f=f.a
v=f===B.v0
t=v?"CORRECT: every lead follows the diagram.":A.fZm(f)+": not passed"
if(v)f=D.bm
else f=f===B.Th?D.bI:D.cs
h=C.a([D.R,C.d(t,i,i,i,i,i,i,C.l(i,i,f,i,i,i,i,i,i,i,i,16,i,i,D.u,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)],h)
for(f=j.r.b,v=f.length,m=0;m<f.length;f.length===v||(0,C.M)(f),++m){k=f[m]
h.push(new C.y(k.c+"\nRule: "+k.d+"\nFix: "+k.e+"\n",i,B.feT,i,i,i,i,i,i,i,i,i))}for(f=B.zf[j.d].f,m=0;m<2;++m)h.push(new C.y("\u2022 "+f[m],i,D.vd,i,i,i,i,i,i,i,i,i))
D.d.v(u,h)}return C.c5(g,E.B3,C.cq(u,i,D.bB,i,i,D.ag,!1),i,!1,!1,i,i)}}
A.Jx.prototype={
a4(){return"SafetyStatus."+this.b}}
A.FB.prototype={
a4(){return"TerminalRole."+this.b}}
A.FI.prototype={
a4(){return"WireFunction."+this.b}}
A.cwj.prototype={}
A.czU.prototype={}
A.a40.prototype={}
A.bL0.prototype={}
A.we.prototype={}
A.tg.prototype={}
A.b5u.prototype={}
A.aaR.prototype={}
A.aaS.prototype={}
A.v4.prototype={}
A.b4c.prototype={}
A.b7n.prototype={}
A.cwl.prototype={
bpK(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=C.a([],x.dH)
for(w=this.a,v=w.length,u=0;u<w.length;w.length===v||(0,C.M)(w),++u){t=w[u]
s=t.b
r=t.c
q=A.hod(s,r,t.d)
p=new C.Z(r,new A.cwm(),C.S(r).k("Z<1>")).gL(0)
r=s.d?1:0
o=s.b+s.c+r
n=o===0?0:D.o.E(D.k.V(p*100/o),0,100)
if(q.a!==B.v0)n=D.o.E(n,0,79)
i.push(new A.aaS(t.a,q,n))}w=C.a([],x.gl)
for(v=this.b,s=this.c,m=0;m<v.length;++m){r=v[m]
l=s.h(0,m)
w.push(new A.b4c(r,l==null?-1:l))}v=C.a([],x.t)
for(s=i.length,u=0;u<i.length;i.length===s||(0,C.M)(i),++u)v.push(i[u].c)
for(s=w.length,u=0;u<w.length;w.length===s||(0,C.M)(w),++u){k=w[u]
v.push(k.b===k.a.c?100:0)}j=v.length===0?0:D.k.V(D.d.f9(v,new A.cwn())/v.length)
return new A.b7n(i,w,j,D.d.d9(i,new A.cwo())&&j>=80)}}
A.Pz.prototype={}
A.a0W.prototype={
U(){var w=x.S
return new A.btF(C.T(w,w))}}
A.btF.prototype={
B(d){var w=null,v=this.e,u=C.aH(d,w,x.w).w
return C.bm(!0,new C.cT(new C.aY(0,1/0,0,u.a.b*0.9),C.cq(v==null?this.cmF():this.cq4(v),w,D.bQ,w,w,D.ag,!0),w),!0,!1,D.af,!0,!0)},
cmF(){var w,v,u,t,s,r,q=this,p=null,o=q.a,n=o.c.b,m=x.p
o=C.a([C.d("Test: "+o.d,p,p,p,p,p,p,D.de,p,p,p),D.av,B.fqD,D.R],m)
for(w=q.d,v=x.cE,u=0;u<n.length;u=t){t=u+1
s=C.a([new C.y(""+t+". "+n[u].a,p,D.ov,p,p,p,p,p,p,p,p,p)],m)
for(r=0;r<3;++r)s.push(new A.a9u(r,w.h(0,u),new A.f5c(q,u),new C.y(n[u].b[r],p,D.A5,p,p,p,p,p,p,p,p,p),!0,p,v))
s.push(D.av)
D.d.v(o,s)}o.push(D.N)
o.push(C.bH(B.fuV,new A.f5d(q),p))
return o},
cq4(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=d.d,g=h?D.bm:D.cs
h=h?"Passed":"Not passed"
w=x.p
h=C.a([C.d(h,i,i,i,i,i,i,C.l(i,i,g,i,i,i,i,i,i,i,i,22,i,i,D.u,i,i,!0,i,i,i,i,i,i,i,i),i,i,i),C.d("Score "+d.c+"%  (pass mark 80%)",i,i,i,i,i,i,D.Uj,i,i,i)],w)
v=d.a
if(D.d.b3(v,new A.f5e()))h.push(B.egV)
h.push(D.R)
for(u=v.length,t=0;t<v.length;v.length===u||(0,C.M)(v),++t){s=v[t]
r=s.b
q=r.a
p=A.h1W(q).j(0.1)
o=new C.aQ(12,12)
n=new C.ay(A.h1W(q).j(0.6),1,D.r,-1)
m=A.fZm(q)
q=A.h1W(q)
q=C.a([new C.y(s.a+": "+m+" ("+s.c+"%)",i,new C.F(!0,q,i,i,i,i,13.5,D.u,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i),i,i,i,i,i,i,i,i,i)],w)
r=r.b
if(r.length===0)q.push(B.fEC)
for(m=r.length,l=0;l<r.length;r.length===m||(0,C.M)(r),++l){k=r[l]
D.d.v(q,C.a([D.av,new C.y(A.fZm(k.b)+": "+k.c,i,B.f90,i,i,i,i,i,i,i,i,i),new C.y("Rule: "+k.d,i,L.a96,i,i,i,i,i,i,i,i,i),new C.y("Fix: "+k.e,i,B.feV,i,i,i,i,i,i,i,i,i)],w))}h.push(C.p(i,C.x(q,D.E,i,D.e,D.j,0,D.p),D.f,i,i,new C.o(p,i,new C.bI(n,n,n,n),new C.bk(o,o,o,o),i,i,D.n),i,i,i,D.ct,D.y2,i,i,i))}for(v=d.b,u=v.length,t=0;t<v.length;v.length===u||(0,C.M)(v),++t){j=v[t]
r=D.c.j(0.05)
q=new C.aQ(12,12)
p=j.a
o=p.c
m=j.b===o
n=new C.ay(m?D.bm:D.cs,1,D.r,-1)
m=m?"\u2705":"\u274c"
h.push(C.p(i,C.x(C.a([new C.y(m+" "+p.a,i,D.lN,i,i,i,i,i,i,i,i,i),new C.y("Correct answer: "+p.b[o],i,D.t4,i,i,i,i,i,i,i,i,i),new C.y(p.d,i,L.a96,i,i,i,i,i,i,i,i,i)],w),D.E,i,D.e,D.j,0,D.p),D.f,i,i,new C.o(r,i,new C.bI(n,n,n,n),new C.bk(q,q,q,q),i,i,D.n),i,i,i,D.ct,D.y2,i,i,i))}h.push(D.av)
h.push(C.bH(D.pv,new A.f5f(this),i))
return h}}
A.a4X.prototype={
hj(d){var w,v=this
if(v.c)return
v.c=!0
w=$.aW
w.toString
if(D.a.q(C.vm(C.b_(w).a,null),"Test"))v.d=C.dm(v.b,new A.bQZ(v))
else v.aZB()},
aZB(){$.eU.H3(new A.bQY(this))},
bR(d){var w
this.c=!1
w=this.d
if(w!=null)w.a3(0)
this.d=null}}
var z=a.updateTypes(["~()","R(nq)","n(n,fH)","R(ma)","R(a51)","r(r)","~(fk)","R(jy)","R(os)","R(XF)","ai<lP>(L)","~(H)","R(fH)","R(a9J)","R(a40)","R(Mj)","R(oh)","R(OP)","R(HY)","H(ma,ma)","aA<~>()","r(L,L)","R(r)","R(pO)","n(nq)","DO(Y)","~(ma)","~(x8,au,L)","r(L,L,L)","r(H)","IM(Y)","R(LR)","R(aaS)","R(we)","R(Ac)","~(t,au)","H(xc,xc)","R(z5)","O7(Y)","r(hl)","R(r5)","R(F4)","R(z0)","r(L)","R(SP)","FI(n)","we(we,we)","~(H,r,r,n,u)","~(H,ai<r>)","L(lz)","pO()","H(H,ma)","R(vX)","oh(L)","fK(r,r,r,r,H,L,L)","~(H{keepTour:R})","~(r,r,r,r)","H(Ac)","H(Ac,Ac)","v(rJ)","v(n,ai<rJ>)","n(ma)","v(xc)","r(ai<r>,H)","Xt()","~(r,L,L,L,~(x8,au,L){px:L})","Cu()","+(r,r)(H)","W1(Y)","ai<+(r,r)>()","ma?(n)","ai<fK>(L)","a6Q(Y)","~(r,r{note:n?})","ma?(r,r)","R(r,r)","r?(r,r)","L(r)","ai<r>(r,r[H])","~(ma,L,L,L,L,L{note:n?})","+(L,L,L,n,n)(OP,H)","~(aD?)","ai<lP>()","ai<lP>(ai<lP>)","L(oh)","~(r,r,r,L,L)","~(r,r,r,L,H)","~(r,r,r,r{poster:H})","r(L,L[L])","~(~(fk),r,r)","~(r,r,L,L,u)","r(H,H)","~(r,r,H{alongX:R})","~(ai<r>,u)","~(ai<r>)","~(ai<r>{col:u})","~(H,r,u{h:L,w:L})","hl(H)","~(H,ai<r>,u,L,n)","~(H,n,r,r,r,R)","R(X_)","L(As)","L(ma)","ai<r>(ai<r>)","~(n,ai<r>{r:L})","~(n,r,r)","~(nq,r,n)","~(n,r,r,H)","n(jy)","R(H)","H(As,As)","FB(n)","H(os)","~(H,r,r{col:u,round:R})","cW()","z5()","n(Mj)","~(n,Jx,n,n,n)","H(FI,FB)","aA<Mq?>()","R(xc)","a0W(Y)","~({done:R})"])
A.bZi.prototype={
$1(d){var w=this.a
w=w===0?d:A.vs(d,w)
return w.a9(0,this.b)},
$S:z+5}
A.bZj.prototype={
$1(d){var w=this.a
return w===0?d:A.vs(d,w)},
$S:z+5}
A.bZh.prototype={
$4(b5,b6,b7,b8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=this
for(w=b4.b,v=b7.a,u=b7.b,t=b7.c,s=b6.a,r=b6.b,q=b6.c,p=b8.a,o=b8.b,n=b8.c,m=1/w,l=v*m,k=u*m,j=t*m,i=p*m,h=o*m,m=n*m,g=b4.a,f=g.a,e=b4.c,d=x.o,a0=b4.d,a1=b4.e,a2=b4.f,a3=0;a3<w;++a3)for(a4=a3/w,a5=s+v*a4,a6=r+u*a4,a4=q+t*a4,a7=0;a7<w;++a7){a8=a7/w
a9=a5+p*a8
b0=a6+o*a8
a8=a4+n*a8
b1=a9+l
b2=b0+k
b3=a8+j
f.push(new A.lP(C.a([e.$1(new A.r(a9,b0,a8)),e.$1(new A.r(b1,b2,b3)),e.$1(new A.r(b1+i,b2+h,b3+m)),e.$1(new A.r(a9+i,b0+h,a8+m))],d),a0.$1(b5),a1,g.b,a2,g.d,!1,g.c,g.e,g.f,g.w))}},
$S:z+56}
A.bZk.prototype={
$1(d){var w=d*2*3.141592653589793/this.b
return this.a.aI(0,Math.cos(w)).a9(0,this.c.aI(0,Math.sin(w)))},
$S:z+29}
A.bZg.prototype={
$2(d,e){var w=3.141592653589793*d/this.a,v=6.283185307179586*e/this.b
return new A.r(Math.sin(w)*Math.cos(v),Math.cos(w),Math.sin(w)*Math.sin(v))},
$S:z+91}
A.bZl.prototype={
$1(d){var w=d*2*3.141592653589793/this.b
return this.a.aI(0,Math.cos(w)).a9(0,this.c.aI(0,Math.sin(w)))},
$S:z+29}
A.fTc.prototype={
$1(d){var w=d.b,v=this.a,u=d.c,t=this.b
return new A.r(d.a,w*v-u*t,w*t+u*v)},
$S:z+5}
A.fTa.prototype={
$1(d){var w=this.a
return w===0?d:A.vs(d,w)},
$S:z+5}
A.fTb.prototype={
$1(d){var w=this,v=w.b===0?d:w.c.$1(d)
return J.fUp(w.a.$1(v),w.d)},
$S:z+5}
A.fT9.prototype={
$1(d){var w=this.b===0?d:this.c.$1(d)
return this.a.$1(w)},
$S:z+5}
A.fSY.prototype={
$4(d,e,f,g){var w=-d
return 0.5*(2*e+(w+f)*this.a+(2*d-5*e+4*f-g)*this.b+(w+3*e-3*f+g)*this.c)},
$S:339}
A.bIb.prototype={
$1(d){var w=d.a,v=J.a4(w),u=C.jP(v.h(w,"ngmy_swipe_x3"))
$.aj1=u===!0
w=C.jP(v.h(w,"ngmy_swipe_y3"))
$.aj2=w!==!1},
$S:292}
A.bIc.prototype={
$1(d){},
$S:29}
A.bId.prototype={
$1(d){d.aq("Bool","ngmy_swipe_x3",$.aj1)
d.aq("Bool","ngmy_swipe_y3",$.aj2)},
$S:292}
A.bIe.prototype={
$1(d){},
$S:29}
A.bIg.prototype={
$1(d){var w=this,v=-d.c,u=d.b,t=w.a,s=w.b,r=v*t-u*s,q=d.a,p=w.c,o=w.d
return new A.r(q*p-r*o,u*t+v*s,q*o+r*p)},
$S:z+5}
A.bIf.prototype={
$1(d){var w=this,v=w.a
return v.d.a9(0,w.b.$1(new A.r(w.c*d,w.d*d,d-v.c)))},
$S:z+43}
A.bIa.prototype={
$1(d){var w=this,v=-d.c,u=d.b,t=w.a,s=w.b,r=v*t-u*s,q=d.a,p=w.c,o=w.d
return new A.r(q*p-r*o,u*t+v*s,q*o+r*p)},
$S:z+5}
A.bI9.prototype={
$1(d){var w=this,v=w.a
return v.d.a9(0,w.b.$1(new A.r(w.c*d,w.d*d,d-v.c)))},
$S:z+43}
A.cqT.prototype={
$1(d){var w=this,v=d.a,u=w.a,t=d.c,s=w.b,r=-v*s+t*u,q=d.b,p=w.c,o=w.d
return new A.r(v*u+t*s,q*p-r*o,-(q*o+r*p))},
$S:z+5}
A.cqU.prototype={
$1(d){var w=this.a.c,v=this.b.$1(d.aF(0,w.d))
return new A.r(v.a,v.b,v.c+w.c)},
$S:z+5}
A.cqM.prototype={
$1(d){return d.c>=1},
$S:z+22}
A.cqN.prototype={
$1(d){var w,v,u,t,s,r,q,p,o=this,n=!o.c||o.d>=o.e[0],m=o.f,l=o.b
if(n)A.hUf(d,m,o.r,l.gMB(0))
else{n=$.hvu()
C.HI(m)
w=n.a
v=w.get(m)
u=D.k.bm(l.gMB(0)*5)
t=v==null
if(t)s=o.a.b<10
else s=v.a!==u&&o.a.a<3
if(s){$.V()
r=new C.pI()
m.c.$3(C.z1(r,null),new C.au(m.d,m.e),l.gMB(0))
if(!t)v.b.t()
n.n(0,m,new A.cAE(u,r.nS()))
n=o.a
if(t)++n.b
else ++n.a}C.HI(m)
n=w.get(m)
q=n==null?null:n.b
if(q!=null){n=m.d
m=m.e
p=A.h1B(o.r,n,m)
if(p!=null){l=d.a
J.bq(l.save())
d.aw(0,p.a)
l.clipRect(C.bQ(new C.a5(0,0,n,0+m)),$.nc()[1],!0)
m=q.b
m===$&&C.c()
m=m.a
m===$&&C.c()
m=m.a
m.toString
l.drawPicture(m)
l.restore()}}else{$.V()
n=C.K()
n.r=D.cp.gp(0)
d.aJ(o.w,n)}}},
$S:698}
A.cqL.prototype={
$2(d,e){var w=this.a
return A.o_(A.o_(w[0],w[1],d),A.o_(w[3],w[2],d),e)},
$S:z+21}
A.cqO.prototype={
$1(d){return d.c<1},
$S:z+22}
A.cqP.prototype={
$1(d){return A.hUg(d,this.b,this.c,8,6,this.a.gMB(0))},
$S:698}
A.cqQ.prototype={
$2(d,e){return D.k.aL(e,d)},
$S:1766}
A.cqS.prototype={
$1(d){var w,v=d.b
if(v!==0){w=this.a.h(0,v)
w.toString
v=this.b.h(0,v)
v.toString
v=w/v}else v=d.r
return v},
$S:z+101}
A.cqR.prototype={
$2(d,e){var w,v,u=D.o.aL(d.a,e.a)
if(u!==0)return u
w=this.a
v=J.B7(w.$1(e),w.$1(d))
return v!==0?v:D.o.aL(d.c,e.c)},
$S:z+110}
A.eYc.prototype={
$1(d){var w=this.a,v=w.r,u=d.a
w.r=d
w.a.d.a6x(D.k.E((u-v.a)/1e6,0,0.1))
w.f.sp(0,u/1e6)},
$S:9}
A.eYb.prototype={
$1(d){if(x.ej.b(d))this.a.a.d.aoZ(1+d.gts().b*0.0012)},
$S:268}
A.eY8.prototype={
$1(d){var w=this.a
w.w=1
w.x=d.c},
$S:247}
A.eY9.prototype={
$1(d){var w,v,u,t,s,r=d.w,q=this.a
if(r!==q.x){q.x=r
q.w=d.d}if(r>=2){r=d.d
w=q.w/r
q.w=r
if(isFinite(w)&&w>0)q.a.d.aoZ(w)}else{r=q.a.d
q=d.a
v=$.aj1?-1:1
v=q.a*0.009*v
u=$.aj2?-1:1
r.ay=r.ax=null
v=r.a+=v
if(!r.Q){t=r.y
s=r.z
r.a=D.k.E(v,t-s,t+s)}r.b=D.k.E(r.b+-q.b*0.009*u,r.w,r.x)
r.aT()}},
$S:223}
A.eYa.prototype={
$1(d){var w=this.a,v=w.a.f
return v==null?null:v.$1(w.e.cUf(d.b))},
$S:66}
A.eY6.prototype={
$1(d){return this.a.y=d.b},
$S:23}
A.eY7.prototype={
$0(){var w,v=this.a,u=v.a.as
u.toString
v=v.y
w=this.b.gY(0)
return u.$2(v,w==null?D.ax:w)},
$S:0}
A.bS2.prototype={
$0(){var w=0,v=C.j(x.c),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j
var $async$$0=C.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return C.b($.r2().jJ(0,q.a),$async$$0)
case 7:p=e
m=q.b
l=x.N
o=new A.Mq(m,C.T(l,x.J),C.T(l,x.bB),C.a([],x.dQ),C.T(l,x.gN))
w=8
return C.b(o.Pj(p),$async$$0)
case 8:$.fVV.n(0,m,o)
u=o
r=[1]
w=5
break
r.push(6)
w=5
break
case 4:t=3
j=s.pop()
n=C.ab(j)
$.am.$1("Could not read the character "+q.b+": "+C.w(n))
u=null
r=[1]
w=5
break
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
$.fVU.W(0,q.b)
w=r.pop()
break
case 6:case 1:return C.h(u,v)
case 2:return C.f(s.at(-1),v)}})
return C.i($async$$0,v)},
$S:z+119}
A.bRV.prototype={
$1(d){return D.a.q(d,"hips")},
$S:3}
A.bRS.prototype={
$2(d,e){var w,v=Math.floor(d),u=Math.floor(e),t=this.b,s=t.a,r=Math.min(s-1,D.k.bm((d-v)*s))
v=t.b
w=(Math.min(v-1,D.k.bm((e-u)*v))*s+r)*4
s=this.a
t=t.c
s.c=s.c+t[w]
s.b=s.b+t[w+1]
s.a=s.a+t[w+2]},
$S:256}
A.bRR.prototype={
$1(d){return D.k.V(D.k.E(d,0,1)*255)},
$S:254}
A.bRX.prototype={
$2(d,e){var w,v,u,t,s,r=x.S,q=C.T(r,r)
r=this.b
w=new Int32Array(r)
for(v=this.c.a,u=this.a,t=0;t<r;++t){s=t*3
w[t]=q.c4(0,(D.k.bm((v[s]-u.c)/d)*1024+D.k.bm((v[s+1]-u.b)/d))*1024+D.k.bm((v[s+2]-u.a)/d),new A.bRY(q))}e[0]=q.a
return w},
$S:1768}
A.bRY.prototype={
$0(){return this.a.a},
$S:98}
A.bRZ.prototype={
$1(d){var w,v,u,t,s,r,q=C.aX(x.S)
for(w=this.a.e,v=w.length,u=0;u<v;u+=3){t=d[w[u]]
s=d[w[u+1]]
r=d[w[u+2]]
if(t===s||s===r||t===r)continue
q.M(0,A.h9g(t,s,r))}return q.a},
$S:1769}
A.bRW.prototype={
$2(d,e){var w,v,u,t=this.a,s=this.b.h(0,d)
s.toString
w=J.a4(e)
v=D.k.V(w.h(e,0)/w.h(e,3))
u=D.k.V(w.h(e,1)/w.h(e,3))
w=D.k.V(w.h(e,2)/w.h(e,3))
t.$flags&2&&C.aj(t)
t[s]=(v<<16|u<<8|w|4278190080)>>>0},
$S:1770}
A.bRT.prototype={
$0(){return new Float64Array(this.a*16)},
$S:700}
A.bRU.prototype={
$1(a1){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.b,j=l.c,i=l.d,h=l.e,g=a1*4,f=j[g],e=j[g+1],d=j[g+2],a0=j[g+3]
g=a1*3
w=i[g]
j=g+1
v=i[j]
u=g+2
t=i[u]
i=e*e
s=d*d
h.$flags&2&&C.aj(h)
h[0]=(1-2*(i+s))*w
r=f*e
q=d*a0
h[1]=2*(r+q)*w
p=f*d
o=e*a0
h[2]=2*(p-o)*w
h[3]=0
h[4]=2*(r-q)*v
q=f*f
h[5]=(1-2*(q+s))*v
s=e*d
r=f*a0
h[6]=2*(s+r)*v
h[7]=0
h[8]=2*(p+o)*t
h[9]=2*(s-r)*t
h[10]=(1-2*(q+i))*t
h[11]=0
h[12]=k[g]
h[13]=k[j]
h[14]=k[u]
h[15]=1
u=l.a
k=u.b
k===$&&C.c()
n=k[a1]
k=l.f
j=a1*16
if(n<0)D.om.hi(k,j,j+16,h)
else A.h9h(k,n*16,h,0,k,j)
k=u.f
k===$&&C.c()
k=k[a1]
j=k.length
m=0
for(;m<k.length;k.length===j||(0,C.M)(k),++m)l.$1(k[m])},
$S:31}
A.bS1.prototype={
$1(d){var w,v,u
for(w=this.a.z,w=new C.hB(w,w.r,w.e);w.C();){v=w.d
u=v.toLowerCase()
if(C.cU(u,d,0))return v}return null},
$S:319}
A.bS_.prototype={
$1(d){return!D.a.q(d.toLowerCase(),"pose")},
$S:3}
A.bS0.prototype={
$0(){var w=this.a.z
return new C.cu(w,C.a6(w).k("cu<1>")).gI(0)},
$S:22}
A.bS3.prototype={
$1(d){var w=this,v=w.c,u=d*3,t=w.a,s=w.d,r=(v[u]-t.b)*s,q=v[u+1],p=w.b.ay,o=(v[u+2]-t.a)*s
t=w.f
u=w.r
return new A.r(r*t+o*u+w.w,(q-p)*s+w.e,-r*u+o*t+w.x)},
$S:z+29}
A.frs.prototype={
$2(d,e){return D.k.V(d+(D.k.E(e,0,255)-d)*0.8)},
$S:1772}
A.bGw.prototype={
$1(d){return d.d+this.a.f*d.e},
$S:z+49}
A.bGv.prototype={
$1(d){return d.a===J.q(this.a,"template")},
$S:z+40}
A.fKb.prototype={
$6$lines$w(d,e,f,g,h,i){var w=null,v=C.fS("\u2026",w,h,w,C.cX(w,w,w,w,w,w,w,w,w,C.l(w,w,f,w,w,w,w,w,w,w,w,e,w,w,i,w,1.1,!0,w,w,w,w,w,w,w,w),d),D.a6,D.c5,w,D.dP,D.c4)
v.qR(g)
return v},
$4(d,e,f,g){return this.$6$lines$w(d,e,f,g,2,D.u)},
$5$w(d,e,f,g,h){return this.$6$lines$w(d,e,f,g,2,h)},
$S:1773}
A.fsS.prototype={
$1(d){var w=this.a
return A.vs(d,w.c).a9(0,new A.r(w.a,0,w.b))},
$S:z+5}
A.fsT.prototype={
$6$px(d,e,f,g,h,i){var w=new A.fsU(e,d),v=-f/2,u=g/2,t=f/2,s=-g/2
this.a.push(new A.fK(C.a([w.$2(v,u),w.$2(t,u),w.$2(t,s),w.$2(v,s)],x.o),0,h,i,i*g/f,30,this.b,0,!1))},
$5(d,e,f,g,h){return this.$6$px(d,e,f,g,h,260)},
$S:z+65}
A.fsU.prototype={
$2(d,e){return A.vs(new A.r(d,e,0),this.a).a9(0,this.b)},
$S:z+21}
A.fsL.prototype={
$3(d,e,f){return A.bAj(d,e,f,0)},
$S:24}
A.fsM.prototype={
$3(d,e,f){return A.bAj(d,e,f,3)},
$S:24}
A.fsN.prototype={
$3(d,e,f){return A.bAj(d,e,f,8)},
$S:24}
A.fsO.prototype={
$3(d,e,f){return A.bAj(d,e,f,9+this.a)},
$S:24}
A.fsP.prototype={
$3(d,e,f){return A.bAj(d,e,f,12+this.a)},
$S:24}
A.fsQ.prototype={
$3(d,e,f){return A.hrM(d,e,f,this.a,this.b)},
$S:24}
A.fsR.prototype={
$3(d,e,f){return A.hrM(d,e,f,this.a,this.b)},
$S:24}
A.ffe.prototype={
$4(d,e,f,g){var w=-d,v=this.a
return 0.5*(2*e+(w+f)*v+(2*d-5*e+4*f-g)*v*v+(w+3*e-3*f+g)*v*v*v)},
$S:339}
A.fiB.prototype={
$1(d){var w=this.a,v=J.a4(w)
return v.h(w,D.o.E(d,0,v.gL(w)-1))},
$S:z+67}
A.fry.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n=A.hnw(this.a),m=x.n,l=C.a([],m)
for(w=J.a4(n),v=0;v<w.gL(n)-1;v=u){u=v+1
t=w.h(n,u).a
s=w.h(n,v).a
l.push(Math.pow(Math.max(new A.r(t.a-s.a,t.b-s.b,t.c-s.c).guN(),250),0.75))}r=D.d.f9(l,new A.frx())
q=C.a([0],m)
for(m=l.length,p=0;p<l.length;l.length===m||(0,C.M)(l),++p){o=l[p]
q.push(D.d.gal(q)+30*o/r)}return q},
$S:1775}
A.frx.prototype={
$2(d,e){return d+e},
$S:78}
A.frv.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8=this.a,a9=B.duF.h(0,a8.a)
if(a9==null){w=C.a([],x.t)
v=a8.w.length
u=v===0
t=0
for(;;){if(!(t<(u?1:v)))break
w.push(t);++t}a9=new C.z(w,0)}s=Math.max(Math.max(a8.gaoH(),a8.gbda()),a8.gGH()*1.3)
w=a8.r
r=new A.r(a8.ga43(0),w+a8.gGH()/2,a8.ga44())
q=w+a8.gGH()
v=s*0.55
p=C.a([new C.z(new A.r(a8.ga43(0)+v,q+s*0.5,a8.ga44()+s*1.15),r)],x.dt)
for(u=a9.a,o=x.o,n=a8.w,m=a8.e,l=a8.f,k=a9.b,v=q+v,j=null,i=0;i<u.length;++i,j=a2){h=n[u[i]]
g=h.e
f=m*g
e=l*g
d=new A.r(h.a,w+h.d+e/2,h.b)
g=h.c
a0=Math.sin(g)
a1=Math.cos(g)
a2=new A.r(a0,0,a1)
a3=new A.frw(d,a2,f*1.5,new A.r(Math.cos(g),0,-Math.sin(g)),f,e)
a4=D.o.F(k+i,3)
A:{if(0===a4){g=C.a([a3.$3(1.8,0,1.1),a3.$3(1,-0.22,-0.35),a3.$3(0.9,0.3,-0.2)],o)
break A}if(1===a4){g=C.a([a3.$3(0.9,1.5,-0.25),a3.$3(1.05,0,0.05),a3.$3(0.85,-1.3,0.15)],o)
break A}g=C.a([a3.$3(1.3,0.2,-0.45),a3.$3(1.1,0,0.45),a3.$3(1.7,-0.3,1.3)],o)
break A}if(j!=null&&j.a*a0+j.c*a1<0.3){a0=D.d.gal(p).a
a1=D.d.gI(g)
p.push(new C.z(new A.r((a0.a+a1.a)*0.5+j.c*s*0.5,v,(a0.c+a1.c)*0.5-j.a*s*0.5),r))}for(a5=0;a5<3;++a5)p.push(new C.z(g[a5],d))}a6=new A.r(a8.ga43(0)-s*0.7,q+s*0.6,a8.ga44()-s)
if(j!=null){a7=D.d.gal(p).a.a9(0,a6).aI(0,0.5)
p.push(new C.z(new A.r(a7.a+j.c*s*0.5,v,a7.c-j.a*s*0.5),r))}p.push(new C.z(a6,r))
return p},
$S:z+69}
A.frw.prototype={
$3(d,e,f){var w=this
return w.a.a9(0,w.b.aI(0,w.c*d)).a9(0,w.d.aI(0,w.e*e)).a9(0,new A.r(0,w.f*f,0))},
$S:z+28}
A.fsD.prototype={
$1(d){var w=this.b,v=w*d.b,u=d.c,t=this.c
return this.a.a9(0,new A.r(Math.sin(v)*u*t.ged(0)+w*d.e*t.gaoH(),d.d*t.gGH(),Math.cos(v)*u*t.ged(0)))},
$S:z+39}
A.fsE.prototype={
$1(d){var w=this.c
return this.a.a9(0,new A.r(this.b*d.f*w.gaoH(),d.r*w.gGH(),0))},
$S:z+39}
A.fsF.prototype={
$1(d){var w=this.a
return w[D.o.E(d,0,w.length-1)]},
$S:z+97}
A.c2i.prototype={
$1(d){return d.a===this.a.d.a},
$S:z+40}
A.c2g.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new A.c2f())},
$S:28}
A.c2f.prototype={
$0(){},
$S:0}
A.c23.prototype={
$0(){var w=this.a
w.f=A.h2h(w.gzr(),w.d)
w.ab5()},
$S:0}
A.c29.prototype={
$0(){return this.a.x=this.b},
$S:0}
A.c2h.prototype={
$0(){var w=this.a
w.x=0
w.y=!1
w.z=""},
$S:0}
A.c26.prototype={
$0(){var w=this.a
w.x=-1
w.y=!1
w.z=this.b?"That was the 30 second drone shot. Press it again any time, or change the board and film it again.":""},
$S:0}
A.c25.prototype={
$0(){var w=this.a
return w.f=A.h2h(w.gzr(),w.d)},
$S:0}
A.c1E.prototype={
$0(){},
$S:0}
A.c24.prototype={
$0(){return this.a.z="That picture could not be opened."},
$S:0}
A.c28.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=C.aH(d,k,x.w).w,i=x.p,h=C.a([],i)
for(w=this.a,v=w.d,u=0;u<12;++u){t=B.a2D[u]
s=t.a
r=v.a===s
q=r?D.d8:D.cp
p=new C.aQ(16,16)
o=r?F.fv:D.bz
n=new C.ay(o,r?2:1,D.r,-1)
o=C.a([new C.y(t.b,k,D.nD,k,k,k,k,k,k,k,k,k),D.b0],i)
r=t.w.length
m=r===0
if((m?1:r)>1){l=new C.aQ(10,10)
o.push(C.p(k,new C.y(""+(m?1:r)+" boards",k,Y.aRF,k,k,k,k,k,k,k,k,k),D.f,k,k,new C.o(D.dY,k,k,new C.bk(l,l,l,l),k,k,D.n),k,k,k,k,D.yg,k,k,k))}if(v.a===s)o.push(B.egK)
h.push(C.aB(k,C.p(k,C.x(C.a([new C.cb(D.aN,D.e,D.j,D.m,k,D.p,k,0,o,k),D.am,new C.y(t.c,k,D.iY,k,k,k,k,D.a2,k,2,k,k),D.cK,new C.bA(1,D.bd,new C.y(t.d,k,B.fca,k,k,k,k,D.U0,k,k,k,k),k)],i),D.E,k,D.e,D.j,0,D.p),D.f,k,k,new C.o(q,k,new C.bI(n,n,n,n),new C.bk(p,p,p,p),k,k,D.n),k,k,k,k,B.bvn,k,k,k),D.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new A.c27(w,d,t),k,k,k,k,k,k,!1,D.a4))}return C.bm(!0,new C.D(B.bwK,C.x(C.a([B.fNn,D.av,B.fGo,D.ad,new C.cT(new C.aY(0,1/0,0,j.a.b*0.66),C.kK(1.05,h,2,10,10,k,k,!0),k)],i),D.E,k,D.e,D.P,0,D.p),k),!0,!1,D.af,!0,!0)},
$S:26}
A.c27.prototype={
$0(){C.a3(this.b,!1).N(null)
this.a.ctL(this.c.a)},
$S:0}
A.c22.prototype={
$0(){var w=this,v=w.b.d.b[w.a.a]
w.c.saX(0,v.b)
w.d.saX(0,v.c)
w.e.saX(0,v.d)},
$S:0}
A.c21.prototype={
$1(d){var w=this
return new C.dY(new A.c1Z(w.a,w.b,w.c,w.d,w.e,w.f),null)},
$S:19}
A.c1Z.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=this,o=null,n=p.b,m=p.a,l=n.d.b[m.a],k=new A.c2_(m,n),j=new A.c20(e),i=C.aH(d,o,x.w).w,h=x.p,g=C.a([B.fty,D.av,C.d(l.a?"Now it shows the NGMY logo, words and ads. Change anything and it becomes yours.":"This sign is your own.",o,o,o,o,o,o,H.v8,o,o,o)],h),f=n.gzr().w.length
if((f===0?1:f)>1){f=C.a([],h)
w=p.c
v=0
for(;;){u=n.gzr().w.length
if(!(v<(u===0?1:u)))break
u=m.a===v
t=u?D.d8:D.cp
s=new C.aQ(18,18)
r=new C.ay(u?F.fv:D.aZ,2,D.r,-1)
q=v+1
f.push(C.aB(o,C.p(o,new C.y("Sign "+q,o,D.lN,o,o,o,o,o,o,o,o,o),D.f,o,o,new C.o(t,o,new C.bI(r,r,r,r),new C.bk(s,s,s,s),o,o,D.n),o,o,o,o,D.lz,o,o,o),D.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new A.c1J(m,v,w,e),o,o,o,o,o,o,!1,D.a4))
v=q}D.d.v(g,C.a([D.R,B.fNs,D.am,C.bW(D.bD,f,D.bq,8,8)],h))}g.push(D.ad)
g.push(k.$3("Big words",p.d,new A.c1K(l)))
g.push(k.$3("Smaller words",p.e,new A.c1L(l)))
g.push(k.$3("Bottom line (web address)",p.f,new A.c1M(l)))
f=l.f!=null
w=f?"Your logo is on (change)":"Put your own logo (default: NGMY logo)"
g.push(j.$4(w,f,new A.c1N(m,n),new A.c1O(m,n,l)))
f=l.r!=null
w=f?"Your picture is on (change)":"Put your own picture"
g.push(j.$4(w,f,new A.c1P(m,n),new A.c1Q(m,n,l)))
g.push(D.av)
g.push(B.fHv)
g.push(D.am)
f=C.a([],h)
for(w=x.O,v=0;v<6;++v){u=B.a4m[v]
u=C.a([u.b,u.c],w)
t=new C.aQ(10,10)
r=new C.ay(l.e===v&&!l.a?F.fv:D.aZ,2,D.r,-1)
s=B.a4m[v]
f.push(C.aB(o,C.p(o,new C.ci(D.A,o,o,new C.y(s.a,o,new C.F(!0,s.d,o,o,o,o,11,D.H,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),o,o,o,o,o,o,o,o,o),o),D.f,o,o,new C.o(o,o,new C.bI(r,r,r,r),new C.bk(t,t,t,t),o,new C.a9(D.a3,D.a8,D.x,u,o,o),D.n),o,o,o,o,D.hE,o,o,74),D.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new A.c1R(m,n,l,v,e),o,o,o,o,o,o,!1,D.a4))}g.push(C.bW(D.bD,f,D.bq,8,8))
g.push(D.aA)
m=n.gzr().w.length
g.push(C.B(C.a([C.E(C.es(B.bTE,C.d((m===0?1:m)>1?"All signs back to the NGMY default":"Back to the NGMY default",o,o,o,o,o,o,B.fod,o,o,o),new A.c1S(n,l,p.c,e),o),1),D.as,C.bH(D.wT,new A.c1T(d),o)],h),D.m,o,D.e,D.j,0,o,o))
return new C.D(new C.Q(16,16,16,i.f.d+16),C.cd(C.x(g,D.E,o,D.e,D.P,0,D.p),D.t,o,D.y,o,o,o,o,D.ag),o)},
$S:106}
A.c2_.prototype={
$3(d,e,f){var w=null
return new C.D(D.d1,C.aN(w,D.X,!1,w,!0,D.t,w,C.aO(),e,w,w,w,w,w,2,C.bs(w,new C.b5(4,C.m(12),D.a0),w,w,w,w,w,w,!0,w,w,w,w,w,w,D.cp,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,D.Ui,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w),D.y,!0,w,!0,w,!1,w,D.ak,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,new A.c1U(this.a,this.b,f),w,w,w,!1,w,w,!1,w,!0,w,D.a9,w,w,w,w,w,w,w,w,w,w,w,D.df,!0,D.a6,w,D.ao,w,w,w,w),w)},
$S:1776}
A.c1U.prototype={
$1(d){this.c.$1(d)
this.b.Zk(this.a.a)},
$S:2}
A.c20.prototype={
$4(d,e,f,g){var w=null,v=this.a,u=e?D.eb:D.u8
u=C.a([C.E(C.es(C.X(u,e?D.bm:D.ae,w,w,w,w),C.d(d,w,w,w,w,w,w,D.df,w,w,w),new A.c1X(f,v),w),1)],x.p)
if(e)u.push(C.aJ(w,w,w,w,D.ru,w,w,w,new A.c1Y(g,v),w,w,w,w,w,w))
return new C.D(D.ct,C.B(u,D.m,w,D.e,D.j,0,w,w),w)},
$S:1777}
A.c1X.prototype={
$0(){var w=0,v=C.j(x.H),u=this
var $async$$0=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:u.a.$0()
w=2
return C.b(C.bO(D.nj,null,x.H),$async$$0)
case 2:u.b.$1(new A.c1W())
return C.h(null,v)}})
return C.i($async$$0,v)},
$S:1}
A.c1W.prototype={
$0(){},
$S:0}
A.c1Y.prototype={
$0(){this.a.$0()
this.b.$1(new A.c1V())},
$S:0}
A.c1V.prototype={
$0(){},
$S:0}
A.c1J.prototype={
$0(){var w=this
w.a.a=w.b
w.c.$0()
w.d.$1(new A.c1I())},
$S:0}
A.c1I.prototype={
$0(){},
$S:0}
A.c1K.prototype={
$1(d){return this.a.b=d},
$S:2}
A.c1L.prototype={
$1(d){return this.a.c=d},
$S:2}
A.c1M.prototype={
$1(d){return this.a.d=d},
$S:2}
A.c1N.prototype={
$0(){return this.b.IK(this.a.a,!0)},
$S:0}
A.c1O.prototype={
$0(){var w=this.c
w.w=w.f=null
this.b.Zk(this.a.a)},
$S:0}
A.c1P.prototype={
$0(){return this.b.IK(this.a.a,!1)},
$S:0}
A.c1Q.prototype={
$0(){var w=this.c
w.x=w.r=null
this.b.Zk(this.a.a)},
$S:0}
A.c1R.prototype={
$0(){var w=this
w.c.e=w.d
w.b.Zk(w.a.a)
w.e.$1(new A.c1H())},
$S:0}
A.c1H.prototype={
$0(){},
$S:0}
A.c1S.prototype={
$0(){var w=this,v=w.a,u=v.gzr().w.length
if((u===0?1:u)>1)v.d.cWc()
else w.b.bix()
w.c.$0()
v.m(new A.c1F())
v.IL()
w.d.$1(new A.c1G())},
$S:0}
A.c1F.prototype={
$0(){},
$S:0}
A.c1G.prototype={
$0(){},
$S:0}
A.c1T.prototype={
$0(){C.a3(this.a,!1).N(null)
return null},
$S:0}
A.c2c.prototype={
$0(){return C.a3(this.a,!1).ib()},
$S:0}
A.c2d.prototype={
$0(){var w=this.a
return w.m(new A.c2b(w))},
$S:0}
A.c2b.prototype={
$0(){return this.a.y=!1},
$S:0}
A.c2e.prototype={
$0(){var w=this.a
return w.m(new A.c2a(w))},
$S:0}
A.c2a.prototype={
$0(){return this.a.y=!0},
$S:0}
A.fv8.prototype={
$1(d){return d.a===this.a},
$S:z+37}
A.fv9.prototype={
$0(){return D.d.gI(B.QD)},
$S:z+115}
A.bKT.prototype={
$1(d){return d.d.q(0,this.a.b)},
$S:z+37}
A.bKV.prototype={
$2(d,e){var w=this.a,v=this.b
return D.k.aL(w.aa4(d.c,d.d,new C.z(v.c,v.d)),w.aa4(e.c,e.d,new C.z(v.c,v.d)))},
$S:z+19}
A.bKW.prototype={
$1(d){return d.f==null},
$S:z+120}
A.bKS.prototype={
$2(d,e){var w,v=d.w
if(v!==e.w)return v?-1:1
v=this.a
w=this.b
return D.k.aL(v.aYY(w,A.yG(d.c)),v.aYY(w,A.yG(e.c)))},
$S:z+36}
A.bKX.prototype={
$2(d,e){var w=D.o.aL(e.b,d.b)
return w!==0?w:D.o.aL(e.c,d.c)},
$S:1778}
A.bKU.prototype={
$2(d,e){var w,v,u=d.w
if(u!==e.w)return u?-1:1
u=this.a
w=this.b
v=this.c
return D.k.aL(u.aa4(w,v,A.yG(d.c)),u.aa4(w,v,A.yG(e.c)))},
$S:z+36}
A.bIY.prototype={
$2(d,e){return(d^D.k.V(e.c)*31+D.k.V(e.d))>>>0},
$S:z+51}
A.c_U.prototype={
$2(d,e){var w,v,u,t,s=null,r=this.a,q=r.c,p=q.d>0
if(p)w=0
else{w=q.c
w=w>0?(1-w/180)*0.5:q.a}v=r.e
if(p)p="\ud83d\udc1b"
else p=q.c>0?"\ud83d\ude34":"\u26a1"
u=x.p
w=C.a([A.fWt(v,p,w)],u)
p=q.e
if(p<0.3||q.f){t=q.f
if(t)p=0.2
t=t?"\ud83e\udd12":"\ud83d\udca7"
D.d.v(w,C.a([new C.a7(s,v/4,s,s),A.fWt(v*0.7,t,p)],u))}if(r.d)D.d.v(w,C.a([new C.a7(s,v/3,s,s),A.fWt(v,"\u26fd",q.b)],u))
return C.x(w,D.m,s,D.e,D.P,0,D.p)},
$S:421}
A.fys.prototype={
$4(d,e,f,g){var w=f+g/100
return new C.cw([d+100*Math.cos(w),e+100*Math.sin(w),-Math.sin(w),Math.cos(w)])},
$S:1779}
A.fcs.prototype={
$1(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this.b,h=A.L3(i,a0).a,g=h[0],f=h[1],e=h[2],d=h[3]
for(h=this.a,w=h.a,v=h.b,u=h.c,h=h.d,t=0;t<5;++t){s=B.cUK[t]
for(r=d*s,q=e*s,p=0;p<3;++p){o=B.d7P[p]
n=i.a==="bus"
m=n?120:95.94999999999999
l=n?33.54:31.45
k=g+q*m-d*o*l
m=n?120:95.94999999999999
n=n?33.54:31.45
j=f+r*m+e*o*n
if(k>w&&k<v&&j>u&&j<h)return!0}}return!1},
$S:113}
A.bJ_.prototype={
$1(d){return d<=0?0:Math.sqrt(220*d)},
$S:5}
A.fT7.prototype={
$7(d,e,f,g,h,i,j){return new A.fK(C.a([d,e,f,g],x.o),0,new A.fT8(h),i,j,6,2,0,!1)},
$S:z+54}
A.fT8.prototype={
$3(d,e,f){return A.nb(d,e,f,this.a+D.k.bm(f/7))},
$S:24}
A.fT5.prototype={
$3(d,e,f){var w=this.a,v=w.b
w=w.a
return A.vs(new A.r(d,e,f),this.b).a9(0,new A.r(v,0,w))},
$S:z+28}
A.fT6.prototype={
$2(d,e){var w=this
return A.vs(new A.r(d,e,0),w.a).a9(0,new A.r(w.b,w.c,w.d))},
$S:z+21}
A.fuH.prototype={
$8(d,e,f,g,h,i,j,k){var w=-g,v=new A.fuI(d+f*h+w*i,f,w,e+g*h+f*i,g,f),u=-j/2,t=-k/2,s=j/2,r=k/2
this.a.Gv(v.$2(u,t),v.$2(s,t),v.$2(s,r),v.$2(u,r),D.bO,B.e8)},
$S:1780}
A.fuI.prototype={
$2(d,e){var w=this
return new A.r(w.a+w.b*d+w.c*e,0.95,w.d+w.e*d+w.f*e)},
$S:z+21}
A.cy7.prototype={
$1(d){return d.d===this.a},
$S:z+34}
A.cy8.prototype={
$1(d){return d.r},
$S:z+57}
A.cy6.prototype={
$2(d,e){return D.k.aL(d.x,e.x)},
$S:z+58}
A.bIM.prototype={
$1(d){var w
if(d.r<0)w=d.e||d.c<60
else w=!1
return w},
$S:z+17}
A.bIT.prototype={
$3(d,e,f){var w=this.a
return A.nb(d,e,f,w.b.a+w.f+D.k.bm(f/7))},
$S:24}
A.bIU.prototype={
$3(d,e,f){var w=this.a
return A.nb(d,e,f,w.b.a+w.f+3+D.k.bm(f/7))},
$S:24}
A.bIV.prototype={
$3(d,e,f){var w=this.a
return A.nb(d,e,f,w.b.a+w.f+7+D.k.bm(f/7))},
$S:24}
A.bIW.prototype={
$3(d,e,f){return A.nb(d,e,f,this.a.b.a+2+D.k.bm(f/7))},
$S:24}
A.bIN.prototype={
$3(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=this.a,i=j.z
j=j.Q
w=e.a
v=e.b
u=new C.a5(0,0,0+w,0+v)
t=C.bz(u,D.iB)
s=$.V()
r=C.K()
r.r=D.dL.gp(0)
d.aD(t,r)
r=C.bz(u.ct(-6),D.kK)
t=C.K()
t.b=D.ac
t.c=5
t.r=D.bc.gp(0)
d.aD(r,t)
t=D.k.bm(f*3)
q=new C.aI(s.r,D.ai,k,k,C.a([],x.g))
p=w*0.2
o=v*0.5
n=v*0.3
s=p+n
r=n*0.7
m=p-n
if(j){q.D(new C.b0(p,o-n))
j=o+r
q.D(new C.ap(s,j))
q.D(new C.ap(m,j))
q.D(new C.bv())}else{q.D(new C.b0(p,o+n))
j=o-r
q.D(new C.ap(s,j))
q.D(new C.ap(m,j))
q.D(new C.bv())}j=C.K()
j.r=((t&1)===0?D.bc:D.f5).gp(0)
d.aJ(q,j)
j=i===1?"L":""+i
l=C.fS(k,k,k,k,C.cX(k,k,k,k,k,k,k,k,k,C.l(k,k,D.bI,k,k,k,k,k,k,k,k,v*0.78,k,k,D.u,k,k,!0,k,k,k,k,k,k,k,k),j),D.a6,D.c5,k,D.dP,D.c4)
l.eI()
j=l.b
i=j.c
j=j.a.c
l.a5(d,new C.t(w*0.62-i/2,v/2-j.gbc(j)/2))
return k},
$S:24}
A.bIO.prototype={
$3(d,e,f){return A.nb(d,e,f,1+D.k.bm(f/7))},
$S:24}
A.bIP.prototype={
$3(d,e,f){return A.nb(d,e,f,4+D.k.bm(f/7))},
$S:24}
A.bIQ.prototype={
$2(d,e){var w=this.a,v=C.S(d),u=new C.cQ(new C.Z(d,new A.bIR(w),v.k("Z<1>")),new A.bIS(w),v.k("cQ<1,H>")).cL(0,0,D.AC)
if(u===2)w="works but is NOT wired safely: open it and check every wire"
else w=u===1?"started: finish the wiring":e
return w},
$S:1781}
A.bIR.prototype={
$1(d){return!this.a.d[d]},
$S:34}
A.bIS.prototype={
$1(d){return this.a.e[d]},
$S:73}
A.bJA.prototype={
$1(d){return!d.f},
$S:z+17}
A.bJx.prototype={
$1(d){return d.b===this.a.a.a},
$S:z+18}
A.bJy.prototype={
$1(d){return d.b===this.a&&d.c===this.b},
$S:z+18}
A.bJz.prototype={
$1(d){return d.a<0},
$S:z+31}
A.bJE.prototype={
$1(d){var w,v,u,t
for(w=this.a.x,v=w.length,u=0;u<v;++u){t=w[u]
if(t.b===d)return t}return null},
$S:z+70}
A.bJC.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n=this,m=new A.bJD()
switch(d.a.a){case 0:w=n.a.$1("hospital")
if(w!=null)return new C.e9([w.c-34,w.d+52.5+26,3.141592653589793,"duty","\ud83e\ude7a On duty at the hospital"])
break
case 1:v=n.a
u=v.$1("cow")
t=u==null?v.$1("sheep"):u
if(t==null)t=v.$1("horse")
if(t!=null){v=t.c
u=v+34
s=t.d
r=s+22
return new C.e9([u,r,m.$4(u,r,v,s),"feed","\ud83c\udf3e Feeding the animals"])}break
case 2:q=n.a.$1("school")
if(q!=null)return new C.e9([q.c-24,q.d+52.5+26,3.141592653589793,"teach","\ud83d\udcda Teaching"])
break
case 3:t=n.a.$1("car")
if(t!=null)return new C.e9([t.c,t.d+34,3.141592653589793,"wash","\ud83e\uddfd Washing the car"])
break
case 4:q=n.a.$1("shop")
if(q!=null)return new C.e9([q.c+62,q.d+56,2.356194490192345,"cook","\ud83c\udf73 Cooking"])
break
case 5:p=n.a.$1("bench")
if(p!=null)return new C.e9([p.c,p.d+26,3.141592653589793,"rest","\ud83e\ude91 Resting"])
break
case 6:o=n.a.$1("flowers")
if(o!=null){v=o.c
u=v+30
s=o.d
r=s+28
return new C.e9([u,r,m.$4(u,r,v,s),"water","\ud83d\udca7 Watering the flowers"])}break}return new C.e9([-270+e*90,205,0,"",""])},
$S:z+80}
A.bJD.prototype={
$4(d,e,f,g){return Math.atan2(f-d,g-e)},
$S:339}
A.bJB.prototype={
$1(d){return d.b===this.a.a.a},
$S:z+18}
A.bJF.prototype={
$1(d){var w=d.c
return w==="bathroom"||w==="kitchen"},
$S:z+4}
A.dPd.prototype={
$0(){return this.b.d=this.a.a},
$S:0}
A.dPe.prototype={
$1(d){return this.a.c6w()},
$S:11}
A.dPq.prototype={
$0(){},
$S:0}
A.dPk.prototype={
$0(){return this.a.w=this.b},
$S:0}
A.dPl.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.dPj(w))},
$S:0}
A.dPj.prototype={
$0(){return this.a.w=null},
$S:0}
A.dP9.prototype={
$1(d){return B.aGB},
$S:z+30}
A.dPa.prototype={
$0(){},
$S:0}
A.dPt.prototype={
$1(d){return B.aGB},
$S:z+30}
A.dPu.prototype={
$0(){},
$S:0}
A.dPs.prototype={
$0(){var w=this.a
return w.m(new A.dPr(w,this.b))},
$S:0}
A.dPr.prototype={
$0(){return this.a.r=this.b},
$S:0}
A.dP8.prototype={
$0(){return this.a.abw(this.b)},
$S:0}
A.dPf.prototype={
$0(){return this.a.IV(this.b.bdW(this.c))},
$S:0}
A.dPg.prototype={
$0(){return this.a.IV(this.b.aKc(this.c))},
$S:0}
A.dPh.prototype={
$0(){return this.a.IV(this.b.aCS(this.c))},
$S:0}
A.dPi.prototype={
$0(){return this.a.ajH(this.b)},
$S:0}
A.dPc.prototype={
$1(d){var w,v,u=null,t=this.b,s=this.c,r=t.e[s],q=t.c
q===$&&C.c()
q=q[r.a].a
w=this.a
v=x.p
s=C.B(C.a([new A.acs(q.e,44,u),D.as,C.E(C.d("Bed "+(s+1)+": "+q.b,u,u,u,u,u,u,D.hx,u,u,u),1),w.PB("\ud83d\udc89 Treat",new A.dPb(w,t,s),D.cs)],v),D.m,u,D.e,D.j,0,u,u)
t=r.b
return C.x(C.a([s,D.N,w.Wf("Care",t,t<30?D.aw:D.aR),w.Wf("Getting better",r.c,D.bm)],v),D.E,u,D.e,D.j,0,D.p)},
$S:285}
A.dPb.prototype={
$0(){return this.a.IV(this.b.bj6(this.c))},
$S:0}
A.dPn.prototype={
$0(){return this.a.IV(this.b.aDn("food"))},
$S:0}
A.dPo.prototype={
$0(){return this.a.IV(this.b.aDn("medicine"))},
$S:0}
A.dPp.prototype={
$0(){var w=0,v=C.j(x.H),u,t=this,s,r
var $async$$0=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:w=3
return C.b(A.aT6(),$async$$0)
case 3:$.E0=null
s=t.a
if(s.c==null){w=1
break}r=s.f
if(r!=null)r.a3(0)
$.ajC=null
s.m(new A.dPm(s))
s.ZE()
case 1:return C.h(u,v)}})
return C.i($async$$0,v)},
$S:1}
A.dPm.prototype={
$0(){return this.a.d=null},
$S:0}
A.dPv.prototype={
$0(){return C.a3(this.a,!1).ib()},
$S:0}
A.dPw.prototype={
$1(d){return d.a>=0},
$S:z+31}
A.fwC.prototype={
$2(d,e){var w
A:{if("black"===d){w=e.a===25?"The black wire carries the power (hot). It never goes on the green ground screw. Hot goes to a BRASS screw.":"The black (hot) wire goes on a BRASS screw, not on the silver one. Silver is for white (neutral)."
break A}if("white"===d){w=e.a===25?"The white wire is the neutral. The green screw is only for the ground wire. Neutral goes to a SILVER screw.":"The white (neutral) wire goes on a SILVER screw, not on brass. Brass is for the black (hot) wire."
break A}w="The bare copper ground wire only goes on the GREEN screw. It keeps you safe if something goes wrong."
break A}return w},
$S:z+2}
A.fwD.prototype={
$2(d,e){return d==="ground"?y.t:"A black (hot) wire never goes on the green ground screw. The two black wires go on the two BRASS screws."},
$S:z+2}
A.fwE.prototype={
$2(d,e){var w
if(e.e)w="Those are the LOAD screws. They are covered with tape because power must come in on the LINE side. If you wire the LOAD side the GFCI will not protect you."
else A:{if("black"===d){w="The black (hot) wire goes on the BRASS LINE screw."
break A}if("white"===d){w="The white (neutral) wire goes on the SILVER LINE screw."
break A}w=y.t
break A}return w},
$S:z+2}
A.fwF.prototype={
$2(d,e){var w
A:{if("black"===d){w="The black (hot) wire joins the fixture BLACK wire. Not the white one, and never the green ground."
break A}if("white"===d){w="The white (neutral) wire joins the fixture WHITE wire. Not the black one, and never the green ground."
break A}w="The bare copper ground wire joins the fixture GREEN ground wire only."
break A}return w},
$S:z+2}
A.fwG.prototype={
$2(d,e){var w
A:{if("black"===d){w="The black (hot) wire joins the fan BLACK wire. Not the white one, and never the green ground."
break A}if("white"===d){w="The white (neutral) wire joins the fan WHITE wire. Not the black one, and never the green ground."
break A}w="The bare copper ground wire joins the fan GREEN ground wire only."
break A}return w},
$S:z+2}
A.fvi.prototype={
$1(d){return d.a===this.a},
$S:z+44}
A.fTI.prototype={
$1(d){return d.a},
$S:z+108}
A.fuu.prototype={
$1(d){var w
A:{if("hot"===d){w=B.UZ
break A}if("neutral"===d){w=B.V_
break A}if("ground"===d){w=B.V0
break A}w=B.aW6
break A}return w},
$S:z+45}
A.fuv.prototype={
$1(d){var w
A:{if("hot"===d){w=B.Jp
break A}if("neutral"===d){w=B.Jq
break A}if("ground"===d){w=B.Jr
break A}w=B.aQH
break A}return w},
$S:z+111}
A.fus.prototype={
$1(d){return d.a===this.a.a},
$S:z+12}
A.fut.prototype={
$1(d){return d.a===this.a.b},
$S:z+7}
A.fL_.prototype={
$1(d){return d.e==="hot"},
$S:z+7}
A.fL0.prototype={
$1(d){return d.e==="neutral"},
$S:z+7}
A.fvv.prototype={
$1(d){return D.d.b3(this.a.b,new A.fvw(d))},
$S:3}
A.fvw.prototype={
$1(d){return d.a===this.a},
$S:z+33}
A.fvs.prototype={
$2(d,e){return A.auU(e.b)>A.auU(d.b)?e:d},
$S:z+46}
A.fvt.prototype={
$1(d){return d.a===this.a.a},
$S:z+12}
A.fvu.prototype={
$1(d){return d.a===this.a.b},
$S:z+7}
A.fsJ.prototype={
$5(d,e,f,g,h){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=j.a
i.b=d
w=j.b
v=w.b
u=C.a6(v).k("cH<1,2>")
t=u.k("Z<J.E>")
s=C.C(new C.Z(new C.cH(v,u),new A.fsK(g),t),t.k("J.E"))
r=g==="ground"
q=r?B.vH:h
p=r?0.6:0.3
if(w.c>0){o=e.a9(0,B.h1y)
i.jf(A.ahP(C.a([e,e.a9(0,B.h_A),o],x.o),4),0.12,q,!1,p,8)
return}if(s.length!==0){n=A.aP7(j.c,D.d.gI(s).a,w)
w=A.o_(e,n,0.5)
v=n.a>0
m=w.a9(0,new A.r(v?0.5:-0.5,0.2,0.9))
w=e.a9(0,B.h5K)
if(j.d)v=0
else v=v?0.06:-0.06
l=A.ahP(C.a([e,w,m,n.a9(0,new A.r(v,0,0.08)),n],x.o),5)
k=D.d.ds(l,0,D.k.bm(l.length*0.8))
i.jf(k,0.12,q,!1,p,8)
if(!r)i.jf(D.d.fP(l,k.length-1),0.08639999999999999,B.vH,!1,0.6,8)}else{l=A.ahP(C.a([e,e.a9(0,B.fWR),A.o_(e,f,0.6),f],x.o),5)
k=r?l:D.d.ds(l,0,D.k.bm(l.length*0.86))
i.jf(k,0.12,q,!1,p,8)
if(!r)i.jf(D.d.fP(l,k.length-1),0.08639999999999999,B.vH,!1,0.6,8)}},
$S:z+47}
A.fsK.prototype={
$1(d){return d.b===this.a},
$S:702}
A.feb.prototype={
$2(d,e){var w,v=this.a
v.b=d
w=A.GY(e,0.9,6)
if(this.b)v.jf(w,0.2,B.XK,!1,0.35,10)
this.c.push(D.d.gal(w))},
$S:z+48}
A.fTH.prototype={
$1(d){return d.a===this.a},
$S:z+44}
A.ffv.prototype={
$6$taped(d,e,f,g,h,i){var w,v,u,t=this.a
t.e=0.9
t.b=d
w=this.b
v=w.a+e*0.75
u=w.b+f
w=w.c-0.45
t.aY(new A.r(v,u,w),B.h7b,h,0.7)
t.dQ(new A.r(v,u,w),new A.r(v+e*0.22,u,w),0.17,g,0.9,12)
t.aO(new A.r(v+e*0.23,u,w),B.h3F,B.ER)
if(i)t.aY(new A.r(v+e*0.05,u,w),B.h3w,D.bI,0.2)},
$5(d,e,f,g,h){return this.$6$taped(d,e,f,g,h,!1)},
$S:1783}
A.fwH.prototype={
$2(d,e){var w
if(d==="ground")w=y.t
else w=e.a===25?y.T:"A double-pole switch has two LINE screws on top (power in) and two LOAD screws on the bottom (power out to the heater). Each leg goes straight down the same side: left leg on the left screws, right leg on the right ones."
return w},
$S:z+2}
A.fwI.prototype={
$2(d,e){var w
if(d==="ground")w=y.t
else if(e.a===25)w=y.T
else w=d==="common"?"The COMMON wire does not go on a traveler screw. It goes on the odd-coloured COMMON screw.":"The travelers go on the two brass TRAVELER screws. The COMMON screw is for the black power wire only."
return w},
$S:z+2}
A.fwJ.prototype={
$2(d,e){var w
if(d==="ground")w=y.t
else w=e.a===25?"A traveler never goes on the green ground screw.":"A four-way has a pair of screws for the travelers coming IN (top) and a pair for the travelers going OUT (bottom). Do not mix the two pairs."
return w},
$S:z+2}
A.fwK.prototype={
$2(d,e){var w
A:{if("ground"===d){w=y.t
break A}if("neutral"===d){w="The white neutral wire goes on the silver NEUTRAL screw only."
break A}if(e.a===25)w=y.T
else w=d==="line"?"The wire from the panel is the LINE: it goes on the LINE screw.":"The wire to the light is the LOAD: it goes on the LOAD screw."
break A}return w},
$S:z+2}
A.fwL.prototype={
$2(d,e){var w
if(d==="ground")w=y.t
else if(e.a===25)w=y.T
else w=d==="feed"?"The feed goes on the FEED screw, where the two switches are joined.":"The wires to the lights go on the separate screws, one for each switch."
return w},
$S:z+2}
A.fwM.prototype={
$2(d,e){var w,v=y.T
A:{if("ground"===d){w=y.t
break A}if("neutral"===d){w="The white neutral wire goes on a SILVER screw."
break A}if("always"===d){w=e.a===25?v:"The always-hot wire goes on the BOTTOM brass screw. The top one is for the switched wire."
break A}w=e.a===25?v:"The switched hot wire (red) goes on the TOP brass screw."
break A}return w},
$S:z+2}
A.fwN.prototype={
$2(d,e){var w
A:{if("ground"===d){w=y.t
break A}if("neutral"===d){w=y.I
break A}w=e.a===25?y.T:"The black and red hot wires go on the two brass screws, X and Y. The silver W screw is for the neutral."
break A}return w},
$S:z+2}
A.fwO.prototype={
$2(d,e){return d==="neutral"?y.I:"The black and red hot wires go on the two brass screws, X and Y."},
$S:z+2}
A.fwP.prototype={
$2(d,e){var w
if(d==="ground")w=y.t
else w=e.a===25?y.T:"Both hot wires go on the two brass screws."
return w},
$S:z+2}
A.fwQ.prototype={
$2(d,e){var w
A:{if("isoground"===d){w="The isolated ground wire only goes on the green screw with the orange triangle."
break A}if("neutral"===d){w=y.c
break A}w=e.a===25?"A hot wire never goes on the ground screw.":y.u
break A}return w},
$S:z+2}
A.fsu.prototype={
$1(d){return d.a===this.a},
$S:z+23}
A.fsv.prototype={
$0(){return B.al4},
$S:z+50}
A.fTE.prototype={
$1(d){var w=d>60?62:99
return Math.min(d*0.5625,w)},
$S:5}
A.fTB.prototype={
$1(d){return d>40?30+d/2:58},
$S:5}
A.fTC.prototype={
$2(d,e){return D.k.aL(d.a,e.a)},
$S:1784}
A.fTD.prototype={
$2(d,e){var w=this.a
if(e-d>w.a-w.b){w.b=d
w.a=e}},
$S:256}
A.bSz.prototype={
$1(d){return d},
$S:124}
A.bSy.prototype={
$1(d){return B.eYg.q(0,d.b)},
$S:z+3}
A.bT9.prototype={
$1(d){return d.a==="Jobs"},
$S:z+52}
A.bTa.prototype={
$1(d){return new A.oh(!1,"back",d,5)},
$S:z+53}
A.bTb.prototype={
$4(d,e,f,g){return!D.d.b3(this.a.x,new A.bTc(d,f,e,g))},
$2(d,e){return this.$4(d,e,135,115)},
$3(d,e,f){return this.$4(d,e,f,115)},
$S:1785}
A.bTc.prototype={
$1(d){var w=this,v=d.b
return!D.d.q(B.a4g,v)&&!D.d.q(B.Hw,v)&&Math.abs(d.c-w.a)<w.b&&Math.abs(d.d-w.c)<w.d},
$S:z+3}
A.bTd.prototype={
$4(d,e,f,g){var w,v,u,t,s,r,q,p,o,n
for(w=this.a,v=w.length,u=f/2+90,t=g/2+20,s=0;s<v;++s){r=w[s]
if(Math.abs(r.c-d)<u){q=r.d
p=q>e?70:30
p=Math.abs(q-e)<t+p
q=p}else q=!1
if(q)return!1}for(w=this.b.x,v=w.length,s=0;s<w.length;w.length===v||(0,C.M)(w),++s){o=w[s]
u=o.b
if(D.d.q(B.Rg,u)||u==="roundabout"||u==="rug"||u==="flowers")continue
n=B.ht.h(0,u)
if(Math.abs(o.c-d)<(f+n.c)/2+130){u=o.d
t=n.d
q=u>e?150:110
q=Math.abs(u-e)<(g+t)/2+q
u=q}else u=!1
if(u)return!1}return!0},
$S:703}
A.bTh.prototype={
$4(d,e,f,g){var w,v,u,t,s,r,q,p,o,n,m,l,k,j
if(Math.abs(d)>1150||e<-600||e>1450)return!1
for(w=this.a.x,v=w.length,u=f/2+40,t=g/2+40,s=0;s<w.length;w.length===v||(0,C.M)(w),++s){r=w[s]
q=r.b
if(q==="rug"||q==="flowers"||q==="pond")continue
p=B.ht.h(0,q)
p.toString
o=(r.e&1)===1
n=o?p.d:p.c
m=o?p.c:p.d
if(Math.abs(r.c-d)<(f+n)/2+34&&Math.abs(r.d-e)<(g+m)/2+34)return!1
if(B.eYt.q(0,q)){l=r.e*3.141592653589793/2
q=r.c
o=Math.sin(l)
p=p.d/2+30
k=r.d
j=Math.cos(l)
if(Math.abs(q+o*p-d)<u&&Math.abs(k+j*p-e)<t)return!1}}return!0},
$S:703}
A.bTe.prototype={
$3(d,e,f){var w,v,u,t,s,r,q,p,o,n={},m=B.ht.h(0,d)
m.toString
w=n.a=0
v=this.a
u=new A.bTg(n,v,d)
for(t=f.length,s=this.b,r=m.c,m=m.d;w<t;++w){q=f[w]
p=q.a
o=q.b
if(n.a>=e)return
if(s.$4(p,o,r,m))u.$2(p,o)}v=v.x
o=-500
for(;;){if(!(o<1400&&n.a<e))break
p=-1100
for(;;){if(!(p<=1100&&n.a<e))break
A:{if(D.d.b3(v,new A.bTf(d,p,o)))break A
if(s.$4(p,o,r,m))u.$2(p,o)}p+=110}o+=100}},
$S:1787}
A.bTg.prototype={
$2(d,e){var w=this.b,v=this.c
w.dw(0,v,d,e)
if(v==="ubstation")w.dw(0,"car",d+96,e+6);++this.a.a},
$S:256}
A.bTf.prototype={
$1(d){return d.b===this.a&&Math.abs(d.c-this.b)<420&&Math.abs(d.d-this.c)<420},
$S:z+3}
A.bTl.prototype={
$1(d){return d.gkG()},
$S:z+4}
A.bTk.prototype={
$1(d){var w=d.c
return(w==="bathroom"||w==="kitchen")&&d.gjN()},
$S:z+4}
A.bTj.prototype={
$1(d){var w=d.c
return w==="bathroom"||w==="kitchen"},
$S:z+4}
A.bTi.prototype={
$1(d){return d.gkG()&&d.gjN()},
$S:z+4}
A.e9S.prototype={
$1(d){return!(d.gkG()&&d.gjN())},
$S:z+4}
A.e9P.prototype={
$1(d){var w,v=this.a.a.f
A:{if("wiring"===v){w=!d.gkG()
break A}if("plumbing"===v){w=!d.gjN()
break A}w=!(d.gkG()&&d.gjN())
break A}return w},
$S:z+4}
A.e9Q.prototype={
$1(d){var w,v,u,t,s,r,q=this.a,p=q.ghH()
if(Date.now()<0){if(q.c!=null)q.m(new A.e9O())
return}if(p==null||q.c==null||q.cx!=null||q.bZ>0)return
w=q.d
w===$&&C.c()
v=w.d
v===$&&C.c()
u=p.be6(w,v[w.e].a)
w=C.a([],x.s)
for(v=u.length,t=0;t<u.length;u.length===v||(0,C.M)(u),++t){s=u[t]
w.push(""+s.a+":"+D.k.V(s.c)+":"+D.k.V(s.d)+":"+s.x+":"+s.Q)}r=D.d.aG(w,"|")
if(q.aH==null&&r!==q.dt){q.dt=r
q.m(q.giR())}w=p.f
if(w.length!==0&&D.d.gI(w)!==q.fy){w=D.d.gI(w)
q.fy=w
q.iC(w)}},
$S:11}
A.e9O.prototype={
$0(){},
$S:0}
A.e9R.prototype={
$1(d){var w,v=this.a
if(v.c==null)return
w=v.d
w===$&&C.c()
if(w.a.length!==0)v.iC(v.c0s())
else{w=v.a.f
if(w.length!==0){A:{if("wiring"===w){w="This room needs wiring: press the Wiring button, or tap the red outlet or the light."
break A}if("plumbing"===w){w="This room needs plumbing: press the Plumbing button, or tap the toilet or the sink."
break A}w="Walk through the house and fix what the signs say is wrong."
break A}v.iC(w)}}},
$S:9}
A.e8C.prototype={
$0(){var w=this.a
w.ax=this.b
w.ay=this.c},
$S:0}
A.e8D.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.e8B(w))},
$S:0}
A.e8B.prototype={
$0(){return this.a.ax=null},
$S:0}
A.e8E.prototype={
$0(){var w=this.a
w.r=this.b
w.Q=0
w.as=-1
w.at=0
w.iB()},
$S:0}
A.e7a.prototype={
$0(){var w=this.a,v=w.d
v===$&&C.c()
v.e=this.b
w.Q=0
w.as=-1
w.at=0
w.ax=null
w.iB()},
$S:0}
A.e94.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.d
w===$&&C.c()
u=w[u.e]
u.fy=!u.fy
v.iB()},
$S:0}
A.e87.prototype={
$0(){return this.a.k3=!0},
$S:0}
A.e88.prototype={
$0(){var w=this.a,v=this.b
w.Q=v-100
w.at=v
w.iB()},
$S:0}
A.e89.prototype={
$0(){var w=this.a,v=this.b
w.as=v-300
w.at=v},
$S:0}
A.e8a.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&C.c()
w=t.d
w===$&&C.c()
v=this.b
if(!w[t.e].at.W(0,v)){t=u.d
w=t.d
w===$&&C.c()
w[t.e].at.M(0,v)}u.iB()},
$S:0}
A.e8b.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.d
w===$&&C.c()
w[u.e].p2=!0
v.iB()},
$S:0}
A.e6E.prototype={
$1(d){var w,v,u,t,s,r=this,q=null,p=C.d("Door to "+r.b,q,q,q,q,q,q,D.de,q,q,q),o=r.a,n=o.d
n===$&&C.c()
w=n.d
w===$&&C.c()
v=r.c
u=C.d(w[n.e].at.q(0,v)?"The door is open.":"The door is closed.",q,q,q,q,q,q,D.lM,q,q,q)
n=o.d
w=n.d
w===$&&C.c()
t=C.X(w[n.e].at.q(0,v)?B.bI9:B.bIl,q,q,q,q,q)
n=o.d
w=n.d
w===$&&C.c()
s=x.p
return C.bm(!0,new C.D(D.bQ,C.x(C.a([p,D.av,u,D.ad,C.bW(D.bD,C.a([C.dq(t,C.d(w[n.e].at.q(0,v)?"Close the door":"Open the door",q,q,q,q,q,q,q,q,q,q),new A.e6C(o,d,v),q),C.es(B.bOF,B.fwY,new A.e6D(o,d,v,r.d),q)],s),D.bq,10,10)],s),D.E,q,D.e,D.P,0,D.p),q),!0,!1,D.af,!0,!0)},
$S:26}
A.e6C.prototype={
$0(){var w,v,u
C.a3(this.b,!1).N(null)
w=this.a
v=this.c
w.m(new A.e6B(w,v))
w=w.d
w===$&&C.c()
u=w.d
u===$&&C.c()
A.fU(u[w.e].at.q(0,v)?700:450,70,0.25,"tri")},
$S:0}
A.e6B.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&C.c()
w=t.d
w===$&&C.c()
v=this.b
if(!w[t.e].at.W(0,v)){t=u.d
w=t.d
w===$&&C.c()
w[t.e].at.M(0,v)}u.iB()},
$S:0}
A.e6D.prototype={
$0(){var w,v,u=this
C.a3(u.b,!1).N(null)
w=u.a
v=u.c
w.m(new A.e6z(w,v))
A.fU(700,70,0.25,"tri")
C.bO(D.mz,new A.e6A(w,v,u.d),x.P)},
$S:0}
A.e6z.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.d
w===$&&C.c()
w[u.e].at.M(0,this.b)
v.iB()},
$S:0}
A.e6A.prototype={
$0(){var w=this.a
if(w.c==null)return
w.m(new A.e6y(w,this.b))
w.Au(this.c)},
$S:12}
A.e6y.prototype={
$0(){var w,v=this.a.d
v===$&&C.c()
w=v.d
w===$&&C.c()
return w[v.e].at.W(0,this.b)},
$S:0}
A.e6N.prototype={
$0(){return this.a.er=!0},
$S:0}
A.e6O.prototype={
$0(){var w=this.a
w.f_=!0
w.fw=!1
w.R8=!w.p4},
$S:0}
A.e6P.prototype={
$0(){var w=this.a
w.R8=w.f_=!1},
$S:0}
A.e80.prototype={
$2(d,e){var w=null,v=D.w.j(0.55),u=C.I(D.bU,D.r,1)
return C.aB(w,C.p(w,C.X(d,D.c,w,w,w,22),D.f,w,w,new C.o(v,w,u,w,w,w,D.a5),w,44,w,D.MI,w,w,w,44),D.y,!1,w,new A.e82(this.a),w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,e,w,w,w,w,w,w,!1,D.a4)},
$S:382}
A.e82.prototype={
$0(){var w=this.a
return w.m(new A.e81(w))},
$S:0}
A.e81.prototype={
$0(){return this.a.fw=!0},
$S:0}
A.e83.prototype={
$0(){var w=this.a
return w.m(new A.e8_(w))},
$S:0}
A.e8_.prototype={
$0(){return this.a.fw=!1},
$S:0}
A.e84.prototype={
$0(){var w=this.a
return w.p4?w.a2n():w.m(new A.e7Z(w))},
$S:0}
A.e7Z.prototype={
$0(){return this.a.R8=!0},
$S:0}
A.e85.prototype={
$0(){var w=this.a
return w.m(new A.e7Y(w))},
$S:0}
A.e7Y.prototype={
$0(){var w=this.a
return w.h3=!w.h3},
$S:0}
A.e86.prototype={
$0(){var w=this.a
return w.m(new A.e7X(w))},
$S:0}
A.e7X.prototype={
$0(){return this.a.ah=!0},
$S:0}
A.e6e.prototype={
$0(){var w=this.a
return w.m(new A.e6f(w))},
$S:0}
A.e6f.prototype={
$0(){return this.a.ah=!1},
$S:0}
A.e6Z.prototype={
$2(d,e){var w=null,v=D.w.j(0.55),u=C.I(D.bU,D.r,1)
return C.aB(w,C.p(w,C.X(d,D.c,w,w,w,20),D.f,w,w,new C.o(v,w,u,w,w,w,D.a5),w,40,w,D.it,w,w,w,40),D.y,!1,w,new A.e70(this.a),w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,e,w,w,w,w,w,w,!1,D.a4)},
$S:382}
A.e70.prototype={
$0(){var w=this.a
return w.m(new A.e7_(w))},
$S:0}
A.e7_.prototype={
$0(){return this.a.fw=!0},
$S:0}
A.e71.prototype={
$0(){var w=this.a
return w.m(new A.e6Y(w))},
$S:0}
A.e6Y.prototype={
$0(){return this.a.fw=!1},
$S:0}
A.e72.prototype={
$0(){var w,v,u=this.a
u.m(new A.e6X(u))
w=u.d
w===$&&C.c()
v=w.d
v===$&&C.c()
if(v[w.e].c!=="outside")u.xR()},
$S:0}
A.e6X.prototype={
$0(){return this.a.er=!1},
$S:0}
A.e73.prototype={
$0(){var w=this.a
return w.m(new A.e6W(w))},
$S:0}
A.e6W.prototype={
$0(){var w=this.a
return w.ab=w.ab===1?3:1},
$S:0}
A.e74.prototype={
$0(){var w=this.a
return w.m(new A.e6V(w))},
$S:0}
A.e6V.prototype={
$0(){var w=this.a
return w.h3=!w.h3},
$S:0}
A.e75.prototype={
$0(){var w=this.a
return w.m(new A.e6U(w))},
$S:0}
A.e6U.prototype={
$0(){return this.a.ah=!0},
$S:0}
A.e76.prototype={
$0(){var w=this.a
return w.p4?w.a2n():w.m(new A.e6T(w))},
$S:0}
A.e6T.prototype={
$0(){return this.a.R8=!0},
$S:0}
A.e92.prototype={
$2$mine(d,e){var w=null,v=e?D.a8:D.a3,u=e?D.bj:D.e5,t=C.m(18)
return new C.bL(v,w,w,C.p(w,C.d(d,w,w,w,w,w,w,B.aRG,w,w,w),D.f,w,B.abX,new C.o(u,w,w,t,w,w,D.n),w,w,w,D.ct,D.iQ,w,w,w),w)},
$1(d){return this.$2$mine(d,!1)},
$S:1788}
A.e93.prototype={
$1(d){var w=this,v=null,u=w.b,t=u.b,s=x.p,r=C.B(C.a([C.h7(u.e.c,v,C.d(t[0],v,v,v,v,v,v,D.iE,v,v,v),v,18),D.as,C.d(t,v,v,v,v,v,v,D.k1,v,v,v),D.b0,B.fIu],s),D.m,v,D.e,D.j,0,v,v),q=w.c,p=w.d,o=q.$1("Hi, it's "+t+". "+p.d),n=w.e,m="Please come to "+n,l=w.a
return C.bm(!0,new C.D(A7.ya,C.x(C.a([r,M.Mx,o,q.$1(p.c==="power"?m+" and fix the wiring. I can't stay in the dark.":m+" and fix the leak before it floods."),q.$1("I'll pay "+p.e+" points. Thank you!"),q.$2$mine("On my way!",!0),D.am,C.bW(D.bD,C.a([C.dq(B.bSK,C.d("Show me where "+t+" is",v,v,v,v,v,v,v,v,v,v),new A.e90(l,d,p,u),v),C.dq(B.bVC,C.d("Go and fix it ("+n+")",v,v,v,v,v,v,v,v,v,v),new A.e91(l,d,w.f,n),v)],s),D.bq,8,10)],s),D.E,v,D.e,D.P,0,D.p),v),!0,!1,D.af,!0,!0)},
$S:26}
A.e90.prototype={
$0(){var w,v,u,t,s=this
C.a3(s.b,!1).N(null)
w=s.a
v=w.fr
u=C.S(v).k("Z<1>")
t=C.C(new C.Z(v,new A.e9_(s.c),u),u.k("J.E"))
if(t.length!==0){v=w.d
v===$&&C.c()
u=v.d
u===$&&C.c()
v=u[v.e].c==="outside"}else v=!1
if(v){v=w.e
v===$&&C.c()
v.xb(160,new A.r(D.d.gI(t).c,30,D.d.gI(t).d))}w.ef(s.d.b+" is the one with the phone sign.",!0)},
$S:0}
A.e9_.prototype={
$1(d){return d.a===this.a.b},
$S:z+13}
A.e91.prototype={
$0(){var w,v=this
C.a3(v.b,!1).N(null)
w=v.a
if(w.aK)w.a2o()
w.er=!1
w.Au(v.c)
w.ef("You are in "+v.d+". Fix the problem with the Wiring or Plumbing button.",!0)},
$S:0}
A.e7o.prototype={
$0(){var w=this.a
w.x=!0
w.z=!1
w.r="ceiling"
w.iB()},
$S:0}
A.e5d.prototype={
$1(d){return d.c==="outside"},
$S:z+4}
A.e9v.prototype={
$1(d){return d.c==="outside"},
$S:z+4}
A.e5E.prototype={
$0(){},
$S:0}
A.e7j.prototype={
$0(){var w=this.a
return w.m(new A.e7i(w))},
$S:0}
A.e7i.prototype={
$0(){return this.a.id=!1},
$S:0}
A.e7k.prototype={
$0(){var w=this.a
return w.m(new A.e7h(w))},
$S:0}
A.e7h.prototype={
$0(){return this.a.id=!1},
$S:0}
A.e9w.prototype={
$1(d){var w=this.b
return d.d===this.a.apZ(w.f,w.r)},
$S:z+34}
A.e9u.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n=null,m=d.c,l=this.a,k=l==null,j=k?n:l.f
if(j==null)j=0
w=k?n:l.f
if(w==null)w=0
v=d.d
u=k?n:l.r
if(u==null)u=0
t=k?n:l.r
if(t==null)t=0
s=e.c
r=k?n:l.f
if(r==null)r=0
q=k?n:l.f
if(q==null)q=0
p=e.d
o=k?n:l.r
if(o==null)o=0
l=k?n:l.r
if(l==null)l=0
return D.k.aL((m-j)*(m-w)+(v-u)*(v-t),(s-r)*(s-q)+(p-o)*(p-l))},
$S:z+19}
A.e8I.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=d.a==="tank"?A.h2C(l.a.c5.b):d.e,i=l.b
i=i==null?k:i.r
w=(i==null?0:i)>=j
i=l.c
v=i?112:1/0
u=i?8:12
t=i?8:10
s=D.c.j(0.07)
r=C.m(16)
q=C.I(w?D.bI.j(0.5):D.bz,D.r,1)
p=d.b
o=d.c
n=d.d
if(i){i=C.d(p,k,k,k,k,k,k,D.wQ,k,k,k)
o=C.d(o,k,1,D.a2,k,k,k,D.JR,D.L,k,k)
n=C.d(n,k,2,D.a2,k,k,k,B.feD,D.L,k,k)
p=w?D.bI:D.bz
m=C.m(12)
i=C.x(C.a([i,D.bC,o,n,D.fM,C.p(k,C.d(""+j+" \u2b50",k,k,k,k,k,k,C.l(k,k,w?D.w:D.bU,k,k,k,k,k,k,k,k,13,k,k,D.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),D.f,k,k,new C.o(p,k,k,m,k,k,D.n),k,k,k,k,D.FK,k,k,k)],x.p),D.m,k,D.e,D.P,0,D.p)}else{i=C.d(p,k,k,k,k,k,k,D.nD,k,k,k)
p=x.p
n=C.E(C.x(C.a([C.d(o,k,k,k,k,k,k,D.ov,k,k,k),C.d(n,k,k,k,k,k,k,B.aRa,k,k,k)],p),D.E,k,D.e,D.j,0,D.p),1)
o=w?D.bI:D.bz
m=C.m(14)
i=C.B(C.a([i,D.as,n,C.p(k,C.d(""+j+" \u2b50",k,k,k,k,k,k,C.l(k,k,w?D.w:D.bU,k,k,k,k,k,k,k,k,k,k,k,D.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),D.f,k,k,new C.o(o,k,k,m,k,k,D.n),k,k,k,k,D.nm,k,k,k)],p),D.m,k,D.e,D.j,0,k,k)}return C.aB(k,C.p(k,i,D.f,k,k,new C.o(s,k,q,r,k,k,D.n),k,k,k,D.ct,new C.Q(u,t,u,t),k,k,v),D.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new A.e8J(l.a,d),k,k,k,k,k,k,!1,D.a4)},
$S:z+59}
A.e8J.prototype={
$0(){return this.a.aOH(this.b)},
$S:0}
A.e8H.prototype={
$2(d,e){var w,v,u,t=null,s=x.p,r=C.a([new C.D(B.buY,C.d(d,t,t,t,t,t,t,B.fkM,t,t,t),t)],s)
if(this.a){s=C.a([],s)
for(w=e.length,v=this.b,u=0;u<w;++u)s.push(v.$1(e[u]))
r.push(C.bW(D.bD,s,D.bq,0,8))}else for(s=e.length,w=this.b,u=0;u<s;++u)r.push(w.$1(e[u]))
return C.x(r,D.E,t,D.e,D.P,0,D.p)},
$S:z+60}
A.e8G.prototype={
$0(){var w=this.a
return w.m(new A.e8F(w))},
$S:0}
A.e8F.prototype={
$0(){return this.a.k2=!1},
$S:0}
A.e7I.prototype={
$2(d,e){var w=null,v=e.j(0.2),u=C.m(10)
return C.p(w,C.d(d,w,w,w,w,w,w,C.l(w,w,e,w,w,w,w,w,w,w,w,11.5,w,w,D.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),D.f,w,w,new C.o(v,w,w,u,w,w,D.n),w,w,w,w,D.fJ,w,w,w)},
$S:1789}
A.e7J.prototype={
$1(d){return B.ht.h(0,d.b).a},
$S:z+61}
A.e7F.prototype={
$1(d){var w,v,u,t,s=this,r=null,q=d.c,p=A.yG(q),o=D.k.V(Math.sqrt(Math.pow(p.a-s.b,2)+Math.pow(p.b-s.c,2))/10),n=D.c.j(0.07),m=C.m(16),l=C.I(D.bz,D.r,1),k=d.b,j=C.d(A.KZ(k).b,r,r,r,r,r,r,D.nD,r,r,r),i=s.d
k=C.d(d.w?"\ud83d\ude91 "+A.KZ(k).c+": "+C.w(i.$1(q))+" \u2192 "+C.w(i.$1(d.d))+" (somebody was run over)":A.KZ(k).c+": "+C.w(i.$1(q))+" \u2192 a house",r,r,r,r,r,r,B.aSB,r,r,r)
w=s.e
v=w.$2(""+d.e+" points",D.bI)
u=w.$2(""+o+" m to the shop",D.aR)
p=A.yG(q)
t=A.yG(d.d)
q=x.p
w=C.E(C.x(C.a([k,D.cK,C.bW(D.bD,C.a([v,u,w.$2(""+D.k.V(Math.sqrt(Math.pow(p.a-t.a,2)+Math.pow(p.b-t.b,2))/10)+" m trip",D.bm)],q),D.bq,0,6)],q),D.E,r,D.e,D.j,0,D.p),1)
k=s.f!=null
i=k?r:new A.e7H(s.a,s.r,d,i)
v=k?D.bz:D.bI
u=C.m(14)
return C.p(r,C.B(C.a([j,D.as,w,D.ab,C.aB(r,C.p(r,C.d("Take",r,r,r,r,r,r,C.l(r,r,k?D.bU:D.w,r,r,r,r,r,r,r,r,r,r,r,D.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),D.f,r,r,new C.o(v,r,r,u,r,r,D.n),r,r,r,r,D.iQ,r,r,r),D.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,i,r,r,r,r,r,r,!1,D.a4)],q),D.m,r,D.e,D.j,0,r,r),D.f,r,r,new C.o(n,r,l,m,r,r,D.n),r,r,r,D.ct,D.bT,r,r,r)},
$S:z+62}
A.e7H.prototype={
$0(){var w=this,v=w.c,u=w.a
if(w.b.cWE(0,v,u.CW.gik()/1000)){u.m(new A.e7G(u))
if(!u.aK)u.a2k()
u.ef(A.KZ(v.b).b+" Order taken: go to the "+w.d.$1(v.c).toLowerCase()+" (follow the yellow line), then to the house.",!0)}},
$S:0}
A.e7G.prototype={
$0(){return this.a.go=!1},
$S:0}
A.e7D.prototype={
$0(){var w=this.a
return w.m(new A.e7C(w))},
$S:0}
A.e7C.prototype={
$0(){return this.a.go=!1},
$S:0}
A.e7E.prototype={
$0(){var w=this.a
return w.m(new A.e7B(w,this.b))},
$S:0}
A.e7B.prototype={
$0(){this.b.a3(0)
this.a.ef("Order given back.",!0)},
$S:0}
A.e77.prototype={
$0(){return this.a.k3=!1},
$S:0}
A.e78.prototype={
$0(){return this.a.k3=!1},
$S:0}
A.e8y.prototype={
$0(){return A.fU(1175,220,0.3,"tri")},
$S:0}
A.e6L.prototype={
$0(){var w=this.a
return w.m(new A.e6K(w))},
$S:0}
A.e6K.prototype={
$0(){return this.a.k3=!1},
$S:0}
A.e6M.prototype={
$0(){return this.a.bSz(this.b)},
$S:0}
A.e6x.prototype={
$4(d,e,f,g){var w=-d,v=this.a
return 0.5*(2*e+(w+f)*v+(2*d-5*e+4*f-g)*v*v+(w+3*e-3*f+g)*v*v*v)},
$S:339}
A.e7p.prototype={
$1(d){return d.c==="outside"},
$S:z+4}
A.e8K.prototype={
$0(){var w=this.a
w.R8=!1
w.y1=null
w.p4=!0
w.rx=this.b
w.ry=-1},
$S:0}
A.e6J.prototype={
$2(d,e){return d[D.o.E(e,0,d.length-1)]},
$S:z+63}
A.e8V.prototype={
$0(){var w=this.a
w.p4=!1
w.aH=null
w.iB()},
$S:0}
A.e6H.prototype={
$4(d,e,f,g){var w=null,v=D.c.j(0.07),u=C.m(16),t=C.I(D.bz,D.r,1),s=x.p
return C.aB(w,C.p(w,C.B(C.a([C.d(d,w,w,w,w,w,w,D.nD,w,w,w),D.ba,C.E(C.x(C.a([C.d(e,w,w,w,w,w,w,D.hx,w,w,w),C.d(f,w,w,w,w,w,w,D.hj,w,w,w)],s),D.E,w,D.e,D.j,0,D.p),1),A0.Oz],s),D.m,w,D.e,D.j,0,w,w),D.f,w,w,new C.o(v,w,t,u,w,w,D.n),w,w,w,D.jN,D.bh,w,w,w),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new A.e6I(this.a,g),w,w,w,w,w,w,!1,D.a4)},
$S:1790}
A.e6I.prototype={
$0(){return this.a.cx8(this.b)},
$S:0}
A.e6G.prototype={
$0(){var w=this.a
return w.m(new A.e6F(w))},
$S:0}
A.e6F.prototype={
$0(){return this.a.R8=!1},
$S:0}
A.e7e.prototype={
$1(d){return d.c==="outside"},
$S:z+4}
A.e8U.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&C.c()
w=t[this.b]
v=u.at.h(0,w.a)
if(v==null||!A.fZk(w.b,v.a))return 0
return v.b.c<2?1:2},
$S:98}
A.e9J.prototype={
$1(d){return d},
$S:124}
A.e6g.prototype={
$1(d){return d},
$S:124}
A.e7b.prototype={
$0(){var w=A.cpT(0,null,!1,this.a.a*13+5+this.b.f,!0)
w.alN()
return w},
$S:z+64}
A.e7c.prototype={
$1(d){return A.cgt(!1,this.a,!1)},
$S:z+38}
A.e7d.prototype={
$1(d){return d.length!==0},
$S:3}
A.e6R.prototype={
$0(){return new A.Cu(C.T(x.S,x.N))},
$S:z+66}
A.e6S.prototype={
$1(d){return new A.DO("light",this.a,null)},
$S:z+25}
A.e7r.prototype={
$1(d){return d.c==="outside"},
$S:z+4}
A.e7s.prototype={
$0(){return this.a.y1=this.b},
$S:0}
A.e5L.prototype={
$1(d){var w=null
return new C.bL(D.a3,w,w,C.p(w,C.d(d,w,w,w,w,w,w,B.aRG,w,w,w),D.f,w,B.abX,B.b3z,w,w,w,D.ct,D.iQ,w,w,w),w)},
$S:151}
A.e5K.prototype={
$5$primary(d,e,f,g,h){var w=null,v=h?f:f.j(0.14),u=C.m(16),t=C.I(f,D.r,1),s=C.X(d,h?D.w:f,w,w,w,21)
return C.aB(w,C.p(w,C.B(C.a([s,D.ab,C.d(e,w,w,w,w,w,w,C.l(w,w,h?D.w:D.c,w,w,w,w,w,w,w,w,14.5,w,w,D.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),D.m,w,D.b8,D.j,0,w,w),D.f,w,w,new C.o(v,w,t,u,w,w,D.n),w,48,w,D.jN,w,w,w,w),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,!1,D.a4)},
$4(d,e,f,g){return this.$5$primary(d,e,f,g,!1)},
$S:1791}
A.e5M.prototype={
$0(){var w=this.a
return w.m(new A.e5J(w))},
$S:0}
A.e5J.prototype={
$0(){return this.a.y1=null},
$S:0}
A.e5N.prototype={
$0(){var w,v,u=this.a
u.m(new A.e5I(u))
if(!u.aK)u.a2k()
w=u.aB
if(w!=null){v=u.e
v===$&&C.c()
v.apo(220,0.5,new A.r(w.f,30,w.r))}u.ef("Follow the yellow line on the ground to get there.",!0)},
$S:0}
A.e5I.prototype={
$0(){return this.a.y1=null},
$S:0}
A.e5O.prototype={
$0(){var w,v=this.a
v.m(new A.e5H(v))
if(v.cI==null){v.cI=this.b
v.hK=0}w=this.b
v.S6(w.a)
w=w.c
if(w==="power")w="You are at the house. Walk in and onto the red mat at the breaker panel."
else w=w==="sick"?"You are at the hospital. Walk in and onto the desk.":y.Y
v.ef(w,!0)},
$S:0}
A.e5H.prototype={
$0(){return this.a.y1=null},
$S:0}
A.e5P.prototype={
$0(){var w=this.a
w.m(new A.e5G(w,this.b))
w.ef("Saved on your waiting list.",!0)},
$S:0}
A.e5G.prototype={
$0(){var w,v=this.a
v.y1=null
w=this.b
if(v.cI===w)v.cI=null
v=v.eG
if(!D.d.q(v,w))v.push(w)},
$S:0}
A.e5Q.prototype={
$0(){var w=this.a
return w.m(new A.e5F(w))},
$S:0}
A.e5F.prototype={
$0(){return this.a.y2=!1},
$S:0}
A.e6c.prototype={
$1(d){var w=null
return C.bx(D.qP,new C.a7(w,C.aH(d,w,x.w).w.a.b*0.82,new A.apk(this.a,w),w),D.aq)},
$S:1792}
A.e6d.prototype={
$0(){var w=this.a
w.azc()
w.iB()},
$S:0}
A.e8x.prototype={
$1(d){return new C.dY(new A.e8v(this.a,this.b,this.c),null)},
$S:19}
A.e8v.prototype={
$2(d,e){var w,v,u,t,s=null,r=new A.e8w(this.a,e),q=this.b,p=q.a,o=C.d(p.b+" "+q.gaDb(0),s,s,s,s,s,s,P.t1,s,s,s)
p=C.d(p.f,s,s,s,s,s,s,D.vd,s,s,s)
w=C.d("Now: "+q.gU3()+"\nFood "+D.k.V(100-q.b)+"%   Health "+D.k.V(q.c)+"%   Home "+D.k.V(q.d)+"%",s,s,s,s,s,s,B.aS7,s,s,s)
v=this.c
u=x.p
t=C.a([r.$2("\ud83c\udf5e Feed",new A.e8s(v,q))],u)
if(q.e)t.push(r.$3$col("\ud83d\udc8a Medicine",new A.e8t(v,q),D.by))
if(q.e||q.c<60)t.push(r.$3$col("\ud83c\udfe5 Hospital",new A.e8u(v,q),D.cs))
return C.bm(!0,new C.D(D.bQ,C.x(C.a([o,p,D.N,w,D.ad,C.bW(D.bD,t,D.bq,8,8)],u),D.E,s,D.e,D.P,0,D.p),s),!0,!1,D.af,!0,!0)},
$S:86}
A.e8w.prototype={
$3$col(d,e,f){var w=null,v=f.j(0.22),u=C.m(12),t=C.I(f,D.r,1)
return C.aB(w,C.p(w,C.d(d,w,w,w,w,w,w,C.l(w,w,f,w,w,w,w,w,w,w,w,13,w,w,D.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),D.f,w,w,new C.o(v,w,t,u,w,w,D.n),w,w,w,w,X.y6,w,w,w),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new A.e8r(this.a,e,this.b),w,w,w,w,w,w,!1,D.a4)},
$2(d,e){return this.$3$col(d,e,D.aE)},
$S:1793}
A.e8r.prototype={
$0(){var w,v=this.b.$0()
this.c.$1(new A.e8q())
w=this.a
w.m(w.giR())
w.iC(v)},
$S:0}
A.e8q.prototype={
$0(){},
$S:0}
A.e8s.prototype={
$0(){return this.a.bdW(this.b)},
$S:22}
A.e8t.prototype={
$0(){return this.a.aKc(this.b)},
$S:22}
A.e8u.prototype={
$0(){return this.a.aCS(this.b)},
$S:22}
A.e8h.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=x.p,k=C.a([],l)
for(w=D.d.gaf(B.a2V),v=new C.f5(w,new A.e8e()),u=this.a,t=this.b;v.C();){s=w.gR(0)
r=D.c.j(0.08)
q=new C.aQ(12,12)
p=u.d
p===$&&C.c()
o=p.d
o===$&&C.c()
n=new C.ay(o[p.e].fx.h(0,t)===s.a?D.aE:D.aZ,1,D.r,-1)
k.push(C.aB(m,C.p(m,new C.y(s.c+" "+s.b,m,D.JR,m,m,m,m,m,m,m,m,m),D.f,m,m,new C.o(r,m,new C.bI(n,n,n,n),new C.bk(q,q,q,q),m,m,D.n),m,m,m,m,D.ex,m,m,m),D.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new A.e8f(u,d,t,s),m,m,m,m,m,m,!1,D.a4))}w=u.d
w===$&&C.c()
v=w.d
v===$&&C.c()
if(v[w.e].fx.h(0,t)!=null)k.push(C.aB(m,C.p(m,B.fFM,D.f,m,m,new C.o(D.ev,m,m,C.m(12),m,m,D.n),m,m,m,m,D.ex,m,m,m),D.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new A.e8g(u,d,t),m,m,m,m,m,m,!1,D.a4))
return C.bm(!0,new C.D(D.bQ,C.x(C.a([B.fBS,D.R,C.bW(D.bD,k,D.bq,8,8)],l),D.E,m,D.e,D.P,0,D.p),m),!0,!1,D.af,!0,!0)},
$S:26}
A.e8e.prototype={
$1(d){return!(d.d>70||d.e)},
$S:z+23}
A.e8f.prototype={
$0(){var w,v,u,t=this
C.a3(t.b,!1).N(null)
w=t.a
v=t.d
w.m(new A.e8d(w,t.c,v))
u=v.d>0||v.e
v=v.b
w.iC(u?v+" is on and playing NGMY ads. Tap it to watch full screen.":v+" is plugged in and running.")
A.fU(820,70,0.25,"tri")},
$S:0}
A.e8d.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.d
w===$&&C.c()
w[u.e].fx.n(0,this.b,this.c.a)
v.iB()},
$S:0}
A.e8g.prototype={
$0(){C.a3(this.b,!1).N(null)
var w=this.a
w.m(new A.e8c(w,this.c))
w.iC("Unplugged.")},
$S:0}
A.e8c.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.d
w===$&&C.c()
w[u.e].fx.W(0,this.b)
v.iB()},
$S:0}
A.e9t.prototype={
$1(d){return new C.dY(new A.e9r(this.a),null)},
$S:19}
A.e9r.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.a,k=new A.e9s(l,e),j=l.d
j===$&&C.c()
w=j.d
w===$&&C.c()
j=C.d("TV in "+w[j.e].b,m,m,m,m,m,m,D.de,m,m,m)
w=x.p
v=C.a([],w)
for(u=D.d.gaf(B.a2V),t=new C.f5(u,new A.e9k());t.C();){s=u.gR(0)
r=s.b
q=l.d
p=q.d
p===$&&C.c()
q=p[q.e].k1===s.a?D.aE:D.f5
v.push(k.$3$color(r,new A.e9l(l,s),q))}j=C.a([j,D.R,C.bW(D.bD,v,D.bq,8,8)],w)
if(l.d.a.length!==0){v=C.a([],w)
for(o=0;o<3;++o){u={}
t=B.d3b[o]
u.a=null
n=t.a
u.a=n
s=l.d
r=s.d
r===$&&C.c()
s=r[s.e].p1===n?D.aE:D.f5
v.push(k.$3$color(t.b,new A.e9m(u,l),s))}D.d.v(j,C.a([B.fp2,D.am,C.bW(D.bD,v,D.bq,8,8)],w))}j.push(D.R)
w=C.a([],w)
v=l.d
u=v.d
u===$&&C.c()
v=u[v.e]
if(v.k1!=null){v=v.p2?"\u23fb Turn this TV off":"\u23fb Turn this TV on"
w.push(k.$2(v,new A.e9n(l)))}v=l.d
u=v.d
u===$&&C.c()
if(u[v.e].k1!=null&&v.a.length===0)w.push(k.$3$color("\ud83d\uddd1 Take it down",new A.e9o(l),D.ev))
if(l.d.a.length===0)w.push(k.$3$color("\ud83d\udcfa A TV in every room, all on",new A.e9p(l),D.cS))
if(l.d.a.length===0)w.push(k.$3$color("\u23fb All TVs off",new A.e9q(l),D.bl))
j.push(C.bW(D.bD,w,D.bq,8,8))
return C.bm(!0,new C.D(D.bQ,C.x(j,D.E,m,D.e,D.P,0,D.p),m),!0,!1,D.af,!0,!0)},
$S:86}
A.e9s.prototype={
$3$color(d,e,f){var w=null,v=f.j(0.4),u=C.m(12),t=C.I(f,D.r,1)
return C.aB(w,C.p(w,C.d(d,w,w,w,w,w,w,F.A1,w,w,w),D.f,w,w,new C.o(v,w,t,u,w,w,D.n),w,w,w,w,X.y6,w,w,w),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new A.e9j(this.a,e,this.b),w,w,w,w,w,w,!1,D.a4)},
$2(d,e){return this.$3$color(d,e,D.f5)},
$S:1794}
A.e9j.prototype={
$0(){this.b.$0()
this.c.$1(new A.e9i())
var w=this.a
w.m(w.giR())},
$S:0}
A.e9i.prototype={
$0(){},
$S:0}
A.e9k.prototype={
$1(d){return d.d>0||d.e},
$S:z+23}
A.e9l.prototype={
$0(){var w,v=this.a.d
v===$&&C.c()
w=v.d
w===$&&C.c()
v=w[v.e]
w=this.b.a
v.k1=w
if(v.c==="hall")v.k2=w
v.p2=!0},
$S:0}
A.e9m.prototype={
$0(){var w,v=this.b.d
v===$&&C.c()
w=v.d
w===$&&C.c()
return w[v.e].p1=this.a.a},
$S:0}
A.e9n.prototype={
$0(){var w,v=this.a.d
v===$&&C.c()
w=v.d
w===$&&C.c()
v=w[v.e]
return v.p2=!v.p2},
$S:0}
A.e9o.prototype={
$0(){var w,v=this.a.d
v===$&&C.c()
w=v.d
w===$&&C.c()
v=w[v.e]
v.k1=null
v.p2=!1},
$S:0}
A.e9p.prototype={
$0(){var w,v,u,t=this.a.d
t===$&&C.c()
t=t.gqM()
w=t.length
v=0
for(;v<w;++v){u=t[v]
if(u.k1==null)u.k1="tv100"
if(u.c==="hall")if(u.k2==null)u.k2="tv100"
u.p2=!0}},
$S:0}
A.e9q.prototype={
$0(){var w,v,u=this.a.d
u===$&&C.c()
u=u.gqM()
w=u.length
v=0
for(;v<w;++v)u[v].p2=!1},
$S:0}
A.e9f.prototype={
$1(d){return new C.dY(new A.e9d(this.a),null)},
$S:19}
A.e9d.prototype={
$2(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new A.e9e(),e=C.at(C.p(g,g,D.f,g,g,new C.o(D.aZ,g,g,C.m(2),g,g,D.n),g,4,g,g,g,g,g,42),g,g,g),d=x.p,a0=C.B(C.a([C.p(g,G.aoe,D.f,g,g,new C.o(g,g,g,C.m(16),g,B.c_9,D.n),g,52,g,g,g,g,g,52),D.es,B.bCc],d),D.m,g,D.e,D.j,0,g,g),a1=f.$1("Who walks the house"),a2=C.a([],d)
for(w=B.aFr.gdT(B.aFr),w=w.gaf(w),v=x.s,u=x.N,t=x.ec,s=this.a;w.C();){r=w.gR(w)
q=$.ahn
p=r.a
q=q===p?D.aR.j(0.18):D.c.j(0.06)
o=new C.aQ(18,18)
n=$.ahn===p
m=n?D.aR:D.bz
l=new C.ay(m,n?2:1,D.r,-1)
n=n?D.aR:D.aZ
m=r.b
k=D.d.gI(m.split(" "))
m=C.a(m.split(" "),v)
j=new C.jw(m,1,g,t)
j.pd(m,1,g,u)
j=j.aG(0," ")
p=$.ahn===p?D.aR:D.c
a2.push(new C.D(D.MI,C.aB(g,C.d9(g,C.x(C.a([new C.oW(new C.y(k,g,D.pt,g,g,g,g,g,g,g,g,g),n,g,20,g),D.am,new C.y(j,g,new C.F(!0,p,g,g,g,g,12.5,D.H,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g),g,g,g,g,D.a2,g,1,g,g)],d),D.m,g,D.b8,D.j,0,D.p),g,g,D.b7,new C.o(q,g,new C.bI(l,l,l,l),new C.bk(o,o,o,o),g,g,D.n),D.ho,g,g,g,D.FY,g,g,92),D.y,!1,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,new A.e99(s,a4,r),g,g,g,g,g,g,!1,D.a4),g))}a2=C.cq(a2,g,g,g,g,D.aN,!1)
w=f.$1("How long")
v=D.c.j(0.06)
u=C.m(16)
t=C.a([],d)
for(i=0;i<5;++i){h=B.dnO[i]
r=s.db===h
q=r?D.aE:D.K
p=new C.aQ(12,12)
if(h<60)o=""+h+" seconds"
else o=h===60?"1 minute":""+(h/60|0)+" minutes"
r=r?D.w:D.ae
t.push(new C.bA(1,D.bd,C.aB(g,C.d9(g,new C.ci(D.A,g,g,new C.y(o,g,new C.F(!0,r,g,g,g,g,12.5,D.u,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g),g,D.L,g,g,g,g,g,g,g),g),g,g,D.b7,new C.o(q,g,g,new C.bk(p,p,p,p),g,g,D.n),D.ho,g,g,g,D.tV,g,g,g),D.y,!1,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,new A.e9a(s,a4,h),g,g,g,g,g,g,!1,D.a4),g))}v=C.p(g,C.B(t,D.m,g,D.e,D.j,0,g,g),D.f,g,g,new C.o(v,g,g,u,g,g,D.n),g,g,g,g,D.ez,g,g,g)
u=C.aB(g,C.p(g,B.eWF,D.f,g,g,new C.o(g,g,g,C.m(18),C.a([new C.ac(0,D.G,D.aw.j(0.35),D.cv,16)],x.V),B.c07,D.n),g,56,g,g,g,g,g,g),D.y,!1,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,new A.e9b(s,a3),g,g,g,g,g,g,!1,D.a4)
t=D.c.j(0.06)
r=C.m(18)
return C.p(g,C.bm(!0,C.cd(C.x(C.a([e,D.aL,a0,a1,new C.a7(g,96,a2,g),w,v,D.dW,u,D.ad,C.aB(g,C.p(g,B.eWz,D.f,g,g,new C.o(t,g,C.I(D.bz,D.r,1),r,g,g,D.n),g,g,g,g,D.bB,g,g,g),D.y,!1,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,new A.e9c(s,a3),g,g,g,g,g,g,!1,D.a4)],d),D.E,g,D.e,D.P,0,D.p),D.t,g,D.y,g,D.ajD,g,g,D.ag),!0,!1,D.af,!0,!0),D.f,g,g,B.b2D,g,g,g,g,g,g,g,g)},
$S:168}
A.e9e.prototype={
$1(d){var w=null
return new C.D(G.ail,C.d(d.toUpperCase(),w,w,w,w,w,w,O.t3,w,w,w),w)},
$S:151}
A.e99.prototype={
$0(){var w=this.c
this.b.$1(new A.e97(w))
A.fVW(w.a)
this.a.m(new A.e98())},
$S:0}
A.e97.prototype={
$0(){return $.ahn=this.a.a},
$S:0}
A.e98.prototype={
$0(){},
$S:0}
A.e9a.prototype={
$0(){return this.b.$1(new A.e96(this.a,this.c))},
$S:0}
A.e96.prototype={
$0(){return this.a.db=this.b},
$S:0}
A.e9b.prototype={
$0(){C.a3(this.b,!1).N(null)
var w=this.a
w.cxr(w.db)},
$S:0}
A.e9c.prototype={
$0(){C.a3(this.b,!1).N(null)
this.a.b6C(45,!0)},
$S:0}
A.e8R.prototype={
$0(){var w=this.a,v=w.d
v===$&&C.c()
v.e=this.b
w.ax=null
w.iB()},
$S:0}
A.e8S.prototype={
$1(d){return this.a.cBE()},
$S:11}
A.e8T.prototype={
$0(){},
$S:0}
A.e9g.prototype={
$0(){return this.a.dy=this.b.as},
$S:0}
A.e95.prototype={
$0(){var w=this.b
w.iB()
w.az=this.a.a;++w.aE},
$S:0}
A.e8Y.prototype={
$0(){var w=this.a
w.cx=null
w.dy=""},
$S:0}
A.e8Z.prototype={
$0(){},
$S:0}
A.e8Q.prototype={
$0(){},
$S:0}
A.e8X.prototype={
$0(){},
$S:0}
A.e9E.prototype={
$0(){return this.a.id=!0},
$S:0}
A.e9F.prototype={
$0(){return this.a.k2=!0},
$S:0}
A.e9G.prototype={
$0(){return this.a.k3=!0},
$S:0}
A.e9H.prototype={
$1(d){return B.aOS.q(0,d.b)},
$S:z+3}
A.e9x.prototype={
$1(d){var w
if(d.b==="gasstation"){w=this.a
w=Math.sqrt(Math.pow(w.f-d.c,2)+Math.pow(w.r-d.d,2))<135}else w=!1
return w},
$S:z+3}
A.e9y.prototype={
$0(){return this.a.aOH(B.aP8)},
$S:0}
A.e9z.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.d
w===$&&C.c()
D.d.W(w[u.e].x,this.b)
v.ak="crate"
v.m(v.giR())
v.ef("You picked up a crate. Carry it to the shop and walk onto the green mat by the counter to sell it at the market.",!0)
A.fU(700,60,0.25,"tri")
return null},
$S:0}
A.e9A.prototype={
$0(){return this.a.aaY(this.b)},
$S:0}
A.e9B.prototype={
$0(){return this.a.bPd(this.b)},
$S:0}
A.e9C.prototype={
$0(){return this.a.bRQ(this.b)},
$S:0}
A.e9D.prototype={
$0(){return this.b.cK=this.a.a},
$S:0}
A.e6Q.prototype={
$0(){},
$S:0}
A.e7w.prototype={
$0(){var w=this.a
w.y1=null
w.y2=!0},
$S:0}
A.e7t.prototype={
$1(d){return d.c==="outside"},
$S:z+4}
A.e7u.prototype={
$1(d){return d.b==="hospital"},
$S:z+3}
A.e7v.prototype={
$1(d){return!d.e&&d.r<0},
$S:z+17}
A.e7f.prototype={
$1(d){return d.c==="outside"},
$S:z+4}
A.e7g.prototype={
$1(d){return d.a.b===this.a.d},
$S:z+17}
A.e8L.prototype={
$0(){},
$S:0}
A.e79.prototype={
$0(){return this.a.k3=!0},
$S:0}
A.e8z.prototype={
$1(d){return d.b==="hospital"},
$S:z+3}
A.e8A.prototype={
$0(){return this.a.go=!1},
$S:0}
A.e8M.prototype={
$0(){var w=this.a
w.iB()
w.ae1(!0)},
$S:0}
A.e8N.prototype={
$1(d){return this.a.c6B()},
$S:11}
A.e7m.prototype={
$1(d){return!D.d.b3(this.a.d,new A.e7l(d))},
$S:34}
A.e7l.prototype={
$1(d){return d.a===this.a},
$S:z+18}
A.e7n.prototype={
$1(d){return d.a===this.a.a},
$S:z+18}
A.e8O.prototype={
$1(d){var w,v,u=this.a
if(u.c==null)return
w=++u.T
if(w>36){v=u.bA
u.AY()
if(v!=null)u.aBe("Nobody answered the phone")
return}if(w%8<4){A.fU((w&1)===0?1046:1318,160,0.3,"sine")
if(D.o.F(u.T,8)===0)C.Tg()}},
$S:11}
A.e8P.prototype={
$0(){},
$S:0}
A.e8W.prototype={
$0(){var w=this.a
w.bA=w.bz=null},
$S:0}
A.e7L.prototype={
$4$col$on(d,e,f,g){var w=null,v=g?f.j(0.45):D.w.j(0.62),u=C.m(18),t=C.I(f,D.r,1.8)
return C.aB(w,C.p(w,C.d(d,w,w,w,w,w,w,D.iY,w,w,w),D.f,w,w,new C.o(v,w,t,u,w,w,D.n),w,w,w,D.a_0,B.bBt,w,w,w),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new A.e7M(e),w,w,w,w,!1,D.a4)},
$2(d,e){return this.$4$col$on(d,e,D.bm,!1)},
$3$col(d,e,f){return this.$4$col$on(d,e,f,!1)},
$3$on(d,e,f){return this.$4$col$on(d,e,D.bm,f)},
$S:1795}
A.e7M.prototype={
$1(d){return this.a.$0()},
$S:23}
A.e7U.prototype={
$7$about$avatar$glow$onAnswer$onDecline$onLater$who(d,e,f,g,h,i,j){var w=null,v=new A.e7V(),u=Math.min(this.a-28,340),t=C.m(30),s=C.I(D.aZ,D.r,2),r=C.a([new C.ac(0,D.G,f.j(0.35),D.J,24)],x.V),q=x.p,p=C.B(C.a([e,D.es,C.E(C.x(C.a([B.fDi,D.bC,C.d(j,w,1,D.a2,w,w,w,D.a8C,w,w,w),D.bC,C.d(d,w,2,D.a2,w,w,w,K.a98,w,w,w)],q),D.E,w,D.e,D.P,0,D.p),1)],q),D.m,w,D.e,D.j,0,w,w),o=C.a([v.$4(B.bJ7,"Decline",D.aw,h)],q)
if(i!=null)o.push(v.$4(D.jR,"Later",D.aE,i))
o.push(v.$5$big(D.iv,"Answer",D.be,g,!0))
return C.p(w,C.x(C.a([p,D.aA,C.B(o,D.E,w,D.e,D.j,0,w,w)],q),D.aj,w,D.e,D.P,0,D.p),D.f,w,w,new C.o(w,w,s,t,r,B.z4,D.n),w,w,w,D.d1,Ae.ZH,w,w,u)},
$6$about$avatar$glow$onAnswer$onDecline$who(d,e,f,g,h,i){return this.$7$about$avatar$glow$onAnswer$onDecline$onLater$who(d,e,f,g,h,null,i)},
$S:1796}
A.e7V.prototype={
$5$big(d,e,f,g,h){var w=null,v=h?58:50,u=h?58:50
return C.E(C.aB(w,C.x(C.a([C.p(w,C.X(d,D.c,w,w,w,h?30:26),D.f,w,w,new C.o(f,w,w,w,w,w,D.a5),w,u,w,w,w,w,w,v),D.fM,C.d(e,w,w,w,w,w,w,L.A4,w,w,w)],x.p),D.m,w,D.e,D.P,0,D.p),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new A.e7W(g),w,w,w,w,!1,D.a4),1)},
$4(d,e,f,g){return this.$5$big(d,e,f,g,!1)},
$S:1797}
A.e7W.prototype={
$1(d){return this.a.$0()},
$S:23}
A.e7O.prototype={
$0(){var w=this.a
w.AY()
w.aBe("You turned the call down")},
$S:0}
A.e7P.prototype={
$0(){var w=this.a
w.AY()
w.eG.push(this.b)
w.ef("Saved on your waiting list. You will be taken there when you are free.",!0)},
$S:0}
A.e7N.prototype={
$0(){var w=this.b,v=this.a
v.AY()
v.cI=w
v.hK=0
v.awy(w)},
$S:0}
A.e7Q.prototype={
$0(){var w=this.a
w.AY()
w.czZ(this.b)},
$S:0}
A.e7T.prototype={
$2(d,e){var w=this.a
w.b0=d
w.bb=e},
$S:256}
A.e7R.prototype={
$0(){var w=this.a
return w.m(new A.e7K(w))},
$S:0}
A.e7K.prototype={
$0(){var w=this.a
return w.bh=!w.bh},
$S:0}
A.e7S.prototype={
$0(){var w=this.a,v=w.aH
if(v==null)v=null
else{v=v.at
v===$&&C.c()}w=v==null?w.aB:v
if(w!=null)if(w.Q<=0.01)w.as=160
return null},
$S:0}
A.e7x.prototype={
$1(d){var w=this.a,v=w.p4
w=w.RG
return v==="ptrap"?new A.a9n(w,null):new A.a4O(w,null)},
$S:1798}
A.e7y.prototype={
$1(d){var w=this.a
return new A.DO(w.p4,w.R8,null)},
$S:z+25}
A.e9I.prototype={
$1(d){var w=this.a
return new A.DO(w.a,w.c,null)},
$S:z+25}
A.e7A.prototype={
$1(d){return A.cgt(!1,this.a.CW,!1)},
$S:z+38}
A.e7z.prototype={
$1(d){return new A.W1(this.a.fr,null)},
$S:z+68}
A.e5c.prototype={
$1(d){var w,v,u,t,s,r,q,p=null,o=this.a,n=o.d
n===$&&C.c()
w=n.d
w===$&&C.c()
n=C.d("Add to "+w[n.e].b,p,p,p,p,p,p,D.de,p,p,p)
w=x.p
v=C.a([],w)
for(u=0;u<3;++u){t={}
s=B.dpt[u]
t.a=null
t.a=s.a
r=new C.aQ(12,12)
q=new C.ay(D.b2,1,D.r,-1)
v.push(C.aB(p,C.p(p,new C.y(s.b,p,D.t5,p,p,p,p,p,p,p,p,p),D.f,p,p,new C.o(D.f5.j(0.4),p,new C.bI(q,q,q,q),new C.bk(r,r,r,r),p,p,D.n),p,p,p,p,X.y6,p,p,p),D.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new A.e5b(t,o,d),p,p,p,p,p,p,!1,D.a4))}return C.bm(!0,new C.D(D.bQ,C.x(C.a([n,D.av,B.fKh,D.ad,C.bW(D.bD,v,D.bq,8,8)],w),D.E,p,D.e,D.P,0,D.p),p),!0,!1,D.af,!0,!0)},
$S:26}
A.e5b.prototype={
$0(){C.a3(this.c,!1).N(null)
this.b.bzV(this.a.a)},
$S:0}
A.e56.prototype={
$1(d){return d.b==="back"},
$S:z+16}
A.e57.prototype={
$1(d){return d.b==="back"},
$S:z+16}
A.e58.prototype={
$1(d){return Math.abs(d-this.a)>13},
$S:113}
A.e59.prototype={
$0(){var w=this
w.b.id.push(new A.aVq(w.c,w.d,new A.Cu(C.T(x.S,x.N))))
w.a.iB()},
$S:0}
A.e7q.prototype={
$0(){var w,v=this,u=v.b,t=u.c,s=v.c,r=v.d
u.c=t+(s?D.o.gVx(r)*40:r)
t=u.d
r=v.e
u.d=t+(s?D.o.gVx(r)*40:r)
t=v.a
r=t.d
r===$&&C.c()
w=r.d
w===$&&C.c()
w[r.e].a3F(0,u)
t.iB()},
$S:0}
A.e9h.prototype={
$0(){var w,v,u,t=this.b
t.e=D.o.F(t.e+1,4)
w=this.a
v=w.d
v===$&&C.c()
u=v.d
u===$&&C.c()
u[v.e].a3F(0,t)
w.iB()},
$S:0}
A.e8o.prototype={
$0(){var w=this.b
w.f=(w.f+1)%6
this.a.iB()},
$S:0}
A.e8p.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.d
w===$&&C.c()
D.d.W(w[u.e].x,this.b)
v.at=v.Q=0
v.iB()},
$S:0}
A.e5a.prototype={
$0(){var w=this.a,v=this.b.a
w.Q=v
w.at=100+v
w.iB()},
$S:0}
A.e6m.prototype={
$0(){return this.a.ae2(-6,0)},
$S:0}
A.e6n.prototype={
$0(){return this.a.ae2(6,0)},
$S:0}
A.e6o.prototype={
$0(){return this.a.ae2(0,-6)},
$S:0}
A.e6p.prototype={
$0(){return this.a.ae2(0,6)},
$S:0}
A.e6q.prototype={
$0(){return this.a.bzY(this.b.a)},
$S:0}
A.e6r.prototype={
$0(){var w=this.a
return w.m(new A.e6l(w))},
$S:0}
A.e6l.prototype={
$0(){return this.a.as=-1},
$S:0}
A.e6s.prototype={
$0(){var w=this.a
w.m(new A.e6k(w,this.b))},
$S:0}
A.e6k.prototype={
$0(){var w,v=this.a,u=v.as,t=this.b,s=v.d
if(u<0){s===$&&C.c()
u=s.d
u===$&&C.c()
D.d.ht(u[s.e].z,0,3,t)}else{s===$&&C.c()
w=s.d
w===$&&C.c()
w[s.e].z[u]=t}v.iB()},
$S:0}
A.e6t.prototype={
$0(){var w=this.a
w.m(new A.e6j(w,this.b))},
$S:0}
A.e6j.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.d
w===$&&C.c()
w[u.e].Q=this.b
v.iB()},
$S:0}
A.e6u.prototype={
$0(){var w=this.a
w.m(new A.e6i(w))},
$S:0}
A.e6i.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.d
w===$&&C.c()
u=w[u.e]
u.go=u.go==="fan"?"light":"fan"
v.iB()},
$S:0}
A.e6v.prototype={
$0(){var w=this.a
w.m(new A.e6h(w,this.b))},
$S:0}
A.e6h.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.d
w===$&&C.c()
w[u.e].as=this.b
v.iB()},
$S:0}
A.e6w.prototype={
$0(){return this.a.Au(this.b.d)},
$S:0}
A.e9L.prototype={
$0(){return C.a3(this.a,!1).ib()},
$S:0}
A.e9N.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.e9K(w))},
$S:0}
A.e9K.prototype={
$0(){return this.a.az=null},
$S:0}
A.e9M.prototype={
$3(d,e,f){var w=null
return C.d6(C.cms(D.A,w,w,w,w,D.cf,D.xk,w,this.a.az,!1,!1,!1,w,D.pa,1,w),e)},
$S:100}
A.e5Z.prototype={
$0(){return this.a.zY("calls")},
$S:0}
A.e6_.prototype={
$0(){return this.a.zY("hospital")},
$S:0}
A.e60.prototype={
$0(){return this.a.zY("shop")},
$S:0}
A.e64.prototype={
$0(){return this.a.zY("people")},
$S:0}
A.e65.prototype={
$0(){return this.a.Au(10)},
$S:0}
A.e66.prototype={
$0(){var w=this.a
return w.m(new A.e5Y(w))},
$S:0}
A.e5Y.prototype={
$0(){return this.a.k2=!0},
$S:0}
A.e67.prototype={
$0(){var w=this.a
return w.m(new A.e5X(w))},
$S:0}
A.e5X.prototype={
$0(){return this.a.k3=!0},
$S:0}
A.e68.prototype={
$0(){var w=this.a
return w.m(new A.e5W(w))},
$S:0}
A.e5W.prototype={
$0(){var w=this.a
return w.y1=w.cI},
$S:0}
A.e69.prototype={
$0(){var w=this.a,v=w.eG.length,u=v===1?"":"s"
return w.ef(""+v+" job"+u+" waiting. You are taken to the next one when you finish this one.",!0)},
$S:0}
A.e6a.prototype={
$0(){var w=this.a
return w.m(new A.e5V(w))},
$S:0}
A.e5V.prototype={
$0(){return this.a.go=!0},
$S:0}
A.e6b.prototype={
$0(){var w=this.a
return w.p4?w.a2n():w.m(new A.e5U(w))},
$S:0}
A.e5U.prototype={
$0(){return this.a.R8=!0},
$S:0}
A.e61.prototype={
$0(){var w=this.a
return w.m(new A.e5T(w))},
$S:0}
A.e5T.prototype={
$0(){var w=this.a
return w.h3=!w.h3},
$S:0}
A.e62.prototype={
$0(){var w=this.a
return w.m(new A.e5S(w))},
$S:0}
A.e5S.prototype={
$0(){return this.a.ah=!0},
$S:0}
A.e63.prototype={
$0(){var w=this.a
return w.m(new A.e5R(w))},
$S:0}
A.e5R.prototype={
$0(){var w=this.a
return w.y=!w.y},
$S:0}
A.e5j.prototype={
$0(){var w=this.a.ghH()
w=w==null?null:w.r
return w==null?0:w},
$S:98}
A.e5x.prototype={
$0(){return this.a.xR()},
$S:0}
A.e5w.prototype={
$1(d){return d<=5},
$S:34}
A.e5k.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n=null,m=this.a,l=m.aH,k=m.CW
if(l!=null){m=k.gik()
k=B.aFs.h(0,$.ahn)
if(k==null)k=B.SQ
k=l.cMi(m/1000,k)
m=k}else{l=m.d
l===$&&C.c()
w=l.d
w===$&&C.c()
l=w[l.e]
w=k.gik()
v=m.ckl()
u=B.aFs.h(0,$.ahn)
if(u==null)u=B.SQ
t=m.fr
s=m.r
r=m.bN6()
if(m.ak==null){q=m.gpj()
if(q==null)q=n
else{q=q.x
q=(q==null?n:q.r)===!0}q=q===!0}else q=!0
p=m.d
o=p.d
o===$&&C.c()
if(o[p.e].c!=="outside")k=B.HE
else{p=m.gpj()
p=p==null?n:p.alY(k.gik()/1000)
if(p==null)p=B.HE
p=C.C(p,x.hg)
o=m.gKm()
k=o==null?n:o.alY(k.gik()/1000)
D.d.v(p,k==null?B.HE:k)
k=p}l=C.C(A.i44(l,w/1000,q,k,r,s,v,u,t),x.fX)
k=m.d
w=k.d
w===$&&C.c()
if(w[k.e].c==="outside")D.d.v(l,m.cBM())
k=!0
if(m.cI==null){w=m.gpj()
if((w==null?n:w.x)==null){k=m.gKm()
k=(k==null?n:k.f)!=null}}D.d.v(l,k?m.cqG():B.ayA)
m=l}return m},
$S:z+10}
A.e5l.prototype={
$1(d){var w,v,u=this.a
if(u.aH==null){w=u.d
w===$&&C.c()
v=w.d
v===$&&C.c()
w=v[w.e].c==="outside"}else w=!1
return w?A.ieS(u.CW.gik()/1000):B.wr},
$S:z+71}
A.e5y.prototype={
$3(d,e,f){var w=null,v=D.dL.j(0.82),u=C.m(18),t=C.I(D.bc,D.r,2)
return C.p(w,C.d(e,w,w,w,w,w,w,B.fn8,w,w,w),D.f,w,w,new C.o(v,w,t,u,w,w,D.n),w,w,w,w,B.bzI,w,w,w)},
$S:1799}
A.e5o.prototype={
$0(){var w=this.a,v=w.d
v===$&&C.c()
return v.a.length!==0?w.Ef():w.clA(this.b)},
$S:0}
A.e5z.prototype={
$0(){var w=this.a
w.m(new A.e5i(w))
w.xR()},
$S:0}
A.e5i.prototype={
$0(){var w=this.a
w.x=!w.x
w.iB()},
$S:0}
A.e5A.prototype={
$0(){var w=this.a
return w.cx!=null?w.RT():w.cBD()},
$S:0}
A.e5B.prototype={
$0(){var w=this.a
w.m(new A.e5h(w))
w.xR()
if(w.z)w.iC("Drag to turn all the way round. Double tap a spot on the floor to walk there.")},
$S:0}
A.e5h.prototype={
$0(){var w=this.a,v=!w.z
w.z=v
if(v&&w.cx!=null)w.RT()
w.iB()},
$S:0}
A.e5C.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.d
w===$&&C.c()
return v.Au(w[u.e].c!=="outside"?11:10)},
$S:0}
A.e5D.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.d
w===$&&C.c()
if(w[u.e].c!=="outside")v.Au(11)
v.zY("calls")},
$S:0}
A.e5m.prototype={
$0(){var w=this.a
return w.m(new A.e5g(w))},
$S:0}
A.e5g.prototype={
$0(){var w=this.a,v=!w.w
w.w=v
if(v)w.iC("Voltage tester in your hand: tap an outlet, a switch or the light.")},
$S:0}
A.e5n.prototype={
$0(){var w=this.a
return w.m(new A.e5f(w))},
$S:0}
A.e5f.prototype={
$0(){var w=this.a
return w.y=!w.y},
$S:0}
A.e5p.prototype={
$0(){return this.a.PD("look")},
$S:0}
A.e5q.prototype={
$0(){return this.a.PD("furniture")},
$S:0}
A.e5r.prototype={
$0(){return this.a.PD("walls")},
$S:0}
A.e5s.prototype={
$0(){return this.a.PD("floor")},
$S:0}
A.e5t.prototype={
$0(){return this.a.PD("ceiling")},
$S:0}
A.e5u.prototype={
$0(){return this.a.PD("doors")},
$S:0}
A.e5v.prototype={
$0(){return C.a3(this.a,!1).cg(C.e_(new A.e5e(),!1,null,x.H))},
$S:0}
A.e5e.prototype={
$1(d){return B.aGr},
$S:z+72}
A.e8n.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=C.aH(d,m,x.w).w,k=this.a,j=k.d
j===$&&C.c()
w=x.p
j=C.a([B.fyu,D.av,C.d("Wiring "+j.gcXK()+"/"+k.d.gqM().length+" \xb7 Plumbing "+k.d.gcUu()+"/"+k.d.gcUt(),m,m,m,m,m,m,B.JC,m,m,m),D.R],w)
for(v=k.d.gqM(),u=v.length,t=0;t<v.length;v.length===u||(0,C.M)(v),++t){s=v[t]
r=D.c.j(0.05)
q=new C.aQ(12,12)
p=new C.ay(s.gkG()&&s.gjN()?D.bm.j(0.5):D.bz,1,D.r,-1)
if(s.gkG()&&s.gjN())o="\u2705 finished"
else{o=s.gkG()?"":"\u26a1 wiring  "
o+=s.gjN()?"":"\ud83d\udeb0 plumbing"}n=s.gkG()&&s.gjN()?D.eo:D.ae
j.push(C.aB(m,C.p(m,new C.cb(D.aN,D.e,D.j,D.m,m,D.p,m,0,C.a([new C.bA(1,D.bd,new C.y(s.b,m,B.aSB,m,m,m,m,m,m,m,m,m),m),new C.y(o,m,new C.F(!0,n,m,m,m,m,12,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m,m,m,m,m,m,m)],w),m),D.f,m,m,new C.o(r,m,new C.bI(p,p,p,p),new C.bk(q,q,q,q),m,m,D.n),m,m,m,D.eG,D.bT,m,m,m),D.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new A.e8k(k,d,s),m,m,m,m,m,m,!1,D.a4))}j.push(D.N)
j.push(C.dR(B.fvv,new A.e8l(k,d),m))
j.push(D.N)
j.push(C.bH(B.frI,new A.e8m(k,d),m))
return C.bm(!0,new C.cT(new C.aY(0,1/0,0,l.a.b*0.75),C.cq(j,m,D.bQ,m,m,D.ag,!0),m),!0,!1,D.af,!0,!0)},
$S:26}
A.e8k.prototype={
$0(){C.a3(this.b,!1).N(null)
this.a.Au(this.c.a)},
$S:0}
A.e8l.prototype={
$0(){C.a3(this.b,!1).N(null)
var w=this.a
w.m(new A.e8j(w))
w.iC("Every room needs its wiring and plumbing again. Wire the whole house from the start.")},
$S:0}
A.e8j.prototype={
$0(){var w=this.a,v=w.d
v===$&&C.c()
v.cR6()
w.iB()},
$S:0}
A.e8m.prototype={
$0(){C.a3(this.b,!1).N(null)
$.E0=A.aVw(D.o.F(Date.now(),1e5))
var w=this.a
w.m(new A.e8i(w))
w.ae1(!0)},
$S:0}
A.e8i.prototype={
$0(){var w=this.a,v=$.E0
v.toString
w.d=v
w.r="look"
w.Q=0
w.as=-1
w.at=0
w.iB()},
$S:0}
A.dsd.prototype={
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
$S:23}
A.f1o.prototype={
$0(){return this.b.d=this.a.a},
$S:0}
A.f1n.prototype={
$0(){return this.a.d=null},
$S:0}
A.f1q.prototype={
$1(d){return this.a.aZc(d.gfh())},
$S:76}
A.f1r.prototype={
$1(d){return this.a.aZc(d.gfh())},
$S:260}
A.f1s.prototype={
$1(d){return this.a.aZb()},
$S:128}
A.f1p.prototype={
$1(d){return this.a.aZb()},
$S:171}
A.ft3.prototype={
$1$speed(d){var w,v,u,t=null,s=this.a,r=s.a
if(r.length===0)return
w=s.b
v=s.d
u=s.c
u=u.length===0?t:D.d.gI(u)
this.b.push(new A.Mc(r,w,d,8,u,t,v,t,t))
v=x.o
s.a=C.a([],v)
s.b=C.a([],v)
s.c=C.a([],x.s)
s.d=!1},
$0(){return this.$1$speed(130)},
$S:1800}
A.fta.prototype={
$3$note(d,e,f){var w=this.a
w.a.push(d)
w.b.push(e)
if(f!=null)w.c.push(f)},
$2(d,e){return this.$3$note(d,e,null)},
$S:z+73}
A.ft5.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m,l,k
for(w=this.a.x,v=w.length,u=d.a,t=d.c,s=d.b,r=0;r<v;++r){q=w[r]
p=q.b
if(p!=="billboard"&&p!=="cornersign"&&p!=="townsign"&&p!=="adboard")continue
A:{if("townsign"===p){p=B.a7e
break A}if("cornersign"===p){p=B.a7g
break A}if("adboard"===p){p=B.a7d
break A}p=B.a7f
break A}o=p.a
n=p.b
m=(q.e&1)===1
l=q.c
k=m?n:o
if(Math.abs(u-l)<k){l=q.d
k=m?o:n
p=Math.abs(t-l)<k&&s<p.c}else p=!1
if(p)return!0}return!1},
$S:z+22}
A.ftb.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
for(w=this.a.x,v=w.length,u=0;u<=1;u+=0.02){t=A.o_(d,e,u)
for(s=t.a,r=t.c,q=t.b,p=0;p<v;++p){o=w[p]
n=o.b
if(n!=="billboard"&&n!=="cornersign"&&n!=="townsign"&&n!=="adboard")continue
A:{if("townsign"===n){n=B.a7e
break A}if("cornersign"===n){n=B.a7g
break A}if("adboard"===n){n=B.a7d
break A}n=B.a7f
break A}m=n.a
l=n.b
k=(o.e&1)===1
j=o.c
i=k?l:m
if(Math.abs(s-j)<i){j=o.d
i=k?m:l
n=Math.abs(r-j)<i&&q<n.c}else n=!1
if(n)return o}}return null},
$S:z+74}
A.ft4.prototype={
$2(d,e){return this.a.$2(d,e)!=null},
$S:z+75}
A.ft1.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this.a.$2(d,e)
if(i==null)return null
w=i.b
A:{if("townsign"===w){v=B.a7e
break A}if("cornersign"===w){v=B.a7g
break A}if("adboard"===w){v=B.a7d
break A}v=B.a7f
break A}u=Math.max(v.a,v.b)+170
t=e.a-d.a
s=e.c-d.c
r=Math.sqrt(t*t+s*s)
if(r<1)return null
q=Math.max(d.b,e.b)
v=i.c
p=-s/r*u
o=i.d
n=t/r*u
m=new A.r(v+p,q,o+n)
l=new A.r(v-p,q,o-n)
n=new A.ft2(d,e)
o=this.b
k=!o.$1(m)
j=!o.$1(l)
if(k&&j)return n.$1(m)<=n.$1(l)?m:l
if(k)v=m
else v=j?l:null
return v},
$S:z+76}
A.ft2.prototype={
$1(d){return d.aF(0,this.a).guN()+this.b.aF(0,d).guN()},
$S:z+77}
A.fsW.prototype={
$3(d,e,f){var w,v,u,t=this
if(!t.a.$2(d,e))return B.ry
w=f>=3?null:t.b.$2(d,e)
if(w==null)return C.a([new A.r((d.a+e.a)/2,430,(d.c+e.c)/2)],x.o)
v=f+1
u=C.C(t.$3(d,w,v),x.Q)
u.push(w)
D.d.v(u,t.$3(w,e,v))
return u},
$2(d,e){return this.$3(d,e,0)},
$S:z+78}
A.ft7.prototype={
$7$note(a2,a3,a4,a5,a6,a7,a8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=A.hoc(a2),a1=new A.r(a2.c,a4,a2.d)
for(w=d.d,v=d.a,u=d.b,t=Math.atan2(a0.a,a0.b)-0.55,s=a6-a5,r=d.c,q=null,p=0;p<6;++p){o=t+p*0.38
n=a5+s*p/5
m=a2.c
l=Math.sin(o)
k=p===0
j=k?40:0
i=new A.r(m+l*n,a3+a7*p/5+j,a2.d+Math.cos(o)*n)
if(u.$1(i)){if(k)q=a8
continue}m=v.a
if(m.length!==0&&p>0){h=D.d.gal(m)
g=!1
f=0
for(;;){if(!(f<=1&&!g))break
g=u.$1(A.o_(h,i,f))
f+=0.02}if(g)for(m=r.$2(h,i),l=m.length,e=0;e<m.length;m.length===l||(0,C.M)(m),++e)w.$2(m[e],D.d.gal(v.b))}w.$3$note(i,a1,k?a8:q)
q=null}},
$6(d,e,f,g,h,i){return this.$7$note(d,e,f,g,h,i,null)},
$S:z+79}
A.ft9.prototype={
$1(d){var w=d.b,v=this.a
switch(w){case"townsign":v.$7$note(d,255,250,430,520,60,"The biggest billboard in the city: NGMY Town")
break
case"cornersign":v.$7$note(d,115,120,210,260,50,"A corner billboard: NGMY Town")
break
case"adboard":v.$7$note(d,160,142,330,410,55,"A big NGMY ad billboard")
break
case"tower":v.$7$note(d,430,(w==="hq"?278:A.hnx(B.z7[d.f]))+40,150,210,20,"A tower with NGMY ad boards")
break
case"hq":v.$7$note(d,440,312,190,250,20,"The NGMY company building")
break
default:v.$7$note(d,75,48,130,175,45,"An NGMY billboard")}},
$S:z+26}
A.ft8.prototype={
$1(d){var w,v,u,t,s,r,q,p=this.a,o=p.a.length
this.b.$1(d)
if(o>0&&o<p.a.length){w=p.a
v=o-1
u=this.c.$2(w[v],w[o])
w=J.a4(u)
if(w.gL(u)!==0){t=p.b
s=t[v]
r=t[o]
for(q=0;q<w.gL(u);){v=o+q
D.d.c8(p.a,v,w.h(u,q));++q
D.d.c8(p.b,v,A.o_(s,r,q/(w.gL(u)+1)))}}}},
$S:z+26}
A.ft6.prototype={
$1(d){var w
this.b.$0()
w=x.o
this.c.push(new A.Mc(C.a([B.h4a,B.fQP,B.fSQ],w),C.a([B.h4H,B.fS5,B.fVr],w),55,8,"Inside the "+B.ht.h(0,d.b).a.toLowerCase(),d,!1,null,null))
this.a.d=!0},
$S:z+26}
A.fsX.prototype={
$1(d){return d.b==="townsign"},
$S:z+3}
A.fsY.prototype={
$2(d,e){var w=this.a
return D.k.aL(Math.pow(d.c-w.a.a,2)+Math.pow(d.d-w.a.c,2),Math.pow(e.c-w.a.a,2)+Math.pow(e.d-w.a.c,2))},
$S:z+19}
A.fsV.prototype={
$1(d){return Math.atan2(d.d-1000,d.c)},
$S:z+102}
A.fsZ.prototype={
$2(d,e){var w=this.a
return J.B7(w.$1(d),w.$1(e))},
$S:z+19}
A.ft_.prototype={
$1(d){return d.b==="bighouse"},
$S:z+3}
A.ft0.prototype={
$1(d){return d.b===this.a},
$S:z+3}
A.ceI.prototype={
$0(){var w=0,v=C.j(x.P),u=1,t=[],s,r,q,p,o,n
var $async$$0=C.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
w=6
return C.b($.r2().jJ(0,"assets/images/ngmy_logo.png"),$async$$0)
case 6:s=e
w=7
return C.b(C.fwy(J.eV(J.vw(s)),null),$async$$0)
case 7:r=e
o=$
n=J
w=8
return C.b(r.lG(),$async$$0)
case 8:o.VW=n.a2U(e)
u=1
w=5
break
case 3:u=2
p=t.pop()
$.VW=null
w=5
break
case 2:w=1
break
case 5:return C.h(null,v)
case 1:return C.f(t.at(-1),v)}})
return C.i($async$$0,v)},
$S:49}
A.fKm.prototype={
$4(d,e,f,g){var w,v,u=null,t=e*0.05,s=C.fS(u,u,1,u,C.cX(u,u,u,u,u,u,u,u,u,C.l(u,u,f,u,u,u,u,u,u,u,u,e,u,u,D.u,u,u,!0,u,t,u,u,u,u,u,u),d),D.a6,D.c5,u,D.dP,D.c4)
s.eI()
w=s.b.c
v=this.a
if(w>v){s=C.fS(u,u,1,u,C.cX(u,u,u,u,u,u,u,u,u,C.l(u,u,f,u,u,u,u,u,u,u,u,e*v/w,u,u,D.u,u,u,!0,u,t,u,u,u,u,u,u),d),D.a6,D.c5,u,D.dP,D.c4)
s.eI()}s.a5(this.b,new C.t(this.c+v/2-s.b.c/2,g))},
$S:1801}
A.fKk.prototype={
$1(d){var w,v,u,t,s,r=null,q=this.a,p=this.b,o=d.d-d.b
if(q!=null){w=q.c
v=q.d
u=Math.min((d.c-d.a)/w,o/v)
o=C.bN(d.gbN(),v*u,w*u)
$.V()
t=C.K()
t.Q=D.cf
p.ow(q,new C.a5(0,0,w,v),o,t)}else{s=C.fS(r,r,r,r,C.cX(r,r,r,r,r,r,r,r,r,C.l(r,r,this.c,r,r,r,r,r,r,r,r,o*0.6,r,r,D.u,r,r,!0,r,r,r,r,r,r,r,r),"NGMY"),D.a6,D.c5,r,D.dP,D.c4)
s.eI()
q=d.gbN()
o=s.b
w=o.c
o=o.a.c
s.a5(p,q.aF(0,new C.t(w/2,o.gbc(o)/2)))}},
$S:1802}
A.fKj.prototype={
$4$w(d,e,f,g){var w=null,v=C.fS(w,w,w,w,C.cX(w,w,w,w,w,w,w,w,w,C.l(w,w,this.a,w,w,w,w,w,w,w,w,f,w,w,g,w,w,!0,w,f*0.08,w,w,w,w,w,w),d),D.a6,D.c5,w,D.dP,D.c4)
v.qR(this.b.a*0.9)
v.a5(this.c,e.aF(0,new C.t(v.b.c/2,0)))},
$3(d,e,f){return this.$4$w(d,e,f,D.u)},
$S:1803}
A.fKl.prototype={
$1(d){var w=null,v=this.a.b*0.16
v=C.fS(w,w,w,w,C.cX(w,w,w,w,w,w,w,w,w,C.l(w,w,w,w,w,w,w,w,w,w,w,v,w,w,D.u,w,w,!0,w,v*0.08,w,w,w,w,w,w),d),D.a6,D.c5,w,D.dP,D.c4)
v.eI()
return v.b.c},
$S:704}
A.ftr.prototype={
$2(d,e){return this.a===d?e:0},
$S:705}
A.ftd.prototype={
$1(d){return d.b==="right"},
$S:z+16}
A.fto.prototype={
$0(){var w=C.a([],x.z),v=new A.fk(w)
v.f=1
v.x=$.dQ=$.dQ+1
v.aO(B.h70,B.fVz,B.B0)
v.aY(B.fQD,B.h0y,B.hS,0.5)
v.aO(B.aUE,B.h27,B.B0)
v.aO(B.aUE,B.fZh,B.B0)
return w},
$S:z+82}
A.ftp.prototype={
$1(d){var w=this,v=w.a,u=v.b
A:{if("left"===u){v=A.o8(d,0,1.5707963267948966,new A.r(-w.b/2,0,v.c+w.c/2-40))
break A}if("right"===u){v=A.o8(d,0,-1.5707963267948966,new A.r(w.b/2,0,v.c+w.c/2-40))
break A}v=A.o8(d,0,0,new A.r(v.c,0,0))
break A}return v},
$S:z+83}
A.fte.prototype={
$1(d){return d.b==="back"},
$S:z+16}
A.ftf.prototype={
$1(d){return d.c},
$S:z+84}
A.ftg.prototype={
$2(d,e){return e},
$S:78}
A.fth.prototype={
$3(d,e,f){return I.RI(d,e,0,f+this.a)},
$S:24}
A.ftj.prototype={
$2(a8,a9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this
if(a8==null)return
w=A.aOX(a8)
v=a7.a
u=A.h5f(v,w,a9)
t=u.a
s=u.b
r=u.d
q=t-2.5
p=s-2.5
o=v.p3+a9*2
n=a7.b
m=n.b=730+a9
l=n.x=$.dQ=$.dQ+1
n.e=5
k=v.c==="hall"
if(!(k&&a9<2))j=!k&&v.p1!=="back"
else j=!0
if(j){i=k?a9===1:v.p1==="left"
k=a7.c
h=i?-k/2:k/2
g=i?1:-1
f=u.c
n.aY(new A.r(h+g*1.4,r,f),new A.r(2.6,s+3,t+3),B.Lq,0.5)
n.aY(new A.r(h+g*2.8,r,f),new A.r(0.2,s,t),F.n9,0.7)
if(v.p2){e=h+g*2.95
k=q/2
d=i?f+k:f-k
a0=i?f-k:f+k
k=a7.d
j=p/2
a1=r+j
j=r-j
a2=x.o
a3=320*p/q
k.push(new A.fK(C.a([new A.r(e,a1,d),new A.r(e,a1,a0),new A.r(e,j,a0),new A.r(e,j,d)],a2),m,new A.ftk(o,v,a9),320,a3,9,1,l,!1))
a4=h+g*0.05
k.push(new A.fK(C.a([new A.r(a4,a1,a0),new A.r(a4,a1,d),new A.r(a4,j,d),new A.r(a4,j,a0)],a2),m,new A.ftl(o,v,a9),320,a3,9,1,l,!1))}}else{h=u.c
n.aY(new A.r(h,r,1.4),new A.r(t+3,s+3,2.6),B.Lq,0.5)
n.aY(new A.r(h,r,2.8),new A.r(t,s,0.2),F.n9,0.7)
if(v.p2){k=a7.d
j=q/2
a1=h-j
a2=p/2
a3=r+a2
j=h+j
a2=r-a2
a5=x.o
a6=320*p/q
k.push(new A.fK(C.a([new A.r(a1,a3,2.95),new A.r(j,a3,2.95),new A.r(j,a2,2.95),new A.r(a1,a2,2.95)],a5),m,new A.ftm(o,v,a9),320,a6,9,1,l,!1))
k.push(new A.fK(C.a([new A.r(j,a3,0.05),new A.r(a1,a3,0.05),new A.r(a1,a2,0.05),new A.r(j,a2,0.05)],a5),m,new A.ftn(o,v,a9),320,a6,9,1,l,!1))}}n.e=n.x=0
v=v.p2?"It is on and playing "+E.ki[D.o.F(o,8)].a+". Tap it to watch full screen with the remote.":"The TV is off. Tap it to turn it on."
a7.e.n(0,m,new A.cW(w.b,v,new A.r(0,r,4),110))},
$S:1806}
A.ftk.prototype={
$3(d,e,f){return I.RI(d,e,this.a,f+this.b.a+this.c*3)},
$S:24}
A.ftl.prototype={
$3(d,e,f){return I.RI(d,e,this.a,f+this.b.a+this.c*3)},
$S:24}
A.ftm.prototype={
$3(d,e,f){return I.RI(d,e,this.a,f+this.b.a+this.c*3)},
$S:24}
A.ftn.prototype={
$3(d,e,f){return I.RI(d,e,this.a,f+this.b.a+this.c*3)},
$S:24}
A.ftq.prototype={
$2(d,e){var w=this.a,v=w.f,u=w.r
w.f=1
w.r=!1
w.b=0
w.dQ(new A.r(d,e,0),new A.r(d,e,2.2),0.7,B.Lg,0.7,10)
w.f=v
w.r=u},
$S:256}
A.fti.prototype={
$1(d){return d.b===this.a.a},
$S:z+13}
A.fmE.prototype={
$2(d,e){return this.a===d?e:0},
$S:705}
A.fmF.prototype={
$5(d,e,f,g,h){var w=d.a9(0,e.aI(0,g)).a9(0,new A.r(0,h,0)),v=this.a
A.kD(v,w.a9(0,f.aI(0,0.1)),e,B.e8,26,30,B.ky,f,0)
A.kD(v,w.a9(0,f.aI(0,0.2)),e,B.e8,22,26,B.hS,f,0.6)
A.kD(v,w.a9(0,f.aI(0,0.3)),e,B.e8,22,1.2,B.ky,f,0)
A.kD(v,w.a9(0,f.aI(0,0.3)),e,B.e8,1.2,26,B.ky,f,0)},
$S:z+85}
A.fmA.prototype={
$5(d,e,f,g,h){var w=d.a9(0,e.aI(0,g)),v=this.a,u=v.b
A.kD(v,w.a9(0,new A.r(0,42,0)).a9(0,f.aI(0,0.1)),e,B.e8,34,84,B.ky,f,0)
v.b=h
A.kD(v,w.a9(0,new A.r(0,41,0)).a9(0,f.aI(0,0.2)),e,B.e8,28,80,B.vv,f,0.2)
v.b=0
A.kD(v,w.a9(0,new A.r(0,58,0)).a9(0,f.aI(0,0.3)),e,B.e8,20,26,B.Mf,f,0)
A.kD(v,w.a9(0,new A.r(0,22,0)).a9(0,f.aI(0,0.3)),e,B.e8,20,26,B.Mf,f,0)
v.aY(w.a9(0,e.aI(0,9)).a9(0,new A.r(0,40,0)).a9(0,f.aI(0,1)),new A.r(2.6,2.6,2.6),B.EH,0.8)
v.b=u},
$S:z+86}
A.fmB.prototype={
$5$poster(d,e,f,g,h){var w=C.a([d,e,f,g],x.o),v=h<0?A.h4I():new A.fmC(h),u=h===0,t=u?1000:256
u=u?424:256
return this.a.push(new A.fK(w,0,v,t,u,1,2,this.b,!1))},
$4(d,e,f,g){return this.$5$poster(d,e,f,g,-1)},
$S:z+87}
A.fmC.prototype={
$3(d,e,f){return A.fKi(d,e,f,this.a)},
$S:24}
A.fm1.prototype={
$1(d){var w=d.b
return w==="pole"||w==="lamppost"},
$S:z+3}
A.fm2.prototype={
$2(d,e){return D.k.aL(d.c,e.c)},
$S:z+19}
A.fm3.prototype={
$1(d){return this.a.cy.ai(0,d.a)},
$S:z+3}
A.fme.prototype={
$1(d){return this.a.k4.q(0,d.a)},
$S:z+3}
A.fmp.prototype={
$1(d){return B.eYw.q(0,d.b)},
$S:z+3}
A.fmD.prototype={
$3(d,e,f){var w=this.b
return A.vs(new A.r(d,e,f),this.a).a9(0,new A.r(w.c,0,w.d))},
$S:z+28}
A.fmu.prototype={
$3(d,e,f){return A.nb(d,e,f,this.a.a+D.k.bm(f/7))},
$S:24}
A.fmv.prototype={
$3(d,e,f){return A.nb(d,e,f,this.a.a+D.k.bm(f/7))},
$S:24}
A.fmw.prototype={
$3(d,e,f){return A.GX(d,e,f,"NGMY TOWN",this.a)},
$S:24}
A.fmx.prototype={
$3(d,e,f){return A.GX(d,e,f,"NGMY TOWN",this.a)},
$S:24}
A.fmy.prototype={
$3(d,e,f){return A.nb(d,e,f,this.a.a+D.k.bm(f/7))},
$S:24}
A.fmz.prototype={
$3(d,e,f){return A.nb(d,e,f,this.a.a+4+D.k.bm(f/7))},
$S:24}
A.fm4.prototype={
$3(d,e,f){return A.nb(d,e,f,this.a.a+D.k.bm(f/7))},
$S:24}
A.fm5.prototype={
$3(d,e,f){return A.nb(d,e,f,this.a.a+7+D.k.bm(f/7))},
$S:24}
A.fm6.prototype={
$3(d,e,f){return A.nb(d,e,f,this.a.a+3+D.k.bm(f/7))},
$S:24}
A.fm7.prototype={
$3(d,e,f){return A.nb(d,e,f,this.a.a+5+D.k.bm(f/7))},
$S:24}
A.fm8.prototype={
$3(d,e,f){return A.nb(d,e,f,this.a.a+1+D.k.bm(f/7))},
$S:24}
A.fm9.prototype={
$3(d,e,f){return A.nb(d,e,f,this.a.a+2+D.k.bm(f/7))},
$S:24}
A.fma.prototype={
$3(d,e,f){return A.GX(d,e,f,"NGMY COMPANY","Building the movement")},
$S:24}
A.fmb.prototype={
$3(d,e,f){return A.GX(d,e,f,"NGMY","New Global Movement for Youth")},
$S:24}
A.fmc.prototype={
$3(d,e,f){return A.GX(d,e,f,"NGMY COMPANY","Building the movement")},
$S:24}
A.fmd.prototype={
$3(d,e,f){return A.GX(d,e,f,"NGMY","New Global Movement for Youth")},
$S:24}
A.fmf.prototype={
$3(d,e,f){return A.nb(d,e,f,this.a.a+4+D.k.bm(f/7))},
$S:24}
A.fmg.prototype={
$3(d,e,f){return A.nb(d,e,f,this.a.a+6+D.k.bm(f/7))},
$S:24}
A.fmh.prototype={
$3(d,e,f){return A.nb(d,e,f,this.a.a+2+D.k.bm(f/7))},
$S:24}
A.fmi.prototype={
$3(d,e,f){return A.nb(d,e,f,this.a.a+3+D.k.bm(f/7))},
$S:24}
A.fmj.prototype={
$3(d,e,f){return A.GX(d,e,f,"NGMY STORE","Everything you need")},
$S:24}
A.fmk.prototype={
$3(d,e,f){return A.GX(d,e,f,"NGMY UBER","Rides home")},
$S:24}
A.fml.prototype={
$3(d,e,f){return A.GX(d,e,f,"NGMY UBER","Rides home")},
$S:24}
A.fmm.prototype={
$3(d,e,f){return A.GX(d,e,f,"NGMY LICENCE","Get your Uber licence")},
$S:24}
A.fmn.prototype={
$3(d,e,f){return A.GX(d,e,f,"NGMY GAS","Open 24 hours")},
$S:24}
A.fmo.prototype={
$3(d,e,f){return A.nb(d,e,f,this.a.a*2+this.b+1)},
$S:24}
A.fmq.prototype={
$1(d){return d.b===this.a.a&&!d.x&&d.Q.length!==0},
$S:z+13}
A.fmr.prototype={
$1(d){return d.b===this.a.a&&d.x},
$S:z+13}
A.fms.prototype={
$3(d,e,f){return A.fKi(d,e,f,0)},
$S:24}
A.fmt.prototype={
$3(d,e,f){return A.fKi(d,e,f,0)},
$S:24}
A.fwo.prototype={
$1(d){return D.d.q(B.Hw,d.b)},
$S:z+3}
A.fwp.prototype={
$1(d){return d.b===this.a.a},
$S:z+13}
A.fwq.prototype={
$1(d){return d.b===this.a.a},
$S:z+13}
A.fcY.prototype={
$5(d,e,f,g,h){var w,v,u,t,s,r,q,p,o,n,m,l,k,j
for(w=d.length,v=x.z,u=this.a,t=-f/2,s=u.a,r=this.b,q=0,p=0;p<w;++p){o=d[p]
n=o.a
m=C.a([],v)
l=new A.fk(m)
l.b=u.b
l.f=u.f
l.r=!0
l.aO(new A.r(0,t,0),new A.r(g,f,g),h)
k=(q&1)===0?1:-1
j=n>0?1:-1
D.d.v(s,A.o8(m,r*k*j,0,new A.r(n,e,o.b)));++q}},
$S:1807}
A.fcO.prototype={
$3(d,e,f){var w=this.a,v=this.b,u=this.c
return new A.r(w.c+v*d+u*f,e,w.d+u*d-v*f)},
$2(d,e){return this.$3(d,e,0)},
$S:z+88}
A.fnb.prototype={
$3(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k=x.z,j=C.a([],k),i=new A.fk(j)
i.b=this.a
i.r=!0
d.$1(i)
k=C.a([],k)
for(j=A.fr3(j,e,B.f_),w=j.length,v=f.a,u=f.b,t=f.c,s=x.o,r=0;r<j.length;j.length===w||(0,C.M)(j),++r){q=j[r]
p=C.a([],s)
for(o=q.a,n=o.length,m=0;m<o.length;o.length===n||(0,C.M)(o),++m){l=o[m]
p.push(new A.r(l.a+v,l.b+u,l.c+t))}k.push(new A.lP(p,q.b,q.c,q.d,q.e,q.f,q.r,q.w,q.x,q.y,q.z))}D.d.v(this.b.a,k)},
$S:z+89}
A.fmY.prototype={
$5(d,e,f,g,h){var w=this.a
w.bcW(d,e,f,h,!1,g,10)
w.fo(e,g*1.04,h,4,8)},
$S:z+90}
A.fmZ.prototype={
$1(d){return d.fT(B.f_,2.6,B.XO,4,8,0.15)},
$S:z+6}
A.fn_.prototype={
$1(d){return d.fo(B.f_,2.6,D.bO,3,8)},
$S:z+6}
A.fn0.prototype={
$1(d){return d.fo(B.f_,5.2,this.a,4,10)},
$S:z+6}
A.fn3.prototype={
$1(d){return d.bcW(B.f_,B.a9J,4.9,this.a,!1,6.5,12)},
$S:z+6}
A.fn4.prototype={
$1(d){return d.aEv(B.f_,B.h_D,5.1,B.bdA,!1,12)},
$S:z+6}
A.fn5.prototype={
$1(d){return d.fo(B.f_,6.7,this.a,4,10)},
$S:z+6}
A.fn6.prototype={
$1(d){return d.fo(B.f_,4.7,this.a,6,12)},
$S:z+6}
A.fn7.prototype={
$1(d){return d.fo(B.f_,3,this.a,4,8)},
$S:z+6}
A.fn8.prototype={
$1(d){return d.fo(B.f_,5,this.a,5,10)},
$S:z+6}
A.fn9.prototype={
$1(d){return d.fo(B.f_,3.6,this.a,3,8)},
$S:z+6}
A.fna.prototype={
$1(d){return d.fo(B.f_,1,D.c,3,6)},
$S:z+6}
A.fn1.prototype={
$1(d){return d.fo(B.f_,1,this.a,3,6)},
$S:z+6}
A.fn2.prototype={
$1(d){return d.fo(B.f_,1.9,this.a,4,8)},
$S:z+6}
A.fgM.prototype={
$4(d,e,f,g){var w,v,u,t,s,r,q,p
for(w=this.a,v=e/2+0.2,u=d-8,t=-e/2-0.2,s=d/2+0.2,r=e-8,q=-d/2-0.2,p=f;p<g;p+=22){A.kD(w,new A.r(0,p,v),B.hy,B.e8,u,9,B.hS,B.ij,0.6)
A.kD(w,new A.r(0,p,t),B.qG,B.e8,u,9,B.hS,B.t8,0.6)
A.kD(w,new A.r(s,p,0),B.t8,B.e8,r,9,B.hS,B.hy,0.6)
A.kD(w,new A.r(q,p,0),B.ij,B.e8,r,9,B.hS,B.qG,0.6)}},
$S:1808}
A.ftw.prototype={
$4$alongX(d,e,f,g){var w,v,u,t,s,r,q,p,o,n
for(w=this.a,v=0;v<=f;++v){u=A.o_(d,e,v/f)
w.aDg(new A.r(u.a,4,u.c),B.h7y,B.XC,!1,0.05)}t=A.o_(d,e,0.5)
for(s=e.aF(0,d).guN()+0.15,r=t.a,q=t.c,p=0;p<2;++p){o=B.dbC[p]
n=g?new A.r(s,0.16,0.3):new A.r(0.3,0.16,s)
w.aY(new A.r(r,o,q),n,B.XC,0.05)}},
$3(d,e,f){return this.$4$alongX(d,e,f,!0)},
$S:z+92}
A.ftt.prototype={
$2(d,e){return this.a.jf(A.GY(d,0.35,3),0.06,e,!1,0.4,6)},
$S:z+93}
A.fts.prototype={
$1(d){return this.a.jf(A.GY(d,0.5,3),0.14,B.pN,!1,0.3,8)},
$S:z+94}
A.ftv.prototype={
$2$col(d,e){return this.a.jf(A.GY(d,0.4,3),0.055,e,!1,0.35,6)},
$1(d){return this.$2$col(d,B.XK)},
$S:z+95}
A.ftu.prototype={
$5$h$w(d,e,f,g,h){var w=this.a
w.b=d
w.aY(e,new A.r(h,g,0.06),f,0.3)},
$3(d,e,f){return this.$5$h$w(d,e,f,0.7,0.45)},
$4$w(d,e,f,g){return this.$5$h$w(d,e,f,0.7,g)},
$S:z+96}
A.fur.prototype={
$0(){return A.fU(1320,120,0.25,"tri")},
$S:0}
A.dPx.prototype={
$1(d){return this.a},
$S:38}
A.dPy.prototype={
$0(){return C.a3(this.a,!1).ib()},
$S:0}
A.dPz.prototype={
$0(){return this.a.ru(A.b_Z("","",!1))},
$S:0}
A.dPA.prototype={
$0(){return this.a.ru(B.dyI)},
$S:0}
A.dPE.prototype={
$0(){return this.a.ru(A.b_Z("wiring","",!1))},
$S:0}
A.dPF.prototype={
$0(){return this.a.ru(A.b_Z("plumbing","",!1))},
$S:0}
A.dPG.prototype={
$0(){return this.a.ru(A.b_Z("fix","",!1))},
$S:0}
A.dPH.prototype={
$0(){return this.a.ru(A.cgt(!1,null,!1))},
$S:0}
A.dPI.prototype={
$0(){return this.a.ru(A.cgt(!1,null,!0))},
$S:0}
A.dPJ.prototype={
$0(){return this.a.ru(B.e3o)},
$S:0}
A.dPK.prototype={
$0(){return this.a.ru(new A.art(!1,null))},
$S:0}
A.dPL.prototype={
$0(){return this.a.ru(B.dIJ)},
$S:0}
A.dPB.prototype={
$0(){var w=this.b.a
w=w==="house"?B.hbt:A.b_Z("",w,!1)
return this.a.ru(w)},
$S:0}
A.dPC.prototype={
$0(){return this.a.ru(B.dFs)},
$S:0}
A.dPD.prototype={
$0(){return this.a.ru(B.aGr)},
$S:0}
A.f1e.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new A.f1d())},
$S:11}
A.f1d.prototype={
$0(){},
$S:0}
A.cuw.prototype={
$0(){$.aj2=!$.aj2
A.h7I()
A.fU($.aj2?520:420,60,0.25,"tri")},
$S:0}
A.cux.prototype={
$0(){$.aj1=!$.aj1
A.h7I()
A.fU($.aj1?520:420,60,0.25,"tri")},
$S:0}
A.fLt.prototype={
$1(d){var w,v,u,t,s,r,q,p,o=null,n=C.aH(d,o,x.w).w,m=this.b,l=this.c,k=l.length,j=x.p,i=C.a([C.d(this.a,o,o,o,o,o,o,D.de,o,o,o),D.av,C.d(""+new C.Z(m,new A.fLs(),C.S(m).k("Z<1>")).gL(0)+" of "+k+" steps done",o,o,o,o,o,o,B.JC,o,o,o),D.R],j)
for(w=0;w<k;++w){v=D.c.j(0.05)
u=new C.aQ(14,14)
t=new C.ay(m[w]?D.bm.j(0.6):D.bz,1,D.r,-1)
s=m[w]
r=s?"\u2705":""+(w+1)+"."
q=s?D.c:D.aE
p=l[w]
s=s?D.aB:D.c
i.push(C.p(o,new C.cb(D.aN,D.e,D.j,D.E,o,D.p,o,0,C.a([new C.y(r,o,new C.F(!0,q,o,o,o,o,14,D.u,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),o,o,o,o,o,o,o,o,o),D.as,new C.bA(1,D.bd,new C.y(p,o,new C.F(!0,s,o,o,o,o,13,o,o,o,o,o,1.4,o,o,o,o,o,o,o,o,o,o,o,o,o),o,o,o,o,o,o,o,o,o),o)],j),o),D.f,o,o,new C.o(v,o,new C.bI(t,t,t,t),new C.bk(u,u,u,u),o,o,D.n),o,o,o,D.ct,D.bh,o,o,o))}return C.bm(!0,new C.cT(new C.aY(0,1/0,0,n.a.b*0.75),C.cq(i,o,D.bQ,o,o,D.ag,!0),o),!0,!1,D.af,!0,!0)},
$S:26}
A.fLs.prototype={
$1(d){return d},
$S:124}
A.bVu.prototype={
$0(){return C.a3(this.a,!1).ib()},
$S:0}
A.d81.prototype={
$0(){var w=this.a,v=w.gep(0),u=this.b
v.r=u==="practice"
u=u==="test"
v.y=u
if(u)v.f=v.e=!1
w.qw()},
$S:0}
A.d8_.prototype={
$0(){var w=this.a
w.y=this.b
w.z=this.c},
$S:0}
A.d80.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.d7Z(w))},
$S:0}
A.d7Z.prototype={
$0(){return this.a.y=null},
$S:0}
A.d7N.prototype={
$0(){return this.a.x=0},
$S:0}
A.d7O.prototype={
$0(){return this.a.x=0},
$S:0}
A.d7M.prototype={
$1(d){var w=this.a.gep(0).b
return new C.bc(w,C.a6(w).k("bc<2>")).q(0,d)},
$S:3}
A.d7P.prototype={
$1(d){return d.a===this.a},
$S:z+12}
A.d7Q.prototype={
$2(d,e){return e===this.a},
$S:437}
A.d7R.prototype={
$0(){var w=this.a
w.w=""
w.qw()},
$S:0}
A.d7S.prototype={
$1(d){return d.a===this.a},
$S:z+7}
A.d7T.prototype={
$0(){var w=this.a,v=this.b
if(w.w===v)v=""
w.w=v
w.x=v.length===0?0:this.c},
$S:0}
A.d7U.prototype={
$1(d){return d.a===this.a},
$S:z+7}
A.d7V.prototype={
$0(){var w=this.a
w.qw()
w.x=this.b},
$S:0}
A.d7W.prototype={
$0(){var w=this.a
w.qw()
w.x=this.b},
$S:0}
A.d7X.prototype={
$0(){return this.a.x=this.b},
$S:0}
A.d7Y.prototype={
$0(){var w=this.a,v=w.gep(0),u=v.a
v.a=!u
if(u)v.d=!1
w.qw()},
$S:0}
A.d82.prototype={
$0(){var w,v=this.a,u=v.gep(0)
u.a=!0
u.d=!1
w=this.b
if(w.e)u.w=!0
u.z=w.r
v.ax=v.at.gik()/1000
v.qw()},
$S:0}
A.d83.prototype={
$0(){var w=this.a,v=w.gep(0)
v.d=v.a=!0
w.qw()},
$S:0}
A.d8c.prototype={
$1(d){return!d},
$S:124}
A.d8l.prototype={
$0(){var w=this.a.gyY()
return A.fLr(this.b,w.b,w.d,this.c)},
$S:0}
A.d8s.prototype={
$1(d){var w,v,u,t,s=C.a([],x.z),r=this.a,q=r.gep(0),p=q.z
if(p.length!==0){p=r.at.gik()
w=r.ax
v=q.z
u=v==="fire"?7:4.5
t=p/1000-w<u
p=v}else t=!1
if(!t)q=q.w&&p.length!==0
else q=!0
if(q){q=t?p:"smolder"
A.hoh(new A.fk(s),q,new A.d89(),0.32,r.at.gik()/1000)}return s},
$S:z+10}
A.d89.prototype={
$1(d){return new A.r(d.a*0.32,-0.2+d.b*0.32,0.8+d.c*0.32)},
$S:z+5}
A.d8d.prototype={
$0(){return this.a.aAi("learn")},
$S:0}
A.d8e.prototype={
$0(){return this.a.aAi("practice")},
$S:0}
A.d8m.prototype={
$0(){return this.a.aAi("test")},
$S:0}
A.d8n.prototype={
$0(){var w=this.a
return w.m(new A.d8b(w))},
$S:0}
A.d8b.prototype={
$0(){var w=this.a,v=w.gep(0)
v.e=!v.e
w.qw()},
$S:0}
A.d8o.prototype={
$0(){var w=this.a
return w.m(new A.d8a(w))},
$S:0}
A.d8a.prototype={
$0(){var w=this.a,v=w.gep(0)
v.f=!v.f
w.qw()},
$S:0}
A.d8p.prototype={
$0(){return A.h55(this.a)},
$S:0}
A.d8q.prototype={
$0(){var w=this.a,v=w.gij()
return v.hP(10,0.2,new A.r(0.6,0,w.gep(0).c===0?4.2:0.4),-0.95)},
$S:0}
A.d8r.prototype={
$0(){var w=this.a,v=w.gij()
return v.hP(10,0.2,new A.r(-0.6,0,w.gep(0).c===0?4.2:0.4),0.95)},
$S:0}
A.d8t.prototype={
$1(d){return!this.a.gep(0).b.iH(0,d.a)},
$S:z+7}
A.d8f.prototype={
$0(){var w=this.a,v=this.b,u=v.a
if(w.gep(0).b.iH(0,u)){w.ny("That wire is already fastened. Tap the wire in the 3D view to take it off if you want to move it.")
return}w.m(new A.d88(w,v))
if(w.w.length!==0){w.aX4(u)
w.j7(v.b+": now tap the screw it belongs on.",!0)}},
$S:0}
A.d88.prototype={
$0(){var w=this.a,v=this.b.a
return w.w=w.w===v?"":v},
$S:0}
A.d8g.prototype={
$0(){var w=this.a,v=w.gyY(),u=v.b,t=A.fKZ(v)
w=w.gep(0)
w=C.a([new A.aaR(u,t,A.h2s(v,w),w.x)],x.fJ)
v=B.aFd.h(0,v.a)
if(v==null)v=B.ayv
return A.hsB(this.b,w,v,u)},
$S:0}
A.d8h.prototype={
$0(){var w=this.a
w.m(new A.d87(w))
A.yE()
w.j7("The wires are folded back and the device is pushed into the box. Now put the cover plate on.",!0)
w.of()},
$S:0}
A.d87.prototype={
$0(){var w=this.a
w.gep(0).c=1
w.qw()},
$S:0}
A.d8i.prototype={
$0(){var w=this.a
w.m(new A.d86(w))
w.of()},
$S:0}
A.d86.prototype={
$0(){var w=this.a
w.gep(0).c=0
w.qw()},
$S:0}
A.d8j.prototype={
$0(){var w=this.a
w.m(new A.d85(w))
A.yE()
w.j7("Cover plate on. Now turn the power on and test.",!0)},
$S:0}
A.d85.prototype={
$0(){var w=this.a
w.gep(0).c=2
w.qw()},
$S:0}
A.d8k.prototype={
$0(){var w=this.a
w.m(new A.d84(w))
w.of()},
$S:0}
A.d84.prototype={
$0(){var w=this.a,v=w.gep(0)
v.c=0
v.b.a8(0)
v.a=!0
v.w=v.d=!1
v.z=""
w.Q=0
w.w=""
w.x=0
w.qw()},
$S:0}
A.eRF.prototype={
$0(){var w=this.a
w.x=this.b
w.y=this.c},
$S:0}
A.eRG.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.eRE(w))},
$S:0}
A.eRE.prototype={
$0(){return this.a.x=null},
$S:0}
A.eRy.prototype={
$0(){return this.a.w=0},
$S:0}
A.eRz.prototype={
$0(){var w=this.a,v=w.gep(0)
v.a.M(0,this.b)
v.c=!1
v.d=""
w.f=A.bBj(v)
w.r=""},
$S:0}
A.eRA.prototype={
$0(){var w=this.a,v=w.gep(0)
v.b.n(0,this.b,!0)
v.d=""
w.f=A.bBj(v)},
$S:0}
A.eRB.prototype={
$0(){return this.a.w=this.b},
$S:0}
A.eRC.prototype={
$1(d){return this.a.gep(0).b.h(0,d)!==!0},
$S:3}
A.eRD.prototype={
$0(){var w,v=this.a,u=v.gep(0)
u.c=!0
w=this.b
u.d=w.length===0?"":D.d.gI(w)
v.f=A.bBj(u)},
$S:0}
A.eRK.prototype={
$1(d){return!d},
$S:124}
A.eRO.prototype={
$0(){return A.fLr(this.a,"Sink drain (P-trap)",B.deb,this.b)},
$S:0}
A.eRL.prototype={
$1(d){return A.icS(this.a.gep(0),d)},
$S:z+10}
A.eRM.prototype={
$0(){var w=this.a
return w.m(new A.eRJ(w,this.b))},
$S:0}
A.eRJ.prototype={
$0(){var w=this.a,v=this.b
return w.r=w.r===v?"":v},
$S:0}
A.eRN.prototype={
$0(){var w=this.a
w.m(new A.eRI(w))
w.of()},
$S:0}
A.eRI.prototype={
$0(){var w,v=this.a,u=v.gep(0)
u.a.a8(0)
w=u.b
w.aIV(w,new A.eRH())
u.c=!1
v.r=u.d=""
v.w=0
v.f=A.bBj(u)},
$S:0}
A.eRH.prototype={
$2(d,e){return!1},
$S:1810}
A.db3.prototype={
$0(){var w=this.a
w.x=this.b
w.y=this.c},
$S:0}
A.db4.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.db2(w))},
$S:0}
A.db2.prototype={
$0(){return this.a.x=null},
$S:0}
A.daW.prototype={
$0(){return this.a.w=0},
$S:0}
A.daZ.prototype={
$1(d){return d.a===this.a},
$S:z+41}
A.db_.prototype={
$0(){var w=this.a,v=w.gep(0)
v.f=!1
w.f=A.aOZ(v)
w.w=this.b},
$S:0}
A.db0.prototype={
$0(){var w=this.a,v=w.gep(0),u=v.e
u.bt(u,new A.daY(this.b))
v.f=!1
w.f=A.aOZ(v)},
$S:0}
A.daY.prototype={
$2(d,e){return e===this.a},
$S:437}
A.db1.prototype={
$0(){return this.a.w=this.b},
$S:0}
A.daX.prototype={
$0(){var w=this.a,v=w.gep(0)
v.f=!v.f
w.f=A.aOZ(v)},
$S:0}
A.db8.prototype={
$1(d){return!d},
$S:124}
A.dbe.prototype={
$0(){return A.fLr(this.a,"Faucet supply lines",B.dqE,this.b)},
$S:0}
A.db9.prototype={
$1(d){return A.i3D(this.a.gep(0),d)},
$S:z+10}
A.dba.prototype={
$0(){var w=this.a
return w.m(new A.db7(w))},
$S:0}
A.db7.prototype={
$0(){var w=this.a,v=w.gep(0)
v.r=!v.r
w.f=A.aOZ(v)},
$S:0}
A.dbc.prototype={
$0(){var w=this.b
return w.m(new A.db6(this.a,w))},
$S:0}
A.db6.prototype={
$0(){var w=this.b,v=w.r,u=this.a.a
return w.r=v===u?"":u},
$S:0}
A.dbb.prototype={
$1(d){return d===this.a.a},
$S:3}
A.dbd.prototype={
$0(){var w=this.a
w.m(new A.db5(w))
w.of()},
$S:0}
A.db5.prototype={
$0(){var w=this.a,v=w.gep(0)
v.e.a8(0)
v.f=!1
w.r=""
w.w=0
w.f=A.aOZ(v)},
$S:0}
A.di7.prototype={
$0(){var w=this.a
w.x=this.b
w.y=this.c},
$S:0}
A.di8.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.di6(w))},
$S:0}
A.di6.prototype={
$0(){return this.a.x=null},
$S:0}
A.di1.prototype={
$0(){return this.a.r=0},
$S:0}
A.di3.prototype={
$0(){var w=this.a,v=w.d
v.d.W(0,72)
w.f=A.ago(v)
w.r=this.b},
$S:0}
A.di4.prototype={
$0(){var w=this.a,v=w.d
v.c=!0
v.b=!1
w.f=A.ago(v)
w.r=this.b},
$S:0}
A.di5.prototype={
$0(){return this.a.r=this.b},
$S:0}
A.di2.prototype={
$1(d){return this.a},
$S:38}
A.dig.prototype={
$0(){return A.fLr(this.a,"Fix the house",B.cny,this.b)},
$S:0}
A.dib.prototype={
$0(){return this.a.ceA(this.b)},
$S:0}
A.did.prototype={
$1(d){return d<=this.a.d.a},
$S:34}
A.dic.prototype={
$1(d){return A.hoy(this.a.d,d)},
$S:z+10}
A.die.prototype={
$0(){var w=this.a
return w.m(new A.dia(w))},
$S:0}
A.dia.prototype={
$0(){var w=this.a
return w.w=w.w==="wrench"?"":"wrench"},
$S:0}
A.dif.prototype={
$1(d){var w=this.a
return w.m(new A.di9(w,d))},
$S:7}
A.di9.prototype={
$0(){var w=this.a,v=w.d,u=D.k.V(this.b)
v.a=u
if(u<5)w.r=0
w.f=A.ago(v)},
$S:0}
A.fcw.prototype={
$0(){return this.a.e=!1},
$S:0}
A.fcu.prototype={
$0(){return this.a.e=!0},
$S:0}
A.fcv.prototype={
$0(){var w=this.a
w.d=C.dm(B.bu8,new A.fct(w))},
$S:0}
A.fct.prototype={
$1(d){var w=this.a.a,v=w.e
return v.aoZ(w.f?1.06:0.94)},
$S:11}
A.fcy.prototype={
$1(d){return this.a.c6Q(0)},
$S:76}
A.fcz.prototype={
$1(d){return this.a.b6K()},
$S:128}
A.fcx.prototype={
$1(d){return this.a.b6K()},
$S:171}
A.ca2.prototype={
$0(){return C.a3(this.a,!1).ib()},
$S:0}
A.fu7.prototype={
$5(d,e,f,g,h){var w=this.a.a.q(0,h),v=this.b
v.b=d
if(w)v.a6K(e,0.66,f,!1,!0,!0,g,14)
else{v.d=0.3
v.aIS(e,0.74,D.b2,!1,!0,0,8)
v.d=1}},
$S:z+98}
A.fu6.prototype={
$6(d,e,f,g,h,i){var w,v
if(!i)return
w=this.a.b.h(0,e)
v=w===!0?f:f.a9(0,h)
w=this.b
w.e=0.5
w.b=d
w.dQ(v.aF(0,g.aI(0,0.6)),v.a9(0,g.aI(0,0.6)),1.12,B.pN,0.35,8)
w.zj(v.aF(0,g.aI(0,0.62)),v.aF(0,g.aI(0,0.5)),1.2,0.5,B.X_,0.2,8)
w.b=0
w.zj(f.aF(0,g.aI(0,0.05)),f.a9(0,g.aI(0,0.08)),0.82,0.55,B.bmE,0.1,12)
w.e=0},
$S:z+99}
A.fu5.prototype={
$1(d){return d.b<-0.6},
$S:z+22}
A.ftc.prototype={
$1(d){return this.a.e.h(0,d)===this.b},
$S:34}
A.fvO.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=A.agB(d)
for(w=this.a*1.6,v=this.b,u=p.a,t=p.b,s=p.c,r=0;r<7;++r){q=D.k.F(w+r/7,1)
v.fT(new A.r(u+Math.sin(r*2.1)*q*1.4,t+(q*2.4-q*q*6.5),s+(1+q*2.5)),0.2,e,3,6,0.9)}},
$S:1811}
A.fvN.prototype={
$1(d){return this.a.e.h(0,d.a)!=null},
$S:z+41}
A.cl1.prototype={
$1(d){return d.a===this.a},
$S:z+100}
A.cl2.prototype={
$1(d){return d.a===this.a},
$S:z+1}
A.ckZ.prototype={
$1(d){return this.a.vf(0,d).c.toLowerCase()},
$S:14}
A.cl3.prototype={
$1(d){var w
if(!this.a.e.q(0,d.a)){w=d.b
w=w==="valve"||D.a.a0(w,"hose")}else w=!1
return w},
$S:z+1}
A.cl4.prototype={
$1(d){var w=this.a,v=d.a
return w.e.q(0,v)&&w.aGJ(v)>0},
$S:z+1}
A.cl5.prototype={
$1(d){return d.a},
$S:z+24}
A.cl6.prototype={
$1(d){return d.a},
$S:z+24}
A.cl_.prototype={
$1(d){return this.a.e.q(0,d.a)},
$S:z+1}
A.cl0.prototype={
$1(d){var w=this.a,v=d.a
return w.aGJ(v)<=0||!w.e.q(0,v)},
$S:z+1}
A.fu4.prototype={
$1(d){var w=this.a
w.b=0
w.dQ(new A.r(d,8,0),new A.r(d,8,1.6),0.5,B.Lg,0.7,10)},
$S:7}
A.fu2.prototype={
$1(d){var w,v,u,t,s,r,q=C.a([],x.o)
for(w=d.length,v=this.a,u=v.a,t=v.b,v=v.c,s=0;s<d.length;d.length===w||(0,C.M)(d),++s){r=d[s]
q.push(new A.r(r.a+u,r.b+t,r.c+v))}return q},
$S:z+103}
A.ftX.prototype={
$3$r(d,e,f){var w=this.a,v=this.b.c
v===$&&C.c()
w.b=9100+D.d.bg(v.c,new A.fu_(d))
w.d=0.32
w.aIS(e,f,D.b2,!1,!0,0,8)
w.d=1},
$2(d,e){return this.$3$r(d,e,1.2)},
$S:z+104}
A.fu_.prototype={
$1(d){return d.a===this.a},
$S:z+1}
A.ftY.prototype={
$3(d,e,f){var w=this.a,v=this.b.c
v===$&&C.c()
w.b=9100+D.d.bg(v.c,new A.ftZ(d))
w.d=0.32
w.aO(e,f,D.b2)
w.d=1},
$S:z+105}
A.ftZ.prototype={
$1(d){return d.a===this.a},
$S:z+1}
A.fu3.prototype={
$3(d,e,f){var w,v,u,t=this,s=t.a,r=s.c
r===$&&C.c()
w=D.d.cD(r.c,d)
r=d.c
v=s.e
u=d.a
if(v.q(0,u))s="Fitted."
else{s=s.b?"":d.e
s="A spot for the "+r.toLowerCase()+". "+s}t.b.n(0,9100+w,new A.cW(r,s,e,26))
if(t.c&&!v.q(0,u)&&t.d.length!==0)t.e.push(new A.hf(e.a9(0,B.fSs),f,D.f5,0))},
$S:z+106}
A.ftT.prototype={
$0(){return this.a.$3(this.b.a,new A.r(this.c-10,9,2.4),B.a9Q)},
$S:0}
A.ftU.prototype={
$0(){return this.a.$3(this.b.a,new A.r(this.c-8,9,2.4),B.a9Q)},
$S:0}
A.ftV.prototype={
$0(){return this.a.$3(this.b.a,new A.r(this.c+8,9,2.4),B.a9Q)},
$S:0}
A.fu0.prototype={
$4(d,e,f,g){var w,v,u,t,s=this
if(D.d.bg(s.a,new A.fu1(d))<0||!s.b.e.q(0,d))return
w=s.b.f.h(0,d)
v=(w==null?0:w)>=1
w=s.c
u=9260+g
w.b=u
t=v?e:e.a9(0,f.aI(0,1.7))
w.dQ(t.aF(0,f.aI(0,0.6)),t.a9(0,f.aI(0,0.6)),1.12,B.pN,0.35,8)
w.zj(t.aF(0,f.aI(0,0.62)),t.aF(0,f.aI(0,0.5)),1.2,0.5,B.X_,0.2,8)
w=v?"Tight.":"Loose. Tap it with the wrench to tighten it."
s.d.n(0,u,new A.cW("Slip nut",w,e,10))},
$S:z+107}
A.fu1.prototype={
$1(d){return d.a===this.a},
$S:z+1}
A.ftW.prototype={
$1(d){return d.a===this.a},
$S:z+1}
A.fKA.prototype={
$1(d){return d.a===this.a},
$S:z+1}
A.elE.prototype={
$0(){var w=this.a
w.z=this.b
w.Q=this.c},
$S:0}
A.elF.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.elD(w))},
$S:0}
A.elD.prototype={
$0(){return this.a.z=null},
$S:0}
A.elx.prototype={
$0(){return this.a.y=0},
$S:0}
A.elJ.prototype={
$1(d){return d.a===this.a},
$S:z+1}
A.elm.prototype={
$0(){return this.a.y=this.b},
$S:0}
A.eln.prototype={
$0(){var w=this.a
w.ZG()
w.y=this.b},
$S:0}
A.elo.prototype={
$1(d){return this.a.c6R()},
$S:9}
A.elt.prototype={
$1(d){var w,v=null,u=this.a,t=u.e
t===$&&C.c()
w=t.c
w===$&&C.c()
t=C.d("The "+w.b.toLowerCase()+" is finished and nothing leaks.\n\nMistakes: "+t.w+"\n\nThe next job is different.",v,v,v,v,v,v,B.a8J,v,v,v)
return C.el(C.a([C.bK(!1,B.aTe,v,v,!0,v,v,new A.elr(d),v,v),C.bH(B.fyF,new A.els(u,d),v)],x.p),v,v,E.nd,t,v,v,v,v,B.fAj,v)},
$S:18}
A.elr.prototype={
$0(){C.a3(this.a,!1).N(null)
return null},
$S:0}
A.els.prototype={
$0(){C.a3(this.b,!1).N(null)
this.a.aY6()},
$S:0}
A.elC.prototype={
$0(){var w,v,u=this.a
u.d=D.o.F(Date.now(),1e5)
w=u.gCO(0)
v=u.e
v===$&&C.c()
u.e=A.fYT(v.b,w,null)
u.x=""
u.as=!1
u.z=null
u.y=0
u.ZG()},
$S:0}
A.elK.prototype={
$1(d){return d.b===this.a},
$S:z+1}
A.elu.prototype={
$1(d){var w=this.a.e
w===$&&C.c()
return w.x.q(0,d.a)},
$S:z+1}
A.elv.prototype={
$1(d){return d.c.toLowerCase()},
$S:z+24}
A.elw.prototype={
$1(d){var w=this.a.e
w===$&&C.c()
return w.aGJ(d.a)>0},
$S:z+1}
A.elG.prototype={
$0(){var w=this.b
w.x=this.a.b
w.ZG()},
$S:0}
A.elH.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
A.elI.prototype={
$0(){return this.a.y=this.b},
$S:0}
A.elq.prototype={
$0(){var w=this.a
return w.m(new A.elp(w,this.b,this.c))},
$S:0}
A.elp.prototype={
$0(){var w=this.a
w.x=this.b?"":this.c
w.ZG()},
$S:0}
A.elL.prototype={
$1(d){var w=this.a.e
w===$&&C.c()
return w.e.q(0,d.a)},
$S:z+1}
A.elP.prototype={
$0(){return this.a.c0M(this.b)},
$S:0}
A.elN.prototype={
$1(d){return d<=5},
$S:34}
A.elM.prototype={
$1(d){var w=this.a,v=w.e
v===$&&C.c()
return A.icK(v,w.w.gik()/1000)},
$S:z+10}
A.elO.prototype={
$0(){return this.b.cwT(this.a.a)},
$S:0}
A.elB.prototype={
$1(d){var w,v,u,t,s,r,q,p=null,o=this.a,n=o.e
n===$&&C.c()
w=x.p
n=C.a([B.fM9,D.av,C.d("Mistakes "+n.w,p,p,p,p,p,p,B.JC,p,p,p),D.R],w)
v=o.e.c
v===$&&C.c()
v=v.c
u=v.length
t=0
for(;t<u;++t){s=v[t]
r=D.c.j(0.05)
q=new C.aQ(12,12)
n.push(C.p(p,new C.y((o.e.e.q(0,s.a)?"\u2705":"\ud83d\udd27")+" "+s.c,p,B.f9C,p,p,p,p,p,p,p,p,p),D.f,p,p,new C.o(r,p,p,new C.bk(q,q,q,q),p,p,D.n),p,p,p,D.eG,D.bT,p,p,p))}n.push(D.am)
n.push(B.fqi)
n.push(D.N)
n.push(C.B(C.a([B.bC0,C.XX(p,p,p,p,!1,D.y,p,p,p,p,p,p,new A.elz(o,d),p,p,p,p,p,p,p,p,o.e.b)],w),D.m,p,D.e,D.j,0,p,p))
n.push(C.bH(B.aTg,new A.elA(o,d),p))
return C.bm(!0,C.cq(n,p,D.bQ,p,p,D.ag,!0),!0,!1,D.af,!0,!0)},
$S:26}
A.elz.prototype={
$1(d){var w=this.a
w.m(new A.ely(w,d))
C.a3(this.b,!1).N(null)},
$S:8}
A.ely.prototype={
$0(){var w=this.a,v=w.e
v===$&&C.c()
v.b=this.b
w.ZG()},
$S:0}
A.elA.prototype={
$0(){C.a3(this.b,!1).N(null)
this.a.aY6()},
$S:0}
A.fSX.prototype={
$1(d){return d.a===this.a},
$S:z+42}
A.cpY.prototype={
$1(d){return D.d.q(B.jS,d.b)},
$S:z+8}
A.cq4.prototype={
$1(d){return!this.a.y.q(0,d)},
$S:34}
A.cq5.prototype={
$1(d){var w=this.a
return w.x.ai(0,d)&&w.z.q(0,d)},
$S:34}
A.cq6.prototype={
$1(d){var w=$.H5()[this.b],v=!1
if(w>=d)if(w<=d+48){w=this.a.Q.h(0,d)
w=(w==null?null:w.a)===!0}else w=v
else w=v
return w},
$S:34}
A.cq7.prototype={
$1(d){return this.a.Q.h(0,d).c.q(0,this.b)},
$S:34}
A.cq9.prototype={
$1(d){var w,v=J.e4(6,x.S)
for(w=0;w<6;++w)v[w]=w
return D.d.d9(v,new A.cq8(this.a,d))},
$S:34}
A.cq8.prototype={
$1(d){return this.a.c.q(0,this.b*10+d)},
$S:34}
A.cpX.prototype={
$1(d){var w=this.a.Q.h(0,d)
return(w==null?null:w.a)===!0},
$S:34}
A.cpV.prototype={
$1(d){return!A.jU(d).c},
$S:34}
A.cpW.prototype={
$1(d){var w=this.a.apK(A.jU(d).d.a)
return(w==null?null:w.b.q(0,d))===!0},
$S:34}
A.cq2.prototype={
$1(d){return d.c},
$S:z+9}
A.cq3.prototype={
$1(d){return d.d},
$S:z+9}
A.cpZ.prototype={
$1(d){return d.d},
$S:z+9}
A.cq_.prototype={
$1(d){var w=this.a.Q.h(0,d)
return(w==null?null:w.e)===!0},
$S:34}
A.cq0.prototype={
$1(d){return d.a===this.a},
$S:z+12}
A.cqa.prototype={
$2(d,e){return e===this.a},
$S:437}
A.cq1.prototype={
$1(d){return d.c===this.a},
$S:z+8}
A.eqi.prototype={
$0(){var w=this.a
w.ax=this.b
w.ay=this.c},
$S:0}
A.eqj.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.eqh(w))},
$S:0}
A.eqh.prototype={
$0(){return this.a.ax=null},
$S:0}
A.epk.prototype={
$0(){return this.a.CW=!0},
$S:0}
A.epl.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.epj(w))},
$S:12}
A.epj.prototype={
$0(){return this.a.CW=!1},
$S:0}
A.epm.prototype={
$0(){return this.a.CW=!0},
$S:0}
A.epn.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.epi(w))},
$S:12}
A.epi.prototype={
$0(){return this.a.CW=!1},
$S:0}
A.epo.prototype={
$1(d){return this.a.bPc()},
$S:9}
A.epp.prototype={
$1(d){return this.a.c6W()},
$S:9}
A.epz.prototype={
$0(){return this.a.Q=-1},
$S:0}
A.epB.prototype={
$0(){return this.a.Q=-1},
$S:0}
A.epq.prototype={
$1(d){return d.b==="tv"},
$S:702}
A.epr.prototype={
$0(){return this.a.Q=-1},
$S:0}
A.eps.prototype={
$0(){return this.a.Q=-1},
$S:0}
A.epS.prototype={
$0(){var w=this.a
w.Q=this.b
w.z=w.at=""
w.ch=!1},
$S:0}
A.epA.prototype={
$0(){var w=this.a
w.Q=-1
w.at=""},
$S:0}
A.eqe.prototype={
$0(){return this.a.as=0},
$S:0}
A.eqf.prototype={
$0(){return this.a.z=""},
$S:0}
A.eqg.prototype={
$0(){return this.a.as=this.b},
$S:0}
A.eqc.prototype={
$0(){return this.a.z=""},
$S:0}
A.eqd.prototype={
$0(){return this.a.as=2000+this.b},
$S:0}
A.eqb.prototype={
$0(){return this.a.z=""},
$S:0}
A.eq3.prototype={
$1(d){return d.a===this.a},
$S:z+12}
A.eq4.prototype={
$0(){return this.a.at=""},
$S:0}
A.eq5.prototype={
$1(d){return d.a===this.a},
$S:z+7}
A.eq6.prototype={
$0(){var w=this,v=w.a,u=w.b
if(v.at===u)u=""
v.at=u
v.as=u.length===0?0:5000+w.c*100+w.d},
$S:0}
A.eq7.prototype={
$1(d){return d.a===this.a},
$S:z+7}
A.eq8.prototype={
$0(){return this.a.as=5000+this.b*100+this.c},
$S:0}
A.eq9.prototype={
$0(){var w=this.a
w.at=""
w.as=0},
$S:0}
A.eqa.prototype={
$0(){return this.a.as=5000+this.b*100+this.c},
$S:0}
A.eqk.prototype={
$0(){var w=this.b,v=D.d.q(B.HH,w.z),u=this.a.a
if(v)w.b1w(u)
else w.b1x(u)},
$S:0}
A.epy.prototype={
$1(d){var w=null
return C.el(C.a([C.bK(!1,B.fCh,w,w,!0,w,w,new A.epw(d),w,w),C.bH(D.JV,new A.epx(this.a,d),w)],x.p),w,w,E.nd,B.frr,w,w,w,w,B.fz5,w)},
$S:18}
A.epw.prototype={
$0(){C.a3(this.a,!1).N(null)
return null},
$S:0}
A.epx.prototype={
$0(){C.a3(this.b,!1).N(null)
this.a.axb(!0)},
$S:0}
A.epv.prototype={
$1(d){var w,v=null,u=this.a,t=u.d
t===$&&C.c()
w=t.c
w===$&&C.c()
t=C.d("The "+w.toLowerCase()+" is built, wired, painted and tested.\n\nMistakes: "+t.f+"\nShocks: "+t.r+"\nLives left: "+t.e+"\n\nEvery job is a little different. Ready for another one?",v,v,v,v,v,v,B.a8J,v,v,v)
return C.el(C.a([C.bK(!1,B.fN0,v,v,!0,v,v,new A.ept(d),v,v),C.bH(B.fyZ,new A.epu(u,d),v)],x.p),v,v,E.nd,t,v,v,v,v,B.fGZ,v)},
$S:18}
A.ept.prototype={
$0(){C.a3(this.a,!1).N(null)
return null},
$S:0}
A.epu.prototype={
$0(){C.a3(this.b,!1).N(null)
this.a.aZh()},
$S:0}
A.epC.prototype={
$0(){var w,v,u
if(!this.b)this.a.e=D.o.F(Date.now(),1e5)
w=this.a
v=w.gCO(0)
u=w.d
u===$&&C.c()
w.d=A.cpT(null,null,u.b,v,!0)
w.y=0
w.z=""
w.Q=-1
w.at=""
w.as=0
w.cx=!1
w.x.a8(0)
w.ax=null
w.r=A.wK(w.d,new A.rH(w.z,w.Q,!1))},
$S:0}
A.epQ.prototype={
$1(d){return new C.N(d,new A.epR(),d.$ti.k("N<ak.E,n>")).aG(0,", ")},
$S:1812}
A.epR.prototype={
$1(d){return A.jU(d).b},
$S:80}
A.epD.prototype={
$1(d){var w=this.a.d
w===$&&C.c()
return!w.x.ai(0,d.a)},
$S:z+8}
A.epE.prototype={
$1(d){var w=this.a.d
w===$&&C.c()
return!w.z.q(0,d.a)},
$S:z+8}
A.epF.prototype={
$1(d){var w=this.a.d
w===$&&C.c()
return!w.y.q(0,d)},
$S:34}
A.epI.prototype={
$1(d){return!d.a},
$S:z+9}
A.epJ.prototype={
$1(d){return d.b<3},
$S:z+9}
A.epK.prototype={
$1(d){return!d.c},
$S:z+9}
A.epL.prototype={
$1(d){return!d.d},
$S:z+9}
A.epM.prototype={
$1(d){return!d.c},
$S:z+9}
A.epN.prototype={
$1(d){var w=this.a.d
w===$&&C.c()
w=w.at.h(0,d.a)
w=w==null?null:w.a
return w!==d.b},
$S:z+8}
A.epO.prototype={
$1(d){return d.a},
$S:z+112}
A.epP.prototype={
$1(d){var w=this.a.d
w===$&&C.c()
w=w.at.h(0,d.a)
w=w==null?null:w.b.c
return(w==null?0:w)<2},
$S:z+8}
A.epG.prototype={
$1(d){var w
if(D.d.q(B.lG,d.b)){w=this.a.d
w===$&&C.c()
w=w.at.h(0,d.a)
w=(w==null?null:w.c)!==!0}else w=!1
return w},
$S:z+8}
A.epH.prototype={
$1(d){return d.b==="fan"},
$S:z+8}
A.eqD.prototype={
$0(){return this.a.cfC(this.b)},
$S:0}
A.eqF.prototype={
$0(){var w=this.a
if(w.Q>=0)w.ae3()
else{w.m(new A.eqp(w))
w.b3N()}},
$S:0}
A.eqp.prototype={
$0(){return this.a.as=0},
$S:0}
A.eqE.prototype={
$1(d){var w=this.a,v=w.d
v===$&&C.c()
return A.id0(v,w.w.gik()/1000,w.x)},
$S:z+10}
A.eqs.prototype={
$0(){var w=this.a,v=w.d
v===$&&C.c()
return w.jz(v.aIL())},
$S:0}
A.eqt.prototype={
$0(){var w=this.a
return w.m(new A.eqr(w,this.b))},
$S:0}
A.eqr.prototype={
$0(){var w,v=this.b.b
v.f=!v.f
v=this.a
w=v.d
w===$&&C.c()
v.r=A.wK(w,new A.rH(v.z,v.Q,!1))},
$S:0}
A.equ.prototype={
$0(){var w=this.a
return w.m(new A.eqq(w,this.b))},
$S:0}
A.eqq.prototype={
$0(){var w,v=this.b.b
v.e=!v.e
v=this.a
w=v.d
w===$&&C.c()
v.r=A.wK(w,new A.rH(v.z,v.Q,!1))},
$S:0}
A.eqG.prototype={
$0(){var w=this.a
return w.m(new A.eqo(w,this.b))},
$S:0}
A.eqo.prototype={
$0(){var w,v=this.a
v.y=this.b
v.z=""
w=v.d
w===$&&C.c()
v.r=A.wK(w,new A.rH("",v.Q,!1))},
$S:0}
A.eqH.prototype={
$0(){var w=this.a
return w.m(new A.eqn(w))},
$S:0}
A.eqn.prototype={
$0(){var w=this.a,v=w.d
v===$&&C.c()
v.alN()
w.y=2
w.z=""
w.r=A.wK(w.d,new A.rH("",w.Q,!1))
w.qx("The boxes, the cable and the walls are done. Now the wiring: pick an Outlet or a Switch from the tray, then tap its box on the wall.",!0)},
$S:0}
A.eqI.prototype={
$0(){var w=this.a
return w.m(new A.eqm(w,this.b))},
$S:0}
A.eqm.prototype={
$0(){var w,v=this.a,u=this.b.a,t=v.z===u?"":u
v.z=t
v.as=0
w=v.d
w===$&&C.c()
v.r=A.wK(w,new A.rH(t,v.Q,!1))
if(v.z.length!==0)v.cqv(u)},
$S:0}
A.eqJ.prototype={
$0(){var w=this.a,v=w.d
v===$&&C.c()
return w.jz(v.cQA())},
$S:0}
A.eqK.prototype={
$1(d){return!this.a.b.b.iH(0,d.a)},
$S:z+7}
A.eqL.prototype={
$0(){var w=this.a
return w.m(new A.eql(w,this.b,this.c))},
$S:0}
A.eql.prototype={
$0(){var w,v=this,u=v.c,t=u.a
if(v.b.b.b.iH(0,t)){v.a.ae4("That wire is already fastened. Tap the wire in the 3D view to take it off.")
return}w=v.a
if(w.at===t)t=""
w.at=t
if(t.length!==0)w.qx(u.b+": now tap the screw it belongs on, or press the matching button below.",!0)},
$S:0}
A.eqv.prototype={
$1(d){return!this.a.b.b.ai(0,d.a)},
$S:z+12}
A.eqw.prototype={
$0(){var w=this.a
return w.b1v(w.Q,this.b.a)},
$S:0}
A.eqx.prototype={
$0(){var w=this.a,v=w.d
v===$&&C.c()
return w.jz(v.bhT(w.Q))},
$S:0}
A.eqy.prototype={
$0(){var w=this.a,v=w.d
v===$&&C.c()
return w.jz(v.bhR(w.Q))},
$S:0}
A.eqz.prototype={
$0(){var w=this.a,v=w.d
v===$&&C.c()
return w.jz(v.bcJ(w.Q))},
$S:0}
A.eqA.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.bid(v.Q)
v.jz(w)
if(w.a)v.ae3()},
$S:0}
A.eqB.prototype={
$0(){var w=this.a,v=w.d
v===$&&C.c()
return w.jz(v.bhR(w.Q))},
$S:0}
A.eqC.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.bid(v.Q)
v.jz(w)
if(w.a){v.ae3()
v.qx("The "+A.agx(this.b.a)+" is out and the box is empty. Pick the kind you want from the tray (a different outlet or switch is fine), then tap the box.",!0)}},
$S:0}
A.eq2.prototype={
$1(d){return new C.dY(new A.eq1(this.a,this.b),null)},
$S:19}
A.eq1.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=C.aH(d,k,x.w).w,i=this.a,h=i.d
h===$&&C.c()
w=h.c
w===$&&C.c()
v=x.p
h=C.a([C.d("Job: "+w,k,k,k,k,k,k,D.de,k,k,k),D.av,C.d("Mistakes "+h.f+" \xb7 Shocks "+h.r+" \xb7 Lives "+h.e,k,k,k,k,k,k,B.JC,k,k,k),D.R,B.fCR,D.am],v)
w=i.d.d
w===$&&C.c()
u=w.length
t=0
for(;t<w.length;w.length===u||(0,C.M)(w),++t){s=w[t]
r=D.c.j(0.05)
q=new C.aQ(12,12)
p=new C.ay(D.bz,1,D.r,-1)
o=s.a
n=i.d.at.h(0,o)
n=(n==null?k:n.b.c)===2?"\u2705":"\u2b1c"
m=s.b
if(m==="gfci")m="A GFCI outlet"
else if(m==="outlet")m="An outlet"
else if(m==="switch")m="A light switch"
else if(m==="light")m="A ceiling light"
else m=m==="fan"?"A ceiling fan":"A "+A.agx(m).toLowerCase()
o=A.jU(o)
l=s.c
l=l!=null?", turned on by "+A.jU(l).b:""
h.push(C.p(k,new C.y(n+" "+m+" at "+o.b+l,k,D.oz,k,k,k,k,k,k,k,k,k),D.f,k,k,new C.o(r,k,new C.bI(p,p,p,p),new C.bk(q,q,q,q),k,k,D.n),k,k,k,D.eG,D.bT,k,k,k))}h.push(D.R)
h.push(C.B(C.a([B.bD7,C.XX(k,k,k,k,!1,D.y,k,k,k,k,k,k,new A.epW(i,e),k,k,k,k,k,k,k,k,i.d.b)],v),D.m,k,D.e,D.j,0,k,k))
h.push(C.B(C.a([B.bCn,C.XX(k,k,k,k,!1,D.y,k,k,k,k,k,k,new A.epX(i,e),k,k,k,k,k,k,k,k,i.d.dx)],v),D.m,k,D.e,D.j,0,k,k))
h.push(D.am)
w=this.b
h.push(C.B(C.a([C.E(C.dR(B.fAm,new A.epY(w),k),1),D.ab,C.E(C.bH(B.fyg,new A.epZ(i,d,w),k),1)],v),D.m,k,D.e,D.j,0,k,k))
h.push(D.am)
h.push(D.am)
h.push(C.B(C.a([C.E(C.dR(B.fsz,new A.eq_(i,d),k),1),D.ab,C.E(C.bH(B.aTg,new A.eq0(i,d),k),1)],v),D.m,k,D.e,D.j,0,k,k))
return C.bm(!0,new C.cT(new C.aY(0,1/0,0,j.a.b*0.8),C.cq(h,k,D.bQ,k,k,D.ag,!0),k),!0,!1,D.af,!0,!0)},
$S:86}
A.epW.prototype={
$1(d){var w=this.a,v=w.d
v===$&&C.c()
v.b=d
for(v=v.at,v=new C.dr(v,v.r,v.e);v.C();)v.d.b.r=d
this.b.$1(new A.epU())
w.m(new A.epV())},
$S:8}
A.epU.prototype={
$0(){},
$S:0}
A.epV.prototype={
$0(){},
$S:0}
A.epX.prototype={
$1(d){var w,v=this.a,u=v.d
u===$&&C.c()
u.dx=d
for(u=u.at,u=new C.dr(u,u.r,u.e);u.C();){w=u.d.b
w.y=d
if(d)w.f=!1}this.b.$1(new A.epT())
v.m(v.gc72())},
$S:8}
A.epT.prototype={
$0(){},
$S:0}
A.epY.prototype={
$0(){return A.h55(this.a)},
$S:0}
A.epZ.prototype={
$0(){var w=0,v=C.j(x.H),u=this,t,s,r
var $async$$0=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:C.a3(u.b,!1).N(null)
t=u.a
s=t.d
s===$&&C.c()
r=s.c
r===$&&C.c()
w=2
return C.b(A.hsB(u.c,s.cWJ(),t.d.cWK(),r),$async$$0)
case 2:return C.h(null,v)}})
return C.i($async$$0,v)},
$S:1}
A.eq_.prototype={
$0(){C.a3(this.b,!1).N(null)
this.a.axb(!0)},
$S:0}
A.eq0.prototype={
$0(){C.a3(this.b,!1).N(null)
this.a.aZh()},
$S:0}
A.fmG.prototype={
$1(d){var w=this.a,v=d.a
return w>v[0]&&w<v[1]},
$S:707}
A.fmH.prototype={
$1(d){var w=this.a,v=d.a
return w>v[2]&&w<v[3]},
$S:707}
A.fu8.prototype={
$1(d){return 5000+this.a.a*100+d},
$S:73}
A.fu9.prototype={
$1(d){return 3000+this.a.a},
$S:73}
A.fua.prototype={
$1(d){return 2000+this.a.a},
$S:73}
A.fud.prototype={
$5$col$round(d,e,f,g,h){var w=this.a
w.f=3
w.b=d
w.d=0.5
w.e=0.9
if(h)w.dL(e.aF(0,B.e8),e.a9(0,B.e8),f.a/2,g,14)
else w.aO(e,f,g)
w.e=0
w.d=1
w.f=2},
$3(d,e,f){return this.$5$col$round(d,e,f,D.b2,!1)},
$4$round(d,e,f,g){return this.$5$col$round(d,e,f,D.b2,g)},
$4$col(d,e,f,g){return this.$5$col$round(d,e,f,g,!1)},
$S:z+113}
A.fub.prototype={
$3(d,e,f){return I.RI(d,e,0,f+this.a.a*5)},
$S:24}
A.fuc.prototype={
$0(){var w,v=this.a
if(v.c)w="A place in the ceiling for a "+(v.e==="fan"?"fan (needs a fan-rated box)":"light")+"."
else w="A place on the wall at "+(v.e==="switch"?"switch height, about 48 inches from the floor":"outlet height, about 16 inches from the floor")+"."
return new A.cW(v.b,w,A.ahO(v,B.a9G),26)},
$S:z+114}
A.fKV.prototype={
$1(d){return d.e==="fan"},
$S:z+42}
A.fKW.prototype={
$1(d){return d.b==="light"},
$S:z+8}
A.fKX.prototype={
$1(d){return A.ahO(this.a,d)},
$S:z+5}
A.cto.prototype={
$1(d){return d.a===this.a&&!d.c},
$S:z+15}
A.ctk.prototype={
$1(d){return d.a===B.a_L},
$S:z+15}
A.ctm.prototype={
$1(d){return d.c},
$S:z+15}
A.ctn.prototype={
$1(d){return d.c},
$S:z+15}
A.ctl.prototype={
$1(d){return B.wv.h(0,d.a).e===this.a&&!d.c},
$S:z+15}
A.es7.prototype={
$0(){var w=this.a
w.z=this.b
w.Q=this.c},
$S:0}
A.es8.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.es6(w))},
$S:0}
A.es6.prototype={
$0(){return this.a.z=null},
$S:0}
A.erX.prototype={
$0(){return this.a.y=0},
$S:0}
A.es1.prototype={
$0(){return this.a.as=!0},
$S:0}
A.es2.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.es0(w))},
$S:12}
A.es0.prototype={
$0(){return this.a.as=!1},
$S:0}
A.es3.prototype={
$0(){var w=this.a,v=w.d
v===$&&C.c()
w.r=A.ago(v.d)
w.y=this.b},
$S:0}
A.es4.prototype={
$1(d){return this.a.cfK()},
$S:9}
A.es5.prototype={
$1(d){return this.a.c76()},
$S:9}
A.es_.prototype={
$1(d){var w=null
return C.el(C.a([C.bH(B.fAe,new A.erZ(this.a,d),w)],x.p),w,w,E.nd,B.fzm,w,w,w,w,B.fFE,w)},
$S:18}
A.erZ.prototype={
$0(){C.a3(this.b,!1).N(null)
this.a.awA()},
$S:0}
A.erW.prototype={
$1(d){var w=null,v=this.a,u=v.d
u===$&&C.c()
u=C.d("Every problem on the customer's list is fixed.\n\nMistakes: "+u.f+"\nShocks: "+u.r+"\nLives left: "+u.e+"\n\nThe next call will have different problems.",w,w,w,w,w,w,B.a8J,w,w,w)
return C.el(C.a([C.bK(!1,B.aTe,w,w,!0,w,w,new A.erU(d),w,w),C.bH(B.fBu,new A.erV(v,d),w)],x.p),w,w,E.nd,u,w,w,w,w,B.fI4,w)},
$S:18}
A.erU.prototype={
$0(){C.a3(this.a,!1).N(null)
return null},
$S:0}
A.erV.prototype={
$0(){C.a3(this.b,!1).N(null)
this.a.awA()},
$S:0}
A.erY.prototype={
$0(){var w,v,u=this.a
u.e=D.o.F(Date.now(),1e5)
w=u.gCO(0)
v=u.d
v===$&&C.c()
w=A.hg4(v.b,w)
u.d=w
u.r=A.ago(w.d)
u.at=!1
u.z=null
u.y=0},
$S:0}
A.esk.prototype={
$0(){return this.a.cAs(this.b)},
$S:0}
A.esg.prototype={
$1(d){return d<=5},
$S:34}
A.esf.prototype={
$1(d){var w=this.a,v=w.d
v===$&&C.c()
return A.hoy(v.d,w.w.gik()/1000)},
$S:z+10}
A.esh.prototype={
$1(d){return!d.c},
$S:z+15}
A.esi.prototype={
$1(d){return B.wv.h(0,d.a).a},
$S:z+116}
A.esj.prototype={
$0(){var w=this.a
return w.m(new A.ese(w,this.b))},
$S:0}
A.ese.prototype={
$0(){return this.a.x=this.b},
$S:0}
A.esd.prototype={
$1(d){return new C.dY(new A.esc(this.a),null)},
$S:19}
A.esc.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=this.a,j=k.d
j===$&&C.c()
w=x.p
j=C.a([B.fxK,D.av,C.d("Mistakes "+j.f+" \xb7 Shocks "+j.r+" \xb7 Lives "+j.e,l,l,l,l,l,l,B.JC,l,l,l),D.R],w)
v=k.d.c
v===$&&C.c()
u=v.length
t=0
for(;t<v.length;v.length===u||(0,C.M)(v),++t){s=v[t]
r=D.c.j(0.05)
q=new C.aQ(14,14)
p=new C.ay(s.c?D.bm.j(0.6):D.bz,1,D.r,-1)
o=s.c?"\u2705":"\ud83d\udd27"
n=B.wv.h(0,s.a).a
m=s.c?D.aB:D.c
j.push(C.p(l,new C.y(o+" "+n,l,new C.F(!0,m,l,l,l,l,13.5,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l),l,l,l,l,l,l,l,l,l),D.f,l,l,new C.o(r,l,new C.bI(p,p,p,p),new C.bk(q,q,q,q),l,l,D.n),l,l,l,D.ct,D.bh,l,l,l))}j.push(D.am)
j.push(B.fD1)
j.push(D.N)
j.push(C.B(C.a([B.bBZ,C.XX(l,l,l,l,!1,D.y,l,l,l,l,l,l,new A.esa(k,e),l,l,l,l,l,l,l,l,k.d.b)],w),D.m,l,D.e,D.j,0,l,l))
j.push(C.bH(B.fG6,new A.esb(k,d),l))
return C.bm(!0,C.cq(j,l,D.bQ,l,l,D.ag,!0),!0,!1,D.af,!0,!0)},
$S:86}
A.esa.prototype={
$1(d){var w=this.a.d
w===$&&C.c()
w.b=d
this.b.$1(new A.es9())},
$S:8}
A.es9.prototype={
$0(){},
$S:0}
A.esb.prototype={
$0(){C.a3(this.b,!1).N(null)
this.a.awA()},
$S:0}
A.ffw.prototype={
$1(d){return d.d===this.a},
$S:z+16}
A.bTm.prototype={
$1(d){var w,v,u,t,s=this.a,r=s.p1
if(r!=="back"){s=r==="left"?-1.5707963267948966:1.5707963267948966
return new C.z(new C.z(0,d),s)}r=s.k1
w=A.h5f(s,A.aOX(r==null?"tv100":r),0)
s=w.c
r=w.a/2
v=s-r-18
u=this.b
t=-u/2+14
if(v<t)v=s+r+18
v=D.k.E(v,t,u/2-14)
return new C.z(new C.z(v,d),Math.atan2(s-v,-d))},
$S:1814}
A.bTn.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n
for(w=this.a,v=w.a,u=v.as,t=u.length,s=t-1,r=0,q=0;q<t;++q,r=o){p=u[q]
o=r+p
if(d<=o||q===s){n=p===0?0:D.k.E((d-r)/p,0,1)
v=w.a.b
u=v[q]
t=u.a
v=v[q+1]
u=u.b
return new C.z(t+(v.a-t)*n,u+(v.b-u)*n)}}w=v.b
w.toString
return D.d.gal(w)},
$S:1815}
A.d4C.prototype={
$0(){return A.h55(this.a)},
$S:0}
A.d4D.prototype={
$1(d){var w=this.a
return w.m(new A.d4B(w,this.b))},
$S:8}
A.d4B.prototype={
$0(){var w=this.a
w.d=this.b
w.f.a8(0)
w.r=null},
$S:0}
A.d4E.prototype={
$1(d){var w=this.a
return w.m(new A.d4A(w))},
$S:8}
A.d4A.prototype={
$0(){var w=this.a
w.e=!1
w.r=null},
$S:0}
A.d4F.prototype={
$1(d){var w=this.a
return w.m(new A.d4z(w))},
$S:8}
A.d4z.prototype={
$0(){var w=this.a
w.e=!0
w.r=null},
$S:0}
A.d4G.prototype={
$1(d){var w=this.a
return w.m(new A.d4y(w,this.b,d))},
$S:33}
A.d4y.prototype={
$0(){var w=this.a,v=this.c
v.toString
w.f.n(0,this.b,v)
w.r=null},
$S:0}
A.d4H.prototype={
$1(d){var w,v,u=null,t=this.a,s=B.zf[t.d],r=this.b,q=s.e.h(0,r)
q.toString
w=x.N
q=C.G([r,q],w,w)
t=t.f.h(0,r)
t.toString
v=A.hoe(s.b,q,C.G([r,t],w,w))
t=v.a
s=t===B.v0
if(s)r="Right: this follows the diagram."
else{r=v.b
r=D.d.gI(r).c+" "+D.d.gI(r).e}if(s)t=D.bm
else t=t===B.Th?D.bI:D.cs
return C.d(r,u,u,u,u,u,u,C.l(u,u,t,u,u,u,u,u,u,u,u,12.5,u,u,u,u,1.3,!0,u,u,u,u,u,u,u,u),u,u,u)},
$S:383}
A.d4I.prototype={
$0(){var w=this.a
return w.m(new A.d4x(w))},
$S:0}
A.d4x.prototype={
$0(){var w=this.a,v=B.zf[w.d]
return w.r=A.hoe(v.b,v.e,w.f)},
$S:0}
A.fvQ.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=this
for(w=k.a*1.8,v=k.b,u=k.c,t=k.d,s=0.3*t,t=0.05*t,r=0;r<d;++r){q=w+r*0.173
p=D.k.F(q,1)
o=Math.sin((r*3.1+D.k.bm(q))*12.9898)*43758.5453
n=(o-Math.floor(o))*3.141592653589793*2
o=Math.sin((r+5)*12.9898)*43758.5453
m=e*(0.6+(o-Math.floor(o))*0.8)
q=u.$1(new A.r(Math.cos(n)*p*m,Math.sin(n)*p*m-p*p*6,3+p*3))
l=C.ar(E.Yk,F.Ma,p)
l.toString
v.fT(q,s*(1-p*0.6)+t,l,3,5,0)}},
$S:1816}
A.fvP.prototype={
$3(d,e,f){var w,v,u,t,s,r,q,p,o,n=this,m=n.a
m.d=0.34
for(w=n.b,v=w*0.45,u=n.c,t=n.d,s=1-e,r=0;r<d;++r){q=D.k.F(v+r/d,1)
p=u.$1(new A.r(Math.sin(r*1.7+w)*1.4+q*1.5,q*f-1,3.5+q*4))
o=C.ar(E.B1,B.bmV,s)
o.toString
o=C.ar(o,B.ba9,q)
o.toString
m.fT(p,(1.1+q*3.4)*t,o,3,6,0)}m.d=1},
$S:1817}
A.fvk.prototype={
$5(d,e,f,g,h){return this.a.push(new A.we(d,e,f,g,h))},
$S:z+117}
A.fvp.prototype={
$2(d,e){var w=this.a
return new C.Z(w,new A.fvq(d,e),C.S(w).k("Z<1>")).gL(0)},
$S:z+118}
A.fvq.prototype={
$1(d){return d.a.c===this.a&&d.b.c===this.b},
$S:z+14}
A.fvl.prototype={
$1(d){return d.b.c===B.aQH},
$S:z+14}
A.fvm.prototype={
$1(d){return d.a.c===B.aW6},
$S:z+14}
A.fvn.prototype={
$1(d){return!1},
$S:z+14}
A.fvo.prototype={
$1(d){return!1},
$S:z+14}
A.ff3.prototype={
$1(d){return D.d.b3(this.a,new A.ff4(d))},
$S:3}
A.ff4.prototype={
$1(d){return d.a===this.a},
$S:z+33}
A.cwm.prototype={
$1(d){return A.hNH(d)},
$S:z+14}
A.cwn.prototype={
$2(d,e){return d+e},
$S:70}
A.cwo.prototype={
$1(d){return d.b.a===B.v0},
$S:z+32}
A.fvr.prototype={
$2(d,e){var w=this.a.h(0,d)
if(w==null)this.b.push(new A.we("LEAD_MISSING",B.Th,"The "+d+" lead is not connected.","Every lead on the diagram needs its connection.","Connect the "+d+" lead to "+e+"."))
else if(w!==e)this.b.push(new A.we("LEAD_WRONG",B.aOg,"The "+d+" lead is connected to "+w+", but the diagram says "+e+".","Connections follow the approved wiring diagram.","Move the "+d+" lead to "+e+"."))},
$S:116}
A.fSU.prototype={
$1(d){var w,v,u,t,s,r=null,q=C.aH(d,r,x.w).w,p=x.p,o=C.a([B.foQ,D.am,B.fI8,D.R],p)
for(w=0;w<5;++w){v=B.d80[w]
u=D.c.j(0.05)
t=new C.aQ(12,12)
s=new C.ay(D.bz,1,D.r,-1)
o.push(C.p(r,C.x(C.a([new C.y(v.a+": "+v.b,r,D.aRX,r,r,r,r,r,r,r,r,r),D.cK,new C.y("Goes to: "+v.c+"\nCircuit: "+v.d,r,E.DW,r,r,r,r,r,r,r,r,r),D.cK,new C.y(v.e,r,D.aSE,r,r,r,r,r,r,r,r,r),D.cK,new C.y("Exception: "+v.f,r,B.fhi,r,r,r,r,r,r,r,r,r)],p),D.E,r,D.e,D.j,0,D.p),D.f,r,r,new C.o(u,r,new C.bI(s,s,s,s),new C.bk(t,t,t,t),r,r,D.n),r,r,r,D.ct,D.y2,r,r,r))}o.push(D.am)
o.push(B.fq8)
return C.bm(!0,new C.cT(new C.aY(0,1/0,0,q.a.b*0.85),C.cq(o,r,D.bQ,r,r,D.ag,!0),r),!0,!1,D.af,!0,!0)},
$S:26}
A.fSS.prototype={
$1(d){return new A.a0W(this.a,this.b,null)},
$S:z+121}
A.f5c.prototype={
$1(d){var w=this.a,v=w.a.c,u=this.b
d.toString
v.c.n(0,u,d)
w.m(new A.f5b(w,u,d))},
$S:195}
A.f5b.prototype={
$0(){var w=this.c
this.a.d.n(0,this.b,w)
return w},
$S:0}
A.f5d.prototype={
$0(){var w=this.a
w.m(new A.f5a(w,w.a.c.bpK(0)))},
$S:0}
A.f5a.prototype={
$0(){return this.a.e=this.b},
$S:0}
A.f5e.prototype={
$1(d){return d.b.a!==B.v0},
$S:z+32}
A.f5f.prototype={
$0(){var w=this.a,v=w.c
v.toString
w=w.e
C.a3(v,!1).N(w)
return null},
$S:0}
A.bQZ.prototype={
$1(d){return this.a.a.$0()},
$S:11}
A.bQY.prototype={
$1(d){var w=this.a
if(!w.c)return
w.a.$0()
if(w.c)w.aZB()},
$S:9};(function aliases(){var w=A.aN5.prototype
w.bxg=w.t})();(function installTearOffs(){var w=a._instance_0u,v=a._instance_1u,u=a.installStaticTearOff,t=a.installInstanceTearOff,s=a._instance_2u,r=a._instance_0i
var q
w(q=A.adY.prototype,"gbUZ","bV_",0)
v(q,"gLy","a4R",81)
u(A,"ibu",3,null,["$3"],["hYm"],27,0)
w(q=A.aol.prototype,"gc5k","c5l",0)
w(q,"gbpE","bpF",0)
t(q,"gcxN",0,0,null,["$1$done","$0"],["aB5","cxO"],122,0,0)
w(q,"gczQ","czR",0)
w(q,"gbNt","bNu",0)
v(A.aT5.prototype,"gcQe","cQf",17)
s(q=A.aE3.prototype,"gbMv","bMw",35)
w(q,"giR","iB",0)
t(q,"gc6A",0,1,null,["$2$keepTour","$1"],["ax7","Au"],55,0,0)
v(q,"gc6E","c6F",11)
w(q,"gbOp","bOq",0)
w(q,"gbOr","bOs",0)
w(q,"gbOL","bOM",0)
w(q,"gc1y","c1z",0)
w(q,"gbEV","bEW",0)
w(q,"gcCj","cCk",0)
w(q,"gcqn","cqo",0)
w(q,"gbN8","bN9",0)
w(q,"gaQ3","as9",0)
w(q,"gc6y","c6z",0)
w(q,"gcsX","csY",0)
w(q,"gcCd","cCe",20)
w(q,"gcxP","RT",0)
w(q,"gb6z","a2k",0)
w(q,"gb6O","a2o",0)
w(q,"gcEj","cEk",0)
w(q,"gbS0","bS1",0)
w(q,"gcxM","AY",0)
w(q,"gc6D","Ef",20)
w(q,"gcfw","a03",20)
w(q,"gceW","a_V",20)
w(q,"gaMT","bAg",20)
w(q,"gc6I","c6J",0)
w(q,"gcnz","cnA",0)
r(q,"gc6G","c6H",0)
u(A,"hrD",3,null,["$3"],["icC"],27,0)
u(A,"h4I",3,null,["$3"],["hrR"],27,0)
w(q=A.azW.prototype,"gc6N","qw",0)
w(q,"gIX","of",0)
v(q,"gIY","IZ",11)
w(q,"gcky","ckz",0)
w(q,"gczT","czU",0)
w(q=A.aFN.prototype,"gIX","of",0)
v(q,"gIY","IZ",11)
w(q,"gc6O","c6P",0)
w(q=A.aAc.prototype,"gIX","of",0)
v(q,"gIY","IZ",11)
r(q,"gc6L","c6M",0)
w(q=A.aB5.prototype,"gIX","of",0)
v(q,"gIY","IZ",11)
w(q=A.aEu.prototype,"gc6S","aZg",0)
v(q,"gc6T","c6U",11)
w(q,"gcvd","cve",0)
v(A.Xt.prototype,"gapL","boP",109)
w(q=A.aEB.prototype,"gc72","c73",0)
s(q,"gc6X","c6Y",35)
w(q,"gbQK","aTu",0)
w(q,"gc1w","c1x",0)
w(q,"gbCO","bCP",0)
w(q,"gbCM","bCN",0)
w(q,"gc6Z","ae3",0)
v(q,"gc70","c71",11)
w(q=A.aEF.prototype,"gc77","aZj",0)
v(q,"gc78","c79",11)})();(function inheritance(){var w=a.mixin,v=a.mixinHard,u=a.inheritMany,t=a.inherit
u(C.lX,[A.eUJ,A.re,A.Jx,A.FB,A.FI])
u(C.ag,[A.a9u,A.auZ,A.aok,A.apk,A.IM,A.aIf,A.Nv,A.avT,A.DO,A.a9n,A.a4O,A.aB4,A.afr,A.W1,A.O7,A.art,A.apG,A.a0W])
u(C.ah,[A.aMX,A.aN5,A.aol,A.bjC,A.aE3,A.bsA,A.bjD,A.bso,A.azW,A.aFN,A.aAc,A.aB5,A.bw1,A.aEu,A.aEB,A.aEF,A.bdp,A.btF])
t(A.adY,A.aMX)
t(A.boc,N.atU)
u(C.aD,[A.r,A.lP,A.cW,A.hf,A.tI,A.fK,A.fk,A.bT7,A.cAE,A.As,A.bba,A.bbv,A.bgy,A.dmg,A.Mq,A.drO,A.dgt,A.lz,A.r5,A.Hg,A.aSb,A.bGu,A.hl,A.FM,A.z5,A.xc,A.aTk,A.a45,A.ak1,A.bKR,A.bIX,A.dgW,A.rJ,A.Sk,A.aSG,A.bvZ,A.bIZ,A.Ac,A.cy5,A.px,A.bIL,A.Ff,A.OP,A.HY,A.LR,A.aT5,A.fH,A.Cu,A.jy,A.SP,A.b8o,A.ma,A.fn,A.DX,A.pO,A.abr,A.oh,A.aVq,A.a51,A.aVv,A.eX6,A.Mc,A.Q6,A.bTo,A.pu,A.jJ,A.MT,A.cl7,A.F4,A.nq,A.X_,A.ckY,A.z0,A.os,A.XF,A.avr,A.aTU,A.ex,A.Xt,A.iV,A.rH,A.up,A.Mj,A.ctj,A.xW,A.rF,A.a9J,A.i8,A.cpS,A.Au,A.bqX,A.aVx,A.b8S,A.ak6,A.cwj,A.czU,A.a40,A.bL0,A.we,A.tg,A.b5u,A.aaR,A.aaS,A.v4,A.b4c,A.b7n,A.cwl,A.Pz,A.a4X])
u(C.hK,[A.bZi,A.bZj,A.bZh,A.bZk,A.bZl,A.fTc,A.fTa,A.fTb,A.fT9,A.fSY,A.bIb,A.bIc,A.bId,A.bIe,A.bIg,A.bIf,A.bIa,A.bI9,A.cqT,A.cqU,A.cqM,A.cqN,A.cqO,A.cqP,A.cqS,A.eYc,A.eYb,A.eY8,A.eY9,A.eYa,A.eY6,A.bRV,A.bRR,A.bRZ,A.bRU,A.bS1,A.bS_,A.bS3,A.bGw,A.bGv,A.fKb,A.fsS,A.fsT,A.fsL,A.fsM,A.fsN,A.fsO,A.fsP,A.fsQ,A.fsR,A.ffe,A.fiB,A.frw,A.fsD,A.fsE,A.fsF,A.c2i,A.c2g,A.c28,A.c21,A.c2_,A.c1U,A.c20,A.c1K,A.c1L,A.c1M,A.fv8,A.bKT,A.bKW,A.fys,A.fcs,A.bJ_,A.fT7,A.fT8,A.fT5,A.fuH,A.cy7,A.cy8,A.bIM,A.bIT,A.bIU,A.bIV,A.bIW,A.bIN,A.bIO,A.bIP,A.bIR,A.bIS,A.bJA,A.bJx,A.bJy,A.bJz,A.bJE,A.bJD,A.bJB,A.bJF,A.dPe,A.dP9,A.dPt,A.dPc,A.dPw,A.fvi,A.fTI,A.fuu,A.fuv,A.fus,A.fut,A.fL_,A.fL0,A.fvv,A.fvw,A.fvt,A.fvu,A.fsJ,A.fsK,A.fTH,A.ffv,A.fsu,A.fTE,A.fTB,A.bSz,A.bSy,A.bT9,A.bTa,A.bTb,A.bTc,A.bTd,A.bTh,A.bTe,A.bTf,A.bTl,A.bTk,A.bTj,A.bTi,A.e9S,A.e9P,A.e9Q,A.e9R,A.e6E,A.e92,A.e93,A.e9_,A.e5d,A.e9v,A.e9w,A.e8I,A.e7J,A.e7F,A.e6x,A.e7p,A.e6H,A.e7e,A.e9J,A.e6g,A.e7c,A.e7d,A.e6S,A.e7r,A.e5L,A.e5K,A.e6c,A.e8x,A.e8w,A.e8h,A.e8e,A.e9t,A.e9s,A.e9k,A.e9f,A.e9e,A.e8S,A.e9H,A.e9x,A.e7t,A.e7u,A.e7v,A.e7f,A.e7g,A.e8z,A.e8N,A.e7m,A.e7l,A.e7n,A.e8O,A.e7L,A.e7M,A.e7U,A.e7V,A.e7W,A.e7x,A.e7y,A.e9I,A.e7A,A.e7z,A.e5c,A.e56,A.e57,A.e58,A.e9M,A.e5w,A.e5k,A.e5l,A.e5y,A.e5e,A.e8n,A.dsd,A.f1q,A.f1r,A.f1s,A.f1p,A.ft3,A.fta,A.ft5,A.ft2,A.fsW,A.ft7,A.ft9,A.ft8,A.ft6,A.fsX,A.fsV,A.ft_,A.ft0,A.fKm,A.fKk,A.fKj,A.fKl,A.ftd,A.ftp,A.fte,A.ftf,A.fth,A.ftk,A.ftl,A.ftm,A.ftn,A.fti,A.fmF,A.fmA,A.fmB,A.fmC,A.fm1,A.fm3,A.fme,A.fmp,A.fmD,A.fmu,A.fmv,A.fmw,A.fmx,A.fmy,A.fmz,A.fm4,A.fm5,A.fm6,A.fm7,A.fm8,A.fm9,A.fma,A.fmb,A.fmc,A.fmd,A.fmf,A.fmg,A.fmh,A.fmi,A.fmj,A.fmk,A.fml,A.fmm,A.fmn,A.fmo,A.fmq,A.fmr,A.fms,A.fmt,A.fwo,A.fwp,A.fwq,A.fcY,A.fcO,A.fnb,A.fmY,A.fmZ,A.fn_,A.fn0,A.fn3,A.fn4,A.fn5,A.fn6,A.fn7,A.fn8,A.fn9,A.fna,A.fn1,A.fn2,A.fgM,A.ftw,A.fts,A.ftv,A.ftu,A.dPx,A.f1e,A.fLt,A.fLs,A.d7M,A.d7P,A.d7S,A.d7U,A.d8c,A.d8s,A.d89,A.d8t,A.eRC,A.eRK,A.eRL,A.daZ,A.db8,A.db9,A.dbb,A.di2,A.did,A.dic,A.dif,A.fct,A.fcy,A.fcz,A.fcx,A.fu7,A.fu6,A.fu5,A.ftc,A.fvN,A.cl1,A.cl2,A.ckZ,A.cl3,A.cl4,A.cl5,A.cl6,A.cl_,A.cl0,A.fu4,A.fu2,A.ftX,A.fu_,A.ftY,A.ftZ,A.fu3,A.fu0,A.fu1,A.ftW,A.fKA,A.elJ,A.elo,A.elt,A.elK,A.elu,A.elv,A.elw,A.elH,A.elL,A.elN,A.elM,A.elB,A.elz,A.fSX,A.cpY,A.cq4,A.cq5,A.cq6,A.cq7,A.cq9,A.cq8,A.cpX,A.cpV,A.cpW,A.cq2,A.cq3,A.cpZ,A.cq_,A.cq0,A.cq1,A.epo,A.epp,A.epq,A.eq3,A.eq5,A.eq7,A.epy,A.epv,A.epQ,A.epR,A.epD,A.epE,A.epF,A.epI,A.epJ,A.epK,A.epL,A.epM,A.epN,A.epO,A.epP,A.epG,A.epH,A.eqE,A.eqK,A.eqv,A.eq2,A.epW,A.epX,A.fmG,A.fmH,A.fu8,A.fu9,A.fua,A.fud,A.fub,A.fKV,A.fKW,A.fKX,A.cto,A.ctk,A.ctm,A.ctn,A.ctl,A.es4,A.es5,A.es_,A.erW,A.esg,A.esf,A.esh,A.esi,A.esd,A.esa,A.ffw,A.bTm,A.bTn,A.d4D,A.d4E,A.d4F,A.d4G,A.d4H,A.fvP,A.fvk,A.fvq,A.fvl,A.fvm,A.fvn,A.fvo,A.ff3,A.ff4,A.cwm,A.cwo,A.fSU,A.fSS,A.f5c,A.f5e,A.bQZ,A.bQY])
u(C.ka,[A.bZg,A.cqL,A.cqQ,A.cqR,A.bRS,A.bRX,A.bRW,A.frs,A.fsU,A.frx,A.c1Z,A.bKV,A.bKS,A.bKX,A.bKU,A.bIY,A.c_U,A.fT6,A.fuI,A.cy6,A.bIQ,A.bJC,A.fwC,A.fwD,A.fwE,A.fwF,A.fwG,A.fvs,A.feb,A.fwH,A.fwI,A.fwJ,A.fwK,A.fwL,A.fwM,A.fwN,A.fwO,A.fwP,A.fwQ,A.fTC,A.fTD,A.bTg,A.e80,A.e6Z,A.e9u,A.e8H,A.e7I,A.e6J,A.e8v,A.e9r,A.e9d,A.e7T,A.ftb,A.ft4,A.ft1,A.fsY,A.fsZ,A.ftr,A.ftg,A.ftj,A.ftq,A.fmE,A.fm2,A.ftt,A.d7Q,A.eRH,A.daY,A.fvO,A.cqa,A.eq1,A.esc,A.fvQ,A.fvp,A.cwn,A.fvr])
u(C.oV,[A.x7,A.aSH])
u(C.mT,[A.b5x,A.beA,A.bi8])
t(A.bqL,A.aN5)
u(C.jc,[A.eY7,A.bS2,A.bRY,A.bRT,A.bS0,A.fry,A.frv,A.c2f,A.c23,A.c29,A.c2h,A.c26,A.c25,A.c1E,A.c24,A.c27,A.c22,A.c1X,A.c1W,A.c1Y,A.c1V,A.c1J,A.c1I,A.c1N,A.c1O,A.c1P,A.c1Q,A.c1R,A.c1H,A.c1S,A.c1F,A.c1G,A.c1T,A.c2c,A.c2d,A.c2b,A.c2e,A.c2a,A.fv9,A.dPd,A.dPq,A.dPk,A.dPl,A.dPj,A.dPa,A.dPu,A.dPs,A.dPr,A.dP8,A.dPf,A.dPg,A.dPh,A.dPi,A.dPb,A.dPn,A.dPo,A.dPp,A.dPm,A.dPv,A.fsv,A.e9O,A.e8C,A.e8D,A.e8B,A.e8E,A.e7a,A.e94,A.e87,A.e88,A.e89,A.e8a,A.e8b,A.e6C,A.e6B,A.e6D,A.e6z,A.e6A,A.e6y,A.e6N,A.e6O,A.e6P,A.e82,A.e81,A.e83,A.e8_,A.e84,A.e7Z,A.e85,A.e7Y,A.e86,A.e7X,A.e6e,A.e6f,A.e70,A.e7_,A.e71,A.e6Y,A.e72,A.e6X,A.e73,A.e6W,A.e74,A.e6V,A.e75,A.e6U,A.e76,A.e6T,A.e90,A.e91,A.e7o,A.e5E,A.e7j,A.e7i,A.e7k,A.e7h,A.e8J,A.e8G,A.e8F,A.e7H,A.e7G,A.e7D,A.e7C,A.e7E,A.e7B,A.e77,A.e78,A.e8y,A.e6L,A.e6K,A.e6M,A.e8K,A.e8V,A.e6I,A.e6G,A.e6F,A.e8U,A.e7b,A.e6R,A.e7s,A.e5M,A.e5J,A.e5N,A.e5I,A.e5O,A.e5H,A.e5P,A.e5G,A.e5Q,A.e5F,A.e6d,A.e8r,A.e8q,A.e8s,A.e8t,A.e8u,A.e8f,A.e8d,A.e8g,A.e8c,A.e9j,A.e9i,A.e9l,A.e9m,A.e9n,A.e9o,A.e9p,A.e9q,A.e99,A.e97,A.e98,A.e9a,A.e96,A.e9b,A.e9c,A.e8R,A.e8T,A.e9g,A.e95,A.e8Y,A.e8Z,A.e8Q,A.e8X,A.e9E,A.e9F,A.e9G,A.e9y,A.e9z,A.e9A,A.e9B,A.e9C,A.e9D,A.e6Q,A.e7w,A.e8L,A.e79,A.e8A,A.e8M,A.e8P,A.e8W,A.e7O,A.e7P,A.e7N,A.e7Q,A.e7R,A.e7K,A.e7S,A.e5b,A.e59,A.e7q,A.e9h,A.e8o,A.e8p,A.e5a,A.e6m,A.e6n,A.e6o,A.e6p,A.e6q,A.e6r,A.e6l,A.e6s,A.e6k,A.e6t,A.e6j,A.e6u,A.e6i,A.e6v,A.e6h,A.e6w,A.e9L,A.e9N,A.e9K,A.e5Z,A.e6_,A.e60,A.e64,A.e65,A.e66,A.e5Y,A.e67,A.e5X,A.e68,A.e5W,A.e69,A.e6a,A.e5V,A.e6b,A.e5U,A.e61,A.e5T,A.e62,A.e5S,A.e63,A.e5R,A.e5j,A.e5x,A.e5o,A.e5z,A.e5i,A.e5A,A.e5B,A.e5h,A.e5C,A.e5D,A.e5m,A.e5g,A.e5n,A.e5f,A.e5p,A.e5q,A.e5r,A.e5s,A.e5t,A.e5u,A.e5v,A.e8k,A.e8l,A.e8j,A.e8m,A.e8i,A.f1o,A.f1n,A.ceI,A.fto,A.fur,A.dPy,A.dPz,A.dPA,A.dPE,A.dPF,A.dPG,A.dPH,A.dPI,A.dPJ,A.dPK,A.dPL,A.dPB,A.dPC,A.dPD,A.f1d,A.cuw,A.cux,A.bVu,A.d81,A.d8_,A.d80,A.d7Z,A.d7N,A.d7O,A.d7R,A.d7T,A.d7V,A.d7W,A.d7X,A.d7Y,A.d82,A.d83,A.d8l,A.d8d,A.d8e,A.d8m,A.d8n,A.d8b,A.d8o,A.d8a,A.d8p,A.d8q,A.d8r,A.d8f,A.d88,A.d8g,A.d8h,A.d87,A.d8i,A.d86,A.d8j,A.d85,A.d8k,A.d84,A.eRF,A.eRG,A.eRE,A.eRy,A.eRz,A.eRA,A.eRB,A.eRD,A.eRO,A.eRM,A.eRJ,A.eRN,A.eRI,A.db3,A.db4,A.db2,A.daW,A.db_,A.db0,A.db1,A.daX,A.dbe,A.dba,A.db7,A.dbc,A.db6,A.dbd,A.db5,A.di7,A.di8,A.di6,A.di1,A.di3,A.di4,A.di5,A.dig,A.dib,A.die,A.dia,A.di9,A.fcw,A.fcu,A.fcv,A.ca2,A.ftT,A.ftU,A.ftV,A.elE,A.elF,A.elD,A.elx,A.elm,A.eln,A.elr,A.els,A.elC,A.elG,A.elI,A.elq,A.elp,A.elP,A.elO,A.ely,A.elA,A.eqi,A.eqj,A.eqh,A.epk,A.epl,A.epj,A.epm,A.epn,A.epi,A.epz,A.epB,A.epr,A.eps,A.epS,A.epA,A.eqe,A.eqf,A.eqg,A.eqc,A.eqd,A.eqb,A.eq4,A.eq6,A.eq8,A.eq9,A.eqa,A.eqk,A.epw,A.epx,A.ept,A.epu,A.epC,A.eqD,A.eqF,A.eqp,A.eqs,A.eqt,A.eqr,A.equ,A.eqq,A.eqG,A.eqo,A.eqH,A.eqn,A.eqI,A.eqm,A.eqJ,A.eqL,A.eql,A.eqw,A.eqx,A.eqy,A.eqz,A.eqA,A.eqB,A.eqC,A.epU,A.epV,A.epT,A.epY,A.epZ,A.eq_,A.eq0,A.fuc,A.es7,A.es8,A.es6,A.erX,A.es1,A.es2,A.es0,A.es3,A.erZ,A.erU,A.erV,A.erY,A.esk,A.esj,A.ese,A.es9,A.esb,A.d4C,A.d4B,A.d4A,A.d4z,A.d4y,A.d4I,A.d4x,A.f5b,A.f5d,A.f5a,A.f5f])
u(C.av,[A.aXX,A.Ui,A.acs,A.biJ,A.b6Q,A.aWV,A.a6Q])
w(A.aMX,N.atT)
v(A.aN5,C.co)})()
C.jk(b.typeUniverse,JSON.parse('{"a9u":{"ag":[],"v":[]},"adY":{"ah":["a9u<1>"]},"auZ":{"ag":[],"v":[]},"x7":{"aC":[]},"b5x":{"aC":[]},"bqL":{"ah":["auZ"]},"aok":{"ag":[],"v":[]},"aol":{"ah":["aok"]},"aSH":{"aC":[]},"aXX":{"av":[],"v":[]},"Ui":{"av":[],"v":[]},"apk":{"ag":[],"v":[]},"bjC":{"ah":["apk"]},"acs":{"av":[],"v":[]},"beA":{"aC":[]},"IM":{"ag":[],"v":[]},"aIf":{"ag":[],"v":[]},"aE3":{"ah":["IM"]},"biJ":{"av":[],"v":[]},"bi8":{"aC":[]},"bsA":{"ah":["aIf"]},"avT":{"ag":[],"v":[]},"DO":{"ag":[],"v":[]},"a9n":{"ag":[],"v":[]},"a4O":{"ag":[],"v":[]},"aB4":{"ag":[],"v":[]},"afr":{"ag":[],"v":[]},"Nv":{"ag":[],"v":[]},"bjD":{"ah":["Nv"]},"bso":{"ah":["avT"]},"b6Q":{"av":[],"v":[]},"aWV":{"av":[],"v":[]},"azW":{"ah":["DO"]},"aFN":{"ah":["a9n"]},"aAc":{"ah":["a4O"]},"aB5":{"ah":["aB4"]},"bw1":{"ah":["afr"]},"a6Q":{"av":[],"v":[]},"W1":{"ag":[],"v":[]},"aEu":{"ah":["W1"]},"O7":{"ag":[],"v":[]},"aEB":{"ah":["O7"]},"art":{"ag":[],"v":[]},"aEF":{"ah":["art"]},"apG":{"ag":[],"v":[]},"bdp":{"ah":["apG"]},"a0W":{"ag":[],"v":[]},"btF":{"ah":["a0W"]}}'))
C.Ge(b.typeUniverse,JSON.parse('{"boc":1,"aMX":1}'))
var y={T:"A hot wire never goes on the green ground screw.",W:"A shut-off valve goes on the pipe that comes out of the wall.",v:"Both black wires go on brass screws. It does not matter which one.",r:"Brass screws are for the HOT wire (black).",q:"Each switch has its own screw on the other side, and each goes to its own light.",R:"Fasten the bare copper ground to the GREEN screw.",E:"Fasten the black hot to one HOT (X or Y) brass screw.",k:"Fasten the red hot to the other HOT brass screw.",N:"Fasten the white neutral to the silver NEUTRAL (W) screw.",b:"Fold the wires back and push the device into the box.",P:"LOAD is for feeding other outlets further down the line. It is covered with tape. Power comes in on the LINE screws.",x:"Look at the device and the wires. Learn which wire is which before you touch a screw.",M:"Move it with the arrow buttons, turn it, change its colour or take it out.",G:"Neutral goes on a silver screw. The silver screws stay joined, so one wire feeds both halves.",o:"Pick a paint colour above to change this wall.",n:"Put the cover plate on, turn the power on and test.",Q:"Silver screws are for the NEUTRAL wire (white).",f:"Switch the power on and flip the wall switch.",t:"The bare copper ground wire only goes on the GREEN screw.",u:"The black hot wire goes on a brass screw.",C:"The gold screws are BRASS. They are for the HOT wire (black).",Z:"The green screw is for the bare copper ground wire.",l:"The two hot wires (black and red) go on the two brass screws, X and Y, in either order.",p:"The two hot wires go on the two brass screws, in either order.",X:"The two traveler wires go on the two brass traveler screws, in either order.",g:"The two travelers coming from the first three-way go on the two top screws.",_:"The two travelers going to the second three-way go on the two bottom screws.",c:"The white neutral wire goes on a silver screw.",I:"The white neutral wire goes on the silver W screw.",B:"The white-silver screws are NICKEL. They are for the NEUTRAL wire (white).",D:"There is no medicine left. Buy some in the shop.",O:"Turn the breaker OFF and test that the wires are dead.",Y:"You are at the street light. Press Fix the street light."}
var x=(function rtii(){var w=C.aw
return{dw:w("m5<u?>"),ff:w("aSb"),l:w("bu<n,n>"),e:w("bu<n,L>"),M:w("dD<n>"),hg:w("a45"),cD:w("aTU"),e7:w("eE<n>"),eP:w("re"),gN:w("HS"),eB:w("ma"),fa:w("aA<MB?>"),v:w("dv<H,n>"),fC:w("HY"),m:w("O<lz>"),gQ:w("O<LR>"),V:w("O<ac>"),O:w("O<u>"),bm:w("O<a40>"),fW:w("O<aTk>"),B:w("O<a45>"),C:w("O<xc>"),dI:w("O<Mc>"),bP:w("O<eE<n>>"),gw:w("O<Mj>"),dh:w("O<HS>"),_:w("O<ma>"),dY:w("O<oh>"),cX:w("O<aVq>"),D:w("O<a51>"),ha:w("O<HY>"),r:w("O<fH>"),E:w("O<hf>"),Z:w("O<jJ>"),gL:w("O<ai<H>>"),ez:w("O<a8<n,aD>>"),c7:w("O<a8<n,@>>"),f4:w("O<a8<n,cj>>"),T:w("O<i8>"),dN:w("O<t>"),F:w("O<os>"),fI:w("O<nq>"),g:w("O<h9>"),z:w("O<lP>"),gl:w("O<b4c>"),a6:w("O<+(a8M,H)>"),L:w("O<+(n,n)>"),dt:w("O<+(r,r)>"),d6:w("O<+(L,n)>"),f:w("O<+(L,L)>"),ek:w("O<+(H,n)>"),aJ:w("O<+(n,H,H)>"),dV:w("O<+(L,L,u)>"),al:w("O<+(H,L,R)>"),gp:w("O<+(H,H,ai<t>)>"),dQ:w("O<+(H,H,H)>"),eV:w("O<+(L,L,L,L)>"),az:w("O<+(H,H,L,R,n)>"),fP:w("O<OP>"),e3:w("O<a9J>"),fB:w("O<we>"),a:w("O<fK>"),gD:w("O<XF>"),y:w("O<rJ>"),s:w("O<n>"),fJ:w("O<aaR>"),dH:w("O<aaS>"),W:w("O<v4>"),bz:w("O<Ac>"),o:w("O<r>"),p:w("O<v>"),d:w("O<jy>"),gR:w("O<bba>"),bl:w("O<As>"),h:w("O<Au>"),I:w("O<iV>"),x:w("O<hl>"),aQ:w("O<Q6>"),fG:w("O<bqX>"),X:w("O<px>"),u:w("O<R>"),n:w("O<L>"),t:w("O<H>"),dS:w("O<aC?>"),k:w("O<cj>"),eF:w("cz<ah<ag>>"),dg:w("ai<L>"),j:w("ai<@>"),b:w("a8<n,@>"),G:w("a8<@,@>"),w:w("iE"),P:w("ct"),q:w("cW"),aU:w("aD"),dx:w("t"),ej:w("Jh"),fX:w("lP"),cE:w("a9u<H>"),J:w("+(L,L)"),c5:w("dx<H>"),cR:w("Xt"),K:w("fK"),cH:w("avr"),N:w("n"),ec:w("jw<n>"),dZ:w("b7n"),g6:w("bn<L>"),Q:w("r"),ac:w("cs<H>"),cI:w("jO<n>"),am:w("Z<ma>"),fZ:w("Z<F4>"),cc:w("Z<n>"),dD:w("Z<H>"),c1:w("hk"),gh:w("Cu"),bB:w("bbv"),c9:w("bgy"),R:w("R"),i:w("L"),A:w("@"),S:w("H"),c:w("Mq?"),eT:w("MB?"),U:w("ai<@>?"),dy:w("a8<n,@>?"),fF:w("a8<@,@>?"),cU:w("q4?"),Y:w("cj"),H:w("~")}})();(function constants(){var w=a.makeConstList
B.aXK=new A.ex(!0,"The water is on and nothing leaks. Perfect job!",!1,"")
B.aXL=new A.ex(!0,"Primer and paint rolled on.",!1,"")
B.aXM=new A.ex(!1,"This call is over. Start a new one.",!1,"")
B.aXN=new A.ex(!0,"Recorded.",!1,"")
B.aXO=new A.ex(!1,"That is not a place for a sheet.",!1,"")
B.aXP=new A.ex(!0,"Sanded smooth. Wear a mask: the dust is bad to breathe.",!1,"")
B.aaT=new A.ex(!1,"There is no device here.",!1,"")
B.aXQ=new A.ex(!0,"You look closely. Everything looks fine here.",!1,"")
B.aXR=new A.ex(!1,"ZAP! You were shocked badly and it was your last life. Always turn the breaker OFF and test before you touch wires.",!0,"shock")
B.aXS=new A.ex(!0,"Paper tape pressed into the seam.",!1,"")
B.aXT=new A.ex(!0,"Unplugged.",!1,"")
B.aXU=new A.ex(!0,"Breaker OFF. It is safe to work on the wires.",!1,"")
B.aXV=new A.ex(!1,"ZAP! You were shocked badly. That was your last life: the job is over. Lesson: ALWAYS turn the breaker OFF and test the wires before you touch them.",!0,"shock")
B.aXW=new A.ex(!1,"There is nothing there.",!1,"")
B.aXX=new A.ex(!1,"The outlet is burnt. Nothing works. Pull it out and put in a new one.",!0,"")
B.aXY=new A.ex(!0,"The water is on and nothing leaks yet, but the job is not finished.",!1,"")
B.aXZ=new A.ex(!0,"Sheet hung. Now screw it to the studs.",!1,"")
B.aY_=new A.ex(!0,"Hole drilled through the middle of the stud, at the cable height. Holes go in the center so a nail cannot reach the cable.",!1,"")
B.aY0=new A.ex(!0,"Plugged in. Nothing happens because the breaker is off. Turn it on to test.",!1,"")
B.aY1=new A.ex(!0,"You flipped the tripped breaker fully OFF. Fix the problem before you turn it on again.",!1,"")
B.aY2=new A.ex(!0,"Click.",!1,"")
B.aY3=new A.ex(!0,"The wires are folded back and the device is in the box. Now put the cover on.",!1,"")
B.aY4=new A.ex(!0,"Breaker OFF. The wires on this circuit are dead now. (Always test them to be sure.)",!1,"")
B.aY5=new A.ex(!1,"Nothing is wet.",!1,"")
B.aY6=new A.ex(!0,"Power is on.",!1,"")
B.aY7=new A.ex(!0,"Water OFF at the main valve. You can cut into the pipes safely now.",!1,"")
B.aY8=new A.ex(!0,"Opening cut around the box with the drywall saw. Keep it tight: the plate has to cover the edge.",!1,"")
B.aY9=new A.ex(!0,"Device pulled out of the box.",!1,"")
B.aYa=new A.ex(!0,"Screw set just below the paper, not through it.",!1,"")
B.aYb=new A.ex(!1,"ZAP! You touched a live wire. In Learn mode you are not hurt, but in real life this can kill. Switch the breaker OFF and test the wires first.",!0,"shock")
B.aYc=new A.ex(!0,"Cover on. Now you can turn the breaker on and test.",!1,"")
B.VM=new A.ex(!1,"",!1,"")
B.aYd=new A.ex(!0,"Device taken out. You can put it somewhere else, or put in a new one.",!1,"")
B.aYe=new A.ex(!0,"Breaker back ON.",!1,"")
B.aYf=new A.ex(!1,"That is not a stud.",!1,"")
B.aYg=new A.ex(!0,"Off.",!1,"")
B.aYh=new A.ex(!1,"Nothing to flip yet.",!1,"")
B.aYi=new A.ex(!0,"Wire taken off.",!1,"")
B.aYj=new A.ex(!0,"The mud is dry.",!1,"")
B.aYk=new A.ex(!0,"Breaker reset.",!1,"")
B.aYl=new A.ex(!0,"Box mounted. (Careful: this is not a fan-rated box. A fan on it could fall.)",!1,"")
B.fHA=new C.y("Tap a piece of furniture, or add one:",null,D.A3,null,null,null,null,null,null,null,null,null)
B.ehG=new C.D(D.nk,B.fHA,null)
B.aYs=new C.bL(D.a3,null,null,B.ehG,null)
B.abl=new A.lz(0,0,0,0,1)
B.abX=new C.aY(0,290,0,1/0)
B.b_C=new C.bk(G.T5,G.T5,D.bH,D.bH)
B.bpA=new C.u(1,0.12156862745098039,0.13725490196078433,0.18823529411764706,D.q)
B.bpI=new C.u(1,0.054901960784313725,0.06274509803921569,0.09411764705882353,D.q)
B.d2n=w([B.bpA,B.bpI],x.O)
B.bZT=new C.a9(D.b3,D.b6,D.x,B.d2n,null,null)
B.b2D=new C.o(null,null,G.abL,B.b_C,null,B.bZT,D.n)
B.F9=new C.u(1,0.08627450980392157,0.10588235294117647,0.1411764705882353,D.q)
B.b0Z=new C.bI(D.a0,D.a0,Aa.vq,D.a0)
B.b3t=new C.o(B.F9,null,B.b0Z,null,null,null,D.n)
B.b_N=new C.bk(D.rR,D.iB,D.iB,D.iB)
B.b3z=new C.o(D.aJ,null,null,B.b_N,null,null,D.n)
B.fId=new C.y("\u2600\ufe0f Let it dry",null,F.A1,null,null,null,null,null,null,null,null,null)
B.b7C=new C.ci(D.A,null,null,B.fId,null)
B.fHY=new C.y("\u23e9 Skip to the wiring",null,F.A1,null,null,null,null,null,null,null,null,null)
B.b7K=new C.ci(D.A,null,null,B.fHY,null)
B.fwq=new C.y("\ud83c\udfd7\ufe0f",null,D.pt,null,null,null,null,null,null,null,null,null)
B.b8_=new C.ci(D.A,null,null,B.fwq,null)
B.fwd=new C.y("\ud83c\udfe0",null,D.aS9,null,null,null,null,null,null,null,null,null)
B.b8s=new C.ci(D.A,null,null,B.fwd,null)
B.b9S=new C.u(1,0.9294117647058824,0.9098039215686274,0.8627450980392157,D.q)
B.L6=new C.u(1,0.1803921568627451,0.20392156862745098,0.25098039215686274,D.q)
B.ba3=new C.u(1,0.9725490196078431,0.9647058823529412,0.9333333333333333,D.q)
B.vv=new C.u(1,0.5450980392156862,0.3686274509803922,0.20392156862745098,D.q)
B.ba9=new C.u(1,0.5568627450980392,0.5568627450980392,0.5882352941176471,D.q)
B.ade=new C.u(1,0.611764705882353,0.5568627450980392,0.4588235294117647,D.q)
B.EF=new C.u(1,0.24705882352941178,0.5607843137254902,0.30980392156862746,D.q)
B.bap=new C.u(1,0.8392156862745098,0.9333333333333333,0.984313725490196,D.q)
B.oK=new C.u(1,0.9450980392156862,0.9450980392156862,0.9176470588235294,D.q)
B.baO=new C.u(1,0.9098039215686274,0.9254901960784314,0.9372549019607843,D.q)
B.baQ=new C.u(1,0.4823529411764706,0.5098039215686274,0.5450980392156862,D.q)
B.baX=new C.u(1,0.10588235294117647,0.4980392156862745,0.20392156862745098,D.q)
B.adu=new C.u(1,0.7215686274509804,0.7450980392156863,0.7725490196078432,D.q)
B.nP=new C.u(1,0.5450980392156862,0.3686274509803922,0.23529411764705882,D.q)
B.adw=new C.u(1,0.8509803921568627,0.8274509803921568,0.7725490196078432,D.q)
B.adA=new C.u(1,0.6549019607843137,0.6784313725490196,0.7098039215686275,D.q)
B.hm=new C.u(1,0.16862745098039217,0.17647058823529413,0.2,D.q)
B.EH=new C.u(1,0.8980392156862745,0.7529411764705882,0.4823529411764706,D.q)
B.Lg=new C.u(1,0.8156862745098039,0.5098039215686274,0.27450980392156865,D.q)
B.WN=new C.u(1,0.5411764705882353,0.41568627450980394,0.2784313725490196,D.q)
B.adI=new C.u(1,0.1843137254901961,0.4196078431372549,0.23529411764705882,D.q)
B.WQ=new C.u(1,0.2980392156862745,0.5450980392156862,0.2901960784313726,D.q)
B.xw=new C.u(1,0.788235294117647,0.6274509803921569,0.22745098039215686,D.q)
B.adO=new C.u(1,0.9411764705882353,0.5411764705882353,0.1411764705882353,D.q)
B.EN=new C.u(1,0.9921568627450981,0.9882352941176471,0.9686274509803922,D.q)
B.WU=new C.u(1,0.5568627450980392,0.5843137254901961,0.6196078431372549,D.q)
B.bcB=new C.u(1,0.47843137254901963,0.35294117647058826,0.22745098039215686,D.q)
B.jG=new C.u(1,0.788235294117647,0.807843137254902,0.8392156862745098,D.q)
B.adY=new C.u(1,0.4196078431372549,0.45098039215686275,0.5019607843137255,D.q)
B.adZ=new C.u(1,0.5568627450980392,0.35294117647058826,0.2901960784313726,D.q)
B.AS=new C.u(1,0.9294117647058824,0.9176470588235294,0.8784313725490196,D.q)
B.bdp=new C.u(1,0.9137254901960784,0.7254901960784313,0.28627450980392155,D.q)
B.bdA=new C.u(1,0.22745098039215686,0.22745098039215686,0.24705882352941178,D.q)
B.bdI=new C.u(1,0.5490196078431373,0.5764705882352941,0.6078431372549019,D.q)
B.ER=new C.u(1,0.22745098039215686,0.24705882352941178,0.2784313725490196,D.q)
B.X_=new C.u(1,0.8980392156862745,0.8980392156862745,0.8666666666666667,D.q)
B.Lq=new C.u(1,0.10588235294117647,0.11372549019607843,0.13333333333333333,D.q)
B.bdV=new C.u(1,0.22745098039215686,0.23529411764705882,0.25882352941176473,D.q)
B.X3=new C.u(1,0.30980392156862746,0.6588235294117647,0.3764705882352941,D.q)
B.aec=new C.u(1,0.8509803921568627,0.803921568627451,0.7215686274509804,D.q)
B.aed=new C.u(1,0.4196078431372549,0.2901960784313726,0.16862745098039217,D.q)
B.Ls=new C.u(1,0.11764705882352941,0.11764705882352941,0.12549019607843137,D.q)
B.be7=new C.u(1,0.8862745098039215,0.8745098039215686,0.8235294117647058,D.q)
B.aeg=new C.u(1,0.9490196078431372,0.7803921568627451,0.611764705882353,D.q)
B.beb=new C.u(1,0.42745098039215684,0.2901960784313726,1,D.q)
B.beg=new C.u(1,0.3686274509803922,0.27450980392156865,0.18823529411764706,D.q)
B.bej=new C.u(1,0.9058823529411765,0.8470588235294118,0.7450980392156863,D.q)
B.ber=new C.u(1,0.5411764705882353,0.4823529411764706,0.41568627450980394,D.q)
B.bev=new C.u(1,0.24705882352941178,0.16470588235294117,0.10980392156862745,D.q)
B.bex=new C.u(1,0.34901960784313724,0.3176470588235294,0.29411764705882354,D.q)
B.bez=new C.u(1,0.24705882352941178,0.6470588235294118,0.3568627450980392,D.q)
B.beG=new C.u(1,0.8117647058823529,0.792156862745098,0.7411764705882353,D.q)
B.X8=new C.u(1,0.8117647058823529,0.8901960784313725,0.9176470588235294,D.q)
B.beK=new C.u(1,0.7215686274509804,0.7450980392156863,0.7843137254901961,D.q)
B.Lu=new C.u(1,0.3333333333333333,0.396078431372549,0.4823529411764706,D.q)
B.X9=new C.u(1,0.5529411764705883,0.7843137254901961,1,D.q)
B.Xc=new C.u(1,1,0.9019607843137255,0.5019607843137255,D.q)
B.bfa=new C.u(1,0.9490196078431372,0.7607843137254902,0.10588235294117647,D.q)
B.aeB=new C.u(1,0.9490196078431372,0.9411764705882353,0.9019607843137255,D.q)
B.bft=new C.u(1,0.8509803921568627,0.7725490196078432,0.6392156862745098,D.q)
B.bfw=new C.u(1,0.9686274509803922,0.9607843137254902,0.9333333333333333,D.q)
B.Xf=new C.u(1,0.9529411764705882,0.788235294117647,0.2901960784313726,D.q)
B.aeF=new C.u(1,0.6823529411764706,0.6941176470588235,0.7372549019607844,D.q)
B.nX=new C.u(1,0.1843137254901961,0.49019607843137253,0.8823529411764706,D.q)
B.bfH=new C.u(1,0.788235294117647,0.7176470588235294,0.6078431372549019,D.q)
B.Xg=new C.u(1,0.8901960784313725,0.6627450980392157,0.10980392156862745,D.q)
B.F_=new C.u(1,0.7137254901960784,0.7372549019607844,0.7686274509803922,D.q)
B.bfL=new C.u(1,0.8431372549019608,0.8509803921568627,0.8784313725490196,D.q)
B.aeK=new C.u(1,0.7215686274509804,0.7529411764705882,0.8,D.q)
B.bfW=new C.u(1,0.22745098039215686,0.49019607843137253,0.26666666666666666,D.q)
B.vz=new C.u(1,0.9019607843137255,0.8823529411764706,0.8352941176470589,D.q)
B.Xk=new C.u(1,0.3686274509803922,0.17647058823529413,0.13725490196078433,D.q)
B.bg9=new C.u(1,0.0196078431372549,0.027450980392156862,0.050980392156862744,D.q)
B.aeT=new C.u(1,0.6039215686274509,0.6274509803921569,0.6588235294117647,D.q)
B.F1=new C.u(1,0.09019607843137255,0.09411764705882353,0.10588235294117647,D.q)
B.AX=new C.u(1,0.9725490196078431,0.9725490196078431,0.9568627450980393,D.q)
B.aeZ=new C.u(1,0.9450980392156862,0.9568627450980393,0.9725490196078431,D.q)
B.af_=new C.u(1,0.9019607843137255,0.9019607843137255,0.8784313725490196,D.q)
B.bgM=new C.u(1,0.29411764705882354,0.21176470588235294,0.12941176470588237,D.q)
B.Xo=new C.u(1,0.8941176470588236,0.9058823529411765,0.9176470588235294,D.q)
B.jp=new C.u(1,0.7686274509803922,0.6039215686274509,0.3843137254901961,D.q)
B.afe=new C.u(1,1,0.35294117647058826,0.12156862745098039,D.q)
B.aff=new C.u(1,0.5411764705882353,0.5607843137254902,0.596078431372549,D.q)
B.LD=new C.u(1,0.16470588235294117,0.10196078431372549,0.06274509803921569,D.q)
B.afh=new C.u(1,0.5411764705882353,0.29411764705882354,0.29411764705882354,D.q)
B.LE=new C.u(1,0.9098039215686274,0.8509803921568627,0.7372549019607844,D.q)
B.bhu=new C.u(1,0.48627450980392156,0.3215686274509804,0.18823529411764706,D.q)
B.o0=new C.u(1,1,0.9450980392156862,0.6588235294117647,D.q)
B.bhT=new C.u(1,0.5411764705882353,0.5411764705882353,0.5176470588235295,D.q)
B.bhV=new C.u(1,0.9647058823529412,0.9568627450980393,0.9254901960784314,D.q)
B.LH=new C.u(1,0.47843137254901963,0.23137254901960785,0.1803921568627451,D.q)
B.bi4=new C.u(1,0.3333333333333333,0.6274509803921569,0.3333333333333333,D.q)
B.afr=new C.u(1,0.7058823529411765,0.3254901960784314,0.3254901960784314,D.q)
B.bic=new C.u(1,0.6078431372549019,0.6078431372549019,0.592156862745098,D.q)
B.B0=new C.u(1,0.9568627450980393,0.9450980392156862,0.9176470588235294,D.q)
B.tB=new C.u(1,0.8862745098039215,0.23137254901960785,0.23137254901960785,D.q)
B.pN=new C.u(1,0.9490196078431372,0.9490196078431372,0.9254901960784314,D.q)
B.bin=new C.u(1,0.30980392156862746,0.615686274509804,0.3568627450980392,D.q)
B.afv=new C.u(1,0.788235294117647,0.8117647058823529,0.8392156862745098,D.q)
B.bis=new C.u(1,0.9294117647058824,0.9215686274509803,0.8941176470588236,D.q)
B.XC=new C.u(1,0.8392156862745098,0.6823529411764706,0.4470588235294118,D.q)
B.afy=new C.u(1,0.9098039215686274,0.9098039215686274,0.9098039215686274,D.q)
B.LJ=new C.u(1,0.2901960784313726,0.2980392156862745,0.32941176470588235,D.q)
B.XE=new C.u(1,0.3686274509803922,0.43137254901960786,0.5176470588235295,D.q)
B.bj8=new C.u(1,0.20784313725490197,0.47843137254901963,0.26666666666666666,D.q)
B.bjc=new C.u(1,0.3568627450980392,0.10196078431372549,0.09019607843137255,D.q)
B.afI=new C.u(1,0.23137254901960785,0.1843137254901961,0.14901960784313725,D.q)
B.afJ=new C.u(1,0.8509803921568627,0.788235294117647,0.6588235294117647,D.q)
B.ky=new C.u(1,0.9686274509803922,0.9568627450980393,0.9254901960784314,D.q)
B.afM=new C.u(1,0.13333333333333333,0.1450980392156863,0.16862745098039217,D.q)
B.XH=new C.u(1,0.4980392156862745,0.7215686274509804,1,D.q)
B.xI=new C.u(1,0.16470588235294117,0.1450980392156863,0.13725490196078433,D.q)
B.bjw=new C.u(1,0.5411764705882353,0.23137254901960785,0.23137254901960785,D.q)
B.bjx=new C.u(1,0.9450980392156862,0.9294117647058824,0.8784313725490196,D.q)
B.LM=new C.u(1,0.796078431372549,0.8156862745098039,0.8392156862745098,D.q)
B.XK=new C.u(1,0.8980392156862745,0.7254901960784313,0.11764705882352941,D.q)
B.bjU=new C.u(1,0.7490196078431373,0.8901960784313725,1,D.q)
B.ag_=new C.u(1,0.6039215686274509,0.4196078431372549,0.24705882352941178,D.q)
B.XO=new C.u(1,0.10588235294117647,0.10588235294117647,0.11372549019607843,D.q)
B.bke=new C.u(1,0.3686274509803922,0.2235294117647059,0.12549019607843137,D.q)
B.bkg=new C.u(1,0.9529411764705882,0.9058823529411765,0.6313725490196078,D.q)
B.ag5=new C.u(1,0.9490196078431372,0.9490196078431372,0.9333333333333333,D.q)
B.bkD=new C.u(1,0.6274509803921569,0.6509803921568628,0.6823529411764706,D.q)
B.bkP=new C.u(0,0.2196078431372549,0.7411764705882353,0.9725490196078431,D.q)
B.bkX=new C.u(1,0.8156862745098039,0.35294117647058826,0.22745098039215686,D.q)
B.bl2=new C.u(1,0.8509803921568627,0.788235294117647,0.6274509803921569,D.q)
B.XT=new C.u(1,0.9490196078431372,0.9176470588235294,0.8274509803921568,D.q)
B.agn=new C.u(1,0.10588235294117647,0.07058823529411765,0.03529411764705882,D.q)
B.blm=new C.u(1,0.3607843137254902,0.7019607843137254,0.9098039215686274,D.q)
B.LU=new C.u(1,0.24705882352941178,0.26666666666666666,0.3137254901960784,D.q)
B.blw=new C.u(1,0.12549019607843137,0.13333333333333333,0.14901960784313725,D.q)
B.LY=new C.u(1,0.8862745098039215,0.27058823529411763,0.35294117647058826,D.q)
B.blM=new C.u(1,0.12156862745098039,0.43529411764705883,0.2627450980392157,D.q)
B.xN=new C.u(1,0.17254901960784313,0.4196078431372549,0.8392156862745098,D.q)
B.vH=new C.u(1,0.7607843137254902,0.4627450980392157,0.22745098039215686,D.q)
B.M0=new C.u(1,0.7254901960784313,0.7450980392156863,0.7764705882352941,D.q)
B.agw=new C.u(1,0.611764705882353,0.35294117647058826,0.27058823529411763,D.q)
B.bmd=new C.u(1,0.611764705882353,0.5882352941176471,0.5450980392156862,D.q)
B.M5=new C.u(1,0.9686274509803922,0.9490196078431372,0.9019607843137255,D.q)
B.bmE=new C.u(1,0.2,0.21176470588235294,0.23137254901960785,D.q)
B.bmJ=new C.u(1,0.7098039215686275,0.7333333333333333,0.7647058823529411,D.q)
B.bmK=new C.u(1,0.9294117647058824,0.9294117647058824,0.9098039215686274,D.q)
B.bmQ=new C.u(1,0.9098039215686274,0.8941176470588236,0.8549019607843137,D.q)
B.bmV=new C.u(1,0.23137254901960785,0.23137254901960785,0.25098039215686274,D.q)
B.agO=new C.u(1,0.7686274509803922,0.5411764705882353,0.11764705882352941,D.q)
B.bn0=new C.u(1,0.43529411764705883,0.7137254901960784,1,D.q)
B.bnc=new C.u(1,0.9450980392156862,0.9019607843137255,0.8156862745098039,D.q)
B.bne=new C.u(1,0.9137254901960784,0.8980392156862745,0.8549019607843137,D.q)
B.agV=new C.u(1,0.18823529411764706,0.2,0.22745098039215686,D.q)
B.M7=new C.u(1,0.9372549019607843,0.9372549019607843,0.9176470588235294,D.q)
B.agX=new C.u(0.6666666666666666,1,0.16470588235294117,0.10196078431372549,D.q)
B.bnu=new C.u(1,0.9372549019607843,0.9137254901960784,0.8627450980392157,D.q)
B.bnx=new C.u(1,0.9294117647058824,0.9019607843137255,0.8156862745098039,D.q)
B.Ya=new C.u(1,0.4196078431372549,0.24705882352941178,0.19215686274509805,D.q)
B.bnC=new C.u(1,0.12156862745098039,0.6392156862745098,0.2627450980392157,D.q)
B.bnE=new C.u(1,0.803921568627451,0.6274509803921569,0.2,D.q)
B.Yd=new C.u(1,0.3607843137254902,0.7019607843137254,1,D.q)
B.boj=new C.u(1,0.48627450980392156,0.2901960784313726,0.17647058823529413,D.q)
B.Ye=new C.u(1,0.9568627450980393,0.9568627450980393,0.9411764705882353,D.q)
B.bol=new C.u(1,0.8431372549019608,0.8,0.6588235294117647,D.q)
B.boZ=new C.u(1,0.9019607843137255,0.8745098039215686,0.796078431372549,D.q)
B.bp0=new C.u(1,0.30980392156862746,0.6588235294117647,1,D.q)
B.bp6=new C.u(1,1,0.6196078431372549,0.6196078431372549,D.q)
B.ahj=new C.u(1,0.8431372549019608,0.16470588235294117,0.16470588235294117,D.q)
B.Mf=new C.u(1,0.47843137254901963,0.30980392156862746,0.1568627450980392,D.q)
B.bpj=new C.u(1,0.9294117647058824,0.9372549019607843,0.9529411764705882,D.q)
B.Bd=new C.u(1,0.6901960784313725,0.5411764705882353,0.3568627450980392,D.q)
B.hS=new C.u(1,0.6078431372549019,0.8274509803921568,0.9607843137254902,D.q)
B.bpC=new C.u(1,0.48627450980392156,0.2901960784313726,0.22745098039215686,D.q)
B.Yn=new C.u(1,0.7490196078431373,0.8901960784313725,0.9686274509803922,D.q)
B.Yo=new C.u(1,0.23137254901960785,0.6078431372549019,1,D.q)
B.ahr=new C.u(1,0.8509803921568627,0.8235294117647058,0.7607843137254902,D.q)
B.pX=new C.u(1,0.4196078431372549,0.2901960784313726,0.19607843137254902,D.q)
B.bpQ=new C.u(1,0.8509803921568627,0.7450980392156863,0.5725490196078431,D.q)
B.Yq=new C.u(1,0.13333333333333333,0.14901960784313725,0.17254901960784313,D.q)
B.bpS=new C.u(1,0.8117647058823529,0.788235294117647,0.7215686274509804,D.q)
B.bpW=new C.u(1,0.7176470588235294,0.4745098039215686,0.12156862745098039,D.q)
B.bq0=new C.u(1,0.9294117647058824,0.9294117647058824,0.9176470588235294,D.q)
B.bq1=new C.u(1,0.7529411764705882,0.5411764705882353,0.35294117647058826,D.q)
B.bq3=new C.u(1,0.5450980392156862,0.4196078431372549,0.24705882352941178,D.q)
B.br6=new A.tg("none","Nothing happens: the device gets no power.",!1,!1,!1)
B.br7=new A.tg("none","It cannot be judged: the wire functions were not verified.",!1,!1,!1)
B.br8=new A.tg("smoke","The loose connection overheats: it glows, smokes and chars the device. In a real wall this can start a fire.",!1,!1,!0)
B.br9=new A.tg("none","It does not work as it should: some part runs wrongly or not at all. That does not tell you what is wrong, so check against the diagram.",!1,!1,!1)
B.bra=new A.tg("none","It runs. There is nothing to see, and that is the danger: with no ground, a fault would energize the metal parts.",!0,!1,!1)
B.brb=new A.tg("none","It works as the diagram says.",!0,!1,!1)
B.brc=new A.tg("none","It works, and every safety rule is met.",!0,!1,!1)
B.brd=new A.tg("none","Nothing happens: it is dead. But the hot wire is connected, so it can still be live. No sparks, no smoke: that does not make it safe.",!1,!1,!1)
B.bre=new A.tg("spark","Bare copper touches something it should not: sparks. The circuit is not safe.",!1,!1,!1)
B.brf=new A.tg("none","It looks fine for now. But the support cannot carry the weight, and it can fall later.",!1,!1,!1)
B.brg=new A.tg("fire","BANG. A short circuit: a flash, sparks, smoke and a flame at the device. The breaker trips and the device is ruined. The wires and the device are not safe to use.",!1,!0,!0)
B.brh=new A.tg("arc","Hot and neutral are reversed: the parts that should be dead are live. Blue arcs show the energized metal. The simulator does not let anything run on this: it is unsafe, even if a real appliance might seem to work.",!1,!1,!1)
B.bri=new A.tg("arc","Current flows through the ground wire and the metal parts it joins. Arcs crackle at the box. This is a shock hazard.",!1,!1,!1)
B.brj=new A.tg("spark","The neutral and ground are joined: the protective device trips with a snap of sparks.",!1,!0,!1)
B.bsb=new A.ak1("expired","That order took too long and went back on the board.",0)
B.bu8=new C.b9(55e3)
B.buY=new C.Q(0,2,0,6)
B.bvn=new C.Q(10,10,10,8)
B.bvt=new C.Q(10,16,10,14)
B.bvL=new C.Q(11,7,11,7)
B.Zn=new C.Q(11,9,11,9)
B.bwK=new C.Q(14,16,14,10)
B.aj0=new C.Q(14,8,14,24)
B.byp=new C.Q(1,0,0,0)
B.bz0=new C.Q(22,0,22,44)
B.bzI=new C.Q(26,8,26,8)
B.bAk=new C.Q(4,22,4,12)
B.bAx=new C.Q(4,4,8,4)
B.bAz=new C.Q(4,6,12,4)
B.bBs=new C.Q(9,0,9,0)
B.bBt=new C.Q(9,12,9,12)
B.fNp=new C.y("Practice mode (no explanations, real shocks)",null,D.JO,null,null,null,null,null,null,null,null,null)
B.bBZ=new C.bA(1,D.bd,B.fNp,null)
B.fJ0=new C.y("Practice mode (no hints, no labels)",null,D.JO,null,null,null,null,null,null,null,null,null)
B.bC0=new C.bA(1,D.bd,B.fJ0,null)
B.fq7=new C.y("\ud83c\udfd8 Community",null,P.t1,null,null,null,null,null,null,null,null,null)
B.b7w=new C.ci(D.A,null,null,B.fq7,null)
B.bC7=new C.bA(1,D.bd,B.b7w,null)
B.fuD=new C.y("House tour",null,D.mh,null,null,null,null,null,null,null,null,null)
B.aRg=new C.F(!0,D.aQ,null,null,null,null,13,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fB3=new C.y("A film of your whole house, with every TV on.",null,B.aRg,null,null,null,null,null,null,null,null,null)
B.dhN=w([B.fuD,D.bC,B.fB3],x.p)
B.br4=new C.fj(D.ag,D.e,D.j,D.E,null,D.p,null,0,B.dhN,null)
B.bCc=new C.bA(1,D.bd,B.br4,null)
B.fAF=new C.y("Construction Lab",null,P.t1,null,null,null,null,null,null,null,null,null)
B.fpw=new C.y("Wire it. Plumb it. Fix a house.",null,D.hj,null,null,null,null,null,null,null,null,null)
B.d8x=w([B.fAF,B.fpw],x.p)
B.bqO=new C.fj(D.ag,D.e,D.j,D.E,null,D.p,null,0,B.d8x,null)
B.bCl=new C.bA(1,D.bd,B.bqO,null)
B.fHR=new C.y("Test mode (an inspection: nothing is explained until you submit)",null,D.JO,null,null,null,null,null,null,null,null,null)
B.bCn=new C.bA(1,D.bd,B.fHR,null)
B.aRA=new C.F(!0,D.c,null,null,null,null,14,D.H,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fIS=new C.y("5 portions of food\n10 points",null,B.aRA,null,null,null,null,null,null,null,null,null)
B.bCr=new C.bA(1,D.bd,B.fIS,null)
B.fva=new C.y("3 doses of medicine\n12 points",null,B.aRA,null,null,null,null,null,null,null,null,null)
B.bCH=new C.bA(1,D.bd,B.fva,null)
B.fGy=new C.y("Drone film",null,D.fr,null,null,null,null,null,null,null,null,null)
B.bCM=new C.bA(1,D.bd,B.fGy,null)
B.fIE=new C.y("Practice mode (no hints, real shocks and fires)",null,D.JO,null,null,null,null,null,null,null,null,null)
B.bD7=new C.bA(1,D.bd,B.fIE,null)
B.fN_=new C.y("Uber licence",null,D.fr,null,null,null,null,null,null,null,null,null)
B.bDe=new C.bA(1,D.bd,B.fN_,null)
B.bEb=new A.a4O(null,null)
B.a_J=new A.re(0,"tripped")
B.a_K=new A.re(1,"noHotWater")
B.a_L=new A.re(10,"wallHole")
B.a_M=new A.re(11,"clogged")
B.Nq=new A.re(2,"nutLeak")
B.Nr=new A.re(3,"pexLeak")
B.a_N=new A.re(5,"flicker")
B.a_O=new A.re(6,"burntOutlet")
B.a_P=new A.re(7,"gfciTripped")
B.a_Q=new A.re(8,"runningToilet")
B.a_R=new A.re(9,"dripFaucet")
B.bFX=new A.oh(!1,"back",0,10)
B.bFY=new A.oh(!1,"back",0,9)
B.bFZ=new A.oh(!1,"back",50,0)
B.bG_=new A.oh(!1,"back",56,11)
B.bG0=new A.oh(!1,"back",-50,10)
B.bG1=new A.oh(!1,"left",40,9)
B.bG2=new A.oh(!1,"right",40,10)
B.a_Z=new A.oh(!1,"right",50,5)
B.al4=new A.pO("tv100",'Giant 100"',"\ud83d\udcfa",89,!1)
B.bI9=new C.a1(61419,"MaterialIcons",!1)
B.bIl=new C.a1(61888,"MaterialIcons",!1)
B.bJ7=new C.a1(62978,"MaterialIcons",!1)
B.bJc=new C.a1(63015,"MaterialIcons",!1)
B.bJy=new C.a1(63165,"MaterialIcons",!1)
B.amv=new C.a1(63228,"MaterialIcons",!1)
B.amT=new C.a1(63547,"MaterialIcons",!0)
B.bKQ=new C.a1(983222,"MaterialIcons",!1)
B.bLn=new C.a1(983666,"MaterialIcons",!1)
B.anE=new C.a1(983775,"MaterialIcons",!1)
B.anK=new C.a1(983894,"MaterialIcons",!1)
B.bOF=new C.ae(D.jP,null,null,null,null,null)
B.bOR=new C.ae(D.o9,null,null,null,null,null)
B.bQi=new C.ae(D.cx,26,D.aB,null,null,null)
B.bSK=new C.ae(D.mJ,null,null,null,null,null)
B.bTz=new C.ae(D.Ce,22,D.c,null,null,null)
B.bTE=new C.ae(D.l8,null,F.fv,null,null,null)
B.bVC=new C.ae(D.p1,null,null,null,null,null)
B.bX_=new C.ae(A4.GH,null,D.bI,null,null,null)
B.fQN=new A.r(0,100,20)
B.bYT=new A.hf(B.fQN,"No power in this house",D.bx,0)
B.h53=new A.r(-60,40,130)
B.bYU=new A.hf(B.h53,"\ud83e\uddef Walk here to check the equipment",D.d9,0)
B.fSt=new A.r(0,62,12)
B.bYV=new A.hf(B.fSt,"\ud83d\uded7 Elevator: walk onto the blue mat or tap",D.jt,19502)
B.fSm=new A.r(0,50,80)
B.bYW=new A.hf(B.fSm,"\ud83d\udcda Walk here to teach the class",D.d9,0)
B.fSX=new A.r(105,52,100)
B.bYX=new A.hf(B.fSX,"\ud83c\udf06 Balcony: step here to see the city",D.eh,0)
B.h5h=new A.r(-80,70,40)
B.bYY=new A.hf(B.h5h,"\ud83d\udc69\u200d\u2695\ufe0f Nurse",D.cN,0)
B.fSq=new A.r(0,52,78)
B.bYZ=new A.hf(B.fSq,"\ud83e\udeaa Walk here to get your Uber licence",D.jt,0)
B.h5i=new A.r(-84,84,120)
B.bZ_=new A.hf(B.h5i,"\ud83c\udf5e Food and drinks",D.d9,0)
B.fS9=new A.r(0,40,176)
B.bZ0=new A.hf(B.fS9,"\ud83c\udf4e Fresh fruit",D.el,0)
B.aU8=new A.r(0,26,312)
B.bZ1=new A.hf(B.aU8,"\u2b07 Walk here to go out",D.eh,0)
B.bZ2=new A.hf(B.aU8,"\ud83d\uded7 Take the elevator down to go out",D.jt,0)
B.fYv=new A.r(90,40,56)
B.bZ3=new A.hf(B.fYv,"\ud83d\udcd6 Library",D.dK,0)
B.fY3=new A.r(80,40,56)
B.bZ4=new A.hf(B.fY3,"\ud83d\udd25 Fire drill",D.bx,0)
B.aU3=new A.r(0,100,36)
B.bZ5=new A.hf(B.aU3,"\ud83e\udeaa NGMY Licence office",D.M,0)
B.aUK=new A.r(34,56,18)
B.bZ6=new A.hf(B.aUK,"\ud83e\uddd1\u200d\ud83d\udcbc Clerk",D.cN,0)
B.h43=new A.r(-0.4,4.2,-2.4)
B.bZ7=new A.hf(B.h43,"LIVE 120 V",D.bx,0)
B.h5g=new A.r(-80,52,66)
B.bZ8=new A.hf(B.h5g,"\ud83c\udfe5 Walk here to admit the sick",D.f5,0)
B.fSn=new A.r(0,50,84)
B.bZ9=new A.hf(B.fSn,"\ud83d\udcb0 Counter: walk here to pay or sell",D.eh,0)
B.bZa=new A.hf(B.aUK,"\ud83e\uddd1\u200d\ud83d\udcbc Cashier",D.cN,0)
B.c_9=new C.a9(D.a3,D.a8,D.x,L.axD,null,null)
B.c07=new C.a9(D.a3,D.a8,D.x,L.aw6,null,null)
B.bn2=new C.u(1,0.2901960784313726,0.20392156862745098,0.0784313725490196,D.q)
B.bjW=new C.u(1,0.12156862745098039,0.10196078431372549,0.07058823529411765,D.q)
B.bcR=new C.u(1,0.16470588235294117,0.12156862745098039,0.07058823529411765,D.q)
B.djE=w([B.bn2,B.bjW,B.bcR],x.O)
B.c0c=new C.a9(D.ay,D.aD,D.x,B.djE,null,null)
B.beJ=new C.u(1,0.8509803921568627,0.6039215686274509,0.11764705882352941,D.q)
B.d6A=w([F.fv,B.beJ],x.O)
B.c0k=new C.a9(D.ay,D.aD,D.x,B.d6A,null,null)
B.bmg=new C.u(1,0.0392156862745098,0.058823529411764705,0.1803921568627451,D.q)
B.bp_=new C.u(1,0.1411764705882353,0.08235294117647059,0.3215686274509804,D.q)
B.cJ_=w([E.aeE,B.bmg,B.bp_],x.O)
B.c11=new C.a9(D.b3,D.b6,D.x,B.cJ_,null,null)
B.d38=w([E.jJ,E.Ln,E.jJ],x.O)
B.apU=new C.a9(D.a3,D.a8,D.x,B.d38,null,null)
B.bjM=new C.u(1,0.8901960784313725,0.9254901960784314,0.9803921568627451,D.q)
B.d1G=w([D.c,B.bjM],x.O)
B.c2h=new C.a9(D.b3,D.b6,D.x,B.d1G,null,null)
B.bpT=new C.u(1,0.07058823529411765,0.22745098039215686,0.47843137254901963,D.q)
B.cWi=w([E.jJ,B.bpT],x.O)
B.c2s=new C.a9(D.ay,D.aD,D.x,B.cWi,null,null)
B.dkl=w([D.cp,D.dd],x.O)
B.z4=new C.a9(D.b3,D.b6,D.x,B.dkl,null,null)
B.cge=w([E.jJ,E.Ln],x.O)
B.c2H=new C.a9(D.a3,D.a8,D.x,B.cge,null,null)
B.eai={ground:0}
B.J6=new C.dD(B.eai,1,x.M)
B.w0=new A.fH(25,"Green screw: GROUND",B.J6,"The bare copper ground goes on the green screw.",!1,"ground")
B.eay={lineA:0}
B.eYk=new C.dD(B.eay,1,x.M)
B.bGU=new A.fH(23,"LINE screw 1 (top left)",B.eYk,"Hot leg 1 from the panel goes on the top left screw.",!1,"hot")
B.eaz={lineB:0}
B.eY8=new C.dD(B.eaz,1,x.M)
B.bGM=new A.fH(21,"LINE screw 2 (top right)",B.eY8,"Hot leg 2 from the panel goes on the top right screw.",!1,"hot")
B.eaB={loadA:0}
B.eYj=new C.dD(B.eaB,1,x.M)
B.bGt=new A.fH(24,"LOAD screw 1 (bottom left)",B.eYj,"Hot leg 1 to the heater goes on the bottom left screw: it is switched through from the top left one.",!1,"hot")
B.eaD={loadB:0}
B.eYS=new C.dD(B.eaD,1,x.M)
B.bGE=new A.fH(22,"LOAD screw 2 (bottom right)",B.eYS,"Hot leg 2 to the heater goes on the bottom right screw.",!1,"hot")
B.c31=w([B.w0,B.bGU,B.bGM,B.bGt,B.bGE],x.r)
B.c35=w(["flange","wax","toilet","bolts","valve","hosehot","hosecold","faucet","tail","trap","arm"],x.s)
B.a2b=w([0,0,0,0],x.t)
B.c3g=w([0,0,0,1],x.k)
B.cci=w([139,161],x.n)
B.ccp=w([145,158],x.n)
B.cg5=w([U.qw,A3.Tb,Q.lk,Z.aNA],x.f)
B.cgi=w([1,1,1],x.k)
B.cgj=w([1,1,1,1],x.k)
B.h20=new A.r(-57.8,-32,0)
B.b52=new A.z0(0,"Outlet spot 1",!1,B.h20,"low")
B.h2L=new A.r(-9.8,-32,0)
B.b5_=new A.z0(1,"Outlet spot 2",!1,B.h2L,"low")
B.h3h=new A.r(38.2,-32,0)
B.b55=new A.z0(2,"Outlet spot 3",!1,B.h3h,"low")
B.h1D=new A.r(-25.8,0,0)
B.b53=new A.z0(3,"Switch spot 1",!1,B.h1D,"switch")
B.h2F=new A.r(22.2,0,0)
B.b51=new A.z0(4,"Switch spot 2",!1,B.h2F,"switch")
B.h4J=new A.r(-30,48,40)
B.b54=new A.z0(5,"Ceiling light spot",!0,B.h4J,"light")
B.fVs=new A.r(30,48,40)
B.b50=new A.z0(6,"Ceiling fan spot",!0,B.fVs,"fan")
B.uw=w([B.b52,B.b5_,B.b55,B.b53,B.b51,B.b54,B.b50],C.aw("O<z0>"))
B.esy=new C.z(4,6)
B.et4=new C.z(5,7)
B.ett=new C.z(6,8)
B.cgL=w([Q.lk,Ag.uZ,E.T9,E.Ta,B.esy,B.et4,B.ett],C.aw("O<+(H,H)>"))
B.cgO=w([2],x.t)
B.cny=w(["The living room has no power: find the tripped breaker in the panel and reset it.","The kitchen sink drips: pick the wrench and tighten the slip nut under the sink. (Build the house up to Fixtures to see the problems.)"],x.s)
B.h30=new A.r(11,4.6,-6)
B.fYQ=new A.r(11,5.4,-7.85)
B.h2i=new A.r(3.4,5.4,-7.85)
B.aVc=new A.r(3.4,3.4,-7.85)
B.cnA=w([B.h30,B.fYQ,B.h2i,B.aVc],x.o)
B.cog=w([3],x.t)
B.coq=w([300,800,1300,1800],x.n)
B.cqq=w([32,80],x.n)
B.hcX=new A.hl(0,0.7,2.2,2,0,0,0)
B.hcM=new A.hl(3,0.1,0.95,-0.42,-0.3,-0.2,0.05)
B.hd5=new A.hl(6.5,0,0.9,-0.38,0.3,0.2,0.05)
B.hde=new A.hl(9.5,-0.9,1.15,0.1,0,0,0)
B.hdb=new A.hl(12.5,-1.7,1.45,1.6,0,0,0)
B.hcL=new A.hl(15.5,-2.8,1,-0.35,0,0,0)
B.hd4=new A.hl(18.5,-3.6,0.9,0.05,0,0,0)
B.hd8=new A.hl(21.5,-4.6,1.5,1.5,0,0,0)
B.hcY=new A.hl(24.5,-5.4,0.9,-0.4,0,0,0)
B.hdg=new A.hl(27.5,-6.28,0.75,0.05,0,0,0)
B.hcZ=new A.hl(30,-6,2.4,1.7,0,0,0)
B.d06=w([B.hcX,B.hcM,B.hd5,B.hde,B.hdb,B.hcL,B.hd4,B.hd8,B.hcY,B.hdg,B.hcZ],x.x)
B.hcP=new A.hl(0,-3.14,1.2,-0.3,0,0,0)
B.hcI=new A.hl(4,-2.2,1.1,0,0,0,0)
B.hdf=new A.hl(8,-1.2,1,0.4,0,0,0)
B.hcN=new A.hl(12,-0.4,1,0.9,0,0,0)
B.hcQ=new A.hl(15,0.1,0.85,1.7,0,0,0)
B.hcH=new A.hl(18,0.3,0.8,0,0,0,0)
B.hcO=new A.hl(21,0,0.9,-0.2,0.35,0.25,0)
B.hcU=new A.hl(24,0.6,1.4,0.1,-0.2,0,0)
B.hcV=new A.hl(27,1.4,1.2,0.8,0,0,0)
B.hcT=new A.hl(30,2.4,2.3,1.5,0,0,0)
B.d7a=w([B.hcP,B.hcI,B.hdf,B.hcN,B.hcQ,B.hcH,B.hcO,B.hcU,B.hcV,B.hcT],x.x)
B.hcR=new A.hl(0,0.3,2.6,0.5,0,0,0)
B.hda=new A.hl(3,0.1,1,0,0,0,0)
B.hdd=new A.hl(6,0,0.95,0.05,0.2,0.15,0)
B.hd1=new A.hl(9,-0.8,1.6,0.3,0,0,0)
B.hd6=new A.hl(12,-1.57,1,-0.2,0,0,0)
B.hd_=new A.hl(15,-2.4,1.5,0.9,0,0,0)
B.hd3=new A.hl(18,-3.14,1,0.1,0,0,0)
B.hcW=new A.hl(21,-3.9,1.5,0.6,0,0,0)
B.hdh=new A.hl(24,-4.71,1,-0.3,0,0,0)
B.hcJ=new A.hl(27,-5.5,1.3,0.5,0,0,0)
B.hcG=new A.hl(30,-6.28,2.6,0.9,0,0,0)
B.cE2=w([B.hcR,B.hda,B.hdd,B.hd1,B.hd6,B.hd_,B.hd3,B.hcW,B.hdh,B.hcJ,B.hcG],x.x)
B.hd9=new A.hl(0,0,0.5,3.5,0,0,0)
B.hcK=new A.hl(4,0.2,1,-0.3,0,0,0)
B.hdc=new A.hl(8,1,1,0,0,0,0)
B.hcE=new A.hl(12,1.57,1.2,0.3,0,0,0)
B.hd7=new A.hl(16,3.14,1.4,1.2,0,0,0)
B.hcF=new A.hl(20,3.5,0.9,-0.35,0,0,0)
B.hcS=new A.hl(24,4.7,1.1,0,0,0,0)
B.hd0=new A.hl(28,6,1,0.3,0,0,0)
B.hd2=new A.hl(30,6.3,2.2,1.4,0,0,0)
B.d_L=w([B.hd9,B.hcK,B.hdc,B.hcE,B.hd7,B.hcF,B.hcS,B.hd0,B.hd2],x.x)
B.csK=w([B.d06,B.d7a,B.cE2,B.d_L],C.aw("O<ai<hl>>"))
B.csL=w([380,820,1420,1660],x.n)
B.eaK={neutral:0}
B.J7=new C.dD(B.eaK,1,x.M)
B.bGL=new A.fH(23,"Silver screw (top): NEUTRAL",B.J7,y.G,!1,"neutral")
B.bGk=new A.fH(24,"Silver screw (bottom): NEUTRAL",B.J7,y.G,!1,"neutral")
B.eb_={switched:0}
B.eYX=new C.dD(B.eb_,1,x.M)
B.bGi=new A.fH(21,"Brass screw (top): SWITCHED hot",B.eYX,"The top half is the switched one: the red wire that comes back from the wall switch goes here.",!1,"hot")
B.e9Y={always:0}
B.eY5=new C.dD(B.e9Y,1,x.M)
B.bGH=new A.fH(22,"Brass screw (bottom): ALWAYS hot",B.eY5,"The bottom half is always on: the black wire straight from the panel goes here.",!1,"hot")
B.ctY=w([B.w0,B.bGL,B.bGk,B.bGi,B.bGH],x.r)
B.eIr=new C.z(-820,640)
B.eu5=new C.z(820,640)
B.cu2=w([B.eIr,B.eu5],x.f)
B.hk8=new A.px(0,-80,66,24)
B.hk9=new A.px(1,20,48,20)
B.hkh=new A.px(2,20,98,20)
B.hki=new A.px(3,20,148,20)
B.cur=w([B.hk8,B.hk9,B.hkh,B.hki],x.X)
B.CO=w([],x.m)
B.b_4=new A.r5("highway","\ud83d\udee3\ufe0f","Highway board","Huge and wide, on two thick poles, with a walkway under it",420,170,150,B.CO,0,1)
B.b_1=new A.r5("tower","\ud83d\uddfc","Tall tower sign","A big sign high up on one very thick pole",400,210,270,B.CO,0,1)
B.b_7=new A.r5("neon","\ud83c\udf03","Neon board","A big black board with a glowing neon edge",380,190,120,B.CO,0,1)
B.b_6=new A.r5("roof","\ud83c\udfe0","Rooftop board","A tall house with two big TVs, the NGMY carpet on its back, and a huge board on its roof",460,180,308,B.CO,800,1)
B.b_0=new A.r5("screen","\ud83d\udcfa","Big screen","A giant TV screen on a stand",440,250,60,B.CO,0,1)
B.b_8=new A.r5("gate","\ud83d\udeaa","Town gate","A huge arch with the board across it",600,200,200,B.CO,0,1)
B.aZN=new A.lz(-420,140,0.35,0,1)
B.aZL=new A.lz(460,-420,-0.3,160,1.35)
B.cZ4=w([B.aZN,B.aZL],x.m)
B.b__=new A.r5("duo","\ud83e\udea7","Two far apart","Two separate boards: a near one and a taller one far behind it",320,160,140,B.cZ4,0,0.7)
B.aZG=new A.lz(-460,0,0,0,1)
B.aZO=new A.lz(460,0,0,0,1)
B.diR=w([B.aZG,B.abl,B.aZO],x.m)
B.b_a=new A.r5("line3","\u2194\ufe0f","Three in a row","Three separate boards standing in one straight line",300,150,150,B.diR,0,0.6)
B.aZE=new A.lz(-950,250,0.5,0,1)
B.aZD=new A.lz(150,-700,-0.2,220,1.55)
B.aZH=new A.lz(1000,60,-0.55,0,0.9)
B.cPo=w([B.aZE,B.aZD,B.aZH],x.m)
B.b_2=new A.r5("far3","\ud83d\udef0\ufe0f","Three scattered far","Three separate boards far from each other, one of them tall and far behind",320,160,140,B.cPo,0,0.6)
B.aZT=new A.lz(-360,300,0.15,0,1)
B.aZI=new A.lz(360,300,-0.15,0,1)
B.aZQ=new A.lz(0,-120,0,100,1.25)
B.aZK=new A.lz(-160,-640,0.1,260,1.6)
B.c3J=w([B.aZT,B.aZI,B.aZQ,B.aZK],x.m)
B.b_5=new A.r5("skyline","\ud83c\udf06","Skyline","Four separate boards, the taller ones standing behind the shorter ones",300,150,130,B.c3J,0,0.6)
B.aZC=new A.lz(-440,160,0,0,1)
B.aZR=new A.lz(0,160,0,0,1)
B.aZB=new A.lz(440,160,0,0,1)
B.aZS=new A.lz(-440,-420,3.141592653589793,130,1.2)
B.aZF=new A.lz(0,-420,3.141592653589793,130,1.2)
B.aZP=new A.lz(440,-420,3.141592653589793,130,1.2)
B.dku=w([B.aZC,B.aZR,B.aZB,B.aZS,B.aZF,B.aZP],x.m)
B.b_3=new A.r5("lines6","\ud83d\udee4\ufe0f","Two lines of three","Six separate boards: a straight line of three facing front, and a taller line of three behind it facing back",280,140,140,B.dku,0,0.6)
B.aZM=new A.lz(0,300,0,0,1)
B.aZz=new A.lz(0,-300,3.141592653589793,0,1)
B.aZJ=new A.lz(-560,0,-1.5707963267948966,0,1)
B.aZA=new A.lz(560,0,1.5707963267948966,0,1)
B.dpp=w([B.aZM,B.aZz,B.aZJ,B.aZA],x.m)
B.b_9=new A.r5("scatter","\ud83c\udf10","Billboard park","Four separate boards: one at the front, one at the back and one on each side, all facing out",320,160,150,B.dpp,0,0.6)
B.a2D=w([B.b_4,B.b_1,B.b_7,B.b_6,B.b_0,B.b_8,B.b__,B.b_a,B.b_2,B.b_5,B.b_3,B.b_9],C.aw("O<r5>"))
B.dwj=new A.i8(-134,-36,16,44)
B.dw6=new A.i8(34,118,30,66)
B.dw7=new A.i8(34,118,80,116)
B.dw5=new A.i8(34,118,130,166)
B.dwk=new A.i8(-134,-76,140,160)
B.cuv=w([B.dwj,B.dw6,B.dw7,B.dw5,B.dwk],x.T)
B.cuy=w([y.O,y.x,y.R,"Fasten the single black feed from the panel to the FEED screw (it powers both switches through a joined tab).","Fasten the black wire to the first light to the screw of switch 1.","Fasten the black wire to the second light to the screw of switch 2.",y.b,y.n],x.s)
B.eIb=new C.z(-600,1250)
B.eI9=new C.z(-520,1260)
B.eI7=new C.z(-460,1250)
B.esQ=new C.z(520,1280)
B.etd=new C.z(600,1270)
B.eHW=new C.z(-300,1300)
B.czq=w([B.eIb,B.eI9,B.eI7,B.esQ,B.etd,B.eHW],x.f)
B.czS=w([460,900,1500,1740],x.n)
B.cBM=w([50,130],x.n)
B.cBN=w([50,140],x.n)
B.cCz=w([51,52,53],x.t)
B.ey8=new C.z(-9.5,4.6)
B.eAx=new C.z(-5.9,2.3)
B.eGq=new C.z(8.8,4.4)
B.cDQ=w([B.ey8,B.eAx,B.eGq],x.f)
B.cEb=w([5,35],x.n)
B.cEM=w([61,63],x.t)
B.cEZ=w([62,64],x.t)
B.cFZ=w([68,172],x.n)
B.bf3=new C.u(1,0.6039215686274509,0.30980392156862746,0.30980392156862746,D.q)
B.bpV=new C.u(1,0.30980392156862746,0.47843137254901963,0.3686274509803922,D.q)
B.z7=w([B.nP,B.XE,B.bf3,B.bpV,B.afJ,D.j7],x.O)
B.bmv=new C.u(1,0.23137254901960785,0.07058823529411765,0.07058823529411765,D.q)
B.bgd=new C.u(1,0.23137254901960785,0.1843137254901961,0.0392156862745098,D.q)
B.bdo=new C.u(1,0.043137254901960784,0.1803921568627451,0.09019607843137255,D.q)
B.cGQ=w([B.bmv,B.bgd,B.bdo],x.O)
B.tb=new A.jy("ground","Bare copper \xb7 ground",B.vH,D.c,"ground")
B.tI=new C.u(1,0.14901960784313725,0.14901960784313725,0.16470588235294117,D.q)
B.h8W=new A.jy("feed","Black \xb7 hot feed from the panel",B.tI,D.c,"hot")
B.LK=new C.u(1,0.22745098039215686,0.1803921568627451,0.1803921568627451,D.q)
B.h8R=new A.jy("loadA","Black \xb7 to light 1",B.LK,D.c,"hot")
B.bcF=new C.u(1,0.16862745098039217,0.16862745098039217,0.2,D.q)
B.h8T=new A.jy("loadB","Black \xb7 to light 2",B.bcF,D.c,"hot")
B.cHn=w([B.tb,B.h8W,B.h8R,B.h8T],x.d)
B.aw0=w([72,73,74,75],x.t)
B.eHT=new C.z(-25,-15)
B.eqc=new C.z(25,-15)
B.eHS=new C.z(-25,15)
B.eqb=new C.z(25,15)
B.cLj=w([B.eHT,B.eqc,B.eHS,B.eqb],x.f)
B.fYs=new A.r(-125,292,-114.5)
B.h0M=new A.r(125,292,-114.5)
B.h3m=new A.r(125,208,-114.5)
B.h0s=new A.r(-125,208,-114.5)
B.cLA=w([B.fYs,B.h0M,B.h3m,B.h0s],x.o)
B.bG4=new A.pO("wall","Whole-wall TV","\ud83c\udfac",0,!0)
B.bGc=new A.pO("tv200",'Cinema 200"',"\ud83c\udfac",175,!1)
B.bG7=new A.pO("tv150",'Cinema 150"',"\ud83c\udfac",130,!1)
B.bG8=new A.pO("bangtv",'Beovision TV 77"',"\ud83d\udcfa",66,!1)
B.bG3=new A.pO("sonytv",'Sony Bravia 75"',"\ud83d\udcfa",64,!1)
B.bGd=new A.pO("lgtv",'LG OLED 65"',"\ud83d\udcfa",56,!1)
B.bG6=new A.pO("tv",'Samsung Neo QLED 55"',"\ud83d\udcfa",48,!1)
B.bGb=new A.pO("appletv",'Apple TV 4K 50"',"\ud83d\udcfa",44,!1)
B.bGa=new A.pO("lamp","Table lamp","\ud83d\udca1",0,!1)
B.bG9=new A.pO("toaster","Toaster","\ud83c\udf5e",0,!1)
B.bG5=new A.pO("hairdryer","Hair dryer","\ud83d\udc87",0,!1)
B.a2V=w([B.bG4,B.bGc,B.bG7,B.al4,B.bG8,B.bG3,B.bGd,B.bG6,B.bGb,B.bGa,B.bG9,B.bG5],C.aw("O<pO>"))
B.cLL=w([y.O,y.x,y.R,y.N,y.E,y.k,y.b,y.n],x.s)
B.bfr=new C.u(1,0.7764705882352941,0.5254901960784314,0.25882352941176473,D.q)
B.bgl=new C.u(1,0.43529411764705883,0.2901960784313726,0.1803921568627451,D.q)
B.bnq=new C.u(1,0.6627450980392157,0.44313725490196076,0.29411764705882354,D.q)
B.awi=w([F.mx,B.bfr,E.ael,B.bgl,B.bnq],x.O)
B.cT3=w([y.O,"Two cables come into the box: one from the breaker panel (LINE) and one going to the light (LOAD).","Twist the two white wires together with a wire nut. A switch does not cut the neutral.",y.R,"Fasten the black wire from the panel to one BRASS screw.","Fasten the black wire that goes to the light to the other BRASS screw.","Push the switch into the box, put the plate on and test with the power on."],x.s)
B.eoX=new C.z(0,330)
B.eHJ=new C.z(-120,1080)
B.epq=new C.z(120,1080)
B.eHU=new C.z(-300,1000)
B.eqA=new C.z(300,1000)
B.eIl=new C.z(-700,800)
B.etC=new C.z(700,800)
B.cTs=w([B.eoX,B.eHJ,B.epq,B.eHU,B.eqA,B.eIl,B.etC],x.f)
B.cTy=w(["Walnut","Blue grey","Brick red","Sage green","Sand","Charcoal"],x.s)
B.jS=w(["switch","switch2p","switch3","switch4","switchsmart","switchcombo"],x.s)
B.h_i=new A.r(-6.5,7.5,-7.85)
B.h_n=new A.r(-6.5,7.8,-3)
B.cTP=w([B.h_i,B.h_n],x.o)
B.h9l=new A.FM("NGMY JOBS","Find work. Get hired. Get paid.",D.aE,D.iq,D.vA)
B.h9t=new A.FM("NGMY LOANS","Help when you need it most.",D.cS,D.dY,D.vG)
B.h9o=new A.FM("KISWAHILI SCHOOL","Learn Swahili and English, step by step.",D.bP,D.tu,D.vK)
B.h9q=new A.FM("CIVIC REGISTRY","Your family, your community, registered.",D.d0,D.d8,D.nR)
B.h9k=new A.FM("CORE PROTOCOL","Studios for curious minds.",D.b5,D.jo,D.pM)
B.h9p=new A.FM("BUILD AND FIX","The Construction Lab: wire it, plumb it.",D.fu,D.hC,D.tF)
B.h9e=new A.FM("CREATE WITH NGMY","Videos, slides, bios and books.",D.bA,D.kx,D.pI)
B.cTT=w([B.h9l,B.h9t,B.h9o,B.h9q,B.h9k,B.h9p,B.h9e],C.aw("O<FM>"))
B.hk5=new A.px(0,-100,100,24)
B.hkc=new A.px(1,90,100,24)
B.cU4=w([B.hk5,B.hkc],x.X)
B.eIv=new C.z(-95,160)
B.eI1=new C.z(-35,175)
B.eun=new C.z(95,170)
B.cU8=w([B.eIv,B.eI1,B.eun],x.f)
B.bfU=new C.u(1,0.9176470588235294,0.9490196078431372,0.9686274509803922,D.q)
B.ble=new C.u(1,0.9647058823529412,0.9098039215686274,0.9098039215686274,D.q)
B.bkf=new C.u(1,0.9529411764705882,0.9215686274509803,0.7843137254901961,D.q)
B.awF=w([B.B0,B.bfU,B.ble,B.bkf],x.O)
B.ea6={common:0}
B.eYJ=new C.dD(B.ea6,1,x.M)
B.bGs=new A.fH(23,"COMMON screw (the odd one)",B.eYJ,"The COMMON screw is the one with a different colour. The black wire that brings the power in, or goes to the light, belongs here.",!1,"hot")
B.eb1={trav1:0,trav2:1}
B.aP5=new C.dD(B.eb1,2,x.M)
B.bGy=new A.fH(21,"Traveler screw (top)",B.aP5,y.X,!1,"hot")
B.bGN=new A.fH(22,"Traveler screw (bottom)",B.aP5,y.X,!1,"hot")
B.cUk=w([B.w0,B.bGs,B.bGy,B.bGN],x.r)
B.dwq=new A.i8(-60,60,28,50)
B.dwm=new A.i8(-150,-100,70,170)
B.dw_=new A.i8(100,150,70,170)
B.dwr=new A.i8(-60,-20,156,186)
B.dw4=new A.i8(20,60,156,186)
B.cUz=w([B.dwq,B.dwm,B.dw_,B.dwr,B.dw4],x.T)
B.cUB=w([y.O,"The cable comes in through the top of the box. Strip about 3/4 inch of insulation from each wire.","Fasten the bare copper ground wire to the GREEN screw.","Fasten the white (neutral) wire to a SILVER screw.","Fasten the black (hot) wire to a BRASS screw. Wrap each wire clockwise under its screw.","Fold the wires back and push the outlet into the box.","Put the cover plate on, then turn the power on and test."],x.s)
B.h6w=new A.r(-3.6,7.5,-7.85)
B.fZK=new A.r(-3.6,4.2,-7.85)
B.cUI=w([B.h6w,B.fZK],x.o)
B.cUK=w([-0.5,-0.25,0,0.25,0.5],x.n)
B.eO2=new C.bj(600,400,!0)
B.eNA=new C.bj(1030,400,!0)
B.eNB=new C.bj(1210,400,!0)
B.cVd=w([B.eO2,B.eNA,B.eNB],C.aw("O<+(L,L,R)>"))
B.cVt=w([0,2,1,3,4,6,7,8],x.t)
B.eOG=new C.bj(-0.1,0,0.5)
B.eQx=new C.bj(0.35,-0.4,0.3)
B.ePu=new C.bj(-0.4,0.55,0.35)
B.cVz=w([B.eOG,B.eQx,B.ePu],C.aw("O<+(L,L,L)>"))
B.eHD=new C.z(-1050,"store")
B.aNN=new C.z(-840,"tower")
B.eId=new C.z(-630,"tower")
B.eI3=new C.z(-420,"gasstation")
B.aNM=new C.z(-210,"tower")
B.ep0=new C.z(0,"hq")
B.aNB=new C.z(210,"tower")
B.er7=new C.z(420,"store")
B.etf=new C.z(630,"tower")
B.aND=new C.z(840,"tower")
B.epg=new C.z(1050,"gasstation")
B.cW8=w([B.eHD,B.aNN,B.eId,B.eI3,B.aNM,B.ep0,B.aNB,B.er7,B.etf,B.aND,B.epg],x.d6)
B.a3j=w(["Always switch the breaker OFF and test the wires with a tester before you touch them.","Never use water on an electrical fire: switch the power off at the breaker first.","Reversed hot and neutral can look fine and still be a shock hazard.","A GFCI outlet protects you near water: press TEST every month.","A ceiling fan needs a fan-rated box, because it is heavy and it shakes."],x.s)
B.h3t=new A.r(9.8,6,-7.85)
B.fYV=new A.r(9.8,7.5,-7.85)
B.h6S=new A.r(-8,7.5,-7.85)
B.h0u=new A.r(-8,1.5,-7.85)
B.cWl=w([B.h3t,B.fYV,B.h6S,B.h0u],x.o)
B.bfK=new C.u(1,0.5411764705882353,0.35294117647058826,0.23529411764705882,D.q)
B.aem=new C.u(1,0.10588235294117647,0.07058823529411765,0.06274509803921569,D.q)
B.bpN=new C.u(1,0.8509803921568627,0.27450980392156865,0.49411764705882355,D.q)
B.ada=new C.u(1,0.23137254901960785,0.24705882352941178,0.3607843137254902,D.q)
B.elm=new A.rF(B.bfK,B.aem,B.bpN,B.ada,"xbot")
B.eVH=new A.Ff(0,"Ama",0,2,B.elm,"A nurse who works nights.")
B.bhN=new C.u(1,0.4196078431372549,0.27058823529411763,0.18823529411764706,D.q)
B.beY=new C.u(1,0.08627450980392157,0.06274509803921569,0.06274509803921569,D.q)
B.bng=new C.u(1,0.1803921568627451,0.5607843137254902,0.3568627450980392,D.q)
B.elo=new A.rF(B.bhN,B.beY,B.bng,B.L6,"soldier")
B.eVI=new A.Ff(1,"Joseph",1,2,B.elo,"A student who is always hungry.")
B.bli=new C.u(1,0.6274509803921569,0.4196078431372549,0.2784313725490196,D.q)
B.bg2=new C.u(1,0.2901960784313726,0.24705882352941178,0.4196078431372549,D.q)
B.elk=new A.rF(B.bli,B.LD,D.aE,B.bg2,"xbot")
B.eVG=new A.Ff(2,"Grace",3,4,B.elk,"A teacher who marks papers late.")
B.adn=new C.u(1,0.8784313725490196,0.6431372549019608,0.48627450980392156,D.q)
B.ahg=new C.u(1,0.1843137254901961,0.43529411764705883,0.7098039215686275,D.q)
B.ell=new A.rF(B.adn,D.afp,B.ahg,B.L6,"soldier")
B.eVD=new A.Ff(3,"Daniel",6,8,B.ell,"A driver who sleeps in the day.")
B.bnT=new C.u(1,0.788235294117647,0.5450980392156862,0.3686274509803922,D.q)
B.bge=new C.u(1,0.16862745098039217,0.17647058823529413,0.22745098039215686,D.q)
B.elp=new A.rF(B.bnT,B.aem,D.aC,B.bge,"xbot")
B.eVJ=new A.Ff(4,"Fatima",7,8,B.elp,"A baker who gets up at four.")
B.ah7=new C.u(1,0.47843137254901963,0.29411764705882354,0.18823529411764706,D.q)
B.bmo=new C.u(1,0.24705882352941178,0.22745098039215686,0.2,D.q)
B.elq=new A.rF(B.ah7,D.e2,D.d9,B.bmo,"soldier")
B.eVF=new A.Ff(5,"Papa Moses",10,-1,B.elq,"The oldest in the house. He watches TV all day.")
B.bk9=new C.u(1,0.5490196078431373,0.3568627450980392,0.23137254901960785,D.q)
B.elj=new A.rF(B.bk9,B.aff,D.aw,B.ada,"xbot")
B.eVE=new A.Ff(6,"Mama Rose",9,-1,B.elj,"Cooks for everybody in the kitchen.")
B.CE=w([B.eVH,B.eVI,B.eVG,B.eVD,B.eVJ,B.eVF,B.eVE],C.aw("O<Ff>"))
B.aVm=new A.r(5,1.8,-7.85)
B.h1s=new A.r(5,-0.1,-7.85)
B.h2s=new A.r(12.5,-0.1,-7.85)
B.cXn=w([B.aVm,B.h1s,B.h2s],x.o)
B.lG=w(["outlet","gfci","split","v240four","v240three","v240only","isolated"],x.s)
B.fQF=new A.r(3,3.1,-7.1)
B.aVe=new A.r(3,1.7,-7.1)
B.h2n=new A.r(3,1,-7.1)
B.fV4=new A.r(3.65,0.5,-7.1)
B.fWV=new A.r(4.3,1,-7.1)
B.h1n=new A.r(4.3,1.8,-7.1)
B.h6V=new A.r(5,1.8,-7.1)
B.cXQ=w([B.fQF,B.aVe,B.h2n,B.fV4,B.fWV,B.h1n,B.h6V,B.aVm],x.o)
B.al8=new A.fH(23,"Silver screw W: NEUTRAL",B.J7,y.I,!1,"neutral")
B.eak={hot1:0,hot2:1}
B.Tx=new C.dD(B.eak,2,x.M)
B.bGe=new A.fH(21,"Brass screw X: HOT",B.Tx,y.l,!1,"hot")
B.bGT=new A.fH(22,"Brass screw Y: HOT",B.Tx,y.l,!1,"hot")
B.cXZ=w([B.w0,B.al8,B.bGe,B.bGT],x.r)
B.cYj=w(["My outlet is dead and it is dark in here. Please come and wire it.","The light in my room does not work, and my phone will not charge. Can you fix the wiring?","I have no power in my room at all. Can an electrician come?"],x.s)
B.eSf=new C.cw([-0.35,-0.2,0.42,0.3])
B.eSs=new C.cw([0.3,0.25,0.32,0.38])
B.eRi=new C.cw([0.05,-0.55,0.22,0.14])
B.eRL=new C.cw([-0.5,0.45,0.2,0.16])
B.cYv=w([B.eSf,B.eSs,B.eRi,B.eRL],x.eV)
B.cYw=w([D.aw,D.be,D.aE,D.d0,D.bO,D.f2],x.O)
B.h6b=new A.r(0.6,11,-3.4)
B.fXO=new A.r(0.6,3.2,-3.2)
B.h5F=new A.r(0.6,2.2,-1.9)
B.fXq=new A.r(0.6,0.7,-1.5)
B.cYR=w([B.h6b,B.fXO,B.h5F,B.fXq],x.o)
B.cZ2=w([0,24,-24,48,-48],x.n)
B.Kd=new A.jy("neutral","White \xb7 neutral",B.oK,D.au,"neutral")
B.h8F=new A.jy("line","Black \xb7 hot from the panel (LINE)",B.tI,D.c,"hot")
B.h8X=new A.jy("load","Black \xb7 hot to the light (LOAD)",B.LK,D.c,"hot")
B.cZe=w([B.tb,B.Kd,B.h8F,B.h8X],x.d)
B.cZv=w([y.O,y.x,y.R,"Fasten the white NEUTRAL wire to the NEUTRAL (silver) screw. A regular switch never touches the neutral, this one does.","Fasten the black wire from the panel to the LINE screw.","Fasten the black wire that goes to the light to the LOAD screw.",y.b,y.n],x.s)
B.eIk=new C.z(-700,330)
B.etB=new C.z(700,380)
B.eHF=new C.z(-1100,-420)
B.epm=new C.z(1100,-480)
B.eHL=new C.z(-1300,100)
B.ept=new C.z(1350,30)
B.ep1=new C.z(0,-900)
B.eHM=new C.z(-1500,-300)
B.epu=new C.z(1550,-200)
B.cZy=w([B.eIk,B.etB,B.eHF,B.epm,B.eHL,B.ept,B.ep1,B.eHM,B.epu],x.f)
B.cZE=w([U.qw,A3.Tb,Q.lk],x.f)
B.hk7=new A.px(0,-64,120,26)
B.hka=new A.px(1,64,120,26)
B.hkf=new A.px(2,0,84,24)
B.d_a=w([B.hk7,B.hka,B.hkf],x.X)
B.fVZ=new A.r(0,8.3,0)
B.aUP=new A.r(0,3.9,0)
B.a3t=w([B.fVZ,B.aUP],x.o)
B.d_q=w([y.O,"Make sure the box is rated for a fan. A plain light box cannot carry the weight and the shaking.","Join the house ground wire to the fan ground.","Join the house white wire to the fan white wire with a wire nut.","Join the house black wire to the fan black wire with a wire nut.","Push the wires up into the box and fasten the canopy to the ceiling.",y.f],x.s)
B.eGI=new C.z(-3.5,11)
B.eww=new C.z(3.5,11)
B.euQ=new C.z(-3.5,-11)
B.ess=new C.z(3.5,-11)
B.d_H=w([B.eGI,B.eww,B.euQ,B.ess],x.f)
B.h3Q=new A.r(-0.6,11,-3.4)
B.fZ1=new A.r(-0.6,3.2,-3.2)
B.h2T=new A.r(-0.6,2.2,-1.9)
B.h7e=new A.r(-0.6,0.7,-1.5)
B.d_J=w([B.h3Q,B.fZ1,B.h2T,B.h7e],x.o)
B.Hw=w(["dog","cat","cow","sheep","chicken","horse"],x.s)
B.eDO=new C.z(-1.2,0)
B.eMo=new C.z(1.2,0)
B.d0n=w([B.eDO,B.eMo],x.f)
B.d0Q=w([40,70,100,130,160],x.n)
B.bGu=new A.fH(23,"NEUTRAL screw (silver)",B.J7,"The electronics inside need the neutral wire to run. White goes on the silver screw.",!1,"neutral")
B.eaA={line:0}
B.eYR=new C.dD(B.eaA,1,x.M)
B.bGG=new A.fH(21,"LINE screw (brass, hot in)",B.eYR,"The black wire from the breaker panel goes on the LINE screw.",!1,"hot")
B.eaE={load:0}
B.eY_=new C.dD(B.eaE,1,x.M)
B.bGJ=new A.fH(22,"LOAD screw (brass, hot out)",B.eY_,"The black wire that goes to the light goes on the LOAD screw.",!1,"hot")
B.d1_=w([B.w0,B.bGu,B.bGG,B.bGJ],x.r)
B.egt=new A.nq("flange","flange","Toilet flange",D.X,"The flange is fixed to the floor over the drain. Everything else sits on it.",!1,0)
B.ddS=w(["flange"],x.s)
B.egr=new A.nq("wax","wax","Wax ring",B.ddS,"The wax ring goes on the flange before the toilet. It makes the seal against sewer gas and water.",!1,0)
B.doH=w(["wax"],x.s)
B.ego=new A.nq("toilet","toilet","Toilet",B.doH,"The toilet is lowered straight down onto the wax ring. The ring has to be there first.",!1,0)
B.dmZ=w(["toilet"],x.s)
B.egs=new A.nq("bolts","bolts","Toilet bolts",B.dmZ,"The two bolts hold the toilet to the flange. Set the toilet first.",!1,2)
B.egp=new A.nq("tvalve","valve","Toilet shut-off valve",D.X,"The shut-off valve goes on the pipe that comes out of the wall.",!0,0)
B.dn5=w(["tvalve","toilet"],x.s)
B.egq=new A.nq("those","hosecold","Toilet supply hose",B.dn5,"The hose joins the valve to the toilet tank, so both must be there first.",!1,2)
B.aIN=new A.nq("faucet","faucet","Faucet",D.X,"The faucet goes through the hole in the counter.",!1,0)
B.aIQ=new A.nq("vhot","valve","Hot shut-off valve (left)",D.X,y.W,!0,0)
B.aIO=new A.nq("vcold","valve","Cold shut-off valve (right)",D.X,y.W,!0,0)
B.do5=w(["vhot","faucet"],x.s)
B.aIR=new A.nq("hhot","hosehot","Hot supply hose",B.do5,"The hose joins the hot valve to the faucet, so the valve and the faucet must be there first.",!1,2)
B.do2=w(["vcold","faucet"],x.s)
B.aIP=new A.nq("hcold","hosecold","Cold supply hose",B.do2,"The hose joins the cold valve to the faucet, so the valve and the faucet must be there first.",!1,2)
B.aIM=new A.nq("tail","tail","Tailpiece",D.X,"The tailpiece hangs from the sink drain. It is the first piece of the drain.",!1,0)
B.dmS=w(["tail"],x.s)
B.aIS=new A.nq("trap","trap","P-trap",B.dmS,"The P-trap joins the tailpiece. Build the drain from the top down.",!1,1)
B.dn_=w(["trap"],x.s)
B.aIT=new A.nq("arm","arm","Trap arm",B.dn_,"The trap arm joins the trap and goes into the wall.",!1,1)
B.cWT=w([B.egt,B.egr,B.ego,B.egs,B.egp,B.egq,B.aIN,B.aIQ,B.aIO,B.aIR,B.aIP,B.aIM,B.aIS,B.aIT],x.fI)
B.emd=new A.X_("bathroom","Bathroom",B.cWT,"Fit out a bathroom: a toilet and a sink with its faucet, supply hoses and drain.")
B.dfL=w([B.aIN,B.aIQ,B.aIO,B.aIR,B.aIP,B.aIM,B.aIS,B.aIT],x.fI)
B.eme=new A.X_("kitchen","Kitchen",B.dfL,"Fit out a kitchen sink: the faucet, the hot and cold supplies and the drain.")
B.axt=w([B.emd,B.eme],C.aw("O<X_>"))
B.eIu=new C.z(-900,400)
B.euj=new C.z(900,400)
B.eIs=new C.z(-900,1000)
B.euh=new C.z(900,1000)
B.eHV=new C.z(-300,1260)
B.eqB=new C.z(300,1260)
B.eHB=new C.z(-1000,700)
B.epd=new C.z(1000,700)
B.eIe=new C.z(-640,90)
B.etg=new C.z(640,90)
B.eIt=new C.z(-900,1400)
B.eui=new C.z(900,1400)
B.d1u=w([B.eIu,B.euj,B.eIs,B.euh,B.eHV,B.eqB,B.eHB,B.epd,B.eIe,B.etg,B.eIt,B.eui],x.f)
B.fQC=new A.r(8.2,0.9,-6.3)
B.h34=new A.r(8.2,-0.1,-6.3)
B.fUo=new A.r(8.2,-0.1,-7.85)
B.d26=w([B.fQC,B.h34,B.fUo],x.o)
B.etc=new C.z(-4.5,10)
B.eJh=new C.z(4.5,10)
B.eMm=new C.z(-4.5,-10)
B.eJd=new C.z(4.5,-10)
B.d2h=w([B.etc,B.eJh,B.eMm,B.eJd],x.f)
B.d2i=w([-0.28,0.28],x.n)
B.dwt=new A.i8(-70,70,20,44)
B.dwe=new A.i8(-110,-50,80,100)
B.dw9=new A.i8(50,110,80,100)
B.dwd=new A.i8(-110,-50,130,150)
B.dw8=new A.i8(50,110,130,150)
B.d2v=w([B.dwt,B.dwe,B.dw9,B.dwd,B.dw8],x.T)
B.d2L=w([D.aw,D.aE,D.be,D.n4,D.d0,D.ca,D.f2],x.O)
B.eCi=new C.z("back","Back wall")
B.eM7=new C.z("left","Left wall")
B.eEq=new C.z("right","Right wall")
B.d3b=w([B.eCi,B.eM7,B.eEq],x.L)
B.ea0={black:0}
B.J8=new C.dD(B.ea0,1,x.M)
B.bGl=new A.fH(51,"Black wire nut: HOT",B.J8,"The house black wire joins the fixture black wire.",!1,"hot")
B.eb7={white:0}
B.J5=new C.dD(B.eb7,1,x.M)
B.bGQ=new A.fH(52,"White wire nut: NEUTRAL",B.J5,"The house white wire joins the fixture white wire.",!1,"neutral")
B.bGg=new A.fH(53,"Green ground connection",B.J6,"The bare copper house ground joins the green fixture ground wire.",!1,"ground")
B.d3m=w([B.bGl,B.bGQ,B.bGg],x.r)
B.eI0=new C.z(-34,-6)
B.eqD=new C.z(30,10)
B.eHE=new C.z(-10,24)
B.d3r=w([B.eI0,B.eqD,B.eHE],x.f)
B.d3z=w([y.O,y.x,y.R,"Fasten hot leg 1 from the panel (black) to the top LEFT screw.","Fasten hot leg 2 from the panel (red) to the top RIGHT screw.","Fasten hot leg 1 to the heater (black) to the bottom LEFT screw.","Fasten hot leg 2 to the heater (red) to the bottom RIGHT screw.",y.b,y.n],x.s)
B.bEQ=new A.DX("Oak",B.Bd,"wood")
B.bES=new A.DX("Dark wood",B.pX,"wood")
B.ah8=new C.u(1,0.5529411764705883,0.5647058823529412,0.5882352941176471,D.q)
B.bEU=new A.DX("Grey carpet",B.ah8,"carpet")
B.bnM=new C.u(1,0.3568627450980392,0.4980392156862745,0.6509803921568628,D.q)
B.bER=new A.DX("Blue carpet",B.bnM,"carpet")
B.bld=new C.u(1,0.8470588235294118,0.803921568627451,0.7058823529411765,D.q)
B.bEO=new A.DX("Cream carpet",B.bld,"carpet")
B.bET=new A.DX("White tile",B.Xo,"tile")
B.bEP=new A.DX("Slate tile",B.adY,"tile")
B.axP=w([B.bEQ,B.bES,B.bEU,B.bER,B.bEO,B.bET,B.bEP],C.aw("O<DX>"))
B.aa1=new A.jy("hot1","Black \xb7 hot 1",B.tI,D.c,"hot")
B.AN=new C.u(1,0.8196078431372549,0.29411764705882354,0.22745098039215686,D.q)
B.aa2=new A.jy("hot2","Red \xb7 hot 2",B.AN,D.c,"hot")
B.d4i=w([B.Kd,B.aa1,B.aa2],x.d)
B.eO7=new C.bj(-80,100,D.aw)
B.eQ0=new C.bj(80,100,D.be)
B.eP9=new C.bj(-80,150,D.aE)
B.d4j=w([B.eO7,B.eQ0,B.eP9],x.dV)
B.hk3=new A.px(0,0,78,26)
B.d4r=w([B.hk3],x.X)
B.eaZ={store:0,gasstation:1}
B.eYT=new C.dD(B.eaZ,2,x.M)
B.bse=new A.z5("food","\ud83c\udf54","Food",B.eYT)
B.eaW={shop:0,store:1}
B.eYs=new C.dD(B.eaW,2,x.M)
B.bsd=new A.z5("groceries","\ud83d\uded2","Groceries",B.eYs)
B.eaj={hospital:0}
B.eYn=new C.dD(B.eaj,1,x.M)
B.bsg=new A.z5("medicine","\ud83d\udc8a","Medicine",B.eYn)
B.eam={hq:0,tower:1}
B.eYP=new C.dD(B.eam,2,x.M)
B.bsc=new A.z5("package","\ud83d\udce6","Package",B.eYP)
B.e9v={school:0,firestation:1,hq:2}
B.eYa=new C.dD(B.e9v,3,x.M)
B.bsf=new A.z5("letters","\u2709\ufe0f","Letters",B.eYa)
B.QD=w([B.bse,B.bsd,B.bsg,B.bsc,B.bsf],C.aw("O<z5>"))
B.d4G=w([y.O,y.x,"Fasten the white neutral to a SILVER screw.","Fasten the black hot to a BRASS screw.","Fasten the green wire with the yellow stripe (the isolated ground, which runs all the way to the panel) to the GREEN screw with the orange triangle. The box itself is grounded with its own bare copper wire.",y.b,y.n],x.s)
B.d4N=w([-1000,-500,0,500,1000],x.n)
B.h2U=new A.r(3,3.2,-7.85)
B.h7g=new A.r(3,4,-7.85)
B.h6x=new A.r(3,4.2,-7.4)
B.fSL=new A.r(3,3.95,-7)
B.d5L=w([B.h2U,B.h7g,B.h6x,B.fSL],x.o)
B.d5N=w(["The sink leaks and there is water on the floor. Please fix the plumbing.","The toilet is not connected and the water is running everywhere. Help!","There is no water at my sink and the pipes are open. Can a plumber come?"],x.s)
B.WP=new C.u(1,0.23137254901960785,0.3568627450980392,0.47843137254901963,D.q)
B.d5Y=w([D.al,B.WP,D.bL,D.bs],x.O)
B.eZn=new A.rJ("apple","\ud83c\udf4e","Apple","A little energy",3,0.12,0,0.1,!1)
B.eZo=new A.rJ("water","\ud83d\udca7","Water","Quenches your thirst",2,0,0,0.8,!1)
B.eZp=new A.rJ("juice","\ud83e\udd64","Juice","Some energy and a drink",4,0.18,0,0.5,!1)
B.eZu=new A.rJ("sandwich","\ud83e\udd6a","Sandwich","A good bit of energy",6,0.3,0,0,!1)
B.eZm=new A.rJ("meal","\ud83c\udf54","Burger meal","Lots of energy",10,0.55,0,0,!1)
B.d60=w([B.eZn,B.eZo,B.eZp,B.eZu,B.eZm],x.y)
B.eIf=new C.z(-660,340)
B.eHY=new C.z(-330,340)
B.eqE=new C.z(330,340)
B.eti=new C.z(660,340)
B.eIg=new C.z(-660,500)
B.eHZ=new C.z(-330,500)
B.eqF=new C.z(330,500)
B.etj=new C.z(660,500)
B.eIh=new C.z(-660,780)
B.eI_=new C.z(-330,780)
B.eqH=new C.z(330,780)
B.etk=new C.z(660,780)
B.eI8=new C.z(-500,940)
B.esN=new C.z(500,940)
B.d6C=w([B.eIf,B.eHY,B.eqE,B.eti,B.eIg,B.eHZ,B.eqF,B.etj,B.eIh,B.eI_,B.eqH,B.etk,B.eI8,B.esN],x.f)
B.h3x=new A.r(6,0.2,0)
B.h1S=new A.r(6,2.6,0)
B.aVQ=new A.r(8.6,2.6,0)
B.d73=w([B.h3x,B.h1S,B.aVQ],x.o)
B.d7x=w([D.c,D.dt,D.eo,D.f3,D.bN,D.bM],x.O)
B.eIo=new C.z(-7,-7)
B.etQ=new C.z(7,-7)
B.eIn=new C.z(-7,7)
B.etP=new C.z(7,7)
B.d7M=w([B.eIo,B.etQ,B.eIn,B.etP],x.f)
B.d7O=w([-2.4,2.4],x.n)
B.d7P=w([-0.5,0,0.5],x.n)
B.al7=new A.fH(21,"Brass screw X: HOT",B.Tx,y.p,!1,"hot")
B.al5=new A.fH(22,"Brass screw Y: HOT",B.Tx,y.p,!1,"hot")
B.d7X=w([B.w0,B.al7,B.al5],x.r)
B.h91=new A.Pz("Black","Hot (line or switched)","Brass terminal","120 V branch circuit","Carries the power from the breaker. Treat it as live until it is tested dead.","Can be a traveler in a three-way switch, or a switched hot. Verify with a tester.")
B.h9_=new A.Pz("Red","Hot (second hot or traveler)","Brass or the marked traveler terminal","Switch legs, travelers, fan and light controls","Often the switched wire to a fan or light, or a traveler.","Check the diagram: red can be a traveler or a second circuit.")
B.h8Z=new A.Pz("White","Neutral","Silver terminal","120 V branch circuit","The return path for the current. It can still be live if something is wrong.","In a switch loop a white wire can be re-marked as a hot. A white wire is not always neutral.")
B.h8Y=new A.Pz("Bare copper or green","Equipment ground","Green screw or the ground lead","Every grounded device","Not for current in normal use. It is the safety path if a fault happens.","Never use the neutral as a ground. Older homes may have no ground at all: that needs verification.")
B.h90=new A.Pz("Gray / blue / others","Depends on the installation","See the device diagram","Low voltage, control wires, other systems","Do not guess what a wire does from its color.","Colors and their meaning are not the same everywhere. REQUIRES VERIFICATION.")
B.d80=w([B.h91,B.h9_,B.h8Z,B.h8Y,B.h90],C.aw("O<Pz>"))
B.QL=w([-1.6,1.6],x.n)
B.h8D=new A.jy("blackLine","Black \xb7 from the breaker",B.tI,D.c,"hot")
B.h8U=new A.jy("blackLoad","Black \xb7 to the light",B.LK,D.c,"hot")
B.d89=w([B.h8D,B.h8U,B.tb],x.d)
B.d8r=w([0,10,22,36,52],x.n)
B.hk6=new A.px(0,-60,130,26)
B.hkb=new A.px(1,80,56,22)
B.d8s=w([B.hk6,B.hkb],x.X)
B.d8P=w([D.bn,D.bI,D.aw,D.aR,D.bs],x.O)
B.ear={isoground:0}
B.eY3=new C.dD(B.ear,1,x.M)
B.bGP=new A.fH(25,"Isolated-ground screw (green, orange triangle)",B.eY3,"The dedicated ground wire goes on the green screw with the orange triangle. It does not touch the box or the strap.",!1,"ground")
B.bGI=new A.fH(23,"Silver screw: NEUTRAL",B.J7,y.c,!1,"neutral")
B.eal={hot:0}
B.a7L=new C.dD(B.eal,1,x.M)
B.bGp=new A.fH(21,"Brass screw: HOT",B.a7L,y.u,!1,"hot")
B.d9_=w([B.bGP,B.bGI,B.bGp],x.r)
B.bcy=new C.u(1,0.9294117647058824,0.9019607843137255,0.8392156862745098,D.q)
B.baF=new C.u(1,0.9137254901960784,0.8274509803921568,0.8274509803921568,D.q)
B.b9R=new C.u(1,0.8352941176470589,0.8941176470588236,0.8156862745098039,D.q)
B.afu=new C.u(1,0.9529411764705882,0.8901960784313725,0.6549019607843137,D.q)
B.bfd=new C.u(1,0.7254901960784313,0.7647058823529411,0.8666666666666667,D.q)
B.bnV=new C.u(1,0.5607843137254902,0.6392156862745098,0.6588235294117647,D.q)
B.ay5=w([B.bcy,B.X8,B.baF,B.b9R,B.afu,B.bfd,B.afy,B.bnV],x.O)
B.ea_={blackLine:0,blackLoad:1}
B.aOP=new C.dD(B.ea_,2,x.M)
B.bGv=new A.fH(21,"Brass screw (top)",B.aOP,y.v,!1,"hot")
B.bGh=new A.fH(22,"Brass screw (bottom)",B.aOP,y.v,!1,"hot")
B.al6=new A.fH(25,"Green screw: GROUND",B.J6,y.Z,!1,"ground")
B.d9z=w([B.bGv,B.bGh,B.al6],x.r)
B.eIq=new C.z(-80,90)
B.eu3=new C.z(80,90)
B.eIp=new C.z(-80,140)
B.eu2=new C.z(80,140)
B.dag=w([B.eIq,B.eu3,B.eIp,B.eu2],x.f)
B.bGR=new A.fH(51,"Black wire nut: HOT",B.J8,"The house black wire joins the fan black wire.",!1,"hot")
B.bGf=new A.fH(52,"White wire nut: NEUTRAL",B.J5,"The house white wire joins the fan white wire.",!1,"neutral")
B.bGC=new A.fH(53,"Green ground connection",B.J6,"The bare copper house ground joins the green fan ground wire.",!1,"ground")
B.dan=w([B.bGR,B.bGf,B.bGC],x.r)
B.b9C=new A.Sk("bus",-575,-25,0,1)
B.b9E=new A.Sk("police",-575,-25,854,5)
B.b9D=new A.Sk("bus",25,575,850,3)
B.b9F=new A.Sk("police",25,575,1704,6)
B.kj=w([B.b9C,B.b9E,B.b9D,B.b9F],C.aw("O<Sk>"))
B.akQ=new A.re(4,"deadOutlet")
B.dav=w([B.a_J,B.a_K,B.Nq,B.Nr,B.akQ,B.a_N,B.a_O,B.a_P,B.a_Q,B.a_R,B.a_L,B.a_M],C.aw("O<re>"))
B.eRb=new C.cw([0,560,240,7])
B.eRc=new C.cw([0,560,300,9])
B.a3I=w([B.eRb,B.eRc],C.aw("O<+(L,L,L,H)>"))
B.h8S=new A.jy("always","Black \xb7 always hot (from the panel)",B.tI,D.c,"hot")
B.h8L=new A.jy("switched","Red \xb7 switched hot (from the wall switch)",B.AN,D.c,"hot")
B.daW=w([B.tb,B.Kd,B.h8S,B.h8L],x.d)
B.daZ=w([y.O,"Find the LINE and LOAD screws. LOAD is covered with yellow tape. Leave it covered unless you feed another outlet.",y.R,"Fasten the white wire to the silver LINE screw.","Fasten the black wire to the brass LINE screw.","Push the GFCI into the box and put the plate on.","Turn the power on, press RESET, then press TEST. It must click off."],x.s)
B.db1=w([y.O,y.x,y.R,"Fasten the black wire (power in, or to the light) to the COMMON screw: the odd-coloured one.","Fasten the first traveler (red) to a TRAVELER screw.","Fasten the second traveler (white wire taped black) to the other TRAVELER screw.",y.b,y.n],x.s)
B.hk4=new A.px(0,0,80,26)
B.hkd=new A.px(1,90,56,22)
B.dbj=w([B.hk4,B.hkd],x.X)
B.dbt=w(["car","ambulance","firetruck"],x.s)
B.dws=new A.i8(-62,62,6,46)
B.dwf=new A.i8(-117,-73,149,171)
B.dwp=new A.i8(-57,-13,164,186)
B.dwa=new A.i8(73,117,159,181)
B.dw2=new A.i8(120,144,140,160)
B.dw0=new A.i8(108,142,48,60)
B.dby=w([B.dws,B.dwf,B.dwp,B.dwa,B.dw2,B.dw0],x.T)
B.dbC=w([0.1,8.05],x.n)
B.fSP=new A.r(1000,900,1500)
B.fRn=new A.r(0,200,0)
B.aNL=new C.z(B.fSP,B.fRn)
B.fVk=new A.r(300,70,1000)
B.fRI=new A.r(0,250,300)
B.eCy=new C.z(B.fVk,B.fRI)
B.h4w=new A.r(-200,90,780)
B.fRE=new A.r(0,240,300)
B.eyG=new C.z(B.h4w,B.fRE)
B.h4U=new A.r(-420,520,1000)
B.fRC=new A.r(0,230,300)
B.euq=new C.z(B.h4U,B.fRC)
B.fXw=new A.r(700,330,900)
B.fVi=new A.r(300,230,200)
B.eH9=new C.z(B.fXw,B.fVi)
B.fT7=new A.r(1100,80,300)
B.fWG=new A.r(560,250,0)
B.eGa=new C.z(B.fT7,B.fWG)
B.fSY=new A.r(1080,100,-250)
B.fWF=new A.r(560,240,-100)
B.eJZ=new C.z(B.fSY,B.fWF)
B.fSO=new A.r(1000,700,-700)
B.fUt=new A.r(200,230,-300)
B.eM3=new C.z(B.fSO,B.fUt)
B.fUu=new A.r(200,90,-860)
B.fRK=new A.r(0,250,-300)
B.eIE=new C.z(B.fUu,B.fRK)
B.h4E=new A.r(-300,110,-820)
B.fRF=new A.r(0,240,-300)
B.ezg=new C.z(B.h4E,B.fRF)
B.h5o=new A.r(-900,600,-600)
B.h4F=new A.r(-300,230,-100)
B.exT=new C.z(B.h5o,B.h4F)
B.h4f=new A.r(-1100,90,-200)
B.h5_=new A.r(-560,250,0)
B.eM1=new C.z(B.h4f,B.h5_)
B.h4e=new A.r(-1100,120,250)
B.h4Z=new A.r(-560,240,0)
B.eC0=new C.z(B.h4e,B.h4Z)
B.h58=new A.r(-700,520,1000)
B.h4b=new A.r(-100,230,100)
B.evW=new C.z(B.h58,B.h4b)
B.fUs=new A.r(200,170,1300)
B.fRB=new A.r(0,230,150)
B.eLQ=new C.z(B.fUs,B.fRB)
B.dbR=w([B.aNL,B.eCy,B.eyG,B.euq,B.eH9,B.eGa,B.eJZ,B.eM3,B.eIE,B.ezg,B.exT,B.eM1,B.eC0,B.evW,B.eLQ,B.aNL],x.dt)
B.h_R=new A.r(-0.35,11,-3.4)
B.fZb=new A.r(-0.35,3.2,-3.2)
B.h2_=new A.r(-0.35,2.2,-1.9)
B.fXk=new A.r(-0.35,0.7,-1.5)
B.dbS=w([B.h_R,B.fZb,B.h2_,B.fXk],x.o)
B.h6o=new A.r(5.2,7.5,-7.85)
B.h1N=new A.r(5.2,4,-7.85)
B.dbY=w([B.h6o,B.h1N],x.o)
B.bGo=new A.fH(21,"LOAD hot (brass, taped)",D.v3,y.P,!0,"load")
B.bGr=new A.fH(22,"LINE hot (brass)",B.J8,"The black (hot) wire from the breaker goes on the brass LINE screw.",!1,"hot")
B.bGn=new A.fH(23,"LOAD neutral (silver, taped)",D.v3,y.P,!0,"load")
B.bGz=new A.fH(24,"LINE neutral (silver)",B.J5,"The white (neutral) wire from the breaker goes on the silver LINE screw.",!1,"neutral")
B.dcp=w([B.bGo,B.bGr,B.bGn,B.bGz,B.al6],x.r)
B.aVA=new A.r(0,15.5,-3.6)
B.h05=new A.r(0,20,-3.6)
B.h7_=new A.r(0,22.5,-2)
B.fYK=new A.r(0,22.5,1.1999999999999997)
B.h0f=new A.r(0,21.1,1.6)
B.dcv=w([B.aVA,B.h05,B.h7_,B.fYK,B.h0f],x.o)
B.dd5=w([],x.bm)
B.HE=w([],x.B)
B.dd4=w([],x.dI)
B.ze=w([],x.E)
B.dd6=w([],x.T)
B.ayA=w([],x.z)
B.ayw=w([],x.e3)
B.wr=w([],x.a)
B.ayv=w([],x.W)
B.ry=w([],x.o)
B.ayz=w([],x.h)
B.ayy=w([],x.f)
B.hdu=new A.pu("outlet","\ud83d\udd0c","Wall outlet","Black to brass, white to silver",D.aE)
B.hdo=new A.pu("switch","\ud83d\udca1","Light switch","Two blacks and a wire nut",D.aR)
B.hdp=new A.pu("gfci","\ud83d\udee1\ufe0f","GFCI outlet","LINE and LOAD near water",D.bu)
B.hdv=new A.pu("fan","\ud83c\udf00","Ceiling fan","Black, white, green and a fan box",D.bc)
B.hdj=new A.pu("switch2p","\ud83d\udd25","Double-pole switch","240 V: breaks both hot legs",D.i8)
B.hdq=new A.pu("switch3","\ud83d\udd00","Three-way switch","Common and two travelers",D.aR)
B.hdz=new A.pu("switch4","\ud83d\udd01","Four-way switch","Between two three-ways",D.co)
B.hdy=new A.pu("switchsmart","\ud83d\udcf6","Smart, motion or timer switch","Needs the neutral wire",D.by)
B.hdr=new A.pu("switchcombo","\ud83c\udf9a\ufe0f","Combination switch","Two switches, one feed",D.iK)
B.hdm=new A.pu("split","\ud83c\udf17","Split (half-switched) outlet","Break the tab: switched and always-on",D.aT)
B.hdw=new A.pu("v240four","\ud83e\uddfa","4-wire 240 V outlet","Dryer, range and EV: two hots, neutral, ground",D.cs)
B.hdx=new A.pu("v240three","\ud83d\udd70\ufe0f","3-wire 240 V outlet","Old dryer or range: no separate ground",D.cZ)
B.hdl=new A.pu("v240only","\u2744\ufe0f","240 V only outlet","Window AC, welder: two hots and ground",D.bc)
B.hds=new A.pu("isolated","\ud83c\udfed","Isolated-ground outlet","Its own ground wire to the panel",D.bu)
B.hdt=new A.pu("ptrap","\ud83e\udea0","Sink drain (P-trap)","Build a drain with a water seal",D.co)
B.hdn=new A.pu("faucet","\ud83d\udeb0","Faucet supply lines","Hot left, cold right",D.cs)
B.hdk=new A.pu("house","\ud83c\udfd7\ufe0f","Build and fix a house","Stage by stage, then repair",D.by)
B.ddl=w([B.hdu,B.hdo,B.hdp,B.hdv,B.hdj,B.hdq,B.hdz,B.hdy,B.hdr,B.hdm,B.hdw,B.hdx,B.hdl,B.hds,B.hdt,B.hdn,B.hdk],C.aw("O<pu>"))
B.eyb=new C.z(-1.6,3.5)
B.exM=new C.z(1.6,3.5)
B.ezJ=new C.z(-1.6,-3.5)
B.ewu=new C.z(1.6,-3.5)
B.ddm=w([B.eyb,B.exM,B.ezJ,B.ewu],x.f)
B.ayH=w([!1,!1,!1,!1],x.u)
B.eaq={in1:0,in2:1}
B.aOO=new C.dD(B.eaq,2,x.M)
B.bGj=new A.fH(23,"IN screw (top left)",B.aOO,y.g,!1,"hot")
B.bGK=new A.fH(21,"IN screw (top right)",B.aOO,y.g,!1,"hot")
B.eaP={out1:0,out2:1}
B.aOV=new C.dD(B.eaP,2,x.M)
B.bGB=new A.fH(24,"OUT screw (bottom left)",B.aOV,y._,!1,"hot")
B.bGD=new A.fH(22,"OUT screw (bottom right)",B.aOV,y._,!1,"hot")
B.ddQ=w([B.w0,B.bGj,B.bGK,B.bGB,B.bGD],x.r)
B.de_=w(["city","billboards","edges","houses","hospital","traffic"],x.s)
B.deb=w(["Look at the pieces: the tailpiece, the P-trap and the trap arm. Pick the tailpiece first and tap its glowing outline under the sink.","Pick the P-trap (the U-shaped bend) and tap its glowing outline. It joins the tailpiece.","Pick the trap arm and tap its outline. It joins the trap to the wall drain.","Slide each slip nut up to its joint and hand tighten it: tap the nuts.","Run the water and look for leaks. The U-bend keeps a plug of water that blocks sewer gas."],x.s)
B.dpe=w(["Switch 1 common","Switch 2 common","Traveler terminal (both switches)","Green ground screw","Neutral splice (not on a switch)"],x.s)
B.e9O={"Line (from the breaker)":0,"Load (to the light)":1,"Traveler A":2,"Traveler B":3,Ground:4,Neutral:5}
B.dtk=new C.bu(B.e9O,["Switch 1 common","Switch 2 common","Traveler terminal (both switches)","Traveler terminal (both switches)","Green ground screw","Neutral splice (not on a switch)"],x.l)
B.djl=w(["Never assume the dark screw is the same on every brand: read the diagram on the switch.","A switch loop or an old house may not follow the colors: verify the wires."],x.s)
B.bta=new A.ak6("Three-way switch (two switches, one light)","Two three-way switches control one light from two places. Each switch has a COMMON terminal (dark screw) and two TRAVELER terminals. Power (line) goes to the common of the first switch, the light (load) to the common of the second, and two travelers join the switches. The ground goes to the green screw. A standard single-pole switch cannot do this job.",B.dpe,B.dtk,B.djl)
B.cUL=w(["Fan (motor) control wire","Light control wire","Neutral","Ground","Fan-rated support"],x.s)
B.eas={"Motor lead (black)":0,"Light lead (blue)":1,"Neutral (white)":2,"Ground (green)":3,Support:4}
B.dtS=new C.bu(B.eas,["Fan (motor) control wire","Light control wire","Neutral","Ground","Fan-rated support"],x.l)
B.cZ3=w(["A blue wire is a light-kit lead on many fans, but not on all: read the diagram.","A fan that spins does not prove the installation is safe."],x.s)
B.bt9=new A.ak6("Ceiling fan with a light kit","A fan has a motor and often a light kit, and they are not always switched together. Follow the fan maker's diagram: the motor lead goes to the fan control (or switched hot), the light lead to the light control, the white to neutral and the green to the ground. The box must be fan rated.",B.cUL,B.dtS,B.cZ3)
B.zf=w([B.bta,B.bt9],C.aw("O<ak6>"))
B.fCk=new C.y("\u2728",null,D.aR9,null,null,null,null,null,null,null,null,null)
B.fMH=new C.y("Nobody needs help right now.",null,D.fY,null,D.L,null,null,null,null,null,null,null)
B.fmu=new C.F(!0,D.aQ,null,null,null,null,13,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fEF=new C.y("Everybody's wiring and plumbing works. Keep an eye on food and health: things break when you least expect it.",null,B.fmu,null,D.L,null,null,null,null,null,null,null)
B.deA=w([B.fCk,D.N,B.fMH,D.av,B.fEF],x.p)
B.deG=w(["road","roundabout","roadturn","roadtee","roadcross","house2","bighouse","billboard","tower","hq","store","gasstation","dmv","ubstation","townsign","cornersign","adboard","shop","hospital","firestation","school","car","firetruck","ambulance","dog","cat","cow","sheep","chicken","horse","tree","pine","bush","flowers","fence","lamppost","bench","pond","swing","shed","doghouse"],x.s)
B.eHI=new C.z(-1150,80)
B.epp=new C.z(1150,80)
B.eHH=new C.z(-1150,1990)
B.epo=new C.z(1150,1990)
B.deP=w([B.eHI,B.epp,B.eHH,B.epo],x.f)
B.eZs=new A.rJ("pills","\ud83e\ude79","Pain pills","Cures a headache or a cold: you walk normally again",8,0,0,0,!0)
B.eZr=new A.rJ("bread","\ud83c\udf5e","Food for the town","5 portions for the people who live here",10,0,0,0,!1)
B.eZq=new A.rJ("medicine","\ud83d\udc8a","Medicine","3 doses for the sick",12,0,0,0,!1)
B.deT=w([B.eZs,B.eZr,B.eZq],x.y)
B.deW=w([D.aw,D.bI,D.be],x.O)
B.h3Z=new A.r(125,292,-121.5)
B.h6R=new A.r(-125,292,-121.5)
B.fSM=new A.r(-125,208,-121.5)
B.h3G=new A.r(125,208,-121.5)
B.df_=w([B.h3Z,B.h6R,B.fSM,B.h3G],x.o)
B.fTQ=new A.r(11.4,4.6,-6)
B.h0o=new A.r(11.4,5,-7.85)
B.fXl=new A.r(2.6,5,-7.85)
B.fXX=new A.r(2.6,3.4,-7.85)
B.df1=w([B.fTQ,B.h0o,B.fXl,B.fXX],x.o)
B.df5=w(["hospital","shop","school"],x.s)
B.df6=w(["hot","cold"],x.s)
B.df9=w([D.aw,D.be,D.aE,D.f2,D.bS],x.O)
B.h8Q=new A.jy("black","Black \xb7 hot",B.tI,D.c,"hot")
B.h8J=new A.jy("white","White \xb7 neutral",B.oK,D.au,"neutral")
B.R8=w([B.h8Q,B.h8J,B.tb],x.d)
B.euO=new C.z(-3.5,4)
B.eBC=new C.z(3.5,4)
B.ewW=new C.z(-3.5,-4)
B.eoP=new C.z(3.5,-4)
B.dfA=w([B.euO,B.eBC,B.ewW,B.eoP],x.f)
B.dfF=w(["Ada","Ben","Chidi","Dina","Efe","Farah","Gus","Halima","Ivo","Jamal","Kemi","Lola"],x.s)
B.eMb=new C.z(-2.4,5)
B.eD_=new C.z(2.4,5)
B.eAh=new C.z(-2.4,-5)
B.ez1=new C.z(2.4,-5)
B.dfG=w([B.eMb,B.eD_,B.eAh,B.ez1],x.f)
B.dg8=w([y.O,"Break off the little brass tab between the two brass screws, so the two halves are separate.",y.R,"Fasten the white neutral to a SILVER screw (the silver tab stays joined).","Fasten the always-hot black wire to the bottom BRASS screw.","Fasten the switched hot (red, from the wall switch) to the top BRASS screw.",y.b,y.n],x.s)
B.eQ5=new C.bj(-6,-4,D.c8)
B.eOK=new C.bj(5,-5,D.bI)
B.eQ4=new C.bj(0,1,D.aw)
B.eQz=new C.bj(-5,5,D.by)
B.eNZ=new C.bj(6,4,D.c)
B.dgs=w([B.eQ5,B.eOK,B.eQ4,B.eQz,B.eNZ],x.dV)
B.dgW=w([U.qw,Q.lk],x.f)
B.dh_=w(["split","v240four","v240three","v240only","isolated"],x.s)
B.eae={feed:0}
B.eYy=new C.dD(B.eae,1,x.M)
B.bGm=new A.fH(21,"FEED screw (joined tab)",B.eYy,"The one feed wire goes on the side where the brass screws are joined by a tab: it powers both switches.",!1,"hot")
B.eaC={loadA:0,loadB:1}
B.aOU=new C.dD(B.eaC,2,x.M)
B.bGO=new A.fH(22,"Switch 1 screw \u2192 light 1",B.aOU,y.q,!1,"hot")
B.bGS=new A.fH(24,"Switch 2 screw \u2192 light 2",B.aOU,y.q,!1,"hot")
B.dhb=w([B.w0,B.bGm,B.bGO,B.bGS],x.r)
B.eHb=new C.z("Slab","First the concrete slab (the foundation) is poured and left to cure. Every wall sits on it.")
B.eK2=new C.z("Framing","The carpenters build the wall frames from 2x4 studs, spaced 16 inches apart, with plates on the top and bottom.")
B.eyL=new C.z("Plumbing rough-in","The plumber runs the hot (red) and cold (blue) water lines and the white drain pipes inside the walls and floor before anything is closed up.")
B.eFr=new C.z("Electrical rough-in","The electrician runs the yellow and white cables from the breaker panel to every box, and fixes the boxes to the studs.")
B.eGt=new C.z("Drywall","Drywall covers the frame. Here it is see-through so you can still look at the pipes and wires behind it.")
B.ezb=new C.z("Fixtures","Last come the outlets, switches, light, sink, toilet and water heater. This is where most repairs happen.")
B.eAs=new C.z("Roof","The roof goes on to keep everything dry. It is see-through here so you can keep looking inside.")
B.dhe=w([B.eHb,B.eK2,B.eyL,B.eFr,B.eGt,B.ezb,B.eAs],x.L)
B.dwc=new A.i8(-100,100,24,90)
B.dwh=new A.i8(-134,-110,100,190)
B.dw1=new A.i8(110,134,100,190)
B.dhi=w([B.dwc,B.dwh,B.dw1],x.T)
B.eHO=new C.z(-17,-9)
B.epy=new C.z(17,-9)
B.eHN=new C.z(-17,9)
B.epx=new C.z(17,9)
B.dhQ=w([B.eHO,B.epy,B.eHN,B.epx],x.f)
B.dhW=w([-100,0,100],x.n)
B.dhX=w([-110,-80,80,110],x.n)
B.a46=w([-14,14],x.n)
B.dhZ=w([-150,150],x.n)
B.di_=w([-178,178],x.n)
B.di1=w([-18,18],x.n)
B.az3=w([-20,0,20],x.n)
B.di3=w([-21,21],x.n)
B.a48=w([-26,26],x.n)
B.di4=w([-27,27],x.n)
B.eZt=new A.rJ("can","\ud83d\udee2","Gas can","Half a tank of gas",8,0,0.5,0,!1)
B.aP8=new A.rJ("tank","\u26fd","Fill the tank","A full tank",12,0,1,0,!1)
B.di5=w([B.eZt,B.aP8],x.y)
B.di7=w([-30,-10,10,30],x.n)
B.di8=w([-32,32],x.n)
B.di9=w([-32,-8,34],x.n)
B.az4=w([-34,34],x.n)
B.dia=w([-3,3],x.n)
B.dib=w([-47,47],x.n)
B.dic=w([-48,48],x.n)
B.did=w([-52,52],x.n)
B.az6=w([-55,55],x.n)
B.dif=w([-600,0,600],x.n)
B.dig=w([-600,600],x.n)
B.dih=w([-70,70],x.n)
B.ol=w([-72,-24,24],x.t)
B.az7=w([-80,80],x.n)
B.dij=w([-900,-300,300,900],x.n)
B.dik=w([-90,0,90],x.n)
B.dil=w([-90,-52,52,90],x.n)
B.aza=w([-9,9],x.n)
B.dix=w(["switch2p","switch3","switch4","switchsmart","switchcombo"],x.s)
B.diE=w(["medicine","food"],x.s)
B.diQ=w([y.O,y.x,y.R,"The first traveler from the FIRST three-way goes on a top screw (IN).","The second traveler from the FIRST three-way goes on the other top screw (IN).","The first traveler to the SECOND three-way goes on a bottom screw (OUT).","The second traveler to the SECOND three-way goes on the other bottom screw (OUT).",y.b,y.n],x.s)
B.fXt=new A.r(8.2,5,-7.85)
B.h1R=new A.r(8.2,1.2,-7.85)
B.h3V=new A.r(8.2,1,-7.4)
B.djY=w([B.fXt,B.h1R,B.h3V],x.o)
B.h8C=new A.jy("common","Black \xb7 COMMON (power in or to the light)",B.tI,D.c,"hot")
B.h8A=new A.jy("trav1","Red \xb7 traveler 1",B.AN,D.c,"hot")
B.h8N=new A.jy("trav2","White taped black \xb7 traveler 2",B.oK,D.au,"hot")
B.djZ=w([B.tb,B.h8C,B.h8A,B.h8N],x.d)
B.a4g=w(["rug","road","roundabout","roadturn","roadtee","roadcross","pond","flowers"],x.s)
B.dkb=w(["human","soldier","michelle","xbot","human"],x.s)
B.eHC=new C.z(-1050,"hospital")
B.eIc=new C.z(-630,"store")
B.eI4=new C.z(-420,"tower")
B.ep2=new C.z(0,"tower")
B.er8=new C.z(420,"tower")
B.ete=new C.z(630,"store")
B.eph=new C.z(1050,"hospital")
B.dkf=w([B.eHC,B.aNN,B.eIc,B.eI4,B.aNM,B.ep2,B.aNB,B.er8,B.ete,B.aND,B.eph],x.d6)
B.emb=new A.F4(61,"Hot shut-off valve (left)",B.a7L,"Hot is always on the LEFT. The red hose goes on the left valve.")
B.ea5={cold:0}
B.aP4=new C.dD(B.ea5,1,x.M)
B.emc=new A.F4(62,"Cold shut-off valve (right)",B.aP4,"Cold is always on the RIGHT. The blue hose goes on the right valve.")
B.em9=new A.F4(63,"Hot faucet inlet (left)",B.a7L,"The left faucet inlet takes the hot (red) hose.")
B.ema=new A.F4(64,"Cold faucet inlet (right)",B.aP4,"The right faucet inlet takes the cold (blue) hose.")
B.a4h=w([B.emb,B.emc,B.em9,B.ema],C.aw("O<F4>"))
B.a4j=w([-72,-48,-24,0,24],x.t)
B.dll=w(["1 Rough-in","2 Drywall","3 Devices"],x.s)
B.dwv=new A.i8(-90,10,130,160)
B.dwo=new A.i8(-50,50,70,100)
B.dwi=new A.i8(-134,-110,20,70)
B.dlP=w([B.dwv,B.dwo,B.dwi],x.T)
B.Rg=w(["road","roadturn","roadtee","roadcross"],x.s)
B.bGw=new A.fH(21,"Brass screw (top): HOT side",B.J8,y.r,!1,"hot")
B.bGF=new A.fH(22,"Brass screw (bottom): HOT side",B.J8,y.r,!1,"hot")
B.bGA=new A.fH(23,"Silver screw (top): NEUTRAL side",B.J5,y.Q,!1,"neutral")
B.bGq=new A.fH(24,"Silver screw (bottom): NEUTRAL side",B.J5,y.Q,!1,"neutral")
B.bGx=new A.fH(25,"Green screw: GROUND",B.J6,"The green screw is for the bare copper or green GROUND wire.",!1,"ground")
B.dm_=w([B.bGw,B.bGF,B.bGA,B.bGq,B.bGx],x.r)
B.dm4=w([y.O,y.x,y.R,"Fasten the black hot to one HOT brass screw.","Fasten the red hot to the other HOT brass screw. There is no neutral and no silver screw in use.",y.b,y.n],x.s)
B.eIj=new C.z(-700,225)
B.eHK=new C.z(-120,160)
B.epr=new C.z(120,160)
B.etE=new C.z(720,225)
B.dmk=w([B.eIj,B.eHK,B.epr,B.etE],x.f)
B.eOk=new C.bj("hot","Hot hose (red)",B.tB)
B.eP0=new C.bj("cold","Cold hose (blue)",B.nX)
B.dml=w([B.eOk,B.eP0],C.aw("O<+(n,n,u)>"))
B.eqJ=new C.z(34,40)
B.hbm=new A.Au(B.eqJ,3.141592653589793,2.6,"Washing hands at the sink",!1,!1,!1,"")
B.dmn=w([B.hbm],x.h)
B.aZU=new A.Hg("NGMY navy",E.jJ,E.Ln,D.c,F.fv)
B.aZZ=new A.Hg("Purple",D.oP,D.dD,D.c,D.bM)
B.aZX=new A.Hg("Green",D.h2,D.bP,D.c,D.lW)
B.aZV=new A.Hg("Sunset",D.el,D.aE,D.c,D.io)
B.aZW=new A.Hg("Night",D.M,D.aJ,D.b2,D.c8)
B.aZY=new A.Hg("Light",D.c,D.nR,E.jJ,D.dV)
B.a4m=w([B.aZU,B.aZZ,B.aZX,B.aZV,B.aZW,B.aZY],C.aw("O<Hg>"))
B.a9W=new A.r(15,2.6,0)
B.a4n=w([B.aVQ,B.a9W],x.o)
B.dmE=w([B.tb,B.Kd,B.aa1,B.aa2],x.d)
B.b4o=new C.ac(0,D.G,D.aW,D.J,24)
B.dmF=w([B.b4o],x.V)
B.dmT=w(["tail","trap","arm"],x.s)
B.dn0=w([!0,!0,!0,!0],x.u)
B.HH=w(["tv","lamp","toaster","hairdryer"],x.s)
B.aai=new A.iV("look","Look",D.fj)
B.hbZ=new A.iV("wall","Wall box",O.amp)
B.hbX=new A.iV("ceiling","Ceiling box",D.rl)
B.hcb=new A.iV("fanbox","Fan box",M.NW)
B.hck=new A.iV("drill","Drill",D.yB)
B.hcc=new A.iV("cable","Cable roll",E.amf)
B.dee=w([B.aai,B.hbZ,B.hbX,B.hcb,B.hck,B.hcc],x.I)
B.hci=new A.iV("sheet","Drywall sheet",D.Ci)
B.hc2=new A.iV("knife","Drywall saw",D.Gq)
B.hc0=new A.iV("screw","Screw gun",A1.GB)
B.hcm=new A.iV("tape","Tape",D.ui)
B.hcg=new A.iV("mud","Mud",Ad.a0U)
B.hcr=new A.iV("sand","Sander",D.Go)
B.bLW=new C.a1(985109,"MaterialIcons",!1)
B.hc6=new A.iV("paint","Roller",B.bLW)
B.daD=w([B.aai,B.hci,B.hc2,B.hc0,B.hcm,B.hcg,B.hcr,B.hc6],x.I)
B.Ol=new C.a1(983223,"MaterialIcons",!1)
B.hcn=new A.iV("outlet","Outlet",B.Ol)
B.hc4=new A.iV("gfci","GFCI",D.up)
B.hcl=new A.iV("switch","Switch",E.ur)
B.hc_=new A.iV("split","Split outlet",B.Ol)
B.hcp=new A.iV("v240four","240 V 4-wire",T.C1)
B.hbY=new A.iV("v240three","240 V 3-wire",T.C1)
B.hc9=new A.iV("v240only","240 V only",T.C1)
B.hc1=new A.iV("isolated","Isolated ground",B.Ol)
B.hch=new A.iV("switch2p","Double-pole",E.ur)
B.hcj=new A.iV("switch3","3-way switch",E.ur)
B.hca=new A.iV("switch4","4-way switch",E.ur)
B.hc8=new A.iV("switchsmart","Smart switch",E.ur)
B.hbW=new A.iV("switchcombo","Double switch",E.ur)
B.hcf=new A.iV("light","Light",D.ro)
B.bLU=new C.a1(985094,"MaterialIcons",!1)
B.hc7=new A.iV("fan","Fan",B.bLU)
B.hce=new A.iV("tv","TV",V.a1q)
B.bKf=new C.a1(63571,"MaterialIcons",!1)
B.hc5=new A.iV("lamp","Lamp",B.bKf)
B.bJ3=new C.a1(62944,"MaterialIcons",!1)
B.hc3=new A.iV("toaster","Toaster",B.bJ3)
B.bJD=new C.a1(63209,"MaterialIcons",!1)
B.hcq=new A.iV("hairdryer","Hair dryer",B.bJD)
B.hco=new A.iV("flip","Flip switch",E.ur)
B.hcd=new A.iV("tester","Voltage tester",D.uf)
B.d46=w([B.aai,B.hcn,B.hc4,B.hcl,B.hc_,B.hcp,B.hbY,B.hc9,B.hc1,B.hch,B.hcj,B.hca,B.hc8,B.hbW,B.hcf,B.hc7,B.hce,B.hc5,B.hc3,B.hcq,B.hco,B.hcd],x.I)
B.dn6=w([B.dee,B.daD,B.d46],C.aw("O<ai<iV>>"))
B.dnk=w([B.tb,B.aa1,B.aa2],x.d)
B.bpp=new C.u(1,0.1843137254901961,0.30980392156862746,0.30980392156862746,D.q)
B.bmS=new C.u(1,0.3568627450980392,0.4196078431372549,0.5490196078431373,D.q)
B.dnl=w([B.WP,D.bs,B.bpp,B.bmS,D.bl,D.aJ],x.O)
B.dnr=w([D.bA,D.bP,D.c9,D.ca,D.vC,D.cC],x.O)
B.dnt=w([-400,400,-900,900,-1400,1400],x.n)
B.dnu=w([D.aw,D.bI,D.be,D.d0],x.O)
B.dnF=w([y.O,"Hold the fixture up to the ceiling box. It has three short wires: black, white and green.","Join the house ground wire to the fixture ground.","Join the house white wire to the fixture white wire with a wire nut.","Join the house black wire to the fixture black wire with a wire nut.","Push the wires into the box and fasten the fixture to the ceiling.",y.f],x.s)
B.dwu=new A.i8(-70,70,28,52)
B.dwl=new A.i8(-134,-96,100,170)
B.dwb=new A.i8(96,134,100,170)
B.dnN=w([B.dwu,B.dwl,B.dwb],x.T)
B.dnO=w([30,60,120,180,300],x.t)
B.eHR=new C.z(-210,60)
B.eq8=new C.z(210,90)
B.eHX=new C.z(-330,120)
B.eqG=new C.z(330,60)
B.eHG=new C.z(-110,330)
B.epn=new C.z(110,330)
B.eIa=new C.z(-560,640)
B.esV=new C.z(560,640)
B.eI2=new C.z(-420,1100)
B.er6=new C.z(420,1100)
B.dnV=w([B.eHR,B.eq8,B.eHX,B.eqG,B.eHG,B.epn,B.eIa,B.esV,B.eI2,B.er6],x.f)
B.bZu=new A.jJ("Breaker off, then test","Before you touch any wire, switch its breaker OFF, then check with a voltage tester that the wire is dead. A switch on the wall is not enough.")
B.bZh=new A.jJ("Lock out, tag out","On a real job you put a lock or a note on the panel so nobody switches the power back on while you work.")
B.bZB=new A.jJ("Water and power","Water carries electricity. Near sinks, tubs and outdoors the outlets must be GFCI, and wet hands never touch wires.")
B.bZm=new A.jJ("Eyes, ears, lungs","Safety glasses for drilling and cutting, ear protection for loud tools, and a mask when you sand drywall dust or cut tile.")
B.bZA=new A.jJ("Shut the water off","Before you cut or loosen a pipe, close the main water valve and open a faucet to drain the line.")
B.dgI=w([B.bZu,B.bZh,B.bZB,B.bZm,B.bZA],x.Z)
B.bZN=new A.MT("Safety first","\ud83e\uddba",D.cs,B.dgI)
B.bZC=new A.jJ("Wire colours","Black is hot (it carries the power), white is neutral (the way back), bare copper or green is ground (the safety path). Red is a second hot, often used for a switched line.")
B.bZJ=new A.jJ("Screw colours","On an outlet the brass screw takes the hot wire, the silver screw takes the neutral and the green screw takes the ground.")
B.bZw=new A.jJ("Wire size","14 gauge wire is for 15 amp circuits (lights and outlets). 12 gauge is for 20 amp circuits (kitchens). A thinner wire than the breaker allows can overheat and start a fire.")
B.bZq=new A.jJ("Breakers","A breaker is a safety switch. It trips when a circuit carries too much current, so the wires never get hot enough to burn.")
B.bZE=new A.jJ("Wire nuts","Strip about 3/4 inch, twist the bare ends together clockwise, and screw on the nut until no bare copper shows. Give each wire a gentle tug.")
B.bZK=new A.jJ("Switches","A switch cuts the hot wire only. The neutral goes straight through to the light.")
B.bZL=new A.jJ("GFCI","A GFCI outlet watches the current going out and coming back. If a little leaks (through water or a person) it cuts the power in a fraction of a second.")
B.bZj=new A.jJ("Ceiling fans","A fan shakes and is heavy. It needs a box that says fan rated, fixed to the joist, not a plain light box.")
B.bZl=new A.jJ("Heights","Outlets sit about 16 inches from the floor. Switches sit about 48 inches up, where your hand falls.")
B.d92=w([B.bZC,B.bZJ,B.bZw,B.bZq,B.bZE,B.bZK,B.bZL,B.bZj,B.bZl],x.Z)
B.bZQ=new A.MT("Wiring basics","\u26a1",D.bI,B.d92)
B.bZi=new A.jJ("Hot left, cold right","On a faucet, hot is on the left and cold on the right. Hot lines are marked red and cold lines blue.")
B.bZv=new A.jJ("The P-trap","The curved pipe under a sink always holds a little water. That water seal stops sewer gas coming up the drain.")
B.bZG=new A.jJ("Shut-off valves","Every sink and toilet has its own small valve, so you can stop the water to one fixture without turning off the whole house.")
B.bZo=new A.jJ("Slip nuts","Drain joints are sealed by a washer and a slip nut. Tighten by hand and a quarter turn: too much force cracks plastic.")
B.bZn=new A.jJ("Wax ring","A toilet sits on a wax ring that seals it to the floor drain. A toilet is lowered straight down once, and cannot be slid around.")
B.bZD=new A.jJ("Drain slope","Drains fall about 1/4 inch per foot so water and waste keep moving. Too flat and it clogs, too steep and the water leaves the solids behind.")
B.bZI=new A.jJ("Order of work","Plumbing goes from the top down on the drain (tailpiece, trap, arm) and from the wall out on the supply (valve, hose, fixture).")
B.cgA=w([B.bZi,B.bZv,B.bZG,B.bZo,B.bZn,B.bZD,B.bZI],x.Z)
B.bZO=new A.MT("Plumbing basics","\ud83d\udeb0",D.co,B.cgA)
B.bZk=new A.jJ("Studs","Studs are the vertical 2x4 posts inside a wall, 16 inches apart from centre to centre. Everything is fixed to them.")
B.bZy=new A.jJ("Drilling studs","Holes for cable go through the middle of the stud, so a nail or screw cannot reach the wire.")
B.bZp=new A.jJ("Drywall","A sheet is 4 feet wide, so its edges land on studs 48 inches apart. Screws go into studs only, just under the paper.")
B.bZs=new A.jJ("Taping and mud","Seams get paper tape and three thin coats of joint compound, sanded smooth between coats, then primer and paint.")
B.bZH=new A.jJ("Order of a build","Frame, run the pipes and wires (rough-in), inspect, hang drywall, finish it, paint, then fit the fixtures and devices.")
B.cVb=w([B.bZk,B.bZy,B.bZp,B.bZs,B.bZH],x.Z)
B.bZM=new A.MT("Framing and walls","\ud83c\udfe0",D.dV,B.cVb)
B.bZt=new A.jJ("Voltage tester","A pen that glows or beeps near live wires. Test it on a known live outlet first, so you know it works.")
B.bZz=new A.jJ("Wire strippers","Strip the plastic off without nicking the copper. A nick weakens the wire.")
B.bZF=new A.jJ("Adjustable wrench","For nuts on valves and hoses. Hold the fitting steady with a second wrench so you do not twist the pipe.")
B.bZx=new A.jJ("Drill and screw gun","A drill makes holes through studs. A screw gun sets drywall screws to the right depth.")
B.bZr=new A.jJ("Level and tape measure","Measure twice, cut once. A level makes sure outlets, shelves and pipes are straight.")
B.dp1=w([B.bZt,B.bZz,B.bZF,B.bZx,B.bZr],x.Z)
B.bZP=new A.MT("Tools","\ud83e\uddf0",D.bu,B.dp1)
B.doC=w([B.bZN,B.bZQ,B.bZO,B.bZM,B.bZP],C.aw("O<MT>"))
B.doF=w([y.O,"There is no separate ground wire here: the neutral also grounds the frame of the old appliance. This is only allowed in old installations.",y.N,y.E,y.k,y.b,y.n],x.s)
B.bdE=new C.u(1,0.48627450980392156,0.22745098039215686,0.22745098039215686,D.q)
B.bl6=new C.u(1,0.24705882352941178,0.4196078431372549,0.30980392156862746,D.q)
B.bju=new C.u(1,0.4196078431372549,0.30980392156862746,0.48627450980392156,D.q)
B.bgu=new C.u(1,0.47843137254901963,0.41568627450980394,0.23137254901960785,D.q)
B.doJ=w([B.WP,B.bdE,B.bl6,B.bju,B.bgu],x.O)
B.doV=w(["Cream","Sky","Blush","Mint","Butter","Periwinkle","White","Slate"],x.s)
B.h8E=new A.jy("in1","Red \xb7 traveler in 1 (from the first 3-way)",B.AN,D.c,"hot")
B.h8K=new A.jy("in2","White taped red \xb7 traveler in 2",B.oK,D.au,"hot")
B.adi=new C.u(1,0.6901960784313725,0.22745098039215686,0.16862745098039217,D.q)
B.h8B=new A.jy("out1","Red \xb7 traveler out 1 (to the second 3-way)",B.adi,D.c,"hot")
B.h8P=new A.jy("out2","White taped red \xb7 traveler out 2",D.bO,D.au,"hot")
B.doY=w([B.tb,B.h8E,B.h8K,B.h8B,B.h8P],x.d)
B.eIm=new C.z(-760,330)
B.etF=new C.z(760,330)
B.eI6=new C.z(-450,1080)
B.esl=new C.z(450,1080)
B.dp0=w([B.eIm,B.etF,B.eI6,B.esl],x.f)
B.dp7=w([0.72,-0.72],x.n)
B.h8M=new A.jy("hot","Black \xb7 hot",B.tI,D.c,"hot")
B.XY=new C.u(1,0.1843137254901961,0.6352941176470588,0.30980392156862746,D.q)
B.h8H=new A.jy("isoground","Green with yellow stripe \xb7 isolated ground",B.XY,D.c,"ground")
B.dph=w([B.Kd,B.h8M,B.h8H],x.d)
B.dps=w([B.al8,B.al7,B.al5],x.r)
B.eve=new C.z("outlet","\ud83d\udd0c Outlet")
B.eJ8=new C.z("gfci","\ud83d\udee1\ufe0f GFCI outlet")
B.eEO=new C.z("switch","\ud83d\udca1 Light switch")
B.dpt=w([B.eve,B.eJ8,B.eEO],x.L)
B.dpD=w(["inspect","hand","screwdriver","pliers","wrench","crimper","plunger","flapper","newoutlet","patch"],x.s)
B.hk2=new A.px(0,0,70,26)
B.hke=new A.px(1,-100,110,24)
B.hkg=new A.px(2,105,100,26)
B.dq9=w([B.hk2,B.hke,B.hkg],x.X)
B.h8I=new A.jy("lineA","Black \xb7 hot leg 1 (from the panel)",B.tI,D.c,"hot")
B.h8O=new A.jy("lineB","Red \xb7 hot leg 2 (from the panel)",B.AN,D.c,"hot")
B.h8V=new A.jy("loadA","Black \xb7 hot leg 1 (to the heater)",B.LK,D.c,"hot")
B.h8G=new A.jy("loadB","Red \xb7 hot leg 2 (to the heater)",B.adi,D.c,"hot")
B.dqv=w([B.tb,B.h8I,B.h8O,B.h8V,B.h8G],x.d)
B.dqB=w(["Maya","Kofi","Amara","Tunde","Zawadi"],x.s)
B.dqE=w(["Look under the sink. The wall has two shut-off valves: hot on the LEFT (red handle) and cold on the RIGHT (blue handle).","Pick the red hot hose. Tap the left shut-off valve, then the left faucet inlet.","Pick the blue cold hose. Tap the right shut-off valve, then the right faucet inlet.","Open the valves slowly and turn on the faucet. Check every connection for drips."],x.s)
B.eah={flange:0,wax:1,toilet:2,bolts:3,valve:4,hosehot:5,hosecold:6,faucet:7,tail:8,trap:9,arm:10}
B.aF_=new C.bu(B.eah,["Flange","Wax ring","Toilet","Bolts","Shut-off valve","Hot hose","Cold hose","Faucet","Tailpiece","P-trap","Trap arm"],x.l)
B.dsZ=new C.dv([25,"ground",23,"lineA",21,"lineB",24,"loadA",22,"loadB"],x.v)
B.dt_=new C.dv([25,"ground",23,"in1",21,"in2",24,"out1",22,"out2"],x.v)
B.e9M={xbot:0,michelle:1,soldier:2}
B.a4S=new C.bu(B.e9M,["assets/avatars/Xbot.glb","assets/avatars/Michelle.glb","assets/avatars/Soldier.glb"],x.l)
B.e8X={highway:0,tower:1,neon:2,roof:3,screen:4,gate:5}
B.aNz=new C.z(0,!1)
B.epS=new C.z(1,!1)
B.eqW=new C.z(3,!1)
B.eqs=new C.z(2,!0)
B.epU=new C.z(1,!0)
B.eqX=new C.z(3,!0)
B.dta=new C.bu(B.e8X,[B.aNz,B.epS,B.eqW,B.eqs,B.epU,B.eqX],C.aw("bu<n,+(H,R)>"))
B.dtf=new C.dv([25,"ground",23,"neutral",21,"hot1",22,"hot2"],x.v)
B.dtg=new C.dv([25,"ground",23,"common",21,"trav1",22,"trav2"],x.v)
B.dth=new C.dv([25,"ground",23,"neutral",21,"line",22,"load"],x.v)
B.dti=new C.dv([25,"ground",23,"neutral",21,"switched",22,"always"],x.v)
B.dtv=new C.dv([25,"ground",21,"hot1",22,"hot2"],x.v)
B.e9I={bed:0,nightstand:1,wardrobe:2,desk:3,rug:4,sofa:5,armchair:6,coffee:7,tvstand:8,dining:9,chair:10,plant:11,lamp:12,console:13,shelf:14,tree:15,pine:16,bush:17,flowers:18,fence:19,lamppost:20,bench:21,car:22,road:23,roundabout:24,roadturn:25,roadtee:26,roadcross:27,house2:28,bighouse:29,pole:30,crate:31,billboard:32,tower:33,hq:34,store:35,gasstation:36,dmv:37,ubstation:38,townsign:39,cornersign:40,adboard:41,shop:42,hospital:43,firestation:44,school:45,firetruck:46,ambulance:47,dog:48,cat:49,cow:50,sheep:51,chicken:52,horse:53,pond:54,swing:55,shed:56,doghouse:57}
B.bFt=new A.fn("Bed","\ud83d\udecf\ufe0f",48,64)
B.bFF=new A.fn("Night table","\ud83e\ude91",13,13)
B.bFc=new A.fn("Wardrobe","\ud83d\udeaa",35,16)
B.bFo=new A.fn("Desk","\ud83d\udda5\ufe0f",38,19)
B.bFd=new A.fn("Rug","\ud83d\udfe5",56,40)
B.bF8=new A.fn("Sofa","\ud83d\udecb\ufe0f",64,26)
B.bFx=new A.fn("Armchair","\ud83d\udcba",24,24)
B.bFM=new A.fn("Coffee table","\u2615",32,19)
B.bFa=new A.fn("Media cabinet","\ud83d\uddc4\ufe0f",45,14)
B.bFK=new A.fn("Dining table","\ud83c\udf7d\ufe0f",45,29)
B.bFE=new A.fn("Chair","\ud83e\ude91",14,14)
B.bFL=new A.fn("Plant","\ud83e\udeb4",14,14)
B.bFG=new A.fn("Floor lamp","\ud83d\udca1",10,10)
B.bFu=new A.fn("Console table","\ud83d\uddc4\ufe0f",35,11)
B.bFD=new A.fn("Bookshelf","\ud83d\udcda",29,10)
B.bFQ=new A.fn("Tree","\ud83c\udf33",36,36)
B.bFr=new A.fn("Pine tree","\ud83c\udf32",30,30)
B.bF7=new A.fn("Bush","\ud83c\udf3f",18,18)
B.bFA=new A.fn("Flowers","\ud83c\udf37",22,22)
B.bF0=new A.fn("Fence","\ud83d\udea7",64,6)
B.bFe=new A.fn("Street lamp","\ud83c\udfee",8,8)
B.bFw=new A.fn("Bench","\ud83e\ude91",44,16)
B.bF1=new A.fn("Car","\ud83d\ude97",84,40)
B.bFn=new A.fn("Road","\ud83d\udee3\ufe0f",40,40)
B.bFR=new A.fn("Roundabout","\ud83d\udd04",80,80)
B.bF6=new A.fn("Road corner","\u21aa\ufe0f",40,40)
B.bFT=new A.fn("Road T-junction","\u22a4",40,40)
B.bFp=new A.fn("Crossroads","\u271a",40,40)
B.bF9=new A.fn("House","\ud83c\udfe0",108,90)
B.bFs=new A.fn("Big house","\ud83c\udfe2",158,120)
B.bF2=new A.fn("Electric pole","\ud83d\udd0c",10,10)
B.bFm=new A.fn("Crate","\ud83d\udce6",28,28)
B.bFP=new A.fn("Billboard","\ud83e\udea7",72,10)
B.bF5=new A.fn("Office tower","\ud83c\udfe2",100,70)
B.bFh=new A.fn("NGMY company","\ud83c\udfdb\ufe0f",170,90)
B.bFg=new A.fn("NGMY store","\ud83c\udfec",130,80)
B.bFS=new A.fn("NGMY gas station","\u26fd",150,90)
B.bFC=new A.fn("NGMY licence office","\ud83e\udeaa",130,80)
B.bFj=new A.fn("NGMY Uber","\ud83d\ude96",120,60)
B.bF3=new A.fn("NGMY Town sign","\ud83e\udea7",380,14)
B.bFy=new A.fn("NGMY Town billboard","\ud83e\udea7",150,10)
B.bFl=new A.fn("NGMY ad billboard","\ud83d\udcfa",330,14)
B.bFq=new A.fn("Shop","\ud83c\udfea",126,90)
B.bFi=new A.fn("Hospital","\ud83c\udfe5",165,105)
B.bF_=new A.fn("Fire station","\ud83d\ude92",135,96)
B.bFB=new A.fn("School","\ud83c\udfeb",186,105)
B.bFJ=new A.fn("Fire truck","\ud83d\ude92",96,40)
B.bFv=new A.fn("Ambulance","\ud83d\ude91",84,40)
B.bFf=new A.fn("Dog","\ud83d\udc15",22,10)
B.bFk=new A.fn("Cat","\ud83d\udc08",16,8)
B.bFH=new A.fn("Cow","\ud83d\udc04",38,16)
B.bFb=new A.fn("Sheep","\ud83d\udc11",26,14)
B.bFI=new A.fn("Chicken","\ud83d\udc14",12,8)
B.bF4=new A.fn("Horse","\ud83d\udc0e",46,16)
B.bFN=new A.fn("Pond","\ud83d\udca7",80,56)
B.bFz=new A.fn("Swing set","\ud83c\udfa0",56,40)
B.bFO=new A.fn("Shed","\ud83d\uded6",50,42)
B.bFU=new A.fn("Dog house","\ud83d\udc15",24,22)
B.ht=new C.bu(B.e9I,[B.bFt,B.bFF,B.bFc,B.bFo,B.bFd,B.bF8,B.bFx,B.bFM,B.bFa,B.bFK,B.bFE,B.bFL,B.bFG,B.bFu,B.bFD,B.bFQ,B.bFr,B.bF7,B.bFA,B.bF0,B.bFe,B.bFw,B.bF1,B.bFn,B.bFR,B.bF6,B.bFT,B.bFp,B.bF9,B.bFs,B.bF2,B.bFm,B.bFP,B.bF5,B.bFh,B.bFg,B.bFS,B.bFC,B.bFj,B.bF3,B.bFy,B.bFl,B.bFq,B.bFi,B.bF_,B.bFB,B.bFJ,B.bFv,B.bFf,B.bFk,B.bFH,B.bFb,B.bFI,B.bF4,B.bFN,B.bFz,B.bFO,B.bFU],C.aw("bu<n,fn>"))
B.dum=new C.dv([25,"isoground",23,"neutral",21,"hot"],x.v)
B.e94={outlet:0,switch:1,light:2,fan:3,gfci:4}
B.d4w=w(["Silver","Brass","Green"],x.s)
B.f87=new A.v4("On a standard receptacle, which terminal does the hot wire go on?",B.d4w,1,"Brass is the hot side. Silver is neutral and green is the ground.")
B.cGE=w(["Yes, it works","No: reversed polarity leaves live parts that should be dead","Yes if there is a ground"],x.s)
B.f85=new A.v4("The outlet works with hot and neutral swapped. Is it safe?",B.cGE,1,"Working is not the same as safe. Reversed polarity energizes the wrong parts.")
B.cZj=w(["Yes","No, never","Only in old houses"],x.s)
B.f81=new A.v4("May the neutral be used as the equipment ground?",B.cZj,1,"The ground is a separate safety path. The neutral carries current in normal use.")
B.d9B=w([B.f87,B.f85,B.f81],x.W)
B.c3e=w(["The hot to the light","The neutral","The ground"],x.s)
B.f88=new A.v4("A single-pole switch opens and closes which conductor?",B.c3e,0,"The switch breaks the hot conductor to the load.")
B.cX4=w(["Yes","No, never","If the wire is thick"],x.s)
B.f89=new A.v4("May the ground wire be used to carry current to the light?",B.cX4,1,"The equipment ground is only for safety.")
B.d3t=w(["Yes","No: never assume it does","Only new houses"],x.s)
B.f82=new A.v4("Does every switch box have a neutral?",B.d3t,1,"Many switch boxes have no neutral. Smart switches need to be chosen for that.")
B.doG=w([B.f88,B.f89,B.f82],x.W)
B.dgv=w(["Yes","No: the wires, the ground and the support must be right","Only with a switch"],x.s)
B.f86=new A.v4("Does a light that turns on prove the fixture is wired safely?",B.dgv,1,"A fixture can light up with an unsafe connection.")
B.dfy=w(["Its wires","A box or mount rated for its weight","Tape"],x.s)
B.f8a=new A.v4("A fixture must hang from:",B.dfy,1,"The box carries the weight. The wires never do.")
B.d3T=w([B.f86,B.f8a],x.W)
B.d4V=w(["Any ceiling box","Rated for a fan","Plastic only"],x.s)
B.f84=new A.v4("A ceiling fan needs a box that is:",B.d4V,1,"A fan shakes and is heavy. A plain light box can let it fall.")
B.djq=w(["Yes","No: support, ground and wiring must all be right","Yes if it is quiet"],x.s)
B.f83=new A.v4("The fan spins. Is the installation safe?",B.djq,1,"A spinning fan says nothing about the box, the ground or the connections.")
B.d4b=w([B.f84,B.f83],x.W)
B.d_W=w(["LINE","LOAD","Either"],x.s)
B.f80=new A.v4("On a GFCI, power from the breaker goes on:",B.d_W,0,"LINE is the supply. LOAD feeds outlets further down the line.")
B.cLm=w([B.f80],x.W)
B.aFd=new C.bu(B.e94,[B.d9B,B.doG,B.d3T,B.d4b,B.cLm],C.aw("bu<n,ai<v4>>"))
B.e9H={house2:0,bighouse:1,shop:2,billboard:3,crate:4,car:5,tree:6,bench:7,tower:8,hq:9,store:10,gasstation:11,cornersign:12}
B.dup=new C.bu(B.e9H,[40,80,70,15,4,25,5,4,120,200,90,90,30],C.aw("bu<n,H>"))
B.bEd=new A.up("The living room has no power at all.","The living room breaker is sitting in the middle (orange). It has tripped. Flip it fully OFF and ON again, by hand.","hand","Breaker reset. The living room has power again.",72,0,"")
B.bEn=new A.up("There is no hot water.","The water heater breaker has tripped (orange). Reset it by hand.","hand","Breaker reset. The water heater is heating again.",75,0,"")
B.bEk=new A.up("Water is dripping under the kitchen sink.","The slip nut on the P-trap is loose and the joint drips. Tighten it with the wrench.","wrench","Slip nut tightened. The drip stopped.",87,0,"")
B.bEc=new A.up("There is a wet spot on the wall behind the kitchen.","A crimped joint in the hot water line is leaking. A crimp joint is squeezed with a crimping tool, not tightened with a wrench.","crimper","The joint is crimped again and it does not leak.",96,0,"")
B.bEh=new A.up("The outlet by the sofa does not work, but the lights do.","The tester finds power at the box but the outlet is dead: a screw on the outlet has come loose. Turn the breaker off first, then tighten the screws with the screwdriver.","screwdriver","You tightened the loose screw. The outlet works again.",81,72,"Turn the living room breaker OFF first.")
B.bEe=new A.up("The living room light flickers.","A wire nut in the light box has worked loose. Turn the breaker off, then twist the wire nut tight with the pliers.","pliers","You twisted the wire nut tight. The light is steady.",83,72,"Turn the living room breaker OFF first.")
B.bEf=new A.up("The kitchen outlet sparks and smells burnt.","The outlet has burnt. Turn the breaker off and replace it with a new outlet.","newoutlet","New outlet fitted. No more sparks.",84,73,"Turn the kitchen breaker OFF first.")
B.bEl=new A.up("The kitchen outlets are dead.","The GFCI outlet has tripped. Press its RESET button by hand.","hand","You pressed RESET. The kitchen outlets work.",84,0,"")
B.bEg=new A.up("The toilet keeps running.","The rubber flapper in the tank no longer seals, so water leaks into the bowl all the time. Replace the flapper.","flapper","New flapper fitted. The toilet stops running.",88,0,"")
B.bEj=new A.up("The kitchen faucet drips.","The faucet washer is worn. Tighten the packing nut with the wrench, then check.","wrench","The faucet is sealed. No more drips.",85,0,"")
B.bEi=new A.up("There is a hole in the wall.","A hole in the drywall. Stick a drywall patch over it, then tape, mud, sand and paint it.","patch","Patch fitted. Now it only needs mud, sanding and paint.",95,0,"")
B.bEm=new A.up("The kitchen sink drains very slowly.","The drain is clogged. Use the plunger.","plunger","The clog is gone. The sink drains fast.",94,0,"")
B.wv=new C.dv([B.a_J,B.bEd,B.a_K,B.bEn,B.Nq,B.bEk,B.Nr,B.bEc,B.akQ,B.bEh,B.a_N,B.bEe,B.a_O,B.bEf,B.a_P,B.bEl,B.a_Q,B.bEg,B.a_R,B.bEj,B.a_L,B.bEi,B.a_M,B.bEm],C.aw("dv<re,up>"))
B.ebc={duo:0,line3:1,far3:2,skyline:3,lines6:4}
B.eyI=new C.z(D.a2c,0)
B.eLH=new C.z(Y.aqg,1)
B.cnN=w([2,0,1],x.t)
B.etG=new C.z(B.cnN,2)
B.c3i=w([0,1,2,3],x.t)
B.eKM=new C.z(B.c3i,0)
B.dhy=w([0,1,2,5,4,3],x.t)
B.eBK=new C.z(B.dhy,1)
B.duF=new C.bu(B.ebc,[B.eyI,B.eLH,B.etG,B.eKM,B.eBK],C.aw("bu<n,+(ai<H>,H)>"))
B.eaH={michelle:0}
B.duG=new C.bu(B.eaH,[0.55],x.e)
B.RI=new C.bu(D.hL,[],C.aw("bu<H,cW>"))
B.I_=new C.bu(D.hL,[],C.aw("bu<H,n>"))
B.duW=new C.dv([23,"neutral",21,"hot1",22,"hot2"],x.v)
B.duY=new C.dv([25,"ground",21,"feed",22,"loadA",24,"loadB"],x.v)
B.eaf={tail:0,trap:1,arm:2}
B.dv_=new C.bu(B.eaf,["Tailpiece","P-trap","Trap arm"],x.l)
B.aHQ={xbot:0,michelle:1,soldier:2,human:3}
B.aFr=new C.bu(B.aHQ,["\ud83e\udd16 X Bot","\ud83d\udc83 Dancer","\ud83e\ude96 Soldier","\ud83d\ude42 Person"],x.l)
B.adQ=new C.u(1,0.9137254901960784,0.9215686274509803,0.9372549019607843,D.q)
B.biP=new C.u(1,0.8549019607843137,0.8666666666666667,0.8901960784313725,D.q)
B.SP=new A.rF(B.adQ,E.adj,B.adQ,B.biP,"xbot")
B.bkJ=new C.u(1,0.0784313725490196,0.047058823529411764,0.03137254901960784,D.q)
B.eln=new A.rF(B.ah7,B.bkJ,D.cp,D.au,"michelle")
B.bpv=new C.u(1,0.8509803921568627,0.6470588235294118,0.48627450980392156,D.q)
B.bos=new C.u(1,0.3568627450980392,0.4196078431372549,0.22745098039215686,D.q)
B.bdF=new C.u(1,0.5411764705882353,0.4823529411764706,0.3333333333333333,D.q)
B.IM=new A.rF(B.bpv,D.LN,B.bos,B.bdF,"soldier")
B.SQ=new A.rF(B.adn,B.LD,B.ahg,B.L6,"human")
B.aFs=new C.bu(B.aHQ,[B.SP,B.eln,B.IM,B.SQ],C.aw("bu<n,rF>"))
B.eaY={soldier:0}
B.dvh=new C.bu(B.eaY,[3.141592653589793],x.e)
B.h3s=new A.r(0,0,-1.2)
B.e7Y=new A.cW("Electrical box","The box is ready. Pull a cable to it, then wire a device.",B.h3s,9)
B.dvj=new C.dv([3,B.e7Y],C.aw("dv<H,cW>"))
B.aHJ={inspect:0,hand:1,screwdriver:2,pliers:3,wrench:4,crimper:5,plunger:6,flapper:7,newoutlet:8,patch:9}
B.RK=new C.bu(B.aHJ,["Look and test","Hand","Screwdriver","Pliers","Wrench","Crimp tool","Plunger","New flapper","New outlet","Drywall patch"],x.l)
B.bJn=new C.a1(63072,"MaterialIcons",!1)
B.dvn=new C.bu(B.aHJ,[D.fj,B.anE,A1.GB,D.Gq,D.p1,B.bJn,A8.a1r,D.qj,B.Ol,A_.w6],C.aw("bu<n,a1>"))
B.dw3=new A.i8(18,50,0,20)
B.dwg=new A.i8(-126,126,-66,5)
B.dwn=new A.i8(-4,16,0,24)
B.dyI=new A.aok(null)
B.aGr=new A.a6Q(null)
B.dFs=new A.apG(null)
B.dIJ=new A.IM(!1,"city","",null)
B.aGB=new A.IM(!1,"","",null)
B.e3o=new A.O7(!0,null,!0,!1,null)
B.h6C=new A.r(16,2.6,0)
B.e7H=new A.cW("Wall drain","The pipe stub that comes out of the wall. The trap arm slides into it.",B.h6C,8)
B.fS3=new A.r(0,3,-6)
B.e7I=new A.cW("Wall","The copper supply pipes come out of the wall here.",B.fS3,24)
B.h2N=new A.r(8.2,1,-7)
B.e7J=new A.cW("Toilet","The tank fills from the cold supply on the wall. The bowl drains into the white pipe in the floor.",B.h2N,7)
B.fQI=new A.r(0,0,40)
B.e7K=new A.cW("The room","A room to build from bare studs to finished, working electrics. The walls hold the cable, the boxes and the devices.",B.fQI,190)
B.h_L=new A.r(-2.4,11.5,-3.6)
B.e7L=new A.cW("Hot faucet inlet","The threaded tail under the faucet where the hot supply hose screws on.",B.h_L,7)
B.fVb=new A.r(-3.6,4,-7.8)
B.e7M=new A.cW("Light switch","Controls the ceiling light. Tap Open lesson to wire one.",B.fVb,4.5)
B.h1l=new A.r(0,0.5,2)
B.e7N=new A.cW("Voltage tester","A tester that glows when it touches live power.",B.h1l,6)
B.e7O=new A.cW("Pipe joint","A crimped joint in the hot water line.",B.aVc,4)
B.h08=new A.r(0,-0.2,0.2)
B.e7P=new A.cW("Cover plate","The plate covers the box and the edges of the drywall so nobody touches the wires.",B.h08,8)
B.h5z=new A.r(-4.6,0.5,-3.4)
B.e7Q=new A.cW("Hot shut-off valve","The angle stop valve on the hot pipe. Turn the handle to stop the water to the faucet without shutting off the whole house. Hot is always on the left.",B.h5z,8)
B.UU=new A.r(0,-0.3,3.2)
B.e7R=new A.cW("White wire nut: NEUTRAL","Twist the house white wire and the fixture white wire together under this cap.",B.UU,6)
B.h17=new A.r(4.6,0.5,-3.4)
B.e7S=new A.cW("Cold shut-off valve","The angle stop valve on the cold pipe. Cold is always on the right.",B.h17,8)
B.fUl=new A.r(2.4,11.5,-3.6)
B.e7T=new A.cW("Cold faucet inlet","The threaded tail under the faucet where the cold supply hose screws on.",B.fUl,7)
B.h7A=new A.r(0.8,-0.8,1.2)
B.e7U=new A.cW("Black wire to the light","This black wire carries power to the light once the switch is on. It goes on the other brass screw.",B.h7A,7)
B.h_H=new A.r(10.05,5.2,-7.5)
B.e7V=new A.cW("Water heater breaker","A big circuit for the water heater. It is ON.",B.h_H,3.5)
B.aUa=new A.r(0,40,0)
B.e7W=new A.cW("Back wall",y.o,B.aUa,140)
B.h2G=new A.r(3,3.8,-7.4)
B.e7X=new A.cW("Kitchen faucet","Hot on the left, cold on the right. Tap Open lesson to connect the supply hoses.",B.h2G,4.5)
B.Ad=new A.r(0,6,0)
B.e7Z=new A.cW("Tailpiece","The straight pipe that hangs from the sink drain. Its bottom end is smooth so the slip nut can slide on and grip it.",B.Ad,10)
B.h54=new A.r(-60,40,50)
B.e8_=new A.cW("Left wall",y.o,B.h54,140)
B.fVT=new A.r(3,1,0)
B.e80=new A.cW("P-trap","The U-shaped bend. It always keeps a little water inside, and that water plug blocks sewer gas from coming back up into the house.",B.fVT,11)
B.fRr=new A.r(0,20,5)
B.e81=new A.cW("The room","A bare room with the water supply stubs and the drain stub already in the wall and floor.",B.fRr,120)
B.fSK=new A.r(0,-8,0)
B.e82=new A.cW("Cabinet","The cabinet under the sink where the drain is built.",B.fSK,22)
B.fQG=new A.r(0,0,150)
B.e83=new A.cW("Lawn","The grass. Walls, floors and the sky stay as they are, but you can add things to the garden with the Furniture button.",B.fQG,400)
B.fSl=new A.r(0,4,-8)
B.e84=new A.cW("Wall framing","2x4 studs 16 inches apart. Pipes and cables run through holes drilled in the middle of the studs, never along the edge where a nail could hit them.",B.fSl,18)
B.aVr=new A.r(0,-0.2,5.1)
B.e85=new A.cW("TEST and RESET buttons","Press TEST to make the GFCI trip. Press RESET to turn it back on. Test it once a month.",B.aVr,5)
B.aU5=new A.r(0,11,0)
B.e86=new A.cW("Sink","The sink bowl and the counter. The drain flange at the bottom is where the tailpiece starts.",B.aU5,16)
B.f_=new A.r(0,0,0)
B.e87=new A.cW("Drywall","The wall surface. A hole is cut in it for the electrical box.",B.f_,22)
B.fXb=new A.r(60,40,50)
B.e88=new A.cW("Right wall",y.o,B.fXb,140)
B.fR9=new A.r(0,14,-3)
B.e89=new A.cW("Counter and sink","The faucet is mounted through a hole in the counter.",B.fR9,20)
B.fZo=new A.r(0,-1.9,5)
B.e8a=new A.cW("GREEN screw: GROUND",y.Z,B.fZo,5)
B.fSi=new A.r(0,47,-2)
B.e8b=new A.cW("Top and bottom plate","The horizontal 2x4s at the top and the bottom of the wall. The studs stand between them.",B.fSi,70)
B.fQM=new A.r(0,0,-8)
B.e8c=new A.cW("Wall","Behind the wall the drain pipe goes down to the sewer line.",B.fQM,22)
B.fRl=new A.r(0,19,-3)
B.e8d=new A.cW("Faucet","The faucet with hot on the left (red) and cold on the right (blue).",B.fRl,14)
B.fXL=new A.r(3.5,2,-7.2)
B.e8e=new A.cW("Kitchen counter and cabinet","The cabinet under the sink is where the drain and the shut-off valves live.",B.fXL,9)
B.fZO=new A.r(10.05,5.7,-7.5)
B.e8f=new A.cW("Kitchen breaker","Protects the kitchen outlets. It is ON.",B.fZO,3.5)
B.h_T=new A.r(4,6,-2.5)
B.e8g=new A.cW("Cold supply hose","A braided steel hose with a rubber liner and a blue band.",B.h_T,9)
B.h1g=new A.r(-1,0.6,4.3)
B.e8h=new A.cW("SILVER screw: NEUTRAL side",y.B,B.h1g,5)
B.a9R=new A.r(0,3.7,0)
B.e8i=new A.cW("Slip nut","A big plastic nut. Slide it on the pipe first, then the washer, then join the pieces and hand tighten. A rubber washer inside makes the seal.",B.a9R,7)
B.UT=new A.r(0,-1,-0.6)
B.e8j=new A.cW("Wire nut","A twist-on cap that joins wires safely. The two white wires are joined here because a switch only cuts the hot wire.",B.UT,5)
B.h00=new A.r(-1.5,-0.3,3.2)
B.e8k=new A.cW("Black wire nut: HOT","Twist the house black wire and the fixture black wire together under this cap.",B.h00,6)
B.fZN=new A.r(-1.9,0,-2)
B.e8l=new A.cW("Wood stud","The 2x4 frame inside the wall. The electrical box is nailed or screwed to a stud so it cannot move.",B.fZN,16)
B.h3q=new A.r(-1,-0.8,4.3)
B.e8m=new A.cW("SILVER screw: NEUTRAL side",y.B,B.h3q,5)
B.h6Z=new A.r(6,3,-7.8)
B.e8n=new A.cW("Water and drain pipes","Red is hot water, blue is cold water (PEX tubing). The white pipes are drains. They slope down so the waste flows away.",B.h6Z,14)
B.h3v=new A.r(1,0.6,4.3)
B.e8o=new A.cW("BRASS screw: HOT side",y.C,B.h3v,5)
B.h3X=new A.r(0,-0.2,4.9)
B.e8p=new A.cW("Mounting strap (yoke)","The metal strap with two screw slots. Long screws through the ears hold the device in the box.",B.h3X,7)
B.h7x=new A.r(9.55,4.7,-7.5)
B.e8q=new A.cW("Spare breaker","A spare circuit.",B.h7x,3.5)
B.fRs=new A.r(0,20,8)
B.e8r=new A.cW("Vanity and counter","The cabinet that holds the sink. The pipes live inside it.",B.fRs,70)
B.h6f=new A.r(-3.2,1.3,-7.8)
B.e8s=new A.cW("Living room outlet","A standard outlet. Tap Open lesson to wire one in 3D.",B.h6f,4.5)
B.h4_=new A.r(1.5,-0.3,3.2)
B.e8t=new A.cW("Green ground connection","Join the bare copper house ground wire to the green fixture ground wire.",B.h4_,6)
B.fZw=new A.r(12,2.6,0)
B.e8u=new A.cW("Trap arm","The pipe that carries the waste water from the trap into the wall. It must slope down toward the wall, about 1/4 inch per foot.",B.fZw,9)
B.h0Q=new A.r(0,6.5,-7.8)
B.e8v=new A.cW("Electrical cables","Cables run from the breaker panel to every outlet, switch and light. Yellow is 12 gauge for 20 amps. White is 14 gauge for 15 amps.",B.h0Q,16)
B.h1B=new A.r(11.2,2.3,-6)
B.e8w=new A.cW("Water heater","Heats the water. The cold line goes in at the top and the hot line comes out at the top.",B.h1B,9)
B.h2g=new A.r(9.55,5.2,-7.5)
B.e8x=new A.cW("Bathroom breaker","Protects the bathroom. It is ON.",B.h2g,3.5)
B.fZU=new A.r(5.2,3.9,-7.8)
B.e8y=new A.cW("Kitchen GFCI outlet","Outlets near water must be GFCI. Tap Open lesson to wire one.",B.fZU,4.5)
B.fSd=new A.r(0,40,-3)
B.e8z=new A.cW("Electrical cable","Yellow 12/2 cable with ground: it carries power from the breaker panel through the holes in the studs to each box.",B.fSd,80)
B.h_E=new A.r(-8.4,1.2,-6.4)
B.e8A=new A.cW("Sofa","Just furniture, to show the size of the room.",B.h_E,10)
B.e8B=new A.cW("Outlet face","Two outlets. The short slot is hot, the long slot is neutral, and the round hole is ground.",B.aVr,6)
B.fZ6=new A.r(0,4,-7.8)
B.e8C=new A.cW("Wall","The drywall of the back wall.",B.fZ6,16)
B.h6k=new A.r(0,0,0.6)
B.e8D=new A.cW("Canopy","The round cover that hides the box and the wire connections against the ceiling.",B.h6k,8)
B.e8E=new A.cW("Concrete slab","The foundation. It carries the whole weight of the house. Plumbing drains are placed before it is poured.",B.f_,30)
B.fS6=new A.r(0,40,12)
B.e8F=new A.cW("Front door","Tap the door to go inside the house.",B.fS6,260)
B.a9T=new A.r(8.9,2.6,0)
B.e8G=new A.cW("Slip nut","Hand tighten it, then about a quarter turn with pliers. Over-tightening cracks the plastic.",B.a9T,7)
B.h2f=new A.r(1,-0.8,4.3)
B.e8H=new A.cW("BRASS screw: HOT side",y.C,B.h2f,5)
B.fYP=new A.r(0.6,1.5,-1.8)
B.e8I=new A.cW("Cable to the light (LOAD)","This cable carries the switched power on to the light. The black wire here only has power when the switch is on.",B.fYP,8)
B.fZj=new A.r(9.8,5,-7.5)
B.e8J=new A.cW("Breaker panel","The main electrical panel. Each breaker protects one circuit. A breaker that is in the middle position has TRIPPED. Flip it fully OFF and then ON to reset.",B.fZj,6)
B.h_Y=new A.r(-4,6,-2.5)
B.e8K=new A.cW("Hot supply hose","A braided steel hose with a rubber liner and a red band. Hand tighten the nuts, then a quarter turn with a wrench.",B.h_Y,9)
B.edf=new C.t(66,66)
B.bQc=new C.ae(D.eb,20,F.fv,null,null,null)
B.egK=new C.D(D.vX,B.bQc,null)
B.fop=new C.F(!0,D.mv,null,null,null,null,12.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fuY=new C.y("A circuit that is not CORRECT and safe can never pass, even if the light or fan would have worked.",null,B.fop,null,null,null,null,null,null,null,null,null)
B.egV=new C.D(D.ic,B.fuY,null)
B.fEP=new C.y("Sick people can stay in a hospital bed. Treat each patient before their care runs out, and they go home better.",null,D.Up,null,D.L,null,null,null,null,null,null,null)
B.eh_=new C.D(D.aka,B.fEP,null)
B.bPp=new C.ae(D.eb,18,D.bm,null,null,null)
B.ehg=new C.D(D.fw,B.bPp,null)
B.ehi=new C.D(D.fw,G.ap7,null)
B.eld=new A.xW(0,0,18,0,!1,!1,!1,!1,!1,0,!1,!1,"","",-1,0,-1,0)
B.ele=new A.xW(0,100,120,-2.2,!1,!1,!1,!1,!1,0,!1,!1,"","",-1,0,-1,0)
B.elf=new A.xW(0,40,150,0.5,!1,!1,!1,!1,!1,0,!1,!1,"","",-1,0,-1,0)
B.elg=new A.xW(0,0,0,0,!1,!1,!1,!1,!1,0,!1,!1,"","",-1,0,-1,0)
B.elh=new A.xW(0,-80,50,0,!1,!1,!1,!1,!1,0,!1,!1,"","",-1,0,-1,0)
B.eli=new A.xW(0,0,56,0,!1,!1,!1,!1,!1,0,!1,!1,"","",-1,0,-1,0)
B.enl=new A.a9n(null,null)
B.bgY=new C.u(1,0.30980392156862746,0.7019607843137254,0.9647058823529412,D.q)
B.bp5=new C.u(1,0.11372549019607843,0.37254901960784315,0.7686274509803922,D.q)
B.blT=new C.u(1,0.043137254901960784,0.16470588235294117,0.4196078431372549,D.q)
B.cZf=w([B.bgY,B.bp5,B.blT],x.O)
B.eo4=new C.c0(A6.xd,0.5,D.x,null,0,B.cZf,null,null)
B.bpl=new C.u(1,0.8392156862745098,0.9019607843137255,0.9176470588235294,D.q)
B.eoM=new C.z(B.bpl,B.Xo)
B.eoV=new C.z(0,120)
B.eoW=new C.z(0,300)
B.epa=new C.z(B.oK,B.f_)
B.eqL=new C.z(64,2.4)
B.eso=new C.z("LOAD (taped)",D.d9)
B.bdD=new C.u(1,0.9450980392156862,0.8901960784313725,0.7764705882352941,D.q)
B.bgE=new C.u(1,0.8470588235294118,0.7686274509803922,0.6274509803921569,D.q)
B.etK=new C.z(B.bdD,B.bgE)
B.dfB=w([D.aw,D.ca,D.aw],x.O)
B.eu8=new C.z(-40,B.dfB)
B.evw=new C.z(63,-2.4)
B.bfF=new C.u(1,0.8901960784313725,0.9254901960784314,0.9607843137254902,D.q)
B.baM=new C.u(1,0.7372549019607844,0.7843137254901961,0.8392156862745098,D.q)
B.ew1=new C.z(B.bfF,B.baM)
B.ewi=new C.z(51,B.adO)
B.bbT=new C.u(1,0.9137254901960784,0.8705882352941177,0.7607843137254902,D.q)
B.eyW=new C.z(B.bbT,B.Bd)
B.bcg=new C.u(1,0.9137254901960784,0.9372549019607843,0.9490196078431372,D.q)
B.bcP=new C.u(1,0.8509803921568627,0.8941176470588236,0.9098039215686274,D.q)
B.ezK=new C.z(B.bcg,B.bcP)
B.bl8=new C.u(1,0.9058823529411765,0.8235294117647058,0.8156862745098039,D.q)
B.bcQ=new C.u(1,0.7058823529411765,0.7176470588235294,0.7411764705882353,D.q)
B.eAG=new C.z(B.bl8,B.bcQ)
B.baa=new C.u(1,0.7647058823529411,0.8117647058823529,0.9019607843137255,D.q)
B.eBw=new C.z(B.baa,B.ah8)
B.bjH=new C.u(1,0.3568627450980392,0.39215686274509803,0.4392156862745098,D.q)
B.eDd=new C.z("SILVER \xb7 NEUTRAL",B.bjH)
B.h6u=new A.r(-1.5,0,0)
B.eDm=new C.z(B.Ls,B.h6u)
B.eES=new C.z(52,B.AN)
B.bgg=new C.u(1,0.12156862745098039,0.47843137254901963,0.22745098039215686,D.q)
B.eFI=new C.z("GREEN \xb7 GROUND",B.bgg)
B.boe=new C.u(1,0.9450980392156862,0.9098039215686274,0.8235294117647058,D.q)
B.eGo=new C.z(B.boe,B.Bd)
B.eGF=new C.z("main","Main water valve")
B.cL8=w([D.vC,D.bI,D.be],x.O)
B.eIU=new C.z(40,B.cL8)
B.h7B=new A.r(1.5,0,0)
B.eKE=new C.z(B.XY,B.h7B)
B.bcv=new C.u(1,0.9529411764705882,0.9411764705882353,0.9098039215686274,D.q)
B.bje=new C.u(1,0.4823529411764706,0.5294117647058824,0.5803921568627451,D.q)
B.eLg=new C.z(B.bcv,B.bje)
B.eMc=new C.z(B.hS,B.WQ)
B.bfl=new C.u(1,0.9529411764705882,0.9019607843137255,0.7843137254901961,D.q)
B.bm_=new C.u(1,0.788235294117647,0.7098039215686275,0.5490196078431373,D.q)
B.eMu=new C.z(B.bfl,B.bm_)
B.bc7=new C.u(1,0.6039215686274509,0.4196078431372549,0.047058823529411764,D.q)
B.eMZ=new C.z("BRASS \xb7 HOT",B.bc7)
B.eNq=new C.z(53,B.XY)
B.a7d=new C.bj(180,40,215)
B.a7e=new C.bj(215,40,345)
B.a7f=new C.bj(60,60,90)
B.eOa=new C.bj(61,-4.6,B.tB)
B.a7g=new C.bj(95,40,185)
B.eP4=new C.bj("Turn the main water ON to test for leaks: pick Hand and tap the main valve.","hand","main")
B.ePX=new C.bj(62,4.6,B.nX)
B.eQ6=new C.bj("The water must be OFF before you cut into the pipes: pick Hand and tap the main valve.","hand","main")
B.eQy=new C.bj("Fit the parts in the order of the job list.","",null)
B.eQX=new C.bj("Looks good. Watch for leaks; if none, the job is done.","",null)
B.eRN=new C.cw([0,17.1,16.4,5.8])
B.eRQ=new C.cw([0,-0.1,16.4,4.2])
B.eST=new C.cw([15.6,9,14.8,22])
B.eSX=new C.cw([-15.6,9,14.8,22])
B.eT5=new C.e9([72,60,44,B.LE,B.LH])
B.bp1=new C.u(1,0.8941176470588236,0.6901960784313725,0.47843137254901963,D.q)
B.eTm=new C.e9([124,70,44,B.bp1,B.pX])
B.eTt=new C.e9([90,64,46,B.afr,D.he])
B.eTM=new C.e9([110,70,62,D.bN,D.al])
B.eTR=new C.e9([84,60,40,B.afu,B.LH])
B.ftB=new C.y("\u260e",null,D.pt,null,null,null,null,null,null,null,null,null)
B.b8X=new C.oW(B.ftB,D.aw,null,24,null)
B.fw3=new C.y("City office",null,D.de,null,null,null,null,null,null,null,null,null)
B.d77=w([B.b8X,D.ba,B.fw3],x.p)
B.eWw=new C.cb(D.aN,D.e,D.j,D.m,null,D.p,null,0,B.d77,null)
B.bQY=new C.ae(D.Oi,26,D.c8,null,null,null)
B.fJb=new C.y("Hallway tour",null,D.hx,null,null,null,null,null,null,null,null,null)
B.fuz=new C.y("Just the hall and its big TVs, 45 seconds",null,D.vd,null,null,null,null,null,null,null,null,null)
B.dos=w([B.fJb,B.fuz],x.p)
B.bqL=new C.fj(D.ag,D.e,D.j,D.E,null,D.p,null,0,B.dos,null)
B.bCW=new C.bA(1,D.bd,B.bqL,null)
B.cVi=w([B.bQY,D.ba,B.bCW,A0.Oz],x.p)
B.eWz=new C.cb(D.aN,D.e,D.j,D.m,null,D.p,null,0,B.cVi,null)
B.bOC=new C.ae(D.id,30,D.c,null,null,null)
B.fLb=new C.y("Play the tour",null,D.k1,null,null,null,null,null,null,null,null,null)
B.d2V=w([B.bOC,D.bo,B.fLb],x.p)
B.eWF=new C.cb(D.aN,D.b8,D.j,D.m,null,D.p,null,0,B.d2V,null)
B.v0=new A.Jx(0,"correct")
B.aOg=new A.Jx(1,"incorrect")
B.rS=new A.Jx(2,"unsafe")
B.Th=new A.Jx(3,"incomplete")
B.eWT=new A.Jx(4,"requiresVerification")
B.e9g={hospital:0,shop:1,school:2,firestation:3,house2:4,bighouse:5,store:6,gasstation:7,dmv:8,tower:9,hq:10}
B.aOS=new C.dD(B.e9g,11,x.M)
B.e90={wardrobe:0,shelf:1,lamp:2,console:3}
B.eYg=new C.dD(B.e90,4,x.M)
B.aOW=new C.jn([1,2,3,4,5],C.aw("jn<H>"))
B.e8L={house2:0,bighouse:1,shop:2,hospital:3,school:4,firestation:5,store:6,gasstation:7,tower:8,hq:9,dmv:10}
B.eYt=new C.dD(B.e8L,11,x.M)
B.eb0={billboard:0,bighouse:1,townsign:2,cornersign:3,adboard:4,tower:5,hq:6,store:7,gasstation:8,ubstation:9,dmv:10}
B.eYw=new C.dD(B.eb0,11,x.M)
B.aP0=new C.dD(D.hL,0,C.aw("dD<H>"))
B.f_q=new C.au(0,36)
B.f_A=new C.au(126,84)
B.f0x=new C.a7(110,64,null,null)
B.f0y=new C.a7(120,70,null,null)
B.f0E=new C.a7(270,64,null,null)
B.f0F=new C.a7(270,70,null,null)
B.Jp=new A.FB(0,"hot")
B.Jq=new A.FB(1,"neutral")
B.Jr=new A.FB(2,"ground")
B.aQH=new A.FB(3,"load")
B.f90=new C.F(!0,D.c,null,null,null,null,12.5,null,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.f9C=new C.F(!0,D.c,null,null,null,null,13.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.f9H=new C.F(!0,D.c,null,null,null,null,16,D.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,S.a3a,null,null,null)
B.faW=new C.F(!0,D.aB,null,null,null,null,14,D.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.aRa=new C.F(!0,D.aB,null,null,null,null,11.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fbs=new C.F(!0,D.bI,null,null,null,null,12,D.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fbC=new C.F(!0,D.ae,null,null,null,null,13.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fc1=new C.F(!0,D.aE,null,null,null,null,12.5,D.u,null,2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fca=new C.F(!0,D.aQ,null,null,null,null,11.5,null,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fcl=new C.F(!0,D.bI,null,null,null,null,15,D.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fcC=new C.F(!0,D.c,null,null,null,null,12.5,D.O,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.aRp=new C.F(!0,D.ae,null,null,null,null,12,D.O,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fdw=new C.F(!0,D.c,null,null,null,null,13,D.O,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.a8J=new C.F(!0,D.ae,null,null,null,null,null,null,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fdY=new C.F(!0,D.bI,null,null,null,null,13,D.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.feD=new C.F(!0,D.aB,null,null,null,null,9.5,null,null,null,null,null,1.15,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.feT=new C.F(!0,D.ae,null,null,null,null,12.5,null,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.feV=new C.F(!0,D.fi,null,null,null,null,12,null,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.ffx=new C.F(!0,null,null,null,null,null,9,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.JC=new C.F(!0,D.aE,null,null,null,null,12.5,D.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fg1=new C.F(!0,D.c,null,null,null,null,11.5,D.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.aRG=new C.F(!0,D.c,null,null,null,null,14,null,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fgk=new C.F(!0,D.bM,null,null,null,null,13,D.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fhi=new C.F(!0,D.mv,null,null,null,null,12,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fho=new C.F(!0,D.ae,null,null,null,null,13.5,null,D.cE,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fhz=new C.F(!0,D.fi,null,null,null,null,11.5,D.O,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fhE=new C.F(!0,D.eF,null,null,null,null,14,D.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fib=new C.F(!0,D.bI,null,null,null,null,18,D.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fiK=new C.F(!0,D.aQ,null,null,null,null,12,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fjs=new C.F(!0,D.bI,null,null,null,null,null,D.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.aS7=new C.F(!0,D.ae,null,null,null,null,13.5,null,null,null,null,null,1.5,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fkj=new C.F(!0,D.aE,null,null,null,null,null,D.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fkM=new C.F(!0,D.aB,null,null,null,null,11,D.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fn8=new C.F(!0,D.bI,null,null,null,null,44,D.u,null,2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.aSB=new C.F(!0,D.c,null,null,null,null,13.5,D.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fnx=new C.F(!0,D.aQ,null,null,null,null,11.5,null,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fo4=new C.F(!0,D.b2,null,null,null,null,14.5,D.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fod=new C.F(!0,F.fv,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fov=new C.F(!0,D.fi,null,null,null,null,12,D.O,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.foQ=new C.y("Wire guide (U.S. houses)",null,D.de,null,null,null,null,null,null,null,null,null)
B.fp2=new C.y("Which wall?",null,D.Uw,null,null,null,null,null,null,null,null,null)
B.f9R=new C.F(!0,D.w,null,null,null,null,12,D.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fpn=new C.y("Open the 3D lesson",null,B.f9R,null,null,null,null,null,null,null,null,null)
B.fq8=new C.y("Never rely on color alone. With the power off, prove what each wire does with a tester and the device diagram. A licensed electrician does real house wiring.",null,K.a8L,null,null,null,null,null,null,null,null,null)
B.fqi=new C.y("Tip: pick a part, then tap its glowing spot. Joints on hoses, bolts and the drain are only loose: pick the Wrench and tap them. Use your Hand on the main water valve: turn the water OFF before you cut into a pipe, and ON to test for leaks.",null,E.a8D,null,null,null,null,null,null,null,null,null)
B.fqD=new C.y("Answer, then submit. Nothing is marked until you submit.",null,H.v8,null,null,null,null,null,null,null,null,null)
B.frr=new C.y("You used all three lives. Electricity does not give second chances, so in real life you turn the breaker OFF and test the wires every single time. Try the job again.",null,D.wS,null,null,null,null,null,null,null,null,null)
B.frI=new C.y("A different house",null,null,null,null,null,null,null,null,null,null,null)
B.fs8=new C.y("\ud83c\udf5e",null,D.ve,null,null,null,null,null,null,null,null,null)
B.fs9=new C.y("Show me",null,D.mi,null,null,null,null,null,null,null,null,null)
B.fso=new C.y("Connect it to...",null,D.lM,null,null,null,null,null,null,null,null,null)
B.fsz=new C.y("Start this job again",null,null,null,null,null,null,null,null,null,null,null)
B.fjF=new C.F(!0,D.cs,null,null,null,null,12.5,D.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fsT=new C.y("Give back",null,B.fjF,null,null,null,null,null,null,null,null,null)
B.fty=new C.y("Edit your billboard",null,D.de,null,null,null,null,null,null,null,null,null)
B.fuG=new C.y("L is the lobby. On every level there is a balcony with a view of the town.",null,H.DR,null,null,null,null,null,null,null,null,null)
B.fuV=new C.y("Submit the test",null,null,null,null,null,null,null,null,null,null,null)
B.fvi=new C.y("\ud83e\udeaa",null,D.ve,null,null,null,null,null,null,null,null,null)
B.fvv=new C.y("Start from a bare house (wire everything)",null,null,null,null,null,null,null,null,null,null,null)
B.fwb=new C.y("THE RACE",null,O.t3,null,null,null,null,null,null,null,null,null)
B.fwg=new C.y("What should the drone show you?",null,B.aRg,null,null,null,null,null,null,null,null,null)
B.fwU=new C.y("Diagram lessons",null,null,null,null,null,null,null,null,null,null,null)
B.fwY=new C.y("Go through",null,null,null,null,null,null,null,null,null,null,null)
B.fxK=new C.y("The customer says\u2026",null,D.de,null,null,null,null,null,null,null,null,null)
B.fyg=new C.y("Submit for inspection",null,null,null,null,null,null,null,null,null,null,null)
B.fyu=new C.y("What the house needs",null,D.de,null,null,null,null,null,null,null,null,null)
B.fyF=new C.y("Next job",null,null,null,null,null,null,null,null,null,null,null)
B.fbn=new C.F(!0,D.w,null,null,null,null,14,D.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fyN=new C.y("Go in",null,B.fbn,null,null,null,null,null,null,null,null,null)
B.fkF=new C.F(!0,D.aE,null,null,null,null,22,D.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fyR=new C.y("My House",null,B.fkF,null,D.L,null,null,null,null,null,null,null)
B.fyZ=new C.y("New job",null,null,null,null,null,null,null,null,null,null,null)
B.aRL=new C.F(!0,D.cs,null,null,null,null,null,D.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fz5=new C.y("Job over",null,B.aRL,null,null,null,null,null,null,null,null,null)
B.fzm=new C.y("Three shocks. In real life you switch the breaker off and test the wires, every time. Try another call.",null,D.wS,null,null,null,null,null,null,null,null,null)
B.fzs=new C.y("Learn the trades",null,P.t1,null,null,null,null,null,null,null,null,null)
B.fA0=new C.y("Practice mode: no hints. You will only hear from me when something is wrong.",null,H.DR,null,null,null,null,null,null,null,null,null)
B.fAe=new C.y("New call",null,null,null,null,null,null,null,null,null,null,null)
B.fAj=new C.y("Job done! \ud83c\udf89",null,K.JJ,null,null,null,null,null,null,null,null,null)
B.fAm=new C.y("Wire guide",null,null,null,null,null,null,null,null,null,null,null)
B.fBu=new C.y("Next call",null,null,null,null,null,null,null,null,null,null,null)
B.fBS=new C.y("Plug in",null,D.de,null,null,null,null,null,null,null,null,null)
B.fCh=new C.y("Look around",null,null,null,null,null,null,null,null,null,null,null)
B.fCC=new C.y("\ud83d\udef5",null,D.wQ,null,null,null,null,null,null,null,null,null)
B.fCR=new C.y("The customer wants:",null,D.Uj,null,null,null,null,null,null,null,null,null)
B.fD1=new C.y('Tip: pick "Look and test" and tap things to find out what is wrong. Then pick the right tool. Turn the breaker off (hand) before you touch any wire.',null,E.a8D,null,null,null,null,null,null,null,null,null)
B.fgl=new C.F(!0,D.aB,null,null,null,null,11.5,D.H,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fDi=new C.y("INCOMING CALL",null,B.fgl,null,null,null,null,null,null,null,null,null)
B.fDo=new C.y("Elevator",null,D.fr,null,null,null,null,null,null,null,null,null)
B.fEo=new C.y("Deliveries",null,D.fr,null,null,null,null,null,null,null,null,null)
B.fEC=new C.y("Every connection is on the right terminal and every safety check passes.",null,D.t4,null,null,null,null,null,null,null,null,null)
B.fEL=new C.y("Message \xb7 now",null,D.v7,null,null,null,null,null,null,null,null,null)
B.fFz=new C.y("5 bedrooms, 3 bathrooms and a garden. Walk in, look all round, fix what is wrong.",null,A5.U5,null,D.L,null,null,null,null,null,null,null)
B.fFE=new C.y("Call over",null,B.aRL,null,null,null,null,null,null,null,null,null)
B.fFL=new C.y("\ud83d\udd12",null,Z.Uk,null,null,null,null,null,null,null,null,null)
B.fFM=new C.y("\u23cf Unplug",null,F.A1,null,null,null,null,null,null,null,null,null)
B.fFS=new C.y("The game is closed for now",null,D.mh,null,D.L,null,null,null,null,null,null,null)
B.fb6=new C.F(!0,D.ae,null,null,null,null,14.5,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fG4=new C.y("You missed 3 jobs in a row. The City office needs people who answer the phone and finish the job.",null,B.fb6,null,D.L,null,null,null,null,null,null,null)
B.fG6=new C.y("A different call",null,null,null,null,null,null,null,null,null,null,null)
B.fGo=new C.y("One board on its own, or several boards standing apart.",null,H.v8,null,null,null,null,null,null,null,null,null)
B.fGz=new C.y("\ud83d\udecf\ufe0f",null,D.nD,null,null,null,null,null,null,null,null,null)
B.fGZ=new C.y("Job complete! \ud83c\udf89",null,K.JJ,null,null,null,null,null,null,null,null,null)
B.fHb=new C.y("OPEN ORDERS",null,O.t3,null,null,null,null,null,null,null,null,null)
B.fHv=new C.y("Colours",null,D.DL,null,null,null,null,null,null,null,null,null)
B.fHz=new C.y("How you are doing",null,D.hx,null,null,null,null,null,null,null,null,null)
B.fI4=new C.y("All fixed! \ud83c\udf89",null,K.JJ,null,null,null,null,null,null,null,null,null)
B.fI8=new C.y("These are the usual U.S. house wiring colors. Colors are a hint, not proof: old work, switch loops and other countries differ. A real installer proves what each wire does with a tester, with the power off, and follows the device diagram.",null,A9.a8K,null,null,null,null,null,null,null,null,null)
B.fIh=new C.y("Test (marked on submit)",null,null,null,null,null,null,null,null,null,null,null)
B.fIu=new C.y("Messages",null,D.v7,null,null,null,null,null,null,null,null,null)
B.aTe=new C.y("Stay",null,null,null,null,null,null,null,null,null,null,null)
B.fJg=new C.y("\ud83d\ude81",null,D.wQ,null,null,null,null,null,null,null,null,null)
B.fJt=new C.y("Choose a level. A red one has an office with no power.",null,D.A5,null,null,null,null,null,null,null,null,null)
B.aTg=new C.y("A different job",null,null,null,null,null,null,null,null,null,null,null)
B.fKh=new C.y("It goes on the back wall, not wired yet. Tap the red one to wire it yourself.",null,H.v8,null,null,null,null,null,null,null,null,null)
B.fLd=new C.y("\ud83d\uded7",null,D.wQ,null,null,null,null,null,null,null,null,null)
B.fLy=new C.y("\u26a1",null,D.ps,null,null,null,null,null,null,null,null,null)
B.fM4=new C.y("Practice (instant feedback)",null,null,null,null,null,null,null,null,null,null,null)
B.fM9=new C.y("The job",null,D.de,null,null,null,null,null,null,null,null,null)
B.fN0=new C.y("Stay in the room",null,null,null,null,null,null,null,null,null,null,null)
B.fmy=new C.F(!0,F.fv,null,null,null,null,12,D.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fNh=new C.y("\ud83e\udea7 Billboards",null,B.fmy,null,null,null,null,null,null,null,null,null)
B.fNn=new C.y("Choose a billboard",null,D.de,null,null,null,null,null,null,null,null,null)
B.fNs=new C.y("Which sign?",null,D.DL,null,null,null,null,null,null,null,null,null)
B.fNz=new C.y("\ud83d\udc8a",null,D.ve,null,null,null,null,null,null,null,null,null)
B.fQB=new A.r(3.6,2.6,0.6)
B.fQD=new A.r(0,56,0.9)
B.fQE=new A.r(-146.4,62,84)
B.ij=new A.r(0,0,1)
B.fQH=new A.r(0,0,3)
B.a9G=new A.r(0,0,4)
B.fQJ=new A.r(0,0,500)
B.fQK=new A.r(0,0,640)
B.fQL=new A.r(0,0,800)
B.t8=new A.r(0,0,-1)
B.a9H=new A.r(0,0,-60)
B.fQO=new A.r(0,101,38)
B.fQP=new A.r(0,105,280)
B.aU4=new A.r(0,10,0)
B.fQQ=new A.r(0,10,3)
B.fQR=new A.r(0,110,10)
B.fQS=new A.r(0,110,95)
B.fQT=new A.r(0,112,36)
B.fQU=new A.r(0,116,0)
B.fQV=new A.r(0,11,-15)
B.fQW=new A.r(0,120,0)
B.fQX=new A.r(0,122,0)
B.fQY=new A.r(0,124,0)
B.fQZ=new A.r(0,126,4)
B.aU6=new A.r(0,12,0)
B.fR_=new A.r(0,12,3)
B.fR0=new A.r(0,130,-3)
B.a9I=new A.r(0,13,0)
B.fR1=new A.r(0,13,56)
B.fR2=new A.r(0,13,-8)
B.fR3=new A.r(0,142,0)
B.K7=new A.r(0,14,0)
B.fR4=new A.r(0,14,11)
B.fR5=new A.r(0,14,150)
B.fR6=new A.r(0,14,2)
B.fR7=new A.r(0,14,32)
B.aU7=new A.r(0,14,40)
B.fR8=new A.r(0,14,5)
B.fRa=new A.r(0,14,-9)
B.fRb=new A.r(0,150,-150)
B.fRc=new A.r(0,159,0)
B.fRd=new A.r(0,165,3)
B.fRe=new A.r(0,165,-63)
B.fRf=new A.r(0,16,0)
B.fRg=new A.r(0,178,-30)
B.a9J=new A.r(0,17,0)
B.fRh=new A.r(0,17,21)
B.fRi=new A.r(0,188,0)
B.fRj=new A.r(0,19,0)
B.fRk=new A.r(0,19,14)
B.fRm=new A.r(0,19,-30)
B.e8=new A.r(0,1,0)
B.fRo=new A.r(0,202,0)
B.fRp=new A.r(0,20,0)
B.fRq=new A.r(0,20,16)
B.fRt=new A.r(0,20,-14)
B.fRu=new A.r(0,20,-6)
B.fRv=new A.r(0,210,-150)
B.fRw=new A.r(0,216,-30)
B.fRx=new A.r(0,21,0)
B.fRy=new A.r(0,22,-11)
B.fRz=new A.r(0,22,-12)
B.fRA=new A.r(0,22,-39)
B.fRD=new A.r(0,23,0)
B.fRG=new A.r(0,24,0)
B.fRH=new A.r(0,24,13)
B.fRJ=new A.r(0,250,640)
B.Ac=new A.r(0,250,-118)
B.fRL=new A.r(0,252,0)
B.fRM=new A.r(0,25,-15)
B.fRN=new A.r(0,26,-24)
B.UR=new A.r(0,28,0)
B.fRO=new A.r(0,28,-8)
B.aU9=new A.r(0,29,40)
B.fRP=new A.r(0,2,14)
B.fRQ=new A.r(0,304,-150)
B.a9K=new A.r(0,30,0)
B.fRR=new A.r(0,30,110)
B.fRS=new A.r(0,316,0)
B.fRT=new A.r(0,31,46)
B.fRU=new A.r(0,31,-6)
B.fRV=new A.r(0,330,260)
B.fRW=new A.r(0,34,0)
B.fRX=new A.r(0,36,0)
B.fRY=new A.r(0,36,19)
B.fRZ=new A.r(0,36,-3)
B.fS_=new A.r(0,37,22)
B.fS0=new A.r(0,3,0)
B.fS1=new A.r(0,3,150)
B.fS2=new A.r(0,3,-30)
B.fS4=new A.r(0,400,60)
B.fS5=new A.r(0,40,100)
B.fS7=new A.r(0,40,150)
B.fS8=new A.r(0,40,17)
B.fSa=new A.r(0,40,40)
B.fSb=new A.r(0,40,45)
B.fSc=new A.r(0,40,50)
B.fSe=new A.r(0,40,-6)
B.aUb=new A.r(0,44,46)
B.fSf=new A.r(0,44,55)
B.fSg=new A.r(0,46,0)
B.fSh=new A.r(0,47,0)
B.aUc=new A.r(0,48,0)
B.fSj=new A.r(0,48,20)
B.fSk=new A.r(0,48,82)
B.US=new A.r(0,4,-2)
B.fSo=new A.r(0,520,1450)
B.aUd=new A.r(0,52,0)
B.fSp=new A.r(0,52,52)
B.fSr=new A.r(0,55,0)
B.a9L=new A.r(0,58,0)
B.fSs=new A.r(0,5,4)
B.fSu=new A.r(0,66,0)
B.fSv=new A.r(0,66,1)
B.fSw=new A.r(0,6,-15)
B.fSx=new A.r(0,75,-30)
B.aUe=new A.r(0,76,36)
B.a9M=new A.r(0,7,0)
B.fSy=new A.r(0,7,-5)
B.aUf=new A.r(0,82,0)
B.x_=new A.r(0,8,0)
B.fSz=new A.r(0,8,6)
B.fSA=new A.r(0,8,90)
B.fSB=new A.r(0,8,-16)
B.fSC=new A.r(0,8,-19)
B.fSD=new A.r(0,8,-4)
B.fSE=new A.r(0,900,1600)
B.fSF=new A.r(0,91,80)
B.aUg=new A.r(0,92,1)
B.fSG=new A.r(0,94,13)
B.fSH=new A.r(0,98,8)
B.fSI=new A.r(0,99,38)
B.a9N=new A.r(0,9,0)
B.aUh=new A.r(0,9,-3)
B.a9O=new A.r(0,-4,28)
B.fSJ=new A.r(0,-4,-20)
B.fSN=new A.r(-100,38,0.7)
B.fSQ=new A.r(100,100,320)
B.fSR=new A.r(100,14,36)
B.fSS=new A.r(100,24,36)
B.fST=new A.r(100,24,8)
B.fSU=new A.r(100,290,-330)
B.fSV=new A.r(100,7,7)
B.fSW=new A.r(101,4,37)
B.fSZ=new A.r(10,12,10)
B.fT_=new A.r(10,12,16)
B.fT0=new A.r(10,16,3)
B.fT1=new A.r(10,26,2)
B.fT2=new A.r(10,34,1)
B.fT3=new A.r(10,3,7)
B.fT4=new A.r(10,60,14)
B.fT5=new A.r(10,8,10)
B.fT6=new A.r(10,8,15)
B.fT8=new A.r(110,0,20)
B.fT9=new A.r(110,130,20)
B.fTa=new A.r(110,14,2)
B.fTb=new A.r(110,8,34)
B.fTc=new A.r(110,96,120)
B.aUi=new A.r(112,22,3)
B.fTd=new A.r(112,46,2)
B.fTe=new A.r(11,12,30)
B.aUj=new A.r(11,16,7)
B.fTf=new A.r(11,1,11)
B.fTg=new A.r(120,0,-30)
B.fTh=new A.r(120,28,22)
B.fTi=new A.r(120,40,100)
B.fTj=new A.r(124,2,26)
B.fTk=new A.r(124,4,60)
B.fTl=new A.r(125,8,54)
B.fTm=new A.r(126,2,62)
B.aUk=new A.r(12,3,9)
B.fTn=new A.r(12,4,22)
B.fTo=new A.r(12,86,0)
B.fTp=new A.r(130,18,12)
B.fTq=new A.r(130,28,24)
B.aUl=new A.r(130,4,14)
B.aUm=new A.r(130,56,80)
B.fTr=new A.r(130,5,50)
B.fTs=new A.r(132,14,150)
B.fTt=new A.r(132,2,52)
B.aUn=new A.r(134,4,84)
B.fTu=new A.r(13,0,0)
B.fTv=new A.r(13,12,13)
B.fTw=new A.r(13,15,2)
B.aUo=new A.r(13,18,8)
B.fTx=new A.r(13,28,3)
B.fTy=new A.r(0,0.52,2.35)
B.fTz=new A.r(140,28,22)
B.fTA=new A.r(140,9,43)
B.fTB=new A.r(144,2,26)
B.fTC=new A.r(146,3,40)
B.fTD=new A.r(148,60,120)
B.fTE=new A.r(14,10,2)
B.aUp=new A.r(14,11,14)
B.fTF=new A.r(14,13,28)
B.fTG=new A.r(14,14,3)
B.fTH=new A.r(14,17,4)
B.fTI=new A.r(14,20,-28)
B.fTJ=new A.r(14,30,14)
B.fTK=new A.r(14,36,14)
B.fTL=new A.r(14,3,14)
B.fTM=new A.r(150,30,42)
B.fTN=new A.r(150,70,5)
B.fTO=new A.r(151,3,43)
B.fTP=new A.r(152,4,7)
B.fTR=new A.r(16,10,10)
B.fTS=new A.r(16,16,16)
B.fTT=new A.r(16,3,11)
B.fTU=new A.r(16,80,60)
B.fTV=new A.r(16,9,2)
B.fTW=new A.r(17,1,0)
B.aUq=new A.r(17,3,17)
B.fTX=new A.r(27,1.4,27)
B.fTY=new A.r(18,18,14)
B.fTZ=new A.r(18,20,18)
B.fU_=new A.r(18,22,2)
B.fU0=new A.r(18,28,16)
B.fU1=new A.r(18,2,18)
B.fU2=new A.r(18,3,0)
B.fU3=new A.r(18,6,0)
B.fU4=new A.r(18,80,2)
B.fU5=new A.r(18,90,5)
B.fU6=new A.r(18,9,11)
B.fU7=new A.r(190,20,60)
B.fU8=new A.r(190,320,100)
B.fU9=new A.r(19,13,7)
B.fUa=new A.r(70,0.6,50)
B.fUb=new A.r(0,3,-6.5)
B.fUc=new A.r(-4,20.4,0)
B.fUd=new A.r(1,1,0.64)
B.fUe=new A.r(-4.6,1.5,-3.6)
B.fUf=new A.r(0,-13.5,-1.5)
B.fUg=new A.r(4,10,3.5)
B.aUr=new A.r(0.95,1.7,0.85)
B.hy=new A.r(1,0,0)
B.fUh=new A.r(1,16,36)
B.fUi=new A.r(1,18,18)
B.aUs=new A.r(1,22,11)
B.fUj=new A.r(1,26,14)
B.fUk=new A.r(1,28,14)
B.aUt=new A.r(1,2,1)
B.aUu=new A.r(1,3,1)
B.a9P=new A.r(1,3,6)
B.fUm=new A.r(1,0.9,0.06)
B.fUn=new A.r(1.2,44,34)
B.fUp=new A.r(200,0,500)
B.fUq=new A.r(200,0,900)
B.fUr=new A.r(200,140,200)
B.fUv=new A.r(1.6,15,1.6)
B.fUw=new A.r(20,12,14)
B.aUv=new A.r(20,14,7)
B.fUx=new A.r(20,2,2)
B.fUy=new A.r(20,2,8)
B.fUz=new A.r(20,30,26)
B.fUA=new A.r(20,3,14)
B.fUB=new A.r(20,4,26)
B.fUC=new A.r(20,92,26)
B.fUD=new A.r(216,8,216)
B.fUE=new A.r(22,12,34)
B.fUF=new A.r(22,14,0)
B.fUG=new A.r(22,14,2)
B.fUH=new A.r(22,14,3)
B.fUI=new A.r(22,16,3)
B.fUJ=new A.r(22,18,14)
B.fUK=new A.r(22,2,28)
B.fUL=new A.r(22,3,10)
B.fUM=new A.r(22,3,22)
B.fUN=new A.r(22,4,20)
B.fUO=new A.r(230,330,-210)
B.fUP=new A.r(230,-40,100)
B.fUQ=new A.r(240,150,60)
B.fUR=new A.r(244,6,64)
B.fUS=new A.r(140,15,3.6)
B.fUT=new A.r(24,12,34)
B.fUU=new A.r(24,14,22)
B.fUV=new A.r(24,38,0)
B.aUw=new A.r(24,6,14)
B.fUW=new A.r(250,92,6)
B.fUX=new A.r(260,300,-160)
B.fUY=new A.r(262,3,5)
B.fUZ=new A.r(262,3,56)
B.fV_=new A.r(26,14,26)
B.fV0=new A.r(26,2,26)
B.aUx=new A.r(26,4,22)
B.fV1=new A.r(26,72,26)
B.fV2=new A.r(26,8,18)
B.fV3=new A.r(26,-34,96)
B.fV5=new A.r(7.4,6,10.4)
B.fV6=new A.r(-0.1,0,0)
B.aUy=new A.r(2,100,90)
B.fV7=new A.r(2,10,2)
B.aUz=new A.r(2,12,60)
B.fV8=new A.r(2,13,2)
B.aUA=new A.r(2,23,12)
B.aUB=new A.r(2,28,22)
B.fV9=new A.r(2,5,1)
B.fVa=new A.r(2,700,900)
B.aUC=new A.r(2,8,2)
B.fVc=new A.r(64,10,-1.4)
B.aUD=new A.r(0,9.4,-1.5)
B.fVd=new A.r(47,48,3.5)
B.fVe=new A.r(19.6,0,-1.5)
B.aUE=new A.r(0,56,1.3)
B.fVf=new A.r(0,15.5,0)
B.fVg=new A.r(3000,0,3000)
B.fVh=new A.r(3000,0,-3000)
B.fVj=new A.r(300,6,3)
B.fVl=new A.r(30,16,30)
B.aUF=new A.r(30,16,72)
B.fVm=new A.r(30,22,0)
B.fVn=new A.r(30,24,8)
B.fVo=new A.r(30,28,18)
B.fVp=new A.r(30,29,0)
B.fVq=new A.r(30,34,40)
B.fVr=new A.r(30,40,100)
B.fVt=new A.r(30,6,12)
B.fVu=new A.r(324,114,6)
B.aUG=new A.r(324,6,10)
B.fVv=new A.r(32,2,20)
B.fVw=new A.r(33,11,10)
B.fVx=new A.r(34,10,1)
B.fVy=new A.r(34,22,3)
B.aUH=new A.r(34,25,18)
B.fVz=new A.r(34,30,1)
B.aUI=new A.r(34,39,18)
B.aUJ=new A.r(34,42,18)
B.fVA=new A.r(34,4,28)
B.aUL=new A.r(34,8,18)
B.fVB=new A.r(-1,-1.7,2.3)
B.fVC=new A.r(366,124,6)
B.aUM=new A.r(366,6,10)
B.fVD=new A.r(36,22,0)
B.fVE=new A.r(36,30,0)
B.fVF=new A.r(36,30,1)
B.fVG=new A.r(36,4,3)
B.fVH=new A.r(36,60,12)
B.fVI=new A.r(0,93,3.5)
B.fVJ=new A.r(37,16,0)
B.fVK=new A.r(37,50,38)
B.fVL=new A.r(38,10,24)
B.fVM=new A.r(38,20,3)
B.fVN=new A.r(38,2,6)
B.fVO=new A.r(-0.2,-0.3,-0.4)
B.fVP=new A.r(60,62,3.6)
B.fVQ=new A.r(0,9.5,-1.5)
B.fVR=new A.r(0,48.6,55)
B.aUN=new A.r(3,12,12)
B.aUO=new A.r(3,14,18)
B.fVS=new A.r(3,16,3)
B.fVU=new A.r(3,22,2)
B.fVV=new A.r(3,26,3)
B.a9Q=new A.r(3,3,3)
B.fVW=new A.r(3,42,70)
B.fVX=new A.r(3,46,90)
B.fVY=new A.r(3,5,3)
B.fW_=new A.r(40,12,2)
B.fW0=new A.r(40,16,18)
B.fW1=new A.r(40,1,14)
B.fW2=new A.r(40,28,1)
B.fW3=new A.r(40,2,104)
B.fW4=new A.r(40,2,24)
B.fW5=new A.r(40,30,26)
B.fW6=new A.r(40,60,40)
B.fW7=new A.r(40,80,3)
B.fW8=new A.r(40,8,104)
B.fW9=new A.r(42,2,28)
B.fWa=new A.r(44,10,2)
B.aUQ=new A.r(44,2,14)
B.fWb=new A.r(44,3,22)
B.fWc=new A.r(44,72,20)
B.fWd=new A.r(0.9,0,4.4)
B.fWe=new A.r(8.2,1.9,-7.55)
B.fWf=new A.r(46,10,34)
B.fWg=new A.r(46,3,10)
B.fWh=new A.r(46,3,3)
B.fWi=new A.r(48,2,24)
B.fWj=new A.r(120.6,140,-52)
B.fWk=new A.r(0,-47.25,-2.25)
B.fWl=new A.r(-147.6,54,45)
B.fWm=new A.r(0.6,68,0.4)
B.fWn=new A.r(64,49,8.4)
B.fWo=new A.r(1.5,28,120)
B.fWp=new A.r(0,1.59,0.14)
B.fWq=new A.r(4,108,0)
B.fWr=new A.r(4,80,104)
B.fWs=new A.r(4,96,0)
B.fWt=new A.r(0,-3.4,1)
B.fWu=new A.r(25,79,1.4)
B.fWv=new A.r(1,0,-1.2)
B.fWw=new A.r(0.6,4,2.4)
B.fWx=new A.r(50,12,32)
B.fWy=new A.r(50,1,2)
B.fWz=new A.r(50,28,42)
B.fWA=new A.r(50,4,28)
B.fWB=new A.r(51,7,33)
B.fWC=new A.r(52,10,22)
B.fWD=new A.r(52,56,1)
B.fWE=new A.r(54,5,18)
B.fWH=new A.r(56,18,18)
B.fWI=new A.r(56,2,36)
B.fWJ=new A.r(56,3,32)
B.fWK=new A.r(56,3,48)
B.fWL=new A.r(58,0,30)
B.fWM=new A.r(58,14,9)
B.fWN=new A.r(58,64,22)
B.fWO=new A.r(58,92,30)
B.fWP=new A.r(58,96,30)
B.fWQ=new A.r(58,9,74)
B.fWR=new A.r(0,-0.8,0.9)
B.fWS=new A.r(11.9,0,-8)
B.fWT=new A.r(20,7,34.4)
B.fWU=new A.r(-47,48,3.5)
B.aUR=new A.r(1.6,1.6,0.4)
B.fWW=new A.r(0.16,0.32,0.07)
B.fWX=new A.r(5,10,5)
B.aUS=new A.r(5,12,26)
B.fWY=new A.r(5,17,2)
B.fWZ=new A.r(5,1,2)
B.fX_=new A.r(5,34,24)
B.fX0=new A.r(5,5,5)
B.fX1=new A.r(5,6,10)
B.fX2=new A.r(5,6,3)
B.fX3=new A.r(5,9,8)
B.fX4=new A.r(-120.1,150,0)
B.fX5=new A.r(0,14.3,-1.5)
B.fX6=new A.r(0,0,3.2)
B.aUT=new A.r(-13,8.6,-9.5)
B.fX7=new A.r(60,12,56)
B.fX8=new A.r(60,12,80)
B.fX9=new A.r(60,16,28)
B.fXa=new A.r(60,30,3)
B.fXc=new A.r(620,300,270)
B.fXd=new A.r(62,11,0)
B.fXe=new A.r(62,18,20)
B.fXf=new A.r(62,22,6)
B.fXg=new A.r(62,5,0)
B.fXh=new A.r(632,10,282)
B.fXi=new A.r(640,8,290)
B.fXj=new A.r(64,10,0)
B.fXm=new A.r(14,9,0.5)
B.aUU=new A.r(6,14,20)
B.aUV=new A.r(6,14,32)
B.fXn=new A.r(6,28,6)
B.fXo=new A.r(6,4,4)
B.fXp=new A.r(6,6,6)
B.fXr=new A.r(-150.6,70,160)
B.fXs=new A.r(0,-0.2,0.14)
B.fXu=new A.r(120.6,140,-8)
B.fXv=new A.r(0.3,38,2)
B.fXx=new A.r(700,430,1150)
B.fXy=new A.r(70,175,-45)
B.fXz=new A.r(70,194,-45)
B.fXA=new A.r(70,6,36)
B.fXB=new A.r(720,100,105)
B.fXC=new A.r(720,360,320)
B.fXD=new A.r(72,32,3)
B.fXE=new A.r(72,-17,70)
B.fXF=new A.r(12,5,0.4)
B.fXG=new A.r(74,20,5)
B.fXH=new A.r(76,2,90)
B.fXI=new A.r(76,8,3)
B.fXJ=new A.r(34,30,0.6)
B.fXK=new A.r(1.6,1.7,3.6)
B.fXM=new A.r(-72.8,0,55)
B.fXN=new A.r(-146.4,15,84)
B.fXP=new A.r(25,79,0.2)
B.fXQ=new A.r(7,0,-8)
B.fXR=new A.r(7,18,10)
B.fXS=new A.r(7,27,10)
B.fXT=new A.r(7,2,7)
B.aUW=new A.r(7,3,0)
B.fXU=new A.r(7,6,3)
B.fXV=new A.r(7,8,3)
B.aUX=new A.r(7,96,7)
B.fXW=new A.r(2200,0.4,560)
B.fXY=new A.r(0,11,9.2)
B.fXZ=new A.r(-3.2,1.3,-7.82)
B.fY_=new A.r(20,0.8,12)
B.fY0=new A.r(80,16,32)
B.fY1=new A.r(80,26,8)
B.fY2=new A.r(80,38,26)
B.fY4=new A.r(80,4,14)
B.fY5=new A.r(80,6,32)
B.aUY=new A.r(147,1.5,3.5)
B.fY6=new A.r(82,46,3)
B.aUZ=new A.r(-6.5,6.9,-3)
B.fY7=new A.r(84,10,38)
B.fY8=new A.r(84,18,38)
B.fY9=new A.r(84,84,120)
B.fYa=new A.r(84,8,36)
B.fYb=new A.r(0.93,0.92,1)
B.fYc=new A.r(4.6,4.2,9.5)
B.fYd=new A.r(88,24,28)
B.fYe=new A.r(88,84,3)
B.fYf=new A.r(0.4,6,8)
B.fYg=new A.r(0,-48.6,55)
B.fYh=new A.r(2.6,2,2.6)
B.fYi=new A.r(5.5,8.5,3)
B.fYj=new A.r(0,0,0.26)
B.fYk=new A.r(120.6,96,-52)
B.fYl=new A.r(8,18,8)
B.aV_=new A.r(8,2,16)
B.fYm=new A.r(8,2,6)
B.aV0=new A.r(8,2,8)
B.fYn=new A.r(8,6,6)
B.fYo=new A.r(8,8,12)
B.fYp=new A.r(8,9,8)
B.fYq=new A.r(8,9,9)
B.fYr=new A.r(-140,62,3.6)
B.fYt=new A.r(15,19,0.5)
B.fYu=new A.r(900,2,700)
B.fYw=new A.r(92,2,32)
B.fYx=new A.r(95,26,1)
B.fYy=new A.r(95,50,6)
B.fYz=new A.r(96,14,38)
B.fYA=new A.r(0.4,0.38,0.12)
B.fYB=new A.r(0,0,-0.43)
B.aV1=new A.r(11.2,4.5,-6)
B.aV2=new A.r(1.2,96,112)
B.aV3=new A.r(0.08,3.8,2.4)
B.aV4=new A.r(9,1,9)
B.fYC=new A.r(9,40,4)
B.fYD=new A.r(9,5,9)
B.fYE=new A.r(0,70,-0.6)
B.fYF=new A.r(-34.6,86,69)
B.fYG=new A.r(-3.5,26,15)
B.fYH=new A.r(34,6,0.6)
B.fYI=new A.r(1.5,1.3,0.6)
B.fYJ=new A.r(-120.6,96,-8)
B.fYL=new A.r(0,-1.78,0.27)
B.aV5=new A.r(1.2,9,1.2)
B.fYM=new A.r(0,0.62,0)
B.fYN=new A.r(5.5,1.4,12)
B.fYO=new A.r(-50,0.6,50)
B.fYR=new A.r(20,11.5,0)
B.fYS=new A.r(20,66,1.4)
B.fYT=new A.r(3.2,0.12,-6.7)
B.fYU=new A.r(12,0,-8.1)
B.fYW=new A.r(-34.6,86,7)
B.aV6=new A.r(0,0,3.4)
B.fYX=new A.r(1.25,0.28,0.1)
B.fYY=new A.r(100,38,0.7)
B.fYZ=new A.r(0,36,10.2)
B.fZ_=new A.r(24,0.08,16)
B.fZ0=new A.r(34,1.4,1.4)
B.fZ2=new A.r(0,4,-7.9)
B.fZ3=new A.r(11.9,0,8)
B.fZ4=new A.r(0,41.5,-4.9)
B.fZ5=new A.r(-26,146,0.6)
B.aV7=new A.r(0.8,1.7,0.78)
B.fZ7=new A.r(21,1.4,8)
B.fZ8=new A.r(0.8,0.8,1.6)
B.fZ9=new A.r(1.4,1,1)
B.fZa=new A.r(30,36,0.8)
B.fZc=new A.r(71.2,46.6,55)
B.fZd=new A.r(3,3.28,-7.2)
B.fZe=new A.r(1.4,0.3,1)
B.fZf=new A.r(0,42,1.5)
B.fZg=new A.r(-6.1,1.2,-6.4)
B.fZh=new A.r(1.4,26,0.4)
B.fZi=new A.r(76,0.6,4)
B.fZk=new A.r(26,0.3,130)
B.fZl=new A.r(0,-45.5,0.5)
B.fZm=new A.r(1.8,4,1)
B.fZn=new A.r(5,1.6,0.5)
B.fZp=new A.r(18,10,0.6)
B.fZq=new A.r(0,11,8.5)
B.fZr=new A.r(0.1,-2,2.4)
B.fZs=new A.r(302.4,1.2,322)
B.fZt=new A.r(-1,33.4,-4.9)
B.fZu=new A.r(0,0.2,2.8)
B.fZv=new A.r(6,10,1.4)
B.fZx=new A.r(24,32,0.8)
B.fZy=new A.r(0,10,5.2)
B.fZz=new A.r(0,-1.2,4.7)
B.fZA=new A.r(18.9,2.6,0)
B.fZB=new A.r(-2200,0.4,720)
B.fZC=new A.r(66,89,3.8)
B.fZD=new A.r(-12,0,-8.1)
B.fZE=new A.r(3,11,0.5)
B.fZF=new A.r(0,70,320.6)
B.fZG=new A.r(11.8,4,0)
B.fZH=new A.r(0.97,0.18,2.25)
B.fZI=new A.r(58,96,31.7)
B.fZJ=new A.r(14,20,1.2)
B.aV8=new A.r(-71.7,6,55)
B.fZL=new A.r(64,57,8.4)
B.fZM=new A.r(5.6,0.3,1.9)
B.fZP=new A.r(52,8,0.4)
B.fZQ=new A.r(0,14,51.2)
B.fZR=new A.r(4.6,7.6,3)
B.fZS=new A.r(-1,0,-1.2)
B.fZT=new A.r(0,1.7,0)
B.fZV=new A.r(-1,0,1.5)
B.fZW=new A.r(27,19,0.4)
B.fZX=new A.r(90,2,0.5)
B.fZY=new A.r(-17,98,77.2)
B.fZZ=new A.r(5,8,0.4)
B.h__=new A.r(0,98,6.6)
B.h_0=new A.r(5,14,8.5)
B.h_1=new A.r(5,2.2,0.8)
B.h_2=new A.r(-120.6,140,-52)
B.h_3=new A.r(-2200,0.4,560)
B.h_4=new A.r(0.18,0.12,0.08)
B.h_5=new A.r(50,0.6,50)
B.h_6=new A.r(147,3,1.4)
B.h_7=new A.r(20,0.6,50)
B.h_8=new A.r(0,6.6,0)
B.h_9=new A.r(4,16.2,0)
B.h_a=new A.r(60,0.4,12)
B.h_b=new A.r(10,15,0.5)
B.h_c=new A.r(144,5,0.7)
B.h_d=new A.r(1.2,-1.7,2.3)
B.h_e=new A.r(31.5,23,0)
B.h_f=new A.r(0,0.9,0)
B.h_g=new A.r(2.4,2.4,70)
B.h_h=new A.r(-120.6,140,-8)
B.h_j=new A.r(-146.4,15,172)
B.h_k=new A.r(0.82,1.7,0.3)
B.h_l=new A.r(47,7,34.4)
B.h_m=new A.r(-0.12,0,0)
B.h_o=new A.r(3.5,94,0.2)
B.h_p=new A.r(1.1,2.05,0.04)
B.h_q=new A.r(25,79,1.2)
B.h_r=new A.r(1.12,0.78,0.76)
B.h_s=new A.r(1.2,3.6,18)
B.h_t=new A.r(10,14,0.5)
B.h_u=new A.r(0,138.8,95)
B.h_v=new A.r(0,35.5,-4.9)
B.h_w=new A.r(5,8,0.5)
B.h_x=new A.r(1.1,0.5,0.7)
B.h_y=new A.r(-20,11.5,0)
B.h_z=new A.r(0,1.1,0)
B.h_A=new A.r(0,-0.5,0.6)
B.h_B=new A.r(32,6,0.5)
B.h_C=new A.r(0,9.8,-1.5)
B.h_D=new A.r(0,1.4,0)
B.h_F=new A.r(1,3,0.8)
B.h_G=new A.r(0,3.4,0.8)
B.h_I=new A.r(0.1,0.1,0.1)
B.h_J=new A.r(0,-0.6,38)
B.h_K=new A.r(-0.85,4,-3.2)
B.h_M=new A.r(-7.1,19,4)
B.h_N=new A.r(0,58,-14.2)
B.h_O=new A.r(40,7.2,1.2)
B.aV9=new A.r(0.42,0.34,0.12)
B.h_P=new A.r(1.7,0.08,1.2)
B.h_Q=new A.r(0,0,0.38)
B.h_S=new A.r(5.2,3.9,-7.76)
B.h_U=new A.r(146.2,52,120)
B.h_V=new A.r(30,22,0.8)
B.h_W=new A.r(2.6,0.45,0.5)
B.h_X=new A.r(0.07,0.3,0.03)
B.h_Z=new A.r(41.5,11,12)
B.h0_=new A.r(36.2,60,38)
B.h01=new A.r(20,1.4,8)
B.h02=new A.r(75.4,24,0)
B.h03=new A.r(0,-0.2,0.19)
B.h04=new A.r(-20,0.6,-50)
B.h06=new A.r(1.2,49,36)
B.h07=new A.r(0,9.3,0)
B.h09=new A.r(9,12,0.6)
B.h0a=new A.r(0,-0.6,160)
B.aVa=new A.r(1.4,3,1.6)
B.h0b=new A.r(0,40,0.95)
B.h0c=new A.r(11,3,0.5)
B.h0d=new A.r(34.6,34,7)
B.h0e=new A.r(190,0.6,90)
B.h0g=new A.r(0,-1.9,-1.2)
B.h0h=new A.r(-3.2,1.15,-7.78)
B.h0i=new A.r(0,-3.4,1.2)
B.h0j=new A.r(64,10,0.2)
B.h0k=new A.r(0,-1.78,0.53)
B.h0l=new A.r(0.8,2.6,0.3)
B.aVb=new A.r(-6.5,7.4,-3)
B.h0m=new A.r(0,76,1.1)
B.h0n=new A.r(-4.6,-2,1.2)
B.h0p=new A.r(0,40,1.4)
B.aVd=new A.r(0.6,32,34)
B.h0q=new A.r(-3,36,10.6)
B.h0r=new A.r(0,14.5,-1.5)
B.h0t=new A.r(0,0.2,0)
B.h0v=new A.r(2.5,30,2.5)
B.h0w=new A.r(160,1.2,120)
B.h0x=new A.r(7,40,2.4)
B.h0y=new A.r(30,26,0.6)
B.h0z=new A.r(3.4,3.25,-7.85)
B.h0A=new A.r(1.12,0.5,0.62)
B.h0B=new A.r(72.8,0,55)
B.h0C=new A.r(0.5,62,30)
B.h0D=new A.r(0,76,37.8)
B.h0E=new A.r(146.4,62,120)
B.h0F=new A.r(34.6,86,7)
B.h0G=new A.r(2.2,1.1,6.4)
B.h0H=new A.r(17,98,77.2)
B.h0I=new A.r(3,1.55,-7.1)
B.h0J=new A.r(0.4,3,3)
B.aVf=new A.r(0,-0.1,0.1)
B.h0K=new A.r(-52,96,-60.6)
B.h0L=new A.r(0,0,0.04)
B.h0N=new A.r(0,14,-19.3)
B.h0O=new A.r(2.4,11.6,-3.6)
B.h0P=new A.r(4,11,3.5)
B.h0R=new A.r(5,8.6,-2.25)
B.h0S=new A.r(0,-1.78,0.3)
B.h0T=new A.r(2.2,2.2,1.8)
B.h0U=new A.r(0,1.9,-1.2)
B.h0V=new A.r(0,56,2.1)
B.h0W=new A.r(0.26,0.04,0.02)
B.h0X=new A.r(-2.4,11.6,-3.6)
B.h0Y=new A.r(11.25,0,-2.25)
B.h0Z=new A.r(1,-1.8,2.4)
B.h1_=new A.r(-26,43,3.8)
B.h10=new A.r(-60,15,3.6)
B.h11=new A.r(20,0.6,-50)
B.h12=new A.r(-11.8,4,0)
B.h13=new A.r(1.2,4,7)
B.h14=new A.r(11.2,4.7,-6)
B.h15=new A.r(66,43,3.8)
B.aVg=new A.r(0,2.8,0)
B.h16=new A.r(24,8,0.05)
B.aVh=new A.r(86,52,1.4)
B.h18=new A.r(0.12,0,0)
B.h19=new A.r(1.1,1.1,0.03)
B.h1a=new A.r(-50,0.6,-50)
B.h1b=new A.r(-26,94,0.6)
B.h1c=new A.r(0,32,320.9)
B.h1d=new A.r(0,5,1.1)
B.h1e=new A.r(4.6,5.4,3.2)
B.h1f=new A.r(3.4,3.55,-7.85)
B.h1h=new A.r(71.6,-22,62)
B.h1i=new A.r(0,3,1.2)
B.h1j=new A.r(22,18,0.4)
B.h1k=new A.r(-20,0.6,50)
B.h1m=new A.r(1,1,0.62)
B.aVi=new A.r(1.5,18,3.5)
B.h1o=new A.r(3.5,3.1,-7.15)
B.h1p=new A.r(0,1.5,-0.9)
B.h1q=new A.r(-0.28,0.55,-0.8)
B.h1r=new A.r(0,-0.2,0.24000000000000002)
B.h1t=new A.r(0,-3.3,4)
B.h1u=new A.r(46,0.8,46)
B.h1v=new A.r(1,-0.2,0.14)
B.h1w=new A.r(0,137,1.6)
B.aVj=new A.r(84,3,0.5)
B.h1x=new A.r(-1.9,0,-2.25)
B.h1y=new A.r(0,-0.9,1.1)
B.h1z=new A.r(8.2,1.05,-6.7)
B.h1A=new A.r(0,9.6,11.6)
B.h1C=new A.r(34.6,34,69)
B.h1E=new A.r(-149.3,38,128)
B.h1F=new A.r(0.07,0.4,0.03)
B.h1G=new A.r(2,3.8,0.08)
B.h1H=new A.r(31,83,0.9)
B.h1I=new A.r(64,40,-3.2)
B.h1J=new A.r(0.95,0.62,2.2)
B.aVk=new A.r(1.4,3,112)
B.h1K=new A.r(1,33.4,-4.9)
B.h1L=new A.r(0,0.3,314)
B.aVl=new A.r(302.4,140,1.2)
B.h1M=new A.r(0,46.6,0.8)
B.h1O=new A.r(6.5,6.4,13)
B.h1P=new A.r(0,0,-8.8)
B.h1Q=new A.r(0,0.7,-1)
B.h1T=new A.r(-11.9,0,8)
B.h1U=new A.r(7,0,1.5)
B.h1V=new A.r(-8.4,0.7,-6.4)
B.h1W=new A.r(-3.2,1.45,-7.78)
B.h1X=new A.r(34,25,21.6)
B.h1Y=new A.r(0,41,0.45)
B.h1Z=new A.r(-6.575,0,-0.25)
B.aVn=new A.r(0,0,-2.3)
B.a9S=new A.r(-13,12.5,0)
B.h21=new A.r(0,0,0.62)
B.h22=new A.r(-60,62,3.6)
B.h23=new A.r(0.2,-0.3,-0.4)
B.aVo=new A.r(10.85,18,0.5)
B.h24=new A.r(120.1,174,-30)
B.h25=new A.r(0.6,70,0.6)
B.h26=new A.r(1.4,1.3,0.02)
B.h27=new A.r(30,1.4,0.4)
B.h28=new A.r(6.3,1.5,-7.2)
B.h29=new A.r(8,14,1.2)
B.h2a=new A.r(-120.1,150,-60)
B.h2b=new A.r(0,5,11.2)
B.aVp=new A.r(0,0.62,2.85)
B.h2c=new A.r(37.5,23,0)
B.aVq=new A.r(0.05,8,16)
B.h2d=new A.r(0,-1.2,5)
B.h2e=new A.r(0.2,-2,2.6)
B.h2h=new A.r(11.2,2.4,-5.18)
B.h2j=new A.r(-1,-0.2,0.14)
B.h2k=new A.r(-17,83,77.2)
B.h2l=new A.r(0.5,8,6)
B.h2m=new A.r(1.2,1.2,0.3)
B.aVs=new A.r(2,0.08,2.4)
B.h2o=new A.r(9.5,13.5,1.4)
B.h2p=new A.r(2.2,18,2.2)
B.h2q=new A.r(22,0.2,0.8)
B.h2r=new A.r(-0.32,0,0.5)
B.aVt=new A.r(1.3,4,0.8)
B.h2t=new A.r(-26,89,3.8)
B.h2u=new A.r(-120.1,174,-30)
B.h2v=new A.r(1,0.8,0.95)
B.h2w=new A.r(0.8,0.55,0.05)
B.h2x=new A.r(0.14,0.35,17)
B.h2y=new A.r(1.4,2.4,0.3)
B.h2z=new A.r(0,11,8.2)
B.h2A=new A.r(52,96,-60.6)
B.h2B=new A.r(26,146,0.6)
B.h2C=new A.r(3.2,5,0.8)
B.h2D=new A.r(0,24,-0.6)
B.h2E=new A.r(40,1.6,14)
B.h2H=new A.r(150,0.6,90)
B.h2I=new A.r(0,11.5,19.3)
B.h2J=new A.r(0,1.95,0.31)
B.h2K=new A.r(150,1.2,112)
B.aVu=new A.r(0.75,4.5,0.1)
B.h2M=new A.r(0.12,0,0.05)
B.h2O=new A.r(-34.6,34,69)
B.h2P=new A.r(-11.5,4,-1.5)
B.h2Q=new A.r(9,1.2,9)
B.h2R=new A.r(120.1,150,-60)
B.h2S=new A.r(0,-0.5,0)
B.h2V=new A.r(0,37.5,-4.9)
B.h2W=new A.r(-2.4,14,8)
B.h2X=new A.r(-190,160,-14.2)
B.h2Y=new A.r(0,0,3.6)
B.h2Z=new A.r(3,14,1.5)
B.h3_=new A.r(5.5,8.5,0.5)
B.aVv=new A.r(0.05,8,9.6)
B.h31=new A.r(1.5,94,3.5)
B.h32=new A.r(0,8.2,0)
B.h33=new A.r(-120.6,96,-52)
B.h35=new A.r(4,94,0.4)
B.aVw=new A.r(1.4,8,1)
B.h36=new A.r(120.6,96,-8)
B.h37=new A.r(114,30,0.4)
B.h38=new A.r(3.7,1.2,-7.1)
B.h39=new A.r(1.5,1.35,1.5)
B.h3a=new A.r(8.2,0.05,-6.7)
B.h3b=new A.r(0,-0.3,0)
B.h3c=new A.r(6.575,0,-0.25)
B.aVx=new A.r(150.6,70,160)
B.h3d=new A.r(52,140,-60.6)
B.aVy=new A.r(0,1.8,0)
B.h3e=new A.r(3,3.21,-7.2)
B.h3f=new A.r(100,14,0.6)
B.h3g=new A.r(9,5,0.6)
B.h3i=new A.r(26,94,0.6)
B.h3j=new A.r(9.8,5,-7.75)
B.aVz=new A.r(0,2.4,0)
B.h3k=new A.r(1.5,3.5,112)
B.h3l=new A.r(-8,31.5,6)
B.h3n=new A.r(22,7,34.4)
B.h3o=new A.r(0,9.6,-1.5)
B.h3p=new A.r(3,1.85,-7.1)
B.h3r=new A.r(40,1.4,60)
B.h3u=new A.r(16,0.4,16)
B.a9U=new A.r(13,12.5,0)
B.h3w=new A.r(0.34,0.66,0.9)
B.h3y=new A.r(0.9,1.08,0.98)
B.h3z=new A.r(12,0.4,6)
B.h3A=new A.r(-6.5,7.9,-3)
B.h3B=new A.r(1.5,1.5,0.05)
B.h3C=new A.r(-6.5,5,-3)
B.h3D=new A.r(58.4,1.6,50)
B.h3E=new A.r(16,22,0.6)
B.h3F=new A.r(0.02,0.28,0.05)
B.h3H=new A.r(0,0.7,1)
B.h3I=new A.r(26,22,1.4)
B.h3J=new A.r(0,9.5,-7)
B.aVB=new A.r(13,8.6,9.5)
B.h3K=new A.r(-140,15,3.6)
B.h3L=new A.r(5,5,0.8)
B.h3M=new A.r(-3.6,4,-7.76)
B.h3N=new A.r(0.82,0.9,0.05)
B.h3O=new A.r(0,-5.5,-0.25)
B.h3P=new A.r(0,11,21.2)
B.h3R=new A.r(34.6,86,69)
B.h3S=new A.r(64,50,6.6)
B.h3T=new A.r(-34,40,36.4)
B.h3U=new A.r(2.2,1.8,2)
B.h3W=new A.r(190,160,-14.2)
B.h3Y=new A.r(0,0.6,0)
B.h40=new A.r(1.9,0,0)
B.h41=new A.r(0.45,0.72,0.06)
B.h42=new A.r(95,26,1.8)
B.h44=new A.r(14,0.4,7)
B.h45=new A.r(64,24,-3.2)
B.a9V=new A.r(1.2,140,320)
B.h46=new A.r(1,4.5,0.8)
B.h47=new A.r(0,9.2,0)
B.h48=new A.r(120.1,150,0)
B.h49=new A.r(0,0.03,0)
B.h4a=new A.r(-100,100,320)
B.h4c=new A.r(-100,400,350)
B.h4d=new A.r(-10,22,0)
B.h4g=new A.r(-110,96,120)
B.h4h=new A.r(-112,38,24)
B.h4i=new A.r(-120,0,-30)
B.h4j=new A.r(-120,300,-320)
B.h4k=new A.r(-125,16,30)
B.h4l=new A.r(-13,15,2)
B.h4m=new A.r(-144,82,45)
B.h4n=new A.r(-147,54,45)
B.h4o=new A.r(-148,56,120)
B.h4p=new A.r(-14,17,4)
B.h4q=new A.r(-14,20,-28)
B.h4r=new A.r(-18,6,0)
B.qG=new A.r(-1,0,0)
B.h4s=new A.r(-1,0,-8)
B.h4t=new A.r(-200,0,500)
B.h4u=new A.r(-200,0,900)
B.h4v=new A.r(-200,100,480)
B.h4x=new A.r(-20,4,26)
B.h4y=new A.r(-20,92,26)
B.h4z=new A.r(-22,14,0)
B.h4A=new A.r(-24,38,0)
B.h4B=new A.r(-260,330,-80)
B.h4C=new A.r(-3000,0,3000)
B.h4D=new A.r(-3000,0,-3000)
B.h4G=new A.r(-30,36,38)
B.h4H=new A.r(-30,40,100)
B.h4I=new A.r(-30,44,33)
B.h4K=new A.r(-330,40,760)
B.h4L=new A.r(-34,34,38)
B.h4M=new A.r(-34,40,38)
B.h4N=new A.r(-37,16,0)
B.h4O=new A.r(-37,50,38)
B.h4P=new A.r(-380,470,1300)
B.h4Q=new A.r(-390,144,-120)
B.h4R=new A.r(-390,70,-120)
B.h4S=new A.r(-40,12,150)
B.h4T=new A.r(-40,30,164)
B.h4V=new A.r(-42,-34,96)
B.h4W=new A.r(0,-0.6,22)
B.h4X=new A.r(-4,20,0)
B.h4Y=new A.r(-4,22,150)
B.aVC=new A.r(-4,22,8)
B.h50=new A.r(-5,17,0)
B.h51=new A.r(0,36.5,0)
B.h52=new A.r(-60,28,56)
B.h55=new A.r(-60,50,1)
B.h56=new A.r(-60,70,6)
B.h57=new A.r(-700,430,1150)
B.h59=new A.r(-70,0,34)
B.h5a=new A.r(-70,95,34)
B.h5b=new A.r(-70,96,34)
B.h5c=new A.r(-720,360,320)
B.h5d=new A.r(-72,6,55)
B.h5e=new A.r(-80,12,30)
B.h5f=new A.r(-80,25,30)
B.h5j=new A.r(-8,24,0)
B.h5k=new A.r(-8,25,0)
B.h5l=new A.r(-8,42,-5)
B.h5m=new A.r(-8,-28,104)
B.h5n=new A.r(-8,-39,96)
B.h5p=new A.r(0,0.35,0.78)
B.h5q=new A.r(0.6,6,14)
B.h5r=new A.r(-11.9,0,-8)
B.h5s=new A.r(32,3,0.5)
B.h5t=new A.r(38,1.4,12)
B.h5u=new A.r(25,0.5,66)
B.h5v=new A.r(-8.4,1.9,-7.2)
B.h5w=new A.r(1.6,8,5)
B.h5x=new A.r(0.8,1.6,1.4)
B.h5y=new A.r(0.85,1.15,0.9)
B.h5A=new A.r(25,6,0.2)
B.aVD=new A.r(1.25,1,0.1)
B.h5B=new A.r(11.2,0,-6)
B.h5C=new A.r(-146.4,62,172)
B.h5D=new A.r(0.4,7,9)
B.h5E=new A.r(1.2,1.1,0.8)
B.h5G=new A.r(150,49,1.2)
B.h5H=new A.r(41.5,11,-12)
B.h5I=new A.r(62,0.2,42)
B.h5J=new A.r(4.6,1.5,-3.6)
B.h5K=new A.r(0,-0.7,0.8)
B.h5L=new A.r(0.6,9,9)
B.h5M=new A.r(8.9,1.9,0.9)
B.h5N=new A.r(42,84,1.2)
B.h5O=new A.r(-34.6,34,7)
B.h5P=new A.r(60,15,3.6)
B.aVE=new A.r(1.6,58,66)
B.h5Q=new A.r(0,-1.55,-0.6)
B.h5R=new A.r(36.2,32.2,0.6)
B.h5S=new A.r(1.78,4.25,0.08)
B.h5T=new A.r(27,0.6,19)
B.h5U=new A.r(1.4,52,96)
B.h5V=new A.r(0,5.5,-0.25)
B.h5W=new A.r(28,2.5,26)
B.h5X=new A.r(0,0.7,0)
B.h5Y=new A.r(-1.2,-1.6,2.2)
B.h5Z=new A.r(11,25,0.3)
B.h6_=new A.r(17,83,77.2)
B.aVF=new A.r(-12,14,19.4)
B.aVG=new A.r(13,8.6,-9.5)
B.aVH=new A.r(0.05,0.12,0.03)
B.aVI=new A.r(8.2,0.95,-6.7)
B.h60=new A.r(40,1.2,22)
B.h61=new A.r(0.7,1.5,-7.2)
B.h62=new A.r(0,15.3,-3.6)
B.h63=new A.r(62,2.4,8)
B.h64=new A.r(-1.6,11,6)
B.h65=new A.r(0.1,0,0)
B.h66=new A.r(0.32,0,0.5)
B.h67=new A.r(2200,0.4,720)
B.h68=new A.r(1.6,11,6)
B.h69=new A.r(-10,0.5,150)
B.h6a=new A.r(1.1,0.8,0.6)
B.h6c=new A.r(-60,50,1.8)
B.h6d=new A.r(-0.9,0,4.4)
B.h6e=new A.r(-6.5,7.2,-3)
B.h6g=new A.r(300,6,1.6)
B.h6h=new A.r(6.2,0.18,2.1)
B.h6i=new A.r(76,64,0.6)
B.h6j=new A.r(7.1,18,-3)
B.h6l=new A.r(74,1.2,90)
B.h6m=new A.r(36,1.6,12)
B.h6n=new A.r(15.5,2.6,0)
B.h6p=new A.r(-8,-47.8,70)
B.h6q=new A.r(14,1.5,3.5)
B.aVJ=new A.r(17,24,0.3)
B.h6r=new A.r(5.2,3.9,-7.82)
B.h6s=new A.r(0,0.7,2.4)
B.h6t=new A.r(0,0.3,0)
B.aVK=new A.r(2.3,7,0.5)
B.h6v=new A.r(0,66,1.8)
B.aVL=new A.r(-13,8.6,9.5)
B.h6y=new A.r(0.6,28,52)
B.h6z=new A.r(6.5,6,14)
B.h6A=new A.r(0,-1.99,0.14)
B.h6B=new A.r(0.4,36,34)
B.h6D=new A.r(4.6,-2,1.2)
B.h6E=new A.r(11.5,4,-1.5)
B.h6F=new A.r(0,14,19.3)
B.aVM=new A.r(0,0,-2.4)
B.h6G=new A.r(-36.2,60,38)
B.h6H=new A.r(110,18,0.6)
B.h6I=new A.r(0,-1.78,0.52)
B.h6J=new A.r(0.12,0.1,0.03)
B.h6K=new A.r(9.8,5,-7.58)
B.h6L=new A.r(14,1.5,5)
B.aVN=new A.r(0.5,1.4,2)
B.h6M=new A.r(3.5,0.15,-7.2)
B.aVO=new A.r(64,2,1.2)
B.h6N=new A.r(1.2,26.4,20)
B.h6O=new A.r(-3.6,4,-7.82)
B.h6P=new A.r(-3,37,-4.9)
B.h6Q=new A.r(0.3,2,36)
B.h6T=new A.r(24,0.8,6.5)
B.h6U=new A.r(-28,76,38.3)
B.h6W=new A.r(22,0.5,5)
B.h6X=new A.r(9,10,0.6)
B.h6Y=new A.r(0,22,2.1)
B.h70=new A.r(0,56,0.5)
B.h71=new A.r(150,1.2,70)
B.h72=new A.r(58,104,31.7)
B.h73=new A.r(100,52,2.4)
B.h74=new A.r(2.1,0.4,0.5)
B.h75=new A.r(0,14.7,-1.5)
B.aVP=new A.r(0.4,29,31)
B.h76=new A.r(-19.5,-1,-1.5)
B.h77=new A.r(80,0.5,60)
B.h78=new A.r(6.85,4,-3.2)
B.h79=new A.r(52,58,0.6)
B.h7a=new A.r(0,14.4,0)
B.aVR=new A.r(0.12,3,1.9)
B.h7b=new A.r(0.06,0.62,0.8)
B.h7c=new A.r(0,18.5,0)
B.h7d=new A.r(50,0.6,-50)
B.h7f=new A.r(9.55,5.7,-7.5)
B.h7h=new A.r(-400,80,-19.2)
B.h7i=new A.r(0.8,2.4,0.3)
B.aVS=new A.r(0,0.7,2)
B.h7j=new A.r(3.5,26,15)
B.aVT=new A.r(0,24,40.2)
B.h7k=new A.r(0.8,1.1,1.2)
B.h7l=new A.r(0,51.5,20)
B.h7m=new A.r(-20,0.5,145)
B.h7n=new A.r(2.4,14,8)
B.h7o=new A.r(0,47.25,-2.25)
B.h7p=new A.r(-8,31.5,-6)
B.h7q=new A.r(0.5,0.5,0.04)
B.h7r=new A.r(12.5,39,0.6)
B.h7s=new A.r(140,62,3.6)
B.h7t=new A.r(0,3,0.9)
B.h7u=new A.r(9,0.7,15)
B.h7v=new A.r(3,36,10.6)
B.h7w=new A.r(25,10,0.2)
B.h7y=new A.r(0.14,8,0.3)
B.h7z=new A.r(1.9,0.05,1.35)
B.h7C=new A.r(0.6,0.12,0.03)
B.h7D=new A.r(-10.7,1.2,-6.4)
B.h7E=new A.r(-52,140,-60.6)
B.h7F=new A.r(-71.2,46.6,55)
B.h7G=new A.r(5,4.5,3)
B.h7H=new A.r(120,36,1.4)
B.h7I=new A.r(0,3.7,2.6)
B.UZ=new A.FI(0,"hot")
B.V_=new A.FI(1,"neutral")
B.V0=new A.FI(2,"ground")
B.aW6=new A.FI(3,"unknown")
B.eHQ=new C.z(-20,46)
B.hbk=new A.Au(B.eHQ,0,2.4,"Having the drink",!0,!1,!1,"")
B.eqK=new C.z(34,62)
B.hbl=new A.Au(B.eqK,3.141592653589793,2.2,"Picking up the remote",!1,!0,!1,"")
B.hbt=new A.aB4(null)
B.hm8=new A.eUJ(0,"material")})();(function staticFields(){$.dQ=0
$.aj1=!1
$.aj2=!0
$.h7H=!1
$.fVV=C.T(x.N,C.aw("Mq"))
$.fVU=C.T(x.N,C.aw("aA<Mq?>"))
$.i16=C.T(x.N,C.aw("ai<+(r,r)>"))
$.i14=C.T(x.N,x.dg)
$.hns=C.T(x.N,C.aw("kz"))
$.ajC=null
$.E0=null
$.VW=null
$.hdR=null
$.ahn="xbot"})();(function lazyInitializers(){var w=a.lazyFinal
w($,"ill","hvu",()=>C.fVE())
w($,"igf","ht_",()=>new A.aSH($.ax()))
w($,"inT","bEh",()=>{var v,u,t=C.aw("O<aSG>"),s=C.a([],t)
for(v=0;v<2;++v){u=v*9
D.d.v(s,C.a([A.fV5(v,175,u),A.fV5(v,612,u+14),A.fV5(v,1013,u+7)],t))}return s})
w($,"inv","fUf",()=>C.a([A.hiT(-80,80,400,565),A.hiT(-80,80,715,885)],C.aw("O<bvZ>")))
w($,"igg","aQJ",()=>A.hyQ())
w($,"inS","hwT",()=>{var v=C.a([A.vH("Wire a standard 120 volt receptacle: black to brass, white to silver, bare copper to green.",B.R8,B.dm_,"outlet","",!0,B.I_,B.cUB,!1,"Wall outlet",new A.fwC()),A.vH("A single-pole switch breaks the hot wire to the light: two black wires go on the two brass screws.",B.d89,B.d9z,"switch","",!0,B.I_,B.cT3,!1,"Light switch",new A.fwD()),A.vH("A GFCI protects you near water. Power comes in on LINE. The LOAD screws (covered with tape) feed other outlets.",B.R8,B.dcp,"gfci","",!0,B.I_,B.daZ,!1,"GFCI outlet",new A.fwE()),A.vH("Join the house wires to the fixture wires with wire nuts: black to black, white to white, ground to ground.",B.R8,B.d3m,"light","",!0,B.I_,B.dnF,!1,"Ceiling light",new A.fwF()),A.vH("A fan hangs from a strong fan-rated box. Join black, white and ground with wire nuts, then fasten the canopy.",B.R8,B.dan,"fan","",!0,B.I_,B.d_q,!1,"Ceiling fan",new A.fwG())],C.aw("O<SP>"))
D.d.v(v,$.fUl())
return v})
w($,"inU","fUl",()=>{var v="switch",u="outlet"
return C.a([A.vH("Breaks BOTH hot legs of a 240 volt circuit at once: water heaters and baseboard heat.",B.dqv,B.c31,"switch2p",v,!0,B.dsZ,B.d3z,!0,"Double-pole switch (240 V)",new A.fwH()),A.vH("One light, two switches. One COMMON screw and two TRAVELER screws; it pairs with a second three-way.",B.djZ,B.cUk,"switch3",v,!0,B.dtg,B.db1,!0,"Three-way switch",new A.fwI()),A.vH("Sits in the middle of two three-way switches: two traveler wires in on one side, two out on the other.",B.doY,B.ddQ,"switch4",v,!0,B.dt_,B.diQ,!0,"Four-way switch",new A.fwJ()),A.vH("Needs a NEUTRAL wire in the box as well: hot in, hot out to the light, neutral and ground.",B.cZe,B.d1_,"switchsmart",v,!0,B.dth,B.cZv,!0,"Smart, motion or timer switch",new A.fwK()),A.vH("Two switches in one device: one hot feed is split between them, and two separate lights come out.",B.cHn,B.dhb,"switchcombo",v,!0,B.duY,B.cuy,!0,"Combination (double) switch",new A.fwL()),A.vH("The tab between the brass screws is broken off: the top half is switched, the bottom half is always on.",B.daW,B.ctY,"split",u,!0,B.dti,B.dg8,!0,"Split (half-switched) outlet",new A.fwM()),A.vH("Two hots, a neutral and a ground: the dryer 14-30, and the range and car charger 14-50.",B.dmE,B.cXZ,"v240four",u,!0,B.dtf,B.cLL,!0,"4-wire 240 V outlet (dryer, range, EV)",new A.fwN()),A.vH("Two hots and a neutral, with no separate ground: the old 10-30 and 10-50, from before 1996.",B.d4i,B.dps,"v240three",u,!1,B.duW,B.doF,!0,"3-wire 240 V outlet (old dryer or range)",new A.fwO()),A.vH("Two hots and a ground, and no neutral at all: the 6-series outlets.",B.dnk,B.d7X,"v240only",u,!0,B.dtv,B.dm4,!0,"240 V only outlet (window AC, welder)",new A.fwP()),A.vH("Hot and neutral as usual, but the ground goes on its own wire straight back to the panel: shops and offices.",B.dph,B.d9_,"isolated",u,!0,B.dum,B.d4G,!0,"Isolated-ground outlet",new A.fwQ())],C.aw("O<SP>"))})
w($,"io4","H5",()=>{var v,u=C.a([],x.n)
for(v=0;v<10;++v)u.push(-72+16*v)
return u})})()};
(a=>{a["IYwYFskTenpd5Ads010jsqtfJWM="]=a.current})($__dart_deferred_initializers__);