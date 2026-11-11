((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,C,D,A2,Aa,Ab,Ac,H,P,I,A3,Ad,Ae,A4,Af,S,Ag,M,A5,T,Ah,X,A6,Y,Z,Ai,A_,A0,Aj,Ak,G,Al,U,V,A1,Am,A7,A8,W,A9,An,N,A={f1n:function f1n(d,e){this.a=d
this.b=e},aa3:function aa3(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.at=g
_.CW=h
_.a=i
_.$ti=j},aey:function aey(d,e){var _=this
_.d=null
_.e=$
_.Gj$=d
_.c=_.a=null
_.$ti=e},bq1:function bq1(d){this.a=d},aOe:function aOe(){},
oN(d,e,f){var w=d.a,v=d.b,u=d.c
return new A.q(w+(e.a-w)*f,v+(e.b-v)*f,u+(e.c-u)*f)},
vM(d,e){var w=Math.cos(e),v=Math.sin(e),u=d.a,t=d.c
return new A.q(u*w+t*v,d.b,-u*v+t*w)},
nH(d,e,f,g){var w,v,u,t,s,r,q,p,o=new A.h1v(Math.cos(e),Math.sin(e)),n=new A.h1t(f),m=new A.h1u(n,e,o,g),l=new A.h1s(n,e,o),k=C.a([],x.z)
for(w=d.length,v=x.o,u=0;u<d.length;d.length===w||(0,C.K)(d),++u){t=d[u]
s=C.a([],v)
for(r=t.a,q=r.length,p=0;p<r.length;r.length===q||(0,C.K)(r),++p)s.push(m.$1(r[p]))
k.push(new A.kr(s,l.$1(t.b),t.c,t.d,t.e,t.f,t.r,t.w,t.x,t.y,t.z))}return k},
Dt(d,e,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
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
l=Math.min(e,n.gqc()*0.5)
k=Math.min(e,m.gqc()*0.5)
j=n.gmX(0)
i=new A.q(q-j.a*l,p-j.b*l,o-j.c*l)
j=m.gmX(0)
h=new A.q(q+j.a*k,p+j.b*k,o+j.c*k)
for(g=0;g<=a0;++g){f=g/a0
w.push(A.oN(A.oN(i,s,f),A.oN(s,h,f),f))}}w.push(D.d.gak(d))
return w},
aiq(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
if(a3.length<3)return a3
w=C.a([],x.o)
for(v=0;u=v+1,t=a3.length,u<t;v=u){s=v===0?a3[v]:a3[v-1]
r=a3[v]
q=a3[u]
p=v+2
o=p<t?a3[p]:q
for(t=s.a,p=r.a,n=q.a,m=o.a,l=s.b,k=r.b,j=q.b,i=o.b,h=s.c,g=r.c,f=q.c,e=o.c,d=0;d<a4;++d){a0=d/a4
a1=a0*a0
a2=new A.h1g(a0,a1,a1*a0)
w.push(new A.q(a2.$4(t,p,n,m),a2.$4(l,k,j,i),a2.$4(h,g,f,e)))}}w.push(D.d.gak(a3))
return w},
hIi(){if($.hh6)return
$.hh6=!0
C.az().bJ(new A.bKj(),x.P).eK(new A.bKk())},
hh7(){C.az().bJ(new A.bKl(),x.P).eK(new A.bKm())},
i2h(d){var w,v,u,t,s,r,q,p,o,n
for(w=d.length,v=!0,u=!0,t=0;t<w;++t)if(d[t].c>=0.5)u=!1
else v=!1
if(v)return d
if(u)return B.nD
s=C.a([],x.o)
for(r=0;w=d.length,r<w;){q=d[r];++r
p=d[r%w]
w=q.c
o=w>=0.5
n=p.c
if(o)s.push(q)
if(o!==n>=0.5)s.push(A.oN(q,p,(0.5-w)/(n-w)))}return s},
haZ(a2,a3,a4){var w,v,u,t,s,r,q,p=J.a7(a2),o=p.h(a2,0).a,n=p.h(a2,0).b,m=p.h(a2,1).a,l=p.h(a2,1).b,k=p.h(a2,2).a,j=p.h(a2,2).b,i=p.h(a2,3).a,h=p.h(a2,3).b,g=m-k,f=i-k,e=o-m+k-i,d=l-j,a0=h-j,a1=n-l+j-h
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
return new C.eL(p)},
i3a(d,e,f,g){var w,v=e.d,u=e.e,t=A.haZ(f,v,u)
if(t==null)return
w=d.a
J.bl(w.save())
d.aw(0,t.a)
w.clipRect(C.bH(new C.a3(0,0,v,0+u)),$.mA()[1],!0)
e.c.$3(d,new C.av(v,u),g)
w.restore()},
i3b(d,e,f,g,h,i){var w,v,u,t,s,r,q,p,o,n,m,l,k=e.d,j=e.e
$.S()
w=new C.p7()
e.c.$3(C.zd(w,null),new C.av(k,j),i)
v=w.nk()
u=k/g
t=j/h
for(s=f.length,r=d.a,q=0+u,p=0+t,o=0;o<f.length;f.length===s||(0,C.K)(f),++o){n=f[o]
m=A.haZ(n.c,u,t)
if(m==null)continue
J.bl(r.save())
l=m.a
r.concat(C.h1n(C.Hk(l)))
r.clipRect(C.bH(new C.a3(0,0,q,p)),$.mA()[1],!0)
r.translate(-n.a*u,-n.b*t)
n=v.b
n===$&&C.c()
n=n.a
n===$&&C.c()
n=n.a
n.toString
r.drawPicture(n)
r.restore()}v.t()},
h7F(d,e,f,g,h,i,j,k,l,m){return new A.avW(l,e,h,k,i,f,g,d,m,j,null)},
i1s(a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=$.hfr()
C.Ec(a4)
w=a3.a.get(a4)
if(w!=null)return w
v=new A.Q4(!0,C.a([],x.z),C.a([],x.t))
a3=x.S
u=x.gf
t=C.U(a3,u)
s=C.U(a3,u)
r=a4.a
for(q=0;q<r.length;++q){p=r[q]
a3=p.z
u=a3!==0
if(u&&s.h(0,a3)!=null){s.h(0,a3).t2(0,p,q)
continue}for(o=p.a,n=o.length,m=1/0,l=-1/0,k=1/0,j=-1/0,i=1/0,h=-1/0,g=0;g<n;++g){f=o[g]
e=f.a
if(e<m)m=e
if(e>l)l=e
d=f.b
if(d<k)k=d
if(d>j)j=d
a0=f.c
if(a0<i)i=a0
if(a0>h)h=a0}if(l-m>90||j-k>90||h-i>90){v.t2(0,p,q)
continue}a1=t.c3(0,((D.k.bf(m/60)+4096)*8192+(D.k.bf(k/60)+4096))*8192+(D.k.bf(i/60)+4096),new A.fmm())
a1.t2(0,p,q)
if(u)s.n(0,a3,a1)}a3=C.a([v],x.dF)
D.d.v(a3,new C.b9(t,t.$ti.k("b9<2>")))
a2=new A.cNf(a3)
$.hfr().n(0,a4,a2)
return a2},
b7E(d,e,f,g,h,i,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9){var w,v,u,t,s,r,q,p,o,n=(a1-g)/2,m=h-e,l=Math.max(a7*2,m*0.3),k=m-l,j=a6-a5/2
m=a1/2-n/2
d.alf(new A.q(a8-m,j,a9),new A.q(n,a5,h),a0,0.5,4,a4)
d.alf(new A.q(a8+m,j,a9),new A.q(n,a5,h),a0,0.5,8,a4)
m=h/2
w=a9-m
d.alf(new A.q(a8,j,w+k/2),new A.q(g,a5,k),a0,0.5,13,a4)
d.alf(new A.q(a8,j,a9+m-l/2),new A.q(g,a5,l),a0,0.5,14,a4)
m=e/2
v=w+k+m
u=a6-a2/2
w=g/2
t=a7/2
d.aF(new A.q(a8-w+t,u,v),new A.q(a7,a2,e),f,0.7)
d.aF(new A.q(a8+w-t,u,v),new A.q(a7,a2,e),f,0.7)
w=v-m
d.aF(new A.q(a8,u,w+t),new A.q(g,a2,a7),f,0.7)
s=a6-a2
r=C.ar(f,D.dn,0.18)
r.toString
d.aF(new A.q(a8,s+t,v),new A.q(g,a7,e),r,0.6)
d.aF(new A.q(a8,u,v+m-t),new A.q(g,a2,a7),f,0.7)
d.e=0.5
s+=a7
t=Math.min(g,e)
d.dm(new A.q(a8,s,v),new A.q(a8,s+0.05,v),t*0.09,B.hg,14)
if(!a3){d.e=0
return}q=w-k*0.38
m=t*0.08
w=t*0.2
d.aF(new A.q(a8,a6+t*0.04,q),new A.q(t*0.65,m,w),i,0.9)
s=a6+t*0.5
r=a6+t*0.62
d.iV(A.Dt(C.a([new A.q(a8,a6+m,q),new A.q(a8,s,q),new A.q(a8,r,q+t*0.12),new A.q(a8,r,q+t*0.38),new A.q(a8,s,q+t*0.42)],x.o),t*0.1,6),t*0.045,i,!0,0.9,8)
for(m=a6+w,w=t*0.035,s=a6+t*0.24,r=t*0.075,p=0;p<2;++p){o=a8+F.hd[p]*t*0.3
d.d1(new A.q(o,a6,q),new A.q(o,m,q),w,i,0.9,8)
d.d1(new A.q(o,m,q),new A.q(o,s,q),r,i,0.9,10)}d.e=0},
q:function q(d,e,f){this.a=d
this.b=e
this.c=f},
kr:function kr(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
cL:function cL(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
hi:function hi(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
qW:function qW(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
fo:function fo(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
f3:function f3(d){var _=this
_.a=d
_.c=_.b=0
_.d=1
_.e=0
_.f=2
_.r=!1
_.x=_.w=0},
c0P:function c0P(d,e){this.a=d
this.b=e},
c0Q:function c0Q(d){this.a=d},
c0O:function c0O(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
c0R:function c0R(d,e,f){this.a=d
this.b=e
this.c=f},
c0N:function c0N(d,e){this.a=d
this.b=e},
c0S:function c0S(d,e,f){this.a=d
this.b=e
this.c=f},
h1v:function h1v(d,e){this.a=d
this.b=e},
h1t:function h1t(d){this.a=d},
h1u:function h1u(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
h1s:function h1s(d,e,f){this.a=d
this.b=e
this.c=f},
h1g:function h1g(d,e,f){this.a=d
this.b=e
this.c=f},
uE:function uE(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=6
_.f=160
_.r=null
_.w=0
_.x=-1
_.y=1
_.z=!0
_.as=0
_.at=-1.25
_.ax=1.35
_.ay=0
_.ch=1.25
_.CW=!1
_.dx=_.db=_.cy=_.cx=null
_.P$=0
_.T$=h
_.by$=_.bK$=0},
bKj:function bKj(){},
bKk:function bKk(){},
bKl:function bKl(){},
bKm:function bKm(){},
bKg:function bKg(){},
bKo:function bKo(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bKn:function bKn(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bKi:function bKi(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bKh:function bKh(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bVN:function bVN(d){this.a=d},
b6X:function b6X(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
cvj:function cvj(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cvk:function cvk(d,e){this.a=d
this.b=e},
cvi:function cvi(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0,a1,a2,a3,a4,a5,a6){var _=this
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
cvc:function cvc(){},
cvd:function cvd(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
cvb:function cvb(d){this.a=d},
cve:function cve(){},
cvf:function cvf(d,e,f){this.a=d
this.b=e
this.c=f},
cvg:function cvg(){},
cvh:function cvh(){},
cFi:function cFi(d,e){this.a=d
this.b=e},
Ge:function Ge(d,e,f,g,h,i,j,k,l){var _=this
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
avW:function avW(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
bsD:function bsD(d,e,f,g,h,i,j){var _=this
_.d=$
_.e=d
_.f=e
_.r=f
_.w=1
_.x=0
_.y=g
_.z=null
_.Q=h
_.as=!1
_.at=0
_.bw$=i
_.a8$=j
_.c=_.a=null},
f4U:function f4U(d){this.a=d},
f4T:function f4T(d){this.a=d},
f4R:function f4R(d){this.a=d},
f4S:function f4S(d){this.a=d},
f4L:function f4L(d){this.a=d},
f4M:function f4M(d,e){this.a=d
this.b=e},
f4O:function f4O(d){this.a=d},
f4P:function f4P(d){this.a=d},
f4N:function f4N(d){this.a=d},
f4Q:function f4Q(d){this.a=d},
Q4:function Q4(d,e,f){var _=this
_.a=d
_.b=e
_.c=f
_.d=1/0
_.e=-1/0
_.f=1/0
_.r=-1/0
_.w=1/0
_.x=-1/0},
cNf:function cNf(d){this.a=d},
fmm:function fmm(){},
aOn:function aOn(){},
bUH(d){var w,v,u=$.h4e.h(0,d)
if(u!=null)return C.f9(u,x.g7)
w=B.SG.h(0,d)
if(w==null)return C.f9(null,x.g7)
v=$.h4d.h(0,d)
if(v==null){v=new A.bUI(w,d).$0()
$.h4d.n(0,d,v)}return v},
aWK(d){var w=0,v=C.j(x.H),u
var $async$aWK=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:w=2
return C.b(A.bUH(d),$async$aWK)
case 2:u=J.aX(B.SG.gev(B.SG))
case 3:if(!u.C()){w=4
break}w=5
return C.b(A.bUH(u.gS(u)),$async$aWK)
case 5:w=3
break
case 4:return C.h(null,v)}})
return C.i($async$aWK,v)},
hLq(d){var w,v,u=new Float64Array(d*16)
for(w=0;w<d;++w){v=w*16
u[v+15]=1
u[v+10]=1
u[v+5]=1
u[v]=1}return u},
hiG(d,e,f){var w,v,u,t
if(d>e){w=d
v=e}else{w=e
v=d}if(w>f){u=w
w=f}else u=f
if(v>w){t=w
w=v
v=t}return(v*65536+w)*65536+u},
hLr(d,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=d.c,g=d.b===1,f=g?4:3,e=h.length
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
hiH(d,a0,a1,a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
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
ib1(d,e){var w=D.o.aD(d,16)&255,v=D.o.aD(d,8)&255,u=d&255,t=0.35+(0.299*w+0.587*v+0.114*u)/255,s=new A.fAf()
return C.a_(255,s.$2(w,e.gb6(e)*255*t),s.$2(v,e.gbc()*255*t),s.$2(u,e.gb9(e)*255*t))},
bcE:function bcE(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
bcZ:function bcZ(d,e){this.b=d
this.c=e},
bi7:function bi7(d,e,f){this.a=d
this.b=e
this.c=f},
drb:function drb(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=$},
MQ:function MQ(d,e,f,g,h){var _=this
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
bUI:function bUI(d,e){this.a=d
this.b=e},
bUz:function bUz(){},
bUt:function bUt(d,e){this.a=d
this.b=e},
bUs:function bUs(){},
bUB:function bUB(d,e,f){this.a=d
this.b=e
this.c=f},
bUC:function bUC(d){this.a=d},
bUD:function bUD(d){this.a=d},
bUA:function bUA(d,e){this.a=d
this.b=e},
bUx:function bUx(d){this.a=d},
bUy:function bUy(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
bUG:function bUG(d){this.a=d},
bUE:function bUE(){},
bUF:function bUF(d){this.a=d},
bUJ:function bUJ(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
bUu:function bUu(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
bUw:function bUw(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bUv:function bUv(d,e){this.a=d
this.b=e},
fAf:function fAf(){},
dwJ:function dwJ(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
dlk:function dlk(d,e){this.a=d
this.b=e},
hHZ(){var w,v=J.e0(6,x.ff)
for(w=0;w<6;++w)v[w]=new A.aTz()
return new A.bIB(v)},
agd(d){return A.i2J(d)},
i2J(d){var w=0,v=C.j(x.eT),u,t=2,s=[],r,q,p,o,n
var $async$agd=C.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:if(d==null){u=null
w=1
break}t=4
w=7
return C.b(C.fFE(d,null),$async$agd)
case 7:r=f
n=J
w=8
return C.b(r.lP(),$async$agd)
case 8:q=n.a3u(f)
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
return C.i($async$agd,v)},
hBs(a5,a6,a7,a8,a9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
if(a8.a){w=a7/8
if(a9===0){v=D.k.bf(w)
A.mX(a5,a6,a7,D.o.F(v,2)===0?0:1+D.o.ao(v,2))}else A.mX(a5,a6,a7,a9+1+D.k.bf(w))
return}u=B.a5S[a8.e]
w=a6.a
t=a6.b
s=0+t
r=new C.a3(0,0,0+w,s)
$.S()
q=C.J()
q.sam(new C.a9(D.a5,D.a8,D.x,C.a([u.b,u.c],x.O),null,null).aA(0,r))
a5.aQ(r,q)
q=t*0.04
p=r.cr(-q)
o=C.J()
o.b=D.a9
o.c=t*0.025
n=u.e
o.r=n.gp(0)
a5.aQ(p,o)
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
g=C.bK(new C.u(i/2,h/2),o/v,j/v)
j=a5.a
J.bl(j.save())
o=t*0.05
j.clipRRect(C.e7(C.br(k,new C.aP(o,o))),$.nI(),!0)
o=C.J()
o.Q=D.ci
a5.oF(l,g,k,o)
j.restore()
f=p+m*0.8}else f=m
e=a8.w
if(e==null)e=$.Wo
p=t*0.3
o=f+p
p=m+p
d=new C.a3(f,m,o,p)
j=d.gbL()
o-=f
i=C.J()
i.r=B.Fv.gp(0)
a5.ad(j,o/2,i)
if(e!=null){j=e.c
i=e.d
v=Math.min(o*0.8/j,(p-m)*0.8/i)
o=C.bK(d.gbL(),i*v,j*v)
h=C.J()
h.Q=D.ci
a5.oF(e,new C.a3(0,0,j,i),o,h)}o=new A.fTq()
a0=w-f-m
j=u.d
a1=o.$4(a8.b,t*0.17,j,a0)
a1.a4(a5,new C.u(f,p+q))
a2=o.$5$w(a8.c,t*0.09,n,a0,D.U)
n=a1.b.a.c
a2.a4(a5,new C.u(f,p+t*0.06+n.gba(n)))
a3=o.$6$lines$w(a8.d,t*0.08,j.j(0.85),a0,1,D.H)
j=a3.b
o=j.c
j=j.a.c
a3.a4(a5,new C.u(w-m-o,t-m-j.gba(j)))
a4=(D.k.F(a7*0.35,1.6)-0.3)*w
j=a5.a
J.bl(j.save())
j.clipRect(C.bH(r),$.mA()[1],!0)
t=C.J()
t.r=D.c.j(0.1).gp(0)
a5.aQ(new C.a3(a4,0,a4+w*0.1,s),t)
j.restore()},
icl(d,e){var w,v,u,t,s=d.w
if(s.length===0){s=d.e
w=d.r
return new C.cw([-s/2,s/2,w+d.f,w])}v=s[e]
s=v.e
u=d.e*s
t=d.r+v.d
return new C.cw([-u/2,u/2,t+d.f*s,t])},
bCn(d,e,f,g){var w,v,u,t,s,r,q,p,o=new C.a3(0,0,0+e.a,0+e.b)
$.S()
w=C.J()
w.r=B.bkc.gp(0)
d.aQ(o,w)
v=o.cr(-(e.gdE()*0.06))
w=d.a
J.bl(w.save())
w.clipRect(C.bH(v),$.mA()[1],!0)
u=v.a
t=v.b
w.translate(u,t)
u=v.c-u
t=v.d-t
if((g&1)===0){s=0+u
r=0+t
q=C.J()
q.sam(B.c7Q.aA(0,new C.a3(0,0,s,r)))
d.aQ(new C.a3(0,0,s,r),q)
p=t*0.82
J.bl(w.save())
w.translate((u-p)/2,(t-p)/2)
A.hBx(d,new C.av(p,p),f)
w.restore()}else A.mX(d,new C.av(u,t),f,g)
w.restore()},
i7n(d,e,f){var w,v,u,t,s=e.a,r=e.b
$.S()
w=C.J()
w.r=B.ajs.gp(0)
d.aQ(new C.a3(0,0,0+s,0+r),w)
v=C.J()
v.r=L.aib.gp(0)
w=s*0.12
u=r*0.07
t=w+s*0.76
d.aQ(new C.a3(w,u,t,u+r*0.38),v)
u=r*0.52
d.aQ(new C.a3(w,u,t,u+r*0.4),v)
u=C.J()
u.r=F.eY.gp(0)
d.ad(new C.u(s*0.82,r*0.5),s*0.05,u)},
hbE(d9,e0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6=x.z,d7=C.a([],d6),d8=new A.f3(d7)
d8.f=0
d8.xe(B.hi7,B.h6h,B.h6g,B.hi6,B.bmf,B.e8)
d8.f=1
d8.xe(B.hbG,B.h9h,B.hjR,B.hb5,B.ML,B.e8)
for(w=-2100;w<2100;w+=90){v=w+45
d8.xe(new A.q(w,0.8,637),new A.q(v,0.8,637),new A.q(v,0.8,643),new A.q(w,0.8,643),L.Mo,B.e8)}d8.f=2
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
case"neon":n=D.b8
break
case"screen":n=D.au
o=6
break
case"roof":n=D.aw
break
case"gate":n=D.d7
break
case"duo":n=D.b8
break
case"line3":n=D.ba
break
case"far3":n=D.ay
break
case"skyline":n=D.bq
break
case"lines6":n=D.aP
break
case"scatter":n=D.b8
break
default:n=F.eY}m=p==="roof"
l=m?3:2
k=q?720:900
j=k*t/u
i=C.a([],x.a)
r=q?r:1
for(h=e0.b,g=x.o,f=-o,e=f-0.8,d=p==="highway",a0=f/2,f=p!=="neon",a1=a0-0.2,a2=p==="screen",a3=s-16,a4=(14+s-7)/2,a5=s-21,a6=s-7,a7=0;a7<r;++a7){a8=q?v[a7]:B.ad6
a9=a8.e
b0=u*a9
b1=t*a9
b2=new A.fBE(a8)
b3=C.a([],d6)
b4=new A.f3(b3)
b4.f=l
b5=C.a([],d6)
b6=new A.f3(b5)
b6.f=l
b7=A.icl(d9,a7).a
b8=b7[0]
b9=b7[1]
c0=b7[2]
c1=b7[3]
c2=(b8+b9)/2
c3=(c0+c1)/2
b7=b2.$1(new A.q(c2,c3,a1))
c4=!f||a2?D.au:D.cr
c5=a8.c
b4.ww(b7,new A.q(b0+16,b1+16,o),c4,0.2,c5)
c6=7*Math.max(1,a9*0.8)
c4=b0+14
b6.ww(b2.$1(new A.q(c2,c0+3,3)),new A.q(c4,c6,8),n,0.4,c5)
b6.ww(b2.$1(new A.q(c2,c1-3,3)),new A.q(c4,c6,8),n,0.4,c5)
b7=b1+14
b6.ww(b2.$1(new A.q(b8-3,c3,3)),new A.q(c6,b7,8),n,0.4,c5)
b6.ww(b2.$1(new A.q(b9+3,c3,3)),new A.q(c6,b7,8),n,0.4,c5)
D.d.v(d7,b3)
D.d.v(d7,b5)
b5=C.a([],d6)
c7=new A.f3(b5)
c8=Math.max(6,b0*0.018)
c9=new A.fBF(i,l)
switch(q?"sep":p){case"tower":c7.dm(new A.q(0,0,a0),new A.q(0,a6,a0),c8*1.9,D.hm,12)
c7.dm(new A.q(0,0,a0),new A.q(0,14,a0),c8*2.8,D.au,12)
break
case"screen":c7.aE(new A.q(0,7,-10),new A.q(b0*0.6,14,70),D.au)
c7.aE(new A.q(0,a4,a0),new A.q(60,a5,14),D.hm)
break
case"roof":c7.kX(B.h1P,B.h8p,B.big,0.1,4)
c7.kX(B.h2t,B.h8v,D.dn,0.15,4)
c7.hn(B.h28,B.h8u,D.dn,4)
c7.kX(B.hil,B.h5g,B.bju,0.1,2)
c7.hn(B.hik,B.h5u,D.dn,2)
c7.aE(B.h5J,B.h7a,B.nY)
c7.aE(B.h1D,B.h3V,D.el)
c9.$6$px(B.hga,0,210,126,new A.fBx(),360)
c9.$6$px(B.hhp,0,210,126,new A.fBy(),360)
c9.$6$px(B.hcv,0,72,116,A.ilF(),140)
c9.$6$px(B.hle,0,130,80,new A.fBz(),300)
for(d0=0;d0<3;++d0){d1=-60-d0*90
c9.$6$px(new A.q(310.8,140,d1),1.5707963267948966,80,64,new A.fBA(d0),240)
c9.$6$px(new A.q(310.8,55,d1),1.5707963267948966,60,60,A.he5(),200)}for(d0=0;d0<2;++d0){d1=-65-d0*110
c9.$6$px(new A.q(-490.8,95,d1),-1.5707963267948966,90,60,new A.fBB(d0),240)
c9.$6$px(new A.q(-490.8,40,d1),-1.5707963267948966,50,50,A.he5(),180)}c9.$6$px(new A.q(0,100,-285.8),3.141592653589793,580,170,A.hBj(),900)
break
case"gate":for(b3=b0/2+25,b7=s+b1,c4=b7+26,c5=c8*1.6,d2=0;d2<2;++d2){d3=F.hd[d2]*b3
c7.dm(new A.q(d3,0,a0),new A.q(d3,c4,a0),c5,D.hm,12)}c7.aF(new A.q(0,b7+17,a0),new A.q(b0+80,18,22),D.hm,0.2)
break
default:for(b3=s+a8.d-7,d2=0;d2<2;++d2){b7=F.hd[d2]*b0*0.3
c7.dm(b2.$1(new A.q(b7,0,a0)),b2.$1(new A.q(b7,b3,a0)),c8,D.hm,10)}if(d)c7.aE(new A.q(0,a3,14),new A.q(c4,3,24),D.hm)}D.d.v(d7,b5)
d4=h[a7]
i.push(new A.fo(C.a([b2.$1(new A.q(b8,c0,0.8)),b2.$1(new A.q(b9,c0,0.8)),b2.$1(new A.q(b9,c1,0.8)),b2.$1(new A.q(b8,c1,0.8))],g),0,new A.fBC(d4,a7),k,j,60,l,0,!1))
i.push(new A.fo(C.a([b2.$1(new A.q(b9,c0,e)),b2.$1(new A.q(b8,c0,e)),b2.$1(new A.q(b8,c1,e)),b2.$1(new A.q(b9,c1,e))],g),0,new A.fBD(d4,a7),k,j,60,l,0,!1))}d6=C.a([],d6)
d5=new A.f3(d6)
for(d2=0;d2<9;++d2){v=B.d4m[d2]
w=v.a
d1=v.b
if(m&&d1>200)continue
d5.dm(new A.q(w,0,d1),new A.q(w,55,d1),7,B.qe,6)
d5.ee(new A.q(w,98,d1),46,E.Y0,3,6)}for(d2=0;d2<6;++d2){w=B.duo[d2]
d5.dm(new A.q(w,0,580),new A.q(w,90,580),3,D.hm,5)
d5.ee(new A.q(w,95,580),8,B.o9,3,6)}D.d.v(d7,d6)
return new A.qW(d7,B.SL,B.uV,i,null,!1,6000)},
htz(d){return d*d*(3-2*d)},
fny(d,e,f,g,h){var w=new A.fnz(h)
return new A.q(w.$4(d.a,e.a,f.a,g.a),w.$4(d.b,e.b,f.b,g.b),w.$4(d.c,e.c,f.c,g.c))},
huw(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=D.k.E(e,0,30)
if(f==null){w=C.a([],x.n)
for(v=J.a7(d),u=0;u<v.gK(d);++u)w.push(30*u/(v.gK(d)-1))
t=w}else t=f
w=J.a7(d)
v=J.a7(t)
s=0
for(;;){r=s+2
if(!(r<w.gK(d)&&v.h(t,s+1)<=m))break;++s}w=s+1
q=A.htz(D.k.E((m-v.h(t,s))/(v.h(t,w)-v.h(t,s)),0,1))
v=new A.fqY(d)
p=s-1
o=A.fny(v.$1(p).a,v.$1(s).a,v.$1(w).a,v.$1(r).a,q)
n=A.fny(v.$1(p).b,v.$1(s).b,v.$1(w).b,v.$1(r).b,q)
r=Math.sin(m*1.3)
v=Math.sin(m*1.9)
w=Math.cos(m*1.1)
return new C.z(new A.q(o.a+r*3,Math.max(o.b+v*2.5,18),o.c+w*3),n)},
ib9(d){return $.ib8.c3(0,d.a,new A.fAl(d))},
hx0(d){return $.iba.c3(0,d.a,new A.fAi(d))},
ick(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=d.a
if(i==="scatter")return A.huw(B.dij,e,null)
if(d.w.length!==0)return A.huw(A.hx0(d),e,A.ib9(d))
w=B.dAb.h(0,i)
if(w==null)w=B.aQq
v=B.cxW[w.a]
u=w.b?-1:1
t=new A.q(d.ga4I(0),d.r+d.gGW()/2,d.ga4K())
s=new A.fBp(t,u,d)
r=new A.fBq(t,u,d)
q=D.k.E(e,0,30)
i=v.length
p=0
for(;;){o=p+2
if(!(o<i&&v[p+1].a<=q))break;++p}i=v[p].a
n=p+1
m=A.htz(D.k.E((q-i)/(v[n].a-i),0,1))
i=new A.fBr(v)
l=p-1
k=A.fny(s.$1(i.$1(l)),s.$1(i.$1(p)),s.$1(i.$1(n)),s.$1(i.$1(o)),m)
j=A.fny(r.$1(i.$1(l)),r.$1(i.$1(p)),r.$1(i.$1(n)),r.$1(i.$1(o)),m)
return new C.z(new A.q(k.a,Math.max(k.b,18),k.c),j)},
lJ:function lJ(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
rj:function rj(d,e,f,g,h,i,j,k,l,m){var _=this
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
bID:function bID(d){this.a=d},
Hz:function Hz(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
aTz:function aTz(){var _=this
_.a=!0
_.b="NEW GLOBAL MOVEMENT FOR YOUTH"
_.c="Videos, slides, blogs and books."
_.d="ngmy.org"
_.e=0
_.x=_.w=_.r=_.f=null},
bIB:function bIB(d){this.a="highway"
this.b=d},
bIC:function bIC(d){this.a=d},
fTq:function fTq(){},
fBE:function fBE(d){this.a=d},
fBF:function fBF(d,e){this.a=d
this.b=e},
fBG:function fBG(d,e){this.a=d
this.b=e},
fBx:function fBx(){},
fBy:function fBy(){},
fBz:function fBz(){},
fBA:function fBA(d){this.a=d},
fBB:function fBB(d){this.a=d},
fBC:function fBC(d,e){this.a=d
this.b=e},
fBD:function fBD(d,e){this.a=d
this.b=e},
hp:function hp(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
fnz:function fnz(d){this.a=d},
fqY:function fqY(d){this.a=d},
fAl:function fAl(d){this.a=d},
fAk:function fAk(){},
fAi:function fAi(d){this.a=d},
fAj:function fAj(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fBp:function fBp(d,e,f){this.a=d
this.b=e
this.c=f},
fBq:function fBq(d,e,f){this.a=d
this.b=e
this.c=f},
fBr:function fBr(d){this.a=d},
ap1:function ap1(d){this.a=d},
ap2:function ap2(d,e){var _=this
_.d=d
_.r=_.f=_.e=$
_.w=e
_.x=-1
_.y=!1
_.z=""
_.c=_.a=null},
c4Q:function c4Q(d){this.a=d},
c4O:function c4O(d){this.a=d},
c4N:function c4N(){},
c4B:function c4B(d){this.a=d},
c4H:function c4H(d,e){this.a=d
this.b=e},
c4P:function c4P(d){this.a=d},
c4E:function c4E(d,e){this.a=d
this.b=e},
c4D:function c4D(d){this.a=d},
c4b:function c4b(){},
c4C:function c4C(d){this.a=d},
c4G:function c4G(d){this.a=d},
c4F:function c4F(d,e,f){this.a=d
this.b=e
this.c=f},
c4A:function c4A(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
c4z:function c4z(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
c4w:function c4w(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
c4x:function c4x(d,e){this.a=d
this.b=e},
c4r:function c4r(d,e,f){this.a=d
this.b=e
this.c=f},
c4y:function c4y(d){this.a=d},
c4u:function c4u(d,e){this.a=d
this.b=e},
c4t:function c4t(){},
c4v:function c4v(d,e){this.a=d
this.b=e},
c4s:function c4s(){},
c4g:function c4g(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
c4f:function c4f(){},
c4h:function c4h(d){this.a=d},
c4i:function c4i(d){this.a=d},
c4j:function c4j(d){this.a=d},
c4k:function c4k(d,e){this.a=d
this.b=e},
c4l:function c4l(d,e,f){this.a=d
this.b=e
this.c=f},
c4m:function c4m(d,e){this.a=d
this.b=e},
c4n:function c4n(d,e,f){this.a=d
this.b=e
this.c=f},
c4o:function c4o(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
c4e:function c4e(){},
c4p:function c4p(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
c4c:function c4c(){},
c4d:function c4d(){},
c4q:function c4q(d){this.a=d},
c4K:function c4K(d){this.a=d},
c4L:function c4L(d){this.a=d},
c4J:function c4J(d){this.a=d},
c4M:function c4M(d){this.a=d},
c4I:function c4I(d){this.a=d},
hbu(d,e,f,g){var w,v,u,t=null,s=e.r
s=s==null?t:D.k.V(s)
w=D.k.V(f)
v=e.b
v=v==null?t:v.l()
u=d+"|"+C.w(s)+"|"+w+"|"+C.w(v)
v=$.hwX.h(0,u)
if(v==null){s=C.fz(t,t,g,t,C.cT(t,t,t,t,t,t,t,t,t,e,d),D.a4,D.bX,t,D.dA,D.bV)
s.o2(f)
$.hwX.n(0,u,s)}else s=v
return s},
mX(a5,a6,a7,a8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4=D.o.F(a8,17)
if(a4===0){A.fTx(a5,a6,a7,0)
w=a6.a
v=(D.k.F(a7*0.35,1.6)-0.3)*w
u=a5.a
J.bl(u.save())
t=0+a6.b
u.clipRect(C.bH(new C.a3(0,0,0+w,t)),$.mA()[1],!0)
$.S()
s=C.J()
s.r=D.c.j(0.12).gp(0)
a5.aQ(new C.a3(v,0,v+w*0.12,t),s)
u.restore()
return}if(a4>=8){K.Sd(a5,a6,a4-8,a7)
return}r=B.cZm[a4-1]
w=a6.a
u=a6.b
q=new C.a3(0,0,0+w,0+u)
t=$.S()
s=C.J()
s.sam(new C.a9(D.az,D.aE,D.x,C.a([r.c,r.d],x.O),a3,a3).aA(0,q))
a5.aQ(q,s)
s=a5.a
J.bl(s.save())
s.clipRect(C.bH(q),$.mA()[1],!0)
p=C.J()
p.r=D.c.j(0.07).gp(0)
for(o=u*0.4,n=w*0.07,m=a7*w*0.05,l=w*2,k=w*0.4,j=x.g,t=t.r,i=-4;i<14;++i){v=D.k.F(i*w/7+m,l)-k
h=C.a([],j)
g=new C.aF(t,D.ag,a3,a3,h)
h.push(new C.aY(v,0))
h.push(new C.aq(v+n,0))
f=v-o
h.push(new C.aq(f+n,u))
h.push(new C.aq(f,u))
h.push(new C.bt())
e=p.G()
h=g.gbu().a.snapshot()
s.drawPath((g.e=new C.cd(h)).a,e)
e.delete()}t=Math.sin(a7*2)
n=C.J()
m=r.e
n.r=m.j(0.18).gp(0)
a5.ad(new C.u(w*0.88,u*0.3),u*(0.22+0.03*t),n)
s.restore()
s=w*0.06
A.hbu(r.a,C.l(a3,a3,D.c,a3,a3,a3,a3,a3,a3,a3,a3,u*0.22,a3,a3,D.u,a3,a3,!0,a3,u*0.012,a3,a3,a3,a3,a3,a3),w*0.9,1).a4(a5,new C.u(s,u*0.2))
A.hbu(r.b,C.l(a3,a3,m,a3,a3,a3,a3,a3,a3,a3,a3,u*0.1,a3,a3,D.U,a3,a3,!0,a3,a3,a3,a3,a3,a3,a3,a3),w*0.8,2).a4(a5,new C.u(s,u*0.5))
d=$.Wo
m=u*0.76
if(d!=null){t=d.c
n=d.d
a0=Math.min((s+o-s)/t,(m+u*0.16-m)/n)
o=C.J()
o.Q=D.ci
a5.oF(d,new C.a3(0,0,t,n),new C.a3(s,m,s+t*a0,m+n*a0),o)}else{a1=C.fz(a3,a3,a3,a3,C.cT(a3,a3,a3,a3,a3,a3,a3,a3,a3,C.l(a3,a3,D.c,a3,a3,a3,a3,a3,a3,a3,a3,u*0.12,a3,a3,D.u,a3,a3,!0,a3,a3,a3,a3,a3,a3,a3,a3),"NGMY"),D.a4,D.bX,a3,D.dA,D.bV)
a1.eg()
a1.a4(a5,new C.u(s,m))}a2=A.hbu("ngmy.org",C.l(a3,a3,D.ac,a3,a3,a3,a3,a3,a3,a3,a3,u*0.08,a3,a3,D.H,a3,a3,!0,a3,a3,a3,a3,a3,a3,a3,a3),400,1)
a2.a4(a5,new C.u(w-a2.b.c-w*0.05,u*0.82))},
G6:function G6(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
Lk(d){return D.d.dN(B.RD,new A.fE9(d),new A.fEa())},
yT(d){var w=B.hF.h(0,d.b),v=d.e*3.141592653589793/2,u=w.d/2+30
return new C.z(d.c+Math.sin(v)*u,d.d+Math.cos(v)*u)},
hJt(d){var w=C.a([],x.C),v=C.a([],x.fW),u=new C.e6()
u.cZ(7)
w=new A.bN1(d,u,w,v)
w.bAd(d,7)
return w},
zi:function zi(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fE9:function fE9(d){this.a=d},
fEa:function fEa(){},
xt:function xt(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=null
_.w=_.r=!1
_.x=0},
aUJ:function aUJ(d,e,f,g,h,i,j){var _=this
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
a4E:function a4E(d,e,f,g,h,i,j,k){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.w=j
_.x=k},
akF:function akF(d,e,f){this.a=d
this.b=e
this.c=f},
bN1:function bN1(d,e,f,g){var _=this
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
bN3:function bN3(d){this.a=d},
bN5:function bN5(d,e){this.a=d
this.b=e},
bN6:function bN6(){},
bN2:function bN2(d,e){this.a=d
this.b=e},
bN7:function bN7(){},
bN4:function bN4(d,e,f){this.a=d
this.b=e
this.c=f},
hhc(d){var w=d.x
return C.bw(w.length,D.d.cG(w,0,new A.bL8()),D.h,D.h,D.h,D.h,D.h,D.h,D.h,D.h,D.h,D.h,D.h,D.h,D.h,D.h,D.h,D.h,D.h,D.h)},
imR(d){var w,v,u
for(w=0,v=0;u=v+1,u<d.length;v=u)w+=Math.sqrt(Math.pow(d[u].a-d[v].a,2)+Math.pow(d[u].b-d[v].b,2))
return w},
imX(d,e){var w,v,u,t,s,r,q,p,o
for(w=e,v=0;u=v+1,u<d.length;v=u){t=d[u]
s=d[v]
r=t.a-s.a
q=t.b-s.b
p=Math.sqrt(r*r+q*q)
if(p<0.000001)continue
if(w<=p||v+2===d.length){o=D.k.E(w/p,0,1)
t=d[v]
return new C.b5(t.a+r*o,t.b+q*o,Math.atan2(r,q))}w-=p}return new C.b5(D.d.gak(d).a,D.d.gak(d).b,0)},
bL7:function bL7(d){var _=this
_.a=d
_.e=_.d=_.c=_.b=$
_.f=-1},
bL8:function bL8(){},
dlQ:function dlQ(d,e){this.a=d
this.b=e},
h4K(d,e,f){return new A.aZm(f,d,e,null)},
hc_(d){return D.k.cO((1-D.k.E(d,0,1))*12)},
aU4:function aU4(d){var _=this
_.b=_.a=1
_.d=_.c=0
_.e=1
_.f=!1
_.r=0
_.w=!1
_.P$=0
_.T$=d
_.by$=_.bK$=0},
aZm:function aZm(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
UL:function UL(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
c2r:function c2r(d){this.a=d},
rX:function rX(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
fs0(d){var w=d.d-d.b-200
return new C.br8([157.07963267948966,2*w+380+628.3185307179587,w,190])},
Lp(d,e){var w,v=A.fs0(d).a,u=v[2],t=v[3],s=v[0]
v=v[1]
w=D.k.F(e,v)
if(w<0)w+=v
v=new A.fHF()
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
h3o(d,e,f){return new A.aU3(d,e,f)},
hcg(d,e){var w=D.k.F(e+d.c,28)
if(w<12)return 0
if(w<15)return 1
return 2},
hsf(d,e,f,g){var w=x.n
w=new A.bxW(d,e,f,g,C.a([],w),C.a([],w))
w.bBj(d,e,f,g)
return w},
hIA(){var w,v=C.a([],x.n)
for(w=0;w<4;++w)v.push(B.ks[w].r)
return new A.bL9(v,C.bZ(4,0,!1,x.i),B.aBa)},
i9G(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=C.a([],x.z)
for(w=d.length,v=e.a,u=e.b,t=e.c,s=x.o,r=0;r<d.length;d.length===w||(0,C.K)(d),++r){q=d[r]
p=C.a([],s)
for(o=q.a,n=o.length,m=0;m<o.length;o.length===n||(0,C.K)(o),++m){l=o[m]
p.push(new A.q(l.a*v,l.b*u,l.c*t))}k.push(new A.kr(p,q.b,q.c,q.d,q.e,q.f,q.r,q.w,q.x,q.y,q.z))}return k},
i1F(){var w,v,u,t,s=new A.f3(C.a([],x.z))
s.r=!0
s.aF(B.h22,B.h4x,D.d7,0.3)
s.aF(B.hiz,B.h4n,D.bN,0.2)
s.aF(B.abp,B.h4k,B.i4,0.6)
s.aF(B.hcQ,B.h56,B.i4,0.6)
s.aE(B.hbL,B.h4z,D.bs)
for(w=0;w<2;++w)s.aE(new A.q(75.5,9,B.a5C[w]),B.abu,B.o9)
for(w=0;w<2;++w){v=B.doR[w]
for(u=0;u<2;++u){t=B.doI[u]
s.dm(new A.q(v,7,t-1.5),new A.q(v,7,t+1.5),7.5,D.nm,12)}}return s},
i8e(d,e){var w,v,u,t,s,r=new A.f3(C.a([],x.z))
r.r=!0
r.aF(B.aX8,B.h3z,D.bN,0.4)
r.aF(B.hiT,B.h7E,D.bN,0.4)
r.aF(B.hiU,B.h7K,B.i4,0.6)
r.aE(B.xk,B.h3E,D.dF)
w=D.k.F(d*5+e,2)<1
r.aF(B.hlq,B.aXn,w?D.aw:D.ek,0.6)
r.aF(B.hgC,B.aXn,w?D.d7:D.d3,0.6)
for(v=0;v<2;++v){u=B.doN[v]
for(t=0;t<2;++t){s=B.doG[t]
r.dm(new A.q(u,6.5,s-1.5),new A.q(u,6.5,s+1.5),6.5,D.nm,12)}}return r},
ip3(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=x.z,a5=C.a([],a4)
for(w=0;w<4;++w){v=B.ks[w]
u=$.aS6()
t=D.d.cp(B.ks,v)
u.FN(0,a6)
t=A.Lp(B.ks[t],u.a[t]).a
s=t[0]
r=t[1]
q=t[2]
p=t[3]
u=v.a==="bus"
o=u?A.i1F():A.i8e(a6,w)
u=u?B.aYg:B.aXw
D.d.v(a5,A.nH(A.i9G(o.a,u),0,Math.atan2(q,p)-1.5707963267948966,new A.q(s,0,r)))}for(u=$.bGo(),t=u.length,n=0;n<u.length;u.length===t||(0,C.K)(u),++n)D.d.v(a5,A.i5B(u[n],a6))
for(u=a6*0.9,t=x.o,m=a6*22,l=a6*0.09,w=0;w<2;++w){k=B.a5c[w].a
j=k[0]
i=k[1]
h=k[2]
g=l+w*3.141592653589793
k=Math.cos(g)
f=Math.sin(g)
e=Math.atan2(-Math.sin(g),Math.cos(g))
d=C.a([],a4)
a0=new A.f3(d)
a0.r=!0
a0.aF(B.dX,B.h75,D.bB,0.4)
a0.aF(B.h4J,B.h3I,B.i4,0.7)
a0.dm(B.h4Q,B.h8t,2.6,D.bB,8)
a0.aE(B.h8q,B.hgc,D.bN)
a0.dm(B.xk,B.abn,1.2,B.hg,8)
for(a1=0;a1<2;++a1)a0.aEm(new A.q(0,13.4,0),B.haK,B.hg,m+a1*3.141592653589793/2)
for(n=0;n<2;++n){a2=E.aBL[n]
a0.aE(new A.q(0,-11,a2),B.haq,B.hg)
a0.aE(new A.q(-10,-6,a2),B.aYe,B.hg)
a0.aE(new A.q(10,-6,a2),B.aYe,B.hg)}for(n=0;n<2;++n){a3=B.aBF[n]
a0.iV(C.a([new A.q(a3*0.45,-10,0),new A.q(a3,-22,0)],t),0.3,B.hg,!1,0,4)}D.d.v(a5,A.nH(d,0,e-1.5707963267948966,new A.q(j+520*k,h+Math.sin(u+w)*5,i+520*f)))}return a5},
ip4(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=C.a([],x.a),f=new A.h1q()
for(w=0;w<4;++w){v={}
u=B.ks[w]
v.a=v.b=null
t=$.aS6()
s=D.d.cp(B.ks,u)
t.FN(0,d)
s=A.Lp(B.ks[s],t.a[s]).a
v.b=s[0]
v.a=s[1]
s=new A.h1o(v,Math.atan2(s[2],s[3])-1.5707963267948966)
v=u.a==="bus"
r=v?B.aYg:B.aXw
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
g.push(f.$7(s.$3(q,o,p),s.$3(v,o,p),s.$3(v,n,p),s.$3(q,n,p),t+5,1200,220))}for(v=d*0.09,t=d*0.9,w=0;w<2;++w){s=B.a5c[w].a
l=s[0]
k=s[1]
j=s[2]
i=s[3]
h=v+w*3.141592653589793
s=Math.cos(h)
p=Math.sin(h)
p=new A.h1p(Math.atan2(-Math.sin(h),Math.cos(h))-1.5707963267948966,l+520*s,j+Math.sin(t+w)*5,k+520*p)
g.push(f.$7(p.$2(-42,-22),p.$2(42,-22),p.$2(42,-44),p.$2(-42,-44),i,900,230))
g.push(f.$7(p.$2(42,-22.3),p.$2(-42,-22.3),p.$2(-42,-44.3),p.$2(42,-44.3),i,900,230))}return g},
i5B(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k=B.ks[d.a*2],j=d.b,i=A.Lp(k,j).a,h=i[0],g=i[1],f=i[2],e=i[3]
j=A.Lp(k,j+22).a
j=[j[0],j[1],f,e,h+-e*56,g+f*56]
w=A.hcg(d,a0)
v=D.k.F(a0+d.c,28)
u=v>=17&&v<26
i=C.a([],x.z)
t=new A.f3(i)
t.r=!0
t.dm(B.dX,B.aXh,1.7,D.hm,6)
t.aF(B.h37,B.h9d,D.au,0.3)
for(s=w===2,r=w===1,q=w===0,p=0;p<3;++p){o=!0
if(!(p===0&&s))if(!(p===1&&r)){n=p===2&&q
o=n}n=o?B.dlu[p]:B.cM8[p]
m=o?0.9:0.1
t.fu(new A.q(-3.9,74-p*8,0),3.3,n,4,7,m)}t.aF(B.h2C,B.h3J,D.au,0.3)
if(u){t.ee(B.hau,1.6,D.bf,4,6)
t.aE(B.hg8,B.hfN,D.bf)
t.aE(B.haV,B.aYH,D.bf)
t.aE(B.heJ,B.aYH,D.bf)}else{t.aE(B.hcc,B.hhb,D.aw)
for(l=-2;l<=1;++l)t.aE(new A.q(l*1.25+0.6,40,-4.9),B.hhB,D.aw)
t.aE(B.hkC,B.hcl,D.aw)}return A.nH(i,0,Math.atan2(j[2],j[3])-1.5707963267948966,new A.q(j[4],0,j[5]))},
idh(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=C.a([],x.z),i=new A.f3(j)
i.f=1
i.e=90
w=new A.fDI(i)
for(v=$.bGo(),u=v.length,t=0;t<v.length;v.length===u||(0,C.K)(v),++t){s=v[t]
r=B.ks[s.a*2]
q=s.b
p=A.Lp(r,q+22).a
o=p[0]
n=p[1]
m=p[2]
l=p[3]
for(k=-4;k<=4;++k)w.$8(o,n,m,l,0,-25+k*11,18,5)
q=A.Lp(r,q-6).a
w.$8(q[0],q[1],m,l,0,0,2.2,46)}return j},
SQ:function SQ(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.d=f
_.r=g
_.w=h},
fHF:function fHF(){},
aU3:function aU3(d,e,f){this.a=d
this.b=e
this.c=f},
bxW:function bxW(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=-1},
fkH:function fkH(d,e){this.a=d
this.b=e},
bL9:function bL9(d,e,f){var _=this
_.a=d
_.b=e
_.c=0
_.d=f},
bLa:function bLa(){},
h1q:function h1q(){},
h1r:function h1r(d){this.a=d},
h1o:function h1o(d,e){this.a=d
this.b=e},
h1p:function h1p(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fDI:function fDI(d){this.a=d},
fDJ:function fDJ(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
Ap:function Ap(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.x=0},
cCw:function cCw(d,e,f){var _=this
_.a=d
_.b=e
_.d=_.c=$
_.e=f
_.f=null
_.w=_.r=0
_.x=1
_.y=0},
cCy:function cCy(d){this.a=d},
cCz:function cCz(){},
cCx:function cCx(){},
hCs(d){return d.b==="hq"?12:D.o.E(D.k.bf((210+D.o.F(B.zt[d.f].l(),5)*24)/22),8,14)},
h3n(d,e,f){var w=new A.bKT(d,e,f,B.aBi,B.a3B,C.a([],x.a),C.aV(x.S))
w.at=new A.bak(null,-138,138,12,316,0,296,3.141592653589793,w.cdr())
w.ax=w.cIv()
return w},
i7o(d,e,f){var w,v,u,t,s=null,r=e.a,q=e.b,p=C.br(new C.a3(0,0,0+r,0+q),D.ih)
$.S()
w=C.J()
w.r=B.beI.gp(0)
d.az(p,w)
w=C.br(new C.a3(6,6,6+(r-12),6+(q-12)),D.jJ)
p=C.J()
p.b=D.a9
p.c=5
p.r=F.eY.gp(0)
d.az(w,p)
v=C.dm()
for(p=r-50,u=120;;){w=new C.iH(new C.es(f,s,s,D.cL,s,s,s,s,s,s,new C.F(!0,E.iC,s,s,s,s,u,D.u,s,4,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s)),D.a4,D.bX,new C.jg(1),s,s,s,s,D.bV,s)
w.eg()
v.b=w
if(w.b.c<=p||u<20)break
u-=6}p=v.bi()
w=v.bi().b.c
t=v.bi().b.a.c
p.a4(d,new C.u((r-w)/2,(q-t.gba(t))/2))},
pJ:function pJ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bKT:function bKT(d,e,f,g,h,i,j){var _=this
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
bKU:function bKU(){},
bL2:function bL2(d){this.a=d},
bL3:function bL3(d){this.a=d},
bL4:function bL4(d){this.a=d},
bL5:function bL5(d){this.a=d},
bKV:function bKV(d){this.a=d},
bKW:function bKW(){},
bKX:function bKX(){},
bKY:function bKY(d){this.a=d},
bKZ:function bKZ(){},
bL_:function bL_(d){this.a=d},
bL0:function bL0(d){this.a=d},
bL1:function bL1(d){this.a=d},
bL6:function bL6(d){this.a=d},
h3u(d,e){var w=C.a([],x.gM),v=C.a([new A.Mb(),new A.Mb(),new A.Mb()],x.gQ),u=C.a([],x.s),t=new C.e6()
t.cZ(e)
w=new A.aUt(d,t,w,v,u)
w.bAb(d,e)
return w},
hhp(d,e){var w,v,u,t,s,r,q,p,o=J.a7(e),n=x.fF,m=n.a(o.h(e,"wired"))
if(m==null)m=D.uY
w=n.a(o.h(e,"plumbed"))
if(w==null)w=D.uY
for(o=d.gr_(),n=o.length,v=J.a7(w),u=J.a7(m),t=0;t<o.length;o.length===n||(0,C.K)(o),++t){s=o[t]
r=""+s.a
q=u.h(m,r)
if(C.ra(q)){s.ay=!q
s.CW=null}p=v.h(w,r)
if(C.ra(p)){r=s.c
r=r==="bathroom"||r==="kitchen"}else r=!1
if(r){s.ch=!p
s.fr=null}}},
h3v(d){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=J.a7(d),j=C.aK(k.h(d,"seed"))
j=j==null?l:D.k.N(j)
if(j==null)j=1
w=C.aK(k.h(d,"clock"))
w=w==null?l:D.k.N(w)
v=A.h3u(j,(w==null?0:w)+7)
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
j=x.bM
u=j.a(k.h(d,"res"))
if(u==null)u=D.cv
w=J.a7(u)
t=x.G
s=0
for(;;){r=v.c
r===$&&C.c()
if(!(s<r.length&&s<w.gK(u)))break
q=t.a(w.h(u,s))
r=v.c[s]
p=J.a7(q)
r.b=C.e3(p.h(q,"hunger"))
r.c=C.e3(p.h(q,"health"))
r.d=C.e3(p.h(q,"comfort"))
r.e=J.A(p.h(q,"sick"),!0)
r.f=!J.A(p.h(q,"alive"),!1)
p=C.aK(p.h(q,"bed"))
p=p==null?l:D.k.N(p)
r.r=p==null?-1:p;++s}o=j.a(k.h(d,"beds"))
if(o==null)o=D.cv
w=J.a7(o)
r=v.e
s=0
for(;;){if(!(s<r.length&&s<w.gK(o)))break
q=t.a(w.h(o,s))
p=r[s]
n=J.a7(q)
p.a=D.k.N(C.e3(n.h(q,"res")))
p.b=C.e3(n.h(q,"care"))
p.c=C.e3(n.h(q,"heal"));++s}k=j.a(k.h(d,"calls"))
k=J.aX(k==null?D.cv:k)
j=v.d
while(k.C()){m=t.a(k.gS(k))
w=J.a7(m)
r=new A.Ig(D.k.N(C.e3(w.h(m,"id"))),D.k.N(C.e3(w.h(m,"res"))),C.cR(w.h(m,"kind")),C.cR(w.h(m,"msg")),D.k.N(C.e3(w.h(m,"reward"))))
r.f=C.e3(w.h(m,"age"))
j.push(r)}return v},
akf(d){return A.hIP(d)},
hIP(d){var w=0,v=C.j(x.H),u,t=2,s=[],r,q,p,o,n
var $async$akf=C.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:if(d<=0){w=1
break}q=$.a4w
if(q!=null){q.r+=d
w=1
break}t=4
w=7
return C.b(C.az(),$async$akf)
case 7:r=f
p=C.ev(J.r(r.a,"ngmy_construction_bonus_stars"))
if(p==null)p=0
w=8
return C.b(r.ar("Int","ngmy_construction_bonus_stars",p+d),$async$akf)
case 8:t=2
w=6
break
case 4:t=3
n=s.pop()
w=6
break
case 3:w=2
break
case 6:case 1:return C.h(u,v)
case 2:return C.f(s.at(-1),v)}})
return C.i($async$akf,v)},
aUw(){var w=0,v=C.j(x.S),u,t=2,s=[],r,q,p,o,n
var $async$aUw=C.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return C.b(C.az(),$async$aUw)
case 7:r=e
p=C.ev(J.r(r.a,"ngmy_construction_bonus_stars"))
q=p==null?0:p
w=!J.A(q,0)?8:9
break
case 8:w=10
return C.b(J.hv(r,"ngmy_construction_bonus_stars"),$async$aUw)
case 10:case 9:u=q
w=1
break
t=2
w=6
break
case 4:t=3
n=s.pop()
u=0
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return C.h(u,v)
case 2:return C.f(s.at(-1),v)}})
return C.i($async$aUw,v)},
hhq(d,e,f){return Math.max(6,12+4*f-2*d-5*e)},
aUv(){var w=0,v=C.j(x.dy),u,t=2,s=[],r,q,p,o,n
var $async$aUv=C.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return C.b(C.az(),$async$aUv)
case 7:r=e
q=C.aS(J.r(r.a,"ngmy_community_v1"))
if(q==null){u=null
w=1
break}p=x.e.a(D.X.aN(0,q,null))
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
return C.i($async$aUv,v)},
aUu(){var w=0,v=C.j(x.H),u=1,t=[],s,r,q
var $async$aUu=C.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
w=6
return C.b(C.az(),$async$aUu)
case 6:s=e
w=7
return C.b(J.hv(s,"ngmy_community_v1"),$async$aUu)
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
return C.i($async$aUu,v)},
FA:function FA(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
Pe:function Pe(d){var _=this
_.a=d
_.b=25
_.d=_.c=100
_.e=!1
_.f=!0
_.r=-1},
Ig:function Ig(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=0},
Mb:function Mb(){this.a=-1
this.b=100
this.c=0},
aUt:function aUt(d,e,f,g,h){var _=this
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
bLL:function bLL(){},
bLI:function bLI(d){this.a=d},
bLJ:function bLJ(d,e){this.a=d
this.b=e},
bLK:function bLK(){},
bLP:function bLP(d){this.a=d},
bLN:function bLN(d){this.a=d},
bLO:function bLO(){},
bLM:function bLM(d){this.a=d},
bLQ:function bLQ(){},
aq1:function aq1(d,e){this.c=d
this.a=e},
blj:function blj(){var _=this
_.d=null
_.e=$
_.f=null
_.r=$
_.x=_.w=null
_.y=0
_.c=_.a=null},
dUr:function dUr(d,e){this.a=d
this.b=e},
dUs:function dUs(d){this.a=d},
dUE:function dUE(){},
dUy:function dUy(d,e){this.a=d
this.b=e},
dUz:function dUz(d){this.a=d},
dUx:function dUx(d){this.a=d},
dUn:function dUn(){},
dUo:function dUo(){},
dUH:function dUH(){},
dUI:function dUI(){},
dUG:function dUG(d,e){this.a=d
this.b=e},
dUF:function dUF(d,e){this.a=d
this.b=e},
dUm:function dUm(d,e){this.a=d
this.b=e},
dUt:function dUt(d,e,f){this.a=d
this.b=e
this.c=f},
dUu:function dUu(d,e,f){this.a=d
this.b=e
this.c=f},
dUv:function dUv(d,e,f){this.a=d
this.b=e
this.c=f},
dUw:function dUw(d,e){this.a=d
this.b=e},
dUq:function dUq(d,e,f){this.a=d
this.b=e
this.c=f},
dUp:function dUp(d,e,f){this.a=d
this.b=e
this.c=f},
dUB:function dUB(d,e){this.a=d
this.b=e},
dUC:function dUC(d,e){this.a=d
this.b=e},
dUD:function dUD(d){this.a=d},
dUA:function dUA(d){this.a=d},
dUJ:function dUJ(d){this.a=d},
dUK:function dUK(){},
ad2:function ad2(d,e,f){this.c=d
this.d=e
this.a=f},
bg3:function bg3(d,e){this.b=d
this.a=e},
or(d,e,f,g,h,i,j,k,l,m,n){return new A.MF(g,m,d,k,e,f,n,h,l,i,j)},
td(d){return D.d.fG($.hGD(),new A.fEm(d))},
aiw(d,e){var w,v,u=d.e,t=new C.N(u,new A.h20(),C.T(u).k("N<1,m>")).fO(0)
u=e.b
w=C.a6(u).k("b9<2>")
v=C.dh(new C.b9(u,w),w.k("M.E"))
if(d.a==="cord4"&&e.r)return!1
return t.cJ(0,v.gkZ(v))},
hCu(d,e,f,g,h){var w,v
if(e.a&&e.c===0){if(e.w)return"SHOCK! The breaker was still ON and you touched a live wire. Always turn the power OFF and test the wires first."
return"STOP! The breaker is still ON, so these wires are live (120 volts). Turn the breaker OFF first. This can shock you badly."}if(e.c!==0)return"The device is already in the box. Pull it out again to change the wires."
w=!1
if(d.a==="cord4")if(e.r)if(!e.w)if(!e.z)w=f==="neutral"||f==="ground"
if(w)return"Take the ground strap off first: tap the metal strap on the terminal block. On a 4-wire cord the neutral must not touch the frame, because the green wire grounds the frame."
if(!e.w&&!e.z&&!h&&!g.c.q(0,f))return d.r.$2(f,g)
w=e.b
v=g.a
if(w.h(0,v)!=null)return"That place already has a wire. Tap the wire to take it off first."
if(new C.b9(w,C.a6(w).k("b9<2>")).q(0,f))return"That wire is already fastened. Tap it to take it off if you want to move it."
w.n(0,v,f)
return null},
hbP(d,e){var w,v,u,t,s,r,q=new A.fDv(),p=new A.fDw(),o=C.a([],x.bm)
for(w=e.b,w=new C.cE(w,C.a6(w).k("cE<1,2>")).gaf(0),v=d.f,u=d.e;w.C();){t=w.d
t.toString
s=D.d.fG(v,new A.fDt(t))
r=D.d.fG(u,new A.fDu(t))
o.push(new A.a4z(new A.cEk(r.a,q.$1(r.e)),new A.cAK(p.$1(s.f))))}return o},
fUh(d){var w=d.e,v=C.T(w).k("Y<1>")
return new A.bNb(new C.Y(w,new A.fUi(),v).gK(0),new C.Y(w,new A.fUj(),v).gK(0),d.y)},
Ll(d,e){var w,v,u,t,s,r,q,p,o,n,m
if(d.a==="cord4"&&e.r)return B.hmL
w=A.hxN(A.fUh(d),A.hbP(d,e),e.y)
v=w.c
u=new A.fEz(w)
t=w.b
s=t.length===0?null:D.d.f6(t,new A.fEw())
t=w.a===B.qV
if(t)r="ok"
else if(u.$1("SHORT")||u.$1("HOT_TO_GROUND"))r="short"
else{if(u.$1("REVERSED"))q="reversed"
else if(u.$1("NEUTRAL_GROUND"))q="bonded"
else if(u.$1("GROUND_AS_CURRENT"))q="groundWire"
else if(u.$1("OPEN_NEUTRAL"))q="openNeutral"
else if(u.$1("UNVERIFIED"))q="unverified"
else q=u.$1("MISSING_GROUND")?"noGround":"dead"
r=q}if(d.x&&!e.z)for(q=e.b,q=new C.cE(q,C.a6(q).k("cE<1,2>")).gaf(0),p=d.f;q.C();){o=q.d
o.toString
n=D.d.fG(p,new A.fEx(o))
if(!n.c.q(0,o.b)){t=n.d
return new A.ay8("dead","The "+D.d.fG(d.e,new A.fEy(o)).b+" is on the wrong terminal ("+n.b+"). "+t,!1,!1,!1,"none",t)}}m=t?"Wired correctly. Hot, neutral and ground are all in the right place, and every safety check passes.":s.c+" "+v.c
t=s==null?null:s.e
if(t==null)t=""
return new A.ay8(r,m,v.d,v.e,v.f,v.b,t)},
hch(d){var w,v,u,t
for(w=$.h2F(),v=w.length,u=0;u<v;++u){t=w[u]
if(t.a===d)return t.w}return d},
aP8(d,e){var w
if(d==="light"||d==="fan")w=e.c===0?6.4:0.6
else w=e.c===0?4.7:-0.25
return w},
aQr(d,e,f){var w,v
if(d==="light"||d==="fan"){w=A.aP8(d,f)
v=f.c===0?w-3.2:w
switch(e){case 51:return new A.q(-1.5,-0.3,v)
case 52:return new A.q(0,-0.3,v)
default:return new A.q(1.5,-0.3,v)}}w=A.aP8(d,f)
if(D.a.a0(d,"terminal")||d==="cord3"||d==="cord4")switch(e){case 23:return new A.q(-1.15,0.14999999999999997,w-0.3)
case 21:return new A.q(0,0.14999999999999997,w-0.3)
case 22:return new A.q(1.15,0.14999999999999997,w-0.3)
default:return new A.q(0,-1.65,w-0.1)}switch(e){case 21:return new A.q(0.98,-0.2+(d==="gfci"?0.95:0.85),w-0.45)
case 22:return new A.q(0.98,-0.2+(d==="gfci"?-0.75:-0.55),w-0.45)
case 23:return new A.q(-0.98,-0.2+(d==="gfci"?0.95:0.85),w-0.45)
case 24:return new A.q(-0.98,-0.2+(d==="gfci"?-0.75:-0.55),w-0.45)
default:return new A.q(0,-1.98,w+0.52)}},
bDo(b7,b8,b9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1="nema",b2="terminal",b3=C.a([],x.z),b4=new A.f3(b3),b5=A.hch(b7.a),b6=b5==="light"||b5==="fan"
if(b9){b4.b=1
b4.hn(B.heZ,B.aYB,B.vV,3)
b4.hn(B.hgt,B.aYB,B.vV,3)
b4.hn(B.hjz,B.aZ2,B.vV,2)
b4.hn(B.hhg,B.aZ2,B.vV,2)
b4.b=2
b4.kX(B.hes,B.aYu,B.iB,0.05,3)
b4.kX(B.hdS,B.aYu,B.iB,0.05,3)
b4.kX(B.hdK,B.hk7,B.iB,0.05,2)}w=b7.w.length===0
v=A.hsN(b4,w?b5:"outlet",!0)
u=new A.fBv(b4,b8,b5,b6)
t=D.d.gI(v)
s=!w
if(s){r=b7.e
q=r.length
for(p=t.a,o=t.b+0,n=t.c,m=q-1,l=q===1,k=0;k<q;++k){j=r[k]
i=l?0:k/m-0.5
h=D.o.F(k,2)
if(j.e==="ground")g=B.u3
else{g=j.c
if(g.A(0,B.m_))g=B.m_}u.$5(60+k,new A.q(p+i*0.5,o,n+0.04*k),new A.q(i*3.6,-1.7-0.12*h,2.3+0.15*k),j.a,g)}}else if(b5==="switch"){f=D.d.gak(v)
u.$5(10,t.a7(0,B.h63),B.hjD,"blackLine",B.FA)
u.$5(13,f.a7(0,B.hjP),B.hbR,"blackLoad",B.FA)
u.$5(12,t.a7(0,B.hg_),B.haT,"ground",B.u3)
b4.b=6
r=x.o
b4.iV(C.a([t.a7(0,B.aYq),B.h6Q,B.W1],r),0.075,B.m_,!1,0.3,8)
b4.iV(C.a([f.a7(0,B.aYq),B.hf6,B.W1],r),0.075,B.m_,!1,0.3,8)
b4.yX(B.W1,B.hju,0.28,B.afH,0.18,0.3,10)}else{u.$5(10,t.a7(0,B.hc3),B.h6A,"black",B.FA)
u.$5(11,t.a7(0,B.hdE),B.hfj,"white",B.m_)
u.$5(12,t.a7(0,B.he4),B.hdU,"ground",B.u3)}if(b6)A.htP(b4,b5,b8)
else A.hts(b4,b5,A.aP8(b5,b8),b8.x,!1,s,b8.r)
if(b8.e&&b8.c===0){b4.b=0
b4.d=0.5
for(r=b7.f,p=r.length,e=0;e<p;++e){d=r[e]
a0=A.aQr(b5,d.a,b8)
if(d.e)a1=D.bs
else{o=d.f
if(o==="ground")a1=D.bf
else{o=o==="neutral"?D.c:B.Bm
a1=o}}if(b6)o=0
else{o=a0.a
if(o>0.4)o=0.12
else o=o<-0.4?-0.12:0}if(b6)n=0.6
else n=Math.abs(a0.a)<0.4?0.2:0
b4.fu(new A.q(a0.a+o,a0.b+0,a0.c+n),0.36,a1,4,8,0.1)}b4.d=1}if(b8.c>=2&&!b6)A.hvV(b4,b8.x)
r=!1
if(b8.c>=2)if(b8.d)r=b5==="outlet"||b5==="gfci"||D.a.a0(b5,b1)
if(r)A.iaZ(b4,b8.a&&!b8.x)
r=b6?"Ceiling box":"Electrical box"
p=b5==="fan"
o=p?' A fan needs a box that says "fan rated".':""
n=b5==="switch"
m=n?"Cable from the breaker panel (LINE)":"NM-B cable (Romex)"
l=b6?"It joins the fixture black wire with a wire nut.":"It goes on a brass screw."
h=b6?"It joins the fixture white wire.":"It goes on a silver screw."
g=b6?"It joins the green fixture ground wire.":"It goes on the green screw."
if(s)a2=D.a.a0(b5,b1)||D.a.a0(b5,b2)
else a2=!1
if(a2)a2=b7.b
else if(b5==="gfci")a2="GFCI outlet"
else a2=n?"Light switch":"Receptacle (outlet)"
if(s)a3=D.a.a0(b5,b1)||D.a.a0(b5,b2)
else a3=!1
if(a3)n=b7.c
else if(b5==="gfci")n="It checks that the current going out equals the current coming back. If some leaks (through water or a person) it shuts off in a fraction of a second."
else n=n?"A rocker that opens and closes the black wire to the light.":"The outlet. Each side has two slots and a ground hole. The short slot is hot, the long slot is neutral."
a3=A.aP8(b5,b8)
a4=p?"Ceiling fan":"Ceiling light"
p=p?"The motor housing with blades. It has three wires: black (motor), white (neutral) and green (ground).":"The light fixture with a frosted dome. It has three wires: black, white and green."
a5=C.H([1,B.eft,2,B.efK,3,new A.cL(r,"A box that holds the wire connections. Every connection must be inside a box, never loose in the wall or the ceiling."+o,new A.q(0,0,-1.2),9),4,new A.cL(m,"The yellow jacket holds three wires: black (hot), white (neutral) and bare copper (ground). Yellow means 12 gauge wire for a 20 amp circuit. White jackets are 14 gauge for 15 amps.",new A.q(-0.4,1.5,-1.8),8),5,B.eg7,10,new A.cL("Black wire: hot","The hot wire brings the power from the breaker. It is the dangerous one. "+l,new A.q(-0.8,-0.8,1.2),7),13,B.eff,11,new A.cL("White wire: neutral","The neutral wire carries the power back to the panel. "+h,new A.q(0,-0.8,1.2),7),12,new A.cL("Bare copper wire: ground","The ground wire is a safety path. If a wire touches metal, the current runs down the ground instead of through you. "+g,new A.q(0.5,-0.8,1.2),7),6,B.efI,20,new A.cL(a2,n,new A.q(0,-0.2,a3),9),40,B.ef7,21,B.efN,22,B.eg6,23,B.efG,24,B.efL,25,B.efw,26,B.efO,27,B.eg_,28,B.efr,30,B.efa,31,B.ef8,51,B.efJ,52,B.efc,53,B.efS,54,new A.cL(a4,p,new A.q(0,0,6.4),9),55,B.eg1],x.S,x.q)
if(s){a5.n(0,20,new A.cL(b7.b,b7.c,new A.q(0,-0.2,A.aP8(b5,b8)),9))
for(s=b7.e,r=s.length,k=0;k<r;++k)a5.n(0,60+k,new A.cL(s[k].b,"Pick this wire up, then tap the screw it belongs on. Tap it again on the screw to take it off.",new A.q(-0.8+k*0.5,-0.8,1.2),7))
for(s=b7.f,r=s.length,e=0;e<r;++e){a6=s[e]
p=a6.a
a5.n(0,p,new A.cL(a6.b,a6.d,A.aQr(b5,p,b8),5))}}a7=C.a([],x.E)
if(b8.f&&b8.c===0)for(s=b7.f,r=s.length,e=0;e<r;++e){d=s[e]
a0=A.aQr(b5,d.a,b8)
a8=d.f
A:{p="hot"===a8
if(p){o=B.eWo
break A}if("neutral"===a8){o=B.eM8
break A}if("ground"===a8){o=B.eOK
break A}o=B.eAW
break A}a9=o.a
if(b6){B:{if(p){n="BLACK NUT \xb7 HOT"
break B}if("neutral"===a8){n="WHITE NUT \xb7 NEUTRAL"
break B}n="GROUND"
break B}i=n}else i=w?a9:d.b
if(b6){C:{if(p){p=B.hdf
break C}if("neutral"===a8){p=B.hd8
break C}p=B.hkn
break C}b0=p}else{p=a0.a
if(p>0.4)n=3.8
else n=p<-0.4?-4.2:0
b0=new A.q(n,Math.abs(p)<0.4?-3:-0.4,1)}a7.push(new A.hi(new A.q(a0.a+b0.a,a0.b+b0.b,a0.c+b0.c),i,o.b,0))}if(b8.a&&b8.c===0)a7.push(B.c3f)
return new A.qW(b3,a5,a7,B.qH,null,!1,0)},
hsN(d,e,f){var w,v,u=e==="light"||e==="fan"
d.b=3
if(u){d.d1(B.aZ4,B.aYA,2.2,B.y9,0.3,18)
d.a4J(B.aYA,B.dX,2.2,B.y9,!1,!0,0.3,18)}else{d.aF(B.aZ4,B.heE,B.y9,0.3)
d.aF(B.hbs,B.aYc,B.y9,0.3)
d.aF(B.h7C,B.aYc,B.y9,0.3)
d.aF(B.hdO,B.aYG,B.y9,0.3)
d.aF(B.hd6,B.aYG,B.y9,0.3)}w=C.a([],x.o)
v=new A.fms(d,f,w)
if(e==="switch"){v.$2(4,B.d5D)
v.$2(5,B.d3D)}else v.$2(4,B.dik)
return w},
hCz(d,e){var w,v=$.h2F(),u=new C.Y(v,new A.h2_(d),C.T(v).k("Y<1>"))
if(!u.gan(0)){w=e-60
return w>=0&&w<u.gI(0).e.length?u.gI(0).e[w].a:null}return A.i5y(d,e)},
i5y(d,e){var w
A:{if(10===e){w=d==="switch"?"blackLine":"black"
break A}if(13===e){w="blackLoad"
break A}if(11===e){w="white"
break A}if(12===e){w="ground"
break A}w=null
break A}return w},
hts(d,e,f,g,h,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
if(D.a.a0(e,"terminal")){A.iaY(d,e,f,g,a1)
return}w=new A.q(0,-0.2,f)
v=e==="switch"
u=e==="gfci"
if(g)t=B.u_
else t=v?B.bm5:B.Z7
s=u?3.1:2.95
d.e=0
d.b=20
if(!h){d.aF(w.a7(0,B.ha_),new A.q(1.5,s,1.3),t,0.25)
d.e=0.15
d.b=26
r=w.a7(0,B.h9G)
d.aF(r,B.hjw,g?B.agi:B.Bx,0.8)
d.aE(w.a7(0,B.hfV),B.hlF,B.xX)}d.e=0.3
d.b=27
r=w.a7(0,B.hcA)
d.aF(r,new A.q(1.3,u?2.85:2.7,0.16),t,0.3)
if(v){d.e=0.7
d.b=28
r=w.a7(0,B.hf4)
d.aF(r,B.hc0,g?B.u_:H.Zh,0.35)
r=w.a7(0,B.hj_)
d.aF(r,B.hhf,g?B.u_:B.agz,0.35)}else{d.e=0.6
if(D.a.a0(e,"nema"))A.i6q(d,w,e,g)
else{r=u?G.aws:B.dw7
q=r.length
p=f+0.47
o=f+0.46
n=f+0.5
m=0
for(;m<q;++m){l=r[m]
d.b=27
k=-0.2+(l+0.04)
d.aE(new A.q(-0.28,k,p),B.heD,B.FK)
d.aE(new A.q(0.28,k,p),B.hcI,B.FK)
k=-0.2+(l-0.32)
d.dm(new A.q(0,k,o),new A.q(0,k,n),0.11,B.FK,10)}if(u){d.e=0.7
d.b=28
d.aF(w.a7(0,B.hfC),B.aYj,B.bpT,0.3)
d.aF(w.a7(0,B.hjQ),B.aYj,B.ajE,0.3)}}}if(h){d.e=0
return}j=u?0.95:0.85
i=u?-0.75:-0.55
r=new A.fnQ(d,w)
if(!v||a0){r.$6$taped(23,-1,j,B.agW,B.ahw,u)
r.$5(24,-1,i,B.agW,B.ahw)}r.$6$taped(21,1,j,B.Bm,B.G8,u)
r.$5(22,1,i,B.Bm,B.G8)
d.e=0.9
d.b=25
d.d1(w.a7(0,B.hdL),w.a7(0,B.hks),0.18,B.ajf,0.7,12)
d.aE(w.a7(0,B.hda),B.hdQ,D.dY)
d.aF(w.a7(0,B.haa),B.hfG,B.beE,0.6)
d.e=0},
htP(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=e==="fan",i=A.aP8(e,f)
d.e=0
d.b=55
w=i-0.3
v=i+0.3
u=j?3.3:3.5
t=f.x?B.u_:B.bmE
d.d1(new A.q(0,0,w),new A.q(0,0,v),u,t,0.45,20)
d.b=54
if(j){u=i+4.2
d.d1(new A.q(0,0,v),new A.q(0,0,u),0.45,B.biq,0.5,10)
v=i+7.4
d.d1(new A.q(0,0,u),new A.q(0,0,v),3.6,B.Y_,0.5,18)
d.d1(new A.q(0,0,v),new A.q(0,0,i+8.6),1.6,B.brh,0.7,14)}else{d.d=0.92
v=f.x?B.u_:B.bjy
d.fu(new A.q(0,0,i+1.2),3.6,v,6,14,0.7)
d.d=1}v=d.b=54
s=[B.eMh,B.exB,B.eTU]
for(u=x.o,r=i-3.2,q=0,p=0;p<3;++p){t=s[p]
o=f.c===0
d.b=o?B.cHR[q]:v;++q
n=o?r:i
o=t.b.a
d.iV(C.a([new A.q(o,-0.3,w),new A.q(o,-0.3,n+0.4)],u),0.07,t.a,!1,0.3,6)}if(f.c===0)for(w=[B.eEX,B.eNR,B.eWQ],v=f.b,p=0;p<3;++p){m=w[p]
u=m.a
l=A.aQr(e,u,f)
d.b=u
d.e=0.8
t=l.a+0
o=l.b+0
k=l.c
d.d1(new A.q(t,o,k+-0.2),new A.q(t,o,k+0.3),0.09,B.u3,0.6,6)
if(v.aj(0,u))d.yX(new A.q(t,o,k+-0.5),new A.q(t,o,k+0.9),0.4,m.b,0.26,0.4,8)
d.e=0}},
hvV(d,e){var w
d.e=0.4
d.b=30
w=e?B.u_:B.bdF
d.aF(B.hfs,B.aYJ,w,0.3)
d.aF(B.heq,B.aYJ,w,0.3)
d.aF(B.h7w,B.aYW,w,0.3)
d.aF(B.h8G,B.ham,w,0.3)
d.aF(B.hkk,B.aYW,w,0.3)
d.d1(B.hcS,B.hem,0.1,B.Bx,0.8,10)
d.e=0},
iaZ(d,e){var w,v
d.b=31
for(w=0;w<2;++w){v=B.d8k[w]
d.d1(new A.q(v,0.52,0.2),new A.q(v,0.52,1.9),0.04,B.Bx,0.8,6)}d.aF(B.h4i,B.hjh,B.Ml,0.35)
d.bcL(B.aYC,0.2,e?D.Yv:B.bnq,0.9)
if(e){d.d=0.35
d.fu(B.aYC,0.5,D.Yv,4,8,0)
d.d=1}},
i6q(d,e,f,g){var w,v,u,t,s
d.b=27
d.e=0.62
w=e.a7(0,B.hdz)
v=e.a7(0,B.hk8)
d.d1(w,v,0.64,g?B.u_:B.aiR,0.35,28)
d.e=0.7
u=new A.ftn(e,d)
t=new A.ftm(d,e)
s=new A.ftl(u)
switch(f){case"nema1030":s.$2(-0.05,0.14)
u.$5(-0.3,-0.24,0.075,0.3,-0.5)
u.$5(0.3,-0.24,0.075,0.3,0.5)
break
case"nema1430":s.$2(-0.05,0.28)
u.$4(-0.4,-0.04,0.075,0.32)
u.$4(0.4,-0.04,0.075,0.32)
t.$2(0,-0.4)
break
case"nema1050":u.$5(-0.3,0.2,0.075,0.3,0.5)
u.$5(0.3,0.2,0.075,0.3,-0.5)
u.$4(0,-0.26,0.075,0.32)
break
case"nema1450":u.$4(0,0.3,0.075,0.28)
u.$4(-0.4,-0.04,0.075,0.32)
u.$4(0.4,-0.04,0.075,0.32)
t.$2(0,-0.4)
break
default:u.$4(0.2,0.12,0.075,0.3)
u.$4(-0.2,0.12,0.075,0.3)
u.$4(-0.3,0.12,0.14,0.075)
t.$2(0,-0.3)}d.e=0},
iaY(d,e,f,g,h){var w,v,u=new A.q(0,-0.2,f)
d.e=0
d.b=26
w=u.a7(0,B.hdr)
d.aF(w,B.haE,g?B.agi:B.Bx,0.8)
d.e=0.2
d.b=20
w=u.a7(0,B.hjM)
d.aF(w,B.hf3,g?B.u_:B.aiR,0.25)
d.e=0.3
for(w=f+0.5,v=0;v<2;++v)d.aE(new A.q(0+B.d6w[v],0.14999999999999997,w),B.hdN,B.brq)
d.b=27
d.e=0.4
d.aE(u.a7(0,B.hhd),B.abw,B.FA)
d.aE(u.a7(0,B.hl7),B.abw,B.m_)
d.aE(u.a7(0,B.hlm),B.abw,B.vR)
w=new A.fAc(d,u)
w.$5(23,-1.15,0.35,B.Bm,B.G8)
w.$5(21,0,0.35,B.Bm,B.G8)
w.$5(22,1.15,0.35,B.Bm,B.G8)
d.e=0.9
d.b=25
d.d1(u.a7(0,B.hcZ),u.a7(0,B.hgo),0.26,B.ajf,0.7,12)
d.aE(u.a7(0,B.hlv),B.hbm,D.dY)
if(h){d.e=0.8
d.b=40
d.aF(u.a7(0,B.hcL),B.hbS,B.u3,0.7)}d.e=0},
fm:function fm(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
CJ:function CJ(d){var _=this
_.a=!0
_.b=d
_.c=0
_.f=_.e=_.d=!1
_.r=!0
_.x=_.w=!1
_.y=!0
_.z=!1
_.Q=""},
iR:function iR(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
MF:function MF(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
fFP:function fFP(){},
fFQ:function fFQ(){},
fFR:function fFR(){},
fFS:function fFS(){},
fFT:function fFT(){},
fEm:function fEm(d){this.a=d},
h20:function h20(){},
ay8:function ay8(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.r=i
_.w=j},
fDv:function fDv(){},
fDw:function fDw(){},
fDt:function fDt(d){this.a=d},
fDu:function fDu(d){this.a=d},
fUi:function fUi(){},
fUj:function fUj(){},
fEz:function fEz(d){this.a=d},
fEA:function fEA(d){this.a=d},
fEw:function fEw(){},
fEx:function fEx(d){this.a=d},
fEy:function fEy(d){this.a=d},
fBv:function fBv(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fBw:function fBw(d){this.a=d},
fms:function fms(d,e,f){this.a=d
this.b=e
this.c=f},
h2_:function h2_(d){this.a=d},
fnQ:function fnQ(d,e){this.a=d
this.b=e},
ftn:function ftn(d,e){this.a=d
this.b=e},
fto:function fto(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
ftm:function ftm(d,e){this.a=d
this.b=e},
ftl:function ftl(d){this.a=d},
fAc:function fAc(d,e){this.a=d
this.b=e},
a2z(d){var w
A:{if("outlet"===d){w="Outlet"
break A}if("gfci"===d){w="GFCI outlet"
break A}if("switch"===d){w="Light switch"
break A}if("light"===d){w="Ceiling light"
break A}if("fan"===d){w="Ceiling fan"
break A}w=A.td(d).b
break A}return w},
fme(d,e,f){var w
A:{if("ground"===d){w=y.t
break A}if("neutral"===d){w=y.I
break A}w=e.a===25?y.T:y.S
break A}return w},
fFU:function fFU(){},
fFV:function fFV(){},
fFW:function fFW(){},
fFX:function fFX(){},
fFY:function fFY(){},
fFZ:function fFZ(){},
fG_:function fG_(){},
fG0:function fG0(){},
fG1:function fG1(){},
fG2:function fG2(){},
fFI:function fFI(){},
fFJ:function fFJ(){},
fFK:function fFK(){},
fFL:function fFL(){},
fFM:function fFM(){},
fFN:function fFN(){},
fFO:function fFO(){},
aQe(d){return D.d.dN(B.a4w,new A.fBh(d),new A.fBi())},
heE(d,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i={},h=new A.h1X(),g=new A.h1U(),f=d.c,e=f==="hall"
if(!e&&d.p1!=="back"){w=a0.e?d.gh4(0)-14:Math.min(a0.d,d.gh4(0)-14)
v=h.$1(w)
return new A.ac0(w,v,d.gh4(0)/2,g.$1(v))}if(e&&a1<2){w=a0.e?d.gh4(0)-14:Math.min(a0.d,d.gh4(0)-14)
v=h.$1(w)
return new A.ac0(w,v,d.gh4(0)/2,g.$1(v))}if(e){f=C.a([],x.n)
for(e=d.w,u=e.length,t=0;t<e.length;e.length===u||(0,C.K)(e),++t){s=e[t]
if(s.b==="back"&&!s.a)f.push(s.c)}r=f.length===0?-40:D.d.f6(f,D.vN)-19-8
q=f.length===0?40:D.d.f6(f,D.pS)+19+8
p=d.geb(0)/2-8
f=a1===2?(-p+r)/2:(q+p)/2
return new A.ac0(p-q,106,f,61)}e=d.geb(0)
q=d.geb(0)/2-6
if(f==="bathroom"&&!d.ok)q=14
f=C.a([],x.f)
for(u=d.w,o=u.length,t=0;t<u.length;u.length===o||(0,C.K)(u),++t){s=u[t]
if(s.b==="back"&&!s.a){n=s.c
f.push(new C.z(n-19,n+19))}}D.d.aX(f,new A.h1V())
m=i.a=i.b=-e/2+6
l=new A.h1W(i)
for(e=f.length,t=0;t<f.length;f.length===e||(0,C.K)(f),++t){u=f[t]
k=u.a
if(k>m)l.$2(m,Math.min(k,q))
m=Math.max(m,u.b)}if(m<q)l.$2(m,q)
j=Math.max(30,i.a-i.b-4)
w=a0.e?j:Math.min(a0.d,j)
v=h.$1(w)
return new A.ac0(w,v,(i.b+i.a)/2,g.$1(v))},
zp(d,e,f,g,h,i,j,k){var w=x.S
return new A.a5C(d,e,f,g,h,i,j,k,C.a([],x._),C.a([0,0,0],x.t),C.aV(w),C.U(w,x.i),C.U(w,x.cR),C.U(w,w),C.U(w,x.gh),C.U(w,x.N),C.a([],x.cX),C.aV(w),C.aV(w))},
aWY(d){var w=new A.aWX(d)
w.c95()
return w},
hLF(d){var w=new A.aWX(7)
w.bAo(d)
return w},
ipW(d){var w,v=d.c
A:{if("bedroom"===v){w=1
break A}if("bathroom"===v){w=2
break A}if("kitchen"===v){w=4
break A}if("hall"===v){w=3
break A}w=0
break A}return w},
mi:function mi(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.f=_.e=0},
fq:function fq(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Ei:function Ei(d,e,f){this.a=d
this.b=e
this.c=f},
nR:function nR(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fBh:function fBh(d){this.a=d},
fBi:function fBi(){},
ac0:function ac0(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
h1X:function h1X(){},
h1U:function h1U(){},
h1V:function h1V(){},
h1W:function h1W(d){this.a=d},
ot:function ot(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aWS:function aWS(d,e,f){this.a=d
this.b=e
this.c=f},
a5C:function a5C(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v){var _=this
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
bVe:function bVe(){},
bVd:function bVd(){},
aWX:function aWX(d){var _=this
_.a=""
_.b=d
_.c=!1
_.d=$
_.e=0},
bVP:function bVP(){},
bVQ:function bVQ(){},
bVR:function bVR(d){this.a=d},
bVS:function bVS(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bVT:function bVT(d,e){this.a=d
this.b=e},
bVX:function bVX(d){this.a=d},
bVU:function bVU(d,e){this.a=d
this.b=e},
bVW:function bVW(d,e,f){this.a=d
this.b=e
this.c=f},
bVV:function bVV(d,e,f){this.a=d
this.b=e
this.c=f},
bW0:function bW0(){},
bW_:function bW_(){},
bVZ:function bVZ(){},
bVY:function bVY(){},
b1o(d,e,f){return new A.J5(f,d,e,null)},
hxM(d){var w=A.vM(B.hL,d.e*3.141592653589793/2)
return new C.z(w.a,w.c)},
icr(b3,b4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8=null,a9="A helicopter with its billboard",b0={},b1=C.a([],x.dI),b2=x.o
b0.a=C.a([],b2)
b0.b=C.a([],b2)
b0.c=C.a([],x.s)
b0.d=!1
w=new A.fBQ(b0,b1)
v=new A.fBX(b0)
u=new A.fBS(b3)
t=new A.fBY(b3)
s=new A.fBI(new A.fBR(t),new A.fBO(t,u))
r=new A.fBU(b0,u,s,v)
q=new A.fBV(b0,new A.fBW(r),s)
p=new A.fBT(b0,w,b1)
b2=D.d.q(B.dkw,b4)
o=!b2
n=x._
m=C.a([],n)
for(l=b3.x,k=l.length,j=0;j<l.length;l.length===k||(0,C.K)(l),++j){i=l[j]
h=i.b
if(h==="billboard"||h==="cornersign"||h==="adboard"||h==="tower"||h==="hq")m.push(i)}k=C.T(l).k("Y<1>")
g=new C.Y(l,new A.fBJ(),k)
h=C.a([],n)
for(f=l.length,j=0;j<l.length;l.length===f||(0,C.K)(l),++j){i=l[j]
e=i.b
if(e==="house2"||e==="bighouse")h.push(i)}v.$3$note(B.h3h,B.h2m,"Welcome to NGMY Town")
if(!g.gan(0))q.$1(g.gI(0))
if(b4==="city"||o){v.$2(B.hiF,B.hhZ)
v.$2(B.hiK,B.hhY)
v.$2(B.h2I,B.h1l)
v.$2(B.h8S,B.h5e)
v.$2(B.h8L,B.h5f)
v.$2(B.h31,B.h1n)
w.$1$speed(200)}if(b4==="billboards"||o){d={}
v.$2(B.hij,B.hie)
v.$3$note(B.h2y,B.AB,"The big NGMY logo board: New Global Movement for Youth")
v.$2(B.h4X,B.AB)
v.$2(B.h5S,B.AB)
v.$2(B.h3C,B.AB)
v.$2(B.hhO,B.AB)
v.$2(B.hi5,B.AB)
v.$2(B.hhH,B.hi_)
d.a=!g.gaf(0).C()?B.h1m:new A.q(g.gI(0).c,0,g.gI(0).d)
a0=C.C(m,x.eB)
a1=0
for(;;){if(a0.length!==0)m=a1<(o?8:80)
else m=!1
if(!m)break
D.d.aX(a0,new A.fBK(d))
i=D.d.cz(a0,0)
q.$1(i)
d.a=new A.q(i.c,0,i.d);++a1}w.$1$speed(105)
for(a2=0;a2<2;++a2)b1.push(new A.MA(B.nD,B.nD,130,6,a9,a8,!1,a8,a2))}if(b4==="edges"){n=C.a([],n)
for(m=l.length,j=0;j<l.length;l.length===m||(0,C.K)(l),++j){i=l[j]
f=i.b
if(f==="adboard"||f==="cornersign")n.push(i)}D.d.aX(n,new A.fBL(new A.fBH()))
for(m=n.length,j=0;j<n.length;n.length===m||(0,C.K)(n),++j){i=n[j]
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
r.$7$note(i,150,50,270,330,70,i.b==="bighouse"?"A big house with TV windows":"A house");++a2}a4=new C.Y(h,new A.fBM(),x.am)
if(!a4.gan(0)){i=a4.gI(0)
a5=A.hxM(i)
n=i.c
m=i.d
v.$2(new A.q(n+a5.a*220,110,m+a5.b*220),new A.q(n,45,m))
p.$1(i)}}if(b4==="hospital"||o)for(j=0;j<3;++j){a6=B.dlE[j]
i=new C.Y(l,new A.fBN(a6),k)
if(!i.gaf(0).C())continue
a7=i.gaf(0)
if(!a7.C())C.ba(C.fs())
r.$7$note(a7.gS(0),160,50,300,360,60,"The "+a6)
a7=i.gaf(0)
if(!a7.C())C.ba(C.fs())
p.$1(a7.gS(0))}w.$0()
if(b4==="traffic"||o){if(b2){for(a2=0;a2<2;++a2)b1.push(new A.MA(B.nD,B.nD,130,6,a9,a8,!1,a8,a2))
o=!1}a2=0
for(;;){if(a2<4)b2=a2<(o?2:4)
else b2=!1
if(!b2)break
b1.push(new A.MA(B.nD,B.nD,130,6,B.ks[a2].a==="bus"?"A self-driving bus with its billboards":"A self-driving police car",a8,!1,a2,a8));++a2}}return b1},
J5:function J5(d,e,f,g){var _=this
_.d=d
_.f=e
_.r=f
_.a=g},
aF6:function aF6(d,e,f,g,h,i,j,k,l,m,n,o,p,q){var _=this
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
_.bk=k
_.b8=!1
_.a_=l
_.aB=null
_.aH=0
_.aM=!1
_.b5=_.aC=null
_.bM=_.be=_.b4=0
_.aL=null
_.bj=!1
_.bG=null
_.c8=0
_.c5=m
_.cL=null
_.cl=n
_.P=_.bD=null
_.T=0
_.bK=o
_.by=null
_.bX=0
_.f4=_.eu=_.el=!1
_.ab=1
_.eA=400
_.ai=_.fE=!1
_.bE=_.al=null
_.dw=_.c1=0
_.di=null
_.ex=0
_.i4=""
_.fF=null
_.iS=p
_.hE=_.ke=0
_.jj=-1
_.jk=q
_.jQ=!1
_.tf=_.qZ=-1e5
_.hS=0
_.c=_.a=_.tg=_.oN=null},
egd:function egd(){},
ega:function ega(d){this.a=d},
egb:function egb(d){this.a=d},
eg9:function eg9(){},
egc:function egc(d){this.a=d},
eeX:function eeX(d,e,f){this.a=d
this.b=e
this.c=f},
eeY:function eeY(d){this.a=d},
eeW:function eeW(d){this.a=d},
eeZ:function eeZ(d,e){this.a=d
this.b=e},
eds:function eds(d,e){this.a=d
this.b=e},
efq:function efq(d){this.a=d},
eep:function eep(d){this.a=d},
eeq:function eeq(d,e){this.a=d
this.b=e},
eer:function eer(d,e){this.a=d
this.b=e},
ees:function ees(d,e){this.a=d
this.b=e},
eet:function eet(d){this.a=d},
ecW:function ecW(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ecU:function ecU(d,e,f){this.a=d
this.b=e
this.c=f},
ecT:function ecT(d,e){this.a=d
this.b=e},
ecV:function ecV(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ecR:function ecR(d,e){this.a=d
this.b=e},
ecS:function ecS(d,e,f){this.a=d
this.b=e
this.c=f},
ecQ:function ecQ(d,e){this.a=d
this.b=e},
ed4:function ed4(d){this.a=d},
ed5:function ed5(d){this.a=d},
ed6:function ed6(d){this.a=d},
eei:function eei(d){this.a=d},
eek:function eek(d){this.a=d},
eej:function eej(d){this.a=d},
eel:function eel(d){this.a=d},
eeh:function eeh(d){this.a=d},
eem:function eem(d){this.a=d},
eeg:function eeg(d){this.a=d},
een:function een(d){this.a=d},
eef:function eef(d){this.a=d},
eeo:function eeo(d){this.a=d},
eee:function eee(d){this.a=d},
ecw:function ecw(d){this.a=d},
ecx:function ecx(d){this.a=d},
edg:function edg(d){this.a=d},
edi:function edi(d){this.a=d},
edh:function edh(d){this.a=d},
edj:function edj(d){this.a=d},
edf:function edf(d){this.a=d},
edk:function edk(d){this.a=d},
ede:function ede(d){this.a=d},
edl:function edl(d){this.a=d},
edd:function edd(d){this.a=d},
edm:function edm(d){this.a=d},
edc:function edc(d){this.a=d},
edn:function edn(d){this.a=d},
edb:function edb(d){this.a=d},
edo:function edo(d){this.a=d},
eda:function eda(d){this.a=d},
efo:function efo(){},
efp:function efp(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
efm:function efm(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
efl:function efl(d){this.a=d},
efn:function efn(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
edG:function edG(d){this.a=d},
ebv:function ebv(){},
efR:function efR(){},
ebW:function ebW(){},
edB:function edB(d){this.a=d},
edA:function edA(d){this.a=d},
edC:function edC(d){this.a=d},
edz:function edz(d){this.a=d},
efS:function efS(d,e){this.a=d
this.b=e},
efQ:function efQ(d){this.a=d},
ef2:function ef2(d,e,f){this.a=d
this.b=e
this.c=f},
ef3:function ef3(d,e){this.a=d
this.b=e},
ef1:function ef1(d,e){this.a=d
this.b=e},
ef0:function ef0(d){this.a=d},
ef_:function ef_(d){this.a=d},
ee_:function ee_(){},
ee0:function ee0(){},
edX:function edX(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
edZ:function edZ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
edY:function edY(d){this.a=d},
edV:function edV(d){this.a=d},
edU:function edU(d){this.a=d},
edW:function edW(d,e){this.a=d
this.b=e},
edT:function edT(d,e){this.a=d
this.b=e},
edp:function edp(d){this.a=d},
edq:function edq(d){this.a=d},
eeT:function eeT(){},
ed2:function ed2(d){this.a=d},
ed1:function ed1(d){this.a=d},
ed3:function ed3(d,e){this.a=d
this.b=e},
ecP:function ecP(d){this.a=d},
edH:function edH(){},
ef4:function ef4(d,e){this.a=d
this.b=e},
ed0:function ed0(){},
efg:function efg(d){this.a=d},
ecZ:function ecZ(d){this.a=d},
ed_:function ed_(d,e){this.a=d
this.b=e},
ecY:function ecY(d){this.a=d},
ecX:function ecX(d){this.a=d},
edw:function edw(){},
eff:function eff(d,e){this.a=d
this.b=e},
eg4:function eg4(){},
ecy:function ecy(){},
edt:function edt(d,e){this.a=d
this.b=e},
edu:function edu(d){this.a=d},
edv:function edv(){},
ed8:function ed8(){},
ed9:function ed9(d){this.a=d},
edJ:function edJ(){},
edK:function edK(d,e){this.a=d
this.b=e},
ec2:function ec2(){},
ec1:function ec1(){},
ec3:function ec3(d){this.a=d},
ec0:function ec0(d){this.a=d},
ec4:function ec4(d){this.a=d},
ec_:function ec_(d){this.a=d},
ec5:function ec5(d,e){this.a=d
this.b=e},
ebZ:function ebZ(d){this.a=d},
ec6:function ec6(d,e){this.a=d
this.b=e},
ebY:function ebY(d,e){this.a=d
this.b=e},
ec7:function ec7(d){this.a=d},
ebX:function ebX(d){this.a=d},
ecu:function ecu(d){this.a=d},
ecv:function ecv(d){this.a=d},
eeS:function eeS(d,e,f){this.a=d
this.b=e
this.c=f},
eeQ:function eeQ(d,e,f){this.a=d
this.b=e
this.c=f},
eeR:function eeR(d,e){this.a=d
this.b=e},
eeM:function eeM(d,e,f){this.a=d
this.b=e
this.c=f},
eeL:function eeL(){},
eeN:function eeN(d,e){this.a=d
this.b=e},
eeO:function eeO(d,e){this.a=d
this.b=e},
eeP:function eeP(d,e){this.a=d
this.b=e},
eez:function eez(d,e){this.a=d
this.b=e},
eew:function eew(){},
eex:function eex(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eev:function eev(d,e,f){this.a=d
this.b=e
this.c=f},
eey:function eey(d,e,f){this.a=d
this.b=e
this.c=f},
eeu:function eeu(d,e){this.a=d
this.b=e},
efP:function efP(d){this.a=d},
efN:function efN(d){this.a=d},
efO:function efO(d,e){this.a=d
this.b=e},
efF:function efF(d,e,f){this.a=d
this.b=e
this.c=f},
efE:function efE(){},
efG:function efG(){},
efH:function efH(d,e){this.a=d
this.b=e},
efI:function efI(d,e){this.a=d
this.b=e},
efJ:function efJ(d){this.a=d},
efK:function efK(d){this.a=d},
efL:function efL(d){this.a=d},
efM:function efM(d){this.a=d},
efB:function efB(d){this.a=d},
efz:function efz(d){this.a=d},
efA:function efA(){},
efv:function efv(d,e,f){this.a=d
this.b=e
this.c=f},
eft:function eft(d){this.a=d},
efu:function efu(){},
efw:function efw(d,e,f){this.a=d
this.b=e
this.c=f},
efs:function efs(d,e){this.a=d
this.b=e},
efx:function efx(d,e){this.a=d
this.b=e},
efy:function efy(d,e){this.a=d
this.b=e},
efc:function efc(d,e){this.a=d
this.b=e},
efd:function efd(d){this.a=d},
efe:function efe(){},
efC:function efC(d,e){this.a=d
this.b=e},
efr:function efr(d,e){this.a=d
this.b=e},
efj:function efj(d){this.a=d},
efk:function efk(){},
efb:function efb(){},
efi:function efi(){},
eg0:function eg0(d){this.a=d},
eg1:function eg1(d){this.a=d},
eg2:function eg2(d){this.a=d},
eg_:function eg_(){},
eeI:function eeI(d){this.a=d},
eeJ:function eeJ(){},
efT:function efT(d){this.a=d},
efU:function efU(d){this.a=d},
efV:function efV(d,e){this.a=d
this.b=e},
efW:function efW(d,e){this.a=d
this.b=e},
efX:function efX(d,e){this.a=d
this.b=e},
efY:function efY(d,e){this.a=d
this.b=e},
efZ:function efZ(d,e){this.a=d
this.b=e},
ed7:function ed7(){},
eeG:function eeG(d,e){this.a=d
this.b=e},
edO:function edO(d){this.a=d},
edL:function edL(){},
edM:function edM(){},
edN:function edN(){},
edx:function edx(){},
edy:function edy(d){this.a=d},
ef5:function ef5(){},
edr:function edr(d){this.a=d},
eeU:function eeU(){},
eeV:function eeV(d){this.a=d},
ef6:function ef6(d){this.a=d},
ef7:function ef7(d){this.a=d},
ef8:function ef8(d){this.a=d},
edE:function edE(d){this.a=d},
edD:function edD(d){this.a=d},
edF:function edF(d){this.a=d},
ef9:function ef9(d){this.a=d},
efa:function efa(){},
efh:function efh(d){this.a=d},
ee2:function ee2(){},
ee3:function ee3(d){this.a=d},
eeb:function eeb(d){this.a=d},
eec:function eec(){},
eed:function eed(d){this.a=d},
ee5:function ee5(d){this.a=d},
ee6:function ee6(d,e){this.a=d
this.b=e},
ee4:function ee4(d,e){this.a=d
this.b=e},
ee7:function ee7(d,e){this.a=d
this.b=e},
eea:function eea(d){this.a=d},
ee8:function ee8(d){this.a=d},
ee1:function ee1(d){this.a=d},
ee9:function ee9(d){this.a=d},
edP:function edP(d){this.a=d},
edQ:function edQ(d){this.a=d},
eg3:function eg3(d){this.a=d},
edS:function edS(d){this.a=d},
edR:function edR(d){this.a=d},
ebu:function ebu(d){this.a=d},
ebt:function ebt(d,e,f){this.a=d
this.b=e
this.c=f},
ebo:function ebo(){},
ebp:function ebp(){},
ebq:function ebq(d){this.a=d},
ebr:function ebr(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
edI:function edI(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
efD:function efD(d,e){this.a=d
this.b=e},
eeH:function eeH(d,e){this.a=d
this.b=e},
eeK:function eeK(d,e){this.a=d
this.b=e},
ebs:function ebs(d,e){this.a=d
this.b=e},
ecE:function ecE(d){this.a=d},
ecF:function ecF(d){this.a=d},
ecG:function ecG(d){this.a=d},
ecH:function ecH(d){this.a=d},
ecI:function ecI(d,e){this.a=d
this.b=e},
ecJ:function ecJ(d){this.a=d},
ecD:function ecD(d){this.a=d},
ecK:function ecK(d,e){this.a=d
this.b=e},
ecC:function ecC(d,e){this.a=d
this.b=e},
ecL:function ecL(d,e){this.a=d
this.b=e},
ecB:function ecB(d,e){this.a=d
this.b=e},
ecM:function ecM(d){this.a=d},
ecA:function ecA(d){this.a=d},
ecN:function ecN(d,e){this.a=d
this.b=e},
ecz:function ecz(d,e){this.a=d
this.b=e},
ecO:function ecO(d,e){this.a=d
this.b=e},
eg6:function eg6(d){this.a=d},
eg8:function eg8(d){this.a=d},
eg5:function eg5(d){this.a=d},
eg7:function eg7(d){this.a=d},
ecg:function ecg(d){this.a=d},
ech:function ech(d){this.a=d},
eci:function eci(d){this.a=d},
ecm:function ecm(d){this.a=d},
ecn:function ecn(d){this.a=d},
eco:function eco(d){this.a=d},
ecf:function ecf(d){this.a=d},
ecp:function ecp(d){this.a=d},
ece:function ece(d){this.a=d},
ecq:function ecq(d){this.a=d},
ecd:function ecd(d){this.a=d},
ecr:function ecr(d){this.a=d},
ecs:function ecs(d){this.a=d},
ecc:function ecc(d){this.a=d},
ect:function ect(d){this.a=d},
ecb:function ecb(d){this.a=d},
ecj:function ecj(d){this.a=d},
eca:function eca(d){this.a=d},
eck:function eck(d){this.a=d},
ec9:function ec9(d){this.a=d},
ecl:function ecl(d){this.a=d},
ec8:function ec8(d){this.a=d},
ebB:function ebB(d){this.a=d},
ebP:function ebP(d){this.a=d},
ebO:function ebO(){},
ebC:function ebC(d){this.a=d},
ebD:function ebD(d){this.a=d},
ebQ:function ebQ(){},
ebG:function ebG(d,e){this.a=d
this.b=e},
ebR:function ebR(d){this.a=d},
ebA:function ebA(d){this.a=d},
ebS:function ebS(d){this.a=d},
ebT:function ebT(d){this.a=d},
ebz:function ebz(d){this.a=d},
ebU:function ebU(d){this.a=d},
ebV:function ebV(d){this.a=d},
ebE:function ebE(d){this.a=d},
eby:function eby(d){this.a=d},
ebF:function ebF(d){this.a=d},
ebx:function ebx(d){this.a=d},
ebH:function ebH(d){this.a=d},
ebI:function ebI(d){this.a=d},
ebJ:function ebJ(d){this.a=d},
ebK:function ebK(d){this.a=d},
ebL:function ebL(d){this.a=d},
ebM:function ebM(d){this.a=d},
ebN:function ebN(d){this.a=d},
ebw:function ebw(){},
eeF:function eeF(d){this.a=d},
eeC:function eeC(d,e,f){this.a=d
this.b=e
this.c=f},
eeD:function eeD(d,e){this.a=d
this.b=e},
eeB:function eeB(d){this.a=d},
eeE:function eeE(d,e){this.a=d
this.b=e},
eeA:function eeA(d){this.a=d},
bko:function bko(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
dx8:function dx8(d,e){this.a=d
this.b=e},
bjO:function bjO(d,e){this.b=d
this.a=e},
aJl:function aJl(d,e){this.c=d
this.a=e},
buu:function buu(){this.c=this.a=this.d=null},
f9g:function f9g(d,e){this.a=d
this.b=e},
f9f:function f9f(d){this.a=d},
f9i:function f9i(d){this.a=d},
f9j:function f9j(d){this.a=d},
f9k:function f9k(d){this.a=d},
f9h:function f9h(d){this.a=d},
f3L:function f3L(d,e,f){var _=this
_.a=d
_.b=e
_.c=f
_.d=0
_.e=1
_.f=3
_.r=0
_.w=112
_.x=!1},
MA:function MA(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
Qy:function Qy(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fBQ:function fBQ(d,e){this.a=d
this.b=e},
fBX:function fBX(d){this.a=d},
fBS:function fBS(d){this.a=d},
fBY:function fBY(d){this.a=d},
fBR:function fBR(d){this.a=d},
fBO:function fBO(d,e){this.a=d
this.b=e},
fBP:function fBP(d,e){this.a=d
this.b=e},
fBI:function fBI(d,e){this.a=d
this.b=e},
fBU:function fBU(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fBW:function fBW(d){this.a=d},
fBV:function fBV(d,e,f){this.a=d
this.b=e
this.c=f},
fBT:function fBT(d,e,f){this.a=d
this.b=e
this.c=f},
fBJ:function fBJ(){},
fBK:function fBK(d){this.a=d},
fBH:function fBH(){},
fBL:function fBL(d){this.a=d},
fBM:function fBM(){},
fBN:function fBN(d){this.a=d},
aKj:function aKj(d,e,f){this.c=d
this.d=e
this.a=f},
bwF:function bwF(){this.d=!1
this.c=this.a=null},
feZ:function feZ(d){this.a=d},
feY:function feY(d){this.a=d},
hnh(){var w=$.hng
return w==null?$.hng=new A.chE().$0():w},
imN(d,e,f){var w,v,u,t,s,r,q,p,o,n=null,m=e.a,l=e.b,k=new C.a3(0,0,0+m,0+l),j=C.br(k,D.ih)
$.S()
w=C.J()
w.sam(B.c7B.aA(0,k))
d.az(j,w)
v=C.J()
v.b=D.a9
v.r=F.eY.gp(0)
v.c=l*0.025
w=l*0.05
j=l*0.08
d.az(C.br(k.cr(-w),new C.aP(j,j)),v)
w=C.br(k.cr(-(l*0.1)),new C.aP(w,w))
v.c=l*0.01
d.az(w,v)
u=new C.u(m/2,l/2)
t=l*0.36
l=C.J()
l.r=H.ahT.gp(0)
d.ad(u,t*1.1,l)
l=C.J()
l.r=F.eY.gp(0)
d.ad(u,t,l)
l=C.J()
l.r=B.Fv.gp(0)
d.ad(u,t*0.9,l)
l=C.J()
l.b=D.a9
l.r=E.iC.gp(0)
l.c=t*0.04
d.ad(u,t*0.95,l)
s=$.Wo
r=C.bK(u,t*1.2,t*1.5)
if(s!=null){m=s.c
l=s.d
q=Math.min((r.c-r.a)/m,(r.d-r.b)/l)
p=C.bK(r.gbL(),l*q,m*q)
j=C.J()
j.Q=D.ci
d.oF(s,new C.a3(0,0,m,l),p,j)}else{o=C.fz(n,n,n,n,C.cT(n,n,n,n,n,n,n,n,n,C.l(n,n,E.iC,n,n,n,n,n,n,n,n,t*0.6,n,n,D.u,n,n,!0,n,n,n,n,n,n,n,n),"NGMY"),D.a4,D.bX,n,D.dA,D.bV)
o.eg()
m=o.b
l=m.c
m=m.a.c
o.a4(d,u.aG(0,new C.u(l/2,m.gba(m)/2)))}},
hBx(d,e,f){var w,v,u,t,s,r,q,p,o=null,n=e.ek(D.I),m=e.gdE()/2
$.S()
w=C.J()
w.r=F.eY.gp(0)
d.ad(n,m,w)
w=C.J()
w.r=B.Fv.gp(0)
d.ad(n,m*0.9,w)
w=C.J()
w.b=D.a9
w.r=E.iC.gp(0)
w.c=m*0.04
d.ad(n,m*0.93,w)
v=$.Wo
u=C.bK(n,m*1.2,m*1.5)
if(v!=null){w=v.c
t=v.d
s=Math.min((u.c-u.a)/w,(u.d-u.b)/t)
r=C.bK(u.gbL(),t*s,w*s)
q=C.J()
q.Q=D.ci
d.oF(v,new C.a3(0,0,w,t),r,q)}else{p=C.fz(o,o,o,o,C.cT(o,o,o,o,o,o,o,o,o,C.l(o,o,E.iC,o,o,o,o,o,o,o,o,m*0.6,o,o,D.u,o,o,!0,o,o,o,o,o,o,o,o),"NGMY"),D.a4,D.bX,o,D.dA,D.bV)
p.eg()
w=p.b
t=w.c
w=w.a.c
p.a4(d,n.aG(0,new C.u(t/2,w.gba(w)/2)))}},
vL(d,e,f,g,h){var w,v,u,t,s,r,q,p,o,n,m=null,l=e.a,k=e.b,j=new C.a3(0,0,0+l,0+k),i=e.gdE()*0.08
i=C.br(j,new C.aP(i,i))
$.S()
w=C.J()
w.sam(B.aso.aA(0,j))
d.az(i,w)
w=j.cr(-(e.gdE()*0.045))
i=e.gdE()*0.06
i=C.br(w,new C.aP(i,i))
w=C.J()
w.b=D.a9
w.r=F.eY.gp(0)
w.c=e.gdE()*0.035
d.az(i,w)
v=k*0.33
u=new C.u(k*0.6,k*0.5)
w=C.J()
w.r=F.eY.gp(0)
d.ad(u,v,w)
w=C.J()
w.r=B.Fv.gp(0)
d.ad(u,v*0.88,w)
t=$.Wo
s=C.bK(u,v*1.15,v*1.4)
if(t!=null){i=t.c
w=t.d
r=Math.min((s.c-s.a)/i,(s.d-s.b)/w)
q=C.bK(s.gbL(),w*r,i*r)
p=C.J()
p.Q=D.ci
d.oF(t,new C.a3(0,0,i,w),q,p)}else{o=C.fz(m,m,m,m,C.cT(m,m,m,m,m,m,m,m,m,C.l(m,m,E.iC,m,m,m,m,m,m,m,m,v*0.55,m,m,D.u,m,m,!0,m,m,m,m,m,m,m,m),"NGMY"),D.a4,D.bX,m,D.dA,D.bV)
o.eg()
i=o.b
w=i.c
i=i.a.c
o.a4(d,u.aG(0,new C.u(w/2,i.gba(i)/2)))}n=k*1.08
l=new A.fTB(l-n-k*0.2,d,n)
l.$4(g,k*0.36,D.c,k*0.16)
l.$4(h,k*0.14,F.eY,k*0.62)},
hx1(d){return 210+D.o.F(d.l(),5)*24},
fTx(d,e,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k="NEW GLOBAL",j="MOVEMENT",i="FOR YOUTH",h=e.a,g=e.b,f=new C.a3(0,0,0+h,0+g)
A:{if(0===a1){w=B.aso
break A}if(1===a1){w=B.c7q
break A}w=B.c5s
break A}v=e.gdE()*0.06
v=C.br(f,new C.aP(v,v))
$.S()
u=C.J()
u.sam(w.aA(0,f))
d.az(v,u)
t=C.J()
t.b=D.a9
w=a1===2
t.r=(w?E.iC:F.eY).gp(0)
t.c=e.gdE()*0.04
v=f.cr(-(e.gdE()*0.05))
u=e.gdE()*0.05
d.az(C.br(v,new C.aP(u,u)),t)
u=f.cr(-(e.gdE()*0.1))
v=e.gdE()*0.03
v=C.br(u,new C.aP(v,v))
t.c=e.gdE()*0.012
d.az(v,t)
if(a1===1)s=E.iC
else s=w?E.iC:D.c
w=new A.fTz($.Wo,d,s)
v=new A.fTy(s,e,d)
u=g*0.4
r=g*0.12
if(a1===0){q=g*0.5
p=new C.u(g*0.62,q)
o=C.J()
o.r=F.eY.gp(0)
d.ad(p,g*0.34,o)
o=C.J()
o.r=B.Fv.gp(0)
d.ad(p,g*0.3,o)
w.$1(C.bK(p,u,q))
n=g*1.04
m=h-r
r=new A.fTA(e)
h=r.$1(k)
q=r.$1(j)
r=r.$1(i)
r=Math.max(C.jh(q),C.jh(r))
l=(n+m)/2
r=g*0.16*Math.min(1,(m-n)/Math.max(C.jh(h),r))
v.$3(k,new C.u(l,g*0.2),r)
v.$3(j,new C.u(l,u),r)
v.$3(i,new C.u(l,g*0.6),r)}else{q=h/2
w.$1(C.bK(new C.u(q,g*0.42),u,h*0.6))
v.$3("NGMY",new C.u(q,g*0.68),r)
v.$4$w(i,new C.u(q,g*0.82),g*0.06,D.U)}},
hxk(f9,g0,g1,g2,g3,g4,g5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1,e2,e3,e4,e5,e6,e7,e8,e9,f0,f1,f2,f3,f4="walls",f5="GFCI outlet",f6="Wall outlet",f7="\ud83d\udeb0 Needs plumbing",f8=f9.c
if(f8==="outside")return A.i7l(f9,g3,g2,g5,g4,g1)
f9.cKC()
w=x.z
v=C.a([],w)
u=new A.f3(v)
t=C.U(x.S,x.q)
s=C.a([],x.E)
r=C.a([],x.a)
q=f9.geb(0)
p=f9.gh4(0)
o=C.a([],x.O)
for(n=f9.z,m=n.length,l=0;l<n.length;n.length===m||(0,C.K)(n),++l)o.push(B.aAH[n[l]])
k=B.aAp[f9.Q]
j=new A.fCo(g2)
u.f=-1
u.b=j.$2("floor",310)
i=$.dp+1
u.x=$.dp=i
n=p/2
m=q+2.4
h=p+2
g=k.b
f=k.c
e=f==="tile"
if(e)d=0.35
else d=f==="wood"?0.15:0
u.kX(new A.q(0,-0.6,n),new A.q(m,1.2,h),g,d,3)
t.n(0,310,new A.cL("Floor","The "+k.a.toLowerCase()+" floor.",new A.q(0,0,n),140))
u.b=0
if(f==="wood")for(f=-q/2,a0=1;a0<8;++a0){e=C.ar(g,D.w,0.25)
e.toString
u.aE(new A.q(f+a0*q/8,0.05,n),new A.q(0.3,0.2,p),e)}else if(e)for(g=-q/2,a0=1;a0<6;++a0){u.aE(new A.q(g+a0*q/6,0.05,n),new A.q(0.3,0.2,p),B.afl)
u.aE(new A.q(0,0.05,a0*p/6),new A.q(q,0.2,0.3),B.afl)}u.x=0
g=f8==="hall"
if(g){a1=Math.min(q*0.5,p*1.5)
a2=p-14
f=-a1/2
e=a1/2
r.push(new A.fo(C.a([new A.q(f,0.5,14),new A.q(e,0.5,14),new A.q(e,0.5,a2),new A.q(f,0.5,a2)],x.o),0,A.hBj(),900,900*(a2-14)/a1,60,-1,i,!1))}u.f=0
u.b=j.$2(f4,300)
a3=u.x=$.dp=$.dp+1
u.hn(new A.q(0,65,-0.6),new A.q(m,130,1.2),o[0],3)
u.x=0
u.b=j.$2(f4,301)
a4=u.x=$.dp=$.dp+1
f=-q
e=f/2
u.hn(new A.q(e-0.6,65,n),new A.q(1.2,130,p),o[1],3)
u.x=0
u.b=j.$2(f4,302)
a5=u.x=$.dp=$.dp+1
d=q/2
u.hn(new A.q(d+0.6,65,n),new A.q(1.2,130,p),o[2],3)
u.x=0
t.n(0,300,B.efh)
t.n(0,301,B.efl)
t.n(0,302,B.efu)
if(g0){u.b=0
u.hn(new A.q(0,65,p+0.6),new A.q(m,130,1.2),o[0],3)}u.f=u.b=0
u.x=a3
u.aF(new A.q(0,2.5,0.4),new A.q(q,5,0.8),B.kI,0.1)
u.x=a4
u.aF(new A.q(e+0.4,2.5,n),new A.q(0.8,5,p),B.kI,0.1)
u.x=a5
u.aF(new A.q(d-0.4,2.5,n),new A.q(0.8,5,p),B.kI,0.1)
u.x=0
u.f=g0?0:3
u.b=j.$2("ceiling",320)
if(g0)o=1
else o=g2==="ceiling"?0.6:0.4
u.d=o
u.hn(new A.q(0,130.6,n),new A.q(m,1.2,h),B.aza[f9.as],2)
u.d=1
u.b=u.f=0
u.x=a3
u.aF(new A.q(0,128,1),new A.q(q,3,1.4),D.c,0.2)
u.x=a4
u.aF(new A.q(e+1,128,n),new A.q(1.4,3,p),D.c,0.2)
u.x=a5
u.aF(new A.q(d-1,128,n),new A.q(1.4,3,p),D.c,0.2)
u.x=0
t.n(0,320,new A.cL("Ceiling","Pick a colour above to paint the ceiling.",new A.q(0,130,n),140))
h=f9.w
a6=D.d.b_(h,new A.fCa())?"left":"right"
if(!g){o=new A.fCl()
a7=p*0.55
if(g0)D.d.v(v,A.nH(o.$0(),0,3.141592653589793,new A.q(0,0,p+0.2)))
D.d.v(v,a6==="right"?A.nH(o.$0(),0,-1.5707963267948966,new A.q(d,0,a7)):A.nH(o.$0(),0,1.5707963267948966,new A.q(e,0,a7)))}for(o=f9.ax,m=f9.at,a0=0;a0<h.length;++a0){a8=h[a0]
if(a8.a)continue
a9=o.h(0,a0)
if(a9==null)a9=m.q(0,a0)?1.25:0
b0=C.a([],w)
b1=new A.f3(b0)
b1.f=1
b1.x=$.dp=$.dp+1
b2=b1.b=600+a0
b1.aE(B.heY,B.heG,B.kI)
b3=C.a([],w)
b4=new A.f3(b3)
b4.r=!0
b4.b=b2
if(a9>0.04){b1.b=0
b5=A.i4k(a8.d)
b6=b5.a
b1.aE(B.hd1,B.h9a,b6)
b1.aE(B.hea,B.hly,b5.b)
b7=C.ar(b6,D.w,0.25)
b7.toString
b1.aE(B.hdd,B.hja,b7)
b8=-a9
b7=A.vM(B.hls,b8)
b4.ww(new A.q(-12.5+b7.a,0+b7.b,1.2+b7.c),B.h7B,B.vP,0.15,b8)}else{b1.aF(B.hdh,B.hc8,B.vP,0.15)
b1.aF(B.hdo,B.hdM,B.Fp,0.8)
b1.aE(B.hdP,B.aZ1,B.N7)
b1.aE(B.hkN,B.aZ1,B.N7)}b7=new A.fCm(a8,q,p)
D.d.v(v,b7.$1(b0))
D.d.v(v,b7.$1(b3))
t.n(0,b2,new A.cL("Door","Tap the door to go through it.",B.EG,90))}for(o=f9.x,m=o.length,l=0;l<o.length;o.length===m||(0,C.K)(o),++l){b9=o[l]
b0=b9.b
b2=B.hF.h(0,b0)
b2.toString
b3=C.a([],w)
c0=new A.f3(b3)
c0.r=!0
c0.f=b0==="rug"?1:2
b7=100+b9.a
c0.b=j.$2("furniture",b7)
A.h9P(c0,b0,B.zt[b9.f])
D.d.v(v,A.nH(A.iag(b3,0.8),0,b9.e*3.141592653589793/2,new A.q(b9.c,0,b9.d)))
t.n(0,b7,new A.cL(b2.a,y.M,new A.q(b9.c,12,b9.d),90))}u.f=2
u.r=!0
c1=p*0.5
w=C.T(h)
o=d-10
c2=D.k.E(new C.cP(new C.Y(h,new A.fCb(),w.k("Y<1>")),new A.fCc(),w.k("cP<1,I>")).cG(0,e+30,new A.fCd())+24,e+10,o)
c3=f9.go==="fan"
c4=f9.ga6p()
c5=c4&&f9.gMr()&&f9.fy
u.b=703
if(c3){u.dm(new A.q(0,129.5,c1),new A.q(0,120,c1),1,B.hg,8)
u.d1(new A.q(0,120,c1),new A.q(0,113,c1),6,D.iF,0.5,14)
w=c5?B.o9:D.dn
u.d1(new A.q(0,113,c1),new A.q(0,110,c1),3.6,w,0.6,12)}else{w=c5?B.o9:D.dn
u.d1(new A.q(0,129.5,c1),new A.q(0,127,c1),7,w,0.6,16)}if(c5&&!c3){u.b=0
u.f=3
u.d=0.2
u.Lh(new A.q(0,127,c1),new A.q(0,0.5,c1),36,B.o9,!1,14)
u.d=1
u.f=2}c6=c3?"Ceiling fan":"Ceiling light"
if(!c4)c7="It has no power yet. "+(f9.p4.length!==0?"Tap it to wire it.":"The room still needs wiring: use the Wiring button.")
else if(!f9.gMr())c7="It is ready: wire the wall switch to turn it on."
else{w=f9.fy?"It is on. Tap the wall switch (or tap this) to turn it off.":"It is off. Tap the wall switch (or tap this) to turn it on."
c7=w}t.n(0,703,new A.cL(c6,c7,new A.q(0,122,c1),80))
w=f8==="bathroom"
m=!w
c8=!m||f8==="kitchen"||f9.p4==="gfci"
h=f9.ganX()
b0=c8?f5:f6
b2=f9.p4.length!==0||f9.Ix(1)
b3=c8?f5:f6
b3=C.a([new C.dY([0,700,f/4,h,b0]),new C.dY([1,701,q/4,b2,b3])],x.az)
for(h=f9.id,a0=0;a0<h.length;++a0){f=h[a0]
b0=f.a
if(b0!=="switch"){b2=f.c
b0=b2.c>=2&&A.Ll(A.td(b0),b2).a==="ok"
b2=h[a0].a==="gfci"?"Added GFCI outlet":"Added outlet"
b3.push(new C.dY([2+a0,800+a0,f.b,b0,b2]))}}u.f=1
u.r=!1
for(f=b3.length,b0=f9.fx,l=0;l<b3.length;b3.length===f||(0,C.K)(b3),++l){b2=b3[l].a
a0=b2[0]
c9=b2[1]
d0=b2[2]
d1=b2[3]
d2=b2[4]
u.x=$.dp=$.dp+1
u.b=c9
u.e=0.4
u.d=0.55
d3=2
if(!d1)if(a0<2){b2=f9.p4
if(b2.length!==0)b2=d3
else{b2=f9.CW
if(b2!=null)b2=b2.bj9(a0)
else b2=f9.ay?0:2}d3=b2}else d3=0
if(d1)b2=D.bf
else b2=d3===1?D.ay:D.aw
u.aE(new A.q(d0,14,0.25),B.h9S,b2)
u.d=1
u.e=0
b2=d1?B.MV:D.iF
u.aF(new A.q(d0,14,0.9),B.hfy,b2,0.25)
u.b=0
for(d4=0;d4<2;++d4)for(b2=14+F.hd[d4]*2.8,d5=0;d5<2;++d5)u.aE(new A.q(d0+B.RL[d5],b2,1.7),B.hlf,B.ahP)
u.aE(new A.q(d0,14,1.7),B.hfw,D.dn)
u.x=0
if(!d1)b2="This one is not wired yet. Tap it to wire it."
else b2=b0.h(0,a0)==null?"Tap it to plug something in.":"Tap it to plug something else in, or to unplug."
t.n(0,c9,new A.cL(d2,b2,new A.q(d0,14,2),60))}f=C.a([new C.b5(702,c2,f9.gMr())],x.al)
for(a0=0;a0<h.length;++a0){b2=h[a0]
b7=b2.a
if(b7==="switch"){d6=b2.c
b7=d6.c>=2&&A.Ll(A.td(b7),d6).a==="ok"
f.push(new C.b5(800+a0,b2.b,b7))}}for(h=f.length,l=0;l<f.length;f.length===h||(0,C.K)(f),++l){b2=f[l]
d0=b2.b
d1=b2.c
u.x=$.dp=$.dp+1
c9=u.b=b2.a
u.e=0.4
u.d=0.55
d7=2
if(!d1)if(c9===702){b2=f9.p4
if(b2.length!==0)b2=d7
else{b2=f9.CW
if(b2!=null)b2=b2.bj9(3)
else b2=f9.ay?0:2}d7=b2}else d7=0
if(d1)b2=D.bf
else b2=d7===1?D.ay:D.aw
u.aE(new A.q(d0,48,0.25),B.hbP,b2)
u.d=1
u.e=0
b2=d1?B.MV:D.iF
u.aF(new A.q(d0,48,0.9),B.haX,b2,0.25)
u.aE(new A.q(d0,f9.fy&&d1?49.2:46.8,1.9),B.haO,B.ajO)
u.x=0
if(!d1)b2="Not wired yet. Tap it to wire it."
else if(f9.fy)b2="On. Tap to turn the "+(c3?"fan":"light")+" off."
else b2="Off. Tap to turn the "+(c3?"fan":"light")+" on."
t.n(0,c9,new A.cL("Light switch",b2,new A.q(d0,48,2),60))}if(f9.p4.length===0&&!f9.gkS()){if(f9.p4.length===0)h=f9.gkS()
else h=!0
if(h)d8=D.Y
else{h=C.a([],x.s)
if(!f9.ganX())h.push("outlet 1")
if(!(f9.p4.length!==0||f9.Ix(1)))h.push("outlet 2")
if(!f9.ga6p())h.push(f9.go==="fan"?"ceiling fan":"ceiling light")
if(!f9.gMr())h.push("switch")
d8=h}h=d8.length===0?"\u26a1 No power: needs wiring":"\u26a1 Still to wire: "+D.d.aI(d8,", ")
s.push(new A.hi(new A.q(0,104,c1),h,D.bB,0))}h=!1
if(f9.p4.length!==0)if(!f9.gzd()){h=f9.p4
h=!(h==="ptrap"||h==="faucet")}if(h)s.push(new A.hi(new A.q(0,40,14),"\ud83d\udc46 Tap the red one to wire it",D.bB,0))
u.f=2
u.r=!0
for(h=b3.length,f=x.o,b2=f9.a,l=0;l<b3.length;b3.length===h||(0,C.K)(b3),++l){b7=b3[l].a
a0=b7[0]
d0=b7[2]
d1=b7[3]
d9=b0.h(0,a0)
if(d9==null||!d1)continue
e0=A.aQe(d9)
b7=u.b=720+a0
u.iV(C.a([new A.q(d0,12,1.8),new A.q(d0,6,3),new A.q(d0,2,11)],f),0.3,B.Z2,!1,0.2,6)
d6=e0.d
e1=d6<=0
if(!e1||e0.e){b8=d6*0.56
e2=$.dp+1
u.x=$.dp=e2
u.aF(new A.q(d0,2,15),new A.q(d6*0.45,4,14),B.hg,0.3)
u.aF(new A.q(d0,8,15),B.h9g,B.hg,0.3)
e3=12+b8/2
u.aF(new A.q(d0,e3,15),new A.q(d6,b8,3),E.FO,0.5)
d6=(d6-3.5)/2
e4=d0-d6
e5=(b8-3.5)/2
e6=e3+e5
d6=d0+d6
e5=e3-e5
r.push(new A.fo(C.a([new A.q(e4,e6,16.6),new A.q(d6,e6,16.6),new A.q(d6,e5,16.6),new A.q(e4,e5,16.6)],f),b7,new A.fCe(a0*7+b2),320,180,9,2,e2,!0))
u.x=0}else{d6=e0.a
if(d6==="lamp"){u.d1(new A.q(d0,0,14),new A.q(d0,1,14),6,B.Y_,0.4,14)
u.d1(new A.q(d0,1,14),new A.q(d0,22,14),1,B.BI,0.5,8)
d6=f9.fy?B.o9:L.Z9
u.yY(new A.q(d0,20,14),new A.q(d0,32,14),9,d6,!1,!0,5.5,0.2,16)}else{e3=d6==="washer"
if(e3||d6==="dryer"){d6=e3?B.air:B.ajo
u.aF(new A.q(d0,15,20),B.aXC,d6,0.4)
u.aF(new A.q(d0,28,31.2),B.h6_,B.afn,0.3)
u.d1(new A.q(d0,14,31),new A.q(d0,14,31.8),8.5,B.aeZ,0.8,20)
d6=e3?B.afA:B.aja
u.d1(new A.q(d0,14,31.7),new A.q(d0,14,32.2),6.5,d6,0.9,20)}else if(d6==="range"){u.aF(new A.q(d0,15,20),B.aXC,B.BA,0.7)
u.aF(new A.q(d0,13,31.2),B.h9I,D.xU,0.9)
u.aF(new A.q(d0,22,32.2),B.h5B,B.Yz,0.9)
u.aF(new A.q(d0,30.3,20),B.hd2,B.agj,0.5)
for(d4=0;d4<2;++d4)for(d6=d0+B.doW[d4],d5=0;d5<2;++d5){e7=B.cjw[d5]
u.d1(new A.q(d6,30.8,e7),new A.q(d6,31.1,e7),3.6,B.ahO,0.3,14)}}else{u.aF(new A.q(d0,9,15),B.h4L,B.nY,0.1)
if(d6==="toaster"){u.aF(new A.q(d0,23,15),B.h4D,B.hP,0.8)
u.aE(new A.q(d0,28.2,15),B.hgU,B.aj9)}else{u.yX(new A.q(d0-7,21,15),new A.q(d0+7,21,15),3.6,B.G2,3,0.6,12)
u.aF(new A.q(d0-8,14.5,15),B.hdI,B.G2,0.6)}}}}d6=!e1||e0.e?"It is playing NGMY ads. Tap it to watch full screen with the remote.":"It is plugged in and running. Tap the outlet to unplug it or plug in something else."
t.n(0,b7,new A.cL(e0.b,d6,new A.q(d0,16,14),90))}u.f=1
u.r=!1
e8=new A.fCg(f9,u,q,r,t)
e8.$2(f9.k1,0)
if(g){e8.$2(f9.k2,1)
e8.$2(f9.k1,2)
h=f9.k2
e8.$2(h==null?f9.k1:h,3)}if(g)for(e9=p-14,h=d-14,a0=0;a0<4;++a0){f0=(D.o.F(a0,2)===0?-1:1)*h
f1=a0<2?14:e9
f2=Math.atan2(-f0,-(n-f1)*-1)
u.f=2
u.r=!1
u.x=$.dp=$.dp+1
g=19e3+a0
u.b=g
u.aE(new A.q(f0,125,f1),B.h89,D.iF)
u.ww(new A.q(f0,118,f1),B.h3Q,D.bO,0.4,f2)
u.ww(new A.q(f0+Math.sin(f2)*8.5,118,f1+Math.cos(f2)*8.5),B.h9f,D.au,0.6,f2)
u.ee(new A.q(f0-Math.sin(f2)*5+Math.cos(f2)*3,122,f1-Math.cos(f2)*5-Math.sin(f2)*3),1.4,D.aw,3,5)
u.b=u.x=0
t.n(0,g,new A.cL("Hall camera","Tap it and you look from here, like your eyes.",new A.q(f0,118,f1),60))}u.f=2
u.r=!0
if(!m||f8==="kitchen"){f8=f9.p4
f8=f8.length===0||f8==="ptrap"||f8==="faucet"}else f8=!1
if(f8){d1=f9.gjU()
f8=new A.fCn(u)
if(w){f3=e+17
if(d1){u.b=710
u.yX(new A.q(6,0.5,14),new A.q(6,15,14),8,B.Bn,5.6,0.8,18)
u.d1(new A.q(6,15,14),new A.q(6,16,14),9,B.MX,0.8,18)
u.aF(new A.q(6,21,5),B.h4Y,B.Bn,0.8)
u.aF(new A.q(6,28,5),B.hcP,B.MX,0.8)}else{u.b=710
u.d=0.3
u.f=3
u.aE(new A.q(6,14,9),B.h4O,D.b_)
u.d=1
u.f=2
f8.$2(-4,8)}u.b=711
A.huf(u,new A.q(34,14,10),30,28,18,B.nY)
A.b7E(u,11,D.c,18,20,B.hP,B.YC,32,7,d1,1,2,30,0.6,34,10)
w=!d1
if(w){f8.$2(28,18)
f8.$2(40,18)}u.b=712
if(d1){u.aF(new A.q(f3,8,38),B.aXJ,B.Zs,0.7)
u.aF(new A.q(f3,16.2,38),B.hj5,B.Yl,0.8)
u.d1(new A.q(f3,30,3),new A.q(f3,52,3),0.7,B.hP,0.9,8)
u.d1(new A.q(f3,52,3),new A.q(f3,52,10),0.7,B.hP,0.9,8)}else{u.d=0.3
u.f=3
u.aE(new A.q(f3,8,38),B.aXJ,D.b_)
u.d=1
u.f=2
f8.$2(f3-4,34)
f8.$2(f3+4,34)}f8=d1?"Fitted on its flange with a wax ring, and the supply hose joins the shut-off valve.":"There is no toilet yet: only the flange and the water stub. Use the Plumbing button to fit it."
t.n(0,710,new A.cL("Toilet",f8,new A.q(6,14,10),70))
f8=d1?"The faucet, the hoses and the P-trap are fitted.":"The sink is not plumbed. Use the Plumbing button."
t.n(0,711,new A.cL("Vanity sink",f8,new A.q(34,28,10),70))
f8=d1?"The bath is in and connected.":"The bath is not connected yet."
t.n(0,712,new A.cL("Bath",f8,new A.q(f3,10,38),90))
if(w)s.push(new A.hi(new A.q(0,40,14),f7,D.bl,0))}else{u.b=0
u.aF(new A.q(e+15,36,14),B.h5X,B.ahz,0.6)
u.aE(new A.q(e+28.5,36,14.4),B.hf9,D.dn)
u.aF(new A.q(o,15,14),B.h5p,B.afR,0.1)
u.aF(new A.q(o,31,14),B.h5C,B.hg,0.5)
u.aF(new A.q(d-15,32.4,14),B.aYd,D.i5,0.3)
u.aF(new A.q(d-5,32.4,14),B.aYd,D.i5,0.3)
u.b=713
A.huf(u,new A.q(30,15,14),40,30,26,B.nY)
A.b7E(u,17,D.e2,28,28,B.hP,B.MC,42,8.5,d1,1,2,32,0.6,30,14)
w=!d1
if(w){f8.$2(22,18)
f8.$2(38,18)}f8=d1?"The faucet, the hoses and the drain are fitted.":"The kitchen sink is not plumbed yet. Use the Plumbing button."
t.n(0,713,new A.cL("Kitchen sink",f8,new A.q(30,30,14),70))
if(w)s.push(new A.hi(new A.q(30,48,14),f7,D.bl,0))}}for(f8=D.d.gaf(g4),w=new C.eR(f8,new A.fCf(f9));w.C();){o=f8.gS(0)
t.n(0,900+o.a,new A.cL(o.r,"Tap to see how they are, feed them or give medicine.",new A.q(o.c,36,o.d),90))}return new A.qW(v,t,s,r,new C.cw([e,d,0,p]),!1,0)},
kJ(d,e,f,g,h,i,j,k,l){var w=-h/2,v=i/2,u=h/2,t=-i/2
d.cYy(e.a7(0,f.aJ(0,w)).a7(0,g.aJ(0,v)),e.a7(0,f.aJ(0,u)).a7(0,g.aJ(0,v)),e.a7(0,f.aJ(0,u)).a7(0,g.aJ(0,t)),e.a7(0,f.aJ(0,w)).a7(0,g.aJ(0,t)),j,k,l)},
i7l(d7,d8,d9,e0,e1,e2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5=-158,c6=1000,c7=1200,c8=x.z,c9=C.a([],c8),d0=new A.f3(c9),d1=x.S,d2=C.U(d1,x.q),d3=C.a([],x.E),d4=d7.geb(0),d5=d7.gh4(0),d6=new A.fv8(d9)
d0.f=0
d0.b=d6.$2("floor",310)
d0.hn(new A.q(0,-0.6,d5/2-60),new A.q(d4*2.5,1.2,d5*2.5),B.Y2,5)
d2.n(0,310,B.efp)
d0.b=0
d0.f=1
d0.aE(new A.q(0,0.15,60),B.haM,E.Fs)
for(w=0;w<6;++w)d0.aE(new A.q(0,0.35,8+w*22),B.hfB,B.bqC)
d0.f=2
v=$.dp+1
d0.x=$.dp=v
d0.hn(B.h3a,B.h5L,B.Mx,3)
d0.aE(B.h2G,B.h5M,B.af3)
u=new A.fv9(d0)
t=new A.fv4(d0)
for(s=0;s<4;++s){r=B.dp4[s]
u.$5(B.dX,B.h1,B.hL,r,62)
u.$5(B.dX,B.h1,B.hL,r,122)}t.$5(B.dX,B.h1,B.hL,0,600)
for(s=0;s<2;++s){r=B.aBK[s]
u.$5(B.abm,B.oV,B.pO,r,62)
u.$5(B.abm,B.oV,B.pO,r,122)}t.$5(B.abm,B.oV,B.pO,0,0)
for(s=0;s<2;++s){q=B.a5C[s]
u.$5(B.h4_,B.pO,B.h1,q,62)
u.$5(B.hhN,B.hL,B.oV,-q,62)}p=C.a([],c8)
new A.f3(p).kX(B.dX,B.h5U,B.MA,0.1,2)
d0.a7o(B.hhD,B.hg4,B.hf8,B.Mx,B.h1,!1)
d0.a7o(B.hff,B.h8i,B.hfF,B.Mx,B.oV,!1)
d0.x=0
d0.r=!0
D.d.v(c9,A.nH(p,0.5,0,B.h1R))
D.d.v(c9,A.nH(p,-0.5,0,B.h1S))
d0.aE(B.h1U,B.h5T,B.Yx)
d0.aE(B.h8M,B.h4v,B.aiJ)
d0.aE(B.h8N,B.aXu,B.qe)
d0.aE(B.h2s,B.h7I,E.Fs)
d0.dm(B.hi1,B.hi2,2.2,B.kI,8)
d0.dm(B.h5r,B.h5s,2.2,B.kI,8)
d0.aF(B.h3l,B.h7U,B.MA,0.1)
d2.n(0,600,B.eg4)
p=x.a
o=C.a([],p)
n=new A.fv5(o,v)
n.$4(B.hav,B.hfM,B.hgz,B.he8)
n.$5$poster(B.h8I,B.h7p,B.h9H,B.hgm,1)
n.$5$poster(B.hbF,B.hbY,B.ha7,B.hgj,2)
n.$5$poster(B.hgu,B.hlH,B.hdD,B.hfL,0)
d0.r=!0
m=C.U(d1,d1)
for(d1=d7.x,l=d1.length,s=0;s<d1.length;d1.length===l||(0,C.K)(d1),++s){k=d1[s]
j=k.a
i=100+j
if(e2.q(0,i))continue
h=k.b
if(D.d.q(B.Ij,h)){d2.n(0,i,new A.cL(B.hF.h(0,h).a,"It wanders about. Move it with the arrow buttons or take it out.",new A.q(k.c,12,k.d),140))
continue}g=B.hF.h(0,h)
g.toString
f=C.a([],c8)
e=new A.f3(f)
d=e.r=!0
e.f=D.d.q(B.a5M,h)?1:2
a0=h==="hospital"
e.b=(!a0?h==="shop":d)?i:d6.$2("furniture",i)
A.h9P(e,h,B.zt[k.f])
if(f.length!==0)m.n(0,j,D.d.gI(f).z)
D.d.v(c9,A.nH(f,0,k.e*3.141592653589793/2,new A.q(k.c,0,k.d)))
if(a0)j="The hospital: tap it to see the beds and treat the patients."
else j=h==="shop"?"The shop: tap it to buy food and medicine.":y.M
d2.n(0,i,new A.cL(g.a,j,new A.q(k.c,12,k.d),140))}a1=C.a([],x._)
for(l=D.d.gaf(d1),j=new C.eR(l,new A.fus()),i=d7.k3;j.C();){h=l.gS(0)
g=h.a
a2=i.q(0,g)
f=h.b==="pole"
d=h.c
a0=h.d
a3=f?new A.q(d+20,86,a0):new A.q(d,55,a0)
d=C.a([],c8)
a4=new A.f3(d)
a0=f?4.6:4.2
a5=a2?D.e9:B.o9
a4.fu(a3,a0,a5,3,6,a2?0.1:0)
if(!a2){a4.d=0.2
a4.fu(a3,10,B.o9,2,6,0)
a4.d=1}D.d.v(c9,d)
if(a2)d3.push(new A.hi(new A.q(a3.a+0,a3.b+14,a3.c+0),"\u26a1 Light out: tap to go and fix it",D.bB,2e4+g))
if(f)a1.push(h)}D.d.aX(a1,new A.fut())
for(l=x.o,w=0;a6=w+1,a6<a1.length;w=a6){a7=a1[w]
a8=a1[a6]
if(Math.abs(a7.d-a8.d)>1||Math.abs(a8.c-a7.c)>170)continue
j=C.a([],c8)
a9=new A.f3(j)
for(s=0;s<3;++s){b0=B.aBE[s]
i=a7.c
h=a7.d
g=a8.c
a9.iV(C.a([new A.q(i+b0,121,h),new A.q((i+g)/2+b0,117,h),new A.q(g+b0,121,h)],l),0.35,D.au,!1,0,4)}D.d.v(c9,j)}for(j=D.d.gaf(d1),i=new C.eR(j,new A.fuu(d7)),h=d7.cy;i.C();){g=j.gS(0)
f=g.c
d=g.b==="hq"?190:130
a0=g.d
g=g.a
d3.push(new A.hi(new A.q(f,d,a0+40),"\u26a1 Level "+C.w(h.h(0,g))+" has no power: tap to go and fix it",D.bB,2e4+g))}for(j=D.d.gaf(d1),i=new C.eR(j,new A.fuF(d7));i.C();){h=j.gS(0)
g=h.b
f=B.hF.h(0,g)
f.toString
d=h.c
g=g==="bighouse"?120:82
d3.push(new A.hi(new A.q(d,g,h.d),"\u26a1 No power: tap to go in and fix it",D.bB,2e4+h.a))
g=C.a([],c8)
b1=new A.f3(g)
b1.d=0.45
d=h.c
b1.aE(new A.q(d,30,h.d),new A.q(f.c+2,60,f.d+2),D.dd)
b1.d=1
D.d.v(c9,g)}if(d7.c==="outside")D.d.v(c9,A.idh())
b2=C.a([],p)
for(c8=D.d.gaf(d1),d1=new C.eR(c8,new A.fuQ());d1.C();){p=c8.gS(0)
d4=new A.fv7(p.e*3.141592653589793/2,p)
b3=m.h(0,p.a)
if(b3==null)b3=0
j=p.b
if(j==="billboard"){b2.push(new A.fo(C.a([d4.$3(-33,62.5,2),d4.$3(33,62.5,2),d4.$3(33,31.5,2),d4.$3(-33,31.5,2)],l),0,new A.fuZ(p),960,450,4,2,b3,!1))
b2.push(new A.fo(C.a([d4.$3(33,62.5,-2),d4.$3(-33,62.5,-2),d4.$3(-33,31.5,-2),d4.$3(33,31.5,-2)],l),0,new A.fv_(p),960,450,4,2,b3,!1))}else{i=j==="townsign"
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
b2.push(new A.fo(C.a([d4.$3(p,j,b7),d4.$3(b4,j,b7),d4.$3(b4,i,b7),d4.$3(p,i,b7)],l),0,new A.fv0(b8),b9,c0,4,2,b3,!1))
h=-b7
b2.push(new A.fo(C.a([d4.$3(b4,j,h),d4.$3(p,j,h),d4.$3(p,i,h),d4.$3(b4,i,h)],l),0,new A.fv1(b8),b9,c0,4,2,b3,!1))}else if(j==="adboard"){b2.push(new A.fo(C.a([d4.$3(c5,195,3.6),d4.$3(158,195,3.6),d4.$3(158,90,3.6),d4.$3(c5,90,3.6)],l),0,new A.fv2(p),1280,424,4,2,b3,!1))
b2.push(new A.fo(C.a([d4.$3(158,195,-3.6),d4.$3(c5,195,-3.6),d4.$3(c5,90,-3.6),d4.$3(158,90,-3.6)],l),0,new A.fv3(p),1280,424,4,2,b3,!1))}else if(j==="tower"){c1=210+D.o.F(B.zt[p.f].l(),5)*24
j=c1-8
i=c1-54
b2.push(new A.fo(C.a([d4.$3(-40,j,35.9),d4.$3(40,j,35.9),d4.$3(40,i,35.9),d4.$3(-40,i,35.9)],l),0,new A.fuv(p),800,460,8,2,b3,!1))
b2.push(new A.fo(C.a([d4.$3(40,j,-35.9),d4.$3(-40,j,-35.9),d4.$3(-40,i,-35.9),d4.$3(40,i,-35.9)],l),0,new A.fuw(p),800,460,8,2,b3,!1))
b2.push(new A.fo(C.a([d4.$3(50.9,j,28),d4.$3(50.9,j,-28),d4.$3(50.9,i,-28),d4.$3(50.9,i,28)],l),0,new A.fux(p),640,460,8,2,b3,!1))
b2.push(new A.fo(C.a([d4.$3(-50.9,j,-28),d4.$3(-50.9,j,28),d4.$3(-50.9,i,28),d4.$3(-50.9,i,-28)],l),0,new A.fuy(p),640,460,8,2,b3,!1))
i=c1+58
j=c1+22
b2.push(new A.fo(C.a([d4.$3(-40,i,1.7),d4.$3(40,i,1.7),d4.$3(40,j,1.7),d4.$3(-40,j,1.7)],l),0,new A.fuz(p),960,400,8,2,b3,!1))
b2.push(new A.fo(C.a([d4.$3(40,i,-1.7),d4.$3(-40,i,-1.7),d4.$3(-40,j,-1.7),d4.$3(40,j,-1.7)],l),0,new A.fuA(p),960,400,8,2,b3,!1))}else if(j==="hq"){b2.push(new A.fo(C.a([d4.$3(-70,108,45.9),d4.$3(70,108,45.9),d4.$3(70,52,45.9),d4.$3(-70,52,45.9)],l),0,new A.fuB(),c6,400,8,2,b3,!1))
b2.push(new A.fo(C.a([d4.$3(-48,215,30.2),d4.$3(48,215,30.2),d4.$3(48,175,30.2),d4.$3(-48,175,30.2)],l),0,new A.fuC(),900,380,8,2,b3,!1))
b2.push(new A.fo(C.a([d4.$3(70,108,-45.9),d4.$3(-70,108,-45.9),d4.$3(-70,52,-45.9),d4.$3(70,52,-45.9)],l),0,new A.fuD(),c6,400,8,2,b3,!1))
b2.push(new A.fo(C.a([d4.$3(48,215,-30.2),d4.$3(-48,215,-30.2),d4.$3(-48,175,-30.2),d4.$3(48,175,-30.2)],l),0,new A.fuE(),900,380,8,2,b3,!1))
b2.push(new A.fo(C.a([d4.$3(-54,328,1.7),d4.$3(54,328,1.7),d4.$3(54,294,1.7),d4.$3(-54,294,1.7)],l),0,new A.fuG(p),c6,360,8,2,b3,!1))
b2.push(new A.fo(C.a([d4.$3(54,328,-1.7),d4.$3(-54,328,-1.7),d4.$3(-54,294,-1.7),d4.$3(54,294,-1.7)],l),0,new A.fuH(p),c6,360,8,2,b3,!1))
b2.push(new A.fo(C.a([d4.$3(85.9,118,36),d4.$3(85.9,118,-36),d4.$3(85.9,62,-36),d4.$3(85.9,62,36)],l),0,new A.fuI(p),720,560,8,2,b3,!1))
b2.push(new A.fo(C.a([d4.$3(-85.9,118,-36),d4.$3(-85.9,118,36),d4.$3(-85.9,62,36),d4.$3(-85.9,62,-36)],l),0,new A.fuJ(p),720,560,8,2,b3,!1))}else if(j==="store"){b2.push(new A.fo(C.a([d4.$3(-54,85,37.7),d4.$3(54,85,37.7),d4.$3(54,67,37.7),d4.$3(-54,67,37.7)],l),0,new A.fuK(),900,150,6,2,b3,!1))
b2.push(new A.fo(C.a([d4.$3(-72,152,30.3),d4.$3(72,152,30.3),d4.$3(72,96,30.3),d4.$3(-72,96,30.3)],l),0,new A.fuL(),c7,470,8,2,b3,!1))
b2.push(new A.fo(C.a([d4.$3(72,152,25.7),d4.$3(-72,152,25.7),d4.$3(-72,96,25.7),d4.$3(72,96,25.7)],l),0,new A.fuM(),c7,470,8,2,b3,!1))}else if(j==="ubstation"){b2.push(new A.fo(C.a([d4.$3(40,106,31.9),d4.$3(76,106,31.9),d4.$3(76,86,31.9),d4.$3(40,86,31.9)],l),0,new A.fuN(),480,270,8,2,b3,!1))
b2.push(new A.fo(C.a([d4.$3(76,106,28.1),d4.$3(40,106,28.1),d4.$3(40,86,28.1),d4.$3(76,86,28.1)],l),0,new A.fuO(),480,270,8,2,b3,!1))}else if(j==="dmv"){b2.push(new A.fo(C.a([d4.$3(-50,85,38.6),d4.$3(50,85,38.6),d4.$3(50,67,38.6),d4.$3(-50,67,38.6)],l),0,new A.fuP(),900,160,8,2,b3,!1))
b2.push(new A.fo(C.a([d4.$3(-72,152,30.3),d4.$3(72,152,30.3),d4.$3(72,96,30.3),d4.$3(-72,96,30.3)],l),0,new A.fuR(),c7,470,8,2,b3,!1))
b2.push(new A.fo(C.a([d4.$3(72,152,25.7),d4.$3(-72,152,25.7),d4.$3(-72,96,25.7),d4.$3(72,96,25.7)],l),0,new A.fuS(),c7,470,8,2,b3,!1))}else if(j==="gasstation")b2.push(new A.fo(C.a([d4.$3(-86,107,35.7),d4.$3(-54,107,35.7),d4.$3(-54,85,35.7),d4.$3(-86,85,35.7)],l),0,new A.fuT(),480,330,6,2,b3,!1))
else for(c2=0;c2<2;++c2){c3=c2===0?-40:40
j=c3-26
i=c3+26
b2.push(new A.fo(C.a([d4.$3(j,70,60.7),d4.$3(i,70,60.7),d4.$3(i,40,60.7),d4.$3(j,40,60.7)],l),0,new A.fuU(p,c2),720,520,9,2,b3,!1))}}}for(c8=D.d.gaf(e1),d1=new C.eR(c8,new A.fuV(d7));d1.C();){p=c8.gS(0)
d3.push(new A.hi(new A.q(p.c,82,p.d),p.Q,D.cQ,0))}for(c8=D.d.gaf(e1),d1=new C.eR(c8,new A.fuW(d7));d1.C();){p=c8.gS(0)
d3.push(new A.hi(new A.q(p.c,80,p.d),"\ud83d\udcde Help!",D.bB,0))}c8=d8===0
d1=c8?"\u2705 The house is finished":"\ud83c\udfe0 "+d8+" rooms still need work"
d3.push(new A.hi(B.h29,d1,c8?D.cT:D.dZ,0))
c4=d0.x=$.dp=$.dp+1
for(s=0;s<2;++s){r=B.aBK[s]
d0.dm(new A.q(r,0,-118),new A.q(r,215,-118),3,D.iF,8)}d0.aF(B.AB,B.h5R,D.au,0.3)
d0.x=0
o.push(new A.fo(B.cQU,0,new A.fuX(),c6,336,4,2,c4,!1))
o.push(new A.fo(B.dly,0,new A.fuY(),c6,336,4,2,c4,!1))
c8=C.C(o,x.fd)
D.d.v(c8,b2)
return new A.qW(c9,d2,d3,c8,null,!1,4000)},
iee(a5,a6,a7,a8,a9,b0,b1,b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=x.z,a3=C.a([],a2),a4=new A.f3(a3)
a4.r=!0
if(a5.c==="outside"){w=new A.fFw(b1)
v=b1!=null
if(v&&b1.a===a5.a)A.wX(a4,b1,a6,b2,!0,0,null)
if(a7&&v&&b1.a===a5.a){v=C.a([],a2)
u=b1.b
t=b1.d
new A.f3(v).aE(new A.q(u+Math.sin(t)*9,46+b1.y,b1.c+Math.cos(t)*9),B.aXs,B.iB)
D.d.v(a3,v)}if(a9!=null){v=C.a([],a2)
s=new A.f3(v)
s.r=!0
u=a9.a
A.h9P(s,u[0],B.zt[u[4]])
D.d.v(a3,A.nH(v,0,u[3]-1.5707963267948966,new A.q(u[1],0,u[2])))}for(v=D.d.gaf(a5.x),u=new C.eR(v,new A.fFt()),t=a6*6,r=b0==="furniture";u.C();){q=v.gS(0)
p=q.a
o=a6*(0.25+D.o.F(p,5)*0.04)+p*1.7
n=q.c
m=Math.cos(o)
l=q.d
k=Math.sin(o)
j=Math.atan2(-Math.sin(o),Math.cos(o))
i=C.a([],a2)
h=new A.f3(i)
h.r=!0
h.b=r?100+p:0
A.hsk(h,q.b,B.zt[q.f],Math.sin(t+p)*0.5)
D.d.v(a3,A.nH(i,0,j,new A.q(n+m*10,0,l+k*10)))}for(v=D.d.gaf(b3),u=new C.eR(v,new A.fFu(a5)),t=a5.a;u.C();){r=v.gS(0)
q=r.c
p=r.d
n=r.e
m=r.f
l=r.a
A.wX(a4,new A.yb(t,q,p,n,!1,!1,!1,!1,!1,0,!1,!1,"","",-1,0,-1,0),a6,m,w.$2(q,p),900+l,m.c)
A.i1_(a4,r,a6)}for(v=a8.length,g=0;g<a8.length;a8.length===v||(0,C.K)(a8),++g){f=a8[g]
u=f.b
r=f.c
q=f.d
A.wX(a4,new A.yb(t,u,r,q,f.f,!1,!1,!1,!1,0,!1,!1,"","",-1,0,-1,f.e),a6,f.w,w.$2(u,r),0,f.x)
if(f.r){p=C.a([],a2)
new A.f3(p).aE(new A.q(u+Math.sin(q)*9,46,r+Math.cos(q)*9),B.h4e,F.eY)
D.d.v(a3,p)}}return a3}if(b1!=null&&b1.a===a5.a)A.wX(a4,b1,a6,b2,!0,0,null)
for(a2=D.d.gaf(b3),v=new C.eR(a2,new A.fFv(a5)),u=a5.a,t=a6*0.5;v.C();){r=a2.gS(0)
q=r.y
p=q>0
e=p?Math.sin(t+r.a)*q:0
q=r.c
n=r.d
if(p)m=Math.cos(t+r.a)>=0?1.5707963267948966:-1.5707963267948966
else m=r.x?0.5:r.e
A.wX(a4,new A.yb(u,q+e,n,m,p,!1,!1,!1,r.x,0,!1,!1,"","",-1,0,-1,0),a6,r.f,!0,900+r.a,null)}d=a5.gh4(0)
if(a5.go==="fan"){a0=a5.ga6p()&&a5.gMr()&&a5.fy?a6*7:0
a4.b=703
for(a2=d*0.5,a1=0;a1<4;++a1){o=a0+a1*3.141592653589793/2
a4.ww(new A.q(Math.cos(o)*15,115,a2+Math.sin(o)*15),B.hkG,B.nY,0.1,-o)}}return a3},
i4k(d){var w
A:{if(5===d){w=B.ePr
break A}if(9===d){w=B.eUB
break A}if(10===d){w=B.eHF
break A}if(11===d){w=B.eVA
break A}if(2===d||4===d||8===d){w=B.exb
break A}w=B.eKl
break A}return w},
fB4(b0,b1,b2,b3,b4,b5,b6,b7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9
for(w=b2.a,v=b2.b,u=b2.c,t=b1.a,s=b1.b,r=b1.c,q=b3.a,p=q*0.1,o=b3.b,n=o*0.1,m=b3.c,l=m*0.1,k=q*0.2,j=o*0.2,i=m*0.2,q*=0.3,o*=0.3,m*=0.3,h=-b4/2,g=b5-1,f=b5===1,e=0;e<b5;++e){d=f?0:h+b4*e/g
for(a0=b6.length,a1=s+v*d,a2=t+w*d+0,a3=r+u*d+0,a4=a2+p,a5=a3+l,a6=a2+k,a7=a3+i,a2+=q,a3+=m,a8=0;a8<b6.length;b6.length===a0||(0,C.K)(b6),++a8){a9=a1+b6[a8]
A.kJ(b0,new A.q(a4,a9+n,a5),b2,B.e8,14,17,B.kI,b3,0)
A.kJ(b0,new A.q(a6,a9+j,a7),b2,B.e8,11,14,b7,b3,0.6)
A.kJ(b0,new A.q(a2,a9+o,a3),b2,B.e8,11,0.9,B.kI,b3,0)}}},
hsP(a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0
A:{if("shop"===a2){w=B.f3i
break A}if("hospital"===a2){w=B.f3d
break A}if("firestation"===a2){w=B.f2V
break A}if("school"===a2){w=B.f2N
break A}w=B.f2w
break A}w=w.a
v=w[0]
u=w[1]
t=w[2]
s=w[3]
r=w[4]
q=u/2
p=v/2
a1.x=$.dp=$.dp+1
a1.hn(new A.q(0,t/2,0),new A.q(v,t,u),s,2)
a1.aE(new A.q(0,2.5,0),new A.q(v+3,5,u+3),B.af3)
w=a2==="hospital"
if(w)o=C.a([14,30,46],x.n)
else if(a2==="school"){n=C.a([14,32],x.n)
o=n}else{n=x.n
n=a2==="house2"?C.a([26],n):C.a([22],n)
o=n}m=D.o.E(D.k.bf(v/24),2,5)
n=a2==="firestation"
l=n?C.a([34],x.n):o
k=v-30
A.fB4(a1,new A.q(0,0,q).a7(0,B.dX),B.h1,B.hL,k,m,l,B.i4)
j=q+0.4
if(n){A.kJ(a1,new A.q(-14,17,j),B.h1,B.e8,34,34,D.hm,B.hL,0.2)
for(i=q+0.5,h=0;h<6;++h)A.kJ(a1,new A.q(-14,4+h*6,i),B.h1,B.e8,33,0.8,D.dn,B.hL,0)
A.kJ(a1,new A.q(24,15,j),B.h1,B.e8,14,30,B.vP,B.hL,0)}else{A.kJ(a1,new A.q(0,14,q+0.3),B.h1,B.e8,18,28,B.kI,B.hL,0)
A.kJ(a1,new A.q(0,13,j),B.h1,B.e8,14,26,B.vP,B.hL,0.2)}switch(a2){case"hospital":i=t-8
A.kJ(a1,new A.q(0,i,j),B.h1,B.e8,30,9,D.bB,B.hL,0)
j=q+0.5
A.kJ(a1,new A.q(0,i,j),B.h1,B.e8,24,2.6,D.c,B.hL,0)
A.kJ(a1,new A.q(0,i,j),B.h1,B.e8,2.6,7,D.c,B.hL,0)
break
case"shop":for(i=q+3,h=0;h<6;++h){g=(h&1)===0?D.aw:D.c
A.kJ(a1,new A.q(-30+h*12,33,i),B.h1,B.e8,6,6,g,B.hL,0)}A.kJ(a1,new A.q(0,t-4,j),B.h1,B.e8,36,6,a3,B.hL,0)
break
case"firestation":A.kJ(a1,new A.q(0,t-5,j),B.h1,B.e8,40,7,D.bs,B.hL,0)
break
case"school":A.kJ(a1,new A.q(0,t-5,j),B.h1,B.e8,40,7,D.bl,B.hL,0)
break}j=-q
A.fB4(a1,new A.q(0,0,j),B.oV,B.pO,k,m,l,B.i4)
A.kJ(a1,new A.q(0,13,j-0.4),B.oV,B.e8,14,26,B.vP,B.pO,0)
f=D.o.E(D.k.bf(u/24),1,3)
k=u-26
A.fB4(a1,new A.q(p,0,0),B.pO,B.h1,k,f,l,B.i4)
i=-p
A.fB4(a1,new A.q(i,0,0),B.hL,B.oV,k,f,l,B.i4)
a1.x=0
k=x.z
g=C.a([],k)
e=new A.f3(g)
e.r=!0
e.b=a1.b
e.f=a1.f
if(a2==="house2"||a2==="school"){w=C.a([],k)
d=new A.f3(w)
d.r=!0
d.b=a1.b
d.f=a1.f
d.aF(B.dX,new A.q(v+6,2.5,u*0.58),r,0.1)
n=a1.a
k=t+5
D.d.v(n,A.nH(w,0.42,0,new A.q(0,k,u*0.25)))
a0=-u
D.d.v(n,A.nH(w,-0.42,0,new A.q(0,k,a0*0.25)))
k=p+0.2
w=t+12
a1.a7o(new A.q(k,t,q),new A.q(k,t,j),new A.q(k,w,0),s,B.h1,!1)
i-=0.2
a1.a7o(new A.q(i,t,j),new A.q(i,t,q),new A.q(i,w,0),s,B.oV,!1)
if(a2==="school"){w=q-10
e.aE(new A.q(0,t+18,w),B.h4M,D.agV)
e.aE(new A.q(0,t+30,w),B.h5E,r)
e.dm(new A.q(0,t+31,w),new A.q(0,t+46,w),0.6,D.dn,6)
e.aE(new A.q(5,t+44,w),B.hgw,D.aw)}else e.aE(new A.q(v*0.28,t+14,a0*0.1),B.h9J,B.aiJ)}else{k=v+2
e.aF(new A.q(0,t+1.5,0),new A.q(k,3,u+2),r,0.05)
e.aE(new A.q(0,t+4,q+0.5),new A.q(k,4,1.4),a3)
if(w){w=v*0.25
k=-u*0.15
e.aE(new A.q(w,t+5,k),B.h5W,D.bt)
e.aE(new A.q(w,t+6.2,k),B.hgN,D.c)}if(n){w=p-10
n=-u*0.2
e.aE(new A.q(w,t+16,n),B.h4u,B.ahr)
e.aE(new A.q(w,t+32,n),B.aXu,r)}}D.d.v(a1.a,g)},
i9j(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=d.f,f=d.e
d.f=1
d.e=0
if(e==="road"){d.xe(B.hcT,B.hdX,B.hbK,B.hei,B.ML,B.e8)
d.e=90
for(w=0;w<2;++w){v=B.RL[w]
u=v-0.7
t=v+0.7
d.xe(new A.q(-20,0.9,u),new A.q(20,0.9,u),new A.q(20,0.9,t),new A.q(-20,0.9,t),L.Mo,B.e8)}for(w=0;w<2;++w){v=B.doQ[w]
u=v-0.8
t=v+0.8
d.xe(new A.q(-20,0.9,u),new A.q(20,0.9,u),new A.q(20,0.9,t),new A.q(-20,0.9,t),D.bO,B.e8)}d.f=g
d.e=f
return}d.xe(B.he7,B.hl8,B.hbI,B.had,B.ML,B.e8)
d.e=90
A:{if("roadturn"===e){u=B.dnv
break A}if("roadtee"===e){u=B.d4s
break A}u=B.clg
break A}for(t=u.length,w=0;w<t;++w){s=u[w]
r=s.a
q=s.b
for(s=q!==0,p=r!==0,o=30*r,n=30*q,m=0;m<2;++m){l=B.RL[m]
k=p?o:l
j=s?n:l
i=p?36:1.4
h=s?36:1.4
d.aE(new A.q(k,0.95,j),new A.q(i,0.1,h),L.Mo)}}d.f=g
d.e=f},
hsk(d,e,f,g){var w=new A.flc(d,g)
switch(e){case"dog":d.aF(B.xk,B.hki,f,0.05)
d.ee(B.haS,3.4,f,4,8)
d.aE(B.hex,B.h9E,D.MF)
d.aE(B.hg9,B.aYl,B.hg)
d.aE(B.hln,B.aYl,B.hg)
d.dm(B.hh7,B.h1O,0.8,f,5)
w.$5(B.dme,6,6,1.7,f)
break
case"cat":d.aF(B.AD,B.h9z,f,0.05)
d.ee(B.h3c,2.7,f,4,8)
d.aE(B.hjO,B.aXx,f)
d.aE(B.hjS,B.aXx,f)
d.dm(B.h3b,B.h1F,0.7,f,5)
w.$5(B.djS,4,4,1.2,f)
break
case"cow":d.aF(B.abo,B.h4q,D.bN,0.05)
d.aE(B.hk0,B.hje,B.hg)
d.aE(B.hcu,B.h9C,B.hg)
d.aE(B.h23,B.h9P,D.bN)
d.aE(B.h1V,B.hlJ,D.nX)
d.aE(B.ha4,B.aXy,D.bO)
d.aE(B.hlg,B.aXy,D.bO)
d.dm(B.h26,B.h3e,0.7,B.hg,5)
w.$5(B.d8j,11,11,3.2,D.bO)
break
case"sheep":d.ee(B.abn,8.5,D.q6,4,8)
d.ee(B.h1M,7,D.q6,4,8)
d.ee(B.h1I,3.4,B.hg,4,8)
w.$5(B.dm8,8,8,1.8,B.hg)
break
case"chicken":d.ee(B.AD,4,f,4,8)
d.ee(B.h1s,2.2,f,3,6)
d.aE(B.h1C,B.hj8,D.bB)
d.aE(B.hb2,B.hay,D.ay)
d.aE(B.h3g,B.h7D,f)
w.$5(B.d6j,3,3,0.8,D.ay)
break
case"horse":d.aF(B.h2a,B.h3Y,f,0.1)
d.Li(B.h2k,B.h2B,4.2,f,3,8)
d.aE(B.h2D,B.h8f,f)
d.aE(B.h2M,B.hj7,B.hg)
d.dm(B.h2p,B.h3f,1.8,B.hg,6)
w.$5(B.d5C,16,16,2.6,f)
break
default:d.aE(B.AD,B.h9O,f)}},
bD4(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=C.a([],x.z)
for(w=d.length,v=e.a,u=e.b,t=e.c,s=f.a,r=f.b,q=f.c,p=x.o,o=0;o<d.length;d.length===w||(0,C.K)(d),++o){n=d[o]
m=C.a([],p)
for(l=n.a,k=l.length,j=0;j<l.length;l.length===k||(0,C.K)(l),++j){i=l[j]
m.push(new A.q(s+(i.a-s)*v,r+(i.b-r)*u,q+(i.c-q)*t))}l=n.b
h.push(new A.kr(m,new A.q(l.a/v,l.b/u,l.c/t).gmX(0),n.c,n.d,n.e,n.f,n.r,n.w,n.x,n.y,n.z))}return h},
i1_(d,e,f){var w,v,u,t,s,r=e.z
if(r.length===0)return
w=e.e
v=new A.fl2(e,Math.sin(w),Math.cos(w))
u=d.b
d.b=0
switch(r){case"feed":d.Li(v.$3(14,0,8),v.$3(14,9,8),4.5,B.nY,5.5,10)
for(r=f*0.9,t=0;t<9;++t){s=D.k.F(r+t/9,1)
d.fu(v.$3(10+s*26,26-s*22,Math.sin(t*2.1)*4),0.9,D.m0,3,5,0)}break
case"cook":d.aF(v.$2(18,9),B.h5A,D.iF,0.2)
d.aE(v.$2(18,18.4),B.h9l,D.fs)
d.d=0.3
for(r=f*0.5,t=0;t<6;++t){s=D.k.F(r+t/6,1)
d.fu(v.$2(18+Math.sin(t*1.9)*3,22+s*22),2+s*4,D.Fw,3,6,0)}d.d=1
break
case"wash":d.Li(v.$3(20,0,-10),v.$3(20,8,-10),4,D.aJ,5,10)
for(r=f*1.4,t=0;t<12;++t){s=D.k.F(r+t/12,1)
d.fu(v.$3(8+s*24,30-s*s*26,6),0.8,D.hl,3,5,0.3)}break
case"water":d.aF(v.$3(12,22,7),B.h9M,D.ej,0.2)
for(r=f*1.2,t=0;t<10;++t){s=D.k.F(r+t/10,1)
d.fu(v.$3(18+s*8,22-s*22,7),0.7,D.hl,3,5,0.3)}break
case"teach":d.aF(v.$2(22,26),B.hh6,D.dY,0.1)
d.aE(v.$2(22.8,26),B.heg,D.bN)
break
case"duty":d.aE(v.$3(0,74,0),B.hco,D.L)
break}d.b=u},
wX(d,e,f,g,h,i,j){var w,v,u,t,s,r
if(e.Q){w=C.a([],x.z)
A.wX(new A.f3(w),A.aud(!1,0,-1,"",!1,0,"",-1,e.CW*0.5,!1,!1,!1,e.a,!1,e.e,0,0,0),f,g,h,i,j)
D.d.v(d.a,A.nH(w,1.5707963267948966,e.d,new A.q(e.b,9,e.c)))
return}w=g.e
v=$.h4e.h(0,w)
if(v==null){if(B.SG.aj(0,w)&&!$.h4c.q(0,w)){A.bUH(w)
return}A.i86(d,e,f,h,i,g)
return}w=e.e
u=e.z
t=w&&!u&&e.CW>0?e.CW*12:null
s=j==null
r=s?null:g.a
s=s?null:g.d
D.d.v(d.a,v.cY1(h,i,e.y,s,u,r,f,j,t,w,e.b,e.d,e.c))},
i86(e6,e7,e8,e9,f0,f1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2=e7.e,d3=d2?D.k.V(e7.CW*24):-1,d4=f1.a,d5=f1.b,d6=f1.c,d7=f1.d,d8=f1.f,d9=f1.r,e0=f1.w,e1=e7.f,e2=e7.r,e3=e7.w,e4=C.bw(d4.l(),d5.l(),d6.l(),d7.l(),d8,d9,e0,e9,d3,e1,e2,e3,f0,D.h,D.h,D.h,D.h,D.h,D.h,D.h),e5=$.fvv.h(0,e4)
if(e5!=null){D.d.v(e6.a,A.nH(e5,0,e7.d,new A.q(e7.b,e7.y,e7.c)))
return}w=C.a([],x.z)
v=new A.f3(w)
v.b=f0
v.r=!0
u=C.ar(d4,D.w,0.16)
u.toString
t=C.ar(d4,B.bmt,0.55)
t.toString
s=d2?Math.sin(e7.CW*3.141592653589793):0
r=e9?8:6
q=e9?4:3
p=e9?8:6
o=e9?4:3
n=e9?9:6
m=x.n
l=C.a([],m)
for(k=0;k<2;++k)l.push(s*F.hd[k]*0.6)
j=C.a([],m)
for(i=l.length,k=0;k<l.length;l.length===i||(0,C.K)(l),++k){h=l[k]
j.push(d2?Math.max(0,-h)*1.5+0.1:0.04)}m=C.a([],m)
for(g=0;g<2;++g)m.push(16*Math.cos(l[g])+15.5*Math.cos(l[g]+j[g]))
f=Math.max(m[0],m[1])+3.3
e=new A.fw_(f0,v)
d=new A.fvx(v,r,e9)
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
e.$3(new A.fvy(q,p),B.heI,new A.q(a1,a2+-1.6,i))
if(e9)e.$3(new A.fvz(p),B.hbd,new A.q(a1,a2+-2.9,i))
if(e9){i=C.ar(d7,D.c,m)
i.toString
v.ee(new A.q(a1,a2+1.2,a3+0),2.1,i,3,p)}}m=d8?1.22:1.12
e.$3(new A.fvA(d7,q,p),new A.q(m,0.78,0.76),new A.q(0,f+1.2,0))
if(d8){d7=C.ar(d7,D.c,Math.abs(0.05))
d7.toString
m=e9?12:8
v.Ts(new A.q(0,f+3.4,0),new A.q(0,f-9.5,0),5.9,d7,!1,7.8,m)}a6=d8?5.8:6.5
a7=d8?4.2:4.9
d7=d8?0.66:0.62
e.$3(new A.fvL(a7,d6,a6,e9),new A.q(1,1,d7),new A.q(0,f+2.5,0))
if(!d8)e.$3(new A.fvT(),B.h52,new A.q(0,f+2.4,0))
if(d8&&e9)for(d7=f+14.3,k=0;k<2;++k)e.$3(new A.fvU(d6,q,p),B.h69,new A.q(F.hd[k]*2.7,d7,2.7))
d7=d8?1.1:1.2
e.$3(new A.fvV(d8,d6,o,n),new A.q(d7,0.5,0.62),new A.q(0,f+19.6,0))
d7=d8?1.8:2.1
v.dm(new A.q(0,f+20.5,0.2),new A.q(0,f+24.2,0.5),d7,d4,8)
if(e9){d7=C.ar(d6,D.c,Math.abs(0.12))
d7.toString
v.Ts(new A.q(0,f+20,0.1),new A.q(0,f+21.4,0.2),3.1,d7,!1,2.5,10)}d7=f+29
a8=new A.q(0,d7,0.6)
e.$3(new A.fvW(d4,e9),B.hgR,a8)
m=d8?0.95:1.05
e.$3(new A.fvX(d4,q,p),new A.q(m,0.8,0.95),a8.a7(0,B.h7A))
if(e9)for(m=d7+-0.3,k=0;k<2;++k)e.$3(new A.fvY(d4),B.hk2,new A.q(0+F.hd[k]*4.35,m,0.7))
else for(m=d7+-0.2,k=0;k<2;++k)v.ee(new A.q(0+F.hd[k]*4.2,m,0.6),1,d4,2,5)
for(m=d7+1.9,l=d7+0.4,j=d7+2.05,i=d7+0.7,a1=d7+1.25,a2=d7+0.95,k=0;k<2;++k){a0=F.hd[k]
a3=a0*1.8
a9=0+a3
if(e9){e.$3(new A.fvZ(),B.hha,new A.q(a9,l,4.75))
v.ee(new A.q(a9,l,5.1),0.55,B.aeW,2,5)}else v.aE(new A.q(a9,l,5),B.hf_,B.aeW)
a3=0+a3
if(e9){v.ee(new A.q(0+a0*1.6,i,5.55),0.18,D.c,2,4)
e.$3(new A.fvB(u),B.hcU,new A.q(a3,a1,4.8))
a9=d8?0.28:0.18
v.aE(new A.q(a3,a2,5.22),new A.q(2.3,a9,0.2),D.nm)
a9=d8?0.34:0.5
v.aE(new A.q(a3,j,4.75),new A.q(2.4,a9,0.55),d5)}else v.aE(new A.q(a3,m,4.8),B.hkW,d5)}e.$3(new A.fvC(u),B.hli,a8.a7(0,B.hb3))
if(e9){v.Lh(a8.a7(0,B.hlk),a8.a7(0,B.hjL),0.55,d4,!1,5)
for(m=d7+-1.8,k=0;k<2;++k)v.aE(new A.q(0+F.hd[k]*0.55,m,5.1),B.hc1,u)}if(e9){v.aE(a8.a7(0,B.h8z),B.he5,B.bkq)
e.$3(new A.fvD(t),B.hde,a8.a7(0,B.hfm))
e.$3(new A.fvE(t),B.h7W,a8.a7(0,B.hbi))}else v.aE(a8.a7(0,B.heo),B.hcH,B.bnL)
switch(d9){case 1:e.$3(new A.fvF(d5,e9),B.hb0,a8.a7(0,B.aYv))
e.$3(new A.fvG(d5,p),B.abx,a8.a7(0,B.aZd))
e.$3(new A.fvH(d5,q,p),B.hkx,a8.a7(0,B.hkS))
for(d9=d7+1.5,d7+=-7.2,k=0;k<2;++k){a0=F.hd[k]
v.Lh(new A.q(0+a0*4.4,d9,1),new A.q(0+a0*4.3,d7,1),1.2,d5,!1,6)}break
case 2:e.$3(new A.fvI(d5,e9),B.hh1,a8.a7(0,B.hbu))
e.$3(new A.fvJ(d5,p),B.hcD,a8.a7(0,B.hkj))
break
case 3:d5=C.ar(d6,D.c,Math.abs(0.18))
d5.toString
e.$3(new A.fvK(d5,e9),B.hft,a8.a7(0,B.ha8))
e.$3(new A.fvM(d5,p),B.abx,a8.a7(0,B.hlL))
e.$3(new A.fvN(d5,q,p),B.hkp,a8.a7(0,B.hbe))
break
case 4:e.$3(new A.fvO(d5,q,p),B.hlh,a8.a7(0,B.hkY))
e.$3(new A.fvP(d5,p),B.hev,a8.a7(0,B.hdT))
break
default:e.$3(new A.fvQ(d5,e9),B.h9y,a8.a7(0,B.aYv))
e.$3(new A.fvR(d5,p),B.abx,a8.a7(0,B.aZd))}b0=d8?6.2:7
for(d5=f+19.3,d7=-s,k=0;k<2;++k){a0=F.hd[k]
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
e.$3(new A.fvS(d4),B.hdc,new A.q(t,i,a1))
if(e9){a2=d9<0?-1:1
a3=0*a2
a9=-j*a2
a2=d9*a2
for(b4=t+0,b5=i+d9*1.5+0,b6=a1+j*1.5+0,b7=a3*0.25,b8=a9*0.25,b9=a2*0.25,c0=0+a3*0.8,c1=d9*0.6+a9*0.8,c2=j*0.6+a2*0.8,c3=0;c3<4;++c3){c4=u?1:-1
c4=b4+(-1.5+c3)*c4
c5=B.azH[c3]
c6=c4+0*c5*0.55+b7
c7=b5+d9*c5*0.55+b8
c5=b6+j*c5*0.55+b9
c8=new A.q(c6,c7,c5)
c9=new A.q(c0,c1,c2).gmX(0)
d0=B.azH[c3]
v.Ts(new A.q(c4,b5,b6),c8,0.62,d4,!1,0.58,4)
v.Ts(c8,new A.q(c6+c9.a*d0*0.45,c7+c9.b*d0*0.45,c5+c9.c*d0*0.45),0.56,d4,!1,0.48,4)}b5=-a0
b4+=b5*2
i=i+d9*0.4+0
a1=a1+j*0.4+0.5
b5=new A.q(0+b5*0.5,d9*0.7+0,j*0.7+0.5).gmX(0)
b6=b4+b5.a*1.7
b7=i+b5.b*1.7
b5=a1+b5.c*1.7
d1=new A.q(b6,b7,b5)
a2=new A.q(0+a3*0.4,d9*0.8+a9*0.4,j*0.8+a2*0.4).gmX(0)
v.Lh(new A.q(b4,i,a1),d1,0.7,d4,!1,4)
v.Lh(d1,new A.q(b6+a2.a*1.4,b7+a2.b*1.4,b5+a2.c*1.4),0.6,d4,!1,4)}if(u&&e1){d9=l+0
v.d1(new A.q(t,m+-2.6,d9),new A.q(t,m+2.6,d9),1.7,D.aJ,0.5,8)}if(u&&e2){v.aF(new A.q(t,m+-0.4,l+2.6),B.hdy,D.nm,0.3)
v.aE(new A.q(t,m+0.2,l+3.8),B.haF,D.aw)}}if(e0!==1)w=A.bD4(w,new A.q(e0,e0,e0),B.dX)
if($.fvv.a>900)$.fvv.aa(0)
$.fvv.n(0,e4,w)
D.d.v(e6.a,A.nH(w,0,e7.d,new A.q(e7.b,e7.y,e7.c)))},
iag(d,e){var w,v,u,t,s,r,q,p,o,n=C.a([],x.z)
for(w=d.length,v=x.o,u=0;u<d.length;d.length===w||(0,C.K)(d),++u){t=d[u]
s=C.a([],v)
for(r=t.a,q=r.length,p=0;p<r.length;r.length===q||(0,C.K)(r),++p){o=r[p]
s.push(new A.q(o.a*e,o.b*e,o.c*e))}n.push(new A.kr(s,t.b,t.c,t.d,t.e,t.f,t.r,t.w,t.x,t.y,t.z))}return n},
h9P(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=C.ar(f,D.w,Math.abs(-0.25))
h.toString
w=C.ar(f,D.c,Math.abs(0.2))
w.toString
A:{if("bed"===e){d.aF(B.AD,B.h8l,B.qe,0.1)
d.aF(B.h1K,B.h81,f,0.05)
d.aE(B.hhV,B.aXA,B.aic)
d.aE(B.h4t,B.aXA,B.aic)
d.aF(B.h2d,B.h8n,B.qe,0.1)
d.aE(B.h1Y,B.hh_,w)
break A}if("nightstand"===e){d.aF(B.xk,B.h4E,f,0.1)
d.aE(B.hfJ,B.h8X,h)
d.aE(B.hl6,B.h6Z,B.ahL)
d.aE(B.h2g,B.ha1,B.o9)
break A}if("wardrobe"===e){d.aF(B.h2A,B.h7g,f,0.1)
d.aE(B.hao,B.h7s,h)
d.aF(B.hdi,B.aYL,B.Fp,0.8)
d.aF(B.hlx,B.aYL,B.Fp,0.8)
break A}if("desk"===e){d.aF(B.VZ,B.h7m,f,0.1)
d.aE(B.hi3,B.aXG,h)
d.aE(B.h5w,B.aXG,h)
d.aF(B.h2S,B.h5x,B.Mg,0.5)
d.aE(B.h2x,B.h8C,D.iF)
break A}if("rug"===e){d.hn(B.hkb,B.h5_,f,2)
d.aE(B.hab,B.hjl,w)
break A}if("sofa"===e){d.aF(B.xk,B.h9m,f,0.05)
d.aF(B.h2c,B.h9n,h,0.05)
d.aF(B.hih,B.aY2,h,0.05)
d.aF(B.h6L,B.aY2,h,0.05)
d.aE(B.hhU,B.aXB,w)
d.aE(B.h4s,B.aXB,w)
break A}if("armchair"===e){d.aF(B.xk,B.h6m,f,0.05)
d.aF(B.h2b,B.h6o,h,0.05)
d.aE(B.hhQ,B.aY_,h)
d.aE(B.h4f,B.aY_,h)
break A}if("coffee"===e){d.aF(B.VY,B.h79,f,0.2)
for(v=0;v<4;++v){w=B.dou[v]
d.aE(new A.q(w.a,6.5,w.b),B.h66,h)}d.aF(B.hbM,B.h9K,D.bO,0.5)
break A}if("tvstand"===e){d.aF(B.abs,B.h7S,f,0.1)
d.aE(B.h9j,B.hbp,h)
d.aE(B.h1X,B.h5o,B.hg)
break A}if("dining"===e){d.aF(B.VZ,B.h7T,f,0.2)
for(v=0;v<4;++v){w=B.cQC[v]
d.aE(new A.q(w.a,13,w.b),B.h6W,h)}break A}if("chair"===e){d.aF(B.h1T,B.h4P,f,0.1)
d.aF(B.h2r,B.h4N,f,0.1)
for(v=0;v<4;++v){w=B.de_[v]
d.aE(new A.q(w.a,7.5,w.b),B.h5k,h)}break A}if("plant"===e){d.dm(B.dX,B.abs,5,D.d0,10)
d.ee(B.abo,8,B.Fn,5,8)
d.ee(B.h6V,5,B.Yg,4,8)
break A}if("lamp"===e){d.dm(B.dX,B.e8,4.5,B.hg,10)
d.dm(B.e8,B.aXe,0.7,B.hg,6)
d.Li(B.AC,B.abq,6,B.o9,3.5,12)
break A}if("console"===e){d.aF(B.h2j,B.aXX,f,0.15)
d.aE(B.hce,B.aXF,h)
d.aE(B.hag,B.aXF,h)
d.aE(B.xk,B.hj3,h)
break A}if("shelf"===e){d.aF(B.abp,B.h6H,f,0.1)
for(u=0;u<4;++u){h=10+u*15
d.aE(new A.q(0,h,1),B.h6v,B.hg)
w=D.o.F(u,2)
d.aE(new A.q(-8+w*6,h,2),B.h8h,[D.el,D.dF,D.ej,D.dZ][u])
d.aE(new A.q(4+w*4,h,2),B.aY9,[D.dZ,D.ej,D.el,D.dF][u])}break A}if("tree"===e){d.Li(B.dX,B.h2z,4.2,B.qe,3,8)
d.ee(B.aXe,17,B.Fn,5,9)
d.ee(B.ha0,11,B.Yg,4,8)
d.ee(B.hiW,12,B.bnn,4,8)
break A}if("pine"===e){d.dm(B.dX,B.aX5,3,B.qe,8)
for(u=0;u<3;++u){h=u*14
d.Li(new A.q(0,8+h,0),new A.q(0,26+h,0),14-u*3.5,B.afB,1.5,10)}break A}if("bush"===e){d.ee(B.xk,9,B.bjZ,4,8)
d.ee(B.h8g,6.5,B.Yg,4,8)
break A}if("flowers"===e){for(v=0;v<5;++v){h=B.dn1[v]
t=h.a
s=h.b
d.dm(new A.q(t,0,s),new A.q(t,7,s),0.4,B.afB,5)
d.ee(new A.q(t,8,s),2.2,h.c,3,6)}break A}if("fence"===e){for(v=0;v<4;++v)d.aF(new A.q(B.doM[v],9,0),B.hfA,f,0.05)
d.aE(B.AD,B.aZ6,h)
d.aE(B.abn,B.aZ6,h)
break A}if("lamppost"===e){d.dm(B.dX,B.aXf,1.3,B.hg,5)
d.dm(B.dX,B.h2E,3.5,B.hg,6)
break A}if("bench"===e){d.aF(B.aX8,B.aXX,f,0.1)
d.aF(B.h27,B.h7e,f,0.1)
d.aE(B.hhW,B.aXT,B.hg)
d.aE(B.h4S,B.aXT,B.hg)
break A}if("car"===e){d.aF(B.aX5,B.h9u,f,0.4)
d.aF(B.hiu,B.h7j,f,0.4)
d.aF(B.h51,B.hc2,B.i4,0.6)
d.aE(B.hjk,B.abu,B.o9)
d.aE(B.hcM,B.abu,B.o9)
for(v=0;v<2;++v){t=B.a5D[v]
d.dm(new A.q(t,5,-18),new A.q(t,5,-21),5.5,D.nm,12)
d.dm(new A.q(t,5,18),new A.q(t,5,21),5.5,D.nm,12)}break A}if("road"===e||"roadturn"===e||"roadtee"===e||"roadcross"===e){A.i9j(d,e)
break A}if("roundabout"===e){d.dm(B.dX,B.hbV,72,B.ML,16)
d.dm(B.hcf,B.aYO,17,D.bn,10)
d.dm(B.aYO,B.aYs,15,B.bmy,10)
d.ee(B.abs,6,E.Y0,3,6)
d.dm(B.aYs,B.abr,0.9,B.qe,5)
break A}if("house2"===e||"shop"===e||"hospital"===e||"firestation"===e||"school"===e){h=C.a([],x.z)
r=new A.f3(h)
r.b=d.b
r.r=!0
r.f=d.f
A.hsP(r,e,f)
D.d.v(d.a,A.bD4(h,B.hgq,B.dX))
break A}if("bighouse"===e){h=C.a([],x.z)
q=new A.f3(h)
q.b=d.b
q.r=!0
q.f=d.f
A.hsP(q,"house2",f)
D.d.v(d.a,A.bD4(h,B.hhn,B.dX))
break A}if("pole"===e){d.Li(B.dX,B.h1A,2.6,B.qe,2,5)
d.aE(B.h1w,B.h7l,B.bid)
for(v=0;v<3;++v){t=B.aBE[v]
d.dm(new A.q(t,116,0),new A.q(t,121,0),1.1,D.bN,4)}d.dm(B.h7z,B.h7x,5.5,D.bn,6)
d.aE(B.h47,B.h5n,D.iF)
break A}if("crate"===e){d.aF(B.abr,B.h5V,B.iB,0.05)
d.aE(B.hl4,B.h4K,B.vP)
d.fu(B.hiy,3.4,D.aw,3,5,0.3)
d.fu(B.h8a,3.4,D.ay,3,5,0.3)
break A}if("billboard"===e){d.x=$.dp=$.dp+1
for(v=0;v<2;++v){t=B.a5D[v]
d.dm(new A.q(t,0,-1),new A.q(t,40,-1),1.6,D.iF,8)}d.aF(B.h2U,B.h8V,D.cr,0.3)
d.x=0
break A}if("tower"===e||"hq"===e){d.x=$.dp=$.dp+1
p=e==="hq"
o=p?170:100
n=p?90:70
m=p?150:A.hx1(f)
l=p?D.bO:B.dug[D.o.F(f.l()>>>4,6)]
k=new A.fp7(d)
d.aF(new A.q(0,m/2,0),new A.q(o,m,n),l,0.25)
k.$4(o,n,20,m-8)
if(p){h=o*0.66
w=n*0.66
d.aF(new A.q(0,m+60,0),new A.q(h,120,w),D.bN,0.25)
k.$4(h,w,m+16,m+112)
d.aF(new A.q(0,m+124,0),new A.q(o*0.7,8,n*0.7),F.eY,0.4)}else{d.aE(new A.q(0,m+3,0),new A.q(o+4,6,n+4),D.cr)
d.aE(new A.q(o*0.2,m+12,0),new A.q(o*0.3,12,n*0.3),D.dn)}j=p?m+128:m+6
for(h=o*0.3,h=[-h,h],w=j+8,v=0;v<2;++v)d.aE(new A.q(h[v],w,0),B.h6T,D.iF)
h=p?112:84
d.aF(new A.q(0,j+34,0),new A.q(h,38,3),E.iC,0.3)
h=n/2
A.kJ(d,new A.q(0,17,h+0.6),B.h1,B.e8,34,34,D.cr,B.hL,0.5)
A.kJ(d,new A.q(0,17,h+0.7),B.e8.G3(B.hL),B.e8,1.2,34,B.i4,B.hL,0.6)
d.aF(new A.q(0,38,h+5),B.h7k,F.eY,0.3)
d.x=0
break A}if("store"===e){d.x=$.dp=$.dp+1
d.aF(B.VZ,B.aXp,f,0.2)
d.aE(B.abq,B.aXq,D.cr)
A.kJ(d,B.aZc,B.h1,B.e8,112,30,B.i4,B.hL,0.6)
d.aE(B.aXd,B.aXo,D.bB)
d.aE(B.aXg,B.aXl,D.au)
for(v=0;v<2;++v){t=B.aBI[v]
d.dm(new A.q(t,58,28),new A.q(t,96,28),2.5,D.iF,6)}d.aF(B.aX7,B.aXt,E.iC,0.3)
d.aE(B.aXa,B.W0,F.eY)
d.aE(B.aXj,B.W0,F.eY)
d.x=0
break A}if("dmv"===e){d.x=$.dp=$.dp+1
d.aF(B.VZ,B.aXp,D.aN,0.2)
d.aE(B.abq,B.aXq,D.d7)
A.kJ(d,B.aZc,B.h1,B.e8,112,30,B.i4,B.hL,0.6)
d.aE(B.aXd,B.aXo,D.bl)
d.aE(B.aXg,B.aXl,D.d7)
d.aE(B.hdu,B.hgv,D.bs)
d.aE(B.hkH,B.h8A,D.d7)
for(v=0;v<2;++v){t=B.aBI[v]
d.dm(new A.q(t,58,28),new A.q(t,96,28),2.5,D.iF,6)}d.aF(B.aX7,B.aXt,E.iC,0.3)
d.aE(B.aXa,B.W0,F.eY)
d.aE(B.aXj,B.W0,F.eY)
d.x=0
break A}if("ubstation"===e){d.x=$.dp=$.dp+1
for(v=0;v<2;++v){t=B.doS[v]
for(i=0;i<2;++i){s=E.Se[i]
d.dm(new A.q(t,0,s),new A.q(t,50,s),2.2,D.aK,6)}}d.aF(B.aXf,B.h43,D.au,0.3)
d.aE(B.h34,B.h45,D.bs)
d.aF(B.h2q,B.h3X,D.du,0.6)
d.aE(B.h1x,B.h9q,D.bt)
d.aE(B.h39,B.h90,D.aK)
d.dm(B.h7X,B.h8_,2,D.iF,6)
d.aE(B.h80,B.h6O,D.au)
d.aE(B.hbf,B.hch,D.bs)
d.aE(B.hkT,B.hj2,D.c)
d.x=0
break A}if("gasstation"===e){d.x=$.dp=$.dp+1
for(v=0;v<2;++v){t=B.aBH[v]
for(i=0;i<2;++i){s=B.cJu[i]
d.dm(new A.q(t,0,s),new A.q(t,46,s),2.4,D.bO,6)}}d.aF(B.h2W,B.h4a,D.bB,0.3)
d.aE(B.hlj,B.h4c,F.eY)
for(v=0;v<2;++v){t=E.Se[v]
d.aF(new A.q(t,9,20),B.h9c,D.iA,0.3)
d.aE(new A.q(t,15,20.2),B.h62,D.bB)}d.aF(B.h2_,B.h9o,f,0.2)
d.dm(B.hiH,B.hiI,2.2,D.iF,6)
d.aE(B.hiJ,B.h6x,D.au)
d.x=0
break A}if("townsign"===e){d.x=$.dp=$.dp+1
for(v=0;v<2;++v){t=B.doE[v]
d.dm(new A.q(t,0,0),new A.q(t,316,0),5.5,D.iF,6)}d.aF(B.h2o,B.h6B,E.iC,0.3)
d.aE(B.h2v,B.aXR,F.eY)
d.aE(B.h1W,B.aXR,F.eY)
d.x=0
break A}if("adboard"===e){d.x=$.dp=$.dp+1
for(v=0;v<2;++v){t=B.doD[v]
d.dm(new A.q(t,0,0),new A.q(t,205,0),4.5,D.iF,6)}d.aF(B.h1H,B.h6u,E.iC,0.3)
d.aE(B.h21,B.aXK,F.eY)
d.aE(B.aXh,B.aXK,F.eY)
d.x=0
break A}if("cornersign"===e){d.x=$.dp=$.dp+1
for(v=0;v<2;++v){t=B.aBH[v]
d.dm(new A.q(t,0,0),new A.q(t,125,0),3,D.iF,6)}d.aF(B.h1z,B.h4y,E.iC,0.3)
d.aE(B.h1Q,B.h4A,F.eY)
d.x=0
break A}if("firetruck"===e){d.aF(B.aX6,B.h9Y,D.bB,0.3)
d.aF(B.h6D,B.h5v,D.bB,0.3)
d.aF(B.hfh,B.h84,B.i4,0.6)
d.aE(B.hhI,B.hjN,D.dn)
for(u=0;u<6;++u)d.aE(new A.q(-34+u*11,24,0),B.he_,D.dn)
d.aE(B.h6E,B.aY7,D.d3)
d.aE(B.hfU,B.hbz,B.bow)
for(v=0;v<3;++v){t=B.doO[v]
d.dm(new A.q(t,6,-19),new A.q(t,6,-22.5),6,D.nm,12)
d.dm(new A.q(t,6,19),new A.q(t,6,22.5),6,D.nm,12)}break A}if("ambulance"===e){d.aF(B.VY,B.h9v,D.c,0.4)
d.aF(B.h6n,B.h5O,D.c,0.4)
d.aF(B.hbU,B.hgE,B.i4,0.6)
d.aE(B.hko,B.aYw,D.bB)
d.aE(B.hdG,B.aYw,D.bB)
d.aE(B.aYY,B.hd3,D.bB)
d.aE(B.aYY,B.hb8,D.bB)
d.aE(B.h6p,B.aY7,D.aw)
for(v=0;v<2;++v){t=B.a5D[v]
d.dm(new A.q(t,6,-19),new A.q(t,6,-22.5),6,D.nm,12)
d.dm(new A.q(t,6,19),new A.q(t,6,22.5),6,D.nm,12)}break A}if("dog"===e||"cat"===e||"cow"===e||"sheep"===e||"chicken"===e||"horse"===e){A.hsk(d,e,f,0)
break A}if("pond"===e){h=C.a([],x.z)
q=new A.f3(h)
q.b=d.b
q.f=d.f
q.r=!0
q.d1(B.dX,B.hhr,28,B.bpJ,0.8,22)
D.d.v(d.a,A.bD4(h,B.haz,B.dX))
for(v=0;v<3;++v){h=B.d9v[v]
d.ee(new A.q(h.a,1.2,h.b),2.6,B.ahd,3,6)}break A}if("swing"===e){d.dm(B.hi4,B.h5Q,1.6,D.d0,8)
for(v=0;v<2;++v){t=E.Sf[v]
d.dm(new A.q(t,38,0),new A.q(t,0,14),1.4,D.d0,6)
d.dm(new A.q(t,38,0),new A.q(t,0,-14),1.4,D.d0,6)}for(v=0;v<2;++v){t=E.a5E[v]
d.dm(new A.q(t,38,0),new A.q(t,15,0),0.3,B.hg,4)}d.aE(B.VY,B.hkw,f)
break A}if("shed"===e){d.aF(B.VY,B.h7H,f,0.05)
d.aE(B.abp,B.h7V,B.Yx)
d.aE(B.hhh,B.hh2,h)
break A}if("doghouse"===e){d.aF(B.abr,B.h5P,f,0.05)
d.aE(B.h6f,B.hjA,B.Yx)
d.aE(B.hfg,B.hkL,B.Mg)
break A}d.aE(B.AD,B.h3H,f)}},
huf(d,e,f,g,h,i){var w=e.a,v=e.b,u=e.c,t=h/2
d.aF(new A.q(w,v,u+t-0.5),new A.q(f,g,1),i,0.1)
d.aF(new A.q(w,v,u-t+0.5),new A.q(f,g,1),i,0.1)
t=f/2
d.aF(new A.q(w-t+0.5,v,u),new A.q(1,g,h),i,0.1)
d.aF(new A.q(w+t-0.5,v,u),new A.q(1,g,h),i,0.1)
d.aF(new A.q(w,v-g/2+0.5,u),new A.q(f,1,h),i,0.1)},
chE:function chE(){},
fTB:function fTB(d,e,f){this.a=d
this.b=e
this.c=f},
fTz:function fTz(d,e,f){this.a=d
this.b=e
this.c=f},
fTy:function fTy(d,e,f){this.a=d
this.b=e
this.c=f},
fTA:function fTA(d){this.a=d},
fCo:function fCo(d){this.a=d},
fCa:function fCa(){},
fCl:function fCl(){},
fCm:function fCm(d,e,f){this.a=d
this.b=e
this.c=f},
fCb:function fCb(){},
fCc:function fCc(){},
fCd:function fCd(){},
fCe:function fCe(d){this.a=d},
fCg:function fCg(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fCh:function fCh(d,e,f){this.a=d
this.b=e
this.c=f},
fCi:function fCi(d,e,f){this.a=d
this.b=e
this.c=f},
fCj:function fCj(d,e,f){this.a=d
this.b=e
this.c=f},
fCk:function fCk(d,e,f){this.a=d
this.b=e
this.c=f},
fCn:function fCn(d){this.a=d},
fCf:function fCf(d){this.a=d},
fv8:function fv8(d){this.a=d},
fv9:function fv9(d){this.a=d},
fv4:function fv4(d){this.a=d},
fv5:function fv5(d,e){this.a=d
this.b=e},
fv6:function fv6(d){this.a=d},
fus:function fus(){},
fut:function fut(){},
fuu:function fuu(d){this.a=d},
fuF:function fuF(d){this.a=d},
fuQ:function fuQ(){},
fv7:function fv7(d,e){this.a=d
this.b=e},
fuZ:function fuZ(d){this.a=d},
fv_:function fv_(d){this.a=d},
fv0:function fv0(d){this.a=d},
fv1:function fv1(d){this.a=d},
fv2:function fv2(d){this.a=d},
fv3:function fv3(d){this.a=d},
fuv:function fuv(d){this.a=d},
fuw:function fuw(d){this.a=d},
fux:function fux(d){this.a=d},
fuy:function fuy(d){this.a=d},
fuz:function fuz(d){this.a=d},
fuA:function fuA(d){this.a=d},
fuB:function fuB(){},
fuC:function fuC(){},
fuD:function fuD(){},
fuE:function fuE(){},
fuG:function fuG(d){this.a=d},
fuH:function fuH(d){this.a=d},
fuI:function fuI(d){this.a=d},
fuJ:function fuJ(d){this.a=d},
fuK:function fuK(){},
fuL:function fuL(){},
fuM:function fuM(){},
fuN:function fuN(){},
fuO:function fuO(){},
fuP:function fuP(){},
fuR:function fuR(){},
fuS:function fuS(){},
fuT:function fuT(){},
fuU:function fuU(d,e){this.a=d
this.b=e},
fuV:function fuV(d){this.a=d},
fuW:function fuW(d){this.a=d},
fuX:function fuX(){},
fuY:function fuY(){},
fFw:function fFw(d){this.a=d},
fFt:function fFt(){},
fFu:function fFu(d){this.a=d},
fFv:function fFv(d){this.a=d},
flc:function flc(d,e){this.a=d
this.b=e},
fl2:function fl2(d,e,f){this.a=d
this.b=e
this.c=f},
fw_:function fw_(d,e){this.a=d
this.b=e},
fvx:function fvx(d,e,f){this.a=d
this.b=e
this.c=f},
fvy:function fvy(d,e){this.a=d
this.b=e},
fvz:function fvz(d){this.a=d},
fvA:function fvA(d,e,f){this.a=d
this.b=e
this.c=f},
fvL:function fvL(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fvT:function fvT(){},
fvU:function fvU(d,e,f){this.a=d
this.b=e
this.c=f},
fvV:function fvV(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fvW:function fvW(d,e){this.a=d
this.b=e},
fvX:function fvX(d,e,f){this.a=d
this.b=e
this.c=f},
fvY:function fvY(d){this.a=d},
fvZ:function fvZ(){},
fvB:function fvB(d){this.a=d},
fvC:function fvC(d){this.a=d},
fvD:function fvD(d){this.a=d},
fvE:function fvE(d){this.a=d},
fvF:function fvF(d,e){this.a=d
this.b=e},
fvG:function fvG(d,e){this.a=d
this.b=e},
fvH:function fvH(d,e,f){this.a=d
this.b=e
this.c=f},
fvI:function fvI(d,e){this.a=d
this.b=e},
fvJ:function fvJ(d,e){this.a=d
this.b=e},
fvK:function fvK(d,e){this.a=d
this.b=e},
fvM:function fvM(d,e){this.a=d
this.b=e},
fvN:function fvN(d,e,f){this.a=d
this.b=e
this.c=f},
fvO:function fvO(d,e,f){this.a=d
this.b=e
this.c=f},
fvP:function fvP(d,e){this.a=d
this.b=e},
fvQ:function fvQ(d,e){this.a=d
this.b=e},
fvR:function fvR(d,e){this.a=d
this.b=e},
fvS:function fvS(d){this.a=d},
fp7:function fp7(d){this.a=d},
hiR(){var w=x.S
return new A.bW3(C.eD([72],w),C.aV(w),C.aV(w),C.aV(w))},
ief(d){var w
A:{if(81===d){w="outlet"
break A}if(82===d){w="switch"
break A}if(84===d){w="gfci"
break A}if(86===d||87===d){w="ptrap"
break A}if(85===d){w="faucet"
break A}w=null
break A}return w},
ah0(a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=C.a([],x.z),a0=new A.f3(d)
a0.b=70
a0.hn(B.hgs,B.hjx,B.bmn,4)
a0.c=1
a0.b=91
w=new A.fCt(a0)
w.$3(B.hb7,B.haj,15)
w.$4$alongX(B.hj1,B.heT,11,!1)
w.$4$alongX(B.h83,B.hat,11,!1)
w.$4$alongX(B.hhX,B.hbw,6,!1)
w.$4$alongX(B.h9b,B.heU,6,!1)
for(v=0;v<=12;++v)a0.aEn(new A.q(-12+v*2,8.4,0),B.hfH,B.YR,!1,0.05)
a0.c=2
a0.b=92
u=new A.fCq(a0)
u.$2(B.csK,B.rp)
u.$2(B.dlA,B.nf)
u.$2(B.dqM,B.nf)
t=new A.fCp(a0)
t.$1(B.d2_)
t.$1(B.d87)
a0.c=3
a0.b=93
s=new A.fCs(a0)
s.$1(B.d0S)
s.$2$col(B.d_e,B.m_)
s.$2$col(B.cZi,B.m_)
s.$1(B.diq)
a0.c=4
a0.b=0
a0.d=0.22
a0.hn(B.has,B.he2,B.Bh,4)
a0.hn(B.hdY,B.aYD,B.Bh,4)
a0.hn(B.hbc,B.aYD,B.Bh,4)
a0.hn(B.hcs,B.aYK,B.Bh,3)
a0.hn(B.hl2,B.aYK,B.Bh,3)
a0.d=1
a0.c=5
a0.e=0.3
a0.b=0
a0.kX(B.hhE,B.hap,B.bjJ,0.1,4)
a0.b=71
a0.aF(B.hgA,B.hfI,B.Y6,0.5)
a0.aE(B.hkv,B.hc6,B.xX)
r=[72,73,74,75,76]
for(q=a1.d,p=a1.e,v=0;v<5;++v){o=D.o.F(v,2)
n=D.o.ao(v,2)
m=r[v]
l=q.q(0,m)
k=p.q(0,m)
a0.b=m
m=9.55+o*0.5
j=5.7-n*0.5
a0.aF(new A.q(m,j,-7.5),B.h9Z,B.u8,0.3)
if(l)i=0
else i=k?-0.07:0.07
if(l)h=D.cd
else h=k?D.bn:D.bO
a0.aF(new A.q(m+0,j+i,-7.42),B.hbH,h,0.4)}a0.b=90
a0.aF(B.heV,B.h8b,B.bu7,0.1)
a0.aF(B.hj6,B.haP,B.Zo,0.1)
a0.aF(B.hlG,B.aZ5,B.Zo,0.1)
a0.aF(B.haI,B.aZ5,B.Zo,0.1)
g=new A.fCr(a0)
g.$3(81,B.h9k,a1.x?B.u_:B.Z7)
a0.b=81
a0.aE(B.heW,B.aZ_,B.FK)
a0.aE(B.hd7,B.aZ_,B.FK)
g.$5$h$w(82,B.hkB,H.Zh,0.65,0.4)
a0.b=82
a0.aF(B.hhc,B.h88,B.agz,0.4)
f=!q.q(0,72)
a0.b=83
a0.d1(B.hgV,B.aYm,0.5,B.brG,0.4,14)
a0.bcL(B.hjX,0.3,f?Al.G4:B.bm3,0.7)
if(f){a0.b=0
a0.d=0.22
a0.fu(B.aY6,1.5,B.Yo,4,10,0)
a0.d=1}a0.b=94
a0.aF(B.hjK,B.aZa,B.iB,0.1)
a0.aF(B.hfd,B.aZa,B.iB,0.1)
a0.aF(B.hky,B.hbl,B.iB,0.1)
A.b7E(a0,1.35,B.Mq,2.5,2.1,B.hP,B.MC,6,0.55,!1,1,0.18,3.19,0.06,3,-7.15)
a0.b=85
a0.iV(A.Dt(B.dbT,0.2,6),0.055,B.hP,!1,0.9,8)
a0.b=84
a0.aF(B.hk9,B.hhw,B.Z7,0.3)
a0.aE(B.hcC,B.hku,a1.y?B.ahc:B.ajE)
a0.b=86
a0.iV(A.Dt(B.d2u,0.35,3),0.11,B.q3,!1,0.3,8)
a0.b=87
a0.d1(B.hdB,B.hgG,0.19,a1.c?B.Yc:B.bpm,0.3,8)
a0.b=88
a0.aF(B.h7i,B.ha6,B.Bn,0.7)
a0.yX(B.hgr,B.aZ0,0.72,B.Bn,0.55,0.7,16)
a0.d1(B.aZ0,B.hew,0.78,B.brb,0.7,16)
a0.b=89
a0.d1(B.hjc,B.aYa,0.85,B.bes,0.6,18)
a0.d1(B.aYa,B.he0,0.5,B.beu,0.5,12)
a0.aE(B.hfo,B.hlr,B.bpg)
a0.b=95
for(p=a1.f,m=a1.r,v=0;v<3;++v){e=B.cJ7[v]
if(m.q(0,v)){j=e.a
i=e.b
a0.aE(new A.q(j,i,-7.82),B.hgX,B.Bh)
a0.aE(new A.q(j,i,-7.79),B.he6,B.bi4)}else if(p.q(0,v)){j=e.a
i=e.b
a0.aE(new A.q(j,i,-7.82),B.h5b,B.aiy)
a0.aE(new A.q(j,i,-7.8),B.hfb,B.bup)}}if(a1.w){a0.b=96
a0.d1(B.hec,B.hdq,0.1,D.d0,0.7,8)}a0.e=0
a0.c=6
a0.b=0
a0.d=0.4
a0.bjJ(B.aY0,B.aYZ,B.abC,B.abA,B.afS,B.heQ,!0)
a0.bjJ(B.aYP,B.aZ3,B.abA,B.abC,B.afS,B.hh5,!0)
a0.bkT(B.aY0,B.aZ3,B.abA,B.ag6)
a0.bkT(B.aYZ,B.aYP,B.abC,B.ag6)
a0.d=1
p=q.q(0,72)?"This breaker has TRIPPED (it is in the middle, orange). The living room has no power. Tap it to flip it off and on again.":"This breaker is ON. The living room has power."
q=q.q(0,72)?"The light is off because the living room breaker has tripped.":"The ceiling light is on."
m=a1.b
j=m&&!a1.c?"Water is dripping from the slip nut here. Pick the wrench, then tap the nut to tighten it.":"The P-trap holds a water seal that blocks sewer gas. Tap Open lesson to build one."
m=m&&!a1.c?"This slip nut is loose and the trap is dripping. Pick the wrench and tap here to tighten it.":"The slip nut is tight."
return new A.qW(d,C.H([70,B.eg3,91,B.efq,92,B.efM,93,B.efU,71,B.eg8,72,new A.cL("Living room breaker",p,B.hlc,3.5),73,B.efC,74,B.efW,75,B.efg,76,B.efP,81,B.efR,82,B.ef6,83,new A.cL("Ceiling light",q,B.aYm,7),84,B.efX,85,B.efi,86,new A.cL("P-trap under the sink",j,B.hgp,4.5),87,new A.cL("Slip nut (leaking?)",m,B.aYp,3.5),88,B.ef3,89,B.efV,90,B.efZ,94,B.efB,95,B.eg0,96,B.ef9],x.S,x.q),B.uV,B.qH,null,!1,0)},
hye(d,e){var w,v,u,t,s,r,q,p=C.a([],x.z),o=new A.f3(p)
o.c=5
o.e=0.8
if(d.w)for(w=e*1.5,v=0;v<6;++v){u=D.k.F(w+v/6,1)
o.fu(new A.q(3.4+Math.sin(v*2)*0.12,3.3-u*u*2.8,-7.7),0.05,D.ag3,3,6,0.9)}if(d.as){u=D.k.F(e*1.1,1)
o.fu(new A.q(3,3.9-u*u*0.7,-6.95),0.05,B.agr,3,6,0.9)}if(d.Q)for(w=e*1.6,v=0;v<6;++v){u=D.k.F(w+v/6,1)
o.fu(new A.q(8.2+Math.sin(v*1.7)*0.15,2.2-u*1.5,-7.2),0.05,B.agr,3,6,0.9)}if(d.at){o.d=0.55
o.aF(B.haD,B.hcx,B.brt,0.8)
o.d=1}if(d.x)for(w=e*2,t=e*6,v=0;v<8;++v){u=D.k.F(w+v*0.13,1)
s=v*2.4+t
r=Math.cos(s)
s=Math.sin(s)
q=C.ar(F.N_,E.Zz,1-u)
q.toString
o.fu(new A.q(-3.2+r*u*0.7,1.3+s*u*0.7,-7.6+u*0.3),0.05,q,3,5,0)}if(d.z&&!d.d.q(0,72)){o.b=0
o.d=D.k.E((Math.sin(e*17)+Math.sin(e*29)+2)/4*0.5,0,0.6)
o.fu(B.aY6,1.5,B.Yo,4,10,0)
o.d=1}if(d.b&&!d.c){for(w=e*1.3,v=0;v<5;++v){u=D.k.F(w+v*0.2,1)
o.fu(new A.q(3.05,1.45-u*u*1.4,-6.95),0.05,B.Zr,3,6,0.9)}o.d=0.5
o.aF(B.hai,new A.q(0.7+0.3*Math.sin(e),0.02,0.5),B.Zr,0.9)
o.d=1}return p},
bW3:function bW3(d,e,f,g){var _=this
_.a=5
_.b=!0
_.c=!1
_.d=d
_.e=e
_.f=f
_.r=g
_.at=_.as=_.Q=_.z=_.y=_.x=_.w=!1},
fCt:function fCt(d){this.a=d},
fCq:function fCq(d){this.a=d},
fCp:function fCp(d){this.a=d},
fCs:function fCs(d){this.a=d},
fCr:function fCr(d){this.a=d},
fJ(d,e,f,g){var w
try{Ak.dG(d,"",e,0,f,g)}catch(w){}},
rd(){A.fJ(880,80,0.25,"tri")
C.bP(A0.akA,new A.fDs(),x.H)},
hQq(){return new A.NV(null)},
K3(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w){return new A.b8f(t,d,u,s,f,r,q,j,g,h,m,n,i,k,v,w,l,o,p,e,null)},
uo(d,e,f,g,h){var w=null,v=g?e.j(0.25):D.w.j(0.5),u=C.n(18),t=C.L(g?e:D.aX,D.r,1),s=x.p,r=C.a([],s)
D.d.v(r,C.a([C.X(f,g?e:D.ac,w,w,w,16),D.ec],s))
r.push(C.d(d,w,w,w,w,w,w,C.l(w,w,g?e:D.ac,w,w,w,w,w,w,w,w,12,w,w,D.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w))
return C.aA(w,C.p(w,C.B(r,D.m,w,D.e,D.P,0,w,w),D.f,w,w,new C.o(v,w,t,u,w,w,D.n),w,w,w,w,D.h8,w,w,w),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,h,w,w,w,w,w,w,!1,D.a3)},
qw(d,e,f,g){var w=null,v=f==null,u=v?D.dr:g.j(0.9),t=C.n(14),s=C.X(e,v?D.bU:D.w,w,w,w,18)
return C.E(C.aA(w,C.p(w,C.B(C.a([s,D.bm,new C.ds(1,D.cn,C.d(d,w,w,w,w,w,w,C.l(w,w,v?D.bU:D.w,w,w,w,w,w,w,w,w,12.5,w,w,D.u,w,w,!0,w,w,w,w,w,w,w,w),D.K,w,w),w)],x.p),D.m,w,D.b9,D.i,0,w,w),D.f,w,w,new C.o(u,w,w,t,w,w,D.n),w,w,w,w,D.rF,w,w,w),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,!1,D.a3),1)},
aRT(d,e,f,g){return C.bV(E.mE,null,new A.fUL(e,g,f),d,!0,!0,!0,D.k7,!1,!1,x.H)},
Iv(d,e,f,g,h,i,j){return new A.aYm(i,d,g,f,e,h,j,null)},
fDs:function fDs(){},
m3:function m3(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
NV:function NV(d){this.a=d},
blk:function blk(){var _=this
_.e=!1
_.f=""
_.c=_.a=null},
dUS:function dUS(d){this.a=d},
dUV:function dUV(d){this.a=d},
dUW:function dUW(d){this.a=d},
dUX:function dUX(d){this.a=d},
dV_:function dV_(d){this.a=d},
dV0:function dV0(d){this.a=d},
dV1:function dV1(d){this.a=d},
dV2:function dV2(d){this.a=d},
dV3:function dV3(d){this.a=d},
dV4:function dV4(d){this.a=d},
dV5:function dV5(d){this.a=d},
dV6:function dV6(d){this.a=d},
dUY:function dUY(d){this.a=d},
dUU:function dUU(d){this.a=d},
dUZ:function dUZ(d){this.a=d},
dUT:function dUT(d,e){this.a=d
this.b=e},
dUL:function dUL(d,e){this.a=d
this.b=e},
dUM:function dUM(d){this.a=d},
dUN:function dUN(d){this.a=d},
dUO:function dUO(d){this.a=d},
dUP:function dUP(d){this.a=d},
dUQ:function dUQ(){},
dUR:function dUR(d){this.a=d},
awR:function awR(d,e){this.c=d
this.a=e},
bui:function bui(){this.c=this.a=this.d=null},
f96:function f96(d){this.a=d},
f95:function f95(){},
b8f:function b8f(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0){var _=this
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
cyX:function cyX(){},
cyY:function cyY(){},
fUL:function fUL(d,e,f){this.a=d
this.b=e
this.c=f},
fUK:function fUK(){},
aYm:function aYm(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
bY9:function bY9(d){this.a=d},
adk:function adk(){},
dls:function dls(d,e){this.a=d
this.b=e},
dlt:function dlt(d){this.a=d},
dlr:function dlr(d){this.a=d},
E8:function E8(d,e,f){this.c=d
this.d=e
this.a=f},
aAW:function aAW(d,e,f,g,h){var _=this
_.r=_.f=_.e=_.d=$
_.w=""
_.x=0
_.y=null
_.z=!1
_.Q=0
_.as=null
_.at=d
_.ax=0
_.LR$=e
_.a5o$=f
_.amK$=g
_.amL$=h
_.c=_.a=null},
dcS:function dcS(d,e){this.a=d
this.b=e},
dcQ:function dcQ(d,e,f){this.a=d
this.b=e
this.c=f},
dcR:function dcR(d){this.a=d},
dcP:function dcP(d){this.a=d},
dcA:function dcA(d){this.a=d},
dcB:function dcB(d){this.a=d},
dcC:function dcC(d){this.a=d},
dcD:function dcD(){},
dcz:function dcz(d){this.a=d},
dcE:function dcE(d){this.a=d},
dcF:function dcF(d){this.a=d},
dcG:function dcG(d){this.a=d},
dcH:function dcH(d){this.a=d},
dcI:function dcI(d){this.a=d},
dcJ:function dcJ(d,e,f){this.a=d
this.b=e
this.c=f},
dcK:function dcK(d){this.a=d},
dcL:function dcL(d,e){this.a=d
this.b=e},
dcM:function dcM(d,e){this.a=d
this.b=e},
dcN:function dcN(d,e){this.a=d
this.b=e},
dcO:function dcO(d){this.a=d},
dcT:function dcT(d,e){this.a=d
this.b=e},
dcU:function dcU(d){this.a=d},
dd2:function dd2(){},
ddb:function ddb(d,e,f){this.a=d
this.b=e
this.c=f},
ddi:function ddi(d){this.a=d},
dd_:function dd_(){},
dd3:function dd3(d){this.a=d},
dd4:function dd4(d){this.a=d},
ddc:function ddc(d){this.a=d},
ddd:function ddd(d){this.a=d},
dd1:function dd1(d){this.a=d},
dde:function dde(d){this.a=d},
dd0:function dd0(d){this.a=d},
ddf:function ddf(d){this.a=d},
ddg:function ddg(d){this.a=d},
ddh:function ddh(d){this.a=d},
ddj:function ddj(d){this.a=d},
dd5:function dd5(d,e){this.a=d
this.b=e},
dcZ:function dcZ(d,e,f){this.a=d
this.b=e
this.c=f},
dd6:function dd6(d,e){this.a=d
this.b=e},
dd7:function dd7(d){this.a=d},
dcY:function dcY(d){this.a=d},
dd8:function dd8(d){this.a=d},
dcX:function dcX(d){this.a=d},
dd9:function dd9(d){this.a=d},
dcW:function dcW(d){this.a=d},
dda:function dda(d){this.a=d},
dcV:function dcV(d){this.a=d},
a9X:function a9X(d,e){this.c=d
this.a=e},
aGS:function aGS(d,e,f,g){var _=this
_.f=_.e=_.d=$
_.r=""
_.w=0
_.x=null
_.y=!1
_.z=null
_.LR$=d
_.a5o$=e
_.amK$=f
_.amL$=g
_.c=_.a=null},
eZj:function eZj(d,e,f){this.a=d
this.b=e
this.c=f},
eZk:function eZk(d){this.a=d},
eZi:function eZi(d){this.a=d},
eZb:function eZb(d){this.a=d},
eZc:function eZc(d,e){this.a=d
this.b=e},
eZd:function eZd(d,e){this.a=d
this.b=e},
eZe:function eZe(d){this.a=d},
eZf:function eZf(d,e){this.a=d
this.b=e},
eZg:function eZg(d){this.a=d},
eZh:function eZh(d,e){this.a=d
this.b=e},
eZo:function eZo(){},
eZs:function eZs(d,e){this.a=d
this.b=e},
eZp:function eZp(d){this.a=d},
eZq:function eZq(d,e){this.a=d
this.b=e},
eZn:function eZn(d,e,f){this.a=d
this.b=e
this.c=f},
eZr:function eZr(d){this.a=d},
eZm:function eZm(d){this.a=d},
eZl:function eZl(){},
a5o:function a5o(d,e){this.c=d
this.a=e},
aBf:function aBf(d,e,f,g){var _=this
_.f=_.e=_.d=$
_.r=""
_.w=0
_.x=null
_.y=!1
_.z=null
_.LR$=d
_.a5o$=e
_.amK$=f
_.amL$=g
_.c=_.a=null},
dfU:function dfU(d,e,f){this.a=d
this.b=e
this.c=f},
dfV:function dfV(d){this.a=d},
dfT:function dfT(d){this.a=d},
dfM:function dfM(d){this.a=d},
dfP:function dfP(d){this.a=d},
dfQ:function dfQ(d,e){this.a=d
this.b=e},
dfR:function dfR(d,e){this.a=d
this.b=e},
dfO:function dfO(d){this.a=d},
dfS:function dfS(d,e){this.a=d
this.b=e},
dfW:function dfW(d,e,f){this.a=d
this.b=e
this.c=f},
dfN:function dfN(d){this.a=d},
dg_:function dg_(){},
dg5:function dg5(d,e){this.a=d
this.b=e},
dg0:function dg0(d){this.a=d},
dg1:function dg1(d){this.a=d},
dfZ:function dfZ(d){this.a=d},
dg3:function dg3(d,e){this.a=d
this.b=e},
dfY:function dfY(d,e,f){this.a=d
this.b=e
this.c=f},
dg2:function dg2(d){this.a=d},
dg4:function dg4(d){this.a=d},
dfX:function dfX(d){this.a=d},
aC7:function aC7(d){this.a=d},
aC8:function aC8(d){var _=this
_.d=d
_.f=_.e=$
_.r=0
_.w=""
_.x=null
_.y=!1
_.c=_.a=_.z=null},
dn1:function dn1(d,e,f){this.a=d
this.b=e
this.c=f},
dn2:function dn2(d){this.a=d},
dn0:function dn0(d){this.a=d},
dmW:function dmW(d){this.a=d},
dmY:function dmY(d,e){this.a=d
this.b=e},
dmZ:function dmZ(d,e){this.a=d
this.b=e},
dn_:function dn_(d,e){this.a=d
this.b=e},
dmX:function dmX(d){this.a=d},
dna:function dna(d,e){this.a=d
this.b=e},
dn5:function dn5(d,e){this.a=d
this.b=e},
dn7:function dn7(d){this.a=d},
dn6:function dn6(d){this.a=d},
dn8:function dn8(d){this.a=d},
dn4:function dn4(d){this.a=d},
dn9:function dn9(d){this.a=d},
dn3:function dn3(d,e){this.a=d
this.b=e},
ag2:function ag2(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bxZ:function bxZ(){var _=this
_.d=null
_.e=!1
_.c=_.a=null},
fkL:function fkL(d){this.a=d},
fkJ:function fkJ(d){this.a=d},
fkK:function fkK(d){this.a=d},
fkI:function fkI(d){this.a=d},
fkN:function fkN(d){this.a=d},
fkO:function fkO(d){this.a=d},
fkM:function fkM(d){this.a=d},
byA:function byA(){},
byF:function byF(){},
bzV:function bzV(){},
jT:function jT(d,e){this.a=d
this.b=e},
Nh:function Nh(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a7q:function a7q(d){this.a=d},
ccA:function ccA(d){this.a=d},
h7b(){var w=x.N
return new A.cpy(C.aV(w),C.H(["n1",!1,"n2",!1],w,x.y),C.U(x.S,w))},
ip8(d,e,f){var w,v
if(!f.c.q(0,e)){w=f.d
return e==="hot"?"The red (hot) hose goes on the LEFT side only. "+w:"The blue (cold) hose goes on the RIGHT side only. "+w}w=d.e
v=f.a
if(w.h(0,v)!=null)return"That connection already has a hose."
w.n(0,v,e)
return null},
hee(){var w,v,u=C.a([B.aXV,B.hdk],x.o)
for(w=1;w<=12;++w){v=3.141592653589793+3.141592653589793*w/12
u.push(new A.q(3+3*Math.cos(v),0.2+3*Math.sin(v),0))}D.d.v(u,A.Dt(B.ddf,1,6))
return u},
aQi(d){var w,v,u,t,s="trap",r=C.a([],x.z),q=new A.f3(r)
q.b=49
q.kX(B.h54,B.h76,B.iB,0.1,2)
q.kX(B.hkZ,B.h58,B.iB,0.1,2)
q.b=47
q.hn(B.heP,B.h77,B.vV,3)
q.hn(B.h6e,B.h59,B.vV,3)
q.b=46
A.b7E(q,9,B.Mq,14,15,B.hP,B.MC,40,5.9,!0,2,1.8,15.1,0.6,0,-1.2)
q.d1(B.hgh,B.hcX,1.5,B.hP,0.85,14)
q.b=48
q.a4J(B.abE,B.hb4,0.92,B.q3,!1,!0,0.3,14)
q.d_2(B.abE,B.hk4,1,0.72,B.q3,0.3)
w=new A.fD4(d,q)
w.$5(41,B.azM,B.hP,0.85,"tail")
w.$5(42,A.hee(),B.q3,0.3,s)
w.$5(43,B.aCi,B.q3,0.3,"arm")
w=new A.fD3(d,q)
v=d.a
w.$6(44,"n1",B.abz,B.e8,B.hbt,v.q(0,"tail")&&v.q(0,s))
w.$6(45,"n2",B.abB,B.h1,B.hhu,v.q(0,s)&&v.q(0,"arm"))
if(v.q(0,s)){q.b=0
q.d=0.55
q.e=0.4
u=A.hee()
w=C.T(u).k("Y<1>")
t=C.C(new C.Y(u,new A.fD2(),w),w.k("M.E"))
if(t.length>1)q.Vf(t,0.4092,B.ZE,!1,!0,0.6,8)
q.d=1
q.e=0}return new A.qW(r,C.H([41,B.efk,42,B.efm,43,B.efT,44,B.efH,45,B.eg5,46,B.efs,47,B.efz,48,B.ef1,49,B.efo],x.S,x.q),B.uV,B.qH,null,!1,0)},
h9e(d,e){var w=D.k.E(e,0,1)*(d.length-1),v=D.o.E(D.k.bf(w),0,d.length-2)
return A.oN(d[v],d[v+1],w-v)},
h9M(d,e,f,g,h,i){var w,v,u,t,s
d.b=0
d.e=0.3
d.d=0.55
d.Vf(e,h,g,!1,!0,0.9,8)
d.d=0.95
for(w=f*i,v=x.o,u=h*0.5,t=0;t<5;++t){s=D.k.F(w+t/5,1)
d.Vf(C.a([A.h9e(e,s),A.h9e(e,Math.min(1,s+0.09))],v),u,B.N0,!1,!1,1,6)}d.d=1
d.e=0},
hwE(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k
d.b=0
d.e=0.4
for(w=f*1.3,v=e.a,u=v+0,t=e.b,s=t+0.05,r=e.c,q=r+0,p=t+0.12,o=0;o<3;++o){n=D.k.F(w+o/3,1)
m=0.5+n*3
d.d=0.7*(1-n)
d.nw(new A.q(u,s,q),new A.q(u,p,q),m,Math.max(0.1,m-0.3),B.N0,0.6,16)}d.d=0.9
for(w=f*1.8,l=0;l<6;++l){n=D.k.F(w+l/6,1)
k=l*1.05
d.fu(new A.q(v+Math.cos(k)*n*1.4,t+4*n*(1-n),r+Math.sin(k)*n*1.4),0.16,B.N0,3,6,1)}d.d=1
d.e=0},
hc6(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=C.a([],x.z),k=new A.f3(l)
k.e=0.9
w=0.5+0.5*Math.sin(e*7)
for(v=d.length,u=0.25+0.25*w,t=1.5+0.7*w,s=0.9*w,r=2.3+s,s=1.9+s,q=0;q<d.length;d.length===v||(0,C.K)(d),++q){p=d[q]
k.d=u
k.fu(p,t,G.N8,5,10,0)
k.d=0.8
o=p.a+0
n=p.b+0
m=p.c
k.nw(new A.q(o,n,m+0.6),new A.q(o,n,m+0.9),r,s,G.N8,0.2,20)}k.d=1
k.e=0
return l},
in3(d,e){var w,v,u,t,s,r,q,p,o=C.a([],x.z),n=new A.f3(o),m=d.d
if(m.length!==0){w=m==="n1"?B.hlu:B.hjr
for(m=e*1.4,v=w.a+0,u=w.b,t=w.c+0,s=0;s<5;++s){r=D.k.F(m+s*0.2,1)
n.d=0.85
n.fu(new A.q(v,u+(-r*6*r-r*1.5),t),0.24*(1-r*0.3),B.Zr,3,6,0.9)}n.d=1}if(d.c){A.h9M(n,C.a([B.aYQ,B.aYQ.a7(0,B.h3p),new A.q(0,11,-2.3)],x.o),e,B.bhW,0.42,1.4)
n.b=0
n.d=0.5
n.e=0.2
n.aF(B.hl1,new A.q(12.6,1.0999999999999996,7.6),B.ahZ,0.7)
n.d=1
n.e=0
A.hwE(n,new A.q(0,11.05,-2.3),e)
n.b=0
n.e=0.4
for(m=e*0.9,q=0;q<2;++q){p=2.2*(1-D.k.F(m+q/2,1))
n.d=0.7
n.nw(new A.q(0,11.06,0),new A.q(0,11.12,0),p+0.25,p,B.N0,0.5,14)}n.d=1
n.e=0}return o},
RH(d){switch(d){case 61:return B.h53
case 62:return B.hjm
case 63:return B.hdR
default:return B.hdH}},
hyc(d){var w=d==="hot",v=A.RH(w?61:62),u=A.RH(w?63:64),t=w?-1:1
return A.aiq(C.a([v,v.a7(0,new A.q(t*0.6,2.2,1.2)),A.oN(v,u,0.5).a7(0,new A.q(t*1.4,0,2.6)),u.a7(0,new A.q(-t*0.2,-2,1)),u],x.o),6)},
ah_(a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=C.a([],x.z),a3=new A.f3(a2)
a3.b=67
a3.hn(B.h50,B.h6F,B.vV,3)
a3.b=66
A.b7E(a3,7,B.Zs,14,18,B.hP,B.MC,36,7,!1,2,1.6,15.3,0.6,0,1.5)
a3.kX(B.h86,B.aXv,B.iB,0.1,2)
a3.kX(B.h7_,B.aXv,B.iB,0.1,2)
a3.kX(B.hcr,B.h6C,B.iB,0.1,3)
a3.kX(B.hhe,B.hgM,B.iB,0.1,2)
a3.kX(B.hgi,B.hgx,B.iB,0.1,2)
a3.b=65
a3.e=0.5
a3.aF(B.hjp,B.hcz,B.hP,0.9)
a3.iV(A.Dt(B.dj_,1.4,6),0.5,B.hP,!0,0.9,12)
for(w=0;w<2;++w){v=B.de1[w]
u=v*1.2
a3.d1(new A.q(u,15.5,-3.6),new A.q(u,17.7,-3.6),0.38,B.hP,0.9,10)
t=v<0?B.rp:B.nf
a3.d1(new A.q(u,17.7,-3.6),new A.q(u,18.6,-3.6),0.6,t,0.6,12)}a3.e=0
for(u=[B.eE8,B.ezg],w=0;w<2;++w){t=u[w]
v=t.b
a3.b=t.a
a3.d1(new A.q(v,15.3,-3.6),new A.q(v,11.4,-3.6),0.45,B.hP,0.9,10)
a3.d1(new A.q(v,11.4,-3.6),new A.q(v,10.7,-3.6),0.3,B.boW,0.6,8)
a3.nw(new A.q(v,11.3,-3.6),new A.q(v,11.9,-3.6),0.78,0.48,B.br9,0.7,8)}for(u=[B.eXO,B.f_4],w=0;w<2;++w){t=u[w]
s=t.a
v=t.b
r=t.c
a3.b=s
a3.d1(new A.q(v,-1.5,-6),new A.q(v,-1.5,-3.6),0.4,B.M6,0.7,12)
a3.d1(new A.q(v,-1.5,-4.4),new A.q(v,0.7,-4.4),1,B.hP,0.9,14)
a3.d1(new A.q(v,0.7,-4.4),new A.q(v,1.5,-3.6),0.45,B.hP,0.9,10)
a3.d1(new A.q(v,-0.2,-4.4),new A.q(v,-0.2,-3.1),0.2,B.afs,0.7,8)
q=(s===61?a4.f:a4.r)?B.e8:B.h1
a3.d1(new A.q(v,-0.2,-3.1),new A.q(v,-0.2,-2.2),1,r,0.5,12)
t=q.a*1.9
p=q.b*1.9
o=q.c*1.9
n=v-t
m=-0.2-p
l=-2.6-o
t=v+t
p=-0.2+p
o=-2.6+o
a3.d1(new A.q(n,m,l),new A.q(t,p,o),0.5,r,0.5,8)
a3.fu(new A.q(n,m,l),0.75,r,4,8,0.5)
a3.fu(new A.q(t,p,o),0.75,r,4,8,0.5)
a3.nw(new A.q(v,1.2,-3.6),new A.q(v,1.9,-3.6),0.78,0.4,B.vS,0.8,8)}for(u=x.o,w=0;w<2;++w){k=B.dlF[w]
t=k==="hot"
j=t?B.cK4:B.cKh
p=C.T(j).k("Y<1>")
i=C.C(new C.Y(j,new A.fC9(a4,k),p),p.k("M.E"))
a3.b=t?68:69
h=t?B.rp:B.nf
t=i.length
if(t===2){g=A.hyc(k)
a3.iV(g,0.34,B.BA,!1,0.7,8)
f=g.length/2|0
a3.iV(C.a([g[f-1],g[f],g[f+1]],u),0.4,h,!1,0.4,8)
for(t=j.length,e=0;e<t;++e){d=A.RH(j[e])
p=d.a+0
o=d.b
n=d.c+0
a3.nw(new A.q(p,o+-0.2,n),new A.q(p,o+0.6,n),0.62,0.3,B.vS,0.8,8)}}else if(t===1){d=A.RH(D.d.gI(i))
a0=D.d.gI(i)===D.d.gI(j)?1:-1
t=d.a+0
p=d.b
o=d.c
a3.iV(C.a([d,new A.q(t,p+a0*1.4,o+1),new A.q(t,p+a0*3,o+2.4)],u),0.34,B.BA,!1,0.7,8)
o+=0
a3.nw(new A.q(t,p+-0.2,o),new A.q(t,p+0.6,o),0.62,0.3,B.vS,0.8,8)}}if(a4.w){a3.b=0
a3.d=0.5
for(u=a4.e,w=0;w<4;++w){a1=B.Sh[w]
t=a1.a
if(u.h(0,t)!=null)continue
t=A.RH(t)
p=a1.c.q(0,"hot")?B.rp:B.nf
a3.fu(new A.q(t.a+0,t.b+0,t.c+0.9),0.65,p,4,8,0.1)}a3.d=1}return new A.qW(a2,C.H([61,B.efb,62,B.efd,63,B.ef5,64,B.efe,65,B.efA,66,B.efv,67,B.ef2,68,B.eg9,69,B.efD],x.S,x.q),B.uV,B.qH,null,!1,0)},
idN(d,e){var w,v,u,t,s,r,q,p,o,n=C.a([],x.z),m=new A.f3(n),l=new A.fER(m,e)
if(d.f){w=d.e
v=w.h(0,61)==="hot"&&w.h(0,63)==="hot"}else v=!1
if(d.r){w=d.e
u=w.h(0,62)==="cold"&&w.h(0,64)==="cold"}else u=!1
if(d.f&&!v)l.$3(61,B.ZG,-1)
if(d.r&&!u)l.$3(62,B.YP,1)
for(w=[new C.b5(v,"hot",B.ZG),new C.b5(u,"cold",B.YP)],t=e*0.6,s=0;s<2;++s){r=w[s]
q=r.c
if(!r.a)continue
p=A.hyc(r.b)
m.b=0
m.e=0.3
m.d=0.9
for(o=0;o<4;++o){r=A.h9e(p,D.k.F(t+o/4,1))
m.fu(new A.q(r.a+0,r.b+0,r.c+0.32),0.2,q,3,6,0.9)}m.d=1
m.e=0}if(v||u){if(v&&u)q=B.beB
else q=v?B.ZG:B.YP
A.h9M(m,C.a([B.aby,B.aby.a7(0,B.hjG),new A.q(0,10.6,1.6)],x.o),e,q,0.42,1.4)
m.b=0
m.d=0.5
m.e=0.2
m.aF(new A.q(0,10.05,3.7),new A.q(12.8,1.0999999999999996,5.8),B.ahZ,0.7)
m.d=1
m.e=0
A.hwE(m,new A.q(0,10.65,1.6),e)}return n},
bDC(d){return D.d.cJ(B.Sh,new A.fEQ(d))},
cpy:function cpy(d,e,f){var _=this
_.a=d
_.b=e
_.c=!1
_.d=""
_.e=f
_.w=_.r=_.f=!1},
Fp:function Fp(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fD4:function fD4(d,e){this.a=d
this.b=e},
fD3:function fD3(d,e){this.a=d
this.b=e},
fD2:function fD2(){},
fC9:function fC9(d,e){this.a=d
this.b=e},
fER:function fER(d,e){this.a=d
this.b=e},
fEQ:function fEQ(d){this.a=d},
h7a(d,e,f){var w=x.N
w=new A.cpo(e,d,C.aV(w),C.U(w,x.S),C.aV(w))
w.bAO(d,e,f)
return w},
hxm(c0,c1,c2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5=C.a([],x.z),b6=new A.f3(b5),b7=C.U(x.S,x.q),b8=C.a([],x.E),b9=c0.c
b9===$&&C.c()
w=b9.a==="bathroom"
v=w?28:0
b6.b=9199
b6.hn(B.hit,B.hkR,B.bhC,4)
b6.hn(B.hfO,B.hjj,B.Yl,4)
b6.hn(new A.q(v+19.8+0.6,24,16),B.hcW,B.vV,2)
b7.n(0,9199,B.efn)
b6.b=9198
b6.aF(new A.q(v,0.6,10),B.hjH,B.iB,0.1)
b6.aF(new A.q(v,29.4,18.6),B.hcw,B.iB,0.1)
b6.aF(new A.q(v-19.4,13.6,10.5),B.hkz,B.iB,0.1)
for(u=[B.f2n,B.f2j,B.f1f,B.f1c],t=0;t<4;++t){s=u[t].a
b6.aF(new A.q(v+s[0],33,s[1]),new A.q(s[2],2.4,s[3]),B.buz,0.6)}b6.a4J(new A.q(v,27,8),new A.q(v,34.3,8),10.5,B.Zs,!1,!0,0.7,24)
b6.d1(new A.q(v,27,8),new A.q(v,27.2,8),10.5,B.bkH,0.5,24)
if(w){b6.aF(new A.q(v,46,0.6),B.hcG,D.bO,0.3)
b6.aF(new A.q(v,46,1.1),B.hbx,B.i4,0.9)}b6.dm(new A.q(v,27.1,8),new A.q(v,27.3,8),1.4,B.hg,12)
b6.a4J(new A.q(v+15,23.6,8),new A.q(v+19.4,23.6,8),0.92,B.q3,!1,!0,0.3,12)
b7.n(0,9198,B.efQ)
b6.b=9400
b6.d1(new A.q(-56,18,0),new A.q(-56,18,6),1.5,B.vS,0.8,12)
u=c0.r?B.nf:D.bn
b6.d1(new A.q(-57,18,6),new A.q(-55,18,6.5),4,u,0.5,14)
b6.d1(new A.q(-56,16,0),new A.q(-56,20,0),1,B.M6,0.7,10)
u=c0.r?"The water is ON. Turn it OFF with your hand before you cut into any pipe, and turn it ON to test your work.":"The water is OFF. Turn it ON to test your work."
b7.n(0,9400,new A.cL("Main water valve",u,new A.q(-56,18,4),22))
u=c0.r
s=u?"MAIN WATER: ON":"MAIN WATER: OFF"
u=u?D.dF:D.bn
b8.push(new A.hi(new A.q(-56,24,6),s,u,0))
r=new A.fD1(b6)
u=v-8
r.$1(u)
s=v+8
r.$1(s)
if(w)r.$1(-40)
q=new A.q(v,21,8)
p=new A.fD_(q)
o=new A.fCU(b6,c0)
n=new A.fCV(b6,c0)
m=new A.fD0(c0,b7,c2,c1,b8)
l=b9.c
for(k=l.length,j=c0.x,i=c0.e,h=c0.f,g=x.o,t=0;t<k;++t){f=l[t]
e=f.a
d=i.q(0,e)
if(d){a0=c0.vt(0,e)
a1=h.h(0,e)
if(a1==null)a1=0
a2=a0.r-a1>0}else a2=!1
a3=D.d.cp(l,f)
a4=9100+a3
j.q(0,e)
switch(e){case"flange":a5=new A.q(-30,0.3,14)
if(d){b6.b=a4
b6.d1(a5,new A.q(-30,0.8999999999999999,14),5.5,B.q3,0.4,18)
b6.nw(new A.q(-30,0.8,14),new A.q(-30,1.2,14),5.5,3.2,B.vS,0.8,18)}else n.$3(e,new A.q(-30,0.8,14),B.h3Z)
m.$3(f,a5,"Flange spot")
break
case"wax":a5=new A.q(-30,1.2,14)
if(d){b6.b=a4
b6.nw(a5,new A.q(-30,2.3,14),4.2,2.4,B.buC,0.2,18)}else n.$3(e,new A.q(-30,1.7,14),B.hg3)
m.$3(f,a5,"Wax ring spot")
break
case"toilet":if(d){b6.b=a4
b6.yX(new A.q(-30,0.5,14),new A.q(-30,16,14),8.5,B.Bn,6,0.8,20)
b6.d1(new A.q(-30,16,14),new A.q(-30,17,14),9.5,B.MX,0.8,20)
b6.aF(new A.q(-30,22,4.5),B.aXz,B.Bn,0.8)
b6.aF(new A.q(-30,29.2,4.5),B.hax,B.MX,0.8)}else{b6.b=a4
b6.d=0.32
b6.dm(new A.q(-30,0.5,14),new A.q(-30,17,14),8.5,D.b_,16)
b6.aE(new A.q(-30,22,4.5),B.aXz,D.b_)
b6.d=1}m.$3(f,new A.q(-30,12,12),"Toilet spot")
break
case"bolts":if(d){for(e=9200+a3*2,a6=0;a6<2;++a6){a7=B.aBN[a6]
b6.b=e+(a7<0?0:1)
a0=-30+a7
b6.d1(new A.q(a0,0.5,17),new A.q(a0,3.6,17),0.45,B.Mq,0.8,8)
a1=a2?D.cG:B.Mq
b6.d1(new A.q(a0,3.4,17),new A.q(a0,4.6,17),1.2,a1,0.8,6)}e=a2?"The nuts are loose. Tighten them with the wrench, a little at a time so the porcelain does not crack.":"The toilet is bolted down."
b7.n(0,a4,new A.cL(f.c,e,new A.q(-30,3,17),20))}else for(a6=0;a6<2;++a6){a7=B.aBN[a6]
b6.b=a4
b6.d=0.4
e=-30+a7
b6.dm(new A.q(e,0.5,17),new A.q(e,4.6,17),1.2,D.b_,8)
b6.d=1}m.$3(f,new A.q(-30,3,17),"Bolts")
break
case"tvalve":A.hbx(b6,a4,new A.q(-40,8,1.6),d,B.nf,new A.fCQ(n,f,-30))
m.$3(f,new A.q(-40,8,2),"Valve")
break
case"those":if(d){b6.b=a4
b6.iV(A.aiq(C.a([new A.q(-40,10,1.6),new A.q(-42,14,3.5),new A.q(-36,17,3.6),new A.q(-32,21,2.5)],g),6),0.55,B.BA,!1,0.7,8)
b6.iV(C.a([new A.q(-36.8,15.5,3.6),new A.q(-35,16.4,3.6)],g),0.62,B.nf,!1,0.4,8)
if(a2)b6.dm(new A.q(-40,10,1.6),new A.q(-40,11.2,1.6),0.9,D.cG,8)}else o.$3$r(e,A.aiq(C.a([new A.q(-40,10,1.6),new A.q(-42,14,3.5),new A.q(-36,17,3.6),new A.q(-32,21,2.5)],g),6),0.9)
m.$3(f,new A.q(-36,15,3),"Toilet hose")
break
case"faucet":if(d){b6.b=a4
b6.d1(new A.q(v,34.2,8),new A.q(v,34.6,8),3.6,B.hP,0.9,20)
b6.iV(A.Dt(C.a([new A.q(v,34.6,8),new A.q(v,40,8),new A.q(v,43,10),new A.q(v,43,14),new A.q(v,41.2,14.6)],g),1.4,6),0.5,B.hP,!0,0.9,10)
for(a6=0;a6<2;++a6){a7=E.a5E[a6]
e=v+a7
b6.d1(new A.q(e,34.6,8),new A.q(e,36.6,8),0.5,B.hP,0.9,8)
a0=a7<0?B.rp:B.nf
b6.d1(new A.q(e,36.6,8),new A.q(e,37.6,8),0.8,a0,0.6,10)}for(a6=0;a6<2;++a6){e=v+B.doP[a6]
b6.d1(new A.q(e,34,8),new A.q(e,28.4,8),0.45,B.hP,0.9,8)}}else n.$3(e,new A.q(v,38,9),B.h3P)
m.$3(f,new A.q(v,38,8),"Faucet spot")
break
case"vhot":A.hbx(b6,a4,new A.q(u,8,1.6),d,B.rp,new A.fCR(n,f,v))
m.$3(f,new A.q(u,8,2),"Hot valve")
break
case"vcold":A.hbx(b6,a4,new A.q(s,8,1.6),d,B.nf,new A.fCS(n,f,v))
m.$3(f,new A.q(s,8,2),"Cold valve")
break
case"hhot":case"hcold":a8=e==="hhot"
a9=a8?-1:1
a0=v+a9*3
b0=A.aiq(C.a([new A.q(v+a9*8,10.5,1.8),new A.q(v+a9*9,16,3.5),new A.q(v+a9*6,22,4.2),new A.q(a0,27.5,6),new A.q(a0,28.6,8)],g),6)
if(d){b6.b=a4
b6.iV(b0,0.5,B.BA,!1,0.7,8)
b1=b0.length/2|0
e=C.a([b0[b1-1],b0[b1],b0[b1+1]],g)
b6.iV(e,0.58,a8?B.rp:B.nf,!1,0.4,8)
if(a2){e=D.d.gI(b0)
a0=D.d.gI(b0)
b6.dm(e,new A.q(a0.a+0,a0.b+1.4,a0.c+0),0.9,D.cG,8)
a0=D.d.gak(b0)
b6.dm(new A.q(a0.a,a0.b-1.4,a0.c),D.d.gak(b0),0.9,D.cG,8)}}else o.$3$r(e,b0,0.9)
e=b0[b0.length/2|0]
m.$3(f,e,a8?"Hot hose":"Cold hose")
break
case"tail":case"trap":case"arm":a0=e==="tail"
if(a0)a1=B.azM
else a1=e==="trap"?A.hee():B.aCi
b2=p.$1(a1)
if(d){b6.b=a4
a1=a0?B.hP:B.q3
b6.apy(b2,0.66,a1,!1,!0,!0,a0?0.85:0.3,12)}else o.$3$r(e,b2,0.78)
a1=J.a7(b2)
a1=a1.h(b2,a1.gK(b2)/2|0)
if(a0)e="Tailpiece"
else e=e==="trap"?"P-trap":"Trap arm"
m.$3(f,a1,e)
break}}b3=new A.fCY(l,c0,b6,b7)
b3.$4("trap",q.a7(0,B.abz),B.e8,0)
b3.$4("arm",q.a7(0,B.abB),B.h1,1)
for(u=C.eg(j,j.r,C.a6(j).c),s=u.$ti.c;u.C();){k=u.d
if(k==null)k=s.a(k)
b4=D.d.fG(b9.c,new A.fCT(k))
k=A.hBF(c0,k)
b8.push(new A.hi(new A.q(k.a+0,k.b+6,k.c+4),"\ud83d\udca7 LEAK: "+b4.c,D.bB,0))}return new A.qW(b5,b7,b8,B.qH,null,!1,0)},
hbx(d,e,f,g,h,i){if(!g){i.$0()
return}d.b=e
d.d1(f.a7(0,B.hg5),f.a7(0,B.aYN),0.9,B.vS,0.8,12)
d.d1(f.a7(0,B.aYN),f.a7(0,B.hcm),0.45,B.vS,0.8,10)
d.d1(f.a7(0,B.hjC),f.a7(0,B.aZb),0.3,B.afs,0.7,8)
d.d1(f.a7(0,B.aZb),f.a7(0,B.hka),1.2,h,0.5,12)},
hBF(d,e){var w,v=d.c
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
imW(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=C.a([],x.z),f=new A.f3(g),e=d.x
if(e.a===0)return g
for(e=C.eg(e,e.r,C.a6(e).c),w=a0*2,v=e.$ti.c,u=d.e;e.C();){t=e.d
if(t==null)t=v.a(t)
s=A.hBF(d,t)
r=d.c
r===$&&C.c()
q=D.d.fG(r.c,new A.fTV(t)).b==="valve"||!u.q(0,t)
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
f.fu(new A.q(t+m*l*n,r+(l*k-l*l*j),p+(1.5+l*i)),h,B.ZE,3,6,0.5);++o}f.d=0.55
f.d1(new A.q(t,0.3,11),new A.q(t,0.5,11),7+2*Math.sin(w),B.ZE,0.6,18)
f.d=1}return g},
nz:function nz(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
Xw:function Xw(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cpo:function cpo(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.d=_.c=$
_.e=f
_.f=g
_.r=!0
_.w=0
_.x=h
_.y=!1},
cps:function cps(d){this.a=d},
cpt:function cpt(d){this.a=d},
cpp:function cpp(d){this.a=d},
cpu:function cpu(d){this.a=d},
cpv:function cpv(d){this.a=d},
cpw:function cpw(){},
cpx:function cpx(){},
cpq:function cpq(d){this.a=d},
cpr:function cpr(d){this.a=d},
fD1:function fD1(d){this.a=d},
fD_:function fD_(d){this.a=d},
fCU:function fCU(d,e){this.a=d
this.b=e},
fCX:function fCX(d){this.a=d},
fCV:function fCV(d,e){this.a=d
this.b=e},
fCW:function fCW(d){this.a=d},
fD0:function fD0(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fCQ:function fCQ(d,e,f){this.a=d
this.b=e
this.c=f},
fCR:function fCR(d,e,f){this.a=d
this.b=e
this.c=f},
fCS:function fCS(d,e,f){this.a=d
this.b=e
this.c=f},
fCY:function fCY(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fCZ:function fCZ(d){this.a=d},
fCT:function fCT(d){this.a=d},
fTV:function fTV(d){this.a=d},
Wu:function Wu(d,e,f){this.c=d
this.e=e
this.a=f},
aFz:function aFz(d,e){var _=this
_.e=_.d=$
_.f=d
_.r=$
_.w=e
_.x=""
_.y=0
_.z=null
_.as=_.Q=!1
_.c=_.a=_.at=null},
et2:function et2(d,e,f){this.a=d
this.b=e
this.c=f},
et3:function et3(d){this.a=d},
et1:function et1(d){this.a=d},
esY:function esY(d){this.a=d},
et7:function et7(d){this.a=d},
esN:function esN(d,e){this.a=d
this.b=e},
esO:function esO(d,e){this.a=d
this.b=e},
esP:function esP(d){this.a=d},
esU:function esU(d,e){this.a=d
this.b=e},
esS:function esS(d){this.a=d},
esT:function esT(d,e){this.a=d
this.b=e},
et0:function et0(d){this.a=d},
et8:function et8(d){this.a=d},
esV:function esV(d){this.a=d},
esW:function esW(){},
esX:function esX(d){this.a=d},
et4:function et4(d,e){this.a=d
this.b=e},
et5:function et5(d){this.a=d},
et6:function et6(d,e){this.a=d
this.b=e},
esR:function esR(d,e,f){this.a=d
this.b=e
this.c=f},
esQ:function esQ(d,e,f){this.a=d
this.b=e
this.c=f},
et9:function et9(d){this.a=d},
etd:function etd(d,e){this.a=d
this.b=e},
etb:function etb(){},
eta:function eta(d){this.a=d},
etc:function etc(d,e){this.a=d
this.b=e},
et_:function et_(d){this.a=d},
esZ:function esZ(d,e){this.a=d
this.b=e},
j6(d){return D.d.fG(B.uR,new A.h1f(d))},
aQf(d){var w
A:{if("tv"===d){w="The TV"
break A}if("lamp"===d){w="The lamp"
break A}if("toaster"===d){w="The toaster"
break A}if("washerM"===d){w="The washing machine"
break A}if("dryerM"===d){w="The dryer"
break A}if("rangeM"===d){w="The range"
break A}w="The hair dryer"
break A}return w},
cuk(d,e,f,g,h){var w=x.S,v=x.N
v=new A.Y_(g,f,C.U(w,v),C.aV(w),C.aV(w),C.U(w,x.cH),C.a([new A.Yb(),new A.Yb()],x.gD),C.U(w,x.cD),C.aV(w),C.U(w,v),C.aV(w),C.a([],x.s),C.U(w,v))
v.cmX(d,e,h)
return v},
h7C(d,e){var w=!0
if(d!==e)if(!(D.d.q(B.lk,d)&&D.d.q(B.lk,e)))if(!(D.d.q(B.jI,d)&&D.d.q(B.jI,e)))if(d==="light"||d==="fan")w=e==="light"||e==="fan"
else w=!1
return w},
zc:function zc(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
h1f:function h1f(d){this.a=d},
la:function la(d,e,f){this.a=d
this.b=e
this.c=f},
Yb:function Yb(){var _=this
_.a=!1
_.b=0
_.c=!0
_.d=!1},
awp:function awp(d,e){var _=this
_.a=!1
_.b=d
_.c=e
_.e=_.d=!1},
aVi:function aVi(d,e){this.a=d
this.b=e
this.c=!1},
ey:function ey(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Y_:function Y_(d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
cuo:function cuo(){},
cuv:function cuv(d){this.a=d},
cuw:function cuw(d){this.a=d},
cux:function cux(d,e){this.a=d
this.b=e},
cuy:function cuy(d,e){this.a=d
this.b=e},
cuA:function cuA(d){this.a=d},
cuz:function cuz(d,e){this.a=d
this.b=e},
cun:function cun(d){this.a=d},
cul:function cul(){},
cum:function cum(d){this.a=d},
cut:function cut(){},
cuu:function cuu(){},
cup:function cup(){},
cuq:function cuq(d){this.a=d},
cur:function cur(d){this.a=d},
cuB:function cuB(d){this.a=d},
cus:function cus(d){this.a=d},
cjw(d,e,f,g){return new A.Ox(d,!1,f,g,null)},
hN:function hN(d,e,f){this.a=d
this.b=e
this.c=f},
Ox:function Ox(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.a=h},
aFG:function aFG(d,e,f){var _=this
_.e=_.d=$
_.f=d
_.r=$
_.w=e
_.x=f
_.y=0
_.z=""
_.as=_.Q=-1
_.at=0
_.ax=""
_.ay=null
_.cy=_.cx=_.CW=_.ch=!1
_.c=_.a=_.db=null},
exD:function exD(d,e,f){this.a=d
this.b=e
this.c=f},
exE:function exE(d){this.a=d},
exC:function exC(d){this.a=d},
ewJ:function ewJ(d){this.a=d},
ewK:function ewK(d){this.a=d},
ewI:function ewI(d){this.a=d},
ewL:function ewL(d){this.a=d},
ewM:function ewM(d){this.a=d},
ewH:function ewH(d){this.a=d},
ewN:function ewN(d){this.a=d},
ewO:function ewO(d){this.a=d},
ewY:function ewY(d){this.a=d},
ex_:function ex_(d){this.a=d},
ewP:function ewP(){},
ewQ:function ewQ(d){this.a=d},
ewR:function ewR(d){this.a=d},
exg:function exg(d,e){this.a=d
this.b=e},
ewZ:function ewZ(d){this.a=d},
exz:function exz(d){this.a=d},
exA:function exA(d){this.a=d},
exB:function exB(d,e){this.a=d
this.b=e},
exw:function exw(d){this.a=d},
exx:function exx(d,e){this.a=d
this.b=e},
exy:function exy(d,e){this.a=d
this.b=e},
exv:function exv(d){this.a=d},
exn:function exn(d){this.a=d},
exo:function exo(d){this.a=d},
exp:function exp(d){this.a=d},
exq:function exq(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
exr:function exr(d){this.a=d},
exs:function exs(d,e,f){this.a=d
this.b=e
this.c=f},
ext:function ext(d){this.a=d},
exu:function exu(d,e,f){this.a=d
this.b=e
this.c=f},
exH:function exH(d,e){this.a=d
this.b=e},
ewX:function ewX(d){this.a=d},
ewV:function ewV(d){this.a=d},
ewW:function ewW(d,e){this.a=d
this.b=e},
ewU:function ewU(d,e){this.a=d
this.b=e},
ewS:function ewS(d){this.a=d},
ewT:function ewT(d,e){this.a=d
this.b=e},
ex0:function ex0(d,e){this.a=d
this.b=e},
exI:function exI(d){this.a=d},
exK:function exK(d){this.a=d},
exL:function exL(d){this.a=d},
exM:function exM(d){this.a=d},
exN:function exN(d){this.a=d},
exO:function exO(d){this.a=d},
exP:function exP(d,e){this.a=d
this.b=e},
exQ:function exQ(d){this.a=d},
exR:function exR(d,e){this.a=d
this.b=e},
exJ:function exJ(d,e){this.a=d
this.b=e},
exF:function exF(d){this.a=d},
exG:function exG(d,e){this.a=d
this.b=e},
exe:function exe(){},
exf:function exf(){},
ex1:function ex1(d){this.a=d},
ex2:function ex2(d){this.a=d},
ex3:function ex3(d){this.a=d},
ex6:function ex6(){},
ex7:function ex7(){},
ex8:function ex8(){},
ex9:function ex9(){},
exa:function exa(){},
exb:function exb(d){this.a=d},
exc:function exc(){},
exd:function exd(d){this.a=d},
ex4:function ex4(d){this.a=d},
ex5:function ex5(){},
eyg:function eyg(d,e){this.a=d
this.b=e},
eyh:function eyh(d){this.a=d},
ey_:function ey_(d){this.a=d},
eyf:function eyf(d){this.a=d},
ey2:function ey2(d){this.a=d},
ey3:function ey3(d,e){this.a=d
this.b=e},
ey1:function ey1(d,e){this.a=d
this.b=e},
ey4:function ey4(d,e){this.a=d
this.b=e},
ey0:function ey0(d,e){this.a=d
this.b=e},
eyi:function eyi(d,e){this.a=d
this.b=e},
exZ:function exZ(d,e){this.a=d
this.b=e},
eyj:function eyj(d){this.a=d},
exY:function exY(d){this.a=d},
eyk:function eyk(d){this.a=d},
exX:function exX(d){this.a=d},
eyl:function eyl(d){this.a=d},
exW:function exW(d){this.a=d},
eym:function eym(d,e){this.a=d
this.b=e},
exT:function exT(d,e){this.a=d
this.b=e},
exU:function exU(d){this.a=d},
exV:function exV(d,e){this.a=d
this.b=e},
eyn:function eyn(d){this.a=d},
ey5:function ey5(d){this.a=d},
ey6:function ey6(d,e,f){this.a=d
this.b=e
this.c=f},
exS:function exS(d,e,f){this.a=d
this.b=e
this.c=f},
ey7:function ey7(d){this.a=d},
ey8:function ey8(d,e){this.a=d
this.b=e},
ey9:function ey9(d){this.a=d},
eya:function eya(d){this.a=d},
eyb:function eyb(d){this.a=d},
eyc:function eyc(d){this.a=d},
eyd:function eyd(d){this.a=d},
eye:function eye(d,e){this.a=d
this.b=e},
exm:function exm(d,e){this.a=d
this.b=e},
exl:function exl(d,e){this.a=d
this.b=e},
exh:function exh(d){this.a=d},
exi:function exi(d,e,f){this.a=d
this.b=e
this.c=f},
exj:function exj(d,e){this.a=d
this.b=e},
exk:function exk(d,e){this.a=d
this.b=e},
aip(d,e){var w=d.d,v=e.a,u=e.c,t=e.b,s=w.a,r=w.b
w=w.c
return d.c?new A.q(s+v,r-u,w+t):new A.q(s+v,r+t,w+u)},
haN(d,e,f,g){var w,v,u,t,s,r=d.a,q=e.d,p=e.c?A.nH(r,1.5707963267948966,0,q):A.nH(r,0,0,q)
r=C.a([],x.z)
for(q=p.length,w=0;w<p.length;p.length===q||(0,C.K)(p),++w){v=p[w]
u=v.d
u=u===0?0:f.$1(u)
t=v.f
s=t<0.99?3:2
r.push(new A.kr(v.a,v.b,v.c,u,v.e,t,v.r,v.w,v.x,s,g))}q=C.U(x.S,x.q)
for(u=d.b,u=u.gdR(u),u=u.gaf(u);u.C();){t=u.gS(u)
s=f.$1(t.a)
t=t.b
q.n(0,s,new A.cL(t.a,t.b,A.aip(e,t.c),t.d))}return new C.z(r,q)},
i7q(a3,a4,a5,a6,a7,a8,a9,b0,b1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=x.i,a2=C.eD([a4,a5],a1)
for(w=b1.length,v=0;v<b1.length;b1.length===w||(0,C.K)(b1),++v){u=b1[v].a
a2.M(0,D.k.E(u[0],a4,a5))
a2.M(0,D.k.E(u[1],a4,a5))}t=C.C(a2,a2.$ti.k("cs.E"))
D.d.fh(t)
for(w=C.T(b1).k("Y<1>"),u=w.k("M.E"),s=0;r=s+1,r<t.length;s=r){q=t[s]
p=t[r]
o=p-q
if(o<0.01)continue
n=(q+p)/2
m=C.C(new C.Y(b1,new A.fvc(n),w),u)
l=C.eD([a6,a7],a1)
for(k=m.length,v=0;v<m.length;m.length===k||(0,C.K)(m),++v){j=m[v].a
l.M(0,D.k.E(j[2],a6,a7))
l.M(0,D.k.E(j[3],a6,a7))}i=C.C(l,l.$ti.k("cs.E"))
D.d.fh(i)
for(k=!(o>30),h=0;g=h+1,g<i.length;h=g){f=i[h]
e=i[g]
j=e-f
if(j<0.01)continue
d=(f+e)/2
if(D.d.b_(m,new A.fvd(d)))continue
a0=!k||j>60?2:1
a3.hn(new A.q(n,d,a8),new A.q(o,j,a9),b0,a0)}}},
x3(d3,d4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3=null,c4=x.z,c5=C.a([],c4),c6=new A.f3(c5),c7=C.a([],x.a),c8=x.E,c9=C.a([],c8),d0=x.S,d1=C.U(d0,x.q),d2=$.dp=$.dp+1
c6.f=-1
c6.b=8001
c6.kX(B.h9D,B.hdn,B.BI,0.15,4)
c6.f=0
c6.hn(B.h97,B.aYb,B.afo,3)
c6.aF(B.hiN,B.hkl,B.i4,0.5)
c6.aE(B.aYi,B.h8J,B.Bs)
c6.aE(B.aYi,B.hkD,B.Bs)
c6.hn(B.hds,B.aYb,B.afo,3)
c6.aF(B.h8W,B.hdt,B.vP,0.15)
c6.aF(B.hee,B.hdC,B.Fp,0.8)
c6.b=0
c6.f=3
c6.d=d3.gtb()?0.42:0.1
c6.hn(B.h6S,B.hfW,d3.gtb()?B.kI:B.bdt,3)
c6.d=1
c6.f=2
c6.b=8001
if(!d3.gtb())for(w=0;w<10;++w)c6.aEn(new A.q(-72+w*16,51.3,55),B.hgB,B.iB,!1,0.05)
else{c6.x=d2
c6.aF(B.heM,B.hbJ,D.c,0.2)
c6.aF(B.hlI,B.aYx,D.c,0.2)
c6.aF(B.haC,B.aYx,D.c,0.2)}if(d3.gtb()){c6.x=d2
c6.aF(B.haN,B.hbQ,B.kI,0.2)}c6.x=0
c6.b=8001
c6.r=!0
c6.hn(B.hk6,B.hl_,B.ahg,2)
c6.aF(B.hiY,B.h8r,B.YT,0.1)
c6.aF(B.hiX,B.h8s,B.Mj,0.1)
c6.aF(B.hir,B.aY1,B.Mj,0.1)
c6.aF(B.h5Z,B.aY1,B.Mj,0.1)
c6.r=!1
d1.n(0,8001,B.ef4)
c6.x=d2
c6.b=8002
c6.kX(B.hlo,B.aY5,B.iB,0.05,3)
c6.kX(B.h7q,B.aY5,B.iB,0.05,3)
d1.n(0,8002,B.efx)
for(v=d3.y,w=0;u=$.Ho(),w<u.length;++w){t=1000+w
c6.b=t
c6.cJX(new A.q(u[w],0,-2.25),B.hgg,B.iB,!1,0.05,2)
s=v.q(0,w)?"This one has a hole for the cable.":"Tap it with the drill to put a hole through it."
d1.n(0,t,new A.cL("Wall stud","A 2x4 stud, one of the vertical posts in the wall. They stand 16 inches apart. "+s,new A.q(u[w],20,-2),60))
if(v.q(0,w)){c6.b=0
c6.e=0.6
c6.aE(new A.q(u[w],40,-2.25),B.h94,B.aiy)
c6.e=0}}c6.b=8000
c6.aF(B.h6b,B.h4g,B.Y6,0.5)
c6.e=0.4
c6.aE(B.hd9,B.hjE,B.xX)
for(r=0;r<6;++r)for(v=19.5-r*3.6,q=0;q<2;++q)c6.aF(new A.q(61.6+q*4.8,v,0.5),B.h1b,B.u8,0.3)
p=d3.ax&&!d3.ay
v=p?0.6:0
if(d3.ay)u=D.cd
else u=p?D.bB:D.hm
c6.aF(new A.q(64,-2.5+v,0.9),B.hbE,u,0.4)
c6.e=0
if(d3.ay)v="The main breaker has TRIPPED (orange). Tap it to flip it fully OFF, fix the problem, then turn it ON."
else v=d3.ax?"The power is ON. Tap to turn it OFF. Always turn it OFF before you touch any wire.":"The power is OFF. Tap to turn it ON."
d1.n(0,8000,new A.cL("Breaker panel",v,B.h8w,60))
c6.b=8003
for(v=d3.z,u=C.eg(v,v.r,C.a6(v).c),t=x.o,s=u.$ti.c;u.C();){o=u.d
n=A.j6(o==null?s.a(o):o)
o=n.d
m=o.a-0.35
l=C.a([B.hhA,B.heH,new A.q(m,40,-3.2)],t)
if(n.c)D.d.v(l,C.a([new A.q(m,51.4,-3.2),new A.q(m,51.4,o.c+11)],t))
else l.push(new A.q(m,o.b+11,-3.4))
c6.iV(A.Dt(l,3,6),0.2,B.YZ,!1,0.35,6)}d1.n(0,8003,B.efY)
for(u=x.D,s=d3.Q,k=0;k<3;++k){j=B.oD[k]
i=s.h(0,j)
if(i==null||!i.a)continue
if(i.e)h=B.brX
else h=i.d?B.btu:B.bsO
o=C.a([],u)
for(m=i.b,l=C.a6(m),g=new C.mt(m,m.r,l.k("mt<1>")),g.c=m.e,l=l.c;g.C();){m=g.d
if(m==null)m=l.a(m)
o.push(new C.cw([A.j6(m).d.a-1.15,A.j6(m).d.a+1.15,A.j6(m).d.b-2,A.j6(m).d.b+2]))}m=6100+k
c6.b=m
A.i7q(c6,j,j+48,-47,47,-0.25,0.5,h,o)
o=i.e?"Painted and finished.":"A 4 by 8 foot sheet of drywall (gypsum between two layers of paper). It is screwed to the studs."
d1.n(0,m,new A.cL("Drywall sheet",o,new A.q(j+24,0,0),90))
c6.b=0
c6.e=0.3
for(o=i.c,m=C.a6(o),l=new C.mt(o,o.r,m.k("mt<1>")),l.c=o.e,m=m.c;l.C();){o=l.d
if(o==null)o=m.a(o)
f=D.o.ao(o,10)
e=D.o.F(o,10)
c6.fu(new A.q($.Ho()[f],-40+e*16,0.1),0.34,B.xX,3,5,0.3)}c6.e=0}for(u=d4.a,o=u!=="tape",m=d3.as,l=u!=="mud",g=u==="sand",w=0;w<2;w=a1){d=-24+48*w
a0=s.h(0,B.oD[w])
a0=a0==null?c3:a0.a
a1=w+1
a2=s.h(0,B.oD[a1])
a2=a2==null?c3:a2.a
if(a0!==!0||a2!==!0)continue
a3=m[w]
a0=6200+w
c6.b=a0
if(a3.a&&!a3.d){a2=a3.b
if(a2===0)h=B.bs_
else h=a3.c?B.ahX:B.biF
c6.e=0.5
c6.aE(new A.q(d,0,0.08+0.02*a2),new A.q(2.2+a2*1.4,94,0.12),h)
c6.e=0}else if(!o||!l||g){c6.d=0.45
c6.e=0.6
c6.aE(new A.q(d,0,0.12),B.hc5,D.b_)
c6.e=0
c6.d=1}if(a3.d)a2="Smooth and ready for paint."
else if(!a3.a)a2="The joint between two sheets. It needs tape and three coats of joint compound."
else{a2=a3.b
a4=a2===1?"":"s"
a4="Taped, with "+a2+" coat"+a4+" of mud."
a2=a4}d1.n(0,a0,new A.cL("Seam",a2,new A.q(d,0,0),70))}for(o=d4.b,m=d3.x,l=d3.at,g=x.N,a5=0;a5<7;++a5){n=B.uR[a5]
a0=n.a
a6=m.aj(0,a0)
a7=l.h(0,a0)
a8=o===a0&&a7!=null
if(!a6)continue
a2=n.c
if(a2)a9=n.e==="fan"?"fan":"light"
else{a4=a7==null?c3:a7.a
a9=a4==null?"outlet":a4}if(a8){b0=A.td(a7.a)
a0=a7.b
b1=A.bDo(b0,a0,!1)
b2=A.haN(b1,n,new A.fD5(n),d2)
D.d.v(c5,b2.a)
d1.v(0,b2.b)
if(a0.f&&a0.c===0){a0=C.a([],c8)
for(a2=b1.c,a4=a2.length,b3=0;b3<a2.length;a2.length===a4||(0,C.K)(a2),++b3){b4=a2[b3]
a0.push(new A.hi(A.aip(n,b4.a),b4.b,b4.c,0))}D.d.v(c9,a0)}}else if(a7!=null&&a7.b.c>=2){a4=a7.a
b5=a7.b
b6=b5.x
b7=C.a([],c4)
b8=new A.f3(b7)
b9=new A.CJ(C.U(d0,g))
b9.c=2
b9.x=b6
if(a4==="light"||a4==="fan")A.htP(b8,a4,b9)
else{A.hts(b8,A.hch(a4),-0.25,b6,!0,!1,!0)
A.hvV(b8,b6)}D.d.v(c5,A.haN(new A.qW(b7,B.SL,B.uV,B.qH,c3,!1,0),n,new A.fD6(n),d2).a)
if(!a2){c6.f=3
c6.b=3000+a0
c6.e=0.4
c6.d=0.55
a2=n.d
b5=b5.x?D.aw:D.b8
c6.aE(new A.q(a2.a,a2.b,a2.c+0.2),B.hca,b5)
c6.d=1
c6.f=2
c6.e=0}d1.n(0,3000+a0,new A.cL(A.i31(a4),A.i30(d3,a0),A.aip(n,B.abl),22))}else{a4=C.a([],c4)
b5=A.hch(a9)===a9?a9:"outlet"
A.hsN(new A.f3(a4),b5,!1)
D.d.v(c5,A.haN(new A.qW(a4,B.dCn,B.uV,B.qH,c3,!1,0),n,new A.fD7(n),d2).a)
a2=a2?"Ceiling box":"Electrical box"
a4=v.q(0,a0)?"The box is mounted and the cable is in. A device can be wired here.":"The box is mounted. Pull the cable to it."
d1.n(0,2000+a0,new A.cL(a2,a4,A.aip(n,B.abl),24))}}c6.x=0
c0=new A.fDa(c6)
if(u==="wall"||u==="ceiling"||u==="fanbox")for(a5=0;a5<7;++a5){n=B.uR[a5]
c4=n.a
if(m.aj(0,c4))continue
c8=n.c
d0=n.d
s=d0.a
o=d0.b
a0=c8?new A.q(s,o-1,d0.c):new A.q(s,o,1.5)
a2=c8?B.h9e:B.hbr
c0.$4$round(2000+c4,a0,a2,c8)
c4=c8?new A.q(s,o-8,d0.c):new A.q(s,o+7,3)
c9.push(new A.hi(c4,n.b,D.eP,0))}else if(u==="cable")for(a5=0;a5<7;++a5){n=B.uR[a5]
c4=n.a
if(!m.aj(0,c4)||v.q(0,c4))continue
c8=n.c
d0=n.d
s=d0.a
o=d0.b
d0=c8?new A.q(s,o-1,d0.c):new A.q(s,o,1.5)
s=c8?B.aY8:B.h9F
c0.$5$col$round(2000+c4,d0,s,D.bs,c8)}else if(u==="knife")for(a5=0;a5<7;++a5){n=B.uR[a5]
if(n.c||!m.aj(0,n.a))continue
c4=n.d
c8=c4.a
i=d3.aqD(c8)
if(i==null||i.b.q(0,n.a))continue
c0.$4$col(2000+n.a,new A.q(c8,c4.b,0.5),B.hbB,D.cG)}else if(u==="sheet")for(w=0;w<5;){j=B.a5P[w]
c0.$3(6000+w,new A.q(j,0,0.3),B.hgl);++w
c9.push(new A.hi(new A.q(j,50,1),"edge "+w,D.eP,0))}else if(u==="screw")for(a5=0;a5<3;++a5){j=B.oD[a5]
i=s.h(0,j)
if(i==null||!i.a)continue
for(c4=d3.aqZ(j),c8=c4.length,d0=i.c,o=j+48,b3=0;b3<c4.length;c4.length===c8||(0,C.K)(c4),++b3){f=c4[b3]
for(a0=f*10,a2=7000+a0,r=0;r<6;++r){if(d0.q(0,a0+r))continue
c0.$3(a2+r,new A.q($.Ho()[f],-40+r*16,0.5),B.aXZ)}a2=$.Ho()
if(f+1<a2.length&&a2[f]+16<=o)for(a0=7500+a0,r=0;r<6;r+=2)c0.$4$col(a0+r,new A.q(a2[f]+8,-40+r*16+8,0.5),B.aXZ,D.du)}}if(!C.eD(["wall","ceiling","fanbox","cable","knife","sheet","screw",""],g).q(0,u))c4=D.d.q(B.zw,u)||C.eD(["outlet","gfci","switch","light","fan"],g).q(0,u)||D.d.q(B.lk,u)||D.d.q(B.jI,u)
else c4=!1
if(c4)for(c4=d3.CW,a5=0;a5<7;++a5){n=B.uR[a5]
if(D.d.q(B.zw,u)){c8=n.a
a7=l.h(0,c8)
if(a7!=null&&D.d.q(B.lk,a7.a)&&a7.b.c>=2&&!c4.aj(0,c8)){d0=n.d
c0.$4$col(3000+c8,new A.q(d0.a,d0.b,1.2),B.hcd,D.ba)}}else{c8=n.a
if(m.aj(0,c8)&&v.q(0,c8)&&!l.aj(0,c8)){d0=n.c
s=n.d
o=s.a
g=s.b
s=d0?new A.q(o,g-1,s.c):new A.q(o,g,1.2)
o=d0?B.aY8:B.hge
c0.$4$round(2000+c8,s,o,d0)}}}c6.r=!0
for(c4=d3.CW,c8=new C.cE(c4,C.a6(c4).k("cE<1,2>")).gaf(0);c8.C();){j=c8.d
d0=j.a
n=A.j6(d0)
v=n.d
d=v.a
c6.b=8200+d0
v=v.b
c6.iV(A.Dt(C.a([new A.q(d,v,2.5),new A.q(d,-46,3.5),new A.q(d,-46,22)],t),4,6),0.55,B.Z2,!1,0.2,6)
c6.aF(new A.q(d,v,1.8),B.heb,B.bhQ,0.3)
v=c6.b=8100+d0
u=j.b
switch(u){case"tv":c6.aF(new A.q(d,-45,24),B.h7P,B.ahK,0.2)
c6.aF(new A.q(d,-19,24),B.h9s,E.FO,0.4)
if(c4.aj(0,d0))d0=d3.ax&&!d3.ay&&d3.a4W(d0)
else d0=!1
if(d0){d0=d-38.5
s=d+38.5
c7.push(new A.fo(C.a([new A.q(d0,1.5,25.7),new A.q(s,1.5,25.7),new A.q(s,-39.5,25.7),new A.q(d0,-39.5,25.7)],t),v,new A.fD8(j),320,180,9,2,0,!1))}break
case"lamp":c6.d1(new A.q(d,-47.5,24),new A.q(d,-46.5,24),6,B.Y_,0.4,14)
c6.d1(new A.q(d,-46.5,24),new A.q(d,-22,24),1,B.BI,0.5,8)
c6.yY(new A.q(d,-26,24),new A.q(d,-12,24),9,L.Z9,!1,!0,5.5,0.2,16)
break
case"toaster":c6.aF(new A.q(d,-42.5,24),B.h4V,B.hP,0.8)
c6.aE(new A.q(d,-38,24),B.hhz,B.aj9)
break
case"washerM":case"dryerM":c1=u==="washerM"
d0=c1?B.air:B.ajo
c6.aF(new A.q(d,-30,22),B.aXL,d0,0.4)
c6.aF(new A.q(d,-15.5,35.2),B.hby,B.afn,0.3)
c6.d1(new A.q(d,-29,35),new A.q(d,-29,36.2),10.5,B.aeZ,0.8,20)
d0=c1?B.afA:B.aja
c6.d1(new A.q(d,-29,36.1),new A.q(d,-29,36.6),8.2,d0,0.9,20)
break
case"rangeM":c6.aF(new A.q(d,-30,22),B.aXL,B.BA,0.7)
c6.aF(new A.q(d,-28,35.3),B.hfz,D.xU,0.9)
c6.aF(new A.q(d,-19.5,36.4),B.hjJ,B.Yz,0.9)
c6.aF(new A.q(d,-12.2,22),B.hc7,B.agj,0.5)
for(a5=0;a5<2;++a5)for(d0=d+B.aBJ[a5],b3=0;b3<2;++b3){c2=B.awa[b3]
c6.d1(new A.q(d0,-11.6,c2),new A.q(d0,-11.2,c2),4.2,B.ahO,0.3,14)}break
default:c6.aF(new A.q(d,-43.5,24),B.h5D,B.ahK,0.2)
c6.yX(new A.q(d-6,-38,24),new A.q(d+8,-38,24),3.4,B.G2,3,0.6,12)
c6.ww(new A.q(d-8,-43,24),B.h55,B.G2,0.6,0)}d0=A.i17(u)
s="Plugged into "+n.b
u=u==="tv"?s+". To unplug it, go behind it (the Behind the TV button) and tap the plug on the wall.":s+". Tap it to unplug."
d1.n(0,v,new A.cL(d0,u,new A.q(d,-35,20),60))}c6.r=!1
for(a5=0;a5<7;++a5){n=B.uR[a5]
d1.c3(0,2000+n.a,new A.fD9(n))}return new A.qW(c5,d1,c9,c7,c3,!1,0)},
i31(d){var w
A:{if("gfci"===d){w="GFCI outlet"
break A}if("switch"===d){w="Light switch"
break A}if("light"===d){w="Ceiling light"
break A}if("fan"===d){w="Ceiling fan"
break A}if("outlet"===d){w="Outlet"
break A}w=A.a2z(d)
break A}return w},
i17(d){var w
A:{if("tv"===d){w="TV"
break A}if("lamp"===d){w="Lamp"
break A}if("toaster"===d){w="Toaster"
break A}if("washerM"===d){w="Washing machine"
break A}if("dryerM"===d){w="Dryer"
break A}if("rangeM"===d){w="Kitchen range"
break A}w="Hair dryer"
break A}return w},
i30(d,e){var w,v=d.at.h(0,e)
if(v==null)return""
if(v.b.x)return"BURNT. It was wired wrong and it burnt out. Pull it out and put in a new one."
w=v.a
if(D.d.q(B.jI,w))return d.ch.q(0,e)?"The switch is ON. Tap to turn it off.":"The switch is OFF. Tap to flip it on."
if(w==="light"||w==="fan")return d.anH(e)?"It is running.":"It is off. Flip its switch (breaker on)."
w=d.CW.h(0,e)
return"Tap with a TV, lamp, toaster, hair dryer, washing machine, dryer or range in your hand to plug it in. Plugged: "+(w==null?"nothing":w)+"."},
inc(b3,b4,b5,b6,b7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=C.a([],x.z),b2=new A.f3(b1)
for(w=D.d.gaf(B.uR),v=new C.eR(w,new A.fUd()),u=b3.at,t=b4*7;v.C();){s=w.gS(0)
r=s.a
q=u.h(0,r)
if(q==null||q.b.c<1)continue
p=b3.anH(r)?t:0.4
b2.b=3000+r
s=s.d
r=s.a
o=s.b-6.6
s=s.c
for(n=0;n<4;++n){m=p+n*3.141592653589793/2
l=A.vM(B.h4d,m)
b2.ww(new A.q(r+l.a,o+l.b,s+l.c),B.hkK,B.bgs,0.3,m)}}w=b3.d
w===$&&C.c()
v=D.d.gaf(w)
s=new C.eR(v,new A.fUe())
r=b4*5
while(s.C()){o=v.gS(0).a
if(b3.anH(o)){k=A.j6(o)
b2.b=0
b2.d=0.25+0.05*Math.sin(r)
o=k.d
b2.fu(new A.q(o.a,o.b-5,o.c),11,B.Yo,4,10,0)
b2.d=1}}for(v=b3.CW,s=new C.cE(v,C.a6(v).k("cE<1,2>")).gaf(0),o=b4*1.6,l=b4*6;s.C();){j=s.d
i=j.a
if(v.aj(0,i))h=b3.ax&&!b3.ay&&b3.a4W(i)
else h=!1
if(!h)continue
g=A.j6(i).d.a
b2.b=8100+i
i=j.b
switch(i){case"tv":break
case"lamp":b2.b=0
b2.d=0.3+0.05*Math.sin(l)
b2.fu(new A.q(g,-19,24),11,I.xR,4,10,0)
b2.d=1
break
case"toaster":b2.e=0.8
i=C.ar(B.ahc,A3.G6,(Math.sin(l)+1)/2)
i.toString
b2.aE(new A.q(g,-38.2,24),new A.q(13,0.3,6),i)
b2.e=0
break
case"washerM":case"dryerM":f=i==="washerM"
b2.e=0.8
for(e=0;e<3;++e){m=b4*(f?5:7)+e*2.1
i=Math.cos(m)
h=Math.sin(m)
if(f)d=(e&1)===0?B.bfb:B.G2
else d=(e&1)===0?A3.G6:D.ay
b2.fu(new A.q(g+i*4.5,-29+h*4.5,36.8),1.9,d,3,6,0.2)}b2.e=0
break
case"rangeM":b2.e=0.8
for(a0=0;a0<2;++a0){a1=B.aBJ[a0]
for(i=g+a1,h=r+a1,a2=0;a2<2;++a2){a3=B.awa[a2]
d=C.ar(E.Yr,B.bl0,(Math.sin(h)+1)/2)
d.toString
b2.nw(new A.q(i,-11.1,a3),new A.q(i,-10.9,a3),3.8,1.8,d,0,12)}}b2.e=0
break
default:for(i=g+9,e=0;e<6;++e)b2.fu(new A.q(i+D.k.F(o+e/6,1)*22,-38+Math.sin(e*2)*2,24),0.6,B.bo9,3,5,0.2)}}for(v=b3.db,v=new C.cE(v,C.a6(v).k("cE<1,2>")).gaf(0),s=b3.cx;v.C();){j=v.d
r=j.a
k=A.j6(r)
a4=b5.h(0,r)
a5=b4<=(a4==null?0:a4)
a6=s.q(0,r)
if(!a5&&!a6)continue
r=a5?j.b:"smolder"
A.hxR(b2,r,new A.fUf(k),1,b4)}if(b6){a7=(D.k.bf(b4*2.4)&1)===0
for(e=0;e<w.length;++e){k=A.j6(w[e].a)
a8=b3.r9(e)
v=k.a
b2.b=2000+v
b2.f=3
b2.e=0.9
b2.d=0.02
if(!u.aj(0,v)){s=k.d
r=s.a
o=s.b
if(k.c)b2.aE(new A.q(r,o-1.5,s.c),B.hjb,D.c)
else b2.aE(new A.q(r,o,2.2),B.hlC,D.c)}b2.d=1
if(a7){a9=a8?D.bf:D.aw
s=k.d
r=s.a
o=s.b
b0=k.c?new A.q(r,o-3.5,s.c):new A.q(r,o+7.4,2)
b2.fu(b0,v===b7?1.15:0.8,a9,4,8,0.2)}b2.e=0
b2.f=2}}return b1},
rV:function rV(d,e,f){this.a=d
this.b=e
this.c=f},
fvc:function fvc(d){this.a=d},
fvd:function fvd(d){this.a=d},
fD5:function fD5(d){this.a=d},
fD6:function fD6(d){this.a=d},
fD7:function fD7(d){this.a=d},
fDa:function fDa(d){this.a=d},
fD8:function fD8(d){this.a=d},
fD9:function fD9(d){this.a=d},
fUd:function fUd(){},
fUe:function fUe(){},
fUf:function fUf(d){this.a=d},
hpu(d,e){var w=new A.cxK(e,d,A.hiR())
w.bB0(4,d,e)
return w},
rt:function rt(d,e){this.a=d
this.b=e},
uK:function uK(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
MJ:function MJ(d,e){this.a=d
this.b=e
this.c=!1},
cxK:function cxK(d,e,f){var _=this
_.a=d
_.b=e
_.c=$
_.d=f
_.e=3
_.r=_.f=0
_.w=!1},
cxP:function cxP(d){this.a=d},
cxL:function cxL(){},
cxN:function cxN(){},
cxO:function cxO(){},
cxM:function cxM(d){this.a=d},
ask:function ask(d,e){this.d=d
this.a=e},
aFK:function aFK(d,e){var _=this
_.e=_.d=$
_.f=d
_.r=$
_.w=e
_.x="inspect"
_.y=0
_.z=null
_.at=_.as=_.Q=!1
_.c=_.a=_.ax=null},
ezK:function ezK(d,e,f){this.a=d
this.b=e
this.c=f},
ezL:function ezL(d){this.a=d},
ezJ:function ezJ(d){this.a=d},
ezz:function ezz(d){this.a=d},
ezE:function ezE(d){this.a=d},
ezF:function ezF(d){this.a=d},
ezD:function ezD(d){this.a=d},
ezG:function ezG(d,e){this.a=d
this.b=e},
ezH:function ezH(d){this.a=d},
ezI:function ezI(d){this.a=d},
ezC:function ezC(d){this.a=d},
ezB:function ezB(d,e){this.a=d
this.b=e},
ezy:function ezy(d,e){this.a=d
this.b=e},
ezw:function ezw(d){this.a=d},
ezx:function ezx(d,e){this.a=d
this.b=e},
ezA:function ezA(d){this.a=d},
ezX:function ezX(d,e){this.a=d
this.b=e},
ezT:function ezT(){},
ezS:function ezS(d){this.a=d},
ezU:function ezU(){},
ezV:function ezV(){},
ezW:function ezW(d,e){this.a=d
this.b=e},
ezR:function ezR(d,e){this.a=d
this.b=e},
ezQ:function ezQ(d){this.a=d},
ezP:function ezP(d){this.a=d},
ezN:function ezN(d,e){this.a=d
this.b=e},
ezM:function ezM(){},
ezO:function ezO(d,e){this.a=d
this.b=e},
aud(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){return new A.yb(p,s,u,t,r,h,o,n,m,i,q,d,j,g,k,e,f,l)},
imE(d){var w,v,u,t,s,r,q,p,o,n,m=d.geb(0),l=C.a([],x.T)
for(w=d.x,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u){t=w[u]
s=t.b
if(s==="rug")continue
s=B.hF.h(0,s)
s.toString
r=(t.e&1)===1
q=r?s.d:s.c
p=r?s.c:s.d
s=t.c
r=q/2
o=t.d
n=p/2
l.push(new A.ib(s-r,s+r,o-n,o+n))}switch(d.c){case"kitchen":w=-m/2
l.push(new A.ib(w,w+28,0,28))
l.push(new A.ib(10,m/2,0,28))
break
case"bathroom":l.push(B.dDr)
l.push(B.dD7)
w=-m/2
l.push(new A.ib(w,w+33,0,75))
break}return l},
bsR(d,e,f,g,h,i,j,k,l,m,n,o){var w=new A.bsQ(d,i,m,o,n,l,g,f,k,j,e,h,C.a([],x.n))
w.bBg(d,e,f,g,h,i,j,k,l,m,n,o)
return w},
htv(d,e){var w,v,u,t=d.w,s=D.d.bg(t,new A.fnR(e))
if(s<0)s=0
w=t[s]
v=d.geb(0)
u=d.gh4(0)
t=w.c
switch(w.b){case"left":return new C.b5(new C.z(-v/2+18,D.k.E(t+u/2-40,10,u-10)),1.5707963267948966,s)
case"right":return new C.b5(new C.z(v/2-18,D.k.E(t+u/2-40,10,u-10)),-1.5707963267948966,s)
default:return new C.b5(new C.z(D.o.E(t,-v/2+12,v/2-12),18),0,s)}},
yb:function yb(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){var _=this
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
tU:function tU(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
aai:function aai(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
ib:function ib(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cuj:function cuj(d,e){var _=this
_.a=d
_.b=e
_.d=_.c=$},
AF:function AF(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
bsQ:function bsQ(d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
fnR:function fnR(d){this.a=d},
aWZ:function aWZ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=$},
bW1:function bW1(d,e){this.a=d
this.b=e},
bW2:function bW2(d){this.a=d},
hBp(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=C.a([B.dDk],x.T)
for(w=d.x,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u){t=w[u]
if(t.a===e)continue
s=t.b
if(D.d.q(B.a5M,s)||D.d.q(B.Ij,s)||s==="bush")continue
r=s==="townsign"
if(r||s==="adboard"){q=r?178:150
for(s=[-q,q],p=0;p<2;++p){o=s[p]
n=t.e*3.141592653589793/2
r=Math.cos(n)
m=Math.sin(n)
r=t.c+o*r
m=t.d+-o*m
i.push(new A.ib(r-8,r+8,m-8,m+8))}continue}r=B.hF.h(0,s)
r.toString
m=(t.e&1)===1
l=m?r.d:r.c
k=m?r.c:r.d
if(s==="tree"||s==="pine"){l=10
k=10}s=t.c
r=l/2
m=t.d
j=k/2
i.push(new A.ib(s-r,s+r,m-j,m+j))}return i},
bak:function bak(d,e,f,g,h,i,j,k,l){var _=this
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
huI(d){var w=d.toLowerCase()
if(D.a.q(w,"blue"))return B.nf
if(D.a.q(w,"ground")||D.a.q(w,"green"))return B.afx
if(D.a.q(w,"neutral")||D.a.q(w,"white"))return B.m_
if(D.a.q(w,"traveler a"))return B.rp
if(D.a.q(w,"traveler b"))return D.ay
if(D.a.q(w,"load"))return B.ajs
if(D.a.q(w,"support"))return D.dn
return B.bpn},
i7m(d){var w=d.toLowerCase()
if(D.a.q(w,"ground"))return B.afx
if(D.a.q(w,"common"))return D.Me
if(D.a.q(w,"traveler"))return B.vS
if(D.a.q(w,"neutral"))return B.Bx
if(D.a.q(w,"support"))return D.dn
return D.ay},
i5w(d){var w=d.toLowerCase()
if(D.a.q(w,"ground"))return G.a2K
if(D.a.q(w,"neutral"))return D.wz
if(D.a.q(w,"support"))return Am.a1U
if(D.a.q(w,"light")||D.a.q(w,"load"))return D.qA
if(D.a.q(w,"motor"))return O.Cm
if(D.a.q(w,"traveler"))return D.jH
return D.ho},
akK:function akK(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
aqq:function aqq(d){this.a=d},
beU:function beU(d,e,f){var _=this
_.d=0
_.e=!1
_.f=d
_.y=_.x=_.w=_.r=null
_.z=!0
_.Q=$
_.bw$=e
_.a8$=f
_.c=_.a=null},
d9i:function d9i(d,e){this.a=d
this.b=e},
d9j:function d9j(d,e){this.a=d
this.b=e},
d9k:function d9k(d){this.a=d},
d9l:function d9l(d,e,f){this.a=d
this.b=e
this.c=f},
d9e:function d9e(d,e){this.a=d
this.b=e},
d9h:function d9h(d,e){this.a=d
this.b=e},
d9g:function d9g(d,e){this.a=d
this.b=e},
d9f:function d9f(d,e){this.a=d
this.b=e},
d9q:function d9q(d){this.a=d},
d9r:function d9r(d,e){this.a=d
this.b=e},
d9s:function d9s(d){this.a=d},
d9p:function d9p(d){this.a=d},
d9t:function d9t(d){this.a=d},
d9o:function d9o(d){this.a=d},
d9u:function d9u(d,e){this.a=d
this.b=e},
d9n:function d9n(d,e){this.a=d
this.b=e},
d9v:function d9v(d){this.a=d},
d9m:function d9m(d){this.a=d},
bxG:function bxG(d,e,f,g,h,i,j){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.a=j},
fjs:function fjs(){},
aLK:function aLK(){},
hxR(d,e,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
if(e==="none"||e.length===0)return
d.b=0
w=new A.fET(a2,d,a0,a1)
v=new A.fES(d,a2,a0,a1)
switch(e){case"arc":u=D.k.bf(a2*14)
for(t=0.1*a1,s=x.o,r=u*3.1,q=0;q<3;++q){p=Math.sin((r+q*7.7)*12.9898)*43758.5453
if(p-Math.floor(p)<0.3)continue
o=q*2
n=2.2-o
m=C.a([],s)
for(o=1.6-o-n,l=u+q*13,k=0;k<=6;++k){j=k/6
if(k===0||k===6)i=0
else{p=Math.sin((l+k)*12.9898)*43758.5453
i=(p-Math.floor(p)-0.5)*1.6}m.push(a0.$1(new A.q(-1.8+3.6*j,n+o*j+i,3.3)))}p=Math.sin((u+q)*12.9898)*43758.5453
o=C.ar(D.c,D.cp,p-Math.floor(p))
o.toString
d.iV(m,t,o,!1,0,4)}d.d=0.16+0.1*Math.sin(a2*31)
d.fu(a0.$1(B.hgb),3.2*a1,D.du,4,8,0)
d.d=1
break
case"spark":w.$2(22,7)
d.d=0.2+0.1*Math.sin(a2*26)
d.fu(a0.$1(B.aYf),2.4*a1,I.xR,4,8,0)
d.d=1
break
case"smoke":d.d=0.3+0.08*Math.sin(a2*7)
d.fu(a0.$1(B.h8j),2.6*a1,D.aw,4,8,0)
d.d=1
v.$3(9,0.8,11)
w.$2(5,3)
break
case"fire":d.d=0.3+0.12*Math.sin(a2*20)
d.fu(a0.$1(B.aYf),4.4*a1,D.cG,4,8,0)
d.d=1
h=D.k.bf(a2*11)
for(t=0.85*a1,s=0.05*a1,r=0.5*a1,o=0.04*a1,k=0;k<6;++k){p=-2.2+k*0.88
g=Math.sin((h+k*5)*12.9898)*43758.5453
f=2.4+(g-Math.floor(g))*3.6
l=a0.$1(new A.q(p,-2.2,3))
g=Math.sin((h+k)*12.9898)*43758.5453
d.yX(l,a0.$1(new A.q(p+(g-Math.floor(g)-0.5)*1.2,-2.2+f,3.4)),t,D.fs,s,0,6)
d.yX(a0.$1(new A.q(p,-2.2,3.1)),a0.$1(new A.q(p,-2.2+f*0.62,3.5)),r,D.bs,o,0,6)}w.$2(16,6)
v.$3(10,1,13)
break
case"smolder":v.$3(4,0.9,9)
break}},
fET:function fET(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fES:function fES(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
h7E(d){var w
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
avR(d){var w
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
hxN(d,e,a0){var w,v,u,t,s=C.a([],x.fB),r=new A.fEo(s),q=new A.fEt(e),p=q.$2(B.W8,B.Ke),o=q.$2(B.W8,B.Kf),n=q.$2(B.W8,B.Kg),m=q.$2(B.W9,B.Kf),l=q.$2(B.W9,B.Ke),k=q.$2(B.W9,B.Kg),j=q.$2(B.Wa,B.Kg),i=q.$2(B.Wa,B.Ke),h=q.$2(B.Wa,B.Kf),g=new C.Y(e,new A.fEp(),C.T(e).k("Y<1>")).gK(0),f=D.d.b_(e,new A.fEq())
if(f)r.$5("UNVERIFIED",B.f6s,"A conductor is in use whose function was never verified. A wire color alone does not prove what a wire does.","Verify every conductor with a tester before you connect it.","Identify each wire with a tester and the device diagram, then connect it.")
if(D.d.b_(e,new A.fEr()))r.$5("LOOSE",B.tf,"A connection is loose. A loose connection heats up and can arc.","Every conductor must be fastened tightly under its screw or connector.","Tighten the connection.")
if(D.d.b_(e,new A.fEs()))r.$5("EXPOSED",B.tf,"Bare copper is showing outside the terminal. An exposed energized conductor can shock or short.","No conductor may be left exposed.","Trim the wire so only the part under the screw is bare.")
if(!a0)r.$5("SUPPORT",B.tf,"The box or support is not rated for this device. It can fall.","A fixture or fan must hang from a box or bracket rated for its weight.","Use a box rated for this fixture (a fan-rated box for a fan).")
if(n>0||i>0)r.$5("HOT_TO_GROUND",B.tf,"The hot wire is connected to the ground. That is a short circuit to ground: a very large current.","The equipment ground never carries current in normal use, and the hot wire never touches it.","Hot goes on the hot terminal (brass). Ground goes only on the green screw.")
f=o>0
if(!(f&&m>0))w=l>0&&p>0
else w=!0
if(w)r.$5("SHORT",B.tf,"The hot and the neutral are connected together. That is a short circuit.","Hot and neutral must never touch each other.","Put each wire on its own terminal.")
else if(f||l>0)r.$5("REVERSED",B.tf,"Hot and neutral are reversed (reversed polarity). The device may still seem to work, but the parts that should be dead are live. This is a shock hazard.","Hot goes to the brass (hot) terminal and neutral to the silver (neutral) terminal.","Swap them: black (hot) to brass, white (neutral) to silver.")
if(k>0||h>0)r.$5("NEUTRAL_GROUND",B.tf,"The neutral and the equipment ground are joined at the device. Current can flow on the ground path and trip protective devices.","The neutral is never used as the equipment ground, and the two are not joined at the device.","Neutral to the silver terminal only. Ground to the green screw only.")
if(!(i>0&&n===0))f=h>0&&k===0
else f=!0
if(f)r.$5("GROUND_AS_CURRENT",B.tf,"The equipment ground was fastened to a terminal that carries current. The ground must never be used as a normal conductor.","The equipment ground goes only to the ground terminal.","Move the bare copper (ground) wire to the green screw.")
if(g>0&&p<d.b)r.$5("LOAD_SIDE",B.aRf,"The wires are on the LOAD screws. Power must come in on LINE; on LOAD the device would not protect or feed anything.","Supply (line) conductors go to the LINE terminals.","Move the wires to the LINE screws.")
f=d.b
if(p<f&&g===0&&o===0&&l===0&&n===0)r.$5("MISSING_HOT",B.JS,"The hot wire is not on the hot terminal, so the device gets no power.","The device needs its hot connection.","Connect the black (hot) wire to the brass terminal.")
if(p>=f){f=d.c
f=m<f&&f>0&&l===0&&k===0}else f=!1
if(f)r.$5("OPEN_NEUTRAL",B.tf,"The neutral is not connected, but the hot wire is. The device will not run, and parts of it can still be live. There may be nothing to see.","The neutral return conductor must be connected.","Connect the white (neutral) wire to the silver terminal.")
if(d.d&&j===0)r.$5("MISSING_GROUND",B.tf,"There is no equipment ground. It may seem to work, but nothing protects you if a fault happens.","A required equipment ground must be connected to the ground terminal.","Connect the bare copper (ground) wire to the green screw.")
for(f=s.length,v=B.qV,u=0;u<f;++u){t=s[u].b
if(A.avR(t)>A.avR(v))v=t}return new A.b6U(v,s,A.i2y(s,e))},
i2y(d,e){var w=new A.fno(d)
if(w.$1("SHORT")||w.$1("HOT_TO_GROUND"))return B.bvP
if(w.$1("LOOSE"))return B.bvH
if(w.$1("EXPOSED"))return B.bvN
if(w.$1("GROUND_AS_CURRENT"))return B.bvR
if(w.$1("REVERSED"))return B.bvQ
if(w.$1("NEUTRAL_GROUND"))return B.bvS
if(w.$1("SUPPORT"))return B.bvO
if(w.$1("OPEN_NEUTRAL"))return B.bvM
if(w.$1("LOAD_SIDE")||w.$1("MISSING_HOT"))return B.bvF
if(w.$1("UNVERIFIED"))return B.bvG
if(w.$1("MISSING_GROUND"))return B.bvJ
return B.bvL},
hXu(d){var w
switch(d.a.c.a){case 0:w=d.b.c===B.Ke
break
case 1:w=d.b.c===B.Kf
break
case 2:w=d.b.c===B.Kg
break
case 3:w=!1
break
default:w=null}return w},
hxO(d,e,f){var w,v,u,t,s=C.a([],x.fB)
e.bQ(0,new A.fEv(f,s))
for(w=s.length,v=B.qV,u=0;u<w;++u){t=s[u].b
if(A.avR(t)>A.avR(v))v=t}return new A.b6U(v,s,v===B.qV?B.bvK:B.bvI)},
JR:function JR(d,e){this.a=d
this.b=e},
FW:function FW(d,e){this.a=d
this.b=e},
G2:function G2(d,e){this.a=d
this.b=e},
cAK:function cAK(d){this.c=d},
cEk:function cEk(d,e){this.a=d
this.c=e},
a4z:function a4z(d,e){this.a=d
this.b=e},
bNb:function bNb(d,e,f){this.b=d
this.c=e
this.d=f},
wz:function wz(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
tt:function tt(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h},
b6U:function b6U(d,e,f){this.a=d
this.b=e
this.c=f},
fEo:function fEo(d){this.a=d},
fEt:function fEt(d){this.a=d},
fEu:function fEu(d,e){this.a=d
this.b=e},
fEp:function fEp(){},
fEq:function fEq(){},
fEr:function fEr(){},
fEs:function fEs(){},
fno:function fno(d){this.a=d},
fnp:function fnp(d){this.a=d},
abq:function abq(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
abr:function abr(d,e,f){this.a=d
this.b=e
this.c=f},
vo:function vo(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
b5C:function b5C(d,e){this.a=d
this.b=e},
b8O:function b8O(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cAM:function cAM(d,e,f){this.a=d
this.b=e
this.c=f},
cAN:function cAN(){},
cAO:function cAO(){},
cAP:function cAP(){},
Q_:function Q_(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fEv:function fEv(d,e){this.a=d
this.b=e},
hbj(d){var w
switch(d.a){case 0:w=D.ba
break
case 1:w=D.cG
break
case 2:w=D.c0
break
case 3:w=D.bs
break
case 4:w=D.bq
break
default:w=null}return w},
heu(d){return C.bV(E.mE,null,new A.h1c(),d,!0,!0,!0,D.k7,!1,!1,x.H)},
hCj(d,e,f,g){var w=x.S
return C.bV(E.mE,null,new A.h1a(new A.cAM(e,f,C.U(w,w)),g),d,!0,!0,!0,D.k7,!1,!1,x.dZ)},
h1c:function h1c(){},
h1a:function h1a(d,e){this.a=d
this.b=e},
a1v:function a1v(d,e,f){this.c=d
this.d=e
this.a=f},
bvz:function bvz(d){var _=this
_.d=d
_.c=_.a=_.e=null},
fd4:function fd4(d,e){this.a=d
this.b=e},
fd3:function fd3(d,e,f){this.a=d
this.b=e
this.c=f},
fd5:function fd5(d){this.a=d},
fd2:function fd2(d,e){this.a=d
this.b=e},
fd6:function fd6(){},
fd7:function fd7(d){this.a=d},
i1z(){var w,v,u,t,s,r,q,p=C.a([],x.ar)
for(w=0;w<3;++w){v=-72+48*w
u=v+48
p.push(new A.zh(5000+p.length,0,v,u,-60,36))
p.push(new A.zh(5000+p.length,0,v,u,36,60))}for(t=0;t<4;){v=(t&1)===0;++t
s=0
for(;;){if(!(s<(v?144:120)-0.1))break
u=p.length
r=v?144:120
q=s+48
p.push(new A.zh(5000+u,t,s,Math.min(r,q),0,95.5))
s=q}}return p},
hbU(d){var w=d-5000
return w>=0&&w<$.mc().length?$.mc()[w]:null},
i1y(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=C.a([],x.I)
for(w=a0.b,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u){t=w[u]
s=t.b
if(s==="ceiling"){s=t.f
s.toString
r=-70+s*15.555555555555555+3.05
q=D.d.fG($.mc(),new A.fmu(r))
d.push(new A.Mu(6000+d.length,q.a,"Ceiling light box",-1,r-2.4,r+2.4,-2.4,2.4))}else{p=t.d+t.r*1.9
q=D.d.fG($.mc(),new A.fmv(t,p))
o=d.length
s=s==="switch"
n=s?"Switch box":"Outlet box"
m=s?48:16
s=s?48:16
d.push(new A.Mu(6000+o,q.a,n,-1,p-1.4,p+1.4,m-2.4,s+2.4))}}for(l=0;l<2;++l){k=B.Io[l]
for(w=D.d.gaf($.mc()),v=new C.eR(w,new A.fmw(k)),s=k.c,o=k.d,n=k.e,m=k.f,j=k.a==="door";v.C();){i=w.gS(0)
h=Math.max(i.c,s)
g=Math.min(i.d,o)
if(g-h>0.5){f=d.length
i=i.a
e=j?"Door opening":"Window opening"
d.push(new A.Mu(6000+f,i,e,l,h,g,n,m))}}}return d},
hK7(){var w,v,u,t,s=x.S,r=C.U(s,x.ag)
for(w=$.mc(),v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)r.n(0,w[u].a,new A.Mv(C.aV(s)))
w=C.a([],x.gc)
for(t=0;t<5;++t)w.push(new A.a4N())
return new A.bO9(A.hxT(),r,w,C.aV(s))},
hwS(d,e){var w,v
A:{if(6===d){w=B.bra
break A}if(5===d){w=B.aie
break A}v=D.o.F(e*29,7)-3
w=C.a_(255,233+v,228+v,214+v)
break A}return w},
hxj(c7,c8,c9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4=C.a([],x.z),c5=new A.f3(c4),c6=c7.a
A.hxK(c5,c6.a)
for(w=c6.b,v=w.length,u=0;t=w.length,u<t;w.length===v||(0,C.K)(w),++u){s=w[u]
t=s.b
r=s.a
if(t==="ceiling"){t=s.f
t.toString
A.hxI(c5,r,1,-70+t*15.555555555555555)}else{t=t==="switch"?48:16
A.hxJ(c5,r,s.r,s.d,s.c,t)}}c5.b=0
c5.f=1
c5.e=0.6
for(u=0;u<w.length;w.length===t||(0,C.K)(w),++u){q=w[u].w
if(q!=null){v=q.a
c5.iV(v,0.36,q.b?B.ajG:B.Ml,!0,0.35,6)}}c5.e=0
A.i34(c5)
p=new A.fC3(c7)
o=new A.fC6(c5)
for(w=$.mc(),v=w.length,t=x.I,r=c7.b,n=c7.c,u=0;u<w.length;w.length===v||(0,C.K)(w),++u){m=w[u]
l=m.a
k=r.h(0,l)
j=m.b
i=n[j].a
if(!k.a)continue
h=A.hwS(i,l)
if(j===0)continue
c5.f=0
c5.b=l
c5.x=$.dp=$.dp+1
g=C.a([],t)
for(f=$.Dw(),e=f.length,d=k.d,a0=0;a0<f.length;f.length===e||(0,C.K)(f),++a0){q=f[a0]
if(q.b===l&&q.d>=0&&d.q(0,q.a))g.push(q)}l=j-1
j=m.c+0.1
f=m.d-0.1
if(g.length===0)o.$8(l,j,f,0,95.5,3.75,0.5,h)
else{q=D.d.gI(g)
g=q.e
o.$8(l,j,g,0,95.5,3.75,0.5,h)
j=q.f
o.$8(l,j,f,0,95.5,3.75,0.5,h)
o.$8(l,g,j,q.w,95.5,3.75,0.5,h)
o.$8(l,g,j,0,q.r,3.75,0.5,h)}c5.x=0}for(w=$.mc(),v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u){m=w[u]
t=m.a
k=r.h(0,t)
l=m.b
j=n[l]
i=j.a
if(!k.c||i>=6)continue
j=j.b
g=i===0
if(g)a1=B.ah1
else if(i>=5)a1=B.Mu
else{j=!(c8>=j)?B.N5:B.FH
a1=j}a2=g?0.42:1.3
c5.b=t
c5.e=0.5
if(l===0)continue
else{c5.f=0
c5.x=$.dp=$.dp+1
for(t=D.d.gaf($.Bi()),j=new C.eR(t,new A.fC_(m)),--l,g=0*a2;j.C();){f=t.gS(0)
for(e=f.c,d=f.d,f=f.e+6,a3=8;a3<92;a3+=16){if(a3<d||a3>f||p.$3(m,e,a3))continue
a4=B.Dd[l]
a5=B.a40[l]
q=A.fu(l,e,a3,4.03)
a6=a5.a*a2
a7=a5.b*a2
a8=a5.c*a2
a9=q.a
b0=a9-a6
b1=q.b
b2=b1-a7
b3=q.c
b4=b3-a8
a6=a9+a6
a7=b1+a7
a8=b3+a8
c5.xe(new A.q(b0-g,b2-a2,b4-g),new A.q(a6-g,a7-a2,a8-g),new A.q(a6+g,a7+a2,a8+g),new A.q(b0+g,b2+a2,b4+g),a1,a4)}}c5.x=0}}c5.e=0
for(w=$.Dw(),v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u){q=w[u]
t=q.b
l=q.a
if(!r.h(0,t).d.q(0,l)||q.d>=0)continue
b5=t-5000
t=b5>=0&&b5<$.mc().length?$.mc()[b5]:null
t.toString
c5.b=l
c5.f=2
t=t.b
if(t===0)continue
else{l=q.e
j=q.f
b6=(l+j)/2
g=q.r
f=q.w
b7=(g+f)/2;--t
e=A.fu(t,b6,b7,4.02)
l=j-l
j=l+0.3
g=f-g
f=(t&1)===0
c5.aE(e,f?new A.q(j,g,0.06):new A.q(0.06,g,j),D.au)
t=A.fu(t,b6,b7,4.06)
l-=0.4
g-=0.9
c5.aF(t,f?new A.q(l,g,0.06):new A.q(0.06,g,l),B.MU,0.2)}}for(w=c7.d,v=C.eg(w,w.r,C.a6(w).c),t=v.$ti.c;v.C();){l=v.d
if(l==null)l=t.a(l)
b8=B.Io[l]
c5.b=6500+l
c5.f=2
l=new A.fBZ(c5,b8,4.12)
j=b8.c
g=j-0.9
f=b8.e
e=b8.f
d=e+0.6
l.$4(g,j+0.3,f,d)
j=b8.d
a6=j+0.9
l.$4(j-0.3,a6,f,d)
l.$4(g,a6,e-0.3,e+0.9)
if(f>0)l.$4(g,a6,f-0.9,f+0.3)}for(b9=0;b9<5;++b9){v=n[b9]
i=v.a
if(b9===0||i<1||i>5)continue
v=v.b
c5.b=6700+b9
c5.f=0
c5.e=0.4
t=b9>0
if(t)c5.x=$.dp=$.dp+1
c0=b9-1
c1=(c0&1)===0?144:120
new A.fC5(i).$2(new A.fC1(i,!(c8>=v)),new A.fC0(c1,o,c0))
if(t)c5.x=0}c5.e=0
c5.f=2
c2=new A.fC4(c5)
a1=new A.fC2(c5)
c3=new A.fC7(c5,c2,a1)
A:{if("sheet"===c9){for(w=$.mc(),v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u){m=w[u]
t=m.a
if(!r.h(0,t).a){if(!(m.d-m.c<47.9))if(m.b===0)n=m.f-m.e<95.9
else n=!1
else n=!0
n=!n||r.h(0,t).b}else n=!1
if(n)c3.$3(t,m,D.ba)}break A}if("cut"===c9){for(w=$.mc(),v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u){m=w[u]
if(!(m.d-m.c<47.9))if(m.b===0)t=m.f-m.e<95.9
else t=!1
else t=!0
if(t){t=m.a
t=!r.h(0,t).b&&!r.h(0,t).a}else t=!1
if(t)c3.$3(m.a,m,D.cG)}break A}if("screw"===c9){for(w=$.mc(),v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u){m=w[u]
t=m.a
k=r.h(0,t)
if(k.a&&!k.c)c3.$3(t,m,D.bs)}break A}if("saw"===c9){for(w=$.Dw(),v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u){q=w[u]
t=q.b
k=r.h(0,t)
if(!k.a||k.d.q(0,q.a))continue
b5=t-5000
t=b5>=0&&b5<$.mc().length?$.mc()[b5]:null
t.toString
n=c5.b=q.a
c5.f=3
c5.e=0.9
c5.d=0.45
t=t.b
l=t===0
j=q.e
g=q.f
f=q.w
e=q.r
d=j+g
a6=g-j
if(l)c5.aE(new A.q(d/2,95.1,0),new A.q(a6+2,0.2,f-e+2),D.aw)
else{a7=t-1
d=A.fu(a7,d/2,(e+f)/2,4.15)
a8=q.d>=0
a6+=a8?0:2
a8=a8?0:2
a8=f-e+a8
c5.aE(d,(a7&1)===0?new A.q(a6,a8,0.12):new A.q(0.12,a8,a6),D.aw)}c5.d=1
c5.e=0
c5.f=2
d=j+g
j=g-j
g=f-e
if(l){t=d/2
c2.$3(n,new A.q(t,94.5,0),new A.q(j+6,2,g+6))
a1.$4$r(n,new A.q(t,94.5,0),D.aw,2)}else{--t
d/=2
f=(e+f)/2
e=A.fu(t,d,f,4.4)
j=Math.max(8,j)
g=Math.max(10,g)
c2.$3(n,e,(t&1)===0?new A.q(j,g,0.8):new A.q(0.8,g,j))
t=A.fu(t,d,f,5.8)
a1.$4$r(n,t,D.aw,q.d>=0?3.5:1.8)}}break A}if("bead"===c9){for(b5=0;b5<2;++b5){if(w.q(0,b5)||!c7.aIW(b5))continue
b8=B.Io[b5]
v=c5.b=6500+b5
c5.f=3
c5.e=0.9
c5.d=0.4
t=b8.b
r=b8.c
n=b8.d
l=(r+n)/2
j=b8.e
g=b8.f
f=(j+g)/2
e=A.fu(t,l,f,4.15)
r=n-r
n=r+4
j=g-j
g=j+4
d=(t&1)===0
c5.aE(e,d?new A.q(n,g,0.1):new A.q(0.1,g,n),B.N9)
c5.d=1
c5.e=0
c5.f=2
n=A.fu(t,l,f,4.4)
r+=8
j+=8
c2.$3(v,n,d?new A.q(r,j,0.8):new A.q(0.8,j,r))
a1.$4$r(v,A.fu(t,l,f,6.5),B.N9,3.5)}break A}w="mud"===c9
if(w||"tape"===c9||"sand"===c9||"paint"===c9){B:{if(w){w=B.f7X
break B}if("tape"===c9){w=B.f7K
break B}if("sand"===c9){w=B.f8z
break B}w=B.f8A
break B}for(b9=0;b9<5;++b9){if(!w.q(0,n[b9].a))continue
if(b9===0){c5.b=6700
c5.f=3
c5.e=0.8
c5.d=0.22
c5.aE(B.h1c,B.hfk,D.aJ)
c5.d=1
c5.e=0
c5.f=2
c2.$3(6700,B.hfZ,B.h4l)
a1.$4$r(6700,B.h3k,D.aJ,4)}else{c0=b9-1
v=c5.b=6700+b9
c5.f=3
c5.e=0.8
c5.d=0.22
t=(c0&1)===0
r=A.fu(c0,(t?144:120)/2,48,4.4)
l=(t?144:120)-1
c5.aE(r,t?new A.q(l,94,0.2):new A.q(0.2,94,l),D.aJ)
c5.d=1
c5.e=0
c5.f=2
r=A.fu(c0,(t?144:120)/2,48,4.7)
l=t?144:120
c2.$3(v,r,t?new A.q(l,94,1):new A.q(1,94,l))
a1.$4$r(v,A.fu(c0,(t?144:120)/2,70,7),D.aJ,4)}}}}w=C.U(x.S,x.q)
for(v=$.mc(),t=v.length,u=0;u<v.length;v.length===t||(0,C.K)(v),++u){m=v[u]
r=m.b
n=r===0
l=n?"Ceiling sheet":"Wall sheet"
j=m.c+m.d
r=n?new A.q(j/2,96,(m.e+m.f)/2):A.fu(r-1,j/2,48,3.5)
w.n(0,m.a,new A.cL(l,"A sheet of 1/2 inch drywall: gypsum between two layers of paper. A whole sheet is 4 by 8 feet.",r,90))}for(v=$.Dw(),t=v.length,u=0;u<v.length;v.length===t||(0,C.K)(v),++u){q=v[u]
r=q.d
n=q.e+q.f
r=r>=0?A.fu(B.Io[r].b,n/2,40,3.5):new A.q(n/2,60,0)
w.n(0,q.a,new A.cL(q.c,"A hole to cut in the sheet.",r,90))}for(b5=0;b5<2;++b5){v=B.Io[b5]
w.n(0,6500+b5,new A.cL("Corner bead","Metal angle nailed on an outside corner (the corner of the door or window opening).",A.fu(v.b,(v.c+v.d)/2,40,3.5),100))}for(m=0;m<5;++m){v=B.a5O[m]
t=v[0]
v=D.a.b3(v,1)
if(m===0)r=B.h3i
else{r=m-1
r=A.fu(r,((r&1)===0?144:120)/2,48,3.5)}w.n(0,6700+m,new A.cL(t.toUpperCase()+v,"All the joints and screw heads here get mud, tape, three coats, sanding and primer.",r,110))}for(v=B.Du.gdR(B.Du),v=v.gaf(v);v.C();){t=v.gS(v)
r=t.a
t=t.b
w.n(0,r,new A.cL(t.a,t.b,t.c,60))}w.v(0,A.ah1(c6,"look").b)
return new A.qW(c4,w,B.uV,B.qH,B.aQQ,!0,0)},
i34(d){var w,v,u
d.f=2
d.b=0
d.b=7010
d.kX(B.hio,B.h7n,B.bdV,0.02,2)
for(w=0;w<6;++w)d.aE(new A.q(-40,0.5+w,52.1),B.hfr,B.bgc)
d.aE(B.hcJ,B.hgK,B.aie)
d.b=7011
d.d1(B.h71,B.hhC,6.6,B.bt8,0.2,16)
d.d1(B.h7b,B.h72,6.7,B.ber,0.2,16)
d.d1(B.hfp,B.hlp,5.8,B.FH,0.1,16)
d.aF(B.h74,B.hkM,B.hP,0.9)
d.aF(B.h6d,B.h64,B.u8,0.2)
d.b=7012
for(v=0;v<2;++v){u=B.c8F[v]
d.nw(new A.q(u,0,24),new A.q(u,2.1,24),3.4,1,B.ahX,0.05,14)}d.b=7013
d.aF(B.hh0,B.hcp,B.hP,0.9)
d.aF(B.h1a,B.heh,B.u8,0.2)
d.b=7014
d.aF(B.hiV,B.hgW,B.Yp,0.4)
d.aF(B.hjB,B.hl0,B.u8,0.3)
d.d1(B.hjn,B.h8d,1.2,B.agb,0.8,10)
d.b=7015
d.aF(B.heu,B.h95,B.af8,0.7)
d.aF(B.haZ,B.hkU,B.u8,0.2)
d.b=7016
d.aF(B.hhj,B.h7F,B.boE,0.1)
d.aF(B.hbX,B.hkA,B.bgY,0.05)
d.b=7017
for(w=0;w<3;++w)d.aF(new A.q(58+w*2.2,0.7,-8),B.h61,B.N9,0.8)
d.b=7018
d.aF(B.hjf,B.h91,B.btY,0.2)
d.d1(B.h9t,B.aYr,2.2,B.bt9,0.1,12)
d.d1(B.aYr,B.heC,0.35,B.af8,0.8,6)
d.b=7019
d.aF(B.hfK,B.heK,B.hP,0.9)
d.aF(B.hla,B.hj4,B.Yz,0.5)
d.aF(B.hgT,B.hbO,B.Yp,0.3)
A.De(d,7010,B.hf7,B.h7o)
A.De(d,7011,B.aXW,B.h4F)
A.De(d,7012,B.aXY,B.h4h)
A.De(d,7013,B.aZ9,B.h5G)
A.De(d,7014,B.aYR,B.h5I)
A.De(d,7015,B.aYI,B.h7J)
A.De(d,7016,B.aYV,B.h7N)
A.De(d,7017,B.aYE,B.h3N)
A.De(d,7018,B.aYU,B.h5H)
A.De(d,7019,B.hjg,B.h4R)},
idy(a9,b0,b1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=C.a([],x.z),a4=new A.f3(a3),a5=new A.fEl(a4,b1),a6=a9.c[0],a7=a6.a,a8=!(b0>=a6.b)
for(a6=D.d.gaf($.mc()),w=new C.eR(a6,new A.fEk()),v=a9.b,u=a7<6,t=a7===0,s=a7>=5;w.C();){r=a6.gS(0)
q=r.a
p=v.h(0,q)
if(!p.a)continue
a4.b=q
o=a4.e=0
n=r.c
m=r.d
l=r.e
r=r.f
a5.$6(n+0.1,m-0.1,l+0.1,r-0.1,95.5,A.hwS(a7,q))
if(p.c&&u){if(t)k=B.ah1
else if(s)k=B.Mu
else{q=a8?B.N5:B.FH
k=q}j=t?0.42:1.3
a4.e=0.9
for(i=l+6,r-=2,++n,--m;o<10;++o){h=-70+o*15.555555555555555
if(h<n||h>m)continue
for(q=h-j,l=h+j,g=i;g<r;g+=12)a5.$6(q,l,g-j,g+j,95.49,k)}}}if(a7>=1&&a7<=5){a4.b=6700
a6=C.a([5.5],x.n)
if(a7>=2)a6.push(4.6)
if(a7>=3)a6.push(10)
w=a7>=4
if(w)a6.push(14)
u=a6.length
t=a7-1
f=0
e=0
for(;e<a6.length;a6.length===u||(0,C.K)(a6),++e){d=a6[e]
if(f===1)a0=B.ahQ
else{if(a8)r=f===(w?3:t)
else r=!1
if(s)a0=B.Mu
else{r=r?B.N5:B.FH
a0=r}}a1=95.49-f*0.01
a4.e=0.4+f*0.1
for(r=d/2,a2=0;a2<2;++a2){h=E.Sf[a2]
a5.$6(h-r,h+r,-59,59,a1,a0)}a5.$6(-71,71,36-r,36+r,a1,a0)
for(r=d*0.3,a2=0;a2<2;++a2){i=B.cQM[a2]
a5.$6(-71,71,i-r,i+r,a1,a0)}for(a2=0;a2<2;++a2){h=B.d28[a2]
a5.$6(h-r,h+r,-59,59,a1,a0)}++f}}for(a6=$.Dw(),w=a6.length,e=0;e<a6.length;a6.length===w||(0,C.K)(a6),++e){a0=a6[e]
u=a0.b
t=a0.a
s=!0
if(v.h(0,u).d.q(0,t))if(a0.d<0){o=u-5000
u=(o>=0&&o<$.mc().length?$.mc()[o]:null).b!==0}else u=s
else u=s
if(u)continue
a4.b=t
a4.e=1.2
u=a0.e
t=a0.f
s=a0.r
r=a0.w
a5.$6(u-0.15,t+0.15,s-0.15,r+0.15,95.47,D.au)
a4.e=1.4
a5.$6(u+0.5,t-0.5,s+0.5,r-0.5,95.46,B.MU)}return a3},
zh:function zh(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
Mu:function Mu(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
fmu:function fmu(d){this.a=d},
fmv:function fmv(d,e){this.a=d
this.b=e},
fmw:function fmw(d){this.a=d},
Mv:function Mv(d){var _=this
_.c=_.b=_.a=!1
_.d=d},
a4N:function a4N(){this.b=this.a=0},
bO9:function bO9(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=0},
bOa:function bOa(d){this.a=d},
bOf:function bOf(d){this.a=d},
bOe:function bOe(d){this.a=d},
bOh:function bOh(){},
bOi:function bOi(){},
bOb:function bOb(){},
bOd:function bOd(){},
bOg:function bOg(){},
bOc:function bOc(){},
fC3:function fC3(d){this.a=d},
fC6:function fC6(d){this.a=d},
fC_:function fC_(d){this.a=d},
fBZ:function fBZ(d,e,f){this.a=d
this.b=e
this.c=f},
fC5:function fC5(d){this.a=d},
fC1:function fC1(d,e){this.a=d
this.b=e},
fC0:function fC0(d,e,f){this.a=d
this.b=e
this.c=f},
fC4:function fC4(d){this.a=d},
fC2:function fC2(d){this.a=d},
fC7:function fC7(d,e,f){this.a=d
this.b=e
this.c=f},
aqo:function aqo(d){this.a=d},
aqp:function aqp(d,e){var _=this
_.d=d
_.e=$
_.f="look"
_.r=0
_.w=null
_.x=!0
_.z=_.y=!1
_.Q=e
_.as=$
_.ax=_.at=null
_.ay=""
_.ch=null
_.CW=-99
_.cx=0
_.cy=-9
_.c=_.a=null},
ce3:function ce3(d){this.a=d},
ce4:function ce4(d){this.a=d},
cdT:function cdT(d,e,f){this.a=d
this.b=e
this.c=f},
cdU:function cdU(d){this.a=d},
cdS:function cdS(d){this.a=d},
ce5:function ce5(d,e){this.a=d
this.b=e},
cdK:function cdK(d,e){this.a=d
this.b=e},
cdL:function cdL(d,e,f){this.a=d
this.b=e
this.c=f},
cdM:function cdM(d){this.a=d},
cdN:function cdN(d,e){this.a=d
this.b=e},
cdQ:function cdQ(){},
cdO:function cdO(d,e,f){this.a=d
this.b=e
this.c=f},
cdP:function cdP(d){this.a=d},
cdJ:function cdJ(d){this.a=d},
cdI:function cdI(d){this.a=d},
cdV:function cdV(d){this.a=d},
cdR:function cdR(d){this.a=d},
cdW:function cdW(){},
cdX:function cdX(d){this.a=d},
cdY:function cdY(){},
cdZ:function cdZ(){},
ce_:function ce_(){},
ce2:function ce2(d,e){this.a=d
this.b=e},
ce1:function ce1(d){this.a=d},
ce0:function ce0(d){this.a=d},
fEl:function fEl(d,e){this.a=d
this.b=e},
fEk:function fEk(){},
fu(d,e,f,g){var w=B.dxl[d],v=B.a40[d],u=B.Dd[d]
return new A.q(w.a+v.a*e+u.a*g,f,w.c+v.c*e+u.c*g)},
id5(d,e){return A.fu(d,(d&1)===0?144:120,e,0).a7(0,B.Dd[d].aJ(0,1.75)).a7(0,B.Dd[D.o.F(d+1,4)].aJ(0,1.75))},
i1C(){var w,v,u,t,s,r,q,p,o="king",n="jack",m="cripple",l=C.a([],x.Y),k=new A.fmx(l)
for(w=0;w<4;++w){v=(w&1)===0?144:120
k.$5(w,0.75,1.5,93,"corner")
k.$5(w,v-0.75,1.5,93,"corner")
for(u=v-8,t=w===1,s=w===2,r=16;r<u;r+=16){q=s&&r>27.5&&r<71.5
p=t&&r>36&&r<80
if(q||p)continue
k.$5(w,r,1.5,93,"common")}}k.$5(2,29.25,1.5,93,o)
k.$5(2,69.75,1.5,93,o)
k.$5(2,30.75,1.5,80.5,n)
k.$5(2,68.25,1.5,80.5,n)
k.$5(2,49.5,88,93,m)
k.$5(1,37.75,1.5,93,o)
k.$5(1,78.25,1.5,93,o)
k.$5(1,39.25,1.5,72,n)
k.$5(1,76.75,1.5,72,n)
k.$5(1,48,1.5,36,m)
k.$5(1,64,1.5,36,m)
k.$5(1,58,79.5,93,m)
return l},
h1h(d){var w=d-1000
return w>=0&&w<$.Bi().length?$.Bi()[w]:null},
hCr(d){var w,v,u=d-2100
if(u<0||u>=80)return null
w=D.o.ao(u,20)
v=D.o.F(u,20)
return v<D.k.cO(((w&1)===0?144:120)/16)?new C.bqL(v,w):null},
Xa:function Xa(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
Cz:function Cz(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fmx:function fmx(d){this.a=d},
a5x:function a5x(d,e){var _=this
_.a=d
_.b=e
_.c=!1
_.d=null},
bTy:function bTy(d){this.a=d},
bTx:function bTx(d){this.a=d},
aS4(d,e){var w=new A.h21(D.o.F(d*37,17)-8,e)
return C.a_(255,w.$1(218),w.$1(182),w.$1(126))},
hxK(a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
a0.b=0
a0.f=-1
a0.kX(B.h3o,B.h4B,B.brA,0.05,4)
a0.f=0
for(w=0;w<4;++w){v=(w&1)===0
u=v?144:120
a0.x=$.dp=$.dp+1
a0.b=2000+w
if(w===2)for(t=[new C.z(0,31.5),new C.z(67.5,u)],s=w+3,r=0;r<2;++r){q=t[r]
p=q.a
o=q.b
q=A.fu(w,(p+o)/2,0.75,1.75)
n=o-p
n=v?new A.q(n,1.5,3.5):new A.q(3.5,1.5,n)
a0.aF(q,n,A.aS4(s,0.15),0.05)}else{t=A.fu(w,u/2,0.75,1.75)
s=v?new A.q(u,1.5,3.5):new A.q(3.5,1.5,u)
a0.aF(t,s,A.aS4(w+3,0.15),0.05)}t=w*20
s=2100+t
m=0
for(;;){if(!(m<D.k.cO((v?144:120)/16)))break
p=m*16
o=Math.min(u,p+16)
a0.b=s+m
q=A.fu(w,(p+o)/2,94.5,1.75)
n=o-p-0.12
n=v?new A.q(n,3,3.5):new A.q(3.5,3,n)
a0.aF(q,n,A.aS4(t+m+11,0.08),0.05)
if(a1.q(0,a0.b)){q=v?144:120
l=A.fu(w,Math.min(q,p+8),94.5,1.75)
q=l.a+0
n=l.b
k=l.c+0
a0.dm(new A.q(q,n+-1.6,k),new A.q(q,n+1.7,k),0.5,B.ahl,8)}++m}a0.x=0}for(v=$.Bi(),t=v.length,r=0;r<v.length;v.length===t||(0,C.K)(v),++r){m=v[r]
a0.f=0
a0.x=$.dp=$.dp+1
s=a0.b=m.a
q=m.e
n=m.d
j=q-n
l=A.aS4(s,0)
k=m.b
i=m.c
q=A.fu(k,i,(n+q)/2,1.75)
a0.aF(q,(k&1)===0?new A.q(1.5,j,3.5):new A.q(3.5,j,1.5),l,0.05)
a0.x=0
if(a1.q(0,s)){p=B.a40[k]
h=A.fu(k,i,20,1.75)
a0.f=2
s=p.a*0.81
q=p.b*0.81
n=p.c*0.81
k=h.a
i=h.b
g=h.c
a0.dm(new A.q(k-s,i-q,g-n),new A.q(k+s,i+q,g+n),0.5,B.ahl,8)}}a0.f=0
f=new A.fEi(a0)
f.$4(2300,B.a81,80.5,88)
f.$4(2301,B.TH,72,79.5)
f.$4(2302,B.TH,36,37.5)
a0.f=1
for(e=0;e<10;++e){a0.b=3000+e
a0.kX(new A.q(-70+e*15.555555555555555,98.75,0),B.hgd,A.aS4(e+40,0),0.05,2)}a0.f=2
a0.b=2200
v=A.fu(0,24,59,1.75)
a0.aF(v,new A.q(14.25,26,3.4),B.bkZ,0.35)
v=A.fu(0,24,59,3.55)
a0.aF(v,new A.q(12.4,22.6,0.3),B.bmD,0.45)
for(e=0;e<6;++e){d=52+e*3.4
for(v=e===5,r=0;r<2;++r){t=A.fu(0,24+F.hd[r]*2.2,d,3.8)
s=v?B.Yp:E.XT
a0.aF(t,new A.q(3.2,2.2,0.3),s,0.2)}}v=A.fu(0,24,69.8,3.8)
a0.aE(v,new A.q(8,1.6,0.25),B.m_)
a0.b=0},
hxJ(d,e,f,g,h,i){var w,v,u,t
d.f=2
d.b=e
w=g+f*1.9
v=A.fu(h,w,i,2.25)
u=(h&1)===0
d.aF(v,u?new A.q(2.3,4.2,2.5):new A.q(2.5,4.2,2.3),B.MU,0.3)
v=A.fu(h,w,i,3.52)
d.aF(v,u?new A.q(1.7,3.5,0.06):new A.q(0.06,3.5,1.7),B.ahf,0.1)
for(v=w-f*1.18,t=0;t<2;++t)d.fu(A.fu(h,v,i+B.deg[t],2.6),0.22,B.hP,3,5,0.7)},
hxI(d,e,f,g){var w
d.f=f
d.b=e
w=g+0.75+2.3
d.d1(new A.q(w,96,0),new A.q(w,99.8,0),2.3,B.MU,0.3,12)
d.dm(new A.q(w,95.95,0),new A.q(w,96.05,0),1.7,B.ahf,12)},
hy1(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=x.p,j=C.a([],k)
for(w=d.length,v=x.W,u=0;u<w;++u){t={}
s=d[u]
t.a=null
r=t.a=s.a
q=e===r?D.ay.j(0.25):D.c.j(0.07)
p=new C.aP(13,13)
o=e===t.a
n=o?D.ay:D.aX
m=new C.ay(n,o?2:1,D.r,-1)
n=o?D.ay:D.ac
n=C.X(s.c,n,l,l,l,17)
o=o?D.ay:D.c
j.push(C.aA(l,C.p(l,new C.ca(D.aL,D.e,D.P,D.m,l,D.p,l,0,C.a([n,D.ec,new C.y(s.b,l,new C.F(!0,o,l,l,l,l,12,D.H,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l),l,l,l,l,l,l,l,l,l)],k),l),D.f,l,l,new C.o(q,l,new C.bG(m,m,m,m),new C.bh(p,p,p,p),l,l,D.n),l,l,l,l,D.kO,l,l,l),D.y,!1,new C.bQ("tool-"+r,v),l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,new A.fFb(t,f),l,l,l,l,l,l,!1,D.a3))}return C.bX(D.bG,j,D.br,l,6,6)},
hy_(d,e,f){var w=d.bg1(e,f)
if(w==null)return null
return new A.q(D.k.E(w.a,-56,56),46,D.k.E(w.c,-44,44))},
hy0(d,e,f){var w,v,u,t,s,r,q,p,o=f-e
if(d==null||o<0||o>1.6)return B.wL
w=C.a([],x.z)
v=new A.f3(w)
v.f=3
v.e=2
for(u=o*0.9,t=d.a,s=d.c,r=0;r<2;++r){q=D.k.F(u+r*0.5,1)
p=3+q*14
v.d=0.85*(1-q)
v.nw(new A.q(t,0.4,s),new A.q(t,0.6,s),p,p-1.3,B.BE,0,20)}return w},
hxZ(d){var w,v,u
if(d.r==null)return B.wL
w=C.a([],x.z)
v=new A.f3(w)
v.f=-1
if(Math.sin(d.a)>-0.35){u=A.fu(1,58,54,-3)
v.aE(u,new A.q(0.5,38,40),B.aiB)}if(Math.cos(d.a)<0.35){u=A.fu(2,49.5,42,-3)
v.aE(u,new A.q(40,84,0.5),B.aiB)
u=A.fu(2,49.5,4,-2.7)
v.aE(u,new A.q(40,8,0.5),B.bnr)}return w},
De(d,e,f,g){d.b=e
d.f=3
d.e=0.9
d.d=0.02
d.aE(f,g,D.c)
d.d=1
d.e=0
d.f=2},
h21:function h21(d,e){this.a=d
this.b=e},
fEi:function fEi(d){this.a=d},
fFb:function fFb(d,e){this.a=d
this.b=e},
ah1(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=C.a([],x.z),a0=new A.f3(d),a1=a2.a
A.hxK(a0,a1)
a0.f=2
a0.b=0
a0.b=7000
a0.nw(B.h6J,B.h6I,8,3,B.Ml,0.3,20)
a0.nw(B.hgS,B.h7v,8.15,7.2,B.bi3,0.2,20)
a0.aF(B.h7O,B.hbT,B.boc,0.1)
a0.b=7001
a0.aF(B.hdZ,B.hhv,B.biN,0.4)
a0.aF(B.hfP,B.hjI,B.u8,0.3)
a0.aF(B.hfY,B.haY,B.u8,0.2)
a0.d1(B.hfa,B.aYk,1.25,B.agb,0.8,10)
a0.d1(B.aYk,B.hgZ,0.38,B.hP,0.9,6)
A.De(a0,7000,B.aXS,B.h4Z)
A.De(a0,7001,B.aYS,B.h5t)
for(w=a2.b,v=w.length,u=0;t=w.length,u<t;w.length===v||(0,C.K)(w),++u){s=w[u]
t=s.b
r=s.a
if(t==="ceiling"){t=s.f
t.toString
A.hxI(a0,r,2,-70+t*15.555555555555555)}else{t=t==="switch"?48:16
A.hxJ(a0,r,s.r,s.d,s.c,t)}}q=new A.fDg(a0)
p=new A.fDf(a0)
A:{if("drill"===a3){for(v=$.Bi(),t=v.length,u=0;u<v.length;v.length===t||(0,C.K)(v),++u){o=v[u]
r=o.d
if(!(r<=20&&o.e>=20)||a1.q(0,o.a))continue
n=o.a
m=o.b
l=o.c
p.$4$r(n,A.fu(m,l,20,4.8),B.BE,1.5)
k=o.e
l=A.fu(m,l,(r+k)/2,2.35)
r=k-r
q.$3(n,l,(m&1)===0?new A.q(7,r,4.7):new A.q(4.7,r,7))}for(j=0;j<4;++j){v=(j&1)===0
t=2100+j*20
o=0
for(;;){if(!(o<D.k.cO((v?144:120)/16)))break
B:{i=t+o
if(a1.q(0,i))break B
r=v?144:120
p.$4$r(i,A.fu(j,Math.min(r,o*16+8),94.5,4.8),D.cG,1.5)}++o}}break A}if("outlet"===a3||"switch"===a3){h=a3==="switch"?48:16
for(a1=$.Bi(),v=a1.length,u=0;u<a1.length;a1.length===v||(0,C.K)(a1),++u){o=a1[u]
if(o.f==="cripple"||D.d.b_(w,new A.fDd(o)))continue
t=o.a
r=o.b
n=o.c
p.$4$r(t,A.fu(r,n,h,5),D.ba,1.8)
m=o.d
l=o.e
n=A.fu(r,n,(m+l)/2,2.35)
m=l-m
q.$3(t,n,(r&1)===0?new A.q(7,m,4.7):new A.q(4.7,m,7))}break A}if("ceiling"===a3){if(!D.d.b_(w,new A.fDe()))for(g=0;g<10;++g){a1=3000+g
v=-70+g*15.555555555555555
p.$4$r(a1,new A.q(v,94.6,0),D.ba,1.7)
q.$3(a1,new A.q(v,97,0),B.h9L)}break A}if("cable"===a3)for(u=0;u<w.length;w.length===t||(0,C.K)(w),++u){s=w[u]
if(s.w!=null)continue
a1=s.b
if(a1==="ceiling"){a1=s.f
a1.toString
f=new A.q(-70+a1*15.555555555555555+3,98,0)}else{v=s.r
a1=a1==="switch"?48:16
f=A.fu(s.c,s.d+v*1.9,a1,3.5)}a1=s.a
q.$3(a1,f,B.aY9)
p.$4$r(a1,new A.q(f.a+0,f.b+5.5,f.c+0),B.BE,1.7)}}a1=C.U(x.S,x.q)
for(v=$.Bi(),t=v.length,u=0;u<v.length;v.length===t||(0,C.K)(v),++u){o=v[u]
r=o.gr4(0)
e=o.f
C:{if("king"===e){n="A king stud runs the full height beside a door or window. The jack stud next to it carries the header."
break C}if("jack"===e){n="A jack stud holds up the header over the opening. It stops under the header."
break C}if("cripple"===e){n="A short stud above the header, or under the window sill, keeps the 16 inch spacing going."
break C}if("corner"===e){n="A corner stud: the walls meet here and the drywall will need something to screw into."
break C}n="A 2 by 4 stud, standing 16 inches from the next one. The cable goes through a hole drilled in its middle."
break C}a1.n(0,o.a,new A.cL(r,n,A.fu(o.b,o.c,48,3.5),60))}for(j=0;j<4;++j){v=(j&1)===0
t=2100+j*20
o=0
for(;;){if(!(o<D.k.cO((v?144:120)/16)))break
r=v?144:120
a1.n(0,t+o,new A.cL("Top plate","Two boards across the tops of the studs. A cable going up to the ceiling light passes through a hole drilled in it.",A.fu(j,Math.min(r,o*16+8),94.5,3.5),60));++o}}for(j=0;j<4;++j)a1.n(0,2000+j,new A.cL("Bottom plate","The board the studs stand on, nailed to the floor.",A.fu(j,((j&1)===0?144:120)/2,1,3.5),90))
for(g=0;g<10;++g)a1.n(0,3000+g,new A.cL("Ceiling joist","A 2 by 6 across the top of the room. The ceiling drywall will be screwed to the bottom of it, and a light box hangs from the side.",new A.q(-70+g*15.555555555555555,98,0),90))
for(v=B.Du.gdR(B.Du),v=v.gaf(v);v.C();){t=v.gS(v)
r=t.a
t=t.b
a1.n(0,r,new A.cL(t.a,t.b,t.c,60))}a1.n(0,2200,B.efE)
a1.n(0,2300,B.efy)
a1.n(0,2301,B.eg2)
a1.n(0,2302,B.efF)
for(v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u){s=w[u]
t=s.b
r=t==="ceiling"
if(r)n="Ceiling box"
else n=t==="switch"?"Switch box":"Outlet box"
m=r?"The box the light will hang from.":"A plastic box nailed to the stud. The cable ends inside it, and the device goes in later."
if(r){t=s.f
t.toString
t=new A.q(-70+t*15.555555555555555,98,0)}else{t=t==="switch"?48:16
t=A.fu(s.c,s.d,t,3.5)}a1.n(0,s.a,new A.cL(n,m,t,50))}return new A.qW(d,a1,B.uV,B.qH,B.aQQ,!0,0)},
ipV(d,e,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=C.a([],x.z),f=new A.f3(g)
for(w=d.b,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u){t=w[u]
s=t.w
if(s==null)continue
r=a0.h(0,t.a)
q=D.k.E((e-(r==null?-99:r))/1.6,0,1)
p=A.ibe(s.a,q)
if(p.length<2)continue
f.b=0
f.f=2
f.e=0.6
f.Vf(p,0.36,s.b?B.ajG:B.Ml,!0,!0,0.35,6)
f.e=0}if(a1.a!==0){w=Math.sin(e*7)
for(v=C.eg(a1,a1.r,C.a6(a1).c),w=0.25+0.25*(0.5+0.5*w),r=v.$ti.c;v.C();){o=v.d
if(o==null)o=r.a(o)
n=o-1000
m=n>=0&&n<$.Bi().length?$.Bi()[n]:null
l=A.hCr(o)
if(m!=null){o=m.b
s=A.fu(o,m.c,20,1.75)
k=(o&1)===0?new A.q(8,14,7.5):new A.q(7.5,14,8)}else if(l!=null){o=l.b
j=l.a
i=(o&1)===0
h=i?144:120
s=A.fu(o,Math.min(h,j*16+8),94.5,1.75)
k=i?new A.q(14,8,7.5):new A.q(7.5,8,14)}else{s=null
k=null}if(s==null||k==null)continue
f.b=0
f.f=3
f.e=1.2
f.d=w
f.aE(s,k,G.N8)}f.d=1
f.e=0}return g},
ibe(d,e){var w,v,u,t,s,r,q,p
if(e>=1)return d
for(w=0,v=1;v<d.length;++v){u=d[v]
t=d[v-1]
w+=new A.q(u.a-t.a,u.b-t.b,u.c-t.c).gqc()}s=w*e
r=C.a([D.d.gI(d)],x.o)
for(v=1;v<d.length;++v){u=d[v]
t=v-1
q=d[t]
p=new A.q(u.a-q.a,u.b-q.b,u.c-q.c).gqc()
if(s>=p){r.push(d[v])
s-=p}else{if(s>0.01)r.push(A.oN(d[t],d[v],s/p))
break}}return r},
hxT(){var w,v,u,t,s,r,q,p=C.aV(x.S),o=C.a([],x.k),n=new A.baf(p,o)
for(w=$.Bi(),v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u){t=w[u]
if(t.d<=20&&t.e>=20)p.M(0,t.a)}for(s=0;s<4;++s){w=2100+s*20
v=(s&1)===0
t=0
for(;;){if(!(t<D.k.cO((v?144:120)/16)))break
p.M(0,w+t);++t}}r=new A.fF2()
for(u=0;u<5;++u){p=B.d1i[u]
n.UK(p.c,r.$2(p.a,p.b))}n.UK("ceiling",3004)
p=x.ha
w=C.C(o,p)
v=w.length
u=0
for(;u<w.length;w.length===v||(0,C.K)(w),++u){q=w[u]
if(q.b!=="ceiling")n.aJh(0,q.a)}p=C.C(o,p)
o=p.length
u=0
for(;u<p.length;p.length===o||(0,C.K)(p),++u){q=p[u]
if(q.b==="ceiling")n.aJh(0,q.a)}n.c=0
return n},
n7:function n7(d,e,f){this.a=d
this.b=e
this.c=f},
aW_:function aW_(d,e){this.a=d
this.b=e},
Ed:function Ed(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=1
_.w=null},
PW:function PW(d){this.b=d},
baf:function baf(d,e){var _=this
_.a=d
_.b=e
_.c=0
_.d=4000},
cEr:function cEr(){},
cEs:function cEs(d){this.a=d},
cEn:function cEn(d,e){this.a=d
this.b=e},
cEm:function cEm(d){this.a=d},
cEl:function cEl(d,e){this.a=d
this.b=e},
cEu:function cEu(d,e){this.a=d
this.b=e},
cEt:function cEt(d){this.a=d},
cEv:function cEv(d){this.a=d},
cEw:function cEw(d){this.a=d},
cEx:function cEx(){},
cEo:function cEo(){},
cEq:function cEq(){},
cEp:function cEp(d){this.a=d},
fDg:function fDg(d){this.a=d},
fDf:function fDf(d){this.a=d},
fDd:function fDd(d){this.a=d},
fDe:function fDe(){},
atr:function atr(d){this.a=d},
ats:function ats(d,e,f,g){var _=this
_.d=d
_.f=_.e=$
_.r="look"
_.w=0
_.x=null
_.y=!0
_.Q=_.z=!1
_.as=e
_.at=f
_.ax=g
_.ay=null
_.ch=-99
_.CW=0
_.cx=-9
_.c=_.a=_.db=_.cy=null},
cnc:function cnc(d){this.a=d},
cn3:function cn3(d,e,f){this.a=d
this.b=e
this.c=f},
cn4:function cn4(d){this.a=d},
cn2:function cn2(d){this.a=d},
cmW:function cmW(d,e){this.a=d
this.b=e},
cmX:function cmX(d){this.a=d},
cmV:function cmV(d){this.a=d},
cmU:function cmU(d,e,f){this.a=d
this.b=e
this.c=f},
cnd:function cnd(d,e){this.a=d
this.b=e},
cmT:function cmT(d,e){this.a=d
this.b=e},
cmP:function cmP(d){this.a=d},
cmY:function cmY(d){this.a=d},
cmZ:function cmZ(d,e){this.a=d
this.b=e},
cn_:function cn_(d,e,f){this.a=d
this.b=e
this.c=f},
cn0:function cn0(d){this.a=d},
cmS:function cmS(d){this.a=d},
cmQ:function cmQ(d){this.a=d},
cmR:function cmR(d){this.a=d},
cn5:function cn5(d){this.a=d},
cn1:function cn1(d){this.a=d},
cn6:function cn6(){},
cn7:function cn7(){},
cnb:function cnb(d,e){this.a=d
this.b=e},
cn9:function cn9(d){this.a=d},
cn8:function cn8(d){this.a=d},
cna:function cna(){},
fF2:function fF2(){},
fF3:function fF3(d,e){this.a=d
this.b=e}},B,K,E,Ao,F,Q,L,Ap,R,O,Aq
J=c[1]
C=c[0]
D=c[2]
A2=c[107]
Aa=c[118]
Ab=c[88]
Ac=c[133]
H=c[96]
P=c[122]
I=c[106]
A3=c[135]
Ad=c[117]
Ae=c[132]
A4=c[83]
Af=c[115]
S=c[119]
Ag=c[124]
M=c[92]
A5=c[85]
T=c[127]
Ah=c[113]
X=c[131]
A6=c[130]
Y=c[125]
Z=c[129]
Ai=c[123]
A_=c[98]
A0=c[114]
Aj=c[104]
Ak=c[38]
G=c[108]
Al=c[134]
U=c[102]
V=c[121]
A1=c[120]
Am=c[136]
A7=c[116]
A8=c[101]
W=c[109]
A9=c[126]
An=c[128]
N=c[100]
A=a.updateHolder(c[26],A)
B=c[95]
K=c[28]
E=c[99]
Ao=c[69]
F=c[97]
Q=c[33]
L=c[105]
Ap=c[110]
R=c[112]
O=c[103]
Aq=c[111]
A.f1n.prototype={
a6(){return"_RadioType."+this.b}}
A.aa3.prototype={
R(){return new A.aey(null,this.$ti.k("aey<1>"))}}
A.aey.prototype={
gcpH(){var w=this.e
return w===$?this.e=new A.bq1(this):w},
gamo(){var w=this.Gj$
w=w==null?null:w.gaqh()
return w==null?this.a.d:w},
gaA8(){this.a.toString
return!0},
bXs(){var w=this,v=w.a.c,u=w.gamo()
if(v===u)return
w.a5x(v===w.gamo()?null:v)},
a5x(d){var w=this.Gj$
if(w!=null)w.glK().$1(d)
this.a.e.$1(d)},
d6(){var w,v=this
v.eH()
w=v.c
w.toString
v.sa70(Q.h7s(w,v.$ti.c))},
t(){this.sa70(null)
var w=this.d
if(w!=null)w.t()
this.a1()},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.a
m.toString
switch(0){case 0:w=o.gcpH()
v=w.a.gamo()
o.a.toString
u=new C.I_(!0,Q.hVF(n,!1,n,o.gaA8(),n,w,v,n,n,D.kt,n,n,n,n,n,!1,m.c,o.$ti.c),n)
break}C.anl(d)
o.a.toString
A:{m=new C.z(u,n)
break A}t=C.R(d)
s=Q.h7t(d)
o.a.toString
w=s.b
w=w==null?n:w.aU(C.aV(x.c1))
r=w
if(r==null)r=t.ax.y
w=o.a.at
v=o.gaA8()
q=o.gaA8()?o.gbXr():n
p=o.d
if(p==null){p=C.k6(!0,n,!0,!0,n,n,!1)
o.d=p}return new C.zC(C.dH(!1,n,!0,n,v,p,n,n,!1,n,n,m.a,n,n,n,n,q,!1,r,n,n,n,n,n,n,w,n,m.b,n),n)}}
A.bq1.prototype={
gaqh(){return this.a.gamo()},
glK(){return this.a.gLX()},
bjU(d){},
bl0(d){},
gdd(d){return this.a}}
A.aOe.prototype={}
A.q.prototype={
a7(d,e){return new A.q(this.a+e.a,this.b+e.b,this.c+e.c)},
aG(d,e){return new A.q(this.a-e.a,this.b-e.b,this.c-e.c)},
aJ(d,e){return new A.q(this.a*e,this.b*e,this.c*e)},
G3(d){var w=this.b,v=d.c,u=this.c,t=d.b,s=d.a,r=this.a
return new A.q(w*v-u*t,u*s-r*v,r*t-w*s)},
gqc(){var w=this.a,v=this.b,u=this.c
return Math.sqrt(w*w+v*v+u*u)},
gmX(d){var w=this,v=w.gqc()
return v<1e-9?w:new A.q(w.a/v,w.b/v,w.c/v)}}
A.kr.prototype={}
A.cL.prototype={}
A.hi.prototype={}
A.qW.prototype={}
A.fo.prototype={}
A.f3.prototype={
WR(){var w=this.x
if(!(w!==0))if(this.r){w=$.dp+1
$.dp=w}else w=0
this.w=w},
aJk(d,e,f,g,h,i,j,k){var w=this,v=i.gmX(0)
w.a.push(new A.kr(C.a([d,e,f,g],x.o),v,h,w.b,j,w.d,k,w.c,w.e,w.f,w.w))},
xe(d,e,f,g,h,i){return this.aJk(d,e,f,g,h,i,0,!1)},
bjJ(d,e,f,g,h,i,j){return this.aJk(d,e,f,g,h,i,0,j)},
cYy(d,e,f,g,h,i,j){return this.aJk(d,e,f,g,h,i,j,!1)},
a7o(d,e,f,g,h,i){var w=this,v=(h==null?e.aG(0,d).G3(f.aG(0,d)):h).gmX(0)
w.a.push(new A.kr(C.a([d,e,f],x.o),v,g,w.b,0,w.d,i,w.c,w.e,w.f,w.w))},
bkT(d,e,f,g){return this.a7o(d,e,f,g,null,!0)},
By(d,e,f,g,h,i,j,k){var w,v,u,t,s,r
this.WR()
w=e.a/2
v=e.b/2
u=e.c/2
t=new A.c0O(this,j,new A.c0P(k,d),new A.c0Q(k),f,h)
if((i&1)===0)t.$4(new A.q(0,0,1),new A.q(-w,-v,u),new A.q(2*w,0,0),new A.q(0,2*v,0))
if((i&2)===0)t.$4(new A.q(0,0,-1),new A.q(w,-v,-u),new A.q(-2*w,0,0),new A.q(0,2*v,0))
if((i&4)===0)t.$4(new A.q(1,0,0),new A.q(w,-v,u),new A.q(0,0,-2*u),new A.q(0,2*v,0))
if((i&8)===0)t.$4(new A.q(-1,0,0),new A.q(-w,-v,-u),new A.q(0,0,2*u),new A.q(0,2*v,0))
if(g){s=-w
r=2*w
t.$4(new A.q(0,1,0),new A.q(s,v,u),new A.q(r,0,0),new A.q(0,0,-2*u))
t.$4(new A.q(0,-1,0),new A.q(s,-v,-u),new A.q(r,0,0),new A.q(0,0,2*u))}},
aF(d,e,f,g){return this.By(d,e,f,!0,g,0,1,0)},
aE(d,e,f){return this.By(d,e,f,!0,0,0,1,0)},
kX(d,e,f,g,h){return this.By(d,e,f,!0,g,0,h,0)},
hn(d,e,f,g){return this.By(d,e,f,!0,0,0,g,0)},
aEn(d,e,f,g,h){return this.By(d,e,f,g,h,0,1,0)},
alf(d,e,f,g,h,i){return this.By(d,e,f,!0,g,h,i,0)},
ww(d,e,f,g,h){return this.By(d,e,f,!0,g,0,1,h)},
cJX(d,e,f,g,h,i){return this.By(d,e,f,g,h,0,i,0)},
aEm(d,e,f,g){return this.By(d,e,f,!0,0,0,1,g)},
yY(b3,b4,b5,b6,b7,b8,b9,c0,c1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this
b2.WR()
w=b4.aG(0,b3).gmX(0)
v=w.b
u=w.G3(Math.abs(v)<0.9?B.e8:B.h1).gmX(0)
t=w.G3(u).gmX(0)
s=b9<0?b5:b9
r=new A.c0R(u,c1,t)
for(q=b2.a,p=b3.a,o=b3.b,n=b3.c,m=b4.a,l=b4.b,k=b4.c,j=x.o,i=w.a*-1,v*=-1,h=w.c*-1,g=0;g<c1;){f=r.$1(g);++g
e=r.$1(g)
d=f.a
a0=e.a
a1=f.b
a2=e.b
a3=f.c
a4=e.c
a5=new A.q(d+a0,a1+a2,a3+a4).gmX(0)
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
q.push(new A.kr(C.a([new A.q(a6,a7,a8),new A.q(a9,b0,b1),new A.q(a0,a2,a4),new A.q(d,a1,a3)],j),a5,b6,b2.b,c0,b2.d,b8,b2.c,b2.e,b2.f,b2.w))
if(b7){q.push(new A.kr(C.a([b3,new A.q(a9,b0,b1),new A.q(a6,a7,a8)],j),new A.q(i,v,h),b6,b2.b,c0,b2.d,!1,b2.c,b2.e,b2.f,b2.w))
q.push(new A.kr(C.a([b4,new A.q(d,a1,a3),new A.q(a0,a2,a4)],j),w,b6,b2.b,c0,b2.d,!1,b2.c,b2.e,b2.f,b2.w))}}},
d1(d,e,f,g,h,i){return this.yY(d,e,f,g,!0,!1,-1,h,i)},
dm(d,e,f,g,h){return this.yY(d,e,f,g,!0,!1,-1,0,h)},
cOw(d,e,f,g,h,i,j){return this.yY(d,e,f,g,h,!1,-1,i,j)},
a4J(d,e,f,g,h,i,j,k){return this.yY(d,e,f,g,h,i,-1,j,k)},
yX(d,e,f,g,h,i,j){return this.yY(d,e,f,g,!0,!1,h,i,j)},
Lh(d,e,f,g,h,i){return this.yY(d,e,f,g,h,!1,-1,0,i)},
Li(d,e,f,g,h,i){return this.yY(d,e,f,g,!0,!1,h,0,i)},
Ts(d,e,f,g,h,i,j){return this.yY(d,e,f,g,h,!1,i,0,j)},
fu(a7,a8,a9,b0,b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6=this
a6.WR()
w=new A.c0N(b0,b1)
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
v.push(new A.kr(C.a([new A.q(u+i*a8,t+h*a8,s+g*a8),new A.q(u+f*a8,t+e*a8,s+d*a8),new A.q(u+a0*a8,t+a1*a8,s+a2*a8),new A.q(u+a3*a8,t+a4*a8,s+a5*a8)],r),new A.q(i+f+a0+a3,h+e+a1+a4,g+d+a2+a5).gmX(0),a9,a6.b,b2,a6.d,!1,a6.c,a6.e,a6.f,a6.w))}},
bcL(d,e,f,g){return this.fu(d,e,f,6,10,g)},
ee(d,e,f,g,h){return this.fu(d,e,f,g,h,0.4)},
apy(d,e,f,g,h,i,j,k){var w,v,u,t,s
this.WR()
for(w=0;v=w+1,v<d.length;w=v){u=d[v]
t=d[w]
if(new A.q(u.a-t.a,u.b-t.b,u.c-t.c).gqc()<0.000001)continue
u=d[w]
t=d[v]
if(g)s=w===0||w===d.length-2
else s=!1
this.a4J(u,t,e,f,s,h,j,k)}if(i)for(u=e*0.98,w=1;v=w+1,v<d.length;w=v)this.fu(d[w],u,f,4,k,j)},
Vf(d,e,f,g,h,i,j){return this.apy(d,e,f,g,!1,h,i,j)},
iV(d,e,f,g,h,i){return this.apy(d,e,f,!0,!1,g,h,i)},
nw(a4,a5,a6,a7,a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=this
a3.WR()
a3.cOw(a4,a5,a6,a8,!1,a9,b0)
w=a5.aG(0,a4).gmX(0)
v=w.G3(Math.abs(w.b)<0.9?B.e8:B.h1).gmX(0)
u=new A.c0S(v,b0,w.G3(v).gmX(0))
for(t=[new C.z(a4,w.aJ(0,-1)),new C.z(a5,w)],s=a3.a,r=x.o,q=0;q<2;++q){p=t[q]
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
s.push(new A.kr(C.a([new A.q(p+i*a7,m+h*a7,l+j*a7),new A.q(p+f*a6,m+e*a6,l+g*a6),new A.q(p+a0*a6,m+a1*a6,l+d*a6),new A.q(p+a2.a*a7,m+a2.b*a7,l+a2.c*a7)],r),n,a8,a3.b,a9,a3.d,!1,a3.c,a3.e,a3.f,a3.w))}}},
d_2(d,e,f,g,h,i){return this.nw(d,e,f,g,h,i,16)}}
A.uE.prototype={
aZQ(d){var w,v,u,t,s,r,q,p,o,n,m,l=this
if(d&&l.c!==l.x)l.w=l.c
w=D.k.E(l.w,l.e,l.f)
l.y=1
v=l.r
if(v!=null){u=Math.cos(l.b)
t=Math.sin(l.a)
s=Math.sin(l.b)
r=Math.cos(l.a)
q=new A.bKg()
p=l.d
o=v.a
p=q.$4(-u*t,p.a,o[0]+5,o[1]-5)
r=q.$4(u*r,l.d.c,o[2]+5,o[3]-5)
n=Math.min(Math.min(C.jh(p),C.jh(r)),C.jh(q.$4(s,l.d.b,4,o[4]-5)))
m=Math.min(w,Math.max(l.e,n))
if(l.z&&w>m)l.y=D.k.E(Math.sqrt(m/w),0.5,1)}else m=w
l.x=l.c=m},
ae4(){return this.aZQ(!0)},
pe(d){var w,v,u,t=this
t.CW=d
if(!d){w=t.a
v=t.ay
u=t.ch
t.a=D.k.E(w,v-u,v+u)}t.aW()},
hb(d,e,f,g){var w=this
w.cx=f
w.cy=d
w.db=g
w.dx=e
w.aW()},
D0(d){return this.hb(null,null,d,null)},
a7X(d,e,f){return this.hb(d,e,f,null)},
zN(d,e){return this.hb(d,null,e,null)},
Ht(d,e,f,g){var w=this
w.dx=w.db=w.cy=w.cx=null
w.d=f
w.c=d
w.a=g
w.b=e
w.ae4()
w.aW()},
a7c(d){var w,v,u,t=this
if(!(t.cx!=null||t.cy!=null||t.db!=null||t.dx!=null))return
w=1-Math.exp(-d*7)
if(t.cy!=null&&t.c!==t.x)t.w=t.c
v=t.cx
if(v!=null){u=A.oN(t.d,v,w)
t.d=u
if(u.aG(0,v).gqc()<0.02){v=t.cx
v.toString
t.d=v
t.cx=null}}v=t.cy
if(v!=null){u=t.c
u+=(v-u)*w
t.c=u
if(Math.abs(u-v)<0.05){t.c=v
t.cy=null}}v=t.db
if(v!=null){u=t.a
u+=(v-u)*w
t.a=u
if(Math.abs(u-v)<0.003){t.a=v
t.db=null}}v=t.dx
if(v!=null){u=t.b
u+=(v-u)*w
t.b=u
if(Math.abs(u-v)<0.003){t.b=v
t.dx=null}}t.ae4()
t.aW()},
d0k(d,e){var w,v,u,t,s=this,r=e.a,q=e.b,p=Math.min(r,q)*1.15*s.y,o=Math.cos(s.a),n=Math.sin(s.a)
q=new A.bKn(s,new A.bKo(Math.cos(s.b),Math.sin(s.b),o,n),(d.a-r/2)/p,-(d.b-q/2)/p)
w=q.$1(0)
r=q.$1(1).c
v=w.c
u=r-v
if(Math.abs(u)<1e-9)return null
t=(0-v)/u
if(t<=0)return null
return q.$1(t)},
bg2(d,e,f){var w,v,u,t,s=this,r=e.a,q=e.b,p=Math.min(r,q)*1.15*s.y,o=Math.cos(s.a),n=Math.sin(s.a)
q=new A.bKh(s,new A.bKi(Math.cos(s.b),Math.sin(s.b),o,n),(d.a-r/2)/p,-(d.b-q/2)/p)
w=q.$1(0)
r=q.$1(1).b
v=w.b
u=r-v
if(Math.abs(u)<1e-9)return null
t=(f-v)/u
if(t<=0)return null
return q.$1(t)},
bg1(d,e){return this.bg2(d,e,0)},
apR(d){var w,v=this
v.cy=null
w=v.c
if(w!==v.x)v.w=w
v.w=D.k.E(Math.max(v.w,w)*d,v.e,v.f)
v.aZQ(!1)
v.aW()}}
A.bVN.prototype={
cXM(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this.a,f=g.length-1,e=a0.a,d=a0.b
for(;;){if(!(f>=0)){w=0
v=null
break}if(g[f].a.gbu().a.contains(e,d)){u=g[f]
w=u.b
u=u.a.gbu().a.getBounds()
v=new C.a3(u[0],u[1],u[2],u[3])
break}--f}if(w!==0&&v.gdE()<16)return w
for(u=g.length,t=0,s=1/0,r=0;r<g.length;g.length===u||(0,C.K)(g),++r){q=g[r]
p=q.a.gbu().a.getBounds()
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
A.b6X.prototype={
gGY(d){var w=this.r.a
return w==null?0:w},
cjG(b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=null,a8=b2.a,a9=b2.b,b0=new C.a3(0,0,0+a8,0+a9)
$.S()
w=C.J()
w.sam(B.c69.aA(0,b0))
b1.aQ(b0,w)
v=this.c.a*90
w=b1.a
J.bl(w.save())
w.translate(a8*0.45-v,a9*0.3)
b1.io(0,-0.45)
for(u=x.O,t=0;t<3;++t){s=C.bK(D.I,a9*(0.2-t*0.05),a8*(1.9-t*0.4))
r=[B.bi8,D.aJ,D.rs][t]
q=new C.ao(D.Q,D.M,D.S,D.T,D.R)
q.sam(new C.c_(D.A,0.5,D.x,a7,0,C.a([r.j(0.3-t*0.07),r.j(0)],u),a7,a7).aA(0,s))
p=q.G()
w.drawOval(C.bH(s),p)
p.delete()}w.restore()
o=new C.e6()
o.cZ(11)
n=C.J()
for(q=this.r,t=0;t<170;++t){m=D.k.F(D.k.F(o.ag()*a8*1.5-v*(0.4+o.ag()*0.6),a8)+a8,a8)
l=o.ag()
k=o.ag()
j=q.a
if(j==null)j=0
n.r=D.c.j((0.35+0.65*k)*(0.55+0.45*Math.sin(j*(1+k*2)+t))).gp(0)
p=n.G()
w.drawCircle(m,l*a9*0.85,0.5+k*1.4,p)
p.delete()}l=a8*0.8-v*0.3
j=a9*0.17
i=new C.u(l,j)
h=Math.min(a8,a9)*0.12
g=h*1.5
f=$.S()
e=C.J()
e.sam(new C.c_(D.A,0.5,D.x,a7,0,C.a([D.aJ.j(0.28),B.bp8],u),a7,a7).aA(0,C.bY(i,g)))
b1.ad(i,g,e)
J.bl(w.save())
f=new C.aF(f.r,D.ag,a7,a7,C.a([],x.g))
f.D(new C.jM(C.bY(i,h)))
b1.mM(0,f)
f=C.J()
f.sam(B.ewu.aA(0,C.bY(i,h)))
b1.ad(i,h,f)
d=C.J()
d.r=B.bix.gp(0)
for(a0=0;a0<4;++a0){u=B.d3d[a0].a
a1=u[0]
a2=u[1]
a3=u[2]
a4=u[3]
u=q.a
u=C.bK(new C.u(l+(a1*h+Math.sin((u==null?0:u)*0.05)*h*0.08),j+a2*h),a4*h*2,a3*h*2)
p=d.G()
w.drawOval(C.bH(u),p)
p.delete()}$.S()
a5=C.J()
a5.r=D.c.j(0.55).gp(0)
for(u=h*0.16,a0=0;a0<3;++a0){q=B.d05[a0]
q=C.bK(new C.u(l+q.a*h,j+q.b*h),u,q.c*h*2)
p=a5.G()
w.drawOval(C.bH(q),p)
p.delete()}u=i.a7(0,new C.u(h*0.45,h*0.35))
$.S()
q=C.J()
q.r=D.w.j(0.38).gp(0)
b1.ad(u,h,q)
w.restore()
a6=new C.u(a8*0.18-v*0.2,a9*0.12)
w=C.J()
w.r=B.bjO.gp(0)
b1.ad(a6,h*0.28,w)
w=h*0.05
q=a6.a7(0,new C.u(h*0.08,w))
u=C.J()
u.r=B.agE.gp(0)
b1.ad(q,h*0.07,u)
u=-h
u=a6.a7(0,new C.u(u*0.1,u*0.09))
q=C.J()
q.r=B.agE.gp(0)
b1.ad(u,w,q)},
a4(j4,j5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1,e2,e3,e4,e5,e6,e7,e8,e9,f0,f1,f2,f3,f4,f5,f6,f7,f8,f9,g0,g1,g2,g3,g4,g5,g6,g7,g8,g9,h0,h1,h2,h3,h4,h5,h6,h7,h8,h9,i0,i1,i2,i3,i4,i5,i6,i7,i8,i9,j0,j1=this,j2=null,j3={}
if(j1.z)j1.cjG(j4,j5)
else{w=0+j5.a
v=0+j5.b
$.S()
u=C.J()
t=j1.y
s=C.ar(t,D.c,0.06)
s.toString
u.sam(new C.a9(D.b0,D.b6,D.x,C.a([s,t],x.O),j2,j2).aA(0,new C.a3(0,0,w,v)))
j4.aQ(new C.a3(0,0,w,v),u)}r=j5.a
q=j5.b
w=j1.c
p=Math.min(r,q)*1.15*w.y
o=r/2
n=q/2
m=Math.cos(w.a)
l=Math.sin(w.a)
k=Math.cos(w.b)
j=Math.sin(w.b)
i=new A.cvj(m,l,k,j)
h=new A.cvk(j1,i)
j3.a=!1
j3.b=0
v=j1.b
g=v.e
if(g!=null){u=w.d
t=w.c*k
f=u.a-t*l
e=u.c+t*m
u=g.a
t=u[0]
d=!0
if(!(f<t-1))if(!(f>u[1]+1)){if(!(e<u[2]-1))s=v.f&&e>u[3]+1
else s=d
d=s}j3.a=d
if(d)j3.b=h.$1(new A.q((t+u[1])/2,40,(u[2]+u[3])/2)).c
u=d}else u=!1
t=x.S
s=x.i
a0=C.U(t,s)
a1=C.U(t,t)
if(u)for(u=v.a,a2=u.length,a3=0;a3<u.length;u.length===a2||(0,C.K)(u),++a3){a4=u[a3]
if(a4.y!==0||a4.z===0)continue
for(a5=a4.a,a6=a5.length,a7=0,a8=0;a8<a5.length;a5.length===a6||(0,C.K)(a5),++a8)a7+=h.$1(a5[a8]).c
a6=a4.z
a9=a0.h(0,a6)
if(a9==null)a9=0
a0.n(0,a6,a9+a7/a5.length)
a5=a1.h(0,a6)
a1.n(0,a6,(a5==null?0:a5)+1)}u=v.r
b0=u<=0?0:1800+(u-1800)*D.k.E((w.c-200)/600,0,1)
b1=Math.max(Math.max(w.c*2.4+450,b0),w.as)
b2=C.U(t,s)
b3=C.U(t,t)
b4=B.hel.gmX(0)
b5=b4.a7(0,B.pO).gmX(0)
b6=C.a([],x.bl)
u=j1.w
b7=u==null?B.wL:u.$1(j1.gGY(0))
u=w.d
b8=u.a
b9=u.b
c0=u.c
c1=w.c
j3.c=new Float64Array(24)
j3.d=new Float64Array(24)
j3.e=new Float64Array(24)
j3.f=new Float64Array(24)
j3.r=new Float64Array(24)
c2=new A.cvi(j3,j1,b8,b9,c0,m,l,k,j,c1,o,p,n,a0,a1,b1,r,q,b2,b3,b4.a,b4.b,b4.c,b5.a,b5.b,b5.c,b6)
c3=v.a
c4=c3.length>1500?A.i1s(v):j2
if(c4==null)for(c5=0;c5<c3.length;++c5)c2.$2(c3[c5],c5)
else for(w=c4.a,u=w.length,a2=r+40,a5=q+40,a3=0;a3<w.length;w.length===u||(0,C.K)(w),++a3){c6=w[a3]
if(!c6.a){for(a6=c6.x,a9=c6.r,c7=c6.e,c8=c6.d,c9=c6.f,d0=c6.w,d1=!1,d2=!0,d3=!1,d4=1/0,d5=-1/0,d6=1/0,d7=-1/0,d8=0;d8<8;++d8){d9=((d8&1)===0?c8:c7)-b8
e0=((d8&2)===0?c9:a9)-b9
e1=((d8&4)===0?d0:a6)-c0
e2=-d9*l+e1*m
e3=-(e0*j+e2*k)+c1
if(e3<=b1)d2=!1
if(e3<1){d3=!0
continue}e4=o+(d9*m+e1*l)*p/e3
e5=n-(e0*k-e2*j)*p/e3
if(e4<d4)d4=e4
if(e4>d5)d5=e4
if(e5<d6)d6=e5
if(e5>d7)d7=e5
d1=!0}if(d2)continue
if(!d1)continue
if(!d3)a6=d5<-40||d4>a2||d7<-40||d6>a5
else a6=!1
if(a6)continue}for(a6=c6.b,a9=c6.c,d8=0;d8<a6.length;++d8)c2.$2(a6[d8],a9[d8])}for(w=J.a7(b7),c5=0;c5<w.gK(b7);++c5)c2.$2(w.h(b7,c5),c3.length+c5)
u=j1.x
e6=v.d
if(u==null)e7=e6
else{a2=C.C(e6,x.fd)
D.d.v(a2,u.$1(j1.gGY(0)))
e7=a2}u=x.n
e8=C.a([],u)
e9=C.a([0],u)
j3.w=j3.x=0
f0=e6.length
for(u=x.dx,a2=x.dN,a5=x.o,a6=x.gp,a9=x.g,c7=r+8,c8=q+8,f1=0;f1<e7.length;++f1){f2=e7[f1]
c9=C.a([],a5)
for(d0=f2.a,a3=0;a3<4;++a3)c9.push(h.$1(d0[a3]))
f3=c9[0]
f4=c9[1]
f5=c9[2]
f6=c9[3]
f7=(f3.c+f4.c+f5.c+f6.c)*0.25
f8=d0[3]
f9=d0[0]
g0=f9.a
g1=f9.b
f9=f9.c
d0=d0[1]
g2=i.$1(new A.q(f8.a-g0,f8.b-g1,f8.c-f9).G3(new A.q(d0.a-g0,d0.b-g1,d0.c-f9)))
if(g2.a*((f3.a+f4.a+f5.a+f6.a)*0.25)+g2.b*((f3.b+f4.b+f5.b+f6.b)*0.25)+g2.c*f7>0&&!f2.x)continue
if(f7>b1)continue
if(D.d.cJ(c9,new A.cvc())){d0=C.a([],a2)
for(f3=c9.length,a3=0;a3<c9.length;c9.length===f3||(0,C.K)(c9),++a3){g3=c9[a3]
f4=g3.c
d0.push(new C.u(o+g3.a*p/f4,n-g3.b*p/f4))}for(c9=d0.length,g4=1/0,g5=-1/0,g6=1/0,g7=-1/0,a3=0;a3<c9;++a3){g8=d0[a3]
g9=g8.a
if(g9<g4)g4=g9
if(g9>g5)g5=g9
h0=g8.b
if(h0<g6)g6=h0
if(h0>g7)g7=h0}if(g5<-8||g4>c7||g7<-8||g6>c8){c9=f2.w
if(c9!==0){d0=b2.h(0,c9)
b2.n(0,c9,(d0==null?0:d0)+f7-f2.f)
d0=b3.h(0,c9)
b3.n(0,c9,(d0==null?0:d0)+1)}continue}c9=$.S()
f3=C.a([],a9)
h1=new C.aF(c9.r,D.ag,j2,j2,f3)
c9=C.C(d0,u)
f3.push(new C.LY(c9,!0))
c9=h1.gbu().a.getBounds()
f3=c9[0]
f4=c9[1]
h2=(c9[2]-f3)*(c9[3]-f4)
e8.push(h2)
b6.push(new A.Ge(f2.r,f2.w,new A.cvd(j3,j1,f1<f0,h2,e9,f2,d0,h1),h1,D.L,f7-f2.f,f2.b,!1,!1))
continue}h3=new A.cvb(c9)
h4=C.a([],a6)
c9=$.S()
d0=C.a([],a9)
h1=new C.aF(c9.r,D.ag,j2,j2,d0)
for(h5=0;h5<6;h5=h6)for(c9=h5/6,h6=h5+1,f3=h6/6,c5=0;c5<8;c5=h7){f4=c5/8
h7=c5+1
f5=h7/8
h8=C.a([h3.$2(f4,c9),h3.$2(f5,c9),h3.$2(f5,f3),h3.$2(f4,f3)],a5)
if(D.d.b_(h8,new A.cve()))continue
f4=C.a([],a2)
for(a3=0;a3<4;++a3){g3=h8[a3]
f5=g3.c
f4.push(new C.u(o+g3.a*p/f5,n-g3.b*p/f5))}h4.push(new C.b5(c5,h5,f4))
f4=C.C(f4,u)
f4=new C.LY(f4,!0)
d0.push(f4)
f5=h1.f
if(f5!=null)f4.bx(f5)
f4=h1.e
if(f4!=null)f4.a.delete()
h1.e=null}if(h4.length===0)continue
b6.push(new A.Ge(f2.r,f2.w,new A.cvf(j1,f2,h4),h1,D.L,f7-f2.f,f2.b,!1,!1))}D.d.aX(e8,new A.cvg())
e9[0]=e8.length>6?e8[5]:0
h9=C.dO(b2,t,s)
i0=C.dO(b3,t,t)
for(u=b6.length,a3=0;a3<b6.length;b6.length===u||(0,C.K)(b6),++a3){i1=b6[a3]
t=i1.b
if(t!==0){s=h9.h(0,t)
if(s==null)s=0
h9.n(0,t,s+i1.x)
s=i0.h(0,t)
i0.n(0,t,(s==null?0:s)+1)}}i2=c3.length+w.gK(b7)
for(c5=0;c5<b6.length;++c5){i3=b6[c5]
if(i3.f!=null){i4=i2+1
i3.c=i2
i2=i4}w=i3.b
if(w!==0){u=h9.h(0,w)
u.toString
w=i0.h(0,w)
w.toString
w=u/w}else w=i3.x
i3.d=w}D.d.aX(b6,new A.cvh())
w=j1.d.a
D.d.aa(w)
$.S()
i5=C.J()
i5.b=D.M
i6=C.J()
i6.b=D.a9
i6.c=0.8
for(u=b6.length,t=j4.a,a3=0;a3<b6.length;b6.length===u||(0,C.K)(b6),++a3){i3=b6[a3]
s=i3.f
if(s!=null){s.$1(j4)
s=i3.y
if(s!==0)w.push(new C.z(i3.r,s))
continue}s=i3.w
i5.r=s.gp(0)
a2=i3.r
i7=i5.G()
a5=a2.e
t.drawPath((a5==null?a2.e=new C.cd(a2.gbu().a.snapshot()):a5).a,i7)
i7.delete()
if(!i3.z&&!i3.e){i6.r=s.gp(0)
i7=i6.G()
s=a2.e
t.drawPath((s==null?a2.e=new C.cd(a2.gbu().a.snapshot()):s).a,i7)
i7.delete()}s=i3.y
if(s!==0)w.push(new C.z(a2,s))}if(j1.e!==0){$.S()
g8=C.J()
g8.b=D.a9
g8.c=1.4
g8.r=D.c.j(0.35+0.25*Math.sin(j1.gGY(0)*6)).gp(0)
for(u=b6.length,a3=0;a3<b6.length;b6.length===u||(0,C.K)(b6),++a3){i3=b6[a3]
if(i3.Q){s=i3.r
i7=g8.G()
a2=s.e
t.drawPath((a2==null?s.e=new C.cd(s.gbu().a.snapshot()):a2).a,i7)
i7.delete()}}}for(v=v.c,u=v.length,a3=0;a3<v.length;v.length===u||(0,C.K)(v),++a3){i8=v[a3]
g3=h.$1(i8.a)
s=g3.c
if(s<1)continue
a2=o+g3.a*p/s
s=n-g3.b*p/s
i9=new C.iH(new C.es(i8.b,j2,j2,D.cL,j2,j2,j2,j2,j2,j2,new C.F(!0,D.c,j2,j2,j2,j2,11,D.u,j2,j2,j2,j2,j2,j2,j2,j2,j2,j2,j2,j2,j2,j2,j2,j2,j2,j2)),D.a4,D.bX,new C.jg(1),j2,j2,j2,j2,D.bV,j2)
i9.eg()
a5=i9.b
a6=a5.c
a5=a5.a.c
j0=C.br(C.bK(new C.u(a2,s),a5.gba(a5)+8,a6+14),D.hG)
a6=$.S()
a5=new C.ao(D.Q,D.M,D.S,D.T,D.R)
a5.r=i8.c.j(0.92).gp(0)
i7=a5.G()
t.drawRRect(C.e7(j0),i7)
i7.delete()
a5=new C.ao(D.Q,D.M,D.S,D.T,D.R)
a5.b=D.a9
a5.c=1
a5.r=D.ac.gp(0)
i7=a5.G()
t.drawRRect(C.e7(j0),i7)
i7.delete()
a5=i9.b
c7=a5.c
a5=a5.a.c
i9.a4(j4,new C.u(a2-c7/2,s-a5.gba(a5)/2))
s=i8.d
if(s!==0){a2=C.a([],a9)
a2.push(new C.iV(j0))
w.push(new C.z(new C.aF(a6.r,D.ag,j2,j2,a2),s))}}},
av(d){return!0}}
A.cFi.prototype={}
A.Ge.prototype={}
A.avW.prototype={
R(){return new A.bsD(new A.bVN(C.a([],x.aB)),new C.eC(0,$.aw()),D.bC,D.I,D.bC,null,null)}}
A.bsD.prototype={
Z(){var w,v=this
v.a3()
A.hIi()
w=v.pW(new A.f4U(v))
w.fZ(0)
v.d!==$&&C.aQ()
v.d=w},
t(){var w=this.d
w===$&&C.c()
w.t()
w=this.f
w.T$=$.aw()
w.P$=0
this.bzt()},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.a,l=m.as==null,k=l?n:new A.f4L(o)
l=l?n:new A.f4M(o,d)
w=m.c
v=m.d
u=m.e
t=m.r
s=o.f
r=m.w
m=m.x
q=C.a([v,s],x.dS)
p=o.a
q=C.a([C.jm(C.mJ(D.iK,new C.er(C.b4(n,n,n,new A.b6X(w,v,o.e,u,t,s,r,m,p.y,p.Q,new C.h9(q)),D.fF),n),n,new A.f4N(o),new A.f4O(o),n,new A.f4P(o),n,n,new A.f4Q(o)),D.t,n)],x.p)
o.a.toString
return C.mJ(D.iK,C.aA(D.c6,new C.an(D.a_,n,D.b3,D.t,q,n),D.y,!1,n,l,k,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new A.f4R(o),new A.f4S(o),n,n,n,n,n,n,n,n,n,n,n,!1,D.a3),n,n,n,n,n,n,new A.f4T(o),n)}}
A.Q4.prototype={
t2(d,e,f){var w,v,u,t,s,r=this
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
A.cNf.prototype={}
A.aOn.prototype={
t(){var w=this,v=w.a8$
if(v!=null)v.a5(0,w.gbB())
w.a8$=null
w.a1()},
aV(){this.b2()
this.b1()
this.bC()}}
A.bcE.prototype={}
A.bcZ.prototype={}
A.bi7.prototype={}
A.drb.prototype={}
A.MQ.prototype={
PI(d){return this.cpZ(d)},
cpZ(e4){var w=0,v=C.j(x.H),u=this,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1,e2,e3
var $async$PI=C.e(function(e6,e7){if(e6===1)return C.f(e7,v)
for(;;)switch(w){case 0:if(e4.getUint32(0,!0)!==1179937895)throw C.W("not a glb file")
for(n=x.e,m=12,l=null,k=null;m+8<=e4.byteLength;){j=e4.getUint32(m,!0)
i=e4.getUint32(m+4,!0)
h=J.eH(D.dK.gaS(e4),e4.byteOffset+m+8,j)
if(i===1313821514)l=n.a(D.X.aN(0,new C.GA(!1).DP(h,0,null,!0),null))
if(i===5130562)k=h
m+=8+j}if(l==null||k==null)throw C.W("empty glb")
g=new A.dlk(l,k)
f=J.a7(l)
e=x.j
d=J.kL(e.a(f.h(l,"nodes")),n)
n=d.a
a0=J.a7(n)
a1=a0.gK(n)
a2=x.S
u.b=C.bZ(a1,-1,!1,a2)
a3=C.a([],x.s)
for(a4=d.$ti,a5=a4.k("bS<c2.E>"),a6=new C.bS(d,d.gK(0),a5),a7=a4.k("c2.E");a6.C();){a8=a6.d
a8=C.aS(J.r(a8==null?a7.a(a8):a8,"name"))
if(a8==null)a8=""
a3.push(a8.toLowerCase())}u.c=a3
u.d=D.d.bg(a3,new A.bUz())
a3=x.gL
a6=C.a([],a3)
for(a5=new C.bS(d,d.gK(0),a5),a8=x.bM,a9=x.t;a5.C();){b0=a5.d
if(b0==null)b0=a7.a(b0)
b1=C.a([],a9)
b0=a8.a(J.r(b0,"children"))
b0=J.aX(b0==null?D.cv:b0)
while(b0.C())b1.push(D.k.N(C.e3(b0.gS(b0))))
a6.push(b1)}u.f=a6
for(a5=u.b,b2=0;b2<a1;++b2)for(a7=a6[b2],b0=a7.length,b3=0;b3<b0;++b3)a5[a7[b3]]=b2
a5=C.a([],a9)
a6=e.a(f.h(l,"scenes"))
a7=C.aK(f.h(l,"scene"))
a7=a7==null?null:D.k.N(a7)
a6=J.aX(e.a(J.r(J.r(a6,a7==null?0:a7),"nodes")))
while(a6.C())a5.push(D.k.N(C.e3(a6.gS(a6))))
u.r=a5
a5=a1*3
u.w=new Float64Array(a5)
u.x=new Float64Array(a1*4)
u.y=new Float64Array(a5)
for(a5=x.di,a4=a4.y[1],b2=0;b2<a1;++b2){b4=a4.a(a0.h(n,b2))
a6=J.a7(b4)
a7=a8.a(a6.h(b4,"translation"))
b5=a7==null?null:J.kL(a7,a5)
if(b5==null)b5=H.asK
a7=a8.a(a6.h(b4,"rotation"))
b6=a7==null?null:J.kL(a7,a5)
if(b6==null)b6=B.c8p
a6=a8.a(a6.h(b4,"scale"))
b7=a6==null?null:J.kL(a6,a5)
if(b7==null)b7=B.clt
for(a6=b2*3,a7=J.a7(b5),b0=J.a7(b7),b8=0;b8<3;++b8){b1=u.w
b9=a6+b8
c0=a7.h(b5,b8)
b1.$flags&2&&C.aj(b1)
b1[b9]=c0
c0=u.y
b1=b0.h(b7,b8)
c0.$flags&2&&C.aj(c0)
c0[b9]=b1}for(a6=b2*4,a7=J.a7(b6),b8=0;b8<4;++b8){b0=u.x
b1=a7.h(b6,b8)
b0.$flags&2&&C.aj(b0)
b0[a6+b8]=b1}}u.Q=C.a([],a3)
u.as=C.a([],x.dh)
n=a8.a(f.h(l,"skins"))
n=J.aX(n==null?D.cv:n)
while(n.C()){b7=n.gS(n)
a0=C.a([],a9)
for(a3=J.a7(b7),a4=J.aX(e.a(a3.h(b7,"joints")));a4.C();)a0.push(D.k.N(C.e3(a4.gS(a4))))
u.Q.push(a0)
c1=a3.h(b7,"inverseBindMatrices")!=null?g.FH(D.k.N(C.e3(a3.h(b7,"inverseBindMatrices")))).a:null
a3=u.as
a3.push(c1==null?A.hLq(a0.length):c1)}n=a8.a(f.h(l,"animations"))
n=J.aX(n==null?D.cv:n)
a0=u.z
a3=x.G
a4=x.gR
while(n.C()){c2=n.gS(n)
c3=C.a([],a4)
a5=J.a7(c2)
c4=e.a(a5.h(c2,"samplers"))
for(a6=J.aX(e.a(a5.h(c2,"channels"))),a7=J.a7(c4),c5=0;a6.C();){c6=a6.gS(a6)
a9=J.a7(c6)
c7=a3.a(a9.h(c6,"target"))
b0=J.a7(c7)
b1=C.aK(b0.h(c7,"node"))
c8=b1==null?null:D.k.N(b1)
c9=b0.h(c7,"path")
A:{if("translation"===c9){b0=0
break A}if("rotation"===c9){b0=1
break A}if("scale"===c9){b0=2
break A}b0=-1
break A}if(c8==null||b0<0)continue
b7=a3.a(a7.h(c4,D.k.N(C.e3(a9.h(c6,"sampler")))))
a9=J.a7(b7)
d0=g.FH(D.k.N(C.e3(a9.h(b7,"input")))).a
d1=g.FH(D.k.N(C.e3(a9.h(b7,"output")))).a
d2=a9.h(b7,"interpolation")
if(d2==null)d2="LINEAR"
d3=b0===1?4:3
a9=J.kY(d2)
if(a9.A(d2,"CUBICSPLINE")){b1=d0.length
d4=new Float64Array(b1*d3)
for(b2=0;b2<b1;++b2)for(b9=b2*d3,c0=(b2*3+1)*d3,b8=0;b8<d3;++b8)d4[b9+b8]=d1[c0+b8]
d1=d4}if(!D.oF.gan(d0)){b1=d0.length
if(b1===0)C.ba(C.fs())
c5=Math.max(c5,d0[b1-1])}c3.push(new A.bcE(c8,b0,d0,d1,a9.A(d2,"STEP")))}d5=C.aS(a5.h(c2,"name"))
if(d5==null)d5="clip"+a0.a
a0.n(0,d5,new A.bcZ(c5,c3))}t=C.U(a2,x.c9)
s=0
n=x.H
e="Could not read a picture of "+u.a+": "
case 2:a0=s
a2=a8.a(f.h(l,"images"))
a2=a2==null?null:J.ad(a2)
if(!(a0<(a2==null?0:a2))){w=3
break}r=g.cSQ(s)
if(r==null){w=4
break}try{a0=r
d6=C.hc1(a0)
q=d6==null?null:d6.pX(0,a0,null)
if(q!=null){p=q.cLj(D.c9,4)
a0=s
a2=p.a
a2=a2==null?null:a2.a
if(a2==null)a2=0
a3=p.a
a3=a3==null?null:a3.b
if(a3==null)a3=0
d7=p
a4=d7.gr7()
d8=4!==a4?d7.cLi(null,4):d7
a4=d8.a
a4=a4==null?null:a4.bnW(d8!==d7,D.LP)
if(a4==null){a4=d7.a
a4=a4==null?null:J.eT(a4.gaS(a4))
if(a4==null){a4=d7.a
a4=a4==null?null:a4.gaS(a4)
if(a4==null)a4=D.aG.gaS(new Uint8Array(0))
a4=J.eT(a4)}}J.aJ(t,a0,new A.bi7(a2,a3,new Uint8Array(C.cn(a4))))}}catch(e5){o=C.ab(e5)
$.am.$1(e+C.w(o))}w=5
return C.b(C.bP(D.bC,null,n),$async$PI)
case 5:case 4:++s
w=2
break
case 3:e0=u.bTq(l,g,d,t)
w=6
return C.b(C.bP(D.bC,null,n),$async$PI)
case 6:u.at=u.b9v(e0,5000)
w=7
return C.b(C.bP(D.bC,null,n),$async$PI)
case 7:u.ax=u.b9v(e0,1800)
n=u.at
n.r=u.b4H(n)
n=u.ax
n.r=u.b4H(n)
e1=u.azV(null,0)
e2=u.b7A(u.at,e1)
for(n=e2.length,e3=1/0,s=1;s<n;s+=3)e3=Math.min(e3,e2[s])
u.ay=isFinite(e3)?e3:0
return C.h(null,v)}})
return C.i($async$PI,v)},
cro(d){var w,v,u
for(w=d;w>=0;){v=this.c
v===$&&C.c()
u=v[w]
if(!C.cV(u,"head",0))v=C.cV(u,"neck",0)
else v=!0
if(v)return 0
if(!C.cV(u,"leftshoulder",0))v=C.cV(u,"leftarm",0)
else v=!0
if(v)return 1
if(!C.cV(u,"rightshoulder",0))v=C.cV(u,"rightarm",0)
else v=!0
if(v)return 2
v=!0
if(!C.cV(u,"leftupleg",0))if(!C.cV(u,"leftleg",0))v=C.cV(u,"leftfoot",0)
if(v)return 3
v=!0
if(!C.cV(u,"rightupleg",0))if(!C.cV(u,"rightleg",0))v=C.cV(u,"rightfoot",0)
if(v)return 4
v=this.b
v===$&&C.c()
w=v[w]}return 5},
b4H(d){var w,v,u,t,s,r,q,p,o,n,m=d.a.length/3|0,l=new Uint8Array(m)
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
l[t]=o<n.length?this.cro(n[o]):5}return l},
bTq(e9,f0,f1,f2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1,e2=null,e3="POSITION",e4="JOINTS_0",e5="WEIGHTS_0",e6=J.a7(e9),e7=x.bM,e8=e7.a(e6.h(e9,"materials"))
if(e8==null)e8=D.cv
w=x.e
v=J.kL(e8,w)
e8=e7.a(e6.h(e9,"textures"))
u=J.kL(e8==null?D.cv:e8,w)
e8=x.j
t=J.kL(e8.a(e6.h(e9,"meshes")),w)
e6=x.n
s=C.a([],e6)
r=x.t
q=C.a([],r)
p=C.a([],e6)
o=C.a([],r)
n=C.a([],r)
m=C.a([],r)
for(e6=f1.a,r=J.a7(e6),l=t.a,k=J.a7(l),j=t.$ti.y[1],i=x.N,h=x.A,g=x.fF,f=x.di,e=x.G,d=v.a,a0=J.a7(d),a1=v.$ti.y[1],a2=u.a,a3=J.a7(a2),a4=u.$ti.y[1],a5=this.ch,a6=f1.$ti.y[1],a7=0;a7<r.gK(e6);++a7){a8=a6.a(r.h(e6,a7))
a9=J.a7(a8)
b0=C.aK(a9.h(a8,"mesh"))
b1=b0==null?e2:D.k.N(b0)
if(b1==null)continue
a9=C.aK(a9.h(a8,"skin"))
b2=a9==null?e2:D.k.N(a9)
for(a9=J.kL(e8.a(J.r(j.a(k.h(l,b1)),"primitives")),w),b0=a9.$ti,a9=new C.bS(a9,a9.gK(0),b0.k("bS<c2.E>")),b3=b2==null,b0=b0.k("c2.E");a9.C();){b4=a9.d
if(b4==null)b4=b0.a(b4)
b5=J.a7(b4)
b6=J.Bj(e.a(b5.h(b4,"attributes")),i,h)
if(b6.h(0,e3)==null||b5.h(b4,"indices")==null)continue
b7=f0.FH(D.k.N(C.e3(b6.h(0,e3)))).a
b8=b7.length/3|0
b9=b6.h(0,e4)!=null?f0.FH(D.k.N(C.e3(b6.h(0,e4)))).a:e2
c0=b6.h(0,e5)!=null?f0.FH(D.k.N(C.e3(b6.h(0,e5)))).a:e2
c1=C.aK(b5.h(b4,"material"))
c2=c1==null?e2:D.k.N(c1)
c1=g.a(J.r(c2!=null?a1.a(a0.h(d,c2)):D.cB,"pbrMetallicRoughness"))
c3=c1==null?e2:J.Bj(c1,i,h)
if(c3==null)c3=D.cB
c1=e7.a(c3.h(0,"baseColorFactor"))
c4=c1==null?e2:J.kL(c1,f)
if(c4==null)c4=B.clu
c1=g.a(c3.h(0,"baseColorTexture"))
c5=c1==null?e2:J.Bj(c1,i,h)
c1=c5==null
c6=C.aK(c1?e2:c5.h(0,"texCoord"))
c7=c6==null?e2:D.k.N(c6)
c8=b6.h(0,"TEXCOORD_"+(c7==null?0:c7))
c9=c8!=null?f0.FH(D.k.N(C.e3(c8))).a:e2
if(!c1){c1=C.aK(J.r(a4.a(a3.h(a2,D.k.N(C.e3(c5.h(0,"index"))))),"source"))
d0=c1==null?e2:D.k.N(c1)
d1=d0!=null?f2.h(0,d0):e2}else d1=e2
d2=s.length/3|0
D.d.v(s,b7)
for(c1=c0!=null,c6=b9!=null,d3=0;d3<b8;++d3){o.push(b3?255:b2)
for(d4=d3*4,d5=0;d5<4;++d5){q.push(c6?D.k.N(b9[d4+d5]):0)
if(c1)d6=c0[d4+d5]
else d6=d5===0?1:0
p.push(d6)}}d7=f0.FH(D.k.N(C.e3(b5.h(b4,"indices")))).a
for(b4=d7.length,d8=0;b5=d8+2,b5<b4;d8+=3){d9=D.k.N(d7[d8])
e0=D.k.N(d7[d8+1])
e1=D.k.N(d7[b5])
n.push(d2+d9)
n.push(d2+e0)
n.push(d2+e1)
m.push(this.bRv(d1,c9,d9,e0,e1,c4))}if(b3)a5.push(new C.b5(d2,b8,a7))}}return new A.dwJ(new Float64Array(C.cn(s)),new Uint16Array(C.cn(q)),new Float64Array(C.cn(p)),new Uint8Array(C.cn(o)),new Int32Array(C.cn(n)),new Int32Array(C.cn(m)))},
bRv(d,e,f,g,h,i){var w,v,u,t,s,r,q,p=J.a7(i),o=p.h(i,0),n=p.h(i,1),m=p.h(i,2)
if(d!=null&&e!=null){w={}
p=f*2
v=g*2
u=h*2
t=(e[p]+e[v]+e[u])/3
s=(e[p+1]+e[v+1]+e[u+1])/3
r=w.a=w.b=w.c=0
q=new A.bUt(w,d)
q.$2(t,s)
for(p=[f,g,h];r<3;++r){v=p[r]*2
q.$2((t+e[v])/2,(s+e[v+1])/2)}o*=w.c/4/255
n*=w.b/4/255
m*=w.a/4/255}p=new A.bUs()
return(p.$1(o)<<16|p.$1(n)<<8|p.$1(m)|4278190080)>>>0},
b9v(d7,d8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4={},d5=d7.a,d6=d5.length/3|0
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
f=new A.bUB(d4,d6,d7)
e=new A.bUD(d7)
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
D.k2.hx(b2,0,a5,-1)
b3=new Float64Array(a5)
D.oF.hx(b3,0,a5,1/0)
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
c4=A.hiG(c2,c3,b1)
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
b9.bQ(0,new A.bUA(c7,c0))
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
d0[p]=s[d3]}d1[b1]=u[d2]}return new A.drb(c8,c9,d0,d1,new Int32Array(C.cn(b8)),c7)},
azV(a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=d.b
a0===$&&C.c()
w=d.w
w===$&&C.c()
v=new Float64Array(C.cn(w))
w=d.x
w===$&&C.c()
u=new Float64Array(C.cn(w))
w=d.y
w===$&&C.c()
t=new Float64Array(C.cn(w))
s=a1==null?null:d.z.h(0,a1)
if(s!=null&&s.b>0){w=s.b
r=a2-Math.floor(a2/w)*w
for(w=s.c,q=w.length,p=0;p<w.length;w.length===q||(0,C.K)(w),++p){o=w[p]
n=o.b
if(n===0)n=v
else n=n===1?u:t
A.hLr(o,r,n)}}m=d.CW.c3(0,"world",new A.bUx(a0.length))
l=new A.bUy(d,v,u,t,new Float64Array(16),m)
a0=d.r
a0===$&&C.c()
w=a0.length
p=0
for(;p<a0.length;a0.length===w||(0,C.K)(a0),++p)l.$1(a0[p])
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
A.hiH(m,w*16,q[h],f*16,j,i)
i+=16}}for(w=a0.length,p=0;p<a0.length;a0.length===w||(0,C.K)(a0),++p,i=e){e=i+16
D.oF.eo(j,i,e,m,a0[p].c*16)}return j},
b7A(b8,b9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=b8.a,b4=b3.length/3|0,b5=new Float64Array(b4*3),b6=C.a([],x.t),b7=this.Q
b7===$&&C.c()
w=b7.length
v=0
u=0
for(;u<b7.length;b7.length===w||(0,C.K)(b7),++u){t=b7[u]
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
cKI(d,e){var w,v,u=new A.bUG(this)
if(d){w=u.$1("run")
v=w==null?u.$1("walk"):w}else if(e){w=u.$1("walk")
v=w}else{w=u.$1("idle")
if(w==null)w=u.$1("samba")
v=w}if(v!=null)return v
u=u.$1("samba")
if(u==null){u=this.z
u=new C.cy(u,C.a6(u).k("cy<1>")).dN(0,new A.bUE(),new A.bUF(this))}return u},
cY1(b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=this,b4="world",b5={}
if(b6){w=b3.at
w===$&&C.c()
v=w}else{w=b3.ax
w===$&&C.c()
v=w}u=b3.cKI(c0,c5)
w=b3.z.h(0,u)
t=w==null?null:w.b
if(t==null)t=1
if(c5&&c4!=null&&D.a.q(u.toLowerCase(),"walk"))s=c4/50*t
else{w=B.dBJ.h(0,b3.a)
s=c2*(w==null?1:w)}w=b3.e
r=w.h(0,u)
if(r==null){b3.azV(u,0)
if(b3.d>=0){q=b3.CW
r=new C.z(q.h(0,b4)[b3.d*16+12],q.h(0,b4)[b3.d*16+14])}else r=D.A8
w.n(0,u,r)}p=b3.azV(u,s)
b5.a=b5.b=0
if(b3.d>=0){w=b3.CW
b5.b=w.h(0,b4)[b3.d*16+12]-r.a
b5.a=w.h(0,b4)[b3.d*16+14]-r.b}o=b3.b7A(v,p)
w=b3.a
q=B.dCk.h(0,w)
n=c7+(q==null?0:q)
m=C.ir(v.a.length/3|0,new A.bUJ(b5,b3,o,36,b8,Math.cos(n),Math.sin(n),c6,c8),!0,x.cv)
q=C.a([],x.t)
for(l=0;l<6;++l){k=$.dp+1
$.dp=k
q.push(k)}j=C.a([],x.z)
for(k=v.e,i=k.length,h=v.f,g=x.o,f=c3!=null,e=c1!=null,d=b9!=null,a0=0;a0<i;a0+=3){a1=m[k[a0]]
a2=m[k[a0+1]]
a3=m[k[a0+2]]
a4=a1.a
a5=a2.b
a6=a1.b
a7=a1.c
a8=a3.b
a9=new A.q(a2.a-a4,a5-a6,a2.c-a7).G3(new A.q(a3.a-a4,a8-a6,a3.c-a7)).gmX(0)
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
a5=b2==null?C.b1(h[D.o.ao(a0,3)]):A.ib1(h[D.o.ao(a0,3)],b2)
j.push(new A.kr(a4,a9,a5,b7,0.08,1,!1,0,0,2,q[b0]))}if(e&&f&&w!=="michelle")D.d.v(j,b3.bRw(v,m,n,c1,b7,q[0]))
return j},
bRw(a6,a7,a8,a9,b0,b1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5={}
for(w=a6.a.length/3|0,v=a6.r,u=-1e9,t=1e9,s=0;s<w;++s){v===$&&C.c()
if(v[s]!==0)continue
r=a7[s].b
if(r>u)u=r
if(r<t)t=r}if(u<t)return B.wL
q=Math.cos(a8)
p=Math.sin(a8)
o=new A.q(p,0,q)
v=-p
n=Math.max(t,u-(u-t)*0.75)
for(m=a6.r,l=0,k=0,j=0,s=0;s<w;++s){m===$&&C.c()
if(m[s]!==0||a7[s].b<n)continue
i=a7[s]
l+=i.a
k+=i.c;++j}if(j===0)return B.wL
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
d=new A.bUu(a5,new A.q(m,(u+n)/2,i),o,new A.q(q,0,v),e,new A.q(0,1,0))
w=C.ar(a9,B.blo,0.88)
w.toString
v=C.ar(a9,D.w,0.25)
v.toString
m=C.ar(a9,B.bj9,0.6)
m.toString
a0=C.a([],x.z)
a1=new A.bUw(a0,o,b0,b1)
a2=new A.bUv(a1,d)
for(a3=0;a3<2;++a3){a4=F.hd[a3]
i=a4*0.34
a2.$6(i,0.08,0.2,0.11,D.c,1.2)
a2.$6(i,0.08,0.085,0.085,w,1.6)
g=i-0.22
i+=0.22
f=0.04*a4
a1.$6(d.$2(g,0.33),d.$2(i,0.31+f),d.$2(i,0.25+f),d.$2(g,0.27),w,1.2)}a0.push(new A.kr(C.a([d.$2(0,0.12),d.$2(-0.1,-0.22),d.$2(0.1,-0.22)],x.o),o,v,b0,0,1,!1,0,1.2,2,b1))
a1.$6(d.$2(-0.2,-0.46),d.$2(0.2,-0.46),d.$2(0.17,-0.53),d.$2(-0.17,-0.53),m,1.2)
a1.$6(d.$2(-0.2,-0.46),d.$2(0.2,-0.46),d.$2(0.2,-0.485),d.$2(-0.2,-0.485),w,1.5)
return a0}}
A.dwJ.prototype={}
A.dlk.prototype={
cSQ(d){var w,v,u=this.a,t=J.a7(u),s=x.j,r=x.G,q=C.aK(J.r(r.a(J.r(s.a(t.h(u,"images")),d)),"bufferView")),p=q==null?null:D.k.N(q)
if(p==null)return null
w=r.a(J.r(s.a(t.h(u,"bufferViews")),p))
u=J.a7(w)
t=C.aK(u.h(w,"byteOffset"))
v=t==null?null:D.k.N(t)
if(v==null)v=0
return C.yr(this.b,v,v+D.k.N(C.e3(u.h(w,"byteLength"))))},
FH(a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=null,g="byteOffset",f=this.a,e=J.a7(f),d=x.j,a0=x.G,a1=a0.a(J.r(d.a(e.h(f,"accessors")),a5)),a2=J.a7(a1),a3=D.k.N(C.e3(a2.h(a1,"count"))),a4=a2.h(a1,"type")
A:{w=1
if("SCALAR"===a4)break A
if("VEC2"===a4){w=2
break A}if("VEC3"===a4){w=3
break A}if("VEC4"===a4){w=4
break A}if("MAT2"===a4){w=4
break A}if("MAT3"===a4){w=9
break A}if("MAT4"===a4){w=16
break A}break A}v=D.k.N(C.e3(a2.h(a1,"componentType")))
B:{if(5120===v||5121===v){u=1
break B}if(5122===v||5123===v){u=2
break B}u=4
break B}t=J.A(a2.h(a1,"normalized"),!0)
s=new Float64Array(a3*w)
r=C.aK(a2.h(a1,"bufferView"))
q=r==null?h:D.k.N(r)
if(q==null)return new C.z(s,w)
p=a0.a(J.r(d.a(e.h(f,"bufferViews")),q))
f=J.a7(p)
e=C.aK(f.h(p,g))
e=e==null?h:D.k.N(e)
if(e==null)e=0
a2=C.aK(a2.h(a1,g))
d=a2==null?h:D.k.N(a2)
o=e+(d==null?0:d)
f=C.aK(f.h(p,"byteStride"))
n=f==null?h:D.k.N(f)
if(n==null)n=w*u
m=C.aTS(this.b)
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
A.lJ.prototype={}
A.rj.prototype={
gDy(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=1e9,d=-1e9,a0=this.w,a1=a0.length
if(a1===0){a0=this.e
return new C.cw([-a0/2,a0/2,-12,0])}for(w=this.e,v=-w,u=d,t=e,s=u,r=t,q=0;q<a1;++q){p=a0[q]
for(o=p.e,o=[v*o/2,w*o/2],n=p.c,m=p.a,l=p.b,k=0;k<2;++k){j=o[k]
for(i=[-12,0],h=0;h<2;++h){g=A.vM(new A.q(j,0,i[h]),n)
f=g.a+m
r=Math.min(r,f)
s=Math.max(s,f)
f=g.c+l
t=Math.min(t,f)
u=Math.max(u,f)}}}return new C.cw([r,s,t,u])},
gapz(){return this.gDy().a[1]-this.gDy().a[0]},
gGW(){var w=this.w
return w.length===0?this.f:new C.N(w,new A.bID(this),C.T(w).k("N<1,I>")).f6(0,D.pS)},
gbeU(){return this.gDy().a[3]-this.gDy().a[2]},
ga4I(d){return this.w.length===0?0:(this.gDy().a[0]+this.gDy().a[1])/2},
ga4K(){return this.w.length===0?0:(this.gDy().a[2]+this.gDy().a[3])/2},
gei(d){var w=this
return Math.max(Math.max(w.gapz(),w.gbeU()),Math.max(w.gGW()*1.3,w.x))*w.y}}
A.Hz.prototype={}
A.aTz.prototype={
bkg(){var w=this
w.a=!0
w.b="NEW GLOBAL MOVEMENT FOR YOUTH"
w.c="Videos, slides, blogs and books."
w.d="ngmy.org"
w.e=0
w.x=w.w=w.r=w.f=null},
ah(){var w,v=this,u=C.U(x.N,x.A)
u.n(0,"custom",!v.a)
u.n(0,"headline",v.b)
u.n(0,"subtitle",v.c)
u.n(0,"footer",v.d)
u.n(0,"scheme",v.e)
w=v.f
if(w!=null)u.n(0,"logo",D.cK.gcu().aP(w))
w=v.r
if(w!=null)u.n(0,"pic",D.cK.gcu().aP(w))
return u},
U5(d){var w,v=this,u=J.a7(d)
v.a=!J.A(u.h(d,"custom"),!0)
w=C.aS(u.h(d,"headline"))
v.b=w==null?"NEW GLOBAL MOVEMENT FOR YOUTH":w
w=C.aS(u.h(d,"subtitle"))
v.c=w==null?"Videos, slides, blogs and books.":w
w=C.aS(u.h(d,"footer"))
v.d=w==null?"ngmy.org":w
w=C.aK(u.h(d,"scheme"))
w=w==null?null:D.k.N(w)
v.e=D.o.E(w==null?0:w,0,5)
v.f=typeof u.h(d,"logo")=="string"?D.cF.aP(C.cR(u.h(d,"logo"))):null
v.r=typeof u.h(d,"pic")=="string"?D.cF.aP(C.cR(u.h(d,"pic"))):null}}
A.bIB.prototype={
cZL(){var w,v,u
for(w=this.b,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].bkg()},
ah(){var w,v,u,t=this.a,s=C.a([],x.c7)
for(w=this.b,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)s.push(w[u].ah())
return C.H(["template",t,"signs",s],x.N,x.A)},
U5(d){var w,v,u,t,s,r,q
this.a=D.d.b_(B.a45,new A.bIC(d))?C.cR(J.r(d,"template")):"highway"
w=J.r(d,"signs")
if(x.j.b(w)){v=J.a7(w)
u=x.G
t=this.b
s=x.N
r=x.A
q=0
for(;;){if(!(q<6&&q<v.gK(w)))break
if(u.b(v.h(w,q)))t[q].U5(C.a2(u.a(v.h(w,q)),s,r));++q}}else this.b[0].U5(d)}}
A.hp.prototype={}
A.ap1.prototype={
R(){var w=A.hHZ()
$.vN()
return new A.ap2(w,new C.vj())}}
A.ap2.prototype={
gf1(){var w,v=this.e
if(v===$){w=new A.uE(0.5,0.25,420,B.h1y,$.aw())
w.e=30
w.f=5000
w.at=0.02
w.ax=1.4
w.pe(!0)
this.e!==$&&C.bE()
this.e=w
v=w}return v},
gaxS(){var w=this.r
return w===$?this.r=new A.a5x(this.gc7T(),A_.BP):w},
gzC(){return D.d.fG(B.a45,new A.c4Q(this))},
Z(){var w=this
w.a3()
w.f=A.hbE(w.gzC(),w.d)
w.abJ()
A.hnh().bJ(new A.c4O(w),x.P)
w.PM()},
t(){this.gaxS().bR(0)
var w=this.gf1()
w.T$=$.aw()
w.P$=0
this.a1()},
abJ(){var w=this.gzC(),v=this.gf1(),u=w.ga4I(0),t=w.gGW(),s=w.ga4K()
v.Ht(w.gei(0)*1.9,0.22,new A.q(u,w.r+t/2,s),0.45)},
PM(){var w=0,v=C.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i
var $async$PM=C.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return C.b(C.az(),$async$PM)
case 7:q=e
p=C.aS(J.r(q.a,"ngmy_billboard_studio_v1"))
if(p==null){w=1
break}n=r.d
n.U5(x.e.a(D.X.aN(0,p,null)))
n=n.b,m=n.length,l=0
case 8:if(!(l<n.length)){w=10
break}o=n[l]
i=o
w=11
return C.b(A.agd(o.f),$async$PM)
case 11:i.w=e
i=o
w=12
return C.b(A.agd(o.r),$async$PM)
case 12:i.x=e
case 9:n.length===m||(0,C.K)(n),++l
w=8
break
case 10:if(r.c==null){w=1
break}r.m(new A.c4B(r))
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
return C.i($async$PM,v)},
J3(){var w=0,v=C.j(x.H),u=1,t=[],s=this,r,q,p
var $async$J3=C.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
w=6
return C.b(C.az(),$async$J3)
case 6:r=e
w=7
return C.b(r.ar("String","ngmy_billboard_studio_v1",D.X.aq(s.d.ah(),null)),$async$J3)
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
return C.i($async$J3,v)},
c7U(){var w,v,u,t,s,r,q,p=this
if(!(p.x>=0)||p.c==null)return
w=p.w.gf2()/1000
if(w>=30){p.aCc(!0)
return}v=A.ick(p.gzC(),w)
u=v.b
t=u.aG(0,v.a)
s=Math.max(8,t.gqc())
r=p.gf1()
q=Math.atan2(t.a,-t.c)
r.Ht(s,Math.asin(D.k.E(-t.b/s,-1,1)),u,q)
p.m(new A.c4H(p,w))},
brH(){var w,v=this
v.gf1().at=-1.4
w=v.w
w.jW(0)
w.fZ(0)
v.m(new A.c4P(v))
v.gaxS().fZ(0)},
aCc(d){var w,v=this
v.gaxS().bR(0)
w=v.w
if(w.b==null)w.b=$.a9S.$0()
v.gf1().at=0.02
v.m(new A.c4E(v,d))
v.abJ()},
cAR(){return this.aCc(!1)},
cwM(d){var w=this
w.d.a=d
w.m(new A.c4D(w))
w.abJ()
w.J3()},
ZW(d){this.d.b[d].a=!1
this.m(new A.c4b())
this.J3()},
J2(d,e){return this.cmo(d,e)},
cmo(d,e){var w=0,v=C.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k
var $async$J2=C.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
m=e?400:900
w=7
return C.b(new C.hY().l6(85,m,D.eL),$async$J2)
case 7:q=g
if(q==null){w=1
break}w=8
return C.b(q.fn(),$async$J2)
case 8:p=g
w=9
return C.b(A.agd(p),$async$J2)
case 9:o=g
if(o==null){w=1
break}n=r.d.b[d]
if(e){n.f=p
n.w=o}else{n.r=p
n.x=o}r.ZW(d)
t=2
w=6
break
case 4:t=3
k=s.pop()
if(r.c!=null)r.m(new A.c4C(r))
w=6
break
case 3:w=2
break
case 6:case 1:return C.h(u,v)
case 2:return C.f(s.at(-1),v)}})
return C.i($async$J2,v)},
cCW(){var w=this.c
w.toString
C.bV(D.au,null,new A.c4G(this),w,!0,!0,!0,D.k7,!1,!1,x.H)},
bPN(){var w,v,u,t,s,r,q=this,p={}
p.a=0
w=q.d.b[0]
v=w.b
u=$.aw()
t=new C.au(new C.bb(v,D.b4,D.aO),u)
v=w.c
s=new C.au(new C.bb(v,D.b4,D.aO),u)
w=w.d
r=new C.au(new C.bb(w,D.b4,D.aO),u)
w=q.c
w.toString
C.bV(D.au,null,new A.c4z(p,q,new A.c4A(p,q,t,s,r),t,s,r),w,!0,!0,!0,D.k7,!1,!1,x.H)},
axU(d,e,f,g){var w=null,v=g?f.j(0.3):D.w.j(0.6),u=C.n(20),t=C.L(f,D.r,1)
return C.aA(w,C.p(w,C.d(d,w,w,w,w,w,w,C.l(w,w,f,w,w,w,w,w,w,w,w,13,w,w,D.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),D.f,w,w,new C.o(v,w,t,u,w,w,D.n),w,w,w,w,D.it,w,w,w),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,e,w,w,w,w,w,w,!1,D.a3)},
axT(d,e,f){return this.axU(d,e,f,!1)},
c7S(d,e,f){return this.axU(d,e,D.aJ,f)},
B(d){var w,v,u,t,s,r=this,q=null,p=C.aG(d,q,x.w).w.r,o=r.f
o===$&&C.c()
w=x.p
o=C.a([C.bT(0,A.h7F(E.y4,r.gf1(),q,q,0,q,q,q,o,!0),0,0,0)],w)
if(!(r.x>=0))o.push(C.ap(q,C.B(C.a([C.aA(q,C.p(q,D.a31,D.f,q,q,new C.o(D.w.j(0.55),q,C.L(D.bU,D.r,1),q,q,q,D.a6),q,40,q,q,q,q,q,40),D.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new A.c4K(d),q,q,q,q,q,q,!1,D.a3),D.as,C.E(C.d("Billboard studio \xb7 "+r.gzC().c,q,q,q,q,q,q,B.fkv,q,q,q),1)],w),D.m,q,D.e,D.i,0,q,q),q,q,8,8,p.b+8,q))
if(r.x>=0&&r.y)o.push(C.bT(0,C.aA(D.c6,q,D.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new A.c4L(r),q,q,q,q,q,q,!1,D.a3),0,0,0))
if(!(r.x>=0&&r.y)){v=C.a([],w)
if(r.z.length!==0&&!(r.x>=0)){u=D.dY.j(0.95)
t=C.n(12)
s=C.L(D.ba,D.r,1)
v.push(C.p(q,C.d(r.z,q,q,q,q,q,q,D.Ve,q,q,q),D.f,q,q,new C.o(u,q,s,t,q,q,D.n),q,q,q,D.ct,D.bT,q,q,q))}w=C.a([],w)
if(!(r.x>=0))w.push(r.axT("\ud83e\udea7 Choose billboard",r.gcCV(),F.eY))
if(!(r.x>=0))w.push(r.axT("\u270f\ufe0f Edit",r.gbPM(),D.ba))
if(r.x>=0)w.push(r.axU("\u23f9 Stop the drone",r.gcAQ(),D.c0,!0))
if(r.x>=0)w.push(r.axT("\ud83d\udc41 Hide everything",new A.c4M(r),D.aN))
if(!(r.x>=0))w.push(r.c7S("\ud83c\udfac 30 second drone shot",r.gbrG(),!0))
v.push(C.bX(D.fI,w,D.br,q,8,8))
o.push(C.ap(p.d+12,C.x(v,D.m,q,D.e,D.P,0,D.p),q,q,10,10,q,q))}return C.c6(q,D.w,new C.an(D.a_,q,D.ab,D.t,o,q),q,!1,!1,q,q)}}
A.G6.prototype={}
A.zi.prototype={}
A.xt.prototype={}
A.aUJ.prototype={}
A.a4E.prototype={}
A.akF.prototype={}
A.bN1.prototype={
bAd(d,e){var w,v,u,t,s,r,q,p=this,o=x._,n=C.a([],o)
for(w=p.a.x,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u){t=w[u]
s=t.b
if(s==="house2"||s==="bighouse")n.push(t)}p.b!==$&&C.aQ()
p.b=n
o=C.a([],o)
for(n=w.length,u=0;u<w.length;w.length===n||(0,C.K)(w),++u){t=w[u]
if(D.d.b_(B.RD,new A.bN3(t)))o.push(t)}p.c!==$&&C.aQ()
p.c=o
for(o=p.f,r=0;r<5;++r){q=p.cpJ()
n=B.dxD[r]
w=B.dlI[r]
o.push(new A.aUJ(n,w,new A.tU(B.ayO[r],B.Mw,w,B.LX,B.dr_[r],!1,0,1),58+r*7.5,q.a,q.b,B.aBa))}p.UV(0)},
cpJ(){var w,v=this.c
v===$&&C.c()
w=v.length
if(w===0)return B.exl
return A.yT(v[this.d.ap(w)])},
cYd(d){var w,v,u,t,s,r,q,p=this,o=C.a([],x._),n=p.c
n===$&&C.c()
w=n.length
v=0
for(;v<n.length;n.length===w||(0,C.K)(n),++v){u=n[v]
t=u.b
if(t==="store"||t==="shop"||t==="gasstation")o.push(u)}if(o.length===0)return
D.d.aX(o,new A.bN5(p,d))
for(n=p.e,s=0,v=0;v<2;++v){r=B.dpo[v]
q=o[D.o.F(s,o.length)];++s;++p.r
w=new A.xt(r,q,d,r==="medicine"?30:24)
w.w=!0
D.d.c6(n,0,w)}},
UV(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=j.d,h=j.e,g=x._,f=C.T(h).k("Y<1>"),e=0
for(;;){if(new C.Y(h,new A.bN6(),f).gK(0)<7){w=e+1
v=e<30
e=w}else v=!1
if(!v)break
u=B.RD[i.ap(5)]
v=C.a([],g)
t=j.c
t===$&&C.c()
s=t.length
r=u.d
q=0
for(;q<t.length;t.length===s||(0,C.K)(t),++q){p=t[q]
if(r.q(0,p.b))v.push(p)}t=v.length
if(t!==0){s=j.b
s===$&&C.c()
s=s.length===0}else s=!0
if(s)return
o=v[i.ap(t)]
v=j.b
v===$&&C.c()
n=v[i.ap(v.length)]
m=A.yT(o)
l=A.yT(n)
k=Math.sqrt(Math.pow(m.a-l.a,2)+Math.pow(m.b-l.b,2));++j.r
h.push(new A.xt(u.a,o,n,6+D.o.E(D.k.V(k/70),0,22)))}},
d_f(d,e,f){if(this.x!=null||e.f!=null||!D.d.q(this.e,e))return!1
e.f=-1
e.x=f
this.x=e
return!0},
a2(d){var w=this.x
if(w==null)return
w.f=null
w.r=!1
this.x=null},
ga7a(d){var w=this.x
if(w==null)return null
return A.yT(w.r?w.d:w.c)},
blc(d,e,f){var w,v,u,t,s,r,q,p=this,o=p.x
if(o==null)return null
if(f-o.x>360){p.a2(0)
return B.bwK}w=p.ga7a(0)
if(Math.sqrt(Math.pow(w.a-d,2)+Math.pow(w.b-e,2))>58)return null
if(!o.r){o.r=!0
v=o.b
u=A.Lk(v)
v=A.Lk(v)
t=B.hF.h(0,o.c.b).a
s=o.w?"hospital":"house"
return new A.akF("pickup",u.b+" You picked up the "+v.c.toLowerCase()+" at the "+t.toLowerCase()+". Now take it to the "+s+".",0)}D.d.W(p.e,o)
p.x=null;++p.z;++p.y
v=p.Q
u=o.e
p.Q=v+u
p.UV(f)
r=A.Lk(o.b).b+" Delivered! +"+u+" points."
if(p.y>=8){p.Q+=40
r+=" You won the race with 8 deliveries: +40 points!"
p.aZF()
q=40}else q=0
v=q>0?"won":"delivered"
return new A.akF(v,r,u+q)},
aZF(){var w,v,u;++this.as
this.y=0
for(w=this.f,v=w.length,u=0;u<v;++u)w[u].r=0},
FN(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
for(w=j.f,v=w.length,u=j.e,t=e+2,s=j.d,r=x.C,q=null,p=0;p<w.length;w.length===v||(0,C.K)(w),++p){o=w[p]
n=o.ch
if(n===0){if(e<o.CW)continue
n=C.a([],r)
for(m=u.length,l=0;l<u.length;u.length===m||(0,C.K)(u),++l){k=u[l]
if(k.f==null)n.push(k)}if(n.length===0)continue
D.d.aX(n,new A.bN2(j,o))
k=n[Math.min(n.length-1,s.ap(3))]
k.f=D.d.cp(w,o)
o.y=k
j.b87(o,e,1,k.c)}else if(e>=o.Q){if(!o.db){o.e=o.ax
o.f=o.ay
o.db=!0
o.dx=e+(n===1?1.6:1.3)
continue}if(e<o.dx)continue
o.db=!1
m=o.y
m.toString
if(n===1)j.b87(o,e,2,m.d)
else{D.d.W(u,m)
o.y=null
o.ch=0;++o.w;++o.r
o.x=o.x+m.e
o.CW=t+s.ag()*5
j.UV(e)
if(o.r>=8){q=o.a+" won the race with 8 deliveries! A new round starts."
j.aZF()}}}}return q},
b_u(d,e){return Math.sqrt(Math.pow(e.a-d.e,2)+Math.pow(e.b-d.f,2))},
b87(d,e,f,g){var w,v,u,t=this,s=A.yT(g),r=B.hF.h(0,g.b),q=g.e*3.141592653589793/2,p=r.d/2-2,o=g.c+Math.sin(q)*p,n=g.d+Math.cos(q)*p
d.ch=f
d.ax=o
d.ay=n
w=t.w
if(w===$){v=new A.bL7(t.a)
v.b_v()
t.w!==$&&C.bE()
t.w=v
w=v}u=C.C(w.ape(new C.z(d.e,d.f),s),x.a6)
u.push(new C.z(o,n))
d.cx=u
o=A.imR(u)
d.cy=o
d.z=e
d.Q=e+Math.max(1,o/d.d)},
amM(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=C.a([],x.F)
for(w=this.f,v=w.length,u=d*2.2,t=0;t<w.length;w.length===v||(0,C.K)(w),++t){s=w[t]
r=s.e
q=s.f
if(s.db)continue
if(s.ch!==0&&d>=s.z&&s.cx.length>1){p=s.z
o=D.k.E((d-p)/Math.max(0.01,s.Q-p),0,1)
n=A.imX(s.cx,s.cy*o)
r=n.a
q=n.b
m=n.c
l=o<1}else{m=0
l=!1}k.push(new A.a4E(r,q,m,u+s.d,l,s.ch===2,s.c,s.b))}return k},
d_d(){var w,v,u,t,s=C.a([new C.b5("You",this.y,this.Q)],x.aJ)
for(w=this.f,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u){t=w[u]
s.push(new C.b5(t.a,t.r,t.x))}D.d.aX(s,new A.bN7())
return s},
r8(d,e,f){var w,v,u,t,s=C.a([],x.C)
for(w=this.e,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u){t=w[u]
if(t.f==null)s.push(t)}D.d.aX(s,new A.bN4(this,e,f))
return s},
aaI(d,e,f){return Math.sqrt(Math.pow(f.a-d,2)+Math.pow(f.b-e,2))}}
A.bL7.prototype={
b_y(d){return-this.a.geb(0)/2+8+d*24},
b_v(){var w,v,u,t,s=this,r=s.a
s.d=A.hBp(r,null)
s.b=D.k.cO((r.geb(0)-16)/24)+1
w=D.k.cO((r.gh4(0)-10- -750)/24)+1
s.c=w
s.e=C.bZ(s.b*w,!1,!1,x.y)
for(v=0;v<s.b;++v)for(w=v*24,u=0;t=s.c,u<t;++u)s.e[v*t+u]=s.acB(-r.geb(0)/2+8+w,-750+u*24)
s.f=A.hhc(r)},
acB(d,e){var w,v,u=this.a
if(d<-u.geb(0)/2+12||d>u.geb(0)/2-12||e<-756||e>u.gh4(0)-14)return!0
u=this.d
u===$&&C.c()
w=u.length
v=0
for(;v<w;++v)if(u[v].aHc(d,e,14))return!0
return!1},
b_w(d,e,f){var w,v,u=e.a,t=f.a-u,s=e.b,r=f.b-s,q=Math.max(1,D.k.cO(Math.sqrt(Math.pow(t,2)+Math.pow(r,2))/8))
for(w=0;w<=q;++w){v=w/q
if(this.acB(u+t*v,s+r*v))return!1}return!0},
b_x(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=d.a,h=j.a,g=D.k.V((i+h.geb(0)/2-8)/24),f=j.b
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
k=Math.pow(-h.geb(0)/2+8+o*24-i,2)+Math.pow(-750+m*24-f,2)
if(k<p){q=new C.z(o,m)
p=k}}if(q!=null)return q}return null},
ape(d,e){var w,v,u,t,s,r,q,p,o,n,m=this
if(A.hhc(m.a)!==m.f)m.b_v()
w=m.b_x(d)
v=m.b_x(e)
if(w==null||v==null)return C.a([d,e],x.f)
u=new C.z(m.b_y(w.a),-750+w.b*24)
t=new C.z(m.b_y(v.a),-750+v.b*24)
s=x.f
r=m.acB(d.a,d.b)?C.a([d],s):C.a([],s)
q=m.acB(e.a,e.b)?C.a([e],s):C.a([],s)
p=C.a([],s)
o=r.length===0?d:u
n=q.length===0?e:t
if(m.b_w(0,o,n))D.d.v(p,C.a([o,n],s))
else D.d.v(p,m.cvz(w,v,o,n))
s=C.C(r,x.a6)
D.d.v(s,p)
D.d.v(s,q)
return s},
cvz(a9,b0,b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this,a3=x.t,a4=C.a([],a3),a5=new A.dlQ(a4,C.a([],x.n)),a6=x.S,a7=C.U(a6,a6),a8=C.U(a6,x.i)
a6=a9.a
w=a2.c
w===$&&C.c()
v=a9.b
u=a6*w+v
t=b0.a
s=b0.b
r=t*w+s
a8.n(0,u,0)
a5.aoI(u,a2.c8o(a6,v,b0))
p=0
for(;;){if(a4.length!==0){o=p+1
a6=p<4e4
p=o}else a6=!1
if(!a6){q=!1
break}n=a5.eN()
if(n===r){q=!0
break}a6=a2.c
m=D.o.ec(n,a6)
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
a5.aoI(e,d+Math.sqrt(Math.pow(v,2)+Math.pow(h-s,2)))}}}if(!q)return C.a([b1,b2],x.f)
a0=C.a([r],a3)
while(a7.aj(0,D.d.gak(a0))){a3=a7.h(0,D.d.gak(a0))
a3.toString
a0.push(a3)}a3=x.f
a4=C.a([b1],a3)
for(a6=x.c5,w=new C.dy(a0,a6),w=new C.bS(w,w.gK(0),a6.k("bS<ak.E>")),v=a2.a,a6=a6.k("ak.E");w.C();){t=w.d
if(t==null)t=a6.a(t)
s=a2.c
g=D.o.ec(t,s)
a4.push(new C.z(-v.geb(0)/2+8+g*24,-750+D.o.F(t,s)*24))}a4.push(b2)
a1=C.a([D.d.gI(a4)],a3)
for(j=0;h=a4.length-1,j<h;j=h){a3=j+1
for(;;){if(!(h>a3&&!a2.b_w(0,a4[j],a4[h])))break;--h}a1.push(a4[h])}return a1},
c8o(d,e,f){return Math.sqrt(Math.pow(d-f.a,2)+Math.pow(e-f.b,2))}}
A.dlQ.prototype={
gcm(d){return this.a.length!==0},
aoI(d,e){var w,v,u,t=this.a
t.push(d)
w=this.b
w.push(e)
v=t.length-1
for(;v>0;v=u){u=D.o.ao(v-1,2)
if(w[u]<=w[v])break
this.b8O(v,u)}},
eN(){var w,v,u,t,s,r=this.a,q=D.d.gI(r),p=r.pop(),o=this.b,n=o.pop()
if(r.length!==0){r[0]=p
o[0]=n
for(w=0;;w=s){v=2*w+1
u=v+1
t=r.length
s=v<t&&o[v]<o[w]?v:w
if(u<t&&o[u]<o[s])s=u
if(s===w)break
this.b8O(w,s)}}return q},
b8O(d,e){var w,v=this.a,u=v[d]
v[d]=v[e]
v[e]=u
v=this.b
w=v[d]
v[d]=v[e]
v[e]=w}}
A.aU4.prototype={
bkE(d,e,f){var w,v,u,t,s=this,r=null,q=s.d
if(q>0){q-=d
s.d=q
if(q<=0){s.d=0
s.c=180
s.r+=5
w="You did not reach a shop in time: you lost 5 stars. You must rest for three minutes, or eat something."}else w=r
s.aW()
return w}q=s.c
if(q>0){q-=d
s.c=q
if(q<=0){s.c=0
s.a=0.5
w="You have rested. Your energy is back to half. Find some food in a shop to keep going."}else w=r
s.aW()
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
s.aW()}else w=r
if(e){v=s.b
q=s.b=D.k.E(v-d/120,0,1)
if(q<=0&&v>0)w="The car is out of gas. Get to a gas station (walk, then buy gas) to carry on."
else if(v>=0.25&&q<0.25)w="The gas is low. Drive to a gas station."
s.aW()}return w},
a7c(d){return this.bkE(d,!1,!1)}}
A.aZm.prototype={
B(d){var w,v,u,t,s,r=null,q=D.k.E(this.c,0,1)
if(q>0.5)w=D.bf
else w=q>0.25?D.bs:D.aw
v=C.a([],x.p)
u=this.d
v.push(new C.D(D.qm,C.d(this.e,r,r,r,r,r,r,C.l(r,r,r,r,r,r,r,r,r,r,r,u,r,r,r,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),r))
t=C.n(u/3)
s=C.L(D.ac,D.r,1.5)
v.push(C.E(C.p(r,new C.bN(D.a5,r,r,C.BF(D.A,C.c4(r,new C.o(w,r,r,C.n(u/4),r,r,D.n),D.bh),1,q),r),D.f,r,r,new C.o(D.aS,r,s,t,r,r,D.n),r,u,r,r,D.nw,r,r,r),1))
v.push(C.p(r,r,D.f,r,r,new C.o(D.ac,r,r,C.n(1),r,r,D.n),r,u*0.45,r,B.bD3,r,r,r,3))
return C.B(v,D.m,r,D.e,D.P,0,r,r)}}
A.UL.prototype={
B(d){return new C.tE(new A.c2r(this),null,this.c,null)}}
A.rX.prototype={}
A.SQ.prototype={
gK(d){return this.a==="bus"?120:95.94999999999999}}
A.aU3.prototype={}
A.bxW.prototype={
bBj(d,e,f,g){var w,v,u,t,s,r,q,p,o,n,m
for(w=this.e,v=this.f,u=0;u<4;++u){t=B.ks[u]
s=A.fs0(t).a[1]
r=new A.fkH(this,t)
q=0
for(;;){if(!(r.$1(q)&&q<s))break;++q}for(p=-1,o=0,n=0;n<s;++n){m=D.o.F(q+n,s)
if(r.$1(m)){if(p<0)p=m;++o}else if(p>=0)break}w.push(p)
v.push(o)}}}
A.bL9.prototype={
jW(d){var w,v,u,t
for(w=this.a,v=this.b,u=0;u<4;++u){w[u]=B.ks[u].r
v[u]=0}t=this.c=0
for(w=$.h2z();t<2;++t)w[t].r=-1},
FN(d,e){var w,v,u,t=this
if(e<t.c-0.0001)t.jW(0)
w=t.c
if(e-w>90){w=e-2
t.c=w}for(v=e-1e-9;w<v;){u=Math.min(0.05,e-w)
t.cAG(u)
w=t.c+=u}},
cAG(b8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7=this
for(w=$.h2z(),v=b7.a,u=0;u<2;++u){t=w[u]
s=t.r
if(s<0)continue
r=A.fs0(B.ks[s]).a[1]
q=D.k.F(v[s]-t.e[s],r)
if(q<0)q+=r
if(q>=t.f[s]&&q<r/2)t.r=-1}for(w=b7.b,p=110*b8,o=40*b8,n=0;n<4;++n){m=B.ks[n]
r=A.fs0(m).a[1]
l=m.a==="bus"
k=(l?120:95.94999999999999)/2
j=new A.bLa()
for(i=34,h=0;h<4;++h){if(h===n||D.o.ao(n,2)!==D.o.ao(h,2))continue
g=D.k.F(v[h]-v[n],r)
if(g<0)g+=r
g-=k+(B.ks[h].a==="bus"?120:95.94999999999999)/2
if(g<400)i=Math.min(i,C.jh(j.$1(g-18)))}for(f=$.bGo(),e=f.length,d=r-30,u=0;u<f.length;f.length===e||(0,C.K)(f),++u){a0=f[u]
if(a0.a!==D.o.ao(n,2))continue
a1=A.hcg(a0,b7.c)
if(a1===0)continue
a2=D.k.F(a0.b-(v[n]+k),r)
if(a2<0)a2+=r
if(a2>d)continue
if(a2<260)a3=!(a1===1&&a2<w[n]*1.2)
else a3=!1
if(a3)i=Math.min(i,C.jh(j.$1(a2-4)))}for(f=$.h2z(),u=0;u<2;++u){t=f[u]
a4=t.e[n]
if(a4<0)continue
e=v[n]
a2=D.k.F(a4-e,r)
if(a2<0)a2+=r
if(D.k.F(e-a4,r)<t.f[n]){if(t.r<0)t.r=n
continue}if(t.r===n)continue
e=w[n]
for(d=$.bGo(),a3=d.length,a5=b7.c,a6=!1,a7=0;a7<a3;++a7){a0=d[a7]
if(a0.a!==D.o.ao(n,2)||A.hcg(a0,a5)===0)continue
a8=D.k.F(a0.b-(v[n]+k),r)
if((a8<0?a8+r:a8)<a2)a6=!0}if(t.r<0&&a2<40+e*e/220+20&&!a6){t.r=n
continue}if(a2<400)i=Math.min(i,C.jh(j.$1(a2-10)))}f=A.Lp(m,v[n]).a
a9=f[0]
b0=f[1]
b1=f[2]
b2=f[3]
for(f=b7.d,e=f.length,d=k-5,a3=k+110,u=0;u<f.length;f.length===e||(0,C.K)(f),++u){a5=f[u]
b3=a5.a-a9
b4=a5.b-b0
b5=b3*b1+b4*b2
a5=!1
if(b5>d)if(b5<a3){a5=l?33.54:31.45
a5=Math.abs(-b3*b2+b4*b1)<a5/2+16}if(a5)i=Math.min(i,C.jh(j.$1(b5-k-10)))}b6=w[n]
l=b6<i?Math.min(i,b6+o):Math.max(i,b6-p)
w[n]=l
if(l<0){w[n]=0
l=0}v[n]=v[n]+l*b8}},
cY6(d,e,f){this.FN(0,f)
return A.Lp(B.ks[e],this.a[e])},
cSI(d,e){var w,v,u,t,s,r,q,p,o,n,m,l
for(w=this.a,v=this.b,u=0;u<4;++u){if(v[u]<4)continue
t=B.ks[u]
s=A.Lp(t,w[u]).a
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
A.Ap.prototype={
ga8D(){var w=this.d,v=w.e*3.141592653589793/2,u=Math.sin(v),t=Math.cos(v),s=this.r-1
return new C.z(w.c+u*42-t*s*24,w.d+t*42+u*s*24)}}
A.cCw.prototype={
bB8(d,e){var w,v,u,t,s=this,r=x._,q=C.a([],r)
for(w=s.a.x,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u){t=w[u]
if(t.b==="ubstation")q.push(t)}s.c!==$&&C.aQ()
s.c=q
r=C.a([],r)
for(q=w.length,u=0;u<w.length;w.length===q||(0,C.K)(w),++u){t=w[u]
v=t.b
if(v==="house2"||v==="bighouse")r.push(t)}s.d!==$&&C.aQ()
s.d=r
s.UV(0)},
UV(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.d
f===$&&C.c()
if(f.length===0)return
w=g.c
w===$&&C.c()
v=w.length
u=g.b
t=g.e
s=C.T(t)
r=s.k("Y<1>")
s=s.k("cP<1,G>")
q=s.k("M.E")
p=0
for(;p<w.length;w.length===v||(0,C.K)(w),++p){o=w[p]
n=C.q1(q)
n.v(0,new C.cP(new C.Y(t,new A.cCy(o),r),new A.cCz(),s))
for(m=0;m<3;++m){if(n.q(0,m))continue
l=g.f
k=l==null
if((k?null:l.d)===o)l=(k?null:l.r)===m
else l=!1
if(l)continue
l=g.x++
j=f[u.ap(f.length)]
i=A.yT(j)
h=Math.sqrt(Math.pow(o.c-i.a,2)+Math.pow(o.d-i.b,2))
l=new A.Ap(l,B.dmd[u.ap(12)],new A.tU(B.ayO[u.ap(5)],B.Mw,B.dum[u.ap(6)],D.aK,"human",!1,0,1),o,j,6+D.o.E(D.k.V(h/45),0,30),m)
l.x=d
t.push(l)}}},
aqV(d,e){var w,v,u,t=this.c
t===$&&C.c()
w=t.length
v=0
for(;v<t.length;t.length===w||(0,C.K)(t),++v){u=t[v]
if(Math.sqrt(Math.pow(u.c-d,2)+Math.pow(u.d-e,2))<150)return u}return null},
cXS(d,e){var w,v,u,t,s,r,q=this
if(q.f!=null)return null
w=q.aqV(d,e)
if(w==null)return null
v=C.a([],x.bz)
for(u=q.e,t=u.length,s=0;s<u.length;u.length===t||(0,C.K)(u),++s){r=u[s]
if(r.d===w)v.push(r)}if(v.length===0)return null
D.d.aX(v,new A.cCx())
r=D.d.gI(v)
D.d.W(u,r)
return q.f=r},
ga7a(d){var w=this.f
return w==null?null:A.yT(w.e)},
cPE(d,e,f){var w,v,u=this,t=u.f,s=u.ga7a(0)
if(t==null||s==null)return 0
if(Math.sqrt(Math.pow(s.a-d,2)+Math.pow(s.b-e,2))>70)return 0
u.f=null;++u.r
w=u.w
v=t.f
u.w=w+v
u.y=f+4
u.UV(f)
return v},
amM(d){var w,v,u,t,s,r,q,p
if(d<this.y)return B.It
w=C.a([],x.F)
for(v=this.e,u=v.length,t=d*1.4,s=0;s<v.length;v.length===u||(0,C.K)(v),++s){r=v[s]
q=r.d
p=r.c
w.push(new A.a4E(r.ga8D().a,r.ga8D().b,Math.atan2(q.c-r.ga8D().a,q.d-r.ga8D().b)+3.141592653589793,t+r.a,!1,!1,p,p.c))}return w}}
A.pJ.prototype={}
A.bKT.prototype={
gMh(){var w,v=this,u=v.r
if(u===$){w=A.hCs(v.b)
v.r!==$&&C.bE()
v.r=w
u=w}return u},
cdr(){var w,v=this.a
A:{if("hospital"===v){w=B.czI
break A}if("dmv"===v){w=B.duI
break A}if("shop"===v){w=B.d_4
break A}if("school"===v){w=B.d8x
break A}if("firestation"===v){w=B.dnT
break A}if("tower"===v){w=B.di_
break A}w=B.dsH
break A}return w},
cIv(){var w,v=this.a
A:{if("hospital"===v){w=B.czE
break A}if("dmv"===v){w=B.dav
break A}if("shop"===v){w=B.d52
break A}if("school"===v){w=B.dhK
break A}if("firestation"===v){w=B.deK
break A}if("tower"===v){w=B.dxa
break A}w=B.cZy
break A}return w},
fB(d,e){var w,v,u,t,s,r,q,p=this,o=p.ax
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
t=p.c9_(q,e)}if(t!=null)p.B(e)
return t},
c9_(d,e){var w,v,u,t,s,r=this,q="The city is still loading.",p="The breaker panel on level "
switch(r.a){case"hospital":if(e==null)return q
if(d===0){w=e.gCc()
v=C.T(w).k("Y<1>")
u=C.C(new C.Y(w,new A.bKU(),v),v.k("M.E"))
if(u.length===0)return"The desk: nobody needs the hospital right now. "+e.x+" doses of medicine in stock."
return e.aDZ(D.d.gI(u))}t=d-1
if(e.e[t].a<0)return"This bed is empty. Admit someone at the desk first."
return e.bkS(t)
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
return"You taught the class a lesson. +3 points. "+B.a4N[D.o.F(w==null?0:w,5)]}w=e==null?null:e.r
return"The library: "+B.a4N[D.o.F(w==null?1:w,5)]
case"firestation":if(d===0){if(e!=null)e.r+=2
return"You checked the equipment with the firefighters. +2 points. Keep the extinguishers charged."}w=e==null?null:e.r
return"Fire drill: "+B.a4N[D.o.F((w==null?0:w)+1,5)]
case"tower":if(d===0){r.w=!0
return"The elevator: choose your level (you are on level "+r.f+" of "+r.gMh()+")."}if(d===2){r.x=!0
return"The balcony on level "+r.f+": the whole town is below you."}if(r.c){r.cy=!0
return p+r.f+". This office has no power. Let us find the wiring fault."}return p+r.f+": every breaker is on and the office has power."
default:if(d===0){if(r.c){r.cy=!0
return"The breaker panel. This house has no power. Let us find the wiring fault."}return"The breaker panel: every breaker is on and the house has power."}return r.c?"The outlet is dead: there is no power in this house.":"The outlet works. Everything here is wired right."}},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this
g.ch=d
w=g.a
if(w==="cabin"){g.bFT()
return}v=C.a([],x.z)
u=new A.f3(v)
t=C.a([],x.E)
A:{if("hospital"===w){s=B.eIu
break A}if("shop"===w){s=B.eCi
break A}if("dmv"===w){s=B.eEG
break A}if("school"===w){s=B.eVT
break A}if("firestation"===w){s=B.eJv
break A}if("tower"===w){s=new C.z(g.c?B.agR:B.ajI,B.agn)
break A}s=new C.z(g.c?B.agR:B.brE,B.iB)
break A}r=s.a
u.f=-1
u.kX(B.hd0,B.haU,s.b,0.2,3)
u.f=0
u.x=$.dp=$.dp+1
u.hn(B.ha2,B.aYy,r,3)
u.x=0
u.x=$.dp=$.dp+1
u.hn(B.h8F,B.abD,r,3)
u.x=0
s=w==="tower"
if(s){u.f=3
u.d=0.18
u.aE(B.aYM,B.abD,B.ZD)
u.d=1
u.f=0}else{u.x=$.dp=$.dp+1
u.hn(B.aYM,B.abD,r,3)
u.x=0}u.f=0
q=s&&g.f>1
p=$.dp+1
if(q){u.x=$.dp=p
u.hn(B.hba,B.aYy,r,3)
u.x=0}else{u.x=$.dp=p
u.hn(new A.q(-94,70,320.6),new A.q(113.2,140,1.2),r,2)
u.x=0
u.x=$.dp=$.dp+1
u.hn(new A.q(94,70,320.6),new A.q(113.2,140,1.2),r,2)
u.x=0
u.x=$.dp=$.dp+1
u.aE(new A.q(0,102,320.6),new A.q(76,76,1.2),r)
u.x=0
u.x=$.dp=$.dp+1
u.aF(B.he9,B.hk_,B.be1,0.5)
u.x=0}u.f=1
for(o=0;o<3;++o){n=B.doA[o]
u.aE(new A.q(n,78,0.6),B.hjv,B.kI)
u.aF(new A.q(n,78,0.8),B.h92,B.i4,0.6)}for(q=!s,o=0;o<2;++o){m=B.cH3[o]
u.aE(new A.q(-149.6,78,m),B.aYo,B.kI)
u.aF(new A.q(-149.2,78,m),B.aZ7,B.i4,0.6)
if(q){u.aE(new A.q(149.6,78,m),B.aYo,B.kI)
u.aF(new A.q(149.2,78,m),B.aZ7,B.i4,0.6)}}u.aE(B.hef,B.hjZ,B.kI)
u.aE(B.her,B.h6j,D.bO)
u.f=2
u.r=!0
for(q=w!=="house2",p=w==="bighouse",o=0;o<3;++o){n=B.dp3[o]
for(l=0;l<2;++l){m=B.cH4[l]
u.dm(new A.q(n,138,m),new A.q(n,122,m),0.5,D.iF,4)
k=(!q||p||s)&&g.c?D.hm:B.o9
u.ee(new A.q(n,120,m),5,k,3,6)}}switch(w){case"hospital":g.c0x(u,t,d)
break
case"shop":g.cxo(u,t)
break
case"dmv":g.bOz(u,t)
break
case"school":g.cv4(u,t)
break
case"firestation":g.cAC(u,t)
break
case"tower":g.cEM(u,t)
break
default:u.f=1
u.aE(B.hll,B.hfT,g.c?B.qe:B.ahg)
u.f=2
u.aF(B.him,B.h3A,B.YT,0.1)
u.aF(B.hin,B.h3B,B.Mj,0.1)
u.aF(B.h3d,B.h8m,B.nY,0.2)
u.aF(B.hah,B.hkV,E.FO,0.4)
u.aE(B.h41,B.h4H,B.ai5)
u.ee(B.hhP,10,B.Fn,3,6)
g.bbE(u,t)}u.f=1
if(s&&g.f>1)t.push(B.c3a)
else{u.aE(B.heL,B.hbN,D.cT)
t.push(B.c39)}if(d!=null){w=d.r
k=d.w
j=d.x
i=g.cx!=null?"   \ud83d\udce6 carrying":""
t.push(new A.hi(B.h1B,"\u2b50 "+w+"   \ud83c\udf5e "+k+"   \ud83d\udc8a "+j+i,D.O,0))}h=C.a([],x.a)
if(s){u.f=2
u.e=0
u.aF(B.h3v,B.aYt,D.au,0.3)
u.aF(B.han,B.aYt,D.au,0.3)
u.aF(B.heB,B.hjy,D.au,0.3)
w=x.o
h.push(new A.fo(C.a([B.h9Q,B.hf5,B.hdW,B.hh9],w),0,new A.bL2(g),960,560,60,2,0,!1))
h.push(new A.fo(C.a([B.h6R,B.hlt,B.h5N,B.hjt],w),0,new A.bL3(g),960,560,60,2,0,!1))
h.push(new A.fo(C.a([B.hjd,B.h1f,B.h98,B.hc_],w),0,new A.bL4(g),960,560,60,2,0,!1))}if((!q||p)&&!g.c)h.push(new A.fo(C.a([B.hfE,B.hb6,B.he1,B.hdV],x.o),0,new A.bL5(g),960,480,60,2,0,!1))
g.ay=new A.qW(v,B.SL,t,h,null,!1,0)},
rG(d,e,f,g,h){var w=d.f
d.f=1
d.dm(new A.q(e,0.2,f),new A.q(e,0.6,f),g,h,20)
d.f=w},
c0x(d,e,f){var w,v,u,t,s,r,q,p,o
d.f=1
d.aE(B.aXi,B.h6w,D.bB)
d.aE(B.aXi,B.h3L,D.bB)
d.f=2
d.aF(B.hiO,B.h9A,B.nY,0.15)
d.aF(B.hiP,B.h9V,D.bN,0.3)
d.aE(B.hhM,B.h8B,D.aJ)
this.rG(d,-80,66,22,D.cp)
e.push(B.c3g)
e.push(B.c35)
for(w=0;w<2;++w)d.aE(new A.q(-105,8,B.chz[w]),B.h7Y,D.bt)
d.ee(B.h48,9,B.Fn,3,6)
for(v=f!=null,u=0;u<3;++u){t=48+u*50
d.aE(new A.q(76,8,t),B.h9x,D.cq)
d.aE(new A.q(76,14,t),B.h9r,D.aP)
d.aE(new A.q(108,18,t),B.h46,D.c)
s=v&&u<f.e.length?f.e[u]:null
if(s!=null&&s.a>=0){r=f.c
r===$&&C.c()
q=r[s.a]
r=s.b>70?D.ba:D.c0
d.aE(new A.q(54,24,t),B.h6z,r)
r=s.b>70
p=r?"cared for":"needs treatment"
r=r?D.ej:D.bB
e.push(new A.hi(new A.q(76,40,t),q.a.b+"  "+p,r,0))}else e.push(new A.hi(new A.q(76,30,t),"Free bed "+(u+1),D.bt,0))
r=t-2
o=d.f
d.f=1
d.dm(new A.q(20,0.2,r),new A.q(20,0.6,r),16,D.ay,20)
d.f=o}},
bOz(d,e){var w,v,u,t,s
d.f=2
d.r=!0
d.x=$.dp=$.dp+1
d.aF(B.aX9,B.h4j,D.bt,0.15)
d.aF(B.aXc,B.h4m,D.bN,0.3)
d.aF(B.hig,B.h5y,D.au,0.3)
d.aF(B.hhm,B.haR,D.b8,0.5)
d.aE(B.hif,B.h8D,D.aK)
d.aE(B.h6q,B.h4G,D.bs)
d.x=0
d.x=$.dp=$.dp+1
d.aE(B.aXQ,B.aXm,D.cr)
d.aE(B.aXM,B.aXr,D.bl)
d.ee(B.aXN,5.5,B.aga,5,8)
d.ee(B.aXO,5.7,D.au,3,8)
d.x=0
d.x=$.dp=$.dp+1
d.aE(B.hhT,B.h6Y,D.aP)
for(w=0;w<3;++w){v=90+w*30
d.aEm(new A.q(-146,62,v),B.h57,[D.bB,D.bs,D.bl][w],0)
d.aE(new A.q(-145.6,62,v),B.hjq,D.c)}d.aE(B.h4o,B.h6X,D.fU)
d.aE(B.hdw,B.hkh,D.c)
d.aE(B.hcF,B.hj0,D.bB)
d.x=0
for(u=0;u<4;++u){t=B.doB[u]
d.x=$.dp=$.dp+1
d.aE(new A.q(t,9,150),B.h5F,D.bl)
d.aE(new A.q(t,17,160),B.h5z,D.bl)
d.aE(new A.q(t-8,4,150),B.aXH,D.aK)
d.aE(new A.q(t+8,4,150),B.aXH,D.aK)
d.x=0}d.x=$.dp=$.dp+1
d.aE(B.h2F,B.h8P,D.bL)
d.aF(B.h1J,B.h7L,D.aw,0.4)
d.aF(B.hiv,B.h5Y,D.du,0.5)
for(u=0;u<2;++u){t=E.aBD[u]
for(s=0;s<2;++s){v=B.chs[s]
d.dm(new A.q(t,9,v-1.5),new A.q(t,9,v+1.5),5,D.au,8)}}d.x=0
this.rG(d,0,78,24,D.aJ)
e.push(B.c3d)
e.push(B.c36)
e.push(B.c3e)},
aVS(a5,a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=a6*128
A:{if(1===a7){w=B.ddL
break A}if(2===a7){w=B.df9
break A}w=B.d8O
break A}a5.x=$.dp=$.dp+1
a5.aE(new A.q(a6*148,40,120),B.h7y,B.ag7)
for(v=0;v<2;++v)a5.aE(new A.q(a4,40,B.cLh[v]),B.h7c,B.ag7)
a5.aE(new A.q(a4,4,120),B.h7d,B.bkR)
for(u=0;u<4;++u)a5.aF(new A.q(a4,11+u*18,120),B.h78,B.bum,0.1)
for(t=a7===0,s=w.length,r=a6*2.7,u=0;u<4;++u){q=12+u*18
for(p=q+6.6,o=q+3.2,n=u*7,m=q+10,l=q+12.5,k=q+7,j=q+8,i=q+2.5,h=q+5.5,g=0;g<9;++g){f=76+g*11
for(e=n+g*3,d=u+g+a7,a0=0;a0<2;++a0){a1=a6*(114+a0*14)
a2=w[D.o.F(e+a0*5+a7,s)]
switch(D.o.F(d+a0,4)){case 0:a5.d1(new A.q(a1,q,f),new A.q(a1,j,f),3.2,a2,0.3,8)
a5.Lh(new A.q(a1,i,f),new A.q(a1,h,f),3.3,D.c,!1,8)
break
case 1:a5.aF(new A.q(a1,k,f),B.hbD,a2,0.1)
a5.aE(new A.q(a1-r,j,f),B.hfv,D.c)
break
case 2:a5.d1(new A.q(a1,q,f),new A.q(a1,m,f),2.4,a2,0.45,8)
a5.dm(new A.q(a1,m,f),new A.q(a1,l,f),1.2,D.c,6)
break
default:a3=t?B.but:a2
a5.aF(new A.q(a1,o,f),B.heO,a3,0.05)
a3=t?B.bhj:D.c
a5.aE(new A.q(a1,p,f),B.hac,a3)}}}}a5.x=0},
aUP(d,e){var w,v,u,t,s,r,q,p
d.x=$.dp=$.dp+1
d.aF(new A.q(e,32,11),B.h7Z,D.bO,0.3)
d.aE(new A.q(e,33,22.4),B.h7M,D.bo)
for(w=e-21,v=0;v<3;++v){u=v*17
d.aE(new A.q(e,15+u,21),B.h7G,D.bL)
for(t=16+u,u=27+u,s=v*2,r=0;r<7;++r){q=w+r*7
d.d1(new A.q(q,t,21.6),new A.q(q,u,21.6),2.2,B.d3e[D.o.F(r+s,6)],0.5,6)}}d.x=0
p=d.f
d.f=3
d.d=0.2
d.aE(new A.q(e,33,23.2),B.hl3,B.ZD)
d.d=1
d.f=p},
cxo(d,e){var w,v,u,t,s,r,q,p,o,n=this,m=n.b.b==="gasstation"
d.f=2
d.r=!0
d.x=$.dp=$.dp+1
d.aF(B.aX9,B.h40,B.nY,0.15)
d.aF(B.aXc,B.h42,D.bN,0.3)
d.aE(B.hbq,B.hkr,B.buA)
d.aF(B.hia,B.h5l,D.e9,0.3)
d.aF(B.hic,B.h4I,D.b8,0.5)
d.aE(B.h2w,B.h3M,D.au)
for(w=0;w<6;++w)d.aE(new A.q(14+w*7.5,33,47),B.h8e,B.dup[D.o.F(w,4)])
d.x=0
d.x=$.dp=$.dp+1
d.aE(B.aXQ,B.aXm,D.cr)
d.aE(B.aXM,B.aXr,D.cT)
d.aE(B.heX,B.hd_,D.w_)
d.ee(B.aXN,5.5,B.aga,5,8)
d.ee(B.aXO,5.7,B.biu,3,8)
d.x=0
n.aVS(d,-1,0)
n.aVS(d,1,m?2:1)
n.aUP(d,-104)
n.aUP(d,104)
for(v=[B.eCH,B.eS3],u=0;u<2;++u){t=v[u]
s=t.a
r=t.b
d.x=$.dp=$.dp+1
d.aE(new A.q(s,5,170),B.h6N,B.ai5)
d.aE(new A.q(s,11,160),B.h6P,B.blE)
for(t=s-13.5,q=J.a7(r),w=0;w<4;++w)for(p=t+w*9,o=0;o<3;++o)d.ee(new A.q(p,12.5,163+o*7.5),4.2,q.h(r,D.o.F(w+o,3)),4,6)
d.x=0}d.x=$.dp=$.dp+1
d.aE(B.aX4,B.h3U,m?D.bB:D.cT)
d.aE(B.hhL,B.aXE,D.ay)
d.aE(B.h3W,B.aXE,m?D.bo:D.aJ)
d.x=0
n.rG(d,-64,120,24,D.bs)
n.rG(d,64,120,24,D.bq)
n.rG(d,0,84,22,D.bf)
e.push(new A.hi(B.h1v,m?"\u26fd NGMY Gas shop":"\ud83d\uded2 NGMY Mart",D.O,0))
e.push(B.c37)
e.push(new A.hi(B.h9w,m?"\ud83d\udee2 For the car":"\ud83d\udc8a Medicine and health",D.iY,0))
e.push(B.c3h)
e.push(B.c38)
e.push(B.c3i)},
cv4(d,e){var w,v,u,t,s
d.aF(B.h38,B.hlK,D.dY,0.1)
d.aE(B.hkd,B.hgn,B.bq8)
d.aF(B.h1L,B.h49,B.nY,0.15)
for(w=0;w<4;++w){v=B.dgE[w]
u=v.a
t=v.b
for(s=0;s<2;++s){v=u+B.a5C[s]
d.aE(new A.q(v,10,t),B.h5q,B.iB)
d.aE(new A.q(v,5,t),B.h65,D.bn)}}this.rG(d,0,80,24,D.bs)
this.rG(d,90,56,20,D.cp)
e.push(B.c33)
e.push(B.c3b)},
cAC(d,e){var w,v,u,t,s
d.aF(B.h1E,B.h4W,D.bB,0.3)
d.aF(B.hiA,B.h8k,D.bB,0.3)
for(w=0;w<2;++w){v=B.doY[w]
for(u=0;u<2;++u){t=B.cvC[u]
d.dm(new A.q(v,6,t-1.5),new A.q(v,6,t+1.5),8,D.nm,10)}}for(s=0;s<5;++s)d.aE(new A.q(-142,30,110+s*18),B.h3O,D.al)
d.dm(B.h3S,B.h3T,2,D.bs,6)
this.rG(d,-60,130,24,D.ay)
this.rG(d,80,56,20,D.cp)
e.push(B.c31)
e.push(B.c3c)},
cEM(d,e){var w,v,u,t,s,r,q,p,o,n=this
d.f=1
d.aE(B.hjT,B.hd5,B.dvI[D.o.F(n.f,5)])
d.f=2
d.b=19502
d.aF(B.haH,B.h9B,B.bsp,0.3)
d.aF(B.hgF,B.heF,D.tX,0.2)
d.aF(B.hbg,B.hb_,D.bL,0.7)
d.aF(B.h85,B.aY4,D.bt,0.5)
d.aF(B.h6c,B.aY4,D.bt,0.5)
d.aF(B.h6K,B.h3D,D.bt,0.5)
d.e=16
d.aF(B.h3m,B.ha5,D.b8,0.4)
d.aE(B.hbC,B.h73,D.au)
d.aE(B.hhl,B.h3K,D.e9)
d.ee(B.hbk,2,D.bs,3,5)
d.ee(B.h7t,2,D.bf,3,5)
d.b=d.e=0
n.rG(d,0,70,26,D.aJ)
for(w=0;w<3;++w){v=B.cZD[w]
u=v.a
t=v.b
d.aF(new A.q(u,15,t),B.h7f,B.nY,0.2)
d.aE(new A.q(u-19,7,t),B.aXU,D.iF)
d.aE(new A.q(u+19,7,t),B.aXU,D.iF)
d.aF(new A.q(u,24,t-4),B.h4p,E.FO,0.5)
d.aE(new A.q(u,9,t+18),B.h4w,D.cr)
d.aE(new A.q(u,16,t+25),B.h4r,D.cr)}n.rG(d,105,100,26,D.bf)
d.d=0.3
d.f=3
d.aE(new A.q(144,14,100),B.h7u,B.ZD)
d.d=1
d.f=2
for(w=0;w<5;++w)d.aF(new A.q(144,14,B.d6N[w]),B.hdm,D.dn,0.5)
d.ee(B.h4b,10,B.Fn,3,6)
d.aE(B.h44,B.h6t,B.nY)
s=-(n.f*22)
d.f=-1
d.aE(new A.q(520,s-1,105),B.h9T,B.Y2)
d.aE(B.h8R,B.h68,B.i4)
d.f=1
for(v=n.b.a,r=v*7,q=0;q<15;++q){p=30+D.o.F(r+q*13,90)
o=B.dc5[D.o.F(v+q,4)]
d.aE(new A.q(215+D.o.F(q,5)*80,s+p/2,-60+D.o.ao(q,5)*135),new A.q(38,p,38),o)}e.push(new A.hi(B.h1t,"\ud83c\udfe2 LEVEL "+n.f+" of "+n.gMh(),D.dF,19502))
e.push(B.c32)
e.push(B.c34)
n.bbE(d,e)},
bFT(){var w,v,u,t,s,r,q,p,o,n=C.a([],x.z),m=new A.f3(n)
m.f=-1
m.aF(B.hcq,B.hk3,D.bt,0.3)
m.f=0
m.x=$.dp=$.dp+1
m.aF(B.hii,B.aXD,B.Yu,0.4)
m.x=0
m.x=$.dp=$.dp+1
m.aF(B.h6M,B.aXD,B.Yu,0.4)
m.x=0
m.x=$.dp=$.dp+1
m.aF(B.h30,B.h8Z,B.Yu,0.4)
m.x=0
m.f=1
m.aE(B.h1q,B.h9_,D.aN)
m.f=2
m.r=!0
for(w=0;w<2;++w)m.aF(new A.q(B.aBF[w],40,38),B.hbW,D.bL,0.7)
m.aF(B.h3n,B.hgI,D.tX,0.2)
for(w=0;w<2;++w)m.aF(new A.q(B.doJ[w],45,80),B.h4U,D.aK,0.3)
m.aF(B.h3j,B.h8Y,D.aK,0.3)
m.aE(B.h2X,B.h6G,D.al)
m.aF(B.hkq,B.aYX,D.au,0.3)
m.aF(B.hcN,B.aYX,D.au,0.3)
v=this.as
D.d.aa(v)
u=x.o
v.push(new A.fo(C.a([B.hdA,B.hbA,B.hfu,B.hjF],u),0,new A.bKV(this),520,230,6,2,0,!1))
v.push(new A.fo(C.a([B.ha3,B.hal,B.hjs,B.hg2],u),0,new A.bKW(),720,600,30,2,0,!1))
v.push(new A.fo(C.a([B.hdx,B.hhk,B.hez,B.hd4],u),0,new A.bKX(),720,600,30,2,0,!1))
m.f=-1
m.kX(B.hkX,B.hkI,B.agn,0.2,3)
m.f=0
for(w=0;w<3;++w){t=B.d7g[w].a
s=t[0]
r=t[1]
q=t[2]
p=t[3]
m.x=$.dp=$.dp+1
m.hn(new A.q(s,70,r),new A.q(q,140,p),B.ajI,3)
m.x=0}m.f=1
m.aE(B.h1G,B.h6l,B.bug)
m.aF(B.h1h,B.hkt,D.tX,0.2)
m.f=1
for(w=0;w<2;++w){s=B.dp_[w]
m.aF(new A.q(s,75,278.6),B.hlb,D.au,0.3)
t=s+42
o=s-42
v.push(new A.fo(C.a([new A.q(t,100,277.7),new A.q(o,100,277.7),new A.q(o,50,277.7),new A.q(t,50,277.7)],u),0,new A.bKY(s),720,420,0.6,1,0,!1))}m.aF(B.hbb,B.hcR,E.iC,0.3)
v.push(new A.fo(C.a([B.hcj,B.hfS,B.hcy,B.hdv],u),0,new A.bKZ(),900,160,0.6,1,0,!1))
v=C.C(v,x.fd)
this.ay=new A.qW(n,B.SL,B.uV,v,null,!1,0)},
bbE(d,e){var w,v,u,t,s,r,q,p,o=this,n="dead, tap to fix it"
d.b=19500
d.aF(B.hhS,B.h8c,B.Y6,0.5)
for(w=0;w<4;++w){v=o.c&&w===0?D.cd:B.u8
d.aE(new A.q(-144.2,62-w*6,45),B.hc9,v)}d.b=0
o.rG(d,-100,100,22,o.c?D.aw:D.bf)
o.rG(d,90,100,22,D.cp)
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
d.aE(B.h7r,B.h5c,o.c?D.aw:D.bf)
d.b=19501
d.aE(B.h9W,B.haA,t?D.bf:D.aw)
d.aE(B.hiD,B.hb1,s?D.bf:D.aw)
d.aE(B.hcb,B.hep,r?D.bf:D.aw)
d.d=1
d.aF(B.hhx,B.hbh,B.MV,0.25)
for(q=0;q<2;++q)for(u=26+F.hd[q]*3.4,p=0;p<2;++p)d.aE(new A.q(95+B.RL[p],u,2.6),B.hdb,B.ahP)
d.aF(B.hjV,B.hfe,B.MV,0.25)
d.aE(new A.q(-60,s?52:48,2.8),B.h67,B.ajO)
d.b=0
d.f=2
if(o.c)v=v.length===0?"\u26a1 Breaker panel: tap to switch the power on":"\u26a1 Breaker panel: still to fix: "+D.d.aI(v,", ")
else v="\u26a1 Breaker panel: all fine"
e.push(new A.hi(B.hhR,v,o.c?D.bB:D.ej,19500))
v=new A.bL_(o)
u=t?"\ud83d\udd0c Outlets: fixed":"\ud83d\udd0c Outlet: "+C.w(v.$2(D.a3C,n))
e.push(new A.hi(B.h9X,u,t?D.ej:D.bB,19501))
u=s?"\ud83d\udca1 Switch: fixed":"\ud83d\udca1 Switch: "+C.w(v.$2(B.cts,"no power, tap to fix it"))
e.push(new A.hi(B.hiE,u,s?D.ej:D.bB,19501))
v=r?"\ud83d\udca1 Ceiling light: fixed":"\ud83d\udca1 Ceiling light: "+C.w(v.$2(B.clZ,n))
e.push(new A.hi(B.h1u,v,r?D.ej:D.bB,19501))
if(o.c)e.push(B.c30)},
cPs(){var w,v,u,t,s,r
if(this.a!=="tower")return B.qH
w=C.a([],x.a)
for(v=x.o,u=0;u<2;++u){t={}
s=B.diP[u]
t.a=null
t.a=s.b
s=s.a*(22+22*this.y)
r=s-18
s+=18
w.push(new A.fo(C.a([new A.q(r,62,7.35),new A.q(s,62,7.35),new A.q(s,48,7.35),new A.q(r,48,7.35)],v),0,new A.bL6(t),540,210,20,2,0,!1))}return w},
cPI(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=x.z,i=C.a([],j),h=new A.f3(i),g=k.a,f=g==="tower"
if(f||g==="cabin"){w=C.a([],j)
v=new A.f3(w)
if(f){v.e=16
for(u=0;u<2;++u)v.aF(new A.q(F.hd[u]*(22+22*k.y),42,6.6),B.hke,D.aP,0.7)}else{v.e=16
for(u=0;u<2;++u)v.aF(new A.q(F.hd[u]*(9+18*k.y),40,78.6),B.h4T,D.aN,0.7)}D.d.v(i,w)}switch(g){case"shop":A.wX(h,B.et9,d,B.JC,!1,0,D.b7)
break
case"hospital":A.wX(h,B.etd,d,B.TR,!1,0,D.bP)
t=D.k.F(d*12,220)
g=t<110
f=g?t:220-t
g=g?0:3.141592653589793
A.wX(h,A.aud(!1,0,-1,"",!1,0,"",-1,t/12,!1,!1,!1,0,!1,!0,6,g,40+f),d,B.JC,!1,0,D.bO)
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
A.wX(new A.f3(f),B.etc,d,p,!1,0,p.c)
D.d.v(i,A.nH(f,-1.5707963267948966,-1.5707963267948966,new A.q(46,27,48+r*50)))}++r}}break
case"school":A.wX(h,B.ete,d,B.TR,!1,0,D.bl)
for(u=0;u<3;++u){g=B.dan[u]
A.wX(h,new A.yb(0,g.a,g.b,3.141592653589793,!1,!1,!1,!1,!1,0,!1,!1,"","",-1,0,-1,0),d,B.JC,!1,0,g.c)}break
case"firestation":A.wX(h,B.eta,d,B.JC,!1,0,D.bB)
A.wX(h,B.etb,d,B.TR,!1,0,D.ay)
break
default:break}g=k.at
g===$&&C.c()
f=g.f
w=g.r
o=g.w
n=g.x
m=g.y
l=g.z&&n
A.wX(h,A.aud(!1,0,-1,"",!1,g.Q,"",-1,m,!1,!1,!1,0,l,n,f,o,w),d,e,!0,0,null)
if(k.cx!=null){j=C.a([],j)
new A.f3(j).aE(new A.q(g.f+Math.sin(g.w)*9,48+g.Q,g.r+Math.cos(g.w)*9),B.aXs,B.iB)
D.d.v(i,j)}return i},
gdd(d){return this.e}}
A.FA.prototype={}
A.Pe.prototype={
gUy(){var w,v=this
if(!v.f)return"has died"
if(v.r>=0)return"in hospital"
if(v.c<30)return"in danger"
if(v.e)return"sick"
w=v.b
if(w>80)return"starving"
if(w>55)return"hungry"
if(v.d<40)return"unhappy at home"
return"fine"},
gaEh(d){var w,v=this.gUy()
A:{if("has died"===v){w="\ud83d\udd6f"
break A}if("in hospital"===v){w="\ud83c\udfe5"
break A}if("in danger"===v){w="\ud83c\udd98"
break A}if("sick"===v){w="\ud83e\udd12"
break A}if("starving"===v||"hungry"===v){w="\ud83c\udf7d"
break A}if("unhappy at home"===v){w="\ud83d\ude1f"
break A}w="\ud83d\ude42"
break A}return w}}
A.Ig.prototype={}
A.Mb.prototype={}
A.aUt.prototype={
bAb(d,e){var w,v=C.a([],x.fP)
for(w=0;w<7;++w)v.push(new A.Pe(B.D_[w]))
this.c=v
v[1].b=55
v[4].b=40},
gCc(){var w,v,u,t=C.a([],x.fP),s=this.c
s===$&&C.c()
w=s.length
v=0
for(;v<s.length;s.length===w||(0,C.K)(s),++v){u=s[v]
if(u.f)t.push(u)}return t},
gcOC(){var w=this.c
w===$&&C.c()
return new C.Y(w,new A.bLL(),C.T(w).k("Y<1>")).gK(0)},
PZ(d){var w=this.f
D.d.c6(w,0,d)
if(w.length>12)w.pop()},
aE_(a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this
a1.as+=a3
for(w=a1.gCc(),v=w.length,u=-0.6*a3,t=0.8*a3,s=0.2*a3,r=a1.b,q=0.012*a3,p=a1.f,o=0.15*a3,n=0;n<w.length;w.length===v||(0,C.K)(w),++n){m=w[n]
l=a4.d
l===$&&C.c()
k=m.a
j=l[k.c]
i=j.gkS()
l=k.d
if(l>=0)h=!a4.d[l].gjU()
else{l=j.c
h=(l==="bathroom"||l==="kitchen")&&!j.gjU()}if(m.r<0){m.b=Math.min(100,m.b+s)
l=i?0:45
g=h?35:0
f=m.d
f+=D.k.E(100-l-g-f,u,t)
m.d=f
if(!m.e)l=(f<40||m.b>85)&&r.ag()<q
else l=!1
if(l){m.e=!0
D.d.c6(p,0,k.b+" has fallen sick. Give medicine, or send them to the hospital.")
if(p.length>12)p.pop()}e=m.b>=95?0.9:0
if(m.e)e+=0.55
if(m.d<15)e+=0.4
if(e>0)l=m.c=m.c-e*a3
else{l=m.c
if(l<100){l=Math.min(100,l+o)
m.c=l}}if(l<=0)a1.aST(m)}}for(w=a1.e,v=1.2*a3,u=2.2*a3,d=0;d<w.length;++d){a0=w[d]
t=a0.a
if(t<0)continue
s=a1.c
s===$&&C.c()
m=s[t]
if(!m.f){a0.a=-1
continue}t=a0.b=Math.max(0,a0.b-a3)
if(t>30)a0.c=Math.min(100,a0.c+u)
else if(t<=0)if((m.c-=v)<=0){a1.aST(m)
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
a1.NM(a4)
if((a1.at-=a3)<=0){a1.at=60+r.ag()*50
a1.cJZ(a4)}},
aST(d){var w
d.f=!1
d.c=0
w=d.r
if(w>=0)this.e[w].a=-1
d.r=-1
D.d.bs(this.d,new A.bLI(d))
this.PZ(d.a.b+" has died. Keep up with everybody's needs: food, medicine and a home that works.")},
aWG(d,e){return D.d.b_(this.d,new A.bLJ(d,e))},
NM(d){var w,v,u,t,s,r,q,p,o,n=this,m=n.d,l=C.C(m,x.fC),k=l.length,j=n.f,i=0
for(;i<l.length;l.length===k||(0,C.K)(l),++i){w=l[i]
v=B.D_[w.b]
u=w.c==="power"
if(u){t=d.d
t===$&&C.c()
s=t[v.c].gkS()}else{t=v.d
r=d.d
if(t>=0){r===$&&C.c()
t=r[t].gjU()
s=t}else{r===$&&C.c()
t=r[v.c].gjU()
s=t}}if(s){D.d.W(m,w)
t=w.e
n.r=n.r+t;++n.y
u=u?"power is back":"leak is fixed"
D.d.c6(j,0,v.b+"'s "+u+". +"+t+" points. Thank you!")
if(j.length>12)j.pop()}}for(l=n.gCc(),k=l.length,u=n.b,i=0;i<l.length;l.length===k||(0,C.K)(l),++i){q=l[i]
if(m.length>=4)break
t=d.d
t===$&&C.c()
r=q.a
p=t[r.c]
if(!p.gkS()&&!n.aWG(r.a,"power")){m.push(new A.Ig(n.Q++,r.a,"power",B.d31[u.ap(3)],15))
D.d.c6(j,0,r.b+" is calling for help: no power.")
if(j.length>12)j.pop()}t=r.d
o=t>=0?d.d[t]:p
t=o.c
if((t==="bathroom"||t==="kitchen")&&!o.gjU()&&!n.aWG(r.a,"leak")&&m.length<4){m.push(new A.Ig(n.Q++,r.a,"leak",B.dbV[u.ap(3)],15))
D.d.c6(j,0,r.b+" is calling for help: a leak.")
if(j.length>12)j.pop()}}},
cJZ(d){var w,v,u,t,s,r,q=this
if(q.d.length>=3||q.gCc().length===0)return
w=q.b
v=q.gCc()[w.ap(q.gCc().length)]
u=d.d
u===$&&C.c()
t=v.a
s=u[t.c]
t=t.d
r=t>=0?u[t]:s
u=r.c
if((u==="bathroom"||u==="kitchen")&&r.gjU()&&w.ha()){r.ch=!0
r.fr=null}else if(s.gkS()){s.ay=!0
s.CW=null
s.fy=!1
s.fx.aa(0)}else return
q.NM(d)},
bfF(d){var w,v,u,t=this
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
t.PZ(u)
return u},
aLt(d){var w,v,u=this
if(!d.f)return d.a.b+" has died."
if(!d.e)return d.a.b+" is not sick."
w=u.x
if(w<=0)return y.D
u.x=w-1
d.e=!1
d.c=Math.min(100,d.c+20)
u.r+=3
v=d.a.b+" took the medicine and is better. +3 points."
u.PZ(v)
return v},
aDZ(d){var w,v,u,t
if(!d.f)return d.a.b+" has died."
if(d.r>=0)return d.a.b+" is already in hospital."
if(!d.e&&d.c>60)return d.a.b+" is not ill enough for the hospital."
w=this.e
v=D.d.bg(w,new A.bLK())
if(v<0)return"The hospital is full. Treat the patients first, they go home when they are better."
w=w[v]
u=d.a
w.a=u.a
w.b=100
w.c=0
d.r=v
t=u.b+" is in bed "+(v+1)+" of the hospital. Keep up with their care."
this.PZ(t)
return t},
bkS(d){var w,v,u=this,t=u.e[d],s=t.a
if(s<0)return"This bed is empty."
if(t.b>70)return"The patient is cared for already."
w=u.x
if(w<=0)return y.D
u.x=w-1
t.b=100;++u.r
w=u.c
w===$&&C.c()
v=w[s].a.b+" was treated. +1 point."
u.PZ(v)
return v},
aEu(d){var w,v=this
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
cTH(d){return d.r<0},
bfR(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=C.a([],x.e3),e=d.d
e===$&&C.c()
w=e[a0]
if(w.c!=="outside")return f
v=new A.bLN(new A.bLP(w))
for(e=D.d.gaf(this.gCc()),u=new C.eR(e,this.gcTG()),t=this.d,s=0;u.C();){r=e.gS(0)
q=D.d.b_(t,new A.bLM(r))
p=v.$2(r,s).a
o=p[0]
n=p[1]
m=p[2]
l=p[3]
k=p[4]
p=r.a
j=q?0.4:m
i=q?"\ud83d\udcde ":""
h=r.gaEh(0)
r.gUy()
r=q?"":l
g=q?"":k
f.push(new A.aai(p.a,a0,o,n,j,p.e,i+p.b+" "+h,q,0,r,g));++s}return f},
d_B(a2){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.r,j=l.w,i=l.x,h=l.y,g=l.z,f=l.as,e=l.Q,d=x.ez,a0=C.a([],d),a1=l.c
a1===$&&C.c()
w=a1.length
v=x.N
u=x.aU
t=0
for(;t<a1.length;a1.length===w||(0,C.K)(a1),++t){s=a1[t]
a0.push(C.H(["hunger",s.b,"health",s.c,"comfort",s.d,"sick",s.e,"alive",s.f,"bed",s.r],v,u))}a1=C.a([],x.f4)
for(w=l.e,r=w.length,q=x.di,t=0;t<w.length;w.length===r||(0,C.K)(w),++t){p=w[t]
a1.push(C.H(["res",p.a,"care",p.b,"heal",p.c],v,q))}d=C.a([],d)
for(w=l.d,r=w.length,t=0;t<w.length;w.length===r||(0,C.K)(w),++t){o=w[t]
d.push(C.H(["id",o.a,"res",o.b,"kind",o.c,"msg",o.d,"reward",o.e,"age",o.f],v,u))}w=x.y
u=C.U(v,w)
for(r=a2.gr_(),q=r.length,t=0;t<r.length;r.length===q||(0,C.K)(r),++t){n=r[t]
u.n(0,""+n.a,n.gkS())}w=C.U(v,w)
for(r=D.d.gaf(a2.gr_()),q=new C.eR(r,new A.bLQ());q.C();){m=r.gS(0)
w.n(0,""+m.a,m.gjU())}return C.H(["v",1,"seed",l.a,"points",k,"food",j,"medicine",i,"served",h,"saved",g,"clock",f,"nextCall",e,"res",a0,"beds",a1,"calls",d,"wired",u,"plumbed",w],v,x.A)},
D1(d,e){return this.bp0(0,e)},
bp0(d,e){var w=0,v=C.j(x.H),u=1,t=[],s=this,r,q,p,o
var $async$D1=C.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return C.b(C.az(),$async$D1)
case 6:r=g
q=C.dO(s.d_B(e),x.N,x.A)
J.aJ(q,"at",Date.now())
w=7
return C.b(r.ar("String","ngmy_community_v1",D.X.aq(q,null)),$async$D1)
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
return C.i($async$D1,v)}}
A.aq1.prototype={
R(){return new A.blj()}}
A.blj.prototype={
gbkB(){var w=this.r
return w===$?this.r=this.a.c:w},
Z(){this.a3()
this.a_f()},
a_f(){return this.c3u()},
c3u(){var w=0,v=C.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$a_f=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:m={}
w=3
return C.b(A.aUv(),$async$a_f)
case 3:l=e
if(t.c==null){w=1
break}m.a=null
if(l!=null){s=J.a7(l)
r=C.aK(s.h(l,"seed"))
q=r==null?null:D.k.N(r)
if(q==null)q=1
r=$.Em
if((r==null?null:r.b)===q){r.toString
t.e=r}else{r=A.aWY(q)
t.e=$.Em=r
A.hhp(r,l)}m.a=A.h3v(l)
r=Date.now()
s=C.aK(s.h(l,"at"))
s=s==null?null:D.k.N(s)
p=D.k.E((r-(s==null?Date.now():s))/1000*0.15,0,90)
while(p>0){o=p>5?5:p
s=m.a
r=t.e
r===$&&C.c()
s.aE_(0,o,r)
p-=o}}else{s=$.Em
if(s==null)s=$.Em=A.aWY(D.o.F(Date.now(),1e5))
t.e=s
s=s.b
n=A.h3u(s,s)
m.a=n
n.NM(t.e)}$.a4w=m.a
t.m(new A.dUr(m,t))
t.f=C.df(D.fB,new A.dUs(t))
case 1:return C.h(u,v)}})
return C.i($async$a_f,v)},
c94(){var w,v,u,t=this,s=t.d
if(s==null||t.c==null)return
w=s.f
v=w.length===0?"":D.d.gI(w)
u=t.e
u===$&&C.c()
s.aE_(0,1,u)
if(w.length!==0&&D.d.gI(w)!==v)t.Jd(D.d.gI(w))
if(++t.y%8===0)s.D1(0,t.e)
t.m(new A.dUE())},
t(){var w,v=this,u=v.f
if(u!=null)u.a2(0)
u=v.x
if(u!=null)u.a2(0)
u=v.d
if(u!=null){w=v.e
w===$&&C.c()
u.D1(0,w)}v.a1()},
Jd(d){var w=this,v=w.x
if(v!=null)v.a2(0)
w.m(new A.dUy(w,d))
w.x=C.cD(D.uh,new A.dUz(w))},
ac9(d){return this.bUY(d)},
bUY(d){var w=0,v=C.j(x.H),u,t=this,s,r,q
var $async$ac9=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:q=B.D_[d.b]
if(d.c==="power")s=q.c
else{r=q.d
s=r>=0?r:q.c}r=t.e
r===$&&C.c()
r.e=s
r=t.c
r.toString
w=3
return C.b(C.a5(r,!1).cc(C.ej(new A.dUn(),!1,null,x.H)),$async$ac9)
case 3:if(t.c==null){w=1
break}r=t.d
if(r!=null)r.NM(t.e)
r=t.d
if(r!=null)r.D1(0,t.e)
t.m(new A.dUo())
case 1:return C.h(u,v)}})
return C.i($async$ac9,v)},
aks(d){return this.cHm(d)},
cHm(d){var w=0,v=C.j(x.H),u,t=this,s
var $async$aks=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:s=t.e
s===$&&C.c()
s.e=d.a.c
s=t.c
s.toString
w=3
return C.b(C.a5(s,!1).cc(C.ej(new A.dUH(),!1,null,x.H)),$async$aks)
case 3:if(t.c==null){w=1
break}s=t.d
if(s!=null)s.NM(t.e)
t.m(new A.dUI())
case 1:return C.h(u,v)}})
return C.i($async$aks,v)},
a_g(d,e){var w=null,v=e.j(0.18),u=C.n(14),t=C.L(e.j(0.7),D.r,1)
return C.p(w,C.d(d,w,w,w,w,w,w,C.l(w,w,e,w,w,w,w,w,w,w,w,12.5,w,w,D.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),D.f,w,w,new C.o(v,w,t,u,w,w,D.n),w,w,w,w,N.akV,w,w,w)},
WP(d,e,f){var w=null
return new C.D(D.ns,C.B(C.a([new C.a4(62,w,C.d(d,w,w,w,w,w,w,A8.aau,w,w,w),w),C.E(C.bx(C.n(6),C.kk(D.bz,w,w,8,w,D.k.E(e/100,0,1),new C.lI(f,x.dw)),D.ap),1)],x.p),D.m,w,D.e,D.i,0,w,w),w)},
Q_(d,e,f){var w=null,v=e==null,u=v?D.dr:f.j(0.22),t=C.n(12),s=C.L(v?D.aX:f,D.r,1)
return C.aA(w,C.p(w,C.d(d,w,w,w,w,w,w,C.l(w,w,v?D.bU:f,w,w,w,w,w,w,w,w,12.5,w,w,D.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),D.f,w,w,new C.o(u,w,s,t,w,w,D.n),w,w,w,w,D.nu,w,w,w),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,e,w,w,w,w,w,w,!1,D.a3)},
aeH(d,e){return this.Q_(d,e,D.ay)},
Q0(d,e){var w=null,v=C.a([e.j(0.1),B.FT],x.O),u=C.n(18)
return C.p(w,d,D.f,w,w,new C.o(w,w,C.L(e.j(0.5),D.r,1),u,w,new C.a9(D.b0,D.b6,D.x,v,w,w),D.n),w,w,w,D.d1,D.bg,w,w,w)},
c90(d){return this.Q0(d,D.aX)},
b_H(d,e,f){var w,v=null,u=this.gbkB()===d,t=u?D.ay.j(0.22):D.c.j(0.06),s=C.n(14),r=u?D.ay:D.aX
r=C.L(r,D.r,u?2:1)
w=f>0?e+" ("+f+")":e
return C.E(C.aA(v,C.p(v,C.at(C.d(w,v,v,v,v,v,v,C.l(v,v,u?D.ay:D.ac,v,v,v,v,v,v,v,v,12.5,v,v,D.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,v),D.f,v,v,new C.o(t,v,r,s,v,v,D.n),v,v,v,D.jC,D.jW,v,v,v),D.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new A.dUG(this,d),v,v,v,v,v,v,!1,D.a3),1)},
ay4(d,e){return this.b_H(d,e,0)},
bHy(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=d.d
if(l.length===0)return new C.D(D.eu,C.x(B.dl7,D.m,m,D.e,D.i,0,D.p),m)
w=x.p
v=C.a([],w)
for(u=l.length,t=0;t<l.length;l.length===u||(0,C.K)(l),++t){s=l[t]
r=s.c==="power"
q=r?D.bs:D.cp
p=B.D_[s.b]
o=r?"\u26a1 Power":"\ud83d\udeb0 Leak"
r=r?D.bs:D.cp
v.push(n.Q0(C.x(C.a([new C.ca(D.aL,D.e,D.i,D.m,m,D.p,m,0,C.a([new A.ad2(p.e,44,m),D.as,new C.by(1,D.bb,new C.y(p.b,m,D.hv,m,m,m,m,m,m,m,m,m),m),n.a_g(o+"  +"+s.e,r)],w),m),D.N,new C.y('"'+s.d+'"',m,B.fsl,m,m,m,m,m,m,m,m,m),D.W,new C.bN(D.a8,m,m,n.aeH("\ud83d\udd27 Go and fix it",new A.dUm(n,s)),m)],w),D.E,m,D.e,D.i,0,D.p),q))}return C.x(v,D.m,m,D.e,D.i,0,D.p)},
c92(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=x.p,k=C.a([],l),j=d.c
j===$&&C.c()
w=j.length
v=0
for(;v<j.length;j.length===w||(0,C.K)(j),++v){u=j[v]
t=u.f
if(!t)s=D.aX
else s=u.gUy()==="fine"?D.ba:D.c0
t=t?1:0.5
r=u.a
q=u.gaEh(0)
p=u.gUy()
o=u.gUy()==="fine"?D.ep:D.eO
r=C.a([new C.ca(D.aL,D.e,D.i,D.m,m,D.p,m,0,C.a([new A.ad2(r.e,50,m),D.as,new C.by(1,D.bb,C.x(C.a([new C.y(r.b+"  "+q,m,D.hv,m,m,m,m,m,m,m,m,m),new C.y(r.f,m,B.aU7,m,m,m,m,m,m,m,m,m),new C.y("Now: "+p,m,new C.F(!0,o,m,m,m,m,12.5,D.H,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m,m,m,m,m,m,m)],l),D.E,m,D.e,D.i,0,D.p),m)],l),m),D.N,n.WP("Food",100-u.b,D.cG),n.WP("Health",u.c,D.ba),n.WP("Home",u.d,D.cp)],l)
if(u.f){q=n.aeH("\ud83c\udf5e Feed",new A.dUt(n,d,u))
p=n.Q_("\ud83d\udc8a Medicine",u.e?new A.dUu(n,d,u):m,D.bq)
D.d.v(r,C.a([D.am,new C.CK(D.bG,8,8,D.br,C.a([q,p,n.Q_("\ud83c\udfe5 Hospital",u.r>=0?m:new A.dUv(n,d,u),D.c0),n.Q_("\ud83c\udfe0 Visit",new A.dUw(n,u),D.b_)],l),m)],l))}k.push(n.Q0(new C.kC(t,C.x(r,D.E,m,D.e,D.i,0,D.p),m),s))}return C.x(k,D.m,m,D.e,D.i,0,D.p)},
c91(d){var w,v,u,t,s=null,r=x.p,q=C.a([B.eoS],r)
for(w=d.e,v=0;v<w.length;++v){u=w[v].a<0
t=u?D.aX:D.c0
q.push(this.Q0(u?new C.ca(D.aL,D.e,D.i,D.m,s,D.p,s,0,C.a([B.fS0,D.as,new C.y("Bed "+(v+1)+": empty",s,B.flL,s,s,s,s,s,s,s,s,s)],r),s):new C.fg(new A.dUq(this,d,v),s),t))}return C.x(q,D.m,s,D.e,D.i,0,D.p)},
c93(d){var w=this,v=null,u=x.p,t=w.Q0(C.B(C.a([B.fDm,D.as,B.bH8,w.aeH("Buy",new A.dUB(w,d))],u),D.m,v,D.e,D.i,0,v,v),D.cG),s=w.Q0(C.B(C.a([B.fZ6,D.as,B.bHo,w.Q_("Buy",new A.dUC(w,d),D.bq)],u),D.m,v,D.e,D.i,0,v,v),D.bq),r=C.a([B.fT1,D.am,C.d("Calls answered: "+d.y+"\nPatients sent home better: "+d.z+"\nPeople lost: "+d.gcOC(),v,v,v,v,v,v,B.aV8,v,v,v)],u)
if(d.gCc().length===0)D.d.v(r,C.a([D.W,w.aeH("Start a new community",new A.dUD(w))],u))
return C.x(C.a([t,s,w.c90(C.x(r,D.E,v,D.e,D.i,0,D.p))],u),D.m,v,D.e,D.i,0,D.p)},
B(d){var w,v,u,t,s,r,q=this,p=null,o=q.d
if(o==null)w=D.lZ
else{w=x.p
v=C.B(C.a([C.aH(p,p,p,p,U.nA,p,p,p,new A.dUJ(d),p,p,p,p,p,p),B.bGP,q.a_g("\u2b50 "+o.r,D.ay)],w),D.m,p,D.e,D.i,0,p,p)
u=q.a_g("\ud83c\udf5e "+o.w,D.cG)
t=q.a_g("\ud83d\udc8a "+o.x,D.bq)
s=o.e
s=C.B(C.a([u,D.ad,t,D.ad,q.a_g("\ud83c\udfe5 "+new C.Y(s,new A.dUK(),C.T(s).k("Y<1>")).gK(0)+"/"+s.length,D.c0)],w),D.m,p,D.b9,D.i,0,p,p)
t=C.B(C.a([q.b_H("calls","\ud83d\udcde Calls",o.d.length),q.ay4("people","\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc67 People"),q.ay4("hospital","\ud83c\udfe5 Hospital"),q.ay4("shop","\ud83d\uded2 Shop")],w),D.m,p,D.e,D.i,0,p,p)
r=q.gbkB()
A:{if("people"===r){u=q.c92(o)
break A}if("hospital"===r){u=q.c91(o)
break A}if("shop"===r){u=q.c93(o)
break A}u=q.bHy(o)
break A}w=C.a([new C.D(B.bFd,v,p),new C.D(D.BX,s,p),new C.D(B.amC,t,p),D.N,C.E(C.cl(C.a([u],w),p,p,D.Gz,p,p,D.ah,!1),1)],w)
if(q.w!=null){v=D.dY.j(0.96)
u=C.n(14)
t=C.L(D.ba,D.r,1)
s=q.w
s.toString
w.push(C.p(p,C.d(s,p,p,p,p,p,p,B.foo,p,p,p),D.f,p,p,new C.o(v,p,t,u,p,p,D.n),p,p,p,H.akY,D.bg,p,p,1/0))}w=C.x(w,D.m,p,D.e,D.i,0,D.p)}return C.c6(p,D.c2,C.bn(!0,w,!0,!1,D.af,!0,!0),p,!1,!1,p,p)}}
A.ad2.prototype={
B(d){var w=null,v=this.d
return new C.a4(v,v,C.b4(w,w,w,new A.bg3(this.c,w),D.ax),w)},
gY(d){return this.d}}
A.bg3.prototype={
a4(d,e){var w,v,u,t,s=e.a,r=s/2,q=$.S(),p=C.J()
p.r=D.dr.gp(0)
d.ad(new C.u(r,r),r,p)
p=d.a
J.bl(p.save())
q=new C.aF(q.r,D.ag,null,null,C.a([],x.g))
r=0+s
q.D(new C.jM(new C.a3(0,0,r,r)))
d.mM(0,q)
q=s*0.1
r=s*0.78
w=s*0.5
v=C.J()
u=this.b
v.r=u.c.gp(0)
d.dQ(new C.a3(q,r,q+s*0.8,r+w),v)
v=s*0.27
r=s*0.16
t=C.J()
t.r=u.a.gp(0)
d.dQ(new C.a3(v,r,v+s*0.46,r+s*0.56),t)
t=s*0.24
r=C.J()
r.r=u.b.gp(0)
d.e4(new C.a3(t,q,t+s*0.52,q+w),3.14,3.14,!0,r)
r=s*0.44
q=s*0.035
t=C.J()
t.r=D.nm.gp(0)
d.ad(new C.u(s*0.42,r),q,t)
t=C.J()
t.r=D.nm.gp(0)
d.ad(new C.u(s*0.58,r),q,t)
t=s*0.4
q=C.J()
q.b=D.a9
q.c=1.4
q.r=D.ek.gp(0)
d.e4(new C.a3(t,w,t+s*0.2,w+s*0.12),0.2,2.7,!1,q)
p.restore()},
av(d){return!1}}
A.fm.prototype={}
A.CJ.prototype={}
A.iR.prototype={}
A.MF.prototype={}
A.ay8.prototype={
gjD(){return this.a==="ok"}}
A.mi.prototype={}
A.fq.prototype={}
A.Ei.prototype={}
A.nR.prototype={}
A.ac0.prototype={}
A.ot.prototype={}
A.aWS.prototype={
gwL(){var w=this.c
return w.c>=2&&A.Ll(A.td(this.a),w).a==="ok"},
gdd(d){return this.c}}
A.a5C.prototype={
gzd(){var w,v,u=this.p4,t=u==="ptrap"
if(t||u==="faucet"){w=this.RG
if(w==null)return!1
if(t)if(w.a.a===3){u=w.b
u=new C.b9(u,C.a6(u).k("b9<2>")).cJ(0,new A.bVe())&&w.c}else u=!1
else u=A.bDC(w)&&w.f&&w.r
return u}v=this.R8
return v!=null&&v.c>=2&&A.Ll(A.td(u),v).a==="ok"},
Ix(d){var w
if(this.c!=="outside"){w=this.CW
w=w!=null?w.r9(d):!this.ay}else w=!0
return w},
ga6p(){var w=this.p4
if(w.length===0)w=this.Ix(2)
else w=w!=="fan"||this.gzd()
return w},
gMr(){var w=this.p4
if(w.length===0)w=this.Ix(3)
else w=!D.d.q(B.jI,w)||this.gzd()
return w},
ganX(){var w=this.p4
if(w.length===0)w=this.Ix(0)
else w=!D.d.q(B.lk,w)||this.gzd()
return w},
geb(d){var w,v
if(this.ok)w=260
else{v=this.c
A:{if("bathroom"===v){w=110
break A}if("kitchen"===v){w=140
break A}if("living"===v){w=180
break A}if("hall"===v){w=480
break A}if("outside"===v){w=2600
break A}w=130
break A}}return w},
gh4(d){var w,v=180
if(!this.ok){w=this.c
A:{if("bathroom"===w){v=100
break A}if("kitchen"===w){v=110
break A}if("living"===w){v=120
break A}if("hall"===w)break A
if("outside"===w){v=2100
break A}v=112
break A}}return v},
gkS(){var w,v=this
if(v.c!=="outside"){w=v.p4
if(w.length!==0)w=w==="ptrap"||w==="faucet"||v.gzd()
else{w=v.CW
w=w==null?null:w.gblp()
if(w==null)w=!v.ay}}else w=!0
return w},
gjU(){var w=this,v=w.c
if(v==="bathroom"||v==="kitchen"){v=w.p4
if(v.length!==0)v=!(v==="ptrap"||v==="faucet")||w.gzd()
else{v=w.fr
v=v==null?null:v.gwL()
if(v==null)v=!w.ch}}else v=!0
return v},
C_(d){var w,v,u,t
for(w=this.x,v=w.length,u=0;u<v;++u){t=w[u]
if(t.a===d)return t}return null},
dB(d,e,f,g){var w=this,v=w.y++,u=f==null?0:f,t=new A.mi(v,e,u,g==null?w.gh4(0)*0.6:g)
w.x.push(t)
w.a4j(0,t)
return t},
M(d,e){return this.dB(0,e,null,null)},
cKC(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=d.k1
if(a0!=null){w=d.c
w=w==="outside"||w==="hall"}else w=!0
if(w)return
v=A.heE(d,A.aQe(a0),0)
w=v.c
u=v.a/2
t=w-u-6
s=w+u+6
for(w=D.d.gaf(d.x),u=new C.eR(w,new A.bVd());u.C();){r=w.gS(0)
q=B.hF.h(0,r.b)
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
i=d.geb(0)/2-m-1
m=k<=i
if(m){l=r.c
l=Math.abs(l-k)<=Math.abs(l-j)}else l=!1
if(!l)m=j<-i&&m
else m=!0
if(m)r.c=k
else if(j>=-i)r.c=j
else r.d=52+q+1}else{q=q==="left"
h=q?-d.geb(0)/2:d.geb(0)/2
m=r.c
l=o/2
if(q?m-l<h+52:m+l>h-52){m=r.d
g=n/2
m=m+g<=t||m-g>=s}else m=!0
if(m)continue
m=n/2
f=s+m+1
e=t-m-1
if(f<=d.gh4(0)-m-1)r.d=f
else if(e>=m+1)r.d=e
else r.c=q?h+52+l+1:h-52-l-1}}},
a4j(d,e){var w,v,u,t,s,r=this,q=e.b,p=B.hF.h(0,q)
p.toString
w=(e.e&1)===1
v=w?p.d:p.c
u=w?p.c:p.d
p=v/2
e.c=D.k.E(e.c,-r.geb(0)/2+p+1,r.geb(0)/2-p-1)
p=e.d
t=u/2
s=r.c==="outside"?-760+t:t+1
e.d=D.k.E(p,s,r.gh4(0)-t-1)
if(D.d.q(B.Sj,q)){e.c=D.k.V(e.c/40)*40
e.d=D.k.V(e.d/40)*40}}}
A.aWX.prototype={
bAo(d){var w,v,u
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
break B}u=A.zp(0,w,v,0,0,1,1,C.a([],x.dY))
u.p4=d
u.go=d==="fan"?"fan":"light"
if(d==="gfci")u.Q=5
u.ch=u.ay=!1
u.Q=v==="bathroom"||v==="kitchen"?5:0
u.ok=!0
u.k1="tv150"
u.p2=!0
u.p3=Math.max(0,D.d.bg(E.kr,new A.bVP()))
this.d=C.a([u],x.K)},
cUB(){var w,v,u,t,s,r
for(w=this.gr_(),v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u){t=w[u]
t.fr=t.CW=null
s=t.ay=!0
r=t.c
t.ch=r!=="bathroom"?r==="kitchen":s
t.fy=!1
t.fx.aa(0)
D.d.aa(t.id)}},
c95(){var w,v,u,t,s,r,q,p=this,o="back",n="bedroom",m="bathroom",l=new C.e6()
l.cZ(p.b)
w=new A.bVQ()
v=x.dY
u=C.a([B.bKS,B.bKP,B.bKQ],v)
for(t=0;t<7;++t){s=B.clW[t]
u.push(new A.ot(!0,o,-150+s.a*50,s.b))}r=p.d=C.a([A.zp(0,"Bedroom 1",n,0,0,2,2,C.a([w.$1(-48)],v)),A.zp(1,"Bedroom 2",n,2,0,2,2,C.a([w.$1(-48)],v)),A.zp(2,"Bathroom 1",m,4,0,1,2,C.a([B.a1h],v)),A.zp(3,"Bedroom 3",n,5,0,2,2,C.a([w.$1(-48)],v)),A.zp(4,"Bathroom 2",m,7,0,2,2,C.a([B.a1h],v)),A.zp(5,"Hall","hall",0,2,9,1,u),A.zp(6,"Bedroom 4",n,0,3,2,2,C.a([w.$1(-48)],v)),A.zp(7,"Bedroom 5",n,2,3,2,2,C.a([w.$1(-48)],v)),A.zp(8,"Bathroom 3",m,4,3,1,2,C.a([B.a1h],v)),A.zp(9,"Kitchen","kitchen",5,3,2,2,C.a([new A.ot(!1,o,-26,5),B.bKU],v)),A.zp(10,"Living room","living",7,3,2,2,C.a([new A.ot(!1,o,-70,5),B.bKT,B.bKR],v)),A.zp(11,"NGMY City","outside",0,5,9,1,C.a([B.bKO],v))],x.K)
for(v=r.length,t=0;t<r.length;r.length===v||(0,C.K)(r),++t){q=r[t]
u=q.c
if(u==="outside"){p.aUR(q)
continue}q.go=u==="bedroom"?"fan":"light"
q.ay=l.ag()<0.6
q.ch=(u==="bathroom"||u==="kitchen")&&l.ag()<0.7
D.d.hx(q.z,0,3,l.ap(8))
A:{if("bathroom"===u){u=5+l.ap(2)
break A}if("kitchen"===u){u=5+l.ap(2)
break A}if("bedroom"===u){u=2+l.ap(3)
break A}if("living"===u){u=l.ap(2)
break A}u=l.ap(2)
break A}q.Q=u
q.as=l.ap(4)
p.aUR(q)}v=p.d
u=v[5]
u.k2=u.k1="tv100"
u.p2=!0
v[3].ay=!0
v[2].ch=!0},
aUR(b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4="plant",a5="roadcross",a6="road",a7="roundabout",a8="house2",a9="bighouse",b0="adboard",b1="flowers",b2=b3.geb(0)/2
switch(b3.c){case"bedroom":b3.dB(0,"rug",0,b3.gh4(0)*0.55)
b3.dB(0,"bed",24,46)
b3.dB(0,"nightstand",-8,14)
b3.dB(0,"wardrobe",-b2+12,70).e=1
b3.dB(0,"desk",b2-14,100).e=3
break
case"living":b3.dB(0,"rug",0,70)
b3.dB(0,"sofa",0,100)
b3.dB(0,"coffee",0,68)
b3.dB(0,"armchair",66,70)
b3.dB(0,a4,76,14)
b3.dB(0,"lamp",-76,14)
break
case"kitchen":b3.dB(0,"dining",0,78)
b3.dB(0,"chair",-24,78).e=1
b3.dB(0,"chair",24,78).e=3
b3.dB(0,a4,58,20)
break
case"bathroom":b3.dB(0,"rug",0,62).e=0
b3.dB(0,a4,b3.geb(0)/2-12,b3.gh4(0)-12)
break
case"outside":for(w=-780;w<=780;w+=40){v=Math.abs(w)<1
b3.dB(0,v?a5:a6,w,420)
b3.dB(0,v?a5:a6,w,860)}for(u=200;u<=820;u+=40){if(Math.abs(u-420)<1||Math.abs(u-860)<1)continue
b3.dB(0,a6,0,u).e=1}for(t=0;t<2;++t){s=B.doV[t]
for(u=460;u<859;u+=40)b3.dB(0,a6,s,u).e=1}for(t=0;t<3;++t){s=B.doU[t]
b3.dB(0,a7,s,420)
b3.dB(0,a7,s,860)}r=new A.bVR(b3)
b3.dB(0,"shop",-250,225)
b3.dB(0,"hospital",250,215)
b3.dB(0,"firestation",-480,225)
b3.dB(0,"school",520,210)
for(t=0;t<14;++t){v=B.dcL[t]
w=v.a
u=v.b
if(r.$4(w,u,60,40))b3.dB(0,"billboard",w,u)}for(t=0;t<4;++t){v=B.dte[t]
w=v.a
u=v.b
if(r.$2(w,u))b3.dB(0,a8,w,u)}for(t=0;t<3;++t){v=B.cR2[t]
u=v.a
q=v.b
p=v.c
for(v=u<900,w=-800;w<=800;w+=q){o=Math.abs(w)
if(o<100)continue
if(v&&o>400)continue
if(r.$2(w,u))b3.dB(0,p&&D.o.F(D.k.ec(w,q),2)===0?a9:a8,w,u)}}for(t=0;t<2;++t){v=B.cze[t]
w=v.a
u=v.b
if(r.$2(w,u))b3.dB(0,a9,w,u)}for(w=-1220;w<=1220;w+=40){if(Math.abs(w)>780){b3.dB(0,a6,w,420)
b3.dB(0,a6,w,860)}b3.dB(0,a6,w,1460)
b3.dB(0,a6,w,1700)}for(u=900;u<1459;u+=40)b3.dB(0,a6,0,u).e=1
v=C.a([],x._)
for(o=b3.x,n=o.length,t=0;t<o.length;o.length===n||(0,C.K)(o),++t){m=o[t]
l=m.b
if(D.d.q(B.Sj,l)||l==="roundabout")v.push(m)}k=new A.bVT(v,b3)
j=new A.bVU(b3,new A.bVX(b3))
j.$3("gasstation",6,B.d7t)
j.$3("dmv",1,B.dw_)
j.$3("ubstation",3,B.cYS)
i=0
h=0
for(;;){if(!(h<6&&i<90))break
u=-560+h*420
v=h*3
o=u<100
g=0
for(;;){if(!(g<=4&&i<90))break
A:{w=-1040+g*520
if(Math.abs(w)<170&&o)break A
f=D.o.F(g*7+v,5)===0?a9:a8
e=B.hF.h(0,f)
if(k.$4(w,u,e.c,e.d)){b3.dB(0,f,w,u);++i}}++g}++h}for(d=0,t=0;t<11;++t,d=a0){v=B.d0F[t]
a0=d+1
b3.dB(0,v.b,v.a,1560).f=D.o.F(d,6)}for(t=0;t<11;++t,d=a0){v=B.dr4[t]
a0=d+1
b3.dB(0,v.b,v.a,1860).f=D.o.F(d,6)}b3.dB(0,"townsign",0,640)
for(t=0;t<4;++t){v=B.dln[t]
b3.dB(0,"cornersign",v.a,v.b)}for(t=0;t<5;++t)b3.dB(0,b0,B.daS[t],2045)
for(t=0;t<4;++t)b3.dB(0,b0,B.dp2[t],-690)
for(t=0;t<4;++t){u=B.ctC[t]
a1=b3.dB(0,b0,-1245,u)
a1.e=1
a1.c=-1245
b3.a4j(0,a1)
a2=b3.dB(0,b0,1245,u)
a2.e=3
a2.c=1245
b3.a4j(0,a2)}for(w=-1200;w<=1200;w+=480){for(t=0;t<4;++t)b3.dB(0,"pole",w,B.cxX[t])
for(v=Math.abs(w)<1100,o=w+240,t=0;t<4;++t){u=B.cF4[t]
if(v)b3.dB(0,"lamppost",o,u)}}b3.dB(0,"car",-300,490).e=2
b3.dB(0,"ambulance",110,345)
b3.dB(0,"firetruck",-385,345)
for(t=0;t<10;++t){v=B.duS[t]
w=v.a
u=v.b
b3.dB(0,Math.abs(w)>400||u>1000?"pine":"tree",w,u)}b3.dB(0,"bush",-70,20)
b3.dB(0,"bush",70,20)
b3.dB(0,b1,-30,24)
b3.dB(0,b1,30,24)
b3.dB(0,b1,90,205)
b3.dB(0,"bench",-60,195)
b3.dB(0,"bench",150,300)
b3.dB(0,"pond",-160,1340)
b3.dB(0,"dog",60,60)
b3.dB(0,"cat",-50,80)
b3.dB(0,"cow",-640,1280)
b3.dB(0,"cow",-570,1330)
b3.dB(0,"sheep",-500,1300)
b3.dB(0,"horse",560,1330)
b3.dB(0,"chicken",-440,1340)
for(a3=0;a3<4;++a3)b3.dB(0,"fence",-680+a3*64,1220)
for(t=0;t<6;++t){v=B.cED[t]
b3.dB(0,"crate",v.a,v.b)}break
case"hall":default:}},
gr_(){var w,v,u,t=C.a([],x.K),s=this.d
s===$&&C.c()
w=s.length
v=0
for(;v<s.length;s.length===w||(0,C.K)(s),++v){u=s[v]
if(u.c!=="outside")t.push(u)}return t},
gd0o(){var w=this.gr_()
return new C.Y(w,new A.bW0(),C.T(w).k("Y<1>")).gK(0)},
gcY0(){var w=this.d
w===$&&C.c()
return new C.Y(w,new A.bW_(),C.T(w).k("Y<1>")).gK(0)},
gcY_(){var w=this.d
w===$&&C.c()
return new C.Y(w,new A.bVZ(),C.T(w).k("Y<1>")).gK(0)},
gcQG(){var w=this.gr_()
return new C.Y(w,new A.bVY(),C.T(w).k("Y<1>")).gK(0)}}
A.J5.prototype={
R(){var w,v,u,t,s=new C.vj()
$.vN()
s.fZ(0)
w=$.aw()
v=$.hCJ()
u=x.S
t=C.a([],x.aQ)
return new A.aF6(s,B.aB9,new C.eC("",w),B.djC,B.nD,B.nD,D.Di,C.aV(x.N),new C.cx(null,x.eF),v,C.U(u,x.i),C.aV(u),t,D.cM)}}
A.aF6.prototype={
ghI(){var w,v,u=$.a4w
if(u!=null){w=u.a
v=this.d
v===$&&C.c()
v=w===v.b
w=v}else w=!1
return w?u:null},
aAh(){var w,v,u=this.ghI()
if(u==null)u=null
else{w=this.d
w===$&&C.c()
v=w.d
v===$&&C.c()
w=u.bfR(w,v[w.e].a)
u=w}this.fr=u==null?B.aB9:u},
gbjB(){var w=this.d
w===$&&C.c()
w=w.gr_()
return new C.Y(w,new A.egd(),C.T(w).k("Y<1>")).gK(0)},
Z(){var w,v,u,t,s,r=this
r.a3()
w=r.a.r
if(w.length!==0)w=r.d=A.hLF(w)
else{w=$.Em==null
if(w){w=D.o.F(Date.now(),1e5)
$.Em=A.aWY(w)
r.el=!0}w=$.Em
w.toString
w=r.d=w}v=r.a
if(v.r.length===0)u=!0
else u=v.d||w.c
w.c=u
u=new A.uE(-0.05,0.1,120,B.h2O,$.aw())
u.f=560
r.e=u
v=v.f
u=v==="city"
if(u)w.e=11
if(v.length!==0&&!u){w=w.gr_()
t=new C.Y(w,new A.ega(r),C.T(w).k("Y<1>"))
if(!t.gan(0)){w=r.d
w===$&&C.c()
w.e=t.gI(0).a}}A.aWK($.ahZ)
A.hnh()
r.ajj()
r.aAh()
w=r.d
w===$&&C.c()
v=w.d
v===$&&C.c()
w=v[w.e]
v=r.gbjB()
u=r.d
s=u.d
s===$&&C.c()
r.f=A.hxk(w,s[u.e].c!=="outside",B.aRZ,"look",v,r.fr,0)
r.aeI(!0)
r.Zi()
r.fx=C.df(D.fY,new A.egb(r))
$.aW.x1$.push(new A.egc(r))},
t(){var w,v=this
v.b4P(!0)
w=v.p1
if(w!=null)w.bR(0)
w=v.RG
if(w!=null)w.bR(0)
w=v.b5
if(w!=null)w.bR(0)
w=v.ch
if(w!=null)w.a2(0)
w=v.dx
if(w!=null)w.a2(0)
w=v.fx
if(w!=null)w.a2(0)
w=v.by
if(w!=null)w.a2(0)
w=v.P
if(w!=null)w.a2(0)
v.a1()},
c2X(){var w,v=this.d
v===$&&C.c()
w=v.a
A:{if("switch"===w){v="The ceiling light is already in. Tap the red switch on the wall and wire it. Then flip it to see the light work."
break A}if("outlet"===w){v="Tap the red outlet on the wall and wire it. Then plug in a lamp or a TV to test it."
break A}if("gfci"===w){v="Tap the red GFCI outlet and wire it. Then plug in a hair dryer to test it."
break A}if("fan"===w){v="Tap the ceiling fan and wire it. Then flip the wall switch and watch it spin."
break A}if("ptrap"===w){v="The sink has no drain yet. Tap the sink and build the drain under it."
break A}v="The faucet is not connected yet. Tap the sink and connect the hoses."
break A}return v},
aeI(d){var w,v,u,t,s,r,q,p=this,o=p.e
o===$&&C.c()
o.z=!0
w=p.d
w===$&&C.c()
v=w.d
v===$&&C.c()
u=v[w.e]
if(p.z){t=new A.q(0,40,u.gh4(0)*0.5)
s=Math.max(u.geb(0),u.gh4(0))*0.6
o.e=20
o.f=Math.max(Math.max(u.geb(0),u.gh4(0))*2,380)
o.r=new C.dY([-u.geb(0)/2,u.geb(0)/2,0,u.gh4(0),130])
o.at=-1.2
o.ax=1.2
o.pe(!0)
r=0.12
q=-0.05}else if(u.c==="outside"){o.e=30
o.f=2400
o.r=null
o.at=0.03
o.ax=1.35
o.pe(!0)
t=B.h2L
s=540
r=0.35
q=-0.25}else if(p.x){t=new A.q(0,46,u.gh4(0)*0.1)
s=u.gh4(0)*0.74
o.e=6
o.f=Math.max(Math.max(u.geb(0),u.gh4(0))*2,380)
o.r=new C.dY([-u.geb(0)/2,u.geb(0)/2,0,u.gh4(0),130])
o.at=0.02
o.ax=1.35
o.pe(!0)
r=0.05
q=0}else{t=new A.q(0,30,u.gh4(0)*0.45)
s=(u.geb(0)*1.2>u.gh4(0)*1.4?u.geb(0)*1.2:u.gh4(0)*1.4)+30
o.e=6
o.f=560
o.r=null
o.at=0.1
o.ax=1.35
o.pe(!0)
r=0.5
q=-0.12}o=p.e
if(d){o.d=t
o.c=s
o.y=1
o.a=q
o.b=r}else o.hb(s,r,t,q)},
y6(){return this.aeI(!1)},
bOO(d,e){var w,v,u,t,s,r,q,p,o=this,n=o.e
n===$&&C.c()
w=n.bg1(d,e)
if(w==null)return
n=o.d
n===$&&C.c()
v=n.d
v===$&&C.c()
u=v[n.e]
t=o.aL
if(t!=null){n=t.at
n===$&&C.c()
n.at=new C.z(D.k.E(w.a,-138,138),D.k.E(w.c,12,316))}else if(o.z){s=D.k.E(w.a,-u.geb(0)/2+10,u.geb(0)/2-10)
r=D.k.E(w.c,10,u.gh4(0)-10)
o.e.D0(new A.q(s,48,r))}else{n=u.c==="outside"
if(n&&o.aM&&o.aC!=null){n=o.aC
n.toString
n.at=new C.z(D.k.E(w.a,-u.geb(0)/2+12,u.geb(0)/2-12),D.k.E(w.c,-290,u.gh4(0)-12))}else{v=o.e
q=w.a
p=w.c
if(n)v.a7X(Math.max(70,v.c*0.4),0.32,new A.q(q,30,p))
else{n=D.k.E(q,-u.geb(0)/2+8,u.geb(0)/2-8)
p=D.k.E(p,8,u.gh4(0)-8)
v.a7X(Math.max(36,o.e.c*0.35),0.2,new A.q(n,40,p))}}}A.fJ(560,50,0.25,"tri")},
iK(){var w,v,u,t,s,r,q,p,o=this
o.aAh()
w=o.aL
if(w!=null){v=w.ay
v===$&&C.c()}else{v=o.d
v===$&&C.c()
u=v.d
u===$&&C.c()
v=u[v.e]
u=o.r
t=o.Q
s=o.gbjB()
if(!o.z)if(o.x){r=o.d
q=r.d
q===$&&C.c()
r=q[r.e].c!=="outside"&&o.cx==null}else r=!1
else r=!0
q=o.fr
p=o.bG
v=A.hxk(v,r,p!=null?C.eD([100+p.a],x.S):B.aRZ,u,s,q,t)}o.f=v},
ej(d,e){var w=this,v=w.ch
if(v!=null)v.a2(0)
w.m(new A.eeX(w,d,e))
w.ch=C.cD(D.eq,new A.eeY(w))},
iL(d){return this.ej(d,!0)},
Q1(d){this.m(new A.eeZ(this,d))
A.fJ(660,50,0.25,"tri")},
ay5(d,e){var w,v=this,u=v.d
u===$&&C.c()
if(d!==u.e){u=u.d
u===$&&C.c()
u=d>=u.length}else u=!0
if(u)return
if(v.aM&&d!==11)v.a31()
v.cL=v.bG=v.aL=null
if(!e&&v.cx!=null)v.Sl()
v.m(new A.eds(v,d))
u=v.d
w=u.d
w===$&&C.c()
if(w[u.e].c==="outside")v.aC=v.aZJ()
v.y6()
A.fJ(520,60,0.25,"tri")},
AG(d){return this.ay5(d,!1)},
aYm(d){var w,v,u,t=this
if(d===700){w=t.d
w===$&&C.c()
v=w.d
v===$&&C.c()
return v[w.e].ganX()}if(d===701){w=t.d
w===$&&C.c()
v=w.d
v===$&&C.c()
w=v[w.e]
return w.p4.length!==0||w.Ix(1)}if(d===702){w=t.d
w===$&&C.c()
v=w.d
v===$&&C.c()
return v[w.e].gMr()}if(d===703){w=t.d
w===$&&C.c()
v=w.d
v===$&&C.c()
return v[w.e].ga6p()}if(d>=800&&d<820){u=d-800
w=t.d
w===$&&C.c()
v=w.d
v===$&&C.c()
w=v[w.e].id
return u<w.length&&w[u].gwL()}if(d===720){w=t.d
w===$&&C.c()
v=w.d
v===$&&C.c()
return v[w.e].ganX()}if(d===721){w=t.d
w===$&&C.c()
v=w.d
v===$&&C.c()
w=v[w.e]
return w.p4.length!==0||w.Ix(1)}if(d>=722&&d<728){u=d-720-2
w=t.d
w===$&&C.c()
v=w.d
v===$&&C.c()
w=v[w.e].id
return u<w.length&&w[u].gwL()}w=t.d
w===$&&C.c()
v=w.d
v===$&&C.c()
return v[w.e].gkS()},
b9I(){var w,v,u=this,t=u.d
t===$&&C.c()
w=t.d
w===$&&C.c()
v=w[t.e].go==="fan"
u.m(new A.efq(u))
t=u.d
w=t.d
w===$&&C.c()
if(w[t.e].fy)t=v?"The fan spins.":"The light is on."
else t=v?"The fan stops.":"The light is off."
u.iL(t)
t=u.d
w=t.d
w===$&&C.c()
A.fJ(w[t.e].fy?900:500,60,0.25,"tri")},
c9e(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this
if(a0===0)return
if(a0>=19e3&&a0<19004){w=a0-19e3
v=d.d
v===$&&C.c()
u=v.d
u===$&&C.c()
t=u[v.e]
v=D.o.F(w,2)===0?-1:1
s=v*(t.geb(0)/2-14)
r=w<2?14:t.gh4(0)-14
q=Math.atan2(-s,-(t.gh4(0)/2-r))
w=Math.cos(0.12)
v=Math.sin(q)
u=Math.sin(0.12)
p=Math.cos(0.12)
o=Math.cos(q)
n=d.e
n===$&&C.c()
n.e=6
n.hb(26,0.12,new A.q(s+26*w*v,106-26*u,r-26*p*o),q)
d.ej("You are looking from the camera in the corner. Drag to look round, or tap a camera for another corner.",!0)
A.fJ(700,70,0.25,"tri")
return}if(a0>=2e4&&a0<23e3){w=d.d
w===$&&C.c()
v=w.d
v===$&&C.c()
m=v[w.e].C_(a0-2e4)
if(m!=null)d.bV1(m)
return}if(a0===19502){w=d.aL
if((w==null?null:w.a==="tower")===!0)d.m(new A.eep(d))
return}if(a0===19500||a0===19501){l=d.aL
if(l!=null)if(l.c)d.YR(l)
else d.ej("This one works: the house has power.",!0)
return}if(a0>=900&&a0<920){d.csD(a0-900)
return}if(a0>=100&&a0<200){w=d.d
w===$&&C.c()
v=w.d
v===$&&C.c()
k=v[w.e].C_(a0-100)
w=d.d
v=w.d
v===$&&C.c()
u=!1
if(v[w.e].c==="outside")if(d.r!=="furniture")if(k!=null){w=k.b
w=w==="hospital"||w==="shop"}else w=u
else w=u
else w=u
if(w){d.A9(k.b)
return}if(d.r!=="furniture")return
d.m(new A.eeq(d,a0))
w=d.d
v=w.d
v===$&&C.c()
m=v[w.e].C_(d.Q)
if(m!=null)d.iL(B.hF.h(0,m.b).a+": move it with the arrows.")
return}if(a0===300||a0===301||a0===302){if(d.r!=="walls")return
d.m(new A.eer(d,a0))
d.iL("Wall picked. Choose a paint colour.")
return}if(a0>=600&&a0<620){j=a0-600
w=d.d
w===$&&C.c()
v=w.d
v===$&&C.c()
if(j>=v[w.e].w.length)return
if(d.r==="doors"){d.m(new A.ees(d,j))
w=d.d
v=w.d
v===$&&C.c()
A.fJ(v[w.e].at.q(0,j)?700:450,70,0.25,"tri")
return}d.bOH(j)
return}w=a0===700
v=!w
i=!0
if(v)if(a0!==701){if(a0!==702)if(a0!==703)if(!(a0>=800&&a0<820))u=a0>=720&&a0<728
else u=i
else u=i
else u=i
i=u}if(d.w&&i){h=d.aYm(a0)
A.fJ(h?1400:500,160,0.25,"tri")
w=h?"The tester glows and beeps: LIVE, 120 volts. Never touch a live wire. Switch the breaker off first.":"The tester stays dark: no power here. It still needs wiring."
d.ej(w,!h)
return}if(!v||a0===701){if(d.aYm(a0))d.azT(w?0:1)
else d.aUx()
return}if(a0>=800&&a0<820){j=a0-800
w=d.d
w===$&&C.c()
v=w.d
v===$&&C.c()
w=v[w.e].id
if(j>=w.length)return
g=w[j]
if(!g.gwL())d.akA(j)
else if(g.a==="switch")d.b9I()
else d.azT(2+j)
return}if(a0===702||a0===703){w=d.d
w===$&&C.c()
v=w.d
v===$&&C.c()
if(v[w.e].gMr()){w=d.d
v=w.d
v===$&&C.c()
w=!v[w.e].ga6p()}else w=!0
if(w)d.aUx()
else d.b9I()
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
if(!w[u].p2){d.m(new A.eet(d))
w=d.d
v=w.d
v===$&&C.c()
d.iL("The TV is on and playing "+E.kr[v[w.e].p3].a+".")}else{e=A.aQe(f)
w=d.c
w.toString
K.het(w,0,e.a,!0,D.yl,e.b)}return}if(a0>=720&&a0<728){w=d.d
w===$&&C.c()
v=w.d
v===$&&C.c()
u=a0-720
f=v[w.e].fx.h(0,u)
if(f==null)return
e=A.aQe(f)
if(e.d>0||e.e){w=d.c
w.toString
K.het(w,0,e.a,!0,D.yl,e.b)}else d.azT(u)
return}if(a0===710||a0===711||a0===712||a0===713){w=d.d
w===$&&C.c()
v=w.d
v===$&&C.c()
if(!v[w.e].gjU())if(d.d.a.length!==0)d.Eu()
else d.a0y()
else{w=d.f
w===$&&C.c()
j=w.b.h(0,a0)
if(j!=null)d.iL(j.a+": "+j.b)}}},
bOH(d){var w,v,u,t=this.d
t===$&&C.c()
w=t.d
w===$&&C.c()
v=w[t.e].w[d].d
u=v<w.length?w[v].b:"the next room"
t=this.c
t.toString
return C.bV(E.mE,null,new A.ecW(this,u,d,v),t,!0,!0,!1,D.k7,!1,!1,x.H)},
bQM(){var w,v,u=this
u.m(new A.ed4(u))
if(!u.aM){w=u.d
w===$&&C.c()
v=w.d
v===$&&C.c()
w=v[w.e].c==="outside"}else w=!1
if(w)u.Sf()
w=u.d
w===$&&C.c()
v=w.d
v===$&&C.c()
if(v[w.e].c!=="outside")u.y6()},
bQO(){this.m(new A.ed5(this))
this.ej("Phone view: the city fills your phone standing up. Pick a drone film and start filming.",!0)},
bR7(){var w=this
if(w.p4)w.a30()
w.m(new A.ed6(w))},
clY(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.c
n.toString
w=C.aG(n,o,x.w).w
n=new A.eei(p)
v=x.p
u=C.a([C.bT(0,d,0,0,0)],v)
t=w.r.b
if(p.fE)u.push(C.ap(o,C.aA(D.iL,B.fbh,D.y,!1,o,new A.eel(p),o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!1,D.a3),o,o,0,o,t,o))
else{s=n.$2(D.cx,p.gbR6())
r=p.p4?D.z7:D.Cw
r=n.$2(r,new A.eem(p))
q=p.jQ?B.apk:O.CA
u.push(C.ap(o,C.B(C.a([s,r,n.$2(q,new A.een(p)),n.$2(D.uN,new A.eeo(p))],v),D.m,o,D.e,D.i,0,o,o),o,o,10,o,t+8,o))}return C.c6(o,D.w,new C.an(D.a_,o,D.ab,D.t,u,o),o,!1,!1,o,o)},
bJ4(d){var w,v,u,t,s,r,q=this,p=null,o=q.c
o.toString
w=C.aG(o,p,x.w).w
o=new A.ecw(q)
if(q.eu){v=w.a
u=v.b
v=v.a
t=q.ab
s=w.alR(D.af,new C.av(u,v),D.af)
return C.c6(p,D.w,C.at(new C.wy(t,C.q3(new C.a4(u,v,new C.an(D.a_,p,D.ab,D.t,C.a([C.bT(0,d,0,0,0),C.ap(p,C.aA(D.iL,B.fbn,D.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,o,p,p,p,p,p,p,!1,D.a3),p,p,0,p,0,p)],x.p),p),p),s),p),p,p,p),p,!1,!1,p,p)}r=q.f4?w.r.b:0
return C.c6(p,D.w,new C.an(D.a_,p,D.ab,D.t,C.a([C.bT(0,d,0,0,0),C.ap(p,C.aA(D.iL,B.fbo,D.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,o,p,p,p,p,p,p,!1,D.a3),p,p,0,p,r,p)],x.p),p),p,!1,!1,p,p)},
bTc(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.c
k.toString
w=C.aG(k,l,x.w).w
k=w.a
v=k.b
k=k.a
u=new A.edg(m)
t=m.ab
s=w.alR(D.af,new C.av(v,k),D.af)
r=x.p
q=C.a([C.bT(0,d,0,0,0)],r)
if(m.fE)q.push(C.ap(l,C.aA(D.iL,B.fbg,D.y,!1,l,new A.edj(m),l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,!1,D.a3),l,l,0,l,0,l))
else{p=u.$2(Aj.a2i,new A.edk(m))
o=u.$2(D.a2H,new A.edl(m))
n=m.jQ?B.apk:O.CA
r=C.a([p,o,u.$2(n,new A.edm(m)),u.$2(D.uN,new A.edn(m))],r)
p=m.d
p===$&&C.c()
o=p.d
o===$&&C.c()
if(o[p.e].c==="outside"){p=m.p4?D.z7:D.Cw
r.push(u.$2(p,new A.edo(m)))}if(m.gakB())r.push(C.aA(l,C.p(l,B.bYE,D.f,l,l,new C.o(D.cT,l,C.L(D.c,D.r,1),l,l,l,D.a6),l,40,l,D.iJ,l,l,l,40),D.y,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,m.gaRo(),l,l,l,l,l,l,!1,D.a3))
q.push(C.ap(l,C.B(r,D.m,l,D.e,D.i,0,l,l),l,l,10,l,10,l))}return C.c6(l,D.w,C.at(new C.wy(t,C.q3(new C.a4(v,k,new C.an(D.a_,l,D.ab,D.t,q,l),l),s),l),l,l,l),l,!1,!1,l,l)},
cD3(d){var w,v,u,t=B.D_[d.b]
if(d.c==="power")w=t.c
else{v=t.d
w=v>=0?v:t.c}v=this.d
v===$&&C.c()
v=v.d
v===$&&C.c()
u=w<v.length?v[w].b:"the house"
v=this.c
v.toString
return C.bV(D.au,null,new A.efp(this,t,new A.efo(),d,u,w),v,!0,!0,!0,L.a90,!1,!1,x.H)},
c47(){var w,v,u=this,t=u.d
t===$&&C.c()
w=t.d
w===$&&C.c()
v=w[t.e]
if(v.c==="outside")return
u.m(new A.edG(u))
t=u.e
t===$&&C.c()
t.e=20
t.f=300
t.at=-0.95
t.ax=1.35
t.pe(!0)
t=u.e
w=v.gh4(0)
t.hb(Math.max(v.geb(0),v.gh4(0))*0.75,-0.5,new A.q(0,118,w*0.5),-0.05)
u.ej("Looking up at the ceiling from the floor. Drag to look round.",!0)},
gpq(){var w,v,u=this.d
u===$&&C.c()
u=u.d
u===$&&C.c()
w=new C.Y(u,new A.ebv(),C.T(u).k("Y<1>"))
if(!w.gaf(0).C())return null
v=w.gI(0)
u=v.dx
return u==null?v.dx=A.hJt(v):u},
aSF(d){var w,v,u=this
if(d==null)return
w=d.c
if(w>0){v=u.ghI()
if(v!=null)v.r+=w}w=d.a
A.fJ(w==="pickup"?700:940,120,0.25,"tri")
u.ej(d.b,w!=="expired")
u.m(u.gj0())},
gKF(){var w,v,u,t=this.d
t===$&&C.c()
t=t.d
t===$&&C.c()
w=new C.Y(t,new A.efR(),C.T(t).k("Y<1>"))
if(!w.gaf(0).C())return null
v=w.gI(0)
t=v.dy
if(t==null){t=C.a([],x.bz)
u=new C.e6()
u.cZ(11)
t=new A.cCw(v,u,t)
t.bB8(v,11)
v.dy=t}return t},
bHb(){var w,v,u=this,t=u.ghI()
if(t==null)return
w=u.c5
if(w.w)u.ej("You already have your Uber licence.",!0)
else{v=t.r
if(v<40)u.ej("The licence costs 40 points. You have "+v+". Earn more with jobs and deliveries.",!1)
else{t.r=v-40
w.w=!0
A.fJ(880,140,0.25,"tri")
u.ej("You passed! Here is your Uber licence. Drive a car to an Uber station and the people waiting will get in.",!0)}}u.m(new A.ebW())
w=u.aL
if(w!=null)w.B(u.ghI())},
c31(){var w,v,u,t,s=this,r=null,q=s.ghI(),p=s.c5.w,o=D.w.j(0.55),n=C.n(28),m=C.L(D.aX,D.r,1),l=x.p,k=C.B(C.a([B.fGA,D.as,B.bHV,C.aA(r,D.rV,D.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new A.edB(s),r,r,r,r,r,r,!1,D.a3)],l),D.m,r,D.e,D.i,0,r,r),j=C.d(p?"You are a licensed Uber driver. Drive a car to an Uber station (the yellow and black shelter): the people waiting get in, and you take them to their house. The fare is paid when you get there.":"With the Uber licence you can take the people waiting at the Uber stations home and be paid for every ride. The car needs gas, so watch the gas bar.",r,r,r,r,r,r,B.fmr,r,r,r),i=q==null,h=i?r:q.r
h=C.d("You have "+(h==null?0:h)+" \u2b50",r,r,r,r,r,r,B.fus,r,r,r)
w=p?new A.edC(s):s.gbHa()
if(p)v=D.bf
else{v=i?r:q.r
v=(v==null?0:v)>=40?D.bs:D.bz}u=C.n(16)
t=p?"\u2713 Licensed":"Get the licence \xb7 40 \u2b50"
if(!p){i=i?r:q.r
i=(i==null?0:i)>=40}else i=!0
return C.p(D.A,C.p(r,C.x(C.a([k,D.W,j,D.W,h,D.W,C.aA(r,C.p(D.A,C.d(t,r,r,r,r,r,r,C.l(r,r,i?D.w:D.bU,r,r,r,r,r,r,r,r,16,r,r,D.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),D.f,r,r,new C.o(v,r,r,u,r,r,D.n),r,50,r,r,r,r,r,r),D.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,w,r,r,r,r,r,r,!1,D.a3)],l),D.ak,r,D.e,D.P,0,D.p),D.f,r,r,new C.o(r,r,m,n,r,B.zq,D.n),r,r,r,D.bD,D.bQ,r,r,330),D.f,o,r,r,r,r,r,r,r,r,r,r)},
cFu(d){var w,v,u,t=this,s=t.gKF()
if(s!=null){w=s.c
w===$&&C.c()
w=w.length===0}else w=!0
if(w)return
v=s.cPE(d.f,d.r,t.CW.gf2()/1000)
if(v>0){w=t.ghI()
if(w!=null)w.r+=v
A.fJ(940,140,0.25,"tri")
t.ej("\ud83d\ude96 You dropped the passenger at the house. Fare: +"+v+" points. Thank you!",!0)
t.m(t.gj0())
return}if(s.f==null&&s.aqV(d.f,d.r)!=null&&D.d.b_(s.e,new A.efS(s,d))){w=t.c5
if(!w.w){if(Date.now()-t.k1>2e4){t.k1=Date.now()
t.ej("People are waiting for a ride, but you need an Uber licence first. Get it at the licence office.",!1)}return}if(w.b<=0)return
u=s.cXS(d.f,d.r)
if(u!=null){A.fJ(700,100,0.25,"tri")
t.ej("\ud83d\ude96 "+u.b+" got in. Take them to their house (follow the yellow line): "+u.f+" points.",!0)
t.m(t.gj0())}}},
cFt(){var w,v,u,t,s,r,q,p=this,o=p.gKF()
if(o==null)return
w=o.f
if(w!=null){p.ej("\ud83d\ude96 "+w.b+" is in the car and wants to go home: "+w.f+" points. Follow the yellow line to the house.",!0)
return}if(!p.c5.w){v=C.a([],x._)
u=p.d
u===$&&C.c()
t=u.d
t===$&&C.c()
u=t[u.e].x
t=u.length
s=0
for(;s<u.length;u.length===t||(0,C.K)(u),++s){r=u[s]
if(r.b==="dmv")v.push(r)}if(v.length===0){p.ej("There is no licence office in this town yet.",!1)
return}p.Sz(D.d.gI(v))
p.ej("You are at the licence office. Walk in through the door and onto the blue mat to get your Uber licence.",!0)
return}v=o.c
v===$&&C.c()
if(v.length===0){p.ej("There is no Uber station in this town yet.",!1)
return}q=p.aC
v=C.C(v,x.eB)
D.d.aX(v,new A.efQ(q))
p.Sz(D.d.gI(v))
p.ej("You are at an Uber station. Get in the car parked next to it and drive up to the people waiting. They get in by themselves.",!0)},
aQ1(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=" points for the ",i=k.ghI()
if(i==null)return
w=d.a
v=w==="bread"
if(v||w==="medicine"){u=i.aEu(v?"food":"medicine")
t=!D.a.a0(u,"You need")}else{v=d.r
t=!1
if(v>0){w=w==="tank"
s=w?A.hc_(k.c5.b):d.e
r=k.c5
q=r.b
if(q>=0.99)u="The tank is already full."
else{p=i.r
o=p<s
if(o)u="You need "+s+" points for that. Earn more with jobs and deliveries."
else{i.r=p-s
r.b=D.k.E(q+v,0,1)
r.aW()
v=""+s
u=w?"You filled the tank for "+v+" points.":"You put gas in the car. -"+v+" points."}t=!o}}else if(d.x){w=k.c5
if(!w.f)u="You feel fine: you do not need pills."
else{v=i.r
r=d.e
q=v<r
if(q)u="You need "+r+j+d.c.toLowerCase()+"."
else{i.r=v-r
w.f=!1
w.aW()
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
v.aW()}if(q){w=k.c5
w.e=D.k.E(w.e+r,0,1)
w.aW()}w=k.c5
w=w.d>0||w.c>0?"Still too tired: eat more.":"You feel stronger."
u="You had the "+d.c.toLowerCase()+". "+w}t=!l}}}A.fJ(t?880:300,90,0.25,"tri")
k.ej(u,t)
w=k.aL
if(w!=null)w.B(k.ghI())
k.m(k.gj0())},
cxp(){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.ghI(),i=l.aL
i=i==null?k:i.b.b==="gasstation"
w=i===!0
i=l.c
i.toString
v=C.aG(i,k,x.w).w.a
i=v.a
u=i>v.b*1.15
t=new A.ef1(u,new A.ef2(l,j,u))
s=C.d(w?"\u26fd":"\ud83d\uded2",k,k,k,k,k,k,D.x8,k,k,k)
r=C.d(w?"NGMY Gas shop":"NGMY Mart",k,k,k,k,k,k,D.fx,k,k,k)
q=j==null?k:j.r
p=x.p
q=C.a([s,D.as,C.E(C.x(C.a([r,C.d("You have "+(q==null?0:q)+" \u2b50",k,k,k,k,k,k,B.foS,k,k,k)],p),D.E,k,D.e,D.i,0,D.p),1)],p)
if(u)q.push(new C.a4(190,k,new A.UL(l.c5,w,14,k),k))
q.push(D.bd)
q.push(C.aA(k,B.bVi,D.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new A.ef0(l),k,k,k,k,k,k,!1,D.a3))
o=C.B(q,D.m,k,D.e,D.i,0,k,k)
n=t.$2("FOOD AND DRINKS (energy)",B.dc8)
s=w?"GAS":"HEALTH AND THE TOWN"
m=t.$2(s,w?B.doK:B.dlr)
t=D.w.j(0.55)
i=u?Math.min(i-24,820):340
s=C.n(28)
r=C.L(D.aX,D.r,1)
q=C.a([o,D.W],p)
if(!u)D.d.v(q,C.a([new A.UL(l.c5,w,14,k),D.N],p))
if(u)q.push(C.B(C.a([C.E(n,5),D.es,C.E(m,3)],p),D.E,k,D.e,D.i,0,k,k))
else D.d.v(q,C.a([n,m],p))
return C.p(D.A,C.eO(D.A,C.p(k,C.x(q,D.ak,k,D.e,D.P,0,D.p),D.f,k,k,new C.o(k,k,r,s,k,B.zq,D.n),k,k,k,D.bg,D.bQ,k,k,i),D.f,D.e3),D.f,t,k,k,k,k,k,k,k,k,k,k)},
ciA(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=this,a1=null,a2=a0.gpq()
a2.toString
w=a0.aC
v=w==null
u=v?a1:w.f
if(u==null)u=0
t=v?a1:w.r
if(t==null)t=300
s=a2.x
r=new A.ee0()
q=new A.edX(a0,u,t,r,new A.ee_(),s,a2)
p=a2.d_d()
o=["\ud83e\udd47","\ud83e\udd48","\ud83e\udd49","4","5","6"]
v=D.w.j(0.55)
n=C.n(28)
m=C.L(D.aX,D.r,1)
l=x.p
k=C.a([C.B(C.a([B.fO1,D.as,C.E(C.x(C.a([B.fPQ,C.d("Race "+a2.as+": first to 8 wins +40",a1,a1,a1,a1,a1,a1,I.tq,a1,a1,a1)],l),D.E,a1,D.e,D.i,0,D.p),1),C.aA(a1,D.rV,D.y,!1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,new A.edV(a0),a1,a1,a1,a1,a1,a1,!1,D.a3)],l),D.m,a1,D.e,D.i,0,a1,a1),D.ae],l)
if(s!=null){j=D.bs.j(0.14)
i=C.n(16)
h=C.L(D.bs,D.r,1)
g=s.b
f=C.d(A.Lk(g).b,a1,a1,a1,a1,a1,a1,D.Kw,a1,a1,a1)
k.push(C.p(a1,C.B(C.a([f,D.as,C.E(C.d(s.r?"You have the "+A.Lk(g).c.toLowerCase()+". Take it to the house (follow the yellow line).":"Go to the "+r.$1(s.c).toLowerCase()+" to pick up the "+A.Lk(g).c.toLowerCase()+".",a1,a1,a1,a1,a1,a1,D.pH,a1,a1,a1),1),C.aA(a1,B.fE6,D.y,!1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,new A.edW(a0,a2),a1,a1,a1,a1,a1,a1,!1,D.a3)],l),D.m,a1,D.e,D.i,0,a1,a1),D.f,a1,a1,new C.o(j,a1,h,i,a1,a1,D.n),a1,a1,a1,D.d1,D.bg,a1,a1,a1))}else{j=C.a([B.fSE,D.N],l)
for(a2=a2.r8(0,u,t),a2=C.d2(a2,0,C.dz(6,"count",x.S),C.T(a2).c),i=a2.$ti,a2=new C.bS(a2,a2.gK(0),i.k("bS<ak.E>")),i=i.k("ak.E");a2.C();){h=a2.d
j.push(q.$1(h==null?i.a(h):h))}D.d.v(k,j)}k.push(D.am)
k.push(B.fHv)
k.push(D.N)
for(e=0;e<p.length;++e){a2=p[e].a==="You"?D.aJ.j(0.18):D.c.j(0.05)
j=new C.aP(12,12)
i=p[e]
h=i.a
g=h==="You"
d=new C.ay(g?D.aJ:D.dr,1,D.r,-1)
f=o[e]
g=g?D.u:D.U
k.push(C.p(a1,new C.ca(D.aL,D.e,D.i,D.m,a1,D.p,a1,0,C.a([new C.a4(26,a1,new C.y(f,a1,D.aTX,a1,a1,a1,a1,a1,a1,a1,a1,a1),a1),new C.by(1,D.bb,new C.y(h,a1,new C.F(!0,D.c,a1,a1,a1,a1,a1,g,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1,a1,a1,a1,a1,a1,a1),a1),new C.y(""+i.b+"/8",a1,M.Av,a1,a1,a1,a1,a1,a1,a1,a1,a1),D.as,new C.y(""+i.c+" pts",a1,B.fmh,a1,a1,a1,a1,a1,a1,a1,a1,a1)],l),a1),D.f,a1,a1,new C.o(a2,a1,new C.bG(d,d,d,d),new C.bh(j,j,j,j),a1,a1,D.n),a1,a1,a1,D.eI,D.kO,a1,a1,a1))}return C.p(D.A,C.eO(D.A,C.p(a1,C.x(k,D.ak,a1,D.e,D.P,0,D.p),D.f,a1,a1,new C.o(a1,a1,m,n,a1,B.zq,D.n),a1,a1,a1,D.bD,D.bQ,a1,a1,340),D.f,D.e3),D.f,v,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1)},
bUZ(d){var w,v,u=this,t=u.aL
if(t==null||t.a!=="tower"||u.ok!=null)return
w=t.f
if(d===w){u.m(new A.edp(u))
return}u.p2=t
w=new A.f3L(w,d,Date.now())
v=t.at
v===$&&C.c()
w.r=v.f
w.w=v.r
u.ok=w
t.y=u.be=u.b4=0
u.m(new A.edq(u))
w=u.e
w===$&&C.c()
w.hb(175,0.28,B.h2P,0)
u.ej("Going to level "+d+": walking to the elevator.",!0)
w=u.p1
if(w!=null)w.bR(0)
w=new A.a5x(u.gctm(),A_.BP)
w.fZ(0)
u.p1=w},
DW(d){var w=D.k.E(d,0,1)
return w*w*(3-2*w)},
ctn(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=null,a1="tri",a2=d.ok,a3=d.p2
if(a2==null||a3==null||d.c==null){w=d.p1
if(w!=null)w.bR(0)
return}v=Date.now()
u=(v-a2.c)/1000
w=a2.b
t=a2.a
s=w>t
switch(a2.d){case 0:r=a3.at
r===$&&C.c()
if(u<1){q=d.DW(u/1)
p=a2.r
r.f=p*(1-q)
o=a2.w
n=62-o
r.r=o+n*q
r.w=Math.atan2(-p,n)
r.x=!0}else if(u<1.8){r.f=0
r.r=62
r.w=3.141592653589793
r.x=!1}else if(u<2.5){r.r=62-44*d.DW((u-1.8)/0.7)
r.w=3.141592653589793
r.x=!0}else r.x=!1
r.y+=0.3
a3.y=d.DW((u-0.8)/0.8)
if(u>=2.6){a2.d=1
a2.c=v
a2.f=3+D.o.E(Math.abs(w-t)-1,0,99)*1.1
a2.e=t
m=A.h3n("cabin",a3.b,!1)
m.z=t
m.Q=s
m.y=1
w=m.at
w===$&&C.c()
w.f=0
w.r=58
w.w=0
w.x=!1
m.B(a0)
d.aL=m
w=s?"\u25b2":"\u25bc"
d.p3.sp(0,w+"  "+C.w(t===1?"L":t))
d.m(d.gj0())
w=d.e
w===$&&C.c()
w.z=!1
w.r=B.f2O
w.Ht(54,0.1,B.h32,3.141592653589793)
A.fJ(520,70,0.25,a1)}break
case 1:m=d.aL
if(m==null||m.a!=="cabin")return
l=a2.f
if(u<0.9)r=1-d.DW(u/0.9)
else{r=l-0.9
r=u>r?d.DW((u-r)/0.9):0}m.y=r
k=u>0.9&&u<l-0.9
if(k){j=D.o.E(t+D.k.V((w-t)*d.DW((u-0.9)/(l-1.8))),1,m.gMh())
if(j!==a2.e){m.z=a2.e=j
t=s?"\u25b2":"\u25bc"
d.p3.sp(0,t+"  "+C.w(j===1?"L":j))
A.fJ(500+j*22,45,0.2,a1)}}i=k?1:0.25
t=d.e
t===$&&C.c()
r=Math.sin(u*5.3)
p=Math.sin(u*2.1)
o=Math.sin(u*0.9)
n=Math.sin(u*8)
t.Ht(54+p*1.2,0.1+Math.sin(u*6.1)*0.007*i,new A.q(0,52+r*0.5*i,52),3.141592653589793+o*0.5+n*0.01*i)
if(u>l-0.9&&!a2.x){a2.x=!0
m.z=w
d.p3.sp(0,C.w(w===1?"L":w))
A.fJ(880,140,0.3,a1)
C.bP(D.fO,new A.eeT(),x.H)}if(u>=l){a2.d=2
a2.c=v
h=a3.b.a
t=d.d
t===$&&C.c()
r=t.d
r===$&&C.c()
t=r[t.e].cy.h(0,h)
g=d.gII().h(0,h*100+w)
a3.f=D.o.E(w,1,a3.gMh())
a3.c=t===w
w=a3.at
w===$&&C.c()
w.f=0
w.r=112
w.w=3.141592653589793
a3.x=!1
a3.CW.aa(0)
a3.B(a3.ch)
d.ajC(a3,g)
a3.B(d.ghI())
w.f=0
w.r=16
w.w=0
w.x=!1
a3.y=1
d.aL=a3
d.m(d.gj0())
d.e.Ht(175,0.28,B.h2Q,0)}break
default:w=a3.at
w===$&&C.c()
q=d.DW(u/1.6)
w.f=0
w.r=16+96*q
w.w=0
w.x=u<1.6
w.y+=0.3
a3.y=1-d.DW((u-1.3)/0.8)
t=d.e
t===$&&C.c()
t.D0(new A.q(0,40,w.r*0.7+14))
if(u>=2.2){f=a3.c
t=d.p1
if(t!=null)t.bR(0)
d.ok=null
w.x=!1
w=a3.y=0
d.m(d.gj0())
t=d.e
t.r=B.aQW
e=d.di
r=e==null
p=r?a0:e.a
p=D.k.E(p==null?170:p,60,420)
o=r?a0:e.b
w=o==null?w:o
r=r?a0:e.c
t.hb(p,D.k.E(r==null?0.4:r,0.15,1.35),B.h2u,w)
A.fJ(660,80,0.25,a1)
w=""+a3.f
d.ej(f?"Level "+w+". This office has no power: walk onto the red mat at the breaker panel, or tap the red frames.":"Level "+w+" of "+a3.gMh()+".",!0)}}},
bQc(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.aL
if(g==null||g.a!=="tower")return D.bK
w=i.d
w===$&&C.c()
v=w.d
v===$&&C.c()
u=v[w.e].cy.h(0,g.b.a)
w=D.w.j(0.55)
v=C.n(28)
t=C.L(D.aX,D.r,1)
s=g.f
r=g.gMh()
q=x.p
s=C.B(C.a([B.fWJ,D.as,C.E(C.x(C.a([B.fOP,C.d("You are on level "+s+" of "+r,h,h,h,h,h,h,I.tq,h,h,h)],q),D.E,h,D.e,D.i,0,D.p),1),C.aA(h,D.rV,D.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new A.ed2(i),h,h,h,h,h,h,!1,D.a3)],q),D.m,h,D.e,D.i,0,h,h)
p=C.a([],q)
for(;r>=1;--r){if(r===g.f)o=D.aJ
else o=r===u?D.bB.j(0.35):D.c.j(0.08)
n=new C.aP(14,14)
m=r===u
if(m)l=D.aw
else l=r===g.f?D.c:D.aX
k=r===g.f
j=new C.ay(l,k||m?2:1,D.r,-1)
l=r===1?"L":""+r
k=k?D.w:D.c
l=C.a([new C.y(l,h,new C.F(!0,k,h,h,h,h,19,D.u,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h),h,h,h,h,h,h,h,h,h)],q)
if(m)l.push(B.fX3)
p.push(C.aA(h,C.p(D.A,C.x(l,D.m,h,D.b9,D.i,0,D.p),D.f,h,h,new C.o(o,h,new C.bG(j,j,j,j),new C.bh(n,n,n,n),h,h,D.n),h,52,h,h,h,h,h,58),D.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new A.ed3(i,r),h,h,h,h,h,h,!1,D.a3))}return C.p(D.A,C.eO(D.A,C.p(h,C.x(C.a([s,D.ae,B.fUY,D.W,C.bX(D.bG,p,D.br,h,8,8),D.am,B.fFY],q),D.ak,h,D.e,D.P,0,D.p),D.f,h,h,new C.o(h,h,t,v,h,B.zq,D.n),h,h,h,D.bD,D.bQ,h,h,330),D.f,D.e3),D.f,w,h,h,h,h,h,h,h,h,h,h)},
auv(){var w,v,u,t,s,r,q=this,p=q.e
p===$&&C.c()
w=Math.cos(p.b)
v=Math.sin(q.e.b)
p=q.e
u=p.d
t=p.c
p=Math.sin(p.a)
s=q.e
r=s.c
return new C.z(u.a7(0,new A.q(-t*w*p,r*v,r*w*Math.cos(s.a))),q.e.d)},
aRZ(d,e,f,g,h){var w=new A.ecP(h)
return new A.q(w.$4(d.a,e.a,f.a,g.a),w.$4(d.b,e.b,f.b,g.b),w.$4(d.c,e.c,f.c,g.c))},
c4F(d){var w=this.d
w===$&&C.c()
w=w.d
w===$&&C.c()
return A.icr(D.d.fG(w,new A.edH()),d)},
cA9(d){var w,v,u=this
u.Bb()
u.Sl()
if(u.aM)u.a31()
u.aL=null
w=u.c4F(d)
if(w.length===0)return
u.m(new A.ef4(u,w))
v=u.e
v===$&&C.c()
v.as=4800
v.e=6
v.f=2600
v.at=-1.2
v.ax=1.4
v.pe(!0)
u.ae2()
v=u.RG
if(v!=null)v.bR(0)
v=new A.a5x(u.gbPs(),A_.BP)
v.fZ(0)
u.RG=v},
ae2(){var w,v,u,t,s,r,q,p=this,o=++p.ry,n=p.rx
if(o>=n.length){p.a30()
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
u=A.h3n(v,o,u.k4.q(0,t))
u.B(p.ghI())
p.aL=u
p.ajC(u,p.gII().h(0,t))
t=p.aL
t.toString
t.B(p.ghI())
p.m(p.gj0())}s=w.r
if(s&&p.aL!=null){p.aL=null
p.m(p.gj0())}if(w.w==null&&w.x==null){s=!n||s
r=p.auv()
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
D.d.M(o,n+Math.max(1,new A.q(u.a-v.a,u.b-v.b,u.c-v.c).gqc()))}}o=w.e
if(o!=null)p.ej("\ud83d\ude81 "+o,!0)},
bPt(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this
if(!a2.p4||a2.c==null)return
w=a2.rx[a2.ry]
v=(Date.now()-a2.to)/1000
u=w.x
if(u!=null){t=a2.CW.gf2()/1000
s=B.a5c[u].a
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
h=a2.auv()
k=A.oN(h.a,k,i)
m=A.oN(h.b,m,i)}if(v>=w.d){a2.ae2()
return}}else{u=w.w
if(u!=null){u=B.ks[u]
t=a2.CW.gf2()
t=$.aS6().cY6(0,D.d.cp(B.ks,u),t/1000).a
u=t[0]
m=new A.q(u,26,t[1])
l=v*0.6+0.8
k=new A.q(u+Math.sin(l)*190,85,t[1]+Math.cos(l)*190)
if(v<2.5){j=v/2.5
i=j*j*(3-2*j)
g=a2.auv()
k=A.oN(g.a,k,i)
m=A.oN(g.b,m,i)}if(v>=w.d){a2.ae2()
return}}else{f=v*w.c
if(a2.x1.length<2||f>=D.d.gak(a2.xr)){a2.ae2()
return}u=a2.xr
t=u.length
e=0
for(;;){s=e+2
if(!(s<t&&u[e+1]<=f))break;++e}t=u[e]
n=e+1
d=D.k.E((f-t)/(u[n]-t),0,1)
t=new A.ed0()
u=e-1
k=a2.aRZ(t.$2(a2.x1,u),t.$2(a2.x1,e),t.$2(a2.x1,n),t.$2(a2.x1,s),d)
m=a2.aRZ(t.$2(a2.x2,u),t.$2(a2.x2,e),t.$2(a2.x2,n),t.$2(a2.x2,s),d)}}a0=m.aG(0,k)
a1=Math.max(8,a0.gqc())
u=a2.e
u===$&&C.c()
t=Math.atan2(a0.a,-a0.c)
u.Ht(a1,Math.asin(D.k.E(-a0.b/a1,-1,1)),m,t)},
a30(){var w=this,v=w.e
v===$&&C.c()
v.as=0
v=w.RG
if(v!=null)v.bR(0)
w.RG=null
if(w.c==null)return
w.m(new A.efg(w))
w.y6()
w.ej("The drone has landed.",!0)},
bPr(){var w=null,v=new A.ecZ(this),u=D.w.j(0.55),t=C.n(28),s=C.L(D.aX,D.r,1),r=x.p
return C.p(D.A,C.eO(D.A,C.p(w,C.x(C.a([C.B(C.a([B.fUL,D.as,B.bHt,C.aA(w,D.rV,D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new A.ecY(this),w,w,w,w,w,w,!1,D.a3)],r),D.m,w,D.e,D.i,0,w,w),B.fHA,v.$4("\ud83c\udf06","The whole city","High flights over every street","city"),v.$4("\ud83e\udea7","Billboards and NGMY logos","Close to every ad, and the big logo board","billboards"),v.$4("\ud83c\udfc1","Edge billboards only","A tour round the big boards at the edges of the city","edges"),v.$4("\ud83c\udfe0","Houses","Fly by the houses, then go inside a big one","houses"),v.$4("\ud83c\udfe5","Hospital, shop and school","Fly in and look round inside each","hospital"),v.$4("\ud83d\ude8c","Traffic","Follow the self-driving buses and police cars","traffic"),v.$4("\ud83c\udfac","Everything","A little of all of it","all")],r),D.ak,w,D.e,D.P,0,D.p),D.f,w,w,new C.o(w,w,s,t,w,B.zq,D.n),w,w,w,D.bD,D.bQ,w,w,330),D.f,D.e3),D.f,u,w,w,w,w,w,w,w,w,w,w)},
gII(){var w=this.d
w===$&&C.c()
w=w.d
w===$&&C.c()
return D.d.fG(w,new A.edw()).cx},
auH(d){var w,v=C.a([],x.u)
for(w=0;w<4;++w)v.push(d.r9(w))
return v},
cAy(d){var w,v,u=C.a([],x.t)
for(w=0;w<4;++w){if(!d.r9(w)){v=d.d
v===$&&C.c()
v=w>=v.length}else v=!0
u.push(v?0:new A.eff(d,w).$0())}return u},
cHM(d,e){var w,v,u,t,s,r=d.d
r===$&&C.c()
if(e>=r.length)return""
w=r[e]
r=w.a
v=d.at.h(0,r)
u=v==null
t=u?null:v.a
s=A.a2z(t==null?w.b:t).toLowerCase()
if(u||!A.h7C(w.b,v.a))return"nothing put in yet at "+A.j6(r).b
if(v.b.c<2)return"the "+s+" at "+A.j6(r).b+" is not finished: fasten every wire and close it"
return"the "+s+" at "+A.j6(r).b+" works but is NOT wired safely: "+d.apN(r).b},
ajC(d,e){var w=e==null
d.d=w?B.aBi:this.auH(e)
d.e=w?B.a3B:this.cAy(e)},
gbbH(){var w,v,u=this.aL
if(u==null||!u.c)return null
w=u.a
v=u.b.a
return w==="tower"?v*100+u.f:v},
gakB(){var w,v=this.gbbH(),u=v==null?null:this.gII().h(0,v)
if(u!=null)w=u.gblp()||D.d.cJ(this.auH(u),new A.eg4())
else w=!1
return w},
at6(){var w,v,u,t,s,r=this,q=r.aL,p=r.gbbH(),o=p==null,n=o?null:r.gII().h(0,p)
if(q==null||o||n==null)return
if(!D.d.cJ(r.auH(n),new A.ecy())){r.ej("Not quite done: the wiring is not right yet. Open the wiring bench again (tap the panel) and check every wire.",!1)
return}w=q.b
r.gII().W(0,p)
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
s=10+r.jk.ap(26)
v=r.ghI()
if(v!=null)v.r+=s
r.qZ=Date.now()
r.hS=0
q.d=B.dtX
q.e=B.a3B
q.B(r.ghI())
r.m(r.gj0())
A.fJ(880,120,0.3,"tri")
v=r.d
v===$&&C.c()
u=v.d
u===$&&C.c()
v=u[v.e]
u=v.k4.a
v=v.cy.a
o=o?"The power is back on level "+q.f+".":"The power is back in the house."
v=u+v>0?" The other red tags in the city are different places that still have no power.":""
r.ej("\u2705 JOB COMPLETE! "+o+" +"+s+" stars."+v,!0)},
YR(d){return this.c0z(d)},
c0z(d){var w=0,v=C.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k
var $async$YR=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:l=d.b
k=l.a
if(d.a==="tower")k=k*100+d.f
s=t.gII().c3(0,k,new A.edt(l,d))
w=3
return C.b(t.yk(new A.edu(s)),$async$YR)
case 3:if(t.c==null){w=1
break}t.ajC(d,s)
if(t.gakB())t.at6()
else{d.B(t.ghI())
t.m(t.gj0())
r=x.s
q=C.a([],r)
if(s.r9(0))q.push("outlet 1")
if(s.r9(1))q.push("outlet 2")
if(s.r9(2))q.push("the ceiling light")
if(s.r9(3))q.push("the switch")
p=C.a([],r)
if(!s.r9(0))p.push("outlet 1")
if(!s.r9(1))p.push("outlet 2")
if(!s.r9(2))p.push("the ceiling light")
if(!s.r9(3))p.push("the switch")
r=C.a([],r)
for(o=0;o<4;++o)if(!s.r9(o))r.push(t.cHM(s,o))
n=x.cc
m=C.C(new C.Y(r,new A.edv(),n),n.k("M.E"))
r=q.length===0?"Nothing is fixed yet":"Fixed so far: "+D.d.aI(q,", ")
p=D.d.aI(p,", ")
q=m.length===0?"":"Why: "+C.d2(m,0,C.dz(2,"count",x.S),C.T(m).c).aI(0,"; ")+". "
t.ej(r+". Still to do: "+p+". "+q+"Tap the red frames to carry on.",!1)}case 1:return C.h(u,v)}})
return C.i($async$YR,v)},
abB(d){return this.bSl(d)},
bSl(d){var w=0,v=C.j(x.H),u,t=this,s,r,q,p,o
var $async$abB=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:o=t.d
o===$&&C.c()
s=o.d
s===$&&C.c()
r=d.a
q=s[o.e].db.c3(0,r,new A.ed8())
w=3
return C.b(t.yk(new A.ed9(q)),$async$abB)
case 3:if(t.c==null){w=1
break}if(q.c>=2&&A.Ll(A.td("light"),q).a==="ok"){o=t.d
s=o.d
s===$&&C.c()
s[o.e].db.W(0,r)
o=t.d
s=o.d
s===$&&C.c()
s[o.e].k3.W(0,r)
p=10+t.jk.ap(26)
r=t.ghI()
if(r!=null)r.r+=p
t.m(t.gj0())
t.ej("The street light is on again. You wired it correctly: black to black, white to white, ground to ground. +"+p+" stars.",!0)}else t.ej("The light is still out: finish the wiring and fit the cover, then it comes on.",!1)
case 1:return C.h(u,v)}})
return C.i($async$abB,v)},
c97(){var w,v,u=this,t=u.aC
if(t==null)return
w=u.d
w===$&&C.c()
v=w.d
v===$&&C.c()
v[w.e].dB(0,"crate",t.f+Math.sin(t.w)*34,t.r+Math.cos(t.w)*34)
u.al=null
u.m(u.gj0())
u.ej("You put the crate down.",!0)},
c6z(){var w,v,u,t,s,r,q,p,o=this,n=o.d
n===$&&C.c()
n=n.d
n===$&&C.c()
w=D.d.fG(n,new A.edJ())
if(o.gaXI())return
n=x._
v=C.a([],n)
for(u=w.x,t=u.length,s=w.k4,r=0;r<u.length;u.length===t||(0,C.K)(u),++r){q=u[r]
p=q.b
if(p==="house2"||p==="bighouse"){p=q.a
p=!s.q(0,p)&&p!==o.jj}else p=!1
if(p)v.push(q)}if(s.a<2&&v.length!==0&&o.bD==null&&o.bE==null){q=v[o.jk.ap(v.length)]
v=q.a
s.M(0,v)
o.jj=v
v=q.b==="bighouse"?"the big house":"the house"
o.b5r(new A.Qy(q,v,"power","",o.aOP(),0))}n=C.a([],n)
for(v=u.length,t=w.k3,r=0;r<u.length;u.length===v||(0,C.K)(u),++r){q=u[r]
s=q.b
if((s==="pole"||s==="lamppost")&&!t.q(0,q.a))n.push(q)}if(t.a<3&&n.length!==0&&D.o.F(o.bX,90)===0){t.M(0,n[D.o.F(o.bX*5,n.length)].a)
o.ej("\u26a1 A street light went out in the town. Find it (it is dark, with a red sign) and fix it.",!1)}n=o.d
v=n.d
v===$&&C.c()
if(v[n.e].c==="outside"&&o.aL==null)o.m(o.gj0())},
axw(d){return this.c6A(d)},
c6A(d){var w=0,v=C.j(x.H),u=this
var $async$axw=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:u.m(new A.edK(u,d))
return C.h(null,v)}})
return C.i($async$axw,v)},
aXT(){var w,v=this.fF,u=v==null?null:v.a
if(u==null)return null
w=A.vM(new A.q(0,0,B.hF.h(0,u.b).d/2+60),u.e*3.141592653589793/2)
return new C.z(u.c+w.a,u.d+w.c)},
awE(){var w=this.aC,v=this.aXT()
if(w==null||v==null)return null
return D.k.V(Math.sqrt(Math.pow(v.a-w.f,2)+Math.pow(v.b-w.r,2))/10)},
ctH(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.aC,g=j.gKF()
g=g==null?i:g.ga7a(0)
if(g==null){g=j.gpq()
g=g==null?i:g.ga7a(0)
w=g}else w=g
if(w==null)w=j.aXT()
g=!1
if(j.fF==null){v=j.gpq()
if((v==null?i:v.x)==null){g=j.gKF()
g=(g==null?i:g.f)==null}}v=!0
if(!g)if(h!=null)if(w!=null){g=j.d
g===$&&C.c()
v=g.d
v===$&&C.c()
g=v[g.e].c!=="outside"||j.aL!=null}else g=v
else g=v
else g=v
if(g)return B.wL
g=C.a([],x.z)
u=new A.f3(g)
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
u.aEm(new A.q(h.f+o*k,1.4,h.r+n*k),B.hlw,D.bs,p)
k+=26;++l}}u.f=3
u.d=0.4
u.dm(new A.q(v,0,s),new A.q(v,170,s),4,D.bs,8)
u.dm(new A.q(v,0,s),new A.q(v,1.6,s),24,D.bs,14)
return g},
bHO(){var w,v,u,t,s,r,q,p=this,o=null,n=p.y1,m=new A.ec2(),l=new A.ec1(),k=x.p
if(n!=null){w=p.awE()
v=C.a([C.B(C.a([C.hb(D.ay,o,C.d(n.gbfs(),o,o,o,o,o,o,D.pJ,o,o,o),o,24),D.bd,C.E(C.x(C.a([C.d(n.gaEw(),o,o,o,o,o,o,D.de,o,o,o),B.fQc],k),D.E,o,D.e,D.i,0,D.p),1),C.aA(o,D.rV,D.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new A.ec3(p),o,o,o,o,o,o,!1,D.a3)],k),D.m,o,D.e,D.i,0,o,o),D.ae],k)
for(u=n.gaHQ(0),t=0;t<3;++t)v.push(m.$1(u[t]))
u=D.bs.j(0.12)
s=C.n(14)
r=C.L(D.bs.j(0.5),D.r,1)
v.push(C.p(o,C.B(C.a([B.c17,D.as,C.E(C.d(w==null?"A yellow line on the ground will show you the way.":"Follow the yellow line on the ground. It is about "+C.w(w)+" metres away.",o,o,o,o,o,o,D.pH,o,o,o),1)],k),D.m,o,D.e,D.i,0,o,o),D.f,o,o,new C.o(u,o,r,s,o,o,D.n),o,o,o,D.l9,D.bT,o,o,o))
v.push(l.$5$primary(A2.Hx,"Show me the way",D.bs,new A.ec4(p),!0))
v.push(l.$4(B.bOs,"Take me there",D.ba,new A.ec5(p,n)))
v.push(l.$4(D.k0,"Later",D.ay,new A.ec6(p,n)))
q=C.x(v,D.ak,o,D.e,D.P,0,D.p)}else q=C.x(C.a([B.f65,D.ae,m.$1("Hello, this is the City office. A few calls were missed."),m.$1("Please answer the phone, so you can keep working."),m.$1("Every call is a person who needs help. Thank you for answering!"),l.$5$primary(D.hB,"OK, I will answer",D.ba,new A.ec7(p),!0)],k),D.ak,o,D.e,D.P,0,D.p)
k=D.w.j(0.55)
v=C.n(28)
return C.p(D.A,C.eO(D.A,C.p(o,q,D.f,o,o,new C.o(o,o,C.L(D.aX,D.r,1),v,B.dtB,B.zq,D.n),o,o,o,D.bD,D.bQ,o,o,330),D.f,D.e3),D.f,k,o,o,o,o,o,o,o,o,o,o)},
cw_(){var w,v,u,t,s=this,r=s.d
r===$&&C.c()
w=r.d
w===$&&C.c()
v=w[r.e].C_(s.Q)
if(v==null)return
u=B.dBs.h(0,v.b)
if(u==null){s.ej("This cannot be sold.",!1)
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
s.m(s.gj0())
s.ej("Sold for "+C.w(u)+" points.",!0)},
A9(d){return this.bIT(d)},
bIT(d){var w=0,v=C.j(x.H),u,t=this,s
var $async$A9=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return C.b(C.bV(D.L,null,new A.ecu(d),s,!0,!0,!0,null,!1,!1,x.H),$async$A9)
case 3:if(t.c==null){w=1
break}t.m(new A.ecv(t))
case 1:return C.h(u,v)}})
return C.i($async$A9,v)},
csD(d){var w,v,u=this.ghI()
if(u!=null){w=u.c
w===$&&C.c()
w=d>=w.length}else w=!0
if(w)return C.f9(null,x.H)
w=u.c
w===$&&C.c()
v=w[d]
w=this.c
w.toString
return C.bV(E.mE,null,new A.eeS(this,v,u),w,!0,!0,!0,D.k7,!1,!1,x.H)},
azT(d){var w=this.c
w.toString
return C.bV(E.mE,null,new A.eez(this,d),w,!0,!0,!1,D.k7,!1,!1,x.H)},
cFn(){var w=this.c
w.toString
return C.bV(E.mE,null,new A.efP(this),w,!0,!0,!0,D.k7,!1,!1,x.H)},
cEK(){var w=this.c
w.toString
return C.bV(D.L,null,new A.efB(this),w,!0,!0,!0,null,!1,!1,x.H)},
b8k(d,e){var w,v,u,t=this,s=t.dx
if(s!=null)s.a2(0)
s=t.d
s===$&&C.c()
s=s.gr_()
w=s.length
v=0
for(;v<w;++v){u=s[v]
if(u.k1==null)u.k1="tv100"
if(u.c==="hall")if(u.k2==null)u.k2="tv100"
u.p2=!0}t.z=!1
s=x.fG
w=t.d
if(e){s=new A.aWZ(!0,w,d,C.a([],s))
s.b_T()}else{s=new A.aWZ(!1,w,d,C.a([],s))
s.b_T()}t.cx=s
t.cy=t.CW.gf2()/1000
t.x=!0
t.r="look"
t.w=!1
s=D.d.gI(t.cx.d)
t.bk.aa(0)
t.b8=!1
t.m(new A.efc(t,s.a))
t.y6()
t.dx=C.df(D.ji,new A.efd(t))
t.m(new A.efe())},
cAu(d){return this.b8k(d,!1)},
bOI(d,e){var w,v=d.w[e],u=v.b
A:{if("left"===u){w=new A.q(-d.geb(0)/2,40,v.c+d.gh4(0)/2-40)
break A}if("right"===u){w=new A.q(d.geb(0)/2,40,v.c+d.gh4(0)/2-40)
break A}w=new A.q(v.c,40,0)
break A}return w},
cEL(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=i.cx
if(h==null||i.c==null)return
w=i.CW.gf2()/1000-i.cy
v=h.e
v===$&&C.c()
if(w>=v){i.Sl()
i.iL("The tour is over. Press Tour to walk the house again.")
return}if(i.b8)return
u=h.bcG(w)
v=i.d
v===$&&C.c()
t=v.e
if(u.a!==t){i.ak_(u)
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
if(t&&v<s.w.length){o=1.25*D.dU.aw(0,D.k.E(u.ay,0,1))
q=s.ax
n=q.h(0,v)
if((n==null?0:n)!==o){q.n(0,v,o)
p=!0}}q=u.at
if(D.a.a0(q,"ad")&&i.bk.M(0,q)){s.p3=D.o.F(s.p3+1,8)
A.fJ(1000,50,0.25,"tri")
p=!0}if(p)i.m(i.gj0())
m=Math.max(s.geb(0)*0.95,s.gh4(0)*1.15)+20
t=t&&v<s.w.length
q=u.b
if(t){l=i.bOI(s,v)
k=D.dw.aw(0,D.k.E(u.ay,0,1))
j=s.w[v].b
v=i.e
v===$&&C.c()
t=j==="back"?14:0
if(j==="left")n=0.55*k
else n=j==="right"?-0.55*k:-0.03
v.hb(m+(70-m)*k,0.2-0.07*k,new A.q(l.a*0.9+q*0.1,36,l.c+t),n)}else{v=i.e
v===$&&C.c()
v.hb(m,0.24,new A.q(q*0.7,30,u.c*0.6+8),-0.05-q/(s.geb(0)/2)*0.2)}if(u.as!==i.dy)i.m(new A.efC(i,u))},
ak_(d){return this.cEJ(d)},
cEJ(d){var w=0,v=C.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j
var $async$ak_=C.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:l={}
r.b8=!0
l.a=null
t=4
p=$.aW.al$.x.h(0,r.a_)
p=p==null?null:p.gbd()
q=x.cU.a(p)
p=q
p=p==null?null:p.m9(0.6).dc(0,D.iI)
j=l
w=7
return C.b(x.fa.b(p)?p:C.dV(p,x.eT),$async$ak_)
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
n[p.e].ax.aa(0)
r.ay5(d.a,!0)
p=r.d
n=p.d
n===$&&C.c()
m=n[p.e]
p=d.ch
if(p>=0&&p<m.w.length)m.ax.n(0,p,1.25)
r.m(new A.efr(l,r))
l=r.e
l===$&&C.c()
l.d=new A.q(d.b,36,d.c+4)
l.c=70
l.a=-0.03
l.b=0.15
r.b8=!1
case 1:return C.h(u,v)
case 2:return C.f(s.at(-1),v)}})
return C.i($async$ak_,v)},
Sl(){var w,v,u,t=this,s=t.dx
if(s!=null)s.a2(0)
t.dx=null
s=t.d
s===$&&C.c()
s=s.d
s===$&&C.c()
w=s.length
v=0
for(;v<s.length;s.length===w||(0,C.K)(s),++v){u=s[v]
u.at.aa(0)
u.ax.aa(0)}t.aB=null
t.b8=!1
t.m(new A.efj(t))
t.y6()},
cnj(){var w,v,u,t,s,r,q,p,o,n=this,m=n.cx
if(m!=null)return m.bcG(n.CW.gf2()/1000-n.cy)
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
return A.aud(n.c5.d>0,0,-1,"",!1,o,"",-1,q,!1,!1,!1,v.a,p,r,u,s,t)}return null},
b93(){var w,v=this,u=v.c5,t=u.r
if(t<=0)return
u.r=0
w=v.ghI()
if(w!=null)w.r=Math.max(0,w.r-t)
if(v.c!=null)v.m(new A.efk())},
aZJ(){var w,v,u,t=this.d
t===$&&C.c()
w=t.d
w===$&&C.c()
t=w[t.e]
v=new A.bak(t,-t.geb(0)/2+10,t.geb(0)/2-10,-760,t.gh4(0)-10,0,24,0,B.djE)
v.GL(0)
u=$.blU
if(u!=null){t=C.aK(u.h(0,"seed"))
t=t==null?null:D.k.N(t)
t=t===this.d.b&&typeof u.h(0,"x")=="number"&&typeof u.h(0,"z")=="number"}else t=!1
if(t){v.f=C.e3(u.h(0,"x"))
v.r=C.e3(u.h(0,"z"))
t=C.aK(u.h(0,"yaw"))
if(t==null)t=null
v.w=t==null?0:t
v.GL(0)}return v},
Sf(){var w,v=this,u=v.d
u===$&&C.c()
w=u.d
w===$&&C.c()
if(w[u.e].c!=="outside")return
u=v.aC;(u==null?v.aC=v.aZJ():u).GL(0)
v.aM=!0
v.bM=Date.now()
u=v.b5
if(u!=null)u.bR(0)
u=new A.a5x(v.gcHt(),D.a_i)
u.fZ(0)
v.b5=u
v.m(new A.efb())
v.iL("Slide the round stick to walk. Walk up to a door and through it to go in: the house, the hospital or the shop. Double tap a spot to go there.")},
a31(){var w,v=this
v.aM=!1
v.be=v.b4=0
v.bj=!1
w=v.b5
if(w!=null)w.bR(0)
v.b5=null
w=v.aC
if(w!=null)w.x=!1
v.m(new A.efi())},
cHu(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.aL,f=g==null
if(f)w=null
else{v=g.at
v===$&&C.c()
w=v}if(w==null)w=h.aC
if(h.ok!=null)return
v=!0
if(w!=null)if(h.c!=null)if(f){v=h.d
v===$&&C.c()
u=v.d
u===$&&C.c()
v=u[v.e].c!=="outside"}else v=!1
if(v)return
t=Date.now()
s=D.k.E((t-h.bM)/1000,0,0.1)
h.bM=t
w.GL(0)
w.z=h.bj&&h.bG==null
if(h.bG==null)w.aK8()
w.cQo(s)
v=h.e
v===$&&C.c()
r=Math.sin(v.a)
q=Math.cos(h.e.a)
v=h.be
u=h.b4
p=h.bG==null
o=h.c5
n=p?o.c>0:o.b<=0
if(p)w.ch=o.d>0?0.28:1
if(n){if((u!==0||v!==0||w.at!=null)&&t-h.c8>6000){h.c8=t
h.ej(p?"You are too tired to walk. Rest a little, or buy some food in a shop.":"The car has no gas. Get out, walk to a gas station and buy gas.",!1)}w.at=null
m=!1}else if(u!==0||v!==0){w.at=null
m=w.aMq(0,r*v+q*u,-q*v+r*u,s)}else m=w.FN(0,s)
v=!m
if(v)w.x=!1
if(h.ex===0){u=h.d
u===$&&C.c()
p=u.d
p===$&&C.c()
l=p[u.e].c==="outside"}else l=!1
if(l){u=m&&h.bG==null
k=o.bkE(s,m&&h.bG!=null,u)}else k=null
if(k!=null)h.ej(k,!1)
h.b93()
if(!v||w.Q>0){u=h.e
p=w.f
o=w.r
u.cx=null
u.d=new A.q(p,30,o)
u.ae4()
u.aW()}if(!f){g.cx=h.al
j=g.fB(0,h.ghI())
h.al=g.cx
if(j!=null){h.iL(j)
h.m(h.gj0())}if(g.cy){g.cy=!1
h.YR(g)}if(g.dx){g.dx=!1
if(!h.id)h.m(new A.eg0(h))}if(g.db){g.db=!1
if(!h.k2)h.m(new A.eg1(h))}if(g.w){g.w=!1
if(!h.k3)h.m(new A.eg2(h))}f=g.x
if(f!==h.k4){h.k4=f
v=h.e
if(f)v.D0(B.h5K)
else v.D0(new A.q(0,30,110))}f=g.at
f===$&&C.c()
v=!1
if(f.r>308)if(Math.abs(f.f)<36)f=!(g.a==="tower"&&g.f>1)
else f=v
else f=v
if(f)h.aYa()
return}f=!1
if(h.bG==null){f=h.gpq()
f=(f==null?null:f.x)!=null}if(f){f=h.gpq()
f.toString
h.aSF(f.blc(w.f,w.r,h.CW.gf2()/1000))}f=!1
if(h.bG==null){f=h.d
f===$&&C.c()
u=f.d
u===$&&C.c()
f=u[f.e].c==="outside"&&h.ok==null&&h.ex===0}if(f){f=$.aS6()
f.FN(0,h.CW.gf2()/1000)
i=f.cSI(w.f,w.r)
if(i>=0)h.cts(i)}f=h.bG
if(f!=null)h.cFu(w)
if(m&&h.bG==null&&h.cHs(w))return
h.cFN(w)
if(!v||D.o.F(h.c1++,25)===0)h.crM()},
cHs(d){var w,v,u,t,s=this
if(Math.abs(d.f)<24){w=d.r
w=w>-2&&w<14}else w=!1
if(w)if(!(Math.abs(d.w)>2.2)){w=d.at
w=w!=null&&w.b<4}else w=!0
else w=!1
if(w){s.a31()
s.AG(10)
s.iL("You are inside the living room. Use Go outside to come back out.")
return!0}w=s.d
w===$&&C.c()
v=w.d
v===$&&C.c()
w=D.d.gaf(v[w.e].x)
v=new C.eR(w,new A.eg_())
while(v.C()){u=w.gS(0)
t=A.vM(new A.q(0,0,B.hF.h(0,u.b).d/2+10),u.e*3.141592653589793/2)
if(Math.abs(d.f-(u.c+t.a))<22&&Math.abs(d.r-(u.d+t.c))<16){s.Y6(u)
return!0}}return!1},
b4P(d){var w,v,u,t,s,r,q,p,o=this,n=o.aC,m=o.d
m===$&&C.c()
w=!0
if(m.a.length===0)if(n!=null){w=m.d
w===$&&C.c()
w=w[m.e].c!=="outside"||o.c==null}if(w)return
w=o.aM
v=n.f
u=n.r
t=n.w
s=o.aL
s=s==null?null:s.b.a
r=o.e
r===$&&C.c()
$.blU=C.H(["seed",m.b,"steer",w,"x",v,"z",u,"yaw",t,"inner",s,"cy",r.a,"cp",r.b,"cd",r.c],x.N,x.A)
q=Date.now()
if(d||q-o.dw>4000){o.dw=q
p=D.X.aq($.blU,null)
C.az().bJ(new A.eeI(p),x.y).eK(new A.eeJ())}},
crM(){return this.b4P(!1)},
ai5(){var w=0,v=C.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0
var $async$ai5=C.e(function(a1,a2){if(a1===1){s.push(a2)
w=t}for(;;)switch(w){case 0:d=$.blU
w=d==null?3:4
break
case 3:t=6
w=9
return C.b(C.az(),$async$ai5)
case 9:q=a2
p=C.aS(J.r(q.a,"ngmy_city_where"))
if(p!=null)d=J.Bj(x.G.a(D.X.aN(0,p,null)),x.N,x.A)
t=2
w=8
break
case 6:t=5
a0=s.pop()
w=8
break
case 5:w=2
break
case 8:case 4:n=!0
if(r.c!=null)if(d!=null){m=r.d
m===$&&C.c()
l=m.d
l===$&&C.c()
if(l[m.e].c==="outside")if(J.A(J.r(d,"steer"),!0)){n=C.aK(J.r(d,"seed"))
n=n==null?null:D.k.N(n)
n=n!==r.d.b}}if(n){w=1
break}$.blU=d
if(!r.aM)r.Sf()
n=C.aK(J.r(d,"inner"))
k=n==null?null:D.k.N(n)
if(k!=null&&r.aL==null){n=r.d
n===$&&C.c()
m=n.d
m===$&&C.c()
n=m[n.e].x
m=n.length
j=0
for(;j<n.length;n.length===m||(0,C.K)(n),++j){i=n[j]
if(i.a===k&&B.a9l.q(0,i.b)){r.Y6(i)
break}}}n=r.aL
m=n==null
if(m)h=null
else{n=n.at
n===$&&C.c()
h=n}if(h==null)h=r.aC
n=r.e
n===$&&C.c()
if(!m)m=n.d
else{m=h==null
l=m?null:h.f
if(l==null)l=n.d.a
m=m?null:h.r
m=new A.q(l,30,m==null?n.d.c:m)}l=C.aK(J.r(d,"cd"))
if(l==null)l=null
if(l==null)l=r.e.c
g=r.e
g=D.k.E(l,g.e,g.f)
l=C.aK(J.r(d,"cy"))
if(l==null)l=null
if(l==null)l=r.e.a
f=C.aK(J.r(d,"cp"))
if(f==null)f=null
if(f==null)f=r.e.b
e=r.e
n.Ht(g,D.k.E(f,e.at,e.ax),m,l)
case 1:return C.h(u,v)
case 2:return C.f(s.at(-1),v)}})
return C.i($async$ai5,v)},
bEX(){var w,v,u,t,s,r,q=this,p=q.aC,o=!0
if(p!=null){w=q.d
w===$&&C.c()
v=w.d
v===$&&C.c()
if(v[w.e].c==="outside")if(q.aL==null)if(q.aM)if(q.bG==null){o=q.e
o===$&&C.c()
o=o.c<340}}if(o)return B.wL
o=q.e
o===$&&C.c()
u=o.c/340
o=C.a([],x.z)
t=new A.f3(o)
t.f=3
s=78+6*u
w=p.f
v=p.r
r=s+16*u
t.yX(new A.q(w,s,v),new A.q(w,r,v),0,B.BE,7*u,0.2,6)
v=p.f
w=p.r
t.d1(new A.q(v,r,w),new A.q(v,s+30*u,w),2.2*u,B.BE,0.2,6)
return o},
Y6(d){var w,v,u,t,s,r,q,p=this
p.be=p.b4=0
w=d.b
if(w==="store"||w==="gasstation")w="shop"
else if(w==="hq")w="tower"
v=p.d
v===$&&C.c()
u=v.d
u===$&&C.c()
t=d.a
s=A.h3n(w,d,u[v.e].k4.q(0,t))
s.cx=p.al
s.B(p.ghI())
p.ajC(s,p.gII().h(0,t))
s.B(p.ghI())
p.aL=s
p.cL=null
w=s.a
if(w==="tower"){v=p.d
u=v.d
u===$&&C.c()
r=u[v.e].cy.h(0,t)
v=p.fF
if(v!=null&&v.c==="office"&&r!=null)p.k3=!0}v=p.e
v===$&&C.c()
p.di=new C.b5(v.c,v.a,v.b)
v.e=60
v.f=420
v.at=0.15
v.ax=1.35
v.z=!1
v.r=B.aQW
v.pe(!0)
v=p.e
u=D.k.E(v.c,60,420)
t=p.e
q=t.a
v.hb(u,D.k.E(t.b,0.15,1.35),new A.q(0,30,110),q)
p.m(p.gj0())
A:{if("hospital"===w){w="The hospital. Walk onto the blue mat to admit the sick, and up to a bed to treat the patient. Walk to the green mat to go out."
break A}if("dmv"===w){w="The licence office. Walk onto the blue mat at the desk to get your Uber licence. Walk to the green mat to go out."
break A}if("tower"===w){w="The lobby of an office tower. Walk onto the blue mat (or tap the elevator) to choose a level. Walk to the green mat to go out."
break A}if("house2"===w||"bighouse"===w){w="The house. Walk onto the red or green mat at the breaker panel. Walk to the green mat to go out."
break A}if("school"===w){w="The school. Walk onto the mats to teach the class or read in the library. Walk to the green mat to go out."
break A}if("firestation"===w){w="The fire station. Walk onto the mats to check the equipment. Walk to the green mat to go out."
break A}w="The shop. Walk onto the yellow mat for food and the purple mat for medicine. Walk to the green mat to go out."
break A}p.iL(w)
A.fJ(660,80,0.25,"tri")},
aYa(){var w,v,u,t,s,r,q,p,o,n=this,m=n.aL,l=n.aC
if(m==null||l==null)return
w=m.b
v=B.hF.h(0,w.b)
v.toString
n.al=m.cx
n.aL=null
n.be=n.b4=0
u=A.vM(new A.q(0,0,v.d/2+30),w.e*3.141592653589793/2)
l.f=w.c+u.a
l.r=w.d+u.c
l.w=0
l.at=null
l.GL(0)
n.m(n.gj0())
n.y6()
t=n.di
v=n.e
v===$&&C.c()
s=l.f
r=l.r
q=t==null
p=q?null:t.a
o=q?null:t.b
q=q?null:t.c
v.hb(p,q,new A.q(s,30,r),o)
n.iL("You are back in the city.")},
cFN(d){var w,v,u,t,s,r,q,p,o,n,m=this,l={}
l.a=null
w=m.bG==null
v=!1
if(!w||m.al==null){u=m.c5.b
if(u<(!w?0.7:0.99)){u=m.d
u===$&&C.c()
t=u.d
t===$&&C.c()
u=D.d.b_(t[u.e].x,new A.efT(d))
v=u}}if(v)l.a=new C.Gs(new A.efU(m),"\u26fd Buy gas ("+A.hc_(m.c5.b)+" \u2b50)")
else if(!w)l.a=new C.Gs(m.gbUq(),"\ud83d\udeaa Get out")
else{if(m.al!=null)l.a=new C.Gs(m.gc96(),"\u2b07 Put the crate down")
w=m.d
w===$&&C.c()
u=w.d
u===$&&C.c()
w=u[w.e].x
u=w.length
s=0
for(;s<w.length;w.length===u||(0,C.K)(w),++s){r=w[s]
q=Math.sqrt(Math.pow(d.f-r.c,2)+Math.pow(d.r-r.d,2))
t=r.b
p=B.hF.h(0,t).a.toLowerCase()
if(l.a!=null)break
if(t==="crate"&&q<46){l.a=new C.Gs(new A.efV(m,r),"\ud83d\udce6 Pick up the crate")
break}if(t==="pole"||t==="lamppost"){o=m.d
n=o.d
n===$&&C.c()
o=n[o.e].k3.q(0,r.a)&&q<60}else o=!1
if(o){l.a=new C.Gs(new A.efW(m,r),"\ud83d\udd27 Fix the street light")
break}if(D.d.q(B.Ij,t)&&q<36){l.a=new C.Gs(new A.efX(m,r),"\ud83c\udf4e Feed the "+p)
break}if(D.d.q(B.dhU,t)&&q<60){l.a=new C.Gs(new A.efY(m,r),"\ud83d\ude97 Get in the "+p)
break}}}w=l.a
w=w==null?null:w.b
u=m.cL
if(w!=(u==null?null:u.b))m.m(new A.efZ(l,m))},
bRB(d){var w,v=this,u=v.cl,t=d.a,s=u.h(0,t),r=B.hF.h(0,d.b).a
if(s!=null&&v.CW.gf2()/1000-s<30){v.ej("The "+r.toLowerCase()+" has just eaten. Come back in a little while.",!1)
return}u.n(0,t,v.CW.gf2()/1000)
u=v.ghI()
if(u==null)w=null
else{++u.r
w="You fed the "+r.toLowerCase()+". +1 point."
u.PZ(w)}if(w==null)w="You fed the "+r.toLowerCase()+"."
A.fJ(880,90,0.25,"tri")
v.m(new A.ed7())
v.iL(w)},
bUf(d){var w=this,v=w.aC
if(v==null)return
w.bG=d
v.CW=d.a
v.ay=22
v.ch=2.4
v.f=d.c
v.r=d.d
v.w=Math.atan2(Math.cos(d.e*3.141592653589793/2),-Math.sin(d.e*3.141592653589793/2))
v.at=null
v.GL(0)
w.m(w.gj0())
w.iL("You are driving the "+B.hF.h(0,d.b).a.toLowerCase()+". Slide the stick to drive. Press Get out to stop.")
A.fJ(300,120,0.25,"tri")},
bUr(){var w,v,u,t,s,r,q=this,p=q.bG,o=q.aC
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
o.GL(0)
for(w=[46,62,80],u=0;u<3;++u){t=w[u]
s=o.f+Math.sin(v)*t
r=o.r+Math.cos(v)*t
if(!o.KX(s,r)){o.f=s
o.r=r
break}}o.aK8()
q.m(q.gj0())
q.iL("You got out.")},
bPq(){var w=this.bG,v=this.aC
if(w==null||v==null)return null
return new C.dY([w.b,v.f,v.r,v.w,w.f])},
yk(d){return this.cpp(d)},
cpp(d){var w=0,v=C.j(x.H),u=1,t=[],s=[],r=this,q,p
var $async$yk=C.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:++r.ex
q=r.eu?r.ab:0
u=2
p=r.c
p.toString
w=5
return C.b(C.a5(p,!1).cc(C.ej(new A.eeG(q,d),!1,null,x.H)),$async$yk)
case 5:s.push(4)
w=3
break
case 2:s=[1]
case 3:u=1;--r.ex
w=s.pop()
break
case 4:return C.h(null,v)
case 1:return C.f(t.at(-1),v)}})
return C.i($async$yk,v)},
Zi(){var w=0,v=C.j(x.H),u=1,t=[],s,r,q
var $async$Zi=C.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
w=6
return C.b(C.az(),$async$Zi)
case 6:s=e
w=C.ev(J.r(s.a,"ngmy_city_locked_until"))!=null?7:8
break
case 7:w=9
return C.b(J.hv(s,"ngmy_city_locked_until"),$async$Zi)
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
return C.i($async$Zi,v)},
aCl(d){var w=this,v=++w.ke
if(v>=3){w.ke=0
w.Bb()
w.b1p()}else if(v===2){w.ej(d+". That is two in a row.",!1)
w.b1p()}else w.ej(d+". Answer the phone and finish the job, or you lose your place.",!1)},
b1p(){A.fJ(1046,160,0.3,"sine")
this.m(new A.edO(this))},
gaXI(){return this.ex>0||this.fF!=null||Date.now()<0||this.p4},
aOP(){var w,v,u=B.dtn[this.jk.ap(6)]
if(u.length!==0){w=this.d
w===$&&C.c()
w=w.d
w===$&&C.c()
w=w.length>9}else w=!1
if(w){w=this.d
w===$&&C.c()
w=w.d
w===$&&C.c()
v=w[u==="range"?9:5]
v.ay=!0
v.CW=null}return u},
c9a(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this,a2=a1.d
a2===$&&C.c()
a2=a2.d
a2===$&&C.c()
w=D.d.fG(a2,new A.edL())
v=a1.ghI()
a2=x._
u=C.a([],a2)
for(t=w.x,s=t.length,r=w.k4,q=0;q<t.length;t.length===s||(0,C.K)(t),++q){p=t[q]
o=p.b
if(o==="house2"||o==="bighouse"){o=p.a
o=!r.q(0,o)&&o!==a1.jj}else o=!1
if(o)u.push(p)}s=C.a([],a2)
for(o=t.length,n=w.k3,q=0;q<t.length;t.length===o||(0,C.K)(t),++q){p=t[q]
m=p.b
if((m==="pole"||m==="lamppost")&&!n.q(0,p.a))s.push(p)}l=new C.Y(t,new A.edM(),C.T(t).k("Y<1>"))
k=C.a([0,1,2,3],x.t)
o=a1.jk
D.d.e_(k,o)
a2=C.a([],a2)
for(m=t.length,j=w.cy,q=0;q<t.length;t.length===m||(0,C.K)(t),++q){p=t[q]
i=p.b
if((i==="tower"||i==="hq")&&!j.aj(0,p.a))a2.push(p)}for(t=k.length,m=v!=null,q=0;q<k.length;k.length===t||(0,C.K)(k),++q){h=k[q]
if(h===0&&u.length!==0&&r.a<4){p=u[o.ap(u.length)]
a2=p.a
r.M(0,a2)
a1.jj=a2
a2=p.b==="bighouse"?"the big house":"the house"
return new A.Qy(p,a2,"power","",a1.aOP(),0)}if(h===1&&m&&!l.gan(0)){i=v.gCc()
g=C.T(i).k("Y<1>")
f=C.C(new C.Y(i,new A.edN(),g),g.k("M.E"))
i=f.length
if(i!==0){e=f[o.ap(i)]
e.e=!0
e.c=Math.min(e.c,70)
d=l.gaf(0)
if(!d.C())C.ba(C.fs())
return new A.Qy(d.gS(0),"the hospital","sick",e.a.b,"",0)}}if(h===3&&a2.length!==0&&j.a<3){p=a2[o.ap(a2.length)]
a0=2+o.ap(A.hCs(p)-1)
j.n(0,p.a,a0)
return new A.Qy(p,p.b==="hq"?"the NGMY company building":"the office tower","office","","",a0)}if(h===2&&s.length!==0&&n.a<4){p=s[o.ap(s.length)]
n.M(0,p.a)
return new A.Qy(p,"the street","light","","",0)}}return null},
aXS(d){var w,v,u,t=this.d
t===$&&C.c()
t=t.d
t===$&&C.c()
w=D.d.fG(t,new A.edx())
switch(d.c){case"power":return!w.k4.q(0,d.a.a)
case"light":return!w.k3.q(0,d.a.a)
case"office":return!w.cy.aj(0,d.a.a)
default:v=this.ghI()
if(v==null)return!1
t=v.c
t===$&&C.c()
u=new C.Y(t,new A.edy(d),C.T(t).k("Y<1>"))
if(!u.gaf(0).C())return!0
return u.gI(0).r>=0||!u.gI(0).e||!u.gI(0).f}},
Sz(d){var w,v,u,t=this,s=t.aC
if(s!=null){w=t.d
w===$&&C.c()
v=w.d
v===$&&C.c()
w=v[w.e].c!=="outside"}else w=!0
if(w)return
if(t.aL!=null)t.aYa()
s.at=null
s.GL(0)
u=t.bT9(d,s)
s.f=u.a
s.r=u.b
s.aK8()
w=t.e
w===$&&C.c()
w.D0(new A.q(s.f,30,s.r))
if(!t.aM)t.Sf()},
bT9(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=d.b,i=B.hF.h(0,j)
i.toString
w=B.a9l.q(0,j)
v=w?i.d/2+32:34
u=A.vM(new A.q(0,0,1),d.e*3.141592653589793/2)
j=u.c
i=u.a
t=-i
s=C.a([],x.f)
if(w)for(r=0;r<5;++r)for(q=v+B.deJ[r],p=i*q,q=j*q,o=0;o<5;++o){n=B.d3P[o]
s.push(new C.z(d.c+p+j*n,d.d+q+t*n))}else for(m=0;m<12;++m){l=m*3.141592653589793/6
s.push(new C.z(d.c+Math.cos(l)*v,d.d+Math.sin(l)*v))}for(j=s.length,r=0;r<s.length;s.length===j||(0,C.K)(s),++r){k=s[r]
if(!e.KX(k.a,k.b))return k}return D.d.gI(s)},
cAh(d){var w,v,u=this
u.fF=d
u.hE=0
u.Sz(d.a)
w=d.c
A:{if("sick"===w){v="New job: "+d.d+" is sick. Go into the hospital and onto the desk."
break A}if("light"===w){v="New job: a street light is out. Tap the dark light to fix it."
break A}v="New job: a house has no power. Walk in and fix it at the panel."
break A}u.ej(v,!0)
u.m(new A.ef5())},
bV1(d){var w,v=this,u=v.d
u===$&&C.c()
w=u.d
w===$&&C.c()
if(w[u.e].c!=="outside")return
v.Sz(d)
u=d.b
if(u==="house2"||u==="bighouse")v.Y6(d)
else if(u==="tower"||u==="hq"){v.Y6(d)
v.m(new A.edr(v))}else v.ej(y.Y,!0)},
cET(){var w,v,u,t=$.aS6(),s=C.a([],x.f),r=this.gpq()
r=r==null?null:r.amM(this.CW.gf2()/1000)
if(r==null)r=B.It
w=r.length
v=0
for(;v<r.length;r.length===w||(0,C.K)(r),++v){u=r[v]
s.push(new C.z(u.b,u.c))}t.d=s
return A.ip3(this.CW.gf2()/1000)},
cts(d){var w,v,u,t,s,r=this,q=Date.now()
if(q-r.tf<1e4)return
r.tf=q
w=r.aC
if(w==null)return
A.fJ(110,600,0.5,"noise")
C.fP()
r.be=r.b4=0
w.at=null
v=r.c5
v.a=Math.min(v.a,0.2)
v.c=v.d=0
u=B.ks[d].a==="bus"?"bus":"police car"
v=r.d
v===$&&C.c()
t=v.d
t===$&&C.c()
v=t[v.e].x
t=C.T(v).k("Y<1>")
s=C.C(new C.Y(v,new A.eeU(),t),t.k("M.E"))
if(s.length===0){r.ej("A "+u+" ran you over! Always cross at the zebra crossing when the green walking person shows.",!1)
return}v=r.gpq()
if(v!=null)v.cYd(D.d.gI(s))
r.Sz(D.d.gI(s))
r.Y6(D.d.gI(s))
r.ej("\ud83d\ude91 A "+u+" ran you over! An ambulance brought you to the hospital. Medicine and food are being ordered for you: they are on the Orders board. Cross at the zebra crossing when the green walking person shows.",!1)
r.m(new A.eeV(r))},
ajj(){var w=0,v=C.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g
var $async$ajj=C.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:h=r.d
h===$&&C.c()
if(h.a.length!==0){w=1
break}q=null
p=$.a4w
w=p==null||p.a!==h.b?3:4
break
case 3:t=6
w=9
return C.b(A.aUv(),$async$ajj)
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
break}n=$.a4w
if(n!=null&&n.a===r.d.b)m=n
else{if(q!=null){h=C.aK(J.r(q,"seed"))
h=h==null?null:D.k.N(h)
if(h==null)h=-1
h=h===r.d.b}else h=!1
if(h)m=A.h3v(q)
else if(q!=null&&r.el){h=C.aK(J.r(q,"seed"))
l=h==null?null:D.k.N(h)
h=A.aWY(l==null?r.d.b:l)
r.d=$.Em=h
A.hhp(h,q)
m=A.h3v(q)}else{h=r.d.b
m=A.h3u(h,h)
m.NM(r.d)}}$.a4w=m
A.aUw().bJ(new A.ef6(r),x.P)
for(h=m.d,k=h.length,j=r.bK,i=0;i<h.length;h.length===k||(0,C.K)(h),++i)j.M(0,h[i].a)
r.m(new A.ef7(r))
r.by=C.df(D.fB,new A.ef8(r))
if(r.a.f==="city")r.ai5()
case 1:return C.h(u,v)
case 2:return C.f(s.at(-1),v)}})
return C.i($async$ajj,v)},
c99(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=i.ghI()
if(h==null||i.c==null)return
if(i.cx==null){w=i.d
w===$&&C.c()
h.aE_(0,1,w)}if(++i.bX%8===0){w=i.d
w===$&&C.c()
h.D1(0,w)}if(i.aL!=null&&i.gakB())i.at6()
w=!1
if(!i.aM)if(i.ex===0){v=i.d
v===$&&C.c()
u=v.d
u===$&&C.c()
if(u[v.e].c==="outside"){w=i.c5
w=w.c>0||w.d>0}}if(w){t=i.c5.a7c(1)
if(t!=null)i.ej(t,!1)
i.b93()}if(i.aM){w=i.d
w===$&&C.c()
v=w.d
v===$&&C.c()
w=v[w.e].c==="outside"&&!i.c5.f&&i.jk.ap(240)===0}else w=!1
if(w){w=i.c5
w.f=!0
w.aW()
i.ej("You feel unwell: a headache. You tire faster until you take pills from a shop.",!1)}if(Date.now()<0||i.ex>0)return
w=!1
if(D.o.F(i.bX,45)===20){v=i.d
v===$&&C.c()
if(v.a.length===0){w=v.d
w===$&&C.c()
v=w[v.e].c==="outside"
w=v}}if(w)i.c6z()
w=i.d
w===$&&C.c()
if(w.a.length===0){v=w.d
v===$&&C.c()
v=v[w.e].c==="outside"}else v=!1
if(v){w=i.gpq()
s=w==null?null:w.FN(0,i.CW.gf2()/1000)
if(s!=null)i.ej("\ud83c\udfc1 "+s,!0)
r=i.aC
if(r!=null){w=i.gpq()
w=(w==null?null:w.x)!=null&&i.aL==null}else w=!1
if(w){w=i.gpq()
w.toString
i.aSF(w.blc(r.f,r.r,i.CW.gf2()/1000))}q=i.fF
if(q!=null){++i.hE
if(i.aXS(q)){i.ke=0
i.qZ=Date.now()
i.hS=0
i.fF=null
i.hE=0
if(q.c==="sick"){p=10+i.jk.ap(26)
w=i.ghI()
if(w!=null)w.r+=p
i.ej("The sick person is at the hospital. +"+p+" stars. Well done.",!0)}if(i.c!=null)i.m(i.gj0())}else if(i.hE>=240){i.fF=null
i.hE=0
i.aCl("The job was not finished in time")}}else{w=i.iS
if(w.length!==0&&i.aL==null&&i.bD==null&&i.bE==null&&Date.now()-i.qZ>1e4){o=D.d.cz(w,0)
if(!i.aXS(o))i.cAh(o)}else if(i.bD==null&&i.bE==null&&++i.hS>=45)i.cwk()}}else{v=w.d
v===$&&C.c()
if(v[w.e].c!=="outside")i.hS=0}for(w=h.d,v=w.length,u=i.bK,n=0;n<w.length;w.length===v||(0,C.K)(w),++n){m=w[n]
l=i.d
k=l.d
k===$&&C.c()
if(k[l.e].c!=="outside")continue
if((i.ex>0||i.fF!=null||Date.now()<0||i.p4)&&!u.q(0,m.a))continue
if(u.M(0,m.a)){i.hS=0
i.bD=m
i.bE=null
i.b8d()}}u.pt(new A.edE(h),!0)
j=i.bD
if(j!=null&&!D.d.b_(w,new A.edF(j)))i.Bb()},
cwk(){var w,v,u=this
u.hS=0
w=u.c9a()
if(w==null)return
if(u.gaXI()){v=u.iS
if(v.length<3)v.push(w)
return}u.b5r(w)},
b5r(d){var w=this
w.hS=0
w.bD=null
w.bE=d
w.b8d()},
b8d(){var w,v=this
v.T=0
w=v.P
if(w!=null)w.a2(0)
v.P=C.df(D.rD,new A.ef9(v))
v.m(new A.efa())},
Bb(){var w=this,v=w.P
if(v!=null)v.a2(0)
w.P=null
if(w.c==null)return
w.m(new A.efh(w))},
c9c(){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null
if(l.ok!=null)return k
if(l.aM){w=l.d
w===$&&C.c()
v=w.d
v===$&&C.c()
u=v[w.e].c==="outside"}else u=!1
t=l.bD
s=l.bE
if(!u&&t==null&&s==null)return k
r=l.eA
w=new A.ee2()
v=new A.eeb(r)
q=x.p
p=C.a([],q)
if(s!=null){o=C.hb(D.ay,k,C.d(s.gbfs(),k,k,k,k,k,k,D.n4,k,k,k),k,28)
n=s.gaEw()
p.push(v.$7$about$avatar$glow$onAnswer$onDecline$onLater$who(s.gbrP(),o,D.bs,new A.ee4(l,s),new A.ee5(l),new A.ee6(l,s),n))}if(t!=null){o=B.D_[t.b]
n=o.b
p.push(v.$6$about$avatar$glow$onAnswer$onDecline$who("NGMY City \xb7 mobile",C.hb(o.e.c,k,C.d(n[0],k,k,k,k,k,k,D.Km,k,k,k),k,28),D.ba,new A.ee7(l,t),l.gcAP(),n))}if(u){v=C.a([],q)
o=l.cL
if(o!=null)v.push(w.$3$col("\u270b "+o.b,o.a,D.bs))
o=C.a([],q)
if(l.bG==null){n=l.bj
m=n?"\ud83c\udfc3 Run: on":"\ud83c\udfc3 Run"
o.push(w.$3$on(m,new A.ee8(l),n))}if(l.bG==null)o.push(w.$3$col("\u2b06 Jump",new A.ee9(l),D.cp))
v.push(C.B(o,D.m,k,D.e,D.P,0,k,k))
w=l.bG==null
o=w?206:140
v.push(new C.D(D.a0i,new C.a4(o,k,new A.UL(l.c5,!w,12,k),k),k))
p.push(new C.D(B.bDF,C.B(C.a([new A.aJl(new A.eea(l),k),C.x(v,D.dI,k,D.e,D.P,0,D.p)],q),D.dI,k,D.iP,D.i,0,k,k),k))}return new C.a4(r,k,C.x(p,D.m,k,D.e,D.P,0,D.p),k)},
aUx(){var w=this.d
w===$&&C.c()
if(w.a.length!==0)this.Eu()
else this.a0H()},
Eu(){var w=0,v=C.j(x.H),u,t=this,s,r,q,p
var $async$Eu=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:p=t.d
p===$&&C.c()
s=p.d
s===$&&C.c()
r=s[p.e]
if(r.gzd()){t.iL("This lesson is done. Try everything: it all works.")
w=1
break}p=r.p4
w=p==="ptrap"||p==="faucet"?3:5
break
case 3:if(r.RG==null)r.RG=A.h7b()
w=6
return C.b(t.yk(new A.edP(r)),$async$Eu)
case 6:w=4
break
case 5:if(r.R8==null)r.R8=new A.CJ(C.U(x.S,x.N))
w=7
return C.b(t.yk(new A.edQ(r)),$async$Eu)
case 7:case 4:if(t.c==null){w=1
break}t.m(t.gj0())
if(r.gzd()){p=t.ghI()
if(p!=null)p.r+=10
q=r.p4
A:{p="Done! Tap the outlet and plug something in."
if("switch"===q){p="Done! Tap the switch on the wall: the light comes on."
break A}if("fan"===q){p="Done! Tap the wall switch and the fan spins."
break A}if("outlet"===q||"gfci"===q)break A
s=D.d.q(B.jI,q)
if(s){p="Done! Tap the switch on the wall: it works."
break A}s=D.d.q(B.lk,r.p4)
if(s)break A
p="Done! The sink works."
break A}t.iL(p)}case 1:return C.h(u,v)}})
return C.i($async$Eu,v)},
akA(d){return this.cHV(d)},
cHV(d){var w=0,v=C.j(x.H),u,t=this,s,r,q,p
var $async$akA=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:p=t.d
p===$&&C.c()
s=p.d
s===$&&C.c()
r=s[p.e].id[d]
q=r.gwL()
w=3
return C.b(t.yk(new A.eg3(r)),$async$akA)
case 3:if(t.c==null){w=1
break}t.m(t.gj0())
if(r.gwL()&&!q){p=t.ghI()
if(p!=null)p.r+=8}if(r.gwL()){p=q?"":"You are paid 8 stars. "
s=r.a==="switch"?"Tap it to turn the light on and off.":"Tap it to plug something in."
t.iL("Wired! "+p+s)}case 1:return C.h(u,v)}})
return C.i($async$akA,v)},
a0H(){var w=0,v=C.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$a0H=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:m=t.d
m===$&&C.c()
s=m.d
s===$&&C.c()
r=s[m.e]
s=r.c
if(s==="outside"){w=1
break}q=r.CW
if(q==null){q=A.ipW(r)
s=s==="hall"?"Hall laundry corner":r.b
p=A.cuk(q,s,!1,m.b*37+r.a,!1)
p.amy()
if(!r.ay)p.cL2()
r.CW=p
m=p}else m=q
m.b=t.d.c
o=r.gkS()
w=3
return C.b(t.yk(new A.edS(r)),$async$a0H)
case 3:if(t.c==null){w=1
break}t.m(t.gj0())
if(r.gkS()&&!o){n=10+t.jk.ap(26)
m=t.ghI()
if(m!=null)m.r+=n
m=r.gjU()?"":" The room still needs its plumbing, so it stays red until the pipes are done too."
t.ej(r.b+": the wiring is finished and the light has power. You are paid "+n+" stars!"+m,!0)}else if(r.gkS()){m=r.gjU()?"":" The room still needs its plumbing."
t.iL(r.b+": the wiring is finished. The light has power."+m)}case 1:return C.h(u,v)}})
return C.i($async$a0H,v)},
a0y(){var w=0,v=C.j(x.H),u,t=this,s,r,q,p,o,n
var $async$a0y=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:n=t.d
n===$&&C.c()
s=n.d
s===$&&C.c()
r=s[n.e]
s=r.c
if(!(s==="bathroom"||s==="kitchen")){t.ej("This room has no plumbing. Bathrooms and the kitchen do.",!1)
w=1
break}q=r.fr
if(q==null){s=s==="kitchen"?"kitchen":"bathroom"
s=r.fr=A.h7a(!1,n.b*41+r.a,s)
n=s}else n=q
if(!r.ch&&!n.ga3Y())r.fr.cL1()
r.fr.b=t.d.c
p=r.gjU()
w=3
return C.b(t.yk(new A.edR(r)),$async$a0y)
case 3:if(t.c==null){w=1
break}t.m(t.gj0())
if(r.gjU()&&!p){o=10+t.jk.ap(26)
n=t.ghI()
if(n!=null)n.r+=o
t.ej(r.b+": the plumbing is finished and nothing leaks. You are paid "+o+" stars!",!0)}else if(r.gjU())t.iL(r.b+": the plumbing is finished and nothing leaks.")
case 1:return C.h(u,v)}})
return C.i($async$a0y,v)},
bCu(){var w=this.c
w.toString
return C.bV(E.mE,null,new A.ebu(this),w,!0,!0,!1,D.k7,!1,!1,x.H)},
bC8(d){var w,v,u,t,s,r,q,p,o=this,n=o.d
n===$&&C.c()
w=n.d
w===$&&C.c()
v=w[n.e]
n=v.c
if(n==="outside"||n==="hall"){o.ej("Add devices in a room, not in the hall or in NGMY City.",!1)
return}n=v.id
if(n.length>=4){o.ej("This room already has four added devices.",!1)
return}w=C.a([-v.geb(0)/4,v.geb(0)/4],x.n)
for(u=v.w,t=D.d.gaf(u),s=new C.eR(t,new A.ebo());s.C();)w.push(t.gS(0).c)
for(u=D.d.gaf(u),t=new C.eR(u,new A.ebp());t.C();)w.push(u.gS(0).c+24)
for(u=n.length,r=0;r<n.length;n.length===u||(0,C.K)(n),++r)w.push(n[r].b)
p=-v.geb(0)/2+14
for(;;){if(!(p<=v.geb(0)/2-14)){q=null
break}if(D.d.cJ(w,new A.ebq(p))){q=p
break}p+=6}if(q==null){o.ej("There is no free place left on the back wall.",!1)
return}o.m(new A.ebr(o,v,d,q))
o.iL("Added. It is red because it is not wired: tap it to wire it.")},
aeJ(d,e){var w,v,u=this,t=u.d
t===$&&C.c()
w=t.d
w===$&&C.c()
v=w[t.e].C_(u.Q)
if(v==null)return
u.m(new A.edI(u,v,D.d.q(B.Sj,v.b),d,e))},
c9i(){var w,v,u=this,t=u.d
t===$&&C.c()
w=t.d
w===$&&C.c()
v=w[t.e].C_(u.Q)
if(v==null)return
u.m(new A.efD(u,v))},
cqy(){var w,v,u=this,t=u.d
t===$&&C.c()
w=t.d
w===$&&C.c()
v=w[t.e].C_(u.Q)
if(v==null)return
u.m(new A.eeH(u,v))
u.iL(B.hF.h(0,v.b).a+": "+B.cYY[v.f]+".")},
c9g(d){var w,v,u=this,t=u.d
t===$&&C.c()
w=t.d
w===$&&C.c()
v=w[t.e].C_(u.Q)
if(v==null)return
u.m(new A.eeK(u,v))},
bCb(d){var w,v=this,u=v.d
u===$&&C.c()
w=u.d
w===$&&C.c()
v.m(new A.ebs(v,w[u.e].M(0,d)))
v.iL(B.hF.h(0,d).a+" added. Move it with the arrows.")},
AF(d,e,f,g,h){var w=null,v=e?g.j(0.25):D.c.j(0.07),u=C.n(14),t=e?g:D.aX
t=C.L(t,D.r,e?2:1)
v=C.a([C.p(w,C.d(d,w,w,w,w,w,w,C.l(w,w,e?g:D.c,w,w,w,w,w,w,w,w,11,w,w,D.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),D.f,w,w,new C.o(v,w,t,u,w,w,D.n),w,w,w,w,D.eJ,w,w,w)],x.p)
if(h)v.push(C.ap(w,C.p(w,w,D.f,w,w,new C.o(D.aw,w,C.L(B.FT,D.r,2),w,w,w,D.a6),w,11,w,w,w,w,w,11),w,w,w,-2,-3,w))
return new C.D(D.fv,C.aA(w,new C.an(D.a_,w,D.ab,D.f,v,w),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,!1,D.a3),w)},
ir(d,e,f,g){return this.AF(d,e,f,g,!1)},
Je(d,e,f){return this.AF(d,e,f,D.ay,!1)},
aCs(d,e,f,g){var w=null,v=g==null,u=v?34:w,t=v?w:D.km,s=C.n(10),r=e?D.c:D.aX
r=C.L(r,D.r,e?3:1)
if(v)v=w
else v=C.at(C.d(g,w,w,w,w,w,w,C.l(w,w,d.iQ()>0.5?D.w:D.c,w,w,w,w,w,w,w,w,12,w,w,D.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,w,w)
return new C.D(G.oh,C.aA(w,C.p(w,v,D.f,w,w,new C.o(d,w,r,s,w,w,D.n),w,34,w,w,t,w,w,u),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,!1,D.a3),w)},
cBI(d,e,f){return this.aCs(d,e,f,null)},
Dv(d,e){var w=null,v=D.c.j(0.1),u=C.n(10),t=C.L(D.aX,D.r,1)
return new C.D(D.fv,C.aA(w,C.p(w,C.X(d,D.c,w,w,w,20),D.f,w,w,new C.o(v,w,t,u,w,w,D.n),w,36,w,w,w,w,w,40),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,e,w,w,w,w,w,w,!1,D.a3),w)},
bKC(){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null
if(k.cx!=null){w=k.dy
return C.B(C.a([C.E(C.d("\ud83c\udfac "+(w.length===0?"Walking in":w),j,1,D.a1,j,j,j,B.fre,j,j,j),1),k.ir("\u23f9 Stop the tour",!0,k.gcAS(),D.c0)],x.p),D.m,j,D.e,D.i,0,j,j)}switch(k.r){case"furniture":w=k.d
w===$&&C.c()
v=w.d
v===$&&C.c()
u=v[w.e].C_(k.Q)
w=x.p
v=C.a([],w)
if(u!=null){t=C.a([k.Dv(D.ko,new A.ecE(k)),k.Dv(D.jD,new A.ecF(k)),k.Dv(D.rK,new A.ecG(k)),k.Dv(D.qu,new A.ecH(k)),k.Dv(H.aqa,k.gc9h()),k.Dv(D.md,k.gcqx())],w)
s=k.d
r=s.d
r===$&&C.c()
if(r[s.e].c==="outside")t.push(k.Dv(D.Pl,k.gcvZ()))
t.push(k.Dv(D.eb,k.gc9f(k)))
v.push(new C.a4(j,30,C.cl(t,j,j,j,j,j,D.aL,!1),j))}else v.push(B.b0Z)
w=C.a([],w)
for(t=B.hF.gdR(B.hF),t=t.gaf(t);t.C();){s=t.gS(t)
r=D.d.q(B.dle,s.a)
q=k.d
p=q.d
p===$&&C.c()
if(r===(p[q.e].c==="outside")){r=s.b
w.push(k.ir(r.b+" "+r.a,!1,new A.ecI(k,s),D.b_))}}v.push(new C.a4(j,30,C.cl(w,j,j,j,j,j,D.aL,!1),j))
return C.x(v,D.m,j,D.e,D.P,0,D.p)
case"walls":w=k.as
v=w<0
w=v?"All walls":"Wall "+(w+1)+": tap Look to reset"
v=C.a([k.Je(w,v,new A.ecJ(k))],x.p)
for(o=0;o<8;++o)v.push(k.aCs(B.aAH[o],!1,new A.ecK(k,o),B.dvU[o]))
return new C.a4(j,30,C.cl(v,j,j,j,j,j,D.aL,!1),j)
case"floor":w=C.a([],x.p)
for(o=0;o<7;++o){v=B.aAp[o]
t=k.d
t===$&&C.c()
s=t.d
s===$&&C.c()
w.push(k.aCs(v.b,s[t.e].Q===o,new A.ecL(k,o),v.a))}return new C.a4(j,30,C.cl(w,j,j,j,j,j,D.aL,!1),j)
case"ceiling":w=k.d
w===$&&C.c()
v=w.d
v===$&&C.c()
w=v[w.e].go==="fan"?"\ud83c\udf00 Fan (tap for light)":"\ud83d\udca1 Light (tap for fan)"
w=C.a([k.ir(w,!1,new A.ecM(k),D.b8)],x.p)
for(o=0;o<4;++o){v=B.aza[o]
t=k.d
s=t.d
s===$&&C.c()
w.push(k.cBI(v,s[t.e].as===o,new A.ecN(k,o)))}return new C.a4(j,30,C.cl(w,j,j,j,j,j,D.aL,!1),j)
default:n=C.aV(x.S)
w=C.a([k.ir("\u26f6 Full screen",!1,k.gbQL(),D.aJ)],x.p)
v=k.d
v===$&&C.c()
t=v.d
t===$&&C.c()
if(t[v.e].c==="outside")w.push(k.ir("\ud83d\udcf1 Phone",!1,k.gbQN(),D.c_))
v=k.d
t=v.d
t===$&&C.c()
v=t[v.e].w
t=v.length
m=0
for(;m<v.length;v.length===t||(0,C.K)(v),++m){l=v[m]
s=l.d
if(n.M(0,s)){r=k.d.d
r===$&&C.c()
s=r[s]
r=s.gkS()&&s.gjU()
w.push(k.AF("\ud83d\udeaa "+s.b,!1,new A.ecO(k,l),D.b_,!r))}}return new C.a4(j,30,C.cl(w,j,j,j,j,j,D.aL,!1),j)}},
B(d){var w,v=this,u=null
if(Date.now()<0){w=C.dA(0,0,0,0-Date.now(),0,0).a
return C.c6(u,F.nk,C.bn(!0,C.at(new C.D(D.qp,C.x(C.a([B.fRc,D.ae,B.fRj,D.W,B.fRw,D.aB,C.d("It opens again in "+D.o.ao(w,36e8)+"h "+D.o.F(D.o.ao(w,6e7),60)+"m",u,u,u,u,u,u,B.ft9,u,u,u),D.dT,C.bI(D.aVJ,u,new A.eg6(d),u)],x.p),D.m,u,D.e,D.P,0,D.p),u),u,u,u),!0,!1,D.af,!0,!0),u,!1,!1,u,u)}w=C.a([C.bT(0,new C.er(v.bGA(d),v.a_),0,0,0)],x.p)
if(v.aB!=null)w.push(C.bT(0,C.e_(C.ly(new A.eg7(v),u,D.dw,D.hz,new C.bQ(v.aH,x.ac),new A.eg8(v),new C.bq(1,0,x.e7),x.i),!0,u),0,0,0))
return new C.an(D.a_,u,D.ab,D.t,w,u)},
bIS(){var w,v,u=this,t=null,s=C.a([],x.p)
if(u.gakB())s.push(u.ir("\u2705 Complete work",!0,u.gaRo(),D.bf))
w=u.aM
v=w?"\u23f9 Stop walking":"\ud83d\udeb6 Walk the city"
s.push(u.ir(v,w,w?u.gb8w():u.gb8h(),D.ba))
s.push(u.ir("\ud83c\udfd7 Build",!1,u.gaOb(),D.ba))
w=u.ghI()
w=w==null?t:w.d.length
if(w==null)w=0
s.push(u.AF("\ud83d\udcde Calls",!1,new A.ecg(u),D.c_,w>0))
s.push(u.ir("\ud83c\udfe5 Hospital",!1,new A.ech(u),D.c0))
s.push(u.ir("\ud83d\uded2 Shop",!1,new A.eci(u),D.cG))
s.push(u.ir("\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc67 People",!1,new A.ecm(u),D.cp))
s.push(u.ir("\ud83c\udfe0 Go inside",!1,new A.ecn(u),D.ba))
w=u.aL
if((w==null?t:w.a==="shop")===!0)s.push(u.ir("\ud83d\uded2 Buy things",u.k2,new A.eco(u),D.bs))
w=u.aL
if((w==null?t:w.a==="tower")===!0)s.push(u.ir("\ud83c\udfe2 Level "+w.f+" of "+w.gMh(),!1,new A.ecp(u),D.cp))
if(u.fF!=null)s.push(u.ir("\ud83d\udccb My job"+(u.awE()==null?"":" \xb7 "+C.w(u.awE())+" m"),!1,new A.ecq(u),D.bs))
w=u.iS.length
if(w!==0)s.push(u.ir("\u23f3 Waiting: "+w,!1,new A.ecr(u),D.ay))
s.push(u.AF("\ud83d\udef5 Orders",u.gpq().x!=null,new A.ecs(u),D.bs,u.gpq().x==null))
w=u.p4
v=w?"\u23f9 Stop drone":"\ud83d\ude81 Drone"
s.push(u.ir(v,w,new A.ect(u),D.aJ))
w=u.jQ
v=w?"\ud83c\udff7 Show tags":"\ud83c\udff7 Hide tags"
s.push(u.ir(v,w,new A.ecj(u),D.c0))
s.push(u.ir("\ud83d\udc41 Hide all",!1,new A.eck(u),D.bL))
w=u.gKF()
s.push(u.ir("\ud83d\ude96 Uber",(w==null?t:w.f)!=null,u.gcFs(),D.bs))
s.push(u.ir("\ud83d\uddfa Map",u.y,new A.ecl(u),D.bq))
return s},
gcyY(){var w,v,u,t,s,r,q,p,o=this
if(!o.jQ){w=o.f
w===$&&C.c()
return w}w=o.oN
v=o.f
v===$&&C.c()
if(w===v&&o.tg!=null){w=o.tg
w.toString
return w}o.oN=v
w=C.a([],x.E)
for(u=o.f.c,t=u.length,s=0;s<u.length;u.length===t||(0,C.K)(u),++s){r=u[s]
q=!1
if(r.d===0)if(!r.c.A(0,D.bB)){p=r.b
if(!C.cV(p,"rooms still need work",0))q=!C.cV(p,"house is finished",0)}if(q)w.push(r)}u=o.f
return o.tg=new A.qW(v.a,v.b,w,u.d,u.e,!1,0)},
bGA(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d=f.d
d===$&&C.c()
w=d.d
w===$&&C.c()
v=w[d.e]
d=x.w
w=C.aG(a0,e,d).w.a
u=f.eu?w.b:w.a
f.eA=u
w=f.d
t=w.d
t===$&&C.c()
t=t[w.e].c==="outside"&&f.aL==null
w=w.a.length!==0?e:new A.ebB(f)
s=f.gcyY()
r=f.e
r===$&&C.c()
q=f.at
p=f.ax
o=f.ay
n=f.ai
if(f.eu)d=62
else if(f.f4)d=C.aG(a0,e,d).w.r.b+66
else d=f.y&&f.d.a.length===0?104:10
m=f.c9c()
l=x.p
k=C.a([],l)
if(f.y&&f.d.a.length===0&&!f.eu)k.push(new A.bko(f.d,f.gc98(),Math.min(138,u*0.36),e))
j=A.K3(n,m,r,new A.ebC(f),new A.ebD(f),o,q,e,e,new A.ebO(),p,d,f.gbON(),new A.ebP(f),f.gc9d(),s,t,w,k,e)
i=f.y1!=null||f.y2||f.R8||f.k3||f.go||f.k2||f.id
d=f.ok
h=(d==null?e:d.d)===1
if((i||h)&&!f.ai){d=C.a([j],l)
if(i){if(f.id)w=f.c31()
else if(f.k2)w=f.cxp()
else if(f.go)w=f.ciA()
else if(f.k3)w=f.bQc()
else w=f.R8?f.bPr():f.bHO()
d.push(C.bT(0,w,0,0,0))}if(h)d.push(C.ap(e,C.e_(C.at(new C.jZ(f.p3,new A.ebQ(),e,e,x.cI),e,e,e),!0,e),e,e,0,0,74,e))
g=new C.an(D.a_,e,D.b3,D.t,d,e)}else g=j
if(f.ai)return f.bJ4(g)
if(f.eu)return f.bTc(g)
if(f.f4)return f.clY(g)
d=f.d
if(d.a.length!==0)d=v.gzd()?"Done \u2713":"To do"
else d=""+d.gcQG()+"/"+f.d.gr_().length+" done"
w=f.d
t=w.d
t===$&&C.c()
w=t[w.e].c==="outside"
t=!w?e:new A.UL(f.c5,f.bG!=null,12,e)
if(w)w=f.bIS()
else{w=f.x?"\ud83d\udd2d See the whole room":"\ud83c\udfe0 Be inside"
w=C.a([f.ir(w,!1,new A.ebR(f),D.b_)],l)
if(f.d.a.length===0){s=f.cx!=null
r=s?"\u23f9 Stop tour":"\ud83c\udfac Tour"
w.push(f.ir(r,s,new A.ebS(f),D.c_))}w.push(f.ir("\u2b06 Look up at the ceiling",!1,f.gc46(),D.b_))
s=f.z
r=s?"\ud83d\udeb6 Stop looking round":"\ud83d\udd04 Look all round (360)"
w.push(f.ir(r,s,new A.ebT(f),D.cG))
w.push(f.ir("\ud83d\udcfa TV",!1,f.gcFm(),D.cp))
s=f.d
if(s.a.length===0){r=s.d
r===$&&C.c()
s=r[s.e].c!=="outside"?"\ud83c\udf33 Go outside":"\ud83c\udfe0 Go inside"
w.push(f.ir(s,!1,new A.ebU(f),D.ba))}s=f.d
r=s.d
r===$&&C.c()
if(r[s.e].c==="outside"){s=f.aM
r=s?"\u23f9 Stop walking":"\ud83d\udeb6 Walk about"
w.push(f.ir(r,s,s?f.gb8w():f.gb8h(),D.ba))}if(f.d.a.length===0)w.push(f.ir("\u2795 Add",!1,f.gaOb(),D.ba))
if(f.d.a.length===0){s=f.ghI()
s=s==null?e:s.d.length
if(s==null)s=0
w.push(f.AF("\ud83c\udfd8 Community",!1,new A.ebV(f),D.c_,s>0))}w.push(f.ir("\ud83d\udd26 Tester",f.w,new A.ebE(f),D.cG))
if(f.d.a.length!==0)w.push(f.AF("\ud83d\udd27 Do the lesson",!1,f.gc9b(),D.bs,!v.gzd()))
else{s=f.AF("\u26a1 Wiring",!1,f.gcit(),D.bs,!v.gkS())
r=v.c
r=(r==="bathroom"||r==="kitchen")&&!v.gjU()
D.d.v(w,C.a([s,f.AF("\ud83d\udeb0 Plumbing",!1,f.gchT(),D.cp,r),f.ir("\ud83d\uddfa Map",f.y,new A.ebF(f),D.bq)],l))}}return A.Iv(D.ay,new A.ebG(f,a0),C.x(C.a([new C.a4(e,30,C.cl(w,e,e,e,e,e,D.aL,!1),e),D.av,new C.a4(e,30,C.cl(C.a([f.Je("\ud83d\udc41 Look",f.r==="look",new A.ebH(f)),f.Je("\ud83d\udecb Furniture",f.r==="furniture",new A.ebI(f)),f.Je("\ud83e\uddf1 Walls",f.r==="walls",new A.ebJ(f)),f.Je("\ud83d\udfeb Floor",f.r==="floor",new A.ebK(f)),f.Je("\u2b1c Ceiling",f.r==="ceiling",new A.ebL(f)),f.Je("\ud83d\udeaa Doors",f.r==="doors",new A.ebM(f)),f.ir("\ud83d\udcd8 Learn",!1,new A.ebN(a0),D.bq)],l),e,e,e,e,e,D.aL,!1),e),D.av,f.bKC()],l),D.E,e,D.e,D.P,0,D.p),g,d,v.b,t)},
coy(d){return C.bV(E.mE,null,new A.eeF(this),d,!0,!0,!0,D.k7,!1,!1,x.H)}}
A.bko.prototype={
B(d){var w=null,v=D.k.E((this.e-10)/126,0.5,1),u=D.w.j(0.6),t=C.n(12),s=C.L(D.aX,D.r,1)
return C.p(w,new C.a4(126*v,84*v,C.aA(w,C.eO(D.A,C.b4(w,w,w,new A.bjO(this.c,w),B.fai),D.f,D.vL),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new A.dx8(this,v),w,w,w,w,!1,D.a3),w),D.f,w,w,new C.o(u,w,s,t,w,w,D.n),w,w,w,w,D.mb,w,w,w)}}
A.bjO.prototype={
a4(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=this.b,e=f.d
e===$&&C.c()
w=e.length
v=d.a
u=0
for(;u<e.length;e.length===w||(0,C.K)(e),++u){t=e[u]
s=t.d*14+1
r=t.e*14+1
q=s+(t.f*14-2)
p=r+(t.r*14-2)
o=new C.a3(s,r,q,p)
n=t.a===f.e
if(t.gkS()&&t.gjU())m=D.bf
else m=!t.gkS()?D.aw:D.d3
l=C.br(o,D.hH)
$.S()
k=new C.ao(D.Q,D.M,D.S,D.T,D.R)
k.r=m.j(t.gkS()&&t.gjU()?0.35:0.5).gp(0)
j=k.G()
v.drawRRect(C.e7(l),j)
j.delete()
l=C.br(o,D.hH)
k=new C.ao(D.Q,D.M,D.S,D.T,D.R)
k.b=D.a9
k.c=n?2.2:0.8
k.r=(n?D.c:D.bU).gp(0)
j=k.G()
v.drawRRect(C.e7(l),j)
j.delete()
i=t.c
A:{if("bedroom"===i){l="\ud83d\udecf"
break A}if("bathroom"===i){l="\ud83d\udebf"
break A}if("kitchen"===i){l="\ud83c\udf73"
break A}if("living"===i){l="\ud83d\udecb"
break A}if("outside"===i){l="\ud83c\udf33"
break A}l=""
break A}h=new C.iH(new C.es(l,g,g,D.cL,g,g,g,g,g,g,B.fqr),D.a4,D.bX,new C.jg(1),g,g,g,g,D.bV,g)
h.eg()
l=h.b
k=l.c
l=l.a.c
h.a4(d,new C.u(s+(q-s)/2-k/2,r+(p-r)/2-l.gba(l)/2))}},
av(d){return!0}}
A.aJl.prototype={
R(){return new A.buu()},
biW(d,e){return this.c.$2(d,e)}}
A.buu.prototype={
b_J(d){var w,v,u={},t=u.a=d.aG(0,B.el0),s=t.gcC()>46?u.a=t.eV(0,t.gcC()).aJ(0,46):t,r=s.a/46,q=-s.b/46,p=Math.sqrt(r*r+q*q)
s=this.a
s.toString
w=p<0.15
v=w?0:r
s.biW(v,w?0:q)
this.m(new A.f9g(u,this))},
b_I(){this.a.biW(0,0)
this.m(new A.f9f(this))},
B(d){var w=this,v=null,u=C.p(v,v,D.f,v,v,new C.o(D.w.j(0.42),v,C.L(D.ba.j(0.9),D.r,2.4),v,v,v,D.a6),v,132,v,v,v,v,v,132),t=C.p(v,v,D.f,v,v,new C.o(v,v,C.L(D.ba.j(0.25),D.r,1.5),v,v,v,D.a6),v,66,v,v,v,v,v,66),s=w.d,r=s==null
if(r)s=D.I
return C.mJ(D.c6,new C.a4(132,132,new C.an(D.A,v,D.ab,D.t,C.a([u,t,C.dR(C.p(v,v,D.f,v,v,new C.o(D.ba.j(r?0.55:0.9),v,C.L(D.c,D.r,2),v,v,v,D.a6),v,56,v,v,v,v,v,56),s)],x.p),v),v),v,new A.f9h(w),new A.f9i(w),v,new A.f9j(w),v,v,new A.f9k(w))}}
A.f3L.prototype={}
A.MA.prototype={}
A.Qy.prototype={
gbfs(){var w,v,u=this.c
A:{if("sick"===u){w="\ud83e\udd12"
break A}if("light"===u){w="\ud83d\udca1"
break A}if("office"===u){w="\ud83c\udfe2"
break A}v=this.e
B:{if("dryer"===v){w="\ud83d\udc55"
break B}if("range"===v){w="\ud83c\udf73"
break B}if("washer"===v){w="\ud83e\uddfa"
break B}w="\u26a1"
break B}break A}return w},
gaEw(){var w,v=this.c
A:{if("sick"===v){w=this.d
if(w.length===0)w="A neighbour"
break A}if("light"===v){w="City lights office"
break A}if("office"===v){w="Office manager"
break A}w="Your neighbour"
break A}return w},
gbrP(){var w,v,u=this.c
A:{if("sick"===u){w="Needs a doctor"
break A}if("light"===u){w="A street light is out"
break A}if("office"===u){w="No power in an office"
break A}v=this.e
B:{if("dryer"===v){w="The dryer outlet at a house"
break B}if("range"===v){w="The stove outlet at a house"
break B}if("washer"===v){w="The washer outlet at a house"
break B}w="No power at a house"
break B}break A}return w},
gaHQ(d){var w,v=this,u="I will pay you between 10 and 35 stars. Thank you!",t=v.c
A:{if("sick"===t){w=C.a(["Hello! "+v.gaEw()+" is very sick and cannot get up.","Please take them to the hospital: walk into the hospital and onto the desk to admit them.",u],x.s)
break A}if("office"===t){w=""+v.f
w=C.a(["Hello, this is the office manager. The office on level "+w+" of "+v.b+" has lost its power and nobody can work.","Please take the elevator up to level "+w+", and fix the wiring at the breaker panel there.",u],x.s)
break A}if("light"===t){w=C.a(["Hello! A street light is out and the street is dark.","It is the dark one with the red sign. Could you fix its wiring?",u],x.s)
break A}w=v.e
if(w==="dryer"){w=C.a(["Hello! The dryer in "+v.b+" does not heat any more and the plug is hot to the touch.","It is on the 240 volt outlet in the hall, the laundry corner. Could you look at the dryer outlet and wire it again? Switch the power off before you touch anything, and check if it is the old 3-wire or the new 4-wire kind.",u],x.s)
break A}if(w==="range"){w=C.a(["Hello! The electric stove in "+v.b+" has stopped working and the outlet behind it smells burnt.","It is the 50 amp outlet in the kitchen. Could you wire the range outlet again? Switch the power off before you touch anything, and check if it is the old 3-wire or the new 4-wire kind.",u],x.s)
break A}if(w==="washer"){w=C.a(["Hello! The washing machine in "+v.b+" keeps tripping the breaker.","It is on its own 20 amp outlet in the laundry corner in the hall. Could you wire the washer outlet again? Switch the power off before you touch anything.",u],x.s)
break A}w=C.a(["Hello! All the lights went out in "+v.b+". The power is off in the whole house.","Could you check the breaker panel inside and fix the wiring? Switch the power off before you touch anything.",u],x.s)
break A}return w}}
A.aKj.prototype={
R(){return new A.bwF()}}
A.bwF.prototype={
B(d){var w,v,u=this,t=null,s=C.aG(d,t,x.w).w,r=D.w.j(0.55),q=C.L(D.bU,D.r,1),p=u.d,o=C.ap(0,C.at(C.aA(t,C.p(t,C.X(p?B.bQ8:B.bQ9,D.c,t,t,t,20),D.f,t,t,new C.o(r,t,q,t,t,t,D.a6),t,38,t,t,t,t,t,38),D.y,!1,B.hme,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new A.feZ(u),t,t,t,t,t,t,!1,D.a3),t,t,t),t,t,t,6,0,t)
if(p)return C.c6(t,D.w,new C.an(D.a_,t,D.ab,D.t,C.a([C.bT(0,u.a.d,0,0,0),o],x.p),t),t,!1,!1,t,t)
r=s.a
q=r.b
r=r.a
p=u.a
w=p.c
v=s.alR(D.af,new C.av(q,r),D.af)
return C.c6(t,D.w,C.at(new C.wy(w,C.q3(new C.a4(q,r,new C.an(D.a_,t,D.ab,D.t,C.a([C.bT(0,p.d,0,0,0),o],x.p),t),t),v),t),t,t,t),t,!1,!1,t,t)}}
A.bW3.prototype={}
A.m3.prototype={}
A.NV.prototype={
R(){return new A.blk()}}
A.blk.prototype={
py(d){var w=this.c
w.toString
return C.a5(w,!1).cc(C.ej(new A.dUS(d),!1,null,x.H))},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null
$.asY="tech"
w=C.aH(m,m,m,m,U.nA,m,m,m,new A.dUV(d),m,m,m,m,m,m)
v=D.ay.j(0.16)
u=C.n(13)
t=x.p
u=C.B(C.a([w,C.p(m,B.bbC,D.f,m,m,new C.o(v,m,C.L(D.ay.j(0.6),D.r,1),u,m,m,D.n),m,40,m,m,m,m,m,40),D.as,B.bH3],t),D.m,m,D.e,D.i,0,m,m)
v=C.n(26)
w=C.L(D.ay,D.r,1.8)
s=x.V
r=C.a([new C.ac(0,D.G,D.ay.j(0.28),D.ds,26)],s)
r=C.aA(m,C.p(m,C.x(C.a([C.p(m,B.bc3,D.f,m,m,new C.o(D.ay.j(0.2),m,C.L(D.ay,D.r,2),m,C.a([new C.ac(0,D.G,D.ay.j(0.5),D.I,22)],s),m,D.a6),m,78,m,m,m,m,m,78),D.ae,B.fKd,D.av,B.fTl,D.aB,C.p(m,B.fK9,D.f,m,m,new C.o(D.ay,m,m,C.n(20),m,m,D.n),m,m,m,m,W.am7,m,m,m)],t),D.m,m,D.e,D.i,0,D.p),D.f,m,m,new C.o(m,m,w,v,r,B.c5k,D.n),m,m,m,m,D.we,m,m,m),D.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new A.dUW(n),m,m,m,m,m,m,!1,D.a3)
v=D.w.j(0.6)
w=C.n(16)
w=C.a([r,C.ap(m,C.aA(m,C.p(m,B.fYP,D.f,m,m,new C.o(v,m,C.L(F.eY,D.r,1.4),w,m,m,D.n),m,m,m,m,B.bAl,m,m,m),D.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new A.dUX(n),m,m,m,m,m,m,!1,D.a3),m,m,m,10,10,m)],t)
v=n.c9o("JOBS")
r=n.b_K(C.a([n.AH("\ud83d\udd0c","Wire a room","Go to a room that needs wiring",D.bf,new A.dV_(n)),n.AH("\ud83d\udebd","Plumb a room","Go to a bathroom or kitchen",D.aJ,new A.dV0(n)),n.AH("\ud83d\udd27","Fix a house","Walk the house and fix every sign",D.ay,new A.dV1(n)),n.AH("\ud83e\uddf1","Build a room","Frame, drywall, then wire",D.ba,new A.dV2(n)),n.AH("\u26a1","Wiring bench","Just the wiring, one room",D.bs,new A.dV3(n)),n.AH("\ud83e\uddea","Safety inspection","A test job: marked when you submit",D.bq,new A.dV4(n)),n.AH("\ud83d\udcde","Service calls","A customer rings with problems",D.i1,new A.dV5(n)),n.AH("\ud83c\udfd8","Neighbourhood jobs","Fix lights and wiring around the city",D.aJ,new A.dV6(n))],t))
s=n.e?D.ay.j(0.25):D.c.j(0.07)
q=n.e
p=C.L(q?D.ay:D.aX,D.r,1)
o=q?D.cx:D.f1
w=C.a([u,D.ae,new C.an(D.a_,m,D.ab,D.t,w,m),v,r,n.b_M("LESSONS",C.aA(m,C.p(m,C.X(o,q?D.ay:D.ac,m,m,m,19),D.f,m,m,new C.o(s,m,p,m,m,m,D.a6),m,34,m,m,m,m,m,34),D.y,!1,B.hlY,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new A.dUY(n),m,m,m,m,m,m,!1,D.a3))],t)
if(n.e){v=D.c.j(0.07)
w.push(new C.D(D.d1,C.aM(m,D.Y,!0,m,!0,D.t,m,C.aN(),m,m,m,m,m,m,2,C.bs(m,new C.b6(4,C.n(16),D.a0),m,m,m,m,m,m,!0,m,m,m,m,m,m,v,!0,m,m,m,m,m,m,m,m,m,m,m,m,m,A4.Er,"Search the lessons: outlet, switch, dryer, sink...",m,m,m,m,m,!0,m,m,m,!0,!0,!1,m,B.c0W,m,m,m,m,m,m,m,m,m,m,m,m),D.y,!0,m,!0,m,!1,m,D.aj,m,m,m,B.hlT,m,m,m,m,m,1,m,m,!1,"\u2022",m,new A.dUZ(n),m,m,m,!1,m,m,!1,m,!0,m,D.aa,m,m,m,m,m,m,m,m,m,m,m,D.KF,!0,D.a4,m,D.an,m,m,m,m),m))}D.d.v(w,n.c2Y())
return C.c6(m,D.c2,C.bn(!0,C.cl(w,m,m,B.aln,m,m,D.ah,!1),!0,!1,D.af,!0,!0),m,!1,!1,m,m)},
c2Y(){var w,v,u,t,s,r,q,p=this,o=x.dz,n=C.a([],o)
for(w=0;w<24;++w){v=B.dhe[w]
n.push(new C.QH([v.d,v.e,v.b,new A.dUL(p,v),v.c,v.a]))}n.push(new C.QH(["Sheets, screws, tape, mud, sand",D.aJ,"\ud83e\uddf1",new A.dUM(p),"Hanging drywall","drywall sheetrock sheet screws tape mud sand paint primer ceiling walls"]))
n.push(new C.QH(["A bare frame: boxes, holes, cable",D.ay,"\ud83c\udfe0",new A.dUN(p),"Wiring a house","wire wiring house frame studs drill cable box outlet switch panel"]))
n.push(new C.QH(["Three-way switch, fan with light",D.bq,"\ud83e\udde0",new A.dUO(p),"Diagram lessons","diagram wiring picture"]))
n.push(new C.QH(["Short cards for beginners",D.bq,"\ud83d\udcd8",new A.dUP(p),"Learn the trades","cards beginner trade"]))
u=D.a.ft(p.f.toLowerCase(),C.ag("\\s+",!0,!1,!1,!1))
t=C.T(u).k("Y<1>")
s=C.C(new C.Y(u,new A.dUQ(),t),t.k("M.E"))
o=C.a([],o)
for(u=n.length,w=0;w<n.length;n.length===u||(0,C.K)(n),++w){r=n[w]
if(D.d.cJ(s,new A.dUR(r)))o.push(r)}if(o.length===0)return C.a([B.eoZ],x.p)
n=x.p
u=C.a([],n)
for(t=o.length,w=0;w<o.length;o.length===t||(0,C.K)(o),++w){q=o[w].a
u.push(p.AH(q[2],q[4],q[0],q[1],q[3]))}return C.a([p.b_K(u)],n)},
b_M(d,e){var w=null,v=x.p,u=C.a([],v),t=e!=null
if(t)u.push(W.aSN)
u.push(C.E(C.p(w,w,D.f,D.ay.j(0.35),w,w,w,1,w,w,w,w,w,w),1))
u.push(new C.D(D.eZ,C.d(d,w,w,w,w,w,w,B.fmR,w,w,w),w))
u.push(C.E(C.p(w,w,D.f,D.ay.j(0.35),w,w,w,1,w,w,w,w,w,w),1))
if(t)D.d.v(u,C.a([D.as,new C.a4(34,w,e,w)],v))
return new C.D(B.bEZ,C.B(u,D.m,w,D.e,D.i,0,w,w),w)},
c9o(d){return this.b_M(d,null)},
b_K(d){var w,v,u,t,s=null,r=x.p,q=C.a([],r)
for(w=0;v=d.length,w<v;w+=2){u=d[w]
t=w+1
v=t<v?d[t]:D.bK
q.push(new C.D(D.ct,new C.Ev(new C.ca(D.aL,D.e,D.i,D.ak,s,D.p,s,0,C.a([new C.by(1,D.bb,u,s),D.ad,new C.by(1,D.bb,v,s)],r),s),s),s))}return C.x(q,D.m,s,D.e,D.i,0,D.p)},
AH(d,e,f,g,h){var w=null,v=C.a([g.j(0.2),B.FT],x.O),u=C.n(22),t=C.L(g.j(0.55),D.r,1.4),s=x.V,r=C.a([new C.ac(0,D.G,g.j(0.18),D.cy,16)],s),q=g.j(0.22),p=C.L(g.j(0.7),D.r,1.5)
s=C.a([new C.ac(0,D.G,g.j(0.35),D.I,14)],s)
return C.aA(w,C.p(w,C.x(C.a([C.p(w,C.at(C.d(d,w,w,w,w,w,w,D.x8,w,w,w),w,w,w),D.f,w,w,new C.o(q,w,p,w,s,w,D.a6),w,56,w,w,w,w,w,56),D.W,C.d(e,w,w,w,w,w,w,D.j8,D.K,w,w),D.cS,C.d(f,w,2,D.a1,w,w,w,B.fyG,D.K,w,w)],x.p),D.m,w,D.b9,D.i,0,D.p),D.f,w,w,new C.o(w,w,t,u,r,new C.a9(D.b0,D.b6,D.x,v,w,w),D.n),w,w,w,w,B.bA3,w,w,w),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,h,w,w,w,w,w,w,!1,D.a3)}}
A.awR.prototype={
R(){return new A.bui()},
bru(){return this.c.$0()}}
A.bui.prototype={
Z(){this.a3()
this.d=C.df(D.nr,new A.f96(this))},
t(){var w=this.d
if(w!=null)w.a2(0)
this.a1()},
B(d){var w=null,v=D.w.j(0.6),u=C.n(18),t=C.L(D.bs,D.r,1.5)
return C.p(w,C.d("\u2b50 "+C.w(this.a.bru()),w,w,w,w,w,w,B.fnc,w,w,w),D.f,w,w,new C.o(v,w,t,u,w,w,D.n),w,w,w,D.iJ,D.qn,w,w,w)}}
A.b8f.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=x.w,e=C.aG(d,g,f).w.a.a>C.aG(d,g,f).w.a.b
if(h.d)return A.h7F(E.y4,h.r,h.z,h.Q,h.y,h.as,h.db,h.w,h.f,h.c)
w=h.r
v=x.p
u=C.a([C.bT(0,A.h7F(E.y4,w,h.z,h.Q,h.y,h.as,h.db,h.w,h.f,h.c),0,0,0)],v)
t=h.ch
s=t!=null
if(s)u.push(C.ap(g,C.x(t,D.E,g,D.e,D.i,0,D.p),g,g,8,g,8,g))
t=C.a([],v)
r=h.CW
if(r!=null)D.d.v(t,r)
r=C.a([],v)
q=h.e
if(q!=null)r.push(new A.awR(q,g))
r.push(new A.ag2(D.hT,"Zoom in",w,!1,g))
t.push(C.B(r,D.m,g,D.e,D.P,0,g,g))
t.push(new A.ag2(D.wz,"Zoom out",w,!0,g))
w=h.x
t.push(h.ay6(B.bO5,"Back to the whole view",w))
t.push(h.ay6(Ap.CJ,"Flip up and down swiping",new A.cyX()))
t.push(h.ay6(D.jH,"Flip left and right swiping",new A.cyY()))
u.push(C.ap(g,C.x(t,D.dI,g,D.e,D.i,0,D.p),g,g,g,8,8,g))
t=h.dx
if(t!=null)u.push(C.ap(14,C.at(t,g,g,g),g,g,0,0,g,g))
t=h.at
if(t!=null){r=e?236:10
q=e?g:62
if(e)s=6
else{p=h.cy
if(p==null)s=s?60:10
else s=p}p=e?D.k.E(C.aG(d,g,f).w.a.a*0.4,190,330):1/0
o=e?B.bGb:D.nu
n=h.ax
m=n?D.dY:D.ek
m=m.j(e?0.88:0.95)
l=C.n(e?10:14)
k=C.L(n?D.ba:D.c0,D.r,1)
n=e?3:g
j=e?D.a1:g
u.push(C.ap(g,new C.cU(new C.aZ(0,p,0,1/0),C.p(g,C.d(t,g,n,j,g,g,g,C.l(g,g,D.c,g,g,g,g,g,g,g,g,e?10.5:12.5,g,g,D.U,g,1.3,!0,g,g,g,g,g,g,g,g),g,g,g),D.f,g,g,new C.o(m,g,k,l,g,g,D.n),g,g,g,g,o,g,g,g),g),g,g,r,q,s,g))}t=h.ay
if(t!=null){s=e?8:10
r=e?g:10
f=e?D.k.E(C.aG(d,g,f).w.a.a*0.36,180,300):1/0
q=e?B.bGa:E.al8
p=e?B.bqa:E.af1
o=C.n(e?11:16)
n=C.L(D.aX,D.r,1)
m=t.a
l=e?1:g
k=e?D.a1:g
m=C.d(m,g,l,k,g,g,g,C.l(g,g,D.b_,g,g,g,g,g,g,g,g,e?11.5:14.5,g,g,D.u,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)
l=e?1:3
t=t.b
k=e?2:g
j=e?D.a1:g
i=e?10:12.5
t=C.a([m,new C.a4(g,l,g,g),C.d(t,g,k,j,g,g,g,C.l(g,g,D.ac,g,g,g,g,g,g,g,g,i,g,g,g,g,e?1.25:1.4,!0,g,g,g,g,g,g,g,g),g,g,g)],v)
m=h.cx
if(m!=null)D.d.v(t,C.a([D.am,m],v))
t=C.E(C.x(t,D.E,g,D.e,D.i,0,D.p),1)
m=e?D.adQ:g
l=e?D.af:D.ck
u.push(C.ap(8,new C.cU(new C.aZ(0,f,0,1/0),C.p(g,C.B(C.a([t,C.aH(g,m,g,g,C.X(D.cx,D.aC,g,g,g,e?16:20),g,g,g,w,l,g,g,g,g,D.cc)],v),D.E,g,D.e,D.i,0,g,g),D.f,g,g,new C.o(p,g,n,o,g,g,D.n),g,g,g,g,q,g,g,g),g),g,g,s,r,g,g))}return new C.an(D.a_,g,D.ab,D.t,u,g)},
ay6(d,e,f){var w=null,v=D.w.j(0.55),u=C.L(D.aX,D.r,1)
return new C.D(D.eI,C.hf(C.aA(w,C.p(w,C.X(d,D.c,w,w,w,20),D.f,w,w,new C.o(v,w,u,w,w,w,D.a6),w,38,w,w,w,w,w,38),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,!1,D.a3),w,e,w,w),w)}}
A.aYm.prototype={
B(d){var w,v=this,u=null,t=x.p,s=C.a([C.aH(u,u,u,u,U.nA,u,u,u,new A.bY9(d),u,u,u,u,u,u)],t),r=v.x,q=v.c,p=v.d
if(r==null)s.push(C.E(C.d(q,u,u,u,u,u,u,C.l(u,u,p,u,u,u,u,u,u,u,u,16,u,u,D.u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),1))
else D.d.v(s,C.a([C.d(q,u,u,u,u,u,u,C.l(u,u,p,u,u,u,u,u,u,u,u,16,u,u,D.u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),D.as,C.E(r,1),D.as],t))
r=p.j(0.15)
q=C.n(16)
w=C.L(p.j(0.6),D.r,1)
s.push(C.aA(u,C.p(u,C.B(C.a([C.X(Aq.aoL,p,u,u,u,17),D.ec,C.d(v.w,u,u,u,u,u,u,C.l(u,u,p,u,u,u,u,u,u,u,u,12,u,u,D.u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],t),D.m,u,D.e,D.P,0,u,u),D.f,u,u,new C.o(r,u,w,q,u,u,D.n),u,u,u,u,D.qn,u,u,u),D.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,v.r,u,u,u,u,u,u,!1,D.a3))
s=C.B(s,D.m,u,D.e,D.i,0,u,u)
q=C.aG(d,u,x.w).w
return C.c6(u,D.c2,C.bn(!0,C.x(C.a([new C.D(B.bFb,s,u),C.p(u,C.ci(v.f,D.t,u,D.y,u,u,u,u,D.ah),D.f,u,new C.aZ(0,1/0,0,q.a.b*0.34),B.b70,u,u,u,u,E.a_A,u,u,1/0),C.E(C.bx(Ao.adb,v.e,D.ap),1)],t),D.m,u,D.e,D.i,0,D.p),!0,!1,D.af,!0,!0),u,!1,!1,u,u)}}
A.adk.prototype={
aEH(d){var w=this,v=new C.V(Date.now(),0,!1),u=w.amK$===d&&D.o.ao(v.bF(w.amL$).a,1000)<2500
w.amK$=u?"":d
w.amL$=v
return u},
aHP(d){var w,v=this
if(d.length===0)return
w=v.a5o$
if(w!=null)w.a2(0)
v.m(new A.dls(v,d))
v.a5o$=C.cD(D.jA,new A.dlt(v))},
aG_(){var w=this.a5o$
return w==null?null:w.a2(0)}}
A.E8.prototype={
R(){var w=new C.vj()
$.vN()
w.fZ(0)
return new A.aAW(w,B.nD,null,"",C.c3(2000,1,1,0,0,0,0,0))},
gdd(d){return this.d}}
A.aAW.prototype={
gtn(){var w,v=this,u=v.d
if(u===$){w=A.td(v.a.c)
v.d!==$&&C.bE()
v.d=w
u=w}return u},
gdI(d){var w,v=this.e
if(v===$){w=this.a.d
v=this.e=w==null?new A.CJ(C.U(x.S,x.N)):w}return v},
gasw(){var w=this.gtn().a
return w==="light"||w==="fan"},
gf1(){var w,v=this,u=v.f
if(u===$){w=v.gasw()?new A.uE(1.15,0.12,11,B.W2,$.aw()):new A.uE(0.42,0.26,12,B.haW,$.aw())
v.f!==$&&C.bE()
u=v.f=w}return u},
gla(){var w=this,v=w.r
return v===$?w.r=A.bDo(w.gtn(),w.gdI(0),!0):v},
aBp(d){var w
this.m(new A.dcS(this,d))
A:{if("practice"===d){w="Practice: you can put a wire anywhere. The mistake shows when the power goes on."
break A}if("test"===d){w="Test: put every wire where you think it goes. Nothing is marked until you submit."
break A}w="Learn: a wrong wire is refused and explained."
break A}this.hv(w,!0)},
t(){var w=this.as
if(w!=null)w.a2(0)
this.aG_()
this.a1()},
hv(d,e){var w=this,v=w.as
if(v!=null)v.a2(0)
w.m(new A.dcQ(w,d,e))
w.as=C.cD(D.lF,new A.dcR(w))},
mg(d){return this.hv(d,!1)},
pz(){var w=this.gdI(0)
w.d=w.d&&w.a&&w.c>=2
this.r=A.bDo(this.gtn(),w,!0)},
on(){var w,v,u,t=this
if(t.gasw()&&t.gdI(0).c===0){t.gf1().hb(11,0.12,B.W2,1.15)
t.m(new A.dcA(t))
return}w=t.gf1()
v=t.gdI(0).c===0
u=v?2.8:0.4
v=v?12:10
w.hb(v,0.26,new A.q(0,0.1,u),0.42)
t.m(new A.dcB(t))},
aYx(d){var w,v,u,t=this
if(t.gasw()){t.gf1().hb(9,0.12,B.W2,1.15)
return}w=t.gtn().e
v=C.T(w)
u=C.ow(new C.cP(new C.Y(w,new A.dcC(d),v.k("Y<1>")),new A.dcD(),v.k("cP<1,m>")))
if(u==null)u=""
if(d==="ground"||u==="ground")t.gf1().hb(8,0.55,B.hfi,0.15)
else if(d==="white"||u==="neutral")t.gf1().hb(8.5,0.2,B.hjW,0.95)
else t.gf1().hb(8.5,0.2,B.h7h,-0.95)},
c9j(){var w,v,u,t="ground",s=this.gdI(0),r=!s.a||s.c>0,q=new A.dcz(this),p=this.gtn(),o=p.a
switch(o){case"switch":p=q.$1(t)
o=q.$1("blackLine")
w=q.$1("blackLoad")
return C.a([r,r,r,p,o,w,s.c>=2&&s.d],x.u)
case"gfci":p=q.$1(t)
o=q.$1("white")
w=q.$1("black")
v=s.c>=2
return C.a([r,r,p,o,w,v,v&&s.d],x.u)
case"outlet":case"light":case"fan":p=q.$1(t)
o=q.$1("white")
w=q.$1("black")
v=s.c
s=v>=2&&s.d
return C.a([r,r,p,o,w,v>=1,s],x.u)
default:w=C.a([r,r],x.u)
if(o==="cord3")w.push(s.r)
if(o==="cord4")w.push(!s.r)
for(p=p.e,o=p.length,u=0;u<o;++u)w.push(q.$1(p[u].a))
w.push(s.c>=1)
w.push(s.c>=2&&s.d)
return w}},
Jh(d){var w,v,u,t,s,r,q,p,o,n=this,m="square",l="STOP! The power is still on. Turn the breaker OFF before you touch any wire.",k="Recorded."
if(d===0){n.on()
return}if(B.aRU.q(0,d))return
if(d===40){w=n.gdI(0)
if(w.a){A.fJ(180,220,0.25,m)
n.mg("STOP! The power is still on. Turn the breaker OFF before you touch the strap.")}else if(n.gtn().a==="cord3")n.hv("Leave the ground strap on. On a 3-wire cord it joins the neutral to the frame of the appliance. That is what grounds it.",!0)
else if(w.c!==0)n.mg("The device is already in the box. Pull it out again to change it.")
else{n.m(new A.dcE(n))
A.rd()
n.hv("Ground strap removed. Now the frame will be grounded by the green wire, and the neutral stays clear of it.",!0)}return}w=n.gtn()
v=w.f
u=C.T(v).k("Y<1>")
t=C.C(new C.Y(v,new A.dcF(d),u),u.k("M.E"))
v=w.a
s=A.hCz(v,d)
u=s!=null
if(u){r=n.gdI(0)
r=r.c===0&&r.b.it(0,s)}else r=!1
if(r){w=n.gdI(0)
if(w.a){A.fJ(180,220,0.25,m)
n.mg(l)
return}w=w.b
w.bs(w,new A.dcG(s))
n.m(n.gc9m())
n.hv("Wire taken off the screw.",!0)
return}r=!1
if(t.length!==0){q=n.gdI(0)
if(q.c===0){q=q.b
if(q.aj(0,d))r=n.w.length===0||q.h(0,d)===n.w}}if(r){w=n.gdI(0)
if(w.a){A.fJ(180,220,0.25,m)
n.mg(l)
return}w.b.W(0,d)
n.m(new A.dcH(n))
n.hv(w.z?k:"Wire taken off.",!0)
return}if(u){u=n.gdI(0)
u=u.c===0&&!u.b.it(0,s)&&D.d.b_(w.e,new A.dcI(s))}else u=!1
if(u){n.m(new A.dcJ(n,s,d))
if(n.w.length!==0){n.aYx(s)
n.hv(D.d.fG(w.e,new A.dcK(s)).b+": picked up. Now tap the screw, nut or wire it joins.",!0)}return}if(t.length!==0&&n.w.length!==0&&n.gdI(0).c===0){u=n.gdI(0)
p=A.hCu(w,u,n.w,D.d.gI(t),!1)
if(p!=null){++n.Q
A.fJ(180,220,0.25,m)
n.mg(p)}else if(u.z){A.fJ(520,60,0.25,"tri")
n.m(new A.dcL(n,d))
n.hv(k,!0)
n.w=""}else{A.rd()
n.m(new A.dcM(n,d))
if(u.w)n.hv(D.d.gI(t).b+": fastened.",!0)
else if(A.aiw(w,u))n.hv("Every wire is on the right screw. Now push the device into the box.",!0)
else n.hv(D.d.gI(t).b+": fastened correctly.",!0)
n.gf1().zN(7,A.aQr(v,d,u))
n.w=""}return}o=n.gla().b.h(0,d)
if(o!=null){n.m(new A.dcN(n,d))
w=n.gf1()
v=o.c
w.zN(o.d,v)}},
cnx(){var w,v=this
v.m(new A.dcO(v))
w=v.gdI(0)
if(w.a){A.fJ(120,200,0.25,"saw")
if(w.c===0)v.mg("The breaker is ON. The wires are LIVE at 120 volts. Turn it OFF before you touch anything.")}else{A.fJ(600,100,0.25,"tri")
v.hv("Breaker OFF. It is safe to work on the wires. (In real life, always test them with a tester first.)",!0)}},
cCZ(){var w,v,u=this,t="The tester glows: this outlet has 120 volts and is wired correctly. The lesson is complete! Mistakes: ",s=" is wired correctly: every wire is on the terminal that belongs to it. The lesson is complete! Mistakes: ",r=u.gtn(),q=u.gdI(0),p=A.Ll(r,q)
if(p.a!=="ok"){u.m(new A.dcT(u,p));++u.Q
A.fJ(180,220,0.25,"square")
C.fP()
r=p.r==="arc"
w=r?95:150
A.fJ(w,450,0.5,r?"saw":"noise")
if(q.z)r=p.d?"The breaker tripped.":"Power is on."
else r=p.b+"\nHow to fix it: "+p.w
u.mg(r)
return}u.m(new A.dcU(u))
A.rd()
v=r.a
A:{if("switch"===v){r="Power on. Flip the switch and the light turns on: both black wires are on brass screws, so the switch opens and closes the hot wire. The lesson is complete! Mistakes: "+u.Q+"."
break A}if("gfci"===v){r="Power on. Press RESET (it clicks), then TEST: it must shut the outlet off. Wired on LINE, it protects the whole circuit. The lesson is complete! Mistakes: "+u.Q+"."
break A}if("outlet"===v){r=t+u.Q+"."
break A}q=D.d.q(B.jI,v)
if(q){r="Power on. "+r.b+(s+u.Q+".")
break A}if(v!=="light"&&v!=="fan"){r="Power on. The "+r.b.toLowerCase()+(s+u.Q+".")
break A}r=t+u.Q+"."
break A}u.hv(r,!0)},
B(a1){var w,v=this,u=null,t=v.c9j(),s=D.d.bg(t,new A.dd2()),r=s<0?"All done":"Step "+(s+1)+"/"+v.gtn().d.length,q=v.gtn(),p=v.gdI(0),o=A.aiw(q,p)&&!p.a,n=v.gla(),m=v.gf1(),l=v.x,k=v.y,j=v.z,i=l!==0?v.gla().b.h(0,v.x):u,h=(p.a?D.ek:D.dY).j(0.95),g=C.n(18),f=p.a,e=C.L(f?D.c0:D.ba,D.r,1.5),d=C.X(f?D.ho:B.bPK,D.c,u,u,u,18),a0=x.p
g=C.a([C.aA(u,C.p(u,C.B(C.a([d,D.ec,C.d(f?"Breaker ON (live)":"Breaker OFF (safe)",u,u,u,u,u,u,D.nO,u,u,u)],a0),D.m,u,D.e,D.P,0,u,u),D.f,u,u,new C.o(h,u,e,g,u,u,D.n),u,u,u,u,D.h8,u,u,u),D.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,v.gcnw(),u,u,u,u,u,u,!1,D.a3)],a0)
h=!p.w&&!p.z
h=C.a([A.uo("Learn",D.ba,D.uK,h,new A.dd3(v)),D.am,A.uo("Practice",D.c0,D.ol,p.w,new A.dd4(v)),D.am,A.uo("Test",D.bq,D.qy,p.z,new A.ddc(v)),D.am],a0)
if(!p.z)D.d.v(h,C.a([A.uo("Hints",D.ay,D.qA,p.e,new A.ddd(v)),D.am,A.uo("Labels",D.aJ,O.CA,p.f,new A.dde(v)),D.am,A.uo("Wire guide",D.mD,D.on,!1,new A.ddf(a1)),D.am],a0))
h.push(A.uo("Brass side",B.bs5,E.apF,!1,new A.ddg(v)))
h.push(D.am)
h.push(A.uo("Silver side",B.Bx,D.Pj,!1,new A.ddh(v)))
h.push(D.N)
n=A.K3(!1,u,m,new A.ddi(v),u,j,l,i,u,u,k,u,u,v.gJf(),v.gJg(),n,!1,u,g,h)
m=C.a([],a0)
l=p.c
if(l===0){l=C.a([],a0)
for(k=D.d.gaf(q.e),j=new C.eR(k,new A.ddj(v));j.C();){i=k.gS(0)
h=i.c
g=new C.aP(14,14)
f=v.w
e=i.a
f=f===e
d=f?D.b_:D.aX
w=new C.ay(d,f?3:1,D.r,-1)
d=C.a([],a0)
if(p.b.it(0,e))d.push(new C.D(D.fv,C.X(D.e6,i.d,u,u,u,18),u))
f=i.b
e=i.d
d.push(new C.y(f,u,new C.F(!0,e,u,u,u,u,13,D.u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u),u,u,u,u,u,u,u,u,u))
l.push(new C.D(D.iJ,C.aA(u,C.p(u,new C.ca(D.aL,D.e,D.i,D.m,u,D.p,u,0,d,u),D.f,u,u,new C.o(h,u,new C.bG(w,w,w,w),new C.bh(g,g,g,g),u,u,D.n),u,u,u,u,D.hR,u,u,u),D.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new A.dd5(v,i),u,u,u,u,u,u,!1,D.a3),u))}l=C.a([C.bX(D.bG,l,D.br,u,6,8)],a0)
if(p.z)D.d.v(l,C.a([C.B(C.a([A.qw("Submit the test",D.qy,new A.dd6(v,a1),D.bq)],a0),D.m,u,D.e,D.i,0,u,u),D.N],a0))
l.push(D.N)
if(o)p="Push it into the box"
else p=p.a?"Turn the breaker OFF first":"Fasten every wire first"
l.push(C.B(C.a([A.qw(p,B.a2W,o?new A.dd7(v):u,D.ay)],a0),D.m,u,D.e,D.i,0,u,u))
D.d.v(m,l)}else if(l===1)D.d.v(m,C.a([C.B(C.a([A.qw("Pull it back out",D.pl,new A.dd8(v),D.ac),D.ad,A.qw("Put the cover plate on",R.rM,new A.dd9(v),D.ay)],a0),D.m,u,D.e,D.i,0,u,u)],a0))
else{l=A.qw("Start over",D.k_,new A.dda(v),D.ac)
p=p.d
k=p?"Tested \u2713":"Power on and test"
D.d.v(m,C.a([C.B(C.a([l,D.ad,A.qw(k,D.ho,p?u:v.gcCY(),D.ay)],a0),D.m,u,D.e,D.i,0,u,u)],a0))}return A.Iv(D.ay,new A.ddb(v,a1,t),C.x(m,D.m,u,D.e,D.P,0,D.p),n,r,q.b,u)}}
A.a9X.prototype={
R(){return new A.aGS(B.nD,null,"",C.c3(2000,1,1,0,0,0,0,0))},
gdd(d){return this.c}}
A.aGS.prototype={
gdI(d){var w,v=this.d
if(v===$){w=this.a.c
v=this.d=w==null?A.h7b():w}return v},
gf1(){var w=this.e
return w===$?this.e=new A.uE(-0.3,0.18,40,B.aY3,$.aw()):w},
gla(){var w=this.f
return w===$?this.f=A.aQi(this.gdI(0)):w},
t(){var w=this.z
if(w!=null)w.a2(0)
this.aG_()
this.a1()},
hv(d,e){var w=this,v=w.z
if(v!=null)v.a2(0)
w.m(new A.eZj(w,d,e))
w.z=C.cD(D.lF,new A.eZk(w))},
mg(d){return this.hv(d,!1)},
on(){this.gf1().hb(40,0.18,B.aY3,-0.3)
this.m(new A.eZb(this))},
Jh(d){var w,v,u,t,s,r,q=this,p="square"
if(d===0){q.on()
return}w=C.H([41,"tail",42,"trap",43,"arm"],x.S,x.N).h(0,d)
if(w!=null&&!q.gdI(0).a.q(0,w)){v=q.r
if(v.length===0){if(w==="tail")v="tailpiece"
else v=w==="trap"?"P-trap":"trap arm"
q.mg("Pick the "+v+" from the buttons below first, then tap its glowing outline.")
return}if(v!==w){A.fJ(180,220,0.25,p)
u=q.r
A:{if("tail"===u){v="The tailpiece is the straight pipe that hangs from the sink. It goes at the very top, under the drain."
break A}if("trap"===u){v="The P-trap is the U-shaped bend. It goes right under the tailpiece, in the middle."
break A}v="The trap arm is the long straight pipe that goes into the wall. It goes last, on the right."
break A}q.mg(v)
return}if(w==="trap"&&!q.gdI(0).a.q(0,"tail")){A.fJ(180,220,0.25,p)
q.mg("Start from the top: put the tailpiece on first, then the trap under it.")
return}if(w==="arm"&&!q.gdI(0).a.q(0,"trap")){A.fJ(180,220,0.25,p)
q.mg("The trap arm joins the trap. Put the P-trap on first.")
return}q.m(new A.eZc(q,w))
A.rd()
q.hv("Piece in place. "+(q.gdI(0).a.a===3?"Now tighten the two slip nuts: tap each nut.":"Pick the next piece."),!0)
return}v=d===44
if(v||d===45){t=v?"n1":"n2"
if(q.gdI(0).b.h(0,t)!==!0){q.m(new A.eZd(q,t))
A.rd()
q.hv("Slip nut hand tightened. In real life give it a quarter turn more with pliers, but never over-tighten plastic.",!0)
return}}if(d===46&&q.gdI(0).a.a===3&&q.r.length===0){if(q.gdI(0).c){q.m(new A.eZe(q))
q.hv("Water turned off.",!0)}else q.b_L()
return}s=q.gla().b.h(0,d)
if(s!=null){q.m(new A.eZf(q,d))
v=q.gf1()
r=s.c
v.zN(s.d,r)}},
b_L(){var w=this,v=x.cc,u=C.C(new C.Y(C.a(["n1","n2"],x.s),new A.eZg(w),v),v.k("M.E"))
w.m(new A.eZh(w,u))
if(u.length!==0){A.fJ(180,220,0.25,"square")
w.mg("It is dripping from a loose slip nut! Tap the nut and tighten it, then run the water again.")}else{A.rd()
w.hv("No leaks. The water flows through the trap and into the wall. The little pool in the U-bend stays there and blocks sewer gas. The lesson is complete!",!0)}},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.gdI(0),i=j.a,h=i.q(0,"tail"),g=i.q(0,"trap"),f=i.q(0,"arm"),e=j.b
e=e.h(0,"n1")===!0&&e.h(0,"n2")===!0
w=C.a([h,g,f,e,j.c&&j.d.length===0],x.u)
v=D.d.bg(w,new A.eZo())
u=i.a===3
j=v<0?"All done":"Step "+(v+1)+"/5"
h=l.gla()
g=l.gf1()
f=l.w
e=l.x
t=l.y
s=f!==0?l.gla().b.h(0,l.w):k
h=A.K3(!1,k,g,new A.eZp(l),k,t,f,s,k,k,e,k,k,l.gJf(),l.gJg(),h,!1,k,k,k)
e=x.p
s=C.a([],e)
for(r=0;r<3;++r){q=B.dtP[r]
g=i.q(0,q)?k:new A.eZq(l,q)
f=i.q(0,q)?D.dr:D.fN
t=new C.aP(14,14)
p=l.r===q
o=p?D.b_:D.aX
n=new C.ay(o,p?3:1,D.r,-1)
o=C.a([],e)
if(i.q(0,q))o.push(B.ep9)
p=B.dC1.h(0,q)
p.toString
m=i.q(0,q)?D.bU:D.c
o.push(new C.y(p,k,new C.F(!0,m,k,k,k,k,13,D.u,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k),k,k,k,k,k,k,k,k,k))
s.push(new C.D(D.iJ,C.aA(k,C.p(k,new C.ca(D.aL,D.e,D.i,D.m,k,D.p,k,0,o,k),D.f,k,k,new C.o(f,k,new C.bG(n,n,n,n),new C.bh(t,t,t,t),k,k,D.n),k,k,k,k,D.hR,k,k,k),D.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,g,k,k,k,k,k,k,!1,D.a3),k))}i=C.bX(D.bG,s,D.br,k,6,8)
g=A.qw("Start over",D.k_,new A.eZr(l),D.ac)
f=u?"Run the water":"Build the drain first"
return A.Iv(D.cp,new A.eZs(d,w),C.x(C.a([i,D.N,C.B(C.a([g,D.ad,A.qw(f,D.pp,u?l.gc9n():k,D.cp)],e),D.m,k,D.e,D.i,0,k,k)],e),D.m,k,D.e,D.P,0,D.p),h,j,"Sink drain (P-trap)",k)}}
A.a5o.prototype={
R(){return new A.aBf(B.nD,null,"",C.c3(2000,1,1,0,0,0,0,0))},
gdd(d){return this.c}}
A.aBf.prototype={
gdI(d){var w,v=this.d
if(v===$){w=this.a.c
v=this.d=w==null?A.h7b():w}return v},
gf1(){var w=this.e
return w===$?this.e=new A.uE(-0.25,0.2,36,B.aXk,$.aw()):w},
gla(){var w=this.f
return w===$?this.f=A.ah_(this.gdI(0)):w},
t(){var w=this.z
if(w!=null)w.a2(0)
this.aG_()
this.a1()},
hv(d,e){var w=this,v=w.z
if(v!=null)v.a2(0)
w.m(new A.dfU(w,d,e))
w.z=C.cD(D.lF,new A.dfV(w))},
mg(d){return this.hv(d,!1)},
on(){this.gf1().hb(36,0.2,B.aXk,-0.25)
this.m(new A.dfM(this))},
Jh(d){var w,v,u,t,s,r,q=this
if(d===0){q.on()
return}w=x.fZ
v=C.C(new C.Y(B.Sh,new A.dfP(d),w),w.k("M.E"))
if(v.length!==0&&q.r.length!==0){w=q.gdI(0)
u=A.ip8(w,q.r,D.d.gI(v))
if(u!=null){A.fJ(180,220,0.25,"square")
q.mg(u)}else{A.rd()
q.m(new A.dfQ(q,d))
q.gf1().zN(12,A.RH(d))
q.hv(A.bDC(w)?"All four ends are connected. Now open the valves.":D.d.gI(v).b+": connected.",!0)}return}if((d===61||d===62)&&q.r.length===0){q.cFl(d)
return}w=d===68
if(w||d===69){t=w?"hot":"cold"
if(q.gdI(0).e.it(0,t)){q.m(new A.dfR(q,t))
q.hv("Hose taken off.",!0)
return}}s=q.gla().b.h(0,d)
if(s!=null){q.m(new A.dfS(q,d))
w=q.gf1()
r=s.c
w.zN(s.d,r)}},
cFl(d){var w,v,u,t=this,s=d===61,r=s?"hot":"cold"
t.m(new A.dfW(t,s,d))
if(!(s?t.gdI(0).f:t.gdI(0).r)){t.hv("The "+r+" valve is turned off.",!0)
return}w=t.gdI(0)
v=w.e
if(v.h(0,d)===r)u=v.h(0,s?63:64)===r
else u=!1
if(!u){A.fJ(180,220,0.25,"square")
t.mg(v.h(0,d)==null?"Water is spraying out of the "+r+" valve: it has no hose! Turn it off and connect the hose first.":"Water is leaking: the "+r+" hose is only fastened at one end. Turn the valve off and finish the connection.")}else if(w.f&&w.r&&A.bDC(w)){A.rd()
t.hv(y.W,!0)}else{A.rd()
w=s?"cold":"hot"
t.hv("The "+r+" water is flowing. Now turn the "+w+" valve too: tap its handle.",!0)}},
c9l(d){var w,v=this
v.m(new A.dfN(v))
w=v.gdI(0)
if(!(w.f&&w.r)){v.hv("Valves closed.",!0)
return}if(A.bDC(w)){A.rd()
v.hv(y.W,!0)}else{A.fJ(180,220,0.25,"square")
v.mg("Water is spraying out of a valve that has no hose! Close the valves and finish connecting the hoses first.")}},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=n.gdI(0),k=l.w||l.e.a!==0,j=l.e,i=j.h(0,61)==="hot"&&j.h(0,63)==="hot",h=j.h(0,62)==="cold"&&j.h(0,64)==="cold",g=C.a([k,i,h,l.f&&l.r&&A.bDC(l)],x.u),f=D.d.bg(g,new A.dg_())
k=f<0?"All done":"Step "+(f+1)+"/4"
i=n.gla()
h=n.gf1()
w=n.w
v=n.x
u=n.y
t=w!==0?n.gla().b.h(0,n.w):m
s=x.p
i=A.K3(!1,m,h,new A.dg0(n),m,u,w,t,m,m,v,m,m,n.gJf(),n.gJg(),i,!1,m,m,C.a([A.uo("Hints",D.ay,D.qA,l.w,new A.dg1(n)),D.N],s))
v=C.a([],s)
for(r=0;r<2;++r){h={}
w=B.dtg[r]
h.a=null
q=w.a
h.a=q
u=new C.aP(14,14)
t=n.r===q
p=t?D.b_:D.aX
o=new C.ay(p,t?3:1,D.r,-1)
p=C.a([],s)
t=C.a6(j).k("b9<2>")
if(new C.Y(new C.b9(j,t),new A.dg2(h),t.k("Y<M.E>")).gK(0)===2)p.push(B.epb)
p.push(new C.y(w.b,m,D.tu,m,m,m,m,m,m,m,m,m))
v.push(new C.D(D.iJ,C.aA(m,C.p(m,new C.ca(D.aL,D.e,D.i,D.m,m,D.p,m,0,p,m),D.f,m,m,new C.o(w.c,m,new C.bG(o,o,o,o),new C.bh(u,u,u,u),m,m,D.n),m,m,m,m,D.hR,m,m,m),D.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new A.dg3(h,n),m,m,m,m,m,m,!1,D.a3),m))}j=C.bX(D.bG,v,D.br,m,6,8)
h=A.qw("Start over",D.k_,new A.dg4(n),D.ac)
l=l.f&&l.r?"Close the valves":"Open the valves"
return A.Iv(D.c0,new A.dg5(d,g),C.x(C.a([j,D.N,C.B(C.a([h,D.ad,A.qw(l,D.pp,n.gc9k(n),D.c0)],s),D.m,m,D.e,D.i,0,m,m)],s),D.m,m,D.e,D.P,0,D.p),i,k,"Faucet supply lines",m)}}
A.aC7.prototype={
R(){return new A.aC8(A.hiR())}}
A.aC8.prototype={
gf1(){var w,v=this.e
if(v===$){w=new A.uE(-0.3,0.48,46,B.W_,$.aw())
w.f=80
this.e=w
v=w}return v},
gla(){var w=this.f
return w===$?this.f=A.ah0(this.d):w},
t(){var w=this.z
if(w!=null)w.a2(0)
this.a1()},
hv(d,e){var w=this,v=w.z
if(v!=null)v.a2(0)
w.m(new A.dn1(w,d,e))
w.z=C.cD(D.lF,new A.dn2(w))},
mg(d){return this.hv(d,!1)},
on(){this.gf1().hb(46,0.48,B.W_,-0.3)
this.m(new A.dmW(this))},
Jh(d){var w,v,u,t=this
if(d===0){t.on()
return}if(d===72){w=t.d
w=w.d.q(0,72)&&w.a>=5}else w=!1
if(w){t.m(new A.dmY(t,d))
A.rd()
t.hv("You flipped the breaker fully OFF and then ON. The living room light is back on. A breaker trips when a circuit is overloaded: find out why before it trips again.",!0)
t.gf1().zN(22,B.hgY)
return}w=d===87
if(w||d===86){v=t.d
v=v.b&&!v.c&&v.a>=5}else v=!1
if(v){if(t.w==="wrench"&&w){t.m(new A.dmZ(t,d))
A.rd()
t.hv("You tightened the slip nut with the wrench. The drip has stopped.",!0)
return}A.fJ(180,220,0.25,"square")
t.mg(w?"Hand tightening is not enough here. Pick the wrench first, then tap the nut.":"The water is dripping from the slip nut on the trap. Pick the wrench, then tap the nut.")}u=t.gla().b.h(0,d)
if(u!=null){t.m(new A.dn_(t,d))
w=t.gf1()
v=u.c
w.zN(u.d,v)}},
chx(d){var w,v
A:{if("ptrap"===d){w=B.evL
break A}if("faucet"===d){w=B.bJ2
break A}w=new A.E8(d,null,null)
break A}v=this.c
v.toString
C.a5(v,!1).cc(C.ej(new A.dmX(w),!1,null,x.H))},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.d,l=B.dnP[m.a],k=o.r,j=k===0?n:A.ief(k)
k=m.d.q(0,72)
w=!m.b||m.c
v=C.a([!k,w],x.u)
w=m.a
k=o.gla()
u=o.gf1()
t=o.r
s=o.x
r=o.y
q=t!==0?o.gla().b.h(0,o.r):n
p=j==null?n:C.aA(n,C.p(n,B.fAw,D.f,n,n,new C.o(D.ay,n,n,C.n(12),n,n,D.n),n,n,n,n,D.qn,n,n,n),D.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new A.dn5(o,j),n,n,n,n,n,n,!1,D.a3)
k=A.K3(!1,n,u,new A.dn6(o),n,r,t,q,p,new A.dn7(o),s,n,n,o.gJf(),o.gJg(),k,!1,n,n,n)
s=l.a
p=x.p
q=C.B(C.a([C.E(C.d(""+(m.a+1)+". "+s,n,n,n,n,n,n,B.fsB,n,n,n),1),A.uo("Wrench",D.aJ,D.ol,o.w==="wrench",new A.dn8(o))],p),D.m,n,D.e,D.i,0,n,n)
t=C.d(l.b,n,3,D.a1,n,n,n,B.ftH,n,n,n)
m=C.kS(D.bq,6,s,6,0,new A.dn9(o),m.a)
u=v[0]
s=u?"\u2705 Living room power fixed":"\u26a0 Living room has no power"
s=C.E(C.d(s,n,n,n,n,n,n,C.l(n,n,u?D.ep:D.eO,n,n,n,n,n,n,n,n,11.5,n,n,D.H,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),1)
u=v[1]
r=u?"\u2705 Sink leak fixed":"\u26a0 Kitchen sink drips"
return A.Iv(D.bq,new A.dna(d,v),C.x(C.a([q,D.bF,t,m,C.B(C.a([s,C.E(C.d(r,n,n,n,n,n,n,C.l(n,n,u?D.ep:D.eO,n,n,n,n,n,n,n,n,11.5,n,n,D.H,n,n,!0,n,n,n,n,n,n,n,n),D.dV,n,n),1)],p),D.m,n,D.e,D.i,0,n,n)],p),D.m,n,D.e,D.P,0,D.p),k,"Stage "+(w+1)+"/7","Build and fix a house",n)}}
A.ag2.prototype={
R(){return new A.bxZ()}}
A.bxZ.prototype={
b8s(){var w=this,v=w.d
if(v!=null)v.a2(0)
w.d=null
if(w.e&&w.c!=null)w.m(new A.fkL(w))},
c9p(d){var w,v,u=this
u.m(new A.fkJ(u))
w=u.a
v=w.e
v.apR(w.f?1.45:0.69)
v=u.d
if(v!=null)v.a2(0)
u.d=C.cD(D.kL,new A.fkK(u))},
t(){var w=this.d
if(w!=null)w.a2(0)
this.a1()},
B(d){var w=this,v=null,u=w.a.d,t=D.w.j(w.e?0.8:0.55),s=w.e,r=s?D.bs:D.aX
r=C.L(r,D.r,s?2:1)
return new C.D(D.eI,C.hf(C.mJ(D.c6,C.p(v,C.X(w.a.c,D.c,v,v,v,22),D.f,v,v,new C.o(t,v,r,v,v,v,D.a6),v,44,v,v,v,v,v,44),v,new A.fkM(w),new A.fkN(w),v,v,v,v,new A.fkO(w)),v,u,v,v),v)}}
A.byA.prototype={}
A.byF.prototype={}
A.bzV.prototype={}
A.jT.prototype={}
A.Nh.prototype={}
A.a7q.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=x.p,k=C.a([C.B(C.a([C.aH(m,m,m,m,U.nA,m,m,m,new A.ccA(d),m,m,m,m,m,m),B.fKN],l),D.m,m,D.e,D.i,0,m,m)],l)
for(w=0;w<5;++w){v=B.dvB[w]
u=v.c
t=C.a([new C.D(D.amm,new C.y(v.b+"  "+v.a.toUpperCase(),m,new C.F(!0,u,m,m,m,m,12,D.u,m,1.1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m,m,m,m,m,m,m),m)],l)
for(s=v.d,r=s.length,q=0;q<r;++q){p=s[q]
o=new C.aP(14,14)
n=new C.ay(u.j(0.35),1,D.r,-1)
t.push(C.p(m,C.x(C.a([new C.y(p.a,m,D.j8,m,m,m,m,m,m,m,m,m),D.cS,new C.y(p.b,m,E.aaA,m,m,m,m,m,m,m,m,m)],l),D.E,m,D.e,D.i,0,D.p),D.f,m,m,new C.o(B.FT,m,new C.bG(n,n,n,n),new C.bh(o,o,o,o),m,m,D.n),m,m,m,D.ct,D.bg,m,m,m))}D.d.v(k,t)}return C.c6(m,D.c2,C.bn(!0,C.cl(k,m,m,B.aln,m,m,D.ah,!1),!0,!1,D.af,!0,!0),m,!1,!1,m,m)}}
A.cpy.prototype={}
A.Fp.prototype={}
A.nz.prototype={}
A.Xw.prototype={}
A.cpo.prototype={
bAO(d,e,f){var w,v=this
if(f!=null)w=D.d.fG(B.aA2,new A.cps(f))
else{w=new C.e6()
w.cZ(v.a)
w=B.aA2[w.ap(2)]}v.c!==$&&C.aQ()
v.c=w
w=new C.e6()
w.cZ(v.a+7)
w=w.ha()
v.d!==$&&C.aQ()
v.d=w},
vt(d,e){var w=this.c
w===$&&C.c()
return D.d.fG(w.c,new A.cpt(e))},
Pz(d){++this.w
return new A.ey(!1,d,!1,"")},
c6y(d){var w=d.d
return new C.N(w,new A.cpp(this),C.T(w).k("N<1,m>")).aI(0," and ")},
UK(d,e){var w,v,u,t,s=this,r=s.vt(0,e),q=s.e
if(q.q(0,e))return s.Pz("The "+r.c.toLowerCase()+" is already there.")
if(d!==r.b)return s.Pz(s.b?"That does not go here.":"That does not go here. This spot is for the "+r.c.toLowerCase()+".")
for(w=r.d,v=w.length,u=0;u<v;++u)if(!q.q(0,w[u])){q=s.b?"Not yet: something has to go in first.":"Not yet. "+r.e+" Put in the "+s.c6y(r)+" first.";++s.w
return new A.ey(!1,q,!1,"")}if(r.f&&s.r)return s.Pz(s.b?"The water is still on!":"Stop! The water is still on. Cutting into a pipe with the water on floods the room. Turn the water off at the main valve first (pick the hand and tap the main valve).")
q.M(0,e)
s.y=!1
s.x.aa(0)
if(r.r>0)t=s.b?"":" It is only loose. Pick the wrench and tap it to tighten the joints."
else t=""
return new A.ey(!0,r.c+" fitted."+t,!1,"")},
bkF(d){var w,v,u,t,s=this,r=s.vt(0,d)
if(!s.e.q(0,d))return s.Pz(s.b?"Nothing to tighten yet.":"There is nothing to tighten yet: the "+r.c.toLowerCase()+" is not fitted.")
w=r.r
if(w===0)return s.Pz(s.b?"That does not need tightening.":"The "+r.c.toLowerCase()+" does not have joints to tighten. It just sits in place.")
v=s.f
u=v.h(0,d)
if(u==null)u=0
if(u>=w)return s.Pz("Already tight. More force would crack it.")
t=u+1
v.n(0,d,t)
s.x.aa(0)
s.y=!1
v=r.c
return new A.ey(!0,t>=w?v+": every joint is tight now.":v+": one joint tightened, one to go.",!1,"")},
aHX(d){var w=this.vt(0,d),v=this.f.h(0,d)
if(v==null)v=0
return w.r-v},
aK1(){var w,v,u,t,s,r,q=this
q.r=!q.r
w=q.x
w.aa(0)
if(!q.r)return B.b0E
v=q.c
v===$&&C.c()
u=v.c
t=C.T(u).k("Y<1>")
s=C.C(new C.Y(u,new A.cpu(q),t),t.k("M.E"))
v=v.c
u=C.T(v).k("Y<1>")
r=C.C(new C.Y(v,new A.cpv(q),u),u.k("M.E"))
q.y=!0
if(s.length!==0){w.v(0,new C.N(s,new A.cpw(),C.T(s).k("N<1,m>")));++q.w
return new A.ey(!1,"Water is spraying from an open pipe where the "+D.d.gI(s).c.toLowerCase()+" should be! Turn the water off and finish the job.",!0,"")}if(r.length!==0){w.v(0,new C.N(r,new A.cpx(),C.T(r).k("N<1,m>")));++q.w
return new A.ey(!1,"The "+D.d.gI(r).c.toLowerCase()+" is leaking from a loose joint. Turn the water off, tighten it with the wrench, then test again.",!0,"")}if(!q.ga3Y())return B.b0u
return B.b0f},
cL1(){var w,v,u,t,s,r,q,p=this
p.r=!0
p.aK1()
w=p.c
w===$&&C.c()
v=w.c
u=v.length
t=0
for(;t<u;++t){s=v[t]
p.UK(s.b,s.a)}for(w=w.c,v=w.length,t=0;t<v;++t){s=w[t]
for(u=s.r,r=s.a,q=0;q<u;++q)p.bkF(r)}p.aK1()
p.w=0},
ga3Y(){var w=this.c
w===$&&C.c()
return D.d.cJ(w.c,new A.cpq(this))},
gcJ9(){var w=this.c
w===$&&C.c()
return D.d.cJ(w.c,new A.cpr(this))},
gwL(){var w=this
return w.ga3Y()&&w.gcJ9()&&w.r&&w.y&&w.x.a===0}}
A.Wu.prototype={
R(){var w,v=new A.uE(-0.25,0.4,135,B.aYT,$.aw())
v.f=200
w=new C.vj()
$.vN()
w.fZ(0)
return new A.aFz(v,w)}}
A.aFz.prototype={
gD2(d){var w=this.d
if(w===$){this.a.toString
w=D.o.F(Date.now(),1e5)
this.d=w}return w},
Z(){var w,v=this
v.a3()
w=v.a.e
if(w==null)w=A.h7a(!0,v.gD2(0),null)
v.e=w
v.r=A.hxm(w,v.x,!w.b)},
t(){var w=this.at
if(w!=null)w.a2(0)
this.a1()},
aeK(){var w=this.e
w===$&&C.c()
return this.r=A.hxm(w,this.x,!w.b)},
ay8(d,e){var w=this,v=w.at
if(v!=null)v.a2(0)
w.m(new A.et2(w,d,e))
w.at=C.cD(D.jU,new A.et3(w))},
b_O(){this.f.hb(135,0.4,B.aYT,-0.25)
this.m(new A.esY(this))},
cAF(d){var w,v,u=this.e
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
az1(d){var w=this.e
w===$&&C.c();++w.w
return new A.ey(!1,d,!1,"")},
c9t(d){return this.b_N(d)},
czU(d){var w
A:{if("main"===d){w=9400
break A}w=this.e
w===$&&C.c()
w=w.c
w===$&&C.c()
w=9100+D.d.bg(w.c,new A.et7(d))
break A}this.b_N(w)},
b7Y(){var w,v,u,t,s,r,q,p=this,o=p.x
if(o==="hand")return C.a([B.ePI],x.L)
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
q=r.vt(0,s)
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
b_N(d){var w,v,u,t,s,r=this
if(d===0)return
w=r.r
w===$&&C.c()
v=w.b.h(0,d)
if(r.x.length===0){r.m(new A.esN(r,d))
if(v!=null)r.ay8(v.a+": "+v.b,!0)
return}u=r.cAF(d)
w=r.x
if(w==="hand")if(d===9400){w=r.e
w===$&&C.c()
t=w.aK1()}else{w=r.e
w===$&&C.c()
t=r.az1(w.b?"Your hand is only for the main water valve.":"Your hand is for the main water valve. Parts are placed by picking them from the tray.")}else if(w==="wrench")if(u==null){w=r.e
w===$&&C.c()
t=r.az1(w.b?"Nothing to tighten.":"There is nothing to tighten there.")}else{w=r.e
w===$&&C.c()
t=w.bkF(u)}else if(u==null){w=r.e
w===$&&C.c()
t=r.az1(w.b?"Not there.":"That does not go there. Tap one of the glowing spots.")}else{s=r.e
s===$&&C.c()
t=s.UK(w,u)}w=t.a
if(w)A.rd()
else A.fJ(180,220,0.25,"square")
r.m(new A.esO(r,d))
w=w&&!t.c
r.ay8(t.b,w)
w=r.e
w===$&&C.c()
if(w.gwL()&&!r.as){r.as=!0
$.aW.x1$.push(new A.esP(r))}},
c9q(){var w,v=null
this.a.toString
w=this.c
w.toString
C.ch(v,v,!0,v,new A.esU(this,0),w,v,!0,!0,x.H)},
aZB(){this.m(new A.et0(this))
this.b_O()},
gcF5(){var w,v,u,t=C.a([],x.s)
for(w=0;w<11;++w){v=B.c8e[w]
u=this.e
u===$&&C.c()
u=u.c
u===$&&C.c()
if(D.d.b_(u.c,new A.et8(v)))t.push(v)}return t},
c6W(){var w,v,u,t,s=this.e
s===$&&C.c()
s=s.c
s===$&&C.c()
s=s.c
w=s.length
v=0
for(;v<w;++v){u=s[v]
if(!this.e.e.q(0,u.a)){t=this.e.e
t=D.d.cJ(u.d,t.gkZ(t))}else t=!1
if(t)return u}return null},
aVW(){var w,v,u,t=this,s=t.e
s===$&&C.c()
if(s.x.a!==0){s=s.c
s===$&&C.c()
s=s.c
w=C.T(s)
v=new C.cP(new C.Y(s,new A.esV(t),w.k("Y<1>")),new A.esW(),w.k("cP<1,m>")).aI(0,", ")
s=t.e
if(s.r)return new C.b5("\ud83d\udca7 Water is leaking at: "+v+". First turn the main water OFF: pick Hand and tap the main valve.","hand","main")
return new C.b5("\ud83d\udca7 It leaked at: "+v+". Pick the Wrench and tap it to tighten the joint. Then turn the water ON again to test.","wrench",s.x.gI(0))}if(!s.ga3Y()){u=t.c6W()
if(u==null)return B.f_N
if(u.f&&t.e.r)return B.f_g
s=u.b
w=B.aHL.h(0,s)
if(w==null)w=s
return new C.b5("Next: pick "+w+" from the tray, then tap "+u.c.toLowerCase()+" (the glowing spot). "+u.e,s,u.a)}s=t.e.c
s===$&&C.c()
s=s.c
w=C.T(s).k("Y<1>")
v=C.C(new C.Y(s,new A.esX(t),w),w.k("M.E"))
if(v.length!==0)return new C.b5("Everything is fitted. Now tighten each joint: pick the Wrench and tap "+D.d.gI(v).c.toLowerCase()+".","wrench",D.d.gI(v).a)
if(!t.e.r)return B.eYW
return B.f0h},
cyf(){var w,v,u,t,s=this,r={}
r.a=r.b=null
w=s.aVW()
r.b=w.b
r.a=w.c
s.m(new A.et4(r,s))
v=r.a
if(v!=null){if(v==="main")u=9400
else{v=s.e
v===$&&C.c()
v=v.c
v===$&&C.c()
u=9100+D.d.bg(v.c,new A.et5(r))}r=s.r
r===$&&C.c()
t=r.b.h(0,u)
if(t!=null)s.f.hb(70,0.3,t.c,-0.2)
s.m(new A.et6(s,u))}s.ay8(w.a,!0)},
ay7(d,e,f){var w,v=null,u=this.x===d,t=u?D.ay.j(0.25):D.c.j(0.07),s=C.n(14),r=u?D.ay:D.aX
r=C.L(r,D.r,u?2:1)
w=C.X(f,u?D.ay:D.ac,v,v,v,19)
return new C.D(G.oh,C.aA(v,C.p(v,C.B(C.a([w,D.bm,C.d(e,v,v,v,v,v,v,C.l(v,v,u?D.ay:D.c,v,v,v,v,v,v,v,v,12.5,v,v,D.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),D.m,v,D.e,D.i,0,v,v),D.f,v,v,new C.o(t,v,r,s,v,v,D.n),v,v,v,v,D.eZ,v,v,v),D.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new A.esR(this,u,d),v,v,v,v,v,v,!1,D.a3),v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.e
h===$&&C.c()
h=h.c
h===$&&C.c()
h=h.c
w=new C.Y(h,new A.et9(j),C.T(h).k("Y<1>")).gK(0)
h=j.e.c
h===$&&C.c()
v=j.r
v===$&&C.c()
u=j.y
t=j.z
s=j.Q
r=u!==0?v.b.h(0,u):i
v=A.K3(!1,i,j.f,new A.eta(j),i,s,u,r,i,new A.etb(),t,i,i,j.gc9r(),j.gc9s(),v,!1,i,i,i)
t=x.p
r=C.a([],t)
if(!j.e.b){u=D.aJ.j(0.12)
s=C.n(12)
q=C.L(D.aJ.j(0.6),D.r,1)
r.push(C.p(i,C.B(C.a([C.E(C.d("\ud83d\udc49 "+j.aVW().a,i,4,D.a1,i,i,i,B.fzE,i,i,i),1),D.bm,C.bI(B.fDn,i,j.gcye(),C.bo(i,i,i,i,i,B.fa8,D.km,i,i,i,i,i))],t),D.m,i,D.e,D.i,0,i,i),D.f,i,i,new C.o(u,i,q,s,i,i,D.n),i,i,i,D.eI,D.a_C,i,i,1/0))}if(j.x.length!==0&&j.b7Y().length!==0){u=C.a([],t)
for(s=j.b7Y(),q=s.length,p=0;p<s.length;s.length===q||(0,C.K)(s),++p){o={}
n=s[p]
o.a=null
o.a=n.a
m=new C.aP(12,12)
l=new C.ay(D.b_,1,D.r,-1)
u.push(C.aA(i,C.p(i,new C.y("\ud83d\udccd "+n.b,i,D.oO,i,i,i,i,i,i,i,i,i),D.f,i,i,new C.o(D.eP.j(0.35),i,new C.bG(l,l,l,l),new C.bh(m,m,m,m),i,i,D.n),i,i,i,i,B.a_D,i,i,i),D.y,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new A.etc(o,j),i,i,i,i,i,i,!1,D.a3))}r.push(new C.D(D.eI,C.bX(D.bG,u,D.br,i,6,6),i))}u=j.e
if(u.b)u="Real work: no hints. Build it in the right order."
else if(u.ga3Y())u="Everything is fitted. Tighten every joint, then turn the main water on to test."
else{u=j.e.c
u===$&&C.c()
u="Job: "+u.d}r.push(new C.bN(D.a5,i,i,C.d(u,i,2,D.a1,i,i,i,B.aUn,i,i,i),i))
r.push(D.N)
t=C.a([j.ay7("hand","Hand",B.aq3),j.ay7("wrench","Wrench",D.ol)],t)
for(u=j.gcF5(),s=u.length,p=0;p<u.length;u.length===s||(0,C.K)(u),++p){k=u[p]
q=B.aHL.h(0,k)
q.toString
t.push(j.ay7(k,q,Ah.apz))}r.push(new C.a4(i,52,C.cl(t,i,i,i,i,i,D.aL,!1),i))
return A.Iv(D.aJ,new A.etd(j,d),C.x(r,D.m,i,D.e,D.P,0,D.p),v,""+w+"/"+h.c.length+" fitted","Plumbing job: "+h.b,i)},
c3h(d){return C.bV(E.mE,null,new A.et_(this),d,!0,!0,!0,D.k7,!1,!1,x.H)}}
A.zc.prototype={}
A.la.prototype={}
A.Yb.prototype={}
A.awp.prototype={}
A.aVi.prototype={}
A.ey.prototype={
gjD(){return this.a}}
A.Y_.prototype={
cmX(d,e,f){var w,v,u,t,s,r,q=this,p=null,o="outlet",n="light",m="switch",l="gfci",k=q.a,j=new C.e6()
j.cZ(k)
w=j.ap(3)
if(d==null)v=k>=100&&D.o.F(k,5)>=3?D.o.F(k,5):w
else v=d
u=C.a([0,1,2],x.t)
D.d.e_(u,j)
t=3+j.ap(2)
switch(v){case 0:k=e==null?"Living room":e
q.c!==$&&C.aQ()
q.c=k
k=C.a([new A.la(u[0],o,p),new A.la(u[1],o,p),new A.la(5,n,t),new A.la(t,m,p)],x.B)
q.d!==$&&C.aQ()
q.d=k
break
case 1:k=e==null?"Bedroom":e
q.c!==$&&C.aQ()
q.c=k
k=C.a([new A.la(u[0],o,p),new A.la(u[1],o,p),new A.la(6,"fan",t),new A.la(t,m,p)],x.B)
q.d!==$&&C.aQ()
q.d=k
break
case 2:k=e==null?"Kitchen":e
q.c!==$&&C.aQ()
q.c=k
k=C.a([new A.la(u[0],l,p),new A.la(u[1],l,p),new A.la(5,n,t),new A.la(t,m,p)],x.B)
q.d!==$&&C.aQ()
q.d=k
break
case 3:k=e==null?"Laundry room":e
q.c!==$&&C.aQ()
q.c=k
k=u[0]
s=u[1]
r=j.ha()?"dryer4":"dryer3"
r=C.a([new A.la(k,"washer",p),new A.la(s,r,p),new A.la(5,n,t),new A.la(t,m,p)],x.B)
q.d!==$&&C.aQ()
q.d=r
k=r
break
default:k=e==null?"Kitchen with a range":e
q.c!==$&&C.aQ()
q.c=k
k=u[0]
s=j.ha()?"range4":"range3"
s=C.a([new A.la(k,s,p),new A.la(u[1],l,p),new A.la(5,n,t),new A.la(t,m,p)],x.B)
q.d!==$&&C.aQ()
q.d=s
k=s}if(f&&v<3){k[1]=new A.la(k[1].a,B.dnz[j.ap(5)],p)
k=q.d
k===$&&C.c()
k[3]=new A.la(k[3].a,B.dpg[j.ap(5)],p)}},
ganU(){var w,v,u=C.aV(x.S),t=this.d
t===$&&C.c()
w=t.length
v=0
for(;v<t.length;t.length===w||(0,C.K)(t),++v)u.M(0,t[v].a)
return u},
cXg(d){var w,v,u,t=this.d
t===$&&C.c()
w=t.length
v=0
for(;v<w;++v){u=t[v]
if(u.a===d)return u}return null},
fR(d){++this.f
return new A.ey(!1,d,!1,"")},
amy(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.d
g===$&&C.c()
w=g.length
v=h.x
u=0
for(;u<g.length;g.length===w||(0,C.K)(g),++u){t=g[u].a
s=A.j6(t)
if(s.e==="fan")r="fan"
else r=s.c?"ceiling":"wall"
v.n(0,t,r)}g=C.a([],x.t)
for(q=0;q<$.Ho().length;++q)g.push(q)
h.y.v(0,g)
h.z.v(0,h.ganU())
for(g=h.Q,w=x.S,u=0;u<3;++u){p=B.oD[u]
v=C.aV(w)
t=C.aV(w)
o=new A.awp(v,t)
o.d=o.e=o.a=!0
for(r=h.aqZ(p),n=r.length,m=0;m<r.length;r.length===n||(0,C.K)(r),++m)for(l=r[m]*10,k=0;k<6;++k)t.M(0,l+k)
for(t=h.ganU(),r=C.a6(t),n=new C.mt(t,t.r,r.k("mt<1>")),n.c=t.e,r=r.c,t=p+48;n.C();){l=n.d
if(l==null)l=r.a(l)
s=A.j6(l)
if(!s.c){j=s.d.a
j=j>=p&&j<=t}else j=!1
if(j)v.M(0,l)}g.n(0,p,o)}for(g=h.as,u=0;u<2;++u){i=g[u]
i.a=!0
i.b=3
i.d=i.c=!0}},
cL2(){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=k.d
j===$&&C.c()
w=j.length
v=0
for(;v<j.length;j.length===w||(0,C.K)(j),++v){u=j[v]
k.bhk(u.a,u.b)}for(w=j.length,t=x.S,s=x.N,r=k.at,v=0;v<j.length;j.length===w||(0,C.K)(j),++v){q=j[v].a
p=r.h(0,q)
if(p==null)continue
o=p.a
n=A.td(o)
if(n.w.length!==0)m=n.z
else{A:{if("outlet"===o){o=C.H([25,"ground",23,"white",21,"black"],t,s)
break A}if("gfci"===o){o=C.H([25,"ground",24,"white",22,"black"],t,s)
break A}if("switch"===o){o=C.H([25,"ground",21,"blackLine",22,"blackLoad"],t,s)
break A}o=C.H([53,"ground",52,"white",51,"black"],t,s)
break A}m=o}for(o=m.gdR(m),o=o.gaf(o);o.C();){l=o.gS(o)
k.bfE(q,l.b,l.a)}k.aJi(q)
k.aFv(q)}if(!k.ax)k.aK_()
for(w=j.length,v=0;v<j.length;j.length===w||(0,C.K)(j),++v){u=j[v]
if(D.d.q(B.lk,u.b)){t=u.a
k.bjo(t,"lamp")
k.bkZ(t)}}for(j=D.d.gaf(j),w=new C.eR(j,new A.cuo());w.C();){t=j.gS(0).a
k.aGx(t)
k.aGx(t)}},
aMt(d){var w,v,u=A.j6(d).d.a,t=C.a([],x.t)
for(w=0;v=$.Ho(),w<v.length;++w){v=v[w]
if(v>u&&v<64)t.push(w)}return t},
cV7(d,e){var w,v,u=this,t=u.x
if(t.aj(0,d))return u.fR("There is already a box at "+A.j6(d).b+".")
w=A.j6(d)
v=w.c
if(!v&&e!=="wall")return u.fR("That is a ceiling box. On the wall you use a plain wall box (the blue one with ears).")
if(v&&e==="wall")return u.fR("A wall box cannot go in the ceiling. Use a round ceiling box.")
if(w.e==="fan"&&e!=="fan"){if(!u.b)return u.fR('A fan is heavy and it shakes. It needs a box that says "fan rated". A plain ceiling box can let the fan fall.')
t.n(0,d,e);++u.f
return B.b0S}t.n(0,d,e)
t=v?"ceiling joist":"side of the stud"
return new A.ey(!0,w.b+": box fixed to the "+t+".",!1,"")},
cPA(d){var w,v=this
if(d<0||d>=$.Ho().length)return B.b0M
w=v.y
if(w.q(0,d))return v.fR("That stud already has a hole.")
if(v.x.a===0)return v.fR("Mount the boxes first. Then you know where the cable has to go and which studs need a hole.")
w.M(0,d)
return B.b0w},
cYl(d){var w,v,u,t,s=this,r=A.j6(d)
if(!s.x.aj(0,d))return s.fR("There is no box at "+r.b+". Mount the box first, then pull the cable to it.")
w=s.z
if(w.q(0,d))return s.fR("The cable is already there.")
v=s.aMt(d)
u=C.T(v).k("Y<1>")
t=C.C(new C.Y(v,new A.cuv(s),u),u.k("M.E"))
if(t.length!==0){w=D.o.V($.Ho()[D.d.gI(t)])
v=t.length
u=v===1?"it":"the studs"
return s.fR("The cable is stuck: the stud at "+w+" inches has no hole. Drill "+u+" first ("+v+" left on the way).")}w.M(0,d)
return new A.ey(!0,"Cable pulled from the panel to "+r.b+", through the studs and along the ceiling.",!1,"")},
gapd(){return this.ganU().cJ(0,new A.cuw(this))},
aqD(d){var w,v,u,t
for(w=this.Q,w=new C.cE(w,C.a6(w).k("cE<1,2>")).gaf(0);w.C();){v=w.d
u=v.b
if(u.a){t=v.a
t=d>=t&&d<=t+48}else t=!1
if(t)return u}return null},
cSo(d){var w,v,u=this
if(!u.gapd())return u.fR("Finish the rough-in first. The cable and the boxes must be in before the drywall hides the studs.")
if(!D.d.q(B.a5P,d))return B.b0j
if(!D.d.q(B.oD,d))return u.fR("The edge of the sheet would land between two studs. The sheet needs a stud under every edge, so there is nothing to screw it to. Start at the left corner (a stud) and move one sheet width (48 inches) at a time.")
w=u.Q
v=w.h(0,d)
if((v==null?null:v.a)===!0)return u.fR("There is already a sheet there.")
v=w.h(0,d)
if(v==null){v=x.S
v=new A.awp(C.aV(v),C.aV(v))}v.a=!0
w.n(0,d,v)
return B.b0v},
aqZ(d){var w,v,u,t=C.a([],x.t)
for(w=d+48,v=0;u=$.Ho(),v<u.length;++v){u=u[v]
if(u>=d&&u<=w)t.push(v)}return t},
cOt(d){var w,v,u=this,t=A.j6(d)
if(t.c)return u.fR("Ceiling fixtures do not need an opening in the wall.")
if(!u.x.aj(0,d))return u.fR("There is no box at "+t.b+".")
w=u.aqD(t.d.a)
if(w==null)return u.fR("There is no sheet over this box yet. Hang the sheet first, then cut the opening.")
v=w.b
if(v.q(0,d))return u.fR("The opening is already cut.")
v.M(0,d)
return B.b0F},
aLH(d,e,f){var w,v,u,t,s,r=this
if(f)return r.fR("Missed the stud! There is only air behind the sheet here. The screw would pull through the paper. Screw only where a stud is behind the sheet (every 16 inches).")
w=x.dD
v=C.C(new C.Y(B.oD,new A.cux(r,d),w),w.k("M.E"))
if(v.length===0)return r.fR("There is no sheet here yet.")
u=d*10+e
if(D.d.cJ(v,new A.cuy(r,u)))return r.fR("There is already a screw there.")
for(w=v.length,t=r.Q,s=0;s<v.length;v.length===w||(0,C.K)(v),++s)t.h(0,v[s]).c.M(0,u)
return B.b0H},
bpb(d,e){return this.aLH(d,e,!1)},
bqP(d){var w=this.Q.h(0,d)
if(w==null||!w.a)return!1
return D.d.cJ(this.aqZ(d),new A.cuA(w))},
gaE1(){return D.d.cJ(B.oD,new A.cun(this))},
gaE0(){var w=this.ganU()
return new C.Y(w,new A.cul(),C.a6(w).k("Y<cs.E>")).cJ(0,new A.cum(this))},
d_k(d){var w,v=this
if(!v.gaE1())return v.fR("Hang all the sheets first.")
if(!D.d.cJ(B.oD,v.gaqE()))return v.fR("Finish screwing every sheet to the studs first. Tape goes on a solid wall.")
w=v.as[d]
if(w.a)return v.fR("This seam already has tape.")
w.c=w.a=!0
return B.b0n},
cVb(d){var w,v=this,u=v.as[d]
if(!u.a)return v.fR("Tape first. The mud goes over the tape.")
if(!u.c)return v.fR("The last coat is still wet. Let it dry before the next coat.")
w=u.b
if(w>=3)return v.fR("Three coats are enough. Now sand it.");++w
u.b=w
u.c=!1
return new A.ey(!0,"Coat "+w+" of joint compound spread. Let it dry.",!1,"")},
cU1(){var w,v=this.as
if(D.d.cJ(v,new A.cut()))return B.b0C
for(w=0;w<2;++w)v[w].c=!0
return B.b0Q},
boW(d){var w=this,v=w.as[d]
if(v.b<3)return w.fR("Put on all three coats of mud first. Sanding now would just rub off the tape.")
if(!v.c)return w.fR("The mud is still wet. Let it dry first.")
if(v.d)return w.fR("Already sanded.")
v.d=!0
return B.b0k},
cXv(d){var w=this,v=w.Q.h(0,d)
if(v==null||!v.a)return w.fR("There is no sheet there.")
if(!w.gaE0())return w.fR("Cut the openings for the boxes before you paint. Otherwise the paint covers the boxes.")
if(!D.d.cJ(w.as,new A.cuu()))return w.fR("Sand the seams first. Paint shows every bump.")
if(v.e)return w.fR("This sheet is already painted.")
v.e=!0
return B.b0g},
gtb(){var w=this
return w.gaE1()&&D.d.cJ(B.oD,w.gaqE())&&w.gaE0()&&D.d.cJ(w.as,new A.cup())&&D.d.cJ(B.oD,new A.cuq(w))},
NN(){var w,v
for(w=this.at,w=new C.du(w,w.r,w.e);w.C();){v=w.d.b
v.a=this.ax&&!this.ay}},
c2t(d,e){if(d.c)return e==="light"||e==="fan"?"":"A ceiling box holds a light or a fan, not an outlet or a switch."
return D.d.q(B.lk,e)||D.d.q(B.jI,e)?"":"A light or a fan hangs from the ceiling. A wall box holds an outlet, a GFCI or a switch."},
bhk(d,e){var w,v,u,t,s,r=this,q=A.j6(d)
if(!r.gtb())return r.fR("Finish the drywall first. Devices go in after the walls are painted.")
w=r.x
if(!w.aj(0,d)||!r.z.q(0,d))return r.fR("There is no box with cable at "+q.b+".")
v=r.at
if(v.aj(0,d))return r.fR("There is already a device there. Pull it out first if you want to move it.")
if(r.ax&&!r.ay){++r.f
return B.b0o}u=r.c2t(q,e)
if(u.length!==0)return r.fR(u)
if(!(D.d.q(B.jI,e)&&q.e==="low"))t=!D.d.q(B.jI,e)&&!q.c&&q.e==="switch"
else t=!0
if(t){if(!r.b)return r.fR(D.d.q(B.jI,e)?"A switch goes about 48 inches from the floor, where a hand falls naturally. This box is down at outlet height.":"Outlets go low, about 16 inches from the floor. This box is up at switch height.");++r.f
r.cy.push("Wrong height at "+q.b+".")}t=e==="fan"
if(t&&w.h(0,d)!=="fan")if(!r.b)return r.fR("This box is not fan rated. A fan on it can fall. Take the box out and put in a fan-rated one.")
s=new A.CJ(C.U(x.S,x.N))
s.w=r.b
s.z=r.dx
s.y=!(t&&w.h(0,d)!=="fan")
s.a=r.ax&&!r.ay
v.n(0,d,new A.aVi(e,s))
if(e==="light")w="Light fixture"
else if(t)w="Ceiling fan"
else if(e==="gfci")w="GFCI outlet"
else w=e==="switch"?"Switch":A.a2z(e)
return new A.ey(!0,w+" is held up to "+q.b+". Turn the breaker OFF, then wire it.",!1,"")},
ap0(d){var w=this,v=w.at,u=v.h(0,d)
if(u==null)return B.b0s
if(w.ax&&!w.ay&&!u.b.x){if(w.b)return w.a2F()
return w.a2U()}v.W(0,d)
w.CW.W(0,d)
w.cx.W(0,d)
w.ch.W(0,d)
return B.b0K},
a2U(){++this.r;++this.f
return B.b0I},
a2F(){var w,v,u=this;++u.r;--u.e
u.ax=!1
u.NN()
w=u.e
if(w<=0){u.w=!0
return B.b0r}v=w===1?"life":"lives"
return new A.ey(!1,"ZAP! You touched a live wire and got a shock. The breaker is now off. "+w+" "+v+" left. Always turn the breaker OFF and test the wires first.",!0,"shock")},
bfE(d,e,f){var w,v,u,t,s=this,r=s.at.h(0,d)
if(r==null)return B.acE
s.NN()
w=A.td(r.a)
v=D.d.fG(w.f,new A.cur(f))
u=A.hCu(w,r.b,e,v,!0)
t=u==null
if(t&&s.dx)return B.b0i
if(t){if(!s.b&&!v.c.q(0,e)){++s.f
return new A.ey(!0,v.b+": fastened. Careful: "+C.w(w.r.$2(e,v))+" It will burn or trip the breaker when the power comes on.",!0,"")}return new A.ey(!0,v.b+": wire fastened.",!1,"")}if(D.a.a0(u,"SHOCK"))return s.a2F()
if(D.a.a0(u,"STOP"))return s.a2U();++s.f
return new A.ey(!1,u,!1,"")},
bkW(d,e){var w,v=this,u=v.at.h(0,d)
if(u==null)return B.WY
v.NN()
w=u.b
if(w.a&&w.c===0){if(v.b)return v.a2F()
return v.a2U()}w=w.b
w.bs(w,new A.cuB(e))
return B.b0P},
aJi(d){var w,v,u=this,t=u.at.h(0,d)
if(t==null)return B.acE
w=A.td(t.a)
v=t.b
if(!A.aiw(w,v))return u.fR("Every wire must be fastened first.")
if(u.ax&&!u.ay){if(u.b)return u.a2F()
return u.a2U()}v.c=1
return B.b0A},
aoH(d){var w,v=this,u=v.at.h(0,d)
if(u==null)return B.WY
if(v.ax&&!v.ay){if(v.b)return v.a2F()
return v.a2U()}w=u.b
w.c=0
w.d=!1
return B.b0G},
aFv(d){var w=this.at.h(0,d)
if(w==null||w.b.c!==1)return this.fR("Push the device into the box first.")
w.b.c=2
return B.b0J},
d_l(){var w,v,u,t,s,r,q,p,o,n=C.a([],x.fJ),m=this.d
m===$&&C.c()
w=m.length
v=this.at
u=0
for(;u<m.length;m.length===w||(0,C.K)(m),++u){t=m[u]
s=t.a
r=v.h(0,s)
q=t.b
p=A.td(q)
o=A.j6(s).b+": "+p.b
if(r==null||r.a!==q){n.push(new A.abq(o,A.fUh(p),B.djD,!0))
continue}s=A.fUh(p)
q=r.b
n.push(new A.abq(o,s,A.hbP(p,q),q.y))}return n},
d_m(){var w,v,u,t,s,r=C.aV(x.N),q=this.d
q===$&&C.c()
w=q.length
v=0
for(;v<q.length;q.length===w||(0,C.K)(q),++v)r.M(0,q[v].b)
q=C.a([],x.J)
for(r=C.eg(r,r.r,r.$ti.c),w=r.$ti.c;r.C();){u=r.d
u=B.aI1.h(0,u==null?w.a(u):u)
if(u==null)u=B.aB8
t=C.T(u)
s=new C.jf(u,0,2,t.k("jf<1>"))
s.of(u,0,2,t.c)
D.d.v(q,s)}return q},
apN(d){var w=this.at
return A.Ll(A.td(w.h(0,d).a),w.h(0,d).b)},
aK_(){var w=this
if(w.ay){w.ax=w.ay=!1
w.NN()
return B.b0y}w.ax=!w.ax
w.NN()
if(!w.ax)return B.b0q
return w.c9u()},
c9u(){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=C.a([],x.s),i=k.db
i.aa(0)
for(w=k.at,v=new C.cE(w,C.a6(w).k("cE<1,2>")).gaf(0),u=k.cx,t=!1,s=!1,r=!1;v.C();){q=v.d
p=q.b.b
if(p.c===0)continue
o=q.a
n=A.Ll(A.td(w.h(0,o).a),w.h(0,o).b)
p.d=p.c>=2
m=n.r
if(m!=="none"){i.n(0,o,m)
p.Q=m
r=!0}if(n.d)t=!0
if(n.e){p.x=!0
u.M(0,o)
s=!0}if(n.a!=="ok"&&!k.dx)j.push(A.j6(o).b+": "+n.b)}if(t){k.ay=!0
k.NN()
l=s?"BANG! Sparks, smoke and flames. ":"Snap! "
i=k.dx?"The breaker tripped.":l+" The breaker tripped. "+D.d.aI(j," ")+" Fix it, then flip the breaker OFF and ON again."
return new A.ey(!1,i,!0,s?"burn":"trip")}if(r)return new A.ey(!1,k.dx?"Power is on.":"Power is on, and something is wrong. "+D.d.aI(j," "),!0,"arc")
if(j.length!==0)return new A.ey(!0,"Power is on. "+D.d.aI(j," "),!0,"")
return B.b0D},
aGx(d){var w,v,u,t,s,r,q=this,p=q.at,o=p.h(0,d)
if(o==null||!D.d.q(B.jI,o.a)||o.b.c<2)return B.b0O
w=q.ch
if(w.q(0,d))w.W(0,d)
else w.M(0,d)
v=q.d
v===$&&C.c()
u=C.T(v).k("Y<1>")
t=C.C(new C.Y(v,new A.cus(d),u),u.k("M.E"))
if(t.length===0)return B.b0z
s=D.d.gI(t)
v=s.a
r=q.anH(v)
if(w.q(0,d)&&r){p=p.h(0,v)
if(p!=null)p.c=!0
return new A.ey(!0,(s.b==="fan"?"The fan spins":"The light turns on")+". The switch works.",!1,"")}if(w.q(0,d)){p=s.b
return new A.ey(!1,(p==="fan"?"The fan":"The light")+" did not come on. Check the breaker and the wires on the switch and on the "+p+".",!1,"")}return B.b0N},
a4W(d){var w,v=this.at.h(0,d)
if(v!=null){w=v.b
w=w.c<2||w.x}else w=!0
if(w)return!1
return this.apN(d).c},
anH(d){var w=this,v=w.cXg(d),u=v==null,t=u?null:v.c,s=!0
if(!u)if(t!=null)u=!(w.ax&&!w.ay)||!w.a4W(d)||!w.a4W(t)
else u=s
else u=s
if(u)return!1
return w.ch.q(0,t)},
bjo(d,e){var w,v,u,t,s=this,r="Nothing happens.",q=s.at.h(0,d)
if(q==null||!D.d.q(B.lk,q.a)||q.b.c<2)return s.fR("There is no finished outlet there to plug into.")
w=s.CW
if(w.aj(0,d))return s.fR("Something is already plugged in.")
v=B.dCs.h(0,e)
if(v!=null&&!v.q(0,q.a)){w=A.aQf(e)
if(e==="washerM")u="the washer outlet (5-20)."
else u=e==="dryerM"?"a dryer outlet (14-30 or 10-30).":"a range outlet (14-50 or 10-50)."
return s.fR("The plug does not fit. "+w+" has a big plug made for its own outlet: "+u)}w.n(0,d,e)
w=q.b
if(w.x)return B.b0t
t=s.apN(d)
if(s.ax&&!s.ay&&s.a4W(d)){q.c=!0
if(t.a!=="ok"){w=s.dx
u=w?A.aQf(e)+" runs.":A.aQf(e)+" runs, but this outlet is NOT safe. "+t.b
return new A.ey(!0,u,!w,"")}return new A.ey(!0,A.aQf(e)+" runs. The outlet works.",!1,"")}if(!(s.ax&&!s.ay))return B.b0x
u=t.r
if(u!=="none"){s.db.n(0,d,u)
w.Q=u
w=s.dx?r:A.aQf(e)+" does not run. "+t.b
return new A.ey(!1,w,!0,u==="fire"?"burn":"arc")}return new A.ey(!1,s.dx?r:"Nothing happens. "+t.b,!0,"")},
bkZ(d){if(this.CW.W(0,d)==null)return B.WY
return B.b0p},
bj9(d){var w,v=this
if(d>=0){w=v.d
w===$&&C.c()
w=d>=w.length}else w=!0
if(w)return 2
if(v.r9(d))return 2
w=v.d
w===$&&C.c()
return v.at.h(0,w[d].a)==null?0:1},
r9(d){var w,v,u,t=this
if(d>=0){w=t.d
w===$&&C.c()
w=d>=w.length}else w=!0
if(w)return!0
w=t.d
w===$&&C.c()
v=w[d]
w=v.a
u=t.at.h(0,w)
if(u==null||!A.h7C(v.b,u.a)||u.b.c<2)return!1
return t.apN(w).a==="ok"},
gblp(){var w,v,u,t,s,r,q,p,o,n=this.d
n===$&&C.c()
w=n.length
v=this.at
u=0
for(;u<n.length;n.length===w||(0,C.K)(n),++u){t=n[u]
s=t.a
r=v.h(0,s)
if(r!=null){q=t.b
p=r.a
o=!0
if(q!==p)if(!(D.d.q(B.lk,q)&&D.d.q(B.lk,p)))if(!(D.d.q(B.jI,q)&&D.d.q(B.jI,p)))if(q==="light"||q==="fan")q=p==="light"||p==="fan"
else q=!1
else q=o
else q=o
else q=o
q=!q||r.b.c<2}else q=!0
if(q)return!1
if(A.Ll(A.td(v.h(0,s).a),v.h(0,s).b).a!=="ok")return!1}return!0},
gaFN(){var w,v,u,t,s,r,q,p,o,n=this.d
n===$&&C.c()
w=n.length
v=this.at
u=0
for(;u<n.length;n.length===w||(0,C.K)(n),++u){t=n[u]
s=t.a
r=v.h(0,s)
if(r!=null){q=t.b
p=r.a
o=!0
if(q!==p)if(!(D.d.q(B.lk,q)&&D.d.q(B.lk,p)))if(!(D.d.q(B.jI,q)&&D.d.q(B.jI,p)))if(q==="light"||q==="fan")q=p==="light"||p==="fan"
else q=!1
else q=o
else q=o
else q=o
q=!q||r.b.c<2}else q=!0
if(q)return!1
if(A.Ll(A.td(v.h(0,s).a),v.h(0,s).b).a!=="ok")return!1
s=t.b
if(D.d.q(B.lk,s)){if(!r.c)return!1}else if(!D.d.q(B.jI,s)&&!r.c)return!1}return!0}}
A.hN.prototype={}
A.Ox.prototype={
R(){var w,v=new A.uE(-0.12,0.14,130,B.abt,$.aw())
v.f=300
v.ch=0.7
v.at=0.05
w=new C.vj()
$.vN()
w.fZ(0)
return new A.aFG(v,w,C.U(x.S,x.i))}}
A.aFG.prototype={
gD2(d){var w=this.e
if(w===$){this.a.toString
w=D.o.F(Date.now(),1e5)
this.e=w}return w},
Z(){var w,v,u=this
u.a3()
w=u.a.f
if(w==null)w=A.cuk(null,null,!0,u.gD2(0),!0)
u.d=w
v=u.a
if(v.d)w.dx=!0
if(v.f!=null&&w.gtb())u.y=2
if(u.a.r){u.d.amy()
u.y=2}u.r=A.x3(u.d,new A.rV(u.z,u.as,!1))
w=u.f
w.ay=0
w.ch=1.1},
t(){var w=this.db
if(w!=null)w.a2(0)
this.a1()},
oo(d,e){var w,v,u,t=this,s=t.db
if(s!=null)s.a2(0)
t.m(new A.exD(t,d,e))
s=t.c
if(s!=null){w=x.w
s=C.aG(s,null,w).w
v=t.c
v.toString
u=s.a.a>C.aG(v,null,w).w.a.b}else u=!1
t.db=C.cD(C.dA(0,0,0,0,0,u?6:10),new A.exE(t))},
aeL(d){return this.oo(d,!1)},
ig(d){var w,v,u,t,s,r,q,p,o=this,n=d.a
if(n)A.rd()
else A.fJ(180,220,0.25,"square")
w=d.d
if(w==="shock"){C.fP()
o.m(new A.ewJ(o))
C.bP(D.m8,new A.ewK(o),x.P)}v=w==="burn"
if(v||w==="trip"||w==="arc"){u=o.d
u===$&&C.c()
u=u.db
u=new C.hG(u,u.r,u.e)
t=o.x
s=o.w
while(u.C()){r=u.d
q=s.gf2()
p=o.d.db.h(0,r)==="fire"?7:4.5
t.n(0,r,q/1000+p)}C.fP()
w=w==="arc"
u=w?95:150
t=w?500:300
A.fJ(u,t,0.5,w?"saw":"noise")
if(v){o.m(new A.ewL(o))
C.bP(D.eR,new A.ewM(o),x.P)}}w=o.d
w===$&&C.c()
o.r=A.x3(w,new A.rV(o.z,o.as,!1))
n=n&&!d.c
o.oo(d.b,n)
if(o.d.w&&o.c!=null)$.aW.x1$.push(new A.ewN(o))
if(o.d.gaFN()&&!o.cy){o.cy=!0
$.aW.x1$.push(new A.ewO(o))}},
b5u(){var w=this.CW,v=w?B.h3q:B.abt,u=w?205:130,t=w?3.141592653589793:-0.12
w=w?0.4:0.14
this.f.hb(u,w,v,t)},
c9x(d,e){var w,v,u,t,s
if(this.as>=0)return
w=this.f
v=w.d0k(d,e)
if(v==null||Math.abs(v.a)>78||Math.abs(v.b)>52)v=w.bg2(d,e,-47)
if(v==null)return
u=D.k.E(v.a,-70,70)
t=D.k.E(v.b,-46,48)
s=D.k.E(v.c,-6,100)
w.zN(Math.max(34,w.c*0.45),new A.q(u,t,s))
A.fJ(560,50,0.25,"tri")},
aUQ(){var w,v,u=this
u.CW=!1
w=u.f
w.at=0.05
w.ch=0.7
w.pe(!1)
w.ay=0
u.m(new A.ewY(u))
v=u.d
v===$&&C.c()
u.r=A.x3(v,new A.rV(u.z,u.as,!1))
w.hb(130,0.14,B.abt,-0.12)},
c45(){var w,v,u=this
u.CW=!1
w=u.f
w.pe(!1)
w.at=-0.95
w.ay=0
w.ch=1
u.m(new A.ex_(u))
v=u.d
v===$&&C.c()
u.r=A.x3(v,new A.rV(u.z,u.as,!1))
w.hb(82,-0.55,B.h2T,-0.12)},
bF3(){var w,v,u,t,s=this,r=s.d
r===$&&C.c()
r=r.CW
w=C.a6(r).k("cE<1,2>")
v=w.k("Y<M.E>")
u=C.C(new C.Y(new C.cE(r,w),new A.ewP(),v),v.k("M.E"))
if(u.length===0){s.aeL("Plug a TV into an outlet first. Then you can look behind it.")
return}t=A.j6(D.d.gI(u).a).d.a
s.CW=!1
r=s.f
r.pe(!1)
r.at=0.02
r.ay=0
r.ch=1.7
s.m(new A.ewQ(s))
s.r=A.x3(s.d,new A.rV(s.z,s.as,!1))
w=t<0?-1.4:1.4
r.hb(60,0.12,new A.q(t,-30,14),w)
s.oo("This is the back of the TV. Tap the TV or its plug to pull the plug.",!0)},
bF1(){var w,v,u=this
u.CW=!0
w=u.f
w.pe(!0)
u.m(new A.ewR(u))
v=u.d
v===$&&C.c()
u.r=A.x3(v,new A.rV(u.z,u.as,!1))
w.hb(190,0.3,B.h3r,3.141592653589793)},
a_h(d,e){var w,v,u,t,s=this,r=A.j6(e),q=s.f
q.pe(!1)
q.ay=0
s.m(new A.exg(s,e))
w=s.d
w===$&&C.c()
s.r=A.x3(w,new A.rV(s.z,s.as,!1))
v=A.aip(r,B.h1j)
w=r.c
u=w?20:15
t=w?1.2:0.3
q.hb(u,w?-0.12:0.26,v,t)},
Q2(){var w,v=this
v.m(new A.ewZ(v))
w=v.d
w===$&&C.c()
v.r=A.x3(w,new A.rV(v.z,v.as,!1))
v.b5u()},
c9A(d){var w,v,u,t,s,r,q=this
if(d===0){if(q.as<0)q.m(new A.exz(q))
return}w=q.as
if(w>=0)v=!(d>=5000&&d<5700)
else v=!1
if(v)return
if(d>=5000&&d<5700){v=d-5000
u=D.o.ao(v,100)
if(w!==u){if(q.z==="tester")q.aCI(u)
else{q.m(new A.exA(q))
q.a_h(0,u)}return}q.azG(u,D.o.F(v,100))
return}if(d>=1000&&d<1010)if(q.z==="drill"){w=q.d
w===$&&C.c()
q.ig(w.cPA(d-1000))
return}if(d>=2000&&d<2007){q.azJ(d-2000)
return}if(d>=3000&&d<3007){q.b3d(d-3000)
return}if(d>=6000&&d<6005){if(q.z==="sheet"){w=q.d
w===$&&C.c()
q.ig(w.cSo(B.a5P[d-6000]))}return}if(d>=6100&&d<6103){t=B.oD[d-6100]
if(q.z==="paint"){w=q.d
w===$&&C.c()
q.ig(w.cXv(t))
return}}if(d>=6200&&d<6202){s=d-6200
switch(q.z){case"tape":w=q.d
w===$&&C.c()
q.ig(w.d_k(s))
return
case"mud":w=q.d
w===$&&C.c()
q.ig(w.cVb(s))
return
case"sand":w=q.d
w===$&&C.c()
q.ig(w.boW(s))
return}}if(d>=7000&&d<7100){if(q.z==="screw"){w=q.d
w===$&&C.c()
v=d-7000
q.ig(w.bpb(D.o.ao(v,10),D.o.F(v,10)))}return}if(d>=7500&&d<7600){if(q.z==="screw"){w=q.d
w===$&&C.c()
v=d-7500
q.ig(w.aLH(D.o.ao(v,10),D.o.F(v,10),!0))}return}if(d===8000){w=q.d
w===$&&C.c()
q.ig(w.aK_())
return}if(d>=8200&&d<8207){w=q.d
w===$&&C.c()
q.ig(w.bkZ(d-8200))
return}if(d>=8100&&d<8107){w=q.d
w===$&&C.c()
w=w.CW.h(0,d-8100)
q.oo(A.aQf(w==null?"":w)+" is plugged in. To pull the plug, go behind it (the Behind the TV button) and tap the plug on the wall.",!0)
return}if(q.z==="look"){w=q.r
w===$&&C.c()
r=w.b.h(0,d)
if(r!=null){q.m(new A.exB(q,d))
q.oo(r.a+": "+r.b,!0)}}},
azJ(d){var w,v,u,t,s=this,r=s.d
r===$&&C.c()
if(r.at.aj(0,d)){r=s.z
r=r!=="tester"&&r!=="look"&&!D.d.q(B.zw,r)}else r=!1
if(r){s.m(new A.exw(s))
s.a_h(0,d)
return}r=s.z
switch(r){case"wall":case"ceiling":case"fanbox":w=s.d
s.ig(w.cV7(d,r==="fanbox"?"fan":r))
return
case"cable":s.ig(s.d.cYl(d))
return
case"knife":s.ig(s.d.cOt(d))
return
case"outlet":case"gfci":case"switch":case"split":case"v240four":case"v240three":case"v240only":case"isolated":case"dryer4":case"dryer3":case"range4":case"range3":case"washer":case"switch2p":case"switch3":case"switch4":case"switchsmart":case"switchcombo":case"light":case"fan":v=s.d.bhk(d,r)
s.ig(v)
if(v.a){r=s.d.at.h(0,d).b
w=s.d
r.f=!w.b&&!w.dx
s.z=""
s.a_h(0,d)}return
case"tester":s.aCI(d)
return}if(s.d.at.aj(0,d)){s.a_h(0,d)
return}if(s.d.gtb()&&s.d.x.aj(0,d)&&!s.d.at.aj(0,d)){u=A.j6(d)
s.m(new A.exx(s,d))
if(s.Q===d){if(u.c)r="a light or a fan"
else r=u.e==="switch"?"a switch":"an outlet"
r=u.b+": only what fits this box is in the tray now ("+r+"). Pick one."}else r="Box let go: the tray shows everything again."
s.oo(r,!0)
return}r=s.r
r===$&&C.c()
t=r.b.h(0,2000+d)
if(t!=null){s.m(new A.exy(s,d))
s.oo(t.a+": "+t.b,!0)}},
aCI(d){var w,v=this.d
v===$&&C.c()
w=v.ax&&!v.ay&&v.x.aj(0,d)&&this.d.z.q(0,d)
v=w?"The tester glows: this box is LIVE (120 volts). Turn the breaker OFF before you touch any wire.":"The tester stays dark: no power here. It is safe to work. (Test again after you turn the breaker off, every time.)"
this.oo(v,!w)
A.fJ(w?1400:500,120,0.25,"tri")},
b3d(d){var w,v=this,u=v.d
u===$&&C.c()
w=u.at.h(0,d)
if(w==null)return
if(D.d.q(B.zw,v.z)){v.ig(v.d.bjo(d,v.z))
return}u=v.z
if(u==="tester"){v.aCI(d)
return}if(u==="flip"){if(D.d.q(B.jI,w.a)&&w.b.c>=2)v.ig(v.d.aGx(d))
else v.aeL("Only a finished switch can be flipped.")
return}v.m(new A.exv(v))
v.a_h(0,d)},
azG(d,e){var w,v,u,t,s,r,q,p,o=this,n=o.d
n===$&&C.c()
w=n.at.h(0,d)
if(w==null)return
if(B.aRU.q(0,e))return
n=w.a
v=A.td(n)
u=v.f
t=C.T(u).k("Y<1>")
s=C.C(new C.Y(u,new A.exn(e),t),t.k("M.E"))
r=A.hCz(n,e)
n=r!=null
if(n){u=w.b
u=u.b.it(0,r)&&u.c===0}else u=!1
if(u){o.ig(o.d.bkW(d,r))
return}u=!1
if(s.length!==0){t=w.b
if(t.c===0){t=t.b
if(t.h(0,e)!=null)u=o.ax.length===0||t.h(0,e)===o.ax}}if(u){n=o.d
u=w.b.b.h(0,e)
u.toString
o.ig(n.bkW(d,u))
o.m(new A.exo(o))
return}if(n){n=w.b
n=n.c===0&&!n.b.it(0,r)&&D.d.b_(v.e,new A.exp(r))}else n=!1
if(n){o.m(new A.exq(o,r,d,e))
if(o.ax.length!==0)o.oo(D.d.fG(v.e,new A.exr(r)).b+": picked up. Now tap where it joins.",!0)
return}if(s.length!==0&&w.b.c===0){n=o.ax
if(n.length===0){o.aeL("Pick a wire below first, then tap "+D.d.gI(s).b+".")
o.m(new A.exs(o,d,e))
return}q=o.d.bfE(d,n,e)
o.ig(q)
if(q.a)o.m(new A.ext(o))
return}n=o.r
n===$&&C.c()
p=n.b.h(0,5000+d*100+e)
if(p!=null){o.m(new A.exu(o,d,e))
o.oo(p.a+": "+p.b,!0)}},
c9B(){var w,v,u,t,s,r,q=this,p=C.a([],x.ek)
for(w=0;w<7;++w){v=B.uR[w]
u=q.d
u===$&&C.c()
t=v.a
s=u.at.aj(0,t)
r=q.z
A:{if("wall"===r){u=!v.c&&!q.d.x.aj(0,t)
break A}if("ceiling"===r||"fanbox"===r){u=v.c&&!q.d.x.aj(0,t)
break A}if("cable"===r){u=q.d.x.aj(0,t)&&!q.d.z.q(0,t)
break A}if("knife"===r){u=!v.c&&q.d.x.aj(0,t)
break A}u=D.d.q(B.lk,r)||D.d.q(B.jI,q.z)
if(u){u=!v.c&&q.d.x.aj(0,t)&&!s
break A}if("light"===r||"fan"===r){u=v.c&&q.d.x.aj(0,t)&&!s
break A}u=D.d.q(B.zw,q.z)
if(u){u=s&&D.d.q(B.lk,q.d.at.h(0,t).a)
break A}if("tester"===r){u=q.d.x.aj(0,t)
break A}u=!1
break A}if(u)p.push(new C.z(t,v.b))}return p},
czV(){var w,v,u,t,s,r,q,p=null,o=this.c9B()
if(o.length===0)return D.bK
w=C.a([],x.p)
for(v=o.length,u=0;u<o.length;o.length===v||(0,C.K)(o),++u){t={}
s=o[u]
t.a=null
t.a=s.a
r=new C.aP(12,12)
q=new C.ay(D.b_,1,D.r,-1)
w.push(C.aA(p,C.p(p,new C.y("\ud83d\udccd "+s.b,p,D.oO,p,p,p,p,p,p,p,p,p),D.f,p,p,new C.o(D.eP.j(0.35),p,new C.bG(q,q,q,q),new C.bh(r,r,r,r),p,p,D.n),p,p,p,p,B.a_D,p,p,p),D.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new A.exH(t,this),p,p,p,p,p,p,!1,D.a3))}return new C.D(D.i7,C.bX(D.bG,w,D.br,p,6,6),p)},
bRA(){var w=null,v=this.c
v.toString
C.ch(w,w,!1,w,new A.ewX(this),v,w,!0,!0,x.H)},
c9v(){var w,v,u,t=this,s=null
if(t.a.c){w=t.d
w===$&&C.c()
v=w.d
v===$&&C.c()
v=v.length
u=A.hhq(w.f,w.r,v)}else u=0
if(u>0)A.akf(u)
w=t.c
w.toString
C.ch(s,s,!0,s,new A.ewU(t,u),w,s,!0,!0,x.H)},
ay9(d){this.m(new A.ex0(this,d))
this.aUQ()},
b_Q(){return this.ay9(!1)},
cF6(d){var w,v,u=new A.exI(A.j6(d)),t=C.a([],x.b)
for(w=0;w<30;++w){v=B.aAs[w]
if(u.$1(v.a))t.push(v)}return t},
SR(d,e,f,g){var w=null,v=f==null,u=v?D.dr:g.j(0.9),t=C.n(14),s=C.X(d,v?D.bU:D.w,w,w,w,17)
return new C.D(G.oh,C.aA(w,C.p(w,C.B(C.a([s,D.ec,C.d(e,w,1,w,w,w,w,C.l(w,w,v?D.bU:D.w,w,w,w,w,w,w,w,w,10.5,w,w,D.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),D.m,w,D.e,D.P,0,w,w),D.f,w,w,new C.o(u,w,w,t,w,w,D.n),w,44,w,w,D.km,w,w,w),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,!1,D.a3),w)},
bbG(d,e,f){return this.SR(d,e,f,D.ay)},
cI3(d,e){var w,v,u,t,s,r,q,p=this,o=null,n=x.p,m=C.a([p.SR(D.ko,"Back to the room",p.gb_P(),D.ac)],n),l=d.b
if(l.c===0){w=A.aiw(e,l)?"Push into the box":"Fasten every wire"
m.push(p.bbG(B.a2W,w,A.aiw(e,l)?new A.exK(p):o))}if(l.c===1)D.d.v(m,C.a([p.SR(D.pl,"Pull it out",new A.exL(p),D.ac),p.bbG(R.rM,"Cover on",new A.exM(p))],n))
n=l.c>=2
if(n&&l.x)m.push(p.SR(B.OV,"Take out the burnt one",new A.exN(p),D.c0))
else if(n)m.push(p.SR(B.OV,"Pull it out of the wall",new A.exO(p),D.ac))
if(!l.x)m.push(p.SR(D.jH,"Take it out, put in another",new A.exP(p,d),D.aJ))
if(l.c===0)for(n=D.d.gaf(e.e),l=new C.eR(n,new A.exQ(d));l.C();){w=n.gS(0)
v=w.c
u=new C.aP(14,14)
t=p.ax===w.a
s=t?D.b_:D.aX
r=new C.ay(s,t?3:1,D.r,-1)
s=w.b
q=w.d
m.push(new C.D(G.oh,C.aA(o,C.p(o,new C.cf(D.A,o,o,new C.y(s,o,new C.F(!0,q,o,o,o,o,12,D.u,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),o,o,o,o,o,o,o,o,o),o),D.f,o,o,new C.o(v,o,new C.bG(r,r,r,r),new C.bh(u,u,u,u),o,o,D.n),o,44,o,o,D.eZ,o,o,o),D.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new A.exR(p,w),o,o,o,o,o,o,!1,D.a3),o))}return m},
cva(d,e){var w,v,u,t,s,r,q=null,p=C.a([],x.p)
for(w=D.d.gaf(e.f),v=new C.eR(w,new A.exF(d));v.C();){u=w.gS(0)
t=D.eP.j(0.35)
s=new C.aP(10,10)
r=new C.ay(D.b_,1,D.r,-1)
p.push(new C.D(D.fv,C.aA(q,C.p(q,new C.cf(D.A,q,q,new C.y("\u279c "+u.b,q,B.fug,q,q,q,q,q,q,q,q,q),q),D.f,q,q,new C.o(t,q,new C.bG(r,r,r,r),new C.bh(s,s,s,s),q,q,D.n),q,32,q,q,B.amC,q,q,q),D.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new A.exG(this,u),q,q,q,q,q,q,!1,D.a3),q))}return p},
c9y(){var w,v,u,t,s,r,q,p,o,n=this,m=n.d
m===$&&C.c()
if(m.w)return"The job is over."
switch(n.y){case 0:m=m.d
m===$&&C.c()
w=C.T(m).k("Y<1>")
v=C.C(new C.Y(m,new A.ex1(n),w),w.k("M.E"))
if(v.length!==0){u=D.d.gI(v)
t=A.j6(u.a)
m=A.a2z(u.b)
if(t.c)w=t.e==="fan"?"fan box":"ceiling box"
else w="wall box"
return"Mount a box at "+t.b+" ("+m.toLowerCase()+" goes here): pick a "+w+", then tap the glowing spot."}m=n.d.d
m===$&&C.c()
w=C.T(m).k("Y<1>")
s=C.C(new C.Y(m,new A.ex2(n),w),w.k("M.E"))
if(s.length!==0){t=D.d.gI(s).a
m=n.d.aMt(t)
r=new C.Y(m,new A.ex3(n),C.T(m).k("Y<1>")).gK(0)
return r>0?"The cable comes from the panel on the right. Pick the drill and tap each stud on the way to "+A.j6(t).b+" ("+r+" left).":"Pick the cable roll and tap "+A.j6(t).b+"."}return"Rough-in done! Open 2 Drywall."
case 1:if(!m.gapd())return"Finish the rough-in first (tab 1). Drywall hides the wires."
if(!n.d.gaE1())return"Pick a drywall sheet and tap a stud edge to hang it. Three sheets cover the wall."
if(!n.d.gaE0())return"Pick the drywall saw and tap each box to cut its opening."
if(!D.d.cJ(B.oD,n.d.gaqE()))return"Pick the screw gun and put a screw in every glowing spot on the studs."
if(D.d.b_(n.d.as,new A.ex6()))return"Pick the tape and tap each seam between two sheets."
if(D.d.b_(n.d.as,new A.ex7()))return D.d.b_(n.d.as,new A.ex8())?'The mud is wet. Press "Let it dry", then the next coat.':"Pick the mud and tap each seam. It needs three coats, with drying in between."
if(D.d.b_(n.d.as,new A.ex9()))return D.d.b_(n.d.as,new A.exa())?'Press "Let it dry", then sand.':"Pick the sander and tap each seam."
if(!n.d.gtb())return"Pick the roller and paint each sheet."
return"Drywall done! Open 3 Devices."
default:if(!m.gtb())return"Finish the drywall first (tab 2)."
m=n.d.d
m===$&&C.c()
w=C.T(m).k("Y<1>")
q=C.C(new C.Y(m,new A.exb(n),w),w.k("M.E"))
if(q.length!==0){u=D.d.gI(q)
return"The breaker being on is not the end: the job is done only when every device is in and wired. Tap the box at "+A.j6(u.a).b+" (small red frame, blinking red dot): the tray then shows only what fits it. Put in the "+A.a2z(u.b).toLowerCase()+". ("+C.w(new A.exe().$1(new C.N(q,new A.exc(),C.T(q).k("N<1,G>"))))+" still need a device.)"}m=n.d.d
m===$&&C.c()
w=C.T(m).k("Y<1>")
p=C.C(new C.Y(m,new A.exd(n),w),w.k("M.E"))
if(p.length!==0)return"Tap "+A.j6(D.d.gI(p).a).b+" to work on it: breaker OFF, wires, push in, cover on."
m=n.d
if(!m.ax)return"Turn the breaker ON (tap the panel or the breaker button) and test."
m=m.d
m===$&&C.c()
w=C.T(m).k("Y<1>")
o=C.C(new C.Y(m,new A.ex4(n),w),w.k("M.E"))
if(o.length!==0)return"Pick the TV or the lamp and plug it into "+A.j6(D.d.gI(o).a).b+" to test it."
m=n.d.d
m===$&&C.c()
return"Flip the wall switch to test the "+(D.d.b_(m,new A.ex5())?"fan":"light")+"."}},
B(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this,a3=null,a4=a2.Q,a5=a4>=0&&a2.y===2?a2.cF6(a4):B.d66[a2.y]
a4=x.w
w=C.aG(a6,a3,a4).w.a.a>C.aG(a6,a3,a4).w.a.b
a4=a2.as
if(a4>=0){v=a2.d
v===$&&C.c()
u=v.at.h(0,a4)}else u=a3
a4=u==null
t=a4?a3:A.td(u.a)
v=a2.y
s=a2.d
s===$&&C.c()
s=s.c
s===$&&C.c()
r=a2.r
r===$&&C.c()
q=a2.at
p=a2.ay
o=a2.ch
n=q!==0?r.b.h(0,q):a3
m=x.p
l=C.a([],m)
for(k=0;k<3;++k)l.push(new C.D(D.ND,new C.y(k<a2.d.e?"\u2764\ufe0f":"\ud83d\udda4",a3,D.Aw,a3,a3,a3,a3,a3,a3,a3,a3,a3),a3))
l.push(D.bm)
j=a2.d
if(j.ay)j=D.kj
else{j=j.ax
j=j?D.ek:D.dY}j=j.j(0.95)
i=C.n(16)
h=a2.d
g=h.ay
if(g)f=D.cG
else{f=h.ax
f=f?D.c0:D.ba}f=C.L(f,D.r,1.4)
if(g)h="TRIPPED: tap to reset"
else{h=h.ax
h=h?"Breaker ON":"Breaker OFF"}l.push(C.aA(a3,C.p(a3,C.d(h,a3,a3,a3,a3,a3,a3,B.fqW,a3,a3,a3),D.f,a3,a3,new C.o(j,a3,f,i,a3,a3,D.n),a3,a3,a3,a3,D.rG,a3,a3,a3),D.y,!1,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,new A.ey2(a2),a3,a3,a3,a3,a3,a3,!1,D.a3))
l=C.a([C.B(l,D.m,a3,D.e,D.P,0,a3,a3)],m)
j=a2.CW
i=j?"In front":"Behind the wall"
h=j?H.ap4:H.ap3
j=C.a([A.uo(i,D.bq,h,j,j?a2.gbT8():a2.gbF0()),D.am,A.uo("Look up",D.b_,B.bQl,!1,a2.gc44()),D.am,A.uo("Behind the TV",D.cG,A0.a2O,!1,a2.gbF2()),D.am],m)
if(!a4){i=u.b
D.d.v(j,C.a([A.uo("Labels",D.aJ,O.CA,i.f,new A.ey3(a2,u)),D.am,A.uo("Hints",D.ay,D.qA,i.e,new A.ey4(a2,u)),D.N],m))}r=A.K3(!1,a3,a2.f,new A.eyf(a2),a3,o,q,n,a3,a3,p,a3,a2.gc9w(),new A.eyh(a2),a2.gc9z(),r,!1,a3,l,j)
q=C.a([],m)
if(a4){a4=C.a([],m)
if(!w){p=C.a([],m)
for(k=0;k<3;++k){o=k<2?6:0
n=a2.y===k?D.ay.j(0.2):D.dr
l=new C.aP(12,12)
e=new C.ay(a2.y===k?D.ay:D.bz,1,D.r,-1)
if(k===0)j=a2.d.gapd()
else{j=a2.d
j=k===1?j.gtb():j.gaFN()}j=j?"\u2705 ":""
i=B.aC8[k]
h=a2.y===k?D.ay:D.ac
p.push(new C.by(1,D.bb,C.aA(a3,C.p(a3,new C.cf(D.A,a3,a3,new C.y(j+i,a3,new C.F(!0,h,a3,a3,a3,a3,12,D.u,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3),a3,a3,a3,a3,a3,a3,a3,a3,a3),a3),D.f,a3,a3,new C.o(n,a3,new C.bG(e,e,e,e),new C.bh(l,l,l,l),a3,a3,D.n),a3,a3,a3,new C.Q(0,0,o,0),A8.NG,a3,a3,a3),D.y,!1,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,new A.eyi(a2,k),a3,a3,a3,a3,a3,a3,!1,D.a3),a3))}p=C.a([C.B(p,D.m,a3,D.e,D.i,0,a3,a3),D.am],m)
if(!a2.d.b){o=D.aJ.j(0.1)
n=C.n(10)
l=C.L(D.aJ.j(0.4),D.r,1)
p.push(C.p(a3,C.d("\ud83d\udc49 "+a2.c9y(),a3,2,D.a1,a3,a3,a3,B.fsw,a3,a3,a3),D.f,a3,a3,new C.o(o,a3,l,n,a3,a3,D.n),a3,a3,a3,a3,D.ck,a3,a3,1/0))}else p.push(B.fTk)
p.push(D.am)
D.d.v(a4,p)
w=!1}p=C.a([],m)
if(w){o=D.ay.j(0.2)
n=C.n(14)
l=C.L(D.ay,D.r,1)
j=a2.y
if(j===0)j=a2.d.gapd()
else{i=a2.d
j=j===1?i.gtb():i.gaFN()}j=j?"\u2705 ":""
p.push(new C.D(G.oh,C.aA(a3,C.p(a3,C.at(C.d(j+B.aC8[a2.y],a3,a3,a3,a3,a3,a3,B.fxg,a3,a3,a3),a3,a3,a3),D.f,a3,a3,new C.o(o,a3,l,n,a3,a3,D.n),a3,a3,a3,a3,D.eZ,a3,a3,a3),D.y,!1,B.hlO,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,new A.eyj(a2),a3,a3,a3,a3,a3,a3,!1,D.a3),a3))}if(a2.y<2&&!a2.d.gtb())p.push(new C.D(G.oh,C.aA(a3,C.p(a3,B.bbl,D.f,a3,a3,new C.o(D.dF,a3,a3,C.n(14),a3,a3,D.n),a3,a3,a3,a3,D.eZ,a3,a3,a3),D.y,!1,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,new A.eyk(a2),a3,a3,a3,a3,a3,a3,!1,D.a3),a3))
if(a2.Q>=0&&a2.y===2){o=D.b_.j(0.18)
n=C.n(14)
l=C.L(D.b_,D.r,1)
p.push(new C.D(G.oh,C.aA(a3,C.p(a3,C.at(C.d("\u2715 "+A.j6(a2.Q).b,a3,a3,a3,a3,a3,a3,B.fkz,a3,a3,a3),a3,a3,a3),D.f,a3,a3,new C.o(o,a3,l,n,a3,a3,D.n),a3,a3,a3,a3,D.eZ,a3,a3,a3),D.y,!1,B.hm3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,new A.eyl(a2),a3,a3,a3,a3,a3,a3,!1,D.a3),a3))}for(o=a5.length,d=0;d<a5.length;a5.length===o||(0,C.K)(a5),++d){a0=a5[d]
n=a0.a
l=a2.z===n?D.ay.j(0.25):D.c.j(0.07)
j=new C.aP(14,14)
n=a2.z===n
i=n?D.ay:D.aX
e=new C.ay(i,n?2:1,D.r,-1)
i=n?D.ay:D.ac
i=C.X(a0.c,i,a3,a3,a3,19)
n=n?D.ay:D.c
p.push(new C.D(G.oh,C.aA(a3,C.p(a3,new C.ca(D.aL,D.e,D.i,D.m,a3,D.p,a3,0,C.a([i,D.bm,new C.y(a0.b,a3,new C.F(!0,n,a3,a3,a3,a3,12.5,D.H,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3),a3,a3,a3,a3,a3,a3,a3,a3,a3)],m),a3),D.f,a3,a3,new C.o(l,a3,new C.bG(e,e,e,e),new C.bh(j,j,j,j),a3,a3,D.n),a3,a3,a3,a3,D.eZ,a3,a3,a3),D.y,!1,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,new A.eym(a2,a0),a3,a3,a3,a3,a3,a3,!1,D.a3),a3))}if(a2.y===1)p.push(new C.D(G.oh,C.aA(a3,C.p(a3,B.bbd,D.f,a3,a3,new C.o(D.dY,a3,a3,C.n(14),a3,a3,D.n),a3,a3,a3,a3,D.eZ,a3,a3,a3),D.y,!1,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,new A.eyn(a2),a3,a3,a3,a3,a3,a3,!1,D.a3),a3))
a4.push(new C.a4(a3,52,C.cl(p,a3,B.hlP,a3,a3,a3,D.aL,!1),a3))
if(a2.z.length!==0)a4.push(a2.czV())
D.d.v(q,a4)}else if(w){t.toString
a4=C.a([new C.a4(a3,44,C.cl(a2.cI3(u,t),a3,a3,a3,a3,a3,D.aL,!1),B.hmo)],m)
if(u.b.c===0&&a2.ax.length!==0)D.d.v(a4,C.a([D.am,new C.a4(a3,32,C.cl(a2.cva(u,t),a3,a3,a3,a3,a3,D.aL,!1),B.hlR)],m))
D.d.v(q,a4)}else{a4=C.a([],m)
p=u.b
if(p.c===0)for(o=D.d.gaf(t.e),n=new C.eR(o,new A.ey5(u)),l=p.b;n.C();){j=o.gS(0)
i=j.c
h=new C.aP(14,14)
g=a2.ax
f=j.a
g=g===f
a1=g?D.b_:D.aX
e=new C.ay(a1,g?3:1,D.r,-1)
a1=C.a([],m)
if(l.it(0,f))a1.push(new C.D(D.NE,C.X(D.e6,j.d,a3,a3,a3,17),a3))
g=j.b
f=j.d
a1.push(new C.y(g,a3,new C.F(!0,f,a3,a3,a3,a3,12.5,D.u,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3),a3,a3,a3,a3,a3,a3,a3,a3,a3))
a4.push(C.aA(a3,C.p(a3,new C.ca(D.aL,D.e,D.P,D.m,a3,D.p,a3,0,a1,a3),D.f,a3,a3,new C.o(i,a3,new C.bG(e,e,e,e),new C.bh(h,h,h,h),a3,a3,D.n),a3,a3,a3,a3,D.ys,a3,a3,a3),D.y,!1,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,new A.ey6(a2,u,j),a3,a3,a3,a3,a3,a3,!1,D.a3))}a4=C.a([C.bX(D.bG,a4,D.br,a3,6,8)],m)
if(p.c===0&&a2.ax.length!==0){o=C.a([],m)
for(n=D.d.gaf(t.f),l=new C.eR(n,new A.ey7(u));l.C();){j=n.gS(0)
i=D.eP.j(0.35)
h=new C.aP(12,12)
e=new C.ay(D.b_,1,D.r,-1)
o.push(C.aA(a3,C.p(a3,new C.y("\u279c "+j.b,a3,D.oO,a3,a3,a3,a3,a3,a3,a3,a3,a3),D.f,a3,a3,new C.o(i,a3,new C.bG(e,e,e,e),new C.bh(h,h,h,h),a3,a3,D.n),a3,a3,a3,a3,B.a_D,a3,a3,a3),D.y,!1,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,new A.ey8(a2,j),a3,a3,a3,a3,a3,a3,!1,D.a3))}a4.push(new C.D(D.jB,C.bX(D.bG,o,D.br,a3,6,6),a3))}a4.push(D.N)
o=C.a([A.qw("Back to the room",D.ko,a2.gb_P(),D.ac),D.ad],m)
if(p.c===0){t.toString
n=A.aiw(t,p)?"Push it into the box":"Fasten every wire"
o.push(A.qw(n,B.a2W,A.aiw(t,p)?new A.ey9(a2):a3,D.ay))}if(p.c===1)D.d.v(o,C.a([A.qw("Pull it out",D.pl,new A.eya(a2),D.ac),D.ad,A.qw("Cover on",R.rM,new A.eyb(a2),D.ay)],m))
n=p.c>=2
if(n&&p.x)o.push(A.qw("Take out the burnt one",B.OV,new A.eyc(a2),D.c0))
else if(n)o.push(A.qw("Pull it out of the wall",B.OV,new A.eyd(a2),D.ac))
a4.push(C.B(o,D.m,a3,D.e,D.i,0,a3,a3))
if(!p.x)D.d.v(a4,C.a([D.N,C.B(C.a([A.qw("Take it out and put in a different "+(D.d.q(B.jI,u.a)?"switch":"one"),D.jH,new A.eye(a2,u),D.aJ)],m),D.m,a3,D.e,D.i,0,a3,a3)],m))
D.d.v(q,a4)}a4=C.a([A.Iv(D.ay,new A.eyg(a2,a6),C.x(q,D.m,a3,D.e,D.P,0,D.p),r,"Phase "+(v+1)+"/3",s+" job",a3)],m)
if(a2.cx)a4.push(C.bT(0,C.e_(C.p(a3,a3,D.f,B.ajc,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3),!0,a3),0,0,0))
return new C.an(D.a_,a3,D.ab,D.t,a4,a3)},
ctv(d){var w=this.d
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
break A}w=D.d.q(B.zw,this.z)
if(w){w="Tap a finished outlet to plug it in."
break A}w="Tap a glowing box to put it there."
break A}this.oo(w,!0)},
ciz(d){return C.bV(E.mE,null,new A.exm(this,d),d,!0,!0,!0,D.k7,!1,!1,x.H)}}
A.rV.prototype={}
A.rt.prototype={
a6(){return"FaultKind."+this.b}}
A.uK.prototype={}
A.MJ.prototype={}
A.cxK.prototype={
bB0(d,e,f){var w,v,u,t,s,r,q,p=this,o=new C.e6()
o.cZ(p.a)
w=C.C(B.dgT,x.eP)
D.d.e_(w,o)
v=C.aV(x.S)
u=C.a([],x.gw)
for(t=w.length,s=0;s<w.length;w.length===t||(0,C.K)(w),++s){r=w[s]
q=B.wP.h(0,r).e
if(v.q(0,q))continue
v.M(0,q)
u.push(new A.MJ(r,o.ap(3)))
if(u.length>=d)break}p.c!==$&&C.aQ()
p.c=u
p.aya()},
q5(d,e){var w=this.c
w===$&&C.c()
return D.d.b_(w,new A.cxP(e))},
aya(){var w,v,u,t,s=this,r=s.d,q=r.d
q.aa(0)
if(s.q5(0,B.a10))q.M(0,72)
if(s.q5(0,B.a11))q.M(0,75)
q=s.q5(0,B.Oi)
r.b=q
r.c=!q
r.w=s.q5(0,B.Oj)
r.x=s.q5(0,B.a15)
r.y=s.q5(0,B.a16)
r.z=s.q5(0,B.a14)
r.Q=s.q5(0,B.a17)
r.as=s.q5(0,B.a18)
r.at=s.q5(0,B.a13)
q=r.f
q.aa(0)
r=r.r
r.aa(0)
w=s.c
w===$&&C.c()
w=D.d.gaf(w)
v=new C.eR(w,new A.cxL())
while(v.C()){u=w.gS(0)
t=u.c
u=u.b
if(t)r.M(0,u)
else q.M(0,u)}},
gcJ7(){var w=this.c
w===$&&C.c()
return D.d.cJ(w,new A.cxN())},
gcQL(){var w=this.c
w===$&&C.c()
return new C.Y(w,new A.cxO(),C.T(w).k("Y<1>")).gK(0)},
cQp(d){var w,v,u,t,s,r,q,p=this.c
p===$&&C.c()
w=p.length
v=d===86
u=d===92
t=0
for(;t<p.length;p.length===w||(0,C.K)(p),++t){s=p[t]
r=s.a
q=!0
if(B.wP.h(0,r).e!==d)if(!(r===B.Oi&&v))r=r===B.Oj&&u
else r=q
else r=q
if(r)return s}return null},
b_R(d){++this.f
return new A.ey(!1,d,!1,"")},
c9C(){var w,v,u,t,s=this;++s.r;--s.e
for(w=s.d,v=w.d,w=w.e,u=0;u<4;++u){t=B.ayv[u]
if(!v.q(0,t))w.M(0,t)}w=s.e
if(w<=0){s.w=!0
return B.b0m}v=w===1?"life":"lives"
return new A.ey(!1,"ZAP! You touched a live wire and got a shock. All the breakers were knocked off. "+w+" "+v+" left. Turn the breaker OFF first.",!0,"shock")},
d09(d,e){var w,v,u,t,s=this
if(s.w)return B.b0h
if(D.d.q(B.ayv,e))return s.bFx(d,e)
w=s.cQp(e)
if(d==="inspect"){if(w==null||w.c)return B.b0l
return new A.ey(!0,"You look and test: "+B.wP.h(0,w.a).b,!1,"")}if(w==null||w.c)return new A.ey(!1,s.b?"Nothing needs fixing there.":"There is nothing wrong with this, so the "+C.w(B.SN.h(0,d))+' is not needed. Use "Look and test" on things to find the problem.',!1,"")
v=B.wP.h(0,w.a)
if(d!==v.c){++s.f
return new A.ey(!1,s.b?"That is not the right tool for this problem.":"The "+C.w(B.SN.h(0,d))+" does not fix this. "+v.b,!1,"")}u=v.f
if(u!==0){t=s.d
u=!t.d.q(0,u)&&!t.e.q(0,u)}else u=!1
if(u){if(s.b)return s.c9C()
return s.b_R("STOP! "+v.r+" The wires here are live (120 volts). Tap the breaker in the panel (with your hand) to switch it off.")}w.c=!0
s.aya()
return new A.ey(!0,v.d,!1,"")},
bFx(d,e){var w,v,u,t,s=this
if(d==="inspect"){w=s.d
if(w.d.q(0,e))w="This breaker has tripped: it sits in the middle (orange)."
else w=w.e.q(0,e)?"This breaker is switched OFF.":"This breaker is ON."
return new A.ey(!0,w,!1,"")}if(d!=="hand")return s.b_R(s.b?"Use your hand on a breaker.":"A breaker is switched with your hand, not with a "+C.w(B.SN.h(0,d))+".")
w=s.d
v=w.d
if(v.q(0,e)){w=s.c
w===$&&C.c()
u=C.T(w).k("Y<1>")
t=C.C(new C.Y(w,new A.cxM(e),u),u.k("M.E"))
if(t.length!==0){D.d.gI(t).c=!0
s.aya()
return new A.ey(!0,B.wP.h(0,D.d.gI(t).a).d,!1,"")}v.W(0,e)
return B.b0R}w=w.e
if(w.q(0,e)){w.W(0,e)
return B.b0L}w.M(0,e)
return B.b0B}}
A.ask.prototype={
R(){var w,v=new A.uE(-0.3,0.48,46,B.W_,$.aw())
v.f=80
w=new C.vj()
$.vN()
w.fZ(0)
return new A.aFK(v,w)}}
A.aFK.prototype={
gJ(){var w=this.d
w===$&&C.c()
return w},
gD2(d){var w=this.e
if(w===$){this.a.toString
w=D.o.F(Date.now(),1e5)
this.e=w}return w},
Z(){var w,v=this
v.a3()
w=v.gD2(0)
v.a.toString
w=A.hpu(!0,w)
v.d=w
v.r=A.ah0(w.d)},
t(){var w=this.ax
if(w!=null)w.a2(0)
this.a1()},
c9H(d,e){var w=this,v=w.ax
if(v!=null)v.a2(0)
w.m(new A.ezK(w,d,e))
w.ax=C.cD(D.jU,new A.ezL(w))},
b_S(){this.f.hb(46,0.48,B.W_,-0.3)
this.m(new A.ezz(this))},
c9G(d){var w,v,u=this
if(d===0)return
w=u.d
w===$&&C.c()
v=w.d09(u.x,d)
w=v.a
if(w)A.rd()
else A.fJ(180,220,0.25,"square")
if(v.d==="shock"){C.fP()
u.m(new A.ezE(u))
C.bP(D.m8,new A.ezF(u),x.P)}u.m(new A.ezG(u,d))
w=w&&!v.c
u.c9H(v.b,w)
w=u.d
if(w.w)$.aW.x1$.push(new A.ezH(u))
else if(w.gcJ7()&&!u.at){u.at=!0
$.aW.x1$.push(new A.ezI(u))}},
ciH(){var w=null,v=this.c
v.toString
C.ch(w,w,!1,w,new A.ezC(this),v,w,!0,!0,x.H)},
c9D(){var w,v,u=null,t=this.d
t===$&&C.c()
w=t.c
w===$&&C.c()
w=w.length
v=A.hhq(t.f,t.r,w)
A.akf(v)
w=this.c
w.toString
C.ch(u,u,!0,u,new A.ezy(this,v),w,u,!0,!0,x.H)},
axy(){this.m(new A.ezA(this))
this.b_S()},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.d
g===$&&C.c()
g=g.gcQL()
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
for(o=0;o<3;++o)p.push(new C.D(D.ND,new C.y(o<i.d.e?"\u2764\ufe0f":"\ud83d\udda4",h,D.Aw,h,h,h,h,h,h,h,h,h),h))
v=A.K3(!1,h,i.f,new A.ezS(i),h,s,u,r,h,new A.ezT(),t,h,h,i.gc9E(),i.gc9F(),v,!1,h,C.a([C.B(p,D.m,h,D.e,D.P,0,h,h)],q),h)
u=i.d.c
u===$&&C.c()
t=C.T(u)
t=new C.cP(new C.Y(u,new A.ezU(),t.k("Y<1>")),new A.ezV(),t.k("cP<1,m>")).aI(0,"  \xb7  ")
u=C.d("Customer: "+(t.length===0?"All fixed!":t),h,2,D.a1,h,h,h,B.aUn,h,h,h)
t=C.a([],q)
for(n=0;n<10;++n){m=B.dwD[n]
s=i.x===m?D.ay.j(0.25):D.c.j(0.07)
r=new C.aP(14,14)
p=i.x===m
l=p?D.ay:D.aX
k=new C.ay(l,p?2:1,D.r,-1)
l=B.dCr.h(0,m)
p=C.X(l,i.x===m?D.ay:D.ac,h,h,h,19)
l=B.SN.h(0,m)
l.toString
j=i.x===m?D.ay:D.c
t.push(new C.D(G.oh,C.aA(h,C.p(h,new C.ca(D.aL,D.e,D.i,D.m,h,D.p,h,0,C.a([p,D.bm,new C.y(l,h,new C.F(!0,j,h,h,h,h,12.5,D.H,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h),h,h,h,h,h,h,h,h,h)],q),h),D.f,h,h,new C.o(s,h,new C.bG(k,k,k,k),new C.bh(r,r,r,r),h,h,D.n),h,h,h,h,D.eZ,h,h,h),D.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new A.ezW(i,m),h,h,h,h,h,h,!1,D.a3),h))}g=C.a([A.Iv(D.aJ,new A.ezX(i,d),C.x(C.a([new C.bN(D.a5,h,h,u,h),D.N,new C.a4(h,52,C.cl(t,h,h,h,h,h,D.aL,!1),h)],q),D.m,h,D.e,D.P,0,D.p),v,""+g+"/"+w+" fixed","Service call",h)],q)
if(i.as)g.push(C.bT(0,C.e_(C.p(h,h,D.f,B.ajc,h,h,h,h,h,h,h,h,h,h),!0,h),0,0,0))
return new C.an(D.a_,h,D.ab,D.t,g,h)},
cDx(d){return C.bV(E.mE,null,new A.ezQ(this),d,!0,!0,!0,D.k7,!1,!1,x.H)},
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
$3$padding$size$viewPadding(d,e,f){return this.gJ().$3$padding$size$viewPadding(d,e,f)},
$3$life(d,e,f){return this.gJ().$3$life(d,e,f)},
$5$fall$life$size(d,e,f,g,h){return this.gJ().$5$fall$life$size(d,e,f,g,h)},
$3$blur(d,e,f){return this.gJ().$3$blur(d,e,f)},
$4$blur$shift(d,e,f,g){return this.gJ().$4$blur$shift(d,e,f,g)},
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
$4$vol(d,e,f,g){return this.gJ().$4$vol(d,e,f,g)},
$4$sweep(d,e,f,g){return this.gJ().$4$sweep(d,e,f,g)},
$4$iconOnly(d,e,f,g){return this.gJ().$4$iconOnly(d,e,f,g)},
$3$big(d,e,f){return this.gJ().$3$big(d,e,f)},
$5$color$on(d,e,f,g,h){return this.gJ().$5$color$on(d,e,f,g,h)},
$6$fs$h$radius$ring$w(d,e,f,g,h,i){return this.gJ().$6$fs$h$radius$ring$w(d,e,f,g,h,i)},
$4$shine(d,e,f,g){return this.gJ().$4$shine(d,e,f,g)},
$6$shine$sides(d,e,f,g,h,i){return this.gJ().$6$shine$sides(d,e,f,g,h,i)},
$4$r(d,e,f,g){return this.gJ().$4$r(d,e,f,g)},
$5$sides(d,e,f,g,h){return this.gJ().$5$sides(d,e,f,g,h)},
$7$caps$shine$sides(d,e,f,g,h,i,j){return this.gJ().$7$caps$shine$sides(d,e,f,g,h,i,j)},
$5$shine$split(d,e,f,g,h){return this.gJ().$5$shine$split(d,e,f,g,h)},
$1$target(d){return this.gJ().$1$target(d)},
$3$dist$pitch$target(d,e,f){return this.gJ().$3$dist$pitch$target(d,e,f)},
$7$endCaps$joints$shine$sides(d,e,f,g,h,i,j){return this.gJ().$7$endCaps$joints$shine$sides(d,e,f,g,h,i,j)},
$8$caps$inner$shine$sides(d,e,f,g,h,i,j,k){return this.gJ().$8$caps$inner$shine$sides(d,e,f,g,h,i,j,k)},
$6$joints$shine$sides(d,e,f,g,h,i){return this.gJ().$6$joints$shine$sides(d,e,f,g,h,i)},
$6$normal(d,e,f,g,h,i){return this.gJ().$6$normal(d,e,f,g,h,i)},
$2$dist$target(d,e){return this.gJ().$2$dist$target(d,e)},
$4$split(d,e,f,g){return this.gJ().$4$split(d,e,f,g)},
$4$alongX(d,e,f,g){return this.gJ().$4$alongX(d,e,f,g)},
$5$ends$shine(d,e,f,g,h){return this.gJ().$5$ends$shine(d,e,f,g,h)},
$2$col(d,e){return this.gJ().$2$col(d,e)},
$5$h$w(d,e,f,g,h){return this.gJ().$5$h$w(d,e,f,g,h)},
$7$r1$shine$sides(d,e,f,g,h,i,j){return this.gJ().$7$r1$shine$sides(d,e,f,g,h,i,j)},
$7$normal$twoSided(d,e,f,g,h,i,j){return this.gJ().$7$normal$twoSided(d,e,f,g,h,i,j)},
$6$shine$skip$split(d,e,f,g,h,i){return this.gJ().$6$shine$skip$split(d,e,f,g,h,i)},
$6$shine(d,e,f,g,h,i){return this.gJ().$6$shine(d,e,f,g,h,i)},
$6$taped(d,e,f,g,h,i){return this.gJ().$6$taped(d,e,f,g,h,i)},
$4$color(d,e,f,g){return this.gJ().$4$color(d,e,f,g)},
$5$shine$yaw(d,e,f,g,h){return this.gJ().$5$shine$yaw(d,e,f,g,h)},
$6$caps$sides(d,e,f,g,h,i){return this.gJ().$6$caps$sides(d,e,f,g,h,i)},
$5$lat$lon(d,e,f,g,h){return this.gJ().$5$lat$lon(d,e,f,g,h)},
$6$r1$sides(d,e,f,g,h,i){return this.gJ().$6$r1$sides(d,e,f,g,h,i)},
$7$normal$shine(d,e,f,g,h,i,j){return this.gJ().$7$normal$shine(d,e,f,g,h,i,j)},
$5$poster(d,e,f,g,h){return this.gJ().$5$poster(d,e,f,g,h)},
$4$w(d,e,f,g){return this.gJ().$4$w(d,e,f,g)},
$3$r(d,e,f){return this.gJ().$3$r(d,e,f)},
$6$ends$shine$split(d,e,f,g,h,i){return this.gJ().$6$ends$shine$split(d,e,f,g,h,i)},
$4$round(d,e,f,g){return this.gJ().$4$round(d,e,f,g)},
$5$col$round(d,e,f,g,h){return this.gJ().$5$col$round(d,e,f,g,h)},
$4$col(d,e,f,g){return this.gJ().$4$col(d,e,f,g)},
$4$yaw(d,e,f,g){return this.gJ().$4$yaw(d,e,f,g)},
$3$col(d,e,f){return this.gJ().$3$col(d,e,f)},
$1$pixelRatio(d){return this.gJ().$1$pixelRatio(d)},
$2$format$numChannels(d,e){return this.gJ().$2$format$numChannels(d,e)},
$2$alpha$numChannels(d,e){return this.gJ().$2$alpha$numChannels(d,e)},
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
$4$padToo(d,e,f,g){return this.gJ().$4$padToo(d,e,f,g)},
$9$shine(d,e,f,g,h,i,j,k,l){return this.gJ().$9$shine(d,e,f,g,h,i,j,k,l)},
$5$max$min(d,e,f,g,h){return this.gJ().$5$max$min(d,e,f,g,h)},
$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){return this.gJ().$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r)},
$2$f$r(d,e){return this.gJ().$2$f$r(d,e)},
$1$radius(d){return this.gJ().$1$radius(d)},
$4$gender$phone(d,e,f,g){return this.gJ().$4$gender$phone(d,e,f,g)},
$3$hint$prefix(d,e,f){return this.gJ().$3$hint$prefix(d,e,f)},
$3$helperText$prefixText(d,e,f){return this.gJ().$3$helperText$prefixText(d,e,f)},
$1$verifyUrls(d){return this.gJ().$1$verifyUrls(d)},
$2$wrapWidth(d,e){return this.gJ().$2$wrapWidth(d,e)}}
A.yb.prototype={
giU(d){return this.x}}
A.tU.prototype={}
A.aai.prototype={}
A.ib.prototype={
aHc(d,e,f){var w=this
return d>w.a-f&&d<w.b+f&&e>w.c-f&&e<w.d+f}}
A.cuj.prototype={
c9I(d){return-this.a.geb(0)/2+d*4},
a5w(d,e){var w,v,u=this.a
if(d<-u.geb(0)/2+6||d>u.geb(0)/2-6||e<6||e>u.gh4(0)-6)return!1
for(u=this.b,w=u.length,v=0;v<w;++v)if(u[v].aHc(d,e,9))return!1
return!0},
b_U(d,e,f){var w,v,u=e.a,t=f.a-u,s=e.b,r=f.b-s,q=Math.max(1,D.k.cO(Math.sqrt(Math.pow(t,2)+Math.pow(r,2))/2))
for(w=0;w<=q;++w){v=w/q
if(!this.a5w(u+t*v,s+r*v))return!1}return!0},
aZr(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=a0.a,f=h.a,e=D.k.V((g+f.geb(0)/2)/4),d=h.c
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
if(!h.a5w(-f.geb(0)/2+k,j))continue
i=Math.pow(-f.geb(0)/2+k-g,2)+Math.pow(j-e,2)
if(i<o){p=new C.z(n,l)
o=i}}if(p!=null)return p}return null},
ape(b9,c0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5=this,b6=1e9,b7=b5.aZr(b9),b8=b5.aZr(c0)
if(b7==null||b8==null)return C.a([b9,c0],x.f)
w=b8.a
v=b5.c9I(w)
u=b8.b
t=new C.z(v,u*4)
if(b5.b_U(0,b9,t))return C.a([b9,t],x.f)
v=b7.a
s=b5.d
s===$&&C.c()
r=b7.b
q=x.S
p=C.eD([v*s+r],q)
o=C.U(q,q)
n=x.i
m=C.H([v*s+r,0],q,n)
l=C.H([v*s+r,b5.bVj(v,r,b8)],q,n)
k=w*s+u
v=b5.a
r=p.$ti
q=r.k("mt<1>")
r=r.c
i=0
for(;;){if(p.a!==0){h=i+1
n=i<6000
i=h}else n=!1
if(!n){j=!1
break}g=p.e
if(g==null)C.ba(C.be("No elements"))
f=g.a
for(n=new C.mt(p,p.r,q),n.c=g;n.C();){e=n.d
d=e==null?r.a(e):e
e=l.h(0,d)
if(e==null)e=b6
a0=l.h(0,f)
if(e<(a0==null?b6:a0))f=d}if(f===k){j=!0
break}p.W(0,f)
a1=D.o.ec(f,s)
a2=D.o.F(f,s)
for(n=a2*4,e=a1*4,a3=-1;a3<=1;++a3)for(a0=a3===0,a4=!a0,a5=a1+a3,a6=a5*4,a7=a5-w,a8=-1;a8<=1;++a8){if(a0&&a8===0)continue
a9=a2+a8
b0=!0
if(a5>=0)if(a9>=0){b0=b5.c
b0===$&&C.c()
b0=a5>=b0||a9>=s||!b5.a5w(-v.geb(0)/2+a6,a9*4)}if(b0)continue
b0=!1
if(a4)if(a8!==0)b0=!b5.a5w(-v.geb(0)/2+a6,n)||!b5.a5w(-v.geb(0)/2+e,a9*4)
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
for(r=x.c5,q=new C.dy(b3,r),q=new C.bS(q,q.gK(0),r.k("bS<ak.E>")),r=r.k("ak.E");q.C();){n=q.d
if(n==null)n=r.a(n)
e=D.o.ec(n,s)
u.push(new C.z(-v.geb(0)/2+e*4,D.o.F(n,s)*4))}b4=C.a([D.d.gI(u)],w)
for(a5=0;a9=u.length-1,a5<a9;a5=a9){w=a5+1
for(;;){if(!(a9>w&&!b5.b_U(0,u[a5],u[a9])))break;--a9}b4.push(u[a9])}return b4},
bVj(d,e,f){return Math.sqrt(Math.pow(d-f.a,2)+Math.pow(e-f.b,2))}}
A.AF.prototype={}
A.bsQ.prototype={
bBg(d,e,f,g,h,i,j,k,l,m,n,o){var w,v,u,t,s=this.b
if(s!=null)for(w=this.as,v=1;v<s.length;++v){u=v-1
t=Math.sqrt(Math.pow(s[v].a-s[u].a,2)+Math.pow(s[v].b-s[u].b,2))
w.push(t)
this.at+=t}}}
A.aWZ.prototype={
avs(d){var w,v,u=d.geb(0),t=new A.bW1(d,u)
switch(d.c){case"living":w=t.$1(46)
return C.a([B.hpS,new A.AF(w.a,w.b,4,"Switching the ad on the big TV",!1,!0,!0,"ad")],x.h)
case"kitchen":return C.a([new A.AF(new C.z(-u/2+40,42),3.141592653589793,2.8,"Getting a drink from the fridge",!0,!1,!1,""),B.hpR],x.h)
case"bathroom":return B.dti
case"bedroom":v=t.$1(44)
return C.a([new A.AF(v.a,v.b,3.4,"Switching the ad on the TV",!1,!0,!0,"ad")],x.h)
case"hall":if(!this.a)return B.aBb
return C.a([new A.AF(new C.z(-d.geb(0)/2+80,90),3.141592653589793,3,"Looking at the left video wall",!1,!1,!0,""),new A.AF(B.exk,0,2.4,"Looking over the lounge and the logo carpet",!1,!1,!1,""),new A.AF(new C.z(d.geb(0)/2-80,90),3.141592653589793,3,"Looking at the right video wall",!1,!1,!0,"")],x.h)
default:return B.aBb}},
ad3(a0,a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=e.b.d
d===$&&C.c()
w=d[a0]
v=new A.cuj(w,A.imE(w))
v.c=D.k.cO(w.geb(0)/4)+1
v.d=D.k.cO(w.gh4(0)/4)+1
u=A.htv(w,a1)
t=u.a
s=u.c
d=e.d
r=d.length
q=a3.length===0?"Walking in":a3
d.push(A.bsR(a0,"",!1,q,-1,null,!1,!1,0.5,t.a,u.b,t.b))
for(q=e.avs(w),p=q.length,o=t,n=0;n<q.length;q.length===p||(0,C.K)(q),++n){m=q[n]
l=v.ape(o,m.a)
k=m.e
if(k)j=C.cV(m.d,"Having",0)
else j=!1
d.push(A.bsR(a0,"",j,"Walking",-1,l,!1,!1,0,0,0,0))
o=D.d.gak(l)
d.push(A.bsR(a0,m.w,k,m.d,-1,null,m.r,m.f,m.c,o.a,m.b,o.b))}if(a2!=null){i=A.htv(w,a2)
h=i.c
l=v.ape(o,i.a)
g=e.avs(w).length!==0&&D.d.gak(e.avs(w)).e
d.push(A.bsR(a0,"",g,"Walking to the next room",-1,l,!1,!1,0,0,0,0))
o=D.d.gak(l)
d.push(A.bsR(a0,"",g,"Opening the door",h,null,!1,!1,1.8,o.a,e.bOJ(w,h),o.b))}for(f=r;f<d.length;++f)d[f].ay=s},
aYc(d,e,f){return this.ad3(d,e,f,"")},
bOJ(d,e){var w,v=d.w[e].b
A:{if("left"===v){w=-1.5707963267948966
break A}if("right"===v){w=1.5707963267948966
break A}w=3.141592653589793
break A}return w},
b_T(){var w,v,u=this
if(u.a){u.ad3(5,10,9,"Walking into the hall")
u.b_V()
return}u.ad3(10,11,9,"Coming in through the front door")
u.aYc(9,10,5)
u.ad3(5,9,0,"Walking down the hall")
for(w=0;w<8;++w){v=B.d0_[w]
u.aYc(v,5,w===7?null:5)}u.b_V()},
b_V(){var w,v,u,t,s,r,q,p,o=this,n=o.c,m=Math.min(1,n/120)
for(w=o.d,v=w.length,u=0,t=0,s=0;s<v;++s){r=w[s]
if(r.b==null)u+=r.f*=m
else t+=r.at}q=t/Math.max(4,n-u)
for(n=q<=0,p=0,s=0;s<v;++s){r=w[s]
if(r.b!=null)r.f=n?0.1:Math.max(0.05,r.at/q)
r.ax=p
p+=r.f}o.e!==$&&C.aQ()
o.e=p},
bcG(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g={},f=this.e
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
return A.aud(!1,n,f.ay,p,f.w,0,f.r,o,0,!1,s,f.x,v,!1,!1,f.c,f.e,f.d)}v=new A.bW2(g)
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
return A.aud(!1,0,o.ay,"",o.w,0,o.r,-1,m/12,!1,!1,!1,f.a,!1,!0,v,p,s)}}
A.bak.prototype={
GL(d){var w=this.a
if(w!=null)this.ax=A.hBp(w,this.CW)},
aK8(){var w,v,u,t,s,r,q=this
if(!q.KX(q.f,q.r))return!1
for(w=6;w<=320;w+=6){v=Math.max(8,D.k.V(w/6)*3)
for(u=0;u<v;++u){t=u*2*3.141592653589793/v
s=q.f+Math.cos(t)*w
r=q.r+Math.sin(t)*w
if(!q.KX(s,r)){q.f=s
q.r=r
q.at=null
return!0}}}return!1},
KX(d,e){var w,v,u,t,s=this
if(d<s.b||d>s.c||e<s.d||e>s.e)return!0
for(w=s.ax,v=w.length,u=s.ay,t=0;t<v;++t)if(w[t].aHc(d,e,u))return!0
return!1},
aMq(d,e,f,g){var w,v,u,t,s,r,q,p,o=this,n=Math.sqrt(e*e+f*f)
if(n<0.000001)return o.x=!1
w=e/n
v=f/n
u=o.ch
t=o.z?1.9:1
s=115*u*t*Math.min(1,n)*g
r=o.f+w*s
q=o.r+v*s
p=!0
if(o.KX(r,q))if(!o.KX(r,o.r))q=o.r
else{p=!o.KX(o.f,q)
if(p)r=o.f}if(p){o.f=r
o.r=q
o.w=Math.atan2(w,v)
o.y=o.y+s/12}return o.x=p},
cQo(d){var w,v=this,u=v.Q
if(u<=0&&v.as<=0)return
w=v.as
u+=w*d
v.Q=u
v.as=w-560*d
if(u<=0)v.as=v.Q=0},
FN(d,e){var w,v,u,t=this,s=t.at
if(s==null)return!1
w=s.a-t.f
v=s.b-t.r
if(Math.sqrt(w*w+v*v)<4){t.at=null
return t.x=!1}u=t.aMq(0,w,v,e)
if(!u){t.at=null
t.x=!1}return u}}
A.akK.prototype={}
A.aqq.prototype={
R(){var w=x.N
return new A.beU(C.U(w,w),null,null)}}
A.beU.prototype={
gab4(){var w,v=this,u=v.Q
if(u===$){w=C.bm(null,D.m8,null,1,null,v)
v.Q!==$&&C.bE()
v.Q=w
u=w}return u},
t(){this.gab4().t()
this.bwE()},
cae(d){return this.m(new A.d9i(this,d))},
cCC(d){return this.m(new A.d9j(this,d))},
cCN(d){var w=this,v=w.w
if(v==null){w.m(new A.d9k(w))
return}w.m(new A.d9l(w,v,d))
w.gab4().iv(0,0)
C.eZ()},
b06(d,e,f,g){var w,v=null,u=e?D.ay.j(0.2):D.c.j(0.05),t=C.n(14),s=e?D.ay:D.bz
s=C.L(s,D.r,e?2:1)
w=C.X(f,e?D.ay:D.aC,v,v,v,17)
return C.E(C.aA(v,C.cY(v,C.B(C.a([w,D.bm,new C.ds(1,D.cn,C.d(d,v,v,v,v,v,v,C.l(v,v,e?D.ay:D.ac,v,v,v,v,v,v,v,v,12.5,v,v,D.H,v,v,!0,v,v,v,v,v,v,v,v),D.K,v,v),v)],x.p),D.m,v,D.b9,D.i,0,v,v),v,v,D.b5,new C.o(u,v,s,t,v,v,D.n),D.eH,v,v,v,v,D.rF,v,v,v),D.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,g,v,v,v,v,v,v,!1,D.a3),1)},
c2L(d){var w,v=null,u=A.huI(d),t=this.w===d,s=this.f.h(0,d),r=u.iQ()>0.5?D.au:D.c,q=t?D.b_:D.aX
q=C.L(q,D.r,t?3:1)
w=C.a([],x.V)
if(t)w.push(new C.ac(0,D.G,D.b_.j(0.5),D.I,14))
return C.aA(v,C.cY(v,C.B(C.a([C.X(s!=null?D.e6:A.i5w(d),r,v,v,v,20),Af.En,C.E(C.d(d,v,2,D.a1,v,v,v,C.l(v,v,r,v,v,v,v,v,v,v,v,12.5,v,v,D.u,v,1.15,!0,v,v,v,v,v,v,v,v),v,v,v),1)],x.p),D.m,v,D.e,D.i,0,v,v),v,v,D.b5,new C.o(u,v,q,B.b36,w,v,D.n),D.h5,v,58,v,D.ct,B.bzS,v,v,v),D.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new A.d9e(this,d),v,v,v,v,v,v,!1,D.a3)},
ciN(d){var w,v,u,t,s,r=this,q=null,p=A.i7m(d),o=C.a([],x.s)
for(w=r.f,w=new C.cE(w,C.a6(w).k("cE<1,2>")).gaf(0);w.C();){v=w.d
if(v.b===d)o.push(v.a)}w=r.w==null
if(!w)u=D.b_.j(0.7)
else u=o.length!==0?p:D.bz
u=C.L(u,D.r,!w||o.length!==0?2:1)
t=C.a([D.c.j(0.9),p],x.O)
s=C.L(D.hy,D.r,1)
t=C.a([C.p(q,C.at(C.p(q,q,D.f,D.aS,q,q,q,2.5,q,q,q,q,q,10),q,q,q),D.f,q,q,new C.o(q,q,s,q,q,new C.c_(D.A,0.5,D.x,q,0,t,q,q),D.a6),q,22,q,q,q,q,q,22),D.ad,C.E(C.d(d,q,3,D.a1,q,q,q,B.fry,q,q,q),1)],x.p)
if(o.length!==0)t.push(C.aA(q,B.ept,D.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new A.d9g(r,o),q,q,q,q,q,q,!1,D.a3))
return C.aA(q,C.cY(q,C.B(t,D.m,q,D.e,D.i,0,q,q),q,q,D.b5,new C.o(B.blC,q,u,B.b3p,q,q,D.n),D.h5,q,58,q,D.ct,B.bBE,q,q,q),D.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new A.d9h(r,d),q,q,q,q,q,q,!1,D.a3)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=B.qG[i.d].e,f=Math.max(g.gK(g),5),e=i.f.a
g=x.p
w=C.eI(C.a([C.aH(h,h,h,h,B.bTP,h,h,h,new A.d9q(d),h,h,h,h,"Wire guide",h)],g),h,h,!0,!0,E.y4,h,1,h,h,h,!1,h,!1,h,h,h,h,!0,h,h,h,h,h,B.fUc,h,h,h,1,h,!0)
v=C.a([],g)
for(u=x.O,t=0;t<2;++t){s=C.a([],g)
if(t>0)s.push(D.as)
r=i.d===t?B.dq9:C.a([D.c.j(0.06),D.c.j(0.03)],u)
q=new C.aP(18,18)
p=new C.ay(i.d===t?D.o0:D.bz,1,D.r,-1)
o=B.qG[t]
n=o.a==="threeway"?"\ud83d\udd00":"\ud83c\udf00"
o=D.d.gI(o.b.split(" ("))
m=i.d===t?D.c:D.ac
s.push(new C.by(1,D.bb,C.aA(h,C.cY(h,new C.ca(D.aL,D.e,D.i,D.m,h,D.p,h,0,C.a([new C.y(n,h,D.n4,h,h,h,h,h,h,h,h,h),D.ad,new C.by(1,D.bb,new C.y(o,h,new C.F(!0,m,h,h,h,h,13,D.u,h,h,h,h,1.15,h,h,h,h,h,h,h,h,h,h,h,h,h),h,h,h,h,D.a1,h,3,h,h),h)],g),h),h,h,D.b5,new C.o(h,h,new C.bG(p,p,p,p),new C.bh(q,q,q,q),h,new C.a9(D.a5,D.a8,D.x,r,h,h),D.n),D.a2,h,h,h,h,D.bg,h,h,h),D.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new A.d9r(i,t),h,h,h,h,h,h,!1,D.a3),h))
D.d.v(v,s)}v=C.B(v,D.m,h,D.e,D.i,0,h,h)
u=C.B(C.a([i.b06("Practice (instant feedback)",!i.e,D.ol,new A.d9s(i)),D.as,i.b06("Test (marked on submit)",i.e,D.qy,new A.d9t(i))],g),D.m,h,D.e,D.i,0,h,h)
s=D.c.j(0.05)
r=C.n(18)
q=C.L(D.bz,D.r,1)
o=B.qG[i.d]
n=C.d(o.b,h,h,h,h,h,h,L.aaK,h,h,h)
m=C.d(o.c,h,h,h,h,h,h,B.fw_,h,h,h)
o=o.e
o=C.bx(C.n(6),C.kk(D.bz,h,h,8,h,e/o.gK(o),B.b1y),D.ap)
l=B.qG[i.d].e
r=C.a([new C.a4(h,78,v,h),D.ae,u,D.aB,C.p(h,C.x(C.a([n,D.am,m,D.W,o,D.av,C.d(""+e+" of "+l.gK(l)+" wires connected",h,h,h,h,h,h,B.fkM,h,h,h)],g),D.E,h,D.e,D.i,0,D.p),D.f,h,h,new C.o(s,h,q,r,h,h,D.n),h,h,h,h,D.bD,h,h,h),D.aB,B.f5T,D.am,C.cu(new A.d9u(i,f*66)),D.N],g)
if(i.y!=null&&!i.e){v=(i.z?D.ba:D.c0).j(0.12)
u=C.n(14)
s=C.L((i.z?D.ba:D.c0).j(0.6),D.r,1)
q=i.z
o=q?D.e6:B.bOz
o=C.X(o,q?D.ba:D.c0,h,h,h,20)
n=i.y
n.toString
r.push(C.cY(h,C.B(C.a([o,D.ad,C.E(C.d(n,h,h,h,h,h,h,C.l(h,h,q?D.ep:D.eO,h,h,h,h,h,h,h,h,12.8,h,h,D.U,h,1.4,!0,h,h,h,h,h,h,h,h),h,h,h),1)],g),D.E,h,D.e,D.i,0,h,h),h,h,D.b5,new C.o(v,h,s,u,h,h,D.n),D.a2,h,h,h,h,D.bg,h,h,h))}r.push(D.ae)
v=C.bo(D.ay,h,h,h,D.w,h,h,h,new C.b8(C.n(16),D.a0),h,h,h)
u=i.e
s=C.X(u?D.qy:D.lf,h,h,h,h,h)
r.push(new C.a4(h,52,C.dj(s,C.d(u?"Submit the test":"Check my wiring",h,h,h,h,h,h,D.nN,h,h,h),new A.d9v(i),v),h))
v=i.r
if(v!=null){v=v.a
if(v===B.qV)v=D.ba
else v=v===B.JS?D.bs:D.c0
v=v.j(0.1)
u=C.n(16)
s=i.r.a
if(s===B.qV)s=D.ba
else s=s===B.JS?D.bs:D.c0
s=C.L(s.j(0.6),D.r,1)
q=i.r.a
o=q===B.qV
n=o?"CORRECT: every lead follows the diagram.":A.h7E(q)+": not passed"
if(o)q=D.ba
else q=q===B.JS?D.bs:D.c0
q=C.a([C.d(n,h,h,h,h,h,h,C.l(h,h,q,h,h,h,h,h,h,h,h,15,h,h,D.u,h,h,!0,h,h,h,h,h,h,h,h),h,h,h),D.N],g)
for(o=i.r.b,n=o.length,k=0;k<o.length;o.length===n||(0,C.K)(o),++k){j=o[k]
q.push(new C.y(j.c+"\nRule: "+j.d+"\nFix: "+j.e+"\n",h,B.fpO,h,h,h,h,h,h,h,h,h))}for(o=B.qG[i.d].f,k=0;k<2;++k)q.push(new C.y("\u2022 "+o[k],h,D.Kn,h,h,h,h,h,h,h,h,h))
D.d.v(r,C.a([D.ae,C.p(h,C.x(q,D.E,h,D.e,D.i,0,D.p),D.f,h,h,new C.o(v,h,s,u,h,h,D.n),h,h,h,h,D.bD,h,h,h)],g))}return C.c6(w,E.y4,C.cl(r,h,h,B.bBu,h,h,D.ah,!1),h,!1,!1,h,h)}}
A.bxG.prototype={
a4(b3,b4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8=this,a9=null,b0=new A.fjs(),b1=a8.e,b2=b4.a-b1
$.S()
w=C.J()
w.r=D.aX.gp(0)
for(v=a8.b,u=b3.a,t=0;t<v.length;++t){s=b0.$1(t)
r=w.G()
u.drawCircle(b1,s,5,r)
r.delete()}for(t=0;t<5;++t){s=b0.$1(t)
r=w.G()
u.drawCircle(b2,s,5,r)
r.delete()}for(s=a8.d,s=new C.cE(s,C.a6(s).k("cE<1,2>")).gaf(0),q=a8.f,p=(b1+b2)/2,o=x.g,n=a8.c,m=a8.r,l=m<1,k=x.dc,j=x.f5,i=m>=1;s.C();){h=s.d
g=h.a
f=D.d.cp(v,g)
e=D.d.cp(n,h.b)
if(f<0||e<0)continue
d=b0.$1(f)
a0=b0.$1(e)
a1=$.S().r
a2=C.a([],o)
a3=new C.aF(a1,D.ag,a9,a9,a2)
a2.push(new C.aY(b1,d))
a2.push(new C.kO(p,d,p,a0,b2,a0))
a4=g===q
if(a4&&l){a5=new C.rs(new C.aF(a1,D.ag,a9,a9,C.bp(a2,!0,k)),!1,C.a([],j))
if(!a5.C())C.ba(C.fs())
a6=a5.gS(0)
a1=a6.a
a1.ii()
a2=a1.e[a6.b].b
a2===$&&C.c()
a2=a2.a.length()
a1=a1.a
a3=new C.aF(a1.a,a1.b,a9,new C.cw([a6,0,a2*m,!0]),C.a([],o))}a7=A.huI(g)
g=new C.ao(D.Q,D.M,D.S,D.T,D.R)
g.b=D.a9
g.c=9
g.d=D.by
g.r=D.w.j(0.55).gp(0)
r=g.G()
g=a3.e
u.drawPath((g==null?a3.e=new C.cd(a3.gbu().a.snapshot()):g).a,r)
r.delete()
g=new C.ao(D.Q,D.M,D.S,D.T,D.R)
g.b=D.a9
g.c=6
g.d=D.by
g.r=a7.gp(0)
r=g.G()
g=a3.e
u.drawPath((g==null?a3.e=new C.cd(a3.gbu().a.snapshot()):g).a,r)
r.delete()
g=new C.ao(D.Q,D.M,D.S,D.T,D.R)
g.b=D.a9
g.c=1.6
g.d=D.by
g.r=D.c.j(0.45).gp(0)
r=g.G()
g=a3.e
u.drawPath((g==null?a3.e=new C.cd(a3.gbu().a.snapshot()):g).a,r)
r.delete()
if(!a4||i){g=new C.ao(D.Q,D.M,D.S,D.T,D.R)
g.r=a7.gp(0)
r=g.G()
u.drawCircle(b1,d,5.5,r)
r.delete()
d=new C.ao(D.Q,D.M,D.S,D.T,D.R)
d.r=a7.gp(0)
r=d.G()
u.drawCircle(b2,a0,5.5,r)
r.delete()}}},
av(d){return!0}}
A.aLK.prototype={
t(){var w=this,v=w.a8$
if(v!=null)v.a5(0,w.gbB())
w.a8$=null
w.a1()},
aV(){this.b2()
this.b1()
this.bC()}}
A.JR.prototype={
a6(){return"SafetyStatus."+this.b}}
A.FW.prototype={
a6(){return"TerminalRole."+this.b}}
A.G2.prototype={
a6(){return"WireFunction."+this.b}}
A.cAK.prototype={}
A.cEk.prototype={}
A.a4z.prototype={}
A.bNb.prototype={}
A.wz.prototype={}
A.tt.prototype={}
A.b6U.prototype={}
A.abq.prototype={}
A.abr.prototype={}
A.vo.prototype={}
A.b5C.prototype={}
A.b8O.prototype={}
A.cAM.prototype={
brN(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=C.a([],x.dH)
for(w=this.a,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u){t=w[u]
s=t.b
r=t.c
q=A.hxN(s,r,t.d)
p=new C.Y(r,new A.cAN(),C.T(r).k("Y<1>")).gK(0)
r=s.d?1:0
o=s.b+s.c+r
n=o===0?0:D.o.E(D.k.V(p*100/o),0,100)
if(q.a!==B.qV)n=D.o.E(n,0,79)
i.push(new A.abr(t.a,q,n))}w=C.a([],x.gl)
for(v=this.b,s=this.c,m=0;m<v.length;++m){r=v[m]
l=s.h(0,m)
w.push(new A.b5C(r,l==null?-1:l))}v=C.a([],x.t)
for(s=i.length,u=0;u<i.length;i.length===s||(0,C.K)(i),++u)v.push(i[u].c)
for(s=w.length,u=0;u<w.length;w.length===s||(0,C.K)(w),++u){k=w[u]
v.push(k.b===k.a.c?100:0)}j=v.length===0?0:D.k.V(D.d.f6(v,new A.cAO())/v.length)
return new A.b8O(i,w,j,D.d.cJ(i,new A.cAP())&&j>=80)}}
A.Q_.prototype={}
A.a1v.prototype={
R(){var w=x.S
return new A.bvz(C.U(w,w))}}
A.bvz.prototype={
B(d){var w=null,v=this.e,u=C.aG(d,w,x.w).w
return C.bn(!0,new C.cU(new C.aZ(0,1/0,0,u.a.b*0.9),C.cl(v==null?this.cpD():this.ct3(v),w,w,D.bQ,w,w,D.ah,!0),w),!0,!1,D.af,!0,!0)},
cpD(){var w,v,u,t,s,r,q=this,p=null,o=q.a,n=o.c.b,m=x.p
o=C.a([C.d("Test: "+o.d,p,p,p,p,p,p,D.de,p,p,p),D.av,B.fBP,D.W],m)
for(w=q.d,v=x.cE,u=0;u<n.length;u=t){t=u+1
s=C.a([new C.y(""+t+". "+n[u].a,p,D.nL,p,p,p,p,p,p,p,p,p)],m)
for(r=0;r<3;++r)s.push(new A.aa3(r,w.h(0,u),new A.fd4(q,u),new C.y(n[u].b[r],p,D.Au,p,p,p,p,p,p,p,p,p),!0,p,v))
s.push(D.av)
D.d.v(o,s)}o.push(D.N)
o.push(C.bI(B.fGc,p,new A.fd5(q),p))
return o},
ct3(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=d.d,g=h?D.ba:D.c0
h=h?"Passed":"Not passed"
w=x.p
h=C.a([C.d(h,i,i,i,i,i,i,C.l(i,i,g,i,i,i,i,i,i,i,i,22,i,i,D.u,i,i,!0,i,i,i,i,i,i,i,i),i,i,i),C.d("Score "+d.c+"%  (pass mark 80%)",i,i,i,i,i,i,D.Vp,i,i,i)],w)
v=d.a
if(D.d.b_(v,new A.fd6()))h.push(B.eoM)
h.push(D.W)
for(u=v.length,t=0;t<v.length;v.length===u||(0,C.K)(v),++t){s=v[t]
r=s.b
q=r.a
p=A.hbj(q).j(0.1)
o=new C.aP(12,12)
n=new C.ay(A.hbj(q).j(0.6),1,D.r,-1)
m=A.h7E(q)
q=A.hbj(q)
q=C.a([new C.y(s.a+": "+m+" ("+s.c+"%)",i,new C.F(!0,q,i,i,i,i,13.5,D.u,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i),i,i,i,i,i,i,i,i,i)],w)
r=r.b
if(r.length===0)q.push(B.fQ3)
for(m=r.length,l=0;l<r.length;r.length===m||(0,C.K)(r),++l){k=r[l]
D.d.v(q,C.a([D.av,new C.y(A.h7E(k.b)+": "+k.c,i,B.fjN,i,i,i,i,i,i,i,i,i),new C.y("Rule: "+k.d,i,N.aaL,i,i,i,i,i,i,i,i,i),new C.y("Fix: "+k.e,i,B.fpP,i,i,i,i,i,i,i,i,i)],w))}h.push(C.p(i,C.x(q,D.E,i,D.e,D.i,0,D.p),D.f,i,i,new C.o(p,i,new C.bG(n,n,n,n),new C.bh(o,o,o,o),i,i,D.n),i,i,i,D.ct,D.yq,i,i,i))}for(v=d.b,u=v.length,t=0;t<v.length;v.length===u||(0,C.K)(v),++t){j=v[t]
r=D.c.j(0.05)
q=new C.aP(12,12)
p=j.a
o=p.c
m=j.b===o
n=new C.ay(m?D.ba:D.c0,1,D.r,-1)
m=m?"\u2705":"\u274c"
h.push(C.p(i,C.x(C.a([new C.y(m+" "+p.a,i,D.lr,i,i,i,i,i,i,i,i,i),new C.y("Correct answer: "+p.b[o],i,D.tt,i,i,i,i,i,i,i,i,i),new C.y(p.d,i,N.aaL,i,i,i,i,i,i,i,i,i)],w),D.E,i,D.e,D.i,0,D.p),D.f,i,i,new C.o(r,i,new C.bG(n,n,n,n),new C.bh(q,q,q,q),i,i,D.n),i,i,i,D.ct,D.yq,i,i,i))}h.push(D.av)
h.push(C.bI(D.pL,i,new A.fd7(this),i))
return h}}
A.zh.prototype={
gK(d){return this.b===0?this.f-this.e:95.5},
gbiz(){var w,v=this
if(!(v.d-v.c<47.9))if(v.b===0)w=v.f-v.e<95.9
else w=!1
else w=!0
return w}}
A.Mu.prototype={}
A.Mv.prototype={}
A.a4N.prototype={}
A.bO9.prototype={
jW(d){var w,v,u,t,s=this
for(w=s.b,w=new C.du(w,w.r,w.e);w.C();){v=w.d
v.c=v.b=v.a=!1
v.d.aa(0)}for(w=s.c,v=w.length,u=0;u<v;++u){t=w[u]
t.b=t.a=0}s.d.aa(0)
s.e=0},
j1(d){++this.e
return new A.n7(!1,d,D.hr)},
aqL(d){var w,v,u,t,s=C.a([],x.ar)
for(w=$.mc(),v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u){t=w[u]
if(t.b===d)s.push(t)}return s},
gcKm(){return D.d.cJ(this.aqL(0),new A.bOa(this))},
cSn(d){var w,v,u,t=this,s=A.hbU(d)
if(s==null)return t.j1("A sheet goes where the green mark is: tap one of those places.")
w=t.b.h(0,d)
if(w.a)return t.j1("There is a sheet up here already.")
v=s.b===0
if(!v&&!t.gcKm())return t.j1("The ceiling goes up first. The wall sheets then fit tight underneath it and hold its edges up.")
if(s.gbiz()&&!w.b){u=s.d-s.c
if(u<47.9)v=""+D.k.V(u)+" inches wide"
else{u=""+D.k.V(v?s.f-s.e:95.5)+" inches long"
v=u}return t.j1("This place is only "+v+". A whole sheet is too big: measure it and cut it to size first (the Cutter).")}w.a=!0
return new A.n7(!0,v?"Sheet lifted tight against the joists. Screws next, so it cannot sag.":"Sheet stood up against the studs, snug under the ceiling and a hair off the floor. Screws next.",D.hr)},
cOs(d){var w,v,u=this,t=A.hbU(d)
if(t==null)return u.j1("The cutter is for a sheet that has to be made smaller: tap an orange place.")
w=u.b.h(0,d)
if(w.a)return u.j1("The sheet is already up. Cutting is done on the floor, before it goes up.")
if(!t.gbiz())return u.j1("A whole 4 by 8 sheet fits here. No cut is needed.")
if(w.b)return u.j1("This sheet is already cut to size.")
w.b=!0
v=t.d-t.c
if(v<47.9)v=""+D.k.V(v)
else v=""+D.k.V(t.b===0?t.f-t.e:95.5)
return new A.n7(!0,"Measured, then scored the face paper with the knife against the T-square, snapped the sheet over the edge and cut the back paper. Cut to "+v+" inches. Now hang it.",D.hr)},
bpa(d){var w,v=this,u=A.hbU(d)
if(u==null)return v.j1("Screws go into a hung sheet: tap one.")
w=v.b.h(0,d)
if(!w.a)return v.j1("Hang the sheet first, then screw it.")
if(w.c)return v.j1("This sheet is screwed already.")
w.c=!0
return new A.n7(!0,u.b===0?"Screwed to every joist, 12 inches apart, each set just under the paper without breaking it.":"Screwed to every stud, 16 inches apart and 3/8 inch from the edges, each head just under the paper without breaking it.",D.hr)},
bp2(d){var w,v,u=this,t=$.Dw(),s=C.ow(new C.Y(t,new A.bOf(d),C.T(t).k("Y<1>")))
if(s==null)return u.j1("The saw is for the holes: tap a red mark.")
w=u.b.h(0,s.b)
if(!w.a)return u.j1("Hang the sheet first. The holes are cut after it is up.")
t=w.d
if(t.q(0,d))return u.j1("This hole is already cut.")
t.M(0,d)
t=s.d
v=s.c
return new A.n7(!0,t>=0?v+": cut along the frame with the drywall saw, so the sheet ends exactly on the wood.":v+": the hole is cut just big enough for the box. The box now shows through, and the device will fit in later.",D.hr)},
aIW(d){var w,v,u,t,s=C.a([],x.I)
for(w=$.Dw(),v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u){t=w[u]
if(t.d===d)s.push(t)}return D.d.cJ(s,new A.bOe(this))},
cJI(d){var w,v=this
if(d<0||d>=2)return v.j1("Corner bead goes on the corners of the door and the window.")
w=v.d
if(w.q(0,d))return v.j1("This opening has its corner bead.")
if(!v.aIW(d))return v.j1("Cut the opening in both sheets first.")
w.M(0,d)
return B.bIo},
az3(d){var w,v,u,t,s,r,q,p,o=this,n=C.a([],x.s)
for(w=o.aqL(d),v=w.length,u=o.b,t=0;t<w.length;w.length===v||(0,C.K)(w),++t){s=u.h(0,w[t].a)
if(!s.a){n.push("a sheet is missing")
break}if(!s.c){n.push("a sheet has no screws")
break}}if(n.length===0)for(w=$.Dw(),v=w.length,t=0;t<w.length;w.length===v||(0,C.K)(w),++t){r=w[t]
q=r.b
p=q-5000
if((p>=0&&p<$.mc().length?$.mc()[p]:null).b===d&&!u.h(0,q).d.q(0,r.a)){n.push("a hole is not cut")
break}}if(n.length===0&&d===2&&!o.d.q(0,1))n.push("the window has no corner bead")
if(n.length===0&&d===3&&!o.d.q(0,0))n.push("the door has no corner bead")
return n.length===0?null:"Not yet: "+B.a5O[d]+" is not ready, "+D.d.gI(n)+"."},
cVa(d,e){var w,v,u,t=this,s=t.az3(d)
if(s!=null)return t.j1(s)
w=t.c[d]
v=w.a
switch(v){case 0:w.a=1
w.b=e+4
return new A.n7(!0,"Bed coat: mud pushed into every joint, every corner and over every screw head. Press the paper tape into it right now, while it is wet.",D.hr)
case 1:return t.j1("The tape goes into this wet mud now. Use the Tape.")
case 2:case 3:u=w.b
if(!(e>=u))return t.j1("Still wet. Mud takes a day to dry in real life; here wait "+D.k.cO(u-e)+" more seconds. A coat put on wet mud cracks.");++v
w.a=v
w.b=e+4
return new A.n7(!0,v===3?"Second coat: wider than the first, to hide the tape and its edges. Let it dry.":"Third coat: the widest and thinnest, feathered out to nothing at the edges. Let it dry, then sand.",D.hr)
case 4:return t.j1("That is the third coat. Let it dry, then sand with the Sander.")
default:return t.j1("The mud is finished here. "+(v===5?"Prime it with the Roller.":"This is done."))}},
d_j(d,e){var w,v,u=this,t=u.az3(d)
if(t!=null)return u.j1(t)
w=u.c[d]
v=w.a
if(v===0)return u.j1("Mud first. The paper tape is pressed into a bed of wet mud.")
if(v!==1)return u.j1("The tape is on already.")
w.a=2
w.b=e+4
return B.bIn},
boV(d,e){var w=this,v=w.c[d],u=v.a
if(u<4)return w.j1(u===0?"Nothing to sand yet.":"Sand only after the third coat is dry, not before.")
if(u>4)return w.j1("It is sanded already.")
u=v.b
if(!(e>=u))return w.j1("Still wet. Sanding wet mud only smears it: wait "+D.k.cO(u-e)+" more seconds.")
v.a=5
return B.bIl},
fX(d){var w=this.c[d],v=w.a
if(v<5)return this.j1(v===0?"Nothing to paint yet: hang the sheets and finish the joints first.":"Sand first. Primer goes on only over smooth, dry mud.")
if(v>5)return this.j1("This surface is primed already.")
w.a=6
v=B.a5O[d]
return new A.n7(!0,v[0].toUpperCase()+D.a.b3(v,1)+" primed with the roller: the paper and the mud now look the same, and the joints have disappeared.",D.hr)},
bln(d,e){var w,v,u,t,s,r,q,p,o,n,m=this,l=new A.bOh()
switch(d){case"sheet":w=C.a([],x.u)
for(v=$.mc(),u=v.length,t=m.b,s=0;s<v.length;v.length===u||(0,C.K)(v),++s){r=v[s]
q=r.a
if(!t.h(0,q).a){if(!(r.d-r.c<47.9))if(r.b===0)p=r.f-r.e<95.9
else p=!1
else p=!0
q=!p||t.h(0,q).b}else q=!1
w.push(q)}if(l.$1(w))w=""
else w=m.gaHf()===$.mc().length?" Every sheet is up.":" The pieces that are left are narrow: cut them to size with the Cutter first."
return w
case"cut":w=C.a([],x.u)
for(v=$.mc(),u=v.length,t=m.b,s=0;s<v.length;v.length===u||(0,C.K)(v),++s){r=v[s]
if(!(r.d-r.c<47.9))if(r.b===0)q=r.f-r.e<95.9
else q=!1
else q=!0
if(q){q=r.a
q=!t.h(0,q).b&&!t.h(0,q).a}else q=!1
w.push(q)}return l.$1(w)?"":" Nothing needs cutting right now."
case"screw":w=C.a([],x.u)
for(v=$.mc(),u=v.length,t=m.b,s=0;s<v.length;v.length===u||(0,C.K)(v),++s){q=v[s].a
w.push(t.h(0,q).a&&!t.h(0,q).c)}return l.$1(w)?"":" Hang a sheet first: the screws go into a sheet that is up."
case"saw":w=C.a([],x.u)
for(v=$.Dw(),u=v.length,t=m.b,s=0;s<v.length;v.length===u||(0,C.K)(v),++s){o=v[s]
q=o.b
w.push(t.h(0,q).a&&!t.h(0,q).d.q(0,o.a))}return l.$1(w)?"":" Hang the sheets over the boxes, the door and the window first: the holes are cut in a sheet that is up."
case"bead":w=C.a([],x.u)
for(v=m.d,n=0;n<2;++n)w.push(!v.q(0,n)&&m.aIW(n))
return l.$1(w)?"":" Cut the door and window openings with the Saw first."
case"mud":w=C.a([],x.u)
for(v=m.c,r=0;r<5;++r){if(!(v[r].a===0&&m.az3(r)==null)){u=v[r]
t=u.a
u=(t===2||t===3)&&e>=u.b}else u=!0
w.push(u)}return l.$1(w)?"":" Nothing is ready for mud yet: on a wall or the ceiling every sheet needs to be up and screwed, the holes cut and the door and window beaded. After a coat, wait for it to dry."
case"tape":w=C.a([],x.u)
for(v=m.c,u=v.length,s=0;s<v.length;v.length===u||(0,C.K)(v),++s)w.push(v[s].a===1)
return l.$1(w)?"":" Tape goes into wet mud: put mud on a surface first."
case"sand":w=C.a([],x.u)
for(v=m.c,r=0;r<5;++r){u=v[r]
w.push(u.a===4&&e>=u.b)}return l.$1(w)?"":" Sand only after the third coat has dried."
default:w=C.a([],x.u)
for(v=m.c,u=v.length,s=0;s<v.length;v.length===u||(0,C.K)(v),++s)w.push(v[s].a===5)
return l.$1(w)?"":" Prime after the mud is sanded."}},
gBH(d){return D.d.cJ(this.c,new A.bOb())},
gaHf(){var w=this.b,v=C.a6(w).k("b9<2>")
return new C.Y(new C.b9(w,v),new A.bOd(),v.k("Y<M.E>")).gK(0)},
gaLI(){var w=this.b,v=C.a6(w).k("b9<2>")
return new C.Y(new C.b9(w,v),new A.bOg(),v.k("Y<M.E>")).gK(0)},
gbeG(){var w=this.b
return new C.b9(w,C.a6(w).k("b9<2>")).cG(0,0,new A.bOc())}}
A.aqo.prototype={
R(){var w=A.hK7(),v=new C.vj()
$.vN()
v.fZ(0)
return new A.aqp(w,v)}}
A.aqp.prototype={
gf1(){var w,v=this.e
if(v===$){w=new A.uE(0,0.07,120,B.AC,$.aw())
w.e=12
w.f=520
w.at=0
w.ax=1.3
w.r=B.Ed
w.pe(!0)
this.e!==$&&C.bE()
this.e=w
v=w}return v},
gla(){var w=this.as
return w===$?this.as=A.hxj(this.d,0,"look"):w},
Z(){var w=this
w.a3()
$.aW.x1$.push(new A.ce3(w))
w.ax=C.df(D.iI,new A.ce4(w))},
t(){var w=this.at
if(w!=null)w.a2(0)
w=this.ax
if(w!=null)w.a2(0)
this.a1()},
a_r(){var w=this,v=w.f
return w.as=A.hxj(w.d,w.Q.gf2()/1000,v)},
ayo(d,e){var w=this,v=w.at
if(v!=null)v.a2(0)
w.m(new A.cdT(w,d,e))
w.at=C.cD(D.bJ,new A.cdU(w))},
Ez(d){return this.ayo(d,!0)},
aqB(d){var w,v=this
v.m(new A.ce5(v,d))
w=B.aI0.h(0,d)
w.toString
v.Ez(w+(d==="look"?"":v.d.bln(d,v.Q.gf2()/1000)))},
caI(d,e){var w=this,v=w.gf1(),u=A.hy_(v,d,e)
if(u==null){w.ayo(y.c,!1)
return}if(w.y){w.y=!1
v.r=B.Ed
v.f=520}w.m(new A.cdK(w,u))
v.a7X(Math.min(v.c,70),0.07,u)
w.Ez(y.L)},
caJ(d,e){var w=this
w.m(new A.cdL(w,e,d))
w.Ez("You picked up the "+B.Du.h(0,d).a.toLowerCase()+". "+C.w(B.aI0.h(0,e))+w.d.bln(e,w.Q.gf2()/1000))},
caL(d){var w,v,u,t,s,r,q=this,p={},o=d===0
if(!o){w=d===q.cx&&q.Q.gf2()/1000-q.cy<0.45
q.cx=d
q.cy=q.Q.gf2()/1000
v=w}else v=!1
if(v)return
u=B.aHQ.h(0,d)
if(u!=null){q.caJ(d,u)
return}if(o){q.m(new A.cdM(q))
return}o=q.f
if(o==="look"){t=q.gla().b.h(0,d)
if(t!=null){q.m(new A.cdN(q,d))
q.gf1().D0(t.c)
q.Ez(t.a+": "+t.b)}return}s=new A.cdQ()
p.a=null
r=d>=6700&&d<6705
switch(o){case"sheet":o=p.a=q.d.cSn(d)
break
case"cut":o=p.a=q.d.cOs(d)
break
case"screw":o=p.a=q.d.bpa(d)
break
case"saw":o=p.a=q.d.bp2(d)
break
case"bead":o=p.a=q.d.cJI(d-6500)
break
case"mud":o=p.a=r?q.d.cVa(s.$1(d),q.Q.gf2()/1000):q.akI()
break
case"tape":o=p.a=r?q.d.d_j(s.$1(d),q.Q.gf2()/1000):q.akI()
break
case"sand":o=p.a=r?q.d.boV(s.$1(d),q.Q.gf2()/1000):q.akI()
break
default:o=p.a=r?q.d.fX(s.$1(d)):q.akI()}if(o.a)A.rd()
else A.fJ(180,220,0.25,"square")
q.m(new A.cdO(p,q,d))
o=p.a
q.ayo(o.b,o.a)
if(q.d.gBH(0)&&!q.z){q.z=!0
$.aW.x1$.push(new A.cdP(q))}},
akI(){++this.d.e
return B.bIf},
caG(){var w=null,v=this.c
if(v==null)return
C.ch(w,w,!0,w,new A.cdJ(this),v,w,!0,!0,x.H)},
caQ(){var w,v=this
v.m(new A.cdV(v))
if(v.y){w=v.gf1()
w.r=null
w.f=620
w.hb(330,0.85,B.EG,0.5)
v.Ez(y.i)}else{w=v.gf1()
w.r=B.Ed
w.f=520
w.hb(120,0.07,B.AC,0)
v.Ez("Back inside the room. Drag to turn round.")}},
caO(){this.m(new A.cdR(this))
this.Ez("The drywall is taken down again. Start with the ceiling.")},
B(d){var w,v,u,t,s=this,r=null,q=s.d,p=q.c,o=new C.Y(p,new A.cdW(),C.T(p).k("Y<1>")).gK(0),n=D.d.cJ(q.aqL(0),new A.cdX(s)),m=q.gaHf(),l=$.mc(),k=l.length,j=q.gaLI(),i=l.length,h=q.gbeG(),g=$.Dw(),f=C.a([!0,n,m===k,j===i,h===g.length,q.d.a===2,D.d.cJ(p,new A.cdY()),D.d.cJ(p,new A.cdZ()),q.gBH(0)],x.u),e=D.d.bg(f,new A.ce_())
p=e<0?"All done":"Step "+(e+1)+"/9"
n=s.gla()
m=s.gf1()
k=s.r
j=s.w
i=s.x
h=k!==0?s.gla().b.h(0,s.r):r
w=s.y
v=w?"Inside":"Whole room"
u=w?D.Pc:D.Pq
t=x.p
w=A.K3(!1,r,m,new A.ce0(s),r,i,k,h,r,r,j,54,s.gcaH(),new A.ce1(s),s.gcaK(),n,!1,r,r,C.a([A.uo(v,D.ay,u,w,s.gcaP()),D.N],t))
return A.Iv(D.aJ,new A.ce2(d,f),C.x(C.a([A.hy1(B.d_W,s.f,s.gaqA()),D.N,C.B(C.a([C.E(C.d("Sheets "+q.gaHf()+"/"+l.length+" \xb7 screwed "+q.gaLI()+"/"+l.length+" \xb7 holes "+q.gbeG()+"/"+g.length+" \xb7 surfaces finished "+o+"/5",r,2,r,r,r,r,B.aU9,r,r,r),1),D.ad,A.qw("Start over",D.k_,s.gcaN(),D.ac)],t),D.m,r,D.e,D.i,0,r,r)],t),D.m,r,D.e,D.P,0,D.p),w,p,"Hanging drywall",r)}}
A.Xa.prototype={}
A.Cz.prototype={
gcJA(){return this.d<=20&&this.e>=20},
gr4(d){var w,v=this.f
A:{if("corner"===v){w="Corner stud"
break A}if("king"===v){w="King stud"
break A}if("jack"===v){w="Jack stud"
break A}if("cripple"===v){w="Short (cripple) stud"
break A}w="Stud"
break A}return w}}
A.a5x.prototype={
fZ(d){var w,v=this
if(v.c)return
v.c=!0
w=$.aW
w.toString
if(D.a.q(C.vF(C.b0(w).a,null),"Test"))v.d=C.df(v.b,new A.bTy(v))
else v.b0e()},
b0e(){$.eY.Hk(new A.bTx(this))},
bR(d){var w
this.c=!1
w=this.d
if(w!=null)w.a2(0)
this.d=null}}
A.n7.prototype={
gjD(){return this.a}}
A.aW_.prototype={
gaHp(){var w,v,u,t,s
for(w=this.a,v=0,u=1;u<w.length;++u){t=w[u]
s=w[u-1]
v+=new A.q(t.a-s.a,t.b-s.b,t.c-s.c).gqc()}return v}}
A.Ed.prototype={}
A.PW.prototype={}
A.baf.prototype={
bcS(d){var w,v,u,t
for(w=this.b,v=w.length,u=0;u<v;++u){t=w[u]
if(t.a===d)return t}return null},
as4(d,e){++this.c
return new A.n7(!1,d,e)},
qx(d){return this.as4(d,D.hr)},
UK(d,e){var w,v,u,t,s,r,q,p,o=this
if(d==="ceiling"){if(!(e>=3000&&e<3010))return o.qx(A.h1h(e)!=null?"A ceiling box hangs from a joist, the boards over your head. Tap one of those.":"A ceiling box goes on a joist: the boards across the top of the room.")
w=o.b
if(D.d.b_(w,new A.cEr()))return o.qx("This room has one light, and its box is already hung. Pull the cable to it.")
w.push(new A.Ed(o.d++,"ceiling",-1,0,null,e-3000))
return B.bIj}v=A.h1h(e)
if(v==null)return o.qx(e>=3000&&e<3010?"That is a ceiling joist. An outlet or switch box is nailed to a stud, a tall board in the wall.":"Tap a stud: one of the tall boards in the wall.")
w=v.f
if(w==="cripple")return o.qx("That short stud only holds up the wood over the door or window. Put the box on a full-height stud.")
u=o.b
if(D.d.b_(u,new A.cEs(v)))return o.qx("There is a box on this stud already.")
t=o.d++
s=v.b
r=v.c
q=new A.Ed(t,d,s,r,v.a,null)
if(w==="king"||w==="jack"){p=s===2?B.a81:B.TH
q.r=r<(p.c+p.d)/2?-1:1}u.push(q)
if(d==="switch")return new A.n7(!0,o.aZq(q)?"Switch box nailed on, 48 inches up and right beside the door, where a hand finds it in the dark.":"Switch box nailed on, 48 inches up. A light switch belongs beside the door, on the side the door opens.",D.hr)
return B.bIi},
aZq(d){var w
if(d.c===2){w=d.d
if(!(w>=13.5&&w<=31.5))w=w>=67.5&&w<=85.5
else w=!0}else w=!1
return w},
bfn(d){var w,v,u,t=this
if(A.hCr(d)!=null){w=t.a
if(w.q(0,d))return t.qx("The top plate has its hole here already.")
w.M(0,d)
return B.bIh}v=A.h1h(d)
if(v==null){if(d===2200)return t.qx("The panel is where the cable starts. You do not drill it.")
if(d>=4000&&d<4100)return t.qx("Drill the studs, the tall boards. The boxes are for the cable to end in.")
return t.qx("Drill through a stud (a tall board), or the top plate over a switch. Not through this.")}w=t.a
u=v.a
if(w.q(0,u))return t.qx("This stud has its hole already.")
if(!v.gcJA())return t.qx("There is no wood at the cable line here: this short stud only sits over the door or window. Drill a stud that reaches the line (20 inches up).")
w.M(0,u)
return B.bIm},
ctC(d,e,f,g){var w,v,u,t,s,r,q,p,o=new A.cEn(f,d),n=o.$1(e),m=C.a([],x.Y)
for(w=$.Bi(),v=w.length,u=n-0.000001,t=0;t<w.length;w.length===v||(0,C.K)(w),++t){s=w[t]
r=!1
if(s.d<=20&&s.e>=20){q=s.b
p=s.c
if(o.$1(B.HX[q]+p)>0.000001)r=o.$1(B.HX[q]+p)<u||s.a===g}if(r)m.push(s)}D.d.aX(m,new A.cEm(o))
return m},
bLP(d,e,f){var w=new A.cEl(f,d),v=w.$1(e)
return v>w.$1(f>0?295.5:331.5)+0.01},
aJh(a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=this
if(a2===2200)return B.bIg
w=a0.bcS(a2)
if(w==null)return a0.qx("Tap one of the blue boxes: the cable runs from the panel to it.")
if(w.w!=null){w.w=null
return B.bIk}v=w.b
if(v==="ceiling")return a0.cpg(w)
u=w.c
t=w.d
s=B.HX[u]+t
r=x.t
q=C.a([],r)
for(p=0;p<2;++p){o=B.clL[p]
if(!a0.bLP(24,s,o))q.push(o)}if(q.length===0)return a0.qx("A doorway is in the way both ways round: there is no wood to run a cable through across it.")
D.d.aX(q,new A.cEt(new A.cEu(s,24)))
n=D.d.gI(q)
q=w.e
q.toString
m=A.h1h(q)
q=m.f
if(!(q==="king"||q==="jack"))w.r=-n
l=a0.ctC(24,s,n,w.r!==-n?m.a:null)
q=C.a([],x.Y)
for(k=l.length,j=a0.a,p=0;p<l.length;l.length===k||(0,C.K)(l),++p){i=l[p]
if(!j.q(0,i.a))q.push(i)}k=q.length
if(k!==0){v=k===1
u=v?"has":"have"
v=v?"the lit one":"the lit ones"
r=C.a([],r)
for(t=C.d2(q,0,C.dz(40,"count",x.S),x.c0),q=t.$ti,t=new C.bS(t,t.gK(0),q.k("bS<ak.E>")),q=q.k("ak.E");t.C();){j=t.d
r.push((j==null?q.a(j):j).a)}return a0.as4("The cable has to go through every stud on its way, and "+k+" still "+u+" no hole. Drill "+v+" first.",r)}h=C.a([A.fu(0,24,47,1.75),A.fu(0,24,20,1.75)],x.o)
for(r=l.length,q=n>0,g=0,p=0;p<l.length;l.length===r||(0,C.K)(l),++p){i=l[p]
f=i.b
if(f!==g){k=q?g:f
j=A.fu(k,(k&1)===0?144:120,20,0)
e=B.Dd[k]
k=B.Dd[(k+1)%4]
h.push(new A.q(j.a+e.a*1.75+k.a*1.75,j.b+e.b*1.75+k.b*1.75,j.c+e.c*1.75+k.c*1.75))
g=f}h.push(A.fu(f,i.c,20,1.75))}if(u!==g)h.push(A.id5(q?g:u,20))
d=t+w.r*1.9
h.push(A.fu(u,d,20,1.75))
v=v==="switch"
h.push(A.fu(u,d,v?48:16,2.4))
u=new A.aW_(h,!1)
w.w=u
u=u.gaHp()
v=v?"Switch":"Outlet"
t=l.length
r=t===1?"stud":"studs"
return new A.n7(!0,v+" box connected: the cable runs from the panel through "+t+" "+r+", "+D.k.ac(u/12,1)+" feet in all. Leave a loose end at the box to wire the device later.",D.hr)},
cpg(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=C.a([],x.k)
for(w=m.b,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u){t=w[u]
if(t.b==="switch"&&t.w!=null)l.push(t)}if(l.length===0)return m.qx("The light is fed from the switch: the power goes to the switch first. Pull the cable to a switch box before this one.")
s=D.d.gI(l)
l=s.c
w=(l&1)===0
v=s.d
r=Math.min(D.k.cO((w?144:120)/16)-1,D.k.bf(v/16))
q=2100+l*20+r
if(!m.a.q(0,q))return m.as4("The cable goes up inside the wall, through the top plate and into the ceiling. Drill the top plate right over the switch first.",C.a([q],x.t))
p=v+s.r*1.9
w=w?144:120
o=Math.min(w,r*16+8)
w=d.f
w.toString
n=-70+w*15.555555555555555+0.75+2.3
l=new A.aW_(C.a([A.fu(l,p,50.5,1.75),A.fu(l,p,88,1.75),A.fu(l,o,92,1.75),A.fu(l,o,101.95,1.75),new A.q(n,101.95,0),new A.q(n,99,0)],x.o),!0)
d.w=l
return new A.n7(!0,"Light connected: the cable goes up from the switch, through the top plate, and lies across the joists to the ceiling box, "+D.k.ac(l.gaHp()/12,1)+" feet.",D.hr)},
gbkC(){var w,v,u=C.a([],x.eo)
for(w=this.b,v=0;v<4;++v)u.push(new A.PW(D.d.b_(w,new A.cEv(v))))
u.push(new A.PW(D.d.b_(w,new A.cEw(this))))
u.push(new A.PW(D.d.b_(w,new A.cEx())))
return u},
gBH(d){return D.d.cJ(this.gbkC(),new A.cEo())},
gbfG(){return D.d.cG(this.b,0,new A.cEq())/12},
La(d,e){var w=this.b
return new C.Y(w,new A.cEp(e),C.T(w).k("Y<1>")).gK(0)}}
A.atr.prototype={
R(){var w=x.S,v=C.a([],x.k),u=new C.vj()
$.vN()
u.fZ(0)
return new A.ats(new A.baf(C.aV(w),v),u,C.U(w,x.i),C.aV(w))}}
A.ats.prototype={
gf1(){var w,v=this.e
if(v===$){w=new A.uE(0,0.07,120,B.AC,$.aw())
w.e=12
w.f=520
w.at=0
w.ax=1.3
w.r=B.Ed
w.pe(!0)
this.e!==$&&C.bE()
this.e=w
v=w}return v},
gla(){var w=this.f
return w===$?this.f=A.ah1(this.d,"look"):w},
Z(){this.a3()
$.aW.x1$.push(new A.cnc(this))},
t(){var w=this.cy
if(w!=null)w.a2(0)
w=this.db
if(w!=null)w.a2(0)
this.a1()},
ayp(d,e){var w=this,v=w.cy
if(v!=null)v.a2(0)
w.m(new A.cn3(w,d,e))
w.cy=C.cD(D.bJ,new A.cn4(w))},
AI(d){return this.ayp(d,!0)},
c34(d){var w=this,v=w.db
if(v!=null)v.a2(0)
w.m(new A.cmW(w,d))
w.db=C.cD(D.jA,new A.cmX(w))},
aZs(d){var w
A:{if("cable"===d&&this.d.b.length===0){w=" There is no box yet: put an outlet box on a stud first, then pull the cable to it."
break A}if("ceiling"===d&&this.d.La(0,"ceiling")>0){w=" The light box is already hung."
break A}w=""
break A}return w},
bV4(d,e){var w=this
w.m(new A.cmU(w,e,d))
w.AI("You picked up the "+B.Du.h(0,d).a.toLowerCase()+". "+C.w(B.aHS.h(0,e))+w.aZs(e))},
aqB(d){var w,v=this
v.m(new A.cnd(v,d))
w=B.aHS.h(0,d)
w.toString
v.AI(w+v.aZs(d))},
bV0(d,e){var w=this,v=w.gf1(),u=A.hy_(v,d,e)
if(u==null){w.ayp(y.c,!1)
return}if(w.z){w.z=!1
v.r=B.Ed
v.f=520}w.m(new A.cmT(w,u))
v.a7X(Math.min(v.c,70),0.07,u)
w.AI(y.L)},
bPp(){var w,v,u,t,s=this,r=s.ax
r=C.C(r,C.a6(r).k("cs.E"))
w=r.length
v=s.d
u=0
t=0
for(;t<r.length;r.length===w||(0,C.K)(r),++t)if(v.bfn(r[t]).a)++u
s.m(new A.cmP(s))
r=u===1?"hole":"holes"
s.AI(""+u+" "+r+" drilled. Now tap the box with the Cable roll again.")},
caS(d){var w,v,u,t,s,r,q,p=this,o=d===0
if(!o){w=d===p.CW&&p.as.gf2()/1000-p.cx<0.45
p.CW=d
p.cx=p.as.gf2()/1000
v=w}else v=!1
if(v)return
u=B.aHQ.h(0,d)
if(u!=null){p.bV4(d,u)
return}if(o){p.m(new A.cmY(p))
return}o=p.r
if(o==="look"){t=p.gla().b.h(0,d)
if(t!=null){p.m(new A.cmZ(p,d))
p.gf1().D0(t.c)
p.AI(t.a+": "+t.b)}return}A:{if("outlet"===o||"switch"===o||"ceiling"===o){v=p.d
o=v.UK(o,d)
break A}if("drill"===o){o=p.d
v=o.bfn(d)
s=v
v=o
o=s
break A}o=p.d
v=o.aJh(0,d)
s=v
v=o
o=s
break A}r=o.a
if(r)A.rd()
else A.fJ(180,220,0.25,"square")
if(p.r==="cable"&&r){q=v.bcS(d)
if((q==null?null:q.w)!=null)p.at.n(0,d,p.as.gf2()/1000)}p.m(new A.cn_(p,o,d))
p.ayp(o.b,r)
o=o.c
if(o.length!==0)p.c34(o)
if(v.gBH(0)&&!p.Q){p.Q=!0
$.aW.x1$.push(new A.cn0(p))}},
bSg(){var w=null,v=this.c
if(v==null)return
C.ch(w,w,!0,w,new A.cmS(this),v,w,!0,!0,x.H)},
cEz(){var w,v=this
v.m(new A.cn5(v))
if(v.z){w=v.gf1()
w.r=null
w.f=620
w.hb(330,0.85,B.EG,0.5)
v.AI(y.i)}else{w=v.gf1()
w.r=B.Ed
w.f=520
w.hb(120,0.07,B.AC,0)
v.AI("Back inside the room. Drag to turn round and see every wall.")}},
caU(){this.m(new A.cn1(this))
this.AI("Everything is taken out again. Start with the boxes.")},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.d,l=m.gbkC(),k=m.b,j=k.length>=5||m.La(0,"outlet")>=1,i=m.La(0,"switch"),h=m.La(0,"ceiling"),g=m.a.a
k=k.length!==0&&D.d.cJ(k,new A.cn6())
w=C.a([!0,j,i>=1,h>=1,g!==0,k,m.gBH(0)],x.u)
v=D.d.bg(w,new A.cn7())
k=v<0?"All done":"Step "+(v+1)+"/7"
j=o.gla()
i=o.gf1()
h=o.w
g=o.x
u=o.y
t=h!==0?o.gla().b.h(0,o.w):n
s=o.z
r=s?"Inside":"Whole room"
q=s?D.Pc:D.Pq
p=x.p
s=A.K3(!1,n,i,new A.cn8(o),n,u,h,t,n,n,g,54,o.gbV_(),new A.cn9(o),o.gcaR(),j,!1,n,n,C.a([A.uo(r,D.ay,q,s,o.gcEy()),D.N],p))
q=A.hy1(B.d4U,o.r,o.gaqA())
m=C.a([C.E(C.d(""+new C.Y(l,new A.cna(),C.T(l).k("Y<1>")).gK(0)+"/"+l.length+" done \xb7 outlets "+m.La(0,"outlet")+" \xb7 switch "+m.La(0,"switch")+" \xb7 light "+m.La(0,"ceiling")+" \xb7 "+D.k.ac(m.gbfG(),0)+" ft of cable",n,2,n,n,n,n,B.aU9,n,n,n),1),D.ad],p)
if(o.ax.a!==0)D.d.v(m,C.a([A.qw("Drill the lit",D.uz,o.gbPo(),B.BE),D.ad],p))
m.push(A.qw("Start over",D.k_,o.gcaT(),D.ac))
return A.Iv(D.ay,new A.cnb(d,w),C.x(C.a([q,D.N,C.B(m,D.m,n,D.e,D.i,0,n,n)],p),D.m,n,D.e,D.P,0,D.p),s,k,"Wiring a house",n)}}
var z=a.updateTypes(["~()","~(f3)","m(m,fm)","P(nz)","P(mi)","P(a5C)","q(q)","P(iR)","ai<kr>(I)","~(G)","P(la)","P(Ed)","P(Yb)","P(fm)","P(MJ)","P(aai)","P(zh)","P(a4z)","q(I,I)","P(ot)","aB<~>()","G(mi,mi)","P(Ig)","P(Pe)","P(q)","~(u,av)","P(a4N)","m(nz)","~(xp,av,I)","~(mi)","q(I,I,I)","q(G)","P(nR)","E8(Z)","P(PW)","P(Ap)","P(Mb)","J5(Z)","P(MF)","m(iR)","G(xt,xt)","P(wz)","P(zi)","q(hp)","Ox(Z)","P(rj)","q(I,I[I])","P(Fp)","P(zc)","q(I)","P(abr)","P(Mu)","P(Mv)","P(Cz)","~(G,q,q)","~(G,q,t{r:I})","~(m)","~(q,I,I,I,~(xp,av,I){px:I})","~(G{keepTour:P})","fo(q,q,q,q,G,I,I)","ai<+(q,q)>()","+(q,q)(G)","v(rX)","v(m,ai<rX>)","m(mi)","v(xt)","q(ai<q>,G)","Y_()","G2(m)","CJ()","G(Ap)","Wu(Z)","FW(m)","I(lJ)","ai<fo>(I)","a7q(Z)","~(q,q{note:m?})","mi?(q,q)","P(q,q)","q?(q,q)","I(q)","ai<q>(q,q[G])","~(mi,I,I,I,I,I{note:m?})","~(q,q,q,q,t,I)","I(mi)","ai<kr>()","ai<kr>(ai<kr>)","I(ot)","~(q,q,q,I,I)","~(q,q,q,I,G)","~(q,q,q,q{poster:G})","~(~(f3),q,q)","~(q,q,I,I,t{joint:P})","mi?(m)","~(q,q,G{alongX:P})","~(ai<q>,t)","~(ai<q>)","~(ai<q>{col:t})","~(G,q,t{h:I,w:I})","P(xt)","~(G,ai<q>,t,I,m)","~(G,m,q,q,q,P)","P(Xw)","aB<MQ?>()","G(Ap,Ap)","ai<q>(ai<q>)","~(m,ai<q>{r:I})","~(m,q,q)","~(nz,q,m)","~(m,q,q,G)","G(G,mi)","P(G)","G(Ge,Ge)","~(kr,G)","G(la)","~(G,q,q{col:t,round:P})","cL()","~({done:P})","m(MJ)","~(m,JR,m,m,m)","G(G2,FW)","wz(wz,wz)","~(G,q,q,m,t)","a1v(Z)","q(G,G)","~(G,ai<q>)","~(q,q,q,q)","zi()","G(G,Mv)","P(zh,I,I)","nR()","+(I,I,I,m,m)(Pe,G)","P(wf)","~(G,zh,t{padToo:P})","ot(I)","~(G,Xa,I,I)","~(aD?)","G(Cz,Cz)","hp(G)","I(I,Ed)","Q4()"])
A.c0P.prototype={
$1(d){var w=this.a
w=w===0?d:A.vM(d,w)
return w.a7(0,this.b)},
$S:z+6}
A.c0Q.prototype={
$1(d){var w=this.a
return w===0?d:A.vM(d,w)},
$S:z+6}
A.c0O.prototype={
$4(b5,b6,b7,b8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=this
for(w=b4.b,v=b7.a,u=b7.b,t=b7.c,s=b6.a,r=b6.b,q=b6.c,p=b8.a,o=b8.b,n=b8.c,m=1/w,l=v*m,k=u*m,j=t*m,i=p*m,h=o*m,m=n*m,g=b4.a,f=g.a,e=b4.c,d=x.o,a0=b4.d,a1=b4.e,a2=b4.f,a3=0;a3<w;++a3)for(a4=a3/w,a5=s+v*a4,a6=r+u*a4,a4=q+t*a4,a7=0;a7<w;++a7){a8=a7/w
a9=a5+p*a8
b0=a6+o*a8
a8=a4+n*a8
b1=a9+l
b2=b0+k
b3=a8+j
f.push(new A.kr(C.a([e.$1(new A.q(a9,b0,a8)),e.$1(new A.q(b1,b2,b3)),e.$1(new A.q(b1+i,b2+h,b3+m)),e.$1(new A.q(a9+i,b0+h,a8+m))],d),a0.$1(b5),a1,g.b,a2,g.d,!1,g.c,g.e,g.f,g.w))}},
$S:z+126}
A.c0R.prototype={
$1(d){var w=d*2*3.141592653589793/this.b
return this.a.aJ(0,Math.cos(w)).a7(0,this.c.aJ(0,Math.sin(w)))},
$S:z+31}
A.c0N.prototype={
$2(d,e){var w=3.141592653589793*d/this.a,v=6.283185307179586*e/this.b
return new A.q(Math.sin(w)*Math.cos(v),Math.cos(w),Math.sin(w)*Math.sin(v))},
$S:z+124}
A.c0S.prototype={
$1(d){var w=d*2*3.141592653589793/this.b
return this.a.aJ(0,Math.cos(w)).a7(0,this.c.aJ(0,Math.sin(w)))},
$S:z+31}
A.h1v.prototype={
$1(d){var w=d.b,v=this.a,u=d.c,t=this.b
return new A.q(d.a,w*v-u*t,w*t+u*v)},
$S:z+6}
A.h1t.prototype={
$1(d){var w=this.a
return w===0?d:A.vM(d,w)},
$S:z+6}
A.h1u.prototype={
$1(d){var w=this,v=w.b===0?d:w.c.$1(d)
return J.h2J(w.a.$1(v),w.d)},
$S:z+6}
A.h1s.prototype={
$1(d){var w=this.b===0?d:this.c.$1(d)
return this.a.$1(w)},
$S:z+6}
A.h1g.prototype={
$4(d,e,f,g){var w=-d
return 0.5*(2*e+(w+f)*this.a+(2*d-5*e+4*f-g)*this.b+(w+3*e-3*f+g)*this.c)},
$S:265}
A.bKj.prototype={
$1(d){var w=d.a,v=J.a7(w),u=C.k_(v.h(w,"ngmy_swipe_x3"))
$.ajF=u===!0
w=C.k_(v.h(w,"ngmy_swipe_y3"))
$.ajG=w!==!1},
$S:311}
A.bKk.prototype={
$1(d){},
$S:30}
A.bKl.prototype={
$1(d){d.ar("Bool","ngmy_swipe_x3",$.ajF)
d.ar("Bool","ngmy_swipe_y3",$.ajG)},
$S:311}
A.bKm.prototype={
$1(d){},
$S:30}
A.bKg.prototype={
$4(d,e,f,g){var w
if(d>0.000001)w=(g-e)/d
else w=d<-0.000001?(f-e)/d:1/0
return w},
$S:265}
A.bKo.prototype={
$1(d){var w=this,v=-d.c,u=d.b,t=w.a,s=w.b,r=v*t-u*s,q=d.a,p=w.c,o=w.d
return new A.q(q*p-r*o,u*t+v*s,q*o+r*p)},
$S:z+6}
A.bKn.prototype={
$1(d){var w=this,v=w.a
return v.d.a7(0,w.b.$1(new A.q(w.c*d,w.d*d,d-v.c)))},
$S:z+49}
A.bKi.prototype={
$1(d){var w=this,v=-d.c,u=d.b,t=w.a,s=w.b,r=v*t-u*s,q=d.a,p=w.c,o=w.d
return new A.q(q*p-r*o,u*t+v*s,q*o+r*p)},
$S:z+6}
A.bKh.prototype={
$1(d){var w=this,v=w.a
return v.d.a7(0,w.b.$1(new A.q(w.c*d,w.d*d,d-v.c)))},
$S:z+49}
A.cvj.prototype={
$1(d){var w=this,v=d.a,u=w.a,t=d.c,s=w.b,r=-v*s+t*u,q=d.b,p=w.c,o=w.d
return new A.q(v*u+t*s,q*p-r*o,-(q*o+r*p))},
$S:z+6}
A.cvk.prototype={
$1(d){var w=this.a.c,v=this.b.$1(d.aG(0,w.d))
return new A.q(v.a,v.b,v.c+w.c)},
$S:z+6}
A.cvi.prototype={
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
b0=A.i2h(u)
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
if(t&&d4.d===u){d2=C.ar(c5,D.b_,0.28+0.14*Math.sin(d2.gGY(0)*6))
d2.toString
c3+=0.12
c5=d2}d2=255*c4*0.55
c6=D.k.V(D.k.E(c5.gb6(c5)*255*c3+d2,0,255))
c7=D.k.V(D.k.E(c5.gbc()*255*c3+d2,0,255))
c8=D.k.V(D.k.E(c5.gb9(c5)*255*c3+d2,0,255))
d2=$.S()
s=C.a([],x.g)
c9=new C.aF(d2.r,D.ag,null,null,s)
c9.D(new C.aY(d3.f[0],d3.r[0]))
for(f=1;f<v;++f){d2=new C.aq(d3.f[f],d3.r[f])
s.push(d2)
r=c9.f
if(r!=null)d2.bx(r)
d2=c9.e
if(d2!=null)d2.a.delete()
c9.e=null}c9.D(new C.bt())
d2=d4.f
d3=C.h3q(c6,c7,c8,d2)
s=d4.d
u=s===u&&t
d0=new A.Ge(d4.y,d4.z,null,c9,d3,c0-d4.x,s,d2<0.99,u)
d0.e=c1<2&&c2<2
d1.go.push(d0)
d0.c=d5},
$S:z+113}
A.cvc.prototype={
$1(d){return d.c>=1},
$S:z+24}
A.cvd.prototype={
$1(d){var w,v,u,t,s,r,q,p,o=this,n=!o.c||o.d>=o.e[0],m=o.f,l=o.b
if(n)A.i3a(d,m,o.r,l.gGY(0))
else{n=$.hFd()
C.Ec(m)
w=n.a
v=w.get(m)
u=D.k.bf(l.gGY(0)*5)
t=v==null
if(t)s=o.a.x<10
else s=v.a!==u&&o.a.w<3
if(s){$.S()
r=new C.p7()
m.c.$3(C.zd(r,null),new C.av(m.d,m.e),l.gGY(0))
if(!t)v.b.t()
n.n(0,m,new A.cFi(u,r.nk()))
n=o.a
if(t)++n.x
else ++n.w}C.Ec(m)
n=w.get(m)
q=n==null?null:n.b
if(q!=null){n=m.d
m=m.e
p=A.haZ(o.r,n,m)
if(p!=null){l=d.a
J.bl(l.save())
d.aw(0,p.a)
l.clipRect(C.bH(new C.a3(0,0,n,0+m)),$.mA()[1],!0)
m=q.b
m===$&&C.c()
m=m.a
m===$&&C.c()
m=m.a
m.toString
l.drawPicture(m)
l.restore()}}else{$.S()
n=C.J()
n.r=D.cr.gp(0)
d.aK(o.w,n)}}},
$S:744}
A.cvb.prototype={
$2(d,e){var w=this.a
return A.oN(A.oN(w[0],w[1],d),A.oN(w[3],w[2],d),e)},
$S:z+18}
A.cve.prototype={
$1(d){return d.c<1},
$S:z+24}
A.cvf.prototype={
$1(d){return A.i3b(d,this.b,this.c,8,6,this.a.gGY(0))},
$S:744}
A.cvg.prototype={
$2(d,e){return D.k.aO(e,d)},
$S:1775}
A.cvh.prototype={
$2(d,e){var w,v=D.o.aO(d.a,e.a)
if(v!==0)return v
w=D.k.aO(e.d,d.d)
return w!==0?w:D.o.aO(d.c,e.c)},
$S:z+112}
A.f4U.prototype={
$1(d){var w=this.a,v=w.r,u=d.a
w.r=d
w.a.d.a7c(D.k.E((u-v.a)/1e6,0,0.1))
w.f.sp(0,u/1e6)},
$S:7}
A.f4T.prototype={
$1(d){if(x.ej.b(d))this.a.a.d.apR(1+d.gtJ().b*0.0012)},
$S:251}
A.f4R.prototype={
$1(d){var w=this.a
w.w=1
w.x=d.c},
$S:249}
A.f4S.prototype={
$1(d){var w,v,u,t,s,r=d.w,q=this.a
if(r!==q.x){q.x=r
q.w=d.d}if(r>=2){r=d.d
w=q.w/r
q.w=r
if(isFinite(w)&&w>0)q.a.d.apR(w)}else{r=q.a.d
q=d.a
v=$.ajF?-1:1
v=q.a*0.009*v
u=$.ajG?-1:1
r.dx=r.db=null
v=r.a+=v
if(!r.CW){t=r.ay
s=r.ch
r.a=D.k.E(v,t-s,t+s)}r.b=D.k.E(r.b+-q.b*0.009*u,r.at,r.ax)
r.ae4()
r.aW()}},
$S:225}
A.f4L.prototype={
$1(d){return this.a.y=d.b},
$S:22}
A.f4M.prototype={
$0(){var w,v=this.a,u=v.a.as
u.toString
v=v.y
w=this.b.gY(0)
return u.$2(v,w==null?D.ax:w)},
$S:0}
A.f4O.prototype={
$1(d){var w=this.a
if(++w.at===1){w.z=d.geZ()
w.Q=d.gls(d)
w.as=!1}else w.as=!0},
$S:70}
A.f4P.prototype={
$1(d){var w=this.a,v=w.z
if(v!=null&&d.geZ().aG(0,v).gcC()>14)w.as=!0},
$S:192}
A.f4N.prototype={
$1(d){var w=this.a
w.at=Math.max(0,w.at-1)
w.as=!0},
$S:134}
A.f4Q.prototype={
$1(d){var w,v=this.a,u=v.at
v.at=Math.max(0,u-1)
w=v.z
if(u===1&&!v.as&&w!=null&&D.o.ao(d.gls(d).a-v.Q.a,1000)<450){u=v.a.f
if(u!=null)u.$1(v.e.cXM(d.geZ()))}if(v.at===0)v.z=null},
$S:112}
A.fmm.prototype={
$0(){return new A.Q4(!1,C.a([],x.z),C.a([],x.t))},
$S:z+140}
A.bUI.prototype={
$0(){var w=0,v=C.j(x.g7),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j
var $async$$0=C.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return C.b($.rg().jl(0,q.a),$async$$0)
case 7:p=e
m=q.b
l=x.N
o=new A.MQ(m,C.U(l,x.a6),C.U(l,x.bB),C.a([],x.dQ),C.U(l,x.gN))
w=8
return C.b(o.PI(p),$async$$0)
case 8:$.h4e.n(0,m,o)
$.h4c.W(0,m)
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
$.h4c.M(0,m)
u=null
r=[1]
w=5
break
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
$.h4d.W(0,q.b)
w=r.pop()
break
case 6:case 1:return C.h(u,v)
case 2:return C.f(s.at(-1),v)}})
return C.i($async$$0,v)},
$S:z+103}
A.bUz.prototype={
$1(d){return D.a.q(d,"hips")},
$S:3}
A.bUt.prototype={
$2(d,e){var w,v=Math.floor(d),u=Math.floor(e),t=this.b,s=t.a,r=Math.min(s-1,D.k.bf((d-v)*s))
v=t.b
w=(Math.min(v-1,D.k.bf((e-u)*v))*s+r)*4
s=this.a
t=t.c
s.c=s.c+t[w]
s.b=s.b+t[w+1]
s.a=s.a+t[w+2]},
$S:200}
A.bUs.prototype={
$1(d){return D.k.V(D.k.E(d,0,1)*255)},
$S:272}
A.bUB.prototype={
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
k=D.k.bf((q-v.c)/l)
j=D.k.bf((p-v.b)/l)
i=D.k.bf((u[r+2]-v.a)/l)
r=m?1:0
w[s]=g.c3(0,((k*1024+j)*1024+i)*2+r,new A.bUC(g))}e[0]=g.a
return w},
$S:1777}
A.bUC.prototype={
$0(){return this.a.a},
$S:96}
A.bUD.prototype={
$1(d){var w,v,u,t,s,r,q=C.aV(x.S)
for(w=this.a.e,v=w.length,u=0;u<v;u+=3){t=d[w[u]]
s=d[w[u+1]]
r=d[w[u+2]]
if(t===s||s===r||t===r)continue
q.M(0,A.hiG(t,s,r))}return q.a},
$S:1778}
A.bUA.prototype={
$2(d,e){var w,v,u,t=this.a,s=this.b.h(0,d)
s.toString
w=J.a7(e)
v=D.k.V(w.h(e,0)/w.h(e,3))
u=D.k.V(w.h(e,1)/w.h(e,3))
w=D.k.V(w.h(e,2)/w.h(e,3))
t.$flags&2&&C.aj(t)
t[s]=(v<<16|u<<8|w|4278190080)>>>0},
$S:1779}
A.bUx.prototype={
$0(){return new Float64Array(this.a*16)},
$S:747}
A.bUy.prototype={
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
if(n<0)D.oF.hi(k,j,j+16,h)
else A.hiH(k,n*16,h,0,k,j)
k=u.f
k===$&&C.c()
k=k[a1]
j=k.length
m=0
for(;m<k.length;k.length===j||(0,C.K)(k),++m)l.$1(k[m])},
$S:32}
A.bUG.prototype={
$1(d){var w,v,u
for(w=this.a.z,w=new C.hG(w,w.r,w.e);w.C();){v=w.d
u=v.toLowerCase()
if(C.cV(u,d,0))return v}return null},
$S:310}
A.bUE.prototype={
$1(d){return!D.a.q(d.toLowerCase(),"pose")},
$S:3}
A.bUF.prototype={
$0(){var w=this.a.z
return new C.cy(w,C.a6(w).k("cy<1>")).gI(0)},
$S:23}
A.bUJ.prototype={
$1(d){var w=this,v=w.c,u=d*3,t=w.a,s=w.d,r=(v[u]-t.b)*s,q=v[u+1],p=w.b.ay,o=(v[u+2]-t.a)*s
t=w.f
u=w.r
return new A.q(r*t+o*u+w.w,(q-p)*s+w.e,-r*u+o*t+w.x)},
$S:z+31}
A.bUu.prototype={
$3(d,e,f){var w=this,v=w.e
return w.b.a7(0,w.c.aJ(0,w.a.a*f+0.25)).a7(0,w.d.aJ(0,d*v)).a7(0,w.f.aJ(0,e*v))},
$2(d,e){return this.$3(d,e,1)},
$S:z+46}
A.bUw.prototype={
$6(d,e,f,g,h,i){var w=this
return w.a.push(new A.kr(C.a([d,e,f,g],x.o),w.b,h,w.c,0,1,!1,0,i,2,w.d))},
$S:z+83}
A.bUv.prototype={
$6(d,e,f,g,h,i){var w=this.b
return this.a.$6(w.$2(d-f,e),w.$2(d,e-g),w.$2(d+f,e),w.$2(d,e+g),h,i)},
$S:1781}
A.fAf.prototype={
$2(d,e){return D.k.V(d+(D.k.E(e,0,255)-d)*0.8)},
$S:750}
A.bID.prototype={
$1(d){return d.d+this.a.f*d.e},
$S:z+73}
A.bIC.prototype={
$1(d){return d.a===J.r(this.a,"template")},
$S:z+45}
A.fTq.prototype={
$6$lines$w(d,e,f,g,h,i){var w=null,v=C.fz("\u2026",w,h,w,C.cT(w,w,w,w,w,w,w,w,w,C.l(w,w,f,w,w,w,w,w,w,w,w,e,w,w,i,w,1.1,!0,w,w,w,w,w,w,w,w),d),D.a4,D.bX,w,D.dA,D.bV)
v.o2(g)
return v},
$4(d,e,f,g){return this.$6$lines$w(d,e,f,g,2,D.u)},
$5$w(d,e,f,g,h){return this.$6$lines$w(d,e,f,g,2,h)},
$S:1783}
A.fBE.prototype={
$1(d){var w=this.a
return A.vM(d,w.c).a7(0,new A.q(w.a,0,w.b))},
$S:z+6}
A.fBF.prototype={
$6$px(d,e,f,g,h,i){var w=new A.fBG(e,d),v=-f/2,u=g/2,t=f/2,s=-g/2
this.a.push(new A.fo(C.a([w.$2(v,u),w.$2(t,u),w.$2(t,s),w.$2(v,s)],x.o),0,h,i,i*g/f,30,this.b,0,!1))},
$5(d,e,f,g,h){return this.$6$px(d,e,f,g,h,260)},
$S:z+57}
A.fBG.prototype={
$2(d,e){return A.vM(new A.q(d,e,0),this.a).a7(0,this.b)},
$S:z+18}
A.fBx.prototype={
$3(d,e,f){return A.bCn(d,e,f,0)},
$S:24}
A.fBy.prototype={
$3(d,e,f){return A.bCn(d,e,f,3)},
$S:24}
A.fBz.prototype={
$3(d,e,f){return A.bCn(d,e,f,8)},
$S:24}
A.fBA.prototype={
$3(d,e,f){return A.bCn(d,e,f,9+this.a)},
$S:24}
A.fBB.prototype={
$3(d,e,f){return A.bCn(d,e,f,12+this.a)},
$S:24}
A.fBC.prototype={
$3(d,e,f){return A.hBs(d,e,f,this.a,this.b)},
$S:24}
A.fBD.prototype={
$3(d,e,f){return A.hBs(d,e,f,this.a,this.b)},
$S:24}
A.fnz.prototype={
$4(d,e,f,g){var w=-d,v=this.a
return 0.5*(2*e+(w+f)*v+(2*d-5*e+4*f-g)*v*v+(w+3*e-3*f+g)*v*v*v)},
$S:265}
A.fqY.prototype={
$1(d){var w=this.a,v=J.a7(w)
return v.h(w,D.o.E(d,0,v.gK(w)-1))},
$S:z+61}
A.fAl.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n=A.hx0(this.a),m=x.n,l=C.a([],m)
for(w=J.a7(n),v=0;v<w.gK(n)-1;v=u){u=v+1
t=w.h(n,u).a
s=w.h(n,v).a
l.push(Math.pow(Math.max(new A.q(t.a-s.a,t.b-s.b,t.c-s.c).gqc(),250),0.75))}r=D.d.f6(l,new A.fAk())
q=C.a([0],m)
for(m=l.length,p=0;p<l.length;l.length===m||(0,C.K)(l),++p){o=l[p]
q.push(D.d.gak(q)+30*o/r)}return q},
$S:1785}
A.fAk.prototype={
$2(d,e){return d+e},
$S:80}
A.fAi.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8=this.a,a9=B.dBI.h(0,a8.a)
if(a9==null){w=C.a([],x.t)
v=a8.w.length
u=v===0
t=0
for(;;){if(!(t<(u?1:v)))break
w.push(t);++t}a9=new C.z(w,0)}s=Math.max(Math.max(a8.gapz(),a8.gbeU()),a8.gGW()*1.3)
w=a8.r
r=new A.q(a8.ga4I(0),w+a8.gGW()/2,a8.ga4K())
q=w+a8.gGW()
v=s*0.55
p=C.a([new C.z(new A.q(a8.ga4I(0)+v,q+s*0.5,a8.ga4K()+s*1.15),r)],x.dt)
for(u=a9.a,o=x.o,n=a8.w,m=a8.e,l=a8.f,k=a9.b,v=q+v,j=null,i=0;i<u.length;++i,j=a2){h=n[u[i]]
g=h.e
f=m*g
e=l*g
d=new A.q(h.a,w+h.d+e/2,h.b)
g=h.c
a0=Math.sin(g)
a1=Math.cos(g)
a2=new A.q(a0,0,a1)
a3=new A.fAj(d,a2,f*1.5,new A.q(Math.cos(g),0,-Math.sin(g)),f,e)
a4=D.o.F(k+i,3)
A:{if(0===a4){g=C.a([a3.$3(1.8,0,1.1),a3.$3(1,-0.22,-0.35),a3.$3(0.9,0.3,-0.2)],o)
break A}if(1===a4){g=C.a([a3.$3(0.9,1.5,-0.25),a3.$3(1.05,0,0.05),a3.$3(0.85,-1.3,0.15)],o)
break A}g=C.a([a3.$3(1.3,0.2,-0.45),a3.$3(1.1,0,0.45),a3.$3(1.7,-0.3,1.3)],o)
break A}if(j!=null&&j.a*a0+j.c*a1<0.3){a0=D.d.gak(p).a
a1=D.d.gI(g)
p.push(new C.z(new A.q((a0.a+a1.a)*0.5+j.c*s*0.5,v,(a0.c+a1.c)*0.5-j.a*s*0.5),r))}for(a5=0;a5<3;++a5)p.push(new C.z(g[a5],d))}a6=new A.q(a8.ga4I(0)-s*0.7,q+s*0.6,a8.ga4K()-s)
if(j!=null){a7=D.d.gak(p).a.a7(0,a6).aJ(0,0.5)
p.push(new C.z(new A.q(a7.a+j.c*s*0.5,v,a7.c-j.a*s*0.5),r))}p.push(new C.z(a6,r))
return p},
$S:z+60}
A.fAj.prototype={
$3(d,e,f){var w=this
return w.a.a7(0,w.b.aJ(0,w.c*d)).a7(0,w.d.aJ(0,w.e*e)).a7(0,new A.q(0,w.f*f,0))},
$S:z+30}
A.fBp.prototype={
$1(d){var w=this.b,v=w*d.b,u=d.c,t=this.c
return this.a.a7(0,new A.q(Math.sin(v)*u*t.gei(0)+w*d.e*t.gapz(),d.d*t.gGW(),Math.cos(v)*u*t.gei(0)))},
$S:z+43}
A.fBq.prototype={
$1(d){var w=this.c
return this.a.a7(0,new A.q(this.b*d.f*w.gapz(),d.r*w.gGW(),0))},
$S:z+43}
A.fBr.prototype={
$1(d){var w=this.a
return w[D.o.E(d,0,w.length-1)]},
$S:z+138}
A.c4Q.prototype={
$1(d){return d.a===this.a.d.a},
$S:z+45}
A.c4O.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new A.c4N())},
$S:29}
A.c4N.prototype={
$0(){},
$S:0}
A.c4B.prototype={
$0(){var w=this.a
w.f=A.hbE(w.gzC(),w.d)
w.abJ()},
$S:0}
A.c4H.prototype={
$0(){return this.a.x=this.b},
$S:0}
A.c4P.prototype={
$0(){var w=this.a
w.x=0
w.y=!1
w.z=""},
$S:0}
A.c4E.prototype={
$0(){var w=this.a
w.x=-1
w.y=!1
w.z=this.b?"That was the 30 second drone shot. Press it again any time, or change the board and film it again.":""},
$S:0}
A.c4D.prototype={
$0(){var w=this.a
return w.f=A.hbE(w.gzC(),w.d)},
$S:0}
A.c4b.prototype={
$0(){},
$S:0}
A.c4C.prototype={
$0(){return this.a.z="That picture could not be opened."},
$S:0}
A.c4G.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=C.aG(d,k,x.w).w,i=x.p,h=C.a([],i)
for(w=this.a,v=w.d,u=0;u<12;++u){t=B.a45[u]
s=t.a
r=v.a===s
q=r?D.d7:D.cr
p=new C.aP(16,16)
o=r?F.eY:D.bz
n=new C.ay(o,r?2:1,D.r,-1)
o=C.a([new C.y(t.b,k,D.n4,k,k,k,k,k,k,k,k,k),D.b2],i)
r=t.w.length
m=r===0
if((m?1:r)>1){l=new C.aP(10,10)
o.push(C.p(k,new C.y(""+(m?1:r)+" boards",k,A7.aUF,k,k,k,k,k,k,k,k,k),D.f,k,k,new C.o(D.dY,k,k,new C.bh(l,l,l,l),k,k,D.n),k,k,k,k,D.yD,k,k,k))}if(v.a===s)o.push(B.eoA)
h.push(C.aA(k,C.p(k,C.x(C.a([new C.ca(D.aL,D.e,D.i,D.m,k,D.p,k,0,o,k),D.am,new C.y(t.c,k,D.j8,k,k,k,k,D.a1,k,2,k,k),D.cS,new C.by(1,D.bb,new C.y(t.d,k,B.fn0,k,k,k,k,D.V3,k,k,k,k),k)],i),D.E,k,D.e,D.i,0,D.p),D.f,k,k,new C.o(q,k,new C.bG(n,n,n,n),new C.bh(p,p,p,p),k,k,D.n),k,k,k,k,B.bzY,k,k,k),D.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new A.c4F(w,d,t),k,k,k,k,k,k,!1,D.a3))}return C.bn(!0,new C.D(B.bBn,C.x(C.a([B.fYV,D.av,B.fRQ,D.ae,new C.cU(new C.aZ(0,1/0,0,j.a.b*0.66),C.kR(1.05,h,2,10,10,k,k,!0),k)],i),D.E,k,D.e,D.P,0,D.p),k),!0,!1,D.af,!0,!0)},
$S:26}
A.c4F.prototype={
$0(){C.a5(this.b,!1).O(null)
this.a.cwM(this.c.a)},
$S:0}
A.c4A.prototype={
$0(){var w=this,v=w.b.d.b[w.a.a]
w.c.saZ(0,v.b)
w.d.saZ(0,v.c)
w.e.saZ(0,v.d)},
$S:0}
A.c4z.prototype={
$1(d){var w=this
return new C.e2(new A.c4w(w.a,w.b,w.c,w.d,w.e,w.f),null)},
$S:20}
A.c4w.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=this,o=null,n=p.b,m=p.a,l=n.d.b[m.a],k=new A.c4x(m,n),j=new A.c4y(e),i=C.aG(d,o,x.w).w,h=x.p,g=C.a([B.fEP,D.av,C.d(l.a?"Now it shows the NGMY logo, words and ads. Change anything and it becomes yours.":"This sign is your own.",o,o,o,o,o,o,I.tq,o,o,o)],h),f=n.gzC().w.length
if((f===0?1:f)>1){f=C.a([],h)
w=p.c
v=0
for(;;){u=n.gzC().w.length
if(!(v<(u===0?1:u)))break
u=m.a===v
t=u?D.d7:D.cr
s=new C.aP(18,18)
r=new C.ay(u?F.eY:D.aX,2,D.r,-1)
q=v+1
f.push(C.aA(o,C.p(o,new C.y("Sign "+q,o,D.lr,o,o,o,o,o,o,o,o,o),D.f,o,o,new C.o(t,o,new C.bG(r,r,r,r),new C.bh(s,s,s,s),o,o,D.n),o,o,o,o,D.lG,o,o,o),D.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new A.c4g(m,v,w,e),o,o,o,o,o,o,!1,D.a3))
v=q}D.d.v(g,C.a([D.W,B.fZ_,D.am,C.bX(D.bG,f,D.br,o,8,8)],h))}g.push(D.ae)
g.push(k.$3("Big words",p.d,new A.c4h(l)))
g.push(k.$3("Smaller words",p.e,new A.c4i(l)))
g.push(k.$3("Bottom line (web address)",p.f,new A.c4j(l)))
f=l.f!=null
w=f?"Your logo is on (change)":"Put your own logo (default: NGMY logo)"
g.push(j.$4(w,f,new A.c4k(m,n),new A.c4l(m,n,l)))
f=l.r!=null
w=f?"Your picture is on (change)":"Put your own picture"
g.push(j.$4(w,f,new A.c4m(m,n),new A.c4n(m,n,l)))
g.push(D.av)
g.push(B.fSY)
g.push(D.am)
f=C.a([],h)
for(w=x.O,v=0;v<6;++v){u=B.a5S[v]
u=C.a([u.b,u.c],w)
t=new C.aP(10,10)
r=new C.ay(l.e===v&&!l.a?F.eY:D.aX,2,D.r,-1)
s=B.a5S[v]
f.push(C.aA(o,C.p(o,new C.cf(D.A,o,o,new C.y(s.a,o,new C.F(!0,s.d,o,o,o,o,11,D.H,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),o,o,o,o,o,o,o,o,o),o),D.f,o,o,new C.o(o,o,new C.bG(r,r,r,r),new C.bh(t,t,t,t),o,new C.a9(D.a5,D.a8,D.x,u,o,o),D.n),o,o,o,o,D.hA,o,o,74),D.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new A.c4o(m,n,l,v,e),o,o,o,o,o,o,!1,D.a3))}g.push(C.bX(D.bG,f,D.br,o,8,8))
g.push(D.aB)
m=n.gzC().w.length
g.push(C.B(C.a([C.E(C.ex(B.bYJ,C.d((m===0?1:m)>1?"All signs back to the NGMY default":"Back to the NGMY default",o,o,o,o,o,o,B.fzn,o,o,o),new A.c4p(n,l,p.c,e),o),1),D.as,C.bI(D.xd,o,new A.c4q(d),o)],h),D.m,o,D.e,D.i,0,o,o))
return new C.D(new C.Q(16,16,16,i.f.d+16),C.ci(C.x(g,D.E,o,D.e,D.P,0,D.p),D.t,o,D.y,o,o,o,o,D.ah),o)},
$S:103}
A.c4x.prototype={
$3(d,e,f){var w=null
return new C.D(D.d1,C.aM(w,D.Y,!1,w,!0,D.t,w,C.aN(),e,w,w,w,w,w,2,C.bs(w,new C.b6(4,C.n(12),D.a0),w,w,w,w,w,w,!0,w,w,w,w,w,w,D.cr,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,D.Vo,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w),D.y,!0,w,!0,w,!1,w,D.aj,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,new A.c4r(this.a,this.b,f),w,w,w,!1,w,w,!1,w,!0,w,D.aa,w,w,w,w,w,w,w,w,w,w,w,D.df,!0,D.a4,w,D.an,w,w,w,w),w)},
$S:1786}
A.c4r.prototype={
$1(d){this.c.$1(d)
this.b.ZW(this.a.a)},
$S:2}
A.c4y.prototype={
$4(d,e,f,g){var w=null,v=this.a,u=e?D.e6:D.uv
u=C.a([C.E(C.ex(C.X(u,e?D.ba:D.ac,w,w,w,w),C.d(d,w,w,w,w,w,w,D.df,w,w,w),new A.c4u(f,v),w),1)],x.p)
if(e)u.push(C.aH(w,w,w,w,D.rV,w,w,w,new A.c4v(g,v),w,w,w,w,w,w))
return new C.D(D.ct,C.B(u,D.m,w,D.e,D.i,0,w,w),w)},
$S:1787}
A.c4u.prototype={
$0(){var w=0,v=C.j(x.H),u=this
var $async$$0=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:u.a.$0()
w=2
return C.b(C.bP(D.nr,null,x.H),$async$$0)
case 2:u.b.$1(new A.c4t())
return C.h(null,v)}})
return C.i($async$$0,v)},
$S:1}
A.c4t.prototype={
$0(){},
$S:0}
A.c4v.prototype={
$0(){this.a.$0()
this.b.$1(new A.c4s())},
$S:0}
A.c4s.prototype={
$0(){},
$S:0}
A.c4g.prototype={
$0(){var w=this
w.a.a=w.b
w.c.$0()
w.d.$1(new A.c4f())},
$S:0}
A.c4f.prototype={
$0(){},
$S:0}
A.c4h.prototype={
$1(d){return this.a.b=d},
$S:2}
A.c4i.prototype={
$1(d){return this.a.c=d},
$S:2}
A.c4j.prototype={
$1(d){return this.a.d=d},
$S:2}
A.c4k.prototype={
$0(){return this.b.J2(this.a.a,!0)},
$S:0}
A.c4l.prototype={
$0(){var w=this.c
w.w=w.f=null
this.b.ZW(this.a.a)},
$S:0}
A.c4m.prototype={
$0(){return this.b.J2(this.a.a,!1)},
$S:0}
A.c4n.prototype={
$0(){var w=this.c
w.x=w.r=null
this.b.ZW(this.a.a)},
$S:0}
A.c4o.prototype={
$0(){var w=this
w.c.e=w.d
w.b.ZW(w.a.a)
w.e.$1(new A.c4e())},
$S:0}
A.c4e.prototype={
$0(){},
$S:0}
A.c4p.prototype={
$0(){var w=this,v=w.a,u=v.gzC().w.length
if((u===0?1:u)>1)v.d.cZL()
else w.b.bkg()
w.c.$0()
v.m(new A.c4c())
v.J3()
w.d.$1(new A.c4d())},
$S:0}
A.c4c.prototype={
$0(){},
$S:0}
A.c4d.prototype={
$0(){},
$S:0}
A.c4q.prototype={
$0(){C.a5(this.a,!1).O(null)
return null},
$S:0}
A.c4K.prototype={
$0(){return C.a5(this.a,!1).im()},
$S:0}
A.c4L.prototype={
$0(){var w=this.a
return w.m(new A.c4J(w))},
$S:0}
A.c4J.prototype={
$0(){return this.a.y=!1},
$S:0}
A.c4M.prototype={
$0(){var w=this.a
return w.m(new A.c4I(w))},
$S:0}
A.c4I.prototype={
$0(){return this.a.y=!0},
$S:0}
A.fE9.prototype={
$1(d){return d.a===this.a},
$S:z+42}
A.fEa.prototype={
$0(){return D.d.gI(B.RD)},
$S:z+127}
A.bN3.prototype={
$1(d){return d.d.q(0,this.a.b)},
$S:z+42}
A.bN5.prototype={
$2(d,e){var w=this.a,v=this.b
return D.k.aO(w.aaI(d.c,d.d,new C.z(v.c,v.d)),w.aaI(e.c,e.d,new C.z(v.c,v.d)))},
$S:z+21}
A.bN6.prototype={
$1(d){return d.f==null},
$S:z+99}
A.bN2.prototype={
$2(d,e){var w,v=d.w
if(v!==e.w)return v?-1:1
v=this.a
w=this.b
return D.k.aO(v.b_u(w,A.yT(d.c)),v.b_u(w,A.yT(e.c)))},
$S:z+40}
A.bN7.prototype={
$2(d,e){var w=D.o.aO(e.b,d.b)
return w!==0?w:D.o.aO(e.c,d.c)},
$S:1788}
A.bN4.prototype={
$2(d,e){var w,v,u=d.w
if(u!==e.w)return u?-1:1
u=this.a
w=this.b
v=this.c
return D.k.aO(u.aaI(w,v,A.yT(d.c)),u.aaI(w,v,A.yT(e.c)))},
$S:z+40}
A.bL8.prototype={
$2(d,e){return(d^D.k.V(e.c)*31+D.k.V(e.d))>>>0},
$S:z+110}
A.c2r.prototype={
$2(d,e){var w,v,u,t,s=null,r=this.a,q=r.c,p=q.d>0
if(p)w=0
else{w=q.c
w=w>0?(1-w/180)*0.5:q.a}v=r.e
if(p)p="\ud83d\udc1b"
else p=q.c>0?"\ud83d\ude34":"\u26a1"
u=x.p
w=C.a([A.h4K(v,p,w)],u)
p=q.e
if(p<0.3||q.f){t=q.f
if(t)p=0.2
t=t?"\ud83e\udd12":"\ud83d\udca7"
D.d.v(w,C.a([new C.a4(s,v/4,s,s),A.h4K(v*0.7,t,p)],u))}if(r.d)D.d.v(w,C.a([new C.a4(s,v/3,s,s),A.h4K(v,"\u26fd",q.b)],u))
return C.x(w,D.m,s,D.e,D.P,0,D.p)},
$S:389}
A.fHF.prototype={
$4(d,e,f,g){var w=f+g/100
return new C.cw([d+100*Math.cos(w),e+100*Math.sin(w),-Math.sin(w),Math.cos(w)])},
$S:1789}
A.fkH.prototype={
$1(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this.b,h=A.Lp(i,a0).a,g=h[0],f=h[1],e=h[2],d=h[3]
for(h=this.a,w=h.a,v=h.b,u=h.c,h=h.d,t=0;t<5;++t){s=B.d_g[t]
for(r=d*s,q=e*s,p=0;p<3;++p){o=B.de2[p]
n=i.a==="bus"
m=n?120:95.94999999999999
l=n?33.54:31.45
k=g+q*m-d*o*l
m=n?120:95.94999999999999
n=n?33.54:31.45
j=f+r*m+e*o*n
if(k>w&&k<v&&j>u&&j<h)return!0}}return!1},
$S:114}
A.bLa.prototype={
$1(d){return d<=0?0:Math.sqrt(220*d)},
$S:5}
A.h1q.prototype={
$7(d,e,f,g,h,i,j){return new A.fo(C.a([d,e,f,g],x.o),0,new A.h1r(h),i,j,6,2,0,!1)},
$S:z+59}
A.h1r.prototype={
$3(d,e,f){return A.mX(d,e,f,this.a+D.k.bf(f/7))},
$S:24}
A.h1o.prototype={
$3(d,e,f){var w=this.a,v=w.b
w=w.a
return A.vM(new A.q(d,e,f),this.b).a7(0,new A.q(v,0,w))},
$S:z+30}
A.h1p.prototype={
$2(d,e){var w=this
return A.vM(new A.q(d,e,0),w.a).a7(0,new A.q(w.b,w.c,w.d))},
$S:z+18}
A.fDI.prototype={
$8(d,e,f,g,h,i,j,k){var w=-g,v=new A.fDJ(d+f*h+w*i,f,w,e+g*h+f*i,g,f),u=-j/2,t=-k/2,s=j/2,r=k/2
this.a.xe(v.$2(u,t),v.$2(s,t),v.$2(s,r),v.$2(u,r),D.bO,B.e8)},
$S:1790}
A.fDJ.prototype={
$2(d,e){var w=this
return new A.q(w.a+w.b*d+w.c*e,0.95,w.d+w.e*d+w.f*e)},
$S:z+18}
A.cCy.prototype={
$1(d){return d.d===this.a},
$S:z+35}
A.cCz.prototype={
$1(d){return d.r},
$S:z+70}
A.cCx.prototype={
$2(d,e){return D.k.aO(d.x,e.x)},
$S:z+104}
A.bKU.prototype={
$1(d){var w
if(d.r<0)w=d.e||d.c<60
else w=!1
return w},
$S:z+23}
A.bL2.prototype={
$3(d,e,f){var w=this.a
return A.mX(d,e,f,w.b.a+w.f+D.k.bf(f/7))},
$S:24}
A.bL3.prototype={
$3(d,e,f){var w=this.a
return A.mX(d,e,f,w.b.a+w.f+3+D.k.bf(f/7))},
$S:24}
A.bL4.prototype={
$3(d,e,f){var w=this.a
return A.mX(d,e,f,w.b.a+w.f+7+D.k.bf(f/7))},
$S:24}
A.bL5.prototype={
$3(d,e,f){return A.mX(d,e,f,this.a.b.a+2+D.k.bf(f/7))},
$S:24}
A.bKV.prototype={
$3(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=this.a,i=j.z
j=j.Q
w=e.a
v=e.b
u=new C.a3(0,0,0+w,0+v)
t=C.br(u,D.ih)
s=$.S()
r=C.J()
r.r=D.dG.gp(0)
d.az(t,r)
r=C.br(u.cr(-6),D.jJ)
t=C.J()
t.b=D.a9
t.c=5
t.r=D.b8.gp(0)
d.az(r,t)
t=D.k.bf(f*3)
q=new C.aF(s.r,D.ag,k,k,C.a([],x.g))
p=w*0.2
o=v*0.5
n=v*0.3
s=p+n
r=n*0.7
m=p-n
if(j){q.D(new C.aY(p,o-n))
j=o+r
q.D(new C.aq(s,j))
q.D(new C.aq(m,j))
q.D(new C.bt())}else{q.D(new C.aY(p,o+n))
j=o-r
q.D(new C.aq(s,j))
q.D(new C.aq(m,j))
q.D(new C.bt())}j=C.J()
j.r=((t&1)===0?D.b8:D.eP).gp(0)
d.aK(q,j)
j=i===1?"L":""+i
l=C.fz(k,k,k,k,C.cT(k,k,k,k,k,k,k,k,k,C.l(k,k,D.bs,k,k,k,k,k,k,k,k,v*0.78,k,k,D.u,k,k,!0,k,k,k,k,k,k,k,k),j),D.a4,D.bX,k,D.dA,D.bV)
l.eg()
j=l.b
i=j.c
j=j.a.c
l.a4(d,new C.u(w*0.62-i/2,v/2-j.gba(j)/2))
return k},
$S:24}
A.bKW.prototype={
$3(d,e,f){return A.mX(d,e,f,1+D.k.bf(f/7))},
$S:24}
A.bKX.prototype={
$3(d,e,f){return A.mX(d,e,f,4+D.k.bf(f/7))},
$S:24}
A.bKY.prototype={
$3(d,e,f){var w=this.a>0?2:5
return A.mX(d,e,f,w+D.k.bf(f/7))},
$S:24}
A.bKZ.prototype={
$3(d,e,f){return A.vL(d,e,f,"NGMY","Welcome")},
$S:24}
A.bL_.prototype={
$2(d,e){var w=this.a,v=C.T(d),u=new C.cP(new C.Y(d,new A.bL0(w),v.k("Y<1>")),new A.bL1(w),v.k("cP<1,G>")).cG(0,0,D.xI)
if(u===2)w="works but is NOT wired safely: open it and check every wire"
else w=u===1?"started: finish the wiring":e
return w},
$S:1791}
A.bL0.prototype={
$1(d){return!this.a.d[d]},
$S:34}
A.bL1.prototype={
$1(d){return this.a.e[d]},
$S:72}
A.bL6.prototype={
$3(d,e,f){return A.i7o(d,e,this.a.a)},
$S:24}
A.bLL.prototype={
$1(d){return!d.f},
$S:z+23}
A.bLI.prototype={
$1(d){return d.b===this.a.a.a},
$S:z+22}
A.bLJ.prototype={
$1(d){return d.b===this.a&&d.c===this.b},
$S:z+22}
A.bLK.prototype={
$1(d){return d.a<0},
$S:z+36}
A.bLP.prototype={
$1(d){var w,v,u,t
for(w=this.a.x,v=w.length,u=0;u<v;++u){t=w[u]
if(t.b===d)return t}return null},
$S:z+93}
A.bLN.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n=this,m=new A.bLO()
switch(d.a.a){case 0:w=n.a.$1("hospital")
if(w!=null)return new C.dY([w.c-34,w.d+52.5+26,3.141592653589793,"duty","\ud83e\ude7a On duty at the hospital"])
break
case 1:v=n.a
u=v.$1("cow")
t=u==null?v.$1("sheep"):u
if(t==null)t=v.$1("horse")
if(t!=null){v=t.c
u=v+34
s=t.d
r=s+22
return new C.dY([u,r,m.$4(u,r,v,s),"feed","\ud83c\udf3e Feeding the animals"])}break
case 2:q=n.a.$1("school")
if(q!=null)return new C.dY([q.c-24,q.d+52.5+26,3.141592653589793,"teach","\ud83d\udcda Teaching"])
break
case 3:t=n.a.$1("car")
if(t!=null)return new C.dY([t.c,t.d+34,3.141592653589793,"wash","\ud83e\uddfd Washing the car"])
break
case 4:q=n.a.$1("shop")
if(q!=null)return new C.dY([q.c+62,q.d+56,2.356194490192345,"cook","\ud83c\udf73 Cooking"])
break
case 5:p=n.a.$1("bench")
if(p!=null)return new C.dY([p.c,p.d+26,3.141592653589793,"rest","\ud83e\ude91 Resting"])
break
case 6:o=n.a.$1("flowers")
if(o!=null){v=o.c
u=v+30
s=o.d
r=s+28
return new C.dY([u,r,m.$4(u,r,v,s),"water","\ud83d\udca7 Watering the flowers"])}break}return new C.dY([-270+e*90,205,0,"",""])},
$S:z+131}
A.bLO.prototype={
$4(d,e,f,g){return Math.atan2(f-d,g-e)},
$S:265}
A.bLM.prototype={
$1(d){return d.b===this.a.a.a},
$S:z+22}
A.bLQ.prototype={
$1(d){var w=d.c
return w==="bathroom"||w==="kitchen"},
$S:z+5}
A.dUr.prototype={
$0(){return this.b.d=this.a.a},
$S:0}
A.dUs.prototype={
$1(d){return this.a.c94()},
$S:11}
A.dUE.prototype={
$0(){},
$S:0}
A.dUy.prototype={
$0(){return this.a.w=this.b},
$S:0}
A.dUz.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.dUx(w))},
$S:0}
A.dUx.prototype={
$0(){return this.a.w=null},
$S:0}
A.dUn.prototype={
$1(d){return B.aJq},
$S:z+37}
A.dUo.prototype={
$0(){},
$S:0}
A.dUH.prototype={
$1(d){return B.aJq},
$S:z+37}
A.dUI.prototype={
$0(){},
$S:0}
A.dUG.prototype={
$0(){var w=this.a
return w.m(new A.dUF(w,this.b))},
$S:0}
A.dUF.prototype={
$0(){return this.a.r=this.b},
$S:0}
A.dUm.prototype={
$0(){return this.a.ac9(this.b)},
$S:0}
A.dUt.prototype={
$0(){return this.a.Jd(this.b.bfF(this.c))},
$S:0}
A.dUu.prototype={
$0(){return this.a.Jd(this.b.aLt(this.c))},
$S:0}
A.dUv.prototype={
$0(){return this.a.Jd(this.b.aDZ(this.c))},
$S:0}
A.dUw.prototype={
$0(){return this.a.aks(this.b)},
$S:0}
A.dUq.prototype={
$1(d){var w,v,u=null,t=this.b,s=this.c,r=t.e[s],q=t.c
q===$&&C.c()
q=q[r.a].a
w=this.a
v=x.p
s=C.B(C.a([new A.ad2(q.e,44,u),D.as,C.E(C.d("Bed "+(s+1)+": "+q.b,u,u,u,u,u,u,D.hv,u,u,u),1),w.Q_("\ud83d\udc89 Treat",new A.dUp(w,t,s),D.c0)],v),D.m,u,D.e,D.i,0,u,u)
t=r.b
return C.x(C.a([s,D.N,w.WP("Care",t,t<30?D.aw:D.aJ),w.WP("Getting better",r.c,D.ba)],v),D.E,u,D.e,D.i,0,D.p)},
$S:307}
A.dUp.prototype={
$0(){return this.a.Jd(this.b.bkS(this.c))},
$S:0}
A.dUB.prototype={
$0(){return this.a.Jd(this.b.aEu("food"))},
$S:0}
A.dUC.prototype={
$0(){return this.a.Jd(this.b.aEu("medicine"))},
$S:0}
A.dUD.prototype={
$0(){var w=0,v=C.j(x.H),u,t=this,s,r
var $async$$0=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:w=3
return C.b(A.aUu(),$async$$0)
case 3:$.Em=null
s=t.a
if(s.c==null){w=1
break}r=s.f
if(r!=null)r.a2(0)
$.a4w=null
s.m(new A.dUA(s))
s.a_f()
case 1:return C.h(u,v)}})
return C.i($async$$0,v)},
$S:1}
A.dUA.prototype={
$0(){return this.a.d=null},
$S:0}
A.dUJ.prototype={
$0(){return C.a5(this.a,!1).im()},
$S:0}
A.dUK.prototype={
$1(d){return d.a>=0},
$S:z+36}
A.fFP.prototype={
$2(d,e){var w
A:{if("black"===d){w=e.a===25?"The black wire carries the power (hot). It never goes on the green ground screw. Hot goes to a BRASS screw.":"The black (hot) wire goes on a BRASS screw, not on the silver one. Silver is for white (neutral)."
break A}if("white"===d){w=e.a===25?"The white wire is the neutral. The green screw is only for the ground wire. Neutral goes to a SILVER screw.":"The white (neutral) wire goes on a SILVER screw, not on brass. Brass is for the black (hot) wire."
break A}w="The bare copper ground wire only goes on the GREEN screw. It keeps you safe if something goes wrong."
break A}return w},
$S:z+2}
A.fFQ.prototype={
$2(d,e){return d==="ground"?y.t:"A black (hot) wire never goes on the green ground screw. The two black wires go on the two BRASS screws."},
$S:z+2}
A.fFR.prototype={
$2(d,e){var w
if(e.e)w="Those are the LOAD screws. They are covered with tape because power must come in on the LINE side. If you wire the LOAD side the GFCI will not protect you."
else A:{if("black"===d){w="The black (hot) wire goes on the BRASS LINE screw."
break A}if("white"===d){w="The white (neutral) wire goes on the SILVER LINE screw."
break A}w=y.t
break A}return w},
$S:z+2}
A.fFS.prototype={
$2(d,e){var w
A:{if("black"===d){w="The black (hot) wire joins the fixture BLACK wire. Not the white one, and never the green ground."
break A}if("white"===d){w="The white (neutral) wire joins the fixture WHITE wire. Not the black one, and never the green ground."
break A}w="The bare copper ground wire joins the fixture GREEN ground wire only."
break A}return w},
$S:z+2}
A.fFT.prototype={
$2(d,e){var w
A:{if("black"===d){w="The black (hot) wire joins the fan BLACK wire. Not the white one, and never the green ground."
break A}if("white"===d){w="The white (neutral) wire joins the fan WHITE wire. Not the black one, and never the green ground."
break A}w="The bare copper ground wire joins the fan GREEN ground wire only."
break A}return w},
$S:z+2}
A.fEm.prototype={
$1(d){return d.a===this.a},
$S:z+38}
A.h20.prototype={
$1(d){return d.a},
$S:z+39}
A.fDv.prototype={
$1(d){var w
A:{if("hot"===d){w=B.W8
break A}if("neutral"===d){w=B.W9
break A}if("ground"===d){w=B.Wa
break A}w=B.aZw
break A}return w},
$S:z+68}
A.fDw.prototype={
$1(d){var w
A:{if("hot"===d){w=B.Ke
break A}if("neutral"===d){w=B.Kf
break A}if("ground"===d){w=B.Kg
break A}w=B.aTF
break A}return w},
$S:z+72}
A.fDt.prototype={
$1(d){return d.a===this.a.a},
$S:z+13}
A.fDu.prototype={
$1(d){return d.a===this.a.b},
$S:z+7}
A.fUi.prototype={
$1(d){return d.e==="hot"},
$S:z+7}
A.fUj.prototype={
$1(d){return d.e==="neutral"},
$S:z+7}
A.fEz.prototype={
$1(d){return D.d.b_(this.a.b,new A.fEA(d))},
$S:3}
A.fEA.prototype={
$1(d){return d.a===this.a},
$S:z+41}
A.fEw.prototype={
$2(d,e){return A.avR(e.b)>A.avR(d.b)?e:d},
$S:z+121}
A.fEx.prototype={
$1(d){return d.a===this.a.a},
$S:z+13}
A.fEy.prototype={
$1(d){return d.a===this.a.b},
$S:z+7}
A.fBv.prototype={
$5(d,e,f,g,h){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=j.a
i.b=d
w=j.b
v=w.b
u=C.a6(v).k("cE<1,2>")
t=u.k("Y<M.E>")
s=C.C(new C.Y(new C.cE(v,u),new A.fBw(g),t),t.k("M.E"))
r=g==="ground"
q=r?B.u3:h
p=r?0.6:0.3
if(w.c>0){o=e.a7(0,B.het)
i.iV(A.aiq(C.a([e,e.a7(0,B.hcg),o],x.o),4),0.12,q,!1,p,8)
return}if(s.length!==0){n=A.aQr(j.c,D.d.gI(s).a,w)
w=A.oN(e,n,0.5)
v=n.a>0
m=w.a7(0,new A.q(v?0.5:-0.5,0.2,0.9))
w=e.a7(0,B.hjo)
if(j.d)v=0
else v=v?0.06:-0.06
l=A.aiq(C.a([e,w,m,n.a7(0,new A.q(v,0,0.08)),n],x.o),5)
k=D.d.du(l,0,D.k.bf(l.length*0.8))
i.iV(k,0.12,q,!1,p,8)
if(!r)i.iV(D.d.fQ(l,k.length-1),0.08639999999999999,B.u3,!1,0.6,8)}else{l=A.aiq(C.a([e,e.a7(0,B.h82),A.oN(e,f,0.6),f],x.o),5)
k=r?l:D.d.du(l,0,D.k.bf(l.length*0.86))
i.iV(k,0.12,q,!1,p,8)
if(!r)i.iV(D.d.fQ(l,k.length-1),0.08639999999999999,B.u3,!1,0.6,8)}},
$S:z+122}
A.fBw.prototype={
$1(d){return d.b===this.a},
$S:753}
A.fms.prototype={
$2(d,e){var w,v=this.a
v.b=d
w=A.Dt(e,0.9,6)
if(this.b)v.iV(w,0.2,B.YZ,!1,0.35,10)
this.c.push(D.d.gak(w))},
$S:z+125}
A.h2_.prototype={
$1(d){return d.a===this.a},
$S:z+38}
A.fnQ.prototype={
$6$taped(d,e,f,g,h,i){var w,v,u,t=this.a
t.e=0.9
t.b=d
w=this.b
v=w.a+e*0.75
u=w.b+f
w=w.c-0.45
t.aF(new A.q(v,u,w),B.hl5,h,0.7)
t.d1(new A.q(v,u,w),new A.q(v+e*0.22,u,w),0.17,g,0.9,12)
t.aE(new A.q(v+e*0.23,u,w),B.hh3,B.xX)
if(i)t.aF(new A.q(v+e*0.05,u,w),B.hgP,D.bs,0.2)},
$5(d,e,f,g,h){return this.$6$taped(d,e,f,g,h,!1)},
$S:1793}
A.ftn.prototype={
$5(d,e,f,g,h){var w=new A.fto(this.a,d,Math.cos(h),Math.sin(h),e),v=-f/2,u=-g/2,t=f/2,s=g/2
this.b.xe(w.$2(v,u),w.$2(t,u),w.$2(t,s),w.$2(v,s),B.aiz,B.hL)},
$4(d,e,f,g){return this.$5(d,e,f,g,0)},
$S:1794}
A.fto.prototype={
$2(d,e){var w=this,v=w.a,u=w.c,t=w.d
return new A.q(v.a+w.b+d*u-e*t,v.b+w.e+d*t+e*u,v.c+0.5+0.012)},
$S:z+18}
A.ftm.prototype={
$2(d,e){var w=this.b
return this.a.dm(w.a7(0,new A.q(d,e,0.5)),w.a7(0,new A.q(d,e,0.512)),0.065,B.aiz,12)},
$S:200}
A.ftl.prototype={
$2(d,e){var w=this.a
w.$4(d,e,0.075,0.3)
w.$4(d+0.09,e-0.115,0.2,0.075)},
$S:200}
A.fAc.prototype={
$5(d,e,f,g,h){var w,v,u,t=this.a
t.e=0.9
t.b=d
w=this.b
v=w.a+e
u=w.b+f
w=w.c
t.d1(new A.q(v,u,w+0.43),new A.q(v,u,w+0.78),0.3,g,0.9,14)
w+=0.79
t.aE(new A.q(v,u,w),B.hb9,B.xX)
t.aE(new A.q(v,u,w),B.hf0,B.xX)},
$S:1795}
A.fFU.prototype={
$2(d,e){var w
if(d==="ground")w=y.t
else w=e.a===25?y.T:"A double-pole switch has two LINE screws on top (power in) and two LOAD screws on the bottom (power out to the heater). Each leg goes straight down the same side: left leg on the left screws, right leg on the right ones."
return w},
$S:z+2}
A.fFV.prototype={
$2(d,e){var w
if(d==="ground")w=y.t
else if(e.a===25)w=y.T
else w=d==="common"?"The COMMON wire does not go on a traveler screw. It goes on the odd-coloured COMMON screw.":"The travelers go on the two brass TRAVELER screws. The COMMON screw is for the black power wire only."
return w},
$S:z+2}
A.fFW.prototype={
$2(d,e){var w
if(d==="ground")w=y.t
else w=e.a===25?"A traveler never goes on the green ground screw.":"A four-way has a pair of screws for the travelers coming IN (top) and a pair for the travelers going OUT (bottom). Do not mix the two pairs."
return w},
$S:z+2}
A.fFX.prototype={
$2(d,e){var w
A:{if("ground"===d){w=y.t
break A}if("neutral"===d){w="The white neutral wire goes on the silver NEUTRAL screw only."
break A}if(e.a===25)w=y.T
else w=d==="line"?"The wire from the panel is the LINE: it goes on the LINE screw.":"The wire to the light is the LOAD: it goes on the LOAD screw."
break A}return w},
$S:z+2}
A.fFY.prototype={
$2(d,e){var w
if(d==="ground")w=y.t
else if(e.a===25)w=y.T
else w=d==="feed"?"The feed goes on the FEED screw, where the two switches are joined.":"The wires to the lights go on the separate screws, one for each switch."
return w},
$S:z+2}
A.fFZ.prototype={
$2(d,e){var w,v=y.T
A:{if("ground"===d){w=y.t
break A}if("neutral"===d){w="The white neutral wire goes on a SILVER screw."
break A}if("always"===d){w=e.a===25?v:"The always-hot wire goes on the BOTTOM brass screw. The top one is for the switched wire."
break A}w=e.a===25?v:"The switched hot wire (red) goes on the TOP brass screw."
break A}return w},
$S:z+2}
A.fG_.prototype={
$2(d,e){var w
A:{if("ground"===d){w=y.t
break A}if("neutral"===d){w=y.I
break A}w=e.a===25?y.T:y.S
break A}return w},
$S:z+2}
A.fG0.prototype={
$2(d,e){return d==="neutral"?y.I:"The black and red hot wires go on the two brass screws, X and Y."},
$S:z+2}
A.fG1.prototype={
$2(d,e){var w
if(d==="ground")w=y.t
else w=e.a===25?y.T:"Both hot wires go on the two brass screws."
return w},
$S:z+2}
A.fG2.prototype={
$2(d,e){var w
A:{if("isoground"===d){w="The isolated ground wire only goes on the green screw with the orange triangle."
break A}if("neutral"===d){w=y._
break A}w=e.a===25?"A hot wire never goes on the ground screw.":y.u
break A}return w},
$S:z+2}
A.fFI.prototype={
$2(d,e){return A.fme(d,e,!0)},
$S:z+2}
A.fFJ.prototype={
$2(d,e){return A.fme(d,e,!1)},
$S:z+2}
A.fFK.prototype={
$2(d,e){return A.fme(d,e,!0)},
$S:z+2}
A.fFL.prototype={
$2(d,e){return A.fme(d,e,!1)},
$S:z+2}
A.fFM.prototype={
$2(d,e){var w
A:{if("ground"===d){w=y.t
break A}if("neutral"===d){w=y._
break A}w=e.a===25?y.T:y.u
break A}return w},
$S:z+2}
A.fFN.prototype={
$2(d,e){var w
A:{if("neutral"===d){w="The white neutral wire goes on the MIDDLE terminal, the one with the ground strap."
break A}if("hot1"===d){w=y.J
break A}w="The red wire goes on the RIGHT terminal."
break A}return w},
$S:z+2}
A.fFO.prototype={
$2(d,e){var w
A:{if("ground"===d){w="The green ground wire goes on the frame screw, where the strap was."
break A}if("neutral"===d){w="The white neutral wire goes on the MIDDLE terminal."
break A}if("hot1"===d){w=y.J
break A}w="The red wire goes on the RIGHT terminal."
break A}return w},
$S:z+2}
A.fBh.prototype={
$1(d){return d.a===this.a},
$S:z+32}
A.fBi.prototype={
$0(){return B.ans},
$S:z+130}
A.h1X.prototype={
$1(d){var w=d>60?62:99
return Math.min(d*0.5625,w)},
$S:5}
A.h1U.prototype={
$1(d){return d>40?30+d/2:58},
$S:5}
A.h1V.prototype={
$2(d,e){return D.k.aO(d.a,e.a)},
$S:1796}
A.h1W.prototype={
$2(d,e){var w=this.a
if(e-d>w.a-w.b){w.b=d
w.a=e}},
$S:200}
A.bVe.prototype={
$1(d){return d},
$S:99}
A.bVd.prototype={
$1(d){return B.f7R.q(0,d.b)},
$S:z+4}
A.bVP.prototype={
$1(d){return d.a==="Jobs"},
$S:z+132}
A.bVQ.prototype={
$1(d){return new A.ot(!1,"back",d,5)},
$S:z+134}
A.bVR.prototype={
$4(d,e,f,g){return!D.d.b_(this.a.x,new A.bVS(d,f,e,g))},
$2(d,e){return this.$4(d,e,340,270)},
$3(d,e,f){return this.$4(d,e,f,270)},
$S:1797}
A.bVS.prototype={
$1(d){var w=this,v=d.b
return!D.d.q(B.a5M,v)&&!D.d.q(B.Ij,v)&&Math.abs(d.c-w.a)<w.b&&Math.abs(d.d-w.c)<w.d},
$S:z+4}
A.bVT.prototype={
$4(d,e,f,g){var w,v,u,t,s,r,q,p,o,n
for(w=this.a,v=w.length,u=f/2+90,t=g/2+20,s=0;s<v;++s){r=w[s]
if(Math.abs(r.c-d)<u){q=r.d
p=q>e?70:30
p=Math.abs(q-e)<t+p
q=p}else q=!1
if(q)return!1}for(w=this.b.x,v=w.length,s=0;s<w.length;w.length===v||(0,C.K)(w),++s){o=w[s]
u=o.b
if(D.d.q(B.Sj,u)||u==="roundabout"||u==="rug"||u==="flowers")continue
n=B.hF.h(0,u)
if(Math.abs(o.c-d)<(f+n.c)/2+300){u=o.d
t=n.d
q=u>e?280:220
q=Math.abs(u-e)<(g+t)/2+q
u=q}else u=!1
if(u)return!1}return!0},
$S:755}
A.bVX.prototype={
$4(d,e,f,g){var w,v,u,t,s,r,q,p,o,n,m,l,k,j
if(Math.abs(d)>1150||e<-600||e>1450)return!1
for(w=this.a.x,v=w.length,u=f/2+40,t=g/2+40,s=0;s<w.length;w.length===v||(0,C.K)(w),++s){r=w[s]
q=r.b
if(q==="rug"||q==="flowers"||q==="pond")continue
p=B.hF.h(0,q)
p.toString
o=(r.e&1)===1
n=o?p.d:p.c
m=o?p.c:p.d
if(Math.abs(r.c-d)<(f+n)/2+34&&Math.abs(r.d-e)<(g+m)/2+34)return!1
if(B.f85.q(0,q)){l=r.e*3.141592653589793/2
q=r.c
o=Math.sin(l)
p=p.d/2+30
k=r.d
j=Math.cos(l)
if(Math.abs(q+o*p-d)<u&&Math.abs(k+j*p-e)<t)return!1}}return!0},
$S:755}
A.bVU.prototype={
$3(d,e,f){var w,v,u,t,s,r,q,p,o,n={},m=B.hF.h(0,d)
m.toString
w=n.a=0
v=this.a
u=new A.bVW(n,v,d)
for(t=f.length,s=this.b,r=m.c,m=m.d;w<t;++w){q=f[w]
p=q.a
o=q.b
if(n.a>=e)return
if(s.$4(p,o,r,m))u.$2(p,o)}v=v.x
o=-500
for(;;){if(!(o<1400&&n.a<e))break
p=-1100
for(;;){if(!(p<=1100&&n.a<e))break
A:{if(D.d.b_(v,new A.bVV(d,p,o)))break A
if(s.$4(p,o,r,m))u.$2(p,o)}p+=110}o+=100}},
$S:1799}
A.bVW.prototype={
$2(d,e){var w=this.b,v=this.c
w.dB(0,v,d,e)
if(v==="ubstation")w.dB(0,"car",d+96,e+6);++this.a.a},
$S:200}
A.bVV.prototype={
$1(d){return d.b===this.a&&Math.abs(d.c-this.b)<420&&Math.abs(d.d-this.c)<420},
$S:z+4}
A.bW0.prototype={
$1(d){return d.gkS()},
$S:z+5}
A.bW_.prototype={
$1(d){var w=d.c
return(w==="bathroom"||w==="kitchen")&&d.gjU()},
$S:z+5}
A.bVZ.prototype={
$1(d){var w=d.c
return w==="bathroom"||w==="kitchen"},
$S:z+5}
A.bVY.prototype={
$1(d){return d.gkS()&&d.gjU()},
$S:z+5}
A.egd.prototype={
$1(d){return!(d.gkS()&&d.gjU())},
$S:z+5}
A.ega.prototype={
$1(d){var w,v=this.a.a.f
A:{if("wiring"===v){w=!d.gkS()
break A}if("plumbing"===v){w=!d.gjU()
break A}w=!(d.gkS()&&d.gjU())
break A}return w},
$S:z+5}
A.egb.prototype={
$1(d){var w,v,u,t,s,r,q=this.a,p=q.ghI()
if(Date.now()<0){if(q.c!=null)q.m(new A.eg9())
return}if(p==null||q.c==null||q.cx!=null||q.ex>0)return
w=q.d
w===$&&C.c()
v=w.d
v===$&&C.c()
u=p.bfR(w,v[w.e].a)
w=C.a([],x.s)
for(v=u.length,t=0;t<u.length;u.length===v||(0,C.K)(u),++t){s=u[t]
w.push(""+s.a+":"+D.k.V(s.c)+":"+D.k.V(s.d)+":"+s.x+":"+s.Q)}r=D.d.aI(w,"|")
if(q.aL==null&&r!==q.i4){q.i4=r
q.m(q.gj0())}w=p.f
if(w.length!==0&&D.d.gI(w)!==q.fy){w=D.d.gI(w)
q.fy=w
q.iL(w)}},
$S:11}
A.eg9.prototype={
$0(){},
$S:0}
A.egc.prototype={
$1(d){var w,v=this.a
if(v.c==null)return
w=v.d
w===$&&C.c()
if(w.a.length!==0)v.iL(v.c2X())
else{w=v.a.f
if(w.length!==0){A:{if("wiring"===w){w="This room needs wiring: press the Wiring button, or tap the red outlet or the light."
break A}if("plumbing"===w){w="This room needs plumbing: press the Plumbing button, or tap the toilet or the sink."
break A}w="Walk through the house and fix what the signs say is wrong."
break A}v.iL(w)}}},
$S:7}
A.eeX.prototype={
$0(){var w=this.a
w.ax=this.b
w.ay=this.c},
$S:0}
A.eeY.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.eeW(w))},
$S:0}
A.eeW.prototype={
$0(){return this.a.ax=null},
$S:0}
A.eeZ.prototype={
$0(){var w=this.a
w.r=this.b
w.Q=0
w.as=-1
w.at=0
w.iK()},
$S:0}
A.eds.prototype={
$0(){var w=this.a,v=w.d
v===$&&C.c()
v.e=this.b
w.Q=0
w.as=-1
w.at=0
w.ax=null
w.iK()},
$S:0}
A.efq.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.d
w===$&&C.c()
u=w[u.e]
u.fy=!u.fy
v.iK()},
$S:0}
A.eep.prototype={
$0(){return this.a.k3=!0},
$S:0}
A.eeq.prototype={
$0(){var w=this.a,v=this.b
w.Q=v-100
w.at=v
w.iK()},
$S:0}
A.eer.prototype={
$0(){var w=this.a,v=this.b
w.as=v-300
w.at=v},
$S:0}
A.ees.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&C.c()
w=t.d
w===$&&C.c()
v=this.b
if(!w[t.e].at.W(0,v)){t=u.d
w=t.d
w===$&&C.c()
w[t.e].at.M(0,v)}u.iK()},
$S:0}
A.eet.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.d
w===$&&C.c()
w[u.e].p2=!0
v.iK()},
$S:0}
A.ecW.prototype={
$1(d){var w,v,u,t,s,r=this,q=null,p=C.d("Door to "+r.b,q,q,q,q,q,q,D.de,q,q,q),o=r.a,n=o.d
n===$&&C.c()
w=n.d
w===$&&C.c()
v=r.c
u=C.d(w[n.e].at.q(0,v)?"The door is open.":"The door is closed.",q,q,q,q,q,q,D.ms,q,q,q)
n=o.d
w=n.d
w===$&&C.c()
t=C.X(w[n.e].at.q(0,v)?B.bN3:B.bNf,q,q,q,q,q)
n=o.d
w=n.d
w===$&&C.c()
s=x.p
return C.bn(!0,new C.D(D.bQ,C.x(C.a([p,D.av,u,D.ae,C.bX(D.bG,C.a([C.dj(t,C.d(w[n.e].at.q(0,v)?"Close the door":"Open the door",q,q,q,q,q,q,q,q,q,q),new A.ecU(o,d,v),q),C.ex(D.aqF,B.fIh,new A.ecV(o,d,v,r.d),q)],s),D.br,q,10,10)],s),D.E,q,D.e,D.P,0,D.p),q),!0,!1,D.af,!0,!0)},
$S:26}
A.ecU.prototype={
$0(){var w,v,u
C.a5(this.b,!1).O(null)
w=this.a
v=this.c
w.m(new A.ecT(w,v))
w=w.d
w===$&&C.c()
u=w.d
u===$&&C.c()
A.fJ(u[w.e].at.q(0,v)?700:450,70,0.25,"tri")},
$S:0}
A.ecT.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&C.c()
w=t.d
w===$&&C.c()
v=this.b
if(!w[t.e].at.W(0,v)){t=u.d
w=t.d
w===$&&C.c()
w[t.e].at.M(0,v)}u.iK()},
$S:0}
A.ecV.prototype={
$0(){var w,v,u=this
C.a5(u.b,!1).O(null)
w=u.a
v=u.c
w.m(new A.ecR(w,v))
A.fJ(700,70,0.25,"tri")
C.bP(D.m8,new A.ecS(w,v,u.d),x.P)},
$S:0}
A.ecR.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.d
w===$&&C.c()
w[u.e].at.M(0,this.b)
v.iK()},
$S:0}
A.ecS.prototype={
$0(){var w=this.a
if(w.c==null)return
w.m(new A.ecQ(w,this.b))
w.AG(this.c)},
$S:12}
A.ecQ.prototype={
$0(){var w,v=this.a.d
v===$&&C.c()
w=v.d
w===$&&C.c()
return w[v.e].at.W(0,this.b)},
$S:0}
A.ed4.prototype={
$0(){return this.a.eu=!0},
$S:0}
A.ed5.prototype={
$0(){var w=this.a
w.f4=!0
w.fE=!1
w.R8=!w.p4},
$S:0}
A.ed6.prototype={
$0(){var w=this.a
w.R8=w.f4=!1},
$S:0}
A.eei.prototype={
$2(d,e){var w=null,v=D.w.j(0.55),u=C.L(D.bU,D.r,1)
return C.aA(w,C.p(w,C.X(d,D.c,w,w,w,22),D.f,w,w,new C.o(v,w,u,w,w,w,D.a6),w,44,w,D.Gy,w,w,w,44),D.y,!1,w,new A.eek(this.a),w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,e,w,w,w,w,w,w,!1,D.a3)},
$S:380}
A.eek.prototype={
$0(){var w=this.a
return w.m(new A.eej(w))},
$S:0}
A.eej.prototype={
$0(){return this.a.fE=!0},
$S:0}
A.eel.prototype={
$0(){var w=this.a
return w.m(new A.eeh(w))},
$S:0}
A.eeh.prototype={
$0(){return this.a.fE=!1},
$S:0}
A.eem.prototype={
$0(){var w=this.a
return w.p4?w.a30():w.m(new A.eeg(w))},
$S:0}
A.eeg.prototype={
$0(){return this.a.R8=!0},
$S:0}
A.een.prototype={
$0(){var w=this.a
return w.m(new A.eef(w))},
$S:0}
A.eef.prototype={
$0(){var w=this.a
return w.jQ=!w.jQ},
$S:0}
A.eeo.prototype={
$0(){var w=this.a
return w.m(new A.eee(w))},
$S:0}
A.eee.prototype={
$0(){return this.a.ai=!0},
$S:0}
A.ecw.prototype={
$0(){var w=this.a
return w.m(new A.ecx(w))},
$S:0}
A.ecx.prototype={
$0(){return this.a.ai=!1},
$S:0}
A.edg.prototype={
$2(d,e){var w=null,v=D.w.j(0.55),u=C.L(D.bU,D.r,1)
return C.aA(w,C.p(w,C.X(d,D.c,w,w,w,20),D.f,w,w,new C.o(v,w,u,w,w,w,D.a6),w,40,w,D.iJ,w,w,w,40),D.y,!1,w,new A.edi(this.a),w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,e,w,w,w,w,w,w,!1,D.a3)},
$S:380}
A.edi.prototype={
$0(){var w=this.a
return w.m(new A.edh(w))},
$S:0}
A.edh.prototype={
$0(){return this.a.fE=!0},
$S:0}
A.edj.prototype={
$0(){var w=this.a
return w.m(new A.edf(w))},
$S:0}
A.edf.prototype={
$0(){return this.a.fE=!1},
$S:0}
A.edk.prototype={
$0(){var w,v,u=this.a
u.m(new A.ede(u))
w=u.d
w===$&&C.c()
v=w.d
v===$&&C.c()
if(v[w.e].c!=="outside")u.y6()},
$S:0}
A.ede.prototype={
$0(){return this.a.eu=!1},
$S:0}
A.edl.prototype={
$0(){var w=this.a
return w.m(new A.edd(w))},
$S:0}
A.edd.prototype={
$0(){var w=this.a
return w.ab=w.ab===1?3:1},
$S:0}
A.edm.prototype={
$0(){var w=this.a
return w.m(new A.edc(w))},
$S:0}
A.edc.prototype={
$0(){var w=this.a
return w.jQ=!w.jQ},
$S:0}
A.edn.prototype={
$0(){var w=this.a
return w.m(new A.edb(w))},
$S:0}
A.edb.prototype={
$0(){return this.a.ai=!0},
$S:0}
A.edo.prototype={
$0(){var w=this.a
return w.p4?w.a30():w.m(new A.eda(w))},
$S:0}
A.eda.prototype={
$0(){return this.a.R8=!0},
$S:0}
A.efo.prototype={
$2$mine(d,e){var w=null,v=e?D.a8:D.a5,u=e?D.bl:D.e9,t=C.n(18)
return new C.bN(v,w,w,C.p(w,C.d(d,w,w,w,w,w,w,B.aUG,w,w,w),D.f,w,B.adI,new C.o(u,w,w,t,w,w,D.n),w,w,w,D.ct,D.it,w,w,w),w)},
$1(d){return this.$2$mine(d,!1)},
$S:1800}
A.efp.prototype={
$1(d){var w=this,v=null,u=w.b,t=u.b,s=x.p,r=C.B(C.a([C.hb(u.e.c,v,C.d(t[0],v,v,v,v,v,v,D.iw,v,v,v),v,18),D.as,C.d(t,v,v,v,v,v,v,D.ka,v,v,v),D.b2,B.fU_],s),D.m,v,D.e,D.i,0,v,v),q=w.c,p=w.d,o=q.$1("Hi, it's "+t+". "+p.d),n=w.e,m="Please come to "+n,l=w.a
return C.bn(!0,new C.D(Ad.yx,C.x(C.a([r,Aa.Nr,o,q.$1(p.c==="power"?m+" and fix the wiring. I can't stay in the dark.":m+" and fix the leak before it floods."),q.$1("I'll pay "+p.e+" points. Thank you!"),q.$2$mine("On my way!",!0),D.am,C.bX(D.bG,C.a([C.dj(B.bXN,C.d("Show me where "+t+" is",v,v,v,v,v,v,v,v,v,v),new A.efm(l,d,p,u),v),C.dj(B.c_G,C.d("Go and fix it ("+n+")",v,v,v,v,v,v,v,v,v,v),new A.efn(l,d,w.f,n),v)],s),D.br,v,8,10)],s),D.E,v,D.e,D.P,0,D.p),v),!0,!1,D.af,!0,!0)},
$S:26}
A.efm.prototype={
$0(){var w,v,u,t,s=this
C.a5(s.b,!1).O(null)
w=s.a
v=w.fr
u=C.T(v).k("Y<1>")
t=C.C(new C.Y(v,new A.efl(s.c),u),u.k("M.E"))
if(t.length!==0){v=w.d
v===$&&C.c()
u=v.d
u===$&&C.c()
v=u[v.e].c==="outside"}else v=!1
if(v){v=w.e
v===$&&C.c()
v.zN(160,new A.q(D.d.gI(t).c,30,D.d.gI(t).d))}w.ej(s.d.b+" is the one with the phone sign.",!0)},
$S:0}
A.efl.prototype={
$1(d){return d.a===this.a.b},
$S:z+15}
A.efn.prototype={
$0(){var w,v=this
C.a5(v.b,!1).O(null)
w=v.a
if(w.aM)w.a31()
w.eu=!1
w.AG(v.c)
w.ej("You are in "+v.d+". Fix the problem with the Wiring or Plumbing button.",!0)},
$S:0}
A.edG.prototype={
$0(){var w=this.a
w.x=!0
w.z=!1
w.r="ceiling"
w.iK()},
$S:0}
A.ebv.prototype={
$1(d){return d.c==="outside"},
$S:z+5}
A.efR.prototype={
$1(d){return d.c==="outside"},
$S:z+5}
A.ebW.prototype={
$0(){},
$S:0}
A.edB.prototype={
$0(){var w=this.a
return w.m(new A.edA(w))},
$S:0}
A.edA.prototype={
$0(){return this.a.id=!1},
$S:0}
A.edC.prototype={
$0(){var w=this.a
return w.m(new A.edz(w))},
$S:0}
A.edz.prototype={
$0(){return this.a.id=!1},
$S:0}
A.efS.prototype={
$1(d){var w=this.b
return d.d===this.a.aqV(w.f,w.r)},
$S:z+35}
A.efQ.prototype={
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
return D.k.aO((m-j)*(m-w)+(v-u)*(v-t),(s-r)*(s-q)+(p-o)*(p-l))},
$S:z+21}
A.ef2.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=d.a==="tank"?A.hc_(l.a.c5.b):d.e,i=l.b
i=i==null?k:i.r
w=(i==null?0:i)>=j
i=l.c
v=i?112:1/0
u=i?8:12
t=i?8:10
s=D.c.j(0.07)
r=C.n(16)
q=C.L(w?D.bs.j(0.5):D.bz,D.r,1)
p=d.b
o=d.c
n=d.d
if(i){i=C.d(p,k,k,k,k,k,k,D.x8,k,k,k)
o=C.d(o,k,1,D.a1,k,k,k,D.KE,D.K,k,k)
n=C.d(n,k,2,D.a1,k,k,k,B.fpx,D.K,k,k)
p=w?D.bs:D.bz
m=C.n(12)
i=C.x(C.a([i,D.bF,o,n,D.fG,C.p(k,C.d(""+j+" \u2b50",k,k,k,k,k,k,C.l(k,k,w?D.w:D.bU,k,k,k,k,k,k,k,k,13,k,k,D.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),D.f,k,k,new C.o(p,k,k,m,k,k,D.n),k,k,k,k,D.GB,k,k,k)],x.p),D.m,k,D.e,D.P,0,D.p)}else{i=C.d(p,k,k,k,k,k,k,D.n4,k,k,k)
p=x.p
n=C.E(C.x(C.a([C.d(o,k,k,k,k,k,k,D.nL,k,k,k),C.d(n,k,k,k,k,k,k,B.aU7,k,k,k)],p),D.E,k,D.e,D.i,0,D.p),1)
o=w?D.bs:D.bz
m=C.n(14)
i=C.B(C.a([i,D.as,n,C.p(k,C.d(""+j+" \u2b50",k,k,k,k,k,k,C.l(k,k,w?D.w:D.bU,k,k,k,k,k,k,k,k,k,k,k,D.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),D.f,k,k,new C.o(o,k,k,m,k,k,D.n),k,k,k,k,D.nu,k,k,k)],p),D.m,k,D.e,D.i,0,k,k)}return C.aA(k,C.p(k,i,D.f,k,k,new C.o(s,k,q,r,k,k,D.n),k,k,k,D.ct,new C.Q(u,t,u,t),k,k,v),D.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new A.ef3(l.a,d),k,k,k,k,k,k,!1,D.a3)},
$S:z+62}
A.ef3.prototype={
$0(){return this.a.aQ1(this.b)},
$S:0}
A.ef1.prototype={
$2(d,e){var w,v,u,t=null,s=x.p,r=C.a([new C.D(B.bzx,C.d(d,t,t,t,t,t,t,B.fvP,t,t,t),t)],s)
if(this.a){s=C.a([],s)
for(w=e.length,v=this.b,u=0;u<w;++u)s.push(v.$1(e[u]))
r.push(C.bX(D.bG,s,D.br,t,0,8))}else for(s=e.length,w=this.b,u=0;u<s;++u)r.push(w.$1(e[u]))
return C.x(r,D.E,t,D.e,D.P,0,D.p)},
$S:z+63}
A.ef0.prototype={
$0(){var w=this.a
return w.m(new A.ef_(w))},
$S:0}
A.ef_.prototype={
$0(){return this.a.k2=!1},
$S:0}
A.ee_.prototype={
$2(d,e){var w=null,v=e.j(0.2),u=C.n(10)
return C.p(w,C.d(d,w,w,w,w,w,w,C.l(w,w,e,w,w,w,w,w,w,w,w,11.5,w,w,D.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),D.f,w,w,new C.o(v,w,w,u,w,w,D.n),w,w,w,w,D.fP,w,w,w)},
$S:1801}
A.ee0.prototype={
$1(d){return B.hF.h(0,d.b).a},
$S:z+64}
A.edX.prototype={
$1(d){var w,v,u,t,s=this,r=null,q=d.c,p=A.yT(q),o=D.k.V(Math.sqrt(Math.pow(p.a-s.b,2)+Math.pow(p.b-s.c,2))/10),n=D.c.j(0.07),m=C.n(16),l=C.L(D.bz,D.r,1),k=d.b,j=C.d(A.Lk(k).b,r,r,r,r,r,r,D.n4,r,r,r),i=s.d
k=C.d(d.w?"\ud83d\ude91 "+A.Lk(k).c+": "+C.w(i.$1(q))+" \u2192 "+C.w(i.$1(d.d))+" (somebody was run over)":A.Lk(k).c+": "+C.w(i.$1(q))+" \u2192 a house",r,r,r,r,r,r,B.aVD,r,r,r)
w=s.e
v=w.$2(""+d.e+" points",D.bs)
u=w.$2(""+o+" m to the shop",D.aJ)
p=A.yT(q)
t=A.yT(d.d)
q=x.p
w=C.E(C.x(C.a([k,D.cS,C.bX(D.bG,C.a([v,u,w.$2(""+D.k.V(Math.sqrt(Math.pow(p.a-t.a,2)+Math.pow(p.b-t.b,2))/10)+" m trip",D.ba)],q),D.br,r,0,6)],q),D.E,r,D.e,D.i,0,D.p),1)
k=s.f!=null
i=k?r:new A.edZ(s.a,s.r,d,i)
v=k?D.bz:D.bs
u=C.n(14)
return C.p(r,C.B(C.a([j,D.as,w,D.ad,C.aA(r,C.p(r,C.d("Take",r,r,r,r,r,r,C.l(r,r,k?D.bU:D.w,r,r,r,r,r,r,r,r,r,r,r,D.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),D.f,r,r,new C.o(v,r,r,u,r,r,D.n),r,r,r,r,D.it,r,r,r),D.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,i,r,r,r,r,r,r,!1,D.a3)],q),D.m,r,D.e,D.i,0,r,r),D.f,r,r,new C.o(n,r,l,m,r,r,D.n),r,r,r,D.ct,D.bT,r,r,r)},
$S:z+65}
A.edZ.prototype={
$0(){var w=this,v=w.c,u=w.a
if(w.b.d_f(0,v,u.CW.gf2()/1000)){u.m(new A.edY(u))
if(!u.aM)u.Sf()
u.ej(A.Lk(v.b).b+" Order taken: go to the "+w.d.$1(v.c).toLowerCase()+" (follow the yellow line), then to the house.",!0)}},
$S:0}
A.edY.prototype={
$0(){return this.a.go=!1},
$S:0}
A.edV.prototype={
$0(){var w=this.a
return w.m(new A.edU(w))},
$S:0}
A.edU.prototype={
$0(){return this.a.go=!1},
$S:0}
A.edW.prototype={
$0(){var w=this.a
return w.m(new A.edT(w,this.b))},
$S:0}
A.edT.prototype={
$0(){this.b.a2(0)
this.a.ej("Order given back.",!0)},
$S:0}
A.edp.prototype={
$0(){return this.a.k3=!1},
$S:0}
A.edq.prototype={
$0(){return this.a.k3=!1},
$S:0}
A.eeT.prototype={
$0(){return A.fJ(1175,220,0.3,"tri")},
$S:0}
A.ed2.prototype={
$0(){var w=this.a
return w.m(new A.ed1(w))},
$S:0}
A.ed1.prototype={
$0(){return this.a.k3=!1},
$S:0}
A.ed3.prototype={
$0(){return this.a.bUZ(this.b)},
$S:0}
A.ecP.prototype={
$4(d,e,f,g){var w=-d,v=this.a
return 0.5*(2*e+(w+f)*v+(2*d-5*e+4*f-g)*v*v+(w+3*e-3*f+g)*v*v*v)},
$S:265}
A.edH.prototype={
$1(d){return d.c==="outside"},
$S:z+5}
A.ef4.prototype={
$0(){var w=this.a
w.R8=!1
w.y1=null
w.p4=!0
w.rx=this.b
w.ry=-1},
$S:0}
A.ed0.prototype={
$2(d,e){return d[D.o.E(e,0,d.length-1)]},
$S:z+66}
A.efg.prototype={
$0(){var w=this.a
w.p4=!1
w.aL=null
w.iK()},
$S:0}
A.ecZ.prototype={
$4(d,e,f,g){var w=null,v=D.c.j(0.07),u=C.n(16),t=C.L(D.bz,D.r,1),s=x.p
return C.aA(w,C.p(w,C.B(C.a([C.d(d,w,w,w,w,w,w,D.n4,w,w,w),D.bd,C.E(C.x(C.a([C.d(e,w,w,w,w,w,w,D.hv,w,w,w),C.d(f,w,w,w,w,w,w,D.hu,w,w,w)],s),D.E,w,D.e,D.i,0,D.p),1),A5.Pw],s),D.m,w,D.e,D.i,0,w,w),D.f,w,w,new C.o(v,w,t,u,w,w,D.n),w,w,w,D.jB,D.bg,w,w,w),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new A.ed_(this.a,g),w,w,w,w,w,w,!1,D.a3)},
$S:1802}
A.ed_.prototype={
$0(){return this.a.cA9(this.b)},
$S:0}
A.ecY.prototype={
$0(){var w=this.a
return w.m(new A.ecX(w))},
$S:0}
A.ecX.prototype={
$0(){return this.a.R8=!1},
$S:0}
A.edw.prototype={
$1(d){return d.c==="outside"},
$S:z+5}
A.eff.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&C.c()
w=t[this.b]
v=u.at.h(0,w.a)
if(v==null||!A.h7C(w.b,v.a))return 0
return v.b.c<2?1:2},
$S:96}
A.eg4.prototype={
$1(d){return d},
$S:99}
A.ecy.prototype={
$1(d){return d},
$S:99}
A.edt.prototype={
$0(){var w=A.cuk(0,null,!1,this.a.a*13+5+this.b.f,!0)
w.amy()
return w},
$S:z+67}
A.edu.prototype={
$1(d){return A.cjw(!1,!1,this.a,!1)},
$S:z+44}
A.edv.prototype={
$1(d){return d.length!==0},
$S:3}
A.ed8.prototype={
$0(){return new A.CJ(C.U(x.S,x.N))},
$S:z+69}
A.ed9.prototype={
$1(d){return new A.E8("light",this.a,null)},
$S:z+33}
A.edJ.prototype={
$1(d){return d.c==="outside"},
$S:z+5}
A.edK.prototype={
$0(){return this.a.y1=this.b},
$S:0}
A.ec2.prototype={
$1(d){var w=null
return new C.bN(D.a5,w,w,C.p(w,C.d(d,w,w,w,w,w,w,B.aUG,w,w,w),D.f,w,B.adI,B.b76,w,w,w,D.ct,D.it,w,w,w),w)},
$S:136}
A.ec1.prototype={
$5$primary(d,e,f,g,h){var w=null,v=h?f:f.j(0.14),u=C.n(16),t=C.L(f,D.r,1),s=C.X(d,h?D.w:f,w,w,w,21)
return C.aA(w,C.p(w,C.B(C.a([s,D.ad,C.d(e,w,w,w,w,w,w,C.l(w,w,h?D.w:D.c,w,w,w,w,w,w,w,w,14.5,w,w,D.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),D.m,w,D.b9,D.i,0,w,w),D.f,w,w,new C.o(v,w,t,u,w,w,D.n),w,48,w,D.jB,w,w,w,w),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,!1,D.a3)},
$4(d,e,f,g){return this.$5$primary(d,e,f,g,!1)},
$S:1803}
A.ec3.prototype={
$0(){var w=this.a
return w.m(new A.ec0(w))},
$S:0}
A.ec0.prototype={
$0(){return this.a.y1=null},
$S:0}
A.ec4.prototype={
$0(){var w,v,u=this.a
u.m(new A.ec_(u))
if(!u.aM)u.Sf()
w=u.aC
if(w!=null){v=u.e
v===$&&C.c()
v.D0(new A.q(w.f,30,w.r))}u.ej("Follow the yellow line on the ground to get there.",!0)},
$S:0}
A.ec_.prototype={
$0(){return this.a.y1=null},
$S:0}
A.ec5.prototype={
$0(){var w,v=this.a
v.m(new A.ebZ(v))
if(v.fF==null){v.fF=this.b
v.hE=0}w=this.b
v.Sz(w.a)
w=w.c
if(w==="power")w="You are at the house. Walk in and onto the red mat at the breaker panel."
else w=w==="sick"?"You are at the hospital. Walk in and onto the desk.":y.Y
v.ej(w,!0)},
$S:0}
A.ebZ.prototype={
$0(){return this.a.y1=null},
$S:0}
A.ec6.prototype={
$0(){var w=this.a
w.m(new A.ebY(w,this.b))
w.ej("Saved on your waiting list.",!0)},
$S:0}
A.ebY.prototype={
$0(){var w,v=this.a
v.y1=null
w=this.b
if(v.fF===w)v.fF=null
v=v.iS
if(!D.d.q(v,w))v.push(w)},
$S:0}
A.ec7.prototype={
$0(){var w=this.a
return w.m(new A.ebX(w))},
$S:0}
A.ebX.prototype={
$0(){return this.a.y2=!1},
$S:0}
A.ecu.prototype={
$1(d){var w=null
return C.bx(D.rd,new C.a4(w,C.aG(d,w,x.w).w.a.b*0.82,new A.aq1(this.a,w),w),D.ap)},
$S:1804}
A.ecv.prototype={
$0(){var w=this.a
w.aAh()
w.iK()},
$S:0}
A.eeS.prototype={
$1(d){return new C.e2(new A.eeQ(this.a,this.b,this.c),null)},
$S:20}
A.eeQ.prototype={
$2(d,e){var w,v,u,t,s=null,r=new A.eeR(this.a,e),q=this.b,p=q.a,o=C.d(p.b+" "+q.gaEh(0),s,s,s,s,s,s,S.tp,s,s,s)
p=C.d(p.f,s,s,s,s,s,s,D.x9,s,s,s)
w=C.d("Now: "+q.gUy()+"\nFood "+D.k.V(100-q.b)+"%   Health "+D.k.V(q.c)+"%   Home "+D.k.V(q.d)+"%",s,s,s,s,s,s,B.aV8,s,s,s)
v=this.c
u=x.p
t=C.a([r.$2("\ud83c\udf5e Feed",new A.eeN(v,q))],u)
if(q.e)t.push(r.$3$col("\ud83d\udc8a Medicine",new A.eeO(v,q),D.bq))
if(q.e||q.c<60)t.push(r.$3$col("\ud83c\udfe5 Hospital",new A.eeP(v,q),D.c0))
return C.bn(!0,new C.D(D.bQ,C.x(C.a([o,p,D.N,w,D.ae,C.bX(D.bG,t,D.br,s,8,8)],u),D.E,s,D.e,D.P,0,D.p),s),!0,!1,D.af,!0,!0)},
$S:87}
A.eeR.prototype={
$3$col(d,e,f){var w=null,v=f.j(0.22),u=C.n(12),t=C.L(f,D.r,1)
return C.aA(w,C.p(w,C.d(d,w,w,w,w,w,w,C.l(w,w,f,w,w,w,w,w,w,w,w,13,w,w,D.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),D.f,w,w,new C.o(v,w,t,u,w,w,D.n),w,w,w,w,A1.wb,w,w,w),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new A.eeM(this.a,e,this.b),w,w,w,w,w,w,!1,D.a3)},
$2(d,e){return this.$3$col(d,e,D.ay)},
$S:1805}
A.eeM.prototype={
$0(){var w,v=this.b.$0()
this.c.$1(new A.eeL())
w=this.a
w.m(w.gj0())
w.iL(v)},
$S:0}
A.eeL.prototype={
$0(){},
$S:0}
A.eeN.prototype={
$0(){return this.a.bfF(this.b)},
$S:23}
A.eeO.prototype={
$0(){return this.a.aLt(this.b)},
$S:23}
A.eeP.prototype={
$0(){return this.a.aDZ(this.b)},
$S:23}
A.eez.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=x.p,k=C.a([],l)
for(w=D.d.gaf(B.a4w),v=new C.eR(w,new A.eew()),u=this.a,t=this.b;v.C();){s=w.gS(0)
r=D.c.j(0.08)
q=new C.aP(12,12)
p=u.d
p===$&&C.c()
o=p.d
o===$&&C.c()
n=new C.ay(o[p.e].fx.h(0,t)===s.a?D.ay:D.aX,1,D.r,-1)
k.push(C.aA(m,C.p(m,new C.y(s.c+" "+s.b,m,D.KE,m,m,m,m,m,m,m,m,m),D.f,m,m,new C.o(r,m,new C.bG(n,n,n,n),new C.bh(q,q,q,q),m,m,D.n),m,m,m,m,D.eB,m,m,m),D.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new A.eex(u,d,t,s),m,m,m,m,m,m,!1,D.a3))}w=u.d
w===$&&C.c()
v=w.d
v===$&&C.c()
if(v[w.e].fx.h(0,t)!=null)k.push(C.aA(m,C.p(m,B.fRd,D.f,m,m,new C.o(D.ek,m,m,C.n(12),m,m,D.n),m,m,m,m,D.eB,m,m,m),D.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new A.eey(u,d,t),m,m,m,m,m,m,!1,D.a3))
return C.bn(!0,new C.D(D.bQ,C.x(C.a([B.fNg,D.W,C.bX(D.bG,k,D.br,m,8,8)],l),D.E,m,D.e,D.P,0,D.p),m),!0,!1,D.af,!0,!0)},
$S:26}
A.eew.prototype={
$1(d){return!(d.d>70||d.e)},
$S:z+32}
A.eex.prototype={
$0(){var w,v,u,t=this
C.a5(t.b,!1).O(null)
w=t.a
v=t.d
w.m(new A.eev(w,t.c,v))
u=v.d>0||v.e
v=v.b
w.iL(u?v+" is on and playing NGMY ads. Tap it to watch full screen.":v+" is plugged in and running.")
A.fJ(820,70,0.25,"tri")},
$S:0}
A.eev.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.d
w===$&&C.c()
w[u.e].fx.n(0,this.b,this.c.a)
v.iK()},
$S:0}
A.eey.prototype={
$0(){C.a5(this.b,!1).O(null)
var w=this.a
w.m(new A.eeu(w,this.c))
w.iL("Unplugged.")},
$S:0}
A.eeu.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.d
w===$&&C.c()
w[u.e].fx.W(0,this.b)
v.iK()},
$S:0}
A.efP.prototype={
$1(d){return new C.e2(new A.efN(this.a),null)},
$S:20}
A.efN.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.a,k=new A.efO(l,e),j=l.d
j===$&&C.c()
w=j.d
w===$&&C.c()
j=C.d("TV in "+w[j.e].b,m,m,m,m,m,m,D.de,m,m,m)
w=x.p
v=C.a([],w)
for(u=D.d.gaf(B.a4w),t=new C.eR(u,new A.efG());t.C();){s=u.gS(0)
r=s.b
q=l.d
p=q.d
p===$&&C.c()
q=p[q.e].k1===s.a?D.ay:D.eP
v.push(k.$3$color(r,new A.efH(l,s),q))}j=C.a([j,D.W,C.bX(D.bG,v,D.br,m,8,8)],w)
if(l.d.a.length!==0){v=C.a([],w)
for(o=0;o<3;++o){u={}
t=B.d9f[o]
u.a=null
n=t.a
u.a=n
s=l.d
r=s.d
r===$&&C.c()
s=r[s.e].p1===n?D.ay:D.eP
v.push(k.$3$color(t.b,new A.efI(u,l),s))}D.d.v(j,C.a([B.fAb,D.am,C.bX(D.bG,v,D.br,m,8,8)],w))}j.push(D.W)
w=C.a([],w)
v=l.d
u=v.d
u===$&&C.c()
v=u[v.e]
if(v.k1!=null){v=v.p2?"\u23fb Turn this TV off":"\u23fb Turn this TV on"
w.push(k.$2(v,new A.efJ(l)))}v=l.d
u=v.d
u===$&&C.c()
if(u[v.e].k1!=null&&v.a.length===0)w.push(k.$3$color("\ud83d\uddd1 Take it down",new A.efK(l),D.ek))
if(l.d.a.length===0)w.push(k.$3$color("\ud83d\udcfa A TV in every room, all on",new A.efL(l),D.cT))
if(l.d.a.length===0)w.push(k.$3$color("\u23fb All TVs off",new A.efM(l),D.bn))
j.push(C.bX(D.bG,w,D.br,m,8,8))
return C.bn(!0,new C.D(D.bQ,C.x(j,D.E,m,D.e,D.P,0,D.p),m),!0,!1,D.af,!0,!0)},
$S:87}
A.efO.prototype={
$3$color(d,e,f){var w=null,v=f.j(0.4),u=C.n(12),t=C.L(f,D.r,1)
return C.aA(w,C.p(w,C.d(d,w,w,w,w,w,w,V.Ap,w,w,w),D.f,w,w,new C.o(v,w,t,u,w,w,D.n),w,w,w,w,A1.wb,w,w,w),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new A.efF(this.a,e,this.b),w,w,w,w,w,w,!1,D.a3)},
$2(d,e){return this.$3$color(d,e,D.eP)},
$S:1806}
A.efF.prototype={
$0(){this.b.$0()
this.c.$1(new A.efE())
var w=this.a
w.m(w.gj0())},
$S:0}
A.efE.prototype={
$0(){},
$S:0}
A.efG.prototype={
$1(d){return d.d>0||d.e},
$S:z+32}
A.efH.prototype={
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
A.efI.prototype={
$0(){var w,v=this.b.d
v===$&&C.c()
w=v.d
w===$&&C.c()
return w[v.e].p1=this.a.a},
$S:0}
A.efJ.prototype={
$0(){var w,v=this.a.d
v===$&&C.c()
w=v.d
w===$&&C.c()
v=w[v.e]
return v.p2=!v.p2},
$S:0}
A.efK.prototype={
$0(){var w,v=this.a.d
v===$&&C.c()
w=v.d
w===$&&C.c()
v=w[v.e]
v.k1=null
v.p2=!1},
$S:0}
A.efL.prototype={
$0(){var w,v,u,t=this.a.d
t===$&&C.c()
t=t.gr_()
w=t.length
v=0
for(;v<w;++v){u=t[v]
if(u.k1==null)u.k1="tv100"
if(u.c==="hall")if(u.k2==null)u.k2="tv100"
u.p2=!0}},
$S:0}
A.efM.prototype={
$0(){var w,v,u=this.a.d
u===$&&C.c()
u=u.gr_()
w=u.length
v=0
for(;v<w;++v)u[v].p2=!1},
$S:0}
A.efB.prototype={
$1(d){return new C.e2(new A.efz(this.a),null)},
$S:20}
A.efz.prototype={
$2(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new A.efA(),e=C.at(C.p(g,g,D.f,g,g,new C.o(D.aX,g,g,C.n(2),g,g,D.n),g,4,g,g,g,g,g,42),g,g,g),d=x.p,a0=C.B(C.a([C.p(g,H.aqH,D.f,g,g,new C.o(g,g,g,C.n(16),g,B.c4h,D.n),g,52,g,g,g,g,g,52),D.es,B.bGU],d),D.m,g,D.e,D.i,0,g,g),a1=f.$1("Who walks the house"),a2=C.a([],d)
for(w=B.aIf.gdR(B.aIf),w=w.gaf(w),v=x.s,u=x.N,t=x.ec,s=this.a;w.C();){r=w.gS(w)
q=$.ahZ
p=r.a
q=q===p?D.aJ.j(0.18):D.c.j(0.06)
o=new C.aP(18,18)
n=$.ahZ===p
m=n?D.aJ:D.bz
l=new C.ay(m,n?2:1,D.r,-1)
n=n?D.aJ:D.aX
m=r.b
k=D.d.gI(m.split(" "))
m=C.a(m.split(" "),v)
j=new C.jf(m,1,g,t)
j.of(m,1,g,u)
j=j.aI(0," ")
p=$.ahZ===p?D.aJ:D.c
a2.push(new C.D(D.Gy,C.aA(g,C.cY(g,C.x(C.a([new C.qD(new C.y(k,g,D.pJ,g,g,g,g,g,g,g,g,g),n,g,20,g),D.am,new C.y(j,g,new C.F(!0,p,g,g,g,g,12.5,D.H,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g),g,g,g,g,D.a1,g,1,g,g)],d),D.m,g,D.b9,D.i,0,D.p),g,g,D.b5,new C.o(q,g,new C.bG(l,l,l,l),new C.bh(o,o,o,o),g,g,D.n),D.h5,g,g,g,g,D.GP,g,g,92),D.y,!1,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,new A.efv(s,a4,r),g,g,g,g,g,g,!1,D.a3),g))}a2=C.cl(a2,g,g,g,g,g,D.aL,!1)
w=f.$1("How long")
v=D.c.j(0.06)
u=C.n(16)
t=C.a([],d)
for(i=0;i<5;++i){h=B.duJ[i]
r=s.db===h
q=r?D.ay:D.L
p=new C.aP(12,12)
if(h<60)o=""+h+" seconds"
else o=h===60?"1 minute":""+(h/60|0)+" minutes"
r=r?D.w:D.ac
t.push(new C.by(1,D.bb,C.aA(g,C.cY(g,new C.cf(D.A,g,g,new C.y(o,g,new C.F(!0,r,g,g,g,g,12.5,D.u,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g),g,D.K,g,g,g,g,g,g,g),g),g,g,D.b5,new C.o(q,g,g,new C.bh(p,p,p,p),g,g,D.n),D.h5,g,g,g,g,D.rF,g,g,g),D.y,!1,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,new A.efw(s,a4,h),g,g,g,g,g,g,!1,D.a3),g))}v=C.p(g,C.B(t,D.m,g,D.e,D.i,0,g,g),D.f,g,g,new C.o(v,g,g,u,g,g,D.n),g,g,g,g,D.ev,g,g,g)
u=C.aA(g,C.p(g,B.f6e,D.f,g,g,new C.o(g,g,g,C.n(18),C.a([new C.ac(0,D.G,D.aw.j(0.35),D.cy,16)],x.V),B.c5f,D.n),g,56,g,g,g,g,g,g),D.y,!1,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,new A.efx(s,a3),g,g,g,g,g,g,!1,D.a3)
t=D.c.j(0.06)
r=C.n(18)
return C.p(g,C.bn(!0,C.ci(C.x(C.a([e,D.aQ,a0,a1,new C.a4(g,96,a2,g),w,v,D.dT,u,D.ae,C.aA(g,C.p(g,B.f68,D.f,g,g,new C.o(t,g,C.L(D.bz,D.r,1),r,g,g,D.n),g,g,g,g,D.bD,g,g,g),D.y,!1,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,new A.efy(s,a3),g,g,g,g,g,g,!1,D.a3)],d),D.E,g,D.e,D.P,0,D.p),D.t,g,D.y,g,D.am0,g,g,D.ah),!0,!1,D.af,!0,!0),D.f,g,g,B.b6a,g,g,g,g,g,g,g,g)},
$S:174}
A.efA.prototype={
$1(d){var w=null
return new C.D(H.akK,C.d(d.toUpperCase(),w,w,w,w,w,w,P.ts,w,w,w),w)},
$S:136}
A.efv.prototype={
$0(){var w=this.c
this.b.$1(new A.eft(w))
A.bUH(w.a)
this.a.m(new A.efu())},
$S:0}
A.eft.prototype={
$0(){return $.ahZ=this.a.a},
$S:0}
A.efu.prototype={
$0(){},
$S:0}
A.efw.prototype={
$0(){return this.b.$1(new A.efs(this.a,this.c))},
$S:0}
A.efs.prototype={
$0(){return this.a.db=this.b},
$S:0}
A.efx.prototype={
$0(){C.a5(this.b,!1).O(null)
var w=this.a
w.cAu(w.db)},
$S:0}
A.efy.prototype={
$0(){C.a5(this.b,!1).O(null)
this.a.b8k(45,!0)},
$S:0}
A.efc.prototype={
$0(){var w=this.a,v=w.d
v===$&&C.c()
v.e=this.b
w.ax=null
w.iK()},
$S:0}
A.efd.prototype={
$1(d){return this.a.cEL()},
$S:11}
A.efe.prototype={
$0(){},
$S:0}
A.efC.prototype={
$0(){return this.a.dy=this.b.as},
$S:0}
A.efr.prototype={
$0(){var w=this.b
w.iK()
w.aB=this.a.a;++w.aH},
$S:0}
A.efj.prototype={
$0(){var w=this.a
w.cx=null
w.dy=""},
$S:0}
A.efk.prototype={
$0(){},
$S:0}
A.efb.prototype={
$0(){},
$S:0}
A.efi.prototype={
$0(){},
$S:0}
A.eg0.prototype={
$0(){return this.a.id=!0},
$S:0}
A.eg1.prototype={
$0(){return this.a.k2=!0},
$S:0}
A.eg2.prototype={
$0(){return this.a.k3=!0},
$S:0}
A.eg_.prototype={
$1(d){return B.a9l.q(0,d.b)},
$S:z+4}
A.eeI.prototype={
$1(d){return d.ar("String","ngmy_city_where",this.a)},
$S:220}
A.eeJ.prototype={
$1(d){return!1},
$S:48}
A.efT.prototype={
$1(d){var w
if(d.b==="gasstation"){w=this.a
w=Math.sqrt(Math.pow(w.f-d.c,2)+Math.pow(w.r-d.d,2))<135}else w=!1
return w},
$S:z+4}
A.efU.prototype={
$0(){return this.a.aQ1(B.aS6)},
$S:0}
A.efV.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.d
w===$&&C.c()
D.d.W(w[u.e].x,this.b)
v.al="crate"
v.m(v.gj0())
v.ej("You picked up a crate. Carry it to the shop and walk onto the green mat by the counter to sell it at the market.",!0)
A.fJ(700,60,0.25,"tri")
return null},
$S:0}
A.efW.prototype={
$0(){return this.a.abB(this.b)},
$S:0}
A.efX.prototype={
$0(){return this.a.bRB(this.b)},
$S:0}
A.efY.prototype={
$0(){return this.a.bUf(this.b)},
$S:0}
A.efZ.prototype={
$0(){return this.b.cL=this.a.a},
$S:0}
A.ed7.prototype={
$0(){},
$S:0}
A.eeG.prototype={
$1(d){var w=this.a,v=this.b
return w===0?v.$1(d):new A.aKj(w,v.$1(d),null)},
$S:39}
A.edO.prototype={
$0(){var w=this.a
w.y1=null
w.y2=!0},
$S:0}
A.edL.prototype={
$1(d){return d.c==="outside"},
$S:z+5}
A.edM.prototype={
$1(d){return d.b==="hospital"},
$S:z+4}
A.edN.prototype={
$1(d){return!d.e&&d.r<0},
$S:z+23}
A.edx.prototype={
$1(d){return d.c==="outside"},
$S:z+5}
A.edy.prototype={
$1(d){return d.a.b===this.a.d},
$S:z+23}
A.ef5.prototype={
$0(){},
$S:0}
A.edr.prototype={
$0(){return this.a.k3=!0},
$S:0}
A.eeU.prototype={
$1(d){return d.b==="hospital"},
$S:z+4}
A.eeV.prototype={
$0(){return this.a.go=!1},
$S:0}
A.ef6.prototype={
$1(d){var w
if(d>0&&this.a.c!=null){w=this.a.ghI()
if(w!=null)w.r+=d}},
$S:1807}
A.ef7.prototype={
$0(){var w=this.a
w.iK()
w.aeI(!0)},
$S:0}
A.ef8.prototype={
$1(d){return this.a.c99()},
$S:11}
A.edE.prototype={
$1(d){return!D.d.b_(this.a.d,new A.edD(d))},
$S:34}
A.edD.prototype={
$1(d){return d.a===this.a},
$S:z+22}
A.edF.prototype={
$1(d){return d.a===this.a.a},
$S:z+22}
A.ef9.prototype={
$1(d){var w,v,u=this.a
if(u.c==null)return
w=++u.T
if(w>36){v=u.bE
u.Bb()
if(v!=null)u.aCl("Nobody answered the phone")
return}if(w%8<4){A.fJ((w&1)===0?1046:1318,160,0.3,"sine")
if(D.o.F(u.T,8)===0)C.TK()}},
$S:11}
A.efa.prototype={
$0(){},
$S:0}
A.efh.prototype={
$0(){var w=this.a
w.bE=w.bD=null},
$S:0}
A.ee2.prototype={
$4$col$on(d,e,f,g){var w=null,v=g?f.j(0.45):D.w.j(0.62),u=C.n(18),t=C.L(f,D.r,1.8)
return C.aA(w,C.p(w,C.d(d,w,w,w,w,w,w,D.j8,w,w,w),D.f,w,w,new C.o(v,w,t,u,w,w,D.n),w,w,w,D.a0i,B.bG9,w,w,w),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new A.ee3(e),w,w,w,w,!1,D.a3)},
$2(d,e){return this.$4$col$on(d,e,D.ba,!1)},
$3$col(d,e,f){return this.$4$col$on(d,e,f,!1)},
$3$on(d,e,f){return this.$4$col$on(d,e,D.ba,f)},
$S:1808}
A.ee3.prototype={
$1(d){return this.a.$0()},
$S:22}
A.eeb.prototype={
$7$about$avatar$glow$onAnswer$onDecline$onLater$who(d,e,f,g,h,i,j){var w=null,v=new A.eec(),u=Math.min(this.a-28,340),t=C.n(30),s=C.L(D.aX,D.r,2),r=C.a([new C.ac(0,D.G,f.j(0.35),D.I,24)],x.V),q=x.p,p=C.B(C.a([e,D.es,C.E(C.x(C.a([B.fOJ,D.bF,C.d(j,w,1,D.a1,w,w,w,D.aag,w,w,w),D.bF,C.d(d,w,2,D.a1,w,w,w,M.aaN,w,w,w)],q),D.E,w,D.e,D.P,0,D.p),1)],q),D.m,w,D.e,D.i,0,w,w),o=C.a([v.$4(B.bO_,"Decline",D.aw,h)],q)
if(i!=null)o.push(v.$4(D.k0,"Later",D.ay,i))
o.push(v.$5$big(D.iM,"Answer",D.bf,g,!0))
return C.p(w,C.x(C.a([p,D.aB,C.B(o,D.E,w,D.e,D.i,0,w,w)],q),D.ak,w,D.e,D.P,0,D.p),D.f,w,w,new C.o(w,w,s,t,r,B.zq,D.n),w,w,w,D.d1,Ai.a_Z,w,w,u)},
$6$about$avatar$glow$onAnswer$onDecline$who(d,e,f,g,h,i){return this.$7$about$avatar$glow$onAnswer$onDecline$onLater$who(d,e,f,g,h,null,i)},
$S:1809}
A.eec.prototype={
$5$big(d,e,f,g,h){var w=null,v=h?58:50,u=h?58:50
return C.E(C.aA(w,C.x(C.a([C.p(w,C.X(d,D.c,w,w,w,h?30:26),D.f,w,w,new C.o(f,w,w,w,w,w,D.a6),w,u,w,w,w,w,w,v),D.fG,C.d(e,w,w,w,w,w,w,N.At,w,w,w)],x.p),D.m,w,D.e,D.P,0,D.p),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new A.eed(g),w,w,w,w,!1,D.a3),1)},
$4(d,e,f,g){return this.$5$big(d,e,f,g,!1)},
$S:1810}
A.eed.prototype={
$1(d){return this.a.$0()},
$S:22}
A.ee5.prototype={
$0(){var w=this.a
w.Bb()
w.aCl("You turned the call down")},
$S:0}
A.ee6.prototype={
$0(){var w=this.a
w.Bb()
w.iS.push(this.b)
w.ej("Saved on your waiting list. You will be taken there when you are free.",!0)},
$S:0}
A.ee4.prototype={
$0(){var w=this.b,v=this.a
v.Bb()
v.fF=w
v.hE=0
v.axw(w)},
$S:0}
A.ee7.prototype={
$0(){var w=this.a
w.Bb()
w.cD3(this.b)},
$S:0}
A.eea.prototype={
$2(d,e){var w=this.a
w.b4=d
w.be=e},
$S:200}
A.ee8.prototype={
$0(){var w=this.a
return w.m(new A.ee1(w))},
$S:0}
A.ee1.prototype={
$0(){var w=this.a
return w.bj=!w.bj},
$S:0}
A.ee9.prototype={
$0(){var w=this.a,v=w.aL
if(v==null)v=null
else{v=v.at
v===$&&C.c()}w=v==null?w.aC:v
if(w!=null)if(w.Q<=0.01)w.as=160
return null},
$S:0}
A.edP.prototype={
$1(d){var w=this.a,v=w.p4
w=w.RG
return v==="ptrap"?new A.a9X(w,null):new A.a5o(w,null)},
$S:1811}
A.edQ.prototype={
$1(d){var w=this.a
return new A.E8(w.p4,w.R8,null)},
$S:z+33}
A.eg3.prototype={
$1(d){var w=this.a
return new A.E8(w.a,w.c,null)},
$S:z+33}
A.edS.prototype={
$1(d){return A.cjw(!1,!1,this.a.CW,!1)},
$S:z+44}
A.edR.prototype={
$1(d){return new A.Wu(!1,this.a.fr,null)},
$S:z+71}
A.ebu.prototype={
$1(d){var w,v,u,t,s,r,q,p=null,o=this.a,n=o.d
n===$&&C.c()
w=n.d
w===$&&C.c()
n=C.d("Add to "+w[n.e].b,p,p,p,p,p,p,D.de,p,p,p)
w=x.p
v=C.a([],w)
for(u=0;u<10;++u){t={}
s=B.d45[u]
t.a=null
t.a=s.a
r=new C.aP(12,12)
q=new C.ay(D.b_,1,D.r,-1)
v.push(C.aA(p,C.p(p,new C.y(s.b,p,D.tu,p,p,p,p,p,p,p,p,p),D.f,p,p,new C.o(D.eP.j(0.4),p,new C.bG(q,q,q,q),new C.bh(r,r,r,r),p,p,D.n),p,p,p,p,A1.wb,p,p,p),D.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new A.ebt(t,o,d),p,p,p,p,p,p,!1,D.a3))}return C.bn(!0,new C.D(D.bQ,C.x(C.a([n,D.av,B.fVM,D.ae,C.bX(D.bG,v,D.br,p,8,8)],w),D.E,p,D.e,D.P,0,D.p),p),!0,!1,D.af,!0,!0)},
$S:26}
A.ebt.prototype={
$0(){C.a5(this.c,!1).O(null)
this.b.bC8(this.a.a)},
$S:0}
A.ebo.prototype={
$1(d){return d.b==="back"},
$S:z+19}
A.ebp.prototype={
$1(d){return d.b==="back"},
$S:z+19}
A.ebq.prototype={
$1(d){return Math.abs(d-this.a)>13},
$S:114}
A.ebr.prototype={
$0(){var w=this
w.b.id.push(new A.aWS(w.c,w.d,new A.CJ(C.U(x.S,x.N))))
w.a.iK()},
$S:0}
A.edI.prototype={
$0(){var w,v=this,u=v.b,t=u.c,s=v.c,r=v.d
u.c=t+(s?D.o.gW5(r)*40:r)
t=u.d
r=v.e
u.d=t+(s?D.o.gW5(r)*40:r)
t=v.a
r=t.d
r===$&&C.c()
w=r.d
w===$&&C.c()
w[r.e].a4j(0,u)
t.iK()},
$S:0}
A.efD.prototype={
$0(){var w,v,u,t=this.b
t.e=D.o.F(t.e+1,4)
w=this.a
v=w.d
v===$&&C.c()
u=v.d
u===$&&C.c()
u[v.e].a4j(0,t)
w.iK()},
$S:0}
A.eeH.prototype={
$0(){var w=this.b
w.f=(w.f+1)%6
this.a.iK()},
$S:0}
A.eeK.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.d
w===$&&C.c()
D.d.W(w[u.e].x,this.b)
v.at=v.Q=0
v.iK()},
$S:0}
A.ebs.prototype={
$0(){var w=this.a,v=this.b.a
w.Q=v
w.at=100+v
w.iK()},
$S:0}
A.ecE.prototype={
$0(){return this.a.aeJ(-6,0)},
$S:0}
A.ecF.prototype={
$0(){return this.a.aeJ(6,0)},
$S:0}
A.ecG.prototype={
$0(){return this.a.aeJ(0,-6)},
$S:0}
A.ecH.prototype={
$0(){return this.a.aeJ(0,6)},
$S:0}
A.ecI.prototype={
$0(){return this.a.bCb(this.b.a)},
$S:0}
A.ecJ.prototype={
$0(){var w=this.a
return w.m(new A.ecD(w))},
$S:0}
A.ecD.prototype={
$0(){return this.a.as=-1},
$S:0}
A.ecK.prototype={
$0(){var w=this.a
w.m(new A.ecC(w,this.b))},
$S:0}
A.ecC.prototype={
$0(){var w,v=this.a,u=v.as,t=this.b,s=v.d
if(u<0){s===$&&C.c()
u=s.d
u===$&&C.c()
D.d.hx(u[s.e].z,0,3,t)}else{s===$&&C.c()
w=s.d
w===$&&C.c()
w[s.e].z[u]=t}v.iK()},
$S:0}
A.ecL.prototype={
$0(){var w=this.a
w.m(new A.ecB(w,this.b))},
$S:0}
A.ecB.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.d
w===$&&C.c()
w[u.e].Q=this.b
v.iK()},
$S:0}
A.ecM.prototype={
$0(){var w=this.a
w.m(new A.ecA(w))},
$S:0}
A.ecA.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.d
w===$&&C.c()
u=w[u.e]
u.go=u.go==="fan"?"light":"fan"
v.iK()},
$S:0}
A.ecN.prototype={
$0(){var w=this.a
w.m(new A.ecz(w,this.b))},
$S:0}
A.ecz.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.d
w===$&&C.c()
w[u.e].as=this.b
v.iK()},
$S:0}
A.ecO.prototype={
$0(){return this.a.AG(this.b.d)},
$S:0}
A.eg6.prototype={
$0(){return C.a5(this.a,!1).im()},
$S:0}
A.eg8.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.eg5(w))},
$S:0}
A.eg5.prototype={
$0(){return this.a.aB=null},
$S:0}
A.eg7.prototype={
$3(d,e,f){var w=null
return C.db(C.cqU(D.A,w,w,w,w,D.ci,D.vL,w,this.a.aB,!1,!1,!1,w,D.pq,1,w),e)},
$S:101}
A.ecg.prototype={
$0(){return this.a.A9("calls")},
$S:0}
A.ech.prototype={
$0(){return this.a.A9("hospital")},
$S:0}
A.eci.prototype={
$0(){return this.a.A9("shop")},
$S:0}
A.ecm.prototype={
$0(){return this.a.A9("people")},
$S:0}
A.ecn.prototype={
$0(){return this.a.AG(10)},
$S:0}
A.eco.prototype={
$0(){var w=this.a
return w.m(new A.ecf(w))},
$S:0}
A.ecf.prototype={
$0(){return this.a.k2=!0},
$S:0}
A.ecp.prototype={
$0(){var w=this.a
return w.m(new A.ece(w))},
$S:0}
A.ece.prototype={
$0(){return this.a.k3=!0},
$S:0}
A.ecq.prototype={
$0(){var w=this.a
return w.m(new A.ecd(w))},
$S:0}
A.ecd.prototype={
$0(){var w=this.a
return w.y1=w.fF},
$S:0}
A.ecr.prototype={
$0(){var w=this.a,v=w.iS.length,u=v===1?"":"s"
return w.ej(""+v+" job"+u+" waiting. You are taken to the next one when you finish this one.",!0)},
$S:0}
A.ecs.prototype={
$0(){var w=this.a
return w.m(new A.ecc(w))},
$S:0}
A.ecc.prototype={
$0(){return this.a.go=!0},
$S:0}
A.ect.prototype={
$0(){var w=this.a
return w.p4?w.a30():w.m(new A.ecb(w))},
$S:0}
A.ecb.prototype={
$0(){return this.a.R8=!0},
$S:0}
A.ecj.prototype={
$0(){var w=this.a
return w.m(new A.eca(w))},
$S:0}
A.eca.prototype={
$0(){var w=this.a
return w.jQ=!w.jQ},
$S:0}
A.eck.prototype={
$0(){var w=this.a
return w.m(new A.ec9(w))},
$S:0}
A.ec9.prototype={
$0(){return this.a.ai=!0},
$S:0}
A.ecl.prototype={
$0(){var w=this.a
return w.m(new A.ec8(w))},
$S:0}
A.ec8.prototype={
$0(){var w=this.a
return w.y=!w.y},
$S:0}
A.ebB.prototype={
$0(){var w=this.a.ghI()
w=w==null?null:w.r
return w==null?0:w},
$S:96}
A.ebP.prototype={
$0(){return this.a.y6()},
$S:0}
A.ebO.prototype={
$1(d){return d<=5},
$S:34}
A.ebC.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n=null,m=this.a,l=m.aL,k=m.CW
if(l!=null){m=k.gf2()
k=B.aIg.h(0,$.ahZ)
if(k==null)k=B.a8l
k=l.cPI(m/1000,k)
m=k}else{l=m.d
l===$&&C.c()
w=l.d
w===$&&C.c()
l=w[l.e]
w=k.gf2()
v=m.cnj()
u=B.aIg.h(0,$.ahZ)
if(u==null)u=B.a8l
t=m.fr
s=m.r
r=m.bPq()
if(m.al==null){q=m.gpq()
if(q==null)q=n
else{q=q.x
q=(q==null?n:q.r)===!0}q=q===!0}else q=!0
p=m.d
o=p.d
o===$&&C.c()
if(o[p.e].c!=="outside")k=B.It
else{p=m.gpq()
p=p==null?n:p.amM(k.gf2()/1000)
if(p==null)p=B.It
p=C.C(p,x.hg)
o=m.gKF()
k=o==null?n:o.amM(k.gf2()/1000)
D.d.v(p,k==null?B.It:k)
k=p}l=C.C(A.iee(l,w/1000,q,k,r,s,v,u,t),x.c)
k=m.d
w=k.d
w===$&&C.c()
if(w[k.e].c==="outside")D.d.v(l,m.cET())
k=m.d
w=k.d
w===$&&C.c()
if(w[k.e].c==="outside")D.d.v(l,m.bEX())
k=!0
if(m.fF==null){w=m.gpq()
if((w==null?n:w.x)==null){k=m.gKF()
k=(k==null?n:k.f)!=null}}D.d.v(l,k?m.ctH():B.wL)
m=l}return m},
$S:z+8}
A.ebD.prototype={
$1(d){var w,v,u=this.a,t=u.aL,s=t==null
if(s){w=u.d
w===$&&C.c()
v=w.d
v===$&&C.c()
w=v[w.e].c==="outside"}else w=!1
if(w)u=A.ip4(u.CW.gf2()/1000)
else{u=s?null:t.cPs()
if(u==null)u=B.qH}return u},
$S:z+74}
A.ebQ.prototype={
$3(d,e,f){var w=null,v=D.dG.j(0.82),u=C.n(18),t=C.L(D.b8,D.r,2)
return C.p(w,C.d(e,w,w,w,w,w,w,B.fyh,w,w,w),D.f,w,w,new C.o(v,w,t,u,w,w,D.n),w,w,w,w,B.bEm,w,w,w)},
$S:1812}
A.ebG.prototype={
$0(){var w=this.a,v=w.d
v===$&&C.c()
return v.a.length!==0?w.Eu():w.coy(this.b)},
$S:0}
A.ebR.prototype={
$0(){var w=this.a
w.m(new A.ebA(w))
w.y6()},
$S:0}
A.ebA.prototype={
$0(){var w=this.a
w.x=!w.x
w.iK()},
$S:0}
A.ebS.prototype={
$0(){var w=this.a
return w.cx!=null?w.Sl():w.cEK()},
$S:0}
A.ebT.prototype={
$0(){var w=this.a
w.m(new A.ebz(w))
w.y6()
if(w.z)w.iL("Drag to turn all the way round. Double tap a spot on the floor to walk there.")},
$S:0}
A.ebz.prototype={
$0(){var w=this.a,v=!w.z
w.z=v
if(v&&w.cx!=null)w.Sl()
w.iK()},
$S:0}
A.ebU.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.d
w===$&&C.c()
return v.AG(w[u.e].c!=="outside"?11:10)},
$S:0}
A.ebV.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.d
w===$&&C.c()
if(w[u.e].c!=="outside")v.AG(11)
v.A9("calls")},
$S:0}
A.ebE.prototype={
$0(){var w=this.a
return w.m(new A.eby(w))},
$S:0}
A.eby.prototype={
$0(){var w=this.a,v=!w.w
w.w=v
if(v)w.iL("Voltage tester in your hand: tap an outlet, a switch or the light.")},
$S:0}
A.ebF.prototype={
$0(){var w=this.a
return w.m(new A.ebx(w))},
$S:0}
A.ebx.prototype={
$0(){var w=this.a
return w.y=!w.y},
$S:0}
A.ebH.prototype={
$0(){return this.a.Q1("look")},
$S:0}
A.ebI.prototype={
$0(){return this.a.Q1("furniture")},
$S:0}
A.ebJ.prototype={
$0(){return this.a.Q1("walls")},
$S:0}
A.ebK.prototype={
$0(){return this.a.Q1("floor")},
$S:0}
A.ebL.prototype={
$0(){return this.a.Q1("ceiling")},
$S:0}
A.ebM.prototype={
$0(){return this.a.Q1("doors")},
$S:0}
A.ebN.prototype={
$0(){return C.a5(this.a,!1).cc(C.ej(new A.ebw(),!1,null,x.H))},
$S:0}
A.ebw.prototype={
$1(d){return B.aJg},
$S:z+75}
A.eeF.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=C.aG(d,m,x.w).w,k=this.a,j=k.d
j===$&&C.c()
w=x.p
j=C.a([B.fJQ,D.av,C.d("Wiring "+j.gd0o()+"/"+k.d.gr_().length+" \xb7 Plumbing "+k.d.gcY0()+"/"+k.d.gcY_(),m,m,m,m,m,m,B.Kr,m,m,m),D.W],w)
for(v=k.d.gr_(),u=v.length,t=0;t<v.length;v.length===u||(0,C.K)(v),++t){s=v[t]
r=D.c.j(0.05)
q=new C.aP(12,12)
p=new C.ay(s.gkS()&&s.gjU()?D.ba.j(0.5):D.bz,1,D.r,-1)
if(s.gkS()&&s.gjU())o="\u2705 finished"
else{o=s.gkS()?"":"\u26a1 wiring  "
o+=s.gjU()?"":"\ud83d\udeb0 plumbing"}n=s.gkS()&&s.gjU()?D.ep:D.ac
j.push(C.aA(m,C.p(m,new C.ca(D.aL,D.e,D.i,D.m,m,D.p,m,0,C.a([new C.by(1,D.bb,new C.y(s.b,m,B.aVD,m,m,m,m,m,m,m,m,m),m),new C.y(o,m,new C.F(!0,n,m,m,m,m,12,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m,m,m,m,m,m,m)],w),m),D.f,m,m,new C.o(r,m,new C.bG(p,p,p,p),new C.bh(q,q,q,q),m,m,D.n),m,m,m,D.eI,D.bT,m,m,m),D.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new A.eeC(k,d,s),m,m,m,m,m,m,!1,D.a3))}j.push(D.N)
j.push(C.dT(B.fGN,new A.eeD(k,d),m))
j.push(D.N)
j.push(C.bI(B.fCV,m,new A.eeE(k,d),m))
return C.bn(!0,new C.cU(new C.aZ(0,1/0,0,l.a.b*0.75),C.cl(j,m,m,D.bQ,m,m,D.ah,!0),m),!0,!1,D.af,!0,!0)},
$S:26}
A.eeC.prototype={
$0(){C.a5(this.b,!1).O(null)
this.a.AG(this.c.a)},
$S:0}
A.eeD.prototype={
$0(){C.a5(this.b,!1).O(null)
var w=this.a
w.m(new A.eeB(w))
w.iL("Every room needs its wiring and plumbing again. Wire the whole house from the start.")},
$S:0}
A.eeB.prototype={
$0(){var w=this.a,v=w.d
v===$&&C.c()
v.cUB()
w.iK()},
$S:0}
A.eeE.prototype={
$0(){C.a5(this.b,!1).O(null)
$.Em=A.aWY(D.o.F(Date.now(),1e5))
var w=this.a
w.m(new A.eeA(w))
w.aeI(!0)},
$S:0}
A.eeA.prototype={
$0(){var w=this.a,v=$.Em
v.toString
w.d=v
w.r="look"
w.Q=0
w.as=-1
w.at=0
w.iK()},
$S:0}
A.dx8.prototype={
$1(d){var w,v,u,t,s,r=d.b,q=14*this.b,p=D.k.ec(r.a,q),o=D.k.ec(r.b,q)
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
A.f9g.prototype={
$0(){return this.b.d=this.a.a},
$S:0}
A.f9f.prototype={
$0(){return this.a.d=null},
$S:0}
A.f9i.prototype={
$1(d){return this.a.b_J(d.geZ())},
$S:70}
A.f9j.prototype={
$1(d){return this.a.b_J(d.geZ())},
$S:192}
A.f9k.prototype={
$1(d){return this.a.b_I()},
$S:112}
A.f9h.prototype={
$1(d){return this.a.b_I()},
$S:134}
A.fBQ.prototype={
$1$speed(d){var w,v,u,t=null,s=this.a,r=s.a
if(r.length===0)return
w=s.b
v=s.d
u=s.c
u=u.length===0?t:D.d.gI(u)
this.b.push(new A.MA(r,w,d,8,u,t,v,t,t))
v=x.o
s.a=C.a([],v)
s.b=C.a([],v)
s.c=C.a([],x.s)
s.d=!1},
$0(){return this.$1$speed(130)},
$S:1813}
A.fBX.prototype={
$3$note(d,e,f){var w=this.a
w.a.push(d)
w.b.push(e)
if(f!=null)w.c.push(f)},
$2(d,e){return this.$3$note(d,e,null)},
$S:z+76}
A.fBS.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m,l,k
for(w=this.a.x,v=w.length,u=d.a,t=d.c,s=d.b,r=0;r<v;++r){q=w[r]
p=q.b
if(p!=="billboard"&&p!=="cornersign"&&p!=="townsign"&&p!=="adboard")continue
A:{if("townsign"===p){p=B.a8P
break A}if("cornersign"===p){p=B.a8R
break A}if("adboard"===p){p=B.a8O
break A}p=B.a8Q
break A}o=p.a
n=p.b
m=(q.e&1)===1
l=q.c
k=m?n:o
if(Math.abs(u-l)<k){l=q.d
k=m?o:n
p=Math.abs(t-l)<k&&s<p.c}else p=!1
if(p)return!0}return!1},
$S:z+24}
A.fBY.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
for(w=this.a.x,v=w.length,u=0;u<=1;u+=0.02){t=A.oN(d,e,u)
for(s=t.a,r=t.c,q=t.b,p=0;p<v;++p){o=w[p]
n=o.b
if(n!=="billboard"&&n!=="cornersign"&&n!=="townsign"&&n!=="adboard")continue
A:{if("townsign"===n){n=B.a8P
break A}if("cornersign"===n){n=B.a8R
break A}if("adboard"===n){n=B.a8O
break A}n=B.a8Q
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
A.fBR.prototype={
$2(d,e){return this.a.$2(d,e)!=null},
$S:z+78}
A.fBO.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this.a.$2(d,e)
if(i==null)return null
w=i.b
A:{if("townsign"===w){v=B.a8P
break A}if("cornersign"===w){v=B.a8R
break A}if("adboard"===w){v=B.a8O
break A}v=B.a8Q
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
n=new A.fBP(d,e)
o=this.b
k=!o.$1(m)
j=!o.$1(l)
if(k&&j)return n.$1(m)<=n.$1(l)?m:l
if(k)v=m
else v=j?l:null
return v},
$S:z+79}
A.fBP.prototype={
$1(d){return d.aG(0,this.a).gqc()+this.b.aG(0,d).gqc()},
$S:z+80}
A.fBI.prototype={
$3(d,e,f){var w,v,u,t=this
if(!t.a.$2(d,e))return B.nD
w=f>=3?null:t.b.$2(d,e)
if(w==null)return C.a([new A.q((d.a+e.a)/2,430,(d.c+e.c)/2)],x.o)
v=f+1
u=C.C(t.$3(d,w,v),x.cv)
u.push(w)
D.d.v(u,t.$3(w,e,v))
return u},
$2(d,e){return this.$3(d,e,0)},
$S:z+81}
A.fBU.prototype={
$7$note(a2,a3,a4,a5,a6,a7,a8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=A.hxM(a2),a1=new A.q(a2.c,a4,a2.d)
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
g=u.$1(A.oN(h,i,f))
f+=0.02}if(g)for(m=r.$2(h,i),l=m.length,e=0;e<m.length;m.length===l||(0,C.K)(m),++e)w.$2(m[e],D.d.gak(v.b))}w.$3$note(i,a1,k?a8:q)
q=null}},
$6(d,e,f,g,h,i){return this.$7$note(d,e,f,g,h,i,null)},
$S:z+82}
A.fBW.prototype={
$1(d){var w=d.b,v=this.a
switch(w){case"townsign":v.$7$note(d,255,250,430,520,60,"The biggest billboard in the city: NGMY Town")
break
case"cornersign":v.$7$note(d,115,120,210,260,50,"A corner billboard: NGMY Town")
break
case"adboard":v.$7$note(d,160,142,330,410,55,"A big NGMY ad billboard")
break
case"tower":v.$7$note(d,430,(w==="hq"?278:A.hx1(B.zt[d.f]))+40,150,210,20,"A tower with NGMY ad boards")
break
case"hq":v.$7$note(d,440,312,190,250,20,"The NGMY company building")
break
default:v.$7$note(d,75,48,130,175,45,"An NGMY billboard")}},
$S:z+29}
A.fBV.prototype={
$1(d){var w,v,u,t,s,r,q,p=this.a,o=p.a.length
this.b.$1(d)
if(o>0&&o<p.a.length){w=p.a
v=o-1
u=this.c.$2(w[v],w[o])
w=J.a7(u)
if(w.gK(u)!==0){t=p.b
s=t[v]
r=t[o]
for(q=0;q<w.gK(u);){v=o+q
D.d.c6(p.a,v,w.h(u,q));++q
D.d.c6(p.b,v,A.oN(s,r,q/(w.gK(u)+1)))}}}},
$S:z+29}
A.fBT.prototype={
$1(d){var w
this.b.$0()
w=x.o
this.c.push(new A.MA(C.a([B.hhF,B.h1r,B.h3y],w),C.a([B.hib,B.h2J,B.h6r],w),55,8,"Inside the "+B.hF.h(0,d.b).a.toLowerCase(),d,!1,null,null))
this.a.d=!0},
$S:z+29}
A.fBJ.prototype={
$1(d){return d.b==="townsign"},
$S:z+4}
A.fBK.prototype={
$2(d,e){var w=this.a
return D.k.aO(Math.pow(d.c-w.a.a,2)+Math.pow(d.d-w.a.c,2),Math.pow(e.c-w.a.a,2)+Math.pow(e.d-w.a.c,2))},
$S:z+21}
A.fBH.prototype={
$1(d){return Math.atan2(d.d-1000,d.c)},
$S:z+84}
A.fBL.prototype={
$2(d,e){var w=this.a
return J.z3(w.$1(d),w.$1(e))},
$S:z+21}
A.fBM.prototype={
$1(d){return d.b==="bighouse"},
$S:z+4}
A.fBN.prototype={
$1(d){return d.b===this.a},
$S:z+4}
A.feZ.prototype={
$0(){var w=this.a
return w.m(new A.feY(w))},
$S:0}
A.feY.prototype={
$0(){var w=this.a
return w.d=!w.d},
$S:0}
A.chE.prototype={
$0(){var w=0,v=C.j(x.P),u=1,t=[],s,r,q,p,o,n
var $async$$0=C.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
w=6
return C.b($.rg().jl(0,"assets/images/ngmy_logo.png"),$async$$0)
case 6:s=e
w=7
return C.b(C.fFE(J.eT(J.vR(s)),null),$async$$0)
case 7:r=e
o=$
n=J
w=8
return C.b(r.lP(),$async$$0)
case 8:o.Wo=n.a3u(e)
u=1
w=5
break
case 3:u=2
p=t.pop()
$.Wo=null
w=5
break
case 2:w=1
break
case 5:return C.h(null,v)
case 1:return C.f(t.at(-1),v)}})
return C.i($async$$0,v)},
$S:51}
A.fTB.prototype={
$4(d,e,f,g){var w,v,u=null,t=e*0.05,s=C.fz(u,u,1,u,C.cT(u,u,u,u,u,u,u,u,u,C.l(u,u,f,u,u,u,u,u,u,u,u,e,u,u,D.u,u,u,!0,u,t,u,u,u,u,u,u),d),D.a4,D.bX,u,D.dA,D.bV)
s.eg()
w=s.b.c
v=this.a
if(w>v){s=C.fz(u,u,1,u,C.cT(u,u,u,u,u,u,u,u,u,C.l(u,u,f,u,u,u,u,u,u,u,u,e*v/w,u,u,D.u,u,u,!0,u,t,u,u,u,u,u,u),d),D.a4,D.bX,u,D.dA,D.bV)
s.eg()}s.a4(this.b,new C.u(this.c+v/2-s.b.c/2,g))},
$S:1814}
A.fTz.prototype={
$1(d){var w,v,u,t,s,r=null,q=this.a,p=this.b,o=d.d-d.b
if(q!=null){w=q.c
v=q.d
u=Math.min((d.c-d.a)/w,o/v)
o=C.bK(d.gbL(),v*u,w*u)
$.S()
t=C.J()
t.Q=D.ci
p.oF(q,new C.a3(0,0,w,v),o,t)}else{s=C.fz(r,r,r,r,C.cT(r,r,r,r,r,r,r,r,r,C.l(r,r,this.c,r,r,r,r,r,r,r,r,o*0.6,r,r,D.u,r,r,!0,r,r,r,r,r,r,r,r),"NGMY"),D.a4,D.bX,r,D.dA,D.bV)
s.eg()
q=d.gbL()
o=s.b
w=o.c
o=o.a.c
s.a4(p,q.aG(0,new C.u(w/2,o.gba(o)/2)))}},
$S:1815}
A.fTy.prototype={
$4$w(d,e,f,g){var w=null,v=C.fz(w,w,w,w,C.cT(w,w,w,w,w,w,w,w,w,C.l(w,w,this.a,w,w,w,w,w,w,w,w,f,w,w,g,w,w,!0,w,f*0.08,w,w,w,w,w,w),d),D.a4,D.bX,w,D.dA,D.bV)
v.o2(this.b.a*0.9)
v.a4(this.c,e.aG(0,new C.u(v.b.c/2,0)))},
$3(d,e,f){return this.$4$w(d,e,f,D.u)},
$S:1816}
A.fTA.prototype={
$1(d){var w=null,v=this.a.b*0.16
v=C.fz(w,w,w,w,C.cT(w,w,w,w,w,w,w,w,w,C.l(w,w,w,w,w,w,w,w,w,w,w,v,w,w,D.u,w,w,!0,w,v*0.08,w,w,w,w,w,w),d),D.a4,D.bX,w,D.dA,D.bV)
v.eg()
return v.b.c},
$S:757}
A.fCo.prototype={
$2(d,e){return this.a===d?e:0},
$S:758}
A.fCa.prototype={
$1(d){return d.b==="right"},
$S:z+19}
A.fCl.prototype={
$0(){var w=C.a([],x.z),v=new A.f3(w)
v.f=1
v.x=$.dp=$.dp+1
v.aE(B.hkQ,B.h6y,B.Bs)
v.aF(B.h1e,B.hdp,B.i4,0.5)
v.aE(B.aXI,B.hfc,B.Bs)
v.aE(B.aXI,B.haJ,B.Bs)
return w},
$S:z+85}
A.fCm.prototype={
$1(d){var w=this,v=w.a,u=v.b
A:{if("left"===u){v=A.nH(d,0,1.5707963267948966,new A.q(-w.b/2,0,v.c+w.c/2-40))
break A}if("right"===u){v=A.nH(d,0,-1.5707963267948966,new A.q(w.b/2,0,v.c+w.c/2-40))
break A}v=A.nH(d,0,0,new A.q(v.c,0,0))
break A}return v},
$S:z+86}
A.fCb.prototype={
$1(d){return d.b==="back"},
$S:z+19}
A.fCc.prototype={
$1(d){return d.c},
$S:z+87}
A.fCd.prototype={
$2(d,e){return e},
$S:80}
A.fCe.prototype={
$3(d,e,f){return K.Sd(d,e,0,f+this.a)},
$S:24}
A.fCg.prototype={
$2(a8,a9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this
if(a8==null)return
w=A.aQe(a8)
v=a7.a
u=A.heE(v,w,a9)
t=u.a
s=u.b
r=u.d
q=t-2.5
p=s-2.5
o=v.p3+a9*2
n=a7.b
m=n.b=730+a9
l=n.x=$.dp=$.dp+1
n.e=5
k=v.c==="hall"
if(!(k&&a9<2))j=!k&&v.p1!=="back"
else j=!0
if(j){i=k?a9===1:v.p1==="left"
k=a7.c
h=i?-k/2:k/2
g=i?1:-1
f=u.c
n.aF(new A.q(h+g*1.4,r,f),new A.q(2.6,s+3,t+3),B.Mg,0.5)
n.aF(new A.q(h+g*2.8,r,f),new A.q(0.2,s,t),F.nk,0.7)
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
k.push(new A.fo(C.a([new A.q(e,a1,d),new A.q(e,a1,a0),new A.q(e,j,a0),new A.q(e,j,d)],a2),m,new A.fCh(o,v,a9),320,a3,9,1,l,!1))
a4=h+g*0.05
k.push(new A.fo(C.a([new A.q(a4,a1,a0),new A.q(a4,a1,d),new A.q(a4,j,d),new A.q(a4,j,a0)],a2),m,new A.fCi(o,v,a9),320,a3,9,1,l,!1))}}else{h=u.c
n.aF(new A.q(h,r,1.4),new A.q(t+3,s+3,2.6),B.Mg,0.5)
n.aF(new A.q(h,r,2.8),new A.q(t,s,0.2),F.nk,0.7)
if(v.p2){k=a7.d
j=q/2
a1=h-j
a2=p/2
a3=r+a2
j=h+j
a2=r-a2
a5=x.o
a6=320*p/q
k.push(new A.fo(C.a([new A.q(a1,a3,2.95),new A.q(j,a3,2.95),new A.q(j,a2,2.95),new A.q(a1,a2,2.95)],a5),m,new A.fCj(o,v,a9),320,a6,9,1,l,!1))
k.push(new A.fo(C.a([new A.q(j,a3,0.05),new A.q(a1,a3,0.05),new A.q(a1,a2,0.05),new A.q(j,a2,0.05)],a5),m,new A.fCk(o,v,a9),320,a6,9,1,l,!1))}}n.e=n.x=0
v=v.p2?"It is on and playing "+E.kr[D.o.F(o,8)].a+". Tap it to watch full screen with the remote.":"The TV is off. Tap it to turn it on."
a7.e.n(0,m,new A.cL(w.b,v,new A.q(0,r,4),110))},
$S:1819}
A.fCh.prototype={
$3(d,e,f){return K.Sd(d,e,this.a,f+this.b.a+this.c*3)},
$S:24}
A.fCi.prototype={
$3(d,e,f){return K.Sd(d,e,this.a,f+this.b.a+this.c*3)},
$S:24}
A.fCj.prototype={
$3(d,e,f){return K.Sd(d,e,this.a,f+this.b.a+this.c*3)},
$S:24}
A.fCk.prototype={
$3(d,e,f){return K.Sd(d,e,this.a,f+this.b.a+this.c*3)},
$S:24}
A.fCn.prototype={
$2(d,e){var w=this.a,v=w.f,u=w.r
w.f=1
w.r=!1
w.b=0
w.d1(new A.q(d,e,0),new A.q(d,e,2.2),0.7,B.M6,0.7,10)
w.f=v
w.r=u},
$S:200}
A.fCf.prototype={
$1(d){return d.b===this.a.a},
$S:z+15}
A.fv8.prototype={
$2(d,e){return this.a===d?e:0},
$S:758}
A.fv9.prototype={
$5(d,e,f,g,h){var w=d.a7(0,e.aJ(0,g)).a7(0,new A.q(0,h,0)),v=this.a
A.kJ(v,w.a7(0,f.aJ(0,0.1)),e,B.e8,26,30,B.kI,f,0)
A.kJ(v,w.a7(0,f.aJ(0,0.2)),e,B.e8,22,26,B.i4,f,0.6)
A.kJ(v,w.a7(0,f.aJ(0,0.3)),e,B.e8,22,1.2,B.kI,f,0)
A.kJ(v,w.a7(0,f.aJ(0,0.3)),e,B.e8,1.2,26,B.kI,f,0)},
$S:z+88}
A.fv4.prototype={
$5(d,e,f,g,h){var w=d.a7(0,e.aJ(0,g)),v=this.a,u=v.b
A.kJ(v,w.a7(0,new A.q(0,42,0)).a7(0,f.aJ(0,0.1)),e,B.e8,34,84,B.kI,f,0)
v.b=h
A.kJ(v,w.a7(0,new A.q(0,41,0)).a7(0,f.aJ(0,0.2)),e,B.e8,28,80,B.vP,f,0.2)
v.b=0
A.kJ(v,w.a7(0,new A.q(0,58,0)).a7(0,f.aJ(0,0.3)),e,B.e8,20,26,B.N7,f,0)
A.kJ(v,w.a7(0,new A.q(0,22,0)).a7(0,f.aJ(0,0.3)),e,B.e8,20,26,B.N7,f,0)
v.aF(w.a7(0,e.aJ(0,9)).a7(0,new A.q(0,40,0)).a7(0,f.aJ(0,1)),new A.q(2.6,2.6,2.6),B.Fp,0.8)
v.b=u},
$S:z+89}
A.fv5.prototype={
$5$poster(d,e,f,g,h){var w=C.a([d,e,f,g],x.o),v=h<0?A.he5():new A.fv6(h),u=h===0,t=u?1000:256
u=u?424:256
return this.a.push(new A.fo(w,0,v,t,u,1,2,this.b,!1))},
$4(d,e,f,g){return this.$5$poster(d,e,f,g,-1)},
$S:z+90}
A.fv6.prototype={
$3(d,e,f){return A.fTx(d,e,f,this.a)},
$S:24}
A.fus.prototype={
$1(d){var w=d.b
return w==="pole"||w==="lamppost"},
$S:z+4}
A.fut.prototype={
$2(d,e){return D.k.aO(d.c,e.c)},
$S:z+21}
A.fuu.prototype={
$1(d){return this.a.cy.aj(0,d.a)},
$S:z+4}
A.fuF.prototype={
$1(d){return this.a.k4.q(0,d.a)},
$S:z+4}
A.fuQ.prototype={
$1(d){return B.f88.q(0,d.b)},
$S:z+4}
A.fv7.prototype={
$3(d,e,f){var w=this.b
return A.vM(new A.q(d,e,f),this.a).a7(0,new A.q(w.c,0,w.d))},
$S:z+30}
A.fuZ.prototype={
$3(d,e,f){return A.mX(d,e,f,this.a.a+D.k.bf(f/7))},
$S:24}
A.fv_.prototype={
$3(d,e,f){return A.mX(d,e,f,this.a.a+D.k.bf(f/7))},
$S:24}
A.fv0.prototype={
$3(d,e,f){return A.vL(d,e,f,"NGMY TOWN",this.a)},
$S:24}
A.fv1.prototype={
$3(d,e,f){return A.vL(d,e,f,"NGMY TOWN",this.a)},
$S:24}
A.fv2.prototype={
$3(d,e,f){return A.mX(d,e,f,this.a.a+D.k.bf(f/7))},
$S:24}
A.fv3.prototype={
$3(d,e,f){return A.mX(d,e,f,this.a.a+4+D.k.bf(f/7))},
$S:24}
A.fuv.prototype={
$3(d,e,f){return A.mX(d,e,f,this.a.a+D.k.bf(f/7))},
$S:24}
A.fuw.prototype={
$3(d,e,f){return A.mX(d,e,f,this.a.a+7+D.k.bf(f/7))},
$S:24}
A.fux.prototype={
$3(d,e,f){return A.mX(d,e,f,this.a.a+3+D.k.bf(f/7))},
$S:24}
A.fuy.prototype={
$3(d,e,f){return A.mX(d,e,f,this.a.a+5+D.k.bf(f/7))},
$S:24}
A.fuz.prototype={
$3(d,e,f){return A.mX(d,e,f,this.a.a+1+D.k.bf(f/7))},
$S:24}
A.fuA.prototype={
$3(d,e,f){return A.mX(d,e,f,this.a.a+2+D.k.bf(f/7))},
$S:24}
A.fuB.prototype={
$3(d,e,f){return A.vL(d,e,f,"NGMY COMPANY","Building the movement")},
$S:24}
A.fuC.prototype={
$3(d,e,f){return A.vL(d,e,f,"NGMY","New Global Movement for Youth")},
$S:24}
A.fuD.prototype={
$3(d,e,f){return A.vL(d,e,f,"NGMY COMPANY","Building the movement")},
$S:24}
A.fuE.prototype={
$3(d,e,f){return A.vL(d,e,f,"NGMY","New Global Movement for Youth")},
$S:24}
A.fuG.prototype={
$3(d,e,f){return A.mX(d,e,f,this.a.a+4+D.k.bf(f/7))},
$S:24}
A.fuH.prototype={
$3(d,e,f){return A.mX(d,e,f,this.a.a+6+D.k.bf(f/7))},
$S:24}
A.fuI.prototype={
$3(d,e,f){return A.mX(d,e,f,this.a.a+2+D.k.bf(f/7))},
$S:24}
A.fuJ.prototype={
$3(d,e,f){return A.mX(d,e,f,this.a.a+3+D.k.bf(f/7))},
$S:24}
A.fuK.prototype={
$3(d,e,f){return A.vL(d,e,f,"NGMY STORE","Everything you need")},
$S:24}
A.fuL.prototype={
$3(d,e,f){return A.vL(d,e,f,"NGMY STORE","Everything you need")},
$S:24}
A.fuM.prototype={
$3(d,e,f){return A.vL(d,e,f,"NGMY STORE","Everything you need")},
$S:24}
A.fuN.prototype={
$3(d,e,f){return A.vL(d,e,f,"NGMY UBER","Rides home")},
$S:24}
A.fuO.prototype={
$3(d,e,f){return A.vL(d,e,f,"NGMY UBER","Rides home")},
$S:24}
A.fuP.prototype={
$3(d,e,f){return A.vL(d,e,f,"NGMY LICENCE","Get your Uber licence")},
$S:24}
A.fuR.prototype={
$3(d,e,f){return A.vL(d,e,f,"NGMY LICENCE","Get your Uber licence")},
$S:24}
A.fuS.prototype={
$3(d,e,f){return A.vL(d,e,f,"NGMY LICENCE","Get your Uber licence")},
$S:24}
A.fuT.prototype={
$3(d,e,f){return A.vL(d,e,f,"NGMY GAS","Open 24 hours")},
$S:24}
A.fuU.prototype={
$3(d,e,f){return A.mX(d,e,f,this.a.a*2+this.b+1)},
$S:24}
A.fuV.prototype={
$1(d){return d.b===this.a.a&&!d.x&&d.Q.length!==0},
$S:z+15}
A.fuW.prototype={
$1(d){return d.b===this.a.a&&d.x},
$S:z+15}
A.fuX.prototype={
$3(d,e,f){return A.fTx(d,e,f,0)},
$S:24}
A.fuY.prototype={
$3(d,e,f){return A.fTx(d,e,f,0)},
$S:24}
A.fFw.prototype={
$2(d,e){var w,v=this.a
if(v!=null){w=v.b-d
v=v.c-e
v=w*w+v*v<1e4}else v=!0
return v},
$S:1820}
A.fFt.prototype={
$1(d){return D.d.q(B.Ij,d.b)},
$S:z+4}
A.fFu.prototype={
$1(d){return d.b===this.a.a},
$S:z+15}
A.fFv.prototype={
$1(d){return d.b===this.a.a},
$S:z+15}
A.flc.prototype={
$5(d,e,f,g,h){var w,v,u,t,s,r,q,p,o,n,m,l,k,j
for(w=d.length,v=x.z,u=this.a,t=-f/2,s=u.a,r=this.b,q=0,p=0;p<w;++p){o=d[p]
n=o.a
m=C.a([],v)
l=new A.f3(m)
l.b=u.b
l.f=u.f
l.r=!0
l.aE(new A.q(0,t,0),new A.q(g,f,g),h)
k=(q&1)===0?1:-1
j=n>0?1:-1
D.d.v(s,A.nH(m,r*k*j,0,new A.q(n,e,o.b)));++q}},
$S:1821}
A.fl2.prototype={
$3(d,e,f){var w=this.a,v=this.b,u=this.c
return new A.q(w.c+v*d+u*f,e,w.d+u*d-v*f)},
$2(d,e){return this.$3(d,e,0)},
$S:z+46}
A.fw_.prototype={
$3(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k=x.z,j=C.a([],k),i=new A.f3(j)
i.b=this.a
i.r=!0
d.$1(i)
k=C.a([],k)
for(j=A.bD4(j,e,B.dX),w=j.length,v=f.a,u=f.b,t=f.c,s=x.o,r=0;r<j.length;j.length===w||(0,C.K)(j),++r){q=j[r]
p=C.a([],s)
for(o=q.a,n=o.length,m=0;m<o.length;o.length===n||(0,C.K)(o),++m){l=o[m]
p.push(new A.q(l.a+v,l.b+u,l.c+t))}k.push(new A.kr(p,q.b,q.c,q.d,q.e,q.f,q.r,q.w,q.x,q.y,q.z))}D.d.v(this.b.a,k)},
$S:z+91}
A.fvx.prototype={
$6$joint(d,e,f,g,h,i){var w=this.a
w.Ts(d,e,f,h,!1,g,this.b)
if(this.c&&i)w.ee(e,g*1.04,h,3,6)},
$5(d,e,f,g,h){return this.$6$joint(d,e,f,g,h,!0)},
$S:z+92}
A.fvy.prototype={
$1(d){return d.fu(B.dX,2.6,B.Z2,this.a,this.b,0.15)},
$S:z+1}
A.fvz.prototype={
$1(d){return d.ee(B.dX,2.6,D.bO,3,this.a)},
$S:z+1}
A.fvA.prototype={
$1(d){return d.ee(B.dX,5.2,this.a,this.b,this.c+2)},
$S:z+1}
A.fvL.prototype={
$1(d){var w=this,v=w.d?12:8
return d.Ts(B.dX,B.abo,w.a,w.b,!1,w.c,v)},
$S:z+1}
A.fvT.prototype={
$1(d){return d.Lh(B.dX,B.hci,5.1,B.bhu,!1,12)},
$S:z+1}
A.fvU.prototype={
$1(d){return d.ee(B.dX,2.7,this.a,this.b,this.c)},
$S:z+1}
A.fvV.prototype={
$1(d){var w=this,v=w.a?6.2:6.7,u=w.c
if(u<4)u=4
return d.ee(B.dX,v,w.b,u,w.d)},
$S:z+1}
A.fvW.prototype={
$1(d){var w=this.b,v=w?6:4
w=w?12:8
return d.ee(B.dX,4.7,this.a,v,w)},
$S:z+1}
A.fvX.prototype={
$1(d){return d.ee(B.dX,3,this.a,this.b,this.c)},
$S:z+1}
A.fvY.prototype={
$1(d){return d.ee(B.dX,1.25,this.a,3,6)},
$S:z+1}
A.fvZ.prototype={
$1(d){return d.ee(B.dX,1,D.c,3,6)},
$S:z+1}
A.fvB.prototype={
$1(d){return d.ee(B.dX,1.15,this.a,2,6)},
$S:z+1}
A.fvC.prototype={
$1(d){return d.ee(B.dX,1,this.a,3,6)},
$S:z+1}
A.fvD.prototype={
$1(d){return d.ee(B.dX,1,this.a,2,6)},
$S:z+1}
A.fvE.prototype={
$1(d){var w=C.ar(this.a,D.c,0.1)
w.toString
return d.ee(B.dX,1,w,2,6)},
$S:z+1}
A.fvF.prototype={
$1(d){var w=this.b,v=w?4:3
w=w?9:6
return d.ee(B.dX,5,this.a,v,w)},
$S:z+1}
A.fvG.prototype={
$1(d){return d.ee(B.dX,3.6,this.a,3,this.b)},
$S:z+1}
A.fvH.prototype={
$1(d){return d.ee(B.dX,4.8,this.a,this.b,this.c)},
$S:z+1}
A.fvI.prototype={
$1(d){var w=this.b,v=w?4:3
w=w?9:6
return d.ee(B.dX,6.2,this.a,v,w)},
$S:z+1}
A.fvJ.prototype={
$1(d){return d.ee(B.dX,4.2,this.a,3,this.b)},
$S:z+1}
A.fvK.prototype={
$1(d){var w=this.b,v=w?4:3
w=w?9:6
return d.ee(B.dX,5.1,this.a,v,w)},
$S:z+1}
A.fvM.prototype={
$1(d){return d.ee(B.dX,3.4,this.a,3,this.b)},
$S:z+1}
A.fvN.prototype={
$1(d){var w=C.ar(this.a,D.c,Math.abs(0.08))
w.toString
return d.ee(B.dX,2.6,w,this.b,this.c)},
$S:z+1}
A.fvO.prototype={
$1(d){return d.ee(B.dX,4.9,this.a,this.b,this.c)},
$S:z+1}
A.fvP.prototype={
$1(d){return d.ee(B.dX,3,this.a,3,this.b)},
$S:z+1}
A.fvQ.prototype={
$1(d){var w=this.b,v=w?4:3
w=w?9:6
return d.ee(B.dX,5,this.a,v,w)},
$S:z+1}
A.fvR.prototype={
$1(d){return d.ee(B.dX,3.6,this.a,3,this.b)},
$S:z+1}
A.fvS.prototype={
$1(d){return d.ee(B.dX,2.3,this.a,3,6)},
$S:z+1}
A.fp7.prototype={
$4(d,e,f,g){var w,v,u,t,s,r,q,p
for(w=this.a,v=e/2+0.2,u=d-8,t=-e/2-0.2,s=d/2+0.2,r=e-8,q=-d/2-0.2,p=f;p<g;p+=22){A.kJ(w,new A.q(0,p,v),B.h1,B.e8,u,9,B.i4,B.hL,0.6)
A.kJ(w,new A.q(0,p,t),B.oV,B.e8,u,9,B.i4,B.pO,0.6)
A.kJ(w,new A.q(s,p,0),B.pO,B.e8,r,9,B.i4,B.h1,0.6)
A.kJ(w,new A.q(q,p,0),B.hL,B.e8,r,9,B.i4,B.oV,0.6)}},
$S:760}
A.fCt.prototype={
$4$alongX(d,e,f,g){var w,v,u,t,s,r,q,p,o,n
for(w=this.a,v=0;v<=f;++v){u=A.oN(d,e,v/f)
w.aEn(new A.q(u.a,4,u.c),B.hlA,B.YR,!1,0.05)}t=A.oN(d,e,0.5)
for(s=e.aG(0,d).gqc()+0.15,r=t.a,q=t.c,p=0;p<2;++p){o=B.di3[p]
n=g?new A.q(s,0.16,0.3):new A.q(0.3,0.16,s)
w.aF(new A.q(r,o,q),n,B.YR,0.05)}},
$3(d,e,f){return this.$4$alongX(d,e,f,!0)},
$S:z+94}
A.fCq.prototype={
$2(d,e){return this.a.iV(A.Dt(d,0.35,3),0.06,e,!1,0.4,6)},
$S:z+95}
A.fCp.prototype={
$1(d){return this.a.iV(A.Dt(d,0.5,3),0.14,B.q3,!1,0.3,8)},
$S:z+96}
A.fCs.prototype={
$2$col(d,e){return this.a.iV(A.Dt(d,0.4,3),0.055,e,!1,0.35,6)},
$1(d){return this.$2$col(d,B.YZ)},
$S:z+97}
A.fCr.prototype={
$5$h$w(d,e,f,g,h){var w=this.a
w.b=d
w.aF(e,new A.q(h,g,0.06),f,0.3)},
$3(d,e,f){return this.$5$h$w(d,e,f,0.7,0.45)},
$4$w(d,e,f,g){return this.$5$h$w(d,e,f,0.7,g)},
$S:z+98}
A.fDs.prototype={
$0(){return A.fJ(1320,120,0.25,"tri")},
$S:0}
A.dUS.prototype={
$1(d){return this.a},
$S:39}
A.dUV.prototype={
$0(){return C.a5(this.a,!1).im()},
$S:0}
A.dUW.prototype={
$0(){return this.a.py(A.b1o("","",!0))},
$S:0}
A.dUX.prototype={
$0(){return this.a.py(B.dFX)},
$S:0}
A.dV_.prototype={
$0(){return this.a.py(A.b1o("wiring","",!0))},
$S:0}
A.dV0.prototype={
$0(){return this.a.py(A.b1o("plumbing","",!0))},
$S:0}
A.dV1.prototype={
$0(){return this.a.py(A.b1o("fix","",!0))},
$S:0}
A.dV2.prototype={
$0(){return this.a.py(A.cjw(!0,!0,null,!1))},
$S:0}
A.dV3.prototype={
$0(){return this.a.py(A.cjw(!0,!0,null,!0))},
$S:0}
A.dV4.prototype={
$0(){return this.a.py(B.eaK)},
$S:0}
A.dV5.prototype={
$0(){return this.a.py(new A.ask(!0,null))},
$S:0}
A.dV6.prototype={
$0(){return this.a.py(B.dQ1)},
$S:0}
A.dUY.prototype={
$0(){var w=this.a
return w.m(new A.dUU(w))},
$S:0}
A.dUU.prototype={
$0(){var w=this.a,v=w.e
w.e=!v
if(v)w.f=""},
$S:0}
A.dUZ.prototype={
$1(d){var w=this.a
return w.m(new A.dUT(w,d))},
$S:2}
A.dUT.prototype={
$0(){return this.a.f=this.b},
$S:0}
A.dUL.prototype={
$0(){var w=this.b.a
w=w==="house"?B.hq_:A.b1o("",w,!1)
return this.a.py(w)},
$S:0}
A.dUM.prototype={
$0(){return this.a.py(B.dMI)},
$S:0}
A.dUN.prototype={
$0(){return this.a.py(B.ef0)},
$S:0}
A.dUO.prototype={
$0(){return this.a.py(B.dMJ)},
$S:0}
A.dUP.prototype={
$0(){return this.a.py(B.aJg)},
$S:0}
A.dUQ.prototype={
$1(d){return d.length!==0},
$S:3}
A.dUR.prototype={
$1(d){var w=this.a.a
return D.a.q((w[4]+" "+w[0]+" "+w[5]).toLowerCase(),d)},
$S:3}
A.f96.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new A.f95())},
$S:11}
A.f95.prototype={
$0(){},
$S:0}
A.cyX.prototype={
$0(){$.ajG=!$.ajG
A.hh7()
A.fJ($.ajG?520:420,60,0.25,"tri")},
$S:0}
A.cyY.prototype={
$0(){$.ajF=!$.ajF
A.hh7()
A.fJ($.ajF?520:420,60,0.25,"tri")},
$S:0}
A.fUL.prototype={
$1(d){var w,v,u,t,s,r,q,p,o=null,n=C.aG(d,o,x.w).w,m=this.b,l=this.c,k=l.length,j=x.p,i=C.a([C.d(this.a,o,o,o,o,o,o,D.de,o,o,o),D.av,C.d(""+new C.Y(m,new A.fUK(),C.T(m).k("Y<1>")).gK(0)+" of "+k+" steps done",o,o,o,o,o,o,B.Kr,o,o,o),D.W],j)
for(w=0;w<k;++w){v=D.c.j(0.05)
u=new C.aP(14,14)
t=new C.ay(m[w]?D.ba.j(0.6):D.bz,1,D.r,-1)
s=m[w]
r=s?"\u2705":""+(w+1)+"."
q=s?D.c:D.ay
p=l[w]
s=s?D.aC:D.c
i.push(C.p(o,new C.ca(D.aL,D.e,D.i,D.E,o,D.p,o,0,C.a([new C.y(r,o,new C.F(!0,q,o,o,o,o,14,D.u,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),o,o,o,o,o,o,o,o,o),D.as,new C.by(1,D.bb,new C.y(p,o,new C.F(!0,s,o,o,o,o,13,o,o,o,o,o,1.4,o,o,o,o,o,o,o,o,o,o,o,o,o),o,o,o,o,o,o,o,o,o),o)],j),o),D.f,o,o,new C.o(v,o,new C.bG(t,t,t,t),new C.bh(u,u,u,u),o,o,D.n),o,o,o,D.ct,D.bg,o,o,o))}return C.bn(!0,new C.cU(new C.aZ(0,1/0,0,n.a.b*0.75),C.cl(i,o,o,D.bQ,o,o,D.ah,!0),o),!0,!1,D.af,!0,!0)},
$S:26}
A.fUK.prototype={
$1(d){return d},
$S:99}
A.bY9.prototype={
$0(){return C.a5(this.a,!1).im()},
$S:0}
A.dls.prototype={
$0(){return this.a.LR$=this.b},
$S:0}
A.dlt.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.dlr(w))},
$S:0}
A.dlr.prototype={
$0(){return this.a.LR$=B.nD},
$S:0}
A.dcS.prototype={
$0(){var w=this.a,v=w.gdI(0),u=this.b
v.w=u==="practice"
u=u==="test"
v.z=u
if(u)v.f=v.e=!1
w.pz()},
$S:0}
A.dcQ.prototype={
$0(){var w=this.a
w.y=this.b
w.z=this.c},
$S:0}
A.dcR.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.dcP(w))},
$S:0}
A.dcP.prototype={
$0(){return this.a.y=null},
$S:0}
A.dcA.prototype={
$0(){return this.a.x=0},
$S:0}
A.dcB.prototype={
$0(){return this.a.x=0},
$S:0}
A.dcC.prototype={
$1(d){return d.a===this.a},
$S:z+7}
A.dcD.prototype={
$1(d){return d.e},
$S:z+39}
A.dcz.prototype={
$1(d){var w=this.a.gdI(0).b
return new C.b9(w,C.a6(w).k("b9<2>")).q(0,d)},
$S:3}
A.dcE.prototype={
$0(){var w=this.a
w.gdI(0).r=!1
w.pz()},
$S:0}
A.dcF.prototype={
$1(d){return d.a===this.a},
$S:z+13}
A.dcG.prototype={
$2(d,e){return e===this.a},
$S:381}
A.dcH.prototype={
$0(){var w=this.a
w.w=""
w.pz()},
$S:0}
A.dcI.prototype={
$1(d){return d.a===this.a},
$S:z+7}
A.dcJ.prototype={
$0(){var w=this.a,v=this.b
if(w.w===v)v=""
w.w=v
w.x=v.length===0?0:this.c},
$S:0}
A.dcK.prototype={
$1(d){return d.a===this.a},
$S:z+7}
A.dcL.prototype={
$0(){var w=this.a
w.pz()
w.x=this.b},
$S:0}
A.dcM.prototype={
$0(){var w=this.a
w.pz()
w.x=this.b},
$S:0}
A.dcN.prototype={
$0(){return this.a.x=this.b},
$S:0}
A.dcO.prototype={
$0(){var w=this.a,v=w.gdI(0),u=v.a
v.a=!u
if(u)v.d=!1
w.pz()},
$S:0}
A.dcT.prototype={
$0(){var w,v=this.a,u=v.gdI(0)
u.a=!0
u.d=!1
w=this.b
if(w.e)u.x=!0
u.Q=w.r
v.ax=v.at.gf2()/1000
v.pz()},
$S:0}
A.dcU.prototype={
$0(){var w=this.a,v=w.gdI(0)
v.d=v.a=!0
w.pz()},
$S:0}
A.dd2.prototype={
$1(d){return!d},
$S:99}
A.ddb.prototype={
$0(){var w=this.a.gtn()
return A.aRT(this.b,w.b,w.d,this.c)},
$S:0}
A.ddi.prototype={
$1(d){var w,v,u,t,s=C.a([],x.z),r=this.a,q=r.gdI(0),p=q.Q
if(p.length!==0){p=r.at.gf2()
w=r.ax
v=q.Q
u=v==="fire"?7:4.5
t=p/1000-w<u
p=v}else t=!1
if(!t)q=q.x&&p.length!==0
else q=!0
if(q){q=t?p:"smolder"
A.hxR(new A.f3(s),q,new A.dd_(),0.32,r.at.gf2()/1000)}s=C.C(s,x.c)
q=r.LR$
if(q.length!==0)D.d.v(s,A.hc6(q,r.at.gf2()/1000))
return s},
$S:z+8}
A.dd_.prototype={
$1(d){return new A.q(d.a*0.32,-0.2+d.b*0.32,0.8+d.c*0.32)},
$S:z+6}
A.dd3.prototype={
$0(){return this.a.aBp("learn")},
$S:0}
A.dd4.prototype={
$0(){return this.a.aBp("practice")},
$S:0}
A.ddc.prototype={
$0(){return this.a.aBp("test")},
$S:0}
A.ddd.prototype={
$0(){var w=this.a
return w.m(new A.dd1(w))},
$S:0}
A.dd1.prototype={
$0(){var w=this.a,v=w.gdI(0)
v.e=!v.e
w.pz()},
$S:0}
A.dde.prototype={
$0(){var w=this.a
return w.m(new A.dd0(w))},
$S:0}
A.dd0.prototype={
$0(){var w=this.a,v=w.gdI(0)
v.f=!v.f
w.pz()},
$S:0}
A.ddf.prototype={
$0(){return A.heu(this.a)},
$S:0}
A.ddg.prototype={
$0(){var w=this.a,v=w.gf1()
return v.hb(10,0.2,new A.q(0.6,0,w.gdI(0).c===0?4.2:0.4),-0.95)},
$S:0}
A.ddh.prototype={
$0(){var w=this.a,v=w.gf1()
return v.hb(10,0.2,new A.q(-0.6,0,w.gdI(0).c===0?4.2:0.4),0.95)},
$S:0}
A.ddj.prototype={
$1(d){return!this.a.gdI(0).b.it(0,d.a)},
$S:z+7}
A.dd5.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m=this.a,l=m.gdI(0),k=l.b,j=this.b,i=j.a
if(k.it(0,i)){m.mg("That wire is already fastened. Tap the wire in the 3D view to take it off if you want to move it.")
return}w=m.aEH(i)
m.m(new A.dcZ(m,w,j))
if(m.w.length!==0){m.aYx(i)
if(w){v=C.a([],x.o)
for(u=m.gtn(),t=u.f,s=t.length,r=0;r<s;++r){q=t[r]
p=!1
if(q.c.q(0,i)){o=q.a
if(k.h(0,o)==null){n=m.r
p=(n===$?m.r=A.bDo(u,l,!0):n).b.h(0,o)!=null}}if(p){n=m.r
v.push((n===$?m.r=A.bDo(u,l,!0):n).b.h(0,q.a).c)}}m.aHP(v)
m.hv(j.b+": the glowing place is where it goes.",!0)}else m.hv(j.b+": now tap the screw it belongs on. Tap its name again to light up where it goes.",!0)}},
$S:0}
A.dcZ.prototype={
$0(){var w,v=this,u=v.a
if(v.b)w=v.c.a
else{w=v.c.a
if(u.w===w)w=""}return u.w=w},
$S:0}
A.dd6.prototype={
$0(){var w=this.a,v=w.gtn(),u=v.b,t=A.fUh(v)
w=w.gdI(0)
w=C.a([new A.abq(u,t,A.hbP(v,w),w.y)],x.fJ)
v=B.aI1.h(0,v.a)
if(v==null)v=B.aB8
return A.hCj(this.b,w,v,u)},
$S:0}
A.dd7.prototype={
$0(){var w=this.a
w.m(new A.dcY(w))
A.rd()
w.hv("The wires are folded back and the device is pushed into the box. Now put the cover plate on.",!0)
w.on()},
$S:0}
A.dcY.prototype={
$0(){var w=this.a
w.gdI(0).c=1
w.pz()},
$S:0}
A.dd8.prototype={
$0(){var w=this.a
w.m(new A.dcX(w))
w.on()},
$S:0}
A.dcX.prototype={
$0(){var w=this.a
w.gdI(0).c=0
w.pz()},
$S:0}
A.dd9.prototype={
$0(){var w=this.a
w.m(new A.dcW(w))
A.rd()
w.hv("Cover plate on. Now turn the power on and test.",!0)},
$S:0}
A.dcW.prototype={
$0(){var w=this.a
w.gdI(0).c=2
w.pz()},
$S:0}
A.dda.prototype={
$0(){var w=this.a
w.m(new A.dcV(w))
w.on()},
$S:0}
A.dcV.prototype={
$0(){var w=this.a,v=w.gdI(0)
v.c=0
v.b.aa(0)
v.a=!0
v.x=v.d=!1
v.Q=""
w.Q=0
w.w=""
w.x=0
w.pz()},
$S:0}
A.eZj.prototype={
$0(){var w=this.a
w.x=this.b
w.y=this.c},
$S:0}
A.eZk.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.eZi(w))},
$S:0}
A.eZi.prototype={
$0(){return this.a.x=null},
$S:0}
A.eZb.prototype={
$0(){return this.a.w=0},
$S:0}
A.eZc.prototype={
$0(){var w=this.a,v=w.gdI(0)
v.a.M(0,this.b)
v.c=!1
v.d=""
w.f=A.aQi(v)
w.r=""},
$S:0}
A.eZd.prototype={
$0(){var w=this.a,v=w.gdI(0)
v.b.n(0,this.b,!0)
v.d=""
w.f=A.aQi(v)},
$S:0}
A.eZe.prototype={
$0(){var w=this.a,v=w.gdI(0)
v.c=!1
v.d=""
w.f=A.aQi(v)},
$S:0}
A.eZf.prototype={
$0(){return this.a.w=this.b},
$S:0}
A.eZg.prototype={
$1(d){return this.a.gdI(0).b.h(0,d)!==!0},
$S:3}
A.eZh.prototype={
$0(){var w,v=this.a,u=v.gdI(0)
u.c=!0
w=this.b
u.d=w.length===0?"":D.d.gI(w)
v.f=A.aQi(u)},
$S:0}
A.eZo.prototype={
$1(d){return!d},
$S:99}
A.eZs.prototype={
$0(){return A.aRT(this.a,"Sink drain (P-trap)",B.dkI,this.b)},
$S:0}
A.eZp.prototype={
$1(d){var w=this.a,v=C.C(A.in3(w.gdI(0),d),x.c)
w=w.LR$
if(w.length!==0)D.d.v(v,A.hc6(w,d))
return v},
$S:z+8}
A.eZq.prototype={
$0(){var w,v=this.a,u=this.b,t=v.aEH(u)
v.m(new A.eZn(v,t,u))
if(t){A:{if("tail"===u){w=B.hg1
break A}if("trap"===u){w=B.hlB
break A}w=B.aYh
break A}v.aHP(C.a([w],x.o))
if(u==="tail")u="Tailpiece"
else u=u==="trap"?"P-trap":"Trap arm"
v.hv(u+": the glowing place is where it goes. Tap it.",!0)}},
$S:0}
A.eZn.prototype={
$0(){var w,v=this,u=v.a
if(v.b)w=v.c
else{w=v.c
if(u.r===w)w=""}return u.r=w},
$S:0}
A.eZr.prototype={
$0(){var w=this.a
w.m(new A.eZm(w))
w.on()},
$S:0}
A.eZm.prototype={
$0(){var w,v=this.a,u=v.gdI(0)
u.a.aa(0)
w=u.b
w.aK9(w,new A.eZl())
u.c=!1
v.r=u.d=""
v.w=0
v.f=A.aQi(u)},
$S:0}
A.eZl.prototype={
$2(d,e){return!1},
$S:1824}
A.dfU.prototype={
$0(){var w=this.a
w.x=this.b
w.y=this.c},
$S:0}
A.dfV.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.dfT(w))},
$S:0}
A.dfT.prototype={
$0(){return this.a.x=null},
$S:0}
A.dfM.prototype={
$0(){return this.a.w=0},
$S:0}
A.dfP.prototype={
$1(d){return d.a===this.a},
$S:z+47}
A.dfQ.prototype={
$0(){var w=this.a,v=w.gdI(0)
v.r=v.f=!1
w.f=A.ah_(v)
w.w=this.b},
$S:0}
A.dfR.prototype={
$0(){var w=this.a,v=w.gdI(0),u=v.e
u.bs(u,new A.dfO(this.b))
v.r=v.f=!1
w.f=A.ah_(v)},
$S:0}
A.dfO.prototype={
$2(d,e){return e===this.a},
$S:381}
A.dfS.prototype={
$0(){return this.a.w=this.b},
$S:0}
A.dfW.prototype={
$0(){var w,v=this.a
if(this.b){w=v.gdI(0)
w.f=!w.f}else{w=v.gdI(0)
w.r=!w.r}v.f=A.ah_(v.gdI(0))
v.w=this.c},
$S:0}
A.dfN.prototype={
$0(){var w=this.a,v=w.gdI(0)
v.r=v.f=!(v.f&&v.r)
w.f=A.ah_(v)},
$S:0}
A.dg_.prototype={
$1(d){return!d},
$S:99}
A.dg5.prototype={
$0(){return A.aRT(this.a,"Faucet supply lines",B.dp0,this.b)},
$S:0}
A.dg0.prototype={
$1(d){var w=this.a,v=C.C(A.idN(w.gdI(0),d),x.c)
w=w.LR$
if(w.length!==0)D.d.v(v,A.hc6(w,d))
return v},
$S:z+8}
A.dg1.prototype={
$0(){var w=this.a
return w.m(new A.dfZ(w))},
$S:0}
A.dfZ.prototype={
$0(){var w=this.a,v=w.gdI(0)
v.w=!v.w
w.f=A.ah_(v)},
$S:0}
A.dg3.prototype={
$0(){var w,v,u,t,s,r,q=this.b,p=this.a,o=q.aEH(p.a)
q.m(new A.dfY(p,q,o))
if(o){w=p.a==="hot"
v=x.o
u=C.a([],v)
for(t=0;t<4;++t){s=B.Sh[t]
if(s.c.q(0,p.a)&&q.gdI(0).e.h(0,s.a)==null){r=A.RH(s.a)
u.push(new A.q(r.a+0,r.b+0,r.c+1.2))}}if(u.length!==0)p=u
else p=C.a([A.RH(w?61:62).a7(0,B.haG)],v)
q.aHP(p)
if(u.length!==0)p=(w?"Hot":"Cold")+" hose: the glowing places are where its two ends go."
else p=(w?"Hot":"Cold")+" hose is on. Now turn its valve: tap the handle."
q.hv(p,!0)}},
$S:0}
A.dfY.prototype={
$0(){var w,v,u=this,t=u.b
if(u.c)w=u.a.a
else{w=t.r
v=u.a.a
w=w===v?"":v}return t.r=w},
$S:0}
A.dg2.prototype={
$1(d){return d===this.a.a},
$S:3}
A.dg4.prototype={
$0(){var w=this.a
w.m(new A.dfX(w))
w.on()},
$S:0}
A.dfX.prototype={
$0(){var w=this.a,v=w.gdI(0)
v.e.aa(0)
v.r=v.f=!1
w.r=""
w.w=0
w.f=A.ah_(v)},
$S:0}
A.dn1.prototype={
$0(){var w=this.a
w.x=this.b
w.y=this.c},
$S:0}
A.dn2.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.dn0(w))},
$S:0}
A.dn0.prototype={
$0(){return this.a.x=null},
$S:0}
A.dmW.prototype={
$0(){return this.a.r=0},
$S:0}
A.dmY.prototype={
$0(){var w=this.a,v=w.d
v.d.W(0,72)
w.f=A.ah0(v)
w.r=this.b},
$S:0}
A.dmZ.prototype={
$0(){var w=this.a,v=w.d
v.c=!0
v.b=!1
w.f=A.ah0(v)
w.r=this.b},
$S:0}
A.dn_.prototype={
$0(){return this.a.r=this.b},
$S:0}
A.dmX.prototype={
$1(d){return this.a},
$S:39}
A.dna.prototype={
$0(){return A.aRT(this.a,"Fix the house",B.csI,this.b)},
$S:0}
A.dn5.prototype={
$0(){return this.a.chx(this.b)},
$S:0}
A.dn7.prototype={
$1(d){return d<=this.a.d.a},
$S:34}
A.dn6.prototype={
$1(d){return A.hye(this.a.d,d)},
$S:z+8}
A.dn8.prototype={
$0(){var w=this.a
return w.m(new A.dn4(w))},
$S:0}
A.dn4.prototype={
$0(){var w=this.a
return w.w=w.w==="wrench"?"":"wrench"},
$S:0}
A.dn9.prototype={
$1(d){var w=this.a
return w.m(new A.dn3(w,d))},
$S:6}
A.dn3.prototype={
$0(){var w=this.a,v=w.d,u=D.k.V(this.b)
v.a=u
if(u<5)w.r=0
w.f=A.ah0(v)},
$S:0}
A.fkL.prototype={
$0(){return this.a.e=!1},
$S:0}
A.fkJ.prototype={
$0(){return this.a.e=!0},
$S:0}
A.fkK.prototype={
$0(){var w=this.a
w.d=C.df(B.byG,new A.fkI(w))},
$S:0}
A.fkI.prototype={
$1(d){var w=this.a.a,v=w.e
return v.apR(w.f?1.06:0.94)},
$S:11}
A.fkN.prototype={
$1(d){return this.a.c9p(0)},
$S:70}
A.fkO.prototype={
$1(d){return this.a.b8s()},
$S:112}
A.fkM.prototype={
$1(d){return this.a.b8s()},
$S:134}
A.ccA.prototype={
$0(){return C.a5(this.a,!1).im()},
$S:0}
A.fD4.prototype={
$5(d,e,f,g,h){var w=this.a.a.q(0,h),v=this.b
v.b=d
if(w)v.apy(e,0.66,f,!1,!0,!0,g,14)
else{v.d=0.3
v.Vf(e,0.74,D.b_,!1,!0,0,8)
v.d=1}},
$S:z+100}
A.fD3.prototype={
$6(d,e,f,g,h,i){var w,v
if(!i)return
w=this.a.b.h(0,e)
v=w===!0?f:f.a7(0,h)
w=this.b
w.e=0.5
w.b=d
w.d1(v.aG(0,g.aJ(0,0.6)),v.a7(0,g.aJ(0,0.6)),1.12,B.q3,0.35,8)
w.nw(v.aG(0,g.aJ(0,0.62)),v.aG(0,g.aJ(0,0.5)),1.2,0.5,B.Yc,0.2,8)
w.b=0
w.nw(f.aG(0,g.aJ(0,0.05)),f.a7(0,g.aJ(0,0.08)),0.82,0.55,B.br4,0.1,12)
w.e=0},
$S:z+101}
A.fD2.prototype={
$1(d){return d.b<-0.6},
$S:z+24}
A.fC9.prototype={
$1(d){return this.a.e.h(0,d)===this.b},
$S:34}
A.fER.prototype={
$3(d,e,f){var w,v,u,t,s=A.RH(d),r=C.a([],x.o)
for(w=s.a,v=s.b,u=s.c,t=0;t<=8;++t)r.push(new A.q(w+f*t/8*2,v+(2.4*t/8-9*Math.pow(t/8,2)),u+(1+3.5*t/8)))
A.h9M(this.a,r,this.b,e,0.28,1.2)},
$S:1825}
A.fEQ.prototype={
$1(d){return this.a.e.h(0,d.a)!=null},
$S:z+47}
A.cps.prototype={
$1(d){return d.a===this.a},
$S:z+102}
A.cpt.prototype={
$1(d){return d.a===this.a},
$S:z+3}
A.cpp.prototype={
$1(d){return this.a.vt(0,d).c.toLowerCase()},
$S:14}
A.cpu.prototype={
$1(d){var w
if(!this.a.e.q(0,d.a)){w=d.b
w=w==="valve"||D.a.a0(w,"hose")}else w=!1
return w},
$S:z+3}
A.cpv.prototype={
$1(d){var w=this.a,v=d.a
return w.e.q(0,v)&&w.aHX(v)>0},
$S:z+3}
A.cpw.prototype={
$1(d){return d.a},
$S:z+27}
A.cpx.prototype={
$1(d){return d.a},
$S:z+27}
A.cpq.prototype={
$1(d){return this.a.e.q(0,d.a)},
$S:z+3}
A.cpr.prototype={
$1(d){var w=this.a,v=d.a
return w.aHX(v)<=0||!w.e.q(0,v)},
$S:z+3}
A.fD1.prototype={
$1(d){var w=this.a
w.b=0
w.d1(new A.q(d,8,0),new A.q(d,8,1.6),0.5,B.M6,0.7,10)},
$S:6}
A.fD_.prototype={
$1(d){var w,v,u,t,s,r,q=C.a([],x.o)
for(w=d.length,v=this.a,u=v.a,t=v.b,v=v.c,s=0;s<d.length;d.length===w||(0,C.K)(d),++s){r=d[s]
q.push(new A.q(r.a+u,r.b+t,r.c+v))}return q},
$S:z+105}
A.fCU.prototype={
$3$r(d,e,f){var w=this.a,v=this.b.c
v===$&&C.c()
w.b=9100+D.d.bg(v.c,new A.fCX(d))
w.d=0.32
w.Vf(e,f,D.b_,!1,!0,0,8)
w.d=1},
$2(d,e){return this.$3$r(d,e,1.2)},
$S:z+106}
A.fCX.prototype={
$1(d){return d.a===this.a},
$S:z+3}
A.fCV.prototype={
$3(d,e,f){var w=this.a,v=this.b.c
v===$&&C.c()
w.b=9100+D.d.bg(v.c,new A.fCW(d))
w.d=0.32
w.aE(e,f,D.b_)
w.d=1},
$S:z+107}
A.fCW.prototype={
$1(d){return d.a===this.a},
$S:z+3}
A.fD0.prototype={
$3(d,e,f){var w,v,u,t=this,s=t.a,r=s.c
r===$&&C.c()
w=D.d.cp(r.c,d)
r=d.c
v=s.e
u=d.a
if(v.q(0,u))s="Fitted."
else{s=s.b?"":d.e
s="A spot for the "+r.toLowerCase()+". "+s}t.b.n(0,9100+w,new A.cL(r,s,e,26))
if(t.c&&!v.q(0,u)&&t.d.length!==0)t.e.push(new A.hi(e.a7(0,B.h35),f,D.eP,0))},
$S:z+108}
A.fCQ.prototype={
$0(){return this.a.$3(this.b.a,new A.q(this.c-10,9,2.4),B.abv)},
$S:0}
A.fCR.prototype={
$0(){return this.a.$3(this.b.a,new A.q(this.c-8,9,2.4),B.abv)},
$S:0}
A.fCS.prototype={
$0(){return this.a.$3(this.b.a,new A.q(this.c+8,9,2.4),B.abv)},
$S:0}
A.fCY.prototype={
$4(d,e,f,g){var w,v,u,t,s=this
if(D.d.bg(s.a,new A.fCZ(d))<0||!s.b.e.q(0,d))return
w=s.b.f.h(0,d)
v=(w==null?0:w)>=1
w=s.c
u=9260+g
w.b=u
t=v?e:e.a7(0,f.aJ(0,1.7))
w.d1(t.aG(0,f.aJ(0,0.6)),t.a7(0,f.aJ(0,0.6)),1.12,B.q3,0.35,8)
w.nw(t.aG(0,f.aJ(0,0.62)),t.aG(0,f.aJ(0,0.5)),1.2,0.5,B.Yc,0.2,8)
w=v?"Tight.":"Loose. Tap it with the wrench to tighten it."
s.d.n(0,u,new A.cL("Slip nut",w,e,10))},
$S:z+109}
A.fCZ.prototype={
$1(d){return d.a===this.a},
$S:z+3}
A.fCT.prototype={
$1(d){return d.a===this.a},
$S:z+3}
A.fTV.prototype={
$1(d){return d.a===this.a},
$S:z+3}
A.et2.prototype={
$0(){var w=this.a
w.z=this.b
w.Q=this.c},
$S:0}
A.et3.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.et1(w))},
$S:0}
A.et1.prototype={
$0(){return this.a.z=null},
$S:0}
A.esY.prototype={
$0(){return this.a.y=0},
$S:0}
A.et7.prototype={
$1(d){return d.a===this.a},
$S:z+3}
A.esN.prototype={
$0(){return this.a.y=this.b},
$S:0}
A.esO.prototype={
$0(){var w=this.a
w.aeK()
w.y=this.b},
$S:0}
A.esP.prototype={
$1(d){return this.a.c9q()},
$S:7}
A.esU.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.e
s===$&&C.c()
w=s.c
w===$&&C.c()
v=this.b
v=v>0?"\n\nYou are paid "+v+" stars! \u2b50":""
s=C.d("The "+w.b.toLowerCase()+" is finished and nothing leaks."+v+"\n\nMistakes: "+s.w+"\n\nThe next job is different.",u,u,u,u,u,u,B.Ko,u,u,u)
return C.ei(C.a([C.bM(!1,B.aWe,u,u,!0,u,u,u,new A.esS(d),u,u),C.bI(B.fK1,u,new A.esT(t,d),u)],x.p),u,u,G.m4,s,u,u,u,u,B.fLE,u)},
$S:18}
A.esS.prototype={
$0(){C.a5(this.a,!1).O(null)
return null},
$S:0}
A.esT.prototype={
$0(){C.a5(this.b,!1).O(null)
this.a.aZB()},
$S:0}
A.et0.prototype={
$0(){var w,v,u=this.a
u.d=D.o.F(Date.now(),1e5)
w=u.gD2(0)
v=u.e
v===$&&C.c()
u.e=A.h7a(v.b,w,null)
u.x=""
u.as=!1
u.z=null
u.y=0
u.aeK()},
$S:0}
A.et8.prototype={
$1(d){return d.b===this.a},
$S:z+3}
A.esV.prototype={
$1(d){var w=this.a.e
w===$&&C.c()
return w.x.q(0,d.a)},
$S:z+3}
A.esW.prototype={
$1(d){return d.c.toLowerCase()},
$S:z+27}
A.esX.prototype={
$1(d){var w=this.a.e
w===$&&C.c()
return w.aHX(d.a)>0},
$S:z+3}
A.et4.prototype={
$0(){var w=this.b
w.x=this.a.b
w.aeK()},
$S:0}
A.et5.prototype={
$1(d){return d.a===this.a.a},
$S:z+3}
A.et6.prototype={
$0(){return this.a.y=this.b},
$S:0}
A.esR.prototype={
$0(){var w=this.a
return w.m(new A.esQ(w,this.b,this.c))},
$S:0}
A.esQ.prototype={
$0(){var w=this.a
w.x=this.b?"":this.c
w.aeK()},
$S:0}
A.et9.prototype={
$1(d){var w=this.a.e
w===$&&C.c()
return w.e.q(0,d.a)},
$S:z+3}
A.etd.prototype={
$0(){return this.a.c3h(this.b)},
$S:0}
A.etb.prototype={
$1(d){return d<=5},
$S:34}
A.eta.prototype={
$1(d){var w=this.a,v=w.e
v===$&&C.c()
return A.imW(v,w.w.gf2()/1000)},
$S:z+8}
A.etc.prototype={
$0(){return this.b.czU(this.a.a)},
$S:0}
A.et_.prototype={
$1(d){var w,v,u,t,s,r,q=null,p=this.a,o=p.e
o===$&&C.c()
o=C.a([B.fXE,D.av,C.d("Mistakes "+o.w,q,q,q,q,q,q,B.Kr,q,q,q),D.W],x.p)
w=p.e.c
w===$&&C.c()
w=w.c
v=w.length
u=0
for(;u<v;++u){t=w[u]
s=D.c.j(0.05)
r=new C.aP(12,12)
o.push(C.p(q,new C.y((p.e.e.q(0,t.a)?"\u2705":"\ud83d\udd27")+" "+t.c,q,B.fkq,q,q,q,q,q,q,q,q,q),D.f,q,q,new C.o(s,q,q,new C.bh(r,r,r,r),q,q,D.n),q,q,q,D.eI,D.bT,q,q,q))}o.push(D.am)
o.push(B.fBs)
o.push(D.N)
o.push(C.bI(B.aWg,q,new A.esZ(p,d),q))
return C.bn(!0,C.cl(o,q,q,D.bQ,q,q,D.ah,!0),!0,!1,D.af,!0,!0)},
$S:26}
A.esZ.prototype={
$0(){C.a5(this.b,!1).O(null)
this.a.aZB()},
$S:0}
A.h1f.prototype={
$1(d){return d.a===this.a},
$S:z+48}
A.cuo.prototype={
$1(d){return D.d.q(B.jI,d.b)},
$S:z+10}
A.cuv.prototype={
$1(d){return!this.a.y.q(0,d)},
$S:34}
A.cuw.prototype={
$1(d){var w=this.a
return w.x.aj(0,d)&&w.z.q(0,d)},
$S:34}
A.cux.prototype={
$1(d){var w=$.Ho()[this.b],v=!1
if(w>=d)if(w<=d+48){w=this.a.Q.h(0,d)
w=(w==null?null:w.a)===!0}else w=v
else w=v
return w},
$S:34}
A.cuy.prototype={
$1(d){return this.a.Q.h(0,d).c.q(0,this.b)},
$S:34}
A.cuA.prototype={
$1(d){var w,v=J.e0(6,x.S)
for(w=0;w<6;++w)v[w]=w
return D.d.cJ(v,new A.cuz(this.a,d))},
$S:34}
A.cuz.prototype={
$1(d){return this.a.c.q(0,this.b*10+d)},
$S:34}
A.cun.prototype={
$1(d){var w=this.a.Q.h(0,d)
return(w==null?null:w.a)===!0},
$S:34}
A.cul.prototype={
$1(d){return!A.j6(d).c},
$S:34}
A.cum.prototype={
$1(d){var w=this.a.aqD(A.j6(d).d.a)
return(w==null?null:w.b.q(0,d))===!0},
$S:34}
A.cut.prototype={
$1(d){return d.c},
$S:z+12}
A.cuu.prototype={
$1(d){return d.d},
$S:z+12}
A.cup.prototype={
$1(d){return d.d},
$S:z+12}
A.cuq.prototype={
$1(d){var w=this.a.Q.h(0,d)
return(w==null?null:w.e)===!0},
$S:34}
A.cur.prototype={
$1(d){return d.a===this.a},
$S:z+13}
A.cuB.prototype={
$2(d,e){return e===this.a},
$S:381}
A.cus.prototype={
$1(d){return d.c===this.a},
$S:z+10}
A.exD.prototype={
$0(){var w=this.a
w.ay=this.b
w.ch=this.c},
$S:0}
A.exE.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.exC(w))},
$S:0}
A.exC.prototype={
$0(){return this.a.ay=null},
$S:0}
A.ewJ.prototype={
$0(){return this.a.cx=!0},
$S:0}
A.ewK.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.ewI(w))},
$S:12}
A.ewI.prototype={
$0(){return this.a.cx=!1},
$S:0}
A.ewL.prototype={
$0(){return this.a.cx=!0},
$S:0}
A.ewM.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.ewH(w))},
$S:12}
A.ewH.prototype={
$0(){return this.a.cx=!1},
$S:0}
A.ewN.prototype={
$1(d){return this.a.bRA()},
$S:7}
A.ewO.prototype={
$1(d){return this.a.c9v()},
$S:7}
A.ewY.prototype={
$0(){return this.a.as=-1},
$S:0}
A.ex_.prototype={
$0(){return this.a.as=-1},
$S:0}
A.ewP.prototype={
$1(d){return d.b==="tv"},
$S:753}
A.ewQ.prototype={
$0(){return this.a.as=-1},
$S:0}
A.ewR.prototype={
$0(){return this.a.as=-1},
$S:0}
A.exg.prototype={
$0(){var w=this.a
w.as=this.b
w.Q=-1
w.z=w.ax=""
w.CW=!1},
$S:0}
A.ewZ.prototype={
$0(){var w=this.a
w.as=-1
w.ax=""},
$S:0}
A.exz.prototype={
$0(){return this.a.at=0},
$S:0}
A.exA.prototype={
$0(){return this.a.z=""},
$S:0}
A.exB.prototype={
$0(){return this.a.at=this.b},
$S:0}
A.exw.prototype={
$0(){return this.a.z=""},
$S:0}
A.exx.prototype={
$0(){var w=this.a,v=this.b
return w.Q=w.Q===v?-1:v},
$S:0}
A.exy.prototype={
$0(){return this.a.at=2000+this.b},
$S:0}
A.exv.prototype={
$0(){return this.a.z=""},
$S:0}
A.exn.prototype={
$1(d){return d.a===this.a},
$S:z+13}
A.exo.prototype={
$0(){return this.a.ax=""},
$S:0}
A.exp.prototype={
$1(d){return d.a===this.a},
$S:z+7}
A.exq.prototype={
$0(){var w=this,v=w.a,u=w.b
if(v.ax===u)u=""
v.ax=u
v.at=u.length===0?0:5000+w.c*100+w.d},
$S:0}
A.exr.prototype={
$1(d){return d.a===this.a},
$S:z+7}
A.exs.prototype={
$0(){return this.a.at=5000+this.b*100+this.c},
$S:0}
A.ext.prototype={
$0(){var w=this.a
w.ax=""
w.at=0},
$S:0}
A.exu.prototype={
$0(){return this.a.at=5000+this.b*100+this.c},
$S:0}
A.exH.prototype={
$0(){var w=this.b,v=D.d.q(B.zw,w.z),u=this.a.a
if(v)w.b3d(u)
else w.azJ(u)},
$S:0}
A.ewX.prototype={
$1(d){var w=null
return C.ei(C.a([C.bM(!1,B.fNG,w,w,!0,w,w,w,new A.ewV(d),w,w),C.bI(D.EC,w,new A.ewW(this.a,d),w)],x.p),w,w,G.m4,B.fCE,w,w,w,w,B.fKr,w)},
$S:18}
A.ewV.prototype={
$0(){C.a5(this.a,!1).O(null)
return null},
$S:0}
A.ewW.prototype={
$0(){C.a5(this.b,!1).O(null)
this.a.ay9(!0)},
$S:0}
A.ewU.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.d
s===$&&C.c()
w=s.c
w===$&&C.c()
v=this.b
v=v>0?"\n\nYou are paid "+v+" stars! \u2b50":""
s=C.d("The "+w.toLowerCase()+" is built, wired, painted and tested."+v+"\n\nMistakes: "+s.f+"\nShocks: "+s.r+"\nLives left: "+s.e+"\n\nEvery job is a little different. Ready for another one?",u,u,u,u,u,u,B.Ko,u,u,u)
return C.ei(C.a([C.bM(!1,B.fYy,u,u,!0,u,u,u,new A.ewS(d),u,u),C.bI(B.fKk,u,new A.ewT(t,d),u)],x.p),u,u,G.m4,s,u,u,u,u,B.fSr,u)},
$S:18}
A.ewS.prototype={
$0(){C.a5(this.a,!1).O(null)
return null},
$S:0}
A.ewT.prototype={
$0(){C.a5(this.b,!1).O(null)
this.a.b_Q()},
$S:0}
A.ex0.prototype={
$0(){if(!this.b)this.a.e=D.o.F(Date.now(),1e5)
var w=this.a
w.d=A.cuk(null,null,!0,w.gD2(0),!0)
w.y=0
w.z=""
w.as=-1
w.ax=""
w.at=0
w.cy=!1
w.x.aa(0)
w.ay=null
w.r=A.x3(w.d,new A.rV(w.z,w.as,!1))},
$S:0}
A.exI.prototype={
$1(d){var w=this.a
if(w.c)w=d==="light"||d==="fan"
else w=w.e==="switch"?D.d.q(B.jI,d):D.d.q(B.lk,d)
return w},
$S:3}
A.exK.prototype={
$0(){var w=this.a,v=w.d
v===$&&C.c()
return w.ig(v.aJi(w.as))},
$S:0}
A.exL.prototype={
$0(){var w=this.a,v=w.d
v===$&&C.c()
return w.ig(v.aoH(w.as))},
$S:0}
A.exM.prototype={
$0(){var w=this.a,v=w.d
v===$&&C.c()
return w.ig(v.aFv(w.as))},
$S:0}
A.exN.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.ap0(v.as)
v.ig(w)
if(w.a)v.Q2()},
$S:0}
A.exO.prototype={
$0(){var w=this.a,v=w.d
v===$&&C.c()
return w.ig(v.aoH(w.as))},
$S:0}
A.exP.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.ap0(v.as)
v.ig(w)
if(w.a){v.Q2()
v.oo("The "+A.a2z(this.b.a)+" is out and the box is empty. Pick the kind you want from the tray, then tap the box.",!0)}},
$S:0}
A.exQ.prototype={
$1(d){return!this.a.b.b.it(0,d.a)},
$S:z+7}
A.exR.prototype={
$0(){var w=this.a
return w.m(new A.exJ(w,this.b))},
$S:0}
A.exJ.prototype={
$0(){var w=this.a,v=this.b,u=v.a
if(w.ax===u)u=""
w.ax=u
if(u.length!==0)w.oo(v.b+": now tap the screw it belongs on.",!0)},
$S:0}
A.exF.prototype={
$1(d){return!this.a.b.b.aj(0,d.a)},
$S:z+13}
A.exG.prototype={
$0(){var w=this.a
return w.azG(w.as,this.b.a)},
$S:0}
A.exe.prototype={
$1(d){return new C.N(d,new A.exf(),d.$ti.k("N<ak.E,m>")).aI(0,", ")},
$S:1826}
A.exf.prototype={
$1(d){return A.j6(d).b},
$S:73}
A.ex1.prototype={
$1(d){var w=this.a.d
w===$&&C.c()
return!w.x.aj(0,d.a)},
$S:z+10}
A.ex2.prototype={
$1(d){var w=this.a.d
w===$&&C.c()
return!w.z.q(0,d.a)},
$S:z+10}
A.ex3.prototype={
$1(d){var w=this.a.d
w===$&&C.c()
return!w.y.q(0,d)},
$S:34}
A.ex6.prototype={
$1(d){return!d.a},
$S:z+12}
A.ex7.prototype={
$1(d){return d.b<3},
$S:z+12}
A.ex8.prototype={
$1(d){return!d.c},
$S:z+12}
A.ex9.prototype={
$1(d){return!d.d},
$S:z+12}
A.exa.prototype={
$1(d){return!d.c},
$S:z+12}
A.exb.prototype={
$1(d){var w=this.a.d
w===$&&C.c()
w=w.at.h(0,d.a)
w=w==null?null:w.a
return w!==d.b},
$S:z+10}
A.exc.prototype={
$1(d){return d.a},
$S:z+114}
A.exd.prototype={
$1(d){var w=this.a.d
w===$&&C.c()
w=w.at.h(0,d.a)
w=w==null?null:w.b.c
return(w==null?0:w)<2},
$S:z+10}
A.ex4.prototype={
$1(d){var w
if(D.d.q(B.lk,d.b)){w=this.a.d
w===$&&C.c()
w=w.at.h(0,d.a)
w=(w==null?null:w.c)!==!0}else w=!1
return w},
$S:z+10}
A.ex5.prototype={
$1(d){return d.b==="fan"},
$S:z+10}
A.eyg.prototype={
$0(){return this.a.ciz(this.b)},
$S:0}
A.eyh.prototype={
$0(){var w=this.a
if(w.as>=0)w.Q2()
else{w.m(new A.ey_(w))
w.b5u()}},
$S:0}
A.ey_.prototype={
$0(){return this.a.at=0},
$S:0}
A.eyf.prototype={
$1(d){var w,v,u,t=this.a,s=t.d
s===$&&C.c()
w=t.w.gf2()
v=t.Q
u=t.y===2&&t.as<0&&t.d.gtb()
return A.inc(s,w/1000,t.x,u,v)},
$S:z+8}
A.ey2.prototype={
$0(){var w=this.a,v=w.d
v===$&&C.c()
return w.ig(v.aK_())},
$S:0}
A.ey3.prototype={
$0(){var w=this.a
return w.m(new A.ey1(w,this.b))},
$S:0}
A.ey1.prototype={
$0(){var w,v=this.b.b
v.f=!v.f
v=this.a
w=v.d
w===$&&C.c()
v.r=A.x3(w,new A.rV(v.z,v.as,!1))},
$S:0}
A.ey4.prototype={
$0(){var w=this.a
return w.m(new A.ey0(w,this.b))},
$S:0}
A.ey0.prototype={
$0(){var w,v=this.b.b
v.e=!v.e
v=this.a
w=v.d
w===$&&C.c()
v.r=A.x3(w,new A.rV(v.z,v.as,!1))},
$S:0}
A.eyi.prototype={
$0(){var w=this.a
return w.m(new A.exZ(w,this.b))},
$S:0}
A.exZ.prototype={
$0(){var w,v=this.a
v.y=this.b
v.Q=-1
v.z=""
w=v.d
w===$&&C.c()
v.r=A.x3(w,new A.rV("",v.as,!1))},
$S:0}
A.eyj.prototype={
$0(){var w=this.a
return w.m(new A.exY(w))},
$S:0}
A.exY.prototype={
$0(){var w,v=this.a
v.y=(v.y+1)%3
v.Q=-1
v.z=""
w=v.d
w===$&&C.c()
v.r=A.x3(w,new A.rV("",v.as,!1))},
$S:0}
A.eyk.prototype={
$0(){var w=this.a
return w.m(new A.exX(w))},
$S:0}
A.exX.prototype={
$0(){var w=this.a,v=w.d
v===$&&C.c()
v.amy()
w.y=2
w.z=""
w.r=A.x3(w.d,new A.rV("",w.as,!1))
w.oo("The boxes, the cable and the walls are done. Now the wiring: pick an Outlet or a Switch from the tray, then tap its box on the wall.",!0)},
$S:0}
A.eyl.prototype={
$0(){var w=this.a
return w.m(new A.exW(w))},
$S:0}
A.exW.prototype={
$0(){return this.a.Q=-1},
$S:0}
A.eym.prototype={
$0(){var w=this.a,v=w.Q
if(v>=0&&w.y===2){w.m(new A.exT(w,this.b))
w.azJ(v)
if(w.c!=null&&w.as<0)w.m(new A.exU(w))
return}w.m(new A.exV(w,this.b))},
$S:0}
A.exT.prototype={
$0(){return this.a.z=this.b.a},
$S:0}
A.exU.prototype={
$0(){return this.a.z=""},
$S:0}
A.exV.prototype={
$0(){var w,v=this.a,u=this.b.a,t=v.z===u?"":u
v.z=t
v.at=0
w=v.d
w===$&&C.c()
v.r=A.x3(w,new A.rV(t,v.as,!1))
if(v.z.length!==0)v.ctv(u)},
$S:0}
A.eyn.prototype={
$0(){var w=this.a,v=w.d
v===$&&C.c()
return w.ig(v.cU1())},
$S:0}
A.ey5.prototype={
$1(d){return!this.a.b.b.it(0,d.a)},
$S:z+7}
A.ey6.prototype={
$0(){var w=this.a
return w.m(new A.exS(w,this.b,this.c))},
$S:0}
A.exS.prototype={
$0(){var w,v=this,u=v.c,t=u.a
if(v.b.b.b.it(0,t)){v.a.aeL("That wire is already fastened. Tap the wire in the 3D view to take it off.")
return}w=v.a
if(w.ax===t)t=""
w.ax=t
if(t.length!==0)w.oo(u.b+": now tap the screw it belongs on, or press the matching button below.",!0)},
$S:0}
A.ey7.prototype={
$1(d){return!this.a.b.b.aj(0,d.a)},
$S:z+13}
A.ey8.prototype={
$0(){var w=this.a
return w.azG(w.as,this.b.a)},
$S:0}
A.ey9.prototype={
$0(){var w=this.a,v=w.d
v===$&&C.c()
return w.ig(v.aJi(w.as))},
$S:0}
A.eya.prototype={
$0(){var w=this.a,v=w.d
v===$&&C.c()
return w.ig(v.aoH(w.as))},
$S:0}
A.eyb.prototype={
$0(){var w=this.a,v=w.d
v===$&&C.c()
return w.ig(v.aFv(w.as))},
$S:0}
A.eyc.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.ap0(v.as)
v.ig(w)
if(w.a)v.Q2()},
$S:0}
A.eyd.prototype={
$0(){var w=this.a,v=w.d
v===$&&C.c()
return w.ig(v.aoH(w.as))},
$S:0}
A.eye.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.ap0(v.as)
v.ig(w)
if(w.a){v.Q2()
v.oo("The "+A.a2z(this.b.a)+" is out and the box is empty. Pick the kind you want from the tray (a different outlet or switch is fine), then tap the box.",!0)}},
$S:0}
A.exm.prototype={
$1(d){return new C.e2(new A.exl(this.a,this.b),null)},
$S:20}
A.exl.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=C.aG(d,k,x.w).w,i=this.a,h=i.d
h===$&&C.c()
w=h.c
w===$&&C.c()
v=x.p
h=C.a([C.d("Job: "+w,k,k,k,k,k,k,D.de,k,k,k),D.av,C.d("Mistakes "+h.f+" \xb7 Shocks "+h.r+" \xb7 Lives "+h.e,k,k,k,k,k,k,B.Kr,k,k,k),D.W,B.fOg,D.am],v)
w=i.d.d
w===$&&C.c()
u=w.length
t=0
for(;t<w.length;w.length===u||(0,C.K)(w),++t){s=w[t]
r=D.c.j(0.05)
q=new C.aP(12,12)
p=new C.ay(D.bz,1,D.r,-1)
o=s.a
n=i.d.at.h(0,o)
n=(n==null?k:n.b.c)===2?"\u2705":"\u2b1c"
m=s.b
if(m==="gfci")m="A GFCI outlet"
else if(m==="outlet")m="An outlet"
else if(m==="switch")m="A light switch"
else if(m==="light")m="A ceiling light"
else m=m==="fan"?"A ceiling fan":"A "+A.a2z(m).toLowerCase()
o=A.j6(o)
l=s.c
l=l!=null?", turned on by "+A.j6(l).b:""
h.push(C.p(k,new C.y(n+" "+m+" at "+o.b+l,k,D.pH,k,k,k,k,k,k,k,k,k),D.f,k,k,new C.o(r,k,new C.bG(p,p,p,p),new C.bh(q,q,q,q),k,k,D.n),k,k,k,D.eI,D.bT,k,k,k))}h.push(D.W)
h.push(D.am)
w=this.b
h.push(C.B(C.a([C.E(C.dT(B.fLI,new A.exh(w),k),1),D.ad,C.E(C.bI(B.fJC,k,new A.exi(i,d,w),k),1)],v),D.m,k,D.e,D.i,0,k,k))
h.push(D.am)
h.push(D.am)
h.push(C.B(C.a([C.E(C.dT(B.fDN,new A.exj(i,d),k),1),D.ad,C.E(C.bI(B.aWg,k,new A.exk(i,d),k),1)],v),D.m,k,D.e,D.i,0,k,k))
return C.bn(!0,new C.cU(new C.aZ(0,1/0,0,j.a.b*0.8),C.cl(h,k,k,D.bQ,k,k,D.ah,!0),k),!0,!1,D.af,!0,!0)},
$S:87}
A.exh.prototype={
$0(){return A.heu(this.a)},
$S:0}
A.exi.prototype={
$0(){var w=0,v=C.j(x.H),u=this,t,s,r
var $async$$0=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:C.a5(u.b,!1).O(null)
t=u.a
s=t.d
s===$&&C.c()
r=s.c
r===$&&C.c()
w=2
return C.b(A.hCj(u.c,s.d_l(),t.d.d_m(),r),$async$$0)
case 2:return C.h(null,v)}})
return C.i($async$$0,v)},
$S:1}
A.exj.prototype={
$0(){C.a5(this.b,!1).O(null)
this.a.ay9(!0)},
$S:0}
A.exk.prototype={
$0(){C.a5(this.b,!1).O(null)
this.a.b_Q()},
$S:0}
A.fvc.prototype={
$1(d){var w=this.a,v=d.a
return w>v[0]&&w<v[1]},
$S:761}
A.fvd.prototype={
$1(d){var w=this.a,v=d.a
return w>v[2]&&w<v[3]},
$S:761}
A.fD5.prototype={
$1(d){return 5000+this.a.a*100+d},
$S:72}
A.fD6.prototype={
$1(d){return 3000+this.a.a},
$S:72}
A.fD7.prototype={
$1(d){return 2000+this.a.a},
$S:72}
A.fDa.prototype={
$5$col$round(d,e,f,g,h){var w=this.a
w.f=3
w.b=d
w.d=0.5
w.e=0.9
if(h)w.dm(e.aG(0,B.e8),e.a7(0,B.e8),f.a/2,g,14)
else w.aE(e,f,g)
w.e=0
w.d=1
w.f=2},
$3(d,e,f){return this.$5$col$round(d,e,f,D.b_,!1)},
$4$round(d,e,f,g){return this.$5$col$round(d,e,f,D.b_,g)},
$4$col(d,e,f,g){return this.$5$col$round(d,e,f,g,!1)},
$S:z+115}
A.fD8.prototype={
$3(d,e,f){return K.Sd(d,e,0,f+this.a.a*5)},
$S:24}
A.fD9.prototype={
$0(){var w,v=this.a
if(v.c)w="A place in the ceiling for a "+(v.e==="fan"?"fan (needs a fan-rated box)":"light")+"."
else w="A place on the wall at "+(v.e==="switch"?"switch height, about 48 inches from the floor":"outlet height, about 16 inches from the floor")+"."
return new A.cL(v.b,w,A.aip(v,B.abl),26)},
$S:z+116}
A.fUd.prototype={
$1(d){return d.e==="fan"},
$S:z+48}
A.fUe.prototype={
$1(d){return d.b==="light"},
$S:z+10}
A.fUf.prototype={
$1(d){return A.aip(this.a,d)},
$S:z+6}
A.cxP.prototype={
$1(d){return d.a===this.a&&!d.c},
$S:z+14}
A.cxL.prototype={
$1(d){return d.a===B.a12},
$S:z+14}
A.cxN.prototype={
$1(d){return d.c},
$S:z+14}
A.cxO.prototype={
$1(d){return d.c},
$S:z+14}
A.cxM.prototype={
$1(d){return B.wP.h(0,d.a).e===this.a&&!d.c},
$S:z+14}
A.ezK.prototype={
$0(){var w=this.a
w.z=this.b
w.Q=this.c},
$S:0}
A.ezL.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.ezJ(w))},
$S:0}
A.ezJ.prototype={
$0(){return this.a.z=null},
$S:0}
A.ezz.prototype={
$0(){return this.a.y=0},
$S:0}
A.ezE.prototype={
$0(){return this.a.as=!0},
$S:0}
A.ezF.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.ezD(w))},
$S:12}
A.ezD.prototype={
$0(){return this.a.as=!1},
$S:0}
A.ezG.prototype={
$0(){var w=this.a,v=w.d
v===$&&C.c()
w.r=A.ah0(v.d)
w.y=this.b},
$S:0}
A.ezH.prototype={
$1(d){return this.a.ciH()},
$S:7}
A.ezI.prototype={
$1(d){return this.a.c9D()},
$S:7}
A.ezC.prototype={
$1(d){var w=null
return C.ei(C.a([C.bI(B.fLz,w,new A.ezB(this.a,d),w)],x.p),w,w,G.m4,B.fKH,w,w,w,w,B.fR5,w)},
$S:18}
A.ezB.prototype={
$0(){C.a5(this.b,!1).O(null)
this.a.axy()},
$S:0}
A.ezy.prototype={
$1(d){var w=null,v=this.a,u=v.d
u===$&&C.c()
u=C.d("Every problem on the customer's list is fixed.\n\nYou are paid "+this.b+" stars! \u2b50\n\nMistakes: "+u.f+"\nShocks: "+u.r+"\nLives left: "+u.e+"\n\nThe next call will have different problems.",w,w,w,w,w,w,B.Ko,w,w,w)
return C.ei(C.a([C.bM(!1,B.aWe,w,w,!0,w,w,w,new A.ezw(d),w,w),C.bI(B.fMT,w,new A.ezx(v,d),w)],x.p),w,w,G.m4,u,w,w,w,w,B.fTA,w)},
$S:18}
A.ezw.prototype={
$0(){C.a5(this.a,!1).O(null)
return null},
$S:0}
A.ezx.prototype={
$0(){C.a5(this.b,!1).O(null)
this.a.axy()},
$S:0}
A.ezA.prototype={
$0(){var w,v,u=this.a
u.e=D.o.F(Date.now(),1e5)
w=u.gD2(0)
v=u.d
v===$&&C.c()
w=A.hpu(v.b,w)
u.d=w
u.r=A.ah0(w.d)
u.at=!1
u.z=null
u.y=0},
$S:0}
A.ezX.prototype={
$0(){return this.a.cDx(this.b)},
$S:0}
A.ezT.prototype={
$1(d){return d<=5},
$S:34}
A.ezS.prototype={
$1(d){var w=this.a,v=w.d
v===$&&C.c()
return A.hye(v.d,w.w.gf2()/1000)},
$S:z+8}
A.ezU.prototype={
$1(d){return!d.c},
$S:z+14}
A.ezV.prototype={
$1(d){return B.wP.h(0,d.a).a},
$S:z+118}
A.ezW.prototype={
$0(){var w=this.a
return w.m(new A.ezR(w,this.b))},
$S:0}
A.ezR.prototype={
$0(){return this.a.x=this.b},
$S:0}
A.ezQ.prototype={
$1(d){return new C.e2(new A.ezP(this.a),null)},
$S:20}
A.ezP.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=this.a,j=k.d
j===$&&C.c()
w=x.p
j=C.a([B.fJ5,D.av,C.d("Mistakes "+j.f+" \xb7 Shocks "+j.r+" \xb7 Lives "+j.e,l,l,l,l,l,l,B.Kr,l,l,l),D.W],w)
v=k.d.c
v===$&&C.c()
u=v.length
t=0
for(;t<v.length;v.length===u||(0,C.K)(v),++t){s=v[t]
r=D.c.j(0.05)
q=new C.aP(14,14)
p=new C.ay(s.c?D.ba.j(0.6):D.bz,1,D.r,-1)
o=s.c?"\u2705":"\ud83d\udd27"
n=B.wP.h(0,s.a).a
m=s.c?D.aC:D.c
j.push(C.p(l,new C.y(o+" "+n,l,new C.F(!0,m,l,l,l,l,13.5,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l),l,l,l,l,l,l,l,l,l),D.f,l,l,new C.o(r,l,new C.bG(p,p,p,p),new C.bh(q,q,q,q),l,l,D.n),l,l,l,D.ct,D.bg,l,l,l))}j.push(D.am)
j.push(B.fOr)
j.push(D.N)
j.push(C.B(C.a([B.bGH,C.b8E(l,l,l,l,!1,D.y,l,l,l,l,l,l,new A.ezN(k,e),l,l,l,l,l,l,l,l,k.d.b)],w),D.m,l,D.e,D.i,0,l,l))
j.push(C.bI(B.fRy,l,new A.ezO(k,d),l))
return C.bn(!0,C.cl(j,l,l,D.bQ,l,l,D.ah,!0),!0,!1,D.af,!0,!0)},
$S:87}
A.ezN.prototype={
$1(d){var w=this.a.d
w===$&&C.c()
w.b=d
this.b.$1(new A.ezM())},
$S:9}
A.ezM.prototype={
$0(){},
$S:0}
A.ezO.prototype={
$0(){C.a5(this.b,!1).O(null)
this.a.axy()},
$S:0}
A.fnR.prototype={
$1(d){return d.d===this.a},
$S:z+19}
A.bW1.prototype={
$1(d){var w,v,u,t,s=this.a,r=s.p1
if(r!=="back"){s=r==="left"?-1.5707963267948966:1.5707963267948966
return new C.z(new C.z(0,d),s)}r=s.k1
w=A.heE(s,A.aQe(r==null?"tv100":r),0)
s=w.c
r=w.a/2
v=s-r-18
u=this.b
t=-u/2+14
if(v<t)v=s+r+18
v=D.k.E(v,t,u/2-14)
return new C.z(new C.z(v,d),Math.atan2(s-v,-d))},
$S:1828}
A.bW2.prototype={
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
$S:1829}
A.d9i.prototype={
$0(){var w=this.a
w.d=this.b
w.f.aa(0)
w.y=w.x=w.w=w.r=null},
$S:0}
A.d9j.prototype={
$0(){var w=this.a,v=this.b,u=w.w===v?null:v
w.w=u
if(u!=null){w.y='Now tap the place on the diagram where "'+v+'" goes.'
w.z=!0}},
$S:0}
A.d9k.prototype={
$0(){var w=this.a
w.y="Pick a wire on the left first, then tap the place it goes."
w.z=!1},
$S:0}
A.d9l.prototype={
$0(){var w,v,u,t,s=this.a,r=this.b,q=this.c
s.f.n(0,r,q)
s.x=r
s.w=s.r=null
if(!s.e){w=B.qG[s.d]
v=w.e.h(0,r)
v.toString
u=x.N
t=A.hxO(w.b,C.H([r,v],u,u),C.H([r,q],u,u))
u=t.a===B.qV
s.z=u
if(u)r="Right: this follows the diagram."
else{r=t.b
r=D.d.gI(r).c+" "+D.d.gI(r).e}s.y=r}else s.y=null},
$S:0}
A.d9e.prototype={
$0(){return this.a.cCC(this.b)},
$S:0}
A.d9h.prototype={
$0(){return this.a.cCN(this.b)},
$S:0}
A.d9g.prototype={
$0(){var w=this.a
return w.m(new A.d9f(w,this.b))},
$S:0}
A.d9f.prototype={
$0(){var w,v,u,t,s
for(w=this.b,v=w.length,u=this.a,t=u.f,s=0;s<w.length;w.length===v||(0,C.K)(w),++s)t.W(0,w[s])
u.r=null},
$S:0}
A.d9q.prototype={
$0(){return A.heu(this.a)},
$S:0}
A.d9r.prototype={
$0(){return this.a.cae(this.b)},
$S:0}
A.d9s.prototype={
$0(){var w=this.a
return w.m(new A.d9p(w))},
$S:0}
A.d9p.prototype={
$0(){var w=this.a
w.e=!1
w.y=w.r=null},
$S:0}
A.d9t.prototype={
$0(){var w=this.a
return w.m(new A.d9o(w))},
$S:0}
A.d9o.prototype={
$0(){var w=this.a
w.e=!0
w.y=w.r=null},
$S:0}
A.d9u.prototype={
$2(d,e){var w,v,u,t=null,s=(e.b-56)/2,r=this.a,q=C.bT(0,C.cb(r.gab4(),new A.d9n(r,s),t),0,0,0),p=x.p,o=C.a([],p)
for(w=B.qG[r.d].e,w=J.aX(w.gev(w));w.C();)o.push(r.c2L(w.gS(w)))
o=C.ap(t,C.x(o,D.m,t,D.e,D.i,0,D.p),t,t,0,t,0,s)
w=C.a([],p)
for(v=B.qG[r.d].d,u=0;u<5;++u)w.push(r.ciN(v[u]))
return new C.a4(t,this.b,new C.an(D.a_,t,D.ab,D.t,C.a([q,o,C.ap(t,C.x(w,D.m,t,D.e,D.i,0,D.p),t,t,t,0,0,s)],p),t),t)},
$S:155}
A.d9n.prototype={
$2(d,e){var w,v,u,t=null,s=this.a,r=B.qG[s.d].e
r=J.pS(r.gev(r))
w=B.qG[s.d]
v=x.N
v=C.dO(s.f,v,v)
u=s.x
s=s.gab4().x
s===$&&C.c()
return C.b4(t,t,t,new A.bxG(r,w.d,v,this.b,u,s,t),D.ax)},
$S:63}
A.d9v.prototype={
$0(){var w=this.a
return w.m(new A.d9m(w))},
$S:0}
A.d9m.prototype={
$0(){var w=this.a,v=B.qG[w.d]
return w.r=A.hxO(v.b,v.e,w.f)},
$S:0}
A.fjs.prototype={
$1(d){return d*66+29},
$S:187}
A.fET.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=this
for(w=k.a*1.8,v=k.b,u=k.c,t=k.d,s=0.3*t,t=0.05*t,r=0;r<d;++r){q=w+r*0.173
p=D.k.F(q,1)
o=Math.sin((r*3.1+D.k.bf(q))*12.9898)*43758.5453
n=(o-Math.floor(o))*3.141592653589793*2
o=Math.sin((r+5)*12.9898)*43758.5453
m=e*(0.6+(o-Math.floor(o))*0.8)
q=u.$1(new A.q(Math.cos(n)*p*m,Math.sin(n)*p*m-p*p*6,3+p*3))
l=C.ar(E.Zz,F.N_,p)
l.toString
v.fu(q,s*(1-p*0.6)+t,l,3,5,0)}},
$S:1830}
A.fES.prototype={
$3(d,e,f){var w,v,u,t,s,r,q,p,o,n=this,m=n.a
m.d=0.34
for(w=n.b,v=w*0.45,u=n.c,t=n.d,s=1-e,r=0;r<d;++r){q=D.k.F(v+r/d,1)
p=u.$1(new A.q(Math.sin(r*1.7+w)*1.4+q*1.5,q*f-1,3.5+q*4))
o=C.ar(G.Bt,B.brm,s)
o.toString
o=C.ar(o,B.bdL,q)
o.toString
m.fu(p,(1.1+q*3.4)*t,o,3,6,0)}m.d=1},
$S:1831}
A.fEo.prototype={
$5(d,e,f,g,h){return this.a.push(new A.wz(d,e,f,g,h))},
$S:z+119}
A.fEt.prototype={
$2(d,e){var w=this.a
return new C.Y(w,new A.fEu(d,e),C.T(w).k("Y<1>")).gK(0)},
$S:z+120}
A.fEu.prototype={
$1(d){return d.a.c===this.a&&d.b.c===this.b},
$S:z+17}
A.fEp.prototype={
$1(d){return d.b.c===B.aTF},
$S:z+17}
A.fEq.prototype={
$1(d){return d.a.c===B.aZw},
$S:z+17}
A.fEr.prototype={
$1(d){return!1},
$S:z+17}
A.fEs.prototype={
$1(d){return!1},
$S:z+17}
A.fno.prototype={
$1(d){return D.d.b_(this.a,new A.fnp(d))},
$S:3}
A.fnp.prototype={
$1(d){return d.a===this.a},
$S:z+41}
A.cAN.prototype={
$1(d){return A.hXu(d)},
$S:z+17}
A.cAO.prototype={
$2(d,e){return d+e},
$S:65}
A.cAP.prototype={
$1(d){return d.b.a===B.qV},
$S:z+50}
A.fEv.prototype={
$2(d,e){var w=this.a.h(0,d)
if(w==null)this.b.push(new A.wz("LEAD_MISSING",B.JS,"The "+d+" lead is not connected.","Every lead on the diagram needs its connection.","Connect the "+d+" lead to "+e+"."))
else if(w!==e)this.b.push(new A.wz("LEAD_WRONG",B.aRf,"The "+d+" lead is connected to "+w+", but the diagram says "+e+".","Connections follow the approved wiring diagram.","Move the "+d+" lead to "+e+"."))},
$S:115}
A.h1c.prototype={
$1(d){var w,v,u,t,s,r=null,q=C.aG(d,r,x.w).w,p=x.p,o=C.a([B.fzZ,D.am,B.fTE,D.W],p)
for(w=0;w<5;++w){v=B.dei[w]
u=D.c.j(0.05)
t=new C.aP(12,12)
s=new C.ay(D.bz,1,D.r,-1)
o.push(C.p(r,C.x(C.a([new C.y(v.a+": "+v.b,r,D.aUY,r,r,r,r,r,r,r,r,r),D.cS,new C.y("Goes to: "+v.c+"\nCircuit: "+v.d,r,G.EA,r,r,r,r,r,r,r,r,r),D.cS,new C.y(v.e,r,D.aVF,r,r,r,r,r,r,r,r,r),D.cS,new C.y("Exception: "+v.f,r,B.fsf,r,r,r,r,r,r,r,r,r)],p),D.E,r,D.e,D.i,0,D.p),D.f,r,r,new C.o(u,r,new C.bG(s,s,s,s),new C.bh(t,t,t,t),r,r,D.n),r,r,r,D.ct,D.yq,r,r,r))}o.push(D.am)
o.push(B.fBi)
return C.bn(!0,new C.cU(new C.aZ(0,1/0,0,q.a.b*0.85),C.cl(o,r,r,D.bQ,r,r,D.ah,!0),r),!0,!1,D.af,!0,!0)},
$S:26}
A.h1a.prototype={
$1(d){return new A.a1v(this.a,this.b,null)},
$S:z+123}
A.fd4.prototype={
$1(d){var w=this.a,v=w.a.c,u=this.b
d.toString
v.c.n(0,u,d)
w.m(new A.fd3(w,u,d))},
$S:163}
A.fd3.prototype={
$0(){var w=this.c
this.a.d.n(0,this.b,w)
return w},
$S:0}
A.fd5.prototype={
$0(){var w=this.a
w.m(new A.fd2(w,w.a.c.brN(0)))},
$S:0}
A.fd2.prototype={
$0(){return this.a.e=this.b},
$S:0}
A.fd6.prototype={
$1(d){return d.b.a!==B.qV},
$S:z+50}
A.fd7.prototype={
$0(){var w=this.a,v=w.c
v.toString
w=w.e
C.a5(v,!1).O(w)
return null},
$S:0}
A.fmu.prototype={
$1(d){var w
if(d.b===0){w=this.a
w=w>=d.c&&w<d.d&&0>=d.e&&0<d.f}else w=!1
return w},
$S:z+16}
A.fmv.prototype={
$1(d){var w=d.b,v=!1
if(w-1===this.a.c)if(w!==0){w=this.b
w=w>=d.c&&w<d.d}else w=v
else w=v
return w},
$S:z+16}
A.fmw.prototype={
$1(d){var w=d.b
return w!==0&&w-1===this.a.b},
$S:z+16}
A.bOa.prototype={
$1(d){return this.a.b.h(0,d.a).a},
$S:z+16}
A.bOf.prototype={
$1(d){return d.a===this.a},
$S:z+51}
A.bOe.prototype={
$1(d){return this.a.b.h(0,d.b).d.q(0,d.a)},
$S:z+51}
A.bOh.prototype={
$1(d){return D.d.b_(d,new A.bOi())},
$S:1832}
A.bOi.prototype={
$1(d){return d},
$S:99}
A.bOb.prototype={
$1(d){return d.a===6},
$S:z+26}
A.bOd.prototype={
$1(d){return d.a},
$S:z+52}
A.bOg.prototype={
$1(d){return d.c},
$S:z+52}
A.bOc.prototype={
$2(d,e){return d+e.d.a},
$S:z+128}
A.fC3.prototype={
$3(d,e,f){var w,v,u,t,s,r
for(w=$.Dw(),v=w.length,u=d.a,t=this.a.b,s=0;s<w.length;w.length===v||(0,C.K)(w),++s){r=w[s]
if(r.b===u&&r.d>=0&&t.h(0,u).d.q(0,r.a)&&e>r.e-0.5&&e<r.f+0.5&&f>r.r-0.5&&f<r.w+0.5)return!0}return!1},
$S:z+129}
A.fC6.prototype={
$9$shine(d,e,f,g,h,i,j,k,l){var w,v,u=f-e
if(u<0.05||h-g<0.05)return
w=A.fu(d,(e+f)/2,(g+h)/2,i)
v=h-g
u=(d&1)===0?new A.q(u,v,j):new A.q(j,v,u)
this.a.aF(w,u,k,l)},
$8(d,e,f,g,h,i,j,k){return this.$9$shine(d,e,f,g,h,i,j,k,0)},
$S:1833}
A.fC_.prototype={
$1(d){var w,v=this.a
if(d.b===v.b-1){w=d.c
v=w>v.c+0.9&&w<v.d-0.9}else v=!1
return v},
$S:z+53}
A.fBZ.prototype={
$4(d,e,f,g){var w=this.b.b,v=A.fu(w,(d+e)/2,(f+g)/2,this.c),u=e-d,t=g-f
w=(w&1)===0?new A.q(u,t,0.28):new A.q(0.28,t,u)
return this.a.aF(v,w,B.N9,0.8)},
$S:760}
A.fC5.prototype={
$2(d,e){var w,v,u=C.a([5.5],x.n),t=this.a
if(t>=2)u.push(4.6)
if(t>=3)u.push(10)
if(t>=4)u.push(14)
t=u.length
w=0
v=0
for(;v<u.length;u.length===t||(0,C.K)(u),++v){e.$3(u[v],0.02+w*0.03,d.$1(w));++w}},
$S:1834}
A.fC1.prototype={
$1(d){var w,v
if(d===1)w=B.ahQ
else{w=this.a
if(this.b)v=d===(w>=4?3:w-1)
else v=!1
if(w>=5)w=B.Mu
else w=v?B.N5:B.FH}return w},
$S:1835}
A.fC0.prototype={
$3(d,e,f){var w,v,u,t,s,r,q=4+e
for(w=this.a,v=w-1,u=this.b,t=this.c,s=d/2,r=48;r<v;r+=48)u.$8(t,r-s,r+s,0,95.5,q,0.08,f)
v=d*0.5
u.$8(t,0.4,0.4+v,0,95.5,q,0.08,f)
s=w-0.4
u.$8(t,s-v,s,0,95.5,q,0.08,f)
u.$8(t,0,w,95.5-v,95.5,q,0.08,f)},
$S:763}
A.fC4.prototype={
$3(d,e,f){var w=this.a
w.b=d
w.f=3
w.e=0.9
w.d=0.02
w.aE(e,f,D.c)
w.d=1
w.e=0
w.f=2},
$S:z+54}
A.fC2.prototype={
$4$r(d,e,f,g){var w=this.a
w.b=d
w.f=2
w.e=3
w.d=0.95
w.fu(e,g,f,4,8,0.3)
w.d=1
w.e=0},
$3(d,e,f){return this.$4$r(d,e,f,3)},
$S:z+55}
A.fC7.prototype={
$4$padToo(d,e,f,g){var w,v,u,t,s,r,q=this,p=q.a
p.b=d
p.f=3
p.e=0.8
p.d=0.22
w=e.b
v=e.c
u=e.d
t=v+u
v=u-v
if(w===0){w=t/2
u=e.e
t=e.f
s=(u+t)/2
u=t-u
p.aE(new A.q(w,95.2,s),new A.q(v-1,0.2,u-1),f)
p.d=1
p.e=0
p.f=2
q.b.$3(d,new A.q(w,94.5,s),new A.q(v,2,u))
q.c.$3(d,new A.q(w,94.2,s),f)}else{--w
t/=2
u=A.fu(w,t,48,4.4)
s=v-1
r=(w&1)===0
p.aE(u,r?new A.q(s,94,0.2):new A.q(0.2,94,s),f)
p.d=1
p.e=0
p.f=2
p=A.fu(w,t,48,4.7)
v=r?new A.q(v,94,1):new A.q(1,94,v)
q.b.$3(d,p,v)
q.c.$3(d,A.fu(w,t,48,5.7),f)}},
$3(d,e,f){return this.$4$padToo(d,e,f,!0)},
$S:z+133}
A.ce3.prototype={
$1(d){var w=this.a
if(w.c!=null)w.Ez("Tap a tool on the floor (the stack of sheets, the saw, the mud, the tape...), or choose one from the list, to pick it up. Then tap where it works.")},
$S:7}
A.ce4.prototype={
$1(d){var w,v,u,t,s,r=this.a
if(r.c==null)return
w=C.a([],x.s)
for(v=r.d.c,u=r.Q,t=0;t<5;++t)w.push(""+v[t].a+(u.gf2()/1000>=v[t].b))
s=D.d.hf(w)
if(s!==r.ay){r.ay=s
r.m(r.gcaM())}},
$S:11}
A.cdT.prototype={
$0(){var w=this.a
w.w=this.b
w.x=this.c},
$S:0}
A.cdU.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.cdS(w))},
$S:0}
A.cdS.prototype={
$0(){return this.a.w=null},
$S:0}
A.ce5.prototype={
$0(){var w=this.a
w.f=this.b
w.r=0
w.a_r()},
$S:0}
A.cdK.prototype={
$0(){var w=this.a
w.ch=this.b
w.CW=w.Q.gf2()/1000},
$S:0}
A.cdL.prototype={
$0(){var w=this.a
w.f=this.b
w.r=this.c
w.a_r()},
$S:0}
A.cdM.prototype={
$0(){return this.a.r=0},
$S:0}
A.cdN.prototype={
$0(){return this.a.r=this.b},
$S:0}
A.cdQ.prototype={
$1(d){return d-6700},
$S:72}
A.cdO.prototype={
$0(){var w=this.b
w.a_r()
w.r=this.a.a.a?this.c:0},
$S:0}
A.cdP.prototype={
$1(d){return this.a.caG()},
$S:7}
A.cdJ.prototype={
$1(d){var w=null,v=C.d("Every sheet is hung and screwed, the holes are cut, the corners are protected, and all the joints are taped, coated three times, sanded and primed. The room is ready for paint.\n\nMistakes: "+this.a.d.e,w,w,w,w,w,w,B.Ko,w,w,w)
return C.ei(C.a([C.bI(B.aWm,w,new A.cdI(d),w)],x.p),w,w,G.m4,v,w,w,w,w,B.fBw,w)},
$S:18}
A.cdI.prototype={
$0(){C.a5(this.a,!1).O(null)
return null},
$S:0}
A.cdV.prototype={
$0(){var w=this.a
return w.y=!w.y},
$S:0}
A.cdR.prototype={
$0(){var w=this.a
w.d.jW(0)
w.r=0
w.z=!1
w.a_r()},
$S:0}
A.cdW.prototype={
$1(d){return d.a===6},
$S:z+26}
A.cdX.prototype={
$1(d){return this.a.d.b.h(0,d.a).a},
$S:z+16}
A.cdY.prototype={
$1(d){return d.a>=4},
$S:z+26}
A.cdZ.prototype={
$1(d){return d.a>=5},
$S:z+26}
A.ce_.prototype={
$1(d){return!d},
$S:99}
A.ce2.prototype={
$0(){return A.aRT(this.a,"Hanging drywall",B.daN,this.b)},
$S:0}
A.ce1.prototype={
$0(){var w=this.a
if(w.y)w.gf1().hb(330,0.85,B.EG,0.5)
else w.gf1().hb(120,0.07,B.AC,0)},
$S:0}
A.ce0.prototype={
$1(d){var w=this.a,v=w.gf1(),u=Math.cos(v.b),t=w.Q,s=C.C(A.idy(w.d,t.gf2()/1000,new A.q(-u*Math.sin(v.a),Math.sin(v.b),u*Math.cos(v.a))),x.c)
D.d.v(s,A.hy0(w.ch,w.CW,t.gf2()/1000))
D.d.v(s,A.hxZ(v))
return s},
$S:z+8}
A.fEl.prototype={
$6(d,e,f,g,h,i){return this.a.xe(new A.q(d,h,f),new A.q(e,h,f),new A.q(e,h,g),new A.q(d,h,g),i,this.b)},
$S:1837}
A.fEk.prototype={
$1(d){return d.b===0},
$S:z+16}
A.fmx.prototype={
$5(d,e,f,g,h){var w=this.a
return w.push(new A.Cz(1000+w.length,d,e,f,g,h))},
$S:1838}
A.bTy.prototype={
$1(d){return this.a.a.$0()},
$S:11}
A.bTx.prototype={
$1(d){var w=this.a
if(!w.c)return
w.a.$0()
if(w.c)w.b0e()},
$S:7}
A.h21.prototype={
$1(d){return D.o.E(d+this.a-D.k.V(this.b*40),0,255)},
$S:72}
A.fEi.prototype={
$4(d,e,f,g){var w,v,u,t,s=this.a
s.x=$.dp=$.dp+1
s.b=d
w=e.b
v=e.c
u=e.d
t=A.fu(w,(v+u)/2,(f+g)/2,1.75)
v=u-v+1.5
u=g-f
w=(w&1)===0?new A.q(v,u,3.5):new A.q(3.5,u,v)
s.aF(t,w,A.aS4(d,0),0.05)
s.x=0},
$S:z+135}
A.fFb.prototype={
$0(){return this.b.$1(this.a.a)},
$S:0}
A.cEr.prototype={
$1(d){return d.b==="ceiling"},
$S:z+11}
A.cEs.prototype={
$1(d){return d.e===this.a.a},
$S:z+11}
A.cEn.prototype={
$1(d){var w=this.b
return this.a>0?D.k.F(D.k.F(d-w,528)+528,528):D.k.F(D.k.F(w-d,528)+528,528)},
$S:5}
A.cEm.prototype={
$2(d,e){var w=this.a
return J.z3(w.$1(B.HX[d.b]+d.c),w.$1(B.HX[e.b]+e.c))},
$S:z+137}
A.cEl.prototype={
$1(d){var w=this.b
return this.a>0?D.k.F(D.k.F(d-w,528)+528,528):D.k.F(D.k.F(w-d,528)+528,528)},
$S:5}
A.cEu.prototype={
$1(d){var w=this.a,v=this.b
return d>0?D.k.F(D.k.F(w-v,528)+528,528):D.k.F(D.k.F(v-w,528)+528,528)},
$S:187}
A.cEt.prototype={
$2(d,e){var w=this.a
return J.z3(w.$1(d),w.$1(e))},
$S:65}
A.cEv.prototype={
$1(d){return d.b==="outlet"&&d.c===this.a&&d.w!=null},
$S:z+11}
A.cEw.prototype={
$1(d){return d.b==="switch"&&d.w!=null&&this.a.aZq(d)},
$S:z+11}
A.cEx.prototype={
$1(d){return d.b==="ceiling"&&d.w!=null},
$S:z+11}
A.cEo.prototype={
$1(d){return d.b},
$S:z+34}
A.cEq.prototype={
$2(d,e){var w=e.w
w=w==null?null:w.gaHp()
return d+(w==null?0:w)},
$S:z+139}
A.cEp.prototype={
$1(d){return d.b===this.a},
$S:z+11}
A.fDg.prototype={
$3(d,e,f){var w=this.a
w.b=d
w.f=3
w.e=0.9
w.d=0.02
w.aE(e,f,D.c)
w.d=1
w.e=0
w.f=2},
$S:z+54}
A.fDf.prototype={
$4$r(d,e,f,g){var w=this.a
w.b=d
w.f=2
w.e=3
w.d=0.95
w.fu(e,g,f,4,8,0.3)
w.d=1
w.e=0},
$3(d,e,f){return this.$4$r(d,e,f,1.5)},
$S:z+55}
A.fDd.prototype={
$1(d){return d.e===this.a.a},
$S:z+11}
A.fDe.prototype={
$1(d){return d.b==="ceiling"},
$S:z+11}
A.cnc.prototype={
$1(d){var w=this.a
if(w.c!=null)w.AI("Tap a tool on the floor (the cable roll, the drill), or choose one from the list, to pick it up. Then tap where it works.")},
$S:7}
A.cn3.prototype={
$0(){var w=this.a
w.x=this.b
w.y=this.c},
$S:0}
A.cn4.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.cn2(w))},
$S:0}
A.cn2.prototype={
$0(){return this.a.x=null},
$S:0}
A.cmW.prototype={
$0(){var w=this.b
return this.a.ax=C.jU(w,C.T(w).c)},
$S:0}
A.cmX.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.cmV(w))},
$S:0}
A.cmV.prototype={
$0(){return this.a.ax=C.aV(x.S)},
$S:0}
A.cmU.prototype={
$0(){var w=this.a,v=this.b
w.r=v
w.w=this.c
w.f=A.ah1(w.d,v)},
$S:0}
A.cnd.prototype={
$0(){var w=this.a,v=this.b
w.r=v
w.w=0
w.f=A.ah1(w.d,v)},
$S:0}
A.cmT.prototype={
$0(){var w=this.a
w.ay=this.b
w.ch=w.as.gf2()/1000},
$S:0}
A.cmP.prototype={
$0(){var w=this.a
w.ax=C.aV(x.S)
w.f=A.ah1(w.d,w.r)},
$S:0}
A.cmY.prototype={
$0(){return this.a.w=0},
$S:0}
A.cmZ.prototype={
$0(){return this.a.w=this.b},
$S:0}
A.cn_.prototype={
$0(){var w=this.a
w.f=A.ah1(w.d,w.r)
w.w=this.b.a?this.c:0},
$S:0}
A.cn0.prototype={
$1(d){return this.a.bSg()},
$S:7}
A.cmS.prototype={
$1(d){var w=null,v=this.a.d
v=C.d("Every wall has its outlet, the switch is beside the door and the light is connected, with "+D.k.ac(v.gbfG(),0)+" feet of cable.\n\nMistakes: "+v.c+"\n\nNext the walls get their drywall: try the Hanging drywall lesson.",w,w,w,w,w,w,B.Ko,w,w,w)
return C.ei(C.a([C.bM(!1,B.fMc,w,w,!0,w,w,w,new A.cmQ(d),w,w),C.bI(B.aWm,w,new A.cmR(d),w)],x.p),w,w,G.m4,v,w,w,w,w,B.fEO,w)},
$S:18}
A.cmQ.prototype={
$0(){C.a5(this.a,!1).O(null)
return null},
$S:0}
A.cmR.prototype={
$0(){C.a5(this.a,!1).O(null)
return null},
$S:0}
A.cn5.prototype={
$0(){var w=this.a
return w.z=!w.z},
$S:0}
A.cn1.prototype={
$0(){var w=this.a,v=w.d
v.a.aa(0)
D.d.aa(v.b)
v.c=0
v.d=4000
w.at.aa(0)
w.ax=C.aV(x.S)
w.w=0
w.Q=!1
w.f=A.ah1(v,w.r)},
$S:0}
A.cn6.prototype={
$1(d){return d.w!=null},
$S:z+11}
A.cn7.prototype={
$1(d){return!d},
$S:99}
A.cnb.prototype={
$0(){return A.aRT(this.a,"Wiring a house",B.clk,this.b)},
$S:0}
A.cn9.prototype={
$0(){var w=this.a
if(w.z)w.gf1().hb(330,0.85,B.EG,0.5)
else w.gf1().hb(120,0.07,B.AC,0)},
$S:0}
A.cn8.prototype={
$1(d){var w=this.a,v=C.C(A.ipV(w.d,d,w.at,w.ax),x.c)
D.d.v(v,A.hy0(w.ay,w.ch,w.as.gf2()/1000))
D.d.v(v,A.hxZ(w.gf1()))
return v},
$S:z+8}
A.cna.prototype={
$1(d){return d.b},
$S:z+34}
A.fF2.prototype={
$2(d,e){return D.d.fG($.Bi(),new A.fF3(d,e)).a},
$S:750}
A.fF3.prototype={
$1(d){return d.b===this.a&&d.c===this.b&&d.f!=="cripple"},
$S:z+53};(function aliases(){var w=A.aOn.prototype
w.bzt=w.t
w=A.aLK.prototype
w.bwE=w.t})();(function installTearOffs(){var w=a._instance_0u,v=a._instance_1u,u=a.installStaticTearOff,t=a.installInstanceTearOff,s=a._instance_2u,r=a._instance_0i
var q
w(q=A.aey.prototype,"gbXr","bXs",0)
v(q,"gLX","a5x",136)
u(A,"ilF",3,null,["$3"],["i7n"],28,0)
w(q=A.ap2.prototype,"gc7T","c7U",0)
w(q,"gbrG","brH",0)
t(q,"gcAQ",0,0,null,["$1$done","$0"],["aCc","cAR"],117,0,0)
w(q,"gcCV","cCW",0)
w(q,"gbPM","bPN",0)
v(A.aUt.prototype,"gcTG","cTH",23)
s(q=A.aF6.prototype,"gbON","bOO",25)
w(q,"gj0","iK",0)
t(q,"gc98",0,1,null,["$2$keepTour","$1"],["ay5","AG"],58,0,0)
v(q,"gc9d","c9e",9)
w(q,"gbQL","bQM",0)
w(q,"gbQN","bQO",0)
w(q,"gbR6","bR7",0)
w(q,"gc46","c47",0)
w(q,"gbHa","bHb",0)
w(q,"gcFs","cFt",0)
w(q,"gctm","ctn",0)
w(q,"gbPs","bPt",0)
w(q,"gaRo","at6",0)
w(q,"gc96","c97",0)
w(q,"gcvZ","cw_",0)
w(q,"gcFm","cFn",20)
w(q,"gcAS","Sl",0)
w(q,"gb8h","Sf",0)
w(q,"gb8w","a31",0)
w(q,"gcHt","cHu",0)
w(q,"gbUq","bUr",0)
w(q,"gcAP","Bb",0)
w(q,"gc9b","Eu",20)
w(q,"gcit","a0H",20)
w(q,"gchT","a0y",20)
w(q,"gaOb","bCu",20)
w(q,"gc9h","c9i",0)
w(q,"gcqx","cqy",0)
r(q,"gc9f","c9g",0)
u(A,"hBj",3,null,["$3"],["imN"],28,0)
u(A,"he5",3,null,["$3"],["hBx"],28,0)
w(q=A.aAW.prototype,"gc9m","pz",0)
w(q,"gJf","on",0)
v(q,"gJg","Jh",9)
w(q,"gcnw","cnx",0)
w(q,"gcCY","cCZ",0)
w(q=A.aGS.prototype,"gJf","on",0)
v(q,"gJg","Jh",9)
w(q,"gc9n","b_L",0)
w(q=A.aBf.prototype,"gJf","on",0)
v(q,"gJg","Jh",9)
r(q,"gc9k","c9l",0)
w(q=A.aC8.prototype,"gJf","on",0)
v(q,"gJg","Jh",9)
w(q=A.aFz.prototype,"gc9r","b_O",0)
v(q,"gc9s","c9t",9)
w(q,"gcye","cyf",0)
v(A.Y_.prototype,"gaqE","bqP",111)
s(q=A.aFG.prototype,"gc9w","c9x",25)
w(q,"gbT8","aUQ",0)
w(q,"gc44","c45",0)
w(q,"gbF2","bF3",0)
w(q,"gbF0","bF1",0)
w(q,"gb_P","Q2",0)
v(q,"gc9z","c9A",9)
w(q=A.aFK.prototype,"gc9E","b_S",0)
v(q,"gc9F","c9G",9)
w(q=A.aqp.prototype,"gcaM","a_r",0)
v(q,"gaqA","aqB",56)
s(q,"gcaH","caI",25)
v(q,"gcaK","caL",9)
w(q,"gcaP","caQ",0)
w(q,"gcaN","caO",0)
v(q=A.ats.prototype,"gaqA","aqB",56)
s(q,"gbV_","bV0",25)
w(q,"gbPo","bPp",0)
v(q,"gcaR","caS",9)
w(q,"gcEy","cEz",0)
w(q,"gcaT","caU",0)})();(function inheritance(){var w=a.mixin,v=a.mixinHard,u=a.inheritMany,t=a.inherit
u(C.lB,[A.f1n,A.rt,A.JR,A.FW,A.G2])
u(C.af,[A.aa3,A.avW,A.ap1,A.aq1,A.J5,A.aJl,A.aKj,A.NV,A.awR,A.E8,A.a9X,A.a5o,A.aC7,A.ag2,A.Wu,A.Ox,A.ask,A.aqq,A.a1v,A.aqo,A.atr])
u(C.ah,[A.aOe,A.aOn,A.ap2,A.blj,A.aF6,A.buu,A.bwF,A.blk,A.bui,A.byA,A.bzV,A.byF,A.aC8,A.bxZ,A.aFz,A.aFG,A.aFK,A.aLK,A.bvz,A.aqp,A.ats])
t(A.aey,A.aOe)
t(A.bq1,Q.auR)
u(C.aD,[A.q,A.kr,A.cL,A.hi,A.qW,A.fo,A.f3,A.bVN,A.cFi,A.Ge,A.Q4,A.cNf,A.bcE,A.bcZ,A.bi7,A.drb,A.MQ,A.dwJ,A.dlk,A.lJ,A.rj,A.Hz,A.aTz,A.bIB,A.hp,A.G6,A.zi,A.xt,A.aUJ,A.a4E,A.akF,A.bN1,A.bL7,A.dlQ,A.rX,A.SQ,A.aU3,A.bxW,A.bL9,A.Ap,A.cCw,A.pJ,A.bKT,A.FA,A.Pe,A.Ig,A.Mb,A.aUt,A.fm,A.CJ,A.iR,A.MF,A.ay8,A.mi,A.fq,A.Ei,A.nR,A.ac0,A.ot,A.aWS,A.a5C,A.aWX,A.f3L,A.MA,A.Qy,A.bW3,A.m3,A.adk,A.jT,A.Nh,A.cpy,A.Fp,A.nz,A.Xw,A.cpo,A.zc,A.la,A.Yb,A.awp,A.aVi,A.ey,A.Y_,A.hN,A.rV,A.uK,A.MJ,A.cxK,A.yb,A.tU,A.aai,A.ib,A.cuj,A.AF,A.bsQ,A.aWZ,A.bak,A.akK,A.cAK,A.cEk,A.a4z,A.bNb,A.wz,A.tt,A.b6U,A.abq,A.abr,A.vo,A.b5C,A.b8O,A.cAM,A.Q_,A.zh,A.Mu,A.Mv,A.a4N,A.bO9,A.Xa,A.Cz,A.a5x,A.n7,A.aW_,A.Ed,A.PW,A.baf])
u(C.hz,[A.c0P,A.c0Q,A.c0O,A.c0R,A.c0S,A.h1v,A.h1t,A.h1u,A.h1s,A.h1g,A.bKj,A.bKk,A.bKl,A.bKm,A.bKg,A.bKo,A.bKn,A.bKi,A.bKh,A.cvj,A.cvk,A.cvc,A.cvd,A.cve,A.cvf,A.f4U,A.f4T,A.f4R,A.f4S,A.f4L,A.f4O,A.f4P,A.f4N,A.f4Q,A.bUz,A.bUs,A.bUD,A.bUy,A.bUG,A.bUE,A.bUJ,A.bUu,A.bUw,A.bUv,A.bID,A.bIC,A.fTq,A.fBE,A.fBF,A.fBx,A.fBy,A.fBz,A.fBA,A.fBB,A.fBC,A.fBD,A.fnz,A.fqY,A.fAj,A.fBp,A.fBq,A.fBr,A.c4Q,A.c4O,A.c4G,A.c4z,A.c4x,A.c4r,A.c4y,A.c4h,A.c4i,A.c4j,A.fE9,A.bN3,A.bN6,A.fHF,A.fkH,A.bLa,A.h1q,A.h1r,A.h1o,A.fDI,A.cCy,A.cCz,A.bKU,A.bL2,A.bL3,A.bL4,A.bL5,A.bKV,A.bKW,A.bKX,A.bKY,A.bKZ,A.bL0,A.bL1,A.bL6,A.bLL,A.bLI,A.bLJ,A.bLK,A.bLP,A.bLO,A.bLM,A.bLQ,A.dUs,A.dUn,A.dUH,A.dUq,A.dUK,A.fEm,A.h20,A.fDv,A.fDw,A.fDt,A.fDu,A.fUi,A.fUj,A.fEz,A.fEA,A.fEx,A.fEy,A.fBv,A.fBw,A.h2_,A.fnQ,A.ftn,A.fAc,A.fBh,A.h1X,A.h1U,A.bVe,A.bVd,A.bVP,A.bVQ,A.bVR,A.bVS,A.bVT,A.bVX,A.bVU,A.bVV,A.bW0,A.bW_,A.bVZ,A.bVY,A.egd,A.ega,A.egb,A.egc,A.ecW,A.efo,A.efp,A.efl,A.ebv,A.efR,A.efS,A.ef2,A.ee0,A.edX,A.ecP,A.edH,A.ecZ,A.edw,A.eg4,A.ecy,A.edu,A.edv,A.ed9,A.edJ,A.ec2,A.ec1,A.ecu,A.eeS,A.eeR,A.eez,A.eew,A.efP,A.efO,A.efG,A.efB,A.efA,A.efd,A.eg_,A.eeI,A.eeJ,A.efT,A.eeG,A.edL,A.edM,A.edN,A.edx,A.edy,A.eeU,A.ef6,A.ef8,A.edE,A.edD,A.edF,A.ef9,A.ee2,A.ee3,A.eeb,A.eec,A.eed,A.edP,A.edQ,A.eg3,A.edS,A.edR,A.ebu,A.ebo,A.ebp,A.ebq,A.eg7,A.ebO,A.ebC,A.ebD,A.ebQ,A.ebw,A.eeF,A.dx8,A.f9i,A.f9j,A.f9k,A.f9h,A.fBQ,A.fBX,A.fBS,A.fBP,A.fBI,A.fBU,A.fBW,A.fBV,A.fBT,A.fBJ,A.fBH,A.fBM,A.fBN,A.fTB,A.fTz,A.fTy,A.fTA,A.fCa,A.fCm,A.fCb,A.fCc,A.fCe,A.fCh,A.fCi,A.fCj,A.fCk,A.fCf,A.fv9,A.fv4,A.fv5,A.fv6,A.fus,A.fuu,A.fuF,A.fuQ,A.fv7,A.fuZ,A.fv_,A.fv0,A.fv1,A.fv2,A.fv3,A.fuv,A.fuw,A.fux,A.fuy,A.fuz,A.fuA,A.fuB,A.fuC,A.fuD,A.fuE,A.fuG,A.fuH,A.fuI,A.fuJ,A.fuK,A.fuL,A.fuM,A.fuN,A.fuO,A.fuP,A.fuR,A.fuS,A.fuT,A.fuU,A.fuV,A.fuW,A.fuX,A.fuY,A.fFt,A.fFu,A.fFv,A.flc,A.fl2,A.fw_,A.fvx,A.fvy,A.fvz,A.fvA,A.fvL,A.fvT,A.fvU,A.fvV,A.fvW,A.fvX,A.fvY,A.fvZ,A.fvB,A.fvC,A.fvD,A.fvE,A.fvF,A.fvG,A.fvH,A.fvI,A.fvJ,A.fvK,A.fvM,A.fvN,A.fvO,A.fvP,A.fvQ,A.fvR,A.fvS,A.fp7,A.fCt,A.fCp,A.fCs,A.fCr,A.dUS,A.dUZ,A.dUQ,A.dUR,A.f96,A.fUL,A.fUK,A.dcC,A.dcD,A.dcz,A.dcF,A.dcI,A.dcK,A.dd2,A.ddi,A.dd_,A.ddj,A.eZg,A.eZo,A.eZp,A.dfP,A.dg_,A.dg0,A.dg2,A.dmX,A.dn7,A.dn6,A.dn9,A.fkI,A.fkN,A.fkO,A.fkM,A.fD4,A.fD3,A.fD2,A.fC9,A.fER,A.fEQ,A.cps,A.cpt,A.cpp,A.cpu,A.cpv,A.cpw,A.cpx,A.cpq,A.cpr,A.fD1,A.fD_,A.fCU,A.fCX,A.fCV,A.fCW,A.fD0,A.fCY,A.fCZ,A.fCT,A.fTV,A.et7,A.esP,A.esU,A.et8,A.esV,A.esW,A.esX,A.et5,A.et9,A.etb,A.eta,A.et_,A.h1f,A.cuo,A.cuv,A.cuw,A.cux,A.cuy,A.cuA,A.cuz,A.cun,A.cul,A.cum,A.cut,A.cuu,A.cup,A.cuq,A.cur,A.cus,A.ewN,A.ewO,A.ewP,A.exn,A.exp,A.exr,A.ewX,A.ewU,A.exI,A.exQ,A.exF,A.exe,A.exf,A.ex1,A.ex2,A.ex3,A.ex6,A.ex7,A.ex8,A.ex9,A.exa,A.exb,A.exc,A.exd,A.ex4,A.ex5,A.eyf,A.ey5,A.ey7,A.exm,A.fvc,A.fvd,A.fD5,A.fD6,A.fD7,A.fDa,A.fD8,A.fUd,A.fUe,A.fUf,A.cxP,A.cxL,A.cxN,A.cxO,A.cxM,A.ezH,A.ezI,A.ezC,A.ezy,A.ezT,A.ezS,A.ezU,A.ezV,A.ezQ,A.ezN,A.fnR,A.bW1,A.bW2,A.fjs,A.fES,A.fEo,A.fEu,A.fEp,A.fEq,A.fEr,A.fEs,A.fno,A.fnp,A.cAN,A.cAP,A.h1c,A.h1a,A.fd4,A.fd6,A.fmu,A.fmv,A.fmw,A.bOa,A.bOf,A.bOe,A.bOh,A.bOi,A.bOb,A.bOd,A.bOg,A.fC3,A.fC6,A.fC_,A.fBZ,A.fC1,A.fC0,A.fC4,A.fC2,A.fC7,A.ce3,A.ce4,A.cdQ,A.cdP,A.cdJ,A.cdW,A.cdX,A.cdY,A.cdZ,A.ce_,A.ce0,A.fEl,A.fEk,A.fmx,A.bTy,A.bTx,A.h21,A.fEi,A.cEr,A.cEs,A.cEn,A.cEl,A.cEu,A.cEv,A.cEw,A.cEx,A.cEo,A.cEp,A.fDg,A.fDf,A.fDd,A.fDe,A.cnc,A.cn0,A.cmS,A.cn6,A.cn7,A.cn8,A.cna,A.fF3])
u(C.jx,[A.c0N,A.cvi,A.cvb,A.cvg,A.cvh,A.bUt,A.bUB,A.bUA,A.fAf,A.fBG,A.fAk,A.c4w,A.bN5,A.bN2,A.bN7,A.bN4,A.bL8,A.c2r,A.h1p,A.fDJ,A.cCx,A.bL_,A.bLN,A.fFP,A.fFQ,A.fFR,A.fFS,A.fFT,A.fEw,A.fms,A.fto,A.ftm,A.ftl,A.fFU,A.fFV,A.fFW,A.fFX,A.fFY,A.fFZ,A.fG_,A.fG0,A.fG1,A.fG2,A.fFI,A.fFJ,A.fFK,A.fFL,A.fFM,A.fFN,A.fFO,A.h1V,A.h1W,A.bVW,A.eei,A.edg,A.efQ,A.ef1,A.ee_,A.ed0,A.eeQ,A.efN,A.efz,A.eea,A.fBY,A.fBR,A.fBO,A.fBK,A.fBL,A.fCo,A.fCd,A.fCg,A.fCn,A.fv8,A.fut,A.fFw,A.fCq,A.dcG,A.eZl,A.dfO,A.cuB,A.exl,A.ezP,A.d9u,A.d9n,A.fET,A.fEt,A.cAO,A.fEv,A.bOc,A.fC5,A.cEm,A.cEt,A.cEq,A.fF2])
u(C.p6,[A.uE,A.aU4])
u(C.mh,[A.b6X,A.bg3,A.bjO,A.bxG])
t(A.bsD,A.aOn)
u(C.iI,[A.f4M,A.fmm,A.bUI,A.bUC,A.bUx,A.bUF,A.fAl,A.fAi,A.c4N,A.c4B,A.c4H,A.c4P,A.c4E,A.c4D,A.c4b,A.c4C,A.c4F,A.c4A,A.c4u,A.c4t,A.c4v,A.c4s,A.c4g,A.c4f,A.c4k,A.c4l,A.c4m,A.c4n,A.c4o,A.c4e,A.c4p,A.c4c,A.c4d,A.c4q,A.c4K,A.c4L,A.c4J,A.c4M,A.c4I,A.fEa,A.dUr,A.dUE,A.dUy,A.dUz,A.dUx,A.dUo,A.dUI,A.dUG,A.dUF,A.dUm,A.dUt,A.dUu,A.dUv,A.dUw,A.dUp,A.dUB,A.dUC,A.dUD,A.dUA,A.dUJ,A.fBi,A.eg9,A.eeX,A.eeY,A.eeW,A.eeZ,A.eds,A.efq,A.eep,A.eeq,A.eer,A.ees,A.eet,A.ecU,A.ecT,A.ecV,A.ecR,A.ecS,A.ecQ,A.ed4,A.ed5,A.ed6,A.eek,A.eej,A.eel,A.eeh,A.eem,A.eeg,A.een,A.eef,A.eeo,A.eee,A.ecw,A.ecx,A.edi,A.edh,A.edj,A.edf,A.edk,A.ede,A.edl,A.edd,A.edm,A.edc,A.edn,A.edb,A.edo,A.eda,A.efm,A.efn,A.edG,A.ebW,A.edB,A.edA,A.edC,A.edz,A.ef3,A.ef0,A.ef_,A.edZ,A.edY,A.edV,A.edU,A.edW,A.edT,A.edp,A.edq,A.eeT,A.ed2,A.ed1,A.ed3,A.ef4,A.efg,A.ed_,A.ecY,A.ecX,A.eff,A.edt,A.ed8,A.edK,A.ec3,A.ec0,A.ec4,A.ec_,A.ec5,A.ebZ,A.ec6,A.ebY,A.ec7,A.ebX,A.ecv,A.eeM,A.eeL,A.eeN,A.eeO,A.eeP,A.eex,A.eev,A.eey,A.eeu,A.efF,A.efE,A.efH,A.efI,A.efJ,A.efK,A.efL,A.efM,A.efv,A.eft,A.efu,A.efw,A.efs,A.efx,A.efy,A.efc,A.efe,A.efC,A.efr,A.efj,A.efk,A.efb,A.efi,A.eg0,A.eg1,A.eg2,A.efU,A.efV,A.efW,A.efX,A.efY,A.efZ,A.ed7,A.edO,A.ef5,A.edr,A.eeV,A.ef7,A.efa,A.efh,A.ee5,A.ee6,A.ee4,A.ee7,A.ee8,A.ee1,A.ee9,A.ebt,A.ebr,A.edI,A.efD,A.eeH,A.eeK,A.ebs,A.ecE,A.ecF,A.ecG,A.ecH,A.ecI,A.ecJ,A.ecD,A.ecK,A.ecC,A.ecL,A.ecB,A.ecM,A.ecA,A.ecN,A.ecz,A.ecO,A.eg6,A.eg8,A.eg5,A.ecg,A.ech,A.eci,A.ecm,A.ecn,A.eco,A.ecf,A.ecp,A.ece,A.ecq,A.ecd,A.ecr,A.ecs,A.ecc,A.ect,A.ecb,A.ecj,A.eca,A.eck,A.ec9,A.ecl,A.ec8,A.ebB,A.ebP,A.ebG,A.ebR,A.ebA,A.ebS,A.ebT,A.ebz,A.ebU,A.ebV,A.ebE,A.eby,A.ebF,A.ebx,A.ebH,A.ebI,A.ebJ,A.ebK,A.ebL,A.ebM,A.ebN,A.eeC,A.eeD,A.eeB,A.eeE,A.eeA,A.f9g,A.f9f,A.feZ,A.feY,A.chE,A.fCl,A.fDs,A.dUV,A.dUW,A.dUX,A.dV_,A.dV0,A.dV1,A.dV2,A.dV3,A.dV4,A.dV5,A.dV6,A.dUY,A.dUU,A.dUT,A.dUL,A.dUM,A.dUN,A.dUO,A.dUP,A.f95,A.cyX,A.cyY,A.bY9,A.dls,A.dlt,A.dlr,A.dcS,A.dcQ,A.dcR,A.dcP,A.dcA,A.dcB,A.dcE,A.dcH,A.dcJ,A.dcL,A.dcM,A.dcN,A.dcO,A.dcT,A.dcU,A.ddb,A.dd3,A.dd4,A.ddc,A.ddd,A.dd1,A.dde,A.dd0,A.ddf,A.ddg,A.ddh,A.dd5,A.dcZ,A.dd6,A.dd7,A.dcY,A.dd8,A.dcX,A.dd9,A.dcW,A.dda,A.dcV,A.eZj,A.eZk,A.eZi,A.eZb,A.eZc,A.eZd,A.eZe,A.eZf,A.eZh,A.eZs,A.eZq,A.eZn,A.eZr,A.eZm,A.dfU,A.dfV,A.dfT,A.dfM,A.dfQ,A.dfR,A.dfS,A.dfW,A.dfN,A.dg5,A.dg1,A.dfZ,A.dg3,A.dfY,A.dg4,A.dfX,A.dn1,A.dn2,A.dn0,A.dmW,A.dmY,A.dmZ,A.dn_,A.dna,A.dn5,A.dn8,A.dn4,A.dn3,A.fkL,A.fkJ,A.fkK,A.ccA,A.fCQ,A.fCR,A.fCS,A.et2,A.et3,A.et1,A.esY,A.esN,A.esO,A.esS,A.esT,A.et0,A.et4,A.et6,A.esR,A.esQ,A.etd,A.etc,A.esZ,A.exD,A.exE,A.exC,A.ewJ,A.ewK,A.ewI,A.ewL,A.ewM,A.ewH,A.ewY,A.ex_,A.ewQ,A.ewR,A.exg,A.ewZ,A.exz,A.exA,A.exB,A.exw,A.exx,A.exy,A.exv,A.exo,A.exq,A.exs,A.ext,A.exu,A.exH,A.ewV,A.ewW,A.ewS,A.ewT,A.ex0,A.exK,A.exL,A.exM,A.exN,A.exO,A.exP,A.exR,A.exJ,A.exG,A.eyg,A.eyh,A.ey_,A.ey2,A.ey3,A.ey1,A.ey4,A.ey0,A.eyi,A.exZ,A.eyj,A.exY,A.eyk,A.exX,A.eyl,A.exW,A.eym,A.exT,A.exU,A.exV,A.eyn,A.ey6,A.exS,A.ey8,A.ey9,A.eya,A.eyb,A.eyc,A.eyd,A.eye,A.exh,A.exi,A.exj,A.exk,A.fD9,A.ezK,A.ezL,A.ezJ,A.ezz,A.ezE,A.ezF,A.ezD,A.ezG,A.ezB,A.ezw,A.ezx,A.ezA,A.ezX,A.ezW,A.ezR,A.ezM,A.ezO,A.d9i,A.d9j,A.d9k,A.d9l,A.d9e,A.d9h,A.d9g,A.d9f,A.d9q,A.d9r,A.d9s,A.d9p,A.d9t,A.d9o,A.d9v,A.d9m,A.fd3,A.fd5,A.fd2,A.fd7,A.cdT,A.cdU,A.cdS,A.ce5,A.cdK,A.cdL,A.cdM,A.cdN,A.cdO,A.cdI,A.cdV,A.cdR,A.ce2,A.ce1,A.fFb,A.cn3,A.cn4,A.cn2,A.cmW,A.cmX,A.cmV,A.cmU,A.cnd,A.cmT,A.cmP,A.cmY,A.cmZ,A.cn_,A.cmQ,A.cmR,A.cn5,A.cn1,A.cnb,A.cn9])
u(C.ax,[A.aZm,A.UL,A.ad2,A.bko,A.b8f,A.aYm,A.a7q])
t(A.aAW,A.byA)
t(A.aGS,A.bzV)
t(A.aBf,A.byF)
t(A.beU,A.aLK)
w(A.aOe,Q.auQ)
v(A.aOn,C.cg)
w(A.byA,A.adk)
w(A.byF,A.adk)
w(A.bzV,A.adk)
v(A.aLK,C.cg)})()
C.j2(b.typeUniverse,JSON.parse('{"aa3":{"af":[],"v":[]},"aey":{"ah":["aa3<1>"]},"avW":{"af":[],"v":[]},"uE":{"aC":[]},"b6X":{"aC":[]},"bsD":{"ah":["avW"]},"ap1":{"af":[],"v":[]},"ap2":{"ah":["ap1"]},"aU4":{"aC":[]},"aZm":{"ax":[],"v":[]},"UL":{"ax":[],"v":[]},"aq1":{"af":[],"v":[]},"blj":{"ah":["aq1"]},"ad2":{"ax":[],"v":[]},"bg3":{"aC":[]},"J5":{"af":[],"v":[]},"aJl":{"af":[],"v":[]},"aKj":{"af":[],"v":[]},"aF6":{"ah":["J5"]},"bko":{"ax":[],"v":[]},"bjO":{"aC":[]},"buu":{"ah":["aJl"]},"bwF":{"ah":["aKj"]},"awR":{"af":[],"v":[]},"E8":{"af":[],"v":[]},"a9X":{"af":[],"v":[]},"a5o":{"af":[],"v":[]},"aC7":{"af":[],"v":[]},"ag2":{"af":[],"v":[]},"NV":{"af":[],"v":[]},"blk":{"ah":["NV"]},"bui":{"ah":["awR"]},"b8f":{"ax":[],"v":[]},"aYm":{"ax":[],"v":[]},"aAW":{"ah":["E8"]},"aGS":{"ah":["a9X"]},"aBf":{"ah":["a5o"]},"aC8":{"ah":["aC7"]},"bxZ":{"ah":["ag2"]},"a7q":{"ax":[],"v":[]},"Wu":{"af":[],"v":[]},"aFz":{"ah":["Wu"]},"Ox":{"af":[],"v":[]},"aFG":{"ah":["Ox"]},"ask":{"af":[],"v":[]},"aFK":{"ah":["ask"]},"aqq":{"af":[],"v":[]},"beU":{"ah":["aqq"]},"bxG":{"aC":[]},"a1v":{"af":[],"v":[]},"bvz":{"ah":["a1v"]},"aqo":{"af":[],"v":[]},"aqp":{"ah":["aqo"]},"atr":{"af":[],"v":[]},"ats":{"ah":["atr"]}}'))
C.D2(b.typeUniverse,JSON.parse('{"bq1":1,"aOe":1,"adk":1}'))
var y={T:"A hot wire never goes on the green ground screw.",X:"A shut-off valve goes on the pipe that comes out of the wall.",v:"Both black wires go on brass screws. It does not matter which one.",N:"Brass screws are for the HOT wire (black).",c:"Double tap the floor or a wall to walk over there.",q:"Each switch has its own screw on the other side, and each goes to its own light.",R:"Fasten the bare copper ground to the GREEN screw.",E:"Fasten the black hot to one HOT (X or Y) brass screw.",A:"Fasten the black wire to the LEFT terminal.",k:"Fasten the red hot to the other HOT brass screw.",d:"Fasten the red wire to the RIGHT terminal.",F:"Fasten the white neutral to a SILVER screw.",r:"Fasten the white neutral to the silver NEUTRAL (W) screw.",b:"Fold the wires back and push the device into the box.",W:"Hot and cold flow through the hoses and out of the faucet. No leaks. The lesson is complete!",P:"LOAD is for feeding other outlets further down the line. It is covered with tape. Power comes in on the LINE screws.",x:"Look at the device and the wires. Learn which wire is which before you touch a screw.",M:"Move it with the arrow buttons, turn it, change its colour or take it out.",G:"Neutral goes on a silver screw. The silver screws stay joined, so one wire feeds both halves.",o:"Pick a paint colour above to change this wall.",n:"Put the cover plate on, turn the power on and test.",Q:"Silver screws are for the NEUTRAL wire (white).",f:"Switch the power on and flip the wall switch.",H:"The bare copper ground goes on the green screw.",t:"The bare copper ground wire only goes on the GREEN screw.",S:"The black and red hot wires go on the two brass screws, X and Y. The silver W screw is for the neutral.",u:"The black hot wire goes on a brass screw.",J:"The black wire goes on the LEFT terminal.",C:"The gold screws are BRASS. They are for the HOT wire (black).",Z:"The green screw is for the bare copper ground wire.",l:"The two hot wires (black and red) go on the two brass screws, X and Y, in either order.",m:"The two hot wires go on the two brass screws, X and Y, in either order.",p:"The two hot wires go on the two brass screws, in either order.",a:"The two traveler wires go on the two brass traveler screws, in either order.",g:"The two travelers coming from the first three-way go on the two top screws.",e:"The two travelers going to the second three-way go on the two bottom screws.",_:"The white neutral wire goes on a silver screw.",I:"The white neutral wire goes on the silver W screw.",B:"The white-silver screws are NICKEL. They are for the NEUTRAL wire (white).",i:"The whole room from above: the near walls are left out so you can see in.",D:"There is no medicine left. Buy some in the shop.",O:"Turn the breaker OFF and test that the wires are dead.",Y:"You are at the street light. Press Fix the street light.",L:"You walked over here. Drag to turn round."}
var x=(function rtii(){var w=C.as
return{dw:w("lI<t?>"),ff:w("aTz"),l:w("bu<m,m>"),gW:w("bu<m,I>"),M:w("dx<m>"),hg:w("a4E"),ag:w("Mv"),cD:w("aVi"),ha:w("Ed"),eP:w("rt"),gN:w("Ia"),eB:w("mi"),fa:w("aB<N_?>"),v:w("dg<G,m>"),R:w("iL<G>"),fC:w("Ig"),f5:w("O<SA>"),m:w("O<lJ>"),gQ:w("O<Mb>"),V:w("O<ac>"),O:w("O<t>"),bm:w("O<a4z>"),fW:w("O<aUJ>"),F:w("O<a4E>"),I:w("O<Mu>"),ar:w("O<zh>"),gc:w("O<a4N>"),C:w("O<xt>"),dI:w("O<MA>"),k:w("O<Ed>"),gw:w("O<MJ>"),dh:w("O<Ia>"),_:w("O<mi>"),dY:w("O<ot>"),cX:w("O<aWS>"),K:w("O<a5C>"),gM:w("O<Ig>"),r:w("O<fm>"),E:w("O<hi>"),Z:w("O<jT>"),gL:w("O<ai<G>>"),ez:w("O<a8<m,aD>>"),c7:w("O<a8<m,@>>"),f4:w("O<a8<m,cj>>"),T:w("O<ib>"),dN:w("O<u>"),B:w("O<la>"),fI:w("O<nz>"),g:w("O<fW>"),z:w("O<kr>"),gl:w("O<b5C>"),aB:w("O<+(a9l,G)>"),L:w("O<+(m,m)>"),dt:w("O<+(q,q)>"),Q:w("O<+(I,m)>"),f:w("O<+(I,I)>"),ek:w("O<+(G,m)>"),gr:w("O<+(m,m,a0)>"),aJ:w("O<+(m,G,G)>"),dV:w("O<+(I,I,t)>"),al:w("O<+(G,I,P)>"),gp:w("O<+(G,G,ai<u>)>"),dQ:w("O<+(G,G,G)>"),D:w("O<+(I,I,I,I)>"),az:w("O<+(G,G,I,P,m)>"),dz:w("O<+blurb,color,emoji,open,title,words(m,t,m,~(),m,m)>"),fP:w("O<Pe>"),e3:w("O<aai>"),fB:w("O<wz>"),a:w("O<fo>"),gD:w("O<Yb>"),U:w("O<rX>"),s:w("O<m>"),Y:w("O<Cz>"),fJ:w("O<abq>"),dH:w("O<abr>"),J:w("O<vo>"),bz:w("O<Ap>"),o:w("O<q>"),eo:w("O<PW>"),p:w("O<v>"),d:w("O<iR>"),dF:w("O<Q4>"),gR:w("O<bcE>"),bl:w("O<Ge>"),h:w("O<AF>"),b:w("O<hN>"),x:w("O<hp>"),aQ:w("O<Qy>"),fG:w("O<bsQ>"),X:w("O<pJ>"),u:w("O<P>"),n:w("O<I>"),t:w("O<G>"),dS:w("O<aC?>"),cA:w("O<cj>"),eF:w("cx<ah<af>>"),dg:w("ai<I>"),j:w("ai<@>"),e:w("a8<m,@>"),G:w("a8<@,@>"),w:w("iC"),P:w("cv"),q:w("cL"),aU:w("aD"),dx:w("u"),dc:w("fW"),ej:w("JB"),c:w("kr"),cE:w("aa3<G>"),a6:w("+(I,I)"),c5:w("dy<G>"),cR:w("Y_"),fd:w("fo"),cH:w("awp"),N:w("m"),c0:w("Cz"),ec:w("jf<m>"),dZ:w("b8O"),e7:w("bq<I>"),cv:w("q"),W:w("bQ<m>"),ac:w("bQ<G>"),cI:w("jZ<m>"),am:w("Y<mi>"),fZ:w("Y<Fp>"),cc:w("Y<m>"),dD:w("Y<G>"),c1:w("ho"),gh:w("CJ"),gf:w("Q4"),bB:w("bcZ"),c9:w("bi7"),y:w("P"),i:w("I"),A:w("@"),S:w("G"),g7:w("MQ?"),eT:w("N_?"),bM:w("ai<@>?"),dy:w("a8<m,@>?"),fF:w("a8<@,@>?"),cU:w("qe?"),di:w("cj"),H:w("~")}})();(function constants(){var w=a.makeConstList
B.b0f=new A.ey(!0,"The water is on and nothing leaks. Perfect job!",!1,"")
B.b0g=new A.ey(!0,"Primer and paint rolled on.",!1,"")
B.b0h=new A.ey(!1,"This call is over. Start a new one.",!1,"")
B.b0i=new A.ey(!0,"Recorded.",!1,"")
B.b0j=new A.ey(!1,"That is not a place for a sheet.",!1,"")
B.b0k=new A.ey(!0,"Sanded smooth. Wear a mask: the dust is bad to breathe.",!1,"")
B.acE=new A.ey(!1,"There is no device here.",!1,"")
B.b0l=new A.ey(!0,"You look closely. Everything looks fine here.",!1,"")
B.b0m=new A.ey(!1,"ZAP! You were shocked badly and it was your last life. Always turn the breaker OFF and test before you touch wires.",!0,"shock")
B.b0n=new A.ey(!0,"Paper tape pressed into the seam.",!1,"")
B.b0o=new A.ey(!1,"STOP! The breaker is ON, so this box is live (120 volts). Nobody puts a device into a live box. Turn the breaker OFF first, test that the wires are dead, then put the device in.",!1,"")
B.b0p=new A.ey(!0,"Unplugged.",!1,"")
B.b0q=new A.ey(!0,"Breaker OFF. It is safe to work on the wires.",!1,"")
B.b0r=new A.ey(!1,"ZAP! You were shocked badly. That was your last life: the job is over. Lesson: ALWAYS turn the breaker OFF and test the wires before you touch them.",!0,"shock")
B.b0s=new A.ey(!1,"There is nothing there.",!1,"")
B.b0t=new A.ey(!1,"The outlet is burnt. Nothing works. Pull it out and put in a new one.",!0,"")
B.b0u=new A.ey(!0,"The water is on and nothing leaks yet, but the job is not finished.",!1,"")
B.b0v=new A.ey(!0,"Sheet hung. Now screw it to the studs.",!1,"")
B.b0w=new A.ey(!0,"Hole drilled through the middle of the stud, at the cable height. Holes go in the center so a nail cannot reach the cable.",!1,"")
B.b0x=new A.ey(!0,"Plugged in. Nothing happens because the breaker is off. Turn it on to test.",!1,"")
B.b0y=new A.ey(!0,"You flipped the tripped breaker fully OFF. Fix the problem before you turn it on again.",!1,"")
B.b0z=new A.ey(!0,"Click.",!1,"")
B.b0A=new A.ey(!0,"The wires are folded back and the device is in the box. Now put the cover on.",!1,"")
B.b0B=new A.ey(!0,"Breaker OFF. The wires on this circuit are dead now. (Always test them to be sure.)",!1,"")
B.b0C=new A.ey(!1,"Nothing is wet.",!1,"")
B.b0D=new A.ey(!0,"Power is on.",!1,"")
B.b0E=new A.ey(!0,"Water OFF at the main valve. You can cut into the pipes safely now.",!1,"")
B.b0F=new A.ey(!0,"Opening cut around the box with the drywall saw. Keep it tight: the plate has to cover the edge.",!1,"")
B.b0G=new A.ey(!0,"Device pulled out of the box.",!1,"")
B.b0H=new A.ey(!0,"Screw set just below the paper, not through it.",!1,"")
B.b0I=new A.ey(!1,"ZAP! You touched a live wire. In Learn mode you are not hurt, but in real life this can kill. Switch the breaker OFF and test the wires first.",!0,"shock")
B.b0J=new A.ey(!0,"Cover on. Now you can turn the breaker on and test.",!1,"")
B.WY=new A.ey(!1,"",!1,"")
B.b0K=new A.ey(!0,"Device taken out. You can put it somewhere else, or put in a new one.",!1,"")
B.b0L=new A.ey(!0,"Breaker back ON.",!1,"")
B.b0M=new A.ey(!1,"That is not a stud.",!1,"")
B.b0N=new A.ey(!0,"Off.",!1,"")
B.b0O=new A.ey(!1,"Nothing to flip yet.",!1,"")
B.b0P=new A.ey(!0,"Wire taken off.",!1,"")
B.b0Q=new A.ey(!0,"The mud is dry.",!1,"")
B.b0R=new A.ey(!0,"Breaker reset.",!1,"")
B.b0S=new A.ey(!0,"Box mounted. (Careful: this is not a fan-rated box. A fan on it could fall.)",!1,"")
B.fT2=new C.y("Tap a piece of furniture, or add one:",null,D.As,null,null,null,null,null,null,null,null,null)
B.epB=new C.D(D.ns,B.fT2,null)
B.b0Z=new C.bN(D.a5,null,null,B.epB,null)
B.b1y=new C.lI(D.ay,x.dw)
B.ad6=new A.lJ(0,0,0,0,1)
B.b36=new C.bh(D.jK,D.JM,D.jK,D.JM)
B.b3p=new C.bh(D.JM,D.jK,D.JM,D.jK)
B.adI=new C.aZ(0,290,0,1/0)
B.b3b=new C.bh(H.U6,H.U6,D.bH,D.bH)
B.bu5=new C.t(1,0.12156862745098039,0.13725490196078433,0.18823529411764706,D.q)
B.bud=new C.t(1,0.054901960784313725,0.06274509803921569,0.09411764705882353,D.q)
B.d8p=w([B.bu5,B.bud],x.O)
B.c40=new C.a9(D.b0,D.b6,D.x,B.d8p,null,null)
B.b6a=new C.o(null,null,H.adw,B.b3b,null,B.c40,D.n)
B.FT=new C.t(1,0.08627450980392157,0.10588235294117647,0.1411764705882353,D.q)
B.b4z=new C.bG(D.a0,D.a0,Ag.vJ,D.a0)
B.b70=new C.o(B.FT,null,B.b4z,null,null,null,D.n)
B.b3m=new C.bh(D.mZ,D.ih,D.ih,D.ih)
B.b76=new C.o(D.aK,null,null,B.b3m,null,null,D.n)
B.fTJ=new C.y("\u2600\ufe0f Let it dry",null,V.Ap,null,null,null,null,null,null,null,null,null)
B.bbd=new C.cf(D.A,null,null,B.fTJ,null)
B.fTt=new C.y("\u23e9 Skip to the wiring",null,V.Ap,null,null,null,null,null,null,null,null,null)
B.bbl=new C.cf(D.A,null,null,B.fTt,null)
B.fHK=new C.y("\ud83c\udfd7\ufe0f",null,D.pJ,null,null,null,null,null,null,null,null,null)
B.bbC=new C.cf(D.A,null,null,B.fHK,null)
B.fHx=new C.y("\ud83c\udfe0",null,D.aVc,null,null,null,null,null,null,null,null,null)
B.bc3=new C.cf(D.A,null,null,B.fHx,null)
B.bdt=new C.t(1,0.9294117647058824,0.9098039215686274,0.8627450980392157,D.q)
B.LX=new C.t(1,0.1803921568627451,0.20392156862745098,0.25098039215686274,D.q)
B.aeW=new C.t(1,0.16470588235294117,0.10588235294117647,0.07058823529411765,D.q)
B.aeZ=new C.t(1,0.7215686274509804,0.7450980392156863,0.7764705882352941,D.q)
B.bdF=new C.t(1,0.9725490196078431,0.9647058823529412,0.9333333333333333,D.q)
B.vP=new C.t(1,0.5450980392156862,0.3686274509803922,0.20392156862745098,D.q)
B.bdL=new C.t(1,0.5568627450980392,0.5568627450980392,0.5882352941176471,D.q)
B.af3=new C.t(1,0.611764705882353,0.5568627450980392,0.4588235294117647,D.q)
B.bdV=new C.t(1,0.8862745098039215,0.8666666666666667,0.807843137254902,D.q)
B.Fn=new C.t(1,0.24705882352941178,0.5607843137254902,0.30980392156862746,D.q)
B.be1=new C.t(1,0.8392156862745098,0.9333333333333333,0.984313725490196,D.q)
B.af8=new C.t(1,0.7058823529411765,0.7294117647058823,0.7686274509803922,D.q)
B.m_=new C.t(1,0.9450980392156862,0.9450980392156862,0.9176470588235294,D.q)
B.ber=new C.t(1,0.1843137254901961,0.43529411764705883,0.8392156862745098,D.q)
B.bes=new C.t(1,0.9098039215686274,0.9254901960784314,0.9372549019607843,D.q)
B.beu=new C.t(1,0.4823529411764706,0.5098039215686274,0.5450980392156862,D.q)
B.beB=new C.t(1,0.7098039215686275,0.8470588235294118,1,D.q)
B.beE=new C.t(1,0.10588235294117647,0.4980392156862745,0.20392156862745098,D.q)
B.afl=new C.t(1,0.7215686274509804,0.7450980392156863,0.7725490196078432,D.q)
B.vR=new C.t(1,0.8196078431372549,0.29411764705882354,0.22745098039215686,D.q)
B.beI=new C.t(1,0.9019607843137255,0.9176470588235294,0.9411764705882353,D.q)
B.nY=new C.t(1,0.5450980392156862,0.3686274509803922,0.23529411764705882,D.q)
B.afn=new C.t(1,0.1803921568627451,0.2,0.23137254901960785,D.q)
B.afo=new C.t(1,0.8509803921568627,0.8274509803921568,0.7725490196078432,D.q)
B.afs=new C.t(1,0.6549019607843137,0.6784313725490196,0.7098039215686275,D.q)
B.hg=new C.t(1,0.16862745098039217,0.17647058823529413,0.2,D.q)
B.bfb=new C.t(1,0.9490196078431372,0.9490196078431372,0.9490196078431372,D.q)
B.afx=new C.t(1,0.13333333333333333,0.6274509803921569,0.4196078431372549,D.q)
B.Fp=new C.t(1,0.8980392156862745,0.7529411764705882,0.4823529411764706,D.q)
B.M6=new C.t(1,0.8156862745098039,0.5098039215686274,0.27450980392156865,D.q)
B.Y_=new C.t(1,0.5411764705882353,0.41568627450980394,0.2784313725490196,D.q)
B.afA=new C.t(1,0.4980392156862745,0.7137254901960784,0.9098039215686274,D.q)
B.afB=new C.t(1,0.1843137254901961,0.4196078431372549,0.23529411764705882,D.q)
B.Y2=new C.t(1,0.2980392156862745,0.5450980392156862,0.2901960784313726,D.q)
B.vS=new C.t(1,0.788235294117647,0.6274509803921569,0.22745098039215686,D.q)
B.afH=new C.t(1,0.9411764705882353,0.5411764705882353,0.1411764705882353,D.q)
B.bgc=new C.t(1,0.7254901960784313,0.7019607843137254,0.6274509803921569,D.q)
B.Fv=new C.t(1,0.9921568627450981,0.9882352941176471,0.9686274509803922,D.q)
B.Y6=new C.t(1,0.5568627450980392,0.5843137254901961,0.6196078431372549,D.q)
B.bgs=new C.t(1,0.47843137254901963,0.35294117647058826,0.22745098039215686,D.q)
B.hP=new C.t(1,0.788235294117647,0.807843137254902,0.8392156862745098,D.q)
B.afR=new C.t(1,0.4196078431372549,0.45098039215686275,0.5019607843137255,D.q)
B.afS=new C.t(1,0.5568627450980392,0.35294117647058826,0.2901960784313726,D.q)
B.Bh=new C.t(1,0.9294117647058824,0.9176470588235294,0.8784313725490196,D.q)
B.bgY=new C.t(1,0.8470588235294118,0.8196078431372549,0.7450980392156863,D.q)
B.bhj=new C.t(1,0.9137254901960784,0.7254901960784313,0.28627450980392155,D.q)
B.bhu=new C.t(1,0.22745098039215686,0.22745098039215686,0.24705882352941178,D.q)
B.bhC=new C.t(1,0.5490196078431373,0.5764705882352941,0.6078431372549019,D.q)
B.xX=new C.t(1,0.22745098039215686,0.24705882352941178,0.2784313725490196,D.q)
B.Yc=new C.t(1,0.8980392156862745,0.8980392156862745,0.8666666666666667,D.q)
B.Mg=new C.t(1,0.10588235294117647,0.11372549019607843,0.13333333333333333,D.q)
B.bhQ=new C.t(1,0.22745098039215686,0.23529411764705882,0.25882352941176473,D.q)
B.Yg=new C.t(1,0.30980392156862746,0.6588235294117647,0.3764705882352941,D.q)
B.bhW=new C.t(1,0.48627450980392156,0.7686274509803922,1,D.q)
B.ag6=new C.t(1,0.8509803921568627,0.803921568627451,0.7215686274509804,D.q)
B.ag7=new C.t(1,0.4196078431372549,0.2901960784313726,0.16862745098039217,D.q)
B.FA=new C.t(1,0.11764705882352941,0.11764705882352941,0.12549019607843137,D.q)
B.bi3=new C.t(1,0.9137254901960784,0.9058823529411765,0.8627450980392157,D.q)
B.bi4=new C.t(1,0.8862745098039215,0.8745098039215686,0.8235294117647058,D.q)
B.aga=new C.t(1,0.9490196078431372,0.7803921568627451,0.611764705882353,D.q)
B.agb=new C.t(1,0.6039215686274509,0.6352941176470588,0.6784313725490196,D.q)
B.bi8=new C.t(1,0.42745098039215684,0.2901960784313726,1,D.q)
B.bid=new C.t(1,0.3686274509803922,0.27450980392156865,0.18823529411764706,D.q)
B.big=new C.t(1,0.9058823529411765,0.8470588235294118,0.7450980392156863,D.q)
B.biq=new C.t(1,0.5411764705882353,0.4823529411764706,0.41568627450980394,D.q)
B.biu=new C.t(1,0.24705882352941178,0.16470588235294117,0.10980392156862745,D.q)
B.agi=new C.t(1,0.34901960784313724,0.3176470588235294,0.29411764705882354,D.q)
B.bix=new C.t(1,0.24705882352941178,0.6470588235294118,0.3568627450980392,D.q)
B.agj=new C.t(1,0.13725490196078433,0.14901960784313725,0.16862745098039217,D.q)
B.biF=new C.t(1,0.8117647058823529,0.792156862745098,0.7411764705882353,D.q)
B.Yl=new C.t(1,0.8117647058823529,0.8901960784313725,0.9176470588235294,D.q)
B.agn=new C.t(1,0.7215686274509804,0.7450980392156863,0.7843137254901961,D.q)
B.biN=new C.t(1,0.9490196078431372,0.6941176470588235,0,D.q)
B.Mj=new C.t(1,0.3333333333333333,0.396078431372549,0.4823529411764706,D.q)
B.agr=new C.t(1,0.5529411764705883,0.7843137254901961,1,D.q)
B.Yo=new C.t(1,1,0.9019607843137255,0.5019607843137255,D.q)
B.bj9=new C.t(1,0.5411764705882353,0.1843137254901961,0.22745098039215686,D.q)
B.Ml=new C.t(1,0.9490196078431372,0.7607843137254902,0.10588235294117647,D.q)
B.Yp=new C.t(1,0.8274509803921568,0.23137254901960785,0.1843137254901961,D.q)
B.FH=new C.t(1,0.8627450980392157,0.8392156862745098,0.7725490196078432,D.q)
B.agz=new C.t(1,0.9490196078431372,0.9411764705882353,0.9019607843137255,D.q)
B.bju=new C.t(1,0.8509803921568627,0.7725490196078432,0.6392156862745098,D.q)
B.bjy=new C.t(1,0.9686274509803922,0.9607843137254902,0.9333333333333333,D.q)
B.agE=new C.t(1,0.6823529411764706,0.6941176470588235,0.7372549019607844,D.q)
B.nf=new C.t(1,0.1843137254901961,0.49019607843137253,0.8823529411764706,D.q)
B.bjJ=new C.t(1,0.788235294117647,0.7176470588235294,0.6078431372549019,D.q)
B.Bm=new C.t(1,0.8901960784313725,0.6627450980392157,0.10980392156862745,D.q)
B.Mq=new C.t(1,0.7137254901960784,0.7372549019607844,0.7686274509803922,D.q)
B.bjO=new C.t(1,0.8431372549019608,0.8509803921568627,0.8784313725490196,D.q)
B.Yu=new C.t(1,0.7215686274509804,0.7529411764705882,0.8,D.q)
B.bjZ=new C.t(1,0.22745098039215686,0.49019607843137253,0.26666666666666666,D.q)
B.vV=new C.t(1,0.9019607843137255,0.8823529411764706,0.8352941176470589,D.q)
B.Yx=new C.t(1,0.3686274509803922,0.17647058823529413,0.13725490196078433,D.q)
B.bkc=new C.t(1,0.0196078431372549,0.027450980392156862,0.050980392156862744,D.q)
B.agR=new C.t(1,0.6039215686274509,0.6274509803921569,0.6588235294117647,D.q)
B.FK=new C.t(1,0.09019607843137255,0.09411764705882353,0.10588235294117647,D.q)
B.Bn=new C.t(1,0.9725490196078431,0.9725490196078431,0.9568627450980393,D.q)
B.Yz=new C.t(1,0.5411764705882353,0.5647058823529412,0.6,D.q)
B.bkq=new C.t(1,0.2901960784313726,0.12156862745098039,0.15294117647058825,D.q)
B.Mu=new C.t(1,0.9019607843137255,0.8862745098039215,0.8352941176470589,D.q)
B.agW=new C.t(1,0.9450980392156862,0.9568627450980393,0.9725490196078431,D.q)
B.bkH=new C.t(1,0.9019607843137255,0.9019607843137255,0.8784313725490196,D.q)
B.bkR=new C.t(1,0.29411764705882354,0.21176470588235294,0.12941176470588237,D.q)
B.bkZ=new C.t(1,0.5607843137254902,0.596078431372549,0.6392156862745098,D.q)
B.bl0=new C.t(1,1,0.6392156862745098,0.2784313725490196,D.q)
B.ah1=new C.t(1,0.5529411764705883,0.5294117647058824,0.4627450980392157,D.q)
B.YC=new C.t(1,0.8941176470588236,0.9058823529411765,0.9176470588235294,D.q)
B.iB=new C.t(1,0.7686274509803922,0.6039215686274509,0.3843137254901961,D.q)
B.blo=new C.t(1,0.08235294117647059,0.06274509803921569,0.047058823529411764,D.q)
B.ahc=new C.t(1,1,0.35294117647058826,0.12156862745098039,D.q)
B.ahd=new C.t(1,0.5411764705882353,0.5607843137254902,0.596078431372549,D.q)
B.Mw=new C.t(1,0.16470588235294117,0.10196078431372549,0.06274509803921569,D.q)
B.ahf=new C.t(1,0.07058823529411765,0.22745098039215686,0.5098039215686274,D.q)
B.ahg=new C.t(1,0.5411764705882353,0.29411764705882354,0.29411764705882354,D.q)
B.blC=new C.t(1,0.10588235294117647,0.13333333333333333,0.17254901960784313,D.q)
B.Mx=new C.t(1,0.9098039215686274,0.8509803921568627,0.7372549019607844,D.q)
B.blE=new C.t(1,0.48627450980392156,0.3215686274509804,0.18823529411764706,D.q)
B.o9=new C.t(1,1,0.9450980392156862,0.6588235294117647,D.q)
B.ahl=new C.t(1,0.1411764705882353,0.10196078431372549,0.06274509803921569,D.q)
B.bm3=new C.t(1,0.5411764705882353,0.5411764705882353,0.5176470588235295,D.q)
B.bm5=new C.t(1,0.9647058823529412,0.9568627450980393,0.9254901960784314,D.q)
B.MA=new C.t(1,0.47843137254901963,0.23137254901960785,0.1803921568627451,D.q)
B.bmf=new C.t(1,0.3333333333333333,0.6274509803921569,0.3333333333333333,D.q)
B.ahr=new C.t(1,0.7058823529411765,0.3254901960784314,0.3254901960784314,D.q)
B.bmn=new C.t(1,0.6078431372549019,0.6078431372549019,0.592156862745098,D.q)
B.Bs=new C.t(1,0.9568627450980393,0.9450980392156862,0.9176470588235294,D.q)
B.bmt=new C.t(1,0.6078431372549019,0.23137254901960785,0.2901960784313726,D.q)
B.rp=new C.t(1,0.8862745098039215,0.23137254901960785,0.23137254901960785,D.q)
B.q3=new C.t(1,0.9490196078431372,0.9490196078431372,0.9254901960784314,D.q)
B.bmy=new C.t(1,0.30980392156862746,0.615686274509804,0.3568627450980392,D.q)
B.bmD=new C.t(1,0.6549019607843137,0.6901960784313725,0.7294117647058823,D.q)
B.ahw=new C.t(1,0.788235294117647,0.8117647058823529,0.8392156862745098,D.q)
B.YP=new C.t(1,0.611764705882353,0.796078431372549,1,D.q)
B.bmE=new C.t(1,0.9294117647058824,0.9215686274509803,0.8941176470588236,D.q)
B.YR=new C.t(1,0.8392156862745098,0.6823529411764706,0.4470588235294118,D.q)
B.ahz=new C.t(1,0.9098039215686274,0.9098039215686274,0.9098039215686274,D.q)
B.MC=new C.t(1,0.2901960784313726,0.2980392156862745,0.32941176470588235,D.q)
B.YT=new C.t(1,0.3686274509803922,0.43137254901960786,0.5176470588235295,D.q)
B.bnn=new C.t(1,0.20784313725490197,0.47843137254901963,0.26666666666666666,D.q)
B.bnq=new C.t(1,0.3568627450980392,0.10196078431372549,0.09019607843137255,D.q)
B.ahK=new C.t(1,0.23137254901960785,0.1843137254901961,0.14901960784313725,D.q)
B.ahL=new C.t(1,0.8509803921568627,0.788235294117647,0.6588235294117647,D.q)
B.bnr=new C.t(1,0.4196078431372549,0.6666666666666666,0.35294117647058826,D.q)
B.kI=new C.t(1,0.9686274509803922,0.9568627450980393,0.9254901960784314,D.q)
B.ahO=new C.t(1,0.22745098039215686,0.23921568627450981,0.26666666666666666,D.q)
B.ahP=new C.t(1,0.13333333333333333,0.1450980392156863,0.16862745098039217,D.q)
B.ahQ=new C.t(1,0.9568627450980393,0.9450980392156862,0.9098039215686274,D.q)
B.u_=new C.t(1,0.16470588235294117,0.1450980392156863,0.13725490196078433,D.q)
B.bnL=new C.t(1,0.5411764705882353,0.23137254901960785,0.23137254901960785,D.q)
B.ahX=new C.t(1,0.9450980392156862,0.9294117647058824,0.8784313725490196,D.q)
B.Bx=new C.t(1,0.796078431372549,0.8156862745098039,0.8392156862745098,D.q)
B.YZ=new C.t(1,0.8980392156862745,0.7254901960784313,0.11764705882352941,D.q)
B.ahZ=new C.t(1,0.5607843137254902,0.8156862745098039,1,D.q)
B.bo9=new C.t(1,0.7490196078431373,0.8901960784313725,1,D.q)
B.boc=new C.t(1,0.11764705882352941,0.13333333333333333,0.1568627450980392,D.q)
B.ai5=new C.t(1,0.6039215686274509,0.4196078431372549,0.24705882352941178,D.q)
B.Z2=new C.t(1,0.10588235294117647,0.10588235294117647,0.11372549019607843,D.q)
B.bow=new C.t(1,0.9529411764705882,0.9058823529411765,0.6313725490196078,D.q)
B.aic=new C.t(1,0.9490196078431372,0.9490196078431372,0.9333333333333333,D.q)
B.boE=new C.t(1,0.6313725490196078,0.48627450980392156,0.2980392156862745,D.q)
B.boW=new C.t(1,0.6274509803921569,0.6509803921568628,0.6823529411764706,D.q)
B.aie=new C.t(1,0.9176470588235294,0.9019607843137255,0.8549019607843137,D.q)
B.bp8=new C.t(0,0.2196078431372549,0.7411764705882353,0.9725490196078431,D.q)
B.bpg=new C.t(1,0.8156862745098039,0.35294117647058826,0.22745098039215686,D.q)
B.bpm=new C.t(1,0.8509803921568627,0.788235294117647,0.6274509803921569,D.q)
B.bpn=new C.t(1,0.16470588235294117,0.16470588235294117,0.18823529411764706,D.q)
B.air=new C.t(1,0.9294117647058824,0.9372549019607843,0.9490196078431372,D.q)
B.Z7=new C.t(1,0.9490196078431372,0.9176470588235294,0.8274509803921568,D.q)
B.aiy=new C.t(1,0.10588235294117647,0.07058823529411765,0.03529411764705882,D.q)
B.bpJ=new C.t(1,0.3607843137254902,0.7019607843137254,0.9098039215686274,D.q)
B.aiz=new C.t(1,0.043137254901960784,0.043137254901960784,0.050980392156862744,D.q)
B.ML=new C.t(1,0.24705882352941178,0.26666666666666666,0.3137254901960784,D.q)
B.aiB=new C.t(1,0.6039215686274509,0.8156862745098039,0.9607843137254902,D.q)
B.bpT=new C.t(1,0.12549019607843137,0.13333333333333333,0.14901960784313725,D.q)
B.G2=new C.t(1,0.8862745098039215,0.27058823529411763,0.35294117647058826,D.q)
B.bq8=new C.t(1,0.12156862745098039,0.43529411764705883,0.2627450980392157,D.q)
B.bqa=new C.t(0.8509803921568627,0.06666666666666667,0.07450980392156863,0.09411764705882353,D.q)
B.y9=new C.t(1,0.17254901960784313,0.4196078431372549,0.8392156862745098,D.q)
B.u3=new C.t(1,0.7607843137254902,0.4627450980392157,0.22745098039215686,D.q)
B.BA=new C.t(1,0.7254901960784313,0.7450980392156863,0.7764705882352941,D.q)
B.aiJ=new C.t(1,0.611764705882353,0.35294117647058826,0.27058823529411763,D.q)
B.bqC=new C.t(1,0.611764705882353,0.5882352941176471,0.5450980392156862,D.q)
B.aiR=new C.t(1,0.23137254901960785,0.1843137254901961,0.16470588235294117,D.q)
B.MU=new C.t(1,0.23137254901960785,0.49019607843137253,0.8784313725490196,D.q)
B.MV=new C.t(1,0.9686274509803922,0.9490196078431372,0.9019607843137255,D.q)
B.br4=new C.t(1,0.2,0.21176470588235294,0.23137254901960785,D.q)
B.br9=new C.t(1,0.7098039215686275,0.7333333333333333,0.7647058823529411,D.q)
B.bra=new C.t(1,0.9529411764705882,0.9450980392156862,0.9176470588235294,D.q)
B.brb=new C.t(1,0.9294117647058824,0.9294117647058824,0.9098039215686274,D.q)
B.brh=new C.t(1,0.9098039215686274,0.8941176470588236,0.8549019607843137,D.q)
B.brm=new C.t(1,0.23137254901960785,0.23137254901960785,0.25098039215686274,D.q)
B.brq=new C.t(1,0.1411764705882353,0.10588235294117647,0.09411764705882353,D.q)
B.G8=new C.t(1,0.7686274509803922,0.5411764705882353,0.11764705882352941,D.q)
B.brt=new C.t(1,0.43529411764705883,0.7137254901960784,1,D.q)
B.brA=new C.t(1,0.788235294117647,0.7019607843137254,0.5568627450980392,D.q)
B.brE=new C.t(1,0.9450980392156862,0.9019607843137255,0.8156862745098039,D.q)
B.brG=new C.t(1,0.9137254901960784,0.8980392156862745,0.8549019607843137,D.q)
B.aj9=new C.t(1,0.18823529411764706,0.2,0.22745098039215686,D.q)
B.aja=new C.t(1,0.6235294117647059,0.6588235294117647,0.7019607843137254,D.q)
B.MX=new C.t(1,0.9372549019607843,0.9372549019607843,0.9176470588235294,D.q)
B.ajc=new C.t(0.6666666666666666,1,0.16470588235294117,0.10196078431372549,D.q)
B.brX=new C.t(1,0.9372549019607843,0.9137254901960784,0.8627450980392157,D.q)
B.bs_=new C.t(1,0.9294117647058824,0.9019607843137255,0.8156862745098039,D.q)
B.Zo=new C.t(1,0.4196078431372549,0.24705882352941178,0.19215686274509805,D.q)
B.ajf=new C.t(1,0.12156862745098039,0.6392156862745098,0.2627450980392157,D.q)
B.bs5=new C.t(1,0.803921568627451,0.6274509803921569,0.2,D.q)
B.bsp=new C.t(1,0.788235294117647,0.8156862745098039,0.8549019607843137,D.q)
B.BE=new C.t(1,1,0.8392156862745098,0.0392156862745098,D.q)
B.ajo=new C.t(1,0.8901960784313725,0.8627450980392157,0.8117647058823529,D.q)
B.Zr=new C.t(1,0.3607843137254902,0.7019607843137254,1,D.q)
B.ajs=new C.t(1,0.48627450980392156,0.2901960784313726,0.17647058823529413,D.q)
B.Zs=new C.t(1,0.9568627450980393,0.9568627450980393,0.9411764705882353,D.q)
B.bsO=new C.t(1,0.8431372549019608,0.8,0.6588235294117647,D.q)
B.N0=new C.t(1,0.9176470588235294,0.9647058823529412,1,D.q)
B.bt8=new C.t(1,0.9450980392156862,0.9450980392156862,0.9254901960784314,D.q)
B.bt9=new C.t(1,0.9411764705882353,0.9411764705882353,0.9176470588235294,D.q)
B.btu=new C.t(1,0.9019607843137255,0.8745098039215686,0.796078431372549,D.q)
B.N5=new C.t(1,0.7254901960784313,0.6980392156862745,0.615686274509804,D.q)
B.ajE=new C.t(1,0.8431372549019608,0.16470588235294117,0.16470588235294117,D.q)
B.ajG=new C.t(1,0.9450980392156862,0.9372549019607843,0.9019607843137255,D.q)
B.N7=new C.t(1,0.47843137254901963,0.30980392156862746,0.1568627450980392,D.q)
B.ajI=new C.t(1,0.9294117647058824,0.9372549019607843,0.9529411764705882,D.q)
B.btY=new C.t(1,0.8509803921568627,0.8352941176470589,0.7843137254901961,D.q)
B.BI=new C.t(1,0.6901960784313725,0.5411764705882353,0.3568627450980392,D.q)
B.N9=new C.t(1,0.7647058823529411,0.792156862745098,0.8274509803921568,D.q)
B.i4=new C.t(1,0.6078431372549019,0.8274509803921568,0.9607843137254902,D.q)
B.bu7=new C.t(1,0.48627450980392156,0.2901960784313726,0.22745098039215686,D.q)
B.ZD=new C.t(1,0.7490196078431373,0.8901960784313725,0.9686274509803922,D.q)
B.ZE=new C.t(1,0.23137254901960785,0.6078431372549019,1,D.q)
B.ajO=new C.t(1,0.8509803921568627,0.8235294117647058,0.7607843137254902,D.q)
B.bug=new C.t(1,0.9568627450980393,0.9607843137254902,0.9725490196078431,D.q)
B.ZG=new C.t(1,1,0.6901960784313725,0.6588235294117647,D.q)
B.qe=new C.t(1,0.4196078431372549,0.2901960784313726,0.19607843137254902,D.q)
B.bum=new C.t(1,0.8509803921568627,0.7450980392156863,0.5725490196078431,D.q)
B.u8=new C.t(1,0.13333333333333333,0.14901960784313725,0.17254901960784313,D.q)
B.bup=new C.t(1,0.8117647058823529,0.788235294117647,0.7215686274509804,D.q)
B.but=new C.t(1,0.7176470588235294,0.4745098039215686,0.12156862745098039,D.q)
B.buz=new C.t(1,0.9294117647058824,0.9294117647058824,0.9176470588235294,D.q)
B.buA=new C.t(1,0.7529411764705882,0.5411764705882353,0.35294117647058826,D.q)
B.buC=new C.t(1,0.5450980392156862,0.4196078431372549,0.24705882352941178,D.q)
B.bvF=new A.tt("none","Nothing happens: the device gets no power.",!1,!1,!1)
B.bvG=new A.tt("none","It cannot be judged: the wire functions were not verified.",!1,!1,!1)
B.bvH=new A.tt("smoke","The loose connection overheats: it glows, smokes and chars the device. In a real wall this can start a fire.",!1,!1,!0)
B.bvI=new A.tt("none","It does not work as it should: some part runs wrongly or not at all. That does not tell you what is wrong, so check against the diagram.",!1,!1,!1)
B.bvJ=new A.tt("none","It runs. There is nothing to see, and that is the danger: with no ground, a fault would energize the metal parts.",!0,!1,!1)
B.bvK=new A.tt("none","It works as the diagram says.",!0,!1,!1)
B.bvL=new A.tt("none","It works, and every safety rule is met.",!0,!1,!1)
B.bvM=new A.tt("none","Nothing happens: it is dead. But the hot wire is connected, so it can still be live. No sparks, no smoke: that does not make it safe.",!1,!1,!1)
B.bvN=new A.tt("spark","Bare copper touches something it should not: sparks. The circuit is not safe.",!1,!1,!1)
B.bvO=new A.tt("none","It looks fine for now. But the support cannot carry the weight, and it can fall later.",!1,!1,!1)
B.bvP=new A.tt("fire","BANG. A short circuit: a flash, sparks, smoke and a flame at the device. The breaker trips and the device is ruined. The wires and the device are not safe to use.",!1,!0,!0)
B.bvQ=new A.tt("arc","Hot and neutral are reversed: the parts that should be dead are live. Blue arcs show the energized metal. The simulator does not let anything run on this: it is unsafe, even if a real appliance might seem to work.",!1,!1,!1)
B.bvR=new A.tt("arc","Current flows through the ground wire and the metal parts it joins. Arcs crackle at the box. This is a shock hazard.",!1,!1,!1)
B.bvS=new A.tt("spark","The neutral and ground are joined: the protective device trips with a snap of sparks.",!1,!0,!1)
B.bwK=new A.akF("expired","That order took too long and went back on the board.",0)
B.byG=new C.bc(55e3)
B.bzx=new C.Q(0,2,0,6)
B.bzS=new C.Q(10,0,16,0)
B.bzY=new C.Q(10,10,10,8)
B.bA3=new C.Q(10,16,10,14)
B.bAl=new C.Q(11,7,11,7)
B.a_D=new C.Q(11,9,11,9)
B.bBn=new C.Q(14,16,14,10)
B.bBu=new C.Q(14,4,14,28)
B.aln=new C.Q(14,8,14,24)
B.bBE=new C.Q(16,0,10,0)
B.bD3=new C.Q(1,0,0,0)
B.bDF=new C.Q(22,0,22,44)
B.bEm=new C.Q(26,8,26,8)
B.bEZ=new C.Q(4,22,4,12)
B.bFb=new C.Q(4,4,8,4)
B.bFd=new C.Q(4,6,12,4)
B.amC=new C.Q(9,0,9,0)
B.bG9=new C.Q(9,12,9,12)
B.bGa=new C.Q(9,6,2,6)
B.bGb=new C.Q(9,6,9,6)
B.fYX=new C.y("Practice mode (no explanations, real shocks)",null,D.aVk,null,null,null,null,null,null,null,null,null)
B.bGH=new C.by(1,D.bb,B.fYX,null)
B.fBh=new C.y("\ud83c\udfd8 Community",null,S.tp,null,null,null,null,null,null,null,null,null)
B.bb7=new C.cf(D.A,null,null,B.fBh,null)
B.bGP=new C.by(1,D.bb,B.bb7,null)
B.fFV=new C.y("House tour",null,D.n3,null,null,null,null,null,null,null,null,null)
B.fMs=new C.y("A film of your whole house, with every TV on.",null,D.aaf,null,null,null,null,null,null,null,null,null)
B.dor=w([B.fFV,D.bF,B.fMs],x.p)
B.bvD=new C.fk(D.ah,D.e,D.i,D.E,null,D.p,null,0,B.dor,null)
B.bGU=new C.by(1,D.bb,B.bvD,null)
B.fM2=new C.y("Construction Lab",null,S.tp,null,null,null,null,null,null,null,null,null)
B.fAG=new C.y("Wire it. Plumb it. Fix a house.",null,D.hu,null,null,null,null,null,null,null,null,null)
B.deQ=w([B.fM2,B.fAG],x.p)
B.bvm=new C.fk(D.ah,D.e,D.i,D.E,null,D.p,null,0,B.deQ,null)
B.bH3=new C.by(1,D.bb,B.bvm,null)
B.aUA=new C.F(!0,D.c,null,null,null,null,14,D.H,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fUn=new C.y("5 portions of food\n10 points",null,B.aUA,null,null,null,null,null,null,null,null,null)
B.bH8=new C.by(1,D.bb,B.fUn,null)
B.fGs=new C.y("3 doses of medicine\n12 points",null,B.aUA,null,null,null,null,null,null,null,null,null)
B.bHo=new C.by(1,D.bb,B.fGs,null)
B.fS_=new C.y("Drone film",null,D.fx,null,null,null,null,null,null,null,null,null)
B.bHt=new C.by(1,D.bb,B.fS_,null)
B.fYx=new C.y("Uber licence",null,D.fx,null,null,null,null,null,null,null,null,null)
B.bHV=new C.by(1,D.bb,B.fYx,null)
B.bIf=new A.n7(!1,"Tap a blue surface: a whole wall or the ceiling. The finishing is done on a whole surface at a time.",D.hr)
B.bIg=new A.n7(!0,"The cable starts at the breaker panel. Tap the box it must reach.",D.hr)
B.bIh=new A.n7(!0,"Hole drilled straight up through the top plate. This is where a cable goes up into the ceiling.",D.hr)
B.bIi=new A.n7(!0,"Outlet box nailed to the side of the stud, 16 inches up to its middle (the usual height), with its front level with the wood so the drywall will fit.",D.hr)
B.bIj=new A.n7(!0,"Ceiling box hung on the joist, level with the bottom of the board. The cable will come in through the side, and the light hangs from it.",D.hr)
B.bIk=new A.n7(!0,"Cable pulled back out of the box.",D.hr)
B.bIl=new A.n7(!0,"Sanded smooth with the pole sander until you cannot feel the joints. Wipe the dust off, then prime.",D.hr)
B.bIm=new A.n7(!0,"Hole drilled through the middle of the stud, 20 inches up. It is 3/4 inch wide and well away from both edges, so the stud stays strong and a nail cannot reach the cable.",D.hr)
B.bIn=new A.n7(!0,"Paper tape pressed into the wet mud over every seam and in every corner, and the extra mud scraped off flat. Let it dry.",D.hr)
B.bIo=new A.n7(!0,"Metal corner bead nailed round the opening. It protects the sharp corner and gives the mud a straight edge to finish against.",D.hr)
B.bJ2=new A.a5o(null,null)
B.a10=new A.rt(0,"tripped")
B.a11=new A.rt(1,"noHotWater")
B.a12=new A.rt(10,"wallHole")
B.a13=new A.rt(11,"clogged")
B.Oi=new A.rt(2,"nutLeak")
B.Oj=new A.rt(3,"pexLeak")
B.a14=new A.rt(5,"flicker")
B.a15=new A.rt(6,"burntOutlet")
B.a16=new A.rt(7,"gfciTripped")
B.a17=new A.rt(8,"runningToilet")
B.a18=new A.rt(9,"dripFaucet")
B.bKO=new A.ot(!1,"back",0,10)
B.bKP=new A.ot(!1,"back",0,9)
B.bKQ=new A.ot(!1,"back",50,0)
B.bKR=new A.ot(!1,"back",56,11)
B.bKS=new A.ot(!1,"back",-50,10)
B.bKT=new A.ot(!1,"left",40,9)
B.bKU=new A.ot(!1,"right",40,10)
B.a1h=new A.ot(!1,"right",50,5)
B.ans=new A.nR("tv100",'Giant 100"',"\ud83d\udcfa",89,!1)
B.bN3=new C.a0(61419,"MaterialIcons",!1)
B.bNf=new C.a0(61888,"MaterialIcons",!1)
B.bO_=new C.a0(62978,"MaterialIcons",!1)
B.bO5=new C.a0(63015,"MaterialIcons",!1)
B.bOs=new C.a0(63165,"MaterialIcons",!1)
B.OV=new C.a0(63228,"MaterialIcons",!1)
B.bOz=new C.a0(63251,"MaterialIcons",!1)
B.apk=new C.a0(63547,"MaterialIcons",!0)
B.bPK=new C.a0(983222,"MaterialIcons",!1)
B.bQ8=new C.a0(983510,"MaterialIcons",!1)
B.bQ9=new C.a0(983511,"MaterialIcons",!1)
B.bQl=new C.a0(983666,"MaterialIcons",!1)
B.aq3=new C.a0(983775,"MaterialIcons",!1)
B.a2W=new C.a0(983894,"MaterialIcons",!1)
B.bTP=new C.ae(D.on,null,null,null,null,null)
B.bVi=new C.ae(D.cx,26,D.aC,null,null,null)
B.bXN=new C.ae(D.mQ,null,null,null,null,null)
B.bYE=new C.ae(D.CK,22,D.c,null,null,null)
B.bYJ=new C.ae(D.k_,null,F.eY,null,null,null)
B.c_G=new C.ae(D.ol,null,null,null,null,null)
B.c0W=new C.ae(D.f1,null,D.aC,null,null,null)
B.c17=new C.ae(A2.Hx,null,D.bs,null,null,null)
B.h1p=new A.q(0,100,20)
B.c30=new A.hi(B.h1p,"No power in this house",D.bB,0)
B.hiB=new A.q(-60,40,130)
B.c31=new A.hi(B.hiB,"\ud83e\uddef Walk here to check the equipment",D.d0,0)
B.h36=new A.q(0,62,12)
B.c32=new A.hi(B.h36,"\ud83d\uded7 Elevator: walk onto the blue mat or tap",D.jy,19502)
B.h2Z=new A.q(0,50,80)
B.c33=new A.hi(B.h2Z,"\ud83d\udcda Walk here to teach the class",D.d0,0)
B.h3F=new A.q(105,52,100)
B.c34=new A.hi(B.h3F,"\ud83c\udf06 Balcony: step here to see the city",D.ej,0)
B.hiR=new A.q(-80,70,40)
B.c35=new A.hi(B.hiR,"\ud83d\udc69\u200d\u2695\ufe0f Nurse",D.cQ,0)
B.h33=new A.q(0,52,78)
B.c36=new A.hi(B.h33,"\ud83e\udeaa Walk here to get your Uber licence",D.jy,0)
B.hiS=new A.q(-84,84,120)
B.c37=new A.hi(B.hiS,"\ud83c\udf5e Food and drinks",D.d0,0)
B.h2N=new A.q(0,40,176)
B.c38=new A.hi(B.h2N,"\ud83c\udf4e Fresh fruit",D.el,0)
B.aXb=new A.q(0,26,312)
B.c39=new A.hi(B.aXb,"\u2b07 Walk here to go out",D.ej,0)
B.c3a=new A.hi(B.aXb,"\ud83d\uded7 Take the elevator down to go out",D.jy,0)
B.h9U=new A.q(90,40,56)
B.c3b=new A.hi(B.h9U,"\ud83d\udcd6 Library",D.dF,0)
B.h9p=new A.q(80,40,56)
B.c3c=new A.hi(B.h9p,"\ud83d\udd25 Fire drill",D.bB,0)
B.aX4=new A.q(0,100,36)
B.c3d=new A.hi(B.aX4,"\ud83e\udeaa NGMY Licence office",D.O,0)
B.aXP=new A.q(34,56,18)
B.c3e=new A.hi(B.aXP,"\ud83e\uddd1\u200d\ud83d\udcbc Clerk",D.cQ,0)
B.hhy=new A.q(-0.4,4.2,-2.4)
B.c3f=new A.hi(B.hhy,"LIVE 120 V",D.bB,0)
B.hiQ=new A.q(-80,52,66)
B.c3g=new A.hi(B.hiQ,"\ud83c\udfe5 Walk here to admit the sick",D.eP,0)
B.h3_=new A.q(0,50,84)
B.c3h=new A.hi(B.h3_,"\ud83d\udcb0 Counter: walk here to pay or sell",D.ej,0)
B.c3i=new A.hi(B.aXP,"\ud83e\uddd1\u200d\ud83d\udcbc Cashier",D.cQ,0)
B.c4h=new C.a9(D.a5,D.a8,D.x,N.aAd,null,null)
B.c5f=new C.a9(D.a5,D.a8,D.x,N.ayC,null,null)
B.brv=new C.t(1,0.2901960784313726,0.20392156862745098,0.0784313725490196,D.q)
B.bob=new C.t(1,0.12156862745098039,0.10196078431372549,0.07058823529411765,D.q)
B.bgI=new C.t(1,0.16470588235294117,0.12156862745098039,0.07058823529411765,D.q)
B.dqs=w([B.brv,B.bob,B.bgI],x.O)
B.c5k=new C.a9(D.az,D.aE,D.x,B.dqs,null,null)
B.biI=new C.t(1,0.8509803921568627,0.6039215686274509,0.11764705882352941,D.q)
B.dcJ=w([F.eY,B.biI],x.O)
B.c5s=new C.a9(D.az,D.aE,D.x,B.dcJ,null,null)
B.bqF=new C.t(1,0.0392156862745098,0.058823529411764705,0.1803921568627451,D.q)
B.btw=new C.t(1,0.1411764705882353,0.08235294117647059,0.3215686274509804,D.q)
B.cOi=w([E.agC,B.bqF,B.btw],x.O)
B.c69=new C.a9(D.b0,D.b6,D.x,B.cOi,null,null)
B.d9c=w([E.iC,E.Md,E.iC],x.O)
B.aso=new C.a9(D.a5,D.a8,D.x,B.d9c,null,null)
B.bo0=new C.t(1,0.8901960784313725,0.9254901960784314,0.9803921568627451,D.q)
B.d7F=w([D.c,B.bo0],x.O)
B.c7q=new C.a9(D.b0,D.b6,D.x,B.d7F,null,null)
B.buq=new C.t(1,0.07058823529411765,0.22745098039215686,0.47843137254901963,D.q)
B.d0P=w([E.iC,B.buq],x.O)
B.c7B=new C.a9(D.az,D.aE,D.x,B.d0P,null,null)
B.dra=w([D.cr,D.dd],x.O)
B.zq=new C.a9(D.b0,D.b6,D.x,B.dra,null,null)
B.clp=w([E.iC,E.Md],x.O)
B.c7Q=new C.a9(D.a5,D.a8,D.x,B.clp,null,null)
B.ehN={ground:0}
B.Ah=new C.dx(B.ehN,1,x.M)
B.uu=new A.fm(25,"Green screw: GROUND",B.Ah,y.H,!1,"ground")
B.ei4={lineA:0}
B.f7V=new C.dx(B.ei4,1,x.M)
B.bLO=new A.fm(23,"LINE screw 1 (top left)",B.f7V,"Hot leg 1 from the panel goes on the top left screw.",!1,"hot")
B.ei5={lineB:0}
B.f7I=new C.dx(B.ei5,1,x.M)
B.bLG=new A.fm(21,"LINE screw 2 (top right)",B.f7I,"Hot leg 2 from the panel goes on the top right screw.",!1,"hot")
B.ei7={loadA:0}
B.f7U=new C.dx(B.ei7,1,x.M)
B.bLm=new A.fm(24,"LOAD screw 1 (bottom left)",B.f7U,"Hot leg 1 to the heater goes on the bottom left screw: it is switched through from the top left one.",!1,"hot")
B.ei9={loadB:0}
B.f8x=new C.dx(B.ei9,1,x.M)
B.bLz=new A.fm(22,"LOAD screw 2 (bottom right)",B.f8x,"Hot leg 2 to the heater goes on the bottom right screw.",!1,"hot")
B.c8a=w([B.uu,B.bLO,B.bLG,B.bLm,B.bLz],x.r)
B.c8e=w(["flange","wax","toilet","bolts","valve","hosehot","hosecold","faucet","tail","trap","arm"],x.s)
B.a3B=w([0,0,0,0],x.t)
B.c8p=w([0,0,0,1],x.cA)
B.HX=w([0,144,264,408],x.n)
B.c8F=w([54,59.5],x.n)
B.chs=w([139,161],x.n)
B.chz=w([145,158],x.n)
B.cjw=w([15,25],x.n)
B.awa=w([16,28],x.n)
B.clg=w([Y.qU,A9.Ud,T.lq,W.aQr],x.f)
B.clk=w(["Look round the bare frame: the studs, the plates, the joists, the door, the window and the breaker panel.","Put an outlet box on a stud on each of the four walls (16 inches up).","Put a switch box on a stud beside the door (48 inches up).","Hang a ceiling box on a joist for the light.","Drill the studs the cable has to pass through (20 inches up, in the middle of the stud).","Pull the cable from the breaker panel to every box. The light is fed from the switch, through a hole in the top plate.","Every task is done: the house is wired."],x.s)
B.clt=w([1,1,1],x.cA)
B.clu=w([1,1,1,1],x.cA)
B.clL=w([1,-1],x.t)
B.hf2=new A.q(-57.8,-32,0)
B.b8B=new A.zc(0,"Outlet spot 1",!1,B.hf2,"low")
B.hfX=new A.q(-9.8,-32,0)
B.b8y=new A.zc(1,"Outlet spot 2",!1,B.hfX,"low")
B.hgy=new A.q(38.2,-32,0)
B.b8E=new A.zc(2,"Outlet spot 3",!1,B.hgy,"low")
B.heA=new A.q(-25.8,0,0)
B.b8C=new A.zc(3,"Switch spot 1",!1,B.heA,"switch")
B.hfQ=new A.q(22.2,0,0)
B.b8A=new A.zc(4,"Switch spot 2",!1,B.hfQ,"switch")
B.hid=new A.q(-30,48,40)
B.b8D=new A.zc(5,"Ceiling light spot",!0,B.hid,"light")
B.h6s=new A.q(30,48,40)
B.b8z=new A.zc(6,"Ceiling fan spot",!0,B.h6s,"fan")
B.uR=w([B.b8B,B.b8y,B.b8E,B.b8C,B.b8A,B.b8D,B.b8z],C.as("O<zc>"))
B.eB5=new C.z(4,6)
B.eBC=new C.z(5,7)
B.eC0=new C.z(6,8)
B.clW=w([T.lq,An.vj,E.Ua,E.Ub,B.eB5,B.eBC,B.eC0],C.as("O<+(G,G)>"))
B.clZ=w([2],x.t)
B.csI=w(["The living room has no power: find the tripped breaker in the panel and reset it.","The kitchen sink drips: pick the wrench and tighten the slip nut under the sink. (Build the house up to Fixtures to see the problems.)"],x.s)
B.hgf=new A.q(11,4.6,-6)
B.haf=new A.q(11,5.4,-7.85)
B.hfq=new A.q(3.4,5.4,-7.85)
B.aYn=new A.q(3.4,3.4,-7.85)
B.csK=w([B.hgf,B.haf,B.hfq,B.aYn],x.o)
B.h1=new A.q(1,0,0)
B.hL=new A.q(0,0,1)
B.oV=new A.q(-1,0,0)
B.pO=new A.q(0,0,-1)
B.a40=w([B.h1,B.hL,B.oV,B.pO],x.o)
B.cts=w([3],x.t)
B.ctC=w([300,800,1300,1800],x.n)
B.cvC=w([32,80],x.n)
B.hrB=new A.hp(0,0.7,2.2,2,0,0,0)
B.hrq=new A.hp(3,0.1,0.95,-0.42,-0.3,-0.2,0.05)
B.hrK=new A.hp(6.5,0,0.9,-0.38,0.3,0.2,0.05)
B.hrT=new A.hp(9.5,-0.9,1.15,0.1,0,0,0)
B.hrQ=new A.hp(12.5,-1.7,1.45,1.6,0,0,0)
B.hrp=new A.hp(15.5,-2.8,1,-0.35,0,0,0)
B.hrJ=new A.hp(18.5,-3.6,0.9,0.05,0,0,0)
B.hrN=new A.hp(21.5,-4.6,1.5,1.5,0,0,0)
B.hrC=new A.hp(24.5,-5.4,0.9,-0.4,0,0,0)
B.hrV=new A.hp(27.5,-6.28,0.75,0.05,0,0,0)
B.hrD=new A.hp(30,-6,2.4,1.7,0,0,0)
B.d60=w([B.hrB,B.hrq,B.hrK,B.hrT,B.hrQ,B.hrp,B.hrJ,B.hrN,B.hrC,B.hrV,B.hrD],x.x)
B.hrt=new A.hp(0,-3.14,1.2,-0.3,0,0,0)
B.hrm=new A.hp(4,-2.2,1.1,0,0,0,0)
B.hrU=new A.hp(8,-1.2,1,0.4,0,0,0)
B.hrr=new A.hp(12,-0.4,1,0.9,0,0,0)
B.hru=new A.hp(15,0.1,0.85,1.7,0,0,0)
B.hrl=new A.hp(18,0.3,0.8,0,0,0,0)
B.hrs=new A.hp(21,0,0.9,-0.2,0.35,0.25,0)
B.hry=new A.hp(24,0.6,1.4,0.1,-0.2,0,0)
B.hrz=new A.hp(27,1.4,1.2,0.8,0,0,0)
B.hrx=new A.hp(30,2.4,2.3,1.5,0,0,0)
B.ddn=w([B.hrt,B.hrm,B.hrU,B.hrr,B.hru,B.hrl,B.hrs,B.hry,B.hrz,B.hrx],x.x)
B.hrv=new A.hp(0,0.3,2.6,0.5,0,0,0)
B.hrP=new A.hp(3,0.1,1,0,0,0,0)
B.hrS=new A.hp(6,0,0.95,0.05,0.2,0.15,0)
B.hrG=new A.hp(9,-0.8,1.6,0.3,0,0,0)
B.hrL=new A.hp(12,-1.57,1,-0.2,0,0,0)
B.hrE=new A.hp(15,-2.4,1.5,0.9,0,0,0)
B.hrI=new A.hp(18,-3.14,1,0.1,0,0,0)
B.hrA=new A.hp(21,-3.9,1.5,0.6,0,0,0)
B.hrW=new A.hp(24,-4.71,1,-0.3,0,0,0)
B.hrn=new A.hp(27,-5.5,1.3,0.5,0,0,0)
B.hrk=new A.hp(30,-6.28,2.6,0.9,0,0,0)
B.cJl=w([B.hrv,B.hrP,B.hrS,B.hrG,B.hrL,B.hrE,B.hrI,B.hrA,B.hrW,B.hrn,B.hrk],x.x)
B.hrO=new A.hp(0,0,0.5,3.5,0,0,0)
B.hro=new A.hp(4,0.2,1,-0.3,0,0,0)
B.hrR=new A.hp(8,1,1,0,0,0,0)
B.hri=new A.hp(12,1.57,1.2,0.3,0,0,0)
B.hrM=new A.hp(16,3.14,1.4,1.2,0,0,0)
B.hrj=new A.hp(20,3.5,0.9,-0.35,0,0,0)
B.hrw=new A.hp(24,4.7,1.1,0,0,0,0)
B.hrF=new A.hp(28,6,1,0.3,0,0,0)
B.hrH=new A.hp(30,6.3,2.2,1.4,0,0,0)
B.d5F=w([B.hrO,B.hro,B.hrR,B.hri,B.hrM,B.hrj,B.hrw,B.hrF,B.hrH],x.x)
B.cxW=w([B.d60,B.ddn,B.cJl,B.d5F],C.as("O<ai<hp>>"))
B.cxX=w([380,820,1420,1660],x.n)
B.eig={neutral:0}
B.Ej=new C.dx(B.eig,1,x.M)
B.bLF=new A.fm(23,"Silver screw (top): NEUTRAL",B.Ej,y.G,!1,"neutral")
B.bLd=new A.fm(24,"Silver screw (bottom): NEUTRAL",B.Ej,y.G,!1,"neutral")
B.eix={switched:0}
B.f8F=new C.dx(B.eix,1,x.M)
B.bLb=new A.fm(21,"Brass screw (top): SWITCHED hot",B.f8F,"The top half is the switched one: the red wire that comes back from the wall switch goes here.",!1,"hot")
B.ehr={always:0}
B.f7F=new C.dx(B.ehr,1,x.M)
B.bLC=new A.fm(22,"Brass screw (bottom): ALWAYS hot",B.f7F,"The bottom half is always on: the black wire straight from the panel goes here.",!1,"hot")
B.cz9=w([B.uu,B.bLF,B.bLd,B.bLb,B.bLC],x.r)
B.eRz=new C.z(-820,640)
B.eCE=new C.z(820,640)
B.cze=w([B.eRz,B.eCE],x.f)
B.hz7=new A.pJ(0,-80,66,24)
B.hz8=new A.pJ(1,20,48,20)
B.hzg=new A.pJ(2,20,98,20)
B.hzh=new A.pJ(3,20,148,20)
B.czE=w([B.hz7,B.hz8,B.hzg,B.hzh],x.X)
B.Dl=w([],x.m)
B.b2D=new A.rj("highway","\ud83d\udee3\ufe0f","Highway board","Huge and wide, on two thick poles, with a walkway under it",420,170,150,B.Dl,0,1)
B.b2A=new A.rj("tower","\ud83d\uddfc","Tall tower sign","A big sign high up on one very thick pole",400,210,270,B.Dl,0,1)
B.b2G=new A.rj("neon","\ud83c\udf03","Neon board","A big black board with a glowing neon edge",380,190,120,B.Dl,0,1)
B.b2F=new A.rj("roof","\ud83c\udfe0","Rooftop board","A tall house with two big TVs, the NGMY carpet on its back, and a huge board on its roof",460,180,308,B.Dl,800,1)
B.b2z=new A.rj("screen","\ud83d\udcfa","Big screen","A giant TV screen on a stand",440,250,60,B.Dl,0,1)
B.b2H=new A.rj("gate","\ud83d\udeaa","Town gate","A huge arch with the board across it",600,200,200,B.Dl,0,1)
B.b2l=new A.lJ(-420,140,0.35,0,1)
B.b2j=new A.lJ(460,-420,-0.3,160,1.35)
B.d3R=w([B.b2l,B.b2j],x.m)
B.b2y=new A.rj("duo","\ud83e\udea7","Two far apart","Two separate boards: a near one and a taller one far behind it",320,160,140,B.d3R,0,0.7)
B.b2e=new A.lJ(-460,0,0,0,1)
B.b2m=new A.lJ(460,0,0,0,1)
B.dpC=w([B.b2e,B.ad6,B.b2m],x.m)
B.b2J=new A.rj("line3","\u2194\ufe0f","Three in a row","Three separate boards standing in one straight line",300,150,150,B.dpC,0,0.6)
B.b2c=new A.lJ(-950,250,0.5,0,1)
B.b2b=new A.lJ(150,-700,-0.2,220,1.55)
B.b2f=new A.lJ(1000,60,-0.55,0,0.9)
B.cUL=w([B.b2c,B.b2b,B.b2f],x.m)
B.b2B=new A.rj("far3","\ud83d\udef0\ufe0f","Three scattered far","Three separate boards far from each other, one of them tall and far behind",320,160,140,B.cUL,0,0.6)
B.b2r=new A.lJ(-360,300,0.15,0,1)
B.b2g=new A.lJ(360,300,-0.15,0,1)
B.b2o=new A.lJ(0,-120,0,100,1.25)
B.b2i=new A.lJ(-160,-640,0.1,260,1.6)
B.c8T=w([B.b2r,B.b2g,B.b2o,B.b2i],x.m)
B.b2E=new A.rj("skyline","\ud83c\udf06","Skyline","Four separate boards, the taller ones standing behind the shorter ones",300,150,130,B.c8T,0,0.6)
B.b2a=new A.lJ(-440,160,0,0,1)
B.b2p=new A.lJ(0,160,0,0,1)
B.b29=new A.lJ(440,160,0,0,1)
B.b2q=new A.lJ(-440,-420,3.141592653589793,130,1.2)
B.b2d=new A.lJ(0,-420,3.141592653589793,130,1.2)
B.b2n=new A.lJ(440,-420,3.141592653589793,130,1.2)
B.drj=w([B.b2a,B.b2p,B.b29,B.b2q,B.b2d,B.b2n],x.m)
B.b2C=new A.rj("lines6","\ud83d\udee4\ufe0f","Two lines of three","Six separate boards: a straight line of three facing front, and a taller line of three behind it facing back",280,140,140,B.drj,0,0.6)
B.b2k=new A.lJ(0,300,0,0,1)
B.b27=new A.lJ(0,-300,3.141592653589793,0,1)
B.b2h=new A.lJ(-560,0,-1.5707963267948966,0,1)
B.b28=new A.lJ(560,0,1.5707963267948966,0,1)
B.dwp=w([B.b2k,B.b27,B.b2h,B.b28],x.m)
B.b2I=new A.rj("scatter","\ud83c\udf10","Billboard park","Four separate boards: one at the front, one at the back and one on each side, all facing out",320,160,150,B.dwp,0,0.6)
B.a45=w([B.b2D,B.b2A,B.b2G,B.b2F,B.b2z,B.b2H,B.b2y,B.b2J,B.b2B,B.b2E,B.b2C,B.b2I],C.as("O<rj>"))
B.dDn=new A.ib(-134,-36,16,44)
B.dDa=new A.ib(34,118,30,66)
B.dDb=new A.ib(34,118,80,116)
B.dD9=new A.ib(34,118,130,166)
B.dDo=new A.ib(-134,-76,140,160)
B.czI=w([B.dDn,B.dDa,B.dDb,B.dD9,B.dDo],x.T)
B.czL=w([y.O,y.x,y.R,"Fasten the single black feed from the panel to the FEED screw (it powers both switches through a joined tab).","Fasten the black wire to the first light to the screw of switch 1.","Fasten the black wire to the second light to the screw of switch 2.",y.b,y.n],x.s)
B.eRj=new C.z(-600,1250)
B.eRh=new C.z(-520,1260)
B.eRf=new C.z(-460,1250)
B.eBn=new C.z(520,1280)
B.eBL=new C.z(600,1270)
B.eR3=new C.z(-300,1300)
B.cED=w([B.eRj,B.eRh,B.eRf,B.eBn,B.eBL,B.eR3],x.f)
B.cF4=w([460,900,1500,1740],x.n)
B.bjN=new C.t(1,0.5411764705882353,0.35294117647058826,0.23529411764705882,D.q)
B.agg=new C.t(1,0.10588235294117647,0.07058823529411765,0.06274509803921569,D.q)
B.buj=new C.t(1,0.8509803921568627,0.27450980392156865,0.49411764705882355,D.q)
B.af_=new C.t(1,0.23137254901960785,0.24705882352941178,0.3607843137254902,D.q)
B.eth=new A.tU(B.bjN,B.agg,B.buj,B.af_,"xbot",!1,0,1)
B.f5d=new A.FA(0,"Ama",0,2,B.eth,"A nurse who works nights.")
B.blY=new C.t(1,0.4196078431372549,0.27058823529411763,0.18823529411764706,D.q)
B.biY=new C.t(1,0.08627450980392157,0.06274509803921569,0.06274509803921569,D.q)
B.brI=new C.t(1,0.1803921568627451,0.5607843137254902,0.3568627450980392,D.q)
B.etl=new A.tU(B.blY,B.biY,B.brI,B.LX,"soldier",!1,0,1)
B.f5b=new A.FA(1,"Joseph",1,2,B.etl,"A student who is always hungry.")
B.bpE=new C.t(1,0.6274509803921569,0.4196078431372549,0.2784313725490196,D.q)
B.bk5=new C.t(1,0.2901960784313726,0.24705882352941178,0.4196078431372549,D.q)
B.etm=new A.tU(B.bpE,B.Mw,D.ay,B.bk5,"xbot",!1,0,1)
B.f5f=new A.FA(2,"Grace",3,4,B.etm,"A teacher who marks papers late.")
B.afd=new C.t(1,0.8784313725490196,0.6431372549019608,0.48627450980392156,D.q)
B.ajB=new C.t(1,0.1843137254901961,0.43529411764705883,0.7098039215686275,D.q)
B.etj=new A.tU(B.afd,D.ahp,B.ajB,B.LX,"soldier",!1,0,1)
B.f5c=new A.FA(3,"Daniel",6,8,B.etj,"A driver who sleeps in the day.")
B.bsk=new C.t(1,0.788235294117647,0.5450980392156862,0.3686274509803922,D.q)
B.bkh=new C.t(1,0.16862745098039217,0.17647058823529413,0.22745098039215686,D.q)
B.etf=new A.tU(B.bsk,B.agg,D.aD,B.bkh,"xbot",!1,0,1)
B.f5h=new A.FA(4,"Fatima",7,8,B.etf,"A baker who gets up at four.")
B.ajr=new C.t(1,0.47843137254901963,0.29411764705882354,0.18823529411764706,D.q)
B.bqO=new C.t(1,0.24705882352941178,0.22745098039215686,0.2,D.q)
B.eti=new A.tU(B.ajr,D.e2,D.d0,B.bqO,"soldier",!1,0,1)
B.f5e=new A.FA(5,"Papa Moses",10,-1,B.eti,"The oldest in the house. He watches TV all day.")
B.boq=new C.t(1,0.5490196078431373,0.3568627450980392,0.23137254901960785,D.q)
B.etk=new A.tU(B.boq,B.ahd,D.aw,B.af_,"xbot",!1,0,1)
B.f5g=new A.FA(6,"Mama Rose",9,-1,B.etk,"Cooks for everybody in the kitchen.")
B.D_=w([B.f5d,B.f5b,B.f5f,B.f5c,B.f5h,B.f5e,B.f5g],C.as("O<FA>"))
B.cH3=w([50,130],x.n)
B.cH4=w([50,140],x.n)
B.cHR=w([51,52,53],x.t)
B.eGR=new C.z(-9.5,4.6)
B.eJk=new C.z(-5.9,2.3)
B.ePt=new C.z(8.8,4.4)
B.cJ7=w([B.eGR,B.eJk,B.ePt],x.f)
B.cJu=w([5,35],x.n)
B.cK4=w([61,63],x.t)
B.cKh=w([62,64],x.t)
B.cLh=w([68,172],x.n)
B.bj3=new C.t(1,0.6039215686274509,0.30980392156862746,0.30980392156862746,D.q)
B.bus=new C.t(1,0.30980392156862746,0.47843137254901963,0.3686274509803922,D.q)
B.zt=w([B.nY,B.YT,B.bj3,B.bus,B.ahL,D.iF],x.O)
B.bqV=new C.t(1,0.23137254901960785,0.07058823529411765,0.07058823529411765,D.q)
B.bkg=new C.t(1,0.23137254901960785,0.1843137254901961,0.0392156862745098,D.q)
B.bhi=new C.t(1,0.043137254901960784,0.1803921568627451,0.09019607843137255,D.q)
B.cM8=w([B.bqV,B.bkg,B.bhi],x.O)
B.r6=new A.iR("ground","Bare copper \xb7 ground",B.u3,D.c,"ground")
B.ru=new C.t(1,0.14901960784313725,0.14901960784313725,0.16470588235294117,D.q)
B.hnr=new A.iR("feed","Black \xb7 hot feed from the panel",B.ru,D.c,"hot")
B.MD=new C.t(1,0.22745098039215686,0.1803921568627451,0.1803921568627451,D.q)
B.hnm=new A.iR("loadA","Black \xb7 to light 1",B.MD,D.c,"hot")
B.bgw=new C.t(1,0.16862745098039217,0.16862745098039217,0.2,D.q)
B.hno=new A.iR("loadB","Black \xb7 to light 2",B.bgw,D.c,"hot")
B.cMG=w([B.r6,B.hnr,B.hnm,B.hno],x.d)
B.ayv=w([72,73,74,75],x.t)
B.eR0=new C.z(-25,-15)
B.eyH=new C.z(25,-15)
B.eR_=new C.z(-25,15)
B.eyG=new C.z(25,15)
B.cQC=w([B.eR0,B.eyH,B.eR_,B.eyG],x.f)
B.cQM=w([-57.5,57.5],x.n)
B.h9R=new A.q(-125,292,-114.5)
B.hdF=new A.q(125,292,-114.5)
B.hgD=new A.q(125,208,-114.5)
B.hdj=new A.q(-125,208,-114.5)
B.cQU=w([B.h9R,B.hdF,B.hgD,B.hdj],x.o)
B.eXD=new C.b5(600,400,!0)
B.eX0=new C.b5(1030,400,!0)
B.eX1=new C.b5(1320,400,!0)
B.cR2=w([B.eXD,B.eX0,B.eX1],C.as("O<+(I,I,P)>"))
B.cR5=w([y.O,y.x,y.R,y.r,y.E,y.k,y.b,y.n],x.s)
B.cUU=w([y.O,"Look at the face: an L-shaped slot (W, neutral) and two slanted slots (X and Y, hot), and no ground hole. That is a NEMA 10-30, the old 3-wire dryer outlet. The neutral also grounds the dryer, which is only allowed in old houses.",y.r,y.E,y.k,y.b,y.n],x.s)
B.bKW=new A.nR("wall","Whole-wall TV","\ud83c\udfac",0,!0)
B.bL6=new A.nR("tv200",'Cinema 200"',"\ud83c\udfac",175,!1)
B.bKZ=new A.nR("tv150",'Cinema 150"',"\ud83c\udfac",130,!1)
B.bL0=new A.nR("bangtv",'Beovision TV 77"',"\ud83d\udcfa",66,!1)
B.bKV=new A.nR("sonytv",'Sony Bravia 75"',"\ud83d\udcfa",64,!1)
B.bL7=new A.nR("lgtv",'LG OLED 65"',"\ud83d\udcfa",56,!1)
B.bKY=new A.nR("tv",'Samsung Neo QLED 55"',"\ud83d\udcfa",48,!1)
B.bL5=new A.nR("appletv",'Apple TV 4K 50"',"\ud83d\udcfa",44,!1)
B.bL4=new A.nR("lamp","Table lamp","\ud83d\udca1",0,!1)
B.bL3=new A.nR("toaster","Toaster","\ud83c\udf5e",0,!1)
B.bKX=new A.nR("hairdryer","Hair dryer","\ud83d\udc87",0,!1)
B.bL_=new A.nR("washer","Washing machine","\ud83e\uddfa",0,!1)
B.bL1=new A.nR("dryer","Clothes dryer","\ud83c\udf00",0,!1)
B.bL2=new A.nR("range","Kitchen range","\ud83c\udf73",0,!1)
B.a4w=w([B.bKW,B.bL6,B.bKZ,B.ans,B.bL0,B.bKV,B.bL7,B.bKY,B.bL5,B.bL4,B.bL3,B.bKX,B.bL_,B.bL1,B.bL2],C.as("O<nR>"))
B.bjs=new C.t(1,0.7764705882352941,0.5254901960784314,0.25882352941176473,D.q)
B.bko=new C.t(1,0.43529411764705883,0.2901960784313726,0.1803921568627451,D.q)
B.brT=new C.t(1,0.6627450980392157,0.44313725490196076,0.29411764705882354,D.q)
B.ayO=w([F.mH,B.bjs,E.agf,B.bko,B.brT],x.O)
B.cYu=w([y.O,"Two cables come into the box: one from the breaker panel (LINE) and one going to the light (LOAD).","Twist the two white wires together with a wire nut. A switch does not cut the neutral.",y.R,"Fasten the black wire from the panel to one BRASS screw.","Fasten the black wire that goes to the light to the other BRASS screw.","Push the switch into the box, put the plate on and test with the power on."],x.s)
B.exm=new C.z(0,330)
B.eQQ=new C.z(-120,1080)
B.exR=new C.z(120,1080)
B.eR1=new C.z(-300,1000)
B.ez5=new C.z(300,1000)
B.eRt=new C.z(-700,800)
B.eC9=new C.z(700,800)
B.cYS=w([B.exm,B.eQQ,B.exR,B.eR1,B.ez5,B.eRt,B.eC9],x.f)
B.cYY=w(["Walnut","Blue grey","Brick red","Sage green","Sand","Charcoal"],x.s)
B.jI=w(["switch","switch2p","switch3","switch4","switchsmart","switchcombo"],x.s)
B.hbZ=new A.q(-6.5,7.5,-7.85)
B.hc4=new A.q(-6.5,7.8,-3)
B.cZi=w([B.hbZ,B.hc4],x.o)
B.hnS=new A.G6("NGMY JOBS","Find work. Get hired. Get paid.",D.ay,D.iq,D.tT)
B.ho_=new A.G6("NGMY LOANS","Help when you need it most.",D.cT,D.dY,D.w_)
B.hnV=new A.G6("KISWAHILI SCHOOL","Learn Swahili and English, step by step.",D.bP,D.tQ,D.w2)
B.hnX=new A.G6("CIVIC REGISTRY","Your family, your community, registered.",D.d3,D.d7,D.o_)
B.hnR=new A.G6("CORE PROTOCOL","Studios for curious minds.",D.b7,D.ju,D.q1)
B.hnW=new A.G6("BUILD AND FIX","The Construction Lab: wire it, plumb it.",D.fs,D.hQ,D.u4)
B.hnL=new A.G6("CREATE WITH NGMY","Videos, slides, bios and books.",D.bE,D.kf,D.pZ)
B.cZm=w([B.hnS,B.ho_,B.hnV,B.hnX,B.hnR,B.hnW,B.hnL],C.as("O<G6>"))
B.dwd=w(["Switch 1 common","Switch 2 common","Traveler terminal (both switches)","Green ground screw","Neutral splice (not on a switch)"],x.s)
B.ehh={"Line (from the breaker)":0,"Load (to the light)":1,"Traveler A":2,"Traveler B":3,Ground:4,Neutral:5}
B.dAk=new C.bu(B.ehh,["Switch 1 common","Switch 2 common","Traveler terminal (both switches)","Traveler terminal (both switches)","Green ground screw","Neutral splice (not on a switch)"],x.l)
B.dq7=w(["Never assume the dark screw is the same on every brand: read the diagram on the switch.","A switch loop or an old house may not follow the colors: verify the wires."],x.s)
B.bxI=new A.akK("threeway","Three-way switch (two switches, one light)","Two three-way switches control one light from two places. Each switch has a COMMON terminal (dark screw) and two TRAVELER terminals. Power (line) goes to the common of the first switch, the light (load) to the common of the second, and two travelers join the switches. The ground goes to the green screw. A standard single-pole switch cannot do this job.",B.dwd,B.dAk,B.dq7)
B.d_h=w(["Fan (motor) control wire","Light control wire","Neutral","Ground","Fan-rated support"],x.s)
B.ehZ={"Motor lead (black)":0,"Light lead (blue)":1,"Neutral (white)":2,"Ground (green)":3,Support:4}
B.dAU=new C.bu(B.ehZ,["Fan (motor) control wire","Light control wire","Neutral","Ground","Fan-rated support"],x.l)
B.d3Q=w(["A blue wire is a light-kit lead on many fans, but not on all: read the diagram.","A fan that spins does not prove the installation is safe."],x.s)
B.bxJ=new A.akK("fanlight","Ceiling fan with a light kit","A fan has a motor and often a light kit, and they are not always switched together. Follow the fan maker's diagram: the motor lead goes to the fan control (or switched hot), the light lead to the light control, the white to neutral and the green to the ground. The box must be fan rated.",B.d_h,B.dAU,B.d3Q)
B.qG=w([B.bxI,B.bxJ],C.as("O<akK>"))
B.hz4=new A.pJ(0,-100,100,24)
B.hzb=new A.pJ(1,90,100,24)
B.cZy=w([B.hz4,B.hzb],x.X)
B.eRD=new C.z(-95,160)
B.eR9=new C.z(-35,175)
B.eCY=new C.z(95,170)
B.cZD=w([B.eRD,B.eR9,B.eCY],x.f)
B.bjX=new C.t(1,0.9176470588235294,0.9490196078431372,0.9686274509803922,D.q)
B.bpB=new C.t(1,0.9647058823529412,0.9098039215686274,0.9098039215686274,D.q)
B.bov=new C.t(1,0.9529411764705882,0.9215686274509803,0.7843137254901961,D.q)
B.aza=w([B.Bs,B.bjX,B.bpB,B.bov],x.O)
B.aZs=new A.iR("neutral","White \xb7 neutral (middle)",B.m_,D.au,"neutral")
B.aZv=new A.iR("hot1","Black \xb7 hot (left)",B.ru,D.c,"hot")
B.aZt=new A.iR("hot2","Red \xb7 hot (right)",B.vR,D.c,"hot")
B.cZJ=w([B.aZs,B.aZv,B.aZt],x.d)
B.ehA={common:0}
B.f8o=new C.dx(B.ehA,1,x.M)
B.bLl=new A.fm(23,"COMMON screw (the odd one)",B.f8o,"The COMMON screw is the one with a different colour. The black wire that brings the power in, or goes to the light, belongs here.",!1,"hot")
B.eiz={trav1:0,trav2:1}
B.aS3=new C.dx(B.eiz,2,x.M)
B.bLs=new A.fm(21,"Traveler screw (top)",B.aS3,y.a,!1,"hot")
B.bLH=new A.fm(22,"Traveler screw (bottom)",B.aS3,y.a,!1,"hot")
B.cZQ=w([B.uu,B.bLl,B.bLs,B.bLH],x.r)
B.dDu=new A.ib(-60,60,28,50)
B.dDq=new A.ib(-150,-100,70,170)
B.dD3=new A.ib(100,150,70,170)
B.dDv=new A.ib(-60,-20,156,186)
B.dD8=new A.ib(20,60,156,186)
B.d_4=w([B.dDu,B.dDq,B.dD3,B.dDv,B.dD8],x.T)
B.d_6=w([y.O,"The cable comes in through the top of the box. Strip about 3/4 inch of insulation from each wire.","Fasten the bare copper ground wire to the GREEN screw.","Fasten the white (neutral) wire to a SILVER screw.","Fasten the black (hot) wire to a BRASS screw. Wrap each wire clockwise under its screw.","Fold the wires back and push the outlet into the box.","Put the cover plate on, then turn the power on and test."],x.s)
B.hkf=new A.q(-3.6,7.5,-7.85)
B.hbj=new A.q(-3.6,4.2,-7.85)
B.d_e=w([B.hkf,B.hbj],x.o)
B.d_g=w([-0.5,-0.25,0,0.25,0.5],x.n)
B.aQM=new C.b5("look","Look",D.f1)
B.f_X=new C.b5("sheet","Drywall sheet",D.zb)
B.eXK=new C.b5("cut","Cutter",D.Cr)
B.eZM=new C.b5("screw","Screw gun",Z.Cz)
B.bO3=new C.a0(63005,"MaterialIcons",!1)
B.f_L=new C.b5("saw","Saw",B.bO3)
B.eZF=new C.b5("bead","Corner bead",R.rM)
B.eZA=new C.b5("mud","Mud",A6.P4)
B.f_7=new C.b5("tape","Tape",D.rO)
B.eYi=new C.b5("sand","Sander",D.Cq)
B.aql=new C.a0(985109,"MaterialIcons",!1)
B.f_W=new C.b5("paint","Roller",B.aql)
B.d_W=w([B.aQM,B.f_X,B.eXK,B.eZM,B.f_L,B.eZF,B.eZA,B.f_7,B.eYi,B.f_W],x.gr)
B.d0_=w([0,2,1,3,4,6,7,8],x.t)
B.eYt=new C.b5(-0.1,0,0.5)
B.f_M=new C.b5(0.35,-0.4,0.3)
B.eZt=new C.b5(-0.4,0.55,0.35)
B.d05=w([B.eYt,B.f_M,B.eZt],C.as("O<+(I,I,I)>"))
B.eQK=new C.z(-1050,"store")
B.aQF=new C.z(-840,"tower")
B.eRl=new C.z(-630,"tower")
B.eRb=new C.z(-420,"gasstation")
B.aQE=new C.z(-210,"tower")
B.exr=new C.z(0,"hq")
B.aQs=new C.z(210,"tower")
B.ezE=new C.z(420,"store")
B.eBN=new C.z(630,"tower")
B.aQu=new C.z(840,"tower")
B.exH=new C.z(1050,"gasstation")
B.d0F=w([B.eQK,B.aQF,B.eRl,B.eRb,B.aQE,B.exr,B.aQs,B.ezE,B.eBN,B.aQu,B.exH],x.Q)
B.a4N=w(["Always switch the breaker OFF and test the wires with a tester before you touch them.","Never use water on an electrical fire: switch the power off at the breaker first.","Reversed hot and neutral can look fine and still be a shock hazard.","A GFCI outlet protects you near water: press TEST every month.","A ceiling fan needs a fan-rated box, because it is heavy and it shakes."],x.s)
B.hgL=new A.q(9.8,6,-7.85)
B.hak=new A.q(9.8,7.5,-7.85)
B.hkF=new A.q(-8,7.5,-7.85)
B.hdl=new A.q(-8,1.5,-7.85)
B.d0S=w([B.hgL,B.hak,B.hkF,B.hdl],x.o)
B.eWY=new C.b5(0,32,"outlet")
B.eX4=new C.b5(1,96,"outlet")
B.eXb=new C.b5(2,112,"outlet")
B.eXj=new C.b5(3,64,"outlet")
B.eXc=new C.b5(2,80,"switch")
B.d1i=w([B.eWY,B.eX4,B.eXb,B.eXj,B.eXc],C.as("O<+(G,I,m)>"))
B.aYz=new A.q(5,1.8,-7.85)
B.hen=new A.q(5,-0.1,-7.85)
B.hfD=new A.q(12.5,-0.1,-7.85)
B.d2_=w([B.aYz,B.hen,B.hfD],x.o)
B.d28=w([-69.5,69.5],x.n)
B.h1g=new A.q(3,3.1,-7.1)
B.aYp=new A.q(3,1.7,-7.1)
B.hfx=new A.q(3,1,-7.1)
B.h60=new A.q(3.65,0.5,-7.1)
B.h87=new A.q(4.3,1,-7.1)
B.hek=new A.q(4.3,1.8,-7.1)
B.hkJ=new A.q(5,1.8,-7.1)
B.d2u=w([B.h1g,B.aYp,B.hfx,B.h60,B.h87,B.hek,B.hkJ,B.aYz],x.o)
B.zw=w(["tv","lamp","toaster","hairdryer","washerM","dryerM","rangeM"],x.s)
B.Os=new A.fm(23,"Silver screw W: NEUTRAL",B.Ej,y.I,!1,"neutral")
B.ehQ={hot1:0,hot2:1}
B.Eh=new C.dx(B.ehQ,2,x.M)
B.ant=new A.fm(21,"Brass screw X: HOT",B.Eh,y.l,!1,"hot")
B.anC=new A.fm(22,"Brass screw Y: HOT",B.Eh,y.l,!1,"hot")
B.d2F=w([B.uu,B.Os,B.ant,B.anC],x.r)
B.anB=new A.fm(23,"Silver screw: NEUTRAL",B.Ej,y._,!1,"neutral")
B.ehS={hot:0}
B.a9n=new C.dx(B.ehS,1,x.M)
B.anx=new A.fm(21,"Brass screw: HOT",B.a9n,y.u,!1,"hot")
B.d2H=w([B.uu,B.anB,B.anx],x.r)
B.d31=w(["My outlet is dead and it is dark in here. Please come and wire it.","The light in my room does not work, and my phone will not charge. Can you fix the wiring?","I have no power in my room at all. Can an electrician come?"],x.s)
B.f1F=new C.cw([-0.35,-0.2,0.42,0.3])
B.f1T=new C.cw([0.3,0.25,0.32,0.38])
B.f0I=new C.cw([0.05,-0.55,0.22,0.14])
B.f1a=new C.cw([-0.5,0.45,0.2,0.16])
B.d3d=w([B.f1F,B.f1T,B.f0I,B.f1a],x.D)
B.d3e=w([D.aw,D.bf,D.ay,D.d3,D.bO,D.f8],x.O)
B.hjU=new A.q(0.6,11,-3.4)
B.h99=new A.q(0.6,3.2,-3.2)
B.hji=new A.q(0.6,2.2,-1.9)
B.h8E=new A.q(0.6,0.7,-1.5)
B.d3D=w([B.hjU,B.h99,B.hji,B.h8E],x.o)
B.d3P=w([0,24,-24,48,-48],x.n)
B.EJ=new A.iR("neutral","White \xb7 neutral",B.m_,D.au,"neutral")
B.hnb=new A.iR("line","Black \xb7 hot from the panel (LINE)",B.ru,D.c,"hot")
B.hnt=new A.iR("load","Black \xb7 hot to the light (LOAD)",B.MD,D.c,"hot")
B.d41=w([B.r6,B.EJ,B.hnb,B.hnt],x.d)
B.eDR=new C.z("outlet","\ud83d\udd0c Outlet")
B.eSi=new C.z("gfci","\ud83d\udee1\ufe0f GFCI outlet")
B.eNN=new C.z("switch","\ud83d\udca1 Light switch")
B.eJl=new C.z("dryer4","\ud83d\udc55 Dryer outlet 4-wire")
B.eSE=new C.z("dryer3","\ud83e\udde6 Dryer outlet 3-wire")
B.ePL=new C.z("range4","\ud83c\udf73 Range outlet 4-wire")
B.eIL=new C.z("range3","\ud83e\udd58 Range outlet 3-wire")
B.eyD=new C.z("washer","\ud83e\uddfa Washer outlet")
B.eQn=new C.z("cord4","\u26a1 Dryer cord 4-wire")
B.eWb=new C.z("cord3","\ud83d\udd0c Dryer cord 3-wire")
B.d45=w([B.eDR,B.eSi,B.eNN,B.eJl,B.eSE,B.ePL,B.eIL,B.eyD,B.eQn,B.eWb],x.L)
B.azH=w([3,3.6,3.3,2.6],x.n)
B.d4j=w([y.O,y.x,y.R,"Fasten the white NEUTRAL wire to the NEUTRAL (silver) screw. A regular switch never touches the neutral, this one does.","Fasten the black wire from the panel to the LINE screw.","Fasten the black wire that goes to the light to the LOAD screw.",y.b,y.n],x.s)
B.eRs=new C.z(-700,330)
B.eC8=new C.z(700,380)
B.eQM=new C.z(-1100,-420)
B.exN=new C.z(1100,-480)
B.eQS=new C.z(-1300,100)
B.exU=new C.z(1350,30)
B.exs=new C.z(0,-900)
B.eQT=new C.z(-1500,-300)
B.exV=new C.z(1550,-200)
B.d4m=w([B.eRs,B.eC8,B.eQM,B.exN,B.eQS,B.exU,B.exs,B.eQT,B.exV],x.f)
B.d4s=w([Y.qU,A9.Ud,T.lq],x.f)
B.bLy=new A.fm(25,"FRAME screw: GROUND (green)",B.Ah,"The green ground wire goes on the screw on the frame, where the strap was.",!1,"ground")
B.anw=new A.fm(21,"MIDDLE terminal: NEUTRAL (white)",B.Ej,"The white neutral wire goes on the middle terminal.",!1,"neutral")
B.ehP={hot1:0}
B.f8a=new C.dx(B.ehP,1,x.M)
B.anA=new A.fm(23,"LEFT terminal: black",B.f8a,"The black wire goes on the left terminal.",!1,"hot")
B.ehR={hot2:0}
B.f8h=new C.dx(B.ehR,1,x.M)
B.anz=new A.fm(22,"RIGHT terminal: red",B.f8h,"The red wire goes on the right terminal.",!1,"hot")
B.d4v=w([B.bLy,B.anw,B.anA,B.anz],x.r)
B.eYr=new C.b5("outlet","Outlet box",P.a27)
B.eYf=new C.b5("switch","Switch box",E.rS)
B.f_Y=new C.b5("ceiling","Ceiling box",D.pf)
B.eZD=new C.b5("drill","Drill",D.uz)
B.eYp=new C.b5("cable","Cable roll",E.a2_)
B.d4U=w([B.aQM,B.eYr,B.eYf,B.f_Y,B.eZD,B.eYp],x.gr)
B.hz6=new A.pJ(0,-64,120,26)
B.hz9=new A.pJ(1,64,120,26)
B.hze=new A.pJ(2,0,84,24)
B.d52=w([B.hz6,B.hz9,B.hze],x.X)
B.h70=new A.q(0,8.3,0)
B.aXV=new A.q(0,3.9,0)
B.azM=w([B.h70,B.aXV],x.o)
B.d5j=w([y.O,"Make sure the box is rated for a fan. A plain light box cannot carry the weight and the shaking.","Join the house ground wire to the fan ground.","Join the house white wire to the fan white wire with a wire nut.","Join the house black wire to the fan black wire with a wire nut.","Push the wires up into the box and fasten the canopy to the ceiling.",y.f],x.s)
B.ePM=new C.z(-3.5,11)
B.eFb=new C.z(3.5,11)
B.eDq=new C.z(-3.5,-11)
B.eB_=new C.z(3.5,-11)
B.d5C=w([B.ePM,B.eFb,B.eDq,B.eB_],x.f)
B.hhi=new A.q(-0.6,11,-3.4)
B.har=new A.q(-0.6,3.2,-3.2)
B.hg6=new A.q(-0.6,2.2,-1.9)
B.hl9=new A.q(-0.6,0.7,-1.5)
B.d5D=w([B.hhi,B.har,B.hg6,B.hl9],x.o)
B.Ij=w(["dog","cat","cow","sheep","chicken","horse"],x.s)
B.ac1=new A.hN("look","Look",D.f1)
B.hqx=new A.hN("wall","Wall box",P.a27)
B.hqu=new A.hN("ceiling","Ceiling box",D.pf)
B.hqN=new A.hN("fanbox","Fan box",O.Cm)
B.hqZ=new A.hN("drill","Drill",D.uz)
B.hqO=new A.hN("cable","Cable roll",E.a2_)
B.dkL=w([B.ac1,B.hqx,B.hqu,B.hqN,B.hqZ,B.hqO],x.b)
B.hqW=new A.hN("sheet","Drywall sheet",D.zb)
B.hqE=new A.hN("knife","Drywall saw",D.Cr)
B.hqA=new A.hN("screw","Screw gun",Z.Cz)
B.hr0=new A.hN("tape","Tape",D.rO)
B.hqT=new A.hN("mud","Mud",A6.P4)
B.hr5=new A.hN("sand","Sander",D.Cq)
B.hqI=new A.hN("paint","Roller",B.aql)
B.dh0=w([B.ac1,B.hqW,B.hqE,B.hqA,B.hr0,B.hqT,B.hr5,B.hqI],x.b)
B.Ph=new C.a0(983223,"MaterialIcons",!1)
B.hr1=new A.hN("outlet","Outlet",B.Ph)
B.hqG=new A.hN("gfci","GFCI",D.uL)
B.hr_=new A.hN("switch","Switch",E.rS)
B.hqz=new A.hN("split","Split outlet",B.Ph)
B.hr3=new A.hN("v240four","240 V 4-wire",X.Ct)
B.hqv=new A.hN("v240three","240 V 3-wire",X.Ct)
B.hqL=new A.hN("v240only","240 V only",X.Ct)
B.hqD=new A.hN("isolated","Isolated ground",B.Ph)
B.a28=new C.a0(63208,"MaterialIcons",!1)
B.hqU=new A.hN("dryer4","Dryer 4-wire (14-30)",B.a28)
B.hqC=new A.hN("dryer3","Dryer 3-wire (10-30)",B.a28)
B.a2r=new C.a0(63678,"MaterialIcons",!1)
B.hqy=new A.hN("range4","Range 4-wire (14-50)",B.a2r)
B.hqR=new A.hN("range3","Range 3-wire (10-50)",B.a2r)
B.apo=new C.a0(63601,"MaterialIcons",!1)
B.hqs=new A.hN("washer","Washer (5-20)",B.apo)
B.hqV=new A.hN("switch2p","Double-pole",E.rS)
B.hqX=new A.hN("switch3","3-way switch",E.rS)
B.hqM=new A.hN("switch4","4-way switch",E.rS)
B.hqK=new A.hN("switchsmart","Smart switch",E.rS)
B.hqt=new A.hN("switchcombo","Double switch",E.rS)
B.hqS=new A.hN("light","Light",D.qA)
B.bQV=new C.a0(985094,"MaterialIcons",!1)
B.hqJ=new A.hN("fan","Fan",B.bQV)
B.hqQ=new A.hN("tv","TV",A0.a2O)
B.bPa=new C.a0(63571,"MaterialIcons",!1)
B.hqH=new A.hN("lamp","Lamp",B.bPa)
B.bNX=new C.a0(62944,"MaterialIcons",!1)
B.hqF=new A.hN("toaster","Toaster",B.bNX)
B.bOx=new C.a0(63209,"MaterialIcons",!1)
B.hr4=new A.hN("hairdryer","Hair dryer",B.bOx)
B.hqw=new A.hN("washerM","Washing machine",B.apo)
B.hqB=new A.hN("dryerM","Dryer",B.a28)
B.hqY=new A.hN("rangeM","Kitchen range",B.a2r)
B.hr2=new A.hN("flip","Flip switch",E.rS)
B.hqP=new A.hN("tester","Voltage tester",D.uB)
B.aAs=w([B.ac1,B.hr1,B.hqG,B.hr_,B.hqz,B.hr3,B.hqv,B.hqL,B.hqD,B.hqU,B.hqC,B.hqy,B.hqR,B.hqs,B.hqV,B.hqX,B.hqM,B.hqK,B.hqt,B.hqS,B.hqJ,B.hqQ,B.hqH,B.hqF,B.hr4,B.hqw,B.hqB,B.hqY,B.hr2,B.hqP],x.b)
B.d66=w([B.dkL,B.dh0,B.aAs],C.as("O<ai<hN>>"))
B.eMK=new C.z(-1.2,0)
B.eVM=new C.z(1.2,0)
B.d6j=w([B.eMK,B.eVM],x.f)
B.d6w=w([-0.58,0.58],x.n)
B.d6N=w([40,70,100,130,160],x.n)
B.bLn=new A.fm(23,"NEUTRAL screw (silver)",B.Ej,"The electronics inside need the neutral wire to run. White goes on the silver screw.",!1,"neutral")
B.ei6={line:0}
B.f8w=new C.dx(B.ei6,1,x.M)
B.bLB=new A.fm(21,"LINE screw (brass, hot in)",B.f8w,"The black wire from the breaker panel goes on the LINE screw.",!1,"hot")
B.eia={load:0}
B.f7z=new C.dx(B.eia,1,x.M)
B.bLD=new A.fm(22,"LOAD screw (brass, hot out)",B.f7z,"The black wire that goes to the light goes on the LOAD screw.",!1,"hot")
B.d6X=w([B.uu,B.bLn,B.bLB,B.bLD],x.r)
B.eoi=new A.nz("flange","flange","Toilet flange",D.Y,"The flange is fixed to the floor over the drain. Everything else sits on it.",!1,0)
B.dko=w(["flange"],x.s)
B.eog=new A.nz("wax","wax","Wax ring",B.dko,"The wax ring goes on the flange before the toilet. It makes the seal against sewer gas and water.",!1,0)
B.dvG=w(["wax"],x.s)
B.eod=new A.nz("toilet","toilet","Toilet",B.dvG,"The toilet is lowered straight down onto the wax ring. The ring has to be there first.",!1,0)
B.dtV=w(["toilet"],x.s)
B.eoh=new A.nz("bolts","bolts","Toilet bolts",B.dtV,"The two bolts hold the toilet to the flange. Set the toilet first.",!1,2)
B.eoe=new A.nz("tvalve","valve","Toilet shut-off valve",D.Y,"The shut-off valve goes on the pipe that comes out of the wall.",!0,0)
B.du1=w(["tvalve","toilet"],x.s)
B.eof=new A.nz("those","hosecold","Toilet supply hose",B.du1,"The hose joins the valve to the toilet tank, so both must be there first.",!1,2)
B.aLE=new A.nz("faucet","faucet","Faucet",D.Y,"The faucet goes through the hole in the counter.",!1,0)
B.aLH=new A.nz("vhot","valve","Hot shut-off valve (left)",D.Y,y.X,!0,0)
B.aLF=new A.nz("vcold","valve","Cold shut-off valve (right)",D.Y,y.X,!0,0)
B.dv2=w(["vhot","faucet"],x.s)
B.aLI=new A.nz("hhot","hosehot","Hot supply hose",B.dv2,"The hose joins the hot valve to the faucet, so the valve and the faucet must be there first.",!1,2)
B.dv_=w(["vcold","faucet"],x.s)
B.aLG=new A.nz("hcold","hosecold","Cold supply hose",B.dv_,"The hose joins the cold valve to the faucet, so the valve and the faucet must be there first.",!1,2)
B.aLD=new A.nz("tail","tail","Tailpiece",D.Y,"The tailpiece hangs from the sink drain. It is the first piece of the drain.",!1,0)
B.dtO=w(["tail"],x.s)
B.aLJ=new A.nz("trap","trap","P-trap",B.dtO,"The P-trap joins the tailpiece. Build the drain from the top down.",!1,1)
B.dtW=w(["trap"],x.s)
B.aLK=new A.nz("arm","arm","Trap arm",B.dtW,"The trap arm joins the trap and goes into the wall.",!1,1)
B.d1s=w([B.eoi,B.eog,B.eod,B.eoh,B.eoe,B.eof,B.aLE,B.aLH,B.aLF,B.aLI,B.aLG,B.aLD,B.aLJ,B.aLK],x.fI)
B.euC=new A.Xw("bathroom","Bathroom",B.d1s,"Fit out a bathroom: a toilet and a sink with its faucet, supply hoses and drain.")
B.dmj=w([B.aLE,B.aLH,B.aLF,B.aLI,B.aLG,B.aLD,B.aLJ,B.aLK],x.fI)
B.euD=new A.Xw("kitchen","Kitchen",B.dmj,"Fit out a kitchen sink: the faucet, the hot and cold supplies and the drain.")
B.aA2=w([B.euC,B.euD],C.as("O<Xw>"))
B.f1Q=new C.cw([-150,180,2,200])
B.f0D=new C.cw([150,180,2,200])
B.f0z=new C.cw([0,280,302,2])
B.d7g=w([B.f1Q,B.f0D,B.f0z],x.D)
B.eRC=new C.z(-900,400)
B.eCU=new C.z(900,400)
B.eRA=new C.z(-900,1000)
B.eCS=new C.z(900,1000)
B.eR2=new C.z(-300,1260)
B.ez6=new C.z(300,1260)
B.eQI=new C.z(-1000,700)
B.exE=new C.z(1000,700)
B.eRm=new C.z(-640,90)
B.eBO=new C.z(640,90)
B.eRB=new C.z(-900,1400)
B.eCT=new C.z(900,1400)
B.d7t=w([B.eRC,B.eCU,B.eRA,B.eCS,B.eR2,B.ez6,B.eQI,B.exE,B.eRm,B.eBO,B.eRB,B.eCT],x.f)
B.d7Y=w([B.anw,B.anA,B.anz],x.r)
B.h1d=new A.q(8.2,0.9,-6.3)
B.hgk=new A.q(8.2,-0.1,-6.3)
B.h5d=new A.q(8.2,-0.1,-7.85)
B.d87=w([B.h1d,B.hgk,B.h5d],x.o)
B.eBK=new C.z(-4.5,10)
B.eSs=new C.z(4.5,10)
B.eVK=new C.z(-4.5,-10)
B.eSo=new C.z(4.5,-10)
B.d8j=w([B.eBK,B.eSs,B.eVK,B.eSo],x.f)
B.d8k=w([-0.28,0.28],x.n)
B.dDx=new A.ib(-70,70,20,44)
B.dDi=new A.ib(-110,-50,80,100)
B.dDd=new A.ib(50,110,80,100)
B.dDh=new A.ib(-110,-50,130,150)
B.dDc=new A.ib(50,110,130,150)
B.d8x=w([B.dDx,B.dDi,B.dDd,B.dDh,B.dDc],x.T)
B.d8O=w([D.aw,D.ay,D.bf,D.m0,D.d3,D.cd,D.f8],x.O)
B.eL9=new C.z("back","Back wall")
B.eVv=new C.z("left","Left wall")
B.eNo=new C.z("right","Right wall")
B.d9f=w([B.eL9,B.eVv,B.eNo],x.L)
B.ehu={black:0}
B.JZ=new C.dx(B.ehu,1,x.M)
B.bLe=new A.fm(51,"Black wire nut: HOT",B.JZ,"The house black wire joins the fixture black wire.",!1,"hot")
B.eiG={white:0}
B.JY=new C.dx(B.eiG,1,x.M)
B.bLK=new A.fm(52,"White wire nut: NEUTRAL",B.JY,"The house white wire joins the fixture white wire.",!1,"neutral")
B.bL9=new A.fm(53,"Green ground connection",B.Ah,"The bare copper house ground joins the green fixture ground wire.",!1,"ground")
B.d9q=w([B.bLe,B.bLK,B.bL9],x.r)
B.eR8=new C.z(-34,-6)
B.ez8=new C.z(30,10)
B.eQL=new C.z(-10,24)
B.d9v=w([B.eR8,B.ez8,B.eQL],x.f)
B.d9C=w([y.O,y.x,y.R,"Fasten hot leg 1 from the panel (black) to the top LEFT screw.","Fasten hot leg 2 from the panel (red) to the top RIGHT screw.","Fasten hot leg 1 to the heater (black) to the bottom LEFT screw.","Fasten hot leg 2 to the heater (red) to the bottom RIGHT screw.",y.b,y.n],x.s)
B.bJH=new A.Ei("Oak",B.BI,"wood")
B.bJJ=new A.Ei("Dark wood",B.qe,"wood")
B.ajt=new C.t(1,0.5529411764705883,0.5647058823529412,0.5882352941176471,D.q)
B.bJL=new A.Ei("Grey carpet",B.ajt,"carpet")
B.bsd=new C.t(1,0.3568627450980392,0.4980392156862745,0.6509803921568628,D.q)
B.bJI=new A.Ei("Blue carpet",B.bsd,"carpet")
B.bpA=new C.t(1,0.8470588235294118,0.803921568627451,0.7058823529411765,D.q)
B.bJF=new A.Ei("Cream carpet",B.bpA,"carpet")
B.bJK=new A.Ei("White tile",B.YC,"tile")
B.bJG=new A.Ei("Slate tile",B.afR,"tile")
B.aAp=w([B.bJH,B.bJJ,B.bJL,B.bJI,B.bJF,B.bJK,B.bJG],C.as("O<Ei>"))
B.abL=new A.iR("hot1","Black \xb7 hot 1",B.ru,D.c,"hot")
B.abM=new A.iR("hot2","Red \xb7 hot 2",B.vR,D.c,"hot")
B.a50=w([B.EJ,B.abL,B.abM],x.d)
B.eXL=new C.b5(-80,100,D.aw)
B.f_9=new C.b5(80,100,D.bf)
B.eZ0=new C.b5(-80,150,D.ay)
B.dan=w([B.eXL,B.f_9,B.eZ0],x.dV)
B.hz2=new A.pJ(0,0,78,26)
B.dav=w([B.hz2],x.X)
B.eiw={store:0,gasstation:1}
B.f8y=new C.dx(B.eiw,2,x.M)
B.bwN=new A.zi("food","\ud83c\udf54","Food",B.f8y)
B.eit={shop:0,store:1}
B.f83=new C.dx(B.eit,2,x.M)
B.bwM=new A.zi("groceries","\ud83d\uded2","Groceries",B.f83)
B.ehO={hospital:0}
B.f7Z=new C.dx(B.ehO,1,x.M)
B.bwP=new A.zi("medicine","\ud83d\udc8a","Medicine",B.f7Z)
B.ehT={hq:0,tower:1}
B.f8u=new C.dx(B.ehT,2,x.M)
B.bwL=new A.zi("package","\ud83d\udce6","Package",B.f8u)
B.egY={school:0,firestation:1,hq:2}
B.f7L=new C.dx(B.egY,3,x.M)
B.bwO=new A.zi("letters","\u2709\ufe0f","Letters",B.f7L)
B.RD=w([B.bwN,B.bwM,B.bwP,B.bwL,B.bwO],C.as("O<zi>"))
B.daK=w([y.O,y.x,y.F,"Fasten the black hot to a BRASS screw.","Fasten the green wire with the yellow stripe (the isolated ground, which runs all the way to the panel) to the GREEN screw with the orange triangle. The box itself is grounded with its own bare copper wire.",y.b,y.n],x.s)
B.daN=w(["Look round: the stack of sheets, the mud, the tape, the knife, the screw gun and the rest of the tools are on the floor.","Hang the ceiling first. Cut the 24 inch pieces to size with the Cutter before you hang them.","Hang the wall sheets, cutting the narrow ones.","Screw every sheet to the studs and joists with the Screw gun.","Cut the holes for the boxes, the door and the window with the Saw.","Put corner bead on the door and the window.","On each surface: mud (bed coat), tape, then mud twice more, waiting for each coat to dry.","Sand each surface smooth when the last coat is dry.","Prime every surface with the Roller. The room is finished."],x.s)
B.daS=w([-1000,-500,0,500,1000],x.n)
B.dbQ=w([y.O,y.x,"Take the metal GROUND STRAP off: tap it. On a 4-wire cord the neutral must NOT touch the frame, because the green wire grounds the frame.","Fasten the green ground wire to the GREEN frame screw where the strap was.","Fasten the white neutral to the MIDDLE terminal.",y.A,y.d,y.b,y.n],x.s)
B.hg7=new A.q(3,3.2,-7.85)
B.hld=new A.q(3,4,-7.85)
B.hkg=new A.q(3,4.2,-7.4)
B.h3t=new A.q(3,3.95,-7)
B.dbT=w([B.hg7,B.hld,B.hkg,B.h3t],x.o)
B.dbV=w(["The sink leaks and there is water on the floor. Please fix the plumbing.","The toilet is not connected and the water is running everywhere. Help!","There is no water at my sink and the pipes are open. Can a plumber come?"],x.s)
B.Y1=new C.t(1,0.23137254901960785,0.3568627450980392,0.47843137254901963,D.q)
B.dc5=w([D.al,B.Y1,D.bL,D.bt],x.O)
B.f95=new A.rX("apple","\ud83c\udf4e","Apple","A little energy",3,0.12,0,0.1,!1)
B.f96=new A.rX("water","\ud83d\udca7","Water","Quenches your thirst",2,0,0,0.8,!1)
B.f97=new A.rX("juice","\ud83e\udd64","Juice","Some energy and a drink",4,0.18,0,0.5,!1)
B.f9c=new A.rX("sandwich","\ud83e\udd6a","Sandwich","A good bit of energy",6,0.3,0,0,!1)
B.f94=new A.rX("meal","\ud83c\udf54","Burger meal","Lots of energy",10,0.55,0,0,!1)
B.dc8=w([B.f95,B.f96,B.f97,B.f9c,B.f94],x.U)
B.a81=new A.Xa("door",2,31.5,67.5,0,80.5)
B.TH=new A.Xa("window",1,40,76,36,72)
B.Io=w([B.a81,B.TH],C.as("O<Xa>"))
B.eRn=new C.z(-660,340)
B.eR5=new C.z(-330,340)
B.ez9=new C.z(330,340)
B.eBQ=new C.z(660,340)
B.eRo=new C.z(-660,500)
B.eR6=new C.z(-330,500)
B.eza=new C.z(330,500)
B.eBR=new C.z(660,500)
B.eRp=new C.z(-660,780)
B.eR7=new C.z(-330,780)
B.ezc=new C.z(330,780)
B.eBS=new C.z(660,780)
B.eRg=new C.z(-500,940)
B.eBk=new C.z(500,940)
B.dcL=w([B.eRn,B.eR5,B.ez9,B.eBQ,B.eRo,B.eR6,B.eza,B.eBR,B.eRp,B.eR7,B.ezc,B.eBS,B.eRg,B.eBk],x.f)
B.lk=w(["outlet","gfci","split","v240four","v240three","v240only","isolated","dryer4","dryer3","range4","range3","washer"],x.s)
B.hgQ=new A.q(6,0.2,0)
B.heS=new A.q(6,2.6,0)
B.aZ8=new A.q(8.6,2.6,0)
B.ddf=w([B.hgQ,B.heS,B.aZ8],x.o)
B.Dd=w([B.hL,B.oV,B.pO,B.h1],x.o)
B.ddL=w([D.c,D.du,D.ep,D.eO,D.bN,D.bM],x.O)
B.eRw=new C.z(-7,-7)
B.eCo=new C.z(7,-7)
B.eRv=new C.z(-7,7)
B.eCn=new C.z(7,7)
B.de_=w([B.eRw,B.eCo,B.eRv,B.eCn],x.f)
B.de1=w([-2.4,2.4],x.n)
B.de2=w([-0.5,0,0.5],x.n)
B.any=new A.fm(21,"Brass screw X: HOT",B.Eh,y.p,!1,"hot")
B.anu=new A.fm(22,"Brass screw Y: HOT",B.Eh,y.p,!1,"hot")
B.ded=w([B.uu,B.any,B.anu],x.r)
B.deg=w([-1.2,1.2],x.n)
B.hny=new A.Q_("Black","Hot (line or switched)","Brass terminal","120 V branch circuit","Carries the power from the breaker. Treat it as live until it is tested dead.","Can be a traveler in a three-way switch, or a switched hot. Verify with a tester.")
B.hnw=new A.Q_("Red","Hot (second hot or traveler)","Brass or the marked traveler terminal","Switch legs, travelers, fan and light controls","Often the switched wire to a fan or light, or a traveler.","Check the diagram: red can be a traveler or a second circuit.")
B.hnv=new A.Q_("White","Neutral","Silver terminal","120 V branch circuit","The return path for the current. It can still be live if something is wrong.","In a switch loop a white wire can be re-marked as a hot. A white wire is not always neutral.")
B.hnu=new A.Q_("Bare copper or green","Equipment ground","Green screw or the ground lead","Every grounded device","Not for current in normal use. It is the safety path if a fault happens.","Never use the neutral as a ground. Older homes may have no ground at all: that needs verification.")
B.hnx=new A.Q_("Gray / blue / others","Depends on the installation","See the device diagram","Low voltage, control wires, other systems","Do not guess what a wire does from its color.","Colors and their meaning are not the same everywhere. REQUIRES VERIFICATION.")
B.dei=w([B.hny,B.hnw,B.hnv,B.hnu,B.hnx],C.as("O<Q_>"))
B.RL=w([-1.6,1.6],x.n)
B.hn9=new A.iR("blackLine","Black \xb7 from the breaker",B.ru,D.c,"hot")
B.hnp=new A.iR("blackLoad","Black \xb7 to the light",B.MD,D.c,"hot")
B.der=w([B.hn9,B.hnp,B.r6],x.d)
B.deJ=w([0,10,22,36,52],x.n)
B.hz5=new A.pJ(0,-60,130,26)
B.hza=new A.pJ(1,80,56,22)
B.deK=w([B.hz5,B.hza],x.X)
B.df9=w([D.bo,D.bs,D.aw,D.aJ,D.bt],x.O)
B.ehY={isoground:0}
B.f7D=new C.dx(B.ehY,1,x.M)
B.bLJ=new A.fm(25,"Isolated-ground screw (green, orange triangle)",B.f7D,"The dedicated ground wire goes on the green screw with the orange triangle. It does not touch the box or the strap.",!1,"ground")
B.dfk=w([B.bLJ,B.anB,B.anx],x.r)
B.bgp=new C.t(1,0.9294117647058824,0.9019607843137255,0.8392156862745098,D.q)
B.bei=new C.t(1,0.9137254901960784,0.8274509803921568,0.8274509803921568,D.q)
B.bds=new C.t(1,0.8352941176470589,0.8941176470588236,0.8156862745098039,D.q)
B.ahu=new C.t(1,0.9529411764705882,0.8901960784313725,0.6549019607843137,D.q)
B.bje=new C.t(1,0.7254901960784313,0.7647058823529411,0.8666666666666667,D.q)
B.bsm=new C.t(1,0.5607843137254902,0.6392156862745098,0.6588235294117647,D.q)
B.aAH=w([B.bgp,B.Yl,B.bei,B.bds,B.ahu,B.bje,B.ahz,B.bsm],x.O)
B.eht={blackLine:0,blackLoad:1}
B.aRO=new C.dx(B.eht,2,x.M)
B.bLo=new A.fm(21,"Brass screw (top)",B.aRO,y.v,!1,"hot")
B.bLa=new A.fm(22,"Brass screw (bottom)",B.aRO,y.v,!1,"hot")
B.anv=new A.fm(25,"Green screw: GROUND",B.Ah,y.Z,!1,"ground")
B.dfW=w([B.bLo,B.bLa,B.anv],x.r)
B.eRy=new C.z(-80,90)
B.eCC=new C.z(80,90)
B.eRx=new C.z(-80,140)
B.eCB=new C.z(80,140)
B.dgE=w([B.eRy,B.eCC,B.eRx,B.eCB],x.f)
B.bLL=new A.fm(51,"Black wire nut: HOT",B.JZ,"The house black wire joins the fan black wire.",!1,"hot")
B.bL8=new A.fm(52,"White wire nut: NEUTRAL",B.JY,"The house white wire joins the fan white wire.",!1,"neutral")
B.bLw=new A.fm(53,"Green ground connection",B.Ah,"The bare copper house ground joins the green fan ground wire.",!1,"ground")
B.dgL=w([B.bLL,B.bL8,B.bLw],x.r)
B.bdd=new A.SQ("bus",-575,-25,0,1)
B.bdf=new A.SQ("police",-575,-25,854,5)
B.bde=new A.SQ("bus",25,575,850,3)
B.bdg=new A.SQ("police",25,575,1704,6)
B.ks=w([B.bdd,B.bdf,B.bde,B.bdg],C.as("O<SQ>"))
B.ane=new A.rt(4,"deadOutlet")
B.dgT=w([B.a10,B.a11,B.Oi,B.Oj,B.ane,B.a14,B.a15,B.a16,B.a17,B.a18,B.a12,B.a13],C.as("O<rt>"))
B.f0A=new C.cw([0,560,240,7])
B.f0B=new C.cw([0,560,300,9])
B.a5c=w([B.f0A,B.f0B],C.as("O<+(I,I,I,G)>"))
B.hsd=new A.m3("outlet","\ud83d\udd0c","Wall outlet","Black to brass, white to silver",D.ay)
B.hs5=new A.m3("switch","\ud83d\udca1","Light switch","Two blacks and a wire nut",D.aJ)
B.hs6=new A.m3("gfci","\ud83d\udee1\ufe0f","GFCI outlet","LINE and LOAD near water",D.bv)
B.hse=new A.m3("fan","\ud83c\udf00","Ceiling fan","Black, white, green and a fan box",D.b8)
B.hrZ=new A.m3("switch2p","\ud83d\udd25","Double-pole switch","240 V: breaks both hot legs",D.i1)
B.hs7=new A.m3("switch3","\ud83d\udd00","Three-way switch","Common and two travelers",D.aJ)
B.hsj=new A.m3("switch4","\ud83d\udd01","Four-way switch","Between two three-ways",D.cp)
B.hsh=new A.m3("switchsmart","\ud83d\udcf6","Smart, motion or timer switch","Needs the neutral wire",D.bq)
B.hs8=new A.m3("switchcombo","\ud83c\udf9a\ufe0f","Combination switch","Two switches, one feed",D.hj)
B.hs1=new A.m3("split","\ud83c\udf17","Split (half-switched) outlet","Break the tab: switched and always-on",D.aT)
B.hsf=new A.m3("v240four","\ud83e\uddfa","4-wire 240 V outlet","Dryer, range and EV: two hots, neutral, ground",D.c0)
B.hsg=new A.m3("v240three","\ud83d\udd70\ufe0f","3-wire 240 V outlet","Old dryer or range: no separate ground",D.cG)
B.hs0=new A.m3("v240only","\u2744\ufe0f","240 V only outlet","Window AC, welder: two hots and ground",D.b8)
B.hsa=new A.m3("isolated","\ud83c\udfed","Isolated-ground outlet","Its own ground wire to the panel",D.bv)
B.hs2=new A.m3("dryer4","\ud83d\udc55","Dryer outlet, 4-wire (14-30)","New houses: X, Y, W and a ground",D.i1)
B.hsc=new A.m3("dryer3","\ud83e\udde6","Dryer outlet, 3-wire (10-30)","Old houses: the neutral also grounds",D.cG)
B.hs9=new A.m3("range4","\ud83c\udf73","Range outlet, 4-wire (14-50)","50 amp stove: X, Y, W and a ground",D.c0)
B.hsk=new A.m3("range3","\ud83e\udd58","Range outlet, 3-wire (10-50)","Old 50 amp stove: no separate ground",D.aT)
B.hrY=new A.m3("washer","\ud83e\uddfa","Washing machine outlet (5-20)","Its own 20 amp circuit, near water",D.aJ)
B.hsi=new A.m3("cord3","\ud83d\udd0c","Dryer cord, 3-wire hookup","The ground strap stays on",D.bq)
B.hs4=new A.m3("cord4","\u26a1","Dryer cord, 4-wire hookup","Take the ground strap off",D.bv)
B.hsb=new A.m3("ptrap","\ud83e\udea0","Sink drain (P-trap)","Build a drain with a water seal",D.cp)
B.hs3=new A.m3("faucet","\ud83d\udeb0","Faucet supply lines","Hot left, cold right",D.c0)
B.hs_=new A.m3("house","\ud83c\udfd7\ufe0f","Build and fix a house","Stage by stage, then repair",D.bq)
B.dhe=w([B.hsd,B.hs5,B.hs6,B.hse,B.hrZ,B.hs7,B.hsj,B.hsh,B.hs8,B.hs1,B.hsf,B.hsg,B.hs0,B.hsa,B.hs2,B.hsc,B.hs9,B.hsk,B.hrY,B.hsi,B.hs4,B.hsb,B.hs3,B.hs_],C.as("O<m3>"))
B.hnn=new A.iR("always","Black \xb7 always hot (from the panel)",B.ru,D.c,"hot")
B.hnh=new A.iR("switched","Red \xb7 switched hot (from the wall switch)",B.vR,D.c,"hot")
B.dhk=w([B.r6,B.EJ,B.hnn,B.hnh],x.d)
B.dho=w([y.O,"Find the LINE and LOAD screws. LOAD is covered with yellow tape. Leave it covered unless you feed another outlet.",y.R,"Fasten the white wire to the silver LINE screw.","Fasten the black wire to the brass LINE screw.","Push the GFCI into the box and put the plate on.","Turn the power on, press RESET, then press TEST. It must click off."],x.s)
B.dhr=w([y.O,y.x,y.R,"Fasten the black wire (power in, or to the light) to the COMMON screw: the odd-coloured one.","Fasten the first traveler (red) to a TRAVELER screw.","Fasten the second traveler (white wire taped black) to the other TRAVELER screw.",y.b,y.n],x.s)
B.hz3=new A.pJ(0,0,80,26)
B.hzc=new A.pJ(1,90,56,22)
B.dhK=w([B.hz3,B.hzc],x.X)
B.dhU=w(["car","ambulance","firetruck"],x.s)
B.dhV=w([y.O,y.x,"This outlet has its own 20 amp breaker and 12 gauge wire (a yellow cable): the washer must not share its circuit with anything else. The T-shaped slot tells you it takes both 15 and 20 amp plugs. In a laundry area the new code asks for GFCI protection, from a GFCI breaker or a GFCI outlet before it.",y.R,y.F,"Fasten the black hot to a BRASS screw.",y.b,y.n],x.s)
B.dDw=new A.ib(-62,62,6,46)
B.dDj=new A.ib(-117,-73,149,171)
B.dDt=new A.ib(-57,-13,164,186)
B.dDe=new A.ib(73,117,159,181)
B.dD6=new A.ib(120,144,140,160)
B.dD4=new A.ib(108,142,48,60)
B.di_=w([B.dDw,B.dDj,B.dDt,B.dDe,B.dD6,B.dD4],x.T)
B.di3=w([0.1,8.05],x.n)
B.h3x=new A.q(1000,900,1500)
B.h20=new A.q(0,200,0)
B.aQD=new C.z(B.h3x,B.h20)
B.h6k=new A.q(300,70,1000)
B.h2l=new A.q(0,250,300)
B.eLr=new C.z(B.h6k,B.h2l)
B.hi0=new A.q(-200,90,780)
B.h2h=new A.q(0,240,300)
B.eHp=new C.z(B.hi0,B.h2h)
B.hiq=new A.q(-420,520,1000)
B.h2f=new A.q(0,230,300)
B.eD0=new C.z(B.hiq,B.h2f)
B.h8K=new A.q(700,330,900)
B.h6i=new A.q(300,230,200)
B.eQf=new C.z(B.h8K,B.h6i)
B.h3R=new A.q(1100,80,300)
B.h7R=new A.q(560,250,0)
B.ePd=new C.z(B.h3R,B.h7R)
B.h3G=new A.q(1080,100,-250)
B.h7Q=new A.q(560,240,-100)
B.eTe=new C.z(B.h3G,B.h7Q)
B.h3w=new A.q(1000,700,-700)
B.h5i=new A.q(200,230,-300)
B.eVr=new C.z(B.h3w,B.h5i)
B.h5j=new A.q(200,90,-860)
B.h2n=new A.q(0,250,-300)
B.eRN=new C.z(B.h5j,B.h2n)
B.hi8=new A.q(-300,110,-820)
B.h2i=new A.q(0,240,-300)
B.eI0=new C.z(B.hi8,B.h2i)
B.hiZ=new A.q(-900,600,-600)
B.hi9=new A.q(-300,230,-100)
B.eGB=new C.z(B.hiZ,B.hi9)
B.hhK=new A.q(-1100,90,-200)
B.hix=new A.q(-560,250,0)
B.eVp=new C.z(B.hhK,B.hix)
B.hhJ=new A.q(-1100,120,250)
B.hiw=new A.q(-560,240,0)
B.eKS=new C.z(B.hhJ,B.hiw)
B.hiG=new A.q(-700,520,1000)
B.hhG=new A.q(-100,230,100)
B.eEA=new C.z(B.hiG,B.hhG)
B.h5h=new A.q(200,170,1300)
B.h2e=new A.q(0,230,150)
B.eVb=new C.z(B.h5h,B.h2e)
B.dij=w([B.aQD,B.eLr,B.eHp,B.eD0,B.eQf,B.ePd,B.eTe,B.eVr,B.eRN,B.eI0,B.eGB,B.eVp,B.eKS,B.eEA,B.eVb,B.aQD],x.dt)
B.hcB=new A.q(-0.35,11,-3.4)
B.haB=new A.q(-0.35,3.2,-3.2)
B.hf1=new A.q(-0.35,2.2,-1.9)
B.h8x=new A.q(-0.35,0.7,-1.5)
B.dik=w([B.hcB,B.haB,B.hf1,B.h8x],x.o)
B.hk5=new A.q(5.2,7.5,-7.85)
B.heN=new A.q(5.2,4,-7.85)
B.diq=w([B.hk5,B.heN],x.o)
B.eQW=new C.z(-1,"NGMY")
B.eyh=new C.z(1,"ELEVATOR")
B.diP=w([B.eQW,B.eyh],x.Q)
B.bLi=new A.fm(21,"LOAD hot (brass, taped)",D.vo,y.P,!0,"load")
B.bLk=new A.fm(22,"LINE hot (brass)",B.JZ,"The black (hot) wire from the breaker goes on the brass LINE screw.",!1,"hot")
B.bLh=new A.fm(23,"LOAD neutral (silver, taped)",D.vo,y.P,!0,"load")
B.bLt=new A.fm(24,"LINE neutral (silver)",B.JY,"The white (neutral) wire from the breaker goes on the silver LINE screw.",!1,"neutral")
B.diU=w([B.bLi,B.bLk,B.bLh,B.bLt,B.anv],x.r)
B.hh8=new A.q(0,15.5,-3.6)
B.hcV=new A.q(0,20,-3.6)
B.hkP=new A.q(0,22.5,-2)
B.ha9=new A.q(0,22.5,1.1999999999999997)
B.aby=new A.q(0,21.1,1.6)
B.dj_=w([B.hh8,B.hcV,B.hkP,B.ha9,B.aby],x.o)
B.djD=w([],x.bm)
B.It=w([],x.F)
B.djC=w([],x.dI)
B.uV=w([],x.E)
B.djE=w([],x.T)
B.wL=w([],x.z)
B.aB9=w([],x.e3)
B.qH=w([],x.a)
B.aB8=w([],x.J)
B.nD=w([],x.o)
B.aBb=w([],x.h)
B.aBa=w([],x.f)
B.eGV=new C.z(-1.6,3.5)
B.eGt=new C.z(1.6,3.5)
B.eIt=new C.z(-1.6,-3.5)
B.eF9=new C.z(1.6,-3.5)
B.djS=w([B.eGV,B.eGt,B.eIt,B.eF9],x.f)
B.djZ=w([y.O,"Look at the face: two slanted slots at the top (X and Y, hot) and one straight slot at the bottom (W, neutral), and no ground hole. That is a NEMA 10-50, the old 3-wire range outlet.",y.r,y.E,y.k,y.b,y.n],x.s)
B.dk0=w([y.O,y.x,"Look at the face: a straight slot at the top (W, neutral), two straight slots at the sides (X and Y, hot) and a round hole at the bottom (G, ground). That is a NEMA 14-50, the 4-wire range outlet. It takes 6 gauge wire and a 50 amp double breaker.",y.R,y.r,y.E,y.k,y.b,y.n],x.s)
B.aBi=w([!1,!1,!1,!1],x.u)
B.ehX={in1:0,in2:1}
B.aRN=new C.dx(B.ehX,2,x.M)
B.bLc=new A.fm(23,"IN screw (top left)",B.aRN,y.g,!1,"hot")
B.bLE=new A.fm(21,"IN screw (top right)",B.aRN,y.g,!1,"hot")
B.eil={out1:0,out2:1}
B.aRT=new C.dx(B.eil,2,x.M)
B.bLv=new A.fm(24,"OUT screw (bottom left)",B.aRT,y.e,!1,"hot")
B.bLx=new A.fm(22,"OUT screw (bottom right)",B.aRT,y.e,!1,"hot")
B.dkm=w([B.uu,B.bLc,B.bLE,B.bLv,B.bLx],x.r)
B.dkw=w(["city","billboards","edges","houses","hospital","traffic"],x.s)
B.dkI=w(["Look at the pieces: the tailpiece, the P-trap and the trap arm. Pick the tailpiece first and tap its glowing outline under the sink.","Pick the P-trap (the U-shaped bend) and tap its glowing outline. It joins the tailpiece.","Pick the trap arm and tap its outline. It joins the trap to the wall drain.","Slide each slip nut up to its joint and hand tighten it: tap the nuts.","Run the water and look for leaks. The U-bend keeps a plug of water that blocks sewer gas."],x.s)
B.fNJ=new C.y("\u2728",null,D.aad,null,null,null,null,null,null,null,null,null)
B.fYe=new C.y("Nobody needs help right now.",null,D.fy,null,D.K,null,null,null,null,null,null,null)
B.fxA=new C.F(!0,D.aR,null,null,null,null,13,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fQ6=new C.y("Everybody's wiring and plumbing works. Keep an eye on food and health: things break when you least expect it.",null,B.fxA,null,D.K,null,null,null,null,null,null,null)
B.dl7=w([B.fNJ,D.N,B.fYe,D.av,B.fQ6],x.p)
B.dle=w(["road","roundabout","roadturn","roadtee","roadcross","house2","bighouse","billboard","tower","hq","store","gasstation","dmv","ubstation","townsign","cornersign","adboard","shop","hospital","firestation","school","car","firetruck","ambulance","dog","cat","cow","sheep","chicken","horse","tree","pine","bush","flowers","fence","lamppost","bench","pond","swing","shed","doghouse"],x.s)
B.eQP=new C.z(-1150,80)
B.exQ=new C.z(1150,80)
B.eQO=new C.z(-1150,1990)
B.exP=new C.z(1150,1990)
B.dln=w([B.eQP,B.exQ,B.eQO,B.exP],x.f)
B.f9a=new A.rX("pills","\ud83e\ude79","Pain pills","Cures a headache or a cold: you walk normally again",8,0,0,0,!0)
B.f99=new A.rX("bread","\ud83c\udf5e","Food for the town","5 portions for the people who live here",10,0,0,0,!1)
B.f98=new A.rX("medicine","\ud83d\udc8a","Medicine","3 doses for the sick",12,0,0,0,!1)
B.dlr=w([B.f9a,B.f99,B.f98],x.U)
B.dlu=w([D.aw,D.bs,D.bf],x.O)
B.hhs=new A.q(125,292,-121.5)
B.hkE=new A.q(-125,292,-121.5)
B.h3u=new A.q(-125,208,-121.5)
B.hh4=new A.q(125,208,-121.5)
B.dly=w([B.hhs,B.hkE,B.h3u,B.hh4],x.o)
B.h4C=new A.q(11.4,4.6,-6)
B.hdg=new A.q(11.4,5,-7.85)
B.h8y=new A.q(2.6,5,-7.85)
B.h9i=new A.q(2.6,3.4,-7.85)
B.dlA=w([B.h4C,B.hdg,B.h8y,B.h9i],x.o)
B.dlE=w(["hospital","shop","school"],x.s)
B.dlF=w(["hot","cold"],x.s)
B.dlI=w([D.aw,D.bf,D.ay,D.f8,D.bS],x.O)
B.hnl=new A.iR("black","Black \xb7 hot",B.ru,D.c,"hot")
B.hnf=new A.iR("white","White \xb7 neutral",B.m_,D.au,"neutral")
B.S9=w([B.hnl,B.hnf,B.r6],x.d)
B.eDo=new C.z(-3.5,4)
B.eKs=new C.z(3.5,4)
B.eFC=new C.z(-3.5,-4)
B.exe=new C.z(3.5,-4)
B.dm8=w([B.eDo,B.eKs,B.eFC,B.exe],x.f)
B.dmd=w(["Ada","Ben","Chidi","Dina","Efe","Farah","Gus","Halima","Ivo","Jamal","Kemi","Lola"],x.s)
B.eVz=new C.z(-2.4,5)
B.eLU=new C.z(2.4,5)
B.eJ4=new C.z(-2.4,-5)
B.eHL=new C.z(2.4,-5)
B.dme=w([B.eVz,B.eLU,B.eJ4,B.eHL],x.f)
B.dmH=w([y.O,"Break off the little brass tab between the two brass screws, so the two halves are separate.",y.R,"Fasten the white neutral to a SILVER screw (the silver tab stays joined).","Fasten the always-hot black wire to the bottom BRASS screw.","Fasten the switched hot (red, from the wall switch) to the top BRASS screw.",y.b,y.n],x.s)
B.dmS=w([y.O,y.x,"Look at the face: an L-shaped slot (W, neutral), two straight slots at the sides (X and Y, hot) and a round hole (G, ground). That is a NEMA 14-30, the 4-wire dryer outlet. It takes 10 gauge wire and a 30 amp double breaker.",y.R,y.r,y.E,y.k,y.b,y.n],x.s)
B.bLr=new A.fm(25,"Green screw G: GROUND",B.Ah,y.H,!1,"ground")
B.aBw=w([B.bLr,B.Os,B.ant,B.anC],x.r)
B.f_f=new C.b5(-6,-4,D.c_)
B.eYx=new C.b5(5,-5,D.bs)
B.f_d=new C.b5(0,1,D.aw)
B.f_O=new C.b5(-5,5,D.bq)
B.eXw=new C.b5(6,4,D.c)
B.dn1=w([B.f_f,B.eYx,B.f_d,B.f_O,B.eXw],x.dV)
B.dnv=w([Y.qU,T.lq],x.f)
B.dnz=w(["split","v240four","v240three","v240only","isolated"],x.s)
B.ehJ={feed:0}
B.f8b=new C.dx(B.ehJ,1,x.M)
B.bLg=new A.fm(21,"FEED screw (joined tab)",B.f8b,"The one feed wire goes on the side where the brass screws are joined by a tab: it powers both switches.",!1,"hot")
B.ei8={loadA:0,loadB:1}
B.aRS=new C.dx(B.ei8,2,x.M)
B.bLI=new A.fm(22,"Switch 1 screw \u2192 light 1",B.aRS,y.q,!1,"hot")
B.bLN=new A.fm(24,"Switch 2 screw \u2192 light 2",B.aRS,y.q,!1,"hot")
B.dnM=w([B.uu,B.bLg,B.bLI,B.bLN],x.r)
B.eQh=new C.z("Slab","First the concrete slab (the foundation) is poured and left to cure. Every wall sits on it.")
B.eTi=new C.z("Framing","The carpenters build the wall frames from 2x4 studs, spaced 16 inches apart, with plates on the top and bottom.")
B.eHu=new C.z("Plumbing rough-in","The plumber runs the hot (red) and cold (blue) water lines and the white drain pipes inside the walls and floor before anything is closed up.")
B.eOq=new C.z("Electrical rough-in","The electrician runs the yellow and white cables from the breaker panel to every box, and fixes the boxes to the studs.")
B.ePw=new C.z("Drywall","Drywall covers the frame. Here it is see-through so you can still look at the pipes and wires behind it.")
B.eHW=new C.z("Fixtures","Last come the outlets, switches, light, sink, toilet and water heater. This is where most repairs happen.")
B.eJf=new C.z("Roof","The roof goes on to keep everything dry. It is see-through here so you can keep looking inside.")
B.dnP=w([B.eQh,B.eTi,B.eHu,B.eOq,B.ePw,B.eHW,B.eJf],x.L)
B.dDg=new A.ib(-100,100,24,90)
B.dDl=new A.ib(-134,-110,100,190)
B.dD5=new A.ib(110,134,100,190)
B.dnT=w([B.dDg,B.dDl,B.dD5],x.T)
B.aZu=new A.iR("hot","Black \xb7 hot",B.ru,D.c,"hot")
B.dnZ=w([B.r6,B.EJ,B.aZu],x.d)
B.eQV=new C.z(-17,-9)
B.exZ=new C.z(17,-9)
B.eQU=new C.z(-17,9)
B.exY=new C.z(17,9)
B.dou=w([B.eQV,B.exZ,B.eQU,B.exY],x.f)
B.doA=w([-100,0,100],x.n)
B.doB=w([-110,-80,80,110],x.n)
B.a5C=w([-14,14],x.n)
B.doD=w([-150,150],x.n)
B.doE=w([-178,178],x.n)
B.doG=w([-18,18],x.n)
B.aBE=w([-20,0,20],x.n)
B.doI=w([-21,21],x.n)
B.a5D=w([-26,26],x.n)
B.doJ=w([-27,27],x.n)
B.f9b=new A.rX("can","\ud83d\udee2","Gas can","Half a tank of gas",8,0,0.5,0,!1)
B.aS6=new A.rX("tank","\u26fd","Fill the tank","A full tank",12,0,1,0,!1)
B.doK=w([B.f9b,B.aS6],x.U)
B.doM=w([-30,-10,10,30],x.n)
B.doN=w([-32,32],x.n)
B.doO=w([-32,-8,34],x.n)
B.aBF=w([-34,34],x.n)
B.doP=w([-3,3],x.n)
B.doQ=w([-47,47],x.n)
B.doR=w([-48,48],x.n)
B.doS=w([-52,52],x.n)
B.aBH=w([-55,55],x.n)
B.doU=w([-600,0,600],x.n)
B.doV=w([-600,600],x.n)
B.aBI=w([-62,62],x.n)
B.doW=w([-6,6],x.n)
B.doY=w([-70,70],x.n)
B.oD=w([-72,-24,24],x.t)
B.dp_=w([-75,75],x.n)
B.dp0=w(["Look under the sink. The wall has two shut-off valves: hot on the LEFT (red handle) and cold on the RIGHT (blue handle).","Pick the red hot hose. Tap the left shut-off valve, then the left faucet inlet.","Pick the blue cold hose. Tap the right shut-off valve, then the right faucet inlet.","Turn each valve handle (tap it) to let the water in. Check every connection for drips."],x.s)
B.aBJ=w([-7,7],x.n)
B.aBK=w([-80,80],x.n)
B.dp2=w([-900,-300,300,900],x.n)
B.dp3=w([-90,0,90],x.n)
B.dp4=w([-90,-52,52,90],x.n)
B.aBN=w([-9,9],x.n)
B.dpg=w(["switch2p","switch3","switch4","switchsmart","switchcombo"],x.s)
B.dpo=w(["medicine","food"],x.s)
B.dpB=w([y.O,y.x,y.R,"The first traveler from the FIRST three-way goes on a top screw (IN).","The second traveler from the FIRST three-way goes on the other top screw (IN).","The first traveler to the SECOND three-way goes on a bottom screw (OUT).","The second traveler to the SECOND three-way goes on the other bottom screw (OUT).",y.b,y.n],x.s)
B.dq9=w([D.d0,D.ay],x.O)
B.h8H=new A.q(8.2,5,-7.85)
B.heR=new A.q(8.2,1.2,-7.85)
B.hho=new A.q(8.2,1,-7.4)
B.dqM=w([B.h8H,B.heR,B.hho],x.o)
B.hn8=new A.iR("common","Black \xb7 COMMON (power in or to the light)",B.ru,D.c,"hot")
B.hn6=new A.iR("trav1","Red \xb7 traveler 1",B.vR,D.c,"hot")
B.hni=new A.iR("trav2","White taped black \xb7 traveler 2",B.m_,D.au,"hot")
B.dqN=w([B.r6,B.hn8,B.hn6,B.hni],x.d)
B.a5M=w(["rug","road","roundabout","roadturn","roadtee","roadcross","pond","flowers"],x.s)
B.dr_=w(["human","soldier","michelle","xbot","human"],x.s)
B.eQJ=new C.z(-1050,"hospital")
B.eRk=new C.z(-630,"store")
B.eRc=new C.z(-420,"tower")
B.ext=new C.z(0,"tower")
B.ezF=new C.z(420,"tower")
B.eBM=new C.z(630,"store")
B.exI=new C.z(1050,"hospital")
B.dr4=w([B.eQJ,B.aQF,B.eRk,B.eRc,B.aQE,B.ext,B.aQs,B.ezF,B.eBM,B.aQu,B.exI],x.Q)
B.euA=new A.Fp(61,"Hot shut-off valve (left)",B.a9n,"Hot is always on the LEFT. The red hose goes on the left valve.")
B.ehz={cold:0}
B.aS2=new C.dx(B.ehz,1,x.M)
B.euB=new A.Fp(62,"Cold shut-off valve (right)",B.aS2,"Cold is always on the RIGHT. The blue hose goes on the right valve.")
B.euy=new A.Fp(63,"Hot faucet inlet (left)",B.a9n,"The left faucet inlet takes the hot (red) hose.")
B.euz=new A.Fp(64,"Cold faucet inlet (right)",B.aS2,"The right faucet inlet takes the cold (blue) hose.")
B.Sh=w([B.euA,B.euB,B.euy,B.euz],C.as("O<Fp>"))
B.bLM=new A.fm(21,"Brass screw X: HOT",B.Eh,y.m,!1,"hot")
B.bLf=new A.fm(22,"Brass screw Y: HOT",B.Eh,y.m,!1,"hot")
B.aC2=w([B.Os,B.bLM,B.bLf],x.r)
B.a5O=w(["the ceiling","the panel wall","the window wall","the door wall","the bare wall"],x.s)
B.a5P=w([-72,-48,-24,0,24],x.t)
B.aC8=w(["1 Rough-in","2 Drywall","3 Devices"],x.s)
B.dsd=w([y.O,y.x,"Look at the terminal block. There is a metal GROUND STRAP from the middle terminal to the frame of the appliance. On a 3-wire cord it stays on: the neutral also grounds the frame.","Fasten the white neutral to the MIDDLE terminal, under the strap.",y.A,y.d,y.b,y.n],x.s)
B.dDz=new A.ib(-90,10,130,160)
B.dDs=new A.ib(-50,50,70,100)
B.dDm=new A.ib(-134,-110,20,70)
B.dsH=w([B.dDz,B.dDs,B.dDm],x.T)
B.Sj=w(["road","roadturn","roadtee","roadcross"],x.s)
B.MR=new C.t(1,0.1843137254901961,0.6352941176470588,0.30980392156862746,D.q)
B.hns=new A.iR("ground","Green \xb7 ground (to the frame)",B.MR,D.c,"ground")
B.dsR=w([B.hns,B.aZs,B.aZv,B.aZt],x.d)
B.bLp=new A.fm(21,"Brass screw (top): HOT side",B.JZ,y.N,!1,"hot")
B.bLA=new A.fm(22,"Brass screw (bottom): HOT side",B.JZ,y.N,!1,"hot")
B.bLu=new A.fm(23,"Silver screw (top): NEUTRAL side",B.JY,y.Q,!1,"neutral")
B.bLj=new A.fm(24,"Silver screw (bottom): NEUTRAL side",B.JY,y.Q,!1,"neutral")
B.bLq=new A.fm(25,"Green screw: GROUND",B.Ah,"The green screw is for the bare copper or green GROUND wire.",!1,"ground")
B.dsT=w([B.bLp,B.bLA,B.bLu,B.bLj,B.bLq],x.r)
B.dsZ=w([y.O,y.x,y.R,"Fasten the black hot to one HOT brass screw.","Fasten the red hot to the other HOT brass screw. There is no neutral and no silver screw in use.",y.b,y.n],x.s)
B.eRr=new C.z(-700,225)
B.eQR=new C.z(-120,160)
B.exS=new C.z(120,160)
B.eCb=new C.z(720,225)
B.dte=w([B.eRr,B.eQR,B.exS,B.eCb],x.f)
B.eY0=new C.b5("hot","Hot hose (red)",B.rp)
B.eYR=new C.b5("cold","Cold hose (blue)",B.nf)
B.dtg=w([B.eY0,B.eYR],C.as("O<+(m,m,t)>"))
B.eze=new C.z(34,40)
B.hpT=new A.AF(B.eze,3.141592653589793,2.6,"Washing hands at the sink",!1,!1,!1,"")
B.dti=w([B.hpT],x.h)
B.dtn=w(["dryer","range","washer","","dryer","range"],x.s)
B.b2s=new A.Hz("NGMY navy",E.iC,E.Md,D.c,F.eY)
B.b2x=new A.Hz("Purple",D.oa,D.dH,D.c,D.bM)
B.b2v=new A.Hz("Green",D.h4,D.bP,D.c,D.m1)
B.b2t=new A.Hz("Sunset",D.el,D.ay,D.c,D.i0)
B.b2u=new A.Hz("Night",D.O,D.aK,D.b_,D.c_)
B.b2w=new A.Hz("Light",D.c,D.o_,E.iC,D.dZ)
B.a5S=w([B.b2s,B.b2x,B.b2v,B.b2t,B.b2u,B.b2w],C.as("O<Hz>"))
B.abE=new A.q(15,2.6,0)
B.aCi=w([B.aZ8,B.abE],x.o)
B.a5T=w([B.r6,B.EJ,B.abL,B.abM],x.d)
B.b7W=new C.ac(0,D.G,D.aS,D.I,24)
B.dtB=w([B.b7W],x.V)
B.dtP=w(["tail","trap","arm"],x.s)
B.dtX=w([!0,!0,!0,!0],x.u)
B.duf=w([B.r6,B.abL,B.abM],x.d)
B.btT=new C.t(1,0.1843137254901961,0.30980392156862746,0.30980392156862746,D.q)
B.brj=new C.t(1,0.3568627450980392,0.4196078431372549,0.5490196078431373,D.q)
B.dug=w([B.Y1,D.bt,B.btT,B.brj,D.bn,D.aK],x.O)
B.dum=w([D.bE,D.bP,D.cf,D.cd,D.vX,D.cw],x.O)
B.duo=w([-400,400,-900,900,-1400,1400],x.n)
B.dup=w([D.aw,D.bs,D.bf,D.d3],x.O)
B.duA=w([y.O,"Hold the fixture up to the ceiling box. It has three short wires: black, white and green.","Join the house ground wire to the fixture ground.","Join the house white wire to the fixture white wire with a wire nut.","Join the house black wire to the fixture black wire with a wire nut.","Push the wires into the box and fasten the fixture to the ceiling.",y.f],x.s)
B.dDy=new A.ib(-70,70,28,52)
B.dDp=new A.ib(-134,-96,100,170)
B.dDf=new A.ib(96,134,100,170)
B.duI=w([B.dDy,B.dDp,B.dDf],x.T)
B.duJ=w([30,60,120,180,300],x.t)
B.eQZ=new C.z(-210,60)
B.eyC=new C.z(210,90)
B.eR4=new C.z(-330,120)
B.ezb=new C.z(330,60)
B.eQN=new C.z(-110,330)
B.exO=new C.z(110,330)
B.eRi=new C.z(-560,640)
B.eBs=new C.z(560,640)
B.eRa=new C.z(-420,1100)
B.ezD=new C.z(420,1100)
B.duS=w([B.eQZ,B.eyC,B.eR4,B.ezb,B.eQN,B.exO,B.eRi,B.eBs,B.eRa,B.ezD],x.f)
B.c3C=new A.jT("Breaker off, then test","Before you touch any wire, switch its breaker OFF, then check with a voltage tester that the wire is dead. A switch on the wall is not enough.")
B.c3p=new A.jT("Lock out, tag out","On a real job you put a lock or a note on the panel so nobody switches the power back on while you work.")
B.c3J=new A.jT("Water and power","Water carries electricity. Near sinks, tubs and outdoors the outlets must be GFCI, and wet hands never touch wires.")
B.c3u=new A.jT("Eyes, ears, lungs","Safety glasses for drilling and cutting, ear protection for loud tools, and a mask when you sand drywall dust or cut tile.")
B.c3I=new A.jT("Shut the water off","Before you cut or loosen a pipe, close the main water valve and open a faucet to drain the line.")
B.dnh=w([B.c3C,B.c3p,B.c3J,B.c3u,B.c3I],x.Z)
B.c3V=new A.Nh("Safety first","\ud83e\uddba",D.c0,B.dnh)
B.c3K=new A.jT("Wire colours","Black is hot (it carries the power), white is neutral (the way back), bare copper or green is ground (the safety path). Red is a second hot, often used for a switched line.")
B.c3R=new A.jT("Screw colours","On an outlet the brass screw takes the hot wire, the silver screw takes the neutral and the green screw takes the ground.")
B.c3E=new A.jT("Wire size","14 gauge wire is for 15 amp circuits (lights and outlets). 12 gauge is for 20 amp circuits (kitchens). A thinner wire than the breaker allows can overheat and start a fire.")
B.c3y=new A.jT("Breakers","A breaker is a safety switch. It trips when a circuit carries too much current, so the wires never get hot enough to burn.")
B.c3M=new A.jT("Wire nuts","Strip about 3/4 inch, twist the bare ends together clockwise, and screw on the nut until no bare copper shows. Give each wire a gentle tug.")
B.c3S=new A.jT("Switches","A switch cuts the hot wire only. The neutral goes straight through to the light.")
B.c3T=new A.jT("GFCI","A GFCI outlet watches the current going out and coming back. If a little leaks (through water or a person) it cuts the power in a fraction of a second.")
B.c3r=new A.jT("Ceiling fans","A fan shakes and is heavy. It needs a box that says fan rated, fixed to the joist, not a plain light box.")
B.c3t=new A.jT("Heights","Outlets sit about 16 inches from the floor. Switches sit about 48 inches up, where your hand falls.")
B.dfn=w([B.c3K,B.c3R,B.c3E,B.c3y,B.c3M,B.c3S,B.c3T,B.c3r,B.c3t],x.Z)
B.c3Y=new A.Nh("Wiring basics","\u26a1",D.bs,B.dfn)
B.c3q=new A.jT("Hot left, cold right","On a faucet, hot is on the left and cold on the right. Hot lines are marked red and cold lines blue.")
B.c3D=new A.jT("The P-trap","The curved pipe under a sink always holds a little water. That water seal stops sewer gas coming up the drain.")
B.c3O=new A.jT("Shut-off valves","Every sink and toilet has its own small valve, so you can stop the water to one fixture without turning off the whole house.")
B.c3w=new A.jT("Slip nuts","Drain joints are sealed by a washer and a slip nut. Tighten by hand and a quarter turn: too much force cracks plastic.")
B.c3v=new A.jT("Wax ring","A toilet sits on a wax ring that seals it to the floor drain. A toilet is lowered straight down once, and cannot be slid around.")
B.c3L=new A.jT("Drain slope","Drains fall about 1/4 inch per foot so water and waste keep moving. Too flat and it clogs, too steep and the water leaves the solids behind.")
B.c3Q=new A.jT("Order of work","Plumbing goes from the top down on the drain (tailpiece, trap, arm) and from the wall out on the supply (valve, hose, fixture).")
B.clM=w([B.c3q,B.c3D,B.c3O,B.c3w,B.c3v,B.c3L,B.c3Q],x.Z)
B.c3W=new A.Nh("Plumbing basics","\ud83d\udeb0",D.cp,B.clM)
B.c3s=new A.jT("Studs","Studs are the vertical 2x4 posts inside a wall, 16 inches apart from centre to centre. Everything is fixed to them.")
B.c3G=new A.jT("Drilling studs","Holes for cable go through the middle of the stud, so a nail or screw cannot reach the wire.")
B.c3x=new A.jT("Drywall","A sheet is 4 feet wide, so its edges land on studs 48 inches apart. Screws go into studs only, just under the paper.")
B.c3A=new A.jT("Taping and mud","Seams get paper tape and three thin coats of joint compound, sanded smooth between coats, then primer and paint.")
B.c3P=new A.jT("Order of a build","Frame, run the pipes and wires (rough-in), inspect, hang drywall, finish it, paint, then fit the fixtures and devices.")
B.d_I=w([B.c3s,B.c3G,B.c3x,B.c3A,B.c3P],x.Z)
B.c3U=new A.Nh("Framing and walls","\ud83c\udfe0",D.dZ,B.d_I)
B.c3B=new A.jT("Voltage tester","A pen that glows or beeps near live wires. Test it on a known live outlet first, so you know it works.")
B.c3H=new A.jT("Wire strippers","Strip the plastic off without nicking the copper. A nick weakens the wire.")
B.c3N=new A.jT("Adjustable wrench","For nuts on valves and hoses. Hold the fitting steady with a second wrench so you do not twist the pipe.")
B.c3F=new A.jT("Drill and screw gun","A drill makes holes through studs. A screw gun sets drywall screws to the right depth.")
B.c3z=new A.jT("Level and tape measure","Measure twice, cut once. A level makes sure outlets, shelves and pipes are straight.")
B.dw0=w([B.c3B,B.c3H,B.c3N,B.c3F,B.c3z],x.Z)
B.c3X=new A.Nh("Tools","\ud83e\uddf0",D.bv,B.dw0)
B.dvB=w([B.c3V,B.c3Y,B.c3W,B.c3U,B.c3X],C.as("O<Nh>"))
B.dvE=w([y.O,"There is no separate ground wire here: the neutral also grounds the frame of the old appliance. This is only allowed in old installations.",y.r,y.E,y.k,y.b,y.n],x.s)
B.bhy=new C.t(1,0.48627450980392156,0.22745098039215686,0.22745098039215686,D.q)
B.bps=new C.t(1,0.24705882352941178,0.4196078431372549,0.30980392156862746,D.q)
B.bnJ=new C.t(1,0.4196078431372549,0.30980392156862746,0.48627450980392156,D.q)
B.bky=new C.t(1,0.47843137254901963,0.41568627450980394,0.23137254901960785,D.q)
B.dvI=w([B.Y1,B.bhy,B.bps,B.bnJ,B.bky],x.O)
B.dvU=w(["Cream","Sky","Blush","Mint","Butter","Periwinkle","White","Slate"],x.s)
B.hna=new A.iR("in1","Red \xb7 traveler in 1 (from the first 3-way)",B.vR,D.c,"hot")
B.hng=new A.iR("in2","White taped red \xb7 traveler in 2",B.m_,D.au,"hot")
B.af9=new C.t(1,0.6901960784313725,0.22745098039215686,0.16862745098039217,D.q)
B.hn7=new A.iR("out1","Red \xb7 traveler out 1 (to the second 3-way)",B.af9,D.c,"hot")
B.hnk=new A.iR("out2","White taped red \xb7 traveler out 2",D.bO,D.au,"hot")
B.dvX=w([B.r6,B.hna,B.hng,B.hn7,B.hnk],x.d)
B.eRu=new C.z(-760,330)
B.eCc=new C.z(760,330)
B.eRe=new C.z(-450,1080)
B.eAS=new C.z(450,1080)
B.dw_=w([B.eRu,B.eCc,B.eRe,B.eAS],x.f)
B.dw7=w([0.72,-0.72],x.n)
B.hnd=new A.iR("isoground","Green with yellow stripe \xb7 isolated ground",B.MR,D.c,"ground")
B.dwg=w([B.EJ,B.aZu,B.hnd],x.d)
B.dws=w([B.Os,B.any,B.anu],x.r)
B.dwD=w(["inspect","hand","screwdriver","pliers","wrench","crimper","plunger","flapper","newoutlet","patch"],x.s)
B.hz1=new A.pJ(0,0,70,26)
B.hzd=new A.pJ(1,-100,110,24)
B.hzf=new A.pJ(2,105,100,26)
B.dxa=w([B.hz1,B.hzd,B.hzf],x.X)
B.hiM=new A.q(-72,0,-60)
B.h8U=new A.q(72,0,-60)
B.h8T=new A.q(72,0,60)
B.hiL=new A.q(-72,0,60)
B.dxl=w([B.hiM,B.h8U,B.h8T,B.hiL],x.o)
B.hne=new A.iR("lineA","Black \xb7 hot leg 1 (from the panel)",B.ru,D.c,"hot")
B.hnj=new A.iR("lineB","Red \xb7 hot leg 2 (from the panel)",B.vR,D.c,"hot")
B.hnq=new A.iR("loadA","Black \xb7 hot leg 1 (to the heater)",B.MD,D.c,"hot")
B.hnc=new A.iR("loadB","Red \xb7 hot leg 2 (to the heater)",B.af9,D.c,"hot")
B.dxx=w([B.r6,B.hne,B.hnj,B.hnq,B.hnc],x.d)
B.dxD=w(["Maya","Kofi","Amara","Tunde","Zawadi"],x.s)
B.ehM={flange:0,wax:1,toilet:2,bolts:3,valve:4,hosehot:5,hosecold:6,faucet:7,tail:8,trap:9,arm:10}
B.aHL=new C.bu(B.ehM,["Flange","Wax ring","Toilet","Bolts","Shut-off valve","Hot hose","Cold hose","Faucet","Tailpiece","P-trap","Trap arm"],x.l)
B.dA_=new C.dg([25,"ground",23,"lineA",21,"lineB",24,"loadA",22,"loadB"],x.v)
B.dA0=new C.dg([25,"ground",23,"in1",21,"in2",24,"out1",22,"out2"],x.v)
B.aHQ=new C.dg([7000,"cable",7001,"drill",7010,"sheet",7011,"mud",7012,"tape",7013,"mud",7014,"screw",7015,"cut",7016,"sand",7017,"bead",7018,"paint",7019,"saw"],x.v)
B.aXS=new A.q(36,8,-40)
B.f0_=new C.b5("Roll of cable","Yellow 12 gauge cable for the outlets and white 14 gauge for the light. Tap it to pick up the cable roll, then tap a box.",B.aXS)
B.aYS=new A.q(-30,3,-38)
B.eYT=new C.b5("Cordless drill","Drills the holes in the studs for the cable. Tap it to pick it up, then tap a stud.",B.aYS)
B.hip=new A.q(-40,5,4)
B.eY6=new C.b5("Stack of drywall","Sheets of half inch drywall, 4 by 8 feet. Tap them to pick up a sheet, then tap where it goes.",B.hip)
B.aXW=new A.q(40,8,36)
B.eZQ=new C.b5("Bucket of joint compound","The mud: it fills the joints and covers the screw heads. Tap it to pick up the mud and the knife.",B.aXW)
B.aXY=new A.q(56,3,24)
B.eZX=new C.b5("Paper tape","Paper tape is pressed into the first coat of mud over every joint. Tap it to pick it up.",B.aXY)
B.aZ9=new A.q(26,1.5,46)
B.eZd=new C.b5("Taping knife","Spreads the mud. Tap it to pick up the mud and the knife.",B.aZ9)
B.aYR=new A.q(-2,3,44)
B.eXz=new C.b5("Screw gun","Drives the drywall screws just under the paper. Tap it to pick it up, then tap a hung sheet.",B.aYR)
B.aYI=new A.q(8,1.5,-34)
B.eYn=new C.b5("T-square and knife","A straight edge to score a sheet against before it is snapped. Tap it to pick up the cutter.",B.aYI)
B.aYV=new A.q(14,1.5,-46)
B.eYj=new C.b5("Sanding pole","Sands the dry mud smooth. Tap it to pick up the sander.",B.aYV)
B.aYE=new A.q(60,1.5,-8)
B.eXA=new C.b5("Corner bead","Metal angle for the corners of the door and the window. Tap it to pick it up.",B.aYE)
B.aYU=new A.q(-8,2,-22)
B.eXe=new C.b5("Paint tray and roller","Primer on the roller seals the paper and the mud so they look the same. Tap it to pick up the roller.",B.aYU)
B.h5m=new A.q(20,1,12)
B.f_I=new C.b5("Drywall saw","A pointed saw to cut the holes for the boxes, the door and the window. Tap it to pick it up.",B.h5m)
B.Du=new C.dg([7000,B.f0_,7001,B.eYT,7010,B.eY6,7011,B.eZQ,7012,B.eZX,7013,B.eZd,7014,B.eXz,7015,B.eYn,7016,B.eYj,7017,B.eXA,7018,B.eXe,7019,B.f_I],C.as("dg<G,+(m,m,q)>"))
B.ehf={xbot:0,michelle:1,soldier:2}
B.SG=new C.bu(B.ehf,["assets/avatars/Xbot.glb","assets/avatars/Michelle.glb","assets/avatars/Soldier.glb"],x.l)
B.egm={highway:0,tower:1,neon:2,roof:3,screen:4,gate:5}
B.aQq=new C.z(0,!1)
B.eyk=new C.z(1,!1)
B.ezr=new C.z(3,!1)
B.eyY=new C.z(2,!0)
B.eym=new C.z(1,!0)
B.ezs=new C.z(3,!0)
B.dAb=new C.bu(B.egm,[B.aQq,B.eyk,B.ezr,B.eyY,B.eym,B.ezs],C.as("bu<m,+(G,P)>"))
B.egH={look:0,outlet:1,switch:2,ceiling:3,drill:4,cable:5}
B.aHS=new C.bu(B.egH,["Look: tap any piece of the frame to learn its name and what it does. Turn the view by dragging, zoom with the buttons.","Outlet box: tap a stud (a green mark shows where the box will sit, 16 inches up). Put one on each of the four walls.","Switch box: tap a stud, ideally right beside the door. It sits 48 inches up.","Ceiling box: tap a joist, one of the boards across the top. The light will hang from it.","Drill: tap a yellow mark to drill a hole through that stud, 20 inches up. The cable can only pass through studs that have a hole.","Cable roll: tap a box and the cable unrolls from the breaker panel to it, through the holes. Tap a box that has cable to pull it out again."],x.l)
B.a6q=new C.dg([25,"ground",23,"neutral",21,"hot1",22,"hot2"],x.v)
B.dAg=new C.dg([25,"ground",23,"common",21,"trav1",22,"trav2"],x.v)
B.dAh=new C.dg([25,"ground",23,"neutral",21,"line",22,"load"],x.v)
B.dAi=new C.dg([25,"ground",23,"neutral",21,"switched",22,"always"],x.v)
B.dAn=new C.dg([25,"ground",21,"neutral",23,"hot1",22,"hot2"],x.v)
B.dAw=new C.dg([25,"ground",21,"hot1",22,"hot2"],x.v)
B.dAN=new C.dg([21,"neutral",23,"hot1",22,"hot2"],x.v)
B.ehb={bed:0,nightstand:1,wardrobe:2,desk:3,rug:4,sofa:5,armchair:6,coffee:7,tvstand:8,dining:9,chair:10,plant:11,lamp:12,console:13,shelf:14,tree:15,pine:16,bush:17,flowers:18,fence:19,lamppost:20,bench:21,car:22,road:23,roundabout:24,roadturn:25,roadtee:26,roadcross:27,house2:28,bighouse:29,pole:30,crate:31,billboard:32,tower:33,hq:34,store:35,gasstation:36,dmv:37,ubstation:38,townsign:39,cornersign:40,adboard:41,shop:42,hospital:43,firestation:44,school:45,firetruck:46,ambulance:47,dog:48,cat:49,cow:50,sheep:51,chicken:52,horse:53,pond:54,swing:55,shed:56,doghouse:57}
B.bKk=new A.fq("Bed","\ud83d\udecf\ufe0f",48,64)
B.bKw=new A.fq("Night table","\ud83e\ude91",13,13)
B.bK3=new A.fq("Wardrobe","\ud83d\udeaa",35,16)
B.bKf=new A.fq("Desk","\ud83d\udda5\ufe0f",38,19)
B.bK4=new A.fq("Rug","\ud83d\udfe5",56,40)
B.bK_=new A.fq("Sofa","\ud83d\udecb\ufe0f",64,26)
B.bKo=new A.fq("Armchair","\ud83d\udcba",24,24)
B.bKD=new A.fq("Coffee table","\u2615",32,19)
B.bK1=new A.fq("Media cabinet","\ud83d\uddc4\ufe0f",45,14)
B.bKB=new A.fq("Dining table","\ud83c\udf7d\ufe0f",45,29)
B.bKv=new A.fq("Chair","\ud83e\ude91",14,14)
B.bKC=new A.fq("Plant","\ud83e\udeb4",14,14)
B.bKx=new A.fq("Floor lamp","\ud83d\udca1",10,10)
B.bKl=new A.fq("Console table","\ud83d\uddc4\ufe0f",35,11)
B.bKu=new A.fq("Bookshelf","\ud83d\udcda",29,10)
B.bKH=new A.fq("Tree","\ud83c\udf33",36,36)
B.bKi=new A.fq("Pine tree","\ud83c\udf32",30,30)
B.bJZ=new A.fq("Bush","\ud83c\udf3f",18,18)
B.bKr=new A.fq("Flowers","\ud83c\udf37",22,22)
B.bJS=new A.fq("Fence","\ud83d\udea7",64,6)
B.bK5=new A.fq("Street lamp","\ud83c\udfee",8,8)
B.bKn=new A.fq("Bench","\ud83e\ude91",44,16)
B.bJT=new A.fq("Car","\ud83d\ude97",84,40)
B.bKe=new A.fq("Road","\ud83d\udee3\ufe0f",40,40)
B.bKI=new A.fq("Roundabout","\ud83d\udd04",80,80)
B.bJY=new A.fq("Road corner","\u21aa\ufe0f",40,40)
B.bKK=new A.fq("Road T-junction","\u22a4",40,40)
B.bKg=new A.fq("Crossroads","\u271a",40,40)
B.bK0=new A.fq("House","\ud83c\udfe0",108,90)
B.bKj=new A.fq("Big house","\ud83c\udfe2",158,120)
B.bJU=new A.fq("Electric pole","\ud83d\udd0c",10,10)
B.bKd=new A.fq("Crate","\ud83d\udce6",28,28)
B.bKG=new A.fq("Billboard","\ud83e\udea7",72,10)
B.bJX=new A.fq("Office tower","\ud83c\udfe2",100,70)
B.bK8=new A.fq("NGMY company","\ud83c\udfdb\ufe0f",170,90)
B.bK7=new A.fq("NGMY store","\ud83c\udfec",130,80)
B.bKJ=new A.fq("NGMY gas station","\u26fd",150,90)
B.bKt=new A.fq("NGMY licence office","\ud83e\udeaa",130,80)
B.bKa=new A.fq("NGMY Uber","\ud83d\ude96",120,60)
B.bJV=new A.fq("NGMY Town sign","\ud83e\udea7",380,14)
B.bKp=new A.fq("NGMY Town billboard","\ud83e\udea7",150,10)
B.bKc=new A.fq("NGMY ad billboard","\ud83d\udcfa",330,14)
B.bKh=new A.fq("Shop","\ud83c\udfea",126,90)
B.bK9=new A.fq("Hospital","\ud83c\udfe5",165,105)
B.bJR=new A.fq("Fire station","\ud83d\ude92",135,96)
B.bKs=new A.fq("School","\ud83c\udfeb",186,105)
B.bKA=new A.fq("Fire truck","\ud83d\ude92",96,40)
B.bKm=new A.fq("Ambulance","\ud83d\ude91",84,40)
B.bK6=new A.fq("Dog","\ud83d\udc15",22,10)
B.bKb=new A.fq("Cat","\ud83d\udc08",16,8)
B.bKy=new A.fq("Cow","\ud83d\udc04",38,16)
B.bK2=new A.fq("Sheep","\ud83d\udc11",26,14)
B.bKz=new A.fq("Chicken","\ud83d\udc14",12,8)
B.bJW=new A.fq("Horse","\ud83d\udc0e",46,16)
B.bKE=new A.fq("Pond","\ud83d\udca7",80,56)
B.bKq=new A.fq("Swing set","\ud83c\udfa0",56,40)
B.bKF=new A.fq("Shed","\ud83d\uded6",50,42)
B.bKL=new A.fq("Dog house","\ud83d\udc15",24,22)
B.hF=new C.bu(B.ehb,[B.bKk,B.bKw,B.bK3,B.bKf,B.bK4,B.bK_,B.bKo,B.bKD,B.bK1,B.bKB,B.bKv,B.bKC,B.bKx,B.bKl,B.bKu,B.bKH,B.bKi,B.bJZ,B.bKr,B.bJS,B.bK5,B.bKn,B.bJT,B.bKe,B.bKI,B.bJY,B.bKK,B.bKg,B.bK0,B.bKj,B.bJU,B.bKd,B.bKG,B.bJX,B.bK8,B.bK7,B.bKJ,B.bKt,B.bKa,B.bJV,B.bKp,B.bKc,B.bKh,B.bK9,B.bJR,B.bKs,B.bKA,B.bKm,B.bK6,B.bKb,B.bKy,B.bK2,B.bKz,B.bJW,B.bKE,B.bKq,B.bKF,B.bKL],C.as("bu<m,fq>"))
B.egD={look:0,sheet:1,cut:2,screw:3,saw:4,bead:5,mud:6,tape:7,sand:8,paint:9}
B.aI0=new C.bu(B.egD,["Look: tap a sheet, a hole or a surface to learn about it. The tools and the stack of sheets are on the floor.","Drywall sheet: tap a green place. The ceiling goes first. The narrow pieces need cutting first.","Cutter: tap an orange place to cut the sheet to size (score with the knife against the T-square, then snap).","Screw gun: tap a yellow sheet to screw it to every stud or joist.","Saw: tap a red mark to cut the hole for a box, the door or the window.","Corner bead: tap a door or window once its opening is cut, to protect the corner.","Mud: tap a blue surface for a coat. First the bed coat, then the tape, then two more coats. Wait for each to dry.","Tape: right after the first coat, tap the surface to press paper tape into the wet mud.","Sander: when the third coat is dry, tap the surface to sand it smooth.","Roller: when it is sanded, tap the surface to prime it."],x.l)
B.dBo=new C.dg([25,"ground",23,"neutral",21,"hot"],x.v)
B.dBp=new C.dg([25,"isoground",23,"neutral",21,"hot"],x.v)
B.egv={outlet:0,switch:1,light:2,fan:3,gfci:4}
B.daA=w(["Silver","Brass","Green"],x.s)
B.fiT=new A.vo("On a standard receptacle, which terminal does the hot wire go on?",B.daA,1,"Brass is the hot side. Silver is neutral and green is the ground.")
B.cLX=w(["Yes, it works","No: reversed polarity leaves live parts that should be dead","Yes if there is a ground"],x.s)
B.fiR=new A.vo("The outlet works with hot and neutral swapped. Is it safe?",B.cLX,1,"Working is not the same as safe. Reversed polarity energizes the wrong parts.")
B.d47=w(["Yes","No, never","Only in old houses"],x.s)
B.fiN=new A.vo("May the neutral be used as the equipment ground?",B.d47,1,"The ground is a separate safety path. The neutral carries current in normal use.")
B.dfY=w([B.fiT,B.fiR,B.fiN],x.J)
B.c8n=w(["The hot to the light","The neutral","The ground"],x.s)
B.fiU=new A.vo("A single-pole switch opens and closes which conductor?",B.c8n,0,"The switch breaks the hot conductor to the load.")
B.d1G=w(["Yes","No, never","If the wire is thick"],x.s)
B.fiV=new A.vo("May the ground wire be used to carry current to the light?",B.d1G,1,"The equipment ground is only for safety.")
B.d9x=w(["Yes","No: never assume it does","Only new houses"],x.s)
B.fiO=new A.vo("Does every switch box have a neutral?",B.d9x,1,"Many switch boxes have no neutral. Smart switches need to be chosen for that.")
B.dvF=w([B.fiU,B.fiV,B.fiO],x.J)
B.dn4=w(["Yes","No: the wires, the ground and the support must be right","Only with a switch"],x.s)
B.fiS=new A.vo("Does a light that turns on prove the fixture is wired safely?",B.dn4,1,"A fixture can light up with an unsafe connection.")
B.dm6=w(["Its wires","A box or mount rated for its weight","Tape"],x.s)
B.fiW=new A.vo("A fixture must hang from:",B.dm6,1,"The box carries the weight. The wires never do.")
B.d9X=w([B.fiS,B.fiW],x.J)
B.db0=w(["Any ceiling box","Rated for a fan","Plastic only"],x.s)
B.fiQ=new A.vo("A ceiling fan needs a box that is:",B.db0,1,"A fan shakes and is heavy. A plain light box can let it fall.")
B.dqd=w(["Yes","No: support, ground and wiring must all be right","Yes if it is quiet"],x.s)
B.fiP=new A.vo("The fan spins. Is the installation safe?",B.dqd,1,"A spinning fan says nothing about the box, the ground or the connections.")
B.daf=w([B.fiQ,B.fiP],x.J)
B.d5Q=w(["LINE","LOAD","Either"],x.s)
B.fiM=new A.vo("On a GFCI, power from the breaker goes on:",B.d5Q,0,"LINE is the supply. LOAD feeds outlets further down the line.")
B.cQF=w([B.fiM],x.J)
B.aI1=new C.bu(B.egv,[B.dfY,B.dvF,B.d9X,B.daf,B.cQF],C.as("bu<m,ai<vo>>"))
B.eha={house2:0,bighouse:1,shop:2,billboard:3,crate:4,car:5,tree:6,bench:7,tower:8,hq:9,store:10,gasstation:11,cornersign:12}
B.dBs=new C.bu(B.eha,[40,80,70,15,4,25,5,4,120,200,90,90,30],C.as("bu<m,G>"))
B.bJ4=new A.uK("The living room has no power at all.","The living room breaker is sitting in the middle (orange). It has tripped. Flip it fully OFF and ON again, by hand.","hand","Breaker reset. The living room has power again.",72,0,"")
B.bJe=new A.uK("There is no hot water.","The water heater breaker has tripped (orange). Reset it by hand.","hand","Breaker reset. The water heater is heating again.",75,0,"")
B.bJb=new A.uK("Water is dripping under the kitchen sink.","The slip nut on the P-trap is loose and the joint drips. Tighten it with the wrench.","wrench","Slip nut tightened. The drip stopped.",87,0,"")
B.bJ3=new A.uK("There is a wet spot on the wall behind the kitchen.","A crimped joint in the hot water line is leaking. A crimp joint is squeezed with a crimping tool, not tightened with a wrench.","crimper","The joint is crimped again and it does not leak.",96,0,"")
B.bJ8=new A.uK("The outlet by the sofa does not work, but the lights do.","The tester finds power at the box but the outlet is dead: a screw on the outlet has come loose. Turn the breaker off first, then tighten the screws with the screwdriver.","screwdriver","You tightened the loose screw. The outlet works again.",81,72,"Turn the living room breaker OFF first.")
B.bJ5=new A.uK("The living room light flickers.","A wire nut in the light box has worked loose. Turn the breaker off, then twist the wire nut tight with the pliers.","pliers","You twisted the wire nut tight. The light is steady.",83,72,"Turn the living room breaker OFF first.")
B.bJ6=new A.uK("The kitchen outlet sparks and smells burnt.","The outlet has burnt. Turn the breaker off and replace it with a new outlet.","newoutlet","New outlet fitted. No more sparks.",84,73,"Turn the kitchen breaker OFF first.")
B.bJc=new A.uK("The kitchen outlets are dead.","The GFCI outlet has tripped. Press its RESET button by hand.","hand","You pressed RESET. The kitchen outlets work.",84,0,"")
B.bJ7=new A.uK("The toilet keeps running.","The rubber flapper in the tank no longer seals, so water leaks into the bowl all the time. Replace the flapper.","flapper","New flapper fitted. The toilet stops running.",88,0,"")
B.bJa=new A.uK("The kitchen faucet drips.","The faucet washer is worn. Tighten the packing nut with the wrench, then check.","wrench","The faucet is sealed. No more drips.",85,0,"")
B.bJ9=new A.uK("There is a hole in the wall.","A hole in the drywall. Stick a drywall patch over it, then tape, mud, sand and paint it.","patch","Patch fitted. Now it only needs mud, sanding and paint.",95,0,"")
B.bJd=new A.uK("The kitchen sink drains very slowly.","The drain is clogged. Use the plunger.","plunger","The clog is gone. The sink drains fast.",94,0,"")
B.wP=new C.dg([B.a10,B.bJ4,B.a11,B.bJe,B.Oi,B.bJb,B.Oj,B.bJ3,B.ane,B.bJ8,B.a14,B.bJ5,B.a15,B.bJ6,B.a16,B.bJc,B.a17,B.bJ7,B.a18,B.bJa,B.a12,B.bJ9,B.a13,B.bJd],C.as("dg<rt,uK>"))
B.eiL={duo:0,line3:1,far3:2,skyline:3,lines6:4}
B.eHr=new C.z(D.a3C,0)
B.eV2=new C.z(A7.asL,1)
B.csY=w([2,0,1],x.t)
B.eCe=new C.z(B.csY,2)
B.c8r=w([0,1,2,3],x.t)
B.eU1=new C.z(B.c8r,0)
B.dob=w([0,1,2,5,4,3],x.t)
B.eKA=new C.z(B.dob,1)
B.dBI=new C.bu(B.eiL,[B.eHr,B.eV2,B.eCe,B.eU1,B.eKA],C.as("bu<m,+(ai<G>,G)>"))
B.eid={michelle:0}
B.dBJ=new C.bu(B.eid,[0.55],x.gW)
B.SL=new C.bu(D.hW,[],C.as("bu<G,cL>"))
B.IO=new C.bu(D.hW,[],C.as("bu<G,m>"))
B.a6x=new C.dg([23,"neutral",21,"hot1",22,"hot2"],x.v)
B.dC_=new C.dg([25,"ground",21,"feed",22,"loadA",24,"loadB"],x.v)
B.ehK={tail:0,trap:1,arm:2}
B.dC1=new C.bu(B.ehK,["Tailpiece","P-trap","Trap arm"],x.l)
B.aKI={xbot:0,michelle:1,soldier:2,human:3}
B.aIf=new C.bu(B.aKI,["\ud83e\udd16 X Bot","\ud83d\udc83 Dancer","\ud83e\ude96 Soldier","\ud83d\ude42 Person"],x.l)
B.afJ=new C.t(1,0.9137254901960784,0.9215686274509803,0.9372549019607843,D.q)
B.bn1=new C.t(1,0.8549019607843137,0.8666666666666667,0.8901960784313725,D.q)
B.TR=new A.tU(B.afJ,E.XT,B.afJ,B.bn1,"xbot",!1,0,1)
B.bp2=new C.t(1,0.0784313725490196,0.047058823529411764,0.03137254901960784,D.q)
B.bf5=new C.t(1,0.9607843137254902,0.7725490196078432,0.09411764705882353,D.q)
B.etg=new A.tU(B.ajr,B.bp2,D.dn,B.bf5,"michelle",!0,2,1)
B.bu_=new C.t(1,0.8509803921568627,0.6470588235294118,0.48627450980392156,D.q)
B.bsV=new C.t(1,0.3568627450980392,0.4196078431372549,0.22745098039215686,D.q)
B.bhz=new C.t(1,0.5411764705882353,0.4823529411764706,0.3333333333333333,D.q)
B.JC=new A.tU(B.bu_,D.MF,B.bsV,B.bhz,"soldier",!1,0,1.04)
B.a8l=new A.tU(B.afd,B.Mw,B.ajB,B.LX,"human",!1,0,1)
B.aIg=new C.bu(B.aKI,[B.TR,B.etg,B.JC,B.a8l],C.as("bu<m,tU>"))
B.eiv={soldier:0}
B.dCk=new C.bu(B.eiv,[3.141592653589793],x.gW)
B.hgJ=new A.q(0,0,-1.2)
B.efj=new A.cL("Electrical box","The box is ready. Pull a cable to it, then wire a device.",B.hgJ,9)
B.dCn=new C.dg([3,B.efj],C.as("dg<G,cL>"))
B.aKB={inspect:0,hand:1,screwdriver:2,pliers:3,wrench:4,crimper:5,plunger:6,flapper:7,newoutlet:8,patch:9}
B.SN=new C.bu(B.aKB,["Look and test","Hand","Screwdriver","Pliers","Wrench","Crimp tool","Plunger","New flapper","New outlet","Drywall patch"],x.l)
B.bOg=new C.a0(63072,"MaterialIcons",!1)
B.dCr=new C.bu(B.aKB,[D.f1,B.aq3,Z.Cz,D.Cr,D.ol,B.bOg,Ae.a2P,D.pp,B.Ph,R.rM],C.as("bu<m,a0>"))
B.ego={washerM:0,dryerM:1,rangeM:2}
B.eiF={washer:0}
B.f8i=new C.dx(B.eiF,1,x.M)
B.ehF={dryer4:0,dryer3:1}
B.f84=new C.dx(B.ehF,2,x.M)
B.eip={range4:0,range3:1}
B.f8D=new C.dx(B.eip,2,x.M)
B.dCs=new C.bu(B.ego,[B.f8i,B.f84,B.f8D],C.as("bu<m,e1<m>>"))
B.dD7=new A.ib(18,50,0,20)
B.dDk=new A.ib(-126,126,-66,5)
B.dDr=new A.ib(-4,16,0,24)
B.dFX=new A.ap1(null)
B.aJg=new A.a7q(null)
B.dMI=new A.aqo(null)
B.dMJ=new A.aqq(null)
B.dQ1=new A.J5(!1,"city","",null)
B.aJq=new A.J5(!1,"","",null)
B.eaK=new A.Ox(!0,!0,null,!0,null)
B.ef0=new A.atr(null)
B.hkm=new A.q(16,2.6,0)
B.ef1=new A.cL("Wall drain","The pipe stub that comes out of the wall. The trap arm slides into it.",B.hkm,8)
B.h2H=new A.q(0,3,-6)
B.ef2=new A.cL("Wall","The copper supply pipes come out of the wall here.",B.h2H,24)
B.hg0=new A.q(8.2,1,-7)
B.ef3=new A.cL("Toilet","The tank fills from the cold supply on the wall. The bowl drains into the white pipe in the floor.",B.hg0,7)
B.h1k=new A.q(0,0,40)
B.ef4=new A.cL("The room","A room to build from bare studs to finished, working electrics. The walls hold the cable, the boxes and the devices.",B.h1k,190)
B.hct=new A.q(-2.4,11.5,-3.6)
B.ef5=new A.cL("Hot faucet inlet","The threaded tail under the faucet where the hot supply hose screws on.",B.hct,7)
B.h6a=new A.q(-3.6,4,-7.8)
B.ef6=new A.cL("Light switch","Controls the ceiling light. Tap Open lesson to wire one.",B.h6a,4.5)
B.h93=new A.q(0,-0.7,4.8)
B.ef7=new A.cL("Ground strap","A metal strap from the middle (neutral) terminal to the frame of the appliance. On a 3-wire cord it stays: the neutral also grounds the frame. On a 4-wire cord you take it off, because the green wire grounds the frame.",B.h93,7)
B.hej=new A.q(0,0.5,2)
B.ef8=new A.cL("Voltage tester","A tester that glows when it touches live power.",B.hej,6)
B.ef9=new A.cL("Pipe joint","A crimped joint in the hot water line.",B.aYn,4)
B.hcY=new A.q(0,-0.2,0.2)
B.efa=new A.cL("Cover plate","The plate covers the box and the edges of the drywall so nobody touches the wires.",B.hcY,8)
B.hj9=new A.q(-4.6,0.5,-3.4)
B.efb=new A.cL("Hot shut-off valve","The angle stop valve on the hot pipe. Turn the handle to stop the water to the faucet without shutting off the whole house. Hot is always on the left.",B.hj9,8)
B.W2=new A.q(0,-0.3,3.2)
B.efc=new A.cL("White wire nut: NEUTRAL","Twist the house white wire and the fixture white wire together under this cap.",B.W2,6)
B.he3=new A.q(4.6,0.5,-3.4)
B.efd=new A.cL("Cold shut-off valve","The angle stop valve on the cold pipe. Cold is always on the right.",B.he3,8)
B.h5a=new A.q(2.4,11.5,-3.6)
B.efe=new A.cL("Cold faucet inlet","The threaded tail under the faucet where the cold supply hose screws on.",B.h5a,7)
B.hlD=new A.q(0.8,-0.8,1.2)
B.eff=new A.cL("Black wire to the light","This black wire carries power to the light once the switch is on. It goes on the other brass screw.",B.hlD,7)
B.hcn=new A.q(10.05,5.2,-7.5)
B.efg=new A.cL("Water heater breaker","A big circuit for the water heater. It is ON.",B.hcn,3.5)
B.EG=new A.q(0,40,0)
B.efh=new A.cL("Back wall",y.o,B.EG,140)
B.hfR=new A.q(3,3.8,-7.4)
B.efi=new A.cL("Kitchen faucet","Hot on the left, cold on the right. Tap Open lesson to connect the supply hoses.",B.hfR,4.5)
B.AD=new A.q(0,6,0)
B.efk=new A.cL("Tailpiece","The straight pipe that hangs from the sink drain. Its bottom end is smooth so the slip nut can slide on and grip it.",B.AD,10)
B.hiC=new A.q(-60,40,50)
B.efl=new A.cL("Left wall",y.o,B.hiC,140)
B.h6U=new A.q(3,1,0)
B.efm=new A.cL("P-trap","The U-shaped bend. It always keeps a little water inside, and that water plug blocks sewer gas from coming back up into the house.",B.h6U,11)
B.h24=new A.q(0,20,5)
B.efn=new A.cL("The room","A bare room with the water supply stubs and the drain stub already in the wall and floor.",B.h24,120)
B.h3s=new A.q(0,-8,0)
B.efo=new A.cL("Cabinet","The cabinet under the sink where the drain is built.",B.h3s,22)
B.h1i=new A.q(0,0,150)
B.efp=new A.cL("Lawn","The grass. Walls, floors and the sky stay as they are, but you can add things to the garden with the Furniture button.",B.h1i,400)
B.h2Y=new A.q(0,4,-8)
B.efq=new A.cL("Wall framing","2x4 studs 16 inches apart. Pipes and cables run through holes drilled in the middle of the studs, never along the edge where a nail could hit them.",B.h2Y,18)
B.aYF=new A.q(0,-0.2,5.1)
B.efr=new A.cL("TEST and RESET buttons","Press TEST to make the GFCI trip. Press RESET to turn it back on. Test it once a month.",B.aYF,5)
B.aX6=new A.q(0,11,0)
B.efs=new A.cL("Sink","The sink bowl and the counter. The drain flange at the bottom is where the tailpiece starts.",B.aX6,16)
B.dX=new A.q(0,0,0)
B.eft=new A.cL("Drywall","The wall surface. A hole is cut in it for the electrical box.",B.dX,22)
B.h8o=new A.q(60,40,50)
B.efu=new A.cL("Right wall",y.o,B.h8o,140)
B.h1N=new A.q(0,14,-3)
B.efv=new A.cL("Counter and sink","The faucet is mounted through a hole in the counter.",B.h1N,20)
B.haQ=new A.q(0,-1.9,5)
B.efw=new A.cL("GREEN screw: GROUND",y.Z,B.haQ,5)
B.h2V=new A.q(0,47,-2)
B.efx=new A.cL("Top and bottom plate","The horizontal 2x4s at the top and the bottom of the wall. The studs stand between them.",B.h2V,70)
B.h9N=new A.q(8,85,58)
B.efy=new A.cL("Door header","A thick beam over the door that carries the weight of the wall above it.",B.h9N,70)
B.h1o=new A.q(0,0,-8)
B.efz=new A.cL("Wall","Behind the wall the drain pipe goes down to the sewer line.",B.h1o,22)
B.h1Z=new A.q(0,19,-3)
B.efA=new A.cL("Faucet","The faucet with hot on the left (red) and cold on the right (blue).",B.h1Z,14)
B.h96=new A.q(3.5,2,-7.2)
B.efB=new A.cL("Kitchen counter and cabinet","The cabinet under the sink is where the drain and the shut-off valves live.",B.h96,9)
B.hbo=new A.q(10.05,5.7,-7.5)
B.efC=new A.cL("Kitchen breaker","Protects the kitchen outlets. It is ON.",B.hbo,3.5)
B.hcE=new A.q(4,6,-2.5)
B.efD=new A.cL("Cold supply hose","A braided steel hose with a rubber liner and a blue band.",B.hcE,9)
B.his=new A.q(-48,59,-58)
B.efE=new A.cL("Breaker panel","Every cable in the house starts here, one breaker for each circuit. The power is off while you work.",B.his,50)
B.h8O=new A.q(70,37,-2)
B.efF=new A.cL("Window sill","The board the window sits on. The short studs under it hold it up.",B.h8O,70)
B.hed=new A.q(-1,0.6,4.3)
B.efG=new A.cL("SILVER screw: NEUTRAL side",y.B,B.hed,5)
B.abz=new A.q(0,3.7,0)
B.efH=new A.cL("Slip nut","A big plastic nut. Slide it on the pipe first, then the washer, then join the pieces and hand tighten. A rubber washer inside makes the seal.",B.abz,7)
B.W1=new A.q(0,-1,-0.6)
B.efI=new A.cL("Wire nut","A twist-on cap that joins wires safely. The two white wires are joined here because a switch only cuts the hot wire.",B.W1,5)
B.hcO=new A.q(-1.5,-0.3,3.2)
B.efJ=new A.cL("Black wire nut: HOT","Twist the house black wire and the fixture black wire together under this cap.",B.hcO,6)
B.hbn=new A.q(-1.9,0,-2)
B.efK=new A.cL("Wood stud","The 2x4 frame inside the wall. The electrical box is nailed or screwed to a stud so it cannot move.",B.hbn,16)
B.hgH=new A.q(-1,-0.8,4.3)
B.efL=new A.cL("SILVER screw: NEUTRAL side",y.B,B.hgH,5)
B.hkO=new A.q(6,3,-7.8)
B.efM=new A.cL("Water and drain pipes","Red is hot water, blue is cold water (PEX tubing). The white pipes are drains. They slope down so the waste flows away.",B.hkO,14)
B.hgO=new A.q(1,0.6,4.3)
B.efN=new A.cL("BRASS screw: HOT side",y.C,B.hgO,5)
B.hhq=new A.q(0,-0.2,4.9)
B.efO=new A.cL("Mounting strap (yoke)","The metal strap with two screw slots. Long screws through the ears hold the device in the box.",B.hhq,7)
B.hlz=new A.q(9.55,4.7,-7.5)
B.efP=new A.cL("Spare breaker","A spare circuit.",B.hlz,3.5)
B.h25=new A.q(0,20,8)
B.efQ=new A.cL("Vanity and counter","The cabinet that holds the sink. The pipes live inside it.",B.h25,70)
B.hjY=new A.q(-3.2,1.3,-7.8)
B.efR=new A.cL("Living room outlet","A standard outlet. Tap Open lesson to wire one in 3D.",B.hjY,4.5)
B.hht=new A.q(1.5,-0.3,3.2)
B.efS=new A.cL("Green ground connection","Join the bare copper house ground wire to the green fixture ground wire.",B.hht,6)
B.aYh=new A.q(12,2.6,0)
B.efT=new A.cL("Trap arm","The pipe that carries the waste water from the trap into the wall. It must slope down toward the wall, about 1/4 inch per foot.",B.aYh,9)
B.hdJ=new A.q(0,6.5,-7.8)
B.efU=new A.cL("Electrical cables","Cables run from the breaker panel to every outlet, switch and light. Yellow is 12 gauge for 20 amps. White is 14 gauge for 15 amps.",B.hdJ,16)
B.hey=new A.q(11.2,2.3,-6)
B.efV=new A.cL("Water heater","Heats the water. The cold line goes in at the top and the hot line comes out at the top.",B.hey,9)
B.hfn=new A.q(9.55,5.2,-7.5)
B.efW=new A.cL("Bathroom breaker","Protects the bathroom. It is ON.",B.hfn,3.5)
B.hbv=new A.q(5.2,3.9,-7.8)
B.efX=new A.cL("Kitchen GFCI outlet","Outlets near water must be GFCI. Tap Open lesson to wire one.",B.hbv,4.5)
B.h2R=new A.q(0,40,-3)
B.efY=new A.cL("Electrical cable","Yellow 12/2 cable with ground: it carries power from the breaker panel through the holes in the studs to each box.",B.h2R,80)
B.hck=new A.q(-8.4,1.2,-6.4)
B.efZ=new A.cL("Sofa","Just furniture, to show the size of the room.",B.hck,10)
B.eg_=new A.cL("Outlet face","Two outlets. The short slot is hot, the long slot is neutral, and the round hole is ground.",B.aYF,6)
B.haw=new A.q(0,4,-7.8)
B.eg0=new A.cL("Wall","The drywall of the back wall.",B.haw,16)
B.hk1=new A.q(0,0,0.6)
B.eg1=new A.cL("Canopy","The round cover that hides the box and the wire connections against the ceiling.",B.hk1,8)
B.h8Q=new A.q(70,76,-2)
B.eg2=new A.cL("Window header","A thick beam over the window, held up by the jack studs.",B.h8Q,70)
B.eg3=new A.cL("Concrete slab","The foundation. It carries the whole weight of the house. Plumbing drains are placed before it is poured.",B.dX,30)
B.h2K=new A.q(0,40,12)
B.eg4=new A.cL("Front door","Tap the door to go inside the house.",B.h2K,260)
B.abB=new A.q(8.9,2.6,0)
B.eg5=new A.cL("Slip nut","Hand tighten it, then about a quarter turn with pliers. Over-tightening cracks the plastic.",B.abB,7)
B.hfl=new A.q(1,-0.8,4.3)
B.eg6=new A.cL("BRASS screw: HOT side",y.C,B.hfl,5)
B.hae=new A.q(0.6,1.5,-1.8)
B.eg7=new A.cL("Cable to the light (LOAD)","This cable carries the switched power on to the light. The black wire here only has power when the switch is on.",B.hae,8)
B.haL=new A.q(9.8,5,-7.5)
B.eg8=new A.cL("Breaker panel","The main electrical panel. Each breaker protects one circuit. A breaker that is in the middle position has TRIPPED. Flip it fully OFF and then ON to reset.",B.haL,6)
B.hcK=new A.q(-4,6,-2.5)
B.eg9=new A.cL("Hot supply hose","A braided steel hose with a rubber liner and a red band. Hand tighten the nuts, then a quarter turn with a wrench.",B.hcK,9)
B.el0=new C.u(66,66)
B.bVc=new C.ae(D.e6,20,F.eY,null,null,null)
B.eoA=new C.D(D.uq,B.bVc,null)
B.fzz=new C.F(!0,D.mD,null,null,null,null,12.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fGf=new C.y("A circuit that is not CORRECT and safe can never pass, even if the light or fan would have worked.",null,B.fzz,null,null,null,null,null,null,null,null,null)
B.eoM=new C.D(D.i7,B.fGf,null)
B.fQh=new C.y("Sick people can stay in a hospital bed. Treat each patient before their care runs out, and they go home better.",null,D.Vu,null,D.K,null,null,null,null,null,null,null)
B.eoS=new C.D(D.amy,B.fQh,null)
B.bzv=new C.Q(0,26,0,26)
B.fqe=new C.F(!0,D.aC,null,null,null,null,13.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.hlV=new C.bQ("lessons-none",x.W)
B.fBA=new C.y("No lesson found. Try another word.",null,B.fqe,null,null,null,null,null,null,null,null,B.hlV)
B.bb_=new C.cf(D.A,null,null,B.fBA,null)
B.eoZ=new C.D(B.bzv,B.bb_,null)
B.bUn=new C.ae(D.e6,18,D.ba,null,null,null)
B.ep9=new C.D(D.fv,B.bUn,null)
B.epb=new C.D(D.fv,H.arD,null)
B.ept=new C.D(D.uq,H.PD,null)
B.et9=new A.yb(0,0,18,0,!1,!1,!1,!1,!1,0,!1,!1,"","",-1,0,-1,0)
B.eta=new A.yb(0,100,120,-2.2,!1,!1,!1,!1,!1,0,!1,!1,"","",-1,0,-1,0)
B.etb=new A.yb(0,40,150,0.5,!1,!1,!1,!1,!1,0,!1,!1,"","",-1,0,-1,0)
B.etc=new A.yb(0,0,0,0,!1,!1,!1,!1,!1,0,!1,!1,"","",-1,0,-1,0)
B.etd=new A.yb(0,-80,50,0,!1,!1,!1,!1,!1,0,!1,!1,"","",-1,0,-1,0)
B.ete=new A.yb(0,0,56,0,!1,!1,!1,!1,!1,0,!1,!1,"","",-1,0,-1,0)
B.evL=new A.a9X(null,null)
B.bl4=new C.t(1,0.30980392156862746,0.7019607843137254,0.9647058823529412,D.q)
B.btB=new C.t(1,0.11372549019607843,0.37254901960784315,0.7686274509803922,D.q)
B.bqg=new C.t(1,0.043137254901960784,0.16470588235294117,0.4196078431372549,D.q)
B.d42=w([B.bl4,B.btB,B.bqg],x.O)
B.ewu=new C.c_(Ac.xz,0.5,D.x,null,0,B.d42,null,null)
B.btP=new C.t(1,0.8392156862745098,0.9019607843137255,0.9176470588235294,D.q)
B.exb=new C.z(B.btP,B.YC)
B.exk=new C.z(0,120)
B.exl=new C.z(0,300)
B.exB=new C.z(B.m_,B.dX)
B.ezg=new C.z(64,2.4)
B.eAW=new C.z("LOAD (taped)",D.d0)
B.bhx=new C.t(1,0.9450980392156862,0.8901960784313725,0.7764705882352941,D.q)
B.bkJ=new C.t(1,0.8470588235294118,0.7686274509803922,0.6274509803921569,D.q)
B.eCi=new C.z(B.bhx,B.bkJ)
B.dm9=w([D.aw,D.cd,D.aw],x.O)
B.eCH=new C.z(-40,B.dm9)
B.eE8=new C.z(63,-2.4)
B.bjH=new C.t(1,0.8901960784313725,0.9254901960784314,0.9607843137254902,D.q)
B.bep=new C.t(1,0.7372549019607844,0.7843137254901961,0.8392156862745098,D.q)
B.eEG=new C.z(B.bjH,B.bep)
B.eEX=new C.z(51,B.afH)
B.bfH=new C.t(1,0.9137254901960784,0.8705882352941177,0.7607843137254902,D.q)
B.eHF=new C.z(B.bfH,B.BI)
B.bg4=new C.t(1,0.9137254901960784,0.9372549019607843,0.9490196078431372,D.q)
B.bgG=new C.t(1,0.8509803921568627,0.8941176470588236,0.9098039215686274,D.q)
B.eIu=new C.z(B.bg4,B.bgG)
B.bpu=new C.t(1,0.9058823529411765,0.8235294117647058,0.8156862745098039,D.q)
B.bgH=new C.t(1,0.7058823529411765,0.7176470588235294,0.7411764705882353,D.q)
B.eJv=new C.z(B.bpu,B.bgH)
B.bdM=new C.t(1,0.7647058823529411,0.8117647058823529,0.9019607843137255,D.q)
B.eKl=new C.z(B.bdM,B.ajt)
B.bnW=new C.t(1,0.3568627450980392,0.39215686274509803,0.4392156862745098,D.q)
B.eM8=new C.z("SILVER \xb7 NEUTRAL",B.bnW)
B.hkc=new A.q(-1.5,0,0)
B.eMh=new C.z(B.FA,B.hkc)
B.eNR=new C.z(52,B.vR)
B.bkj=new C.t(1,0.12156862745098039,0.47843137254901963,0.22745098039215686,D.q)
B.eOK=new C.z("GREEN \xb7 GROUND",B.bkj)
B.bsI=new C.t(1,0.9450980392156862,0.9098039215686274,0.8235294117647058,D.q)
B.ePr=new C.z(B.bsI,B.BI)
B.ePI=new C.z("main","Main water valve")
B.cQr=w([D.vX,D.bs,D.bf],x.O)
B.eS3=new C.z(40,B.cQr)
B.hlE=new A.q(1.5,0,0)
B.eTU=new C.z(B.MR,B.hlE)
B.bgm=new C.t(1,0.9529411764705882,0.9411764705882353,0.9098039215686274,D.q)
B.bnt=new C.t(1,0.4823529411764706,0.5294117647058824,0.5803921568627451,D.q)
B.eUB=new C.z(B.bgm,B.bnt)
B.eVA=new C.z(B.i4,B.Y2)
B.bjm=new C.t(1,0.9529411764705882,0.9019607843137255,0.7843137254901961,D.q)
B.bqn=new C.t(1,0.788235294117647,0.7098039215686275,0.5490196078431373,D.q)
B.eVT=new C.z(B.bjm,B.bqn)
B.bfW=new C.t(1,0.6039215686274509,0.4196078431372549,0.047058823529411764,D.q)
B.eWo=new C.z("BRASS \xb7 HOT",B.bfW)
B.eWQ=new C.z(53,B.MR)
B.a8O=new C.b5(180,40,215)
B.a8P=new C.b5(215,40,345)
B.a8Q=new C.b5(60,60,90)
B.eXO=new C.b5(61,-4.6,B.rp)
B.a8R=new C.b5(95,40,185)
B.eYW=new C.b5("Turn the main water ON to test for leaks: pick Hand and tap the main valve.","hand","main")
B.f_4=new C.b5(62,4.6,B.nf)
B.f_g=new C.b5("The water must be OFF before you cut into the pipes: pick Hand and tap the main valve.","hand","main")
B.f_N=new C.b5("Fit the parts in the order of the job list.","",null)
B.f0h=new C.b5("Looks good. Watch for leaks; if none, the job is done.","",null)
B.f1c=new C.cw([0,17.1,16.4,5.8])
B.f1f=new C.cw([0,-0.1,16.4,4.2])
B.aQQ=new C.cw([-72,72,-60,60])
B.f2j=new C.cw([15.6,9,14.8,22])
B.f2n=new C.cw([-15.6,9,14.8,22])
B.f2w=new C.dY([72,60,44,B.Mx,B.MA])
B.btx=new C.t(1,0.8941176470588236,0.6901960784313725,0.47843137254901963,D.q)
B.f2N=new C.dY([124,70,44,B.btx,B.qe])
B.f2O=new C.dY([-33,33,-5,76,98])
B.Ed=new C.dY([-64.5,64.5,-52.5,52.5,92])
B.f2V=new C.dY([90,64,46,B.ahr,D.hm])
B.aQW=new C.dY([-140,140,12,310,132])
B.f3d=new C.dY([110,70,62,D.bN,D.al])
B.f3i=new C.dY([84,60,40,B.ahu,B.MA])
B.aTZ=new C.F(!0,D.bU,null,null,null,null,11,D.u,null,2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fTK=new C.y("WIRES",null,B.aTZ,null,D.K,null,null,null,null,null,null,null)
B.bH2=new C.by(1,D.bb,B.fTK,null)
B.fbx=new C.a4(56,null,null,null)
B.fNZ=new C.y("DIAGRAM",null,B.aTZ,null,D.K,null,null,null,null,null,null,null)
B.bHX=new C.by(1,D.bb,B.fNZ,null)
B.dnL=w([B.bH2,B.fbx,B.bHX],x.p)
B.f5T=new C.ca(D.aL,D.e,D.i,D.m,null,D.p,null,0,B.dnL,null)
B.fES=new C.y("\u260e",null,D.pJ,null,null,null,null,null,null,null,null,null)
B.bcy=new C.qD(B.fES,D.aw,null,24,null)
B.fHn=new C.y("City office",null,D.de,null,null,null,null,null,null,null,null,null)
B.ddk=w([B.bcy,D.bd,B.fHn],x.p)
B.f65=new C.ca(D.aL,D.e,D.i,D.m,null,D.p,null,0,B.ddk,null)
B.bVX=new C.ae(D.Pe,26,D.c_,null,null,null)
B.fUG=new C.y("Hallway tour",null,D.hv,null,null,null,null,null,null,null,null,null)
B.fFR=new C.y("Just the hall and its big TVs, 45 seconds",null,D.x9,null,null,null,null,null,null,null,null,null)
B.dvq=w([B.fUG,B.fFR],x.p)
B.bvj=new C.fk(D.ah,D.e,D.i,D.E,null,D.p,null,0,B.dvq,null)
B.bHD=new C.by(1,D.bb,B.bvj,null)
B.d_O=w([B.bVX,D.bd,B.bHD,A5.Pw],x.p)
B.f68=new C.ca(D.aL,D.e,D.i,D.m,null,D.p,null,0,B.d_O,null)
B.bTB=new C.ae(D.hp,30,D.c,null,null,null)
B.fWH=new C.y("Play the tour",null,D.ka,null,null,null,null,null,null,null,null,null)
B.d8Y=w([B.bTB,D.bm,B.fWH],x.p)
B.f6e=new C.ca(D.aL,D.b9,D.i,D.m,null,D.p,null,0,B.d8Y,null)
B.qV=new A.JR(0,"correct")
B.aRf=new A.JR(1,"incorrect")
B.tf=new A.JR(2,"unsafe")
B.JS=new A.JR(3,"incomplete")
B.f6s=new A.JR(4,"requiresVerification")
B.f7K=new C.iL([1],x.R)
B.egJ={hospital:0,shop:1,school:2,firestation:3,house2:4,bighouse:5,store:6,gasstation:7,dmv:8,tower:9,hq:10}
B.a9l=new C.dx(B.egJ,11,x.M)
B.egr={wardrobe:0,shelf:1,lamp:2,console:3}
B.f7R=new C.dx(B.egr,4,x.M)
B.f7X=new C.iL([0,2,3],x.R)
B.aRU=new C.iL([1,2,3,4,5],x.R)
B.ega={house2:0,bighouse:1,shop:2,hospital:3,school:4,firestation:5,store:6,gasstation:7,tower:8,hq:9,dmv:10}
B.f85=new C.dx(B.ega,11,x.M)
B.eiy={billboard:0,bighouse:1,townsign:2,cornersign:3,adboard:4,tower:5,hq:6,store:7,gasstation:8,ubstation:9,dmv:10}
B.f88=new C.dx(B.eiy,11,x.M)
B.aRZ=new C.dx(D.hW,0,C.as("dx<G>"))
B.f8z=new C.iL([4],x.R)
B.f8A=new C.iL([5],x.R)
B.fa8=new C.av(0,36)
B.fai=new C.av(126,84)
B.fbg=new C.a4(110,64,null,null)
B.fbh=new C.a4(120,70,null,null)
B.fbn=new C.a4(270,64,null,null)
B.fbo=new C.a4(270,70,null,null)
B.Ke=new A.FW(0,"hot")
B.Kf=new A.FW(1,"neutral")
B.Kg=new A.FW(2,"ground")
B.aTF=new A.FW(3,"load")
B.fjN=new C.F(!0,D.c,null,null,null,null,12.5,null,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fkq=new C.F(!0,D.c,null,null,null,null,13.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fkv=new C.F(!0,D.c,null,null,null,null,16,D.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,L.D7,null,null,null)
B.fkz=new C.F(!0,D.b_,null,null,null,null,12.5,D.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fkM=new C.F(!0,D.aC,null,null,null,null,11.5,D.U,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.flL=new C.F(!0,D.aC,null,null,null,null,14,D.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.aU7=new C.F(!0,D.aC,null,null,null,null,11.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.aU9=new C.F(!0,D.ac,null,null,null,null,11.5,D.U,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fmh=new C.F(!0,D.bs,null,null,null,null,12,D.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fmr=new C.F(!0,D.ac,null,null,null,null,13.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fmR=new C.F(!0,D.ay,null,null,null,null,12.5,D.u,null,2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fn0=new C.F(!0,D.aR,null,null,null,null,11.5,null,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fnc=new C.F(!0,D.bs,null,null,null,null,15,D.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.aUn=new C.F(!0,D.ac,null,null,null,null,12,D.U,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.foo=new C.F(!0,D.c,null,null,null,null,13,D.U,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.Ko=new C.F(!0,D.ac,null,null,null,null,null,null,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.foS=new C.F(!0,D.bs,null,null,null,null,13,D.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fpx=new C.F(!0,D.aC,null,null,null,null,9.5,null,null,null,null,null,1.15,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fpO=new C.F(!0,D.ac,null,null,null,null,12.5,null,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fpP=new C.F(!0,D.fl,null,null,null,null,12,null,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fqr=new C.F(!0,null,null,null,null,null,9,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.Kr=new C.F(!0,D.ay,null,null,null,null,12.5,D.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fqW=new C.F(!0,D.c,null,null,null,null,11.5,D.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.aUG=new C.F(!0,D.c,null,null,null,null,14,null,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fre=new C.F(!0,D.bM,null,null,null,null,13,D.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fry=new C.F(!0,D.c,null,null,null,null,12,D.H,null,null,null,null,1.15,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fsf=new C.F(!0,D.mD,null,null,null,null,12,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fsl=new C.F(!0,D.ac,null,null,null,null,13.5,null,D.cD,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fsw=new C.F(!0,D.fl,null,null,null,null,11.5,D.U,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fsB=new C.F(!0,D.eG,null,null,null,null,14,D.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.ft9=new C.F(!0,D.bs,null,null,null,null,18,D.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.ftH=new C.F(!0,D.aR,null,null,null,null,12,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fug=new C.F(!0,D.c,null,null,null,null,10.5,D.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fus=new C.F(!0,D.bs,null,null,null,null,null,D.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.aV8=new C.F(!0,D.ac,null,null,null,null,13.5,null,null,null,null,null,1.5,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fvP=new C.F(!0,D.aC,null,null,null,null,11,D.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fw_=new C.F(!0,D.ac,null,null,null,null,12.8,null,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fxg=new C.F(!0,D.ay,null,null,null,null,12.5,D.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fyh=new C.F(!0,D.bs,null,null,null,null,44,D.u,null,2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.aVD=new C.F(!0,D.c,null,null,null,null,13.5,D.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fyG=new C.F(!0,D.aR,null,null,null,null,11.5,null,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fzn=new C.F(!0,F.eY,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fzE=new C.F(!0,D.fl,null,null,null,null,12,D.U,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fzZ=new C.y("Wire guide (U.S. houses)",null,D.de,null,null,null,null,null,null,null,null,null)
B.fAb=new C.y("Which wall?",null,D.VD,null,null,null,null,null,null,null,null,null)
B.fkG=new C.F(!0,D.w,null,null,null,null,12,D.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fAw=new C.y("Open the 3D lesson",null,B.fkG,null,null,null,null,null,null,null,null,null)
B.fBi=new C.y("Never rely on color alone. With the power off, prove what each wire does with a tester and the device diagram. A licensed electrician does real house wiring.",null,M.aan,null,null,null,null,null,null,null,null,null)
B.fBs=new C.y("Tip: pick a part, then tap its glowing spot. Joints on hoses, bolts and the drain are only loose: pick the Wrench and tap them. Use your Hand on the main water valve: turn the water OFF before you cut into a pipe, and ON to test for leaks.",null,D.Kn,null,null,null,null,null,null,null,null,null)
B.fBw=new C.y("The room is finished! \ud83c\udf89",null,M.Av,null,null,null,null,null,null,null,null,null)
B.fBP=new C.y("Answer, then submit. Nothing is marked until you submit.",null,I.tq,null,null,null,null,null,null,null,null,null)
B.fCE=new C.y("You used all three lives. Electricity does not give second chances, so in real life you turn the breaker OFF and test the wires every single time. Try the job again.",null,D.xc,null,null,null,null,null,null,null,null,null)
B.fCV=new C.y("A different house",null,null,null,null,null,null,null,null,null,null,null)
B.fDm=new C.y("\ud83c\udf5e",null,D.xa,null,null,null,null,null,null,null,null,null)
B.fDn=new C.y("Show me",null,D.lR,null,null,null,null,null,null,null,null,null)
B.fDN=new C.y("Start this job again",null,null,null,null,null,null,null,null,null,null,null)
B.fuF=new C.F(!0,D.c0,null,null,null,null,12.5,D.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fE6=new C.y("Give back",null,B.fuF,null,null,null,null,null,null,null,null,null)
B.fEO=new C.y("The house is wired! \ud83c\udf89",null,M.Av,null,null,null,null,null,null,null,null,null)
B.fEP=new C.y("Edit your billboard",null,D.de,null,null,null,null,null,null,null,null,null)
B.fFY=new C.y("L is the lobby. On every level there is a balcony with a view of the town.",null,I.Ew,null,null,null,null,null,null,null,null,null)
B.fGc=new C.y("Submit the test",null,null,null,null,null,null,null,null,null,null,null)
B.fGA=new C.y("\ud83e\udeaa",null,D.xa,null,null,null,null,null,null,null,null,null)
B.fGN=new C.y("Start from a bare house (wire everything)",null,null,null,null,null,null,null,null,null,null,null)
B.fHv=new C.y("THE RACE",null,P.ts,null,null,null,null,null,null,null,null,null)
B.fHA=new C.y("What should the drone show you?",null,D.aaf,null,null,null,null,null,null,null,null,null)
B.fIh=new C.y("Go through",null,null,null,null,null,null,null,null,null,null,null)
B.fJ5=new C.y("The customer says\u2026",null,D.de,null,null,null,null,null,null,null,null,null)
B.fJC=new C.y("Submit for inspection",null,null,null,null,null,null,null,null,null,null,null)
B.fJQ=new C.y("What the house needs",null,D.de,null,null,null,null,null,null,null,null,null)
B.fK1=new C.y("Next job",null,null,null,null,null,null,null,null,null,null,null)
B.fmc=new C.F(!0,D.w,null,null,null,null,14,D.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fK9=new C.y("Go in",null,B.fmc,null,null,null,null,null,null,null,null,null)
B.fvI=new C.F(!0,D.ay,null,null,null,null,22,D.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fKd=new C.y("My House",null,B.fvI,null,D.K,null,null,null,null,null,null,null)
B.fKk=new C.y("New job",null,null,null,null,null,null,null,null,null,null,null)
B.aUL=new C.F(!0,D.c0,null,null,null,null,null,D.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fKr=new C.y("Job over",null,B.aUL,null,null,null,null,null,null,null,null,null)
B.fKH=new C.y("Three shocks. In real life you switch the breaker off and test the wires, every time. Try another call.",null,D.xc,null,null,null,null,null,null,null,null,null)
B.fKN=new C.y("Learn the trades",null,S.tp,null,null,null,null,null,null,null,null,null)
B.fLz=new C.y("New call",null,null,null,null,null,null,null,null,null,null,null)
B.fLE=new C.y("Job done! \ud83c\udf89",null,M.Av,null,null,null,null,null,null,null,null,null)
B.fLI=new C.y("Wire guide",null,null,null,null,null,null,null,null,null,null,null)
B.fMc=new C.y("Keep looking",null,null,null,null,null,null,null,null,null,null,null)
B.fMT=new C.y("Next call",null,null,null,null,null,null,null,null,null,null,null)
B.fNg=new C.y("Plug in",null,D.de,null,null,null,null,null,null,null,null,null)
B.fNG=new C.y("Look around",null,null,null,null,null,null,null,null,null,null,null)
B.fO1=new C.y("\ud83d\udef5",null,D.x8,null,null,null,null,null,null,null,null,null)
B.fOg=new C.y("The customer wants:",null,D.Vp,null,null,null,null,null,null,null,null,null)
B.fOr=new C.y('Tip: pick "Look and test" and tap things to find out what is wrong. Then pick the right tool. Turn the breaker off (hand) before you touch any wire.',null,D.Kn,null,null,null,null,null,null,null,null,null)
B.frf=new C.F(!0,D.aC,null,null,null,null,11.5,D.H,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fOJ=new C.y("INCOMING CALL",null,B.frf,null,null,null,null,null,null,null,null,null)
B.fOP=new C.y("Elevator",null,D.fx,null,null,null,null,null,null,null,null,null)
B.fPQ=new C.y("Deliveries",null,D.fx,null,null,null,null,null,null,null,null,null)
B.fQ3=new C.y("Every connection is on the right terminal and every safety check passes.",null,D.tt,null,null,null,null,null,null,null,null,null)
B.fQc=new C.y("Message \xb7 now",null,D.vs,null,null,null,null,null,null,null,null,null)
B.fR5=new C.y("Call over",null,B.aUL,null,null,null,null,null,null,null,null,null)
B.fRc=new C.y("\ud83d\udd12",null,W.Vq,null,null,null,null,null,null,null,null,null)
B.fRd=new C.y("\u23cf Unplug",null,V.Ap,null,null,null,null,null,null,null,null,null)
B.fRj=new C.y("The game is closed for now",null,D.n3,null,D.K,null,null,null,null,null,null,null)
B.flW=new C.F(!0,D.ac,null,null,null,null,14.5,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fRw=new C.y("You missed 3 jobs in a row. The City office needs people who answer the phone and finish the job.",null,B.flW,null,D.K,null,null,null,null,null,null,null)
B.fRy=new C.y("A different call",null,null,null,null,null,null,null,null,null,null,null)
B.fRQ=new C.y("One board on its own, or several boards standing apart.",null,I.tq,null,null,null,null,null,null,null,null,null)
B.fS0=new C.y("\ud83d\udecf\ufe0f",null,D.n4,null,null,null,null,null,null,null,null,null)
B.fSr=new C.y("Job complete! \ud83c\udf89",null,M.Av,null,null,null,null,null,null,null,null,null)
B.fSE=new C.y("OPEN ORDERS",null,P.ts,null,null,null,null,null,null,null,null,null)
B.fSY=new C.y("Colours",null,D.Ao,null,null,null,null,null,null,null,null,null)
B.fT1=new C.y("How you are doing",null,D.hv,null,null,null,null,null,null,null,null,null)
B.fTk=new C.y("Real work: no hints. You will only hear from me when something is wrong.",null,I.Ew,null,null,null,null,null,null,null,null,null)
B.fTl=new C.y("5 bedrooms, 3 bathrooms and NGMY City outside. Walk in, look all round, fix what is wrong.",null,Ab.V9,null,D.K,null,null,null,null,null,null,null)
B.fTA=new C.y("All fixed! \ud83c\udf89",null,M.Av,null,null,null,null,null,null,null,null,null)
B.fTE=new C.y("These are the usual U.S. house wiring colors. Colors are a hint, not proof: old work, switch loops and other countries differ. A real installer proves what each wire does with a tester, with the power off, and follows the device diagram.",null,A4.aam,null,null,null,null,null,null,null,null,null)
B.fU_=new C.y("Messages",null,D.vs,null,null,null,null,null,null,null,null,null)
B.fUc=new C.y("Diagram lessons",null,D.cz,null,null,null,null,null,null,null,null,null)
B.aWe=new C.y("Stay",null,null,null,null,null,null,null,null,null,null,null)
B.fUL=new C.y("\ud83d\ude81",null,D.x8,null,null,null,null,null,null,null,null,null)
B.fUY=new C.y("Choose a level. A red one has an office with no power.",null,D.Au,null,null,null,null,null,null,null,null,null)
B.aWg=new C.y("A different job",null,null,null,null,null,null,null,null,null,null,null)
B.fVM=new C.y("It goes on the back wall, not wired yet. Tap the red one to wire it yourself.",null,I.tq,null,null,null,null,null,null,null,null,null)
B.fWJ=new C.y("\ud83d\uded7",null,D.x8,null,null,null,null,null,null,null,null,null)
B.fX3=new C.y("\u26a1",null,D.pI,null,null,null,null,null,null,null,null,null)
B.fXE=new C.y("The job",null,D.de,null,null,null,null,null,null,null,null,null)
B.fYy=new C.y("Stay in the room",null,null,null,null,null,null,null,null,null,null,null)
B.aWm=new C.y("Great",null,null,null,null,null,null,null,null,null,null,null)
B.fxF=new C.F(!0,F.eY,null,null,null,null,12,D.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fYP=new C.y("\ud83e\udea7 Billboards",null,B.fxF,null,null,null,null,null,null,null,null,null)
B.fYV=new C.y("Choose a billboard",null,D.de,null,null,null,null,null,null,null,null,null)
B.fZ_=new C.y("Which sign?",null,D.Ao,null,null,null,null,null,null,null,null,null)
B.fZ6=new C.y("\ud83d\udc8a",null,D.xa,null,null,null,null,null,null,null,null,null)
B.h1a=new A.q(30,0.8,46)
B.h1b=new A.q(3.6,2.6,0.6)
B.h1c=new A.q(0,95.1,0)
B.h1e=new A.q(0,56,0.9)
B.h1f=new A.q(-146.4,62,84)
B.h1h=new A.q(0,139.4,180)
B.h1j=new A.q(0,0,3)
B.abl=new A.q(0,0,4)
B.h1l=new A.q(0,0,500)
B.h1m=new A.q(0,0,640)
B.h1n=new A.q(0,0,800)
B.abm=new A.q(0,0,-60)
B.h1q=new A.q(0,101,38)
B.h1r=new A.q(0,105,280)
B.aX5=new A.q(0,10,0)
B.h1s=new A.q(0,10,3)
B.h1t=new A.q(0,110,10)
B.h1u=new A.q(0,110,95)
B.h1v=new A.q(0,112,36)
B.h1w=new A.q(0,116,0)
B.h1x=new A.q(0,11,-15)
B.h1y=new A.q(0,120,0)
B.h1z=new A.q(0,122,0)
B.h1A=new A.q(0,124,0)
B.aX7=new A.q(0,124,28)
B.h1B=new A.q(0,126,4)
B.aX8=new A.q(0,12,0)
B.h1C=new A.q(0,12,3)
B.h1D=new A.q(0,130,-3)
B.abn=new A.q(0,13,0)
B.h1E=new A.q(0,13,56)
B.h1F=new A.q(0,13,-8)
B.h1G=new A.q(0,141,180)
B.h1H=new A.q(0,142,0)
B.VY=new A.q(0,14,0)
B.h1I=new A.q(0,14,11)
B.h1J=new A.q(0,14,150)
B.h1K=new A.q(0,14,2)
B.h1L=new A.q(0,14,32)
B.aX9=new A.q(0,14,40)
B.h1M=new A.q(0,14,5)
B.h1O=new A.q(0,14,-9)
B.h1P=new A.q(0,150,-150)
B.aXa=new A.q(0,156,28)
B.h1Q=new A.q(0,159,0)
B.h1R=new A.q(0,165,3)
B.h1S=new A.q(0,165,-63)
B.h1T=new A.q(0,16,0)
B.h1U=new A.q(0,178,-30)
B.abo=new A.q(0,17,0)
B.h1V=new A.q(0,17,21)
B.h1W=new A.q(0,188,0)
B.h1X=new A.q(0,19,0)
B.h1Y=new A.q(0,19,14)
B.h2_=new A.q(0,19,-30)
B.e8=new A.q(0,1,0)
B.h21=new A.q(0,202,0)
B.h22=new A.q(0,20,0)
B.h23=new A.q(0,20,16)
B.h26=new A.q(0,20,-14)
B.h27=new A.q(0,20,-6)
B.h28=new A.q(0,210,-150)
B.h29=new A.q(0,216,-30)
B.h2a=new A.q(0,21,0)
B.h2b=new A.q(0,22,-11)
B.h2c=new A.q(0,22,-12)
B.h2d=new A.q(0,22,-39)
B.h2g=new A.q(0,23,0)
B.h2j=new A.q(0,24,0)
B.h2k=new A.q(0,24,13)
B.h2m=new A.q(0,250,640)
B.AB=new A.q(0,250,-118)
B.h2o=new A.q(0,252,0)
B.h2p=new A.q(0,25,-15)
B.h2q=new A.q(0,26,-24)
B.VZ=new A.q(0,28,0)
B.h2r=new A.q(0,28,-8)
B.aXc=new A.q(0,29,40)
B.h2s=new A.q(0,2,14)
B.h2t=new A.q(0,304,-150)
B.abp=new A.q(0,30,0)
B.h2u=new A.q(0,30,110)
B.h2v=new A.q(0,316,0)
B.h2w=new A.q(0,31,46)
B.h2x=new A.q(0,31,-6)
B.h2y=new A.q(0,330,260)
B.h2z=new A.q(0,34,0)
B.h2A=new A.q(0,36,0)
B.h2B=new A.q(0,36,19)
B.h2C=new A.q(0,36,-3)
B.h2D=new A.q(0,37,22)
B.h2E=new A.q(0,3,0)
B.h2F=new A.q(0,3,150)
B.h2G=new A.q(0,3,-30)
B.h2I=new A.q(0,400,60)
B.h2J=new A.q(0,40,100)
B.h2L=new A.q(0,40,150)
B.h2M=new A.q(0,40,17)
B.h2O=new A.q(0,40,40)
B.h2P=new A.q(0,40,45)
B.h2Q=new A.q(0,40,50)
B.h2S=new A.q(0,40,-6)
B.aXd=new A.q(0,44,46)
B.h2T=new A.q(0,44,55)
B.AC=new A.q(0,46,0)
B.h2U=new A.q(0,47,0)
B.aXe=new A.q(0,48,0)
B.h2W=new A.q(0,48,20)
B.h2X=new A.q(0,48,82)
B.W_=new A.q(0,4,-2)
B.h30=new A.q(0,50,-8)
B.h31=new A.q(0,520,1450)
B.aXf=new A.q(0,52,0)
B.h32=new A.q(0,52,52)
B.h34=new A.q(0,55,0)
B.abq=new A.q(0,58,0)
B.h35=new A.q(0,5,4)
B.h37=new A.q(0,66,0)
B.h38=new A.q(0,66,1)
B.h39=new A.q(0,6,-15)
B.h3a=new A.q(0,75,-30)
B.aXg=new A.q(0,76,36)
B.abr=new A.q(0,7,0)
B.h3b=new A.q(0,7,-5)
B.aXh=new A.q(0,82,0)
B.xk=new A.q(0,8,0)
B.h3c=new A.q(0,8,6)
B.h3d=new A.q(0,8,90)
B.h3e=new A.q(0,8,-16)
B.h3f=new A.q(0,8,-19)
B.h3g=new A.q(0,8,-4)
B.h3h=new A.q(0,900,1600)
B.h3i=new A.q(0,90,0)
B.h3j=new A.q(0,91,80)
B.aXi=new A.q(0,92,1)
B.aXj=new A.q(0,92,28)
B.h3k=new A.q(0,93,0)
B.h3l=new A.q(0,94,13)
B.h3m=new A.q(0,98,8)
B.h3n=new A.q(0,99,38)
B.abs=new A.q(0,9,0)
B.aXk=new A.q(0,9,-3)
B.h3o=new A.q(0,-1,0)
B.h3p=new A.q(0,-2,0)
B.abt=new A.q(0,-2,12)
B.h3q=new A.q(0,-4,28)
B.h3r=new A.q(0,-4,-20)
B.h3v=new A.q(-100,38,0.7)
B.h3y=new A.q(100,100,320)
B.h3z=new A.q(100,14,36)
B.h3A=new A.q(100,24,36)
B.h3B=new A.q(100,24,8)
B.h3C=new A.q(100,290,-330)
B.h3D=new A.q(100,7,7)
B.h3E=new A.q(101,4,37)
B.h3H=new A.q(10,12,10)
B.h3I=new A.q(10,12,16)
B.h3J=new A.q(10,16,3)
B.h3K=new A.q(10,26,2)
B.h3L=new A.q(10,34,1)
B.h3M=new A.q(10,3,7)
B.h3N=new A.q(10,5,50)
B.h3O=new A.q(10,60,14)
B.h3P=new A.q(10,8,10)
B.h3Q=new A.q(10,8,15)
B.h3S=new A.q(110,0,20)
B.h3T=new A.q(110,130,20)
B.h3U=new A.q(110,14,2)
B.h3V=new A.q(110,8,34)
B.h3W=new A.q(110,96,120)
B.aXl=new A.q(112,22,3)
B.h3X=new A.q(112,46,2)
B.h3Y=new A.q(11,12,30)
B.aXm=new A.q(11,16,7)
B.h3Z=new A.q(11,1,11)
B.h4_=new A.q(120,0,-30)
B.h40=new A.q(120,28,22)
B.h41=new A.q(120,40,100)
B.h42=new A.q(124,2,26)
B.h43=new A.q(124,4,60)
B.h44=new A.q(125,8,54)
B.h45=new A.q(126,2,62)
B.aXn=new A.q(12,3,9)
B.h46=new A.q(12,4,22)
B.h47=new A.q(12,86,0)
B.h48=new A.q(130,18,12)
B.h49=new A.q(130,28,24)
B.aXo=new A.q(130,4,14)
B.aXp=new A.q(130,56,80)
B.h4a=new A.q(130,5,50)
B.h4b=new A.q(132,14,150)
B.h4c=new A.q(132,2,52)
B.aXq=new A.q(134,4,84)
B.h4d=new A.q(13,0,0)
B.h4e=new A.q(13,12,13)
B.h4f=new A.q(13,15,2)
B.aXr=new A.q(13,18,8)
B.h4g=new A.q(13,28,3)
B.h4h=new A.q(13,8,8)
B.h4i=new A.q(0,0.52,2.35)
B.h4j=new A.q(140,28,22)
B.h4k=new A.q(140,9,43)
B.h4l=new A.q(144,2,120)
B.h4m=new A.q(144,2,26)
B.h4n=new A.q(146,3,40)
B.h4o=new A.q(148,60,120)
B.h4p=new A.q(14,10,2)
B.aXs=new A.q(14,11,14)
B.h4q=new A.q(14,13,28)
B.h4r=new A.q(14,14,3)
B.h4s=new A.q(14,17,4)
B.h4t=new A.q(14,20,-28)
B.h4u=new A.q(14,30,14)
B.h4v=new A.q(14,36,14)
B.h4w=new A.q(14,3,14)
B.h4x=new A.q(150,30,42)
B.W0=new A.q(150,4,7)
B.aXt=new A.q(150,62,4)
B.h4y=new A.q(150,70,5)
B.h4z=new A.q(151,3,43)
B.h4A=new A.q(152,4,7)
B.h4B=new A.q(154,2,130)
B.h4D=new A.q(16,10,10)
B.h4E=new A.q(16,16,16)
B.h4F=new A.q(16,18,16)
B.h4G=new A.q(16,3,11)
B.h4H=new A.q(16,80,60)
B.h4I=new A.q(16,9,2)
B.h4J=new A.q(17,1,0)
B.aXu=new A.q(17,3,17)
B.h4K=new A.q(27,1.4,27)
B.h4L=new A.q(18,18,14)
B.h4M=new A.q(18,20,18)
B.h4N=new A.q(18,22,2)
B.h4O=new A.q(18,28,16)
B.h4P=new A.q(18,2,18)
B.h4Q=new A.q(18,3,0)
B.h4R=new A.q(18,5,7)
B.h4S=new A.q(18,6,0)
B.h4T=new A.q(18,80,2)
B.h4U=new A.q(18,90,5)
B.h4V=new A.q(18,9,11)
B.h4W=new A.q(190,20,60)
B.h4X=new A.q(190,320,100)
B.h4Y=new A.q(19,13,7)
B.h4Z=new A.q(19,18,12)
B.h5_=new A.q(70,0.6,50)
B.h50=new A.q(0,3,-6.5)
B.aXv=new A.q(1,23.6,18)
B.h51=new A.q(-4,20.4,0)
B.h52=new A.q(1,1,0.64)
B.h53=new A.q(-4.6,1.5,-3.6)
B.h54=new A.q(0,-13.5,-1.5)
B.h55=new A.q(4,10,3.5)
B.aXw=new A.q(0.95,1.7,0.85)
B.h56=new A.q(1,16,36)
B.h57=new A.q(1,18,18)
B.h58=new A.q(1,26,14)
B.h59=new A.q(1,28,14)
B.aXx=new A.q(1,2,1)
B.aXy=new A.q(1,3,1)
B.abu=new A.q(1,3,6)
B.h5b=new A.q(1,0.9,0.06)
B.h5c=new A.q(1.2,44,34)
B.h5e=new A.q(200,0,500)
B.h5f=new A.q(200,0,900)
B.h5g=new A.q(200,140,200)
B.h5k=new A.q(1.6,15,1.6)
B.h5l=new A.q(20,12,14)
B.aXz=new A.q(20,14,7)
B.h5n=new A.q(20,2,2)
B.h5o=new A.q(20,2,8)
B.h5p=new A.q(20,30,26)
B.h5q=new A.q(20,3,14)
B.h5r=new A.q(20,4,26)
B.h5s=new A.q(20,92,26)
B.h5t=new A.q(20,9,10)
B.h5u=new A.q(216,8,216)
B.h5v=new A.q(22,12,34)
B.h5w=new A.q(22,14,0)
B.h5x=new A.q(22,14,2)
B.h5y=new A.q(22,14,3)
B.h5z=new A.q(22,16,3)
B.h5A=new A.q(22,18,14)
B.h5B=new A.q(22,1,1)
B.h5C=new A.q(22,2,28)
B.h5D=new A.q(22,3,10)
B.h5E=new A.q(22,3,22)
B.h5F=new A.q(22,4,20)
B.h5G=new A.q(22,5,9)
B.h5H=new A.q(22,6,20)
B.h5I=new A.q(22,8,9)
B.h5J=new A.q(230,330,-210)
B.h5K=new A.q(230,-40,100)
B.h5L=new A.q(240,150,60)
B.h5M=new A.q(244,6,64)
B.h5N=new A.q(140,15,3.6)
B.h5O=new A.q(24,12,34)
B.h5P=new A.q(24,14,22)
B.h5Q=new A.q(24,38,0)
B.aXA=new A.q(24,6,14)
B.h5R=new A.q(250,92,6)
B.h5S=new A.q(260,300,-160)
B.h5T=new A.q(262,3,5)
B.h5U=new A.q(262,3,56)
B.h5V=new A.q(26,14,26)
B.h5W=new A.q(26,2,26)
B.aXB=new A.q(26,4,22)
B.h5X=new A.q(26,72,26)
B.h5Y=new A.q(26,8,18)
B.h5Z=new A.q(26,-34,96)
B.aXC=new A.q(28,30,22)
B.h6_=new A.q(28,4,1)
B.h61=new A.q(1.6,1.4,48)
B.h62=new A.q(7.4,6,10.4)
B.h63=new A.q(-0.1,0,0)
B.h64=new A.q(5,1.2,1.4)
B.aXD=new A.q(2,100,90)
B.h65=new A.q(2,10,2)
B.aXE=new A.q(2,12,60)
B.h66=new A.q(2,13,2)
B.aXF=new A.q(2,23,12)
B.aXG=new A.q(2,28,22)
B.h67=new A.q(2,5,1)
B.h68=new A.q(2,700,900)
B.aXH=new A.q(2,8,2)
B.h69=new A.q(1,0.9,0.8)
B.h6b=new A.q(64,10,-1.4)
B.h6c=new A.q(47,48,3.5)
B.h6d=new A.q(46.5,15.5,36)
B.h6e=new A.q(19.6,0,-1.5)
B.aXI=new A.q(0,56,1.3)
B.h6f=new A.q(0,15.5,0)
B.h6g=new A.q(3000,0,3000)
B.h6h=new A.q(3000,0,-3000)
B.h6j=new A.q(300,6,3)
B.h6l=new A.q(302,2,200)
B.h6m=new A.q(30,16,30)
B.aXJ=new A.q(30,16,72)
B.h6n=new A.q(30,22,0)
B.h6o=new A.q(30,24,8)
B.h6p=new A.q(30,29,0)
B.h6q=new A.q(30,34,40)
B.h6r=new A.q(30,40,100)
B.h6t=new A.q(30,6,12)
B.h6u=new A.q(324,114,6)
B.aXK=new A.q(324,6,10)
B.aXL=new A.q(32,35,26)
B.h6v=new A.q(33,11,10)
B.h6w=new A.q(34,10,1)
B.h6x=new A.q(34,22,3)
B.aXM=new A.q(34,25,18)
B.h6y=new A.q(34,30,1)
B.aXN=new A.q(34,39,18)
B.aXO=new A.q(34,42,18)
B.h6z=new A.q(34,4,28)
B.aXQ=new A.q(34,8,18)
B.h6A=new A.q(-1,-1.7,2.3)
B.h6B=new A.q(366,124,6)
B.aXR=new A.q(366,6,10)
B.h6C=new A.q(36,1,18)
B.h6D=new A.q(36,22,0)
B.h6E=new A.q(36,30,0)
B.h6F=new A.q(36,30,1)
B.h6G=new A.q(36,4,3)
B.h6H=new A.q(36,60,12)
B.h6I=new A.q(36,8,-37)
B.h6J=new A.q(36,8,-44)
B.h6K=new A.q(0,93,3.5)
B.h6L=new A.q(37,16,0)
B.h6M=new A.q(37,50,38)
B.h6N=new A.q(38,10,24)
B.h6O=new A.q(38,20,3)
B.h6P=new A.q(38,2,6)
B.h6Q=new A.q(-0.2,-0.3,-0.4)
B.h6R=new A.q(60,62,3.6)
B.h6S=new A.q(0,48.6,55)
B.aXT=new A.q(3,12,12)
B.aXU=new A.q(3,14,18)
B.h6T=new A.q(3,16,3)
B.h6V=new A.q(3,22,2)
B.h6W=new A.q(3,26,3)
B.abv=new A.q(3,3,3)
B.h6X=new A.q(3,42,70)
B.h6Y=new A.q(3,46,90)
B.h6Z=new A.q(3,5,3)
B.h7_=new A.q(17.5,1.9,1.5)
B.h71=new A.q(40,0,36)
B.h72=new A.q(40,11,36)
B.h73=new A.q(40,12,2)
B.h74=new A.q(40,15,36)
B.h75=new A.q(40,16,18)
B.h76=new A.q(40,1,14)
B.h77=new A.q(40,28,1)
B.h78=new A.q(40,2,104)
B.h79=new A.q(40,2,24)
B.h7a=new A.q(40,60,40)
B.h7b=new A.q(40,7,36)
B.h7c=new A.q(40,80,3)
B.h7d=new A.q(40,8,104)
B.h7e=new A.q(44,10,2)
B.aXX=new A.q(44,2,14)
B.h7f=new A.q(44,3,22)
B.h7g=new A.q(44,72,20)
B.h7h=new A.q(0.9,0,4.4)
B.h7i=new A.q(8.2,1.9,-7.55)
B.h7j=new A.q(46,10,34)
B.h7k=new A.q(46,3,10)
B.h7l=new A.q(46,3,3)
B.h7m=new A.q(48,2,24)
B.h7n=new A.q(48,6,96)
B.h7o=new A.q(48,7,96)
B.h7p=new A.q(120.6,140,-52)
B.h7q=new A.q(0,-47.25,-2.25)
B.h7r=new A.q(-147.6,54,45)
B.h7s=new A.q(0.6,68,0.4)
B.h7t=new A.q(64,49,8.4)
B.h7u=new A.q(1.5,28,120)
B.h7v=new A.q(36,8,-37.6)
B.h7w=new A.q(0,1.59,0.14)
B.h7x=new A.q(4,108,0)
B.h7y=new A.q(4,80,104)
B.h7z=new A.q(4,96,0)
B.h7A=new A.q(0,-3.4,1)
B.h7B=new A.q(25,79,1.4)
B.h7C=new A.q(1,0,-1.2)
B.h7D=new A.q(0.6,4,2.4)
B.h7E=new A.q(50,12,32)
B.h7F=new A.q(50,1,1)
B.h7G=new A.q(50,1,2)
B.h7H=new A.q(50,28,42)
B.h7I=new A.q(50,4,28)
B.h7J=new A.q(50,5,10)
B.h7K=new A.q(51,7,33)
B.h7L=new A.q(52,10,22)
B.h7M=new A.q(52,56,1)
B.h7N=new A.q(52,5,8)
B.h7O=new A.q(36,4.2,-40.5)
B.h7P=new A.q(54,5,18)
B.h7S=new A.q(56,18,18)
B.h7T=new A.q(56,2,36)
B.h7U=new A.q(56,3,32)
B.h7V=new A.q(56,3,48)
B.h7W=new A.q(1.3,0.4,0.55)
B.h7X=new A.q(58,0,30)
B.h7Y=new A.q(58,14,9)
B.h7Z=new A.q(58,64,22)
B.h8_=new A.q(58,92,30)
B.h80=new A.q(58,96,30)
B.h81=new A.q(58,9,74)
B.h82=new A.q(0,-0.8,0.9)
B.h83=new A.q(11.9,0,-8)
B.h84=new A.q(20,7,34.4)
B.h85=new A.q(-47,48,3.5)
B.aXZ=new A.q(1.6,1.6,0.4)
B.h86=new A.q(-17.5,1.9,1.5)
B.h88=new A.q(0.16,0.32,0.07)
B.h89=new A.q(5,10,5)
B.aY_=new A.q(5,12,26)
B.h8a=new A.q(5,17,2)
B.h8b=new A.q(5,1,2)
B.h8c=new A.q(5,34,24)
B.h8d=new A.q(5,3,44)
B.h8e=new A.q(5,5,5)
B.h8f=new A.q(5,6,10)
B.h8g=new A.q(5,6,3)
B.h8h=new A.q(5,9,8)
B.h8i=new A.q(-120.1,150,0)
B.h8j=new A.q(0,0,3.2)
B.aY0=new A.q(-13,8.6,-9.5)
B.h8k=new A.q(60,12,56)
B.h8l=new A.q(60,12,80)
B.h8m=new A.q(60,16,28)
B.h8n=new A.q(60,30,3)
B.h8p=new A.q(620,300,270)
B.h8q=new A.q(62,11,0)
B.h8r=new A.q(62,18,20)
B.h8s=new A.q(62,22,6)
B.h8t=new A.q(62,5,0)
B.h8u=new A.q(632,10,282)
B.h8v=new A.q(640,8,290)
B.h8w=new A.q(64,10,0)
B.h8z=new A.q(0,-3.45,4)
B.h8A=new A.q(14,9,0.5)
B.aY1=new A.q(6,14,20)
B.aY2=new A.q(6,14,32)
B.h8B=new A.q(6,28,6)
B.h8C=new A.q(6,4,4)
B.h8D=new A.q(6,6,6)
B.h8F=new A.q(-150.6,70,160)
B.h8G=new A.q(0,-0.2,0.14)
B.h8I=new A.q(120.6,140,-8)
B.h8J=new A.q(0.3,38,2)
B.h8L=new A.q(700,430,1150)
B.h8M=new A.q(70,175,-45)
B.h8N=new A.q(70,194,-45)
B.h8P=new A.q(70,6,36)
B.h8R=new A.q(720,100,105)
B.h8S=new A.q(720,360,320)
B.h8V=new A.q(72,32,3)
B.h8W=new A.q(72,-17,70)
B.h8X=new A.q(12,5,0.4)
B.h8Y=new A.q(74,20,5)
B.h8Z=new A.q(76,100,2)
B.h9_=new A.q(76,2,90)
B.h90=new A.q(76,8,3)
B.h91=new A.q(12,1.6,18)
B.h92=new A.q(34,30,0.6)
B.h94=new A.q(1.6,1.7,3.6)
B.h95=new A.q(48,0.7,2.2)
B.h97=new A.q(-72.8,0,55)
B.h98=new A.q(-146.4,15,84)
B.h9a=new A.q(25,79,0.2)
B.h9b=new A.q(7,0,-8)
B.h9c=new A.q(7,18,10)
B.h9d=new A.q(7,27,10)
B.h9e=new A.q(7,2,7)
B.aY3=new A.q(7,3,0)
B.h9f=new A.q(7,6,3)
B.h9g=new A.q(7,8,3)
B.aY4=new A.q(7,96,7)
B.h9h=new A.q(2200,0.4,560)
B.h9j=new A.q(0,11,9.2)
B.h9k=new A.q(-3.2,1.3,-7.82)
B.h9l=new A.q(20,0.8,12)
B.h9m=new A.q(80,16,32)
B.h9n=new A.q(80,26,8)
B.h9o=new A.q(80,38,26)
B.h9q=new A.q(80,4,14)
B.h9r=new A.q(80,6,32)
B.aY5=new A.q(147,1.5,3.5)
B.h9s=new A.q(82,46,3)
B.aY6=new A.q(-6.5,6.9,-3)
B.h9t=new A.q(-17,3.2,-22)
B.h9u=new A.q(84,10,38)
B.h9v=new A.q(84,18,38)
B.h9w=new A.q(84,84,120)
B.h9x=new A.q(84,8,36)
B.h9y=new A.q(0.93,0.92,1)
B.h9z=new A.q(4.6,4.2,9.5)
B.h9A=new A.q(88,24,28)
B.h9B=new A.q(88,84,3)
B.h9C=new A.q(0.4,6,8)
B.h9D=new A.q(0,-48.6,55)
B.h9E=new A.q(2.6,2,2.6)
B.h9F=new A.q(5.5,8.5,3)
B.h9G=new A.q(0,0,0.26)
B.h9H=new A.q(120.6,96,-52)
B.h9I=new A.q(20,11,0.7)
B.h9J=new A.q(8,18,8)
B.aY7=new A.q(8,2,16)
B.h9K=new A.q(8,2,6)
B.aY8=new A.q(8,2,8)
B.h9L=new A.q(8,6,40)
B.h9M=new A.q(8,6,6)
B.h9O=new A.q(8,8,12)
B.aY9=new A.q(8,9,8)
B.h9P=new A.q(8,9,9)
B.h9Q=new A.q(-140,62,3.6)
B.h9S=new A.q(15,19,0.5)
B.h9T=new A.q(900,2,700)
B.h9V=new A.q(92,2,32)
B.h9W=new A.q(95,26,1)
B.h9X=new A.q(95,50,6)
B.h9Y=new A.q(96,14,38)
B.h9Z=new A.q(0.4,0.38,0.12)
B.ha_=new A.q(0,0,-0.43)
B.aYa=new A.q(11.2,4.5,-6)
B.aYb=new A.q(1.2,96,112)
B.aYc=new A.q(0.08,3.8,2.4)
B.aYd=new A.q(9,1,9)
B.ha0=new A.q(9,40,4)
B.ha1=new A.q(9,5,9)
B.ha2=new A.q(0,70,-0.6)
B.ha3=new A.q(-34.6,86,69)
B.ha4=new A.q(-3.5,26,15)
B.ha5=new A.q(34,6,0.6)
B.ha6=new A.q(1.5,1.3,0.6)
B.ha7=new A.q(-120.6,96,-8)
B.ha8=new A.q(0,1.9,-0.7)
B.haa=new A.q(0,-1.78,0.27)
B.aYe=new A.q(1.2,9,1.2)
B.hab=new A.q(0,0.62,0)
B.hac=new A.q(5.5,1.4,12)
B.had=new A.q(-50,0.6,50)
B.hag=new A.q(20,11.5,0)
B.hah=new A.q(20,66,1.4)
B.hai=new A.q(3.2,0.12,-6.7)
B.haj=new A.q(12,0,-8.1)
B.hal=new A.q(-34.6,86,7)
B.aYf=new A.q(0,0,3.4)
B.ham=new A.q(1.25,0.28,0.1)
B.han=new A.q(100,38,0.7)
B.hao=new A.q(0,36,10.2)
B.hap=new A.q(24,0.08,16)
B.haq=new A.q(34,1.4,1.4)
B.has=new A.q(0,4,-7.9)
B.hat=new A.q(11.9,0,8)
B.hau=new A.q(0,41.5,-4.9)
B.hav=new A.q(-26,146,0.6)
B.aYg=new A.q(0.8,1.7,0.78)
B.hax=new A.q(21,1.4,8)
B.hay=new A.q(0.8,0.8,1.6)
B.haz=new A.q(1.4,1,1)
B.haA=new A.q(30,36,0.8)
B.haC=new A.q(71.2,46.6,55)
B.haD=new A.q(3,3.28,-7.2)
B.haE=new A.q(4.1,3.4,0.12)
B.haF=new A.q(1.4,0.3,1)
B.haG=new A.q(0,-1.7,1.6)
B.haH=new A.q(0,42,1.5)
B.haI=new A.q(-6.1,1.2,-6.4)
B.haJ=new A.q(1.4,26,0.4)
B.haK=new A.q(76,0.6,4)
B.haM=new A.q(26,0.3,130)
B.haN=new A.q(0,-45.5,0.5)
B.haO=new A.q(1.8,4,1)
B.haP=new A.q(5,1.6,0.5)
B.haR=new A.q(18,10,0.6)
B.haS=new A.q(0,11,8.5)
B.haT=new A.q(0.1,-2,2.4)
B.haU=new A.q(302.4,1.2,322)
B.haV=new A.q(-1,33.4,-4.9)
B.haW=new A.q(0,0.2,2.8)
B.haX=new A.q(6,10,1.4)
B.haY=new A.q(6,1.8,3.6)
B.haZ=new A.q(-15.5,0.6,-34)
B.hb_=new A.q(80,2.4,2)
B.hb0=new A.q(0.95,0.95,1)
B.hb1=new A.q(24,32,0.8)
B.hb2=new A.q(0,10,5.2)
B.hb3=new A.q(0,-1.2,4.7)
B.hb4=new A.q(18.9,2.6,0)
B.hb5=new A.q(-2200,0.4,720)
B.hb6=new A.q(66,89,3.8)
B.hb7=new A.q(-12,0,-8.1)
B.hb8=new A.q(3,11,0.5)
B.hb9=new A.q(0.42,0.07,0.03)
B.hba=new A.q(0,70,320.6)
B.hbb=new A.q(0,120,278.6)
B.hbc=new A.q(11.8,4,0)
B.hbd=new A.q(0.97,0.18,2.25)
B.hbe=new A.q(0,6.6,-0.6)
B.hbf=new A.q(58,96,31.7)
B.hbg=new A.q(0,34,3.6)
B.hbh=new A.q(14,20,1.2)
B.aYi=new A.q(-71.7,6,55)
B.hbi=new A.q(0,-3.75,4.15)
B.hbk=new A.q(64,57,8.4)
B.hbl=new A.q(5.6,0.3,1.9)
B.hbm=new A.q(0.34,0.05,0.02)
B.hbp=new A.q(52,8,0.4)
B.hbq=new A.q(0,14,51.2)
B.hbr=new A.q(4.6,7.6,3)
B.hbs=new A.q(-1,0,-1.2)
B.hbt=new A.q(0,1.7,0)
B.hbu=new A.q(0,1.8,-0.9)
B.hbw=new A.q(-1,0,1.5)
B.hbx=new A.q(27,19,0.4)
B.hby=new A.q(32,6,1.2)
B.hbz=new A.q(90,2,0.5)
B.hbA=new A.q(-17,98,77.2)
B.hbB=new A.q(5,8,0.4)
B.hbC=new A.q(0,98,6.6)
B.hbD=new A.q(5,14,8.5)
B.hbE=new A.q(5,2.2,0.8)
B.hbF=new A.q(-120.6,140,-52)
B.hbG=new A.q(-2200,0.4,560)
B.hbH=new A.q(0.18,0.12,0.08)
B.hbI=new A.q(50,0.6,50)
B.hbJ=new A.q(147,3,1.4)
B.hbK=new A.q(20,0.6,50)
B.hbL=new A.q(0,6.6,0)
B.hbM=new A.q(4,16.2,0)
B.hbN=new A.q(60,0.4,12)
B.hbO=new A.q(5.5,1.5,2.2)
B.hbP=new A.q(10,15,0.5)
B.hbQ=new A.q(144,5,0.7)
B.hbR=new A.q(1.2,-1.7,2.3)
B.hbS=new A.q(0.42,1.95,0.07)
B.hbT=new A.q(2.4,2.6,6.2)
B.hbU=new A.q(31.5,23,0)
B.hbV=new A.q(0,0.9,0)
B.hbW=new A.q(2.4,2.4,70)
B.hbX=new A.q(-12.5,0.9,-46)
B.hbY=new A.q(-120.6,140,-8)
B.hc_=new A.q(-146.4,15,172)
B.hc0=new A.q(0.82,1.7,0.3)
B.hc1=new A.q(0.55,0.45,0.35)
B.hc2=new A.q(47,7,34.4)
B.hc3=new A.q(-0.12,0,0)
B.hc5=new A.q(3.5,94,0.2)
B.hc6=new A.q(1.1,2.05,0.04)
B.hc7=new A.q(32,0.8,26)
B.hc8=new A.q(25,79,1.2)
B.hc9=new A.q(1.2,3.6,18)
B.abw=new A.q(0.7,0.14,0.06)
B.hca=new A.q(10,14,0.5)
B.hcb=new A.q(0,138.8,95)
B.hcc=new A.q(0,35.5,-4.9)
B.hcd=new A.q(5,8,0.5)
B.abx=new A.q(1.1,0.5,0.7)
B.hce=new A.q(-20,11.5,0)
B.hcf=new A.q(0,1.1,0)
B.hcg=new A.q(0,-0.5,0.6)
B.hch=new A.q(32,6,0.5)
B.hci=new A.q(0,1.4,0)
B.hcj=new A.q(58,130,277.7)
B.hcl=new A.q(1,3,0.8)
B.hcm=new A.q(0,3.4,0.8)
B.hco=new A.q(0.1,0.1,0.1)
B.hcp=new A.q(12,0.12,4.4)
B.hcq=new A.q(0,-0.6,38)
B.hcr=new A.q(0,-10.5,1.5)
B.hcs=new A.q(-0.85,4,-3.2)
B.hcu=new A.q(-7.1,19,4)
B.hcv=new A.q(0,58,-14.2)
B.hcw=new A.q(40,7.2,1.2)
B.aYj=new A.q(0.42,0.34,0.12)
B.hcx=new A.q(1.7,0.08,1.2)
B.hcy=new A.q(-58,110,277.7)
B.hcz=new A.q(8.6,0.5,3.4)
B.hcA=new A.q(0,0,0.38)
B.hcC=new A.q(5.2,3.9,-7.76)
B.hcD=new A.q(1.15,0.42,0.7)
B.aYk=new A.q(-25.8,3.4,-38)
B.hcF=new A.q(146.2,52,120)
B.hcG=new A.q(30,22,0.8)
B.hcH=new A.q(2.6,0.45,0.5)
B.hcI=new A.q(0.07,0.3,0.03)
B.hcJ=new A.q(-40,6.05,4)
B.hcL=new A.q(0,-0.55,0.36)
B.hcM=new A.q(41.5,11,12)
B.hcN=new A.q(36.2,60,38)
B.hcP=new A.q(20,1.4,8)
B.hcQ=new A.q(75.4,24,0)
B.hcR=new A.q(124,26,1.6)
B.hcS=new A.q(0,-0.2,0.19)
B.hcT=new A.q(-20,0.6,-50)
B.hcU=new A.q(1.3,0.26,0.6)
B.hcW=new A.q(1.2,49,36)
B.hcX=new A.q(0,9.3,0)
B.hcZ=new A.q(0,-1.45,0)
B.hd_=new A.q(9,12,0.6)
B.hd0=new A.q(0,-0.6,160)
B.aYl=new A.q(1.4,3,1.6)
B.hd1=new A.q(0,40,0.95)
B.hd2=new A.q(28,0.8,22)
B.hd3=new A.q(11,3,0.5)
B.hd4=new A.q(34.6,34,7)
B.hd5=new A.q(190,0.6,90)
B.hd6=new A.q(0,-1.9,-1.2)
B.hd7=new A.q(-3.2,1.15,-7.78)
B.hd8=new A.q(0,-3.4,1.2)
B.hd9=new A.q(64,10,0.2)
B.hda=new A.q(0,-1.78,0.53)
B.hdb=new A.q(0.8,2.6,0.3)
B.aYm=new A.q(-6.5,7.4,-3)
B.hdc=new A.q(1,1.05,0.75)
B.hdd=new A.q(0,76,1.1)
B.hde=new A.q(1.35,0.32,0.5)
B.hdf=new A.q(-4.6,-2,1.2)
B.hdh=new A.q(0,40,1.4)
B.aYo=new A.q(0.6,32,34)
B.hdi=new A.q(-3,36,10.6)
B.hdk=new A.q(0,0.2,0)
B.hdm=new A.q(2.5,30,2.5)
B.hdn=new A.q(160,1.2,120)
B.hdo=new A.q(7,40,2.4)
B.hdp=new A.q(30,26,0.6)
B.hdq=new A.q(3.4,3.25,-7.85)
B.hdr=new A.q(0,-0.2,-0.1)
B.hds=new A.q(72.8,0,55)
B.hdt=new A.q(0.5,62,30)
B.hdu=new A.q(0,76,37.8)
B.hdv=new A.q(58,110,277.7)
B.hdw=new A.q(146.4,62,120)
B.hdx=new A.q(34.6,86,7)
B.hdy=new A.q(2.2,1.1,6.4)
B.hdz=new A.q(0,0,0.46)
B.hdA=new A.q(17,98,77.2)
B.hdB=new A.q(3,1.55,-7.1)
B.hdC=new A.q(0.4,3,3)
B.aYq=new A.q(0,-0.1,0.1)
B.hdD=new A.q(-52,96,-60.6)
B.hdE=new A.q(0,0,0.04)
B.hdG=new A.q(0,14,-19.3)
B.hdH=new A.q(2.4,11.6,-3.6)
B.hdI=new A.q(4,11,3.5)
B.hdK=new A.q(5,8.6,-2.25)
B.hdL=new A.q(0,-1.78,0.3)
B.hdM=new A.q(2.2,2.2,1.8)
B.hdN=new A.q(0.1,1.35,0.2)
B.hdO=new A.q(0,1.9,-1.2)
B.hdP=new A.q(0,56,2.1)
B.hdQ=new A.q(0.26,0.04,0.02)
B.hdR=new A.q(-2.4,11.6,-3.6)
B.hdS=new A.q(11.25,0,-2.25)
B.hdT=new A.q(0,3.7,1.4)
B.hdU=new A.q(1,-1.8,2.4)
B.hdV=new A.q(-26,43,3.8)
B.hdW=new A.q(-60,15,3.6)
B.hdX=new A.q(20,0.6,-50)
B.hdY=new A.q(-11.8,4,0)
B.aYr=new A.q(-7,3.2,-22)
B.hdZ=new A.q(-34,3.2,-38)
B.he_=new A.q(1.2,4,7)
B.he0=new A.q(11.2,4.7,-6)
B.he1=new A.q(66,43,3.8)
B.aYs=new A.q(0,2.8,0)
B.he2=new A.q(24,8,0.05)
B.aYt=new A.q(86,52,1.4)
B.he4=new A.q(0.12,0,0)
B.he5=new A.q(2.7,0.22,0.45)
B.he6=new A.q(1.1,1.1,0.03)
B.he7=new A.q(-50,0.6,-50)
B.he8=new A.q(-26,94,0.6)
B.he9=new A.q(0,32,320.9)
B.hea=new A.q(0,5,1.1)
B.heb=new A.q(4.6,5.4,3.2)
B.hec=new A.q(3.4,3.55,-7.85)
B.hee=new A.q(71.6,-22,62)
B.hef=new A.q(0,3,1.2)
B.heg=new A.q(22,18,0.4)
B.heh=new A.q(5.5,1.3,1.4)
B.hei=new A.q(-20,0.6,50)
B.aYu=new A.q(1.5,18,3.5)
B.aYv=new A.q(0,1.5,-0.9)
B.hel=new A.q(-0.28,0.55,-0.8)
B.hem=new A.q(0,-0.2,0.24000000000000002)
B.heo=new A.q(0,-3.3,4)
B.hep=new A.q(46,0.8,46)
B.heq=new A.q(1,-0.2,0.14)
B.her=new A.q(0,137,1.6)
B.aYw=new A.q(84,3,0.5)
B.hes=new A.q(-1.9,0,-2.25)
B.het=new A.q(0,-0.9,1.1)
B.heu=new A.q(8,0.5,-34)
B.hev=new A.q(1.1,0.4,0.6)
B.hew=new A.q(8.2,1.05,-6.7)
B.hex=new A.q(0,9.6,11.6)
B.hez=new A.q(34.6,34,69)
B.heB=new A.q(-149.3,38,128)
B.heC=new A.q(-2,3.2,-22)
B.heD=new A.q(0.07,0.4,0.03)
B.heE=new A.q(2,3.8,0.08)
B.heF=new A.q(72,2.4,1.4)
B.heG=new A.q(31,83,0.9)
B.heH=new A.q(64,40,-3.2)
B.heI=new A.q(0.95,0.62,2.2)
B.aYx=new A.q(1.4,3,112)
B.heJ=new A.q(1,33.4,-4.9)
B.heK=new A.q(14,0.14,2.2)
B.heL=new A.q(0,0.3,314)
B.aYy=new A.q(302.4,140,1.2)
B.heM=new A.q(0,46.6,0.8)
B.heO=new A.q(6.5,6.4,13)
B.heP=new A.q(0,0,-8.8)
B.heQ=new A.q(0,0.7,-1)
B.heT=new A.q(-11.9,0,8)
B.heU=new A.q(7,0,1.5)
B.heV=new A.q(-8.4,0.7,-6.4)
B.heW=new A.q(-3.2,1.45,-7.78)
B.heX=new A.q(34,25,21.6)
B.heY=new A.q(0,41,0.45)
B.heZ=new A.q(-6.575,0,-0.25)
B.hf_=new A.q(1.7,1,0.6)
B.hf0=new A.q(0.07,0.42,0.03)
B.hf3=new A.q(3.7,1.35,0.5)
B.aYA=new A.q(0,0,-2.3)
B.abA=new A.q(-13,12.5,0)
B.hf4=new A.q(0,0,0.62)
B.hf5=new A.q(-60,62,3.6)
B.hf6=new A.q(0.2,-0.3,-0.4)
B.hf7=new A.q(-40,3.5,4)
B.aYB=new A.q(10.85,18,0.5)
B.hf8=new A.q(120.1,174,-30)
B.hf9=new A.q(0.6,70,0.6)
B.hfa=new A.q(-29,3.4,-38)
B.hfb=new A.q(1.4,1.3,0.02)
B.hfc=new A.q(30,1.4,0.4)
B.hfd=new A.q(6.3,1.5,-7.2)
B.hfe=new A.q(8,14,1.2)
B.hff=new A.q(-120.1,150,-60)
B.hfg=new A.q(0,5,11.2)
B.aYC=new A.q(0,0.62,2.85)
B.hfh=new A.q(37.5,23,0)
B.aYD=new A.q(0.05,8,16)
B.hfi=new A.q(0,-1.2,5)
B.hfj=new A.q(0.2,-2,2.6)
B.hfk=new A.q(142,0.2,118)
B.hfm=new A.q(0,-3.15,4.2)
B.hfo=new A.q(11.2,2.4,-5.18)
B.hfp=new A.q(40,14.4,36)
B.hfr=new A.q(47.6,0.12,0.1)
B.hfs=new A.q(-1,-0.2,0.14)
B.hft=new A.q(0.97,0.9,1.04)
B.hfu=new A.q(-17,83,77.2)
B.hfv=new A.q(0.5,8,6)
B.hfw=new A.q(1.2,1.2,0.3)
B.aYG=new A.q(2,0.08,2.4)
B.hfy=new A.q(9.5,13.5,1.4)
B.hfz=new A.q(24,14,0.8)
B.hfA=new A.q(2.2,18,2.2)
B.hfB=new A.q(22,0.2,0.8)
B.hfC=new A.q(-0.32,0,0.5)
B.aYH=new A.q(1.3,4,0.8)
B.hfE=new A.q(-26,89,3.8)
B.hfF=new A.q(-120.1,174,-30)
B.hfG=new A.q(0.8,0.55,0.05)
B.hfH=new A.q(0.14,0.35,17)
B.hfI=new A.q(1.4,2.4,0.3)
B.hfJ=new A.q(0,11,8.2)
B.hfK=new A.q(20,0.7,12)
B.hfL=new A.q(52,96,-60.6)
B.hfM=new A.q(26,146,0.6)
B.hfN=new A.q(3.2,5,0.8)
B.hfO=new A.q(0,24,-0.6)
B.hfP=new A.q(-35.5,2,-38)
B.hfS=new A.q(-58,130,277.7)
B.hfT=new A.q(150,0.6,90)
B.hfU=new A.q(0,11.5,19.3)
B.hfV=new A.q(0,1.95,0.31)
B.hfW=new A.q(150,1.2,112)
B.aYJ=new A.q(0.75,4.5,0.1)
B.hfY=new A.q(-35.5,0.9,-38)
B.hfZ=new A.q(0,94.4,0)
B.hg_=new A.q(0.12,0,0.05)
B.hg1=new A.q(0,6.2,0)
B.hg2=new A.q(-34.6,34,69)
B.hg3=new A.q(9,1.2,9)
B.hg4=new A.q(120.1,150,-60)
B.hg5=new A.q(0,-0.5,0)
B.hg8=new A.q(0,37.5,-4.9)
B.hg9=new A.q(-2.4,14,8)
B.hga=new A.q(-190,160,-14.2)
B.hgb=new A.q(0,0,3.6)
B.hgc=new A.q(3,14,1.5)
B.hgd=new A.q(1.5,5.5,144)
B.hge=new A.q(5.5,8.5,0.5)
B.aYK=new A.q(0.05,8,9.6)
B.hgg=new A.q(1.5,94,3.5)
B.hgh=new A.q(0,8.2,0)
B.hgi=new A.q(0,12.6,10.2)
B.hgj=new A.q(-120.6,96,-52)
B.hgl=new A.q(4,94,0.4)
B.aYL=new A.q(1.4,8,1)
B.hgm=new A.q(120.6,96,-8)
B.hgn=new A.q(114,30,0.4)
B.hgo=new A.q(0,-1.45,0.3)
B.hgp=new A.q(3.7,1.2,-7.1)
B.hgq=new A.q(1.5,1.35,1.5)
B.hgr=new A.q(8.2,0.05,-6.7)
B.hgs=new A.q(0,-0.3,0)
B.hgt=new A.q(6.575,0,-0.25)
B.aYM=new A.q(150.6,70,160)
B.hgu=new A.q(52,140,-60.6)
B.aYN=new A.q(0,1.8,0)
B.hgv=new A.q(100,14,0.6)
B.hgw=new A.q(9,5,0.6)
B.hgx=new A.q(34,2,0.8)
B.hgz=new A.q(26,94,0.6)
B.hgA=new A.q(9.8,5,-7.75)
B.aYO=new A.q(0,2.4,0)
B.hgB=new A.q(1.5,3.5,112)
B.hgC=new A.q(-8,31.5,6)
B.hgE=new A.q(22,7,34.4)
B.hgF=new A.q(0,80,3.4)
B.hgG=new A.q(3,1.85,-7.1)
B.hgI=new A.q(40,1.4,60)
B.hgK=new A.q(48,0.1,96)
B.hgM=new A.q(34,3,0.8)
B.hgN=new A.q(16,0.4,16)
B.abC=new A.q(13,12.5,0)
B.hgP=new A.q(0.34,0.66,0.9)
B.hgR=new A.q(0.9,1.08,0.98)
B.hgS=new A.q(36,8,-43.4)
B.hgT=new A.q(29.5,1,12)
B.hgU=new A.q(12,0.4,6)
B.hgV=new A.q(-6.5,7.9,-3)
B.hgW=new A.q(11,4.4,3.8)
B.hgX=new A.q(1.5,1.5,0.05)
B.hgY=new A.q(-6.5,5,-3)
B.hgZ=new A.q(-21.5,3.4,-38)
B.hh_=new A.q(58.4,1.6,50)
B.hh0=new A.q(22,0.3,46)
B.hh1=new A.q(1.05,0.95,1)
B.hh2=new A.q(16,22,0.6)
B.hh3=new A.q(0.02,0.28,0.05)
B.hh5=new A.q(0,0.7,1)
B.hh6=new A.q(26,22,1.4)
B.hh7=new A.q(0,9.5,-7)
B.aYP=new A.q(13,8.6,9.5)
B.hh9=new A.q(-140,15,3.6)
B.hha=new A.q(1.3,0.95,0.6)
B.hhb=new A.q(5,5,0.8)
B.hhc=new A.q(-3.6,4,-7.76)
B.hhd=new A.q(-1.15,1.18,0.45)
B.hhe=new A.q(0,-8,10.2)
B.hhf=new A.q(0.82,0.9,0.05)
B.hhg=new A.q(0,-5.5,-0.25)
B.hhh=new A.q(0,11,21.2)
B.aYQ=new A.q(0,19.2,-2.3)
B.hhj=new A.q(14,0.5,-46)
B.hhk=new A.q(34.6,86,69)
B.hhl=new A.q(64,50,6.6)
B.hhm=new A.q(-34,40,36.4)
B.hhn=new A.q(2.2,1.8,2)
B.hhp=new A.q(190,160,-14.2)
B.hhr=new A.q(0,0.6,0)
B.hhu=new A.q(1.9,0,0)
B.hhv=new A.q(10,4.6,3.6)
B.hhw=new A.q(0.45,0.72,0.06)
B.hhx=new A.q(95,26,1.8)
B.hhz=new A.q(14,0.4,7)
B.hhA=new A.q(64,24,-3.2)
B.abD=new A.q(1.2,140,320)
B.hhB=new A.q(1,4.5,0.8)
B.hhC=new A.q(40,14.5,36)
B.hhD=new A.q(120.1,150,0)
B.hhE=new A.q(0,0.03,0)
B.hhF=new A.q(-100,100,320)
B.hhH=new A.q(-100,400,350)
B.hhI=new A.q(-10,22,0)
B.hhL=new A.q(-110,96,120)
B.hhM=new A.q(-112,38,24)
B.hhN=new A.q(-120,0,-30)
B.hhO=new A.q(-120,300,-320)
B.hhP=new A.q(-125,16,30)
B.hhQ=new A.q(-13,15,2)
B.hhR=new A.q(-144,82,45)
B.hhS=new A.q(-147,54,45)
B.hhT=new A.q(-148,56,120)
B.hhU=new A.q(-14,17,4)
B.hhV=new A.q(-14,20,-28)
B.hhW=new A.q(-18,6,0)
B.hhX=new A.q(-1,0,-8)
B.hhY=new A.q(-200,0,500)
B.hhZ=new A.q(-200,0,900)
B.hi_=new A.q(-200,100,480)
B.hi1=new A.q(-20,4,26)
B.hi2=new A.q(-20,92,26)
B.hi3=new A.q(-22,14,0)
B.hi4=new A.q(-24,38,0)
B.hi5=new A.q(-260,330,-80)
B.hi6=new A.q(-3000,0,3000)
B.hi7=new A.q(-3000,0,-3000)
B.hia=new A.q(-30,36,38)
B.hib=new A.q(-30,40,100)
B.hic=new A.q(-30,44,33)
B.hie=new A.q(-330,40,760)
B.hif=new A.q(-34,34,38)
B.hig=new A.q(-34,40,38)
B.hih=new A.q(-37,16,0)
B.hii=new A.q(-37,50,38)
B.hij=new A.q(-380,470,1300)
B.hik=new A.q(-390,144,-120)
B.hil=new A.q(-390,70,-120)
B.him=new A.q(-40,12,150)
B.hin=new A.q(-40,30,164)
B.hio=new A.q(-40,3,4)
B.hir=new A.q(-42,-34,96)
B.hit=new A.q(0,-0.6,22)
B.hiu=new A.q(-4,20,0)
B.hiv=new A.q(-4,22,150)
B.aYT=new A.q(-4,22,8)
B.hiy=new A.q(-5,17,0)
B.hiz=new A.q(0,36.5,0)
B.hiA=new A.q(-60,28,56)
B.hiD=new A.q(-60,50,1)
B.hiE=new A.q(-60,70,6)
B.hiF=new A.q(-700,430,1150)
B.hiH=new A.q(-70,0,34)
B.hiI=new A.q(-70,95,34)
B.hiJ=new A.q(-70,96,34)
B.hiK=new A.q(-720,360,320)
B.hiN=new A.q(-72,6,55)
B.hiO=new A.q(-80,12,30)
B.hiP=new A.q(-80,25,30)
B.hiT=new A.q(-8,24,0)
B.hiU=new A.q(-8,25,0)
B.hiV=new A.q(-8,3,44)
B.hiW=new A.q(-8,42,-5)
B.hiX=new A.q(-8,-28,104)
B.hiY=new A.q(-8,-39,96)
B.hj_=new A.q(0,0.35,0.78)
B.hj0=new A.q(0.6,6,14)
B.hj1=new A.q(-11.9,0,-8)
B.hj2=new A.q(32,3,0.5)
B.hj3=new A.q(38,1.4,12)
B.hj4=new A.q(14,0.1,0.35)
B.hj5=new A.q(25,0.5,66)
B.hj6=new A.q(-8.4,1.9,-7.2)
B.hj7=new A.q(1.6,8,5)
B.hj8=new A.q(0.8,1.6,1.4)
B.hja=new A.q(25,6,0.2)
B.hjb=new A.q(14,0.3,14)
B.aYW=new A.q(1.25,1,0.1)
B.hjc=new A.q(11.2,0,-6)
B.hjd=new A.q(-146.4,62,172)
B.hje=new A.q(0.4,7,9)
B.hjf=new A.q(-12,0.8,-22)
B.hjg=new A.q(20,1.5,12)
B.hjh=new A.q(1.2,1.1,0.8)
B.hjj=new A.q(150,49,1.2)
B.hjk=new A.q(41.5,11,-12)
B.hjl=new A.q(62,0.2,42)
B.hjm=new A.q(4.6,1.5,-3.6)
B.hjn=new A.q(-2.5,3,44)
B.hjo=new A.q(0,-0.7,0.8)
B.hjp=new A.q(0,15.55,-3.6)
B.hjq=new A.q(0.6,9,9)
B.hjr=new A.q(8.9,1.9,0.9)
B.hjs=new A.q(-34.6,34,7)
B.hjt=new A.q(60,15,3.6)
B.aYX=new A.q(1.6,58,66)
B.hju=new A.q(0,-1.55,-0.6)
B.hjv=new A.q(36.2,32.2,0.6)
B.hjw=new A.q(1.78,4.25,0.08)
B.hjx=new A.q(27,0.6,19)
B.hjy=new A.q(1.4,52,96)
B.hjz=new A.q(0,5.5,-0.25)
B.hjA=new A.q(28,2.5,26)
B.hjB=new A.q(-10,1.8,44)
B.hjC=new A.q(0,0.7,0)
B.hjD=new A.q(-1.2,-1.6,2.2)
B.hjE=new A.q(11,25,0.3)
B.hjF=new A.q(17,83,77.2)
B.aYY=new A.q(-12,14,19.4)
B.aYZ=new A.q(13,8.6,-9.5)
B.aZ_=new A.q(0.05,0.12,0.03)
B.aZ0=new A.q(8.2,0.95,-6.7)
B.hjG=new A.q(0,-2.5,0)
B.hjH=new A.q(40,1.2,22)
B.hjI=new A.q(3.2,4,3.2)
B.hjJ=new A.q(26,1.2,1.2)
B.hjK=new A.q(0.7,1.5,-7.2)
B.hjL=new A.q(0,-1,4.9)
B.hjM=new A.q(0,0.35,0.18)
B.hjN=new A.q(62,2.4,8)
B.hjO=new A.q(-1.6,11,6)
B.hjP=new A.q(0.1,0,0)
B.hjQ=new A.q(0.32,0,0.5)
B.hjR=new A.q(2200,0.4,720)
B.hjS=new A.q(1.6,11,6)
B.hjT=new A.q(-10,0.5,150)
B.hjV=new A.q(-60,50,1.8)
B.hjW=new A.q(-0.9,0,4.4)
B.hjX=new A.q(-6.5,7.2,-3)
B.hjZ=new A.q(300,6,1.6)
B.hk_=new A.q(76,64,0.6)
B.hk0=new A.q(7.1,18,-3)
B.hk2=new A.q(0.45,1.3,0.9)
B.hk3=new A.q(74,1.2,90)
B.hk4=new A.q(15.5,2.6,0)
B.hk6=new A.q(-8,-47.8,70)
B.hk7=new A.q(14,1.5,3.5)
B.hk8=new A.q(0,0,0.5)
B.aZ1=new A.q(17,24,0.3)
B.hk9=new A.q(5.2,3.9,-7.82)
B.hka=new A.q(0,0.7,2.4)
B.hkb=new A.q(0,0.3,0)
B.aZ2=new A.q(2.3,7,0.5)
B.hkd=new A.q(0,66,1.8)
B.hke=new A.q(44,84,1.2)
B.aZ3=new A.q(-13,8.6,9.5)
B.hkh=new A.q(0.6,28,52)
B.hki=new A.q(6.5,6,14)
B.hkj=new A.q(0,4.2,2.4)
B.hkk=new A.q(0,-1.99,0.14)
B.hkl=new A.q(0.4,36,34)
B.hkn=new A.q(4.6,-2,1.2)
B.hko=new A.q(0,14,19.3)
B.aZ4=new A.q(0,0,-2.4)
B.hkp=new A.q(1.3,0.8,0.9)
B.hkq=new A.q(-36.2,60,38)
B.hkr=new A.q(110,18,0.6)
B.hks=new A.q(0,-1.78,0.52)
B.hkt=new A.q(120,1.4,150)
B.hku=new A.q(0.12,0.1,0.03)
B.hkv=new A.q(9.8,5,-7.58)
B.hkw=new A.q(14,1.5,5)
B.hkx=new A.q(0.95,2.3,0.5)
B.aZ5=new A.q(0.5,1.4,2)
B.hky=new A.q(3.5,0.15,-7.2)
B.aZ6=new A.q(64,2,1.2)
B.hkz=new A.q(1.2,26.4,20)
B.hkA=new A.q(9.5,1.3,4.2)
B.hkB=new A.q(-3.6,4,-7.82)
B.hkC=new A.q(-3,37,-4.9)
B.hkD=new A.q(0.3,2,36)
B.hkG=new A.q(24,0.8,6.5)
B.hkH=new A.q(-28,76,38.3)
B.hkI=new A.q(300,1.2,200)
B.hkK=new A.q(22,0.5,5)
B.hkL=new A.q(9,10,0.6)
B.hkM=new A.q(13,0.12,4.6)
B.hkN=new A.q(0,22,2.1)
B.hkQ=new A.q(0,56,0.5)
B.hkR=new A.q(150,1.2,70)
B.hkS=new A.q(0,-5.5,-3.4)
B.hkT=new A.q(58,104,31.7)
B.hkU=new A.q(2.4,0.9,9)
B.hkV=new A.q(100,52,2.4)
B.hkW=new A.q(2.1,0.4,0.5)
B.aZ7=new A.q(0.4,29,31)
B.hkX=new A.q(0,-0.6,180)
B.hkY=new A.q(0,0.8,-1.3)
B.hkZ=new A.q(-19.5,-1,-1.5)
B.hl_=new A.q(80,0.5,60)
B.hl0=new A.q(3.4,3.6,3.2)
B.hl1=new A.q(0,10.45,0)
B.hl2=new A.q(6.85,4,-3.2)
B.hl3=new A.q(52,58,0.6)
B.hl4=new A.q(0,14.4,0)
B.aZa=new A.q(0.12,3,1.9)
B.hl5=new A.q(0.06,0.62,0.8)
B.hl6=new A.q(0,18.5,0)
B.hl7=new A.q(0,1.18,0.45)
B.hl8=new A.q(50,0.6,-50)
B.hla=new A.q(20,0.55,13.2)
B.hlb=new A.q(96,56,1.6)
B.hlc=new A.q(9.55,5.7,-7.5)
B.hle=new A.q(-400,80,-19.2)
B.hlf=new A.q(0.8,2.4,0.3)
B.aZb=new A.q(0,0.7,2)
B.hlg=new A.q(3.5,26,15)
B.hlh=new A.q(0.95,0.62,1)
B.aZc=new A.q(0,24,40.2)
B.hli=new A.q(0.8,1.1,1.2)
B.hlj=new A.q(0,51.5,20)
B.hlk=new A.q(0,0.3,4.3)
B.hll=new A.q(-20,0.5,145)
B.hlm=new A.q(1.15,1.18,0.45)
B.hln=new A.q(2.4,14,8)
B.hlo=new A.q(0,47.25,-2.25)
B.hlp=new A.q(40,14.6,36)
B.hlq=new A.q(-8,31.5,-6)
B.hlr=new A.q(0.5,0.5,0.04)
B.hls=new A.q(12.5,39,0.6)
B.hlt=new A.q(140,62,3.6)
B.hlu=new A.q(0,3,0.9)
B.hlv=new A.q(0,-1.45,0.32)
B.hlw=new A.q(9,0.7,15)
B.hlx=new A.q(3,36,10.6)
B.hly=new A.q(25,10,0.2)
B.hlA=new A.q(0.14,8,0.3)
B.hlB=new A.q(3,0.6,0)
B.hlC=new A.q(11,15,0.3)
B.hlF=new A.q(0.6,0.12,0.03)
B.hlG=new A.q(-10.7,1.2,-6.4)
B.hlH=new A.q(-52,140,-60.6)
B.hlI=new A.q(-71.2,46.6,55)
B.hlJ=new A.q(5,4.5,3)
B.hlK=new A.q(120,36,1.4)
B.hlL=new A.q(0,3.9,2.5)
B.aZd=new A.q(0,3.7,2.6)
B.hlO=new C.bQ("phase-chip",x.W)
B.hlP=new C.bQ("room-tray",x.W)
B.hlR=new C.bQ("screw-row",x.W)
B.hlT=new C.bQ("lessons-search-field",x.W)
B.hlY=new C.bQ("lessons-search",x.W)
B.hm3=new C.bQ("tray-show-all",x.W)
B.hme=new C.bQ("turned-page-rotate",x.W)
B.hmo=new C.bQ("work-row",x.W)
B.hmL=new A.ay8("bonded","The ground strap is still on the terminal block, so the neutral is joined to the metal frame of the appliance. On a 4-wire cord the strap must come off: the frame is grounded by the green wire, and the neutral carries current.",!0,!1,!1,"none","Take the metal ground strap off the terminal block.")
B.W8=new A.G2(0,"hot")
B.W9=new A.G2(1,"neutral")
B.Wa=new A.G2(2,"ground")
B.aZw=new A.G2(3,"unknown")
B.eQY=new C.z(-20,46)
B.hpR=new A.AF(B.eQY,0,2.4,"Having the drink",!0,!1,!1,"")
B.ezf=new C.z(34,62)
B.hpS=new A.AF(B.ezf,3.141592653589793,2.2,"Picking up the remote",!1,!0,!1,"")
B.hq_=new A.aC7(null)
B.hB9=new A.f1n(0,"material")})();(function staticFields(){$.dp=0
$.ajF=!1
$.ajG=!0
$.hh6=!1
$.h4e=C.U(x.N,C.as("MQ"))
$.h4d=C.U(x.N,C.as("aB<MQ?>"))
$.h4c=C.aV(x.N)
$.iba=C.U(x.N,C.as("ai<+(q,q)>"))
$.ib8=C.U(x.N,x.dg)
$.hwX=C.U(x.N,C.as("iH"))
$.a4w=null
$.Em=null
$.blU=null
$.Wo=null
$.hng=null
$.fvv=C.U(x.S,C.as("ai<kr>"))
$.ahZ="xbot"})();(function lazyInitializers(){var w=a.lazyFinal
w($,"ivz","hFd",()=>C.bQm())
w($,"ivL","hfr",()=>C.bQm())
w($,"iqt","hCJ",()=>new A.aU4($.aw()))
w($,"iya","bGo",()=>{var v,u,t=C.as("O<aU3>"),s=C.a([],t)
for(v=0;v<2;++v){u=v*9
D.d.v(s,C.a([A.h3o(v,175,u),A.h3o(v,612,u+14),A.h3o(v,1013,u+7)],t))}return s})
w($,"ixK","h2z",()=>C.a([A.hsf(-80,80,400,565),A.hsf(-80,80,715,885)],C.as("O<bxW>")))
w($,"iqu","aS6",()=>A.hIA())
w($,"iy9","hGD",()=>{var v=C.a([A.or("Wire a standard 120 volt receptacle: black to brass, white to silver, bare copper to green.",B.S9,B.dsT,"outlet","",!0,B.IO,B.d_6,!1,"Wall outlet",new A.fFP()),A.or("A single-pole switch breaks the hot wire to the light: two black wires go on the two brass screws.",B.der,B.dfW,"switch","",!0,B.IO,B.cYu,!1,"Light switch",new A.fFQ()),A.or("A GFCI protects you near water. Power comes in on LINE. The LOAD screws (covered with tape) feed other outlets.",B.S9,B.diU,"gfci","",!0,B.IO,B.dho,!1,"GFCI outlet",new A.fFR()),A.or("Join the house wires to the fixture wires with wire nuts: black to black, white to white, ground to ground.",B.S9,B.d9q,"light","",!0,B.IO,B.duA,!1,"Ceiling light",new A.fFS()),A.or("A fan hangs from a strong fan-rated box. Join black, white and ground with wire nuts, then fasten the canopy.",B.S9,B.dgL,"fan","",!0,B.IO,B.d5j,!1,"Ceiling fan",new A.fFT())],C.as("O<MF>"))
D.d.v(v,$.h2F())
return v})
w($,"iyb","h2F",()=>{var v="switch",u="outlet",t=C.a([A.or("Breaks BOTH hot legs of a 240 volt circuit at once: water heaters and baseboard heat.",B.dxx,B.c8a,"switch2p",v,!0,B.dA_,B.d9C,!0,"Double-pole switch (240 V)",new A.fFU()),A.or("One light, two switches. One COMMON screw and two TRAVELER screws; it pairs with a second three-way.",B.dqN,B.cZQ,"switch3",v,!0,B.dAg,B.dhr,!0,"Three-way switch",new A.fFV()),A.or("Sits in the middle of two three-way switches: two traveler wires in on one side, two out on the other.",B.dvX,B.dkm,"switch4",v,!0,B.dA0,B.dpB,!0,"Four-way switch",new A.fFW()),A.or("Needs a NEUTRAL wire in the box as well: hot in, hot out to the light, neutral and ground.",B.d41,B.d6X,"switchsmart",v,!0,B.dAh,B.d4j,!0,"Smart, motion or timer switch",new A.fFX()),A.or("Two switches in one device: one hot feed is split between them, and two separate lights come out.",B.cMG,B.dnM,"switchcombo",v,!0,B.dC_,B.czL,!0,"Combination (double) switch",new A.fFY()),A.or("The tab between the brass screws is broken off: the top half is switched, the bottom half is always on.",B.dhk,B.cz9,"split",u,!0,B.dAi,B.dmH,!0,"Split (half-switched) outlet",new A.fFZ()),A.or("Two hots, a neutral and a ground: the dryer 14-30, and the range and car charger 14-50.",B.a5T,B.d2F,"v240four",u,!0,B.a6q,B.cR5,!0,"4-wire 240 V outlet (dryer, range, EV)",new A.fG_()),A.or("Two hots and a neutral, with no separate ground: the old 10-30 and 10-50, from before 1996.",B.a50,B.dws,"v240three",u,!1,B.a6x,B.dvE,!0,"3-wire 240 V outlet (old dryer or range)",new A.fG0()),A.or("Two hots and a ground, and no neutral at all: the 6-series outlets.",B.duf,B.ded,"v240only",u,!0,B.dAw,B.dsZ,!0,"240 V only outlet (window AC, welder)",new A.fG1()),A.or("Hot and neutral as usual, but the ground goes on its own wire straight back to the panel: shops and offices.",B.dwg,B.dfk,"isolated",u,!0,B.dBp,B.daK,!0,"Isolated-ground outlet",new A.fG2())],C.as("O<MF>"))
D.d.v(t,$.hGC())
return t})
w($,"iy4","hGC",()=>C.a([A.or("The dryer outlet of every new house: 30 amp, 240 volts. Two hots (X, Y), a neutral (W) and a separate ground (G).",B.a5T,B.aBw,"dryer4","nema1430",!0,B.a6q,B.dmS,!0,"Dryer outlet, 4-wire (NEMA 14-30)",new A.fFI()),A.or("The dryer outlet of older houses (before 1996): 30 amp, 240 volts. Two hots and a neutral that also grounds the dryer. No separate ground.",B.a50,B.aC2,"dryer3","nema1030",!1,B.a6x,B.cUU,!0,"Dryer outlet, 3-wire (NEMA 10-30)",new A.fFJ()),A.or("The electric stove outlet of every new house: 50 amp, 240 volts. Two hots (X, Y), a neutral (W) and a separate ground (G). Also used for car chargers.",B.a5T,B.aBw,"range4","nema1450",!0,B.a6q,B.dk0,!0,"Range outlet, 4-wire (NEMA 14-50)",new A.fFK()),A.or("The electric stove outlet of older houses (before 1996): 50 amp, 240 volts. Two hots and a neutral that also grounds the range. No separate ground.",B.a50,B.aC2,"range3","nema1050",!1,B.a6x,B.djZ,!0,"Range outlet, 3-wire (NEMA 10-50)",new A.fFL()),A.or("A dedicated 120 volt, 20 amp outlet for the washer, with a T-shaped neutral slot. Near water, so it needs GFCI protection.",B.dnZ,B.d2H,"washer","nema520",!0,B.dBo,B.dhV,!0,"Washing machine outlet (NEMA 5-20)",new A.fFM()),A.or("At the back of the appliance: black to the left terminal, white (neutral) to the middle one, red to the right one. The ground strap STAYS: it joins the neutral to the frame.",B.cZJ,B.d7Y,"cord3","terminal3",!1,B.dAN,B.dsd,!0,"Dryer or range cord, 3-wire hookup",new A.fFN()),A.or("At the back of the appliance: REMOVE the ground strap first, then black left, white (neutral) middle, red right, and the green ground wire to the frame.",B.dsR,B.d4v,"cord4","terminal4",!0,B.dAn,B.dbQ,!0,"Dryer or range cord, 4-wire hookup",new A.fFO())],C.as("O<MF>")))
w($,"iym","Ho",()=>{var v,u=C.a([],x.n)
for(v=0;v<10;++v)u.push(-72+16*v)
return u})
w($,"iy6","mc",()=>A.i1z())
w($,"iy5","Dw",()=>A.i1y(A.hxT()))
w($,"iyn","Bi",()=>A.i1C())})()};
(a=>{a["a+jc+0c/PAhtun7EJ1To7iYP6ns="]=a.current})($__dart_deferred_initializers__);