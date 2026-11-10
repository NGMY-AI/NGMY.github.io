((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,C,D,A5,A6,G,P,H,A7,A8,Q,A9,Aa,L,R,A_,Ab,T,Ac,U,A0,Ad,V,W,Ae,X,A1,A2,Y,A3,Af,Ag,M,S,A={eWL:function eWL(d,e){this.a=d
this.b=e},a9F:function a9F(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.at=g
_.CW=h
_.a=i
_.$ti=j},ae8:function ae8(d,e){var _=this
_.d=null
_.e=$
_.Gb$=d
_.c=_.a=null
_.$ti=e},boT:function boT(d){this.a=d},aNp:function aNp(){},
o2(d,e,f){var w=d.a,v=d.b,u=d.c
return new A.q(w+(e.a-w)*f,v+(e.b-v)*f,u+(e.c-u)*f)},
vw(d,e){var w=Math.cos(e),v=Math.sin(e),u=d.a,t=d.c
return new A.q(u*w+t*v,d.b,-u*v+t*w)},
nx(d,e,f,g){var w,v,u,t,s,r,q,p,o=new A.fW1(Math.cos(e),Math.sin(e)),n=new A.fW_(f),m=new A.fW0(n,e,o,g),l=new A.fVZ(n,e,o),k=C.a([],x.z)
for(w=d.length,v=x.o,u=0;u<d.length;d.length===w||(0,C.M)(d),++u){t=d[u]
s=C.a([],v)
for(r=t.a,q=r.length,p=0;p<r.length;r.length===q||(0,C.M)(r),++p)s.push(m.$1(r[p]))
k.push(new A.kn(s,l.$1(t.b),t.c,t.d,t.e,t.f,t.r,t.w,t.x,t.y,t.z))}return k},
H2(d,e,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
if(d.length<3)return d
w=C.a([D.d.gI(d)],x.o)
for(v=1;u=v+1,u<d.length;v=u){t=d[v-1]
s=d[v]
r=d[u]
q=s.a
p=s.b
o=s.c
n=new A.q(q-t.a,p-t.b,o-t.c)
m=new A.q(r.a-q,r.b-p,r.c-o)
l=Math.min(e,n.guT()*0.5)
k=Math.min(e,m.guT()*0.5)
j=n.gmQ(0)
i=new A.q(q-j.a*l,p-j.b*l,o-j.c*l)
j=m.gmQ(0)
h=new A.q(q+j.a*k,p+j.b*k,o+j.c*k)
for(g=0;g<=a0;++g){f=g/a0
w.push(A.o2(A.o2(i,s,f),A.o2(s,h,f),f))}}w.push(D.d.gak(d))
return w},
ai0(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
if(a3.length<3)return a3
w=C.a([],x.o)
for(v=0;u=v+1,t=a3.length,u<t;v=u){s=v===0?a3[v]:a3[v-1]
r=a3[v]
q=a3[u]
p=v+2
o=p<t?a3[p]:q
for(t=s.a,p=r.a,n=q.a,m=o.a,l=s.b,k=r.b,j=q.b,i=o.b,h=s.c,g=r.c,f=q.c,e=o.c,d=0;d<a4;++d){a0=d/a4
a1=a0*a0
a2=new A.fVO(a0,a1,a1*a0)
w.push(new A.q(a2.$4(t,p,n,m),a2.$4(l,k,j,i),a2.$4(h,g,f,e)))}}w.push(D.d.gak(a3))
return w},
hBt(){if($.hay)return
$.hay=!0
C.az().bM(new A.bIZ(),x.P).eP(new A.bJ_())},
haz(){C.az().bM(new A.bJ0(),x.P).eP(new A.bJ1())},
hWl(d){var w,v,u,t,s,r,q,p,o,n
for(w=d.length,v=!0,u=!0,t=0;t<w;++t)if(d[t].c>=0.5)u=!1
else v=!1
if(v)return d
if(u)return B.rG
s=C.a([],x.o)
for(r=0;w=d.length,r<w;){q=d[r];++r
p=d[r%w]
w=q.c
o=w>=0.5
n=p.c
if(o)s.push(q)
if(o!==n>=0.5)s.push(A.o2(q,p,(0.5-w)/(n-w)))}return s},
h4r(a2,a3,a4){var w,v,u,t,s,r,q,p=J.a5(a2),o=p.h(a2,0).a,n=p.h(a2,0).b,m=p.h(a2,1).a,l=p.h(a2,1).b,k=p.h(a2,2).a,j=p.h(a2,2).b,i=p.h(a2,3).a,h=p.h(a2,3).b,g=m-k,f=i-k,e=o-m+k-i,d=l-j,a0=h-j,a1=n-l+j-h
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
return new C.eK(p)},
hXc(d,e,f,g){var w,v=e.d,u=e.e,t=A.h4r(f,v,u)
if(t==null)return
w=d.a
J.bm(w.save())
d.av(0,t.a)
w.clipRect(C.bF(new C.a3(0,0,v,0+u)),$.ms()[1],!0)
e.c.$3(d,new C.au(v,u),g)
w.restore()},
hXd(d,e,f,g,h,i){var w,v,u,t,s,r,q,p,o,n,m,l,k=e.d,j=e.e
$.S()
w=new C.oX()
e.c.$3(C.z4(w,null),new C.au(k,j),i)
v=w.ne()
u=k/g
t=j/h
for(s=f.length,r=d.a,q=0+u,p=0+t,o=0;o<f.length;f.length===s||(0,C.M)(f),++o){n=f[o]
m=A.h4r(n.c,u,t)
if(m==null)continue
J.bm(r.save())
l=m.a
r.concat(C.fVU(C.H6(l)))
r.clipRect(C.bF(new C.a3(0,0,q,p)),$.ms()[1],!0)
r.translate(-n.a*u,-n.b*t)
n=v.b
n===$&&C.c()
n=n.a
n===$&&C.c()
n=n.a
n.toString
r.drawPicture(n)
r.restore()}v.q()},
h1c(d,e,f,g,h,i,j,k,l,m){return new A.ave(l,e,h,k,i,f,g,d,m,j,null)},
hVz(a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=$.h8T()
C.DZ(a4)
w=a3.a.get(a4)
if(w!=null)return w
v=new A.PN(!0,C.a([],x.z),C.a([],x.t))
a3=x.S
u=x.gf
t=C.U(a3,u)
s=C.U(a3,u)
r=a4.a
for(q=0;q<r.length;++q){p=r[q]
a3=p.z
u=a3!==0
if(u&&s.h(0,a3)!=null){s.h(0,a3).rU(0,p,q)
continue}for(o=p.a,n=o.length,m=1/0,l=-1/0,k=1/0,j=-1/0,i=1/0,h=-1/0,g=0;g<n;++g){f=o[g]
e=f.a
if(e<m)m=e
if(e>l)l=e
d=f.b
if(d<k)k=d
if(d>j)j=d
a0=f.c
if(a0<i)i=a0
if(a0>h)h=a0}if(l-m>90||j-k>90||h-i>90){v.rU(0,p,q)
continue}a1=t.c3(0,((D.k.bh(m/60)+4096)*8192+(D.k.bh(k/60)+4096))*8192+(D.k.bh(i/60)+4096),new A.fgz())
a1.rU(0,p,q)
if(u)s.n(0,a3,a1)}a3=C.a([v],x.f5)
D.d.v(a3,new C.bc(t,t.$ti.k("bc<2>")))
a2=new A.cKu(a3)
$.h8T().n(0,a4,a2)
return a2},
q:function q(d,e,f){this.a=d
this.b=e
this.c=f},
kn:function kn(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
tM:function tM(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fO:function fO(d,e,f,g,h,i,j,k,l){var _=this
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
c_h:function c_h(d,e){this.a=d
this.b=e},
c_i:function c_i(d){this.a=d},
c_g:function c_g(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
c_j:function c_j(d,e,f){this.a=d
this.b=e
this.c=f},
c_f:function c_f(d,e){this.a=d
this.b=e},
c_k:function c_k(d,e,f){this.a=d
this.b=e
this.c=f},
fW1:function fW1(d,e){this.a=d
this.b=e},
fW_:function fW_(d){this.a=d},
fW0:function fW0(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fVZ:function fVZ(d,e,f){this.a=d
this.b=e
this.c=f},
fVO:function fVO(d,e,f){this.a=d
this.b=e
this.c=f},
xd:function xd(d,e,f,g,h){var _=this
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
_.S$=h
_.bv$=_.bJ$=0},
bIZ:function bIZ(){},
bJ_:function bJ_(){},
bJ0:function bJ0(){},
bJ1:function bJ1(){},
bJ3:function bJ3(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bJ2:function bJ2(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bIY:function bIY(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bIX:function bIX(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bUf:function bUf(d){this.a=d},
b63:function b63(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
csL:function csL(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
csM:function csM(d,e){this.a=d
this.b=e},
csK:function csK(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0,a1,a2,a3,a4,a5,a6){var _=this
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
_.CW=u
_.cx=v
_.cy=w
_.db=a0
_.dx=a1
_.dy=a2
_.fr=a3
_.fx=a4
_.fy=a5
_.go=a6},
csE:function csE(){},
csF:function csF(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
csD:function csD(d){this.a=d},
csG:function csG(){},
csH:function csH(d,e,f){this.a=d
this.b=e
this.c=f},
csI:function csI(){},
csJ:function csJ(){},
cCx:function cCx(d,e){this.a=d
this.b=e},
FZ:function FZ(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.d=_.c=0
_.e=!1
_.f=f
_.r=g
_.w=h
_.x=i
_.y=j
_.z=k
_.Q=l},
ave:function ave(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
brs:function brs(d,e,f,g,h,i){var _=this
_.d=$
_.e=d
_.f=e
_.r=f
_.w=1
_.x=0
_.y=g
_.bz$=h
_.aa$=i
_.c=_.a=null},
f_e:function f_e(d){this.a=d},
f_d:function f_d(d){this.a=d},
f_a:function f_a(d){this.a=d},
f_b:function f_b(d){this.a=d},
f_c:function f_c(d){this.a=d},
f_8:function f_8(d){this.a=d},
f_9:function f_9(d,e){this.a=d
this.b=e},
PN:function PN(d,e,f){var _=this
_.a=d
_.b=e
_.c=f
_.d=1/0
_.e=-1/0
_.f=1/0
_.r=-1/0
_.w=1/0
_.x=-1/0},
cKu:function cKu(d){this.a=d},
fgz:function fgz(){},
aNy:function aNy(){},
bT9(d){var w,v,u=$.fYL.h(0,d)
if(u!=null)return C.f8(u,x.c)
w=B.RY.h(0,d)
if(w==null)return C.f8(null,x.c)
v=$.fYK.h(0,d)
if(v==null){v=new A.bTa(w,d).$0()
$.fYK.n(0,d,v)}return v},
aVQ(d){var w=0,v=C.j(x.H),u
var $async$aVQ=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:w=2
return C.b(A.bT9(d),$async$aVQ)
case 2:u=J.aW(B.RY.gev(B.RY))
case 3:if(!u.C()){w=4
break}w=5
return C.b(A.bT9(u.gR(u)),$async$aVQ)
case 5:w=3
break
case 4:return C.h(null,v)}})
return C.i($async$aVQ,v)},
hEz(d){var w,v,u=new Float64Array(d*16)
for(w=0;w<d;++w){v=w*16
u[v+15]=1
u[v+10]=1
u[v+5]=1
u[v]=1}return u},
hc6(d,e,f){var w,v,u,t
if(d>e){w=d
v=e}else{w=e
v=d}if(w>f){u=w
w=f}else u=f
if(v>w){t=w
w=v
v=t}return(v*65536+w)*65536+u},
hEA(d,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=d.c,g=d.b===1,f=g?4:3,e=h.length
if(e===0)return
w=d.a*f
if(a0<=h[0]||e===1){for(g=d.d,v=a1.$flags|0,u=0;u<f;++u){t=g[u]
v&2&&C.aj(a1)
a1[w+u]=t}return}s=e-1
if(a0>=h[s]){for(g=d.d,v=s*f,t=a1.$flags|0,u=0;u<f;++u){r=g[v+u]
t&2&&C.aj(a1)
a1[w+u]=r}return}for(q=0;s-q>1;){p=D.o.aD(q+s,1)
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
hc7(d,a0,a1,a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
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
i3Z(d,e){var w=D.o.aD(d,16)&255,v=D.o.aD(d,8)&255,u=d&255,t=0.35+(0.299*w+0.587*v+0.114*u)/255,s=new A.fud()
return C.a_(255,s.$2(w,e.gb2(e)*255*t),s.$2(v,e.gbc()*255*t),s.$2(u,e.gb9(e)*255*t))},
bbL:function bbL(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
bc5:function bc5(d,e){this.b=d
this.c=e},
bhb:function bhb(d,e,f){this.a=d
this.b=e
this.c=f},
dor:function dor(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=$},
Mz:function Mz(d,e,f,g,h){var _=this
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
bTa:function bTa(d,e){this.a=d
this.b=e},
bT1:function bT1(){},
bSW:function bSW(d,e){this.a=d
this.b=e},
bSV:function bSV(){},
bT3:function bT3(d,e,f){this.a=d
this.b=e
this.c=f},
bT4:function bT4(d){this.a=d},
bT5:function bT5(d){this.a=d},
bT2:function bT2(d,e){this.a=d
this.b=e},
bT_:function bT_(d){this.a=d},
bT0:function bT0(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
bT8:function bT8(d){this.a=d},
bT6:function bT6(){},
bT7:function bT7(d){this.a=d},
bTb:function bTb(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
bSX:function bSX(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
bSZ:function bSZ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bSY:function bSY(d,e){this.a=d
this.b=e},
fud:function fud(){},
dtZ:function dtZ(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
diD:function diD(d,e){this.a=d
this.b=e},
hB9(){var w,v=J.e4(6,x.ff)
for(w=0;w<6;++w)v[w]=new A.aSH()
return new A.bHh(v)},
afO(d){return A.hWM(d)},
hWM(d){var w=0,v=C.j(x.eT),u,t=2,s=[],r,q,p,o,n
var $async$afO=C.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:if(d==null){u=null
w=1
break}t=4
w=7
return C.b(C.fzi(d,null),$async$afO)
case 7:r=f
n=J
w=8
return C.b(r.lK(),$async$afO)
case 8:q=n.a37(f)
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
return C.i($async$afO,v)},
huF(a5,a6,a7,a8,a9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
if(a8.a){w=a7/8
if(a9===0){v=D.k.bh(w)
A.ne(a5,a6,a7,D.o.F(v,2)===0?0:1+D.o.ao(v,2))}else A.ne(a5,a6,a7,a9+1+D.k.bh(w))
return}u=B.a54[a8.e]
w=a6.a
t=a6.b
s=0+t
r=new C.a3(0,0,0+w,s)
$.S()
q=C.I()
q.sam(new C.a9(D.a5,D.a8,D.x,C.a([u.b,u.c],x.O),null,null).aB(0,r))
a5.aP(r,q)
q=t*0.04
p=r.cq(-q)
o=C.I()
o.b=D.aa
o.c=t*0.025
n=u.e
o.r=n.gp(0)
a5.aP(p,o)
m=t*0.1
l=a8.x
if(l!=null){p=m+w*0.4
o=m+(t-m*2)
k=new C.a3(m,m,p,o)
j=p-m
i=l.c
o-=m
h=l.d
v=Math.max(j/i,o/h)
g=C.bJ(new C.t(i/2,h/2),o/v,j/v)
j=a5.a
J.bm(j.save())
o=t*0.05
j.clipRRect(C.el(C.bt(k,new C.aQ(o,o))),$.ny(),!0)
o=C.I()
o.Q=D.cg
a5.ox(l,g,k,o)
j.restore()
f=p+m*0.8}else f=m
e=a8.w
if(e==null)e=$.W5
p=t*0.3
o=f+p
p=m+p
d=new C.a3(f,m,o,p)
j=d.gbK()
o-=f
i=C.I()
i.r=B.EZ.gp(0)
a5.ad(j,o/2,i)
if(e!=null){j=e.c
i=e.d
v=Math.min(o*0.8/j,(p-m)*0.8/i)
o=C.bJ(d.gbK(),i*v,j*v)
h=C.I()
h.Q=D.cg
a5.ox(e,new C.a3(0,0,j,i),o,h)}o=new A.fMW()
a0=w-f-m
j=u.d
a1=o.$4(a8.b,t*0.17,j,a0)
a1.a3(a5,new C.t(f,p+q))
a2=o.$5$w(a8.c,t*0.09,n,a0,D.P)
n=a1.b.a.c
a2.a3(a5,new C.t(f,p+t*0.06+n.gbb(n)))
a3=o.$6$lines$w(a8.d,t*0.08,j.j(0.85),a0,1,D.H)
j=a3.b
o=j.c
j=j.a.c
a3.a3(a5,new C.t(w-m-o,t-m-j.gbb(j)))
a4=(D.k.F(a7*0.35,1.6)-0.3)*w
j=a5.a
J.bm(j.save())
j.clipRect(C.bF(r),$.ms()[1],!0)
t=C.I()
t.r=D.c.j(0.1).gp(0)
a5.aP(new C.a3(a4,0,a4+w*0.1,s),t)
j.restore()},
i5h(d,e){var w,v,u,t,s=d.w
if(s.length===0){s=d.e
w=d.r
return new C.cw([-s/2,s/2,w+d.f,w])}v=s[e]
s=v.e
u=d.e*s
t=d.r+v.d
return new C.cw([-u/2,u/2,t+d.f*s,t])},
bB3(d,e,f,g){var w,v,u,t,s,r,q,p,o=new C.a3(0,0,0+e.a,0+e.b)
$.S()
w=C.I()
w.r=B.bhH.gp(0)
d.aP(o,w)
v=o.cq(-(e.gdC()*0.06))
w=d.a
J.bm(w.save())
w.clipRect(C.bF(v),$.ms()[1],!0)
u=v.a
t=v.b
w.translate(u,t)
u=v.c-u
t=v.d-t
if((g&1)===0){s=0+u
r=0+t
q=C.I()
q.sam(B.c4O.aB(0,new C.a3(0,0,s,r)))
d.aP(new C.a3(0,0,s,r),q)
p=t*0.82
J.bm(w.save())
w.translate((u-p)/2,(t-p)/2)
A.huK(d,new C.au(p,p),f)
w.restore()}else A.ne(d,new C.au(u,t),f,g)
w.restore()},
i0m(d,e,f){var w,v,u,t,s=e.a,r=e.b
$.S()
w=C.I()
w.r=B.bq5.gp(0)
d.aP(new C.a3(0,0,0+s,0+r),w)
v=C.I()
v.r=K.agW.gp(0)
w=s*0.12
u=r*0.07
t=w+s*0.76
d.aP(new C.a3(w,u,t,u+r*0.38),v)
u=r*0.52
d.aP(new C.a3(w,u,t,u+r*0.4),v)
u=C.I()
u.r=F.fz.gp(0)
d.ad(new C.t(s*0.82,r*0.5),s*0.05,u)},
h57(d9,e0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6=x.z,d7=C.a([],d6),d8=new A.fk(d7)
d8.f=0
d8.GC(B.ha_,B.h_q,B.h_p,B.h9Z,B.bjG,B.ea)
d8.f=1
d8.GC(B.h4j,B.h26,B.hbu,B.h3O,B.Mh,B.ea)
for(w=-2100;w<2100;w+=90){v=w+45
d8.GC(new A.q(w,0.8,637),new A.q(v,0.8,637),new A.q(v,0.8,643),new A.q(w,0.8,643),K.LW,B.ea)}d8.f=2
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
case"neon":n=D.b9
break
case"screen":n=D.av
o=6
break
case"roof":n=D.aw
break
case"gate":n=D.d7
break
case"duo":n=D.b9
break
case"line3":n=D.bj
break
case"far3":n=D.aC
break
case"skyline":n=D.bw
break
case"lines6":n=D.aP
break
case"scatter":n=D.b9
break
default:n=F.fz}m=p==="roof"
l=m?3:2
k=q?720:900
j=k*t/u
i=C.a([],x.a)
r=q?r:1
for(h=e0.b,g=x.o,f=-o,e=f-0.8,d=p==="highway",a0=f/2,f=p!=="neon",a1=a0-0.2,a2=p==="screen",a3=s-16,a4=(14+s-7)/2,a5=s-21,a6=s-7,a7=0;a7<r;++a7){a8=q?v[a7]:B.ac8
a9=a8.e
b0=u*a9
b1=t*a9
b2=new A.fvC(a8)
b3=C.a([],d6)
b4=new A.fk(b3)
b4.f=l
b5=C.a([],d6)
b6=new A.fk(b5)
b6.f=l
b7=A.i5h(d9,a7).a
b8=b7[0]
b9=b7[1]
c0=b7[2]
c1=b7[3]
c2=(b8+b9)/2
c3=(c0+c1)/2
b7=b2.$1(new A.q(c2,c3,a1))
c4=!f||a2?D.av:D.cp
c5=a8.c
b4.wo(b7,new A.q(b0+16,b1+16,o),c4,0.2,c5)
c6=7*Math.max(1,a9*0.8)
c4=b0+14
b6.wo(b2.$1(new A.q(c2,c0+3,3)),new A.q(c4,c6,8),n,0.4,c5)
b6.wo(b2.$1(new A.q(c2,c1-3,3)),new A.q(c4,c6,8),n,0.4,c5)
b7=b1+14
b6.wo(b2.$1(new A.q(b8-3,c3,3)),new A.q(c6,b7,8),n,0.4,c5)
b6.wo(b2.$1(new A.q(b9+3,c3,3)),new A.q(c6,b7,8),n,0.4,c5)
D.d.v(d7,b3)
D.d.v(d7,b5)
b5=C.a([],d6)
c7=new A.fk(b5)
c8=Math.max(6,b0*0.018)
c9=new A.fvD(i,l)
switch(q?"sep":p){case"tower":c7.dN(new A.q(0,0,a0),new A.q(0,a6,a0),c8*1.9,D.hf,12)
c7.dN(new A.q(0,0,a0),new A.q(0,14,a0),c8*2.8,D.av,12)
break
case"screen":c7.aO(new A.q(0,7,-10),new A.q(b0*0.6,14,70),D.av)
c7.aO(new A.q(0,a4,a0),new A.q(60,a5,14),D.hf)
break
case"roof":c7.n8(B.fWj,B.h1m,B.bfI,0.1,4)
c7.n8(B.fWY,B.h1s,D.dv,0.15,4)
c7.hn(B.fWD,B.h1r,D.dv,4)
c7.n8(B.had,B.fZz,B.bgZ,0.1,2)
c7.hn(B.hac,B.fZL,D.dv,2)
c7.aO(B.fZW,B.h0f,B.nS)
c7.aO(B.fW8,B.fYj,D.ek)
c9.$6$px(B.h8h,0,210,126,new A.fvv(),360)
c9.$6$px(B.h9i,0,210,126,new A.fvw(),360)
c9.$6$px(B.h51,0,72,116,A.iex(),140)
c9.$6$px(B.hcJ,0,130,80,new A.fvx(),300)
for(d0=0;d0<3;++d0){d1=-60-d0*90
c9.$6$px(new A.q(310.8,140,d1),1.5707963267948966,80,64,new A.fvy(d0),240)
c9.$6$px(new A.q(310.8,55,d1),1.5707963267948966,60,60,A.h7y(),200)}for(d0=0;d0<2;++d0){d1=-65-d0*110
c9.$6$px(new A.q(-490.8,95,d1),-1.5707963267948966,90,60,new A.fvz(d0),240)
c9.$6$px(new A.q(-490.8,40,d1),-1.5707963267948966,50,50,A.h7y(),180)}c9.$6$px(new A.q(0,100,-285.8),3.141592653589793,580,170,A.huw(),900)
break
case"gate":for(b3=b0/2+25,b7=s+b1,c4=b7+26,c5=c8*1.6,d2=0;d2<2;++d2){d3=F.hx[d2]*b3
c7.dN(new A.q(d3,0,a0),new A.q(d3,c4,a0),c5,D.hf,12)}c7.aZ(new A.q(0,b7+17,a0),new A.q(b0+80,18,22),D.hf,0.2)
break
default:for(b3=s+a8.d-7,d2=0;d2<2;++d2){b7=F.hx[d2]*b0*0.3
c7.dN(b2.$1(new A.q(b7,0,a0)),b2.$1(new A.q(b7,b3,a0)),c8,D.hf,10)}if(d)c7.aO(new A.q(0,a3,14),new A.q(c4,3,24),D.hf)}D.d.v(d7,b5)
d4=h[a7]
i.push(new A.fO(C.a([b2.$1(new A.q(b8,c0,0.8)),b2.$1(new A.q(b9,c0,0.8)),b2.$1(new A.q(b9,c1,0.8)),b2.$1(new A.q(b8,c1,0.8))],g),0,new A.fvA(d4,a7),k,j,60,l,0,!1))
i.push(new A.fO(C.a([b2.$1(new A.q(b9,c0,e)),b2.$1(new A.q(b8,c0,e)),b2.$1(new A.q(b8,c1,e)),b2.$1(new A.q(b9,c1,e))],g),0,new A.fvB(d4,a7),k,j,60,l,0,!1))}d6=C.a([],d6)
d5=new A.fk(d6)
for(d2=0;d2<9;++d2){v=B.d14[d2]
w=v.a
d1=v.b
if(m&&d1>200)continue
d5.dN(new A.q(w,0,d1),new A.q(w,55,d1),7,B.q2,6)
d5.ed(new A.q(w,98,d1),46,E.Xk,3,6)}for(d2=0;d2<6;++d2){w=B.dqL[d2]
d5.dN(new A.q(w,0,580),new A.q(w,90,580),3,D.hf,5)
d5.ed(new A.q(w,95,580),8,B.o3,3,6)}D.d.v(d7,d6)
return new A.tM(d7,B.S2,B.zm,i,null,6000)},
hn1(d){return d*d*(3-2*d)},
fhH(d,e,f,g,h){var w=new A.fhI(h)
return new A.q(w.$4(d.a,e.a,f.a,g.a),w.$4(d.b,e.b,f.b,g.b),w.$4(d.c,e.c,f.c,g.c))},
hnX(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=D.k.E(e,0,30)
if(f==null){w=C.a([],x.n)
for(v=J.a5(d),u=0;u<v.gL(d);++u)w.push(30*u/(v.gL(d)-1))
t=w}else t=f
w=J.a5(d)
v=J.a5(t)
s=0
for(;;){r=s+2
if(!(r<w.gL(d)&&v.h(t,s+1)<=m))break;++s}w=s+1
q=A.hn1(D.k.E((m-v.h(t,s))/(v.h(t,w)-v.h(t,s)),0,1))
v=new A.fl5(d)
p=s-1
o=A.fhH(v.$1(p).a,v.$1(s).a,v.$1(w).a,v.$1(r).a,q)
n=A.fhH(v.$1(p).b,v.$1(s).b,v.$1(w).b,v.$1(r).b,q)
r=Math.sin(m*1.3)
v=Math.sin(m*1.9)
w=Math.cos(m*1.1)
return new C.z(new A.q(o.a+r*3,Math.max(o.b+v*2.5,18),o.c+w*3),n)},
i46(d){return $.i45.c3(0,d.a,new A.fuj(d))},
hqo(d){return $.i47.c3(0,d.a,new A.fug(d))},
i5g(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=d.a
if(i==="scatter")return A.hnX(B.deQ,e,null)
if(d.w.length!==0)return A.hnX(A.hqo(d),e,A.i46(d))
w=B.dwz.h(0,i)
if(w==null)w=B.aOy
v=B.cuS[w.a]
u=w.b?-1:1
t=new A.q(d.ga4j(0),d.r+d.gGO()/2,d.ga4k())
s=new A.fvn(t,u,d)
r=new A.fvo(t,u,d)
q=D.k.E(e,0,30)
i=v.length
p=0
for(;;){o=p+2
if(!(o<i&&v[p+1].a<=q))break;++p}i=v[p].a
n=p+1
m=A.hn1(D.k.E((q-i)/(v[n].a-i),0,1))
i=new A.fvp(v)
l=p-1
k=A.fhH(s.$1(i.$1(l)),s.$1(i.$1(p)),s.$1(i.$1(n)),s.$1(i.$1(o)),m)
j=A.fhH(r.$1(i.$1(l)),r.$1(i.$1(p)),r.$1(i.$1(n)),r.$1(i.$1(o)),m)
return new C.z(new A.q(k.a,Math.max(k.b,18),k.c),j)},
lD:function lD(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
r6:function r6(d,e,f,g,h,i,j,k,l,m){var _=this
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
bHj:function bHj(d){this.a=d},
Hm:function Hm(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
aSH:function aSH(){var _=this
_.a=!0
_.b="NEW GLOBAL MOVEMENT FOR YOUTH"
_.c="Videos, slides, blogs and books."
_.d="ngmy.org"
_.e=0
_.x=_.w=_.r=_.f=null},
bHh:function bHh(d){this.a="highway"
this.b=d},
bHi:function bHi(d){this.a=d},
fMW:function fMW(){},
fvC:function fvC(d){this.a=d},
fvD:function fvD(d,e){this.a=d
this.b=e},
fvE:function fvE(d,e){this.a=d
this.b=e},
fvv:function fvv(){},
fvw:function fvw(){},
fvx:function fvx(){},
fvy:function fvy(d){this.a=d},
fvz:function fvz(d){this.a=d},
fvA:function fvA(d,e){this.a=d
this.b=e},
fvB:function fvB(d,e){this.a=d
this.b=e},
hn:function hn(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
fhI:function fhI(d){this.a=d},
fl5:function fl5(d){this.a=d},
fuj:function fuj(d){this.a=d},
fui:function fui(){},
fug:function fug(d){this.a=d},
fuh:function fuh(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fvn:function fvn(d,e,f){this.a=d
this.b=e
this.c=f},
fvo:function fvo(d,e,f){this.a=d
this.b=e
this.c=f},
fvp:function fvp(d){this.a=d},
aoy:function aoy(d){this.a=d},
aoz:function aoz(d,e){var _=this
_.d=d
_.r=_.f=_.e=$
_.w=e
_.x=-1
_.y=!1
_.z=""
_.c=_.a=null},
c3i:function c3i(d){this.a=d},
c3g:function c3g(d){this.a=d},
c3f:function c3f(){},
c33:function c33(d){this.a=d},
c39:function c39(d,e){this.a=d
this.b=e},
c3h:function c3h(d){this.a=d},
c36:function c36(d,e){this.a=d
this.b=e},
c35:function c35(d){this.a=d},
c2E:function c2E(){},
c34:function c34(d){this.a=d},
c38:function c38(d){this.a=d},
c37:function c37(d,e,f){this.a=d
this.b=e
this.c=f},
c32:function c32(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
c31:function c31(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
c2Z:function c2Z(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
c3_:function c3_(d,e){this.a=d
this.b=e},
c2U:function c2U(d,e,f){this.a=d
this.b=e
this.c=f},
c30:function c30(d){this.a=d},
c2X:function c2X(d,e){this.a=d
this.b=e},
c2W:function c2W(){},
c2Y:function c2Y(d,e){this.a=d
this.b=e},
c2V:function c2V(){},
c2J:function c2J(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
c2I:function c2I(){},
c2K:function c2K(d){this.a=d},
c2L:function c2L(d){this.a=d},
c2M:function c2M(d){this.a=d},
c2N:function c2N(d,e){this.a=d
this.b=e},
c2O:function c2O(d,e,f){this.a=d
this.b=e
this.c=f},
c2P:function c2P(d,e){this.a=d
this.b=e},
c2Q:function c2Q(d,e,f){this.a=d
this.b=e
this.c=f},
c2R:function c2R(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
c2H:function c2H(){},
c2S:function c2S(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
c2F:function c2F(){},
c2G:function c2G(){},
c2T:function c2T(d){this.a=d},
c3c:function c3c(d){this.a=d},
c3d:function c3d(d){this.a=d},
c3b:function c3b(d){this.a=d},
c3e:function c3e(d){this.a=d},
c3a:function c3a(d){this.a=d},
h4X(d,e,f,g){var w,v,u,t=null,s=e.r
s=s==null?t:D.k.V(s)
w=D.k.V(f)
v=e.b
v=v==null?t:v.l()
u=d+"|"+C.w(s)+"|"+w+"|"+C.w(v)
v=$.hqk.h(0,u)
if(v==null){s=C.fu(t,t,g,t,C.cS(t,t,t,t,t,t,t,t,t,e,d),D.a3,D.bZ,t,D.dA,D.bW)
s.nY(f)
$.hqk.n(0,u,s)}else s=v
return s},
ne(a5,a6,a7,a8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4=D.o.F(a8,17)
if(a4===0){A.fN2(a5,a6,a7,0)
w=a6.a
v=(D.k.F(a7*0.35,1.6)-0.3)*w
u=a5.a
J.bm(u.save())
t=0+a6.b
u.clipRect(C.bF(new C.a3(0,0,0+w,t)),$.ms()[1],!0)
$.S()
s=C.I()
s.r=D.c.j(0.12).gp(0)
a5.aP(new C.a3(v,0,v+w*0.12,t),s)
u.restore()
return}if(a4>=8){I.RT(a5,a6,a4-8,a7)
return}r=B.cWb[a4-1]
w=a6.a
u=a6.b
q=new C.a3(0,0,0+w,0+u)
t=$.S()
s=C.I()
s.sam(new C.a9(D.ay,D.aE,D.x,C.a([r.c,r.d],x.O),a3,a3).aB(0,q))
a5.aP(q,s)
s=a5.a
J.bm(s.save())
s.clipRect(C.bF(q),$.ms()[1],!0)
p=C.I()
p.r=D.c.j(0.07).gp(0)
for(o=u*0.4,n=w*0.07,m=a7*w*0.05,l=w*2,k=w*0.4,j=x.g,t=t.r,i=-4;i<14;++i){v=D.k.F(i*w/7+m,l)-k
h=C.a([],j)
g=new C.aF(t,D.ag,a3,a3,h)
h.push(new C.aX(v,0))
h.push(new C.aq(v+n,0))
f=v-o
h.push(new C.aq(f+n,u))
h.push(new C.aq(f,u))
h.push(new C.bs())
e=p.G()
h=g.gbw().a.snapshot()
s.drawPath((g.e=new C.cl(h)).a,e)
e.delete()}t=Math.sin(a7*2)
n=C.I()
m=r.e
n.r=m.j(0.18).gp(0)
a5.ad(new C.t(w*0.88,u*0.3),u*(0.22+0.03*t),n)
s.restore()
s=w*0.06
A.h4X(r.a,C.l(a3,a3,D.c,a3,a3,a3,a3,a3,a3,a3,a3,u*0.22,a3,a3,D.u,a3,a3,!0,a3,u*0.012,a3,a3,a3,a3,a3,a3),w*0.9,1).a3(a5,new C.t(s,u*0.2))
A.h4X(r.b,C.l(a3,a3,m,a3,a3,a3,a3,a3,a3,a3,a3,u*0.1,a3,a3,D.P,a3,a3,!0,a3,a3,a3,a3,a3,a3,a3,a3),w*0.8,2).a3(a5,new C.t(s,u*0.5))
d=$.W5
m=u*0.76
if(d!=null){t=d.c
n=d.d
a0=Math.min((s+o-s)/t,(m+u*0.16-m)/n)
o=C.I()
o.Q=D.cg
a5.ox(d,new C.a3(0,0,t,n),new C.a3(s,m,s+t*a0,m+n*a0),o)}else{a1=C.fu(a3,a3,a3,a3,C.cS(a3,a3,a3,a3,a3,a3,a3,a3,a3,C.l(a3,a3,D.c,a3,a3,a3,a3,a3,a3,a3,a3,u*0.12,a3,a3,D.u,a3,a3,!0,a3,a3,a3,a3,a3,a3,a3,a3),"NGMY"),D.a3,D.bZ,a3,D.dA,D.bW)
a1.el()
a1.a3(a5,new C.t(s,m))}a2=A.h4X("ngmy.org",C.l(a3,a3,D.ad,a3,a3,a3,a3,a3,a3,a3,a3,u*0.08,a3,a3,D.H,a3,a3,!0,a3,a3,a3,a3,a3,a3,a3,a3),400,1)
a2.a3(a5,new C.t(w-a2.b.c-w*0.05,u*0.82))},
FR:function FR(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
L6(d){return D.d.dK(B.QX,new A.fxT(d),new A.fxU())},
yK(d){var w=B.hy.h(0,d.b),v=d.e*3.141592653589793/2,u=w.d/2+30
return new C.z(d.c+Math.sin(v)*u,d.d+Math.cos(v)*u)},
hCD(d){var w=C.a([],x.C),v=C.a([],x.fW),u=new C.e9()
u.d3(7)
w=new A.bLE(d,u,w,v)
w.byW(d,7)
return w},
z8:function z8(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fxT:function fxT(d){this.a=d},
fxU:function fxU(){},
xi:function xi(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=null
_.w=_.r=!1
_.x=0},
aTQ:function aTQ(d,e,f,g,h,i,j){var _=this
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
a4h:function a4h(d,e,f,g,h,i,j,k){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.w=j
_.x=k},
akd:function akd(d,e,f){this.a=d
this.b=e
this.c=f},
bLE:function bLE(d,e,f,g){var _=this
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
bLG:function bLG(d){this.a=d},
bLI:function bLI(d,e){this.a=d
this.b=e},
bLJ:function bLJ(){},
bLF:function bLF(d,e){this.a=d
this.b=e},
bLK:function bLK(){},
bLH:function bLH(d,e,f){this.a=d
this.b=e
this.c=f},
haE(d){var w=d.x
return C.bv(w.length,D.d.cI(w,0,new A.bJL()),D.h,D.h,D.h,D.h,D.h,D.h,D.h,D.h,D.h,D.h,D.h,D.h,D.h,D.h,D.h,D.h,D.h,D.h)},
ifJ(d){var w,v,u
for(w=0,v=0;u=v+1,u<d.length;v=u)w+=Math.sqrt(Math.pow(d[u].a-d[v].a,2)+Math.pow(d[u].b-d[v].b,2))
return w},
ifP(d,e){var w,v,u,t,s,r,q,p,o
for(w=e,v=0;u=v+1,u<d.length;v=u){t=d[u]
s=d[v]
r=t.a-s.a
q=t.b-s.b
p=Math.sqrt(r*r+q*q)
if(p<0.000001)continue
if(w<=p||v+2===d.length){o=D.k.E(w/p,0,1)
t=d[v]
return new C.bk(t.a+r*o,t.b+q*o,Math.atan2(r,q))}w-=p}return new C.bk(D.d.gak(d).a,D.d.gak(d).b,0)},
bJK:function bJK(d){var _=this
_.a=d
_.e=_.d=_.c=_.b=$
_.f=-1},
bJL:function bJL(){},
dj5:function dj5(d,e){this.a=d
this.b=e},
fZg(d,e,f){return new A.aYt(f,d,e,null)},
h5s(d){return D.k.dg((1-D.k.E(d,0,1))*12)},
aTc:function aTc(d){var _=this
_.b=_.a=1
_.d=_.c=0
_.e=1
_.f=!1
_.r=0
_.w=!1
_.P$=0
_.S$=d
_.bv$=_.bJ$=0},
aYt:function aYt(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
Us:function Us(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
c0U:function c0U(d){this.a=d},
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
fm8(d){var w=d.d-d.b-200
return new C.bpZ([157.07963267948966,2*w+380+628.3185307179587,w,190])},
Lb(d,e){var w,v=A.fm8(d).a,u=v[2],t=v[3],s=v[0]
v=v[1]
w=D.k.F(e,v)
if(w<0)w+=v
v=new A.fBc()
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
fXV(d,e,f){return new A.aTb(d,e,f)},
h5J(d,e){var w=D.k.F(e+d.c,28)
if(w<12)return 0
if(w<15)return 1
return 2},
hlI(d,e,f,g){var w=x.n
w=new A.bwJ(d,e,f,g,C.a([],w),C.a([],w))
w.bA1(d,e,f,g)
return w},
hBL(){var w,v=C.a([],x.n)
for(w=0;w<4;++w)v.push(B.kl[w].r)
return new A.bJM(v,C.c3(4,0,!1,x.i),B.azw)},
i2E(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=C.a([],x.z)
for(w=d.length,v=e.a,u=e.b,t=e.c,s=x.o,r=0;r<d.length;d.length===w||(0,C.M)(d),++r){q=d[r]
p=C.a([],s)
for(o=q.a,n=o.length,m=0;m<o.length;o.length===n||(0,C.M)(o),++m){l=o[m]
p.push(new A.q(l.a*v,l.b*u,l.c*t))}k.push(new A.kn(p,q.b,q.c,q.d,q.e,q.f,q.r,q.w,q.x,q.y,q.z))}return k},
hVJ(){var w,v,u,t,s=new A.fk(C.a([],x.z))
s.r=!0
s.aZ(B.fWx,B.fYU,D.d7,0.3)
s.aZ(B.hao,B.fYK,D.bN,0.2)
s.aZ(B.aau,B.fYI,B.hV,0.6)
s.aZ(B.h5i,B.fZp,B.hV,0.6)
s.aO(B.h4o,B.fYW,D.bG)
for(w=0;w<2;++w)s.aO(new A.q(75.5,9,B.a4O[w]),B.aaz,B.o3)
for(w=0;w<2;++w){v=B.dlk[w]
for(u=0;u<2;++u){t=B.dlb[u]
s.dN(new A.q(v,7,t-1.5),new A.q(v,7,t+1.5),7.5,D.nf,12)}}return s},
i1c(d,e){var w,v,u,t,s,r=new A.fk(C.a([],x.z))
r.r=!0
r.aZ(B.aVa,B.fXZ,D.bN,0.4)
r.aZ(B.haG,B.h0G,D.bN,0.4)
r.aZ(B.haH,B.h0K,B.hV,0.6)
r.aO(B.x3,B.fY3,D.dI)
w=D.k.F(d*5+e,2)<1
r.aZ(B.hcT,B.aVo,w?D.aw:D.ej,0.6)
r.aZ(B.h8G,B.aVo,w?D.d7:D.d2,0.6)
for(v=0;v<2;++v){u=B.dlg[v]
for(t=0;t<2;++t){s=B.dl9[t]
r.dN(new A.q(u,6.5,s-1.5),new A.q(u,6.5,s+1.5),6.5,D.nf,12)}}return r},
ihW(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=x.z,a5=C.a([],a4)
for(w=0;w<4;++w){v=B.kl[w]
u=$.aRe()
t=D.d.cu(B.kl,v)
u.FE(0,a6)
t=A.Lb(B.kl[t],u.a[t]).a
s=t[0]
r=t[1]
q=t[2]
p=t[3]
u=v.a==="bus"
o=u?A.hVJ():A.i1c(a6,w)
u=u?B.aWb:B.aVv
D.d.v(a5,A.nx(A.i2E(o.a,u),0,Math.atan2(q,p)-1.5707963267948966,new A.q(s,0,r)))}for(u=$.bF4(),t=u.length,n=0;n<u.length;u.length===t||(0,C.M)(u),++n)D.d.v(a5,A.hZC(u[n],a6))
for(u=a6*0.9,t=x.o,m=a6*22,l=a6*0.09,w=0;w<2;++w){k=B.a4p[w].a
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
a0.aZ(B.dX,B.h09,D.by,0.4)
a0.aZ(B.fZ3,B.fY7,B.hV,0.7)
a0.dN(B.fZa,B.h1q,2.6,D.by,8)
a0.aO(B.h1n,B.h8j,D.bN)
a0.dN(B.x3,B.aas,1.2,B.hp,8)
for(a1=0;a1<2;++a1)a0.aDA(new A.q(0,13.4,0),B.h3u,B.hp,m+a1*3.141592653589793/2)
for(n=0;n<2;++n){a2=E.aA4[n]
a0.aO(new A.q(0,-11,a2),B.h3c,B.hp)
a0.aO(new A.q(-10,-6,a2),B.aW9,B.hp)
a0.aO(new A.q(10,-6,a2),B.aW9,B.hp)}for(n=0;n<2;++n){a3=B.aA0[n]
a0.jh(C.a([new A.q(a3*0.45,-10,0),new A.q(a3,-22,0)],t),0.3,B.hp,!1,0,4)}D.d.v(a5,A.nx(d,0,e-1.5707963267948966,new A.q(j+520*k,h+Math.sin(u+w)*5,i+520*f)))}return a5},
ihX(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=C.a([],x.a),f=new A.fVX()
for(w=0;w<4;++w){v={}
u=B.kl[w]
v.a=v.b=null
t=$.aRe()
s=D.d.cu(B.kl,u)
t.FE(0,d)
s=A.Lb(B.kl[s],t.a[s]).a
v.b=s[0]
v.a=s[1]
s=new A.fVV(v,Math.atan2(s[2],s[3])-1.5707963267948966)
v=u.a==="bus"
r=v?B.aWb:B.aVv
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
g.push(f.$7(s.$3(q,o,p),s.$3(v,o,p),s.$3(v,n,p),s.$3(q,n,p),t+5,1200,220))}for(v=d*0.09,t=d*0.9,w=0;w<2;++w){s=B.a4p[w].a
l=s[0]
k=s[1]
j=s[2]
i=s[3]
h=v+w*3.141592653589793
s=Math.cos(h)
p=Math.sin(h)
p=new A.fVW(Math.atan2(-Math.sin(h),Math.cos(h))-1.5707963267948966,l+520*s,j+Math.sin(t+w)*5,k+520*p)
g.push(f.$7(p.$2(-42,-22),p.$2(42,-22),p.$2(42,-44),p.$2(-42,-44),i,900,230))
g.push(f.$7(p.$2(42,-22.3),p.$2(-42,-22.3),p.$2(-42,-44.3),p.$2(42,-44.3),i,900,230))}return g},
hZC(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k=B.kl[d.a*2],j=d.b,i=A.Lb(k,j).a,h=i[0],g=i[1],f=i[2],e=i[3]
j=A.Lb(k,j+22).a
j=[j[0],j[1],f,e,h+-e*56,g+f*56]
w=A.h5J(d,a0)
v=D.k.F(a0+d.c,28)
u=v>=17&&v<26
i=C.a([],x.z)
t=new A.fk(i)
t.r=!0
t.dN(B.dX,B.aVj,1.7,D.hf,6)
t.aZ(B.fXC,B.h22,D.av,0.3)
for(s=w===2,r=w===1,q=w===0,p=0;p<3;++p){o=!0
if(!(p===0&&s))if(!(p===1&&r)){n=p===2&&q
o=n}n=o?B.di_[p]:B.cJ1[p]
m=o?0.9:0.1
t.fT(new A.q(-3.9,74-p*8,0),3.3,n,4,7,m)}t.aZ(B.fX6,B.fY8,D.av,0.3)
if(u){t.ed(B.h3g,1.6,D.be,4,6)
t.aO(B.h8f,B.h7X,D.be)
t.aO(B.h3F,B.aWy,D.be)
t.aO(B.h72,B.aWy,D.be)}else{t.aO(B.h4L,B.h97,D.aw)
for(l=-2;l<=1;++l)t.aO(new A.q(l*1.25+0.6,40,-4.9),B.h9t,D.aw)
t.aO(B.hce,B.h4U,D.aw)}return A.nx(i,0,Math.atan2(j[2],j[3])-1.5707963267948966,new A.q(j[4],0,j[5]))},
i6a(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=C.a([],x.z),i=new A.fk(j)
i.f=1
i.e=90
w=new A.fxr(i)
for(v=$.bF4(),u=v.length,t=0;t<v.length;v.length===u||(0,C.M)(v),++t){s=v[t]
r=B.kl[s.a*2]
q=s.b
p=A.Lb(r,q+22).a
o=p[0]
n=p[1]
m=p[2]
l=p[3]
for(k=-4;k<=4;++k)w.$8(o,n,m,l,0,-25+k*11,18,5)
q=A.Lb(r,q-6).a
w.$8(q[0],q[1],m,l,0,0,2.2,46)}return j},
Su:function Su(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.d=f
_.r=g
_.w=h},
fBc:function fBc(){},
aTb:function aTb(d,e,f){this.a=d
this.b=e
this.c=f},
bwJ:function bwJ(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=-1},
feV:function feV(d,e){this.a=d
this.b=e},
bJM:function bJM(d,e,f){var _=this
_.a=d
_.b=e
_.c=0
_.d=f},
bJN:function bJN(){},
fVX:function fVX(){},
fVY:function fVY(d){this.a=d},
fVV:function fVV(d,e){this.a=d
this.b=e},
fVW:function fVW(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fxr:function fxr(d){this.a=d},
fxs:function fxs(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
Af:function Af(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.x=0},
czY:function czY(d,e,f){var _=this
_.a=d
_.b=e
_.d=_.c=$
_.e=f
_.f=null
_.w=_.r=0
_.x=1
_.y=0},
cA_:function cA_(d){this.a=d},
cA0:function cA0(){},
czZ:function czZ(){},
hvE(d){return d.b==="hq"?12:D.o.E(D.k.bh((210+D.o.F(B.ze[d.f].l(),5)*24)/22),8,14)},
fXU(d,e,f){var w=new A.bJy(d,e,f,B.azE,B.a2T,C.a([],x.a),C.aY(x.S))
w.at=new A.b9p(null,-138,138,12,316,0,296,3.141592653589793,w.cbC())
w.ax=w.cGr()
return w},
px:function px(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bJy:function bJy(d,e,f,g,h,i,j){var _=this
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
bJz:function bJz(){},
bJG:function bJG(d){this.a=d},
bJH:function bJH(d){this.a=d},
bJI:function bJI(d){this.a=d},
bJJ:function bJJ(d){this.a=d},
bJA:function bJA(d){this.a=d},
bJB:function bJB(){},
bJC:function bJC(){},
bJD:function bJD(d){this.a=d},
bJE:function bJE(d){this.a=d},
bJF:function bJF(d){this.a=d},
fY0(d,e){var w=C.a([],x.ha),v=C.a([new A.LY(),new A.LY(),new A.LY()],x.gQ),u=C.a([],x.s),t=new C.e9()
t.d3(e)
w=new A.aTB(d,t,w,v,u)
w.byU(d,e)
return w},
haR(d,e){var w,v,u,t,s,r,q,p,o=J.a5(e),n=x.fF,m=n.a(o.h(e,"wired"))
if(m==null)m=D.uE
w=n.a(o.h(e,"plumbed"))
if(w==null)w=D.uE
for(o=d.gqR(),n=o.length,v=J.a5(w),u=J.a5(m),t=0;t<o.length;o.length===n||(0,C.M)(o),++t){s=o[t]
r=""+s.a
q=u.h(m,r)
if(C.qZ(q)){s.ay=!q
s.CW=null}p=v.h(w,r)
if(C.qZ(p)){r=s.c
r=r==="bathroom"||r==="kitchen"}else r=!1
if(r){s.ch=!p
s.fr=null}}},
fY1(d){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=J.a5(d),j=C.aK(k.h(d,"seed"))
j=j==null?l:D.k.N(j)
if(j==null)j=1
w=C.aK(k.h(d,"clock"))
w=w==null?l:D.k.N(w)
v=A.fY0(j,(w==null?0:w)+7)
j=C.aK(k.h(d,"points"))
j=j==null?l:D.k.N(j)
v.r=j==null?10:j
j=C.aK(k.h(d,"food"))
j=j==null?l:D.k.N(j)
v.w=j==null?8:j
j=C.aK(k.h(d,"medicine"))
j=j==null?l:D.k.N(j)
v.x=j==null?4:j
j=C.aK(k.h(d,"served"))
j=j==null?l:D.k.N(j)
v.y=j==null?0:j
j=C.aK(k.h(d,"saved"))
j=j==null?l:D.k.N(j)
v.z=j==null?0:j
j=C.aK(k.h(d,"clock"))
if(j==null)j=l
v.as=j==null?0:j
j=C.aK(k.h(d,"nextCall"))
j=j==null?l:D.k.N(j)
v.Q=j==null?1:j
j=x.U
u=j.a(k.h(d,"res"))
if(u==null)u=D.cv
w=J.a5(u)
t=x.G
s=0
for(;;){r=v.c
r===$&&C.c()
if(!(s<r.length&&s<w.gL(u)))break
q=t.a(w.h(u,s))
r=v.c[s]
p=J.a5(q)
r.b=C.e5(p.h(q,"hunger"))
r.c=C.e5(p.h(q,"health"))
r.d=C.e5(p.h(q,"comfort"))
r.e=J.A(p.h(q,"sick"),!0)
r.f=!J.A(p.h(q,"alive"),!1)
p=C.aK(p.h(q,"bed"))
p=p==null?l:D.k.N(p)
r.r=p==null?-1:p;++s}o=j.a(k.h(d,"beds"))
if(o==null)o=D.cv
w=J.a5(o)
r=v.e
s=0
for(;;){if(!(s<r.length&&s<w.gL(o)))break
q=t.a(w.h(o,s))
p=r[s]
n=J.a5(q)
p.a=D.k.N(C.e5(n.h(q,"res")))
p.b=C.e5(n.h(q,"care"))
p.c=C.e5(n.h(q,"heal"));++s}k=j.a(k.h(d,"calls"))
k=J.aW(k==null?D.cv:k)
j=v.d
while(k.C()){m=t.a(k.gR(k))
w=J.a5(m)
r=new A.I3(D.k.N(C.e5(w.h(m,"id"))),D.k.N(C.e5(w.h(m,"res"))),C.cP(w.h(m,"kind")),C.cP(w.h(m,"msg")),D.k.N(C.e5(w.h(m,"reward"))))
r.f=C.e5(w.h(m,"age"))
j.push(r)}return v},
aTD(){var w=0,v=C.j(x.dy),u,t=2,s=[],r,q,p,o,n
var $async$aTD=C.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return C.b(C.az(),$async$aTD)
case 7:r=e
q=C.aU(J.r(r.a,"ngmy_community_v1"))
if(q==null){u=null
w=1
break}p=x.b.a(D.X.aN(0,q,null))
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
return C.i($async$aTD,v)},
aTC(){var w=0,v=C.j(x.H),u=1,t=[],s,r,q
var $async$aTC=C.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
w=6
return C.b(C.az(),$async$aTC)
case 6:s=e
w=7
return C.b(J.hz(s,"ngmy_community_v1"),$async$aTC)
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
return C.i($async$aTC,v)},
Fl:function Fl(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
OY:function OY(d){var _=this
_.a=d
_.b=25
_.d=_.c=100
_.e=!1
_.f=!0
_.r=-1},
I3:function I3(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=0},
LY:function LY(){this.a=-1
this.b=100
this.c=0},
aTB:function aTB(d,e,f,g,h){var _=this
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
bKn:function bKn(){},
bKk:function bKk(d){this.a=d},
bKl:function bKl(d,e){this.a=d
this.b=e},
bKm:function bKm(){},
bKr:function bKr(d){this.a=d},
bKp:function bKp(d){this.a=d},
bKq:function bKq(){},
bKo:function bKo(d){this.a=d},
bKs:function bKs(){},
apy:function apy(d,e){this.c=d
this.a=e},
bkh:function bkh(){var _=this
_.d=null
_.e=$
_.f=null
_.r=$
_.x=_.w=null
_.y=0
_.c=_.a=null},
dRo:function dRo(d,e){this.a=d
this.b=e},
dRp:function dRp(d){this.a=d},
dRB:function dRB(){},
dRv:function dRv(d,e){this.a=d
this.b=e},
dRw:function dRw(d){this.a=d},
dRu:function dRu(d){this.a=d},
dRk:function dRk(){},
dRl:function dRl(){},
dRE:function dRE(){},
dRF:function dRF(){},
dRD:function dRD(d,e){this.a=d
this.b=e},
dRC:function dRC(d,e){this.a=d
this.b=e},
dRj:function dRj(d,e){this.a=d
this.b=e},
dRq:function dRq(d,e,f){this.a=d
this.b=e
this.c=f},
dRr:function dRr(d,e,f){this.a=d
this.b=e
this.c=f},
dRs:function dRs(d,e,f){this.a=d
this.b=e
this.c=f},
dRt:function dRt(d,e){this.a=d
this.b=e},
dRn:function dRn(d,e,f){this.a=d
this.b=e
this.c=f},
dRm:function dRm(d,e,f){this.a=d
this.b=e
this.c=f},
dRy:function dRy(d,e){this.a=d
this.b=e},
dRz:function dRz(d,e){this.a=d
this.b=e},
dRA:function dRA(d){this.a=d},
dRx:function dRx(d){this.a=d},
dRG:function dRG(d){this.a=d},
dRH:function dRH(){},
acE:function acE(d,e,f){this.c=d
this.d=e
this.a=f},
bfa:function bfa(d,e){this.b=d
this.a=e},
vL(d,e,f,g,h,i,j,k,l,m,n){return new A.T_(g,m,d,k,e,f,n,h,l,i,j)},
t0(d){return D.d.fW($.hzO(),new A.fy2(d))},
bEF(d,e){var w,v,u=d.e,t=new C.N(u,new A.fWx(),C.T(u).k("N<1,n>")).fH(0)
u=e.b
w=C.a6(u).k("bc<2>")
v=C.df(new C.bc(u,w),w.k("L.E"))
return t.d5(0,v.gkR(v))},
hvG(d,e,f,g,h){var w,v
if(e.a&&e.c===0){if(e.r)return"SHOCK! The breaker was still ON and you touched a live wire. Always turn the power OFF and test the wires first."
return"STOP! The breaker is still ON, so these wires are live (120 volts). Turn the breaker OFF first. This can shock you badly."}if(e.c!==0)return"The device is already in the box. Pull it out again to change the wires."
if(!e.r&&!e.y&&!h&&!g.c.t(0,f))return d.r.$2(f,g)
w=e.b
v=g.a
if(w.h(0,v)!=null)return"That place already has a wire. Tap the wire to take it off first."
if(new C.bc(w,C.a6(w).k("bc<2>")).t(0,f))return"That wire is already fastened. Tap it to take it off if you want to move it."
w.n(0,v,f)
return null},
h5i(d,e){var w,v,u,t,s,r,q=new A.fxe(),p=new A.fxf(),o=C.a([],x.bm)
for(w=e.b,w=new C.cH(w,C.a6(w).k("cH<1,2>")).gaf(0),v=d.f,u=d.e;w.C();){t=w.d
t.toString
s=D.d.fW(v,new A.fxc(t))
r=D.d.fW(u,new A.fxd(t))
o.push(new A.a4c(new A.cBM(r.a,q.$1(r.e)),new A.cyb(p.$1(s.f))))}return o},
fNO(d){var w=d.e,v=C.T(w).k("Z<1>")
return new A.bLO(new C.Z(w,new A.fNP(),v).gL(0),new C.Z(w,new A.fNQ(),v).gL(0),d.y)},
L7(d,e){var w,v,u,t,s,r,q=A.hr6(A.fNO(d),A.h5i(d,e),e.x),p=q.c,o=new A.fyf(q),n=q.b,m=n.length===0?null:D.d.fb(n,new A.fyc())
n=q.a===B.v3
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
s=D.d.fW(u,new A.fyd(t))
if(!s.c.t(0,t.b)){n=s.d
return new A.b8W("dead","The "+D.d.fW(d.e,new A.fye(t)).b+" is on the wrong terminal ("+s.b+"). "+n,!1,!1,!1,"none",n)}}r=n?"Wired correctly. Hot, neutral and ground are all in the right place, and every safety check passes.":m.c+" "+p.c
n=m==null?null:m.e
if(n==null)n=""
return new A.b8W(w,r,p.d,p.e,p.f,p.b,n)},
h5K(d){var w,v,u
for(w=$.fXa(),v=0;v<10;++v){u=w[v]
if(u.a===d)return u.w}return d},
aOj(d,e){var w
if(d==="light"||d==="fan")w=e.c===0?6.4:0.6
else w=e.c===0?4.7:-0.25
return w},
aPB(d,e,f){var w,v
if(d==="light"||d==="fan"){w=A.aOj(d,f)
v=f.c===0?w-3.2:w
switch(e){case 51:return new A.q(-1.5,-0.3,v)
case 52:return new A.q(0,-0.3,v)
default:return new A.q(1.5,-0.3,v)}}w=A.aOj(d,f)
switch(e){case 21:return new A.q(0.98,-0.2+(d==="gfci"?0.95:0.85),w-0.45)
case 22:return new A.q(0.98,-0.2+(d==="gfci"?-0.75:-0.55),w-0.45)
case 23:return new A.q(-0.98,-0.2+(d==="gfci"?0.95:0.85),w-0.45)
case 24:return new A.q(-0.98,-0.2+(d==="gfci"?-0.75:-0.55),w-0.45)
default:return new A.q(0,-1.98,w+0.52)}},
h56(b5,b6,b7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=C.a([],x.z),b2=new A.fk(b1),b3=A.h5K(b5.a),b4=b3==="light"||b3==="fan"
if(b7){b2.b=1
b2.hn(B.h7h,B.aWt,B.vC,3)
b2.hn(B.h8x,B.aWt,B.vC,3)
b2.hn(B.hbg,B.aWP,B.vC,2)
b2.hn(B.h9a,B.aWP,B.vC,2)
b2.b=2
b2.n8(B.h6P,B.aWm,B.jq,0.05,3)
b2.n8(B.h6f,B.aWm,B.jq,0.05,3)
b2.n8(B.h68,B.hbN,B.jq,0.05,2)}w=b5.w.length===0
v=A.hmf(b2,w?b3:"outlet",!0)
u=new A.fvt(b2,b6,b3,b4)
t=D.d.gI(v)
s=!w
if(s){r=b5.e
q=r.length
for(p=t.a,o=t.b+0,n=t.c,m=q-1,l=q===1,k=0;k<q;++k){j=r[k]
i=l?0:k/m-0.5
h=D.o.F(k,2)
if(j.e==="ground")g=B.vI
else{g=j.c
if(g.A(0,B.oR))g=B.oR}u.$5(60+k,new A.q(p+i*0.5,o,n+0.04*k),new A.q(i*3.6,-1.7-0.12*h,2.3+0.15*k),j.a,g)}}else if(b3==="switch"){f=D.d.gak(v)
u.$5(10,t.a8(0,B.h_e),B.hbj,"blackLine",B.LQ)
u.$5(13,f.a8(0,B.hbs),B.h4t,"blackLoad",B.LQ)
u.$5(12,t.a8(0,B.h86),B.h3D,"ground",B.vI)
b2.b=6
r=x.o
b2.jh(C.a([t.a8(0,B.aWj),B.h_X,B.Vm],r),0.075,B.oR,!1,0.3,8)
b2.jh(C.a([f.a8(0,B.aWj),B.h7n,B.Vm],r),0.075,B.oR,!1,0.3,8)
b2.BC(B.Vm,B.hbb,0.28,B.aeE,0.18,0.3,10)}else{u.$5(10,t.a8(0,B.h4D),B.h_K,"black",B.LQ)
u.$5(11,t.a8(0,B.h62),B.h7y,"white",B.oR)
u.$5(12,t.a8(0,B.h6r),B.h6h,"ground",B.vI)}if(b4)A.hng(b2,b3,b6)
else A.hmV(b2,b3,A.aOj(b3,b6),b6.w,!1,s)
if(b6.e&&b6.c===0){b2.b=0
b2.d=0.5
for(r=b5.f,p=r.length,e=0;e<p;++e){d=r[e]
a0=A.aPB(b3,d.a,b6)
if(d.e)a1=D.bG
else{o=d.f
if(o==="ground")a1=D.be
else{o=o==="neutral"?D.c:B.XN
a1=o}}if(b4)o=0
else{o=a0.a
if(o>0.4)o=0.12
else o=o<-0.4?-0.12:0}if(b4)n=0.6
else n=Math.abs(a0.a)<0.4?0.2:0
b2.fT(new A.q(a0.a+o,a0.b+0,a0.c+n),0.36,a1,4,8,0.1)}b2.d=1}if(b6.c>=2&&!b4)A.hpk(b2,b6.w)
r=!1
if(b6.c>=2)if(b6.d)r=b3==="outlet"||b3==="gfci"
if(r)A.i3W(b2,b6.a&&!b6.w)
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
a2=A.aOj(b3,b6)
a4=p?"Ceiling fan":"Ceiling light"
p=p?"The motor housing with blades. It has three wires: black (motor), white (neutral) and green (ground).":"The light fixture with a frosted dome. It has three wires: black, white and green."
a5=C.G([1,B.ebx,2,B.ebL,3,new A.cW(r,"A box that holds the wire connections. Every connection must be inside a box, never loose in the wall or the ceiling."+o,new A.q(0,0,-1.2),9),4,new A.cW(m,"The yellow jacket holds three wires: black (hot), white (neutral) and bare copper (ground). Yellow means 12 gauge wire for a 20 amp circuit. White jackets are 14 gauge for 15 amps.",new A.q(-0.4,1.5,-1.8),8),5,B.ec7,10,new A.cW("Black wire: hot","The hot wire brings the power from the breaker. It is the dangerous one. "+l,new A.q(-0.8,-0.8,1.2),7),13,B.ebj,11,new A.cW("White wire: neutral","The neutral wire carries the power back to the panel. "+h,new A.q(0,-0.8,1.2),7),12,new A.cW("Bare copper wire: ground","The ground wire is a safety path. If a wire touches metal, the current runs down the ground instead of through you. "+g,new A.q(0.5,-0.8,1.2),7),6,B.ebJ,20,new A.cW(a3,n,new A.q(0,-0.2,a2),9),21,B.ebO,22,B.ec6,23,B.ebH,24,B.ebM,25,B.ebA,26,B.ebP,27,B.ec0,28,B.ebv,30,B.ebe,31,B.ebc,51,B.ebK,52,B.ebg,53,B.ebT,54,new A.cW(a4,p,new A.q(0,0,6.4),9),55,B.ec2],x.S,x.q)
if(s){a5.n(0,20,new A.cW(b5.b,b5.c,new A.q(0,-0.2,A.aOj(b3,b6)),9))
for(s=b5.e,r=s.length,k=0;k<r;++k)a5.n(0,60+k,new A.cW(s[k].b,"Pick this wire up, then tap the screw it belongs on. Tap it again on the screw to take it off.",new A.q(-0.8+k*0.5,-0.8,1.2),7))
for(s=b5.f,r=s.length,e=0;e<r;++e){a6=s[e]
p=a6.a
a5.n(0,p,new A.cW(a6.b,a6.d,A.aPB(b3,p,b6),5))}}a7=C.a([],x.E)
if(b6.f&&b6.c===0)for(s=b5.f,r=s.length,e=0;e<r;++e){d=s[e]
a0=A.aPB(b3,d.a,b6)
a8=d.f
A:{p="hot"===a8
if(p){o=B.eRt
break A}if("neutral"===a8){o=B.eHq
break A}if("ground"===a8){o=B.eJY
break A}o=B.ewg
break A}a9=o.a
if(b4){B:{if(p){n="BLACK NUT \xb7 HOT"
break B}if("neutral"===a8){n="WHITE NUT \xb7 NEUTRAL"
break B}n="GROUND"
break B}i=n}else i=w?a9:d.b
if(b4){C:{if(p){p=B.h5G
break C}if("neutral"===a8){p=B.h5z
break C}p=B.hc0
break C}b0=p}else{p=a0.a
if(p>0.4)n=3.8
else n=p<-0.4?-4.2:0
b0=new A.q(n,Math.abs(p)<0.4?-3:-0.4,1)}a7.push(new A.hf(new A.q(a0.a+b0.a,a0.b+b0.b,a0.c+b0.c),i,o.b,0))}if(b6.a&&b6.c===0)a7.push(B.c0f)
return new A.tM(b1,a5,a7,B.wv,null,0)},
hmf(d,e,f){var w,v,u=e==="light"||e==="fan"
d.b=3
if(u){d.dR(B.aWR,B.aWs,2.2,B.xS,0.3,18)
d.Tc(B.aWs,B.dX,2.2,B.xS,!1,!0,0.3,18)}else{d.aZ(B.aWR,B.h6Z,B.xS,0.3)
d.aZ(B.h46,B.aW7,B.xS,0.3)
d.aZ(B.h0E,B.aW7,B.xS,0.3)
d.aZ(B.h6b,B.aWx,B.xS,0.3)
d.aZ(B.h5x,B.aWx,B.xS,0.3)}w=C.a([],x.o)
v=new A.fgF(d,f,w)
if(e==="switch"){v.$2(4,B.d2k)
v.$2(5,B.d0m)}else v.$2(4,B.deR)
return w},
hvL(d,e){var w,v=$.fXa(),u=new C.Z(v,new A.fWw(d),C.T(v).k("Z<1>"))
if(!u.gan(0)){w=e-60
return w>=0&&w<u.gI(0).e.length?u.gI(0).e[w].a:null}return A.hZz(d,e)},
hZz(d,e){var w
A:{if(10===e){w=d==="switch"?"blackLine":"black"
break A}if(13===e){w="blackLoad"
break A}if(11===e){w="white"
break A}if(12===e){w="ground"
break A}w=null
break A}return w},
hmV(d,e,f,g,h,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k=new A.q(0,-0.2,f),j=e==="switch",i=e==="gfci"
if(g)w=B.xN
else w=j?B.bjw:B.Yr
v=i?3.1:2.95
d.e=0
d.b=20
if(!h){d.aZ(k.a8(0,B.h2M),new A.q(1.5,v,1.3),w,0.25)
d.e=0.15
d.b=26
u=k.a8(0,B.h2u)
d.aZ(u,B.hbd,g?B.bfY:B.Ma,0.8)
d.aO(k.a8(0,B.h83),B.hd5,B.F2)}d.e=0.3
d.b=27
u=k.a8(0,B.h54)
d.aZ(u,new A.q(1.3,i?2.85:2.7,0.16),w,0.3)
if(j){d.e=0.7
d.b=28
u=k.a8(0,B.h7l)
d.aZ(u,B.h4A,g?B.xN:G.YC,0.35)
u=k.a8(0,B.haM)
d.aZ(u,B.h99,g?B.xN:B.afq,0.35)}else{d.e=0.6
u=i?E.auQ:B.dsr
t=u.length
s=f+0.47
r=f+0.46
q=f+0.5
p=0
for(;p<t;++p){o=u[p]
d.b=27
n=-0.2+(o+0.04)
d.aO(new A.q(-0.28,n,s),B.h6Y,B.Fe)
d.aO(new A.q(0.28,n,s),B.h5c,B.Fe)
n=-0.2+(o-0.32)
d.dN(new A.q(0,n,r),new A.q(0,n,q),0.11,B.Fe,10)}if(i){d.e=0.7
d.b=28
d.aZ(k.a8(0,B.h7N),B.aWd,B.bnf,0.3)
d.aZ(k.a8(0,B.hbt),B.aWd,B.aig,0.3)}}if(h){d.e=0
return}m=i?0.95:0.85
l=i?-0.75:-0.55
u=new A.fhZ(d,k)
if(!j||a0){u.$6$taped(23,-1,m,B.afN,B.agl,i)
u.$5(24,-1,l,B.afN,B.agl)}u.$6$taped(21,1,m,B.XN,B.ahI,i)
u.$5(22,1,l,B.XN,B.ahI)
d.e=0.9
d.b=25
d.dR(k.a8(0,B.h69),k.a8(0,B.hc6),0.18,B.bpn,0.7,12)
d.aO(k.a8(0,B.h5B),B.h6d,D.e_)
d.aZ(k.a8(0,B.h2X),B.h7R,B.bcc,0.6)
d.e=0},
hng(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=e==="fan",i=A.aOj(e,f)
d.e=0
d.b=55
w=i-0.3
v=i+0.3
u=j?3.3:3.5
t=f.w?B.xN:B.bk3
d.dR(new A.q(0,0,w),new A.q(0,0,v),u,t,0.45,20)
d.b=54
if(j){u=i+4.2
d.dR(new A.q(0,0,v),new A.q(0,0,u),0.45,B.bfS,0.5,10)
v=i+7.4
d.dR(new A.q(0,0,u),new A.q(0,0,v),3.6,B.Xj,0.5,18)
d.dR(new A.q(0,0,v),new A.q(0,0,i+8.6),1.6,B.boC,0.7,14)}else{d.d=0.92
v=f.w?B.xN:B.bh2
d.fT(new A.q(0,0,i+1.2),3.6,v,6,14,0.7)
d.d=1}v=d.b=54
s=[B.eHz,B.et_,B.eP0]
for(u=x.o,r=i-3.2,q=0,p=0;p<3;++p){t=s[p]
o=f.c===0
d.b=o?B.cEK[q]:v;++q
n=o?r:i
o=t.b.a
d.jh(C.a([new A.q(o,-0.3,w),new A.q(o,-0.3,n+0.4)],u),0.07,t.a,!1,0.3,6)}if(f.c===0)for(w=[B.eAh,B.eJ5,B.eRV],v=f.b,p=0;p<3;++p){m=w[p]
u=m.a
l=A.aPB(e,u,f)
d.b=u
d.e=0.8
t=l.a+0
o=l.b+0
k=l.c
d.dR(new A.q(t,o,k+-0.2),new A.q(t,o,k+0.3),0.09,B.vI,0.6,6)
if(v.aj(0,u))d.BC(new A.q(t,o,k+-0.5),new A.q(t,o,k+0.9),0.4,m.b,0.26,0.4,8)
d.e=0}},
hpk(d,e){var w
d.e=0.4
d.b=30
w=e?B.xN:B.bbg
d.aZ(B.h7E,B.aWz,w,0.3)
d.aZ(B.h6N,B.aWz,w,0.3)
d.aZ(B.h0y,B.aWI,w,0.3)
d.aZ(B.h1D,B.h38,w,0.3)
d.aZ(B.hbY,B.aWI,w,0.3)
d.dR(B.h5j,B.h6J,0.1,B.Ma,0.8,10)
d.e=0},
i3W(d,e){var w,v
d.b=31
for(w=0;w<2;++w){v=B.d4Y[w]
d.dR(new A.q(v,0.52,0.2),new A.q(v,0.52,1.9),0.04,B.Ma,0.8,6)}d.aZ(B.fYG,B.hb_,B.bgG,0.35)
d.bbB(B.aWu,0.2,e?D.XP:B.bkQ,0.9)
if(e){d.d=0.35
d.fT(B.aWu,0.5,D.XP,4,8,0)
d.d=1}},
fK:function fK(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
Cx:function Cx(d){var _=this
_.a=!0
_.b=d
_.c=0
_.w=_.r=_.f=_.e=_.d=!1
_.x=!0
_.y=!1
_.z=""},
jz:function jz(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
T_:function T_(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
fzm:function fzm(){},
fzn:function fzn(){},
fzo:function fzo(){},
fzp:function fzp(){},
fzq:function fzq(){},
fy2:function fy2(d){this.a=d},
fWx:function fWx(){},
b8W:function b8W(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.r=i
_.w=j},
fxe:function fxe(){},
fxf:function fxf(){},
fxc:function fxc(d){this.a=d},
fxd:function fxd(d){this.a=d},
fNP:function fNP(){},
fNQ:function fNQ(){},
fyf:function fyf(d){this.a=d},
fyg:function fyg(d){this.a=d},
fyc:function fyc(){},
fyd:function fyd(d){this.a=d},
fye:function fye(d){this.a=d},
fvt:function fvt(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fvu:function fvu(d){this.a=d},
fgF:function fgF(d,e,f){this.a=d
this.b=e
this.c=f},
fWw:function fWw(d){this.a=d},
fhZ:function fhZ(d,e){this.a=d
this.b=e},
agJ(d){var w
A:{if("outlet"===d){w="Outlet"
break A}if("gfci"===d){w="GFCI outlet"
break A}if("switch"===d){w="Light switch"
break A}if("light"===d){w="Ceiling light"
break A}if("fan"===d){w="Ceiling fan"
break A}w=A.t0(d).b
break A}return w},
fzr:function fzr(){},
fzs:function fzs(){},
fzt:function fzt(){},
fzu:function fzu(){},
fzv:function fzv(){},
fzw:function fzw(){},
fzx:function fzx(){},
fzy:function fzy(){},
fzz:function fzz(){},
fzA:function fzA(){},
aPp(d){return D.d.dK(B.a3E,new A.fvf(d),new A.fvg())},
h85(d,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i={},h=new A.fWt(),g=new A.fWq(),f=d.c,e=f==="hall"
if(!e&&d.p1!=="back"){w=a0.e?d.gho(0)-14:Math.min(a0.d,d.gho(0)-14)
v=h.$1(w)
return new A.abD(w,v,d.gho(0)/2,g.$1(v))}if(e&&a1<2){w=a0.e?d.gho(0)-14:Math.min(a0.d,d.gho(0)-14)
v=h.$1(w)
return new A.abD(w,v,d.gho(0)/2,g.$1(v))}if(e){f=C.a([],x.n)
for(e=d.w,u=e.length,t=0;t<e.length;e.length===u||(0,C.M)(e),++t){s=e[t]
if(s.b==="back"&&!s.a)f.push(s.c)}r=f.length===0?-40:D.d.fb(f,D.vw)-19-8
q=f.length===0?40:D.d.fb(f,D.pG)+19+8
p=d.gex(0)/2-8
f=a1===2?(-p+r)/2:(q+p)/2
return new A.abD(p-q,106,f,61)}e=d.gex(0)
q=d.gex(0)/2-6
if(f==="bathroom"&&!d.ok)q=14
f=C.a([],x.f)
for(u=d.w,o=u.length,t=0;t<u.length;u.length===o||(0,C.M)(u),++t){s=u[t]
if(s.b==="back"&&!s.a){n=s.c
f.push(new C.z(n-19,n+19))}}D.d.aY(f,new A.fWr())
m=i.a=i.b=-e/2+6
l=new A.fWs(i)
for(e=f.length,t=0;t<f.length;f.length===e||(0,C.M)(f),++t){u=f[t]
k=u.a
if(k>m)l.$2(m,Math.min(k,q))
m=Math.max(m,u.b)}if(m<q)l.$2(m,q)
j=Math.max(30,i.a-i.b-4)
w=a0.e?j:Math.min(a0.d,j)
v=h.$1(w)
return new A.abD(w,v,(i.b+i.a)/2,g.$1(v))},
zf(d,e,f,g,h,i,j,k){var w=x.S
return new A.a5d(d,e,f,g,h,i,j,k,C.a([],x._),C.a([0,0,0],x.t),C.aY(w),C.U(w,x.i),C.U(w,x.cR),C.U(w,w),C.U(w,x.gh),C.U(w,x.N),C.a([],x.cX),C.aY(w),C.aY(w))},
aW4(d){var w=new A.aW3(d)
w.c7x()
return w},
hEO(d){var w=new A.aW3(7)
w.bz6(d)
return w},
iiN(d){var w,v=d.c
A:{if("bedroom"===v){w=1
break A}if("kitchen"===v||"bathroom"===v){w=2
break A}w=0
break A}return w},
mb:function mb(d,e,f,g){var _=this
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
E3:function E3(d,e,f){this.a=d
this.b=e
this.c=f},
pO:function pO(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fvf:function fvf(d){this.a=d},
fvg:function fvg(){},
abD:function abD(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fWt:function fWt(){},
fWq:function fWq(){},
fWr:function fWr(){},
fWs:function fWs(d){this.a=d},
oj:function oj(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aVY:function aVY(d,e,f){this.a=d
this.b=e
this.c=f},
a5d:function a5d(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v){var _=this
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
bTH:function bTH(){},
bTG:function bTG(){},
aW3:function aW3(d){var _=this
_.a=""
_.b=d
_.c=!1
_.d=$
_.e=0},
bUh:function bUh(){},
bUi:function bUi(){},
bUj:function bUj(d){this.a=d},
bUk:function bUk(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bUl:function bUl(d,e){this.a=d
this.b=e},
bUp:function bUp(d){this.a=d},
bUm:function bUm(d,e){this.a=d
this.b=e},
bUo:function bUo(d,e,f){this.a=d
this.b=e
this.c=f},
bUn:function bUn(d,e,f){this.a=d
this.b=e
this.c=f},
bUt:function bUt(){},
bUs:function bUs(){},
bUr:function bUr(){},
bUq:function bUq(){},
b0v(d,e,f){return new A.IS(!1,d,e,null)},
hr5(d){var w=A.vw(B.iq,d.e*3.141592653589793/2)
return new C.z(w.a,w.c)},
i5n(b3,b4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8=null,a9="A helicopter with its billboard",b0={},b1=C.a([],x.dI),b2=x.o
b0.a=C.a([],b2)
b0.b=C.a([],b2)
b0.c=C.a([],x.s)
b0.d=!1
w=new A.fvO(b0,b1)
v=new A.fvV(b0)
u=new A.fvQ(b3)
t=new A.fvW(b3)
s=new A.fvG(new A.fvP(t),new A.fvM(t,u))
r=new A.fvS(b0,u,s,v)
q=new A.fvT(b0,new A.fvU(r),s)
p=new A.fvR(b0,w,b1)
b2=D.d.t(B.dh0,b4)
o=!b2
n=x._
m=C.a([],n)
for(l=b3.x,k=l.length,j=0;j<l.length;l.length===k||(0,C.M)(l),++j){i=l[j]
h=i.b
if(h==="billboard"||h==="cornersign"||h==="adboard"||h==="tower"||h==="hq")m.push(i)}k=C.T(l).k("Z<1>")
g=new C.Z(l,new A.fvH(),k)
h=C.a([],n)
for(f=l.length,j=0;j<l.length;l.length===f||(0,C.M)(l),++j){i=l[j]
e=i.b
if(e==="house2"||e==="bighouse")h.push(i)}v.$3$note(B.fXM,B.fWR,"Welcome to NGMY Town")
if(!g.gan(0))q.$1(g.gI(0))
if(b4==="city"||o){v.$2(B.hau,B.h9R)
v.$2(B.haz,B.h9Q)
v.$2(B.fXc,B.fVR)
v.$2(B.h1N,B.fZx)
v.$2(B.h1I,B.fZy)
v.$2(B.fXw,B.fVT)
w.$1$speed(200)}if(b4==="billboards"||o){d={}
v.$2(B.hab,B.ha6)
v.$3$note(B.fX2,B.An,"The big NGMY logo board: New Global Movement for Youth")
v.$2(B.fZg,B.An)
v.$2(B.h_4,B.An)
v.$2(B.fY1,B.An)
v.$2(B.h9G,B.An)
v.$2(B.h9Y,B.An)
v.$2(B.h9z,B.h9S)
d.a=!g.gaf(0).C()?B.fVS:new A.q(g.gI(0).c,0,g.gI(0).d)
a0=C.C(m,x.eB)
a1=0
for(;;){if(a0.length!==0)m=a1<(o?8:80)
else m=!1
if(!m)break
D.d.aY(a0,new A.fvI(d))
i=D.d.cE(a0,0)
q.$1(i)
d.a=new A.q(i.c,0,i.d);++a1}w.$1$speed(105)
for(a2=0;a2<2;++a2)b1.push(new A.Mk(B.rG,B.rG,130,6,a9,a8,!1,a8,a2))}if(b4==="edges"){n=C.a([],n)
for(m=l.length,j=0;j<l.length;l.length===m||(0,C.M)(l),++j){i=l[j]
f=i.b
if(f==="adboard"||f==="cornersign")n.push(i)}D.d.aY(n,new A.fvJ(new A.fvF()))
for(m=n.length,j=0;j<n.length;n.length===m||(0,C.M)(n),++j){i=n[j]
f=b0.a
if(f.length>1){a3=D.d.gak(f)
f=i.c
e=i.d
v.$2(new A.q((a3.a+f)/2,430,(a3.c+e)/2),new A.q(f,100,e))}q.$1(i)}w.$1$speed(150)}if(b4==="houses"||o){a2=0
for(;;){n=h.length
if(a2<n)m=a2<(o?2:5)
else m=!1
if(!m)break
i=h[(a2*5+1)%n]
r.$7$note(i,150,50,270,330,70,i.b==="bighouse"?"A big house with TV windows":"A house");++a2}a4=new C.Z(h,new A.fvK(),x.am)
if(!a4.gan(0)){i=a4.gI(0)
a5=A.hr5(i)
n=i.c
m=i.d
v.$2(new A.q(n+a5.a*220,110,m+a5.b*220),new A.q(n,45,m))
p.$1(i)}}if(b4==="hospital"||o)for(j=0;j<3;++j){a6=B.di9[j]
i=new C.Z(l,new A.fvL(a6),k)
if(!i.gaf(0).C())continue
a7=i.gaf(0)
if(!a7.C())C.b8(C.fs())
r.$7$note(a7.gR(0),160,50,300,360,60,"The "+a6)
a7=i.gaf(0)
if(!a7.C())C.b8(C.fs())
p.$1(a7.gR(0))}w.$0()
if(b4==="traffic"||o){if(b2){for(a2=0;a2<2;++a2)b1.push(new A.Mk(B.rG,B.rG,130,6,a9,a8,!1,a8,a2))
o=!1}a2=0
for(;;){if(a2<4)b2=a2<(o?2:4)
else b2=!1
if(!b2)break
b1.push(new A.Mk(B.rG,B.rG,130,6,B.kl[a2].a==="bus"?"A self-driving bus with its billboards":"A self-driving police car",a8,!1,a2,a8));++a2}}return b1},
IS:function IS(d,e,f,g){var _=this
_.d=d
_.f=e
_.r=f
_.a=g},
aEp:function aEp(d,e,f,g,h,i,j,k,l,m,n,o,p,q){var _=this
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
_.bj=k
_.b8=!1
_.a_=l
_.aA=null
_.aE=0
_.aL=!1
_.b1=_.aC=null
_.bL=_.be=_.b0=0
_.aJ=null
_.bi=!1
_.bG=null
_.c8=0
_.c5=m
_.cL=null
_.cl=n
_.P=_.bB=null
_.S=0
_.bJ=o
_.bv=null
_.bX=0
_.f1=_.eu=_.ej=!1
_.ab=1
_.ez=400
_.ai=_.fw=!1
_.bC=_.al=null
_.bZ=0
_.du=""
_.cJ=null
_.eK=p
_.hL=_.hK=0
_.je=-1
_.iM=q
_.h5=!1
_.mI=_.ld=-1e5
_.ly=0
_.c=_.a=_.qQ=_.t4=null},
ec5:function ec5(){},
ec2:function ec2(d){this.a=d},
ec3:function ec3(d){this.a=d},
ec1:function ec1(){},
ec4:function ec4(d){this.a=d},
eaQ:function eaQ(d,e,f){this.a=d
this.b=e
this.c=f},
eaR:function eaR(d){this.a=d},
eaP:function eaP(d){this.a=d},
eaS:function eaS(d,e){this.a=d
this.b=e},
e9o:function e9o(d,e){this.a=d
this.b=e},
ebi:function ebi(d){this.a=d},
eal:function eal(d){this.a=d},
eam:function eam(d,e){this.a=d
this.b=e},
ean:function ean(d,e){this.a=d
this.b=e},
eao:function eao(d,e){this.a=d
this.b=e},
eap:function eap(d){this.a=d},
e8S:function e8S(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e8Q:function e8Q(d,e,f){this.a=d
this.b=e
this.c=f},
e8P:function e8P(d,e){this.a=d
this.b=e},
e8R:function e8R(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e8N:function e8N(d,e){this.a=d
this.b=e},
e8O:function e8O(d,e,f){this.a=d
this.b=e
this.c=f},
e8M:function e8M(d,e){this.a=d
this.b=e},
e90:function e90(d){this.a=d},
e91:function e91(d){this.a=d},
e92:function e92(d){this.a=d},
eae:function eae(d){this.a=d},
eag:function eag(d){this.a=d},
eaf:function eaf(d){this.a=d},
eah:function eah(d){this.a=d},
ead:function ead(d){this.a=d},
eai:function eai(d){this.a=d},
eac:function eac(d){this.a=d},
eaj:function eaj(d){this.a=d},
eab:function eab(d){this.a=d},
eak:function eak(d){this.a=d},
eaa:function eaa(d){this.a=d},
e8s:function e8s(d){this.a=d},
e8t:function e8t(d){this.a=d},
e9c:function e9c(d){this.a=d},
e9e:function e9e(d){this.a=d},
e9d:function e9d(d){this.a=d},
e9f:function e9f(d){this.a=d},
e9b:function e9b(d){this.a=d},
e9g:function e9g(d){this.a=d},
e9a:function e9a(d){this.a=d},
e9h:function e9h(d){this.a=d},
e99:function e99(d){this.a=d},
e9i:function e9i(d){this.a=d},
e98:function e98(d){this.a=d},
e9j:function e9j(d){this.a=d},
e97:function e97(d){this.a=d},
e9k:function e9k(d){this.a=d},
e96:function e96(d){this.a=d},
ebg:function ebg(){},
ebh:function ebh(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
ebe:function ebe(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ebd:function ebd(d){this.a=d},
ebf:function ebf(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e9C:function e9C(d){this.a=d},
e7r:function e7r(){},
ebJ:function ebJ(){},
e7S:function e7S(){},
e9x:function e9x(d){this.a=d},
e9w:function e9w(d){this.a=d},
e9y:function e9y(d){this.a=d},
e9v:function e9v(d){this.a=d},
ebK:function ebK(d,e){this.a=d
this.b=e},
ebI:function ebI(d){this.a=d},
eaW:function eaW(d,e,f){this.a=d
this.b=e
this.c=f},
eaX:function eaX(d,e){this.a=d
this.b=e},
eaV:function eaV(d,e){this.a=d
this.b=e},
eaU:function eaU(d){this.a=d},
eaT:function eaT(d){this.a=d},
e9W:function e9W(){},
e9X:function e9X(){},
e9T:function e9T(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
e9V:function e9V(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e9U:function e9U(d){this.a=d},
e9R:function e9R(d){this.a=d},
e9Q:function e9Q(d){this.a=d},
e9S:function e9S(d,e){this.a=d
this.b=e},
e9P:function e9P(d,e){this.a=d
this.b=e},
e9l:function e9l(d){this.a=d},
e9m:function e9m(d){this.a=d},
eaM:function eaM(){},
e8Z:function e8Z(d){this.a=d},
e8Y:function e8Y(d){this.a=d},
e9_:function e9_(d,e){this.a=d
this.b=e},
e8L:function e8L(d){this.a=d},
e9D:function e9D(){},
eaY:function eaY(d,e){this.a=d
this.b=e},
e8X:function e8X(){},
eb8:function eb8(d){this.a=d},
e8V:function e8V(d){this.a=d},
e8W:function e8W(d,e){this.a=d
this.b=e},
e8U:function e8U(d){this.a=d},
e8T:function e8T(d){this.a=d},
e9s:function e9s(){},
eb7:function eb7(d,e){this.a=d
this.b=e},
ebX:function ebX(){},
e8u:function e8u(){},
e9p:function e9p(d,e){this.a=d
this.b=e},
e9q:function e9q(d){this.a=d},
e9r:function e9r(){},
e94:function e94(){},
e95:function e95(d){this.a=d},
e9F:function e9F(){},
e9G:function e9G(d,e){this.a=d
this.b=e},
e7Z:function e7Z(){},
e7Y:function e7Y(){},
e8_:function e8_(d){this.a=d},
e7X:function e7X(d){this.a=d},
e80:function e80(d){this.a=d},
e7W:function e7W(d){this.a=d},
e81:function e81(d,e){this.a=d
this.b=e},
e7V:function e7V(d){this.a=d},
e82:function e82(d,e){this.a=d
this.b=e},
e7U:function e7U(d,e){this.a=d
this.b=e},
e83:function e83(d){this.a=d},
e7T:function e7T(d){this.a=d},
e8q:function e8q(d){this.a=d},
e8r:function e8r(d){this.a=d},
eaL:function eaL(d,e,f){this.a=d
this.b=e
this.c=f},
eaJ:function eaJ(d,e,f){this.a=d
this.b=e
this.c=f},
eaK:function eaK(d,e){this.a=d
this.b=e},
eaF:function eaF(d,e,f){this.a=d
this.b=e
this.c=f},
eaE:function eaE(){},
eaG:function eaG(d,e){this.a=d
this.b=e},
eaH:function eaH(d,e){this.a=d
this.b=e},
eaI:function eaI(d,e){this.a=d
this.b=e},
eav:function eav(d,e){this.a=d
this.b=e},
eas:function eas(){},
eat:function eat(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ear:function ear(d,e,f){this.a=d
this.b=e
this.c=f},
eau:function eau(d,e,f){this.a=d
this.b=e
this.c=f},
eaq:function eaq(d,e){this.a=d
this.b=e},
ebH:function ebH(d){this.a=d},
ebF:function ebF(d){this.a=d},
ebG:function ebG(d,e){this.a=d
this.b=e},
ebx:function ebx(d,e,f){this.a=d
this.b=e
this.c=f},
ebw:function ebw(){},
eby:function eby(){},
ebz:function ebz(d,e){this.a=d
this.b=e},
ebA:function ebA(d,e){this.a=d
this.b=e},
ebB:function ebB(d){this.a=d},
ebC:function ebC(d){this.a=d},
ebD:function ebD(d){this.a=d},
ebE:function ebE(d){this.a=d},
ebt:function ebt(d){this.a=d},
ebr:function ebr(d){this.a=d},
ebs:function ebs(){},
ebn:function ebn(d,e,f){this.a=d
this.b=e
this.c=f},
ebl:function ebl(d){this.a=d},
ebm:function ebm(){},
ebo:function ebo(d,e,f){this.a=d
this.b=e
this.c=f},
ebk:function ebk(d,e){this.a=d
this.b=e},
ebp:function ebp(d,e){this.a=d
this.b=e},
ebq:function ebq(d,e){this.a=d
this.b=e},
eb4:function eb4(d,e){this.a=d
this.b=e},
eb5:function eb5(d){this.a=d},
eb6:function eb6(){},
ebu:function ebu(d,e){this.a=d
this.b=e},
ebj:function ebj(d,e){this.a=d
this.b=e},
ebb:function ebb(d){this.a=d},
ebc:function ebc(){},
eb3:function eb3(){},
eba:function eba(){},
ebS:function ebS(d){this.a=d},
ebT:function ebT(d){this.a=d},
ebU:function ebU(d){this.a=d},
ebV:function ebV(){},
ebL:function ebL(d){this.a=d},
ebM:function ebM(d){this.a=d},
ebN:function ebN(d,e){this.a=d
this.b=e},
ebO:function ebO(d,e){this.a=d
this.b=e},
ebP:function ebP(d,e){this.a=d
this.b=e},
ebQ:function ebQ(d,e){this.a=d
this.b=e},
ebR:function ebR(d,e){this.a=d
this.b=e},
e93:function e93(){},
e9K:function e9K(d){this.a=d},
e9H:function e9H(){},
e9I:function e9I(){},
e9J:function e9J(){},
e9t:function e9t(){},
e9u:function e9u(d){this.a=d},
eaZ:function eaZ(){},
e9n:function e9n(d){this.a=d},
eaN:function eaN(){},
eaO:function eaO(d){this.a=d},
eb_:function eb_(d){this.a=d},
eb0:function eb0(d){this.a=d},
e9A:function e9A(d){this.a=d},
e9z:function e9z(d){this.a=d},
e9B:function e9B(d){this.a=d},
eb1:function eb1(d){this.a=d},
eb2:function eb2(){},
eb9:function eb9(d){this.a=d},
e9Z:function e9Z(){},
ea_:function ea_(d){this.a=d},
ea7:function ea7(d){this.a=d},
ea8:function ea8(){},
ea9:function ea9(d){this.a=d},
ea1:function ea1(d){this.a=d},
ea2:function ea2(d,e){this.a=d
this.b=e},
ea0:function ea0(d,e){this.a=d
this.b=e},
ea3:function ea3(d,e){this.a=d
this.b=e},
ea6:function ea6(d){this.a=d},
ea4:function ea4(d){this.a=d},
e9Y:function e9Y(d){this.a=d},
ea5:function ea5(d){this.a=d},
e9L:function e9L(d){this.a=d},
e9M:function e9M(d){this.a=d},
ebW:function ebW(d){this.a=d},
e9O:function e9O(d){this.a=d},
e9N:function e9N(d){this.a=d},
e7q:function e7q(d){this.a=d},
e7p:function e7p(d,e,f){this.a=d
this.b=e
this.c=f},
e7k:function e7k(){},
e7l:function e7l(){},
e7m:function e7m(d){this.a=d},
e7n:function e7n(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e9E:function e9E(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
ebv:function ebv(d,e){this.a=d
this.b=e},
eaC:function eaC(d,e){this.a=d
this.b=e},
eaD:function eaD(d,e){this.a=d
this.b=e},
e7o:function e7o(d,e){this.a=d
this.b=e},
e8A:function e8A(d){this.a=d},
e8B:function e8B(d){this.a=d},
e8C:function e8C(d){this.a=d},
e8D:function e8D(d){this.a=d},
e8E:function e8E(d,e){this.a=d
this.b=e},
e8F:function e8F(d){this.a=d},
e8z:function e8z(d){this.a=d},
e8G:function e8G(d,e){this.a=d
this.b=e},
e8y:function e8y(d,e){this.a=d
this.b=e},
e8H:function e8H(d,e){this.a=d
this.b=e},
e8x:function e8x(d,e){this.a=d
this.b=e},
e8I:function e8I(d){this.a=d},
e8w:function e8w(d){this.a=d},
e8J:function e8J(d,e){this.a=d
this.b=e},
e8v:function e8v(d,e){this.a=d
this.b=e},
e8K:function e8K(d,e){this.a=d
this.b=e},
ebZ:function ebZ(d){this.a=d},
ec0:function ec0(d){this.a=d},
ebY:function ebY(d){this.a=d},
ec_:function ec_(d){this.a=d},
e8c:function e8c(d){this.a=d},
e8d:function e8d(d){this.a=d},
e8e:function e8e(d){this.a=d},
e8i:function e8i(d){this.a=d},
e8j:function e8j(d){this.a=d},
e8k:function e8k(d){this.a=d},
e8b:function e8b(d){this.a=d},
e8l:function e8l(d){this.a=d},
e8a:function e8a(d){this.a=d},
e8m:function e8m(d){this.a=d},
e89:function e89(d){this.a=d},
e8n:function e8n(d){this.a=d},
e8o:function e8o(d){this.a=d},
e88:function e88(d){this.a=d},
e8p:function e8p(d){this.a=d},
e87:function e87(d){this.a=d},
e8f:function e8f(d){this.a=d},
e86:function e86(d){this.a=d},
e8g:function e8g(d){this.a=d},
e85:function e85(d){this.a=d},
e8h:function e8h(d){this.a=d},
e84:function e84(d){this.a=d},
e7x:function e7x(d){this.a=d},
e7L:function e7L(d){this.a=d},
e7K:function e7K(){},
e7y:function e7y(d){this.a=d},
e7z:function e7z(d){this.a=d},
e7M:function e7M(){},
e7C:function e7C(d,e){this.a=d
this.b=e},
e7N:function e7N(d){this.a=d},
e7w:function e7w(d){this.a=d},
e7O:function e7O(d){this.a=d},
e7P:function e7P(d){this.a=d},
e7v:function e7v(d){this.a=d},
e7Q:function e7Q(d){this.a=d},
e7R:function e7R(d){this.a=d},
e7A:function e7A(d){this.a=d},
e7u:function e7u(d){this.a=d},
e7B:function e7B(d){this.a=d},
e7t:function e7t(d){this.a=d},
e7D:function e7D(d){this.a=d},
e7E:function e7E(d){this.a=d},
e7F:function e7F(d){this.a=d},
e7G:function e7G(d){this.a=d},
e7H:function e7H(d){this.a=d},
e7I:function e7I(d){this.a=d},
e7J:function e7J(d){this.a=d},
e7s:function e7s(){},
eaB:function eaB(d){this.a=d},
eay:function eay(d,e,f){this.a=d
this.b=e
this.c=f},
eaz:function eaz(d,e){this.a=d
this.b=e},
eax:function eax(d){this.a=d},
eaA:function eaA(d,e){this.a=d
this.b=e},
eaw:function eaw(d){this.a=d},
bjo:function bjo(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
duo:function duo(d,e){this.a=d
this.b=e},
biO:function biO(d,e){this.b=d
this.a=e},
aIE:function aIE(d,e){this.c=d
this.a=e},
btj:function btj(){this.c=this.a=this.d=null},
f3B:function f3B(d,e){this.a=d
this.b=e},
f3A:function f3A(d){this.a=d},
f3D:function f3D(d){this.a=d},
f3E:function f3E(d){this.a=d},
f3F:function f3F(d){this.a=d},
f3C:function f3C(d){this.a=d},
eZ8:function eZ8(d,e,f){var _=this
_.a=d
_.b=e
_.c=f
_.d=0
_.e=1
_.f=3
_.r=0
_.w=112
_.x=!1},
Mk:function Mk(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
Qg:function Qg(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fvO:function fvO(d,e){this.a=d
this.b=e},
fvV:function fvV(d){this.a=d},
fvQ:function fvQ(d){this.a=d},
fvW:function fvW(d){this.a=d},
fvP:function fvP(d){this.a=d},
fvM:function fvM(d,e){this.a=d
this.b=e},
fvN:function fvN(d,e){this.a=d
this.b=e},
fvG:function fvG(d,e){this.a=d
this.b=e},
fvS:function fvS(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fvU:function fvU(d){this.a=d},
fvT:function fvT(d,e,f){this.a=d
this.b=e
this.c=f},
fvR:function fvR(d,e,f){this.a=d
this.b=e
this.c=f},
fvH:function fvH(){},
fvI:function fvI(d){this.a=d},
fvF:function fvF(){},
fvJ:function fvJ(d){this.a=d},
fvK:function fvK(){},
fvL:function fvL(d){this.a=d},
hgI(){var w=$.hgH
return w==null?$.hgH=new A.cfI().$0():w},
ifF(d,e,f){var w,v,u,t,s,r,q,p,o,n=null,m=e.a,l=e.b,k=new C.a3(0,0,0+m,0+l),j=C.bt(k,D.ip)
$.S()
w=C.I()
w.sam(B.c4z.aB(0,k))
d.az(j,w)
v=C.I()
v.b=D.aa
v.r=F.fz.gp(0)
v.c=l*0.025
w=l*0.05
j=l*0.08
d.az(C.bt(k.cq(-w),new C.aQ(j,j)),v)
w=C.bt(k.cq(-(l*0.1)),new C.aQ(w,w))
v.c=l*0.01
d.az(w,v)
u=new C.t(m/2,l/2)
t=l*0.36
l=C.I()
l.r=G.agF.gp(0)
d.ad(u,t*1.1,l)
l=C.I()
l.r=F.fz.gp(0)
d.ad(u,t,l)
l=C.I()
l.r=B.EZ.gp(0)
d.ad(u,t*0.9,l)
l=C.I()
l.b=D.aa
l.r=E.jK.gp(0)
l.c=t*0.04
d.ad(u,t*0.95,l)
s=$.W5
r=C.bJ(u,t*1.2,t*1.5)
if(s!=null){m=s.c
l=s.d
q=Math.min((r.c-r.a)/m,(r.d-r.b)/l)
p=C.bJ(r.gbK(),l*q,m*q)
j=C.I()
j.Q=D.cg
d.ox(s,new C.a3(0,0,m,l),p,j)}else{o=C.fu(n,n,n,n,C.cS(n,n,n,n,n,n,n,n,n,C.l(n,n,E.jK,n,n,n,n,n,n,n,n,t*0.6,n,n,D.u,n,n,!0,n,n,n,n,n,n,n,n),"NGMY"),D.a3,D.bZ,n,D.dA,D.bW)
o.el()
m=o.b
l=m.c
m=m.a.c
o.a3(d,u.aF(0,new C.t(l/2,m.gbb(m)/2)))}},
huK(d,e,f){var w,v,u,t,s,r,q,p,o=null,n=e.ei(D.I),m=e.gdC()/2
$.S()
w=C.I()
w.r=F.fz.gp(0)
d.ad(n,m,w)
w=C.I()
w.r=B.EZ.gp(0)
d.ad(n,m*0.9,w)
w=C.I()
w.b=D.aa
w.r=E.jK.gp(0)
w.c=m*0.04
d.ad(n,m*0.93,w)
v=$.W5
u=C.bJ(n,m*1.2,m*1.5)
if(v!=null){w=v.c
t=v.d
s=Math.min((u.c-u.a)/w,(u.d-u.b)/t)
r=C.bJ(u.gbK(),t*s,w*s)
q=C.I()
q.Q=D.cg
d.ox(v,new C.a3(0,0,w,t),r,q)}else{p=C.fu(o,o,o,o,C.cS(o,o,o,o,o,o,o,o,o,C.l(o,o,E.jK,o,o,o,o,o,o,o,o,m*0.6,o,o,D.u,o,o,!0,o,o,o,o,o,o,o,o),"NGMY"),D.a3,D.bZ,o,D.dA,D.bW)
p.el()
w=p.b
t=w.c
w=w.a.c
p.a3(d,n.aF(0,new C.t(t/2,w.gbb(w)/2)))}},
H1(d,e,f,g,h){var w,v,u,t,s,r,q,p,o,n,m=null,l=e.a,k=e.b,j=new C.a3(0,0,0+l,0+k),i=e.gdC()*0.08
i=C.bt(j,new C.aQ(i,i))
$.S()
w=C.I()
w.sam(B.aqN.aB(0,j))
d.az(i,w)
w=j.cq(-(e.gdC()*0.045))
i=e.gdC()*0.06
i=C.bt(w,new C.aQ(i,i))
w=C.I()
w.b=D.aa
w.r=F.fz.gp(0)
w.c=e.gdC()*0.035
d.az(i,w)
v=k*0.33
u=new C.t(k*0.6,k*0.5)
w=C.I()
w.r=F.fz.gp(0)
d.ad(u,v,w)
w=C.I()
w.r=B.EZ.gp(0)
d.ad(u,v*0.88,w)
t=$.W5
s=C.bJ(u,v*1.15,v*1.4)
if(t!=null){i=t.c
w=t.d
r=Math.min((s.c-s.a)/i,(s.d-s.b)/w)
q=C.bJ(s.gbK(),w*r,i*r)
p=C.I()
p.Q=D.cg
d.ox(t,new C.a3(0,0,i,w),q,p)}else{o=C.fu(m,m,m,m,C.cS(m,m,m,m,m,m,m,m,m,C.l(m,m,E.jK,m,m,m,m,m,m,m,m,v*0.55,m,m,D.u,m,m,!0,m,m,m,m,m,m,m,m),"NGMY"),D.a3,D.bZ,m,D.dA,D.bW)
o.el()
i=o.b
w=i.c
i=i.a.c
o.a3(d,u.aF(0,new C.t(w/2,i.gbb(i)/2)))}n=k*1.08
l=new A.fN6(l-n-k*0.2,d,n)
l.$4(g,k*0.36,D.c,k*0.16)
l.$4(h,k*0.14,F.fz,k*0.62)},
hqp(d){return 210+D.o.F(d.l(),5)*24},
fN2(d,e,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k="NEW GLOBAL",j="MOVEMENT",i="FOR YOUTH",h=e.a,g=e.b,f=new C.a3(0,0,0+h,0+g)
A:{if(0===a1){w=B.aqN
break A}if(1===a1){w=B.c4o
break A}w=B.c2r
break A}v=e.gdC()*0.06
v=C.bt(f,new C.aQ(v,v))
$.S()
u=C.I()
u.sam(w.aB(0,f))
d.az(v,u)
t=C.I()
t.b=D.aa
w=a1===2
t.r=(w?E.jK:F.fz).gp(0)
t.c=e.gdC()*0.04
v=f.cq(-(e.gdC()*0.05))
u=e.gdC()*0.05
d.az(C.bt(v,new C.aQ(u,u)),t)
u=f.cq(-(e.gdC()*0.1))
v=e.gdC()*0.03
v=C.bt(u,new C.aQ(v,v))
t.c=e.gdC()*0.012
d.az(v,t)
if(a1===1)s=E.jK
else s=w?E.jK:D.c
w=new A.fN4($.W5,d,s)
v=new A.fN3(s,e,d)
u=g*0.4
r=g*0.12
if(a1===0){q=g*0.5
p=new C.t(g*0.62,q)
o=C.I()
o.r=F.fz.gp(0)
d.ad(p,g*0.34,o)
o=C.I()
o.r=B.EZ.gp(0)
d.ad(p,g*0.3,o)
w.$1(C.bJ(p,u,q))
n=g*1.04
m=h-r
r=new A.fN5(e)
h=r.$1(k)
q=r.$1(j)
r=r.$1(i)
r=Math.max(C.jV(q),C.jV(r))
l=(n+m)/2
r=g*0.16*Math.min(1,(m-n)/Math.max(C.jV(h),r))
v.$3(k,new C.t(l,g*0.2),r)
v.$3(j,new C.t(l,u),r)
v.$3(i,new C.t(l,g*0.6),r)}else{q=h/2
w.$1(C.bJ(new C.t(q,g*0.42),u,h*0.6))
v.$3("NGMY",new C.t(q,g*0.68),r)
v.$4$w(i,new C.t(q,g*0.82),g*0.06,D.P)}},
hqH(f8,f9,g0,g1,g2,g3,g4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1,e2,e3,e4,e5,e6,e7,e8,e9,f0,f1,f2,f3="walls",f4="GFCI outlet",f5="Wall outlet",f6="\ud83d\udeb0 Needs plumbing",f7=f8.c
if(f7==="outside")return A.i0l(f8,g2,g1,g4,g3,g0)
f8.cIu()
w=x.z
v=C.a([],w)
u=new A.fk(v)
t=C.U(x.S,x.q)
s=C.a([],x.E)
r=C.a([],x.a)
q=f8.gex(0)
p=f8.gho(0)
o=C.a([],x.O)
for(n=f8.z,m=n.length,l=0;l<n.length;n.length===m||(0,C.M)(n),++l)o.push(B.az2[n[l]])
k=B.ayL[f8.Q]
j=new A.fwb(g1)
u.f=-1
u.b=j.$2("floor",310)
i=$.dS+1
u.x=$.dS=i
n=p/2
m=q+2.4
h=p+2
g=k.b
f=k.c
e=f==="tile"
if(e)d=0.35
else d=f==="wood"?0.15:0
u.n8(new A.q(0,-0.6,n),new A.q(m,1.2,h),g,d,3)
t.n(0,310,new A.cW("Floor","The "+k.a.toLowerCase()+" floor.",new A.q(0,0,n),140))
u.b=0
if(f==="wood")for(f=-q/2,a0=1;a0<8;++a0){e=C.ar(g,D.w,0.25)
e.toString
u.aO(new A.q(f+a0*q/8,0.05,n),new A.q(0.3,0.2,p),e)}else if(e)for(g=-q/2,a0=1;a0<6;++a0){u.aO(new A.q(g+a0*q/6,0.05,n),new A.q(0.3,0.2,p),B.ael)
u.aO(new A.q(0,0.05,a0*p/6),new A.q(q,0.2,0.3),B.ael)}u.x=0
g=f7==="hall"
if(g){a1=Math.min(q*0.5,p*1.5)
a2=p-14
f=-a1/2
e=a1/2
r.push(new A.fO(C.a([new A.q(f,0.5,14),new A.q(e,0.5,14),new A.q(e,0.5,a2),new A.q(f,0.5,a2)],x.o),0,A.huw(),900,900*(a2-14)/a1,60,-1,i,!1))}u.f=0
u.b=j.$2(f3,300)
a3=u.x=$.dS=$.dS+1
u.hn(new A.q(0,65,-0.6),new A.q(m,130,1.2),o[0],3)
u.x=0
u.b=j.$2(f3,301)
a4=u.x=$.dS=$.dS+1
f=-q
e=f/2
u.hn(new A.q(e-0.6,65,n),new A.q(1.2,130,p),o[1],3)
u.x=0
u.b=j.$2(f3,302)
a5=u.x=$.dS=$.dS+1
d=q/2
u.hn(new A.q(d+0.6,65,n),new A.q(1.2,130,p),o[2],3)
u.x=0
t.n(0,300,B.ebl)
t.n(0,301,B.ebp)
t.n(0,302,B.eby)
if(f9){u.b=0
u.hn(new A.q(0,65,p+0.6),new A.q(m,130,1.2),o[0],3)}u.f=u.b=0
u.x=a3
u.aZ(new A.q(0,2.5,0.4),new A.q(q,5,0.8),B.kA,0.1)
u.x=a4
u.aZ(new A.q(e+0.4,2.5,n),new A.q(0.8,5,p),B.kA,0.1)
u.x=a5
u.aZ(new A.q(d-0.4,2.5,n),new A.q(0.8,5,p),B.kA,0.1)
u.x=0
u.f=f9?0:3
u.b=j.$2("ceiling",320)
if(f9)o=1
else o=g1==="ceiling"?0.6:0.4
u.d=o
u.hn(new A.q(0,130.6,n),new A.q(m,1.2,h),B.axy[f8.as],2)
u.d=1
u.b=u.f=0
u.x=a3
u.aZ(new A.q(0,128,1),new A.q(q,3,1.4),D.c,0.2)
u.x=a4
u.aZ(new A.q(e+1,128,n),new A.q(1.4,3,p),D.c,0.2)
u.x=a5
u.aZ(new A.q(d-1,128,n),new A.q(1.4,3,p),D.c,0.2)
u.x=0
t.n(0,320,new A.cW("Ceiling","Pick a colour above to paint the ceiling.",new A.q(0,130,n),140))
h=f8.w
a6=D.d.b3(h,new A.fvY())?"left":"right"
if(!g){o=new A.fw8()
a7=p*0.55
if(f9)D.d.v(v,A.nx(o.$0(),0,3.141592653589793,new A.q(0,0,p+0.2)))
D.d.v(v,a6==="right"?A.nx(o.$0(),0,-1.5707963267948966,new A.q(d,0,a7)):A.nx(o.$0(),0,1.5707963267948966,new A.q(e,0,a7)))}for(o=f8.ax,m=f8.at,a0=0;a0<h.length;++a0){a8=h[a0]
if(a8.a)continue
a9=o.h(0,a0)
if(a9==null)a9=m.t(0,a0)?1.25:0
b0=C.a([],w)
b1=new A.fk(b0)
b1.f=1
b1.x=$.dS=$.dS+1
b2=b1.b=600+a0
b1.aO(B.h7g,B.h7_,B.kA)
b3=C.a([],w)
b4=new A.fk(b3)
b4.r=!0
b4.b=b2
if(a9>0.04){b1.b=0
b5=A.hYm(a8.d)
b6=b5.a
b1.aO(B.h5s,B.h2_,b6)
b1.aO(B.h6x,B.hd_,b5.b)
b7=C.ar(b6,D.w,0.25)
b7.toString
b1.aO(B.h5E,B.haW,b7)
b8=-a9
b7=A.vw(B.hcV,b8)
b4.wo(new A.q(-12.5+b7.a,0+b7.b,1.2+b7.c),B.h0D,B.vy,0.15,b8)}else{b1.aZ(B.h5I,B.h4H,B.vy,0.15)
b1.aZ(B.h5Q,B.h6a,B.ET,0.8)
b1.aO(B.h6c,B.aWO,B.MD)
b1.aO(B.hcn,B.aWO,B.MD)}b7=new A.fw9(a8,q,p)
D.d.v(v,b7.$1(b0))
D.d.v(v,b7.$1(b3))
t.n(0,b2,new A.cW("Door","Tap the door to go through it.",B.aVe,90))}for(o=f8.x,m=o.length,l=0;l<o.length;o.length===m||(0,C.M)(o),++l){b9=o[l]
b0=b9.b
b2=B.hy.h(0,b0)
b2.toString
b3=C.a([],w)
c0=new A.fk(b3)
c0.r=!0
c0.f=b0==="rug"?1:2
b7=100+b9.a
c0.b=j.$2("furniture",b7)
A.h3i(c0,b0,B.ze[b9.f])
D.d.v(v,A.nx(A.i3e(b3,0.8),0,b9.e*3.141592653589793/2,new A.q(b9.c,0,b9.d)))
t.n(0,b7,new A.cW(b2.a,y.M,new A.q(b9.c,12,b9.d),90))}u.f=2
u.r=!0
c1=p*0.5
w=C.T(h)
o=d-10
c2=D.k.E(new C.cQ(new C.Z(h,new A.fvZ(),w.k("Z<1>")),new A.fw_(),w.k("cQ<1,K>")).cI(0,e+30,new A.fw0())+24,e+10,o)
c3=f8.go==="fan"
c4=f8.ga60()
c5=c4&&f8.gMe()&&f8.fy
u.b=703
if(c3){u.dN(new A.q(0,129.5,c1),new A.q(0,120,c1),1,B.hp,8)
u.dR(new A.q(0,120,c1),new A.q(0,113,c1),6,D.jc,0.5,14)
w=c5?B.o3:D.dv
u.dR(new A.q(0,113,c1),new A.q(0,110,c1),3.6,w,0.6,12)}else{w=c5?B.o3:D.dv
u.dR(new A.q(0,129.5,c1),new A.q(0,127,c1),7,w,0.6,16)}if(c5&&!c3){u.b=0
u.f=3
u.d=0.2
u.L5(new A.q(0,127,c1),new A.q(0,0.5,c1),36,B.o3,!1,14)
u.d=1
u.f=2}c6=c3?"Ceiling fan":"Ceiling light"
if(!c4)c7="It has no power yet. "+(f8.p4.length!==0?"Tap it to wire it.":"The room still needs wiring: use the Wiring button.")
else if(!f8.gMe())c7="It is ready: wire the wall switch to turn it on."
else{w=f8.fy?"It is on. Tap the wall switch (or tap this) to turn it off.":"It is off. Tap the wall switch (or tap this) to turn it on."
c7=w}t.n(0,703,new A.cW(c6,c7,new A.q(0,122,c1),80))
w=f7==="bathroom"
m=!w
c8=!m||f7==="kitchen"||f8.p4==="gfci"
h=f8.ganp()
b0=c8?f4:f5
b2=f8.p4.length!==0||f8.In(1)
b3=c8?f4:f5
b3=C.a([new C.ea([0,700,f/4,h,b0]),new C.ea([1,701,q/4,b2,b3])],x.az)
for(h=f8.id,a0=0;a0<h.length;++a0){f=h[a0]
b0=f.a
if(b0!=="switch"){b2=f.c
b0=b2.c>=2&&A.L7(A.t0(b0),b2).a==="ok"
b2=h[a0].a==="gfci"?"Added GFCI outlet":"Added outlet"
b3.push(new C.ea([2+a0,800+a0,f.b,b0,b2]))}}u.f=1
u.r=!1
for(f=b3.length,b0=f8.fx,l=0;l<b3.length;b3.length===f||(0,C.M)(b3),++l){b2=b3[l].a
a0=b2[0]
c9=b2[1]
d0=b2[2]
d1=b2[3]
d2=b2[4]
u.x=$.dS=$.dS+1
u.b=c9
u.e=0.4
u.d=0.55
d3=2
if(!d1)if(a0<2){b2=f8.p4
if(b2.length!==0)b2=d3
else{b2=f8.CW
if(b2!=null)b2=b2.bhY(a0)
else b2=f8.ay?0:2}d3=b2}else d3=0
if(d1)b2=D.be
else b2=d3===1?D.aC:D.aw
u.aO(new A.q(d0,14,0.25),B.h2E,b2)
u.d=1
u.e=0
b2=d1?B.Ms:D.jc
u.aZ(new A.q(d0,14,0.9),B.h7K,b2,0.25)
u.b=0
for(d4=0;d4<2;++d4)for(b2=14+F.hx[d4]*2.8,d5=0;d5<2;++d5)u.aO(new A.q(d0+B.R4[d5],b2,1.7),B.hcK,B.agC)
u.aO(new A.q(d0,14,1.7),B.h7I,D.dv)
u.x=0
if(!d1)b2="This one is not wired yet. Tap it to wire it."
else b2=b0.h(0,a0)==null?"Tap it to plug something in.":"Tap it to plug something else in, or to unplug."
t.n(0,c9,new A.cW(d2,b2,new A.q(d0,14,2),60))}f=C.a([new C.bk(702,c2,f8.gMe())],x.al)
for(a0=0;a0<h.length;++a0){b2=h[a0]
b7=b2.a
if(b7==="switch"){d6=b2.c
b7=d6.c>=2&&A.L7(A.t0(b7),d6).a==="ok"
f.push(new C.bk(800+a0,b2.b,b7))}}for(h=f.length,l=0;l<f.length;f.length===h||(0,C.M)(f),++l){b2=f[l]
d0=b2.b
d1=b2.c
u.x=$.dS=$.dS+1
c9=u.b=b2.a
u.e=0.4
u.d=0.55
d7=2
if(!d1)if(c9===702){b2=f8.p4
if(b2.length!==0)b2=d7
else{b2=f8.CW
if(b2!=null)b2=b2.bhY(3)
else b2=f8.ay?0:2}d7=b2}else d7=0
if(d1)b2=D.be
else b2=d7===1?D.aC:D.aw
u.aO(new A.q(d0,48,0.25),B.h4r,b2)
u.d=1
u.e=0
b2=d1?B.Ms:D.jc
u.aZ(new A.q(d0,48,0.9),B.h3H,b2,0.25)
u.aO(new A.q(d0,f8.fy&&d1?49.2:46.8,1.9),B.h3y,B.aio)
u.x=0
if(!d1)b2="Not wired yet. Tap it to wire it."
else if(f8.fy)b2="On. Tap to turn the "+(c3?"fan":"light")+" off."
else b2="Off. Tap to turn the "+(c3?"fan":"light")+" on."
t.n(0,c9,new A.cW("Light switch",b2,new A.q(d0,48,2),60))}if(f8.p4.length===0&&!f8.gkL()){if(f8.p4.length===0)h=f8.gkL()
else h=!0
if(h)d8=D.Y
else{h=C.a([],x.s)
if(!f8.ganp())h.push("outlet 1")
if(!(f8.p4.length!==0||f8.In(1)))h.push("outlet 2")
if(!f8.ga60())h.push(f8.go==="fan"?"ceiling fan":"ceiling light")
if(!f8.gMe())h.push("switch")
d8=h}h=d8.length===0?"\u26a1 No power: needs wiring":"\u26a1 Still to wire: "+D.d.aH(d8,", ")
s.push(new A.hf(new A.q(0,104,c1),h,D.by,0))}h=!1
if(f8.p4.length!==0)if(!f8.gz5()){h=f8.p4
h=!(h==="ptrap"||h==="faucet")}if(h)s.push(new A.hf(new A.q(0,40,14),"\ud83d\udc46 Tap the red one to wire it",D.by,0))
u.f=2
u.r=!0
for(h=b3.length,f=x.o,b2=f8.a,l=0;l<b3.length;b3.length===h||(0,C.M)(b3),++l){b7=b3[l].a
a0=b7[0]
d0=b7[2]
d1=b7[3]
d9=b0.h(0,a0)
if(d9==null||!d1)continue
e0=A.aPp(d9)
b7=u.b=720+a0
u.jh(C.a([new A.q(d0,12,1.8),new A.q(d0,6,3),new A.q(d0,2,11)],f),0.3,B.Yl,!1,0.2,6)
d6=e0.d
e1=d6<=0
if(!e1||e0.e){b8=d6*0.56
e2=$.dS+1
u.x=$.dS=e2
u.aZ(new A.q(d0,2,15),new A.q(d6*0.45,4,14),B.hp,0.3)
u.aZ(new A.q(d0,8,15),B.h25,B.hp,0.3)
e3=12+b8/2
u.aZ(new A.q(d0,e3,15),new A.q(d6,b8,3),E.Fi,0.5)
d6=(d6-3.5)/2
e4=d0-d6
e5=(b8-3.5)/2
e6=e3+e5
d6=d0+d6
e5=e3-e5
r.push(new A.fO(C.a([new A.q(e4,e6,16.6),new A.q(d6,e6,16.6),new A.q(d6,e5,16.6),new A.q(e4,e5,16.6)],f),b7,new A.fw1(a0*7+b2),320,180,9,2,e2,!0))
u.x=0}else{d6=e0.a
if(d6==="lamp"){u.dR(new A.q(d0,0,14),new A.q(d0,1,14),6,B.Xj,0.4,14)
u.dR(new A.q(d0,1,14),new A.q(d0,22,14),1,B.Br,0.5,8)
d6=f8.fy?B.o3:K.Yt
u.yP(new A.q(d0,20,14),new A.q(d0,32,14),9,d6,!1,!0,5.5,0.2,16)}else{u.aZ(new A.q(d0,9,15),B.fZ5,B.nS,0.1)
if(d6==="toaster"){u.aZ(new A.q(d0,23,15),B.fYZ,B.jH,0.8)
u.aO(new A.q(d0,28.2,15),B.h8U,B.ahQ)}else{u.BC(new A.q(d0-7,21,15),new A.q(d0+7,21,15),3.6,B.Ml,3,0.6,12)
u.aZ(new A.q(d0-8,14.5,15),B.h66,B.Ml,0.6)}}}d6=!e1||e0.e?"It is playing NGMY ads. Tap it to watch full screen with the remote.":"It is plugged in and running. Tap the outlet to unplug it or plug in something else."
t.n(0,b7,new A.cW(e0.b,d6,new A.q(d0,16,14),90))}u.f=1
u.r=!1
e7=new A.fw3(f8,u,q,r,t)
e7.$2(f8.k1,0)
if(g){e7.$2(f8.k2,1)
e7.$2(f8.k1,2)
h=f8.k2
e7.$2(h==null?f8.k1:h,3)}if(g)for(e8=p-14,h=d-14,a0=0;a0<4;++a0){e9=(D.o.F(a0,2)===0?-1:1)*h
f0=a0<2?14:e8
f1=Math.atan2(-e9,-(n-f0)*-1)
u.f=2
u.r=!1
u.x=$.dS=$.dS+1
g=19e3+a0
u.b=g
u.aO(new A.q(e9,125,f0),B.h16,D.jc)
u.wo(new A.q(e9,118,f0),B.fYe,D.bO,0.4,f1)
u.wo(new A.q(e9+Math.sin(f1)*8.5,118,f0+Math.cos(f1)*8.5),B.h24,D.av,0.6,f1)
u.ed(new A.q(e9-Math.sin(f1)*5+Math.cos(f1)*3,122,f0-Math.cos(f1)*5-Math.sin(f1)*3),1.4,D.aw,3,5)
u.b=u.x=0
t.n(0,g,new A.cW("Hall camera","Tap it and you look from here, like your eyes.",new A.q(e9,118,f0),60))}u.f=2
u.r=!0
if(!m||f7==="kitchen"){f7=f8.p4
f7=f7.length===0||f7==="ptrap"||f7==="faucet"}else f7=!1
if(f7){d1=f8.gjQ()
f7=new A.fwa(u)
if(w){f2=e+17
if(d1){u.b=710
u.BC(new A.q(6,0.5,14),new A.q(6,15,14),8,B.B8,5.6,0.8,18)
u.dR(new A.q(6,15,14),new A.q(6,16,14),9,B.Mu,0.8,18)
u.aZ(new A.q(6,21,5),B.fZh,B.B8,0.8)
u.aZ(new A.q(6,28,5),B.h5h,B.Mu,0.8)}else{u.b=710
u.d=0.3
u.f=3
u.aO(new A.q(6,14,9),B.fZ8,D.b2)
u.d=1
u.f=2
f7.$2(-4,8)}u.b=711
u.aZ(new A.q(34,14,10),B.h_x,B.nS,0.1)
u.aZ(new A.q(34,29,10),B.h_E,B.XV,0.4)
if(d1){u.dR(new A.q(34,29.3,10),new A.q(34,30.1,10),6.5,D.c,0.6,18)
u.bjO(C.a([new A.q(34,30,4),new A.q(34,36,4),new A.q(34,38,7)],f),0.6,B.jH,0.9,8)}else{f7.$2(28,18)
f7.$2(40,18)}u.b=712
if(d1){u.aZ(new A.q(f2,8,38),B.aVJ,B.YN,0.7)
u.aZ(new A.q(f2,16.2,38),B.haR,B.XG,0.8)
u.dR(new A.q(f2,30,3),new A.q(f2,52,3),0.7,B.jH,0.9,8)
u.dR(new A.q(f2,52,3),new A.q(f2,52,10),0.7,B.jH,0.9,8)}else{u.d=0.3
u.f=3
u.aO(new A.q(f2,8,38),B.aVJ,D.b2)
u.d=1
u.f=2
f7.$2(f2-4,34)
f7.$2(f2+4,34)}f7=d1?"Fitted on its flange with a wax ring, and the supply hose joins the shut-off valve.":"There is no toilet yet: only the flange and the water stub. Use the Plumbing button to fit it."
t.n(0,710,new A.cW("Toilet",f7,new A.q(6,14,10),70))
f7=d1?"The faucet, the hoses and the P-trap are fitted.":"The sink is not plumbed. Use the Plumbing button."
t.n(0,711,new A.cW("Vanity sink",f7,new A.q(34,28,10),70))
f7=d1?"The bath is in and connected.":"The bath is not connected yet."
t.n(0,712,new A.cW("Bath",f7,new A.q(f2,10,38),90))
if(!d1)s.push(new A.hf(new A.q(0,40,14),f6,D.bk,0))}else{u.b=0
u.aZ(new A.q(e+15,36,14),B.h_9,B.ago,0.6)
u.aO(new A.q(e+28.5,36,14.4),B.h7p,D.dv)
u.aZ(new A.q(o,15,14),B.fZH,B.aeO,0.1)
u.aZ(new A.q(o,31,14),B.fZS,B.hp,0.5)
u.aZ(new A.q(d-15,32.4,14),B.aW8,D.hW,0.3)
u.aZ(new A.q(d-5,32.4,14),B.aW8,D.hW,0.3)
u.b=713
u.aZ(new A.q(30,15,14),B.h0e,B.nS,0.1)
u.aZ(new A.q(30,31,14),B.h0i,B.M7,0.5)
if(d1){u.dR(new A.q(30,32.1,14),new A.q(30,32.7,14),8,B.Fc,0.8,18)
u.bjO(C.a([new A.q(30,32,5),new A.q(30,42,5),new A.q(30,44,9),new A.q(30,44,13)],f),0.7,B.jH,0.9,8)}else{f7.$2(22,18)
f7.$2(38,18)}f7=d1?"The faucet, the hoses and the drain are fitted.":"The kitchen sink is not plumbed yet. Use the Plumbing button."
t.n(0,713,new A.cW("Kitchen sink",f7,new A.q(30,30,14),70))
if(!d1)s.push(new A.hf(new A.q(30,48,14),f6,D.bk,0))}}for(f7=D.d.gaf(g3),w=new C.f5(f7,new A.fw2(f8));w.C();){o=f7.gR(0)
t.n(0,900+o.a,new A.cW(o.r,"Tap to see how they are, feed them or give medicine.",new A.q(o.c,36,o.d),90))}return new A.tM(v,t,s,r,new C.cw([e,d,0,p]),0)},
kG(d,e,f,g,h,i,j,k,l){var w=-h/2,v=i/2,u=h/2,t=-i/2
d.cWj(e.a8(0,f.aI(0,w)).a8(0,g.aI(0,v)),e.a8(0,f.aI(0,u)).a8(0,g.aI(0,v)),e.a8(0,f.aI(0,u)).a8(0,g.aI(0,t)),e.a8(0,f.aI(0,w)).a8(0,g.aI(0,t)),j,k,l)},
i0l(d6,d7,d8,d9,e0,e1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5=-158,c6=1000,c7=x.z,c8=C.a([],c7),c9=new A.fk(c8),d0=x.S,d1=C.U(d0,x.q),d2=C.a([],x.E),d3=d6.gex(0),d4=d6.gho(0),d5=new A.fp9(d8)
c9.f=0
c9.b=d5.$2("floor",310)
c9.hn(new A.q(0,-0.6,d4/2-60),new A.q(d3*2.5,1.2,d4*2.5),B.Xm,5)
d1.n(0,310,B.ebt)
c9.b=0
c9.f=1
c9.aO(new A.q(0,0.15,60),B.h3w,E.EW)
for(w=0;w<6;++w)c9.aO(new A.q(0,0.35,8+w*22),B.h7M,B.bnY)
c9.f=2
v=$.dS+1
c9.x=$.dS=v
c9.hn(B.fXF,B.fZY,B.M2,3)
c9.aO(B.fXa,B.fZZ,B.ae3)
u=new A.fpa(c9)
t=new A.fp5(c9)
for(s=0;s<4;++s){r=B.dlv[s]
u.$5(B.dX,B.hE,B.iq,r,62)
u.$5(B.dX,B.hE,B.iq,r,122)}t.$5(B.dX,B.hE,B.iq,0,600)
for(s=0;s<2;++s){r=B.aA3[s]
u.$5(B.aar,B.qN,B.td,r,62)
u.$5(B.aar,B.qN,B.td,r,122)}t.$5(B.aar,B.qN,B.td,0,0)
for(s=0;s<2;++s){q=B.a4O[s]
u.$5(B.fYo,B.td,B.hE,q,62)
u.$5(B.h9F,B.iq,B.qN,-q,62)}p=C.a([],c7)
new A.fk(p).n8(B.dX,B.h_6,B.M5,0.1,2)
c9.a6Z(B.h9v,B.h8b,B.h7o,B.M2,B.hE,!1)
c9.a6Z(B.h7u,B.h1e,B.h7Q,B.M2,B.qN,!1)
c9.x=0
c9.r=!0
D.d.v(c8,A.nx(p,0.5,0,B.fWl))
D.d.v(c8,A.nx(p,-0.5,0,B.fWm))
c9.aO(B.fWo,B.h_5,B.XR)
c9.aO(B.h1J,B.fYS,B.ahp)
c9.aO(B.h1K,B.aVu,B.q2)
c9.aO(B.fWX,B.h0J,E.EW)
c9.dN(B.h9U,B.h9V,2.2,B.kA,8)
c9.dN(B.fZJ,B.fZK,2.2,B.kA,8)
c9.aZ(B.fXO,B.h0S,B.M5,0.1)
d1.n(0,600,B.ec4)
p=x.a
o=C.a([],p)
n=new A.fp6(o,v)
n.$4(B.h3h,B.h7W,B.h8D,B.h6v)
n.$5$poster(B.h1F,B.h0s,B.h2v,B.h8r,1)
n.$5$poster(B.h4i,B.h4x,B.h2U,B.h8o,2)
n.$5$poster(B.h8y,B.hd7,B.h61,B.h7V,0)
c9.r=!0
m=C.U(d0,d0)
for(d0=d6.x,l=d0.length,s=0;s<d0.length;d0.length===l||(0,C.M)(d0),++s){k=d0[s]
j=k.a
i=100+j
if(e1.t(0,i))continue
h=k.b
if(D.d.t(B.HP,h)){d1.n(0,i,new A.cW(B.hy.h(0,h).a,"It wanders about. Move it with the arrow buttons or take it out.",new A.q(k.c,12,k.d),140))
continue}g=B.hy.h(0,h)
g.toString
f=C.a([],c7)
e=new A.fk(f)
d=e.r=!0
e.f=D.d.t(B.a4Z,h)?1:2
a0=h==="hospital"
e.b=(!a0?h==="shop":d)?i:d5.$2("furniture",i)
A.h3i(e,h,B.ze[k.f])
if(f.length!==0)m.n(0,j,D.d.gI(f).z)
D.d.v(c8,A.nx(f,0,k.e*3.141592653589793/2,new A.q(k.c,0,k.d)))
if(a0)j="The hospital: tap it to see the beds and treat the patients."
else j=h==="shop"?"The shop: tap it to buy food and medicine.":y.M
d1.n(0,i,new A.cW(g.a,j,new A.q(k.c,12,k.d),140))}a1=C.a([],x._)
for(l=D.d.gaf(d0),j=new C.f5(l,new A.fox()),i=d6.k3;j.C();){h=l.gR(0)
g=h.a
a2=i.t(0,g)
f=h.b==="pole"
d=h.c
a0=h.d
a3=f?new A.q(d+20,86,a0):new A.q(d,55,a0)
d=C.a([],c7)
a4=new A.fk(d)
a0=f?4.6:4.2
a5=a2?D.e7:B.o3
a4.fT(a3,a0,a5,3,6,a2?0.1:0)
if(!a2){a4.d=0.2
a4.fT(a3,10,B.o3,2,6,0)
a4.d=1}D.d.v(c8,d)
if(a2)d2.push(new A.hf(new A.q(a3.a+0,a3.b+14,a3.c+0),"\u26a1 Light out: tap to go and fix it",D.by,2e4+g))
if(f)a1.push(h)}D.d.aY(a1,new A.foy())
for(l=x.o,w=0;a6=w+1,a6<a1.length;w=a6){a7=a1[w]
a8=a1[a6]
if(Math.abs(a7.d-a8.d)>1||Math.abs(a8.c-a7.c)>170)continue
j=C.a([],c7)
a9=new A.fk(j)
for(s=0;s<3;++s){b0=B.aA_[s]
i=a7.c
h=a7.d
g=a8.c
a9.jh(C.a([new A.q(i+b0,121,h),new A.q((i+g)/2+b0,117,h),new A.q(g+b0,121,h)],l),0.35,D.av,!1,0,4)}D.d.v(c8,j)}for(j=D.d.gaf(d0),i=new C.f5(j,new A.foz(d6)),h=d6.cy;i.C();){g=j.gR(0)
f=g.c
d=g.b==="hq"?190:130
a0=g.d
g=g.a
d2.push(new A.hf(new A.q(f,d,a0+40),"\u26a1 Level "+C.w(h.h(0,g))+" has no power: tap to go and fix it",D.by,2e4+g))}for(j=D.d.gaf(d0),i=new C.f5(j,new A.foK(d6));i.C();){h=j.gR(0)
g=h.b
f=B.hy.h(0,g)
f.toString
d=h.c
g=g==="bighouse"?120:82
d2.push(new A.hf(new A.q(d,g,h.d),"\u26a1 No power: tap to go in and fix it",D.by,2e4+h.a))
g=C.a([],c7)
b1=new A.fk(g)
b1.d=0.45
d=h.c
b1.aO(new A.q(d,30,h.d),new A.q(f.c+2,60,f.d+2),D.de)
b1.d=1
D.d.v(c8,g)}if(d6.c==="outside")D.d.v(c8,A.i6a())
b2=C.a([],p)
for(c7=D.d.gaf(d0),d0=new C.f5(c7,new A.foV());d0.C();){p=c7.gR(0)
d3=new A.fp8(p.e*3.141592653589793/2,p)
b3=m.h(0,p.a)
if(b3==null)b3=0
j=p.b
if(j==="billboard"){b2.push(new A.fO(C.a([d3.$3(-33,62.5,2),d3.$3(33,62.5,2),d3.$3(33,31.5,2),d3.$3(-33,31.5,2)],l),0,new A.fp_(p),960,450,4,2,b3,!1))
b2.push(new A.fO(C.a([d3.$3(33,62.5,-2),d3.$3(-33,62.5,-2),d3.$3(-33,31.5,-2),d3.$3(33,31.5,-2)],l),0,new A.fp0(p),960,450,4,2,b3,!1))}else{i=j==="townsign"
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
b2.push(new A.fO(C.a([d3.$3(p,j,b7),d3.$3(b4,j,b7),d3.$3(b4,i,b7),d3.$3(p,i,b7)],l),0,new A.fp1(b8),b9,c0,4,2,b3,!1))
h=-b7
b2.push(new A.fO(C.a([d3.$3(b4,j,h),d3.$3(p,j,h),d3.$3(p,i,h),d3.$3(b4,i,h)],l),0,new A.fp2(b8),b9,c0,4,2,b3,!1))}else if(j==="adboard"){b2.push(new A.fO(C.a([d3.$3(c5,195,3.6),d3.$3(158,195,3.6),d3.$3(158,90,3.6),d3.$3(c5,90,3.6)],l),0,new A.fp3(p),1280,424,4,2,b3,!1))
b2.push(new A.fO(C.a([d3.$3(158,195,-3.6),d3.$3(c5,195,-3.6),d3.$3(c5,90,-3.6),d3.$3(158,90,-3.6)],l),0,new A.fp4(p),1280,424,4,2,b3,!1))}else if(j==="tower"){c1=210+D.o.F(B.ze[p.f].l(),5)*24
j=c1-8
i=c1-54
b2.push(new A.fO(C.a([d3.$3(-40,j,35.9),d3.$3(40,j,35.9),d3.$3(40,i,35.9),d3.$3(-40,i,35.9)],l),0,new A.foA(p),800,460,8,2,b3,!1))
b2.push(new A.fO(C.a([d3.$3(40,j,-35.9),d3.$3(-40,j,-35.9),d3.$3(-40,i,-35.9),d3.$3(40,i,-35.9)],l),0,new A.foB(p),800,460,8,2,b3,!1))
b2.push(new A.fO(C.a([d3.$3(50.9,j,28),d3.$3(50.9,j,-28),d3.$3(50.9,i,-28),d3.$3(50.9,i,28)],l),0,new A.foC(p),640,460,8,2,b3,!1))
b2.push(new A.fO(C.a([d3.$3(-50.9,j,-28),d3.$3(-50.9,j,28),d3.$3(-50.9,i,28),d3.$3(-50.9,i,-28)],l),0,new A.foD(p),640,460,8,2,b3,!1))
i=c1+58
j=c1+22
b2.push(new A.fO(C.a([d3.$3(-40,i,1.7),d3.$3(40,i,1.7),d3.$3(40,j,1.7),d3.$3(-40,j,1.7)],l),0,new A.foE(p),960,400,8,2,b3,!1))
b2.push(new A.fO(C.a([d3.$3(40,i,-1.7),d3.$3(-40,i,-1.7),d3.$3(-40,j,-1.7),d3.$3(40,j,-1.7)],l),0,new A.foF(p),960,400,8,2,b3,!1))}else if(j==="hq"){b2.push(new A.fO(C.a([d3.$3(-70,108,45.9),d3.$3(70,108,45.9),d3.$3(70,52,45.9),d3.$3(-70,52,45.9)],l),0,new A.foG(),c6,400,8,2,b3,!1))
b2.push(new A.fO(C.a([d3.$3(-48,215,30.2),d3.$3(48,215,30.2),d3.$3(48,175,30.2),d3.$3(-48,175,30.2)],l),0,new A.foH(),900,380,8,2,b3,!1))
b2.push(new A.fO(C.a([d3.$3(70,108,-45.9),d3.$3(-70,108,-45.9),d3.$3(-70,52,-45.9),d3.$3(70,52,-45.9)],l),0,new A.foI(),c6,400,8,2,b3,!1))
b2.push(new A.fO(C.a([d3.$3(48,215,-30.2),d3.$3(-48,215,-30.2),d3.$3(-48,175,-30.2),d3.$3(48,175,-30.2)],l),0,new A.foJ(),900,380,8,2,b3,!1))
b2.push(new A.fO(C.a([d3.$3(-54,328,1.7),d3.$3(54,328,1.7),d3.$3(54,294,1.7),d3.$3(-54,294,1.7)],l),0,new A.foL(p),c6,360,8,2,b3,!1))
b2.push(new A.fO(C.a([d3.$3(54,328,-1.7),d3.$3(-54,328,-1.7),d3.$3(-54,294,-1.7),d3.$3(54,294,-1.7)],l),0,new A.foM(p),c6,360,8,2,b3,!1))
b2.push(new A.fO(C.a([d3.$3(85.9,118,36),d3.$3(85.9,118,-36),d3.$3(85.9,62,-36),d3.$3(85.9,62,36)],l),0,new A.foN(p),720,560,8,2,b3,!1))
b2.push(new A.fO(C.a([d3.$3(-85.9,118,-36),d3.$3(-85.9,118,36),d3.$3(-85.9,62,36),d3.$3(-85.9,62,-36)],l),0,new A.foO(p),720,560,8,2,b3,!1))}else if(j==="store")b2.push(new A.fO(C.a([d3.$3(-54,85,37.7),d3.$3(54,85,37.7),d3.$3(54,67,37.7),d3.$3(-54,67,37.7)],l),0,new A.foP(),900,150,6,2,b3,!1))
else if(j==="ubstation"){b2.push(new A.fO(C.a([d3.$3(40,106,31.9),d3.$3(76,106,31.9),d3.$3(76,86,31.9),d3.$3(40,86,31.9)],l),0,new A.foQ(),480,270,8,2,b3,!1))
b2.push(new A.fO(C.a([d3.$3(76,106,28.1),d3.$3(40,106,28.1),d3.$3(40,86,28.1),d3.$3(76,86,28.1)],l),0,new A.foR(),480,270,8,2,b3,!1))}else if(j==="dmv")b2.push(new A.fO(C.a([d3.$3(-50,85,38.6),d3.$3(50,85,38.6),d3.$3(50,67,38.6),d3.$3(-50,67,38.6)],l),0,new A.foS(),900,160,8,2,b3,!1))
else if(j==="gasstation")b2.push(new A.fO(C.a([d3.$3(-86,107,35.7),d3.$3(-54,107,35.7),d3.$3(-54,85,35.7),d3.$3(-86,85,35.7)],l),0,new A.foT(),480,330,6,2,b3,!1))
else for(c2=0;c2<2;++c2){c3=c2===0?-40:40
j=c3-26
i=c3+26
b2.push(new A.fO(C.a([d3.$3(j,70,60.7),d3.$3(i,70,60.7),d3.$3(i,40,60.7),d3.$3(j,40,60.7)],l),0,new A.foU(p,c2),720,520,9,2,b3,!1))}}}for(c7=D.d.gaf(e0),d0=new C.f5(c7,new A.foW(d6));d0.C();){p=c7.gR(0)
d2.push(new A.hf(new A.q(p.c,82,p.d),p.Q,D.cO,0))}for(c7=D.d.gaf(e0),d0=new C.f5(c7,new A.foX(d6));d0.C();){p=c7.gR(0)
d2.push(new A.hf(new A.q(p.c,80,p.d),"\ud83d\udcde Help!",D.by,0))}c7=d7===0
d0=c7?"\u2705 The house is finished":"\ud83c\udfe0 "+d7+" rooms still need work"
d2.push(new A.hf(B.fWE,d0,c7?D.cU:D.dY,0))
c4=c9.x=$.dS=$.dS+1
for(s=0;s<2;++s){r=B.aA3[s]
c9.dN(new A.q(r,0,-118),new A.q(r,215,-118),3,D.jc,8)}c9.aZ(B.An,B.h_3,D.av,0.3)
c9.x=0
o.push(new A.fO(B.cNM,0,new A.foY(),c6,336,4,2,c4,!1))
o.push(new A.fO(B.di3,0,new A.foZ(),c6,336,4,2,c4,!1))
c7=C.C(o,x.K)
D.d.v(c7,b2)
return new A.tM(c8,d1,d2,c7,null,4000)},
i76(a5,a6,a7,a8,a9,b0,b1,b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=x.z,a3=C.a([],a2),a4=new A.fk(a3)
a4.r=!0
if(a5.c==="outside"){w=new A.fza(b1)
v=b1!=null
if(v&&b1.a===a5.a)A.wJ(a4,b1,a6,b2,!0,0,null)
if(a7&&v&&b1.a===a5.a){v=C.a([],a2)
u=b1.b
t=b1.d
new A.fk(v).aO(new A.q(u+Math.sin(t)*9,46+b1.y,b1.c+Math.cos(t)*9),B.aVt,B.jq)
D.d.v(a3,v)}if(a9!=null){v=C.a([],a2)
s=new A.fk(v)
s.r=!0
u=a9.a
A.h3i(s,u[0],B.ze[u[4]])
D.d.v(a3,A.nx(v,0,u[3]-1.5707963267948966,new A.q(u[1],0,u[2])))}for(v=D.d.gaf(a5.x),u=new C.f5(v,new A.fz7()),t=a6*6,r=b0==="furniture";u.C();){q=v.gR(0)
p=q.a
o=a6*(0.25+D.o.F(p,5)*0.04)+p*1.7
n=q.c
m=Math.cos(o)
l=q.d
k=Math.sin(o)
j=Math.atan2(-Math.sin(o),Math.cos(o))
i=C.a([],a2)
h=new A.fk(i)
h.r=!0
h.b=r?100+p:0
A.hlN(h,q.b,B.ze[q.f],Math.sin(t+p)*0.5)
D.d.v(a3,A.nx(i,0,j,new A.q(n+m*10,0,l+k*10)))}for(v=D.d.gaf(b3),u=new C.f5(v,new A.fz8(a5)),t=a5.a;u.C();){r=v.gR(0)
q=r.c
p=r.d
n=r.e
m=r.f
l=r.a
A.wJ(a4,new A.y0(t,q,p,n,!1,!1,!1,!1,!1,0,!1,!1,"","",-1,0,-1,0),a6,m,w.$2(q,p),900+l,m.c)
A.hV6(a4,r,a6)}for(v=a8.length,g=0;g<a8.length;a8.length===v||(0,C.M)(a8),++g){f=a8[g]
u=f.b
r=f.c
q=f.d
A.wJ(a4,new A.y0(t,u,r,q,f.f,!1,!1,!1,!1,0,!1,!1,"","",-1,0,-1,f.e),a6,f.w,w.$2(u,r),0,f.x)
if(f.r){p=C.a([],a2)
new A.fk(p).aO(new A.q(u+Math.sin(q)*9,46,r+Math.cos(q)*9),B.fYD,F.fz)
D.d.v(a3,p)}}return a3}if(b1!=null&&b1.a===a5.a)A.wJ(a4,b1,a6,b2,!0,0,null)
for(a2=D.d.gaf(b3),v=new C.f5(a2,new A.fz9(a5)),u=a5.a,t=a6*0.5;v.C();){r=a2.gR(0)
q=r.y
p=q>0
e=p?Math.sin(t+r.a)*q:0
q=r.c
n=r.d
if(p)m=Math.cos(t+r.a)>=0?1.5707963267948966:-1.5707963267948966
else m=r.x?0.5:r.e
A.wJ(a4,new A.y0(u,q+e,n,m,p,!1,!1,!1,r.x,0,!1,!1,"","",-1,0,-1,0),a6,r.f,!0,900+r.a,null)}d=a5.gho(0)
if(a5.go==="fan"){a0=a5.ga60()&&a5.gMe()&&a5.fy?a6*7:0
a4.b=703
for(a2=d*0.5,a1=0;a1<4;++a1){o=a0+a1*3.141592653589793/2
a4.wo(new A.q(Math.cos(o)*15,115,a2+Math.sin(o)*15),B.hci,B.nS,0.1,-o)}}return a3},
hYm(d){var w
A:{if(5===d){w=B.eKF
break A}if(9===d){w=B.ePI
break A}if(10===d){w=B.eCZ
break A}if(11===d){w=B.eQG
break A}if(2===d||4===d||8===d){w=B.esB
break A}w=B.eFD
break A}return w},
fv2(b0,b1,b2,b3,b4,b5,b6,b7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9
for(w=b2.a,v=b2.b,u=b2.c,t=b1.a,s=b1.b,r=b1.c,q=b3.a,p=q*0.1,o=b3.b,n=o*0.1,m=b3.c,l=m*0.1,k=q*0.2,j=o*0.2,i=m*0.2,q*=0.3,o*=0.3,m*=0.3,h=-b4/2,g=b5-1,f=b5===1,e=0;e<b5;++e){d=f?0:h+b4*e/g
for(a0=b6.length,a1=s+v*d,a2=t+w*d+0,a3=r+u*d+0,a4=a2+p,a5=a3+l,a6=a2+k,a7=a3+i,a2+=q,a3+=m,a8=0;a8<b6.length;b6.length===a0||(0,C.M)(b6),++a8){a9=a1+b6[a8]
A.kG(b0,new A.q(a4,a9+n,a5),b2,B.ea,14,17,B.kA,b3,0)
A.kG(b0,new A.q(a6,a9+j,a7),b2,B.ea,11,14,b7,b3,0.6)
A.kG(b0,new A.q(a2,a9+o,a3),b2,B.ea,11,0.9,B.kA,b3,0)}}},
hmh(a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0
A:{if("shop"===a2){w=B.eYl
break A}if("hospital"===a2){w=B.eYg
break A}if("firestation"===a2){w=B.eXY
break A}if("school"===a2){w=B.eXR
break A}w=B.eXA
break A}w=w.a
v=w[0]
u=w[1]
t=w[2]
s=w[3]
r=w[4]
q=u/2
p=v/2
a1.x=$.dS=$.dS+1
a1.hn(new A.q(0,t/2,0),new A.q(v,t,u),s,2)
a1.aO(new A.q(0,2.5,0),new A.q(v+3,5,u+3),B.ae3)
w=a2==="hospital"
if(w)o=C.a([14,30,46],x.n)
else if(a2==="school"){n=C.a([14,32],x.n)
o=n}else{n=x.n
n=a2==="house2"?C.a([26],n):C.a([22],n)
o=n}m=D.o.E(D.k.bh(v/24),2,5)
n=a2==="firestation"
l=n?C.a([34],x.n):o
k=v-30
A.fv2(a1,new A.q(0,0,q).a8(0,B.dX),B.hE,B.iq,k,m,l,B.hV)
j=q+0.4
if(n){A.kG(a1,new A.q(-14,17,j),B.hE,B.ea,34,34,D.hf,B.iq,0.2)
for(i=q+0.5,h=0;h<6;++h)A.kG(a1,new A.q(-14,4+h*6,i),B.hE,B.ea,33,0.8,D.dv,B.iq,0)
A.kG(a1,new A.q(24,15,j),B.hE,B.ea,14,30,B.vy,B.iq,0)}else{A.kG(a1,new A.q(0,14,q+0.3),B.hE,B.ea,18,28,B.kA,B.iq,0)
A.kG(a1,new A.q(0,13,j),B.hE,B.ea,14,26,B.vy,B.iq,0.2)}switch(a2){case"hospital":i=t-8
A.kG(a1,new A.q(0,i,j),B.hE,B.ea,30,9,D.by,B.iq,0)
j=q+0.5
A.kG(a1,new A.q(0,i,j),B.hE,B.ea,24,2.6,D.c,B.iq,0)
A.kG(a1,new A.q(0,i,j),B.hE,B.ea,2.6,7,D.c,B.iq,0)
break
case"shop":for(i=q+3,h=0;h<6;++h){g=(h&1)===0?D.aw:D.c
A.kG(a1,new A.q(-30+h*12,33,i),B.hE,B.ea,6,6,g,B.iq,0)}A.kG(a1,new A.q(0,t-4,j),B.hE,B.ea,36,6,a3,B.iq,0)
break
case"firestation":A.kG(a1,new A.q(0,t-5,j),B.hE,B.ea,40,7,D.bG,B.iq,0)
break
case"school":A.kG(a1,new A.q(0,t-5,j),B.hE,B.ea,40,7,D.bk,B.iq,0)
break}j=-q
A.fv2(a1,new A.q(0,0,j),B.qN,B.td,k,m,l,B.hV)
A.kG(a1,new A.q(0,13,j-0.4),B.qN,B.ea,14,26,B.vy,B.td,0)
f=D.o.E(D.k.bh(u/24),1,3)
k=u-26
A.fv2(a1,new A.q(p,0,0),B.td,B.hE,k,f,l,B.hV)
i=-p
A.fv2(a1,new A.q(i,0,0),B.iq,B.qN,k,f,l,B.hV)
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
d.aZ(B.dX,new A.q(v+6,2.5,u*0.58),r,0.1)
n=a1.a
k=t+5
D.d.v(n,A.nx(w,0.42,0,new A.q(0,k,u*0.25)))
a0=-u
D.d.v(n,A.nx(w,-0.42,0,new A.q(0,k,a0*0.25)))
k=p+0.2
w=t+12
a1.a6Z(new A.q(k,t,q),new A.q(k,t,j),new A.q(k,w,0),s,B.hE,!1)
i-=0.2
a1.a6Z(new A.q(i,t,j),new A.q(i,t,q),new A.q(i,w,0),s,B.qN,!1)
if(a2==="school"){w=q-10
e.aO(new A.q(0,t+18,w),B.fZ6,D.afM)
e.aO(new A.q(0,t+30,w),B.fZU,r)
e.dN(new A.q(0,t+31,w),new A.q(0,t+46,w),0.6,D.dv,6)
e.aO(new A.q(5,t+44,w),B.h8B,D.aw)}else e.aO(new A.q(v*0.28,t+14,a0*0.1),B.h2w,B.ahp)}else{k=v+2
e.aZ(new A.q(0,t+1.5,0),new A.q(k,3,u+2),r,0.05)
e.aO(new A.q(0,t+4,q+0.5),new A.q(k,4,1.4),a3)
if(w){w=v*0.25
k=-u*0.15
e.aO(new A.q(w,t+5,k),B.h_8,D.br)
e.aO(new A.q(w,t+6.2,k),B.h8P,D.c)}if(n){w=p-10
n=-u*0.2
e.aO(new A.q(w,t+16,n),B.fYR,B.agg)
e.aO(new A.q(w,t+32,n),B.aVu,r)}}D.d.v(a1.a,g)},
i2h(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=d.f,f=d.e
d.f=1
d.e=0
if(e==="road"){d.GC(B.h5k,B.h6k,B.h4n,B.h6E,B.Mh,B.ea)
d.e=90
for(w=0;w<2;++w){v=B.R4[w]
u=v-0.7
t=v+0.7
d.GC(new A.q(-20,0.9,u),new A.q(20,0.9,u),new A.q(20,0.9,t),new A.q(-20,0.9,t),K.LW,B.ea)}for(w=0;w<2;++w){v=B.dlj[w]
u=v-0.8
t=v+0.8
d.GC(new A.q(-20,0.9,u),new A.q(20,0.9,u),new A.q(20,0.9,t),new A.q(-20,0.9,t),D.bO,B.ea)}d.f=g
d.e=f
return}d.GC(B.h6u,B.hcF,B.h4l,B.h3_,B.Mh,B.ea)
d.e=90
A:{if("roadturn"===e){u=B.dk0
break A}if("roadtee"===e){u=B.d1a
break A}u=B.cic
break A}for(t=u.length,w=0;w<t;++w){s=u[w]
r=s.a
q=s.b
for(s=q!==0,p=r!==0,o=30*r,n=30*q,m=0;m<2;++m){l=B.R4[m]
k=p?o:l
j=s?n:l
i=p?36:1.4
h=s?36:1.4
d.aO(new A.q(k,0.95,j),new A.q(i,0.1,h),K.LW)}}d.f=g
d.e=f},
hlN(d,e,f,g){var w=new A.ffq(d,g)
switch(e){case"dog":d.aZ(B.x3,B.hbW,f,0.05)
d.ed(B.h3C,3.4,f,4,8)
d.aO(B.h6T,B.h2s,D.Mb)
d.aO(B.h8g,B.aWe,B.hp)
d.aO(B.hcR,B.aWe,B.hp)
d.dN(B.h94,B.fWi,0.8,f,5)
w.$5(B.diL,6,6,1.7,f)
break
case"cat":d.aZ(B.Ao,B.h2n,f,0.05)
d.ed(B.fXH,2.7,f,4,8)
d.aO(B.hbr,B.aVx,f)
d.aO(B.hbv,B.aVx,f)
d.dN(B.fXG,B.fWa,0.7,f,5)
w.$5(B.dgo,4,4,1.2,f)
break
case"cow":d.aZ(B.aat,B.fYN,D.bN,0.05)
d.aO(B.hbF,B.haZ,B.hp)
d.aO(B.h50,B.h2q,B.hp)
d.aO(B.fWy,B.h2B,D.bN)
d.aO(B.fWp,B.hd9,D.nR)
d.aO(B.h2R,B.aVy,D.bO)
d.aO(B.hcL,B.aVy,D.bO)
d.dN(B.fWB,B.fXJ,0.7,B.hp,5)
w.$5(B.d4X,11,11,3.2,D.bO)
break
case"sheep":d.ed(B.aas,8.5,D.pV,4,8)
d.ed(B.fWg,7,D.pV,4,8)
d.ed(B.fWc,3.4,B.hp,4,8)
w.$5(B.diF,8,8,1.8,B.hp)
break
case"chicken":d.ed(B.Ao,4,f,4,8)
d.ed(B.fVY,2.2,f,3,6)
d.aO(B.fW7,B.haU,D.by)
d.aO(B.h3L,B.h3k,D.aC)
d.aO(B.fXL,B.h0F,f)
w.$5(B.d2Z,3,3,0.8,D.aC)
break
case"horse":d.aZ(B.fWF,B.fYm,f,0.1)
d.L6(B.fWP,B.fX5,4.2,f,3,8)
d.aO(B.fX7,B.h1b,f)
d.aO(B.fXg,B.haT,B.hp)
d.dN(B.fWU,B.fXK,1.8,B.hp,6)
w.$5(B.d2j,16,16,2.6,f)
break
default:d.aO(B.Ao,B.h2z,f)}},
bBL(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=C.a([],x.z)
for(w=d.length,v=e.a,u=e.b,t=e.c,s=f.a,r=f.b,q=f.c,p=x.o,o=0;o<d.length;d.length===w||(0,C.M)(d),++o){n=d[o]
m=C.a([],p)
for(l=n.a,k=l.length,j=0;j<l.length;l.length===k||(0,C.M)(l),++j){i=l[j]
m.push(new A.q(s+(i.a-s)*v,r+(i.b-r)*u,q+(i.c-q)*t))}l=n.b
h.push(new A.kn(m,new A.q(l.a/v,l.b/u,l.c/t).gmQ(0),n.c,n.d,n.e,n.f,n.r,n.w,n.x,n.y,n.z))}return h},
hV6(d,e,f){var w,v,u,t,s,r=e.z
if(r.length===0)return
w=e.e
v=new A.ffg(e,Math.sin(w),Math.cos(w))
u=d.b
d.b=0
switch(r){case"feed":d.L6(v.$3(14,0,8),v.$3(14,9,8),4.5,B.nS,5.5,10)
for(r=f*0.9,t=0;t<9;++t){s=D.k.F(r+t/9,1)
d.fT(v.$3(10+s*26,26-s*22,Math.sin(t*2.1)*4),0.9,D.mu,3,5,0)}break
case"cook":d.aZ(v.$2(18,9),B.fZR,D.jc,0.2)
d.aO(v.$2(18,18.4),B.h2a,D.fr)
d.d=0.3
for(r=f*0.5,t=0;t<6;++t){s=D.k.F(r+t/6,1)
d.fT(v.$2(18+Math.sin(t*1.9)*3,22+s*22),2+s*4,D.F_,3,6,0)}d.d=1
break
case"wash":d.L6(v.$3(20,0,-10),v.$3(20,8,-10),4,D.aQ,5,10)
for(r=f*1.4,t=0;t<12;++t){s=D.k.F(r+t/12,1)
d.fT(v.$3(8+s*24,30-s*s*26,6),0.8,D.he,3,5,0.3)}break
case"water":d.aZ(v.$3(12,22,7),B.h2y,D.ei,0.2)
for(r=f*1.2,t=0;t<10;++t){s=D.k.F(r+t/10,1)
d.fT(v.$3(18+s*8,22-s*22,7),0.7,D.he,3,5,0.3)}break
case"teach":d.aZ(v.$2(22,26),B.h93,D.e_,0.1)
d.aO(v.$2(22.8,26),B.h6D,D.bN)
break
case"duty":d.aO(v.$3(0,74,0),B.h4X,D.K)
break}d.b=u},
wJ(d,e,f,g,h,i,j){var w,v,u,t,s,r
if(e.Q){w=C.a([],x.z)
A.wJ(new A.fk(w),A.aty(!1,0,-1,"",!1,0,"",-1,e.CW*0.5,!1,!1,!1,e.a,!1,e.e,0,0,0),f,g,h,i,j)
D.d.v(d.a,A.nx(w,1.5707963267948966,e.d,new A.q(e.b,9,e.c)))
return}w=g.e
v=$.fYL.h(0,w)
if(v==null){if(B.RY.aj(0,w)&&!$.fYJ.t(0,w)){A.bT9(w)
return}A.i14(d,e,f,h,i,g)
return}w=e.e
u=e.z
t=w&&!u&&e.CW>0?e.CW*12:null
s=j==null
r=s?null:g.a
s=s?null:g.d
D.d.v(d.a,v.cVM(h,i,e.y,s,u,r,f,j,t,w,e.b,e.d,e.c))},
i14(e6,e7,e8,e9,f0,f1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2=e7.e,d3=d2?D.k.V(e7.CW*24):-1,d4=f1.a,d5=f1.b,d6=f1.c,d7=f1.d,d8=f1.f,d9=f1.r,e0=f1.w,e1=e7.f,e2=e7.r,e3=e7.w,e4=C.bv(d4.l(),d5.l(),d6.l(),d7.l(),d8,d9,e0,e9,d3,e1,e2,e3,f0,D.h,D.h,D.h,D.h,D.h,D.h,D.h),e5=$.fpu.h(0,e4)
if(e5!=null){D.d.v(e6.a,A.nx(e5,0,e7.d,new A.q(e7.b,e7.y,e7.c)))
return}w=C.a([],x.z)
v=new A.fk(w)
v.b=f0
v.r=!0
u=C.ar(d4,D.w,0.16)
u.toString
t=C.ar(d4,B.bjU,0.55)
t.toString
s=d2?Math.sin(e7.CW*3.141592653589793):0
r=e9?8:6
q=e9?4:3
p=e9?8:6
o=e9?4:3
n=e9?9:6
m=x.n
l=C.a([],m)
for(k=0;k<2;++k)l.push(s*F.hx[k]*0.6)
j=C.a([],m)
for(i=l.length,k=0;k<l.length;l.length===i||(0,C.M)(l),++k){h=l[k]
j.push(d2?Math.max(0,-h)*1.5+0.1:0.04)}m=C.a([],m)
for(g=0;g<2;++g)m.push(16*Math.cos(l[g])+15.5*Math.cos(l[g]+j[g]))
f=Math.max(m[0],m[1])+3.3
e=new A.fpZ(f0,v)
d=new A.fpw(v,r,e9)
for(m=Math.abs(0.08),g=0;g<2;++g){a0=g===0?-1:1
i=a0*(d8?3.2:2.9)
a1=i+0
a2=f+-16*Math.cos(l[g])
a3=0+-16*Math.sin(l[g])
a4=new A.q(a1,a2,a3)
a5=l[g]+j[g]
a1+=0
a2+=-15.5*Math.cos(a5)
a3+=-15.5*Math.sin(a5)
d.$5(new A.q(i,f,0),a4,3.5,2.7,d7)
d.$6$joint(a4,new A.q(a1,a2,a3),2.6,1.9,d7,!1)
a1+=0
i=a3+2
e.$3(new A.fpx(q,p),B.h71,new A.q(a1,a2+-1.6,i))
if(e9)e.$3(new A.fpy(p),B.h3U,new A.q(a1,a2+-2.9,i))
if(e9){i=C.ar(d7,D.c,m)
i.toString
v.ed(new A.q(a1,a2+1.2,a3+0),2.1,i,3,p)}}m=d8?1.22:1.12
e.$3(new A.fpz(d7,q,p),new A.q(m,0.78,0.76),new A.q(0,f+1.2,0))
if(d8){d7=C.ar(d7,D.c,Math.abs(0.05))
d7.toString
m=e9?12:8
v.Tb(new A.q(0,f+3.4,0),new A.q(0,f-9.5,0),5.9,d7,!1,7.8,m)}a6=d8?5.8:6.5
a7=d8?4.2:4.9
d7=d8?0.66:0.62
e.$3(new A.fpK(a7,d6,a6,e9),new A.q(1,1,d7),new A.q(0,f+2.5,0))
if(!d8)e.$3(new A.fpS(),B.fZl,new A.q(0,f+2.4,0))
if(d8&&e9)for(d7=f+14.3,k=0;k<2;++k)e.$3(new A.fpT(d6,q,p),B.h_j,new A.q(F.hx[k]*2.7,d7,2.7))
d7=d8?1.1:1.2
e.$3(new A.fpU(d8,d6,o,n),new A.q(d7,0.5,0.62),new A.q(0,f+19.6,0))
d7=d8?1.8:2.1
v.dN(new A.q(0,f+20.5,0.2),new A.q(0,f+24.2,0.5),d7,d4,8)
if(e9){d7=C.ar(d6,D.c,Math.abs(0.12))
d7.toString
v.Tb(new A.q(0,f+20,0.1),new A.q(0,f+21.4,0.2),3.1,d7,!1,2.5,10)}d7=f+29
a8=new A.q(0,d7,0.6)
e.$3(new A.fpV(d4,e9),B.h8T,a8)
m=d8?0.95:1.05
e.$3(new A.fpW(d4,q,p),new A.q(m,0.8,0.95),a8.a8(0,B.h0C))
if(e9)for(m=d7+-0.3,k=0;k<2;++k)e.$3(new A.fpX(d4),B.hbH,new A.q(0+F.hx[k]*4.35,m,0.7))
else for(m=d7+-0.2,k=0;k<2;++k)v.ed(new A.q(0+F.hx[k]*4.2,m,0.6),1,d4,2,5)
for(m=d7+1.9,l=d7+0.4,j=d7+2.05,i=d7+0.7,a1=d7+1.25,a2=d7+0.95,k=0;k<2;++k){a0=F.hx[k]
a3=a0*1.8
a9=0+a3
if(e9){e.$3(new A.fpY(),B.h96,new A.q(a9,l,4.75))
v.ed(new A.q(a9,l,5.1),0.55,B.adX,2,5)}else v.aO(new A.q(a9,l,5),B.h7i,B.adX)
a3=0+a3
if(e9){v.ed(new A.q(0+a0*1.6,i,5.55),0.18,D.c,2,4)
e.$3(new A.fpA(u),B.h5l,new A.q(a3,a1,4.8))
a9=d8?0.28:0.18
v.aO(new A.q(a3,a2,5.22),new A.q(2.3,a9,0.2),D.nf)
a9=d8?0.34:0.5
v.aO(new A.q(a3,j,4.75),new A.q(2.4,a9,0.55),d5)}else v.aO(new A.q(a3,m,4.8),B.hcv,d5)}e.$3(new A.fpB(u),B.hcN,a8.a8(0,B.h3M))
if(e9){v.L5(a8.a8(0,B.hcP),a8.a8(0,B.hbp),0.55,d4,!1,5)
for(m=d7+-1.8,k=0;k<2;++k)v.aO(new A.q(0+F.hx[k]*0.55,m,5.1),B.h4B,u)}if(e9){v.aO(a8.a8(0,B.h1w),B.h6s,B.bhV)
e.$3(new A.fpC(t),B.h5F,a8.a8(0,B.h7A))
e.$3(new A.fpD(t),B.h0U,a8.a8(0,B.h3Y))}else v.aO(a8.a8(0,B.h6L),B.h5b,B.bl9)
switch(d9){case 1:e.$3(new A.fpE(d5,e9),B.h3I,a8.a8(0,B.aWn))
e.$3(new A.fpF(d5,p),B.aaB,a8.a8(0,B.aWZ))
e.$3(new A.fpG(d5,q,p),B.hca,a8.a8(0,B.hcs))
for(d9=d7+1.5,d7+=-7.2,k=0;k<2;++k){a0=F.hx[k]
v.L5(new A.q(0+a0*4.4,d9,1),new A.q(0+a0*4.3,d7,1),1.2,d5,!1,6)}break
case 2:e.$3(new A.fpH(d5,e9),B.h8Z,a8.a8(0,B.h48))
e.$3(new A.fpI(d5,p),B.h57,a8.a8(0,B.hbX))
break
case 3:d5=C.ar(d6,D.c,Math.abs(0.18))
d5.toString
e.$3(new A.fpJ(d5,e9),B.h7F,a8.a8(0,B.h2V))
e.$3(new A.fpL(d5,p),B.aaB,a8.a8(0,B.hdb))
e.$3(new A.fpM(d5,q,p),B.hc3,a8.a8(0,B.h3V))
break
case 4:e.$3(new A.fpN(d5,q,p),B.hcM,a8.a8(0,B.hcx))
e.$3(new A.fpO(d5,p),B.h6R,a8.a8(0,B.h6g))
break
default:e.$3(new A.fpP(d5,e9),B.h2m,a8.a8(0,B.aWn))
e.$3(new A.fpQ(d5,p),B.aaB,a8.a8(0,B.aWZ))}b0=d8?6.2:7
for(d5=f+19.3,d7=-s,k=0;k<2;++k){a0=F.hx[k]
d9=a0*b0
b1=d7*a0*0.5
b2=d2?-0.45:-0.12
u=a0>0
if(u&&e1){b1=-0.8
b2=-1.2}if(u&&e2){b1=-1
b2=-0.6}if(u&&e3){b1=-1.55
b2=-0.1}t=d9+0
m=d5+-11.5*Math.cos(b1)
l=0+-11.5*Math.sin(b1)
b3=new A.q(t,m,l)
a5=b1+b2
t+=0
m+=-10.5*Math.cos(a5)
l+=-10.5*Math.sin(a5)
j=d8?2.5:2.8
d.$5(new A.q(d9,d5,0),b3,j,2.3,d6)
d9=d8?1.9:2.1
d.$6$joint(b3,new A.q(t,m,l),d9,1.5,d4,!1)
d9=-Math.cos(a5)
j=-Math.sin(a5)
t+=0
i=m+d9*1.8
a1=l+j*1.8
e.$3(new A.fpR(d4),B.h5D,new A.q(t,i,a1))
if(e9){a2=d9<0?-1:1
a3=0*a2
a9=-j*a2
a2=d9*a2
for(b4=t+0,b5=i+d9*1.5+0,b6=a1+j*1.5+0,b7=a3*0.25,b8=a9*0.25,b9=a2*0.25,c0=0+a3*0.8,c1=d9*0.6+a9*0.8,c2=j*0.6+a2*0.8,c3=0;c3<4;++c3){c4=u?1:-1
c4=b4+(-1.5+c3)*c4
c5=B.ay3[c3]
c6=c4+0*c5*0.55+b7
c7=b5+d9*c5*0.55+b8
c5=b6+j*c5*0.55+b9
c8=new A.q(c6,c7,c5)
c9=new A.q(c0,c1,c2).gmQ(0)
d0=B.ay3[c3]
v.Tb(new A.q(c4,b5,b6),c8,0.62,d4,!1,0.58,4)
v.Tb(c8,new A.q(c6+c9.a*d0*0.45,c7+c9.b*d0*0.45,c5+c9.c*d0*0.45),0.56,d4,!1,0.48,4)}b5=-a0
b4+=b5*2
i=i+d9*0.4+0
a1=a1+j*0.4+0.5
b5=new A.q(0+b5*0.5,d9*0.7+0,j*0.7+0.5).gmQ(0)
b6=b4+b5.a*1.7
b7=i+b5.b*1.7
b5=a1+b5.c*1.7
d1=new A.q(b6,b7,b5)
a2=new A.q(0+a3*0.4,d9*0.8+a9*0.4,j*0.8+a2*0.4).gmQ(0)
v.L5(new A.q(b4,i,a1),d1,0.7,d4,!1,4)
v.L5(d1,new A.q(b6+a2.a*1.4,b7+a2.b*1.4,b5+a2.c*1.4),0.6,d4,!1,4)}if(u&&e1){d9=l+0
v.dR(new A.q(t,m+-2.6,d9),new A.q(t,m+2.6,d9),1.7,D.aQ,0.5,8)}if(u&&e2){v.aZ(new A.q(t,m+-0.4,l+2.6),B.h5Y,D.nf,0.3)
v.aO(new A.q(t,m+0.2,l+3.8),B.h3q,D.aw)}}if(e0!==1)w=A.bBL(w,new A.q(e0,e0,e0),B.dX)
if($.fpu.a>900)$.fpu.a9(0)
$.fpu.n(0,e4,w)
D.d.v(e6.a,A.nx(w,0,e7.d,new A.q(e7.b,e7.y,e7.c)))},
i3e(d,e){var w,v,u,t,s,r,q,p,o,n=C.a([],x.z)
for(w=d.length,v=x.o,u=0;u<d.length;d.length===w||(0,C.M)(d),++u){t=d[u]
s=C.a([],v)
for(r=t.a,q=r.length,p=0;p<r.length;r.length===q||(0,C.M)(r),++p){o=r[p]
s.push(new A.q(o.a*e,o.b*e,o.c*e))}n.push(new A.kn(s,t.b,t.c,t.d,t.e,t.f,t.r,t.w,t.x,t.y,t.z))}return n},
h3i(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=C.ar(f,D.w,Math.abs(-0.25))
h.toString
w=C.ar(f,D.c,Math.abs(0.2))
w.toString
A:{if("bed"===e){d.aZ(B.Ao,B.h1i,B.q2,0.1)
d.aZ(B.fWe,B.h1_,f,0.05)
d.aO(B.h9N,B.aVA,B.agX)
d.aO(B.fYQ,B.aVA,B.agX)
d.aZ(B.fWI,B.h1k,B.q2,0.1)
d.aO(B.fWs,B.h8Y,w)
break A}if("nightstand"===e){d.aZ(B.x3,B.fZ_,f,0.1)
d.aO(B.h7U,B.h1Q,h)
d.aO(B.hcE,B.h06,B.agz)
d.aO(B.fWL,B.h2O,B.o3)
break A}if("wardrobe"===e){d.aZ(B.fX4,B.h0l,f,0.1)
d.aO(B.h3a,B.h0v,h)
d.aZ(B.h5J,B.aWB,B.ET,0.8)
d.aZ(B.hcZ,B.aWB,B.ET,0.8)
break A}if("desk"===e){d.aZ(B.Vk,B.h0r,f,0.1)
d.aO(B.h9W,B.aVF,h)
d.aO(B.fZN,B.aVF,h)
d.aZ(B.fXm,B.fZO,B.LO,0.5)
d.aO(B.fX1,B.h1z,D.jc)
break A}if("rug"===e){d.hn(B.hbQ,B.fZi,f,2)
d.aO(B.h2Y,B.hb3,w)
break A}if("sofa"===e){d.aZ(B.x3,B.h2b,f,0.05)
d.aZ(B.fWH,B.h2c,h,0.05)
d.aZ(B.ha9,B.aVZ,h,0.05)
d.aZ(B.h_S,B.aVZ,h,0.05)
d.aO(B.h9M,B.aVB,w)
d.aO(B.fYP,B.aVB,w)
break A}if("armchair"===e){d.aZ(B.x3,B.h_u,f,0.05)
d.aZ(B.fWG,B.h_w,h,0.05)
d.aO(B.h9I,B.aVW,h)
d.aO(B.fYE,B.aVW,h)
break A}if("coffee"===e){d.aZ(B.Kq,B.h0d,f,0.2)
for(v=0;v<4;++v){w=B.dkY[v]
d.aO(new A.q(w.a,6.5,w.b),B.h_g,h)}d.aZ(B.h4p,B.h2x,D.bO,0.5)
break A}if("tvstand"===e){d.aZ(B.aax,B.h0Q,f,0.1)
d.aO(B.h28,B.h43,h)
d.aO(B.fWr,B.fZG,B.hp)
break A}if("dining"===e){d.aZ(B.Vk,B.h0R,f,0.2)
for(v=0;v<4;++v){w=B.cNv[v]
d.aO(new A.q(w.a,13,w.b),B.h03,h)}break A}if("chair"===e){d.aZ(B.fWn,B.fZ9,f,0.1)
d.aZ(B.fWW,B.fZ7,f,0.1)
for(v=0;v<4;++v){w=B.daB[v]
d.aO(new A.q(w.a,7.5,w.b),B.fZD,h)}break A}if("plant"===e){d.dN(B.dX,B.aax,5,D.d1,10)
d.ed(B.aat,8,B.ER,5,8)
d.ed(B.h02,5,B.XB,4,8)
break A}if("lamp"===e){d.dN(B.dX,B.ea,4.5,B.hp,10)
d.dN(B.ea,B.aVg,0.7,B.hp,6)
d.L6(B.fXo,B.aav,6,B.o3,3.5,12)
break A}if("console"===e){d.aZ(B.fWO,B.aVU,f,0.15)
d.aO(B.h4N,B.aVE,h)
d.aO(B.h32,B.aVE,h)
d.aO(B.x3,B.haQ,h)
break A}if("shelf"===e){d.aZ(B.aau,B.h_Q,f,0.1)
for(u=0;u<4;++u){h=10+u*15
d.aO(new A.q(0,h,1),B.h_F,B.hp)
w=D.o.F(u,2)
d.aO(new A.q(-8+w*6,h,2),B.h1d,[D.ek,D.dI,D.ei,D.dY][u])
d.aO(new A.q(4+w*4,h,2),B.h2A,[D.dY,D.ei,D.ek,D.dI][u])}break A}if("tree"===e){d.L6(B.dX,B.fX3,4.2,B.q2,3,8)
d.ed(B.aVg,17,B.ER,5,9)
d.ed(B.h2N,11,B.XB,4,8)
d.ed(B.haI,12,B.bkN,4,8)
break A}if("pine"===e){d.dN(B.dX,B.aV8,3,B.q2,8)
for(u=0;u<3;++u){h=u*14
d.L6(new A.q(0,8+h,0),new A.q(0,26+h,0),14-u*3.5,B.aey,1.5,10)}break A}if("bush"===e){d.ed(B.x3,9,B.bht,4,8)
d.ed(B.h1c,6.5,B.XB,4,8)
break A}if("flowers"===e){for(v=0;v<5;++v){h=B.djx[v]
t=h.a
s=h.b
d.dN(new A.q(t,0,s),new A.q(t,7,s),0.4,B.aey,5)
d.ed(new A.q(t,8,s),2.2,h.c,3,6)}break A}if("fence"===e){for(v=0;v<4;++v)d.aZ(new A.q(B.dlf[v],9,0),B.h7L,f,0.05)
d.aO(B.Ao,B.aWT,h)
d.aO(B.aas,B.aWT,h)
break A}if("lamppost"===e){d.dN(B.dX,B.aVh,1.3,B.hp,5)
d.dN(B.dX,B.fX8,3.5,B.hp,6)
break A}if("bench"===e){d.aZ(B.aVa,B.aVU,f,0.1)
d.aZ(B.fWC,B.h0j,f,0.1)
d.aO(B.h9O,B.aVR,B.hp)
d.aO(B.fZb,B.aVR,B.hp)
break A}if("car"===e){d.aZ(B.aV8,B.h2i,f,0.4)
d.aZ(B.haj,B.h0o,f,0.4)
d.aZ(B.fZk,B.h4C,B.hV,0.6)
d.aO(B.hb2,B.aaz,B.o3)
d.aO(B.h5e,B.aaz,B.o3)
for(v=0;v<2;++v){t=B.a4Q[v]
d.dN(new A.q(t,5,-18),new A.q(t,5,-21),5.5,D.nf,12)
d.dN(new A.q(t,5,18),new A.q(t,5,21),5.5,D.nf,12)}break A}if("road"===e||"roadturn"===e||"roadtee"===e||"roadcross"===e){A.i2h(d,e)
break A}if("roundabout"===e){d.dN(B.dX,B.h4v,72,B.Mh,16)
d.dN(B.h4O,B.aWE,17,D.bm,10)
d.dN(B.aWE,B.aWk,15,B.bjZ,10)
d.ed(B.aax,6,E.Xk,3,6)
d.dN(B.aWk,B.aaw,0.9,B.q2,5)
break A}if("house2"===e||"shop"===e||"hospital"===e||"firestation"===e||"school"===e){h=C.a([],x.z)
r=new A.fk(h)
r.b=d.b
r.r=!0
r.f=d.f
A.hmh(r,e,f)
D.d.v(d.a,A.bBL(h,B.h8u,B.dX))
break A}if("bighouse"===e){h=C.a([],x.z)
q=new A.fk(h)
q.b=d.b
q.r=!0
q.f=d.f
A.hmh(q,"house2",f)
D.d.v(d.a,A.bBL(h,B.h9g,B.dX))
break A}if("pole"===e){d.L6(B.dX,B.fW5,2.6,B.q2,2,5)
d.aO(B.fW1,B.h0q,B.bfF)
for(v=0;v<3;++v){t=B.aA_[v]
d.dN(new A.q(t,116,0),new A.q(t,121,0),1.1,D.bN,4)}d.dN(B.h0B,B.h0z,5.5,D.bm,6)
d.aO(B.fYw,B.fZF,D.jc)
break A}if("crate"===e){d.aZ(B.aaw,B.h_7,B.jq,0.05)
d.aO(B.hcC,B.fZ4,B.vy)
d.fT(B.han,3.4,D.aw,3,5,0.3)
d.fT(B.h17,3.4,D.aC,3,5,0.3)
break A}if("billboard"===e){d.x=$.dS=$.dS+1
for(v=0;v<2;++v){t=B.a4Q[v]
d.dN(new A.q(t,0,-1),new A.q(t,40,-1),1.6,D.jc,8)}d.aZ(B.fXp,B.h1O,D.cp,0.3)
d.x=0
break A}if("tower"===e||"hq"===e){d.x=$.dS=$.dS+1
p=e==="hq"
o=p?170:100
n=p?90:70
m=p?150:A.hqp(f)
l=p?D.bO:B.dqD[D.o.F(f.l()>>>4,6)]
k=new A.fjf(d)
d.aZ(new A.q(0,m/2,0),new A.q(o,m,n),l,0.25)
k.$4(o,n,20,m-8)
if(p){h=o*0.66
w=n*0.66
d.aZ(new A.q(0,m+60,0),new A.q(h,120,w),D.bN,0.25)
k.$4(h,w,m+16,m+112)
d.aZ(new A.q(0,m+124,0),new A.q(o*0.7,8,n*0.7),F.fz,0.4)}else{d.aO(new A.q(0,m+3,0),new A.q(o+4,6,n+4),D.cp)
d.aO(new A.q(o*0.2,m+12,0),new A.q(o*0.3,12,n*0.3),D.dv)}j=p?m+128:m+6
for(h=o*0.3,h=[-h,h],w=j+8,v=0;v<2;++v)d.aO(new A.q(h[v],w,0),B.h00,D.jc)
h=p?112:84
d.aZ(new A.q(0,j+34,0),new A.q(h,38,3),E.jK,0.3)
h=n/2
A.kG(d,new A.q(0,17,h+0.6),B.hE,B.ea,34,34,D.cp,B.iq,0.5)
A.kG(d,new A.q(0,17,h+0.7),B.ea.FW(B.iq),B.ea,1.2,34,B.hV,B.iq,0.6)
d.aZ(new A.q(0,38,h+5),B.h0p,F.fz,0.3)
d.x=0
break A}if("store"===e){d.x=$.dS=$.dS+1
d.aZ(B.Vk,B.aVq,f,0.2)
d.aO(B.aav,B.aVr,D.cp)
A.kG(d,B.aWY,B.hE,B.ea,112,30,B.hV,B.iq,0.6)
d.aO(B.aVf,B.aVp,D.by)
d.aO(B.aVi,B.aVm,D.av)
d.x=0
break A}if("dmv"===e){d.x=$.dS=$.dS+1
d.aZ(B.Vk,B.aVq,D.aL,0.2)
d.aO(B.aav,B.aVr,D.d7)
A.kG(d,B.aWY,B.hE,B.ea,112,30,B.hV,B.iq,0.6)
d.aO(B.aVf,B.aVp,D.bk)
d.aO(B.aVi,B.aVm,D.d7)
d.aO(B.h5V,B.h8A,D.bG)
d.aO(B.hcj,B.h1x,D.d7)
d.x=0
break A}if("ubstation"===e){d.x=$.dS=$.dS+1
for(v=0;v<2;++v){t=B.dll[v]
for(i=0;i<2;++i){s=E.Rx[i]
d.dN(new A.q(t,0,s),new A.q(t,50,s),2.2,D.aJ,6)}}d.aZ(B.aVh,B.fYs,D.av,0.3)
d.aO(B.fXz,B.fYu,D.bG)
d.aZ(B.fWV,B.fYl,D.dt,0.6)
d.aO(B.fW2,B.h2f,D.br)
d.aO(B.fXE,B.h1T,D.aJ)
d.dN(B.h0V,B.h0Y,2,D.jc,6)
d.aO(B.h0Z,B.h_V,D.av)
d.aO(B.h3W,B.h4Q,D.bG)
d.aO(B.hct,B.haP,D.c)
d.x=0
break A}if("gasstation"===e){d.x=$.dS=$.dS+1
for(v=0;v<2;++v){t=B.aA2[v]
for(i=0;i<2;++i){s=B.cGn[i]
d.dN(new A.q(t,0,s),new A.q(t,46,s),2.4,D.bO,6)}}d.aZ(B.fXr,B.fYz,D.by,0.3)
d.aO(B.hcO,B.fYB,F.fz)
for(v=0;v<2;++v){t=E.Rx[v]
d.aZ(new A.q(t,9,20),B.h21,D.iu,0.3)
d.aO(new A.q(t,15,20.2),B.h_d,D.by)}d.aZ(B.fWu,B.h2d,f,0.2)
d.dN(B.haw,B.hax,2.2,D.jc,6)
d.aO(B.hay,B.h_H,D.av)
d.x=0
break A}if("townsign"===e){d.x=$.dS=$.dS+1
for(v=0;v<2;++v){t=B.dl7[v]
d.dN(new A.q(t,0,0),new A.q(t,316,0),5.5,D.jc,6)}d.aZ(B.fWT,B.h_L,E.jK,0.3)
d.aO(B.fX_,B.aVQ,F.fz)
d.aO(B.fWq,B.aVQ,F.fz)
d.x=0
break A}if("adboard"===e){d.x=$.dS=$.dS+1
for(v=0;v<2;++v){t=B.dl6[v]
d.dN(new A.q(t,0,0),new A.q(t,205,0),4.5,D.jc,6)}d.aZ(B.fWb,B.h_D,E.jK,0.3)
d.aO(B.fWw,B.aVK,F.fz)
d.aO(B.aVj,B.aVK,F.fz)
d.x=0
break A}if("cornersign"===e){d.x=$.dS=$.dS+1
for(v=0;v<2;++v){t=B.aA2[v]
d.dN(new A.q(t,0,0),new A.q(t,125,0),3,D.jc,6)}d.aZ(B.fW4,B.fYV,E.jK,0.3)
d.aO(B.fWk,B.fYX,F.fz)
d.x=0
break A}if("firetruck"===e){d.aZ(B.aV9,B.h2K,D.by,0.3)
d.aZ(B.h_M,B.fZM,D.by,0.3)
d.aZ(B.h7w,B.h12,B.hV,0.6)
d.aO(B.h9A,B.hbq,D.dv)
for(u=0;u<6;++u)d.aO(new A.q(-34+u*11,24,0),B.h6m,D.dv)
d.aO(B.h_N,B.aW3,D.d2)
d.aO(B.h82,B.h4c,B.blV)
for(v=0;v<3;++v){t=B.dlh[v]
d.dN(new A.q(t,6,-19),new A.q(t,6,-22.5),6,D.nf,12)
d.dN(new A.q(t,6,19),new A.q(t,6,22.5),6,D.nf,12)}break A}if("ambulance"===e){d.aZ(B.Kq,B.h2j,D.c,0.4)
d.aZ(B.h_v,B.h_0,D.c,0.4)
d.aZ(B.h4u,B.h8I,B.hV,0.6)
d.aO(B.hc2,B.aWo,D.by)
d.aO(B.h64,B.aWo,D.by)
d.aO(B.aWK,B.h5t,D.by)
d.aO(B.aWK,B.h3R,D.by)
d.aO(B.h_y,B.aW3,D.aw)
for(v=0;v<2;++v){t=B.a4Q[v]
d.dN(new A.q(t,6,-19),new A.q(t,6,-22.5),6,D.nf,12)
d.dN(new A.q(t,6,19),new A.q(t,6,22.5),6,D.nf,12)}break A}if("dog"===e||"cat"===e||"cow"===e||"sheep"===e||"chicken"===e||"horse"===e){A.hlN(d,e,f,0)
break A}if("pond"===e){h=C.a([],x.z)
q=new A.fk(h)
q.b=d.b
q.f=d.f
q.r=!0
q.dR(B.dX,B.h9k,28,B.bn5,0.8,22)
D.d.v(d.a,A.bBL(h,B.h3l,B.dX))
for(v=0;v<3;++v){h=B.d68[v]
d.ed(new A.q(h.a,1.2,h.b),2.6,B.ag4,3,6)}break A}if("swing"===e){d.dN(B.h9X,B.h_2,1.6,D.d1,8)
for(v=0;v<2;++v){t=E.a4P[v]
d.dN(new A.q(t,38,0),new A.q(t,0,14),1.4,D.d1,6)
d.dN(new A.q(t,38,0),new A.q(t,0,-14),1.4,D.d1,6)}for(v=0;v<2;++v){t=E.a4R[v]
d.dN(new A.q(t,38,0),new A.q(t,15,0),0.3,B.hp,4)}d.aO(B.Kq,B.hc9,f)
break A}if("shed"===e){d.aZ(B.Kq,B.h0I,f,0.05)
d.aO(B.aau,B.h0T,B.XR)
d.aO(B.h9b,B.h9_,h)
break A}if("doghouse"===e){d.aZ(B.aaw,B.h_1,f,0.05)
d.aO(B.h_o,B.hbh,B.XR)
d.aO(B.h7v,B.hcm,B.LO)
break A}d.aO(B.Ao,B.fY6,f)}},
cfI:function cfI(){},
fN6:function fN6(d,e,f){this.a=d
this.b=e
this.c=f},
fN4:function fN4(d,e,f){this.a=d
this.b=e
this.c=f},
fN3:function fN3(d,e,f){this.a=d
this.b=e
this.c=f},
fN5:function fN5(d){this.a=d},
fwb:function fwb(d){this.a=d},
fvY:function fvY(){},
fw8:function fw8(){},
fw9:function fw9(d,e,f){this.a=d
this.b=e
this.c=f},
fvZ:function fvZ(){},
fw_:function fw_(){},
fw0:function fw0(){},
fw1:function fw1(d){this.a=d},
fw3:function fw3(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fw4:function fw4(d,e,f){this.a=d
this.b=e
this.c=f},
fw5:function fw5(d,e,f){this.a=d
this.b=e
this.c=f},
fw6:function fw6(d,e,f){this.a=d
this.b=e
this.c=f},
fw7:function fw7(d,e,f){this.a=d
this.b=e
this.c=f},
fwa:function fwa(d){this.a=d},
fw2:function fw2(d){this.a=d},
fp9:function fp9(d){this.a=d},
fpa:function fpa(d){this.a=d},
fp5:function fp5(d){this.a=d},
fp6:function fp6(d,e){this.a=d
this.b=e},
fp7:function fp7(d){this.a=d},
fox:function fox(){},
foy:function foy(){},
foz:function foz(d){this.a=d},
foK:function foK(d){this.a=d},
foV:function foV(){},
fp8:function fp8(d,e){this.a=d
this.b=e},
fp_:function fp_(d){this.a=d},
fp0:function fp0(d){this.a=d},
fp1:function fp1(d){this.a=d},
fp2:function fp2(d){this.a=d},
fp3:function fp3(d){this.a=d},
fp4:function fp4(d){this.a=d},
foA:function foA(d){this.a=d},
foB:function foB(d){this.a=d},
foC:function foC(d){this.a=d},
foD:function foD(d){this.a=d},
foE:function foE(d){this.a=d},
foF:function foF(d){this.a=d},
foG:function foG(){},
foH:function foH(){},
foI:function foI(){},
foJ:function foJ(){},
foL:function foL(d){this.a=d},
foM:function foM(d){this.a=d},
foN:function foN(d){this.a=d},
foO:function foO(d){this.a=d},
foP:function foP(){},
foQ:function foQ(){},
foR:function foR(){},
foS:function foS(){},
foT:function foT(){},
foU:function foU(d,e){this.a=d
this.b=e},
foW:function foW(d){this.a=d},
foX:function foX(d){this.a=d},
foY:function foY(){},
foZ:function foZ(){},
fza:function fza(d){this.a=d},
fz7:function fz7(){},
fz8:function fz8(d){this.a=d},
fz9:function fz9(d){this.a=d},
ffq:function ffq(d,e){this.a=d
this.b=e},
ffg:function ffg(d,e,f){this.a=d
this.b=e
this.c=f},
fpZ:function fpZ(d,e){this.a=d
this.b=e},
fpw:function fpw(d,e,f){this.a=d
this.b=e
this.c=f},
fpx:function fpx(d,e){this.a=d
this.b=e},
fpy:function fpy(d){this.a=d},
fpz:function fpz(d,e,f){this.a=d
this.b=e
this.c=f},
fpK:function fpK(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fpS:function fpS(){},
fpT:function fpT(d,e,f){this.a=d
this.b=e
this.c=f},
fpU:function fpU(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fpV:function fpV(d,e){this.a=d
this.b=e},
fpW:function fpW(d,e,f){this.a=d
this.b=e
this.c=f},
fpX:function fpX(d){this.a=d},
fpY:function fpY(){},
fpA:function fpA(d){this.a=d},
fpB:function fpB(d){this.a=d},
fpC:function fpC(d){this.a=d},
fpD:function fpD(d){this.a=d},
fpE:function fpE(d,e){this.a=d
this.b=e},
fpF:function fpF(d,e){this.a=d
this.b=e},
fpG:function fpG(d,e,f){this.a=d
this.b=e
this.c=f},
fpH:function fpH(d,e){this.a=d
this.b=e},
fpI:function fpI(d,e){this.a=d
this.b=e},
fpJ:function fpJ(d,e){this.a=d
this.b=e},
fpL:function fpL(d,e){this.a=d
this.b=e},
fpM:function fpM(d,e,f){this.a=d
this.b=e
this.c=f},
fpN:function fpN(d,e,f){this.a=d
this.b=e
this.c=f},
fpO:function fpO(d,e){this.a=d
this.b=e},
fpP:function fpP(d,e){this.a=d
this.b=e},
fpQ:function fpQ(d,e){this.a=d
this.b=e},
fpR:function fpR(d){this.a=d},
fjf:function fjf(d){this.a=d},
hch(){var w=x.S
return new A.bUw(C.eC([72],w),C.aY(w),C.aY(w),C.aY(w))},
i77(d){var w
A:{if(81===d){w="outlet"
break A}if(82===d){w="switch"
break A}if(84===d){w="gfci"
break A}if(86===d||87===d){w="ptrap"
break A}if(85===d){w="faucet"
break A}w=null
break A}return w},
agA(a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=C.a([],x.z),a0=new A.fk(d)
a0.b=70
a0.hn(B.h8w,B.hbe,B.bjO,4)
a0.c=1
a0.b=91
w=new A.fwg(a0)
w.$3(B.h3Q,B.h35,15)
w.$4$alongX(B.haO,B.h7b,11,!1)
w.$4$alongX(B.h11,B.h3f,11,!1)
w.$4$alongX(B.h9P,B.h4a,6,!1)
w.$4$alongX(B.h20,B.h7c,6,!1)
for(v=0;v<=12;++v)a0.aDB(new A.q(-12+v*2,8.4,0),B.h7S,B.Y8,!1,0.05)
a0.c=2
a0.b=92
u=new A.fwd(a0)
u.$2(B.cpF,B.tG)
u.$2(B.di5,B.o_)
u.$2(B.dn9,B.o_)
t=new A.fwc(a0)
t.$1(B.cZM)
t.$1(B.d4L)
a0.c=3
a0.b=93
s=new A.fwf(a0)
s.$1(B.cYG)
s.$2$col(B.cX2,B.oR)
s.$2$col(B.cW7,B.oR)
s.$1(B.deX)
a0.c=4
a0.b=0
a0.d=0.22
a0.hn(B.h3e,B.h6p,B.B3,4)
a0.hn(B.h6l,B.aWv,B.B3,4)
a0.hn(B.h3T,B.aWv,B.B3,4)
a0.hn(B.h4Z,B.aWA,B.B3,3)
a0.hn(B.hcA,B.aWA,B.B3,3)
a0.d=1
a0.c=5
a0.e=0.3
a0.b=0
a0.n8(B.h9w,B.h3b,B.bhd,0.1,4)
a0.b=71
a0.aZ(B.h8E,B.h7T,B.Xq,0.5)
a0.aO(B.hc8,B.h4G,B.F2)
r=[72,73,74,75,76]
for(q=a1.d,p=a1.e,v=0;v<5;++v){o=D.o.F(v,2)
n=D.o.ao(v,2)
m=r[v]
l=q.t(0,m)
k=p.t(0,m)
a0.b=m
m=9.55+o*0.5
j=5.7-n*0.5
a0.aZ(new A.q(m,j,-7.5),B.h2L,B.Z0,0.3)
if(l)i=0
else i=k?-0.07:0.07
if(l)h=D.cb
else h=k?D.bm:D.bO
a0.aZ(new A.q(m+0,j+i,-7.42),B.h4k,h,0.4)}a0.b=90
a0.aZ(B.h7d,B.h18,B.brs,0.1)
a0.aZ(B.haS,B.h3z,B.YJ,0.1)
a0.aZ(B.hd6,B.aWS,B.YJ,0.1)
a0.aZ(B.h3s,B.aWS,B.YJ,0.1)
g=new A.fwe(a0)
g.$3(81,B.h29,a1.x?B.xN:B.Yr)
a0.b=81
a0.aO(B.h7e,B.aWM,B.Fe)
a0.aO(B.h5y,B.aWM,B.Fe)
g.$5$h$w(82,B.hcd,G.YC,0.65,0.4)
a0.b=82
a0.aZ(B.h98,B.h15,B.afq,0.4)
f=!q.t(0,72)
a0.b=83
a0.dR(B.h8V,B.aWf,0.5,B.boZ,0.4,14)
a0.bbB(B.hbA,0.3,f?Ag.Fx:B.bju,0.7)
if(f){a0.b=0
a0.d=0.22
a0.fT(B.aW2,1.5,B.XK,4,10,0)
a0.d=1}a0.b=94
a0.aZ(B.hbn,B.aWW,B.jq,0.1)
a0.aZ(B.h7s,B.aWW,B.jq,0.1)
a0.aZ(B.hcb,B.h40,B.jq,0.1)
a0.n8(B.h6H,B.hbD,B.M7,0.5,2)
a0.aZ(B.h8z,B.hd2,B.Fc,0.7)
a0.b=85
a0.jh(A.H2(B.d8u,0.2,6),0.055,B.jH,!1,0.9,8)
a0.b=84
a0.aZ(B.hbO,B.h9o,B.Yr,0.3)
a0.aO(B.h56,B.hc7,a1.y?B.ag3:B.aig)
a0.b=86
a0.jh(A.H2(B.d_f,0.35,3),0.11,B.pS,!1,0.3,8)
a0.b=87
a0.dR(B.h6_,B.h8K,0.19,a1.c?B.Xx:B.bmK,0.3,8)
a0.b=88
a0.aZ(B.h0n,B.h2T,B.B8,0.7)
a0.BC(B.h8v,B.aWN,0.72,B.B8,0.55,0.7,16)
a0.dR(B.aWN,B.h6S,0.78,B.bow,0.7,16)
a0.b=89
a0.dR(B.haX,B.aW5,0.85,B.bc1,0.6,18)
a0.dR(B.aW5,B.h6n,0.5,B.bc3,0.5,12)
a0.aO(B.h7C,B.hcU,B.bmE)
a0.b=95
for(p=a1.f,m=a1.r,v=0;v<3;++v){e=B.cG0[v]
if(m.t(0,v)){j=e.a
i=e.b
a0.aO(new A.q(j,i,-7.82),B.h8W,B.B3)
a0.aO(new A.q(j,i,-7.79),B.h6t,B.bfw)}else if(p.t(0,v)){j=e.a
i=e.b
a0.aO(new A.q(j,i,-7.82),B.fZu,B.ahg)
a0.aO(new A.q(j,i,-7.8),B.h7q,B.brJ)}}if(a1.w){a0.b=96
a0.dR(B.h6z,B.h5S,0.1,D.d1,0.7,8)}a0.e=0
a0.c=6
a0.b=0
a0.d=0.4
a0.biB(B.aVX,B.aWL,B.aaF,B.aaD,B.aeP,B.h78,!0)
a0.biB(B.aWG,B.aWQ,B.aaD,B.aaF,B.aeP,B.h92,!0)
a0.bjM(B.aVX,B.aWQ,B.aaD,B.af2)
a0.bjM(B.aWL,B.aWG,B.aaF,B.af2)
a0.d=1
p=q.t(0,72)?"This breaker has TRIPPED (it is in the middle, orange). The living room has no power. Tap it to flip it off and on again.":"This breaker is ON. The living room has power."
q=q.t(0,72)?"The light is off because the living room breaker has tripped.":"The ceiling light is on."
m=a1.b
j=m&&!a1.c?"Water is dripping from the slip nut here. Pick the wrench, then tap the nut to tighten it.":"The P-trap holds a water seal that blocks sewer gas. Tap Open lesson to build one."
m=m&&!a1.c?"This slip nut is loose and the trap is dripping. Pick the wrench and tap here to tighten it.":"The slip nut is tight."
return new A.tM(d,C.G([70,B.ec3,91,B.ebu,92,B.ebN,93,B.ebV,71,B.ec8,72,new A.cW("Living room breaker",p,B.hcH,3.5),73,B.ebF,74,B.ebX,75,B.ebk,76,B.ebQ,81,B.ebS,82,B.ebb,83,new A.cW("Ceiling light",q,B.aWf,7),84,B.ebY,85,B.ebm,86,new A.cW("P-trap under the sink",j,B.h8t,4.5),87,new A.cW("Slip nut (leaking?)",m,B.aWi,3.5),88,B.eb8,89,B.ebW,90,B.ec_,94,B.ebE,95,B.ec1,96,B.ebd],x.S,x.q),B.zm,B.wv,null,0)},
hrs(d,e){var w,v,u,t,s,r,q,p=C.a([],x.z),o=new A.fk(p)
o.c=5
o.e=0.8
if(d.w)for(w=e*1.5,v=0;v<6;++v){u=D.k.F(w+v/6,1)
o.fT(new A.q(3.4+Math.sin(v*2)*0.12,3.3-u*u*2.8,-7.7),0.05,D.LN,3,6,0.9)}if(d.as){u=D.k.F(e*1.1,1)
o.fT(new A.q(3,3.9-u*u*0.7,-6.95),0.05,B.XH,3,6,0.9)}if(d.Q)for(w=e*1.6,v=0;v<6;++v){u=D.k.F(w+v/6,1)
o.fT(new A.q(8.2+Math.sin(v*1.7)*0.15,2.2-u*1.5,-7.2),0.05,B.XH,3,6,0.9)}if(d.at){o.d=0.55
o.aZ(B.h3p,B.h53,B.boN,0.8)
o.d=1}if(d.x)for(w=e*2,t=e*6,v=0;v<8;++v){u=D.k.F(w+v*0.13,1)
s=v*2.4+t
r=Math.cos(s)
s=Math.sin(s)
q=C.ar(F.Mx,E.YU,1-u)
q.toString
o.fT(new A.q(-3.2+r*u*0.7,1.3+s*u*0.7,-7.6+u*0.3),0.05,q,3,5,0)}if(d.z&&!d.d.t(0,72)){o.b=0
o.d=D.k.E((Math.sin(e*17)+Math.sin(e*29)+2)/4*0.5,0,0.6)
o.fT(B.aW2,1.5,B.XK,4,10,0)
o.d=1}if(d.b&&!d.c){for(w=e*1.3,v=0;v<5;++v){u=D.k.F(w+v*0.2,1)
o.fT(new A.q(3.05,1.45-u*u*1.4,-6.95),0.05,B.YM,3,6,0.9)}o.d=0.5
o.aZ(B.h34,new A.q(0.7+0.3*Math.sin(e),0.02,0.5),B.YM,0.9)
o.d=1}return p},
bUw:function bUw(d,e,f,g){var _=this
_.a=5
_.b=!0
_.c=!1
_.d=d
_.e=e
_.f=f
_.r=g
_.at=_.as=_.Q=_.z=_.y=_.x=_.w=!1},
fwg:function fwg(d){this.a=d},
fwd:function fwd(d){this.a=d},
fwc:function fwc(d){this.a=d},
fwf:function fwf(d){this.a=d},
fwe:function fwe(d){this.a=d},
fV(d,e,f,g){var w
try{I.dY(d,"",e,0,f,g)}catch(w){}},
yI(){A.fV(880,80,0.25,"tri")
C.bP(W.aj9,new A.fxb(),x.H)},
hJz(){return new A.ND(null)},
Y3(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w){return new A.b7l(t,d,u,s,f,r,q,j,g,h,m,n,i,k,v,w,l,o,p,e,null)},
wR(d,e,f,g,h){var w=null,v=g?e.j(0.25):D.w.j(0.5),u=C.m(18),t=C.J(g?e:D.aZ,D.r,1),s=x.p,r=C.a([],s)
D.d.v(r,C.a([C.X(f,g?e:D.ad,w,w,w,16),D.em],s))
r.push(C.d(d,w,w,w,w,w,w,C.l(w,w,g?e:D.ad,w,w,w,w,w,w,w,w,12,w,w,D.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w))
return C.aB(w,C.p(w,C.B(r,D.m,w,D.e,D.Q,0,w,w),D.f,w,w,new C.o(v,w,t,u,w,w,D.n),w,w,w,w,D.hg,w,w,w),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,h,w,w,w,w,w,w,!1,D.a4)},
ua(d,e,f,g){var w=null,v=f==null,u=v?D.ds:g.j(0.9),t=C.m(14),s=C.X(e,v?D.bY:D.w,w,w,w,18)
return C.E(C.aB(w,C.p(w,C.B(C.a([s,D.bo,new C.ds(1,D.cn,C.d(d,w,w,w,w,w,w,C.l(w,w,v?D.bY:D.w,w,w,w,w,w,w,w,w,12.5,w,w,D.u,w,w,!0,w,w,w,w,w,w,w,w),D.L,w,w),w)],x.p),D.m,w,D.b8,D.i,0,w,w),D.f,w,w,new C.o(u,w,w,t,w,w,D.n),w,w,w,w,D.tZ,w,w,w),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,!1,D.a4),1)},
fOg(d,e,f,g){return C.bU(E.lw,null,new A.fOi(e,g,f),d,!0,!0,!0,D.k1,!1,!1,x.H)},
TY(d,e,f,g,h,i,j){return new A.aXt(i,d,g,f,e,h,j,null)},
fxb:function fxb(){},
pu:function pu(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
ND:function ND(d){this.a=d},
bki:function bki(){this.c=this.a=null},
dRI:function dRI(d){this.a=d},
dRJ:function dRJ(d){this.a=d},
dRK:function dRK(d){this.a=d},
dRL:function dRL(d){this.a=d},
dRP:function dRP(d){this.a=d},
dRQ:function dRQ(d){this.a=d},
dRR:function dRR(d){this.a=d},
dRS:function dRS(d){this.a=d},
dRT:function dRT(d){this.a=d},
dRU:function dRU(d){this.a=d},
dRV:function dRV(d){this.a=d},
dRW:function dRW(d){this.a=d},
dRM:function dRM(d,e){this.a=d
this.b=e},
dRN:function dRN(d){this.a=d},
dRO:function dRO(d){this.a=d},
aw9:function aw9(d,e){this.c=d
this.a=e},
bt7:function bt7(){this.c=this.a=this.d=null},
f3r:function f3r(d){this.a=d},
f3q:function f3q(){},
b7l:function b7l(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0){var _=this
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
cwo:function cwo(){},
cwp:function cwp(){},
fOi:function fOi(d,e,f){this.a=d
this.b=e
this.c=f},
fOh:function fOh(){},
aXt:function aXt(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
bWC:function bWC(d){this.a=d},
DV:function DV(d,e,f){this.c=d
this.d=e
this.a=f},
aAe:function aAe(d){var _=this
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
dab:function dab(d,e){this.a=d
this.b=e},
da9:function da9(d,e,f){this.a=d
this.b=e
this.c=f},
daa:function daa(d){this.a=d},
da8:function da8(d){this.a=d},
d9X:function d9X(d){this.a=d},
d9Y:function d9Y(d){this.a=d},
d9W:function d9W(d){this.a=d},
d9Z:function d9Z(d){this.a=d},
da_:function da_(d){this.a=d},
da0:function da0(d){this.a=d},
da1:function da1(d){this.a=d},
da2:function da2(d,e,f){this.a=d
this.b=e
this.c=f},
da3:function da3(d){this.a=d},
da4:function da4(d,e){this.a=d
this.b=e},
da5:function da5(d,e){this.a=d
this.b=e},
da6:function da6(d,e){this.a=d
this.b=e},
da7:function da7(d){this.a=d},
dac:function dac(d,e){this.a=d
this.b=e},
dad:function dad(d){this.a=d},
dam:function dam(){},
dav:function dav(d,e,f){this.a=d
this.b=e
this.c=f},
daC:function daC(d){this.a=d},
daj:function daj(){},
dan:function dan(d){this.a=d},
dao:function dao(d){this.a=d},
daw:function daw(d){this.a=d},
dax:function dax(d){this.a=d},
dal:function dal(d){this.a=d},
day:function day(d){this.a=d},
dak:function dak(d){this.a=d},
daz:function daz(d){this.a=d},
daA:function daA(d){this.a=d},
daB:function daB(d){this.a=d},
daD:function daD(d){this.a=d},
dap:function dap(d,e){this.a=d
this.b=e},
dai:function dai(d,e){this.a=d
this.b=e},
daq:function daq(d,e){this.a=d
this.b=e},
dar:function dar(d){this.a=d},
dah:function dah(d){this.a=d},
das:function das(d){this.a=d},
dag:function dag(d){this.a=d},
dat:function dat(d){this.a=d},
daf:function daf(d){this.a=d},
dau:function dau(d){this.a=d},
dae:function dae(d){this.a=d},
a9y:function a9y(d,e){this.c=d
this.a=e},
aGa:function aGa(){var _=this
_.f=_.e=_.d=$
_.r=""
_.w=0
_.x=null
_.y=!1
_.c=_.a=_.z=null},
eTH:function eTH(d,e,f){this.a=d
this.b=e
this.c=f},
eTI:function eTI(d){this.a=d},
eTG:function eTG(d){this.a=d},
eTA:function eTA(d){this.a=d},
eTB:function eTB(d,e){this.a=d
this.b=e},
eTC:function eTC(d,e){this.a=d
this.b=e},
eTD:function eTD(d,e){this.a=d
this.b=e},
eTE:function eTE(d){this.a=d},
eTF:function eTF(d,e){this.a=d
this.b=e},
eTM:function eTM(){},
eTQ:function eTQ(d,e){this.a=d
this.b=e},
eTN:function eTN(d){this.a=d},
eTO:function eTO(d,e){this.a=d
this.b=e},
eTL:function eTL(d,e){this.a=d
this.b=e},
eTP:function eTP(d){this.a=d},
eTK:function eTK(d){this.a=d},
eTJ:function eTJ(){},
a5_:function a5_(d,e){this.c=d
this.a=e},
aAy:function aAy(){var _=this
_.f=_.e=_.d=$
_.r=""
_.w=0
_.x=null
_.y=!1
_.c=_.a=_.z=null},
ddd:function ddd(d,e,f){this.a=d
this.b=e
this.c=f},
dde:function dde(d){this.a=d},
ddc:function ddc(d){this.a=d},
dd5:function dd5(d){this.a=d},
dd8:function dd8(d){this.a=d},
dd9:function dd9(d,e){this.a=d
this.b=e},
dda:function dda(d,e){this.a=d
this.b=e},
dd7:function dd7(d){this.a=d},
ddb:function ddb(d,e){this.a=d
this.b=e},
dd6:function dd6(d){this.a=d},
ddi:function ddi(){},
ddo:function ddo(d,e){this.a=d
this.b=e},
ddj:function ddj(d){this.a=d},
ddk:function ddk(d){this.a=d},
ddh:function ddh(d){this.a=d},
ddm:function ddm(d,e){this.a=d
this.b=e},
ddg:function ddg(d,e){this.a=d
this.b=e},
ddl:function ddl(d){this.a=d},
ddn:function ddn(d){this.a=d},
ddf:function ddf(d){this.a=d},
aBq:function aBq(d){this.a=d},
aBr:function aBr(d){var _=this
_.d=d
_.f=_.e=$
_.r=0
_.w=""
_.x=null
_.y=!1
_.c=_.a=_.z=null},
dkh:function dkh(d,e,f){this.a=d
this.b=e
this.c=f},
dki:function dki(d){this.a=d},
dkg:function dkg(d){this.a=d},
dkb:function dkb(d){this.a=d},
dkd:function dkd(d,e){this.a=d
this.b=e},
dke:function dke(d,e){this.a=d
this.b=e},
dkf:function dkf(d,e){this.a=d
this.b=e},
dkc:function dkc(d){this.a=d},
dkq:function dkq(d,e){this.a=d
this.b=e},
dkl:function dkl(d,e){this.a=d
this.b=e},
dkn:function dkn(d){this.a=d},
dkm:function dkm(d){this.a=d},
dko:function dko(d){this.a=d},
dkk:function dkk(d){this.a=d},
dkp:function dkp(d){this.a=d},
dkj:function dkj(d,e){this.a=d
this.b=e},
afD:function afD(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bwM:function bwM(){var _=this
_.d=null
_.e=!1
_.c=_.a=null},
feZ:function feZ(d){this.a=d},
feX:function feX(d){this.a=d},
feY:function feY(d){this.a=d},
feW:function feW(d){this.a=d},
ff0:function ff0(d){this.a=d},
ff1:function ff1(d){this.a=d},
ff_:function ff_(d){this.a=d},
jL:function jL(d,e){this.a=d
this.b=e},
N0:function N0(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a71:function a71(d){this.a=d},
cb2:function cb2(d){this.a=d},
h0J(){var w=x.N
return new A.cmZ(C.aY(w),C.G(["n1",!1,"n2",!1],w,x.R),C.U(x.S,w))},
ii0(d,e,f){var w,v
if(!f.c.t(0,e)){w=f.d
return e==="hot"?"The red (hot) hose goes on the LEFT side only. "+w:"The blue (cold) hose goes on the RIGHT side only. "+w}w=d.e
v=f.a
if(w.h(0,v)!=null)return"That connection already has a hose."
w.n(0,v,e)
return null},
fNB(){var w,v,u=C.a([B.aVT,B.h5M],x.o)
for(w=1;w<=12;++w){v=3.141592653589793+3.141592653589793*w/12
u.push(new A.q(3+3*Math.cos(v),0.2+3*Math.sin(v),0))}D.d.v(u,A.H2(B.d9R,1,6))
return u},
bC4(d){var w,v,u,t,s="trap",r=C.a([],x.z),q=new A.fk(r)
q.b=49
q.n8(B.fZn,B.h0a,B.jq,0.1,2)
q.n8(B.hcy,B.fZr,B.jq,0.1,2)
q.b=47
q.hn(B.h77,B.h0b,B.vC,3)
q.hn(B.h_n,B.fZs,B.vC,3)
q.b=46
q.n8(B.h1f,B.h7Z,B.M7,0.5,3)
q.bdy(B.h9u,B.Kq,6.5,B.Fc,!0,0.7,20)
q.dR(B.h8n,B.h5o,1.5,B.jH,0.85,14)
q.b=48
q.Tc(B.aaH,B.h3N,0.92,B.pS,!1,!0,0.3,14)
q.cXL(B.aaH,B.hbK,1,0.72,B.pS,0.3)
w=new A.fwS(d,q)
w.$5(41,B.a4b,B.jH,0.85,"tail")
w.$5(42,A.fNB(),B.pS,0.3,s)
w.$5(43,B.a55,B.pS,0.3,"arm")
w=new A.fwR(d,q)
v=d.a
w.$6(44,"n1",B.aaC,B.ea,B.h47,v.t(0,"tail")&&v.t(0,s))
w.$6(45,"n2",B.aaE,B.hE,B.h9n,v.t(0,s)&&v.t(0,"arm"))
if(v.t(0,s)){q.b=0
q.d=0.55
q.e=0.4
u=A.fNB()
w=C.T(u).k("Z<1>")
t=C.C(new C.Z(u,new A.fwQ(),w),w.k("L.E"))
if(t.length>1)q.aJa(t,0.4092,B.YZ,!1,!0,0.6,8)
q.d=1
q.e=0}return new A.tM(r,C.G([41,B.ebo,42,B.ebq,43,B.ebU,44,B.ebI,45,B.ec5,46,B.ebw,47,B.ebC,48,B.eb6,49,B.ebs],x.S,x.q),B.zm,B.wv,null,0)},
ifW(d,e){var w,v,u,t,s,r,q,p=C.a([],x.z),o=new A.fk(p),n=d.d
if(n.length!==0){w=n==="n1"?B.hcX:B.hb7
for(n=e*1.4,v=w.a+0,u=w.b,t=w.c+0,s=0;s<5;++s){r=D.k.F(n+s*0.2,1)
o.fT(new A.q(v,u+(-r*6*r-r*1.5),t),0.22*(1-r*0.3),B.YM,3,6,0.9)}}else if(d.c){n=x.Q
v=C.C(B.a4b,n)
u=A.fNB()
D.d.v(v,C.d0(u,1,null,C.T(u).c))
D.d.v(v,C.d0(B.a55,1,null,n))
for(n=e*0.45,s=0;s<18;++s){r=D.k.F(n+s/18,1)
q=D.o.E(D.k.bh(r*(v.length-1)),0,v.length-2)
u=v.length
o.fT(A.o2(v[q],v[q+1],r*(u-1)-q),0.38,B.bqP,3,6,0.9)}for(n=e*2.2,s=0;s<6;++s)o.fT(new A.q(0,14-D.k.F(n+s/6,1)*5.4,0),0.3,B.XH,3,6,0.9)}return p},
agN(d){switch(d){case 61:return B.fZm
case 62:return B.hb4
case 63:return B.h6e
default:return B.h65}},
h5A(d){var w=d==="hot",v=A.agN(w?61:62),u=A.agN(w?63:64),t=w?-1:1
return A.ai0(C.a([v,v.a8(0,new A.q(t*0.6,2.2,1.2)),A.o2(v,u,0.5).a8(0,new A.q(t*1.4,0,2.6)),u.a8(0,new A.q(-t*0.2,-2,1)),u],x.o),6)},
aPs(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=C.a([],x.z),e=new A.fk(f)
e.b=67
e.hn(B.fZj,B.h_O,B.vC,3)
e.b=66
e.n8(B.h5K,B.hbJ,B.M7,0.5,3)
e.Tc(B.aVH,B.hcw,7.6,B.YN,!1,!0,0.7,28)
e.dR(B.aVH,B.h8J,7.6,B.afP,0.5,28)
e.dR(B.h_Z,B.h4R,1.2,B.jH,0.9,14)
e.aZ(B.h89,B.aVw,B.jq,0.1)
e.aZ(B.hc1,B.aVw,B.jq,0.1)
e.b=65
e.dR(B.hbo,B.aWF,3.4,B.jH,0.9,20)
e.jh(A.H2(B.dfv,1.4,6),0.5,B.jH,!0,0.9,12)
for(w=0;w<2;++w){v=B.daD[w]
u=v*1.2
e.dR(new A.q(u,15.5,-3.6),new A.q(u,17.7,-3.6),0.38,B.jH,0.9,10)
t=v<0?B.tG:B.o_
e.dR(new A.q(u,17.7,-3.6),new A.q(u,18.6,-3.6),0.6,t,0.6,12)}for(u=[B.ezt,B.euB],w=0;w<2;++w){t=u[w]
v=t.b
e.b=t.a
e.dR(new A.q(v,15.3,-3.6),new A.q(v,11.4,-3.6),0.45,B.jH,0.9,10)
e.dR(new A.q(v,11.4,-3.6),new A.q(v,10.7,-3.6),0.3,B.bmj,0.6,8)
e.zq(new A.q(v,11.3,-3.6),new A.q(v,11.9,-3.6),0.78,0.48,B.bov,0.7,8)}for(u=[B.eSF,B.eUr],w=0;w<2;++w){t=u[w]
v=t.b
e.b=t.a
e.dR(new A.q(v,-1.5,-6),new A.q(v,-1.5,-3.6),0.4,B.LE,0.7,12)
e.dR(new A.q(v,-1.5,-4.4),new A.q(v,0.7,-4.4),1,B.jH,0.9,14)
e.dR(new A.q(v,0.7,-4.4),new A.q(v,1.5,-3.6),0.45,B.jH,0.9,10)
e.dR(new A.q(v,-0.2,-4.4),new A.q(v,-0.2,-3.1),0.2,B.aer,0.7,8)
e.dR(new A.q(v,-0.2,-3.1),new A.q(v,-0.2,-2.4000000000000004),1.45,t.c,0.5,14)
e.zq(new A.q(v,1.2,-3.6),new A.q(v,1.9,-3.6),0.78,0.4,B.xB,0.8,8)}for(u=x.o,w=0;w<2;++w){s=B.dia[w]
t=s==="hot"
r=t?B.cGY:B.cHa
q=C.T(r).k("Z<1>")
p=C.C(new C.Z(r,new A.fvX(d,s),q),q.k("L.E"))
e.b=t?68:69
o=t?B.tG:B.o_
t=p.length
if(t===2){n=A.h5A(s)
e.jh(n,0.34,B.Mo,!1,0.7,8)
m=n.length/2|0
e.jh(C.a([n[m-1],n[m],n[m+1]],u),0.4,o,!1,0.4,8)
for(t=r.length,l=0;l<t;++l){k=A.agN(r[l])
q=k.a+0
j=k.b
i=k.c+0
e.zq(new A.q(q,j+-0.2,i),new A.q(q,j+0.6,i),0.62,0.3,B.xB,0.8,8)}}else if(t===1){k=A.agN(D.d.gI(p))
h=D.d.gI(p)===D.d.gI(r)?1:-1
t=k.a+0
q=k.b
j=k.c
e.jh(C.a([k,new A.q(t,q+h*1.4,j+1),new A.q(t,q+h*3,j+2.4)],u),0.34,B.Mo,!1,0.7,8)
j+=0
e.zq(new A.q(t,q+-0.2,j),new A.q(t,q+0.6,j),0.62,0.3,B.xB,0.8,8)}}if(d.r){e.b=0
e.d=0.5
for(u=d.e,w=0;w<4;++w){g=B.a5_[w]
t=g.a
if(u.h(0,t)!=null)continue
t=A.agN(t)
q=g.c.t(0,"hot")?B.tG:B.o_
e.fT(new A.q(t.a+0,t.b+0,t.c+0.9),0.65,q,4,8,0.1)}e.d=1}return new A.tM(f,C.G([61,B.ebf,62,B.ebh,63,B.eba,64,B.ebi,65,B.ebD,66,B.ebz,67,B.eb7,68,B.ec9,69,B.ebG],x.S,x.q),B.zm,B.wv,null,0)},
i6F(d,e){var w,v,u,t,s,r,q,p,o,n=C.a([],x.z),m=new A.fk(n)
if(!d.f)return n
w=d.e
v=w.h(0,61)==="hot"&&w.h(0,63)==="hot"
u=w.h(0,62)==="cold"&&w.h(0,64)==="cold"
t=new A.fyy(e,m)
if(v){s=A.h5A("hot")
for(r=e*0.5,q=0;q<10;++q){p=D.k.F(r+q/10,1)
o=D.o.E(D.k.bh(p*(s.length-1)),0,s.length-2)
m.fT(A.o2(s[o],s[o+1],p*(s.length-1)-o),0.2,D.LN,3,6,0.9)}}else if(w.h(0,61)==null)t.$2(61,D.LN)
if(u){s=A.h5A("cold")
for(w=e*0.5,q=0;q<10;++q){p=D.k.F(w+q/10,1)
o=D.o.E(D.k.bh(p*(s.length-1)),0,s.length-2)
m.fT(A.o2(s[o],s[o+1],p*(s.length-1)-o),0.2,B.Ye,3,6,0.9)}}else if(w.h(0,62)==null)t.$2(62,B.Ye)
if(v&&u)for(w=e*2,q=0;q<8;++q){p=D.k.F(w+q/8,1)
r=C.ar(B.bqV,B.Ye,0.5)
r.toString
m.fT(new A.q(0,21-p*6.5,1.6),0.26,r,3,6,0.9)}return n},
fyw(d){return D.d.d5(B.a5_,new A.fyx(d))},
cmZ:function cmZ(d,e,f){var _=this
_.a=d
_.b=e
_.c=!1
_.d=""
_.e=f
_.r=_.f=!1},
Fb:function Fb(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fwS:function fwS(d,e){this.a=d
this.b=e},
fwR:function fwR(d,e){this.a=d
this.b=e},
fwQ:function fwQ(){},
fvX:function fvX(d,e){this.a=d
this.b=e},
fyy:function fyy(d,e){this.a=d
this.b=e},
fyx:function fyx(d){this.a=d},
h0I(d,e,f){var w=x.N
w=new A.cmP(e,d,C.aY(w),C.U(w,x.S),C.aY(w))
w.bzw(d,e,f)
return w},
hqJ(c0,c1,c2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5=C.a([],x.z),b6=new A.fk(b5),b7=C.U(x.S,x.q),b8=C.a([],x.E),b9=c0.c
b9===$&&C.c()
w=b9.a==="bathroom"
v=w?28:0
b6.b=9199
b6.hn(B.hai,B.hcr,B.bf5,4)
b6.hn(B.h7Y,B.hb1,B.XG,4)
b6.hn(new A.q(v+19.8+0.6,24,16),B.h5n,B.vC,2)
b7.n(0,9199,B.ebr)
b6.b=9198
b6.aZ(new A.q(v,0.6,10),B.hbm,B.jq,0.1)
b6.aZ(new A.q(v,29.4,18.6),B.h52,B.jq,0.1)
b6.aZ(new A.q(v-19.4,13.6,10.5),B.hcc,B.jq,0.1)
for(u=[B.eXr,B.eXn,B.eWk,B.eWh],t=0;t<4;++t){s=u[t].a
b6.aZ(new A.q(v+s[0],33,s[1]),new A.q(s[2],2.4,s[3]),B.brT,0.6)}b6.Tc(new A.q(v,27,8),new A.q(v,34.3,8),10.5,B.YN,!1,!0,0.7,24)
b6.dR(new A.q(v,27,8),new A.q(v,27.2,8),10.5,B.afP,0.5,24)
if(w){b6.aZ(new A.q(v,46,0.6),B.h5a,D.bO,0.3)
b6.aZ(new A.q(v,46,1.1),B.h4b,B.hV,0.9)}b6.dN(new A.q(v,27.1,8),new A.q(v,27.3,8),1.4,B.hp,12)
b6.Tc(new A.q(v+15,23.6,8),new A.q(v+19.4,23.6,8),0.92,B.pS,!1,!0,0.3,12)
b7.n(0,9198,B.ebR)
b6.b=9400
b6.dR(new A.q(-56,18,0),new A.q(-56,18,6),1.5,B.xB,0.8,12)
u=c0.r?B.o_:D.bm
b6.dR(new A.q(-57,18,6),new A.q(-55,18,6.5),4,u,0.5,14)
b6.dR(new A.q(-56,16,0),new A.q(-56,20,0),1,B.LE,0.7,10)
u=c0.r?"The water is ON. Turn it OFF with your hand before you cut into any pipe, and turn it ON to test your work.":"The water is OFF. Turn it ON to test your work."
b7.n(0,9400,new A.cW("Main water valve",u,new A.q(-56,18,4),22))
u=c0.r
s=u?"MAIN WATER: ON":"MAIN WATER: OFF"
u=u?D.dI:D.bm
b8.push(new A.hf(new A.q(-56,24,6),s,u,0))
r=new A.fwP(b6)
u=v-8
r.$1(u)
s=v+8
r.$1(s)
if(w)r.$1(-40)
q=new A.q(v,21,8)
p=new A.fwN(q)
o=new A.fwH(b6,c0)
n=new A.fwI(b6,c0)
m=new A.fwO(c0,b7,c2,c1,b8)
l=b9.c
for(k=l.length,j=c0.x,i=c0.e,h=c0.f,g=x.o,t=0;t<k;++t){f=l[t]
e=f.a
d=i.t(0,e)
if(d){a0=c0.vk(0,e)
a1=h.h(0,e)
if(a1==null)a1=0
a2=a0.r-a1>0}else a2=!1
a3=D.d.cu(l,f)
a4=9100+a3
j.t(0,e)
switch(e){case"flange":a5=new A.q(-30,0.3,14)
if(d){b6.b=a4
b6.dR(a5,new A.q(-30,0.8999999999999999,14),5.5,B.pS,0.4,18)
b6.zq(new A.q(-30,0.8,14),new A.q(-30,1.2,14),5.5,3.2,B.xB,0.8,18)}else n.$3(e,new A.q(-30,0.8,14),B.fYn)
m.$3(f,a5,"Flange spot")
break
case"wax":a5=new A.q(-30,1.2,14)
if(d){b6.b=a4
b6.zq(a5,new A.q(-30,2.3,14),4.2,2.4,B.brW,0.2,18)}else n.$3(e,new A.q(-30,1.7,14),B.h8a)
m.$3(f,a5,"Wax ring spot")
break
case"toilet":if(d){b6.b=a4
b6.BC(new A.q(-30,0.5,14),new A.q(-30,16,14),8.5,B.B8,6,0.8,20)
b6.dR(new A.q(-30,16,14),new A.q(-30,17,14),9.5,B.Mu,0.8,20)
b6.aZ(new A.q(-30,22,4.5),B.aVz,B.B8,0.8)
b6.aZ(new A.q(-30,29.2,4.5),B.h3j,B.Mu,0.8)}else{b6.b=a4
b6.d=0.32
b6.dN(new A.q(-30,0.5,14),new A.q(-30,17,14),8.5,D.b2,16)
b6.aO(new A.q(-30,22,4.5),B.aVz,D.b2)
b6.d=1}m.$3(f,new A.q(-30,12,12),"Toilet spot")
break
case"bolts":if(d){for(e=9200+a3*2,a6=0;a6<2;++a6){a7=B.aA6[a6]
b6.b=e+(a7<0?0:1)
a0=-30+a7
b6.dR(new A.q(a0,0.5,17),new A.q(a0,3.6,17),0.45,B.Fc,0.8,8)
a1=a2?D.cR:B.Fc
b6.dR(new A.q(a0,3.4,17),new A.q(a0,4.6,17),1.2,a1,0.8,6)}e=a2?"The nuts are loose. Tighten them with the wrench, a little at a time so the porcelain does not crack.":"The toilet is bolted down."
b7.n(0,a4,new A.cW(f.c,e,new A.q(-30,3,17),20))}else for(a6=0;a6<2;++a6){a7=B.aA6[a6]
b6.b=a4
b6.d=0.4
e=-30+a7
b6.dN(new A.q(e,0.5,17),new A.q(e,4.6,17),1.2,D.b2,8)
b6.d=1}m.$3(f,new A.q(-30,3,17),"Bolts")
break
case"tvalve":A.h5_(b6,a4,new A.q(-40,8,1.6),d,B.o_,new A.fwD(n,f,-30))
m.$3(f,new A.q(-40,8,2),"Valve")
break
case"those":if(d){b6.b=a4
b6.jh(A.ai0(C.a([new A.q(-40,10,1.6),new A.q(-42,14,3.5),new A.q(-36,17,3.6),new A.q(-32,21,2.5)],g),6),0.55,B.Mo,!1,0.7,8)
b6.jh(C.a([new A.q(-36.8,15.5,3.6),new A.q(-35,16.4,3.6)],g),0.62,B.o_,!1,0.4,8)
if(a2)b6.dN(new A.q(-40,10,1.6),new A.q(-40,11.2,1.6),0.9,D.cR,8)}else o.$3$r(e,A.ai0(C.a([new A.q(-40,10,1.6),new A.q(-42,14,3.5),new A.q(-36,17,3.6),new A.q(-32,21,2.5)],g),6),0.9)
m.$3(f,new A.q(-36,15,3),"Toilet hose")
break
case"faucet":if(d){b6.b=a4
b6.dR(new A.q(v,34.2,8),new A.q(v,34.6,8),3.6,B.jH,0.9,20)
b6.jh(A.H2(C.a([new A.q(v,34.6,8),new A.q(v,40,8),new A.q(v,43,10),new A.q(v,43,14),new A.q(v,41.2,14.6)],g),1.4,6),0.5,B.jH,!0,0.9,10)
for(a6=0;a6<2;++a6){a7=E.a4R[a6]
e=v+a7
b6.dR(new A.q(e,34.6,8),new A.q(e,36.6,8),0.5,B.jH,0.9,8)
a0=a7<0?B.tG:B.o_
b6.dR(new A.q(e,36.6,8),new A.q(e,37.6,8),0.8,a0,0.6,10)}for(a6=0;a6<2;++a6){e=v+B.dli[a6]
b6.dR(new A.q(e,34,8),new A.q(e,28.4,8),0.45,B.jH,0.9,8)}}else n.$3(e,new A.q(v,38,9),B.fYd)
m.$3(f,new A.q(v,38,8),"Faucet spot")
break
case"vhot":A.h5_(b6,a4,new A.q(u,8,1.6),d,B.tG,new A.fwE(n,f,v))
m.$3(f,new A.q(u,8,2),"Hot valve")
break
case"vcold":A.h5_(b6,a4,new A.q(s,8,1.6),d,B.o_,new A.fwF(n,f,v))
m.$3(f,new A.q(s,8,2),"Cold valve")
break
case"hhot":case"hcold":a8=e==="hhot"
a9=a8?-1:1
a0=v+a9*3
b0=A.ai0(C.a([new A.q(v+a9*8,10.5,1.8),new A.q(v+a9*9,16,3.5),new A.q(v+a9*6,22,4.2),new A.q(a0,27.5,6),new A.q(a0,28.6,8)],g),6)
if(d){b6.b=a4
b6.jh(b0,0.5,B.Mo,!1,0.7,8)
b1=b0.length/2|0
e=C.a([b0[b1-1],b0[b1],b0[b1+1]],g)
b6.jh(e,0.58,a8?B.tG:B.o_,!1,0.4,8)
if(a2){e=D.d.gI(b0)
a0=D.d.gI(b0)
b6.dN(e,new A.q(a0.a+0,a0.b+1.4,a0.c+0),0.9,D.cR,8)
a0=D.d.gak(b0)
b6.dN(new A.q(a0.a,a0.b-1.4,a0.c),D.d.gak(b0),0.9,D.cR,8)}}else o.$3$r(e,b0,0.9)
e=b0[b0.length/2|0]
m.$3(f,e,a8?"Hot hose":"Cold hose")
break
case"tail":case"trap":case"arm":a0=e==="tail"
if(a0)a1=B.a4b
else a1=e==="trap"?A.fNB():B.a55
b2=p.$1(a1)
if(d){b6.b=a4
a1=a0?B.jH:B.pS
b6.a7_(b2,0.66,a1,!1,!0,!0,a0?0.85:0.3,12)}else o.$3$r(e,b2,0.78)
a1=J.a5(b2)
a1=a1.h(b2,a1.gL(b2)/2|0)
if(a0)e="Tailpiece"
else e=e==="trap"?"P-trap":"Trap arm"
m.$3(f,a1,e)
break}}b3=new A.fwL(l,c0,b6,b7)
b3.$4("trap",q.a8(0,B.aaC),B.ea,0)
b3.$4("arm",q.a8(0,B.aaE),B.hE,1)
for(u=C.eo(j,j.r,C.a6(j).c),s=u.$ti.c;u.C();){k=u.d
if(k==null)k=s.a(k)
b4=D.d.fW(b9.c,new A.fwG(k))
k=A.huS(c0,k)
b8.push(new A.hf(new A.q(k.a+0,k.b+6,k.c+4),"\ud83d\udca7 LEAK: "+b4.c,D.by,0))}return new A.tM(b5,b7,b8,B.wv,null,0)},
h5_(d,e,f,g,h,i){if(!g){i.$0()
return}d.b=e
d.dR(f.a8(0,B.h8c),f.a8(0,B.aWD),0.9,B.xB,0.8,12)
d.dR(f.a8(0,B.aWD),f.a8(0,B.h4V),0.45,B.xB,0.8,10)
d.dR(f.a8(0,B.hbi),f.a8(0,B.aWX),0.3,B.aer,0.7,8)
d.dR(f.a8(0,B.aWX),f.a8(0,B.hbP),1.2,h,0.5,12)},
huS(d,e){var w,v=d.c
v===$&&C.c()
w=v.a==="bathroom"?28:0
A:{if("vhot"===e||"hhot"===e){v=new A.q(w-8,9,2)
break A}if("vcold"===e||"hcold"===e){v=new A.q(w+8,9,2)
break A}if("tvalve"===e||"those"===e){v=new A.q(-40,9,2)
break A}if("bolts"===e){v=new A.q(-30,2,17)
break A}if("faucet"===e){v=new A.q(w,30,8)
break A}if("tail"===e){v=new A.q(w,22,8)
break A}if("trap"===e){v=new A.q(w,24.7,8)
break A}v=new A.q(w+8.9,23.6,8)
break A}return v},
ifO(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=C.a([],x.z),f=new A.fk(g),e=d.x
if(e.a===0)return g
for(e=C.eo(e,e.r,C.a6(e).c),w=a0*2,v=e.$ti.c,u=d.e;e.C();){t=e.d
if(t==null)t=v.a(t)
s=A.huS(d,t)
r=d.c
r===$&&C.c()
q=D.d.fW(r.c,new A.fNq(t)).b==="valve"||!u.t(0,t)
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
f.fT(new A.q(t+m*l*n,r+(l*k-l*l*j),p+(1.5+l*i)),h,B.YZ,3,6,0.5);++o}f.d=0.55
f.dR(new A.q(t,0.3,11),new A.q(t,0.5,11),7+2*Math.sin(w),B.YZ,0.6,18)
f.d=1}return g},
nq:function nq(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
Xa:function Xa(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cmP:function cmP(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.d=_.c=$
_.e=f
_.f=g
_.r=!0
_.w=0
_.x=h
_.y=!1},
cmT:function cmT(d){this.a=d},
cmU:function cmU(d){this.a=d},
cmQ:function cmQ(d){this.a=d},
cmV:function cmV(d){this.a=d},
cmW:function cmW(d){this.a=d},
cmX:function cmX(){},
cmY:function cmY(){},
cmR:function cmR(d){this.a=d},
cmS:function cmS(d){this.a=d},
fwP:function fwP(d){this.a=d},
fwN:function fwN(d){this.a=d},
fwH:function fwH(d,e){this.a=d
this.b=e},
fwK:function fwK(d){this.a=d},
fwI:function fwI(d,e){this.a=d
this.b=e},
fwJ:function fwJ(d){this.a=d},
fwO:function fwO(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fwD:function fwD(d,e,f){this.a=d
this.b=e
this.c=f},
fwE:function fwE(d,e,f){this.a=d
this.b=e
this.c=f},
fwF:function fwF(d,e,f){this.a=d
this.b=e
this.c=f},
fwL:function fwL(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fwM:function fwM(d){this.a=d},
fwG:function fwG(d){this.a=d},
fNq:function fNq(d){this.a=d},
Wb:function Wb(d,e){this.d=d
this.a=e},
aEQ:function aEQ(d,e){var _=this
_.e=_.d=$
_.f=d
_.r=$
_.w=e
_.x=""
_.y=0
_.z=null
_.as=_.Q=!1
_.c=_.a=_.at=null},
enS:function enS(d,e,f){this.a=d
this.b=e
this.c=f},
enT:function enT(d){this.a=d},
enR:function enR(d){this.a=d},
enL:function enL(d){this.a=d},
enX:function enX(d){this.a=d},
enA:function enA(d,e){this.a=d
this.b=e},
enB:function enB(d,e){this.a=d
this.b=e},
enC:function enC(d){this.a=d},
enH:function enH(d){this.a=d},
enF:function enF(d){this.a=d},
enG:function enG(d,e){this.a=d
this.b=e},
enQ:function enQ(d){this.a=d},
enY:function enY(d){this.a=d},
enI:function enI(d){this.a=d},
enJ:function enJ(){},
enK:function enK(d){this.a=d},
enU:function enU(d,e){this.a=d
this.b=e},
enV:function enV(d){this.a=d},
enW:function enW(d,e){this.a=d
this.b=e},
enE:function enE(d,e,f){this.a=d
this.b=e
this.c=f},
enD:function enD(d,e,f){this.a=d
this.b=e
this.c=f},
enZ:function enZ(d){this.a=d},
eo2:function eo2(d,e){this.a=d
this.b=e},
eo0:function eo0(){},
eo_:function eo_(d){this.a=d},
eo1:function eo1(d,e){this.a=d
this.b=e},
enP:function enP(d){this.a=d},
enN:function enN(d,e){this.a=d
this.b=e},
enM:function enM(d,e){this.a=d
this.b=e},
enO:function enO(d,e){this.a=d
this.b=e},
jY(d){return D.d.fW(B.uy,new A.fVN(d))},
crL(d,e,f,g,h){var w=x.S,v=x.N
v=new A.XE(g,f,C.U(w,v),C.aY(w),C.aY(w),C.U(w,x.cH),C.a([new A.XQ(),new A.XQ()],x.gD),C.U(w,x.cD),C.aY(w),C.U(w,v),C.aY(w),C.a([],x.s),C.U(w,v))
v.cl6(d,e,h)
return v},
crM(d){var w
A:{if("tv"===d){w="The TV"
break A}if("lamp"===d){w="The lamp"
break A}if("toaster"===d){w="The toaster"
break A}w="The hair dryer"
break A}return w},
h19(d,e){var w=!0
if(d!==e)if(!(D.d.t(B.lH,d)&&D.d.t(B.lH,e)))if(!(D.d.t(B.jV,d)&&D.d.t(B.jV,e)))if(d==="light"||d==="fan")w=e==="light"||e==="fan"
else w=!1
return w},
z3:function z3(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fVN:function fVN(d){this.a=d},
ou:function ou(d,e,f){this.a=d
this.b=e
this.c=f},
XQ:function XQ(){var _=this
_.a=!1
_.b=0
_.c=!0
_.d=!1},
avI:function avI(d,e){var _=this
_.a=!1
_.b=d
_.c=e
_.e=_.d=!1},
aUp:function aUp(d,e){this.a=d
this.b=e
this.c=!1},
eB:function eB(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
XE:function XE(d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
crQ:function crQ(){},
crX:function crX(d){this.a=d},
crY:function crY(d){this.a=d},
crZ:function crZ(d,e){this.a=d
this.b=e},
cs_:function cs_(d,e){this.a=d
this.b=e},
cs1:function cs1(d){this.a=d},
cs0:function cs0(d,e){this.a=d
this.b=e},
crP:function crP(d){this.a=d},
crN:function crN(){},
crO:function crO(d){this.a=d},
crV:function crV(){},
crW:function crW(){},
crR:function crR(){},
crS:function crS(d){this.a=d},
crT:function crT(d){this.a=d},
cs2:function cs2(d){this.a=d},
crU:function crU(d){this.a=d},
chu(d,e,f){return new A.Of(!1,e,f,!1,null)},
iV:function iV(d,e,f){this.a=d
this.b=e
this.c=f},
Of:function Of(d,e,f,g,h){var _=this
_.c=d
_.e=e
_.f=f
_.r=g
_.a=h},
aEX:function aEX(d,e,f){var _=this
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
esw:function esw(d,e,f){this.a=d
this.b=e
this.c=f},
esx:function esx(d){this.a=d},
esv:function esv(d){this.a=d},
ery:function ery(d){this.a=d},
erz:function erz(d){this.a=d},
erx:function erx(d){this.a=d},
erA:function erA(d){this.a=d},
erB:function erB(d){this.a=d},
erw:function erw(d){this.a=d},
erC:function erC(d){this.a=d},
erD:function erD(d){this.a=d},
erN:function erN(d){this.a=d},
erP:function erP(d){this.a=d},
erE:function erE(){},
erF:function erF(d){this.a=d},
erG:function erG(d){this.a=d},
es5:function es5(d,e){this.a=d
this.b=e},
erO:function erO(d){this.a=d},
ess:function ess(d){this.a=d},
est:function est(d){this.a=d},
esu:function esu(d,e){this.a=d
this.b=e},
esq:function esq(d){this.a=d},
esr:function esr(d,e){this.a=d
this.b=e},
esp:function esp(d){this.a=d},
esh:function esh(d){this.a=d},
esi:function esi(d){this.a=d},
esj:function esj(d){this.a=d},
esk:function esk(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
esl:function esl(d){this.a=d},
esm:function esm(d,e,f){this.a=d
this.b=e
this.c=f},
esn:function esn(d){this.a=d},
eso:function eso(d,e,f){this.a=d
this.b=e
this.c=f},
esy:function esy(d,e){this.a=d
this.b=e},
erM:function erM(d){this.a=d},
erK:function erK(d){this.a=d},
erL:function erL(d,e){this.a=d
this.b=e},
erJ:function erJ(d){this.a=d},
erH:function erH(d){this.a=d},
erI:function erI(d,e){this.a=d
this.b=e},
erQ:function erQ(d,e){this.a=d
this.b=e},
es3:function es3(){},
es4:function es4(){},
erR:function erR(d){this.a=d},
erS:function erS(d){this.a=d},
erT:function erT(d){this.a=d},
erW:function erW(){},
erX:function erX(){},
erY:function erY(){},
erZ:function erZ(){},
es_:function es_(){},
es0:function es0(d){this.a=d},
es1:function es1(){},
es2:function es2(d){this.a=d},
erU:function erU(d){this.a=d},
erV:function erV(){},
esR:function esR(d,e){this.a=d
this.b=e},
esT:function esT(d){this.a=d},
esD:function esD(d){this.a=d},
esS:function esS(d){this.a=d},
esG:function esG(d){this.a=d},
esH:function esH(d,e){this.a=d
this.b=e},
esF:function esF(d,e){this.a=d
this.b=e},
esI:function esI(d,e){this.a=d
this.b=e},
esE:function esE(d,e){this.a=d
this.b=e},
esU:function esU(d,e){this.a=d
this.b=e},
esC:function esC(d,e){this.a=d
this.b=e},
esV:function esV(d){this.a=d},
esB:function esB(d){this.a=d},
esW:function esW(d,e){this.a=d
this.b=e},
esA:function esA(d,e){this.a=d
this.b=e},
esX:function esX(d){this.a=d},
esY:function esY(d){this.a=d},
esZ:function esZ(d,e,f){this.a=d
this.b=e
this.c=f},
esz:function esz(d,e,f){this.a=d
this.b=e
this.c=f},
esJ:function esJ(d){this.a=d},
esK:function esK(d,e){this.a=d
this.b=e},
esL:function esL(d){this.a=d},
esM:function esM(d){this.a=d},
esN:function esN(d){this.a=d},
esO:function esO(d){this.a=d},
esP:function esP(d){this.a=d},
esQ:function esQ(d,e){this.a=d
this.b=e},
esg:function esg(d,e){this.a=d
this.b=e},
esf:function esf(d,e){this.a=d
this.b=e},
es9:function es9(d,e){this.a=d
this.b=e},
es7:function es7(){},
es8:function es8(){},
esa:function esa(d,e){this.a=d
this.b=e},
es6:function es6(){},
esb:function esb(d){this.a=d},
esc:function esc(d,e,f){this.a=d
this.b=e
this.c=f},
esd:function esd(d,e){this.a=d
this.b=e},
ese:function ese(d,e){this.a=d
this.b=e},
ai_(d,e){var w=d.d,v=e.a,u=e.c,t=e.b,s=w.a,r=w.b
w=w.c
return d.c?new A.q(s+v,r-u,w+t):new A.q(s+v,r+t,w+u)},
h4f(d,e,f,g){var w,v,u,t,s,r=d.a,q=e.d,p=e.c?A.nx(r,1.5707963267948966,0,q):A.nx(r,0,0,q)
r=C.a([],x.z)
for(q=p.length,w=0;w<p.length;p.length===q||(0,C.M)(p),++w){v=p[w]
u=v.d
u=u===0?0:f.$1(u)
t=v.f
s=t<0.99?3:2
r.push(new A.kn(v.a,v.b,v.c,u,v.e,t,v.r,v.w,v.x,s,g))}q=C.U(x.S,x.q)
for(u=d.b,u=u.gdV(u),u=u.gaf(u);u.C();){t=u.gR(u)
s=f.$1(t.a)
t=t.b
q.n(0,s,new A.cW(t.a,t.b,A.ai_(e,t.c),t.d))}return new C.z(r,q)},
i0o(a3,a4,a5,a6,a7,a8,a9,b0,b1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=x.i,a2=C.eC([a4,a5],a1)
for(w=b1.length,v=0;v<b1.length;b1.length===w||(0,C.M)(b1),++v){u=b1[v].a
a2.M(0,D.k.E(u[0],a4,a5))
a2.M(0,D.k.E(u[1],a4,a5))}t=C.C(a2,a2.$ti.k("ct.E"))
D.d.fd(t)
for(w=C.T(b1).k("Z<1>"),u=w.k("L.E"),s=0;r=s+1,r<t.length;s=r){q=t[s]
p=t[r]
o=p-q
if(o<0.01)continue
n=(q+p)/2
m=C.C(new C.Z(b1,new A.fpd(n),w),u)
l=C.eC([a6,a7],a1)
for(k=m.length,v=0;v<m.length;m.length===k||(0,C.M)(m),++v){j=m[v].a
l.M(0,D.k.E(j[2],a6,a7))
l.M(0,D.k.E(j[3],a6,a7))}i=C.C(l,l.$ti.k("ct.E"))
D.d.fd(i)
for(k=!(o>30),h=0;g=h+1,g<i.length;h=g){f=i[h]
e=i[g]
j=e-f
if(j<0.01)continue
d=(f+e)/2
if(D.d.b3(m,new A.fpe(d)))continue
a0=!k||j>60?2:1
a3.hn(new A.q(n,d,a8),new A.q(o,j,a9),b0,a0)}}},
wQ(d1,d2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1=null,c2=x.z,c3=C.a([],c2),c4=new A.fk(c3),c5=C.a([],x.a),c6=x.E,c7=C.a([],c6),c8=x.S,c9=C.U(c8,x.q),d0=$.dS=$.dS+1
c4.f=-1
c4.b=8001
c4.n8(B.h2r,B.h5P,B.Br,0.15,4)
c4.f=0
c4.hn(B.h1X,B.aW6,B.aen,3)
c4.aZ(B.haA,B.hbZ,B.hV,0.5)
c4.aO(B.aWc,B.h1G,B.Bc)
c4.aO(B.aWc,B.hcf,B.Bc)
c4.hn(B.h5T,B.aW6,B.aen,3)
c4.aZ(B.h1P,B.h5U,B.vy,0.15)
c4.aZ(B.h6B,B.h60,B.ET,0.8)
c4.b=0
c4.f=3
c4.d=d1.gwF()?0.42:0.1
c4.hn(B.h0_,B.h84,d1.gwF()?B.kA:B.bb4,3)
c4.d=1
c4.f=2
c4.b=8001
if(!d1.gwF())for(w=0;w<10;++w)c4.aDB(new A.q(-72+w*16,51.3,55),B.h8F,B.jq,!1,0.05)
else{c4.x=d0
c4.aZ(B.h74,B.h4m,D.c,0.2)
c4.aZ(B.hd8,B.aWp,D.c,0.2)
c4.aZ(B.h3o,B.aWp,D.c,0.2)}if(d1.gwF()){c4.x=d0
c4.aZ(B.h3x,B.h4s,B.kA,0.2)}c4.x=0
c4.b=8001
c4.r=!0
c4.hn(B.hbM,B.hcz,B.ag6,2)
c4.aZ(B.haK,B.h1o,B.Ya,0.1)
c4.aZ(B.haJ,B.h1p,B.LS,0.1)
c4.aZ(B.hah,B.aVY,B.LS,0.1)
c4.aZ(B.h_b,B.aVY,B.LS,0.1)
c4.r=!1
c9.n(0,8001,B.eb9)
c4.x=d0
c4.b=8002
c4.n8(B.hcS,B.aW1,B.jq,0.05,3)
c4.n8(B.h0t,B.aW1,B.jq,0.05,3)
c9.n(0,8002,B.ebB)
for(v=d1.y,w=0;u=$.Ha(),w<u.length;++w){t=1000+w
c4.b=t
c4.cHQ(new A.q(u[w],0,-2.25),B.h8m,B.jq,!1,0.05,2)
s=v.t(0,w)?"This one has a hole for the cable.":"Tap it with the drill to put a hole through it."
c9.n(0,t,new A.cW("Wall stud","A 2x4 stud, one of the vertical posts in the wall. They stand 16 inches apart. "+s,new A.q(u[w],20,-2),60))
if(v.t(0,w)){c4.b=0
c4.e=0.6
c4.aO(new A.q(u[w],40,-2.25),B.h1V,B.ahg)
c4.e=0}}c4.b=8000
c4.aZ(B.h_l,B.fYF,B.Xq,0.5)
c4.e=0.4
c4.aO(B.h5A,B.hbk,B.F2)
for(r=0;r<6;++r)for(v=19.5-r*3.6,q=0;q<2;++q)c4.aZ(new A.q(61.6+q*4.8,v,0.5),B.fVJ,B.Z0,0.3)
p=d1.ax&&!d1.ay
v=p?0.6:0
if(d1.ay)u=D.cb
else u=p?D.by:D.hf
c4.aZ(new A.q(64,-2.5+v,0.9),B.h4h,u,0.4)
c4.e=0
if(d1.ay)v="The main breaker has TRIPPED (orange). Tap it to flip it fully OFF, fix the problem, then turn it ON."
else v=d1.ax?"The power is ON. Tap to turn it OFF. Always turn it OFF before you touch any wire.":"The power is OFF. Tap to turn it ON."
c9.n(0,8000,new A.cW("Breaker panel",v,B.h1t,60))
c4.b=8003
for(v=d1.z,u=C.eo(v,v.r,C.a6(v).c),t=x.o,s=u.$ti.c;u.C();){o=u.d
n=A.jY(o==null?s.a(o):o)
o=n.d
m=o.a-0.35
l=C.a([B.h9s,B.h70,new A.q(m,40,-3.2)],t)
if(n.c)D.d.v(l,C.a([new A.q(m,51.4,-3.2),new A.q(m,51.4,o.c+11)],t))
else l.push(new A.q(m,o.b+11,-3.4))
c4.jh(A.H2(l,3,6),0.2,B.Yh,!1,0.35,6)}c9.n(0,8003,B.ebZ)
for(u=x.eV,s=d1.Q,k=0;k<3;++k){j=B.ot[k]
i=s.h(0,j)
if(i==null||!i.a)continue
if(i.e)h=B.bpf
else h=i.d?B.bqM:B.bq7
o=C.a([],u)
for(m=i.b,l=C.a6(m),g=new C.ml(m,m.r,l.k("ml<1>")),g.c=m.e,l=l.c;g.C();){m=g.d
if(m==null)m=l.a(m)
o.push(new C.cw([A.jY(m).d.a-1.15,A.jY(m).d.a+1.15,A.jY(m).d.b-2,A.jY(m).d.b+2]))}m=6100+k
c4.b=m
A.i0o(c4,j,j+48,-47,47,-0.25,0.5,h,o)
o=i.e?"Painted and finished.":"A 4 by 8 foot sheet of drywall (gypsum between two layers of paper). It is screwed to the studs."
c9.n(0,m,new A.cW("Drywall sheet",o,new A.q(j+24,0,0),90))
c4.b=0
c4.e=0.3
for(o=i.c,m=C.a6(o),l=new C.ml(o,o.r,m.k("ml<1>")),l.c=o.e,m=m.c;l.C();){o=l.d
if(o==null)o=m.a(o)
f=D.o.ao(o,10)
e=D.o.F(o,10)
c4.fT(new A.q($.Ha()[f],-40+e*16,0.1),0.34,B.F2,3,5,0.3)}c4.e=0}for(u=d2.a,o=u!=="tape",m=d1.as,l=u!=="mud",g=u==="sand",w=0;w<2;w=a1){d=-24+48*w
a0=s.h(0,B.ot[w])
a0=a0==null?c1:a0.a
a1=w+1
a2=s.h(0,B.ot[a1])
a2=a2==null?c1:a2.a
if(a0!==!0||a2!==!0)continue
a3=m[w]
a0=6200+w
c4.b=a0
if(a3.a&&!a3.d){a2=a3.b
if(a2===0)h=B.bpi
else h=a3.c?B.bla:B.bg7
c4.e=0.5
c4.aO(new A.q(d,0,0.08+0.02*a2),new A.q(2.2+a2*1.4,94,0.12),h)
c4.e=0}else if(!o||!l||g){c4.d=0.45
c4.e=0.6
c4.aO(new A.q(d,0,0.12),B.h4F,D.b2)
c4.e=0
c4.d=1}if(a3.d)a2="Smooth and ready for paint."
else if(!a3.a)a2="The joint between two sheets. It needs tape and three coats of joint compound."
else{a2=a3.b
a4=a2===1?"":"s"
a4="Taped, with "+a2+" coat"+a4+" of mud."
a2=a4}c9.n(0,a0,new A.cW("Seam",a2,new A.q(d,0,0),70))}for(o=d2.b,m=d1.x,l=d1.at,g=x.N,a5=0;a5<7;++a5){n=B.uy[a5]
a0=n.a
a6=m.aj(0,a0)
a7=l.h(0,a0)
a8=o===a0&&a7!=null
if(!a6)continue
a2=n.c
if(a2)a9=n.e==="fan"?"fan":"light"
else{a4=a7==null?c1:a7.a
a9=a4==null?"outlet":a4}if(a8){b0=A.t0(a7.a)
a0=a7.b
b1=A.h56(b0,a0,!1)
b2=A.h4f(b1,n,new A.fwT(n),d0)
D.d.v(c3,b2.a)
c9.v(0,b2.b)
if(a0.f&&a0.c===0){a0=C.a([],c6)
for(a2=b1.c,a4=a2.length,b3=0;b3<a2.length;a2.length===a4||(0,C.M)(a2),++b3){b4=a2[b3]
a0.push(new A.hf(A.ai_(n,b4.a),b4.b,b4.c,0))}D.d.v(c7,a0)}}else if(a7!=null&&a7.b.c>=2){a4=a7.a
b5=a7.b
b6=b5.w
b7=C.a([],c2)
b8=new A.fk(b7)
b9=new A.Cx(C.U(c8,g))
b9.c=2
b9.w=b6
if(a4==="light"||a4==="fan")A.hng(b8,a4,b9)
else{A.hmV(b8,A.h5K(a4),-0.25,b6,!0,!1)
A.hpk(b8,b6)}D.d.v(c3,A.h4f(new A.tM(b7,B.S2,B.zm,B.wv,c1,0),n,new A.fwU(n),d0).a)
if(!a2){c4.f=3
c4.b=3000+a0
c4.e=0.4
c4.d=0.55
a2=n.d
b5=b5.w?D.aw:D.b9
c4.aO(new A.q(a2.a,a2.b,a2.c+0.2),B.h4J,b5)
c4.d=1
c4.f=2
c4.e=0}c9.n(0,3000+a0,new A.cW(A.hX4(a4),A.hX3(d1,a0),A.ai_(n,B.aaq),22))}else{a4=C.a([],c2)
b5=A.h5K(a9)===a9?a9:"outlet"
A.hmf(new A.fk(a4),b5,!1)
D.d.v(c3,A.h4f(new A.tM(a4,B.dyJ,B.zm,B.wv,c1,0),n,new A.fwV(n),d0).a)
a2=a2?"Ceiling box":"Electrical box"
a4=v.t(0,a0)?"The box is mounted and the cable is in. A device can be wired here.":"The box is mounted. Pull the cable to it."
c9.n(0,2000+a0,new A.cW(a2,a4,A.ai_(n,B.aaq),24))}}c4.x=0
c0=new A.fwY(c4)
if(u==="wall"||u==="ceiling"||u==="fanbox")for(a5=0;a5<7;++a5){n=B.uy[a5]
c2=n.a
if(m.aj(0,c2))continue
c6=n.c
c8=n.d
s=c8.a
o=c8.b
a0=c6?new A.q(s,o-1,c8.c):new A.q(s,o,1.5)
a2=c6?B.h23:B.h45
c0.$4$round(2000+c2,a0,a2,c6)
c2=c6?new A.q(s,o-8,c8.c):new A.q(s,o+7,3)
c7.push(new A.hf(c2,n.b,D.eW,0))}else if(u==="cable")for(a5=0;a5<7;++a5){n=B.uy[a5]
c2=n.a
if(!m.aj(0,c2)||v.t(0,c2))continue
c6=n.c
c8=n.d
s=c8.a
o=c8.b
c8=c6?new A.q(s,o-1,c8.c):new A.q(s,o,1.5)
s=c6?B.aW4:B.h2t
c0.$5$col$round(2000+c2,c8,s,D.bG,c6)}else if(u==="knife")for(a5=0;a5<7;++a5){n=B.uy[a5]
if(n.c||!m.aj(0,n.a))continue
c2=n.d
c6=c2.a
i=d1.aq2(c6)
if(i==null||i.b.t(0,n.a))continue
c0.$4$col(2000+n.a,new A.q(c6,c2.b,0.5),B.h4e,D.cR)}else if(u==="sheet")for(w=0;w<5;){j=B.a51[w]
c0.$3(6000+w,new A.q(j,0,0.3),B.h8q);++w
c7.push(new A.hf(new A.q(j,50,1),"edge "+w,D.eW,0))}else if(u==="screw")for(a5=0;a5<3;++a5){j=B.ot[a5]
i=s.h(0,j)
if(i==null||!i.a)continue
for(c2=d1.aqn(j),c6=c2.length,c8=i.c,o=j+48,b3=0;b3<c2.length;c2.length===c6||(0,C.M)(c2),++b3){f=c2[b3]
for(a0=f*10,a2=7000+a0,r=0;r<6;++r){if(c8.t(0,a0+r))continue
c0.$3(a2+r,new A.q($.Ha()[f],-40+r*16,0.5),B.aVV)}a2=$.Ha()
if(f+1<a2.length&&a2[f]+16<=o)for(a0=7500+a0,r=0;r<6;r+=2)c0.$4$col(a0+r,new A.q(a2[f]+8,-40+r*16+8,0.5),B.aVV,D.dt)}}if(!C.eC(["wall","ceiling","fanbox","cable","knife","sheet","screw",""],g).t(0,u))c2=D.d.t(B.I1,u)||C.eC(["outlet","gfci","switch","light","fan"],g).t(0,u)||D.d.t(B.lH,u)||D.d.t(B.jV,u)
else c2=!1
if(c2)for(c2=d1.CW,a5=0;a5<7;++a5){n=B.uy[a5]
if(D.d.t(B.I1,u)){c6=n.a
a7=l.h(0,c6)
if(a7!=null&&D.d.t(B.lH,a7.a)&&a7.b.c>=2&&!c2.aj(0,c6)){c8=n.d
c0.$4$col(3000+c6,new A.q(c8.a,c8.b,1.2),B.h4M,D.bj)}}else{c6=n.a
if(m.aj(0,c6)&&v.t(0,c6)&&!l.aj(0,c6)){c8=n.c
s=n.d
o=s.a
g=s.b
s=c8?new A.q(o,g-1,s.c):new A.q(o,g,1.2)
o=c8?B.aW4:B.h8k
c0.$4$round(2000+c6,s,o,c8)}}}c4.r=!0
for(c2=d1.CW,c6=new C.cH(c2,C.a6(c2).k("cH<1,2>")).gaf(0);c6.C();){j=c6.d
c8=j.a
n=A.jY(c8)
v=n.d
d=v.a
c4.b=8200+c8
v=v.b
c4.jh(A.H2(C.a([new A.q(d,v,2.5),new A.q(d,-46,3.5),new A.q(d,-46,22)],t),4,6),0.55,B.Yl,!1,0.2,6)
c4.aZ(new A.q(d,v,1.8),B.h6y,B.bfj,0.3)
v=c4.b=8100+c8
u=j.b
switch(u){case"tv":c4.aZ(new A.q(d,-45,24),B.h0N,B.agy,0.2)
c4.aZ(new A.q(d,-19,24),B.h2h,E.Fi,0.4)
if(c2.aj(0,c8))c8=d1.ax&&!d1.ay&&d1.a4w(c8)
else c8=!1
if(c8){c8=d-38.5
s=d+38.5
c5.push(new A.fO(C.a([new A.q(c8,1.5,25.7),new A.q(s,1.5,25.7),new A.q(s,-39.5,25.7),new A.q(c8,-39.5,25.7)],t),v,new A.fwW(j),320,180,9,2,0,!1))}break
case"lamp":c4.dR(new A.q(d,-47.5,24),new A.q(d,-46.5,24),6,B.Xj,0.4,14)
c4.dR(new A.q(d,-46.5,24),new A.q(d,-22,24),1,B.Br,0.5,8)
c4.yP(new A.q(d,-26,24),new A.q(d,-12,24),9,K.Yt,!1,!0,5.5,0.2,16)
break
case"toaster":c4.aZ(new A.q(d,-42.5,24),B.fZe,B.jH,0.8)
c4.aO(new A.q(d,-38,24),B.h9r,B.ahQ)
break
default:c4.aZ(new A.q(d,-43.5,24),B.fZT,B.agy,0.2)
c4.BC(new A.q(d-6,-38,24),new A.q(d+8,-38,24),3.4,B.Ml,3,0.6,12)
c4.wo(new A.q(d-8,-43,24),B.fZo,B.Ml,0.6,0)}c8=A.hVe(u)
s="Plugged into "+n.b
u=u==="tv"?s+". To unplug it, go behind it (the Behind the TV button) and tap the plug on the wall.":s+". Tap it to unplug."
c9.n(0,v,new A.cW(c8,u,new A.q(d,-35,20),60))}c4.r=!1
for(a5=0;a5<7;++a5){n=B.uy[a5]
c9.c3(0,2000+n.a,new A.fwX(n))}return new A.tM(c3,c9,c7,c5,c1,0)},
hX4(d){var w
A:{if("gfci"===d){w="GFCI outlet"
break A}if("switch"===d){w="Light switch"
break A}if("light"===d){w="Ceiling light"
break A}if("fan"===d){w="Ceiling fan"
break A}if("outlet"===d){w="Outlet"
break A}w=A.agJ(d)
break A}return w},
hVe(d){var w
A:{if("tv"===d){w="TV"
break A}if("lamp"===d){w="Lamp"
break A}if("toaster"===d){w="Toaster"
break A}w="Hair dryer"
break A}return w},
hX3(d,e){var w,v=d.at.h(0,e)
if(v==null)return""
if(v.b.w)return"BURNT. It was wired wrong and it burnt out. Pull it out and put in a new one."
w=v.a
if(D.d.t(B.jV,w))return d.ch.t(0,e)?"The switch is ON. Tap to turn it off.":"The switch is OFF. Tap to flip it on."
if(w==="light"||w==="fan")return d.an9(e)?"It is running.":"It is off. Flip its switch (breaker on)."
w=d.CW.h(0,e)
return"Tap with a TV, lamp, toaster or hair dryer in your hand to plug it in. Plugged: "+(w==null?"nothing":w)+"."},
ig4(a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=C.a([],x.z),a0=new A.fk(d)
for(w=D.d.gaf(B.uy),v=new C.f5(w,new A.fNK()),u=a1.at,t=a2*7;v.C();){s=w.gR(0)
r=s.a
q=u.h(0,r)
if(q==null||q.b.c<1)continue
p=a1.an9(r)?t:0.4
a0.b=3000+r
s=s.d
r=s.a
o=s.b-6.6
s=s.c
for(n=0;n<4;++n){m=p+n*3.141592653589793/2
l=A.vw(B.fYC,m)
a0.wo(new A.q(r+l.a,o+l.b,s+l.c),B.hcl,B.bdX,0.3,m)}}w=a1.d
w===$&&C.c()
w=D.d.gaf(w)
v=new C.f5(w,new A.fNL())
u=a2*5
while(v.C()){s=w.gR(0).a
if(a1.an9(s)){k=A.jY(s)
a0.b=0
a0.d=0.25+0.05*Math.sin(u)
s=k.d
a0.fT(new A.q(s.a,s.b-5,s.c),11,B.XK,4,10,0)
a0.d=1}}for(w=a1.CW,v=new C.cH(w,C.a6(w).k("cH<1,2>")).gaf(0),u=a2*1.6,s=a2*6;v.C();){j=v.d
r=j.a
if(w.aj(0,r))o=a1.ax&&!a1.ay&&a1.a4w(r)
else o=!1
if(!o)continue
i=A.jY(r).d.a
a0.b=8100+r
switch(j.b){case"tv":break
case"lamp":a0.b=0
a0.d=0.3+0.05*Math.sin(s)
a0.fT(new A.q(i,-19,24),11,H.xz,4,10,0)
a0.d=1
break
case"toaster":a0.e=0.8
r=C.ar(B.ag3,H.Mq,(Math.sin(s)+1)/2)
r.toString
a0.aO(new A.q(i,-38.2,24),new A.q(13,0.3,6),r)
a0.e=0
break
default:for(r=i+9,h=0;h<6;++h)a0.fT(new A.q(r+D.k.F(u+h/6,1)*22,-38+Math.sin(h*2)*2,24),0.6,B.blz,3,5,0.2)}}for(w=a1.db,w=new C.cH(w,C.a6(w).k("cH<1,2>")).gaf(0),v=a1.cx;w.C();){j=w.d
u=j.a
k=A.jY(u)
g=a3.h(0,u)
f=a2<=(g==null?0:g)
e=v.t(0,u)
if(!f&&!e)continue
u=f?j.b:"smolder"
A.hra(a0,u,new A.fNM(k),1,a2)}return d},
rH:function rH(d,e,f){this.a=d
this.b=e
this.c=f},
fpd:function fpd(d){this.a=d},
fpe:function fpe(d){this.a=d},
fwT:function fwT(d){this.a=d},
fwU:function fwU(d){this.a=d},
fwV:function fwV(d){this.a=d},
fwY:function fwY(d){this.a=d},
fwW:function fwW(d){this.a=d},
fwX:function fwX(d){this.a=d},
fNK:function fNK(){},
fNL:function fNL(){},
fNM:function fNM(d){this.a=d},
hiV(d,e){var w=new A.cvb(e,d,A.hch())
w.bzJ(4,d,e)
return w},
rf:function rf(d,e){this.a=d
this.b=e},
uu:function uu(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
Ms:function Ms(d,e){this.a=d
this.b=e
this.c=!1},
cvb:function cvb(d,e,f){var _=this
_.a=d
_.b=e
_.c=$
_.d=f
_.e=3
_.r=_.f=0
_.w=!1},
cvg:function cvg(d){this.a=d},
cvc:function cvc(){},
cve:function cve(){},
cvf:function cvf(){},
cvd:function cvd(d){this.a=d},
arH:function arH(d,e){this.d=d
this.a=e},
aF0:function aF0(d,e){var _=this
_.e=_.d=$
_.f=d
_.r=$
_.w=e
_.x="inspect"
_.y=0
_.z=null
_.at=_.as=_.Q=!1
_.c=_.a=_.ax=null},
eul:function eul(d,e,f){this.a=d
this.b=e
this.c=f},
eum:function eum(d){this.a=d},
euk:function euk(d){this.a=d},
eua:function eua(d){this.a=d},
euf:function euf(d){this.a=d},
eug:function eug(d){this.a=d},
eue:function eue(d){this.a=d},
euh:function euh(d,e){this.a=d
this.b=e},
eui:function eui(d){this.a=d},
euj:function euj(d){this.a=d},
eud:function eud(d){this.a=d},
euc:function euc(d,e){this.a=d
this.b=e},
eu9:function eu9(d){this.a=d},
eu7:function eu7(d){this.a=d},
eu8:function eu8(d,e){this.a=d
this.b=e},
eub:function eub(d){this.a=d},
euy:function euy(d,e){this.a=d
this.b=e},
euu:function euu(){},
eut:function eut(d){this.a=d},
euv:function euv(){},
euw:function euw(){},
eux:function eux(d,e){this.a=d
this.b=e},
eus:function eus(d,e){this.a=d
this.b=e},
eur:function eur(d){this.a=d},
euq:function euq(d){this.a=d},
euo:function euo(d,e){this.a=d
this.b=e},
eun:function eun(){},
eup:function eup(d,e){this.a=d
this.b=e},
aty(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){return new A.y0(p,s,u,t,r,h,o,n,m,i,q,d,j,g,k,e,f,l)},
ifw(d){var w,v,u,t,s,r,q,p,o,n,m=d.gex(0),l=C.a([],x.T)
for(w=d.x,v=w.length,u=0;u<w.length;w.length===v||(0,C.M)(w),++u){t=w[u]
s=t.b
if(s==="rug")continue
s=B.hy.h(0,s)
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
case"bathroom":l.push(B.dzM)
l.push(B.dzs)
w=-m/2
l.push(new A.i8(w,w+33,0,75))
break}return l},
brG(d,e,f,g,h,i,j,k,l,m,n,o){var w=new A.brF(d,i,m,o,n,l,g,f,k,j,e,h,C.a([],x.n))
w.bzZ(d,e,f,g,h,i,j,k,l,m,n,o)
return w},
hmY(d,e){var w,v,u,t=d.w,s=D.d.bg(t,new A.fi_(e))
if(s<0)s=0
w=t[s]
v=d.gex(0)
u=d.gho(0)
t=w.c
switch(w.b){case"left":return new C.bk(new C.z(-v/2+18,D.k.E(t+u/2-40,10,u-10)),1.5707963267948966,s)
case"right":return new C.bk(new C.z(v/2-18,D.k.E(t+u/2-40,10,u-10)),-1.5707963267948966,s)
default:return new C.bk(new C.z(D.o.E(t,-v/2+12,v/2-12),18),0,s)}},
y0:function y0(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){var _=this
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
tH:function tH(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
a9U:function a9U(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
crK:function crK(d,e){var _=this
_.a=d
_.b=e
_.d=_.c=$},
Av:function Av(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
brF:function brF(d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
fi_:function fi_(d){this.a=d},
aW5:function aW5(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=$},
bUu:function bUu(d,e){this.a=d
this.b=e},
bUv:function bUv(d){this.a=d},
huC(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=C.a([B.dzF],x.T)
for(w=d.x,v=w.length,u=0;u<w.length;w.length===v||(0,C.M)(w),++u){t=w[u]
if(t.a===e)continue
s=t.b
if(D.d.t(B.a4Z,s)||D.d.t(B.HP,s)||s==="bush")continue
r=s==="townsign"
if(r||s==="adboard"){q=r?178:150
for(s=[-q,q],p=0;p<2;++p){o=s[p]
n=t.e*3.141592653589793/2
r=Math.cos(n)
m=Math.sin(n)
r=t.c+o*r
m=t.d+-o*m
i.push(new A.i8(r-8,r+8,m-8,m+8))}continue}r=B.hy.h(0,s)
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
hk7(d,e,f){var w=new A.b9p(d,-d.gex(0)/2+10,d.gex(0)/2-10,-760,d.gho(0)-10,e,f,0,B.dg8)
w.My(0)
return w},
b9p:function b9p(d,e,f,g,h,i,j,k,l){var _=this
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
aki:function aki(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h},
apU:function apU(d){this.a=d},
be0:function be0(d){var _=this
_.d=0
_.e=!1
_.f=d
_.c=_.a=_.r=null},
d6M:function d6M(d){this.a=d},
d6N:function d6N(d,e){this.a=d
this.b=e},
d6L:function d6L(d,e){this.a=d
this.b=e},
d6O:function d6O(d){this.a=d},
d6K:function d6K(d){this.a=d},
d6P:function d6P(d){this.a=d},
d6J:function d6J(d){this.a=d},
d6Q:function d6Q(d,e){this.a=d
this.b=e},
d6I:function d6I(d,e,f){this.a=d
this.b=e
this.c=f},
d6R:function d6R(d,e){this.a=d
this.b=e},
d6S:function d6S(d){this.a=d},
d6H:function d6H(d){this.a=d},
hra(d,e,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
if(e==="none"||e.length===0)return
d.b=0
w=new A.fyA(a2,d,a0,a1)
v=new A.fyz(d,a2,a0,a1)
switch(e){case"arc":u=D.k.bh(a2*14)
for(t=0.1*a1,s=x.o,r=u*3.1,q=0;q<3;++q){p=Math.sin((r+q*7.7)*12.9898)*43758.5453
if(p-Math.floor(p)<0.3)continue
o=q*2
n=2.2-o
m=C.a([],s)
for(o=1.6-o-n,l=u+q*13,k=0;k<=6;++k){j=k/6
if(k===0||k===6)i=0
else{p=Math.sin((l+k)*12.9898)*43758.5453
i=(p-Math.floor(p)-0.5)*1.6}m.push(a0.$1(new A.q(-1.8+3.6*j,n+o*j+i,3.3)))}p=Math.sin((u+q)*12.9898)*43758.5453
o=C.ar(D.c,D.co,p-Math.floor(p))
o.toString
d.jh(m,t,o,!1,0,4)}d.d=0.16+0.1*Math.sin(a2*31)
d.fT(a0.$1(B.h8i),3.2*a1,D.dt,4,8,0)
d.d=1
break
case"spark":w.$2(22,7)
d.d=0.2+0.1*Math.sin(a2*26)
d.fT(a0.$1(B.aWa),2.4*a1,H.xz,4,8,0)
d.d=1
break
case"smoke":d.d=0.3+0.08*Math.sin(a2*7)
d.fT(a0.$1(B.h1g),2.6*a1,D.aw,4,8,0)
d.d=1
v.$3(9,0.8,11)
w.$2(5,3)
break
case"fire":d.d=0.3+0.12*Math.sin(a2*20)
d.fT(a0.$1(B.aWa),4.4*a1,D.cR,4,8,0)
d.d=1
h=D.k.bh(a2*11)
for(t=0.85*a1,s=0.05*a1,r=0.5*a1,o=0.04*a1,k=0;k<6;++k){p=-2.2+k*0.88
g=Math.sin((h+k*5)*12.9898)*43758.5453
f=2.4+(g-Math.floor(g))*3.6
l=a0.$1(new A.q(p,-2.2,3))
g=Math.sin((h+k)*12.9898)*43758.5453
d.BC(l,a0.$1(new A.q(p+(g-Math.floor(g)-0.5)*1.2,-2.2+f,3.4)),t,D.fr,s,0,6)
d.BC(a0.$1(new A.q(p,-2.2,3.1)),a0.$1(new A.q(p,-2.2+f*0.62,3.5)),r,D.bG,o,0,6)}w.$2(16,6)
v.$3(10,1,13)
break
case"smolder":v.$3(4,0.9,9)
break}},
fyA:function fyA(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fyz:function fyz(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
h1b(d){var w
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
av9(d){var w
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
hr6(d,e,a0){var w,v,u,t,s=C.a([],x.fB),r=new A.fy4(s),q=new A.fy9(e),p=q.$2(B.Vt,B.JL),o=q.$2(B.Vt,B.JM),n=q.$2(B.Vt,B.JN),m=q.$2(B.Vu,B.JM),l=q.$2(B.Vu,B.JL),k=q.$2(B.Vu,B.JN),j=q.$2(B.Vv,B.JN),i=q.$2(B.Vv,B.JL),h=q.$2(B.Vv,B.JM),g=new C.Z(e,new A.fy5(),C.T(e).k("Z<1>")).gL(0),f=D.d.b3(e,new A.fy6())
if(f)r.$5("UNVERIFIED",B.f0u,"A conductor is in use whose function was never verified. A wire color alone does not prove what a wire does.","Verify every conductor with a tester before you connect it.","Identify each wire with a tester and the device diagram, then connect it.")
if(D.d.b3(e,new A.fy7()))r.$5("LOOSE",B.rY,"A connection is loose. A loose connection heats up and can arc.","Every conductor must be fastened tightly under its screw or connector.","Tighten the connection.")
if(D.d.b3(e,new A.fy8()))r.$5("EXPOSED",B.rY,"Bare copper is showing outside the terminal. An exposed energized conductor can shock or short.","No conductor may be left exposed.","Trim the wire so only the part under the screw is bare.")
if(!a0)r.$5("SUPPORT",B.rY,"The box or support is not rated for this device. It can fall.","A fixture or fan must hang from a box or bracket rated for its weight.","Use a box rated for this fixture (a fan-rated box for a fan).")
if(n>0||i>0)r.$5("HOT_TO_GROUND",B.rY,"The hot wire is connected to the ground. That is a short circuit to ground: a very large current.","The equipment ground never carries current in normal use, and the hot wire never touches it.","Hot goes on the hot terminal (brass). Ground goes only on the green screw.")
f=o>0
if(!(f&&m>0))w=l>0&&p>0
else w=!0
if(w)r.$5("SHORT",B.rY,"The hot and the neutral are connected together. That is a short circuit.","Hot and neutral must never touch each other.","Put each wire on its own terminal.")
else if(f||l>0)r.$5("REVERSED",B.rY,"Hot and neutral are reversed (reversed polarity). The device may still seem to work, but the parts that should be dead are live. This is a shock hazard.","Hot goes to the brass (hot) terminal and neutral to the silver (neutral) terminal.","Swap them: black (hot) to brass, white (neutral) to silver.")
if(k>0||h>0)r.$5("NEUTRAL_GROUND",B.rY,"The neutral and the equipment ground are joined at the device. Current can flow on the ground path and trip protective devices.","The neutral is never used as the equipment ground, and the two are not joined at the device.","Neutral to the silver terminal only. Ground to the green screw only.")
if(!(i>0&&n===0))f=h>0&&k===0
else f=!0
if(f)r.$5("GROUND_AS_CURRENT",B.rY,"The equipment ground was fastened to a terminal that carries current. The ground must never be used as a normal conductor.","The equipment ground goes only to the ground terminal.","Move the bare copper (ground) wire to the green screw.")
if(g>0&&p<d.b)r.$5("LOAD_SIDE",B.aPj,"The wires are on the LOAD screws. Power must come in on LINE; on LOAD the device would not protect or feed anything.","Supply (line) conductors go to the LINE terminals.","Move the wires to the LINE screws.")
f=d.b
if(p<f&&g===0&&o===0&&l===0&&n===0)r.$5("MISSING_HOT",B.TC,"The hot wire is not on the hot terminal, so the device gets no power.","The device needs its hot connection.","Connect the black (hot) wire to the brass terminal.")
if(p>=f){f=d.c
f=m<f&&f>0&&l===0&&k===0}else f=!1
if(f)r.$5("OPEN_NEUTRAL",B.rY,"The neutral is not connected, but the hot wire is. The device will not run, and parts of it can still be live. There may be nothing to see.","The neutral return conductor must be connected.","Connect the white (neutral) wire to the silver terminal.")
if(d.d&&j===0)r.$5("MISSING_GROUND",B.rY,"There is no equipment ground. It may seem to work, but nothing protects you if a fault happens.","A required equipment ground must be connected to the ground terminal.","Connect the bare copper (ground) wire to the green screw.")
for(f=s.length,v=B.v3,u=0;u<f;++u){t=s[u].b
if(A.av9(t)>A.av9(v))v=t}return new A.b60(v,s,A.hWC(s,e))},
hWC(d,e){var w=new A.fhx(d)
if(w.$1("SHORT")||w.$1("HOT_TO_GROUND"))return B.bt9
if(w.$1("LOOSE"))return B.bt1
if(w.$1("EXPOSED"))return B.bt7
if(w.$1("GROUND_AS_CURRENT"))return B.btb
if(w.$1("REVERSED"))return B.bta
if(w.$1("NEUTRAL_GROUND"))return B.btc
if(w.$1("SUPPORT"))return B.bt8
if(w.$1("OPEN_NEUTRAL"))return B.bt6
if(w.$1("LOAD_SIDE")||w.$1("MISSING_HOT"))return B.bt_
if(w.$1("UNVERIFIED"))return B.bt0
if(w.$1("MISSING_GROUND"))return B.bt3
return B.bt5},
hQC(d){var w
switch(d.a.c.a){case 0:w=d.b.c===B.JL
break
case 1:w=d.b.c===B.JM
break
case 2:w=d.b.c===B.JN
break
case 3:w=!1
break
default:w=null}return w},
hr7(d,e,f){var w,v,u,t,s=C.a([],x.fB)
e.bQ(0,new A.fyb(f,s))
for(w=s.length,v=B.v3,u=0;u<w;++u){t=s[u].b
if(A.av9(t)>A.av9(v))v=t}return new A.b60(v,s,v===B.v3?B.bt4:B.bt2)},
JD:function JD(d,e){this.a=d
this.b=e},
FG:function FG(d,e){this.a=d
this.b=e},
FN:function FN(d,e){this.a=d
this.b=e},
cyb:function cyb(d){this.c=d},
cBM:function cBM(d,e){this.a=d
this.c=e},
a4c:function a4c(d,e){this.a=d
this.b=e},
bLO:function bLO(d,e,f){this.b=d
this.c=e
this.d=f},
wj:function wj(d,e,f,g,h){var _=this
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
b60:function b60(d,e,f){this.a=d
this.b=e
this.c=f},
fy4:function fy4(d){this.a=d},
fy9:function fy9(d){this.a=d},
fya:function fya(d,e){this.a=d
this.b=e},
fy5:function fy5(){},
fy6:function fy6(){},
fy7:function fy7(){},
fy8:function fy8(){},
fhx:function fhx(d){this.a=d},
fhy:function fhy(d){this.a=d},
ab1:function ab1(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ab2:function ab2(d,e,f){this.a=d
this.b=e
this.c=f},
v9:function v9(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
b4J:function b4J(d,e){this.a=d
this.b=e},
b7T:function b7T(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cyd:function cyd(d,e,f){this.a=d
this.b=e
this.c=f},
cye:function cye(){},
cyf:function cyf(){},
cyg:function cyg(){},
PI:function PI(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fyb:function fyb(d,e){this.a=d
this.b=e},
h4M(d){var w
switch(d.a){case 0:w=D.bj
break
case 1:w=D.cR
break
case 2:w=D.cs
break
case 3:w=D.bG
break
case 4:w=D.bw
break
default:w=null}return w},
h7W(d){return C.bU(E.lw,null,new A.fVK(),d,!0,!0,!0,D.k1,!1,!1,x.H)},
hvw(d,e,f,g){var w=x.S
return C.bU(E.lw,null,new A.fVI(new A.cyd(e,f,C.U(w,w)),g),d,!0,!0,!0,D.k1,!1,!1,x.dZ)},
fVK:function fVK(){},
fVI:function fVI(d,e){this.a=d
this.b=e},
a19:function a19(d,e,f){this.c=d
this.d=e
this.a=f},
buo:function buo(d){var _=this
_.d=d
_.c=_.a=_.e=null},
f7p:function f7p(d,e){this.a=d
this.b=e},
f7o:function f7o(d,e,f){this.a=d
this.b=e
this.c=f},
f7q:function f7q(d){this.a=d},
f7n:function f7n(d,e){this.a=d
this.b=e},
f7r:function f7r(){},
f7s:function f7s(d){this.a=d},
a58:function a58(d,e){var _=this
_.a=d
_.b=e
_.c=!1
_.d=null},
bS0:function bS0(d){this.a=d},
bS_:function bS_(d){this.a=d}},B,I,E,Ah,F,O,K,Ai,Z,N,Aj,A4
J=c[1]
C=c[0]
D=c[2]
A5=c[85]
A6=c[126]
G=c[93]
P=c[115]
H=c[103]
A7=c[112]
A8=c[125]
Q=c[113]
A9=c[91]
Aa=c[117]
L=c[89]
R=c[120]
A_=c[82]
Ab=c[109]
T=c[124]
Ac=c[123]
U=c[118]
A0=c[122]
Ad=c[116]
V=c[95]
W=c[110]
Ae=c[101]
X=c[114]
A1=c[111]
A2=c[98]
Y=c[105]
A3=c[119]
Af=c[121]
Ag=c[127]
M=c[97]
S=c[99]
A=a.updateHolder(c[25],A)
B=c[92]
I=c[27]
E=c[96]
Ah=c[66]
F=c[94]
O=c[31]
K=c[102]
Ai=c[106]
Z=c[108]
N=c[100]
Aj=c[107]
A4=c[104]
A.eWL.prototype={
a5(){return"_RadioType."+this.b}}
A.a9F.prototype={
T(){return new A.ae8(null,this.$ti.k("ae8<1>"))}}
A.ae8.prototype={
gcnR(){var w=this.e
return w===$?this.e=new A.boT(this):w},
galT(){var w=this.Gb$
w=w==null?null:w.gapJ()
return w==null?this.a.d:w},
gazo(){this.a.toString
return!0},
bVY(){var w=this,v=w.a.c,u=w.galT()
if(v===u)return
w.a56(v===w.galT()?null:v)},
a56(d){var w=this.Gb$
if(w!=null)w.glE().$1(d)
this.a.e.$1(d)},
d4(){var w,v=this
v.eG()
w=v.c
w.toString
v.sa6B(O.h1_(w,v.$ti.c))},
q(){this.sa6B(null)
var w=this.d
if(w!=null)w.q()
this.a1()},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.a
m.toString
switch(0){case 0:w=o.gcnR()
v=w.a.galT()
o.a.toString
u=new C.HN(!0,O.hON(n,!1,n,o.gazo(),n,w,v,n,n,D.km,n,n,n,n,n,!1,m.c,o.$ti.c),n)
break}C.amU(d)
o.a.toString
A:{m=new C.z(u,n)
break A}t=C.P(d)
s=O.h10(d)
o.a.toString
w=s.b
w=w==null?n:w.aT(C.aY(x.c1))
r=w
if(r==null)r=t.ax.y
w=o.a.at
v=o.gazo()
q=o.gazo()?o.gbVX():n
p=o.d
if(p==null){p=C.k2(!0,n,!0,!0,n,n,!1)
o.d=p}return new C.zs(C.dF(!1,n,!0,n,v,p,n,n,!1,n,n,m.a,n,n,n,n,q,!1,r,n,n,n,n,n,n,w,n,m.b,n),n)}}
A.boT.prototype={
gapJ(){return this.a.galT()},
glE(){return this.a.gLK()},
biM(d){},
bjV(d){},
gdc(d){return this.a}}
A.aNp.prototype={}
A.q.prototype={
a8(d,e){return new A.q(this.a+e.a,this.b+e.b,this.c+e.c)},
aF(d,e){return new A.q(this.a-e.a,this.b-e.b,this.c-e.c)},
aI(d,e){return new A.q(this.a*e,this.b*e,this.c*e)},
FW(d){var w=this.b,v=d.c,u=this.c,t=d.b,s=d.a,r=this.a
return new A.q(w*v-u*t,u*s-r*v,r*t-w*s)},
guT(){var w=this.a,v=this.b,u=this.c
return Math.sqrt(w*w+v*v+u*u)},
gmQ(d){var w=this,v=w.guT()
return v<1e-9?w:new A.q(w.a/v,w.b/v,w.c/v)}}
A.kn.prototype={}
A.cW.prototype={}
A.hf.prototype={}
A.tM.prototype={}
A.fO.prototype={}
A.fk.prototype={
Ww(){var w=this.x
if(!(w!==0))if(this.r){w=$.dS+1
$.dS=w}else w=0
this.w=w},
aIm(d,e,f,g,h,i,j,k){var w=this,v=i.gmQ(0)
w.a.push(new A.kn(C.a([d,e,f,g],x.o),v,h,w.b,j,w.d,k,w.c,w.e,w.f,w.w))},
biB(d,e,f,g,h,i,j){return this.aIm(d,e,f,g,h,i,0,j)},
cWj(d,e,f,g,h,i,j){return this.aIm(d,e,f,g,h,i,j,!1)},
GC(d,e,f,g,h,i){return this.aIm(d,e,f,g,h,i,0,!1)},
a6Z(d,e,f,g,h,i){var w=this,v=(h==null?e.aF(0,d).FW(f.aF(0,d)):h).gmQ(0)
w.a.push(new A.kn(C.a([d,e,f],x.o),v,g,w.b,0,w.d,i,w.c,w.e,w.f,w.w))},
bjM(d,e,f,g){return this.a6Z(d,e,f,g,null,!0)},
FJ(d,e,f,g,h,i,j){var w,v,u,t,s,r,q,p,o,n,m
this.Ww()
w=e.a/2
v=e.b/2
u=e.c/2
t=new A.c_g(this,i,new A.c_h(j,d),new A.c_i(j),f,h)
s=-w
r=-v
q=2*w
p=2*v
t.$4(new A.q(0,0,1),new A.q(s,r,u),new A.q(q,0,0),new A.q(0,p,0))
o=-u
t.$4(new A.q(0,0,-1),new A.q(w,r,o),new A.q(-2*w,0,0),new A.q(0,p,0))
n=-2*u
t.$4(new A.q(1,0,0),new A.q(w,r,u),new A.q(0,0,n),new A.q(0,p,0))
m=2*u
t.$4(new A.q(-1,0,0),new A.q(s,r,o),new A.q(0,0,m),new A.q(0,p,0))
if(g){t.$4(new A.q(0,1,0),new A.q(s,v,u),new A.q(q,0,0),new A.q(0,0,n))
t.$4(new A.q(0,-1,0),new A.q(s,r,o),new A.q(q,0,0),new A.q(0,0,m))}},
hn(d,e,f,g){return this.FJ(d,e,f,!0,0,g,0)},
aDB(d,e,f,g,h){return this.FJ(d,e,f,g,h,1,0)},
n8(d,e,f,g,h){return this.FJ(d,e,f,!0,g,h,0)},
aZ(d,e,f,g){return this.FJ(d,e,f,!0,g,1,0)},
aO(d,e,f){return this.FJ(d,e,f,!0,0,1,0)},
wo(d,e,f,g,h){return this.FJ(d,e,f,!0,g,1,h)},
cHQ(d,e,f,g,h,i){return this.FJ(d,e,f,g,h,i,0)},
aDA(d,e,f,g){return this.FJ(d,e,f,!0,0,1,g)},
yP(b3,b4,b5,b6,b7,b8,b9,c0,c1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this
b2.Ww()
w=b4.aF(0,b3).gmQ(0)
v=w.b
u=w.FW(Math.abs(v)<0.9?B.ea:B.hE).gmQ(0)
t=w.FW(u).gmQ(0)
s=b9<0?b5:b9
r=new A.c_j(u,c1,t)
for(q=b2.a,p=b3.a,o=b3.b,n=b3.c,m=b4.a,l=b4.b,k=b4.c,j=x.o,i=w.a*-1,v*=-1,h=w.c*-1,g=0;g<c1;){f=r.$1(g);++g
e=r.$1(g)
d=f.a
a0=e.a
a1=f.b
a2=e.b
a3=f.c
a4=e.c
a5=new A.q(d+a0,a1+a2,a3+a4).gmQ(0)
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
q.push(new A.kn(C.a([new A.q(a6,a7,a8),new A.q(a9,b0,b1),new A.q(a0,a2,a4),new A.q(d,a1,a3)],j),a5,b6,b2.b,c0,b2.d,b8,b2.c,b2.e,b2.f,b2.w))
if(b7){q.push(new A.kn(C.a([b3,new A.q(a9,b0,b1),new A.q(a6,a7,a8)],j),new A.q(i,v,h),b6,b2.b,c0,b2.d,!1,b2.c,b2.e,b2.f,b2.w))
q.push(new A.kn(C.a([b4,new A.q(d,a1,a3),new A.q(a0,a2,a4)],j),w,b6,b2.b,c0,b2.d,!1,b2.c,b2.e,b2.f,b2.w))}}},
dR(d,e,f,g,h,i){return this.yP(d,e,f,g,!0,!1,-1,h,i)},
BC(d,e,f,g,h,i,j){return this.yP(d,e,f,g,!0,!1,h,i,j)},
Tc(d,e,f,g,h,i,j,k){return this.yP(d,e,f,g,h,i,-1,j,k)},
bdy(d,e,f,g,h,i,j){return this.yP(d,e,f,g,h,!1,-1,i,j)},
dN(d,e,f,g,h){return this.yP(d,e,f,g,!0,!1,-1,0,h)},
L5(d,e,f,g,h,i){return this.yP(d,e,f,g,h,!1,-1,0,i)},
L6(d,e,f,g,h,i){return this.yP(d,e,f,g,!0,!1,h,0,i)},
Tb(d,e,f,g,h,i,j){return this.yP(d,e,f,g,h,!1,i,0,j)},
fT(a7,a8,a9,b0,b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6=this
a6.Ww()
w=new A.c_f(b0,b1)
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
v.push(new A.kn(C.a([new A.q(u+i*a8,t+h*a8,s+g*a8),new A.q(u+f*a8,t+e*a8,s+d*a8),new A.q(u+a0*a8,t+a1*a8,s+a2*a8),new A.q(u+a3*a8,t+a4*a8,s+a5*a8)],r),new A.q(i+f+a0+a3,h+e+a1+a4,g+d+a2+a5).gmQ(0),a9,a6.b,b2,a6.d,!1,a6.c,a6.e,a6.f,a6.w))}},
bbB(d,e,f,g){return this.fT(d,e,f,6,10,g)},
ed(d,e,f,g,h){return this.fT(d,e,f,g,h,0.4)},
a7_(d,e,f,g,h,i,j,k){var w,v,u,t,s
this.Ww()
for(w=0;v=w+1,v<d.length;w=v){u=d[v]
t=d[w]
if(new A.q(u.a-t.a,u.b-t.b,u.c-t.c).guT()<0.000001)continue
u=d[w]
t=d[v]
if(g)s=w===0||w===d.length-2
else s=!1
this.Tc(u,t,e,f,s,h,j,k)}if(i)for(u=e*0.98,w=1;v=w+1,v<d.length;w=v)this.fT(d[w],u,f,4,k,j)},
jh(d,e,f,g,h,i){return this.a7_(d,e,f,!0,!1,g,h,i)},
aJa(d,e,f,g,h,i,j){return this.a7_(d,e,f,g,!1,h,i,j)},
bjO(d,e,f,g,h){return this.a7_(d,e,f,!0,!1,!0,g,h)},
zq(a4,a5,a6,a7,a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=this
a3.Ww()
a3.bdy(a4,a5,a6,a8,!1,a9,b0)
w=a5.aF(0,a4).gmQ(0)
v=w.FW(Math.abs(w.b)<0.9?B.ea:B.hE).gmQ(0)
u=new A.c_k(v,b0,w.FW(v).gmQ(0))
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
s.push(new A.kn(C.a([new A.q(p+i*a7,m+h*a7,l+j*a7),new A.q(p+f*a6,m+e*a6,l+g*a6),new A.q(p+a0*a6,m+a1*a6,l+d*a6),new A.q(p+a2.a*a7,m+a2.b*a7,l+a2.c*a7)],r),n,a8,a3.b,a9,a3.d,!1,a3.c,a3.e,a3.f,a3.w))}}},
cXL(d,e,f,g,h,i){return this.zq(d,e,f,g,h,i,16)}}
A.xd.prototype={
r6(d){var w,v,u,t=this
t.Q=d
if(!d){w=t.a
v=t.y
u=t.z
t.a=D.k.E(w,v-u,v+u)}t.aV()},
hQ(d,e,f,g){var w=this
w.as=f
w.at=d
w.ax=g
w.ay=e
w.aV()},
xh(d,e){return this.hQ(d,null,e,null)},
bnH(d){return this.hQ(d,null,null,null)},
apF(d){return this.hQ(null,null,d,null)},
apG(d,e,f){return this.hQ(d,e,f,null)},
Nl(d,e,f,g){var w=this
w.ay=w.ax=w.at=w.as=null
w.d=f
w.c=d
w.a=g
w.b=e
w.aV()},
a6N(d){var w,v,u,t=this
if(!(t.as!=null||t.at!=null||t.ax!=null||t.ay!=null))return
w=1-Math.exp(-d*7)
v=t.as
if(v!=null){u=A.o2(t.d,v,w)
t.d=u
if(u.aF(0,v).guT()<0.02){v=t.as
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
t.ay=null}}t.aV()},
cZ0(d,e){var w,v,u,t,s=this,r=e.a,q=e.b,p=Math.min(r,q)*1.15,o=Math.cos(s.a),n=Math.sin(s.a)
q=new A.bJ2(s,new A.bJ3(Math.cos(s.b),Math.sin(s.b),o,n),(d.a-r/2)/p,-(d.b-q/2)/p)
w=q.$1(0)
r=q.$1(1).c
v=w.c
u=r-v
if(Math.abs(u)<1e-9)return null
t=(0-v)/u
if(t<=0)return null
return q.$1(t)},
beT(d,e,f){var w,v,u,t,s=this,r=e.a,q=e.b,p=Math.min(r,q)*1.15,o=Math.cos(s.a),n=Math.sin(s.a)
q=new A.bIX(s,new A.bIY(Math.cos(s.b),Math.sin(s.b),o,n),(d.a-r/2)/p,-(d.b-q/2)/p)
w=q.$1(0)
r=q.$1(1).b
v=w.b
u=r-v
if(Math.abs(u)<1e-9)return null
t=(f-v)/u
if(t<=0)return null
return q.$1(t)},
cOB(d,e){return this.beT(d,e,0)},
apg(d){var w=this
w.at=null
w.c=D.k.E(w.c*d,w.e,w.f)
w.aV()}}
A.bUf.prototype={
cVw(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this.a,f=g.length-1,e=a0.a,d=a0.b
for(;;){if(!(f>=0)){w=0
v=null
break}if(g[f].a.gbw().a.contains(e,d)){u=g[f]
w=u.b
u=u.a.gbw().a.getBounds()
v=new C.a3(u[0],u[1],u[2],u[3])
break}--f}if(w!==0&&v.gdC()<16)return w
for(u=g.length,t=0,s=1/0,r=0;r<g.length;g.length===u||(0,C.M)(g),++r){q=g[r]
p=q.a.gbw().a.getBounds()
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
A.b63.prototype={
gGQ(d){var w=this.r.a
return w==null?0:w},
chR(b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=null,a8=b2.a,a9=b2.b,b0=new C.a3(0,0,0+a8,0+a9)
$.S()
w=C.I()
w.sam(B.c38.aB(0,b0))
b1.aP(b0,w)
v=this.c.a*90
w=b1.a
J.bm(w.save())
w.translate(a8*0.45-v,a9*0.3)
b1.ie(0,-0.45)
for(u=x.O,t=0;t<3;++t){s=C.bJ(D.I,a9*(0.2-t*0.05),a8*(1.9-t*0.4))
r=[B.bfA,D.aQ,D.ra][t]
q=new C.ap(D.R,D.N,D.U,D.V,D.S)
q.sam(new C.c1(D.A,0.5,D.x,a7,0,C.a([r.j(0.3-t*0.07),r.j(0)],u),a7,a7).aB(0,s))
p=q.G()
w.drawOval(C.bF(s),p)
p.delete()}w.restore()
o=new C.e9()
o.d3(11)
n=C.I()
for(q=this.r,t=0;t<170;++t){m=D.k.F(D.k.F(o.ah()*a8*1.5-v*(0.4+o.ah()*0.6),a8)+a8,a8)
l=o.ah()
k=o.ah()
j=q.a
if(j==null)j=0
n.r=D.c.j((0.35+0.65*k)*(0.55+0.45*Math.sin(j*(1+k*2)+t))).gp(0)
p=n.G()
w.drawCircle(m,l*a9*0.85,0.5+k*1.4,p)
p.delete()}l=a8*0.8-v*0.3
j=a9*0.17
i=new C.t(l,j)
h=Math.min(a8,a9)*0.12
g=h*1.5
f=$.S()
e=C.I()
e.sam(new C.c1(D.A,0.5,D.x,a7,0,C.a([D.aQ.j(0.28),B.bmw],u),a7,a7).aB(0,C.bX(i,g)))
b1.ad(i,g,e)
J.bm(w.save())
f=new C.aF(f.r,D.ag,a7,a7,C.a([],x.g))
f.D(new C.jE(C.bX(i,h)))
b1.mE(0,f)
f=C.I()
f.sam(B.erU.aB(0,C.bX(i,h)))
b1.ad(i,h,f)
d=C.I()
d.r=B.bg_.gp(0)
for(a0=0;a0<4;++a0){u=B.d_Y[a0].a
a1=u[0]
a2=u[1]
a3=u[2]
a4=u[3]
u=q.a
u=C.bJ(new C.t(l+(a1*h+Math.sin((u==null?0:u)*0.05)*h*0.08),j+a2*h),a4*h*2,a3*h*2)
p=d.G()
w.drawOval(C.bF(u),p)
p.delete()}$.S()
a5=C.I()
a5.r=D.c.j(0.55).gp(0)
for(u=h*0.16,a0=0;a0<3;++a0){q=B.cXT[a0]
q=C.bJ(new C.t(l+q.a*h,j+q.b*h),u,q.c*h*2)
p=a5.G()
w.drawOval(C.bF(q),p)
p.delete()}u=i.a8(0,new C.t(h*0.45,h*0.35))
$.S()
q=C.I()
q.r=D.w.j(0.38).gp(0)
b1.ad(u,h,q)
w.restore()
a6=new C.t(a8*0.18-v*0.2,a9*0.12)
w=C.I()
w.r=B.bhi.gp(0)
b1.ad(a6,h*0.28,w)
w=h*0.05
q=a6.a8(0,new C.t(h*0.08,w))
u=C.I()
u.r=B.afu.gp(0)
b1.ad(q,h*0.07,u)
u=-h
u=a6.a8(0,new C.t(u*0.1,u*0.09))
q=C.I()
q.r=B.afu.gp(0)
b1.ad(u,w,q)},
a3(j3,j4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1,e2,e3,e4,e5,e6,e7,e8,e9,f0,f1,f2,f3,f4,f5,f6,f7,f8,f9,g0,g1,g2,g3,g4,g5,g6,g7,g8,g9,h0,h1,h2,h3,h4,h5,h6,h7,h8,h9,i0,i1,i2,i3,i4,i5,i6,i7,i8,i9,j0=this,j1=null,j2={}
if(j0.z)j0.chR(j3,j4)
else{w=0+j4.a
v=0+j4.b
$.S()
u=C.I()
t=j0.y
s=C.ar(t,D.c,0.06)
s.toString
u.sam(new C.a9(D.b4,D.b7,D.x,C.a([s,t],x.O),j1,j1).aB(0,new C.a3(0,0,w,v)))
j3.aP(new C.a3(0,0,w,v),u)}r=j4.a
q=j4.b
p=Math.min(r,q)*1.15
o=r/2
n=q/2
w=j0.c
m=Math.cos(w.a)
l=Math.sin(w.a)
k=Math.cos(w.b)
j=Math.sin(w.b)
i=new A.csL(m,l,k,j)
h=new A.csM(j0,i)
j2.a=!1
j2.b=0
v=j0.b
g=v.e
if(g!=null){u=w.d
t=w.c*k
f=u.a-t*l
s=g.a
e=s[0]
d=f<e-1||f>s[1]+1||u.c+t*m<s[2]-1
j2.a=d
if(d)j2.b=h.$1(new A.q((e+s[1])/2,40,(s[2]+s[3])/2)).c
u=d}else u=!1
t=x.S
s=x.i
a0=C.U(t,s)
a1=C.U(t,t)
if(u)for(u=v.a,e=u.length,a2=0;a2<u.length;u.length===e||(0,C.M)(u),++a2){a3=u[a2]
if(a3.y!==0||a3.z===0)continue
for(a4=a3.a,a5=a4.length,a6=0,a7=0;a7<a4.length;a4.length===a5||(0,C.M)(a4),++a7)a6+=h.$1(a4[a7]).c
a5=a3.z
a8=a0.h(0,a5)
if(a8==null)a8=0
a0.n(0,a5,a8+a6/a4.length)
a4=a1.h(0,a5)
a1.n(0,a5,(a4==null?0:a4)+1)}u=v.f
a9=u<=0?0:1800+(u-1800)*D.k.E((w.c-200)/600,0,1)
b0=Math.max(Math.max(w.c*2.4+450,a9),w.r)
b1=C.U(t,s)
b2=C.U(t,t)
b3=B.h6I.gmQ(0)
b4=b3.a8(0,B.td).gmQ(0)
b5=C.a([],x.bl)
u=j0.w
b6=u==null?B.HZ:u.$1(j0.gGQ(0))
u=w.d
b7=u.a
b8=u.b
b9=u.c
c0=w.c
j2.c=new Float64Array(24)
j2.d=new Float64Array(24)
j2.e=new Float64Array(24)
j2.f=new Float64Array(24)
j2.r=new Float64Array(24)
c1=new A.csK(j2,j0,b7,b8,b9,m,l,k,j,c0,o,p,n,a0,a1,b0,r,q,b1,b2,b3.a,b3.b,b3.c,b4.a,b4.b,b4.c,b5)
c2=v.a
c3=c2.length>1500?A.hVz(v):j1
if(c3==null)for(c4=0;c4<c2.length;++c4)c1.$2(c2[c4],c4)
else for(w=c3.a,u=w.length,e=r+40,a4=q+40,a2=0;a2<w.length;w.length===u||(0,C.M)(w),++a2){c5=w[a2]
if(!c5.a){for(a5=c5.x,a8=c5.r,c6=c5.e,c7=c5.d,c8=c5.f,c9=c5.w,d0=!1,d1=!0,d2=!1,d3=1/0,d4=-1/0,d5=1/0,d6=-1/0,d7=0;d7<8;++d7){d8=((d7&1)===0?c7:c6)-b7
d9=((d7&2)===0?c8:a8)-b8
e0=((d7&4)===0?c9:a5)-b9
e1=-d8*l+e0*m
e2=-(d9*j+e1*k)+c0
if(e2<=b0)d1=!1
if(e2<1){d2=!0
continue}e3=o+(d8*m+e0*l)*p/e2
e4=n-(d9*k-e1*j)*p/e2
if(e3<d3)d3=e3
if(e3>d4)d4=e3
if(e4<d5)d5=e4
if(e4>d6)d6=e4
d0=!0}if(d1)continue
if(!d0)continue
if(!d2)a5=d4<-40||d3>e||d6<-40||d5>a4
else a5=!1
if(a5)continue}for(a5=c5.b,a8=c5.c,d7=0;d7<a5.length;++d7)c1.$2(a5[d7],a8[d7])}for(w=J.a5(b6),c4=0;c4<w.gL(b6);++c4)c1.$2(w.h(b6,c4),c2.length+c4)
u=j0.x
e5=v.d
if(u==null)e6=e5
else{e=C.C(e5,x.K)
D.d.v(e,u.$1(j0.gGQ(0)))
e6=e}u=x.n
e7=C.a([],u)
e8=C.a([0],u)
j2.w=j2.x=0
e9=e5.length
for(u=x.dx,e=x.dN,a4=x.o,a5=x.gp,a8=x.g,c6=r+8,c7=q+8,f0=0;f0<e6.length;++f0){f1=e6[f0]
c8=C.a([],a4)
for(c9=f1.a,a2=0;a2<4;++a2)c8.push(h.$1(c9[a2]))
f2=c8[0]
f3=c8[1]
f4=c8[2]
f5=c8[3]
f6=(f2.c+f3.c+f4.c+f5.c)*0.25
f7=c9[3]
f8=c9[0]
f9=f8.a
g0=f8.b
f8=f8.c
c9=c9[1]
g1=i.$1(new A.q(f7.a-f9,f7.b-g0,f7.c-f8).FW(new A.q(c9.a-f9,c9.b-g0,c9.c-f8)))
if(g1.a*((f2.a+f3.a+f4.a+f5.a)*0.25)+g1.b*((f2.b+f3.b+f4.b+f5.b)*0.25)+g1.c*f6>0&&!f1.x)continue
if(f6>b0)continue
if(D.d.d5(c8,new A.csE())){c9=C.a([],e)
for(f2=c8.length,a2=0;a2<c8.length;c8.length===f2||(0,C.M)(c8),++a2){g2=c8[a2]
f3=g2.c
c9.push(new C.t(o+g2.a*p/f3,n-g2.b*p/f3))}for(c8=c9.length,g3=1/0,g4=-1/0,g5=1/0,g6=-1/0,a2=0;a2<c8;++a2){g7=c9[a2]
g8=g7.a
if(g8<g3)g3=g8
if(g8>g4)g4=g8
g9=g7.b
if(g9<g5)g5=g9
if(g9>g6)g6=g9}if(g4<-8||g3>c6||g6<-8||g5>c7){c8=f1.w
if(c8!==0){c9=b1.h(0,c8)
b1.n(0,c8,(c9==null?0:c9)+f6-f1.f)
c9=b2.h(0,c8)
b2.n(0,c8,(c9==null?0:c9)+1)}continue}c8=$.S()
f2=C.a([],a8)
h0=new C.aF(c8.r,D.ag,j1,j1,f2)
c8=C.C(c9,u)
f2.push(new C.LK(c8,!0))
c8=h0.gbw().a.getBounds()
f2=c8[0]
f3=c8[1]
h1=(c8[2]-f2)*(c8[3]-f3)
e7.push(h1)
b5.push(new A.FZ(f1.r,f1.w,new A.csF(j2,j0,f0<e9,h1,e8,f1,c9,h0),h0,D.K,f6-f1.f,f1.b,!1,!1))
continue}h2=new A.csD(c8)
h3=C.a([],a5)
c8=$.S()
c9=C.a([],a8)
h0=new C.aF(c8.r,D.ag,j1,j1,c9)
for(h4=0;h4<6;h4=h5)for(c8=h4/6,h5=h4+1,f2=h5/6,c4=0;c4<8;c4=h6){f3=c4/8
h6=c4+1
f4=h6/8
h7=C.a([h2.$2(f3,c8),h2.$2(f4,c8),h2.$2(f4,f2),h2.$2(f3,f2)],a4)
if(D.d.b3(h7,new A.csG()))continue
f3=C.a([],e)
for(a2=0;a2<4;++a2){g2=h7[a2]
f4=g2.c
f3.push(new C.t(o+g2.a*p/f4,n-g2.b*p/f4))}h3.push(new C.bk(c4,h4,f3))
f3=C.C(f3,u)
f3=new C.LK(f3,!0)
c9.push(f3)
f4=h0.f
if(f4!=null)f3.by(f4)
f3=h0.e
if(f3!=null)f3.a.delete()
h0.e=null}if(h3.length===0)continue
b5.push(new A.FZ(f1.r,f1.w,new A.csH(j0,f1,h3),h0,D.K,f6-f1.f,f1.b,!1,!1))}D.d.aY(e7,new A.csI())
e8[0]=e7.length>6?e7[5]:0
h8=C.dR(b1,t,s)
h9=C.dR(b2,t,t)
for(u=b5.length,a2=0;a2<b5.length;b5.length===u||(0,C.M)(b5),++a2){i0=b5[a2]
t=i0.b
if(t!==0){s=h8.h(0,t)
if(s==null)s=0
h8.n(0,t,s+i0.x)
s=h9.h(0,t)
h9.n(0,t,(s==null?0:s)+1)}}i1=c2.length+w.gL(b6)
for(c4=0;c4<b5.length;++c4){i2=b5[c4]
if(i2.f!=null){i3=i1+1
i2.c=i1
i1=i3}w=i2.b
if(w!==0){u=h8.h(0,w)
u.toString
w=h9.h(0,w)
w.toString
w=u/w}else w=i2.x
i2.d=w}D.d.aY(b5,new A.csJ())
w=j0.d.a
D.d.a9(w)
$.S()
i4=C.I()
i4.b=D.N
i5=C.I()
i5.b=D.aa
i5.c=0.8
for(u=b5.length,t=j3.a,a2=0;a2<b5.length;b5.length===u||(0,C.M)(b5),++a2){i2=b5[a2]
s=i2.f
if(s!=null){s.$1(j3)
s=i2.y
if(s!==0)w.push(new C.z(i2.r,s))
continue}s=i2.w
i4.r=s.gp(0)
e=i2.r
i6=i4.G()
a4=e.e
t.drawPath((a4==null?e.e=new C.cl(e.gbw().a.snapshot()):a4).a,i6)
i6.delete()
if(!i2.z&&!i2.e){i5.r=s.gp(0)
i6=i5.G()
s=e.e
t.drawPath((s==null?e.e=new C.cl(e.gbw().a.snapshot()):s).a,i6)
i6.delete()}s=i2.y
if(s!==0)w.push(new C.z(e,s))}if(j0.e!==0){$.S()
g7=C.I()
g7.b=D.aa
g7.c=1.4
g7.r=D.c.j(0.35+0.25*Math.sin(j0.gGQ(0)*6)).gp(0)
for(u=b5.length,a2=0;a2<b5.length;b5.length===u||(0,C.M)(b5),++a2){i2=b5[a2]
if(i2.Q){s=i2.r
i6=g7.G()
e=s.e
t.drawPath((e==null?s.e=new C.cl(s.gbw().a.snapshot()):e).a,i6)
i6.delete()}}}for(v=v.c,u=v.length,a2=0;a2<v.length;v.length===u||(0,C.M)(v),++a2){i7=v[a2]
g2=h.$1(i7.a)
s=g2.c
if(s<1)continue
e=o+g2.a*p/s
s=n-g2.b*p/s
i8=new C.jR(new C.eu(i7.b,j1,j1,D.cQ,j1,j1,j1,j1,j1,j1,new C.F(!0,D.c,j1,j1,j1,j1,11,D.u,j1,j1,j1,j1,j1,j1,j1,j1,j1,j1,j1,j1,j1,j1,j1,j1,j1,j1)),D.a3,D.bZ,new C.jA(1),j1,j1,j1,j1,D.bW,j1)
i8.el()
a4=i8.b
a5=a4.c
a4=a4.a.c
i9=C.bt(C.bJ(new C.t(e,s),a4.gbb(a4)+8,a5+14),D.i7)
a5=$.S()
a4=new C.ap(D.R,D.N,D.U,D.V,D.S)
a4.r=i7.c.j(0.92).gp(0)
i6=a4.G()
t.drawRRect(C.el(i9),i6)
i6.delete()
a4=new C.ap(D.R,D.N,D.U,D.V,D.S)
a4.b=D.aa
a4.c=1
a4.r=D.ad.gp(0)
i6=a4.G()
t.drawRRect(C.el(i9),i6)
i6.delete()
a4=i8.b
c6=a4.c
a4=a4.a.c
i8.a3(j3,new C.t(e-c6/2,s-a4.gbb(a4)/2))
s=i7.d
if(s!==0){e=C.a([],a8)
e.push(new C.iN(i9))
w.push(new C.z(new C.aF(a5.r,D.ag,j1,j1,e),s))}}},
aw(d){return!0}}
A.cCx.prototype={}
A.FZ.prototype={}
A.ave.prototype={
T(){return new A.brs(new A.bUf(C.a([],x.a6)),new C.ez(0,$.aw()),D.bF,D.I,null,null)}}
A.brs.prototype={
Z(){var w,v=this
v.a2()
A.hBt()
w=v.qO(new A.f_e(v))
w.h2(0)
v.d!==$&&C.aP()
v.d=w},
q(){var w=this.d
w===$&&C.c()
w.q()
w=this.f
w.S$=$.aw()
w.P$=0
this.byb()},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.a,l=m.as==null,k=l?n:new A.f_8(o)
l=l?n:new A.f_9(o,d)
w=m.c
v=m.d
u=m.e
t=m.r
s=o.f
r=m.w
m=m.x
q=C.a([v,s],x.dS)
p=o.a
q=C.a([C.jF(new C.ex(C.b4(n,n,n,new A.b63(w,v,o.e,u,t,s,r,m,p.y,p.Q,new C.h5(q)),D.fF),n),D.t,n)],x.p)
o.a.toString
return C.nK(D.jA,C.aB(D.c8,new C.an(D.a_,n,D.b1,D.t,q,n),D.y,!1,n,l,k,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new A.f_a(o),new A.f_b(o),n,n,n,n,n,n,n,new A.f_c(o),n,n,n,!1,D.a4),n,n,n,n,n,n,new A.f_d(o),n)}}
A.PN.prototype={
rU(d,e,f){var w,v,u,t,s,r=this
r.b.push(e)
r.c.push(f)
for(w=e.a,v=w.length,u=0;u<v;++u){t=w[u]
s=t.a
if(s<r.d)r.d=s
if(s>r.e)r.e=s
s=t.b
if(s<r.f)r.f=s
if(s>r.r)r.r=s
s=t.c
if(s<r.w)r.w=s
if(s>r.x)r.x=s}}}
A.cKu.prototype={}
A.aNy.prototype={
q(){var w=this,v=w.aa$
if(v!=null)v.a6(0,w.gbE())
w.aa$=null
w.a1()},
aW(){this.b6()
this.b4()
this.bF()}}
A.bbL.prototype={}
A.bc5.prototype={}
A.bhb.prototype={}
A.dor.prototype={}
A.Mz.prototype={
Pw(d){return this.co8(d)},
co8(e4){var w=0,v=C.j(x.H),u=this,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1,e2,e3
var $async$Pw=C.e(function(e6,e7){if(e6===1)return C.f(e7,v)
for(;;)switch(w){case 0:if(e4.getUint32(0,!0)!==1179937895)throw C.W("not a glb file")
for(n=x.b,m=12,l=null,k=null;m+8<=e4.byteLength;){j=e4.getUint32(m,!0)
i=e4.getUint32(m+4,!0)
h=J.eG(D.dH.gaR(e4),e4.byteOffset+m+8,j)
if(i===1313821514)l=n.a(D.X.aN(0,new C.Gk(!1).DH(h,0,null,!0),null))
if(i===5130562)k=h
m+=8+j}if(l==null||k==null)throw C.W("empty glb")
g=new A.diD(l,k)
f=J.a5(l)
e=x.j
d=J.kI(e.a(f.h(l,"nodes")),n)
n=d.a
a0=J.a5(n)
a1=a0.gL(n)
a2=x.S
u.b=C.c3(a1,-1,!1,a2)
a3=C.a([],x.s)
for(a4=d.$ti,a5=a4.k("bR<c_.E>"),a6=new C.bR(d,d.gL(0),a5),a7=a4.k("c_.E");a6.C();){a8=a6.d
a8=C.aU(J.r(a8==null?a7.a(a8):a8,"name"))
if(a8==null)a8=""
a3.push(a8.toLowerCase())}u.c=a3
u.d=D.d.bg(a3,new A.bT1())
a3=x.gL
a6=C.a([],a3)
for(a5=new C.bR(d,d.gL(0),a5),a8=x.U,a9=x.t;a5.C();){b0=a5.d
if(b0==null)b0=a7.a(b0)
b1=C.a([],a9)
b0=a8.a(J.r(b0,"children"))
b0=J.aW(b0==null?D.cv:b0)
while(b0.C())b1.push(D.k.N(C.e5(b0.gR(b0))))
a6.push(b1)}u.f=a6
for(a5=u.b,b2=0;b2<a1;++b2)for(a7=a6[b2],b0=a7.length,b3=0;b3<b0;++b3)a5[a7[b3]]=b2
a5=C.a([],a9)
a6=e.a(f.h(l,"scenes"))
a7=C.aK(f.h(l,"scene"))
a7=a7==null?null:D.k.N(a7)
a6=J.aW(e.a(J.r(J.r(a6,a7==null?0:a7),"nodes")))
while(a6.C())a5.push(D.k.N(C.e5(a6.gR(a6))))
u.r=a5
a5=a1*3
u.w=new Float64Array(a5)
u.x=new Float64Array(a1*4)
u.y=new Float64Array(a5)
for(a5=x.Y,a4=a4.y[1],b2=0;b2<a1;++b2){b4=a4.a(a0.h(n,b2))
a6=J.a5(b4)
a7=a8.a(a6.h(b4,"translation"))
b5=a7==null?null:J.kI(a7,a5)
if(b5==null)b5=G.ar8
a7=a8.a(a6.h(b4,"rotation"))
b6=a7==null?null:J.kI(a7,a5)
if(b6==null)b6=B.c5n
a6=a8.a(a6.h(b4,"scale"))
b7=a6==null?null:J.kI(a6,a5)
if(b7==null)b7=B.cio
for(a6=b2*3,a7=J.a5(b5),b0=J.a5(b7),b8=0;b8<3;++b8){b1=u.w
b9=a6+b8
c0=a7.h(b5,b8)
b1.$flags&2&&C.aj(b1)
b1[b9]=c0
c0=u.y
b1=b0.h(b7,b8)
c0.$flags&2&&C.aj(c0)
c0[b9]=b1}for(a6=b2*4,a7=J.a5(b6),b8=0;b8<4;++b8){b0=u.x
b1=a7.h(b6,b8)
b0.$flags&2&&C.aj(b0)
b0[a6+b8]=b1}}u.Q=C.a([],a3)
u.as=C.a([],x.dh)
n=a8.a(f.h(l,"skins"))
n=J.aW(n==null?D.cv:n)
while(n.C()){b7=n.gR(n)
a0=C.a([],a9)
for(a3=J.a5(b7),a4=J.aW(e.a(a3.h(b7,"joints")));a4.C();)a0.push(D.k.N(C.e5(a4.gR(a4))))
u.Q.push(a0)
c1=a3.h(b7,"inverseBindMatrices")!=null?g.Fy(D.k.N(C.e5(a3.h(b7,"inverseBindMatrices")))).a:null
a3=u.as
a3.push(c1==null?A.hEz(a0.length):c1)}n=a8.a(f.h(l,"animations"))
n=J.aW(n==null?D.cv:n)
a0=u.z
a3=x.G
a4=x.gR
while(n.C()){c2=n.gR(n)
c3=C.a([],a4)
a5=J.a5(c2)
c4=e.a(a5.h(c2,"samplers"))
for(a6=J.aW(e.a(a5.h(c2,"channels"))),a7=J.a5(c4),c5=0;a6.C();){c6=a6.gR(a6)
a9=J.a5(c6)
c7=a3.a(a9.h(c6,"target"))
b0=J.a5(c7)
b1=C.aK(b0.h(c7,"node"))
c8=b1==null?null:D.k.N(b1)
c9=b0.h(c7,"path")
A:{if("translation"===c9){b0=0
break A}if("rotation"===c9){b0=1
break A}if("scale"===c9){b0=2
break A}b0=-1
break A}if(c8==null||b0<0)continue
b7=a3.a(a7.h(c4,D.k.N(C.e5(a9.h(c6,"sampler")))))
a9=J.a5(b7)
d0=g.Fy(D.k.N(C.e5(a9.h(b7,"input")))).a
d1=g.Fy(D.k.N(C.e5(a9.h(b7,"output")))).a
d2=a9.h(b7,"interpolation")
if(d2==null)d2="LINEAR"
d3=b0===1?4:3
a9=J.la(d2)
if(a9.A(d2,"CUBICSPLINE")){b1=d0.length
d4=new Float64Array(b1*d3)
for(b2=0;b2<b1;++b2)for(b9=b2*d3,c0=(b2*3+1)*d3,b8=0;b8<d3;++b8)d4[b9+b8]=d1[c0+b8]
d1=d4}if(!D.ou.gan(d0)){b1=d0.length
if(b1===0)C.b8(C.fs())
c5=Math.max(c5,d0[b1-1])}c3.push(new A.bbL(c8,b0,d0,d1,a9.A(d2,"STEP")))}d5=C.aU(a5.h(c2,"name"))
if(d5==null)d5="clip"+a0.a
a0.n(0,d5,new A.bc5(c5,c3))}t=C.U(a2,x.c9)
s=0
n=x.H
e="Could not read a picture of "+u.a+": "
case 2:a0=s
a2=a8.a(f.h(l,"images"))
a2=a2==null?null:J.ad(a2)
if(!(a0<(a2==null?0:a2))){w=3
break}r=g.cQD(s)
if(r==null){w=4
break}try{a0=r
d6=C.h5u(a0)
q=d6==null?null:d6.pO(0,a0,null)
if(q!=null){p=q.cJb(D.c7,4)
a0=s
a2=p.a
a2=a2==null?null:a2.a
if(a2==null)a2=0
a3=p.a
a3=a3==null?null:a3.b
if(a3==null)a3=0
d7=p
a4=d7.gqY()
d8=4!==a4?d7.cJa(null,4):d7
a4=d8.a
a4=a4==null?null:a4.bmQ(d8!==d7,D.Lm)
if(a4==null){a4=d7.a
a4=a4==null?null:J.eR(a4.gaR(a4))
if(a4==null){a4=d7.a
a4=a4==null?null:a4.gaR(a4)
if(a4==null)a4=D.aG.gaR(new Uint8Array(0))
a4=J.eR(a4)}}J.aI(t,a0,new A.bhb(a2,a3,new Uint8Array(C.ck(a4))))}}catch(e5){o=C.ab(e5)
$.am.$1(e+C.w(o))}w=5
return C.b(C.bP(D.bF,null,n),$async$Pw)
case 5:case 4:++s
w=2
break
case 3:e0=u.bRZ(l,g,d,t)
w=6
return C.b(C.bP(D.bF,null,n),$async$Pw)
case 6:u.at=u.b8l(e0,5000)
w=7
return C.b(C.bP(D.bF,null,n),$async$Pw)
case 7:u.ax=u.b8l(e0,1800)
n=u.at
n.r=u.b3A(n)
n=u.ax
n.r=u.b3A(n)
e1=u.aza(null,0)
e2=u.b6s(u.at,e1)
for(n=e2.length,e3=1/0,s=1;s<n;s+=3)e3=Math.min(e3,e2[s])
u.ay=isFinite(e3)?e3:0
return C.h(null,v)}})
return C.i($async$Pw,v)},
cpy(d){var w,v,u
for(w=d;w>=0;){v=this.c
v===$&&C.c()
u=v[w]
if(!C.cT(u,"head",0))v=C.cT(u,"neck",0)
else v=!0
if(v)return 0
if(!C.cT(u,"leftshoulder",0))v=C.cT(u,"leftarm",0)
else v=!0
if(v)return 1
if(!C.cT(u,"rightshoulder",0))v=C.cT(u,"rightarm",0)
else v=!0
if(v)return 2
v=!0
if(!C.cT(u,"leftupleg",0))if(!C.cT(u,"leftleg",0))v=C.cT(u,"leftfoot",0)
if(v)return 3
v=!0
if(!C.cT(u,"rightupleg",0))if(!C.cT(u,"rightleg",0))v=C.cT(u,"rightfoot",0)
if(v)return 4
v=this.b
v===$&&C.c()
w=v[w]}return 5},
b3A(d){var w,v,u,t,s,r,q,p,o,n,m=d.a.length/3|0,l=new Uint8Array(m)
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
l[t]=o<n.length?this.cpy(n[o]):5}return l},
bRZ(e9,f0,f1,f2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1,e2=null,e3="POSITION",e4="JOINTS_0",e5="WEIGHTS_0",e6=J.a5(e9),e7=x.U,e8=e7.a(e6.h(e9,"materials"))
if(e8==null)e8=D.cv
w=x.b
v=J.kI(e8,w)
e8=e7.a(e6.h(e9,"textures"))
u=J.kI(e8==null?D.cv:e8,w)
e8=x.j
t=J.kI(e8.a(e6.h(e9,"meshes")),w)
e6=x.n
s=C.a([],e6)
r=x.t
q=C.a([],r)
p=C.a([],e6)
o=C.a([],r)
n=C.a([],r)
m=C.a([],r)
for(e6=f1.a,r=J.a5(e6),l=t.a,k=J.a5(l),j=t.$ti.y[1],i=x.N,h=x.A,g=x.fF,f=x.Y,e=x.G,d=v.a,a0=J.a5(d),a1=v.$ti.y[1],a2=u.a,a3=J.a5(a2),a4=u.$ti.y[1],a5=this.ch,a6=f1.$ti.y[1],a7=0;a7<r.gL(e6);++a7){a8=a6.a(r.h(e6,a7))
a9=J.a5(a8)
b0=C.aK(a9.h(a8,"mesh"))
b1=b0==null?e2:D.k.N(b0)
if(b1==null)continue
a9=C.aK(a9.h(a8,"skin"))
b2=a9==null?e2:D.k.N(a9)
for(a9=J.kI(e8.a(J.r(j.a(k.h(l,b1)),"primitives")),w),b0=a9.$ti,a9=new C.bR(a9,a9.gL(0),b0.k("bR<c_.E>")),b3=b2==null,b0=b0.k("c_.E");a9.C();){b4=a9.d
if(b4==null)b4=b0.a(b4)
b5=J.a5(b4)
b6=J.Hb(e.a(b5.h(b4,"attributes")),i,h)
if(b6.h(0,e3)==null||b5.h(b4,"indices")==null)continue
b7=f0.Fy(D.k.N(C.e5(b6.h(0,e3)))).a
b8=b7.length/3|0
b9=b6.h(0,e4)!=null?f0.Fy(D.k.N(C.e5(b6.h(0,e4)))).a:e2
c0=b6.h(0,e5)!=null?f0.Fy(D.k.N(C.e5(b6.h(0,e5)))).a:e2
c1=C.aK(b5.h(b4,"material"))
c2=c1==null?e2:D.k.N(c1)
c1=g.a(J.r(c2!=null?a1.a(a0.h(d,c2)):D.cA,"pbrMetallicRoughness"))
c3=c1==null?e2:J.Hb(c1,i,h)
if(c3==null)c3=D.cA
c1=e7.a(c3.h(0,"baseColorFactor"))
c4=c1==null?e2:J.kI(c1,f)
if(c4==null)c4=B.cip
c1=g.a(c3.h(0,"baseColorTexture"))
c5=c1==null?e2:J.Hb(c1,i,h)
c1=c5==null
c6=C.aK(c1?e2:c5.h(0,"texCoord"))
c7=c6==null?e2:D.k.N(c6)
c8=b6.h(0,"TEXCOORD_"+(c7==null?0:c7))
c9=c8!=null?f0.Fy(D.k.N(C.e5(c8))).a:e2
if(!c1){c1=C.aK(J.r(a4.a(a3.h(a2,D.k.N(C.e5(c5.h(0,"index"))))),"source"))
d0=c1==null?e2:D.k.N(c1)
d1=d0!=null?f2.h(0,d0):e2}else d1=e2
d2=s.length/3|0
D.d.v(s,b7)
for(c1=c0!=null,c6=b9!=null,d3=0;d3<b8;++d3){o.push(b3?255:b2)
for(d4=d3*4,d5=0;d5<4;++d5){q.push(c6?D.k.N(b9[d4+d5]):0)
if(c1)d6=c0[d4+d5]
else d6=d5===0?1:0
p.push(d6)}}d7=f0.Fy(D.k.N(C.e5(b5.h(b4,"indices")))).a
for(b4=d7.length,d8=0;b5=d8+2,b5<b4;d8+=3){d9=D.k.N(d7[d8])
e0=D.k.N(d7[d8+1])
e1=D.k.N(d7[b5])
n.push(d2+d9)
n.push(d2+e0)
n.push(d2+e1)
m.push(this.bQ5(d1,c9,d9,e0,e1,c4))}if(b3)a5.push(new C.bk(d2,b8,a7))}}return new A.dtZ(new Float64Array(C.ck(s)),new Uint16Array(C.ck(q)),new Float64Array(C.ck(p)),new Uint8Array(C.ck(o)),new Int32Array(C.ck(n)),new Int32Array(C.ck(m)))},
bQ5(d,e,f,g,h,i){var w,v,u,t,s,r,q,p=J.a5(i),o=p.h(i,0),n=p.h(i,1),m=p.h(i,2)
if(d!=null&&e!=null){w={}
p=f*2
v=g*2
u=h*2
t=(e[p]+e[v]+e[u])/3
s=(e[p+1]+e[v+1]+e[u+1])/3
r=w.a=w.b=w.c=0
q=new A.bSW(w,d)
q.$2(t,s)
for(p=[f,g,h];r<3;++r){v=p[r]*2
q.$2((t+e[v])/2,(s+e[v+1])/2)}o*=w.c/4/255
n*=w.b/4/255
m*=w.a/4/255}p=new A.bSV()
return(p.$1(o)<<16|p.$1(n)<<8|p.$1(m)|4278190080)>>>0},
b8l(d7,d8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4={},d5=d7.a,d6=d5.length/3|0
d4.a=d4.b=d4.c=1/0
d4.d=d4.e=-1/0
for(w=-1/0,v=0,u=1/0,t=1/0,s=1/0,r=-1/0,q=-1/0;v<d6;++v,q=i,r=k,s=h,t=j,u=l){p=v*3
o=d5[p]
n=d5[p+1]
m=d5[p+2]
l=Math.min(u,o)
d4.c=l
k=Math.max(r,o)
d4.e=k
j=Math.min(t,n)
d4.b=j
i=Math.max(q,n)
d4.d=i
h=Math.min(s,m)
d4.a=h
w=Math.max(w,m)}g=Math.max(r-u,Math.max(q-t,w-s))
f=new A.bT3(d4,d6,d7)
e=new A.bT5(d7)
d=g/400
a0=g/8
u=x.t
a1=C.a([0],u)
a2=f.$2(a0,a1)
for(v=0;v<9;++v){a3=(d+a0)/2
a4=f.$2(a3,a1)
if(e.$1(a4)>d8)d=a3
else{a2=a4
a0=a3}}for(t=a2.length,a5=0,a6=0;a6<t;++a6)a5=Math.max(a5,a2[a6]+1)
a7=new Float64Array(a5)
a8=new Float64Array(a5)
a9=new Float64Array(a5)
b0=new Int32Array(a5)
for(v=0;v<d6;++v){b1=a2[v]
t=v*3
a7[b1]=a7[b1]+d5[t]
a8[b1]=a8[b1]+d5[t+1]
a9[b1]=a9[b1]+d5[t+2]
b0[b1]=b0[b1]+1}b2=new Int32Array(a5)
D.jX.hv(b2,0,a5,-1)
b3=new Float64Array(a5)
D.ou.hv(b3,0,a5,1/0)
for(v=0;v<d6;++v){b1=a2[v]
t=v*3
s=d5[t]
r=a7[b1]
q=b0[b1]
b4=s-r/q
b5=d5[t+1]-a8[b1]/q
b6=d5[t+2]-a9[b1]/q
b7=b4*b4+b5*b5+b6*b6
if(b7<b3[b1]){b3[b1]=b7
b2[b1]=v}}b8=C.a([],u)
u=x.S
b9=C.U(u,x.dg)
c0=C.U(u,u)
for(u=d7.e,t=u.length,s=d7.f,r=x.n,c1=0;c1<t;c1+=3){c2=a2[u[c1]]
c3=a2[u[c1+1]]
b1=a2[u[c1+2]]
if(c2===c3||c3===b1||c2===b1)continue
c4=A.hc6(c2,c3,b1)
c5=s[D.o.ao(c1,3)]
c6=b9.h(0,c4)
q=c5&255
if(c6==null){b9.n(0,c4,C.a([D.o.aD(c5,16)&255,D.o.aD(c5,8)&255,q,1],r))
c0.n(0,c4,b8.length/3|0)
b8.push(c2)
b8.push(c3)
b8.push(b1)}else{c6[0]=c6[0]+(D.o.aD(c5,16)&255)
c6[1]=c6[1]+(D.o.aD(c5,8)&255)
c6[2]=c6[2]+q
c6[3]=c6[3]+1}}u=b8.length
c7=new Int32Array(u/3|0)
b9.bQ(0,new A.bT2(c7,c0))
c8=new Float64Array(a5*3)
u=a5*4
c9=new Uint16Array(u)
d0=new Float64Array(u)
d1=new Uint8Array(a5)
for(u=d7.d,t=d7.b,s=d7.c,b1=0;b1<a5;++b1){d2=b2[b1]
for(r=b1*3,q=d2*3,c4=0;c4<3;++c4)c8[r+c4]=d5[q+c4]
for(r=b1*4,q=d2*4,c4=0;c4<4;++c4){p=r+c4
d3=q+c4
c9[p]=t[d3]
d0[p]=s[d3]}d1[b1]=u[d2]}return new A.dor(c8,c9,d0,d1,new Int32Array(C.ck(b8)),c7)},
aza(a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=d.b
a0===$&&C.c()
w=d.w
w===$&&C.c()
v=new Float64Array(C.ck(w))
w=d.x
w===$&&C.c()
u=new Float64Array(C.ck(w))
w=d.y
w===$&&C.c()
t=new Float64Array(C.ck(w))
s=a1==null?null:d.z.h(0,a1)
if(s!=null&&s.b>0){w=s.b
r=a2-Math.floor(a2/w)*w
for(w=s.c,q=w.length,p=0;p<w.length;w.length===q||(0,C.M)(w),++p){o=w[p]
n=o.b
if(n===0)n=v
else n=n===1?u:t
A.hEA(o,r,n)}}m=d.CW.c3(0,"world",new A.bT_(a0.length))
l=new A.bT0(d,v,u,t,new Float64Array(16),m)
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
A.hc7(m,w*16,q[h],f*16,j,i)
i+=16}}for(w=a0.length,p=0;p<a0.length;a0.length===w||(0,C.M)(a0),++p,i=e){e=i+16
D.ou.em(j,i,e,m,a0[p].c*16)}return j},
b6s(b8,b9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=b8.a,b4=b3.length/3|0,b5=new Float64Array(b4*3),b6=C.a([],x.t),b7=this.Q
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
cIA(d,e){var w,v,u=new A.bT8(this)
if(d){w=u.$1("run")
v=w==null?u.$1("walk"):w}else if(e){w=u.$1("walk")
v=w}else{w=u.$1("idle")
if(w==null)w=u.$1("samba")
v=w}if(v!=null)return v
u=u.$1("samba")
if(u==null){u=this.z
u=new C.cv(u,C.a6(u).k("cv<1>")).dK(0,new A.bT6(),new A.bT7(this))}return u},
cVM(b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=this,b4="world",b5={}
if(b6){w=b3.at
w===$&&C.c()
v=w}else{w=b3.ax
w===$&&C.c()
v=w}u=b3.cIA(c0,c5)
w=b3.z.h(0,u)
t=w==null?null:w.b
if(t==null)t=1
if(c5&&c4!=null&&D.a.t(u.toLowerCase(),"walk"))s=c4/50*t
else{w=B.dy4.h(0,b3.a)
s=c2*(w==null?1:w)}w=b3.e
r=w.h(0,u)
if(r==null){b3.aza(u,0)
if(b3.d>=0){q=b3.CW
r=new C.z(q.h(0,b4)[b3.d*16+12],q.h(0,b4)[b3.d*16+14])}else r=D.zV
w.n(0,u,r)}p=b3.aza(u,s)
b5.a=b5.b=0
if(b3.d>=0){w=b3.CW
b5.b=w.h(0,b4)[b3.d*16+12]-r.a
b5.a=w.h(0,b4)[b3.d*16+14]-r.b}o=b3.b6s(v,p)
w=b3.a
q=B.dyG.h(0,w)
n=c7+(q==null?0:q)
m=C.im(v.a.length/3|0,new A.bTb(b5,b3,o,36,b8,Math.cos(n),Math.sin(n),c6,c8),!0,x.Q)
q=C.a([],x.t)
for(l=0;l<6;++l){k=$.dS+1
$.dS=k
q.push(k)}j=C.a([],x.z)
for(k=v.e,i=k.length,h=v.f,g=x.o,f=c3!=null,e=c1!=null,d=b9!=null,a0=0;a0<i;a0+=3){a1=m[k[a0]]
a2=m[k[a0+1]]
a3=m[k[a0+2]]
a4=a1.a
a5=a2.b
a6=a1.b
a7=a1.c
a8=a3.b
a9=new A.q(a2.a-a4,a5-a6,a2.c-a7).FW(new A.q(a3.a-a4,a8-a6,a3.c-a7)).gmQ(0)
a7=v.r
a7===$&&C.c()
b0=a7[k[a0]]
b1=(a6+a5+a8)/3
if(f&&e&&d){if(b0!==0)a4=(b0===1||b0===2)&&b1<40
else a4=!0
if(a4)b2=c1
else{a4=!0
if(b0!==3)if(b0!==4)a4=b0===5&&b1<33
b2=a4?b9:c3}}else b2=c3
a4=C.a([a1,a2,a3],g)
a5=b2==null?C.b1(h[D.o.ao(a0,3)]):A.i3Z(h[D.o.ao(a0,3)],b2)
j.push(new A.kn(a4,a9,a5,b7,0.08,1,!1,0,0,2,q[b0]))}if(e&&f&&w!=="michelle")D.d.v(j,b3.bQ6(v,m,n,c1,b7,q[0]))
return j},
bQ6(a6,a7,a8,a9,b0,b1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5={}
for(w=a6.a.length/3|0,v=a6.r,u=-1e9,t=1e9,s=0;s<w;++s){v===$&&C.c()
if(v[s]!==0)continue
r=a7[s].b
if(r>u)u=r
if(r<t)t=r}if(u<t)return B.HZ
q=Math.cos(a8)
p=Math.sin(a8)
o=new A.q(p,0,q)
v=-p
n=Math.max(t,u-(u-t)*0.75)
for(m=a6.r,l=0,k=0,j=0,s=0;s<w;++s){m===$&&C.c()
if(m[s]!==0||a7[s].b<n)continue
i=a7[s]
l+=i.a
k+=i.c;++j}if(j===0)return B.HZ
m=l/j
i=k/j
a5.a=0
for(h=0,s=0;s<w;++s){g=a6.r
g===$&&C.c()
if(g[s]!==0||a7[s].b<n)continue
g=a7[s]
f=g.a-m
g=g.c-i
a5.a=Math.max(a5.a,f*p+0+g*q)
h=Math.max(h,Math.abs(f*q+0+g*v))}e=h<=0?(u-n)/2:h
d=new A.bSX(a5,new A.q(m,(u+n)/2,i),o,new A.q(q,0,v),e,new A.q(0,1,0))
w=C.ar(a9,B.biQ,0.88)
w.toString
v=C.ar(a9,D.w,0.25)
v.toString
m=C.ar(a9,B.bgC,0.6)
m.toString
a0=C.a([],x.z)
a1=new A.bSZ(a0,o,b0,b1)
a2=new A.bSY(a1,d)
for(a3=0;a3<2;++a3){a4=F.hx[a3]
i=a4*0.34
a2.$6(i,0.08,0.2,0.11,D.c,1.2)
a2.$6(i,0.08,0.085,0.085,w,1.6)
g=i-0.22
i+=0.22
f=0.04*a4
a1.$6(d.$2(g,0.33),d.$2(i,0.31+f),d.$2(i,0.25+f),d.$2(g,0.27),w,1.2)}a0.push(new A.kn(C.a([d.$2(0,0.12),d.$2(-0.1,-0.22),d.$2(0.1,-0.22)],x.o),o,v,b0,0,1,!1,0,1.2,2,b1))
a1.$6(d.$2(-0.2,-0.46),d.$2(0.2,-0.46),d.$2(0.17,-0.53),d.$2(-0.17,-0.53),m,1.2)
a1.$6(d.$2(-0.2,-0.46),d.$2(0.2,-0.46),d.$2(0.2,-0.485),d.$2(-0.2,-0.485),w,1.5)
return a0}}
A.dtZ.prototype={}
A.diD.prototype={
cQD(d){var w,v,u=this.a,t=J.a5(u),s=x.j,r=x.G,q=C.aK(J.r(r.a(J.r(s.a(t.h(u,"images")),d)),"bufferView")),p=q==null?null:D.k.N(q)
if(p==null)return null
w=r.a(J.r(s.a(t.h(u,"bufferViews")),p))
u=J.a5(w)
t=C.aK(u.h(w,"byteOffset"))
v=t==null?null:D.k.N(t)
if(v==null)v=0
return C.yh(this.b,v,v+D.k.N(C.e5(u.h(w,"byteLength"))))},
Fy(a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=null,g="byteOffset",f=this.a,e=J.a5(f),d=x.j,a0=x.G,a1=a0.a(J.r(d.a(e.h(f,"accessors")),a5)),a2=J.a5(a1),a3=D.k.N(C.e5(a2.h(a1,"count"))),a4=a2.h(a1,"type")
A:{w=1
if("SCALAR"===a4)break A
if("VEC2"===a4){w=2
break A}if("VEC3"===a4){w=3
break A}if("VEC4"===a4){w=4
break A}if("MAT2"===a4){w=4
break A}if("MAT3"===a4){w=9
break A}if("MAT4"===a4){w=16
break A}break A}v=D.k.N(C.e5(a2.h(a1,"componentType")))
B:{if(5120===v||5121===v){u=1
break B}if(5122===v||5123===v){u=2
break B}u=4
break B}t=J.A(a2.h(a1,"normalized"),!0)
s=new Float64Array(a3*w)
r=C.aK(a2.h(a1,"bufferView"))
q=r==null?h:D.k.N(r)
if(q==null)return new C.z(s,w)
p=a0.a(J.r(d.a(e.h(f,"bufferViews")),q))
f=J.a5(p)
e=C.aK(f.h(p,g))
e=e==null?h:D.k.N(e)
if(e==null)e=0
a2=C.aK(a2.h(a1,g))
d=a2==null?h:D.k.N(a2)
o=e+(d==null?0:d)
f=C.aK(f.h(p,"byteStride"))
n=f==null?h:D.k.N(f)
if(n==null)n=w*u
m=C.aT_(this.b)
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
A.lD.prototype={}
A.r6.prototype={
gDq(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=1e9,d=-1e9,a0=this.w,a1=a0.length
if(a1===0){a0=this.e
return new C.cw([-a0/2,a0/2,-12,0])}for(w=this.e,v=-w,u=d,t=e,s=u,r=t,q=0;q<a1;++q){p=a0[q]
for(o=p.e,o=[v*o/2,w*o/2],n=p.c,m=p.a,l=p.b,k=0;k<2;++k){j=o[k]
for(i=[-12,0],h=0;h<2;++h){g=A.vw(new A.q(j,0,i[h]),n)
f=g.a+m
r=Math.min(r,f)
s=Math.max(s,f)
f=g.c+l
t=Math.min(t,f)
u=Math.max(u,f)}}}return new C.cw([r,s,t,u])},
gaoZ(){return this.gDq().a[1]-this.gDq().a[0]},
gGO(){var w=this.w
return w.length===0?this.f:new C.N(w,new A.bHj(this),C.T(w).k("N<1,K>")).fb(0,D.pG)},
gbdM(){return this.gDq().a[3]-this.gDq().a[2]},
ga4j(d){return this.w.length===0?0:(this.gDq().a[0]+this.gDq().a[1])/2},
ga4k(){return this.w.length===0?0:(this.gDq().a[2]+this.gDq().a[3])/2},
geg(d){var w=this
return Math.max(Math.max(w.gaoZ(),w.gbdM()),Math.max(w.gGO()*1.3,w.x))*w.y}}
A.Hm.prototype={}
A.aSH.prototype={
bj9(){var w=this
w.a=!0
w.b="NEW GLOBAL MOVEMENT FOR YOUTH"
w.c="Videos, slides, blogs and books."
w.d="ngmy.org"
w.e=0
w.x=w.w=w.r=w.f=null},
ag(){var w,v=this,u=C.U(x.N,x.A)
u.n(0,"custom",!v.a)
u.n(0,"headline",v.b)
u.n(0,"subtitle",v.c)
u.n(0,"footer",v.d)
u.n(0,"scheme",v.e)
w=v.f
if(w!=null)u.n(0,"logo",D.cJ.gct().aM(w))
w=v.r
if(w!=null)u.n(0,"pic",D.cJ.gct().aM(w))
return u},
TQ(d){var w,v=this,u=J.a5(d)
v.a=!J.A(u.h(d,"custom"),!0)
w=C.aU(u.h(d,"headline"))
v.b=w==null?"NEW GLOBAL MOVEMENT FOR YOUTH":w
w=C.aU(u.h(d,"subtitle"))
v.c=w==null?"Videos, slides, blogs and books.":w
w=C.aU(u.h(d,"footer"))
v.d=w==null?"ngmy.org":w
w=C.aK(u.h(d,"scheme"))
w=w==null?null:D.k.N(w)
v.e=D.o.E(w==null?0:w,0,5)
v.f=typeof u.h(d,"logo")=="string"?D.cF.aM(C.cP(u.h(d,"logo"))):null
v.r=typeof u.h(d,"pic")=="string"?D.cF.aM(C.cP(u.h(d,"pic"))):null}}
A.bHh.prototype={
cXv(){var w,v,u
for(w=this.b,v=w.length,u=0;u<w.length;w.length===v||(0,C.M)(w),++u)w[u].bj9()},
ag(){var w,v,u,t=this.a,s=C.a([],x.c7)
for(w=this.b,v=w.length,u=0;u<w.length;w.length===v||(0,C.M)(w),++u)s.push(w[u].ag())
return C.G(["template",t,"signs",s],x.N,x.A)},
TQ(d){var w,v,u,t,s,r,q
this.a=D.d.b3(B.a3l,new A.bHi(d))?C.cP(J.r(d,"template")):"highway"
w=J.r(d,"signs")
if(x.j.b(w)){v=J.a5(w)
u=x.G
t=this.b
s=x.N
r=x.A
q=0
for(;;){if(!(q<6&&q<v.gL(w)))break
if(u.b(v.h(w,q)))t[q].TQ(C.a2(u.a(v.h(w,q)),s,r));++q}}else this.b[0].TQ(d)}}
A.hn.prototype={}
A.aoy.prototype={
T(){var w=A.hB9()
$.x1()
return new A.aoz(w,new C.wo())}}
A.aoz.prototype={
gil(){var w,v=this.e
if(v===$){w=new A.xd(0.5,0.25,420,B.fW3,$.aw())
w.e=30
w.f=5000
w.w=0.02
w.x=1.4
w.r6(!0)
this.e!==$&&C.bG()
this.e=w
v=w}return v},
gaxf(){var w=this.r
return w===$?this.r=new A.a58(this.gc6k(),V.Bz):w},
gzw(){return D.d.fW(B.a3l,new A.c3i(this))},
Z(){var w=this
w.a2()
w.f=A.h57(w.gzw(),w.d)
w.abk()
A.hgI().bM(new A.c3g(w),x.P)
w.PA()},
q(){this.gaxf().bR(0)
var w=this.gil()
w.S$=$.aw()
w.P$=0
this.a1()},
abk(){var w=this.gzw(),v=this.gil(),u=w.ga4j(0),t=w.gGO(),s=w.ga4k()
v.Nl(w.geg(0)*1.9,0.22,new A.q(u,w.r+t/2,s),0.45)},
PA(){var w=0,v=C.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i
var $async$PA=C.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return C.b(C.az(),$async$PA)
case 7:q=e
p=C.aU(J.r(q.a,"ngmy_billboard_studio_v1"))
if(p==null){w=1
break}n=r.d
n.TQ(x.b.a(D.X.aN(0,p,null)))
n=n.b,m=n.length,l=0
case 8:if(!(l<n.length)){w=10
break}o=n[l]
i=o
w=11
return C.b(A.afO(o.f),$async$PA)
case 11:i.w=e
i=o
w=12
return C.b(A.afO(o.r),$async$PA)
case 12:i.x=e
case 9:n.length===m||(0,C.M)(n),++l
w=8
break
case 10:if(r.c==null){w=1
break}r.m(new A.c33(r))
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
return C.i($async$PA,v)},
IT(){var w=0,v=C.j(x.H),u=1,t=[],s=this,r,q,p
var $async$IT=C.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
w=6
return C.b(C.az(),$async$IT)
case 6:r=e
w=7
return C.b(r.ar("String","ngmy_billboard_studio_v1",D.X.ap(s.d.ag(),null)),$async$IT)
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
return C.i($async$IT,v)},
c6l(){var w,v,u,t,s,r,q,p=this
if(!(p.x>=0)||p.c==null)return
w=p.w.gi8()/1000
if(w>=30){p.aBq(!0)
return}v=A.i5g(p.gzw(),w)
u=v.b
t=u.aF(0,v.a)
s=Math.max(8,t.guT())
r=p.gil()
q=Math.atan2(t.a,-t.c)
r.Nl(s,Math.asin(D.k.E(-t.b/s,-1,1)),u,q)
p.m(new A.c39(p,w))},
bqx(){var w,v=this
v.gil().w=-1.4
w=v.w
w.ke(0)
w.h2(0)
v.m(new A.c3h(v))
v.gaxf().h2(0)},
aBq(d){var w,v=this
v.gaxf().bR(0)
w=v.w
if(w.b==null)w.b=$.OJ.$0()
v.gil().w=0.02
v.m(new A.c36(v,d))
v.abk()},
cyW(){return this.aBq(!1)},
cuT(d){var w=this
w.d.a=d
w.m(new A.c35(w))
w.abk()
w.IT()},
ZA(d){this.d.b[d].a=!1
this.m(new A.c2E())
this.IT()},
IS(d,e){return this.ckz(d,e)},
ckz(d,e){var w=0,v=C.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k
var $async$IS=C.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
m=e?400:900
w=7
return C.b(new C.hV().l_(85,m,D.eK),$async$IS)
case 7:q=g
if(q==null){w=1
break}w=8
return C.b(q.fk(),$async$IS)
case 8:p=g
w=9
return C.b(A.afO(p),$async$IS)
case 9:o=g
if(o==null){w=1
break}n=r.d.b[d]
if(e){n.f=p
n.w=o}else{n.r=p
n.x=o}r.ZA(d)
t=2
w=6
break
case 4:t=3
k=s.pop()
if(r.c!=null)r.m(new A.c34(r))
w=6
break
case 3:w=2
break
case 6:case 1:return C.h(u,v)
case 2:return C.f(s.at(-1),v)}})
return C.i($async$IS,v)},
cAZ(){var w=this.c
w.toString
C.bU(D.av,null,new A.c38(this),w,!0,!0,!0,D.k1,!1,!1,x.H)},
bOq(){var w,v,u,t,s,r,q=this,p={}
p.a=0
w=q.d.b[0]
v=w.b
u=$.aw()
t=new C.as(new C.bb(v,D.b3,D.aO),u)
v=w.c
s=new C.as(new C.bb(v,D.b3,D.aO),u)
w=w.d
r=new C.as(new C.bb(w,D.b3,D.aO),u)
w=q.c
w.toString
C.bU(D.av,null,new A.c31(p,q,new A.c32(p,q,t,s,r),t,s,r),w,!0,!0,!0,D.k1,!1,!1,x.H)},
axh(d,e,f,g){var w=null,v=g?f.j(0.3):D.w.j(0.6),u=C.m(20),t=C.J(f,D.r,1)
return C.aB(w,C.p(w,C.d(d,w,w,w,w,w,w,C.l(w,w,f,w,w,w,w,w,w,w,w,13,w,w,D.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),D.f,w,w,new C.o(v,w,t,u,w,w,D.n),w,w,w,w,D.iB,w,w,w),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,e,w,w,w,w,w,w,!1,D.a4)},
axg(d,e,f){return this.axh(d,e,f,!1)},
c6j(d,e,f){return this.axh(d,e,D.aQ,f)},
B(d){var w,v,u,t,s,r=this,q=null,p=C.aJ(d,q,x.w).w.r,o=r.f
o===$&&C.c()
w=x.p
o=C.a([C.bT(0,A.h1c(E.Bf,r.gil(),q,q,0,q,q,q,o,!0),0,0,0)],w)
if(!(r.x>=0))o.push(C.ao(q,C.B(C.a([C.aB(q,C.p(q,D.a2i,D.f,q,q,new C.o(D.w.j(0.55),q,C.J(D.bY,D.r,1),q,q,q,D.a6),q,40,q,q,q,q,q,40),D.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new A.c3c(d),q,q,q,q,q,q,!1,D.a4),D.at,C.E(C.d("Billboard studio \xb7 "+r.gzw().c,q,q,q,q,q,q,B.fek,q,q,q),1)],w),D.m,q,D.e,D.i,0,q,q),q,q,8,8,p.b+8,q))
if(r.x>=0&&r.y)o.push(C.bT(0,C.aB(D.c8,q,D.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new A.c3d(r),q,q,q,q,q,q,!1,D.a4),0,0,0))
if(!(r.x>=0&&r.y)){v=C.a([],w)
if(r.z.length!==0&&!(r.x>=0)){u=D.e_.j(0.95)
t=C.m(12)
s=C.J(D.bj,D.r,1)
v.push(C.p(q,C.d(r.z,q,q,q,q,q,q,D.Uz,q,q,q),D.f,q,q,new C.o(u,q,s,t,q,q,D.n),q,q,q,D.ct,D.bT,q,q,q))}w=C.a([],w)
if(!(r.x>=0))w.push(r.axg("\ud83e\udea7 Choose billboard",r.gcAY(),F.fz))
if(!(r.x>=0))w.push(r.axg("\u270f\ufe0f Edit",r.gbOp(),D.bj))
if(r.x>=0)w.push(r.axh("\u23f9 Stop the drone",r.gcyV(),D.cs,!0))
if(r.x>=0)w.push(r.axg("\ud83d\udc41 Hide everything",new A.c3e(r),D.aL))
if(!(r.x>=0))w.push(r.c6j("\ud83c\udfac 30 second drone shot",r.gbqw(),!0))
v.push(C.bW(D.fH,w,D.bq,q,8,8))
o.push(C.ao(p.d+12,C.x(v,D.m,q,D.e,D.Q,0,D.p),q,q,10,10,q,q))}return C.c7(q,D.w,new C.an(D.a_,q,D.ab,D.t,o,q),q,!1,!1,q,q)}}
A.FR.prototype={}
A.z8.prototype={}
A.xi.prototype={}
A.aTQ.prototype={}
A.a4h.prototype={}
A.akd.prototype={}
A.bLE.prototype={
byW(d,e){var w,v,u,t,s,r,q,p=this,o=x._,n=C.a([],o)
for(w=p.a.x,v=w.length,u=0;u<w.length;w.length===v||(0,C.M)(w),++u){t=w[u]
s=t.b
if(s==="house2"||s==="bighouse")n.push(t)}p.b!==$&&C.aP()
p.b=n
o=C.a([],o)
for(n=w.length,u=0;u<w.length;w.length===n||(0,C.M)(w),++u){t=w[u]
if(D.d.b3(B.QX,new A.bLG(t)))o.push(t)}p.c!==$&&C.aP()
p.c=o
for(o=p.f,r=0;r<5;++r){q=p.cnT()
n=B.dtZ[r]
w=B.did[r]
o.push(new A.aTQ(n,w,new A.tH(B.axb[r],B.M1,w,B.Lu,B.dnn[r],!1,0,1),58+r*7.5,q.a,q.b,B.azw))}p.UC(0)},
cnT(){var w,v=this.c
v===$&&C.c()
w=v.length
if(w===0)return B.esL
return A.yK(v[this.d.au(w)])},
cVY(d){var w,v,u,t,s,r,q,p=this,o=C.a([],x._),n=p.c
n===$&&C.c()
w=n.length
v=0
for(;v<n.length;n.length===w||(0,C.M)(n),++v){u=n[v]
t=u.b
if(t==="store"||t==="shop"||t==="gasstation")o.push(u)}if(o.length===0)return
D.d.aY(o,new A.bLI(p,d))
for(n=p.e,s=0,v=0;v<2;++v){r=B.dlN[v]
q=o[D.o.F(s,o.length)];++s;++p.r
w=new A.xi(r,q,d,r==="medicine"?30:24)
w.w=!0
D.d.c6(n,0,w)}},
UC(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=j.d,h=j.e,g=x._,f=C.T(h).k("Z<1>"),e=0
for(;;){if(new C.Z(h,new A.bLJ(),f).gL(0)<7){w=e+1
v=e<30
e=w}else v=!1
if(!v)break
u=B.QX[i.au(5)]
v=C.a([],g)
t=j.c
t===$&&C.c()
s=t.length
r=u.d
q=0
for(;q<t.length;t.length===s||(0,C.M)(t),++q){p=t[q]
if(r.t(0,p.b))v.push(p)}t=v.length
if(t!==0){s=j.b
s===$&&C.c()
s=s.length===0}else s=!0
if(s)return
o=v[i.au(t)]
v=j.b
v===$&&C.c()
n=v[i.au(v.length)]
m=A.yK(o)
l=A.yK(n)
k=Math.sqrt(Math.pow(m.a-l.a,2)+Math.pow(m.b-l.b,2));++j.r
h.push(new A.xi(u.a,o,n,6+D.o.E(D.k.V(k/70),0,22)))}},
cXY(d,e,f){if(this.x!=null||e.f!=null||!D.d.t(this.e,e))return!1
e.f=-1
e.x=f
this.x=e
return!0},
a4(d){var w=this.x
if(w==null)return
w.f=null
w.r=!1
this.x=null},
ga6L(d){var w=this.x
if(w==null)return null
return A.yK(w.r?w.d:w.c)},
bk6(d,e,f){var w,v,u,t,s,r,q,p=this,o=p.x
if(o==null)return null
if(f-o.x>360){p.a4(0)
return B.bu4}w=p.ga6L(0)
if(Math.sqrt(Math.pow(w.a-d,2)+Math.pow(w.b-e,2))>58)return null
if(!o.r){o.r=!0
v=o.b
u=A.L6(v)
v=A.L6(v)
t=B.hy.h(0,o.c.b).a
s=o.w?"hospital":"house"
return new A.akd("pickup",u.b+" You picked up the "+v.c.toLowerCase()+" at the "+t.toLowerCase()+". Now take it to the "+s+".",0)}D.d.W(p.e,o)
p.x=null;++p.z;++p.y
v=p.Q
u=o.e
p.Q=v+u
p.UC(f)
r=A.L6(o.b).b+" Delivered! +"+u+" points."
if(p.y>=8){p.Q+=40
r+=" You won the race with 8 deliveries: +40 points!"
p.aYE()
q=40}else q=0
v=q>0?"won":"delivered"
return new A.akd(v,r,u+q)},
aYE(){var w,v,u;++this.as
this.y=0
for(w=this.f,v=w.length,u=0;u<v;++u)w[u].r=0},
FE(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
for(w=j.f,v=w.length,u=j.e,t=e+2,s=j.d,r=x.C,q=null,p=0;p<w.length;w.length===v||(0,C.M)(w),++p){o=w[p]
n=o.ch
if(n===0){if(e<o.CW)continue
n=C.a([],r)
for(m=u.length,l=0;l<u.length;u.length===m||(0,C.M)(u),++l){k=u[l]
if(k.f==null)n.push(k)}if(n.length===0)continue
D.d.aY(n,new A.bLF(j,o))
k=n[Math.min(n.length-1,s.au(3))]
k.f=D.d.cu(w,o)
o.y=k
j.b7_(o,e,1,k.c)}else if(e>=o.Q){if(!o.db){o.e=o.ax
o.f=o.ay
o.db=!0
o.dx=e+(n===1?1.6:1.3)
continue}if(e<o.dx)continue
o.db=!1
m=o.y
m.toString
if(n===1)j.b7_(o,e,2,m.d)
else{D.d.W(u,m)
o.y=null
o.ch=0;++o.w;++o.r
o.x=o.x+m.e
o.CW=t+s.ah()*5
j.UC(e)
if(o.r>=8){q=o.a+" won the race with 8 deliveries! A new round starts."
j.aYE()}}}}return q},
aZr(d,e){return Math.sqrt(Math.pow(e.a-d.e,2)+Math.pow(e.b-d.f,2))},
b7_(d,e,f,g){var w,v,u,t=this,s=A.yK(g),r=B.hy.h(0,g.b),q=g.e*3.141592653589793/2,p=r.d/2-2,o=g.c+Math.sin(q)*p,n=g.d+Math.cos(q)*p
d.ch=f
d.ax=o
d.ay=n
w=t.w
if(w===$){v=new A.bJK(t.a)
v.aZs()
t.w!==$&&C.bG()
t.w=v
w=v}u=C.C(w.aoF(new C.z(d.e,d.f),s),x.J)
u.push(new C.z(o,n))
d.cx=u
o=A.ifJ(u)
d.cy=o
d.z=e
d.Q=e+Math.max(1,o/d.d)},
ame(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=C.a([],x.B)
for(w=this.f,v=w.length,u=d*2.2,t=0;t<w.length;w.length===v||(0,C.M)(w),++t){s=w[t]
r=s.e
q=s.f
if(s.db)continue
if(s.ch!==0&&d>=s.z&&s.cx.length>1){p=s.z
o=D.k.E((d-p)/Math.max(0.01,s.Q-p),0,1)
n=A.ifP(s.cx,s.cy*o)
r=n.a
q=n.b
m=n.c
l=o<1}else{m=0
l=!1}k.push(new A.a4h(r,q,m,u+s.d,l,s.ch===2,s.c,s.b))}return k},
cXW(){var w,v,u,t,s=C.a([new C.bk("You",this.y,this.Q)],x.aJ)
for(w=this.f,v=w.length,u=0;u<w.length;w.length===v||(0,C.M)(w),++u){t=w[u]
s.push(new C.bk(t.a,t.r,t.x))}D.d.aY(s,new A.bLK())
return s},
qZ(d,e,f){var w,v,u,t,s=C.a([],x.C)
for(w=this.e,v=w.length,u=0;u<w.length;w.length===v||(0,C.M)(w),++u){t=w[u]
if(t.f==null)s.push(t)}D.d.aY(s,new A.bLH(this,e,f))
return s},
aaj(d,e,f){return Math.sqrt(Math.pow(f.a-d,2)+Math.pow(f.b-e,2))}}
A.bJK.prototype={
aZv(d){return-this.a.gex(0)/2+8+d*24},
aZs(){var w,v,u,t,s=this,r=s.a
s.d=A.huC(r,null)
s.b=D.k.dg((r.gex(0)-16)/24)+1
w=D.k.dg((r.gho(0)-10- -750)/24)+1
s.c=w
s.e=C.c3(s.b*w,!1,!1,x.R)
for(v=0;v<s.b;++v)for(w=v*24,u=0;t=s.c,u<t;++u)s.e[v*t+u]=s.acb(-r.gex(0)/2+8+w,-750+u*24)
s.f=A.haE(r)},
acb(d,e){var w,v,u=this.a
if(d<-u.gex(0)/2+12||d>u.gex(0)/2-12||e<-756||e>u.gho(0)-14)return!0
u=this.d
u===$&&C.c()
w=u.length
v=0
for(;v<w;++v)if(u[v].aGl(d,e,14))return!0
return!1},
aZt(d,e,f){var w,v,u=e.a,t=f.a-u,s=e.b,r=f.b-s,q=Math.max(1,D.k.dg(Math.sqrt(Math.pow(t,2)+Math.pow(r,2))/8))
for(w=0;w<=q;++w){v=w/q
if(this.acb(u+t*v,s+r*v))return!1}return!0},
aZu(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=d.a,h=j.a,g=D.k.V((i+h.gex(0)/2-8)/24),f=j.b
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
k=Math.pow(-h.gex(0)/2+8+o*24-i,2)+Math.pow(-750+m*24-f,2)
if(k<p){q=new C.z(o,m)
p=k}}if(q!=null)return q}return null},
aoF(d,e){var w,v,u,t,s,r,q,p,o,n,m=this
if(A.haE(m.a)!==m.f)m.aZs()
w=m.aZu(d)
v=m.aZu(e)
if(w==null||v==null)return C.a([d,e],x.f)
u=new C.z(m.aZv(w.a),-750+w.b*24)
t=new C.z(m.aZv(v.a),-750+v.b*24)
s=x.f
r=m.acb(d.a,d.b)?C.a([d],s):C.a([],s)
q=m.acb(e.a,e.b)?C.a([e],s):C.a([],s)
p=C.a([],s)
o=r.length===0?d:u
n=q.length===0?e:t
if(m.aZt(0,o,n))D.d.v(p,C.a([o,n],s))
else D.d.v(p,m.ctG(w,v,o,n))
s=C.C(r,x.J)
D.d.v(s,p)
D.d.v(s,q)
return s},
ctG(a9,b0,b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this,a3=x.t,a4=C.a([],a3),a5=new A.dj5(a4,C.a([],x.n)),a6=x.S,a7=C.U(a6,a6),a8=C.U(a6,x.i)
a6=a9.a
w=a2.c
w===$&&C.c()
v=a9.b
u=a6*w+v
t=b0.a
s=b0.b
r=t*w+s
a8.n(0,u,0)
a5.ao9(u,a2.c6Q(a6,v,b0))
p=0
for(;;){if(a4.length!==0){o=p+1
a6=p<4e4
p=o}else a6=!1
if(!a6){q=!1
break}n=a5.eM()
if(n===r){q=!0
break}a6=a2.c
m=D.o.eb(n,a6)
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
a5.ao9(e,d+Math.sqrt(Math.pow(v,2)+Math.pow(h-s,2)))}}}if(!q)return C.a([b1,b2],x.f)
a0=C.a([r],a3)
while(a7.aj(0,D.d.gak(a0))){a3=a7.h(0,D.d.gak(a0))
a3.toString
a0.push(a3)}a3=x.f
a4=C.a([b1],a3)
for(a6=x.c5,w=new C.dw(a0,a6),w=new C.bR(w,w.gL(0),a6.k("bR<ak.E>")),v=a2.a,a6=a6.k("ak.E");w.C();){t=w.d
if(t==null)t=a6.a(t)
s=a2.c
g=D.o.eb(t,s)
a4.push(new C.z(-v.gex(0)/2+8+g*24,-750+D.o.F(t,s)*24))}a4.push(b2)
a1=C.a([D.d.gI(a4)],a3)
for(j=0;h=a4.length-1,j<h;j=h){a3=j+1
for(;;){if(!(h>a3&&!a2.aZt(0,a4[j],a4[h])))break;--h}a1.push(a4[h])}return a1},
c6Q(d,e,f){return Math.sqrt(Math.pow(d-f.a,2)+Math.pow(e-f.b,2))}}
A.dj5.prototype={
gcm(d){return this.a.length!==0},
ao9(d,e){var w,v,u,t=this.a
t.push(d)
w=this.b
w.push(e)
v=t.length-1
for(;v>0;v=u){u=D.o.ao(v-1,2)
if(w[u]<=w[v])break
this.b7E(v,u)}},
eM(){var w,v,u,t,s,r=this.a,q=D.d.gI(r),p=r.pop(),o=this.b,n=o.pop()
if(r.length!==0){r[0]=p
o[0]=n
for(w=0;;w=s){v=2*w+1
u=v+1
t=r.length
s=v<t&&o[v]<o[w]?v:w
if(u<t&&o[u]<o[s])s=u
if(s===w)break
this.b7E(w,s)}}return q},
b7E(d,e){var w,v=this.a,u=v[d]
v[d]=v[e]
v[e]=u
v=this.b
w=v[d]
v[d]=v[e]
v[e]=w}}
A.aTc.prototype={
bjw(d,e,f){var w,v,u,t,s=this,r=null,q=s.d
if(q>0){q-=d
s.d=q
if(q<=0){s.d=0
s.c=180
s.r+=5
w="You did not reach a shop in time: you lost 5 stars. You must rest for three minutes, or eat something."}else w=r
s.aV()
return w}q=s.c
if(q>0){q-=d
s.c=q
if(q<=0){s.c=0
s.a=0.5
w="You have rested. Your energy is back to half. Find some food in a shop to keep going."}else w=r
s.aV()
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
s.aV()}else w=r
if(e){v=s.b
q=s.b=D.k.E(v-d/120,0,1)
if(q<=0&&v>0)w="The car is out of gas. Get to a gas station (walk, then buy gas) to carry on."
else if(v>=0.25&&q<0.25)w="The gas is low. Drive to a gas station."
s.aV()}return w},
a6N(d){return this.bjw(d,!1,!1)}}
A.aYt.prototype={
B(d){var w,v,u,t,s,r=null,q=D.k.E(this.c,0,1)
if(q>0.5)w=D.be
else w=q>0.25?D.bG:D.aw
v=C.a([],x.p)
u=this.d
v.push(new C.D(D.qb,C.d(this.e,r,r,r,r,r,r,C.l(r,r,r,r,r,r,r,r,r,r,r,u,r,r,r,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),r))
t=C.m(u/3)
s=C.J(D.ad,D.r,1.5)
v.push(C.E(C.p(r,new C.bM(D.a5,r,r,C.Bt(D.A,C.c2(r,new C.o(w,r,r,C.m(u/4),r,r,D.n),D.bg),1,q),r),D.f,r,r,new C.o(D.aT,r,s,t,r,r,D.n),r,u,r,r,D.nq,r,r,r),1))
v.push(C.p(r,r,D.f,r,r,new C.o(D.ad,r,r,C.m(1),r,r,D.n),r,u*0.45,r,B.bAk,r,r,r,3))
return C.B(v,D.m,r,D.e,D.Q,0,r,r)}}
A.Us.prototype={
B(d){return new C.ts(new A.c0U(this),null,this.c,null)}}
A.rJ.prototype={}
A.Su.prototype={
gL(d){return this.a==="bus"?120:95.94999999999999}}
A.aTb.prototype={}
A.bwJ.prototype={
bA1(d,e,f,g){var w,v,u,t,s,r,q,p,o,n,m
for(w=this.e,v=this.f,u=0;u<4;++u){t=B.kl[u]
s=A.fm8(t).a[1]
r=new A.feV(this,t)
q=0
for(;;){if(!(r.$1(q)&&q<s))break;++q}for(p=-1,o=0,n=0;n<s;++n){m=D.o.F(q+n,s)
if(r.$1(m)){if(p<0)p=m;++o}else if(p>=0)break}w.push(p)
v.push(o)}}}
A.bJM.prototype={
ke(d){var w,v,u,t
for(w=this.a,v=this.b,u=0;u<4;++u){w[u]=B.kl[u].r
v[u]=0}t=this.c=0
for(w=$.fX4();t<2;++t)w[t].r=-1},
FE(d,e){var w,v,u,t=this
if(e<t.c-0.0001)t.ke(0)
w=t.c
if(e-w>90){w=e-2
t.c=w}for(v=e-1e-9;w<v;){u=Math.min(0.05,e-w)
t.cyL(u)
w=t.c+=u}},
cyL(b8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7=this
for(w=$.fX4(),v=b7.a,u=0;u<2;++u){t=w[u]
s=t.r
if(s<0)continue
r=A.fm8(B.kl[s]).a[1]
q=D.k.F(v[s]-t.e[s],r)
if(q<0)q+=r
if(q>=t.f[s]&&q<r/2)t.r=-1}for(w=b7.b,p=110*b8,o=40*b8,n=0;n<4;++n){m=B.kl[n]
r=A.fm8(m).a[1]
l=m.a==="bus"
k=(l?120:95.94999999999999)/2
j=new A.bJN()
for(i=34,h=0;h<4;++h){if(h===n||D.o.ao(n,2)!==D.o.ao(h,2))continue
g=D.k.F(v[h]-v[n],r)
if(g<0)g+=r
g-=k+(B.kl[h].a==="bus"?120:95.94999999999999)/2
if(g<400)i=Math.min(i,C.jV(j.$1(g-18)))}for(f=$.bF4(),e=f.length,d=r-30,u=0;u<f.length;f.length===e||(0,C.M)(f),++u){a0=f[u]
if(a0.a!==D.o.ao(n,2))continue
a1=A.h5J(a0,b7.c)
if(a1===0)continue
a2=D.k.F(a0.b-(v[n]+k),r)
if(a2<0)a2+=r
if(a2>d)continue
if(a2<260)a3=!(a1===1&&a2<w[n]*1.2)
else a3=!1
if(a3)i=Math.min(i,C.jV(j.$1(a2-4)))}for(f=$.fX4(),u=0;u<2;++u){t=f[u]
a4=t.e[n]
if(a4<0)continue
e=v[n]
a2=D.k.F(a4-e,r)
if(a2<0)a2+=r
if(D.k.F(e-a4,r)<t.f[n]){if(t.r<0)t.r=n
continue}if(t.r===n)continue
e=w[n]
for(d=$.bF4(),a3=d.length,a5=b7.c,a6=!1,a7=0;a7<a3;++a7){a0=d[a7]
if(a0.a!==D.o.ao(n,2)||A.h5J(a0,a5)===0)continue
a8=D.k.F(a0.b-(v[n]+k),r)
if((a8<0?a8+r:a8)<a2)a6=!0}if(t.r<0&&a2<40+e*e/220+20&&!a6){t.r=n
continue}if(a2<400)i=Math.min(i,C.jV(j.$1(a2-10)))}f=A.Lb(m,v[n]).a
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
a5=Math.abs(-b3*b2+b4*b1)<a5/2+16}if(a5)i=Math.min(i,C.jV(j.$1(b5-k-10)))}b6=w[n]
l=b6<i?Math.min(i,b6+o):Math.max(i,b6-p)
w[n]=l
if(l<0){w[n]=0
l=0}v[n]=v[n]+l*b8}},
cVR(d,e,f){this.FE(0,f)
return A.Lb(B.kl[e],this.a[e])},
cQv(d,e){var w,v,u,t,s,r,q,p,o,n,m,l
for(w=this.a,v=this.b,u=0;u<4;++u){if(v[u]<4)continue
t=B.kl[u]
s=A.Lb(t,w[u]).a
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
A.Af.prototype={
ga8e(){var w=this.d,v=w.e*3.141592653589793/2,u=Math.sin(v),t=Math.cos(v),s=this.r-1
return new C.z(w.c+u*42-t*s*24,w.d+t*42+u*s*24)}}
A.czY.prototype={
bzR(d,e){var w,v,u,t,s=this,r=x._,q=C.a([],r)
for(w=s.a.x,v=w.length,u=0;u<w.length;w.length===v||(0,C.M)(w),++u){t=w[u]
if(t.b==="ubstation")q.push(t)}s.c!==$&&C.aP()
s.c=q
r=C.a([],r)
for(q=w.length,u=0;u<w.length;w.length===q||(0,C.M)(w),++u){t=w[u]
v=t.b
if(v==="house2"||v==="bighouse")r.push(t)}s.d!==$&&C.aP()
s.d=r
s.UC(0)},
UC(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.d
f===$&&C.c()
if(f.length===0)return
w=g.c
w===$&&C.c()
v=w.length
u=g.b
t=g.e
s=C.T(t)
r=s.k("Z<1>")
s=s.k("cQ<1,H>")
q=s.k("L.E")
p=0
for(;p<w.length;w.length===v||(0,C.M)(w),++p){o=w[p]
n=C.pT(q)
n.v(0,new C.cQ(new C.Z(t,new A.cA_(o),r),new A.cA0(),s))
for(m=0;m<3;++m){if(n.t(0,m))continue
l=g.f
k=l==null
if((k?null:l.d)===o)l=(k?null:l.r)===m
else l=!1
if(l)continue
l=g.x++
j=f[u.au(f.length)]
i=A.yK(j)
h=Math.sqrt(Math.pow(o.c-i.a,2)+Math.pow(o.d-i.b,2))
l=new A.Af(l,B.diK[u.au(12)],new A.tH(B.axb[u.au(5)],B.M1,B.dqJ[u.au(6)],D.aJ,"human",!1,0,1),o,j,6+D.o.E(D.k.V(h/45),0,30),m)
l.x=d
t.push(l)}}},
aqj(d,e){var w,v,u,t=this.c
t===$&&C.c()
w=t.length
v=0
for(;v<t.length;t.length===w||(0,C.M)(t),++v){u=t[v]
if(Math.sqrt(Math.pow(u.c-d,2)+Math.pow(u.d-e,2))<150)return u}return null},
cVC(d,e){var w,v,u,t,s,r,q=this
if(q.f!=null)return null
w=q.aqj(d,e)
if(w==null)return null
v=C.a([],x.bz)
for(u=q.e,t=u.length,s=0;s<u.length;u.length===t||(0,C.M)(u),++s){r=u[s]
if(r.d===w)v.push(r)}if(v.length===0)return null
D.d.aY(v,new A.czZ())
r=D.d.gI(v)
D.d.W(u,r)
return q.f=r},
ga6L(d){var w=this.f
return w==null?null:A.yK(w.e)},
cNt(d,e,f){var w,v,u=this,t=u.f,s=u.ga6L(0)
if(t==null||s==null)return 0
if(Math.sqrt(Math.pow(s.a-d,2)+Math.pow(s.b-e,2))>70)return 0
u.f=null;++u.r
w=u.w
v=t.f
u.w=w+v
u.y=f+4
u.UC(f)
return v},
ame(d){var w,v,u,t,s,r,q,p
if(d<this.y)return B.HY
w=C.a([],x.B)
for(v=this.e,u=v.length,t=d*1.4,s=0;s<v.length;v.length===u||(0,C.M)(v),++s){r=v[s]
q=r.d
p=r.c
w.push(new A.a4h(r.ga8e().a,r.ga8e().b,Math.atan2(q.c-r.ga8e().a,q.d-r.ga8e().b)+3.141592653589793,t+r.a,!1,!1,p,p.c))}return w}}
A.px.prototype={}
A.bJy.prototype={
gM4(){var w,v=this,u=v.r
if(u===$){w=A.hvE(v.b)
v.r!==$&&C.bG()
v.r=w
u=w}return u},
cbC(){var w,v=this.a
A:{if("hospital"===v){w=B.cwE
break A}if("dmv"===v){w=B.dr3
break A}if("shop"===v){w=B.cWS
break A}if("school"===v){w=B.d5a
break A}if("firestation"===v){w=B.dko
break A}if("tower"===v){w=B.dew
break A}w=B.dp3
break A}return w},
cGr(){var w,v=this.a
A:{if("hospital"===v){w=B.cwA
break A}if("dmv"===v){w=B.d79
break A}if("shop"===v){w=B.d1J
break A}if("school"===v){w=B.deh
break A}if("firestation"===v){w=B.dbk
break A}if("tower"===v){w=B.dtx
break A}w=B.cWn
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
t=p.c7r(q,e)}if(t!=null)p.B(e)
return t},
c7r(d,e){var w,v,u,t,s,r=this,q="The city is still loading.",p="The breaker panel on level "
switch(r.a){case"hospital":if(e==null)return q
if(d===0){w=e.gC4()
v=C.T(w).k("Z<1>")
u=C.C(new C.Z(w,new A.bJz(),v),v.k("L.E"))
if(u.length===0)return"The desk: nobody needs the hospital right now. "+e.x+" doses of medicine in stock."
return e.aDc(D.d.gI(u))}t=d-1
if(e.e[t].a<0)return"This bed is empty. Admit someone at the desk first."
return e.bjL(t)
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
return"You taught the class a lesson. +3 points. "+B.a41[D.o.F(w==null?0:w,5)]}w=e==null?null:e.r
return"The library: "+B.a41[D.o.F(w==null?1:w,5)]
case"firestation":if(d===0){if(e!=null)e.r+=2
return"You checked the equipment with the firefighters. +2 points. Keep the extinguishers charged."}w=e==null?null:e.r
return"Fire drill: "+B.a41[D.o.F((w==null?0:w)+1,5)]
case"tower":if(d===0){r.w=!0
return"The elevator: choose your level (you are on level "+r.f+" of "+r.gM4()+")."}if(d===2){r.x=!0
return"The balcony on level "+r.f+": the whole town is below you."}if(r.c){r.cy=!0
return p+r.f+". This office has no power. Let us find the wiring fault."}return p+r.f+": every breaker is on and the office has power."
default:if(d===0){if(r.c){r.cy=!0
return"The breaker panel. This house has no power. Let us find the wiring fault."}return"The breaker panel: every breaker is on and the house has power."}return r.c?"The outlet is dead: there is no power in this house.":"The outlet works. Everything here is wired right."}},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this
g.ch=d
w=g.a
if(w==="cabin"){g.bEA()
return}v=C.a([],x.z)
u=new A.fk(v)
t=C.a([],x.E)
A:{if("hospital"===w){s=B.eDO
break A}if("shop"===w){s=B.exD
break A}if("dmv"===w){s=B.eA0
break A}if("school"===w){s=B.eQZ
break A}if("firestation"===w){s=B.eEN
break A}if("tower"===w){s=new C.z(g.c?B.afI:B.br8,B.bgc)
break A}s=new C.z(g.c?B.afI:B.boX,B.jq)
break A}r=s.a
u.f=-1
u.n8(B.h5r,B.h3E,s.b,0.2,3)
u.f=0
u.x=$.dS=$.dS+1
u.hn(B.h2P,B.aWq,r,3)
u.x=0
u.x=$.dS=$.dS+1
u.hn(B.h1C,B.aaG,r,3)
u.x=0
s=w==="tower"
if(s){u.f=3
u.d=0.18
u.aO(B.aWC,B.aaG,B.YY)
u.d=1
u.f=0}else{u.x=$.dS=$.dS+1
u.hn(B.aWC,B.aaG,r,3)
u.x=0}u.f=0
q=s&&g.f>1
p=$.dS+1
if(q){u.x=$.dS=p
u.hn(B.h3S,B.aWq,r,3)
u.x=0}else{u.x=$.dS=p
u.hn(new A.q(-94,70,320.6),new A.q(113.2,140,1.2),r,2)
u.x=0
u.x=$.dS=$.dS+1
u.hn(new A.q(94,70,320.6),new A.q(113.2,140,1.2),r,2)
u.x=0
u.x=$.dS=$.dS+1
u.aO(new A.q(0,102,320.6),new A.q(76,76,1.2),r)
u.x=0
u.x=$.dS=$.dS+1
u.aZ(B.h6w,B.hbE,B.bbC,0.5)
u.x=0}u.f=1
for(o=0;o<3;++o){n=B.dl3[o]
u.aO(new A.q(n,78,0.6),B.hbc,B.kA)
u.aZ(new A.q(n,78,0.8),B.h1U,B.hV,0.6)}for(q=!s,o=0;o<2;++o){m=B.cDX[o]
u.aO(new A.q(-149.6,78,m),B.aWh,B.kA)
u.aZ(new A.q(-149.2,78,m),B.aWU,B.hV,0.6)
if(q){u.aO(new A.q(149.6,78,m),B.aWh,B.kA)
u.aZ(new A.q(149.2,78,m),B.aWU,B.hV,0.6)}}u.aO(B.h6C,B.hbC,B.kA)
u.aO(B.h6O,B.h_s,D.bO)
u.f=2
u.r=!0
for(q=w!=="house2",p=w==="bighouse",o=0;o<3;++o){n=B.dlu[o]
for(l=0;l<2;++l){m=B.cDY[l]
u.dN(new A.q(n,138,m),new A.q(n,122,m),0.5,D.jc,4)
k=(!q||p||s)&&g.c?D.hf:B.o3
u.ed(new A.q(n,120,m),5,k,3,6)}}switch(w){case"hospital":g.c_2(u,t,d)
break
case"shop":g.cvv(u,t)
break
case"dmv":g.bNe(u,t)
break
case"school":g.ctb(u,t)
break
case"firestation":g.cyH(u,t)
break
case"tower":g.cCN(u,t)
break
default:u.f=1
u.aO(B.hcQ,B.h81,g.c?B.q2:B.ag6)
u.f=2
u.aZ(B.hae,B.fY_,B.Ya,0.1)
u.aZ(B.haf,B.fY0,B.LS,0.1)
u.aZ(B.fXI,B.h1j,B.nS,0.2)
u.aZ(B.h33,B.hcu,E.Fi,0.4)
u.aO(B.fYq,B.fZ1,B.agQ)
u.ed(B.h9H,10,B.ER,3,6)
g.bav(u,t)}u.f=1
if(s&&g.f>1)t.push(B.c0a)
else{u.aO(B.h73,B.h4q,D.cU)
t.push(B.c09)}if(d!=null){w=d.r
k=d.w
j=d.x
i=g.cx!=null?"   \ud83d\udce6 carrying":""
t.push(new A.hf(B.fW6,"\u2b50 "+w+"   \ud83c\udf5e "+k+"   \ud83d\udc8a "+j+i,D.M,0))}h=C.a([],x.a)
if(s){u.f=2
u.e=0
u.aZ(B.fXV,B.aWl,D.av,0.3)
u.aZ(B.h39,B.aWl,D.av,0.3)
u.aZ(B.h6X,B.hbf,D.av,0.3)
w=x.o
h.push(new A.fO(C.a([B.h2C,B.h7m,B.h6j,B.h95],w),0,new A.bJG(g),960,560,60,2,0,!1))
h.push(new A.fO(C.a([B.h_Y,B.hcW,B.h__,B.hba],w),0,new A.bJH(g),960,560,60,2,0,!1))
h.push(new A.fO(C.a([B.haY,B.fVM,B.h1Y,B.h4z],w),0,new A.bJI(g),960,560,60,2,0,!1))}if((!q||p)&&!g.c)h.push(new A.fO(C.a([B.h7P,B.h3P,B.h6o,B.h6i],x.o),0,new A.bJJ(g),960,480,60,2,0,!1))
g.ay=new A.tM(v,B.S2,t,h,null,0)},
ru(d,e,f,g,h){var w=d.f
d.f=1
d.dN(new A.q(e,0.2,f),new A.q(e,0.6,f),g,h,20)
d.f=w},
c_2(d,e,f){var w,v,u,t,s,r,q,p,o
d.f=1
d.aO(B.aVk,B.h_G,D.by)
d.aO(B.aVk,B.fYa,D.by)
d.f=2
d.aZ(B.haB,B.h2o,B.nS,0.15)
d.aZ(B.haC,B.h2H,D.bN,0.3)
d.aO(B.h9E,B.h1y,D.aQ)
this.ru(d,-80,66,22,D.co)
e.push(B.c0g)
e.push(B.c05)
for(w=0;w<2;++w)d.aO(new A.q(-105,8,B.cew[w]),B.h0W,D.br)
d.ed(B.fYx,9,B.ER,3,6)
for(v=f!=null,u=0;u<3;++u){t=48+u*50
d.aO(new A.q(76,8,t),B.h2l,D.cr)
d.aO(new A.q(76,14,t),B.h2g,D.aP)
d.aO(new A.q(108,18,t),B.fYv,D.c)
s=v&&u<f.e.length?f.e[u]:null
if(s!=null&&s.a>=0){r=f.c
r===$&&C.c()
q=r[s.a]
r=s.b>70?D.bj:D.cs
d.aO(new A.q(54,24,t),B.h_J,r)
r=s.b>70
p=r?"cared for":"needs treatment"
r=r?D.ei:D.by
e.push(new A.hf(new A.q(76,40,t),q.a.b+"  "+p,r,0))}else e.push(new A.hf(new A.q(76,30,t),"Free bed "+(u+1),D.br,0))
r=t-2
o=d.f
d.f=1
d.dN(new A.q(20,0.2,r),new A.q(20,0.6,r),16,D.aC,20)
d.f=o}},
bNe(d,e){var w,v,u,t,s
d.f=2
d.r=!0
d.x=$.dS=$.dS+1
d.aZ(B.aVb,B.fYH,D.br,0.15)
d.aZ(B.aVd,B.fYJ,D.bN,0.3)
d.aZ(B.ha8,B.fZP,D.av,0.3)
d.aZ(B.h9f,B.h3B,D.b9,0.5)
d.aO(B.ha7,B.h1A,D.aJ)
d.aO(B.h_z,B.fZ0,D.bG)
d.x=0
d.x=$.dS=$.dS+1
d.aO(B.aVP,B.aVn,D.cp)
d.aO(B.aVL,B.aVs,D.bk)
d.ed(B.aVM,5.5,B.af6,5,8)
d.ed(B.aVN,5.7,D.av,3,8)
d.x=0
d.x=$.dS=$.dS+1
d.aO(B.h9L,B.h05,D.aP)
for(w=0;w<3;++w){v=90+w*30
d.aDA(new A.q(-146,62,v),B.fZq,[D.by,D.bG,D.bk][w],0)
d.aO(new A.q(-145.6,62,v),B.hb6,D.c)}d.aO(B.fYL,B.h04,D.fU)
d.aO(B.h5W,B.hbV,D.c)
d.aO(B.h59,B.haN,D.by)
d.x=0
for(u=0;u<4;++u){t=B.dl4[u]
d.x=$.dS=$.dS+1
d.aO(new A.q(t,9,150),B.fZV,D.bk)
d.aO(new A.q(t,17,160),B.fZQ,D.bk)
d.aO(new A.q(t-8,4,150),B.aVG,D.aJ)
d.aO(new A.q(t+8,4,150),B.aVG,D.aJ)
d.x=0}d.x=$.dS=$.dS+1
d.aO(B.fX9,B.h1L,D.bM)
d.aZ(B.fWd,B.h0L,D.aw,0.4)
d.aZ(B.hak,B.h_a,D.dt,0.5)
for(u=0;u<2;++u){t=E.azZ[u]
for(s=0;s<2;++s){v=B.cep[s]
d.dN(new A.q(t,9,v-1.5),new A.q(t,9,v+1.5),5,D.av,8)}}d.x=0
this.ru(d,0,78,24,D.aQ)
e.push(B.c0d)
e.push(B.c06)
e.push(B.c0e)},
aUV(a5,a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=a6*128
A:{if(1===a7){w=B.dam
break A}if(2===a7){w=B.dbK
break A}w=B.d5r
break A}a5.x=$.dS=$.dS+1
a5.aO(new A.q(a6*148,40,120),B.h0A,B.af3)
for(v=0;v<2;++v)a5.aO(new A.q(a4,40,B.cIa[v]),B.h0g,B.af3)
a5.aO(new A.q(a4,4,120),B.h0h,B.bik)
for(u=0;u<4;++u)a5.aZ(new A.q(a4,11+u*18,120),B.h0c,B.brG,0.1)
for(t=a7===0,s=w.length,r=a6*2.7,u=0;u<4;++u){q=12+u*18
for(p=q+6.6,o=q+3.2,n=u*7,m=q+10,l=q+12.5,k=q+7,j=q+8,i=q+2.5,h=q+5.5,g=0;g<9;++g){f=76+g*11
for(e=n+g*3,d=u+g+a7,a0=0;a0<2;++a0){a1=a6*(114+a0*14)
a2=w[D.o.F(e+a0*5+a7,s)]
switch(D.o.F(d+a0,4)){case 0:a5.dR(new A.q(a1,q,f),new A.q(a1,j,f),3.2,a2,0.3,8)
a5.L5(new A.q(a1,i,f),new A.q(a1,h,f),3.3,D.c,!1,8)
break
case 1:a5.aZ(new A.q(a1,k,f),B.h4g,a2,0.1)
a5.aO(new A.q(a1-r,j,f),B.h7H,D.c)
break
case 2:a5.dR(new A.q(a1,q,f),new A.q(a1,m,f),2.4,a2,0.45,8)
a5.dN(new A.q(a1,m,f),new A.q(a1,l,f),1.2,D.c,6)
break
default:a3=t?B.brN:a2
a5.aZ(new A.q(a1,o,f),B.h76,a3,0.05)
a3=t?B.beN:D.c
a5.aO(new A.q(a1,p,f),B.h2Z,a3)}}}}a5.x=0},
aTS(d,e){var w,v,u,t,s,r,q,p
d.x=$.dS=$.dS+1
d.aZ(new A.q(e,32,11),B.h0X,D.bO,0.3)
d.aO(new A.q(e,33,22.4),B.h0M,D.bn)
for(w=e-21,v=0;v<3;++v){u=v*17
d.aO(new A.q(e,15+u,21),B.h0H,D.bM)
for(t=16+u,u=27+u,s=v*2,r=0;r<7;++r){q=w+r*7
d.dR(new A.q(q,t,21.6),new A.q(q,u,21.6),2.2,B.d_Z[D.o.F(r+s,6)],0.5,6)}}d.x=0
p=d.f
d.f=3
d.d=0.2
d.aO(new A.q(e,33,23.2),B.hcB,B.YY)
d.d=1
d.f=p},
cvv(d,e){var w,v,u,t,s,r,q,p,o,n=this,m=n.b.b==="gasstation"
d.f=2
d.r=!0
d.x=$.dS=$.dS+1
d.aZ(B.aVb,B.fYp,B.nS,0.15)
d.aZ(B.aVd,B.fYr,D.bN,0.3)
d.aO(B.h44,B.hc5,B.brU)
d.aZ(B.ha2,B.fZE,D.e7,0.3)
d.aZ(B.ha4,B.fZ2,D.b9,0.5)
d.aO(B.fX0,B.fYb,D.av)
for(w=0;w<6;++w)d.aO(new A.q(14+w*7.5,33,47),B.h1a,B.dqM[D.o.F(w,4)])
d.x=0
d.x=$.dS=$.dS+1
d.aO(B.aVP,B.aVn,D.cp)
d.aO(B.aVL,B.aVs,D.cU)
d.aO(B.h7f,B.h5q,D.vH)
d.ed(B.aVM,5.5,B.af6,5,8)
d.ed(B.aVN,5.7,B.bfW,3,8)
d.x=0
n.aUV(d,-1,0)
n.aUV(d,1,m?2:1)
n.aTS(d,-104)
n.aTS(d,104)
for(v=[B.ey1,B.eNe],u=0;u<2;++u){t=v[u]
s=t.a
r=t.b
d.x=$.dS=$.dS+1
d.aO(new A.q(s,5,170),B.h_U,B.agQ)
d.aO(new A.q(s,11,160),B.h_W,B.bj4)
for(t=s-13.5,q=J.a5(r),w=0;w<4;++w)for(p=t+w*9,o=0;o<3;++o)d.ed(new A.q(p,12.5,163+o*7.5),4.2,q.h(r,D.o.F(w+o,3)),4,6)
d.x=0}d.x=$.dS=$.dS+1
d.aO(B.aV7,B.fYi,m?D.by:D.cU)
d.aO(B.h9D,B.aVD,D.aC)
d.aO(B.fYk,B.aVD,m?D.bn:D.aQ)
d.x=0
n.ru(d,-64,120,24,D.bG)
n.ru(d,64,120,24,D.bw)
n.ru(d,0,84,22,D.be)
e.push(new A.hf(B.fW0,m?"\u26fd NGMY Gas shop":"\ud83d\uded2 NGMY Mart",D.M,0))
e.push(B.c07)
e.push(new A.hf(B.h2k,m?"\ud83d\udee2 For the car":"\ud83d\udc8a Medicine and health",D.iR,0))
e.push(B.c0h)
e.push(B.c08)
e.push(B.c0i)},
ctb(d,e){var w,v,u,t,s
d.aZ(B.fXD,B.hda,D.e_,0.1)
d.aO(B.hbS,B.h8s,B.bnv)
d.aZ(B.fWf,B.fYy,B.nS,0.15)
for(w=0;w<4;++w){v=B.ddc[w]
u=v.a
t=v.b
for(s=0;s<2;++s){v=u+B.a4O[s]
d.aO(new A.q(v,10,t),B.fZI,B.jq)
d.aO(new A.q(v,5,t),B.h_f,D.bm)}}this.ru(d,0,80,24,D.bG)
this.ru(d,90,56,20,D.co)
e.push(B.c03)
e.push(B.c0b)},
cyH(d,e){var w,v,u,t,s
d.aZ(B.fW9,B.fZf,D.by,0.3)
d.aZ(B.hap,B.h1h,D.by,0.3)
for(w=0;w<2;++w){v=B.dlq[w]
for(u=0;u<2;++u){t=B.csx[u]
d.dN(new A.q(v,6,t-1.5),new A.q(v,6,t+1.5),8,D.nf,10)}}for(s=0;s<5;++s)d.aO(new A.q(-142,30,110+s*18),B.fYc,D.al)
d.dN(B.fYg,B.fYh,2,D.bG,6)
this.ru(d,-60,130,24,D.aC)
this.ru(d,80,56,20,D.co)
e.push(B.c01)
e.push(B.c0c)},
cCN(d,e){var w,v,u,t,s,r,q,p,o,n=this
d.f=1
d.aO(B.hbw,B.h5v,B.ds1[D.o.F(n.f,5)])
d.f=2
d.b=19502
d.aO(B.h3r,B.h2p,D.M)
d.aZ(B.h13,B.aW0,D.br,0.5)
d.aZ(B.h_m,B.aW0,D.br,0.5)
d.aZ(B.h_R,B.fY2,D.br,0.5)
d.e=16
d.aZ(B.fXP,B.h2S,D.b9,0.4)
d.aO(B.h4f,B.h08,D.av)
d.aO(B.h9e,B.fY9,D.e7)
d.ed(B.h4_,2,D.bG,3,5)
d.ed(B.h0w,2,D.be,3,5)
d.b=d.e=0
n.ru(d,0,70,26,D.aQ)
for(w=0;w<3;++w){v=B.cWr[w]
u=v.a
t=v.b
d.aZ(new A.q(u,15,t),B.h0k,B.nS,0.2)
d.aO(new A.q(u-19,7,t),B.aVS,D.jc)
d.aO(new A.q(u+19,7,t),B.aVS,D.jc)
d.aZ(new A.q(u,24,t-4),B.fYM,E.Fi,0.5)
d.aO(new A.q(u,9,t+18),B.fYT,D.cp)
d.aO(new A.q(u,16,t+25),B.fYO,D.cp)}n.ru(d,105,100,26,D.be)
d.d=0.3
d.f=3
d.aO(new A.q(144,14,100),B.h0x,B.YY)
d.d=1
d.f=2
for(w=0;w<5;++w)d.aZ(new A.q(144,14,B.d3r[w]),B.h5O,D.dv,0.5)
d.ed(B.fYA,10,B.ER,3,6)
d.aO(B.fYt,B.h_C,B.nS)
s=-(n.f*22)
d.f=-1
d.aO(new A.q(520,s-1,105),B.h2F,B.Xm)
d.aO(B.h1M,B.h_i,B.hV)
d.f=1
for(v=n.b.a,r=v*7,q=0;q<15;++q){p=30+D.o.F(r+q*13,90)
o=B.d8H[D.o.F(v+q,4)]
d.aO(new A.q(215+D.o.F(q,5)*80,s+p/2,-60+D.o.ao(q,5)*135),new A.q(38,p,38),o)}e.push(new A.hf(B.fVZ,"\ud83c\udfe2 LEVEL "+n.f+" of "+n.gM4(),D.dI,19502))
e.push(B.c02)
e.push(B.c04)
n.bav(d,e)},
bEA(){var w,v,u,t=C.a([],x.z),s=new A.fk(t)
s.f=-1
s.aZ(B.h4Y,B.hbI,D.br,0.3)
s.f=0
s.x=$.dS=$.dS+1
s.aZ(B.haa,B.aVC,B.afz,0.4)
s.x=0
s.x=$.dS=$.dS+1
s.aZ(B.h_T,B.aVC,B.afz,0.4)
s.x=0
s.f=1
s.aO(B.fVW,B.h1S,D.aL)
s.f=2
s.r=!0
for(w=0;w<2;++w)s.aZ(new A.q(B.aA0[w],40,38),B.h4w,D.bM,0.7)
s.aZ(B.fXQ,B.h8M,D.xK,0.2)
for(w=0;w<2;++w)s.aZ(new A.q(B.dlc[w],45,80),B.fZd,D.aJ,0.3)
s.aZ(B.fXN,B.h1R,D.aJ,0.3)
s.aO(B.fXs,B.h_P,D.al)
s.aZ(B.hc4,B.aWJ,D.av,0.3)
s.aZ(B.h5f,B.aWJ,D.av,0.3)
v=this.as
D.d.a9(v)
u=x.o
v.push(new A.fO(C.a([B.h5Z,B.h4d,B.h7G,B.hbl],u),0,new A.bJA(this),520,230,6,2,0,!1))
v.push(new A.fO(C.a([B.h2Q,B.h37,B.hb9,B.h88],u),0,new A.bJB(),720,600,30,2,0,!1))
v.push(new A.fO(C.a([B.h5X,B.h9d,B.h6V,B.h5u],u),0,new A.bJC(),720,600,30,2,0,!1))
v=C.C(v,x.K)
this.ay=new A.tM(t,B.S2,B.zm,v,null,0)},
bav(d,e){var w,v,u,t,s,r,q,p,o=this,n="dead, tap to fix it"
d.b=19500
d.aZ(B.h9K,B.h19,B.Xq,0.5)
for(w=0;w<4;++w){v=o.c&&w===0?D.cb:B.Z0
d.aO(new A.q(-144.2,62-w*6,45),B.h4I,v)}d.b=0
o.ru(d,-100,100,22,o.c?D.aw:D.be)
o.ru(d,90,100,22,D.co)
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
d.aO(B.h0u,B.fZv,o.c?D.aw:D.be)
d.b=19501
d.aO(B.h2I,B.h3m,t?D.be:D.aw)
d.aO(B.has,B.h3K,s?D.be:D.aw)
d.aO(B.h4K,B.h6M,r?D.be:D.aw)
d.d=1
d.aZ(B.h9p,B.h3X,B.Ms,0.25)
for(q=0;q<2;++q)for(u=26+F.hx[q]*3.4,p=0;p<2;++p)d.aO(new A.q(95+B.R4[p],u,2.6),B.h5C,B.agC)
d.aZ(B.hby,B.h7t,B.Ms,0.25)
d.aO(new A.q(-60,s?52:48,2.8),B.h_h,B.aio)
d.b=0
d.f=2
if(o.c)v=v.length===0?"\u26a1 Breaker panel: tap to switch the power on":"\u26a1 Breaker panel: still to fix: "+D.d.aH(v,", ")
else v="\u26a1 Breaker panel: all fine"
e.push(new A.hf(B.h9J,v,o.c?D.by:D.ei,19500))
v=new A.bJD(o)
u=t?"\ud83d\udd0c Outlets: fixed":"\ud83d\udd0c Outlet: "+C.w(v.$2(D.a2U,n))
e.push(new A.hf(B.h2J,u,t?D.ei:D.by,19501))
u=s?"\ud83d\udca1 Switch: fixed":"\ud83d\udca1 Switch: "+C.w(v.$2(B.cqn,"no power, tap to fix it"))
e.push(new A.hf(B.hat,u,s?D.ei:D.by,19501))
v=r?"\ud83d\udca1 Ceiling light: fixed":"\ud83d\udca1 Ceiling light: "+C.w(v.$2(B.ciT,n))
e.push(new A.hf(B.fW_,v,r?D.ei:D.by,19501))
if(o.c)e.push(B.c00)},
cNx(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=x.z,i=C.a([],j),h=new A.fk(i),g=k.a,f=g==="tower"
if(f||g==="cabin"){w=C.a([],j)
v=new A.fk(w)
if(f){v.e=16
for(u=0;u<2;++u)v.aZ(new A.q(F.hx[u]*(24+21*k.y),42,6.6),B.hb8,D.aP,0.7)}else{v.e=16
for(u=0;u<2;++u)v.aZ(new A.q(F.hx[u]*(9+18*k.y),40,78.6),B.fZc,D.aL,0.7)}D.d.v(i,w)}switch(g){case"shop":A.wJ(h,B.eoW,d,B.J7,!1,0,D.b5)
break
case"hospital":A.wJ(h,B.ep_,d,B.T8,!1,0,D.bP)
t=D.k.F(d*12,220)
g=t<110
f=g?t:220-t
g=g?0:3.141592653589793
A.wJ(h,A.aty(!1,0,-1,"",!1,0,"",-1,t/12,!1,!1,!1,0,!1,!0,6,g,40+f),d,B.J7,!1,0,D.bO)
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
A.wJ(new A.fk(f),B.eoZ,d,p,!1,0,p.c)
D.d.v(i,A.nx(f,-1.5707963267948966,-1.5707963267948966,new A.q(46,27,48+r*50)))}++r}}break
case"school":A.wJ(h,B.ep0,d,B.T8,!1,0,D.bk)
for(u=0;u<3;++u){g=B.d71[u]
A.wJ(h,new A.y0(0,g.a,g.b,3.141592653589793,!1,!1,!1,!1,!1,0,!1,!1,"","",-1,0,-1,0),d,B.J7,!1,0,g.c)}break
case"firestation":A.wJ(h,B.eoX,d,B.J7,!1,0,D.by)
A.wJ(h,B.eoY,d,B.T8,!1,0,D.aC)
break
default:break}g=k.at
g===$&&C.c()
f=g.f
w=g.r
o=g.w
n=g.x
m=g.y
l=g.z&&n
A.wJ(h,A.aty(!1,0,-1,"",!1,g.Q,"",-1,m,!1,!1,!1,0,l,n,f,o,w),d,e,!0,0,null)
if(k.cx!=null){j=C.a([],j)
new A.fk(j).aO(new A.q(g.f+Math.sin(g.w)*9,48+g.Q,g.r+Math.cos(g.w)*9),B.aVt,B.jq)
D.d.v(i,j)}return i},
gdc(d){return this.e}}
A.Fl.prototype={}
A.OY.prototype={
gUg(){var w,v=this
if(!v.f)return"has died"
if(v.r>=0)return"in hospital"
if(v.c<30)return"in danger"
if(v.e)return"sick"
w=v.b
if(w>80)return"starving"
if(w>55)return"hungry"
if(v.d<40)return"unhappy at home"
return"fine"},
gaDv(d){var w,v=this.gUg()
A:{if("has died"===v){w="\ud83d\udd6f"
break A}if("in hospital"===v){w="\ud83c\udfe5"
break A}if("in danger"===v){w="\ud83c\udd98"
break A}if("sick"===v){w="\ud83e\udd12"
break A}if("starving"===v||"hungry"===v){w="\ud83c\udf7d"
break A}if("unhappy at home"===v){w="\ud83d\ude1f"
break A}w="\ud83d\ude42"
break A}return w}}
A.I3.prototype={}
A.LY.prototype={}
A.aTB.prototype={
byU(d,e){var w,v=C.a([],x.fP)
for(w=0;w<7;++w)v.push(new A.OY(B.CG[w]))
this.c=v
v[1].b=55
v[4].b=40},
gC4(){var w,v,u,t=C.a([],x.fP),s=this.c
s===$&&C.c()
w=s.length
v=0
for(;v<s.length;s.length===w||(0,C.M)(s),++v){u=s[v]
if(u.f)t.push(u)}return t},
gcMs(){var w=this.c
w===$&&C.c()
return new C.Z(w,new A.bKn(),C.T(w).k("Z<1>")).gL(0)},
PN(d){var w=this.f
D.d.c6(w,0,d)
if(w.length>12)w.pop()},
aDd(a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this
a1.as+=a3
for(w=a1.gC4(),v=w.length,u=-0.6*a3,t=0.8*a3,s=0.2*a3,r=a1.b,q=0.012*a3,p=a1.f,o=0.15*a3,n=0;n<w.length;w.length===v||(0,C.M)(w),++n){m=w[n]
l=a4.d
l===$&&C.c()
k=m.a
j=l[k.c]
i=j.gkL()
l=k.d
if(l>=0)h=!a4.d[l].gjQ()
else{l=j.c
h=(l==="bathroom"||l==="kitchen")&&!j.gjQ()}if(m.r<0){m.b=Math.min(100,m.b+s)
l=i?0:45
g=h?35:0
f=m.d
f+=D.k.E(100-l-g-f,u,t)
m.d=f
if(!m.e)l=(f<40||m.b>85)&&r.ah()<q
else l=!1
if(l){m.e=!0
D.d.c6(p,0,k.b+" has fallen sick. Give medicine, or send them to the hospital.")
if(p.length>12)p.pop()}e=m.b>=95?0.9:0
if(m.e)e+=0.55
if(m.d<15)e+=0.4
if(e>0)l=m.c=m.c-e*a3
else{l=m.c
if(l<100){l=Math.min(100,l+o)
m.c=l}}if(l<=0)a1.aRW(m)}}for(w=a1.e,v=1.2*a3,u=2.2*a3,d=0;d<w.length;++d){a0=w[d]
t=a0.a
if(t<0)continue
s=a1.c
s===$&&C.c()
m=s[t]
if(!m.f){a0.a=-1
continue}t=a0.b=Math.max(0,a0.b-a3)
if(t>30)a0.c=Math.min(100,a0.c+u)
else if(t<=0)if((m.c-=v)<=0){a1.aRW(m)
a0.a=-1
continue}if(a0.c>=100){m.e=!1
m.r=-1
m.c=Math.max(m.c,80)
m.b=Math.min(m.b,30)
a0.a=-1
a0.c=0
a0.b=100
a1.r+=8;++a1.z
D.d.c6(p,0,m.a.b+" is better and went home. +8 points.")
if(p.length>12)p.pop()}}for(w=a1.d,v=w.length,n=0;n<v;++n)w[n].f+=a3
a1.NA(a4)
if((a1.at-=a3)<=0){a1.at=60+r.ah()*50
a1.cHS(a4)}},
aRW(d){var w
d.f=!1
d.c=0
w=d.r
if(w>=0)this.e[w].a=-1
d.r=-1
D.d.bs(this.d,new A.bKk(d))
this.PN(d.a.b+" has died. Keep up with everybody's needs: food, medicine and a home that works.")},
aVJ(d,e){return D.d.b3(this.d,new A.bKl(d,e))},
NA(d){var w,v,u,t,s,r,q,p,o,n=this,m=n.d,l=C.C(m,x.fC),k=l.length,j=n.f,i=0
for(;i<l.length;l.length===k||(0,C.M)(l),++i){w=l[i]
v=B.CG[w.b]
u=w.c==="power"
if(u){t=d.d
t===$&&C.c()
s=t[v.c].gkL()}else{t=v.d
r=d.d
if(t>=0){r===$&&C.c()
t=r[t].gjQ()
s=t}else{r===$&&C.c()
t=r[v.c].gjQ()
s=t}}if(s){D.d.W(m,w)
t=w.e
n.r=n.r+t;++n.y
u=u?"power is back":"leak is fixed"
D.d.c6(j,0,v.b+"'s "+u+". +"+t+" points. Thank you!")
if(j.length>12)j.pop()}}for(l=n.gC4(),k=l.length,u=n.b,i=0;i<l.length;l.length===k||(0,C.M)(l),++i){q=l[i]
if(m.length>=4)break
t=d.d
t===$&&C.c()
r=q.a
p=t[r.c]
if(!p.gkL()&&!n.aVJ(r.a,"power")){m.push(new A.I3(n.Q++,r.a,"power",B.d_M[u.au(3)],15))
D.d.c6(j,0,r.b+" is calling for help: no power.")
if(j.length>12)j.pop()}t=r.d
o=t>=0?d.d[t]:p
t=o.c
if((t==="bathroom"||t==="kitchen")&&!o.gjQ()&&!n.aVJ(r.a,"leak")&&m.length<4){m.push(new A.I3(n.Q++,r.a,"leak",B.d8w[u.au(3)],15))
D.d.c6(j,0,r.b+" is calling for help: a leak.")
if(j.length>12)j.pop()}}},
cHS(d){var w,v,u,t,s,r,q=this
if(q.d.length>=3||q.gC4().length===0)return
w=q.b
v=q.gC4()[w.au(q.gC4().length)]
u=d.d
u===$&&C.c()
t=v.a
s=u[t.c]
t=t.d
r=t>=0?u[t]:s
u=r.c
if((u==="bathroom"||u==="kitchen")&&r.gjQ()&&w.hh()){r.ch=!0
r.fr=null}else if(s.gkL()){s.ay=!0
s.CW=null
s.fy=!1
s.fx.a9(0)}else return
q.NA(d)},
bex(d){var w,v,u,t=this
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
t.PN(u)
return u},
aKx(d){var w,v,u=this
if(!d.f)return d.a.b+" has died."
if(!d.e)return d.a.b+" is not sick."
w=u.x
if(w<=0)return y.D
u.x=w-1
d.e=!1
d.c=Math.min(100,d.c+20)
u.r+=3
v=d.a.b+" took the medicine and is better. +3 points."
u.PN(v)
return v},
aDc(d){var w,v,u,t
if(!d.f)return d.a.b+" has died."
if(d.r>=0)return d.a.b+" is already in hospital."
if(!d.e&&d.c>60)return d.a.b+" is not ill enough for the hospital."
w=this.e
v=D.d.bg(w,new A.bKm())
if(v<0)return"The hospital is full. Treat the patients first, they go home when they are better."
w=w[v]
u=d.a
w.a=u.a
w.b=100
w.c=0
d.r=v
t=u.b+" is in bed "+(v+1)+" of the hospital. Keep up with their care."
this.PN(t)
return t},
bjL(d){var w,v,u=this,t=u.e[d],s=t.a
if(s<0)return"This bed is empty."
if(t.b>70)return"The patient is cared for already."
w=u.x
if(w<=0)return y.D
u.x=w-1
t.b=100;++u.r
w=u.c
w===$&&C.c()
v=w[s].a.b+" was treated. +1 point."
u.PN(v)
return v},
aDI(d){var w,v=this
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
cRt(d){return d.r<0},
beI(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=C.a([],x.e3),e=d.d
e===$&&C.c()
w=e[a0]
if(w.c!=="outside")return f
v=new A.bKp(new A.bKr(w))
for(e=D.d.gaf(this.gC4()),u=new C.f5(e,this.gcRs()),t=this.d,s=0;u.C();){r=e.gR(0)
q=D.d.b3(t,new A.bKo(r))
p=v.$2(r,s).a
o=p[0]
n=p[1]
m=p[2]
l=p[3]
k=p[4]
p=r.a
j=q?0.4:m
i=q?"\ud83d\udcde ":""
h=r.gaDv(0)
r.gUg()
r=q?"":l
g=q?"":k
f.push(new A.a9U(p.a,a0,o,n,j,p.e,i+p.b+" "+h,q,0,r,g));++s}return f},
cYi(a2){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.r,j=l.w,i=l.x,h=l.y,g=l.z,f=l.as,e=l.Q,d=x.ez,a0=C.a([],d),a1=l.c
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
u=C.U(v,w)
for(r=a2.gqR(),q=r.length,t=0;t<r.length;r.length===q||(0,C.M)(r),++t){n=r[t]
u.n(0,""+n.a,n.gkL())}w=C.U(v,w)
for(r=D.d.gaf(a2.gqR()),q=new C.f5(r,new A.bKs());q.C();){m=r.gR(0)
w.n(0,""+m.a,m.gjQ())}return C.G(["v",1,"seed",l.a,"points",k,"food",j,"medicine",i,"served",h,"saved",g,"clock",f,"nextCall",e,"res",a0,"beds",a1,"calls",d,"wired",u,"plumbed",w],v,x.A)},
CT(d,e){return this.bnT(0,e)},
bnT(d,e){var w=0,v=C.j(x.H),u=1,t=[],s=this,r,q,p,o
var $async$CT=C.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return C.b(C.az(),$async$CT)
case 6:r=g
q=C.dR(s.cYi(e),x.N,x.A)
J.aI(q,"at",Date.now())
w=7
return C.b(r.ar("String","ngmy_community_v1",D.X.ap(q,null)),$async$CT)
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
return C.i($async$CT,v)}}
A.apy.prototype={
T(){return new A.bkh()}}
A.bkh.prototype={
gbju(){var w=this.r
return w===$?this.r=this.a.c:w},
Z(){this.a2()
this.ZU()},
ZU(){return this.c1W()},
c1W(){var w=0,v=C.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$ZU=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:m={}
w=3
return C.b(A.aTD(),$async$ZU)
case 3:l=e
if(t.c==null){w=1
break}m.a=null
if(l!=null){s=J.a5(l)
r=C.aK(s.h(l,"seed"))
q=r==null?null:D.k.N(r)
if(q==null)q=1
r=$.E7
if((r==null?null:r.b)===q){r.toString
t.e=r}else{r=A.aW4(q)
t.e=$.E7=r
A.haR(r,l)}m.a=A.fY1(l)
r=Date.now()
s=C.aK(s.h(l,"at"))
s=s==null?null:D.k.N(s)
p=D.k.E((r-(s==null?Date.now():s))/1000*0.15,0,90)
while(p>0){o=p>5?5:p
s=m.a
r=t.e
r===$&&C.c()
s.aDd(0,o,r)
p-=o}}else{s=$.E7
if(s==null)s=$.E7=A.aW4(D.o.F(Date.now(),1e5))
t.e=s
s=s.b
n=A.fY0(s,s)
m.a=n
n.NA(t.e)}$.ajO=m.a
t.m(new A.dRo(m,t))
t.f=C.dg(D.fA,new A.dRp(t))
case 1:return C.h(u,v)}})
return C.i($async$ZU,v)},
c7w(){var w,v,u,t=this,s=t.d
if(s==null||t.c==null)return
w=s.f
v=w.length===0?"":D.d.gI(w)
u=t.e
u===$&&C.c()
s.aDd(0,1,u)
if(w.length!==0&&D.d.gI(w)!==v)t.J2(D.d.gI(w))
if(++t.y%8===0)s.CT(0,t.e)
t.m(new A.dRB())},
q(){var w,v=this,u=v.f
if(u!=null)u.a4(0)
u=v.x
if(u!=null)u.a4(0)
u=v.d
if(u!=null){w=v.e
w===$&&C.c()
u.CT(0,w)}v.a1()},
J2(d){var w=this,v=w.x
if(v!=null)v.a4(0)
w.m(new A.dRv(w,d))
w.x=C.cK(D.tX,new A.dRw(w))},
abL(d){return this.bTw(d)},
bTw(d){var w=0,v=C.j(x.H),u,t=this,s,r,q
var $async$abL=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:q=B.CG[d.b]
if(d.c==="power")s=q.c
else{r=q.d
s=r>=0?r:q.c}r=t.e
r===$&&C.c()
r.e=s
r=t.c
r.toString
w=3
return C.b(C.a4(r,!1).cc(C.dX(new A.dRk(),!1,null,x.H)),$async$abL)
case 3:if(t.c==null){w=1
break}r=t.d
if(r!=null)r.NA(t.e)
r=t.d
if(r!=null)r.CT(0,t.e)
t.m(new A.dRl())
case 1:return C.h(u,v)}})
return C.i($async$abL,v)},
ajZ(d){return this.cFl(d)},
cFl(d){var w=0,v=C.j(x.H),u,t=this,s
var $async$ajZ=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:s=t.e
s===$&&C.c()
s.e=d.a.c
s=t.c
s.toString
w=3
return C.b(C.a4(s,!1).cc(C.dX(new A.dRE(),!1,null,x.H)),$async$ajZ)
case 3:if(t.c==null){w=1
break}s=t.d
if(s!=null)s.NA(t.e)
t.m(new A.dRF())
case 1:return C.h(u,v)}})
return C.i($async$ajZ,v)},
ZV(d,e){var w=null,v=e.j(0.18),u=C.m(14),t=C.J(e.j(0.7),D.r,1)
return C.p(w,C.d(d,w,w,w,w,w,w,C.l(w,w,e,w,w,w,w,w,w,w,w,12.5,w,w,D.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),D.f,w,w,new C.o(v,w,t,u,w,w,D.n),w,w,w,w,M.aju,w,w,w)},
Wu(d,e,f){var w=null
return new C.D(D.nm,C.B(C.a([new C.a7(62,w,C.d(d,w,w,w,w,w,w,A2.a9B,w,w,w),w),C.E(C.bx(C.m(6),C.ll(D.bz,w,w,8,w,D.k.E(e/100,0,1),new C.m6(f,x.dw)),D.ap),1)],x.p),D.m,w,D.e,D.i,0,w,w),w)},
PO(d,e,f){var w=null,v=e==null,u=v?D.ds:f.j(0.22),t=C.m(12),s=C.J(v?D.aZ:f,D.r,1)
return C.aB(w,C.p(w,C.d(d,w,w,w,w,w,w,C.l(w,w,v?D.bY:f,w,w,w,w,w,w,w,w,12.5,w,w,D.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),D.f,w,w,new C.o(u,w,s,t,w,w,D.n),w,w,w,w,D.no,w,w,w),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,e,w,w,w,w,w,w,!1,D.a4)},
aef(d,e){return this.PO(d,e,D.aC)},
PP(d,e){var w=null,v=C.a([e.j(0.1),B.Fo],x.O),u=C.m(18)
return C.p(w,d,D.f,w,w,new C.o(w,w,C.J(e.j(0.5),D.r,1),u,w,new C.a9(D.b4,D.b7,D.x,v,w,w),D.n),w,w,w,D.d3,D.bf,w,w,w)},
c7s(d){return this.PP(d,D.aZ)},
aZE(d,e,f){var w,v=null,u=this.gbju()===d,t=u?D.aC.j(0.22):D.c.j(0.06),s=C.m(14),r=u?D.aC:D.aZ
r=C.J(r,D.r,u?2:1)
w=f>0?e+" ("+f+")":e
return C.E(C.aB(v,C.p(v,C.at(C.d(w,v,v,v,v,v,v,C.l(v,v,u?D.aC:D.ad,v,v,v,v,v,v,v,v,12.5,v,v,D.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,v),D.f,v,v,new C.o(t,v,r,s,v,v,D.n),v,v,v,D.jz,D.jP,v,v,v),D.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new A.dRD(this,d),v,v,v,v,v,v,!1,D.a4),1)},
axs(d,e){return this.aZE(d,e,0)},
bGf(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=d.d
if(l.length===0)return new C.D(D.eu,C.x(B.dhD,D.m,m,D.e,D.i,0,D.p),m)
w=x.p
v=C.a([],w)
for(u=l.length,t=0;t<l.length;l.length===u||(0,C.M)(l),++t){s=l[t]
r=s.c==="power"
q=r?D.bG:D.co
p=B.CG[s.b]
o=r?"\u26a1 Power":"\ud83d\udeb0 Leak"
r=r?D.bG:D.co
v.push(n.PP(C.x(C.a([new C.cd(D.aM,D.e,D.i,D.m,m,D.p,m,0,C.a([new A.acE(p.e,44,m),D.at,new C.bA(1,D.bc,new C.y(p.b,m,D.hD,m,m,m,m,m,m,m,m,m),m),n.ZV(o+"  +"+s.e,r)],w),m),D.O,new C.y('"'+s.d+'"',m,B.fm6,m,m,m,m,m,m,m,m,m),D.W,new C.bM(D.a8,m,m,n.aef("\ud83d\udd27 Go and fix it",new A.dRj(n,s)),m)],w),D.E,m,D.e,D.i,0,D.p),q))}return C.x(v,D.m,m,D.e,D.i,0,D.p)},
c7u(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=x.p,k=C.a([],l),j=d.c
j===$&&C.c()
w=j.length
v=0
for(;v<j.length;j.length===w||(0,C.M)(j),++v){u=j[v]
t=u.f
if(!t)s=D.aZ
else s=u.gUg()==="fine"?D.bj:D.cs
t=t?1:0.5
r=u.a
q=u.gaDv(0)
p=u.gUg()
o=u.gUg()==="fine"?D.es:D.eO
r=C.a([new C.cd(D.aM,D.e,D.i,D.m,m,D.p,m,0,C.a([new A.acE(r.e,50,m),D.at,new C.bA(1,D.bc,C.x(C.a([new C.y(r.b+"  "+q,m,D.hD,m,m,m,m,m,m,m,m,m),new C.y(r.f,m,B.aSa,m,m,m,m,m,m,m,m,m),new C.y("Now: "+p,m,new C.F(!0,o,m,m,m,m,12.5,D.H,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m,m,m,m,m,m,m)],l),D.E,m,D.e,D.i,0,D.p),m)],l),m),D.O,n.Wu("Food",100-u.b,D.cR),n.Wu("Health",u.c,D.bj),n.Wu("Home",u.d,D.co)],l)
if(u.f){q=n.aef("\ud83c\udf5e Feed",new A.dRq(n,d,u))
p=n.PO("\ud83d\udc8a Medicine",u.e?new A.dRr(n,d,u):m,D.bw)
D.d.v(r,C.a([D.am,new C.Cy(D.bC,8,8,D.bq,C.a([q,p,n.PO("\ud83c\udfe5 Hospital",u.r>=0?m:new A.dRs(n,d,u),D.cs),n.PO("\ud83c\udfe0 Visit",new A.dRt(n,u),D.b2)],l),m)],l))}k.push(n.PP(new C.kz(t,C.x(r,D.E,m,D.e,D.i,0,D.p),m),s))}return C.x(k,D.m,m,D.e,D.i,0,D.p)},
c7t(d){var w,v,u,t,s=null,r=x.p,q=C.a([B.ekG],r)
for(w=d.e,v=0;v<w.length;++v){u=w[v].a<0
t=u?D.aZ:D.cs
q.push(this.PP(u?new C.cd(D.aM,D.e,D.i,D.m,s,D.p,s,0,C.a([B.fLA,D.at,new C.y("Bed "+(v+1)+": empty",s,B.ffy,s,s,s,s,s,s,s,s,s)],r),s):new C.fe(new A.dRn(this,d,v),s),t))}return C.x(q,D.m,s,D.e,D.i,0,D.p)},
c7v(d){var w=this,v=null,u=x.p,t=w.PP(C.B(C.a([B.fx1,D.at,B.bEn,w.aef("Buy",new A.dRy(w,d))],u),D.m,v,D.e,D.i,0,v,v),D.cR),s=w.PP(C.B(C.a([B.fSG,D.at,B.bED,w.PO("Buy",new A.dRz(w,d),D.bw)],u),D.m,v,D.e,D.i,0,v,v),D.bw),r=C.a([B.fMB,D.am,C.d("Calls answered: "+d.y+"\nPatients sent home better: "+d.z+"\nPeople lost: "+d.gcMs(),v,v,v,v,v,v,B.aTc,v,v,v)],u)
if(d.gC4().length===0)D.d.v(r,C.a([D.W,w.aef("Start a new community",new A.dRA(w))],u))
return C.x(C.a([t,s,w.c7s(C.x(r,D.E,v,D.e,D.i,0,D.p))],u),D.m,v,D.e,D.i,0,D.p)},
B(d){var w,v,u,t,s,r,q=this,p=null,o=q.d
if(o==null)w=D.ms
else{w=x.p
v=C.B(C.a([C.aH(p,p,p,p,S.nv,p,p,p,new A.dRG(d),p,p,p,p,p,p),B.bE3,q.ZV("\u2b50 "+o.r,D.aC)],w),D.m,p,D.e,D.i,0,p,p)
u=q.ZV("\ud83c\udf5e "+o.w,D.cR)
t=q.ZV("\ud83d\udc8a "+o.x,D.bw)
s=o.e
s=C.B(C.a([u,D.ac,t,D.ac,q.ZV("\ud83c\udfe5 "+new C.Z(s,new A.dRH(),C.T(s).k("Z<1>")).gL(0)+"/"+s.length,D.cs)],w),D.m,p,D.b8,D.i,0,p,p)
t=C.B(C.a([q.aZE("calls","\ud83d\udcde Calls",o.d.length),q.axs("people","\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc67 People"),q.axs("hospital","\ud83c\udfe5 Hospital"),q.axs("shop","\ud83d\uded2 Shop")],w),D.m,p,D.e,D.i,0,p,p)
r=q.gbju()
A:{if("people"===r){u=q.c7u(o)
break A}if("hospital"===r){u=q.c7t(o)
break A}if("shop"===r){u=q.c7v(o)
break A}u=q.bGf(o)
break A}w=C.a([new C.D(B.bCu,v,p),new C.D(D.BH,s,p),new C.D(B.bDo,t,p),D.O,C.E(C.cr(C.a([u],w),p,D.Nc,p,p,D.ah,!1),1)],w)
if(q.w!=null){v=D.e_.j(0.96)
u=C.m(14)
t=C.J(D.bj,D.r,1)
s=q.w
s.toString
w.push(C.p(p,C.d(s,p,p,p,p,p,p,B.fic,p,p,p),D.f,p,p,new C.o(v,p,t,u,p,p,D.n),p,p,p,G.ajx,D.bf,p,p,1/0))}w=C.x(w,D.m,p,D.e,D.i,0,D.p)}return C.c7(p,D.c0,C.bl(!0,w,!0,!1,D.af,!0,!0),p,!1,!1,p,p)}}
A.acE.prototype={
B(d){var w=null,v=this.d
return new C.a7(v,v,C.b4(w,w,w,new A.bfa(this.c,w),D.ax),w)},
gY(d){return this.d}}
A.bfa.prototype={
a3(d,e){var w,v,u,t,s=e.a,r=s/2,q=$.S(),p=C.I()
p.r=D.ds.gp(0)
d.ad(new C.t(r,r),r,p)
p=d.a
J.bm(p.save())
q=new C.aF(q.r,D.ag,null,null,C.a([],x.g))
r=0+s
q.D(new C.jE(new C.a3(0,0,r,r)))
d.mE(0,q)
q=s*0.1
r=s*0.78
w=s*0.5
v=C.I()
u=this.b
v.r=u.c.gp(0)
d.dO(new C.a3(q,r,q+s*0.8,r+w),v)
v=s*0.27
r=s*0.16
t=C.I()
t.r=u.a.gp(0)
d.dO(new C.a3(v,r,v+s*0.46,r+s*0.56),t)
t=s*0.24
r=C.I()
r.r=u.b.gp(0)
d.e3(new C.a3(t,q,t+s*0.52,q+w),3.14,3.14,!0,r)
r=s*0.44
q=s*0.035
t=C.I()
t.r=D.nf.gp(0)
d.ad(new C.t(s*0.42,r),q,t)
t=C.I()
t.r=D.nf.gp(0)
d.ad(new C.t(s*0.58,r),q,t)
t=s*0.4
q=C.I()
q.b=D.aa
q.c=1.4
q.r=D.ej.gp(0)
d.e3(new C.a3(t,w,t+s*0.2,w+s*0.12),0.2,2.7,!1,q)
p.restore()},
aw(d){return!1}}
A.fK.prototype={}
A.Cx.prototype={}
A.jz.prototype={}
A.T_.prototype={}
A.b8W.prototype={
gjO(){return this.a==="ok"}}
A.mb.prototype={}
A.fn.prototype={}
A.E3.prototype={}
A.pO.prototype={}
A.abD.prototype={}
A.oj.prototype={}
A.aVY.prototype={
gwD(){var w=this.c
return w.c>=2&&A.L7(A.t0(this.a),w).a==="ok"},
gdc(d){return this.c}}
A.a5d.prototype={
gz5(){var w,v,u=this.p4,t=u==="ptrap"
if(t||u==="faucet"){w=this.RG
if(w==null)return!1
if(t)if(w.a.a===3){u=w.b
u=new C.bc(u,C.a6(u).k("bc<2>")).d5(0,new A.bTH())&&w.c}else u=!1
else u=A.fyw(w)&&w.f
return u}v=this.R8
return v!=null&&v.c>=2&&A.L7(A.t0(u),v).a==="ok"},
In(d){var w
if(this.c!=="outside"){w=this.CW
w=w!=null?w.tf(d):!this.ay}else w=!0
return w},
ga60(){var w=this.p4
if(w.length===0)w=this.In(2)
else w=w!=="fan"||this.gz5()
return w},
gMe(){var w=this.p4
if(w.length===0)w=this.In(3)
else w=!D.d.t(B.jV,w)||this.gz5()
return w},
ganp(){var w=this.p4
if(w.length===0)w=this.In(0)
else w=!D.d.t(B.lH,w)||this.gz5()
return w},
gex(d){var w,v
if(this.ok)w=260
else{v=this.c
A:{if("bathroom"===v){w=110
break A}if("kitchen"===v){w=140
break A}if("living"===v){w=180
break A}if("hall"===v){w=480
break A}if("outside"===v){w=2600
break A}w=130
break A}}return w},
gho(d){var w,v=180
if(!this.ok){w=this.c
A:{if("bathroom"===w){v=100
break A}if("kitchen"===w){v=110
break A}if("living"===w){v=120
break A}if("hall"===w)break A
if("outside"===w){v=2100
break A}v=112
break A}}return v},
gkL(){var w,v=this
if(v.c!=="outside"){w=v.p4
if(w.length!==0)w=w==="ptrap"||w==="faucet"||v.gz5()
else{w=v.CW
w=w==null?null:w.gbkj()
if(w==null)w=!v.ay}}else w=!0
return w},
gjQ(){var w=this,v=w.c
if(v==="bathroom"||v==="kitchen"){v=w.p4
if(v.length!==0)v=!(v==="ptrap"||v==="faucet")||w.gz5()
else{v=w.fr
v=v==null?null:v.gwD()
if(v==null)v=!w.ch}}else v=!0
return v},
BS(d){var w,v,u,t
for(w=this.x,v=w.length,u=0;u<v;++u){t=w[u]
if(t.a===d)return t}return null},
dz(d,e,f,g){var w=this,v=w.y++,u=f==null?0:f,t=new A.mb(v,e,u,g==null?w.gho(0)*0.6:g)
w.x.push(t)
w.a3V(0,t)
return t},
M(d,e){return this.dz(0,e,null,null)},
cIu(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=d.k1
if(a0!=null){w=d.c
w=w==="outside"||w==="hall"}else w=!0
if(w)return
v=A.h85(d,A.aPp(a0),0)
w=v.c
u=v.a/2
t=w-u-6
s=w+u+6
for(w=D.d.gaf(d.x),u=new C.f5(w,new A.bTG());u.C();){r=w.gR(0)
q=B.hy.h(0,r.b)
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
i=d.gex(0)/2-m-1
m=k<=i
if(m){l=r.c
l=Math.abs(l-k)<=Math.abs(l-j)}else l=!1
if(!l)m=j<-i&&m
else m=!0
if(m)r.c=k
else if(j>=-i)r.c=j
else r.d=52+q+1}else{q=q==="left"
h=q?-d.gex(0)/2:d.gex(0)/2
m=r.c
l=o/2
if(q?m-l<h+52:m+l>h-52){m=r.d
g=n/2
m=m+g<=t||m-g>=s}else m=!0
if(m)continue
m=n/2
f=s+m+1
e=t-m-1
if(f<=d.gho(0)-m-1)r.d=f
else if(e>=m+1)r.d=e
else r.c=q?h+52+l+1:h-52-l-1}}},
a3V(d,e){var w,v,u,t,s,r=this,q=e.b,p=B.hy.h(0,q)
p.toString
w=(e.e&1)===1
v=w?p.d:p.c
u=w?p.c:p.d
p=v/2
e.c=D.k.E(e.c,-r.gex(0)/2+p+1,r.gex(0)/2-p-1)
p=e.d
t=u/2
s=r.c==="outside"?-760+t:t+1
e.d=D.k.E(p,s,r.gho(0)-t-1)
if(D.d.t(B.RA,q)){e.c=D.k.V(e.c/40)*40
e.d=D.k.V(e.d/40)*40}}}
A.aW3.prototype={
bz6(d){var w,v,u
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
break B}u=A.zf(0,w,v,0,0,1,1,C.a([],x.dY))
u.p4=d
u.go=d==="fan"?"fan":"light"
if(d==="gfci")u.Q=5
u.ch=u.ay=!1
u.Q=v==="bathroom"||v==="kitchen"?5:0
u.ok=!0
u.k1="tv150"
u.p2=!0
u.p3=Math.max(0,D.d.bg(E.kk,new A.bUh()))
this.d=C.a([u],x.D)},
cSn(){var w,v,u,t,s,r
for(w=this.gqR(),v=w.length,u=0;u<w.length;w.length===v||(0,C.M)(w),++u){t=w[u]
t.fr=t.CW=null
s=t.ay=!0
r=t.c
t.ch=r!=="bathroom"?r==="kitchen":s
t.fy=!1
t.fx.a9(0)
D.d.a9(t.id)}},
c7x(){var w,v,u,t,s,r,q,p=this,o="back",n="bedroom",m="bathroom",l=new C.e9()
l.d3(p.b)
w=new A.bUi()
v=x.dY
u=C.a([B.bHX,B.bHU,B.bHV],v)
for(t=0;t<7;++t){s=B.ciQ[t]
u.push(new A.oj(!0,o,-150+s.a*50,s.b))}r=p.d=C.a([A.zf(0,"Bedroom 1",n,0,0,2,2,C.a([w.$1(-48)],v)),A.zf(1,"Bedroom 2",n,2,0,2,2,C.a([w.$1(-48)],v)),A.zf(2,"Bathroom 1",m,4,0,1,2,C.a([B.a0A],v)),A.zf(3,"Bedroom 3",n,5,0,2,2,C.a([w.$1(-48)],v)),A.zf(4,"Bathroom 2",m,7,0,2,2,C.a([B.a0A],v)),A.zf(5,"Hall","hall",0,2,9,1,u),A.zf(6,"Bedroom 4",n,0,3,2,2,C.a([w.$1(-48)],v)),A.zf(7,"Bedroom 5",n,2,3,2,2,C.a([w.$1(-48)],v)),A.zf(8,"Bathroom 3",m,4,3,1,2,C.a([B.a0A],v)),A.zf(9,"Kitchen","kitchen",5,3,2,2,C.a([new A.oj(!1,o,-26,5),B.bHZ],v)),A.zf(10,"Living room","living",7,3,2,2,C.a([new A.oj(!1,o,-70,5),B.bHY,B.bHW],v)),A.zf(11,"Garden","outside",0,5,9,1,C.a([B.bHT],v))],x.D)
for(v=r.length,t=0;t<r.length;r.length===v||(0,C.M)(r),++t){q=r[t]
u=q.c
if(u==="outside"){p.aTU(q)
continue}q.go=u==="bedroom"?"fan":"light"
q.ay=l.ah()<0.6
q.ch=(u==="bathroom"||u==="kitchen")&&l.ah()<0.7
D.d.hv(q.z,0,3,l.au(8))
A:{if("bathroom"===u){u=5+l.au(2)
break A}if("kitchen"===u){u=5+l.au(2)
break A}if("bedroom"===u){u=2+l.au(3)
break A}if("living"===u){u=l.au(2)
break A}u=l.au(2)
break A}q.Q=u
q.as=l.au(4)
p.aTU(q)}v=p.d
u=v[5]
u.k2=u.k1="tv100"
u.p2=!0
v[3].ay=!0
v[2].ch=!0},
aTU(b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4="plant",a5="roadcross",a6="road",a7="roundabout",a8="house2",a9="bighouse",b0="adboard",b1="flowers",b2=b3.gex(0)/2
switch(b3.c){case"bedroom":b3.dz(0,"rug",0,b3.gho(0)*0.55)
b3.dz(0,"bed",24,46)
b3.dz(0,"nightstand",-8,14)
b3.dz(0,"wardrobe",-b2+12,70).e=1
b3.dz(0,"desk",b2-14,100).e=3
break
case"living":b3.dz(0,"rug",0,70)
b3.dz(0,"sofa",0,100)
b3.dz(0,"coffee",0,68)
b3.dz(0,"armchair",66,70)
b3.dz(0,a4,76,14)
b3.dz(0,"lamp",-76,14)
break
case"kitchen":b3.dz(0,"dining",0,78)
b3.dz(0,"chair",-24,78).e=1
b3.dz(0,"chair",24,78).e=3
b3.dz(0,a4,58,20)
break
case"bathroom":b3.dz(0,"rug",0,62).e=0
b3.dz(0,a4,b3.gex(0)/2-12,b3.gho(0)-12)
break
case"outside":for(w=-780;w<=780;w+=40){v=Math.abs(w)<1
b3.dz(0,v?a5:a6,w,420)
b3.dz(0,v?a5:a6,w,860)}for(u=200;u<=820;u+=40){if(Math.abs(u-420)<1||Math.abs(u-860)<1)continue
b3.dz(0,a6,0,u).e=1}for(t=0;t<2;++t){s=B.dlo[t]
for(u=460;u<859;u+=40)b3.dz(0,a6,s,u).e=1}for(t=0;t<3;++t){s=B.dln[t]
b3.dz(0,a7,s,420)
b3.dz(0,a7,s,860)}r=new A.bUj(b3)
b3.dz(0,"shop",-250,225)
b3.dz(0,"hospital",250,215)
b3.dz(0,"firestation",-480,225)
b3.dz(0,"school",520,210)
for(t=0;t<14;++t){v=B.d9m[t]
w=v.a
u=v.b
if(r.$4(w,u,60,40))b3.dz(0,"billboard",w,u)}for(t=0;t<4;++t){v=B.dpA[t]
w=v.a
u=v.b
if(r.$2(w,u))b3.dz(0,a8,w,u)}for(t=0;t<3;++t){v=B.cXy[t]
u=v.a
q=v.b
p=v.c
for(v=u<900,w=-800;w<=800;w+=q){o=Math.abs(w)
if(o<100)continue
if(v&&o>400)continue
if(r.$2(w,u))b3.dz(0,p&&D.o.F(D.k.eb(w,q),2)===0?a9:a8,w,u)}}for(t=0;t<2;++t){v=B.cwa[t]
w=v.a
u=v.b
if(r.$2(w,u))b3.dz(0,a9,w,u)}for(w=-1220;w<=1220;w+=40){if(Math.abs(w)>780){b3.dz(0,a6,w,420)
b3.dz(0,a6,w,860)}b3.dz(0,a6,w,1460)
b3.dz(0,a6,w,1700)}for(u=900;u<1459;u+=40)b3.dz(0,a6,0,u).e=1
v=C.a([],x._)
for(o=b3.x,n=o.length,t=0;t<o.length;o.length===n||(0,C.M)(o),++t){m=o[t]
l=m.b
if(D.d.t(B.RA,l)||l==="roundabout")v.push(m)}k=new A.bUl(v,b3)
j=new A.bUm(b3,new A.bUp(b3))
j.$3("gasstation",6,B.d45)
j.$3("dmv",1,B.dsj)
j.$3("ubstation",3,B.cVH)
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
e=B.hy.h(0,f)
if(k.$4(w,u,e.c,e.d)){b3.dz(0,f,w,u);++i}}++g}++h}for(d=0,t=0;t<11;++t,d=a0){v=B.cYt[t]
a0=d+1
b3.dz(0,v.b,v.a,1560).f=D.o.F(d,6)}for(t=0;t<11;++t,d=a0){v=B.dnr[t]
a0=d+1
b3.dz(0,v.b,v.a,1860).f=D.o.F(d,6)}b3.dz(0,"townsign",0,640)
for(t=0;t<4;++t){v=B.dhT[t]
b3.dz(0,"cornersign",v.a,v.b)}for(t=0;t<5;++t)b3.dz(0,b0,B.d7v[t],2045)
for(t=0;t<4;++t)b3.dz(0,b0,B.dlt[t],-690)
for(t=0;t<4;++t){u=B.cqx[t]
a1=b3.dz(0,b0,-1245,u)
a1.e=1
a1.c=-1245
b3.a3V(0,a1)
a2=b3.dz(0,b0,1245,u)
a2.e=3
a2.c=1245
b3.a3V(0,a2)}for(w=-1200;w<=1200;w+=480){for(t=0;t<4;++t)b3.dz(0,"pole",w,B.cuT[t])
for(v=Math.abs(w)<1100,o=w+240,t=0;t<4;++t){u=B.cC0[t]
if(v)b3.dz(0,"lamppost",o,u)}}b3.dz(0,"car",-300,490).e=2
b3.dz(0,"ambulance",110,345)
b3.dz(0,"firetruck",-385,345)
for(t=0;t<10;++t){v=B.drc[t]
w=v.a
u=v.b
b3.dz(0,Math.abs(w)>400||u>1000?"pine":"tree",w,u)}b3.dz(0,"bush",-70,20)
b3.dz(0,"bush",70,20)
b3.dz(0,b1,-30,24)
b3.dz(0,b1,30,24)
b3.dz(0,b1,90,205)
b3.dz(0,"bench",-60,195)
b3.dz(0,"bench",150,300)
b3.dz(0,"pond",-160,1340)
b3.dz(0,"dog",60,60)
b3.dz(0,"cat",-50,80)
b3.dz(0,"cow",-640,1280)
b3.dz(0,"cow",-570,1330)
b3.dz(0,"sheep",-500,1300)
b3.dz(0,"horse",560,1330)
b3.dz(0,"chicken",-440,1340)
for(a3=0;a3<4;++a3)b3.dz(0,"fence",-680+a3*64,1220)
for(t=0;t<6;++t){v=B.cBz[t]
b3.dz(0,"crate",v.a,v.b)}break
case"hall":default:}},
gqR(){var w,v,u,t=C.a([],x.D),s=this.d
s===$&&C.c()
w=s.length
v=0
for(;v<s.length;s.length===w||(0,C.M)(s),++v){u=s[v]
if(u.c!=="outside")t.push(u)}return t},
gcZ4(){var w=this.gqR()
return new C.Z(w,new A.bUt(),C.T(w).k("Z<1>")).gL(0)},
gcVL(){var w=this.d
w===$&&C.c()
return new C.Z(w,new A.bUs(),C.T(w).k("Z<1>")).gL(0)},
gcVK(){var w=this.d
w===$&&C.c()
return new C.Z(w,new A.bUr(),C.T(w).k("Z<1>")).gL(0)},
gcOt(){var w=this.gqR()
return new C.Z(w,new A.bUq(),C.T(w).k("Z<1>")).gL(0)}}
A.IS.prototype={
T(){var w,v,u,t,s=new C.wo()
$.x1()
s.h2(0)
w=$.aw()
v=$.hvV()
u=x.S
t=C.a([],x.aQ)
return new A.aEp(s,B.azu,new C.ez("",w),B.dg6,B.rG,B.rG,D.CW,C.aY(x.N),new C.cB(null,x.eF),v,C.U(u,x.i),C.aY(u),t,D.cZ)}}
A.aEp.prototype={
ghI(){var w,v,u=$.ajO
if(u!=null){w=u.a
v=this.d
v===$&&C.c()
v=w===v.b
w=v}else w=!1
return w?u:null},
azx(){var w,v,u=this.ghI()
if(u==null)u=null
else{w=this.d
w===$&&C.c()
v=w.d
v===$&&C.c()
w=u.beI(w,v[w.e].a)
u=w}this.fr=u==null?B.azu:u},
gbir(){var w=this.d
w===$&&C.c()
w=w.gqR()
return new C.Z(w,new A.ec5(),C.T(w).k("Z<1>")).gL(0)},
Z(){var w,v,u,t,s,r=this
r.a2()
w=r.a.r
if(w.length!==0)w=r.d=A.hEO(w)
else{w=$.E7==null
if(w){w=D.o.F(Date.now(),1e5)
$.E7=A.aW4(w)
r.ej=!0}w=$.E7
w.toString
w=r.d=w}v=r.a
v.toString
u=w.c
w.c=u
u=new A.xd(-0.05,0.1,120,B.fXi,$.aw())
u.f=560
r.e=u
v=v.f
if(v==="city")w.e=11
if(v.length!==0){w=w.gqR()
t=new C.Z(w,new A.ec2(r),C.T(w).k("Z<1>"))
if(!t.gan(0)){w=r.d
w===$&&C.c()
w.e=t.gI(0).a}}A.aVQ($.ahz)
A.hgI()
r.aiQ()
r.azx()
w=r.d
w===$&&C.c()
v=w.d
v===$&&C.c()
w=v[w.e]
v=r.gbir()
u=r.d
s=u.d
s===$&&C.c()
r.f=A.hqH(w,s[u.e].c!=="outside",B.aQ3,"look",v,r.fr,0)
r.aeg(!0)
r.YX()
r.fx=C.dg(D.fX,new A.ec3(r))
$.aV.x1$.push(new A.ec4(r))},
q(){var w=this,v=w.p1
if(v!=null)v.bR(0)
v=w.RG
if(v!=null)v.bR(0)
v=w.b1
if(v!=null)v.bR(0)
v=w.ch
if(v!=null)v.a4(0)
v=w.dx
if(v!=null)v.a4(0)
v=w.fx
if(v!=null)v.a4(0)
v=w.bv
if(v!=null)v.a4(0)
v=w.P
if(v!=null)v.a4(0)
w.a1()},
c1r(){var w,v=this.d
v===$&&C.c()
w=v.a
A:{if("switch"===w){v="The ceiling light is already in. Tap the red switch on the wall and wire it. Then flip it to see the light work."
break A}if("outlet"===w){v="Tap the red outlet on the wall and wire it. Then plug in a lamp or a TV to test it."
break A}if("gfci"===w){v="Tap the red GFCI outlet and wire it. Then plug in a hair dryer to test it."
break A}if("fan"===w){v="Tap the ceiling fan and wire it. Then flip the wall switch and watch it spin."
break A}if("ptrap"===w){v="The sink has no drain yet. Tap the sink and build the drain under it."
break A}v="The faucet is not connected yet. Tap the sink and connect the hoses."
break A}return v},
aeg(d){var w,v,u,t,s,r,q=this,p=q.d
p===$&&C.c()
w=p.d
w===$&&C.c()
v=w[p.e]
if(q.z){u=new A.q(0,40,v.gho(0)*0.5)
t=Math.max(v.gex(0),v.gho(0))*0.6
p=q.e
p===$&&C.c()
p.e=20
p.f=260
p.w=-1.2
p.x=1.2
p.r6(!0)
s=0.12
r=-0.05}else if(v.c==="outside"){p=q.e
p===$&&C.c()
p.e=30
p.f=2400
p.w=0.03
p.x=1.35
p.r6(!0)
u=B.fXf
t=540
s=0.35
r=-0.25}else if(q.x){u=new A.q(0,46,v.gho(0)*0.1)
t=v.gho(0)*0.74
p=q.e
p===$&&C.c()
p.e=6
p.f=v.gho(0)*0.78
p.w=0.02
p.x=1.35
p.r6(!0)
s=0.05
r=0}else{u=new A.q(0,30,v.gho(0)*0.45)
t=(v.gex(0)*1.2>v.gho(0)*1.4?v.gex(0)*1.2:v.gho(0)*1.4)+30
p=q.e
p===$&&C.c()
p.e=6
p.f=560
p.w=0.1
p.x=1.35
p.r6(!0)
s=0.5
r=-0.12}p=q.e
if(d){p===$&&C.c()
p.d=u
p.c=t
p.a=r
p.b=s}else{p===$&&C.c()
p.hQ(t,s,u,r)}},
xX(){return this.aeg(!1)},
bNt(d,e){var w,v,u,t,s,r,q,p,o=this,n=o.e
n===$&&C.c()
w=n.cOB(d,e)
if(w==null)return
n=o.d
n===$&&C.c()
v=n.d
v===$&&C.c()
u=v[n.e]
t=o.aJ
if(t!=null){n=t.at
n===$&&C.c()
n.at=new C.z(D.k.E(w.a,-138,138),D.k.E(w.c,12,316))}else if(o.z){s=D.k.E(w.a,-u.gex(0)/2+10,u.gex(0)/2-10)
r=D.k.E(w.c,10,u.gho(0)-10)
o.e.apF(new A.q(s,48,r))}else{n=u.c==="outside"
if(n&&o.aL&&o.aC!=null){n=o.aC
n.toString
n.at=new C.z(D.k.E(w.a,-u.gex(0)/2+12,u.gex(0)/2-12),D.k.E(w.c,-290,u.gho(0)-12))}else{v=o.e
q=w.a
p=w.c
if(n)v.apG(Math.max(70,v.c*0.4),0.32,new A.q(q,30,p))
else{n=D.k.E(q,-u.gex(0)/2+8,u.gex(0)/2-8)
p=D.k.E(p,8,u.gho(0)-8)
v.apG(Math.max(36,o.e.c*0.35),0.2,new A.q(n,40,p))}}}A.fV(560,50,0.25,"tri")},
iC(){var w,v,u,t,s,r,q,p,o=this
o.azx()
w=o.aJ
if(w!=null){v=w.ay
v===$&&C.c()}else{v=o.d
v===$&&C.c()
u=v.d
u===$&&C.c()
v=u[v.e]
u=o.r
t=o.Q
s=o.gbir()
if(!o.z)if(o.x){r=o.d
q=r.d
q===$&&C.c()
r=q[r.e].c!=="outside"&&o.cx==null}else r=!1
else r=!0
q=o.fr
p=o.bG
v=A.hqH(v,r,p!=null?C.eC([100+p.a],x.S):B.aQ3,u,s,q,t)}o.f=v},
eh(d,e){var w=this,v=w.ch
if(v!=null)v.a4(0)
w.m(new A.eaQ(w,d,e))
w.ch=C.cK(D.eo,new A.eaR(w))},
iD(d){return this.eh(d,!0)},
PQ(d){this.m(new A.eaS(this,d))
A.fV(660,50,0.25,"tri")},
axt(d,e){var w,v=this,u=v.d
u===$&&C.c()
if(d!==u.e){u=u.d
u===$&&C.c()
u=d>=u.length}else u=!0
if(u)return
if(v.aL&&d!==11)v.a2E()
v.cL=v.bG=v.aJ=null
if(!e&&v.cx!=null)v.S5()
v.m(new A.e9o(v,d))
u=v.d
w=u.d
w===$&&C.c()
u=w[u.e]
if(u.c==="outside")v.aC=A.hk7(u,0,24)
v.xX()
A.fV(520,60,0.25,"tri")},
Az(d){return this.axt(d,!1)},
aXn(d){var w,v,u,t=this
if(d===700){w=t.d
w===$&&C.c()
v=w.d
v===$&&C.c()
return v[w.e].ganp()}if(d===701){w=t.d
w===$&&C.c()
v=w.d
v===$&&C.c()
w=v[w.e]
return w.p4.length!==0||w.In(1)}if(d===702){w=t.d
w===$&&C.c()
v=w.d
v===$&&C.c()
return v[w.e].gMe()}if(d===703){w=t.d
w===$&&C.c()
v=w.d
v===$&&C.c()
return v[w.e].ga60()}if(d>=800&&d<820){u=d-800
w=t.d
w===$&&C.c()
v=w.d
v===$&&C.c()
w=v[w.e].id
return u<w.length&&w[u].gwD()}if(d===720){w=t.d
w===$&&C.c()
v=w.d
v===$&&C.c()
return v[w.e].ganp()}if(d===721){w=t.d
w===$&&C.c()
v=w.d
v===$&&C.c()
w=v[w.e]
return w.p4.length!==0||w.In(1)}if(d>=722&&d<728){u=d-720-2
w=t.d
w===$&&C.c()
v=w.d
v===$&&C.c()
w=v[w.e].id
return u<w.length&&w[u].gwD()}w=t.d
w===$&&C.c()
v=w.d
v===$&&C.c()
return v[w.e].gkL()},
b8z(){var w,v,u=this,t=u.d
t===$&&C.c()
w=t.d
w===$&&C.c()
v=w[t.e].go==="fan"
u.m(new A.ebi(u))
t=u.d
w=t.d
w===$&&C.c()
if(w[t.e].fy)t=v?"The fan spins.":"The light is on."
else t=v?"The fan stops.":"The light is off."
u.iD(t)
t=u.d
w=t.d
w===$&&C.c()
A.fV(w[t.e].fy?900:500,60,0.25,"tri")},
c7F(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this
if(a0===0)return
if(a0>=19e3&&a0<19004){w=a0-19e3
v=d.d
v===$&&C.c()
u=v.d
u===$&&C.c()
t=u[v.e]
v=D.o.F(w,2)===0?-1:1
s=v*(t.gex(0)/2-14)
r=w<2?14:t.gho(0)-14
q=Math.atan2(-s,-(t.gho(0)/2-r))
w=Math.cos(0.12)
v=Math.sin(q)
u=Math.sin(0.12)
p=Math.cos(0.12)
o=Math.cos(q)
n=d.e
n===$&&C.c()
n.e=6
n.hQ(26,0.12,new A.q(s+26*w*v,106-26*u,r-26*p*o),q)
d.eh("You are looking from the camera in the corner. Drag to look round, or tap a camera for another corner.",!0)
A.fV(700,70,0.25,"tri")
return}if(a0>=2e4&&a0<23e3){w=d.d
w===$&&C.c()
v=w.d
v===$&&C.c()
m=v[w.e].BS(a0-2e4)
if(m!=null)d.bTy(m)
return}if(a0===19502){w=d.aJ
if((w==null?null:w.a==="tower")===!0)d.m(new A.eal(d))
return}if(a0===19500||a0===19501){l=d.aJ
if(l!=null)if(l.c)d.Yv(l)
else d.eh("This one works: the house has power.",!0)
return}if(a0>=900&&a0<920){d.cqL(a0-900)
return}if(a0>=100&&a0<200){w=d.d
w===$&&C.c()
v=w.d
v===$&&C.c()
k=v[w.e].BS(a0-100)
w=d.d
v=w.d
v===$&&C.c()
u=!1
if(v[w.e].c==="outside")if(d.r!=="furniture")if(k!=null){w=k.b
w=w==="hospital"||w==="shop"}else w=u
else w=u
else w=u
if(w){d.A2(k.b)
return}if(d.r!=="furniture")return
d.m(new A.eam(d,a0))
w=d.d
v=w.d
v===$&&C.c()
m=v[w.e].BS(d.Q)
if(m!=null)d.iD(B.hy.h(0,m.b).a+": move it with the arrows.")
return}if(a0===300||a0===301||a0===302){if(d.r!=="walls")return
d.m(new A.ean(d,a0))
d.iD("Wall picked. Choose a paint colour.")
return}if(a0>=600&&a0<620){j=a0-600
w=d.d
w===$&&C.c()
v=w.d
v===$&&C.c()
if(j>=v[w.e].w.length)return
if(d.r==="doors"){d.m(new A.eao(d,j))
w=d.d
v=w.d
v===$&&C.c()
A.fV(v[w.e].at.t(0,j)?700:450,70,0.25,"tri")
return}d.bNm(j)
return}w=a0===700
v=!w
i=!0
if(v)if(a0!==701){if(a0!==702)if(a0!==703)if(!(a0>=800&&a0<820))u=a0>=720&&a0<728
else u=i
else u=i
else u=i
i=u}if(d.w&&i){h=d.aXn(a0)
A.fV(h?1400:500,160,0.25,"tri")
w=h?"The tester glows and beeps: LIVE, 120 volts. Never touch a live wire. Switch the breaker off first.":"The tester stays dark: no power here. It still needs wiring."
d.eh(w,!h)
return}if(!v||a0===701){if(d.aXn(a0))d.az8(w?0:1)
else d.aTA()
return}if(a0>=800&&a0<820){j=a0-800
w=d.d
w===$&&C.c()
v=w.d
v===$&&C.c()
w=v[w.e].id
if(j>=w.length)return
g=w[j]
if(!g.gwD())d.ak6(j)
else if(g.a==="switch")d.b8z()
else d.az8(2+j)
return}if(a0===702||a0===703){w=d.d
w===$&&C.c()
v=w.d
v===$&&C.c()
if(v[w.e].gMe()){w=d.d
v=w.d
v===$&&C.c()
w=!v[w.e].ga60()}else w=!0
if(w)d.aTA()
else d.b8z()
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
if(!w[u].p2){d.m(new A.eap(d))
w=d.d
v=w.d
v===$&&C.c()
d.iD("The TV is on and playing "+E.kk[v[w.e].p3].a+".")}else{e=A.aPp(f)
w=d.c
w.toString
I.h7V(w,0,e.a,!0,D.y2,e.b)}return}if(a0>=720&&a0<728){w=d.d
w===$&&C.c()
v=w.d
v===$&&C.c()
u=a0-720
f=v[w.e].fx.h(0,u)
if(f==null)return
e=A.aPp(f)
if(e.d>0||e.e){w=d.c
w.toString
I.h7V(w,0,e.a,!0,D.y2,e.b)}else d.az8(u)
return}if(a0===710||a0===711||a0===712||a0===713){w=d.d
w===$&&C.c()
v=w.d
v===$&&C.c()
if(!v[w.e].gjQ())if(d.d.a.length!==0)d.Em()
else d.a0a()
else{w=d.f
w===$&&C.c()
j=w.b.h(0,a0)
if(j!=null)d.iD(j.a+": "+j.b)}}},
bNm(d){var w,v,u,t=this.d
t===$&&C.c()
w=t.d
w===$&&C.c()
v=w[t.e].w[d].d
u=v<w.length?w[v].b:"the next room"
t=this.c
t.toString
return C.bU(E.lw,null,new A.e8S(this,u,d,v),t,!0,!0,!1,D.k1,!1,!1,x.H)},
bPn(){var w,v,u=this
u.m(new A.e90(u))
if(!u.aL){w=u.d
w===$&&C.c()
v=w.d
v===$&&C.c()
w=v[w.e].c==="outside"}else w=!1
if(w)u.a2A()
w=u.d
w===$&&C.c()
v=w.d
v===$&&C.c()
if(v[w.e].c!=="outside")u.xX()},
bPp(){this.m(new A.e91(this))
this.eh("Phone view: the city fills your phone standing up. Pick a drone film and start filming.",!0)},
bPJ(){var w=this
if(w.p4)w.a2D()
w.m(new A.e92(w))},
ck8(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.c
n.toString
w=C.aJ(n,o,x.w).w
n=new A.eae(p)
v=x.p
u=C.a([C.bT(0,d,0,0,0)],v)
t=w.r.b
if(p.fw)u.push(C.ao(o,C.aB(D.iC,B.f59,D.y,!1,o,new A.eah(p),o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!1,D.a4),o,o,0,o,t,o))
else{s=n.$2(D.cz,p.gbPI())
r=p.p4?D.H8:D.Cd
r=n.$2(r,new A.eai(p))
q=p.h5?B.anL:N.Cf
u.push(C.ao(o,C.B(C.a([s,r,n.$2(q,new A.eaj(p)),n.$2(D.ut,new A.eak(p))],v),D.m,o,D.e,D.i,0,o,o),o,o,10,o,t+8,o))}return C.c7(o,D.w,new C.an(D.a_,o,D.ab,D.t,u,o),o,!1,!1,o,o)},
bHM(d){var w,v,u,t,s,r,q=this,p=null,o=q.c
o.toString
w=C.aJ(o,p,x.w).w
o=new A.e8s(q)
if(q.eu){v=w.a
u=v.b
v=v.a
t=q.ab
s=w.bdf(D.af,new C.au(u,v),D.af)
return C.c7(p,D.w,C.at(new C.y6(t,C.rq(new C.a7(u,v,new C.an(D.a_,p,D.ab,D.t,C.a([C.bT(0,d,0,0,0),C.ao(p,C.aB(D.iC,B.f5f,D.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,o,p,p,p,p,p,p,!1,D.a4),p,p,0,p,0,p)],x.p),p),p),s),p),p,p,p),p,!1,!1,p,p)}r=q.f1?w.r.b:0
return C.c7(p,D.w,new C.an(D.a_,p,D.ab,D.t,C.a([C.bT(0,d,0,0,0),C.ao(p,C.aB(D.iC,B.f5g,D.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,o,p,p,p,p,p,p,!1,D.a4),p,p,0,p,r,p)],x.p),p),p,!1,!1,p,p)},
bRM(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.c
k.toString
w=C.aJ(k,l,x.w).w
k=w.a
v=k.b
k=k.a
u=new A.e9c(m)
t=m.ab
s=w.bdf(D.af,new C.au(v,k),D.af)
r=x.p
q=C.a([C.bT(0,d,0,0,0)],r)
if(m.fw)q.push(C.ao(l,C.aB(D.iC,B.f58,D.y,!1,l,new A.e9f(m),l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,!1,D.a4),l,l,0,l,0,l))
else{p=u.$2(Ae.a1B,new A.e9g(m))
o=u.$2(D.a20,new A.e9h(m))
n=m.h5?B.anL:N.Cf
r=C.a([p,o,u.$2(n,new A.e9i(m)),u.$2(D.ut,new A.e9j(m))],r)
p=m.d
p===$&&C.c()
o=p.d
o===$&&C.c()
if(o[p.e].c==="outside"){p=m.p4?D.H8:D.Cd
r.push(u.$2(p,new A.e9k(m)))}if(m.gak7())r.push(C.aB(l,C.p(l,B.bVD,D.f,l,l,new C.o(D.cU,l,C.J(D.c,D.r,1),l,l,l,D.a6),l,40,l,D.iA,l,l,l,40),D.y,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,m.gaQr(),l,l,l,l,l,l,!1,D.a4))
q.push(C.ao(l,C.B(r,D.m,l,D.e,D.i,0,l,l),l,l,10,l,10,l))}return C.c7(l,D.w,C.at(new C.y6(t,C.rq(new C.a7(v,k,new C.an(D.a_,l,D.ab,D.t,q,l),l),s),l),l,l,l),l,!1,!1,l,l)},
cB6(d){var w,v,u,t=B.CG[d.b]
if(d.c==="power")w=t.c
else{v=t.d
w=v>=0?v:t.c}v=this.d
v===$&&C.c()
v=v.d
v===$&&C.c()
u=w<v.length?v[w].b:"the house"
v=this.c
v.toString
return C.bU(D.av,null,new A.ebh(this,t,new A.ebg(),d,u,w),v,!0,!0,!0,K.a88,!1,!1,x.H)},
c2z(){var w,v,u=this,t=u.d
t===$&&C.c()
w=t.d
w===$&&C.c()
v=w[t.e]
if(v.c==="outside")return
u.m(new A.e9C(u))
t=u.e
t===$&&C.c()
t.e=20
t.f=300
t.w=-0.95
t.x=1.35
t.r6(!0)
t=u.e
w=v.gho(0)
t.hQ(Math.max(v.gex(0),v.gho(0))*0.75,-0.5,new A.q(0,118,w*0.5),-0.05)
u.eh("Looking up at the ceiling from the floor. Drag to look round.",!0)},
gpk(){var w,v,u=this.d
u===$&&C.c()
u=u.d
u===$&&C.c()
w=new C.Z(u,new A.e7r(),C.T(u).k("Z<1>"))
if(!w.gaf(0).C())return null
v=w.gI(0)
u=v.dx
return u==null?v.dx=A.hCD(v):u},
aRI(d){var w,v,u=this
if(d==null)return
w=d.c
if(w>0){v=u.ghI()
if(v!=null)v.r+=w}w=d.a
A.fV(w==="pickup"?700:940,120,0.25,"tri")
u.eh(d.b,w!=="expired")
u.m(u.giV())},
gKu(){var w,v,u,t=this.d
t===$&&C.c()
t=t.d
t===$&&C.c()
w=new C.Z(t,new A.ebJ(),C.T(t).k("Z<1>"))
if(!w.gaf(0).C())return null
v=w.gI(0)
t=v.dy
if(t==null){t=C.a([],x.bz)
u=new C.e9()
u.d3(11)
t=new A.czY(v,u,t)
t.bzR(v,11)
v.dy=t}return t},
bFT(){var w,v,u=this,t=u.ghI()
if(t==null)return
w=u.c5
if(w.w)u.eh("You already have your Uber licence.",!0)
else{v=t.r
if(v<40)u.eh("The licence costs 40 points. You have "+v+". Earn more with jobs and deliveries.",!1)
else{t.r=v-40
w.w=!0
A.fV(880,140,0.25,"tri")
u.eh("You passed! Here is your Uber licence. Drive a car to an Uber station and the people waiting will get in.",!0)}}u.m(new A.e7S())
w=u.aJ
if(w!=null)w.B(u.ghI())},
c1v(){var w,v,u,t,s=this,r=null,q=s.ghI(),p=s.c5.w,o=D.w.j(0.55),n=C.m(28),m=C.J(D.aZ,D.r,1),l=x.p,k=C.B(C.a([B.fAb,D.at,B.bFa,C.aB(r,D.rB,D.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new A.e9x(s),r,r,r,r,r,r,!1,D.a4)],l),D.m,r,D.e,D.i,0,r,r),j=C.d(p?"You are a licensed Uber driver. Drive a car to an Uber station (the yellow and black shelter): the people waiting get in, and you take them to their house. The fare is paid when you get there.":"With the Uber licence you can take the people waiting at the Uber stations home and be paid for every ride. The car needs gas, so watch the gas bar.",r,r,r,r,r,r,B.fge,r,r,r),i=q==null,h=i?r:q.r
h=C.d("You have "+(h==null?0:h)+" \u2b50",r,r,r,r,r,r,B.foc,r,r,r)
w=p?new A.e9y(s):s.gbFS()
if(p)v=D.be
else{v=i?r:q.r
v=(v==null?0:v)>=40?D.bG:D.bz}u=C.m(16)
t=p?"\u2713 Licensed":"Get the licence \xb7 40 \u2b50"
if(!p){i=i?r:q.r
i=(i==null?0:i)>=40}else i=!0
return C.p(D.A,C.p(r,C.x(C.a([k,D.W,j,D.W,h,D.W,C.aB(r,C.p(D.A,C.d(t,r,r,r,r,r,r,C.l(r,r,i?D.w:D.bY,r,r,r,r,r,r,r,r,16,r,r,D.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),D.f,r,r,new C.o(v,r,r,u,r,r,D.n),r,50,r,r,r,r,r,r),D.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,w,r,r,r,r,r,r,!1,D.a4)],l),D.ak,r,D.e,D.Q,0,D.p),D.f,r,r,new C.o(r,r,m,n,r,B.zb,D.n),r,r,r,D.bB,D.bQ,r,r,330),D.f,o,r,r,r,r,r,r,r,r,r,r)},
cDt(d){var w,v,u,t=this,s=t.gKu()
if(s!=null){w=s.c
w===$&&C.c()
w=w.length===0}else w=!0
if(w)return
v=s.cNt(d.f,d.r,t.CW.gi8()/1000)
if(v>0){w=t.ghI()
if(w!=null)w.r+=v
A.fV(940,140,0.25,"tri")
t.eh("\ud83d\ude96 You dropped the passenger at the house. Fare: +"+v+" points. Thank you!",!0)
t.m(t.giV())
return}if(s.f==null&&s.aqj(d.f,d.r)!=null&&D.d.b3(s.e,new A.ebK(s,d))){w=t.c5
if(!w.w){if(Date.now()-t.k1>2e4){t.k1=Date.now()
t.eh("People are waiting for a ride, but you need an Uber licence first. Get it at the licence office.",!1)}return}if(w.b<=0)return
u=s.cVC(d.f,d.r)
if(u!=null){A.fV(700,100,0.25,"tri")
t.eh("\ud83d\ude96 "+u.b+" got in. Take them to their house (follow the yellow line): "+u.f+" points.",!0)
t.m(t.giV())}}},
cDs(){var w,v,u,t,s,r,q,p=this,o=p.gKu()
if(o==null)return
w=o.f
if(w!=null){p.eh("\ud83d\ude96 "+w.b+" is in the car and wants to go home: "+w.f+" points. Follow the yellow line to the house.",!0)
return}if(!p.c5.w){v=C.a([],x._)
u=p.d
u===$&&C.c()
t=u.d
t===$&&C.c()
u=t[u.e].x
t=u.length
s=0
for(;s<u.length;u.length===t||(0,C.M)(u),++s){r=u[s]
if(r.b==="dmv")v.push(r)}if(v.length===0){p.eh("There is no licence office in this town yet.",!1)
return}p.Sj(D.d.gI(v))
p.eh("You are at the licence office. Walk in through the door and onto the blue mat to get your Uber licence.",!0)
return}v=o.c
v===$&&C.c()
if(v.length===0){p.eh("There is no Uber station in this town yet.",!1)
return}q=p.aC
v=C.C(v,x.eB)
D.d.aY(v,new A.ebI(q))
p.Sj(D.d.gI(v))
p.eh("You are at an Uber station. Get in the car parked next to it and drive up to the people waiting. They get in by themselves.",!0)},
aP4(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=" points for the ",i=k.ghI()
if(i==null)return
w=d.a
v=w==="bread"
if(v||w==="medicine"){u=i.aDI(v?"food":"medicine")
t=!D.a.a0(u,"You need")}else{v=d.r
t=!1
if(v>0){w=w==="tank"
s=w?A.h5s(k.c5.b):d.e
r=k.c5
q=r.b
if(q>=0.99)u="The tank is already full."
else{p=i.r
o=p<s
if(o)u="You need "+s+" points for that. Earn more with jobs and deliveries."
else{i.r=p-s
r.b=D.k.E(q+v,0,1)
r.aV()
v=""+s
u=w?"You filled the tank for "+v+" points.":"You put gas in the car. -"+v+" points."}t=!o}}else if(d.x){w=k.c5
if(!w.f)u="You feel fine: you do not need pills."
else{v=i.r
r=d.e
q=v<r
if(q)u="You need "+r+j+d.c.toLowerCase()+"."
else{i.r=v-r
w.f=!1
w.aV()
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
v.aV()}if(q){w=k.c5
w.e=D.k.E(w.e+r,0,1)
w.aV()}w=k.c5
w=w.d>0||w.c>0?"Still too tired: eat more.":"You feel stronger."
u="You had the "+d.c.toLowerCase()+". "+w}t=!l}}}A.fV(t?880:300,90,0.25,"tri")
k.eh(u,t)
w=k.aJ
if(w!=null)w.B(k.ghI())
k.m(k.giV())},
cvw(){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.ghI(),i=l.aJ
i=i==null?k:i.b.b==="gasstation"
w=i===!0
i=l.c
i.toString
v=C.aJ(i,k,x.w).w.a
i=v.a
u=i>v.b*1.15
t=new A.eaV(u,new A.eaW(l,j,u))
s=C.d(w?"\u26fd":"\ud83d\uded2",k,k,k,k,k,k,D.wT,k,k,k)
r=C.d(w?"NGMY Gas shop":"NGMY Mart",k,k,k,k,k,k,D.fv,k,k,k)
q=j==null?k:j.r
p=x.p
q=C.a([s,D.at,C.E(C.x(C.a([r,C.d("You have "+(q==null?0:q)+" \u2b50",k,k,k,k,k,k,B.fiF,k,k,k)],p),D.E,k,D.e,D.i,0,D.p),1)],p)
if(u)q.push(new C.a7(190,k,new A.Us(l.c5,w,14,k),k))
q.push(D.bd)
q.push(C.aB(k,B.bSj,D.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new A.eaU(l),k,k,k,k,k,k,!1,D.a4))
o=C.B(q,D.m,k,D.e,D.i,0,k,k)
n=t.$2("FOOD AND DRINKS (energy)",B.d8K)
s=w?"GAS":"HEALTH AND THE TOWN"
m=t.$2(s,w?B.dld:B.dhX)
t=D.w.j(0.55)
i=u?Math.min(i-24,820):340
s=C.m(28)
r=C.J(D.aZ,D.r,1)
q=C.a([o,D.W],p)
if(!u)D.d.v(q,C.a([new A.Us(l.c5,w,14,k),D.O],p))
if(u)q.push(C.B(C.a([C.E(n,5),D.er,C.E(m,3)],p),D.E,k,D.e,D.i,0,k,k))
else D.d.v(q,C.a([n,m],p))
return C.p(D.A,C.eN(D.A,C.p(k,C.x(q,D.ak,k,D.e,D.Q,0,D.p),D.f,k,k,new C.o(k,k,r,s,k,B.zb,D.n),k,k,k,D.bf,D.bQ,k,k,i),D.f,D.e2),D.f,t,k,k,k,k,k,k,k,k,k,k)},
cgL(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=this,a1=null,a2=a0.gpk()
a2.toString
w=a0.aC
v=w==null
u=v?a1:w.f
if(u==null)u=0
t=v?a1:w.r
if(t==null)t=300
s=a2.x
r=new A.e9X()
q=new A.e9T(a0,u,t,r,new A.e9W(),s,a2)
p=a2.cXW()
o=["\ud83e\udd47","\ud83e\udd48","\ud83e\udd49","4","5","6"]
v=D.w.j(0.55)
n=C.m(28)
m=C.J(D.aZ,D.r,1)
l=x.p
k=C.a([C.B(C.a([B.fHB,D.at,C.E(C.x(C.a([B.fJo,C.d("Race "+a2.as+": first to 8 wins +40",a1,a1,a1,a1,a1,a1,H.vb,a1,a1,a1)],l),D.E,a1,D.e,D.i,0,D.p),1),C.aB(a1,D.rB,D.y,!1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,new A.e9R(a0),a1,a1,a1,a1,a1,a1,!1,D.a4)],l),D.m,a1,D.e,D.i,0,a1,a1),D.ae],l)
if(s!=null){j=D.bG.j(0.14)
i=C.m(16)
h=C.J(D.bG,D.r,1)
g=s.b
f=C.d(A.L6(g).b,a1,a1,a1,a1,a1,a1,D.K0,a1,a1,a1)
k.push(C.p(a1,C.B(C.a([f,D.at,C.E(C.d(s.r?"You have the "+A.L6(g).c.toLowerCase()+". Take it to the house (follow the yellow line).":"Go to the "+r.$1(s.c).toLowerCase()+" to pick up the "+A.L6(g).c.toLowerCase()+".",a1,a1,a1,a1,a1,a1,D.oG,a1,a1,a1),1),C.aB(a1,B.fxM,D.y,!1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,new A.e9S(a0,a2),a1,a1,a1,a1,a1,a1,!1,D.a4)],l),D.m,a1,D.e,D.i,0,a1,a1),D.f,a1,a1,new C.o(j,a1,h,i,a1,a1,D.n),a1,a1,a1,D.d3,D.bf,a1,a1,a1))}else{j=C.a([B.fMd,D.O],l)
for(a2=a2.qZ(0,u,t),a2=C.d0(a2,0,C.dA(6,"count",x.S),C.T(a2).c),i=a2.$ti,a2=new C.bR(a2,a2.gL(0),i.k("bR<ak.E>")),i=i.k("ak.E");a2.C();){h=a2.d
j.push(q.$1(h==null?i.a(h):h))}D.d.v(k,j)}k.push(D.am)
k.push(B.fB6)
k.push(D.O)
for(e=0;e<p.length;++e){a2=p[e].a==="You"?D.aQ.j(0.18):D.c.j(0.05)
j=new C.aQ(12,12)
i=p[e]
h=i.a
g=h==="You"
d=new C.ay(g?D.aQ:D.ds,1,D.r,-1)
f=o[e]
g=g?D.u:D.P
k.push(C.p(a1,new C.cd(D.aM,D.e,D.i,D.m,a1,D.p,a1,0,C.a([new C.a7(26,a1,new C.y(f,a1,D.aS0,a1,a1,a1,a1,a1,a1,a1,a1,a1),a1),new C.bA(1,D.bc,new C.y(h,a1,new C.F(!0,D.c,a1,a1,a1,a1,a1,g,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1,a1,a1,a1,a1,a1,a1),a1),new C.y(""+i.b+"/8",a1,L.K2,a1,a1,a1,a1,a1,a1,a1,a1,a1),D.at,new C.y(""+i.c+" pts",a1,B.fg4,a1,a1,a1,a1,a1,a1,a1,a1,a1)],l),a1),D.f,a1,a1,new C.o(a2,a1,new C.bK(d,d,d,d),new C.bj(j,j,j,j),a1,a1,D.n),a1,a1,a1,D.eH,D.l5,a1,a1,a1))}return C.p(D.A,C.eN(D.A,C.p(a1,C.x(k,D.ak,a1,D.e,D.Q,0,D.p),D.f,a1,a1,new C.o(a1,a1,m,n,a1,B.zb,D.n),a1,a1,a1,D.bB,D.bQ,a1,a1,340),D.f,D.e2),D.f,v,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1)},
bTx(d){var w,v,u=this,t=u.aJ
if(t==null||t.a!=="tower"||u.ok!=null)return
w=t.f
if(d===w){u.m(new A.e9l(u))
return}u.p2=t
w=new A.eZ8(w,d,Date.now())
v=t.at
v===$&&C.c()
w.r=v.f
w.w=v.r
u.ok=w
t.y=u.be=u.b0=0
u.m(new A.e9m(u))
w=u.e
w===$&&C.c()
w.hQ(175,0.28,B.fXj,0)
u.eh("Going to level "+d+": walking to the elevator.",!0)
w=u.p1
if(w!=null)w.bR(0)
w=new A.a58(u.gcru(),V.Bz)
w.h2(0)
u.p1=w},
DO(d){var w=D.k.E(d,0,1)
return w*w*(3-2*w)},
crv(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d="tri",a0=e.ok,a1=e.p2
if(a0==null||a1==null||e.c==null){w=e.p1
if(w!=null)w.bR(0)
return}v=Date.now()
u=(v-a0.c)/1000
w=a0.b
t=a0.a
s=w>t
switch(a0.d){case 0:r=a1.at
r===$&&C.c()
if(u<1){q=e.DO(u/1)
p=a0.r
r.f=p*(1-q)
o=a0.w
n=62-o
r.r=o+n*q
r.w=Math.atan2(-p,n)
r.x=!0}else if(u<1.8){r.f=0
r.r=62
r.w=3.141592653589793
r.x=!1}else if(u<2.5){r.r=62-44*e.DO((u-1.8)/0.7)
r.w=3.141592653589793
r.x=!0}else r.x=!1
r.y+=0.3
a1.y=e.DO((u-0.8)/0.8)
if(u>=2.6){a0.d=1
a0.c=v
a0.f=3+D.o.E(Math.abs(w-t)-1,0,99)*1.1
a0.e=t
m=A.fXU("cabin",a1.b,!1)
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
e.aJ=m
w=s?"\u25b2":"\u25bc"
e.p3.sp(0,w+"  "+C.w(t===1?"L":t))
e.m(e.giV())
w=e.e
w===$&&C.c()
w.Nl(54,0.1,B.fXx,3.141592653589793)
A.fV(520,70,0.25,d)}break
case 1:m=e.aJ
if(m==null||m.a!=="cabin")return
l=a0.f
if(u<0.9)r=1-e.DO(u/0.9)
else{r=l-0.9
r=u>r?e.DO((u-r)/0.9):0}m.y=r
k=u>0.9&&u<l-0.9
if(k){j=D.o.E(t+D.k.V((w-t)*e.DO((u-0.9)/(l-1.8))),1,m.gM4())
if(j!==a0.e){m.z=a0.e=j
t=s?"\u25b2":"\u25bc"
e.p3.sp(0,t+"  "+C.w(j===1?"L":j))
A.fV(500+j*22,45,0.2,d)}}i=k?1:0.25
t=e.e
t===$&&C.c()
r=Math.sin(u*5.3)
p=Math.sin(u*2.1)
o=Math.sin(u*0.9)
n=Math.sin(u*8)
t.Nl(54+p*1.2,0.1+Math.sin(u*6.1)*0.007*i,new A.q(0,52+r*0.5*i,52),3.141592653589793+o*0.5+n*0.01*i)
if(u>l-0.9&&!a0.x){a0.x=!0
m.z=w
e.p3.sp(0,C.w(w===1?"L":w))
A.fV(880,140,0.3,d)
C.bP(D.fN,new A.eaM(),x.H)}if(u>=l){a0.d=2
a0.c=v
h=a1.b.a
t=e.d
t===$&&C.c()
r=t.d
r===$&&C.c()
t=r[t.e].cy.h(0,h)
g=e.gIy().h(0,h*100+w)
a1.f=D.o.E(w,1,a1.gM4())
a1.c=t===w
w=a1.at
w===$&&C.c()
w.f=0
w.r=112
w.w=3.141592653589793
a1.x=!1
a1.CW.a9(0)
a1.B(a1.ch)
e.aj8(a1,g)
a1.B(e.ghI())
w.f=0
w.r=16
w.w=0
w.x=!1
a1.y=1
e.aJ=a1
e.m(e.giV())
e.e.Nl(175,0.28,B.fXk,0)}break
default:w=a1.at
w===$&&C.c()
q=e.DO(u/1.6)
w.f=0
w.r=16+96*q
w.w=0
w.x=u<1.6
w.y+=0.3
a1.y=1-e.DO((u-1.3)/0.8)
t=e.e
t===$&&C.c()
t.apF(new A.q(0,40,w.r*0.7+14))
if(u>=2.2){f=a1.c
t=e.p1
if(t!=null)t.bR(0)
e.ok=null
w.x=!1
a1.y=0
e.m(e.giV())
e.e.hQ(170,0.4,B.fWZ,0)
A.fV(660,80,0.25,d)
w=""+a1.f
e.eh(f?"Level "+w+". This office has no power: walk onto the red mat at the breaker panel, or tap the red frames.":"Level "+w+" of "+a1.gM4()+".",!0)}}},
bOQ(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.aJ
if(g==null||g.a!=="tower")return D.bJ
w=i.d
w===$&&C.c()
v=w.d
v===$&&C.c()
u=v[w.e].cy.h(0,g.b.a)
w=D.w.j(0.55)
v=C.m(28)
t=C.J(D.aZ,D.r,1)
s=g.f
r=g.gM4()
q=x.p
s=C.B(C.a([B.fQh,D.at,C.E(C.x(C.a([B.fIn,C.d("You are on level "+s+" of "+r,h,h,h,h,h,h,H.vb,h,h,h)],q),D.E,h,D.e,D.i,0,D.p),1),C.aB(h,D.rB,D.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new A.e8Z(i),h,h,h,h,h,h,!1,D.a4)],q),D.m,h,D.e,D.i,0,h,h)
p=C.a([],q)
for(;r>=1;--r){if(r===g.f)o=D.aQ
else o=r===u?D.by.j(0.35):D.c.j(0.08)
n=new C.aQ(14,14)
m=r===u
if(m)l=D.aw
else l=r===g.f?D.c:D.aZ
k=r===g.f
j=new C.ay(l,k||m?2:1,D.r,-1)
l=r===1?"L":""+r
k=k?D.w:D.c
l=C.a([new C.y(l,h,new C.F(!0,k,h,h,h,h,19,D.u,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h),h,h,h,h,h,h,h,h,h)],q)
if(m)l.push(B.fQC)
p.push(C.aB(h,C.p(D.A,C.x(l,D.m,h,D.b8,D.i,0,D.p),D.f,h,h,new C.o(o,h,new C.bK(j,j,j,j),new C.bj(n,n,n,n),h,h,D.n),h,52,h,h,h,h,h,58),D.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new A.e9_(i,r),h,h,h,h,h,h,!1,D.a4))}return C.p(D.A,C.eN(D.A,C.p(h,C.x(C.a([s,D.ae,B.fOx,D.W,C.bW(D.bC,p,D.bq,h,8,8),D.am,B.fzz],q),D.ak,h,D.e,D.Q,0,D.p),D.f,h,h,new C.o(h,h,t,v,h,B.zb,D.n),h,h,h,D.bB,D.bQ,h,h,330),D.f,D.e2),D.f,w,h,h,h,h,h,h,h,h,h,h)},
atT(){var w,v,u,t,s,r,q=this,p=q.e
p===$&&C.c()
w=Math.cos(p.b)
v=Math.sin(q.e.b)
p=q.e
u=p.d
t=p.c
p=Math.sin(p.a)
s=q.e
r=s.c
return new C.z(u.a8(0,new A.q(-t*w*p,r*v,r*w*Math.cos(s.a))),q.e.d)},
aR1(d,e,f,g,h){var w=new A.e8L(h)
return new A.q(w.$4(d.a,e.a,f.a,g.a),w.$4(d.b,e.b,f.b,g.b),w.$4(d.c,e.c,f.c,g.c))},
c36(d){var w=this.d
w===$&&C.c()
w=w.d
w===$&&C.c()
return A.i5n(D.d.fW(w,new A.e9D()),d)},
cyg(d){var w,v,u=this
u.B2()
u.S5()
if(u.aL)u.a2E()
u.aJ=null
w=u.c36(d)
if(w.length===0)return
u.m(new A.eaY(u,w))
v=u.e
v===$&&C.c()
v.r=4800
v.e=6
v.f=2600
v.w=-1.2
v.x=1.4
v.r6(!0)
u.adD()
v=u.RG
if(v!=null)v.bR(0)
v=new A.a58(u.gbO5(),V.Bz)
v.h2(0)
u.RG=v},
adD(){var w,v,u,t,s,r,q,p=this,o=++p.ry,n=p.rx
if(o>=n.length){p.a2D()
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
u=A.fXU(v,o,u.k4.t(0,t))
u.B(p.ghI())
p.aJ=u
p.aj8(u,p.gIy().h(0,t))
t=p.aJ
t.toString
t.B(p.ghI())
p.m(p.giV())}s=w.r
if(s&&p.aJ!=null){p.aJ=null
p.m(p.giV())}if(w.w==null&&w.x==null){s=!n||s
r=p.atT()
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
n=D.d.gak(o)
v=p.x1
u=v[q]
v=v[q-1]
D.d.M(o,n+Math.max(1,new A.q(u.a-v.a,u.b-v.b,u.c-v.c).guT()))}}o=w.e
if(o!=null)p.eh("\ud83d\ude81 "+o,!0)},
bO6(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this
if(!a2.p4||a2.c==null)return
w=a2.rx[a2.ry]
v=(Date.now()-a2.to)/1000
u=w.x
if(u!=null){t=a2.CW.gi8()/1000
s=B.a4p[u].a
r=s[0]
q=s[1]
p=s[2]
o=t*0.09+u*3.141592653589793
t=[r+520*Math.cos(o),p+Math.sin(t*0.9+u)*5,q+520*Math.sin(o),-Math.sin(o),Math.cos(o)]
s=t[0]
n=t[1]-33
t=t[2]
m=new A.q(s,n,t)
u=(u&1)===0?0.6:2.4
l=u+v*0.5
k=new A.q(s+Math.cos(l)*175,n+35,t+Math.sin(l)*175)
if(v<3){j=v/3
i=j*j*(3-2*j)
h=a2.atT()
k=A.o2(h.a,k,i)
m=A.o2(h.b,m,i)}if(v>=w.d){a2.adD()
return}}else{u=w.w
if(u!=null){u=B.kl[u]
t=a2.CW.gi8()
t=$.aRe().cVR(0,D.d.cu(B.kl,u),t/1000).a
u=t[0]
m=new A.q(u,26,t[1])
l=v*0.6+0.8
k=new A.q(u+Math.sin(l)*190,85,t[1]+Math.cos(l)*190)
if(v<2.5){j=v/2.5
i=j*j*(3-2*j)
g=a2.atT()
k=A.o2(g.a,k,i)
m=A.o2(g.b,m,i)}if(v>=w.d){a2.adD()
return}}else{f=v*w.c
if(a2.x1.length<2||f>=D.d.gak(a2.xr)){a2.adD()
return}u=a2.xr
t=u.length
e=0
for(;;){s=e+2
if(!(s<t&&u[e+1]<=f))break;++e}t=u[e]
n=e+1
d=D.k.E((f-t)/(u[n]-t),0,1)
t=new A.e8X()
u=e-1
k=a2.aR1(t.$2(a2.x1,u),t.$2(a2.x1,e),t.$2(a2.x1,n),t.$2(a2.x1,s),d)
m=a2.aR1(t.$2(a2.x2,u),t.$2(a2.x2,e),t.$2(a2.x2,n),t.$2(a2.x2,s),d)}}a0=m.aF(0,k)
a1=Math.max(8,a0.guT())
u=a2.e
u===$&&C.c()
t=Math.atan2(a0.a,-a0.c)
u.Nl(a1,Math.asin(D.k.E(-a0.b/a1,-1,1)),m,t)},
a2D(){var w=this,v=w.e
v===$&&C.c()
v.r=0
v=w.RG
if(v!=null)v.bR(0)
w.RG=null
if(w.c==null)return
w.m(new A.eb8(w))
w.xX()
w.eh("The drone has landed.",!0)},
bO4(){var w=null,v=new A.e8V(this),u=D.w.j(0.55),t=C.m(28),s=C.J(D.aZ,D.r,1),r=x.p
return C.p(D.A,C.eN(D.A,C.p(w,C.x(C.a([C.B(C.a([B.fOk,D.at,B.bEI,C.aB(w,D.rB,D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new A.e8U(this),w,w,w,w,w,w,!1,D.a4)],r),D.m,w,D.e,D.i,0,w,w),B.fBb,v.$4("\ud83c\udf06","The whole city","High flights over every street","city"),v.$4("\ud83e\udea7","Billboards and NGMY logos","Close to every ad, and the big logo board","billboards"),v.$4("\ud83c\udfc1","Edge billboards only","A tour round the big boards at the edges of the city","edges"),v.$4("\ud83c\udfe0","Houses","Fly by the houses, then go inside a big one","houses"),v.$4("\ud83c\udfe5","Hospital, shop and school","Fly in and look round inside each","hospital"),v.$4("\ud83d\ude8c","Traffic","Follow the self-driving buses and police cars","traffic"),v.$4("\ud83c\udfac","Everything","A little of all of it","all")],r),D.ak,w,D.e,D.Q,0,D.p),D.f,w,w,new C.o(w,w,s,t,w,B.zb,D.n),w,w,w,D.bB,D.bQ,w,w,330),D.f,D.e2),D.f,u,w,w,w,w,w,w,w,w,w,w)},
gIy(){var w=this.d
w===$&&C.c()
w=w.d
w===$&&C.c()
return D.d.fW(w,new A.e9s()).cx},
au4(d){var w,v=C.a([],x.u)
for(w=0;w<4;++w)v.push(d.tf(w))
return v},
cyD(d){var w,v,u=C.a([],x.t)
for(w=0;w<4;++w){if(!d.tf(w)){v=d.d
v===$&&C.c()
v=w>=v.length}else v=!0
u.push(v?0:new A.eb7(d,w).$0())}return u},
cFJ(d,e){var w,v,u,t,s,r=d.d
r===$&&C.c()
if(e>=r.length)return""
w=r[e]
r=w.a
v=d.at.h(0,r)
u=v==null
t=u?null:v.a
s=A.agJ(t==null?w.b:t).toLowerCase()
if(u||!A.h19(w.b,v.a))return"nothing put in yet at "+A.jY(r).b
if(v.b.c<2)return"the "+s+" at "+A.jY(r).b+" is not finished: fasten every wire and close it"
return"the "+s+" at "+A.jY(r).b+" works but is NOT wired safely: "+d.apc(r).b},
aj8(d,e){var w=e==null
d.d=w?B.azE:this.au4(e)
d.e=w?B.a2T:this.cyD(e)},
gbax(){var w,v,u=this.aJ
if(u==null||!u.c)return null
w=u.a
v=u.b.a
return w==="tower"?v*100+u.f:v},
gak7(){var w,v=this.gbax(),u=v==null?null:this.gIy().h(0,v)
if(u!=null)w=u.gbkj()||D.d.d5(this.au4(u),new A.ebX())
else w=!1
return w},
asu(){var w,v,u,t,s,r=this,q=r.aJ,p=r.gbax(),o=p==null,n=o?null:r.gIy().h(0,p)
if(q==null||o||n==null)return
if(!D.d.d5(r.au4(n),new A.e8u())){r.eh("Not quite done: the wiring is not right yet. Open the wiring bench again (tap the panel) and check every wire.",!1)
return}w=q.b
r.gIy().W(0,p)
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
s=10+r.iM.au(26)
v=r.ghI()
if(v!=null)v.r+=s
r.ld=Date.now()
r.ly=0
q.d=B.dqi
q.e=B.a2T
q.B(r.ghI())
r.m(r.giV())
A.fV(880,120,0.3,"tri")
v=r.d
v===$&&C.c()
u=v.d
u===$&&C.c()
v=u[v.e]
u=v.k4.a
v=v.cy.a
o=o?"The power is back on level "+q.f+".":"The power is back in the house."
v=u+v>0?" The other red tags in the city are different places that still have no power.":""
r.eh("\u2705 JOB COMPLETE! "+o+" +"+s+" stars."+v,!0)},
Yv(d){return this.c_4(d)},
c_4(d){var w=0,v=C.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k
var $async$Yv=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:l=d.b
k=l.a
if(d.a==="tower")k=k*100+d.f
s=t.gIy().c3(0,k,new A.e9p(l,d))
w=3
return C.b(t.yc(C.dX(new A.e9q(s),!1,null,x.H)),$async$Yv)
case 3:if(t.c==null){w=1
break}t.aj8(d,s)
if(t.gak7())t.asu()
else{d.B(t.ghI())
t.m(t.giV())
r=x.s
q=C.a([],r)
if(s.tf(0))q.push("outlet 1")
if(s.tf(1))q.push("outlet 2")
if(s.tf(2))q.push("the ceiling light")
if(s.tf(3))q.push("the switch")
p=C.a([],r)
if(!s.tf(0))p.push("outlet 1")
if(!s.tf(1))p.push("outlet 2")
if(!s.tf(2))p.push("the ceiling light")
if(!s.tf(3))p.push("the switch")
r=C.a([],r)
for(o=0;o<4;++o)if(!s.tf(o))r.push(t.cFJ(s,o))
n=x.cc
m=C.C(new C.Z(r,new A.e9r(),n),n.k("L.E"))
r=q.length===0?"Nothing is fixed yet":"Fixed so far: "+D.d.aH(q,", ")
p=D.d.aH(p,", ")
q=m.length===0?"":"Why: "+C.d0(m,0,C.dA(2,"count",x.S),C.T(m).c).aH(0,"; ")+". "
t.eh(r+". Still to do: "+p+". "+q+"Tap the red frames to carry on.",!1)}case 1:return C.h(u,v)}})
return C.i($async$Yv,v)},
abc(d){return this.bQV(d)},
bQV(d){var w=0,v=C.j(x.H),u,t=this,s,r,q,p,o
var $async$abc=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:o=t.d
o===$&&C.c()
s=o.d
s===$&&C.c()
r=d.a
q=s[o.e].db.c3(0,r,new A.e94())
w=3
return C.b(t.yc(C.dX(new A.e95(q),!1,null,x.H)),$async$abc)
case 3:if(t.c==null){w=1
break}if(q.c>=2&&A.L7(A.t0("light"),q).a==="ok"){o=t.d
s=o.d
s===$&&C.c()
s[o.e].db.W(0,r)
o=t.d
s=o.d
s===$&&C.c()
s[o.e].k3.W(0,r)
p=10+t.iM.au(26)
r=t.ghI()
if(r!=null)r.r+=p
t.m(t.giV())
t.eh("The street light is on again. You wired it correctly: black to black, white to white, ground to ground. +"+p+" stars.",!0)}else t.eh("The light is still out: finish the wiring and fit the cover, then it comes on.",!1)
case 1:return C.h(u,v)}})
return C.i($async$abc,v)},
c7z(){var w,v,u=this,t=u.aC
if(t==null)return
w=u.d
w===$&&C.c()
v=w.d
v===$&&C.c()
v[w.e].dz(0,"crate",t.f+Math.sin(t.w)*34,t.r+Math.cos(t.w)*34)
u.al=null
u.m(u.giV())
u.eh("You put the crate down.",!0)},
c50(){var w,v,u,t,s,r,q,p,o=this,n=o.d
n===$&&C.c()
n=n.d
n===$&&C.c()
w=D.d.fW(n,new A.e9F())
if(o.gaWJ())return
n=x._
v=C.a([],n)
for(u=w.x,t=u.length,s=w.k4,r=0;r<u.length;u.length===t||(0,C.M)(u),++r){q=u[r]
p=q.b
if(p==="house2"||p==="bighouse"){p=q.a
p=!s.t(0,p)&&p!==o.je}else p=!1
if(p)v.push(q)}if(s.a<2&&v.length!==0&&o.bB==null&&o.bC==null){q=v[o.iM.au(v.length)]
v=q.a
s.M(0,v)
o.je=v
o.b4j(new A.Qg(q,q.b==="bighouse"?"the big house":"the house","power","",0))}n=C.a([],n)
for(v=u.length,t=w.k3,r=0;r<u.length;u.length===v||(0,C.M)(u),++r){q=u[r]
s=q.b
if((s==="pole"||s==="lamppost")&&!t.t(0,q.a))n.push(q)}if(t.a<3&&n.length!==0&&D.o.F(o.bX,90)===0){t.M(0,n[D.o.F(o.bX*5,n.length)].a)
o.eh("\u26a1 A street light went out in the town. Find it (it is dark, with a red sign) and fix it.",!1)}n=o.d
v=n.d
v===$&&C.c()
if(v[n.e].c==="outside"&&o.aJ==null)o.m(o.giV())},
awU(d){return this.c51(d)},
c51(d){var w=0,v=C.j(x.H),u=this
var $async$awU=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:u.m(new A.e9G(u,d))
return C.h(null,v)}})
return C.i($async$awU,v)},
aWU(){var w,v=this.cJ,u=v==null?null:v.a
if(u==null)return null
w=A.vw(new A.q(0,0,B.hy.h(0,u.b).d/2+60),u.e*3.141592653589793/2)
return new C.z(u.c+w.a,u.d+w.c)},
aw1(){var w=this.aC,v=this.aWU()
if(w==null||v==null)return null
return D.k.V(Math.sqrt(Math.pow(v.a-w.f,2)+Math.pow(v.b-w.r,2))/10)},
crN(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.aC,g=j.gKu()
g=g==null?i:g.ga6L(0)
if(g==null){g=j.gpk()
g=g==null?i:g.ga6L(0)
w=g}else w=g
if(w==null)w=j.aWU()
g=!1
if(j.cJ==null){v=j.gpk()
if((v==null?i:v.x)==null){g=j.gKu()
g=(g==null?i:g.f)==null}}v=!0
if(!g)if(h!=null)if(w!=null){g=j.d
g===$&&C.c()
v=g.d
v===$&&C.c()
g=v[g.e].c!=="outside"||j.aJ!=null}else g=v
else g=v
else g=v
if(g)return B.HZ
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
u.aDA(new A.q(h.f+o*k,1.4,h.r+n*k),B.hcY,D.bG,p)
k+=26;++l}}u.f=3
u.d=0.4
u.dN(new A.q(v,0,s),new A.q(v,170,s),4,D.bG,8)
u.dN(new A.q(v,0,s),new A.q(v,1.6,s),24,D.bG,14)
return g},
bGv(){var w,v,u,t,s,r,q,p=this,o=null,n=p.y1,m=new A.e7Z(),l=new A.e7Y(),k=x.p
if(n!=null){w=p.aw1()
v=C.a([C.B(C.a([C.h7(D.aC,o,C.d(n.gbek(),o,o,o,o,o,o,D.py,o,o,o),o,24),D.bd,C.E(C.x(C.a([C.d(n.gaDK(),o,o,o,o,o,o,D.dd,o,o,o),B.fJL],k),D.E,o,D.e,D.i,0,D.p),1),C.aB(o,D.rB,D.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new A.e8_(p),o,o,o,o,o,o,!1,D.a4)],k),D.m,o,D.e,D.i,0,o,o),D.ae],k)
for(u=n.gaGW(0),t=0;t<3;++t)v.push(m.$1(u[t]))
u=D.bG.j(0.12)
s=C.m(14)
r=C.J(D.bG.j(0.5),D.r,1)
v.push(C.p(o,C.B(C.a([B.bZ7,D.at,C.E(C.d(w==null?"A yellow line on the ground will show you the way.":"Follow the yellow line on the ground. It is about "+C.w(w)+" metres away.",o,o,o,o,o,o,D.oG,o,o,o),1)],k),D.m,o,D.e,D.i,0,o,o),D.f,o,o,new C.o(u,o,r,s,o,o,D.n),o,o,o,D.l2,D.bT,o,o,o))
v.push(l.$5$primary(A4.H0,"Show me the way",D.bG,new A.e80(p),!0))
v.push(l.$4(B.bLv,"Take me there",D.bj,new A.e81(p,n)))
v.push(l.$4(D.jU,"Later",D.aC,new A.e82(p,n)))
q=C.x(v,D.ak,o,D.e,D.Q,0,D.p)}else q=C.x(C.a([B.f07,D.ae,m.$1("Hello, this is the City office. A few calls were missed."),m.$1("Please answer the phone, so you can keep working."),m.$1("Every call is a person who needs help. Thank you for answering!"),l.$5$primary(D.hu,"OK, I will answer",D.bj,new A.e83(p),!0)],k),D.ak,o,D.e,D.Q,0,D.p)
k=D.w.j(0.55)
v=C.m(28)
return C.p(D.A,C.eN(D.A,C.p(o,q,D.f,o,o,new C.o(o,o,C.J(D.aZ,D.r,1),v,B.dpX,B.zb,D.n),o,o,o,D.bB,D.bQ,o,o,330),D.f,D.e2),D.f,k,o,o,o,o,o,o,o,o,o,o)},
cu6(){var w,v,u,t,s=this,r=s.d
r===$&&C.c()
w=r.d
w===$&&C.c()
v=w[r.e].BS(s.Q)
if(v==null)return
u=B.dxO.h(0,v.b)
if(u==null){s.eh("This cannot be sold.",!1)
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
w=s.ghI()
if(w!=null)w.r+=u
s.m(s.giV())
s.eh("Sold for "+C.w(u)+" points.",!0)},
A2(d){return this.bHA(d)},
bHA(d){var w=0,v=C.j(x.H),u,t=this,s
var $async$A2=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return C.b(C.bU(D.K,null,new A.e8q(d),s,!0,!0,!0,null,!1,!1,x.H),$async$A2)
case 3:if(t.c==null){w=1
break}t.m(new A.e8r(t))
case 1:return C.h(u,v)}})
return C.i($async$A2,v)},
cqL(d){var w,v,u=this.ghI()
if(u!=null){w=u.c
w===$&&C.c()
w=d>=w.length}else w=!0
if(w)return C.f8(null,x.H)
w=u.c
w===$&&C.c()
v=w[d]
w=this.c
w.toString
return C.bU(E.lw,null,new A.eaL(this,v,u),w,!0,!0,!0,D.k1,!1,!1,x.H)},
az8(d){var w=this.c
w.toString
return C.bU(E.lw,null,new A.eav(this,d),w,!0,!0,!1,D.k1,!1,!1,x.H)},
cDm(){var w=this.c
w.toString
return C.bU(E.lw,null,new A.ebH(this),w,!0,!0,!0,D.k1,!1,!1,x.H)},
cCL(){var w=this.c
w.toString
return C.bU(D.K,null,new A.ebt(this),w,!0,!0,!0,null,!1,!1,x.H)},
b7a(d,e){var w,v,u,t=this,s=t.dx
if(s!=null)s.a4(0)
s=t.d
s===$&&C.c()
s=s.gqR()
w=s.length
v=0
for(;v<w;++v){u=s[v]
if(u.k1==null)u.k1="tv100"
if(u.c==="hall")if(u.k2==null)u.k2="tv100"
u.p2=!0}t.z=!1
s=x.fG
w=t.d
if(e){s=new A.aW5(!0,w,d,C.a([],s))
s.aZO()}else{s=new A.aW5(!1,w,d,C.a([],s))
s.aZO()}t.cx=s
t.cy=t.CW.gi8()/1000
t.x=!0
t.r="look"
t.w=!1
s=D.d.gI(t.cx.d)
t.bj.a9(0)
t.b8=!1
t.m(new A.eb4(t,s.a))
t.xX()
t.dx=C.dg(D.jw,new A.eb5(t))
t.m(new A.eb6())},
cyz(d){return this.b7a(d,!1)},
bNn(d,e){var w,v=d.w[e],u=v.b
A:{if("left"===u){w=new A.q(-d.gex(0)/2,40,v.c+d.gho(0)/2-40)
break A}if("right"===u){w=new A.q(d.gex(0)/2,40,v.c+d.gho(0)/2-40)
break A}w=new A.q(v.c,40,0)
break A}return w},
cCM(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=i.cx
if(h==null||i.c==null)return
w=i.CW.gi8()/1000-i.cy
v=h.e
v===$&&C.c()
if(w>=v){i.S5()
i.iD("The tour is over. Press Tour to walk the house again.")
return}if(i.b8)return
u=h.bbw(w)
v=i.d
v===$&&C.c()
t=v.e
if(u.a!==t){i.ajw(u)
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
if(t&&v<s.w.length){o=1.25*D.dU.av(0,D.k.E(u.ay,0,1))
q=s.ax
n=q.h(0,v)
if((n==null?0:n)!==o){q.n(0,v,o)
p=!0}}q=u.at
if(D.a.a0(q,"ad")&&i.bj.M(0,q)){s.p3=D.o.F(s.p3+1,8)
A.fV(1000,50,0.25,"tri")
p=!0}if(p)i.m(i.giV())
m=Math.max(s.gex(0)*0.95,s.gho(0)*1.15)+20
t=t&&v<s.w.length
q=u.b
if(t){l=i.bNn(s,v)
k=D.dx.av(0,D.k.E(u.ay,0,1))
j=s.w[v].b
v=i.e
v===$&&C.c()
t=j==="back"?14:0
if(j==="left")n=0.55*k
else n=j==="right"?-0.55*k:-0.03
v.hQ(m+(70-m)*k,0.2-0.07*k,new A.q(l.a*0.9+q*0.1,36,l.c+t),n)}else{v=i.e
v===$&&C.c()
v.hQ(m,0.24,new A.q(q*0.7,30,u.c*0.6+8),-0.05-q/(s.gex(0)/2)*0.2)}if(u.as!==i.dy)i.m(new A.ebu(i,u))},
ajw(d){return this.cCK(d)},
cCK(d){var w=0,v=C.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j
var $async$ajw=C.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:l={}
r.b8=!0
l.a=null
t=4
p=$.aV.al$.x.h(0,r.a_)
p=p==null?null:p.gbd()
q=x.cU.a(p)
p=q
p=p==null?null:p.m4(0.6).da(0,D.iU)
j=l
w=7
return C.b(x.fa.b(p)?p:C.dU(p,x.eT),$async$ajw)
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
n[p.e].ax.a9(0)
r.axt(d.a,!0)
p=r.d
n=p.d
n===$&&C.c()
m=n[p.e]
p=d.ch
if(p>=0&&p<m.w.length)m.ax.n(0,p,1.25)
r.m(new A.ebj(l,r))
l=r.e
l===$&&C.c()
l.d=new A.q(d.b,36,d.c+4)
l.c=70
l.a=-0.03
l.b=0.15
r.b8=!1
case 1:return C.h(u,v)
case 2:return C.f(s.at(-1),v)}})
return C.i($async$ajw,v)},
S5(){var w,v,u,t=this,s=t.dx
if(s!=null)s.a4(0)
t.dx=null
s=t.d
s===$&&C.c()
s=s.d
s===$&&C.c()
w=s.length
v=0
for(;v<s.length;s.length===w||(0,C.M)(s),++v){u=s[v]
u.at.a9(0)
u.ax.a9(0)}t.aA=null
t.b8=!1
t.m(new A.ebb(t))
t.xX()},
clt(){var w,v,u,t,s,r,q,p,o,n=this,m=n.cx
if(m!=null)return m.bbw(n.CW.gi8()/1000-n.cy)
w=n.aC
if(n.bG!=null)return null
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
return A.aty(n.c5.d>0,0,-1,"",!1,o,"",-1,q,!1,!1,!1,v.a,p,r,u,s,t)}return null},
b7U(){var w,v=this,u=v.c5,t=u.r
if(t<=0)return
u.r=0
w=v.ghI()
if(w!=null)w.r=Math.max(0,w.r-t)
if(v.c!=null)v.m(new A.ebc())},
a2A(){var w,v=this,u=v.d
u===$&&C.c()
w=u.d
w===$&&C.c()
u=w[u.e]
if(u.c!=="outside")return
w=v.aC;(w==null?v.aC=A.hk7(u,0,24):w).My(0)
v.aL=!0
v.bL=Date.now()
u=v.b1
if(u!=null)u.bR(0)
u=new A.a58(v.gcFr(),D.ZD)
u.h2(0)
v.b1=u
v.m(new A.eb3())
v.iD("Slide the round stick to walk. Walk up to a door to go in: the house, the hospital or the shop. Double tap a spot to go there.")},
a2E(){var w,v=this
v.aL=!1
v.be=v.b0=0
v.bi=!1
w=v.b1
if(w!=null)w.bR(0)
v.b1=null
w=v.aC
if(w!=null)w.x=!1
v.m(new A.eba())},
cFs(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.aJ,e=f==null
if(e)w=null
else{v=f.at
v===$&&C.c()
w=v}if(w==null)w=g.aC
if(g.ok!=null)return
v=!0
if(w!=null)if(g.c!=null)if(e){v=g.d
v===$&&C.c()
u=v.d
u===$&&C.c()
v=u[v.e].c!=="outside"}else v=!1
if(v)return
t=Date.now()
s=D.k.E((t-g.bL)/1000,0,0.1)
g.bL=t
w.My(0)
w.z=g.bi&&g.bG==null
if(g.bG==null)w.aJc()
w.cOb(s)
v=g.e
v===$&&C.c()
r=Math.sin(v.a)
q=Math.cos(g.e.a)
v=g.be
u=g.b0
p=g.bG==null
o=g.c5
n=p?o.c>0:o.b<=0
if(p)w.ch=o.d>0?0.28:1
if(n){if((u!==0||v!==0||w.at!=null)&&t-g.c8>6000){g.c8=t
g.eh(p?"You are too tired to walk. Rest a little, or buy some food in a shop.":"The car has no gas. Get out, walk to a gas station and buy gas.",!1)}w.at=null
m=!1}else if(u!==0||v!==0){w.at=null
m=w.aLu(0,r*v+q*u,-q*v+r*u,s)}else m=w.FE(0,s)
v=!m
if(v)w.x=!1
if(g.bZ===0){u=g.d
u===$&&C.c()
p=u.d
p===$&&C.c()
l=p[u.e].c==="outside"}else l=!1
if(l){u=m&&g.bG==null
k=o.bjw(s,m&&g.bG!=null,u)}else k=null
if(k!=null)g.eh(k,!1)
g.b7U()
if(!v||w.Q>0){v=g.e
u=w.f
p=w.r
v.as=null
v.d=new A.q(u,30,p)
v.aV()}if(!e){f.cx=g.al
j=f.ft(0,g.ghI())
g.al=f.cx
if(j!=null){g.iD(j)
g.m(g.giV())}if(f.cy){f.cy=!1
g.Yv(f)}if(f.dx){f.dx=!1
if(!g.id)g.m(new A.ebS(g))}if(f.db){f.db=!1
if(!g.k2)g.m(new A.ebT(g))}if(f.w){f.w=!1
if(!g.k3)g.m(new A.ebU(g))}e=f.x
if(e!==g.k4){g.k4=e
v=g.e
if(e)v.hQ(330,0.35,B.fZX,1.35)
else v.hQ(170,0.4,new A.q(0,30,110),0)}e=f.at
e===$&&C.c()
v=!1
if(e.r>308)if(Math.abs(e.f)<36)e=!(f.a==="tower"&&f.f>1)
else e=v
else e=v
if(e)g.aXa()
if(!g.k4&&g.ok==null)g.c0R()
return}e=!1
if(g.bG==null){e=g.gpk()
e=(e==null?null:e.x)!=null}if(e){e=g.gpk()
e.toString
g.aRI(e.bk6(w.f,w.r,g.CW.gi8()/1000))}e=!1
if(g.bG==null){e=g.d
e===$&&C.c()
v=e.d
v===$&&C.c()
e=v[e.e].c==="outside"&&g.ok==null&&g.bZ===0}if(e){e=$.aRe()
e.FE(0,g.CW.gi8()/1000)
i=e.cQv(w.f,w.r)
if(i>=0)g.crz(i)}e=g.bG
if(e!=null)g.cDt(w)
if(m&&g.bG==null){if(Math.abs(w.f)<24){e=w.r
e=e>-2&&e<14}else e=!1
if(e)if(!(Math.abs(w.w)>2.2)){e=w.at
e=e!=null&&e.b<4}else e=!0
else e=!1
if(e){g.a2E()
g.Az(10)
g.iD("You are inside the living room. Use Go outside to come back out.")
return}e=g.d
e===$&&C.c()
v=e.d
v===$&&C.c()
e=D.d.gaf(v[e.e].x)
v=new C.f5(e,new A.ebV())
while(v.C()){u=e.gR(0)
h=A.vw(new A.q(0,0,B.hy.h(0,u.b).d/2+10),u.e*3.141592653589793/2)
if(Math.abs(w.f-(u.c+h.a))<22&&Math.abs(w.r-(u.d+h.c))<16){g.aaW(u)
return}}}g.cDM(w)},
c0R(){var w,v,u,t,s,r,q,p,o,n,m=this,l=m.e
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
if(s!==w)l.bnH(s)},
aaW(d){var w,v,u,t,s,r,q=this
q.be=q.b0=0
w=d.b
if(w==="store"||w==="gasstation")w="shop"
else if(w==="hq")w="tower"
v=q.d
v===$&&C.c()
u=v.d
u===$&&C.c()
t=d.a
s=A.fXU(w,d,u[v.e].k4.t(0,t))
s.cx=q.al
s.B(q.ghI())
q.aj8(s,q.gIy().h(0,t))
s.B(q.ghI())
q.aJ=s
q.cL=null
w=s.a
if(w==="tower"){v=q.d
u=v.d
u===$&&C.c()
r=u[v.e].cy.h(0,t)
v=q.cJ
if(v!=null&&v.c==="office"&&r!=null)q.k3=!0}v=q.e
v===$&&C.c()
v.e=60
v.f=420
v.w=0.15
v.x=1.35
v.r6(!0)
q.e.hQ(170,0.4,new A.q(0,30,110),0)
q.m(q.giV())
A:{if("hospital"===w){w="The hospital. Walk onto the blue mat to admit the sick, and up to a bed to treat the patient. Walk to the green mat to go out."
break A}if("dmv"===w){w="The licence office. Walk onto the blue mat at the desk to get your Uber licence. Walk to the green mat to go out."
break A}if("tower"===w){w="The lobby of an office tower. Walk onto the blue mat (or tap the elevator) to choose a level. Walk to the green mat to go out."
break A}if("house2"===w||"bighouse"===w){w="The house. Walk onto the red or green mat at the breaker panel. Walk to the green mat to go out."
break A}if("school"===w){w="The school. Walk onto the mats to teach the class or read in the library. Walk to the green mat to go out."
break A}if("firestation"===w){w="The fire station. Walk onto the mats to check the equipment. Walk to the green mat to go out."
break A}w="The shop. Walk onto the yellow mat for food and the purple mat for medicine. Walk to the green mat to go out."
break A}q.iD(w)
A.fV(660,80,0.25,"tri")},
aXa(){var w,v,u,t=this,s=t.aJ,r=t.aC
if(s==null||r==null)return
w=s.b
v=B.hy.h(0,w.b)
v.toString
t.al=s.cx
t.aJ=null
t.be=t.b0=0
u=A.vw(new A.q(0,0,v.d/2+30),w.e*3.141592653589793/2)
r.f=w.c+u.a
r.r=w.d+u.c
r.w=0
r.at=null
r.My(0)
t.m(t.giV())
t.xX()
v=t.e
v===$&&C.c()
v.apF(new A.q(r.f,30,r.r))
t.iD("You are back in the city.")},
cDM(d){var w,v,u,t,s,r,q,p,o,n,m=this,l={}
l.a=null
w=m.bG==null
v=!1
if(!w||m.al==null){u=m.c5.b
if(u<(!w?0.7:0.99)){u=m.d
u===$&&C.c()
t=u.d
t===$&&C.c()
u=D.d.b3(t[u.e].x,new A.ebL(d))
v=u}}if(v)l.a=new C.Gc(new A.ebM(m),"\u26fd Buy gas ("+A.h5s(m.c5.b)+" \u2b50)")
else if(!w)l.a=new C.Gc(m.gbSZ(),"\ud83d\udeaa Get out")
else{if(m.al!=null)l.a=new C.Gc(m.gc7y(),"\u2b07 Put the crate down")
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
p=B.hy.h(0,t).a.toLowerCase()
if(l.a!=null)break
if(t==="crate"&&q<46){l.a=new C.Gc(new A.ebN(m,r),"\ud83d\udce6 Pick up the crate")
break}if(t==="pole"||t==="lamppost"){o=m.d
n=o.d
n===$&&C.c()
o=n[o.e].k3.t(0,r.a)&&q<60}else o=!1
if(o){l.a=new C.Gc(new A.ebO(m,r),"\ud83d\udd27 Fix the street light")
break}if(D.d.t(B.HP,t)&&q<36){l.a=new C.Gc(new A.ebP(m,r),"\ud83c\udf4e Feed the "+p)
break}if(D.d.t(B.der,t)&&q<60){l.a=new C.Gc(new A.ebQ(m,r),"\ud83d\ude97 Get in the "+p)
break}}}w=l.a
w=w==null?null:w.b
u=m.cL
if(w!=(u==null?null:u.b))m.m(new A.ebR(l,m))},
bQb(d){var w,v=this,u=v.cl,t=d.a,s=u.h(0,t),r=B.hy.h(0,d.b).a
if(s!=null&&v.CW.gi8()/1000-s<30){v.eh("The "+r.toLowerCase()+" has just eaten. Come back in a little while.",!1)
return}u.n(0,t,v.CW.gi8()/1000)
u=v.ghI()
if(u==null)w=null
else{++u.r
w="You fed the "+r.toLowerCase()+". +1 point."
u.PN(w)}if(w==null)w="You fed the "+r.toLowerCase()+"."
A.fV(880,90,0.25,"tri")
v.m(new A.e93())
v.iD(w)},
bSO(d){var w=this,v=w.aC
if(v==null)return
w.bG=d
v.CW=d.a
v.ay=22
v.ch=2.4
v.f=d.c
v.r=d.d
v.w=Math.atan2(Math.cos(d.e*3.141592653589793/2),-Math.sin(d.e*3.141592653589793/2))
v.at=null
v.My(0)
w.m(w.giV())
w.iD("You are driving the "+B.hy.h(0,d.b).a.toLowerCase()+". Slide the stick to drive. Press Get out to stop.")
A.fV(300,120,0.25,"tri")},
bT_(){var w,v,u,t,s,r,q=this,p=q.bG,o=q.aC
if(p==null||o==null)return
p.c=o.f
p.d=o.r
w=o.w
p.e=D.o.F(D.k.V((w-1.5707963267948966)/1.5707963267948966),4)
v=w+1.5707963267948966
o.CW=q.bG=null
o.ay=7
o.ch=1
o.z=!1
o.My(0)
for(w=[46,62,80],u=0;u<3;++u){t=w[u]
s=o.f+Math.sin(v)*t
r=o.r+Math.cos(v)*t
if(!o.KM(s,r)){o.f=s
o.r=r
break}}o.aJc()
q.m(q.giV())
q.iD("You got out.")},
bO3(){var w=this.bG,v=this.aC
if(w==null||v==null)return null
return new C.ea([w.b,v.f,v.r,v.w,w.f])},
yc(d){return this.cnz(d)},
cnz(d){var w=0,v=C.j(x.H),u=1,t=[],s=[],r=this,q
var $async$yc=C.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:++r.bZ
u=2
q=r.c
q.toString
w=5
return C.b(C.a4(q,!1).cc(d),$async$yc)
case 5:s.push(4)
w=3
break
case 2:s=[1]
case 3:u=1;--r.bZ
w=s.pop()
break
case 4:return C.h(null,v)
case 1:return C.f(t.at(-1),v)}})
return C.i($async$yc,v)},
YX(){var w=0,v=C.j(x.H),u=1,t=[],s,r,q
var $async$YX=C.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
w=6
return C.b(C.az(),$async$YX)
case 6:s=e
w=C.eA(J.r(s.a,"ngmy_city_locked_until"))!=null?7:8
break
case 7:w=9
return C.b(J.hz(s,"ngmy_city_locked_until"),$async$YX)
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
return C.i($async$YX,v)},
aBz(d){var w=this,v=++w.hK
if(v>=3){w.hK=0
w.B2()
w.b0h()}else if(v===2){w.eh(d+". That is two in a row.",!1)
w.b0h()}else w.eh(d+". Answer the phone and finish the job, or you lose your place.",!1)},
b0h(){A.fV(1046,160,0.3,"sine")
this.m(new A.e9K(this))},
gaWJ(){return this.bZ>0||this.cJ!=null||Date.now()<0||this.p4},
c7C(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this,a2=a1.d
a2===$&&C.c()
a2=a2.d
a2===$&&C.c()
w=D.d.fW(a2,new A.e9H())
v=a1.ghI()
a2=x._
u=C.a([],a2)
for(t=w.x,s=t.length,r=w.k4,q=0;q<t.length;t.length===s||(0,C.M)(t),++q){p=t[q]
o=p.b
if(o==="house2"||o==="bighouse"){o=p.a
o=!r.t(0,o)&&o!==a1.je}else o=!1
if(o)u.push(p)}s=C.a([],a2)
for(o=t.length,n=w.k3,q=0;q<t.length;t.length===o||(0,C.M)(t),++q){p=t[q]
m=p.b
if((m==="pole"||m==="lamppost")&&!n.t(0,p.a))s.push(p)}l=new C.Z(t,new A.e9I(),C.T(t).k("Z<1>"))
k=C.a([0,1,2,3],x.t)
o=a1.iM
D.d.dZ(k,o)
a2=C.a([],a2)
for(m=t.length,j=w.cy,q=0;q<t.length;t.length===m||(0,C.M)(t),++q){p=t[q]
i=p.b
if((i==="tower"||i==="hq")&&!j.aj(0,p.a))a2.push(p)}for(t=k.length,m=v!=null,q=0;q<k.length;k.length===t||(0,C.M)(k),++q){h=k[q]
if(h===0&&u.length!==0&&r.a<4){p=u[o.au(u.length)]
a2=p.a
r.M(0,a2)
a1.je=a2
return new A.Qg(p,p.b==="bighouse"?"the big house":"the house","power","",0)}if(h===1&&m&&!l.gan(0)){i=v.gC4()
g=C.T(i).k("Z<1>")
f=C.C(new C.Z(i,new A.e9J(),g),g.k("L.E"))
i=f.length
if(i!==0){e=f[o.au(i)]
e.e=!0
e.c=Math.min(e.c,70)
d=l.gaf(0)
if(!d.C())C.b8(C.fs())
return new A.Qg(d.gR(0),"the hospital","sick",e.a.b,0)}}if(h===3&&a2.length!==0&&j.a<3){p=a2[o.au(a2.length)]
a0=2+o.au(A.hvE(p)-1)
j.n(0,p.a,a0)
return new A.Qg(p,p.b==="hq"?"the NGMY company building":"the office tower","office","",a0)}if(h===2&&s.length!==0&&n.a<4){p=s[o.au(s.length)]
n.M(0,p.a)
return new A.Qg(p,"the street","light","",0)}}return null},
aWT(d){var w,v,u,t=this.d
t===$&&C.c()
t=t.d
t===$&&C.c()
w=D.d.fW(t,new A.e9t())
switch(d.c){case"power":return!w.k4.t(0,d.a.a)
case"light":return!w.k3.t(0,d.a.a)
case"office":return!w.cy.aj(0,d.a.a)
default:v=this.ghI()
if(v==null)return!1
t=v.c
t===$&&C.c()
u=new C.Z(t,new A.e9u(d),C.T(t).k("Z<1>"))
if(!u.gaf(0).C())return!0
return u.gI(0).r>=0||!u.gI(0).e||!u.gI(0).f}},
Sj(d){var w,v,u,t=this,s=t.aC
if(s!=null){w=t.d
w===$&&C.c()
v=w.d
v===$&&C.c()
w=v[w.e].c!=="outside"}else w=!0
if(w)return
if(t.aJ!=null)t.aXa()
s.at=null
s.My(0)
u=t.bRJ(d,s)
s.f=u.a
s.r=u.b
s.aJc()
w=t.e
w===$&&C.c()
w.xh(170,new A.q(s.f,30,s.r))
if(!t.aL)t.a2A()},
bRJ(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=d.b,i=B.hy.h(0,j)
i.toString
w=B.aPV.t(0,j)
v=w?i.d/2+32:34
u=A.vw(new A.q(0,0,1),d.e*3.141592653589793/2)
j=u.c
i=u.a
t=-i
s=C.a([],x.f)
if(w)for(r=0;r<5;++r)for(q=v+B.dbj[r],p=i*q,q=j*q,o=0;o<5;++o){n=B.d0y[o]
s.push(new C.z(d.c+p+j*n,d.d+q+t*n))}else for(m=0;m<12;++m){l=m*3.141592653589793/6
s.push(new C.z(d.c+Math.cos(l)*v,d.d+Math.sin(l)*v))}for(j=s.length,r=0;r<s.length;s.length===j||(0,C.M)(s),++r){k=s[r]
if(!e.KM(k.a,k.b))return k}return D.d.gI(s)},
cyo(d){var w,v,u=this
u.cJ=d
u.hL=0
u.Sj(d.a)
w=d.c
A:{if("sick"===w){v="New job: "+d.d+" is sick. Go into the hospital and onto the desk."
break A}if("light"===w){v="New job: a street light is out. Tap the dark light to fix it."
break A}v="New job: a house has no power. Walk in and fix it at the panel."
break A}u.eh(v,!0)
u.m(new A.eaZ())},
bTy(d){var w,v=this,u=v.d
u===$&&C.c()
w=u.d
w===$&&C.c()
if(w[u.e].c!=="outside")return
v.Sj(d)
u=d.b
if(u==="house2"||u==="bighouse")v.aaW(d)
else if(u==="tower"||u==="hq"){v.aaW(d)
v.m(new A.e9n(v))}else v.eh(y.Y,!0)},
cCU(){var w,v,u,t=$.aRe(),s=C.a([],x.f),r=this.gpk()
r=r==null?null:r.ame(this.CW.gi8()/1000)
if(r==null)r=B.HY
w=r.length
v=0
for(;v<r.length;r.length===w||(0,C.M)(r),++v){u=r[v]
s.push(new C.z(u.b,u.c))}t.d=s
return A.ihW(this.CW.gi8()/1000)},
crz(d){var w,v,u,t,s,r=this,q=Date.now()
if(q-r.mI<1e4)return
r.mI=q
w=r.aC
if(w==null)return
A.fV(110,600,0.5,"noise")
C.fJ()
r.be=r.b0=0
w.at=null
v=r.c5
v.a=Math.min(v.a,0.2)
v.c=v.d=0
u=B.kl[d].a==="bus"?"bus":"police car"
v=r.d
v===$&&C.c()
t=v.d
t===$&&C.c()
v=t[v.e].x
t=C.T(v).k("Z<1>")
s=C.C(new C.Z(v,new A.eaN(),t),t.k("L.E"))
if(s.length===0){r.eh("A "+u+" ran you over! Always cross at the zebra crossing when the green walking person shows.",!1)
return}v=r.gpk()
if(v!=null)v.cVY(D.d.gI(s))
r.Sj(D.d.gI(s))
r.aaW(D.d.gI(s))
r.eh("\ud83d\ude91 A "+u+" ran you over! An ambulance brought you to the hospital. Medicine and food are being ordered for you: they are on the Orders board. Cross at the zebra crossing when the green walking person shows.",!1)
r.m(new A.eaO(r))},
aiQ(){var w=0,v=C.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g
var $async$aiQ=C.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:h=r.d
h===$&&C.c()
if(h.a.length!==0){w=1
break}q=null
p=$.ajO
w=p==null||p.a!==h.b?3:4
break
case 3:t=6
w=9
return C.b(A.aTD(),$async$aiQ)
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
break}n=$.ajO
if(n!=null&&n.a===r.d.b)m=n
else{if(q!=null){h=C.aK(J.r(q,"seed"))
h=h==null?null:D.k.N(h)
if(h==null)h=-1
h=h===r.d.b}else h=!1
if(h)m=A.fY1(q)
else if(q!=null&&r.ej){h=C.aK(J.r(q,"seed"))
l=h==null?null:D.k.N(h)
h=A.aW4(l==null?r.d.b:l)
r.d=$.E7=h
A.haR(h,q)
m=A.fY1(q)}else{h=r.d.b
m=A.fY0(h,h)
m.NA(r.d)}}$.ajO=m
for(h=m.d,k=h.length,j=r.bJ,i=0;i<h.length;h.length===k||(0,C.M)(h),++i)j.M(0,h[i].a)
r.m(new A.eb_(r))
r.bv=C.dg(D.fA,new A.eb0(r))
case 1:return C.h(u,v)
case 2:return C.f(s.at(-1),v)}})
return C.i($async$aiQ,v)},
c7B(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=i.ghI()
if(h==null||i.c==null)return
if(i.cx==null){w=i.d
w===$&&C.c()
h.aDd(0,1,w)}if(++i.bX%8===0){w=i.d
w===$&&C.c()
h.CT(0,w)}if(i.aJ!=null&&i.gak7())i.asu()
w=!1
if(!i.aL)if(i.bZ===0){v=i.d
v===$&&C.c()
u=v.d
u===$&&C.c()
if(u[v.e].c==="outside"){w=i.c5
w=w.c>0||w.d>0}}if(w){t=i.c5.a6N(1)
if(t!=null)i.eh(t,!1)
i.b7U()}if(i.aL){w=i.d
w===$&&C.c()
v=w.d
v===$&&C.c()
w=v[w.e].c==="outside"&&!i.c5.f&&i.iM.au(240)===0}else w=!1
if(w){w=i.c5
w.f=!0
w.aV()
i.eh("You feel unwell: a headache. You tire faster until you take pills from a shop.",!1)}if(Date.now()<0||i.bZ>0)return
w=!1
if(D.o.F(i.bX,45)===20){v=i.d
v===$&&C.c()
if(v.a.length===0){w=v.d
w===$&&C.c()
v=w[v.e].c==="outside"
w=v}}if(w)i.c50()
w=i.d
w===$&&C.c()
if(w.a.length===0){v=w.d
v===$&&C.c()
v=v[w.e].c==="outside"}else v=!1
if(v){w=i.gpk()
s=w==null?null:w.FE(0,i.CW.gi8()/1000)
if(s!=null)i.eh("\ud83c\udfc1 "+s,!0)
r=i.aC
if(r!=null){w=i.gpk()
w=(w==null?null:w.x)!=null&&i.aJ==null}else w=!1
if(w){w=i.gpk()
w.toString
i.aRI(w.bk6(r.f,r.r,i.CW.gi8()/1000))}q=i.cJ
if(q!=null){++i.hL
if(i.aWT(q)){i.hK=0
i.ld=Date.now()
i.ly=0
i.cJ=null
i.hL=0
if(q.c==="sick"){p=10+i.iM.au(26)
w=i.ghI()
if(w!=null)w.r+=p
i.eh("The sick person is at the hospital. +"+p+" stars. Well done.",!0)}if(i.c!=null)i.m(i.giV())}else if(i.hL>=240){i.cJ=null
i.hL=0
i.aBz("The job was not finished in time")}}else{w=i.eK
if(w.length!==0&&i.aJ==null&&i.bB==null&&i.bC==null&&Date.now()-i.ld>1e4){o=D.d.cE(w,0)
if(!i.aWT(o))i.cyo(o)}else if(i.bB==null&&i.bC==null&&++i.ly>=45)i.cur()}}else{v=w.d
v===$&&C.c()
if(v[w.e].c!=="outside")i.ly=0}for(w=h.d,v=w.length,u=i.bJ,n=0;n<w.length;w.length===v||(0,C.M)(w),++n){m=w[n]
l=i.d
k=l.d
k===$&&C.c()
if(k[l.e].c!=="outside")continue
if((i.bZ>0||i.cJ!=null||Date.now()<0||i.p4)&&!u.t(0,m.a))continue
if(u.M(0,m.a)){i.ly=0
i.bB=m
i.bC=null
i.b74()}}u.pn(new A.e9A(h),!0)
j=i.bB
if(j!=null&&!D.d.b3(w,new A.e9B(j)))i.B2()},
cur(){var w,v,u=this
u.ly=0
w=u.c7C()
if(w==null)return
if(u.gaWJ()){v=u.eK
if(v.length<3)v.push(w)
return}u.b4j(w)},
b4j(d){var w=this
w.ly=0
w.bB=null
w.bC=d
w.b74()},
b74(){var w,v=this
v.S=0
w=v.P
if(w!=null)w.a4(0)
v.P=C.dg(D.rk,new A.eb1(v))
v.m(new A.eb2())},
B2(){var w=this,v=w.P
if(v!=null)v.a4(0)
w.P=null
if(w.c==null)return
w.m(new A.eb9(w))},
cgY(){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null
if(l.ok!=null)return k
if(l.aL){w=l.d
w===$&&C.c()
v=w.d
v===$&&C.c()
u=v[w.e].c==="outside"}else u=!1
t=l.bB
s=l.bC
if(!u&&t==null&&s==null)return k
r=l.ez
w=new A.e9Z()
v=new A.ea7(r)
q=x.p
p=C.a([],q)
if(s!=null){o=C.h7(D.aC,k,C.d(s.gbek(),k,k,k,k,k,k,D.nH,k,k,k),k,28)
n=s.gaDK()
p.push(v.$7$about$avatar$glow$onAnswer$onDecline$onLater$who(s.gbqE(),o,D.bG,new A.ea0(l,s),new A.ea1(l),new A.ea2(l,s),n))}if(t!=null){o=B.CG[t.b]
n=o.b
p.push(v.$6$about$avatar$glow$onAnswer$onDecline$who("NGMY City \xb7 mobile",C.h7(o.e.c,k,C.d(n[0],k,k,k,k,k,k,D.JU,k,k,k),k,28),D.bj,new A.ea3(l,t),l.gcyU(),n))}if(u){v=C.a([],q)
o=l.cL
if(o!=null)v.push(w.$3$col("\u270b "+o.b,o.a,D.bG))
o=C.a([],q)
if(l.bG==null){n=l.bi
m=n?"\ud83c\udfc3 Run: on":"\ud83c\udfc3 Run"
o.push(w.$3$on(m,new A.ea4(l),n))}if(l.bG==null)o.push(w.$3$col("\u2b06 Jump",new A.ea5(l),D.co))
v.push(C.B(o,D.m,k,D.e,D.Q,0,k,k))
w=l.bG==null
o=w?206:140
v.push(new C.D(D.a_C,new C.a7(o,k,new A.Us(l.c5,!w,12,k),k),k))
p.push(new C.D(B.bAW,C.B(C.a([new A.aIE(new A.ea6(l),k),C.x(v,D.dG,k,D.e,D.Q,0,D.p)],q),D.dG,k,D.iG,D.i,0,k,k),k))}return new C.a7(r,k,C.x(p,D.m,k,D.e,D.Q,0,D.p),k)},
aTA(){var w=this.d
w===$&&C.c()
if(w.a.length!==0)this.Em()
else this.a0j()},
Em(){var w=0,v=C.j(x.H),u,t=this,s,r,q,p
var $async$Em=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:p=t.d
p===$&&C.c()
s=p.d
s===$&&C.c()
r=s[p.e]
if(r.gz5()){t.iD("This lesson is done. Try everything: it all works.")
w=1
break}p=r.p4
w=p==="ptrap"||p==="faucet"?3:5
break
case 3:if(r.RG==null)r.RG=A.h0J()
w=6
return C.b(t.yc(C.dX(new A.e9L(r),!1,null,x.H)),$async$Em)
case 6:w=4
break
case 5:if(r.R8==null)r.R8=new A.Cx(C.U(x.S,x.N))
w=7
return C.b(t.yc(C.dX(new A.e9M(r),!1,null,x.H)),$async$Em)
case 7:case 4:if(t.c==null){w=1
break}t.m(t.giV())
if(r.gz5()){p=t.ghI()
if(p!=null)p.r+=10
q=r.p4
A:{p="Done! Tap the outlet and plug something in."
if("switch"===q){p="Done! Tap the switch on the wall: the light comes on."
break A}if("fan"===q){p="Done! Tap the wall switch and the fan spins."
break A}if("outlet"===q||"gfci"===q)break A
s=D.d.t(B.jV,q)
if(s){p="Done! Tap the switch on the wall: it works."
break A}s=D.d.t(B.lH,r.p4)
if(s)break A
p="Done! The sink works."
break A}t.iD(p)}case 1:return C.h(u,v)}})
return C.i($async$Em,v)},
ak6(d){return this.cFS(d)},
cFS(d){var w=0,v=C.j(x.H),u,t=this,s,r,q,p
var $async$ak6=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:p=t.d
p===$&&C.c()
s=p.d
s===$&&C.c()
r=s[p.e].id[d]
q=r.gwD()
w=3
return C.b(t.yc(C.dX(new A.ebW(r),!1,null,x.H)),$async$ak6)
case 3:if(t.c==null){w=1
break}t.m(t.giV())
if(r.gwD()&&!q){p=t.ghI()
if(p!=null)p.r+=8}if(r.gwD()){p=q?"":"You are paid 8 stars. "
s=r.a==="switch"?"Tap it to turn the light on and off.":"Tap it to plug something in."
t.iD("Wired! "+p+s)}case 1:return C.h(u,v)}})
return C.i($async$ak6,v)},
a0j(){var w=0,v=C.j(x.H),u,t=this,s,r,q,p,o,n
var $async$a0j=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:n=t.d
n===$&&C.c()
s=n.d
s===$&&C.c()
r=s[n.e]
if(r.c==="outside"){w=1
break}s=r.CW
if(s==null){q=A.crL(A.iiN(r),r.b,!1,n.b*37+r.a,!1)
q.am2()
if(!r.ay)q.cIV()
r.CW=q
n=q}else n=s
n.b=t.d.c
p=r.gkL()
w=3
return C.b(t.yc(C.dX(new A.e9O(r),!1,null,x.H)),$async$a0j)
case 3:if(t.c==null){w=1
break}t.m(t.giV())
if(r.gkL()&&!p){o=10+t.iM.au(26)
n=t.ghI()
if(n!=null)n.r+=o
n=r.gjQ()?"":" The room still needs its plumbing, so it stays red until the pipes are done too."
t.eh(r.b+": the wiring is finished and the light has power. You are paid "+o+" stars!"+n,!0)}else if(r.gkL()){n=r.gjQ()?"":" The room still needs its plumbing."
t.iD(r.b+": the wiring is finished. The light has power."+n)}case 1:return C.h(u,v)}})
return C.i($async$a0j,v)},
a0a(){var w=0,v=C.j(x.H),u,t=this,s,r,q,p,o,n
var $async$a0a=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:n=t.d
n===$&&C.c()
s=n.d
s===$&&C.c()
r=s[n.e]
s=r.c
if(!(s==="bathroom"||s==="kitchen")){t.eh("This room has no plumbing. Bathrooms and the kitchen do.",!1)
w=1
break}q=r.fr
if(q==null){s=s==="kitchen"?"kitchen":"bathroom"
s=r.fr=A.h0I(!1,n.b*41+r.a,s)
n=s}else n=q
if(!r.ch&&!n.ga3A())r.fr.cIU()
r.fr.b=t.d.c
p=r.gjQ()
w=3
return C.b(t.yc(C.dX(new A.e9N(r),!1,null,x.H)),$async$a0a)
case 3:if(t.c==null){w=1
break}t.m(t.giV())
if(r.gjQ()&&!p){o=10+t.iM.au(26)
n=t.ghI()
if(n!=null)n.r+=o
t.eh(r.b+": the plumbing is finished and nothing leaks. You are paid "+o+" stars!",!0)}else if(r.gjQ())t.iD(r.b+": the plumbing is finished and nothing leaks.")
case 1:return C.h(u,v)}})
return C.i($async$a0a,v)},
bBc(){var w=this.c
w.toString
return C.bU(E.lw,null,new A.e7q(this),w,!0,!0,!1,D.k1,!1,!1,x.H)},
bAR(d){var w,v,u,t,s,r,q,p,o=this,n=o.d
n===$&&C.c()
w=n.d
w===$&&C.c()
v=w[n.e]
n=v.c
if(n==="outside"||n==="hall"){o.eh("Add devices in a room, not in the hall or the garden.",!1)
return}n=v.id
if(n.length>=4){o.eh("This room already has four added devices.",!1)
return}w=C.a([-v.gex(0)/4,v.gex(0)/4],x.n)
for(u=v.w,t=D.d.gaf(u),s=new C.f5(t,new A.e7k());s.C();)w.push(t.gR(0).c)
for(u=D.d.gaf(u),t=new C.f5(u,new A.e7l());t.C();)w.push(u.gR(0).c+24)
for(u=n.length,r=0;r<n.length;n.length===u||(0,C.M)(n),++r)w.push(n[r].b)
p=-v.gex(0)/2+14
for(;;){if(!(p<=v.gex(0)/2-14)){q=null
break}if(D.d.d5(w,new A.e7m(p))){q=p
break}p+=6}if(q==null){o.eh("There is no free place left on the back wall.",!1)
return}o.m(new A.e7n(o,v,d,q))
o.iD("Added. It is red because it is not wired: tap it to wire it.")},
aeh(d,e){var w,v,u=this,t=u.d
t===$&&C.c()
w=t.d
w===$&&C.c()
v=w[t.e].BS(u.Q)
if(v==null)return
u.m(new A.e9E(u,v,D.d.t(B.RA,v.b),d,e))},
c7J(){var w,v,u=this,t=u.d
t===$&&C.c()
w=t.d
w===$&&C.c()
v=w[t.e].BS(u.Q)
if(v==null)return
u.m(new A.ebv(u,v))},
coI(){var w,v,u=this,t=u.d
t===$&&C.c()
w=t.d
w===$&&C.c()
v=w[t.e].BS(u.Q)
if(v==null)return
u.m(new A.eaC(u,v))
u.iD(B.hy.h(0,v.b).a+": "+B.cVN[v.f]+".")},
c7H(d){var w,v,u=this,t=u.d
t===$&&C.c()
w=t.d
w===$&&C.c()
v=w[t.e].BS(u.Q)
if(v==null)return
u.m(new A.eaD(u,v))},
bAU(d){var w,v=this,u=v.d
u===$&&C.c()
w=u.d
w===$&&C.c()
v.m(new A.e7o(v,w[u.e].M(0,d)))
v.iD(B.hy.h(0,d).a+" added. Move it with the arrows.")},
Ay(d,e,f,g,h){var w=null,v=e?g.j(0.25):D.c.j(0.07),u=C.m(14),t=e?g:D.aZ
t=C.J(t,D.r,e?2:1)
v=C.a([C.p(w,C.d(d,w,w,w,w,w,w,C.l(w,w,e?g:D.c,w,w,w,w,w,w,w,w,11,w,w,D.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),D.f,w,w,new C.o(v,w,t,u,w,w,D.n),w,w,w,w,D.eI,w,w,w)],x.p)
if(h)v.push(C.ao(w,C.p(w,w,D.f,w,w,new C.o(D.aw,w,C.J(B.Fo,D.r,2),w,w,w,D.a6),w,11,w,w,w,w,w,11),w,w,w,-2,-3,w))
return new C.D(D.fB,C.aB(w,new C.an(D.a_,w,D.ab,D.f,v,w),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,!1,D.a4),w)},
ii(d,e,f,g){return this.Ay(d,e,f,g,!1)},
J3(d,e,f){return this.Ay(d,e,f,D.aC,!1)},
aBG(d,e,f,g){var w=null,v=g==null,u=v?34:w,t=v?w:D.l3,s=C.m(10),r=e?D.c:D.aZ
r=C.J(r,D.r,e?3:1)
if(v)v=w
else v=C.at(C.d(g,w,w,w,w,w,w,C.l(w,w,d.js()>0.5?D.w:D.c,w,w,w,w,w,w,w,w,12,w,w,D.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,w,w)
return new C.D(E.tY,C.aB(w,C.p(w,v,D.f,w,w,new C.o(d,w,r,s,w,w,D.n),w,34,w,w,t,w,w,u),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,!1,D.a4),w)},
czN(d,e,f){return this.aBG(d,e,f,null)},
Dn(d,e){var w=null,v=D.c.j(0.1),u=C.m(10),t=C.J(D.aZ,D.r,1)
return new C.D(D.fB,C.aB(w,C.p(w,C.X(d,D.c,w,w,w,20),D.f,w,w,new C.o(v,w,t,u,w,w,D.n),w,36,w,w,w,w,w,40),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,e,w,w,w,w,w,w,!1,D.a4),w)},
bJj(){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null
if(k.cx!=null){w=k.dy
return C.B(C.a([C.E(C.d("\ud83c\udfac "+(w.length===0?"Walking in":w),j,1,D.a1,j,j,j,B.fl0,j,j,j),1),k.ii("\u23f9 Stop the tour",!0,k.gcyX(),D.cs)],x.p),D.m,j,D.e,D.i,0,j,j)}switch(k.r){case"furniture":w=k.d
w===$&&C.c()
v=w.d
v===$&&C.c()
u=v[w.e].BS(k.Q)
w=x.p
v=C.a([],w)
if(u!=null){t=C.a([k.Dn(D.l6,new A.e8A(k)),k.Dn(D.jS,new A.e8B(k)),k.Dn(D.w9,new A.e8C(k)),k.Dn(D.uc,new A.e8D(k)),k.Dn(G.aoD,k.gc7I()),k.Dn(D.ns,k.gcoH())],w)
s=k.d
r=s.d
r===$&&C.c()
if(r[s.e].c==="outside")t.push(k.Dn(D.OK,k.gcu5()))
t.push(k.Dn(D.e9,k.gc7G(k)))
v.push(new C.a7(j,30,C.cr(t,j,j,j,j,D.aM,!1),j))}else v.push(B.aZF)
w=C.a([],w)
for(t=B.hy.gdV(B.hy),t=t.gaf(t);t.C();){s=t.gR(t)
r=D.d.t(B.dhK,s.a)
q=k.d
p=q.d
p===$&&C.c()
if(r===(p[q.e].c==="outside")){r=s.b
w.push(k.ii(r.b+" "+r.a,!1,new A.e8E(k,s),D.b2))}}v.push(new C.a7(j,30,C.cr(w,j,j,j,j,D.aM,!1),j))
return C.x(v,D.m,j,D.e,D.Q,0,D.p)
case"walls":w=k.as
v=w<0
w=v?"All walls":"Wall "+(w+1)+": tap Look to reset"
v=C.a([k.J3(w,v,new A.e8F(k))],x.p)
for(o=0;o<8;++o)v.push(k.aBG(B.az2[o],!1,new A.e8G(k,o),B.dsd[o]))
return new C.a7(j,30,C.cr(v,j,j,j,j,D.aM,!1),j)
case"floor":w=C.a([],x.p)
for(o=0;o<7;++o){v=B.ayL[o]
t=k.d
t===$&&C.c()
s=t.d
s===$&&C.c()
w.push(k.aBG(v.b,s[t.e].Q===o,new A.e8H(k,o),v.a))}return new C.a7(j,30,C.cr(w,j,j,j,j,D.aM,!1),j)
case"ceiling":w=k.d
w===$&&C.c()
v=w.d
v===$&&C.c()
w=v[w.e].go==="fan"?"\ud83c\udf00 Fan (tap for light)":"\ud83d\udca1 Light (tap for fan)"
w=C.a([k.ii(w,!1,new A.e8I(k),D.b9)],x.p)
for(o=0;o<4;++o){v=B.axy[o]
t=k.d
s=t.d
s===$&&C.c()
w.push(k.czN(v,s[t.e].as===o,new A.e8J(k,o)))}return new C.a7(j,30,C.cr(w,j,j,j,j,D.aM,!1),j)
default:n=C.aY(x.S)
w=C.a([k.ii("\u26f6 Full screen",!1,k.gbPm(),D.aQ)],x.p)
v=k.d
v===$&&C.c()
t=v.d
t===$&&C.c()
if(t[v.e].c==="outside")w.push(k.ii("\ud83d\udcf1 Phone",!1,k.gbPo(),D.c5))
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
r=s.gkL()&&s.gjQ()
w.push(k.Ay("\ud83d\udeaa "+s.b,!1,new A.e8K(k,l),D.b2,!r))}}return new C.a7(j,30,C.cr(w,j,j,j,j,D.aM,!1),j)}},
B(d){var w,v=this,u=null
if(Date.now()<0){w=C.dE(0,0,0,0-Date.now(),0,0).a
return C.c7(u,F.nd,C.bl(!0,C.at(new C.D(D.qd,C.x(C.a([B.fKM,D.ae,B.fKT,D.W,B.fL5,D.aA,C.d("It opens again in "+D.o.ao(w,36e8)+"h "+D.o.F(D.o.ao(w,6e7),60)+"m",u,u,u,u,u,u,B.fmU,u,u,u),D.dS,C.bH(D.aTN,u,new A.ebZ(d),u)],x.p),D.m,u,D.e,D.Q,0,D.p),u),u,u,u),!0,!1,D.af,!0,!0),u,!1,!1,u,u)}w=C.a([C.bT(0,new C.ex(v.bFh(d),v.a_),0,0,0)],x.p)
if(v.aA!=null)w.push(C.bT(0,C.e0(C.ls(new A.ec_(v),u,D.dx,D.hr,new C.c0(v.aE,x.ac),new A.ec0(v),new C.bp(1,0,x.g6),x.i),!0,u),0,0,0))
return new C.an(D.a_,u,D.ab,D.t,w,u)},
bHz(){var w,v,u=this,t=null,s=C.a([],x.p)
if(u.gak7())s.push(u.ii("\u2705 Complete work",!0,u.gaQr(),D.be))
w=u.aL
v=w?"\u23f9 Stop walking":"\ud83d\udeb6 Walk the city"
s.push(u.ii(v,w,w?u.gb7m():u.gb77(),D.bj))
s.push(u.ii("\ud83c\udfd7 Build",!1,u.gaNf(),D.bj))
w=u.ghI()
w=w==null?t:w.d.length
if(w==null)w=0
s.push(u.Ay("\ud83d\udcde Calls",!1,new A.e8c(u),D.c5,w>0))
s.push(u.ii("\ud83c\udfe5 Hospital",!1,new A.e8d(u),D.cs))
s.push(u.ii("\ud83d\uded2 Shop",!1,new A.e8e(u),D.cR))
s.push(u.ii("\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc67 People",!1,new A.e8i(u),D.co))
s.push(u.ii("\ud83c\udfe0 Go inside",!1,new A.e8j(u),D.bj))
w=u.aJ
if((w==null?t:w.a==="shop")===!0)s.push(u.ii("\ud83d\uded2 Buy things",u.k2,new A.e8k(u),D.bG))
w=u.aJ
if((w==null?t:w.a==="tower")===!0)s.push(u.ii("\ud83c\udfe2 Level "+w.f+" of "+w.gM4(),!1,new A.e8l(u),D.co))
if(u.cJ!=null)s.push(u.ii("\ud83d\udccb My job"+(u.aw1()==null?"":" \xb7 "+C.w(u.aw1())+" m"),!1,new A.e8m(u),D.bG))
w=u.eK.length
if(w!==0)s.push(u.ii("\u23f3 Waiting: "+w,!1,new A.e8n(u),D.aC))
s.push(u.Ay("\ud83d\udef5 Orders",u.gpk().x!=null,new A.e8o(u),D.bG,u.gpk().x==null))
w=u.p4
v=w?"\u23f9 Stop drone":"\ud83d\ude81 Drone"
s.push(u.ii(v,w,new A.e8p(u),D.aQ))
w=u.h5
v=w?"\ud83c\udff7 Show tags":"\ud83c\udff7 Hide tags"
s.push(u.ii(v,w,new A.e8f(u),D.cs))
s.push(u.ii("\ud83d\udc41 Hide all",!1,new A.e8g(u),D.bM))
w=u.gKu()
s.push(u.ii("\ud83d\ude96 Uber",(w==null?t:w.f)!=null,u.gcDr(),D.bG))
s.push(u.ii("\ud83d\uddfa Map",u.y,new A.e8h(u),D.bw))
return s},
gcx4(){var w,v,u,t,s,r,q,p,o=this
if(!o.h5){w=o.f
w===$&&C.c()
return w}w=o.t4
v=o.f
v===$&&C.c()
if(w===v&&o.qQ!=null){w=o.qQ
w.toString
return w}o.t4=v
w=C.a([],x.E)
for(u=o.f.c,t=u.length,s=0;s<u.length;u.length===t||(0,C.M)(u),++s){r=u[s]
q=!1
if(r.d===0)if(!r.c.A(0,D.by)){p=r.b
if(!C.cT(p,"rooms still need work",0))q=!C.cT(p,"house is finished",0)}if(q)w.push(r)}u=o.f
return o.qQ=new A.tM(v.a,v.b,w,u.d,u.e,0)},
bFh(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d=f.d
d===$&&C.c()
w=d.d
w===$&&C.c()
v=w[d.e]
d=x.w
w=C.aJ(a0,e,d).w.a
u=f.eu?w.b:w.a
f.ez=u
w=f.d
t=w.d
t===$&&C.c()
t=t[w.e].c==="outside"&&f.aJ==null
w=w.a.length!==0?e:new A.e7x(f)
s=f.gcx4()
r=f.e
r===$&&C.c()
q=f.at
p=f.ax
o=f.ay
n=f.ai
if(f.eu)d=62
else if(f.f1)d=C.aJ(a0,e,d).w.r.b+66
else d=f.y&&f.d.a.length===0?104:10
m=f.cgY()
l=x.p
k=C.a([],l)
if(f.y&&f.d.a.length===0&&!f.eu)k.push(new A.bjo(f.d,f.gc7A(),Math.min(138,u*0.36),e))
j=A.Y3(n,m,r,new A.e7y(f),new A.e7z(f),o,q,e,e,new A.e7K(),p,d,f.gbNs(),new A.e7L(f),f.gc7E(),s,t,w,k,e)
i=f.y1!=null||f.y2||f.R8||f.k3||f.go||f.k2||f.id
d=f.ok
h=(d==null?e:d.d)===1
if((i||h)&&!f.ai){d=C.a([j],l)
if(i){if(f.id)w=f.c1v()
else if(f.k2)w=f.cvw()
else if(f.go)w=f.cgL()
else if(f.k3)w=f.bOQ()
else w=f.R8?f.bO4():f.bGv()
d.push(C.bT(0,w,0,0,0))}if(h)d.push(C.ao(e,C.e0(C.at(new C.jS(f.p3,new A.e7M(),e,e,x.cI),e,e,e),!0,e),e,e,0,0,74,e))
g=new C.an(D.a_,e,D.b1,D.t,d,e)}else g=j
if(f.ai)return f.bHM(g)
if(f.eu)return f.bRM(g)
if(f.f1)return f.ck8(g)
d=f.d
if(d.a.length!==0)d=v.gz5()?"Done \u2713":"To do"
else d=""+d.gcOt()+"/"+f.d.gqR().length+" done"
w=f.d
t=w.d
t===$&&C.c()
w=t[w.e].c==="outside"
t=!w?e:new A.Us(f.c5,f.bG!=null,12,e)
if(w)w=f.bHz()
else{w=f.x?"\ud83d\udd2d See the whole room":"\ud83c\udfe0 Be inside"
w=C.a([f.ii(w,!1,new A.e7N(f),D.b2)],l)
if(f.d.a.length===0){s=f.cx!=null
r=s?"\u23f9 Stop tour":"\ud83c\udfac Tour"
w.push(f.ii(r,s,new A.e7O(f),D.c5))}w.push(f.ii("\u2b06 Look up at the ceiling",!1,f.gc2y(),D.b2))
s=f.z
r=s?"\ud83d\udeb6 Stop looking round":"\ud83d\udd04 Look all round (360)"
w.push(f.ii(r,s,new A.e7P(f),D.cR))
w.push(f.ii("\ud83d\udcfa TV",!1,f.gcDl(),D.co))
s=f.d
if(s.a.length===0){r=s.d
r===$&&C.c()
s=r[s.e].c!=="outside"?"\ud83c\udf33 Go outside":"\ud83c\udfe0 Go inside"
w.push(f.ii(s,!1,new A.e7Q(f),D.bj))}s=f.d
r=s.d
r===$&&C.c()
if(r[s.e].c==="outside"){s=f.aL
r=s?"\u23f9 Stop walking":"\ud83d\udeb6 Walk about"
w.push(f.ii(r,s,s?f.gb7m():f.gb77(),D.bj))}if(f.d.a.length===0)w.push(f.ii("\u2795 Add",!1,f.gaNf(),D.bj))
if(f.d.a.length===0){s=f.ghI()
s=s==null?e:s.d.length
if(s==null)s=0
w.push(f.Ay("\ud83c\udfd8 Community",!1,new A.e7R(f),D.c5,s>0))}w.push(f.ii("\ud83d\udd26 Tester",f.w,new A.e7A(f),D.cR))
if(f.d.a.length!==0)w.push(f.Ay("\ud83d\udd27 Do the lesson",!1,f.gc7D(),D.bG,!v.gz5()))
else{s=f.Ay("\u26a1 Wiring",!1,f.gcgE(),D.bG,!v.gkL())
r=v.c
r=(r==="bathroom"||r==="kitchen")&&!v.gjQ()
D.d.v(w,C.a([s,f.Ay("\ud83d\udeb0 Plumbing",!1,f.gcg3(),D.co,r),f.ii("\ud83d\uddfa Map",f.y,new A.e7B(f),D.bw)],l))}}return A.TY(D.aC,new A.e7C(f,a0),C.x(C.a([new C.a7(e,30,C.cr(w,e,e,e,e,D.aM,!1),e),D.au,new C.a7(e,30,C.cr(C.a([f.J3("\ud83d\udc41 Look",f.r==="look",new A.e7D(f)),f.J3("\ud83d\udecb Furniture",f.r==="furniture",new A.e7E(f)),f.J3("\ud83e\uddf1 Walls",f.r==="walls",new A.e7F(f)),f.J3("\ud83d\udfeb Floor",f.r==="floor",new A.e7G(f)),f.J3("\u2b1c Ceiling",f.r==="ceiling",new A.e7H(f)),f.J3("\ud83d\udeaa Doors",f.r==="doors",new A.e7I(f)),f.ii("\ud83d\udcd8 Learn",!1,new A.e7J(a0),D.bw)],l),e,e,e,e,D.aM,!1),e),D.au,f.bJj()],l),D.E,e,D.e,D.Q,0,D.p),g,d,v.b,t)},
cmJ(d){return C.bU(E.lw,null,new A.eaB(this),d,!0,!0,!0,D.k1,!1,!1,x.H)}}
A.bjo.prototype={
B(d){var w=null,v=D.k.E((this.e-10)/126,0.5,1),u=D.w.j(0.6),t=C.m(12),s=C.J(D.aZ,D.r,1)
return C.p(w,new C.a7(126*v,84*v,C.aB(w,C.eN(D.A,C.b4(w,w,w,new A.biO(this.c,w),B.f4b),D.f,D.xo),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new A.duo(this,v),w,w,w,w,!1,D.a4),w),D.f,w,w,new C.o(u,w,s,t,w,w,D.n),w,w,w,w,D.m4,w,w,w)}}
A.biO.prototype={
a3(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=this.b,e=f.d
e===$&&C.c()
w=e.length
v=d.a
u=0
for(;u<e.length;e.length===w||(0,C.M)(e),++u){t=e[u]
s=t.d*14+1
r=t.e*14+1
q=s+(t.f*14-2)
p=r+(t.r*14-2)
o=new C.a3(s,r,q,p)
n=t.a===f.e
if(t.gkL()&&t.gjQ())m=D.be
else m=!t.gkL()?D.aw:D.d2
l=C.bt(o,D.hz)
$.S()
k=new C.ap(D.R,D.N,D.U,D.V,D.S)
k.r=m.j(t.gkL()&&t.gjQ()?0.35:0.5).gp(0)
j=k.G()
v.drawRRect(C.el(l),j)
j.delete()
l=C.bt(o,D.hz)
k=new C.ap(D.R,D.N,D.U,D.V,D.S)
k.b=D.aa
k.c=n?2.2:0.8
k.r=(n?D.c:D.bY).gp(0)
j=k.G()
v.drawRRect(C.el(l),j)
j.delete()
i=t.c
A:{if("bedroom"===i){l="\ud83d\udecf"
break A}if("bathroom"===i){l="\ud83d\udebf"
break A}if("kitchen"===i){l="\ud83c\udf73"
break A}if("living"===i){l="\ud83d\udecb"
break A}if("outside"===i){l="\ud83c\udf33"
break A}l=""
break A}h=new C.jR(new C.eu(l,g,g,D.cQ,g,g,g,g,g,g,B.fkd),D.a3,D.bZ,new C.jA(1),g,g,g,g,D.bW,g)
h.el()
l=h.b
k=l.c
l=l.a.c
h.a3(d,new C.t(s+(q-s)/2-k/2,r+(p-r)/2-l.gbb(l)/2))}},
aw(d){return!0}}
A.aIE.prototype={
T(){return new A.btj()},
bhJ(d,e){return this.c.$2(d,e)}}
A.btj.prototype={
aZG(d){var w,v,u={},t=u.a=d.aF(0,B.egS),s=t.gcH()>46?u.a=t.eT(0,t.gcH()).aI(0,46):t,r=s.a/46,q=-s.b/46,p=Math.sqrt(r*r+q*q)
s=this.a
s.toString
w=p<0.15
v=w?0:r
s.bhJ(v,w?0:q)
this.m(new A.f3B(u,this))},
aZF(){this.a.bhJ(0,0)
this.m(new A.f3A(this))},
B(d){var w=this,v=null,u=C.p(v,v,D.f,v,v,new C.o(D.w.j(0.42),v,C.J(D.bj.j(0.9),D.r,2.4),v,v,v,D.a6),v,132,v,v,v,v,v,132),t=C.p(v,v,D.f,v,v,new C.o(v,v,C.J(D.bj.j(0.25),D.r,1.5),v,v,v,D.a6),v,66,v,v,v,v,v,66),s=w.d,r=s==null
if(r)s=D.I
return C.nK(D.c8,new C.a7(132,132,new C.an(D.A,v,D.ab,D.t,C.a([u,t,C.dP(C.p(v,v,D.f,v,v,new C.o(D.bj.j(r?0.55:0.9),v,C.J(D.c,D.r,2),v,v,v,D.a6),v,56,v,v,v,v,v,56),s)],x.p),v),v),v,new A.f3C(w),new A.f3D(w),v,new A.f3E(w),v,v,new A.f3F(w))}}
A.eZ8.prototype={}
A.Mk.prototype={}
A.Qg.prototype={
gbek(){var w,v=this.c
A:{if("sick"===v){w="\ud83e\udd12"
break A}if("light"===v){w="\ud83d\udca1"
break A}if("office"===v){w="\ud83c\udfe2"
break A}w="\u26a1"
break A}return w},
gaDK(){var w,v=this.c
A:{if("sick"===v){w=this.d
if(w.length===0)w="A neighbour"
break A}if("light"===v){w="City lights office"
break A}if("office"===v){w="Office manager"
break A}w="Your neighbour"
break A}return w},
gbqE(){var w,v=this.c
A:{if("sick"===v){w="Needs a doctor"
break A}if("light"===v){w="A street light is out"
break A}if("office"===v){w="No power in an office"
break A}w="No power at a house"
break A}return w},
gaGW(d){var w,v=this,u="I will pay you between 10 and 35 stars. Thank you!",t=v.c
A:{if("sick"===t){w=C.a(["Hello! "+v.gaDK()+" is very sick and cannot get up.","Please take them to the hospital: walk into the hospital and onto the desk to admit them.",u],x.s)
break A}if("office"===t){w=""+v.e
w=C.a(["Hello, this is the office manager. The office on level "+w+" of "+v.b+" has lost its power and nobody can work.","Please take the elevator up to level "+w+", and fix the wiring at the breaker panel there.",u],x.s)
break A}if("light"===t){w=C.a(["Hello! A street light is out and the street is dark.","It is the dark one with the red sign. Could you fix its wiring?",u],x.s)
break A}w=C.a(["Hello! All the lights went out in "+v.b+". The power is off in the whole house.","Could you check the breaker panel inside and fix the wiring? Switch the power off before you touch anything.",u],x.s)
break A}return w}}
A.bUw.prototype={}
A.pu.prototype={}
A.ND.prototype={
T(){return new A.bki()}}
A.bki.prototype={
rA(d){var w=this.c
w.toString
return C.a4(w,!1).cc(C.dX(new A.dRI(d),!1,null,x.H))},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null
$.ask="tech"
w=C.aH(m,m,m,m,S.nv,m,m,m,new A.dRJ(d),m,m,m,m,m,m)
v=D.aC.j(0.16)
u=C.m(13)
t=x.p
u=C.B(C.a([w,C.p(m,B.b9c,D.f,m,m,new C.o(v,m,C.J(D.aC.j(0.6),D.r,1),u,m,m,D.n),m,40,m,m,m,m,m,40),D.at,B.bEh],t),D.m,m,D.e,D.i,0,m,m)
v=C.m(26)
w=C.J(D.aC,D.r,1.8)
s=x.V
r=C.a([new C.ac(0,D.G,D.aC.j(0.28),D.dq,26)],s)
r=C.aB(m,C.p(m,C.x(C.a([C.p(m,B.b9F,D.f,m,m,new C.o(D.aC.j(0.2),m,C.J(D.aC,D.r,2),m,C.a([new C.ac(0,D.G,D.aC.j(0.5),D.I,22)],s),m,D.a6),m,78,m,m,m,m,m,78),D.ae,B.fDP,D.au,B.fKA,D.aA,C.p(m,B.fDL,D.f,m,m,new C.o(D.aC,m,m,C.m(20),m,m,D.n),m,m,m,m,Y.akH,m,m,m)],t),D.m,m,D.e,D.i,0,D.p),D.f,m,m,new C.o(m,m,w,v,r,B.c2j,D.n),m,m,m,m,D.vX,m,m,m),D.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new A.dRK(n),m,m,m,m,m,m,!1,D.a4)
v=D.w.j(0.6)
w=C.m(16)
w=C.a([r,C.ao(m,C.aB(m,C.p(m,B.fSo,D.f,m,m,new C.o(v,m,C.J(F.fz,D.r,1.4),w,m,m,D.n),m,m,m,m,B.bxE,m,m,m),D.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new A.dRL(n),m,m,m,m,m,m,!1,D.a4),m,m,m,10,10,m)],t)
v=n.aZI("JOBS")
r=n.aZH(C.a([n.vL("\ud83d\udd0c","Wire a room","Go to a room that needs wiring",D.be,new A.dRP(n)),n.vL("\ud83d\udebd","Plumb a room","Go to a bathroom or kitchen",D.aQ,new A.dRQ(n)),n.vL("\ud83d\udd27","Fix a house","Walk the house and fix every sign",D.aC,new A.dRR(n)),n.vL("\ud83e\uddf1","Build a room","Frame, drywall, then wire",D.bj,new A.dRS(n)),n.vL("\u26a1","Wiring bench","Just the wiring, one room",D.bG,new A.dRT(n)),n.vL("\ud83e\uddea","Safety inspection","A test job: marked when you submit",D.bw,new A.dRU(n)),n.vL("\ud83d\udcde","Service calls","A customer rings with problems",D.ig,new A.dRV(n)),n.vL("\ud83c\udfd8","Neighbourhood jobs","Fix lights and wiring around the city",D.aQ,new A.dRW(n))],t))
s=n.aZI("LESSONS")
q=C.a([],t)
for(p=0;p<17;++p){o=B.dgn[p]
q.push(n.vL(o.b,o.c,o.d,o.e,new A.dRM(n,o)))}q.push(n.vL("\ud83e\udde0","Diagram lessons","Three-way switch, fan with light",D.bw,new A.dRN(n)))
q.push(n.vL("\ud83d\udcd8","Learn the trades","Short cards for beginners",D.bw,new A.dRO(n)))
return C.c7(m,D.c0,C.bl(!0,C.cr(C.a([u,D.ae,new C.an(D.a_,m,D.ab,D.t,w,m),v,r,s,n.aZH(q)],t),m,B.ajY,m,m,D.ah,!1),!0,!1,D.af,!0,!0),m,!1,!1,m,m)},
aZI(d){var w=null
return new C.D(B.bCf,C.B(C.a([C.E(C.p(w,w,D.f,D.aC.j(0.35),w,w,w,1,w,w,w,w,w,w),1),new C.D(D.fj,C.d(d,w,w,w,w,w,w,B.fgE,w,w,w),w),C.E(C.p(w,w,D.f,D.aC.j(0.35),w,w,w,1,w,w,w,w,w,w),1)],x.p),D.m,w,D.e,D.i,0,w,w),w)},
aZH(d){var w,v,u,t,s=null,r=x.p,q=C.a([],r)
for(w=0;v=d.length,w<v;w+=2){u=d[w]
t=w+1
v=t<v?d[t]:D.bJ
q.push(new C.D(D.ct,new C.Eh(new C.cd(D.aM,D.e,D.i,D.ak,s,D.p,s,0,C.a([new C.bA(1,D.bc,u,s),D.ac,new C.bA(1,D.bc,v,s)],r),s),s),s))}return C.x(q,D.m,s,D.e,D.i,0,D.p)},
vL(d,e,f,g,h){var w=null,v=C.a([g.j(0.2),B.Fo],x.O),u=C.m(22),t=C.J(g.j(0.55),D.r,1.4),s=x.V,r=C.a([new C.ac(0,D.G,g.j(0.18),D.cx,16)],s),q=g.j(0.22),p=C.J(g.j(0.7),D.r,1.5)
s=C.a([new C.ac(0,D.G,g.j(0.35),D.I,14)],s)
return C.aB(w,C.p(w,C.x(C.a([C.p(w,C.at(C.d(d,w,w,w,w,w,w,D.wT,w,w,w),w,w,w),D.f,w,w,new C.o(q,w,p,w,s,w,D.a6),w,56,w,w,w,w,w,56),D.W,C.d(e,w,w,w,w,w,w,D.j2,D.L,w,w),D.cL,C.d(f,w,2,D.a1,w,w,w,B.fsn,D.L,w,w)],x.p),D.m,w,D.b8,D.i,0,D.p),D.f,w,w,new C.o(w,w,t,u,r,new C.a9(D.b4,D.b7,D.x,v,w,w),D.n),w,w,w,w,B.bxm,w,w,w),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,h,w,w,w,w,w,w,!1,D.a4)}}
A.aw9.prototype={
T(){return new A.bt7()},
bqk(){return this.c.$0()}}
A.bt7.prototype={
Z(){this.a2()
this.d=C.dg(D.nl,new A.f3r(this))},
q(){var w=this.d
if(w!=null)w.a4(0)
this.a1()},
B(d){var w=null,v=D.w.j(0.6),u=C.m(18),t=C.J(D.bG,D.r,1.5)
return C.p(w,C.d("\u2b50 "+C.w(this.a.bqk()),w,w,w,w,w,w,B.fh_,w,w,w),D.f,w,w,new C.o(v,w,t,u,w,w,D.n),w,w,w,D.iA,D.rn,w,w,w)}}
A.b7l.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null
if(n.d)return A.h1c(E.Bf,n.r,n.z,n.Q,n.y,n.as,n.db,n.w,n.f,n.c)
w=n.r
v=x.p
u=C.a([C.bT(0,A.h1c(E.Bf,w,n.z,n.Q,n.y,n.as,n.db,n.w,n.f,n.c),0,0,0)],v)
t=n.ch
s=t!=null
if(s)u.push(C.ao(m,C.x(t,D.E,m,D.e,D.i,0,D.p),m,m,8,m,8,m))
t=C.a([],v)
r=n.CW
if(r!=null)D.d.v(t,r)
r=C.a([],v)
q=n.e
if(q!=null)r.push(new A.aw9(q,m))
r.push(new A.afD(D.hL,"Zoom in",w,!1,m))
t.push(C.B(r,D.m,m,D.e,D.Q,0,m,m))
t.push(new A.afD(D.yS,"Zoom out",w,!0,m))
w=n.x
t.push(n.axu(B.bL8,"Back to the whole view",w))
t.push(n.axu(Ai.Cn,"Flip up and down swiping",new A.cwo()))
t.push(n.axu(D.ki,"Flip left and right swiping",new A.cwp()))
u.push(C.ao(m,C.x(t,D.dG,m,D.e,D.i,0,D.p),m,m,m,8,8,m))
t=n.dx
if(t!=null)u.push(C.ao(14,C.at(t,m,m,m),m,m,0,0,m,m))
t=n.at
if(t!=null){r=n.cy
if(r==null)s=s?60:10
else s=r
r=n.ax
q=(r?D.e_:D.ej).j(0.95)
p=C.m(14)
o=C.J(r?D.bj:D.cs,D.r,1)
u.push(C.ao(m,C.p(m,C.d(t,m,m,m,m,m,m,B.fhg,m,m,m),D.f,m,m,new C.o(q,m,o,p,m,m,D.n),m,m,m,m,D.no,m,m,m),m,m,10,62,s,m))}t=n.ay
if(t!=null){s=C.m(16)
r=C.J(D.aZ,D.r,1)
t=C.a([C.d(t.a,m,m,m,m,m,m,B.fsV,m,m,m),D.cL,C.d(t.b,m,m,m,m,m,m,E.UO,m,m,m)],v)
q=n.cx
if(q!=null)D.d.v(t,C.a([D.am,q],v))
u.push(C.ao(8,C.p(m,C.B(C.a([C.E(C.x(t,D.E,m,D.e,D.i,0,D.p),1),C.aH(m,m,m,m,D.Hj,m,m,m,w,m,m,m,m,m,D.cd)],v),D.E,m,D.e,D.i,0,m,m),D.f,m,m,new C.o(E.ae1,m,r,s,m,m,D.n),m,m,m,m,E.ajI,m,m,m),m,m,10,10,m,m))}return new C.an(D.a_,m,D.ab,D.t,u,m)},
axu(d,e,f){var w=null,v=D.w.j(0.55),u=C.J(D.aZ,D.r,1)
return new C.D(D.eH,C.hc(C.aB(w,C.p(w,C.X(d,D.c,w,w,w,20),D.f,w,w,new C.o(v,w,u,w,w,w,D.a6),w,38,w,w,w,w,w,38),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,!1,D.a4),w,e,w,w),w)}}
A.aXt.prototype={
B(d){var w,v=this,u=null,t=x.p,s=C.a([C.aH(u,u,u,u,S.nv,u,u,u,new A.bWC(d),u,u,u,u,u,u)],t),r=v.x,q=v.c,p=v.d
if(r==null)s.push(C.E(C.d(q,u,u,u,u,u,u,C.l(u,u,p,u,u,u,u,u,u,u,u,16,u,u,D.u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),1))
else D.d.v(s,C.a([C.d(q,u,u,u,u,u,u,C.l(u,u,p,u,u,u,u,u,u,u,u,16,u,u,D.u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),D.at,C.E(r,1),D.at],t))
r=p.j(0.15)
q=C.m(16)
w=C.J(p.j(0.6),D.r,1)
s.push(C.aB(u,C.p(u,C.B(C.a([C.X(Aj.ana,p,u,u,u,17),D.em,C.d(v.w,u,u,u,u,u,u,C.l(u,u,p,u,u,u,u,u,u,u,u,12,u,u,D.u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],t),D.m,u,D.e,D.Q,0,u,u),D.f,u,u,new C.o(r,u,w,q,u,u,D.n),u,u,u,u,D.rn,u,u,u),D.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,v.r,u,u,u,u,u,u,!1,D.a4))
s=C.B(s,D.m,u,D.e,D.i,0,u,u)
q=C.aJ(d,u,x.w).w
return C.c7(u,D.c0,C.bl(!0,C.x(C.a([new C.D(B.bCs,s,u),C.p(u,C.ce(v.f,D.t,u,D.y,u,u,u,u,D.ah),D.f,u,new C.aZ(0,1/0,0,q.a.b*0.34),B.b4E,u,u,u,u,E.ZV,u,u,1/0),C.E(C.bx(Ah.acd,v.e,D.ap),1)],t),D.m,u,D.e,D.i,0,D.p),!0,!1,D.af,!0,!0),u,!1,!1,u,u)}}
A.DV.prototype={
T(){var w=new C.wo()
$.x1()
w.h2(0)
return new A.aAe(w)},
gdc(d){return this.d}}
A.aAe.prototype={
gz4(){var w,v=this,u=v.d
if(u===$){w=A.t0(v.a.c)
v.d!==$&&C.bG()
v.d=w
u=w}return u},
ger(d){var w,v=this.e
if(v===$){w=this.a.d
v=this.e=w==null?new A.Cx(C.U(x.S,x.N)):w}return v},
garU(){var w=this.gz4().a
return w==="light"||w==="fan"},
gil(){var w,v=this,u=v.f
if(u===$){w=v.garU()?new A.xd(1.15,0.12,11,B.Vn,$.aw()):new A.xd(0.42,0.26,12,B.h3G,$.aw())
v.f!==$&&C.bG()
u=v.f=w}return u},
gp5(){var w=this,v=w.r
return v===$?w.r=A.h56(w.gz4(),w.ger(0),!0):v},
aAD(d){var w
this.m(new A.dab(this,d))
A:{if("practice"===d){w="Practice: you can put a wire anywhere. The mistake shows when the power goes on."
break A}if("test"===d){w="Test: put every wire where you think it goes. Nothing is marked until you submit."
break A}w="Learn: a wrong wire is refused and explained."
break A}this.jb(w,!0)},
q(){var w=this.as
if(w!=null)w.a4(0)
this.a1()},
jb(d,e){var w=this,v=w.as
if(v!=null)v.a4(0)
w.m(new A.da9(w,d,e))
w.as=C.cK(D.lz,new A.daa(w))},
nA(d){return this.jb(d,!1)},
qA(){var w=this.ger(0)
w.d=w.d&&w.a&&w.c>=2
this.r=A.h56(this.gz4(),w,!0)},
og(){var w,v,u,t=this
if(t.garU()&&t.ger(0).c===0){t.gil().hQ(11,0.12,B.Vn,1.15)
t.m(new A.d9X(t))
return}w=t.gil()
v=t.ger(0).c===0
u=v?2.8:0.4
v=v?12:10
w.hQ(v,0.26,new A.q(0,0.1,u),0.42)
t.m(new A.d9Y(t))},
aXy(d){var w=this
if(w.garU()){w.gil().hQ(9,0.12,B.Vn,1.15)
return}if(d==="ground")w.gil().hQ(8,0.55,B.h7x,0.15)
else if(d==="white")w.gil().hQ(8.5,0.2,B.hbz,0.95)
else w.gil().hQ(8.5,0.2,B.h0m,-0.95)},
c7K(){var w,v,u,t,s="ground",r=this.ger(0),q=!r.a||r.c>0,p=new A.d9W(this),o=this.gz4()
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
J6(d){var w,v,u,t,s,r,q,p,o,n=this,m="square",l="STOP! The power is still on. Turn the breaker OFF before you touch any wire.",k="Recorded."
if(d===0){n.og()
return}if(B.aPZ.t(0,d))return
w=n.gz4()
v=w.f
u=C.T(v).k("Z<1>")
t=C.C(new C.Z(v,new A.d9Z(d),u),u.k("L.E"))
v=w.a
s=A.hvL(v,d)
u=s!=null
if(u){r=n.ger(0)
r=r.c===0&&r.b.iI(0,s)}else r=!1
if(r){w=n.ger(0)
if(w.a){A.fV(180,220,0.25,m)
n.nA(l)
return}w=w.b
w.bs(w,new A.da_(s))
n.m(n.gc7N())
n.jb("Wire taken off the screw.",!0)
return}r=!1
if(t.length!==0){q=n.ger(0)
if(q.c===0){q=q.b
if(q.aj(0,d))r=n.w.length===0||q.h(0,d)===n.w}}if(r){w=n.ger(0)
if(w.a){A.fV(180,220,0.25,m)
n.nA(l)
return}w.b.W(0,d)
n.m(new A.da0(n))
n.jb(w.y?k:"Wire taken off.",!0)
return}if(u){u=n.ger(0)
u=u.c===0&&!u.b.iI(0,s)&&D.d.b3(w.e,new A.da1(s))}else u=!1
if(u){n.m(new A.da2(n,s,d))
if(n.w.length!==0){n.aXy(s)
n.jb(D.d.fW(w.e,new A.da3(s)).b+": picked up. Now tap the screw, nut or wire it joins.",!0)}return}if(t.length!==0&&n.w.length!==0&&n.ger(0).c===0){u=n.ger(0)
p=A.hvG(w,u,n.w,D.d.gI(t),!1)
if(p!=null){++n.Q
A.fV(180,220,0.25,m)
n.nA(p)}else if(u.y){A.fV(520,60,0.25,"tri")
n.m(new A.da4(n,d))
n.jb(k,!0)
n.w=""}else{A.yI()
n.m(new A.da5(n,d))
if(u.r)n.jb(D.d.gI(t).b+": fastened.",!0)
else if(A.bEF(w,u))n.jb("Every wire is on the right screw. Now push the device into the box.",!0)
else n.jb(D.d.gI(t).b+": fastened correctly.",!0)
n.gil().xh(7,A.aPB(v,d,u))
n.w=""}return}o=n.gp5().b.h(0,d)
if(o!=null){n.m(new A.da6(n,d))
w=n.gil()
v=o.c
w.xh(o.d,v)}},
clH(){var w,v=this
v.m(new A.da7(v))
w=v.ger(0)
if(w.a){A.fV(120,200,0.25,"saw")
if(w.c===0)v.nA("The breaker is ON. The wires are LIVE at 120 volts. Turn it OFF before you touch anything.")}else{A.fV(600,100,0.25,"tri")
v.jb("Breaker OFF. It is safe to work on the wires. (In real life, always test them with a tester first.)",!0)}},
cB1(){var w,v,u=this,t="The tester glows: this outlet has 120 volts and is wired correctly. The lesson is complete! Mistakes: ",s=" is wired correctly: every wire is on the terminal that belongs to it. The lesson is complete! Mistakes: ",r=u.gz4(),q=u.ger(0),p=A.L7(r,q)
if(p.a!=="ok"){u.m(new A.dac(u,p));++u.Q
A.fV(180,220,0.25,"square")
C.fJ()
r=p.r==="arc"
w=r?95:150
A.fV(w,450,0.5,r?"saw":"noise")
if(q.y)r=p.d?"The breaker tripped.":"Power is on."
else r=p.b+"\nHow to fix it: "+p.w
u.nA(r)
return}u.m(new A.dad(u))
A.yI()
v=r.a
A:{if("switch"===v){r="Power on. Flip the switch and the light turns on: both black wires are on brass screws, so the switch opens and closes the hot wire. The lesson is complete! Mistakes: "+u.Q+"."
break A}if("gfci"===v){r="Power on. Press RESET (it clicks), then TEST: it must shut the outlet off. Wired on LINE, it protects the whole circuit. The lesson is complete! Mistakes: "+u.Q+"."
break A}if("outlet"===v){r=t+u.Q+"."
break A}q=D.d.t(B.jV,v)
if(q){r="Power on. "+r.b+(s+u.Q+".")
break A}if(v!=="light"&&v!=="fan"){r="Power on. The "+r.b.toLowerCase()+(s+u.Q+".")
break A}r=t+u.Q+"."
break A}u.jb(r,!0)},
B(a1){var w,v=this,u=null,t=v.c7K(),s=D.d.bg(t,new A.dam()),r=s<0?"All done":"Step "+(s+1)+"/"+v.gz4().d.length,q=v.gz4(),p=v.ger(0),o=A.bEF(q,p)&&!p.a,n=v.gp5(),m=v.gil(),l=v.x,k=v.y,j=v.z,i=l!==0?v.gp5().b.h(0,v.x):u,h=(p.a?D.ej:D.e_).j(0.95),g=C.m(18),f=p.a,e=C.J(f?D.cs:D.bj,D.r,1.5),d=C.X(f?D.ht:B.bMO,D.c,u,u,u,18),a0=x.p
g=C.a([C.aB(u,C.p(u,C.B(C.a([d,D.em,C.d(f?"Breaker ON (live)":"Breaker OFF (safe)",u,u,u,u,u,u,D.nI,u,u,u)],a0),D.m,u,D.e,D.Q,0,u,u),D.f,u,u,new C.o(h,u,e,g,u,u,D.n),u,u,u,u,D.hg,u,u,u),D.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,v.gclG(),u,u,u,u,u,u,!1,D.a4)],a0)
h=!p.r&&!p.y
h=C.a([A.wR("Learn",D.bj,D.wl,h,new A.dan(v)),D.am,A.wR("Practice",D.cs,D.p6,p.r,new A.dao(v)),D.am,A.wR("Test",D.bw,D.ug,p.y,new A.daw(v)),D.am],a0)
if(!p.y)D.d.v(h,C.a([A.wR("Hints",D.aC,D.ru,p.e,new A.dax(v)),D.am,A.wR("Labels",D.aQ,N.Cf,p.f,new A.day(v)),D.am,A.wR("Wire guide",D.my,D.og,!1,new A.daz(a1)),D.am],a0))
h.push(A.wR("Brass side",B.bpp,E.ao4,!1,new A.daA(v)))
h.push(D.am)
h.push(A.wR("Silver side",B.Ma,D.OI,!1,new A.daB(v)))
h.push(D.O)
n=A.Y3(!1,u,m,new A.daC(v),u,j,l,i,u,u,k,u,u,v.gJ4(),v.gJ5(),n,!1,u,g,h)
m=C.a([],a0)
l=p.c
if(l===0){l=C.a([],a0)
for(k=D.d.gaf(q.e),j=new C.f5(k,new A.daD(v));j.C();){i=k.gR(0)
h=i.c
g=new C.aQ(14,14)
f=v.w
e=i.a
f=f===e
d=f?D.b2:D.aZ
w=new C.ay(d,f?3:1,D.r,-1)
d=C.a([],a0)
if(p.b.iI(0,e))d.push(new C.D(D.fB,C.X(D.ed,i.d,u,u,u,18),u))
f=i.b
e=i.d
d.push(new C.y(f,u,new C.F(!0,e,u,u,u,u,13,D.u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u),u,u,u,u,u,u,u,u,u))
l.push(new C.D(D.iA,C.aB(u,C.p(u,new C.cd(D.aM,D.e,D.i,D.m,u,D.p,u,0,d,u),D.f,u,u,new C.o(h,u,new C.bK(w,w,w,w),new C.bj(g,g,g,g),u,u,D.n),u,u,u,u,D.hJ,u,u,u),D.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new A.dap(v,i),u,u,u,u,u,u,!1,D.a4),u))}l=C.a([C.bW(D.bC,l,D.bq,u,6,8)],a0)
if(p.y)D.d.v(l,C.a([C.B(C.a([A.ua("Submit the test",D.ug,new A.daq(v,a1),D.bw)],a0),D.m,u,D.e,D.i,0,u,u),D.O],a0))
l.push(D.O)
if(o)p="Push it into the box"
else p=p.a?"Turn the breaker OFF first":"Fasten every wire first"
l.push(C.B(C.a([A.ua(p,B.aoB,o?new A.dar(v):u,D.aC)],a0),D.m,u,D.e,D.i,0,u,u))
D.d.v(m,l)}else if(l===1)D.d.v(m,C.a([C.B(C.a([A.ua("Pull it back out",D.rz,new A.das(v),D.ad),D.ac,A.ua("Put the cover plate on",Z.wa,new A.dat(v),D.aC)],a0),D.m,u,D.e,D.i,0,u,u)],a0))
else{l=A.ua("Start over",D.kH,new A.dau(v),D.ad)
p=p.d
k=p?"Tested \u2713":"Power on and test"
D.d.v(m,C.a([C.B(C.a([l,D.ac,A.ua(k,D.ht,p?u:v.gcB0(),D.aC)],a0),D.m,u,D.e,D.i,0,u,u)],a0))}return A.TY(D.aC,new A.dav(v,a1,t),C.x(m,D.m,u,D.e,D.Q,0,D.p),n,r,q.b,u)}}
A.a9y.prototype={
T(){return new A.aGa()},
gdc(d){return this.c}}
A.aGa.prototype={
ger(d){var w,v=this.d
if(v===$){w=this.a.c
v=this.d=w==null?A.h0J():w}return v},
gil(){var w=this.e
return w===$?this.e=new A.xd(-0.3,0.18,40,B.aW_,$.aw()):w},
gp5(){var w=this.f
return w===$?this.f=A.bC4(this.ger(0)):w},
q(){var w=this.z
if(w!=null)w.a4(0)
this.a1()},
jb(d,e){var w=this,v=w.z
if(v!=null)v.a4(0)
w.m(new A.eTH(w,d,e))
w.z=C.cK(D.lz,new A.eTI(w))},
nA(d){return this.jb(d,!1)},
og(){this.gil().hQ(40,0.18,B.aW_,-0.3)
this.m(new A.eTA(this))},
J6(d){var w,v,u,t,s,r,q=this,p="square"
if(d===0){q.og()
return}w=C.G([41,"tail",42,"trap",43,"arm"],x.S,x.N).h(0,d)
if(w!=null&&!q.ger(0).a.t(0,w)){v=q.r
if(v.length===0){if(w==="tail")v="tailpiece"
else v=w==="trap"?"P-trap":"trap arm"
q.nA("Pick the "+v+" from the buttons below first, then tap its glowing outline.")
return}if(v!==w){A.fV(180,220,0.25,p)
u=q.r
A:{if("tail"===u){v="The tailpiece is the straight pipe that hangs from the sink. It goes at the very top, under the drain."
break A}if("trap"===u){v="The P-trap is the U-shaped bend. It goes right under the tailpiece, in the middle."
break A}v="The trap arm is the long straight pipe that goes into the wall. It goes last, on the right."
break A}q.nA(v)
return}if(w==="trap"&&!q.ger(0).a.t(0,"tail")){A.fV(180,220,0.25,p)
q.nA("Start from the top: put the tailpiece on first, then the trap under it.")
return}if(w==="arm"&&!q.ger(0).a.t(0,"trap")){A.fV(180,220,0.25,p)
q.nA("The trap arm joins the trap. Put the P-trap on first.")
return}q.m(new A.eTB(q,w))
A.yI()
q.jb("Piece in place. "+(q.ger(0).a.a===3?"Now tighten the two slip nuts: tap each nut.":"Pick the next piece."),!0)
return}v=d===44
if(v||d===45){t=v?"n1":"n2"
if(q.ger(0).b.h(0,t)!==!0){q.m(new A.eTC(q,t))
A.yI()
q.jb("Slip nut hand tightened. In real life give it a quarter turn more with pliers, but never over-tighten plastic.",!0)
return}}s=q.gp5().b.h(0,d)
if(s!=null){q.m(new A.eTD(q,d))
v=q.gil()
r=s.c
v.xh(s.d,r)}},
c7P(){var w=this,v=x.cc,u=C.C(new C.Z(C.a(["n1","n2"],x.s),new A.eTE(w),v),v.k("L.E"))
w.m(new A.eTF(w,u))
if(u.length!==0){A.fV(180,220,0.25,"square")
w.nA("It is dripping from a loose slip nut! Tap the nut and tighten it, then run the water again.")}else{A.yI()
w.jb("No leaks. The water flows through the trap and into the wall. The little pool in the U-bend stays there and blocks sewer gas. The lesson is complete!",!0)}},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.ger(0),i=j.a,h=i.t(0,"tail"),g=i.t(0,"trap"),f=i.t(0,"arm"),e=j.b
e=e.h(0,"n1")===!0&&e.h(0,"n2")===!0
w=C.a([h,g,f,e,j.c&&j.d.length===0],x.u)
v=D.d.bg(w,new A.eTM())
u=i.a===3
j=v<0?"All done":"Step "+(v+1)+"/5"
h=l.gp5()
g=l.gil()
f=l.w
e=l.x
t=l.y
s=f!==0?l.gp5().b.h(0,l.w):k
h=A.Y3(!1,k,g,new A.eTN(l),k,t,f,s,k,k,e,k,k,l.gJ4(),l.gJ5(),h,!1,k,k,k)
e=x.p
s=C.a([],e)
for(r=0;r<3;++r){q=B.dqa[r]
g=i.t(0,q)?k:new A.eTO(l,q)
f=i.t(0,q)?D.ds:D.fM
t=new C.aQ(14,14)
p=l.r===q
o=p?D.b2:D.aZ
n=new C.ay(o,p?3:1,D.r,-1)
o=C.a([],e)
if(i.t(0,q))o.push(B.ekX)
p=B.dyo.h(0,q)
p.toString
m=i.t(0,q)?D.bY:D.c
o.push(new C.y(p,k,new C.F(!0,m,k,k,k,k,13,D.u,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k),k,k,k,k,k,k,k,k,k))
s.push(new C.D(D.iA,C.aB(k,C.p(k,new C.cd(D.aM,D.e,D.i,D.m,k,D.p,k,0,o,k),D.f,k,k,new C.o(f,k,new C.bK(n,n,n,n),new C.bj(t,t,t,t),k,k,D.n),k,k,k,k,D.hJ,k,k,k),D.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,g,k,k,k,k,k,k,!1,D.a4),k))}i=C.bW(D.bC,s,D.bq,k,6,8)
g=A.ua("Start over",D.kH,new A.eTP(l),D.ad)
f=u?"Run the water":"Build the drain first"
return A.TY(D.co,new A.eTQ(d,w),C.x(C.a([i,D.O,C.B(C.a([g,D.ac,A.ua(f,D.qr,u?l.gc7O():k,D.co)],e),D.m,k,D.e,D.i,0,k,k)],e),D.m,k,D.e,D.Q,0,D.p),h,j,"Sink drain (P-trap)",k)}}
A.a5_.prototype={
T(){return new A.aAy()},
gdc(d){return this.c}}
A.aAy.prototype={
ger(d){var w,v=this.d
if(v===$){w=this.a.c
v=this.d=w==null?A.h0J():w}return v},
gil(){var w=this.e
return w===$?this.e=new A.xd(-0.25,0.2,36,B.aVl,$.aw()):w},
gp5(){var w=this.f
return w===$?this.f=A.aPs(this.ger(0)):w},
q(){var w=this.z
if(w!=null)w.a4(0)
this.a1()},
jb(d,e){var w=this,v=w.z
if(v!=null)v.a4(0)
w.m(new A.ddd(w,d,e))
w.z=C.cK(D.lz,new A.dde(w))},
nA(d){return this.jb(d,!1)},
og(){this.gil().hQ(36,0.2,B.aVl,-0.25)
this.m(new A.dd5(this))},
J6(d){var w,v,u,t,s,r,q=this
if(d===0){q.og()
return}w=x.fZ
v=C.C(new C.Z(B.a5_,new A.dd8(d),w),w.k("L.E"))
if(v.length!==0&&q.r.length!==0){w=q.ger(0)
u=A.ii0(w,q.r,D.d.gI(v))
if(u!=null){A.fV(180,220,0.25,"square")
q.nA(u)}else{A.yI()
q.m(new A.dd9(q,d))
q.gil().xh(12,A.agN(d))
q.jb(A.fyw(w)?"All four ends are connected. Now open the valves.":D.d.gI(v).b+": connected.",!0)}return}w=d===68
if(w||d===69){t=w?"hot":"cold"
if(q.ger(0).e.iI(0,t)){q.m(new A.dda(q,t))
q.jb("Hose taken off.",!0)
return}}s=q.gp5().b.h(0,d)
if(s!=null){q.m(new A.ddb(q,d))
w=q.gil()
r=s.c
w.xh(s.d,r)}},
c7M(d){var w,v=this
v.m(new A.dd6(v))
w=v.ger(0)
if(!w.f){v.jb("Valves closed.",!0)
return}if(A.fyw(w)){A.yI()
v.jb("Hot and cold flow through the hoses and out of the faucet. No leaks. The lesson is complete!",!0)}else{A.fV(180,220,0.25,"square")
v.nA("Water is spraying out of a valve that has no hose! Close the valves and finish connecting the hoses first.")}},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=n.ger(0),k=l.r||l.e.a!==0,j=l.e,i=j.h(0,61)==="hot"&&j.h(0,63)==="hot",h=j.h(0,62)==="cold"&&j.h(0,64)==="cold",g=C.a([k,i,h,l.f&&A.fyw(l)],x.u),f=D.d.bg(g,new A.ddi())
k=f<0?"All done":"Step "+(f+1)+"/4"
i=n.gp5()
h=n.gil()
w=n.w
v=n.x
u=n.y
t=w!==0?n.gp5().b.h(0,n.w):m
s=x.p
i=A.Y3(!1,m,h,new A.ddj(n),m,u,w,t,m,m,v,m,m,n.gJ4(),n.gJ5(),i,!1,m,m,C.a([A.wR("Hints",D.aC,D.ru,l.r,new A.ddk(n)),D.O],s))
v=C.a([],s)
for(r=0;r<2;++r){h={}
w=B.dpC[r]
h.a=null
q=w.a
h.a=q
u=new C.aQ(14,14)
t=n.r===q
p=t?D.b2:D.aZ
o=new C.ay(p,t?3:1,D.r,-1)
p=C.a([],s)
t=C.a6(j).k("bc<2>")
if(new C.Z(new C.bc(j,t),new A.ddl(h),t.k("Z<L.E>")).gL(0)===2)p.push(B.ekZ)
p.push(new C.y(w.b,m,D.ta,m,m,m,m,m,m,m,m,m))
v.push(new C.D(D.iA,C.aB(m,C.p(m,new C.cd(D.aM,D.e,D.i,D.m,m,D.p,m,0,p,m),D.f,m,m,new C.o(w.c,m,new C.bK(o,o,o,o),new C.bj(u,u,u,u),m,m,D.n),m,m,m,m,D.hJ,m,m,m),D.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new A.ddm(h,n),m,m,m,m,m,m,!1,D.a4),m))}j=C.bW(D.bC,v,D.bq,m,6,8)
h=A.ua("Start over",D.kH,new A.ddn(n),D.ad)
l=l.f?"Close the valves":"Open the valves"
return A.TY(D.cs,new A.ddo(d,g),C.x(C.a([j,D.O,C.B(C.a([h,D.ac,A.ua(l,D.qr,n.gc7L(n),D.cs)],s),D.m,m,D.e,D.i,0,m,m)],s),D.m,m,D.e,D.Q,0,D.p),i,k,"Faucet supply lines",m)}}
A.aBq.prototype={
T(){return new A.aBr(A.hch())}}
A.aBr.prototype={
gil(){var w,v=this.e
if(v===$){w=new A.xd(-0.3,0.48,46,B.Vl,$.aw())
w.f=80
this.e=w
v=w}return v},
gp5(){var w=this.f
return w===$?this.f=A.agA(this.d):w},
q(){var w=this.z
if(w!=null)w.a4(0)
this.a1()},
jb(d,e){var w=this,v=w.z
if(v!=null)v.a4(0)
w.m(new A.dkh(w,d,e))
w.z=C.cK(D.lz,new A.dki(w))},
nA(d){return this.jb(d,!1)},
og(){this.gil().hQ(46,0.48,B.Vl,-0.3)
this.m(new A.dkb(this))},
J6(d){var w,v,u,t=this
if(d===0){t.og()
return}if(d===72){w=t.d
w=w.d.t(0,72)&&w.a>=5}else w=!1
if(w){t.m(new A.dkd(t,d))
A.yI()
t.jb("You flipped the breaker fully OFF and then ON. The living room light is back on. A breaker trips when a circuit is overloaded: find out why before it trips again.",!0)
t.gil().xh(22,B.h8X)
return}w=d===87
if(w||d===86){v=t.d
v=v.b&&!v.c&&v.a>=5}else v=!1
if(v){if(t.w==="wrench"&&w){t.m(new A.dke(t,d))
A.yI()
t.jb("You tightened the slip nut with the wrench. The drip has stopped.",!0)
return}A.fV(180,220,0.25,"square")
t.nA(w?"Hand tightening is not enough here. Pick the wrench first, then tap the nut.":"The water is dripping from the slip nut on the trap. Pick the wrench, then tap the nut.")}u=t.gp5().b.h(0,d)
if(u!=null){t.m(new A.dkf(t,d))
w=t.gil()
v=u.c
w.xh(u.d,v)}},
cfI(d){var w,v
A:{if("ptrap"===d){w=B.era
break A}if("faucet"===d){w=B.bG7
break A}w=new A.DV(d,null,null)
break A}v=this.c
v.toString
C.a4(v,!1).cc(C.dX(new A.dkc(w),!1,null,x.H))},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.d,l=B.dkk[m.a],k=o.r,j=k===0?n:A.i77(k)
k=m.d.t(0,72)
w=!m.b||m.c
v=C.a([!k,w],x.u)
w=m.a
k=o.gp5()
u=o.gil()
t=o.r
s=o.x
r=o.y
q=t!==0?o.gp5().b.h(0,o.r):n
p=j==null?n:C.aB(n,C.p(n,B.fud,D.f,n,n,new C.o(D.aC,n,n,C.m(12),n,n,D.n),n,n,n,n,D.rn,n,n,n),D.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new A.dkl(o,j),n,n,n,n,n,n,!1,D.a4)
k=A.Y3(!1,n,u,new A.dkm(o),n,r,t,q,p,new A.dkn(o),s,n,n,o.gJ4(),o.gJ5(),k,!1,n,n,n)
s=l.a
p=x.p
q=C.B(C.a([C.E(C.d(""+(m.a+1)+". "+s,n,n,n,n,n,n,B.fmm,n,n,n),1),A.wR("Wrench",D.aQ,D.p6,o.w==="wrench",new A.dko(o))],p),D.m,n,D.e,D.i,0,n,n)
t=C.d(l.b,n,3,D.a1,n,n,n,B.fnr,n,n,n)
m=C.kO(D.bw,6,s,6,0,new A.dkp(o),m.a)
u=v[0]
s=u?"\u2705 Living room power fixed":"\u26a0 Living room has no power"
s=C.E(C.d(s,n,n,n,n,n,n,C.l(n,n,u?D.es:D.eO,n,n,n,n,n,n,n,n,11.5,n,n,D.H,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),1)
u=v[1]
r=u?"\u2705 Sink leak fixed":"\u26a0 Kitchen sink drips"
return A.TY(D.bw,new A.dkq(d,v),C.x(C.a([q,D.bD,t,m,C.B(C.a([s,C.E(C.d(r,n,n,n,n,n,n,C.l(n,n,u?D.es:D.eO,n,n,n,n,n,n,n,n,11.5,n,n,D.H,n,n,!0,n,n,n,n,n,n,n,n),D.dV,n,n),1)],p),D.m,n,D.e,D.i,0,n,n)],p),D.m,n,D.e,D.Q,0,D.p),k,"Stage "+(w+1)+"/7","Build and fix a house",n)}}
A.afD.prototype={
T(){return new A.bwM()}}
A.bwM.prototype={
b7i(){var w=this,v=w.d
if(v!=null)v.a4(0)
w.d=null
if(w.e&&w.c!=null)w.m(new A.feZ(w))},
c7Q(d){var w,v,u=this
u.m(new A.feX(u))
w=u.a
v=w.e
v.apg(w.f?1.45:0.69)
v=u.d
if(v!=null)v.a4(0)
u.d=C.cK(D.kD,new A.feY(u))},
q(){var w=this.d
if(w!=null)w.a4(0)
this.a1()},
B(d){var w=this,v=null,u=w.a.d,t=D.w.j(w.e?0.8:0.55),s=w.e,r=s?D.bG:D.aZ
r=C.J(r,D.r,s?2:1)
return new C.D(D.eH,C.hc(C.nK(D.c8,C.p(v,C.X(w.a.c,D.c,v,v,v,22),D.f,v,v,new C.o(t,v,r,v,v,v,D.a6),v,44,v,v,v,v,v,44),v,new A.ff_(w),new A.ff0(w),v,v,v,v,new A.ff1(w)),v,u,v,v),v)}}
A.jL.prototype={}
A.N0.prototype={}
A.a71.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=x.p,k=C.a([C.B(C.a([C.aH(m,m,m,m,S.nv,m,m,m,new A.cb2(d),m,m,m,m,m,m),B.fEo],l),D.m,m,D.e,D.i,0,m,m)],l)
for(w=0;w<5;++w){v=B.drV[w]
u=v.c
t=C.a([new C.D(D.akW,new C.y(v.b+"  "+v.a.toUpperCase(),m,new C.F(!0,u,m,m,m,m,12,D.u,m,1.1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m,m,m,m,m,m,m),m)],l)
for(s=v.d,r=s.length,q=0;q<r;++q){p=s[q]
o=new C.aQ(14,14)
n=new C.ay(u.j(0.35),1,D.r,-1)
t.push(C.p(m,C.x(C.a([new C.y(p.a,m,D.j2,m,m,m,m,m,m,m,m,m),D.cL,new C.y(p.b,m,E.UO,m,m,m,m,m,m,m,m,m)],l),D.E,m,D.e,D.i,0,D.p),D.f,m,m,new C.o(B.Fo,m,new C.bK(n,n,n,n),new C.bj(o,o,o,o),m,m,D.n),m,m,m,D.ct,D.bf,m,m,m))}D.d.v(k,t)}return C.c7(m,D.c0,C.bl(!0,C.cr(k,m,B.ajY,m,m,D.ah,!1),!0,!1,D.af,!0,!0),m,!1,!1,m,m)}}
A.cmZ.prototype={}
A.Fb.prototype={}
A.nq.prototype={}
A.Xa.prototype={}
A.cmP.prototype={
bzw(d,e,f){var w,v=this
if(f!=null)w=D.d.fW(B.ayp,new A.cmT(f))
else{w=new C.e9()
w.d3(v.a)
w=B.ayp[w.au(2)]}v.c!==$&&C.aP()
v.c=w
w=new C.e9()
w.d3(v.a+7)
w=w.hh()
v.d!==$&&C.aP()
v.d=w},
vk(d,e){var w=this.c
w===$&&C.c()
return D.d.fW(w.c,new A.cmU(e))},
Pn(d){++this.w
return new A.eB(!1,d,!1,"")},
c5_(d){var w=d.d
return new C.N(w,new A.cmQ(this),C.T(w).k("N<1,n>")).aH(0," and ")},
bib(d,e){var w,v,u,t,s=this,r=s.vk(0,e),q=s.e
if(q.t(0,e))return s.Pn("The "+r.c.toLowerCase()+" is already there.")
if(d!==r.b)return s.Pn(s.b?"That does not go here.":"That does not go here. This spot is for the "+r.c.toLowerCase()+".")
for(w=r.d,v=w.length,u=0;u<v;++u)if(!q.t(0,w[u])){q=s.b?"Not yet: something has to go in first.":"Not yet. "+r.e+" Put in the "+s.c5_(r)+" first.";++s.w
return new A.eB(!1,q,!1,"")}if(r.f&&s.r)return s.Pn(s.b?"The water is still on!":"Stop! The water is still on. Cutting into a pipe with the water on floods the room. Turn the water off at the main valve first (pick the hand and tap the main valve).")
q.M(0,e)
s.y=!1
s.x.a9(0)
if(r.r>0)t=s.b?"":" It is only loose. Pick the wrench and tap it to tighten the joints."
else t=""
return new A.eB(!0,r.c+" fitted."+t,!1,"")},
bjx(d){var w,v,u,t,s=this,r=s.vk(0,d)
if(!s.e.t(0,d))return s.Pn(s.b?"Nothing to tighten yet.":"There is nothing to tighten yet: the "+r.c.toLowerCase()+" is not fitted.")
w=r.r
if(w===0)return s.Pn(s.b?"That does not need tightening.":"The "+r.c.toLowerCase()+" does not have joints to tighten. It just sits in place.")
v=s.f
u=v.h(0,d)
if(u==null)u=0
if(u>=w)return s.Pn("Already tight. More force would crack it.")
t=u+1
v.n(0,d,t)
s.x.a9(0)
s.y=!1
v=r.c
return new A.eB(!0,t>=w?v+": every joint is tight now.":v+": one joint tightened, one to go.",!1,"")},
aH2(d){var w=this.vk(0,d),v=this.f.h(0,d)
if(v==null)v=0
return w.r-v},
aJ4(){var w,v,u,t,s,r,q=this
q.r=!q.r
w=q.x
w.a9(0)
if(!q.r)return B.aZk
v=q.c
v===$&&C.c()
u=v.c
t=C.T(u).k("Z<1>")
s=C.C(new C.Z(u,new A.cmV(q),t),t.k("L.E"))
v=v.c
u=C.T(v).k("Z<1>")
r=C.C(new C.Z(v,new A.cmW(q),u),u.k("L.E"))
q.y=!0
if(s.length!==0){w.v(0,new C.N(s,new A.cmX(),C.T(s).k("N<1,n>")));++q.w
return new A.eB(!1,"Water is spraying from an open pipe where the "+D.d.gI(s).c.toLowerCase()+" should be! Turn the water off and finish the job.",!0,"")}if(r.length!==0){w.v(0,new C.N(r,new A.cmY(),C.T(r).k("N<1,n>")));++q.w
return new A.eB(!1,"The "+D.d.gI(r).c.toLowerCase()+" is leaking from a loose joint. Turn the water off, tighten it with the wrench, then test again.",!0,"")}if(!q.ga3A())return B.aZa
return B.aYX},
cIU(){var w,v,u,t,s,r,q,p=this
p.r=!0
p.aJ4()
w=p.c
w===$&&C.c()
v=w.c
u=v.length
t=0
for(;t<u;++t){s=v[t]
p.bib(s.b,s.a)}for(w=w.c,v=w.length,t=0;t<v;++t){s=w[t]
for(u=s.r,r=s.a,q=0;q<u;++q)p.bjx(r)}p.aJ4()
p.w=0},
ga3A(){var w=this.c
w===$&&C.c()
return D.d.d5(w.c,new A.cmR(this))},
gcH4(){var w=this.c
w===$&&C.c()
return D.d.d5(w.c,new A.cmS(this))},
gwD(){var w=this
return w.ga3A()&&w.gcH4()&&w.r&&w.y&&w.x.a===0}}
A.Wb.prototype={
T(){var w,v=new A.xd(-0.25,0.4,135,B.aWH,$.aw())
v.f=200
w=new C.wo()
$.x1()
w.h2(0)
return new A.aEQ(v,w)}}
A.aEQ.prototype={
gCU(d){var w=this.d
if(w===$){this.a.toString
w=D.o.F(Date.now(),1e5)
this.d=w}return w},
Z(){var w,v=this
v.a2()
w=v.a.d
if(w==null){w=v.gCU(0)
v.a.toString
w=A.h0I(!1,w,null)}v.e=w
v.r=A.hqJ(w,v.x,!w.b)},
q(){var w=this.at
if(w!=null)w.a4(0)
this.a1()},
ZW(){var w=this.e
w===$&&C.c()
return this.r=A.hqJ(w,this.x,!w.b)},
axw(d,e){var w=this,v=w.at
if(v!=null)v.a4(0)
w.m(new A.enS(w,d,e))
w.at=C.cK(D.jv,new A.enT(w))},
aZK(){this.f.hQ(135,0.4,B.aWH,-0.25)
this.m(new A.enL(this))},
cyK(d){var w,v,u=this.e
u===$&&C.c()
u=u.c
u===$&&C.c()
u=u.c
w=u.length
if(d>=9100&&d<9100+w)return u[d-9100].a
if(d>=9200&&d<9260){v=D.o.ao(d-9200,2)
if(v<w)return u[v].a}if(d===9260)return"trap"
if(d===9261)return"arm"
return null},
ayl(d){var w=this.e
w===$&&C.c();++w.w
return new A.eB(!1,d,!1,"")},
c7U(d){return this.aZJ(d)},
cy0(d){var w
A:{if("main"===d){w=9400
break A}w=this.e
w===$&&C.c()
w=w.c
w===$&&C.c()
w=9100+D.d.bg(w.c,new A.enX(d))
break A}this.aZJ(w)},
b6Q(){var w,v,u,t,s,r,q,p=this,o=p.x
if(o==="hand")return C.a([B.eKW],x.L)
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
q=r.vk(0,s)
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
aZJ(d){var w,v,u,t,s,r=this
if(d===0)return
w=r.r
w===$&&C.c()
v=w.b.h(0,d)
if(r.x.length===0){r.m(new A.enA(r,d))
if(v!=null)r.axw(v.a+": "+v.b,!0)
return}u=r.cyK(d)
w=r.x
if(w==="hand")if(d===9400){w=r.e
w===$&&C.c()
t=w.aJ4()}else{w=r.e
w===$&&C.c()
t=r.ayl(w.b?"Your hand is only for the main water valve.":"Your hand is for the main water valve. Parts are placed by picking them from the tray.")}else if(w==="wrench")if(u==null){w=r.e
w===$&&C.c()
t=r.ayl(w.b?"Nothing to tighten.":"There is nothing to tighten there.")}else{w=r.e
w===$&&C.c()
t=w.bjx(u)}else if(u==null){w=r.e
w===$&&C.c()
t=r.ayl(w.b?"Not there.":"That does not go there. Tap one of the glowing spots.")}else{s=r.e
s===$&&C.c()
t=s.bib(w,u)}w=t.a
if(w)A.yI()
else A.fV(180,220,0.25,"square")
r.m(new A.enB(r,d))
w=w&&!t.c
r.axw(t.b,w)
w=r.e
w===$&&C.c()
if(w.gwD()&&!r.as){r.as=!0
$.aV.x1$.push(new A.enC(r))}},
c7R(){var w=null,v=this.c
v.toString
C.ci(w,w,!0,w,new A.enH(this),v,w,!0,!0,x.H)},
aYA(){this.m(new A.enQ(this))
this.aZK()},
gcD6(){var w,v,u,t=C.a([],x.s)
for(w=0;w<11;++w){v=B.c5c[w]
u=this.e
u===$&&C.c()
u=u.c
u===$&&C.c()
if(D.d.b3(u.c,new A.enY(v)))t.push(v)}return t},
c5n(){var w,v,u,t,s=this.e
s===$&&C.c()
s=s.c
s===$&&C.c()
s=s.c
w=s.length
v=0
for(;v<w;++v){u=s[v]
if(!this.e.e.t(0,u.a)){t=this.e.e
t=D.d.d5(u.d,t.gkR(t))}else t=!1
if(t)return u}return null},
aUZ(){var w,v,u,t=this,s=t.e
s===$&&C.c()
if(s.x.a!==0){s=s.c
s===$&&C.c()
s=s.c
w=C.T(s)
v=new C.cQ(new C.Z(s,new A.enI(t),w.k("Z<1>")),new A.enJ(),w.k("cQ<1,n>")).aH(0,", ")
s=t.e
if(s.r)return new C.bk("\ud83d\udca7 Water is leaking at: "+v+". First turn the main water OFF: pick Hand and tap the main valve.","hand","main")
return new C.bk("\ud83d\udca7 It leaked at: "+v+". Pick the Wrench and tap it to tighten the joint. Then turn the water ON again to test.","wrench",s.x.gI(0))}if(!s.ga3A()){u=t.c5n()
if(u==null)return B.eV2
if(u.f&&t.e.r)return B.eUB
s=u.b
w=B.aFZ.h(0,s)
if(w==null)w=s
return new C.bk("Next: pick "+w+" from the tray, then tap "+u.c.toLowerCase()+" (the glowing spot). "+u.e,s,u.a)}s=t.e.c
s===$&&C.c()
s=s.c
w=C.T(s).k("Z<1>")
v=C.C(new C.Z(s,new A.enK(t),w),w.k("L.E"))
if(v.length!==0)return new C.bk("Everything is fitted. Now tighten each joint: pick the Wrench and tap "+D.d.gI(v).c.toLowerCase()+".","wrench",D.d.gI(v).a)
if(!t.e.r)return B.eTz
return B.eVr},
cwm(){var w,v,u,t,s=this,r={}
r.a=r.b=null
w=s.aUZ()
r.b=w.b
r.a=w.c
s.m(new A.enU(r,s))
v=r.a
if(v!=null){if(v==="main")u=9400
else{v=s.e
v===$&&C.c()
v=v.c
v===$&&C.c()
u=9100+D.d.bg(v.c,new A.enV(r))}r=s.r
r===$&&C.c()
t=r.b.h(0,u)
if(t!=null)s.f.hQ(70,0.3,t.c,-0.2)
s.m(new A.enW(s,u))}s.axw(w.a,!0)},
axv(d,e,f){var w,v=null,u=this.x===d,t=u?D.aC.j(0.25):D.c.j(0.07),s=C.m(14),r=u?D.aC:D.aZ
r=C.J(r,D.r,u?2:1)
w=C.X(f,u?D.aC:D.ad,v,v,v,19)
return new C.D(E.tY,C.aB(v,C.p(v,C.B(C.a([w,D.bo,C.d(e,v,v,v,v,v,v,C.l(v,v,u?D.aC:D.c,v,v,v,v,v,v,v,v,12.5,v,v,D.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),D.m,v,D.e,D.i,0,v,v),D.f,v,v,new C.o(t,v,r,s,v,v,D.n),v,v,v,v,D.fj,v,v,v),D.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new A.enE(this,u,d),v,v,v,v,v,v,!1,D.a4),v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.e
h===$&&C.c()
h=h.c
h===$&&C.c()
h=h.c
w=new C.Z(h,new A.enZ(j),C.T(h).k("Z<1>")).gL(0)
h=j.e.c
h===$&&C.c()
v=j.r
v===$&&C.c()
u=j.y
t=j.z
s=j.Q
r=u!==0?v.b.h(0,u):i
v=A.Y3(!1,i,j.f,new A.eo_(j),i,s,u,r,i,new A.eo0(),t,i,i,j.gc7S(),j.gc7T(),v,!1,i,i,i)
t=x.p
r=C.a([],t)
if(!j.e.b){u=D.aQ.j(0.12)
s=C.m(12)
q=C.J(D.aQ.j(0.6),D.r,1)
r.push(C.p(i,C.B(C.a([C.E(C.d("\ud83d\udc49 "+j.aUZ().a,i,4,D.a1,i,i,i,B.ftl,i,i,i),1),D.bo,C.bH(B.fx2,i,j.gcwl(),C.bo(i,i,i,i,i,B.f41,D.l3,i,i,i,i,i))],t),D.m,i,D.e,D.i,0,i,i),D.f,i,i,new C.o(u,i,q,s,i,i,D.n),i,i,i,D.eH,D.ZX,i,i,1/0))}if(j.x.length!==0&&j.b6Q().length!==0){u=C.a([],t)
for(s=j.b6Q(),q=s.length,p=0;p<s.length;s.length===q||(0,C.M)(s),++p){o={}
n=s[p]
o.a=null
o.a=n.a
m=new C.aQ(12,12)
l=new C.ay(D.b2,1,D.r,-1)
u.push(C.aB(i,C.p(i,new C.y("\ud83d\udccd "+n.b,i,D.oD,i,i,i,i,i,i,i,i,i),D.f,i,i,new C.o(D.eW.j(0.35),i,new C.bK(l,l,l,l),new C.bj(m,m,m,m),i,i,D.n),i,i,i,i,B.ZY,i,i,i),D.y,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new A.eo1(o,j),i,i,i,i,i,i,!1,D.a4))}r.push(new C.D(D.eH,C.bW(D.bC,u,D.bq,i,6,6),i))}u=j.e
if(u.b)u="Practice mode: no hints. Build it in the right order."
else if(u.ga3A())u="Everything is fitted. Tighten every joint, then turn the main water on to test."
else{u=j.e.c
u===$&&C.c()
u="Job: "+u.d}r.push(new C.bM(D.a5,i,i,C.d(u,i,2,D.a1,i,i,i,B.aSp,i,i,i),i))
r.push(D.O)
t=C.a([j.axv("hand","Hand",B.aov),j.axv("wrench","Wrench",D.p6)],t)
for(u=j.gcD6(),s=u.length,p=0;p<u.length;u.length===s||(0,C.M)(u),++p){k=u[p]
q=B.aFZ.h(0,k)
q.toString
t.push(j.axv(k,q,Ab.anZ))}r.push(new C.a7(i,52,C.cr(t,i,i,i,i,D.aM,!1),i))
return A.TY(D.aQ,new A.eo2(j,d),C.x(r,D.m,i,D.e,D.Q,0,D.p),v,""+w+"/"+h.c.length+" fitted","Plumbing job: "+h.b,i)},
c1K(d){return C.bU(E.lw,null,new A.enP(this),d,!0,!0,!0,D.k1,!1,!1,x.H)}}
A.z3.prototype={}
A.ou.prototype={}
A.XQ.prototype={}
A.avI.prototype={}
A.aUp.prototype={}
A.eB.prototype={
gjO(){return this.a}}
A.XE.prototype={
cl6(d,e,f){var w,v,u,t,s=this,r=null,q="outlet",p="switch",o=new C.e9()
o.d3(s.a)
w=d==null?o.au(3):d
v=C.a([0,1,2],x.t)
D.d.dZ(v,o)
u=3+o.au(2)
switch(w){case 0:t=e==null?"Living room":e
s.c!==$&&C.aP()
s.c=t
t=C.a([new A.ou(v[0],q,r),new A.ou(v[1],q,r),new A.ou(5,"light",u),new A.ou(u,p,r)],x.F)
s.d!==$&&C.aP()
s.d=t
break
case 1:t=e==null?"Bedroom":e
s.c!==$&&C.aP()
s.c=t
t=C.a([new A.ou(v[0],q,r),new A.ou(v[1],q,r),new A.ou(6,"fan",u),new A.ou(u,p,r)],x.F)
s.d!==$&&C.aP()
s.d=t
break
default:t=e==null?"Kitchen":e
s.c!==$&&C.aP()
s.c=t
t=C.a([new A.ou(v[0],"gfci",r),new A.ou(v[1],"gfci",r),new A.ou(5,"light",u),new A.ou(u,p,r)],x.F)
s.d!==$&&C.aP()
s.d=t}if(f){t[1]=new A.ou(t[1].a,B.dk4[o.au(5)],r)
t=s.d
t===$&&C.c()
t[3]=new A.ou(t[3].a,B.dlH[o.au(5)],r)}},
ganm(){var w,v,u=C.aY(x.S),t=this.d
t===$&&C.c()
w=t.length
v=0
for(;v<t.length;t.length===w||(0,C.M)(t),++v)u.M(0,t[v].a)
return u},
cV0(d){var w,v,u,t=this.d
t===$&&C.c()
w=t.length
v=0
for(;v<w;++v){u=t[v]
if(u.a===d)return u}return null},
fS(d){++this.f
return new A.eB(!1,d,!1,"")},
am2(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.d
g===$&&C.c()
w=g.length
v=h.x
u=0
for(;u<g.length;g.length===w||(0,C.M)(g),++u){t=g[u].a
s=A.jY(t)
if(s.e==="fan")r="fan"
else r=s.c?"ceiling":"wall"
v.n(0,t,r)}g=C.a([],x.t)
for(q=0;q<$.Ha().length;++q)g.push(q)
h.y.v(0,g)
h.z.v(0,h.ganm())
for(g=h.Q,w=x.S,u=0;u<3;++u){p=B.ot[u]
v=C.aY(w)
t=C.aY(w)
o=new A.avI(v,t)
o.d=o.e=o.a=!0
for(r=h.aqn(p),n=r.length,m=0;m<r.length;r.length===n||(0,C.M)(r),++m)for(l=r[m]*10,k=0;k<6;++k)t.M(0,l+k)
for(t=h.ganm(),r=C.a6(t),n=new C.ml(t,t.r,r.k("ml<1>")),n.c=t.e,r=r.c,t=p+48;n.C();){l=n.d
if(l==null)l=r.a(l)
s=A.jY(l)
if(!s.c){j=s.d.a
j=j>=p&&j<=t}else j=!1
if(j)v.M(0,l)}g.n(0,p,o)}for(g=h.as,u=0;u<2;++u){i=g[u]
i.a=!0
i.b=3
i.d=i.c=!0}},
cIV(){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=k.d
j===$&&C.c()
w=j.length
v=0
for(;v<j.length;j.length===w||(0,C.M)(j),++v){u=j[v]
k.bga(u.a,u.b)}for(w=j.length,t=x.S,s=x.N,r=k.at,v=0;v<j.length;j.length===w||(0,C.M)(j),++v){q=j[v].a
p=r.h(0,q)
if(p==null)continue
o=p.a
n=A.t0(o)
if(n.w.length!==0)m=n.z
else{A:{if("outlet"===o){o=C.G([25,"ground",23,"white",21,"black"],t,s)
break A}if("gfci"===o){o=C.G([25,"ground",24,"white",22,"black"],t,s)
break A}if("switch"===o){o=C.G([25,"ground",21,"blackLine",22,"blackLoad"],t,s)
break A}o=C.G([53,"ground",52,"white",51,"black"],t,s)
break A}m=o}for(o=m.gdV(m),o=o.gaf(o);o.C();){l=o.gR(o)
k.bew(q,l.b,l.a)}k.biw(q)
k.bdl(q)}if(!k.ax)k.aJ2()
for(w=j.length,v=0;v<j.length;j.length===w||(0,C.M)(j),++v){u=j[v]
if(D.d.t(B.lH,u.b)){t=u.a
k.bid(t,"lamp")
k.bjT(t)}}for(j=D.d.gaf(j),w=new C.f5(j,new A.crQ());w.C();){t=j.gR(0).a
k.aFG(t)
k.aFG(t)}},
aLx(d){var w,v,u=A.jY(d).d.a,t=C.a([],x.t)
for(w=0;v=$.Ha(),w<v.length;++w){v=v[w]
if(v>u&&v<64)t.push(w)}return t},
cSU(d,e){var w,v,u=this,t=u.x
if(t.aj(0,d))return u.fS("There is already a box at "+A.jY(d).b+".")
w=A.jY(d)
v=w.c
if(!v&&e!=="wall")return u.fS("That is a ceiling box. On the wall you use a plain wall box (the blue one with ears).")
if(v&&e==="wall")return u.fS("A wall box cannot go in the ceiling. Use a round ceiling box.")
if(w.e==="fan"&&e!=="fan"){if(!u.b)return u.fS('A fan is heavy and it shakes. It needs a box that says "fan rated". A plain ceiling box can let the fan fall.')
t.n(0,d,e);++u.f
return B.aZy}t.n(0,d,e)
t=v?"ceiling joist":"side of the stud"
return new A.eB(!0,w.b+": box fixed to the "+t+".",!1,"")},
cNp(d){var w,v=this
if(d<0||d>=$.Ha().length)return B.aZs
w=v.y
if(w.t(0,d))return v.fS("That stud already has a hole.")
if(v.x.a===0)return v.fS("Mount the boxes first. Then you know where the cable has to go and which studs need a hole.")
w.M(0,d)
return B.aZc},
cW6(d){var w,v,u,t,s=this,r=A.jY(d)
if(!s.x.aj(0,d))return s.fS("There is no box at "+r.b+". Mount the box first, then pull the cable to it.")
w=s.z
if(w.t(0,d))return s.fS("The cable is already there.")
v=s.aLx(d)
u=C.T(v).k("Z<1>")
t=C.C(new C.Z(v,new A.crX(s),u),u.k("L.E"))
if(t.length!==0){w=D.o.V($.Ha()[D.d.gI(t)])
v=t.length
u=v===1?"it":"the studs"
return s.fS("The cable is stuck: the stud at "+w+" inches has no hole. Drill "+u+" first ("+v+" left on the way).")}w.M(0,d)
return new A.eB(!0,"Cable pulled from the panel to "+r.b+", through the studs and along the ceiling.",!1,"")},
gaIU(){return this.ganm().d5(0,new A.crY(this))},
aq2(d){var w,v,u,t
for(w=this.Q,w=new C.cH(w,C.a6(w).k("cH<1,2>")).gaf(0);w.C();){v=w.d
u=v.b
if(u.a){t=v.a
t=d>=t&&d<=t+48}else t=!1
if(t)return u}return null},
cQb(d){var w,v,u=this
if(!u.gaIU())return u.fS("Finish the rough-in first. The cable and the boxes must be in before the drywall hides the studs.")
if(!D.d.t(B.a51,d))return B.aZ0
if(!D.d.t(B.ot,d))return u.fS("The edge of the sheet would land between two studs. The sheet needs a stud under every edge, so there is nothing to screw it to. Start at the left corner (a stud) and move one sheet width (48 inches) at a time.")
w=u.Q
v=w.h(0,d)
if((v==null?null:v.a)===!0)return u.fS("There is already a sheet there.")
v=w.h(0,d)
if(v==null){v=x.S
v=new A.avI(C.aY(v),C.aY(v))}v.a=!0
w.n(0,d,v)
return B.aZb},
aqn(d){var w,v,u,t=C.a([],x.t)
for(w=d+48,v=0;u=$.Ha(),v<u.length;++v){u=u[v]
if(u>=d&&u<=w)t.push(v)}return t},
cMk(d){var w,v,u=this,t=A.jY(d)
if(t.c)return u.fS("Ceiling fixtures do not need an opening in the wall.")
if(!u.x.aj(0,d))return u.fS("There is no box at "+t.b+".")
w=u.aq2(t.d.a)
if(w==null)return u.fS("There is no sheet over this box yet. Hang the sheet first, then cut the opening.")
v=w.b
if(v.t(0,d))return u.fS("The opening is already cut.")
v.M(0,d)
return B.aZl},
aKL(d,e,f){var w,v,u,t,s,r=this
if(f)return r.fS("Missed the stud! There is only air behind the sheet here. The screw would pull through the paper. Screw only where a stud is behind the sheet (every 16 inches).")
w=x.dD
v=C.C(new C.Z(B.ot,new A.crZ(r,d),w),w.k("L.E"))
if(v.length===0)return r.fS("There is no sheet here yet.")
u=d*10+e
if(D.d.d5(v,new A.cs_(r,u)))return r.fS("There is already a screw there.")
for(w=v.length,t=r.Q,s=0;s<v.length;v.length===w||(0,C.M)(v),++s)t.h(0,v[s]).c.M(0,u)
return B.aZn},
bo1(d,e){return this.aKL(d,e,!1)},
bpF(d){var w=this.Q.h(0,d)
if(w==null||!w.a)return!1
return D.d.d5(this.aqn(d),new A.cs1(w))},
gaDf(){return D.d.d5(B.ot,new A.crP(this))},
gaDe(){var w=this.ganm()
return new C.Z(w,new A.crN(),C.a6(w).k("Z<ct.E>")).d5(0,new A.crO(this))},
cY1(d){var w,v=this
if(!v.gaDf())return v.fS("Hang all the sheets first.")
if(!D.d.d5(B.ot,v.gaq3()))return v.fS("Finish screwing every sheet to the studs first. Tape goes on a solid wall.")
w=v.as[d]
if(w.a)return v.fS("This seam already has tape.")
w.c=w.a=!0
return B.aZ4},
cSX(d){var w,v=this,u=v.as[d]
if(!u.a)return v.fS("Tape first. The mud goes over the tape.")
if(!u.c)return v.fS("The last coat is still wet. Let it dry before the next coat.")
w=u.b
if(w>=3)return v.fS("Three coats are enough. Now sand it.");++w
u.b=w
u.c=!1
return new A.eB(!0,"Coat "+w+" of joint compound spread. Let it dry.",!1,"")},
cRO(){var w,v=this.as
if(D.d.d5(v,new A.crV()))return B.aZi
for(w=0;w<2;++w)v[w].c=!0
return B.aZw},
bnO(d){var w=this,v=w.as[d]
if(v.b<3)return w.fS("Put on all three coats of mud first. Sanding now would just rub off the tape.")
if(!v.c)return w.fS("The mud is still wet. Let it dry first.")
if(v.d)return w.fS("Already sanded.")
v.d=!0
return B.aZ1},
cVf(d){var w=this,v=w.Q.h(0,d)
if(v==null||!v.a)return w.fS("There is no sheet there.")
if(!w.gaDe())return w.fS("Cut the openings for the boxes before you paint. Otherwise the paint covers the boxes.")
if(!D.d.d5(w.as,new A.crW()))return w.fS("Sand the seams first. Paint shows every bump.")
if(v.e)return w.fS("This sheet is already painted.")
v.e=!0
return B.aYY},
gwF(){var w=this
return w.gaDf()&&D.d.d5(B.ot,w.gaq3())&&w.gaDe()&&D.d.d5(w.as,new A.crR())&&D.d.d5(B.ot,new A.crS(w))},
NB(){var w,v
for(w=this.at,w=new C.dq(w,w.r,w.e);w.C();){v=w.d.b
v.a=this.ax&&!this.ay}},
c0Z(d,e){if(d.c)return e==="light"||e==="fan"?"":"A ceiling box holds a light or a fan, not an outlet or a switch."
return D.d.t(B.lH,e)||D.d.t(B.jV,e)?"":"A light or a fan hangs from the ceiling. A wall box holds an outlet, a GFCI or a switch."},
bga(d,e){var w,v,u,t,s,r=this,q=A.jY(d)
if(!r.gwF())return r.fS("Finish the drywall first. Devices go in after the walls are painted.")
w=r.x
if(!w.aj(0,d)||!r.z.t(0,d))return r.fS("There is no box with cable at "+q.b+".")
v=r.at
if(v.aj(0,d))return r.fS("There is already a device there. Pull it out first if you want to move it.")
u=r.c0Z(q,e)
if(u.length!==0)return r.fS(u)
if(!(D.d.t(B.jV,e)&&q.e==="low"))t=!D.d.t(B.jV,e)&&!q.c&&q.e==="switch"
else t=!0
if(t){if(!r.b)return r.fS(D.d.t(B.jV,e)?"A switch goes about 48 inches from the floor, where a hand falls naturally. This box is down at outlet height.":"Outlets go low, about 16 inches from the floor. This box is up at switch height.");++r.f
r.cy.push("Wrong height at "+q.b+".")}t=e==="fan"
if(t&&w.h(0,d)!=="fan")if(!r.b)return r.fS("This box is not fan rated. A fan on it can fall. Take the box out and put in a fan-rated one.")
s=new A.Cx(C.U(x.S,x.N))
s.r=r.b
s.y=r.dx
s.x=!(t&&w.h(0,d)!=="fan")
s.a=r.ax&&!r.ay
v.n(0,d,new A.aUp(e,s))
if(e==="light")w="Light fixture"
else if(t)w="Ceiling fan"
else if(e==="gfci")w="GFCI outlet"
else w=e==="switch"?"Switch":A.agJ(e)
return new A.eB(!0,w+" is held up to "+q.b+". Turn the breaker OFF, then wire it.",!1,"")},
biR(d){var w=this,v=w.at,u=v.h(0,d)
if(u==null)return B.aZ8
if(w.ax&&!w.ay&&!u.b.w){if(w.b)return w.a2g()
return w.a2v()}v.W(0,d)
w.CW.W(0,d)
w.cx.W(0,d)
w.ch.W(0,d)
return B.aZq},
a2v(){++this.r;++this.f
return B.aZo},
a2g(){var w,v,u=this;++u.r;--u.e
u.ax=!1
u.NB()
w=u.e
if(w<=0){u.w=!0
return B.aZ7}v=w===1?"life":"lives"
return new A.eB(!1,"ZAP! You touched a live wire and got a shock. The breaker is now off. "+w+" "+v+" left. Always turn the breaker OFF and test the wires first.",!0,"shock")},
bew(d,e,f){var w,v,u,t,s=this,r=s.at.h(0,d)
if(r==null)return B.abG
s.NB()
w=A.t0(r.a)
v=D.d.fW(w.f,new A.crT(f))
u=A.hvG(w,r.b,e,v,!0)
t=u==null
if(t&&s.dx)return B.aZ_
if(t){if(!s.b&&!v.c.t(0,e)){++s.f
return new A.eB(!0,v.b+": fastened. Careful: "+C.w(w.r.$2(e,v))+" It will burn or trip the breaker when the power comes on.",!0,"")}return new A.eB(!0,v.b+": wire fastened.",!1,"")}if(D.a.a0(u,"SHOCK"))return s.a2g()
if(D.a.a0(u,"STOP"))return s.a2v();++s.f
return new A.eB(!1,u,!1,"")},
bjQ(d,e){var w,v=this,u=v.at.h(0,d)
if(u==null)return B.Wi
v.NB()
w=u.b
if(w.a&&w.c===0){if(v.b)return v.a2g()
return v.a2v()}w=w.b
w.bs(w,new A.cs2(e))
return B.aZv},
biw(d){var w,v,u=this,t=u.at.h(0,d)
if(t==null)return B.abG
w=A.t0(t.a)
v=t.b
if(!A.bEF(w,v))return u.fS("Every wire must be fastened first.")
if(u.ax&&!u.ay){if(u.b)return u.a2g()
return u.a2v()}v.c=1
return B.aZg},
biu(d){var w,v=this,u=v.at.h(0,d)
if(u==null)return B.Wi
if(v.ax&&!v.ay){if(v.b)return v.a2g()
return v.a2v()}w=u.b
w.c=0
w.d=!1
return B.aZm},
bdl(d){var w=this.at.h(0,d)
if(w==null||w.b.c!==1)return this.fS("Push the device into the box first.")
w.b.c=2
return B.aZp},
cY2(){var w,v,u,t,s,r,q,p,o,n=C.a([],x.fJ),m=this.d
m===$&&C.c()
w=m.length
v=this.at
u=0
for(;u<m.length;m.length===w||(0,C.M)(m),++u){t=m[u]
s=t.a
r=v.h(0,s)
q=t.b
p=A.t0(q)
o=A.jY(s).b+": "+p.b
if(r==null||r.a!==q){n.push(new A.ab1(o,A.fNO(p),B.dg7,!0))
continue}s=A.fNO(p)
q=r.b
n.push(new A.ab1(o,s,A.h5i(p,q),q.x))}return n},
cY3(){var w,v,u,t,s,r=C.aY(x.N),q=this.d
q===$&&C.c()
w=q.length
v=0
for(;v<q.length;q.length===w||(0,C.M)(q),++v)r.M(0,q[v].b)
q=C.a([],x.W)
for(r=C.eo(r,r.r,r.$ti.c),w=r.$ti.c;r.C();){u=r.d
u=B.aGc.h(0,u==null?w.a(u):u)
if(u==null)u=B.azt
t=C.T(u)
s=new C.jx(u,0,2,t.k("jx<1>"))
s.pe(u,0,2,t.c)
D.d.v(q,s)}return q},
apc(d){var w=this.at
return A.L7(A.t0(w.h(0,d).a),w.h(0,d).b)},
aJ2(){var w=this
if(w.ay){w.ax=w.ay=!1
w.NB()
return B.aZe}w.ax=!w.ax
w.NB()
if(!w.ax)return B.aZ6
return w.c7V()},
c7V(){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=C.a([],x.s),i=k.db
i.a9(0)
for(w=k.at,v=new C.cH(w,C.a6(w).k("cH<1,2>")).gaf(0),u=k.cx,t=!1,s=!1,r=!1;v.C();){q=v.d
p=q.b.b
if(p.c===0)continue
o=q.a
n=A.L7(A.t0(w.h(0,o).a),w.h(0,o).b)
p.d=p.c>=2
m=n.r
if(m!=="none"){i.n(0,o,m)
p.z=m
r=!0}if(n.d)t=!0
if(n.e){p.w=!0
u.M(0,o)
s=!0}if(n.a!=="ok"&&!k.dx)j.push(A.jY(o).b+": "+n.b)}if(t){k.ay=!0
k.NB()
l=s?"BANG! Sparks, smoke and flames. ":"Snap! "
i=k.dx?"The breaker tripped.":l+" The breaker tripped. "+D.d.aH(j," ")+" Fix it, then flip the breaker OFF and ON again."
return new A.eB(!1,i,!0,s?"burn":"trip")}if(r)return new A.eB(!1,k.dx?"Power is on.":"Power is on, and something is wrong. "+D.d.aH(j," "),!0,"arc")
if(j.length!==0)return new A.eB(!0,"Power is on. "+D.d.aH(j," "),!0,"")
return B.aZj},
aFG(d){var w,v,u,t,s,r,q=this,p=q.at,o=p.h(0,d)
if(o==null||!D.d.t(B.jV,o.a)||o.b.c<2)return B.aZu
w=q.ch
if(w.t(0,d))w.W(0,d)
else w.M(0,d)
v=q.d
v===$&&C.c()
u=C.T(v).k("Z<1>")
t=C.C(new C.Z(v,new A.crU(d),u),u.k("L.E"))
if(t.length===0)return B.aZf
s=D.d.gI(t)
v=s.a
r=q.an9(v)
if(w.t(0,d)&&r){p=p.h(0,v)
if(p!=null)p.c=!0
return new A.eB(!0,(s.b==="fan"?"The fan spins":"The light turns on")+". The switch works.",!1,"")}if(w.t(0,d)){p=s.b
return new A.eB(!1,(p==="fan"?"The fan":"The light")+" did not come on. Check the breaker and the wires on the switch and on the "+p+".",!1,"")}return B.aZt},
a4w(d){var w,v=this.at.h(0,d)
if(v!=null){w=v.b
w=w.c<2||w.w}else w=!0
if(w)return!1
return this.apc(d).c},
an9(d){var w=this,v=w.cV0(d),u=v==null,t=u?null:v.c,s=!0
if(!u)if(t!=null)u=!(w.ax&&!w.ay)||!w.a4w(d)||!w.a4w(t)
else u=s
else u=s
if(u)return!1
return w.ch.t(0,t)},
bid(d,e){var w,v,u,t=this,s="Nothing happens.",r=t.at.h(0,d)
if(r==null||!D.d.t(B.lH,r.a)||r.b.c<2)return t.fS("There is no finished outlet there to plug into.")
w=t.CW
if(w.aj(0,d))return t.fS("Something is already plugged in.")
w.n(0,d,e)
w=r.b
if(w.w)return B.aZ9
v=t.apc(d)
if(t.ax&&!t.ay&&t.a4w(d)){r.c=!0
if(v.a!=="ok"){w=t.dx
u=w?A.crM(e)+" runs.":A.crM(e)+" runs, but this outlet is NOT safe. "+v.b
return new A.eB(!0,u,!w,"")}return new A.eB(!0,A.crM(e)+" runs. The outlet works.",!1,"")}if(!(t.ax&&!t.ay))return B.aZd
u=v.r
if(u!=="none"){t.db.n(0,d,u)
w.z=u
w=t.dx?s:A.crM(e)+" does not run. "+v.b
return new A.eB(!1,w,!0,u==="fire"?"burn":"arc")}return new A.eB(!1,t.dx?s:"Nothing happens. "+v.b,!0,"")},
bjT(d){if(this.CW.W(0,d)==null)return B.Wi
return B.aZ5},
bhY(d){var w,v=this
if(d>=0){w=v.d
w===$&&C.c()
w=d>=w.length}else w=!0
if(w)return 2
if(v.tf(d))return 2
w=v.d
w===$&&C.c()
return v.at.h(0,w[d].a)==null?0:1},
tf(d){var w,v,u,t=this
if(d>=0){w=t.d
w===$&&C.c()
w=d>=w.length}else w=!0
if(w)return!0
w=t.d
w===$&&C.c()
v=w[d]
w=v.a
u=t.at.h(0,w)
if(u==null||!A.h19(v.b,u.a)||u.b.c<2)return!1
return t.apc(w).a==="ok"},
gbkj(){var w,v,u,t,s,r,q,p,o,n=this.d
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
if(q!==p)if(!(D.d.t(B.lH,q)&&D.d.t(B.lH,p)))if(!(D.d.t(B.jV,q)&&D.d.t(B.jV,p)))if(q==="light"||q==="fan")q=p==="light"||p==="fan"
else q=!1
else q=o
else q=o
else q=o
q=!q||r.b.c<2}else q=!0
if(q)return!1
if(A.L7(A.t0(v.h(0,s).a),v.h(0,s).b).a!=="ok")return!1}return!0},
gbdP(){var w,v,u,t,s,r,q,p,o,n=this.d
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
if(q!==p)if(!(D.d.t(B.lH,q)&&D.d.t(B.lH,p)))if(!(D.d.t(B.jV,q)&&D.d.t(B.jV,p)))if(q==="light"||q==="fan")q=p==="light"||p==="fan"
else q=!1
else q=o
else q=o
else q=o
q=!q||r.b.c<2}else q=!0
if(q)return!1
if(A.L7(A.t0(v.h(0,s).a),v.h(0,s).b).a!=="ok")return!1
s=t.b
if(D.d.t(B.lH,s)){if(!r.c)return!1}else if(!D.d.t(B.jV,s)&&!r.c)return!1}return!0}}
A.iV.prototype={}
A.Of.prototype={
T(){var w,v=new A.xd(-0.12,0.4,205,B.aay,$.aw())
v.f=300
v.z=0.7
v.w=0.05
w=new C.wo()
$.x1()
w.h2(0)
return new A.aEX(v,w,C.U(x.S,x.i))}}
A.aEX.prototype={
gCU(d){var w=this.e
if(w===$){this.a.toString
w=D.o.F(Date.now(),1e5)
this.e=w}return w},
Z(){var w,v,u=this
u.a2()
w=u.a.e
if(w==null){w=u.gCU(0)
u.a.toString
w=A.crL(null,null,!1,w,!0)}u.d=w
v=u.a
if(v.c)w.dx=!0
if(v.e!=null&&w.gwF())u.y=2
if(u.a.f){u.d.am2()
u.y=2}u.r=A.wQ(u.d,new A.rH(u.z,u.Q,!1))
w=u.f
w.y=0
w.z=1.1},
q(){var w=this.cy
if(w!=null)w.a4(0)
this.a1()},
c83(){var w=this,v=w.d
v===$&&C.c()
w.r=A.wQ(v,new A.rH(w.z,w.Q,!1))},
qB(d,e){var w=this,v=w.cy
if(v!=null)v.a4(0)
w.m(new A.esw(w,d,e))
w.cy=C.cK(D.jv,new A.esx(w))},
aej(d){return this.qB(d,!1)},
jC(d){var w,v,u,t,s,r,q,p,o=this,n=d.a
if(n)A.yI()
else A.fV(180,220,0.25,"square")
w=d.d
if(w==="shock"){C.fJ()
o.m(new A.ery(o))
C.bP(D.mD,new A.erz(o),x.P)}v=w==="burn"
if(v||w==="trip"||w==="arc"){u=o.d
u===$&&C.c()
u=u.db
u=new C.hC(u,u.r,u.e)
t=o.x
s=o.w
while(u.C()){r=u.d
q=s.gi8()
p=o.d.db.h(0,r)==="fire"?7:4.5
t.n(0,r,q/1000+p)}C.fJ()
w=w==="arc"
u=w?95:150
t=w?500:300
A.fV(u,t,0.5,w?"saw":"noise")
if(v){o.m(new A.erA(o))
C.bP(D.eQ,new A.erB(o),x.P)}}w=o.d
w===$&&C.c()
o.r=A.wQ(w,new A.rH(o.z,o.Q,!1))
n=n&&!d.c
o.qB(d.b,n)
if(o.d.w&&o.c!=null)$.aV.x1$.push(new A.erC(o))
if(o.d.gbdP()&&!o.cx){o.cx=!0
$.aV.x1$.push(new A.erD(o))}},
b4m(){var w=this.ch?3.141592653589793:-0.12
this.f.hQ(205,0.4,B.aay,w)},
c7Y(d,e){var w,v,u,t,s
if(this.Q>=0)return
w=this.f
v=w.cZ0(d,e)
if(v==null||Math.abs(v.a)>78||Math.abs(v.b)>52)v=w.beT(d,e,-47)
if(v==null)return
u=D.k.E(v.a,-70,70)
t=D.k.E(v.b,-46,48)
s=D.k.E(v.c,-6,100)
w.xh(Math.max(34,w.c*0.45),new A.q(u,t,s))
A.fV(560,50,0.25,"tri")},
aTT(){var w,v,u=this
u.ch=!1
w=u.f
w.w=0.05
w.z=0.7
w.r6(!1)
w.y=0
u.m(new A.erN(u))
v=u.d
v===$&&C.c()
u.r=A.wQ(v,new A.rH(u.z,u.Q,!1))
w.hQ(205,0.4,B.aay,-0.12)},
c2x(){var w,v,u=this
u.ch=!1
w=u.f
w.r6(!1)
w.w=-0.95
w.y=0
w.z=1
u.m(new A.erP(u))
v=u.d
v===$&&C.c()
u.r=A.wQ(v,new A.rH(u.z,u.Q,!1))
w.hQ(82,-0.55,B.fXn,-0.12)},
bDL(){var w,v,u,t,s=this,r=s.d
r===$&&C.c()
r=r.CW
w=C.a6(r).k("cH<1,2>")
v=w.k("Z<L.E>")
u=C.C(new C.Z(new C.cH(r,w),new A.erE(),v),v.k("L.E"))
if(u.length===0){s.aej("Plug a TV into an outlet first. Then you can look behind it.")
return}t=A.jY(D.d.gI(u).a).d.a
s.ch=!1
r=s.f
r.r6(!1)
r.w=0.02
r.y=0
r.z=1.7
s.m(new A.erF(s))
s.r=A.wQ(s.d,new A.rH(s.z,s.Q,!1))
w=t<0?-1.4:1.4
r.hQ(60,0.12,new A.q(t,-30,14),w)
s.qB("This is the back of the TV. Tap the TV or its plug to pull the plug.",!0)},
bDJ(){var w,v,u=this
u.ch=!0
w=u.f
w.r6(!0)
u.m(new A.erG(u))
v=u.d
v===$&&C.c()
u.r=A.wQ(v,new A.rH(u.z,u.Q,!1))
w.hQ(190,0.3,B.fXR,3.141592653589793)},
ZX(d,e){var w,v,u,t,s=this,r=A.jY(e),q=s.f
q.r6(!1)
q.y=0
s.m(new A.es5(s,e))
w=s.d
w===$&&C.c()
s.r=A.wQ(w,new A.rH(s.z,s.Q,!1))
v=A.ai_(r,B.fVP)
w=r.c
u=w?20:15
t=w?1.2:0.3
q.hQ(u,w?-0.12:0.26,v,t)},
aei(){var w,v=this
v.m(new A.erO(v))
w=v.d
w===$&&C.c()
v.r=A.wQ(w,new A.rH(v.z,v.Q,!1))
v.b4m()},
c81(d){var w,v,u,t,s,r,q,p=this
if(d===0){if(p.Q<0)p.m(new A.ess(p))
return}w=p.Q
if(w>=0)v=!(d>=5000&&d<5700)
else v=!1
if(v)return
if(d>=5000&&d<5700){v=d-5000
u=D.o.ao(v,100)
if(w!==u){if(p.z==="tester")p.aBW(u)
else{p.m(new A.est(p))
p.ZX(0,u)}return}p.b25(u,D.o.F(v,100))
return}if(d>=1000&&d<1010)if(p.z==="drill"){w=p.d
w===$&&C.c()
p.jC(w.cNp(d-1000))
return}if(d>=2000&&d<2007){p.b27(d-2000)
return}if(d>=3000&&d<3007){p.b26(d-3000)
return}if(d>=6000&&d<6005){if(p.z==="sheet"){w=p.d
w===$&&C.c()
p.jC(w.cQb(B.a51[d-6000]))}return}if(d>=6100&&d<6103){t=B.ot[d-6100]
if(p.z==="paint"){w=p.d
w===$&&C.c()
p.jC(w.cVf(t))
return}}if(d>=6200&&d<6202){s=d-6200
switch(p.z){case"tape":w=p.d
w===$&&C.c()
p.jC(w.cY1(s))
return
case"mud":w=p.d
w===$&&C.c()
p.jC(w.cSX(s))
return
case"sand":w=p.d
w===$&&C.c()
p.jC(w.bnO(s))
return}}if(d>=7000&&d<7100){if(p.z==="screw"){w=p.d
w===$&&C.c()
v=d-7000
p.jC(w.bo1(D.o.ao(v,10),D.o.F(v,10)))}return}if(d>=7500&&d<7600){if(p.z==="screw"){w=p.d
w===$&&C.c()
v=d-7500
p.jC(w.aKL(D.o.ao(v,10),D.o.F(v,10),!0))}return}if(d===8000){w=p.d
w===$&&C.c()
p.jC(w.aJ2())
return}if(d>=8200&&d<8207){w=p.d
w===$&&C.c()
p.jC(w.bjT(d-8200))
return}if(d>=8100&&d<8107){w=p.d
w===$&&C.c()
r=w.CW.h(0,d-8100)
A:{if("tv"===r){w="The TV"
break A}if("lamp"===r){w="The lamp"
break A}if("toaster"===r){w="The toaster"
break A}w="The hair dryer"
break A}p.qB(w+" is plugged in. To pull the plug, go behind it (the Behind the TV button) and tap the plug on the wall.",!0)
return}if(p.z==="look"){w=p.r
w===$&&C.c()
q=w.b.h(0,d)
if(q!=null){p.m(new A.esu(p,d))
p.qB(q.a+": "+q.b,!0)}}},
b27(d){var w,v,u,t=this,s=t.d
s===$&&C.c()
if(s.at.aj(0,d)){s=t.z
s=s!=="tester"&&s!=="look"&&!D.d.t(B.I1,s)}else s=!1
if(s){t.m(new A.esq(t))
t.ZX(0,d)
return}s=t.z
switch(s){case"wall":case"ceiling":case"fanbox":w=t.d
t.jC(w.cSU(d,s==="fanbox"?"fan":s))
return
case"cable":t.jC(t.d.cW6(d))
return
case"knife":t.jC(t.d.cMk(d))
return
case"outlet":case"gfci":case"switch":case"split":case"v240four":case"v240three":case"v240only":case"isolated":case"switch2p":case"switch3":case"switch4":case"switchsmart":case"switchcombo":case"light":case"fan":v=t.d.bga(d,s)
t.jC(v)
if(v.a){s=t.d.at.h(0,d).b
w=t.d
s.f=!w.b&&!w.dx
t.z=""
t.ZX(0,d)}return
case"tester":t.aBW(d)
return}if(t.d.at.aj(0,d)){t.ZX(0,d)
return}if(t.d.gwF()&&t.d.x.aj(0,d)&&!t.d.at.aj(0,d)){t.qB("This box is empty. Pick what you want to put in (an outlet, a switch, a light or a fan) from the tray, then tap the box.",!0)
return}s=t.r
s===$&&C.c()
u=s.b.h(0,2000+d)
if(u!=null){t.m(new A.esr(t,d))
t.qB(u.a+": "+u.b,!0)}},
aBW(d){var w,v=this.d
v===$&&C.c()
w=v.ax&&!v.ay&&v.x.aj(0,d)&&this.d.z.t(0,d)
v=w?"The tester glows: this box is LIVE (120 volts). Turn the breaker OFF before you touch any wire.":"The tester stays dark: no power here. It is safe to work. (Test again after you turn the breaker off, every time.)"
this.qB(v,!w)
A.fV(w?1400:500,120,0.25,"tri")},
b26(d){var w,v=this,u=v.d
u===$&&C.c()
w=u.at.h(0,d)
if(w==null)return
if(D.d.t(B.I1,v.z)){v.jC(v.d.bid(d,v.z))
return}u=v.z
if(u==="tester"){v.aBW(d)
return}if(u==="flip"){if(D.d.t(B.jV,w.a)&&w.b.c>=2)v.jC(v.d.aFG(d))
else v.aej("Only a finished switch can be flipped.")
return}v.m(new A.esp(v))
v.ZX(0,d)},
b25(d,e){var w,v,u,t,s,r,q,p,o=this,n=o.d
n===$&&C.c()
w=n.at.h(0,d)
if(w==null)return
if(B.aPZ.t(0,e))return
n=w.a
v=A.t0(n)
u=v.f
t=C.T(u).k("Z<1>")
s=C.C(new C.Z(u,new A.esh(e),t),t.k("L.E"))
r=A.hvL(n,e)
n=r!=null
if(n){u=w.b
u=u.b.iI(0,r)&&u.c===0}else u=!1
if(u){o.jC(o.d.bjQ(d,r))
return}u=!1
if(s.length!==0){t=w.b
if(t.c===0){t=t.b
if(t.h(0,e)!=null)u=o.at.length===0||t.h(0,e)===o.at}}if(u){n=o.d
u=w.b.b.h(0,e)
u.toString
o.jC(n.bjQ(d,u))
o.m(new A.esi(o))
return}if(n){n=w.b
n=n.c===0&&!n.b.iI(0,r)&&D.d.b3(v.e,new A.esj(r))}else n=!1
if(n){o.m(new A.esk(o,r,d,e))
if(o.at.length!==0)o.qB(D.d.fW(v.e,new A.esl(r)).b+": picked up. Now tap where it joins.",!0)
return}if(s.length!==0&&w.b.c===0){n=o.at
if(n.length===0){o.aej("Pick a wire below first, then tap "+D.d.gI(s).b+".")
o.m(new A.esm(o,d,e))
return}q=o.d.bew(d,n,e)
o.jC(q)
if(q.a)o.m(new A.esn(o))
return}n=o.r
n===$&&C.c()
p=n.b.h(0,5000+d*100+e)
if(p!=null){o.m(new A.eso(o,d,e))
o.qB(p.a+": "+p.b,!0)}},
c84(){var w,v,u,t,s,r,q=this,p=C.a([],x.ek)
for(w=0;w<7;++w){v=B.uy[w]
u=q.d
u===$&&C.c()
t=v.a
s=u.at.aj(0,t)
r=q.z
A:{if("wall"===r){u=!v.c&&!q.d.x.aj(0,t)
break A}if("ceiling"===r||"fanbox"===r){u=v.c&&!q.d.x.aj(0,t)
break A}if("cable"===r){u=q.d.x.aj(0,t)&&!q.d.z.t(0,t)
break A}if("knife"===r){u=!v.c&&q.d.x.aj(0,t)
break A}u=D.d.t(B.lH,r)||D.d.t(B.jV,q.z)
if(u){u=!v.c&&q.d.x.aj(0,t)&&!s
break A}if("light"===r||"fan"===r){u=v.c&&q.d.x.aj(0,t)&&!s
break A}if("tv"===r||"lamp"===r||"toaster"===r||"hairdryer"===r){u=s&&D.d.t(B.lH,q.d.at.h(0,t).a)
break A}if("tester"===r){u=q.d.x.aj(0,t)
break A}u=!1
break A}if(u)p.push(new C.z(t,v.b))}return p},
cy1(){var w,v,u,t,s,r,q,p=null,o=this.c84()
if(o.length===0)return D.bJ
w=C.a([],x.p)
for(v=o.length,u=0;u<o.length;o.length===v||(0,C.M)(o),++u){t={}
s=o[u]
t.a=null
t.a=s.a
r=new C.aQ(12,12)
q=new C.ay(D.b2,1,D.r,-1)
w.push(C.aB(p,C.p(p,new C.y("\ud83d\udccd "+s.b,p,D.oD,p,p,p,p,p,p,p,p,p),D.f,p,p,new C.o(D.eW.j(0.35),p,new C.bK(q,q,q,q),new C.bj(r,r,r,r),p,p,D.n),p,p,p,p,B.ZY,p,p,p),D.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new A.esy(t,this),p,p,p,p,p,p,!1,D.a4))}return new C.D(D.hY,C.bW(D.bC,w,D.bq,p,6,6),p)},
bQa(){var w=null,v=this.c
v.toString
C.ci(w,w,!1,w,new A.erM(this),v,w,!0,!0,x.H)},
c7W(){var w=null,v=this.c
v.toString
C.ci(w,w,!0,w,new A.erJ(this),v,w,!0,!0,x.H)},
axx(d){this.m(new A.erQ(this,d))
this.aTT()},
aZL(){return this.axx(!1)},
c8_(){var w,v,u,t,s,r,q,p,o,n=this,m=n.d
m===$&&C.c()
if(m.w)return"The job is over."
switch(n.y){case 0:m=m.d
m===$&&C.c()
w=C.T(m).k("Z<1>")
v=C.C(new C.Z(m,new A.erR(n),w),w.k("L.E"))
if(v.length!==0){u=D.d.gI(v)
t=A.jY(u.a)
m=A.agJ(u.b)
if(t.c)w=t.e==="fan"?"fan box":"ceiling box"
else w="wall box"
return"Mount a box at "+t.b+" ("+m.toLowerCase()+" goes here): pick a "+w+", then tap the glowing spot."}m=n.d.d
m===$&&C.c()
w=C.T(m).k("Z<1>")
s=C.C(new C.Z(m,new A.erS(n),w),w.k("L.E"))
if(s.length!==0){t=D.d.gI(s).a
m=n.d.aLx(t)
r=new C.Z(m,new A.erT(n),C.T(m).k("Z<1>")).gL(0)
return r>0?"The cable comes from the panel on the right. Pick the drill and tap each stud on the way to "+A.jY(t).b+" ("+r+" left).":"Pick the cable roll and tap "+A.jY(t).b+"."}return"Rough-in done! Open 2 Drywall."
case 1:if(!m.gaIU())return"Finish the rough-in first (tab 1). Drywall hides the wires."
if(!n.d.gaDf())return"Pick a drywall sheet and tap a stud edge to hang it. Three sheets cover the wall."
if(!n.d.gaDe())return"Pick the drywall saw and tap each box to cut its opening."
if(!D.d.d5(B.ot,n.d.gaq3()))return"Pick the screw gun and put a screw in every glowing spot on the studs."
if(D.d.b3(n.d.as,new A.erW()))return"Pick the tape and tap each seam between two sheets."
if(D.d.b3(n.d.as,new A.erX()))return D.d.b3(n.d.as,new A.erY())?'The mud is wet. Press "Let it dry", then the next coat.':"Pick the mud and tap each seam. It needs three coats, with drying in between."
if(D.d.b3(n.d.as,new A.erZ()))return D.d.b3(n.d.as,new A.es_())?'Press "Let it dry", then sand.':"Pick the sander and tap each seam."
if(!n.d.gwF())return"Pick the roller and paint each sheet."
return"Drywall done! Open 3 Devices."
default:if(!m.gwF())return"Finish the drywall first (tab 2)."
m=n.d.d
m===$&&C.c()
w=C.T(m).k("Z<1>")
q=C.C(new C.Z(m,new A.es0(n),w),w.k("L.E"))
if(q.length!==0){u=D.d.gI(q)
return"The breaker being on is not the end: the job is done only when every device is in and wired. Tap the blue square at "+A.jY(u.a).b+" to put in the "+A.agJ(u.b).toLowerCase()+". ("+C.w(new A.es3().$1(new C.N(q,new A.es1(),C.T(q).k("N<1,H>"))))+" still need a device.)"}m=n.d.d
m===$&&C.c()
w=C.T(m).k("Z<1>")
p=C.C(new C.Z(m,new A.es2(n),w),w.k("L.E"))
if(p.length!==0)return"Tap "+A.jY(D.d.gI(p).a).b+" to work on it: breaker OFF, wires, push in, cover on."
m=n.d
if(!m.ax)return"Turn the breaker ON (tap the panel or the breaker button) and test."
m=m.d
m===$&&C.c()
w=C.T(m).k("Z<1>")
o=C.C(new C.Z(m,new A.erU(n),w),w.k("L.E"))
if(o.length!==0)return"Pick the TV or the lamp and plug it into "+A.jY(D.d.gI(o).a).b+" to test it."
m=n.d.d
m===$&&C.c()
return"Flip the wall switch to test the "+(D.d.b3(m,new A.erV())?"fan":"light")+"."}},
B(a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this,a2=null,a3=B.dqo[a1.y],a4=a1.Q
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
for(l=0;l<3;++l)m.push(new C.D(D.N7,new C.y(l<a1.d.e?"\u2764\ufe0f":"\ud83d\udda4",a2,D.Ah,a2,a2,a2,a2,a2,a2,a2,a2,a2),a2))
m.push(D.bo)
k=a1.d
if(k.ay)k=D.kd
else{k=k.ax
k=k?D.ej:D.e_}k=k.j(0.95)
j=C.m(16)
i=a1.d
h=i.ay
if(h)g=D.cR
else{g=i.ax
g=g?D.cs:D.bj}g=C.J(g,D.r,1.4)
if(h)i="TRIPPED: tap to reset"
else{i=i.ax
i=i?"Breaker ON":"Breaker OFF"}m.push(C.aB(a2,C.p(a2,C.d(i,a2,a2,a2,a2,a2,a2,B.fkI,a2,a2,a2),D.f,a2,a2,new C.o(k,a2,g,j,a2,a2,D.n),a2,a2,a2,a2,D.rm,a2,a2,a2),D.y,!1,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,new A.esG(a1),a2,a2,a2,a2,a2,a2,!1,D.a4))
m=C.a([C.B(m,D.m,a2,D.e,D.Q,0,a2,a2)],n)
k=a1.ch
j=k?"In front":"Behind the wall"
i=k?G.anv:G.anu
k=C.a([A.wR(j,D.bw,i,k,k?a1.gbRI():a1.gbDI()),D.am,A.wR("Look up",D.b2,B.bNm,!1,a1.gc2w()),D.am,A.wR("Behind the TV",D.cR,W.a25,!1,a1.gbDK()),D.am],n)
if(!a4){j=v.b
D.d.v(k,C.a([A.wR("Labels",D.aQ,N.Cf,j.f,new A.esH(a1,v)),D.am,A.wR("Hints",D.aC,D.ru,j.e,new A.esI(a1,v)),D.O],n))}s=A.Y3(!1,a2,a1.f,new A.esS(a1),a2,p,r,o,a2,a2,q,a2,a1.gc7X(),new A.esT(a1),a1.gc80(),s,!1,a2,m,k)
r=C.a([],n)
if(a4){a4=C.a([],n)
for(l=0;l<3;++l){q=l<2?6:0
p=a1.y===l?D.aC.j(0.2):D.ds
o=new C.aQ(12,12)
f=new C.ay(a1.y===l?D.aC:D.bz,1,D.r,-1)
if(l===0)m=a1.d.gaIU()
else{m=a1.d
m=l===1?m.gwF():m.gbdP()}m=m?"\u2705 ":""
k=B.doA[l]
j=a1.y===l?D.aC:D.ad
a4.push(new C.bA(1,D.bc,C.aB(a2,C.p(a2,new C.cg(D.A,a2,a2,new C.y(m+k,a2,new C.F(!0,j,a2,a2,a2,a2,12,D.u,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2),a2,a2,a2,a2,a2,a2,a2,a2,a2),a2),D.f,a2,a2,new C.o(p,a2,new C.bK(f,f,f,f),new C.bj(o,o,o,o),a2,a2,D.n),a2,a2,a2,new C.Q(0,0,q,0),A2.Na,a2,a2,a2),D.y,!1,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,new A.esU(a1,l),a2,a2,a2,a2,a2,a2,!1,D.a4),a2))}a4=C.a([C.B(a4,D.m,a2,D.e,D.i,0,a2,a2),D.am],n)
if(!a1.d.b){q=D.aQ.j(0.1)
p=C.m(10)
o=C.J(D.aQ.j(0.4),D.r,1)
a4.push(C.p(a2,C.d("\ud83d\udc49 "+a1.c8_(),a2,2,D.a1,a2,a2,a2,B.fmh,a2,a2,a2),D.f,a2,a2,new C.o(q,a2,o,p,a2,a2,D.n),a2,a2,a2,a2,D.cm,a2,a2,1/0))}else a4.push(B.fEY)
a4.push(D.am)
q=C.a([],n)
if(a1.y<2&&!a1.d.gwF())q.push(new C.D(E.tY,C.aB(a2,C.p(a2,B.b8X,D.f,a2,a2,new C.o(D.dI,a2,a2,C.m(14),a2,a2,D.n),a2,a2,a2,a2,D.fj,a2,a2,a2),D.y,!1,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,new A.esV(a1),a2,a2,a2,a2,a2,a2,!1,D.a4),a2))
for(p=a3.length,e=0;e<p;++e){d=a3[e]
o=d.a
m=a1.z===o?D.aC.j(0.25):D.c.j(0.07)
k=new C.aQ(14,14)
o=a1.z===o
j=o?D.aC:D.aZ
f=new C.ay(j,o?2:1,D.r,-1)
j=o?D.aC:D.ad
j=C.X(d.c,j,a2,a2,a2,19)
o=o?D.aC:D.c
q.push(new C.D(E.tY,C.aB(a2,C.p(a2,new C.cd(D.aM,D.e,D.i,D.m,a2,D.p,a2,0,C.a([j,D.bo,new C.y(d.b,a2,new C.F(!0,o,a2,a2,a2,a2,12.5,D.H,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2),a2,a2,a2,a2,a2,a2,a2,a2,a2)],n),a2),D.f,a2,a2,new C.o(m,a2,new C.bK(f,f,f,f),new C.bj(k,k,k,k),a2,a2,D.n),a2,a2,a2,a2,D.fj,a2,a2,a2),D.y,!1,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,new A.esW(a1,d),a2,a2,a2,a2,a2,a2,!1,D.a4),a2))}if(a1.y===1)q.push(new C.D(E.tY,C.aB(a2,C.p(a2,B.b8P,D.f,a2,a2,new C.o(D.e_,a2,a2,C.m(14),a2,a2,D.n),a2,a2,a2,a2,D.fj,a2,a2,a2),D.y,!1,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,new A.esX(a1),a2,a2,a2,a2,a2,a2,!1,D.a4),a2))
a4.push(new C.a7(a2,52,C.cr(q,a2,a2,a2,a2,D.aM,!1),a2))
if(a1.z.length!==0)a4.push(a1.cy1())
D.d.v(r,a4)}else{a4=C.a([],n)
q=v.b
if(q.c===0)for(p=D.d.gaf(u.e),o=new C.f5(p,new A.esY(v)),m=q.b;o.C();){k=p.gR(0)
j=k.c
i=new C.aQ(14,14)
h=a1.at
g=k.a
h=h===g
a0=h?D.b2:D.aZ
f=new C.ay(a0,h?3:1,D.r,-1)
a0=C.a([],n)
if(m.iI(0,g))a0.push(new C.D(D.N8,C.X(D.ed,k.d,a2,a2,a2,17),a2))
h=k.b
g=k.d
a0.push(new C.y(h,a2,new C.F(!0,g,a2,a2,a2,a2,12.5,D.u,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2),a2,a2,a2,a2,a2,a2,a2,a2,a2))
a4.push(C.aB(a2,C.p(a2,new C.cd(D.aM,D.e,D.Q,D.m,a2,D.p,a2,0,a0,a2),D.f,a2,a2,new C.o(j,a2,new C.bK(f,f,f,f),new C.bj(i,i,i,i),a2,a2,D.n),a2,a2,a2,a2,D.ya,a2,a2,a2),D.y,!1,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,new A.esZ(a1,v,k),a2,a2,a2,a2,a2,a2,!1,D.a4))}a4=C.a([C.bW(D.bC,a4,D.bq,a2,6,8)],n)
if(q.c===0&&a1.at.length!==0){p=C.a([],n)
for(o=D.d.gaf(u.f),m=new C.f5(o,new A.esJ(v));m.C();){k=o.gR(0)
j=D.eW.j(0.35)
i=new C.aQ(12,12)
f=new C.ay(D.b2,1,D.r,-1)
p.push(C.aB(a2,C.p(a2,new C.y("\u279c "+k.b,a2,D.oD,a2,a2,a2,a2,a2,a2,a2,a2,a2),D.f,a2,a2,new C.o(j,a2,new C.bK(f,f,f,f),new C.bj(i,i,i,i),a2,a2,D.n),a2,a2,a2,a2,B.ZY,a2,a2,a2),D.y,!1,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,new A.esK(a1,k),a2,a2,a2,a2,a2,a2,!1,D.a4))}a4.push(new C.D(D.jy,C.bW(D.bC,p,D.bq,a2,6,6),a2))}a4.push(D.O)
p=C.a([A.ua("Back to the room",D.l6,a1.gc7Z(),D.ad),D.ac],n)
if(q.c===0){u.toString
o=A.bEF(u,q)?"Push it into the box":"Fasten every wire"
p.push(A.ua(o,B.aoB,A.bEF(u,q)?new A.esL(a1):a2,D.aC))}if(q.c===1)D.d.v(p,C.a([A.ua("Pull it out",D.rz,new A.esM(a1),D.ad),D.ac,A.ua("Cover on",Z.wa,new A.esN(a1),D.aC)],n))
o=q.c>=2
if(o&&q.w)p.push(A.ua("Take out the burnt one",B.ann,new A.esO(a1),D.cs))
else if(o)p.push(A.ua("Pull it out of the wall",B.ann,new A.esP(a1),D.ad))
a4.push(C.B(p,D.m,a2,D.e,D.i,0,a2,a2))
if(!q.w)D.d.v(a4,C.a([D.O,C.B(C.a([A.ua("Take it out and put in a different "+(D.d.t(B.jV,v.a)?"switch":"one"),D.ki,new A.esQ(a1,v),D.aQ)],n),D.m,a2,D.e,D.i,0,a2,a2)],n))
D.d.v(r,a4)}a4=C.a([A.TY(D.aC,new A.esR(a1,a5),C.x(r,D.m,a2,D.e,D.Q,0,D.p),s,"Phase "+(w+1)+"/3",t+" job",a2)],n)
if(a1.CW)a4.push(C.bT(0,C.e0(C.p(a2,a2,D.f,B.ahS,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2),!0,a2),0,0,0))
return new C.an(D.a_,a2,D.ab,D.t,a4,a2)},
crC(d){var w=this.d
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
break A}this.qB(w,!0)},
cgK(d){return C.bU(E.lw,null,new A.esg(this,d),d,!0,!0,!0,D.k1,!1,!1,x.H)}}
A.rH.prototype={}
A.rf.prototype={
a5(){return"FaultKind."+this.b}}
A.uu.prototype={}
A.Ms.prototype={}
A.cvb.prototype={
bzJ(d,e,f){var w,v,u,t,s,r,q,p=this,o=new C.e9()
o.d3(p.a)
w=C.C(B.ddr,x.eP)
D.d.dZ(w,o)
v=C.aY(x.S)
u=C.a([],x.gw)
for(t=w.length,s=0;s<w.length;w.length===t||(0,C.M)(w),++s){r=w[s]
q=B.wz.h(0,r).e
if(v.t(0,q))continue
v.M(0,q)
u.push(new A.Ms(r,o.au(3)))
if(u.length>=d)break}p.c!==$&&C.aP()
p.c=u
p.axy()},
pX(d,e){var w=this.c
w===$&&C.c()
return D.d.b3(w,new A.cvg(e))},
axy(){var w,v,u,t,s=this,r=s.d,q=r.d
q.a9(0)
if(s.pX(0,B.a0k))q.M(0,72)
if(s.pX(0,B.a0l))q.M(0,75)
q=s.pX(0,B.NO)
r.b=q
r.c=!q
r.w=s.pX(0,B.NP)
r.x=s.pX(0,B.a0p)
r.y=s.pX(0,B.a0q)
r.z=s.pX(0,B.a0o)
r.Q=s.pX(0,B.a0r)
r.as=s.pX(0,B.a0s)
r.at=s.pX(0,B.a0n)
q=r.f
q.a9(0)
r=r.r
r.a9(0)
w=s.c
w===$&&C.c()
w=D.d.gaf(w)
v=new C.f5(w,new A.cvc())
while(v.C()){u=w.gR(0)
t=u.c
u=u.b
if(t)r.M(0,u)
else q.M(0,u)}},
gcH2(){var w=this.c
w===$&&C.c()
return D.d.d5(w,new A.cve())},
gcOy(){var w=this.c
w===$&&C.c()
return new C.Z(w,new A.cvf(),C.T(w).k("Z<1>")).gL(0)},
cOc(d){var w,v,u,t,s,r,q,p=this.c
p===$&&C.c()
w=p.length
v=d===86
u=d===92
t=0
for(;t<p.length;p.length===w||(0,C.M)(p),++t){s=p[t]
r=s.a
q=!0
if(B.wz.h(0,r).e!==d)if(!(r===B.NO&&v))r=r===B.NP&&u
else r=q
else r=q
if(r)return s}return null},
aZM(d){++this.f
return new A.eB(!1,d,!1,"")},
c85(){var w,v,u,t,s=this;++s.r;--s.e
for(w=s.d,v=w.d,w=w.e,u=0;u<4;++u){t=B.awU[u]
if(!v.t(0,t))w.M(0,t)}w=s.e
if(w<=0){s.w=!0
return B.aZ3}v=w===1?"life":"lives"
return new A.eB(!1,"ZAP! You touched a live wire and got a shock. All the breakers were knocked off. "+w+" "+v+" left. Turn the breaker OFF first.",!0,"shock")},
cYQ(d,e){var w,v,u,t,s=this
if(s.w)return B.aYZ
if(D.d.t(B.awU,e))return s.bEe(d,e)
w=s.cOc(e)
if(d==="inspect"){if(w==null||w.c)return B.aZ2
return new A.eB(!0,"You look and test: "+B.wz.h(0,w.a).b,!1,"")}if(w==null||w.c)return new A.eB(!1,s.b?"Nothing needs fixing there.":"There is nothing wrong with this, so the "+C.w(B.S4.h(0,d))+' is not needed. Use "Look and test" on things to find the problem.',!1,"")
v=B.wz.h(0,w.a)
if(d!==v.c){++s.f
return new A.eB(!1,s.b?"That is not the right tool for this problem.":"The "+C.w(B.S4.h(0,d))+" does not fix this. "+v.b,!1,"")}u=v.f
if(u!==0){t=s.d
u=!t.d.t(0,u)&&!t.e.t(0,u)}else u=!1
if(u){if(s.b)return s.c85()
return s.aZM("STOP! "+v.r+" The wires here are live (120 volts). Tap the breaker in the panel (with your hand) to switch it off.")}w.c=!0
s.axy()
return new A.eB(!0,v.d,!1,"")},
bEe(d,e){var w,v,u,t,s=this
if(d==="inspect"){w=s.d
if(w.d.t(0,e))w="This breaker has tripped: it sits in the middle (orange)."
else w=w.e.t(0,e)?"This breaker is switched OFF.":"This breaker is ON."
return new A.eB(!0,w,!1,"")}if(d!=="hand")return s.aZM(s.b?"Use your hand on a breaker.":"A breaker is switched with your hand, not with a "+C.w(B.S4.h(0,d))+".")
w=s.d
v=w.d
if(v.t(0,e)){w=s.c
w===$&&C.c()
u=C.T(w).k("Z<1>")
t=C.C(new C.Z(w,new A.cvd(e),u),u.k("L.E"))
if(t.length!==0){D.d.gI(t).c=!0
s.axy()
return new A.eB(!0,B.wz.h(0,D.d.gI(t).a).d,!1,"")}v.W(0,e)
return B.aZx}w=w.e
if(w.t(0,e)){w.W(0,e)
return B.aZr}w.M(0,e)
return B.aZh}}
A.arH.prototype={
T(){var w,v=new A.xd(-0.3,0.48,46,B.Vl,$.aw())
v.f=80
w=new C.wo()
$.x1()
w.h2(0)
return new A.aF0(v,w)}}
A.aF0.prototype={
gJ(){var w=this.d
w===$&&C.c()
return w},
gCU(d){var w=this.e
if(w===$){this.a.toString
w=D.o.F(Date.now(),1e5)
this.e=w}return w},
Z(){var w,v=this
v.a2()
w=v.gCU(0)
v.a.toString
w=A.hiV(!1,w)
v.d=w
v.r=A.agA(w.d)},
q(){var w=this.ax
if(w!=null)w.a4(0)
this.a1()},
c8a(d,e){var w=this,v=w.ax
if(v!=null)v.a4(0)
w.m(new A.eul(w,d,e))
w.ax=C.cK(D.jv,new A.eum(w))},
aZN(){this.f.hQ(46,0.48,B.Vl,-0.3)
this.m(new A.eua(this))},
c89(d){var w,v,u=this
if(d===0)return
w=u.d
w===$&&C.c()
v=w.cYQ(u.x,d)
w=v.a
if(w)A.yI()
else A.fV(180,220,0.25,"square")
if(v.d==="shock"){C.fJ()
u.m(new A.euf(u))
C.bP(D.mD,new A.eug(u),x.P)}u.m(new A.euh(u,d))
w=w&&!v.c
u.c8a(v.b,w)
w=u.d
if(w.w)$.aV.x1$.push(new A.eui(u))
else if(w.gcH2()&&!u.at){u.at=!0
$.aV.x1$.push(new A.euj(u))}},
cgS(){var w=null,v=this.c
v.toString
C.ci(w,w,!1,w,new A.eud(this),v,w,!0,!0,x.H)},
c86(){var w=null,v=this.c
v.toString
C.ci(w,w,!0,w,new A.eu9(this),v,w,!0,!0,x.H)},
awW(){this.m(new A.eub(this))
this.aZN()},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.d
g===$&&C.c()
g=g.gcOy()
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
for(o=0;o<3;++o)p.push(new C.D(D.N7,new C.y(o<i.d.e?"\u2764\ufe0f":"\ud83d\udda4",h,D.Ah,h,h,h,h,h,h,h,h,h),h))
v=A.Y3(!1,h,i.f,new A.eut(i),h,s,u,r,h,new A.euu(),t,h,h,i.gc87(),i.gc88(),v,!1,h,C.a([C.B(p,D.m,h,D.e,D.Q,0,h,h)],q),h)
u=i.d.c
u===$&&C.c()
t=C.T(u)
t=new C.cQ(new C.Z(u,new A.euv(),t.k("Z<1>")),new A.euw(),t.k("cQ<1,n>")).aH(0,"  \xb7  ")
u=C.d("Customer: "+(t.length===0?"All fixed!":t),h,2,D.a1,h,h,h,B.aSp,h,h,h)
t=C.a([],q)
for(n=0;n<10;++n){m=B.dsZ[n]
s=i.x===m?D.aC.j(0.25):D.c.j(0.07)
r=new C.aQ(14,14)
p=i.x===m
l=p?D.aC:D.aZ
k=new C.ay(l,p?2:1,D.r,-1)
l=B.dyN.h(0,m)
p=C.X(l,i.x===m?D.aC:D.ad,h,h,h,19)
l=B.S4.h(0,m)
l.toString
j=i.x===m?D.aC:D.c
t.push(new C.D(E.tY,C.aB(h,C.p(h,new C.cd(D.aM,D.e,D.i,D.m,h,D.p,h,0,C.a([p,D.bo,new C.y(l,h,new C.F(!0,j,h,h,h,h,12.5,D.H,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h),h,h,h,h,h,h,h,h,h)],q),h),D.f,h,h,new C.o(s,h,new C.bK(k,k,k,k),new C.bj(r,r,r,r),h,h,D.n),h,h,h,h,D.fj,h,h,h),D.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new A.eux(i,m),h,h,h,h,h,h,!1,D.a4),h))}g=C.a([A.TY(D.aQ,new A.euy(i,d),C.x(C.a([new C.bM(D.a5,h,h,u,h),D.O,new C.a7(h,52,C.cr(t,h,h,h,h,D.aM,!1),h)],q),D.m,h,D.e,D.Q,0,D.p),v,""+g+"/"+w+" fixed","Service call",h)],q)
if(i.as)g.push(C.bT(0,C.e0(C.p(h,h,D.f,B.ahS,h,h,h,h,h,h,h,h,h,h),!0,h),0,0,0))
return new C.an(D.a_,h,D.ab,D.t,g,h)},
cBA(d){return C.bU(E.lw,null,new A.eur(this),d,!0,!0,!0,D.k1,!1,!1,x.H)},
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
$8$code$collaboratorEmails$isPrivate$localRole$members$name$ownerEmail$visibleChildrenPerParent(d,e,f,g,h,i,j,k){return this.gJ().$8$code$collaboratorEmails$isPrivate$localRole$members$name$ownerEmail$visibleChildrenPerParent(d,e,f,g,h,i,j,k)},
$3$allowedExtensions$type$withData(d,e,f){return this.gJ().$3$allowedExtensions$type$withData(d,e,f)},
$1$ownerEmail(d){return this.gJ().$1$ownerEmail(d)},
$3$cancelOnError$onError(d,e,f){return this.gJ().$3$cancelOnError$onError(d,e,f)},
$6$availableCameras$cameraDirection$isInitialized$isRunning$size$torchState(d,e,f,g,h,i){return this.gJ().$6$availableCameras$cameraDirection$isInitialized$isRunning$size$torchState(d,e,f,g,h,i)},
$7$cameraDirection$error$isInitialized$isRunning$size$torchState$zoomScale(d,e,f,g,h,i,j){return this.gJ().$7$cameraDirection$error$isInitialized$isRunning$size$torchState$zoomScale(d,e,f,g,h,i,j)},
$3$cancelOnError$onDone(d,e,f){return this.gJ().$3$cancelOnError$onDone(d,e,f)},
$1$zoomScale(d){return this.gJ().$1$zoomScale(d)},
$1$torchState(d){return this.gJ().$1$torchState(d)},
$1$visibleChildrenPerParent(d){return this.gJ().$1$visibleChildrenPerParent(d)},
$2$padding$viewPadding(d,e){return this.gJ().$2$padding$viewPadding(d,e)},
$2$isClosing(d,e){return this.gJ().$2$isClosing(d,e)},
$6$tag(d,e,f,g,h,i){return this.gJ().$6$tag(d,e,f,g,h,i)},
$1$games(d){return this.gJ().$1$games(d)},
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
$4$autofocus$child$focusNode$mouseCursor(d,e,f,g){return this.gJ().$4$autofocus$child$focusNode$mouseCursor(d,e,f,g)},
$1$task(d){return this.gJ().$1$task(d)},
$1$oldWidget(d){return this.gJ().$1$oldWidget(d)},
$2$defaultColor(d,e){return this.gJ().$2$defaultColor(d,e)},
$2$child$context(d,e){return this.gJ().$2$child$context(d,e)},
$1$contentPadding(d){return this.gJ().$1$contentPadding(d)},
$2$body$title(d,e){return this.gJ().$2$body$title(d,e)},
$1$chapters(d){return this.gJ().$1$chapters(d)},
$1$picture(d){return this.gJ().$1$picture(d)},
$1$photo(d){return this.gJ().$1$photo(d)},
$3$composing$selection$text(d,e,f){return this.gJ().$3$composing$selection$text(d,e,f)},
$1$scrollbars(d){return this.gJ().$1$scrollbars(d)},
$3$rect(d,e,f){return this.gJ().$3$rect(d,e,f)},
$2$hitTest$paintTransform(d,e){return this.gJ().$2$hitTest$paintTransform(d,e)},
$3$crossAxisPosition$mainAxisPosition(d,e,f){return this.gJ().$3$crossAxisPosition$mainAxisPosition(d,e,f)},
$3$parentUsesSize(d,e,f){return this.gJ().$3$parentUsesSize(d,e,f)},
$1$inherited(d){return this.gJ().$1$inherited(d)},
$6$font$fontBold$fontBoldItalic$fontFallback$fontItalic$fontNormal(d,e,f,g,h,i){return this.gJ().$6$font$fontBold$fontBoldItalic$fontFallback$fontItalic$fontNormal(d,e,f,g,h,i)},
$1$lineSpacing(d){return this.gJ().$1$lineSpacing(d)},
$1$fontSize(d){return this.gJ().$1$fontSize(d)},
$2$fontSize$fontWeight(d,e){return this.gJ().$2$fontSize$fontWeight(d,e)},
$2$letterSpacing(d,e){return this.gJ().$2$letterSpacing(d,e)},
$5$font$fontBold$fontBoldItalic$fontItalic$fontNormal(d,e,f,g,h){return this.gJ().$5$font$fontBold$fontBoldItalic$fontItalic$fontNormal(d,e,f,g,h)},
$4$annotation$baseline$style$text(d,e,f,g){return this.gJ().$4$annotation$baseline$style$text(d,e,f,g)},
$3$format$noAnimation$numChannels(d,e,f){return this.gJ().$3$format$noAnimation$numChannels(d,e,f)},
$6(d,e,f,g,h,i){return this.gJ().$6(d,e,f,g,h,i)},
$1$noPixels(d){return this.gJ().$1$noPixels(d)},
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
$5$fileNameOverrides$sharePositionOrigin$subject$text(d,e,f,g,h){return this.gJ().$5$fileNameOverrides$sharePositionOrigin$subject$text(d,e,f,g,h)},
$3$onTap$selected(d,e,f){return this.gJ().$3$onTap$selected(d,e,f)},
$1$period(d){return this.gJ().$1$period(d)},
$4$activeTrackColor$inactiveTrackColor$thumbColor$trackHeight(d,e,f,g){return this.gJ().$4$activeTrackColor$inactiveTrackColor$thumbColor$trackHeight(d,e,f,g)},
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
$3$blur(d,e,f){return this.gJ().$3$blur(d,e,f)},
$4$blur$shift(d,e,f,g){return this.gJ().$4$blur$shift(d,e,f,g)},
$4$vol(d,e,f,g){return this.gJ().$4$vol(d,e,f,g)},
$4$sweep(d,e,f,g){return this.gJ().$4$sweep(d,e,f,g)},
$4$iconOnly(d,e,f,g){return this.gJ().$4$iconOnly(d,e,f,g)},
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
$7$caps$shine$sides(d,e,f,g,h,i,j){return this.gJ().$7$caps$shine$sides(d,e,f,g,h,i,j)},
$6$shine(d,e,f,g,h,i){return this.gJ().$6$shine(d,e,f,g,h,i)},
$7$endCaps$joints$shine$sides(d,e,f,g,h,i,j){return this.gJ().$7$endCaps$joints$shine$sides(d,e,f,g,h,i,j)},
$5$sides(d,e,f,g,h){return this.gJ().$5$sides(d,e,f,g,h)},
$6$taped(d,e,f,g,h,i){return this.gJ().$6$taped(d,e,f,g,h,i)},
$4$color(d,e,f,g){return this.gJ().$4$color(d,e,f,g)},
$5$shine$yaw(d,e,f,g,h){return this.gJ().$5$shine$yaw(d,e,f,g,h)},
$6$caps$sides(d,e,f,g,h,i){return this.gJ().$6$caps$sides(d,e,f,g,h,i)},
$5$lat$lon(d,e,f,g,h){return this.gJ().$5$lat$lon(d,e,f,g,h)},
$5$shine$sides(d,e,f,g,h){return this.gJ().$5$shine$sides(d,e,f,g,h)},
$6$r1$sides(d,e,f,g,h,i){return this.gJ().$6$r1$sides(d,e,f,g,h,i)},
$7$normal$shine(d,e,f,g,h,i,j){return this.gJ().$7$normal$shine(d,e,f,g,h,i,j)},
$6$normal(d,e,f,g,h,i){return this.gJ().$6$normal(d,e,f,g,h,i)},
$5$poster(d,e,f,g,h){return this.gJ().$5$poster(d,e,f,g,h)},
$4$w(d,e,f,g){return this.gJ().$4$w(d,e,f,g)},
$3$r(d,e,f){return this.gJ().$3$r(d,e,f)},
$6$ends$shine$split(d,e,f,g,h,i){return this.gJ().$6$ends$shine$split(d,e,f,g,h,i)},
$4$round(d,e,f,g){return this.gJ().$4$round(d,e,f,g)},
$5$col$round(d,e,f,g,h){return this.gJ().$5$col$round(d,e,f,g,h)},
$4$col(d,e,f,g){return this.gJ().$4$col(d,e,f,g)},
$4$yaw(d,e,f,g){return this.gJ().$4$yaw(d,e,f,g)},
$1$dist(d){return this.gJ().$1$dist(d)},
$1$target(d){return this.gJ().$1$target(d)},
$3$col(d,e,f){return this.gJ().$3$col(d,e,f)},
$3$dist$pitch$target(d,e,f){return this.gJ().$3$dist$pitch$target(d,e,f)},
$1$pixelRatio(d){return this.gJ().$1$pixelRatio(d)},
$2$format$numChannels(d,e){return this.gJ().$2$format$numChannels(d,e)},
$2$alpha$numChannels(d,e){return this.gJ().$2$alpha$numChannels(d,e)},
$3$padding$size$viewPadding(d,e,f){return this.gJ().$3$padding$size$viewPadding(d,e,f)},
$5$primary(d,e,f,g,h){return this.gJ().$5$primary(d,e,f,g,h)},
$3$note(d,e,f){return this.gJ().$3$note(d,e,f)},
$1$speed(d){return this.gJ().$1$speed(d)},
$7$note(d,e,f,g,h,i,j){return this.gJ().$7$note(d,e,f,g,h,i,j)},
$6$joint(d,e,f,g,h,i){return this.gJ().$6$joint(d,e,f,g,h,i)},
$7$caps$r1$sides(d,e,f,g,h,i,j){return this.gJ().$7$caps$r1$sides(d,e,f,g,h,i,j)},
$7$about$avatar$glow$onAnswer$onDecline$onLater$who(d,e,f,g,h,i,j){return this.gJ().$7$about$avatar$glow$onAnswer$onDecline$onLater$who(d,e,f,g,h,i,j)},
$6$about$avatar$glow$onAnswer$onDecline$who(d,e,f,g,h,i){return this.gJ().$6$about$avatar$glow$onAnswer$onDecline$who(d,e,f,g,h,i)},
$3$on(d,e,f){return this.gJ().$3$on(d,e,f)},
$2$mine(d,e){return this.gJ().$2$mine(d,e)},
$5$big(d,e,f,g,h){return this.gJ().$5$big(d,e,f,g,h)},
$6$px(d,e,f,g,h,i){return this.gJ().$6$px(d,e,f,g,h,i)},
$5$w(d,e,f,g,h){return this.gJ().$5$w(d,e,f,g,h)},
$6$lines$w(d,e,f,g,h,i){return this.gJ().$6$lines$w(d,e,f,g,h,i)},
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
$4$col$on(d,e,f,g){return this.gJ().$4$col$on(d,e,f,g)},
$5$max$min(d,e,f,g,h){return this.gJ().$5$max$min(d,e,f,g,h)},
$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){return this.gJ().$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r)},
$2$f$r(d,e){return this.gJ().$2$f$r(d,e)},
$1$radius(d){return this.gJ().$1$radius(d)},
$4$gender$phone(d,e,f,g){return this.gJ().$4$gender$phone(d,e,f,g)},
$3$hint$prefix(d,e,f){return this.gJ().$3$hint$prefix(d,e,f)},
$3$helperText$prefixText(d,e,f){return this.gJ().$3$helperText$prefixText(d,e,f)},
$1$verifyUrls(d){return this.gJ().$1$verifyUrls(d)},
$2$wrapWidth(d,e){return this.gJ().$2$wrapWidth(d,e)}}
A.y0.prototype={
giP(d){return this.x}}
A.tH.prototype={}
A.a9U.prototype={}
A.i8.prototype={
aGl(d,e,f){var w=this
return d>w.a-f&&d<w.b+f&&e>w.c-f&&e<w.d+f}}
A.crK.prototype={
c8b(d){return-this.a.gex(0)/2+d*4},
a55(d,e){var w,v,u=this.a
if(d<-u.gex(0)/2+6||d>u.gex(0)/2-6||e<6||e>u.gho(0)-6)return!1
for(u=this.b,w=u.length,v=0;v<w;++v)if(u[v].aGl(d,e,9))return!1
return!0},
aZP(d,e,f){var w,v,u=e.a,t=f.a-u,s=e.b,r=f.b-s,q=Math.max(1,D.k.dg(Math.sqrt(Math.pow(t,2)+Math.pow(r,2))/2))
for(w=0;w<=q;++w){v=w/q
if(!this.a55(u+t*v,s+r*v))return!1}return!0},
aYr(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=a0.a,f=h.a,e=D.k.V((g+f.gex(0)/2)/4),d=h.c
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
if(!h.a55(-f.gex(0)/2+k,j))continue
i=Math.pow(-f.gex(0)/2+k-g,2)+Math.pow(j-e,2)
if(i<o){p=new C.z(n,l)
o=i}}if(p!=null)return p}return null},
aoF(b9,c0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5=this,b6=1e9,b7=b5.aYr(b9),b8=b5.aYr(c0)
if(b7==null||b8==null)return C.a([b9,c0],x.f)
w=b8.a
v=b5.c8b(w)
u=b8.b
t=new C.z(v,u*4)
if(b5.aZP(0,b9,t))return C.a([b9,t],x.f)
v=b7.a
s=b5.d
s===$&&C.c()
r=b7.b
q=x.S
p=C.eC([v*s+r],q)
o=C.U(q,q)
n=x.i
m=C.G([v*s+r,0],q,n)
l=C.G([v*s+r,b5.bTP(v,r,b8)],q,n)
k=w*s+u
v=b5.a
r=p.$ti
q=r.k("ml<1>")
r=r.c
i=0
for(;;){if(p.a!==0){h=i+1
n=i<6000
i=h}else n=!1
if(!n){j=!1
break}g=p.e
if(g==null)C.b8(C.bd("No elements"))
f=g.a
for(n=new C.ml(p,p.r,q),n.c=g;n.C();){e=n.d
d=e==null?r.a(e):e
e=l.h(0,d)
if(e==null)e=b6
a0=l.h(0,f)
if(e<(a0==null?b6:a0))f=d}if(f===k){j=!0
break}p.W(0,f)
a1=D.o.eb(f,s)
a2=D.o.F(f,s)
for(n=a2*4,e=a1*4,a3=-1;a3<=1;++a3)for(a0=a3===0,a4=!a0,a5=a1+a3,a6=a5*4,a7=a5-w,a8=-1;a8<=1;++a8){if(a0&&a8===0)continue
a9=a2+a8
b0=!0
if(a5>=0)if(a9>=0){b0=b5.c
b0===$&&C.c()
b0=a5>=b0||a9>=s||!b5.a55(-v.gex(0)/2+a6,a9*4)}if(b0)continue
b0=!1
if(a4)if(a8!==0)b0=!b5.a55(-v.gex(0)/2+a6,n)||!b5.a55(-v.gex(0)/2+e,a9*4)
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
while(o.aj(0,D.d.gak(b3))){w=o.h(0,D.d.gak(b3))
w.toString
b3.push(w)}w=x.f
u=C.a([b9],w)
for(r=x.c5,q=new C.dw(b3,r),q=new C.bR(q,q.gL(0),r.k("bR<ak.E>")),r=r.k("ak.E");q.C();){n=q.d
if(n==null)n=r.a(n)
e=D.o.eb(n,s)
u.push(new C.z(-v.gex(0)/2+e*4,D.o.F(n,s)*4))}b4=C.a([D.d.gI(u)],w)
for(a5=0;a9=u.length-1,a5<a9;a5=a9){w=a5+1
for(;;){if(!(a9>w&&!b5.aZP(0,u[a5],u[a9])))break;--a9}b4.push(u[a9])}return b4},
bTP(d,e,f){return Math.sqrt(Math.pow(d-f.a,2)+Math.pow(e-f.b,2))}}
A.Av.prototype={}
A.brF.prototype={
bzZ(d,e,f,g,h,i,j,k,l,m,n,o){var w,v,u,t,s=this.b
if(s!=null)for(w=this.as,v=1;v<s.length;++v){u=v-1
t=Math.sqrt(Math.pow(s[v].a-s[u].a,2)+Math.pow(s[v].b-s[u].b,2))
w.push(t)
this.at+=t}}}
A.aW5.prototype={
auP(d){var w,v,u=d.gex(0),t=new A.bUu(d,u)
switch(d.c){case"living":w=t.$1(46)
return C.a([B.hhb,new A.Av(w.a,w.b,4,"Switching the ad on the big TV",!1,!0,!0,"ad")],x.h)
case"kitchen":return C.a([new A.Av(new C.z(-u/2+40,42),3.141592653589793,2.8,"Getting a drink from the fridge",!0,!1,!1,""),B.hha],x.h)
case"bathroom":return B.dpE
case"bedroom":v=t.$1(44)
return C.a([new A.Av(v.a,v.b,3.4,"Switching the ad on the TV",!1,!0,!0,"ad")],x.h)
case"hall":if(!this.a)return B.azx
return C.a([new A.Av(new C.z(-d.gex(0)/2+80,90),3.141592653589793,3,"Looking at the left video wall",!1,!1,!0,""),new A.Av(B.esK,0,2.4,"Looking over the lounge and the logo carpet",!1,!1,!1,""),new A.Av(new C.z(d.gex(0)/2-80,90),3.141592653589793,3,"Looking at the right video wall",!1,!1,!0,"")],x.h)
default:return B.azx}},
acE(a0,a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=e.b.d
d===$&&C.c()
w=d[a0]
v=new A.crK(w,A.ifw(w))
v.c=D.k.dg(w.gex(0)/4)+1
v.d=D.k.dg(w.gho(0)/4)+1
u=A.hmY(w,a1)
t=u.a
s=u.c
d=e.d
r=d.length
q=a3.length===0?"Walking in":a3
d.push(A.brG(a0,"",!1,q,-1,null,!1,!1,0.5,t.a,u.b,t.b))
for(q=e.auP(w),p=q.length,o=t,n=0;n<q.length;q.length===p||(0,C.M)(q),++n){m=q[n]
l=v.aoF(o,m.a)
k=m.e
if(k)j=C.cT(m.d,"Having",0)
else j=!1
d.push(A.brG(a0,"",j,"Walking",-1,l,!1,!1,0,0,0,0))
o=D.d.gak(l)
d.push(A.brG(a0,m.w,k,m.d,-1,null,m.r,m.f,m.c,o.a,m.b,o.b))}if(a2!=null){i=A.hmY(w,a2)
h=i.c
l=v.aoF(o,i.a)
g=e.auP(w).length!==0&&D.d.gak(e.auP(w)).e
d.push(A.brG(a0,"",g,"Walking to the next room",-1,l,!1,!1,0,0,0,0))
o=D.d.gak(l)
d.push(A.brG(a0,"",g,"Opening the door",h,null,!1,!1,1.8,o.a,e.bNo(w,h),o.b))}for(f=r;f<d.length;++f)d[f].ay=s},
aXc(d,e,f){return this.acE(d,e,f,"")},
bNo(d,e){var w,v=d.w[e].b
A:{if("left"===v){w=-1.5707963267948966
break A}if("right"===v){w=1.5707963267948966
break A}w=3.141592653589793
break A}return w},
aZO(){var w,v,u=this
if(u.a){u.acE(5,10,9,"Walking into the hall")
u.aZQ()
return}u.acE(10,11,9,"Coming in through the front door")
u.aXc(9,10,5)
u.acE(5,9,0,"Walking down the hall")
for(w=0;w<8;++w){v=B.cXN[w]
u.aXc(v,5,w===7?null:5)}u.aZQ()},
aZQ(){var w,v,u,t,s,r,q,p,o=this,n=o.c,m=Math.min(1,n/120)
for(w=o.d,v=w.length,u=0,t=0,s=0;s<v;++s){r=w[s]
if(r.b==null)u+=r.f*=m
else t+=r.at}q=t/Math.max(4,n-u)
for(n=q<=0,p=0,s=0;s<v;++s){r=w[s]
if(r.b!=null)r.f=n?0.1:Math.max(0.05,r.at/q)
r.ax=p
p+=r.f}o.e!==$&&C.aP()
o.e=p},
bbw(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g={},f=this.e
f===$&&C.c()
w=D.k.E(d,0,f-0.001)
f=this.d
g.a=D.d.gak(f)
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
return A.aty(!1,n,f.ay,p,f.w,0,f.r,o,0,!1,s,f.x,v,!1,!1,f.c,f.e,f.d)}v=new A.bUv(g)
m=r*f.at
l=v.$1(m)
k=v.$1(Math.min(g.a.at,m+7))
j=v.$1(Math.max(0,m-7))
i=k.a-j.a
h=k.b-j.b
if(Math.abs(i)<0.000001&&Math.abs(h)<0.000001){f=g.a.b
f.toString
f=D.d.gak(f)
v=g.a.b
v.toString
i=f.a-D.d.gI(v).a
v=g.a.b
v.toString
v=D.d.gak(v)
f=g.a.b
f.toString
h=v.b-D.d.gI(f).b}f=g.a
v=l.a
s=l.b
p=Math.atan2(i,h)
o=g.a
return A.aty(!1,0,o.ay,"",o.w,0,o.r,-1,m/12,!1,!1,!1,f.a,!1,!0,v,p,s)}}
A.b9p.prototype={
My(d){var w=this.a
if(w!=null)this.ax=A.huC(w,this.CW)},
aJc(){var w,v,u,t,s,r,q=this
if(!q.KM(q.f,q.r))return!1
for(w=6;w<=320;w+=6){v=Math.max(8,D.k.V(w/6)*3)
for(u=0;u<v;++u){t=u*2*3.141592653589793/v
s=q.f+Math.cos(t)*w
r=q.r+Math.sin(t)*w
if(!q.KM(s,r)){q.f=s
q.r=r
q.at=null
return!0}}}return!1},
KM(d,e){var w,v,u,t,s=this
if(d<s.b||d>s.c||e<s.d||e>s.e)return!0
for(w=s.ax,v=w.length,u=s.ay,t=0;t<v;++t)if(w[t].aGl(d,e,u))return!0
return!1},
aLu(d,e,f,g){var w,v,u,t,s,r,q,p,o=this,n=Math.sqrt(e*e+f*f)
if(n<0.000001)return o.x=!1
w=e/n
v=f/n
u=o.ch
t=o.z?1.9:1
s=115*u*t*Math.min(1,n)*g
r=o.f+w*s
q=o.r+v*s
p=!0
if(o.KM(r,q))if(!o.KM(r,o.r))q=o.r
else{p=!o.KM(o.f,q)
if(p)r=o.f}if(p){o.f=r
o.r=q
o.w=Math.atan2(w,v)
o.y=o.y+s/12}return o.x=p},
cOb(d){var w,v=this,u=v.Q
if(u<=0&&v.as<=0)return
w=v.as
u+=w*d
v.Q=u
v.as=w-560*d
if(u<=0)v.as=v.Q=0},
FE(d,e){var w,v,u,t=this,s=t.at
if(s==null)return!1
w=s.a-t.f
v=s.b-t.r
if(Math.sqrt(w*w+v*v)<4){t.at=null
return t.x=!1}u=t.aLu(0,w,v,e)
if(!u){t.at=null
t.x=!1}return u}}
A.aki.prototype={}
A.apU.prototype={
T(){var w=x.N
return new A.be0(C.U(w,w))}}
A.be0.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=x.p,g=C.eH(C.a([C.aH(i,i,i,i,B.bQR,i,i,i,new A.d6M(d),i,i,i,i,i,i)],h),i,i,!0,!0,E.lw,i,1,i,i,i,!1,i,!1,i,i,i,i,!0,i,i,i,i,i,B.fBP,i,i,i,1,i,!0),f=C.a([],h)
for(w=0;w<2;++w)f.push(C.j0(i,i,i,new C.y(D.d.gI(B.zn[w].b.split(" (")),i,i,i,i,i,i,i,i,i,i,i),i,new A.d6N(j,w),j.d===w,i,i,i,i))
f=C.bW(D.bC,f,D.bq,i,0,8)
v=j.e
v=C.bW(D.bC,C.a([C.j0(i,i,i,B.fR8,i,new A.d6O(j),!v,i,i,i,i),C.j0(i,i,i,B.fNl,i,new A.d6P(j),v,i,i,i,i)],h),D.bq,i,0,8)
u=B.zn[j.d]
u=C.a([f,D.O,v,D.W,C.d(u.b,i,i,i,i,i,i,D.dd,i,i,i),D.au,C.d(u.c,i,i,i,i,i,i,D.Ag,i,i,i),D.W],h)
for(f=B.zn[j.d].e,f=J.aW(f.gev(f)),v=x.N,t=x.e7,s=j.f,r=x.bP;f.C();){q=f.gR(f)
p=s.h(0,q)
o=C.a([],r)
for(n=B.zn[j.d].d,m=0;m<5;++m){l=n[m]
o.push(new C.eI(l,new C.y(l,i,D.oG,i,i,i,i,i,i,i,i,i),D.f3,i,t))}p=C.a([new C.y(q,i,B.fp7,i,i,i,i,i,i,i,i,i),C.SY(i,E.lw,B.fxi,i,!1,!0,o,new A.d6Q(j,q),i,i,p,v)],h)
if(!j.e&&s.h(0,q)!=null)p.push(new C.fe(new A.d6R(j,q),i))
p.push(D.am)
D.d.v(u,p)}u.push(C.bH(C.d(j.e?"Submit the test":"Check my wiring",i,i,i,i,i,i,i,i,i,i),i,new A.d6S(j),i))
f=j.r
if(f!=null){f=f.a
v=f===B.v3
t=v?"CORRECT: every lead follows the diagram.":A.h1b(f)+": not passed"
if(v)f=D.bj
else f=f===B.TC?D.bG:D.cs
h=C.a([D.W,C.d(t,i,i,i,i,i,i,C.l(i,i,f,i,i,i,i,i,i,i,i,16,i,i,D.u,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)],h)
for(f=j.r.b,v=f.length,m=0;m<f.length;f.length===v||(0,C.M)(f),++m){k=f[m]
h.push(new C.y(k.c+"\nRule: "+k.d+"\nFix: "+k.e+"\n",i,B.fjB,i,i,i,i,i,i,i,i,i))}for(f=B.zn[j.d].f,m=0;m<2;++m)h.push(new C.y("\u2022 "+f[m],i,D.vg,i,i,i,i,i,i,i,i,i))
D.d.v(u,h)}return C.c7(g,E.Bf,C.cr(u,i,D.bB,i,i,D.ah,!1),i,!1,!1,i,i)}}
A.JD.prototype={
a5(){return"SafetyStatus."+this.b}}
A.FG.prototype={
a5(){return"TerminalRole."+this.b}}
A.FN.prototype={
a5(){return"WireFunction."+this.b}}
A.cyb.prototype={}
A.cBM.prototype={}
A.a4c.prototype={}
A.bLO.prototype={}
A.wj.prototype={}
A.tg.prototype={}
A.b60.prototype={}
A.ab1.prototype={}
A.ab2.prototype={}
A.v9.prototype={}
A.b4J.prototype={}
A.b7T.prototype={}
A.cyd.prototype={
bqC(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=C.a([],x.dH)
for(w=this.a,v=w.length,u=0;u<w.length;w.length===v||(0,C.M)(w),++u){t=w[u]
s=t.b
r=t.c
q=A.hr6(s,r,t.d)
p=new C.Z(r,new A.cye(),C.T(r).k("Z<1>")).gL(0)
r=s.d?1:0
o=s.b+s.c+r
n=o===0?0:D.o.E(D.k.V(p*100/o),0,100)
if(q.a!==B.v3)n=D.o.E(n,0,79)
i.push(new A.ab2(t.a,q,n))}w=C.a([],x.gl)
for(v=this.b,s=this.c,m=0;m<v.length;++m){r=v[m]
l=s.h(0,m)
w.push(new A.b4J(r,l==null?-1:l))}v=C.a([],x.t)
for(s=i.length,u=0;u<i.length;i.length===s||(0,C.M)(i),++u)v.push(i[u].c)
for(s=w.length,u=0;u<w.length;w.length===s||(0,C.M)(w),++u){k=w[u]
v.push(k.b===k.a.c?100:0)}j=v.length===0?0:D.k.V(D.d.fb(v,new A.cyf())/v.length)
return new A.b7T(i,w,j,D.d.d5(i,new A.cyg())&&j>=80)}}
A.PI.prototype={}
A.a19.prototype={
T(){var w=x.S
return new A.buo(C.U(w,w))}}
A.buo.prototype={
B(d){var w=null,v=this.e,u=C.aJ(d,w,x.w).w
return C.bl(!0,new C.cU(new C.aZ(0,1/0,0,u.a.b*0.9),C.cr(v==null?this.cnN():this.crb(v),w,D.bQ,w,w,D.ah,!0),w),!0,!1,D.af,!0,!0)},
cnN(){var w,v,u,t,s,r,q=this,p=null,o=q.a,n=o.c.b,m=x.p
o=C.a([C.d("Test: "+o.d,p,p,p,p,p,p,D.dd,p,p,p),D.au,B.fvu,D.W],m)
for(w=q.d,v=x.cE,u=0;u<n.length;u=t){t=u+1
s=C.a([new C.y(""+t+". "+n[u].a,p,D.nF,p,p,p,p,p,p,p,p,p)],m)
for(r=0;r<3;++r)s.push(new A.a9F(r,w.h(0,u),new A.f7p(q,u),new C.y(n[u].b[r],p,D.Af,p,p,p,p,p,p,p,p,p),!0,p,v))
s.push(D.au)
D.d.v(o,s)}o.push(D.O)
o.push(C.bH(B.fzO,p,new A.f7q(q),p))
return o},
crb(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=d.d,g=h?D.bj:D.cs
h=h?"Passed":"Not passed"
w=x.p
h=C.a([C.d(h,i,i,i,i,i,i,C.l(i,i,g,i,i,i,i,i,i,i,i,22,i,i,D.u,i,i,!0,i,i,i,i,i,i,i,i),i,i,i),C.d("Score "+d.c+"%  (pass mark 80%)",i,i,i,i,i,i,D.UK,i,i,i)],w)
v=d.a
if(D.d.b3(v,new A.f7r()))h.push(B.ekB)
h.push(D.W)
for(u=v.length,t=0;t<v.length;v.length===u||(0,C.M)(v),++t){s=v[t]
r=s.b
q=r.a
p=A.h4M(q).j(0.1)
o=new C.aQ(12,12)
n=new C.ay(A.h4M(q).j(0.6),1,D.r,-1)
m=A.h1b(q)
q=A.h4M(q)
q=C.a([new C.y(s.a+": "+m+" ("+s.c+"%)",i,new C.F(!0,q,i,i,i,i,13.5,D.u,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i),i,i,i,i,i,i,i,i,i)],w)
r=r.b
if(r.length===0)q.push(B.fJC)
for(m=r.length,l=0;l<r.length;r.length===m||(0,C.M)(r),++l){k=r[l]
D.d.v(q,C.a([D.au,new C.y(A.h1b(k.b)+": "+k.c,i,B.fdD,i,i,i,i,i,i,i,i,i),new C.y("Rule: "+k.d,i,M.a9Q,i,i,i,i,i,i,i,i,i),new C.y("Fix: "+k.e,i,B.fjC,i,i,i,i,i,i,i,i,i)],w))}h.push(C.p(i,C.x(q,D.E,i,D.e,D.i,0,D.p),D.f,i,i,new C.o(p,i,new C.bK(n,n,n,n),new C.bj(o,o,o,o),i,i,D.n),i,i,i,D.ct,D.y8,i,i,i))}for(v=d.b,u=v.length,t=0;t<v.length;v.length===u||(0,C.M)(v),++t){j=v[t]
r=D.c.j(0.05)
q=new C.aQ(12,12)
p=j.a
o=p.c
m=j.b===o
n=new C.ay(m?D.bj:D.cs,1,D.r,-1)
m=m?"\u2705":"\u274c"
h.push(C.p(i,C.x(C.a([new C.y(m+" "+p.a,i,D.lO,i,i,i,i,i,i,i,i,i),new C.y("Correct answer: "+p.b[o],i,D.t9,i,i,i,i,i,i,i,i,i),new C.y(p.d,i,M.a9Q,i,i,i,i,i,i,i,i,i)],w),D.E,i,D.e,D.i,0,D.p),D.f,i,i,new C.o(r,i,new C.bK(n,n,n,n),new C.bj(q,q,q,q),i,i,D.n),i,i,i,D.ct,D.y8,i,i,i))}h.push(D.au)
h.push(C.bH(D.pA,i,new A.f7s(this),i))
return h}}
A.a58.prototype={
h2(d){var w,v=this
if(v.c)return
v.c=!0
w=$.aV
w.toString
if(D.a.t(C.vq(C.b0(w).a,null),"Test"))v.d=C.dg(v.b,new A.bS0(v))
else v.b_5()},
b_5(){$.eW.Hb(new A.bS_(this))},
bR(d){var w
this.c=!1
w=this.d
if(w!=null)w.a4(0)
this.d=null}}
var z=a.updateTypes(["~()","~(fk)","R(nq)","n(n,fK)","R(mb)","R(a5d)","q(q)","R(jz)","R(ou)","~(H)","ai<kn>(K)","R(XQ)","R(a4c)","R(fK)","R(a9U)","R(Ms)","H(mb,mb)","R(OY)","R(I3)","aA<~>()","R(oj)","R(q)","q(K,K)","n(nq)","q(K,K,K)","q(H)","R(pO)","DV(Y)","~(xe,au,K)","~(mb)","~(t,au)","R(Af)","q(K)","R(LY)","IS(Y)","R(ab2)","q(hn)","R(Fb)","H(xi,xi)","R(r6)","R(z3)","Of(Y)","R(T_)","q(K,K[K])","R(z8)","R(wj)","H(FZ,FZ)","PN()","FG(n)","wj(wj,wj)","~(H,q,q,n,u)","~(H,ai<q>)","z8()","pO()","aA<Mz?>()","R(w_)","oj(K)","FN(n)","~(H{keepTour:R})","n(jz)","~(q,q,q,q,u,K)","K(lD)","~(q,q,q,q)","v(n,ai<rJ>)","n(mb)","v(xi)","q(ai<q>,H)","XE()","~(aD?)","Cx()","R(xi)","Wb(Y)","~(kn,H)","~(q,K,K,K,~(xe,au,K){px:K})","ai<fO>(K)","a71(Y)","~(q,q{note:n?})","mb?(q,q)","R(q,q)","q?(q,q)","K(q)","ai<q>(q,q[H])","+(K,K,K,n,n)(OY,H)","H(H,mb)","K(mb)","ai<kn>()","ai<kn>(ai<kn>)","K(oj)","~(q,q,q,K,K)","a19(Y)","~(q,q,q,q{poster:H})","~(~(fk),q,q)","~(q,q,K,K,u{joint:R})","+(q,q)(H)","~(q,q,H{alongX:R})","~(ai<q>,u)","~(ai<q>)","~(ai<q>{col:u})","~(H,q,u{h:K,w:K})","mb?(n)","~(H,ai<q>,u,K,n)","~(H,n,q,q,q,R)","R(Xa)","ai<+(q,q)>()","~(mb,K,K,K,K,K{note:n?})","ai<q>(ai<q>)","~(n,ai<q>{r:K})","~(n,q,q)","~(nq,q,n)","~(n,q,q,H)","q(H,H)","R(H)","fO(q,q,q,q,H,K,K)","H(Af,Af)","H(ou)","~(H,q,q{col:u,round:R})","cW()","hn(H)","n(Ms)","~(n,JD,n,n,n)","H(FN,FG)","~({done:R})","H(Af)","~(q,q,q,K,H)","v(rJ)"])
A.c_h.prototype={
$1(d){var w=this.a
w=w===0?d:A.vw(d,w)
return w.a8(0,this.b)},
$S:z+6}
A.c_i.prototype={
$1(d){var w=this.a
return w===0?d:A.vw(d,w)},
$S:z+6}
A.c_g.prototype={
$4(b5,b6,b7,b8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=this
for(w=b4.b,v=b7.a,u=b7.b,t=b7.c,s=b6.a,r=b6.b,q=b6.c,p=b8.a,o=b8.b,n=b8.c,m=1/w,l=v*m,k=u*m,j=t*m,i=p*m,h=o*m,m=n*m,g=b4.a,f=g.a,e=b4.c,d=x.o,a0=b4.d,a1=b4.e,a2=b4.f,a3=0;a3<w;++a3)for(a4=a3/w,a5=s+v*a4,a6=r+u*a4,a4=q+t*a4,a7=0;a7<w;++a7){a8=a7/w
a9=a5+p*a8
b0=a6+o*a8
a8=a4+n*a8
b1=a9+l
b2=b0+k
b3=a8+j
f.push(new A.kn(C.a([e.$1(new A.q(a9,b0,a8)),e.$1(new A.q(b1,b2,b3)),e.$1(new A.q(b1+i,b2+h,b3+m)),e.$1(new A.q(a9+i,b0+h,a8+m))],d),a0.$1(b5),a1,g.b,a2,g.d,!1,g.c,g.e,g.f,g.w))}},
$S:z+62}
A.c_j.prototype={
$1(d){var w=d*2*3.141592653589793/this.b
return this.a.aI(0,Math.cos(w)).a8(0,this.c.aI(0,Math.sin(w)))},
$S:z+25}
A.c_f.prototype={
$2(d,e){var w=3.141592653589793*d/this.a,v=6.283185307179586*e/this.b
return new A.q(Math.sin(w)*Math.cos(v),Math.cos(w),Math.sin(w)*Math.sin(v))},
$S:z+110}
A.c_k.prototype={
$1(d){var w=d*2*3.141592653589793/this.b
return this.a.aI(0,Math.cos(w)).a8(0,this.c.aI(0,Math.sin(w)))},
$S:z+25}
A.fW1.prototype={
$1(d){var w=d.b,v=this.a,u=d.c,t=this.b
return new A.q(d.a,w*v-u*t,w*t+u*v)},
$S:z+6}
A.fW_.prototype={
$1(d){var w=this.a
return w===0?d:A.vw(d,w)},
$S:z+6}
A.fW0.prototype={
$1(d){var w=this,v=w.b===0?d:w.c.$1(d)
return J.fXe(w.a.$1(v),w.d)},
$S:z+6}
A.fVZ.prototype={
$1(d){var w=this.b===0?d:this.c.$1(d)
return this.a.$1(w)},
$S:z+6}
A.fVO.prototype={
$4(d,e,f,g){var w=-d
return 0.5*(2*e+(w+f)*this.a+(2*d-5*e+4*f-g)*this.b+(w+3*e-3*f+g)*this.c)},
$S:326}
A.bIZ.prototype={
$1(d){var w=d.a,v=J.a5(w),u=C.jT(v.h(w,"ngmy_swipe_x3"))
$.ajd=u===!0
w=C.jT(v.h(w,"ngmy_swipe_y3"))
$.aje=w!==!1},
$S:288}
A.bJ_.prototype={
$1(d){},
$S:28}
A.bJ0.prototype={
$1(d){d.ar("Bool","ngmy_swipe_x3",$.ajd)
d.ar("Bool","ngmy_swipe_y3",$.aje)},
$S:288}
A.bJ1.prototype={
$1(d){},
$S:28}
A.bJ3.prototype={
$1(d){var w=this,v=-d.c,u=d.b,t=w.a,s=w.b,r=v*t-u*s,q=d.a,p=w.c,o=w.d
return new A.q(q*p-r*o,u*t+v*s,q*o+r*p)},
$S:z+6}
A.bJ2.prototype={
$1(d){var w=this,v=w.a
return v.d.a8(0,w.b.$1(new A.q(w.c*d,w.d*d,d-v.c)))},
$S:z+32}
A.bIY.prototype={
$1(d){var w=this,v=-d.c,u=d.b,t=w.a,s=w.b,r=v*t-u*s,q=d.a,p=w.c,o=w.d
return new A.q(q*p-r*o,u*t+v*s,q*o+r*p)},
$S:z+6}
A.bIX.prototype={
$1(d){var w=this,v=w.a
return v.d.a8(0,w.b.$1(new A.q(w.c*d,w.d*d,d-v.c)))},
$S:z+32}
A.csL.prototype={
$1(d){var w=this,v=d.a,u=w.a,t=d.c,s=w.b,r=-v*s+t*u,q=d.b,p=w.c,o=w.d
return new A.q(v*u+t*s,q*p-r*o,-(q*o+r*p))},
$S:z+6}
A.csM.prototype={
$1(d){var w=this.a.c,v=this.b.$1(d.aF(0,w.d))
return new A.q(v.a,v.b,v.c+w.c)},
$S:z+6}
A.csK.prototype={
$2(d4,d5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1=this,d2=d1.b,d3=d2.f
if(d3!=null&&!d3.$1(d4.w))return
w=d4.a
v=w.length
d3=d1.a
u=d3.c
if(v>u.length){u=v*2
t=d3.c=new Float64Array(u)
d3.d=new Float64Array(u)
d3.e=new Float64Array(u)
d3.f=new Float64Array(u)
d3.r=new Float64Array(u)
u=t}for(t=d1.c,s=d1.d,r=d1.e,q=d1.f,p=d1.r,o=u.$flags|0,n=d3.d,m=d1.w,l=d1.x,k=n.$flags|0,j=d1.y,i=d3.e,h=i.$flags|0,g=!0,f=0;f<v;++f){e=w[f]
d=e.a-t
a0=e.b-s
a1=e.c-r
a2=-d*p+a1*q
o&2&&C.aj(u)
u[f]=d*q+a1*p
k&2&&C.aj(n)
n[f]=a0*m-a2*l
a3=-(a0*l+a2*m)+j
h&2&&C.aj(i)
i[f]=a3
if(a3<0.5)g=!1}a4=d4.b
t=a4.a
s=a4.c
a5=-t*p+s*q
a6=t*q+s*p
p=a4.b
a7=p*m-a5*l
a8=-(p*l+a5*m)
a9=a6*u[0]+a7*n[0]+a8*i[0]>0
if(a9&&!d4.r)return
if(a9){a6=-a6
a7=-a7
a8=-a8}if(!g){u=C.a([],x.o)
for(f=0;f<v;++f)u.push(new A.q(d3.c[f],d3.d[f],d3.e[f]))
b0=A.hWl(u)
v=b0.length
if(v<3)return
u=d3.c
if(v>u.length){u=v*2
t=d3.c=new Float64Array(u)
d3.d=new Float64Array(u)
d3.e=new Float64Array(u)
d3.f=new Float64Array(u)
d3.r=new Float64Array(u)
u=t}for(t=u.$flags|0,s=d3.d,r=s.$flags|0,q=d3.e,p=q.$flags|0,f=0;f<v;++f){o=b0[f]
t&2&&C.aj(u)
u[f]=o.a
r&2&&C.aj(s)
s[f]=o.b
p&2&&C.aj(q)
q[f]=o.c}}else if(v<3)return
for(u=d1.z,t=d3.c,s=d1.Q,r=d1.as,q=d3.d,p=d3.f,o=p.$flags|0,n=d3.r,m=n.$flags|0,l=d3.e,b1=0,b2=1/0,b3=1/0,b4=-1/0,b5=1/0,b6=-1/0,f=0;f<v;++f){b7=l[f]
b1+=b7
if(b7<b2)b2=b7
b8=u+t[f]*s/b7
b9=r-q[f]*s/b7
o&2&&C.aj(p)
p[f]=b8
m&2&&C.aj(n)
n[f]=b9
if(b8<b3)b3=b8
if(b8>b4)b4=b8
if(b9<b5)b5=b9
if(b9>b6)b6=b9}c0=b1/v
u=!1
if(d3.a)if(d4.y===0){u=d4.z
if(u!==0){t=d1.at.h(0,u)
t.toString
u=d1.ax.h(0,u)
u.toString
u=t/u}else u=c0
u=u<d3.b}if(u)return
if(b2>d1.ay)return
c1=b4-b3
c2=b6-b5
if(c1<0.6&&c2<0.6)return
if(b4<-8||b3>d1.ch+8||b6<-8||b5>d1.CW+8){d2=d4.z
if(d2!==0){d3=d1.cx
u=d3.h(0,d2)
d3.n(0,d2,(u==null?0:u)+c0-d4.x)
d3=d1.cy
u=d3.h(0,d2)
d3.n(0,d2,(u==null?0:u)+1)}return}c3=0.56+0.58*Math.max(0,a6*d1.db+a7*d1.dx+a8*d1.dy)
u=d4.e
c4=u>0?Math.pow(Math.max(0,a6*d1.fr+a7*d1.fx+a8*d1.fy),28)*u:0
c5=d4.c
u=d2.e
t=u!==0
if(t&&d4.d===u){d2=C.ar(c5,D.b2,0.28+0.14*Math.sin(d2.gGQ(0)*6))
d2.toString
c3+=0.12
c5=d2}d2=255*c4*0.55
c6=D.k.V(D.k.E(c5.gb2(c5)*255*c3+d2,0,255))
c7=D.k.V(D.k.E(c5.gbc()*255*c3+d2,0,255))
c8=D.k.V(D.k.E(c5.gb9(c5)*255*c3+d2,0,255))
d2=$.S()
s=C.a([],x.g)
c9=new C.aF(d2.r,D.ag,null,null,s)
c9.D(new C.aX(d3.f[0],d3.r[0]))
for(f=1;f<v;++f){d2=new C.aq(d3.f[f],d3.r[f])
s.push(d2)
r=c9.f
if(r!=null)d2.by(r)
d2=c9.e
if(d2!=null)d2.a.delete()
c9.e=null}c9.D(new C.bs())
d2=d4.f
d3=C.fXX(c6,c7,c8,d2)
s=d4.d
u=s===u&&t
d0=new A.FZ(d4.y,d4.z,null,c9,d3,c0-d4.x,s,d2<0.99,u)
d0.e=c1<2&&c2<2
d1.go.push(d0)
d0.c=d5},
$S:z+72}
A.csE.prototype={
$1(d){return d.c>=1},
$S:z+21}
A.csF.prototype={
$1(d){var w,v,u,t,s,r,q,p,o=this,n=!o.c||o.d>=o.e[0],m=o.f,l=o.b
if(n)A.hXc(d,m,o.r,l.gGQ(0))
else{n=$.hyp()
C.DZ(m)
w=n.a
v=w.get(m)
u=D.k.bh(l.gGQ(0)*5)
t=v==null
if(t)s=o.a.x<10
else s=v.a!==u&&o.a.w<3
if(s){$.S()
r=new C.oX()
m.c.$3(C.z4(r,null),new C.au(m.d,m.e),l.gGQ(0))
if(!t)v.b.q()
n.n(0,m,new A.cCx(u,r.ne()))
n=o.a
if(t)++n.x
else ++n.w}C.DZ(m)
n=w.get(m)
q=n==null?null:n.b
if(q!=null){n=m.d
m=m.e
p=A.h4r(o.r,n,m)
if(p!=null){l=d.a
J.bm(l.save())
d.av(0,p.a)
l.clipRect(C.bF(new C.a3(0,0,n,0+m)),$.ms()[1],!0)
m=q.b
m===$&&C.c()
m=m.a
m===$&&C.c()
m=m.a
m.toString
l.drawPicture(m)
l.restore()}}else{$.S()
n=C.I()
n.r=D.cp.gp(0)
d.aG(o.w,n)}}},
$S:721}
A.csD.prototype={
$2(d,e){var w=this.a
return A.o2(A.o2(w[0],w[1],d),A.o2(w[3],w[2],d),e)},
$S:z+22}
A.csG.prototype={
$1(d){return d.c<1},
$S:z+21}
A.csH.prototype={
$1(d){return A.hXd(d,this.b,this.c,8,6,this.a.gGQ(0))},
$S:721}
A.csI.prototype={
$2(d,e){return D.k.aK(e,d)},
$S:1771}
A.csJ.prototype={
$2(d,e){var w,v=D.o.aK(d.a,e.a)
if(v!==0)return v
w=D.k.aK(e.d,d.d)
return w!==0?w:D.o.aK(d.c,e.c)},
$S:z+46}
A.f_e.prototype={
$1(d){var w=this.a,v=w.r,u=d.a
w.r=d
w.a.d.a6N(D.k.E((u-v.a)/1e6,0,0.1))
w.f.sp(0,u/1e6)},
$S:9}
A.f_d.prototype={
$1(d){if(x.ej.b(d))this.a.a.d.apg(1+d.gty().b*0.0012)},
$S:237}
A.f_a.prototype={
$1(d){var w=this.a
w.w=1
w.x=d.c},
$S:240}
A.f_b.prototype={
$1(d){var w,v,u,t,s,r=d.w,q=this.a
if(r!==q.x){q.x=r
q.w=d.d}if(r>=2){r=d.d
w=q.w/r
q.w=r
if(isFinite(w)&&w>0)q.a.d.apg(w)}else{r=q.a.d
q=d.a
v=$.ajd?-1:1
v=q.a*0.009*v
u=$.aje?-1:1
r.ay=r.ax=null
v=r.a+=v
if(!r.Q){t=r.y
s=r.z
r.a=D.k.E(v,t-s,t+s)}r.b=D.k.E(r.b+-q.b*0.009*u,r.w,r.x)
r.aV()}},
$S:234}
A.f_c.prototype={
$1(d){var w=this.a,v=w.a.f
return v==null?null:v.$1(w.e.cVw(d.b))},
$S:67}
A.f_8.prototype={
$1(d){return this.a.y=d.b},
$S:23}
A.f_9.prototype={
$0(){var w,v=this.a,u=v.a.as
u.toString
v=v.y
w=this.b.gY(0)
return u.$2(v,w==null?D.ax:w)},
$S:0}
A.fgz.prototype={
$0(){return new A.PN(!1,C.a([],x.z),C.a([],x.t))},
$S:z+47}
A.bTa.prototype={
$0(){var w=0,v=C.j(x.c),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j
var $async$$0=C.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return C.b($.r3().jM(0,q.a),$async$$0)
case 7:p=e
m=q.b
l=x.N
o=new A.Mz(m,C.U(l,x.J),C.U(l,x.bB),C.a([],x.dQ),C.U(l,x.gN))
w=8
return C.b(o.Pw(p),$async$$0)
case 8:$.fYL.n(0,m,o)
$.fYJ.W(0,m)
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
m=q.b
$.am.$1("Could not read the character "+m+": "+C.w(n))
$.fYJ.M(0,m)
u=null
r=[1]
w=5
break
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
$.fYK.W(0,q.b)
w=r.pop()
break
case 6:case 1:return C.h(u,v)
case 2:return C.f(s.at(-1),v)}})
return C.i($async$$0,v)},
$S:z+54}
A.bT1.prototype={
$1(d){return D.a.t(d,"hips")},
$S:3}
A.bSW.prototype={
$2(d,e){var w,v=Math.floor(d),u=Math.floor(e),t=this.b,s=t.a,r=Math.min(s-1,D.k.bh((d-v)*s))
v=t.b
w=(Math.min(v-1,D.k.bh((e-u)*v))*s+r)*4
s=this.a
t=t.c
s.c=s.c+t[w]
s.b=s.b+t[w+1]
s.a=s.a+t[w+2]},
$S:250}
A.bSV.prototype={
$1(d){return D.k.V(D.k.E(d,0,1)*255)},
$S:267}
A.bT3.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=x.S,g=C.U(h,h)
h=this.b
w=new Int32Array(h)
for(v=this.a,u=this.c.a,t=d*0.4,s=0;s<h;++s){r=s*3
q=u[r]
p=u[r+1]
o=v.b
if(!(p>o+0.86*(v.d-o))){o=v.c
n=v.e
m=Math.abs(q-(o+n)/2)>0.3*(n-o)}else m=!0
l=m?t:d
k=D.k.bh((q-v.c)/l)
j=D.k.bh((p-v.b)/l)
i=D.k.bh((u[r+2]-v.a)/l)
r=m?1:0
w[s]=g.c3(0,((k*1024+j)*1024+i)*2+r,new A.bT4(g))}e[0]=g.a
return w},
$S:1773}
A.bT4.prototype={
$0(){return this.a.a},
$S:91}
A.bT5.prototype={
$1(d){var w,v,u,t,s,r,q=C.aY(x.S)
for(w=this.a.e,v=w.length,u=0;u<v;u+=3){t=d[w[u]]
s=d[w[u+1]]
r=d[w[u+2]]
if(t===s||s===r||t===r)continue
q.M(0,A.hc6(t,s,r))}return q.a},
$S:1774}
A.bT2.prototype={
$2(d,e){var w,v,u,t=this.a,s=this.b.h(0,d)
s.toString
w=J.a5(e)
v=D.k.V(w.h(e,0)/w.h(e,3))
u=D.k.V(w.h(e,1)/w.h(e,3))
w=D.k.V(w.h(e,2)/w.h(e,3))
t.$flags&2&&C.aj(t)
t[s]=(v<<16|u<<8|w|4278190080)>>>0},
$S:1775}
A.bT_.prototype={
$0(){return new Float64Array(this.a*16)},
$S:723}
A.bT0.prototype={
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
if(n<0)D.ou.h9(k,j,j+16,h)
else A.hc7(k,n*16,h,0,k,j)
k=u.f
k===$&&C.c()
k=k[a1]
j=k.length
m=0
for(;m<k.length;k.length===j||(0,C.M)(k),++m)l.$1(k[m])},
$S:29}
A.bT8.prototype={
$1(d){var w,v,u
for(w=this.a.z,w=new C.hC(w,w.r,w.e);w.C();){v=w.d
u=v.toLowerCase()
if(C.cT(u,d,0))return v}return null},
$S:320}
A.bT6.prototype={
$1(d){return!D.a.t(d.toLowerCase(),"pose")},
$S:3}
A.bT7.prototype={
$0(){var w=this.a.z
return new C.cv(w,C.a6(w).k("cv<1>")).gI(0)},
$S:22}
A.bTb.prototype={
$1(d){var w=this,v=w.c,u=d*3,t=w.a,s=w.d,r=(v[u]-t.b)*s,q=v[u+1],p=w.b.ay,o=(v[u+2]-t.a)*s
t=w.f
u=w.r
return new A.q(r*t+o*u+w.w,(q-p)*s+w.e,-r*u+o*t+w.x)},
$S:z+25}
A.bSX.prototype={
$3(d,e,f){var w=this,v=w.e
return w.b.a8(0,w.c.aI(0,w.a.a*f+0.25)).a8(0,w.d.aI(0,d*v)).a8(0,w.f.aI(0,e*v))},
$2(d,e){return this.$3(d,e,1)},
$S:z+43}
A.bSZ.prototype={
$6(d,e,f,g,h,i){var w=this
return w.a.push(new A.kn(C.a([d,e,f,g],x.o),w.b,h,w.c,0,1,!1,0,i,2,w.d))},
$S:z+60}
A.bSY.prototype={
$6(d,e,f,g,h,i){var w=this.b
return this.a.$6(w.$2(d-f,e),w.$2(d,e-g),w.$2(d+f,e),w.$2(d,e+g),h,i)},
$S:1777}
A.fud.prototype={
$2(d,e){return D.k.V(d+(D.k.E(e,0,255)-d)*0.8)},
$S:1778}
A.bHj.prototype={
$1(d){return d.d+this.a.f*d.e},
$S:z+61}
A.bHi.prototype={
$1(d){return d.a===J.r(this.a,"template")},
$S:z+39}
A.fMW.prototype={
$6$lines$w(d,e,f,g,h,i){var w=null,v=C.fu("\u2026",w,h,w,C.cS(w,w,w,w,w,w,w,w,w,C.l(w,w,f,w,w,w,w,w,w,w,w,e,w,w,i,w,1.1,!0,w,w,w,w,w,w,w,w),d),D.a3,D.bZ,w,D.dA,D.bW)
v.nY(g)
return v},
$4(d,e,f,g){return this.$6$lines$w(d,e,f,g,2,D.u)},
$5$w(d,e,f,g,h){return this.$6$lines$w(d,e,f,g,2,h)},
$S:1779}
A.fvC.prototype={
$1(d){var w=this.a
return A.vw(d,w.c).a8(0,new A.q(w.a,0,w.b))},
$S:z+6}
A.fvD.prototype={
$6$px(d,e,f,g,h,i){var w=new A.fvE(e,d),v=-f/2,u=g/2,t=f/2,s=-g/2
this.a.push(new A.fO(C.a([w.$2(v,u),w.$2(t,u),w.$2(t,s),w.$2(v,s)],x.o),0,h,i,i*g/f,30,this.b,0,!1))},
$5(d,e,f,g,h){return this.$6$px(d,e,f,g,h,260)},
$S:z+73}
A.fvE.prototype={
$2(d,e){return A.vw(new A.q(d,e,0),this.a).a8(0,this.b)},
$S:z+22}
A.fvv.prototype={
$3(d,e,f){return A.bB3(d,e,f,0)},
$S:24}
A.fvw.prototype={
$3(d,e,f){return A.bB3(d,e,f,3)},
$S:24}
A.fvx.prototype={
$3(d,e,f){return A.bB3(d,e,f,8)},
$S:24}
A.fvy.prototype={
$3(d,e,f){return A.bB3(d,e,f,9+this.a)},
$S:24}
A.fvz.prototype={
$3(d,e,f){return A.bB3(d,e,f,12+this.a)},
$S:24}
A.fvA.prototype={
$3(d,e,f){return A.huF(d,e,f,this.a,this.b)},
$S:24}
A.fvB.prototype={
$3(d,e,f){return A.huF(d,e,f,this.a,this.b)},
$S:24}
A.fhI.prototype={
$4(d,e,f,g){var w=-d,v=this.a
return 0.5*(2*e+(w+f)*v+(2*d-5*e+4*f-g)*v*v+(w+3*e-3*f+g)*v*v*v)},
$S:326}
A.fl5.prototype={
$1(d){var w=this.a,v=J.a5(w)
return v.h(w,D.o.E(d,0,v.gL(w)-1))},
$S:z+93}
A.fuj.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n=A.hqo(this.a),m=x.n,l=C.a([],m)
for(w=J.a5(n),v=0;v<w.gL(n)-1;v=u){u=v+1
t=w.h(n,u).a
s=w.h(n,v).a
l.push(Math.pow(Math.max(new A.q(t.a-s.a,t.b-s.b,t.c-s.c).guT(),250),0.75))}r=D.d.fb(l,new A.fui())
q=C.a([0],m)
for(m=l.length,p=0;p<l.length;l.length===m||(0,C.M)(l),++p){o=l[p]
q.push(D.d.gak(q)+30*o/r)}return q},
$S:1781}
A.fui.prototype={
$2(d,e){return d+e},
$S:80}
A.fug.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8=this.a,a9=B.dy3.h(0,a8.a)
if(a9==null){w=C.a([],x.t)
v=a8.w.length
u=v===0
t=0
for(;;){if(!(t<(u?1:v)))break
w.push(t);++t}a9=new C.z(w,0)}s=Math.max(Math.max(a8.gaoZ(),a8.gbdM()),a8.gGO()*1.3)
w=a8.r
r=new A.q(a8.ga4j(0),w+a8.gGO()/2,a8.ga4k())
q=w+a8.gGO()
v=s*0.55
p=C.a([new C.z(new A.q(a8.ga4j(0)+v,q+s*0.5,a8.ga4k()+s*1.15),r)],x.dt)
for(u=a9.a,o=x.o,n=a8.w,m=a8.e,l=a8.f,k=a9.b,v=q+v,j=null,i=0;i<u.length;++i,j=a2){h=n[u[i]]
g=h.e
f=m*g
e=l*g
d=new A.q(h.a,w+h.d+e/2,h.b)
g=h.c
a0=Math.sin(g)
a1=Math.cos(g)
a2=new A.q(a0,0,a1)
a3=new A.fuh(d,a2,f*1.5,new A.q(Math.cos(g),0,-Math.sin(g)),f,e)
a4=D.o.F(k+i,3)
A:{if(0===a4){g=C.a([a3.$3(1.8,0,1.1),a3.$3(1,-0.22,-0.35),a3.$3(0.9,0.3,-0.2)],o)
break A}if(1===a4){g=C.a([a3.$3(0.9,1.5,-0.25),a3.$3(1.05,0,0.05),a3.$3(0.85,-1.3,0.15)],o)
break A}g=C.a([a3.$3(1.3,0.2,-0.45),a3.$3(1.1,0,0.45),a3.$3(1.7,-0.3,1.3)],o)
break A}if(j!=null&&j.a*a0+j.c*a1<0.3){a0=D.d.gak(p).a
a1=D.d.gI(g)
p.push(new C.z(new A.q((a0.a+a1.a)*0.5+j.c*s*0.5,v,(a0.c+a1.c)*0.5-j.a*s*0.5),r))}for(a5=0;a5<3;++a5)p.push(new C.z(g[a5],d))}a6=new A.q(a8.ga4j(0)-s*0.7,q+s*0.6,a8.ga4k()-s)
if(j!=null){a7=D.d.gak(p).a.a8(0,a6).aI(0,0.5)
p.push(new C.z(new A.q(a7.a+j.c*s*0.5,v,a7.c-j.a*s*0.5),r))}p.push(new C.z(a6,r))
return p},
$S:z+103}
A.fuh.prototype={
$3(d,e,f){var w=this
return w.a.a8(0,w.b.aI(0,w.c*d)).a8(0,w.d.aI(0,w.e*e)).a8(0,new A.q(0,w.f*f,0))},
$S:z+24}
A.fvn.prototype={
$1(d){var w=this.b,v=w*d.b,u=d.c,t=this.c
return this.a.a8(0,new A.q(Math.sin(v)*u*t.geg(0)+w*d.e*t.gaoZ(),d.d*t.gGO(),Math.cos(v)*u*t.geg(0)))},
$S:z+36}
A.fvo.prototype={
$1(d){var w=this.c
return this.a.a8(0,new A.q(this.b*d.f*w.gaoZ(),d.r*w.gGO(),0))},
$S:z+36}
A.fvp.prototype={
$1(d){var w=this.a
return w[D.o.E(d,0,w.length-1)]},
$S:z+117}
A.c3i.prototype={
$1(d){return d.a===this.a.d.a},
$S:z+39}
A.c3g.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new A.c3f())},
$S:30}
A.c3f.prototype={
$0(){},
$S:0}
A.c33.prototype={
$0(){var w=this.a
w.f=A.h57(w.gzw(),w.d)
w.abk()},
$S:0}
A.c39.prototype={
$0(){return this.a.x=this.b},
$S:0}
A.c3h.prototype={
$0(){var w=this.a
w.x=0
w.y=!1
w.z=""},
$S:0}
A.c36.prototype={
$0(){var w=this.a
w.x=-1
w.y=!1
w.z=this.b?"That was the 30 second drone shot. Press it again any time, or change the board and film it again.":""},
$S:0}
A.c35.prototype={
$0(){var w=this.a
return w.f=A.h57(w.gzw(),w.d)},
$S:0}
A.c2E.prototype={
$0(){},
$S:0}
A.c34.prototype={
$0(){return this.a.z="That picture could not be opened."},
$S:0}
A.c38.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=C.aJ(d,k,x.w).w,i=x.p,h=C.a([],i)
for(w=this.a,v=w.d,u=0;u<12;++u){t=B.a3l[u]
s=t.a
r=v.a===s
q=r?D.d7:D.cp
p=new C.aQ(16,16)
o=r?F.fz:D.bz
n=new C.ay(o,r?2:1,D.r,-1)
o=C.a([new C.y(t.b,k,D.nH,k,k,k,k,k,k,k,k,k),D.b0],i)
r=t.w.length
m=r===0
if((m?1:r)>1){l=new C.aQ(10,10)
o.push(C.p(k,new C.y(""+(m?1:r)+" boards",k,A1.aSJ,k,k,k,k,k,k,k,k,k),D.f,k,k,new C.o(D.e_,k,k,new C.bj(l,l,l,l),k,k,D.n),k,k,k,k,D.yl,k,k,k))}if(v.a===s)o.push(B.ekq)
h.push(C.aB(k,C.p(k,C.x(C.a([new C.cd(D.aM,D.e,D.i,D.m,k,D.p,k,0,o,k),D.am,new C.y(t.c,k,D.j2,k,k,k,k,D.a1,k,2,k,k),D.cL,new C.bA(1,D.bc,new C.y(t.d,k,B.fgO,k,k,k,k,D.Un,k,k,k,k),k)],i),D.E,k,D.e,D.i,0,D.p),D.f,k,k,new C.o(q,k,new C.bK(n,n,n,n),new C.bj(p,p,p,p),k,k,D.n),k,k,k,k,B.bxg,k,k,k),D.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new A.c37(w,d,t),k,k,k,k,k,k,!1,D.a4))}return C.bl(!0,new C.D(B.byF,C.x(C.a([B.fSu,D.au,B.fLp,D.ae,new C.cU(new C.aZ(0,1/0,0,j.a.b*0.66),C.kN(1.05,h,2,10,10,k,k,!0),k)],i),D.E,k,D.e,D.Q,0,D.p),k),!0,!1,D.af,!0,!0)},
$S:25}
A.c37.prototype={
$0(){C.a4(this.b,!1).O(null)
this.a.cuT(this.c.a)},
$S:0}
A.c32.prototype={
$0(){var w=this,v=w.b.d.b[w.a.a]
w.c.saX(0,v.b)
w.d.saX(0,v.c)
w.e.saX(0,v.d)},
$S:0}
A.c31.prototype={
$1(d){var w=this
return new C.dZ(new A.c2Z(w.a,w.b,w.c,w.d,w.e,w.f),null)},
$S:20}
A.c2Z.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=this,o=null,n=p.b,m=p.a,l=n.d.b[m.a],k=new A.c3_(m,n),j=new A.c30(e),i=C.aJ(d,o,x.w).w,h=x.p,g=C.a([B.fyr,D.au,C.d(l.a?"Now it shows the NGMY logo, words and ads. Change anything and it becomes yours.":"This sign is your own.",o,o,o,o,o,o,H.vb,o,o,o)],h),f=n.gzw().w.length
if((f===0?1:f)>1){f=C.a([],h)
w=p.c
v=0
for(;;){u=n.gzw().w.length
if(!(v<(u===0?1:u)))break
u=m.a===v
t=u?D.d7:D.cp
s=new C.aQ(18,18)
r=new C.ay(u?F.fz:D.aZ,2,D.r,-1)
q=v+1
f.push(C.aB(o,C.p(o,new C.y("Sign "+q,o,D.lO,o,o,o,o,o,o,o,o,o),D.f,o,o,new C.o(t,o,new C.bK(r,r,r,r),new C.bj(s,s,s,s),o,o,D.n),o,o,o,o,D.lA,o,o,o),D.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new A.c2J(m,v,w,e),o,o,o,o,o,o,!1,D.a4))
v=q}D.d.v(g,C.a([D.W,B.fSz,D.am,C.bW(D.bC,f,D.bq,o,8,8)],h))}g.push(D.ae)
g.push(k.$3("Big words",p.d,new A.c2K(l)))
g.push(k.$3("Smaller words",p.e,new A.c2L(l)))
g.push(k.$3("Bottom line (web address)",p.f,new A.c2M(l)))
f=l.f!=null
w=f?"Your logo is on (change)":"Put your own logo (default: NGMY logo)"
g.push(j.$4(w,f,new A.c2N(m,n),new A.c2O(m,n,l)))
f=l.r!=null
w=f?"Your picture is on (change)":"Put your own picture"
g.push(j.$4(w,f,new A.c2P(m,n),new A.c2Q(m,n,l)))
g.push(D.au)
g.push(B.fMx)
g.push(D.am)
f=C.a([],h)
for(w=x.O,v=0;v<6;++v){u=B.a54[v]
u=C.a([u.b,u.c],w)
t=new C.aQ(10,10)
r=new C.ay(l.e===v&&!l.a?F.fz:D.aZ,2,D.r,-1)
s=B.a54[v]
f.push(C.aB(o,C.p(o,new C.cg(D.A,o,o,new C.y(s.a,o,new C.F(!0,s.d,o,o,o,o,11,D.H,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),o,o,o,o,o,o,o,o,o),o),D.f,o,o,new C.o(o,o,new C.bK(r,r,r,r),new C.bj(t,t,t,t),o,new C.a9(D.a5,D.a8,D.x,u,o,o),D.n),o,o,o,o,D.hs,o,o,74),D.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new A.c2R(m,n,l,v,e),o,o,o,o,o,o,!1,D.a4))}g.push(C.bW(D.bC,f,D.bq,o,8,8))
g.push(D.aA)
m=n.gzw().w.length
g.push(C.B(C.a([C.E(C.et(B.bVI,C.d((m===0?1:m)>1?"All signs back to the NGMY default":"Back to the NGMY default",o,o,o,o,o,o,B.ft4,o,o,o),new A.c2S(n,l,p.c,e),o),1),D.at,C.bH(D.wX,o,new A.c2T(d),o)],h),D.m,o,D.e,D.i,0,o,o))
return new C.D(new C.Q(16,16,16,i.f.d+16),C.ce(C.x(g,D.E,o,D.e,D.Q,0,D.p),D.t,o,D.y,o,o,o,o,D.ah),o)},
$S:108}
A.c3_.prototype={
$3(d,e,f){var w=null
return new C.D(D.d3,C.aM(w,D.Y,!1,w,!0,D.t,w,C.aN(),e,w,w,w,w,w,2,C.br(w,new C.b5(4,C.m(12),D.a0),w,w,w,w,w,w,!0,w,w,w,w,w,w,D.cp,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,D.UJ,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w),D.y,!0,w,!0,w,!1,w,D.aj,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,new A.c2U(this.a,this.b,f),w,w,w,!1,w,w,!1,w,!0,w,D.a9,w,w,w,w,w,w,w,w,w,w,w,D.df,!0,D.a3,w,D.ao,w,w,w,w),w)},
$S:1782}
A.c2U.prototype={
$1(d){this.c.$1(d)
this.b.ZA(this.a.a)},
$S:2}
A.c30.prototype={
$4(d,e,f,g){var w=null,v=this.a,u=e?D.ed:D.ua
u=C.a([C.E(C.et(C.X(u,e?D.bj:D.ad,w,w,w,w),C.d(d,w,w,w,w,w,w,D.df,w,w,w),new A.c2X(f,v),w),1)],x.p)
if(e)u.push(C.aH(w,w,w,w,D.rB,w,w,w,new A.c2Y(g,v),w,w,w,w,w,w))
return new C.D(D.ct,C.B(u,D.m,w,D.e,D.i,0,w,w),w)},
$S:1783}
A.c2X.prototype={
$0(){var w=0,v=C.j(x.H),u=this
var $async$$0=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:u.a.$0()
w=2
return C.b(C.bP(D.nl,null,x.H),$async$$0)
case 2:u.b.$1(new A.c2W())
return C.h(null,v)}})
return C.i($async$$0,v)},
$S:1}
A.c2W.prototype={
$0(){},
$S:0}
A.c2Y.prototype={
$0(){this.a.$0()
this.b.$1(new A.c2V())},
$S:0}
A.c2V.prototype={
$0(){},
$S:0}
A.c2J.prototype={
$0(){var w=this
w.a.a=w.b
w.c.$0()
w.d.$1(new A.c2I())},
$S:0}
A.c2I.prototype={
$0(){},
$S:0}
A.c2K.prototype={
$1(d){return this.a.b=d},
$S:2}
A.c2L.prototype={
$1(d){return this.a.c=d},
$S:2}
A.c2M.prototype={
$1(d){return this.a.d=d},
$S:2}
A.c2N.prototype={
$0(){return this.b.IS(this.a.a,!0)},
$S:0}
A.c2O.prototype={
$0(){var w=this.c
w.w=w.f=null
this.b.ZA(this.a.a)},
$S:0}
A.c2P.prototype={
$0(){return this.b.IS(this.a.a,!1)},
$S:0}
A.c2Q.prototype={
$0(){var w=this.c
w.x=w.r=null
this.b.ZA(this.a.a)},
$S:0}
A.c2R.prototype={
$0(){var w=this
w.c.e=w.d
w.b.ZA(w.a.a)
w.e.$1(new A.c2H())},
$S:0}
A.c2H.prototype={
$0(){},
$S:0}
A.c2S.prototype={
$0(){var w=this,v=w.a,u=v.gzw().w.length
if((u===0?1:u)>1)v.d.cXv()
else w.b.bj9()
w.c.$0()
v.m(new A.c2F())
v.IT()
w.d.$1(new A.c2G())},
$S:0}
A.c2F.prototype={
$0(){},
$S:0}
A.c2G.prototype={
$0(){},
$S:0}
A.c2T.prototype={
$0(){C.a4(this.a,!1).O(null)
return null},
$S:0}
A.c3c.prototype={
$0(){return C.a4(this.a,!1).ic()},
$S:0}
A.c3d.prototype={
$0(){var w=this.a
return w.m(new A.c3b(w))},
$S:0}
A.c3b.prototype={
$0(){return this.a.y=!1},
$S:0}
A.c3e.prototype={
$0(){var w=this.a
return w.m(new A.c3a(w))},
$S:0}
A.c3a.prototype={
$0(){return this.a.y=!0},
$S:0}
A.fxT.prototype={
$1(d){return d.a===this.a},
$S:z+44}
A.fxU.prototype={
$0(){return D.d.gI(B.QX)},
$S:z+52}
A.bLG.prototype={
$1(d){return d.d.t(0,this.a.b)},
$S:z+44}
A.bLI.prototype={
$2(d,e){var w=this.a,v=this.b
return D.k.aK(w.aaj(d.c,d.d,new C.z(v.c,v.d)),w.aaj(e.c,e.d,new C.z(v.c,v.d)))},
$S:z+16}
A.bLJ.prototype={
$1(d){return d.f==null},
$S:z+70}
A.bLF.prototype={
$2(d,e){var w,v=d.w
if(v!==e.w)return v?-1:1
v=this.a
w=this.b
return D.k.aK(v.aZr(w,A.yK(d.c)),v.aZr(w,A.yK(e.c)))},
$S:z+38}
A.bLK.prototype={
$2(d,e){var w=D.o.aK(e.b,d.b)
return w!==0?w:D.o.aK(e.c,d.c)},
$S:1784}
A.bLH.prototype={
$2(d,e){var w,v,u=d.w
if(u!==e.w)return u?-1:1
u=this.a
w=this.b
v=this.c
return D.k.aK(u.aaj(w,v,A.yK(d.c)),u.aaj(w,v,A.yK(e.c)))},
$S:z+38}
A.bJL.prototype={
$2(d,e){return(d^D.k.V(e.c)*31+D.k.V(e.d))>>>0},
$S:z+83}
A.c0U.prototype={
$2(d,e){var w,v,u,t,s=null,r=this.a,q=r.c,p=q.d>0
if(p)w=0
else{w=q.c
w=w>0?(1-w/180)*0.5:q.a}v=r.e
if(p)p="\ud83d\udc1b"
else p=q.c>0?"\ud83d\ude34":"\u26a1"
u=x.p
w=C.a([A.fZg(v,p,w)],u)
p=q.e
if(p<0.3||q.f){t=q.f
if(t)p=0.2
t=t?"\ud83e\udd12":"\ud83d\udca7"
D.d.v(w,C.a([new C.a7(s,v/4,s,s),A.fZg(v*0.7,t,p)],u))}if(r.d)D.d.v(w,C.a([new C.a7(s,v/3,s,s),A.fZg(v,"\u26fd",q.b)],u))
return C.x(w,D.m,s,D.e,D.Q,0,D.p)},
$S:390}
A.fBc.prototype={
$4(d,e,f,g){var w=f+g/100
return new C.cw([d+100*Math.cos(w),e+100*Math.sin(w),-Math.sin(w),Math.cos(w)])},
$S:1785}
A.feV.prototype={
$1(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this.b,h=A.Lb(i,a0).a,g=h[0],f=h[1],e=h[2],d=h[3]
for(h=this.a,w=h.a,v=h.b,u=h.c,h=h.d,t=0;t<5;++t){s=B.cX4[t]
for(r=d*s,q=e*s,p=0;p<3;++p){o=B.daE[p]
n=i.a==="bus"
m=n?120:95.94999999999999
l=n?33.54:31.45
k=g+q*m-d*o*l
m=n?120:95.94999999999999
n=n?33.54:31.45
j=f+r*m+e*o*n
if(k>w&&k<v&&j>u&&j<h)return!0}}return!1},
$S:115}
A.bJN.prototype={
$1(d){return d<=0?0:Math.sqrt(220*d)},
$S:5}
A.fVX.prototype={
$7(d,e,f,g,h,i,j){return new A.fO(C.a([d,e,f,g],x.o),0,new A.fVY(h),i,j,6,2,0,!1)},
$S:z+112}
A.fVY.prototype={
$3(d,e,f){return A.ne(d,e,f,this.a+D.k.bh(f/7))},
$S:24}
A.fVV.prototype={
$3(d,e,f){var w=this.a,v=w.b
w=w.a
return A.vw(new A.q(d,e,f),this.b).a8(0,new A.q(v,0,w))},
$S:z+24}
A.fVW.prototype={
$2(d,e){var w=this
return A.vw(new A.q(d,e,0),w.a).a8(0,new A.q(w.b,w.c,w.d))},
$S:z+22}
A.fxr.prototype={
$8(d,e,f,g,h,i,j,k){var w=-g,v=new A.fxs(d+f*h+w*i,f,w,e+g*h+f*i,g,f),u=-j/2,t=-k/2,s=j/2,r=k/2
this.a.GC(v.$2(u,t),v.$2(s,t),v.$2(s,r),v.$2(u,r),D.bO,B.ea)},
$S:1786}
A.fxs.prototype={
$2(d,e){var w=this
return new A.q(w.a+w.b*d+w.c*e,0.95,w.d+w.e*d+w.f*e)},
$S:z+22}
A.cA_.prototype={
$1(d){return d.d===this.a},
$S:z+31}
A.cA0.prototype={
$1(d){return d.r},
$S:z+122}
A.czZ.prototype={
$2(d,e){return D.k.aK(d.x,e.x)},
$S:z+113}
A.bJz.prototype={
$1(d){var w
if(d.r<0)w=d.e||d.c<60
else w=!1
return w},
$S:z+17}
A.bJG.prototype={
$3(d,e,f){var w=this.a
return A.ne(d,e,f,w.b.a+w.f+D.k.bh(f/7))},
$S:24}
A.bJH.prototype={
$3(d,e,f){var w=this.a
return A.ne(d,e,f,w.b.a+w.f+3+D.k.bh(f/7))},
$S:24}
A.bJI.prototype={
$3(d,e,f){var w=this.a
return A.ne(d,e,f,w.b.a+w.f+7+D.k.bh(f/7))},
$S:24}
A.bJJ.prototype={
$3(d,e,f){return A.ne(d,e,f,this.a.b.a+2+D.k.bh(f/7))},
$S:24}
A.bJA.prototype={
$3(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=this.a,i=j.z
j=j.Q
w=e.a
v=e.b
u=new C.a3(0,0,0+w,0+v)
t=C.bt(u,D.ip)
s=$.S()
r=C.I()
r.r=D.dJ.gp(0)
d.az(t,r)
r=C.bt(u.cq(-6),D.kN)
t=C.I()
t.b=D.aa
t.c=5
t.r=D.b9.gp(0)
d.az(r,t)
t=D.k.bh(f*3)
q=new C.aF(s.r,D.ag,k,k,C.a([],x.g))
p=w*0.2
o=v*0.5
n=v*0.3
s=p+n
r=n*0.7
m=p-n
if(j){q.D(new C.aX(p,o-n))
j=o+r
q.D(new C.aq(s,j))
q.D(new C.aq(m,j))
q.D(new C.bs())}else{q.D(new C.aX(p,o+n))
j=o-r
q.D(new C.aq(s,j))
q.D(new C.aq(m,j))
q.D(new C.bs())}j=C.I()
j.r=((t&1)===0?D.b9:D.eW).gp(0)
d.aG(q,j)
j=i===1?"L":""+i
l=C.fu(k,k,k,k,C.cS(k,k,k,k,k,k,k,k,k,C.l(k,k,D.bG,k,k,k,k,k,k,k,k,v*0.78,k,k,D.u,k,k,!0,k,k,k,k,k,k,k,k),j),D.a3,D.bZ,k,D.dA,D.bW)
l.el()
j=l.b
i=j.c
j=j.a.c
l.a3(d,new C.t(w*0.62-i/2,v/2-j.gbb(j)/2))
return k},
$S:24}
A.bJB.prototype={
$3(d,e,f){return A.ne(d,e,f,1+D.k.bh(f/7))},
$S:24}
A.bJC.prototype={
$3(d,e,f){return A.ne(d,e,f,4+D.k.bh(f/7))},
$S:24}
A.bJD.prototype={
$2(d,e){var w=this.a,v=C.T(d),u=new C.cQ(new C.Z(d,new A.bJE(w),v.k("Z<1>")),new A.bJF(w),v.k("cQ<1,H>")).cI(0,0,D.AO)
if(u===2)w="works but is NOT wired safely: open it and check every wire"
else w=u===1?"started: finish the wiring":e
return w},
$S:1787}
A.bJE.prototype={
$1(d){return!this.a.d[d]},
$S:34}
A.bJF.prototype={
$1(d){return this.a.e[d]},
$S:74}
A.bKn.prototype={
$1(d){return!d.f},
$S:z+17}
A.bKk.prototype={
$1(d){return d.b===this.a.a.a},
$S:z+18}
A.bKl.prototype={
$1(d){return d.b===this.a&&d.c===this.b},
$S:z+18}
A.bKm.prototype={
$1(d){return d.a<0},
$S:z+33}
A.bKr.prototype={
$1(d){var w,v,u,t
for(w=this.a.x,v=w.length,u=0;u<v;++u){t=w[u]
if(t.b===d)return t}return null},
$S:z+99}
A.bKp.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n=this,m=new A.bKq()
switch(d.a.a){case 0:w=n.a.$1("hospital")
if(w!=null)return new C.ea([w.c-34,w.d+52.5+26,3.141592653589793,"duty","\ud83e\ude7a On duty at the hospital"])
break
case 1:v=n.a
u=v.$1("cow")
t=u==null?v.$1("sheep"):u
if(t==null)t=v.$1("horse")
if(t!=null){v=t.c
u=v+34
s=t.d
r=s+22
return new C.ea([u,r,m.$4(u,r,v,s),"feed","\ud83c\udf3e Feeding the animals"])}break
case 2:q=n.a.$1("school")
if(q!=null)return new C.ea([q.c-24,q.d+52.5+26,3.141592653589793,"teach","\ud83d\udcda Teaching"])
break
case 3:t=n.a.$1("car")
if(t!=null)return new C.ea([t.c,t.d+34,3.141592653589793,"wash","\ud83e\uddfd Washing the car"])
break
case 4:q=n.a.$1("shop")
if(q!=null)return new C.ea([q.c+62,q.d+56,2.356194490192345,"cook","\ud83c\udf73 Cooking"])
break
case 5:p=n.a.$1("bench")
if(p!=null)return new C.ea([p.c,p.d+26,3.141592653589793,"rest","\ud83e\ude91 Resting"])
break
case 6:o=n.a.$1("flowers")
if(o!=null){v=o.c
u=v+30
s=o.d
r=s+28
return new C.ea([u,r,m.$4(u,r,v,s),"water","\ud83d\udca7 Watering the flowers"])}break}return new C.ea([-270+e*90,205,0,"",""])},
$S:z+82}
A.bKq.prototype={
$4(d,e,f,g){return Math.atan2(f-d,g-e)},
$S:326}
A.bKo.prototype={
$1(d){return d.b===this.a.a.a},
$S:z+18}
A.bKs.prototype={
$1(d){var w=d.c
return w==="bathroom"||w==="kitchen"},
$S:z+5}
A.dRo.prototype={
$0(){return this.b.d=this.a.a},
$S:0}
A.dRp.prototype={
$1(d){return this.a.c7w()},
$S:11}
A.dRB.prototype={
$0(){},
$S:0}
A.dRv.prototype={
$0(){return this.a.w=this.b},
$S:0}
A.dRw.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.dRu(w))},
$S:0}
A.dRu.prototype={
$0(){return this.a.w=null},
$S:0}
A.dRk.prototype={
$1(d){return B.aHB},
$S:z+34}
A.dRl.prototype={
$0(){},
$S:0}
A.dRE.prototype={
$1(d){return B.aHB},
$S:z+34}
A.dRF.prototype={
$0(){},
$S:0}
A.dRD.prototype={
$0(){var w=this.a
return w.m(new A.dRC(w,this.b))},
$S:0}
A.dRC.prototype={
$0(){return this.a.r=this.b},
$S:0}
A.dRj.prototype={
$0(){return this.a.abL(this.b)},
$S:0}
A.dRq.prototype={
$0(){return this.a.J2(this.b.bex(this.c))},
$S:0}
A.dRr.prototype={
$0(){return this.a.J2(this.b.aKx(this.c))},
$S:0}
A.dRs.prototype={
$0(){return this.a.J2(this.b.aDc(this.c))},
$S:0}
A.dRt.prototype={
$0(){return this.a.ajZ(this.b)},
$S:0}
A.dRn.prototype={
$1(d){var w,v,u=null,t=this.b,s=this.c,r=t.e[s],q=t.c
q===$&&C.c()
q=q[r.a].a
w=this.a
v=x.p
s=C.B(C.a([new A.acE(q.e,44,u),D.at,C.E(C.d("Bed "+(s+1)+": "+q.b,u,u,u,u,u,u,D.hD,u,u,u),1),w.PO("\ud83d\udc89 Treat",new A.dRm(w,t,s),D.cs)],v),D.m,u,D.e,D.i,0,u,u)
t=r.b
return C.x(C.a([s,D.O,w.Wu("Care",t,t<30?D.aw:D.aQ),w.Wu("Getting better",r.c,D.bj)],v),D.E,u,D.e,D.i,0,D.p)},
$S:309}
A.dRm.prototype={
$0(){return this.a.J2(this.b.bjL(this.c))},
$S:0}
A.dRy.prototype={
$0(){return this.a.J2(this.b.aDI("food"))},
$S:0}
A.dRz.prototype={
$0(){return this.a.J2(this.b.aDI("medicine"))},
$S:0}
A.dRA.prototype={
$0(){var w=0,v=C.j(x.H),u,t=this,s,r
var $async$$0=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:w=3
return C.b(A.aTC(),$async$$0)
case 3:$.E7=null
s=t.a
if(s.c==null){w=1
break}r=s.f
if(r!=null)r.a4(0)
$.ajO=null
s.m(new A.dRx(s))
s.ZU()
case 1:return C.h(u,v)}})
return C.i($async$$0,v)},
$S:1}
A.dRx.prototype={
$0(){return this.a.d=null},
$S:0}
A.dRG.prototype={
$0(){return C.a4(this.a,!1).ic()},
$S:0}
A.dRH.prototype={
$1(d){return d.a>=0},
$S:z+33}
A.fzm.prototype={
$2(d,e){var w
A:{if("black"===d){w=e.a===25?"The black wire carries the power (hot). It never goes on the green ground screw. Hot goes to a BRASS screw.":"The black (hot) wire goes on a BRASS screw, not on the silver one. Silver is for white (neutral)."
break A}if("white"===d){w=e.a===25?"The white wire is the neutral. The green screw is only for the ground wire. Neutral goes to a SILVER screw.":"The white (neutral) wire goes on a SILVER screw, not on brass. Brass is for the black (hot) wire."
break A}w="The bare copper ground wire only goes on the GREEN screw. It keeps you safe if something goes wrong."
break A}return w},
$S:z+3}
A.fzn.prototype={
$2(d,e){return d==="ground"?y.t:"A black (hot) wire never goes on the green ground screw. The two black wires go on the two BRASS screws."},
$S:z+3}
A.fzo.prototype={
$2(d,e){var w
if(e.e)w="Those are the LOAD screws. They are covered with tape because power must come in on the LINE side. If you wire the LOAD side the GFCI will not protect you."
else A:{if("black"===d){w="The black (hot) wire goes on the BRASS LINE screw."
break A}if("white"===d){w="The white (neutral) wire goes on the SILVER LINE screw."
break A}w=y.t
break A}return w},
$S:z+3}
A.fzp.prototype={
$2(d,e){var w
A:{if("black"===d){w="The black (hot) wire joins the fixture BLACK wire. Not the white one, and never the green ground."
break A}if("white"===d){w="The white (neutral) wire joins the fixture WHITE wire. Not the black one, and never the green ground."
break A}w="The bare copper ground wire joins the fixture GREEN ground wire only."
break A}return w},
$S:z+3}
A.fzq.prototype={
$2(d,e){var w
A:{if("black"===d){w="The black (hot) wire joins the fan BLACK wire. Not the white one, and never the green ground."
break A}if("white"===d){w="The white (neutral) wire joins the fan WHITE wire. Not the black one, and never the green ground."
break A}w="The bare copper ground wire joins the fan GREEN ground wire only."
break A}return w},
$S:z+3}
A.fy2.prototype={
$1(d){return d.a===this.a},
$S:z+42}
A.fWx.prototype={
$1(d){return d.a},
$S:z+59}
A.fxe.prototype={
$1(d){var w
A:{if("hot"===d){w=B.Vt
break A}if("neutral"===d){w=B.Vu
break A}if("ground"===d){w=B.Vv
break A}w=B.aXd
break A}return w},
$S:z+57}
A.fxf.prototype={
$1(d){var w
A:{if("hot"===d){w=B.JL
break A}if("neutral"===d){w=B.JM
break A}if("ground"===d){w=B.JN
break A}w=B.aRJ
break A}return w},
$S:z+48}
A.fxc.prototype={
$1(d){return d.a===this.a.a},
$S:z+13}
A.fxd.prototype={
$1(d){return d.a===this.a.b},
$S:z+7}
A.fNP.prototype={
$1(d){return d.e==="hot"},
$S:z+7}
A.fNQ.prototype={
$1(d){return d.e==="neutral"},
$S:z+7}
A.fyf.prototype={
$1(d){return D.d.b3(this.a.b,new A.fyg(d))},
$S:3}
A.fyg.prototype={
$1(d){return d.a===this.a},
$S:z+45}
A.fyc.prototype={
$2(d,e){return A.av9(e.b)>A.av9(d.b)?e:d},
$S:z+49}
A.fyd.prototype={
$1(d){return d.a===this.a.a},
$S:z+13}
A.fye.prototype={
$1(d){return d.a===this.a.b},
$S:z+7}
A.fvt.prototype={
$5(d,e,f,g,h){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=j.a
i.b=d
w=j.b
v=w.b
u=C.a6(v).k("cH<1,2>")
t=u.k("Z<L.E>")
s=C.C(new C.Z(new C.cH(v,u),new A.fvu(g),t),t.k("L.E"))
r=g==="ground"
q=r?B.vI:h
p=r?0.6:0.3
if(w.c>0){o=e.a8(0,B.h6Q)
i.jh(A.ai0(C.a([e,e.a8(0,B.h4P),o],x.o),4),0.12,q,!1,p,8)
return}if(s.length!==0){n=A.aPB(j.c,D.d.gI(s).a,w)
w=A.o2(e,n,0.5)
v=n.a>0
m=w.a8(0,new A.q(v?0.5:-0.5,0.2,0.9))
w=e.a8(0,B.hb5)
if(j.d)v=0
else v=v?0.06:-0.06
l=A.ai0(C.a([e,w,m,n.a8(0,new A.q(v,0,0.08)),n],x.o),5)
k=D.d.ds(l,0,D.k.bh(l.length*0.8))
i.jh(k,0.12,q,!1,p,8)
if(!r)i.jh(D.d.fJ(l,k.length-1),0.08639999999999999,B.vI,!1,0.6,8)}else{l=A.ai0(C.a([e,e.a8(0,B.h10),A.o2(e,f,0.6),f],x.o),5)
k=r?l:D.d.ds(l,0,D.k.bh(l.length*0.86))
i.jh(k,0.12,q,!1,p,8)
if(!r)i.jh(D.d.fJ(l,k.length-1),0.08639999999999999,B.vI,!1,0.6,8)}},
$S:z+50}
A.fvu.prototype={
$1(d){return d.b===this.a},
$S:724}
A.fgF.prototype={
$2(d,e){var w,v=this.a
v.b=d
w=A.H2(e,0.9,6)
if(this.b)v.jh(w,0.2,B.Yh,!1,0.35,10)
this.c.push(D.d.gak(w))},
$S:z+51}
A.fWw.prototype={
$1(d){return d.a===this.a},
$S:z+42}
A.fhZ.prototype={
$6$taped(d,e,f,g,h,i){var w,v,u,t=this.a
t.e=0.9
t.b=d
w=this.b
v=w.a+e*0.75
u=w.b+f
w=w.c-0.45
t.aZ(new A.q(v,u,w),B.hcD,h,0.7)
t.dR(new A.q(v,u,w),new A.q(v+e*0.22,u,w),0.17,g,0.9,12)
t.aO(new A.q(v+e*0.23,u,w),B.h90,B.F2)
if(i)t.aZ(new A.q(v+e*0.05,u,w),B.h8R,D.bG,0.2)},
$5(d,e,f,g,h){return this.$6$taped(d,e,f,g,h,!1)},
$S:1789}
A.fzr.prototype={
$2(d,e){var w
if(d==="ground")w=y.t
else w=e.a===25?y.T:"A double-pole switch has two LINE screws on top (power in) and two LOAD screws on the bottom (power out to the heater). Each leg goes straight down the same side: left leg on the left screws, right leg on the right ones."
return w},
$S:z+3}
A.fzs.prototype={
$2(d,e){var w
if(d==="ground")w=y.t
else if(e.a===25)w=y.T
else w=d==="common"?"The COMMON wire does not go on a traveler screw. It goes on the odd-coloured COMMON screw.":"The travelers go on the two brass TRAVELER screws. The COMMON screw is for the black power wire only."
return w},
$S:z+3}
A.fzt.prototype={
$2(d,e){var w
if(d==="ground")w=y.t
else w=e.a===25?"A traveler never goes on the green ground screw.":"A four-way has a pair of screws for the travelers coming IN (top) and a pair for the travelers going OUT (bottom). Do not mix the two pairs."
return w},
$S:z+3}
A.fzu.prototype={
$2(d,e){var w
A:{if("ground"===d){w=y.t
break A}if("neutral"===d){w="The white neutral wire goes on the silver NEUTRAL screw only."
break A}if(e.a===25)w=y.T
else w=d==="line"?"The wire from the panel is the LINE: it goes on the LINE screw.":"The wire to the light is the LOAD: it goes on the LOAD screw."
break A}return w},
$S:z+3}
A.fzv.prototype={
$2(d,e){var w
if(d==="ground")w=y.t
else if(e.a===25)w=y.T
else w=d==="feed"?"The feed goes on the FEED screw, where the two switches are joined.":"The wires to the lights go on the separate screws, one for each switch."
return w},
$S:z+3}
A.fzw.prototype={
$2(d,e){var w,v=y.T
A:{if("ground"===d){w=y.t
break A}if("neutral"===d){w="The white neutral wire goes on a SILVER screw."
break A}if("always"===d){w=e.a===25?v:"The always-hot wire goes on the BOTTOM brass screw. The top one is for the switched wire."
break A}w=e.a===25?v:"The switched hot wire (red) goes on the TOP brass screw."
break A}return w},
$S:z+3}
A.fzx.prototype={
$2(d,e){var w
A:{if("ground"===d){w=y.t
break A}if("neutral"===d){w=y.I
break A}w=e.a===25?y.T:"The black and red hot wires go on the two brass screws, X and Y. The silver W screw is for the neutral."
break A}return w},
$S:z+3}
A.fzy.prototype={
$2(d,e){return d==="neutral"?y.I:"The black and red hot wires go on the two brass screws, X and Y."},
$S:z+3}
A.fzz.prototype={
$2(d,e){var w
if(d==="ground")w=y.t
else w=e.a===25?y.T:"Both hot wires go on the two brass screws."
return w},
$S:z+3}
A.fzA.prototype={
$2(d,e){var w
A:{if("isoground"===d){w="The isolated ground wire only goes on the green screw with the orange triangle."
break A}if("neutral"===d){w=y.c
break A}w=e.a===25?"A hot wire never goes on the ground screw.":y.u
break A}return w},
$S:z+3}
A.fvf.prototype={
$1(d){return d.a===this.a},
$S:z+26}
A.fvg.prototype={
$0(){return B.am0},
$S:z+53}
A.fWt.prototype={
$1(d){var w=d>60?62:99
return Math.min(d*0.5625,w)},
$S:5}
A.fWq.prototype={
$1(d){return d>40?30+d/2:58},
$S:5}
A.fWr.prototype={
$2(d,e){return D.k.aK(d.a,e.a)},
$S:1790}
A.fWs.prototype={
$2(d,e){var w=this.a
if(e-d>w.a-w.b){w.b=d
w.a=e}},
$S:250}
A.bTH.prototype={
$1(d){return d},
$S:119}
A.bTG.prototype={
$1(d){return B.f1S.t(0,d.b)},
$S:z+4}
A.bUh.prototype={
$1(d){return d.a==="Jobs"},
$S:z+55}
A.bUi.prototype={
$1(d){return new A.oj(!1,"back",d,5)},
$S:z+56}
A.bUj.prototype={
$4(d,e,f,g){return!D.d.b3(this.a.x,new A.bUk(d,f,e,g))},
$2(d,e){return this.$4(d,e,135,115)},
$3(d,e,f){return this.$4(d,e,f,115)},
$S:1791}
A.bUk.prototype={
$1(d){var w=this,v=d.b
return!D.d.t(B.a4Z,v)&&!D.d.t(B.HP,v)&&Math.abs(d.c-w.a)<w.b&&Math.abs(d.d-w.c)<w.d},
$S:z+4}
A.bUl.prototype={
$4(d,e,f,g){var w,v,u,t,s,r,q,p,o,n
for(w=this.a,v=w.length,u=f/2+90,t=g/2+20,s=0;s<v;++s){r=w[s]
if(Math.abs(r.c-d)<u){q=r.d
p=q>e?70:30
p=Math.abs(q-e)<t+p
q=p}else q=!1
if(q)return!1}for(w=this.b.x,v=w.length,s=0;s<w.length;w.length===v||(0,C.M)(w),++s){o=w[s]
u=o.b
if(D.d.t(B.RA,u)||u==="roundabout"||u==="rug"||u==="flowers")continue
n=B.hy.h(0,u)
if(Math.abs(o.c-d)<(f+n.c)/2+130){u=o.d
t=n.d
q=u>e?150:110
q=Math.abs(u-e)<(g+t)/2+q
u=q}else u=!1
if(u)return!1}return!0},
$S:725}
A.bUp.prototype={
$4(d,e,f,g){var w,v,u,t,s,r,q,p,o,n,m,l,k,j
if(Math.abs(d)>1150||e<-600||e>1450)return!1
for(w=this.a.x,v=w.length,u=f/2+40,t=g/2+40,s=0;s<w.length;w.length===v||(0,C.M)(w),++s){r=w[s]
q=r.b
if(q==="rug"||q==="flowers"||q==="pond")continue
p=B.hy.h(0,q)
p.toString
o=(r.e&1)===1
n=o?p.d:p.c
m=o?p.c:p.d
if(Math.abs(r.c-d)<(f+n)/2+34&&Math.abs(r.d-e)<(g+m)/2+34)return!1
if(B.f24.t(0,q)){l=r.e*3.141592653589793/2
q=r.c
o=Math.sin(l)
p=p.d/2+30
k=r.d
j=Math.cos(l)
if(Math.abs(q+o*p-d)<u&&Math.abs(k+j*p-e)<t)return!1}}return!0},
$S:725}
A.bUm.prototype={
$3(d,e,f){var w,v,u,t,s,r,q,p,o,n={},m=B.hy.h(0,d)
m.toString
w=n.a=0
v=this.a
u=new A.bUo(n,v,d)
for(t=f.length,s=this.b,r=m.c,m=m.d;w<t;++w){q=f[w]
p=q.a
o=q.b
if(n.a>=e)return
if(s.$4(p,o,r,m))u.$2(p,o)}v=v.x
o=-500
for(;;){if(!(o<1400&&n.a<e))break
p=-1100
for(;;){if(!(p<=1100&&n.a<e))break
A:{if(D.d.b3(v,new A.bUn(d,p,o)))break A
if(s.$4(p,o,r,m))u.$2(p,o)}p+=110}o+=100}},
$S:1793}
A.bUo.prototype={
$2(d,e){var w=this.b,v=this.c
w.dz(0,v,d,e)
if(v==="ubstation")w.dz(0,"car",d+96,e+6);++this.a.a},
$S:250}
A.bUn.prototype={
$1(d){return d.b===this.a&&Math.abs(d.c-this.b)<420&&Math.abs(d.d-this.c)<420},
$S:z+4}
A.bUt.prototype={
$1(d){return d.gkL()},
$S:z+5}
A.bUs.prototype={
$1(d){var w=d.c
return(w==="bathroom"||w==="kitchen")&&d.gjQ()},
$S:z+5}
A.bUr.prototype={
$1(d){var w=d.c
return w==="bathroom"||w==="kitchen"},
$S:z+5}
A.bUq.prototype={
$1(d){return d.gkL()&&d.gjQ()},
$S:z+5}
A.ec5.prototype={
$1(d){return!(d.gkL()&&d.gjQ())},
$S:z+5}
A.ec2.prototype={
$1(d){var w,v=this.a.a.f
A:{if("wiring"===v){w=!d.gkL()
break A}if("plumbing"===v){w=!d.gjQ()
break A}w=!(d.gkL()&&d.gjQ())
break A}return w},
$S:z+5}
A.ec3.prototype={
$1(d){var w,v,u,t,s,r,q=this.a,p=q.ghI()
if(Date.now()<0){if(q.c!=null)q.m(new A.ec1())
return}if(p==null||q.c==null||q.cx!=null||q.bZ>0)return
w=q.d
w===$&&C.c()
v=w.d
v===$&&C.c()
u=p.beI(w,v[w.e].a)
w=C.a([],x.s)
for(v=u.length,t=0;t<u.length;u.length===v||(0,C.M)(u),++t){s=u[t]
w.push(""+s.a+":"+D.k.V(s.c)+":"+D.k.V(s.d)+":"+s.x+":"+s.Q)}r=D.d.aH(w,"|")
if(q.aJ==null&&r!==q.du){q.du=r
q.m(q.giV())}w=p.f
if(w.length!==0&&D.d.gI(w)!==q.fy){w=D.d.gI(w)
q.fy=w
q.iD(w)}},
$S:11}
A.ec1.prototype={
$0(){},
$S:0}
A.ec4.prototype={
$1(d){var w,v=this.a
if(v.c==null)return
w=v.d
w===$&&C.c()
if(w.a.length!==0)v.iD(v.c1r())
else{w=v.a.f
if(w.length!==0){A:{if("wiring"===w){w="This room needs wiring: press the Wiring button, or tap the red outlet or the light."
break A}if("plumbing"===w){w="This room needs plumbing: press the Plumbing button, or tap the toilet or the sink."
break A}w="Walk through the house and fix what the signs say is wrong."
break A}v.iD(w)}}},
$S:9}
A.eaQ.prototype={
$0(){var w=this.a
w.ax=this.b
w.ay=this.c},
$S:0}
A.eaR.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.eaP(w))},
$S:0}
A.eaP.prototype={
$0(){return this.a.ax=null},
$S:0}
A.eaS.prototype={
$0(){var w=this.a
w.r=this.b
w.Q=0
w.as=-1
w.at=0
w.iC()},
$S:0}
A.e9o.prototype={
$0(){var w=this.a,v=w.d
v===$&&C.c()
v.e=this.b
w.Q=0
w.as=-1
w.at=0
w.ax=null
w.iC()},
$S:0}
A.ebi.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.d
w===$&&C.c()
u=w[u.e]
u.fy=!u.fy
v.iC()},
$S:0}
A.eal.prototype={
$0(){return this.a.k3=!0},
$S:0}
A.eam.prototype={
$0(){var w=this.a,v=this.b
w.Q=v-100
w.at=v
w.iC()},
$S:0}
A.ean.prototype={
$0(){var w=this.a,v=this.b
w.as=v-300
w.at=v},
$S:0}
A.eao.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&C.c()
w=t.d
w===$&&C.c()
v=this.b
if(!w[t.e].at.W(0,v)){t=u.d
w=t.d
w===$&&C.c()
w[t.e].at.M(0,v)}u.iC()},
$S:0}
A.eap.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.d
w===$&&C.c()
w[u.e].p2=!0
v.iC()},
$S:0}
A.e8S.prototype={
$1(d){var w,v,u,t,s,r=this,q=null,p=C.d("Door to "+r.b,q,q,q,q,q,q,D.dd,q,q,q),o=r.a,n=o.d
n===$&&C.c()
w=n.d
w===$&&C.c()
v=r.c
u=C.d(w[n.e].at.t(0,v)?"The door is open.":"The door is closed.",q,q,q,q,q,q,D.lN,q,q,q)
n=o.d
w=n.d
w===$&&C.c()
t=C.X(w[n.e].at.t(0,v)?B.bK5:B.bKh,q,q,q,q,q)
n=o.d
w=n.d
w===$&&C.c()
s=x.p
return C.bl(!0,new C.D(D.bQ,C.x(C.a([p,D.au,u,D.ae,C.bW(D.bC,C.a([C.dl(t,C.d(w[n.e].at.t(0,v)?"Close the door":"Open the door",q,q,q,q,q,q,q,q,q,q),new A.e8Q(o,d,v),q),C.et(D.ap5,B.fBT,new A.e8R(o,d,v,r.d),q)],s),D.bq,q,10,10)],s),D.E,q,D.e,D.Q,0,D.p),q),!0,!1,D.af,!0,!0)},
$S:25}
A.e8Q.prototype={
$0(){var w,v,u
C.a4(this.b,!1).O(null)
w=this.a
v=this.c
w.m(new A.e8P(w,v))
w=w.d
w===$&&C.c()
u=w.d
u===$&&C.c()
A.fV(u[w.e].at.t(0,v)?700:450,70,0.25,"tri")},
$S:0}
A.e8P.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&C.c()
w=t.d
w===$&&C.c()
v=this.b
if(!w[t.e].at.W(0,v)){t=u.d
w=t.d
w===$&&C.c()
w[t.e].at.M(0,v)}u.iC()},
$S:0}
A.e8R.prototype={
$0(){var w,v,u=this
C.a4(u.b,!1).O(null)
w=u.a
v=u.c
w.m(new A.e8N(w,v))
A.fV(700,70,0.25,"tri")
C.bP(D.mD,new A.e8O(w,v,u.d),x.P)},
$S:0}
A.e8N.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.d
w===$&&C.c()
w[u.e].at.M(0,this.b)
v.iC()},
$S:0}
A.e8O.prototype={
$0(){var w=this.a
if(w.c==null)return
w.m(new A.e8M(w,this.b))
w.Az(this.c)},
$S:12}
A.e8M.prototype={
$0(){var w,v=this.a.d
v===$&&C.c()
w=v.d
w===$&&C.c()
return w[v.e].at.W(0,this.b)},
$S:0}
A.e90.prototype={
$0(){return this.a.eu=!0},
$S:0}
A.e91.prototype={
$0(){var w=this.a
w.f1=!0
w.fw=!1
w.R8=!w.p4},
$S:0}
A.e92.prototype={
$0(){var w=this.a
w.R8=w.f1=!1},
$S:0}
A.eae.prototype={
$2(d,e){var w=null,v=D.w.j(0.55),u=C.J(D.bY,D.r,1)
return C.aB(w,C.p(w,C.X(d,D.c,w,w,w,22),D.f,w,w,new C.o(v,w,u,w,w,w,D.a6),w,44,w,D.N5,w,w,w,44),D.y,!1,w,new A.eag(this.a),w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,e,w,w,w,w,w,w,!1,D.a4)},
$S:347}
A.eag.prototype={
$0(){var w=this.a
return w.m(new A.eaf(w))},
$S:0}
A.eaf.prototype={
$0(){return this.a.fw=!0},
$S:0}
A.eah.prototype={
$0(){var w=this.a
return w.m(new A.ead(w))},
$S:0}
A.ead.prototype={
$0(){return this.a.fw=!1},
$S:0}
A.eai.prototype={
$0(){var w=this.a
return w.p4?w.a2D():w.m(new A.eac(w))},
$S:0}
A.eac.prototype={
$0(){return this.a.R8=!0},
$S:0}
A.eaj.prototype={
$0(){var w=this.a
return w.m(new A.eab(w))},
$S:0}
A.eab.prototype={
$0(){var w=this.a
return w.h5=!w.h5},
$S:0}
A.eak.prototype={
$0(){var w=this.a
return w.m(new A.eaa(w))},
$S:0}
A.eaa.prototype={
$0(){return this.a.ai=!0},
$S:0}
A.e8s.prototype={
$0(){var w=this.a
return w.m(new A.e8t(w))},
$S:0}
A.e8t.prototype={
$0(){return this.a.ai=!1},
$S:0}
A.e9c.prototype={
$2(d,e){var w=null,v=D.w.j(0.55),u=C.J(D.bY,D.r,1)
return C.aB(w,C.p(w,C.X(d,D.c,w,w,w,20),D.f,w,w,new C.o(v,w,u,w,w,w,D.a6),w,40,w,D.iA,w,w,w,40),D.y,!1,w,new A.e9e(this.a),w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,e,w,w,w,w,w,w,!1,D.a4)},
$S:347}
A.e9e.prototype={
$0(){var w=this.a
return w.m(new A.e9d(w))},
$S:0}
A.e9d.prototype={
$0(){return this.a.fw=!0},
$S:0}
A.e9f.prototype={
$0(){var w=this.a
return w.m(new A.e9b(w))},
$S:0}
A.e9b.prototype={
$0(){return this.a.fw=!1},
$S:0}
A.e9g.prototype={
$0(){var w,v,u=this.a
u.m(new A.e9a(u))
w=u.d
w===$&&C.c()
v=w.d
v===$&&C.c()
if(v[w.e].c!=="outside")u.xX()},
$S:0}
A.e9a.prototype={
$0(){return this.a.eu=!1},
$S:0}
A.e9h.prototype={
$0(){var w=this.a
return w.m(new A.e99(w))},
$S:0}
A.e99.prototype={
$0(){var w=this.a
return w.ab=w.ab===1?3:1},
$S:0}
A.e9i.prototype={
$0(){var w=this.a
return w.m(new A.e98(w))},
$S:0}
A.e98.prototype={
$0(){var w=this.a
return w.h5=!w.h5},
$S:0}
A.e9j.prototype={
$0(){var w=this.a
return w.m(new A.e97(w))},
$S:0}
A.e97.prototype={
$0(){return this.a.ai=!0},
$S:0}
A.e9k.prototype={
$0(){var w=this.a
return w.p4?w.a2D():w.m(new A.e96(w))},
$S:0}
A.e96.prototype={
$0(){return this.a.R8=!0},
$S:0}
A.ebg.prototype={
$2$mine(d,e){var w=null,v=e?D.a8:D.a5,u=e?D.bk:D.e7,t=C.m(18)
return new C.bM(v,w,w,C.p(w,C.d(d,w,w,w,w,w,w,B.aSK,w,w,w),D.f,w,B.acK,new C.o(u,w,w,t,w,w,D.n),w,w,w,D.ct,D.iB,w,w,w),w)},
$1(d){return this.$2$mine(d,!1)},
$S:1794}
A.ebh.prototype={
$1(d){var w=this,v=null,u=w.b,t=u.b,s=x.p,r=C.B(C.a([C.h7(u.e.c,v,C.d(t[0],v,v,v,v,v,v,D.iK,v,v,v),v,18),D.at,C.d(t,v,v,v,v,v,v,D.k4,v,v,v),D.b0,B.fNy],s),D.m,v,D.e,D.i,0,v,v),q=w.c,p=w.d,o=q.$1("Hi, it's "+t+". "+p.d),n=w.e,m="Please come to "+n,l=w.a
return C.bl(!0,new C.D(A7.yf,C.x(C.a([r,N.MV,o,q.$1(p.c==="power"?m+" and fix the wiring. I can't stay in the dark.":m+" and fix the leak before it floods."),q.$1("I'll pay "+p.e+" points. Thank you!"),q.$2$mine("On my way!",!0),D.am,C.bW(D.bC,C.a([C.dl(B.bUM,C.d("Show me where "+t+" is",v,v,v,v,v,v,v,v,v,v),new A.ebe(l,d,p,u),v),C.dl(B.bXH,C.d("Go and fix it ("+n+")",v,v,v,v,v,v,v,v,v,v),new A.ebf(l,d,w.f,n),v)],s),D.bq,v,8,10)],s),D.E,v,D.e,D.Q,0,D.p),v),!0,!1,D.af,!0,!0)},
$S:25}
A.ebe.prototype={
$0(){var w,v,u,t,s=this
C.a4(s.b,!1).O(null)
w=s.a
v=w.fr
u=C.T(v).k("Z<1>")
t=C.C(new C.Z(v,new A.ebd(s.c),u),u.k("L.E"))
if(t.length!==0){v=w.d
v===$&&C.c()
u=v.d
u===$&&C.c()
v=u[v.e].c==="outside"}else v=!1
if(v){v=w.e
v===$&&C.c()
v.xh(160,new A.q(D.d.gI(t).c,30,D.d.gI(t).d))}w.eh(s.d.b+" is the one with the phone sign.",!0)},
$S:0}
A.ebd.prototype={
$1(d){return d.a===this.a.b},
$S:z+14}
A.ebf.prototype={
$0(){var w,v=this
C.a4(v.b,!1).O(null)
w=v.a
if(w.aL)w.a2E()
w.eu=!1
w.Az(v.c)
w.eh("You are in "+v.d+". Fix the problem with the Wiring or Plumbing button.",!0)},
$S:0}
A.e9C.prototype={
$0(){var w=this.a
w.x=!0
w.z=!1
w.r="ceiling"
w.iC()},
$S:0}
A.e7r.prototype={
$1(d){return d.c==="outside"},
$S:z+5}
A.ebJ.prototype={
$1(d){return d.c==="outside"},
$S:z+5}
A.e7S.prototype={
$0(){},
$S:0}
A.e9x.prototype={
$0(){var w=this.a
return w.m(new A.e9w(w))},
$S:0}
A.e9w.prototype={
$0(){return this.a.id=!1},
$S:0}
A.e9y.prototype={
$0(){var w=this.a
return w.m(new A.e9v(w))},
$S:0}
A.e9v.prototype={
$0(){return this.a.id=!1},
$S:0}
A.ebK.prototype={
$1(d){var w=this.b
return d.d===this.a.aqj(w.f,w.r)},
$S:z+31}
A.ebI.prototype={
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
return D.k.aK((m-j)*(m-w)+(v-u)*(v-t),(s-r)*(s-q)+(p-o)*(p-l))},
$S:z+16}
A.eaW.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=d.a==="tank"?A.h5s(l.a.c5.b):d.e,i=l.b
i=i==null?k:i.r
w=(i==null?0:i)>=j
i=l.c
v=i?112:1/0
u=i?8:12
t=i?8:10
s=D.c.j(0.07)
r=C.m(16)
q=C.J(w?D.bG.j(0.5):D.bz,D.r,1)
p=d.b
o=d.c
n=d.d
if(i){i=C.d(p,k,k,k,k,k,k,D.wT,k,k,k)
o=C.d(o,k,1,D.a1,k,k,k,D.Ka,D.L,k,k)
n=C.d(n,k,2,D.a1,k,k,k,B.fjk,D.L,k,k)
p=w?D.bG:D.bz
m=C.m(12)
i=C.x(C.a([i,D.bD,o,n,D.fQ,C.p(k,C.d(""+j+" \u2b50",k,k,k,k,k,k,C.l(k,k,w?D.w:D.bY,k,k,k,k,k,k,k,k,13,k,k,D.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),D.f,k,k,new C.o(p,k,k,m,k,k,D.n),k,k,k,k,D.G_,k,k,k)],x.p),D.m,k,D.e,D.Q,0,D.p)}else{i=C.d(p,k,k,k,k,k,k,D.nH,k,k,k)
p=x.p
n=C.E(C.x(C.a([C.d(o,k,k,k,k,k,k,D.nF,k,k,k),C.d(n,k,k,k,k,k,k,B.aSa,k,k,k)],p),D.E,k,D.e,D.i,0,D.p),1)
o=w?D.bG:D.bz
m=C.m(14)
i=C.B(C.a([i,D.at,n,C.p(k,C.d(""+j+" \u2b50",k,k,k,k,k,k,C.l(k,k,w?D.w:D.bY,k,k,k,k,k,k,k,k,k,k,k,D.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),D.f,k,k,new C.o(o,k,k,m,k,k,D.n),k,k,k,k,D.no,k,k,k)],p),D.m,k,D.e,D.i,0,k,k)}return C.aB(k,C.p(k,i,D.f,k,k,new C.o(s,k,q,r,k,k,D.n),k,k,k,D.ct,new C.Q(u,t,u,t),k,k,v),D.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new A.eaX(l.a,d),k,k,k,k,k,k,!1,D.a4)},
$S:z+124}
A.eaX.prototype={
$0(){return this.a.aP4(this.b)},
$S:0}
A.eaV.prototype={
$2(d,e){var w,v,u,t=null,s=x.p,r=C.a([new C.D(B.bwR,C.d(d,t,t,t,t,t,t,B.fpA,t,t,t),t)],s)
if(this.a){s=C.a([],s)
for(w=e.length,v=this.b,u=0;u<w;++u)s.push(v.$1(e[u]))
r.push(C.bW(D.bC,s,D.bq,t,0,8))}else for(s=e.length,w=this.b,u=0;u<s;++u)r.push(w.$1(e[u]))
return C.x(r,D.E,t,D.e,D.Q,0,D.p)},
$S:z+63}
A.eaU.prototype={
$0(){var w=this.a
return w.m(new A.eaT(w))},
$S:0}
A.eaT.prototype={
$0(){return this.a.k2=!1},
$S:0}
A.e9W.prototype={
$2(d,e){var w=null,v=e.j(0.2),u=C.m(10)
return C.p(w,C.d(d,w,w,w,w,w,w,C.l(w,w,e,w,w,w,w,w,w,w,w,11.5,w,w,D.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),D.f,w,w,new C.o(v,w,w,u,w,w,D.n),w,w,w,w,D.fO,w,w,w)},
$S:1795}
A.e9X.prototype={
$1(d){return B.hy.h(0,d.b).a},
$S:z+64}
A.e9T.prototype={
$1(d){var w,v,u,t,s=this,r=null,q=d.c,p=A.yK(q),o=D.k.V(Math.sqrt(Math.pow(p.a-s.b,2)+Math.pow(p.b-s.c,2))/10),n=D.c.j(0.07),m=C.m(16),l=C.J(D.bz,D.r,1),k=d.b,j=C.d(A.L6(k).b,r,r,r,r,r,r,D.nH,r,r,r),i=s.d
k=C.d(d.w?"\ud83d\ude91 "+A.L6(k).c+": "+C.w(i.$1(q))+" \u2192 "+C.w(i.$1(d.d))+" (somebody was run over)":A.L6(k).c+": "+C.w(i.$1(q))+" \u2192 a house",r,r,r,r,r,r,B.aTH,r,r,r)
w=s.e
v=w.$2(""+d.e+" points",D.bG)
u=w.$2(""+o+" m to the shop",D.aQ)
p=A.yK(q)
t=A.yK(d.d)
q=x.p
w=C.E(C.x(C.a([k,D.cL,C.bW(D.bC,C.a([v,u,w.$2(""+D.k.V(Math.sqrt(Math.pow(p.a-t.a,2)+Math.pow(p.b-t.b,2))/10)+" m trip",D.bj)],q),D.bq,r,0,6)],q),D.E,r,D.e,D.i,0,D.p),1)
k=s.f!=null
i=k?r:new A.e9V(s.a,s.r,d,i)
v=k?D.bz:D.bG
u=C.m(14)
return C.p(r,C.B(C.a([j,D.at,w,D.ac,C.aB(r,C.p(r,C.d("Take",r,r,r,r,r,r,C.l(r,r,k?D.bY:D.w,r,r,r,r,r,r,r,r,r,r,r,D.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),D.f,r,r,new C.o(v,r,r,u,r,r,D.n),r,r,r,r,D.iB,r,r,r),D.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,i,r,r,r,r,r,r,!1,D.a4)],q),D.m,r,D.e,D.i,0,r,r),D.f,r,r,new C.o(n,r,l,m,r,r,D.n),r,r,r,D.ct,D.bT,r,r,r)},
$S:z+65}
A.e9V.prototype={
$0(){var w=this,v=w.c,u=w.a
if(w.b.cXY(0,v,u.CW.gi8()/1000)){u.m(new A.e9U(u))
if(!u.aL)u.a2A()
u.eh(A.L6(v.b).b+" Order taken: go to the "+w.d.$1(v.c).toLowerCase()+" (follow the yellow line), then to the house.",!0)}},
$S:0}
A.e9U.prototype={
$0(){return this.a.go=!1},
$S:0}
A.e9R.prototype={
$0(){var w=this.a
return w.m(new A.e9Q(w))},
$S:0}
A.e9Q.prototype={
$0(){return this.a.go=!1},
$S:0}
A.e9S.prototype={
$0(){var w=this.a
return w.m(new A.e9P(w,this.b))},
$S:0}
A.e9P.prototype={
$0(){this.b.a4(0)
this.a.eh("Order given back.",!0)},
$S:0}
A.e9l.prototype={
$0(){return this.a.k3=!1},
$S:0}
A.e9m.prototype={
$0(){return this.a.k3=!1},
$S:0}
A.eaM.prototype={
$0(){return A.fV(1175,220,0.3,"tri")},
$S:0}
A.e8Z.prototype={
$0(){var w=this.a
return w.m(new A.e8Y(w))},
$S:0}
A.e8Y.prototype={
$0(){return this.a.k3=!1},
$S:0}
A.e9_.prototype={
$0(){return this.a.bTx(this.b)},
$S:0}
A.e8L.prototype={
$4(d,e,f,g){var w=-d,v=this.a
return 0.5*(2*e+(w+f)*v+(2*d-5*e+4*f-g)*v*v+(w+3*e-3*f+g)*v*v*v)},
$S:326}
A.e9D.prototype={
$1(d){return d.c==="outside"},
$S:z+5}
A.eaY.prototype={
$0(){var w=this.a
w.R8=!1
w.y1=null
w.p4=!0
w.rx=this.b
w.ry=-1},
$S:0}
A.e8X.prototype={
$2(d,e){return d[D.o.E(e,0,d.length-1)]},
$S:z+66}
A.eb8.prototype={
$0(){var w=this.a
w.p4=!1
w.aJ=null
w.iC()},
$S:0}
A.e8V.prototype={
$4(d,e,f,g){var w=null,v=D.c.j(0.07),u=C.m(16),t=C.J(D.bz,D.r,1),s=x.p
return C.aB(w,C.p(w,C.B(C.a([C.d(d,w,w,w,w,w,w,D.nH,w,w,w),D.bd,C.E(C.x(C.a([C.d(e,w,w,w,w,w,w,D.hD,w,w,w),C.d(f,w,w,w,w,w,w,D.hm,w,w,w)],s),D.E,w,D.e,D.i,0,D.p),1),A_.OU],s),D.m,w,D.e,D.i,0,w,w),D.f,w,w,new C.o(v,w,t,u,w,w,D.n),w,w,w,D.jy,D.bf,w,w,w),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new A.e8W(this.a,g),w,w,w,w,w,w,!1,D.a4)},
$S:1796}
A.e8W.prototype={
$0(){return this.a.cyg(this.b)},
$S:0}
A.e8U.prototype={
$0(){var w=this.a
return w.m(new A.e8T(w))},
$S:0}
A.e8T.prototype={
$0(){return this.a.R8=!1},
$S:0}
A.e9s.prototype={
$1(d){return d.c==="outside"},
$S:z+5}
A.eb7.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&C.c()
w=t[this.b]
v=u.at.h(0,w.a)
if(v==null||!A.h19(w.b,v.a))return 0
return v.b.c<2?1:2},
$S:91}
A.ebX.prototype={
$1(d){return d},
$S:119}
A.e8u.prototype={
$1(d){return d},
$S:119}
A.e9p.prototype={
$0(){var w=A.crL(0,null,!1,this.a.a*13+5+this.b.f,!0)
w.am2()
return w},
$S:z+67}
A.e9q.prototype={
$1(d){return A.chu(!1,this.a,!1)},
$S:z+41}
A.e9r.prototype={
$1(d){return d.length!==0},
$S:3}
A.e94.prototype={
$0(){return new A.Cx(C.U(x.S,x.N))},
$S:z+69}
A.e95.prototype={
$1(d){return new A.DV("light",this.a,null)},
$S:z+27}
A.e9F.prototype={
$1(d){return d.c==="outside"},
$S:z+5}
A.e9G.prototype={
$0(){return this.a.y1=this.b},
$S:0}
A.e7Z.prototype={
$1(d){var w=null
return new C.bM(D.a5,w,w,C.p(w,C.d(d,w,w,w,w,w,w,B.aSK,w,w,w),D.f,w,B.acK,B.b4K,w,w,w,D.ct,D.iB,w,w,w),w)},
$S:139}
A.e7Y.prototype={
$5$primary(d,e,f,g,h){var w=null,v=h?f:f.j(0.14),u=C.m(16),t=C.J(f,D.r,1),s=C.X(d,h?D.w:f,w,w,w,21)
return C.aB(w,C.p(w,C.B(C.a([s,D.ac,C.d(e,w,w,w,w,w,w,C.l(w,w,h?D.w:D.c,w,w,w,w,w,w,w,w,14.5,w,w,D.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),D.m,w,D.b8,D.i,0,w,w),D.f,w,w,new C.o(v,w,t,u,w,w,D.n),w,48,w,D.jy,w,w,w,w),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,!1,D.a4)},
$4(d,e,f,g){return this.$5$primary(d,e,f,g,!1)},
$S:1797}
A.e8_.prototype={
$0(){var w=this.a
return w.m(new A.e7X(w))},
$S:0}
A.e7X.prototype={
$0(){return this.a.y1=null},
$S:0}
A.e80.prototype={
$0(){var w,v,u=this.a
u.m(new A.e7W(u))
if(!u.aL)u.a2A()
w=u.aC
if(w!=null){v=u.e
v===$&&C.c()
v.apG(220,0.5,new A.q(w.f,30,w.r))}u.eh("Follow the yellow line on the ground to get there.",!0)},
$S:0}
A.e7W.prototype={
$0(){return this.a.y1=null},
$S:0}
A.e81.prototype={
$0(){var w,v=this.a
v.m(new A.e7V(v))
if(v.cJ==null){v.cJ=this.b
v.hL=0}w=this.b
v.Sj(w.a)
w=w.c
if(w==="power")w="You are at the house. Walk in and onto the red mat at the breaker panel."
else w=w==="sick"?"You are at the hospital. Walk in and onto the desk.":y.Y
v.eh(w,!0)},
$S:0}
A.e7V.prototype={
$0(){return this.a.y1=null},
$S:0}
A.e82.prototype={
$0(){var w=this.a
w.m(new A.e7U(w,this.b))
w.eh("Saved on your waiting list.",!0)},
$S:0}
A.e7U.prototype={
$0(){var w,v=this.a
v.y1=null
w=this.b
if(v.cJ===w)v.cJ=null
v=v.eK
if(!D.d.t(v,w))v.push(w)},
$S:0}
A.e83.prototype={
$0(){var w=this.a
return w.m(new A.e7T(w))},
$S:0}
A.e7T.prototype={
$0(){return this.a.y2=!1},
$S:0}
A.e8q.prototype={
$1(d){var w=null
return C.bx(D.qW,new C.a7(w,C.aJ(d,w,x.w).w.a.b*0.82,new A.apy(this.a,w),w),D.ap)},
$S:1798}
A.e8r.prototype={
$0(){var w=this.a
w.azx()
w.iC()},
$S:0}
A.eaL.prototype={
$1(d){return new C.dZ(new A.eaJ(this.a,this.b,this.c),null)},
$S:20}
A.eaJ.prototype={
$2(d,e){var w,v,u,t,s=null,r=new A.eaK(this.a,e),q=this.b,p=q.a,o=C.d(p.b+" "+q.gaDv(0),s,s,s,s,s,s,Q.t6,s,s,s)
p=C.d(p.f,s,s,s,s,s,s,D.vg,s,s,s)
w=C.d("Now: "+q.gUg()+"\nFood "+D.k.V(100-q.b)+"%   Health "+D.k.V(q.c)+"%   Home "+D.k.V(q.d)+"%",s,s,s,s,s,s,B.aTc,s,s,s)
v=this.c
u=x.p
t=C.a([r.$2("\ud83c\udf5e Feed",new A.eaG(v,q))],u)
if(q.e)t.push(r.$3$col("\ud83d\udc8a Medicine",new A.eaH(v,q),D.bw))
if(q.e||q.c<60)t.push(r.$3$col("\ud83c\udfe5 Hospital",new A.eaI(v,q),D.cs))
return C.bl(!0,new C.D(D.bQ,C.x(C.a([o,p,D.O,w,D.ae,C.bW(D.bC,t,D.bq,s,8,8)],u),D.E,s,D.e,D.Q,0,D.p),s),!0,!1,D.af,!0,!0)},
$S:87}
A.eaK.prototype={
$3$col(d,e,f){var w=null,v=f.j(0.22),u=C.m(12),t=C.J(f,D.r,1)
return C.aB(w,C.p(w,C.d(d,w,w,w,w,w,w,C.l(w,w,f,w,w,w,w,w,w,w,w,13,w,w,D.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),D.f,w,w,new C.o(v,w,t,u,w,w,D.n),w,w,w,w,X.vU,w,w,w),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new A.eaF(this.a,e,this.b),w,w,w,w,w,w,!1,D.a4)},
$2(d,e){return this.$3$col(d,e,D.aC)},
$S:1799}
A.eaF.prototype={
$0(){var w,v=this.b.$0()
this.c.$1(new A.eaE())
w=this.a
w.m(w.giV())
w.iD(v)},
$S:0}
A.eaE.prototype={
$0(){},
$S:0}
A.eaG.prototype={
$0(){return this.a.bex(this.b)},
$S:22}
A.eaH.prototype={
$0(){return this.a.aKx(this.b)},
$S:22}
A.eaI.prototype={
$0(){return this.a.aDc(this.b)},
$S:22}
A.eav.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=x.p,k=C.a([],l)
for(w=D.d.gaf(B.a3E),v=new C.f5(w,new A.eas()),u=this.a,t=this.b;v.C();){s=w.gR(0)
r=D.c.j(0.08)
q=new C.aQ(12,12)
p=u.d
p===$&&C.c()
o=p.d
o===$&&C.c()
n=new C.ay(o[p.e].fx.h(0,t)===s.a?D.aC:D.aZ,1,D.r,-1)
k.push(C.aB(m,C.p(m,new C.y(s.c+" "+s.b,m,D.Ka,m,m,m,m,m,m,m,m,m),D.f,m,m,new C.o(r,m,new C.bK(n,n,n,n),new C.bj(q,q,q,q),m,m,D.n),m,m,m,m,D.eA,m,m,m),D.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new A.eat(u,d,t,s),m,m,m,m,m,m,!1,D.a4))}w=u.d
w===$&&C.c()
v=w.d
v===$&&C.c()
if(v[w.e].fx.h(0,t)!=null)k.push(C.aB(m,C.p(m,B.fKN,D.f,m,m,new C.o(D.ej,m,m,C.m(12),m,m,D.n),m,m,m,m,D.eA,m,m,m),D.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new A.eau(u,d,t),m,m,m,m,m,m,!1,D.a4))
return C.bl(!0,new C.D(D.bQ,C.x(C.a([B.fGR,D.W,C.bW(D.bC,k,D.bq,m,8,8)],l),D.E,m,D.e,D.Q,0,D.p),m),!0,!1,D.af,!0,!0)},
$S:25}
A.eas.prototype={
$1(d){return!(d.d>70||d.e)},
$S:z+26}
A.eat.prototype={
$0(){var w,v,u,t=this
C.a4(t.b,!1).O(null)
w=t.a
v=t.d
w.m(new A.ear(w,t.c,v))
u=v.d>0||v.e
v=v.b
w.iD(u?v+" is on and playing NGMY ads. Tap it to watch full screen.":v+" is plugged in and running.")
A.fV(820,70,0.25,"tri")},
$S:0}
A.ear.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.d
w===$&&C.c()
w[u.e].fx.n(0,this.b,this.c.a)
v.iC()},
$S:0}
A.eau.prototype={
$0(){C.a4(this.b,!1).O(null)
var w=this.a
w.m(new A.eaq(w,this.c))
w.iD("Unplugged.")},
$S:0}
A.eaq.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.d
w===$&&C.c()
w[u.e].fx.W(0,this.b)
v.iC()},
$S:0}
A.ebH.prototype={
$1(d){return new C.dZ(new A.ebF(this.a),null)},
$S:20}
A.ebF.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.a,k=new A.ebG(l,e),j=l.d
j===$&&C.c()
w=j.d
w===$&&C.c()
j=C.d("TV in "+w[j.e].b,m,m,m,m,m,m,D.dd,m,m,m)
w=x.p
v=C.a([],w)
for(u=D.d.gaf(B.a3E),t=new C.f5(u,new A.eby());t.C();){s=u.gR(0)
r=s.b
q=l.d
p=q.d
p===$&&C.c()
q=p[q.e].k1===s.a?D.aC:D.eW
v.push(k.$3$color(r,new A.ebz(l,s),q))}j=C.a([j,D.W,C.bW(D.bC,v,D.bq,m,8,8)],w)
if(l.d.a.length!==0){v=C.a([],w)
for(o=0;o<3;++o){u={}
t=B.d5T[o]
u.a=null
n=t.a
u.a=n
s=l.d
r=s.d
r===$&&C.c()
s=r[s.e].p1===n?D.aC:D.eW
v.push(k.$3$color(t.b,new A.ebA(u,l),s))}D.d.v(j,C.a([B.ftT,D.am,C.bW(D.bC,v,D.bq,m,8,8)],w))}j.push(D.W)
w=C.a([],w)
v=l.d
u=v.d
u===$&&C.c()
v=u[v.e]
if(v.k1!=null){v=v.p2?"\u23fb Turn this TV off":"\u23fb Turn this TV on"
w.push(k.$2(v,new A.ebB(l)))}v=l.d
u=v.d
u===$&&C.c()
if(u[v.e].k1!=null&&v.a.length===0)w.push(k.$3$color("\ud83d\uddd1 Take it down",new A.ebC(l),D.ej))
if(l.d.a.length===0)w.push(k.$3$color("\ud83d\udcfa A TV in every room, all on",new A.ebD(l),D.cU))
if(l.d.a.length===0)w.push(k.$3$color("\u23fb All TVs off",new A.ebE(l),D.bm))
j.push(C.bW(D.bC,w,D.bq,m,8,8))
return C.bl(!0,new C.D(D.bQ,C.x(j,D.E,m,D.e,D.Q,0,D.p),m),!0,!1,D.af,!0,!0)},
$S:87}
A.ebG.prototype={
$3$color(d,e,f){var w=null,v=f.j(0.4),u=C.m(12),t=C.J(f,D.r,1)
return C.aB(w,C.p(w,C.d(d,w,w,w,w,w,w,F.Aa,w,w,w),D.f,w,w,new C.o(v,w,t,u,w,w,D.n),w,w,w,w,X.vU,w,w,w),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new A.ebx(this.a,e,this.b),w,w,w,w,w,w,!1,D.a4)},
$2(d,e){return this.$3$color(d,e,D.eW)},
$S:1800}
A.ebx.prototype={
$0(){this.b.$0()
this.c.$1(new A.ebw())
var w=this.a
w.m(w.giV())},
$S:0}
A.ebw.prototype={
$0(){},
$S:0}
A.eby.prototype={
$1(d){return d.d>0||d.e},
$S:z+26}
A.ebz.prototype={
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
A.ebA.prototype={
$0(){var w,v=this.b.d
v===$&&C.c()
w=v.d
w===$&&C.c()
return w[v.e].p1=this.a.a},
$S:0}
A.ebB.prototype={
$0(){var w,v=this.a.d
v===$&&C.c()
w=v.d
w===$&&C.c()
v=w[v.e]
return v.p2=!v.p2},
$S:0}
A.ebC.prototype={
$0(){var w,v=this.a.d
v===$&&C.c()
w=v.d
w===$&&C.c()
v=w[v.e]
v.k1=null
v.p2=!1},
$S:0}
A.ebD.prototype={
$0(){var w,v,u,t=this.a.d
t===$&&C.c()
t=t.gqR()
w=t.length
v=0
for(;v<w;++v){u=t[v]
if(u.k1==null)u.k1="tv100"
if(u.c==="hall")if(u.k2==null)u.k2="tv100"
u.p2=!0}},
$S:0}
A.ebE.prototype={
$0(){var w,v,u=this.a.d
u===$&&C.c()
u=u.gqR()
w=u.length
v=0
for(;v<w;++v)u[v].p2=!1},
$S:0}
A.ebt.prototype={
$1(d){return new C.dZ(new A.ebr(this.a),null)},
$S:20}
A.ebr.prototype={
$2(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new A.ebs(),e=C.at(C.p(g,g,D.f,g,g,new C.o(D.aZ,g,g,C.m(2),g,g,D.n),g,4,g,g,g,g,g,42),g,g,g),d=x.p,a0=C.B(C.a([C.p(g,G.ap7,D.f,g,g,new C.o(g,g,g,C.m(16),g,B.c1g,D.n),g,52,g,g,g,g,g,52),D.er,B.bE8],d),D.m,g,D.e,D.i,0,g,g),a1=f.$1("Who walks the house"),a2=C.a([],d)
for(w=B.aGq.gdV(B.aGq),w=w.gaf(w),v=x.s,u=x.N,t=x.ec,s=this.a;w.C();){r=w.gR(w)
q=$.ahz
p=r.a
q=q===p?D.aQ.j(0.18):D.c.j(0.06)
o=new C.aQ(18,18)
n=$.ahz===p
m=n?D.aQ:D.bz
l=new C.ay(m,n?2:1,D.r,-1)
n=n?D.aQ:D.aZ
m=r.b
k=D.d.gI(m.split(" "))
m=C.a(m.split(" "),v)
j=new C.jx(m,1,g,t)
j.pe(m,1,g,u)
j=j.aH(0," ")
p=$.ahz===p?D.aQ:D.c
a2.push(new C.D(D.N5,C.aB(g,C.dd(g,C.x(C.a([new C.qt(new C.y(k,g,D.py,g,g,g,g,g,g,g,g,g),n,g,20,g),D.am,new C.y(j,g,new C.F(!0,p,g,g,g,g,12.5,D.H,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g),g,g,g,g,D.a1,g,1,g,g)],d),D.m,g,D.b8,D.i,0,D.p),g,g,D.b6,new C.o(q,g,new C.bK(l,l,l,l),new C.bj(o,o,o,o),g,g,D.n),D.hq,g,g,g,D.Gd,g,g,92),D.y,!1,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,new A.ebn(s,a4,r),g,g,g,g,g,g,!1,D.a4),g))}a2=C.cr(a2,g,g,g,g,D.aM,!1)
w=f.$1("How long")
v=D.c.j(0.06)
u=C.m(16)
t=C.a([],d)
for(i=0;i<5;++i){h=B.dr4[i]
r=s.db===h
q=r?D.aC:D.K
p=new C.aQ(12,12)
if(h<60)o=""+h+" seconds"
else o=h===60?"1 minute":""+(h/60|0)+" minutes"
r=r?D.w:D.ad
t.push(new C.bA(1,D.bc,C.aB(g,C.dd(g,new C.cg(D.A,g,g,new C.y(o,g,new C.F(!0,r,g,g,g,g,12.5,D.u,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g),g,D.L,g,g,g,g,g,g,g),g),g,g,D.b6,new C.o(q,g,g,new C.bj(p,p,p,p),g,g,D.n),D.hq,g,g,g,D.tZ,g,g,g),D.y,!1,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,new A.ebo(s,a4,h),g,g,g,g,g,g,!1,D.a4),g))}v=C.p(g,C.B(t,D.m,g,D.e,D.i,0,g,g),D.f,g,g,new C.o(v,g,g,u,g,g,D.n),g,g,g,g,D.eB,g,g,g)
u=C.aB(g,C.p(g,B.f0g,D.f,g,g,new C.o(g,g,g,C.m(18),C.a([new C.ac(0,D.G,D.aw.j(0.35),D.cx,16)],x.V),B.c2e,D.n),g,56,g,g,g,g,g,g),D.y,!1,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,new A.ebp(s,a3),g,g,g,g,g,g,!1,D.a4)
t=D.c.j(0.06)
r=C.m(18)
return C.p(g,C.bl(!0,C.ce(C.x(C.a([e,D.aN,a0,a1,new C.a7(g,96,a2,g),w,v,D.dS,u,D.ae,C.aB(g,C.p(g,B.f0a,D.f,g,g,new C.o(t,g,C.J(D.bz,D.r,1),r,g,g,D.n),g,g,g,g,D.bB,g,g,g),D.y,!1,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,new A.ebq(s,a3),g,g,g,g,g,g,!1,D.a4)],d),D.E,g,D.e,D.Q,0,D.p),D.t,g,D.y,g,D.akA,g,g,D.ah),!0,!1,D.af,!0,!0),D.f,g,g,B.b3O,g,g,g,g,g,g,g,g)},
$S:156}
A.ebs.prototype={
$1(d){var w=null
return new C.D(G.ajj,C.d(d.toUpperCase(),w,w,w,w,w,w,P.t8,w,w,w),w)},
$S:139}
A.ebn.prototype={
$0(){var w=this.c
this.b.$1(new A.ebl(w))
A.bT9(w.a)
this.a.m(new A.ebm())},
$S:0}
A.ebl.prototype={
$0(){return $.ahz=this.a.a},
$S:0}
A.ebm.prototype={
$0(){},
$S:0}
A.ebo.prototype={
$0(){return this.b.$1(new A.ebk(this.a,this.c))},
$S:0}
A.ebk.prototype={
$0(){return this.a.db=this.b},
$S:0}
A.ebp.prototype={
$0(){C.a4(this.b,!1).O(null)
var w=this.a
w.cyz(w.db)},
$S:0}
A.ebq.prototype={
$0(){C.a4(this.b,!1).O(null)
this.a.b7a(45,!0)},
$S:0}
A.eb4.prototype={
$0(){var w=this.a,v=w.d
v===$&&C.c()
v.e=this.b
w.ax=null
w.iC()},
$S:0}
A.eb5.prototype={
$1(d){return this.a.cCM()},
$S:11}
A.eb6.prototype={
$0(){},
$S:0}
A.ebu.prototype={
$0(){return this.a.dy=this.b.as},
$S:0}
A.ebj.prototype={
$0(){var w=this.b
w.iC()
w.aA=this.a.a;++w.aE},
$S:0}
A.ebb.prototype={
$0(){var w=this.a
w.cx=null
w.dy=""},
$S:0}
A.ebc.prototype={
$0(){},
$S:0}
A.eb3.prototype={
$0(){},
$S:0}
A.eba.prototype={
$0(){},
$S:0}
A.ebS.prototype={
$0(){return this.a.id=!0},
$S:0}
A.ebT.prototype={
$0(){return this.a.k2=!0},
$S:0}
A.ebU.prototype={
$0(){return this.a.k3=!0},
$S:0}
A.ebV.prototype={
$1(d){return B.aPV.t(0,d.b)},
$S:z+4}
A.ebL.prototype={
$1(d){var w
if(d.b==="gasstation"){w=this.a
w=Math.sqrt(Math.pow(w.f-d.c,2)+Math.pow(w.r-d.d,2))<135}else w=!1
return w},
$S:z+4}
A.ebM.prototype={
$0(){return this.a.aP4(B.aQb)},
$S:0}
A.ebN.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.d
w===$&&C.c()
D.d.W(w[u.e].x,this.b)
v.al="crate"
v.m(v.giV())
v.eh("You picked up a crate. Carry it to the shop and walk onto the green mat by the counter to sell it at the market.",!0)
A.fV(700,60,0.25,"tri")
return null},
$S:0}
A.ebO.prototype={
$0(){return this.a.abc(this.b)},
$S:0}
A.ebP.prototype={
$0(){return this.a.bQb(this.b)},
$S:0}
A.ebQ.prototype={
$0(){return this.a.bSO(this.b)},
$S:0}
A.ebR.prototype={
$0(){return this.b.cL=this.a.a},
$S:0}
A.e93.prototype={
$0(){},
$S:0}
A.e9K.prototype={
$0(){var w=this.a
w.y1=null
w.y2=!0},
$S:0}
A.e9H.prototype={
$1(d){return d.c==="outside"},
$S:z+5}
A.e9I.prototype={
$1(d){return d.b==="hospital"},
$S:z+4}
A.e9J.prototype={
$1(d){return!d.e&&d.r<0},
$S:z+17}
A.e9t.prototype={
$1(d){return d.c==="outside"},
$S:z+5}
A.e9u.prototype={
$1(d){return d.a.b===this.a.d},
$S:z+17}
A.eaZ.prototype={
$0(){},
$S:0}
A.e9n.prototype={
$0(){return this.a.k3=!0},
$S:0}
A.eaN.prototype={
$1(d){return d.b==="hospital"},
$S:z+4}
A.eaO.prototype={
$0(){return this.a.go=!1},
$S:0}
A.eb_.prototype={
$0(){var w=this.a
w.iC()
w.aeg(!0)},
$S:0}
A.eb0.prototype={
$1(d){return this.a.c7B()},
$S:11}
A.e9A.prototype={
$1(d){return!D.d.b3(this.a.d,new A.e9z(d))},
$S:34}
A.e9z.prototype={
$1(d){return d.a===this.a},
$S:z+18}
A.e9B.prototype={
$1(d){return d.a===this.a.a},
$S:z+18}
A.eb1.prototype={
$1(d){var w,v,u=this.a
if(u.c==null)return
w=++u.S
if(w>36){v=u.bC
u.B2()
if(v!=null)u.aBz("Nobody answered the phone")
return}if(w%8<4){A.fV((w&1)===0?1046:1318,160,0.3,"sine")
if(D.o.F(u.S,8)===0)C.Tq()}},
$S:11}
A.eb2.prototype={
$0(){},
$S:0}
A.eb9.prototype={
$0(){var w=this.a
w.bC=w.bB=null},
$S:0}
A.e9Z.prototype={
$4$col$on(d,e,f,g){var w=null,v=g?f.j(0.45):D.w.j(0.62),u=C.m(18),t=C.J(f,D.r,1.8)
return C.aB(w,C.p(w,C.d(d,w,w,w,w,w,w,D.j2,w,w,w),D.f,w,w,new C.o(v,w,t,u,w,w,D.n),w,w,w,D.a_C,B.bDp,w,w,w),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new A.ea_(e),w,w,w,w,!1,D.a4)},
$2(d,e){return this.$4$col$on(d,e,D.bj,!1)},
$3$col(d,e,f){return this.$4$col$on(d,e,f,!1)},
$3$on(d,e,f){return this.$4$col$on(d,e,D.bj,f)},
$S:1801}
A.ea_.prototype={
$1(d){return this.a.$0()},
$S:23}
A.ea7.prototype={
$7$about$avatar$glow$onAnswer$onDecline$onLater$who(d,e,f,g,h,i,j){var w=null,v=new A.ea8(),u=Math.min(this.a-28,340),t=C.m(30),s=C.J(D.aZ,D.r,2),r=C.a([new C.ac(0,D.G,f.j(0.35),D.I,24)],x.V),q=x.p,p=C.B(C.a([e,D.er,C.E(C.x(C.a([B.fIh,D.bD,C.d(j,w,1,D.a1,w,w,w,D.a9n,w,w,w),D.bD,C.d(d,w,2,D.a1,w,w,w,L.a9S,w,w,w)],q),D.E,w,D.e,D.Q,0,D.p),1)],q),D.m,w,D.e,D.i,0,w,w),o=C.a([v.$4(B.bL3,"Decline",D.aw,h)],q)
if(i!=null)o.push(v.$4(D.jU,"Later",D.aC,i))
o.push(v.$5$big(D.iD,"Answer",D.be,g,!0))
return C.p(w,C.x(C.a([p,D.aA,C.B(o,D.E,w,D.e,D.i,0,w,w)],q),D.ak,w,D.e,D.Q,0,D.p),D.f,w,w,new C.o(w,w,s,t,r,B.zb,D.n),w,w,w,D.d3,Ad.a_i,w,w,u)},
$6$about$avatar$glow$onAnswer$onDecline$who(d,e,f,g,h,i){return this.$7$about$avatar$glow$onAnswer$onDecline$onLater$who(d,e,f,g,h,null,i)},
$S:1802}
A.ea8.prototype={
$5$big(d,e,f,g,h){var w=null,v=h?58:50,u=h?58:50
return C.E(C.aB(w,C.x(C.a([C.p(w,C.X(d,D.c,w,w,w,h?30:26),D.f,w,w,new C.o(f,w,w,w,w,w,D.a6),w,u,w,w,w,w,w,v),D.fQ,C.d(e,w,w,w,w,w,w,M.Ae,w,w,w)],x.p),D.m,w,D.e,D.Q,0,D.p),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new A.ea9(g),w,w,w,w,!1,D.a4),1)},
$4(d,e,f,g){return this.$5$big(d,e,f,g,!1)},
$S:1803}
A.ea9.prototype={
$1(d){return this.a.$0()},
$S:23}
A.ea1.prototype={
$0(){var w=this.a
w.B2()
w.aBz("You turned the call down")},
$S:0}
A.ea2.prototype={
$0(){var w=this.a
w.B2()
w.eK.push(this.b)
w.eh("Saved on your waiting list. You will be taken there when you are free.",!0)},
$S:0}
A.ea0.prototype={
$0(){var w=this.b,v=this.a
v.B2()
v.cJ=w
v.hL=0
v.awU(w)},
$S:0}
A.ea3.prototype={
$0(){var w=this.a
w.B2()
w.cB6(this.b)},
$S:0}
A.ea6.prototype={
$2(d,e){var w=this.a
w.b0=d
w.be=e},
$S:250}
A.ea4.prototype={
$0(){var w=this.a
return w.m(new A.e9Y(w))},
$S:0}
A.e9Y.prototype={
$0(){var w=this.a
return w.bi=!w.bi},
$S:0}
A.ea5.prototype={
$0(){var w=this.a,v=w.aJ
if(v==null)v=null
else{v=v.at
v===$&&C.c()}w=v==null?w.aC:v
if(w!=null)if(w.Q<=0.01)w.as=160
return null},
$S:0}
A.e9L.prototype={
$1(d){var w=this.a,v=w.p4
w=w.RG
return v==="ptrap"?new A.a9y(w,null):new A.a5_(w,null)},
$S:1804}
A.e9M.prototype={
$1(d){var w=this.a
return new A.DV(w.p4,w.R8,null)},
$S:z+27}
A.ebW.prototype={
$1(d){var w=this.a
return new A.DV(w.a,w.c,null)},
$S:z+27}
A.e9O.prototype={
$1(d){return A.chu(!1,this.a.CW,!1)},
$S:z+41}
A.e9N.prototype={
$1(d){return new A.Wb(this.a.fr,null)},
$S:z+71}
A.e7q.prototype={
$1(d){var w,v,u,t,s,r,q,p=null,o=this.a,n=o.d
n===$&&C.c()
w=n.d
w===$&&C.c()
n=C.d("Add to "+w[n.e].b,p,p,p,p,p,p,D.dd,p,p,p)
w=x.p
v=C.a([],w)
for(u=0;u<3;++u){t={}
s=B.dsO[u]
t.a=null
t.a=s.a
r=new C.aQ(12,12)
q=new C.ay(D.b2,1,D.r,-1)
v.push(C.aB(p,C.p(p,new C.y(s.b,p,D.ta,p,p,p,p,p,p,p,p,p),D.f,p,p,new C.o(D.eW.j(0.4),p,new C.bK(q,q,q,q),new C.bj(r,r,r,r),p,p,D.n),p,p,p,p,X.vU,p,p,p),D.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new A.e7p(t,o,d),p,p,p,p,p,p,!1,D.a4))}return C.bl(!0,new C.D(D.bQ,C.x(C.a([n,D.au,B.fPl,D.ae,C.bW(D.bC,v,D.bq,p,8,8)],w),D.E,p,D.e,D.Q,0,D.p),p),!0,!1,D.af,!0,!0)},
$S:25}
A.e7p.prototype={
$0(){C.a4(this.c,!1).O(null)
this.b.bAR(this.a.a)},
$S:0}
A.e7k.prototype={
$1(d){return d.b==="back"},
$S:z+20}
A.e7l.prototype={
$1(d){return d.b==="back"},
$S:z+20}
A.e7m.prototype={
$1(d){return Math.abs(d-this.a)>13},
$S:115}
A.e7n.prototype={
$0(){var w=this
w.b.id.push(new A.aVY(w.c,w.d,new A.Cx(C.U(x.S,x.N))))
w.a.iC()},
$S:0}
A.e9E.prototype={
$0(){var w,v=this,u=v.b,t=u.c,s=v.c,r=v.d
u.c=t+(s?D.o.gVL(r)*40:r)
t=u.d
r=v.e
u.d=t+(s?D.o.gVL(r)*40:r)
t=v.a
r=t.d
r===$&&C.c()
w=r.d
w===$&&C.c()
w[r.e].a3V(0,u)
t.iC()},
$S:0}
A.ebv.prototype={
$0(){var w,v,u,t=this.b
t.e=D.o.F(t.e+1,4)
w=this.a
v=w.d
v===$&&C.c()
u=v.d
u===$&&C.c()
u[v.e].a3V(0,t)
w.iC()},
$S:0}
A.eaC.prototype={
$0(){var w=this.b
w.f=(w.f+1)%6
this.a.iC()},
$S:0}
A.eaD.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.d
w===$&&C.c()
D.d.W(w[u.e].x,this.b)
v.at=v.Q=0
v.iC()},
$S:0}
A.e7o.prototype={
$0(){var w=this.a,v=this.b.a
w.Q=v
w.at=100+v
w.iC()},
$S:0}
A.e8A.prototype={
$0(){return this.a.aeh(-6,0)},
$S:0}
A.e8B.prototype={
$0(){return this.a.aeh(6,0)},
$S:0}
A.e8C.prototype={
$0(){return this.a.aeh(0,-6)},
$S:0}
A.e8D.prototype={
$0(){return this.a.aeh(0,6)},
$S:0}
A.e8E.prototype={
$0(){return this.a.bAU(this.b.a)},
$S:0}
A.e8F.prototype={
$0(){var w=this.a
return w.m(new A.e8z(w))},
$S:0}
A.e8z.prototype={
$0(){return this.a.as=-1},
$S:0}
A.e8G.prototype={
$0(){var w=this.a
w.m(new A.e8y(w,this.b))},
$S:0}
A.e8y.prototype={
$0(){var w,v=this.a,u=v.as,t=this.b,s=v.d
if(u<0){s===$&&C.c()
u=s.d
u===$&&C.c()
D.d.hv(u[s.e].z,0,3,t)}else{s===$&&C.c()
w=s.d
w===$&&C.c()
w[s.e].z[u]=t}v.iC()},
$S:0}
A.e8H.prototype={
$0(){var w=this.a
w.m(new A.e8x(w,this.b))},
$S:0}
A.e8x.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.d
w===$&&C.c()
w[u.e].Q=this.b
v.iC()},
$S:0}
A.e8I.prototype={
$0(){var w=this.a
w.m(new A.e8w(w))},
$S:0}
A.e8w.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.d
w===$&&C.c()
u=w[u.e]
u.go=u.go==="fan"?"light":"fan"
v.iC()},
$S:0}
A.e8J.prototype={
$0(){var w=this.a
w.m(new A.e8v(w,this.b))},
$S:0}
A.e8v.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.d
w===$&&C.c()
w[u.e].as=this.b
v.iC()},
$S:0}
A.e8K.prototype={
$0(){return this.a.Az(this.b.d)},
$S:0}
A.ebZ.prototype={
$0(){return C.a4(this.a,!1).ic()},
$S:0}
A.ec0.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.ebY(w))},
$S:0}
A.ebY.prototype={
$0(){return this.a.aA=null},
$S:0}
A.ec_.prototype={
$3(d,e,f){var w=null
return C.d9(C.cok(D.A,w,w,w,w,D.cg,D.xo,w,this.a.aA,!1,!1,!1,w,D.pe,1,w),e)},
$S:100}
A.e8c.prototype={
$0(){return this.a.A2("calls")},
$S:0}
A.e8d.prototype={
$0(){return this.a.A2("hospital")},
$S:0}
A.e8e.prototype={
$0(){return this.a.A2("shop")},
$S:0}
A.e8i.prototype={
$0(){return this.a.A2("people")},
$S:0}
A.e8j.prototype={
$0(){return this.a.Az(10)},
$S:0}
A.e8k.prototype={
$0(){var w=this.a
return w.m(new A.e8b(w))},
$S:0}
A.e8b.prototype={
$0(){return this.a.k2=!0},
$S:0}
A.e8l.prototype={
$0(){var w=this.a
return w.m(new A.e8a(w))},
$S:0}
A.e8a.prototype={
$0(){return this.a.k3=!0},
$S:0}
A.e8m.prototype={
$0(){var w=this.a
return w.m(new A.e89(w))},
$S:0}
A.e89.prototype={
$0(){var w=this.a
return w.y1=w.cJ},
$S:0}
A.e8n.prototype={
$0(){var w=this.a,v=w.eK.length,u=v===1?"":"s"
return w.eh(""+v+" job"+u+" waiting. You are taken to the next one when you finish this one.",!0)},
$S:0}
A.e8o.prototype={
$0(){var w=this.a
return w.m(new A.e88(w))},
$S:0}
A.e88.prototype={
$0(){return this.a.go=!0},
$S:0}
A.e8p.prototype={
$0(){var w=this.a
return w.p4?w.a2D():w.m(new A.e87(w))},
$S:0}
A.e87.prototype={
$0(){return this.a.R8=!0},
$S:0}
A.e8f.prototype={
$0(){var w=this.a
return w.m(new A.e86(w))},
$S:0}
A.e86.prototype={
$0(){var w=this.a
return w.h5=!w.h5},
$S:0}
A.e8g.prototype={
$0(){var w=this.a
return w.m(new A.e85(w))},
$S:0}
A.e85.prototype={
$0(){return this.a.ai=!0},
$S:0}
A.e8h.prototype={
$0(){var w=this.a
return w.m(new A.e84(w))},
$S:0}
A.e84.prototype={
$0(){var w=this.a
return w.y=!w.y},
$S:0}
A.e7x.prototype={
$0(){var w=this.a.ghI()
w=w==null?null:w.r
return w==null?0:w},
$S:91}
A.e7L.prototype={
$0(){return this.a.xX()},
$S:0}
A.e7K.prototype={
$1(d){return d<=5},
$S:34}
A.e7y.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n=null,m=this.a,l=m.aJ,k=m.CW
if(l!=null){m=k.gi8()
k=B.aGr.h(0,$.ahz)
if(k==null)k=B.a7t
k=l.cNx(m/1000,k)
m=k}else{l=m.d
l===$&&C.c()
w=l.d
w===$&&C.c()
l=w[l.e]
w=k.gi8()
v=m.clt()
u=B.aGr.h(0,$.ahz)
if(u==null)u=B.a7t
t=m.fr
s=m.r
r=m.bO3()
if(m.al==null){q=m.gpk()
if(q==null)q=n
else{q=q.x
q=(q==null?n:q.r)===!0}q=q===!0}else q=!0
p=m.d
o=p.d
o===$&&C.c()
if(o[p.e].c!=="outside")k=B.HY
else{p=m.gpk()
p=p==null?n:p.ame(k.gi8()/1000)
if(p==null)p=B.HY
p=C.C(p,x.hg)
o=m.gKu()
k=o==null?n:o.ame(k.gi8()/1000)
D.d.v(p,k==null?B.HY:k)
k=p}l=C.C(A.i76(l,w/1000,q,k,r,s,v,u,t),x.fX)
k=m.d
w=k.d
w===$&&C.c()
if(w[k.e].c==="outside")D.d.v(l,m.cCU())
k=!0
if(m.cJ==null){w=m.gpk()
if((w==null?n:w.x)==null){k=m.gKu()
k=(k==null?n:k.f)!=null}}D.d.v(l,k?m.crN():B.HZ)
m=l}return m},
$S:z+10}
A.e7z.prototype={
$1(d){var w,v,u=this.a
if(u.aJ==null){w=u.d
w===$&&C.c()
v=w.d
v===$&&C.c()
w=v[w.e].c==="outside"}else w=!1
return w?A.ihX(u.CW.gi8()/1000):B.wv},
$S:z+74}
A.e7M.prototype={
$3(d,e,f){var w=null,v=D.dJ.j(0.82),u=C.m(18),t=C.J(D.b9,D.r,2)
return C.p(w,C.d(e,w,w,w,w,w,w,B.frY,w,w,w),D.f,w,w,new C.o(v,w,t,u,w,w,D.n),w,w,w,w,B.bBD,w,w,w)},
$S:1805}
A.e7C.prototype={
$0(){var w=this.a,v=w.d
v===$&&C.c()
return v.a.length!==0?w.Em():w.cmJ(this.b)},
$S:0}
A.e7N.prototype={
$0(){var w=this.a
w.m(new A.e7w(w))
w.xX()},
$S:0}
A.e7w.prototype={
$0(){var w=this.a
w.x=!w.x
w.iC()},
$S:0}
A.e7O.prototype={
$0(){var w=this.a
return w.cx!=null?w.S5():w.cCL()},
$S:0}
A.e7P.prototype={
$0(){var w=this.a
w.m(new A.e7v(w))
w.xX()
if(w.z)w.iD("Drag to turn all the way round. Double tap a spot on the floor to walk there.")},
$S:0}
A.e7v.prototype={
$0(){var w=this.a,v=!w.z
w.z=v
if(v&&w.cx!=null)w.S5()
w.iC()},
$S:0}
A.e7Q.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.d
w===$&&C.c()
return v.Az(w[u.e].c!=="outside"?11:10)},
$S:0}
A.e7R.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.d
w===$&&C.c()
if(w[u.e].c!=="outside")v.Az(11)
v.A2("calls")},
$S:0}
A.e7A.prototype={
$0(){var w=this.a
return w.m(new A.e7u(w))},
$S:0}
A.e7u.prototype={
$0(){var w=this.a,v=!w.w
w.w=v
if(v)w.iD("Voltage tester in your hand: tap an outlet, a switch or the light.")},
$S:0}
A.e7B.prototype={
$0(){var w=this.a
return w.m(new A.e7t(w))},
$S:0}
A.e7t.prototype={
$0(){var w=this.a
return w.y=!w.y},
$S:0}
A.e7D.prototype={
$0(){return this.a.PQ("look")},
$S:0}
A.e7E.prototype={
$0(){return this.a.PQ("furniture")},
$S:0}
A.e7F.prototype={
$0(){return this.a.PQ("walls")},
$S:0}
A.e7G.prototype={
$0(){return this.a.PQ("floor")},
$S:0}
A.e7H.prototype={
$0(){return this.a.PQ("ceiling")},
$S:0}
A.e7I.prototype={
$0(){return this.a.PQ("doors")},
$S:0}
A.e7J.prototype={
$0(){return C.a4(this.a,!1).cc(C.dX(new A.e7s(),!1,null,x.H))},
$S:0}
A.e7s.prototype={
$1(d){return B.aHr},
$S:z+75}
A.eaB.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=C.aJ(d,m,x.w).w,k=this.a,j=k.d
j===$&&C.c()
w=x.p
j=C.a([B.fDr,D.au,C.d("Wiring "+j.gcZ4()+"/"+k.d.gqR().length+" \xb7 Plumbing "+k.d.gcVL()+"/"+k.d.gcVK(),m,m,m,m,m,m,B.JX,m,m,m),D.W],w)
for(v=k.d.gqR(),u=v.length,t=0;t<v.length;v.length===u||(0,C.M)(v),++t){s=v[t]
r=D.c.j(0.05)
q=new C.aQ(12,12)
p=new C.ay(s.gkL()&&s.gjQ()?D.bj.j(0.5):D.bz,1,D.r,-1)
if(s.gkL()&&s.gjQ())o="\u2705 finished"
else{o=s.gkL()?"":"\u26a1 wiring  "
o+=s.gjQ()?"":"\ud83d\udeb0 plumbing"}n=s.gkL()&&s.gjQ()?D.es:D.ad
j.push(C.aB(m,C.p(m,new C.cd(D.aM,D.e,D.i,D.m,m,D.p,m,0,C.a([new C.bA(1,D.bc,new C.y(s.b,m,B.aTH,m,m,m,m,m,m,m,m,m),m),new C.y(o,m,new C.F(!0,n,m,m,m,m,12,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m,m,m,m,m,m,m)],w),m),D.f,m,m,new C.o(r,m,new C.bK(p,p,p,p),new C.bj(q,q,q,q),m,m,D.n),m,m,m,D.eH,D.bT,m,m,m),D.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new A.eay(k,d,s),m,m,m,m,m,m,!1,D.a4))}j.push(D.O)
j.push(C.dI(B.fAo,new A.eaz(k,d),m))
j.push(D.O)
j.push(C.bH(B.fwA,m,new A.eaA(k,d),m))
return C.bl(!0,new C.cU(new C.aZ(0,1/0,0,l.a.b*0.75),C.cr(j,m,D.bQ,m,m,D.ah,!0),m),!0,!1,D.af,!0,!0)},
$S:25}
A.eay.prototype={
$0(){C.a4(this.b,!1).O(null)
this.a.Az(this.c.a)},
$S:0}
A.eaz.prototype={
$0(){C.a4(this.b,!1).O(null)
var w=this.a
w.m(new A.eax(w))
w.iD("Every room needs its wiring and plumbing again. Wire the whole house from the start.")},
$S:0}
A.eax.prototype={
$0(){var w=this.a,v=w.d
v===$&&C.c()
v.cSn()
w.iC()},
$S:0}
A.eaA.prototype={
$0(){C.a4(this.b,!1).O(null)
$.E7=A.aW4(D.o.F(Date.now(),1e5))
var w=this.a
w.m(new A.eaw(w))
w.aeg(!0)},
$S:0}
A.eaw.prototype={
$0(){var w=this.a,v=$.E7
v.toString
w.d=v
w.r="look"
w.Q=0
w.as=-1
w.at=0
w.iC()},
$S:0}
A.duo.prototype={
$1(d){var w,v,u,t,s,r=d.b,q=14*this.b,p=D.k.eb(r.a,q),o=D.k.eb(r.b,q)
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
A.f3B.prototype={
$0(){return this.b.d=this.a.a},
$S:0}
A.f3A.prototype={
$0(){return this.a.d=null},
$S:0}
A.f3D.prototype={
$1(d){return this.a.aZG(d.gfi())},
$S:81}
A.f3E.prototype={
$1(d){return this.a.aZG(d.gfi())},
$S:239}
A.f3F.prototype={
$1(d){return this.a.aZF()},
$S:124}
A.f3C.prototype={
$1(d){return this.a.aZF()},
$S:169}
A.fvO.prototype={
$1$speed(d){var w,v,u,t=null,s=this.a,r=s.a
if(r.length===0)return
w=s.b
v=s.d
u=s.c
u=u.length===0?t:D.d.gI(u)
this.b.push(new A.Mk(r,w,d,8,u,t,v,t,t))
v=x.o
s.a=C.a([],v)
s.b=C.a([],v)
s.c=C.a([],x.s)
s.d=!1},
$0(){return this.$1$speed(130)},
$S:1806}
A.fvV.prototype={
$3$note(d,e,f){var w=this.a
w.a.push(d)
w.b.push(e)
if(f!=null)w.c.push(f)},
$2(d,e){return this.$3$note(d,e,null)},
$S:z+76}
A.fvQ.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m,l,k
for(w=this.a.x,v=w.length,u=d.a,t=d.c,s=d.b,r=0;r<v;++r){q=w[r]
p=q.b
if(p!=="billboard"&&p!=="cornersign"&&p!=="townsign"&&p!=="adboard")continue
A:{if("townsign"===p){p=B.a7X
break A}if("cornersign"===p){p=B.a7Z
break A}if("adboard"===p){p=B.a7W
break A}p=B.a7Y
break A}o=p.a
n=p.b
m=(q.e&1)===1
l=q.c
k=m?n:o
if(Math.abs(u-l)<k){l=q.d
k=m?o:n
p=Math.abs(t-l)<k&&s<p.c}else p=!1
if(p)return!0}return!1},
$S:z+21}
A.fvW.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
for(w=this.a.x,v=w.length,u=0;u<=1;u+=0.02){t=A.o2(d,e,u)
for(s=t.a,r=t.c,q=t.b,p=0;p<v;++p){o=w[p]
n=o.b
if(n!=="billboard"&&n!=="cornersign"&&n!=="townsign"&&n!=="adboard")continue
A:{if("townsign"===n){n=B.a7X
break A}if("cornersign"===n){n=B.a7Z
break A}if("adboard"===n){n=B.a7W
break A}n=B.a7Y
break A}m=n.a
l=n.b
k=(o.e&1)===1
j=o.c
i=k?l:m
if(Math.abs(s-j)<i){j=o.d
i=k?m:l
n=Math.abs(r-j)<i&&q<n.c}else n=!1
if(n)return o}}return null},
$S:z+77}
A.fvP.prototype={
$2(d,e){return this.a.$2(d,e)!=null},
$S:z+78}
A.fvM.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this.a.$2(d,e)
if(i==null)return null
w=i.b
A:{if("townsign"===w){v=B.a7X
break A}if("cornersign"===w){v=B.a7Z
break A}if("adboard"===w){v=B.a7W
break A}v=B.a7Y
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
m=new A.q(v+p,q,o+n)
l=new A.q(v-p,q,o-n)
n=new A.fvN(d,e)
o=this.b
k=!o.$1(m)
j=!o.$1(l)
if(k&&j)return n.$1(m)<=n.$1(l)?m:l
if(k)v=m
else v=j?l:null
return v},
$S:z+79}
A.fvN.prototype={
$1(d){return d.aF(0,this.a).guT()+this.b.aF(0,d).guT()},
$S:z+80}
A.fvG.prototype={
$3(d,e,f){var w,v,u,t=this
if(!t.a.$2(d,e))return B.rG
w=f>=3?null:t.b.$2(d,e)
if(w==null)return C.a([new A.q((d.a+e.a)/2,430,(d.c+e.c)/2)],x.o)
v=f+1
u=C.C(t.$3(d,w,v),x.Q)
u.push(w)
D.d.v(u,t.$3(w,e,v))
return u},
$2(d,e){return this.$3(d,e,0)},
$S:z+81}
A.fvS.prototype={
$7$note(a2,a3,a4,a5,a6,a7,a8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=A.hr5(a2),a1=new A.q(a2.c,a4,a2.d)
for(w=d.d,v=d.a,u=d.b,t=Math.atan2(a0.a,a0.b)-0.55,s=a6-a5,r=d.c,q=null,p=0;p<6;++p){o=t+p*0.38
n=a5+s*p/5
m=a2.c
l=Math.sin(o)
k=p===0
j=k?40:0
i=new A.q(m+l*n,a3+a7*p/5+j,a2.d+Math.cos(o)*n)
if(u.$1(i)){if(k)q=a8
continue}m=v.a
if(m.length!==0&&p>0){h=D.d.gak(m)
g=!1
f=0
for(;;){if(!(f<=1&&!g))break
g=u.$1(A.o2(h,i,f))
f+=0.02}if(g)for(m=r.$2(h,i),l=m.length,e=0;e<m.length;m.length===l||(0,C.M)(m),++e)w.$2(m[e],D.d.gak(v.b))}w.$3$note(i,a1,k?a8:q)
q=null}},
$6(d,e,f,g,h,i){return this.$7$note(d,e,f,g,h,i,null)},
$S:z+104}
A.fvU.prototype={
$1(d){var w=d.b,v=this.a
switch(w){case"townsign":v.$7$note(d,255,250,430,520,60,"The biggest billboard in the city: NGMY Town")
break
case"cornersign":v.$7$note(d,115,120,210,260,50,"A corner billboard: NGMY Town")
break
case"adboard":v.$7$note(d,160,142,330,410,55,"A big NGMY ad billboard")
break
case"tower":v.$7$note(d,430,(w==="hq"?278:A.hqp(B.ze[d.f]))+40,150,210,20,"A tower with NGMY ad boards")
break
case"hq":v.$7$note(d,440,312,190,250,20,"The NGMY company building")
break
default:v.$7$note(d,75,48,130,175,45,"An NGMY billboard")}},
$S:z+29}
A.fvT.prototype={
$1(d){var w,v,u,t,s,r,q,p=this.a,o=p.a.length
this.b.$1(d)
if(o>0&&o<p.a.length){w=p.a
v=o-1
u=this.c.$2(w[v],w[o])
w=J.a5(u)
if(w.gL(u)!==0){t=p.b
s=t[v]
r=t[o]
for(q=0;q<w.gL(u);){v=o+q
D.d.c6(p.a,v,w.h(u,q));++q
D.d.c6(p.b,v,A.o2(s,r,q/(w.gL(u)+1)))}}}},
$S:z+29}
A.fvR.prototype={
$1(d){var w
this.b.$0()
w=x.o
this.c.push(new A.Mk(C.a([B.h9x,B.fVX,B.fXY],w),C.a([B.ha3,B.fXd,B.h_A],w),55,8,"Inside the "+B.hy.h(0,d.b).a.toLowerCase(),d,!1,null,null))
this.a.d=!0},
$S:z+29}
A.fvH.prototype={
$1(d){return d.b==="townsign"},
$S:z+4}
A.fvI.prototype={
$2(d,e){var w=this.a
return D.k.aK(Math.pow(d.c-w.a.a,2)+Math.pow(d.d-w.a.c,2),Math.pow(e.c-w.a.a,2)+Math.pow(e.d-w.a.c,2))},
$S:z+16}
A.fvF.prototype={
$1(d){return Math.atan2(d.d-1000,d.c)},
$S:z+84}
A.fvJ.prototype={
$2(d,e){var w=this.a
return J.Di(w.$1(d),w.$1(e))},
$S:z+16}
A.fvK.prototype={
$1(d){return d.b==="bighouse"},
$S:z+4}
A.fvL.prototype={
$1(d){return d.b===this.a},
$S:z+4}
A.cfI.prototype={
$0(){var w=0,v=C.j(x.P),u=1,t=[],s,r,q,p,o,n
var $async$$0=C.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
w=6
return C.b($.r3().jM(0,"assets/images/ngmy_logo.png"),$async$$0)
case 6:s=e
w=7
return C.b(C.fzi(J.eR(J.vA(s)),null),$async$$0)
case 7:r=e
o=$
n=J
w=8
return C.b(r.lK(),$async$$0)
case 8:o.W5=n.a37(e)
u=1
w=5
break
case 3:u=2
p=t.pop()
$.W5=null
w=5
break
case 2:w=1
break
case 5:return C.h(null,v)
case 1:return C.f(t.at(-1),v)}})
return C.i($async$$0,v)},
$S:49}
A.fN6.prototype={
$4(d,e,f,g){var w,v,u=null,t=e*0.05,s=C.fu(u,u,1,u,C.cS(u,u,u,u,u,u,u,u,u,C.l(u,u,f,u,u,u,u,u,u,u,u,e,u,u,D.u,u,u,!0,u,t,u,u,u,u,u,u),d),D.a3,D.bZ,u,D.dA,D.bW)
s.el()
w=s.b.c
v=this.a
if(w>v){s=C.fu(u,u,1,u,C.cS(u,u,u,u,u,u,u,u,u,C.l(u,u,f,u,u,u,u,u,u,u,u,e*v/w,u,u,D.u,u,u,!0,u,t,u,u,u,u,u,u),d),D.a3,D.bZ,u,D.dA,D.bW)
s.el()}s.a3(this.b,new C.t(this.c+v/2-s.b.c/2,g))},
$S:1807}
A.fN4.prototype={
$1(d){var w,v,u,t,s,r=null,q=this.a,p=this.b,o=d.d-d.b
if(q!=null){w=q.c
v=q.d
u=Math.min((d.c-d.a)/w,o/v)
o=C.bJ(d.gbK(),v*u,w*u)
$.S()
t=C.I()
t.Q=D.cg
p.ox(q,new C.a3(0,0,w,v),o,t)}else{s=C.fu(r,r,r,r,C.cS(r,r,r,r,r,r,r,r,r,C.l(r,r,this.c,r,r,r,r,r,r,r,r,o*0.6,r,r,D.u,r,r,!0,r,r,r,r,r,r,r,r),"NGMY"),D.a3,D.bZ,r,D.dA,D.bW)
s.el()
q=d.gbK()
o=s.b
w=o.c
o=o.a.c
s.a3(p,q.aF(0,new C.t(w/2,o.gbb(o)/2)))}},
$S:1808}
A.fN3.prototype={
$4$w(d,e,f,g){var w=null,v=C.fu(w,w,w,w,C.cS(w,w,w,w,w,w,w,w,w,C.l(w,w,this.a,w,w,w,w,w,w,w,w,f,w,w,g,w,w,!0,w,f*0.08,w,w,w,w,w,w),d),D.a3,D.bZ,w,D.dA,D.bW)
v.nY(this.b.a*0.9)
v.a3(this.c,e.aF(0,new C.t(v.b.c/2,0)))},
$3(d,e,f){return this.$4$w(d,e,f,D.u)},
$S:1809}
A.fN5.prototype={
$1(d){var w=null,v=this.a.b*0.16
v=C.fu(w,w,w,w,C.cS(w,w,w,w,w,w,w,w,w,C.l(w,w,w,w,w,w,w,w,w,w,w,v,w,w,D.u,w,w,!0,w,v*0.08,w,w,w,w,w,w),d),D.a3,D.bZ,w,D.dA,D.bW)
v.el()
return v.b.c},
$S:726}
A.fwb.prototype={
$2(d,e){return this.a===d?e:0},
$S:727}
A.fvY.prototype={
$1(d){return d.b==="right"},
$S:z+20}
A.fw8.prototype={
$0(){var w=C.a([],x.z),v=new A.fk(w)
v.f=1
v.x=$.dS=$.dS+1
v.aO(B.hcq,B.h_I,B.Bc)
v.aZ(B.fVL,B.h5R,B.hV,0.5)
v.aO(B.aVI,B.h7r,B.Bc)
v.aO(B.aVI,B.h3t,B.Bc)
return w},
$S:z+85}
A.fw9.prototype={
$1(d){var w=this,v=w.a,u=v.b
A:{if("left"===u){v=A.nx(d,0,1.5707963267948966,new A.q(-w.b/2,0,v.c+w.c/2-40))
break A}if("right"===u){v=A.nx(d,0,-1.5707963267948966,new A.q(w.b/2,0,v.c+w.c/2-40))
break A}v=A.nx(d,0,0,new A.q(v.c,0,0))
break A}return v},
$S:z+86}
A.fvZ.prototype={
$1(d){return d.b==="back"},
$S:z+20}
A.fw_.prototype={
$1(d){return d.c},
$S:z+87}
A.fw0.prototype={
$2(d,e){return e},
$S:80}
A.fw1.prototype={
$3(d,e,f){return I.RT(d,e,0,f+this.a)},
$S:24}
A.fw3.prototype={
$2(a8,a9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this
if(a8==null)return
w=A.aPp(a8)
v=a7.a
u=A.h85(v,w,a9)
t=u.a
s=u.b
r=u.d
q=t-2.5
p=s-2.5
o=v.p3+a9*2
n=a7.b
m=n.b=730+a9
l=n.x=$.dS=$.dS+1
n.e=5
k=v.c==="hall"
if(!(k&&a9<2))j=!k&&v.p1!=="back"
else j=!0
if(j){i=k?a9===1:v.p1==="left"
k=a7.c
h=i?-k/2:k/2
g=i?1:-1
f=u.c
n.aZ(new A.q(h+g*1.4,r,f),new A.q(2.6,s+3,t+3),B.LO,0.5)
n.aZ(new A.q(h+g*2.8,r,f),new A.q(0.2,s,t),F.nd,0.7)
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
k.push(new A.fO(C.a([new A.q(e,a1,d),new A.q(e,a1,a0),new A.q(e,j,a0),new A.q(e,j,d)],a2),m,new A.fw4(o,v,a9),320,a3,9,1,l,!1))
a4=h+g*0.05
k.push(new A.fO(C.a([new A.q(a4,a1,a0),new A.q(a4,a1,d),new A.q(a4,j,d),new A.q(a4,j,a0)],a2),m,new A.fw5(o,v,a9),320,a3,9,1,l,!1))}}else{h=u.c
n.aZ(new A.q(h,r,1.4),new A.q(t+3,s+3,2.6),B.LO,0.5)
n.aZ(new A.q(h,r,2.8),new A.q(t,s,0.2),F.nd,0.7)
if(v.p2){k=a7.d
j=q/2
a1=h-j
a2=p/2
a3=r+a2
j=h+j
a2=r-a2
a5=x.o
a6=320*p/q
k.push(new A.fO(C.a([new A.q(a1,a3,2.95),new A.q(j,a3,2.95),new A.q(j,a2,2.95),new A.q(a1,a2,2.95)],a5),m,new A.fw6(o,v,a9),320,a6,9,1,l,!1))
k.push(new A.fO(C.a([new A.q(j,a3,0.05),new A.q(a1,a3,0.05),new A.q(a1,a2,0.05),new A.q(j,a2,0.05)],a5),m,new A.fw7(o,v,a9),320,a6,9,1,l,!1))}}n.e=n.x=0
v=v.p2?"It is on and playing "+E.kk[D.o.F(o,8)].a+". Tap it to watch full screen with the remote.":"The TV is off. Tap it to turn it on."
a7.e.n(0,m,new A.cW(w.b,v,new A.q(0,r,4),110))},
$S:1812}
A.fw4.prototype={
$3(d,e,f){return I.RT(d,e,this.a,f+this.b.a+this.c*3)},
$S:24}
A.fw5.prototype={
$3(d,e,f){return I.RT(d,e,this.a,f+this.b.a+this.c*3)},
$S:24}
A.fw6.prototype={
$3(d,e,f){return I.RT(d,e,this.a,f+this.b.a+this.c*3)},
$S:24}
A.fw7.prototype={
$3(d,e,f){return I.RT(d,e,this.a,f+this.b.a+this.c*3)},
$S:24}
A.fwa.prototype={
$2(d,e){var w=this.a,v=w.f,u=w.r
w.f=1
w.r=!1
w.b=0
w.dR(new A.q(d,e,0),new A.q(d,e,2.2),0.7,B.LE,0.7,10)
w.f=v
w.r=u},
$S:250}
A.fw2.prototype={
$1(d){return d.b===this.a.a},
$S:z+14}
A.fp9.prototype={
$2(d,e){return this.a===d?e:0},
$S:727}
A.fpa.prototype={
$5(d,e,f,g,h){var w=d.a8(0,e.aI(0,g)).a8(0,new A.q(0,h,0)),v=this.a
A.kG(v,w.a8(0,f.aI(0,0.1)),e,B.ea,26,30,B.kA,f,0)
A.kG(v,w.a8(0,f.aI(0,0.2)),e,B.ea,22,26,B.hV,f,0.6)
A.kG(v,w.a8(0,f.aI(0,0.3)),e,B.ea,22,1.2,B.kA,f,0)
A.kG(v,w.a8(0,f.aI(0,0.3)),e,B.ea,1.2,26,B.kA,f,0)},
$S:z+88}
A.fp5.prototype={
$5(d,e,f,g,h){var w=d.a8(0,e.aI(0,g)),v=this.a,u=v.b
A.kG(v,w.a8(0,new A.q(0,42,0)).a8(0,f.aI(0,0.1)),e,B.ea,34,84,B.kA,f,0)
v.b=h
A.kG(v,w.a8(0,new A.q(0,41,0)).a8(0,f.aI(0,0.2)),e,B.ea,28,80,B.vy,f,0.2)
v.b=0
A.kG(v,w.a8(0,new A.q(0,58,0)).a8(0,f.aI(0,0.3)),e,B.ea,20,26,B.MD,f,0)
A.kG(v,w.a8(0,new A.q(0,22,0)).a8(0,f.aI(0,0.3)),e,B.ea,20,26,B.MD,f,0)
v.aZ(w.a8(0,e.aI(0,9)).a8(0,new A.q(0,40,0)).a8(0,f.aI(0,1)),new A.q(2.6,2.6,2.6),B.ET,0.8)
v.b=u},
$S:z+123}
A.fp6.prototype={
$5$poster(d,e,f,g,h){var w=C.a([d,e,f,g],x.o),v=h<0?A.h7y():new A.fp7(h),u=h===0,t=u?1000:256
u=u?424:256
return this.a.push(new A.fO(w,0,v,t,u,1,2,this.b,!1))},
$4(d,e,f,g){return this.$5$poster(d,e,f,g,-1)},
$S:z+90}
A.fp7.prototype={
$3(d,e,f){return A.fN2(d,e,f,this.a)},
$S:24}
A.fox.prototype={
$1(d){var w=d.b
return w==="pole"||w==="lamppost"},
$S:z+4}
A.foy.prototype={
$2(d,e){return D.k.aK(d.c,e.c)},
$S:z+16}
A.foz.prototype={
$1(d){return this.a.cy.aj(0,d.a)},
$S:z+4}
A.foK.prototype={
$1(d){return this.a.k4.t(0,d.a)},
$S:z+4}
A.foV.prototype={
$1(d){return B.f27.t(0,d.b)},
$S:z+4}
A.fp8.prototype={
$3(d,e,f){var w=this.b
return A.vw(new A.q(d,e,f),this.a).a8(0,new A.q(w.c,0,w.d))},
$S:z+24}
A.fp_.prototype={
$3(d,e,f){return A.ne(d,e,f,this.a.a+D.k.bh(f/7))},
$S:24}
A.fp0.prototype={
$3(d,e,f){return A.ne(d,e,f,this.a.a+D.k.bh(f/7))},
$S:24}
A.fp1.prototype={
$3(d,e,f){return A.H1(d,e,f,"NGMY TOWN",this.a)},
$S:24}
A.fp2.prototype={
$3(d,e,f){return A.H1(d,e,f,"NGMY TOWN",this.a)},
$S:24}
A.fp3.prototype={
$3(d,e,f){return A.ne(d,e,f,this.a.a+D.k.bh(f/7))},
$S:24}
A.fp4.prototype={
$3(d,e,f){return A.ne(d,e,f,this.a.a+4+D.k.bh(f/7))},
$S:24}
A.foA.prototype={
$3(d,e,f){return A.ne(d,e,f,this.a.a+D.k.bh(f/7))},
$S:24}
A.foB.prototype={
$3(d,e,f){return A.ne(d,e,f,this.a.a+7+D.k.bh(f/7))},
$S:24}
A.foC.prototype={
$3(d,e,f){return A.ne(d,e,f,this.a.a+3+D.k.bh(f/7))},
$S:24}
A.foD.prototype={
$3(d,e,f){return A.ne(d,e,f,this.a.a+5+D.k.bh(f/7))},
$S:24}
A.foE.prototype={
$3(d,e,f){return A.ne(d,e,f,this.a.a+1+D.k.bh(f/7))},
$S:24}
A.foF.prototype={
$3(d,e,f){return A.ne(d,e,f,this.a.a+2+D.k.bh(f/7))},
$S:24}
A.foG.prototype={
$3(d,e,f){return A.H1(d,e,f,"NGMY COMPANY","Building the movement")},
$S:24}
A.foH.prototype={
$3(d,e,f){return A.H1(d,e,f,"NGMY","New Global Movement for Youth")},
$S:24}
A.foI.prototype={
$3(d,e,f){return A.H1(d,e,f,"NGMY COMPANY","Building the movement")},
$S:24}
A.foJ.prototype={
$3(d,e,f){return A.H1(d,e,f,"NGMY","New Global Movement for Youth")},
$S:24}
A.foL.prototype={
$3(d,e,f){return A.ne(d,e,f,this.a.a+4+D.k.bh(f/7))},
$S:24}
A.foM.prototype={
$3(d,e,f){return A.ne(d,e,f,this.a.a+6+D.k.bh(f/7))},
$S:24}
A.foN.prototype={
$3(d,e,f){return A.ne(d,e,f,this.a.a+2+D.k.bh(f/7))},
$S:24}
A.foO.prototype={
$3(d,e,f){return A.ne(d,e,f,this.a.a+3+D.k.bh(f/7))},
$S:24}
A.foP.prototype={
$3(d,e,f){return A.H1(d,e,f,"NGMY STORE","Everything you need")},
$S:24}
A.foQ.prototype={
$3(d,e,f){return A.H1(d,e,f,"NGMY UBER","Rides home")},
$S:24}
A.foR.prototype={
$3(d,e,f){return A.H1(d,e,f,"NGMY UBER","Rides home")},
$S:24}
A.foS.prototype={
$3(d,e,f){return A.H1(d,e,f,"NGMY LICENCE","Get your Uber licence")},
$S:24}
A.foT.prototype={
$3(d,e,f){return A.H1(d,e,f,"NGMY GAS","Open 24 hours")},
$S:24}
A.foU.prototype={
$3(d,e,f){return A.ne(d,e,f,this.a.a*2+this.b+1)},
$S:24}
A.foW.prototype={
$1(d){return d.b===this.a.a&&!d.x&&d.Q.length!==0},
$S:z+14}
A.foX.prototype={
$1(d){return d.b===this.a.a&&d.x},
$S:z+14}
A.foY.prototype={
$3(d,e,f){return A.fN2(d,e,f,0)},
$S:24}
A.foZ.prototype={
$3(d,e,f){return A.fN2(d,e,f,0)},
$S:24}
A.fza.prototype={
$2(d,e){var w,v=this.a
if(v!=null){w=v.b-d
v=v.c-e
v=w*w+v*v<1e4}else v=!0
return v},
$S:1813}
A.fz7.prototype={
$1(d){return D.d.t(B.HP,d.b)},
$S:z+4}
A.fz8.prototype={
$1(d){return d.b===this.a.a},
$S:z+14}
A.fz9.prototype={
$1(d){return d.b===this.a.a},
$S:z+14}
A.ffq.prototype={
$5(d,e,f,g,h){var w,v,u,t,s,r,q,p,o,n,m,l,k,j
for(w=d.length,v=x.z,u=this.a,t=-f/2,s=u.a,r=this.b,q=0,p=0;p<w;++p){o=d[p]
n=o.a
m=C.a([],v)
l=new A.fk(m)
l.b=u.b
l.f=u.f
l.r=!0
l.aO(new A.q(0,t,0),new A.q(g,f,g),h)
k=(q&1)===0?1:-1
j=n>0?1:-1
D.d.v(s,A.nx(m,r*k*j,0,new A.q(n,e,o.b)));++q}},
$S:1814}
A.ffg.prototype={
$3(d,e,f){var w=this.a,v=this.b,u=this.c
return new A.q(w.c+v*d+u*f,e,w.d+u*d-v*f)},
$2(d,e){return this.$3(d,e,0)},
$S:z+43}
A.fpZ.prototype={
$3(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k=x.z,j=C.a([],k),i=new A.fk(j)
i.b=this.a
i.r=!0
d.$1(i)
k=C.a([],k)
for(j=A.bBL(j,e,B.dX),w=j.length,v=f.a,u=f.b,t=f.c,s=x.o,r=0;r<j.length;j.length===w||(0,C.M)(j),++r){q=j[r]
p=C.a([],s)
for(o=q.a,n=o.length,m=0;m<o.length;o.length===n||(0,C.M)(o),++m){l=o[m]
p.push(new A.q(l.a+v,l.b+u,l.c+t))}k.push(new A.kn(p,q.b,q.c,q.d,q.e,q.f,q.r,q.w,q.x,q.y,q.z))}D.d.v(this.b.a,k)},
$S:z+91}
A.fpw.prototype={
$6$joint(d,e,f,g,h,i){var w=this.a
w.Tb(d,e,f,h,!1,g,this.b)
if(this.c&&i)w.ed(e,g*1.04,h,3,6)},
$5(d,e,f,g,h){return this.$6$joint(d,e,f,g,h,!0)},
$S:z+92}
A.fpx.prototype={
$1(d){return d.fT(B.dX,2.6,B.Yl,this.a,this.b,0.15)},
$S:z+1}
A.fpy.prototype={
$1(d){return d.ed(B.dX,2.6,D.bO,3,this.a)},
$S:z+1}
A.fpz.prototype={
$1(d){return d.ed(B.dX,5.2,this.a,this.b,this.c+2)},
$S:z+1}
A.fpK.prototype={
$1(d){var w=this,v=w.d?12:8
return d.Tb(B.dX,B.aat,w.a,w.b,!1,w.c,v)},
$S:z+1}
A.fpS.prototype={
$1(d){return d.L5(B.dX,B.h4S,5.1,B.beY,!1,12)},
$S:z+1}
A.fpT.prototype={
$1(d){return d.ed(B.dX,2.7,this.a,this.b,this.c)},
$S:z+1}
A.fpU.prototype={
$1(d){var w=this,v=w.a?6.2:6.7,u=w.c
if(u<4)u=4
return d.ed(B.dX,v,w.b,u,w.d)},
$S:z+1}
A.fpV.prototype={
$1(d){var w=this.b,v=w?6:4
w=w?12:8
return d.ed(B.dX,4.7,this.a,v,w)},
$S:z+1}
A.fpW.prototype={
$1(d){return d.ed(B.dX,3,this.a,this.b,this.c)},
$S:z+1}
A.fpX.prototype={
$1(d){return d.ed(B.dX,1.25,this.a,3,6)},
$S:z+1}
A.fpY.prototype={
$1(d){return d.ed(B.dX,1,D.c,3,6)},
$S:z+1}
A.fpA.prototype={
$1(d){return d.ed(B.dX,1.15,this.a,2,6)},
$S:z+1}
A.fpB.prototype={
$1(d){return d.ed(B.dX,1,this.a,3,6)},
$S:z+1}
A.fpC.prototype={
$1(d){return d.ed(B.dX,1,this.a,2,6)},
$S:z+1}
A.fpD.prototype={
$1(d){var w=C.ar(this.a,D.c,0.1)
w.toString
return d.ed(B.dX,1,w,2,6)},
$S:z+1}
A.fpE.prototype={
$1(d){var w=this.b,v=w?4:3
w=w?9:6
return d.ed(B.dX,5,this.a,v,w)},
$S:z+1}
A.fpF.prototype={
$1(d){return d.ed(B.dX,3.6,this.a,3,this.b)},
$S:z+1}
A.fpG.prototype={
$1(d){return d.ed(B.dX,4.8,this.a,this.b,this.c)},
$S:z+1}
A.fpH.prototype={
$1(d){var w=this.b,v=w?4:3
w=w?9:6
return d.ed(B.dX,6.2,this.a,v,w)},
$S:z+1}
A.fpI.prototype={
$1(d){return d.ed(B.dX,4.2,this.a,3,this.b)},
$S:z+1}
A.fpJ.prototype={
$1(d){var w=this.b,v=w?4:3
w=w?9:6
return d.ed(B.dX,5.1,this.a,v,w)},
$S:z+1}
A.fpL.prototype={
$1(d){return d.ed(B.dX,3.4,this.a,3,this.b)},
$S:z+1}
A.fpM.prototype={
$1(d){var w=C.ar(this.a,D.c,Math.abs(0.08))
w.toString
return d.ed(B.dX,2.6,w,this.b,this.c)},
$S:z+1}
A.fpN.prototype={
$1(d){return d.ed(B.dX,4.9,this.a,this.b,this.c)},
$S:z+1}
A.fpO.prototype={
$1(d){return d.ed(B.dX,3,this.a,3,this.b)},
$S:z+1}
A.fpP.prototype={
$1(d){var w=this.b,v=w?4:3
w=w?9:6
return d.ed(B.dX,5,this.a,v,w)},
$S:z+1}
A.fpQ.prototype={
$1(d){return d.ed(B.dX,3.6,this.a,3,this.b)},
$S:z+1}
A.fpR.prototype={
$1(d){return d.ed(B.dX,2.3,this.a,3,6)},
$S:z+1}
A.fjf.prototype={
$4(d,e,f,g){var w,v,u,t,s,r,q,p
for(w=this.a,v=e/2+0.2,u=d-8,t=-e/2-0.2,s=d/2+0.2,r=e-8,q=-d/2-0.2,p=f;p<g;p+=22){A.kG(w,new A.q(0,p,v),B.hE,B.ea,u,9,B.hV,B.iq,0.6)
A.kG(w,new A.q(0,p,t),B.qN,B.ea,u,9,B.hV,B.td,0.6)
A.kG(w,new A.q(s,p,0),B.td,B.ea,r,9,B.hV,B.hE,0.6)
A.kG(w,new A.q(q,p,0),B.iq,B.ea,r,9,B.hV,B.qN,0.6)}},
$S:1815}
A.fwg.prototype={
$4$alongX(d,e,f,g){var w,v,u,t,s,r,q,p,o,n
for(w=this.a,v=0;v<=f;++v){u=A.o2(d,e,v/f)
w.aDB(new A.q(u.a,4,u.c),B.hd1,B.Y8,!1,0.05)}t=A.o2(d,e,0.5)
for(s=e.aF(0,d).guT()+0.15,r=t.a,q=t.c,p=0;p<2;++p){o=B.deA[p]
n=g?new A.q(s,0.16,0.3):new A.q(0.3,0.16,s)
w.aZ(new A.q(r,o,q),n,B.Y8,0.05)}},
$3(d,e,f){return this.$4$alongX(d,e,f,!0)},
$S:z+94}
A.fwd.prototype={
$2(d,e){return this.a.jh(A.H2(d,0.35,3),0.06,e,!1,0.4,6)},
$S:z+95}
A.fwc.prototype={
$1(d){return this.a.jh(A.H2(d,0.5,3),0.14,B.pS,!1,0.3,8)},
$S:z+96}
A.fwf.prototype={
$2$col(d,e){return this.a.jh(A.H2(d,0.4,3),0.055,e,!1,0.35,6)},
$1(d){return this.$2$col(d,B.Yh)},
$S:z+97}
A.fwe.prototype={
$5$h$w(d,e,f,g,h){var w=this.a
w.b=d
w.aZ(e,new A.q(h,g,0.06),f,0.3)},
$3(d,e,f){return this.$5$h$w(d,e,f,0.7,0.45)},
$4$w(d,e,f,g){return this.$5$h$w(d,e,f,0.7,g)},
$S:z+98}
A.fxb.prototype={
$0(){return A.fV(1320,120,0.25,"tri")},
$S:0}
A.dRI.prototype={
$1(d){return this.a},
$S:39}
A.dRJ.prototype={
$0(){return C.a4(this.a,!1).ic()},
$S:0}
A.dRK.prototype={
$0(){return this.a.rA(A.b0v("","",!1))},
$S:0}
A.dRL.prototype={
$0(){return this.a.rA(B.dC6)},
$S:0}
A.dRP.prototype={
$0(){return this.a.rA(A.b0v("wiring","",!1))},
$S:0}
A.dRQ.prototype={
$0(){return this.a.rA(A.b0v("plumbing","",!1))},
$S:0}
A.dRR.prototype={
$0(){return this.a.rA(A.b0v("fix","",!1))},
$S:0}
A.dRS.prototype={
$0(){return this.a.rA(A.chu(!1,null,!1))},
$S:0}
A.dRT.prototype={
$0(){return this.a.rA(A.chu(!1,null,!0))},
$S:0}
A.dRU.prototype={
$0(){return this.a.rA(B.e6N)},
$S:0}
A.dRV.prototype={
$0(){return this.a.rA(new A.arH(!1,null))},
$S:0}
A.dRW.prototype={
$0(){return this.a.rA(B.dM7)},
$S:0}
A.dRM.prototype={
$0(){var w=this.b.a
w=w==="house"?B.hhj:A.b0v("",w,!1)
return this.a.rA(w)},
$S:0}
A.dRN.prototype={
$0(){return this.a.rA(B.dIR)},
$S:0}
A.dRO.prototype={
$0(){return this.a.rA(B.aHr)},
$S:0}
A.f3r.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new A.f3q())},
$S:11}
A.f3q.prototype={
$0(){},
$S:0}
A.cwo.prototype={
$0(){$.aje=!$.aje
A.haz()
A.fV($.aje?520:420,60,0.25,"tri")},
$S:0}
A.cwp.prototype={
$0(){$.ajd=!$.ajd
A.haz()
A.fV($.ajd?520:420,60,0.25,"tri")},
$S:0}
A.fOi.prototype={
$1(d){var w,v,u,t,s,r,q,p,o=null,n=C.aJ(d,o,x.w).w,m=this.b,l=this.c,k=l.length,j=x.p,i=C.a([C.d(this.a,o,o,o,o,o,o,D.dd,o,o,o),D.au,C.d(""+new C.Z(m,new A.fOh(),C.T(m).k("Z<1>")).gL(0)+" of "+k+" steps done",o,o,o,o,o,o,B.JX,o,o,o),D.W],j)
for(w=0;w<k;++w){v=D.c.j(0.05)
u=new C.aQ(14,14)
t=new C.ay(m[w]?D.bj.j(0.6):D.bz,1,D.r,-1)
s=m[w]
r=s?"\u2705":""+(w+1)+"."
q=s?D.c:D.aC
p=l[w]
s=s?D.aB:D.c
i.push(C.p(o,new C.cd(D.aM,D.e,D.i,D.E,o,D.p,o,0,C.a([new C.y(r,o,new C.F(!0,q,o,o,o,o,14,D.u,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),o,o,o,o,o,o,o,o,o),D.at,new C.bA(1,D.bc,new C.y(p,o,new C.F(!0,s,o,o,o,o,13,o,o,o,o,o,1.4,o,o,o,o,o,o,o,o,o,o,o,o,o),o,o,o,o,o,o,o,o,o),o)],j),o),D.f,o,o,new C.o(v,o,new C.bK(t,t,t,t),new C.bj(u,u,u,u),o,o,D.n),o,o,o,D.ct,D.bf,o,o,o))}return C.bl(!0,new C.cU(new C.aZ(0,1/0,0,n.a.b*0.75),C.cr(i,o,D.bQ,o,o,D.ah,!0),o),!0,!1,D.af,!0,!0)},
$S:25}
A.fOh.prototype={
$1(d){return d},
$S:119}
A.bWC.prototype={
$0(){return C.a4(this.a,!1).ic()},
$S:0}
A.dab.prototype={
$0(){var w=this.a,v=w.ger(0),u=this.b
v.r=u==="practice"
u=u==="test"
v.y=u
if(u)v.f=v.e=!1
w.qA()},
$S:0}
A.da9.prototype={
$0(){var w=this.a
w.y=this.b
w.z=this.c},
$S:0}
A.daa.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.da8(w))},
$S:0}
A.da8.prototype={
$0(){return this.a.y=null},
$S:0}
A.d9X.prototype={
$0(){return this.a.x=0},
$S:0}
A.d9Y.prototype={
$0(){return this.a.x=0},
$S:0}
A.d9W.prototype={
$1(d){var w=this.a.ger(0).b
return new C.bc(w,C.a6(w).k("bc<2>")).t(0,d)},
$S:3}
A.d9Z.prototype={
$1(d){return d.a===this.a},
$S:z+13}
A.da_.prototype={
$2(d,e){return e===this.a},
$S:451}
A.da0.prototype={
$0(){var w=this.a
w.w=""
w.qA()},
$S:0}
A.da1.prototype={
$1(d){return d.a===this.a},
$S:z+7}
A.da2.prototype={
$0(){var w=this.a,v=this.b
if(w.w===v)v=""
w.w=v
w.x=v.length===0?0:this.c},
$S:0}
A.da3.prototype={
$1(d){return d.a===this.a},
$S:z+7}
A.da4.prototype={
$0(){var w=this.a
w.qA()
w.x=this.b},
$S:0}
A.da5.prototype={
$0(){var w=this.a
w.qA()
w.x=this.b},
$S:0}
A.da6.prototype={
$0(){return this.a.x=this.b},
$S:0}
A.da7.prototype={
$0(){var w=this.a,v=w.ger(0),u=v.a
v.a=!u
if(u)v.d=!1
w.qA()},
$S:0}
A.dac.prototype={
$0(){var w,v=this.a,u=v.ger(0)
u.a=!0
u.d=!1
w=this.b
if(w.e)u.w=!0
u.z=w.r
v.ax=v.at.gi8()/1000
v.qA()},
$S:0}
A.dad.prototype={
$0(){var w=this.a,v=w.ger(0)
v.d=v.a=!0
w.qA()},
$S:0}
A.dam.prototype={
$1(d){return!d},
$S:119}
A.dav.prototype={
$0(){var w=this.a.gz4()
return A.fOg(this.b,w.b,w.d,this.c)},
$S:0}
A.daC.prototype={
$1(d){var w,v,u,t,s=C.a([],x.z),r=this.a,q=r.ger(0),p=q.z
if(p.length!==0){p=r.at.gi8()
w=r.ax
v=q.z
u=v==="fire"?7:4.5
t=p/1000-w<u
p=v}else t=!1
if(!t)q=q.w&&p.length!==0
else q=!0
if(q){q=t?p:"smolder"
A.hra(new A.fk(s),q,new A.daj(),0.32,r.at.gi8()/1000)}return s},
$S:z+10}
A.daj.prototype={
$1(d){return new A.q(d.a*0.32,-0.2+d.b*0.32,0.8+d.c*0.32)},
$S:z+6}
A.dan.prototype={
$0(){return this.a.aAD("learn")},
$S:0}
A.dao.prototype={
$0(){return this.a.aAD("practice")},
$S:0}
A.daw.prototype={
$0(){return this.a.aAD("test")},
$S:0}
A.dax.prototype={
$0(){var w=this.a
return w.m(new A.dal(w))},
$S:0}
A.dal.prototype={
$0(){var w=this.a,v=w.ger(0)
v.e=!v.e
w.qA()},
$S:0}
A.day.prototype={
$0(){var w=this.a
return w.m(new A.dak(w))},
$S:0}
A.dak.prototype={
$0(){var w=this.a,v=w.ger(0)
v.f=!v.f
w.qA()},
$S:0}
A.daz.prototype={
$0(){return A.h7W(this.a)},
$S:0}
A.daA.prototype={
$0(){var w=this.a,v=w.gil()
return v.hQ(10,0.2,new A.q(0.6,0,w.ger(0).c===0?4.2:0.4),-0.95)},
$S:0}
A.daB.prototype={
$0(){var w=this.a,v=w.gil()
return v.hQ(10,0.2,new A.q(-0.6,0,w.ger(0).c===0?4.2:0.4),0.95)},
$S:0}
A.daD.prototype={
$1(d){return!this.a.ger(0).b.iI(0,d.a)},
$S:z+7}
A.dap.prototype={
$0(){var w=this.a,v=this.b,u=v.a
if(w.ger(0).b.iI(0,u)){w.nA("That wire is already fastened. Tap the wire in the 3D view to take it off if you want to move it.")
return}w.m(new A.dai(w,v))
if(w.w.length!==0){w.aXy(u)
w.jb(v.b+": now tap the screw it belongs on.",!0)}},
$S:0}
A.dai.prototype={
$0(){var w=this.a,v=this.b.a
return w.w=w.w===v?"":v},
$S:0}
A.daq.prototype={
$0(){var w=this.a,v=w.gz4(),u=v.b,t=A.fNO(v)
w=w.ger(0)
w=C.a([new A.ab1(u,t,A.h5i(v,w),w.x)],x.fJ)
v=B.aGc.h(0,v.a)
if(v==null)v=B.azt
return A.hvw(this.b,w,v,u)},
$S:0}
A.dar.prototype={
$0(){var w=this.a
w.m(new A.dah(w))
A.yI()
w.jb("The wires are folded back and the device is pushed into the box. Now put the cover plate on.",!0)
w.og()},
$S:0}
A.dah.prototype={
$0(){var w=this.a
w.ger(0).c=1
w.qA()},
$S:0}
A.das.prototype={
$0(){var w=this.a
w.m(new A.dag(w))
w.og()},
$S:0}
A.dag.prototype={
$0(){var w=this.a
w.ger(0).c=0
w.qA()},
$S:0}
A.dat.prototype={
$0(){var w=this.a
w.m(new A.daf(w))
A.yI()
w.jb("Cover plate on. Now turn the power on and test.",!0)},
$S:0}
A.daf.prototype={
$0(){var w=this.a
w.ger(0).c=2
w.qA()},
$S:0}
A.dau.prototype={
$0(){var w=this.a
w.m(new A.dae(w))
w.og()},
$S:0}
A.dae.prototype={
$0(){var w=this.a,v=w.ger(0)
v.c=0
v.b.a9(0)
v.a=!0
v.w=v.d=!1
v.z=""
w.Q=0
w.w=""
w.x=0
w.qA()},
$S:0}
A.eTH.prototype={
$0(){var w=this.a
w.x=this.b
w.y=this.c},
$S:0}
A.eTI.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.eTG(w))},
$S:0}
A.eTG.prototype={
$0(){return this.a.x=null},
$S:0}
A.eTA.prototype={
$0(){return this.a.w=0},
$S:0}
A.eTB.prototype={
$0(){var w=this.a,v=w.ger(0)
v.a.M(0,this.b)
v.c=!1
v.d=""
w.f=A.bC4(v)
w.r=""},
$S:0}
A.eTC.prototype={
$0(){var w=this.a,v=w.ger(0)
v.b.n(0,this.b,!0)
v.d=""
w.f=A.bC4(v)},
$S:0}
A.eTD.prototype={
$0(){return this.a.w=this.b},
$S:0}
A.eTE.prototype={
$1(d){return this.a.ger(0).b.h(0,d)!==!0},
$S:3}
A.eTF.prototype={
$0(){var w,v=this.a,u=v.ger(0)
u.c=!0
w=this.b
u.d=w.length===0?"":D.d.gI(w)
v.f=A.bC4(u)},
$S:0}
A.eTM.prototype={
$1(d){return!d},
$S:119}
A.eTQ.prototype={
$0(){return A.fOg(this.a,"Sink drain (P-trap)",B.dhc,this.b)},
$S:0}
A.eTN.prototype={
$1(d){return A.ifW(this.a.ger(0),d)},
$S:z+10}
A.eTO.prototype={
$0(){var w=this.a
return w.m(new A.eTL(w,this.b))},
$S:0}
A.eTL.prototype={
$0(){var w=this.a,v=this.b
return w.r=w.r===v?"":v},
$S:0}
A.eTP.prototype={
$0(){var w=this.a
w.m(new A.eTK(w))
w.og()},
$S:0}
A.eTK.prototype={
$0(){var w,v=this.a,u=v.ger(0)
u.a.a9(0)
w=u.b
w.aJd(w,new A.eTJ())
u.c=!1
v.r=u.d=""
v.w=0
v.f=A.bC4(u)},
$S:0}
A.eTJ.prototype={
$2(d,e){return!1},
$S:1817}
A.ddd.prototype={
$0(){var w=this.a
w.x=this.b
w.y=this.c},
$S:0}
A.dde.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.ddc(w))},
$S:0}
A.ddc.prototype={
$0(){return this.a.x=null},
$S:0}
A.dd5.prototype={
$0(){return this.a.w=0},
$S:0}
A.dd8.prototype={
$1(d){return d.a===this.a},
$S:z+37}
A.dd9.prototype={
$0(){var w=this.a,v=w.ger(0)
v.f=!1
w.f=A.aPs(v)
w.w=this.b},
$S:0}
A.dda.prototype={
$0(){var w=this.a,v=w.ger(0),u=v.e
u.bs(u,new A.dd7(this.b))
v.f=!1
w.f=A.aPs(v)},
$S:0}
A.dd7.prototype={
$2(d,e){return e===this.a},
$S:451}
A.ddb.prototype={
$0(){return this.a.w=this.b},
$S:0}
A.dd6.prototype={
$0(){var w=this.a,v=w.ger(0)
v.f=!v.f
w.f=A.aPs(v)},
$S:0}
A.ddi.prototype={
$1(d){return!d},
$S:119}
A.ddo.prototype={
$0(){return A.fOg(this.a,"Faucet supply lines",B.du1,this.b)},
$S:0}
A.ddj.prototype={
$1(d){return A.i6F(this.a.ger(0),d)},
$S:z+10}
A.ddk.prototype={
$0(){var w=this.a
return w.m(new A.ddh(w))},
$S:0}
A.ddh.prototype={
$0(){var w=this.a,v=w.ger(0)
v.r=!v.r
w.f=A.aPs(v)},
$S:0}
A.ddm.prototype={
$0(){var w=this.b
return w.m(new A.ddg(this.a,w))},
$S:0}
A.ddg.prototype={
$0(){var w=this.b,v=w.r,u=this.a.a
return w.r=v===u?"":u},
$S:0}
A.ddl.prototype={
$1(d){return d===this.a.a},
$S:3}
A.ddn.prototype={
$0(){var w=this.a
w.m(new A.ddf(w))
w.og()},
$S:0}
A.ddf.prototype={
$0(){var w=this.a,v=w.ger(0)
v.e.a9(0)
v.f=!1
w.r=""
w.w=0
w.f=A.aPs(v)},
$S:0}
A.dkh.prototype={
$0(){var w=this.a
w.x=this.b
w.y=this.c},
$S:0}
A.dki.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.dkg(w))},
$S:0}
A.dkg.prototype={
$0(){return this.a.x=null},
$S:0}
A.dkb.prototype={
$0(){return this.a.r=0},
$S:0}
A.dkd.prototype={
$0(){var w=this.a,v=w.d
v.d.W(0,72)
w.f=A.agA(v)
w.r=this.b},
$S:0}
A.dke.prototype={
$0(){var w=this.a,v=w.d
v.c=!0
v.b=!1
w.f=A.agA(v)
w.r=this.b},
$S:0}
A.dkf.prototype={
$0(){return this.a.r=this.b},
$S:0}
A.dkc.prototype={
$1(d){return this.a},
$S:39}
A.dkq.prototype={
$0(){return A.fOg(this.a,"Fix the house",B.cpD,this.b)},
$S:0}
A.dkl.prototype={
$0(){return this.a.cfI(this.b)},
$S:0}
A.dkn.prototype={
$1(d){return d<=this.a.d.a},
$S:34}
A.dkm.prototype={
$1(d){return A.hrs(this.a.d,d)},
$S:z+10}
A.dko.prototype={
$0(){var w=this.a
return w.m(new A.dkk(w))},
$S:0}
A.dkk.prototype={
$0(){var w=this.a
return w.w=w.w==="wrench"?"":"wrench"},
$S:0}
A.dkp.prototype={
$1(d){var w=this.a
return w.m(new A.dkj(w,d))},
$S:6}
A.dkj.prototype={
$0(){var w=this.a,v=w.d,u=D.k.V(this.b)
v.a=u
if(u<5)w.r=0
w.f=A.agA(v)},
$S:0}
A.feZ.prototype={
$0(){return this.a.e=!1},
$S:0}
A.feX.prototype={
$0(){return this.a.e=!0},
$S:0}
A.feY.prototype={
$0(){var w=this.a
w.d=C.dg(B.bw0,new A.feW(w))},
$S:0}
A.feW.prototype={
$1(d){var w=this.a.a,v=w.e
return v.apg(w.f?1.06:0.94)},
$S:11}
A.ff0.prototype={
$1(d){return this.a.c7Q(0)},
$S:81}
A.ff1.prototype={
$1(d){return this.a.b7i()},
$S:124}
A.ff_.prototype={
$1(d){return this.a.b7i()},
$S:169}
A.cb2.prototype={
$0(){return C.a4(this.a,!1).ic()},
$S:0}
A.fwS.prototype={
$5(d,e,f,g,h){var w=this.a.a.t(0,h),v=this.b
v.b=d
if(w)v.a7_(e,0.66,f,!1,!0,!0,g,14)
else{v.d=0.3
v.aJa(e,0.74,D.b2,!1,!0,0,8)
v.d=1}},
$S:z+100}
A.fwR.prototype={
$6(d,e,f,g,h,i){var w,v
if(!i)return
w=this.a.b.h(0,e)
v=w===!0?f:f.a8(0,h)
w=this.b
w.e=0.5
w.b=d
w.dR(v.aF(0,g.aI(0,0.6)),v.a8(0,g.aI(0,0.6)),1.12,B.pS,0.35,8)
w.zq(v.aF(0,g.aI(0,0.62)),v.aF(0,g.aI(0,0.5)),1.2,0.5,B.Xx,0.2,8)
w.b=0
w.zq(f.aF(0,g.aI(0,0.05)),f.a8(0,g.aI(0,0.08)),0.82,0.55,B.boq,0.1,12)
w.e=0},
$S:z+101}
A.fwQ.prototype={
$1(d){return d.b<-0.6},
$S:z+21}
A.fvX.prototype={
$1(d){return this.a.e.h(0,d)===this.b},
$S:34}
A.fyy.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=A.agN(d)
for(w=this.a*1.6,v=this.b,u=p.a,t=p.b,s=p.c,r=0;r<7;++r){q=D.k.F(w+r/7,1)
v.fT(new A.q(u+Math.sin(r*2.1)*q*1.4,t+(q*2.4-q*q*6.5),s+(1+q*2.5)),0.2,e,3,6,0.9)}},
$S:1818}
A.fyx.prototype={
$1(d){return this.a.e.h(0,d.a)!=null},
$S:z+37}
A.cmT.prototype={
$1(d){return d.a===this.a},
$S:z+102}
A.cmU.prototype={
$1(d){return d.a===this.a},
$S:z+2}
A.cmQ.prototype={
$1(d){return this.a.vk(0,d).c.toLowerCase()},
$S:14}
A.cmV.prototype={
$1(d){var w
if(!this.a.e.t(0,d.a)){w=d.b
w=w==="valve"||D.a.a0(w,"hose")}else w=!1
return w},
$S:z+2}
A.cmW.prototype={
$1(d){var w=this.a,v=d.a
return w.e.t(0,v)&&w.aH2(v)>0},
$S:z+2}
A.cmX.prototype={
$1(d){return d.a},
$S:z+23}
A.cmY.prototype={
$1(d){return d.a},
$S:z+23}
A.cmR.prototype={
$1(d){return this.a.e.t(0,d.a)},
$S:z+2}
A.cmS.prototype={
$1(d){var w=this.a,v=d.a
return w.aH2(v)<=0||!w.e.t(0,v)},
$S:z+2}
A.fwP.prototype={
$1(d){var w=this.a
w.b=0
w.dR(new A.q(d,8,0),new A.q(d,8,1.6),0.5,B.LE,0.7,10)},
$S:6}
A.fwN.prototype={
$1(d){var w,v,u,t,s,r,q=C.a([],x.o)
for(w=d.length,v=this.a,u=v.a,t=v.b,v=v.c,s=0;s<d.length;d.length===w||(0,C.M)(d),++s){r=d[s]
q.push(new A.q(r.a+u,r.b+t,r.c+v))}return q},
$S:z+105}
A.fwH.prototype={
$3$r(d,e,f){var w=this.a,v=this.b.c
v===$&&C.c()
w.b=9100+D.d.bg(v.c,new A.fwK(d))
w.d=0.32
w.aJa(e,f,D.b2,!1,!0,0,8)
w.d=1},
$2(d,e){return this.$3$r(d,e,1.2)},
$S:z+106}
A.fwK.prototype={
$1(d){return d.a===this.a},
$S:z+2}
A.fwI.prototype={
$3(d,e,f){var w=this.a,v=this.b.c
v===$&&C.c()
w.b=9100+D.d.bg(v.c,new A.fwJ(d))
w.d=0.32
w.aO(e,f,D.b2)
w.d=1},
$S:z+107}
A.fwJ.prototype={
$1(d){return d.a===this.a},
$S:z+2}
A.fwO.prototype={
$3(d,e,f){var w,v,u,t=this,s=t.a,r=s.c
r===$&&C.c()
w=D.d.cu(r.c,d)
r=d.c
v=s.e
u=d.a
if(v.t(0,u))s="Fitted."
else{s=s.b?"":d.e
s="A spot for the "+r.toLowerCase()+". "+s}t.b.n(0,9100+w,new A.cW(r,s,e,26))
if(t.c&&!v.t(0,u)&&t.d.length!==0)t.e.push(new A.hf(e.a8(0,B.fXA),f,D.eW,0))},
$S:z+108}
A.fwD.prototype={
$0(){return this.a.$3(this.b.a,new A.q(this.c-10,9,2.4),B.aaA)},
$S:0}
A.fwE.prototype={
$0(){return this.a.$3(this.b.a,new A.q(this.c-8,9,2.4),B.aaA)},
$S:0}
A.fwF.prototype={
$0(){return this.a.$3(this.b.a,new A.q(this.c+8,9,2.4),B.aaA)},
$S:0}
A.fwL.prototype={
$4(d,e,f,g){var w,v,u,t,s=this
if(D.d.bg(s.a,new A.fwM(d))<0||!s.b.e.t(0,d))return
w=s.b.f.h(0,d)
v=(w==null?0:w)>=1
w=s.c
u=9260+g
w.b=u
t=v?e:e.a8(0,f.aI(0,1.7))
w.dR(t.aF(0,f.aI(0,0.6)),t.a8(0,f.aI(0,0.6)),1.12,B.pS,0.35,8)
w.zq(t.aF(0,f.aI(0,0.62)),t.aF(0,f.aI(0,0.5)),1.2,0.5,B.Xx,0.2,8)
w=v?"Tight.":"Loose. Tap it with the wrench to tighten it."
s.d.n(0,u,new A.cW("Slip nut",w,e,10))},
$S:z+109}
A.fwM.prototype={
$1(d){return d.a===this.a},
$S:z+2}
A.fwG.prototype={
$1(d){return d.a===this.a},
$S:z+2}
A.fNq.prototype={
$1(d){return d.a===this.a},
$S:z+2}
A.enS.prototype={
$0(){var w=this.a
w.z=this.b
w.Q=this.c},
$S:0}
A.enT.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.enR(w))},
$S:0}
A.enR.prototype={
$0(){return this.a.z=null},
$S:0}
A.enL.prototype={
$0(){return this.a.y=0},
$S:0}
A.enX.prototype={
$1(d){return d.a===this.a},
$S:z+2}
A.enA.prototype={
$0(){return this.a.y=this.b},
$S:0}
A.enB.prototype={
$0(){var w=this.a
w.ZW()
w.y=this.b},
$S:0}
A.enC.prototype={
$1(d){return this.a.c7R()},
$S:9}
A.enH.prototype={
$1(d){var w,v=null,u=this.a,t=u.e
t===$&&C.c()
w=t.c
w===$&&C.c()
t=C.d("The "+w.b.toLowerCase()+" is finished and nothing leaks.\n\nMistakes: "+t.w+"\n\nThe next job is different.",v,v,v,v,v,v,B.a9t,v,v,v)
return C.en(C.a([C.bN(!1,B.aUi,v,v,!0,v,v,new A.enF(d),v,v),C.bH(B.fDD,v,new A.enG(u,d),v)],x.p),v,v,E.ng,t,v,v,v,v,B.fFg,v)},
$S:18}
A.enF.prototype={
$0(){C.a4(this.a,!1).O(null)
return null},
$S:0}
A.enG.prototype={
$0(){C.a4(this.b,!1).O(null)
this.a.aYA()},
$S:0}
A.enQ.prototype={
$0(){var w,v,u=this.a
u.d=D.o.F(Date.now(),1e5)
w=u.gCU(0)
v=u.e
v===$&&C.c()
u.e=A.h0I(v.b,w,null)
u.x=""
u.as=!1
u.z=null
u.y=0
u.ZW()},
$S:0}
A.enY.prototype={
$1(d){return d.b===this.a},
$S:z+2}
A.enI.prototype={
$1(d){var w=this.a.e
w===$&&C.c()
return w.x.t(0,d.a)},
$S:z+2}
A.enJ.prototype={
$1(d){return d.c.toLowerCase()},
$S:z+23}
A.enK.prototype={
$1(d){var w=this.a.e
w===$&&C.c()
return w.aH2(d.a)>0},
$S:z+2}
A.enU.prototype={
$0(){var w=this.b
w.x=this.a.b
w.ZW()},
$S:0}
A.enV.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
A.enW.prototype={
$0(){return this.a.y=this.b},
$S:0}
A.enE.prototype={
$0(){var w=this.a
return w.m(new A.enD(w,this.b,this.c))},
$S:0}
A.enD.prototype={
$0(){var w=this.a
w.x=this.b?"":this.c
w.ZW()},
$S:0}
A.enZ.prototype={
$1(d){var w=this.a.e
w===$&&C.c()
return w.e.t(0,d.a)},
$S:z+2}
A.eo2.prototype={
$0(){return this.a.c1K(this.b)},
$S:0}
A.eo0.prototype={
$1(d){return d<=5},
$S:34}
A.eo_.prototype={
$1(d){var w=this.a,v=w.e
v===$&&C.c()
return A.ifO(v,w.w.gi8()/1000)},
$S:z+10}
A.eo1.prototype={
$0(){return this.b.cy0(this.a.a)},
$S:0}
A.enP.prototype={
$1(d){var w,v,u,t,s,r,q,p=null,o=this.a,n=o.e
n===$&&C.c()
w=x.p
n=C.a([B.fRd,D.au,C.d("Mistakes "+n.w,p,p,p,p,p,p,B.JX,p,p,p),D.W],w)
v=o.e.c
v===$&&C.c()
v=v.c
u=v.length
t=0
for(;t<u;++t){s=v[t]
r=D.c.j(0.05)
q=new C.aQ(12,12)
n.push(C.p(p,new C.y((o.e.e.t(0,s.a)?"\u2705":"\ud83d\udd27")+" "+s.c,p,B.fef,p,p,p,p,p,p,p,p,p),D.f,p,p,new C.o(r,p,p,new C.bj(q,q,q,q),p,p,D.n),p,p,p,D.eH,D.bT,p,p,p))}n.push(D.am)
n.push(B.fv9)
n.push(D.O)
n.push(C.B(C.a([B.bDX,C.Y7(p,p,p,p,!1,D.y,p,p,p,p,p,p,new A.enN(o,d),p,p,p,p,p,p,p,p,o.e.b)],w),D.m,p,D.e,D.i,0,p,p))
n.push(C.bH(B.aUk,p,new A.enO(o,d),p))
return C.bl(!0,C.cr(n,p,D.bQ,p,p,D.ah,!0),!0,!1,D.af,!0,!0)},
$S:25}
A.enN.prototype={
$1(d){var w=this.a
w.m(new A.enM(w,d))
C.a4(this.b,!1).O(null)},
$S:8}
A.enM.prototype={
$0(){var w=this.a,v=w.e
v===$&&C.c()
v.b=this.b
w.ZW()},
$S:0}
A.enO.prototype={
$0(){C.a4(this.b,!1).O(null)
this.a.aYA()},
$S:0}
A.fVN.prototype={
$1(d){return d.a===this.a},
$S:z+40}
A.crQ.prototype={
$1(d){return D.d.t(B.jV,d.b)},
$S:z+8}
A.crX.prototype={
$1(d){return!this.a.y.t(0,d)},
$S:34}
A.crY.prototype={
$1(d){var w=this.a
return w.x.aj(0,d)&&w.z.t(0,d)},
$S:34}
A.crZ.prototype={
$1(d){var w=$.Ha()[this.b],v=!1
if(w>=d)if(w<=d+48){w=this.a.Q.h(0,d)
w=(w==null?null:w.a)===!0}else w=v
else w=v
return w},
$S:34}
A.cs_.prototype={
$1(d){return this.a.Q.h(0,d).c.t(0,this.b)},
$S:34}
A.cs1.prototype={
$1(d){var w,v=J.e4(6,x.S)
for(w=0;w<6;++w)v[w]=w
return D.d.d5(v,new A.cs0(this.a,d))},
$S:34}
A.cs0.prototype={
$1(d){return this.a.c.t(0,this.b*10+d)},
$S:34}
A.crP.prototype={
$1(d){var w=this.a.Q.h(0,d)
return(w==null?null:w.a)===!0},
$S:34}
A.crN.prototype={
$1(d){return!A.jY(d).c},
$S:34}
A.crO.prototype={
$1(d){var w=this.a.aq2(A.jY(d).d.a)
return(w==null?null:w.b.t(0,d))===!0},
$S:34}
A.crV.prototype={
$1(d){return d.c},
$S:z+11}
A.crW.prototype={
$1(d){return d.d},
$S:z+11}
A.crR.prototype={
$1(d){return d.d},
$S:z+11}
A.crS.prototype={
$1(d){var w=this.a.Q.h(0,d)
return(w==null?null:w.e)===!0},
$S:34}
A.crT.prototype={
$1(d){return d.a===this.a},
$S:z+13}
A.cs2.prototype={
$2(d,e){return e===this.a},
$S:451}
A.crU.prototype={
$1(d){return d.c===this.a},
$S:z+8}
A.esw.prototype={
$0(){var w=this.a
w.ax=this.b
w.ay=this.c},
$S:0}
A.esx.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.esv(w))},
$S:0}
A.esv.prototype={
$0(){return this.a.ax=null},
$S:0}
A.ery.prototype={
$0(){return this.a.CW=!0},
$S:0}
A.erz.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.erx(w))},
$S:12}
A.erx.prototype={
$0(){return this.a.CW=!1},
$S:0}
A.erA.prototype={
$0(){return this.a.CW=!0},
$S:0}
A.erB.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.erw(w))},
$S:12}
A.erw.prototype={
$0(){return this.a.CW=!1},
$S:0}
A.erC.prototype={
$1(d){return this.a.bQa()},
$S:9}
A.erD.prototype={
$1(d){return this.a.c7W()},
$S:9}
A.erN.prototype={
$0(){return this.a.Q=-1},
$S:0}
A.erP.prototype={
$0(){return this.a.Q=-1},
$S:0}
A.erE.prototype={
$1(d){return d.b==="tv"},
$S:724}
A.erF.prototype={
$0(){return this.a.Q=-1},
$S:0}
A.erG.prototype={
$0(){return this.a.Q=-1},
$S:0}
A.es5.prototype={
$0(){var w=this.a
w.Q=this.b
w.z=w.at=""
w.ch=!1},
$S:0}
A.erO.prototype={
$0(){var w=this.a
w.Q=-1
w.at=""},
$S:0}
A.ess.prototype={
$0(){return this.a.as=0},
$S:0}
A.est.prototype={
$0(){return this.a.z=""},
$S:0}
A.esu.prototype={
$0(){return this.a.as=this.b},
$S:0}
A.esq.prototype={
$0(){return this.a.z=""},
$S:0}
A.esr.prototype={
$0(){return this.a.as=2000+this.b},
$S:0}
A.esp.prototype={
$0(){return this.a.z=""},
$S:0}
A.esh.prototype={
$1(d){return d.a===this.a},
$S:z+13}
A.esi.prototype={
$0(){return this.a.at=""},
$S:0}
A.esj.prototype={
$1(d){return d.a===this.a},
$S:z+7}
A.esk.prototype={
$0(){var w=this,v=w.a,u=w.b
if(v.at===u)u=""
v.at=u
v.as=u.length===0?0:5000+w.c*100+w.d},
$S:0}
A.esl.prototype={
$1(d){return d.a===this.a},
$S:z+7}
A.esm.prototype={
$0(){return this.a.as=5000+this.b*100+this.c},
$S:0}
A.esn.prototype={
$0(){var w=this.a
w.at=""
w.as=0},
$S:0}
A.eso.prototype={
$0(){return this.a.as=5000+this.b*100+this.c},
$S:0}
A.esy.prototype={
$0(){var w=this.b,v=D.d.t(B.I1,w.z),u=this.a.a
if(v)w.b26(u)
else w.b27(u)},
$S:0}
A.erM.prototype={
$1(d){var w=null
return C.en(C.a([C.bN(!1,B.fHg,w,w,!0,w,w,new A.erK(d),w,w),C.bH(D.E8,w,new A.erL(this.a,d),w)],x.p),w,w,E.ng,B.fwj,w,w,w,w,B.fE2,w)},
$S:18}
A.erK.prototype={
$0(){C.a4(this.a,!1).O(null)
return null},
$S:0}
A.erL.prototype={
$0(){C.a4(this.b,!1).O(null)
this.a.axx(!0)},
$S:0}
A.erJ.prototype={
$1(d){var w,v=null,u=this.a,t=u.d
t===$&&C.c()
w=t.c
w===$&&C.c()
t=C.d("The "+w.toLowerCase()+" is built, wired, painted and tested.\n\nMistakes: "+t.f+"\nShocks: "+t.r+"\nLives left: "+t.e+"\n\nEvery job is a little different. Ready for another one?",v,v,v,v,v,v,B.a9t,v,v,v)
return C.en(C.a([C.bN(!1,B.fS7,v,v,!0,v,v,new A.erH(d),v,v),C.bH(B.fDW,v,new A.erI(u,d),v)],x.p),v,v,E.ng,t,v,v,v,v,B.fM0,v)},
$S:18}
A.erH.prototype={
$0(){C.a4(this.a,!1).O(null)
return null},
$S:0}
A.erI.prototype={
$0(){C.a4(this.b,!1).O(null)
this.a.aZL()},
$S:0}
A.erQ.prototype={
$0(){var w,v,u
if(!this.b)this.a.e=D.o.F(Date.now(),1e5)
w=this.a
v=w.gCU(0)
u=w.d
u===$&&C.c()
w.d=A.crL(null,null,u.b,v,!0)
w.y=0
w.z=""
w.Q=-1
w.at=""
w.as=0
w.cx=!1
w.x.a9(0)
w.ax=null
w.r=A.wQ(w.d,new A.rH(w.z,w.Q,!1))},
$S:0}
A.es3.prototype={
$1(d){return new C.N(d,new A.es4(),d.$ti.k("N<ak.E,n>")).aH(0,", ")},
$S:1819}
A.es4.prototype={
$1(d){return A.jY(d).b},
$S:78}
A.erR.prototype={
$1(d){var w=this.a.d
w===$&&C.c()
return!w.x.aj(0,d.a)},
$S:z+8}
A.erS.prototype={
$1(d){var w=this.a.d
w===$&&C.c()
return!w.z.t(0,d.a)},
$S:z+8}
A.erT.prototype={
$1(d){var w=this.a.d
w===$&&C.c()
return!w.y.t(0,d)},
$S:34}
A.erW.prototype={
$1(d){return!d.a},
$S:z+11}
A.erX.prototype={
$1(d){return d.b<3},
$S:z+11}
A.erY.prototype={
$1(d){return!d.c},
$S:z+11}
A.erZ.prototype={
$1(d){return!d.d},
$S:z+11}
A.es_.prototype={
$1(d){return!d.c},
$S:z+11}
A.es0.prototype={
$1(d){var w=this.a.d
w===$&&C.c()
w=w.at.h(0,d.a)
w=w==null?null:w.a
return w!==d.b},
$S:z+8}
A.es1.prototype={
$1(d){return d.a},
$S:z+114}
A.es2.prototype={
$1(d){var w=this.a.d
w===$&&C.c()
w=w.at.h(0,d.a)
w=w==null?null:w.b.c
return(w==null?0:w)<2},
$S:z+8}
A.erU.prototype={
$1(d){var w
if(D.d.t(B.lH,d.b)){w=this.a.d
w===$&&C.c()
w=w.at.h(0,d.a)
w=(w==null?null:w.c)!==!0}else w=!1
return w},
$S:z+8}
A.erV.prototype={
$1(d){return d.b==="fan"},
$S:z+8}
A.esR.prototype={
$0(){return this.a.cgK(this.b)},
$S:0}
A.esT.prototype={
$0(){var w=this.a
if(w.Q>=0)w.aei()
else{w.m(new A.esD(w))
w.b4m()}},
$S:0}
A.esD.prototype={
$0(){return this.a.as=0},
$S:0}
A.esS.prototype={
$1(d){var w=this.a,v=w.d
v===$&&C.c()
return A.ig4(v,w.w.gi8()/1000,w.x)},
$S:z+10}
A.esG.prototype={
$0(){var w=this.a,v=w.d
v===$&&C.c()
return w.jC(v.aJ2())},
$S:0}
A.esH.prototype={
$0(){var w=this.a
return w.m(new A.esF(w,this.b))},
$S:0}
A.esF.prototype={
$0(){var w,v=this.b.b
v.f=!v.f
v=this.a
w=v.d
w===$&&C.c()
v.r=A.wQ(w,new A.rH(v.z,v.Q,!1))},
$S:0}
A.esI.prototype={
$0(){var w=this.a
return w.m(new A.esE(w,this.b))},
$S:0}
A.esE.prototype={
$0(){var w,v=this.b.b
v.e=!v.e
v=this.a
w=v.d
w===$&&C.c()
v.r=A.wQ(w,new A.rH(v.z,v.Q,!1))},
$S:0}
A.esU.prototype={
$0(){var w=this.a
return w.m(new A.esC(w,this.b))},
$S:0}
A.esC.prototype={
$0(){var w,v=this.a
v.y=this.b
v.z=""
w=v.d
w===$&&C.c()
v.r=A.wQ(w,new A.rH("",v.Q,!1))},
$S:0}
A.esV.prototype={
$0(){var w=this.a
return w.m(new A.esB(w))},
$S:0}
A.esB.prototype={
$0(){var w=this.a,v=w.d
v===$&&C.c()
v.am2()
w.y=2
w.z=""
w.r=A.wQ(w.d,new A.rH("",w.Q,!1))
w.qB("The boxes, the cable and the walls are done. Now the wiring: pick an Outlet or a Switch from the tray, then tap its box on the wall.",!0)},
$S:0}
A.esW.prototype={
$0(){var w=this.a
return w.m(new A.esA(w,this.b))},
$S:0}
A.esA.prototype={
$0(){var w,v=this.a,u=this.b.a,t=v.z===u?"":u
v.z=t
v.as=0
w=v.d
w===$&&C.c()
v.r=A.wQ(w,new A.rH(t,v.Q,!1))
if(v.z.length!==0)v.crC(u)},
$S:0}
A.esX.prototype={
$0(){var w=this.a,v=w.d
v===$&&C.c()
return w.jC(v.cRO())},
$S:0}
A.esY.prototype={
$1(d){return!this.a.b.b.iI(0,d.a)},
$S:z+7}
A.esZ.prototype={
$0(){var w=this.a
return w.m(new A.esz(w,this.b,this.c))},
$S:0}
A.esz.prototype={
$0(){var w,v=this,u=v.c,t=u.a
if(v.b.b.b.iI(0,t)){v.a.aej("That wire is already fastened. Tap the wire in the 3D view to take it off.")
return}w=v.a
if(w.at===t)t=""
w.at=t
if(t.length!==0)w.qB(u.b+": now tap the screw it belongs on, or press the matching button below.",!0)},
$S:0}
A.esJ.prototype={
$1(d){return!this.a.b.b.aj(0,d.a)},
$S:z+13}
A.esK.prototype={
$0(){var w=this.a
return w.b25(w.Q,this.b.a)},
$S:0}
A.esL.prototype={
$0(){var w=this.a,v=w.d
v===$&&C.c()
return w.jC(v.biw(w.Q))},
$S:0}
A.esM.prototype={
$0(){var w=this.a,v=w.d
v===$&&C.c()
return w.jC(v.biu(w.Q))},
$S:0}
A.esN.prototype={
$0(){var w=this.a,v=w.d
v===$&&C.c()
return w.jC(v.bdl(w.Q))},
$S:0}
A.esO.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.biR(v.Q)
v.jC(w)
if(w.a)v.aei()},
$S:0}
A.esP.prototype={
$0(){var w=this.a,v=w.d
v===$&&C.c()
return w.jC(v.biu(w.Q))},
$S:0}
A.esQ.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.biR(v.Q)
v.jC(w)
if(w.a){v.aei()
v.qB("The "+A.agJ(this.b.a)+" is out and the box is empty. Pick the kind you want from the tray (a different outlet or switch is fine), then tap the box.",!0)}},
$S:0}
A.esg.prototype={
$1(d){return new C.dZ(new A.esf(this.a,this.b),null)},
$S:20}
A.esf.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=C.aJ(d,k,x.w).w,i=this.a,h=i.d
h===$&&C.c()
w=h.c
w===$&&C.c()
v=x.p
h=C.a([C.d("Job: "+w,k,k,k,k,k,k,D.dd,k,k,k),D.au,C.d("Mistakes "+h.f+" \xb7 Shocks "+h.r+" \xb7 Lives "+h.e,k,k,k,k,k,k,B.JX,k,k,k),D.W,B.fHQ,D.am],v)
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
else m=m==="fan"?"A ceiling fan":"A "+A.agJ(m).toLowerCase()
o=A.jY(o)
l=s.c
l=l!=null?", turned on by "+A.jY(l).b:""
h.push(C.p(k,new C.y(n+" "+m+" at "+o.b+l,k,D.oG,k,k,k,k,k,k,k,k,k),D.f,k,k,new C.o(r,k,new C.bK(p,p,p,p),new C.bj(q,q,q,q),k,k,D.n),k,k,k,D.eH,D.bT,k,k,k))}h.push(D.W)
h.push(C.B(C.a([B.bF3,C.Y7(k,k,k,k,!1,D.y,k,k,k,k,k,k,new A.es9(i,e),k,k,k,k,k,k,k,k,i.d.b)],v),D.m,k,D.e,D.i,0,k,k))
h.push(C.B(C.a([B.bEj,C.Y7(k,k,k,k,!1,D.y,k,k,k,k,k,k,new A.esa(i,e),k,k,k,k,k,k,k,k,i.d.dx)],v),D.m,k,D.e,D.i,0,k,k))
h.push(D.am)
w=this.b
h.push(C.B(C.a([C.E(C.dI(B.fFk,new A.esb(w),k),1),D.ac,C.E(C.bH(B.fDd,k,new A.esc(i,d,w),k),1)],v),D.m,k,D.e,D.i,0,k,k))
h.push(D.am)
h.push(D.am)
h.push(C.B(C.a([C.E(C.dI(B.fxt,new A.esd(i,d),k),1),D.ac,C.E(C.bH(B.aUk,k,new A.ese(i,d),k),1)],v),D.m,k,D.e,D.i,0,k,k))
return C.bl(!0,new C.cU(new C.aZ(0,1/0,0,j.a.b*0.8),C.cr(h,k,D.bQ,k,k,D.ah,!0),k),!0,!1,D.af,!0,!0)},
$S:87}
A.es9.prototype={
$1(d){var w=this.a,v=w.d
v===$&&C.c()
v.b=d
for(v=v.at,v=new C.dq(v,v.r,v.e);v.C();)v.d.b.r=d
this.b.$1(new A.es7())
w.m(new A.es8())},
$S:8}
A.es7.prototype={
$0(){},
$S:0}
A.es8.prototype={
$0(){},
$S:0}
A.esa.prototype={
$1(d){var w,v=this.a,u=v.d
u===$&&C.c()
u.dx=d
for(u=u.at,u=new C.dq(u,u.r,u.e);u.C();){w=u.d.b
w.y=d
if(d)w.f=!1}this.b.$1(new A.es6())
v.m(v.gc82())},
$S:8}
A.es6.prototype={
$0(){},
$S:0}
A.esb.prototype={
$0(){return A.h7W(this.a)},
$S:0}
A.esc.prototype={
$0(){var w=0,v=C.j(x.H),u=this,t,s,r
var $async$$0=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:C.a4(u.b,!1).O(null)
t=u.a
s=t.d
s===$&&C.c()
r=s.c
r===$&&C.c()
w=2
return C.b(A.hvw(u.c,s.cY2(),t.d.cY3(),r),$async$$0)
case 2:return C.h(null,v)}})
return C.i($async$$0,v)},
$S:1}
A.esd.prototype={
$0(){C.a4(this.b,!1).O(null)
this.a.axx(!0)},
$S:0}
A.ese.prototype={
$0(){C.a4(this.b,!1).O(null)
this.a.aZL()},
$S:0}
A.fpd.prototype={
$1(d){var w=this.a,v=d.a
return w>v[0]&&w<v[1]},
$S:728}
A.fpe.prototype={
$1(d){var w=this.a,v=d.a
return w>v[2]&&w<v[3]},
$S:728}
A.fwT.prototype={
$1(d){return 5000+this.a.a*100+d},
$S:74}
A.fwU.prototype={
$1(d){return 3000+this.a.a},
$S:74}
A.fwV.prototype={
$1(d){return 2000+this.a.a},
$S:74}
A.fwY.prototype={
$5$col$round(d,e,f,g,h){var w=this.a
w.f=3
w.b=d
w.d=0.5
w.e=0.9
if(h)w.dN(e.aF(0,B.ea),e.a8(0,B.ea),f.a/2,g,14)
else w.aO(e,f,g)
w.e=0
w.d=1
w.f=2},
$3(d,e,f){return this.$5$col$round(d,e,f,D.b2,!1)},
$4$round(d,e,f,g){return this.$5$col$round(d,e,f,D.b2,g)},
$4$col(d,e,f,g){return this.$5$col$round(d,e,f,g,!1)},
$S:z+115}
A.fwW.prototype={
$3(d,e,f){return I.RT(d,e,0,f+this.a.a*5)},
$S:24}
A.fwX.prototype={
$0(){var w,v=this.a
if(v.c)w="A place in the ceiling for a "+(v.e==="fan"?"fan (needs a fan-rated box)":"light")+"."
else w="A place on the wall at "+(v.e==="switch"?"switch height, about 48 inches from the floor":"outlet height, about 16 inches from the floor")+"."
return new A.cW(v.b,w,A.ai_(v,B.aaq),26)},
$S:z+116}
A.fNK.prototype={
$1(d){return d.e==="fan"},
$S:z+40}
A.fNL.prototype={
$1(d){return d.b==="light"},
$S:z+8}
A.fNM.prototype={
$1(d){return A.ai_(this.a,d)},
$S:z+6}
A.cvg.prototype={
$1(d){return d.a===this.a&&!d.c},
$S:z+15}
A.cvc.prototype={
$1(d){return d.a===B.a0m},
$S:z+15}
A.cve.prototype={
$1(d){return d.c},
$S:z+15}
A.cvf.prototype={
$1(d){return d.c},
$S:z+15}
A.cvd.prototype={
$1(d){return B.wz.h(0,d.a).e===this.a&&!d.c},
$S:z+15}
A.eul.prototype={
$0(){var w=this.a
w.z=this.b
w.Q=this.c},
$S:0}
A.eum.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.euk(w))},
$S:0}
A.euk.prototype={
$0(){return this.a.z=null},
$S:0}
A.eua.prototype={
$0(){return this.a.y=0},
$S:0}
A.euf.prototype={
$0(){return this.a.as=!0},
$S:0}
A.eug.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.eue(w))},
$S:12}
A.eue.prototype={
$0(){return this.a.as=!1},
$S:0}
A.euh.prototype={
$0(){var w=this.a,v=w.d
v===$&&C.c()
w.r=A.agA(v.d)
w.y=this.b},
$S:0}
A.eui.prototype={
$1(d){return this.a.cgS()},
$S:9}
A.euj.prototype={
$1(d){return this.a.c86()},
$S:9}
A.eud.prototype={
$1(d){var w=null
return C.en(C.a([C.bH(B.fFb,w,new A.euc(this.a,d),w)],x.p),w,w,E.ng,B.fEi,w,w,w,w,B.fKF,w)},
$S:18}
A.euc.prototype={
$0(){C.a4(this.b,!1).O(null)
this.a.awW()},
$S:0}
A.eu9.prototype={
$1(d){var w=null,v=this.a,u=v.d
u===$&&C.c()
u=C.d("Every problem on the customer's list is fixed.\n\nMistakes: "+u.f+"\nShocks: "+u.r+"\nLives left: "+u.e+"\n\nThe next call will have different problems.",w,w,w,w,w,w,B.a9t,w,w,w)
return C.en(C.a([C.bN(!1,B.aUi,w,w,!0,w,w,new A.eu7(d),w,w),C.bH(B.fGt,w,new A.eu8(v,d),w)],x.p),w,w,E.ng,u,w,w,w,w,B.fN8,w)},
$S:18}
A.eu7.prototype={
$0(){C.a4(this.a,!1).O(null)
return null},
$S:0}
A.eu8.prototype={
$0(){C.a4(this.b,!1).O(null)
this.a.awW()},
$S:0}
A.eub.prototype={
$0(){var w,v,u=this.a
u.e=D.o.F(Date.now(),1e5)
w=u.gCU(0)
v=u.d
v===$&&C.c()
w=A.hiV(v.b,w)
u.d=w
u.r=A.agA(w.d)
u.at=!1
u.z=null
u.y=0},
$S:0}
A.euy.prototype={
$0(){return this.a.cBA(this.b)},
$S:0}
A.euu.prototype={
$1(d){return d<=5},
$S:34}
A.eut.prototype={
$1(d){var w=this.a,v=w.d
v===$&&C.c()
return A.hrs(v.d,w.w.gi8()/1000)},
$S:z+10}
A.euv.prototype={
$1(d){return!d.c},
$S:z+15}
A.euw.prototype={
$1(d){return B.wz.h(0,d.a).a},
$S:z+118}
A.eux.prototype={
$0(){var w=this.a
return w.m(new A.eus(w,this.b))},
$S:0}
A.eus.prototype={
$0(){return this.a.x=this.b},
$S:0}
A.eur.prototype={
$1(d){return new C.dZ(new A.euq(this.a),null)},
$S:20}
A.euq.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=this.a,j=k.d
j===$&&C.c()
w=x.p
j=C.a([B.fCH,D.au,C.d("Mistakes "+j.f+" \xb7 Shocks "+j.r+" \xb7 Lives "+j.e,l,l,l,l,l,l,B.JX,l,l,l),D.W],w)
v=k.d.c
v===$&&C.c()
u=v.length
t=0
for(;t<v.length;v.length===u||(0,C.M)(v),++t){s=v[t]
r=D.c.j(0.05)
q=new C.aQ(14,14)
p=new C.ay(s.c?D.bj.j(0.6):D.bz,1,D.r,-1)
o=s.c?"\u2705":"\ud83d\udd27"
n=B.wz.h(0,s.a).a
m=s.c?D.aB:D.c
j.push(C.p(l,new C.y(o+" "+n,l,new C.F(!0,m,l,l,l,l,13.5,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l),l,l,l,l,l,l,l,l,l),D.f,l,l,new C.o(r,l,new C.bK(p,p,p,p),new C.bj(q,q,q,q),l,l,D.n),l,l,l,D.ct,D.bf,l,l,l))}j.push(D.am)
j.push(B.fI0)
j.push(D.O)
j.push(C.B(C.a([B.bDV,C.Y7(l,l,l,l,!1,D.y,l,l,l,l,l,l,new A.euo(k,e),l,l,l,l,l,l,l,l,k.d.b)],w),D.m,l,D.e,D.i,0,l,l))
j.push(C.bH(B.fL7,l,new A.eup(k,d),l))
return C.bl(!0,C.cr(j,l,D.bQ,l,l,D.ah,!0),!0,!1,D.af,!0,!0)},
$S:87}
A.euo.prototype={
$1(d){var w=this.a.d
w===$&&C.c()
w.b=d
this.b.$1(new A.eun())},
$S:8}
A.eun.prototype={
$0(){},
$S:0}
A.eup.prototype={
$0(){C.a4(this.b,!1).O(null)
this.a.awW()},
$S:0}
A.fi_.prototype={
$1(d){return d.d===this.a},
$S:z+20}
A.bUu.prototype={
$1(d){var w,v,u,t,s=this.a,r=s.p1
if(r!=="back"){s=r==="left"?-1.5707963267948966:1.5707963267948966
return new C.z(new C.z(0,d),s)}r=s.k1
w=A.h85(s,A.aPp(r==null?"tv100":r),0)
s=w.c
r=w.a/2
v=s-r-18
u=this.b
t=-u/2+14
if(v<t)v=s+r+18
v=D.k.E(v,t,u/2-14)
return new C.z(new C.z(v,d),Math.atan2(s-v,-d))},
$S:1821}
A.bUv.prototype={
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
return D.d.gak(w)},
$S:1822}
A.d6M.prototype={
$0(){return A.h7W(this.a)},
$S:0}
A.d6N.prototype={
$1(d){var w=this.a
return w.m(new A.d6L(w,this.b))},
$S:8}
A.d6L.prototype={
$0(){var w=this.a
w.d=this.b
w.f.a9(0)
w.r=null},
$S:0}
A.d6O.prototype={
$1(d){var w=this.a
return w.m(new A.d6K(w))},
$S:8}
A.d6K.prototype={
$0(){var w=this.a
w.e=!1
w.r=null},
$S:0}
A.d6P.prototype={
$1(d){var w=this.a
return w.m(new A.d6J(w))},
$S:8}
A.d6J.prototype={
$0(){var w=this.a
w.e=!0
w.r=null},
$S:0}
A.d6Q.prototype={
$1(d){var w=this.a
return w.m(new A.d6I(w,this.b,d))},
$S:35}
A.d6I.prototype={
$0(){var w=this.a,v=this.c
v.toString
w.f.n(0,this.b,v)
w.r=null},
$S:0}
A.d6R.prototype={
$1(d){var w,v,u=null,t=this.a,s=B.zn[t.d],r=this.b,q=s.e.h(0,r)
q.toString
w=x.N
q=C.G([r,q],w,w)
t=t.f.h(0,r)
t.toString
v=A.hr7(s.b,q,C.G([r,t],w,w))
t=v.a
s=t===B.v3
if(s)r="Right: this follows the diagram."
else{r=v.b
r=D.d.gI(r).c+" "+D.d.gI(r).e}if(s)t=D.bj
else t=t===B.TC?D.bG:D.cs
return C.d(r,u,u,u,u,u,u,C.l(u,u,t,u,u,u,u,u,u,u,u,12.5,u,u,u,u,1.3,!0,u,u,u,u,u,u,u,u),u,u,u)},
$S:397}
A.d6S.prototype={
$0(){var w=this.a
return w.m(new A.d6H(w))},
$S:0}
A.d6H.prototype={
$0(){var w=this.a,v=B.zn[w.d]
return w.r=A.hr7(v.b,v.e,w.f)},
$S:0}
A.fyA.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=this
for(w=k.a*1.8,v=k.b,u=k.c,t=k.d,s=0.3*t,t=0.05*t,r=0;r<d;++r){q=w+r*0.173
p=D.k.F(q,1)
o=Math.sin((r*3.1+D.k.bh(q))*12.9898)*43758.5453
n=(o-Math.floor(o))*3.141592653589793*2
o=Math.sin((r+5)*12.9898)*43758.5453
m=e*(0.6+(o-Math.floor(o))*0.8)
q=u.$1(new A.q(Math.cos(n)*p*m,Math.sin(n)*p*m-p*p*6,3+p*3))
l=C.ar(E.YU,F.Mx,p)
l.toString
v.fT(q,s*(1-p*0.6)+t,l,3,5,0)}},
$S:1823}
A.fyz.prototype={
$3(d,e,f){var w,v,u,t,s,r,q,p,o,n=this,m=n.a
m.d=0.34
for(w=n.b,v=w*0.45,u=n.c,t=n.d,s=1-e,r=0;r<d;++r){q=D.k.F(v+r/d,1)
p=u.$1(new A.q(Math.sin(r*1.7+w)*1.4+q*1.5,q*f-1,3.5+q*4))
o=C.ar(E.Bd,B.boH,s)
o.toString
o=C.ar(o,B.bbm,q)
o.toString
m.fT(p,(1.1+q*3.4)*t,o,3,6,0)}m.d=1},
$S:1824}
A.fy4.prototype={
$5(d,e,f,g,h){return this.a.push(new A.wj(d,e,f,g,h))},
$S:z+119}
A.fy9.prototype={
$2(d,e){var w=this.a
return new C.Z(w,new A.fya(d,e),C.T(w).k("Z<1>")).gL(0)},
$S:z+120}
A.fya.prototype={
$1(d){return d.a.c===this.a&&d.b.c===this.b},
$S:z+12}
A.fy5.prototype={
$1(d){return d.b.c===B.aRJ},
$S:z+12}
A.fy6.prototype={
$1(d){return d.a.c===B.aXd},
$S:z+12}
A.fy7.prototype={
$1(d){return!1},
$S:z+12}
A.fy8.prototype={
$1(d){return!1},
$S:z+12}
A.fhx.prototype={
$1(d){return D.d.b3(this.a,new A.fhy(d))},
$S:3}
A.fhy.prototype={
$1(d){return d.a===this.a},
$S:z+45}
A.cye.prototype={
$1(d){return A.hQC(d)},
$S:z+12}
A.cyf.prototype={
$2(d,e){return d+e},
$S:70}
A.cyg.prototype={
$1(d){return d.b.a===B.v3},
$S:z+35}
A.fyb.prototype={
$2(d,e){var w=this.a.h(0,d)
if(w==null)this.b.push(new A.wj("LEAD_MISSING",B.TC,"The "+d+" lead is not connected.","Every lead on the diagram needs its connection.","Connect the "+d+" lead to "+e+"."))
else if(w!==e)this.b.push(new A.wj("LEAD_WRONG",B.aPj,"The "+d+" lead is connected to "+w+", but the diagram says "+e+".","Connections follow the approved wiring diagram.","Move the "+d+" lead to "+e+"."))},
$S:112}
A.fVK.prototype={
$1(d){var w,v,u,t,s,r=null,q=C.aJ(d,r,x.w).w,p=x.p,o=C.a([B.ftG,D.am,B.fNc,D.W],p)
for(w=0;w<5;++w){v=B.daT[w]
u=D.c.j(0.05)
t=new C.aQ(12,12)
s=new C.ay(D.bz,1,D.r,-1)
o.push(C.p(r,C.x(C.a([new C.y(v.a+": "+v.b,r,D.aT1,r,r,r,r,r,r,r,r,r),D.cL,new C.y("Goes to: "+v.c+"\nCircuit: "+v.d,r,E.E6,r,r,r,r,r,r,r,r,r),D.cL,new C.y(v.e,r,D.aTJ,r,r,r,r,r,r,r,r,r),D.cL,new C.y("Exception: "+v.f,r,B.fm0,r,r,r,r,r,r,r,r,r)],p),D.E,r,D.e,D.i,0,D.p),D.f,r,r,new C.o(u,r,new C.bK(s,s,s,s),new C.bj(t,t,t,t),r,r,D.n),r,r,r,D.ct,D.y8,r,r,r))}o.push(D.am)
o.push(B.fv_)
return C.bl(!0,new C.cU(new C.aZ(0,1/0,0,q.a.b*0.85),C.cr(o,r,D.bQ,r,r,D.ah,!0),r),!0,!1,D.af,!0,!0)},
$S:25}
A.fVI.prototype={
$1(d){return new A.a19(this.a,this.b,null)},
$S:z+89}
A.f7p.prototype={
$1(d){var w=this.a,v=w.a.c,u=this.b
d.toString
v.c.n(0,u,d)
w.m(new A.f7o(w,u,d))},
$S:187}
A.f7o.prototype={
$0(){var w=this.c
this.a.d.n(0,this.b,w)
return w},
$S:0}
A.f7q.prototype={
$0(){var w=this.a
w.m(new A.f7n(w,w.a.c.bqC(0)))},
$S:0}
A.f7n.prototype={
$0(){return this.a.e=this.b},
$S:0}
A.f7r.prototype={
$1(d){return d.b.a!==B.v3},
$S:z+35}
A.f7s.prototype={
$0(){var w=this.a,v=w.c
v.toString
w=w.e
C.a4(v,!1).O(w)
return null},
$S:0}
A.bS0.prototype={
$1(d){return this.a.a.$0()},
$S:11}
A.bS_.prototype={
$1(d){var w=this.a
if(!w.c)return
w.a.$0()
if(w.c)w.b_5()},
$S:9};(function aliases(){var w=A.aNy.prototype
w.byb=w.q})();(function installTearOffs(){var w=a._instance_0u,v=a._instance_1u,u=a.installStaticTearOff,t=a.installInstanceTearOff,s=a._instance_2u,r=a._instance_0i
var q
w(q=A.ae8.prototype,"gbVX","bVY",0)
v(q,"gLK","a56",68)
u(A,"iex",3,null,["$3"],["i0m"],28,0)
w(q=A.aoz.prototype,"gc6k","c6l",0)
w(q,"gbqw","bqx",0)
t(q,"gcyV",0,0,null,["$1$done","$0"],["aBq","cyW"],121,0,0)
w(q,"gcAY","cAZ",0)
w(q,"gbOp","bOq",0)
v(A.aTB.prototype,"gcRs","cRt",17)
s(q=A.aEp.prototype,"gbNs","bNt",30)
w(q,"giV","iC",0)
t(q,"gc7A",0,1,null,["$2$keepTour","$1"],["axt","Az"],58,0,0)
v(q,"gc7E","c7F",9)
w(q,"gbPm","bPn",0)
w(q,"gbPo","bPp",0)
w(q,"gbPI","bPJ",0)
w(q,"gc2y","c2z",0)
w(q,"gbFS","bFT",0)
w(q,"gcDr","cDs",0)
w(q,"gcru","crv",0)
w(q,"gbO5","bO6",0)
w(q,"gaQr","asu",0)
w(q,"gc7y","c7z",0)
w(q,"gcu5","cu6",0)
w(q,"gcDl","cDm",19)
w(q,"gcyX","S5",0)
w(q,"gb77","a2A",0)
w(q,"gb7m","a2E",0)
w(q,"gcFr","cFs",0)
w(q,"gbSZ","bT_",0)
w(q,"gcyU","B2",0)
w(q,"gc7D","Em",19)
w(q,"gcgE","a0j",19)
w(q,"gcg3","a0a",19)
w(q,"gaNf","bBc",19)
w(q,"gc7I","c7J",0)
w(q,"gcoH","coI",0)
r(q,"gc7G","c7H",0)
u(A,"huw",3,null,["$3"],["ifF"],28,0)
u(A,"h7y",3,null,["$3"],["huK"],28,0)
w(q=A.aAe.prototype,"gc7N","qA",0)
w(q,"gJ4","og",0)
v(q,"gJ5","J6",9)
w(q,"gclG","clH",0)
w(q,"gcB0","cB1",0)
w(q=A.aGa.prototype,"gJ4","og",0)
v(q,"gJ5","J6",9)
w(q,"gc7O","c7P",0)
w(q=A.aAy.prototype,"gJ4","og",0)
v(q,"gJ5","J6",9)
r(q,"gc7L","c7M",0)
w(q=A.aBr.prototype,"gJ4","og",0)
v(q,"gJ5","J6",9)
w(q=A.aEQ.prototype,"gc7S","aZK",0)
v(q,"gc7T","c7U",9)
w(q,"gcwl","cwm",0)
v(A.XE.prototype,"gaq3","bpF",111)
w(q=A.aEX.prototype,"gc82","c83",0)
s(q,"gc7X","c7Y",30)
w(q,"gbRI","aTT",0)
w(q,"gc2w","c2x",0)
w(q,"gbDK","bDL",0)
w(q,"gbDI","bDJ",0)
w(q,"gc7Z","aei",0)
v(q,"gc80","c81",9)
w(q=A.aF0.prototype,"gc87","aZN",0)
v(q,"gc88","c89",9)})();(function inheritance(){var w=a.mixin,v=a.mixinHard,u=a.inheritMany,t=a.inherit
u(C.lZ,[A.eWL,A.rf,A.JD,A.FG,A.FN])
u(C.ag,[A.a9F,A.ave,A.aoy,A.apy,A.IS,A.aIE,A.ND,A.aw9,A.DV,A.a9y,A.a5_,A.aBq,A.afD,A.Wb,A.Of,A.arH,A.apU,A.a19])
u(C.ah,[A.aNp,A.aNy,A.aoz,A.bkh,A.aEp,A.btj,A.bki,A.bt7,A.aAe,A.aGa,A.aAy,A.aBr,A.bwM,A.aEQ,A.aEX,A.aF0,A.be0,A.buo])
t(A.ae8,A.aNp)
t(A.boT,O.au9)
u(C.aD,[A.q,A.kn,A.cW,A.hf,A.tM,A.fO,A.fk,A.bUf,A.cCx,A.FZ,A.PN,A.cKu,A.bbL,A.bc5,A.bhb,A.dor,A.Mz,A.dtZ,A.diD,A.lD,A.r6,A.Hm,A.aSH,A.bHh,A.hn,A.FR,A.z8,A.xi,A.aTQ,A.a4h,A.akd,A.bLE,A.bJK,A.dj5,A.rJ,A.Su,A.aTb,A.bwJ,A.bJM,A.Af,A.czY,A.px,A.bJy,A.Fl,A.OY,A.I3,A.LY,A.aTB,A.fK,A.Cx,A.jz,A.T_,A.b8W,A.mb,A.fn,A.E3,A.pO,A.abD,A.oj,A.aVY,A.a5d,A.aW3,A.eZ8,A.Mk,A.Qg,A.bUw,A.pu,A.jL,A.N0,A.cmZ,A.Fb,A.nq,A.Xa,A.cmP,A.z3,A.ou,A.XQ,A.avI,A.aUp,A.eB,A.XE,A.iV,A.rH,A.uu,A.Ms,A.cvb,A.y0,A.tH,A.a9U,A.i8,A.crK,A.Av,A.brF,A.aW5,A.b9p,A.aki,A.cyb,A.cBM,A.a4c,A.bLO,A.wj,A.tg,A.b60,A.ab1,A.ab2,A.v9,A.b4J,A.b7T,A.cyd,A.PI,A.a58])
u(C.hL,[A.c_h,A.c_i,A.c_g,A.c_j,A.c_k,A.fW1,A.fW_,A.fW0,A.fVZ,A.fVO,A.bIZ,A.bJ_,A.bJ0,A.bJ1,A.bJ3,A.bJ2,A.bIY,A.bIX,A.csL,A.csM,A.csE,A.csF,A.csG,A.csH,A.f_e,A.f_d,A.f_a,A.f_b,A.f_c,A.f_8,A.bT1,A.bSV,A.bT5,A.bT0,A.bT8,A.bT6,A.bTb,A.bSX,A.bSZ,A.bSY,A.bHj,A.bHi,A.fMW,A.fvC,A.fvD,A.fvv,A.fvw,A.fvx,A.fvy,A.fvz,A.fvA,A.fvB,A.fhI,A.fl5,A.fuh,A.fvn,A.fvo,A.fvp,A.c3i,A.c3g,A.c38,A.c31,A.c3_,A.c2U,A.c30,A.c2K,A.c2L,A.c2M,A.fxT,A.bLG,A.bLJ,A.fBc,A.feV,A.bJN,A.fVX,A.fVY,A.fVV,A.fxr,A.cA_,A.cA0,A.bJz,A.bJG,A.bJH,A.bJI,A.bJJ,A.bJA,A.bJB,A.bJC,A.bJE,A.bJF,A.bKn,A.bKk,A.bKl,A.bKm,A.bKr,A.bKq,A.bKo,A.bKs,A.dRp,A.dRk,A.dRE,A.dRn,A.dRH,A.fy2,A.fWx,A.fxe,A.fxf,A.fxc,A.fxd,A.fNP,A.fNQ,A.fyf,A.fyg,A.fyd,A.fye,A.fvt,A.fvu,A.fWw,A.fhZ,A.fvf,A.fWt,A.fWq,A.bTH,A.bTG,A.bUh,A.bUi,A.bUj,A.bUk,A.bUl,A.bUp,A.bUm,A.bUn,A.bUt,A.bUs,A.bUr,A.bUq,A.ec5,A.ec2,A.ec3,A.ec4,A.e8S,A.ebg,A.ebh,A.ebd,A.e7r,A.ebJ,A.ebK,A.eaW,A.e9X,A.e9T,A.e8L,A.e9D,A.e8V,A.e9s,A.ebX,A.e8u,A.e9q,A.e9r,A.e95,A.e9F,A.e7Z,A.e7Y,A.e8q,A.eaL,A.eaK,A.eav,A.eas,A.ebH,A.ebG,A.eby,A.ebt,A.ebs,A.eb5,A.ebV,A.ebL,A.e9H,A.e9I,A.e9J,A.e9t,A.e9u,A.eaN,A.eb0,A.e9A,A.e9z,A.e9B,A.eb1,A.e9Z,A.ea_,A.ea7,A.ea8,A.ea9,A.e9L,A.e9M,A.ebW,A.e9O,A.e9N,A.e7q,A.e7k,A.e7l,A.e7m,A.ec_,A.e7K,A.e7y,A.e7z,A.e7M,A.e7s,A.eaB,A.duo,A.f3D,A.f3E,A.f3F,A.f3C,A.fvO,A.fvV,A.fvQ,A.fvN,A.fvG,A.fvS,A.fvU,A.fvT,A.fvR,A.fvH,A.fvF,A.fvK,A.fvL,A.fN6,A.fN4,A.fN3,A.fN5,A.fvY,A.fw9,A.fvZ,A.fw_,A.fw1,A.fw4,A.fw5,A.fw6,A.fw7,A.fw2,A.fpa,A.fp5,A.fp6,A.fp7,A.fox,A.foz,A.foK,A.foV,A.fp8,A.fp_,A.fp0,A.fp1,A.fp2,A.fp3,A.fp4,A.foA,A.foB,A.foC,A.foD,A.foE,A.foF,A.foG,A.foH,A.foI,A.foJ,A.foL,A.foM,A.foN,A.foO,A.foP,A.foQ,A.foR,A.foS,A.foT,A.foU,A.foW,A.foX,A.foY,A.foZ,A.fz7,A.fz8,A.fz9,A.ffq,A.ffg,A.fpZ,A.fpw,A.fpx,A.fpy,A.fpz,A.fpK,A.fpS,A.fpT,A.fpU,A.fpV,A.fpW,A.fpX,A.fpY,A.fpA,A.fpB,A.fpC,A.fpD,A.fpE,A.fpF,A.fpG,A.fpH,A.fpI,A.fpJ,A.fpL,A.fpM,A.fpN,A.fpO,A.fpP,A.fpQ,A.fpR,A.fjf,A.fwg,A.fwc,A.fwf,A.fwe,A.dRI,A.f3r,A.fOi,A.fOh,A.d9W,A.d9Z,A.da1,A.da3,A.dam,A.daC,A.daj,A.daD,A.eTE,A.eTM,A.eTN,A.dd8,A.ddi,A.ddj,A.ddl,A.dkc,A.dkn,A.dkm,A.dkp,A.feW,A.ff0,A.ff1,A.ff_,A.fwS,A.fwR,A.fwQ,A.fvX,A.fyx,A.cmT,A.cmU,A.cmQ,A.cmV,A.cmW,A.cmX,A.cmY,A.cmR,A.cmS,A.fwP,A.fwN,A.fwH,A.fwK,A.fwI,A.fwJ,A.fwO,A.fwL,A.fwM,A.fwG,A.fNq,A.enX,A.enC,A.enH,A.enY,A.enI,A.enJ,A.enK,A.enV,A.enZ,A.eo0,A.eo_,A.enP,A.enN,A.fVN,A.crQ,A.crX,A.crY,A.crZ,A.cs_,A.cs1,A.cs0,A.crP,A.crN,A.crO,A.crV,A.crW,A.crR,A.crS,A.crT,A.crU,A.erC,A.erD,A.erE,A.esh,A.esj,A.esl,A.erM,A.erJ,A.es3,A.es4,A.erR,A.erS,A.erT,A.erW,A.erX,A.erY,A.erZ,A.es_,A.es0,A.es1,A.es2,A.erU,A.erV,A.esS,A.esY,A.esJ,A.esg,A.es9,A.esa,A.fpd,A.fpe,A.fwT,A.fwU,A.fwV,A.fwY,A.fwW,A.fNK,A.fNL,A.fNM,A.cvg,A.cvc,A.cve,A.cvf,A.cvd,A.eui,A.euj,A.eud,A.eu9,A.euu,A.eut,A.euv,A.euw,A.eur,A.euo,A.fi_,A.bUu,A.bUv,A.d6N,A.d6O,A.d6P,A.d6Q,A.d6R,A.fyz,A.fy4,A.fya,A.fy5,A.fy6,A.fy7,A.fy8,A.fhx,A.fhy,A.cye,A.cyg,A.fVK,A.fVI,A.f7p,A.f7r,A.bS0,A.bS_])
u(C.ke,[A.c_f,A.csK,A.csD,A.csI,A.csJ,A.bSW,A.bT3,A.bT2,A.fud,A.fvE,A.fui,A.c2Z,A.bLI,A.bLF,A.bLK,A.bLH,A.bJL,A.c0U,A.fVW,A.fxs,A.czZ,A.bJD,A.bKp,A.fzm,A.fzn,A.fzo,A.fzp,A.fzq,A.fyc,A.fgF,A.fzr,A.fzs,A.fzt,A.fzu,A.fzv,A.fzw,A.fzx,A.fzy,A.fzz,A.fzA,A.fWr,A.fWs,A.bUo,A.eae,A.e9c,A.ebI,A.eaV,A.e9W,A.e8X,A.eaJ,A.ebF,A.ebr,A.ea6,A.fvW,A.fvP,A.fvM,A.fvI,A.fvJ,A.fwb,A.fw0,A.fw3,A.fwa,A.fp9,A.foy,A.fza,A.fwd,A.da_,A.eTJ,A.dd7,A.fyy,A.cs2,A.esf,A.euq,A.fyA,A.fy9,A.cyf,A.fyb])
u(C.oW,[A.xd,A.aTc])
u(C.mV,[A.b63,A.bfa,A.biO])
t(A.brs,A.aNy)
u(C.jc,[A.f_9,A.fgz,A.bTa,A.bT4,A.bT_,A.bT7,A.fuj,A.fug,A.c3f,A.c33,A.c39,A.c3h,A.c36,A.c35,A.c2E,A.c34,A.c37,A.c32,A.c2X,A.c2W,A.c2Y,A.c2V,A.c2J,A.c2I,A.c2N,A.c2O,A.c2P,A.c2Q,A.c2R,A.c2H,A.c2S,A.c2F,A.c2G,A.c2T,A.c3c,A.c3d,A.c3b,A.c3e,A.c3a,A.fxU,A.dRo,A.dRB,A.dRv,A.dRw,A.dRu,A.dRl,A.dRF,A.dRD,A.dRC,A.dRj,A.dRq,A.dRr,A.dRs,A.dRt,A.dRm,A.dRy,A.dRz,A.dRA,A.dRx,A.dRG,A.fvg,A.ec1,A.eaQ,A.eaR,A.eaP,A.eaS,A.e9o,A.ebi,A.eal,A.eam,A.ean,A.eao,A.eap,A.e8Q,A.e8P,A.e8R,A.e8N,A.e8O,A.e8M,A.e90,A.e91,A.e92,A.eag,A.eaf,A.eah,A.ead,A.eai,A.eac,A.eaj,A.eab,A.eak,A.eaa,A.e8s,A.e8t,A.e9e,A.e9d,A.e9f,A.e9b,A.e9g,A.e9a,A.e9h,A.e99,A.e9i,A.e98,A.e9j,A.e97,A.e9k,A.e96,A.ebe,A.ebf,A.e9C,A.e7S,A.e9x,A.e9w,A.e9y,A.e9v,A.eaX,A.eaU,A.eaT,A.e9V,A.e9U,A.e9R,A.e9Q,A.e9S,A.e9P,A.e9l,A.e9m,A.eaM,A.e8Z,A.e8Y,A.e9_,A.eaY,A.eb8,A.e8W,A.e8U,A.e8T,A.eb7,A.e9p,A.e94,A.e9G,A.e8_,A.e7X,A.e80,A.e7W,A.e81,A.e7V,A.e82,A.e7U,A.e83,A.e7T,A.e8r,A.eaF,A.eaE,A.eaG,A.eaH,A.eaI,A.eat,A.ear,A.eau,A.eaq,A.ebx,A.ebw,A.ebz,A.ebA,A.ebB,A.ebC,A.ebD,A.ebE,A.ebn,A.ebl,A.ebm,A.ebo,A.ebk,A.ebp,A.ebq,A.eb4,A.eb6,A.ebu,A.ebj,A.ebb,A.ebc,A.eb3,A.eba,A.ebS,A.ebT,A.ebU,A.ebM,A.ebN,A.ebO,A.ebP,A.ebQ,A.ebR,A.e93,A.e9K,A.eaZ,A.e9n,A.eaO,A.eb_,A.eb2,A.eb9,A.ea1,A.ea2,A.ea0,A.ea3,A.ea4,A.e9Y,A.ea5,A.e7p,A.e7n,A.e9E,A.ebv,A.eaC,A.eaD,A.e7o,A.e8A,A.e8B,A.e8C,A.e8D,A.e8E,A.e8F,A.e8z,A.e8G,A.e8y,A.e8H,A.e8x,A.e8I,A.e8w,A.e8J,A.e8v,A.e8K,A.ebZ,A.ec0,A.ebY,A.e8c,A.e8d,A.e8e,A.e8i,A.e8j,A.e8k,A.e8b,A.e8l,A.e8a,A.e8m,A.e89,A.e8n,A.e8o,A.e88,A.e8p,A.e87,A.e8f,A.e86,A.e8g,A.e85,A.e8h,A.e84,A.e7x,A.e7L,A.e7C,A.e7N,A.e7w,A.e7O,A.e7P,A.e7v,A.e7Q,A.e7R,A.e7A,A.e7u,A.e7B,A.e7t,A.e7D,A.e7E,A.e7F,A.e7G,A.e7H,A.e7I,A.e7J,A.eay,A.eaz,A.eax,A.eaA,A.eaw,A.f3B,A.f3A,A.cfI,A.fw8,A.fxb,A.dRJ,A.dRK,A.dRL,A.dRP,A.dRQ,A.dRR,A.dRS,A.dRT,A.dRU,A.dRV,A.dRW,A.dRM,A.dRN,A.dRO,A.f3q,A.cwo,A.cwp,A.bWC,A.dab,A.da9,A.daa,A.da8,A.d9X,A.d9Y,A.da0,A.da2,A.da4,A.da5,A.da6,A.da7,A.dac,A.dad,A.dav,A.dan,A.dao,A.daw,A.dax,A.dal,A.day,A.dak,A.daz,A.daA,A.daB,A.dap,A.dai,A.daq,A.dar,A.dah,A.das,A.dag,A.dat,A.daf,A.dau,A.dae,A.eTH,A.eTI,A.eTG,A.eTA,A.eTB,A.eTC,A.eTD,A.eTF,A.eTQ,A.eTO,A.eTL,A.eTP,A.eTK,A.ddd,A.dde,A.ddc,A.dd5,A.dd9,A.dda,A.ddb,A.dd6,A.ddo,A.ddk,A.ddh,A.ddm,A.ddg,A.ddn,A.ddf,A.dkh,A.dki,A.dkg,A.dkb,A.dkd,A.dke,A.dkf,A.dkq,A.dkl,A.dko,A.dkk,A.dkj,A.feZ,A.feX,A.feY,A.cb2,A.fwD,A.fwE,A.fwF,A.enS,A.enT,A.enR,A.enL,A.enA,A.enB,A.enF,A.enG,A.enQ,A.enU,A.enW,A.enE,A.enD,A.eo2,A.eo1,A.enM,A.enO,A.esw,A.esx,A.esv,A.ery,A.erz,A.erx,A.erA,A.erB,A.erw,A.erN,A.erP,A.erF,A.erG,A.es5,A.erO,A.ess,A.est,A.esu,A.esq,A.esr,A.esp,A.esi,A.esk,A.esm,A.esn,A.eso,A.esy,A.erK,A.erL,A.erH,A.erI,A.erQ,A.esR,A.esT,A.esD,A.esG,A.esH,A.esF,A.esI,A.esE,A.esU,A.esC,A.esV,A.esB,A.esW,A.esA,A.esX,A.esZ,A.esz,A.esK,A.esL,A.esM,A.esN,A.esO,A.esP,A.esQ,A.es7,A.es8,A.es6,A.esb,A.esc,A.esd,A.ese,A.fwX,A.eul,A.eum,A.euk,A.eua,A.euf,A.eug,A.eue,A.euh,A.euc,A.eu7,A.eu8,A.eub,A.euy,A.eux,A.eus,A.eun,A.eup,A.d6M,A.d6L,A.d6K,A.d6J,A.d6I,A.d6S,A.d6H,A.f7o,A.f7q,A.f7n,A.f7s])
u(C.ax,[A.aYt,A.Us,A.acE,A.bjo,A.b7l,A.aXt,A.a71])
w(A.aNp,O.au8)
v(A.aNy,C.cp)})()
C.jk(b.typeUniverse,JSON.parse('{"a9F":{"ag":[],"v":[]},"ae8":{"ah":["a9F<1>"]},"ave":{"ag":[],"v":[]},"xd":{"aC":[]},"b63":{"aC":[]},"brs":{"ah":["ave"]},"aoy":{"ag":[],"v":[]},"aoz":{"ah":["aoy"]},"aTc":{"aC":[]},"aYt":{"ax":[],"v":[]},"Us":{"ax":[],"v":[]},"apy":{"ag":[],"v":[]},"bkh":{"ah":["apy"]},"acE":{"ax":[],"v":[]},"bfa":{"aC":[]},"IS":{"ag":[],"v":[]},"aIE":{"ag":[],"v":[]},"aEp":{"ah":["IS"]},"bjo":{"ax":[],"v":[]},"biO":{"aC":[]},"btj":{"ah":["aIE"]},"aw9":{"ag":[],"v":[]},"DV":{"ag":[],"v":[]},"a9y":{"ag":[],"v":[]},"a5_":{"ag":[],"v":[]},"aBq":{"ag":[],"v":[]},"afD":{"ag":[],"v":[]},"ND":{"ag":[],"v":[]},"bki":{"ah":["ND"]},"bt7":{"ah":["aw9"]},"b7l":{"ax":[],"v":[]},"aXt":{"ax":[],"v":[]},"aAe":{"ah":["DV"]},"aGa":{"ah":["a9y"]},"aAy":{"ah":["a5_"]},"aBr":{"ah":["aBq"]},"bwM":{"ah":["afD"]},"a71":{"ax":[],"v":[]},"Wb":{"ag":[],"v":[]},"aEQ":{"ah":["Wb"]},"Of":{"ag":[],"v":[]},"aEX":{"ah":["Of"]},"arH":{"ag":[],"v":[]},"aF0":{"ah":["arH"]},"apU":{"ag":[],"v":[]},"be0":{"ah":["apU"]},"a19":{"ag":[],"v":[]},"buo":{"ah":["a19"]}}'))
C.CR(b.typeUniverse,JSON.parse('{"boT":1,"aNp":1}'))
var y={T:"A hot wire never goes on the green ground screw.",W:"A shut-off valve goes on the pipe that comes out of the wall.",v:"Both black wires go on brass screws. It does not matter which one.",r:"Brass screws are for the HOT wire (black).",q:"Each switch has its own screw on the other side, and each goes to its own light.",R:"Fasten the bare copper ground to the GREEN screw.",E:"Fasten the black hot to one HOT (X or Y) brass screw.",k:"Fasten the red hot to the other HOT brass screw.",N:"Fasten the white neutral to the silver NEUTRAL (W) screw.",b:"Fold the wires back and push the device into the box.",P:"LOAD is for feeding other outlets further down the line. It is covered with tape. Power comes in on the LINE screws.",x:"Look at the device and the wires. Learn which wire is which before you touch a screw.",M:"Move it with the arrow buttons, turn it, change its colour or take it out.",G:"Neutral goes on a silver screw. The silver screws stay joined, so one wire feeds both halves.",o:"Pick a paint colour above to change this wall.",n:"Put the cover plate on, turn the power on and test.",Q:"Silver screws are for the NEUTRAL wire (white).",f:"Switch the power on and flip the wall switch.",t:"The bare copper ground wire only goes on the GREEN screw.",u:"The black hot wire goes on a brass screw.",C:"The gold screws are BRASS. They are for the HOT wire (black).",Z:"The green screw is for the bare copper ground wire.",l:"The two hot wires (black and red) go on the two brass screws, X and Y, in either order.",p:"The two hot wires go on the two brass screws, in either order.",X:"The two traveler wires go on the two brass traveler screws, in either order.",g:"The two travelers coming from the first three-way go on the two top screws.",_:"The two travelers going to the second three-way go on the two bottom screws.",c:"The white neutral wire goes on a silver screw.",I:"The white neutral wire goes on the silver W screw.",B:"The white-silver screws are NICKEL. They are for the NEUTRAL wire (white).",D:"There is no medicine left. Buy some in the shop.",O:"Turn the breaker OFF and test that the wires are dead.",Y:"You are at the street light. Press Fix the street light."}
var x=(function rtii(){var w=C.av
return{dw:w("m6<u?>"),ff:w("aSH"),l:w("bw<n,n>"),e:w("bw<n,K>"),M:w("dD<n>"),hg:w("a4h"),cD:w("aUp"),e7:w("eI<n>"),eP:w("rf"),gN:w("HY"),eB:w("mb"),fa:w("aA<MJ?>"),v:w("du<H,n>"),fC:w("I3"),m:w("O<lD>"),gQ:w("O<LY>"),V:w("O<ac>"),O:w("O<u>"),bm:w("O<a4c>"),fW:w("O<aTQ>"),B:w("O<a4h>"),C:w("O<xi>"),dI:w("O<Mk>"),bP:w("O<eI<n>>"),gw:w("O<Ms>"),dh:w("O<HY>"),_:w("O<mb>"),dY:w("O<oj>"),cX:w("O<aVY>"),D:w("O<a5d>"),ha:w("O<I3>"),r:w("O<fK>"),E:w("O<hf>"),Z:w("O<jL>"),gL:w("O<ai<H>>"),ez:w("O<a8<n,aD>>"),c7:w("O<a8<n,@>>"),f4:w("O<a8<n,cf>>"),T:w("O<i8>"),dN:w("O<t>"),F:w("O<ou>"),fI:w("O<nq>"),g:w("O<h9>"),z:w("O<kn>"),gl:w("O<b4J>"),a6:w("O<+(a8Y,H)>"),L:w("O<+(n,n)>"),dt:w("O<+(q,q)>"),d6:w("O<+(K,n)>"),f:w("O<+(K,K)>"),ek:w("O<+(H,n)>"),aJ:w("O<+(n,H,H)>"),dV:w("O<+(K,K,u)>"),al:w("O<+(H,K,R)>"),gp:w("O<+(H,H,ai<t>)>"),dQ:w("O<+(H,H,H)>"),eV:w("O<+(K,K,K,K)>"),az:w("O<+(H,H,K,R,n)>"),fP:w("O<OY>"),e3:w("O<a9U>"),fB:w("O<wj>"),a:w("O<fO>"),gD:w("O<XQ>"),y:w("O<rJ>"),s:w("O<n>"),fJ:w("O<ab1>"),dH:w("O<ab2>"),W:w("O<v9>"),bz:w("O<Af>"),o:w("O<q>"),p:w("O<v>"),d:w("O<jz>"),f5:w("O<PN>"),gR:w("O<bbL>"),bl:w("O<FZ>"),h:w("O<Av>"),I:w("O<iV>"),x:w("O<hn>"),aQ:w("O<Qg>"),fG:w("O<brF>"),X:w("O<px>"),u:w("O<R>"),n:w("O<K>"),t:w("O<H>"),dS:w("O<aC?>"),k:w("O<cf>"),eF:w("cB<ah<ag>>"),dg:w("ai<K>"),j:w("ai<@>"),b:w("a8<n,@>"),G:w("a8<@,@>"),w:w("iF"),P:w("cu"),q:w("cW"),aU:w("aD"),dx:w("t"),ej:w("Jn"),fX:w("kn"),cE:w("a9F<H>"),J:w("+(K,K)"),c5:w("dw<H>"),cR:w("XE"),K:w("fO"),cH:w("avI"),N:w("n"),ec:w("jx<n>"),dZ:w("b7T"),g6:w("bp<K>"),Q:w("q"),ac:w("c0<H>"),cI:w("jS<n>"),am:w("Z<mb>"),fZ:w("Z<Fb>"),cc:w("Z<n>"),dD:w("Z<H>"),c1:w("hm"),gh:w("Cx"),gf:w("PN"),bB:w("bc5"),c9:w("bhb"),R:w("R"),i:w("K"),A:w("@"),S:w("H"),c:w("Mz?"),eT:w("MJ?"),U:w("ai<@>?"),dy:w("a8<n,@>?"),fF:w("a8<@,@>?"),cU:w("q5?"),Y:w("cf"),H:w("~")}})();(function constants(){var w=a.makeConstList
B.aYX=new A.eB(!0,"The water is on and nothing leaks. Perfect job!",!1,"")
B.aYY=new A.eB(!0,"Primer and paint rolled on.",!1,"")
B.aYZ=new A.eB(!1,"This call is over. Start a new one.",!1,"")
B.aZ_=new A.eB(!0,"Recorded.",!1,"")
B.aZ0=new A.eB(!1,"That is not a place for a sheet.",!1,"")
B.aZ1=new A.eB(!0,"Sanded smooth. Wear a mask: the dust is bad to breathe.",!1,"")
B.abG=new A.eB(!1,"There is no device here.",!1,"")
B.aZ2=new A.eB(!0,"You look closely. Everything looks fine here.",!1,"")
B.aZ3=new A.eB(!1,"ZAP! You were shocked badly and it was your last life. Always turn the breaker OFF and test before you touch wires.",!0,"shock")
B.aZ4=new A.eB(!0,"Paper tape pressed into the seam.",!1,"")
B.aZ5=new A.eB(!0,"Unplugged.",!1,"")
B.aZ6=new A.eB(!0,"Breaker OFF. It is safe to work on the wires.",!1,"")
B.aZ7=new A.eB(!1,"ZAP! You were shocked badly. That was your last life: the job is over. Lesson: ALWAYS turn the breaker OFF and test the wires before you touch them.",!0,"shock")
B.aZ8=new A.eB(!1,"There is nothing there.",!1,"")
B.aZ9=new A.eB(!1,"The outlet is burnt. Nothing works. Pull it out and put in a new one.",!0,"")
B.aZa=new A.eB(!0,"The water is on and nothing leaks yet, but the job is not finished.",!1,"")
B.aZb=new A.eB(!0,"Sheet hung. Now screw it to the studs.",!1,"")
B.aZc=new A.eB(!0,"Hole drilled through the middle of the stud, at the cable height. Holes go in the center so a nail cannot reach the cable.",!1,"")
B.aZd=new A.eB(!0,"Plugged in. Nothing happens because the breaker is off. Turn it on to test.",!1,"")
B.aZe=new A.eB(!0,"You flipped the tripped breaker fully OFF. Fix the problem before you turn it on again.",!1,"")
B.aZf=new A.eB(!0,"Click.",!1,"")
B.aZg=new A.eB(!0,"The wires are folded back and the device is in the box. Now put the cover on.",!1,"")
B.aZh=new A.eB(!0,"Breaker OFF. The wires on this circuit are dead now. (Always test them to be sure.)",!1,"")
B.aZi=new A.eB(!1,"Nothing is wet.",!1,"")
B.aZj=new A.eB(!0,"Power is on.",!1,"")
B.aZk=new A.eB(!0,"Water OFF at the main valve. You can cut into the pipes safely now.",!1,"")
B.aZl=new A.eB(!0,"Opening cut around the box with the drywall saw. Keep it tight: the plate has to cover the edge.",!1,"")
B.aZm=new A.eB(!0,"Device pulled out of the box.",!1,"")
B.aZn=new A.eB(!0,"Screw set just below the paper, not through it.",!1,"")
B.aZo=new A.eB(!1,"ZAP! You touched a live wire. In Learn mode you are not hurt, but in real life this can kill. Switch the breaker OFF and test the wires first.",!0,"shock")
B.aZp=new A.eB(!0,"Cover on. Now you can turn the breaker on and test.",!1,"")
B.Wi=new A.eB(!1,"",!1,"")
B.aZq=new A.eB(!0,"Device taken out. You can put it somewhere else, or put in a new one.",!1,"")
B.aZr=new A.eB(!0,"Breaker back ON.",!1,"")
B.aZs=new A.eB(!1,"That is not a stud.",!1,"")
B.aZt=new A.eB(!0,"Off.",!1,"")
B.aZu=new A.eB(!1,"Nothing to flip yet.",!1,"")
B.aZv=new A.eB(!0,"Wire taken off.",!1,"")
B.aZw=new A.eB(!0,"The mud is dry.",!1,"")
B.aZx=new A.eB(!0,"Breaker reset.",!1,"")
B.aZy=new A.eB(!0,"Box mounted. (Careful: this is not a fan-rated box. A fan on it could fall.)",!1,"")
B.fMC=new C.y("Tap a piece of furniture, or add one:",null,D.Ad,null,null,null,null,null,null,null,null,null)
B.eln=new C.D(D.nm,B.fMC,null)
B.aZF=new C.bM(D.a5,null,null,B.eln,null)
B.ac8=new A.lD(0,0,0,0,1)
B.acK=new C.aZ(0,290,0,1/0)
B.b0P=new C.bj(G.To,G.To,D.bI,D.bI)
B.brq=new C.u(1,0.12156862745098039,0.13725490196078433,0.18823529411764706,D.q)
B.bry=new C.u(1,0.054901960784313725,0.06274509803921569,0.09411764705882353,D.q)
B.d52=w([B.brq,B.bry],x.O)
B.c10=new C.a9(D.b4,D.b7,D.x,B.d52,null,null)
B.b3O=new C.o(null,null,G.acy,B.b0P,null,B.c10,D.n)
B.Fo=new C.u(1,0.08627450980392157,0.10588235294117647,0.1411764705882353,D.q)
B.b2b=new C.bK(D.a0,D.a0,Aa.vt,D.a0)
B.b4E=new C.o(B.Fo,null,B.b2b,null,null,null,D.n)
B.b1_=new C.bj(D.mU,D.ip,D.ip,D.ip)
B.b4K=new C.o(D.aJ,null,null,B.b1_,null,null,D.n)
B.fNh=new C.y("\u2600\ufe0f Let it dry",null,F.Aa,null,null,null,null,null,null,null,null,null)
B.b8P=new C.cg(D.A,null,null,B.fNh,null)
B.fN1=new C.y("\u23e9 Skip to the wiring",null,F.Aa,null,null,null,null,null,null,null,null,null)
B.b8X=new C.cg(D.A,null,null,B.fN1,null)
B.fBl=new C.y("\ud83c\udfd7\ufe0f",null,D.py,null,null,null,null,null,null,null,null,null)
B.b9c=new C.cg(D.A,null,null,B.fBl,null)
B.fB8=new C.y("\ud83c\udfe0",null,D.aTg,null,null,null,null,null,null,null,null,null)
B.b9F=new C.cg(D.A,null,null,B.fB8,null)
B.bb4=new C.u(1,0.9294117647058824,0.9098039215686274,0.8627450980392157,D.q)
B.Lu=new C.u(1,0.1803921568627451,0.20392156862745098,0.25098039215686274,D.q)
B.adX=new C.u(1,0.16470588235294117,0.10588235294117647,0.07058823529411765,D.q)
B.bbg=new C.u(1,0.9725490196078431,0.9647058823529412,0.9333333333333333,D.q)
B.vy=new C.u(1,0.5450980392156862,0.3686274509803922,0.20392156862745098,D.q)
B.bbm=new C.u(1,0.5568627450980392,0.5568627450980392,0.5882352941176471,D.q)
B.ae3=new C.u(1,0.611764705882353,0.5568627450980392,0.4588235294117647,D.q)
B.ER=new C.u(1,0.24705882352941178,0.5607843137254902,0.30980392156862746,D.q)
B.bbC=new C.u(1,0.8392156862745098,0.9333333333333333,0.984313725490196,D.q)
B.oR=new C.u(1,0.9450980392156862,0.9450980392156862,0.9176470588235294,D.q)
B.bc1=new C.u(1,0.9098039215686274,0.9254901960784314,0.9372549019607843,D.q)
B.bc3=new C.u(1,0.4823529411764706,0.5098039215686274,0.5450980392156862,D.q)
B.bcc=new C.u(1,0.10588235294117647,0.4980392156862745,0.20392156862745098,D.q)
B.ael=new C.u(1,0.7215686274509804,0.7450980392156863,0.7725490196078432,D.q)
B.nS=new C.u(1,0.5450980392156862,0.3686274509803922,0.23529411764705882,D.q)
B.aen=new C.u(1,0.8509803921568627,0.8274509803921568,0.7725490196078432,D.q)
B.aer=new C.u(1,0.6549019607843137,0.6784313725490196,0.7098039215686275,D.q)
B.hp=new C.u(1,0.16862745098039217,0.17647058823529413,0.2,D.q)
B.ET=new C.u(1,0.8980392156862745,0.7529411764705882,0.4823529411764706,D.q)
B.LE=new C.u(1,0.8156862745098039,0.5098039215686274,0.27450980392156865,D.q)
B.Xj=new C.u(1,0.5411764705882353,0.41568627450980394,0.2784313725490196,D.q)
B.aey=new C.u(1,0.1843137254901961,0.4196078431372549,0.23529411764705882,D.q)
B.Xm=new C.u(1,0.2980392156862745,0.5450980392156862,0.2901960784313726,D.q)
B.xB=new C.u(1,0.788235294117647,0.6274509803921569,0.22745098039215686,D.q)
B.aeE=new C.u(1,0.9411764705882353,0.5411764705882353,0.1411764705882353,D.q)
B.EZ=new C.u(1,0.9921568627450981,0.9882352941176471,0.9686274509803922,D.q)
B.Xq=new C.u(1,0.5568627450980392,0.5843137254901961,0.6196078431372549,D.q)
B.bdX=new C.u(1,0.47843137254901963,0.35294117647058826,0.22745098039215686,D.q)
B.jH=new C.u(1,0.788235294117647,0.807843137254902,0.8392156862745098,D.q)
B.aeO=new C.u(1,0.4196078431372549,0.45098039215686275,0.5019607843137255,D.q)
B.aeP=new C.u(1,0.5568627450980392,0.35294117647058826,0.2901960784313726,D.q)
B.B3=new C.u(1,0.9294117647058824,0.9176470588235294,0.8784313725490196,D.q)
B.beN=new C.u(1,0.9137254901960784,0.7254901960784313,0.28627450980392155,D.q)
B.beY=new C.u(1,0.22745098039215686,0.22745098039215686,0.24705882352941178,D.q)
B.bf5=new C.u(1,0.5490196078431373,0.5764705882352941,0.6078431372549019,D.q)
B.F2=new C.u(1,0.22745098039215686,0.24705882352941178,0.2784313725490196,D.q)
B.Xx=new C.u(1,0.8980392156862745,0.8980392156862745,0.8666666666666667,D.q)
B.LO=new C.u(1,0.10588235294117647,0.11372549019607843,0.13333333333333333,D.q)
B.bfj=new C.u(1,0.22745098039215686,0.23529411764705882,0.25882352941176473,D.q)
B.XB=new C.u(1,0.30980392156862746,0.6588235294117647,0.3764705882352941,D.q)
B.af2=new C.u(1,0.8509803921568627,0.803921568627451,0.7215686274509804,D.q)
B.af3=new C.u(1,0.4196078431372549,0.2901960784313726,0.16862745098039217,D.q)
B.LQ=new C.u(1,0.11764705882352941,0.11764705882352941,0.12549019607843137,D.q)
B.bfw=new C.u(1,0.8862745098039215,0.8745098039215686,0.8235294117647058,D.q)
B.af6=new C.u(1,0.9490196078431372,0.7803921568627451,0.611764705882353,D.q)
B.bfA=new C.u(1,0.42745098039215684,0.2901960784313726,1,D.q)
B.bfF=new C.u(1,0.3686274509803922,0.27450980392156865,0.18823529411764706,D.q)
B.bfI=new C.u(1,0.9058823529411765,0.8470588235294118,0.7450980392156863,D.q)
B.bfS=new C.u(1,0.5411764705882353,0.4823529411764706,0.41568627450980394,D.q)
B.bfW=new C.u(1,0.24705882352941178,0.16470588235294117,0.10980392156862745,D.q)
B.bfY=new C.u(1,0.34901960784313724,0.3176470588235294,0.29411764705882354,D.q)
B.bg_=new C.u(1,0.24705882352941178,0.6470588235294118,0.3568627450980392,D.q)
B.bg7=new C.u(1,0.8117647058823529,0.792156862745098,0.7411764705882353,D.q)
B.XG=new C.u(1,0.8117647058823529,0.8901960784313725,0.9176470588235294,D.q)
B.bgc=new C.u(1,0.7215686274509804,0.7450980392156863,0.7843137254901961,D.q)
B.LS=new C.u(1,0.3333333333333333,0.396078431372549,0.4823529411764706,D.q)
B.XH=new C.u(1,0.5529411764705883,0.7843137254901961,1,D.q)
B.XK=new C.u(1,1,0.9019607843137255,0.5019607843137255,D.q)
B.bgC=new C.u(1,0.5411764705882353,0.1843137254901961,0.22745098039215686,D.q)
B.bgG=new C.u(1,0.9490196078431372,0.7607843137254902,0.10588235294117647,D.q)
B.afq=new C.u(1,0.9490196078431372,0.9411764705882353,0.9019607843137255,D.q)
B.bgZ=new C.u(1,0.8509803921568627,0.7725490196078432,0.6392156862745098,D.q)
B.bh2=new C.u(1,0.9686274509803922,0.9607843137254902,0.9333333333333333,D.q)
B.afu=new C.u(1,0.6823529411764706,0.6941176470588235,0.7372549019607844,D.q)
B.o_=new C.u(1,0.1843137254901961,0.49019607843137253,0.8823529411764706,D.q)
B.bhd=new C.u(1,0.788235294117647,0.7176470588235294,0.6078431372549019,D.q)
B.XN=new C.u(1,0.8901960784313725,0.6627450980392157,0.10980392156862745,D.q)
B.Fc=new C.u(1,0.7137254901960784,0.7372549019607844,0.7686274509803922,D.q)
B.bhi=new C.u(1,0.8431372549019608,0.8509803921568627,0.8784313725490196,D.q)
B.afz=new C.u(1,0.7215686274509804,0.7529411764705882,0.8,D.q)
B.bht=new C.u(1,0.22745098039215686,0.49019607843137253,0.26666666666666666,D.q)
B.vC=new C.u(1,0.9019607843137255,0.8823529411764706,0.8352941176470589,D.q)
B.XR=new C.u(1,0.3686274509803922,0.17647058823529413,0.13725490196078433,D.q)
B.bhH=new C.u(1,0.0196078431372549,0.027450980392156862,0.050980392156862744,D.q)
B.afI=new C.u(1,0.6039215686274509,0.6274509803921569,0.6588235294117647,D.q)
B.Fe=new C.u(1,0.09019607843137255,0.09411764705882353,0.10588235294117647,D.q)
B.B8=new C.u(1,0.9725490196078431,0.9725490196078431,0.9568627450980393,D.q)
B.bhV=new C.u(1,0.2901960784313726,0.12156862745098039,0.15294117647058825,D.q)
B.afN=new C.u(1,0.9450980392156862,0.9568627450980393,0.9725490196078431,D.q)
B.afP=new C.u(1,0.9019607843137255,0.9019607843137255,0.8784313725490196,D.q)
B.bik=new C.u(1,0.29411764705882354,0.21176470588235294,0.12941176470588237,D.q)
B.XV=new C.u(1,0.8941176470588236,0.9058823529411765,0.9176470588235294,D.q)
B.jq=new C.u(1,0.7686274509803922,0.6039215686274509,0.3843137254901961,D.q)
B.biQ=new C.u(1,0.08235294117647059,0.06274509803921569,0.047058823529411764,D.q)
B.ag3=new C.u(1,1,0.35294117647058826,0.12156862745098039,D.q)
B.ag4=new C.u(1,0.5411764705882353,0.5607843137254902,0.596078431372549,D.q)
B.M1=new C.u(1,0.16470588235294117,0.10196078431372549,0.06274509803921569,D.q)
B.ag6=new C.u(1,0.5411764705882353,0.29411764705882354,0.29411764705882354,D.q)
B.M2=new C.u(1,0.9098039215686274,0.8509803921568627,0.7372549019607844,D.q)
B.bj4=new C.u(1,0.48627450980392156,0.3215686274509804,0.18823529411764706,D.q)
B.o3=new C.u(1,1,0.9450980392156862,0.6588235294117647,D.q)
B.bju=new C.u(1,0.5411764705882353,0.5411764705882353,0.5176470588235295,D.q)
B.bjw=new C.u(1,0.9647058823529412,0.9568627450980393,0.9254901960784314,D.q)
B.M5=new C.u(1,0.47843137254901963,0.23137254901960785,0.1803921568627451,D.q)
B.bjG=new C.u(1,0.3333333333333333,0.6274509803921569,0.3333333333333333,D.q)
B.agg=new C.u(1,0.7058823529411765,0.3254901960784314,0.3254901960784314,D.q)
B.bjO=new C.u(1,0.6078431372549019,0.6078431372549019,0.592156862745098,D.q)
B.Bc=new C.u(1,0.9568627450980393,0.9450980392156862,0.9176470588235294,D.q)
B.bjU=new C.u(1,0.6078431372549019,0.23137254901960785,0.2901960784313726,D.q)
B.tG=new C.u(1,0.8862745098039215,0.23137254901960785,0.23137254901960785,D.q)
B.pS=new C.u(1,0.9490196078431372,0.9490196078431372,0.9254901960784314,D.q)
B.bjZ=new C.u(1,0.30980392156862746,0.615686274509804,0.3568627450980392,D.q)
B.agl=new C.u(1,0.788235294117647,0.8117647058823529,0.8392156862745098,D.q)
B.bk3=new C.u(1,0.9294117647058824,0.9215686274509803,0.8941176470588236,D.q)
B.Y8=new C.u(1,0.8392156862745098,0.6823529411764706,0.4470588235294118,D.q)
B.ago=new C.u(1,0.9098039215686274,0.9098039215686274,0.9098039215686274,D.q)
B.M7=new C.u(1,0.2901960784313726,0.2980392156862745,0.32941176470588235,D.q)
B.Ya=new C.u(1,0.3686274509803922,0.43137254901960786,0.5176470588235295,D.q)
B.bkN=new C.u(1,0.20784313725490197,0.47843137254901963,0.26666666666666666,D.q)
B.bkQ=new C.u(1,0.3568627450980392,0.10196078431372549,0.09019607843137255,D.q)
B.agy=new C.u(1,0.23137254901960785,0.1843137254901961,0.14901960784313725,D.q)
B.agz=new C.u(1,0.8509803921568627,0.788235294117647,0.6588235294117647,D.q)
B.kA=new C.u(1,0.9686274509803922,0.9568627450980393,0.9254901960784314,D.q)
B.agC=new C.u(1,0.13333333333333333,0.1450980392156863,0.16862745098039217,D.q)
B.Ye=new C.u(1,0.4980392156862745,0.7215686274509804,1,D.q)
B.xN=new C.u(1,0.16470588235294117,0.1450980392156863,0.13725490196078433,D.q)
B.bl9=new C.u(1,0.5411764705882353,0.23137254901960785,0.23137254901960785,D.q)
B.bla=new C.u(1,0.9450980392156862,0.9294117647058824,0.8784313725490196,D.q)
B.Ma=new C.u(1,0.796078431372549,0.8156862745098039,0.8392156862745098,D.q)
B.Yh=new C.u(1,0.8980392156862745,0.7254901960784313,0.11764705882352941,D.q)
B.blz=new C.u(1,0.7490196078431373,0.8901960784313725,1,D.q)
B.agQ=new C.u(1,0.6039215686274509,0.4196078431372549,0.24705882352941178,D.q)
B.Yl=new C.u(1,0.10588235294117647,0.10588235294117647,0.11372549019607843,D.q)
B.blV=new C.u(1,0.9529411764705882,0.9058823529411765,0.6313725490196078,D.q)
B.agX=new C.u(1,0.9490196078431372,0.9490196078431372,0.9333333333333333,D.q)
B.bmj=new C.u(1,0.6274509803921569,0.6509803921568628,0.6823529411764706,D.q)
B.bmw=new C.u(0,0.2196078431372549,0.7411764705882353,0.9725490196078431,D.q)
B.bmE=new C.u(1,0.8156862745098039,0.35294117647058826,0.22745098039215686,D.q)
B.bmK=new C.u(1,0.8509803921568627,0.788235294117647,0.6274509803921569,D.q)
B.Yr=new C.u(1,0.9490196078431372,0.9176470588235294,0.8274509803921568,D.q)
B.ahg=new C.u(1,0.10588235294117647,0.07058823529411765,0.03529411764705882,D.q)
B.bn5=new C.u(1,0.3607843137254902,0.7019607843137254,0.9098039215686274,D.q)
B.Mh=new C.u(1,0.24705882352941178,0.26666666666666666,0.3137254901960784,D.q)
B.bnf=new C.u(1,0.12549019607843137,0.13333333333333333,0.14901960784313725,D.q)
B.Ml=new C.u(1,0.8862745098039215,0.27058823529411763,0.35294117647058826,D.q)
B.bnv=new C.u(1,0.12156862745098039,0.43529411764705883,0.2627450980392157,D.q)
B.xS=new C.u(1,0.17254901960784313,0.4196078431372549,0.8392156862745098,D.q)
B.vI=new C.u(1,0.7607843137254902,0.4627450980392157,0.22745098039215686,D.q)
B.Mo=new C.u(1,0.7254901960784313,0.7450980392156863,0.7764705882352941,D.q)
B.ahp=new C.u(1,0.611764705882353,0.35294117647058826,0.27058823529411763,D.q)
B.bnY=new C.u(1,0.611764705882353,0.5882352941176471,0.5450980392156862,D.q)
B.Ms=new C.u(1,0.9686274509803922,0.9490196078431372,0.9019607843137255,D.q)
B.boq=new C.u(1,0.2,0.21176470588235294,0.23137254901960785,D.q)
B.bov=new C.u(1,0.7098039215686275,0.7333333333333333,0.7647058823529411,D.q)
B.bow=new C.u(1,0.9294117647058824,0.9294117647058824,0.9098039215686274,D.q)
B.boC=new C.u(1,0.9098039215686274,0.8941176470588236,0.8549019607843137,D.q)
B.boH=new C.u(1,0.23137254901960785,0.23137254901960785,0.25098039215686274,D.q)
B.ahI=new C.u(1,0.7686274509803922,0.5411764705882353,0.11764705882352941,D.q)
B.boN=new C.u(1,0.43529411764705883,0.7137254901960784,1,D.q)
B.boX=new C.u(1,0.9450980392156862,0.9019607843137255,0.8156862745098039,D.q)
B.boZ=new C.u(1,0.9137254901960784,0.8980392156862745,0.8549019607843137,D.q)
B.ahQ=new C.u(1,0.18823529411764706,0.2,0.22745098039215686,D.q)
B.Mu=new C.u(1,0.9372549019607843,0.9372549019607843,0.9176470588235294,D.q)
B.ahS=new C.u(0.6666666666666666,1,0.16470588235294117,0.10196078431372549,D.q)
B.bpf=new C.u(1,0.9372549019607843,0.9137254901960784,0.8627450980392157,D.q)
B.bpi=new C.u(1,0.9294117647058824,0.9019607843137255,0.8156862745098039,D.q)
B.YJ=new C.u(1,0.4196078431372549,0.24705882352941178,0.19215686274509805,D.q)
B.bpn=new C.u(1,0.12156862745098039,0.6392156862745098,0.2627450980392157,D.q)
B.bpp=new C.u(1,0.803921568627451,0.6274509803921569,0.2,D.q)
B.YM=new C.u(1,0.3607843137254902,0.7019607843137254,1,D.q)
B.bq5=new C.u(1,0.48627450980392156,0.2901960784313726,0.17647058823529413,D.q)
B.YN=new C.u(1,0.9568627450980393,0.9568627450980393,0.9411764705882353,D.q)
B.bq7=new C.u(1,0.8431372549019608,0.8,0.6588235294117647,D.q)
B.bqM=new C.u(1,0.9019607843137255,0.8745098039215686,0.796078431372549,D.q)
B.bqP=new C.u(1,0.30980392156862746,0.6588235294117647,1,D.q)
B.bqV=new C.u(1,1,0.6196078431372549,0.6196078431372549,D.q)
B.aig=new C.u(1,0.8431372549019608,0.16470588235294117,0.16470588235294117,D.q)
B.MD=new C.u(1,0.47843137254901963,0.30980392156862746,0.1568627450980392,D.q)
B.br8=new C.u(1,0.9294117647058824,0.9372549019607843,0.9529411764705882,D.q)
B.Br=new C.u(1,0.6901960784313725,0.5411764705882353,0.3568627450980392,D.q)
B.hV=new C.u(1,0.6078431372549019,0.8274509803921568,0.9607843137254902,D.q)
B.brs=new C.u(1,0.48627450980392156,0.2901960784313726,0.22745098039215686,D.q)
B.YY=new C.u(1,0.7490196078431373,0.8901960784313725,0.9686274509803922,D.q)
B.YZ=new C.u(1,0.23137254901960785,0.6078431372549019,1,D.q)
B.aio=new C.u(1,0.8509803921568627,0.8235294117647058,0.7607843137254902,D.q)
B.q2=new C.u(1,0.4196078431372549,0.2901960784313726,0.19607843137254902,D.q)
B.brG=new C.u(1,0.8509803921568627,0.7450980392156863,0.5725490196078431,D.q)
B.Z0=new C.u(1,0.13333333333333333,0.14901960784313725,0.17254901960784313,D.q)
B.brJ=new C.u(1,0.8117647058823529,0.788235294117647,0.7215686274509804,D.q)
B.brN=new C.u(1,0.7176470588235294,0.4745098039215686,0.12156862745098039,D.q)
B.brT=new C.u(1,0.9294117647058824,0.9294117647058824,0.9176470588235294,D.q)
B.brU=new C.u(1,0.7529411764705882,0.5411764705882353,0.35294117647058826,D.q)
B.brW=new C.u(1,0.5450980392156862,0.4196078431372549,0.24705882352941178,D.q)
B.bt_=new A.tg("none","Nothing happens: the device gets no power.",!1,!1,!1)
B.bt0=new A.tg("none","It cannot be judged: the wire functions were not verified.",!1,!1,!1)
B.bt1=new A.tg("smoke","The loose connection overheats: it glows, smokes and chars the device. In a real wall this can start a fire.",!1,!1,!0)
B.bt2=new A.tg("none","It does not work as it should: some part runs wrongly or not at all. That does not tell you what is wrong, so check against the diagram.",!1,!1,!1)
B.bt3=new A.tg("none","It runs. There is nothing to see, and that is the danger: with no ground, a fault would energize the metal parts.",!0,!1,!1)
B.bt4=new A.tg("none","It works as the diagram says.",!0,!1,!1)
B.bt5=new A.tg("none","It works, and every safety rule is met.",!0,!1,!1)
B.bt6=new A.tg("none","Nothing happens: it is dead. But the hot wire is connected, so it can still be live. No sparks, no smoke: that does not make it safe.",!1,!1,!1)
B.bt7=new A.tg("spark","Bare copper touches something it should not: sparks. The circuit is not safe.",!1,!1,!1)
B.bt8=new A.tg("none","It looks fine for now. But the support cannot carry the weight, and it can fall later.",!1,!1,!1)
B.bt9=new A.tg("fire","BANG. A short circuit: a flash, sparks, smoke and a flame at the device. The breaker trips and the device is ruined. The wires and the device are not safe to use.",!1,!0,!0)
B.bta=new A.tg("arc","Hot and neutral are reversed: the parts that should be dead are live. Blue arcs show the energized metal. The simulator does not let anything run on this: it is unsafe, even if a real appliance might seem to work.",!1,!1,!1)
B.btb=new A.tg("arc","Current flows through the ground wire and the metal parts it joins. Arcs crackle at the box. This is a shock hazard.",!1,!1,!1)
B.btc=new A.tg("spark","The neutral and ground are joined: the protective device trips with a snap of sparks.",!1,!0,!1)
B.bu4=new A.akd("expired","That order took too long and went back on the board.",0)
B.bw0=new C.b9(55e3)
B.bwR=new C.Q(0,2,0,6)
B.bxg=new C.Q(10,10,10,8)
B.bxm=new C.Q(10,16,10,14)
B.bxE=new C.Q(11,7,11,7)
B.ZY=new C.Q(11,9,11,9)
B.byF=new C.Q(14,16,14,10)
B.ajY=new C.Q(14,8,14,24)
B.bAk=new C.Q(1,0,0,0)
B.bAW=new C.Q(22,0,22,44)
B.bBD=new C.Q(26,8,26,8)
B.bCf=new C.Q(4,22,4,12)
B.bCs=new C.Q(4,4,8,4)
B.bCu=new C.Q(4,6,12,4)
B.bDo=new C.Q(9,0,9,0)
B.bDp=new C.Q(9,12,9,12)
B.fSw=new C.y("Practice mode (no explanations, real shocks)",null,D.K8,null,null,null,null,null,null,null,null,null)
B.bDV=new C.bA(1,D.bc,B.fSw,null)
B.fO4=new C.y("Practice mode (no hints, no labels)",null,D.K8,null,null,null,null,null,null,null,null,null)
B.bDX=new C.bA(1,D.bc,B.fO4,null)
B.fuZ=new C.y("\ud83c\udfd8 Community",null,Q.t6,null,null,null,null,null,null,null,null,null)
B.b8J=new C.cg(D.A,null,null,B.fuZ,null)
B.bE3=new C.bA(1,D.bc,B.b8J,null)
B.fzw=new C.y("House tour",null,D.mZ,null,null,null,null,null,null,null,null,null)
B.fG2=new C.y("A film of your whole house, with every TV on.",null,D.a9m,null,null,null,null,null,null,null,null,null)
B.dkV=w([B.fzw,D.bD,B.fG2],x.p)
B.bsY=new C.fi(D.ah,D.e,D.i,D.E,null,D.p,null,0,B.dkV,null)
B.bE8=new C.bA(1,D.bc,B.bsY,null)
B.fFE=new C.y("Construction Lab",null,Q.t6,null,null,null,null,null,null,null,null,null)
B.fun=new C.y("Wire it. Plumb it. Fix a house.",null,D.hm,null,null,null,null,null,null,null,null,null)
B.dbq=w([B.fFE,B.fun],x.p)
B.bsH=new C.fi(D.ah,D.e,D.i,D.E,null,D.p,null,0,B.dbq,null)
B.bEh=new C.bA(1,D.bc,B.bsH,null)
B.fMT=new C.y("Test mode (an inspection: nothing is explained until you submit)",null,D.K8,null,null,null,null,null,null,null,null,null)
B.bEj=new C.bA(1,D.bc,B.fMT,null)
B.aSD=new C.F(!0,D.c,null,null,null,null,14,D.H,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fNW=new C.y("5 portions of food\n10 points",null,B.aSD,null,null,null,null,null,null,null,null,null)
B.bEn=new C.bA(1,D.bc,B.fNW,null)
B.fA3=new C.y("3 doses of medicine\n12 points",null,B.aSD,null,null,null,null,null,null,null,null,null)
B.bED=new C.bA(1,D.bc,B.fA3,null)
B.fLz=new C.y("Drone film",null,D.fv,null,null,null,null,null,null,null,null,null)
B.bEI=new C.bA(1,D.bc,B.fLz,null)
B.fNI=new C.y("Practice mode (no hints, real shocks and fires)",null,D.K8,null,null,null,null,null,null,null,null,null)
B.bF3=new C.bA(1,D.bc,B.fNI,null)
B.fS6=new C.y("Uber licence",null,D.fv,null,null,null,null,null,null,null,null,null)
B.bFa=new C.bA(1,D.bc,B.fS6,null)
B.bG7=new A.a5_(null,null)
B.a0k=new A.rf(0,"tripped")
B.a0l=new A.rf(1,"noHotWater")
B.a0m=new A.rf(10,"wallHole")
B.a0n=new A.rf(11,"clogged")
B.NO=new A.rf(2,"nutLeak")
B.NP=new A.rf(3,"pexLeak")
B.a0o=new A.rf(5,"flicker")
B.a0p=new A.rf(6,"burntOutlet")
B.a0q=new A.rf(7,"gfciTripped")
B.a0r=new A.rf(8,"runningToilet")
B.a0s=new A.rf(9,"dripFaucet")
B.bHT=new A.oj(!1,"back",0,10)
B.bHU=new A.oj(!1,"back",0,9)
B.bHV=new A.oj(!1,"back",50,0)
B.bHW=new A.oj(!1,"back",56,11)
B.bHX=new A.oj(!1,"back",-50,10)
B.bHY=new A.oj(!1,"left",40,9)
B.bHZ=new A.oj(!1,"right",40,10)
B.a0A=new A.oj(!1,"right",50,5)
B.am0=new A.pO("tv100",'Giant 100"',"\ud83d\udcfa",89,!1)
B.bK5=new C.a0(61419,"MaterialIcons",!1)
B.bKh=new C.a0(61888,"MaterialIcons",!1)
B.bL3=new C.a0(62978,"MaterialIcons",!1)
B.bL8=new C.a0(63015,"MaterialIcons",!1)
B.bLv=new C.a0(63165,"MaterialIcons",!1)
B.ann=new C.a0(63228,"MaterialIcons",!1)
B.anL=new C.a0(63547,"MaterialIcons",!0)
B.bMO=new C.a0(983222,"MaterialIcons",!1)
B.bNm=new C.a0(983666,"MaterialIcons",!1)
B.aov=new C.a0(983775,"MaterialIcons",!1)
B.aoB=new C.a0(983894,"MaterialIcons",!1)
B.bQR=new C.ae(D.og,null,null,null,null,null)
B.bSj=new C.ae(D.cz,26,D.aB,null,null,null)
B.bUM=new C.ae(D.mL,null,null,null,null,null)
B.bVD=new C.ae(D.Co,22,D.c,null,null,null)
B.bVI=new C.ae(D.kH,null,F.fz,null,null,null)
B.bXH=new C.ae(D.p6,null,null,null,null,null)
B.bZ7=new C.ae(A4.H0,null,D.bG,null,null,null)
B.fVV=new A.q(0,100,20)
B.c00=new A.hf(B.fVV,"No power in this house",D.by,0)
B.haq=new A.q(-60,40,130)
B.c01=new A.hf(B.haq,"\ud83e\uddef Walk here to check the equipment",D.d1,0)
B.fXB=new A.q(0,62,12)
B.c02=new A.hf(B.fXB,"\ud83d\uded7 Elevator: walk onto the blue mat or tap",D.ju,19502)
B.fXu=new A.q(0,50,80)
B.c03=new A.hf(B.fXu,"\ud83d\udcda Walk here to teach the class",D.d1,0)
B.fY4=new A.q(105,52,100)
B.c04=new A.hf(B.fY4,"\ud83c\udf06 Balcony: step here to see the city",D.ei,0)
B.haE=new A.q(-80,70,40)
B.c05=new A.hf(B.haE,"\ud83d\udc69\u200d\u2695\ufe0f Nurse",D.cO,0)
B.fXy=new A.q(0,52,78)
B.c06=new A.hf(B.fXy,"\ud83e\udeaa Walk here to get your Uber licence",D.ju,0)
B.haF=new A.q(-84,84,120)
B.c07=new A.hf(B.haF,"\ud83c\udf5e Food and drinks",D.d1,0)
B.fXh=new A.q(0,40,176)
B.c08=new A.hf(B.fXh,"\ud83c\udf4e Fresh fruit",D.ek,0)
B.aVc=new A.q(0,26,312)
B.c09=new A.hf(B.aVc,"\u2b07 Walk here to go out",D.ei,0)
B.c0a=new A.hf(B.aVc,"\ud83d\uded7 Take the elevator down to go out",D.ju,0)
B.h2G=new A.q(90,40,56)
B.c0b=new A.hf(B.h2G,"\ud83d\udcd6 Library",D.dI,0)
B.h2e=new A.q(80,40,56)
B.c0c=new A.hf(B.h2e,"\ud83d\udd25 Fire drill",D.by,0)
B.aV7=new A.q(0,100,36)
B.c0d=new A.hf(B.aV7,"\ud83e\udeaa NGMY Licence office",D.M,0)
B.aVO=new A.q(34,56,18)
B.c0e=new A.hf(B.aVO,"\ud83e\uddd1\u200d\ud83d\udcbc Clerk",D.cO,0)
B.h9q=new A.q(-0.4,4.2,-2.4)
B.c0f=new A.hf(B.h9q,"LIVE 120 V",D.by,0)
B.haD=new A.q(-80,52,66)
B.c0g=new A.hf(B.haD,"\ud83c\udfe5 Walk here to admit the sick",D.eW,0)
B.fXv=new A.q(0,50,84)
B.c0h=new A.hf(B.fXv,"\ud83d\udcb0 Counter: walk here to pay or sell",D.ei,0)
B.c0i=new A.hf(B.aVO,"\ud83e\uddd1\u200d\ud83d\udcbc Cashier",D.cO,0)
B.c1g=new C.a9(D.a5,D.a8,D.x,M.ayz,null,null)
B.c2e=new C.a9(D.a5,D.a8,D.x,M.ax_,null,null)
B.boP=new C.u(1,0.2901960784313726,0.20392156862745098,0.0784313725490196,D.q)
B.blB=new C.u(1,0.12156862745098039,0.10196078431372549,0.07058823529411765,D.q)
B.bec=new C.u(1,0.16470588235294117,0.12156862745098039,0.07058823529411765,D.q)
B.dmQ=w([B.boP,B.blB,B.bec],x.O)
B.c2j=new C.a9(D.ay,D.aE,D.x,B.dmQ,null,null)
B.bga=new C.u(1,0.8509803921568627,0.6039215686274509,0.11764705882352941,D.q)
B.d9k=w([F.fz,B.bga],x.O)
B.c2r=new C.a9(D.ay,D.aE,D.x,B.d9k,null,null)
B.bo0=new C.u(1,0.0392156862745098,0.058823529411764705,0.1803921568627451,D.q)
B.bqO=new C.u(1,0.1411764705882353,0.08235294117647059,0.3215686274509804,D.q)
B.cLb=w([E.aft,B.bo0,B.bqO],x.O)
B.c38=new C.a9(D.b4,D.b7,D.x,B.cLb,null,null)
B.d5Q=w([E.jK,E.LL,E.jK],x.O)
B.aqN=new C.a9(D.a5,D.a8,D.x,B.d5Q,null,null)
B.blq=new C.u(1,0.8901960784313725,0.9254901960784314,0.9803921568627451,D.q)
B.d4h=w([D.c,B.blq],x.O)
B.c4o=new C.a9(D.b4,D.b7,D.x,B.d4h,null,null)
B.brK=new C.u(1,0.07058823529411765,0.22745098039215686,0.47843137254901963,D.q)
B.cYD=w([E.jK,B.brK],x.O)
B.c4z=new C.a9(D.ay,D.aE,D.x,B.cYD,null,null)
B.dnx=w([D.cp,D.de],x.O)
B.zb=new C.a9(D.b4,D.b7,D.x,B.dnx,null,null)
B.cik=w([E.jK,E.LL],x.O)
B.c4O=new C.a9(D.a5,D.a8,D.x,B.cik,null,null)
B.edI={ground:0}
B.Js=new C.dD(B.edI,1,x.M)
B.w4=new A.fK(25,"Green screw: GROUND",B.Js,"The bare copper ground goes on the green screw.",!1,"ground")
B.edY={lineA:0}
B.f1W=new C.dD(B.edY,1,x.M)
B.bIQ=new A.fK(23,"LINE screw 1 (top left)",B.f1W,"Hot leg 1 from the panel goes on the top left screw.",!1,"hot")
B.edZ={lineB:0}
B.f1K=new C.dD(B.edZ,1,x.M)
B.bII=new A.fK(21,"LINE screw 2 (top right)",B.f1K,"Hot leg 2 from the panel goes on the top right screw.",!1,"hot")
B.ee0={loadA:0}
B.f1V=new C.dD(B.ee0,1,x.M)
B.bIp=new A.fK(24,"LOAD screw 1 (bottom left)",B.f1V,"Hot leg 1 to the heater goes on the bottom left screw: it is switched through from the top left one.",!1,"hot")
B.ee2={loadB:0}
B.f2t=new C.dD(B.ee2,1,x.M)
B.bIA=new A.fK(22,"LOAD screw 2 (bottom right)",B.f2t,"Hot leg 2 to the heater goes on the bottom right screw.",!1,"hot")
B.c58=w([B.w4,B.bIQ,B.bII,B.bIp,B.bIA],x.r)
B.c5c=w(["flange","wax","toilet","bolts","valve","hosehot","hosecold","faucet","tail","trap","arm"],x.s)
B.a2T=w([0,0,0,0],x.t)
B.c5n=w([0,0,0,1],x.k)
B.cep=w([139,161],x.n)
B.cew=w([145,158],x.n)
B.cic=w([U.qD,A3.Tv,R.ll,Y.aOz],x.f)
B.cio=w([1,1,1],x.k)
B.cip=w([1,1,1,1],x.k)
B.h7k=new A.q(-57.8,-32,0)
B.b6f=new A.z3(0,"Outlet spot 1",!1,B.h7k,"low")
B.h85=new A.q(-9.8,-32,0)
B.b6c=new A.z3(1,"Outlet spot 2",!1,B.h85,"low")
B.h8C=new A.q(38.2,-32,0)
B.b6i=new A.z3(2,"Outlet spot 3",!1,B.h8C,"low")
B.h6W=new A.q(-25.8,0,0)
B.b6g=new A.z3(3,"Switch spot 1",!1,B.h6W,"switch")
B.h8_=new A.q(22.2,0,0)
B.b6e=new A.z3(4,"Switch spot 2",!1,B.h8_,"switch")
B.ha5=new A.q(-30,48,40)
B.b6h=new A.z3(5,"Ceiling light spot",!0,B.ha5,"light")
B.h_B=new A.q(30,48,40)
B.b6d=new A.z3(6,"Ceiling fan spot",!0,B.h_B,"fan")
B.uy=w([B.b6f,B.b6c,B.b6i,B.b6g,B.b6e,B.b6h,B.b6d],C.av("O<z3>"))
B.ewq=new C.z(4,6)
B.ewX=new C.z(5,7)
B.exl=new C.z(6,8)
B.ciQ=w([R.ll,Af.v0,E.Ts,E.Tt,B.ewq,B.ewX,B.exl],C.av("O<+(H,H)>"))
B.ciT=w([2],x.t)
B.cpD=w(["The living room has no power: find the tripped breaker in the panel and reset it.","The kitchen sink drips: pick the wrench and tighten the slip nut under the sink. (Build the house up to Fixtures to see the problems.)"],x.s)
B.h8l=new A.q(11,4.6,-6)
B.h31=new A.q(11,5.4,-7.85)
B.h7D=new A.q(3.4,5.4,-7.85)
B.aWg=new A.q(3.4,3.4,-7.85)
B.cpF=w([B.h8l,B.h31,B.h7D,B.aWg],x.o)
B.cqn=w([3],x.t)
B.cqx=w([300,800,1300,1800],x.n)
B.csx=w([32,80],x.n)
B.hiN=new A.hn(0,0.7,2.2,2,0,0,0)
B.hiC=new A.hn(3,0.1,0.95,-0.42,-0.3,-0.2,0.05)
B.hiW=new A.hn(6.5,0,0.9,-0.38,0.3,0.2,0.05)
B.hj4=new A.hn(9.5,-0.9,1.15,0.1,0,0,0)
B.hj1=new A.hn(12.5,-1.7,1.45,1.6,0,0,0)
B.hiB=new A.hn(15.5,-2.8,1,-0.35,0,0,0)
B.hiV=new A.hn(18.5,-3.6,0.9,0.05,0,0,0)
B.hiZ=new A.hn(21.5,-4.6,1.5,1.5,0,0,0)
B.hiO=new A.hn(24.5,-5.4,0.9,-0.4,0,0,0)
B.hj6=new A.hn(27.5,-6.28,0.75,0.05,0,0,0)
B.hiP=new A.hn(30,-6,2.4,1.7,0,0,0)
B.d2I=w([B.hiN,B.hiC,B.hiW,B.hj4,B.hj1,B.hiB,B.hiV,B.hiZ,B.hiO,B.hj6,B.hiP],x.x)
B.hiF=new A.hn(0,-3.14,1.2,-0.3,0,0,0)
B.hiy=new A.hn(4,-2.2,1.1,0,0,0,0)
B.hj5=new A.hn(8,-1.2,1,0.4,0,0,0)
B.hiD=new A.hn(12,-0.4,1,0.9,0,0,0)
B.hiG=new A.hn(15,0.1,0.85,1.7,0,0,0)
B.hix=new A.hn(18,0.3,0.8,0,0,0,0)
B.hiE=new A.hn(21,0,0.9,-0.2,0.35,0.25,0)
B.hiK=new A.hn(24,0.6,1.4,0.1,-0.2,0,0)
B.hiL=new A.hn(27,1.4,1.2,0.8,0,0,0)
B.hiJ=new A.hn(30,2.4,2.3,1.5,0,0,0)
B.d9Z=w([B.hiF,B.hiy,B.hj5,B.hiD,B.hiG,B.hix,B.hiE,B.hiK,B.hiL,B.hiJ],x.x)
B.hiH=new A.hn(0,0.3,2.6,0.5,0,0,0)
B.hj0=new A.hn(3,0.1,1,0,0,0,0)
B.hj3=new A.hn(6,0,0.95,0.05,0.2,0.15,0)
B.hiS=new A.hn(9,-0.8,1.6,0.3,0,0,0)
B.hiX=new A.hn(12,-1.57,1,-0.2,0,0,0)
B.hiQ=new A.hn(15,-2.4,1.5,0.9,0,0,0)
B.hiU=new A.hn(18,-3.14,1,0.1,0,0,0)
B.hiM=new A.hn(21,-3.9,1.5,0.6,0,0,0)
B.hj7=new A.hn(24,-4.71,1,-0.3,0,0,0)
B.hiz=new A.hn(27,-5.5,1.3,0.5,0,0,0)
B.hiw=new A.hn(30,-6.28,2.6,0.9,0,0,0)
B.cGe=w([B.hiH,B.hj0,B.hj3,B.hiS,B.hiX,B.hiQ,B.hiU,B.hiM,B.hj7,B.hiz,B.hiw],x.x)
B.hj_=new A.hn(0,0,0.5,3.5,0,0,0)
B.hiA=new A.hn(4,0.2,1,-0.3,0,0,0)
B.hj2=new A.hn(8,1,1,0,0,0,0)
B.hiu=new A.hn(12,1.57,1.2,0.3,0,0,0)
B.hiY=new A.hn(16,3.14,1.4,1.2,0,0,0)
B.hiv=new A.hn(20,3.5,0.9,-0.35,0,0,0)
B.hiI=new A.hn(24,4.7,1.1,0,0,0,0)
B.hiR=new A.hn(28,6,1,0.3,0,0,0)
B.hiT=new A.hn(30,6.3,2.2,1.4,0,0,0)
B.d2m=w([B.hj_,B.hiA,B.hj2,B.hiu,B.hiY,B.hiv,B.hiI,B.hiR,B.hiT],x.x)
B.cuS=w([B.d2I,B.d9Z,B.cGe,B.d2m],C.av("O<ai<hn>>"))
B.cuT=w([380,820,1420,1660],x.n)
B.ee9={neutral:0}
B.Jt=new C.dD(B.ee9,1,x.M)
B.bIH=new A.fK(23,"Silver screw (top): NEUTRAL",B.Jt,y.G,!1,"neutral")
B.bIg=new A.fK(24,"Silver screw (bottom): NEUTRAL",B.Jt,y.G,!1,"neutral")
B.eep={switched:0}
B.f2y=new C.dD(B.eep,1,x.M)
B.bIe=new A.fK(21,"Brass screw (top): SWITCHED hot",B.f2y,"The top half is the switched one: the red wire that comes back from the wall switch goes here.",!1,"hot")
B.edn={always:0}
B.f1H=new C.dD(B.edn,1,x.M)
B.bID=new A.fK(22,"Brass screw (bottom): ALWAYS hot",B.f1H,"The bottom half is always on: the black wire straight from the panel goes here.",!1,"hot")
B.cw5=w([B.w4,B.bIH,B.bIg,B.bIe,B.bID],x.r)
B.eMK=new C.z(-820,640)
B.exZ=new C.z(820,640)
B.cwa=w([B.eMK,B.exZ],x.f)
B.hpV=new A.px(0,-80,66,24)
B.hpW=new A.px(1,20,48,20)
B.hq3=new A.px(2,20,98,20)
B.hq4=new A.px(3,20,148,20)
B.cwA=w([B.hpV,B.hpW,B.hq3,B.hq4],x.X)
B.CZ=w([],x.m)
B.b0h=new A.r6("highway","\ud83d\udee3\ufe0f","Highway board","Huge and wide, on two thick poles, with a walkway under it",420,170,150,B.CZ,0,1)
B.b0e=new A.r6("tower","\ud83d\uddfc","Tall tower sign","A big sign high up on one very thick pole",400,210,270,B.CZ,0,1)
B.b0k=new A.r6("neon","\ud83c\udf03","Neon board","A big black board with a glowing neon edge",380,190,120,B.CZ,0,1)
B.b0j=new A.r6("roof","\ud83c\udfe0","Rooftop board","A tall house with two big TVs, the NGMY carpet on its back, and a huge board on its roof",460,180,308,B.CZ,800,1)
B.b0d=new A.r6("screen","\ud83d\udcfa","Big screen","A giant TV screen on a stand",440,250,60,B.CZ,0,1)
B.b0l=new A.r6("gate","\ud83d\udeaa","Town gate","A huge arch with the board across it",600,200,200,B.CZ,0,1)
B.b0_=new A.lD(-420,140,0.35,0,1)
B.b_Y=new A.lD(460,-420,-0.3,160,1.35)
B.d0A=w([B.b0_,B.b_Y],x.m)
B.b0c=new A.r6("duo","\ud83e\udea7","Two far apart","Two separate boards: a near one and a taller one far behind it",320,160,140,B.d0A,0,0.7)
B.b_T=new A.lD(-460,0,0,0,1)
B.b00=new A.lD(460,0,0,0,1)
B.dm0=w([B.b_T,B.ac8,B.b00],x.m)
B.b0n=new A.r6("line3","\u2194\ufe0f","Three in a row","Three separate boards standing in one straight line",300,150,150,B.dm0,0,0.6)
B.b_R=new A.lD(-950,250,0.5,0,1)
B.b_Q=new A.lD(150,-700,-0.2,220,1.55)
B.b_U=new A.lD(1000,60,-0.55,0,0.9)
B.cRA=w([B.b_R,B.b_Q,B.b_U],x.m)
B.b0f=new A.r6("far3","\ud83d\udef0\ufe0f","Three scattered far","Three separate boards far from each other, one of them tall and far behind",320,160,140,B.cRA,0,0.6)
B.b05=new A.lD(-360,300,0.15,0,1)
B.b_V=new A.lD(360,300,-0.15,0,1)
B.b02=new A.lD(0,-120,0,100,1.25)
B.b_X=new A.lD(-160,-640,0.1,260,1.6)
B.c5Q=w([B.b05,B.b_V,B.b02,B.b_X],x.m)
B.b0i=new A.r6("skyline","\ud83c\udf06","Skyline","Four separate boards, the taller ones standing behind the shorter ones",300,150,130,B.c5Q,0,0.6)
B.b_P=new A.lD(-440,160,0,0,1)
B.b03=new A.lD(0,160,0,0,1)
B.b_O=new A.lD(440,160,0,0,1)
B.b04=new A.lD(-440,-420,3.141592653589793,130,1.2)
B.b_S=new A.lD(0,-420,3.141592653589793,130,1.2)
B.b01=new A.lD(440,-420,3.141592653589793,130,1.2)
B.dnG=w([B.b_P,B.b03,B.b_O,B.b04,B.b_S,B.b01],x.m)
B.b0g=new A.r6("lines6","\ud83d\udee4\ufe0f","Two lines of three","Six separate boards: a straight line of three facing front, and a taller line of three behind it facing back",280,140,140,B.dnG,0,0.6)
B.b_Z=new A.lD(0,300,0,0,1)
B.b_M=new A.lD(0,-300,3.141592653589793,0,1)
B.b_W=new A.lD(-560,0,-1.5707963267948966,0,1)
B.b_N=new A.lD(560,0,1.5707963267948966,0,1)
B.dsK=w([B.b_Z,B.b_M,B.b_W,B.b_N],x.m)
B.b0m=new A.r6("scatter","\ud83c\udf10","Billboard park","Four separate boards: one at the front, one at the back and one on each side, all facing out",320,160,150,B.dsK,0,0.6)
B.a3l=w([B.b0h,B.b0e,B.b0k,B.b0j,B.b0d,B.b0l,B.b0c,B.b0n,B.b0f,B.b0i,B.b0g,B.b0m],C.av("O<r6>"))
B.dzI=new A.i8(-134,-36,16,44)
B.dzv=new A.i8(34,118,30,66)
B.dzw=new A.i8(34,118,80,116)
B.dzu=new A.i8(34,118,130,166)
B.dzJ=new A.i8(-134,-76,140,160)
B.cwE=w([B.dzI,B.dzv,B.dzw,B.dzu,B.dzJ],x.T)
B.cwH=w([y.O,y.x,y.R,"Fasten the single black feed from the panel to the FEED screw (it powers both switches through a joined tab).","Fasten the black wire to the first light to the screw of switch 1.","Fasten the black wire to the second light to the screw of switch 2.",y.b,y.n],x.s)
B.eMu=new C.z(-600,1250)
B.eMs=new C.z(-520,1260)
B.eMq=new C.z(-460,1250)
B.ewI=new C.z(520,1280)
B.ex5=new C.z(600,1270)
B.eMe=new C.z(-300,1300)
B.cBz=w([B.eMu,B.eMs,B.eMq,B.ewI,B.ex5,B.eMe],x.f)
B.cC0=w([460,900,1500,1740],x.n)
B.bhh=new C.u(1,0.5411764705882353,0.35294117647058826,0.23529411764705882,D.q)
B.afb=new C.u(1,0.10588235294117647,0.07058823529411765,0.06274509803921569,D.q)
B.brD=new C.u(1,0.8509803921568627,0.27450980392156865,0.49411764705882355,D.q)
B.ae_=new C.u(1,0.23137254901960785,0.24705882352941178,0.3607843137254902,D.q)
B.ep3=new A.tH(B.bhh,B.afb,B.brD,B.ae_,"xbot",!1,0,1)
B.f_g=new A.Fl(0,"Ama",0,2,B.ep3,"A nurse who works nights.")
B.bjo=new C.u(1,0.4196078431372549,0.27058823529411763,0.18823529411764706,D.q)
B.bgq=new C.u(1,0.08627450980392157,0.06274509803921569,0.06274509803921569,D.q)
B.bp0=new C.u(1,0.1803921568627451,0.5607843137254902,0.3568627450980392,D.q)
B.ep7=new A.tH(B.bjo,B.bgq,B.bp0,B.Lu,"soldier",!1,0,1)
B.f_e=new A.Fl(1,"Joseph",1,2,B.ep7,"A student who is always hungry.")
B.bn0=new C.u(1,0.6274509803921569,0.4196078431372549,0.2784313725490196,D.q)
B.bhA=new C.u(1,0.2901960784313726,0.24705882352941178,0.4196078431372549,D.q)
B.ep8=new A.tH(B.bn0,B.M1,D.aC,B.bhA,"xbot",!1,0,1)
B.f_i=new A.Fl(2,"Grace",3,4,B.ep8,"A teacher who marks papers late.")
B.aed=new C.u(1,0.8784313725490196,0.6431372549019608,0.48627450980392156,D.q)
B.aid=new C.u(1,0.1843137254901961,0.43529411764705883,0.7098039215686275,D.q)
B.ep5=new A.tH(B.aed,D.age,B.aid,B.Lu,"soldier",!1,0,1)
B.f_f=new A.Fl(3,"Daniel",6,8,B.ep5,"A driver who sleeps in the day.")
B.bpE=new C.u(1,0.788235294117647,0.5450980392156862,0.3686274509803922,D.q)
B.bhM=new C.u(1,0.16862745098039217,0.17647058823529413,0.22745098039215686,D.q)
B.ep1=new A.tH(B.bpE,B.afb,D.aD,B.bhM,"xbot",!1,0,1)
B.f_k=new A.Fl(4,"Fatima",7,8,B.ep1,"A baker who gets up at four.")
B.ai4=new C.u(1,0.47843137254901963,0.29411764705882354,0.18823529411764706,D.q)
B.bo9=new C.u(1,0.24705882352941178,0.22745098039215686,0.2,D.q)
B.ep4=new A.tH(B.ai4,D.e4,D.d1,B.bo9,"soldier",!1,0,1)
B.f_h=new A.Fl(5,"Papa Moses",10,-1,B.ep4,"The oldest in the house. He watches TV all day.")
B.blP=new C.u(1,0.5490196078431373,0.3568627450980392,0.23137254901960785,D.q)
B.ep6=new A.tH(B.blP,B.ag4,D.aw,B.ae_,"xbot",!1,0,1)
B.f_j=new A.Fl(6,"Mama Rose",9,-1,B.ep6,"Cooks for everybody in the kitchen.")
B.CG=w([B.f_g,B.f_e,B.f_i,B.f_f,B.f_k,B.f_h,B.f_j],C.av("O<Fl>"))
B.cDX=w([50,130],x.n)
B.cDY=w([50,140],x.n)
B.cEK=w([51,52,53],x.t)
B.eCa=new C.z(-9.5,4.6)
B.eED=new C.z(-5.9,2.3)
B.eKH=new C.z(8.8,4.4)
B.cG0=w([B.eCa,B.eED,B.eKH],x.f)
B.cGn=w([5,35],x.n)
B.cGY=w([61,63],x.t)
B.cHa=w([62,64],x.t)
B.cIa=w([68,172],x.n)
B.bgw=new C.u(1,0.6039215686274509,0.30980392156862746,0.30980392156862746,D.q)
B.brM=new C.u(1,0.30980392156862746,0.47843137254901963,0.3686274509803922,D.q)
B.ze=w([B.nS,B.Ya,B.bgw,B.brM,B.agz,D.jc],x.O)
B.bog=new C.u(1,0.23137254901960785,0.07058823529411765,0.07058823529411765,D.q)
B.bhL=new C.u(1,0.23137254901960785,0.1843137254901961,0.0392156862745098,D.q)
B.beM=new C.u(1,0.043137254901960784,0.1803921568627451,0.09019607843137255,D.q)
B.cJ1=w([B.bog,B.bhL,B.beM],x.O)
B.tg=new A.jz("ground","Bare copper \xb7 ground",B.vI,D.c,"ground")
B.tN=new C.u(1,0.14901960784313725,0.14901960784313725,0.16470588235294117,D.q)
B.heL=new A.jz("feed","Black \xb7 hot feed from the panel",B.tN,D.c,"hot")
B.M8=new C.u(1,0.22745098039215686,0.1803921568627451,0.1803921568627451,D.q)
B.heG=new A.jz("loadA","Black \xb7 to light 1",B.M8,D.c,"hot")
B.be0=new C.u(1,0.16862745098039217,0.16862745098039217,0.2,D.q)
B.heI=new A.jz("loadB","Black \xb7 to light 2",B.be0,D.c,"hot")
B.cJz=w([B.tg,B.heL,B.heG,B.heI],x.d)
B.awU=w([72,73,74,75],x.t)
B.eMb=new C.z(-25,-15)
B.eu2=new C.z(25,-15)
B.eMa=new C.z(-25,15)
B.eu1=new C.z(25,15)
B.cNv=w([B.eMb,B.eu2,B.eMa,B.eu1],x.f)
B.h2D=new A.q(-125,292,-114.5)
B.h63=new A.q(125,292,-114.5)
B.h8H=new A.q(125,208,-114.5)
B.h5L=new A.q(-125,208,-114.5)
B.cNM=w([B.h2D,B.h63,B.h8H,B.h5L],x.o)
B.bI0=new A.pO("wall","Whole-wall TV","\ud83c\udfac",0,!0)
B.bI8=new A.pO("tv200",'Cinema 200"',"\ud83c\udfac",175,!1)
B.bI3=new A.pO("tv150",'Cinema 150"',"\ud83c\udfac",130,!1)
B.bI4=new A.pO("bangtv",'Beovision TV 77"',"\ud83d\udcfa",66,!1)
B.bI_=new A.pO("sonytv",'Sony Bravia 75"',"\ud83d\udcfa",64,!1)
B.bI9=new A.pO("lgtv",'LG OLED 65"',"\ud83d\udcfa",56,!1)
B.bI2=new A.pO("tv",'Samsung Neo QLED 55"',"\ud83d\udcfa",48,!1)
B.bI7=new A.pO("appletv",'Apple TV 4K 50"',"\ud83d\udcfa",44,!1)
B.bI6=new A.pO("lamp","Table lamp","\ud83d\udca1",0,!1)
B.bI5=new A.pO("toaster","Toaster","\ud83c\udf5e",0,!1)
B.bI1=new A.pO("hairdryer","Hair dryer","\ud83d\udc87",0,!1)
B.a3E=w([B.bI0,B.bI8,B.bI3,B.am0,B.bI4,B.bI_,B.bI9,B.bI2,B.bI7,B.bI6,B.bI5,B.bI1],C.av("O<pO>"))
B.cNX=w([y.O,y.x,y.R,y.N,y.E,y.k,y.b,y.n],x.s)
B.bgX=new C.u(1,0.7764705882352941,0.5254901960784314,0.25882352941176473,D.q)
B.bhT=new C.u(1,0.43529411764705883,0.2901960784313726,0.1803921568627451,D.q)
B.bpb=new C.u(1,0.6627450980392157,0.44313725490196076,0.29411764705882354,D.q)
B.axb=w([F.mB,B.bgX,E.afa,B.bhT,B.bpb],x.O)
B.cVi=w([y.O,"Two cables come into the box: one from the breaker panel (LINE) and one going to the light (LOAD).","Twist the two white wires together with a wire nut. A switch does not cut the neutral.",y.R,"Fasten the black wire from the panel to one BRASS screw.","Fasten the black wire that goes to the light to the other BRASS screw.","Push the switch into the box, put the plate on and test with the power on."],x.s)
B.esM=new C.z(0,330)
B.eM1=new C.z(-120,1080)
B.etf=new C.z(120,1080)
B.eMc=new C.z(-300,1000)
B.euq=new C.z(300,1000)
B.eME=new C.z(-700,800)
B.exu=new C.z(700,800)
B.cVH=w([B.esM,B.eM1,B.etf,B.eMc,B.euq,B.eME,B.exu],x.f)
B.cVN=w(["Walnut","Blue grey","Brick red","Sage green","Sand","Charcoal"],x.s)
B.jV=w(["switch","switch2p","switch3","switch4","switchsmart","switchcombo"],x.s)
B.h4y=new A.q(-6.5,7.5,-7.85)
B.h4E=new A.q(-6.5,7.8,-3)
B.cW7=w([B.h4y,B.h4E],x.o)
B.hfa=new A.FR("NGMY JOBS","Find work. Get hired. Get paid.",D.aC,D.ij,D.tB)
B.hfi=new A.FR("NGMY LOANS","Help when you need it most.",D.cU,D.e_,D.vH)
B.hfd=new A.FR("KISWAHILI SCHOOL","Learn Swahili and English, step by step.",D.bP,D.ty,D.vL)
B.hff=new A.FR("CIVIC REGISTRY","Your family, your community, registered.",D.d2,D.d7,D.nU)
B.hf9=new A.FR("CORE PROTOCOL","Studios for curious minds.",D.b5,D.jp,D.pQ)
B.hfe=new A.FR("BUILD AND FIX","The Construction Lab: wire it, plumb it.",D.fr,D.hI,D.tL)
B.hf3=new A.FR("CREATE WITH NGMY","Videos, slides, bios and books.",D.bA,D.k9,D.pM)
B.cWb=w([B.hfa,B.hfi,B.hfd,B.hff,B.hf9,B.hfe,B.hf3],C.av("O<FR>"))
B.hpS=new A.px(0,-100,100,24)
B.hpZ=new A.px(1,90,100,24)
B.cWn=w([B.hpS,B.hpZ],x.X)
B.eMO=new C.z(-95,160)
B.eMk=new C.z(-35,175)
B.eyi=new C.z(95,170)
B.cWr=w([B.eMO,B.eMk,B.eyi],x.f)
B.bhr=new C.u(1,0.9176470588235294,0.9490196078431372,0.9686274509803922,D.q)
B.bmY=new C.u(1,0.9647058823529412,0.9098039215686274,0.9098039215686274,D.q)
B.blU=new C.u(1,0.9529411764705882,0.9215686274509803,0.7843137254901961,D.q)
B.axy=w([B.Bc,B.bhr,B.bmY,B.blU],x.O)
B.edw={common:0}
B.f2k=new C.dD(B.edw,1,x.M)
B.bIo=new A.fK(23,"COMMON screw (the odd one)",B.f2k,"The COMMON screw is the one with a different colour. The black wire that brings the power in, or goes to the light, belongs here.",!1,"hot")
B.eer={trav1:0,trav2:1}
B.aQ8=new C.dD(B.eer,2,x.M)
B.bIu=new A.fK(21,"Traveler screw (top)",B.aQ8,y.X,!1,"hot")
B.bIJ=new A.fK(22,"Traveler screw (bottom)",B.aQ8,y.X,!1,"hot")
B.cWD=w([B.w4,B.bIo,B.bIu,B.bIJ],x.r)
B.dzP=new A.i8(-60,60,28,50)
B.dzL=new A.i8(-150,-100,70,170)
B.dzo=new A.i8(100,150,70,170)
B.dzQ=new A.i8(-60,-20,156,186)
B.dzt=new A.i8(20,60,156,186)
B.cWS=w([B.dzP,B.dzL,B.dzo,B.dzQ,B.dzt],x.T)
B.cWU=w([y.O,"The cable comes in through the top of the box. Strip about 3/4 inch of insulation from each wire.","Fasten the bare copper ground wire to the GREEN screw.","Fasten the white (neutral) wire to a SILVER screw.","Fasten the black (hot) wire to a BRASS screw. Wrap each wire clockwise under its screw.","Fold the wires back and push the outlet into the box.","Put the cover plate on, then turn the power on and test."],x.s)
B.hbT=new A.q(-3.6,7.5,-7.85)
B.h3Z=new A.q(-3.6,4.2,-7.85)
B.cX2=w([B.hbT,B.h3Z],x.o)
B.cX4=w([-0.5,-0.25,0,0.25,0.5],x.n)
B.eSx=new C.bk(600,400,!0)
B.eS4=new C.bk(1030,400,!0)
B.eS5=new C.bk(1210,400,!0)
B.cXy=w([B.eSx,B.eS4,B.eS5],C.av("O<+(K,K,R)>"))
B.cXN=w([0,2,1,3,4,6,7,8],x.t)
B.eTa=new C.bk(-0.1,0,0.5)
B.eV1=new C.bk(0.35,-0.4,0.3)
B.eTZ=new C.bk(-0.4,0.55,0.35)
B.cXT=w([B.eTa,B.eV1,B.eTZ],C.av("O<+(K,K,K)>"))
B.eLW=new C.z(-1050,"store")
B.aON=new C.z(-840,"tower")
B.eMw=new C.z(-630,"tower")
B.eMm=new C.z(-420,"gasstation")
B.aOM=new C.z(-210,"tower")
B.esQ=new C.z(0,"hq")
B.aOA=new C.z(210,"tower")
B.euZ=new C.z(420,"store")
B.ex7=new C.z(630,"tower")
B.aOC=new C.z(840,"tower")
B.et5=new C.z(1050,"gasstation")
B.cYt=w([B.eLW,B.aON,B.eMw,B.eMm,B.aOM,B.esQ,B.aOA,B.euZ,B.ex7,B.aOC,B.et5],x.d6)
B.a41=w(["Always switch the breaker OFF and test the wires with a tester before you touch them.","Never use water on an electrical fire: switch the power off at the breaker first.","Reversed hot and neutral can look fine and still be a shock hazard.","A GFCI outlet protects you near water: press TEST every month.","A ceiling fan needs a fan-rated box, because it is heavy and it shakes."],x.s)
B.h8O=new A.q(9.8,6,-7.85)
B.h36=new A.q(9.8,7.5,-7.85)
B.hch=new A.q(-8,7.5,-7.85)
B.h5N=new A.q(-8,1.5,-7.85)
B.cYG=w([B.h8O,B.h36,B.hch,B.h5N],x.o)
B.aWr=new A.q(5,1.8,-7.85)
B.h6K=new A.q(5,-0.1,-7.85)
B.h7O=new A.q(12.5,-0.1,-7.85)
B.cZM=w([B.aWr,B.h6K,B.h7O],x.o)
B.lH=w(["outlet","gfci","split","v240four","v240three","v240only","isolated"],x.s)
B.fVN=new A.q(3,3.1,-7.1)
B.aWi=new A.q(3,1.7,-7.1)
B.h7J=new A.q(3,1,-7.1)
B.h_c=new A.q(3.65,0.5,-7.1)
B.h14=new A.q(4.3,1,-7.1)
B.h6G=new A.q(4.3,1.8,-7.1)
B.hck=new A.q(5,1.8,-7.1)
B.d_f=w([B.fVN,B.aWi,B.h7J,B.h_c,B.h14,B.h6G,B.hck,B.aWr],x.o)
B.am4=new A.fK(23,"Silver screw W: NEUTRAL",B.Jt,y.I,!1,"neutral")
B.edK={hot1:0,hot2:1}
B.TS=new C.dD(B.edK,2,x.M)
B.bIa=new A.fK(21,"Brass screw X: HOT",B.TS,y.l,!1,"hot")
B.bIP=new A.fK(22,"Brass screw Y: HOT",B.TS,y.l,!1,"hot")
B.d_q=w([B.w4,B.am4,B.bIa,B.bIP],x.r)
B.d_M=w(["My outlet is dead and it is dark in here. Please come and wire it.","The light in my room does not work, and my phone will not charge. Can you fix the wiring?","I have no power in my room at all. Can an electrician come?"],x.s)
B.eWK=new C.cw([-0.35,-0.2,0.42,0.3])
B.eWX=new C.cw([0.3,0.25,0.32,0.38])
B.eVN=new C.cw([0.05,-0.55,0.22,0.14])
B.eWf=new C.cw([-0.5,0.45,0.2,0.16])
B.d_Y=w([B.eWK,B.eWX,B.eVN,B.eWf],x.eV)
B.d_Z=w([D.aw,D.be,D.aC,D.d2,D.bO,D.f4],x.O)
B.hbx=new A.q(0.6,11,-3.4)
B.h1Z=new A.q(0.6,3.2,-3.2)
B.hb0=new A.q(0.6,2.2,-1.9)
B.h1B=new A.q(0.6,0.7,-1.5)
B.d0m=w([B.hbx,B.h1Z,B.hb0,B.h1B],x.o)
B.d0y=w([0,24,-24,48,-48],x.n)
B.Kx=new A.jz("neutral","White \xb7 neutral",B.oR,D.av,"neutral")
B.heu=new A.jz("line","Black \xb7 hot from the panel (LINE)",B.tN,D.c,"hot")
B.heM=new A.jz("load","Black \xb7 hot to the light (LOAD)",B.M8,D.c,"hot")
B.d0L=w([B.tg,B.Kx,B.heu,B.heM],x.d)
B.ay3=w([3,3.6,3.3,2.6],x.n)
B.d11=w([y.O,y.x,y.R,"Fasten the white NEUTRAL wire to the NEUTRAL (silver) screw. A regular switch never touches the neutral, this one does.","Fasten the black wire from the panel to the LINE screw.","Fasten the black wire that goes to the light to the LOAD screw.",y.b,y.n],x.s)
B.eMD=new C.z(-700,330)
B.ext=new C.z(700,380)
B.eLY=new C.z(-1100,-420)
B.etb=new C.z(1100,-480)
B.eM3=new C.z(-1300,100)
B.eti=new C.z(1350,30)
B.esR=new C.z(0,-900)
B.eM4=new C.z(-1500,-300)
B.etj=new C.z(1550,-200)
B.d14=w([B.eMD,B.ext,B.eLY,B.etb,B.eM3,B.eti,B.esR,B.eM4,B.etj],x.f)
B.d1a=w([U.qD,A3.Tv,R.ll],x.f)
B.hpU=new A.px(0,-64,120,26)
B.hpX=new A.px(1,64,120,26)
B.hq1=new A.px(2,0,84,24)
B.d1J=w([B.hpU,B.hpX,B.hq1],x.X)
B.h07=new A.q(0,8.3,0)
B.aVT=new A.q(0,3.9,0)
B.a4b=w([B.h07,B.aVT],x.o)
B.d2_=w([y.O,"Make sure the box is rated for a fan. A plain light box cannot carry the weight and the shaking.","Join the house ground wire to the fan ground.","Join the house white wire to the fan white wire with a wire nut.","Join the house black wire to the fan black wire with a wire nut.","Push the wires up into the box and fasten the canopy to the ceiling.",y.f],x.s)
B.eKZ=new C.z(-3.5,11)
B.eAw=new C.z(3.5,11)
B.eyL=new C.z(-3.5,-11)
B.ewk=new C.z(3.5,-11)
B.d2j=w([B.eKZ,B.eAw,B.eyL,B.ewk],x.f)
B.h9c=new A.q(-0.6,11,-3.4)
B.h3d=new A.q(-0.6,3.2,-3.2)
B.h8d=new A.q(-0.6,2.2,-1.9)
B.hcG=new A.q(-0.6,0.7,-1.5)
B.d2k=w([B.h9c,B.h3d,B.h8d,B.hcG],x.o)
B.HP=w(["dog","cat","cow","sheep","chicken","horse"],x.s)
B.eI0=new C.z(-1.2,0)
B.eQS=new C.z(1.2,0)
B.d2Z=w([B.eI0,B.eQS],x.f)
B.d3r=w([40,70,100,130,160],x.n)
B.bIq=new A.fK(23,"NEUTRAL screw (silver)",B.Jt,"The electronics inside need the neutral wire to run. White goes on the silver screw.",!1,"neutral")
B.ee_={line:0}
B.f2s=new C.dD(B.ee_,1,x.M)
B.bIC=new A.fK(21,"LINE screw (brass, hot in)",B.f2s,"The black wire from the breaker panel goes on the LINE screw.",!1,"hot")
B.ee3={load:0}
B.f1B=new C.dD(B.ee3,1,x.M)
B.bIF=new A.fK(22,"LOAD screw (brass, hot out)",B.f1B,"The black wire that goes to the light goes on the LOAD screw.",!1,"hot")
B.d3B=w([B.w4,B.bIq,B.bIC,B.bIF],x.r)
B.ek9=new A.nq("flange","flange","Toilet flange",D.Y,"The flange is fixed to the floor over the drain. Everything else sits on it.",!1,0)
B.dgT=w(["flange"],x.s)
B.ek7=new A.nq("wax","wax","Wax ring",B.dgT,"The wax ring goes on the flange before the toilet. It makes the seal against sewer gas and water.",!1,0)
B.ds_=w(["wax"],x.s)
B.ek4=new A.nq("toilet","toilet","Toilet",B.ds_,"The toilet is lowered straight down onto the wax ring. The ring has to be there first.",!1,0)
B.dqg=w(["toilet"],x.s)
B.ek8=new A.nq("bolts","bolts","Toilet bolts",B.dqg,"The two bolts hold the toilet to the flange. Set the toilet first.",!1,2)
B.ek5=new A.nq("tvalve","valve","Toilet shut-off valve",D.Y,"The shut-off valve goes on the pipe that comes out of the wall.",!0,0)
B.dqn=w(["tvalve","toilet"],x.s)
B.ek6=new A.nq("those","hosecold","Toilet supply hose",B.dqn,"The hose joins the valve to the toilet tank, so both must be there first.",!1,2)
B.aJM=new A.nq("faucet","faucet","Faucet",D.Y,"The faucet goes through the hole in the counter.",!1,0)
B.aJP=new A.nq("vhot","valve","Hot shut-off valve (left)",D.Y,y.W,!0,0)
B.aJN=new A.nq("vcold","valve","Cold shut-off valve (right)",D.Y,y.W,!0,0)
B.drn=w(["vhot","faucet"],x.s)
B.aJQ=new A.nq("hhot","hosehot","Hot supply hose",B.drn,"The hose joins the hot valve to the faucet, so the valve and the faucet must be there first.",!1,2)
B.drk=w(["vcold","faucet"],x.s)
B.aJO=new A.nq("hcold","hosecold","Cold supply hose",B.drk,"The hose joins the cold valve to the faucet, so the valve and the faucet must be there first.",!1,2)
B.aJL=new A.nq("tail","tail","Tailpiece",D.Y,"The tailpiece hangs from the sink drain. It is the first piece of the drain.",!1,0)
B.dq9=w(["tail"],x.s)
B.aJR=new A.nq("trap","trap","P-trap",B.dq9,"The P-trap joins the tailpiece. Build the drain from the top down.",!1,1)
B.dqh=w(["trap"],x.s)
B.aJS=new A.nq("arm","arm","Trap arm",B.dqh,"The trap arm joins the trap and goes into the wall.",!1,1)
B.cZe=w([B.ek9,B.ek7,B.ek4,B.ek8,B.ek5,B.ek6,B.aJM,B.aJP,B.aJN,B.aJQ,B.aJO,B.aJL,B.aJR,B.aJS],x.fI)
B.eq1=new A.Xa("bathroom","Bathroom",B.cZe,"Fit out a bathroom: a toilet and a sink with its faucet, supply hoses and drain.")
B.diQ=w([B.aJM,B.aJP,B.aJN,B.aJQ,B.aJO,B.aJL,B.aJR,B.aJS],x.fI)
B.eq2=new A.Xa("kitchen","Kitchen",B.diQ,"Fit out a kitchen sink: the faucet, the hot and cold supplies and the drain.")
B.ayp=w([B.eq1,B.eq2],C.av("O<Xa>"))
B.eMN=new C.z(-900,400)
B.eye=new C.z(900,400)
B.eML=new C.z(-900,1000)
B.eyc=new C.z(900,1000)
B.eMd=new C.z(-300,1260)
B.eur=new C.z(300,1260)
B.eLU=new C.z(-1000,700)
B.et2=new C.z(1000,700)
B.eMx=new C.z(-640,90)
B.ex8=new C.z(640,90)
B.eMM=new C.z(-900,1400)
B.eyd=new C.z(900,1400)
B.d45=w([B.eMN,B.eye,B.eML,B.eyc,B.eMd,B.eur,B.eLU,B.et2,B.eMx,B.ex8,B.eMM,B.eyd],x.f)
B.fVK=new A.q(8.2,0.9,-6.3)
B.h8p=new A.q(8.2,-0.1,-6.3)
B.fZw=new A.q(8.2,-0.1,-7.85)
B.d4L=w([B.fVK,B.h8p,B.fZw],x.o)
B.ex4=new C.z(-4.5,10)
B.eND=new C.z(4.5,10)
B.eQQ=new C.z(-4.5,-10)
B.eNz=new C.z(4.5,-10)
B.d4X=w([B.ex4,B.eND,B.eQQ,B.eNz],x.f)
B.d4Y=w([-0.28,0.28],x.n)
B.dzS=new A.i8(-70,70,20,44)
B.dzD=new A.i8(-110,-50,80,100)
B.dzy=new A.i8(50,110,80,100)
B.dzC=new A.i8(-110,-50,130,150)
B.dzx=new A.i8(50,110,130,150)
B.d5a=w([B.dzS,B.dzD,B.dzy,B.dzC,B.dzx],x.T)
B.d5r=w([D.aw,D.aC,D.be,D.mu,D.d2,D.cb,D.f4],x.O)
B.eGr=new C.z("back","Back wall")
B.eQB=new C.z("left","Left wall")
B.eID=new C.z("right","Right wall")
B.d5T=w([B.eGr,B.eQB,B.eID],x.L)
B.edq={black:0}
B.Ju=new C.dD(B.edq,1,x.M)
B.bIh=new A.fK(51,"Black wire nut: HOT",B.Ju,"The house black wire joins the fixture black wire.",!1,"hot")
B.eex={white:0}
B.Jr=new C.dD(B.eex,1,x.M)
B.bIM=new A.fK(52,"White wire nut: NEUTRAL",B.Jr,"The house white wire joins the fixture white wire.",!1,"neutral")
B.bIc=new A.fK(53,"Green ground connection",B.Js,"The bare copper house ground joins the green fixture ground wire.",!1,"ground")
B.d63=w([B.bIh,B.bIM,B.bIc],x.r)
B.eMj=new C.z(-34,-6)
B.eut=new C.z(30,10)
B.eLX=new C.z(-10,24)
B.d68=w([B.eMj,B.eut,B.eLX],x.f)
B.d6f=w([y.O,y.x,y.R,"Fasten hot leg 1 from the panel (black) to the top LEFT screw.","Fasten hot leg 2 from the panel (red) to the top RIGHT screw.","Fasten hot leg 1 to the heater (black) to the bottom LEFT screw.","Fasten hot leg 2 to the heater (red) to the bottom RIGHT screw.",y.b,y.n],x.s)
B.bGM=new A.E3("Oak",B.Br,"wood")
B.bGO=new A.E3("Dark wood",B.q2,"wood")
B.ai5=new C.u(1,0.5529411764705883,0.5647058823529412,0.5882352941176471,D.q)
B.bGQ=new A.E3("Grey carpet",B.ai5,"carpet")
B.bpx=new C.u(1,0.3568627450980392,0.4980392156862745,0.6509803921568628,D.q)
B.bGN=new A.E3("Blue carpet",B.bpx,"carpet")
B.bmX=new C.u(1,0.8470588235294118,0.803921568627451,0.7058823529411765,D.q)
B.bGK=new A.E3("Cream carpet",B.bmX,"carpet")
B.bGP=new A.E3("White tile",B.XV,"tile")
B.bGL=new A.E3("Slate tile",B.aeO,"tile")
B.ayL=w([B.bGM,B.bGO,B.bGQ,B.bGN,B.bGK,B.bGP,B.bGL],C.av("O<E3>"))
B.aaN=new A.jz("hot1","Black \xb7 hot 1",B.tN,D.c,"hot")
B.AZ=new C.u(1,0.8196078431372549,0.29411764705882354,0.22745098039215686,D.q)
B.aaO=new A.jz("hot2","Red \xb7 hot 2",B.AZ,D.c,"hot")
B.d7_=w([B.Kx,B.aaN,B.aaO],x.d)
B.eSC=new C.bk(-80,100,D.aw)
B.eUv=new C.bk(80,100,D.be)
B.eTE=new C.bk(-80,150,D.aC)
B.d71=w([B.eSC,B.eUv,B.eTE],x.dV)
B.hpQ=new A.px(0,0,78,26)
B.d79=w([B.hpQ],x.X)
B.eeo={store:0,gasstation:1}
B.f2u=new C.dD(B.eeo,2,x.M)
B.bu7=new A.z8("food","\ud83c\udf54","Food",B.f2u)
B.eel={shop:0,store:1}
B.f23=new C.dD(B.eel,2,x.M)
B.bu6=new A.z8("groceries","\ud83d\uded2","Groceries",B.f23)
B.edJ={hospital:0}
B.f1Z=new C.dD(B.edJ,1,x.M)
B.bu9=new A.z8("medicine","\ud83d\udc8a","Medicine",B.f1Z)
B.edM={hq:0,tower:1}
B.f2q=new C.dD(B.edM,2,x.M)
B.bu5=new A.z8("package","\ud83d\udce6","Package",B.f2q)
B.ecV={school:0,firestation:1,hq:2}
B.f1M=new C.dD(B.ecV,3,x.M)
B.bu8=new A.z8("letters","\u2709\ufe0f","Letters",B.f1M)
B.QX=w([B.bu7,B.bu6,B.bu9,B.bu5,B.bu8],C.av("O<z8>"))
B.d7o=w([y.O,y.x,"Fasten the white neutral to a SILVER screw.","Fasten the black hot to a BRASS screw.","Fasten the green wire with the yellow stripe (the isolated ground, which runs all the way to the panel) to the GREEN screw with the orange triangle. The box itself is grounded with its own bare copper wire.",y.b,y.n],x.s)
B.d7v=w([-1000,-500,0,500,1000],x.n)
B.h8e=new A.q(3,3.2,-7.85)
B.hcI=new A.q(3,4,-7.85)
B.hbU=new A.q(3,4.2,-7.4)
B.fXT=new A.q(3,3.95,-7)
B.d8u=w([B.h8e,B.hcI,B.hbU,B.fXT],x.o)
B.d8w=w(["The sink leaks and there is water on the floor. Please fix the plumbing.","The toilet is not connected and the water is running everywhere. Help!","There is no water at my sink and the pipes are open. Can a plumber come?"],x.s)
B.Xl=new C.u(1,0.23137254901960785,0.3568627450980392,0.47843137254901963,D.q)
B.d8H=w([D.al,B.Xl,D.bM,D.br],x.O)
B.f2Z=new A.rJ("apple","\ud83c\udf4e","Apple","A little energy",3,0.12,0,0.1,!1)
B.f3_=new A.rJ("water","\ud83d\udca7","Water","Quenches your thirst",2,0,0,0.8,!1)
B.f30=new A.rJ("juice","\ud83e\udd64","Juice","Some energy and a drink",4,0.18,0,0.5,!1)
B.f35=new A.rJ("sandwich","\ud83e\udd6a","Sandwich","A good bit of energy",6,0.3,0,0,!1)
B.f2Y=new A.rJ("meal","\ud83c\udf54","Burger meal","Lots of energy",10,0.55,0,0,!1)
B.d8K=w([B.f2Z,B.f3_,B.f30,B.f35,B.f2Y],x.y)
B.eMy=new C.z(-660,340)
B.eMg=new C.z(-330,340)
B.euu=new C.z(330,340)
B.exa=new C.z(660,340)
B.eMz=new C.z(-660,500)
B.eMh=new C.z(-330,500)
B.euv=new C.z(330,500)
B.exb=new C.z(660,500)
B.eMA=new C.z(-660,780)
B.eMi=new C.z(-330,780)
B.eux=new C.z(330,780)
B.exc=new C.z(660,780)
B.eMr=new C.z(-500,940)
B.ewF=new C.z(500,940)
B.d9m=w([B.eMy,B.eMg,B.euu,B.exa,B.eMz,B.eMh,B.euv,B.exb,B.eMA,B.eMi,B.eux,B.exc,B.eMr,B.ewF],x.f)
B.h8S=new A.q(6,0.2,0)
B.h7a=new A.q(6,2.6,0)
B.aWV=new A.q(8.6,2.6,0)
B.d9R=w([B.h8S,B.h7a,B.aWV],x.o)
B.dam=w([D.c,D.dt,D.es,D.eO,D.bN,D.bL],x.O)
B.eMH=new C.z(-7,-7)
B.exJ=new C.z(7,-7)
B.eMG=new C.z(-7,7)
B.exI=new C.z(7,7)
B.daB=w([B.eMH,B.exJ,B.eMG,B.exI],x.f)
B.daD=w([-2.4,2.4],x.n)
B.daE=w([-0.5,0,0.5],x.n)
B.am3=new A.fK(21,"Brass screw X: HOT",B.TS,y.p,!1,"hot")
B.am1=new A.fK(22,"Brass screw Y: HOT",B.TS,y.p,!1,"hot")
B.daP=w([B.w4,B.am3,B.am1],x.r)
B.heR=new A.PI("Black","Hot (line or switched)","Brass terminal","120 V branch circuit","Carries the power from the breaker. Treat it as live until it is tested dead.","Can be a traveler in a three-way switch, or a switched hot. Verify with a tester.")
B.heP=new A.PI("Red","Hot (second hot or traveler)","Brass or the marked traveler terminal","Switch legs, travelers, fan and light controls","Often the switched wire to a fan or light, or a traveler.","Check the diagram: red can be a traveler or a second circuit.")
B.heO=new A.PI("White","Neutral","Silver terminal","120 V branch circuit","The return path for the current. It can still be live if something is wrong.","In a switch loop a white wire can be re-marked as a hot. A white wire is not always neutral.")
B.heN=new A.PI("Bare copper or green","Equipment ground","Green screw or the ground lead","Every grounded device","Not for current in normal use. It is the safety path if a fault happens.","Never use the neutral as a ground. Older homes may have no ground at all: that needs verification.")
B.heQ=new A.PI("Gray / blue / others","Depends on the installation","See the device diagram","Low voltage, control wires, other systems","Do not guess what a wire does from its color.","Colors and their meaning are not the same everywhere. REQUIRES VERIFICATION.")
B.daT=w([B.heR,B.heP,B.heO,B.heN,B.heQ],C.av("O<PI>"))
B.R4=w([-1.6,1.6],x.n)
B.hes=new A.jz("blackLine","Black \xb7 from the breaker",B.tN,D.c,"hot")
B.heJ=new A.jz("blackLoad","Black \xb7 to the light",B.M8,D.c,"hot")
B.db1=w([B.hes,B.heJ,B.tg],x.d)
B.dbj=w([0,10,22,36,52],x.n)
B.hpT=new A.px(0,-60,130,26)
B.hpY=new A.px(1,80,56,22)
B.dbk=w([B.hpT,B.hpY],x.X)
B.dbK=w([D.bn,D.bG,D.aw,D.aQ,D.br],x.O)
B.edR={isoground:0}
B.f1F=new C.dD(B.edR,1,x.M)
B.bIL=new A.fK(25,"Isolated-ground screw (green, orange triangle)",B.f1F,"The dedicated ground wire goes on the green screw with the orange triangle. It does not touch the box or the strap.",!1,"ground")
B.bIE=new A.fK(23,"Silver screw: NEUTRAL",B.Jt,y.c,!1,"neutral")
B.edL={hot:0}
B.a8u=new C.dD(B.edL,1,x.M)
B.bIl=new A.fK(21,"Brass screw: HOT",B.a8u,y.u,!1,"hot")
B.dbV=w([B.bIL,B.bIE,B.bIl],x.r)
B.bdU=new C.u(1,0.9294117647058824,0.9019607843137255,0.8392156862745098,D.q)
B.bbT=new C.u(1,0.9137254901960784,0.8274509803921568,0.8274509803921568,D.q)
B.bb3=new C.u(1,0.8352941176470589,0.8941176470588236,0.8156862745098039,D.q)
B.agj=new C.u(1,0.9529411764705882,0.8901960784313725,0.6549019607843137,D.q)
B.bgJ=new C.u(1,0.7254901960784313,0.7647058823529411,0.8666666666666667,D.q)
B.bpG=new C.u(1,0.5607843137254902,0.6392156862745098,0.6588235294117647,D.q)
B.az2=w([B.bdU,B.XG,B.bbT,B.bb3,B.agj,B.bgJ,B.ago,B.bpG],x.O)
B.edp={blackLine:0,blackLoad:1}
B.aPS=new C.dD(B.edp,2,x.M)
B.bIr=new A.fK(21,"Brass screw (top)",B.aPS,y.v,!1,"hot")
B.bId=new A.fK(22,"Brass screw (bottom)",B.aPS,y.v,!1,"hot")
B.am2=new A.fK(25,"Green screw: GROUND",B.Js,y.Z,!1,"ground")
B.dcv=w([B.bIr,B.bId,B.am2],x.r)
B.eMJ=new C.z(-80,90)
B.exX=new C.z(80,90)
B.eMI=new C.z(-80,140)
B.exW=new C.z(80,140)
B.ddc=w([B.eMJ,B.exX,B.eMI,B.exW],x.f)
B.bIN=new A.fK(51,"Black wire nut: HOT",B.Ju,"The house black wire joins the fan black wire.",!1,"hot")
B.bIb=new A.fK(52,"White wire nut: NEUTRAL",B.Jr,"The house white wire joins the fan white wire.",!1,"neutral")
B.bIy=new A.fK(53,"Green ground connection",B.Js,"The bare copper house ground joins the green fan ground wire.",!1,"ground")
B.ddj=w([B.bIN,B.bIb,B.bIy],x.r)
B.baP=new A.Su("bus",-575,-25,0,1)
B.baR=new A.Su("police",-575,-25,854,5)
B.baQ=new A.Su("bus",25,575,850,3)
B.baS=new A.Su("police",25,575,1704,6)
B.kl=w([B.baP,B.baR,B.baQ,B.baS],C.av("O<Su>"))
B.alN=new A.rf(4,"deadOutlet")
B.ddr=w([B.a0k,B.a0l,B.NO,B.NP,B.alN,B.a0o,B.a0p,B.a0q,B.a0r,B.a0s,B.a0m,B.a0n],C.av("O<rf>"))
B.eVG=new C.cw([0,560,240,7])
B.eVH=new C.cw([0,560,300,9])
B.a4p=w([B.eVG,B.eVH],C.av("O<+(K,K,K,H)>"))
B.heH=new A.jz("always","Black \xb7 always hot (from the panel)",B.tN,D.c,"hot")
B.heA=new A.jz("switched","Red \xb7 switched hot (from the wall switch)",B.AZ,D.c,"hot")
B.ddS=w([B.tg,B.Kx,B.heH,B.heA],x.d)
B.ddW=w([y.O,"Find the LINE and LOAD screws. LOAD is covered with yellow tape. Leave it covered unless you feed another outlet.",y.R,"Fasten the white wire to the silver LINE screw.","Fasten the black wire to the brass LINE screw.","Push the GFCI into the box and put the plate on.","Turn the power on, press RESET, then press TEST. It must click off."],x.s)
B.ddZ=w([y.O,y.x,y.R,"Fasten the black wire (power in, or to the light) to the COMMON screw: the odd-coloured one.","Fasten the first traveler (red) to a TRAVELER screw.","Fasten the second traveler (white wire taped black) to the other TRAVELER screw.",y.b,y.n],x.s)
B.hpR=new A.px(0,0,80,26)
B.hq_=new A.px(1,90,56,22)
B.deh=w([B.hpR,B.hq_],x.X)
B.der=w(["car","ambulance","firetruck"],x.s)
B.dzR=new A.i8(-62,62,6,46)
B.dzE=new A.i8(-117,-73,149,171)
B.dzO=new A.i8(-57,-13,164,186)
B.dzz=new A.i8(73,117,159,181)
B.dzr=new A.i8(120,144,140,160)
B.dzp=new A.i8(108,142,48,60)
B.dew=w([B.dzR,B.dzE,B.dzO,B.dzz,B.dzr,B.dzp],x.T)
B.deA=w([0.1,8.05],x.n)
B.fXX=new A.q(1000,900,1500)
B.fWv=new A.q(0,200,0)
B.aOL=new C.z(B.fXX,B.fWv)
B.h_t=new A.q(300,70,1000)
B.fWQ=new A.q(0,250,300)
B.eGJ=new C.z(B.h_t,B.fWQ)
B.h9T=new A.q(-200,90,780)
B.fWM=new A.q(0,240,300)
B.eCJ=new C.z(B.h9T,B.fWM)
B.hag=new A.q(-420,520,1000)
B.fWK=new A.q(0,230,300)
B.eyl=new C.z(B.hag,B.fWK)
B.h1H=new A.q(700,330,900)
B.h_r=new A.q(300,230,200)
B.eLs=new C.z(B.h1H,B.h_r)
B.fYf=new A.q(1100,80,300)
B.h0P=new A.q(560,250,0)
B.eKr=new C.z(B.fYf,B.h0P)
B.fY5=new A.q(1080,100,-250)
B.h0O=new A.q(560,240,-100)
B.eOl=new C.z(B.fY5,B.h0O)
B.fXW=new A.q(1000,700,-700)
B.fZB=new A.q(200,230,-300)
B.eQx=new C.z(B.fXW,B.fZB)
B.fZC=new A.q(200,90,-860)
B.fWS=new A.q(0,250,-300)
B.eMY=new C.z(B.fZC,B.fWS)
B.ha0=new A.q(-300,110,-820)
B.fWN=new A.q(0,240,-300)
B.eDk=new C.z(B.ha0,B.fWN)
B.haL=new A.q(-900,600,-600)
B.ha1=new A.q(-300,230,-100)
B.eBV=new C.z(B.haL,B.ha1)
B.h9C=new A.q(-1100,90,-200)
B.ham=new A.q(-560,250,0)
B.eQv=new C.z(B.h9C,B.ham)
B.h9B=new A.q(-1100,120,250)
B.hal=new A.q(-560,240,0)
B.eG9=new C.z(B.h9B,B.hal)
B.hav=new A.q(-700,520,1000)
B.h9y=new A.q(-100,230,100)
B.ezV=new C.z(B.hav,B.h9y)
B.fZA=new A.q(200,170,1300)
B.fWJ=new A.q(0,230,150)
B.eQh=new C.z(B.fZA,B.fWJ)
B.deQ=w([B.aOL,B.eGJ,B.eCJ,B.eyl,B.eLs,B.eKr,B.eOl,B.eQx,B.eMY,B.eDk,B.eBV,B.eQv,B.eG9,B.ezV,B.eQh,B.aOL],x.dt)
B.h55=new A.q(-0.35,11,-3.4)
B.h3n=new A.q(-0.35,3.2,-3.2)
B.h7j=new A.q(-0.35,2.2,-1.9)
B.h1u=new A.q(-0.35,0.7,-1.5)
B.deR=w([B.h55,B.h3n,B.h7j,B.h1u],x.o)
B.hbL=new A.q(5.2,7.5,-7.85)
B.h75=new A.q(5.2,4,-7.85)
B.deX=w([B.hbL,B.h75],x.o)
B.bIk=new A.fK(21,"LOAD hot (brass, taped)",D.v6,y.P,!0,"load")
B.bIn=new A.fK(22,"LINE hot (brass)",B.Ju,"The black (hot) wire from the breaker goes on the brass LINE screw.",!1,"hot")
B.bIj=new A.fK(23,"LOAD neutral (silver, taped)",D.v6,y.P,!0,"load")
B.bIv=new A.fK(24,"LINE neutral (silver)",B.Jr,"The white (neutral) wire from the breaker goes on the silver LINE screw.",!1,"neutral")
B.dfp=w([B.bIk,B.bIn,B.bIj,B.bIv,B.am2],x.r)
B.aWF=new A.q(0,15.5,-3.6)
B.h5m=new A.q(0,20,-3.6)
B.hcp=new A.q(0,22.5,-2)
B.h2W=new A.q(0,22.5,1.1999999999999997)
B.h5w=new A.q(0,21.1,1.6)
B.dfv=w([B.aWF,B.h5m,B.hcp,B.h2W,B.h5w],x.o)
B.dg7=w([],x.bm)
B.HY=w([],x.B)
B.dg6=w([],x.dI)
B.zm=w([],x.E)
B.dg8=w([],x.T)
B.HZ=w([],x.z)
B.azu=w([],x.e3)
B.wv=w([],x.a)
B.azt=w([],x.W)
B.rG=w([],x.o)
B.azx=w([],x.h)
B.azw=w([],x.f)
B.hjk=new A.pu("outlet","\ud83d\udd0c","Wall outlet","Black to brass, white to silver",D.aC)
B.hje=new A.pu("switch","\ud83d\udca1","Light switch","Two blacks and a wire nut",D.aQ)
B.hjf=new A.pu("gfci","\ud83d\udee1\ufe0f","GFCI outlet","LINE and LOAD near water",D.bt)
B.hjl=new A.pu("fan","\ud83c\udf00","Ceiling fan","Black, white, green and a fan box",D.b9)
B.hj9=new A.pu("switch2p","\ud83d\udd25","Double-pole switch","240 V: breaks both hot legs",D.ig)
B.hjg=new A.pu("switch3","\ud83d\udd00","Three-way switch","Common and two travelers",D.aQ)
B.hjp=new A.pu("switch4","\ud83d\udd01","Four-way switch","Between two three-ways",D.co)
B.hjo=new A.pu("switchsmart","\ud83d\udcf6","Smart, motion or timer switch","Needs the neutral wire",D.bw)
B.hjh=new A.pu("switchcombo","\ud83c\udf9a\ufe0f","Combination switch","Two switches, one feed",D.iQ)
B.hjc=new A.pu("split","\ud83c\udf17","Split (half-switched) outlet","Break the tab: switched and always-on",D.aU)
B.hjm=new A.pu("v240four","\ud83e\uddfa","4-wire 240 V outlet","Dryer, range and EV: two hots, neutral, ground",D.cs)
B.hjn=new A.pu("v240three","\ud83d\udd70\ufe0f","3-wire 240 V outlet","Old dryer or range: no separate ground",D.cR)
B.hjb=new A.pu("v240only","\u2744\ufe0f","240 V only outlet","Window AC, welder: two hots and ground",D.b9)
B.hji=new A.pu("isolated","\ud83c\udfed","Isolated-ground outlet","Its own ground wire to the panel",D.bt)
B.hjj=new A.pu("ptrap","\ud83e\udea0","Sink drain (P-trap)","Build a drain with a water seal",D.co)
B.hjd=new A.pu("faucet","\ud83d\udeb0","Faucet supply lines","Hot left, cold right",D.cs)
B.hja=new A.pu("house","\ud83c\udfd7\ufe0f","Build and fix a house","Stage by stage, then repair",D.bw)
B.dgn=w([B.hjk,B.hje,B.hjf,B.hjl,B.hj9,B.hjg,B.hjp,B.hjo,B.hjh,B.hjc,B.hjm,B.hjn,B.hjb,B.hji,B.hjj,B.hjd,B.hja],C.av("O<pu>"))
B.eCe=new C.z(-1.6,3.5)
B.eBN=new C.z(1.6,3.5)
B.eDN=new C.z(-1.6,-3.5)
B.eAu=new C.z(1.6,-3.5)
B.dgo=w([B.eCe,B.eBN,B.eDN,B.eAu],x.f)
B.azE=w([!1,!1,!1,!1],x.u)
B.edQ={in1:0,in2:1}
B.aPR=new C.dD(B.edQ,2,x.M)
B.bIf=new A.fK(23,"IN screw (top left)",B.aPR,y.g,!1,"hot")
B.bIG=new A.fK(21,"IN screw (top right)",B.aPR,y.g,!1,"hot")
B.eee={out1:0,out2:1}
B.aPY=new C.dD(B.eee,2,x.M)
B.bIx=new A.fK(24,"OUT screw (bottom left)",B.aPY,y._,!1,"hot")
B.bIz=new A.fK(22,"OUT screw (bottom right)",B.aPY,y._,!1,"hot")
B.dgR=w([B.w4,B.bIf,B.bIG,B.bIx,B.bIz],x.r)
B.dh0=w(["city","billboards","edges","houses","hospital","traffic"],x.s)
B.dhc=w(["Look at the pieces: the tailpiece, the P-trap and the trap arm. Pick the tailpiece first and tap its glowing outline under the sink.","Pick the P-trap (the U-shaped bend) and tap its glowing outline. It joins the tailpiece.","Pick the trap arm and tap its outline. It joins the trap to the wall drain.","Slide each slip nut up to its joint and hand tighten it: tap the nuts.","Run the water and look for leaks. The U-bend keeps a plug of water that blocks sewer gas."],x.s)
B.dsy=w(["Switch 1 common","Switch 2 common","Traveler terminal (both switches)","Green ground screw","Neutral splice (not on a switch)"],x.s)
B.edd={"Line (from the breaker)":0,"Load (to the light)":1,"Traveler A":2,"Traveler B":3,Ground:4,Neutral:5}
B.dwJ=new C.bw(B.edd,["Switch 1 common","Switch 2 common","Traveler terminal (both switches)","Traveler terminal (both switches)","Green ground screw","Neutral splice (not on a switch)"],x.l)
B.dmx=w(["Never assume the dark screw is the same on every brand: read the diagram on the switch.","A switch loop or an old house may not follow the colors: verify the wires."],x.s)
B.bv3=new A.aki("Three-way switch (two switches, one light)","Two three-way switches control one light from two places. Each switch has a COMMON terminal (dark screw) and two TRAVELER terminals. Power (line) goes to the common of the first switch, the light (load) to the common of the second, and two travelers join the switches. The ground goes to the green screw. A standard single-pole switch cannot do this job.",B.dsy,B.dwJ,B.dmx)
B.cX5=w(["Fan (motor) control wire","Light control wire","Neutral","Ground","Fan-rated support"],x.s)
B.edS={"Motor lead (black)":0,"Light lead (blue)":1,"Neutral (white)":2,"Ground (green)":3,Support:4}
B.dxg=new C.bw(B.edS,["Fan (motor) control wire","Light control wire","Neutral","Ground","Fan-rated support"],x.l)
B.d0z=w(["A blue wire is a light-kit lead on many fans, but not on all: read the diagram.","A fan that spins does not prove the installation is safe."],x.s)
B.bv2=new A.aki("Ceiling fan with a light kit","A fan has a motor and often a light kit, and they are not always switched together. Follow the fan maker's diagram: the motor lead goes to the fan control (or switched hot), the light lead to the light control, the white to neutral and the green to the ground. The box must be fan rated.",B.cX5,B.dxg,B.d0z)
B.zn=w([B.bv3,B.bv2],C.av("O<aki>"))
B.fHj=new C.y("\u2728",null,D.a9k,null,null,null,null,null,null,null,null,null)
B.fRO=new C.y("Nobody needs help right now.",null,D.fw,null,D.L,null,null,null,null,null,null,null)
B.frj=new C.F(!0,D.aR,null,null,null,null,13,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fJF=new C.y("Everybody's wiring and plumbing works. Keep an eye on food and health: things break when you least expect it.",null,B.frj,null,D.L,null,null,null,null,null,null,null)
B.dhD=w([B.fHj,D.O,B.fRO,D.au,B.fJF],x.p)
B.dhK=w(["road","roundabout","roadturn","roadtee","roadcross","house2","bighouse","billboard","tower","hq","store","gasstation","dmv","ubstation","townsign","cornersign","adboard","shop","hospital","firestation","school","car","firetruck","ambulance","dog","cat","cow","sheep","chicken","horse","tree","pine","bush","flowers","fence","lamppost","bench","pond","swing","shed","doghouse"],x.s)
B.eM0=new C.z(-1150,80)
B.ete=new C.z(1150,80)
B.eM_=new C.z(-1150,1990)
B.etd=new C.z(1150,1990)
B.dhT=w([B.eM0,B.ete,B.eM_,B.etd],x.f)
B.f33=new A.rJ("pills","\ud83e\ude79","Pain pills","Cures a headache or a cold: you walk normally again",8,0,0,0,!0)
B.f32=new A.rJ("bread","\ud83c\udf5e","Food for the town","5 portions for the people who live here",10,0,0,0,!1)
B.f31=new A.rJ("medicine","\ud83d\udc8a","Medicine","3 doses for the sick",12,0,0,0,!1)
B.dhX=w([B.f33,B.f32,B.f31],x.y)
B.di_=w([D.aw,D.bG,D.be],x.O)
B.h9l=new A.q(125,292,-121.5)
B.hcg=new A.q(-125,292,-121.5)
B.fXU=new A.q(-125,208,-121.5)
B.h91=new A.q(125,208,-121.5)
B.di3=w([B.h9l,B.hcg,B.fXU,B.h91],x.o)
B.fYY=new A.q(11.4,4.6,-6)
B.h5H=new A.q(11.4,5,-7.85)
B.h1v=new A.q(2.6,5,-7.85)
B.h27=new A.q(2.6,3.4,-7.85)
B.di5=w([B.fYY,B.h5H,B.h1v,B.h27],x.o)
B.di9=w(["hospital","shop","school"],x.s)
B.dia=w(["hot","cold"],x.s)
B.did=w([D.aw,D.be,D.aC,D.f4,D.bS],x.O)
B.heF=new A.jz("black","Black \xb7 hot",B.tN,D.c,"hot")
B.hey=new A.jz("white","White \xb7 neutral",B.oR,D.av,"neutral")
B.Rs=w([B.heF,B.hey,B.tg],x.d)
B.eyJ=new C.z(-3.5,4)
B.eFK=new C.z(3.5,4)
B.eAW=new C.z(-3.5,-4)
B.esE=new C.z(3.5,-4)
B.diF=w([B.eyJ,B.eFK,B.eAW,B.esE],x.f)
B.diK=w(["Ada","Ben","Chidi","Dina","Efe","Farah","Gus","Halima","Ivo","Jamal","Kemi","Lola"],x.s)
B.eQF=new C.z(-2.4,5)
B.eHb=new C.z(2.4,5)
B.eEn=new C.z(-2.4,-5)
B.eD4=new C.z(2.4,-5)
B.diL=w([B.eQF,B.eHb,B.eEn,B.eD4],x.f)
B.djd=w([y.O,"Break off the little brass tab between the two brass screws, so the two halves are separate.",y.R,"Fasten the white neutral to a SILVER screw (the silver tab stays joined).","Fasten the always-hot black wire to the bottom BRASS screw.","Fasten the switched hot (red, from the wall switch) to the top BRASS screw.",y.b,y.n],x.s)
B.eUA=new C.bk(-6,-4,D.c5)
B.eTe=new C.bk(5,-5,D.bG)
B.eUz=new C.bk(0,1,D.aw)
B.eV3=new C.bk(-5,5,D.bw)
B.eSt=new C.bk(6,4,D.c)
B.djx=w([B.eUA,B.eTe,B.eUz,B.eV3,B.eSt],x.dV)
B.dk0=w([U.qD,R.ll],x.f)
B.dk4=w(["split","v240four","v240three","v240only","isolated"],x.s)
B.edE={feed:0}
B.f29=new C.dD(B.edE,1,x.M)
B.bIi=new A.fK(21,"FEED screw (joined tab)",B.f29,"The one feed wire goes on the side where the brass screws are joined by a tab: it powers both switches.",!1,"hot")
B.ee1={loadA:0,loadB:1}
B.aPX=new C.dD(B.ee1,2,x.M)
B.bIK=new A.fK(22,"Switch 1 screw \u2192 light 1",B.aPX,y.q,!1,"hot")
B.bIO=new A.fK(24,"Switch 2 screw \u2192 light 2",B.aPX,y.q,!1,"hot")
B.dkh=w([B.w4,B.bIi,B.bIK,B.bIO],x.r)
B.eLu=new C.z("Slab","First the concrete slab (the foundation) is poured and left to cure. Every wall sits on it.")
B.eOp=new C.z("Framing","The carpenters build the wall frames from 2x4 studs, spaced 16 inches apart, with plates on the top and bottom.")
B.eCO=new C.z("Plumbing rough-in","The plumber runs the hot (red) and cold (blue) water lines and the white drain pipes inside the walls and floor before anything is closed up.")
B.eJF=new C.z("Electrical rough-in","The electrician runs the yellow and white cables from the breaker panel to every box, and fixes the boxes to the studs.")
B.eKK=new C.z("Drywall","Drywall covers the frame. Here it is see-through so you can still look at the pipes and wires behind it.")
B.eDf=new C.z("Fixtures","Last come the outlets, switches, light, sink, toilet and water heater. This is where most repairs happen.")
B.eEy=new C.z("Roof","The roof goes on to keep everything dry. It is see-through here so you can keep looking inside.")
B.dkk=w([B.eLu,B.eOp,B.eCO,B.eJF,B.eKK,B.eDf,B.eEy],x.L)
B.dzB=new A.i8(-100,100,24,90)
B.dzG=new A.i8(-134,-110,100,190)
B.dzq=new A.i8(110,134,100,190)
B.dko=w([B.dzB,B.dzG,B.dzq],x.T)
B.eM6=new C.z(-17,-9)
B.etn=new C.z(17,-9)
B.eM5=new C.z(-17,9)
B.etm=new C.z(17,9)
B.dkY=w([B.eM6,B.etn,B.eM5,B.etm],x.f)
B.dl3=w([-100,0,100],x.n)
B.dl4=w([-110,-80,80,110],x.n)
B.a4O=w([-14,14],x.n)
B.dl6=w([-150,150],x.n)
B.dl7=w([-178,178],x.n)
B.dl9=w([-18,18],x.n)
B.aA_=w([-20,0,20],x.n)
B.dlb=w([-21,21],x.n)
B.a4Q=w([-26,26],x.n)
B.dlc=w([-27,27],x.n)
B.f34=new A.rJ("can","\ud83d\udee2","Gas can","Half a tank of gas",8,0,0.5,0,!1)
B.aQb=new A.rJ("tank","\u26fd","Fill the tank","A full tank",12,0,1,0,!1)
B.dld=w([B.f34,B.aQb],x.y)
B.dlf=w([-30,-10,10,30],x.n)
B.dlg=w([-32,32],x.n)
B.dlh=w([-32,-8,34],x.n)
B.aA0=w([-34,34],x.n)
B.dli=w([-3,3],x.n)
B.dlj=w([-47,47],x.n)
B.dlk=w([-48,48],x.n)
B.dll=w([-52,52],x.n)
B.aA2=w([-55,55],x.n)
B.dln=w([-600,0,600],x.n)
B.dlo=w([-600,600],x.n)
B.dlq=w([-70,70],x.n)
B.ot=w([-72,-24,24],x.t)
B.aA3=w([-80,80],x.n)
B.dlt=w([-900,-300,300,900],x.n)
B.dlu=w([-90,0,90],x.n)
B.dlv=w([-90,-52,52,90],x.n)
B.aA6=w([-9,9],x.n)
B.dlH=w(["switch2p","switch3","switch4","switchsmart","switchcombo"],x.s)
B.dlN=w(["medicine","food"],x.s)
B.dm_=w([y.O,y.x,y.R,"The first traveler from the FIRST three-way goes on a top screw (IN).","The second traveler from the FIRST three-way goes on the other top screw (IN).","The first traveler to the SECOND three-way goes on a bottom screw (OUT).","The second traveler to the SECOND three-way goes on the other bottom screw (OUT).",y.b,y.n],x.s)
B.h1E=new A.q(8.2,5,-7.85)
B.h79=new A.q(8.2,1.2,-7.85)
B.h9h=new A.q(8.2,1,-7.4)
B.dn9=w([B.h1E,B.h79,B.h9h],x.o)
B.her=new A.jz("common","Black \xb7 COMMON (power in or to the light)",B.tN,D.c,"hot")
B.hep=new A.jz("trav1","Red \xb7 traveler 1",B.AZ,D.c,"hot")
B.heC=new A.jz("trav2","White taped black \xb7 traveler 2",B.oR,D.av,"hot")
B.dna=w([B.tg,B.her,B.hep,B.heC],x.d)
B.a4Z=w(["rug","road","roundabout","roadturn","roadtee","roadcross","pond","flowers"],x.s)
B.dnn=w(["human","soldier","michelle","xbot","human"],x.s)
B.eLV=new C.z(-1050,"hospital")
B.eMv=new C.z(-630,"store")
B.eMn=new C.z(-420,"tower")
B.esS=new C.z(0,"tower")
B.ev_=new C.z(420,"tower")
B.ex6=new C.z(630,"store")
B.et6=new C.z(1050,"hospital")
B.dnr=w([B.eLV,B.aON,B.eMv,B.eMn,B.aOM,B.esS,B.aOA,B.ev_,B.ex6,B.aOC,B.et6],x.d6)
B.eq_=new A.Fb(61,"Hot shut-off valve (left)",B.a8u,"Hot is always on the LEFT. The red hose goes on the left valve.")
B.edv={cold:0}
B.aQ7=new C.dD(B.edv,1,x.M)
B.eq0=new A.Fb(62,"Cold shut-off valve (right)",B.aQ7,"Cold is always on the RIGHT. The blue hose goes on the right valve.")
B.epY=new A.Fb(63,"Hot faucet inlet (left)",B.a8u,"The left faucet inlet takes the hot (red) hose.")
B.epZ=new A.Fb(64,"Cold faucet inlet (right)",B.aQ7,"The right faucet inlet takes the cold (blue) hose.")
B.a5_=w([B.eq_,B.eq0,B.epY,B.epZ],C.av("O<Fb>"))
B.a51=w([-72,-48,-24,0,24],x.t)
B.doA=w(["1 Rough-in","2 Drywall","3 Devices"],x.s)
B.dzU=new A.i8(-90,10,130,160)
B.dzN=new A.i8(-50,50,70,100)
B.dzH=new A.i8(-134,-110,20,70)
B.dp3=w([B.dzU,B.dzN,B.dzH],x.T)
B.RA=w(["road","roadturn","roadtee","roadcross"],x.s)
B.bIs=new A.fK(21,"Brass screw (top): HOT side",B.Ju,y.r,!1,"hot")
B.bIB=new A.fK(22,"Brass screw (bottom): HOT side",B.Ju,y.r,!1,"hot")
B.bIw=new A.fK(23,"Silver screw (top): NEUTRAL side",B.Jr,y.Q,!1,"neutral")
B.bIm=new A.fK(24,"Silver screw (bottom): NEUTRAL side",B.Jr,y.Q,!1,"neutral")
B.bIt=new A.fK(25,"Green screw: GROUND",B.Js,"The green screw is for the bare copper or green GROUND wire.",!1,"ground")
B.dpe=w([B.bIs,B.bIB,B.bIw,B.bIm,B.bIt],x.r)
B.dpk=w([y.O,y.x,y.R,"Fasten the black hot to one HOT brass screw.","Fasten the red hot to the other HOT brass screw. There is no neutral and no silver screw in use.",y.b,y.n],x.s)
B.eMC=new C.z(-700,225)
B.eM2=new C.z(-120,160)
B.etg=new C.z(120,160)
B.exw=new C.z(720,225)
B.dpA=w([B.eMC,B.eM2,B.etg,B.exw],x.f)
B.eSP=new C.bk("hot","Hot hose (red)",B.tG)
B.eTv=new C.bk("cold","Cold hose (blue)",B.o_)
B.dpC=w([B.eSP,B.eTv],C.av("O<+(n,n,u)>"))
B.euz=new C.z(34,40)
B.hhc=new A.Av(B.euz,3.141592653589793,2.6,"Washing hands at the sink",!1,!1,!1,"")
B.dpE=w([B.hhc],x.h)
B.b06=new A.Hm("NGMY navy",E.jK,E.LL,D.c,F.fz)
B.b0b=new A.Hm("Purple",D.oW,D.dF,D.c,D.bL)
B.b09=new A.Hm("Green",D.h3,D.bP,D.c,D.lX)
B.b07=new A.Hm("Sunset",D.ek,D.aC,D.c,D.ie)
B.b08=new A.Hm("Night",D.M,D.aJ,D.b2,D.c5)
B.b0a=new A.Hm("Light",D.c,D.nU,E.jK,D.dY)
B.a54=w([B.b06,B.b0b,B.b09,B.b07,B.b08,B.b0a],C.av("O<Hm>"))
B.aaH=new A.q(15,2.6,0)
B.a55=w([B.aWV,B.aaH],x.o)
B.dpW=w([B.tg,B.Kx,B.aaN,B.aaO],x.d)
B.b5z=new C.ac(0,D.G,D.aT,D.I,24)
B.dpX=w([B.b5z],x.V)
B.dqa=w(["tail","trap","arm"],x.s)
B.dqi=w([!0,!0,!0,!0],x.u)
B.I1=w(["tv","lamp","toaster","hairdryer"],x.s)
B.ab3=new A.iV("look","Look",D.fl)
B.hhP=new A.iV("wall","Wall box",P.anh)
B.hhN=new A.iV("ceiling","Ceiling box",D.rr)
B.hi1=new A.iV("fanbox","Fan box",N.Ok)
B.hia=new A.iV("drill","Drill",D.yI)
B.hi2=new A.iV("cable","Cable roll",E.an9)
B.dhf=w([B.ab3,B.hhP,B.hhN,B.hi1,B.hia,B.hi2],x.I)
B.hi8=new A.iV("sheet","Drywall sheet",D.Cs)
B.hhT=new A.iV("knife","Drywall saw",D.GJ)
B.hhR=new A.iV("screw","Screw gun",A0.GU)
B.hic=new A.iV("tape","Tape",D.uk)
B.hi6=new A.iV("mud","Mud",Ac.a1z)
B.hih=new A.iV("sand","Sander",D.GH)
B.bNW=new C.a0(985109,"MaterialIcons",!1)
B.hhX=new A.iV("paint","Roller",B.bNW)
B.ddz=w([B.ab3,B.hi8,B.hhT,B.hhR,B.hic,B.hi6,B.hih,B.hhX],x.I)
B.OG=new C.a0(983223,"MaterialIcons",!1)
B.hid=new A.iV("outlet","Outlet",B.OG)
B.hhV=new A.iV("gfci","GFCI",D.uq)
B.hib=new A.iV("switch","Switch",E.us)
B.hhQ=new A.iV("split","Split outlet",B.OG)
B.hif=new A.iV("v240four","240 V 4-wire",T.Ca)
B.hhO=new A.iV("v240three","240 V 3-wire",T.Ca)
B.hi_=new A.iV("v240only","240 V only",T.Ca)
B.hhS=new A.iV("isolated","Isolated ground",B.OG)
B.hi7=new A.iV("switch2p","Double-pole",E.us)
B.hi9=new A.iV("switch3","3-way switch",E.us)
B.hi0=new A.iV("switch4","4-way switch",E.us)
B.hhZ=new A.iV("switchsmart","Smart switch",E.us)
B.hhM=new A.iV("switchcombo","Double switch",E.us)
B.hi5=new A.iV("light","Light",D.ru)
B.bNU=new C.a0(985094,"MaterialIcons",!1)
B.hhY=new A.iV("fan","Fan",B.bNU)
B.hi4=new A.iV("tv","TV",W.a25)
B.bMc=new C.a0(63571,"MaterialIcons",!1)
B.hhW=new A.iV("lamp","Lamp",B.bMc)
B.bL_=new C.a0(62944,"MaterialIcons",!1)
B.hhU=new A.iV("toaster","Toaster",B.bL_)
B.bLA=new C.a0(63209,"MaterialIcons",!1)
B.hig=new A.iV("hairdryer","Hair dryer",B.bLA)
B.hie=new A.iV("flip","Flip switch",E.us)
B.hi3=new A.iV("tester","Voltage tester",D.uh)
B.d6O=w([B.ab3,B.hid,B.hhV,B.hib,B.hhQ,B.hif,B.hhO,B.hi_,B.hhS,B.hi7,B.hi9,B.hi0,B.hhZ,B.hhM,B.hi5,B.hhY,B.hi4,B.hhW,B.hhU,B.hig,B.hie,B.hi3],x.I)
B.dqo=w([B.dhf,B.ddz,B.d6O],C.av("O<ai<iV>>"))
B.dqC=w([B.tg,B.aaN,B.aaO],x.d)
B.bre=new C.u(1,0.1843137254901961,0.30980392156862746,0.30980392156862746,D.q)
B.boE=new C.u(1,0.3568627450980392,0.4196078431372549,0.5490196078431373,D.q)
B.dqD=w([B.Xl,D.br,B.bre,B.boE,D.bm,D.aJ],x.O)
B.dqJ=w([D.bA,D.bP,D.cc,D.cb,D.vE,D.cw],x.O)
B.dqL=w([-400,400,-900,900,-1400,1400],x.n)
B.dqM=w([D.aw,D.bG,D.be,D.d2],x.O)
B.dqW=w([y.O,"Hold the fixture up to the ceiling box. It has three short wires: black, white and green.","Join the house ground wire to the fixture ground.","Join the house white wire to the fixture white wire with a wire nut.","Join the house black wire to the fixture black wire with a wire nut.","Push the wires into the box and fasten the fixture to the ceiling.",y.f],x.s)
B.dzT=new A.i8(-70,70,28,52)
B.dzK=new A.i8(-134,-96,100,170)
B.dzA=new A.i8(96,134,100,170)
B.dr3=w([B.dzT,B.dzK,B.dzA],x.T)
B.dr4=w([30,60,120,180,300],x.t)
B.eM9=new C.z(-210,60)
B.etZ=new C.z(210,90)
B.eMf=new C.z(-330,120)
B.euw=new C.z(330,60)
B.eLZ=new C.z(-110,330)
B.etc=new C.z(110,330)
B.eMt=new C.z(-560,640)
B.ewN=new C.z(560,640)
B.eMl=new C.z(-420,1100)
B.euY=new C.z(420,1100)
B.drc=w([B.eM9,B.etZ,B.eMf,B.euw,B.eLZ,B.etc,B.eMt,B.ewN,B.eMl,B.euY],x.f)
B.c0C=new A.jL("Breaker off, then test","Before you touch any wire, switch its breaker OFF, then check with a voltage tester that the wire is dead. A switch on the wall is not enough.")
B.c0p=new A.jL("Lock out, tag out","On a real job you put a lock or a note on the panel so nobody switches the power back on while you work.")
B.c0J=new A.jL("Water and power","Water carries electricity. Near sinks, tubs and outdoors the outlets must be GFCI, and wet hands never touch wires.")
B.c0u=new A.jL("Eyes, ears, lungs","Safety glasses for drilling and cutting, ear protection for loud tools, and a mask when you sand drywall dust or cut tile.")
B.c0I=new A.jL("Shut the water off","Before you cut or loosen a pipe, close the main water valve and open a faucet to drain the line.")
B.djN=w([B.c0C,B.c0p,B.c0J,B.c0u,B.c0I],x.Z)
B.c0V=new A.N0("Safety first","\ud83e\uddba",D.cs,B.djN)
B.c0K=new A.jL("Wire colours","Black is hot (it carries the power), white is neutral (the way back), bare copper or green is ground (the safety path). Red is a second hot, often used for a switched line.")
B.c0R=new A.jL("Screw colours","On an outlet the brass screw takes the hot wire, the silver screw takes the neutral and the green screw takes the ground.")
B.c0E=new A.jL("Wire size","14 gauge wire is for 15 amp circuits (lights and outlets). 12 gauge is for 20 amp circuits (kitchens). A thinner wire than the breaker allows can overheat and start a fire.")
B.c0y=new A.jL("Breakers","A breaker is a safety switch. It trips when a circuit carries too much current, so the wires never get hot enough to burn.")
B.c0M=new A.jL("Wire nuts","Strip about 3/4 inch, twist the bare ends together clockwise, and screw on the nut until no bare copper shows. Give each wire a gentle tug.")
B.c0S=new A.jL("Switches","A switch cuts the hot wire only. The neutral goes straight through to the light.")
B.c0T=new A.jL("GFCI","A GFCI outlet watches the current going out and coming back. If a little leaks (through water or a person) it cuts the power in a fraction of a second.")
B.c0r=new A.jL("Ceiling fans","A fan shakes and is heavy. It needs a box that says fan rated, fixed to the joist, not a plain light box.")
B.c0t=new A.jL("Heights","Outlets sit about 16 inches from the floor. Switches sit about 48 inches up, where your hand falls.")
B.dbY=w([B.c0K,B.c0R,B.c0E,B.c0y,B.c0M,B.c0S,B.c0T,B.c0r,B.c0t],x.Z)
B.c0Y=new A.N0("Wiring basics","\u26a1",D.bG,B.dbY)
B.c0q=new A.jL("Hot left, cold right","On a faucet, hot is on the left and cold on the right. Hot lines are marked red and cold lines blue.")
B.c0D=new A.jL("The P-trap","The curved pipe under a sink always holds a little water. That water seal stops sewer gas coming up the drain.")
B.c0O=new A.jL("Shut-off valves","Every sink and toilet has its own small valve, so you can stop the water to one fixture without turning off the whole house.")
B.c0w=new A.jL("Slip nuts","Drain joints are sealed by a washer and a slip nut. Tighten by hand and a quarter turn: too much force cracks plastic.")
B.c0v=new A.jL("Wax ring","A toilet sits on a wax ring that seals it to the floor drain. A toilet is lowered straight down once, and cannot be slid around.")
B.c0L=new A.jL("Drain slope","Drains fall about 1/4 inch per foot so water and waste keep moving. Too flat and it clogs, too steep and the water leaves the solids behind.")
B.c0Q=new A.jL("Order of work","Plumbing goes from the top down on the drain (tailpiece, trap, arm) and from the wall out on the supply (valve, hose, fixture).")
B.ciG=w([B.c0q,B.c0D,B.c0O,B.c0w,B.c0v,B.c0L,B.c0Q],x.Z)
B.c0W=new A.N0("Plumbing basics","\ud83d\udeb0",D.co,B.ciG)
B.c0s=new A.jL("Studs","Studs are the vertical 2x4 posts inside a wall, 16 inches apart from centre to centre. Everything is fixed to them.")
B.c0G=new A.jL("Drilling studs","Holes for cable go through the middle of the stud, so a nail or screw cannot reach the wire.")
B.c0x=new A.jL("Drywall","A sheet is 4 feet wide, so its edges land on studs 48 inches apart. Screws go into studs only, just under the paper.")
B.c0A=new A.jL("Taping and mud","Seams get paper tape and three thin coats of joint compound, sanded smooth between coats, then primer and paint.")
B.c0P=new A.jL("Order of a build","Frame, run the pipes and wires (rough-in), inspect, hang drywall, finish it, paint, then fit the fixtures and devices.")
B.cXw=w([B.c0s,B.c0G,B.c0x,B.c0A,B.c0P],x.Z)
B.c0U=new A.N0("Framing and walls","\ud83c\udfe0",D.dY,B.cXw)
B.c0B=new A.jL("Voltage tester","A pen that glows or beeps near live wires. Test it on a known live outlet first, so you know it works.")
B.c0H=new A.jL("Wire strippers","Strip the plastic off without nicking the copper. A nick weakens the wire.")
B.c0N=new A.jL("Adjustable wrench","For nuts on valves and hoses. Hold the fitting steady with a second wrench so you do not twist the pipe.")
B.c0F=new A.jL("Drill and screw gun","A drill makes holes through studs. A screw gun sets drywall screws to the right depth.")
B.c0z=new A.jL("Level and tape measure","Measure twice, cut once. A level makes sure outlets, shelves and pipes are straight.")
B.dsk=w([B.c0B,B.c0H,B.c0N,B.c0F,B.c0z],x.Z)
B.c0X=new A.N0("Tools","\ud83e\uddf0",D.bt,B.dsk)
B.drV=w([B.c0V,B.c0Y,B.c0W,B.c0U,B.c0X],C.av("O<N0>"))
B.drY=w([y.O,"There is no separate ground wire here: the neutral also grounds the frame of the old appliance. This is only allowed in old installations.",y.N,y.E,y.k,y.b,y.n],x.s)
B.bf1=new C.u(1,0.48627450980392156,0.22745098039215686,0.22745098039215686,D.q)
B.bmP=new C.u(1,0.24705882352941178,0.4196078431372549,0.30980392156862746,D.q)
B.bl7=new C.u(1,0.4196078431372549,0.30980392156862746,0.48627450980392156,D.q)
B.bi2=new C.u(1,0.47843137254901963,0.41568627450980394,0.23137254901960785,D.q)
B.ds1=w([B.Xl,B.bf1,B.bmP,B.bl7,B.bi2],x.O)
B.dsd=w(["Cream","Sky","Blush","Mint","Butter","Periwinkle","White","Slate"],x.s)
B.het=new A.jz("in1","Red \xb7 traveler in 1 (from the first 3-way)",B.AZ,D.c,"hot")
B.hez=new A.jz("in2","White taped red \xb7 traveler in 2",B.oR,D.av,"hot")
B.ae8=new C.u(1,0.6901960784313725,0.22745098039215686,0.16862745098039217,D.q)
B.heq=new A.jz("out1","Red \xb7 traveler out 1 (to the second 3-way)",B.ae8,D.c,"hot")
B.heE=new A.jz("out2","White taped red \xb7 traveler out 2",D.bO,D.av,"hot")
B.dsg=w([B.tg,B.het,B.hez,B.heq,B.heE],x.d)
B.eMF=new C.z(-760,330)
B.exx=new C.z(760,330)
B.eMp=new C.z(-450,1080)
B.ewc=new C.z(450,1080)
B.dsj=w([B.eMF,B.exx,B.eMp,B.ewc],x.f)
B.dsr=w([0.72,-0.72],x.n)
B.heB=new A.jz("hot","Black \xb7 hot",B.tN,D.c,"hot")
B.Yv=new C.u(1,0.1843137254901961,0.6352941176470588,0.30980392156862746,D.q)
B.hew=new A.jz("isoground","Green with yellow stripe \xb7 isolated ground",B.Yv,D.c,"ground")
B.dsB=w([B.Kx,B.heB,B.hew],x.d)
B.dsN=w([B.am4,B.am3,B.am1],x.r)
B.ezb=new C.z("outlet","\ud83d\udd0c Outlet")
B.eNt=new C.z("gfci","\ud83d\udee1\ufe0f GFCI outlet")
B.eJ1=new C.z("switch","\ud83d\udca1 Light switch")
B.dsO=w([B.ezb,B.eNt,B.eJ1],x.L)
B.dsZ=w(["inspect","hand","screwdriver","pliers","wrench","crimper","plunger","flapper","newoutlet","patch"],x.s)
B.hpP=new A.px(0,0,70,26)
B.hq0=new A.px(1,-100,110,24)
B.hq2=new A.px(2,105,100,26)
B.dtx=w([B.hpP,B.hq0,B.hq2],x.X)
B.hex=new A.jz("lineA","Black \xb7 hot leg 1 (from the panel)",B.tN,D.c,"hot")
B.heD=new A.jz("lineB","Red \xb7 hot leg 2 (from the panel)",B.AZ,D.c,"hot")
B.heK=new A.jz("loadA","Black \xb7 hot leg 1 (to the heater)",B.M8,D.c,"hot")
B.hev=new A.jz("loadB","Red \xb7 hot leg 2 (to the heater)",B.ae8,D.c,"hot")
B.dtT=w([B.tg,B.hex,B.heD,B.heK,B.hev],x.d)
B.dtZ=w(["Maya","Kofi","Amara","Tunde","Zawadi"],x.s)
B.du1=w(["Look under the sink. The wall has two shut-off valves: hot on the LEFT (red handle) and cold on the RIGHT (blue handle).","Pick the red hot hose. Tap the left shut-off valve, then the left faucet inlet.","Pick the blue cold hose. Tap the right shut-off valve, then the right faucet inlet.","Open the valves slowly and turn on the faucet. Check every connection for drips."],x.s)
B.edH={flange:0,wax:1,toilet:2,bolts:3,valve:4,hosehot:5,hosecold:6,faucet:7,tail:8,trap:9,arm:10}
B.aFZ=new C.bw(B.edH,["Flange","Wax ring","Toilet","Bolts","Shut-off valve","Hot hose","Cold hose","Faucet","Tailpiece","P-trap","Trap arm"],x.l)
B.dwn=new C.du([25,"ground",23,"lineA",21,"lineB",24,"loadA",22,"loadB"],x.v)
B.dwo=new C.du([25,"ground",23,"in1",21,"in2",24,"out1",22,"out2"],x.v)
B.edb={xbot:0,michelle:1,soldier:2}
B.RY=new C.bw(B.edb,["assets/avatars/Xbot.glb","assets/avatars/Michelle.glb","assets/avatars/Soldier.glb"],x.l)
B.ecm={highway:0,tower:1,neon:2,roof:3,screen:4,gate:5}
B.aOy=new C.z(0,!1)
B.etH=new C.z(1,!1)
B.euM=new C.z(3,!1)
B.eui=new C.z(2,!0)
B.etJ=new C.z(1,!0)
B.euN=new C.z(3,!0)
B.dwz=new C.bw(B.ecm,[B.aOy,B.etH,B.euM,B.eui,B.etJ,B.euN],C.av("bw<n,+(H,R)>"))
B.dwE=new C.du([25,"ground",23,"neutral",21,"hot1",22,"hot2"],x.v)
B.dwF=new C.du([25,"ground",23,"common",21,"trav1",22,"trav2"],x.v)
B.dwG=new C.du([25,"ground",23,"neutral",21,"line",22,"load"],x.v)
B.dwH=new C.du([25,"ground",23,"neutral",21,"switched",22,"always"],x.v)
B.dwU=new C.du([25,"ground",21,"hot1",22,"hot2"],x.v)
B.ed7={bed:0,nightstand:1,wardrobe:2,desk:3,rug:4,sofa:5,armchair:6,coffee:7,tvstand:8,dining:9,chair:10,plant:11,lamp:12,console:13,shelf:14,tree:15,pine:16,bush:17,flowers:18,fence:19,lamppost:20,bench:21,car:22,road:23,roundabout:24,roadturn:25,roadtee:26,roadcross:27,house2:28,bighouse:29,pole:30,crate:31,billboard:32,tower:33,hq:34,store:35,gasstation:36,dmv:37,ubstation:38,townsign:39,cornersign:40,adboard:41,shop:42,hospital:43,firestation:44,school:45,firetruck:46,ambulance:47,dog:48,cat:49,cow:50,sheep:51,chicken:52,horse:53,pond:54,swing:55,shed:56,doghouse:57}
B.bHp=new A.fn("Bed","\ud83d\udecf\ufe0f",48,64)
B.bHB=new A.fn("Night table","\ud83e\ude91",13,13)
B.bH8=new A.fn("Wardrobe","\ud83d\udeaa",35,16)
B.bHk=new A.fn("Desk","\ud83d\udda5\ufe0f",38,19)
B.bH9=new A.fn("Rug","\ud83d\udfe5",56,40)
B.bH4=new A.fn("Sofa","\ud83d\udecb\ufe0f",64,26)
B.bHt=new A.fn("Armchair","\ud83d\udcba",24,24)
B.bHI=new A.fn("Coffee table","\u2615",32,19)
B.bH6=new A.fn("Media cabinet","\ud83d\uddc4\ufe0f",45,14)
B.bHG=new A.fn("Dining table","\ud83c\udf7d\ufe0f",45,29)
B.bHA=new A.fn("Chair","\ud83e\ude91",14,14)
B.bHH=new A.fn("Plant","\ud83e\udeb4",14,14)
B.bHC=new A.fn("Floor lamp","\ud83d\udca1",10,10)
B.bHq=new A.fn("Console table","\ud83d\uddc4\ufe0f",35,11)
B.bHz=new A.fn("Bookshelf","\ud83d\udcda",29,10)
B.bHM=new A.fn("Tree","\ud83c\udf33",36,36)
B.bHn=new A.fn("Pine tree","\ud83c\udf32",30,30)
B.bH3=new A.fn("Bush","\ud83c\udf3f",18,18)
B.bHw=new A.fn("Flowers","\ud83c\udf37",22,22)
B.bGX=new A.fn("Fence","\ud83d\udea7",64,6)
B.bHa=new A.fn("Street lamp","\ud83c\udfee",8,8)
B.bHs=new A.fn("Bench","\ud83e\ude91",44,16)
B.bGY=new A.fn("Car","\ud83d\ude97",84,40)
B.bHj=new A.fn("Road","\ud83d\udee3\ufe0f",40,40)
B.bHN=new A.fn("Roundabout","\ud83d\udd04",80,80)
B.bH2=new A.fn("Road corner","\u21aa\ufe0f",40,40)
B.bHP=new A.fn("Road T-junction","\u22a4",40,40)
B.bHl=new A.fn("Crossroads","\u271a",40,40)
B.bH5=new A.fn("House","\ud83c\udfe0",108,90)
B.bHo=new A.fn("Big house","\ud83c\udfe2",158,120)
B.bGZ=new A.fn("Electric pole","\ud83d\udd0c",10,10)
B.bHi=new A.fn("Crate","\ud83d\udce6",28,28)
B.bHL=new A.fn("Billboard","\ud83e\udea7",72,10)
B.bH1=new A.fn("Office tower","\ud83c\udfe2",100,70)
B.bHd=new A.fn("NGMY company","\ud83c\udfdb\ufe0f",170,90)
B.bHc=new A.fn("NGMY store","\ud83c\udfec",130,80)
B.bHO=new A.fn("NGMY gas station","\u26fd",150,90)
B.bHy=new A.fn("NGMY licence office","\ud83e\udeaa",130,80)
B.bHf=new A.fn("NGMY Uber","\ud83d\ude96",120,60)
B.bH_=new A.fn("NGMY Town sign","\ud83e\udea7",380,14)
B.bHu=new A.fn("NGMY Town billboard","\ud83e\udea7",150,10)
B.bHh=new A.fn("NGMY ad billboard","\ud83d\udcfa",330,14)
B.bHm=new A.fn("Shop","\ud83c\udfea",126,90)
B.bHe=new A.fn("Hospital","\ud83c\udfe5",165,105)
B.bGW=new A.fn("Fire station","\ud83d\ude92",135,96)
B.bHx=new A.fn("School","\ud83c\udfeb",186,105)
B.bHF=new A.fn("Fire truck","\ud83d\ude92",96,40)
B.bHr=new A.fn("Ambulance","\ud83d\ude91",84,40)
B.bHb=new A.fn("Dog","\ud83d\udc15",22,10)
B.bHg=new A.fn("Cat","\ud83d\udc08",16,8)
B.bHD=new A.fn("Cow","\ud83d\udc04",38,16)
B.bH7=new A.fn("Sheep","\ud83d\udc11",26,14)
B.bHE=new A.fn("Chicken","\ud83d\udc14",12,8)
B.bH0=new A.fn("Horse","\ud83d\udc0e",46,16)
B.bHJ=new A.fn("Pond","\ud83d\udca7",80,56)
B.bHv=new A.fn("Swing set","\ud83c\udfa0",56,40)
B.bHK=new A.fn("Shed","\ud83d\uded6",50,42)
B.bHQ=new A.fn("Dog house","\ud83d\udc15",24,22)
B.hy=new C.bw(B.ed7,[B.bHp,B.bHB,B.bH8,B.bHk,B.bH9,B.bH4,B.bHt,B.bHI,B.bH6,B.bHG,B.bHA,B.bHH,B.bHC,B.bHq,B.bHz,B.bHM,B.bHn,B.bH3,B.bHw,B.bGX,B.bHa,B.bHs,B.bGY,B.bHj,B.bHN,B.bH2,B.bHP,B.bHl,B.bH5,B.bHo,B.bGZ,B.bHi,B.bHL,B.bH1,B.bHd,B.bHc,B.bHO,B.bHy,B.bHf,B.bH_,B.bHu,B.bHh,B.bHm,B.bHe,B.bGW,B.bHx,B.bHF,B.bHr,B.bHb,B.bHg,B.bHD,B.bH7,B.bHE,B.bH0,B.bHJ,B.bHv,B.bHK,B.bHQ],C.av("bw<n,fn>"))
B.dxL=new C.du([25,"isoground",23,"neutral",21,"hot"],x.v)
B.ecu={outlet:0,switch:1,light:2,fan:3,gfci:4}
B.d7e=w(["Silver","Brass","Green"],x.s)
B.fcK=new A.v9("On a standard receptacle, which terminal does the hot wire go on?",B.d7e,1,"Brass is the hot side. Silver is neutral and green is the ground.")
B.cIQ=w(["Yes, it works","No: reversed polarity leaves live parts that should be dead","Yes if there is a ground"],x.s)
B.fcI=new A.v9("The outlet works with hot and neutral swapped. Is it safe?",B.cIQ,1,"Working is not the same as safe. Reversed polarity energizes the wrong parts.")
B.d0Q=w(["Yes","No, never","Only in old houses"],x.s)
B.fcE=new A.v9("May the neutral be used as the equipment ground?",B.d0Q,1,"The ground is a separate safety path. The neutral carries current in normal use.")
B.dcx=w([B.fcK,B.fcI,B.fcE],x.W)
B.c5l=w(["The hot to the light","The neutral","The ground"],x.s)
B.fcL=new A.v9("A single-pole switch opens and closes which conductor?",B.c5l,0,"The switch breaks the hot conductor to the load.")
B.cZs=w(["Yes","No, never","If the wire is thick"],x.s)
B.fcM=new A.v9("May the ground wire be used to carry current to the light?",B.cZs,1,"The equipment ground is only for safety.")
B.d6a=w(["Yes","No: never assume it does","Only new houses"],x.s)
B.fcF=new A.v9("Does every switch box have a neutral?",B.d6a,1,"Many switch boxes have no neutral. Smart switches need to be chosen for that.")
B.drZ=w([B.fcL,B.fcM,B.fcF],x.W)
B.djA=w(["Yes","No: the wires, the ground and the support must be right","Only with a switch"],x.s)
B.fcJ=new A.v9("Does a light that turns on prove the fixture is wired safely?",B.djA,1,"A fixture can light up with an unsafe connection.")
B.diD=w(["Its wires","A box or mount rated for its weight","Tape"],x.s)
B.fcN=new A.v9("A fixture must hang from:",B.diD,1,"The box carries the weight. The wires never do.")
B.d6A=w([B.fcJ,B.fcN],x.W)
B.d7E=w(["Any ceiling box","Rated for a fan","Plastic only"],x.s)
B.fcH=new A.v9("A ceiling fan needs a box that is:",B.d7E,1,"A fan shakes and is heavy. A plain light box can let it fall.")
B.dmC=w(["Yes","No: support, ground and wiring must all be right","Yes if it is quiet"],x.s)
B.fcG=new A.v9("The fan spins. Is the installation safe?",B.dmC,1,"A spinning fan says nothing about the box, the ground or the connections.")
B.d6T=w([B.fcH,B.fcG],x.W)
B.d2x=w(["LINE","LOAD","Either"],x.s)
B.fcD=new A.v9("On a GFCI, power from the breaker goes on:",B.d2x,0,"LINE is the supply. LOAD feeds outlets further down the line.")
B.cNy=w([B.fcD],x.W)
B.aGc=new C.bw(B.ecu,[B.dcx,B.drZ,B.d6A,B.d6T,B.cNy],C.av("bw<n,ai<v9>>"))
B.ed6={house2:0,bighouse:1,shop:2,billboard:3,crate:4,car:5,tree:6,bench:7,tower:8,hq:9,store:10,gasstation:11,cornersign:12}
B.dxO=new C.bw(B.ed6,[40,80,70,15,4,25,5,4,120,200,90,90,30],C.av("bw<n,H>"))
B.bG9=new A.uu("The living room has no power at all.","The living room breaker is sitting in the middle (orange). It has tripped. Flip it fully OFF and ON again, by hand.","hand","Breaker reset. The living room has power again.",72,0,"")
B.bGj=new A.uu("There is no hot water.","The water heater breaker has tripped (orange). Reset it by hand.","hand","Breaker reset. The water heater is heating again.",75,0,"")
B.bGg=new A.uu("Water is dripping under the kitchen sink.","The slip nut on the P-trap is loose and the joint drips. Tighten it with the wrench.","wrench","Slip nut tightened. The drip stopped.",87,0,"")
B.bG8=new A.uu("There is a wet spot on the wall behind the kitchen.","A crimped joint in the hot water line is leaking. A crimp joint is squeezed with a crimping tool, not tightened with a wrench.","crimper","The joint is crimped again and it does not leak.",96,0,"")
B.bGd=new A.uu("The outlet by the sofa does not work, but the lights do.","The tester finds power at the box but the outlet is dead: a screw on the outlet has come loose. Turn the breaker off first, then tighten the screws with the screwdriver.","screwdriver","You tightened the loose screw. The outlet works again.",81,72,"Turn the living room breaker OFF first.")
B.bGa=new A.uu("The living room light flickers.","A wire nut in the light box has worked loose. Turn the breaker off, then twist the wire nut tight with the pliers.","pliers","You twisted the wire nut tight. The light is steady.",83,72,"Turn the living room breaker OFF first.")
B.bGb=new A.uu("The kitchen outlet sparks and smells burnt.","The outlet has burnt. Turn the breaker off and replace it with a new outlet.","newoutlet","New outlet fitted. No more sparks.",84,73,"Turn the kitchen breaker OFF first.")
B.bGh=new A.uu("The kitchen outlets are dead.","The GFCI outlet has tripped. Press its RESET button by hand.","hand","You pressed RESET. The kitchen outlets work.",84,0,"")
B.bGc=new A.uu("The toilet keeps running.","The rubber flapper in the tank no longer seals, so water leaks into the bowl all the time. Replace the flapper.","flapper","New flapper fitted. The toilet stops running.",88,0,"")
B.bGf=new A.uu("The kitchen faucet drips.","The faucet washer is worn. Tighten the packing nut with the wrench, then check.","wrench","The faucet is sealed. No more drips.",85,0,"")
B.bGe=new A.uu("There is a hole in the wall.","A hole in the drywall. Stick a drywall patch over it, then tape, mud, sand and paint it.","patch","Patch fitted. Now it only needs mud, sanding and paint.",95,0,"")
B.bGi=new A.uu("The kitchen sink drains very slowly.","The drain is clogged. Use the plunger.","plunger","The clog is gone. The sink drains fast.",94,0,"")
B.wz=new C.du([B.a0k,B.bG9,B.a0l,B.bGj,B.NO,B.bGg,B.NP,B.bG8,B.alN,B.bGd,B.a0o,B.bGa,B.a0p,B.bGb,B.a0q,B.bGh,B.a0r,B.bGc,B.a0s,B.bGf,B.a0m,B.bGe,B.a0n,B.bGi],C.av("du<rf,uu>"))
B.eeC={duo:0,line3:1,far3:2,skyline:3,lines6:4}
B.eCL=new C.z(D.a2U,0)
B.eQ8=new C.z(A1.ar9,1)
B.cpT=w([2,0,1],x.t)
B.exz=new C.z(B.cpT,2)
B.c5p=w([0,1,2,3],x.t)
B.eP8=new C.z(B.c5p,0)
B.dkF=w([0,1,2,5,4,3],x.t)
B.eFS=new C.z(B.dkF,1)
B.dy3=new C.bw(B.eeC,[B.eCL,B.eQ8,B.exz,B.eP8,B.eFS],C.av("bw<n,+(ai<H>,H)>"))
B.ee6={michelle:0}
B.dy4=new C.bw(B.ee6,[0.55],x.e)
B.S2=new C.bw(D.hO,[],C.av("bw<H,cW>"))
B.Ik=new C.bw(D.hO,[],C.av("bw<H,n>"))
B.dyk=new C.du([23,"neutral",21,"hot1",22,"hot2"],x.v)
B.dym=new C.du([25,"ground",21,"feed",22,"loadA",24,"loadB"],x.v)
B.edF={tail:0,trap:1,arm:2}
B.dyo=new C.bw(B.edF,["Tailpiece","P-trap","Trap arm"],x.l)
B.aIQ={xbot:0,michelle:1,soldier:2,human:3}
B.aGq=new C.bw(B.aIQ,["\ud83e\udd16 X Bot","\ud83d\udc83 Dancer","\ud83e\ude96 Soldier","\ud83d\ude42 Person"],x.l)
B.aeG=new C.u(1,0.9137254901960784,0.9215686274509803,0.9372549019607843,D.q)
B.bks=new C.u(1,0.8549019607843137,0.8666666666666667,0.8901960784313725,D.q)
B.T8=new A.tH(B.aeG,E.ae9,B.aeG,B.bks,"xbot",!1,0,1)
B.bmq=new C.u(1,0.0784313725490196,0.047058823529411764,0.03137254901960784,D.q)
B.bcC=new C.u(1,0.9607843137254902,0.7725490196078432,0.09411764705882353,D.q)
B.ep2=new A.tH(B.ai4,B.bmq,D.dv,B.bcC,"michelle",!0,2,1)
B.brk=new C.u(1,0.8509803921568627,0.6470588235294118,0.48627450980392156,D.q)
B.bqe=new C.u(1,0.3568627450980392,0.4196078431372549,0.22745098039215686,D.q)
B.bf2=new C.u(1,0.5411764705882353,0.4823529411764706,0.3333333333333333,D.q)
B.J7=new A.tH(B.brk,D.Mb,B.bqe,B.bf2,"soldier",!1,0,1.04)
B.a7t=new A.tH(B.aed,B.M1,B.aid,B.Lu,"human",!1,0,1)
B.aGr=new C.bw(B.aIQ,[B.T8,B.ep2,B.J7,B.a7t],C.av("bw<n,tH>"))
B.een={soldier:0}
B.dyG=new C.bw(B.een,[3.141592653589793],x.e)
B.h8N=new A.q(0,0,-1.2)
B.ebn=new A.cW("Electrical box","The box is ready. Pull a cable to it, then wire a device.",B.h8N,9)
B.dyJ=new C.du([3,B.ebn],C.av("du<H,cW>"))
B.aIJ={inspect:0,hand:1,screwdriver:2,pliers:3,wrench:4,crimper:5,plunger:6,flapper:7,newoutlet:8,patch:9}
B.S4=new C.bw(B.aIJ,["Look and test","Hand","Screwdriver","Pliers","Wrench","Crimp tool","Plunger","New flapper","New outlet","Drywall patch"],x.l)
B.bLj=new C.a0(63072,"MaterialIcons",!1)
B.dyN=new C.bw(B.aIJ,[D.fl,B.aov,A0.GU,D.GJ,D.p6,B.bLj,A8.a26,D.qr,B.OG,Z.wa],C.av("bw<n,a0>"))
B.dzs=new A.i8(18,50,0,20)
B.dzF=new A.i8(-126,126,-66,5)
B.dzM=new A.i8(-4,16,0,24)
B.dC6=new A.aoy(null)
B.aHr=new A.a71(null)
B.dIR=new A.apU(null)
B.dM7=new A.IS(!1,"city","",null)
B.aHB=new A.IS(!1,"","",null)
B.e6N=new A.Of(!0,null,!0,!1,null)
B.hc_=new A.q(16,2.6,0)
B.eb6=new A.cW("Wall drain","The pipe stub that comes out of the wall. The trap arm slides into it.",B.hc_,8)
B.fXb=new A.q(0,3,-6)
B.eb7=new A.cW("Wall","The copper supply pipes come out of the wall here.",B.fXb,24)
B.h87=new A.q(8.2,1,-7)
B.eb8=new A.cW("Toilet","The tank fills from the cold supply on the wall. The bowl drains into the white pipe in the floor.",B.h87,7)
B.fVQ=new A.q(0,0,40)
B.eb9=new A.cW("The room","A room to build from bare studs to finished, working electrics. The walls hold the cable, the boxes and the devices.",B.fVQ,190)
B.h5_=new A.q(-2.4,11.5,-3.6)
B.eba=new A.cW("Hot faucet inlet","The threaded tail under the faucet where the hot supply hose screws on.",B.h5_,7)
B.h_k=new A.q(-3.6,4,-7.8)
B.ebb=new A.cW("Light switch","Controls the ceiling light. Tap Open lesson to wire one.",B.h_k,4.5)
B.h6F=new A.q(0,0.5,2)
B.ebc=new A.cW("Voltage tester","A tester that glows when it touches live power.",B.h6F,6)
B.ebd=new A.cW("Pipe joint","A crimped joint in the hot water line.",B.aWg,4)
B.h5p=new A.q(0,-0.2,0.2)
B.ebe=new A.cW("Cover plate","The plate covers the box and the edges of the drywall so nobody touches the wires.",B.h5p,8)
B.haV=new A.q(-4.6,0.5,-3.4)
B.ebf=new A.cW("Hot shut-off valve","The angle stop valve on the hot pipe. Turn the handle to stop the water to the faucet without shutting off the whole house. Hot is always on the left.",B.haV,8)
B.Vn=new A.q(0,-0.3,3.2)
B.ebg=new A.cW("White wire nut: NEUTRAL","Twist the house white wire and the fixture white wire together under this cap.",B.Vn,6)
B.h6q=new A.q(4.6,0.5,-3.4)
B.ebh=new A.cW("Cold shut-off valve","The angle stop valve on the cold pipe. Cold is always on the right.",B.h6q,8)
B.fZt=new A.q(2.4,11.5,-3.6)
B.ebi=new A.cW("Cold faucet inlet","The threaded tail under the faucet where the cold supply hose screws on.",B.fZt,7)
B.hd3=new A.q(0.8,-0.8,1.2)
B.ebj=new A.cW("Black wire to the light","This black wire carries power to the light once the switch is on. It goes on the other brass screw.",B.hd3,7)
B.h4W=new A.q(10.05,5.2,-7.5)
B.ebk=new A.cW("Water heater breaker","A big circuit for the water heater. It is ON.",B.h4W,3.5)
B.aVe=new A.q(0,40,0)
B.ebl=new A.cW("Back wall",y.o,B.aVe,140)
B.h80=new A.q(3,3.8,-7.4)
B.ebm=new A.cW("Kitchen faucet","Hot on the left, cold on the right. Tap Open lesson to connect the supply hoses.",B.h80,4.5)
B.Ao=new A.q(0,6,0)
B.ebo=new A.cW("Tailpiece","The straight pipe that hangs from the sink drain. Its bottom end is smooth so the slip nut can slide on and grip it.",B.Ao,10)
B.har=new A.q(-60,40,50)
B.ebp=new A.cW("Left wall",y.o,B.har,140)
B.h01=new A.q(3,1,0)
B.ebq=new A.cW("P-trap","The U-shaped bend. It always keeps a little water inside, and that water plug blocks sewer gas from coming back up into the house.",B.h01,11)
B.fWz=new A.q(0,20,5)
B.ebr=new A.cW("The room","A bare room with the water supply stubs and the drain stub already in the wall and floor.",B.fWz,120)
B.fXS=new A.q(0,-8,0)
B.ebs=new A.cW("Cabinet","The cabinet under the sink where the drain is built.",B.fXS,22)
B.fVO=new A.q(0,0,150)
B.ebt=new A.cW("Lawn","The grass. Walls, floors and the sky stay as they are, but you can add things to the garden with the Furniture button.",B.fVO,400)
B.fXt=new A.q(0,4,-8)
B.ebu=new A.cW("Wall framing","2x4 studs 16 inches apart. Pipes and cables run through holes drilled in the middle of the studs, never along the edge where a nail could hit them.",B.fXt,18)
B.aWw=new A.q(0,-0.2,5.1)
B.ebv=new A.cW("TEST and RESET buttons","Press TEST to make the GFCI trip. Press RESET to turn it back on. Test it once a month.",B.aWw,5)
B.aV9=new A.q(0,11,0)
B.ebw=new A.cW("Sink","The sink bowl and the counter. The drain flange at the bottom is where the tailpiece starts.",B.aV9,16)
B.dX=new A.q(0,0,0)
B.ebx=new A.cW("Drywall","The wall surface. A hole is cut in it for the electrical box.",B.dX,22)
B.h1l=new A.q(60,40,50)
B.eby=new A.cW("Right wall",y.o,B.h1l,140)
B.fWh=new A.q(0,14,-3)
B.ebz=new A.cW("Counter and sink","The faucet is mounted through a hole in the counter.",B.fWh,20)
B.h3A=new A.q(0,-1.9,5)
B.ebA=new A.cW("GREEN screw: GROUND",y.Z,B.h3A,5)
B.fXq=new A.q(0,47,-2)
B.ebB=new A.cW("Top and bottom plate","The horizontal 2x4s at the top and the bottom of the wall. The studs stand between them.",B.fXq,70)
B.fVU=new A.q(0,0,-8)
B.ebC=new A.cW("Wall","Behind the wall the drain pipe goes down to the sewer line.",B.fVU,22)
B.fWt=new A.q(0,19,-3)
B.ebD=new A.cW("Faucet","The faucet with hot on the left (red) and cold on the right (blue).",B.fWt,14)
B.h1W=new A.q(3.5,2,-7.2)
B.ebE=new A.cW("Kitchen counter and cabinet","The cabinet under the sink is where the drain and the shut-off valves live.",B.h1W,9)
B.h42=new A.q(10.05,5.7,-7.5)
B.ebF=new A.cW("Kitchen breaker","Protects the kitchen outlets. It is ON.",B.h42,3.5)
B.h58=new A.q(4,6,-2.5)
B.ebG=new A.cW("Cold supply hose","A braided steel hose with a rubber liner and a blue band.",B.h58,9)
B.h6A=new A.q(-1,0.6,4.3)
B.ebH=new A.cW("SILVER screw: NEUTRAL side",y.B,B.h6A,5)
B.aaC=new A.q(0,3.7,0)
B.ebI=new A.cW("Slip nut","A big plastic nut. Slide it on the pipe first, then the washer, then join the pieces and hand tighten. A rubber washer inside makes the seal.",B.aaC,7)
B.Vm=new A.q(0,-1,-0.6)
B.ebJ=new A.cW("Wire nut","A twist-on cap that joins wires safely. The two white wires are joined here because a switch only cuts the hot wire.",B.Vm,5)
B.h5g=new A.q(-1.5,-0.3,3.2)
B.ebK=new A.cW("Black wire nut: HOT","Twist the house black wire and the fixture black wire together under this cap.",B.h5g,6)
B.h41=new A.q(-1.9,0,-2)
B.ebL=new A.cW("Wood stud","The 2x4 frame inside the wall. The electrical box is nailed or screwed to a stud so it cannot move.",B.h41,16)
B.h8L=new A.q(-1,-0.8,4.3)
B.ebM=new A.cW("SILVER screw: NEUTRAL side",y.B,B.h8L,5)
B.hco=new A.q(6,3,-7.8)
B.ebN=new A.cW("Water and drain pipes","Red is hot water, blue is cold water (PEX tubing). The white pipes are drains. They slope down so the waste flows away.",B.hco,14)
B.h8Q=new A.q(1,0.6,4.3)
B.ebO=new A.cW("BRASS screw: HOT side",y.C,B.h8Q,5)
B.h9j=new A.q(0,-0.2,4.9)
B.ebP=new A.cW("Mounting strap (yoke)","The metal strap with two screw slots. Long screws through the ears hold the device in the box.",B.h9j,7)
B.hd0=new A.q(9.55,4.7,-7.5)
B.ebQ=new A.cW("Spare breaker","A spare circuit.",B.hd0,3.5)
B.fWA=new A.q(0,20,8)
B.ebR=new A.cW("Vanity and counter","The cabinet that holds the sink. The pipes live inside it.",B.fWA,70)
B.hbB=new A.q(-3.2,1.3,-7.8)
B.ebS=new A.cW("Living room outlet","A standard outlet. Tap Open lesson to wire one in 3D.",B.hbB,4.5)
B.h9m=new A.q(1.5,-0.3,3.2)
B.ebT=new A.cW("Green ground connection","Join the bare copper house ground wire to the green fixture ground wire.",B.h9m,6)
B.h3J=new A.q(12,2.6,0)
B.ebU=new A.cW("Trap arm","The pipe that carries the waste water from the trap into the wall. It must slope down toward the wall, about 1/4 inch per foot.",B.h3J,9)
B.h67=new A.q(0,6.5,-7.8)
B.ebV=new A.cW("Electrical cables","Cables run from the breaker panel to every outlet, switch and light. Yellow is 12 gauge for 20 amps. White is 14 gauge for 15 amps.",B.h67,16)
B.h6U=new A.q(11.2,2.3,-6)
B.ebW=new A.cW("Water heater","Heats the water. The cold line goes in at the top and the hot line comes out at the top.",B.h6U,9)
B.h7B=new A.q(9.55,5.2,-7.5)
B.ebX=new A.cW("Bathroom breaker","Protects the bathroom. It is ON.",B.h7B,3.5)
B.h49=new A.q(5.2,3.9,-7.8)
B.ebY=new A.cW("Kitchen GFCI outlet","Outlets near water must be GFCI. Tap Open lesson to wire one.",B.h49,4.5)
B.fXl=new A.q(0,40,-3)
B.ebZ=new A.cW("Electrical cable","Yellow 12/2 cable with ground: it carries power from the breaker panel through the holes in the studs to each box.",B.fXl,80)
B.h4T=new A.q(-8.4,1.2,-6.4)
B.ec_=new A.cW("Sofa","Just furniture, to show the size of the room.",B.h4T,10)
B.ec0=new A.cW("Outlet face","Two outlets. The short slot is hot, the long slot is neutral, and the round hole is ground.",B.aWw,6)
B.h3i=new A.q(0,4,-7.8)
B.ec1=new A.cW("Wall","The drywall of the back wall.",B.h3i,16)
B.hbG=new A.q(0,0,0.6)
B.ec2=new A.cW("Canopy","The round cover that hides the box and the wire connections against the ceiling.",B.hbG,8)
B.ec3=new A.cW("Concrete slab","The foundation. It carries the whole weight of the house. Plumbing drains are placed before it is poured.",B.dX,30)
B.fXe=new A.q(0,40,12)
B.ec4=new A.cW("Front door","Tap the door to go inside the house.",B.fXe,260)
B.aaE=new A.q(8.9,2.6,0)
B.ec5=new A.cW("Slip nut","Hand tighten it, then about a quarter turn with pliers. Over-tightening cracks the plastic.",B.aaE,7)
B.h7z=new A.q(1,-0.8,4.3)
B.ec6=new A.cW("BRASS screw: HOT side",y.C,B.h7z,5)
B.h30=new A.q(0.6,1.5,-1.8)
B.ec7=new A.cW("Cable to the light (LOAD)","This cable carries the switched power on to the light. The black wire here only has power when the switch is on.",B.h30,8)
B.h3v=new A.q(9.8,5,-7.5)
B.ec8=new A.cW("Breaker panel","The main electrical panel. Each breaker protects one circuit. A breaker that is in the middle position has TRIPPED. Flip it fully OFF and then ON to reset.",B.h3v,6)
B.h5d=new A.q(-4,6,-2.5)
B.ec9=new A.cW("Hot supply hose","A braided steel hose with a rubber liner and a red band. Hand tighten the nuts, then a quarter turn with a wrench.",B.h5d,9)
B.egS=new C.t(66,66)
B.bSd=new C.ae(D.ed,20,F.fz,null,null,null)
B.ekq=new C.D(D.vZ,B.bSd,null)
B.ftg=new C.F(!0,D.my,null,null,null,null,12.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fzR=new C.y("A circuit that is not CORRECT and safe can never pass, even if the light or fan would have worked.",null,B.ftg,null,null,null,null,null,null,null,null,null)
B.ekB=new C.D(D.hY,B.fzR,null)
B.fJQ=new C.y("Sick people can stay in a hospital bed. Treat each patient before their care runs out, and they go home better.",null,D.UQ,null,D.L,null,null,null,null,null,null,null)
B.ekG=new C.D(D.al7,B.fJQ,null)
B.bRp=new C.ae(D.ed,18,D.bj,null,null,null)
B.ekX=new C.D(D.fB,B.bRp,null)
B.ekZ=new C.D(D.fB,G.aq1,null)
B.eoW=new A.y0(0,0,18,0,!1,!1,!1,!1,!1,0,!1,!1,"","",-1,0,-1,0)
B.eoX=new A.y0(0,100,120,-2.2,!1,!1,!1,!1,!1,0,!1,!1,"","",-1,0,-1,0)
B.eoY=new A.y0(0,40,150,0.5,!1,!1,!1,!1,!1,0,!1,!1,"","",-1,0,-1,0)
B.eoZ=new A.y0(0,0,0,0,!1,!1,!1,!1,!1,0,!1,!1,"","",-1,0,-1,0)
B.ep_=new A.y0(0,-80,50,0,!1,!1,!1,!1,!1,0,!1,!1,"","",-1,0,-1,0)
B.ep0=new A.y0(0,0,56,0,!1,!1,!1,!1,!1,0,!1,!1,"","",-1,0,-1,0)
B.era=new A.a9y(null,null)
B.biw=new C.u(1,0.30980392156862746,0.7019607843137254,0.9647058823529412,D.q)
B.bqU=new C.u(1,0.11372549019607843,0.37254901960784315,0.7686274509803922,D.q)
B.bnC=new C.u(1,0.043137254901960784,0.16470588235294117,0.4196078431372549,D.q)
B.d0M=w([B.biw,B.bqU,B.bnC],x.O)
B.erU=new C.c1(A6.xh,0.5,D.x,null,0,B.d0M,null,null)
B.bra=new C.u(1,0.8392156862745098,0.9019607843137255,0.9176470588235294,D.q)
B.esB=new C.z(B.bra,B.XV)
B.esK=new C.z(0,120)
B.esL=new C.z(0,300)
B.et_=new C.z(B.oR,B.dX)
B.euB=new C.z(64,2.4)
B.ewg=new C.z("LOAD (taped)",D.d1)
B.bf0=new C.u(1,0.9450980392156862,0.8901960784313725,0.7764705882352941,D.q)
B.bic=new C.u(1,0.8470588235294118,0.7686274509803922,0.6274509803921569,D.q)
B.exD=new C.z(B.bf0,B.bic)
B.diG=w([D.aw,D.cb,D.aw],x.O)
B.ey1=new C.z(-40,B.diG)
B.ezt=new C.z(63,-2.4)
B.bhb=new C.u(1,0.8901960784313725,0.9254901960784314,0.9607843137254902,D.q)
B.bc_=new C.u(1,0.7372549019607844,0.7843137254901961,0.8392156862745098,D.q)
B.eA0=new C.z(B.bhb,B.bc_)
B.eAh=new C.z(51,B.aeE)
B.bdc=new C.u(1,0.9137254901960784,0.8705882352941177,0.7607843137254902,D.q)
B.eCZ=new C.z(B.bdc,B.Br)
B.bdA=new C.u(1,0.9137254901960784,0.9372549019607843,0.9490196078431372,D.q)
B.bea=new C.u(1,0.8509803921568627,0.8941176470588236,0.9098039215686274,D.q)
B.eDO=new C.z(B.bdA,B.bea)
B.bmR=new C.u(1,0.9058823529411765,0.8235294117647058,0.8156862745098039,D.q)
B.beb=new C.u(1,0.7058823529411765,0.7176470588235294,0.7411764705882353,D.q)
B.eEN=new C.z(B.bmR,B.beb)
B.bbn=new C.u(1,0.7647058823529411,0.8117647058823529,0.9019607843137255,D.q)
B.eFD=new C.z(B.bbn,B.ai5)
B.bll=new C.u(1,0.3568627450980392,0.39215686274509803,0.4392156862745098,D.q)
B.eHq=new C.z("SILVER \xb7 NEUTRAL",B.bll)
B.hbR=new A.q(-1.5,0,0)
B.eHz=new C.z(B.LQ,B.hbR)
B.eJ5=new C.z(52,B.AZ)
B.bhO=new C.u(1,0.12156862745098039,0.47843137254901963,0.22745098039215686,D.q)
B.eJY=new C.z("GREEN \xb7 GROUND",B.bhO)
B.bq0=new C.u(1,0.9450980392156862,0.9098039215686274,0.8235294117647058,D.q)
B.eKF=new C.z(B.bq0,B.Br)
B.eKW=new C.z("main","Main water valve")
B.cNk=w([D.vE,D.bG,D.be],x.O)
B.eNe=new C.z(40,B.cNk)
B.hd4=new A.q(1.5,0,0)
B.eP0=new C.z(B.Yv,B.hd4)
B.bdR=new C.u(1,0.9529411764705882,0.9411764705882353,0.9098039215686274,D.q)
B.bkS=new C.u(1,0.4823529411764706,0.5294117647058824,0.5803921568627451,D.q)
B.ePI=new C.z(B.bdR,B.bkS)
B.eQG=new C.z(B.hV,B.Xm)
B.bgR=new C.u(1,0.9529411764705882,0.9019607843137255,0.7843137254901961,D.q)
B.bnJ=new C.u(1,0.788235294117647,0.7098039215686275,0.5490196078431373,D.q)
B.eQZ=new C.z(B.bgR,B.bnJ)
B.bdr=new C.u(1,0.6039215686274509,0.4196078431372549,0.047058823529411764,D.q)
B.eRt=new C.z("BRASS \xb7 HOT",B.bdr)
B.eRV=new C.z(53,B.Yv)
B.a7W=new C.bk(180,40,215)
B.a7X=new C.bk(215,40,345)
B.a7Y=new C.bk(60,60,90)
B.eSF=new C.bk(61,-4.6,B.tG)
B.a7Z=new C.bk(95,40,185)
B.eTz=new C.bk("Turn the main water ON to test for leaks: pick Hand and tap the main valve.","hand","main")
B.eUr=new C.bk(62,4.6,B.o_)
B.eUB=new C.bk("The water must be OFF before you cut into the pipes: pick Hand and tap the main valve.","hand","main")
B.eV2=new C.bk("Fit the parts in the order of the job list.","",null)
B.eVr=new C.bk("Looks good. Watch for leaks; if none, the job is done.","",null)
B.eWh=new C.cw([0,17.1,16.4,5.8])
B.eWk=new C.cw([0,-0.1,16.4,4.2])
B.eXn=new C.cw([15.6,9,14.8,22])
B.eXr=new C.cw([-15.6,9,14.8,22])
B.eXA=new C.ea([72,60,44,B.M2,B.M5])
B.bqQ=new C.u(1,0.8941176470588236,0.6901960784313725,0.47843137254901963,D.q)
B.eXR=new C.ea([124,70,44,B.bqQ,B.q2])
B.eXY=new C.ea([90,64,46,B.agg,D.hf])
B.eYg=new C.ea([110,70,62,D.bN,D.al])
B.eYl=new C.ea([84,60,40,B.agj,B.M5])
B.fyu=new C.y("\u260e",null,D.py,null,null,null,null,null,null,null,null,null)
B.ba9=new C.qt(B.fyu,D.aw,null,24,null)
B.fAZ=new C.y("City office",null,D.dd,null,null,null,null,null,null,null,null,null)
B.d9W=w([B.ba9,D.bd,B.fAZ],x.p)
B.f07=new C.cd(D.aM,D.e,D.i,D.m,null,D.p,null,0,B.d9W,null)
B.bSY=new C.ae(D.OD,26,D.c5,null,null,null)
B.fOf=new C.y("Hallway tour",null,D.hD,null,null,null,null,null,null,null,null,null)
B.fzs=new C.y("Just the hall and its big TVs, 45 seconds",null,D.vg,null,null,null,null,null,null,null,null,null)
B.drL=w([B.fOf,B.fzs],x.p)
B.bsE=new C.fi(D.ah,D.e,D.i,D.E,null,D.p,null,0,B.drL,null)
B.bES=new C.bA(1,D.bc,B.bsE,null)
B.cXD=w([B.bSY,D.bd,B.bES,A_.OU],x.p)
B.f0a=new C.cd(D.aM,D.e,D.i,D.m,null,D.p,null,0,B.cXD,null)
B.bQD=new C.ae(D.i1,30,D.c,null,null,null)
B.fQf=new C.y("Play the tour",null,D.k4,null,null,null,null,null,null,null,null,null)
B.d5B=w([B.bQD,D.bo,B.fQf],x.p)
B.f0g=new C.cd(D.aM,D.b8,D.i,D.m,null,D.p,null,0,B.d5B,null)
B.v3=new A.JD(0,"correct")
B.aPj=new A.JD(1,"incorrect")
B.rY=new A.JD(2,"unsafe")
B.TC=new A.JD(3,"incomplete")
B.f0u=new A.JD(4,"requiresVerification")
B.ecG={hospital:0,shop:1,school:2,firestation:3,house2:4,bighouse:5,store:6,gasstation:7,dmv:8,tower:9,hq:10}
B.aPV=new C.dD(B.ecG,11,x.M)
B.ecq={wardrobe:0,shelf:1,lamp:2,console:3}
B.f1S=new C.dD(B.ecq,4,x.M)
B.aPZ=new C.jn([1,2,3,4,5],C.av("jn<H>"))
B.eca={house2:0,bighouse:1,shop:2,hospital:3,school:4,firestation:5,store:6,gasstation:7,tower:8,hq:9,dmv:10}
B.f24=new C.dD(B.eca,11,x.M)
B.eeq={billboard:0,bighouse:1,townsign:2,cornersign:3,adboard:4,tower:5,hq:6,store:7,gasstation:8,ubstation:9,dmv:10}
B.f27=new C.dD(B.eeq,11,x.M)
B.aQ3=new C.dD(D.hO,0,C.av("dD<H>"))
B.f41=new C.au(0,36)
B.f4b=new C.au(126,84)
B.f58=new C.a7(110,64,null,null)
B.f59=new C.a7(120,70,null,null)
B.f5f=new C.a7(270,64,null,null)
B.f5g=new C.a7(270,70,null,null)
B.JL=new A.FG(0,"hot")
B.JM=new A.FG(1,"neutral")
B.JN=new A.FG(2,"ground")
B.aRJ=new A.FG(3,"load")
B.fdD=new C.F(!0,D.c,null,null,null,null,12.5,null,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fef=new C.F(!0,D.c,null,null,null,null,13.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fek=new C.F(!0,D.c,null,null,null,null,16,D.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,K.CN,null,null,null)
B.ffy=new C.F(!0,D.aB,null,null,null,null,14,D.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.aSa=new C.F(!0,D.aB,null,null,null,null,11.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fg4=new C.F(!0,D.bG,null,null,null,null,12,D.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fge=new C.F(!0,D.ad,null,null,null,null,13.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fgE=new C.F(!0,D.aC,null,null,null,null,12.5,D.u,null,2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fgO=new C.F(!0,D.aR,null,null,null,null,11.5,null,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fh_=new C.F(!0,D.bG,null,null,null,null,15,D.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fhg=new C.F(!0,D.c,null,null,null,null,12.5,D.P,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.aSp=new C.F(!0,D.ad,null,null,null,null,12,D.P,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fic=new C.F(!0,D.c,null,null,null,null,13,D.P,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.a9t=new C.F(!0,D.ad,null,null,null,null,null,null,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fiF=new C.F(!0,D.bG,null,null,null,null,13,D.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fjk=new C.F(!0,D.aB,null,null,null,null,9.5,null,null,null,null,null,1.15,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fjB=new C.F(!0,D.ad,null,null,null,null,12.5,null,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fjC=new C.F(!0,D.fh,null,null,null,null,12,null,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fkd=new C.F(!0,null,null,null,null,null,9,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.JX=new C.F(!0,D.aC,null,null,null,null,12.5,D.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fkI=new C.F(!0,D.c,null,null,null,null,11.5,D.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.aSK=new C.F(!0,D.c,null,null,null,null,14,null,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fl0=new C.F(!0,D.bL,null,null,null,null,13,D.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fm0=new C.F(!0,D.my,null,null,null,null,12,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fm6=new C.F(!0,D.ad,null,null,null,null,13.5,null,D.cD,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fmh=new C.F(!0,D.fh,null,null,null,null,11.5,D.P,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fmm=new C.F(!0,D.eG,null,null,null,null,14,D.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fmU=new C.F(!0,D.bG,null,null,null,null,18,D.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fnr=new C.F(!0,D.aR,null,null,null,null,12,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.foc=new C.F(!0,D.bG,null,null,null,null,null,D.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.aTc=new C.F(!0,D.ad,null,null,null,null,13.5,null,null,null,null,null,1.5,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fp7=new C.F(!0,D.aC,null,null,null,null,null,D.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fpA=new C.F(!0,D.aB,null,null,null,null,11,D.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.frY=new C.F(!0,D.bG,null,null,null,null,44,D.u,null,2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.aTH=new C.F(!0,D.c,null,null,null,null,13.5,D.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fsn=new C.F(!0,D.aR,null,null,null,null,11.5,null,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fsV=new C.F(!0,D.b2,null,null,null,null,14.5,D.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.ft4=new C.F(!0,F.fz,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.ftl=new C.F(!0,D.fh,null,null,null,null,12,D.P,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.ftG=new C.y("Wire guide (U.S. houses)",null,D.dd,null,null,null,null,null,null,null,null,null)
B.ftT=new C.y("Which wall?",null,D.UZ,null,null,null,null,null,null,null,null,null)
B.feu=new C.F(!0,D.w,null,null,null,null,12,D.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fud=new C.y("Open the 3D lesson",null,B.feu,null,null,null,null,null,null,null,null,null)
B.fv_=new C.y("Never rely on color alone. With the power off, prove what each wire does with a tester and the device diagram. A licensed electrician does real house wiring.",null,L.a9v,null,null,null,null,null,null,null,null,null)
B.fv9=new C.y("Tip: pick a part, then tap its glowing spot. Joints on hoses, bolts and the drain are only loose: pick the Wrench and tap them. Use your Hand on the main water valve: turn the water OFF before you cut into a pipe, and ON to test for leaks.",null,D.Uy,null,null,null,null,null,null,null,null,null)
B.fvu=new C.y("Answer, then submit. Nothing is marked until you submit.",null,H.vb,null,null,null,null,null,null,null,null,null)
B.fwj=new C.y("You used all three lives. Electricity does not give second chances, so in real life you turn the breaker OFF and test the wires every single time. Try the job again.",null,D.wW,null,null,null,null,null,null,null,null,null)
B.fwA=new C.y("A different house",null,null,null,null,null,null,null,null,null,null,null)
B.fx1=new C.y("\ud83c\udf5e",null,D.wU,null,null,null,null,null,null,null,null,null)
B.fx2=new C.y("Show me",null,D.ml,null,null,null,null,null,null,null,null,null)
B.fxi=new C.y("Connect it to...",null,D.lN,null,null,null,null,null,null,null,null,null)
B.fxt=new C.y("Start this job again",null,null,null,null,null,null,null,null,null,null,null)
B.fop=new C.F(!0,D.cs,null,null,null,null,12.5,D.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fxM=new C.y("Give back",null,B.fop,null,null,null,null,null,null,null,null,null)
B.fyr=new C.y("Edit your billboard",null,D.dd,null,null,null,null,null,null,null,null,null)
B.fzz=new C.y("L is the lobby. On every level there is a balcony with a view of the town.",null,H.E2,null,null,null,null,null,null,null,null,null)
B.fzO=new C.y("Submit the test",null,null,null,null,null,null,null,null,null,null,null)
B.fAb=new C.y("\ud83e\udeaa",null,D.wU,null,null,null,null,null,null,null,null,null)
B.fAo=new C.y("Start from a bare house (wire everything)",null,null,null,null,null,null,null,null,null,null,null)
B.fB6=new C.y("THE RACE",null,P.t8,null,null,null,null,null,null,null,null,null)
B.fBb=new C.y("What should the drone show you?",null,D.a9m,null,null,null,null,null,null,null,null,null)
B.fBP=new C.y("Diagram lessons",null,null,null,null,null,null,null,null,null,null,null)
B.fBT=new C.y("Go through",null,null,null,null,null,null,null,null,null,null,null)
B.fCH=new C.y("The customer says\u2026",null,D.dd,null,null,null,null,null,null,null,null,null)
B.fDd=new C.y("Submit for inspection",null,null,null,null,null,null,null,null,null,null,null)
B.fDr=new C.y("What the house needs",null,D.dd,null,null,null,null,null,null,null,null,null)
B.fDD=new C.y("Next job",null,null,null,null,null,null,null,null,null,null,null)
B.fg_=new C.F(!0,D.w,null,null,null,null,14,D.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fDL=new C.y("Go in",null,B.fg_,null,null,null,null,null,null,null,null,null)
B.fpt=new C.F(!0,D.aC,null,null,null,null,22,D.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fDP=new C.y("My House",null,B.fpt,null,D.L,null,null,null,null,null,null,null)
B.fDW=new C.y("New job",null,null,null,null,null,null,null,null,null,null,null)
B.aSP=new C.F(!0,D.cs,null,null,null,null,null,D.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fE2=new C.y("Job over",null,B.aSP,null,null,null,null,null,null,null,null,null)
B.fEi=new C.y("Three shocks. In real life you switch the breaker off and test the wires, every time. Try another call.",null,D.wW,null,null,null,null,null,null,null,null,null)
B.fEo=new C.y("Learn the trades",null,Q.t6,null,null,null,null,null,null,null,null,null)
B.fEY=new C.y("Practice mode: no hints. You will only hear from me when something is wrong.",null,H.E2,null,null,null,null,null,null,null,null,null)
B.fFb=new C.y("New call",null,null,null,null,null,null,null,null,null,null,null)
B.fFg=new C.y("Job done! \ud83c\udf89",null,L.K2,null,null,null,null,null,null,null,null,null)
B.fFk=new C.y("Wire guide",null,null,null,null,null,null,null,null,null,null,null)
B.fGt=new C.y("Next call",null,null,null,null,null,null,null,null,null,null,null)
B.fGR=new C.y("Plug in",null,D.dd,null,null,null,null,null,null,null,null,null)
B.fHg=new C.y("Look around",null,null,null,null,null,null,null,null,null,null,null)
B.fHB=new C.y("\ud83d\udef5",null,D.wT,null,null,null,null,null,null,null,null,null)
B.fHQ=new C.y("The customer wants:",null,D.UK,null,null,null,null,null,null,null,null,null)
B.fI0=new C.y('Tip: pick "Look and test" and tap things to find out what is wrong. Then pick the right tool. Turn the breaker off (hand) before you touch any wire.',null,D.Uy,null,null,null,null,null,null,null,null,null)
B.fl1=new C.F(!0,D.aB,null,null,null,null,11.5,D.H,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fIh=new C.y("INCOMING CALL",null,B.fl1,null,null,null,null,null,null,null,null,null)
B.fIn=new C.y("Elevator",null,D.fv,null,null,null,null,null,null,null,null,null)
B.fJo=new C.y("Deliveries",null,D.fv,null,null,null,null,null,null,null,null,null)
B.fJC=new C.y("Every connection is on the right terminal and every safety check passes.",null,D.t9,null,null,null,null,null,null,null,null,null)
B.fJL=new C.y("Message \xb7 now",null,D.va,null,null,null,null,null,null,null,null,null)
B.fKA=new C.y("5 bedrooms, 3 bathrooms and a garden. Walk in, look all round, fix what is wrong.",null,A5.Ut,null,D.L,null,null,null,null,null,null,null)
B.fKF=new C.y("Call over",null,B.aSP,null,null,null,null,null,null,null,null,null)
B.fKM=new C.y("\ud83d\udd12",null,Y.UL,null,null,null,null,null,null,null,null,null)
B.fKN=new C.y("\u23cf Unplug",null,F.Aa,null,null,null,null,null,null,null,null,null)
B.fKT=new C.y("The game is closed for now",null,D.mZ,null,D.L,null,null,null,null,null,null,null)
B.ffJ=new C.F(!0,D.ad,null,null,null,null,14.5,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fL5=new C.y("You missed 3 jobs in a row. The City office needs people who answer the phone and finish the job.",null,B.ffJ,null,D.L,null,null,null,null,null,null,null)
B.fL7=new C.y("A different call",null,null,null,null,null,null,null,null,null,null,null)
B.fLp=new C.y("One board on its own, or several boards standing apart.",null,H.vb,null,null,null,null,null,null,null,null,null)
B.fLA=new C.y("\ud83d\udecf\ufe0f",null,D.nH,null,null,null,null,null,null,null,null,null)
B.fM0=new C.y("Job complete! \ud83c\udf89",null,L.K2,null,null,null,null,null,null,null,null,null)
B.fMd=new C.y("OPEN ORDERS",null,P.t8,null,null,null,null,null,null,null,null,null)
B.fMx=new C.y("Colours",null,D.A9,null,null,null,null,null,null,null,null,null)
B.fMB=new C.y("How you are doing",null,D.hD,null,null,null,null,null,null,null,null,null)
B.fN8=new C.y("All fixed! \ud83c\udf89",null,L.K2,null,null,null,null,null,null,null,null,null)
B.fNc=new C.y("These are the usual U.S. house wiring colors. Colors are a hint, not proof: old work, switch loops and other countries differ. A real installer proves what each wire does with a tester, with the power off, and follows the device diagram.",null,A9.a9u,null,null,null,null,null,null,null,null,null)
B.fNl=new C.y("Test (marked on submit)",null,null,null,null,null,null,null,null,null,null,null)
B.fNy=new C.y("Messages",null,D.va,null,null,null,null,null,null,null,null,null)
B.aUi=new C.y("Stay",null,null,null,null,null,null,null,null,null,null,null)
B.fOk=new C.y("\ud83d\ude81",null,D.wT,null,null,null,null,null,null,null,null,null)
B.fOx=new C.y("Choose a level. A red one has an office with no power.",null,D.Af,null,null,null,null,null,null,null,null,null)
B.aUk=new C.y("A different job",null,null,null,null,null,null,null,null,null,null,null)
B.fPl=new C.y("It goes on the back wall, not wired yet. Tap the red one to wire it yourself.",null,H.vb,null,null,null,null,null,null,null,null,null)
B.fQh=new C.y("\ud83d\uded7",null,D.wT,null,null,null,null,null,null,null,null,null)
B.fQC=new C.y("\u26a1",null,D.px,null,null,null,null,null,null,null,null,null)
B.fR8=new C.y("Practice (instant feedback)",null,null,null,null,null,null,null,null,null,null,null)
B.fRd=new C.y("The job",null,D.dd,null,null,null,null,null,null,null,null,null)
B.fS7=new C.y("Stay in the room",null,null,null,null,null,null,null,null,null,null,null)
B.frn=new C.F(!0,F.fz,null,null,null,null,12,D.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fSo=new C.y("\ud83e\udea7 Billboards",null,B.frn,null,null,null,null,null,null,null,null,null)
B.fSu=new C.y("Choose a billboard",null,D.dd,null,null,null,null,null,null,null,null,null)
B.fSz=new C.y("Which sign?",null,D.A9,null,null,null,null,null,null,null,null,null)
B.fSG=new C.y("\ud83d\udc8a",null,D.wU,null,null,null,null,null,null,null,null,null)
B.fVJ=new A.q(3.6,2.6,0.6)
B.fVL=new A.q(0,56,0.9)
B.fVM=new A.q(-146.4,62,84)
B.iq=new A.q(0,0,1)
B.fVP=new A.q(0,0,3)
B.aaq=new A.q(0,0,4)
B.fVR=new A.q(0,0,500)
B.fVS=new A.q(0,0,640)
B.fVT=new A.q(0,0,800)
B.td=new A.q(0,0,-1)
B.aar=new A.q(0,0,-60)
B.fVW=new A.q(0,101,38)
B.fVX=new A.q(0,105,280)
B.aV8=new A.q(0,10,0)
B.fVY=new A.q(0,10,3)
B.fVZ=new A.q(0,110,10)
B.fW_=new A.q(0,110,95)
B.fW0=new A.q(0,112,36)
B.fW1=new A.q(0,116,0)
B.fW2=new A.q(0,11,-15)
B.fW3=new A.q(0,120,0)
B.fW4=new A.q(0,122,0)
B.fW5=new A.q(0,124,0)
B.fW6=new A.q(0,126,4)
B.aVa=new A.q(0,12,0)
B.fW7=new A.q(0,12,3)
B.fW8=new A.q(0,130,-3)
B.aas=new A.q(0,13,0)
B.fW9=new A.q(0,13,56)
B.fWa=new A.q(0,13,-8)
B.fWb=new A.q(0,142,0)
B.Kq=new A.q(0,14,0)
B.fWc=new A.q(0,14,11)
B.fWd=new A.q(0,14,150)
B.fWe=new A.q(0,14,2)
B.fWf=new A.q(0,14,32)
B.aVb=new A.q(0,14,40)
B.fWg=new A.q(0,14,5)
B.fWi=new A.q(0,14,-9)
B.fWj=new A.q(0,150,-150)
B.fWk=new A.q(0,159,0)
B.fWl=new A.q(0,165,3)
B.fWm=new A.q(0,165,-63)
B.fWn=new A.q(0,16,0)
B.fWo=new A.q(0,178,-30)
B.aat=new A.q(0,17,0)
B.fWp=new A.q(0,17,21)
B.fWq=new A.q(0,188,0)
B.fWr=new A.q(0,19,0)
B.fWs=new A.q(0,19,14)
B.fWu=new A.q(0,19,-30)
B.ea=new A.q(0,1,0)
B.fWw=new A.q(0,202,0)
B.fWx=new A.q(0,20,0)
B.fWy=new A.q(0,20,16)
B.fWB=new A.q(0,20,-14)
B.fWC=new A.q(0,20,-6)
B.fWD=new A.q(0,210,-150)
B.fWE=new A.q(0,216,-30)
B.fWF=new A.q(0,21,0)
B.fWG=new A.q(0,22,-11)
B.fWH=new A.q(0,22,-12)
B.fWI=new A.q(0,22,-39)
B.fWL=new A.q(0,23,0)
B.fWO=new A.q(0,24,0)
B.fWP=new A.q(0,24,13)
B.fWR=new A.q(0,250,640)
B.An=new A.q(0,250,-118)
B.fWT=new A.q(0,252,0)
B.fWU=new A.q(0,25,-15)
B.fWV=new A.q(0,26,-24)
B.Vk=new A.q(0,28,0)
B.fWW=new A.q(0,28,-8)
B.aVd=new A.q(0,29,40)
B.fWX=new A.q(0,2,14)
B.fWY=new A.q(0,304,-150)
B.aau=new A.q(0,30,0)
B.fWZ=new A.q(0,30,110)
B.fX_=new A.q(0,316,0)
B.fX0=new A.q(0,31,46)
B.fX1=new A.q(0,31,-6)
B.fX2=new A.q(0,330,260)
B.fX3=new A.q(0,34,0)
B.fX4=new A.q(0,36,0)
B.fX5=new A.q(0,36,19)
B.fX6=new A.q(0,36,-3)
B.fX7=new A.q(0,37,22)
B.fX8=new A.q(0,3,0)
B.fX9=new A.q(0,3,150)
B.fXa=new A.q(0,3,-30)
B.fXc=new A.q(0,400,60)
B.fXd=new A.q(0,40,100)
B.fXf=new A.q(0,40,150)
B.fXg=new A.q(0,40,17)
B.fXi=new A.q(0,40,40)
B.fXj=new A.q(0,40,45)
B.fXk=new A.q(0,40,50)
B.fXm=new A.q(0,40,-6)
B.aVf=new A.q(0,44,46)
B.fXn=new A.q(0,44,55)
B.fXo=new A.q(0,46,0)
B.fXp=new A.q(0,47,0)
B.aVg=new A.q(0,48,0)
B.fXr=new A.q(0,48,20)
B.fXs=new A.q(0,48,82)
B.Vl=new A.q(0,4,-2)
B.fXw=new A.q(0,520,1450)
B.aVh=new A.q(0,52,0)
B.fXx=new A.q(0,52,52)
B.fXz=new A.q(0,55,0)
B.aav=new A.q(0,58,0)
B.fXA=new A.q(0,5,4)
B.fXC=new A.q(0,66,0)
B.fXD=new A.q(0,66,1)
B.fXE=new A.q(0,6,-15)
B.fXF=new A.q(0,75,-30)
B.aVi=new A.q(0,76,36)
B.aaw=new A.q(0,7,0)
B.fXG=new A.q(0,7,-5)
B.aVj=new A.q(0,82,0)
B.x3=new A.q(0,8,0)
B.fXH=new A.q(0,8,6)
B.fXI=new A.q(0,8,90)
B.fXJ=new A.q(0,8,-16)
B.fXK=new A.q(0,8,-19)
B.fXL=new A.q(0,8,-4)
B.fXM=new A.q(0,900,1600)
B.fXN=new A.q(0,91,80)
B.aVk=new A.q(0,92,1)
B.fXO=new A.q(0,94,13)
B.fXP=new A.q(0,98,8)
B.fXQ=new A.q(0,99,38)
B.aax=new A.q(0,9,0)
B.aVl=new A.q(0,9,-3)
B.aay=new A.q(0,-4,28)
B.fXR=new A.q(0,-4,-20)
B.fXV=new A.q(-100,38,0.7)
B.fXY=new A.q(100,100,320)
B.fXZ=new A.q(100,14,36)
B.fY_=new A.q(100,24,36)
B.fY0=new A.q(100,24,8)
B.fY1=new A.q(100,290,-330)
B.fY2=new A.q(100,7,7)
B.fY3=new A.q(101,4,37)
B.fY6=new A.q(10,12,10)
B.fY7=new A.q(10,12,16)
B.fY8=new A.q(10,16,3)
B.fY9=new A.q(10,26,2)
B.fYa=new A.q(10,34,1)
B.fYb=new A.q(10,3,7)
B.fYc=new A.q(10,60,14)
B.fYd=new A.q(10,8,10)
B.fYe=new A.q(10,8,15)
B.fYg=new A.q(110,0,20)
B.fYh=new A.q(110,130,20)
B.fYi=new A.q(110,14,2)
B.fYj=new A.q(110,8,34)
B.fYk=new A.q(110,96,120)
B.aVm=new A.q(112,22,3)
B.fYl=new A.q(112,46,2)
B.fYm=new A.q(11,12,30)
B.aVn=new A.q(11,16,7)
B.fYn=new A.q(11,1,11)
B.fYo=new A.q(120,0,-30)
B.fYp=new A.q(120,28,22)
B.fYq=new A.q(120,40,100)
B.fYr=new A.q(124,2,26)
B.fYs=new A.q(124,4,60)
B.fYt=new A.q(125,8,54)
B.fYu=new A.q(126,2,62)
B.aVo=new A.q(12,3,9)
B.fYv=new A.q(12,4,22)
B.fYw=new A.q(12,86,0)
B.fYx=new A.q(130,18,12)
B.fYy=new A.q(130,28,24)
B.aVp=new A.q(130,4,14)
B.aVq=new A.q(130,56,80)
B.fYz=new A.q(130,5,50)
B.fYA=new A.q(132,14,150)
B.fYB=new A.q(132,2,52)
B.aVr=new A.q(134,4,84)
B.fYC=new A.q(13,0,0)
B.fYD=new A.q(13,12,13)
B.fYE=new A.q(13,15,2)
B.aVs=new A.q(13,18,8)
B.fYF=new A.q(13,28,3)
B.fYG=new A.q(0,0.52,2.35)
B.fYH=new A.q(140,28,22)
B.fYI=new A.q(140,9,43)
B.fYJ=new A.q(144,2,26)
B.fYK=new A.q(146,3,40)
B.fYL=new A.q(148,60,120)
B.fYM=new A.q(14,10,2)
B.aVt=new A.q(14,11,14)
B.fYN=new A.q(14,13,28)
B.fYO=new A.q(14,14,3)
B.fYP=new A.q(14,17,4)
B.fYQ=new A.q(14,20,-28)
B.fYR=new A.q(14,30,14)
B.fYS=new A.q(14,36,14)
B.fYT=new A.q(14,3,14)
B.fYU=new A.q(150,30,42)
B.fYV=new A.q(150,70,5)
B.fYW=new A.q(151,3,43)
B.fYX=new A.q(152,4,7)
B.fYZ=new A.q(16,10,10)
B.fZ_=new A.q(16,16,16)
B.fZ0=new A.q(16,3,11)
B.fZ1=new A.q(16,80,60)
B.fZ2=new A.q(16,9,2)
B.fZ3=new A.q(17,1,0)
B.aVu=new A.q(17,3,17)
B.fZ4=new A.q(27,1.4,27)
B.fZ5=new A.q(18,18,14)
B.fZ6=new A.q(18,20,18)
B.fZ7=new A.q(18,22,2)
B.fZ8=new A.q(18,28,16)
B.fZ9=new A.q(18,2,18)
B.fZa=new A.q(18,3,0)
B.fZb=new A.q(18,6,0)
B.fZc=new A.q(18,80,2)
B.fZd=new A.q(18,90,5)
B.fZe=new A.q(18,9,11)
B.fZf=new A.q(190,20,60)
B.fZg=new A.q(190,320,100)
B.fZh=new A.q(19,13,7)
B.fZi=new A.q(70,0.6,50)
B.fZj=new A.q(0,3,-6.5)
B.fZk=new A.q(-4,20.4,0)
B.fZl=new A.q(1,1,0.64)
B.fZm=new A.q(-4.6,1.5,-3.6)
B.fZn=new A.q(0,-13.5,-1.5)
B.fZo=new A.q(4,10,3.5)
B.aVv=new A.q(0.95,1.7,0.85)
B.hE=new A.q(1,0,0)
B.fZp=new A.q(1,16,36)
B.fZq=new A.q(1,18,18)
B.aVw=new A.q(1,22,11)
B.fZr=new A.q(1,26,14)
B.fZs=new A.q(1,28,14)
B.aVx=new A.q(1,2,1)
B.aVy=new A.q(1,3,1)
B.aaz=new A.q(1,3,6)
B.fZu=new A.q(1,0.9,0.06)
B.fZv=new A.q(1.2,44,34)
B.fZx=new A.q(200,0,500)
B.fZy=new A.q(200,0,900)
B.fZz=new A.q(200,140,200)
B.fZD=new A.q(1.6,15,1.6)
B.fZE=new A.q(20,12,14)
B.aVz=new A.q(20,14,7)
B.fZF=new A.q(20,2,2)
B.fZG=new A.q(20,2,8)
B.fZH=new A.q(20,30,26)
B.fZI=new A.q(20,3,14)
B.fZJ=new A.q(20,4,26)
B.fZK=new A.q(20,92,26)
B.fZL=new A.q(216,8,216)
B.fZM=new A.q(22,12,34)
B.fZN=new A.q(22,14,0)
B.fZO=new A.q(22,14,2)
B.fZP=new A.q(22,14,3)
B.fZQ=new A.q(22,16,3)
B.fZR=new A.q(22,18,14)
B.fZS=new A.q(22,2,28)
B.fZT=new A.q(22,3,10)
B.fZU=new A.q(22,3,22)
B.fZV=new A.q(22,4,20)
B.fZW=new A.q(230,330,-210)
B.fZX=new A.q(230,-40,100)
B.fZY=new A.q(240,150,60)
B.fZZ=new A.q(244,6,64)
B.h__=new A.q(140,15,3.6)
B.h_0=new A.q(24,12,34)
B.h_1=new A.q(24,14,22)
B.h_2=new A.q(24,38,0)
B.aVA=new A.q(24,6,14)
B.h_3=new A.q(250,92,6)
B.h_4=new A.q(260,300,-160)
B.h_5=new A.q(262,3,5)
B.h_6=new A.q(262,3,56)
B.h_7=new A.q(26,14,26)
B.h_8=new A.q(26,2,26)
B.aVB=new A.q(26,4,22)
B.h_9=new A.q(26,72,26)
B.h_a=new A.q(26,8,18)
B.h_b=new A.q(26,-34,96)
B.h_d=new A.q(7.4,6,10.4)
B.h_e=new A.q(-0.1,0,0)
B.aVC=new A.q(2,100,90)
B.h_f=new A.q(2,10,2)
B.aVD=new A.q(2,12,60)
B.h_g=new A.q(2,13,2)
B.aVE=new A.q(2,23,12)
B.aVF=new A.q(2,28,22)
B.h_h=new A.q(2,5,1)
B.h_i=new A.q(2,700,900)
B.aVG=new A.q(2,8,2)
B.h_j=new A.q(1,0.9,0.8)
B.h_l=new A.q(64,10,-1.4)
B.aVH=new A.q(0,9.4,-1.5)
B.h_m=new A.q(47,48,3.5)
B.h_n=new A.q(19.6,0,-1.5)
B.aVI=new A.q(0,56,1.3)
B.h_o=new A.q(0,15.5,0)
B.h_p=new A.q(3000,0,3000)
B.h_q=new A.q(3000,0,-3000)
B.h_s=new A.q(300,6,3)
B.h_u=new A.q(30,16,30)
B.aVJ=new A.q(30,16,72)
B.h_v=new A.q(30,22,0)
B.h_w=new A.q(30,24,8)
B.h_x=new A.q(30,28,18)
B.h_y=new A.q(30,29,0)
B.h_z=new A.q(30,34,40)
B.h_A=new A.q(30,40,100)
B.h_C=new A.q(30,6,12)
B.h_D=new A.q(324,114,6)
B.aVK=new A.q(324,6,10)
B.h_E=new A.q(32,2,20)
B.h_F=new A.q(33,11,10)
B.h_G=new A.q(34,10,1)
B.h_H=new A.q(34,22,3)
B.aVL=new A.q(34,25,18)
B.h_I=new A.q(34,30,1)
B.aVM=new A.q(34,39,18)
B.aVN=new A.q(34,42,18)
B.h_J=new A.q(34,4,28)
B.aVP=new A.q(34,8,18)
B.h_K=new A.q(-1,-1.7,2.3)
B.h_L=new A.q(366,124,6)
B.aVQ=new A.q(366,6,10)
B.h_M=new A.q(36,22,0)
B.h_N=new A.q(36,30,0)
B.h_O=new A.q(36,30,1)
B.h_P=new A.q(36,4,3)
B.h_Q=new A.q(36,60,12)
B.h_R=new A.q(0,93,3.5)
B.h_S=new A.q(37,16,0)
B.h_T=new A.q(37,50,38)
B.h_U=new A.q(38,10,24)
B.h_V=new A.q(38,20,3)
B.h_W=new A.q(38,2,6)
B.h_X=new A.q(-0.2,-0.3,-0.4)
B.h_Y=new A.q(60,62,3.6)
B.h_Z=new A.q(0,9.5,-1.5)
B.h0_=new A.q(0,48.6,55)
B.aVR=new A.q(3,12,12)
B.aVS=new A.q(3,14,18)
B.h00=new A.q(3,16,3)
B.h02=new A.q(3,22,2)
B.h03=new A.q(3,26,3)
B.aaA=new A.q(3,3,3)
B.h04=new A.q(3,42,70)
B.h05=new A.q(3,46,90)
B.h06=new A.q(3,5,3)
B.h08=new A.q(40,12,2)
B.h09=new A.q(40,16,18)
B.h0a=new A.q(40,1,14)
B.h0b=new A.q(40,28,1)
B.h0c=new A.q(40,2,104)
B.h0d=new A.q(40,2,24)
B.h0e=new A.q(40,30,26)
B.h0f=new A.q(40,60,40)
B.h0g=new A.q(40,80,3)
B.h0h=new A.q(40,8,104)
B.h0i=new A.q(42,2,28)
B.h0j=new A.q(44,10,2)
B.aVU=new A.q(44,2,14)
B.h0k=new A.q(44,3,22)
B.h0l=new A.q(44,72,20)
B.h0m=new A.q(0.9,0,4.4)
B.h0n=new A.q(8.2,1.9,-7.55)
B.h0o=new A.q(46,10,34)
B.h0p=new A.q(46,3,10)
B.h0q=new A.q(46,3,3)
B.h0r=new A.q(48,2,24)
B.h0s=new A.q(120.6,140,-52)
B.h0t=new A.q(0,-47.25,-2.25)
B.h0u=new A.q(-147.6,54,45)
B.h0v=new A.q(0.6,68,0.4)
B.h0w=new A.q(64,49,8.4)
B.h0x=new A.q(1.5,28,120)
B.h0y=new A.q(0,1.59,0.14)
B.h0z=new A.q(4,108,0)
B.h0A=new A.q(4,80,104)
B.h0B=new A.q(4,96,0)
B.h0C=new A.q(0,-3.4,1)
B.h0D=new A.q(25,79,1.4)
B.h0E=new A.q(1,0,-1.2)
B.h0F=new A.q(0.6,4,2.4)
B.h0G=new A.q(50,12,32)
B.h0H=new A.q(50,1,2)
B.h0I=new A.q(50,28,42)
B.h0J=new A.q(50,4,28)
B.h0K=new A.q(51,7,33)
B.h0L=new A.q(52,10,22)
B.h0M=new A.q(52,56,1)
B.h0N=new A.q(54,5,18)
B.h0Q=new A.q(56,18,18)
B.h0R=new A.q(56,2,36)
B.h0S=new A.q(56,3,32)
B.h0T=new A.q(56,3,48)
B.h0U=new A.q(1.3,0.4,0.55)
B.h0V=new A.q(58,0,30)
B.h0W=new A.q(58,14,9)
B.h0X=new A.q(58,64,22)
B.h0Y=new A.q(58,92,30)
B.h0Z=new A.q(58,96,30)
B.h1_=new A.q(58,9,74)
B.h10=new A.q(0,-0.8,0.9)
B.h11=new A.q(11.9,0,-8)
B.h12=new A.q(20,7,34.4)
B.h13=new A.q(-47,48,3.5)
B.aVV=new A.q(1.6,1.6,0.4)
B.h15=new A.q(0.16,0.32,0.07)
B.h16=new A.q(5,10,5)
B.aVW=new A.q(5,12,26)
B.h17=new A.q(5,17,2)
B.h18=new A.q(5,1,2)
B.h19=new A.q(5,34,24)
B.h1a=new A.q(5,5,5)
B.h1b=new A.q(5,6,10)
B.h1c=new A.q(5,6,3)
B.h1d=new A.q(5,9,8)
B.h1e=new A.q(-120.1,150,0)
B.h1f=new A.q(0,14.3,-1.5)
B.h1g=new A.q(0,0,3.2)
B.aVX=new A.q(-13,8.6,-9.5)
B.h1h=new A.q(60,12,56)
B.h1i=new A.q(60,12,80)
B.h1j=new A.q(60,16,28)
B.h1k=new A.q(60,30,3)
B.h1m=new A.q(620,300,270)
B.h1n=new A.q(62,11,0)
B.h1o=new A.q(62,18,20)
B.h1p=new A.q(62,22,6)
B.h1q=new A.q(62,5,0)
B.h1r=new A.q(632,10,282)
B.h1s=new A.q(640,8,290)
B.h1t=new A.q(64,10,0)
B.h1w=new A.q(0,-3.45,4)
B.h1x=new A.q(14,9,0.5)
B.aVY=new A.q(6,14,20)
B.aVZ=new A.q(6,14,32)
B.h1y=new A.q(6,28,6)
B.h1z=new A.q(6,4,4)
B.h1A=new A.q(6,6,6)
B.h1C=new A.q(-150.6,70,160)
B.h1D=new A.q(0,-0.2,0.14)
B.h1F=new A.q(120.6,140,-8)
B.h1G=new A.q(0.3,38,2)
B.h1I=new A.q(700,430,1150)
B.h1J=new A.q(70,175,-45)
B.h1K=new A.q(70,194,-45)
B.h1L=new A.q(70,6,36)
B.h1M=new A.q(720,100,105)
B.h1N=new A.q(720,360,320)
B.h1O=new A.q(72,32,3)
B.h1P=new A.q(72,-17,70)
B.h1Q=new A.q(12,5,0.4)
B.h1R=new A.q(74,20,5)
B.h1S=new A.q(76,2,90)
B.h1T=new A.q(76,8,3)
B.h1U=new A.q(34,30,0.6)
B.h1V=new A.q(1.6,1.7,3.6)
B.h1X=new A.q(-72.8,0,55)
B.h1Y=new A.q(-146.4,15,84)
B.h2_=new A.q(25,79,0.2)
B.h20=new A.q(7,0,-8)
B.h21=new A.q(7,18,10)
B.h22=new A.q(7,27,10)
B.h23=new A.q(7,2,7)
B.aW_=new A.q(7,3,0)
B.h24=new A.q(7,6,3)
B.h25=new A.q(7,8,3)
B.aW0=new A.q(7,96,7)
B.h26=new A.q(2200,0.4,560)
B.h28=new A.q(0,11,9.2)
B.h29=new A.q(-3.2,1.3,-7.82)
B.h2a=new A.q(20,0.8,12)
B.h2b=new A.q(80,16,32)
B.h2c=new A.q(80,26,8)
B.h2d=new A.q(80,38,26)
B.h2f=new A.q(80,4,14)
B.h2g=new A.q(80,6,32)
B.aW1=new A.q(147,1.5,3.5)
B.h2h=new A.q(82,46,3)
B.aW2=new A.q(-6.5,6.9,-3)
B.h2i=new A.q(84,10,38)
B.h2j=new A.q(84,18,38)
B.h2k=new A.q(84,84,120)
B.h2l=new A.q(84,8,36)
B.h2m=new A.q(0.93,0.92,1)
B.h2n=new A.q(4.6,4.2,9.5)
B.h2o=new A.q(88,24,28)
B.h2p=new A.q(88,84,3)
B.h2q=new A.q(0.4,6,8)
B.h2r=new A.q(0,-48.6,55)
B.h2s=new A.q(2.6,2,2.6)
B.h2t=new A.q(5.5,8.5,3)
B.h2u=new A.q(0,0,0.26)
B.h2v=new A.q(120.6,96,-52)
B.h2w=new A.q(8,18,8)
B.aW3=new A.q(8,2,16)
B.h2x=new A.q(8,2,6)
B.aW4=new A.q(8,2,8)
B.h2y=new A.q(8,6,6)
B.h2z=new A.q(8,8,12)
B.h2A=new A.q(8,9,8)
B.h2B=new A.q(8,9,9)
B.h2C=new A.q(-140,62,3.6)
B.h2E=new A.q(15,19,0.5)
B.h2F=new A.q(900,2,700)
B.h2H=new A.q(92,2,32)
B.h2I=new A.q(95,26,1)
B.h2J=new A.q(95,50,6)
B.h2K=new A.q(96,14,38)
B.h2L=new A.q(0.4,0.38,0.12)
B.h2M=new A.q(0,0,-0.43)
B.aW5=new A.q(11.2,4.5,-6)
B.aW6=new A.q(1.2,96,112)
B.aW7=new A.q(0.08,3.8,2.4)
B.aW8=new A.q(9,1,9)
B.h2N=new A.q(9,40,4)
B.h2O=new A.q(9,5,9)
B.h2P=new A.q(0,70,-0.6)
B.h2Q=new A.q(-34.6,86,69)
B.h2R=new A.q(-3.5,26,15)
B.h2S=new A.q(34,6,0.6)
B.h2T=new A.q(1.5,1.3,0.6)
B.h2U=new A.q(-120.6,96,-8)
B.h2V=new A.q(0,1.9,-0.7)
B.h2X=new A.q(0,-1.78,0.27)
B.aW9=new A.q(1.2,9,1.2)
B.h2Y=new A.q(0,0.62,0)
B.h2Z=new A.q(5.5,1.4,12)
B.h3_=new A.q(-50,0.6,50)
B.h32=new A.q(20,11.5,0)
B.h33=new A.q(20,66,1.4)
B.h34=new A.q(3.2,0.12,-6.7)
B.h35=new A.q(12,0,-8.1)
B.h37=new A.q(-34.6,86,7)
B.aWa=new A.q(0,0,3.4)
B.h38=new A.q(1.25,0.28,0.1)
B.h39=new A.q(100,38,0.7)
B.h3a=new A.q(0,36,10.2)
B.h3b=new A.q(24,0.08,16)
B.h3c=new A.q(34,1.4,1.4)
B.h3e=new A.q(0,4,-7.9)
B.h3f=new A.q(11.9,0,8)
B.h3g=new A.q(0,41.5,-4.9)
B.h3h=new A.q(-26,146,0.6)
B.aWb=new A.q(0.8,1.7,0.78)
B.h3j=new A.q(21,1.4,8)
B.h3k=new A.q(0.8,0.8,1.6)
B.h3l=new A.q(1.4,1,1)
B.h3m=new A.q(30,36,0.8)
B.h3o=new A.q(71.2,46.6,55)
B.h3p=new A.q(3,3.28,-7.2)
B.h3q=new A.q(1.4,0.3,1)
B.h3r=new A.q(0,42,1.5)
B.h3s=new A.q(-6.1,1.2,-6.4)
B.h3t=new A.q(1.4,26,0.4)
B.h3u=new A.q(76,0.6,4)
B.h3w=new A.q(26,0.3,130)
B.h3x=new A.q(0,-45.5,0.5)
B.h3y=new A.q(1.8,4,1)
B.h3z=new A.q(5,1.6,0.5)
B.h3B=new A.q(18,10,0.6)
B.h3C=new A.q(0,11,8.5)
B.h3D=new A.q(0.1,-2,2.4)
B.h3E=new A.q(302.4,1.2,322)
B.h3F=new A.q(-1,33.4,-4.9)
B.h3G=new A.q(0,0.2,2.8)
B.h3H=new A.q(6,10,1.4)
B.h3I=new A.q(0.95,0.95,1)
B.h3K=new A.q(24,32,0.8)
B.h3L=new A.q(0,10,5.2)
B.h3M=new A.q(0,-1.2,4.7)
B.h3N=new A.q(18.9,2.6,0)
B.h3O=new A.q(-2200,0.4,720)
B.h3P=new A.q(66,89,3.8)
B.h3Q=new A.q(-12,0,-8.1)
B.h3R=new A.q(3,11,0.5)
B.h3S=new A.q(0,70,320.6)
B.h3T=new A.q(11.8,4,0)
B.h3U=new A.q(0.97,0.18,2.25)
B.h3V=new A.q(0,6.6,-0.6)
B.h3W=new A.q(58,96,31.7)
B.h3X=new A.q(14,20,1.2)
B.aWc=new A.q(-71.7,6,55)
B.h3Y=new A.q(0,-3.75,4.15)
B.h4_=new A.q(64,57,8.4)
B.h40=new A.q(5.6,0.3,1.9)
B.h43=new A.q(52,8,0.4)
B.h44=new A.q(0,14,51.2)
B.h45=new A.q(4.6,7.6,3)
B.h46=new A.q(-1,0,-1.2)
B.h47=new A.q(0,1.7,0)
B.h48=new A.q(0,1.8,-0.9)
B.h4a=new A.q(-1,0,1.5)
B.h4b=new A.q(27,19,0.4)
B.h4c=new A.q(90,2,0.5)
B.h4d=new A.q(-17,98,77.2)
B.h4e=new A.q(5,8,0.4)
B.h4f=new A.q(0,98,6.6)
B.h4g=new A.q(5,14,8.5)
B.h4h=new A.q(5,2.2,0.8)
B.h4i=new A.q(-120.6,140,-52)
B.h4j=new A.q(-2200,0.4,560)
B.h4k=new A.q(0.18,0.12,0.08)
B.h4l=new A.q(50,0.6,50)
B.h4m=new A.q(147,3,1.4)
B.h4n=new A.q(20,0.6,50)
B.h4o=new A.q(0,6.6,0)
B.h4p=new A.q(4,16.2,0)
B.h4q=new A.q(60,0.4,12)
B.h4r=new A.q(10,15,0.5)
B.h4s=new A.q(144,5,0.7)
B.h4t=new A.q(1.2,-1.7,2.3)
B.h4u=new A.q(31.5,23,0)
B.h4v=new A.q(0,0.9,0)
B.h4w=new A.q(2.4,2.4,70)
B.h4x=new A.q(-120.6,140,-8)
B.h4z=new A.q(-146.4,15,172)
B.h4A=new A.q(0.82,1.7,0.3)
B.h4B=new A.q(0.55,0.45,0.35)
B.h4C=new A.q(47,7,34.4)
B.h4D=new A.q(-0.12,0,0)
B.h4F=new A.q(3.5,94,0.2)
B.h4G=new A.q(1.1,2.05,0.04)
B.h4H=new A.q(25,79,1.2)
B.h4I=new A.q(1.2,3.6,18)
B.h4J=new A.q(10,14,0.5)
B.h4K=new A.q(0,138.8,95)
B.h4L=new A.q(0,35.5,-4.9)
B.h4M=new A.q(5,8,0.5)
B.aaB=new A.q(1.1,0.5,0.7)
B.h4N=new A.q(-20,11.5,0)
B.h4O=new A.q(0,1.1,0)
B.h4P=new A.q(0,-0.5,0.6)
B.h4Q=new A.q(32,6,0.5)
B.h4R=new A.q(0,9.8,-1.5)
B.h4S=new A.q(0,1.4,0)
B.h4U=new A.q(1,3,0.8)
B.h4V=new A.q(0,3.4,0.8)
B.h4X=new A.q(0.1,0.1,0.1)
B.h4Y=new A.q(0,-0.6,38)
B.h4Z=new A.q(-0.85,4,-3.2)
B.h50=new A.q(-7.1,19,4)
B.h51=new A.q(0,58,-14.2)
B.h52=new A.q(40,7.2,1.2)
B.aWd=new A.q(0.42,0.34,0.12)
B.h53=new A.q(1.7,0.08,1.2)
B.h54=new A.q(0,0,0.38)
B.h56=new A.q(5.2,3.9,-7.76)
B.h57=new A.q(1.15,0.42,0.7)
B.h59=new A.q(146.2,52,120)
B.h5a=new A.q(30,22,0.8)
B.h5b=new A.q(2.6,0.45,0.5)
B.h5c=new A.q(0.07,0.3,0.03)
B.h5e=new A.q(41.5,11,12)
B.h5f=new A.q(36.2,60,38)
B.h5h=new A.q(20,1.4,8)
B.h5i=new A.q(75.4,24,0)
B.h5j=new A.q(0,-0.2,0.19)
B.h5k=new A.q(-20,0.6,-50)
B.h5l=new A.q(1.3,0.26,0.6)
B.h5n=new A.q(1.2,49,36)
B.h5o=new A.q(0,9.3,0)
B.h5q=new A.q(9,12,0.6)
B.h5r=new A.q(0,-0.6,160)
B.aWe=new A.q(1.4,3,1.6)
B.h5s=new A.q(0,40,0.95)
B.h5t=new A.q(11,3,0.5)
B.h5u=new A.q(34.6,34,7)
B.h5v=new A.q(190,0.6,90)
B.h5x=new A.q(0,-1.9,-1.2)
B.h5y=new A.q(-3.2,1.15,-7.78)
B.h5z=new A.q(0,-3.4,1.2)
B.h5A=new A.q(64,10,0.2)
B.h5B=new A.q(0,-1.78,0.53)
B.h5C=new A.q(0.8,2.6,0.3)
B.aWf=new A.q(-6.5,7.4,-3)
B.h5D=new A.q(1,1.05,0.75)
B.h5E=new A.q(0,76,1.1)
B.h5F=new A.q(1.35,0.32,0.5)
B.h5G=new A.q(-4.6,-2,1.2)
B.h5I=new A.q(0,40,1.4)
B.aWh=new A.q(0.6,32,34)
B.h5J=new A.q(-3,36,10.6)
B.h5K=new A.q(0,14.5,-1.5)
B.h5M=new A.q(0,0.2,0)
B.h5O=new A.q(2.5,30,2.5)
B.h5P=new A.q(160,1.2,120)
B.h5Q=new A.q(7,40,2.4)
B.h5R=new A.q(30,26,0.6)
B.h5S=new A.q(3.4,3.25,-7.85)
B.h5T=new A.q(72.8,0,55)
B.h5U=new A.q(0.5,62,30)
B.h5V=new A.q(0,76,37.8)
B.h5W=new A.q(146.4,62,120)
B.h5X=new A.q(34.6,86,7)
B.h5Y=new A.q(2.2,1.1,6.4)
B.h5Z=new A.q(17,98,77.2)
B.h6_=new A.q(3,1.55,-7.1)
B.h60=new A.q(0.4,3,3)
B.aWj=new A.q(0,-0.1,0.1)
B.h61=new A.q(-52,96,-60.6)
B.h62=new A.q(0,0,0.04)
B.h64=new A.q(0,14,-19.3)
B.h65=new A.q(2.4,11.6,-3.6)
B.h66=new A.q(4,11,3.5)
B.h68=new A.q(5,8.6,-2.25)
B.h69=new A.q(0,-1.78,0.3)
B.h6a=new A.q(2.2,2.2,1.8)
B.h6b=new A.q(0,1.9,-1.2)
B.h6c=new A.q(0,56,2.1)
B.h6d=new A.q(0.26,0.04,0.02)
B.h6e=new A.q(-2.4,11.6,-3.6)
B.h6f=new A.q(11.25,0,-2.25)
B.h6g=new A.q(0,3.7,1.4)
B.h6h=new A.q(1,-1.8,2.4)
B.h6i=new A.q(-26,43,3.8)
B.h6j=new A.q(-60,15,3.6)
B.h6k=new A.q(20,0.6,-50)
B.h6l=new A.q(-11.8,4,0)
B.h6m=new A.q(1.2,4,7)
B.h6n=new A.q(11.2,4.7,-6)
B.h6o=new A.q(66,43,3.8)
B.aWk=new A.q(0,2.8,0)
B.h6p=new A.q(24,8,0.05)
B.aWl=new A.q(86,52,1.4)
B.h6r=new A.q(0.12,0,0)
B.h6s=new A.q(2.7,0.22,0.45)
B.h6t=new A.q(1.1,1.1,0.03)
B.h6u=new A.q(-50,0.6,-50)
B.h6v=new A.q(-26,94,0.6)
B.h6w=new A.q(0,32,320.9)
B.h6x=new A.q(0,5,1.1)
B.h6y=new A.q(4.6,5.4,3.2)
B.h6z=new A.q(3.4,3.55,-7.85)
B.h6B=new A.q(71.6,-22,62)
B.h6C=new A.q(0,3,1.2)
B.h6D=new A.q(22,18,0.4)
B.h6E=new A.q(-20,0.6,50)
B.aWm=new A.q(1.5,18,3.5)
B.h6H=new A.q(3.5,3.1,-7.15)
B.aWn=new A.q(0,1.5,-0.9)
B.h6I=new A.q(-0.28,0.55,-0.8)
B.h6J=new A.q(0,-0.2,0.24000000000000002)
B.h6L=new A.q(0,-3.3,4)
B.h6M=new A.q(46,0.8,46)
B.h6N=new A.q(1,-0.2,0.14)
B.h6O=new A.q(0,137,1.6)
B.aWo=new A.q(84,3,0.5)
B.h6P=new A.q(-1.9,0,-2.25)
B.h6Q=new A.q(0,-0.9,1.1)
B.h6R=new A.q(1.1,0.4,0.6)
B.h6S=new A.q(8.2,1.05,-6.7)
B.h6T=new A.q(0,9.6,11.6)
B.h6V=new A.q(34.6,34,69)
B.h6X=new A.q(-149.3,38,128)
B.h6Y=new A.q(0.07,0.4,0.03)
B.h6Z=new A.q(2,3.8,0.08)
B.h7_=new A.q(31,83,0.9)
B.h70=new A.q(64,40,-3.2)
B.h71=new A.q(0.95,0.62,2.2)
B.aWp=new A.q(1.4,3,112)
B.h72=new A.q(1,33.4,-4.9)
B.h73=new A.q(0,0.3,314)
B.aWq=new A.q(302.4,140,1.2)
B.h74=new A.q(0,46.6,0.8)
B.h76=new A.q(6.5,6.4,13)
B.h77=new A.q(0,0,-8.8)
B.h78=new A.q(0,0.7,-1)
B.h7b=new A.q(-11.9,0,8)
B.h7c=new A.q(7,0,1.5)
B.h7d=new A.q(-8.4,0.7,-6.4)
B.h7e=new A.q(-3.2,1.45,-7.78)
B.h7f=new A.q(34,25,21.6)
B.h7g=new A.q(0,41,0.45)
B.h7h=new A.q(-6.575,0,-0.25)
B.h7i=new A.q(1.7,1,0.6)
B.aWs=new A.q(0,0,-2.3)
B.aaD=new A.q(-13,12.5,0)
B.h7l=new A.q(0,0,0.62)
B.h7m=new A.q(-60,62,3.6)
B.h7n=new A.q(0.2,-0.3,-0.4)
B.aWt=new A.q(10.85,18,0.5)
B.h7o=new A.q(120.1,174,-30)
B.h7p=new A.q(0.6,70,0.6)
B.h7q=new A.q(1.4,1.3,0.02)
B.h7r=new A.q(30,1.4,0.4)
B.h7s=new A.q(6.3,1.5,-7.2)
B.h7t=new A.q(8,14,1.2)
B.h7u=new A.q(-120.1,150,-60)
B.h7v=new A.q(0,5,11.2)
B.aWu=new A.q(0,0.62,2.85)
B.h7w=new A.q(37.5,23,0)
B.aWv=new A.q(0.05,8,16)
B.h7x=new A.q(0,-1.2,5)
B.h7y=new A.q(0.2,-2,2.6)
B.h7A=new A.q(0,-3.15,4.2)
B.h7C=new A.q(11.2,2.4,-5.18)
B.h7E=new A.q(-1,-0.2,0.14)
B.h7F=new A.q(0.97,0.9,1.04)
B.h7G=new A.q(-17,83,77.2)
B.h7H=new A.q(0.5,8,6)
B.h7I=new A.q(1.2,1.2,0.3)
B.aWx=new A.q(2,0.08,2.4)
B.h7K=new A.q(9.5,13.5,1.4)
B.h7L=new A.q(2.2,18,2.2)
B.h7M=new A.q(22,0.2,0.8)
B.h7N=new A.q(-0.32,0,0.5)
B.aWy=new A.q(1.3,4,0.8)
B.h7P=new A.q(-26,89,3.8)
B.h7Q=new A.q(-120.1,174,-30)
B.h7R=new A.q(0.8,0.55,0.05)
B.h7S=new A.q(0.14,0.35,17)
B.h7T=new A.q(1.4,2.4,0.3)
B.h7U=new A.q(0,11,8.2)
B.h7V=new A.q(52,96,-60.6)
B.h7W=new A.q(26,146,0.6)
B.h7X=new A.q(3.2,5,0.8)
B.h7Y=new A.q(0,24,-0.6)
B.h7Z=new A.q(40,1.6,14)
B.h81=new A.q(150,0.6,90)
B.h82=new A.q(0,11.5,19.3)
B.h83=new A.q(0,1.95,0.31)
B.h84=new A.q(150,1.2,112)
B.aWz=new A.q(0.75,4.5,0.1)
B.h86=new A.q(0.12,0,0.05)
B.h88=new A.q(-34.6,34,69)
B.h89=new A.q(-11.5,4,-1.5)
B.h8a=new A.q(9,1.2,9)
B.h8b=new A.q(120.1,150,-60)
B.h8c=new A.q(0,-0.5,0)
B.h8f=new A.q(0,37.5,-4.9)
B.h8g=new A.q(-2.4,14,8)
B.h8h=new A.q(-190,160,-14.2)
B.h8i=new A.q(0,0,3.6)
B.h8j=new A.q(3,14,1.5)
B.h8k=new A.q(5.5,8.5,0.5)
B.aWA=new A.q(0.05,8,9.6)
B.h8m=new A.q(1.5,94,3.5)
B.h8n=new A.q(0,8.2,0)
B.h8o=new A.q(-120.6,96,-52)
B.h8q=new A.q(4,94,0.4)
B.aWB=new A.q(1.4,8,1)
B.h8r=new A.q(120.6,96,-8)
B.h8s=new A.q(114,30,0.4)
B.h8t=new A.q(3.7,1.2,-7.1)
B.h8u=new A.q(1.5,1.35,1.5)
B.h8v=new A.q(8.2,0.05,-6.7)
B.h8w=new A.q(0,-0.3,0)
B.h8x=new A.q(6.575,0,-0.25)
B.aWC=new A.q(150.6,70,160)
B.h8y=new A.q(52,140,-60.6)
B.aWD=new A.q(0,1.8,0)
B.h8z=new A.q(3,3.21,-7.2)
B.h8A=new A.q(100,14,0.6)
B.h8B=new A.q(9,5,0.6)
B.h8D=new A.q(26,94,0.6)
B.h8E=new A.q(9.8,5,-7.75)
B.aWE=new A.q(0,2.4,0)
B.h8F=new A.q(1.5,3.5,112)
B.h8G=new A.q(-8,31.5,6)
B.h8I=new A.q(22,7,34.4)
B.h8J=new A.q(0,9.6,-1.5)
B.h8K=new A.q(3,1.85,-7.1)
B.h8M=new A.q(40,1.4,60)
B.h8P=new A.q(16,0.4,16)
B.aaF=new A.q(13,12.5,0)
B.h8R=new A.q(0.34,0.66,0.9)
B.h8T=new A.q(0.9,1.08,0.98)
B.h8U=new A.q(12,0.4,6)
B.h8V=new A.q(-6.5,7.9,-3)
B.h8W=new A.q(1.5,1.5,0.05)
B.h8X=new A.q(-6.5,5,-3)
B.h8Y=new A.q(58.4,1.6,50)
B.h8Z=new A.q(1.05,0.95,1)
B.h9_=new A.q(16,22,0.6)
B.h90=new A.q(0.02,0.28,0.05)
B.h92=new A.q(0,0.7,1)
B.h93=new A.q(26,22,1.4)
B.h94=new A.q(0,9.5,-7)
B.aWG=new A.q(13,8.6,9.5)
B.h95=new A.q(-140,15,3.6)
B.h96=new A.q(1.3,0.95,0.6)
B.h97=new A.q(5,5,0.8)
B.h98=new A.q(-3.6,4,-7.76)
B.h99=new A.q(0.82,0.9,0.05)
B.h9a=new A.q(0,-5.5,-0.25)
B.h9b=new A.q(0,11,21.2)
B.h9d=new A.q(34.6,86,69)
B.h9e=new A.q(64,50,6.6)
B.h9f=new A.q(-34,40,36.4)
B.h9g=new A.q(2.2,1.8,2)
B.h9i=new A.q(190,160,-14.2)
B.h9k=new A.q(0,0.6,0)
B.h9n=new A.q(1.9,0,0)
B.h9o=new A.q(0.45,0.72,0.06)
B.h9p=new A.q(95,26,1.8)
B.h9r=new A.q(14,0.4,7)
B.h9s=new A.q(64,24,-3.2)
B.aaG=new A.q(1.2,140,320)
B.h9t=new A.q(1,4.5,0.8)
B.h9u=new A.q(0,9.2,0)
B.h9v=new A.q(120.1,150,0)
B.h9w=new A.q(0,0.03,0)
B.h9x=new A.q(-100,100,320)
B.h9z=new A.q(-100,400,350)
B.h9A=new A.q(-10,22,0)
B.h9D=new A.q(-110,96,120)
B.h9E=new A.q(-112,38,24)
B.h9F=new A.q(-120,0,-30)
B.h9G=new A.q(-120,300,-320)
B.h9H=new A.q(-125,16,30)
B.h9I=new A.q(-13,15,2)
B.h9J=new A.q(-144,82,45)
B.h9K=new A.q(-147,54,45)
B.h9L=new A.q(-148,56,120)
B.h9M=new A.q(-14,17,4)
B.h9N=new A.q(-14,20,-28)
B.h9O=new A.q(-18,6,0)
B.qN=new A.q(-1,0,0)
B.h9P=new A.q(-1,0,-8)
B.h9Q=new A.q(-200,0,500)
B.h9R=new A.q(-200,0,900)
B.h9S=new A.q(-200,100,480)
B.h9U=new A.q(-20,4,26)
B.h9V=new A.q(-20,92,26)
B.h9W=new A.q(-22,14,0)
B.h9X=new A.q(-24,38,0)
B.h9Y=new A.q(-260,330,-80)
B.h9Z=new A.q(-3000,0,3000)
B.ha_=new A.q(-3000,0,-3000)
B.ha2=new A.q(-30,36,38)
B.ha3=new A.q(-30,40,100)
B.ha4=new A.q(-30,44,33)
B.ha6=new A.q(-330,40,760)
B.ha7=new A.q(-34,34,38)
B.ha8=new A.q(-34,40,38)
B.ha9=new A.q(-37,16,0)
B.haa=new A.q(-37,50,38)
B.hab=new A.q(-380,470,1300)
B.hac=new A.q(-390,144,-120)
B.had=new A.q(-390,70,-120)
B.hae=new A.q(-40,12,150)
B.haf=new A.q(-40,30,164)
B.hah=new A.q(-42,-34,96)
B.hai=new A.q(0,-0.6,22)
B.haj=new A.q(-4,20,0)
B.hak=new A.q(-4,22,150)
B.aWH=new A.q(-4,22,8)
B.han=new A.q(-5,17,0)
B.hao=new A.q(0,36.5,0)
B.hap=new A.q(-60,28,56)
B.has=new A.q(-60,50,1)
B.hat=new A.q(-60,70,6)
B.hau=new A.q(-700,430,1150)
B.haw=new A.q(-70,0,34)
B.hax=new A.q(-70,95,34)
B.hay=new A.q(-70,96,34)
B.haz=new A.q(-720,360,320)
B.haA=new A.q(-72,6,55)
B.haB=new A.q(-80,12,30)
B.haC=new A.q(-80,25,30)
B.haG=new A.q(-8,24,0)
B.haH=new A.q(-8,25,0)
B.haI=new A.q(-8,42,-5)
B.haJ=new A.q(-8,-28,104)
B.haK=new A.q(-8,-39,96)
B.haM=new A.q(0,0.35,0.78)
B.haN=new A.q(0.6,6,14)
B.haO=new A.q(-11.9,0,-8)
B.haP=new A.q(32,3,0.5)
B.haQ=new A.q(38,1.4,12)
B.haR=new A.q(25,0.5,66)
B.haS=new A.q(-8.4,1.9,-7.2)
B.haT=new A.q(1.6,8,5)
B.haU=new A.q(0.8,1.6,1.4)
B.haW=new A.q(25,6,0.2)
B.aWI=new A.q(1.25,1,0.1)
B.haX=new A.q(11.2,0,-6)
B.haY=new A.q(-146.4,62,172)
B.haZ=new A.q(0.4,7,9)
B.hb_=new A.q(1.2,1.1,0.8)
B.hb1=new A.q(150,49,1.2)
B.hb2=new A.q(41.5,11,-12)
B.hb3=new A.q(62,0.2,42)
B.hb4=new A.q(4.6,1.5,-3.6)
B.hb5=new A.q(0,-0.7,0.8)
B.hb6=new A.q(0.6,9,9)
B.hb7=new A.q(8.9,1.9,0.9)
B.hb8=new A.q(42,84,1.2)
B.hb9=new A.q(-34.6,34,7)
B.hba=new A.q(60,15,3.6)
B.aWJ=new A.q(1.6,58,66)
B.hbb=new A.q(0,-1.55,-0.6)
B.hbc=new A.q(36.2,32.2,0.6)
B.hbd=new A.q(1.78,4.25,0.08)
B.hbe=new A.q(27,0.6,19)
B.hbf=new A.q(1.4,52,96)
B.hbg=new A.q(0,5.5,-0.25)
B.hbh=new A.q(28,2.5,26)
B.hbi=new A.q(0,0.7,0)
B.hbj=new A.q(-1.2,-1.6,2.2)
B.hbk=new A.q(11,25,0.3)
B.hbl=new A.q(17,83,77.2)
B.aWK=new A.q(-12,14,19.4)
B.aWL=new A.q(13,8.6,-9.5)
B.aWM=new A.q(0.05,0.12,0.03)
B.aWN=new A.q(8.2,0.95,-6.7)
B.hbm=new A.q(40,1.2,22)
B.hbn=new A.q(0.7,1.5,-7.2)
B.hbo=new A.q(0,15.3,-3.6)
B.hbp=new A.q(0,-1,4.9)
B.hbq=new A.q(62,2.4,8)
B.hbr=new A.q(-1.6,11,6)
B.hbs=new A.q(0.1,0,0)
B.hbt=new A.q(0.32,0,0.5)
B.hbu=new A.q(2200,0.4,720)
B.hbv=new A.q(1.6,11,6)
B.hbw=new A.q(-10,0.5,150)
B.hby=new A.q(-60,50,1.8)
B.hbz=new A.q(-0.9,0,4.4)
B.hbA=new A.q(-6.5,7.2,-3)
B.hbC=new A.q(300,6,1.6)
B.hbD=new A.q(6.2,0.18,2.1)
B.hbE=new A.q(76,64,0.6)
B.hbF=new A.q(7.1,18,-3)
B.hbH=new A.q(0.45,1.3,0.9)
B.hbI=new A.q(74,1.2,90)
B.hbJ=new A.q(36,1.6,12)
B.hbK=new A.q(15.5,2.6,0)
B.hbM=new A.q(-8,-47.8,70)
B.hbN=new A.q(14,1.5,3.5)
B.aWO=new A.q(17,24,0.3)
B.hbO=new A.q(5.2,3.9,-7.82)
B.hbP=new A.q(0,0.7,2.4)
B.hbQ=new A.q(0,0.3,0)
B.aWP=new A.q(2.3,7,0.5)
B.hbS=new A.q(0,66,1.8)
B.aWQ=new A.q(-13,8.6,9.5)
B.hbV=new A.q(0.6,28,52)
B.hbW=new A.q(6.5,6,14)
B.hbX=new A.q(0,4.2,2.4)
B.hbY=new A.q(0,-1.99,0.14)
B.hbZ=new A.q(0.4,36,34)
B.hc0=new A.q(4.6,-2,1.2)
B.hc1=new A.q(11.5,4,-1.5)
B.hc2=new A.q(0,14,19.3)
B.aWR=new A.q(0,0,-2.4)
B.hc3=new A.q(1.3,0.8,0.9)
B.hc4=new A.q(-36.2,60,38)
B.hc5=new A.q(110,18,0.6)
B.hc6=new A.q(0,-1.78,0.52)
B.hc7=new A.q(0.12,0.1,0.03)
B.hc8=new A.q(9.8,5,-7.58)
B.hc9=new A.q(14,1.5,5)
B.hca=new A.q(0.95,2.3,0.5)
B.aWS=new A.q(0.5,1.4,2)
B.hcb=new A.q(3.5,0.15,-7.2)
B.aWT=new A.q(64,2,1.2)
B.hcc=new A.q(1.2,26.4,20)
B.hcd=new A.q(-3.6,4,-7.82)
B.hce=new A.q(-3,37,-4.9)
B.hcf=new A.q(0.3,2,36)
B.hci=new A.q(24,0.8,6.5)
B.hcj=new A.q(-28,76,38.3)
B.hcl=new A.q(22,0.5,5)
B.hcm=new A.q(9,10,0.6)
B.hcn=new A.q(0,22,2.1)
B.hcq=new A.q(0,56,0.5)
B.hcr=new A.q(150,1.2,70)
B.hcs=new A.q(0,-5.5,-3.4)
B.hct=new A.q(58,104,31.7)
B.hcu=new A.q(100,52,2.4)
B.hcv=new A.q(2.1,0.4,0.5)
B.hcw=new A.q(0,14.7,-1.5)
B.aWU=new A.q(0.4,29,31)
B.hcx=new A.q(0,0.8,-1.3)
B.hcy=new A.q(-19.5,-1,-1.5)
B.hcz=new A.q(80,0.5,60)
B.hcA=new A.q(6.85,4,-3.2)
B.hcB=new A.q(52,58,0.6)
B.hcC=new A.q(0,14.4,0)
B.aWW=new A.q(0.12,3,1.9)
B.hcD=new A.q(0.06,0.62,0.8)
B.hcE=new A.q(0,18.5,0)
B.hcF=new A.q(50,0.6,-50)
B.hcH=new A.q(9.55,5.7,-7.5)
B.hcJ=new A.q(-400,80,-19.2)
B.hcK=new A.q(0.8,2.4,0.3)
B.aWX=new A.q(0,0.7,2)
B.hcL=new A.q(3.5,26,15)
B.hcM=new A.q(0.95,0.62,1)
B.aWY=new A.q(0,24,40.2)
B.hcN=new A.q(0.8,1.1,1.2)
B.hcO=new A.q(0,51.5,20)
B.hcP=new A.q(0,0.3,4.3)
B.hcQ=new A.q(-20,0.5,145)
B.hcR=new A.q(2.4,14,8)
B.hcS=new A.q(0,47.25,-2.25)
B.hcT=new A.q(-8,31.5,-6)
B.hcU=new A.q(0.5,0.5,0.04)
B.hcV=new A.q(12.5,39,0.6)
B.hcW=new A.q(140,62,3.6)
B.hcX=new A.q(0,3,0.9)
B.hcY=new A.q(9,0.7,15)
B.hcZ=new A.q(3,36,10.6)
B.hd_=new A.q(25,10,0.2)
B.hd1=new A.q(0.14,8,0.3)
B.hd2=new A.q(1.9,0.05,1.35)
B.hd5=new A.q(0.6,0.12,0.03)
B.hd6=new A.q(-10.7,1.2,-6.4)
B.hd7=new A.q(-52,140,-60.6)
B.hd8=new A.q(-71.2,46.6,55)
B.hd9=new A.q(5,4.5,3)
B.hda=new A.q(120,36,1.4)
B.hdb=new A.q(0,3.9,2.5)
B.aWZ=new A.q(0,3.7,2.6)
B.Vt=new A.FN(0,"hot")
B.Vu=new A.FN(1,"neutral")
B.Vv=new A.FN(2,"ground")
B.aXd=new A.FN(3,"unknown")
B.eM8=new C.z(-20,46)
B.hha=new A.Av(B.eM8,0,2.4,"Having the drink",!0,!1,!1,"")
B.euA=new C.z(34,62)
B.hhb=new A.Av(B.euA,3.141592653589793,2.2,"Picking up the remote",!1,!0,!1,"")
B.hhj=new A.aBq(null)
B.hrX=new A.eWL(0,"material")})();(function staticFields(){$.dS=0
$.ajd=!1
$.aje=!0
$.hay=!1
$.fYL=C.U(x.N,C.av("Mz"))
$.fYK=C.U(x.N,C.av("aA<Mz?>"))
$.fYJ=C.aY(x.N)
$.i47=C.U(x.N,C.av("ai<+(q,q)>"))
$.i45=C.U(x.N,x.dg)
$.hqk=C.U(x.N,C.av("jR"))
$.ajO=null
$.E7=null
$.W5=null
$.hgH=null
$.fpu=C.U(x.S,C.av("ai<kn>"))
$.ahz="xbot"})();(function lazyInitializers(){var w=a.lazyFinal
w($,"ioq","hyp",()=>C.bOP())
w($,"ioC","h8T",()=>C.bOP())
w($,"ijk","hvV",()=>new A.aTc($.aw()))
w($,"iqZ","bF4",()=>{var v,u,t=C.av("O<aTb>"),s=C.a([],t)
for(v=0;v<2;++v){u=v*9
D.d.v(s,C.a([A.fXV(v,175,u),A.fXV(v,612,u+14),A.fXV(v,1013,u+7)],t))}return s})
w($,"iqB","fX4",()=>C.a([A.hlI(-80,80,400,565),A.hlI(-80,80,715,885)],C.av("O<bwJ>")))
w($,"ijl","aRe",()=>A.hBL())
w($,"iqY","hzO",()=>{var v=C.a([A.vL("Wire a standard 120 volt receptacle: black to brass, white to silver, bare copper to green.",B.Rs,B.dpe,"outlet","",!0,B.Ik,B.cWU,!1,"Wall outlet",new A.fzm()),A.vL("A single-pole switch breaks the hot wire to the light: two black wires go on the two brass screws.",B.db1,B.dcv,"switch","",!0,B.Ik,B.cVi,!1,"Light switch",new A.fzn()),A.vL("A GFCI protects you near water. Power comes in on LINE. The LOAD screws (covered with tape) feed other outlets.",B.Rs,B.dfp,"gfci","",!0,B.Ik,B.ddW,!1,"GFCI outlet",new A.fzo()),A.vL("Join the house wires to the fixture wires with wire nuts: black to black, white to white, ground to ground.",B.Rs,B.d63,"light","",!0,B.Ik,B.dqW,!1,"Ceiling light",new A.fzp()),A.vL("A fan hangs from a strong fan-rated box. Join black, white and ground with wire nuts, then fasten the canopy.",B.Rs,B.ddj,"fan","",!0,B.Ik,B.d2_,!1,"Ceiling fan",new A.fzq())],C.av("O<T_>"))
D.d.v(v,$.fXa())
return v})
w($,"ir_","fXa",()=>{var v="switch",u="outlet"
return C.a([A.vL("Breaks BOTH hot legs of a 240 volt circuit at once: water heaters and baseboard heat.",B.dtT,B.c58,"switch2p",v,!0,B.dwn,B.d6f,!0,"Double-pole switch (240 V)",new A.fzr()),A.vL("One light, two switches. One COMMON screw and two TRAVELER screws; it pairs with a second three-way.",B.dna,B.cWD,"switch3",v,!0,B.dwF,B.ddZ,!0,"Three-way switch",new A.fzs()),A.vL("Sits in the middle of two three-way switches: two traveler wires in on one side, two out on the other.",B.dsg,B.dgR,"switch4",v,!0,B.dwo,B.dm_,!0,"Four-way switch",new A.fzt()),A.vL("Needs a NEUTRAL wire in the box as well: hot in, hot out to the light, neutral and ground.",B.d0L,B.d3B,"switchsmart",v,!0,B.dwG,B.d11,!0,"Smart, motion or timer switch",new A.fzu()),A.vL("Two switches in one device: one hot feed is split between them, and two separate lights come out.",B.cJz,B.dkh,"switchcombo",v,!0,B.dym,B.cwH,!0,"Combination (double) switch",new A.fzv()),A.vL("The tab between the brass screws is broken off: the top half is switched, the bottom half is always on.",B.ddS,B.cw5,"split",u,!0,B.dwH,B.djd,!0,"Split (half-switched) outlet",new A.fzw()),A.vL("Two hots, a neutral and a ground: the dryer 14-30, and the range and car charger 14-50.",B.dpW,B.d_q,"v240four",u,!0,B.dwE,B.cNX,!0,"4-wire 240 V outlet (dryer, range, EV)",new A.fzx()),A.vL("Two hots and a neutral, with no separate ground: the old 10-30 and 10-50, from before 1996.",B.d7_,B.dsN,"v240three",u,!1,B.dyk,B.drY,!0,"3-wire 240 V outlet (old dryer or range)",new A.fzy()),A.vL("Two hots and a ground, and no neutral at all: the 6-series outlets.",B.dqC,B.daP,"v240only",u,!0,B.dwU,B.dpk,!0,"240 V only outlet (window AC, welder)",new A.fzz()),A.vL("Hot and neutral as usual, but the ground goes on its own wire straight back to the panel: shops and offices.",B.dsB,B.dbV,"isolated",u,!0,B.dxL,B.d7o,!0,"Isolated-ground outlet",new A.fzA())],C.av("O<T_>"))})
w($,"ira","Ha",()=>{var v,u=C.a([],x.n)
for(v=0;v<10;++v)u.push(-72+16*v)
return u})})()};
(a=>{a["r0xE7R63eXpvtAhr1RnAR3L3vF4="]=a.current})($__dart_deferred_initializers__);