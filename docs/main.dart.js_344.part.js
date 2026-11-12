((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,C,D,A4,Aa,Ab,Ac,H,N,I,T,Ad,Ae,A5,Af,U,Ag,M,A6,V,Ah,A_,W,A0,A1,Ai,A2,Q,Aj,Ak,G,Al,X,Y,A3,Am,A7,A8,Z,A9,An,O,A={f1W:function f1W(d,e){this.a=d
this.b=e},aa9:function aa9(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.at=g
_.CW=h
_.a=i
_.$ti=j},aeH:function aeH(d,e){var _=this
_.d=null
_.e=$
_.Gn$=d
_.c=_.a=null
_.$ti=e},bpX:function bpX(d){this.a=d},aOe:function aOe(){},
oM(d,e,f){var w=d.a,v=d.b,u=d.c
return new A.r(w+(e.a-w)*f,v+(e.b-v)*f,u+(e.c-u)*f)},
ti(d,e){var w=Math.cos(e),v=Math.sin(e),u=d.a,t=d.c
return new A.r(u*w+t*v,d.b,-u*v+t*w)},
nk(d,e,f,g){var w,v,u,t,s,r,q,p,o=new A.h20(Math.cos(e),Math.sin(e)),n=new A.h1Z(f),m=new A.h2_(n,e,o,g),l=new A.h1Y(n,e,o),k=C.a([],x.z)
for(w=d.length,v=x.o,u=0;u<d.length;d.length===w||(0,C.J)(d),++u){t=d[u]
s=C.a([],v)
for(r=t.a,q=r.length,p=0;p<r.length;r.length===q||(0,C.J)(r),++p)s.push(m.$1(r[p]))
k.push(new A.ks(s,l.$1(t.b),t.c,t.d,t.e,t.f,t.r,t.w,t.x,t.y,t.z))}return k},
Dz(d,e,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
if(d.length<3)return d
w=C.a([D.d.gH(d)],x.o)
for(v=1;u=v+1,u<d.length;v=u){t=d[v-1]
s=d[v]
r=d[u]
q=s.a
p=s.b
o=s.c
n=new A.r(q-t.a,p-t.b,o-t.c)
m=new A.r(r.a-q,r.b-p,r.c-o)
l=Math.min(e,n.gqg()*0.5)
k=Math.min(e,m.gqg()*0.5)
j=n.gn0(0)
i=new A.r(q-j.a*l,p-j.b*l,o-j.c*l)
j=m.gn0(0)
h=new A.r(q+j.a*k,p+j.b*k,o+j.c*k)
for(g=0;g<=a0;++g){f=g/a0
w.push(A.oM(A.oM(i,s,f),A.oM(s,h,f),f))}}w.push(D.d.gam(d))
return w},
aix(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
if(a3.length<3)return a3
w=C.a([],x.o)
for(v=0;u=v+1,t=a3.length,u<t;v=u){s=v===0?a3[v]:a3[v-1]
r=a3[v]
q=a3[u]
p=v+2
o=p<t?a3[p]:q
for(t=s.a,p=r.a,n=q.a,m=o.a,l=s.b,k=r.b,j=q.b,i=o.b,h=s.c,g=r.c,f=q.c,e=o.c,d=0;d<a4;++d){a0=d/a4
a1=a0*a0
a2=new A.h1O(a0,a1,a1*a0)
w.push(new A.r(a2.$4(t,p,n,m),a2.$4(l,k,j,i),a2.$4(h,g,f,e)))}}w.push(D.d.gam(a3))
return w},
hJf(){if($.hhS)return
$.hhS=!0
C.az().bJ(new A.bKh(),x.P).eL(new A.bKi())},
hhT(){C.az().bJ(new A.bKj(),x.P).eL(new A.bKk())},
i3t(d){var w,v,u,t,s,r,q,p,o,n
for(w=d.length,v=!0,u=!0,t=0;t<w;++t)if(d[t].c>=0.5)u=!1
else v=!1
if(v)return d
if(u)return B.nH
s=C.a([],x.o)
for(r=0;w=d.length,r<w;){q=d[r];++r
p=d[r%w]
w=q.c
o=w>=0.5
n=p.c
if(o)s.push(q)
if(o!==n>=0.5)s.push(A.oM(q,p,(0.5-w)/(n-w)))}return s},
hby(a2,a3,a4){var w,v,u,t,s,r,q,p=J.a7(a2),o=p.h(a2,0).a,n=p.h(a2,0).b,m=p.h(a2,1).a,l=p.h(a2,1).b,k=p.h(a2,2).a,j=p.h(a2,2).b,i=p.h(a2,3).a,h=p.h(a2,3).b,g=m-k,f=i-k,e=o-m+k-i,d=l-j,a0=h-j,a1=n-l+j-h
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
return new C.eH(p)},
i4l(d,e,f,g){var w,v=e.d,u=e.e,t=A.hby(f,v,u)
if(t==null)return
w=d.c
J.bq(w.save())
d.aE(0,t.a)
w.clipRect(C.i_(new C.a2(0,0,v,0+u)),$.mz()[1],!0)
e.c.$3(d,new C.av(v,u),g)
w.restore()},
i4m(d,e,f,g,h,i){var w,v,u,t,s,r,q,p,o,n,m,l,k=e.d,j=e.e
$.S()
w=new C.pW(new C.pu())
e.c.$3(C.zl(w,null),new C.av(k,j),i)
v=w.nZ()
u=k/g
t=j/h
for(s=f.length,r=d.c,q=0+u,p=0+t,o=0;o<f.length;f.length===s||(0,C.J)(f),++o){n=f[o]
m=A.hby(n.c,u,t)
if(m==null)continue
J.bq(r.save())
l=m.a
r.concat(C.h1T(C.Hu(l)))
r.clipRect(C.i_(new C.a2(0,0,q,p)),$.mz()[1],!0)
r.translate(-n.a*u,-n.b*t)
d.ze(v)
r.restore()}v.t()},
h8c(d,e,f,g,h,i,j,k,l,m){return new A.aw1(l,e,h,k,i,f,g,d,m,j,null)},
i2E(a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=$.hg9()
C.xF(a4)
w=a3.a.get(a4)
if(w!=null)return w
v=new A.Qc(!0,C.a([],x.z),C.a([],x.t))
a3=x.S
u=x.gf
t=C.U(a3,u)
s=C.U(a3,u)
r=a4.a
for(q=0;q<r.length;++q){p=r[q]
a3=p.z
u=a3!==0
if(u&&s.h(0,a3)!=null){s.h(0,a3).t8(0,p,q)
continue}for(o=p.a,n=o.length,m=1/0,l=-1/0,k=1/0,j=-1/0,i=1/0,h=-1/0,g=0;g<n;++g){f=o[g]
e=f.a
if(e<m)m=e
if(e>l)l=e
d=f.b
if(d<k)k=d
if(d>j)j=d
a0=f.c
if(a0<i)i=a0
if(a0>h)h=a0}if(l-m>90||j-k>90||h-i>90){v.t8(0,p,q)
continue}a1=t.c3(0,((D.k.bh(m/60)+4096)*8192+(D.k.bh(k/60)+4096))*8192+(D.k.bh(i/60)+4096),new A.fmE())
a1.t8(0,p,q)
if(u)s.n(0,a3,a1)}a3=C.a([v],x.dF)
D.d.v(a3,new C.b8(t,t.$ti.k("b8<2>")))
a2=new A.cNW(a3)
$.hg9().n(0,a4,a2)
return a2},
b7C(d,e,f,g,h,i,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9){var w,v,u,t,s,r,q,p,o,n=(a1-g)/2,m=h-e,l=Math.max(a7*2,m*0.3),k=m-l,j=a6-a5/2
m=a1/2-n/2
d.alp(new A.r(a8-m,j,a9),new A.r(n,a5,h),a0,0.5,4,a4)
d.alp(new A.r(a8+m,j,a9),new A.r(n,a5,h),a0,0.5,8,a4)
m=h/2
w=a9-m
d.alp(new A.r(a8,j,w+k/2),new A.r(g,a5,k),a0,0.5,13,a4)
d.alp(new A.r(a8,j,a9+m-l/2),new A.r(g,a5,l),a0,0.5,14,a4)
m=e/2
v=w+k+m
u=a6-a2/2
w=g/2
t=a7/2
d.aD(new A.r(a8-w+t,u,v),new A.r(a7,a2,e),f,0.7)
d.aD(new A.r(a8+w-t,u,v),new A.r(a7,a2,e),f,0.7)
w=v-m
d.aD(new A.r(a8,u,w+t),new A.r(g,a2,a7),f,0.7)
s=a6-a2
r=C.ar(f,D.dq,0.18)
r.toString
d.aD(new A.r(a8,s+t,v),new A.r(g,a7,e),r,0.6)
d.aD(new A.r(a8,u,v+m-t),new A.r(g,a2,a7),f,0.7)
d.e=0.5
s+=a7
t=Math.min(g,e)
d.dq(new A.r(a8,s,v),new A.r(a8,s+0.05,v),t*0.09,B.f_,14)
if(!a3){d.e=0
return}q=w-k*0.38
m=t*0.08
w=t*0.2
d.aD(new A.r(a8,a6+t*0.04,q),new A.r(t*0.65,m,w),i,0.9)
s=a6+t*0.5
r=a6+t*0.62
d.iD(A.Dz(C.a([new A.r(a8,a6+m,q),new A.r(a8,s,q),new A.r(a8,r,q+t*0.12),new A.r(a8,r,q+t*0.38),new A.r(a8,s,q+t*0.42)],x.o),t*0.1,6),t*0.045,i,!0,0.9,8)
for(m=a6+w,w=t*0.035,s=a6+t*0.24,r=t*0.075,p=0;p<2;++p){o=a8+F.hg[p]*t*0.3
d.cJ(new A.r(o,a6,q),new A.r(o,m,q),w,i,0.9,8)
d.cJ(new A.r(o,m,q),new A.r(o,s,q),r,i,0.9,10)}d.e=0},
r:function r(d,e,f){this.a=d
this.b=e
this.c=f},
ks:function ks(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
cH:function cH(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
hd:function hd(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
qU:function qU(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
fh:function fh(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
eM:function eM(d){var _=this
_.a=d
_.c=_.b=0
_.d=1
_.e=0
_.f=2
_.r=!1
_.x=_.w=0},
c0J:function c0J(d,e){this.a=d
this.b=e},
c0K:function c0K(d){this.a=d},
c0I:function c0I(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
c0L:function c0L(d,e,f){this.a=d
this.b=e
this.c=f},
c0H:function c0H(d,e){this.a=d
this.b=e},
c0M:function c0M(d,e,f){this.a=d
this.b=e
this.c=f},
h20:function h20(d,e){this.a=d
this.b=e},
h1Z:function h1Z(d){this.a=d},
h2_:function h2_(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
h1Y:function h1Y(d,e,f){this.a=d
this.b=e
this.c=f},
h1O:function h1O(d,e,f){this.a=d
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
_.bw$=_.bL$=0},
bKh:function bKh(){},
bKi:function bKi(){},
bKj:function bKj(){},
bKk:function bKk(){},
bKe:function bKe(){},
bKm:function bKm(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bKl:function bKl(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bKg:function bKg(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bKf:function bKf(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bVK:function bVK(d){this.a=d},
b6Y:function b6Y(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
cvI:function cvI(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cvJ:function cvJ(d,e){this.a=d
this.b=e},
cvH:function cvH(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0,a1,a2,a3,a4,a5,a6){var _=this
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
cvB:function cvB(){},
cvC:function cvC(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
cvA:function cvA(d){this.a=d},
cvD:function cvD(){},
cvE:function cvE(d,e,f){this.a=d
this.b=e
this.c=f},
cvF:function cvF(){},
cvG:function cvG(){},
cFY:function cFY(d,e){this.a=d
this.b=e},
Gn:function Gn(d,e,f,g,h,i,j,k,l){var _=this
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
aw1:function aw1(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
bsA:function bsA(d,e,f,g,h,i,j){var _=this
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
_.bx$=i
_.aa$=j
_.c=_.a=null},
f5m:function f5m(d){this.a=d},
f5l:function f5l(d){this.a=d},
f5j:function f5j(d){this.a=d},
f5k:function f5k(d){this.a=d},
f5d:function f5d(d){this.a=d},
f5e:function f5e(d,e){this.a=d
this.b=e},
f5g:function f5g(d){this.a=d},
f5h:function f5h(d){this.a=d},
f5f:function f5f(d){this.a=d},
f5i:function f5i(d){this.a=d},
Qc:function Qc(d,e,f){var _=this
_.a=d
_.b=e
_.c=f
_.d=1/0
_.e=-1/0
_.f=1/0
_.r=-1/0
_.w=1/0
_.x=-1/0},
cNW:function cNW(d){this.a=d},
fmE:function fmE(){},
aOn:function aOn(){},
bUE(d){var w,v,u=$.h4L.h(0,d)
if(u!=null)return C.f3(u,x.g7)
w=B.ST.h(0,d)
if(w==null)return C.f3(null,x.g7)
v=$.h4K.h(0,d)
if(v==null){v=new A.bUF(w,d).$0()
$.h4K.n(0,d,v)}return v},
aWM(d){var w=0,v=C.j(x.H),u
var $async$aWM=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:w=2
return C.b(A.bUE(d),$async$aWM)
case 2:u=J.aX(B.ST.ges(B.ST))
case 3:if(!u.C()){w=4
break}w=5
return C.b(A.bUE(u.gR(u)),$async$aWM)
case 5:w=3
break
case 4:return C.h(null,v)}})
return C.i($async$aWM,v)},
hMv(d){var w,v,u=new Float64Array(d*16)
for(w=0;w<d;++w){v=w*16
u[v+15]=1
u[v+10]=1
u[v+5]=1
u[v]=1}return u},
hjs(d,e,f){var w,v,u,t
if(d>e){w=d
v=e}else{w=e
v=d}if(w>f){u=w
w=f}else u=f
if(v>w){t=w
w=v
v=t}return(v*65536+w)*65536+u},
hMw(d,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=d.c,g=d.b===1,f=g?4:3,e=h.length
if(e===0)return
w=d.a*f
if(a0<=h[0]||e===1){for(g=d.d,v=a1.$flags|0,u=0;u<f;++u){t=g[u]
v&2&&C.aj(a1)
a1[w+u]=t}return}s=e-1
if(a0>=h[s]){for(g=d.d,v=s*f,t=a1.$flags|0,u=0;u<f;++u){r=g[v+u]
t&2&&C.aj(a1)
a1[w+u]=r}return}for(q=0;s-q>1;){p=D.o.aJ(q+s,1)
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
hjt(d,a0,a1,a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
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
icc(d,e){var w=D.o.aJ(d,16)&255,v=D.o.aJ(d,8)&255,u=d&255,t=0.35+(0.299*w+0.587*v+0.114*u)/255,s=new A.fAz()
return C.a_(255,s.$2(w,e.gb8(e)*255*t),s.$2(v,e.gbe()*255*t),s.$2(u,e.gbc(e)*255*t))},
bcC:function bcC(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
bcX:function bcX(d,e){this.b=d
this.c=e},
bi3:function bi3(d,e,f){this.a=d
this.b=e
this.c=f},
drJ:function drJ(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=$},
N_:function N_(d,e,f,g,h){var _=this
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
bUF:function bUF(d,e){this.a=d
this.b=e},
bUw:function bUw(){},
bUq:function bUq(d,e){this.a=d
this.b=e},
bUp:function bUp(){},
bUy:function bUy(d,e,f){this.a=d
this.b=e
this.c=f},
bUz:function bUz(d){this.a=d},
bUA:function bUA(d){this.a=d},
bUx:function bUx(d,e){this.a=d
this.b=e},
bUu:function bUu(d){this.a=d},
bUv:function bUv(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
bUD:function bUD(d){this.a=d},
bUB:function bUB(){},
bUC:function bUC(d){this.a=d},
bUG:function bUG(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
bUr:function bUr(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
bUt:function bUt(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bUs:function bUs(d,e){this.a=d
this.b=e},
fAz:function fAz(){},
dxg:function dxg(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
dlS:function dlS(d,e){this.a=d
this.b=e},
hIW(){var w,v=J.e2(6,x.ff)
for(w=0;w<6;++w)v[w]=new A.aTB()
return new A.bIy(v)},
agj(d){return A.i3U(d)},
i3U(d){var w=0,v=C.j(x.eT),u,t=2,s=[],r,q,p,o
var $async$agj=C.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:if(d==null){u=null
w=1
break}t=4
w=7
return C.b(C.fG6(d,null),$async$agj)
case 7:r=f
w=8
return C.b(r.la(),$async$agj)
case 8:q=f.b
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
return C.i($async$agj,v)},
hCc(a5,a6,a7,a8,a9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
if(a8.a){w=a7/8
if(a9===0){v=D.k.bh(w)
A.my(a5,a6,a7,D.o.E(v,2)===0?0:1+D.o.aq(v,2))}else A.my(a5,a6,a7,a9+1+D.k.bh(w))
return}u=B.a63[a8.e]
w=a6.a
t=a6.b
s=0+t
r=new C.a2(0,0,0+w,s)
$.S()
q=C.K()
q.sar(new C.a9(D.a6,D.a9,D.x,C.a([u.b,u.c],x.O),null,null).aG(0,r))
a5.au(r,q)
q=t*0.04
p=r.cr(-q)
o=C.K()
o.b=D.aa
o.c=t*0.025
n=u.e
o.r=n.gp(0)
a5.au(p,o)
m=t*0.1
l=a8.x
if(l!=null){p=m+w*0.4
o=m+(t-m*2)
k=new C.a2(m,m,p,o)
j=p-m
i=l.c
o-=m
h=l.d
v=Math.max(j/i,o/h)
g=C.bJ(new C.q(i/2,h/2),o/v,j/v)
j=a5.c
J.bq(j.save())
o=t*0.05
j.clipRRect(C.ol(C.br(k,new C.aP(o,o))),$.nJ(),!0)
o=C.K()
o.z=D.cj
a5.pZ(l,g,k,o)
j.restore()
f=p+m*0.8}else f=m
e=a8.w
if(e==null)e=$.WH
p=t*0.3
o=f+p
p=m+p
d=new C.a2(f,m,o,p)
j=d.gbK()
o-=f
i=C.K()
i.r=B.FC.gp(0)
a5.N(j,o/2,i)
if(e!=null){j=e.c
i=e.d
v=Math.min(o*0.8/j,(p-m)*0.8/i)
o=C.bJ(d.gbK(),i*v,j*v)
h=C.K()
h.z=D.cj
a5.pZ(e,new C.a2(0,0,j,i),o,h)}o=new A.fTV()
a0=w-f-m
j=u.d
a1=o.$4(a8.b,t*0.17,j,a0)
a1.a4(a5,new C.q(f,p+q))
a2=o.$5$w(a8.c,t*0.09,n,a0,D.V)
n=a1.b.a.c
a2.a4(a5,new C.q(f,p+t*0.06+n.gba(n)))
a3=o.$6$lines$w(a8.d,t*0.08,j.j(0.85),a0,1,D.H)
j=a3.b
o=j.c
j=j.a.c
a3.a4(a5,new C.q(w-m-o,t-m-j.gba(j)))
a4=(D.k.E(a7*0.35,1.6)-0.3)*w
j=a5.c
J.bq(j.save())
j.clipRect(C.i_(r),$.mz()[1],!0)
t=C.K()
t.r=D.c.j(0.1).gp(0)
a5.au(new C.a2(a4,0,a4+w*0.1,s),t)
j.restore()},
idk(d,e){var w,v,u,t,s=d.w
if(s.length===0){s=d.e
w=d.r
return new C.cu([-s/2,s/2,w+d.f,w])}v=s[e]
s=v.e
u=d.e*s
t=d.r+v.d
return new C.cu([-u/2,u/2,t+d.f*s,t])},
bCl(d,e,f,g){var w,v,u,t,s,r,q,p,o=new C.a2(0,0,0+e.a,0+e.b)
$.S()
w=C.K()
w.r=B.bkM.gp(0)
d.au(o,w)
v=o.cr(-(e.gdz()*0.06))
w=d.c
J.bq(w.save())
w.clipRect(C.i_(v),$.mz()[1],!0)
u=v.a
t=v.b
w.translate(u,t)
u=v.c-u
t=v.d-t
if((g&1)===0){s=0+u
r=0+t
q=C.K()
q.sar(B.c8J.aG(0,new C.a2(0,0,s,r)))
d.au(new C.a2(0,0,s,r),q)
p=t*0.82
J.bq(w.save())
w.translate((u-p)/2,(t-p)/2)
A.hCh(d,new C.av(p,p),f)
w.restore()}else A.my(d,new C.av(u,t),f,g)
w.restore()},
i8A(d,e,f){var w,v,u,t,s=e.a,r=e.b
$.S()
w=C.K()
w.r=B.ajB.gp(0)
d.au(new C.a2(0,0,0+s,0+r),w)
v=C.K()
v.r=L.ain.gp(0)
w=s*0.12
u=r*0.07
t=w+s*0.76
d.au(new C.a2(w,u,t,u+r*0.38),v)
u=r*0.52
d.au(new C.a2(w,u,t,u+r*0.4),v)
u=C.K()
u.r=F.f0.gp(0)
d.N(new C.q(s*0.82,r*0.5),s*0.05,u)},
hcg(d9,e0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6=x.z,d7=C.a([],d6),d8=new A.eM(d7)
d8.f=0
d8.xt(B.hkj,B.h81,B.h80,B.hki,B.bmO,B.eb)
d8.f=1
d8.xt(B.hdE,B.hb7,B.hm1,B.hd1,B.MU,B.eb)
for(w=-2100;w<2100;w+=90){v=w+45
d8.xt(new A.r(w,0.8,637),new A.r(v,0.8,637),new A.r(v,0.8,643),new A.r(w,0.8,643),L.Mv,B.eb)}d8.f=2
u=d9.e
t=d9.f
s=d9.r
v=d9.w
r=v.length
q=r!==0
p=d9.a
o=12
switch(p){case"tower":n=D.aQ
break
case"neon":n=D.ba
break
case"screen":n=D.av
o=6
break
case"roof":n=D.ax
break
case"gate":n=D.d9
break
case"duo":n=D.ba
break
case"line3":n=D.b9
break
case"far3":n=D.az
break
case"skyline":n=D.bt
break
case"lines6":n=D.aQ
break
case"scatter":n=D.ba
break
default:n=F.f0}m=p==="roof"
l=m?3:2
k=q?720:900
j=k*t/u
i=C.a([],x.a)
r=q?r:1
for(h=e0.b,g=x.o,f=-o,e=f-0.8,d=p==="highway",a0=f/2,f=p!=="neon",a1=a0-0.2,a2=p==="screen",a3=s-16,a4=(14+s-7)/2,a5=s-21,a6=s-7,a7=0;a7<r;++a7){a8=q?v[a7]:B.ado
a9=a8.e
b0=u*a9
b1=t*a9
b2=new A.fC2(a8)
b3=C.a([],d6)
b4=new A.eM(b3)
b4.f=l
b5=C.a([],d6)
b6=new A.eM(b5)
b6.f=l
b7=A.idk(d9,a7).a
b8=b7[0]
b9=b7[1]
c0=b7[2]
c1=b7[3]
c2=(b8+b9)/2
c3=(c0+c1)/2
b7=b2.$1(new A.r(c2,c3,a1))
c4=!f||a2?D.av:D.cs
c5=a8.c
b4.uN(b7,new A.r(b0+16,b1+16,o),c4,0.2,c5)
c6=7*Math.max(1,a9*0.8)
c4=b0+14
b6.uN(b2.$1(new A.r(c2,c0+3,3)),new A.r(c4,c6,8),n,0.4,c5)
b6.uN(b2.$1(new A.r(c2,c1-3,3)),new A.r(c4,c6,8),n,0.4,c5)
b7=b1+14
b6.uN(b2.$1(new A.r(b8-3,c3,3)),new A.r(c6,b7,8),n,0.4,c5)
b6.uN(b2.$1(new A.r(b9+3,c3,3)),new A.r(c6,b7,8),n,0.4,c5)
D.d.v(d7,b3)
D.d.v(d7,b5)
b5=C.a([],d6)
c7=new A.eM(b5)
c8=Math.max(6,b0*0.018)
c9=new A.fC3(i,l)
switch(q?"sep":p){case"tower":c7.dq(new A.r(0,0,a0),new A.r(0,a6,a0),c8*1.9,D.hp,12)
c7.dq(new A.r(0,0,a0),new A.r(0,14,a0),c8*2.8,D.av,12)
break
case"screen":c7.aF(new A.r(0,7,-10),new A.r(b0*0.6,14,70),D.av)
c7.aF(new A.r(0,a4,a0),new A.r(60,a5,14),D.hp)
break
case"roof":c7.kZ(B.h3t,B.hac,B.biQ,0.1,4)
c7.kZ(B.h4a,B.hai,D.dq,0.15,4)
c7.hl(B.h3P,B.hah,D.dq,4)
c7.kZ(B.hkx,B.h7_,B.bk3,0.1,2)
c7.hl(B.hkw,B.h7d,D.dq,2)
c7.aF(B.h7s,B.h8X,B.o2)
c7.aF(B.h3g,B.h5D,D.ep)
c9.$6$px(B.hij,0,210,126,new A.fBW(),360)
c9.$6$px(B.hjB,0,210,126,new A.fBX(),360)
c9.$6$px(B.hew,0,72,116,A.imI(),140)
c9.$6$px(B.hnr,0,130,80,new A.fBY(),300)
for(d0=0;d0<3;++d0){d1=-60-d0*90
c9.$6$px(new A.r(310.8,140,d1),1.5707963267948966,80,64,new A.fBZ(d0),240)
c9.$6$px(new A.r(310.8,55,d1),1.5707963267948966,60,60,A.heK(),200)}for(d0=0;d0<2;++d0){d1=-65-d0*110
c9.$6$px(new A.r(-490.8,95,d1),-1.5707963267948966,90,60,new A.fC_(d0),240)
c9.$6$px(new A.r(-490.8,40,d1),-1.5707963267948966,50,50,A.heK(),180)}c9.$6$px(new A.r(0,100,-285.8),3.141592653589793,580,170,A.hC3(),900)
break
case"gate":for(b3=b0/2+25,b7=s+b1,c4=b7+26,c5=c8*1.6,d2=0;d2<2;++d2){d3=F.hg[d2]*b3
c7.dq(new A.r(d3,0,a0),new A.r(d3,c4,a0),c5,D.hp,12)}c7.aD(new A.r(0,b7+17,a0),new A.r(b0+80,18,22),D.hp,0.2)
break
default:for(b3=s+a8.d-7,d2=0;d2<2;++d2){b7=F.hg[d2]*b0*0.3
c7.dq(b2.$1(new A.r(b7,0,a0)),b2.$1(new A.r(b7,b3,a0)),c8,D.hp,10)}if(d)c7.aF(new A.r(0,a3,14),new A.r(c4,3,24),D.hp)}D.d.v(d7,b5)
d4=h[a7]
i.push(new A.fh(C.a([b2.$1(new A.r(b8,c0,0.8)),b2.$1(new A.r(b9,c0,0.8)),b2.$1(new A.r(b9,c1,0.8)),b2.$1(new A.r(b8,c1,0.8))],g),0,new A.fC0(d4,a7),k,j,60,l,0,!1))
i.push(new A.fh(C.a([b2.$1(new A.r(b9,c0,e)),b2.$1(new A.r(b8,c0,e)),b2.$1(new A.r(b8,c1,e)),b2.$1(new A.r(b9,c1,e))],g),0,new A.fC1(d4,a7),k,j,60,l,0,!1))}d6=C.a([],d6)
d5=new A.eM(d6)
for(d2=0;d2<9;++d2){v=B.d5l[d2]
w=v.a
d1=v.b
if(m&&d1>200)continue
d5.dq(new A.r(w,0,d1),new A.r(w,55,d1),7,B.qk,6)
d5.ee(new A.r(w,98,d1),46,E.Y7,3,6)}for(d2=0;d2<6;++d2){w=B.dvp[d2]
d5.dq(new A.r(w,0,580),new A.r(w,90,580),3,D.hp,5)
d5.ee(new A.r(w,95,580),8,B.nl,3,6)}D.d.v(d7,d6)
return new A.qU(d7,B.SY,B.v0,i,null,!1,6000)},
hum(d){return d*d*(3-2*d)},
fnR(d,e,f,g,h){var w=new A.fnS(h)
return new A.r(w.$4(d.a,e.a,f.a,g.a),w.$4(d.b,e.b,f.b,g.b),w.$4(d.c,e.c,f.c,g.c))},
hvk(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=D.k.F(e,0,30)
if(f==null){w=C.a([],x.n)
for(v=J.a7(d),u=0;u<v.gI(d);++u)w.push(30*u/(v.gI(d)-1))
t=w}else t=f
w=J.a7(d)
v=J.a7(t)
s=0
for(;;){r=s+2
if(!(r<w.gI(d)&&v.h(t,s+1)<=m))break;++s}w=s+1
q=A.hum(D.k.F((m-v.h(t,s))/(v.h(t,w)-v.h(t,s)),0,1))
v=new A.frh(d)
p=s-1
o=A.fnR(v.$1(p).a,v.$1(s).a,v.$1(w).a,v.$1(r).a,q)
n=A.fnR(v.$1(p).b,v.$1(s).b,v.$1(w).b,v.$1(r).b,q)
r=Math.sin(m*1.3)
v=Math.sin(m*1.9)
w=Math.cos(m*1.1)
return new C.y(new A.r(o.a+r*3,Math.max(o.b+v*2.5,18),o.c+w*3),n)},
ick(d){return $.icj.c3(0,d.a,new A.fAG(d))},
hxK(d){return $.icl.c3(0,d.a,new A.fAD(d))},
idj(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=d.a
if(i==="scatter")return A.hvk(B.djj,e,null)
if(d.w.length!==0)return A.hvk(A.hxK(d),e,A.ick(d))
w=B.dBc.h(0,i)
if(w==null)w=B.aQz
v=B.cyS[w.a]
u=w.b?-1:1
t=new A.r(d.ga4K(0),d.r+d.gH_()/2,d.ga4M())
s=new A.fBO(t,u,d)
r=new A.fBP(t,u,d)
q=D.k.F(e,0,30)
i=v.length
p=0
for(;;){o=p+2
if(!(o<i&&v[p+1].a<=q))break;++p}i=v[p].a
n=p+1
m=A.hum(D.k.F((q-i)/(v[n].a-i),0,1))
i=new A.fBQ(v)
l=p-1
k=A.fnR(s.$1(i.$1(l)),s.$1(i.$1(p)),s.$1(i.$1(n)),s.$1(i.$1(o)),m)
j=A.fnR(r.$1(i.$1(l)),r.$1(i.$1(p)),r.$1(i.$1(n)),r.$1(i.$1(o)),m)
return new C.y(new A.r(k.a,Math.max(k.b,18),k.c),j)},
lK:function lK(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
rh:function rh(d,e,f,g,h,i,j,k,l,m){var _=this
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
bIA:function bIA(d){this.a=d},
HK:function HK(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
aTB:function aTB(){var _=this
_.a=!0
_.b="NEW GLOBAL MOVEMENT FOR YOUTH"
_.c="Videos, slides, blogs and books."
_.d="ngmy.org"
_.e=0
_.x=_.w=_.r=_.f=null},
bIy:function bIy(d){this.a="highway"
this.b=d},
bIz:function bIz(d){this.a=d},
fTV:function fTV(){},
fC2:function fC2(d){this.a=d},
fC3:function fC3(d,e){this.a=d
this.b=e},
fC4:function fC4(d,e){this.a=d
this.b=e},
fBW:function fBW(){},
fBX:function fBX(){},
fBY:function fBY(){},
fBZ:function fBZ(d){this.a=d},
fC_:function fC_(d){this.a=d},
fC0:function fC0(d,e){this.a=d
this.b=e},
fC1:function fC1(d,e){this.a=d
this.b=e},
hj:function hj(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
fnS:function fnS(d){this.a=d},
frh:function frh(d){this.a=d},
fAG:function fAG(d){this.a=d},
fAF:function fAF(){},
fAD:function fAD(d){this.a=d},
fAE:function fAE(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fBO:function fBO(d,e,f){this.a=d
this.b=e
this.c=f},
fBP:function fBP(d,e,f){this.a=d
this.b=e
this.c=f},
fBQ:function fBQ(d){this.a=d},
ap7:function ap7(d){this.a=d},
ap8:function ap8(d,e){var _=this
_.d=d
_.r=_.f=_.e=$
_.w=e
_.x=-1
_.y=!1
_.z=""
_.c=_.a=null},
c4M:function c4M(d){this.a=d},
c4K:function c4K(d){this.a=d},
c4J:function c4J(){},
c4x:function c4x(d){this.a=d},
c4D:function c4D(d,e){this.a=d
this.b=e},
c4L:function c4L(d){this.a=d},
c4A:function c4A(d,e){this.a=d
this.b=e},
c4z:function c4z(d){this.a=d},
c47:function c47(){},
c4y:function c4y(d){this.a=d},
c4C:function c4C(d){this.a=d},
c4B:function c4B(d,e,f){this.a=d
this.b=e
this.c=f},
c4w:function c4w(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
c4v:function c4v(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
c4s:function c4s(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
c4t:function c4t(d,e){this.a=d
this.b=e},
c4n:function c4n(d,e,f){this.a=d
this.b=e
this.c=f},
c4u:function c4u(d){this.a=d},
c4q:function c4q(d,e){this.a=d
this.b=e},
c4p:function c4p(){},
c4r:function c4r(d,e){this.a=d
this.b=e},
c4o:function c4o(){},
c4c:function c4c(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
c4b:function c4b(){},
c4d:function c4d(d){this.a=d},
c4e:function c4e(d){this.a=d},
c4f:function c4f(d){this.a=d},
c4g:function c4g(d,e){this.a=d
this.b=e},
c4h:function c4h(d,e,f){this.a=d
this.b=e
this.c=f},
c4i:function c4i(d,e){this.a=d
this.b=e},
c4j:function c4j(d,e,f){this.a=d
this.b=e
this.c=f},
c4k:function c4k(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
c4a:function c4a(){},
c4l:function c4l(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
c48:function c48(){},
c49:function c49(){},
c4m:function c4m(d){this.a=d},
c4G:function c4G(d){this.a=d},
c4H:function c4H(d){this.a=d},
c4F:function c4F(d){this.a=d},
c4I:function c4I(d){this.a=d},
c4E:function c4E(d){this.a=d},
hc4(d,e,f,g){var w,v,u,t=null,s=e.r
s=s==null?t:D.k.V(s)
w=D.k.V(f)
v=e.b
v=v==null?t:v.l()
u=d+"|"+C.w(s)+"|"+w+"|"+C.w(v)
v=$.hxG.h(0,u)
if(v==null){s=C.fv(t,D.ct,t,g,t,C.cQ(t,t,t,t,t,t,t,t,t,e,d),D.a5,D.bW,t,D.dD,D.bX)
s.o3(f)
$.hxG.n(0,u,s)}else s=v
return s},
my(a6,a7,a8,a9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=D.o.E(a9,17)
if(a5===0){A.fU1(a6,a7,a8,0)
w=a7.a
v=(D.k.E(a8*0.35,1.6)-0.3)*w
u=a6.c
J.bq(u.save())
t=0+a7.b
u.clipRect(C.i_(new C.a2(0,0,0+w,t)),$.mz()[1],!0)
$.S()
s=C.K()
s.r=D.c.j(0.12).gp(0)
a6.au(new C.a2(v,0,v+w*0.12,t),s)
u.restore()
return}if(a5>=8){K.LV(a6,a7,a5-8,a8)
return}r=B.d_k[a5-1]
w=a7.a
u=a7.b
q=new C.a2(0,0,0+w,0+u)
t=$.S()
s=C.K()
s.sar(new C.a9(D.aA,D.aF,D.x,C.a([r.c,r.d],x.O),a4,a4).aG(0,q))
a6.au(q,s)
s=a6.c
J.bq(s.save())
s.clipRect(C.i_(q),$.mz()[1],!0)
p=C.K()
p.r=D.c.j(0.07).gp(0)
for(o=u*0.4,n=w*0.07,m=a8*w*0.05,l=w*2,k=w*0.4,j=x.g,t=t.r,i=-4;i<14;++i){v=D.k.E(i*w/7+m,l)-k
h=C.a([],j)
g=new C.aE(t,D.ah,a4,a4,h)
h.push(new C.aY(v,0))
g.a8()
f=new C.aq(v+n,0)
h.push(f)
e=g.f
if(e!=null)f.ai(e)
g.a8()
f=v-o
e=new C.aq(f+n,u)
h.push(e)
d=g.f
if(d!=null)e.ai(d)
g.a8()
f=new C.aq(f,u)
h.push(f)
e=g.f
if(e!=null)f.ai(e)
g.a8()
f=new C.bt()
h.push(f)
h=g.f
if(h!=null)f.ai(h)
g.a8()
a6.ae(g,p)}t=Math.sin(a8*2)
n=C.K()
m=r.e
n.r=m.j(0.18).gp(0)
a6.N(new C.q(w*0.88,u*0.3),u*(0.22+0.03*t),n)
s.restore()
s=w*0.06
A.hc4(r.a,C.l(a4,a4,D.c,a4,a4,a4,a4,a4,a4,a4,a4,u*0.22,a4,a4,D.u,a4,a4,!0,a4,u*0.012,a4,a4,a4,a4,a4,a4),w*0.9,1).a4(a6,new C.q(s,u*0.2))
A.hc4(r.b,C.l(a4,a4,m,a4,a4,a4,a4,a4,a4,a4,a4,u*0.1,a4,a4,D.V,a4,a4,!0,a4,a4,a4,a4,a4,a4,a4,a4),w*0.8,2).a4(a6,new C.q(s,u*0.5))
a0=$.WH
m=u*0.76
if(a0!=null){t=a0.c
n=a0.d
a1=Math.min((s+o-s)/t,(m+u*0.16-m)/n)
o=C.K()
o.z=D.cj
a6.pZ(a0,new C.a2(0,0,t,n),new C.a2(s,m,s+t*a1,m+n*a1),o)}else{a2=C.fv(a4,D.ct,a4,a4,a4,C.cQ(a4,a4,a4,a4,a4,a4,a4,a4,a4,C.l(a4,a4,D.c,a4,a4,a4,a4,a4,a4,a4,a4,u*0.12,a4,a4,D.u,a4,a4,!0,a4,a4,a4,a4,a4,a4,a4,a4),"NGMY"),D.a5,D.bW,a4,D.dD,D.bX)
a2.ef()
a2.a4(a6,new C.q(s,m))}a3=A.hc4("ngmy.org",C.l(a4,a4,D.ad,a4,a4,a4,a4,a4,a4,a4,a4,u*0.08,a4,a4,D.H,a4,a4,!0,a4,a4,a4,a4,a4,a4,a4,a4),400,1)
a3.a4(a6,new C.q(w-a3.b.c-w*0.05,u*0.82))},
Ge:function Ge(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
Lv(d){return D.d.dO(B.RR,new A.fEA(d),new A.fEB())},
z_(d){var w=B.hJ.h(0,d.b),v=d.e*3.141592653589793/2,u=w.d/2+30
return new C.y(d.c+Math.sin(v)*u,d.d+Math.cos(v)*u)},
hKu(d){var w=C.a([],x.C),v=C.a([],x.fW),u=new C.e4()
u.d_(7)
w=new A.bMX(d,u,w,v)
w.bAZ(d,7)
return w},
zq:function zq(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fEA:function fEA(d){this.a=d},
fEB:function fEB(){},
xz:function xz(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=null
_.w=_.r=!1
_.x=0},
aUG:function aUG(d,e,f,g,h,i,j){var _=this
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
a4H:function a4H(d,e,f,g,h,i,j,k){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.w=j
_.x=k},
akK:function akK(d,e,f){this.a=d
this.b=e
this.c=f},
bMX:function bMX(d,e,f,g){var _=this
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
bMZ:function bMZ(d){this.a=d},
bN0:function bN0(d,e){this.a=d
this.b=e},
bN1:function bN1(){},
bMY:function bMY(d,e){this.a=d
this.b=e},
bN2:function bN2(){},
bN_:function bN_(d,e,f){this.a=d
this.b=e
this.c=f},
hhY(d){var w=d.x
return C.bw(w.length,D.d.cG(w,0,new A.bL5()),D.h,D.h,D.h,D.h,D.h,D.h,D.h,D.h,D.h,D.h,D.h,D.h,D.h,D.h,D.h,D.h,D.h,D.h)},
inU(d){var w,v,u
for(w=0,v=0;u=v+1,u<d.length;v=u)w+=Math.sqrt(Math.pow(d[u].a-d[v].a,2)+Math.pow(d[u].b-d[v].b,2))
return w},
io_(d,e){var w,v,u,t,s,r,q,p,o
for(w=e,v=0;u=v+1,u<d.length;v=u){t=d[u]
s=d[v]
r=t.a-s.a
q=t.b-s.b
p=Math.sqrt(r*r+q*q)
if(p<0.000001)continue
if(w<=p||v+2===d.length){o=D.k.F(w/p,0,1)
t=d[v]
return new C.b5(t.a+r*o,t.b+q*o,Math.atan2(r,q))}w-=p}return new C.b5(D.d.gam(d).a,D.d.gam(d).b,0)},
bL4:function bL4(d){var _=this
_.a=d
_.e=_.d=_.c=_.b=$
_.f=-1},
bL5:function bL5(){},
dmn:function dmn(d,e){this.a=d
this.b=e},
h5g(d,e,f){return new A.aZo(f,d,e,null)},
hcD(d){return D.k.cL((1-D.k.F(d,0,1))*12)},
aU3:function aU3(d){var _=this
_.b=_.a=1
_.d=_.c=0
_.e=1
_.f=!1
_.r=0
_.w=!1
_.P$=0
_.T$=d
_.bw$=_.bL$=0},
aZo:function aZo(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
V3:function V3(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
c2n:function c2n(d){this.a=d},
rY:function rY(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
fsm(d){var w=d.d-d.b-200
return new C.br5([157.07963267948966,2*w+380+628.3185307179587,w,190])},
Lz(d,e){var w,v=A.fsm(d).a,u=v[2],t=v[3],s=v[0]
v=v[1]
w=D.k.E(e,v)
if(w<0)w+=v
v=new A.fI9()
if(w<u)return new C.cu([d.b+100+w,445,1,0])
w-=u
if(w<s)return v.$4(d.d-100,545,-1.5707963267948966,w)
w-=s
if(w<t)return new C.cu([d.d,545+w,0,1])
w-=t
if(w<s)return v.$4(d.d-100,735,0,w)
w-=s
if(w<u)return new C.cu([d.d-100-w,835,-1,0])
w-=u
if(w<s)return v.$4(d.b+100,735,1.5707963267948966,w)
w-=s
if(w<t)return new C.cu([d.b,735-w,0,-1])
return v.$4(d.b+100,545,3.141592653589793,w-t)},
h3V(d,e,f){return new A.aU2(d,e,f)},
hcV(d,e){var w=D.k.E(e+d.c,28)
if(w<12)return 0
if(w<15)return 1
return 2},
ht1(d,e,f,g){var w=x.n
w=new A.bxV(d,e,f,g,C.a([],w),C.a([],w))
w.bC7(d,e,f,g)
return w},
hJx(){var w,v=C.a([],x.n)
for(w=0;w<4;++w)v.push(B.kx[w].r)
return new A.bL6(v,C.bZ(4,0,!1,x.i),B.aBp)},
iaQ(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=C.a([],x.z)
for(w=d.length,v=e.a,u=e.b,t=e.c,s=x.o,r=0;r<d.length;d.length===w||(0,C.J)(d),++r){q=d[r]
p=C.a([],s)
for(o=q.a,n=o.length,m=0;m<o.length;o.length===n||(0,C.J)(o),++m){l=o[m]
p.push(new A.r(l.a*v,l.b*u,l.c*t))}k.push(new A.ks(p,q.b,q.c,q.d,q.e,q.f,q.r,q.w,q.x,q.y,q.z))}return k},
i2R(){var w,v,u,t,s=new A.eM(C.a([],x.z))
s.r=!0
s.aD(B.h3J,B.h6g,D.d9,0.3)
s.aD(B.hkL,B.h66,D.bO,0.2)
s.aD(B.abJ,B.h63,B.i6,0.6)
s.aD(B.heR,B.h6Q,B.i6,0.6)
s.aF(B.hdJ,B.h6i,D.bs)
for(w=0;w<2;++w)s.aF(new A.r(75.5,9,B.a5M[w]),B.abO,B.nl)
for(w=0;w<2;++w){v=B.dpU[w]
for(u=0;u<2;++u){t=B.dpL[u]
s.dq(new A.r(v,7,t-1.5),new A.r(v,7,t+1.5),7.5,D.nr,12)}}return s},
i9r(d,e){var w,v,u,t,s,r=new A.eM(C.a([],x.z))
r.r=!0
r.aD(B.aXr,B.h5h,D.bO,0.4)
r.aD(B.hl4,B.h9q,D.bO,0.4)
r.aD(B.hl5,B.h9w,B.i6,0.6)
r.aF(B.xo,B.h5m,D.dH)
w=D.k.E(d*5+e,2)<1
r.aD(B.hnD,B.aXH,w?D.ax:D.eo,0.6)
r.aD(B.hiN,B.aXH,w?D.d9:D.d5,0.6)
for(v=0;v<2;++v){u=B.dpQ[v]
for(t=0;t<2;++t){s=B.dpJ[t]
r.dq(new A.r(u,6.5,s-1.5),new A.r(u,6.5,s+1.5),6.5,D.nr,12)}}return r},
iq6(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=x.z,a5=C.a([],a4)
for(w=0;w<4;++w){v=B.kx[w]
u=$.aS6()
t=D.d.cp(B.kx,v)
u.FT(0,a6)
t=A.Lz(B.kx[t],u.a[t]).a
s=t[0]
r=t[1]
q=t[2]
p=t[3]
u=v.a==="bus"
o=u?A.i2R():A.i9r(a6,w)
u=u?B.aYB:B.aXQ
D.d.v(a5,A.nk(A.iaQ(o.a,u),0,Math.atan2(q,p)-1.5707963267948966,new A.r(s,0,r)))}for(u=$.bGk(),t=u.length,n=0;n<u.length;u.length===t||(0,C.J)(u),++n)D.d.v(a5,A.i6M(u[n],a6))
for(u=a6*0.9,t=x.o,m=a6*22,l=a6*0.09,w=0;w<2;++w){k=B.a5m[w].a
j=k[0]
i=k[1]
h=k[2]
g=l+w*3.141592653589793
k=Math.cos(g)
f=Math.sin(g)
e=Math.atan2(-Math.sin(g),Math.cos(g))
d=C.a([],a4)
a0=new A.eM(d)
a0.r=!0
a0.aD(B.dZ,B.h8S,D.bC,0.4)
a0.aD(B.h6s,B.h5q,B.i6,0.7)
a0.dq(B.h6z,B.hag,2.6,D.bC,8)
a0.aF(B.had,B.hil,D.bO)
a0.dq(B.xo,B.abH,1.2,B.f_,8)
for(a1=0;a1<2;++a1)a0.aEH(new A.r(0,13.4,0),B.hcE,B.f_,m+a1*3.141592653589793/2)
for(n=0;n<2;++n){a2=E.aC_[n]
a0.aF(new A.r(0,-11,a2),B.hci,B.f_)
a0.aF(new A.r(-10,-6,a2),B.aYz,B.f_)
a0.aF(new A.r(10,-6,a2),B.aYz,B.f_)}for(n=0;n<2;++n){a3=B.aBV[n]
a0.iD(C.a([new A.r(a3*0.45,-10,0),new A.r(a3,-22,0)],t),0.3,B.f_,!1,0,4)}D.d.v(a5,A.nk(d,0,e-1.5707963267948966,new A.r(j+520*k,h+Math.sin(u+w)*5,i+520*f)))}return a5},
iq7(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=C.a([],x.a),f=new A.h1W()
for(w=0;w<4;++w){v={}
u=B.kx[w]
v.a=v.b=null
t=$.aS6()
s=D.d.cp(B.kx,u)
t.FT(0,d)
s=A.Lz(B.kx[s],t.a[s]).a
v.b=s[0]
v.a=s[1]
s=new A.h1U(v,Math.atan2(s[2],s[3])-1.5707963267948966)
v=u.a==="bus"
r=v?B.aYB:B.aXQ
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
g.push(f.$7(s.$3(q,o,p),s.$3(v,o,p),s.$3(v,n,p),s.$3(q,n,p),t+5,1200,220))}for(v=d*0.09,t=d*0.9,w=0;w<2;++w){s=B.a5m[w].a
l=s[0]
k=s[1]
j=s[2]
i=s[3]
h=v+w*3.141592653589793
s=Math.cos(h)
p=Math.sin(h)
p=new A.h1V(Math.atan2(-Math.sin(h),Math.cos(h))-1.5707963267948966,l+520*s,j+Math.sin(t+w)*5,k+520*p)
g.push(f.$7(p.$2(-42,-22),p.$2(42,-22),p.$2(42,-44),p.$2(-42,-44),i,900,230))
g.push(f.$7(p.$2(42,-22.3),p.$2(-42,-22.3),p.$2(-42,-44.3),p.$2(42,-44.3),i,900,230))}return g},
i6M(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k=B.kx[d.a*2],j=d.b,i=A.Lz(k,j).a,h=i[0],g=i[1],f=i[2],e=i[3]
j=A.Lz(k,j+22).a
j=[j[0],j[1],f,e,h+-e*56,g+f*56]
w=A.hcV(d,a0)
v=D.k.E(a0+d.c,28)
u=v>=17&&v<26
i=C.a([],x.z)
t=new A.eM(i)
t.r=!0
t.dq(B.dZ,B.aXB,1.7,D.hp,6)
t.aD(B.h4P,B.hb2,D.av,0.3)
for(s=w===2,r=w===1,q=w===0,p=0;p<3;++p){o=!0
if(!(p===0&&s))if(!(p===1&&r)){n=p===2&&q
o=n}n=o?B.dmy[p]:B.cN5[p]
m=o?0.9:0.1
t.eK(new A.r(-3.9,74-p*8,0),3.3,n,4,7,m)}t.aD(B.h4j,B.h5r,D.av,0.3)
if(u){t.ee(B.hcm,1.6,D.bg,4,6)
t.aF(B.hih,B.hhV,D.bg)
t.aF(B.hcQ,B.aZ1,D.bg)
t.aF(B.hgN,B.aZ1,D.bg)}else{t.aF(B.hec,B.hjm,D.ax)
for(l=-2;l<=1;++l)t.aF(new A.r(l*1.25+0.6,40,-4.9),B.hjN,D.ax)
t.aF(B.hmP,B.hem,D.ax)}return A.nk(i,0,Math.atan2(j[2],j[3])-1.5707963267948966,new A.r(j[4],0,j[5]))},
ief(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=C.a([],x.z),i=new A.eM(j)
i.f=1
i.e=90
w=new A.fE9(i)
for(v=$.bGk(),u=v.length,t=0;t<v.length;v.length===u||(0,C.J)(v),++t){s=v[t]
r=B.kx[s.a*2]
q=s.b
p=A.Lz(r,q+22).a
o=p[0]
n=p[1]
m=p[2]
l=p[3]
for(k=-4;k<=4;++k)w.$8(o,n,m,l,0,-25+k*11,18,5)
q=A.Lz(r,q-6).a
w.$8(q[0],q[1],m,l,0,0,2.2,46)}return j},
SZ:function SZ(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.d=f
_.r=g
_.w=h},
fI9:function fI9(){},
aU2:function aU2(d,e,f){this.a=d
this.b=e
this.c=f},
bxV:function bxV(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=-1},
fkZ:function fkZ(d,e){this.a=d
this.b=e},
bL6:function bL6(d,e,f){var _=this
_.a=d
_.b=e
_.c=0
_.d=f},
bL7:function bL7(){},
h1W:function h1W(){},
h1X:function h1X(d){this.a=d},
h1U:function h1U(d,e){this.a=d
this.b=e},
h1V:function h1V(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fE9:function fE9(d){this.a=d},
fEa:function fEa(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
Ax:function Ax(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.x=0},
cCT:function cCT(d,e,f){var _=this
_.a=d
_.b=e
_.d=_.c=$
_.e=f
_.f=null
_.w=_.r=0
_.x=1
_.y=0},
cCV:function cCV(d){this.a=d},
cCW:function cCW(){},
cCU:function cCU(){},
hDc(d){return d.b==="hq"?12:D.o.F(D.k.bh((210+D.o.E(B.zF[d.f].l(),5)*24)/22),8,14)},
h3U(d,e,f){var w=new A.bKQ(d,e,f,B.aBx,B.a3J,C.a([],x.a),C.aS(x.S))
w.at=new A.baf(null,-138,138,12,316,0,296,3.141592653589793,w.cek())
w.ax=w.cJs()
return w},
i8B(d,e,f){var w,v,u,t,s=null,r=e.a,q=e.b,p=C.br(new C.a2(0,0,0+r,0+q),D.ii)
$.S()
w=C.K()
w.r=B.bfj.gp(0)
d.ap(p,w)
w=C.br(new C.a2(6,6,6+(r-12),6+(q-12)),D.jK)
p=C.K()
p.b=D.aa
p.c=5
p.r=F.f0.gp(0)
d.ap(w,p)
v=C.dj()
for(p=r-50,u=120;;){w=new C.iF(new C.en(f,s,s,D.cH,s,s,s,s,s,s,new C.G(!0,E.iD,s,s,s,s,u,D.u,s,4,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s)),D.a5,D.bW,new C.jd(1),s,s,s,s,D.bX,s,D.ct)
w.ef()
v.b=w
if(w.b.c<=p||u<20)break
u-=6}p=v.bl()
w=v.bl().b.c
t=v.bl().b.a.c
p.a4(d,new C.q((r-w)/2,(q-t.gba(t))/2))},
pK:function pK(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bKQ:function bKQ(d,e,f,g,h,i,j){var _=this
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
bKR:function bKR(){},
bL_:function bL_(d){this.a=d},
bL0:function bL0(d){this.a=d},
bL1:function bL1(d){this.a=d},
bL2:function bL2(d){this.a=d},
bKS:function bKS(d){this.a=d},
bKT:function bKT(){},
bKU:function bKU(){},
bKV:function bKV(d){this.a=d},
bKW:function bKW(){},
bKX:function bKX(d){this.a=d},
bKY:function bKY(d){this.a=d},
bKZ:function bKZ(d){this.a=d},
bL3:function bL3(d){this.a=d},
h40(d,e){var w=C.a([],x.gM),v=C.a([new A.Mn(),new A.Mn(),new A.Mn()],x.gQ),u=C.a([],x.s),t=new C.e4()
t.d_(e)
w=new A.aUq(d,t,w,v,u)
w.bAX(d,e)
return w},
hic(d,e){var w,v,u,t,s,r,q,p,o=J.a7(e),n=x.fF,m=n.a(o.h(e,"wired"))
if(m==null)m=D.v4
w=n.a(o.h(e,"plumbed"))
if(w==null)w=D.v4
for(o=d.gr7(),n=o.length,v=J.a7(w),u=J.a7(m),t=0;t<o.length;o.length===n||(0,C.J)(o),++t){s=o[t]
r=""+s.a
q=u.h(m,r)
if(C.r9(q)){s.ay=!q
s.CW=null}p=v.h(w,r)
if(C.r9(p)){r=s.c
r=r==="bathroom"||r==="kitchen"}else r=!1
if(r){s.ch=!p
s.fr=null}}},
h41(d){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=J.a7(d),j=C.aK(k.h(d,"seed"))
j=j==null?l:D.k.M(j)
if(j==null)j=1
w=C.aK(k.h(d,"clock"))
w=w==null?l:D.k.M(w)
v=A.h40(j,(w==null?0:w)+7)
j=C.aK(k.h(d,"points"))
j=j==null?l:D.k.M(j)
v.r=j==null?10:j
j=C.aK(k.h(d,"food"))
j=j==null?l:D.k.M(j)
v.w=j==null?8:j
j=C.aK(k.h(d,"medicine"))
j=j==null?l:D.k.M(j)
v.x=j==null?4:j
j=C.aK(k.h(d,"served"))
j=j==null?l:D.k.M(j)
v.y=j==null?0:j
j=C.aK(k.h(d,"saved"))
j=j==null?l:D.k.M(j)
v.z=j==null?0:j
j=C.aK(k.h(d,"clock"))
if(j==null)j=l
v.as=j==null?0:j
j=C.aK(k.h(d,"nextCall"))
j=j==null?l:D.k.M(j)
v.Q=j==null?1:j
j=x.bM
u=j.a(k.h(d,"res"))
if(u==null)u=D.cx
w=J.a7(u)
t=x.G
s=0
for(;;){r=v.c
r===$&&C.c()
if(!(s<r.length&&s<w.gI(u)))break
q=t.a(w.h(u,s))
r=v.c[s]
p=J.a7(q)
r.b=C.e0(p.h(q,"hunger"))
r.c=C.e0(p.h(q,"health"))
r.d=C.e0(p.h(q,"comfort"))
r.e=J.z(p.h(q,"sick"),!0)
r.f=!J.z(p.h(q,"alive"),!1)
p=C.aK(p.h(q,"bed"))
p=p==null?l:D.k.M(p)
r.r=p==null?-1:p;++s}o=j.a(k.h(d,"beds"))
if(o==null)o=D.cx
w=J.a7(o)
r=v.e
s=0
for(;;){if(!(s<r.length&&s<w.gI(o)))break
q=t.a(w.h(o,s))
p=r[s]
n=J.a7(q)
p.a=D.k.M(C.e0(n.h(q,"res")))
p.b=C.e0(n.h(q,"care"))
p.c=C.e0(n.h(q,"heal"));++s}k=j.a(k.h(d,"calls"))
k=J.aX(k==null?D.cx:k)
j=v.d
while(k.C()){m=t.a(k.gR(k))
w=J.a7(m)
r=new A.It(D.k.M(C.e0(w.h(m,"id"))),D.k.M(C.e0(w.h(m,"res"))),C.cO(w.h(m,"kind")),C.cO(w.h(m,"msg")),D.k.M(C.e0(w.h(m,"reward"))))
r.f=C.e0(w.h(m,"age"))
j.push(r)}return v},
Te(d){return A.hJP(d)},
hJP(d){var w=0,v=C.j(x.H),u,t=2,s=[],r,q,p,o,n
var $async$Te=C.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:if(d<=0){w=1
break}q=$.HW
if(q!=null){q.r+=d
w=1
break}t=4
w=7
return C.b(C.az(),$async$Te)
case 7:r=f
p=C.eo(J.t(r.a,"ngmy_construction_bonus_stars"))
if(p==null)p=0
w=8
return C.b(r.aB("Int","ngmy_construction_bonus_stars",p+d),$async$Te)
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
return C.i($async$Te,v)},
akk(d){return A.hJQ(d)},
hJQ(d){var w=0,v=C.j(x.H),u,t=2,s=[],r,q,p,o,n
var $async$akk=C.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:if(d<=0){w=1
break}q=$.HW
if(q!=null){q.r=Math.max(0,q.r-d)
w=1
break}t=4
w=7
return C.b(C.az(),$async$akk)
case 7:r=f
p=C.eo(J.t(r.a,"ngmy_construction_bonus_stars"))
if(p==null)p=0
w=8
return C.b(r.aB("Int","ngmy_construction_bonus_stars",p-d),$async$akk)
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
return C.i($async$akk,v)},
aUt(){var w=0,v=C.j(x.S),u,t=2,s=[],r,q,p,o,n
var $async$aUt=C.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return C.b(C.az(),$async$aUt)
case 7:r=e
p=C.eo(J.t(r.a,"ngmy_construction_bonus_stars"))
q=p==null?0:p
w=!J.z(q,0)?8:9
break
case 8:w=10
return C.b(J.hq(r,"ngmy_construction_bonus_stars"),$async$aUt)
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
return C.i($async$aUt,v)},
hid(d,e,f){return Math.max(6,12+4*f-2*d-5*e)},
aUs(){var w=0,v=C.j(x.dy),u,t=2,s=[],r,q,p,o,n
var $async$aUs=C.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return C.b(C.az(),$async$aUs)
case 7:r=e
q=C.aT(J.t(r.a,"ngmy_community_v1"))
if(q==null){u=null
w=1
break}p=x.e.a(D.Y.aS(0,q,null))
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
return C.i($async$aUs,v)},
aUr(){var w=0,v=C.j(x.H),u=1,t=[],s,r,q
var $async$aUr=C.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
w=6
return C.b(C.az(),$async$aUr)
case 6:s=e
w=7
return C.b(J.hq(s,"ngmy_community_v1"),$async$aUr)
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
return C.i($async$aUr,v)},
FJ:function FJ(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
Pk:function Pk(d){var _=this
_.a=d
_.b=25
_.d=_.c=100
_.e=!1
_.f=!0
_.r=-1},
It:function It(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=0},
Mn:function Mn(){this.a=-1
this.b=100
this.c=0},
aUq:function aUq(d,e,f,g,h){var _=this
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
bLF:function bLF(){},
bLC:function bLC(d){this.a=d},
bLD:function bLD(d,e){this.a=d
this.b=e},
bLE:function bLE(){},
bLJ:function bLJ(d){this.a=d},
bLH:function bLH(d){this.a=d},
bLI:function bLI(){},
bLG:function bLG(d){this.a=d},
bLK:function bLK(){},
aq7:function aq7(d,e){this.c=d
this.a=e},
ble:function ble(){var _=this
_.d=null
_.e=$
_.f=null
_.r=$
_.x=_.w=null
_.y=0
_.c=_.a=null},
dUZ:function dUZ(d,e){this.a=d
this.b=e},
dV_:function dV_(d){this.a=d},
dVb:function dVb(){},
dV5:function dV5(d,e){this.a=d
this.b=e},
dV6:function dV6(d){this.a=d},
dV4:function dV4(d){this.a=d},
dUV:function dUV(){},
dUW:function dUW(){},
dVe:function dVe(){},
dVf:function dVf(){},
dVd:function dVd(d,e){this.a=d
this.b=e},
dVc:function dVc(d,e){this.a=d
this.b=e},
dUU:function dUU(d,e){this.a=d
this.b=e},
dV0:function dV0(d,e,f){this.a=d
this.b=e
this.c=f},
dV1:function dV1(d,e,f){this.a=d
this.b=e
this.c=f},
dV2:function dV2(d,e,f){this.a=d
this.b=e
this.c=f},
dV3:function dV3(d,e){this.a=d
this.b=e},
dUY:function dUY(d,e,f){this.a=d
this.b=e
this.c=f},
dUX:function dUX(d,e,f){this.a=d
this.b=e
this.c=f},
dV8:function dV8(d,e){this.a=d
this.b=e},
dV9:function dV9(d,e){this.a=d
this.b=e},
dVa:function dVa(d){this.a=d},
dV7:function dV7(d){this.a=d},
dVg:function dVg(d){this.a=d},
dVh:function dVh(){},
adb:function adb(d,e,f){this.c=d
this.d=e
this.a=f},
bg0:function bg0(d,e){this.b=d
this.a=e},
ou(d,e,f,g,h,i,j,k,l,m,n){return new A.MQ(g,m,d,k,e,f,n,h,l,i,j)},
oi(d){return D.d.fl($.hHB(),new A.fEP(d))},
aiE(d,e){var w,v,u=d.e,t=new C.N(u,new A.h2w(),C.T(u).k("N<1,m>")).fL(0)
u=e.b
w=C.a4(u).k("b8<2>")
v=C.d4(new C.b8(u,w),w.k("M.E"))
if(d.a==="cord4"&&e.r)return!1
return t.cM(0,v.gkD(v))},
hDd(d,e,f,g,h){var w,v
if(e.a&&e.c===0){if(e.w)return"SHOCK! The breaker was still ON and you touched a live wire. Always turn the power OFF and test the wires first."
return"STOP! The breaker is still ON, so these wires are live (120 volts). Turn the breaker OFF first. This can shock you badly."}if(e.c!==0)return"The device is already in the box. Pull it out again to change the wires."
w=!1
if(d.a==="cord4")if(e.r)if(!e.w)if(!e.z)w=f==="neutral"||f==="ground"
if(w)return"Take the ground strap off first: tap the metal strap on the terminal block. On a 4-wire cord the neutral must not touch the frame, because the green wire grounds the frame."
if(!e.w&&!e.z&&!h&&!g.c.q(0,f))return d.r.$2(f,g)
w=e.b
v=g.a
if(w.h(0,v)!=null)return"That place already has a wire. Tap the wire to take it off first."
if(new C.b8(w,C.a4(w).k("b8<2>")).q(0,f))return"That wire is already fastened. Tap it to take it off if you want to move it."
w.n(0,v,f)
return null},
hcs(d,e){var w,v,u,t,s,r,q=new A.fDW(),p=new A.fDX(),o=C.a([],x.bm)
for(w=e.b,w=new C.cs(w,C.a4(w).k("cs<1,2>")).gag(0),v=d.f,u=d.e;w.C();){t=w.d
t.toString
s=D.d.fl(v,new A.fDU(t))
r=D.d.fl(u,new A.fDV(t))
o.push(new A.a4C(new A.cEH(r.a,q.$1(r.e)),new A.cB7(p.$1(s.f))))}return o},
fUO(d){var w=d.e,v=C.T(w).k("X<1>")
return new A.bN6(new C.X(w,new A.fUP(),v).gI(0),new C.X(w,new A.fUQ(),v).gI(0),d.y)},
x7(d,e){var w,v,u,t,s,r,q,p,o,n,m
if(d.a==="cord4"&&e.r)return B.hoZ
w=A.hyv(A.fUO(d),A.hcs(d,e),e.y)
v=w.c
u=new A.fF1(w)
t=w.b
s=t.length===0?null:D.d.f6(t,new A.fEZ())
t=w.a===B.r_
if(t)r="ok"
else if(u.$1("SHORT")||u.$1("HOT_TO_GROUND"))r="short"
else{if(u.$1("REVERSED"))q="reversed"
else if(u.$1("NEUTRAL_GROUND"))q="bonded"
else if(u.$1("GROUND_AS_CURRENT"))q="groundWire"
else if(u.$1("OPEN_NEUTRAL"))q="openNeutral"
else if(u.$1("UNVERIFIED"))q="unverified"
else q=u.$1("MISSING_GROUND")?"noGround":"dead"
r=q}if(d.x&&!e.z)for(q=e.b,q=new C.cs(q,C.a4(q).k("cs<1,2>")).gag(0),p=d.f;q.C();){o=q.d
o.toString
n=D.d.fl(p,new A.fF_(o))
if(!n.c.q(0,o.b)){t=n.d
return new A.ayg("dead","The "+D.d.fl(d.e,new A.fF0(o)).b+" is on the wrong terminal ("+n.b+"). "+t,!1,!1,!1,"none",t)}}m=t?"Wired correctly. Hot, neutral and ground are all in the right place, and every safety check passes.":s.c+" "+v.c
t=s==null?null:s.e
if(t==null)t=""
return new A.ayg(r,m,v.d,v.e,v.f,v.b,t)},
hcW(d){var w,v,u,t
for(w=$.h3b(),v=w.length,u=0;u<v;++u){t=w[u]
if(t.a===d)return t.w}return d},
aP8(d,e){var w
if(d==="light"||d==="fan")w=e.c===0?6.4:0.6
else w=e.c===0?4.7:-0.25
return w},
aQs(d,e,f){var w,v
if(d==="light"||d==="fan"){w=A.aP8(d,f)
v=f.c===0?w-3.2:w
switch(e){case 51:return new A.r(-1.5,-0.3,v)
case 52:return new A.r(0,-0.3,v)
default:return new A.r(1.5,-0.3,v)}}w=A.aP8(d,f)
if(D.a.a0(d,"terminal")||d==="cord3"||d==="cord4")switch(e){case 23:return new A.r(-1.15,0.14999999999999997,w-0.3)
case 21:return new A.r(0,0.14999999999999997,w-0.3)
case 22:return new A.r(1.15,0.14999999999999997,w-0.3)
default:return new A.r(0,-1.65,w-0.1)}switch(e){case 21:return new A.r(0.98,-0.2+(d==="gfci"?0.95:0.85),w-0.45)
case 22:return new A.r(0.98,-0.2+(d==="gfci"?-0.75:-0.55),w-0.45)
case 23:return new A.r(-0.98,-0.2+(d==="gfci"?0.95:0.85),w-0.45)
case 24:return new A.r(-0.98,-0.2+(d==="gfci"?-0.75:-0.55),w-0.45)
default:return new A.r(0,-1.98,w+0.52)}},
bDm(b6,b7,b8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0="nema",b1="terminal",b2=C.a([],x.z),b3=new A.eM(b2),b4=A.hcW(b6.a),b5=b4==="light"||b4==="fan"
if(b8){b3.b=1
b3.hl(B.hh2,B.aYW,B.vY,3)
b3.hl(B.hiD,B.aYW,B.vY,3)
b3.hl(B.hlL,B.aZo,B.vY,2)
b3.hl(B.hjr,B.aZo,B.vY,2)
b3.b=2
b3.kZ(B.hgw,B.aYP,B.iC,0.05,3)
b3.kZ(B.hfU,B.aYP,B.iC,0.05,3)
b3.kZ(B.hfM,B.hmj,B.iC,0.05,2)}w=b6.w.length===0
v=A.htA(b3,w?b4:"outlet",!0)
u=new A.fBU(b3,b7,b4,b5)
t=D.d.gH(v)
s=!w
if(s){r=b6.e
q=r.length
for(p=t.a,o=t.b+0,n=t.c,m=q-1,l=q===1,k=0;k<q;++k){j=r[k]
i=l?0:k/m-0.5
h=D.o.E(k,2)
if(j.e==="ground")g=B.u9
else{g=j.c
if(g.A(0,B.m1))g=B.m1}u.$5(60+k,new A.r(p+i*0.5,o,n+0.04*k),new A.r(i*3.6,-1.7-0.12*h,2.3+0.15*k),j.a,g)}}else if(b4==="switch"){f=D.d.gam(v)
u.$5(10,t.a7(0,B.h7O),B.hlP,"blackLine",B.FH)
u.$5(13,f.a7(0,B.hm_),B.hdP,"blackLoad",B.FH)
u.$5(12,t.a7(0,B.hi7),B.hcO,"ground",B.u9)
b3.b=6
r=x.o
b3.iD(C.a([t.a7(0,B.aYL),B.h8B,B.W7],r),0.075,B.m1,!1,0.3,8)
b3.iD(C.a([f.a7(0,B.aYL),B.hha,B.W7],r),0.075,B.m1,!1,0.3,8)
b3.wV(B.W7,B.hlG,0.28,B.afW,0.18,0.3,10)}else{u.$5(10,t.a7(0,B.he1),B.h8l,"black",B.FH)
u.$5(11,t.a7(0,B.hfG),B.hho,"white",B.m1)
u.$5(12,t.a7(0,B.hg6),B.hfW,"ground",B.u9)}if(b5)A.huC(b3,b4,b7)
else A.huf(b3,b4,A.aP8(b4,b7),b7.x,!1,s,b7.r)
if(b7.e&&b7.c===0){b3.b=0
b3.d=0.5
for(r=b6.f,p=r.length,e=0;e<p;++e){d=r[e]
a0=A.aQs(b4,d.a,b7)
if(d.e)a1=D.bs
else{o=d.f
if(o==="ground")a1=D.bg
else{o=o==="neutral"?D.c:B.Bz
a1=o}}if(b5)o=0
else{o=a0.a
if(o>0.4)o=0.12
else o=o<-0.4?-0.12:0}if(b5)n=0.6
else n=Math.abs(a0.a)<0.4?0.2:0
b3.eK(new A.r(a0.a+o,a0.b+0,a0.c+n),0.36,a1,4,8,0.1)}b3.d=1}if(b7.c>=2&&!b5)A.hwI(b3,b7.x)
r=!1
if(b7.c>=2)if(b7.d)r=b4==="outlet"||b4==="gfci"||D.a.a0(b4,b0)
if(r)A.ic9(b3,b7.a&&!b7.x)
r=b5?"Ceiling box":"Electrical box"
p=b4==="fan"
o=p?' A fan needs a box that says "fan rated".':""
n=b4==="switch"
m=n?"Cable from the breaker panel (LINE)":"NM-B cable (Romex)"
l=b5?"It joins the fixture black wire with a wire nut.":"It goes on a brass screw."
h=b5?"It joins the fixture white wire.":"It goes on a silver screw."
g=b5?"It joins the green fixture ground wire.":"It goes on the green screw."
if(s)a2=D.a.a0(b4,b0)||D.a.a0(b4,b1)
else a2=!1
if(a2)a2=b6.b
else if(b4==="gfci")a2="GFCI outlet"
else a2=n?"Light switch":"Receptacle (outlet)"
if(s)a3=D.a.a0(b4,b0)||D.a.a0(b4,b1)
else a3=!1
if(a3)n=b6.c
else if(b4==="gfci")n="It checks that the current going out equals the current coming back. If some leaks (through water or a person) it shuts off in a fraction of a second."
else n=n?"A rocker that opens and closes the black wire to the light.":"The outlet. Each side has two slots and a ground hole. The short slot is hot, the long slot is neutral."
a3=A.aP8(b4,b7)
a4=p?"Ceiling fan":"Ceiling light"
p=p?"The motor housing with blades. It has three wires: black (motor), white (neutral) and green (ground).":"The light fixture with a frosted dome. It has three wires: black, white and green."
a5=C.I([1,B.egu,2,B.egK,3,new A.cH(r,"A box that holds the wire connections. Every connection must be inside a box, never loose in the wall or the ceiling."+o,new A.r(0,0,-1.2),9),4,new A.cH(m,"The yellow jacket holds three wires: black (hot), white (neutral) and bare copper (ground). Yellow means 12 gauge wire for a 20 amp circuit. White jackets are 14 gauge for 15 amps.",new A.r(-0.4,1.5,-1.8),8),5,B.eh8,10,new A.cH("Black wire: hot","The hot wire brings the power from the breaker. It is the dangerous one. "+l,new A.r(-0.8,-0.8,1.2),7),13,B.egg,11,new A.cH("White wire: neutral","The neutral wire carries the power back to the panel. "+h,new A.r(0,-0.8,1.2),7),12,new A.cH("Bare copper wire: ground","The ground wire is a safety path. If a wire touches metal, the current runs down the ground instead of through you. "+g,new A.r(0.5,-0.8,1.2),7),6,B.egI,20,new A.cH(a2,n,new A.r(0,-0.2,a3),9),40,B.eg8,21,B.egN,22,B.eh7,23,B.egG,24,B.egL,25,B.egx,26,B.egO,27,B.eh0,28,B.egs,30,B.egb,31,B.eg9,51,B.egJ,52,B.egd,53,B.egS,54,new A.cH(a4,p,new A.r(0,0,6.4),9),55,B.eh2],x.S,x.q)
if(s){a5.n(0,20,new A.cH(b6.b,b6.c,new A.r(0,-0.2,A.aP8(b4,b7)),9))
for(s=b6.e,r=s.length,k=0;k<r;++k)a5.n(0,60+k,new A.cH(s[k].b,"Pick this wire up, then tap the screw it belongs on. Tap it again on the screw to take it off.",new A.r(-0.8+k*0.5,-0.8,1.2),7))
for(s=b6.f,r=s.length,e=0;e<r;++e){a6=s[e]
p=a6.a
a5.n(0,p,new A.cH(a6.b,a6.d,A.aQs(b4,p,b7),5))}}a7=C.a([],x.E)
if(b7.f&&b7.c===0)for(s=b6.f,r=s.length,e=0;e<r;++e){d=s[e]
a0=A.aQs(b4,d.a,b7)
p=d.f
switch(p){case"hot":o=B.eXD
break
case"neutral":o=B.eNl
break
case"ground":o=B.ePY
break
default:o=B.eC8
break}a8=o.a
if(b5){switch(p){case"hot":n="BLACK NUT \xb7 HOT"
break
case"neutral":n="WHITE NUT \xb7 NEUTRAL"
break
default:n="GROUND"
break}i=n}else i=w?a8:d.b
if(b5){switch(p){case"hot":p=B.hfh
break
case"neutral":p=B.hfa
break
default:p=B.hmz
break}a9=p}else{p=a0.a
if(p>0.4)n=3.8
else n=p<-0.4?-4.2:0
a9=new A.r(n,Math.abs(p)<0.4?-3:-0.4,1)}a7.push(new A.hd(new A.r(a0.a+a9.a,a0.b+a9.b,a0.c+a9.c),i,o.b,0))}if(b7.a&&b7.c===0)a7.push(B.c48)
return new A.qU(b2,a5,a7,B.qN,null,!1,0)},
htA(d,e,f){var w,v,u=e==="light"||e==="fan"
d.b=3
if(u){d.cJ(B.aZq,B.aYV,2.2,B.yd,0.3,18)
d.a4L(B.aYV,B.dZ,2.2,B.yd,!1,!0,0.3,18)}else{d.aD(B.aZq,B.hgI,B.yd,0.3)
d.aD(B.hdo,B.aYx,B.yd,0.3)
d.aD(B.h9o,B.aYx,B.yd,0.3)
d.aD(B.hfQ,B.aZ0,B.yd,0.3)
d.aD(B.hf8,B.aZ0,B.yd,0.3)}w=C.a([],x.o)
v=new A.fmK(d,f,w)
if(e==="switch"){v.$2(4,B.d6C)
v.$2(5,B.d4C)}else v.$2(4,B.djk)
return w},
hDj(d,e){var w,v=$.h3b(),u=new C.X(v,new A.h2v(d),C.T(v).k("X<1>"))
if(!u.gav(0)){w=e-60
return w>=0&&w<u.gH(0).e.length?u.gH(0).e[w].a:null}return A.i6J(d,e)},
i6J(d,e){var w
switch(e){case 10:w=d==="switch"?"blackLine":"black"
break
case 13:w="blackLoad"
break
case 11:w="white"
break
case 12:w="ground"
break
default:w=null
break}return w},
huf(d,e,f,g,h,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
if(D.a.a0(e,"terminal")){A.ic8(d,e,f,g,a1)
return}w=new A.r(0,-0.2,f)
v=e==="switch"
u=e==="gfci"
if(g)t=B.u5
else t=v?B.bmE:B.Zg
s=u?3.1:2.95
d.e=0
d.b=20
if(!h){d.aD(w.a7(0,B.hbR),new A.r(1.5,s,1.3),t,0.25)
d.e=0.15
d.b=26
r=w.a7(0,B.hbw)
d.aD(r,B.hlI,g?B.agx:B.BK,0.8)
d.aF(w.a7(0,B.hi2),B.hnS,B.y_)}d.e=0.3
d.b=27
r=w.a7(0,B.heB)
d.aD(r,new A.r(1.3,u?2.85:2.7,0.16),t,0.3)
if(v){d.e=0.7
d.b=28
r=w.a7(0,B.hh8)
d.aD(r,B.hdZ,g?B.u5:H.Zp,0.35)
r=w.a7(0,B.hlb)
d.aD(r,B.hjq,g?B.u5:B.agM,0.35)}else{d.e=0.6
if(D.a.a0(e,"nema"))A.i7D(d,w,e,g)
else{r=u?G.awH:B.dx8
q=r.length
p=f+0.47
o=f+0.46
n=f+0.5
m=0
for(;m<q;++m){l=r[m]
d.b=27
k=-0.2+(l+0.04)
d.aF(new A.r(-0.28,k,p),B.hgH,B.FR)
d.aF(new A.r(0.28,k,p),B.heJ,B.FR)
k=-0.2+(l-0.32)
d.dq(new A.r(0,k,o),new A.r(0,k,n),0.11,B.FR,10)}if(u){d.e=0.7
d.b=28
d.aD(w.a7(0,B.hhJ),B.aYE,B.bqq,0.3)
d.aD(w.a7(0,B.hm0),B.aYE,B.ajN,0.3)}}}if(h){d.e=0
return}j=u?0.95:0.85
i=u?-0.75:-0.55
r=new A.fo8(d,w)
if(!v||a0){r.$6$taped(23,-1,j,B.ah8,B.ahJ,u)
r.$5(24,-1,i,B.ah8,B.ahJ)}r.$6$taped(21,1,j,B.Bz,B.Gc,u)
r.$5(22,1,i,B.Bz,B.Gc)
d.e=0.9
d.b=25
d.cJ(w.a7(0,B.hfN),w.a7(0,B.hmE),0.18,B.ajp,0.7,12)
d.aF(w.a7(0,B.hfc),B.hfS,D.e_)
d.aD(w.a7(0,B.hc2),B.hhN,B.bff,0.6)
d.e=0},
huC(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=e==="fan",h=A.aP8(e,f)
d.e=0
d.b=55
w=h-0.3
v=h+0.3
u=i?3.3:3.5
t=f.x?B.u5:B.bnc
d.cJ(new A.r(0,0,w),new A.r(0,0,v),u,t,0.45,20)
d.b=54
if(i){u=h+4.2
d.cJ(new A.r(0,0,v),new A.r(0,0,u),0.45,B.bj_,0.5,10)
v=h+7.4
d.cJ(new A.r(0,0,u),new A.r(0,0,v),3.6,B.Fy,0.5,18)
d.cJ(new A.r(0,0,v),new A.r(0,0,h+8.6),1.6,B.brQ,0.7,14)}else{d.d=0.92
v=f.x?B.u5:B.bk7
d.eK(new A.r(0,0,h+1.2),3.6,v,6,14,0.7)
d.d=1}v=d.b=54
s=[B.eNu,B.eyO,B.eV7]
for(u=x.o,r=h-3.2,q=0,p=0;p<3;++p){t=s[p]
o=f.c===0
d.b=o?B.cIN[q]:v;++q
n=o?r:h
o=t.b.a
d.iD(C.a([new A.r(o,-0.3,w),new A.r(o,-0.3,n+0.4)],u),0.07,t.a,!1,0.3,6)}if(f.c===0)for(w=[B.eG9,B.eP3,B.eY4],v=w.length,u=f.b,p=0;p<v;++p){m=w[p]
t=m.a
l=A.aQs(e,t,f)
d.b=t
d.e=0.8
o=l.a+0
k=l.b+0
j=l.c
d.cJ(new A.r(o,k,j+-0.2),new A.r(o,k,j+0.3),0.09,B.u9,0.6,6)
if(u.an(0,t))d.wV(new A.r(o,k,j+-0.5),new A.r(o,k,j+0.9),0.4,m.b,0.26,0.4,8)
d.e=0}},
hwI(d,e){var w
d.e=0.4
d.b=30
w=e?B.u5:B.beg
d.aD(B.hhy,B.aZ3,w,0.3)
d.aD(B.hgu,B.aZ3,w,0.3)
d.aD(B.h9i,B.aZg,w,0.3)
d.aD(B.hat,B.hce,w,0.3)
d.aD(B.hmw,B.aZg,w,0.3)
d.cJ(B.heT,B.hgq,0.1,B.BK,0.8,10)
d.e=0},
ic9(d,e){var w,v
d.b=31
for(w=0;w<2;++w){v=B.d9j[w]
d.cJ(new A.r(v,0.52,0.2),new A.r(v,0.52,1.9),0.04,B.BK,0.8,6)}d.aD(B.h61,B.hlt,B.Mq,0.35)
d.bdl(B.aYX,0.2,e?D.YC:B.bnZ,0.9)
if(e){d.d=0.35
d.eK(B.aYX,0.5,D.YC,4,8,0)
d.d=1}},
i7D(d,e,f,g){var w,v,u,t,s
d.b=27
d.e=0.62
w=e.a7(0,B.hfB)
v=e.a7(0,B.hmk)
d.cJ(w,v,0.64,g?B.u5:B.aj1,0.35,28)
d.e=0.7
u=new A.ftK(e,d)
t=new A.ftJ(d,e)
s=new A.ftI(u)
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
ic8(d,e,f,g,h){var w,v,u=new A.r(0,-0.2,f)
d.e=0
d.b=26
w=u.a7(0,B.hft)
d.aD(w,B.hcy,g?B.agx:B.BK,0.8)
d.e=0.2
d.b=20
w=u.a7(0,B.hlX)
d.aD(w,B.hh7,g?B.u5:B.aj1,0.25)
d.e=0.3
for(w=f+0.5,v=0;v<2;++v)d.aF(new A.r(0+B.d7v[v],0.14999999999999997,w),B.hfP,B.brZ)
d.b=27
d.e=0.4
d.aF(u.a7(0,B.hjo),B.abQ,B.FH)
d.aF(u.a7(0,B.hnk),B.abQ,B.m1)
d.aF(u.a7(0,B.hnz),B.abQ,B.vU)
w=new A.fAw(d,u)
w.$5(23,-1.15,0.35,B.Bz,B.Gc)
w.$5(21,0,0.35,B.Bz,B.Gc)
w.$5(22,1.15,0.35,B.Bz,B.Gc)
d.e=0.9
d.b=25
d.cJ(u.a7(0,B.hf_),u.a7(0,B.hix),0.26,B.ajp,0.7,12)
d.aF(u.a7(0,B.hnI),B.hdi,D.e_)
if(h){d.e=0.8
d.b=40
d.aD(u.a7(0,B.heM),B.hdQ,B.u9,0.7)}d.e=0},
fm:function fm(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
AG:function AG(d){var _=this
_.a=!0
_.b=d
_.c=0
_.f=_.e=_.d=!1
_.r=!0
_.x=_.w=!1
_.y=!0
_.z=!1
_.Q=""},
iQ:function iQ(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
MQ:function MQ(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
fGk:function fGk(){},
fGl:function fGl(){},
fGm:function fGm(){},
fGn:function fGn(){},
fGo:function fGo(){},
fEP:function fEP(d){this.a=d},
h2w:function h2w(){},
ayg:function ayg(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.r=i
_.w=j},
fDW:function fDW(){},
fDX:function fDX(){},
fDU:function fDU(d){this.a=d},
fDV:function fDV(d){this.a=d},
fUP:function fUP(){},
fUQ:function fUQ(){},
fF1:function fF1(d){this.a=d},
fF2:function fF2(d){this.a=d},
fEZ:function fEZ(){},
fF_:function fF_(d){this.a=d},
fF0:function fF0(d){this.a=d},
fBU:function fBU(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fBV:function fBV(d){this.a=d},
fmK:function fmK(d,e,f){this.a=d
this.b=e
this.c=f},
h2v:function h2v(d){this.a=d},
fo8:function fo8(d,e){this.a=d
this.b=e},
ftK:function ftK(d,e){this.a=d
this.b=e},
ftL:function ftL(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
ftJ:function ftJ(d,e){this.a=d
this.b=e},
ftI:function ftI(d){this.a=d},
fAw:function fAw(d,e){this.a=d
this.b=e},
x6(d){var w
switch(d){case"outlet":w="Outlet"
break
case"gfci":w="GFCI outlet"
break
case"switch":w="Light switch"
break
case"light":w="Ceiling light"
break
case"fan":w="Ceiling fan"
break
default:w=A.oi(d).b
break}return w},
fmw(d,e,f){var w
switch(d){case"ground":w=y.t
break
case"neutral":w=y.I
break
default:w=e.a===25?y.T:y.S
break}return w},
fGp:function fGp(){},
fGq:function fGq(){},
fGr:function fGr(){},
fGs:function fGs(){},
fGt:function fGt(){},
fGu:function fGu(){},
fGv:function fGv(){},
fGw:function fGw(){},
fGx:function fGx(){},
fGy:function fGy(){},
fGd:function fGd(){},
fGe:function fGe(){},
fGf:function fGf(){},
fGg:function fGg(){},
fGh:function fGh(){},
fGi:function fGi(){},
fGj:function fGj(){},
aQg(d){return D.d.dO(B.a4F,new A.fBD(d),new A.fBE())},
hfn(d,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i={},h=new A.h2s(),g=new A.h2p(),f=d.c,e=f==="hall"
if(!e&&d.p1!=="back"){w=a0.e?d.gh3(0)-14:Math.min(a0.d,d.gh3(0)-14)
v=h.$1(w)
return new A.ac8(w,v,d.gh3(0)/2,g.$1(v))}if(e&&a1<2){w=a0.e?d.gh3(0)-14:Math.min(a0.d,d.gh3(0)-14)
v=h.$1(w)
return new A.ac8(w,v,d.gh3(0)/2,g.$1(v))}if(e){f=C.a([],x.n)
for(e=d.w,u=e.length,t=0;t<e.length;e.length===u||(0,C.J)(e),++t){s=e[t]
if(s.b==="back"&&!s.a)f.push(s.c)}r=f.length===0?-40:D.d.f6(f,D.vQ)-19-8
q=f.length===0?40:D.d.f6(f,D.pX)+19+8
p=d.geb(0)/2-8
f=a1===2?(-p+r)/2:(q+p)/2
return new A.ac8(p-q,106,f,61)}e=d.geb(0)
q=d.geb(0)/2-6
if(f==="bathroom"&&!d.ok)q=14
f=C.a([],x.f)
for(u=d.w,o=u.length,t=0;t<u.length;u.length===o||(0,C.J)(u),++t){s=u[t]
if(s.b==="back"&&!s.a){n=s.c
f.push(new C.y(n-19,n+19))}}D.d.aZ(f,new A.h2q())
m=i.a=i.b=-e/2+6
l=new A.h2r(i)
for(e=f.length,t=0;t<f.length;f.length===e||(0,C.J)(f),++t){u=f[t]
k=u.a
if(k>m)l.$2(m,Math.min(k,q))
m=Math.max(m,u.b)}if(m<q)l.$2(m,q)
j=Math.max(30,i.a-i.b-4)
w=a0.e?j:Math.min(a0.d,j)
v=h.$1(w)
return new A.ac8(w,v,(i.b+i.a)/2,g.$1(v))},
zx(d,e,f,g,h,i,j,k){var w=x.S
return new A.a5H(d,e,f,g,h,i,j,k,C.a([],x._),C.a([0,0,0],x.t),C.aS(w),C.U(w,x.i),C.U(w,x.cR),C.U(w,w),C.U(w,x.gh),C.U(w,x.N),C.a([],x.cX),C.aS(w),C.aS(w))},
aWZ(d){var w=new A.aWY(d)
w.c9U()
return w},
hMK(d){var w=new A.aWY(7)
w.bB9(d)
return w},
iqZ(d){var w
switch(d.c){case"bedroom":w=1
break
case"bathroom":w=2
break
case"kitchen":w=4
break
case"hall":w=3
break
default:w=0
break}return w},
mh:function mh(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.f=_.e=0},
fo:function fo(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Ep:function Ep(d,e,f){this.a=d
this.b=e
this.c=f},
nS:function nS(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fBD:function fBD(d){this.a=d},
fBE:function fBE(){},
ac8:function ac8(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
h2s:function h2s(){},
h2p:function h2p(){},
h2q:function h2q(){},
h2r:function h2r(d){this.a=d},
ow:function ow(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aWT:function aWT(d,e,f){this.a=d
this.b=e
this.c=f},
a5H:function a5H(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v){var _=this
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
bVb:function bVb(){},
bVa:function bVa(){},
aWY:function aWY(d){var _=this
_.a=""
_.b=d
_.c=!1
_.d=$
_.e=0},
bVM:function bVM(){},
bVN:function bVN(){},
bVO:function bVO(d){this.a=d},
bVP:function bVP(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bVQ:function bVQ(d,e){this.a=d
this.b=e},
bVU:function bVU(d){this.a=d},
bVR:function bVR(d,e){this.a=d
this.b=e},
bVT:function bVT(d,e,f){this.a=d
this.b=e
this.c=f},
bVS:function bVS(d,e,f){this.a=d
this.b=e
this.c=f},
bVY:function bVY(){},
bVX:function bVX(){},
bVW:function bVW(){},
bVV:function bVV(){},
b1q(d,e,f){return new A.Ji(f,d,e,null)},
hyu(d){var w=A.ti(B.hO,d.e*3.141592653589793/2)
return new C.y(w.a,w.c)},
idq(b3,b4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8=null,a9="A helicopter with its billboard",b0={},b1=C.a([],x.dI),b2=x.o
b0.a=C.a([],b2)
b0.b=C.a([],b2)
b0.c=C.a([],x.s)
b0.d=!1
w=new A.fCe(b0,b1)
v=new A.fCl(b0)
u=new A.fCg(b3)
t=new A.fCm(b3)
s=new A.fC6(new A.fCf(t),new A.fCc(t,u))
r=new A.fCi(b0,u,s,v)
q=new A.fCj(b0,new A.fCk(r),s)
p=new A.fCh(b0,w,b1)
b2=D.d.q(B.dlA,b4)
o=!b2
n=x._
m=C.a([],n)
for(l=b3.x,k=l.length,j=0;j<l.length;l.length===k||(0,C.J)(l),++j){i=l[j]
h=i.b
if(h==="billboard"||h==="cornersign"||h==="adboard"||h==="tower"||h==="hq")m.push(i)}k=C.T(l).k("X<1>")
g=new C.X(l,new A.fC7(),k)
h=C.a([],n)
for(f=l.length,j=0;j<l.length;l.length===f||(0,C.J)(l),++j){i=l[j]
e=i.b
if(e==="house2"||e==="bighouse")h.push(i)}v.$3$note(B.h5_,B.h42,"Welcome to NGMY Town")
if(!g.gav(0))q.$1(g.gH(0))
if(b4==="city"||o){v.$2(B.hkR,B.hka)
v.$2(B.hkW,B.hk9)
v.$2(B.h4p,B.h2Y)
v.$2(B.haG,B.h6Y)
v.$2(B.haz,B.h6Z)
v.$2(B.h4J,B.h30)
w.$1$speed(200)}if(b4==="billboards"||o){d={}
v.$2(B.hkv,B.hkq)
v.$3$note(B.h4f,B.AQ,"The big NGMY logo board: New Global Movement for Youth")
v.$2(B.h6G,B.AQ)
v.$2(B.h7B,B.AQ)
v.$2(B.h5k,B.AQ)
v.$2(B.hk_,B.AQ)
v.$2(B.hkh,B.AQ)
v.$2(B.hjT,B.hkb)
d.a=!g.gag(0).C()?B.h2Z:new A.r(g.gH(0).c,0,g.gH(0).d)
a0=C.C(m,x.eB)
a1=0
for(;;){if(a0.length!==0)m=a1<(o?8:80)
else m=!1
if(!m)break
D.d.aZ(a0,new A.fC8(d))
i=D.d.cA(a0,0)
q.$1(i)
d.a=new A.r(i.c,0,i.d);++a1}w.$1$speed(105)
for(a2=0;a2<2;++a2)b1.push(new A.ML(B.nH,B.nH,130,6,a9,a8,!1,a8,a2))}if(b4==="edges"){n=C.a([],n)
for(m=l.length,j=0;j<l.length;l.length===m||(0,C.J)(l),++j){i=l[j]
f=i.b
if(f==="adboard"||f==="cornersign")n.push(i)}D.d.aZ(n,new A.fC9(new A.fC5()))
for(m=n.length,j=0;j<n.length;n.length===m||(0,C.J)(n),++j){i=n[j]
f=b0.a
if(f.length>1){a3=D.d.gam(f)
f=i.c
e=i.d
v.$2(new A.r((a3.a+f)/2,430,(a3.c+e)/2),new A.r(f,100,e))}q.$1(i)}w.$1$speed(150)}if(b4==="houses"||o){a2=0
for(;;){n=h.length
if(a2<n)m=a2<(o?2:5)
else m=!1
if(!m)break
i=h[(a2*5+1)%n]
r.$7$note(i,150,50,270,330,70,i.b==="bighouse"?"A big house with TV windows":"A house");++a2}a4=new C.X(h,new A.fCa(),x.am)
if(!a4.gav(0)){i=a4.gH(0)
a5=A.hyu(i)
n=i.c
m=i.d
v.$2(new A.r(n+a5.a*220,110,m+a5.b*220),new A.r(n,45,m))
p.$1(i)}}if(b4==="hospital"||o)for(j=0;j<3;++j){a6=B.dmI[j]
i=new C.X(l,new A.fCb(a6),k)
if(!i.gag(0).C())continue
a7=i.gag(0)
if(!a7.C())C.bi(C.fp())
r.$7$note(a7.gR(0),160,50,300,360,60,"The "+a6)
a7=i.gag(0)
if(!a7.C())C.bi(C.fp())
p.$1(a7.gR(0))}w.$0()
if(b4==="traffic"||o){if(b2){for(a2=0;a2<2;++a2)b1.push(new A.ML(B.nH,B.nH,130,6,a9,a8,!1,a8,a2))
o=!1}a2=0
for(;;){if(a2<4)b2=a2<(o?2:4)
else b2=!1
if(!b2)break
b1.push(new A.ML(B.nH,B.nH,130,6,B.kx[a2].a==="bus"?"A self-driving bus with its billboards":"A self-driving police car",a8,!1,a2,a8));++a2}}return b1},
Ji:function Ji(d,e,f,g){var _=this
_.d=d
_.f=e
_.r=f
_.a=g},
aF9:function aF9(d,e,f,g,h,i,j,k,l,m,n,o,p,q){var _=this
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
_.bn=k
_.bb=!1
_.a_=l
_.aH=null
_.aL=0
_.aQ=!1
_.b7=_.aI=null
_.bI=_.bf=_.b6=0
_.aP=null
_.bm=!1
_.bF=null
_.c9=0
_.c6=m
_.cO=null
_.cj=n
_.P=_.bD=null
_.T=0
_.bL=o
_.bw=null
_.bW=0
_.f3=_.er=_.ek=!1
_.ac=1
_.ez=400
_.al=_.fD=!1
_.bC=_.ao=null
_.dw=_.c1=0
_.dk=null
_.ew=0
_.i3=""
_.fE=null
_.iS=p
_.hE=_.kG=0
_.jl=-1
_.jm=q
_.jS=!1
_.tj=_.r6=-1e5
_.hR=0
_.c=_.a=_.tk=_.oS=null},
egL:function egL(){},
egI:function egI(d){this.a=d},
egJ:function egJ(d){this.a=d},
egH:function egH(){},
egK:function egK(d){this.a=d},
efu:function efu(d,e,f){this.a=d
this.b=e
this.c=f},
efv:function efv(d){this.a=d},
eft:function eft(d){this.a=d},
efw:function efw(d,e){this.a=d
this.b=e},
ee_:function ee_(d,e){this.a=d
this.b=e},
efY:function efY(d){this.a=d},
eeX:function eeX(d){this.a=d},
eeY:function eeY(d,e){this.a=d
this.b=e},
eeZ:function eeZ(d,e){this.a=d
this.b=e},
ef_:function ef_(d,e){this.a=d
this.b=e},
ef0:function ef0(d){this.a=d},
edt:function edt(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
edr:function edr(d,e,f){this.a=d
this.b=e
this.c=f},
edq:function edq(d,e){this.a=d
this.b=e},
eds:function eds(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
edo:function edo(d,e){this.a=d
this.b=e},
edp:function edp(d,e,f){this.a=d
this.b=e
this.c=f},
edn:function edn(d,e){this.a=d
this.b=e},
edC:function edC(d){this.a=d},
edD:function edD(d){this.a=d},
edE:function edE(d){this.a=d},
eeQ:function eeQ(d){this.a=d},
eeS:function eeS(d){this.a=d},
eeR:function eeR(d){this.a=d},
eeT:function eeT(d){this.a=d},
eeP:function eeP(d){this.a=d},
eeU:function eeU(d){this.a=d},
eeO:function eeO(d){this.a=d},
eeV:function eeV(d){this.a=d},
eeN:function eeN(d){this.a=d},
eeW:function eeW(d){this.a=d},
eeM:function eeM(d){this.a=d},
ed3:function ed3(d){this.a=d},
ed4:function ed4(d){this.a=d},
edO:function edO(d){this.a=d},
edQ:function edQ(d){this.a=d},
edP:function edP(d){this.a=d},
edR:function edR(d){this.a=d},
edN:function edN(d){this.a=d},
edS:function edS(d){this.a=d},
edM:function edM(d){this.a=d},
edT:function edT(d){this.a=d},
edL:function edL(d){this.a=d},
edU:function edU(d){this.a=d},
edK:function edK(d){this.a=d},
edV:function edV(d){this.a=d},
edJ:function edJ(d){this.a=d},
edW:function edW(d){this.a=d},
edI:function edI(d){this.a=d},
efW:function efW(){},
efX:function efX(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
efU:function efU(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
efT:function efT(d){this.a=d},
efV:function efV(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eed:function eed(d){this.a=d},
ec2:function ec2(){},
ego:function ego(){},
ect:function ect(){},
ee8:function ee8(d){this.a=d},
ee7:function ee7(d){this.a=d},
ee9:function ee9(d){this.a=d},
ee6:function ee6(d){this.a=d},
egp:function egp(d,e){this.a=d
this.b=e},
egn:function egn(d){this.a=d},
efA:function efA(d,e,f){this.a=d
this.b=e
this.c=f},
efB:function efB(d,e){this.a=d
this.b=e},
efz:function efz(d,e){this.a=d
this.b=e},
efy:function efy(d){this.a=d},
efx:function efx(d){this.a=d},
eex:function eex(){},
eey:function eey(){},
eeu:function eeu(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
eew:function eew(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eev:function eev(d){this.a=d},
ees:function ees(d){this.a=d},
eer:function eer(d){this.a=d},
eet:function eet(d,e){this.a=d
this.b=e},
eeq:function eeq(d,e){this.a=d
this.b=e},
edX:function edX(d){this.a=d},
edY:function edY(d){this.a=d},
efq:function efq(){},
edA:function edA(d){this.a=d},
edz:function edz(d){this.a=d},
edB:function edB(d,e){this.a=d
this.b=e},
edm:function edm(d){this.a=d},
eee:function eee(){},
efC:function efC(d,e){this.a=d
this.b=e},
edy:function edy(){},
efO:function efO(d){this.a=d},
edw:function edw(d){this.a=d},
edx:function edx(d,e){this.a=d
this.b=e},
edv:function edv(d){this.a=d},
edu:function edu(d){this.a=d},
ee3:function ee3(){},
efN:function efN(d,e){this.a=d
this.b=e},
egC:function egC(){},
ed5:function ed5(){},
ee0:function ee0(d,e){this.a=d
this.b=e},
ee1:function ee1(d){this.a=d},
ee2:function ee2(){},
edG:function edG(){},
edH:function edH(d){this.a=d},
eeg:function eeg(){},
eeh:function eeh(d,e){this.a=d
this.b=e},
ecA:function ecA(){},
ecz:function ecz(){},
ecB:function ecB(d){this.a=d},
ecy:function ecy(d){this.a=d},
ecC:function ecC(d){this.a=d},
ecx:function ecx(d){this.a=d},
ecD:function ecD(d,e){this.a=d
this.b=e},
ecw:function ecw(d){this.a=d},
ecE:function ecE(d,e){this.a=d
this.b=e},
ecv:function ecv(d,e){this.a=d
this.b=e},
ecF:function ecF(d){this.a=d},
ecu:function ecu(d){this.a=d},
ed1:function ed1(d){this.a=d},
ed2:function ed2(d){this.a=d},
efp:function efp(d,e,f){this.a=d
this.b=e
this.c=f},
efn:function efn(d,e,f){this.a=d
this.b=e
this.c=f},
efo:function efo(d,e){this.a=d
this.b=e},
efj:function efj(d,e,f){this.a=d
this.b=e
this.c=f},
efi:function efi(){},
efk:function efk(d,e){this.a=d
this.b=e},
efl:function efl(d,e){this.a=d
this.b=e},
efm:function efm(d,e){this.a=d
this.b=e},
ef6:function ef6(d,e){this.a=d
this.b=e},
ef3:function ef3(){},
ef4:function ef4(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ef2:function ef2(d,e,f){this.a=d
this.b=e
this.c=f},
ef5:function ef5(d,e,f){this.a=d
this.b=e
this.c=f},
ef1:function ef1(d,e){this.a=d
this.b=e},
egm:function egm(d){this.a=d},
egk:function egk(d){this.a=d},
egl:function egl(d,e){this.a=d
this.b=e},
egc:function egc(d,e,f){this.a=d
this.b=e
this.c=f},
egb:function egb(){},
egd:function egd(){},
ege:function ege(d,e){this.a=d
this.b=e},
egf:function egf(d,e){this.a=d
this.b=e},
egg:function egg(d){this.a=d},
egh:function egh(d){this.a=d},
egi:function egi(d){this.a=d},
egj:function egj(d){this.a=d},
eg8:function eg8(d){this.a=d},
eg6:function eg6(d){this.a=d},
eg7:function eg7(){},
eg2:function eg2(d,e,f){this.a=d
this.b=e
this.c=f},
eg0:function eg0(d){this.a=d},
eg1:function eg1(){},
eg3:function eg3(d,e,f){this.a=d
this.b=e
this.c=f},
eg_:function eg_(d,e){this.a=d
this.b=e},
eg4:function eg4(d,e){this.a=d
this.b=e},
eg5:function eg5(d,e){this.a=d
this.b=e},
efK:function efK(d,e){this.a=d
this.b=e},
efL:function efL(d){this.a=d},
efM:function efM(){},
eg9:function eg9(d,e){this.a=d
this.b=e},
efZ:function efZ(d,e){this.a=d
this.b=e},
efR:function efR(d){this.a=d},
efS:function efS(){},
efJ:function efJ(){},
efQ:function efQ(){},
egy:function egy(d){this.a=d},
egz:function egz(d){this.a=d},
egA:function egA(d){this.a=d},
egx:function egx(){},
eff:function eff(d){this.a=d},
efg:function efg(){},
egq:function egq(d){this.a=d},
egr:function egr(d){this.a=d},
egs:function egs(d,e){this.a=d
this.b=e},
egt:function egt(d,e){this.a=d
this.b=e},
egu:function egu(d,e){this.a=d
this.b=e},
egv:function egv(d,e){this.a=d
this.b=e},
egw:function egw(d,e){this.a=d
this.b=e},
edF:function edF(){},
efd:function efd(d,e){this.a=d
this.b=e},
eel:function eel(d){this.a=d},
eei:function eei(){},
eej:function eej(){},
eek:function eek(){},
ee4:function ee4(){},
ee5:function ee5(d){this.a=d},
efD:function efD(){},
edZ:function edZ(d){this.a=d},
efr:function efr(){},
efs:function efs(d){this.a=d},
efE:function efE(d){this.a=d},
efF:function efF(d){this.a=d},
efG:function efG(d){this.a=d},
eeb:function eeb(d){this.a=d},
eea:function eea(d){this.a=d},
eec:function eec(d){this.a=d},
efH:function efH(d){this.a=d},
efI:function efI(){},
efP:function efP(d){this.a=d},
eeA:function eeA(){},
eeB:function eeB(d){this.a=d},
eeJ:function eeJ(d){this.a=d},
eeK:function eeK(){},
eeL:function eeL(d){this.a=d},
eeD:function eeD(d){this.a=d},
eeE:function eeE(d,e){this.a=d
this.b=e},
eeC:function eeC(d,e){this.a=d
this.b=e},
eeF:function eeF(d,e){this.a=d
this.b=e},
eeI:function eeI(d){this.a=d},
eeG:function eeG(d){this.a=d},
eez:function eez(d){this.a=d},
eeH:function eeH(d){this.a=d},
eem:function eem(d){this.a=d},
een:function een(d){this.a=d},
egB:function egB(d){this.a=d},
eep:function eep(d){this.a=d},
eeo:function eeo(d){this.a=d},
ec1:function ec1(d){this.a=d},
ec0:function ec0(d,e,f){this.a=d
this.b=e
this.c=f},
ebW:function ebW(){},
ebX:function ebX(){},
ebY:function ebY(d){this.a=d},
ebZ:function ebZ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eef:function eef(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
ega:function ega(d,e){this.a=d
this.b=e},
efe:function efe(d,e){this.a=d
this.b=e},
efh:function efh(d,e){this.a=d
this.b=e},
ec_:function ec_(d,e){this.a=d
this.b=e},
edb:function edb(d){this.a=d},
edc:function edc(d){this.a=d},
edd:function edd(d){this.a=d},
ede:function ede(d){this.a=d},
edf:function edf(d,e){this.a=d
this.b=e},
edg:function edg(d){this.a=d},
eda:function eda(d){this.a=d},
edh:function edh(d,e){this.a=d
this.b=e},
ed9:function ed9(d,e){this.a=d
this.b=e},
edi:function edi(d,e){this.a=d
this.b=e},
ed8:function ed8(d,e){this.a=d
this.b=e},
edj:function edj(d){this.a=d},
ed7:function ed7(d){this.a=d},
edk:function edk(d,e){this.a=d
this.b=e},
ed6:function ed6(d,e){this.a=d
this.b=e},
edl:function edl(d,e){this.a=d
this.b=e},
egE:function egE(d){this.a=d},
egG:function egG(d){this.a=d},
egD:function egD(d){this.a=d},
egF:function egF(d){this.a=d},
ecO:function ecO(d){this.a=d},
ecP:function ecP(d){this.a=d},
ecQ:function ecQ(d){this.a=d},
ecU:function ecU(d){this.a=d},
ecV:function ecV(d){this.a=d},
ecW:function ecW(d){this.a=d},
ecN:function ecN(d){this.a=d},
ecX:function ecX(d){this.a=d},
ecM:function ecM(d){this.a=d},
ecY:function ecY(d){this.a=d},
ecL:function ecL(d){this.a=d},
ecZ:function ecZ(d){this.a=d},
ed_:function ed_(d){this.a=d},
ecK:function ecK(d){this.a=d},
ed0:function ed0(d){this.a=d},
ecJ:function ecJ(d){this.a=d},
ecR:function ecR(d){this.a=d},
ecI:function ecI(d){this.a=d},
ecS:function ecS(d){this.a=d},
ecH:function ecH(d){this.a=d},
ecT:function ecT(d){this.a=d},
ecG:function ecG(d){this.a=d},
ec8:function ec8(d){this.a=d},
ecm:function ecm(d){this.a=d},
ecl:function ecl(){},
ec9:function ec9(d){this.a=d},
eca:function eca(d){this.a=d},
ecn:function ecn(){},
ecd:function ecd(d,e){this.a=d
this.b=e},
eco:function eco(d){this.a=d},
ec7:function ec7(d){this.a=d},
ecp:function ecp(d){this.a=d},
ecq:function ecq(d){this.a=d},
ec6:function ec6(d){this.a=d},
ecr:function ecr(d){this.a=d},
ecs:function ecs(d){this.a=d},
ecb:function ecb(d){this.a=d},
ec5:function ec5(d){this.a=d},
ecc:function ecc(d){this.a=d},
ec4:function ec4(d){this.a=d},
ece:function ece(d){this.a=d},
ecf:function ecf(d){this.a=d},
ecg:function ecg(d){this.a=d},
ech:function ech(d){this.a=d},
eci:function eci(d){this.a=d},
ecj:function ecj(d){this.a=d},
eck:function eck(d){this.a=d},
ec3:function ec3(){},
efc:function efc(d){this.a=d},
ef9:function ef9(d,e,f){this.a=d
this.b=e
this.c=f},
efa:function efa(d,e){this.a=d
this.b=e},
ef8:function ef8(d){this.a=d},
efb:function efb(d,e){this.a=d
this.b=e},
ef7:function ef7(d){this.a=d},
bkk:function bkk(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
dxG:function dxG(d,e){this.a=d
this.b=e},
bjK:function bjK(d,e){this.b=d
this.a=e},
aJm:function aJm(d,e){this.c=d
this.a=e},
buu:function buu(){this.c=this.a=this.d=null},
f9L:function f9L(d,e){this.a=d
this.b=e},
f9K:function f9K(d){this.a=d},
f9N:function f9N(d){this.a=d},
f9O:function f9O(d){this.a=d},
f9P:function f9P(d){this.a=d},
f9M:function f9M(d){this.a=d},
f4j:function f4j(d,e,f){var _=this
_.a=d
_.b=e
_.c=f
_.d=0
_.e=1
_.f=3
_.r=0
_.w=112
_.x=!1},
ML:function ML(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
QH:function QH(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fCe:function fCe(d,e){this.a=d
this.b=e},
fCl:function fCl(d){this.a=d},
fCg:function fCg(d){this.a=d},
fCm:function fCm(d){this.a=d},
fCf:function fCf(d){this.a=d},
fCc:function fCc(d,e){this.a=d
this.b=e},
fCd:function fCd(d,e){this.a=d
this.b=e},
fC6:function fC6(d,e){this.a=d
this.b=e},
fCi:function fCi(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fCk:function fCk(d){this.a=d},
fCj:function fCj(d,e,f){this.a=d
this.b=e
this.c=f},
fCh:function fCh(d,e,f){this.a=d
this.b=e
this.c=f},
fC7:function fC7(){},
fC8:function fC8(d){this.a=d},
fC5:function fC5(){},
fC9:function fC9(d){this.a=d},
fCa:function fCa(){},
fCb:function fCb(d){this.a=d},
aKk:function aKk(d,e,f){this.c=d
this.d=e
this.a=f},
bwF:function bwF(){this.d=!1
this.c=this.a=null},
ffu:function ffu(d){this.a=d},
fft:function fft(d){this.a=d},
ho6(){var w=$.ho5
return w==null?$.ho5=new A.chE().$0():w},
inQ(d,e,f){var w,v,u,t,s,r,q,p,o,n=null,m=e.a,l=e.b,k=new C.a2(0,0,0+m,0+l),j=C.br(k,D.ii)
$.S()
w=C.K()
w.sar(B.c8u.aG(0,k))
d.ap(j,w)
v=C.K()
v.b=D.aa
v.r=F.f0.gp(0)
v.c=l*0.025
w=l*0.05
j=l*0.08
d.ap(C.br(k.cr(-w),new C.aP(j,j)),v)
w=C.br(k.cr(-(l*0.1)),new C.aP(w,w))
v.c=l*0.01
d.ap(w,v)
u=new C.q(m/2,l/2)
t=l*0.36
l=C.K()
l.r=H.ai3.gp(0)
d.N(u,t*1.1,l)
l=C.K()
l.r=F.f0.gp(0)
d.N(u,t,l)
l=C.K()
l.r=B.FC.gp(0)
d.N(u,t*0.9,l)
l=C.K()
l.b=D.aa
l.r=E.iD.gp(0)
l.c=t*0.04
d.N(u,t*0.95,l)
s=$.WH
r=C.bJ(u,t*1.2,t*1.5)
if(s!=null){m=s.c
l=s.d
q=Math.min((r.c-r.a)/m,(r.d-r.b)/l)
p=C.bJ(r.gbK(),l*q,m*q)
j=C.K()
j.z=D.cj
d.pZ(s,new C.a2(0,0,m,l),p,j)}else{o=C.fv(n,D.ct,n,n,n,C.cQ(n,n,n,n,n,n,n,n,n,C.l(n,n,E.iD,n,n,n,n,n,n,n,n,t*0.6,n,n,D.u,n,n,!0,n,n,n,n,n,n,n,n),"NGMY"),D.a5,D.bW,n,D.dD,D.bX)
o.ef()
m=o.b
l=m.c
m=m.a.c
o.a4(d,u.aK(0,new C.q(l/2,m.gba(m)/2)))}},
hCh(d,e,f){var w,v,u,t,s,r,q,p,o=null,n=e.ej(D.I),m=e.gdz()/2
$.S()
w=C.K()
w.r=F.f0.gp(0)
d.N(n,m,w)
w=C.K()
w.r=B.FC.gp(0)
d.N(n,m*0.9,w)
w=C.K()
w.b=D.aa
w.r=E.iD.gp(0)
w.c=m*0.04
d.N(n,m*0.93,w)
v=$.WH
u=C.bJ(n,m*1.2,m*1.5)
if(v!=null){w=v.c
t=v.d
s=Math.min((u.c-u.a)/w,(u.d-u.b)/t)
r=C.bJ(u.gbK(),t*s,w*s)
q=C.K()
q.z=D.cj
d.pZ(v,new C.a2(0,0,w,t),r,q)}else{p=C.fv(o,D.ct,o,o,o,C.cQ(o,o,o,o,o,o,o,o,o,C.l(o,o,E.iD,o,o,o,o,o,o,o,o,m*0.6,o,o,D.u,o,o,!0,o,o,o,o,o,o,o,o),"NGMY"),D.a5,D.bW,o,D.dD,D.bX)
p.ef()
w=p.b
t=w.c
w=w.a.c
p.a4(d,n.aK(0,new C.q(t/2,w.gba(w)/2)))}},
vL(d,e,f,g,h){var w,v,u,t,s,r,q,p,o,n,m=null,l=e.a,k=e.b,j=new C.a2(0,0,0+l,0+k),i=e.gdz()*0.08
i=C.br(j,new C.aP(i,i))
$.S()
w=C.K()
w.sar(B.asC.aG(0,j))
d.ap(i,w)
w=j.cr(-(e.gdz()*0.045))
i=e.gdz()*0.06
i=C.br(w,new C.aP(i,i))
w=C.K()
w.b=D.aa
w.r=F.f0.gp(0)
w.c=e.gdz()*0.035
d.ap(i,w)
v=k*0.33
u=new C.q(k*0.6,k*0.5)
w=C.K()
w.r=F.f0.gp(0)
d.N(u,v,w)
w=C.K()
w.r=B.FC.gp(0)
d.N(u,v*0.88,w)
t=$.WH
s=C.bJ(u,v*1.15,v*1.4)
if(t!=null){i=t.c
w=t.d
r=Math.min((s.c-s.a)/i,(s.d-s.b)/w)
q=C.bJ(s.gbK(),w*r,i*r)
p=C.K()
p.z=D.cj
d.pZ(t,new C.a2(0,0,i,w),q,p)}else{o=C.fv(m,D.ct,m,m,m,C.cQ(m,m,m,m,m,m,m,m,m,C.l(m,m,E.iD,m,m,m,m,m,m,m,m,v*0.55,m,m,D.u,m,m,!0,m,m,m,m,m,m,m,m),"NGMY"),D.a5,D.bW,m,D.dD,D.bX)
o.ef()
i=o.b
w=i.c
i=i.a.c
o.a4(d,u.aK(0,new C.q(w/2,i.gba(i)/2)))}n=k*1.08
l=new A.fU5(l-n-k*0.2,d,n)
l.$4(g,k*0.36,D.c,k*0.16)
l.$4(h,k*0.14,F.f0,k*0.62)},
hxL(d){return 210+D.o.E(d.l(),5)*24},
fU1(d,e,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k="NEW GLOBAL",j="MOVEMENT",i="FOR YOUTH",h=e.a,g=e.b,f=new C.a2(0,0,0+h,0+g)
switch(a1){case 0:w=B.asC
break
case 1:w=B.c8j
break
default:w=B.c6l
break}v=e.gdz()*0.06
v=C.br(f,new C.aP(v,v))
$.S()
u=C.K()
u.sar(w.aG(0,f))
d.ap(v,u)
t=C.K()
t.b=D.aa
w=a1===2
t.r=(w?E.iD:F.f0).gp(0)
t.c=e.gdz()*0.04
v=f.cr(-(e.gdz()*0.05))
u=e.gdz()*0.05
d.ap(C.br(v,new C.aP(u,u)),t)
u=f.cr(-(e.gdz()*0.1))
v=e.gdz()*0.03
v=C.br(u,new C.aP(v,v))
t.c=e.gdz()*0.012
d.ap(v,t)
if(a1===1)s=E.iD
else s=w?E.iD:D.c
w=new A.fU3($.WH,d,s)
v=new A.fU2(s,e,d)
u=g*0.4
r=g*0.12
if(a1===0){q=g*0.5
p=new C.q(g*0.62,q)
o=C.K()
o.r=F.f0.gp(0)
d.N(p,g*0.34,o)
o=C.K()
o.r=B.FC.gp(0)
d.N(p,g*0.3,o)
w.$1(C.bJ(p,u,q))
n=g*1.04
m=h-r
r=new A.fU4(e)
h=r.$1(k)
q=r.$1(j)
r=r.$1(i)
r=Math.max(C.je(q),C.je(r))
l=(n+m)/2
r=g*0.16*Math.min(1,(m-n)/Math.max(C.je(h),r))
v.$3(k,new C.q(l,g*0.2),r)
v.$3(j,new C.q(l,u),r)
v.$3(i,new C.q(l,g*0.6),r)}else{q=h/2
w.$1(C.bJ(new C.q(q,g*0.42),u,h*0.6))
v.$3("NGMY",new C.q(q,g*0.68),r)
v.$4$w(i,new C.q(q,g*0.82),g*0.06,D.V)}},
hy3(f9,g0,g1,g2,g3,g4,g5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1,e2,e3,e4,e5,e6,e7,e8,e9,f0,f1,f2,f3,f4="walls",f5="GFCI outlet",f6="Wall outlet",f7="\ud83d\udeb0 Needs plumbing",f8=f9.c
if(f8==="outside")return A.i8y(f9,g3,g2,g5,g4,g1)
f9.cLC()
w=x.z
v=C.a([],w)
u=new A.eM(v)
t=C.U(x.S,x.q)
s=C.a([],x.E)
r=C.a([],x.a)
q=f9.geb(0)
p=f9.gh3(0)
o=C.a([],x.O)
for(n=f9.z,m=n.length,l=0;l<n.length;n.length===m||(0,C.J)(n),++l)o.push(B.aAX[n[l]])
k=B.aAE[f9.Q]
j=new A.fCN(g2)
u.f=-1
u.b=j.$2("floor",310)
i=$.dl+1
u.x=$.dl=i
n=p/2
m=q+2.4
h=p+2
g=k.b
f=k.c
e=f==="tile"
if(e)d=0.35
else d=f==="wood"?0.15:0
u.kZ(new A.r(0,-0.6,n),new A.r(m,1.2,h),g,d,3)
t.n(0,310,new A.cH("Floor","The "+k.a.toLowerCase()+" floor.",new A.r(0,0,n),140))
u.b=0
if(f==="wood")for(f=-q/2,a0=1;a0<8;++a0){e=C.ar(g,D.w,0.25)
e.toString
u.aF(new A.r(f+a0*q/8,0.05,n),new A.r(0.3,0.2,p),e)}else if(e)for(g=-q/2,a0=1;a0<6;++a0){u.aF(new A.r(g+a0*q/6,0.05,n),new A.r(0.3,0.2,p),B.afB)
u.aF(new A.r(0,0.05,a0*p/6),new A.r(q,0.2,0.3),B.afB)}u.x=0
g=f8==="hall"
if(g){a1=Math.min(q*0.5,p*1.5)
a2=p-14
f=-a1/2
e=a1/2
r.push(new A.fh(C.a([new A.r(f,0.5,14),new A.r(e,0.5,14),new A.r(e,0.5,a2),new A.r(f,0.5,a2)],x.o),0,A.hC3(),900,900*(a2-14)/a1,60,-1,i,!1))}u.f=0
u.b=j.$2(f4,300)
a3=u.x=$.dl=$.dl+1
u.hl(new A.r(0,65,-0.6),new A.r(m,130,1.2),o[0],3)
u.x=0
u.b=j.$2(f4,301)
a4=u.x=$.dl=$.dl+1
f=-q
e=f/2
u.hl(new A.r(e-0.6,65,n),new A.r(1.2,130,p),o[1],3)
u.x=0
u.b=j.$2(f4,302)
a5=u.x=$.dl=$.dl+1
d=q/2
u.hl(new A.r(d+0.6,65,n),new A.r(1.2,130,p),o[2],3)
u.x=0
t.n(0,300,B.egi)
t.n(0,301,B.egm)
t.n(0,302,B.egv)
if(g0){u.b=0
u.hl(new A.r(0,65,p+0.6),new A.r(m,130,1.2),o[0],3)}u.f=u.b=0
u.x=a3
u.aD(new A.r(0,2.5,0.4),new A.r(q,5,0.8),B.kN,0.1)
u.x=a4
u.aD(new A.r(e+0.4,2.5,n),new A.r(0.8,5,p),B.kN,0.1)
u.x=a5
u.aD(new A.r(d-0.4,2.5,n),new A.r(0.8,5,p),B.kN,0.1)
u.x=0
u.f=g0?0:3
u.b=j.$2("ceiling",320)
if(g0)o=1
else o=g2==="ceiling"?0.6:0.4
u.d=o
u.hl(new A.r(0,130.6,n),new A.r(m,1.2,h),B.azp[f9.as],2)
u.d=1
u.b=u.f=0
u.x=a3
u.aD(new A.r(0,128,1),new A.r(q,3,1.4),D.c,0.2)
u.x=a4
u.aD(new A.r(e+1,128,n),new A.r(1.4,3,p),D.c,0.2)
u.x=a5
u.aD(new A.r(d-1,128,n),new A.r(1.4,3,p),D.c,0.2)
u.x=0
t.n(0,320,new A.cH("Ceiling","Pick a colour above to paint the ceiling.",new A.r(0,130,n),140))
h=f9.w
a6=D.d.aX(h,new A.fCz())?"left":"right"
if(!g){o=new A.fCK()
a7=p*0.55
if(g0)D.d.v(v,A.nk(o.$0(),0,3.141592653589793,new A.r(0,0,p+0.2)))
D.d.v(v,a6==="right"?A.nk(o.$0(),0,-1.5707963267948966,new A.r(d,0,a7)):A.nk(o.$0(),0,1.5707963267948966,new A.r(e,0,a7)))}for(o=f9.ax,m=f9.at,a0=0;a0<h.length;++a0){a8=h[a0]
if(a8.a)continue
a9=o.h(0,a0)
if(a9==null)a9=m.q(0,a0)?1.25:0
b0=C.a([],w)
b1=new A.eM(b0)
b1.f=1
b1.x=$.dl=$.dl+1
b2=b1.b=600+a0
b1.aF(B.hh1,B.hgK,B.kN)
b3=C.a([],w)
b4=new A.eM(b3)
b4.r=!0
b4.b=b2
if(a9>0.04){b1.b=0
b5=A.i5v(a8.d)
b6=b5.a
b1.aF(B.hf2,B.hb_,b6)
b1.aF(B.hgc,B.hnL,b5.b)
b7=C.ar(b6,D.w,0.25)
b7.toString
b1.aF(B.hff,B.hlm,b7)
b8=-a9
b7=A.ti(B.hnF,b8)
b4.uN(new A.r(-12.5+b7.a,0+b7.b,1.2+b7.c),B.h9n,B.vS,0.15,b8)}else{b1.aD(B.hfj,B.he6,B.vS,0.15)
b1.aD(B.hfq,B.hfO,B.Fv,0.8)
b1.aF(B.hfR,B.aZn,B.Ni)
b1.aF(B.hn_,B.aZn,B.Ni)}b7=new A.fCL(a8,q,p)
D.d.v(v,b7.$1(b0))
D.d.v(v,b7.$1(b3))
t.n(0,b2,new A.cH("Door","Tap the door to go through it.",B.EN,90))}for(o=f9.x,m=o.length,l=0;l<o.length;o.length===m||(0,C.J)(o),++l){b9=o[l]
b0=b9.b
b2=B.hJ.h(0,b0)
b2.toString
b3=C.a([],w)
c0=new A.eM(b3)
c0.r=!0
c0.f=b0==="rug"?1:2
b7=100+b9.a
c0.b=j.$2("furniture",b7)
A.han(c0,b0,B.zF[b9.f])
D.d.v(v,A.nk(A.ibq(b3,0.8),0,b9.e*3.141592653589793/2,new A.r(b9.c,0,b9.d)))
t.n(0,b7,new A.cH(b2.a,y.M,new A.r(b9.c,12,b9.d),90))}u.f=2
u.r=!0
c1=p*0.5
w=C.T(h)
o=d-10
c2=D.k.F(new C.cM(new C.X(h,new A.fCA(),w.k("X<1>")),new A.fCB(),w.k("cM<1,H>")).cG(0,e+30,new A.fCC())+24,e+10,o)
c3=f9.go==="fan"
c4=f9.ga6p()
c5=c4&&f9.gMq()&&f9.fy
u.b=703
if(c3){u.dq(new A.r(0,129.5,c1),new A.r(0,120,c1),1,B.f_,8)
u.cJ(new A.r(0,120,c1),new A.r(0,113,c1),6,D.iG,0.5,14)
w=c5?B.nl:D.dq
u.cJ(new A.r(0,113,c1),new A.r(0,110,c1),3.6,w,0.6,12)}else{w=c5?B.nl:D.dq
u.cJ(new A.r(0,129.5,c1),new A.r(0,127,c1),7,w,0.6,16)}if(c5&&!c3){u.b=0
u.f=3
u.d=0.2
u.Li(new A.r(0,127,c1),new A.r(0,0.5,c1),36,B.nl,!1,14)
u.d=1
u.f=2}c6=c3?"Ceiling fan":"Ceiling light"
if(!c4)c7="It has no power yet. "+(f9.p4.length!==0?"Tap it to wire it.":"The room still needs wiring: use the Wiring button.")
else if(!f9.gMq())c7="It is ready: wire the wall switch to turn it on."
else{w=f9.fy?"It is on. Tap the wall switch (or tap this) to turn it off.":"It is off. Tap the wall switch (or tap this) to turn it on."
c7=w}t.n(0,703,new A.cH(c6,c7,new A.r(0,122,c1),80))
w=f8==="bathroom"
m=!w
c8=!m||f8==="kitchen"||f9.p4==="gfci"
h=f9.gao9()
b0=c8?f5:f6
b2=f9.p4.length!==0||f9.IA(1)
b3=c8?f5:f6
b3=C.a([new C.dW([0,700,f/4,h,b0]),new C.dW([1,701,q/4,b2,b3])],x.az)
for(h=f9.id,a0=0;a0<h.length;++a0){f=h[a0]
b0=f.a
if(b0!=="switch"){b2=f.c
b0=b2.c>=2&&A.x7(A.oi(b0),b2).a==="ok"
b2=h[a0].a==="gfci"?"Added GFCI outlet":"Added outlet"
b3.push(new C.dW([2+a0,800+a0,f.b,b0,b2]))}}u.f=1
u.r=!1
for(f=b3.length,b0=f9.fx,l=0;l<b3.length;b3.length===f||(0,C.J)(b3),++l){b2=b3[l].a
a0=b2[0]
c9=b2[1]
d0=b2[2]
d1=b2[3]
d2=b2[4]
u.x=$.dl=$.dl+1
u.b=c9
u.e=0.4
u.d=0.55
d3=2
if(!d1)if(a0<2){b2=f9.p4
if(b2.length!==0)b2=d3
else{b2=f9.CW
if(b2!=null)b2=b2.bjK(a0)
else b2=f9.ay?0:2}d3=b2}else d3=0
if(d1)b2=D.bg
else b2=d3===1?D.az:D.ax
u.aF(new A.r(d0,14,0.25),B.hbJ,b2)
u.d=1
u.e=0
b2=d1?B.N4:D.iG
u.aD(new A.r(d0,14,0.9),B.hhE,b2,0.25)
u.b=0
for(d4=0;d4<2;++d4)for(b2=14+F.hg[d4]*2.8,d5=0;d5<2;++d5)u.aF(new A.r(d0+B.RZ[d5],b2,1.7),B.hns,B.ai_)
u.aF(new A.r(d0,14,1.7),B.hhC,D.dq)
u.x=0
if(!d1)b2="This one is not wired yet. Tap it to wire it."
else b2=b0.h(0,a0)==null?"Tap it to plug something in.":"Tap it to plug something else in, or to unplug."
t.n(0,c9,new A.cH(d2,b2,new A.r(d0,14,2),60))}f=C.a([new C.b5(702,c2,f9.gMq())],x.al)
for(a0=0;a0<h.length;++a0){b2=h[a0]
b7=b2.a
if(b7==="switch"){d6=b2.c
b7=d6.c>=2&&A.x7(A.oi(b7),d6).a==="ok"
f.push(new C.b5(800+a0,b2.b,b7))}}for(h=f.length,l=0;l<f.length;f.length===h||(0,C.J)(f),++l){b2=f[l]
d0=b2.b
d1=b2.c
u.x=$.dl=$.dl+1
c9=u.b=b2.a
u.e=0.4
u.d=0.55
d7=2
if(!d1)if(c9===702){b2=f9.p4
if(b2.length!==0)b2=d7
else{b2=f9.CW
if(b2!=null)b2=b2.bjK(3)
else b2=f9.ay?0:2}d7=b2}else d7=0
if(d1)b2=D.bg
else b2=d7===1?D.az:D.ax
u.aF(new A.r(d0,48,0.25),B.hdN,b2)
u.d=1
u.e=0
b2=d1?B.N4:D.iG
u.aD(new A.r(d0,48,0.9),B.hcS,b2,0.25)
u.aF(new A.r(d0,f9.fy&&d1?49.2:46.8,1.9),B.hcJ,B.ajW)
u.x=0
if(!d1)b2="Not wired yet. Tap it to wire it."
else if(f9.fy)b2="On. Tap to turn the "+(c3?"fan":"light")+" off."
else b2="Off. Tap to turn the "+(c3?"fan":"light")+" on."
t.n(0,c9,new A.cH("Light switch",b2,new A.r(d0,48,2),60))}if(f9.p4.length===0&&!f9.gkT()){if(f9.p4.length===0)h=f9.gkT()
else h=!0
if(h)d8=D.Z
else{h=C.a([],x.s)
if(!f9.gao9())h.push("outlet 1")
if(!(f9.p4.length!==0||f9.IA(1)))h.push("outlet 2")
if(!f9.ga6p())h.push(f9.go==="fan"?"ceiling fan":"ceiling light")
if(!f9.gMq())h.push("switch")
d8=h}h=d8.length===0?"\u26a1 No power: needs wiring":"\u26a1 Still to wire: "+D.d.aN(d8,", ")
s.push(new A.hd(new A.r(0,104,c1),h,D.bC,0))}h=!1
if(f9.p4.length!==0)if(!f9.gzt()){h=f9.p4
h=!(h==="ptrap"||h==="faucet")}if(h)s.push(new A.hd(new A.r(0,40,14),"\ud83d\udc46 Tap the red one to wire it",D.bC,0))
u.f=2
u.r=!0
for(h=b3.length,f=x.o,b2=f9.a,l=0;l<b3.length;b3.length===h||(0,C.J)(b3),++l){b7=b3[l].a
a0=b7[0]
d0=b7[2]
d1=b7[3]
d9=b0.h(0,a0)
if(d9==null||!d1)continue
e0=A.aQg(d9)
b7=u.b=720+a0
u.iD(C.a([new A.r(d0,12,1.8),new A.r(d0,6,3),new A.r(d0,2,11)],f),0.3,B.MO,!1,0.2,6)
d6=e0.d
e1=d6<=0
if(!e1||e0.e){b8=d6*0.56
e2=$.dl+1
u.x=$.dl=e2
u.aD(new A.r(d0,2,15),new A.r(d6*0.45,4,14),B.f_,0.3)
u.aD(new A.r(d0,8,15),B.hb6,B.f_,0.3)
e3=12+b8/2
u.aD(new A.r(d0,e3,15),new A.r(d6,b8,3),E.y5,0.5)
d6=(d6-3.5)/2
e4=d0-d6
e5=(b8-3.5)/2
e6=e3+e5
d6=d0+d6
e5=e3-e5
r.push(new A.fh(C.a([new A.r(e4,e6,16.6),new A.r(d6,e6,16.6),new A.r(d6,e5,16.6),new A.r(e4,e5,16.6)],f),b7,new A.fCD(a0*7+b2),320,180,9,2,e2,!0))
u.x=0}else{d6=e0.a
if(d6==="lamp"){u.cJ(new A.r(d0,0,14),new A.r(d0,1,14),6,B.Fy,0.4,14)
u.cJ(new A.r(d0,1,14),new A.r(d0,22,14),1,B.yh,0.5,8)
d6=f9.fy?B.nl:L.MY
u.wW(new A.r(d0,20,14),new A.r(d0,32,14),9,d6,!1,!0,5.5,0.2,16)}else{e3=d6==="washer"
if(e3||d6==="dryer"){d6=e3?B.Zf:B.ZB
u.aD(new A.r(d0,15,20),B.aXW,d6,0.4)
u.aD(new A.r(d0,28,31.2),B.h7K,B.Y3,0.3)
u.cJ(new A.r(d0,14,31),new A.r(d0,14,31.8),8.5,B.XX,0.8,20)
d6=e3?B.Y6:B.Zv
u.cJ(new A.r(d0,14,31.7),new A.r(d0,14,32.2),6.5,d6,0.9,20)}else if(d6==="range"){u.aD(new A.r(d0,15,20),B.aXW,B.ye,0.7)
u.aD(new A.r(d0,13,31.2),B.hby,D.vV,0.9)
u.aD(new A.r(d0,22,32.2),B.h7k,B.MB,0.9)
u.aD(new A.r(d0,30.3,20),B.hf3,B.Yt,0.5)
for(d4=0;d4<2;++d4)for(d6=d0+B.dpZ[d4],d5=0;d5<2;++d5){e7=B.ckq[d5]
u.cJ(new A.r(d6,30.8,e7),new A.r(d6,31.1,e7),3.6,B.Z4,0.3,14)}}else{u.aD(new A.r(d0,9,15),B.h6u,B.o2,0.1)
if(d6==="toaster"){u.aD(new A.r(d0,23,15),B.h6m,B.hj,0.8)
u.aF(new A.r(d0,28.2,15),B.hj4,B.Zu)}else{u.wV(new A.r(d0-7,21,15),new A.r(d0+7,21,15),3.6,B.w3,3,0.6,12)
u.aD(new A.r(d0-8,14.5,15),B.hfK,B.w3,0.6)}}}}d6=!e1||e0.e?"It is playing NGMY ads. Tap it to watch full screen with the remote.":"It is plugged in and running. Tap the outlet to unplug it or plug in something else."
t.n(0,b7,new A.cH(e0.b,d6,new A.r(d0,16,14),90))}u.f=1
u.r=!1
e8=new A.fCF(f9,u,q,r,t)
e8.$2(f9.k1,0)
if(g){e8.$2(f9.k2,1)
e8.$2(f9.k1,2)
h=f9.k2
e8.$2(h==null?f9.k1:h,3)}if(g)for(e9=p-14,h=d-14,a0=0;a0<4;++a0){f0=(D.o.E(a0,2)===0?-1:1)*h
f1=a0<2?14:e9
f2=Math.atan2(-f0,-(n-f1)*-1)
u.f=2
u.r=!1
u.x=$.dl=$.dl+1
g=19e3+a0
u.b=g
u.aF(new A.r(f0,125,f1),B.h9Y,D.iG)
u.uN(new A.r(f0,118,f1),B.h5y,D.bP,0.4,f2)
u.uN(new A.r(f0+Math.sin(f2)*8.5,118,f1+Math.cos(f2)*8.5),B.hb4,D.av,0.6,f2)
u.ee(new A.r(f0-Math.sin(f2)*5+Math.cos(f2)*3,122,f1-Math.cos(f2)*5-Math.sin(f2)*3),1.4,D.ax,3,5)
u.b=u.x=0
t.n(0,g,new A.cH("Hall camera","Tap it and you look from here, like your eyes.",new A.r(f0,118,f1),60))}u.f=2
u.r=!0
if(!m||f8==="kitchen"){f8=f9.p4
f8=f8.length===0||f8==="ptrap"||f8==="faucet"}else f8=!1
if(f8){d1=f9.gjW()
f8=new A.fCM(u)
if(w){f3=e+17
if(d1){u.b=710
u.wV(new A.r(6,0.5,14),new A.r(6,15,14),8,B.BA,5.6,0.8,18)
u.cJ(new A.r(6,15,14),new A.r(6,16,14),9,B.N6,0.8,18)
u.aD(new A.r(6,21,5),B.h6H,B.BA,0.8)
u.aD(new A.r(6,28,5),B.heQ,B.N6,0.8)}else{u.b=710
u.d=0.3
u.f=3
u.aF(new A.r(6,14,9),B.h6x,D.b0)
u.d=1
u.f=2
f8.$2(-4,8)}u.b=711
A.hv2(u,new A.r(34,14,10),30,28,18,B.o2)
A.b7C(u,11,D.c,18,20,B.hj,B.YI,32,7,d1,1,2,30,0.6,34,10)
w=!d1
if(w){f8.$2(28,18)
f8.$2(40,18)}u.b=712
if(d1){u.aD(new A.r(f3,8,38),B.aY2,B.ZD,0.7)
u.aD(new A.r(f3,16.2,38),B.hlh,B.Yu,0.8)
u.cJ(new A.r(f3,30,3),new A.r(f3,52,3),0.7,B.hj,0.9,8)
u.cJ(new A.r(f3,52,3),new A.r(f3,52,10),0.7,B.hj,0.9,8)}else{u.d=0.3
u.f=3
u.aF(new A.r(f3,8,38),B.aY2,D.b0)
u.d=1
u.f=2
f8.$2(f3-4,34)
f8.$2(f3+4,34)}f8=d1?"Fitted on its flange with a wax ring, and the supply hose joins the shut-off valve.":"There is no toilet yet: only the flange and the water stub. Use the Plumbing button to fit it."
t.n(0,710,new A.cH("Toilet",f8,new A.r(6,14,10),70))
f8=d1?"The faucet, the hoses and the P-trap are fitted.":"The sink is not plumbed. Use the Plumbing button."
t.n(0,711,new A.cH("Vanity sink",f8,new A.r(34,28,10),70))
f8=d1?"The bath is in and connected.":"The bath is not connected yet."
t.n(0,712,new A.cH("Bath",f8,new A.r(f3,10,38),90))
if(w)s.push(new A.hd(new A.r(0,40,14),f7,D.bm,0))}else{u.b=0
u.aD(new A.r(e+15,36,14),B.h7G,B.ahM,0.6)
u.aF(new A.r(e+28.5,36,14.4),B.hhd,D.dq)
u.aD(new A.r(o,15,14),B.h78,B.ag6,0.1)
u.aD(new A.r(o,31,14),B.h7l,B.f_,0.5)
u.aD(new A.r(d-15,32.4,14),B.aYy,D.i7,0.3)
u.aD(new A.r(d-5,32.4,14),B.aYy,D.i7,0.3)
u.b=713
A.hv2(u,new A.r(30,15,14),40,30,26,B.o2)
A.b7C(u,17,D.e5,28,28,B.hj,B.MK,42,8.5,d1,1,2,32,0.6,30,14)
w=!d1
if(w){f8.$2(22,18)
f8.$2(38,18)}f8=d1?"The faucet, the hoses and the drain are fitted.":"The kitchen sink is not plumbed yet. Use the Plumbing button."
t.n(0,713,new A.cH("Kitchen sink",f8,new A.r(30,30,14),70))
if(w)s.push(new A.hd(new A.r(30,48,14),f7,D.bm,0))}}for(f8=D.d.gag(g4),w=new C.eJ(f8,new A.fCE(f9));w.C();){o=f8.gR(0)
t.n(0,900+o.a,new A.cH(o.r,"Tap to see how they are, feed them or give medicine.",new A.r(o.c,36,o.d),90))}return new A.qU(v,t,s,r,new C.cu([e,d,0,p]),!1,0)},
kK(d,e,f,g,h,i,j,k,l){var w=-h/2,v=i/2,u=h/2,t=-i/2
d.cZy(e.a7(0,f.aO(0,w)).a7(0,g.aO(0,v)),e.a7(0,f.aO(0,u)).a7(0,g.aO(0,v)),e.a7(0,f.aO(0,u)).a7(0,g.aO(0,t)),e.a7(0,f.aO(0,w)).a7(0,g.aO(0,t)),j,k,l)},
i8y(d7,d8,d9,e0,e1,e2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5=-158,c6=1000,c7=1200,c8=x.z,c9=C.a([],c8),d0=new A.eM(c9),d1=x.S,d2=C.U(d1,x.q),d3=C.a([],x.E),d4=d7.geb(0),d5=d7.gh3(0),d6=new A.fvv(d9)
d0.f=0
d0.b=d6.$2("floor",310)
d0.hl(new A.r(0,-0.6,d5/2-60),new A.r(d4*2.5,1.2,d5*2.5),B.Y9,5)
d2.n(0,310,B.egq)
d0.b=0
d0.f=1
d0.aF(new A.r(0,0.15,60),B.hcH,E.Fz)
for(w=0;w<6;++w)d0.aF(new A.r(0,0.35,8+w*22),B.hhI,B.br9)
d0.f=2
v=$.dl+1
d0.x=$.dl=v
d0.hl(B.h4S,B.h7u,B.MF,3)
d0.aF(B.h4n,B.h7v,B.afj)
u=new A.fvw(d0)
t=new A.fvr(d0)
for(s=0;s<4;++s){r=B.dq7[s]
u.$5(B.dZ,B.h4,B.hO,r,62)
u.$5(B.dZ,B.h4,B.hO,r,122)}t.$5(B.dZ,B.h4,B.hO,0,600)
for(s=0;s<2;++s){r=B.aBZ[s]
u.$5(B.abG,B.p_,B.pT,r,62)
u.$5(B.abG,B.p_,B.pT,r,122)}t.$5(B.abG,B.p_,B.pT,0,0)
for(s=0;s<2;++s){q=B.a5M[s]
u.$5(B.h5J,B.pT,B.h4,q,62)
u.$5(B.hjZ,B.hO,B.p_,-q,62)}p=C.a([],c8)
new A.eM(p).kZ(B.dZ,B.h7D,B.MI,0.1,2)
d0.a7p(B.hjP,B.hid,B.hhc,B.MF,B.h4,!1)
d0.a7p(B.hhj,B.ha5,B.hhM,B.MF,B.p_,!1)
d0.x=0
d0.r=!0
D.d.v(c9,A.nk(p,0.5,0,B.h3v))
D.d.v(c9,A.nk(p,-0.5,0,B.h3w))
d0.aF(B.h3y,B.h7C,B.YE)
d0.aF(B.haA,B.h6e,B.aiU)
d0.aF(B.haB,B.aXO,B.qk)
d0.aF(B.h49,B.h9u,E.Fz)
d0.dq(B.hkd,B.hke,2.2,B.kN,8)
d0.dq(B.h7a,B.h7b,2.2,B.kN,8)
d0.aD(B.h53,B.h9G,B.MI,0.1)
d2.n(0,600,B.eh5)
p=x.a
o=C.a([],p)
n=new A.fvs(o,v)
n.$4(B.hcn,B.hhU,B.hiJ,B.hga)
n.$5$poster(B.haw,B.h9b,B.hbx,B.hiv,1)
n.$5$poster(B.hdD,B.hdW,B.hc_,B.his,2)
n.$5$poster(B.hiE,B.hnU,B.hfF,B.hhT,0)
d0.r=!0
m=C.U(d1,d1)
for(d1=d7.x,l=d1.length,s=0;s<d1.length;d1.length===l||(0,C.J)(d1),++s){k=d1[s]
j=k.a
i=100+j
if(e2.q(0,i))continue
h=k.b
if(D.d.q(B.Ip,h)){d2.n(0,i,new A.cH(B.hJ.h(0,h).a,"It wanders about. Move it with the arrow buttons or take it out.",new A.r(k.c,12,k.d),140))
continue}g=B.hJ.h(0,h)
g.toString
f=C.a([],c8)
e=new A.eM(f)
d=e.r=!0
e.f=D.d.q(B.a5Y,h)?1:2
a0=h==="hospital"
e.b=(!a0?h==="shop":d)?i:d6.$2("furniture",i)
A.han(e,h,B.zF[k.f])
if(f.length!==0)m.n(0,j,D.d.gH(f).z)
D.d.v(c9,A.nk(f,0,k.e*3.141592653589793/2,new A.r(k.c,0,k.d)))
if(a0)j="The hospital: tap it to see the beds and treat the patients."
else j=h==="shop"?"The shop: tap it to buy food and medicine.":y.M
d2.n(0,i,new A.cH(g.a,j,new A.r(k.c,12,k.d),140))}a1=C.a([],x._)
for(l=D.d.gag(d1),j=new C.eJ(l,new A.fuP()),i=d7.k3;j.C();){h=l.gR(0)
g=h.a
a2=i.q(0,g)
f=h.b==="pole"
d=h.c
a0=h.d
a3=f?new A.r(d+20,86,a0):new A.r(d,55,a0)
d=C.a([],c8)
a4=new A.eM(d)
a0=f?4.6:4.2
a5=a2?D.ec:B.nl
a4.eK(a3,a0,a5,3,6,a2?0.1:0)
if(!a2){a4.d=0.2
a4.eK(a3,10,B.nl,2,6,0)
a4.d=1}D.d.v(c9,d)
if(a2)d3.push(new A.hd(new A.r(a3.a+0,a3.b+14,a3.c+0),"\u26a1 Light out: tap to go and fix it",D.bC,2e4+g))
if(f)a1.push(h)}D.d.aZ(a1,new A.fuQ())
for(l=x.o,w=0;a6=w+1,a6<a1.length;w=a6){a7=a1[w]
a8=a1[a6]
if(Math.abs(a7.d-a8.d)>1||Math.abs(a8.c-a7.c)>170)continue
j=C.a([],c8)
a9=new A.eM(j)
for(s=0;s<3;++s){b0=B.aBU[s]
i=a7.c
h=a7.d
g=a8.c
a9.iD(C.a([new A.r(i+b0,121,h),new A.r((i+g)/2+b0,117,h),new A.r(g+b0,121,h)],l),0.35,D.av,!1,0,4)}D.d.v(c9,j)}for(j=D.d.gag(d1),i=new C.eJ(j,new A.fuR(d7)),h=d7.cy;i.C();){g=j.gR(0)
f=g.c
d=g.b==="hq"?190:130
a0=g.d
g=g.a
d3.push(new A.hd(new A.r(f,d,a0+40),"\u26a1 Level "+C.w(h.h(0,g))+" has no power: tap to go and fix it",D.bC,2e4+g))}for(j=D.d.gag(d1),i=new C.eJ(j,new A.fv1(d7));i.C();){h=j.gR(0)
g=h.b
f=B.hJ.h(0,g)
f.toString
d=h.c
g=g==="bighouse"?120:82
d3.push(new A.hd(new A.r(d,g,h.d),"\u26a1 No power: tap to go in and fix it",D.bC,2e4+h.a))
g=C.a([],c8)
b1=new A.eM(g)
b1.d=0.45
d=h.c
b1.aF(new A.r(d,30,h.d),new A.r(f.c+2,60,f.d+2),D.df)
b1.d=1
D.d.v(c9,g)}if(d7.c==="outside")D.d.v(c9,A.ief())
b2=C.a([],p)
for(c8=D.d.gag(d1),d1=new C.eJ(c8,new A.fvc());d1.C();){p=c8.gR(0)
d4=new A.fvu(p.e*3.141592653589793/2,p)
b3=m.h(0,p.a)
if(b3==null)b3=0
j=p.b
if(j==="billboard"){b2.push(new A.fh(C.a([d4.$3(-33,62.5,2),d4.$3(33,62.5,2),d4.$3(33,31.5,2),d4.$3(-33,31.5,2)],l),0,new A.fvl(p),960,450,4,2,b3,!1))
b2.push(new A.fh(C.a([d4.$3(33,62.5,-2),d4.$3(-33,62.5,-2),d4.$3(-33,31.5,-2),d4.$3(33,31.5,-2)],l),0,new A.fvm(p),960,450,4,2,b3,!1))}else{i=j==="townsign"
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
b2.push(new A.fh(C.a([d4.$3(p,j,b7),d4.$3(b4,j,b7),d4.$3(b4,i,b7),d4.$3(p,i,b7)],l),0,new A.fvn(b8),b9,c0,4,2,b3,!1))
h=-b7
b2.push(new A.fh(C.a([d4.$3(b4,j,h),d4.$3(p,j,h),d4.$3(p,i,h),d4.$3(b4,i,h)],l),0,new A.fvo(b8),b9,c0,4,2,b3,!1))}else if(j==="adboard"){b2.push(new A.fh(C.a([d4.$3(c5,195,3.6),d4.$3(158,195,3.6),d4.$3(158,90,3.6),d4.$3(c5,90,3.6)],l),0,new A.fvp(p),1280,424,4,2,b3,!1))
b2.push(new A.fh(C.a([d4.$3(158,195,-3.6),d4.$3(c5,195,-3.6),d4.$3(c5,90,-3.6),d4.$3(158,90,-3.6)],l),0,new A.fvq(p),1280,424,4,2,b3,!1))}else if(j==="tower"){c1=210+D.o.E(B.zF[p.f].l(),5)*24
j=c1-8
i=c1-54
b2.push(new A.fh(C.a([d4.$3(-40,j,35.9),d4.$3(40,j,35.9),d4.$3(40,i,35.9),d4.$3(-40,i,35.9)],l),0,new A.fuS(p),800,460,8,2,b3,!1))
b2.push(new A.fh(C.a([d4.$3(40,j,-35.9),d4.$3(-40,j,-35.9),d4.$3(-40,i,-35.9),d4.$3(40,i,-35.9)],l),0,new A.fuT(p),800,460,8,2,b3,!1))
b2.push(new A.fh(C.a([d4.$3(50.9,j,28),d4.$3(50.9,j,-28),d4.$3(50.9,i,-28),d4.$3(50.9,i,28)],l),0,new A.fuU(p),640,460,8,2,b3,!1))
b2.push(new A.fh(C.a([d4.$3(-50.9,j,-28),d4.$3(-50.9,j,28),d4.$3(-50.9,i,28),d4.$3(-50.9,i,-28)],l),0,new A.fuV(p),640,460,8,2,b3,!1))
i=c1+58
j=c1+22
b2.push(new A.fh(C.a([d4.$3(-40,i,1.7),d4.$3(40,i,1.7),d4.$3(40,j,1.7),d4.$3(-40,j,1.7)],l),0,new A.fuW(p),960,400,8,2,b3,!1))
b2.push(new A.fh(C.a([d4.$3(40,i,-1.7),d4.$3(-40,i,-1.7),d4.$3(-40,j,-1.7),d4.$3(40,j,-1.7)],l),0,new A.fuX(p),960,400,8,2,b3,!1))}else if(j==="hq"){b2.push(new A.fh(C.a([d4.$3(-70,108,45.9),d4.$3(70,108,45.9),d4.$3(70,52,45.9),d4.$3(-70,52,45.9)],l),0,new A.fuY(),c6,400,8,2,b3,!1))
b2.push(new A.fh(C.a([d4.$3(-48,215,30.2),d4.$3(48,215,30.2),d4.$3(48,175,30.2),d4.$3(-48,175,30.2)],l),0,new A.fuZ(),900,380,8,2,b3,!1))
b2.push(new A.fh(C.a([d4.$3(70,108,-45.9),d4.$3(-70,108,-45.9),d4.$3(-70,52,-45.9),d4.$3(70,52,-45.9)],l),0,new A.fv_(),c6,400,8,2,b3,!1))
b2.push(new A.fh(C.a([d4.$3(48,215,-30.2),d4.$3(-48,215,-30.2),d4.$3(-48,175,-30.2),d4.$3(48,175,-30.2)],l),0,new A.fv0(),900,380,8,2,b3,!1))
b2.push(new A.fh(C.a([d4.$3(-54,328,1.7),d4.$3(54,328,1.7),d4.$3(54,294,1.7),d4.$3(-54,294,1.7)],l),0,new A.fv2(p),c6,360,8,2,b3,!1))
b2.push(new A.fh(C.a([d4.$3(54,328,-1.7),d4.$3(-54,328,-1.7),d4.$3(-54,294,-1.7),d4.$3(54,294,-1.7)],l),0,new A.fv3(p),c6,360,8,2,b3,!1))
b2.push(new A.fh(C.a([d4.$3(85.9,118,36),d4.$3(85.9,118,-36),d4.$3(85.9,62,-36),d4.$3(85.9,62,36)],l),0,new A.fv4(p),720,560,8,2,b3,!1))
b2.push(new A.fh(C.a([d4.$3(-85.9,118,-36),d4.$3(-85.9,118,36),d4.$3(-85.9,62,36),d4.$3(-85.9,62,-36)],l),0,new A.fv5(p),720,560,8,2,b3,!1))}else if(j==="store"){b2.push(new A.fh(C.a([d4.$3(-54,85,37.7),d4.$3(54,85,37.7),d4.$3(54,67,37.7),d4.$3(-54,67,37.7)],l),0,new A.fv6(),900,150,6,2,b3,!1))
b2.push(new A.fh(C.a([d4.$3(-72,152,30.3),d4.$3(72,152,30.3),d4.$3(72,96,30.3),d4.$3(-72,96,30.3)],l),0,new A.fv7(),c7,470,8,2,b3,!1))
b2.push(new A.fh(C.a([d4.$3(72,152,25.7),d4.$3(-72,152,25.7),d4.$3(-72,96,25.7),d4.$3(72,96,25.7)],l),0,new A.fv8(),c7,470,8,2,b3,!1))}else if(j==="ubstation"){b2.push(new A.fh(C.a([d4.$3(40,106,31.9),d4.$3(76,106,31.9),d4.$3(76,86,31.9),d4.$3(40,86,31.9)],l),0,new A.fv9(),480,270,8,2,b3,!1))
b2.push(new A.fh(C.a([d4.$3(76,106,28.1),d4.$3(40,106,28.1),d4.$3(40,86,28.1),d4.$3(76,86,28.1)],l),0,new A.fva(),480,270,8,2,b3,!1))}else if(j==="dmv"){b2.push(new A.fh(C.a([d4.$3(-50,85,38.6),d4.$3(50,85,38.6),d4.$3(50,67,38.6),d4.$3(-50,67,38.6)],l),0,new A.fvb(),900,160,8,2,b3,!1))
b2.push(new A.fh(C.a([d4.$3(-72,152,30.3),d4.$3(72,152,30.3),d4.$3(72,96,30.3),d4.$3(-72,96,30.3)],l),0,new A.fvd(),c7,470,8,2,b3,!1))
b2.push(new A.fh(C.a([d4.$3(72,152,25.7),d4.$3(-72,152,25.7),d4.$3(-72,96,25.7),d4.$3(72,96,25.7)],l),0,new A.fve(),c7,470,8,2,b3,!1))}else if(j==="gasstation")b2.push(new A.fh(C.a([d4.$3(-86,107,35.7),d4.$3(-54,107,35.7),d4.$3(-54,85,35.7),d4.$3(-86,85,35.7)],l),0,new A.fvf(),480,330,6,2,b3,!1))
else for(c2=0;c2<2;++c2){c3=c2===0?-40:40
j=c3-26
i=c3+26
b2.push(new A.fh(C.a([d4.$3(j,70,60.7),d4.$3(i,70,60.7),d4.$3(i,40,60.7),d4.$3(j,40,60.7)],l),0,new A.fvg(p,c2),720,520,9,2,b3,!1))}}}for(c8=D.d.gag(e1),d1=new C.eJ(c8,new A.fvh(d7));d1.C();){p=c8.gR(0)
d3.push(new A.hd(new A.r(p.c,82,p.d),p.Q,D.cS,0))}for(c8=D.d.gag(e1),d1=new C.eJ(c8,new A.fvi(d7));d1.C();){p=c8.gR(0)
d3.push(new A.hd(new A.r(p.c,80,p.d),"\ud83d\udcde Help!",D.bC,0))}c8=d8===0
d1=c8?"\u2705 The house is finished":"\ud83c\udfe0 "+d8+" rooms still need work"
d3.push(new A.hd(B.h3Q,d1,c8?D.cV:D.e0,0))
c4=d0.x=$.dl=$.dl+1
for(s=0;s<2;++s){r=B.aBZ[s]
d0.dq(new A.r(r,0,-118),new A.r(r,215,-118),3,D.iG,8)}d0.aD(B.AQ,B.h7A,D.av,0.3)
d0.x=0
o.push(new A.fh(B.cRS,0,new A.fvj(),c6,336,4,2,c4,!1))
o.push(new A.fh(B.dmC,0,new A.fvk(),c6,336,4,2,c4,!1))
c8=C.C(o,x.fd)
D.d.v(c8,b2)
return new A.qU(c9,d2,d3,c8,null,!1,4000)},
ifi(a5,a6,a7,a8,a9,b0,b1,b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=x.z,a3=C.a([],a2),a4=new A.eM(a3)
a4.r=!0
if(a5.c==="outside"){w=new A.fFZ(b1)
v=b1!=null
if(v&&b1.a===a5.a)A.x_(a4,b1,a6,b2,!0,0,null)
if(a7&&v&&b1.a===a5.a){v=C.a([],a2)
u=b1.b
t=b1.d
new A.eM(v).aF(new A.r(u+Math.sin(t)*9,46+b1.y,b1.c+Math.cos(t)*9),B.aXM,B.iC)
D.d.v(a3,v)}if(a9!=null){v=C.a([],a2)
s=new A.eM(v)
s.r=!0
u=a9.a
A.han(s,u[0],B.zF[u[4]])
D.d.v(a3,A.nk(v,0,u[3]-1.5707963267948966,new A.r(u[1],0,u[2])))}for(v=D.d.gag(a5.x),u=new C.eJ(v,new A.fFW()),t=a6*6,r=b0==="furniture";u.C();){q=v.gR(0)
p=q.a
o=a6*(0.25+D.o.E(p,5)*0.04)+p*1.7
n=q.c
m=Math.cos(o)
l=q.d
k=Math.sin(o)
j=Math.atan2(-Math.sin(o),Math.cos(o))
i=C.a([],a2)
h=new A.eM(i)
h.r=!0
h.b=r?100+p:0
A.ht6(h,q.b,B.zF[q.f],Math.sin(t+p)*0.5)
D.d.v(a3,A.nk(i,0,j,new A.r(n+m*10,0,l+k*10)))}for(v=D.d.gag(b3),u=new C.eJ(v,new A.fFX(a5)),t=a5.a;u.C();){r=v.gR(0)
q=r.c
p=r.d
n=r.e
m=r.f
l=r.a
A.x_(a4,new A.yh(t,q,p,n,!1,!1,!1,!1,!1,0,!1,!1,"","",-1,0,-1,0),a6,m,w.$2(q,p),900+l,m.c)
A.i2a(a4,r,a6)}for(v=a8.length,g=0;g<a8.length;a8.length===v||(0,C.J)(a8),++g){f=a8[g]
u=f.b
r=f.c
q=f.d
A.x_(a4,new A.yh(t,u,r,q,f.f,!1,!1,!1,!1,0,!1,!1,"","",-1,0,-1,f.e),a6,f.w,w.$2(u,r),0,f.x)
if(f.r){p=C.a([],a2)
new A.eM(p).aF(new A.r(u+Math.sin(q)*9,46,r+Math.cos(q)*9),B.h5Y,F.f0)
D.d.v(a3,p)}}return a3}if(b1!=null&&b1.a===a5.a)A.x_(a4,b1,a6,b2,!0,0,null)
for(a2=D.d.gag(b3),v=new C.eJ(a2,new A.fFY(a5)),u=a5.a,t=a6*0.5;v.C();){r=a2.gR(0)
q=r.y
p=q>0
e=p?Math.sin(t+r.a)*q:0
q=r.c
n=r.d
if(p)m=Math.cos(t+r.a)>=0?1.5707963267948966:-1.5707963267948966
else m=r.x?0.5:r.e
A.x_(a4,new A.yh(u,q+e,n,m,p,!1,!1,!1,r.x,0,!1,!1,"","",-1,0,-1,0),a6,r.f,!0,900+r.a,null)}d=a5.gh3(0)
if(a5.go==="fan"){a0=a5.ga6p()&&a5.gMq()&&a5.fy?a6*7:0
a4.b=703
for(a2=d*0.5,a1=0;a1<4;++a1){o=a0+a1*3.141592653589793/2
a4.uN(new A.r(Math.cos(o)*15,115,a2+Math.sin(o)*15),B.hmT,B.o2,0.1,-o)}}return a3},
i5v(d){var w
A:{if(5===d){w=B.eQF
break A}if(9===d){w=B.eVP
break A}if(10===d){w=B.eIS
break A}if(11===d){w=B.eWO
break A}if(2===d||4===d||8===d){w=B.eyo
break A}w=B.eLy
break A}return w},
fBp(b0,b1,b2,b3,b4,b5,b6,b7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9
for(w=b2.a,v=b2.b,u=b2.c,t=b1.a,s=b1.b,r=b1.c,q=b3.a,p=q*0.1,o=b3.b,n=o*0.1,m=b3.c,l=m*0.1,k=q*0.2,j=o*0.2,i=m*0.2,q*=0.3,o*=0.3,m*=0.3,h=-b4/2,g=b5-1,f=b5===1,e=0;e<b5;++e){d=f?0:h+b4*e/g
for(a0=b6.length,a1=s+v*d,a2=t+w*d+0,a3=r+u*d+0,a4=a2+p,a5=a3+l,a6=a2+k,a7=a3+i,a2+=q,a3+=m,a8=0;a8<b6.length;b6.length===a0||(0,C.J)(b6),++a8){a9=a1+b6[a8]
A.kK(b0,new A.r(a4,a9+n,a5),b2,B.eb,14,17,B.kN,b3,0)
A.kK(b0,new A.r(a6,a9+j,a7),b2,B.eb,11,14,b7,b3,0.6)
A.kK(b0,new A.r(a2,a9+o,a3),b2,B.eb,11,0.9,B.kN,b3,0)}}},
htC(a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0
switch(a2){case"shop":w=B.f4t
break
case"hospital":w=B.f4o
break
case"firestation":w=B.f45
break
case"school":w=B.f3Y
break
default:w=B.f3H
break}w=w.a
v=w[0]
u=w[1]
t=w[2]
s=w[3]
r=w[4]
q=u/2
p=v/2
a1.x=$.dl=$.dl+1
a1.hl(new A.r(0,t/2,0),new A.r(v,t,u),s,2)
a1.aF(new A.r(0,2.5,0),new A.r(v+3,5,u+3),B.afj)
w=a2==="hospital"
if(w)o=C.a([14,30,46],x.n)
else if(a2==="school"){n=C.a([14,32],x.n)
o=n}else{n=x.n
n=a2==="house2"?C.a([26],n):C.a([22],n)
o=n}m=D.o.F(D.k.bh(v/24),2,5)
n=a2==="firestation"
l=n?C.a([34],x.n):o
k=v-30
A.fBp(a1,new A.r(0,0,q).a7(0,B.dZ),B.h4,B.hO,k,m,l,B.i6)
j=q+0.4
if(n){A.kK(a1,new A.r(-14,17,j),B.h4,B.eb,34,34,D.hp,B.hO,0.2)
for(i=q+0.5,h=0;h<6;++h)A.kK(a1,new A.r(-14,4+h*6,i),B.h4,B.eb,33,0.8,D.dq,B.hO,0)
A.kK(a1,new A.r(24,15,j),B.h4,B.eb,14,30,B.vS,B.hO,0)}else{A.kK(a1,new A.r(0,14,q+0.3),B.h4,B.eb,18,28,B.kN,B.hO,0)
A.kK(a1,new A.r(0,13,j),B.h4,B.eb,14,26,B.vS,B.hO,0.2)}switch(a2){case"hospital":i=t-8
A.kK(a1,new A.r(0,i,j),B.h4,B.eb,30,9,D.bC,B.hO,0)
j=q+0.5
A.kK(a1,new A.r(0,i,j),B.h4,B.eb,24,2.6,D.c,B.hO,0)
A.kK(a1,new A.r(0,i,j),B.h4,B.eb,2.6,7,D.c,B.hO,0)
break
case"shop":for(i=q+3,h=0;h<6;++h){g=(h&1)===0?D.ax:D.c
A.kK(a1,new A.r(-30+h*12,33,i),B.h4,B.eb,6,6,g,B.hO,0)}A.kK(a1,new A.r(0,t-4,j),B.h4,B.eb,36,6,a3,B.hO,0)
break
case"firestation":A.kK(a1,new A.r(0,t-5,j),B.h4,B.eb,40,7,D.bs,B.hO,0)
break
case"school":A.kK(a1,new A.r(0,t-5,j),B.h4,B.eb,40,7,D.bm,B.hO,0)
break}j=-q
A.fBp(a1,new A.r(0,0,j),B.p_,B.pT,k,m,l,B.i6)
A.kK(a1,new A.r(0,13,j-0.4),B.p_,B.eb,14,26,B.vS,B.pT,0)
f=D.o.F(D.k.bh(u/24),1,3)
k=u-26
A.fBp(a1,new A.r(p,0,0),B.pT,B.h4,k,f,l,B.i6)
i=-p
A.fBp(a1,new A.r(i,0,0),B.hO,B.p_,k,f,l,B.i6)
a1.x=0
k=x.z
g=C.a([],k)
e=new A.eM(g)
e.r=!0
e.b=a1.b
e.f=a1.f
if(a2==="house2"||a2==="school"){w=C.a([],k)
d=new A.eM(w)
d.r=!0
d.b=a1.b
d.f=a1.f
d.aD(B.dZ,new A.r(v+6,2.5,u*0.58),r,0.1)
n=a1.a
k=t+5
D.d.v(n,A.nk(w,0.42,0,new A.r(0,k,u*0.25)))
a0=-u
D.d.v(n,A.nk(w,-0.42,0,new A.r(0,k,a0*0.25)))
k=p+0.2
w=t+12
a1.a7p(new A.r(k,t,q),new A.r(k,t,j),new A.r(k,w,0),s,B.h4,!1)
i-=0.2
a1.a7p(new A.r(i,t,j),new A.r(i,t,q),new A.r(i,w,0),s,B.p_,!1)
if(a2==="school"){w=q-10
e.aF(new A.r(0,t+18,w),B.h6v,D.ah7)
e.aF(new A.r(0,t+30,w),B.h7n,r)
e.dq(new A.r(0,t+31,w),new A.r(0,t+46,w),0.6,D.dq,6)
e.aF(new A.r(5,t+44,w),B.hiG,D.ax)}else e.aF(new A.r(v*0.28,t+14,a0*0.1),B.hbz,B.aiU)}else{k=v+2
e.aD(new A.r(0,t+1.5,0),new A.r(k,3,u+2),r,0.05)
e.aF(new A.r(0,t+4,q+0.5),new A.r(k,4,1.4),a3)
if(w){w=v*0.25
k=-u*0.15
e.aF(new A.r(w,t+5,k),B.h7F,D.bu)
e.aF(new A.r(w,t+6.2,k),B.hiY,D.c)}if(n){w=p-10
n=-u*0.2
e.aF(new A.r(w,t+16,n),B.h6d,B.ahE)
e.aF(new A.r(w,t+32,n),B.aXO,r)}}D.d.v(a1.a,g)},
iaw(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=d.f,f=d.e
d.f=1
d.e=0
if(e==="road"){d.xt(B.heU,B.hfZ,B.hdI,B.hgl,B.MU,B.eb)
d.e=90
for(w=0;w<2;++w){v=B.RZ[w]
u=v-0.7
t=v+0.7
d.xt(new A.r(-20,0.9,u),new A.r(20,0.9,u),new A.r(20,0.9,t),new A.r(-20,0.9,t),L.Mv,B.eb)}for(w=0;w<2;++w){v=B.dpT[w]
u=v-0.8
t=v+0.8
d.xt(new A.r(-20,0.9,u),new A.r(20,0.9,u),new A.r(20,0.9,t),new A.r(-20,0.9,t),D.bP,B.eb)}d.f=g
d.e=f
return}d.xt(B.hg9,B.hnl,B.hdG,B.hc5,B.MU,B.eb)
d.e=90
switch(e){case"roadturn":u=B.doz
break
case"roadtee":u=B.d5r
break
default:u=B.cma
break}for(t=u.length,w=0;w<t;++w){s=u[w]
r=s.a
q=s.b
for(s=q!==0,p=r!==0,o=30*r,n=30*q,m=0;m<2;++m){l=B.RZ[m]
k=p?o:l
j=s?n:l
i=p?36:1.4
h=s?36:1.4
d.aF(new A.r(k,0.95,j),new A.r(i,0.1,h),L.Mv)}}d.f=g
d.e=f},
ht6(d,e,f,g){var w=new A.flu(d,g)
switch(e){case"dog":d.aD(B.xo,B.hmu,f,0.05)
d.ee(B.hcN,3.4,f,4,8)
d.aF(B.hgB,B.hbu,D.MN)
d.aF(B.hii,B.aYG,B.f_)
d.aF(B.hnA,B.aYG,B.f_)
d.dq(B.hji,B.h3s,0.8,f,5)
w.$5(B.dni,6,6,1.7,f)
break
case"cat":d.aD(B.AS,B.hbp,f,0.05)
d.ee(B.h4V,2.7,f,4,8)
d.aF(B.hlZ,B.aXR,f)
d.aF(B.hm2,B.aXR,f)
d.dq(B.h4U,B.h3j,0.7,f,5)
w.$5(B.dkW,4,4,1.2,f)
break
case"cow":d.aD(B.abI,B.h69,D.bO,0.05)
d.aF(B.hmc,B.hlq,B.f_)
d.aF(B.hev,B.hbs,B.f_)
d.aF(B.h3K,B.hbG,D.bO)
d.aF(B.h3z,B.hnW,D.o1)
d.aF(B.hbX,B.aXS,D.bP)
d.aF(B.hnt,B.aXS,D.bP)
d.dq(B.h3N,B.h4X,0.7,B.f_,5)
w.$5(B.d9i,11,11,3.2,D.bP)
break
case"sheep":d.ee(B.abH,8.5,D.qb,4,8)
d.ee(B.h3q,7,D.qb,4,8)
d.ee(B.h3m,3.4,B.f_,4,8)
w.$5(B.dnc,8,8,1.8,B.f_)
break
case"chicken":d.ee(B.AS,4,f,4,8)
d.ee(B.h35,2.2,f,3,6)
d.aF(B.h3f,B.hlk,D.bC)
d.aF(B.hcZ,B.hcr,D.az)
d.aF(B.h4Z,B.h9p,f)
w.$5(B.d7i,3,3,0.8,D.az)
break
case"horse":d.aD(B.h3R,B.h5H,f,0.1)
d.Lj(B.h40,B.h4i,4.2,f,3,8)
d.aF(B.h4k,B.ha2,f)
d.aF(B.h4t,B.hlj,B.f_)
d.dq(B.h46,B.h4Y,1.8,B.f_,6)
w.$5(B.d6B,16,16,2.6,f)
break
default:d.aF(B.AS,B.hbE,f)}},
bD2(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=C.a([],x.z)
for(w=d.length,v=e.a,u=e.b,t=e.c,s=f.a,r=f.b,q=f.c,p=x.o,o=0;o<d.length;d.length===w||(0,C.J)(d),++o){n=d[o]
m=C.a([],p)
for(l=n.a,k=l.length,j=0;j<l.length;l.length===k||(0,C.J)(l),++j){i=l[j]
m.push(new A.r(s+(i.a-s)*v,r+(i.b-r)*u,q+(i.c-q)*t))}l=n.b
h.push(new A.ks(m,new A.r(l.a/v,l.b/u,l.c/t).gn0(0),n.c,n.d,n.e,n.f,n.r,n.w,n.x,n.y,n.z))}return h},
i2a(d,e,f){var w,v,u,t,s,r=e.z
if(r.length===0)return
w=e.e
v=new A.flk(e,Math.sin(w),Math.cos(w))
u=d.b
d.b=0
switch(r){case"feed":d.Lj(v.$3(14,0,8),v.$3(14,9,8),4.5,B.o2,5.5,10)
for(r=f*0.9,t=0;t<9;++t){s=D.k.E(r+t/9,1)
d.eK(v.$3(10+s*26,26-s*22,Math.sin(t*2.1)*4),0.9,D.m2,3,5,0)}break
case"cook":d.aD(v.$2(18,9),B.h7j,D.iG,0.2)
d.aF(v.$2(18,18.4),B.hbb,D.fx)
d.d=0.3
for(r=f*0.5,t=0;t<6;++t){s=D.k.E(r+t/6,1)
d.eK(v.$2(18+Math.sin(t*1.9)*3,22+s*22),2+s*4,D.FD,3,6,0)}d.d=1
break
case"wash":d.Lj(v.$3(20,0,-10),v.$3(20,8,-10),4,D.aJ,5,10)
for(r=f*1.4,t=0;t<12;++t){s=D.k.E(r+t/12,1)
d.eK(v.$3(8+s*24,30-s*s*26,6),0.8,D.ho,3,5,0.3)}break
case"water":d.aD(v.$3(12,22,7),B.hbC,D.en,0.2)
for(r=f*1.2,t=0;t<10;++t){s=D.k.E(r+t/10,1)
d.eK(v.$3(18+s*8,22-s*22,7),0.7,D.ho,3,5,0.3)}break
case"teach":d.aD(v.$2(22,26),B.hjh,D.e_,0.1)
d.aF(v.$2(22.8,26),B.hgj,D.bO)
break
case"duty":d.aF(v.$3(0,74,0),B.hep,D.L)
break}d.b=u},
x_(d,e,f,g,h,i,j){var w,v,u,t,s,r
if(e.Q){w=C.a([],x.z)
A.x_(new A.eM(w),A.auj(!1,0,-1,"",!1,0,"",-1,e.CW*0.5,!1,!1,!1,e.a,!1,e.e,0,0,0),f,g,h,i,j)
D.d.v(d.a,A.nk(w,1.5707963267948966,e.d,new A.r(e.b,9,e.c)))
return}w=g.e
v=$.h4L.h(0,w)
if(v==null){if(B.ST.an(0,w)&&!$.h4J.q(0,w)){A.bUE(w)
return}A.i9j(d,e,f,h,i,g)
return}w=e.e
u=e.z
t=w&&!u&&e.CW>0?e.CW*12:null
s=j==null
r=s?null:g.a
s=s?null:g.d
D.d.v(d.a,v.cZ0(h,i,e.y,s,u,r,f,j,t,w,e.b,e.d,e.c))},
i9j(e6,e7,e8,e9,f0,f1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2=e7.e,d3=d2?D.k.V(e7.CW*24):-1,d4=f1.a,d5=f1.b,d6=f1.c,d7=f1.d,d8=f1.f,d9=f1.r,e0=f1.w,e1=e7.f,e2=e7.r,e3=e7.w,e4=C.bw(d4.l(),d5.l(),d6.l(),d7.l(),d8,d9,e0,e9,d3,e1,e2,e3,f0,D.h,D.h,D.h,D.h,D.h,D.h,D.h),e5=$.fvS.h(0,e4)
if(e5!=null){D.d.v(e6.a,A.nk(e5,0,e7.d,new A.r(e7.b,e7.y,e7.c)))
return}w=C.a([],x.z)
v=new A.eM(w)
v.b=f0
v.r=!0
u=C.ar(d4,D.w,0.16)
u.toString
t=C.ar(d4,B.bn1,0.55)
t.toString
s=d2?Math.sin(e7.CW*3.141592653589793):0
r=e9?8:6
q=e9?4:3
p=e9?8:6
o=e9?4:3
n=e9?9:6
m=x.n
l=C.a([],m)
for(k=0;k<2;++k)l.push(s*F.hg[k]*0.6)
j=C.a([],m)
for(i=l.length,k=0;k<l.length;l.length===i||(0,C.J)(l),++k){h=l[k]
j.push(d2?Math.max(0,-h)*1.5+0.1:0.04)}m=C.a([],m)
for(g=0;g<2;++g)m.push(16*Math.cos(l[g])+15.5*Math.cos(l[g]+j[g]))
f=Math.max(m[0],m[1])+3.3
e=new A.fwm(f0,v)
d=new A.fvU(v,r,e9)
for(m=Math.abs(0.08),g=0;g<2;++g){a0=g===0?-1:1
i=a0*(d8?3.2:2.9)
a1=i+0
a2=f+-16*Math.cos(l[g])
a3=0+-16*Math.sin(l[g])
a4=new A.r(a1,a2,a3)
a5=l[g]+j[g]
a1+=0
a2+=-15.5*Math.cos(a5)
a3+=-15.5*Math.sin(a5)
d.$5(new A.r(i,f,0),a4,3.5,2.7,d7)
d.$6$joint(a4,new A.r(a1,a2,a3),2.6,1.9,d7,!1)
a1+=0
i=a3+2
e.$3(new A.fvV(q,p),B.hgM,new A.r(a1,a2+-1.6,i))
if(e9)e.$3(new A.fvW(p),B.hd9,new A.r(a1,a2+-2.9,i))
if(e9){i=C.ar(d7,D.c,m)
i.toString
v.ee(new A.r(a1,a2+1.2,a3+0),2.1,i,3,p)}}m=d8?1.22:1.12
e.$3(new A.fvX(d7,q,p),new A.r(m,0.78,0.76),new A.r(0,f+1.2,0))
if(d8){d7=C.ar(d7,D.c,Math.abs(0.05))
d7.toString
m=e9?12:8
v.Tx(new A.r(0,f+3.4,0),new A.r(0,f-9.5,0),5.9,d7,!1,7.8,m)}a6=d8?5.8:6.5
a7=d8?4.2:4.9
d7=d8?0.66:0.62
e.$3(new A.fw7(a7,d6,a6,e9),new A.r(1,1,d7),new A.r(0,f+2.5,0))
if(!d8)e.$3(new A.fwf(),B.h6M,new A.r(0,f+2.4,0))
if(d8&&e9)for(d7=f+14.3,k=0;k<2;++k)e.$3(new A.fwg(d6,q,p),B.h7U,new A.r(F.hg[k]*2.7,d7,2.7))
d7=d8?1.1:1.2
e.$3(new A.fwh(d8,d6,o,n),new A.r(d7,0.5,0.62),new A.r(0,f+19.6,0))
d7=d8?1.8:2.1
v.dq(new A.r(0,f+20.5,0.2),new A.r(0,f+24.2,0.5),d7,d4,8)
if(e9){d7=C.ar(d6,D.c,Math.abs(0.12))
d7.toString
v.Tx(new A.r(0,f+20,0.1),new A.r(0,f+21.4,0.2),3.1,d7,!1,2.5,10)}d7=f+29
a8=new A.r(0,d7,0.6)
e.$3(new A.fwi(d4,e9),B.hj1,a8)
m=d8?0.95:1.05
e.$3(new A.fwj(d4,q,p),new A.r(m,0.8,0.95),a8.a7(0,B.h9m))
if(e9)for(m=d7+-0.3,k=0;k<2;++k)e.$3(new A.fwk(d4),B.hme,new A.r(0+F.hg[k]*4.35,m,0.7))
else for(m=d7+-0.2,k=0;k<2;++k)v.ee(new A.r(0+F.hg[k]*4.2,m,0.6),1,d4,2,5)
for(m=d7+1.9,l=d7+0.4,j=d7+2.05,i=d7+0.7,a1=d7+1.25,a2=d7+0.95,k=0;k<2;++k){a0=F.hg[k]
a3=a0*1.8
a9=0+a3
if(e9){e.$3(new A.fwl(),B.hjl,new A.r(a9,l,4.75))
v.ee(new A.r(a9,l,5.1),0.55,B.afc,2,5)}else v.aF(new A.r(a9,l,5),B.hh3,B.afc)
a3=0+a3
if(e9){v.ee(new A.r(0+a0*1.6,i,5.55),0.18,D.c,2,4)
e.$3(new A.fvY(u),B.heV,new A.r(a3,a1,4.8))
a9=d8?0.28:0.18
v.aF(new A.r(a3,a2,5.22),new A.r(2.3,a9,0.2),D.nr)
a9=d8?0.34:0.5
v.aF(new A.r(a3,j,4.75),new A.r(2.4,a9,0.55),d5)}else v.aF(new A.r(a3,m,4.8),B.hn8,d5)}e.$3(new A.fvZ(u),B.hnv,a8.a7(0,B.hd_))
if(e9){v.Li(a8.a7(0,B.hnx),a8.a7(0,B.hlW),0.55,d4,!1,5)
for(m=d7+-1.8,k=0;k<2;++k)v.aF(new A.r(0+F.hg[k]*0.55,m,5.1),B.he_,u)}if(e9){v.aF(a8.a7(0,B.ham),B.hg7,B.bl_)
e.$3(new A.fw_(t),B.hfg,a8.a7(0,B.hhr))
e.$3(new A.fw0(t),B.h9I,a8.a7(0,B.hde))}else v.aF(a8.a7(0,B.hgs),B.heI,B.boj)
switch(d9){case 1:e.$3(new A.fw1(d5,e9),B.hcW,a8.a7(0,B.aYQ))
e.$3(new A.fw2(d5,p),B.abR,a8.a7(0,B.aZz))
e.$3(new A.fw3(d5,q,p),B.hmJ,a8.a7(0,B.hn4))
for(d9=d7+1.5,d7+=-7.2,k=0;k<2;++k){a0=F.hg[k]
v.Li(new A.r(0+a0*4.4,d9,1),new A.r(0+a0*4.3,d7,1),1.2,d5,!1,6)}break
case 2:e.$3(new A.fw4(d5,e9),B.hjc,a8.a7(0,B.hdq))
e.$3(new A.fw5(d5,p),B.heE,a8.a7(0,B.hmv))
break
case 3:d5=C.ar(d6,D.c,Math.abs(0.18))
d5.toString
e.$3(new A.fw6(d5,e9),B.hhz,a8.a7(0,B.hc0))
e.$3(new A.fw8(d5,p),B.abR,a8.a7(0,B.hnY))
e.$3(new A.fw9(d5,q,p),B.hmB,a8.a7(0,B.hda))
break
case 4:e.$3(new A.fwa(d5,q,p),B.hnu,a8.a7(0,B.hna))
e.$3(new A.fwb(d5,p),B.hgz,a8.a7(0,B.hfV))
break
default:e.$3(new A.fwc(d5,e9),B.hbo,a8.a7(0,B.aYQ))
e.$3(new A.fwd(d5,p),B.abR,a8.a7(0,B.aZz))}b0=d8?6.2:7
for(d5=f+19.3,d7=-s,k=0;k<2;++k){a0=F.hg[k]
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
b3=new A.r(t,m,l)
a5=b1+b2
t+=0
m+=-10.5*Math.cos(a5)
l+=-10.5*Math.sin(a5)
j=d8?2.5:2.8
d.$5(new A.r(d9,d5,0),b3,j,2.3,d6)
d9=d8?1.9:2.1
d.$6$joint(b3,new A.r(t,m,l),d9,1.5,d4,!1)
d9=-Math.cos(a5)
j=-Math.sin(a5)
t+=0
i=m+d9*1.8
a1=l+j*1.8
e.$3(new A.fwe(d4),B.hfe,new A.r(t,i,a1))
if(e9){a2=d9<0?-1:1
a3=0*a2
a9=-j*a2
a2=d9*a2
for(b4=t+0,b5=i+d9*1.5+0,b6=a1+j*1.5+0,b7=a3*0.25,b8=a9*0.25,b9=a2*0.25,c0=0+a3*0.8,c1=d9*0.6+a9*0.8,c2=j*0.6+a2*0.8,c3=0;c3<4;++c3){c4=u?1:-1
c4=b4+(-1.5+c3)*c4
c5=B.azW[c3]
c6=c4+0*c5*0.55+b7
c7=b5+d9*c5*0.55+b8
c5=b6+j*c5*0.55+b9
c8=new A.r(c6,c7,c5)
c9=new A.r(c0,c1,c2).gn0(0)
d0=B.azW[c3]
v.Tx(new A.r(c4,b5,b6),c8,0.62,d4,!1,0.58,4)
v.Tx(c8,new A.r(c6+c9.a*d0*0.45,c7+c9.b*d0*0.45,c5+c9.c*d0*0.45),0.56,d4,!1,0.48,4)}b5=-a0
b4+=b5*2
i=i+d9*0.4+0
a1=a1+j*0.4+0.5
b5=new A.r(0+b5*0.5,d9*0.7+0,j*0.7+0.5).gn0(0)
b6=b4+b5.a*1.7
b7=i+b5.b*1.7
b5=a1+b5.c*1.7
d1=new A.r(b6,b7,b5)
a2=new A.r(0+a3*0.4,d9*0.8+a9*0.4,j*0.8+a2*0.4).gn0(0)
v.Li(new A.r(b4,i,a1),d1,0.7,d4,!1,4)
v.Li(d1,new A.r(b6+a2.a*1.4,b7+a2.b*1.4,b5+a2.c*1.4),0.6,d4,!1,4)}if(u&&e1){d9=l+0
v.cJ(new A.r(t,m+-2.6,d9),new A.r(t,m+2.6,d9),1.7,D.aJ,0.5,8)}if(u&&e2){v.aD(new A.r(t,m+-0.4,l+2.6),B.hfA,D.nr,0.3)
v.aF(new A.r(t,m+0.2,l+3.8),B.hcz,D.ax)}}if(e0!==1)w=A.bD2(w,new A.r(e0,e0,e0),B.dZ)
if($.fvS.a>900)$.fvS.a9(0)
$.fvS.n(0,e4,w)
D.d.v(e6.a,A.nk(w,0,e7.d,new A.r(e7.b,e7.y,e7.c)))},
ibq(d,e){var w,v,u,t,s,r,q,p,o,n=C.a([],x.z)
for(w=d.length,v=x.o,u=0;u<d.length;d.length===w||(0,C.J)(d),++u){t=d[u]
s=C.a([],v)
for(r=t.a,q=r.length,p=0;p<r.length;r.length===q||(0,C.J)(r),++p){o=r[p]
s.push(new A.r(o.a*e,o.b*e,o.c*e))}n.push(new A.ks(s,t.b,t.c,t.d,t.e,t.f,t.r,t.w,t.x,t.y,t.z))}return n},
han(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=C.ar(f,D.w,Math.abs(-0.25))
g.toString
w=C.ar(f,D.c,Math.abs(0.2))
w.toString
A:{if("bed"===e){d.aD(B.AS,B.ha8,B.qk,0.1)
d.aD(B.h3o,B.h9O,f,0.05)
d.aF(B.hk6,B.aXU,B.aio)
d.aF(B.h6c,B.aXU,B.aio)
d.aD(B.h3U,B.haa,B.qk,0.1)
d.aF(B.h3E,B.hja,w)
break A}if("nightstand"===e){d.aD(B.xo,B.h6n,f,0.1)
d.aF(B.hhQ,B.haM,g)
d.aF(B.hnj,B.h8L,B.ahX)
d.aF(B.h3X,B.hbU,B.nl)
break A}if("wardrobe"===e){d.aD(B.h4h,B.h92,f,0.1)
d.aF(B.hcg,B.h9e,g)
d.aD(B.hfk,B.aZ5,B.Fv,0.8)
d.aD(B.hnK,B.aZ5,B.Fv,0.8)
break A}if("desk"===e){d.aD(B.W4,B.h98,f,0.1)
d.aF(B.hkf,B.aY_,g)
d.aF(B.h7f,B.aY_,g)
d.aD(B.h4z,B.h7g,B.Mk,0.5)
d.aF(B.h4e,B.hap,D.iG)
break A}if("rug"===e){d.hl(B.hmn,B.h6J,f,2)
d.aF(B.hc3,B.hlx,w)
break A}if("sofa"===e){d.aD(B.xo,B.hbc,f,0.05)
d.aD(B.h3T,B.hbd,g,0.05)
d.aD(B.hkt,B.aYn,g,0.05)
d.aD(B.h8w,B.aYn,g,0.05)
d.aF(B.hk5,B.aXV,w)
d.aF(B.h6b,B.aXV,w)
break A}if("armchair"===e){d.aD(B.xo,B.h86,f,0.05)
d.aD(B.h3S,B.h88,g,0.05)
d.aF(B.hk1,B.aYj,g)
d.aF(B.h5Z,B.aYj,g)
break A}if("coffee"===e){d.aD(B.W3,B.h8W,f,0.2)
for(v=0;v<4;++v){w=B.dpx[v]
d.aF(new A.r(w.a,6.5,w.b),B.h7R,g)}d.aD(B.hdK,B.hbA,D.bP,0.5)
break A}if("tvstand"===e){d.aD(B.abM,B.h9E,f,0.1)
d.aF(B.hb9,B.hdl,g)
d.aF(B.h3D,B.h77,B.f_)
break A}if("dining"===e){d.aD(B.W4,B.h9F,f,0.2)
for(v=0;v<4;++v){w=B.cRA[v]
d.aF(new A.r(w.a,13,w.b),B.h8I,g)}break A}if("chair"===e){d.aD(B.h3x,B.h6y,f,0.1)
d.aD(B.h48,B.h6w,f,0.1)
for(v=0;v<4;++v){w=B.deZ[v]
d.aF(new A.r(w.a,7.5,w.b),B.h73,g)}break A}if("plant"===e){d.dq(B.dZ,B.abM,5,D.d2,10)
d.ee(B.abI,8,B.Ft,5,8)
d.ee(B.h8H,5,B.Yn,4,8)
break A}if("lamp"===e){d.dq(B.dZ,B.eb,4.5,B.f_,10)
d.dq(B.eb,B.aXy,0.7,B.f_,6)
d.Lj(B.AR,B.abK,6,B.nl,3.5,12)
break A}if("console"===e){d.aD(B.h4_,B.aYg,f,0.15)
d.aF(B.hee,B.aXZ,g)
d.aF(B.hc8,B.aXZ,g)
d.aF(B.xo,B.hlf,g)
break A}if("shelf"===e){d.aD(B.abJ,B.h8s,f,0.1)
for(u=0;u<4;++u){g=10+u*15
d.aF(new A.r(0,g,1),B.h8g,B.f_)
w=D.o.E(u,2)
d.aF(new A.r(-8+w*6,g,2),B.ha4,[D.ep,D.dH,D.en,D.e0][u])
d.aF(new A.r(4+w*4,g,2),B.aYu,[D.e0,D.en,D.ep,D.dH][u])}break A}if("tree"===e){d.Lj(B.dZ,B.h4g,4.2,B.qk,3,8)
d.ee(B.aXy,17,B.Ft,5,9)
d.ee(B.hbT,11,B.Yn,4,8)
d.ee(B.hl7,12,B.bnW,4,8)
break A}if("pine"===e){d.dq(B.dZ,B.aXo,3,B.qk,8)
for(u=0;u<3;++u){g=u*14
d.Lj(new A.r(0,8+g,0),new A.r(0,26+g,0),14-u*3.5,B.afQ,1.5,10)}break A}if("bush"===e){d.ee(B.xo,9,B.bky,4,8)
d.ee(B.ha3,6.5,B.Yn,4,8)
break A}if("flowers"===e){for(v=0;v<5;++v){g=B.do5[v]
t=g.a
s=g.b
d.dq(new A.r(t,0,s),new A.r(t,7,s),0.4,B.afQ,5)
d.ee(new A.r(t,8,s),2.2,g.c,3,6)}break A}if("fence"===e){for(v=0;v<4;++v)d.aD(new A.r(B.dpP[v],9,0),B.hhH,f,0.05)
d.aF(B.AS,B.aZs,g)
d.aF(B.abH,B.aZs,g)
break A}if("lamppost"===e){d.dq(B.dZ,B.aXz,1.3,B.f_,5)
d.dq(B.dZ,B.h4l,3.5,B.f_,6)
break A}if("bench"===e){d.aD(B.aXr,B.aYg,f,0.1)
d.aD(B.h3O,B.h90,f,0.1)
d.aF(B.hk7,B.aYc,B.f_)
d.aF(B.h6B,B.aYc,B.f_)
break A}if("car"===e){d.aD(B.aXo,B.hbk,f,0.4)
d.aD(B.hkG,B.h95,f,0.4)
d.aD(B.h6L,B.he0,B.i6,0.6)
d.aF(B.hlw,B.abO,B.nl)
d.aF(B.heN,B.abO,B.nl)
for(v=0;v<2;++v){t=B.a5N[v]
d.dq(new A.r(t,5,-18),new A.r(t,5,-21),5.5,D.nr,12)
d.dq(new A.r(t,5,18),new A.r(t,5,21),5.5,D.nr,12)}break A}if("road"===e||"roadturn"===e||"roadtee"===e||"roadcross"===e){A.iaw(d,e)
break A}if("roundabout"===e){d.dq(B.dZ,B.hdT,72,B.MU,16)
d.dq(B.heg,B.aZ8,17,D.bo,10)
d.dq(B.aZ8,B.aYN,15,B.bn6,10)
d.ee(B.abM,6,E.Y7,3,6)
d.dq(B.aYN,B.abL,0.9,B.qk,5)
break A}if("house2"===e||"shop"===e||"hospital"===e||"firestation"===e||"school"===e){g=C.a([],x.z)
r=new A.eM(g)
r.b=d.b
r.r=!0
r.f=d.f
A.htC(r,e,f)
D.d.v(d.a,A.bD2(g,B.hiA,B.dZ))
break A}if("bighouse"===e){g=C.a([],x.z)
q=new A.eM(g)
q.b=d.b
q.r=!0
q.f=d.f
A.htC(q,"house2",f)
D.d.v(d.a,A.bD2(g,B.hjz,B.dZ))
break A}if("pole"===e){d.Lj(B.dZ,B.h3d,2.6,B.qk,2,5)
d.aF(B.h39,B.h97,B.biN)
for(v=0;v<3;++v){t=B.aBU[v]
d.dq(new A.r(t,116,0),new A.r(t,121,0),1.1,D.bO,4)}d.dq(B.h9l,B.h9j,5.5,D.bo,6)
d.aF(B.h5R,B.h76,D.iG)
break A}if("crate"===e){d.aD(B.abL,B.h7E,B.iC,0.05)
d.aF(B.hnh,B.h6t,B.vS)
d.eK(B.hkK,3.4,D.ax,3,5,0.3)
d.eK(B.h9Z,3.4,D.az,3,5,0.3)
break A}if("billboard"===e){d.x=$.dl=$.dl+1
for(v=0;v<2;++v){t=B.a5N[v]
d.dq(new A.r(t,0,-1),new A.r(t,40,-1),1.6,D.iG,8)}d.aD(B.h4B,B.haK,D.cs,0.3)
d.x=0
break A}if("tower"===e||"hq"===e){d.x=$.dl=$.dl+1
p=e==="hq"
o=p?170:100
n=p?90:70
m=p?150:A.hxL(f)
l=p?D.bP:B.dvh[D.o.E(f.l()>>>4,6)]
k=new A.fpq(d)
d.aD(new A.r(0,m/2,0),new A.r(o,m,n),l,0.25)
k.$4(o,n,20,m-8)
if(p){g=o*0.66
w=n*0.66
d.aD(new A.r(0,m+60,0),new A.r(g,120,w),D.bO,0.25)
k.$4(g,w,m+16,m+112)
d.aD(new A.r(0,m+124,0),new A.r(o*0.7,8,n*0.7),F.f0,0.4)}else{d.aF(new A.r(0,m+3,0),new A.r(o+4,6,n+4),D.cs)
d.aF(new A.r(o*0.2,m+12,0),new A.r(o*0.3,12,n*0.3),D.dq)}j=p?m+128:m+6
for(g=o*0.3,g=[-g,g],w=g.length,i=j+8,v=0;v<w;++v)d.aF(new A.r(g[v],i,0),B.h8F,D.iG)
g=p?112:84
d.aD(new A.r(0,j+34,0),new A.r(g,38,3),E.iD,0.3)
g=n/2
A.kK(d,new A.r(0,17,g+0.6),B.h4,B.eb,34,34,D.cs,B.hO,0.5)
A.kK(d,new A.r(0,17,g+0.7),B.eb.G9(B.hO),B.eb,1.2,34,B.i6,B.hO,0.6)
d.aD(new A.r(0,38,g+5),B.h96,F.f0,0.3)
d.x=0
break A}if("store"===e){d.x=$.dl=$.dl+1
d.aD(B.W4,B.aXJ,f,0.2)
d.aF(B.abK,B.aXK,D.cs)
A.kK(d,B.aZy,B.h4,B.eb,112,30,B.i6,B.hO,0.6)
d.aF(B.aXx,B.aXI,D.bC)
d.aF(B.aXA,B.aXF,D.av)
for(v=0;v<2;++v){t=B.aBY[v]
d.dq(new A.r(t,58,28),new A.r(t,96,28),2.5,D.iG,6)}d.aD(B.aXq,B.aXN,E.iD,0.3)
d.aF(B.aXt,B.W6,F.f0)
d.aF(B.aXD,B.W6,F.f0)
d.x=0
break A}if("dmv"===e){d.x=$.dl=$.dl+1
d.aD(B.W4,B.aXJ,D.aO,0.2)
d.aF(B.abK,B.aXK,D.d9)
A.kK(d,B.aZy,B.h4,B.eb,112,30,B.i6,B.hO,0.6)
d.aF(B.aXx,B.aXI,D.bm)
d.aF(B.aXA,B.aXF,D.d9)
d.aF(B.hfw,B.hiF,D.bs)
d.aF(B.hmU,B.han,D.d9)
for(v=0;v<2;++v){t=B.aBY[v]
d.dq(new A.r(t,58,28),new A.r(t,96,28),2.5,D.iG,6)}d.aD(B.aXq,B.aXN,E.iD,0.3)
d.aF(B.aXt,B.W6,F.f0)
d.aF(B.aXD,B.W6,F.f0)
d.x=0
break A}if("ubstation"===e){d.x=$.dl=$.dl+1
for(v=0;v<2;++v){t=B.dpV[v]
for(h=0;h<2;++h){s=E.Sr[h]
d.dq(new A.r(t,0,s),new A.r(t,50,s),2.2,D.aL,6)}}d.aD(B.aXz,B.h5N,D.av,0.3)
d.aF(B.h4M,B.h5P,D.bs)
d.aD(B.h47,B.h5F,D.dw,0.6)
d.aF(B.h3a,B.hbg,D.bu)
d.aF(B.h4R,B.haQ,D.aL)
d.dq(B.h9J,B.h9M,2,D.iG,6)
d.aF(B.h9N,B.h8z,D.av)
d.aF(B.hdb,B.hei,D.bs)
d.aF(B.hn5,B.hle,D.c)
d.x=0
break A}if("gasstation"===e){d.x=$.dl=$.dl+1
for(v=0;v<2;++v){t=B.aBX[v]
for(h=0;h<2;++h){s=B.cKr[h]
d.dq(new A.r(t,0,s),new A.r(t,46,s),2.4,D.bP,6)}}d.aD(B.h4D,B.h5U,D.bC,0.3)
d.aF(B.hnw,B.h5W,F.f0)
for(v=0;v<2;++v){t=E.Sr[v]
d.aD(new A.r(t,9,20),B.hb1,D.iB,0.3)
d.aF(new A.r(t,15,20.2),B.h7N,D.bC)}d.aD(B.h3G,B.hbe,f,0.2)
d.dq(B.hkT,B.hkU,2.2,D.iG,6)
d.aF(B.hkV,B.h8i,D.av)
d.x=0
break A}if("townsign"===e){d.x=$.dl=$.dl+1
for(v=0;v<2;++v){t=B.dpH[v]
d.dq(new A.r(t,0,0),new A.r(t,316,0),5.5,D.iG,6)}d.aD(B.h44,B.h8m,E.iD,0.3)
d.aF(B.h4c,B.aYa,F.f0)
d.aF(B.h3B,B.aYa,F.f0)
d.x=0
break A}if("adboard"===e){d.x=$.dl=$.dl+1
for(v=0;v<2;++v){t=B.dpG[v]
d.dq(new A.r(t,0,0),new A.r(t,205,0),4.5,D.iG,6)}d.aD(B.h3l,B.h8f,E.iD,0.3)
d.aF(B.h3I,B.aY3,F.f0)
d.aF(B.aXB,B.aY3,F.f0)
d.x=0
break A}if("cornersign"===e){d.x=$.dl=$.dl+1
for(v=0;v<2;++v){t=B.aBX[v]
d.dq(new A.r(t,0,0),new A.r(t,125,0),3,D.iG,6)}d.aD(B.h3c,B.h6h,E.iD,0.3)
d.aF(B.h3u,B.h6j,F.f0)
d.x=0
break A}if("firetruck"===e){d.aD(B.aXp,B.hbP,D.bC,0.3)
d.aD(B.h8o,B.h7e,D.bC,0.3)
d.aD(B.hhm,B.h9S,B.i6,0.6)
d.aF(B.hjU,B.hlY,D.dq)
for(u=0;u<6;++u)d.aF(new A.r(-34+u*11,24,0),B.hg1,D.dq)
d.aF(B.h8p,B.aYs,D.d5)
d.aF(B.hi1,B.hdx,B.bp3)
for(v=0;v<3;++v){t=B.dpR[v]
d.dq(new A.r(t,6,-19),new A.r(t,6,-22.5),6,D.nr,12)
d.dq(new A.r(t,6,19),new A.r(t,6,22.5),6,D.nr,12)}break A}if("ambulance"===e){d.aD(B.W3,B.hbl,D.c,0.4)
d.aD(B.h87,B.h7x,D.c,0.4)
d.aD(B.hdS,B.hiP,B.i6,0.6)
d.aF(B.hmA,B.aYR,D.bC)
d.aF(B.hfI,B.aYR,D.bC)
d.aF(B.aZi,B.hf4,D.bC)
d.aF(B.aZi,B.hd4,D.bC)
d.aF(B.h89,B.aYs,D.ax)
for(v=0;v<2;++v){t=B.a5N[v]
d.dq(new A.r(t,6,-19),new A.r(t,6,-22.5),6,D.nr,12)
d.dq(new A.r(t,6,19),new A.r(t,6,22.5),6,D.nr,12)}break A}if("dog"===e||"cat"===e||"cow"===e||"sheep"===e||"chicken"===e||"horse"===e){A.ht6(d,e,f,0)
break A}if("pond"===e){g=C.a([],x.z)
q=new A.eM(g)
q.b=d.b
q.f=d.f
q.r=!0
q.cJ(B.dZ,B.hjD,28,B.bqg,0.8,22)
D.d.v(d.a,A.bD2(g,B.hcs,B.dZ))
for(v=0;v<3;++v){g=B.dau[v]
d.ee(new A.r(g.a,1.2,g.b),2.6,B.ahq,3,6)}break A}if("swing"===e){d.dq(B.hkg,B.h7z,1.6,D.d2,8)
for(v=0;v<2;++v){t=E.Ss[v]
d.dq(new A.r(t,38,0),new A.r(t,0,14),1.4,D.d2,6)
d.dq(new A.r(t,38,0),new A.r(t,0,-14),1.4,D.d2,6)}for(v=0;v<2;++v){t=E.a5O[v]
d.dq(new A.r(t,38,0),new A.r(t,15,0),0.3,B.f_,4)}d.aF(B.W3,B.hmI,f)
break A}if("shed"===e){d.aD(B.W3,B.h9t,f,0.05)
d.aF(B.abJ,B.h9H,B.YE)
d.aF(B.hjs,B.hjd,g)
break A}if("doghouse"===e){d.aD(B.abL,B.h7y,f,0.05)
d.aF(B.h8_,B.hlM,B.YE)
d.aF(B.hhl,B.hmY,B.Mk)
break A}d.aF(B.AS,B.h5p,f)}},
hv2(d,e,f,g,h,i){var w=e.a,v=e.b,u=e.c,t=h/2
d.aD(new A.r(w,v,u+t-0.5),new A.r(f,g,1),i,0.1)
d.aD(new A.r(w,v,u-t+0.5),new A.r(f,g,1),i,0.1)
t=f/2
d.aD(new A.r(w-t+0.5,v,u),new A.r(1,g,h),i,0.1)
d.aD(new A.r(w+t-0.5,v,u),new A.r(1,g,h),i,0.1)
d.aD(new A.r(w,v-g/2+0.5,u),new A.r(f,1,h),i,0.1)},
chE:function chE(){},
fU5:function fU5(d,e,f){this.a=d
this.b=e
this.c=f},
fU3:function fU3(d,e,f){this.a=d
this.b=e
this.c=f},
fU2:function fU2(d,e,f){this.a=d
this.b=e
this.c=f},
fU4:function fU4(d){this.a=d},
fCN:function fCN(d){this.a=d},
fCz:function fCz(){},
fCK:function fCK(){},
fCL:function fCL(d,e,f){this.a=d
this.b=e
this.c=f},
fCA:function fCA(){},
fCB:function fCB(){},
fCC:function fCC(){},
fCD:function fCD(d){this.a=d},
fCF:function fCF(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fCG:function fCG(d,e,f){this.a=d
this.b=e
this.c=f},
fCH:function fCH(d,e,f){this.a=d
this.b=e
this.c=f},
fCI:function fCI(d,e,f){this.a=d
this.b=e
this.c=f},
fCJ:function fCJ(d,e,f){this.a=d
this.b=e
this.c=f},
fCM:function fCM(d){this.a=d},
fCE:function fCE(d){this.a=d},
fvv:function fvv(d){this.a=d},
fvw:function fvw(d){this.a=d},
fvr:function fvr(d){this.a=d},
fvs:function fvs(d,e){this.a=d
this.b=e},
fvt:function fvt(d){this.a=d},
fuP:function fuP(){},
fuQ:function fuQ(){},
fuR:function fuR(d){this.a=d},
fv1:function fv1(d){this.a=d},
fvc:function fvc(){},
fvu:function fvu(d,e){this.a=d
this.b=e},
fvl:function fvl(d){this.a=d},
fvm:function fvm(d){this.a=d},
fvn:function fvn(d){this.a=d},
fvo:function fvo(d){this.a=d},
fvp:function fvp(d){this.a=d},
fvq:function fvq(d){this.a=d},
fuS:function fuS(d){this.a=d},
fuT:function fuT(d){this.a=d},
fuU:function fuU(d){this.a=d},
fuV:function fuV(d){this.a=d},
fuW:function fuW(d){this.a=d},
fuX:function fuX(d){this.a=d},
fuY:function fuY(){},
fuZ:function fuZ(){},
fv_:function fv_(){},
fv0:function fv0(){},
fv2:function fv2(d){this.a=d},
fv3:function fv3(d){this.a=d},
fv4:function fv4(d){this.a=d},
fv5:function fv5(d){this.a=d},
fv6:function fv6(){},
fv7:function fv7(){},
fv8:function fv8(){},
fv9:function fv9(){},
fva:function fva(){},
fvb:function fvb(){},
fvd:function fvd(){},
fve:function fve(){},
fvf:function fvf(){},
fvg:function fvg(d,e){this.a=d
this.b=e},
fvh:function fvh(d){this.a=d},
fvi:function fvi(d){this.a=d},
fvj:function fvj(){},
fvk:function fvk(){},
fFZ:function fFZ(d){this.a=d},
fFW:function fFW(){},
fFX:function fFX(d){this.a=d},
fFY:function fFY(d){this.a=d},
flu:function flu(d,e){this.a=d
this.b=e},
flk:function flk(d,e,f){this.a=d
this.b=e
this.c=f},
fwm:function fwm(d,e){this.a=d
this.b=e},
fvU:function fvU(d,e,f){this.a=d
this.b=e
this.c=f},
fvV:function fvV(d,e){this.a=d
this.b=e},
fvW:function fvW(d){this.a=d},
fvX:function fvX(d,e,f){this.a=d
this.b=e
this.c=f},
fw7:function fw7(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fwf:function fwf(){},
fwg:function fwg(d,e,f){this.a=d
this.b=e
this.c=f},
fwh:function fwh(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fwi:function fwi(d,e){this.a=d
this.b=e},
fwj:function fwj(d,e,f){this.a=d
this.b=e
this.c=f},
fwk:function fwk(d){this.a=d},
fwl:function fwl(){},
fvY:function fvY(d){this.a=d},
fvZ:function fvZ(d){this.a=d},
fw_:function fw_(d){this.a=d},
fw0:function fw0(d){this.a=d},
fw1:function fw1(d,e){this.a=d
this.b=e},
fw2:function fw2(d,e){this.a=d
this.b=e},
fw3:function fw3(d,e,f){this.a=d
this.b=e
this.c=f},
fw4:function fw4(d,e){this.a=d
this.b=e},
fw5:function fw5(d,e){this.a=d
this.b=e},
fw6:function fw6(d,e){this.a=d
this.b=e},
fw8:function fw8(d,e){this.a=d
this.b=e},
fw9:function fw9(d,e,f){this.a=d
this.b=e
this.c=f},
fwa:function fwa(d,e,f){this.a=d
this.b=e
this.c=f},
fwb:function fwb(d,e){this.a=d
this.b=e},
fwc:function fwc(d,e){this.a=d
this.b=e},
fwd:function fwd(d,e){this.a=d
this.b=e},
fwe:function fwe(d){this.a=d},
fpq:function fpq(d){this.a=d},
hjD(){var w=x.S
return new A.bW0(C.ey([72],w),C.aS(w),C.aS(w),C.aS(w))},
ifj(d){var w
A:{if(81===d){w="outlet"
break A}if(82===d){w="switch"
break A}if(84===d){w="gfci"
break A}if(86===d||87===d){w="ptrap"
break A}if(85===d){w="faucet"
break A}w=null
break A}return w},
ah7(a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=C.a([],x.z),a0=new A.eM(d)
a0.b=70
a0.hl(B.hiC,B.hlJ,B.bmW,4)
a0.c=1
a0.b=91
w=new A.fCS(a0)
w.$3(B.hd3,B.hcb,15)
w.$4$alongX(B.hld,B.hgX,11,!1)
w.$4$alongX(B.h9R,B.hcl,11,!1)
w.$4$alongX(B.hk8,B.hdt,6,!1)
w.$4$alongX(B.hb0,B.hgY,6,!1)
for(v=0;v<=12;++v)a0.aEI(new A.r(-12+v*2,8.4,0),B.hhO,B.YY,!1,0.05)
a0.c=2
a0.b=92
u=new A.fCP(a0)
u.$2(B.ctF,B.rv)
u.$2(B.dmE,B.nj)
u.$2(B.drO,B.nj)
t=new A.fCO(a0)
t.$1(B.d2Z)
t.$1(B.d96)
a0.c=3
a0.b=93
s=new A.fCR(a0)
s.$1(B.d1R)
s.$2$col(B.d0c,B.m1)
s.$2$col(B.d_g,B.m1)
s.$1(B.djq)
a0.c=4
a0.b=0
a0.d=0.22
a0.hl(B.hck,B.hg4,B.Bu,4)
a0.hl(B.hg_,B.aYY,B.Bu,4)
a0.hl(B.hd8,B.aYY,B.Bu,4)
a0.hl(B.het,B.aZ4,B.Bu,3)
a0.hl(B.hnf,B.aZ4,B.Bu,3)
a0.d=1
a0.c=5
a0.e=0.3
a0.b=0
a0.kZ(B.hjQ,B.hch,B.bki,0.1,4)
a0.b=71
a0.aD(B.hiK,B.hhP,B.Yd,0.5)
a0.aF(B.hmH,B.he4,B.y_)
r=[72,73,74,75,76]
for(q=a1.d,p=a1.e,v=0;v<5;++v){o=D.o.E(v,2)
n=D.o.aq(v,2)
m=r[v]
l=q.q(0,m)
k=p.q(0,m)
a0.b=m
m=9.55+o*0.5
j=5.7-n*0.5
a0.aD(new A.r(m,j,-7.5),B.hbQ,B.ql,0.3)
if(l)i=0
else i=k?-0.07:0.07
if(l)h=D.cf
else h=k?D.bo:D.bP
a0.aD(new A.r(m+0,j+i,-7.42),B.hdF,h,0.4)}a0.b=90
a0.aD(B.hgZ,B.ha_,B.buG,0.1)
a0.aD(B.hli,B.hcK,B.Zy,0.1)
a0.aD(B.hnT,B.aZr,B.Zy,0.1)
a0.aD(B.hcC,B.aZr,B.Zy,0.1)
g=new A.fCQ(a0)
g.$3(81,B.hba,a1.x?B.u5:B.Zg)
a0.b=81
a0.aF(B.hh_,B.aZk,B.FR)
a0.aF(B.hf9,B.aZk,B.FR)
g.$5$h$w(82,B.hmO,H.Zp,0.65,0.4)
a0.b=82
a0.aD(B.hjn,B.h9W,B.agM,0.4)
f=!q.q(0,72)
a0.b=83
a0.cJ(B.hj5,B.aYH,0.5,B.bse,0.4,14)
a0.bdl(B.hm7,0.3,f?Al.G9:B.bmC,0.7)
if(f){a0.b=0
a0.d=0.22
a0.eK(B.aYr,1.5,B.Mo,4,10,0)
a0.d=1}a0.b=94
a0.aD(B.hlV,B.aZw,B.iC,0.1)
a0.aD(B.hhh,B.aZw,B.iC,0.1)
a0.aD(B.hmL,B.hdh,B.iC,0.1)
A.b7C(a0,1.35,B.Mx,2.5,2.1,B.hj,B.MK,6,0.55,!1,1,0.18,3.19,0.06,3,-7.15)
a0.b=85
a0.iD(A.Dz(B.dcS,0.2,6),0.055,B.hj,!1,0.9,8)
a0.b=84
a0.aD(B.hml,B.hjI,B.Zg,0.3)
a0.aF(B.heD,B.hmG,a1.y?B.YM:B.ajN)
a0.b=86
a0.iD(A.Dz(B.d3t,0.35,3),0.11,B.q8,!1,0.3,8)
a0.b=87
a0.cJ(B.hfD,B.hiR,0.19,a1.c?B.Yj:B.bpU,0.3,8)
a0.b=88
a0.aD(B.h94,B.hbZ,B.BA,0.7)
a0.wV(B.hiB,B.aZl,0.72,B.BA,0.55,0.7,16)
a0.cJ(B.aZl,B.hgA,0.78,B.brK,0.7,16)
a0.b=89
a0.cJ(B.hlo,B.aYv,0.85,B.bf3,0.6,18)
a0.cJ(B.aYv,B.hg2,0.5,B.bf5,0.5,12)
a0.aF(B.hhu,B.hnE,B.bpO)
a0.b=95
for(p=a1.f,m=a1.r,v=0;v<3;++v){e=B.cK4[v]
if(m.q(0,v)){j=e.a
i=e.b
a0.aF(new A.r(j,i,-7.82),B.hj7,B.Bu)
a0.aF(new A.r(j,i,-7.79),B.hg8,B.biE)}else if(p.q(0,v)){j=e.a
i=e.b
a0.aF(new A.r(j,i,-7.82),B.h6V,B.aiJ)
a0.aF(new A.r(j,i,-7.8),B.hhf,B.buY)}}if(a1.w){a0.b=96
a0.cJ(B.hge,B.hfs,0.1,D.d2,0.7,8)}a0.e=0
a0.c=6
a0.b=0
a0.d=0.4
a0.bkl(B.aYl,B.aZj,B.abW,B.abU,B.ag7,B.hgU,!0)
a0.bkl(B.aZ9,B.aZp,B.abU,B.abW,B.ag7,B.hjg,!0)
a0.blw(B.aYl,B.aZp,B.abU,B.agm)
a0.blw(B.aZj,B.aZ9,B.abW,B.agm)
a0.d=1
p=q.q(0,72)?"This breaker has TRIPPED (it is in the middle, orange). The living room has no power. Tap it to flip it off and on again.":"This breaker is ON. The living room has power."
q=q.q(0,72)?"The light is off because the living room breaker has tripped.":"The ceiling light is on."
m=a1.b
j=m&&!a1.c?"Water is dripping from the slip nut here. Pick the wrench, then tap the nut to tighten it.":"The P-trap holds a water seal that blocks sewer gas. Tap Open lesson to build one."
m=m&&!a1.c?"This slip nut is loose and the trap is dripping. Pick the wrench and tap here to tighten it.":"The slip nut is tight."
return new A.qU(d,C.I([70,B.eh4,91,B.egr,92,B.egM,93,B.egU,71,B.eh9,72,new A.cH("Living room breaker",p,B.hnp,3.5),73,B.egD,74,B.egW,75,B.egh,76,B.egP,81,B.egR,82,B.eg7,83,new A.cH("Ceiling light",q,B.aYH,7),84,B.egY,85,B.egj,86,new A.cH("P-trap under the sink",j,B.hiy,4.5),87,new A.cH("Slip nut (leaking?)",m,B.aYK,3.5),88,B.eg4,89,B.egV,90,B.eh_,94,B.egC,95,B.eh1,96,B.ega],x.S,x.q),B.v0,B.qN,null,!1,0)},
hyW(d,e){var w,v,u,t,s,r,q,p=C.a([],x.z),o=new A.eM(p)
o.c=5
o.e=0.8
if(d.w)for(w=e*1.5,v=0;v<6;++v){u=D.k.E(w+v/6,1)
o.eK(new A.r(3.4+Math.sin(v*2)*0.12,3.3-u*u*2.8,-7.7),0.05,D.agj,3,6,0.9)}if(d.as){u=D.k.E(e*1.1,1)
o.eK(new A.r(3,3.9-u*u*0.7,-6.95),0.05,B.agE,3,6,0.9)}if(d.Q)for(w=e*1.6,v=0;v<6;++v){u=D.k.E(w+v/6,1)
o.eK(new A.r(8.2+Math.sin(v*1.7)*0.15,2.2-u*1.5,-7.2),0.05,B.agE,3,6,0.9)}if(d.at){o.d=0.55
o.aD(B.hcx,B.hey,B.bs1,0.8)
o.d=1}if(d.x)for(w=e*2,t=e*6,v=0;v<8;++v){u=D.k.E(w+v*0.13,1)
s=v*2.4+t
r=Math.cos(s)
s=Math.sin(s)
q=C.ar(F.Na,E.ZK,1-u)
q.toString
o.eK(new A.r(-3.2+r*u*0.7,1.3+s*u*0.7,-7.6+u*0.3),0.05,q,3,5,0)}if(d.z&&!d.d.q(0,72)){o.b=0
o.d=D.k.F((Math.sin(e*17)+Math.sin(e*29)+2)/4*0.5,0,0.6)
o.eK(B.aYr,1.5,B.Mo,4,10,0)
o.d=1}if(d.b&&!d.c){for(w=e*1.3,v=0;v<5;++v){u=D.k.E(w+v*0.2,1)
o.eK(new A.r(3.05,1.45-u*u*1.4,-6.95),0.05,B.ZC,3,6,0.9)}o.d=0.5
o.aD(B.hca,new A.r(0.7+0.3*Math.sin(e),0.02,0.5),B.ZC,0.9)
o.d=1}return p},
bW0:function bW0(d,e,f,g){var _=this
_.a=5
_.b=!0
_.c=!1
_.d=d
_.e=e
_.f=f
_.r=g
_.at=_.as=_.Q=_.z=_.y=_.x=_.w=!1},
fCS:function fCS(d){this.a=d},
fCP:function fCP(d){this.a=d},
fCO:function fCO(d){this.a=d},
fCR:function fCR(d){this.a=d},
fCQ:function fCQ(d){this.a=d},
fD(d,e,f,g){var w
try{Ak.dE(d,"",e,0,f,g)}catch(w){}},
pN(){A.fD(880,80,0.25,"tri")
C.bP(Q.akI,new A.fDT(),x.H)},
hRw(){return new A.O1(null)},
Kh(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w){return new A.b8e(t,d,u,s,f,r,q,j,g,h,m,n,i,k,v,w,l,o,p,e,null)},
uo(d,e,f,g,h){var w=null,v=g?e.j(0.25):D.w.j(0.5),u=C.n(18),t=C.L(g?e:D.aW,D.r,1),s=x.p,r=C.a([],s)
D.d.v(r,C.a([C.Y(f,g?e:D.ad,w,w,w,16),D.e1],s))
r.push(C.d(d,w,w,w,w,w,w,C.l(w,w,g?e:D.ad,w,w,w,w,w,w,w,w,12,w,w,D.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w))
return C.aA(w,C.p(w,C.A(r,D.m,w,D.e,D.O,0,w,w),D.f,w,w,new C.o(v,w,t,u,w,w,D.n),w,w,w,w,D.hb,w,w,w),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,h,w,w,w,w,w,w,!1,D.a4)},
qv(d,e,f,g){var w=null,v=f==null,u=v?D.dt:g.j(0.9),t=C.n(14),s=C.Y(e,v?D.bV:D.w,w,w,w,18)
return C.E(C.aA(w,C.p(w,C.A(C.a([s,D.bn,new C.dp(1,D.co,C.d(d,w,w,w,w,w,w,C.l(w,w,v?D.bV:D.w,w,w,w,w,w,w,w,w,12.5,w,w,D.u,w,w,!0,w,w,w,w,w,w,w,w),D.K,w,w),w)],x.p),D.m,w,D.bb,D.i,0,w,w),D.f,w,w,new C.o(u,w,w,t,w,w,D.n),w,w,w,w,D.rL,w,w,w),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,!1,D.a4),1)},
aRV(d,e,f,g){return C.bT(E.mH,null,new A.fVi(e,g,f),d,!0,!0,!0,D.ke,!1,!1,x.H)},
II(d,e,f,g,h,i,j){return new A.aYp(i,d,g,f,e,h,j,null)},
fDT:function fDT(){},
m3:function m3(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
O1:function O1(d){this.a=d},
blf:function blf(){var _=this
_.e=!1
_.f=""
_.c=_.a=null},
dVp:function dVp(d){this.a=d},
dVs:function dVs(d){this.a=d},
dVt:function dVt(d){this.a=d},
dVu:function dVu(d){this.a=d},
dVx:function dVx(d){this.a=d},
dVy:function dVy(d){this.a=d},
dVz:function dVz(d){this.a=d},
dVA:function dVA(d){this.a=d},
dVB:function dVB(d){this.a=d},
dVC:function dVC(d){this.a=d},
dVD:function dVD(d){this.a=d},
dVE:function dVE(d){this.a=d},
dVv:function dVv(d){this.a=d},
dVr:function dVr(d){this.a=d},
dVw:function dVw(d){this.a=d},
dVq:function dVq(d,e){this.a=d
this.b=e},
dVi:function dVi(d,e){this.a=d
this.b=e},
dVj:function dVj(d){this.a=d},
dVk:function dVk(d){this.a=d},
dVl:function dVl(d){this.a=d},
dVm:function dVm(d){this.a=d},
dVn:function dVn(){},
dVo:function dVo(d){this.a=d},
awY:function awY(d,e){this.c=d
this.a=e},
buh:function buh(){this.c=this.a=this.d=null},
f9B:function f9B(d){this.a=d},
f9A:function f9A(){},
b8e:function b8e(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0){var _=this
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
czk:function czk(){},
czl:function czl(){},
fVi:function fVi(d,e,f){this.a=d
this.b=e
this.c=f},
fVh:function fVh(){},
aYp:function aYp(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
bY3:function bY3(d){this.a=d},
adt:function adt(){},
dm_:function dm_(d,e){this.a=d
this.b=e},
dm0:function dm0(d){this.a=d},
dlZ:function dlZ(d){this.a=d},
BH:function BH(d,e,f){this.c=d
this.d=e
this.a=f},
aAY:function aAY(d,e,f,g,h){var _=this
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
_.amV$=g
_.amW$=h
_.c=_.a=null},
ddp:function ddp(d,e){this.a=d
this.b=e},
ddn:function ddn(d,e,f){this.a=d
this.b=e
this.c=f},
ddo:function ddo(d){this.a=d},
ddm:function ddm(d){this.a=d},
dd7:function dd7(d){this.a=d},
dd8:function dd8(d){this.a=d},
dd9:function dd9(d){this.a=d},
dda:function dda(){},
dd6:function dd6(d){this.a=d},
ddb:function ddb(d){this.a=d},
ddc:function ddc(d){this.a=d},
ddd:function ddd(d){this.a=d},
dde:function dde(d){this.a=d},
ddf:function ddf(d){this.a=d},
ddg:function ddg(d,e,f){this.a=d
this.b=e
this.c=f},
ddh:function ddh(d){this.a=d},
ddi:function ddi(d,e){this.a=d
this.b=e},
ddj:function ddj(d,e){this.a=d
this.b=e},
ddk:function ddk(d,e){this.a=d
this.b=e},
ddl:function ddl(d){this.a=d},
ddq:function ddq(d,e){this.a=d
this.b=e},
ddr:function ddr(d){this.a=d},
ddA:function ddA(){},
ddJ:function ddJ(d,e,f){this.a=d
this.b=e
this.c=f},
ddQ:function ddQ(d){this.a=d},
ddx:function ddx(){},
ddB:function ddB(d){this.a=d},
ddC:function ddC(d){this.a=d},
ddK:function ddK(d){this.a=d},
ddL:function ddL(d){this.a=d},
ddz:function ddz(d){this.a=d},
ddM:function ddM(d){this.a=d},
ddy:function ddy(d){this.a=d},
ddN:function ddN(d){this.a=d},
ddO:function ddO(d){this.a=d},
ddP:function ddP(d){this.a=d},
ddR:function ddR(d){this.a=d},
ddD:function ddD(d,e){this.a=d
this.b=e},
ddw:function ddw(d,e,f){this.a=d
this.b=e
this.c=f},
ddE:function ddE(d,e){this.a=d
this.b=e},
ddF:function ddF(d){this.a=d},
ddv:function ddv(d){this.a=d},
ddG:function ddG(d){this.a=d},
ddu:function ddu(d){this.a=d},
ddH:function ddH(d){this.a=d},
ddt:function ddt(d){this.a=d},
ddI:function ddI(d){this.a=d},
dds:function dds(d){this.a=d},
aa2:function aa2(d,e){this.c=d
this.a=e},
aGV:function aGV(d,e,f,g){var _=this
_.f=_.e=_.d=$
_.r=""
_.w=0
_.x=null
_.y=!1
_.z=null
_.LR$=d
_.a5o$=e
_.amV$=f
_.amW$=g
_.c=_.a=null},
eZS:function eZS(d,e,f){this.a=d
this.b=e
this.c=f},
eZT:function eZT(d){this.a=d},
eZR:function eZR(d){this.a=d},
eZK:function eZK(d){this.a=d},
eZL:function eZL(d,e){this.a=d
this.b=e},
eZM:function eZM(d,e){this.a=d
this.b=e},
eZN:function eZN(d){this.a=d},
eZO:function eZO(d,e){this.a=d
this.b=e},
eZP:function eZP(d){this.a=d},
eZQ:function eZQ(d,e){this.a=d
this.b=e},
eZX:function eZX(){},
f_0:function f_0(d,e){this.a=d
this.b=e},
eZY:function eZY(d){this.a=d},
eZZ:function eZZ(d,e){this.a=d
this.b=e},
eZW:function eZW(d,e,f){this.a=d
this.b=e
this.c=f},
f__:function f__(d){this.a=d},
eZV:function eZV(d){this.a=d},
eZU:function eZU(){},
a5t:function a5t(d,e){this.c=d
this.a=e},
aBh:function aBh(d,e,f,g){var _=this
_.f=_.e=_.d=$
_.r=""
_.w=0
_.x=null
_.y=!1
_.z=null
_.LR$=d
_.a5o$=e
_.amV$=f
_.amW$=g
_.c=_.a=null},
dgr:function dgr(d,e,f){this.a=d
this.b=e
this.c=f},
dgs:function dgs(d){this.a=d},
dgq:function dgq(d){this.a=d},
dgj:function dgj(d){this.a=d},
dgm:function dgm(d){this.a=d},
dgn:function dgn(d,e){this.a=d
this.b=e},
dgo:function dgo(d,e){this.a=d
this.b=e},
dgl:function dgl(d){this.a=d},
dgp:function dgp(d,e){this.a=d
this.b=e},
dgt:function dgt(d,e,f){this.a=d
this.b=e
this.c=f},
dgk:function dgk(d){this.a=d},
dgx:function dgx(){},
dgD:function dgD(d,e){this.a=d
this.b=e},
dgy:function dgy(d){this.a=d},
dgz:function dgz(d){this.a=d},
dgw:function dgw(d){this.a=d},
dgB:function dgB(d,e){this.a=d
this.b=e},
dgv:function dgv(d,e,f){this.a=d
this.b=e
this.c=f},
dgA:function dgA(d){this.a=d},
dgC:function dgC(d){this.a=d},
dgu:function dgu(d){this.a=d},
aCa:function aCa(d){this.a=d},
aCb:function aCb(d){var _=this
_.d=d
_.f=_.e=$
_.r=0
_.w=""
_.x=null
_.y=!1
_.c=_.a=_.z=null},
dnz:function dnz(d,e,f){this.a=d
this.b=e
this.c=f},
dnA:function dnA(d){this.a=d},
dny:function dny(d){this.a=d},
dnt:function dnt(d){this.a=d},
dnv:function dnv(d,e){this.a=d
this.b=e},
dnw:function dnw(d,e){this.a=d
this.b=e},
dnx:function dnx(d,e){this.a=d
this.b=e},
dnu:function dnu(d){this.a=d},
dnI:function dnI(d,e){this.a=d
this.b=e},
dnD:function dnD(d,e){this.a=d
this.b=e},
dnF:function dnF(d){this.a=d},
dnE:function dnE(d){this.a=d},
dnG:function dnG(d){this.a=d},
dnC:function dnC(d){this.a=d},
dnH:function dnH(d){this.a=d},
dnB:function dnB(d,e){this.a=d
this.b=e},
ag9:function ag9(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bxW:function bxW(){var _=this
_.d=null
_.e=!1
_.c=_.a=null},
fl2:function fl2(d){this.a=d},
fl0:function fl0(d){this.a=d},
fl1:function fl1(d){this.a=d},
fl_:function fl_(d){this.a=d},
fl4:function fl4(d){this.a=d},
fl5:function fl5(d){this.a=d},
fl3:function fl3(d){this.a=d},
byx:function byx(){},
byC:function byC(){},
bzS:function bzS(){},
jU:function jU(d,e){this.a=d
this.b=e},
No:function No(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a7w:function a7w(d){this.a=d},
ccw:function ccw(d){this.a=d},
h7I(){var w=x.N
return new A.cpW(C.aS(w),C.I(["n1",!1,"n2",!1],w,x.y),C.U(x.S,w))},
iqb(d,e,f){var w,v
if(!f.c.q(0,e)){w=f.d
return e==="hot"?"The red (hot) hose goes on the LEFT side only. "+w:"The blue (cold) hose goes on the RIGHT side only. "+w}w=d.e
v=f.a
if(w.h(0,v)!=null)return"That connection already has a hose."
w.n(0,v,e)
return null},
heT(){var w,v,u=C.a([B.aYe,B.hfm],x.o)
for(w=1;w<=12;++w){v=3.141592653589793+3.141592653589793*w/12
u.push(new A.r(3+3*Math.cos(v),0.2+3*Math.sin(v),0))}D.d.v(u,A.Dz(B.dee,1,6))
return u},
aQk(d){var w,v,u,t,s="trap",r=C.a([],x.z),q=new A.eM(r)
q.b=49
q.kZ(B.h6O,B.h8T,B.iC,0.1,2)
q.kZ(B.hnb,B.h6S,B.iC,0.1,2)
q.b=47
q.hl(B.hgT,B.h8U,B.vY,3)
q.hl(B.h7Z,B.h6T,B.vY,3)
q.b=46
A.b7C(q,9,B.Mx,14,15,B.hj,B.MK,40,5.9,!0,2,1.8,15.1,0.6,0,-1.2)
q.cJ(B.hiq,B.heY,1.5,B.hj,0.85,14)
q.b=48
q.a4L(B.abY,B.hd0,0.92,B.q8,!1,!0,0.3,14)
q.d07(B.abY,B.hmg,1,0.72,B.q8,0.3)
w=new A.fDt(d,q)
w.$5(41,B.aA0,B.hj,0.85,"tail")
w.$5(42,A.heT(),B.q8,0.3,s)
w.$5(43,B.aCy,B.q8,0.3,"arm")
w=new A.fDs(d,q)
v=d.a
w.$6(44,"n1",B.abT,B.eb,B.hdp,v.q(0,"tail")&&v.q(0,s))
w.$6(45,"n2",B.abV,B.h4,B.hjG,v.q(0,s)&&v.q(0,"arm"))
if(v.q(0,s)){q.b=0
q.d=0.55
q.e=0.4
u=A.heT()
w=C.T(u).k("X<1>")
t=C.C(new C.X(u,new A.fDr(),w),w.k("M.E"))
if(t.length>1)q.Vj(t,0.4092,B.ZQ,!1,!0,0.6,8)
q.d=1
q.e=0}return new A.qU(r,C.I([41,B.egl,42,B.egn,43,B.egT,44,B.egH,45,B.eh6,46,B.egt,47,B.egA,48,B.eg2,49,B.egp],x.S,x.q),B.v0,B.qN,null,!1,0)},
h9L(d,e){var w=D.k.F(e,0,1)*(d.length-1),v=D.o.F(D.k.bh(w),0,d.length-2)
return A.oM(d[v],d[v+1],w-v)},
hak(d,e,f,g,h,i){var w,v,u,t,s
d.b=0
d.e=0.3
d.d=0.55
d.Vj(e,h,g,!1,!0,0.9,8)
d.d=0.95
for(w=f*i,v=x.o,u=h*0.5,t=0;t<5;++t){s=D.k.E(w+t/5,1)
d.Vj(C.a([A.h9L(e,s),A.h9L(e,Math.min(1,s+0.09))],v),u,B.Nb,!1,!1,1,6)}d.d=1
d.e=0},
hxn(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k
d.b=0
d.e=0.4
for(w=f*1.3,v=e.a,u=v+0,t=e.b,s=t+0.05,r=e.c,q=r+0,p=t+0.12,o=0;o<3;++o){n=D.k.E(w+o/3,1)
m=0.5+n*3
d.d=0.7*(1-n)
d.my(new A.r(u,s,q),new A.r(u,p,q),m,Math.max(0.1,m-0.3),B.Nb,0.6,16)}d.d=0.9
for(w=f*1.8,l=0;l<6;++l){n=D.k.E(w+l/6,1)
k=l*1.05
d.eK(new A.r(v+Math.cos(k)*n*1.4,t+4*n*(1-n),r+Math.sin(k)*n*1.4),0.16,B.Nb,3,6,1)}d.d=1
d.e=0},
hcK(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=C.a([],x.z),k=new A.eM(l)
k.e=0.9
w=0.5+0.5*Math.sin(e*7)
for(v=d.length,u=0.25+0.25*w,t=1.5+0.7*w,s=0.9*w,r=2.3+s,s=1.9+s,q=0;q<d.length;d.length===v||(0,C.J)(d),++q){p=d[q]
k.d=u
k.eK(p,t,G.qj,5,10,0)
k.d=0.8
o=p.a+0
n=p.b+0
m=p.c
k.my(new A.r(o,n,m+0.6),new A.r(o,n,m+0.9),r,s,G.qj,0.2,20)}k.d=1
k.e=0
return l},
io6(d,e){var w,v,u,t,s,r,q,p,o=C.a([],x.z),n=new A.eM(o),m=d.d
if(m.length!==0){w=m==="n1"?B.hnH:B.hlD
for(m=e*1.4,v=w.a+0,u=w.b,t=w.c+0,s=0;s<5;++s){r=D.k.E(m+s*0.2,1)
n.d=0.85
n.eK(new A.r(v,u+(-r*6*r-r*1.5),t),0.24*(1-r*0.3),B.ZC,3,6,0.9)}n.d=1}if(d.c){A.hak(n,C.a([B.aZa,B.aZa.a7(0,B.h57),new A.r(0,11,-2.3)],x.o),e,B.biv,0.42,1.4)
n.b=0
n.d=0.5
n.e=0.2
n.aD(B.hne,new A.r(12.6,1.0999999999999996,7.6),B.ai9,0.7)
n.d=1
n.e=0
A.hxn(n,new A.r(0,11.05,-2.3),e)
n.b=0
n.e=0.4
for(m=e*0.9,q=0;q<2;++q){p=2.2*(1-D.k.E(m+q/2,1))
n.d=0.7
n.my(new A.r(0,11.06,0),new A.r(0,11.12,0),p+0.25,p,B.Nb,0.5,14)}n.d=1
n.e=0}return o},
RQ(d){switch(d){case 61:return B.h6N
case 62:return B.hly
case 63:return B.hfT
default:return B.hfJ}},
hyU(d){var w=d==="hot",v=A.RQ(w?61:62),u=A.RQ(w?63:64),t=w?-1:1
return A.aix(C.a([v,v.a7(0,new A.r(t*0.6,2.2,1.2)),A.oM(v,u,0.5).a7(0,new A.r(t*1.4,0,2.6)),u.a7(0,new A.r(-t*0.2,-2,1)),u],x.o),6)},
ah6(a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=C.a([],x.z),a4=new A.eM(a3)
a4.b=67
a4.hl(B.h6K,B.h8q,B.vY,3)
a4.b=66
A.b7C(a4,7,B.ZD,14,18,B.hj,B.MK,36,7,!1,2,1.6,15.3,0.6,0,1.5)
a4.kZ(B.h9U,B.aXP,B.iC,0.1,2)
a4.kZ(B.h8M,B.aXP,B.iC,0.1,2)
a4.kZ(B.hes,B.h8n,B.iC,0.1,3)
a4.kZ(B.hjp,B.hiX,B.iC,0.1,2)
a4.kZ(B.hir,B.hiH,B.iC,0.1,2)
a4.b=65
a4.e=0.5
a4.aD(B.hlB,B.heA,B.hj,0.9)
a4.iD(A.Dz(B.dk0,1.4,6),0.5,B.hj,!0,0.9,12)
for(w=0;w<2;++w){v=B.df0[w]
u=v*1.2
a4.cJ(new A.r(u,15.5,-3.6),new A.r(u,17.7,-3.6),0.38,B.hj,0.9,10)
t=v<0?B.rv:B.nj
a4.cJ(new A.r(u,17.7,-3.6),new A.r(u,18.6,-3.6),0.6,t,0.6,12)}a4.e=0
for(u=[B.eFl,B.eAt],t=u.length,w=0;w<t;++w){s=u[w]
v=s.b
a4.b=s.a
a4.cJ(new A.r(v,15.3,-3.6),new A.r(v,11.4,-3.6),0.45,B.hj,0.9,10)
a4.cJ(new A.r(v,11.4,-3.6),new A.r(v,10.7,-3.6),0.3,B.bpt,0.6,8)
a4.my(new A.r(v,11.3,-3.6),new A.r(v,11.9,-3.6),0.78,0.48,B.brI,0.7,8)}for(u=[B.eZ2,B.f0f],t=u.length,w=0;w<t;++w){s=u[w]
r=s.a
v=s.b
q=s.c
a4.b=r
a4.cJ(new A.r(v,-1.5,-6),new A.r(v,-1.5,-3.6),0.4,B.Ma,0.7,12)
a4.cJ(new A.r(v,-1.5,-4.4),new A.r(v,0.7,-4.4),1,B.hj,0.9,14)
a4.cJ(new A.r(v,0.7,-4.4),new A.r(v,1.5,-3.6),0.45,B.hj,0.9,10)
a4.cJ(new A.r(v,-0.2,-4.4),new A.r(v,-0.2,-3.1),0.2,B.afH,0.7,8)
p=(r===61?a5.f:a5.r)?B.eb:B.h4
a4.cJ(new A.r(v,-0.2,-3.1),new A.r(v,-0.2,-2.2),1,q,0.5,12)
s=p.a*1.9
o=p.b*1.9
n=p.c*1.9
m=v-s
l=-0.2-o
k=-2.6-n
s=v+s
o=-0.2+o
n=-2.6+n
a4.cJ(new A.r(m,l,k),new A.r(s,o,n),0.5,q,0.5,8)
a4.eK(new A.r(m,l,k),0.75,q,4,8,0.5)
a4.eK(new A.r(s,o,n),0.75,q,4,8,0.5)
a4.my(new A.r(v,1.2,-3.6),new A.r(v,1.9,-3.6),0.78,0.4,B.tS,0.8,8)}for(u=x.o,w=0;w<2;++w){j=B.dmJ[w]
t=j==="hot"
i=t?B.cL1:B.cLe
s=C.T(i).k("X<1>")
h=C.C(new C.X(i,new A.fCy(a5,j),s),s.k("M.E"))
a4.b=t?68:69
g=t?B.rv:B.nj
t=h.length
if(t===2){f=A.hyU(j)
a4.iD(f,0.34,B.ye,!1,0.7,8)
e=f.length/2|0
a4.iD(C.a([f[e-1],f[e],f[e+1]],u),0.4,g,!1,0.4,8)
for(t=i.length,d=0;d<t;++d){a0=A.RQ(i[d])
s=a0.a+0
o=a0.b
n=a0.c+0
a4.my(new A.r(s,o+-0.2,n),new A.r(s,o+0.6,n),0.62,0.3,B.tS,0.8,8)}}else if(t===1){a0=A.RQ(D.d.gH(h))
a1=D.d.gH(h)===D.d.gH(i)?1:-1
t=a0.a+0
s=a0.b
o=a0.c
a4.iD(C.a([a0,new A.r(t,s+a1*1.4,o+1),new A.r(t,s+a1*3,o+2.4)],u),0.34,B.ye,!1,0.7,8)
o+=0
a4.my(new A.r(t,s+-0.2,o),new A.r(t,s+0.6,o),0.62,0.3,B.tS,0.8,8)}}if(a5.w){a4.b=0
a4.d=0.5
for(u=a5.e,w=0;w<4;++w){a2=B.Su[w]
t=a2.a
if(u.h(0,t)!=null)continue
t=A.RQ(t)
s=a2.c.q(0,"hot")?B.rv:B.nj
a4.eK(new A.r(t.a+0,t.b+0,t.c+0.9),0.65,s,4,8,0.1)}a4.d=1}return new A.qU(a3,C.I([61,B.egc,62,B.ege,63,B.eg6,64,B.egf,65,B.egB,66,B.egw,67,B.eg3,68,B.eha,69,B.egE],x.S,x.q),B.v0,B.qN,null,!1,0)},
ieQ(d,e){var w,v,u,t,s,r,q,p,o,n,m=C.a([],x.z),l=new A.eM(m),k=new A.fFj(l,e)
if(d.f){w=d.e
v=w.h(0,61)==="hot"&&w.h(0,63)==="hot"}else v=!1
if(d.r){w=d.e
u=w.h(0,62)==="cold"&&w.h(0,64)==="cold"}else u=!1
if(d.f&&!v)k.$3(61,B.ZS,-1)
if(d.r&&!u)k.$3(62,B.YW,1)
for(w=[new C.b5(v,"hot",B.ZS),new C.b5(u,"cold",B.YW)],t=w.length,s=e*0.6,r=0;r<t;++r){q=w[r]
p=q.c
if(!q.a)continue
o=A.hyU(q.b)
l.b=0
l.e=0.3
l.d=0.9
for(n=0;n<4;++n){q=A.h9L(o,D.k.E(s+n/4,1))
l.eK(new A.r(q.a+0,q.b+0,q.c+0.32),0.2,p,3,6,0.9)}l.d=1
l.e=0}if(v||u){if(v&&u)p=B.bfc
else p=v?B.ZS:B.YW
A.hak(l,C.a([B.abS,B.abS.a7(0,B.hlS),new A.r(0,10.6,1.6)],x.o),e,p,0.42,1.4)
l.b=0
l.d=0.5
l.e=0.2
l.aD(new A.r(0,10.05,3.7),new A.r(12.8,1.0999999999999996,5.8),B.ai9,0.7)
l.d=1
l.e=0
A.hxn(l,new A.r(0,10.65,1.6),e)}return m},
bDA(d){return D.d.cM(B.Su,new A.fFi(d))},
cpW:function cpW(d,e,f){var _=this
_.a=d
_.b=e
_.c=!1
_.d=""
_.e=f
_.w=_.r=_.f=!1},
Fy:function Fy(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fDt:function fDt(d,e){this.a=d
this.b=e},
fDs:function fDs(d,e){this.a=d
this.b=e},
fDr:function fDr(){},
fCy:function fCy(d,e){this.a=d
this.b=e},
fFj:function fFj(d,e){this.a=d
this.b=e},
fFi:function fFi(d){this.a=d},
h7H(d,e,f){var w=x.N
w=new A.cpM(e,d,C.aS(w),C.U(w,x.S),C.aS(w))
w.bBz(d,e,f)
return w},
hy5(c0,c1,c2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5=C.a([],x.z),b6=new A.eM(b5),b7=C.U(x.S,x.q),b8=C.a([],x.E),b9=c0.c
b9===$&&C.c()
w=b9.a==="bathroom"
v=w?28:0
b6.b=9199
b6.hl(B.hkF,B.hn3,B.bib,4)
b6.hl(B.hhW,B.hlv,B.Yu,4)
b6.hl(new A.r(v+19.8+0.6,24,16),B.heX,B.vY,2)
b7.n(0,9199,B.ego)
b6.b=9198
b6.aD(new A.r(v,0.6,10),B.hlT,B.iC,0.1)
b6.aD(new A.r(v,29.4,18.6),B.hex,B.iC,0.1)
b6.aD(new A.r(v-19.4,13.6,10.5),B.hmM,B.iC,0.1)
for(u=[B.f3y,B.f3u,B.f2q,B.f2n],t=u.length,s=0;s<t;++s){r=u[s].a
b6.aD(new A.r(v+r[0],33,r[1]),new A.r(r[2],2.4,r[3]),B.bv7,0.6)}b6.a4L(new A.r(v,27,8),new A.r(v,34.3,8),10.5,B.ZD,!1,!0,0.7,24)
b6.cJ(new A.r(v,27,8),new A.r(v,27.2,8),10.5,B.blg,0.5,24)
if(w){b6.aD(new A.r(v,46,0.6),B.heH,D.bP,0.3)
b6.aD(new A.r(v,46,1.1),B.hdv,B.i6,0.9)}b6.dq(new A.r(v,27.1,8),new A.r(v,27.3,8),1.4,B.f_,12)
b6.a4L(new A.r(v+15,23.6,8),new A.r(v+19.4,23.6,8),0.92,B.q8,!1,!0,0.3,12)
b7.n(0,9198,B.egQ)
b6.b=9400
b6.cJ(new A.r(-56,18,0),new A.r(-56,18,6),1.5,B.tS,0.8,12)
u=c0.r?B.nj:D.bo
b6.cJ(new A.r(-57,18,6),new A.r(-55,18,6.5),4,u,0.5,14)
b6.cJ(new A.r(-56,16,0),new A.r(-56,20,0),1,B.Ma,0.7,10)
u=c0.r?"The water is ON. Turn it OFF with your hand before you cut into any pipe, and turn it ON to test your work.":"The water is OFF. Turn it ON to test your work."
b7.n(0,9400,new A.cH("Main water valve",u,new A.r(-56,18,4),22))
u=c0.r
t=u?"MAIN WATER: ON":"MAIN WATER: OFF"
u=u?D.dH:D.bo
b8.push(new A.hd(new A.r(-56,24,6),t,u,0))
q=new A.fDq(b6)
u=v-8
q.$1(u)
t=v+8
q.$1(t)
if(w)q.$1(-40)
p=new A.r(v,21,8)
o=new A.fDo(p)
n=new A.fDi(b6,c0)
m=new A.fDj(b6,c0)
l=new A.fDp(c0,b7,c2,c1,b8)
k=b9.c
for(r=k.length,j=c0.x,i=c0.e,h=c0.f,g=x.o,s=0;s<r;++s){f=k[s]
e=f.a
d=i.q(0,e)
if(d){a0=c0.vE(0,e)
a1=h.h(0,e)
if(a1==null)a1=0
a2=a0.r-a1>0}else a2=!1
a3=D.d.cp(k,f)
a4=9100+a3
j.q(0,e)
switch(e){case"flange":a5=new A.r(-30,0.3,14)
if(d){b6.b=a4
b6.cJ(a5,new A.r(-30,0.8999999999999999,14),5.5,B.q8,0.4,18)
b6.my(new A.r(-30,0.8,14),new A.r(-30,1.2,14),5.5,3.2,B.tS,0.8,18)}else m.$3(e,new A.r(-30,0.8,14),B.h5I)
l.$3(f,a5,"Flange spot")
break
case"wax":a5=new A.r(-30,1.2,14)
if(d){b6.b=a4
b6.my(a5,new A.r(-30,2.3,14),4.2,2.4,B.bva,0.2,18)}else m.$3(e,new A.r(-30,1.7,14),B.hic)
l.$3(f,a5,"Wax ring spot")
break
case"toilet":if(d){b6.b=a4
b6.wV(new A.r(-30,0.5,14),new A.r(-30,16,14),8.5,B.BA,6,0.8,20)
b6.cJ(new A.r(-30,16,14),new A.r(-30,17,14),9.5,B.N6,0.8,20)
b6.aD(new A.r(-30,22,4.5),B.aXT,B.BA,0.8)
b6.aD(new A.r(-30,29.2,4.5),B.hcq,B.N6,0.8)}else{b6.b=a4
b6.d=0.32
b6.dq(new A.r(-30,0.5,14),new A.r(-30,17,14),8.5,D.b0,16)
b6.aF(new A.r(-30,22,4.5),B.aXT,D.b0)
b6.d=1}l.$3(f,new A.r(-30,12,12),"Toilet spot")
break
case"bolts":if(d){for(e=9200+a3*2,a6=0;a6<2;++a6){a7=B.aC1[a6]
b6.b=e+(a7<0?0:1)
a0=-30+a7
b6.cJ(new A.r(a0,0.5,17),new A.r(a0,3.6,17),0.45,B.Mx,0.8,8)
a1=a2?D.cJ:B.Mx
b6.cJ(new A.r(a0,3.4,17),new A.r(a0,4.6,17),1.2,a1,0.8,6)}e=a2?"The nuts are loose. Tighten them with the wrench, a little at a time so the porcelain does not crack.":"The toilet is bolted down."
b7.n(0,a4,new A.cH(f.c,e,new A.r(-30,3,17),20))}else for(a6=0;a6<2;++a6){a7=B.aC1[a6]
b6.b=a4
b6.d=0.4
e=-30+a7
b6.dq(new A.r(e,0.5,17),new A.r(e,4.6,17),1.2,D.b0,8)
b6.d=1}l.$3(f,new A.r(-30,3,17),"Bolts")
break
case"tvalve":A.hc8(b6,a4,new A.r(-40,8,1.6),d,B.nj,new A.fDe(m,f,-30))
l.$3(f,new A.r(-40,8,2),"Valve")
break
case"those":if(d){b6.b=a4
b6.iD(A.aix(C.a([new A.r(-40,10,1.6),new A.r(-42,14,3.5),new A.r(-36,17,3.6),new A.r(-32,21,2.5)],g),6),0.55,B.ye,!1,0.7,8)
b6.iD(C.a([new A.r(-36.8,15.5,3.6),new A.r(-35,16.4,3.6)],g),0.62,B.nj,!1,0.4,8)
if(a2)b6.dq(new A.r(-40,10,1.6),new A.r(-40,11.2,1.6),0.9,D.cJ,8)}else n.$3$r(e,A.aix(C.a([new A.r(-40,10,1.6),new A.r(-42,14,3.5),new A.r(-36,17,3.6),new A.r(-32,21,2.5)],g),6),0.9)
l.$3(f,new A.r(-36,15,3),"Toilet hose")
break
case"faucet":if(d){b6.b=a4
b6.cJ(new A.r(v,34.2,8),new A.r(v,34.6,8),3.6,B.hj,0.9,20)
b6.iD(A.Dz(C.a([new A.r(v,34.6,8),new A.r(v,40,8),new A.r(v,43,10),new A.r(v,43,14),new A.r(v,41.2,14.6)],g),1.4,6),0.5,B.hj,!0,0.9,10)
for(a6=0;a6<2;++a6){a7=E.a5O[a6]
e=v+a7
b6.cJ(new A.r(e,34.6,8),new A.r(e,36.6,8),0.5,B.hj,0.9,8)
a0=a7<0?B.rv:B.nj
b6.cJ(new A.r(e,36.6,8),new A.r(e,37.6,8),0.8,a0,0.6,10)}for(a6=0;a6<2;++a6){e=v+B.dpS[a6]
b6.cJ(new A.r(e,34,8),new A.r(e,28.4,8),0.45,B.hj,0.9,8)}}else m.$3(e,new A.r(v,38,9),B.h5x)
l.$3(f,new A.r(v,38,8),"Faucet spot")
break
case"vhot":A.hc8(b6,a4,new A.r(u,8,1.6),d,B.rv,new A.fDf(m,f,v))
l.$3(f,new A.r(u,8,2),"Hot valve")
break
case"vcold":A.hc8(b6,a4,new A.r(t,8,1.6),d,B.nj,new A.fDg(m,f,v))
l.$3(f,new A.r(t,8,2),"Cold valve")
break
case"hhot":case"hcold":a8=e==="hhot"
a9=a8?-1:1
a0=v+a9*3
b0=A.aix(C.a([new A.r(v+a9*8,10.5,1.8),new A.r(v+a9*9,16,3.5),new A.r(v+a9*6,22,4.2),new A.r(a0,27.5,6),new A.r(a0,28.6,8)],g),6)
if(d){b6.b=a4
b6.iD(b0,0.5,B.ye,!1,0.7,8)
b1=b0.length/2|0
e=C.a([b0[b1-1],b0[b1],b0[b1+1]],g)
b6.iD(e,0.58,a8?B.rv:B.nj,!1,0.4,8)
if(a2){e=D.d.gH(b0)
a0=D.d.gH(b0)
b6.dq(e,new A.r(a0.a+0,a0.b+1.4,a0.c+0),0.9,D.cJ,8)
a0=D.d.gam(b0)
b6.dq(new A.r(a0.a,a0.b-1.4,a0.c),D.d.gam(b0),0.9,D.cJ,8)}}else n.$3$r(e,b0,0.9)
e=b0[b0.length/2|0]
l.$3(f,e,a8?"Hot hose":"Cold hose")
break
case"tail":case"trap":case"arm":a0=e==="tail"
if(a0)a1=B.aA0
else a1=e==="trap"?A.heT():B.aCy
b2=o.$1(a1)
if(d){b6.b=a4
a1=a0?B.hj:B.q8
b6.apT(b2,0.66,a1,!1,!0,!0,a0?0.85:0.3,12)}else n.$3$r(e,b2,0.78)
a1=J.a7(b2)
a1=a1.h(b2,a1.gI(b2)/2|0)
if(a0)e="Tailpiece"
else e=e==="trap"?"P-trap":"Trap arm"
l.$3(f,a1,e)
break}}b3=new A.fDm(k,c0,b6,b7)
b3.$4("trap",p.a7(0,B.abT),B.eb,0)
b3.$4("arm",p.a7(0,B.abV),B.h4,1)
for(u=C.dX(j,j.r,C.a4(j).c),t=u.$ti.c;u.C();){r=u.d
if(r==null)r=t.a(r)
b4=D.d.fl(b9.c,new A.fDh(r))
r=A.hCp(c0,r)
b8.push(new A.hd(new A.r(r.a+0,r.b+6,r.c+4),"\ud83d\udca7 LEAK: "+b4.c,D.bC,0))}return new A.qU(b5,b7,b8,B.qN,null,!1,0)},
hc8(d,e,f,g,h,i){if(!g){i.$0()
return}d.b=e
d.cJ(f.a7(0,B.hie),f.a7(0,B.aZ7),0.9,B.tS,0.8,12)
d.cJ(f.a7(0,B.aZ7),f.a7(0,B.hen),0.45,B.tS,0.8,10)
d.cJ(f.a7(0,B.hlO),f.a7(0,B.aZx),0.3,B.afH,0.7,8)
d.cJ(f.a7(0,B.aZx),f.a7(0,B.hmm),1.2,h,0.5,12)},
hCp(d,e){var w,v=d.c
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
inZ(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=C.a([],x.z),f=new A.eM(g),e=d.x
if(e.a===0)return g
for(e=C.dX(e,e.r,C.a4(e).c),w=a0*2,v=e.$ti.c,u=d.e;e.C();){t=e.d
if(t==null)t=v.a(t)
s=A.hCp(d,t)
r=d.c
r===$&&C.c()
q=D.d.fl(r.c,new A.fUp(t)).b==="valve"||!u.q(0,t)
t=s.a
r=s.b
p=s.c
o=0
for(;;){if(!(o<(q?14:8)))break
n=q?1.8:1.2
m=q?14:8
l=D.k.E(a0*n+o/m,1)
m=Math.sin(o*2.1)
n=q?4:0.8
k=q?5:-0.5
j=q?16:10
i=q?7:1
h=q?1.1:0.9
f.eK(new A.r(t+m*l*n,r+(l*k-l*l*j),p+(1.5+l*i)),h,B.ZQ,3,6,0.5);++o}f.d=0.55
f.cJ(new A.r(t,0.3,11),new A.r(t,0.5,11),7+2*Math.sin(w),B.ZQ,0.6,18)
f.d=1}return g},
nz:function nz(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
XP:function XP(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cpM:function cpM(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.d=_.c=$
_.e=f
_.f=g
_.r=!0
_.w=0
_.x=h
_.y=!1},
cpQ:function cpQ(d){this.a=d},
cpR:function cpR(d){this.a=d},
cpN:function cpN(d){this.a=d},
cpS:function cpS(d){this.a=d},
cpT:function cpT(d){this.a=d},
cpU:function cpU(){},
cpV:function cpV(){},
cpO:function cpO(d){this.a=d},
cpP:function cpP(d){this.a=d},
fDq:function fDq(d){this.a=d},
fDo:function fDo(d){this.a=d},
fDi:function fDi(d,e){this.a=d
this.b=e},
fDl:function fDl(d){this.a=d},
fDj:function fDj(d,e){this.a=d
this.b=e},
fDk:function fDk(d){this.a=d},
fDp:function fDp(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fDe:function fDe(d,e,f){this.a=d
this.b=e
this.c=f},
fDf:function fDf(d,e,f){this.a=d
this.b=e
this.c=f},
fDg:function fDg(d,e,f){this.a=d
this.b=e
this.c=f},
fDm:function fDm(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fDn:function fDn(d){this.a=d},
fDh:function fDh(d){this.a=d},
fUp:function fUp(d){this.a=d},
WN:function WN(d,e,f){this.c=d
this.e=e
this.a=f},
aFC:function aFC(d,e){var _=this
_.e=_.d=$
_.f=d
_.r=$
_.w=e
_.x=""
_.y=0
_.z=null
_.as=_.Q=!1
_.c=_.a=_.at=null},
etA:function etA(d,e,f){this.a=d
this.b=e
this.c=f},
etB:function etB(d){this.a=d},
etz:function etz(d){this.a=d},
etv:function etv(d){this.a=d},
etF:function etF(d){this.a=d},
etk:function etk(d,e){this.a=d
this.b=e},
etl:function etl(d,e){this.a=d
this.b=e},
etm:function etm(d){this.a=d},
etr:function etr(d,e){this.a=d
this.b=e},
etp:function etp(d){this.a=d},
etq:function etq(d,e){this.a=d
this.b=e},
ety:function ety(d){this.a=d},
etG:function etG(d){this.a=d},
ets:function ets(d){this.a=d},
ett:function ett(){},
etu:function etu(d){this.a=d},
etC:function etC(d,e){this.a=d
this.b=e},
etD:function etD(d){this.a=d},
etE:function etE(d,e){this.a=d
this.b=e},
eto:function eto(d,e,f){this.a=d
this.b=e
this.c=f},
etn:function etn(d,e,f){this.a=d
this.b=e
this.c=f},
etH:function etH(d){this.a=d},
etL:function etL(d,e){this.a=d
this.b=e},
etJ:function etJ(){},
etI:function etI(d){this.a=d},
etK:function etK(d,e){this.a=d
this.b=e},
etx:function etx(d){this.a=d},
etw:function etw(d,e){this.a=d
this.b=e},
j4(d){return D.d.fl(B.uW,new A.h1N(d))},
aQh(d){var w
switch(d){case"tv":w="The TV"
break
case"lamp":w="The lamp"
break
case"toaster":w="The toaster"
break
case"washerM":w="The washing machine"
break
case"dryerM":w="The dryer"
break
case"rangeM":w="The range"
break
default:w="The hair dryer"
break}return w},
cuJ(d,e,f,g,h){var w=x.S,v=x.N
v=new A.Yj(g,f,C.U(w,v),C.aS(w),C.aS(w),C.U(w,x.cH),C.a([new A.Yu(),new A.Yu()],x.gD),C.U(w,x.cD),C.aS(w),C.U(w,v),C.aS(w),C.a([],x.s),C.U(w,v))
v.cnS(d,e,h)
return v},
h89(d,e){var w=!0
if(d!==e)if(!(D.d.q(B.k7,d)&&D.d.q(B.k7,e)))if(!(D.d.q(B.iP,d)&&D.d.q(B.iP,e)))if(d==="light"||d==="fan")w=e==="light"||e==="fan"
else w=!1
return w},
zk:function zk(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
h1N:function h1N(d){this.a=d},
lc:function lc(d,e,f){this.a=d
this.b=e
this.c=f},
Yu:function Yu(){var _=this
_.a=!1
_.b=0
_.c=!0
_.d=!1},
aww:function aww(d,e){var _=this
_.a=!1
_.b=d
_.c=e
_.e=_.d=!1},
aVg:function aVg(d,e){this.a=d
this.b=e
this.c=!1},
eu:function eu(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Yj:function Yj(d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
cuN:function cuN(){},
cuU:function cuU(d){this.a=d},
cuV:function cuV(d){this.a=d},
cuW:function cuW(d,e){this.a=d
this.b=e},
cuX:function cuX(d,e){this.a=d
this.b=e},
cuZ:function cuZ(d){this.a=d},
cuY:function cuY(d,e){this.a=d
this.b=e},
cuM:function cuM(d){this.a=d},
cuK:function cuK(){},
cuL:function cuL(d){this.a=d},
cuS:function cuS(){},
cuT:function cuT(){},
cuO:function cuO(){},
cuP:function cuP(d){this.a=d},
cuQ:function cuQ(d){this.a=d},
cv_:function cv_(d){this.a=d},
cuR:function cuR(d){this.a=d},
cjw(d,e,f,g){return new A.OE(d,!1,f,g,null)},
hI:function hI(d,e,f){this.a=d
this.b=e
this.c=f},
OE:function OE(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.a=h},
aFJ:function aFJ(d,e,f){var _=this
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
eya:function eya(d,e,f){this.a=d
this.b=e
this.c=f},
eyb:function eyb(d){this.a=d},
ey9:function ey9(d){this.a=d},
exg:function exg(d){this.a=d},
exh:function exh(d){this.a=d},
exf:function exf(d){this.a=d},
exi:function exi(d){this.a=d},
exj:function exj(d){this.a=d},
exe:function exe(d){this.a=d},
exk:function exk(d){this.a=d},
exl:function exl(d){this.a=d},
exv:function exv(d){this.a=d},
exx:function exx(d){this.a=d},
exm:function exm(){},
exn:function exn(d){this.a=d},
exo:function exo(d){this.a=d},
exO:function exO(d,e){this.a=d
this.b=e},
exw:function exw(d){this.a=d},
ey6:function ey6(d){this.a=d},
ey7:function ey7(d){this.a=d},
ey8:function ey8(d,e){this.a=d
this.b=e},
ey3:function ey3(d){this.a=d},
ey4:function ey4(d,e){this.a=d
this.b=e},
ey5:function ey5(d,e){this.a=d
this.b=e},
ey2:function ey2(d){this.a=d},
exV:function exV(d){this.a=d},
exW:function exW(d){this.a=d},
exX:function exX(d){this.a=d},
exY:function exY(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
exZ:function exZ(d){this.a=d},
ey_:function ey_(d,e,f){this.a=d
this.b=e
this.c=f},
ey0:function ey0(d){this.a=d},
ey1:function ey1(d,e,f){this.a=d
this.b=e
this.c=f},
eye:function eye(d,e){this.a=d
this.b=e},
exu:function exu(d){this.a=d},
exs:function exs(d){this.a=d},
ext:function ext(d,e){this.a=d
this.b=e},
exr:function exr(d,e){this.a=d
this.b=e},
exp:function exp(d){this.a=d},
exq:function exq(d,e){this.a=d
this.b=e},
exy:function exy(d,e){this.a=d
this.b=e},
eyf:function eyf(d){this.a=d},
eyh:function eyh(d){this.a=d},
eyi:function eyi(d){this.a=d},
eyj:function eyj(d){this.a=d},
eyk:function eyk(d){this.a=d},
eyl:function eyl(d){this.a=d},
eym:function eym(d,e){this.a=d
this.b=e},
eyn:function eyn(d){this.a=d},
eyo:function eyo(d,e){this.a=d
this.b=e},
eyg:function eyg(d,e){this.a=d
this.b=e},
eyc:function eyc(d){this.a=d},
eyd:function eyd(d,e){this.a=d
this.b=e},
exM:function exM(){},
exN:function exN(){},
exz:function exz(d){this.a=d},
exA:function exA(d){this.a=d},
exB:function exB(d){this.a=d},
exE:function exE(){},
exF:function exF(){},
exG:function exG(){},
exH:function exH(){},
exI:function exI(){},
exJ:function exJ(d){this.a=d},
exK:function exK(){},
exL:function exL(d){this.a=d},
exC:function exC(d){this.a=d},
exD:function exD(){},
eyO:function eyO(d,e){this.a=d
this.b=e},
eyP:function eyP(d){this.a=d},
eyx:function eyx(d){this.a=d},
eyN:function eyN(d){this.a=d},
eyA:function eyA(d){this.a=d},
eyB:function eyB(d,e){this.a=d
this.b=e},
eyz:function eyz(d,e){this.a=d
this.b=e},
eyC:function eyC(d,e){this.a=d
this.b=e},
eyy:function eyy(d,e){this.a=d
this.b=e},
eyQ:function eyQ(d,e){this.a=d
this.b=e},
eyw:function eyw(d,e){this.a=d
this.b=e},
eyR:function eyR(d){this.a=d},
eyv:function eyv(d){this.a=d},
eyS:function eyS(d){this.a=d},
eyu:function eyu(d){this.a=d},
eyT:function eyT(d){this.a=d},
eyt:function eyt(d){this.a=d},
eyU:function eyU(d,e){this.a=d
this.b=e},
eyq:function eyq(d,e){this.a=d
this.b=e},
eyr:function eyr(d){this.a=d},
eys:function eys(d,e){this.a=d
this.b=e},
eyV:function eyV(d){this.a=d},
eyD:function eyD(d){this.a=d},
eyE:function eyE(d,e,f){this.a=d
this.b=e
this.c=f},
eyp:function eyp(d,e,f){this.a=d
this.b=e
this.c=f},
eyF:function eyF(d){this.a=d},
eyG:function eyG(d,e){this.a=d
this.b=e},
eyH:function eyH(d){this.a=d},
eyI:function eyI(d){this.a=d},
eyJ:function eyJ(d){this.a=d},
eyK:function eyK(d){this.a=d},
eyL:function eyL(d){this.a=d},
eyM:function eyM(d,e){this.a=d
this.b=e},
exU:function exU(d,e){this.a=d
this.b=e},
exT:function exT(d,e){this.a=d
this.b=e},
exP:function exP(d){this.a=d},
exQ:function exQ(d,e,f){this.a=d
this.b=e
this.c=f},
exR:function exR(d,e){this.a=d
this.b=e},
exS:function exS(d,e){this.a=d
this.b=e},
aiw(d,e){var w=d.d,v=e.a,u=e.c,t=e.b,s=w.a,r=w.b
w=w.c
return d.c?new A.r(s+v,r-u,w+t):new A.r(s+v,r+t,w+u)},
hbm(d,e,f,g){var w,v,u,t,s,r=d.a,q=e.d,p=e.c?A.nk(r,1.5707963267948966,0,q):A.nk(r,0,0,q)
r=C.a([],x.z)
for(q=p.length,w=0;w<p.length;p.length===q||(0,C.J)(p),++w){v=p[w]
u=v.d
u=u===0?0:f.$1(u)
t=v.f
s=t<0.99?3:2
r.push(new A.ks(v.a,v.b,v.c,u,v.e,t,v.r,v.w,v.x,s,g))}q=C.U(x.S,x.q)
for(u=d.b,u=u.gdR(u),u=u.gag(u);u.C();){t=u.gR(u)
s=f.$1(t.a)
t=t.b
q.n(0,s,new A.cH(t.a,t.b,A.aiw(e,t.c),t.d))}return new C.y(r,q)},
i8D(a3,a4,a5,a6,a7,a8,a9,b0,b1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=x.i,a2=C.ey([a4,a5],a1)
for(w=b1.length,v=0;v<b1.length;b1.length===w||(0,C.J)(b1),++v){u=b1[v].a
a2.J(0,D.k.F(u[0],a4,a5))
a2.J(0,D.k.F(u[1],a4,a5))}t=C.C(a2,a2.$ti.k("co.E"))
D.d.fh(t)
for(w=C.T(b1).k("X<1>"),u=w.k("M.E"),s=0;r=s+1,r<t.length;s=r){q=t[s]
p=t[r]
o=p-q
if(o<0.01)continue
n=(q+p)/2
m=C.C(new C.X(b1,new A.fvz(n),w),u)
l=C.ey([a6,a7],a1)
for(k=m.length,v=0;v<m.length;m.length===k||(0,C.J)(m),++v){j=m[v].a
l.J(0,D.k.F(j[2],a6,a7))
l.J(0,D.k.F(j[3],a6,a7))}i=C.C(l,l.$ti.k("co.E"))
D.d.fh(i)
for(k=!(o>30),h=0;g=h+1,g<i.length;h=g){f=i[h]
e=i[g]
j=e-f
if(j<0.01)continue
d=(f+e)/2
if(D.d.aX(m,new A.fvA(d)))continue
a0=!k||j>60?2:1
a3.hl(new A.r(n,d,a8),new A.r(o,j,a9),b0,a0)}}},
x5(d3,d4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3=null,c4=x.z,c5=C.a([],c4),c6=new A.eM(c5),c7=C.a([],x.a),c8=x.E,c9=C.a([],c8),d0=x.S,d1=C.U(d0,x.q),d2=$.dl=$.dl+1
c6.f=-1
c6.b=8001
c6.kZ(B.hbt,B.hfp,B.yh,0.15,4)
c6.f=0
c6.hl(B.haX,B.aYw,B.afD,3)
c6.aD(B.hkZ,B.hmx,B.i6,0.5)
c6.aF(B.aYD,B.hax,B.BF)
c6.aF(B.aYD,B.hmQ,B.BF)
c6.hl(B.hfu,B.aYw,B.afD,3)
c6.aD(B.haL,B.hfv,B.vS,0.15)
c6.aD(B.hgh,B.hfE,B.Fv,0.8)
c6.b=0
c6.f=3
c6.d=d3.gth()?0.42:0.1
c6.hl(B.h8D,B.hi3,d3.gth()?B.kN:B.be4,3)
c6.d=1
c6.f=2
c6.b=8001
if(!d3.gth())for(w=0;w<10;++w)c6.aEI(new A.r(-72+w*16,51.3,55),B.hiL,B.iC,!1,0.05)
else{c6.x=d2
c6.aD(B.hgQ,B.hdH,D.c,0.2)
c6.aD(B.hnV,B.aYS,D.c,0.2)
c6.aD(B.hcw,B.aYS,D.c,0.2)}if(d3.gth()){c6.x=d2
c6.aD(B.hcI,B.hdO,B.kN,0.2)}c6.x=0
c6.b=8001
c6.r=!0
c6.hl(B.hmi,B.hnc,B.aht,2)
c6.aD(B.hl9,B.hae,B.Z_,0.1)
c6.aD(B.hl8,B.haf,B.Mn,0.1)
c6.aD(B.hkD,B.aYm,B.Mn,0.1)
c6.aD(B.h7I,B.aYm,B.Mn,0.1)
c6.r=!1
d1.n(0,8001,B.eg5)
c6.x=d2
c6.b=8002
c6.kZ(B.hnB,B.aYq,B.iC,0.05,3)
c6.kZ(B.h9c,B.aYq,B.iC,0.05,3)
d1.n(0,8002,B.egy)
for(v=d3.y,w=0;u=$.Hy(),w<u.length;++w){t=1000+w
c6.b=t
c6.cKX(new A.r(u[w],0,-2.25),B.hip,B.iC,!1,0.05,2)
s=v.q(0,w)?"This one has a hole for the cable.":"Tap it with the drill to put a hole through it."
d1.n(0,t,new A.cH("Wall stud","A 2x4 stud, one of the vertical posts in the wall. They stand 16 inches apart. "+s,new A.r(u[w],20,-2),60))
if(v.q(0,w)){c6.b=0
c6.e=0.6
c6.aF(new A.r(u[w],40,-2.25),B.haU,B.aiJ)
c6.e=0}}c6.b=8000
c6.aD(B.h7W,B.h6_,B.Yd,0.5)
c6.e=0.4
c6.aF(B.hfb,B.hlQ,B.y_)
for(r=0;r<6;++r)for(v=19.5-r*3.6,q=0;q<2;++q)c6.aD(new A.r(61.6+q*4.8,v,0.5),B.h2O,B.ql,0.3)
p=d3.ax&&!d3.ay
v=p?0.6:0
if(d3.ay)u=D.cf
else u=p?D.bC:D.hp
c6.aD(new A.r(64,-2.5+v,0.9),B.hdC,u,0.4)
c6.e=0
if(d3.ay)v="The main breaker has TRIPPED (orange). Tap it to flip it fully OFF, fix the problem, then turn it ON."
else v=d3.ax?"The power is ON. Tap to turn it OFF. Always turn it OFF before you touch any wire.":"The power is OFF. Tap to turn it ON."
d1.n(0,8000,new A.cH("Breaker panel",v,B.haj,60))
c6.b=8003
for(v=d3.z,u=C.dX(v,v.r,C.a4(v).c),t=x.o,s=u.$ti.c;u.C();){o=u.d
n=A.j4(o==null?s.a(o):o)
o=n.d
m=o.a-0.35
l=C.a([B.hjM,B.hgL,new A.r(m,40,-3.2)],t)
if(n.c)D.d.v(l,C.a([new A.r(m,51.4,-3.2),new A.r(m,51.4,o.c+11)],t))
else l.push(new A.r(m,o.b+11,-3.4))
c6.iD(A.Dz(l,3,6),0.2,B.Z7,!1,0.35,6)}d1.n(0,8003,B.egZ)
for(u=x.D,s=d3.Q,k=0;k<3;++k){j=B.oJ[k]
i=s.h(0,j)
if(i==null||!i.a)continue
if(i.e)h=B.bsv
else h=i.d?B.bu2:B.btm
o=C.a([],u)
for(m=i.b,l=C.a4(m),g=new C.ms(m,m.r,l.k("ms<1>")),g.c=m.e,l=l.c;g.C();){m=g.d
if(m==null)m=l.a(m)
o.push(new C.cu([A.j4(m).d.a-1.15,A.j4(m).d.a+1.15,A.j4(m).d.b-2,A.j4(m).d.b+2]))}m=6100+k
c6.b=m
A.i8D(c6,j,j+48,-47,47,-0.25,0.5,h,o)
o=i.e?"Painted and finished.":"A 4 by 8 foot sheet of drywall (gypsum between two layers of paper). It is screwed to the studs."
d1.n(0,m,new A.cH("Drywall sheet",o,new A.r(j+24,0,0),90))
c6.b=0
c6.e=0.3
for(o=i.c,m=C.a4(o),l=new C.ms(o,o.r,m.k("ms<1>")),l.c=o.e,m=m.c;l.C();){o=l.d
if(o==null)o=m.a(o)
f=D.o.aq(o,10)
e=D.o.E(o,10)
c6.eK(new A.r($.Hy()[f],-40+e*16,0.1),0.34,B.y_,3,5,0.3)}c6.e=0}for(u=d4.a,o=u!=="tape",m=d3.as,l=u!=="mud",g=u==="sand",w=0;w<2;w=a1){d=-24+48*w
a0=s.h(0,B.oJ[w])
a0=a0==null?c3:a0.a
a1=w+1
a2=s.h(0,B.oJ[a1])
a2=a2==null?c3:a2.a
if(a0!==!0||a2!==!0)continue
a3=m[w]
a0=6200+w
c6.b=a0
if(a3.a&&!a3.d){a2=a3.b
if(a2===0)h=B.bsy
else h=a3.c?B.ai7:B.bje
c6.e=0.5
c6.aF(new A.r(d,0,0.08+0.02*a2),new A.r(2.2+a2*1.4,94,0.12),h)
c6.e=0}else if(!o||!l||g){c6.d=0.45
c6.e=0.6
c6.aF(new A.r(d,0,0.12),B.he3,D.b0)
c6.e=0
c6.d=1}if(a3.d)a2="Smooth and ready for paint."
else if(!a3.a)a2="The joint between two sheets. It needs tape and three coats of joint compound."
else{a2=a3.b
a4=a2===1?"":"s"
a4="Taped, with "+a2+" coat"+a4+" of mud."
a2=a4}d1.n(0,a0,new A.cH("Seam",a2,new A.r(d,0,0),70))}for(o=d4.b,m=d3.x,l=d3.at,g=x.N,a5=0;a5<7;++a5){n=B.uW[a5]
a0=n.a
a6=m.an(0,a0)
a7=l.h(0,a0)
a8=o===a0&&a7!=null
if(!a6)continue
a2=n.c
if(a2)a9=n.e==="fan"?"fan":"light"
else{a4=a7==null?c3:a7.a
a9=a4==null?"outlet":a4}if(a8){b0=A.oi(a7.a)
a0=a7.b
b1=A.bDm(b0,a0,!1)
b2=A.hbm(b1,n,new A.fDu(n),d2)
D.d.v(c5,b2.a)
d1.v(0,b2.b)
if(a0.f&&a0.c===0){a0=C.a([],c8)
for(a2=b1.c,a4=a2.length,b3=0;b3<a2.length;a2.length===a4||(0,C.J)(a2),++b3){b4=a2[b3]
a0.push(new A.hd(A.aiw(n,b4.a),b4.b,b4.c,0))}D.d.v(c9,a0)}}else if(a7!=null&&a7.b.c>=2){a4=a7.a
b5=a7.b
b6=b5.x
b7=C.a([],c4)
b8=new A.eM(b7)
b9=new A.AG(C.U(d0,g))
b9.c=2
b9.x=b6
if(a4==="light"||a4==="fan")A.huC(b8,a4,b9)
else{A.huf(b8,A.hcW(a4),-0.25,b6,!0,!1,!0)
A.hwI(b8,b6)}D.d.v(c5,A.hbm(new A.qU(b7,B.SY,B.v0,B.qN,c3,!1,0),n,new A.fDv(n),d2).a)
if(!a2){c6.f=3
c6.b=3000+a0
c6.e=0.4
c6.d=0.55
a2=n.d
b5=b5.x?D.ax:D.ba
c6.aF(new A.r(a2.a,a2.b,a2.c+0.2),B.he9,b5)
c6.d=1
c6.f=2
c6.e=0}d1.n(0,3000+a0,new A.cH(A.i4c(a4),A.i4b(d3,a0),A.aiw(n,B.abF),22))}else{a4=C.a([],c4)
b5=A.hcW(a9)===a9?a9:"outlet"
A.htA(new A.eM(a4),b5,!1)
D.d.v(c5,A.hbm(new A.qU(a4,B.dDn,B.v0,B.qN,c3,!1,0),n,new A.fDw(n),d2).a)
a2=a2?"Ceiling box":"Electrical box"
a4=v.q(0,a0)?"The box is mounted and the cable is in. A device can be wired here.":"The box is mounted. Pull the cable to it."
d1.n(0,2000+a0,new A.cH(a2,a4,A.aiw(n,B.abF),24))}}c6.x=0
c0=new A.fDz(c6)
if(u==="wall"||u==="ceiling"||u==="fanbox")for(a5=0;a5<7;++a5){n=B.uW[a5]
c4=n.a
if(m.an(0,c4))continue
c8=n.c
d0=n.d
s=d0.a
o=d0.b
a0=c8?new A.r(s,o-1,d0.c):new A.r(s,o,1.5)
a2=c8?B.hb3:B.hdn
c0.$4$round(2000+c4,a0,a2,c8)
c4=c8?new A.r(s,o-8,d0.c):new A.r(s,o+7,3)
c9.push(new A.hd(c4,n.b,D.eR,0))}else if(u==="cable")for(a5=0;a5<7;++a5){n=B.uW[a5]
c4=n.a
if(!m.an(0,c4)||v.q(0,c4))continue
c8=n.c
d0=n.d
s=d0.a
o=d0.b
d0=c8?new A.r(s,o-1,d0.c):new A.r(s,o,1.5)
s=c8?B.aYt:B.hbv
c0.$5$col$round(2000+c4,d0,s,D.bs,c8)}else if(u==="knife")for(a5=0;a5<7;++a5){n=B.uW[a5]
if(n.c||!m.an(0,n.a))continue
c4=n.d
c8=c4.a
i=d3.aqY(c8)
if(i==null||i.b.q(0,n.a))continue
c0.$4$col(2000+n.a,new A.r(c8,c4.b,0.5),B.hdz,D.cJ)}else if(u==="sheet")for(w=0;w<5;){j=B.a60[w]
c0.$3(6000+w,new A.r(j,0,0.3),B.hiu);++w
c9.push(new A.hd(new A.r(j,50,1),"edge "+w,D.eR,0))}else if(u==="screw")for(a5=0;a5<3;++a5){j=B.oJ[a5]
i=s.h(0,j)
if(i==null||!i.a)continue
for(c4=d3.ark(j),c8=c4.length,d0=i.c,o=j+48,b3=0;b3<c4.length;c4.length===c8||(0,C.J)(c4),++b3){f=c4[b3]
for(a0=f*10,a2=7000+a0,r=0;r<6;++r){if(d0.q(0,a0+r))continue
c0.$3(a2+r,new A.r($.Hy()[f],-40+r*16,0.5),B.aYi)}a2=$.Hy()
if(f+1<a2.length&&a2[f]+16<=o)for(a0=7500+a0,r=0;r<6;r+=2)c0.$4$col(a0+r,new A.r(a2[f]+8,-40+r*16+8,0.5),B.aYi,D.dw)}}if(!C.ey(["wall","ceiling","fanbox","cable","knife","sheet","screw",""],g).q(0,u))c4=D.d.q(B.zI,u)||C.ey(["outlet","gfci","switch","light","fan"],g).q(0,u)||D.d.q(B.k7,u)||D.d.q(B.iP,u)
else c4=!1
if(c4)for(c4=d3.CW,a5=0;a5<7;++a5){n=B.uW[a5]
if(D.d.q(B.zI,u)){c8=n.a
a7=l.h(0,c8)
if(a7!=null&&D.d.q(B.k7,a7.a)&&a7.b.c>=2&&!c4.an(0,c8)){d0=n.d
c0.$4$col(3000+c8,new A.r(d0.a,d0.b,1.2),B.hed,D.b9)}}else{c8=n.a
if(m.an(0,c8)&&v.q(0,c8)&&!l.an(0,c8)){d0=n.c
s=n.d
o=s.a
g=s.b
s=d0?new A.r(o,g-1,s.c):new A.r(o,g,1.2)
o=d0?B.aYt:B.hin
c0.$4$round(2000+c8,s,o,d0)}}}c6.r=!0
for(c4=d3.CW,c8=new C.cs(c4,C.a4(c4).k("cs<1,2>")).gag(0);c8.C();){j=c8.d
d0=j.a
n=A.j4(d0)
v=n.d
d=v.a
c6.b=8200+d0
v=v.b
c6.iD(A.Dz(C.a([new A.r(d,v,2.5),new A.r(d,-46,3.5),new A.r(d,-46,22)],t),4,6),0.55,B.MO,!1,0.2,6)
c6.aD(new A.r(d,v,1.8),B.hgd,B.bip,0.3)
v=c6.b=8100+d0
u=j.b
switch(u){case"tv":c6.aD(new A.r(d,-45,24),B.h9B,B.Z2,0.2)
c6.aD(new A.r(d,-19,24),B.hbi,E.y5,0.4)
if(c4.an(0,d0))d0=d3.ax&&!d3.ay&&d3.a4Z(d0)
else d0=!1
if(d0){d0=d-38.5
s=d+38.5
c7.push(new A.fh(C.a([new A.r(d0,1.5,25.7),new A.r(s,1.5,25.7),new A.r(s,-39.5,25.7),new A.r(d0,-39.5,25.7)],t),v,new A.fDx(j),320,180,9,2,0,!1))}break
case"lamp":c6.cJ(new A.r(d,-47.5,24),new A.r(d,-46.5,24),6,B.Fy,0.4,14)
c6.cJ(new A.r(d,-46.5,24),new A.r(d,-22,24),1,B.yh,0.5,8)
c6.wW(new A.r(d,-26,24),new A.r(d,-12,24),9,L.MY,!1,!0,5.5,0.2,16)
break
case"toaster":c6.aD(new A.r(d,-42.5,24),B.h6E,B.hj,0.8)
c6.aF(new A.r(d,-38,24),B.hjL,B.Zu)
break
case"washerM":case"dryerM":c1=u==="washerM"
d0=c1?B.Zf:B.ZB
c6.aD(new A.r(d,-30,22),B.aY4,d0,0.4)
c6.aD(new A.r(d,-15.5,35.2),B.hdw,B.Y3,0.3)
c6.cJ(new A.r(d,-29,35),new A.r(d,-29,36.2),10.5,B.XX,0.8,20)
d0=c1?B.Y6:B.Zv
c6.cJ(new A.r(d,-29,36.1),new A.r(d,-29,36.6),8.2,d0,0.9,20)
break
case"rangeM":c6.aD(new A.r(d,-30,22),B.aY4,B.ye,0.7)
c6.aD(new A.r(d,-28,35.3),B.hhG,D.vV,0.9)
c6.aD(new A.r(d,-19.5,36.4),B.aZm,B.MB,0.9)
c6.aD(new A.r(d,-12.2,22),B.he5,B.Yt,0.5)
for(a5=0;a5<2;++a5)for(d0=d+B.a5P[a5],b3=0;b3<2;++b3){c2=B.awo[b3]
c6.cJ(new A.r(d0,-11.6,c2),new A.r(d0,-11.2,c2),4.2,B.Z4,0.3,14)}break
default:c6.aD(new A.r(d,-43.5,24),B.h7m,B.Z2,0.2)
c6.wV(new A.r(d-6,-38,24),new A.r(d+8,-38,24),3.4,B.w3,3,0.6,12)
c6.uN(new A.r(d-8,-43,24),B.h6P,B.w3,0.6,0)}d0=A.i2i(u)
s="Plugged into "+n.b
u=u==="tv"?s+". To unplug it, go behind it (the Behind the TV button) and tap the plug on the wall.":s+". Tap it to unplug."
d1.n(0,v,new A.cH(d0,u,new A.r(d,-35,20),60))}c6.r=!1
for(a5=0;a5<7;++a5){n=B.uW[a5]
d1.c3(0,2000+n.a,new A.fDy(n))}return new A.qU(c5,d1,c9,c7,c3,!1,0)},
i4c(d){var w
switch(d){case"gfci":w="GFCI outlet"
break
case"switch":w="Light switch"
break
case"light":w="Ceiling light"
break
case"fan":w="Ceiling fan"
break
case"outlet":w="Outlet"
break
default:w=A.x6(d)
break}return w},
i2i(d){var w
switch(d){case"tv":w="TV"
break
case"lamp":w="Lamp"
break
case"toaster":w="Toaster"
break
case"washerM":w="Washing machine"
break
case"dryerM":w="Dryer"
break
case"rangeM":w="Kitchen range"
break
default:w="Hair dryer"
break}return w},
i4b(d,e){var w,v=d.at.h(0,e)
if(v==null)return""
if(v.b.x)return"BURNT. It was wired wrong and it burnt out. Pull it out and put in a new one."
w=v.a
if(D.d.q(B.iP,w))return d.ch.q(0,e)?"The switch is ON. Tap to turn it off.":"The switch is OFF. Tap to flip it on."
if(w==="light"||w==="fan")return d.anU(e)?"It is running.":"It is off. Flip its switch (breaker on)."
w=d.CW.h(0,e)
return"Tap with a TV, lamp, toaster, hair dryer, washing machine, dryer or range in your hand to plug it in. Plugged: "+(w==null?"nothing":w)+"."},
iof(b3,b4,b5,b6,b7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=C.a([],x.z),b2=new A.eM(b1)
for(w=D.d.gag(B.uW),v=new C.eJ(w,new A.fUK()),u=b3.at,t=b4*7;v.C();){s=w.gR(0)
r=s.a
q=u.h(0,r)
if(q==null||q.b.c<1)continue
p=b3.anU(r)?t:0.4
b2.b=3000+r
s=s.d
r=s.a
o=s.b-6.6
s=s.c
for(n=0;n<4;++n){m=p+n*3.141592653589793/2
l=A.ti(B.h5X,m)
b2.uN(new A.r(r+l.a,o+l.b,s+l.c),B.hmX,B.ag1,0.3,m)}}w=b3.d
w===$&&C.c()
v=D.d.gag(w)
s=new C.eJ(v,new A.fUL())
r=b4*5
while(s.C()){o=v.gR(0).a
if(b3.anU(o)){k=A.j4(o)
b2.b=0
b2.d=0.25+0.05*Math.sin(r)
o=k.d
b2.eK(new A.r(o.a,o.b-5,o.c),11,B.Mo,4,10,0)
b2.d=1}}for(v=b3.CW,s=new C.cs(v,C.a4(v).k("cs<1,2>")).gag(0),o=b4*1.6,l=b4*6;s.C();){j=s.d
i=j.a
if(v.an(0,i))h=b3.ax&&!b3.ay&&b3.a4Z(i)
else h=!1
if(!h)continue
g=A.j4(i).d.a
b2.b=8100+i
i=j.b
switch(i){case"tv":break
case"lamp":b2.b=0
b2.d=0.3+0.05*Math.sin(l)
b2.eK(new A.r(g,-19,24),11,I.xV,4,10,0)
b2.d=1
break
case"toaster":b2.e=0.8
i=C.ar(B.YM,T.yf,(Math.sin(l)+1)/2)
i.toString
b2.aF(new A.r(g,-38.2,24),new A.r(13,0.3,6),i)
b2.e=0
break
case"washerM":case"dryerM":f=i==="washerM"
b2.e=0.8
for(e=0;e<3;++e){m=b4*(f?5:7)+e*2.1
i=Math.cos(m)
h=Math.sin(m)
if(f)d=(e&1)===0?B.afK:B.w3
else d=(e&1)===0?T.yf:D.az
b2.eK(new A.r(g+i*4.5,-29+h*4.5,36.8),1.9,d,3,6,0.2)}b2.e=0
break
case"rangeM":b2.e=0.8
for(a0=0;a0<2;++a0){a1=B.a5P[a0]
for(i=g+a1,h=r+a1,a2=0;a2<2;++a2){a3=B.awo[a2]
d=C.ar(E.Ms,B.ahe,(Math.sin(h)+1)/2)
d.toString
b2.my(new A.r(i,-11.1,a3),new A.r(i,-10.9,a3),3.8,1.8,d,0,12)}}b2.e=0
break
default:for(i=g+9,e=0;e<6;++e)b2.eK(new A.r(i+D.k.E(o+e/6,1)*22,-38+Math.sin(e*2)*2,24),0.6,B.aib,3,5,0.2)}}for(v=b3.db,v=new C.cs(v,C.a4(v).k("cs<1,2>")).gag(0),s=b3.cx;v.C();){j=v.d
r=j.a
k=A.j4(r)
a4=b5.h(0,r)
a5=b4<=(a4==null?0:a4)
a6=s.q(0,r)
if(!a5&&!a6)continue
r=a5?j.b:"smolder"
A.hyz(b2,r,new A.fUM(k),1,b4)}if(b6){a7=(D.k.bh(b4*2.4)&1)===0
for(e=0;e<w.length;++e){k=A.j4(w[e].a)
a8=b3.ri(e)
v=k.a
b2.b=2000+v
b2.f=3
b2.e=0.9
b2.d=0.02
if(!u.an(0,v)){s=k.d
r=s.a
o=s.b
if(k.c)b2.aF(new A.r(r,o-1.5,s.c),B.hln,D.c)
else b2.aF(new A.r(r,o,2.2),B.hnP,D.c)}b2.d=1
if(a7){a9=a8?D.bg:D.ax
s=k.d
r=s.a
o=s.b
b0=k.c?new A.r(r,o-3.5,s.c):new A.r(r,o+7.4,2)
b2.eK(b0,v===b7?1.15:0.8,a9,4,8,0.2)}b2.e=0
b2.f=2}}return b1},
rW:function rW(d,e,f){this.a=d
this.b=e
this.c=f},
fvz:function fvz(d){this.a=d},
fvA:function fvA(d){this.a=d},
fDu:function fDu(d){this.a=d},
fDv:function fDv(d){this.a=d},
fDw:function fDw(d){this.a=d},
fDz:function fDz(d){this.a=d},
fDx:function fDx(d){this.a=d},
fDy:function fDy(d){this.a=d},
fUK:function fUK(){},
fUL:function fUL(){},
fUM:function fUM(d){this.a=d},
hqh(d,e){var w=new A.cy8(e,d,A.hjD())
w.bBN(4,d,e)
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
MU:function MU(d,e){this.a=d
this.b=e
this.c=!1},
cy8:function cy8(d,e,f){var _=this
_.a=d
_.b=e
_.c=$
_.d=f
_.e=3
_.r=_.f=0
_.w=!1},
cyd:function cyd(d){this.a=d},
cy9:function cy9(){},
cyb:function cyb(){},
cyc:function cyc(){},
cya:function cya(d){this.a=d},
asq:function asq(d,e){this.d=d
this.a=e},
aFN:function aFN(d,e){var _=this
_.e=_.d=$
_.f=d
_.r=$
_.w=e
_.x="inspect"
_.y=0
_.z=null
_.at=_.as=_.Q=!1
_.c=_.a=_.ax=null},
eAh:function eAh(d,e,f){this.a=d
this.b=e
this.c=f},
eAi:function eAi(d){this.a=d},
eAg:function eAg(d){this.a=d},
eA6:function eA6(d){this.a=d},
eAb:function eAb(d){this.a=d},
eAc:function eAc(d){this.a=d},
eAa:function eAa(d){this.a=d},
eAd:function eAd(d,e){this.a=d
this.b=e},
eAe:function eAe(d){this.a=d},
eAf:function eAf(d){this.a=d},
eA9:function eA9(d){this.a=d},
eA8:function eA8(d,e){this.a=d
this.b=e},
eA5:function eA5(d,e){this.a=d
this.b=e},
eA3:function eA3(d){this.a=d},
eA4:function eA4(d,e){this.a=d
this.b=e},
eA7:function eA7(d){this.a=d},
eAu:function eAu(d,e){this.a=d
this.b=e},
eAq:function eAq(){},
eAp:function eAp(d){this.a=d},
eAr:function eAr(){},
eAs:function eAs(){},
eAt:function eAt(d,e){this.a=d
this.b=e},
eAo:function eAo(d,e){this.a=d
this.b=e},
eAn:function eAn(d){this.a=d},
eAm:function eAm(d){this.a=d},
eAk:function eAk(d,e){this.a=d
this.b=e},
eAj:function eAj(){},
eAl:function eAl(d,e){this.a=d
this.b=e},
auj(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){return new A.yh(p,s,u,t,r,h,o,n,m,i,q,d,j,g,k,e,f,l)},
inH(d){var w,v,u,t,s,r,q,p,o,n,m=d.geb(0),l=C.a([],x.T)
for(w=d.x,v=w.length,u=0;u<w.length;w.length===v||(0,C.J)(w),++u){t=w[u]
s=t.b
if(s==="rug")continue
s=B.hJ.h(0,s)
s.toString
r=(t.e&1)===1
q=r?s.d:s.c
p=r?s.c:s.d
s=t.c
r=q/2
o=t.d
n=p/2
l.push(new A.i9(s-r,s+r,o-n,o+n))}switch(d.c){case"kitchen":w=-m/2
l.push(new A.i9(w,w+28,0,28))
l.push(new A.i9(10,m/2,0,28))
break
case"bathroom":l.push(B.dEj)
l.push(B.dE_)
w=-m/2
l.push(new A.i9(w,w+33,0,75))
break}return l},
bsO(d,e,f,g,h,i,j,k,l,m,n,o){var w=new A.bsN(d,i,m,o,n,l,g,f,k,j,e,h,C.a([],x.n))
w.bC3(d,e,f,g,h,i,j,k,l,m,n,o)
return w},
hui(d,e){var w,v,u,t=d.w,s=D.d.bj(t,new A.fo9(e))
if(s<0)s=0
w=t[s]
v=d.geb(0)
u=d.gh3(0)
t=w.c
switch(w.b){case"left":return new C.b5(new C.y(-v/2+18,D.k.F(t+u/2-40,10,u-10)),1.5707963267948966,s)
case"right":return new C.b5(new C.y(v/2-18,D.k.F(t+u/2-40,10,u-10)),-1.5707963267948966,s)
default:return new C.b5(new C.y(D.o.F(t,-v/2+12,v/2-12),18),0,s)}},
yh:function yh(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){var _=this
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
tW:function tW(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
aap:function aap(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
i9:function i9(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cuI:function cuI(d,e){var _=this
_.a=d
_.b=e
_.d=_.c=$},
AO:function AO(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
bsN:function bsN(d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
fo9:function fo9(d){this.a=d},
aX_:function aX_(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=$},
bVZ:function bVZ(d,e){this.a=d
this.b=e},
bW_:function bW_(d){this.a=d},
hC9(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=C.a([B.dEc],x.T)
for(w=d.x,v=w.length,u=0;u<w.length;w.length===v||(0,C.J)(w),++u){t=w[u]
if(t.a===e)continue
s=t.b
if(D.d.q(B.a5Y,s)||D.d.q(B.Ip,s)||s==="bush")continue
r=s==="townsign"
if(r||s==="adboard"){q=r?178:150
for(s=[-q,q],r=s.length,p=0;p<r;++p){o=s[p]
n=t.e*3.141592653589793/2
m=Math.cos(n)
l=Math.sin(n)
m=t.c+o*m
l=t.d+-o*l
i.push(new A.i9(m-8,m+8,l-8,l+8))}continue}r=B.hJ.h(0,s)
r.toString
m=(t.e&1)===1
k=m?r.d:r.c
j=m?r.c:r.d
if(s==="tree"||s==="pine"){k=10
j=10}s=t.c
r=k/2
m=t.d
l=j/2
i.push(new A.i9(s-r,s+r,m-l,m+l))}return i},
baf:function baf(d,e,f,g,h,i,j,k,l){var _=this
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
hvw(d){var w=d.toLowerCase()
if(D.a.q(w,"blue"))return B.nj
if(D.a.q(w,"ground")||D.a.q(w,"green"))return B.afN
if(D.a.q(w,"neutral")||D.a.q(w,"white"))return B.m1
if(D.a.q(w,"traveler a"))return B.rv
if(D.a.q(w,"traveler b"))return D.az
if(D.a.q(w,"load"))return B.ajB
if(D.a.q(w,"support"))return D.dq
return B.bpV},
i8z(d){var w=d.toLowerCase()
if(D.a.q(w,"ground"))return B.afN
if(D.a.q(w,"common"))return D.Mi
if(D.a.q(w,"traveler"))return B.tS
if(D.a.q(w,"neutral"))return B.BK
if(D.a.q(w,"support"))return D.dq
return D.az},
i6H(d){var w=d.toLowerCase()
if(D.a.q(w,"ground"))return G.a2T
if(D.a.q(w,"neutral"))return D.wE
if(D.a.q(w,"support"))return Am.a23
if(D.a.q(w,"light")||D.a.q(w,"load"))return D.mU
if(D.a.q(w,"motor"))return P.Cy
if(D.a.q(w,"traveler"))return D.jJ
return D.hr},
akP:function akP(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
aqw:function aqw(d){this.a=d},
beR:function beR(d,e,f){var _=this
_.d=0
_.e=!1
_.f=d
_.y=_.x=_.w=_.r=null
_.z=!0
_.Q=$
_.bx$=e
_.aa$=f
_.c=_.a=null},
d9T:function d9T(d,e){this.a=d
this.b=e},
d9U:function d9U(d,e){this.a=d
this.b=e},
d9V:function d9V(d){this.a=d},
d9W:function d9W(d,e,f){this.a=d
this.b=e
this.c=f},
d9P:function d9P(d,e){this.a=d
this.b=e},
d9S:function d9S(d,e){this.a=d
this.b=e},
d9R:function d9R(d,e){this.a=d
this.b=e},
d9Q:function d9Q(d,e){this.a=d
this.b=e},
da0:function da0(d){this.a=d},
da1:function da1(d,e){this.a=d
this.b=e},
da2:function da2(d){this.a=d},
da_:function da_(d){this.a=d},
da3:function da3(d){this.a=d},
d9Z:function d9Z(d){this.a=d},
da4:function da4(d,e){this.a=d
this.b=e},
d9Y:function d9Y(d,e){this.a=d
this.b=e},
da5:function da5(d){this.a=d},
d9X:function d9X(d){this.a=d},
bxF:function bxF(d,e,f,g,h,i,j){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.a=j},
fjW:function fjW(){},
aLK:function aLK(){},
hyz(d,e,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
if(e==="none"||e.length===0)return
d.b=0
w=new A.fFl(a2,d,a0,a1)
v=new A.fFk(d,a2,a0,a1)
switch(e){case"arc":u=D.k.bh(a2*14)
for(t=0.1*a1,s=x.o,r=u*3.1,q=0;q<3;++q){p=Math.sin((r+q*7.7)*12.9898)*43758.5453
if(p-Math.floor(p)<0.3)continue
o=q*2
n=2.2-o
m=C.a([],s)
for(o=1.6-o-n,l=u+q*13,k=0;k<=6;++k){j=k/6
if(k===0||k===6)i=0
else{p=Math.sin((l+k)*12.9898)*43758.5453
i=(p-Math.floor(p)-0.5)*1.6}m.push(a0.$1(new A.r(-1.8+3.6*j,n+o*j+i,3.3)))}p=Math.sin((u+q)*12.9898)*43758.5453
o=C.ar(D.c,D.cq,p-Math.floor(p))
o.toString
d.iD(m,t,o,!1,0,4)}d.d=0.16+0.1*Math.sin(a2*31)
d.eK(a0.$1(B.hik),3.2*a1,D.dw,4,8,0)
d.d=1
break
case"spark":w.$2(22,7)
d.d=0.2+0.1*Math.sin(a2*26)
d.eK(a0.$1(B.aYA),2.4*a1,I.xV,4,8,0)
d.d=1
break
case"smoke":d.d=0.3+0.08*Math.sin(a2*7)
d.eK(a0.$1(B.ha6),2.6*a1,D.ax,4,8,0)
d.d=1
v.$3(9,0.8,11)
w.$2(5,3)
break
case"fire":d.d=0.3+0.12*Math.sin(a2*20)
d.eK(a0.$1(B.aYA),4.4*a1,D.cJ,4,8,0)
d.d=1
h=D.k.bh(a2*11)
for(t=0.85*a1,s=0.05*a1,r=0.5*a1,o=0.04*a1,k=0;k<6;++k){p=-2.2+k*0.88
g=Math.sin((h+k*5)*12.9898)*43758.5453
f=2.4+(g-Math.floor(g))*3.6
l=a0.$1(new A.r(p,-2.2,3))
g=Math.sin((h+k)*12.9898)*43758.5453
d.wV(l,a0.$1(new A.r(p+(g-Math.floor(g)-0.5)*1.2,-2.2+f,3.4)),t,D.fx,s,0,6)
d.wV(a0.$1(new A.r(p,-2.2,3.1)),a0.$1(new A.r(p,-2.2+f*0.62,3.5)),r,D.bs,o,0,6)}w.$2(16,6)
v.$3(10,1,13)
break
case"smolder":v.$3(4,0.9,9)
break}},
fFl:function fFl(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fFk:function fFk(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
h8b(d){var w
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
avX(d){var w
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
hyv(d,e,a0){var w,v,u,t,s=C.a([],x.fB),r=new A.fER(s),q=new A.fEW(e),p=q.$2(B.We,B.Ki),o=q.$2(B.We,B.Kj),n=q.$2(B.We,B.Kk),m=q.$2(B.Wf,B.Kj),l=q.$2(B.Wf,B.Ki),k=q.$2(B.Wf,B.Kk),j=q.$2(B.Wg,B.Kk),i=q.$2(B.Wg,B.Ki),h=q.$2(B.Wg,B.Kj),g=new C.X(e,new A.fES(),C.T(e).k("X<1>")).gI(0),f=D.d.aX(e,new A.fET())
if(f)r.$5("UNVERIFIED",B.f7E,"A conductor is in use whose function was never verified. A wire color alone does not prove what a wire does.","Verify every conductor with a tester before you connect it.","Identify each wire with a tester and the device diagram, then connect it.")
if(D.d.aX(e,new A.fEU()))r.$5("LOOSE",B.tk,"A connection is loose. A loose connection heats up and can arc.","Every conductor must be fastened tightly under its screw or connector.","Tighten the connection.")
if(D.d.aX(e,new A.fEV()))r.$5("EXPOSED",B.tk,"Bare copper is showing outside the terminal. An exposed energized conductor can shock or short.","No conductor may be left exposed.","Trim the wire so only the part under the screw is bare.")
if(!a0)r.$5("SUPPORT",B.tk,"The box or support is not rated for this device. It can fall.","A fixture or fan must hang from a box or bracket rated for its weight.","Use a box rated for this fixture (a fan-rated box for a fan).")
if(n>0||i>0)r.$5("HOT_TO_GROUND",B.tk,"The hot wire is connected to the ground. That is a short circuit to ground: a very large current.","The equipment ground never carries current in normal use, and the hot wire never touches it.","Hot goes on the hot terminal (brass). Ground goes only on the green screw.")
f=o>0
if(!(f&&m>0))w=l>0&&p>0
else w=!0
if(w)r.$5("SHORT",B.tk,"The hot and the neutral are connected together. That is a short circuit.","Hot and neutral must never touch each other.","Put each wire on its own terminal.")
else if(f||l>0)r.$5("REVERSED",B.tk,"Hot and neutral are reversed (reversed polarity). The device may still seem to work, but the parts that should be dead are live. This is a shock hazard.","Hot goes to the brass (hot) terminal and neutral to the silver (neutral) terminal.","Swap them: black (hot) to brass, white (neutral) to silver.")
if(k>0||h>0)r.$5("NEUTRAL_GROUND",B.tk,"The neutral and the equipment ground are joined at the device. Current can flow on the ground path and trip protective devices.","The neutral is never used as the equipment ground, and the two are not joined at the device.","Neutral to the silver terminal only. Ground to the green screw only.")
if(!(i>0&&n===0))f=h>0&&k===0
else f=!0
if(f)r.$5("GROUND_AS_CURRENT",B.tk,"The equipment ground was fastened to a terminal that carries current. The ground must never be used as a normal conductor.","The equipment ground goes only to the ground terminal.","Move the bare copper (ground) wire to the green screw.")
if(g>0&&p<d.b)r.$5("LOAD_SIDE",B.aRn,"The wires are on the LOAD screws. Power must come in on LINE; on LOAD the device would not protect or feed anything.","Supply (line) conductors go to the LINE terminals.","Move the wires to the LINE screws.")
f=d.b
if(p<f&&g===0&&o===0&&l===0&&n===0)r.$5("MISSING_HOT",B.JS,"The hot wire is not on the hot terminal, so the device gets no power.","The device needs its hot connection.","Connect the black (hot) wire to the brass terminal.")
if(p>=f){f=d.c
f=m<f&&f>0&&l===0&&k===0}else f=!1
if(f)r.$5("OPEN_NEUTRAL",B.tk,"The neutral is not connected, but the hot wire is. The device will not run, and parts of it can still be live. There may be nothing to see.","The neutral return conductor must be connected.","Connect the white (neutral) wire to the silver terminal.")
if(d.d&&j===0)r.$5("MISSING_GROUND",B.tk,"There is no equipment ground. It may seem to work, but nothing protects you if a fault happens.","A required equipment ground must be connected to the ground terminal.","Connect the bare copper (ground) wire to the green screw.")
for(f=s.length,v=B.r_,u=0;u<f;++u){t=s[u].b
if(A.avX(t)>A.avX(v))v=t}return new A.b6V(v,s,A.i3J(s,e))},
i3J(d,e){var w=new A.fnH(d)
if(w.$1("SHORT")||w.$1("HOT_TO_GROUND"))return B.bwn
if(w.$1("LOOSE"))return B.bwf
if(w.$1("EXPOSED"))return B.bwl
if(w.$1("GROUND_AS_CURRENT"))return B.bwp
if(w.$1("REVERSED"))return B.bwo
if(w.$1("NEUTRAL_GROUND"))return B.bwq
if(w.$1("SUPPORT"))return B.bwm
if(w.$1("OPEN_NEUTRAL"))return B.bwk
if(w.$1("LOAD_SIDE")||w.$1("MISSING_HOT"))return B.bwd
if(w.$1("UNVERIFIED"))return B.bwe
if(w.$1("MISSING_GROUND"))return B.bwh
return B.bwj},
hYE(d){var w
switch(d.a.c.a){case 0:w=d.b.c===B.Ki
break
case 1:w=d.b.c===B.Kj
break
case 2:w=d.b.c===B.Kk
break
case 3:w=!1
break
default:w=null}return w},
hyw(d,e,f){var w,v,u,t,s=C.a([],x.fB)
e.bO(0,new A.fEY(f,s))
for(w=s.length,v=B.r_,u=0;u<w;++u){t=s[u].b
if(A.avX(t)>A.avX(v))v=t}return new A.b6V(v,s,v===B.r_?B.bwi:B.bwg)},
K3:function K3(d,e){this.a=d
this.b=e},
G2:function G2(d,e){this.a=d
this.b=e},
Ga:function Ga(d,e){this.a=d
this.b=e},
cB7:function cB7(d){this.c=d},
cEH:function cEH(d,e){this.a=d
this.c=e},
a4C:function a4C(d,e){this.a=d
this.b=e},
bN6:function bN6(d,e,f){this.b=d
this.c=e
this.d=f},
wA:function wA(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
tw:function tw(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h},
b6V:function b6V(d,e,f){this.a=d
this.b=e
this.c=f},
fER:function fER(d){this.a=d},
fEW:function fEW(d){this.a=d},
fEX:function fEX(d,e){this.a=d
this.b=e},
fES:function fES(){},
fET:function fET(){},
fEU:function fEU(){},
fEV:function fEV(){},
fnH:function fnH(d){this.a=d},
fnI:function fnI(d){this.a=d},
abx:function abx(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aby:function aby(d,e,f){this.a=d
this.b=e
this.c=f},
vo:function vo(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
b5E:function b5E(d,e){this.a=d
this.b=e},
b8N:function b8N(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cB9:function cB9(d,e,f){this.a=d
this.b=e
this.c=f},
cBa:function cBa(){},
cBb:function cBb(){},
cBc:function cBc(){},
Q6:function Q6(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fEY:function fEY(d,e){this.a=d
this.b=e},
hbU(d){var w
switch(d.a){case 0:w=D.b9
break
case 1:w=D.cJ
break
case 2:w=D.c0
break
case 3:w=D.bs
break
case 4:w=D.bt
break
default:w=null}return w},
hfb(d){return C.bT(E.mH,null,new A.h1K(),d,!0,!0,!0,D.ke,!1,!1,x.H)},
hD3(d,e,f,g){var w=x.S
return C.bT(E.mH,null,new A.h1I(new A.cB9(e,f,C.U(w,w)),g),d,!0,!0,!0,D.ke,!1,!1,x.dZ)},
h1K:function h1K(){},
h1I:function h1I(d,e){this.a=d
this.b=e},
a1L:function a1L(d,e,f){this.c=d
this.d=e
this.a=f},
bvz:function bvz(d){var _=this
_.d=d
_.c=_.a=_.e=null},
fdz:function fdz(d,e){this.a=d
this.b=e},
fdy:function fdy(d,e,f){this.a=d
this.b=e
this.c=f},
fdA:function fdA(d){this.a=d},
fdx:function fdx(d,e){this.a=d
this.b=e},
fdB:function fdB(){},
fdC:function fdC(d){this.a=d},
fBC(d){var w,v,u,t=C.C(B.a5V,x.gk)
D.d.v(t,B.a4d)
D.d.v(t,B.aAU)
w=t.length
v=0
for(;v<w;++v){u=t[v]
if(u.a===d)return u}return null},
hz8(d){return D.d.aX(B.a5V,new A.fGb(d))},
hz7(d){return D.d.aX(B.a4d,new A.fGa(d))},
ah5(d){var w,v=d.b
if(v==="ceiling"){v=d.f
v.toString
return new A.r(-70+v*15.555555555555555+3.05,96,0)}w=d.r
v=v==="switch"?48:16
return A.eZ(d.c,d.d+w*1.9,v,3.5)},
hDh(d){var w
switch(d){case 0:w=0
break
case 1:w=-1.5707963267948966
break
case 2:w=3.141592653589793
break
default:w=1.5707963267948966
break}return w},
iey(a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0
a1.f=2
a1.e=0.7
for(w=a2.c,v=a2.b,u=v==="switch",t=a2.d,v=v==="ceiling",s=4200+(a2.a-4000)*2,r=a2.x,q=a2.f,p=0;p<2;++p){a1.b=s+p
o=r[p]
n=o?D.df:B.Yv
if(v){q.toString
m=-70+q*15.555555555555555+3.05
l=p===0?-1:1
k=o?0:0.6
a1.cJ(new A.r(m+l*2.2,97.9,0),new A.r(m+l*2.5,97.9,0),0.62,n,k,10)}else{k=a2.r
j=p===0
if(j)i=(u?48:16)-2.1
else i=(u?48:16)+2.1
h=j?-1:1
g=A.eZ(w,t+k*1.9,i,2.25)
k=0.14*h
j=0*k
f=g.a
e=g.b
d=g.c
a0=o?0:0.6
a1.cJ(g,new A.r(f+j,e+k,d+j),0.62,n,a0,10)
if(o){k=0.2*h
j=0*k
a1.my(g,new A.r(f+j,e+k,d+j),0.8,0.55,B.Yq,0.5,10)}}}a1.e=0},
iex(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=e.Q,k=e.z
if(l==null||k==null||l.c<1)return
d.f=2
d.b=e.a
w=l.c
if(e.b==="ceiling"){w=A.ah5(e).a
if(k==="fan"){d.cJ(new A.r(w,96,0),new A.r(w,91,0),1.2,B.Fy,0.3,10)
d.cJ(new A.r(w,91,0),new A.r(w,87.5,0),4.2,B.brw,0.35,14)}else{d.cJ(new A.r(w,96,0),new A.r(w,94.6,0),3.4,B.hj,0.7,14)
d.eK(new A.r(w,93,0),4,B.N7,5,10,0.5)}return}v=new A.fEJ(e,e.d+e.r*1.9)
if(w<2){w=v.$3(0,0,3.2)
u=(e.c&1)===0
d.aD(w,u?new A.r(1.7,3.5,0.5):new A.r(0.5,3.5,1.7),B.N7,0.3)
w=v.$3(0,0,3.48)
d.aD(w,u?new A.r(0.9,0.5,0.06):new A.r(0.06,0.5,0.9),B.tS,0.6)
return}t=D.d.q(B.aAA,k)
w=v.$3(0,0,3.6)
u=t?4.6:2.9
s=t?6.4:4.6
r=(e.c&1)===0
d.aD(w,r?new A.r(u,s,0.22):new A.r(0.22,s,u),B.ZM,0.35)
if(D.d.q(B.iP,k)){q=e.as
w=v.$3(0,0,3.8200000000000003)
d.aD(w,r?new A.r(0.9,2.4,0.16):new A.r(0.16,2.4,0.9),B.aj7,0.3)
w=v.$3(0,q?0.55:-0.55,4.04)
d.aD(w,r?new A.r(0.55,1.2,0.45):new A.r(0.45,1.2,0.55),B.N7,0.5)
if(k==="switchcombo"){w=v.$3(1,0,3.9400000000000004)
d.aD(w,r?new A.r(0.5,1,0.3):new A.r(0.3,1,0.5),B.N7,0.4)}if(k==="switchsmart")d.eK(v.$3(0,1.7,3.8400000000000003),0.18,D.aJ,3,5,0.2)
return}if(k==="gfci"){w=v.$3(0,0,3.79)
d.aD(w,r?new A.r(1.8,4,0.14):new A.r(0.14,4,1.8),B.aj7,0.3)
w=v.$3(0,0.75,3.9000000000000004)
d.aD(w,r?new A.r(0.8,0.45,0.2):new A.r(0.2,0.45,0.8),B.ql,0.3)
w=v.$3(0,-0.75,3.9000000000000004)
d.aD(w,r?new A.r(0.8,0.45,0.2):new A.r(0.2,0.45,0.8),B.Mr,0.3)}p=t?B.c90:B.dgh
for(w=p.length,o=0;o<w;++o){n=p[o]
if(t){for(m=0;m<2;++m){u=B.djt[m]
s=v.$3(u.a,0.5,3.77)
d.aF(s,r?new A.r(0.26,1.2,0.05):new A.r(0.05,1.2,0.26),B.f_)
if(u.b!==0)continue}u=v.$3(0,-1,3.77)
d.aF(u,r?new A.r(1,0.3,0.05):new A.r(0.05,0.3,1),B.f_)
d.eK(v.$3(0,1.6,3.77),0.3,B.f_,3,5,0.1)}else{u=n+0.1
s=v.$3(-0.38,u,3.77)
d.aF(s,r?new A.r(0.12,0.5,0.05):new A.r(0.05,0.5,0.12),B.f_)
u=v.$3(0.38,u,3.77)
d.aF(u,r?new A.r(0.12,0.34,0.05):new A.r(0.05,0.34,0.12),B.f_)
d.eK(v.$3(0,n-0.45,3.77),0.16,B.f_,3,5,0.1)}}},
i2k(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=C.a([],x.z),k=new A.eM(l),j=A.fBC(d).c
if(A.hz8(d)){w=j*0.56
k.aD(B.hco,new A.r(j*0.4,1.6,10),B.f_,0.3)
k.aD(B.hmK,B.h9X,B.f_,0.3)
k.aD(new A.r(0,11.5+w/2,9),new A.r(j,w,2.4),E.y5,0.5)
return l}if(A.hz7(d)){if(d==="tablet")w=10
else w=d==="bigphone"?6.8:6.1
k.aD(new A.r(0,0.4,5),new A.r(j+1.2,0.8,3.4),B.f_,0.3)
k.aD(new A.r(0,0.8+w/2,5),new A.r(j,w,0.5),E.y5,0.5)
v=e?D.b9:D.az
k.eK(new A.r(0,0.9,6.8),0.22,v,3,5,0.2)
return l}switch(d){case"lamp":k.cJ(B.h3_,B.aXu,3.6,B.Fy,0.4,14)
k.cJ(B.aXu,B.h3i,0.5,B.yh,0.5,8)
v=e?B.nl:L.MY
k.wW(new A.r(0,11,8),new A.r(0,19,8),5.6,v,!1,!0,3.8,0.2,16)
break
case"toaster":k.aD(B.hhs,B.hcu,B.hj,0.8)
k.aF(B.haH,B.hdr,B.Zu)
if(e){k.e=0.5
v=C.ar(B.YM,T.yf,(Math.sin(f*6)+1)/2)
v.toString
k.aF(B.h4T,new A.r(6,0.15,3),v)
k.e=0}break
case"hairdryer":k.aD(B.hcG,B.hhS,B.Z2,0.2)
k.wV(B.h8E,B.hcX,2,B.w3,1.6,0.6,12)
k.aD(B.hav,B.hib,B.w3,0.6)
if(e)for(v=f*1.6,u=0;u<6;++u)k.eK(new A.r(4.5+D.k.E(v+u/6,1)*8,4.5+Math.sin(u*2)*1.2,7),0.3,B.aib,3,5,0.2)
break
case"rangeM":k.aD(B.h3C,B.h8b,B.ye,0.7)
k.aD(B.hjv,B.hgn,D.vV,0.9)
k.aD(B.h45,B.aZm,B.MB,0.9)
k.aD(B.hiz,B.hma,B.Yt,0.5)
for(v=f*5,t=0;t<2;++t){s=B.a5P[t]
for(r=v+s,q=0;q<2;++q){p=B.cNa[q]
k.cJ(new A.r(s,36.6,p),new A.r(s,36.9,p),4.2,B.Z4,0.3,14)
if(e){k.e=0.8
o=C.ar(E.Ms,B.ahe,(Math.sin(r)+1)/2)
o.toString
k.my(new A.r(s,37,p),new A.r(s,37.2,p),3.8,2,o,0,12)
k.e=0}}}break
default:n=d==="washerM"
k.aD(B.hhF,B.h7J,n?B.Zf:B.ZB,0.4)
k.aD(B.hgg,B.h9Q,B.Y3,0.3)
k.cJ(B.h3A,B.hf6,9.5,B.XX,0.8,20)
k.cJ(B.hea,B.hdu,7.4,n?B.Y6:B.Zv,0.9,20)
if(e){k.e=0.8
for(u=0;u<3;++u){m=f*(n?5:7)+u*2.1
v=Math.cos(m)
r=Math.sin(m)
if(n)o=(u&1)===0?B.afK:B.w3
else o=(u&1)===0?T.yf:D.az
k.eK(new A.r(v*4,17+r*4,28.9),1.7,o,3,6,0.2)}k.e=0}}return l},
hce(d,e){A.fBC(e)
return A.eZ(d.c,d.d+d.r*1.9,0,5)},
ies(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=C.a([],x.z),h=new A.eM(i)
for(w=d.b,v=w.length,u=e*8,t=e*5,s=0;s<w.length;w.length===v||(0,C.J)(w),++s){r=w[s]
q=!1
if(r.b==="ceiling")if(r.z!=null){q=r.Q
q=q!=null&&q.c>=2&&!q.x}if(q){p=A.ah5(r)
o=d.a79(r)
if(r.z==="fan"){n=o?u:0.4
for(q=p.a,m=0;m<4;++m){l=n+m*3.141592653589793/2
k=A.ti(B.h5G,l)
h.uN(new A.r(q+k.a,88.5+k.b,0+k.c),B.hiM,B.ag1,0.3,l)}}if(o&&r.z==="light"){h.e=0.9
h.d=0.28+0.05*Math.sin(t)
h.eK(new A.r(p.a,93,0),11,B.Mo,4,10,0)
h.d=1
h.e=0}}}for(w=d.c,w=new C.cs(w,C.a4(w).k("cs<1,2>")).gag(0);w.C();){j=w.d
r=d.lD(j.a)
if(r==null)continue
v=j.b
D.d.v(i,A.nk(A.i2k(v,d.a79(r),e),0,A.hDh(r.c),A.hce(r,v)))}return i},
iez(d,e){var w,v,u,t,s,r,q,p,o,n,m
for(w=e.c,w=new C.cs(w,C.a4(w).k("cs<1,2>")).gag(0),v=x.o;w.C();){u=w.d
t=e.lD(u.a)
if(t!=null){s=u.b
r=A.ah5(t)
q=t.c
p=B.uY[q]
o=r.a+p.a*0.5
n=r.c+p.c*0.5
m=new A.r(o,r.b+p.b*0.5,n)
s=A.hce(t,s)
p=B.uY[q]
d.b=0
d.f=2
d.e=0.6
d.aD(m,(q&1)===0?new A.r(2,2.4,0.9):new A.r(0.9,2.4,2),B.ql,0.2)
r=B.uY[q]
d.iD(C.a([m,new A.r(o+r.a,2+r.b,n+r.c),new A.r(s.a+p.a*2,1,s.c+p.c*2)],v),0.22,B.MO,!0,0.2,6)
d.e=0}}},
id1(d){var w,v,u,t,s,r,q,p,o,n,m=C.a([],x.a)
for(w=d.c,w=new C.cs(w,C.a4(w).k("cs<1,2>")).gag(0),v=x.o;w.C();){u=w.d
t=d.lD(u.a)
if(t==null||!d.a79(t))continue
s=u.b
r=A.fBC(s)
r.toString
q=new A.fBH(A.hDh(t.c),A.hce(t,s))
if(A.hz8(s)){s=r.c
p=s-3
r=-p/2
s=13+(s*0.56-3)
o=p/2
m.push(new A.fh(C.a([q.$3(r,s,10.3),q.$3(o,s,10.3),q.$3(o,13,10.3),q.$3(r,13,10.3)],v),0,new A.fBF(t,u),960,540,2,2,0,!1))}else if(A.hz7(s)){if(s==="tablet")n=10
else n=s==="bigphone"?6.8:6.1
p=r.c-0.6
s=-p/2
r=1.1+(n-0.6)
o=p/2
m.push(new A.fh(C.a([q.$3(s,r,5.3),q.$3(o,r,5.3),q.$3(o,1.1,5.3),q.$3(s,1.1,5.3)],v),0,new A.fBG(),360,640,2,2,0,!1))}}return m},
hcT(d,e){var w,v,u=d.b
if(u==="ceiling"){u=d.f
u.toString
w=e===0?-2.7:2.7
return new A.r(-70+u*15.555555555555555+3.05+w,97.9,0)}w=d.r
if(e===0){v=(u==="switch"?48:16)-2.7
u=v}else{v=(u==="switch"?48:16)+2.7
u=v}return A.eZ(d.c,d.d+w*1.9,u,2.25)},
p4:function p4(d,e,f){this.a=d
this.b=e
this.c=f},
fGb:function fGb(d){this.a=d},
fGa:function fGa(d){this.a=d},
fEJ:function fEJ(d,e){this.a=d
this.b=e},
fBH:function fBH(d,e){this.a=d
this.b=e},
fBF:function fBF(d,e){this.a=d
this.b=e},
fBG:function fBG(){},
i2L(){var w,v,u,t,s,r,q,p=C.a([],x.ar)
for(w=0;w<3;++w){v=-72+48*w
u=v+48
p.push(new A.zp(5000+p.length,0,v,u,-60,36))
p.push(new A.zp(5000+p.length,0,v,u,36,60))}for(t=0;t<4;){v=(t&1)===0;++t
s=0
for(;;){if(!(s<(v?144:120)-0.1))break
u=p.length
r=v?144:120
q=s+48
p.push(new A.zp(5000+u,t,s,Math.min(r,q),0,95.5))
s=q}}return p},
hcx(d){var w=d-5000
return w>=0&&w<$.k2().length?$.k2()[w]:null},
i2K(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=C.a([],x.K)
for(w=a0.b,v=w.length,u=0;u<w.length;w.length===v||(0,C.J)(w),++u){t=w[u]
s=t.b
if(s==="ceiling"){s=t.f
s.toString
r=-70+s*15.555555555555555+3.05
q=D.d.fl($.k2(),new A.fmM(r))
d.push(new A.MG(6000+d.length,q.a,"Ceiling light box",-1,r-2.4,r+2.4,-2.4,2.4))}else{p=t.d+t.r*1.9
q=D.d.fl($.k2(),new A.fmN(t,p))
o=d.length
s=s==="switch"
n=s?"Switch box":"Outlet box"
m=s?48:16
s=s?48:16
d.push(new A.MG(6000+o,q.a,n,-1,p-1.4,p+1.4,m-2.4,s+2.4))}}for(l=0;l<2;++l){k=B.zK[l]
for(w=D.d.gag($.k2()),v=new C.eJ(w,new A.fmO(k)),s=k.c,o=k.d,n=k.e,m=k.f,j=k.a==="door";v.C();){i=w.gR(0)
h=Math.max(i.c,s)
g=Math.min(i.d,o)
if(g-h>0.5){f=d.length
i=i.a
e=j?"Door opening":"Window opening"
d.push(new A.MG(6000+f,i,e,l,h,g,n,m))}}}return d},
hL9(){var w,v,u,t,s=x.S,r=C.U(s,x.ag)
for(w=$.k2(),v=w.length,u=0;u<w.length;w.length===v||(0,C.J)(w),++u)r.n(0,w[u].a,new A.MH(C.aS(s)))
w=C.a([],x.gc)
for(t=0;t<5;++t)w.push(new A.a4Q())
return new A.bO3(A.hyB(),r,w,C.aS(s))},
hxB(d,e){var w,v
switch(d){case 6:w=B.brJ
break
case 5:w=B.aiq
break
default:v=D.o.E(e*29,7)-3
w=C.a_(255,233+v,228+v,214+v)
break}return w},
hy2(c7,c8,c9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4=C.a([],x.z),c5=new A.eM(c4),c6=c7.a
A.hys(c5,c6.a)
for(w=c6.b,v=w.length,u=0;t=w.length,u<t;w.length===v||(0,C.J)(w),++u){s=w[u]
t=s.b
r=s.a
if(t==="ceiling"){t=s.f
t.toString
A.hyq(c5,r,1,-70+t*15.555555555555555)}else{t=t==="switch"?48:16
A.hyr(c5,r,s.r,s.d,s.c,t)}}c5.b=0
c5.f=1
c5.e=0.6
for(u=0;u<w.length;w.length===t||(0,C.J)(w),++u){q=w[u].w
if(q!=null){v=q.a
c5.iD(v,0.36,q.b?B.ZM:B.Mq,!0,0.35,6)}}c5.e=0
A.i4f(c5)
p=new A.fCs(c7)
o=new A.fCv(c5)
for(w=$.k2(),v=w.length,t=x.K,r=c7.b,n=c7.c,u=0;u<w.length;w.length===v||(0,C.J)(w),++u){m=w[u]
l=m.a
k=r.h(0,l)
j=m.b
i=n[j].a
if(!k.a)continue
h=A.hxB(i,l)
if(j===0)continue
c5.f=0
c5.b=l
c5.x=$.dl=$.dl+1
g=C.a([],t)
for(f=$.xl(),e=f.length,d=k.d,a0=0;a0<f.length;f.length===e||(0,C.J)(f),++a0){q=f[a0]
if(q.b===l&&q.d>=0&&d.q(0,q.a))g.push(q)}l=j-1
j=m.c+0.1
f=m.d-0.1
if(g.length===0)o.$8(l,j,f,0,95.5,3.75,0.5,h)
else{q=D.d.gH(g)
g=q.e
o.$8(l,j,g,0,95.5,3.75,0.5,h)
j=q.f
o.$8(l,j,f,0,95.5,3.75,0.5,h)
o.$8(l,g,j,q.w,95.5,3.75,0.5,h)
o.$8(l,g,j,0,q.r,3.75,0.5,h)}c5.x=0}for(w=$.k2(),v=w.length,u=0;u<w.length;w.length===v||(0,C.J)(w),++u){m=w[u]
t=m.a
k=r.h(0,t)
l=m.b
j=n[l]
i=j.a
if(!k.c||i>=6)continue
j=j.b
g=i===0
if(g)a1=B.ahf
else if(i>=5)a1=B.MC
else{j=!(c8>=j)?B.Ng:B.FO
a1=j}a2=g?0.42:1.3
c5.b=t
c5.e=0.5
if(l===0)continue
else{c5.f=0
c5.x=$.dl=$.dl+1
for(t=D.d.gag($.z9()),j=new C.eJ(t,new A.fCo(m)),--l,g=0*a2;j.C();){f=t.gR(0)
for(e=f.c,d=f.d,f=f.e+6,a3=8;a3<92;a3+=16){if(a3<d||a3>f||p.$3(m,e,a3))continue
a4=B.uY[l]
a5=B.a48[l]
q=A.eZ(l,e,a3,4.03)
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
c5.xt(new A.r(b0-g,b2-a2,b4-g),new A.r(a6-g,a7-a2,a8-g),new A.r(a6+g,a7+a2,a8+g),new A.r(b0+g,b2+a2,b4+g),a1,a4)}}c5.x=0}}c5.e=0
for(w=$.xl(),v=w.length,u=0;u<w.length;w.length===v||(0,C.J)(w),++u){q=w[u]
t=q.b
l=q.a
if(!r.h(0,t).d.q(0,l)||q.d>=0)continue
b5=t-5000
t=b5>=0&&b5<$.k2().length?$.k2()[b5]:null
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
e=A.eZ(t,b6,b7,4.02)
l=j-l
j=l+0.3
g=f-g
f=(t&1)===0
c5.aF(e,f?new A.r(j,g,0.06):new A.r(0.06,g,j),D.av)
t=A.eZ(t,b6,b7,4.06)
l-=0.4
g-=0.9
c5.aD(t,f?new A.r(l,g,0.06):new A.r(0.06,g,l),B.N3,0.2)}}for(w=c7.d,v=C.dX(w,w.r,C.a4(w).c),t=v.$ti.c;v.C();){l=v.d
if(l==null)l=t.a(l)
b8=B.zK[l]
c5.b=6500+l
c5.f=2
l=new A.fCn(c5,b8,4.12)
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
if(t)c5.x=$.dl=$.dl+1
c0=b9-1
c1=(c0&1)===0?144:120
new A.fCu(i).$2(new A.fCq(i,!(c8>=v)),new A.fCp(c1,o,c0))
if(t)c5.x=0}c5.e=0
c5.f=2
c2=new A.fCt(c5)
a1=new A.fCr(c5)
c3=new A.fCw(c5,c2,a1)
A:{if("sheet"===c9){for(w=$.k2(),v=w.length,u=0;u<w.length;w.length===v||(0,C.J)(w),++u){m=w[u]
t=m.a
if(!r.h(0,t).a){if(!(m.d-m.c<47.9))if(m.b===0)n=m.f-m.e<95.9
else n=!1
else n=!0
n=!n||r.h(0,t).b}else n=!1
if(n)c3.$3(t,m,D.b9)}break A}if("cut"===c9){for(w=$.k2(),v=w.length,u=0;u<w.length;w.length===v||(0,C.J)(w),++u){m=w[u]
if(!(m.d-m.c<47.9))if(m.b===0)t=m.f-m.e<95.9
else t=!1
else t=!0
if(t){t=m.a
t=!r.h(0,t).b&&!r.h(0,t).a}else t=!1
if(t)c3.$3(m.a,m,D.cJ)}break A}if("screw"===c9){for(w=$.k2(),v=w.length,u=0;u<w.length;w.length===v||(0,C.J)(w),++u){m=w[u]
t=m.a
k=r.h(0,t)
if(k.a&&!k.c)c3.$3(t,m,D.bs)}break A}if("saw"===c9){for(w=$.xl(),v=w.length,u=0;u<w.length;w.length===v||(0,C.J)(w),++u){q=w[u]
t=q.b
k=r.h(0,t)
if(!k.a||k.d.q(0,q.a))continue
b5=t-5000
t=b5>=0&&b5<$.k2().length?$.k2()[b5]:null
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
if(l)c5.aF(new A.r(d/2,95.1,0),new A.r(a6+2,0.2,f-e+2),D.ax)
else{a7=t-1
d=A.eZ(a7,d/2,(e+f)/2,4.15)
a8=q.d>=0
a6+=a8?0:2
a8=a8?0:2
a8=f-e+a8
c5.aF(d,(a7&1)===0?new A.r(a6,a8,0.12):new A.r(0.12,a8,a6),D.ax)}c5.d=1
c5.e=0
c5.f=2
d=j+g
j=g-j
g=f-e
if(l){t=d/2
c2.$3(n,new A.r(t,94.5,0),new A.r(j+6,2,g+6))
a1.$4$r(n,new A.r(t,94.5,0),D.ax,2)}else{--t
d/=2
f=(e+f)/2
e=A.eZ(t,d,f,4.4)
j=Math.max(8,j)
g=Math.max(10,g)
c2.$3(n,e,(t&1)===0?new A.r(j,g,0.8):new A.r(0.8,g,j))
t=A.eZ(t,d,f,5.8)
a1.$4$r(n,t,D.ax,q.d>=0?3.5:1.8)}}break A}if("bead"===c9){for(b5=0;b5<2;++b5){if(w.q(0,b5)||!c7.aJg(b5))continue
b8=B.zK[b5]
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
e=A.eZ(t,l,f,4.15)
r=n-r
n=r+4
j=g-j
g=j+4
d=(t&1)===0
c5.aF(e,d?new A.r(n,g,0.1):new A.r(0.1,g,n),B.Nj)
c5.d=1
c5.e=0
c5.f=2
n=A.eZ(t,l,f,4.4)
r+=8
j+=8
c2.$3(v,n,d?new A.r(r,j,0.8):new A.r(0.8,j,r))
a1.$4$r(v,A.eZ(t,l,f,6.5),B.Nj,3.5)}break A}if("mud"===c9||"tape"===c9||"sand"===c9||"paint"===c9){switch(c9){case"mud":w=B.f9u
break
case"tape":w=B.f9f
break
case"sand":w=B.fa9
break
default:w=B.faa
break}for(b9=0;b9<5;++b9){if(!w.q(0,n[b9].a))continue
if(b9===0){c5.b=6700
c5.f=3
c5.e=0.8
c5.d=0.22
c5.aF(B.h2P,B.hhp,D.aJ)
c5.d=1
c5.e=0
c5.f=2
c2.$3(6700,B.hi6,B.h64)
a1.$4$r(6700,B.h52,D.aJ,4)}else{c0=b9-1
v=c5.b=6700+b9
c5.f=3
c5.e=0.8
c5.d=0.22
t=(c0&1)===0
r=A.eZ(c0,(t?144:120)/2,48,4.4)
l=(t?144:120)-1
c5.aF(r,t?new A.r(l,94,0.2):new A.r(0.2,94,l),D.aJ)
c5.d=1
c5.e=0
c5.f=2
r=A.eZ(c0,(t?144:120)/2,48,4.7)
l=t?144:120
c2.$3(v,r,t?new A.r(l,94,1):new A.r(1,94,l))
a1.$4$r(v,A.eZ(c0,(t?144:120)/2,70,7),D.aJ,4)}}}}w=C.U(x.S,x.q)
for(v=$.k2(),t=v.length,u=0;u<v.length;v.length===t||(0,C.J)(v),++u){m=v[u]
r=m.b
n=r===0
l=n?"Ceiling sheet":"Wall sheet"
j=m.c+m.d
r=n?new A.r(j/2,96,(m.e+m.f)/2):A.eZ(r-1,j/2,48,3.5)
w.n(0,m.a,new A.cH(l,"A sheet of 1/2 inch drywall: gypsum between two layers of paper. A whole sheet is 4 by 8 feet.",r,90))}for(v=$.xl(),t=v.length,u=0;u<v.length;v.length===t||(0,C.J)(v),++u){q=v[u]
r=q.d
n=q.e+q.f
r=r>=0?A.eZ(B.zK[r].b,n/2,40,3.5):new A.r(n/2,60,0)
w.n(0,q.a,new A.cH(q.c,"A hole to cut in the sheet.",r,90))}for(b5=0;b5<2;++b5){v=B.zK[b5]
w.n(0,6500+b5,new A.cH("Corner bead","Metal angle nailed on an outside corner (the corner of the door or window opening).",A.eZ(v.b,(v.c+v.d)/2,40,3.5),100))}for(m=0;m<5;++m){v=B.a6_[m]
t=v[0]
v=D.a.b2(v,1)
if(m===0)r=B.h50
else{r=m-1
r=A.eZ(r,((r&1)===0?144:120)/2,48,3.5)}w.n(0,6700+m,new A.cH(t.toUpperCase()+v,"All the joints and screw heads here get mud, tape, three coats, sanding and primer.",r,110))}for(v=B.DD.gdR(B.DD),v=v.gag(v);v.C();){t=v.gR(v)
r=t.a
t=t.b
w.n(0,r,new A.cH(t.a,t.b,t.c,60))}w.v(0,A.hch(c6,0,"look").b)
return new A.qU(c4,w,B.v0,B.qN,B.aQY,!0,0)},
i4f(d){var w,v,u
d.f=2
d.b=0
d.b=7010
d.kZ(B.hkA,B.h99,B.bew,0.02,2)
for(w=0;w<6;++w)d.aF(new A.r(-40,0.5+w,52.1),B.hhx,B.bgN)
d.aF(B.heK,B.hiV,B.aiq)
d.b=7011
d.cJ(B.h8O,B.hjO,6.6,B.btH,0.2,16)
d.cJ(B.h8Y,B.h8P,6.7,B.bf2,0.2,16)
d.cJ(B.hhv,B.hnC,5.8,B.FO,0.1,16)
d.aD(B.h8R,B.hmZ,B.hj,0.9)
d.aD(B.h7Y,B.h7P,B.ql,0.2)
d.b=7012
for(v=0;v<2;++v){u=B.c9z[v]
d.my(new A.r(u,0,24),new A.r(u,2.1,24),3.4,1,B.ai7,0.05,14)}d.b=7013
d.aD(B.hjb,B.heq,B.hj,0.9)
d.aD(B.h2N,B.hgk,B.ql,0.2)
d.b=7014
d.aD(B.hl6,B.hj6,B.Mr,0.4)
d.aD(B.hlN,B.hnd,B.ql,0.3)
d.cJ(B.hlz,B.ha1,1.2,B.Yq,0.8,10)
d.b=7015
d.aD(B.hgy,B.haV,B.afo,0.7)
d.aD(B.hcU,B.hn6,B.ql,0.2)
d.b=7016
d.aD(B.hju,B.h9r,B.bpb,0.1)
d.aD(B.hdV,B.hmN,B.bhx,0.05)
d.b=7017
for(w=0;w<3;++w)d.aD(new A.r(58+w*2.2,0.7,-8),B.h7M,B.Nj,0.8)
d.b=7018
d.aD(B.hlr,B.haR,B.buw,0.2)
d.cJ(B.hbj,B.aYM,2.2,B.btI,0.1,12)
d.cJ(B.aYM,B.hgG,0.35,B.afo,0.8,6)
d.b=7019
d.aD(B.hhR,B.hgO,B.hj,0.9)
d.aD(B.hnn,B.hlg,B.MB,0.5)
d.aD(B.hj3,B.hdM,B.Mr,0.3)
A.Dk(d,7010,B.hhb,B.h9a)
A.Dk(d,7011,B.aYf,B.h6o)
A.Dk(d,7012,B.aYh,B.h60)
A.Dk(d,7013,B.aZv,B.h7p)
A.Dk(d,7014,B.aZb,B.h7r)
A.Dk(d,7015,B.aZ2,B.h9v)
A.Dk(d,7016,B.aZf,B.h9z)
A.Dk(d,7017,B.aYZ,B.h5v)
A.Dk(d,7018,B.aZe,B.h7q)
A.Dk(d,7019,B.hls,B.h6A)},
ieA(a9,b0,b1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=C.a([],x.z),a4=new A.eM(a3),a5=new A.fEN(a4,b1),a6=a9.c[0],a7=a6.a,a8=!(b0>=a6.b)
for(a6=D.d.gag($.k2()),w=new C.eJ(a6,new A.fEM()),v=a9.b,u=a7<6,t=a7===0,s=a7>=5;w.C();){r=a6.gR(0)
q=r.a
p=v.h(0,q)
if(!p.a)continue
a4.b=q
o=a4.e=0
n=r.c
m=r.d
l=r.e
r=r.f
a5.$6(n+0.1,m-0.1,l+0.1,r-0.1,95.5,A.hxB(a7,q))
if(p.c&&u){if(t)k=B.ahf
else if(s)k=B.MC
else{q=a8?B.Ng:B.FO
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
for(;e<a6.length;a6.length===u||(0,C.J)(a6),++e){d=a6[e]
if(f===1)a0=B.ai0
else{if(a8)r=f===(w?3:t)
else r=!1
if(s)a0=B.MC
else{r=r?B.Ng:B.FO
a0=r}}a1=95.49-f*0.01
a4.e=0.4+f*0.1
for(r=d/2,a2=0;a2<2;++a2){h=E.Ss[a2]
a5.$6(h-r,h+r,-59,59,a1,a0)}a5.$6(-71,71,36-r,36+r,a1,a0)
for(r=d*0.3,a2=0;a2<2;++a2){i=B.cRK[a2]
a5.$6(-71,71,i-r,i+r,a1,a0)}for(a2=0;a2<2;++a2){h=B.d37[a2]
a5.$6(h-r,h+r,-59,59,a1,a0)}++f}}for(a6=$.xl(),w=a6.length,e=0;e<a6.length;a6.length===w||(0,C.J)(a6),++e){a0=a6[e]
u=a0.b
t=a0.a
s=!0
if(v.h(0,u).d.q(0,t))if(a0.d<0){o=u-5000
u=(o>=0&&o<$.k2().length?$.k2()[o]:null).b!==0}else u=s
else u=s
if(u)continue
a4.b=t
a4.e=1.2
u=a0.e
t=a0.f
s=a0.r
r=a0.w
a5.$6(u-0.15,t+0.15,s-0.15,r+0.15,95.47,D.av)
a4.e=1.4
a5.$6(u+0.5,t-0.5,s+0.5,r-0.5,95.46,B.N3)}return a3},
ieB(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
if(d.a===0)return B.v1
w=C.a([],x.z)
v=new A.eM(w)
v.f=3
v.e=1.2
v.d=0.22+0.25*(0.5+0.5*Math.sin(e*7))
for(u=C.dX(d,d.r,C.a4(d).c),t=u.$ti.c;u.C();){s=u.d
if(s==null)s=t.a(s)
r=s-5000
q=r>=0&&r<$.k2().length?$.k2()[r]:null
if(q!=null){s=q.b
p=q.c
o=q.d
n=p+o
p=o-p
if(s===0){s=q.e
o=q.f
v.aF(new A.r(n/2,94.6,(s+o)/2),new A.r(p,1.2,o-s),G.qj)}else{--s
n=A.eZ(s,n/2,48,5.1)
v.aF(n,(s&1)===0?new A.r(p,95,0.6):new A.r(0.6,95,p),G.qj)}continue}p=$.xl()
m=C.nv(new C.X(p,new A.fEO(s),C.T(p).k("X<1>")))
if(m!=null){r=m.b-5000
s=(r>=0&&r<$.k2().length?$.k2()[r]:null).b
p=m.e
o=m.f
n=m.w
l=m.r
k=p+o
p=o-p
if(s===0)v.aF(new A.r(k/2,94.6,0),new A.r(p+5,1.2,n-l+5),G.qj)
else{--s
k=A.eZ(s,k/2,(l+n)/2,5.2)
o=m.d>=0
p+=o?0:5
o=o?0:5
o=n-l+o
v.aF(k,(s&1)===0?new A.r(p,o,0.6):new A.r(0.6,o,p),G.qj)}continue}if(s>=6500&&s<6502){j=B.zK[s-6500]
s=j.b
p=j.c
o=j.d
n=j.e
l=j.f
k=A.eZ(s,(p+o)/2,(n+l)/2,5.2)
p=o-p+5
n=l-n+5
v.aF(k,(s&1)===0?new A.r(p,n,0.6):new A.r(0.6,n,p),G.qj)
continue}if(s>=6700&&s<6705){i=s-6700
if(i===0)v.aF(B.hef,B.hhk,G.qj)
else{s=i-1
p=(s&1)===0
s=A.eZ(s,(p?144:120)/2,48,5.1)
o=(p?144:120)-2
v.aF(s,p?new A.r(o,94,0.6):new A.r(0.6,94,o),G.qj)}}}return w},
zp:function zp(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
MG:function MG(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
fmM:function fmM(d){this.a=d},
fmN:function fmN(d,e){this.a=d
this.b=e},
fmO:function fmO(d){this.a=d},
MH:function MH(d){var _=this
_.c=_.b=_.a=!1
_.d=d},
a4Q:function a4Q(){this.b=this.a=0},
bO3:function bO3(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=0},
bO4:function bO4(d){this.a=d},
bOa:function bOa(d){this.a=d},
bO9:function bO9(d){this.a=d},
bOc:function bOc(){},
bOd:function bOd(){},
bO7:function bO7(d){this.a=d},
bO5:function bO5(){},
bO8:function bO8(){},
bOb:function bOb(){},
bO6:function bO6(){},
fCs:function fCs(d){this.a=d},
fCv:function fCv(d){this.a=d},
fCo:function fCo(d){this.a=d},
fCn:function fCn(d,e,f){this.a=d
this.b=e
this.c=f},
fCu:function fCu(d){this.a=d},
fCq:function fCq(d,e){this.a=d
this.b=e},
fCp:function fCp(d,e,f){this.a=d
this.b=e
this.c=f},
fCt:function fCt(d){this.a=d},
fCr:function fCr(d){this.a=d},
fCw:function fCw(d,e,f){this.a=d
this.b=e
this.c=f},
aqu:function aqu(d){this.a=d},
aqv:function aqv(d,e,f,g){var _=this
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
_.db=f
_.dx=null
_.fx=_.fr=_.dy=0
_.fy=g
_.c=_.a=null},
ce3:function ce3(d){this.a=d},
ce4:function ce4(d){this.a=d},
cdS:function cdS(d,e,f){this.a=d
this.b=e
this.c=f},
cdT:function cdT(d){this.a=d},
cdR:function cdR(d){this.a=d},
ce5:function ce5(d,e){this.a=d
this.b=e},
cdG:function cdG(d,e){this.a=d
this.b=e},
cdJ:function cdJ(d,e){this.a=d
this.b=e},
cdK:function cdK(d){this.a=d},
cdI:function cdI(d){this.a=d},
cdH:function cdH(d,e,f){this.a=d
this.b=e
this.c=f},
cdL:function cdL(d){this.a=d},
cdM:function cdM(d,e){this.a=d
this.b=e},
cdP:function cdP(){},
cdN:function cdN(d,e,f){this.a=d
this.b=e
this.c=f},
cdO:function cdO(d){this.a=d},
cdF:function cdF(d){this.a=d},
cdE:function cdE(d){this.a=d},
cdU:function cdU(d){this.a=d},
cdQ:function cdQ(d){this.a=d},
cdV:function cdV(){},
cdW:function cdW(d){this.a=d},
cdX:function cdX(){},
cdY:function cdY(){},
cdZ:function cdZ(){},
ce2:function ce2(d,e){this.a=d
this.b=e},
ce0:function ce0(d){this.a=d},
ce1:function ce1(d){this.a=d},
ce_:function ce_(d){this.a=d},
fEN:function fEN(d,e){this.a=d
this.b=e},
fEM:function fEM(){},
fEO:function fEO(d){this.a=d},
eZ(d,e,f,g){var w=B.dym[d],v=B.a48[d],u=B.uY[d]
return new A.r(w.a+v.a*e+u.a*g,f,w.c+v.c*e+u.c*g)},
ie4(d,e){return A.eZ(d,(d&1)===0?144:120,e,0).a7(0,B.uY[d].aO(0,1.75)).a7(0,B.uY[D.o.E(d+1,4)].aO(0,1.75))},
i2O(){var w,v,u,t,s,r,q,p,o="king",n="jack",m="cripple",l=C.a([],x.Y),k=new A.fmP(l)
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
aiy(d){var w=d-1000
return w>=0&&w<$.z9().length?$.z9()[w]:null},
hff(d){var w,v,u=d-2100
if(u<0||u>=80)return null
w=D.o.aq(u,20)
v=D.o.E(u,20)
return v<D.k.cL(((w&1)===0?144:120)/16)?new C.bqH(v,w):null},
Xt:function Xt(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
yq:function yq(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fmP:function fmP(d){this.a=d},
a5C:function a5C(d,e){var _=this
_.a=d
_.b=e
_.c=!1
_.d=null},
bTt:function bTt(d){this.a=d},
bTs:function bTs(d){this.a=d},
aS4(d,e){var w=new A.h2x(D.o.E(d*37,17)-8,e)
return C.a_(255,w.$1(218),w.$1(182),w.$1(126))},
hys(a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
a0.b=0
a0.f=-1
a0.kZ(B.h56,B.h6k,B.bs8,0.05,4)
a0.f=0
for(w=0;w<4;++w){v=(w&1)===0
u=v?144:120
a0.x=$.dl=$.dl+1
a0.b=2000+w
if(w===2)for(t=[new C.y(0,31.5),new C.y(67.5,u)],s=t.length,r=w+3,q=0;q<s;++q){p=t[q]
o=p.a
n=p.b
p=A.eZ(w,(o+n)/2,0.75,1.75)
m=n-o
m=v?new A.r(m,1.5,3.5):new A.r(3.5,1.5,m)
a0.aD(p,m,A.aS4(r,0.15),0.05)}else{t=A.eZ(w,u/2,0.75,1.75)
s=v?new A.r(u,1.5,3.5):new A.r(3.5,1.5,u)
a0.aD(t,s,A.aS4(w+3,0.15),0.05)}t=w*20
s=2100+t
l=0
for(;;){if(!(l<D.k.cL((v?144:120)/16)))break
o=l*16
n=Math.min(u,o+16)
a0.b=s+l
r=A.eZ(w,(o+n)/2,94.5,1.75)
p=n-o-0.12
p=v?new A.r(p,3,3.5):new A.r(3.5,3,p)
a0.aD(r,p,A.aS4(t+l+11,0.08),0.05)
if(a1.q(0,a0.b)){r=v?144:120
k=A.eZ(w,Math.min(r,o+8),94.5,1.75)
r=k.a+0
p=k.b
m=k.c+0
a0.dq(new A.r(r,p+-1.6,m),new A.r(r,p+1.7,m),0.5,B.ahy,8)}++l}a0.x=0}for(v=$.z9(),t=v.length,q=0;q<v.length;v.length===t||(0,C.J)(v),++q){l=v[q]
a0.f=0
a0.x=$.dl=$.dl+1
s=a0.b=l.a
r=l.e
p=l.d
j=r-p
k=A.aS4(s,0)
m=l.b
i=l.c
r=A.eZ(m,i,(p+r)/2,1.75)
a0.aD(r,(m&1)===0?new A.r(1.5,j,3.5):new A.r(3.5,j,1.5),k,0.05)
a0.x=0
if(a1.q(0,s)){o=B.a48[m]
h=A.eZ(m,i,20,1.75)
a0.f=2
s=o.a*0.81
r=o.b*0.81
p=o.c*0.81
m=h.a
i=h.b
g=h.c
a0.dq(new A.r(m-s,i-r,g-p),new A.r(m+s,i+r,g+p),0.5,B.ahy,8)}}a0.f=0
f=new A.fEK(a0)
f.$4(2300,B.a8f,80.5,88)
f.$4(2301,B.TT,72,79.5)
f.$4(2302,B.TT,36,37.5)
a0.f=1
for(e=0;e<10;++e){a0.b=3000+e
a0.kZ(new A.r(-70+e*15.555555555555555,98.75,0),B.him,A.aS4(e+40,0),0.05,2)}a0.f=2
a0.b=2200
v=A.eZ(0,24,59,1.75)
a0.aD(v,new A.r(14.25,26,3.4),B.bly,0.35)
v=A.eZ(0,24,59,3.55)
a0.aD(v,new A.r(12.4,22.6,0.3),B.bnb,0.45)
for(e=0;e<6;++e){d=52+e*3.4
for(v=e===5,q=0;q<2;++q){t=A.eZ(0,24+F.hg[q]*2.2,d,3.8)
s=v?B.Mr:E.XZ
a0.aD(t,new A.r(3.2,2.2,0.3),s,0.2)}}v=A.eZ(0,24,69.8,3.8)
a0.aF(v,new A.r(8,1.6,0.25),B.m1)
a0.b=0},
hyr(d,e,f,g,h,i){var w,v,u,t
d.f=2
d.b=e
w=g+f*1.9
v=A.eZ(h,w,i,2.25)
u=(h&1)===0
d.aD(v,u?new A.r(2.3,4.2,2.5):new A.r(2.5,4.2,2.3),B.N3,0.3)
v=A.eZ(h,w,i,3.52)
d.aD(v,u?new A.r(1.7,3.5,0.06):new A.r(0.06,3.5,1.7),B.ahs,0.1)
for(v=w-f*1.18,t=0;t<2;++t)d.eK(A.eZ(h,v,i+B.dff[t],2.6),0.22,B.hj,3,5,0.7)},
hyq(d,e,f,g){var w
d.f=f
d.b=e
w=g+0.75+2.3
d.cJ(new A.r(w,96,0),new A.r(w,99.8,0),2.3,B.N3,0.3,12)
d.dq(new A.r(w,95.95,0),new A.r(w,96.05,0),1.7,B.ahs,12)},
if2(d,e,f,g){var w,v,u,t,s,r,q,p,o,n,m=null,l=x.p,k=C.a([],l)
for(w=x.W,v=0;v<10;++v){u={}
t=d[v]
u.a=null
s=u.a=t.a
r=e===s?D.az.j(0.25):D.c.j(0.07)
q=new C.aP(13,13)
p=e===u.a
o=p?D.az:D.aW
n=new C.ay(o,p?2:1,D.r,-1)
o=p?D.az:D.ad
o=C.Y(t.c,o,m,m,m,17)
p=p?D.az:D.c
k.push(C.aA(m,C.p(m,new C.c7(D.aM,D.e,D.O,D.m,m,D.p,m,0,C.a([o,D.e1,C.d(t.b,m,m,m,m,m,m,new C.G(!0,p,m,m,m,m,12,D.H,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m)],l),m),D.f,m,m,new C.o(r,m,new C.bG(n,n,n,n),new C.bg(q,q,q,q),m,m,D.n),m,m,m,m,D.k0,m,m,m),D.y,!1,new C.bQ("tool-"+s,w),m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new A.fFE(u,f),m,m,m,m,m,m,!1,D.a4))}D.d.v(k,g)
return C.bW(D.bG,k,D.br,m,6,6)},
hyI(d,e,f){var w=d.bgF(e,f)
if(w==null)return null
return new A.r(D.k.F(w.a,-56,56),46,D.k.F(w.c,-44,44))},
hyJ(d,e,f){var w,v,u,t,s,r,q,p,o=f-e
if(d==null||o<0||o>1.6)return B.v1
w=C.a([],x.z)
v=new A.eM(w)
v.f=3
v.e=2
for(u=o*0.9,t=d.a,s=d.c,r=0;r<2;++r){q=D.k.E(u+r*0.5,1)
p=3+q*14
v.d=0.85*(1-q)
v.my(new A.r(t,0.4,s),new A.r(t,0.6,s),p,p-1.3,B.BQ,0,20)}return w},
hyH(d){var w,v,u
if(d.r==null)return B.v1
w=C.a([],x.z)
v=new A.eM(w)
v.f=-1
if(Math.sin(d.a)>-0.35){u=A.eZ(1,58,54,-3)
v.aF(u,new A.r(0.5,38,40),B.aiM)}if(Math.cos(d.a)<0.35){u=A.eZ(2,49.5,42,-3)
v.aF(u,new A.r(40,84,0.5),B.aiM)
u=A.eZ(2,49.5,4,-2.7)
v.aF(u,new A.r(40,8,0.5),B.bo_)}return w},
Dk(d,e,f,g){d.b=e
d.f=3
d.e=0.9
d.d=0.02
d.aF(f,g,D.c)
d.d=1
d.e=0
d.f=2},
h2x:function h2x(d,e){this.a=d
this.b=e},
fEK:function fEK(d){this.a=d},
fFE:function fFE(d,e){this.a=d
this.b=e},
hrr(){var w=x.S
return new A.baa(C.aS(w),C.a([],x.k),C.U(w,x.N))},
hch(a5,a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=C.a([],x.z),a3=new A.eM(a2),a4=a5.a
A.hys(a3,a4)
a3.f=2
a3.b=0
a3.b=7000
a3.my(B.h8u,B.h8t,8,3,B.Mq,0.3,20)
a3.my(B.hj2,B.h9h,8.15,7.2,B.biD,0.2,20)
a3.aD(B.h9A,B.hdR,B.boK,0.1)
a3.b=7001
a3.aD(B.hg0,B.hjH,B.bjm,0.4)
a3.aD(B.hhX,B.hlU,B.ql,0.3)
a3.aD(B.hi5,B.hcT,B.ql,0.2)
a3.cJ(B.hhe,B.aYF,1.25,B.Yq,0.8,10)
a3.cJ(B.aYF,B.hj9,0.38,B.hj,0.9,6)
A.Dk(a3,7000,B.aYb,B.h6I)
A.Dk(a3,7001,B.aZc,B.h7c)
for(w=a5.b,v=w.length,u=0;u<w.length;w.length===v||(0,C.J)(w),++u){t=w[u]
s=t.b
r=t.a
if(s==="ceiling"){s=t.f
s.toString
A.hyq(a3,r,2,-70+s*15.555555555555555)}else{s=s==="switch"?48:16
A.hyr(a3,r,t.r,t.d,t.c,s)}A.iey(a3,t)
A.iex(a3,t,a5)}A.iez(a3,a5)
q=new A.fDH(a3)
p=new A.fDF(a3)
o=new A.fDG(q,p)
if(D.a.a0(a7,"dev:")){n=D.a.b2(a7,4)
for(a4=w.length,v=n!=="light",s=n==="fan",u=0;u<w.length;w.length===a4||(0,C.J)(w),++u){t=w[u]
r=t.b
if(r==="ceiling")m=!v||s
else m=r==="switch"?D.d.q(B.iP,n):D.d.q(B.k7,n)
r=!1
if(t.w!=null)if(m){r=t.z
if(r!=null){l=t.Q
l=l!=null&&l.c>=2&&!l.x}else l=!1
r=!(l&&r===n)}if(r)o.$2(t,D.b9)}}else if(D.a.a0(a7,"app:"))for(a4=w.length,u=0;u<w.length;w.length===a4||(0,C.J)(w),++u){t=w[u]
v=!1
if(t.b==="outlet")if(t.z!=null){v=t.Q
v=v!=null&&v.c>=2&&!v.x}if(v)o.$2(t,D.b9)}else A:{if("drill"===a7){for(v=$.z9(),s=v.length,u=0;u<v.length;v.length===s||(0,C.J)(v),++u){k=v[u]
r=k.d
if(!(r<=20&&k.e>=20)||a4.q(0,k.a))continue
l=k.a
j=k.b
i=k.c
p.$4$r(l,A.eZ(j,i,20,4.8),B.BQ,1.5)
h=k.e
i=A.eZ(j,i,(r+h)/2,2.35)
r=h-r
q.$3(l,i,(j&1)===0?new A.r(7,r,4.7):new A.r(4.7,r,7))}for(g=0;g<4;++g){v=(g&1)===0
s=2100+g*20
k=0
for(;;){if(!(k<D.k.cL((v?144:120)/16)))break
B:{f=s+k
if(a4.q(0,f))break B
r=v?144:120
p.$4$r(f,A.eZ(g,Math.min(r,k*16+8),94.5,4.8),D.cJ,1.5)}++k}}break A}if("outlet"===a7||"switch"===a7){e=a7==="switch"?48:16
for(a4=$.z9(),v=a4.length,u=0;u<a4.length;a4.length===v||(0,C.J)(a4),++u){k=a4[u]
if(k.f==="cripple"||D.d.aX(w,new A.fDD(k)))continue
s=k.a
r=k.b
l=k.c
p.$4$r(s,A.eZ(r,l,e,5),D.b9,1.8)
j=k.d
i=k.e
l=A.eZ(r,l,(j+i)/2,2.35)
j=i-j
q.$3(s,l,(r&1)===0?new A.r(7,j,4.7):new A.r(4.7,j,7))}break A}if("ceiling"===a7){if(!D.d.aX(w,new A.fDE()))for(d=0;d<10;++d){a4=3000+d
v=-70+d*15.555555555555555
p.$4$r(a4,new A.r(v,94.6,0),D.b9,1.7)
q.$3(a4,new A.r(v,97,0),B.hbB)}break A}if("knock"===a7){for(a4=w.length,u=0;u<w.length;w.length===a4||(0,C.J)(w),++u){t=w[u]
for(v=t.b==="ceiling",s=4200+(t.a-4000)*2,r=t.x,g=0;g<2;++g){if(r[g])continue
a0=A.hcT(t,g)
l=s+g
q.$3(l,a0,B.aYk)
if(v)j=new A.r(g===0?-1.4:1.4,0,0)
else j=new A.r(0,g===0?-1.4:1.4,0)
p.$4$r(l,new A.r(a0.a+j.a,a0.b+j.b,a0.c+j.c),D.cJ,1.2)}}break A}if("cable"===a7){a4=A.eZ(0,24,59,2.5)
q.$3(2200,a4,new A.r(16,28,6))
a4=A.eZ(0,24,43,6)
v=a6===0
s=v?D.c:D.aJ
p.$4$r(2200,a4,s,v?2.4:1.8)
for(a4=w.length,u=0;u<w.length;w.length===a4||(0,C.J)(w),++u){t=w[u]
if(t.w==null)o.$2(t,B.BQ)
else if(a5.a6E(t)&&t.b!=="ceiling"){v=t.a===a6
s=v?D.c:D.aJ
o.$3$r(t,s,v?2.4:1.7)}}}}a1=new A.fDC()
a4=x.S
v=x.q
s=C.U(a4,v)
for(r=$.z9(),l=r.length,u=0;u<r.length;r.length===l||(0,C.J)(r),++u){k=r[u]
j=k.grd(0)
switch(k.f){case"king":i="A king stud runs the full height beside a door or window. The jack stud next to it carries the header."
break
case"jack":i="A jack stud holds up the header over the opening. It stops under the header."
break
case"cripple":i="A short stud above the header, or under the window sill, keeps the 16 inch spacing going."
break
case"corner":i="A corner stud: the walls meet here and the drywall will need something to screw into."
break
default:i="A 2 by 4 stud, standing 16 inches from the next one. The cable goes through a hole drilled in its middle."
break}s.n(0,k.a,new A.cH(j,i,A.eZ(k.b,k.c,48,3.5),60))}for(g=0;g<4;++g){r=(g&1)===0
l=2100+g*20
k=0
for(;;){if(!(k<D.k.cL((r?144:120)/16)))break
j=r?144:120
s.n(0,l+k,new A.cH("Top plate","Two boards across the tops of the studs. A cable going up to the ceiling light passes through a hole drilled in it.",A.eZ(g,Math.min(j,k*16+8),94.5,3.5),60));++k}}for(g=0;g<4;++g)s.n(0,2000+g,new A.cH("Bottom plate","The board the studs stand on, nailed to the floor.",A.eZ(g,((g&1)===0?144:120)/2,1,3.5),90))
for(d=0;d<10;++d)s.n(0,3000+d,new A.cH("Ceiling joist","A 2 by 6 across the top of the room. The ceiling drywall will be screwed to the bottom of it, and a light box hangs from the side.",new A.r(-70+d*15.555555555555555,98,0),90))
for(r=B.DD.gdR(B.DD),r=r.gag(r);r.C();){l=r.gR(r)
j=l.a
l=l.b
s.n(0,j,new A.cH(l.a,l.b,l.c,60))}s.n(0,2200,B.egX)
s.n(0,2300,B.egz)
s.n(0,2301,B.eh3)
s.n(0,2302,B.egF)
for(r=w.length,u=0;u<w.length;w.length===r||(0,C.J)(w),++u){t=w[u]
l=C.U(a4,v)
j=t.a
if(t.z==null)i=a1.$1(t)
else{i=C.w(a1.$1(t))
h=t.z
h.toString
h=i+": "+A.x6(h)
i=h}h=t.b==="ceiling"?"The box the light hangs from. Knockouts open: "+t.gGI()+" of 2.":"A plastic box nailed to the stud. Knockouts open: "+t.gGI()+" of 2. The cable ends inside it, and the device is wired to the cable."
l.n(0,j,new A.cH(i,h,A.ah5(t),24))
for(i=t.x,j=4200+(j-4000)*2,g=0;g<2;++g){h=i[g]?"A knockout that is broken out: a round hole for a cable.":"A round tab in the box. Break it out with the Knockout tool to make a hole for a cable."
l.n(0,j+g,new A.cH("Knockout",h,A.hcT(t,g),14))}s.v(0,l)}return new A.qU(a2,s,B.v0,B.qN,B.aQY,!0,0)},
iqY(d,e,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=C.a([],x.z),f=new A.eM(g)
for(w=d.b,v=w.length,u=0;u<w.length;w.length===v||(0,C.J)(w),++u){t=w[u]
s=t.w
if(s==null)continue
r=a0.h(0,t.a)
q=D.k.F((e-(r==null?-99:r))/1.6,0,1)
p=A.icp(s.a,q)
if(p.length<2)continue
f.b=0
f.f=2
f.e=0.6
f.Vj(p,0.36,s.b?B.ZM:B.Mq,!0,!0,0.35,6)
f.e=0}if(a1.a!==0){w=Math.sin(e*7)
for(v=C.dX(a1,a1.r,C.a4(a1).c),w=0.25+0.25*(0.5+0.5*w),r=v.$ti.c;v.C();){o=v.d
if(o==null)o=r.a(o)
n=o-1000
m=n>=0&&n<$.z9().length?$.z9()[n]:null
l=A.hff(o)
if(m!=null){o=m.b
s=A.eZ(o,m.c,20,1.75)
k=(o&1)===0?new A.r(8,14,7.5):new A.r(7.5,14,8)}else if(l!=null){o=l.b
j=l.a
i=(o&1)===0
h=i?144:120
s=A.eZ(o,Math.min(h,j*16+8),94.5,1.75)
k=i?new A.r(14,8,7.5):new A.r(7.5,8,14)}else if(o>=4200&&o<4400&&d.lD(4000+D.o.aq(o-4200,2))!=null){o-=4200
j=d.lD(4000+D.o.aq(o,2))
j.toString
s=A.hcT(j,D.o.E(o,2))
k=B.hb5}else if(o>=4000&&o<4100&&d.lD(o)!=null){o=d.lD(o)
o.toString
s=A.ah5(o)
k=B.hbS}else if(o>=3000&&o<3010){s=new A.r(-70+(o-3000)*15.555555555555555,98,0)
k=B.hbF}else{s=null
k=null}if(s==null||k==null)continue
f.b=0
f.f=3
f.e=1.2
f.d=w
f.aF(s,k,G.qj)}f.d=1
f.e=0}return g},
icp(d,e){var w,v,u,t,s,r,q,p
if(e>=1)return d
for(w=0,v=1;v<d.length;++v){u=d[v]
t=d[v-1]
w+=new A.r(u.a-t.a,u.b-t.b,u.c-t.c).gqg()}s=w*e
r=C.a([D.d.gH(d)],x.o)
for(v=1;v<d.length;++v){u=d[v]
t=v-1
q=d[t]
p=new A.r(u.a-q.a,u.b-q.b,u.c-q.c).gqg()
if(s>=p){r.push(d[v])
s-=p}else{if(s>0.01)r.push(A.oM(d[t],d[v],s/p))
break}}return r},
biu(d,e,f){return new A.D_(d,e,f)},
bct(d,e,f,g){return new A.Qe(d,e,f,g)},
hyB(){var w,v,u,t,s,r,q,p,o,n=A.hrr()
for(w=$.z9(),v=w.length,u=n.a,t=0;t<w.length;w.length===v||(0,C.J)(w),++t){s=w[t]
if(s.d<=20&&s.e>=20)u.J(0,s.a)}for(r=0;r<4;++r){w=2100+r*20
v=(r&1)===0
s=0
for(;;){if(!(s<D.k.cL((v?144:120)/16)))break
u.J(0,w+s);++s}}q=new A.fFv()
for(t=0;t<5;++t){w=B.d2h[t]
n.UR(w.c,q.$2(w.a,w.b))}n.UR("ceiling",3004)
for(w=n.b,v=w.length,t=0;t<v;++t){u=w[t].x
u[0]=!0
u[1]=!0}v=x.ha
u=C.C(w,v)
p=u.length
t=0
for(;t<u.length;u.length===p||(0,C.J)(u),++t){o=u[t]
if(o.b!=="ceiling")n.bkd(0,o.a)}w=C.C(w,v)
v=w.length
t=0
for(;t<w.length;w.length===v||(0,C.J)(w),++t){o=w[t]
if(o.b==="ceiling")n.bkd(0,o.a)}n.d=0
return n},
iz:function iz(d,e,f){this.a=d
this.b=e
this.c=f},
aW0:function aW0(d,e){this.a=d
this.b=e},
w1:function w1(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=1
_.w=null
_.x=j
_.y=0
_.Q=_.z=null
_.as=!1},
bQo:function bQo(){},
Q2:function Q2(d){this.b=d},
lz:function lz(d,e,f){this.a=d
this.b=e
this.c=f},
baa:function baa(d,e,f){var _=this
_.a=d
_.b=e
_.c=f
_.d=0
_.e=4000
_.r=_.f=!1},
cF0:function cF0(){},
cF1:function cF1(d){this.a=d},
cEO:function cEO(d){this.a=d},
cEN:function cEN(d,e){this.a=d
this.b=e},
cEM:function cEM(d){this.a=d},
cEI:function cEI(d,e){this.a=d
this.b=e},
cF3:function cF3(d,e){this.a=d
this.b=e},
cF2:function cF2(d){this.a=d},
cEL:function cEL(){},
cF7:function cF7(d){this.a=d},
cF4:function cF4(d){this.a=d},
cF5:function cF5(d){this.a=d},
cF6:function cF6(){},
cEP:function cEP(){},
cER:function cER(){},
cEQ:function cEQ(d){this.a=d},
cEK:function cEK(d,e){this.a=d
this.b=e},
cEJ:function cEJ(d){this.a=d},
cEX:function cEX(d){this.a=d},
cEZ:function cEZ(d,e){this.a=d
this.b=e},
cEY:function cEY(d){this.a=d},
cF_:function cF_(d){this.a=d},
cES:function cES(d){this.a=d},
cET:function cET(){},
cEU:function cEU(){},
cEV:function cEV(){},
cEW:function cEW(){},
fDH:function fDH(d){this.a=d},
fDF:function fDF(d){this.a=d},
fDG:function fDG(d,e){this.a=d
this.b=e},
fDD:function fDD(d){this.a=d},
fDE:function fDE(){},
fDC:function fDC(){},
D_:function D_(d,e,f){this.a=d
this.b=e
this.c=f},
Qe:function Qe(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
atx:function atx(d){this.a=d},
aty:function aty(d,e,f,g,h){var _=this
_.d=d
_.f=_.e=$
_.r="look"
_.w=null
_.y=_.x=0
_.z=null
_.Q=!0
_.at=_.as=!1
_.ax=e
_.ay=f
_.ch=g
_.CW=null
_.cx=-99
_.cy=0
_.db=-9
_.dy=_.dx=null
_.fy=_.fx=_.fr=0
_.go=h
_.c=_.a=null},
cnx:function cnx(d){this.a=d},
cn7:function cn7(d,e,f){this.a=d
this.b=e
this.c=f},
cn8:function cn8(d){this.a=d},
cn6:function cn6(d){this.a=d},
cmW:function cmW(d,e){this.a=d
this.b=e},
cmX:function cmX(d){this.a=d},
cmV:function cmV(d){this.a=d},
cmY:function cmY(){},
cmZ:function cmZ(d){this.a=d},
cmU:function cmU(d,e,f){this.a=d
this.b=e
this.c=f},
cmT:function cmT(d,e){this.a=d
this.b=e},
cmQ:function cmQ(d){this.a=d},
cny:function cny(d,e){this.a=d
this.b=e},
cn_:function cn_(d){this.a=d},
cmP:function cmP(d){this.a=d},
cn0:function cn0(d){this.a=d},
cn1:function cn1(d,e){this.a=d
this.b=e},
cn2:function cn2(d,e){this.a=d
this.b=e},
cn3:function cn3(d,e){this.a=d
this.b=e},
cn4:function cn4(d,e,f){this.a=d
this.b=e
this.c=f},
cmS:function cmS(d){this.a=d},
cmR:function cmR(d){this.a=d},
cn9:function cn9(d){this.a=d},
cn5:function cn5(d){this.a=d},
cnd:function cnd(d){this.a=d},
cne:function cne(d){this.a=d},
cnc:function cnc(d){this.a=d},
cnf:function cnf(d,e){this.a=d
this.b=e},
cnm:function cnm(d){this.a=d},
cnn:function cnn(d){this.a=d},
cng:function cng(d){this.a=d},
cnh:function cnh(d,e){this.a=d
this.b=e},
cnb:function cnb(d,e){this.a=d
this.b=e},
cni:function cni(d){this.a=d},
cnj:function cnj(d){this.a=d},
cnk:function cnk(d){this.a=d},
cnl:function cnl(d,e){this.a=d
this.b=e},
cna:function cna(d,e){this.a=d
this.b=e},
cno:function cno(){},
cnp:function cnp(){},
cnw:function cnw(d,e){this.a=d
this.b=e},
cns:function cns(d){this.a=d},
cnt:function cnt(d){this.a=d},
cnq:function cnq(d){this.a=d},
cnr:function cnr(d){this.a=d},
cnu:function cnu(){},
cnv:function cnv(){},
fFv:function fFv(){},
fFw:function fFw(d,e){this.a=d
this.b=e}},B,K,E,Ao,F,R,L,Ap,S,P,Aq
J=c[1]
C=c[0]
D=c[2]
A4=c[106]
Aa=c[117]
Ab=c[87]
Ac=c[132]
H=c[95]
N=c[121]
I=c[105]
T=c[134]
Ad=c[116]
Ae=c[131]
A5=c[82]
Af=c[114]
U=c[118]
Ag=c[123]
M=c[91]
A6=c[84]
V=c[126]
Ah=c[112]
A_=c[130]
W=c[129]
A0=c[124]
A1=c[128]
Ai=c[122]
A2=c[97]
Q=c[113]
Aj=c[103]
Ak=c[38]
G=c[107]
Al=c[133]
X=c[101]
Y=c[120]
A3=c[119]
Am=c[135]
A7=c[115]
A8=c[100]
Z=c[108]
A9=c[125]
An=c[127]
O=c[99]
A=a.updateHolder(c[26],A)
B=c[94]
K=c[28]
E=c[98]
Ao=c[68]
F=c[96]
R=c[33]
L=c[104]
Ap=c[109]
S=c[111]
P=c[102]
Aq=c[110]
A.f1W.prototype={
a6(){return"_RadioType."+this.b}}
A.aa9.prototype={
S(){return new A.aeH(null,this.$ti.k("aeH<1>"))}}
A.aeH.prototype={
gcqC(){var w=this.e
return w===$?this.e=new A.bpX(this):w},
gamz(){var w=this.Gn$
w=w==null?null:w.gaqC()
return w==null?this.a.d:w},
gaAx(){this.a.toString
return!0},
bYh(){var w=this,v=w.a.c,u=w.gamz()
if(v===u)return
w.a5y(v===w.gamz()?null:v)},
a5y(d){var w=this.Gn$
if(w!=null)w.glM().$1(d)
this.a.e.$1(d)},
d7(){var w,v=this
v.eH()
w=v.c
w.toString
v.sa7_(R.h7Z(w,v.$ti.c))},
t(){this.sa7_(null)
var w=this.d
if(w!=null)w.t()
this.a2()},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.a
m.toString
switch(0){case 0:w=o.gcqC()
v=w.a.gamz()
o.a.toString
u=new C.Ib(!0,R.hWN(n,!1,n,o.gaAx(),n,w,v,n,n,D.ky,n,n,n,n,n,!1,m.c,o.$ti.c),n)
break}C.anq(d)
o.a.toString
A:{m=new C.y(u,n)
break A}t=C.R(d)
s=R.h8_(d)
o.a.toString
w=s.b
w=w==null?n:w.aW(C.aS(x.c1))
r=w
if(r==null)r=t.ax.y
w=o.a.at
v=o.gaAx()
q=o.gaAx()?o.gbYg():n
p=o.d
if(p==null){p=C.k6(!0,n,!0,!0,n,n,!1)
o.d=p}return new C.zJ(C.dF(!1,n,!0,n,v,p,n,n,!1,n,n,m.a,n,n,n,n,q,!1,r,n,n,n,n,n,n,w,n,m.b,n),n)}}
A.bpX.prototype={
gaqC(){return this.a.gamz()},
glM(){return this.a.gLW()},
bkx(d){},
blE(d){},
gdd(d){return this.a}}
A.aOe.prototype={}
A.r.prototype={
a7(d,e){return new A.r(this.a+e.a,this.b+e.b,this.c+e.c)},
aK(d,e){return new A.r(this.a-e.a,this.b-e.b,this.c-e.c)},
aO(d,e){return new A.r(this.a*e,this.b*e,this.c*e)},
G9(d){var w=this.b,v=d.c,u=this.c,t=d.b,s=d.a,r=this.a
return new A.r(w*v-u*t,u*s-r*v,r*t-w*s)},
gqg(){var w=this.a,v=this.b,u=this.c
return Math.sqrt(w*w+v*v+u*u)},
gn0(d){var w=this,v=w.gqg()
return v<1e-9?w:new A.r(w.a/v,w.b/v,w.c/v)}}
A.ks.prototype={}
A.cH.prototype={}
A.hd.prototype={}
A.qU.prototype={}
A.fh.prototype={}
A.eM.prototype={
WR(){var w=this.x
if(!(w!==0))if(this.r){w=$.dl+1
$.dl=w}else w=0
this.w=w},
aJE(d,e,f,g,h,i,j,k){var w=this,v=i.gn0(0)
w.a.push(new A.ks(C.a([d,e,f,g],x.o),v,h,w.b,j,w.d,k,w.c,w.e,w.f,w.w))},
xt(d,e,f,g,h,i){return this.aJE(d,e,f,g,h,i,0,!1)},
bkl(d,e,f,g,h,i,j){return this.aJE(d,e,f,g,h,i,0,j)},
cZy(d,e,f,g,h,i,j){return this.aJE(d,e,f,g,h,i,j,!1)},
a7p(d,e,f,g,h,i){var w=this,v=(h==null?e.aK(0,d).G9(f.aK(0,d)):h).gn0(0)
w.a.push(new A.ks(C.a([d,e,f],x.o),v,g,w.b,0,w.d,i,w.c,w.e,w.f,w.w))},
blw(d,e,f,g){return this.a7p(d,e,f,g,null,!0)},
BM(d,e,f,g,h,i,j,k){var w,v,u,t,s,r
this.WR()
w=e.a/2
v=e.b/2
u=e.c/2
t=new A.c0I(this,j,new A.c0J(k,d),new A.c0K(k),f,h)
if((i&1)===0)t.$4(new A.r(0,0,1),new A.r(-w,-v,u),new A.r(2*w,0,0),new A.r(0,2*v,0))
if((i&2)===0)t.$4(new A.r(0,0,-1),new A.r(w,-v,-u),new A.r(-2*w,0,0),new A.r(0,2*v,0))
if((i&4)===0)t.$4(new A.r(1,0,0),new A.r(w,-v,u),new A.r(0,0,-2*u),new A.r(0,2*v,0))
if((i&8)===0)t.$4(new A.r(-1,0,0),new A.r(-w,-v,-u),new A.r(0,0,2*u),new A.r(0,2*v,0))
if(g){s=-w
r=2*w
t.$4(new A.r(0,1,0),new A.r(s,v,u),new A.r(r,0,0),new A.r(0,0,-2*u))
t.$4(new A.r(0,-1,0),new A.r(s,-v,-u),new A.r(r,0,0),new A.r(0,0,2*u))}},
aD(d,e,f,g){return this.BM(d,e,f,!0,g,0,1,0)},
aF(d,e,f){return this.BM(d,e,f,!0,0,0,1,0)},
kZ(d,e,f,g,h){return this.BM(d,e,f,!0,g,0,h,0)},
hl(d,e,f,g){return this.BM(d,e,f,!0,0,0,g,0)},
uN(d,e,f,g,h){return this.BM(d,e,f,!0,g,0,1,h)},
aEI(d,e,f,g,h){return this.BM(d,e,f,g,h,0,1,0)},
alp(d,e,f,g,h,i){return this.BM(d,e,f,!0,g,h,i,0)},
cKX(d,e,f,g,h,i){return this.BM(d,e,f,g,h,0,i,0)},
aEH(d,e,f,g){return this.BM(d,e,f,!0,0,0,1,g)},
wW(b3,b4,b5,b6,b7,b8,b9,c0,c1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this
b2.WR()
w=b4.aK(0,b3).gn0(0)
v=w.b
u=w.G9(Math.abs(v)<0.9?B.eb:B.h4).gn0(0)
t=w.G9(u).gn0(0)
s=b9<0?b5:b9
r=new A.c0L(u,c1,t)
for(q=b2.a,p=b3.a,o=b3.b,n=b3.c,m=b4.a,l=b4.b,k=b4.c,j=x.o,i=w.a*-1,v*=-1,h=w.c*-1,g=0;g<c1;){f=r.$1(g);++g
e=r.$1(g)
d=f.a
a0=e.a
a1=f.b
a2=e.b
a3=f.c
a4=e.c
a5=new A.r(d+a0,a1+a2,a3+a4).gn0(0)
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
q.push(new A.ks(C.a([new A.r(a6,a7,a8),new A.r(a9,b0,b1),new A.r(a0,a2,a4),new A.r(d,a1,a3)],j),a5,b6,b2.b,c0,b2.d,b8,b2.c,b2.e,b2.f,b2.w))
if(b7){q.push(new A.ks(C.a([b3,new A.r(a9,b0,b1),new A.r(a6,a7,a8)],j),new A.r(i,v,h),b6,b2.b,c0,b2.d,!1,b2.c,b2.e,b2.f,b2.w))
q.push(new A.ks(C.a([b4,new A.r(d,a1,a3),new A.r(a0,a2,a4)],j),w,b6,b2.b,c0,b2.d,!1,b2.c,b2.e,b2.f,b2.w))}}},
cJ(d,e,f,g,h,i){return this.wW(d,e,f,g,!0,!1,-1,h,i)},
a4L(d,e,f,g,h,i,j,k){return this.wW(d,e,f,g,h,i,-1,j,k)},
dq(d,e,f,g,h){return this.wW(d,e,f,g,!0,!1,-1,0,h)},
cPu(d,e,f,g,h,i,j){return this.wW(d,e,f,g,h,!1,-1,i,j)},
wV(d,e,f,g,h,i,j){return this.wW(d,e,f,g,!0,!1,h,i,j)},
Li(d,e,f,g,h,i){return this.wW(d,e,f,g,h,!1,-1,0,i)},
Lj(d,e,f,g,h,i){return this.wW(d,e,f,g,!0,!1,h,0,i)},
Tx(d,e,f,g,h,i,j){return this.wW(d,e,f,g,h,!1,i,0,j)},
eK(a7,a8,a9,b0,b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6=this
a6.WR()
w=new A.c0H(b0,b1)
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
v.push(new A.ks(C.a([new A.r(u+i*a8,t+h*a8,s+g*a8),new A.r(u+f*a8,t+e*a8,s+d*a8),new A.r(u+a0*a8,t+a1*a8,s+a2*a8),new A.r(u+a3*a8,t+a4*a8,s+a5*a8)],r),new A.r(i+f+a0+a3,h+e+a1+a4,g+d+a2+a5).gn0(0),a9,a6.b,b2,a6.d,!1,a6.c,a6.e,a6.f,a6.w))}},
bdl(d,e,f,g){return this.eK(d,e,f,6,10,g)},
ee(d,e,f,g,h){return this.eK(d,e,f,g,h,0.4)},
apT(d,e,f,g,h,i,j,k){var w,v,u,t,s
this.WR()
for(w=0;v=w+1,v<d.length;w=v){u=d[v]
t=d[w]
if(new A.r(u.a-t.a,u.b-t.b,u.c-t.c).gqg()<0.000001)continue
u=d[w]
t=d[v]
if(g)s=w===0||w===d.length-2
else s=!1
this.a4L(u,t,e,f,s,h,j,k)}if(i)for(u=e*0.98,w=1;v=w+1,v<d.length;w=v)this.eK(d[w],u,f,4,k,j)},
iD(d,e,f,g,h,i){return this.apT(d,e,f,!0,!1,g,h,i)},
Vj(d,e,f,g,h,i,j){return this.apT(d,e,f,g,!1,h,i,j)},
my(a5,a6,a7,a8,a9,b0,b1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=this
a4.WR()
a4.cPu(a5,a6,a7,a9,!1,b0,b1)
w=a6.aK(0,a5).gn0(0)
v=w.G9(Math.abs(w.b)<0.9?B.eb:B.h4).gn0(0)
u=new A.c0M(v,b1,w.G9(v).gn0(0))
for(t=[new C.y(a5,w.aO(0,-1)),new C.y(a6,w)],s=t.length,r=a4.a,q=x.o,p=0;p<s;++p){o=t[p]
n=o.a
m=o.b
for(o=n.a,l=n.b,k=n.c,j=0;j<b1;){i=u.$1(j)
h=i.a
g=i.b
i=i.c
f=u.$1(j)
e=f.a
d=f.b
f=f.c;++j
a0=u.$1(j)
a1=a0.a
a2=a0.b
a0=a0.c
a3=u.$1(j)
r.push(new A.ks(C.a([new A.r(o+h*a8,l+g*a8,k+i*a8),new A.r(o+e*a7,l+d*a7,k+f*a7),new A.r(o+a1*a7,l+a2*a7,k+a0*a7),new A.r(o+a3.a*a8,l+a3.b*a8,k+a3.c*a8)],q),m,a9,a4.b,b0,a4.d,!1,a4.c,a4.e,a4.f,a4.w))}}},
d07(d,e,f,g,h,i){return this.my(d,e,f,g,h,i,16)}}
A.uE.prototype={
b_n(d){var w,v,u,t,s,r,q,p,o,n,m,l=this
if(d&&l.c!==l.x)l.w=l.c
w=D.k.F(l.w,l.e,l.f)
l.y=1
v=l.r
if(v!=null){u=Math.cos(l.b)
t=Math.sin(l.a)
s=Math.sin(l.b)
r=Math.cos(l.a)
q=new A.bKe()
p=l.d
o=v.a
p=q.$4(-u*t,p.a,o[0]+5,o[1]-5)
r=q.$4(u*r,l.d.c,o[2]+5,o[3]-5)
n=Math.min(Math.min(C.je(p),C.je(r)),C.je(q.$4(s,l.d.b,4,o[4]-5)))
m=Math.min(w,Math.max(l.e,n))
if(l.z&&w>m)l.y=D.k.F(Math.sqrt(m/w),0.5,1)}else m=w
l.x=l.c=m},
ae8(){return this.b_n(!0)},
pg(d){var w,v,u,t=this
t.CW=d
if(!d){w=t.a
v=t.ay
u=t.ch
t.a=D.k.F(w,v-u,v+u)}t.b0()},
fW(d,e,f,g){var w=this
w.cx=f
w.cy=d
w.db=g
w.dx=e
w.b0()},
D8(d){return this.fW(null,null,d,null)},
A0(d,e){return this.fW(d,null,e,null)},
a8_(d,e,f){return this.fW(d,e,f,null)},
Hy(d,e,f,g){var w=this
w.dx=w.db=w.cy=w.cx=null
w.d=f
w.c=d
w.a=g
w.b=e
w.ae8()
w.b0()},
a7d(d){var w,v,u,t=this
if(!(t.cx!=null||t.cy!=null||t.db!=null||t.dx!=null))return
w=1-Math.exp(-d*7)
if(t.cy!=null&&t.c!==t.x)t.w=t.c
v=t.cx
if(v!=null){u=A.oM(t.d,v,w)
t.d=u
if(u.aK(0,v).gqg()<0.02){v=t.cx
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
t.dx=null}}t.ae8()
t.b0()},
d1s(d,e){var w,v,u,t,s=this,r=e.a,q=e.b,p=Math.min(r,q)*1.15*s.y,o=Math.cos(s.a),n=Math.sin(s.a)
q=new A.bKl(s,new A.bKm(Math.cos(s.b),Math.sin(s.b),o,n),(d.a-r/2)/p,-(d.b-q/2)/p)
w=q.$1(0)
r=q.$1(1).c
v=w.c
u=r-v
if(Math.abs(u)<1e-9)return null
t=(0-v)/u
if(t<=0)return null
return q.$1(t)},
bgG(d,e,f){var w,v,u,t,s=this,r=e.a,q=e.b,p=Math.min(r,q)*1.15*s.y,o=Math.cos(s.a),n=Math.sin(s.a)
q=new A.bKf(s,new A.bKg(Math.cos(s.b),Math.sin(s.b),o,n),(d.a-r/2)/p,-(d.b-q/2)/p)
w=q.$1(0)
r=q.$1(1).b
v=w.b
u=r-v
if(Math.abs(u)<1e-9)return null
t=(f-v)/u
if(t<=0)return null
return q.$1(t)},
bgF(d,e){return this.bgG(d,e,0)},
aqb(d){var w,v=this
v.cy=null
w=v.c
if(w!==v.x)v.w=w
v.w=D.k.F(Math.max(v.w,w)*d,v.e,v.f)
v.b_n(!1)
v.b0()}}
A.bVK.prototype={
cYL(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this.a,f=g.length-1,e=a0.a,d=a0.b
for(;;){if(!(f>=0)){w=0
v=null
break}if(g[f].a.glU().a.contains(e,d)){u=g[f]
w=u.b
u=u.a.glU().a.getBounds()
v=new C.a2(u[0],u[1],u[2],u[3])
break}--f}if(w!==0&&v.gdz()<16)return w
for(u=g.length,t=0,s=1/0,r=0;r<g.length;g.length===u||(0,C.J)(g),++r){q=g[r]
p=q.a.glU().a.getBounds()
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
A.b6Y.prototype={
gH1(d){var w=this.r.a
return w==null?0:w},
ckA(b0,b1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6=null,a7=b1.a,a8=b1.b,a9=new C.a2(0,0,0+a7,0+a8)
$.S()
w=C.K()
w.sar(B.c72.aG(0,a9))
b0.au(a9,w)
v=this.c.a*90
w=b0.c
J.bq(w.save())
w.translate(a7*0.45-v,a8*0.3)
b0.iq(0,-0.45)
for(u=x.O,t=0;t<3;++t){s=C.bJ(D.I,a8*(0.2-t*0.05),a7*(1.9-t*0.4))
r=[B.biI,D.aJ,D.ry][t]
q=new C.ao(D.Q,D.N,D.T,D.U,D.S)
q.sar(new C.c_(D.A,0.5,D.x,a6,0,C.a([r.j(0.3-t*0.07),r.j(0)],u),a6,a6).aG(0,s))
b0.bY(s,q)}w.restore()
p=new C.e4()
p.d_(11)
o=C.K()
for(q=this.r,t=0;t<170;++t){n=D.k.E(D.k.E(p.aj()*a7*1.5-v*(0.4+p.aj()*0.6),a7)+a7,a7)
m=p.aj()
l=p.aj()
k=q.a
if(k==null)k=0
o.r=D.c.j((0.35+0.65*l)*(0.55+0.45*Math.sin(k*(1+l*2)+t))).gp(0)
b0.N(new C.q(n,m*a8*0.85),0.5+l*1.4,o)}m=a7*0.8-v*0.3
k=a8*0.17
j=new C.q(m,k)
i=Math.min(a7,a8)*0.12
h=i*1.5
g=$.S()
f=C.K()
f.sar(new C.c_(D.A,0.5,D.x,a6,0,C.a([D.aJ.j(0.28),B.bpG],u),a6,a6).aG(0,C.bX(j,h)))
b0.N(j,h,f)
J.bq(w.save())
g=new C.aE(g.r,D.ah,a6,a6,C.a([],x.g))
g.D(new C.jN(C.bX(j,i)))
b0.mP(0,g)
g=C.K()
g.sar(B.exH.aG(0,C.bX(j,i)))
b0.N(j,i,g)
e=C.K()
e.r=B.bj6.gp(0)
for(d=0;d<4;++d){u=B.d4c[d].a
a0=u[0]
a1=u[1]
a2=u[2]
a3=u[3]
u=q.a
b0.bY(C.bJ(new C.q(m+(a0*i+Math.sin((u==null?0:u)*0.05)*i*0.08),k+a1*i),a3*i*2,a2*i*2),e)}$.S()
a4=C.K()
a4.r=D.c.j(0.55).gp(0)
for(u=i*0.16,d=0;d<3;++d){q=B.d13[d]
b0.bY(C.bJ(new C.q(m+q.a*i,k+q.b*i),u,q.c*i*2),a4)}u=j.a7(0,new C.q(i*0.45,i*0.35))
$.S()
q=C.K()
q.r=D.w.j(0.38).gp(0)
b0.N(u,i,q)
w.restore()
a5=new C.q(a7*0.18-v*0.2,a8*0.12)
w=C.K()
w.r=B.bkn.gp(0)
b0.N(a5,i*0.28,w)
w=i*0.05
q=a5.a7(0,new C.q(i*0.08,w))
u=C.K()
u.r=B.agR.gp(0)
b0.N(q,i*0.07,u)
u=-i
u=a5.a7(0,new C.q(u*0.1,u*0.09))
q=C.K()
q.r=B.agR.gp(0)
b0.N(u,w,q)},
a4(j3,j4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1,e2,e3,e4,e5,e6,e7,e8,e9,f0,f1,f2,f3,f4,f5,f6,f7,f8,f9,g0,g1,g2,g3,g4,g5,g6,g7,g8,g9,h0,h1,h2,h3,h4,h5,h6,h7,h8,h9,i0,i1,i2,i3,i4,i5,i6,i7,i8,i9,j0=this,j1=null,j2={}
if(j0.z)j0.ckA(j3,j4)
else{w=0+j4.a
v=0+j4.b
$.S()
u=C.K()
t=j0.y
s=C.ar(t,D.c,0.06)
s.toString
u.sar(new C.a9(D.b1,D.b7,D.x,C.a([s,t],x.O),j1,j1).aG(0,new C.a2(0,0,w,v)))
j3.au(new C.a2(0,0,w,v),u)}r=j4.a
q=j4.b
w=j0.c
p=Math.min(r,q)*1.15*w.y
o=r/2
n=q/2
m=Math.cos(w.a)
l=Math.sin(w.a)
k=Math.cos(w.b)
j=Math.sin(w.b)
i=new A.cvI(m,l,k,j)
h=new A.cvJ(j0,i)
j2.a=!1
j2.b=0
v=j0.b
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
d=s}j2.a=d
if(d)j2.b=h.$1(new A.r((t+u[1])/2,40,(u[2]+u[3])/2)).c
u=d}else u=!1
t=x.S
s=x.i
a0=C.U(t,s)
a1=C.U(t,t)
if(u)for(u=v.a,a2=u.length,a3=0;a3<u.length;u.length===a2||(0,C.J)(u),++a3){a4=u[a3]
if(a4.y!==0||a4.z===0)continue
for(a5=a4.a,a6=a5.length,a7=0,a8=0;a8<a5.length;a5.length===a6||(0,C.J)(a5),++a8)a7+=h.$1(a5[a8]).c
a6=a4.z
a9=a0.h(0,a6)
if(a9==null)a9=0
a0.n(0,a6,a9+a7/a5.length)
a5=a1.h(0,a6)
a1.n(0,a6,(a5==null?0:a5)+1)}u=v.r
b0=u<=0?0:1800+(u-1800)*D.k.F((w.c-200)/600,0,1)
b1=Math.max(Math.max(w.c*2.4+450,b0),w.as)
b2=C.U(t,s)
b3=C.U(t,t)
b4=B.hgp.gn0(0)
b5=b4.a7(0,B.pT).gn0(0)
b6=C.a([],x.bl)
u=j0.w
b7=u==null?B.v1:u.$1(j0.gH1(0))
u=w.d
b8=u.a
b9=u.b
c0=u.c
c1=w.c
j2.c=new Float64Array(24)
j2.d=new Float64Array(24)
j2.e=new Float64Array(24)
j2.f=new Float64Array(24)
j2.r=new Float64Array(24)
c2=new A.cvH(j2,j0,b8,b9,c0,m,l,k,j,c1,o,p,n,a0,a1,b1,r,q,b2,b3,b4.a,b4.b,b4.c,b5.a,b5.b,b5.c,b6)
c3=v.a
c4=c3.length>1500?A.i2E(v):j1
if(c4==null)for(c5=0;c5<c3.length;++c5)c2.$2(c3[c5],c5)
else for(w=c4.a,u=w.length,a2=r+40,a5=q+40,a3=0;a3<w.length;w.length===u||(0,C.J)(w),++a3){c6=w[a3]
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
if(a6)continue}for(a6=c6.b,a9=c6.c,d8=0;d8<a6.length;++d8)c2.$2(a6[d8],a9[d8])}for(w=J.a7(b7),c5=0;c5<w.gI(b7);++c5)c2.$2(w.h(b7,c5),c3.length+c5)
u=j0.x
e6=v.d
if(u==null)e7=e6
else{a2=C.C(e6,x.fd)
D.d.v(a2,u.$1(j0.gH1(0)))
e7=a2}u=x.n
e8=C.a([],u)
e9=C.a([0],u)
j2.w=j2.x=0
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
g2=i.$1(new A.r(f8.a-g0,f8.b-g1,f8.c-f9).G9(new A.r(d0.a-g0,d0.b-g1,d0.c-f9)))
if(g2.a*((f3.a+f4.a+f5.a+f6.a)*0.25)+g2.b*((f3.b+f4.b+f5.b+f6.b)*0.25)+g2.c*f7>0&&!f2.x)continue
if(f7>b1)continue
if(D.d.cM(c9,new A.cvB())){d0=C.a([],a2)
for(f3=c9.length,a3=0;a3<c9.length;c9.length===f3||(0,C.J)(c9),++a3){g3=c9[a3]
f4=g3.c
d0.push(new C.q(o+g3.a*p/f4,n-g3.b*p/f4))}for(c9=d0.length,g4=1/0,g5=-1/0,g6=1/0,g7=-1/0,a3=0;a3<c9;++a3){g8=d0[a3]
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
h1=new C.aE(c9.r,D.ah,j1,j1,f3)
c9=C.C(d0,u)
f3.push(new C.M9(c9,!0))
h1.a8()
c9=h1.glU().a.getBounds()
f3=c9[0]
f4=c9[1]
h2=(c9[2]-f3)*(c9[3]-f4)
e8.push(h2)
b6.push(new A.Gn(f2.r,f2.w,new A.cvC(j2,j0,f1<f0,h2,e9,f2,d0,h1),h1,D.L,f7-f2.f,f2.b,!1,!1))
continue}h3=new A.cvA(c9)
h4=C.a([],a6)
c9=$.S()
d0=C.a([],a9)
h1=new C.aE(c9.r,D.ah,j1,j1,d0)
for(h5=0;h5<6;h5=h6)for(c9=h5/6,h6=h5+1,f3=h6/6,c5=0;c5<8;c5=h7){f4=c5/8
h7=c5+1
f5=h7/8
h8=C.a([h3.$2(f4,c9),h3.$2(f5,c9),h3.$2(f5,f3),h3.$2(f4,f3)],a5)
if(D.d.aX(h8,new A.cvD()))continue
f4=C.a([],a2)
for(a3=0;a3<4;++a3){g3=h8[a3]
f5=g3.c
f4.push(new C.q(o+g3.a*p/f5,n-g3.b*p/f5))}h4.push(new C.b5(c5,h5,f4))
f4=C.C(f4,u)
f4=new C.M9(f4,!0)
d0.push(f4)
f5=h1.f
if(f5!=null)f4.ai(f5)
h1.a8()}if(h4.length===0)continue
b6.push(new A.Gn(f2.r,f2.w,new A.cvE(j0,f2,h4),h1,D.L,f7-f2.f,f2.b,!1,!1))}D.d.aZ(e8,new A.cvF())
e9[0]=e8.length>6?e8[5]:0
h9=C.dL(b2,t,s)
i0=C.dL(b3,t,t)
for(u=b6.length,a3=0;a3<b6.length;b6.length===u||(0,C.J)(b6),++a3){i1=b6[a3]
t=i1.b
if(t!==0){s=h9.h(0,t)
if(s==null)s=0
h9.n(0,t,s+i1.x)
s=i0.h(0,t)
i0.n(0,t,(s==null?0:s)+1)}}i2=c3.length+w.gI(b7)
for(c5=0;c5<b6.length;++c5){i3=b6[c5]
if(i3.f!=null){i4=i2+1
i3.c=i2
i2=i4}w=i3.b
if(w!==0){u=h9.h(0,w)
u.toString
w=i0.h(0,w)
w.toString
w=u/w}else w=i3.x
i3.d=w}D.d.aZ(b6,new A.cvG())
w=j0.d.a
D.d.a9(w)
$.S()
i5=C.K()
i5.b=D.N
i6=C.K()
i6.b=D.aa
i6.c=0.8
for(u=b6.length,a3=0;a3<b6.length;b6.length===u||(0,C.J)(b6),++a3){i3=b6[a3]
t=i3.f
if(t!=null){t.$1(j3)
t=i3.y
if(t!==0)w.push(new C.y(i3.r,t))
continue}t=i3.w
i5.r=t.gp(0)
s=i3.r
j3.ae(s,i5)
if(!i3.z&&!i3.e){i6.r=t.gp(0)
j3.ae(s,i6)}t=i3.y
if(t!==0)w.push(new C.y(s,t))}if(j0.e!==0){$.S()
g8=C.K()
g8.b=D.aa
g8.c=1.4
g8.r=D.c.j(0.35+0.25*Math.sin(j0.gH1(0)*6)).gp(0)
for(u=b6.length,a3=0;a3<b6.length;b6.length===u||(0,C.J)(b6),++a3){i3=b6[a3]
if(i3.Q)j3.ae(i3.r,g8)}}for(v=v.c,u=v.length,a3=0;a3<v.length;v.length===u||(0,C.J)(v),++a3){i7=v[a3]
g3=h.$1(i7.a)
t=g3.c
if(t<1)continue
s=o+g3.a*p/t
t=n-g3.b*p/t
i8=new C.iF(new C.en(i7.b,j1,j1,D.cH,j1,j1,j1,j1,j1,j1,new C.G(!0,D.c,j1,j1,j1,j1,11,D.u,j1,j1,j1,j1,j1,j1,j1,j1,j1,j1,j1,j1,j1,j1,j1,j1,j1,j1)),D.a5,D.bW,new C.jd(1),j1,j1,j1,j1,D.bX,j1,D.ct)
i8.ef()
a2=i8.b
a5=a2.c
a2=a2.a.c
i9=C.br(C.bJ(new C.q(s,t),a2.gba(a2)+8,a5+14),D.hL)
a5=$.S()
a2=new C.ao(D.Q,D.N,D.T,D.U,D.S)
a2.r=i7.c.j(0.92).gp(0)
j3.ap(i9,a2)
a2=new C.ao(D.Q,D.N,D.T,D.U,D.S)
a2.b=D.aa
a2.c=1
a2.r=D.ad.gp(0)
j3.ap(i9,a2)
a2=i8.b
a6=a2.c
a2=a2.a.c
i8.a4(j3,new C.q(s-a6/2,t-a2.gba(a2)/2))
t=i7.d
if(t!==0){s=C.a([],a9)
a5=new C.aE(a5.r,D.ah,j1,j1,s)
s.push(new C.iU(i9))
a5.a8()
w.push(new C.y(a5,t))}}},
aC(d){return!0}}
A.cFY.prototype={}
A.Gn.prototype={}
A.aw1.prototype={
S(){return new A.bsA(new A.bVK(C.a([],x.aB)),new C.ez(0,$.aw()),D.bD,D.I,D.bD,null,null)}}
A.bsA.prototype={
Z(){var w,v=this
v.a3()
A.hJf()
w=v.pW(new A.f5m(v))
w.fX(0)
v.d!==$&&C.aQ()
v.d=w},
t(){var w=this.d
w===$&&C.c()
w.t()
w=this.f
w.T$=$.aw()
w.P$=0
this.bAc()},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.a,l=m.as==null,k=l?n:new A.f5d(o)
l=l?n:new A.f5e(o,d)
w=m.c
v=m.d
u=m.e
t=m.r
s=o.f
r=m.w
m=m.x
q=C.a([v,s],x.dS)
p=o.a
q=C.a([C.ji(C.mI(D.iL,new C.em(C.b4(n,n,n,new A.b6Y(w,v,o.e,u,t,s,r,m,p.y,p.Q,new C.h4(q)),D.fJ),n),n,new A.f5f(o),new A.f5g(o),n,new A.f5h(o),n,n,new A.f5i(o)),D.t,n)],x.p)
o.a.toString
return C.mI(D.iL,C.aA(D.c7,new C.an(D.a0,n,D.b4,D.t,q,n),D.y,!1,n,l,k,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new A.f5j(o),new A.f5k(o),n,n,n,n,n,n,n,n,n,n,n,!1,D.a4),n,n,n,n,n,n,new A.f5l(o),n)}}
A.Qc.prototype={
t8(d,e,f){var w,v,u,t,s,r=this
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
A.cNW.prototype={}
A.aOn.prototype={
t(){var w=this,v=w.aa$
if(v!=null)v.a5(0,w.gbA())
w.aa$=null
w.a2()},
aY(){this.b5()
this.b4()
this.bB()}}
A.bcC.prototype={}
A.bcX.prototype={}
A.bi3.prototype={}
A.drJ.prototype={}
A.N_.prototype={
PK(d){return this.cqU(d)},
cqU(e3){var w=0,v=C.j(x.H),u=this,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1,e2
var $async$PK=C.e(function(e5,e6){if(e5===1)return C.f(e6,v)
for(;;)switch(w){case 0:if(e3.getUint32(0,!0)!==1179937895)throw C.W("not a glb file")
for(n=x.e,m=12,l=null,k=null;m+8<=e3.byteLength;){j=e3.getUint32(m,!0)
i=e3.getUint32(m+4,!0)
h=J.eC(D.dM.gaU(e3),e3.byteOffset+m+8,j)
if(i===1313821514)l=n.a(D.Y.aS(0,new C.GJ(!1).DV(h,0,null,!0),null))
if(i===5130562)k=h
m+=8+j}if(l==null||k==null)throw C.W("empty glb")
g=new A.dlS(l,k)
f=J.a7(l)
e=x.j
d=J.kM(e.a(f.h(l,"nodes")),n)
n=d.a
a0=J.a7(n)
a1=a0.gI(n)
a2=x.S
u.b=C.bZ(a1,-1,!1,a2)
a3=C.a([],x.s)
for(a4=d.$ti,a5=a4.k("bO<bY.E>"),a6=new C.bO(d,d.gI(0),a5),a7=a4.k("bY.E");a6.C();){a8=a6.d
a8=C.aT(J.t(a8==null?a7.a(a8):a8,"name"))
if(a8==null)a8=""
a3.push(a8.toLowerCase())}u.c=a3
u.d=D.d.bj(a3,new A.bUw())
a3=x.gL
a6=C.a([],a3)
for(a5=new C.bO(d,d.gI(0),a5),a8=x.bM,a9=x.t;a5.C();){b0=a5.d
if(b0==null)b0=a7.a(b0)
b1=C.a([],a9)
b0=a8.a(J.t(b0,"children"))
b0=J.aX(b0==null?D.cx:b0)
while(b0.C())b1.push(D.k.M(C.e0(b0.gR(b0))))
a6.push(b1)}u.f=a6
for(a5=u.b,b2=0;b2<a1;++b2)for(a7=a6[b2],b0=a7.length,b3=0;b3<b0;++b3)a5[a7[b3]]=b2
a5=C.a([],a9)
a6=e.a(f.h(l,"scenes"))
a7=C.aK(f.h(l,"scene"))
a7=a7==null?null:D.k.M(a7)
a6=J.aX(e.a(J.t(J.t(a6,a7==null?0:a7),"nodes")))
while(a6.C())a5.push(D.k.M(C.e0(a6.gR(a6))))
u.r=a5
a5=a1*3
u.w=new Float64Array(a5)
u.x=new Float64Array(a1*4)
u.y=new Float64Array(a5)
for(a5=x.di,a4=a4.y[1],b2=0;b2<a1;++b2){b4=a4.a(a0.h(n,b2))
a6=J.a7(b4)
a7=a8.a(a6.h(b4,"translation"))
b5=a7==null?null:J.kM(a7,a5)
if(b5==null)b5=H.asY
a7=a8.a(a6.h(b4,"rotation"))
b6=a7==null?null:J.kM(a7,a5)
if(b6==null)b6=B.c9k
a6=a8.a(a6.h(b4,"scale"))
b7=a6==null?null:J.kM(a6,a5)
if(b7==null)b7=B.cmm
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
n=J.aX(n==null?D.cx:n)
while(n.C()){b7=n.gR(n)
a0=C.a([],a9)
for(a3=J.a7(b7),a4=J.aX(e.a(a3.h(b7,"joints")));a4.C();)a0.push(D.k.M(C.e0(a4.gR(a4))))
u.Q.push(a0)
c1=a3.h(b7,"inverseBindMatrices")!=null?g.FN(D.k.M(C.e0(a3.h(b7,"inverseBindMatrices")))).a:null
a3=u.as
a3.push(c1==null?A.hMv(a0.length):c1)}n=a8.a(f.h(l,"animations"))
n=J.aX(n==null?D.cx:n)
a0=u.z
a3=x.G
a4=x.gR
while(n.C()){c2=n.gR(n)
c3=C.a([],a4)
a5=J.a7(c2)
c4=e.a(a5.h(c2,"samplers"))
for(a6=J.aX(e.a(a5.h(c2,"channels"))),a7=J.a7(c4),c5=0;a6.C();){c6=a6.gR(a6)
a9=J.a7(c6)
c7=a3.a(a9.h(c6,"target"))
b0=J.a7(c7)
b1=C.aK(b0.h(c7,"node"))
c8=b1==null?null:D.k.M(b1)
switch(b0.h(c7,"path")){case"translation":b0=0
break
case"rotation":b0=1
break
case"scale":b0=2
break
default:b0=-1
break}if(c8==null||b0<0)continue
b7=a3.a(a7.h(c4,D.k.M(C.e0(a9.h(c6,"sampler")))))
a9=J.a7(b7)
c9=g.FN(D.k.M(C.e0(a9.h(b7,"input")))).a
d0=g.FN(D.k.M(C.e0(a9.h(b7,"output")))).a
d1=a9.h(b7,"interpolation")
if(d1==null)d1="LINEAR"
d2=b0===1?4:3
a9=J.kZ(d1)
if(a9.A(d1,"CUBICSPLINE")){b1=c9.length
d3=new Float64Array(b1*d2)
for(b2=0;b2<b1;++b2)for(b9=b2*d2,c0=(b2*3+1)*d2,b8=0;b8<d2;++b8)d3[b9+b8]=d0[c0+b8]
d0=d3}if(!D.nL.gav(c9)){b1=c9.length
if(b1===0)C.bi(C.fp())
c5=Math.max(c5,c9[b1-1])}c3.push(new A.bcC(c8,b0,c9,d0,a9.A(d1,"STEP")))}d4=C.aT(a5.h(c2,"name"))
if(d4==null)d4="clip"+a0.a
a0.n(0,d4,new A.bcX(c5,c3))}t=C.U(a2,x.c9)
s=0
n=x.H
e="Could not read a picture of "+u.a+": "
case 2:a0=s
a2=a8.a(f.h(l,"images"))
a2=a2==null?null:J.ad(a2)
if(!(a0<(a2==null?0:a2))){w=3
break}r=g.cTT(s)
if(r==null){w=4
break}try{a0=r
d5=C.hcF(a0)
q=d5==null?null:d5.pX(0,a0,null)
if(q!=null){p=q.cMi(D.cb,4)
a0=s
a2=p.a
a2=a2==null?null:a2.a
if(a2==null)a2=0
a3=p.a
a3=a3==null?null:a3.b
if(a3==null)a3=0
d6=p
a4=d6.grg()
d7=4!==a4?d6.cMh(null,4):d6
a4=d7.a
a4=a4==null?null:a4.boD(d7!==d6,D.LT)
if(a4==null){a4=d6.a
a4=a4==null?null:J.eQ(a4.gaU(a4))
if(a4==null){a4=d6.a
a4=a4==null?null:a4.gaU(a4)
if(a4==null)a4=D.aH.gaU(new Uint8Array(0))
a4=J.eQ(a4)}}J.aJ(t,a0,new A.bi3(a2,a3,new Uint8Array(C.cb(a4))))}}catch(e4){o=C.ab(e4)
$.am.$1(e+C.w(o))}w=5
return C.b(C.bP(D.bD,null,n),$async$PK)
case 5:case 4:++s
w=2
break
case 3:d9=u.bUf(l,g,d,t)
w=6
return C.b(C.bP(D.bD,null,n),$async$PK)
case 6:u.at=u.ba4(d9,5000)
w=7
return C.b(C.bP(D.bD,null,n),$async$PK)
case 7:u.ax=u.ba4(d9,1800)
n=u.at
n.r=u.b5h(n)
n=u.ax
n.r=u.b5h(n)
e0=u.aAi(null,0)
e1=u.b89(u.at,e0)
for(n=e1.length,e2=1/0,s=1;s<n;s+=3)e2=Math.min(e2,e1[s])
u.ay=isFinite(e2)?e2:0
return C.h(null,v)}})
return C.i($async$PK,v)},
csi(d){var w,v,u
for(w=d;w>=0;){v=this.c
v===$&&C.c()
u=v[w]
if(!C.cS(u,"head",0))v=C.cS(u,"neck",0)
else v=!0
if(v)return 0
if(!C.cS(u,"leftshoulder",0))v=C.cS(u,"leftarm",0)
else v=!0
if(v)return 1
if(!C.cS(u,"rightshoulder",0))v=C.cS(u,"rightarm",0)
else v=!0
if(v)return 2
v=!0
if(!C.cS(u,"leftupleg",0))if(!C.cS(u,"leftleg",0))v=C.cS(u,"leftfoot",0)
if(v)return 3
v=!0
if(!C.cS(u,"rightupleg",0))if(!C.cS(u,"rightleg",0))v=C.cS(u,"rightfoot",0)
if(v)return 4
v=this.b
v===$&&C.c()
w=v[w]}return 5},
b5h(d){var w,v,u,t,s,r,q,p,o,n,m=d.a.length/3|0,l=new Uint8Array(m)
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
l[t]=o<n.length?this.csi(n[o]):5}return l},
bUf(e9,f0,f1,f2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1,e2=null,e3="POSITION",e4="JOINTS_0",e5="WEIGHTS_0",e6=J.a7(e9),e7=x.bM,e8=e7.a(e6.h(e9,"materials"))
if(e8==null)e8=D.cx
w=x.e
v=J.kM(e8,w)
e8=e7.a(e6.h(e9,"textures"))
u=J.kM(e8==null?D.cx:e8,w)
e8=x.j
t=J.kM(e8.a(e6.h(e9,"meshes")),w)
e6=x.n
s=C.a([],e6)
r=x.t
q=C.a([],r)
p=C.a([],e6)
o=C.a([],r)
n=C.a([],r)
m=C.a([],r)
for(e6=f1.a,r=J.a7(e6),l=t.a,k=J.a7(l),j=t.$ti.y[1],i=x.N,h=x.A,g=x.fF,f=x.di,e=x.G,d=v.a,a0=J.a7(d),a1=v.$ti.y[1],a2=u.a,a3=J.a7(a2),a4=u.$ti.y[1],a5=this.ch,a6=f1.$ti.y[1],a7=0;a7<r.gI(e6);++a7){a8=a6.a(r.h(e6,a7))
a9=J.a7(a8)
b0=C.aK(a9.h(a8,"mesh"))
b1=b0==null?e2:D.k.M(b0)
if(b1==null)continue
a9=C.aK(a9.h(a8,"skin"))
b2=a9==null?e2:D.k.M(a9)
for(a9=J.kM(e8.a(J.t(j.a(k.h(l,b1)),"primitives")),w),b0=a9.$ti,a9=new C.bO(a9,a9.gI(0),b0.k("bO<bY.E>")),b3=b2==null,b0=b0.k("bY.E");a9.C();){b4=a9.d
if(b4==null)b4=b0.a(b4)
b5=J.a7(b4)
b6=J.Bq(e.a(b5.h(b4,"attributes")),i,h)
if(b6.h(0,e3)==null||b5.h(b4,"indices")==null)continue
b7=f0.FN(D.k.M(C.e0(b6.h(0,e3)))).a
b8=b7.length/3|0
b9=b6.h(0,e4)!=null?f0.FN(D.k.M(C.e0(b6.h(0,e4)))).a:e2
c0=b6.h(0,e5)!=null?f0.FN(D.k.M(C.e0(b6.h(0,e5)))).a:e2
c1=C.aK(b5.h(b4,"material"))
c2=c1==null?e2:D.k.M(c1)
c1=g.a(J.t(c2!=null?a1.a(a0.h(d,c2)):D.cD,"pbrMetallicRoughness"))
c3=c1==null?e2:J.Bq(c1,i,h)
if(c3==null)c3=D.cD
c1=e7.a(c3.h(0,"baseColorFactor"))
c4=c1==null?e2:J.kM(c1,f)
if(c4==null)c4=B.cmn
c1=g.a(c3.h(0,"baseColorTexture"))
c5=c1==null?e2:J.Bq(c1,i,h)
c1=c5==null
c6=C.aK(c1?e2:c5.h(0,"texCoord"))
c7=c6==null?e2:D.k.M(c6)
c8=b6.h(0,"TEXCOORD_"+(c7==null?0:c7))
c9=c8!=null?f0.FN(D.k.M(C.e0(c8))).a:e2
if(!c1){c1=C.aK(J.t(a4.a(a3.h(a2,D.k.M(C.e0(c5.h(0,"index"))))),"source"))
d0=c1==null?e2:D.k.M(c1)
d1=d0!=null?f2.h(0,d0):e2}else d1=e2
d2=s.length/3|0
D.d.v(s,b7)
for(c1=c0!=null,c6=b9!=null,d3=0;d3<b8;++d3){o.push(b3?255:b2)
for(d4=d3*4,d5=0;d5<4;++d5){q.push(c6?D.k.M(b9[d4+d5]):0)
if(c1)d6=c0[d4+d5]
else d6=d5===0?1:0
p.push(d6)}}d7=f0.FN(D.k.M(C.e0(b5.h(b4,"indices")))).a
for(b4=d7.length,d8=0;b5=d8+2,b5<b4;d8+=3){d9=D.k.M(d7[d8])
e0=D.k.M(d7[d8+1])
e1=D.k.M(d7[b5])
n.push(d2+d9)
n.push(d2+e0)
n.push(d2+e1)
m.push(this.bSk(d1,c9,d9,e0,e1,c4))}if(b3)a5.push(new C.b5(d2,b8,a7))}}return new A.dxg(new Float64Array(C.cb(s)),new Uint16Array(C.cb(q)),new Float64Array(C.cb(p)),new Uint8Array(C.cb(o)),new Int32Array(C.cb(n)),new Int32Array(C.cb(m)))},
bSk(d,e,f,g,h,i){var w,v,u,t,s,r,q,p=J.a7(i),o=p.h(i,0),n=p.h(i,1),m=p.h(i,2)
if(d!=null&&e!=null){w={}
p=f*2
v=g*2
u=h*2
t=(e[p]+e[v]+e[u])/3
s=(e[p+1]+e[v+1]+e[u+1])/3
r=w.a=w.b=w.c=0
q=new A.bUq(w,d)
q.$2(t,s)
for(p=[f,g,h],v=p.length;r<v;++r){u=p[r]*2
q.$2((t+e[u])/2,(s+e[u+1])/2)}o*=w.c/4/255
n*=w.b/4/255
m*=w.a/4/255}p=new A.bUp()
return(p.$1(o)<<16|p.$1(n)<<8|p.$1(m)|4278190080)>>>0},
ba4(d7,d8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4={},d5=d7.a,d6=d5.length/3|0
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
f=new A.bUy(d4,d6,d7)
e=new A.bUA(d7)
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
D.jq.hy(b2,0,a5,-1)
b3=new Float64Array(a5)
D.nL.hy(b3,0,a5,1/0)
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
c4=A.hjs(c2,c3,b1)
c5=s[D.o.aq(c1,3)]
c6=b9.h(0,c4)
q=c5&255
if(c6==null){b9.n(0,c4,C.a([D.o.aJ(c5,16)&255,D.o.aJ(c5,8)&255,q,1],r))
c0.n(0,c4,b8.length/3|0)
b8.push(c2)
b8.push(c3)
b8.push(b1)}else{c6[0]=c6[0]+(D.o.aJ(c5,16)&255)
c6[1]=c6[1]+(D.o.aJ(c5,8)&255)
c6[2]=c6[2]+q
c6[3]=c6[3]+1}}u=b8.length
c7=new Int32Array(u/3|0)
b9.bO(0,new A.bUx(c7,c0))
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
d0[p]=s[d3]}d1[b1]=u[d2]}return new A.drJ(c8,c9,d0,d1,new Int32Array(C.cb(b8)),c7)},
aAi(a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=d.b
a0===$&&C.c()
w=d.w
w===$&&C.c()
v=new Float64Array(C.cb(w))
w=d.x
w===$&&C.c()
u=new Float64Array(C.cb(w))
w=d.y
w===$&&C.c()
t=new Float64Array(C.cb(w))
s=a1==null?null:d.z.h(0,a1)
if(s!=null&&s.b>0){w=s.b
r=a2-Math.floor(a2/w)*w
for(w=s.c,q=w.length,p=0;p<w.length;w.length===q||(0,C.J)(w),++p){o=w[p]
n=o.b
if(n===0)n=v
else n=n===1?u:t
A.hMw(o,r,n)}}m=d.CW.c3(0,"world",new A.bUu(a0.length))
l=new A.bUv(d,v,u,t,new Float64Array(16),m)
a0=d.r
a0===$&&C.c()
w=a0.length
p=0
for(;p<a0.length;a0.length===w||(0,C.J)(a0),++p)l.$1(a0[p])
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
A.hjt(m,w*16,q[h],f*16,j,i)
i+=16}}for(w=a0.length,p=0;p<a0.length;a0.length===w||(0,C.J)(a0),++p,i=e){e=i+16
D.nL.eo(j,i,e,m,a0[p].c*16)}return j},
b89(b8,b9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=b8.a,b4=b3.length/3|0,b5=new Float64Array(b4*3),b6=C.a([],x.t),b7=this.Q
b7===$&&C.c()
w=b7.length
v=0
u=0
for(;u<b7.length;b7.length===w||(0,C.J)(b7),++u){t=b7[u]
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
cLI(d,e){var w,v,u=new A.bUD(this)
if(d){w=u.$1("run")
v=w==null?u.$1("walk"):w}else if(e){w=u.$1("walk")
v=w}else{w=u.$1("idle")
if(w==null)w=u.$1("samba")
v=w}if(v!=null)return v
u=u.$1("samba")
if(u==null){u=this.z
u=new C.cx(u,C.a4(u).k("cx<1>")).dO(0,new A.bUB(),new A.bUC(this))}return u},
cZ0(b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=this,b4="world",b5={}
if(b6){w=b3.at
w===$&&C.c()
v=w}else{w=b3.ax
w===$&&C.c()
v=w}u=b3.cLI(c0,c5)
w=b3.z.h(0,u)
t=w==null?null:w.b
if(t==null)t=1
if(c5&&c4!=null&&D.a.q(u.toLowerCase(),"walk"))s=c4/50*t
else{w=B.dCK.h(0,b3.a)
s=c2*(w==null?1:w)}w=b3.e
r=w.h(0,u)
if(r==null){b3.aAi(u,0)
if(b3.d>=0){q=b3.CW
r=new C.y(q.h(0,b4)[b3.d*16+12],q.h(0,b4)[b3.d*16+14])}else r=D.Al
w.n(0,u,r)}p=b3.aAi(u,s)
b5.a=b5.b=0
if(b3.d>=0){w=b3.CW
b5.b=w.h(0,b4)[b3.d*16+12]-r.a
b5.a=w.h(0,b4)[b3.d*16+14]-r.b}o=b3.b89(v,p)
w=b3.a
q=B.dDk.h(0,w)
n=c7+(q==null?0:q)
m=C.im(v.a.length/3|0,new A.bUG(b5,b3,o,36,b8,Math.cos(n),Math.sin(n),c6,c8),!0,x.cv)
q=C.a([],x.t)
for(l=0;l<6;++l){k=$.dl+1
$.dl=k
q.push(k)}j=C.a([],x.z)
for(k=v.e,i=k.length,h=v.f,g=x.o,f=c3!=null,e=c1!=null,d=b9!=null,a0=0;a0<i;a0+=3){a1=m[k[a0]]
a2=m[k[a0+1]]
a3=m[k[a0+2]]
a4=a1.a
a5=a2.b
a6=a1.b
a7=a1.c
a8=a3.b
a9=new A.r(a2.a-a4,a5-a6,a2.c-a7).G9(new A.r(a3.a-a4,a8-a6,a3.c-a7)).gn0(0)
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
a5=b2==null?C.b0(h[D.o.aq(a0,3)]):A.icc(h[D.o.aq(a0,3)],b2)
j.push(new A.ks(a4,a9,a5,b7,0.08,1,!1,0,0,2,q[b0]))}if(e&&f&&w!=="michelle")D.d.v(j,b3.bSl(v,m,n,c1,b7,q[0]))
return j},
bSl(a6,a7,a8,a9,b0,b1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5={}
for(w=a6.a.length/3|0,v=a6.r,u=-1e9,t=1e9,s=0;s<w;++s){v===$&&C.c()
if(v[s]!==0)continue
r=a7[s].b
if(r>u)u=r
if(r<t)t=r}if(u<t)return B.v1
q=Math.cos(a8)
p=Math.sin(a8)
o=new A.r(p,0,q)
v=-p
n=Math.max(t,u-(u-t)*0.75)
for(m=a6.r,l=0,k=0,j=0,s=0;s<w;++s){m===$&&C.c()
if(m[s]!==0||a7[s].b<n)continue
i=a7[s]
l+=i.a
k+=i.c;++j}if(j===0)return B.v1
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
d=new A.bUr(a5,new A.r(m,(u+n)/2,i),o,new A.r(q,0,v),e,new A.r(0,1,0))
w=C.ar(a9,B.blX,0.88)
w.toString
v=C.ar(a9,D.w,0.25)
v.toString
m=C.ar(a9,B.bjJ,0.6)
m.toString
a0=C.a([],x.z)
a1=new A.bUt(a0,o,b0,b1)
a2=new A.bUs(a1,d)
for(a3=0;a3<2;++a3){a4=F.hg[a3]
i=a4*0.34
a2.$6(i,0.08,0.2,0.11,D.c,1.2)
a2.$6(i,0.08,0.085,0.085,w,1.6)
g=i-0.22
i+=0.22
f=0.04*a4
a1.$6(d.$2(g,0.33),d.$2(i,0.31+f),d.$2(i,0.25+f),d.$2(g,0.27),w,1.2)}a0.push(new A.ks(C.a([d.$2(0,0.12),d.$2(-0.1,-0.22),d.$2(0.1,-0.22)],x.o),o,v,b0,0,1,!1,0,1.2,2,b1))
a1.$6(d.$2(-0.2,-0.46),d.$2(0.2,-0.46),d.$2(0.17,-0.53),d.$2(-0.17,-0.53),m,1.2)
a1.$6(d.$2(-0.2,-0.46),d.$2(0.2,-0.46),d.$2(0.2,-0.485),d.$2(-0.2,-0.485),w,1.5)
return a0}}
A.dxg.prototype={}
A.dlS.prototype={
cTT(d){var w,v,u=this.a,t=J.a7(u),s=x.j,r=x.G,q=C.aK(J.t(r.a(J.t(s.a(t.h(u,"images")),d)),"bufferView")),p=q==null?null:D.k.M(q)
if(p==null)return null
w=r.a(J.t(s.a(t.h(u,"bufferViews")),p))
u=J.a7(w)
t=C.aK(u.h(w,"byteOffset"))
v=t==null?null:D.k.M(t)
if(v==null)v=0
return C.wI(this.b,v,v+D.k.M(C.e0(u.h(w,"byteLength"))))},
FN(a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h="byteOffset",g=this.a,f=J.a7(g),e=x.j,d=x.G,a0=d.a(J.t(e.a(f.h(g,"accessors")),a4)),a1=J.a7(a0),a2=D.k.M(C.e0(a1.h(a0,"count"))),a3=1
switch(a1.h(a0,"type")){case"SCALAR":break
case"VEC2":a3=2
break
case"VEC3":a3=3
break
case"VEC4":a3=4
break
case"MAT2":a3=4
break
case"MAT3":a3=9
break
case"MAT4":a3=16
break
default:break}w=D.k.M(C.e0(a1.h(a0,"componentType")))
A:{if(5120===w||5121===w){v=1
break A}if(5122===w||5123===w){v=2
break A}v=4
break A}u=J.z(a1.h(a0,"normalized"),!0)
t=new Float64Array(a2*a3)
s=C.aK(a1.h(a0,"bufferView"))
r=s==null?i:D.k.M(s)
if(r==null)return new C.y(t,a3)
q=d.a(J.t(e.a(f.h(g,"bufferViews")),r))
g=J.a7(q)
f=C.aK(g.h(q,h))
f=f==null?i:D.k.M(f)
if(f==null)f=0
a1=C.aK(a1.h(a0,h))
e=a1==null?i:D.k.M(a1)
p=f+(e==null?0:e)
g=C.aK(g.h(q,"byteStride"))
o=g==null?i:D.k.M(g)
if(o==null)o=a3*v
n=C.a49(this.b)
for(m=0;m<a2;++m)for(g=m*a3,f=p+m*o,l=0;l<a3;++l){k=f+l*v
switch(w){case 5120:j=n.getInt8(k)
if(u)j=Math.max(j/127,-1)
break
case 5121:j=n.getUint8(k)
if(u)j/=255
break
case 5122:j=n.getInt16(k,!0)
if(u)j=Math.max(j/32767,-1)
break
case 5123:j=n.getUint16(k,!0)
if(u)j/=65535
break
case 5125:j=n.getUint32(k,!0)
break
default:j=n.getFloat32(k,!0)}t[g+l]=j}return new C.y(t,a3)}}
A.lK.prototype={}
A.rh.prototype={
gDG(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=1e9,a1=-1e9,a2=this.w,a3=a2.length
if(a3===0){a2=this.e
return new C.cu([-a2/2,a2/2,-12,0])}for(w=this.e,v=-w,u=a1,t=a0,s=u,r=t,q=0;q<a3;++q){p=a2[q]
for(o=p.e,o=[v*o/2,w*o/2],n=o.length,m=p.c,l=p.a,k=p.b,j=0;j<n;++j){i=o[j]
for(h=[-12,0],g=h.length,f=0;f<g;++f){e=A.ti(new A.r(i,0,h[f]),m)
d=e.a+l
r=Math.min(r,d)
s=Math.max(s,d)
d=e.c+k
t=Math.min(t,d)
u=Math.max(u,d)}}}return new C.cu([r,s,t,u])},
gapU(){return this.gDG().a[1]-this.gDG().a[0]},
gH_(){var w=this.w
return w.length===0?this.f:new C.N(w,new A.bIA(this),C.T(w).k("N<1,H>")).f6(0,D.pX)},
gbfx(){return this.gDG().a[3]-this.gDG().a[2]},
ga4K(d){return this.w.length===0?0:(this.gDG().a[0]+this.gDG().a[1])/2},
ga4M(){return this.w.length===0?0:(this.gDG().a[2]+this.gDG().a[3])/2},
gdU(d){var w=this
return Math.max(Math.max(w.gapU(),w.gbfx()),Math.max(w.gH_()*1.3,w.x))*w.y}}
A.HK.prototype={}
A.aTB.prototype={
bkV(){var w=this
w.a=!0
w.b="NEW GLOBAL MOVEMENT FOR YOUTH"
w.c="Videos, slides, blogs and books."
w.d="ngmy.org"
w.e=0
w.x=w.w=w.r=w.f=null},
ak(){var w,v=this,u=C.U(x.N,x.A)
u.n(0,"custom",!v.a)
u.n(0,"headline",v.b)
u.n(0,"subtitle",v.c)
u.n(0,"footer",v.d)
u.n(0,"scheme",v.e)
w=v.f
if(w!=null)u.n(0,"logo",D.cO.gcu().aM(w))
w=v.r
if(w!=null)u.n(0,"pic",D.cO.gcu().aM(w))
return u},
Ub(d){var w,v=this,u=J.a7(d)
v.a=!J.z(u.h(d,"custom"),!0)
w=C.aT(u.h(d,"headline"))
v.b=w==null?"NEW GLOBAL MOVEMENT FOR YOUTH":w
w=C.aT(u.h(d,"subtitle"))
v.c=w==null?"Videos, slides, blogs and books.":w
w=C.aT(u.h(d,"footer"))
v.d=w==null?"ngmy.org":w
w=C.aK(u.h(d,"scheme"))
w=w==null?null:D.k.M(w)
v.e=D.o.F(w==null?0:w,0,5)
v.f=typeof u.h(d,"logo")=="string"?D.cG.aM(C.cO(u.h(d,"logo"))):null
v.r=typeof u.h(d,"pic")=="string"?D.cG.aM(C.cO(u.h(d,"pic"))):null}}
A.bIy.prototype={
d_Q(){var w,v,u
for(w=this.b,v=w.length,u=0;u<w.length;w.length===v||(0,C.J)(w),++u)w[u].bkV()},
ak(){var w,v,u,t=this.a,s=C.a([],x.c7)
for(w=this.b,v=w.length,u=0;u<w.length;w.length===v||(0,C.J)(w),++u)s.push(w[u].ak())
return C.I(["template",t,"signs",s],x.N,x.A)},
Ub(d){var w,v,u,t,s,r,q
this.a=D.d.aX(B.a4e,new A.bIz(d))?C.cO(J.t(d,"template")):"highway"
w=J.t(d,"signs")
if(x.j.b(w)){v=J.a7(w)
u=x.G
t=this.b
s=x.N
r=x.A
q=0
for(;;){if(!(q<6&&q<v.gI(w)))break
if(u.b(v.h(w,q)))t[q].Ub(C.a3(u.a(v.h(w,q)),s,r));++q}}else this.b[0].Ub(d)}}
A.hj.prototype={}
A.ap7.prototype={
S(){var w=A.hIW()
$.vM()
return new A.ap8(w,new C.vj())}}
A.ap8.prototype={
geZ(){var w,v=this.e
if(v===$){w=new A.uE(0.5,0.25,420,B.h3b,$.aw())
w.e=30
w.f=5000
w.at=0.02
w.ax=1.4
w.pg(!0)
this.e!==$&&C.bE()
this.e=w
v=w}return v},
gayg(){var w=this.r
return w===$?this.r=new A.a5C(this.gc8H(),A2.C_):w},
gzQ(){return D.d.fl(B.a4e,new A.c4M(this))},
Z(){var w=this
w.a3()
w.f=A.hcg(w.gzQ(),w.d)
w.abM()
A.ho6().bJ(new A.c4K(w),x.P)
w.PO()},
t(){this.gayg().bQ(0)
var w=this.geZ()
w.T$=$.aw()
w.P$=0
this.a2()},
abM(){var w=this.gzQ(),v=this.geZ(),u=w.ga4K(0),t=w.gH_(),s=w.ga4M()
v.Hy(w.gdU(0)*1.9,0.22,new A.r(u,w.r+t/2,s),0.45)},
PO(){var w=0,v=C.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i
var $async$PO=C.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return C.b(C.az(),$async$PO)
case 7:q=e
p=C.aT(J.t(q.a,"ngmy_billboard_studio_v1"))
if(p==null){w=1
break}n=r.d
n.Ub(x.e.a(D.Y.aS(0,p,null)))
n=n.b,m=n.length,l=0
case 8:if(!(l<n.length)){w=10
break}o=n[l]
i=o
w=11
return C.b(A.agj(o.f),$async$PO)
case 11:i.w=e
i=o
w=12
return C.b(A.agj(o.r),$async$PO)
case 12:i.x=e
case 9:n.length===m||(0,C.J)(n),++l
w=8
break
case 10:if(r.c==null){w=1
break}r.m(new A.c4x(r))
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
return C.i($async$PO,v)},
J6(){var w=0,v=C.j(x.H),u=1,t=[],s=this,r,q,p
var $async$J6=C.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
w=6
return C.b(C.az(),$async$J6)
case 6:r=e
w=7
return C.b(r.aB("String","ngmy_billboard_studio_v1",D.Y.az(s.d.ak(),null)),$async$J6)
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
return C.i($async$J6,v)},
c8I(){var w,v,u,t,s,r,q,p=this
if(!(p.x>=0)||p.c==null)return
w=p.w.gf_()/1000
if(w>=30){p.aCz(!0)
return}v=A.idj(p.gzQ(),w)
u=v.b
t=u.aK(0,v.a)
s=Math.max(8,t.gqg())
r=p.geZ()
q=Math.atan2(t.a,-t.c)
r.Hy(s,Math.asin(D.k.F(-t.b/s,-1,1)),u,q)
p.m(new A.c4D(p,w))},
bsn(){var w,v=this
v.geZ().at=-1.4
w=v.w
w.jY(0)
w.fX(0)
v.m(new A.c4L(v))
v.gayg().fX(0)},
aCz(d){var w,v=this
v.gayg().bQ(0)
w=v.w
if(w.b==null)w.b=$.a9Y.$0()
v.geZ().at=0.02
v.m(new A.c4A(v,d))
v.abM()},
cBI(){return this.aCz(!1)},
cxD(d){var w=this
w.d.a=d
w.m(new A.c4z(w))
w.abM()
w.J6()},
ZW(d){this.d.b[d].a=!1
this.m(new A.c47())
this.J6()},
J5(d,e){return this.cnj(d,e)},
cnj(d,e){var w=0,v=C.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k
var $async$J5=C.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
m=e?400:900
w=7
return C.b(new C.hT().l7(85,m,D.eN),$async$J5)
case 7:q=g
if(q==null){w=1
break}w=8
return C.b(q.fp(),$async$J5)
case 8:p=g
w=9
return C.b(A.agj(p),$async$J5)
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
if(r.c!=null)r.m(new A.c4y(r))
w=6
break
case 3:w=2
break
case 6:case 1:return C.h(u,v)
case 2:return C.f(s.at(-1),v)}})
return C.i($async$J5,v)},
cDN(){var w=this.c
w.toString
C.bT(D.av,null,new A.c4C(this),w,!0,!0,!0,D.ke,!1,!1,x.H)},
bQB(){var w,v,u,t,s,r,q=this,p={}
p.a=0
w=q.d.b[0]
v=w.b
u=$.aw()
t=new C.au(new C.ba(v,D.b5,D.aP),u)
v=w.c
s=new C.au(new C.ba(v,D.b5,D.aP),u)
w=w.d
r=new C.au(new C.ba(w,D.b5,D.aP),u)
w=q.c
w.toString
C.bT(D.av,null,new A.c4v(p,q,new A.c4w(p,q,t,s,r),t,s,r),w,!0,!0,!0,D.ke,!1,!1,x.H)},
ayi(d,e,f,g){var w=null,v=g?f.j(0.3):D.w.j(0.6),u=C.n(20),t=C.L(f,D.r,1)
return C.aA(w,C.p(w,C.d(d,w,w,w,w,w,w,C.l(w,w,f,w,w,w,w,w,w,w,w,13,w,w,D.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),D.f,w,w,new C.o(v,w,t,u,w,w,D.n),w,w,w,w,D.iu,w,w,w),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,e,w,w,w,w,w,w,!1,D.a4)},
ayh(d,e,f){return this.ayi(d,e,f,!1)},
c8G(d,e,f){return this.ayi(d,e,D.aJ,f)},
B(d){var w,v,u,t,s,r=this,q=null,p=C.aG(d,q,x.w).w.r,o=r.f
o===$&&C.c()
w=x.p
o=C.a([C.bR(0,A.h8c(E.y8,r.geZ(),q,q,0,q,q,q,o,!0),0,0,0)],w)
if(!(r.x>=0))o.push(C.ap(q,C.A(C.a([C.aA(q,C.p(q,D.a39,D.f,q,q,new C.o(D.w.j(0.55),q,C.L(D.bV,D.r,1),q,q,q,D.a7),q,40,q,q,q,q,q,40),D.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new A.c4G(d),q,q,q,q,q,q,!1,D.a4),D.at,C.E(C.d("Billboard studio \xb7 "+r.gzQ().c,q,q,q,q,q,q,B.fm5,q,q,q),1)],w),D.m,q,D.e,D.i,0,q,q),q,q,8,8,p.b+8,q))
if(r.x>=0&&r.y)o.push(C.bR(0,C.aA(D.c7,q,D.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new A.c4H(r),q,q,q,q,q,q,!1,D.a4),0,0,0))
if(!(r.x>=0&&r.y)){v=C.a([],w)
if(r.z.length!==0&&!(r.x>=0)){u=D.e_.j(0.95)
t=C.n(12)
s=C.L(D.b9,D.r,1)
v.push(C.p(q,C.d(r.z,q,q,q,q,q,q,D.Vk,q,q,q),D.f,q,q,new C.o(u,q,s,t,q,q,D.n),q,q,q,D.cv,D.bU,q,q,q))}w=C.a([],w)
if(!(r.x>=0))w.push(r.ayh("\ud83e\udea7 Choose billboard",r.gcDM(),F.f0))
if(!(r.x>=0))w.push(r.ayh("\u270f\ufe0f Edit",r.gbQA(),D.b9))
if(r.x>=0)w.push(r.ayi("\u23f9 Stop the drone",r.gcBH(),D.c0,!0))
if(r.x>=0)w.push(r.ayh("\ud83d\udc41 Hide everything",new A.c4I(r),D.aO))
if(!(r.x>=0))w.push(r.c8G("\ud83c\udfac 30 second drone shot",r.gbsm(),!0))
v.push(C.bW(D.fM,w,D.br,q,8,8))
o.push(C.ap(p.d+12,C.x(v,D.m,q,D.e,D.O,0,D.p),q,q,10,10,q,q))}return C.c5(q,D.w,new C.an(D.a0,q,D.ac,D.t,o,q),q,!1,!1,q,q)}}
A.Ge.prototype={}
A.zq.prototype={}
A.xz.prototype={}
A.aUG.prototype={}
A.a4H.prototype={}
A.akK.prototype={}
A.bMX.prototype={
bAZ(d,e){var w,v,u,t,s,r,q,p=this,o=x._,n=C.a([],o)
for(w=p.a.x,v=w.length,u=0;u<w.length;w.length===v||(0,C.J)(w),++u){t=w[u]
s=t.b
if(s==="house2"||s==="bighouse")n.push(t)}p.b!==$&&C.aQ()
p.b=n
o=C.a([],o)
for(n=w.length,u=0;u<w.length;w.length===n||(0,C.J)(w),++u){t=w[u]
if(D.d.aX(B.RR,new A.bMZ(t)))o.push(t)}p.c!==$&&C.aQ()
p.c=o
for(o=p.f,r=0;r<5;++r){q=p.cqE()
n=B.dyE[r]
w=B.dmM[r]
o.push(new A.aUG(n,w,new A.tW(B.az2[r],B.ME,w,B.M0,B.ds1[r],!1,0,1),58+r*7.5,q.a,q.b,B.aBp))}p.V_(0)},
cqE(){var w,v=this.c
v===$&&C.c()
w=v.length
if(w===0)return B.eyy
return A.z_(v[this.d.aw(w)])},
cZc(d){var w,v,u,t,s,r,q,p=this,o=C.a([],x._),n=p.c
n===$&&C.c()
w=n.length
v=0
for(;v<n.length;n.length===w||(0,C.J)(n),++v){u=n[v]
t=u.b
if(t==="store"||t==="shop"||t==="gasstation")o.push(u)}if(o.length===0)return
D.d.aZ(o,new A.bN0(p,d))
for(n=p.e,s=0,v=0;v<2;++v){r=B.dqq[v]
q=o[D.o.E(s,o.length)];++s;++p.r
w=new A.xz(r,q,d,r==="medicine"?30:24)
w.w=!0
D.d.c4(n,0,w)}},
V_(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=j.d,h=j.e,g=x._,f=C.T(h).k("X<1>"),e=0
for(;;){if(new C.X(h,new A.bN1(),f).gI(0)<7){w=e+1
v=e<30
e=w}else v=!1
if(!v)break
u=B.RR[i.aw(5)]
v=C.a([],g)
t=j.c
t===$&&C.c()
s=t.length
r=u.d
q=0
for(;q<t.length;t.length===s||(0,C.J)(t),++q){p=t[q]
if(r.q(0,p.b))v.push(p)}t=v.length
if(t!==0){s=j.b
s===$&&C.c()
s=s.length===0}else s=!0
if(s)return
o=v[i.aw(t)]
v=j.b
v===$&&C.c()
n=v[i.aw(v.length)]
m=A.z_(o)
l=A.z_(n)
k=Math.sqrt(Math.pow(m.a-l.a,2)+Math.pow(m.b-l.b,2));++j.r
h.push(new A.xz(u.a,o,n,6+D.o.F(D.k.V(k/70),0,22)))}},
d0m(d,e,f){if(this.x!=null||e.f!=null||!D.d.q(this.e,e))return!1
e.f=-1
e.x=f
this.x=e
return!0},
a1(d){var w=this.x
if(w==null)return
w.f=null
w.r=!1
this.x=null},
ga7b(d){var w=this.x
if(w==null)return null
return A.z_(w.r?w.d:w.c)},
blS(d,e,f){var w,v,u,t,s,r,q,p=this,o=p.x
if(o==null)return null
if(f-o.x>360){p.a1(0)
return B.bxk}w=p.ga7b(0)
if(Math.sqrt(Math.pow(w.a-d,2)+Math.pow(w.b-e,2))>58)return null
if(!o.r){o.r=!0
v=o.b
u=A.Lv(v)
v=A.Lv(v)
t=B.hJ.h(0,o.c.b).a
s=o.w?"hospital":"house"
return new A.akK("pickup",u.b+" You picked up the "+v.c.toLowerCase()+" at the "+t.toLowerCase()+". Now take it to the "+s+".",0)}D.d.W(p.e,o)
p.x=null;++p.z;++p.y
v=p.Q
u=o.e
p.Q=v+u
p.V_(f)
r=A.Lv(o.b).b+" Delivered! +"+u+" points."
if(p.y>=8){p.Q+=40
r+=" You won the race with 8 deliveries: +40 points!"
p.b_c()
q=40}else q=0
v=q>0?"won":"delivered"
return new A.akK(v,r,u+q)},
b_c(){var w,v,u;++this.as
this.y=0
for(w=this.f,v=w.length,u=0;u<v;++u)w[u].r=0},
FT(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
for(w=j.f,v=w.length,u=j.e,t=e+2,s=j.d,r=x.C,q=null,p=0;p<w.length;w.length===v||(0,C.J)(w),++p){o=w[p]
n=o.ch
if(n===0){if(e<o.CW)continue
n=C.a([],r)
for(m=u.length,l=0;l<u.length;u.length===m||(0,C.J)(u),++l){k=u[l]
if(k.f==null)n.push(k)}if(n.length===0)continue
D.d.aZ(n,new A.bMY(j,o))
k=n[Math.min(n.length-1,s.aw(3))]
k.f=D.d.cp(w,o)
o.y=k
j.b8H(o,e,1,k.c)}else if(e>=o.Q){if(!o.db){o.e=o.ax
o.f=o.ay
o.db=!0
o.dx=e+(n===1?1.6:1.3)
continue}if(e<o.dx)continue
o.db=!1
m=o.y
m.toString
if(n===1)j.b8H(o,e,2,m.d)
else{D.d.W(u,m)
o.y=null
o.ch=0;++o.w;++o.r
o.x=o.x+m.e
o.CW=t+s.aj()*5
j.V_(e)
if(o.r>=8){q=o.a+" won the race with 8 deliveries! A new round starts."
j.b_c()}}}}return q},
b01(d,e){return Math.sqrt(Math.pow(e.a-d.e,2)+Math.pow(e.b-d.f,2))},
b8H(d,e,f,g){var w,v,u,t=this,s=A.z_(g),r=B.hJ.h(0,g.b),q=g.e*3.141592653589793/2,p=r.d/2-2,o=g.c+Math.sin(q)*p,n=g.d+Math.cos(q)*p
d.ch=f
d.ax=o
d.ay=n
w=t.w
if(w===$){v=new A.bL4(t.a)
v.b02()
t.w!==$&&C.bE()
t.w=v
w=v}u=C.C(w.apz(new C.y(d.e,d.f),s),x.a6)
u.push(new C.y(o,n))
d.cx=u
o=A.inU(u)
d.cy=o
d.z=e
d.Q=e+Math.max(1,o/d.d)},
amX(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=C.a([],x.I)
for(w=this.f,v=w.length,u=d*2.2,t=0;t<w.length;w.length===v||(0,C.J)(w),++t){s=w[t]
r=s.e
q=s.f
if(s.db)continue
if(s.ch!==0&&d>=s.z&&s.cx.length>1){p=s.z
o=D.k.F((d-p)/Math.max(0.01,s.Q-p),0,1)
n=A.io_(s.cx,s.cy*o)
r=n.a
q=n.b
m=n.c
l=o<1}else{m=0
l=!1}k.push(new A.a4H(r,q,m,u+s.d,l,s.ch===2,s.c,s.b))}return k},
d0k(){var w,v,u,t,s=C.a([new C.b5("You",this.y,this.Q)],x.aJ)
for(w=this.f,v=w.length,u=0;u<w.length;w.length===v||(0,C.J)(w),++u){t=w[u]
s.push(new C.b5(t.a,t.r,t.x))}D.d.aZ(s,new A.bN2())
return s},
rh(d,e,f){var w,v,u,t,s=C.a([],x.C)
for(w=this.e,v=w.length,u=0;u<w.length;w.length===v||(0,C.J)(w),++u){t=w[u]
if(t.f==null)s.push(t)}D.d.aZ(s,new A.bN_(this,e,f))
return s},
aaJ(d,e,f){return Math.sqrt(Math.pow(f.a-d,2)+Math.pow(f.b-e,2))}}
A.bL4.prototype={
b05(d){return-this.a.geb(0)/2+8+d*24},
b02(){var w,v,u,t,s=this,r=s.a
s.d=A.hC9(r,null)
s.b=D.k.cL((r.geb(0)-16)/24)+1
w=D.k.cL((r.gh3(0)-10- -750)/24)+1
s.c=w
s.e=C.bZ(s.b*w,!1,!1,x.y)
for(v=0;v<s.b;++v)for(w=v*24,u=0;t=s.c,u<t;++u)s.e[v*t+u]=s.acE(-r.geb(0)/2+8+w,-750+u*24)
s.f=A.hhY(r)},
acE(d,e){var w,v,u=this.a
if(d<-u.geb(0)/2+12||d>u.geb(0)/2-12||e<-756||e>u.gh3(0)-14)return!0
u=this.d
u===$&&C.c()
w=u.length
v=0
for(;v<w;++v)if(u[v].aHx(d,e,14))return!0
return!1},
b03(d,e,f){var w,v,u=e.a,t=f.a-u,s=e.b,r=f.b-s,q=Math.max(1,D.k.cL(Math.sqrt(Math.pow(t,2)+Math.pow(r,2))/8))
for(w=0;w<=q;++w){v=w/q
if(this.acE(u+t*v,s+r*v))return!1}return!0},
b04(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=d.a,h=j.a,g=D.k.V((i+h.geb(0)/2-8)/24),f=j.b
f===$&&C.c()
w=D.o.F(g,0,f-1)
f=d.b
g=D.k.V((f- -750)/24)
v=j.c
v===$&&C.c()
u=D.o.F(g,0,v-1)
for(t=0;t<24;++t){for(s=-t,r=s,q=null,p=1/0;r<=t;++r)for(o=w+r,g=Math.abs(r),n=s;n<=t;++n){if(Math.max(g,Math.abs(n))!==t)continue
m=u+n
v=!0
if(o>=0)if(m>=0)if(!(o>=j.b)){l=j.c
if(!(m>=l)){v=j.e
v===$&&C.c()
l=v[o*l+m]
v=l}}if(v)continue
k=Math.pow(-h.geb(0)/2+8+o*24-i,2)+Math.pow(-750+m*24-f,2)
if(k<p){q=new C.y(o,m)
p=k}}if(q!=null)return q}return null},
apz(d,e){var w,v,u,t,s,r,q,p,o,n,m=this
if(A.hhY(m.a)!==m.f)m.b02()
w=m.b04(d)
v=m.b04(e)
if(w==null||v==null)return C.a([d,e],x.f)
u=new C.y(m.b05(w.a),-750+w.b*24)
t=new C.y(m.b05(v.a),-750+v.b*24)
s=x.f
r=m.acE(d.a,d.b)?C.a([d],s):C.a([],s)
q=m.acE(e.a,e.b)?C.a([e],s):C.a([],s)
p=C.a([],s)
o=r.length===0?d:u
n=q.length===0?e:t
if(m.b03(0,o,n))D.d.v(p,C.a([o,n],s))
else D.d.v(p,m.cwr(w,v,o,n))
s=C.C(r,x.a6)
D.d.v(s,p)
D.d.v(s,q)
return s},
cwr(a9,b0,b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this,a3=x.t,a4=C.a([],a3),a5=new A.dmn(a4,C.a([],x.n)),a6=x.S,a7=C.U(a6,a6),a8=C.U(a6,x.i)
a6=a9.a
w=a2.c
w===$&&C.c()
v=a9.b
u=a6*w+v
t=b0.a
s=b0.b
r=t*w+s
a8.n(0,u,0)
a5.aoX(u,a2.c9c(a6,v,b0))
p=0
for(;;){if(a4.length!==0){o=p+1
a6=p<4e4
p=o}else a6=!1
if(!a6){q=!1
break}n=a5.eN()
if(n===r){q=!0
break}a6=a2.c
m=D.o.ec(n,a6)
l=D.o.E(n,a6)
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
a5.aoX(e,d+Math.sqrt(Math.pow(v,2)+Math.pow(h-s,2)))}}}if(!q)return C.a([b1,b2],x.f)
a0=C.a([r],a3)
while(a7.an(0,D.d.gam(a0))){a3=a7.h(0,D.d.gam(a0))
a3.toString
a0.push(a3)}a3=x.f
a4=C.a([b1],a3)
for(a6=x.c5,w=new C.du(a0,a6),w=new C.bO(w,w.gI(0),a6.k("bO<ak.E>")),v=a2.a,a6=a6.k("ak.E");w.C();){t=w.d
if(t==null)t=a6.a(t)
s=a2.c
g=D.o.ec(t,s)
a4.push(new C.y(-v.geb(0)/2+8+g*24,-750+D.o.E(t,s)*24))}a4.push(b2)
a1=C.a([D.d.gH(a4)],a3)
for(j=0;h=a4.length-1,j<h;j=h){a3=j+1
for(;;){if(!(h>a3&&!a2.b03(0,a4[j],a4[h])))break;--h}a1.push(a4[h])}return a1},
c9c(d,e,f){return Math.sqrt(Math.pow(d-f.a,2)+Math.pow(e-f.b,2))}}
A.dmn.prototype={
gcm(d){return this.a.length!==0},
aoX(d,e){var w,v,u,t=this.a
t.push(d)
w=this.b
w.push(e)
v=t.length-1
for(;v>0;v=u){u=D.o.aq(v-1,2)
if(w[u]<=w[v])break
this.b9n(v,u)}},
eN(){var w,v,u,t,s,r=this.a,q=D.d.gH(r),p=r.pop(),o=this.b,n=o.pop()
if(r.length!==0){r[0]=p
o[0]=n
for(w=0;;w=s){v=2*w+1
u=v+1
t=r.length
s=v<t&&o[v]<o[w]?v:w
if(u<t&&o[u]<o[s])s=u
if(s===w)break
this.b9n(w,s)}}return q},
b9n(d,e){var w,v=this.a,u=v[d]
v[d]=v[e]
v[e]=u
v=this.b
w=v[d]
v[d]=v[e]
v[e]=w}}
A.aU3.prototype={
bli(d,e,f){var w,v,u,t,s=this,r=null,q=s.d
if(q>0){q-=d
s.d=q
if(q<=0){s.d=0
s.c=180
s.r+=5
w="You did not reach a shop in time: you lost 5 stars. You must rest for three minutes, or eat something."}else w=r
s.b0()
return w}q=s.c
if(q>0){q-=d
s.c=q
if(q<=0){s.c=0
s.a=0.5
w="You have rested. Your energy is back to half. Find some food in a shop to keep going."}else w=r
s.b0()
return w}if(f){v=s.a
u=s.e
q=D.k.F(u-d/120,0,1)
s.e=q
q=q<=0?1.8:1
t=s.f?1.5:1
t=s.a=D.k.F(s.a-d*(q*t)/120,0,1)
if(t<=0){s.d=20
w="You have no energy left: you crawl on the ground. Get to a shop and buy food within 20 seconds, or you lose 5 stars."}else if(v>=0.25&&t<0.25)w="You are getting tired. Find a shop and buy some food."
else w=u>=0.3&&s.e<0.3?"You are thirsty. Buy some water or juice at a shop, or you will tire much faster.":r
s.b0()}else w=r
if(e){v=s.b
q=s.b=D.k.F(v-d/120,0,1)
if(q<=0&&v>0)w="The car is out of gas. Get to a gas station (walk, then buy gas) to carry on."
else if(v>=0.25&&q<0.25)w="The gas is low. Drive to a gas station."
s.b0()}return w},
a7d(d){return this.bli(d,!1,!1)}}
A.aZo.prototype={
B(d){var w,v,u,t,s,r=null,q=D.k.F(this.c,0,1)
if(q>0.5)w=D.bg
else w=q>0.25?D.bs:D.ax
v=C.a([],x.p)
u=this.d
v.push(new C.D(D.qt,C.d(this.e,r,r,r,r,r,r,C.l(r,r,r,r,r,r,r,r,r,r,r,u,r,r,r,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),r))
t=C.n(u/3)
s=C.L(D.ad,D.r,1.5)
v.push(C.E(C.p(r,new C.bL(D.a6,r,r,C.BN(D.A,C.c3(r,new C.o(w,r,r,C.n(u/4),r,r,D.n),D.bi),1,q),r),D.f,r,r,new C.o(D.aT,r,s,t,r,r,D.n),r,u,r,r,D.nA,r,r,r),1))
v.push(C.p(r,r,D.f,r,r,new C.o(D.ad,r,r,C.n(1),r,r,D.n),r,u*0.45,r,B.bDE,r,r,r,3))
return C.A(v,D.m,r,D.e,D.O,0,r,r)}}
A.V3.prototype={
B(d){return new C.wb(new A.c2n(this),null,this.c,null)}}
A.rY.prototype={}
A.SZ.prototype={
gI(d){return this.a==="bus"?120:95.94999999999999}}
A.aU2.prototype={}
A.bxV.prototype={
bC7(d,e,f,g){var w,v,u,t,s,r,q,p,o,n,m
for(w=this.e,v=this.f,u=0;u<4;++u){t=B.kx[u]
s=A.fsm(t).a[1]
r=new A.fkZ(this,t)
q=0
for(;;){if(!(r.$1(q)&&q<s))break;++q}for(p=-1,o=0,n=0;n<s;++n){m=D.o.E(q+n,s)
if(r.$1(m)){if(p<0)p=m;++o}else if(p>=0)break}w.push(p)
v.push(o)}}}
A.bL6.prototype={
jY(d){var w,v,u,t
for(w=this.a,v=this.b,u=0;u<4;++u){w[u]=B.kx[u].r
v[u]=0}t=this.c=0
for(w=$.h35();t<2;++t)w[t].r=-1},
FT(d,e){var w,v,u,t=this
if(e<t.c-0.0001)t.jY(0)
w=t.c
if(e-w>90){w=e-2
t.c=w}for(v=e-1e-9;w<v;){u=Math.min(0.05,e-w)
t.cBx(u)
w=t.c+=u}},
cBx(b8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7=this
for(w=$.h35(),v=b7.a,u=0;u<2;++u){t=w[u]
s=t.r
if(s<0)continue
r=A.fsm(B.kx[s]).a[1]
q=D.k.E(v[s]-t.e[s],r)
if(q<0)q+=r
if(q>=t.f[s]&&q<r/2)t.r=-1}for(w=b7.b,p=110*b8,o=40*b8,n=0;n<4;++n){m=B.kx[n]
r=A.fsm(m).a[1]
l=m.a==="bus"
k=(l?120:95.94999999999999)/2
j=new A.bL7()
for(i=34,h=0;h<4;++h){if(h===n||D.o.aq(n,2)!==D.o.aq(h,2))continue
g=D.k.E(v[h]-v[n],r)
if(g<0)g+=r
g-=k+(B.kx[h].a==="bus"?120:95.94999999999999)/2
if(g<400)i=Math.min(i,C.je(j.$1(g-18)))}for(f=$.bGk(),e=f.length,d=r-30,u=0;u<f.length;f.length===e||(0,C.J)(f),++u){a0=f[u]
if(a0.a!==D.o.aq(n,2))continue
a1=A.hcV(a0,b7.c)
if(a1===0)continue
a2=D.k.E(a0.b-(v[n]+k),r)
if(a2<0)a2+=r
if(a2>d)continue
if(a2<260)a3=!(a1===1&&a2<w[n]*1.2)
else a3=!1
if(a3)i=Math.min(i,C.je(j.$1(a2-4)))}for(f=$.h35(),u=0;u<2;++u){t=f[u]
a4=t.e[n]
if(a4<0)continue
e=v[n]
a2=D.k.E(a4-e,r)
if(a2<0)a2+=r
if(D.k.E(e-a4,r)<t.f[n]){if(t.r<0)t.r=n
continue}if(t.r===n)continue
e=w[n]
for(d=$.bGk(),a3=d.length,a5=b7.c,a6=!1,a7=0;a7<a3;++a7){a0=d[a7]
if(a0.a!==D.o.aq(n,2)||A.hcV(a0,a5)===0)continue
a8=D.k.E(a0.b-(v[n]+k),r)
if((a8<0?a8+r:a8)<a2)a6=!0}if(t.r<0&&a2<40+e*e/220+20&&!a6){t.r=n
continue}if(a2<400)i=Math.min(i,C.je(j.$1(a2-10)))}f=A.Lz(m,v[n]).a
a9=f[0]
b0=f[1]
b1=f[2]
b2=f[3]
for(f=b7.d,e=f.length,d=k-5,a3=k+110,u=0;u<f.length;f.length===e||(0,C.J)(f),++u){a5=f[u]
b3=a5.a-a9
b4=a5.b-b0
b5=b3*b1+b4*b2
a5=!1
if(b5>d)if(b5<a3){a5=l?33.54:31.45
a5=Math.abs(-b3*b2+b4*b1)<a5/2+16}if(a5)i=Math.min(i,C.je(j.$1(b5-k-10)))}b6=w[n]
l=b6<i?Math.min(i,b6+o):Math.max(i,b6-p)
w[n]=l
if(l<0){w[n]=0
l=0}v[n]=v[n]+l*b8}},
cZ5(d,e,f){this.FT(0,f)
return A.Lz(B.kx[e],this.a[e])},
cTL(d,e){var w,v,u,t,s,r,q,p,o,n,m,l
for(w=this.a,v=this.b,u=0;u<4;++u){if(v[u]<4)continue
t=B.kx[u]
s=A.Lz(t,w[u]).a
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
A.Ax.prototype={
ga8I(){var w=this.d,v=w.e*3.141592653589793/2,u=Math.sin(v),t=Math.cos(v),s=this.r-1
return new C.y(w.c+u*42-t*s*24,w.d+t*42+u*s*24)}}
A.cCT.prototype={
bBV(d,e){var w,v,u,t,s=this,r=x._,q=C.a([],r)
for(w=s.a.x,v=w.length,u=0;u<w.length;w.length===v||(0,C.J)(w),++u){t=w[u]
if(t.b==="ubstation")q.push(t)}s.c!==$&&C.aQ()
s.c=q
r=C.a([],r)
for(q=w.length,u=0;u<w.length;w.length===q||(0,C.J)(w),++u){t=w[u]
v=t.b
if(v==="house2"||v==="bighouse")r.push(t)}s.d!==$&&C.aQ()
s.d=r
s.V_(0)},
V_(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.d
f===$&&C.c()
if(f.length===0)return
w=g.c
w===$&&C.c()
v=w.length
u=g.b
t=g.e
s=C.T(t)
r=s.k("X<1>")
s=s.k("cM<1,F>")
q=s.k("M.E")
p=0
for(;p<w.length;w.length===v||(0,C.J)(w),++p){o=w[p]
n=C.q2(q)
n.v(0,new C.cM(new C.X(t,new A.cCV(o),r),new A.cCW(),s))
for(m=0;m<3;++m){if(n.q(0,m))continue
l=g.f
k=l==null
if((k?null:l.d)===o)l=(k?null:l.r)===m
else l=!1
if(l)continue
l=g.x++
j=f[u.aw(f.length)]
i=A.z_(j)
h=Math.sqrt(Math.pow(o.c-i.a,2)+Math.pow(o.d-i.b,2))
l=new A.Ax(l,B.dnh[u.aw(12)],new A.tW(B.az2[u.aw(5)],B.ME,B.dvn[u.aw(6)],D.aL,"human",!1,0,1),o,j,6+D.o.F(D.k.V(h/45),0,30),m)
l.x=d
t.push(l)}}},
arg(d,e){var w,v,u,t=this.c
t===$&&C.c()
w=t.length
v=0
for(;v<t.length;t.length===w||(0,C.J)(t),++v){u=t[v]
if(Math.sqrt(Math.pow(u.c-d,2)+Math.pow(u.d-e,2))<150)return u}return null},
cYR(d,e){var w,v,u,t,s,r,q=this
if(q.f!=null)return null
w=q.arg(d,e)
if(w==null)return null
v=C.a([],x.bz)
for(u=q.e,t=u.length,s=0;s<u.length;u.length===t||(0,C.J)(u),++s){r=u[s]
if(r.d===w)v.push(r)}if(v.length===0)return null
D.d.aZ(v,new A.cCU())
r=D.d.gH(v)
D.d.W(u,r)
return q.f=r},
ga7b(d){var w=this.f
return w==null?null:A.z_(w.e)},
cQE(d,e,f){var w,v,u=this,t=u.f,s=u.ga7b(0)
if(t==null||s==null)return 0
if(Math.sqrt(Math.pow(s.a-d,2)+Math.pow(s.b-e,2))>70)return 0
u.f=null;++u.r
w=u.w
v=t.f
u.w=w+v
u.y=f+4
u.V_(f)
return v},
amX(d){var w,v,u,t,s,r,q,p
if(d<this.y)return B.Iy
w=C.a([],x.I)
for(v=this.e,u=v.length,t=d*1.4,s=0;s<v.length;v.length===u||(0,C.J)(v),++s){r=v[s]
q=r.d
p=r.c
w.push(new A.a4H(r.ga8I().a,r.ga8I().b,Math.atan2(q.c-r.ga8I().a,q.d-r.ga8I().b)+3.141592653589793,t+r.a,!1,!1,p,p.c))}return w}}
A.pK.prototype={}
A.bKQ.prototype={
gMg(){var w,v=this,u=v.r
if(u===$){w=A.hDc(v.b)
v.r!==$&&C.bE()
v.r=w
u=w}return u},
cek(){switch(this.a){case"hospital":var w=B.cAE
break
case"dmv":w=B.dvJ
break
case"shop":w=B.d02
break
case"school":w=B.d9w
break
case"firestation":w=B.doW
break
case"tower":w=B.dj_
break
default:w=B.dtI
break}return w},
cJs(){switch(this.a){case"hospital":var w=B.cAA
break
case"dmv":w=B.dbu
break
case"shop":w=B.d61
break
case"school":w=B.diK
break
case"firestation":w=B.dfJ
break
case"tower":w=B.dyb
break
default:w=B.d_w
break}return w},
fH(d,e){var w,v,u,t,s,r,q,p=this,o=p.ax
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
if(!v.J(0,q))continue
t=p.c9O(q,e)}if(t!=null)p.B(e)
return t},
c9O(d,e){var w,v,u,t,s,r=this,q="The city is still loading.",p="The breaker panel on level "
switch(r.a){case"hospital":if(e==null)return q
if(d===0){w=e.gCo()
v=C.T(w).k("X<1>")
u=C.C(new C.X(w,new A.bKR(),v),v.k("M.E"))
if(u.length===0)return"The desk: nobody needs the hospital right now. "+e.x+" doses of medicine in stock."
return e.aEi(D.d.gH(u))}t=d-1
if(e.e[t].a<0)return"This bed is empty. Admit someone at the desk first."
return e.blv(t)
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
return"You taught the class a lesson. +3 points. "+B.a4W[D.o.E(w==null?0:w,5)]}w=e==null?null:e.r
return"The library: "+B.a4W[D.o.E(w==null?1:w,5)]
case"firestation":if(d===0){if(e!=null)e.r+=2
return"You checked the equipment with the firefighters. +2 points. Keep the extinguishers charged."}w=e==null?null:e.r
return"Fire drill: "+B.a4W[D.o.E((w==null?0:w)+1,5)]
case"tower":if(d===0){r.w=!0
return"The elevator: choose your level (you are on level "+r.f+" of "+r.gMg()+")."}if(d===2){r.x=!0
return"The balcony on level "+r.f+": the whole town is below you."}if(r.c){r.cy=!0
return p+r.f+". This office has no power. Let us find the wiring fault."}return p+r.f+": every breaker is on and the office has power."
default:if(d===0){if(r.c){r.cy=!0
return"The breaker panel. This house has no power. Let us find the wiring fault."}return"The breaker panel: every breaker is on and the house has power."}return r.c?"The outlet is dead: there is no power in this house.":"The outlet works. Everything here is wired right."}},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this
g.ch=d
w=g.a
if(w==="cabin"){g.bGI()
return}v=C.a([],x.z)
u=new A.eM(v)
t=C.a([],x.E)
switch(w){case"hospital":s=B.eJH
break
case"shop":s=B.eDv
break
case"dmv":s=B.eFT
break
case"school":s=B.eX7
break
case"firestation":s=B.eKI
break
case"tower":s=new C.y(g.c?B.ah3:B.ajQ,B.Yv)
break
default:s=new C.y(g.c?B.ah3:B.bsc,B.iC)
break}r=s.a
u.f=-1
u.kZ(B.hf1,B.hcP,s.b,0.2,3)
u.f=0
u.x=$.dl=$.dl+1
u.hl(B.hbV,B.aYT,r,3)
u.x=0
u.x=$.dl=$.dl+1
u.hl(B.has,B.abX,r,3)
u.x=0
s=w==="tower"
if(s){u.f=3
u.d=0.18
u.aF(B.aZ6,B.abX,B.ZP)
u.d=1
u.f=0}else{u.x=$.dl=$.dl+1
u.hl(B.aZ6,B.abX,r,3)
u.x=0}u.f=0
q=s&&g.f>1
p=$.dl+1
if(q){u.x=$.dl=p
u.hl(B.hd6,B.aYT,r,3)
u.x=0}else{u.x=$.dl=p
u.hl(new A.r(-94,70,320.6),new A.r(113.2,140,1.2),r,2)
u.x=0
u.x=$.dl=$.dl+1
u.hl(new A.r(94,70,320.6),new A.r(113.2,140,1.2),r,2)
u.x=0
u.x=$.dl=$.dl+1
u.aF(new A.r(0,102,320.6),new A.r(76,76,1.2),r)
u.x=0
u.x=$.dl=$.dl+1
u.aD(B.hgb,B.hmb,B.beD,0.5)
u.x=0}u.f=1
for(o=0;o<3;++o){n=B.dpD[o]
u.aF(new A.r(n,78,0.6),B.hlH,B.kN)
u.aD(new A.r(n,78,0.8),B.haS,B.i6,0.6)}for(q=!s,o=0;o<2;++o){m=B.cI_[o]
u.aF(new A.r(-149.6,78,m),B.aYJ,B.kN)
u.aD(new A.r(-149.2,78,m),B.aZt,B.i6,0.6)
if(q){u.aF(new A.r(149.6,78,m),B.aYJ,B.kN)
u.aD(new A.r(149.2,78,m),B.aZt,B.i6,0.6)}}u.aF(B.hgi,B.hm9,B.kN)
u.aF(B.hgv,B.h83,D.bP)
u.f=2
u.r=!0
for(q=w!=="house2",p=w==="bighouse",o=0;o<3;++o){n=B.dq6[o]
for(l=0;l<2;++l){m=B.cI0[l]
u.dq(new A.r(n,138,m),new A.r(n,122,m),0.5,D.iG,4)
k=(!q||p||s)&&g.c?D.hp:B.nl
u.ee(new A.r(n,120,m),5,k,3,6)}}switch(w){case"hospital":g.c1g(u,t,d)
break
case"shop":g.cyf(u,t)
break
case"dmv":g.bPm(u,t)
break
case"school":g.cvX(u,t)
break
case"firestation":g.cBt(u,t)
break
case"tower":g.cFF(u,t)
break
default:u.f=1
u.aF(B.hny,B.hi0,g.c?B.qk:B.aht)
u.f=2
u.aD(B.hky,B.h5i,B.Z_,0.1)
u.aD(B.hkz,B.h5j,B.Mn,0.1)
u.aD(B.h4W,B.ha9,B.o2,0.2)
u.aD(B.hc9,B.hn7,E.y5,0.4)
u.aF(B.h5L,B.h6q,B.aih)
u.ee(B.hk0,10,B.Ft,3,6)
g.bcd(u,t)}u.f=1
if(s&&g.f>1)t.push(B.c43)
else{u.aF(B.hgP,B.hdL,D.cV)
t.push(B.c42)}if(d!=null){w=d.r
k=d.w
j=d.x
i=g.cx!=null?"   \ud83d\udce6 carrying":""
t.push(new A.hd(B.h3e,"\u2b50 "+w+"   \ud83c\udf5e "+k+"   \ud83d\udc8a "+j+i,D.R,0))}h=C.a([],x.a)
if(s){u.f=2
u.e=0
u.aD(B.h5d,B.aYO,D.av,0.3)
u.aD(B.hcf,B.aYO,D.av,0.3)
u.aD(B.hgF,B.hlK,D.av,0.3)
w=x.o
h.push(new A.fh(C.a([B.hbH,B.hh9,B.hfY,B.hjk],w),0,new A.bL_(g),960,560,60,2,0,!1))
h.push(new A.fh(C.a([B.h8C,B.hnG,B.h7w,B.hlF],w),0,new A.bL0(g),960,560,60,2,0,!1))
h.push(new A.fh(C.a([B.hlp,B.h2S,B.haY,B.hdY],w),0,new A.bL1(g),960,560,60,2,0,!1))}if((!q||p)&&!g.c)h.push(new A.fh(C.a([B.hhL,B.hd2,B.hg3,B.hfX],x.o),0,new A.bL2(g),960,480,60,2,0,!1))
g.ay=new A.qU(v,B.SY,t,h,null,!1,0)},
rN(d,e,f,g,h){var w=d.f
d.f=1
d.dq(new A.r(e,0.2,f),new A.r(e,0.6,f),g,h,20)
d.f=w},
c1g(d,e,f){var w,v,u,t,s,r,q,p,o
d.f=1
d.aF(B.aXC,B.h8h,D.bC)
d.aF(B.aXC,B.h5t,D.bC)
d.f=2
d.aD(B.hl_,B.hbq,B.o2,0.15)
d.aD(B.hl0,B.hbM,D.bO,0.3)
d.aF(B.hjY,B.hao,D.aJ)
this.rN(d,-80,66,22,D.cq)
e.push(B.c49)
e.push(B.c3Z)
for(w=0;w<2;++w)d.aF(new A.r(-105,8,B.cit[w]),B.h9K,D.bu)
d.ee(B.h5S,9,B.Ft,3,6)
for(v=f!=null,u=0;u<3;++u){t=48+u*50
d.aF(new A.r(76,8,t),B.hbn,D.cr)
d.aF(new A.r(76,14,t),B.hbh,D.aQ)
d.aF(new A.r(108,18,t),B.h5Q,D.c)
s=v&&u<f.e.length?f.e[u]:null
if(s!=null&&s.a>=0){r=f.c
r===$&&C.c()
q=r[s.a]
r=s.b>70?D.b9:D.c0
d.aF(new A.r(54,24,t),B.h8k,r)
r=s.b>70
p=r?"cared for":"needs treatment"
r=r?D.en:D.bC
e.push(new A.hd(new A.r(76,40,t),q.a.b+"  "+p,r,0))}else e.push(new A.hd(new A.r(76,30,t),"Free bed "+(u+1),D.bu,0))
r=t-2
o=d.f
d.f=1
d.dq(new A.r(20,0.2,r),new A.r(20,0.6,r),16,D.az,20)
d.f=o}},
bPm(d,e){var w,v,u,t,s
d.f=2
d.r=!0
d.x=$.dl=$.dl+1
d.aD(B.aXs,B.h62,D.bu,0.15)
d.aD(B.aXw,B.h65,D.bO,0.3)
d.aD(B.hks,B.h7h,D.av,0.3)
d.aD(B.hjy,B.hcM,D.ba,0.5)
d.aF(B.hkr,B.haq,D.aL)
d.aF(B.h8a,B.h6p,D.bs)
d.x=0
d.x=$.dl=$.dl+1
d.aF(B.aY9,B.aXG,D.cs)
d.aF(B.aY5,B.aXL,D.bm)
d.ee(B.aY6,5.5,B.agq,5,8)
d.ee(B.aY7,5.7,D.av,3,8)
d.x=0
d.x=$.dl=$.dl+1
d.aF(B.hk4,B.h8K,D.aQ)
for(w=0;w<3;++w){v=90+w*30
d.aEH(new A.r(-146,62,v),B.h6R,[D.bC,D.bs,D.bm][w],0)
d.aF(new A.r(-145.6,62,v),B.hlC,D.c)}d.aF(B.h67,B.h8J,D.fY)
d.aF(B.hfy,B.hmt,D.c)
d.aF(B.heG,B.hlc,D.bC)
d.x=0
for(u=0;u<4;++u){t=B.dpE[u]
d.x=$.dl=$.dl+1
d.aF(new A.r(t,9,150),B.h7o,D.bm)
d.aF(new A.r(t,17,160),B.h7i,D.bm)
d.aF(new A.r(t-8,4,150),B.aY0,D.aL)
d.aF(new A.r(t+8,4,150),B.aY0,D.aL)
d.x=0}d.x=$.dl=$.dl+1
d.aF(B.h4m,B.haD,D.bM)
d.aD(B.h3n,B.h9x,D.ax,0.4)
d.aD(B.hkH,B.h7H,D.dw,0.5)
for(u=0;u<2;++u){t=E.aBT[u]
for(s=0;s<2;++s){v=B.cim[s]
d.dq(new A.r(t,9,v-1.5),new A.r(t,9,v+1.5),5,D.av,8)}}d.x=0
this.rN(d,0,78,24,D.aJ)
e.push(B.c46)
e.push(B.c4_)
e.push(B.c47)},
aWl(a5,a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=a6*128
switch(a7){case 1:w=B.deK
break
case 2:w=B.dg8
break
default:w=B.d9N
break}a5.x=$.dl=$.dl+1
a5.aF(new A.r(a6*148,40,120),B.h9k,B.agn)
for(v=0;v<2;++v)a5.aF(new A.r(a4,40,B.cMe[v]),B.h8Z,B.agn)
a5.aF(new A.r(a4,4,120),B.h9_,B.blq)
for(u=0;u<4;++u)a5.aD(new A.r(a4,11+u*18,120),B.h8V,B.buV,0.1)
for(t=a7===0,s=w.length,r=a6*2.7,u=0;u<4;++u){q=12+u*18
for(p=q+6.6,o=q+3.2,n=u*7,m=q+10,l=q+12.5,k=q+7,j=q+8,i=q+2.5,h=q+5.5,g=0;g<9;++g){f=76+g*11
for(e=n+g*3,d=u+g+a7,a0=0;a0<2;++a0){a1=a6*(114+a0*14)
a2=w[D.o.E(e+a0*5+a7,s)]
switch(D.o.E(d+a0,4)){case 0:a5.cJ(new A.r(a1,q,f),new A.r(a1,j,f),3.2,a2,0.3,8)
a5.Li(new A.r(a1,i,f),new A.r(a1,h,f),3.3,D.c,!1,8)
break
case 1:a5.aD(new A.r(a1,k,f),B.hdB,a2,0.1)
a5.aF(new A.r(a1-r,j,f),B.hhB,D.c)
break
case 2:a5.cJ(new A.r(a1,q,f),new A.r(a1,m,f),2.4,a2,0.45,8)
a5.dq(new A.r(a1,m,f),new A.r(a1,l,f),1.2,D.c,6)
break
default:a3=t?B.bv1:a2
a5.aD(new A.r(a1,o,f),B.hgS,a3,0.05)
a3=t?B.bhT:D.c
a5.aF(new A.r(a1,p,f),B.hc4,a3)}}}}a5.x=0},
aVh(d,e){var w,v,u,t,s,r,q,p
d.x=$.dl=$.dl+1
d.aD(new A.r(e,32,11),B.h9L,D.bP,0.3)
d.aF(new A.r(e,33,22.4),B.h9y,D.bp)
for(w=e-21,v=0;v<3;++v){u=v*17
d.aF(new A.r(e,15+u,21),B.h9s,D.bM)
for(t=16+u,u=27+u,s=v*2,r=0;r<7;++r){q=w+r*7
d.cJ(new A.r(q,t,21.6),new A.r(q,u,21.6),2.2,B.d4d[D.o.E(r+s,6)],0.5,6)}}d.x=0
p=d.f
d.f=3
d.d=0.2
d.aF(new A.r(e,33,23.2),B.hng,B.ZP)
d.d=1
d.f=p},
cyf(d,e){var w,v,u,t,s,r,q,p,o,n=this,m=n.b.b==="gasstation",l=d.f=2
d.r=!0
d.x=$.dl=$.dl+1
d.aD(B.aXs,B.h5K,B.o2,0.15)
d.aD(B.aXw,B.h5M,D.bO,0.3)
d.aF(B.hdm,B.hmD,B.bv8)
d.aD(B.hkm,B.h74,D.ec,0.3)
d.aD(B.hko,B.h6r,D.ba,0.5)
d.aF(B.h4d,B.h5u,D.av)
for(w=0;w<6;++w)d.aF(new A.r(14+w*7.5,33,47),B.aYk,B.dvq[D.o.E(w,4)])
d.x=0
d.x=$.dl=$.dl+1
d.aF(B.aY9,B.aXG,D.cs)
d.aF(B.aY5,B.aXL,D.cV)
d.aF(B.hh0,B.hf0,D.w2)
d.ee(B.aY6,5.5,B.agq,5,8)
d.ee(B.aY7,5.7,B.bj3,3,8)
d.x=0
n.aWl(d,-1,0)
n.aWl(d,1,m?l:1)
n.aVh(d,-104)
n.aVh(d,104)
for(l=[B.eDU,B.eTh],v=l.length,u=0;u<v;++u){t=l[u]
s=t.a
r=t.b
d.x=$.dl=$.dl+1
d.aF(new A.r(s,5,170),B.h8y,B.aih)
d.aF(new A.r(s,11,160),B.h8A,B.bmc)
for(t=s-13.5,q=J.a7(r),w=0;w<4;++w)for(p=t+w*9,o=0;o<3;++o)d.ee(new A.r(p,12.5,163+o*7.5),4.2,q.h(r,D.o.E(w+o,3)),4,6)
d.x=0}d.x=$.dl=$.dl+1
d.aF(B.aXn,B.h5C,m?D.bC:D.cV)
d.aF(B.hjX,B.aXY,D.az)
d.aF(B.h5E,B.aXY,m?D.bp:D.aJ)
d.x=0
n.rN(d,-64,120,24,D.bs)
n.rN(d,64,120,24,D.bt)
n.rN(d,0,84,22,D.bg)
e.push(new A.hd(B.h38,m?"\u26fd NGMY Gas shop":"\ud83d\uded2 NGMY Mart",D.R,0))
e.push(B.c40)
e.push(new A.hd(B.hbm,m?"\ud83d\udee2 For the car":"\ud83d\udc8a Medicine and health",D.iZ,0))
e.push(B.c4a)
e.push(B.c41)
e.push(B.c4b)},
cvX(d,e){var w,v,u,t,s
d.aD(B.h4Q,B.hnX,D.e_,0.1)
d.aF(B.hmp,B.hiw,B.bqG)
d.aD(B.h3p,B.h5T,B.o2,0.15)
for(w=0;w<4;++w){v=B.dhE[w]
u=v.a
t=v.b
for(s=0;s<2;++s){v=u+B.a5M[s]
d.aF(new A.r(v,10,t),B.h79,B.iC)
d.aF(new A.r(v,5,t),B.h7Q,D.bo)}}this.rN(d,0,80,24,D.bs)
this.rN(d,90,56,20,D.cq)
e.push(B.c3X)
e.push(B.c44)},
cBt(d,e){var w,v,u,t,s
d.aD(B.h3h,B.h6F,D.bC,0.3)
d.aD(B.hkM,B.ha7,D.bC,0.3)
for(w=0;w<2;++w){v=B.dq0[w]
for(u=0;u<2;++u){t=B.cwy[u]
d.dq(new A.r(v,6,t-1.5),new A.r(v,6,t+1.5),8,D.nr,10)}}for(s=0;s<5;++s)d.aF(new A.r(-142,30,110+s*18),B.h5w,D.am)
d.dq(B.h5A,B.h5B,2,D.bs,6)
this.rN(d,-60,130,24,D.az)
this.rN(d,80,56,20,D.cq)
e.push(B.c3V)
e.push(B.c45)},
cFF(d,e){var w,v,u,t,s,r,q,p,o,n=this
d.f=1
d.aF(B.hm3,B.hf7,B.dwJ[D.o.E(n.f,5)])
d.f=2
d.b=19502
d.aD(B.hcB,B.hbr,B.bsY,0.3)
d.aD(B.hiQ,B.hgJ,D.u2,0.2)
d.aD(B.hdc,B.hcV,D.bM,0.7)
d.aD(B.h9T,B.aYp,D.bu,0.5)
d.aD(B.h7X,B.aYp,D.bu,0.5)
d.aD(B.h8v,B.h5l,D.bu,0.5)
d.e=16
d.aD(B.h54,B.hbY,D.ba,0.4)
d.aF(B.hdA,B.h8Q,D.av)
d.aF(B.hjx,B.h5s,D.ec)
d.ee(B.hdg,2,D.bs,3,5)
d.ee(B.h9f,2,D.bg,3,5)
d.b=d.e=0
n.rN(d,0,70,26,D.aJ)
for(w=0;w<3;++w){v=B.d_B[w]
u=v.a
t=v.b
d.aD(new A.r(u,15,t),B.h91,B.o2,0.2)
d.aF(new A.r(u-19,7,t),B.aYd,D.iG)
d.aF(new A.r(u+19,7,t),B.aYd,D.iG)
d.aD(new A.r(u,24,t-4),B.h68,E.y5,0.5)
d.aF(new A.r(u,9,t+18),B.h6f,D.cs)
d.aF(new A.r(u,16,t+25),B.h6a,D.cs)}n.rN(d,105,100,26,D.bg)
d.d=0.3
d.f=3
d.aF(new A.r(144,14,100),B.h9g,B.ZP)
d.d=1
d.f=2
for(w=0;w<5;++w)d.aD(new A.r(144,14,B.d7M[w]),B.hfo,D.dq,0.5)
d.ee(B.h5V,10,B.Ft,3,6)
d.aF(B.h5O,B.h8e,B.o2)
s=-(n.f*22)
d.f=-1
d.aF(new A.r(520,s-1,105),B.hbK,B.Y9)
d.aF(B.haF,B.h7T,B.i6)
d.f=1
for(v=n.b.a,r=v*7,q=0;q<15;++q){p=30+D.o.E(r+q*13,90)
o=B.dd4[D.o.E(v+q,4)]
d.aF(new A.r(215+D.o.E(q,5)*80,s+p/2,-60+D.o.aq(q,5)*135),new A.r(38,p,38),o)}e.push(new A.hd(B.h36,"\ud83c\udfe2 LEVEL "+n.f+" of "+n.gMg(),D.dH,19502))
e.push(B.c3W)
e.push(B.c3Y)
n.bcd(d,e)},
bGI(){var w,v,u,t,s,r,q,p,o,n=C.a([],x.z),m=new A.eM(n)
m.f=-1
m.aD(B.her,B.hmf,D.bu,0.3)
m.f=0
m.x=$.dl=$.dl+1
m.aD(B.hku,B.aXX,B.YB,0.4)
m.x=0
m.x=$.dl=$.dl+1
m.aD(B.h8x,B.aXX,B.YB,0.4)
m.x=0
m.x=$.dl=$.dl+1
m.aD(B.h4I,B.haO,B.YB,0.4)
m.x=0
m.f=1
m.aF(B.h33,B.haP,D.aO)
m.f=2
m.r=!0
for(w=0;w<2;++w)m.aD(new A.r(B.aBV[w],40,38),B.hdU,D.bM,0.7)
m.aD(B.h55,B.hiT,D.u2,0.2)
for(w=0;w<2;++w)m.aD(new A.r(B.dpM[w],45,80),B.h6D,D.aL,0.3)
m.aD(B.h51,B.haN,D.aL,0.3)
m.aF(B.h4E,B.h8r,D.am)
m.aD(B.hmC,B.aZh,D.av,0.3)
m.aD(B.heO,B.aZh,D.av,0.3)
v=this.as
D.d.a9(v)
u=x.o
v.push(new A.fh(C.a([B.hfC,B.hdy,B.hhA,B.hlR],u),0,new A.bKS(this),520,230,6,2,0,!1))
v.push(new A.fh(C.a([B.hbW,B.hcd,B.hlE,B.hia],u),0,new A.bKT(),720,600,30,2,0,!1))
v.push(new A.fh(C.a([B.hfz,B.hjw,B.hgD,B.hf5],u),0,new A.bKU(),720,600,30,2,0,!1))
m.f=-1
m.kZ(B.hn9,B.hmV,B.Yv,0.2,3)
m.f=0
for(w=0;w<3;++w){t=B.d8f[w].a
s=t[0]
r=t[1]
q=t[2]
p=t[3]
m.x=$.dl=$.dl+1
m.hl(new A.r(s,70,r),new A.r(q,140,p),B.ajQ,3)
m.x=0}m.f=1
m.aF(B.h3k,B.h85,B.buP)
m.aD(B.h2U,B.hmF,D.u2,0.2)
m.f=1
for(w=0;w<2;++w){s=B.dq2[w]
m.aD(new A.r(s,75,278.6),B.hno,D.av,0.3)
t=s+42
o=s-42
v.push(new A.fh(C.a([new A.r(t,100,277.7),new A.r(o,100,277.7),new A.r(o,50,277.7),new A.r(t,50,277.7)],u),0,new A.bKV(s),720,420,0.6,1,0,!1))}m.aD(B.hd7,B.heS,E.iD,0.3)
v.push(new A.fh(C.a([B.hek,B.hi_,B.hez,B.hfx],u),0,new A.bKW(),900,160,0.6,1,0,!1))
v=C.C(v,x.fd)
this.ay=new A.qU(n,B.SY,B.v0,v,null,!1,0)},
bcd(d,e){var w,v,u,t,s,r,q,p,o=this,n="dead, tap to fix it"
d.b=19500
d.aD(B.hk3,B.ha0,B.Yd,0.5)
for(w=0;w<4;++w){v=o.c&&w===0?D.cf:B.ql
d.aF(new A.r(-144.2,62-w*6,45),B.he7,v)}d.b=0
o.rN(d,-100,100,22,o.c?D.ax:D.bg)
o.rN(d,90,100,22,D.cq)
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
d.aF(B.h9d,B.h6W,o.c?D.ax:D.bg)
d.b=19501
d.aF(B.hbN,B.hct,t?D.bg:D.ax)
d.aF(B.hkP,B.hcY,s?D.bg:D.ax)
d.aF(B.heb,B.hgt,r?D.bg:D.ax)
d.d=1
d.aD(B.hjJ,B.hdd,B.N4,0.25)
for(q=0;q<2;++q)for(u=26+F.hg[q]*3.4,p=0;p<2;++p)d.aF(new A.r(95+B.RZ[p],u,2.6),B.hfd,B.ai_)
d.aD(B.hm5,B.hhi,B.N4,0.25)
d.aF(new A.r(-60,s?52:48,2.8),B.h7S,B.ajW)
d.b=0
d.f=2
if(o.c)v=v.length===0?"\u26a1 Breaker panel: tap to switch the power on":"\u26a1 Breaker panel: still to fix: "+D.d.aN(v,", ")
else v="\u26a1 Breaker panel: all fine"
e.push(new A.hd(B.hk2,v,o.c?D.bC:D.en,19500))
v=new A.bKX(o)
u=t?"\ud83d\udd0c Outlets: fixed":"\ud83d\udd0c Outlet: "+C.w(v.$2(D.a3K,n))
e.push(new A.hd(B.hbO,u,t?D.en:D.bC,19501))
u=s?"\ud83d\udca1 Switch: fixed":"\ud83d\udca1 Switch: "+C.w(v.$2(B.cun,"no power, tap to fix it"))
e.push(new A.hd(B.hkQ,u,s?D.en:D.bC,19501))
v=r?"\ud83d\udca1 Ceiling light: fixed":"\ud83d\udca1 Ceiling light: "+C.w(v.$2(B.cmT,n))
e.push(new A.hd(B.h37,v,r?D.en:D.bC,19501))
if(o.c)e.push(B.c3U)},
cQs(){var w,v,u,t,s,r
if(this.a!=="tower")return B.qN
w=C.a([],x.a)
for(v=x.o,u=0;u<2;++u){t={}
s=B.djQ[u]
t.a=null
t.a=s.b
s=s.a*(22+22*this.y)
r=s-18
s+=18
w.push(new A.fh(C.a([new A.r(r,62,7.35),new A.r(s,62,7.35),new A.r(s,48,7.35),new A.r(r,48,7.35)],v),0,new A.bL3(t),540,210,20,2,0,!1))}return w},
cQJ(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=x.z,i=C.a([],j),h=new A.eM(i),g=k.a,f=g==="tower"
if(f||g==="cabin"){w=C.a([],j)
v=new A.eM(w)
if(f){v.e=16
for(u=0;u<2;++u)v.aD(new A.r(F.hg[u]*(22+22*k.y),42,6.6),B.hmq,D.aQ,0.7)}else{v.e=16
for(u=0;u<2;++u)v.aD(new A.r(F.hg[u]*(9+18*k.y),40,78.6),B.h6C,D.aO,0.7)}D.d.v(i,w)}switch(g){case"shop":A.x_(h,B.eum,d,B.JC,!1,0,D.b8)
break
case"hospital":A.x_(h,B.euq,d,B.U2,!1,0,D.bQ)
t=D.k.E(d*12,220)
g=t<110
f=g?t:220-t
g=g?0:3.141592653589793
A.x_(h,A.auj(!1,0,-1,"",!1,0,"",-1,t/12,!1,!1,!1,0,!1,!0,6,g,40+f),d,B.JC,!1,0,D.bP)
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
A.x_(new A.eM(f),B.eup,d,p,!1,0,p.c)
D.d.v(i,A.nk(f,-1.5707963267948966,-1.5707963267948966,new A.r(46,27,48+r*50)))}++r}}break
case"school":A.x_(h,B.eur,d,B.U2,!1,0,D.bm)
for(u=0;u<3;++u){g=B.dbm[u]
A.x_(h,new A.yh(0,g.a,g.b,3.141592653589793,!1,!1,!1,!1,!1,0,!1,!1,"","",-1,0,-1,0),d,B.JC,!1,0,g.c)}break
case"firestation":A.x_(h,B.eun,d,B.JC,!1,0,D.bC)
A.x_(h,B.euo,d,B.U2,!1,0,D.az)
break
default:break}g=k.at
g===$&&C.c()
f=g.f
w=g.r
o=g.w
n=g.x
m=g.y
l=g.z&&n
A.x_(h,A.auj(!1,0,-1,"",!1,g.Q,"",-1,m,!1,!1,!1,0,l,n,f,o,w),d,e,!0,0,null)
if(k.cx!=null){j=C.a([],j)
new A.eM(j).aF(new A.r(g.f+Math.sin(g.w)*9,48+g.Q,g.r+Math.cos(g.w)*9),B.aXM,B.iC)
D.d.v(i,j)}return i},
gdd(d){return this.e}}
A.FJ.prototype={}
A.Pk.prototype={
gUE(){var w,v=this
if(!v.f)return"has died"
if(v.r>=0)return"in hospital"
if(v.c<30)return"in danger"
if(v.e)return"sick"
w=v.b
if(w>80)return"starving"
if(w>55)return"hungry"
if(v.d<40)return"unhappy at home"
return"fine"},
gaEC(d){var w,v=this.gUE()
A:{if("has died"===v){w="\ud83d\udd6f"
break A}if("in hospital"===v){w="\ud83c\udfe5"
break A}if("in danger"===v){w="\ud83c\udd98"
break A}if("sick"===v){w="\ud83e\udd12"
break A}if("starving"===v||"hungry"===v){w="\ud83c\udf7d"
break A}if("unhappy at home"===v){w="\ud83d\ude1f"
break A}w="\ud83d\ude42"
break A}return w}}
A.It.prototype={}
A.Mn.prototype={}
A.aUq.prototype={
bAX(d,e){var w,v=C.a([],x.fP)
for(w=0;w<7;++w)v.push(new A.Pk(B.D9[w]))
this.c=v
v[1].b=55
v[4].b=40},
gCo(){var w,v,u,t=C.a([],x.fP),s=this.c
s===$&&C.c()
w=s.length
v=0
for(;v<s.length;s.length===w||(0,C.J)(s),++v){u=s[v]
if(u.f)t.push(u)}return t},
gcPA(){var w=this.c
w===$&&C.c()
return new C.X(w,new A.bLF(),C.T(w).k("X<1>")).gI(0)},
Q0(d){var w=this.f
D.d.c4(w,0,d)
if(w.length>12)w.pop()},
aEj(a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this
a1.as+=a3
for(w=a1.gCo(),v=w.length,u=-0.6*a3,t=0.8*a3,s=0.2*a3,r=a1.b,q=0.012*a3,p=a1.f,o=0.15*a3,n=0;n<w.length;w.length===v||(0,C.J)(w),++n){m=w[n]
l=a4.d
l===$&&C.c()
k=m.a
j=l[k.c]
i=j.gkT()
l=k.d
if(l>=0)h=!a4.d[l].gjW()
else{l=j.c
h=(l==="bathroom"||l==="kitchen")&&!j.gjW()}if(m.r<0){m.b=Math.min(100,m.b+s)
l=i?0:45
g=h?35:0
f=m.d
f+=D.k.F(100-l-g-f,u,t)
m.d=f
if(!m.e)l=(f<40||m.b>85)&&r.aj()<q
else l=!1
if(l){m.e=!0
D.d.c4(p,0,k.b+" has fallen sick. Give medicine, or send them to the hospital.")
if(p.length>12)p.pop()}e=m.b>=95?0.9:0
if(m.e)e+=0.55
if(m.d<15)e+=0.4
if(e>0)l=m.c=m.c-e*a3
else{l=m.c
if(l<100){l=Math.min(100,l+o)
m.c=l}}if(l<=0)a1.aTi(m)}}for(w=a1.e,v=1.2*a3,u=2.2*a3,d=0;d<w.length;++d){a0=w[d]
t=a0.a
if(t<0)continue
s=a1.c
s===$&&C.c()
m=s[t]
if(!m.f){a0.a=-1
continue}t=a0.b=Math.max(0,a0.b-a3)
if(t>30)a0.c=Math.min(100,a0.c+u)
else if(t<=0)if((m.c-=v)<=0){a1.aTi(m)
a0.a=-1
continue}if(a0.c>=100){m.e=!1
m.r=-1
m.c=Math.max(m.c,80)
m.b=Math.min(m.b,30)
a0.a=-1
a0.c=0
a0.b=100
a1.r+=8;++a1.z
D.d.c4(p,0,m.a.b+" is better and went home. +8 points.")
if(p.length>12)p.pop()}}for(w=a1.d,v=w.length,n=0;n<v;++n)w[n].f+=a3
a1.NO(a4)
if((a1.at-=a3)<=0){a1.at=60+r.aj()*50
a1.cKZ(a4)}},
aTi(d){var w
d.f=!1
d.c=0
w=d.r
if(w>=0)this.e[w].a=-1
d.r=-1
D.d.bt(this.d,new A.bLC(d))
this.Q0(d.a.b+" has died. Keep up with everybody's needs: food, medicine and a home that works.")},
aX8(d,e){return D.d.aX(this.d,new A.bLD(d,e))},
NO(d){var w,v,u,t,s,r,q,p,o,n=this,m=n.d,l=C.C(m,x.fC),k=l.length,j=n.f,i=0
for(;i<l.length;l.length===k||(0,C.J)(l),++i){w=l[i]
v=B.D9[w.b]
u=w.c==="power"
if(u){t=d.d
t===$&&C.c()
s=t[v.c].gkT()}else{t=v.d
r=d.d
if(t>=0){r===$&&C.c()
t=r[t].gjW()
s=t}else{r===$&&C.c()
t=r[v.c].gjW()
s=t}}if(s){D.d.W(m,w)
t=w.e
n.r=n.r+t;++n.y
u=u?"power is back":"leak is fixed"
D.d.c4(j,0,v.b+"'s "+u+". +"+t+" points. Thank you!")
if(j.length>12)j.pop()}}for(l=n.gCo(),k=l.length,u=n.b,i=0;i<l.length;l.length===k||(0,C.J)(l),++i){q=l[i]
if(m.length>=4)break
t=d.d
t===$&&C.c()
r=q.a
p=t[r.c]
if(!p.gkT()&&!n.aX8(r.a,"power")){m.push(new A.It(n.Q++,r.a,"power",B.d40[u.aw(3)],15))
D.d.c4(j,0,r.b+" is calling for help: no power.")
if(j.length>12)j.pop()}t=r.d
o=t>=0?d.d[t]:p
t=o.c
if((t==="bathroom"||t==="kitchen")&&!o.gjW()&&!n.aX8(r.a,"leak")&&m.length<4){m.push(new A.It(n.Q++,r.a,"leak",B.dcU[u.aw(3)],15))
D.d.c4(j,0,r.b+" is calling for help: a leak.")
if(j.length>12)j.pop()}}},
cKZ(d){var w,v,u,t,s,r,q=this
if(q.d.length>=3||q.gCo().length===0)return
w=q.b
v=q.gCo()[w.aw(q.gCo().length)]
u=d.d
u===$&&C.c()
t=v.a
s=u[t.c]
t=t.d
r=t>=0?u[t]:s
u=r.c
if((u==="bathroom"||u==="kitchen")&&r.gjW()&&w.h8()){r.ch=!0
r.fr=null}else if(s.gkT()){s.ay=!0
s.CW=null
s.fy=!1
s.fx.a9(0)}else return
q.NO(d)},
bgh(d){var w,v,u,t=this
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
t.Q0(u)
return u},
aLS(d){var w,v,u=this
if(!d.f)return d.a.b+" has died."
if(!d.e)return d.a.b+" is not sick."
w=u.x
if(w<=0)return y.D
u.x=w-1
d.e=!1
d.c=Math.min(100,d.c+20)
u.r+=3
v=d.a.b+" took the medicine and is better. +3 points."
u.Q0(v)
return v},
aEi(d){var w,v,u,t
if(!d.f)return d.a.b+" has died."
if(d.r>=0)return d.a.b+" is already in hospital."
if(!d.e&&d.c>60)return d.a.b+" is not ill enough for the hospital."
w=this.e
v=D.d.bj(w,new A.bLE())
if(v<0)return"The hospital is full. Treat the patients first, they go home when they are better."
w=w[v]
u=d.a
w.a=u.a
w.b=100
w.c=0
d.r=v
t=u.b+" is in bed "+(v+1)+" of the hospital. Keep up with their care."
this.Q0(t)
return t},
blv(d){var w,v,u=this,t=u.e[d],s=t.a
if(s<0)return"This bed is empty."
if(t.b>70)return"The patient is cared for already."
w=u.x
if(w<=0)return y.D
u.x=w-1
t.b=100;++u.r
w=u.c
w===$&&C.c()
v=w[s].a.b+" was treated. +1 point."
u.Q0(v)
return v},
aEP(d){var w,v=this
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
cUG(d){return d.r<0},
bgt(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=C.a([],x.e3),e=d.d
e===$&&C.c()
w=e[a0]
if(w.c!=="outside")return f
v=new A.bLH(new A.bLJ(w))
for(e=D.d.gag(this.gCo()),u=new C.eJ(e,this.gcUF()),t=this.d,s=0;u.C();){r=e.gR(0)
q=D.d.aX(t,new A.bLG(r))
p=v.$2(r,s).a
o=p[0]
n=p[1]
m=p[2]
l=p[3]
k=p[4]
p=r.a
j=q?0.4:m
i=q?"\ud83d\udcde ":""
h=r.gaEC(0)
r.gUE()
r=q?"":l
g=q?"":k
f.push(new A.aap(p.a,a0,o,n,j,p.e,i+p.b+" "+h,q,0,r,g));++s}return f},
d0I(a2){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.r,j=l.w,i=l.x,h=l.y,g=l.z,f=l.as,e=l.Q,d=x.ez,a0=C.a([],d),a1=l.c
a1===$&&C.c()
w=a1.length
v=x.N
u=x.aU
t=0
for(;t<a1.length;a1.length===w||(0,C.J)(a1),++t){s=a1[t]
a0.push(C.I(["hunger",s.b,"health",s.c,"comfort",s.d,"sick",s.e,"alive",s.f,"bed",s.r],v,u))}a1=C.a([],x.f4)
for(w=l.e,r=w.length,q=x.di,t=0;t<w.length;w.length===r||(0,C.J)(w),++t){p=w[t]
a1.push(C.I(["res",p.a,"care",p.b,"heal",p.c],v,q))}d=C.a([],d)
for(w=l.d,r=w.length,t=0;t<w.length;w.length===r||(0,C.J)(w),++t){o=w[t]
d.push(C.I(["id",o.a,"res",o.b,"kind",o.c,"msg",o.d,"reward",o.e,"age",o.f],v,u))}w=x.y
u=C.U(v,w)
for(r=a2.gr7(),q=r.length,t=0;t<r.length;r.length===q||(0,C.J)(r),++t){n=r[t]
u.n(0,""+n.a,n.gkT())}w=C.U(v,w)
for(r=D.d.gag(a2.gr7()),q=new C.eJ(r,new A.bLK());q.C();){m=r.gR(0)
w.n(0,""+m.a,m.gjW())}return C.I(["v",1,"seed",l.a,"points",k,"food",j,"medicine",i,"served",h,"saved",g,"clock",f,"nextCall",e,"res",a0,"beds",a1,"calls",d,"wired",u,"plumbed",w],v,x.A)},
D9(d,e){return this.bpF(0,e)},
bpF(d,e){var w=0,v=C.j(x.H),u=1,t=[],s=this,r,q,p,o
var $async$D9=C.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return C.b(C.az(),$async$D9)
case 6:r=g
q=C.dL(s.d0I(e),x.N,x.A)
J.aJ(q,"at",Date.now())
w=7
return C.b(r.aB("String","ngmy_community_v1",D.Y.az(q,null)),$async$D9)
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
return C.i($async$D9,v)}}
A.aq7.prototype={
S(){return new A.ble()}}
A.ble.prototype={
gblg(){var w=this.r
return w===$?this.r=this.a.c:w},
Z(){this.a3()
this.a_f()},
a_f(){return this.c4h()},
c4h(){var w=0,v=C.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$a_f=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:m={}
w=3
return C.b(A.aUs(),$async$a_f)
case 3:l=e
if(t.c==null){w=1
break}m.a=null
if(l!=null){s=J.a7(l)
r=C.aK(s.h(l,"seed"))
q=r==null?null:D.k.M(r)
if(q==null)q=1
r=$.Et
if((r==null?null:r.b)===q){r.toString
t.e=r}else{r=A.aWZ(q)
t.e=$.Et=r
A.hic(r,l)}m.a=A.h41(l)
r=Date.now()
s=C.aK(s.h(l,"at"))
s=s==null?null:D.k.M(s)
p=D.k.F((r-(s==null?Date.now():s))/1000*0.15,0,90)
while(p>0){o=p>5?5:p
s=m.a
r=t.e
r===$&&C.c()
s.aEj(0,o,r)
p-=o}}else{s=$.Et
if(s==null)s=$.Et=A.aWZ(D.o.E(Date.now(),1e5))
t.e=s
s=s.b
n=A.h40(s,s)
m.a=n
n.NO(t.e)}$.HW=m.a
t.m(new A.dUZ(m,t))
t.f=C.de(D.fF,new A.dV_(t))
case 1:return C.h(u,v)}})
return C.i($async$a_f,v)},
c9T(){var w,v,u,t=this,s=t.d
if(s==null||t.c==null)return
w=s.f
v=w.length===0?"":D.d.gH(w)
u=t.e
u===$&&C.c()
s.aEj(0,1,u)
if(w.length!==0&&D.d.gH(w)!==v)t.Jf(D.d.gH(w))
if(++t.y%8===0)s.D9(0,t.e)
t.m(new A.dVb())},
t(){var w,v=this,u=v.f
if(u!=null)u.a1(0)
u=v.x
if(u!=null)u.a1(0)
u=v.d
if(u!=null){w=v.e
w===$&&C.c()
u.D9(0,w)}v.a2()},
Jf(d){var w=this,v=w.x
if(v!=null)v.a1(0)
w.m(new A.dV5(w,d))
w.x=C.cB(D.ul,new A.dV6(w))},
acc(d){return this.bVN(d)},
bVN(d){var w=0,v=C.j(x.H),u,t=this,s,r,q
var $async$acc=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:q=B.D9[d.b]
if(d.c==="power")s=q.c
else{r=q.d
s=r>=0?r:q.c}r=t.e
r===$&&C.c()
r.e=s
r=t.c
r.toString
w=3
return C.b(C.a6(r,!1).cd(C.eb(new A.dUV(),!1,null,x.H)),$async$acc)
case 3:if(t.c==null){w=1
break}r=t.d
if(r!=null)r.NO(t.e)
r=t.d
if(r!=null)r.D9(0,t.e)
t.m(new A.dUW())
case 1:return C.h(u,v)}})
return C.i($async$acc,v)},
akz(d){return this.cIj(d)},
cIj(d){var w=0,v=C.j(x.H),u,t=this,s
var $async$akz=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:s=t.e
s===$&&C.c()
s.e=d.a.c
s=t.c
s.toString
w=3
return C.b(C.a6(s,!1).cd(C.eb(new A.dVe(),!1,null,x.H)),$async$akz)
case 3:if(t.c==null){w=1
break}s=t.d
if(s!=null)s.NO(t.e)
t.m(new A.dVf())
case 1:return C.h(u,v)}})
return C.i($async$akz,v)},
a_g(d,e){var w=null,v=e.j(0.18),u=C.n(14),t=C.L(e.j(0.7),D.r,1)
return C.p(w,C.d(d,w,w,w,w,w,w,C.l(w,w,e,w,w,w,w,w,w,w,w,12.5,w,w,D.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),D.f,w,w,new C.o(v,w,t,u,w,w,D.n),w,w,w,w,O.al2,w,w,w)},
WP(d,e,f){var w=null
return new C.D(D.nw,C.A(C.a([new C.a5(62,w,C.d(d,w,w,w,w,w,w,A8.aaN,w,w,w),w),C.E(C.bx(C.n(6),C.kl(D.bB,w,w,8,w,D.k.F(e/100,0,1),new C.lJ(f,x.dw)),D.aq),1)],x.p),D.m,w,D.e,D.i,0,w,w),w)},
Q1(d,e,f){var w=null,v=e==null,u=v?D.dt:f.j(0.22),t=C.n(12),s=C.L(v?D.aW:f,D.r,1)
return C.aA(w,C.p(w,C.d(d,w,w,w,w,w,w,C.l(w,w,v?D.bV:f,w,w,w,w,w,w,w,w,12.5,w,w,D.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),D.f,w,w,new C.o(u,w,s,t,w,w,D.n),w,w,w,w,D.ny,w,w,w),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,e,w,w,w,w,w,w,!1,D.a4)},
aeL(d,e){return this.Q1(d,e,D.az)},
Q2(d,e){var w=null,v=C.a([e.j(0.1),B.FZ],x.O),u=C.n(18)
return C.p(w,d,D.f,w,w,new C.o(w,w,C.L(e.j(0.5),D.r,1),u,w,new C.a9(D.b1,D.b7,D.x,v,w,w),D.n),w,w,w,D.d3,D.bh,w,w,w)},
c9P(d){return this.Q2(d,D.aW)},
b0e(d,e,f){var w,v=null,u=this.gblg()===d,t=u?D.az.j(0.22):D.c.j(0.06),s=C.n(14),r=u?D.az:D.aW
r=C.L(r,D.r,u?2:1)
w=f>0?e+" ("+f+")":e
return C.E(C.aA(v,C.p(v,C.at(C.d(w,v,v,v,v,v,v,C.l(v,v,u?D.az:D.ad,v,v,v,v,v,v,v,v,12.5,v,v,D.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,v),D.f,v,v,new C.o(t,v,r,s,v,v,D.n),v,v,v,D.jE,D.k_,v,v,v),D.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new A.dVd(this,d),v,v,v,v,v,v,!1,D.a4),1)},
ays(d,e){return this.b0e(d,e,0)},
bIn(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=d.d
if(k.length===0)return new C.D(D.ex,C.x(B.dmb,D.m,l,D.e,D.i,0,D.p),l)
w=x.p
v=C.a([],w)
for(u=k.length,t=0;t<k.length;k.length===u||(0,C.J)(k),++t){s=k[t]
r=s.c==="power"
q=r?D.bs:D.cq
p=B.D9[s.b]
o=C.d(p.b,l,l,l,l,l,l,D.hz,l,l,l)
n=r?"\u26a1 Power":"\ud83d\udeb0 Leak"
r=r?D.bs:D.cq
v.push(m.Q2(C.x(C.a([new C.c7(D.aM,D.e,D.i,D.m,l,D.p,l,0,C.a([new A.adb(p.e,44,l),D.at,new C.by(1,D.bc,o,l),m.a_g(n+"  +"+s.e,r)],w),l),D.P,C.d('"'+s.d+'"',l,l,l,l,l,l,B.ftW,l,l,l),D.X,new C.bL(D.a9,l,l,m.aeL("\ud83d\udd27 Go and fix it",new A.dUU(m,s)),l)],w),D.E,l,D.e,D.i,0,D.p),q))}return C.x(v,D.m,l,D.e,D.i,0,D.p)},
c9R(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=x.p,j=C.a([],k),i=d.c
i===$&&C.c()
w=i.length
v=0
for(;v<i.length;i.length===w||(0,C.J)(i),++v){u=i[v]
t=u.f
if(!t)s=D.aW
else s=u.gUE()==="fine"?D.b9:D.c0
t=t?1:0.5
r=u.a
q=C.d(r.b+"  "+u.gaEC(0),l,l,l,l,l,l,D.hz,l,l,l)
p=C.d(r.f,l,l,l,l,l,l,B.aUq,l,l,l)
o=u.gUE()
n=u.gUE()==="fine"?D.et:D.eQ
r=C.a([new C.c7(D.aM,D.e,D.i,D.m,l,D.p,l,0,C.a([new A.adb(r.e,50,l),D.at,new C.by(1,D.bc,C.x(C.a([q,p,C.d("Now: "+o,l,l,l,l,l,l,new C.G(!0,n,l,l,l,l,12.5,D.H,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l),l,l,l)],k),D.E,l,D.e,D.i,0,D.p),l)],k),l),D.P,m.WP("Food",100-u.b,D.cJ),m.WP("Health",u.c,D.b9),m.WP("Home",u.d,D.cq)],k)
if(u.f){q=m.aeL("\ud83c\udf5e Feed",new A.dV0(m,d,u))
p=m.Q1("\ud83d\udc8a Medicine",u.e?new A.dV1(m,d,u):l,D.bt)
D.d.v(r,C.a([D.an,new C.CQ(D.bG,8,8,D.br,C.a([q,p,m.Q1("\ud83c\udfe5 Hospital",u.r>=0?l:new A.dV2(m,d,u),D.c0),m.Q1("\ud83c\udfe0 Visit",new A.dV3(m,u),D.b0)],k),l)],k))}j.push(m.Q2(new C.kE(t,C.x(r,D.E,l,D.e,D.i,0,D.p),l),s))}return C.x(j,D.m,l,D.e,D.i,0,D.p)},
c9Q(d){var w,v,u,t,s=null,r=x.p,q=C.a([B.eq4],r)
for(w=d.e,v=0;v<w.length;++v){u=w[v].a<0
t=u?D.aW:D.c0
q.push(this.Q2(u?new C.c7(D.aM,D.e,D.i,D.m,s,D.p,s,0,C.a([B.fTC,D.at,C.d("Bed "+(v+1)+": empty",s,s,s,s,s,s,B.fnl,s,s,s)],r),s):new C.ff(new A.dUY(this,d,v),s),t))}return C.x(q,D.m,s,D.e,D.i,0,D.p)},
c9S(d){var w=this,v=null,u=x.p,t=w.Q2(C.A(C.a([B.fEX,D.at,B.bHS,w.aeL("Buy",new A.dV8(w,d))],u),D.m,v,D.e,D.i,0,v,v),D.cJ),s=w.Q2(C.A(C.a([B.h_I,D.at,B.bI7,w.Q1("Buy",new A.dV9(w,d),D.bt)],u),D.m,v,D.e,D.i,0,v,v),D.bt),r=C.a([B.fUD,D.an,C.d("Calls answered: "+d.y+"\nPatients sent home better: "+d.z+"\nPeople lost: "+d.gcPA(),v,v,v,v,v,v,B.aVs,v,v,v)],u)
if(d.gCo().length===0)D.d.v(r,C.a([D.X,w.aeL("Start a new community",new A.dVa(w))],u))
return C.x(C.a([t,s,w.c9P(C.x(r,D.E,v,D.e,D.i,0,D.p))],u),D.m,v,D.e,D.i,0,D.p)},
B(d){var w,v,u,t,s,r=this,q=null,p=r.d
if(p==null)w=D.m0
else{w=x.p
v=C.A(C.a([C.aH(q,q,q,q,X.nE,q,q,q,new A.dVg(d),q,q,q,q,q,q),B.bHy,r.a_g("\u2b50 "+p.r,D.az)],w),D.m,q,D.e,D.i,0,q,q)
u=r.a_g("\ud83c\udf5e "+p.w,D.cJ)
t=r.a_g("\ud83d\udc8a "+p.x,D.bt)
s=p.e
s=C.A(C.a([u,D.ae,t,D.ae,r.a_g("\ud83c\udfe5 "+new C.X(s,new A.dVh(),C.T(s).k("X<1>")).gI(0)+"/"+s.length,D.c0)],w),D.m,q,D.bb,D.i,0,q,q)
t=C.A(C.a([r.b0e("calls","\ud83d\udcde Calls",p.d.length),r.ays("people","\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc67 People"),r.ays("hospital","\ud83c\udfe5 Hospital"),r.ays("shop","\ud83d\uded2 Shop")],w),D.m,q,D.e,D.i,0,q,q)
switch(r.gblg()){case"people":u=r.c9R(p)
break
case"hospital":u=r.c9Q(p)
break
case"shop":u=r.c9S(p)
break
default:u=r.bIn(p)
break}w=C.a([new C.D(B.bFO,v,q),new C.D(D.C7,s,q),new C.D(B.amK,t,q),D.P,C.E(C.cj(C.a([u],w),q,q,D.GD,q,q,D.ai,!1),1)],w)
if(r.w!=null){v=D.e_.j(0.96)
u=C.n(14)
t=C.L(D.b9,D.r,1)
s=r.w
s.toString
w.push(C.p(q,C.d(s,q,q,q,q,q,q,B.fq_,q,q,q),D.f,q,q,new C.o(v,q,t,u,q,q,D.n),q,q,q,H.al5,D.bh,q,q,1/0))}w=C.x(w,D.m,q,D.e,D.i,0,D.p)}return C.c5(q,D.c3,C.bm(!0,w,!0,!1,D.ag,!0,!0),q,!1,!1,q,q)}}
A.adb.prototype={
B(d){var w=null,v=this.d
return new C.a5(v,v,C.b4(w,w,w,new A.bg0(this.c,w),D.ay),w)},
gY(d){return this.d}}
A.bg0.prototype={
a4(d,e){var w,v,u,t,s=e.a,r=s/2,q=$.S(),p=C.K()
p.r=D.dt.gp(0)
d.N(new C.q(r,r),r,p)
p=d.c
J.bq(p.save())
q=new C.aE(q.r,D.ah,null,null,C.a([],x.g))
r=0+s
q.D(new C.jN(new C.a2(0,0,r,r)))
d.mP(0,q)
q=s*0.1
r=s*0.78
w=s*0.5
v=C.K()
u=this.b
v.r=u.c.gp(0)
d.bY(new C.a2(q,r,q+s*0.8,r+w),v)
v=s*0.27
r=s*0.16
t=C.K()
t.r=u.a.gp(0)
d.bY(new C.a2(v,r,v+s*0.46,r+s*0.56),t)
t=s*0.24
r=C.K()
r.r=u.b.gp(0)
d.cN(new C.a2(t,q,t+s*0.52,q+w),3.14,3.14,!0,r)
r=s*0.44
q=s*0.035
t=C.K()
t.r=D.nr.gp(0)
d.N(new C.q(s*0.42,r),q,t)
t=C.K()
t.r=D.nr.gp(0)
d.N(new C.q(s*0.58,r),q,t)
t=s*0.4
q=C.K()
q.b=D.aa
q.c=1.4
q.r=D.eo.gp(0)
d.cN(new C.a2(t,w,t+s*0.2,w+s*0.12),0.2,2.7,!1,q)
p.restore()},
aC(d){return!1}}
A.fm.prototype={}
A.AG.prototype={}
A.iQ.prototype={}
A.MQ.prototype={}
A.ayg.prototype={
gjE(){return this.a==="ok"}}
A.mh.prototype={}
A.fo.prototype={}
A.Ep.prototype={}
A.nS.prototype={}
A.ac8.prototype={}
A.ow.prototype={}
A.aWT.prototype={
gx_(){var w=this.c
return w.c>=2&&A.x7(A.oi(this.a),w).a==="ok"},
gdd(d){return this.c}}
A.a5H.prototype={
gzt(){var w,v,u=this.p4,t=u==="ptrap"
if(t||u==="faucet"){w=this.RG
if(w==null)return!1
if(t)if(w.a.a===3){u=w.b
u=new C.b8(u,C.a4(u).k("b8<2>")).cM(0,new A.bVb())&&w.c}else u=!1
else u=A.bDA(w)&&w.f&&w.r
return u}v=this.R8
return v!=null&&v.c>=2&&A.x7(A.oi(u),v).a==="ok"},
IA(d){var w
if(this.c!=="outside"){w=this.CW
w=w!=null?w.ri(d):!this.ay}else w=!0
return w},
ga6p(){var w=this.p4
if(w.length===0)w=this.IA(2)
else w=w!=="fan"||this.gzt()
return w},
gMq(){var w=this.p4
if(w.length===0)w=this.IA(3)
else w=!D.d.q(B.iP,w)||this.gzt()
return w},
gao9(){var w=this.p4
if(w.length===0)w=this.IA(0)
else w=!D.d.q(B.k7,w)||this.gzt()
return w},
geb(d){var w
if(this.ok)w=260
else switch(this.c){case"bathroom":w=110
break
case"kitchen":w=140
break
case"living":w=180
break
case"hall":w=480
break
case"outside":w=2600
break
default:w=130
break}return w},
gh3(d){var w=180
if(!this.ok)switch(this.c){case"bathroom":w=100
break
case"kitchen":w=110
break
case"living":w=120
break
case"hall":break
case"outside":w=2100
break
default:w=112
break}return w},
gkT(){var w,v=this
if(v.c!=="outside"){w=v.p4
if(w.length!==0)w=w==="ptrap"||w==="faucet"||v.gzt()
else{w=v.CW
w=w==null?null:w.gbm4()
if(w==null)w=!v.ay}}else w=!0
return w},
gjW(){var w=this,v=w.c
if(v==="bathroom"||v==="kitchen"){v=w.p4
if(v.length!==0)v=!(v==="ptrap"||v==="faucet")||w.gzt()
else{v=w.fr
v=v==null?null:v.gx_()
if(v==null)v=!w.ch}}else v=!0
return v},
Cc(d){var w,v,u,t
for(w=this.x,v=w.length,u=0;u<v;++u){t=w[u]
if(t.a===d)return t}return null},
dB(d,e,f,g){var w=this,v=w.y++,u=f==null?0:f,t=new A.mh(v,e,u,g==null?w.gh3(0)*0.6:g)
w.x.push(t)
w.a4i(0,t)
return t},
J(d,e){return this.dB(0,e,null,null)},
cLC(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=d.k1
if(a0!=null){w=d.c
w=w==="outside"||w==="hall"}else w=!0
if(w)return
v=A.hfn(d,A.aQg(a0),0)
w=v.c
u=v.a/2
t=w-u-6
s=w+u+6
for(w=D.d.gag(d.x),u=new C.eJ(w,new A.bVa());u.C();){r=w.gR(0)
q=B.hJ.h(0,r.b)
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
if(f<=d.gh3(0)-m-1)r.d=f
else if(e>=m+1)r.d=e
else r.c=q?h+52+l+1:h-52-l-1}}},
a4i(d,e){var w,v,u,t,s,r=this,q=e.b,p=B.hJ.h(0,q)
p.toString
w=(e.e&1)===1
v=w?p.d:p.c
u=w?p.c:p.d
p=v/2
e.c=D.k.F(e.c,-r.geb(0)/2+p+1,r.geb(0)/2-p-1)
p=e.d
t=u/2
s=r.c==="outside"?-760+t:t+1
e.d=D.k.F(p,s,r.gh3(0)-t-1)
if(D.d.q(B.Sw,q)){e.c=D.k.V(e.c/40)*40
e.d=D.k.V(e.d/40)*40}}}
A.aWY.prototype={
bB9(d){var w,v,u
this.a=d
A:{if("gfci"===d||"faucet"===d){w="bathroom"
break A}if("fan"===d){w="bedroom"
break A}if("ptrap"===d){w="kitchen"
break A}w="living"
break A}switch(d){case"outlet":v="Wall outlet"
break
case"switch":v="Light switch"
break
case"gfci":v="GFCI outlet"
break
case"fan":v="Ceiling fan"
break
case"ptrap":v="Sink drain"
break
default:v="Faucet"
break}u=A.zx(0,v,w,0,0,1,1,C.a([],x.dY))
u.p4=d
u.go=d==="fan"?"fan":"light"
if(d==="gfci")u.Q=5
u.ch=u.ay=!1
u.Q=w==="bathroom"||w==="kitchen"?5:0
u.ok=!0
u.k1="tv150"
u.p2=!0
u.p3=Math.max(0,D.d.bj(E.kw,new A.bVM()))
this.d=C.a([u],x.Q)},
cVA(){var w,v,u,t,s,r
for(w=this.gr7(),v=w.length,u=0;u<w.length;w.length===v||(0,C.J)(w),++u){t=w[u]
t.fr=t.CW=null
s=t.ay=!0
r=t.c
t.ch=r!=="bathroom"?r==="kitchen":s
t.fy=!1
t.fx.a9(0)
D.d.a9(t.id)}},
c9U(){var w,v,u,t,s,r,q,p=this,o="back",n="bedroom",m="bathroom",l=new C.e4()
l.d_(p.b)
w=new A.bVN()
v=x.dY
u=C.a([B.bLJ,B.bLG,B.bLH],v)
for(t=0;t<7;++t){s=B.cmQ[t]
u.push(new A.ow(!0,o,-150+s.a*50,s.b))}r=p.d=C.a([A.zx(0,"Bedroom 1",n,0,0,2,2,C.a([w.$1(-48)],v)),A.zx(1,"Bedroom 2",n,2,0,2,2,C.a([w.$1(-48)],v)),A.zx(2,"Bathroom 1",m,4,0,1,2,C.a([B.a1r],v)),A.zx(3,"Bedroom 3",n,5,0,2,2,C.a([w.$1(-48)],v)),A.zx(4,"Bathroom 2",m,7,0,2,2,C.a([B.a1r],v)),A.zx(5,"Hall","hall",0,2,9,1,u),A.zx(6,"Bedroom 4",n,0,3,2,2,C.a([w.$1(-48)],v)),A.zx(7,"Bedroom 5",n,2,3,2,2,C.a([w.$1(-48)],v)),A.zx(8,"Bathroom 3",m,4,3,1,2,C.a([B.a1r],v)),A.zx(9,"Kitchen","kitchen",5,3,2,2,C.a([new A.ow(!1,o,-26,5),B.bLL],v)),A.zx(10,"Living room","living",7,3,2,2,C.a([new A.ow(!1,o,-70,5),B.bLK,B.bLI],v)),A.zx(11,"NGMY City","outside",0,5,9,1,C.a([B.bLF],v))],x.Q)
for(v=r.length,t=0;t<r.length;r.length===v||(0,C.J)(r),++t){q=r[t]
u=q.c
if(u==="outside"){p.aVj(q)
continue}q.go=u==="bedroom"?"fan":"light"
q.ay=l.aj()<0.6
q.ch=(u==="bathroom"||u==="kitchen")&&l.aj()<0.7
D.d.hy(q.z,0,3,l.aw(8))
switch(u){case"bathroom":u=5+l.aw(2)
break
case"kitchen":u=5+l.aw(2)
break
case"bedroom":u=2+l.aw(3)
break
case"living":u=l.aw(2)
break
default:u=l.aw(2)
break}q.Q=u
q.as=l.aw(4)
p.aVj(q)}v=p.d
u=v[5]
u.k2=u.k1="tv100"
u.p2=!0
v[3].ay=!0
v[2].ch=!0},
aVj(b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4="plant",a5="roadcross",a6="road",a7="roundabout",a8="house2",a9="bighouse",b0="adboard",b1="flowers",b2=b3.geb(0)/2
switch(b3.c){case"bedroom":b3.dB(0,"rug",0,b3.gh3(0)*0.55)
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
b3.dB(0,a4,b3.geb(0)/2-12,b3.gh3(0)-12)
break
case"outside":for(w=-780;w<=780;w+=40){v=Math.abs(w)<1
b3.dB(0,v?a5:a6,w,420)
b3.dB(0,v?a5:a6,w,860)}for(u=200;u<=820;u+=40){if(Math.abs(u-420)<1||Math.abs(u-860)<1)continue
b3.dB(0,a6,0,u).e=1}for(t=0;t<2;++t){s=B.dpY[t]
for(u=460;u<859;u+=40)b3.dB(0,a6,s,u).e=1}for(t=0;t<3;++t){s=B.dpX[t]
b3.dB(0,a7,s,420)
b3.dB(0,a7,s,860)}r=new A.bVO(b3)
b3.dB(0,"shop",-250,225)
b3.dB(0,"hospital",250,215)
b3.dB(0,"firestation",-480,225)
b3.dB(0,"school",520,210)
for(t=0;t<14;++t){v=B.ddK[t]
w=v.a
u=v.b
if(r.$4(w,u,60,40))b3.dB(0,"billboard",w,u)}for(t=0;t<4;++t){v=B.duf[t]
w=v.a
u=v.b
if(r.$2(w,u))b3.dB(0,a8,w,u)}for(t=0;t<3;++t){v=B.cS0[t]
u=v.a
q=v.b
p=v.c
for(v=u<900,w=-800;w<=800;w+=q){o=Math.abs(w)
if(o<100)continue
if(v&&o>400)continue
if(r.$2(w,u))b3.dB(0,p&&D.o.E(D.k.ec(w,q),2)===0?a9:a8,w,u)}}for(t=0;t<2;++t){v=B.cAa[t]
w=v.a
u=v.b
if(r.$2(w,u))b3.dB(0,a9,w,u)}for(w=-1220;w<=1220;w+=40){if(Math.abs(w)>780){b3.dB(0,a6,w,420)
b3.dB(0,a6,w,860)}b3.dB(0,a6,w,1460)
b3.dB(0,a6,w,1700)}for(u=900;u<1459;u+=40)b3.dB(0,a6,0,u).e=1
v=C.a([],x._)
for(o=b3.x,n=o.length,t=0;t<o.length;o.length===n||(0,C.J)(o),++t){m=o[t]
l=m.b
if(D.d.q(B.Sw,l)||l==="roundabout")v.push(m)}k=new A.bVQ(v,b3)
j=new A.bVR(b3,new A.bVU(b3))
j.$3("gasstation",6,B.d8s)
j.$3("dmv",1,B.dx0)
j.$3("ubstation",3,B.cZQ)
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
f=D.o.E(g*7+v,5)===0?a9:a8
e=B.hJ.h(0,f)
if(k.$4(w,u,e.c,e.d)){b3.dB(0,f,w,u);++i}}++g}++h}for(d=0,t=0;t<11;++t,d=a0){v=B.d1E[t]
a0=d+1
b3.dB(0,v.b,v.a,1560).f=D.o.E(d,6)}for(t=0;t<11;++t,d=a0){v=B.ds5[t]
a0=d+1
b3.dB(0,v.b,v.a,1860).f=D.o.E(d,6)}b3.dB(0,"townsign",0,640)
for(t=0;t<4;++t){v=B.dmr[t]
b3.dB(0,"cornersign",v.a,v.b)}for(t=0;t<5;++t)b3.dB(0,b0,B.dbR[t],2045)
for(t=0;t<4;++t)b3.dB(0,b0,B.dq5[t],-690)
for(t=0;t<4;++t){u=B.cuy[t]
a1=b3.dB(0,b0,-1245,u)
a1.e=1
a1.c=-1245
b3.a4i(0,a1)
a2=b3.dB(0,b0,1245,u)
a2.e=3
a2.c=1245
b3.a4i(0,a2)}for(w=-1200;w<=1200;w+=480){for(t=0;t<4;++t)b3.dB(0,"pole",w,B.cyT[t])
for(v=Math.abs(w)<1100,o=w+240,t=0;t<4;++t){u=B.cG0[t]
if(v)b3.dB(0,"lamppost",o,u)}}b3.dB(0,"car",-300,490).e=2
b3.dB(0,"ambulance",110,345)
b3.dB(0,"firetruck",-385,345)
for(t=0;t<10;++t){v=B.dvT[t]
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
for(t=0;t<6;++t){v=B.cFz[t]
b3.dB(0,"crate",v.a,v.b)}break
case"hall":default:}},
gr7(){var w,v,u,t=C.a([],x.Q),s=this.d
s===$&&C.c()
w=s.length
v=0
for(;v<s.length;s.length===w||(0,C.J)(s),++v){u=s[v]
if(u.c!=="outside")t.push(u)}return t},
gd1w(){var w=this.gr7()
return new C.X(w,new A.bVY(),C.T(w).k("X<1>")).gI(0)},
gcZ_(){var w=this.d
w===$&&C.c()
return new C.X(w,new A.bVX(),C.T(w).k("X<1>")).gI(0)},
gcYZ(){var w=this.d
w===$&&C.c()
return new C.X(w,new A.bVW(),C.T(w).k("X<1>")).gI(0)},
gcRI(){var w=this.gr7()
return new C.X(w,new A.bVV(),C.T(w).k("X<1>")).gI(0)}}
A.Ji.prototype={
S(){var w,v,u,t,s=new C.vj()
$.vM()
s.fX(0)
w=$.aw()
v=$.hDw()
u=x.S
t=C.a([],x.aQ)
return new A.aF9(s,B.aBo,new C.ez("",w),B.dkG,B.nH,B.nH,D.Dq,C.aS(x.N),new C.cw(null,x.eF),v,C.U(u,x.i),C.aS(u),t,D.cM)}}
A.aF9.prototype={
ghx(){var w,v,u=$.HW
if(u!=null){w=u.a
v=this.d
v===$&&C.c()
v=w===v.b
w=v}else w=!1
return w?u:null},
aAG(){var w,v,u=this.ghx()
if(u==null)u=null
else{w=this.d
w===$&&C.c()
v=w.d
v===$&&C.c()
w=u.bgt(w,v[w.e].a)
u=w}this.fr=u==null?B.aBo:u},
gbkb(){var w=this.d
w===$&&C.c()
w=w.gr7()
return new C.X(w,new A.egL(),C.T(w).k("X<1>")).gI(0)},
Z(){var w,v,u,t,s,r=this
r.a3()
w=r.a.r
if(w.length!==0)w=r.d=A.hMK(w)
else{w=$.Et==null
if(w){w=D.o.E(Date.now(),1e5)
$.Et=A.aWZ(w)
r.ek=!0}w=$.Et
w.toString
w=r.d=w}v=r.a
if(v.r.length===0)u=!0
else u=v.d||w.c
w.c=u
u=new A.uE(-0.05,0.1,120,B.h4v,$.aw())
u.f=560
r.e=u
v=v.f
u=v==="city"
if(u)w.e=11
if(v.length!==0&&!u){w=w.gr7()
t=new C.X(w,new A.egI(r),C.T(w).k("X<1>"))
if(!t.gav(0)){w=r.d
w===$&&C.c()
w.e=t.gH(0).a}}A.aWM($.ai5)
A.ho6()
r.ajq()
r.aAG()
w=r.d
w===$&&C.c()
v=w.d
v===$&&C.c()
w=v[w.e]
v=r.gbkb()
u=r.d
s=u.d
s===$&&C.c()
r.f=A.hy3(w,s[u.e].c!=="outside",B.aSh,"look",v,r.fr,0)
r.aeM(!0)
r.Zi()
r.fx=C.de(D.h0,new A.egJ(r))
$.aV.x1$.push(new A.egK(r))},
t(){var w,v=this
v.b5n(!0)
w=v.p1
if(w!=null)w.bQ(0)
w=v.RG
if(w!=null)w.bQ(0)
w=v.b7
if(w!=null)w.bQ(0)
w=v.ch
if(w!=null)w.a1(0)
w=v.dx
if(w!=null)w.a1(0)
w=v.fx
if(w!=null)w.a1(0)
w=v.bw
if(w!=null)w.a1(0)
w=v.P
if(w!=null)w.a1(0)
v.a2()},
c3L(){var w=this.d
w===$&&C.c()
switch(w.a){case"switch":w="The ceiling light is already in. Tap the red switch on the wall and wire it. Then flip it to see the light work."
break
case"outlet":w="Tap the red outlet on the wall and wire it. Then plug in a lamp or a TV to test it."
break
case"gfci":w="Tap the red GFCI outlet and wire it. Then plug in a hair dryer to test it."
break
case"fan":w="Tap the ceiling fan and wire it. Then flip the wall switch and watch it spin."
break
case"ptrap":w="The sink has no drain yet. Tap the sink and build the drain under it."
break
default:w="The faucet is not connected yet. Tap the sink and connect the hoses."
break}return w},
aeM(d){var w,v,u,t,s,r,q,p=this,o=p.e
o===$&&C.c()
o.z=!0
w=p.d
w===$&&C.c()
v=w.d
v===$&&C.c()
u=v[w.e]
if(p.z){t=new A.r(0,40,u.gh3(0)*0.5)
s=Math.max(u.geb(0),u.gh3(0))*0.6
o.e=20
o.f=Math.max(Math.max(u.geb(0),u.gh3(0))*2,380)
o.r=new C.dW([-u.geb(0)/2,u.geb(0)/2,0,u.gh3(0),130])
o.at=-1.2
o.ax=1.2
o.pg(!0)
r=0.12
q=-0.05}else if(u.c==="outside"){o.e=30
o.f=2400
o.r=null
o.at=0.03
o.ax=1.35
o.pg(!0)
t=B.h4s
s=540
r=0.35
q=-0.25}else if(p.x){t=new A.r(0,46,u.gh3(0)*0.1)
s=u.gh3(0)*0.74
o.e=6
o.f=Math.max(Math.max(u.geb(0),u.gh3(0))*2,380)
o.r=new C.dW([-u.geb(0)/2,u.geb(0)/2,0,u.gh3(0),130])
o.at=0.02
o.ax=1.35
o.pg(!0)
r=0.05
q=0}else{t=new A.r(0,30,u.gh3(0)*0.45)
s=(u.geb(0)*1.2>u.gh3(0)*1.4?u.geb(0)*1.2:u.gh3(0)*1.4)+30
o.e=6
o.f=560
o.r=null
o.at=0.1
o.ax=1.35
o.pg(!0)
r=0.5
q=-0.12}o=p.e
if(d){o.d=t
o.c=s
o.y=1
o.a=q
o.b=r}else o.fW(s,r,t,q)},
yl(){return this.aeM(!1)},
bPB(d,e){var w,v,u,t,s,r,q,p,o=this,n=o.e
n===$&&C.c()
w=n.bgF(d,e)
if(w==null)return
n=o.d
n===$&&C.c()
v=n.d
v===$&&C.c()
u=v[n.e]
t=o.aP
if(t!=null){n=t.at
n===$&&C.c()
n.at=new C.y(D.k.F(w.a,-138,138),D.k.F(w.c,12,316))}else if(o.z){s=D.k.F(w.a,-u.geb(0)/2+10,u.geb(0)/2-10)
r=D.k.F(w.c,10,u.gh3(0)-10)
o.e.D8(new A.r(s,48,r))}else{n=u.c==="outside"
if(n&&o.aQ&&o.aI!=null){n=o.aI
n.toString
n.at=new C.y(D.k.F(w.a,-u.geb(0)/2+12,u.geb(0)/2-12),D.k.F(w.c,-290,u.gh3(0)-12))}else{v=o.e
q=w.a
p=w.c
if(n)v.a8_(Math.max(70,v.c*0.4),0.32,new A.r(q,30,p))
else{n=D.k.F(q,-u.geb(0)/2+8,u.geb(0)/2-8)
p=D.k.F(p,8,u.gh3(0)-8)
v.a8_(Math.max(36,o.e.c*0.35),0.2,new A.r(n,40,p))}}}A.fD(560,50,0.25,"tri")},
iL(){var w,v,u,t,s,r,q,p,o=this
o.aAG()
w=o.aP
if(w!=null){v=w.ay
v===$&&C.c()}else{v=o.d
v===$&&C.c()
u=v.d
u===$&&C.c()
v=u[v.e]
u=o.r
t=o.Q
s=o.gbkb()
if(!o.z)if(o.x){r=o.d
q=r.d
q===$&&C.c()
r=q[r.e].c!=="outside"&&o.cx==null}else r=!1
else r=!0
q=o.fr
p=o.bF
v=A.hy3(v,r,p!=null?C.ey([100+p.a],x.S):B.aSh,u,s,q,t)}o.f=v},
ei(d,e){var w=this,v=w.ch
if(v!=null)v.a1(0)
w.m(new A.efu(w,d,e))
w.ch=C.cB(D.eh,new A.efv(w))},
iM(d){return this.ei(d,!0)},
Q3(d){this.m(new A.efw(this,d))
A.fD(660,50,0.25,"tri")},
ayt(d,e){var w,v=this,u=v.d
u===$&&C.c()
if(d!==u.e){u=u.d
u===$&&C.c()
u=d>=u.length}else u=!0
if(u)return
if(v.aQ&&d!==11)v.a31()
v.cO=v.bF=v.aP=null
if(!e&&v.cx!=null)v.Sq()
v.m(new A.ee_(v,d))
u=v.d
w=u.d
w===$&&C.c()
if(w[u.e].c==="outside")v.aI=v.b_g()
v.yl()
A.fD(520,60,0.25,"tri")},
AT(d){return this.ayt(d,!1)},
aYV(d){var w,v,u,t=this
if(d===700){w=t.d
w===$&&C.c()
v=w.d
v===$&&C.c()
return v[w.e].gao9()}if(d===701){w=t.d
w===$&&C.c()
v=w.d
v===$&&C.c()
w=v[w.e]
return w.p4.length!==0||w.IA(1)}if(d===702){w=t.d
w===$&&C.c()
v=w.d
v===$&&C.c()
return v[w.e].gMq()}if(d===703){w=t.d
w===$&&C.c()
v=w.d
v===$&&C.c()
return v[w.e].ga6p()}if(d>=800&&d<820){u=d-800
w=t.d
w===$&&C.c()
v=w.d
v===$&&C.c()
w=v[w.e].id
return u<w.length&&w[u].gx_()}if(d===720){w=t.d
w===$&&C.c()
v=w.d
v===$&&C.c()
return v[w.e].gao9()}if(d===721){w=t.d
w===$&&C.c()
v=w.d
v===$&&C.c()
w=v[w.e]
return w.p4.length!==0||w.IA(1)}if(d>=722&&d<728){u=d-720-2
w=t.d
w===$&&C.c()
v=w.d
v===$&&C.c()
w=v[w.e].id
return u<w.length&&w[u].gx_()}w=t.d
w===$&&C.c()
v=w.d
v===$&&C.c()
return v[w.e].gkT()},
bah(){var w,v,u=this,t=u.d
t===$&&C.c()
w=t.d
w===$&&C.c()
v=w[t.e].go==="fan"
u.m(new A.efY(u))
t=u.d
w=t.d
w===$&&C.c()
if(w[t.e].fy)t=v?"The fan spins.":"The light is on."
else t=v?"The fan stops.":"The light is off."
u.iM(t)
t=u.d
w=t.d
w===$&&C.c()
A.fD(w[t.e].fy?900:500,60,0.25,"tri")},
ca2(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this
if(a0===0)return
if(a0>=19e3&&a0<19004){w=a0-19e3
v=d.d
v===$&&C.c()
u=v.d
u===$&&C.c()
t=u[v.e]
v=D.o.E(w,2)===0?-1:1
s=v*(t.geb(0)/2-14)
r=w<2?14:t.gh3(0)-14
q=Math.atan2(-s,-(t.gh3(0)/2-r))
w=Math.cos(0.12)
v=Math.sin(q)
u=Math.sin(0.12)
p=Math.cos(0.12)
o=Math.cos(q)
n=d.e
n===$&&C.c()
n.e=6
n.fW(26,0.12,new A.r(s+26*w*v,106-26*u,r-26*p*o),q)
d.ei("You are looking from the camera in the corner. Drag to look round, or tap a camera for another corner.",!0)
A.fD(700,70,0.25,"tri")
return}if(a0>=2e4&&a0<23e3){w=d.d
w===$&&C.c()
v=w.d
v===$&&C.c()
m=v[w.e].Cc(a0-2e4)
if(m!=null)d.bVR(m)
return}if(a0===19502){w=d.aP
if((w==null?null:w.a==="tower")===!0)d.m(new A.eeX(d))
return}if(a0===19500||a0===19501){l=d.aP
if(l!=null)if(l.c)d.YR(l)
else d.ei("This one works: the house has power.",!0)
return}if(a0>=900&&a0<920){d.cty(a0-900)
return}if(a0>=100&&a0<200){w=d.d
w===$&&C.c()
v=w.d
v===$&&C.c()
k=v[w.e].Cc(a0-100)
w=d.d
v=w.d
v===$&&C.c()
u=!1
if(v[w.e].c==="outside")if(d.r!=="furniture")if(k!=null){w=k.b
w=w==="hospital"||w==="shop"}else w=u
else w=u
else w=u
if(w){d.Am(k.b)
return}if(d.r!=="furniture")return
d.m(new A.eeY(d,a0))
w=d.d
v=w.d
v===$&&C.c()
m=v[w.e].Cc(d.Q)
if(m!=null)d.iM(B.hJ.h(0,m.b).a+": move it with the arrows.")
return}if(a0===300||a0===301||a0===302){if(d.r!=="walls")return
d.m(new A.eeZ(d,a0))
d.iM("Wall picked. Choose a paint colour.")
return}if(a0>=600&&a0<620){j=a0-600
w=d.d
w===$&&C.c()
v=w.d
v===$&&C.c()
if(j>=v[w.e].w.length)return
if(d.r==="doors"){d.m(new A.ef_(d,j))
w=d.d
v=w.d
v===$&&C.c()
A.fD(v[w.e].at.q(0,j)?700:450,70,0.25,"tri")
return}d.bPu(j)
return}w=a0===700
v=!w
i=!0
if(v)if(a0!==701){if(a0!==702)if(a0!==703)if(!(a0>=800&&a0<820))u=a0>=720&&a0<728
else u=i
else u=i
else u=i
i=u}if(d.w&&i){h=d.aYV(a0)
A.fD(h?1400:500,160,0.25,"tri")
w=h?"The tester glows and beeps: LIVE, 120 volts. Never touch a live wire. Switch the breaker off first.":"The tester stays dark: no power here. It still needs wiring."
d.ei(w,!h)
return}if(!v||a0===701){if(d.aYV(a0))d.aAg(w?0:1)
else d.aUZ()
return}if(a0>=800&&a0<820){j=a0-800
w=d.d
w===$&&C.c()
v=w.d
v===$&&C.c()
w=v[w.e].id
if(j>=w.length)return
g=w[j]
if(!g.gx_())d.akG(j)
else if(g.a==="switch")d.bah()
else d.aAg(2+j)
return}if(a0===702||a0===703){w=d.d
w===$&&C.c()
v=w.d
v===$&&C.c()
if(v[w.e].gMq()){w=d.d
v=w.d
v===$&&C.c()
w=!v[w.e].ga6p()}else w=!0
if(w)d.aUZ()
else d.bah()
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
if(!w[u].p2){d.m(new A.ef0(d))
w=d.d
v=w.d
v===$&&C.c()
d.iM("The TV is on and playing "+E.kw[v[w.e].p3].a+".")}else{e=A.aQg(f)
w=d.c
w.toString
K.hfa(w,0,e.a,!0,D.ys,e.b)}return}if(a0>=720&&a0<728){w=d.d
w===$&&C.c()
v=w.d
v===$&&C.c()
u=a0-720
f=v[w.e].fx.h(0,u)
if(f==null)return
e=A.aQg(f)
if(e.d>0||e.e){w=d.c
w.toString
K.hfa(w,0,e.a,!0,D.ys,e.b)}else d.aAg(u)
return}if(a0===710||a0===711||a0===712||a0===713){w=d.d
w===$&&C.c()
v=w.d
v===$&&C.c()
if(!v[w.e].gjW())if(d.d.a.length!==0)d.EA()
else d.a0z()
else{w=d.f
w===$&&C.c()
j=w.b.h(0,a0)
if(j!=null)d.iM(j.a+": "+j.b)}}},
bPu(d){var w,v,u,t=this.d
t===$&&C.c()
w=t.d
w===$&&C.c()
v=w[t.e].w[d].d
u=v<w.length?w[v].b:"the next room"
t=this.c
t.toString
return C.bT(E.mH,null,new A.edt(this,u,d,v),t,!0,!0,!1,D.ke,!1,!1,x.H)},
bRA(){var w,v,u=this
u.m(new A.edC(u))
if(!u.aQ){w=u.d
w===$&&C.c()
v=w.d
v===$&&C.c()
w=v[w.e].c==="outside"}else w=!1
if(w)u.Sk()
w=u.d
w===$&&C.c()
v=w.d
v===$&&C.c()
if(v[w.e].c!=="outside")u.yl()},
bRC(){this.m(new A.edD(this))
this.ei("Phone view: the city fills your phone standing up. Pick a drone film and start filming.",!0)},
bRX(){var w=this
if(w.p4)w.a30()
w.m(new A.edE(w))},
cmT(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.c
n.toString
w=C.aG(n,o,x.w).w
n=new A.eeQ(p)
v=x.p
u=C.a([C.bR(0,d,0,0,0)],v)
t=w.r.b
if(p.fD)u.push(C.ap(o,C.aA(D.iM,B.fcT,D.y,!1,o,new A.eeT(p),o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!1,D.a4),o,o,0,o,t,o))
else{s=n.$2(D.cz,p.gbRW())
r=p.p4?D.zh:D.CI
r=n.$2(r,new A.eeU(p))
q=p.jS?B.apx:P.CM
u.push(C.ap(o,C.A(C.a([s,r,n.$2(q,new A.eeV(p)),n.$2(D.uS,new A.eeW(p))],v),D.m,o,D.e,D.i,0,o,o),o,o,10,o,t+8,o))}return C.c5(o,D.w,new C.an(D.a0,o,D.ac,D.t,u,o),o,!1,!1,o,o)},
bJT(d){var w,v,u,t,s,r,q=this,p=null,o=q.c
o.toString
w=C.aG(o,p,x.w).w
o=new A.ed3(q)
if(q.er){v=w.a
u=v.b
v=v.a
t=q.ac
s=w.am2(D.ag,new C.av(u,v),D.ag)
return C.c5(p,D.w,C.at(new C.wz(t,C.q4(new C.a5(u,v,new C.an(D.a0,p,D.ac,D.t,C.a([C.bR(0,d,0,0,0),C.ap(p,C.aA(D.iM,B.fcZ,D.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,o,p,p,p,p,p,p,!1,D.a4),p,p,0,p,0,p)],x.p),p),p),s),p),p,p,p),p,!1,!1,p,p)}r=q.f3?w.r.b:0
return C.c5(p,D.w,new C.an(D.a0,p,D.ac,D.t,C.a([C.bR(0,d,0,0,0),C.ap(p,C.aA(D.iM,B.fd_,D.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,o,p,p,p,p,p,p,!1,D.a4),p,p,0,p,r,p)],x.p),p),p,!1,!1,p,p)},
bU1(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.c
k.toString
w=C.aG(k,l,x.w).w
k=w.a
v=k.b
k=k.a
u=new A.edO(m)
t=m.ac
s=w.am2(D.ag,new C.av(v,k),D.ag)
r=x.p
q=C.a([C.bR(0,d,0,0,0)],r)
if(m.fD)q.push(C.ap(l,C.aA(D.iM,B.fcS,D.y,!1,l,new A.edR(m),l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,!1,D.a4),l,l,0,l,0,l))
else{p=u.$2(Aj.a2r,new A.edS(m))
o=u.$2(D.a2Q,new A.edT(m))
n=m.jS?B.apx:P.CM
r=C.a([p,o,u.$2(n,new A.edU(m)),u.$2(D.uS,new A.edV(m))],r)
p=m.d
p===$&&C.c()
o=p.d
o===$&&C.c()
if(o[p.e].c==="outside"){p=m.p4?D.zh:D.CI
r.push(u.$2(p,new A.edW(m)))}if(m.gakH())r.push(C.aA(l,C.p(l,B.bZx,D.f,l,l,new C.o(D.cV,l,C.L(D.c,D.r,1),l,l,l,D.a7),l,40,l,D.iK,l,l,l,40),D.y,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,m.gaRO(),l,l,l,l,l,l,!1,D.a4))
q.push(C.ap(l,C.A(r,D.m,l,D.e,D.i,0,l,l),l,l,10,l,10,l))}return C.c5(l,D.w,C.at(new C.wz(t,C.q4(new C.a5(v,k,new C.an(D.a0,l,D.ac,D.t,q,l),l),s),l),l,l,l),l,!1,!1,l,l)},
cDV(d){var w,v,u,t=B.D9[d.b]
if(d.c==="power")w=t.c
else{v=t.d
w=v>=0?v:t.c}v=this.d
v===$&&C.c()
v=v.d
v===$&&C.c()
u=w<v.length?v[w].b:"the house"
v=this.c
v.toString
return C.bT(D.av,null,new A.efX(this,t,new A.efW(),d,u,w),v,!0,!0,!0,L.a9e,!1,!1,x.H)},
c4V(){var w,v,u=this,t=u.d
t===$&&C.c()
w=t.d
w===$&&C.c()
v=w[t.e]
if(v.c==="outside")return
u.m(new A.eed(u))
t=u.e
t===$&&C.c()
t.e=20
t.f=300
t.at=-0.95
t.ax=1.35
t.pg(!0)
t=u.e
w=v.gh3(0)
t.fW(Math.max(v.geb(0),v.gh3(0))*0.75,-0.5,new A.r(0,118,w*0.5),-0.05)
u.ei("Looking up at the ceiling from the floor. Drag to look round.",!0)},
gpq(){var w,v,u=this.d
u===$&&C.c()
u=u.d
u===$&&C.c()
w=new C.X(u,new A.ec2(),C.T(u).k("X<1>"))
if(!w.gag(0).C())return null
v=w.gH(0)
u=v.dx
return u==null?v.dx=A.hKu(v):u},
aT4(d){var w,v,u=this
if(d==null)return
w=d.c
if(w>0){v=u.ghx()
if(v!=null)v.r+=w}w=d.a
A.fD(w==="pickup"?700:940,120,0.25,"tri")
u.ei(d.b,w!=="expired")
u.m(u.gj2())},
gKK(){var w,v,u,t=this.d
t===$&&C.c()
t=t.d
t===$&&C.c()
w=new C.X(t,new A.ego(),C.T(t).k("X<1>"))
if(!w.gag(0).C())return null
v=w.gH(0)
t=v.dy
if(t==null){t=C.a([],x.bz)
u=new C.e4()
u.d_(11)
t=new A.cCT(v,u,t)
t.bBV(v,11)
v.dy=t}return t},
bI0(){var w,v,u=this,t=u.ghx()
if(t==null)return
w=u.c6
if(w.w)u.ei("You already have your Uber licence.",!0)
else{v=t.r
if(v<40)u.ei("The licence costs 40 points. You have "+v+". Earn more with jobs and deliveries.",!1)
else{t.r=v-40
w.w=!0
A.fD(880,140,0.25,"tri")
u.ei("You passed! Here is your Uber licence. Drive a car to an Uber station and the people waiting will get in.",!0)}}u.m(new A.ect())
w=u.aP
if(w!=null)w.B(u.ghx())},
c3Q(){var w,v,u,t,s=this,r=null,q=s.ghx(),p=s.c6.w,o=D.w.j(0.55),n=C.n(28),m=C.L(D.aW,D.r,1),l=x.p,k=C.A(C.a([B.fIa,D.at,B.bIE,C.aA(r,D.t_,D.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new A.ee8(s),r,r,r,r,r,r,!1,D.a4)],l),D.m,r,D.e,D.i,0,r,r),j=C.d(p?"You are a licensed Uber driver. Drive a car to an Uber station (the yellow and black shelter): the people waiting get in, and you take them to their house. The fare is paid when you get there.":"With the Uber licence you can take the people waiting at the Uber stations home and be paid for every ride. The car needs gas, so watch the gas bar.",r,r,r,r,r,r,B.fo0,r,r,r),i=q==null,h=i?r:q.r
h=C.d("You have "+(h==null?0:h)+" \u2b50",r,r,r,r,r,r,B.fw2,r,r,r)
w=p?new A.ee9(s):s.gbI_()
if(p)v=D.bg
else{v=i?r:q.r
v=(v==null?0:v)>=40?D.bs:D.bB}u=C.n(16)
t=p?"\u2713 Licensed":"Get the licence \xb7 40 \u2b50"
if(!p){i=i?r:q.r
i=(i==null?0:i)>=40}else i=!0
return C.p(D.A,C.p(r,C.x(C.a([k,D.X,j,D.X,h,D.X,C.aA(r,C.p(D.A,C.d(t,r,r,r,r,r,r,C.l(r,r,i?D.w:D.bV,r,r,r,r,r,r,r,r,16,r,r,D.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),D.f,r,r,new C.o(v,r,r,u,r,r,D.n),r,50,r,r,r,r,r,r),D.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,w,r,r,r,r,r,r,!1,D.a4)],l),D.al,r,D.e,D.O,0,D.p),D.f,r,r,new C.o(r,r,m,n,r,B.zB,D.n),r,r,r,D.bE,D.bR,r,r,330),D.f,o,r,r,r,r,r,r,r,r,r,r)},
cGn(d){var w,v,u,t=this,s=t.gKK()
if(s!=null){w=s.c
w===$&&C.c()
w=w.length===0}else w=!0
if(w)return
v=s.cQE(d.f,d.r,t.CW.gf_()/1000)
if(v>0){w=t.ghx()
if(w!=null)w.r+=v
A.fD(940,140,0.25,"tri")
t.ei("\ud83d\ude96 You dropped the passenger at the house. Fare: +"+v+" points. Thank you!",!0)
t.m(t.gj2())
return}if(s.f==null&&s.arg(d.f,d.r)!=null&&D.d.aX(s.e,new A.egp(s,d))){w=t.c6
if(!w.w){if(Date.now()-t.k1>2e4){t.k1=Date.now()
t.ei("People are waiting for a ride, but you need an Uber licence first. Get it at the licence office.",!1)}return}if(w.b<=0)return
u=s.cYR(d.f,d.r)
if(u!=null){A.fD(700,100,0.25,"tri")
t.ei("\ud83d\ude96 "+u.b+" got in. Take them to their house (follow the yellow line): "+u.f+" points.",!0)
t.m(t.gj2())}}},
cGm(){var w,v,u,t,s,r,q,p=this,o=p.gKK()
if(o==null)return
w=o.f
if(w!=null){p.ei("\ud83d\ude96 "+w.b+" is in the car and wants to go home: "+w.f+" points. Follow the yellow line to the house.",!0)
return}if(!p.c6.w){v=C.a([],x._)
u=p.d
u===$&&C.c()
t=u.d
t===$&&C.c()
u=t[u.e].x
t=u.length
s=0
for(;s<u.length;u.length===t||(0,C.J)(u),++s){r=u[s]
if(r.b==="dmv")v.push(r)}if(v.length===0){p.ei("There is no licence office in this town yet.",!1)
return}p.SE(D.d.gH(v))
p.ei("You are at the licence office. Walk in through the door and onto the blue mat to get your Uber licence.",!0)
return}v=o.c
v===$&&C.c()
if(v.length===0){p.ei("There is no Uber station in this town yet.",!1)
return}q=p.aI
v=C.C(v,x.eB)
D.d.aZ(v,new A.egn(q))
p.SE(D.d.gH(v))
p.ei("You are at an Uber station. Get in the car parked next to it and drive up to the people waiting. They get in by themselves.",!0)},
aQn(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=" points for the ",i=k.ghx()
if(i==null)return
w=d.a
v=w==="bread"
if(v||w==="medicine"){u=i.aEP(v?"food":"medicine")
t=!D.a.a0(u,"You need")}else{v=d.r
t=!1
if(v>0){w=w==="tank"
s=w?A.hcD(k.c6.b):d.e
r=k.c6
q=r.b
if(q>=0.99)u="The tank is already full."
else{p=i.r
o=p<s
if(o)u="You need "+s+" points for that. Earn more with jobs and deliveries."
else{i.r=p-s
r.b=D.k.F(q+v,0,1)
r.b0()
v=""+s
u=w?"You filled the tank for "+v+" points.":"You put gas in the car. -"+v+" points."}t=!o}}else if(d.x){w=k.c6
if(!w.f)u="You feel fine: you do not need pills."
else{v=i.r
r=d.e
q=v<r
if(q)u="You need "+r+j+d.c.toLowerCase()+"."
else{i.r=v-r
w.f=!1
w.b0()
u="You took the pills. You feel well again."}t=!q}}else{w=d.f
v=w>0
if(v){r=k.c6
n=r.a<0.98||r.c>0||r.d>0}else n=!1
r=d.w
q=r>0
m=q&&k.c6.e<0.97
if(!n&&!m)u=v?"You are not hungry: your energy is full.":"You are not thirsty."
else{p=i.r
o=d.e
l=p<o
if(l)u="You need "+o+j+d.c.toLowerCase()+"."
else{i.r=p-o
if(v){v=k.c6
w=D.k.F(v.a+w,0,1)
v.a=w
if(w>=0.3)v.d=v.c=0
v.b0()}if(q){w=k.c6
w.e=D.k.F(w.e+r,0,1)
w.b0()}w=k.c6
w=w.d>0||w.c>0?"Still too tired: eat more.":"You feel stronger."
u="You had the "+d.c.toLowerCase()+". "+w}t=!l}}}A.fD(t?880:300,90,0.25,"tri")
k.ei(u,t)
w=k.aP
if(w!=null)w.B(k.ghx())
k.m(k.gj2())},
cyg(){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.ghx(),i=l.aP
i=i==null?k:i.b.b==="gasstation"
w=i===!0
i=l.c
i.toString
v=C.aG(i,k,x.w).w.a
i=v.a
u=i>v.b*1.15
t=new A.efz(u,new A.efA(l,j,u))
s=C.d(w?"\u26fd":"\ud83d\uded2",k,k,k,k,k,k,D.xc,k,k,k)
r=C.d(w?"NGMY Gas shop":"NGMY Mart",k,k,k,k,k,k,D.fB,k,k,k)
q=j==null?k:j.r
p=x.p
q=C.a([s,D.at,C.E(C.x(C.a([r,C.d("You have "+(q==null?0:q)+" \u2b50",k,k,k,k,k,k,B.fqs,k,k,k)],p),D.E,k,D.e,D.i,0,D.p),1)],p)
if(u)q.push(new C.a5(190,k,new A.V3(l.c6,w,14,k),k))
q.push(D.be)
q.push(C.aA(k,B.bWa,D.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new A.efy(l),k,k,k,k,k,k,!1,D.a4))
o=C.A(q,D.m,k,D.e,D.i,0,k,k)
n=t.$2("FOOD AND DRINKS (energy)",B.dd7)
s=w?"GAS":"HEALTH AND THE TOWN"
m=t.$2(s,w?B.dpN:B.dmv)
t=D.w.j(0.55)
i=u?Math.min(i-24,820):340
s=C.n(28)
r=C.L(D.aW,D.r,1)
q=C.a([o,D.X],p)
if(!u)D.d.v(q,C.a([new A.V3(l.c6,w,14,k),D.P],p))
if(u)q.push(C.A(C.a([C.E(n,5),D.ev,C.E(m,3)],p),D.E,k,D.e,D.i,0,k,k))
else D.d.v(q,C.a([n,m],p))
return C.p(D.A,C.eL(D.A,C.p(k,C.x(q,D.al,k,D.e,D.O,0,D.p),D.f,k,k,new C.o(k,k,r,s,k,B.zB,D.n),k,k,k,D.bh,D.bR,k,k,i),D.f,D.e6),D.f,t,k,k,k,k,k,k,k,k,k,k)},
cju(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=this,a1=null,a2=a0.gpq()
a2.toString
w=a0.aI
v=w==null
u=v?a1:w.f
if(u==null)u=0
t=v?a1:w.r
if(t==null)t=300
s=a2.x
r=new A.eey()
q=new A.eeu(a0,u,t,r,new A.eex(),s,a2)
p=a2.d0k()
o=["\ud83e\udd47","\ud83e\udd48","\ud83e\udd49","4","5","6"]
v=D.w.j(0.55)
n=C.n(28)
m=C.L(D.aW,D.r,1)
l=x.p
k=C.a([C.A(C.a([B.fPC,D.at,C.E(C.x(C.a([B.fRr,C.d("Race "+a2.as+": first to 8 wins +40",a1,a1,a1,a1,a1,a1,I.tw,a1,a1,a1)],l),D.E,a1,D.e,D.i,0,D.p),1),C.aA(a1,D.t_,D.y,!1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,new A.ees(a0),a1,a1,a1,a1,a1,a1,!1,D.a4)],l),D.m,a1,D.e,D.i,0,a1,a1),D.af],l)
if(s!=null){j=D.bs.j(0.14)
i=C.n(16)
h=C.L(D.bs,D.r,1)
g=s.b
f=C.d(A.Lv(g).b,a1,a1,a1,a1,a1,a1,D.KA,a1,a1,a1)
k.push(C.p(a1,C.A(C.a([f,D.at,C.E(C.d(s.r?"You have the "+A.Lv(g).c.toLowerCase()+". Take it to the house (follow the yellow line).":"Go to the "+r.$1(s.c).toLowerCase()+" to pick up the "+A.Lv(g).c.toLowerCase()+".",a1,a1,a1,a1,a1,a1,D.pM,a1,a1,a1),1),C.aA(a1,B.fFH,D.y,!1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,new A.eet(a0,a2),a1,a1,a1,a1,a1,a1,!1,D.a4)],l),D.m,a1,D.e,D.i,0,a1,a1),D.f,a1,a1,new C.o(j,a1,h,i,a1,a1,D.n),a1,a1,a1,D.d3,D.bh,a1,a1,a1))}else{j=C.a([B.fUf,D.P],l)
for(a2=a2.rh(0,u,t),a2=C.cW(a2,0,C.dz(6,"count",x.S),C.T(a2).c),i=a2.$ti,a2=new C.bO(a2,a2.gI(0),i.k("bO<ak.E>")),i=i.k("ak.E");a2.C();){h=a2.d
j.push(q.$1(h==null?i.a(h):h))}D.d.v(k,j)}k.push(D.an)
k.push(B.fJ5)
k.push(D.P)
for(e=0;e<p.length;++e){a2=p[e].a==="You"?D.aJ.j(0.18):D.c.j(0.05)
j=new C.aP(12,12)
i=p[e]
h=i.a
g=h==="You"
d=new C.ay(g?D.aJ:D.dt,1,D.r,-1)
f=C.d(o[e],a1,a1,a1,a1,a1,a1,D.aUf,a1,a1,a1)
g=g?D.u:D.V
k.push(C.p(a1,new C.c7(D.aM,D.e,D.i,D.m,a1,D.p,a1,0,C.a([new C.a5(26,a1,f,a1),new C.by(1,D.bc,C.d(h,a1,a1,a1,a1,a1,a1,new C.G(!0,D.c,a1,a1,a1,a1,a1,g,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1),a1),C.d(""+i.b+"/8",a1,a1,a1,a1,a1,a1,M.AL,a1,a1,a1),D.at,C.d(""+i.c+" pts",a1,a1,a1,a1,a1,a1,B.aUu,a1,a1,a1)],l),a1),D.f,a1,a1,new C.o(a2,a1,new C.bG(d,d,d,d),new C.bg(j,j,j,j),a1,a1,D.n),a1,a1,a1,D.eK,D.k0,a1,a1,a1))}return C.p(D.A,C.eL(D.A,C.p(a1,C.x(k,D.al,a1,D.e,D.O,0,D.p),D.f,a1,a1,new C.o(a1,a1,m,n,a1,B.zB,D.n),a1,a1,a1,D.bE,D.bR,a1,a1,340),D.f,D.e6),D.f,v,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1)},
bVO(d){var w,v,u=this,t=u.aP
if(t==null||t.a!=="tower"||u.ok!=null)return
w=t.f
if(d===w){u.m(new A.edX(u))
return}u.p2=t
w=new A.f4j(w,d,Date.now())
v=t.at
v===$&&C.c()
w.r=v.f
w.w=v.r
u.ok=w
t.y=u.bf=u.b6=0
u.m(new A.edY(u))
w=u.e
w===$&&C.c()
w.fW(175,0.28,B.h4w,0)
u.ei("Going to level "+d+": walking to the elevator.",!0)
w=u.p1
if(w!=null)w.bQ(0)
w=new A.a5C(u.gcug(),A2.C_)
w.fX(0)
u.p1=w},
E1(d){var w=D.k.F(d,0,1)
return w*w*(3-2*w)},
cuh(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=null,a1="tri",a2=d.ok,a3=d.p2
if(a2==null||a3==null||d.c==null){w=d.p1
if(w!=null)w.bQ(0)
return}v=Date.now()
u=(v-a2.c)/1000
w=a2.b
t=a2.a
s=w>t
switch(a2.d){case 0:r=a3.at
r===$&&C.c()
if(u<1){q=d.E1(u/1)
p=a2.r
r.f=p*(1-q)
o=a2.w
n=62-o
r.r=o+n*q
r.w=Math.atan2(-p,n)
r.x=!0}else if(u<1.8){r.f=0
r.r=62
r.w=3.141592653589793
r.x=!1}else if(u<2.5){r.r=62-44*d.E1((u-1.8)/0.7)
r.w=3.141592653589793
r.x=!0}else r.x=!1
r.y+=0.3
a3.y=d.E1((u-0.8)/0.8)
if(u>=2.6){a2.d=1
a2.c=v
a2.f=3+D.o.F(Math.abs(w-t)-1,0,99)*1.1
a2.e=t
m=A.h3U("cabin",a3.b,!1)
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
d.aP=m
w=s?"\u25b2":"\u25bc"
d.p3.sp(0,w+"  "+C.w(t===1?"L":t))
d.m(d.gj2())
w=d.e
w===$&&C.c()
w.z=!1
w.r=B.f3Z
w.Hy(54,0.1,B.h4K,3.141592653589793)
A.fD(520,70,0.25,a1)}break
case 1:m=d.aP
if(m==null||m.a!=="cabin")return
l=a2.f
if(u<0.9)r=1-d.E1(u/0.9)
else{r=l-0.9
r=u>r?d.E1((u-r)/0.9):0}m.y=r
k=u>0.9&&u<l-0.9
if(k){j=D.o.F(t+D.k.V((w-t)*d.E1((u-0.9)/(l-1.8))),1,m.gMg())
if(j!==a2.e){m.z=a2.e=j
t=s?"\u25b2":"\u25bc"
d.p3.sp(0,t+"  "+C.w(j===1?"L":j))
A.fD(500+j*22,45,0.2,a1)}}i=k?1:0.25
t=d.e
t===$&&C.c()
r=Math.sin(u*5.3)
p=Math.sin(u*2.1)
o=Math.sin(u*0.9)
n=Math.sin(u*8)
t.Hy(54+p*1.2,0.1+Math.sin(u*6.1)*0.007*i,new A.r(0,52+r*0.5*i,52),3.141592653589793+o*0.5+n*0.01*i)
if(u>l-0.9&&!a2.x){a2.x=!0
m.z=w
d.p3.sp(0,C.w(w===1?"L":w))
A.fD(880,140,0.3,a1)
C.bP(D.fS,new A.efq(),x.H)}if(u>=l){a2.d=2
a2.c=v
h=a3.b.a
t=d.d
t===$&&C.c()
r=t.d
r===$&&C.c()
t=r[t.e].cy.h(0,h)
g=d.gIL().h(0,h*100+w)
a3.f=D.o.F(w,1,a3.gMg())
a3.c=t===w
w=a3.at
w===$&&C.c()
w.f=0
w.r=112
w.w=3.141592653589793
a3.x=!1
a3.CW.a9(0)
a3.B(a3.ch)
d.ajJ(a3,g)
a3.B(d.ghx())
w.f=0
w.r=16
w.w=0
w.x=!1
a3.y=1
d.aP=a3
d.m(d.gj2())
d.e.Hy(175,0.28,B.h4x,0)}break
default:w=a3.at
w===$&&C.c()
q=d.E1(u/1.6)
w.f=0
w.r=16+96*q
w.w=0
w.x=u<1.6
w.y+=0.3
a3.y=1-d.E1((u-1.3)/0.8)
t=d.e
t===$&&C.c()
t.D8(new A.r(0,40,w.r*0.7+14))
if(u>=2.2){f=a3.c
t=d.p1
if(t!=null)t.bQ(0)
d.ok=null
w.x=!1
w=a3.y=0
d.m(d.gj2())
t=d.e
t.r=B.aR3
e=d.dk
r=e==null
p=r?a0:e.a
p=D.k.F(p==null?170:p,60,420)
o=r?a0:e.b
w=o==null?w:o
r=r?a0:e.c
t.fW(p,D.k.F(r==null?0.4:r,0.15,1.35),B.h4b,w)
A.fD(660,80,0.25,a1)
w=""+a3.f
d.ei(f?"Level "+w+". This office has no power: walk onto the red mat at the breaker panel, or tap the red frames.":"Level "+w+" of "+a3.gMg()+".",!0)}}},
bR0(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.aP
if(g==null||g.a!=="tower")return D.bL
w=i.d
w===$&&C.c()
v=w.d
v===$&&C.c()
u=v[w.e].cy.h(0,g.b.a)
w=D.w.j(0.55)
v=C.n(28)
t=C.L(D.aW,D.r,1)
s=g.f
r=g.gMg()
q=x.p
s=C.A(C.a([B.fYk,D.at,C.E(C.x(C.a([B.fQp,C.d("You are on level "+s+" of "+r,h,h,h,h,h,h,I.tw,h,h,h)],q),D.E,h,D.e,D.i,0,D.p),1),C.aA(h,D.t_,D.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new A.edA(i),h,h,h,h,h,h,!1,D.a4)],q),D.m,h,D.e,D.i,0,h,h)
p=C.a([],q)
for(;r>=1;--r){if(r===g.f)o=D.aJ
else o=r===u?D.bC.j(0.35):D.c.j(0.08)
n=new C.aP(14,14)
m=r===u
if(m)l=D.ax
else l=r===g.f?D.c:D.aW
k=r===g.f
j=new C.ay(l,k||m?2:1,D.r,-1)
l=r===1?"L":""+r
k=k?D.w:D.c
l=C.a([C.d(l,h,h,h,h,h,h,new C.G(!0,k,h,h,h,h,19,D.u,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h),h,h,h)],q)
if(m)l.push(B.fYF)
p.push(C.aA(h,C.p(D.A,C.x(l,D.m,h,D.bb,D.i,0,D.p),D.f,h,h,new C.o(o,h,new C.bG(j,j,j,j),new C.bg(n,n,n,n),h,h,D.n),h,52,h,h,h,h,h,58),D.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new A.edB(i,r),h,h,h,h,h,h,!1,D.a4))}return C.p(D.A,C.eL(D.A,C.p(h,C.x(C.a([s,D.af,B.fWz,D.X,C.bW(D.bG,p,D.br,h,8,8),D.an,B.fHy],q),D.al,h,D.e,D.O,0,D.p),D.f,h,h,new C.o(h,h,t,v,h,B.zB,D.n),h,h,h,D.bE,D.bR,h,h,330),D.f,D.e6),D.f,w,h,h,h,h,h,h,h,h,h,h)},
auU(){var w,v,u,t,s,r,q=this,p=q.e
p===$&&C.c()
w=Math.cos(p.b)
v=Math.sin(q.e.b)
p=q.e
u=p.d
t=p.c
p=Math.sin(p.a)
s=q.e
r=s.c
return new C.y(u.a7(0,new A.r(-t*w*p,r*v,r*w*Math.cos(s.a))),q.e.d)},
aSp(d,e,f,g,h){var w=new A.edm(h)
return new A.r(w.$4(d.a,e.a,f.a,g.a),w.$4(d.b,e.b,f.b,g.b),w.$4(d.c,e.c,f.c,g.c))},
c5s(d){var w=this.d
w===$&&C.c()
w=w.d
w===$&&C.c()
return A.idq(D.d.fl(w,new A.eee()),d)},
cB0(d){var w,v,u=this
u.Bo()
u.Sq()
if(u.aQ)u.a31()
u.aP=null
w=u.c5s(d)
if(w.length===0)return
u.m(new A.efC(u,w))
v=u.e
v===$&&C.c()
v.as=4800
v.e=6
v.f=2600
v.at=-1.2
v.ax=1.4
v.pg(!0)
u.ae6()
v=u.RG
if(v!=null)v.bQ(0)
v=new A.a5C(u.gbQg(),A2.C_)
v.fX(0)
u.RG=v},
ae6(){var w,v,u,t,s,r,q,p=this,o=++p.ry,n=p.rx
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
u=A.h3U(v,o,u.k4.q(0,t))
u.B(p.ghx())
p.aP=u
p.ajJ(u,p.gIL().h(0,t))
t=p.aP
t.toString
t.B(p.ghx())
p.m(p.gj2())}s=w.r
if(s&&p.aP!=null){p.aP=null
p.m(p.gj2())}if(w.w==null&&w.x==null){s=!n||s
r=p.auU()
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
n=D.d.gam(o)
v=p.x1
u=v[q]
v=v[q-1]
D.d.J(o,n+Math.max(1,new A.r(u.a-v.a,u.b-v.b,u.c-v.c).gqg()))}}o=w.e
if(o!=null)p.ei("\ud83d\ude81 "+o,!0)},
bQh(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this
if(!a2.p4||a2.c==null)return
w=a2.rx[a2.ry]
v=(Date.now()-a2.to)/1000
u=w.x
if(u!=null){t=a2.CW.gf_()/1000
s=B.a5m[u].a
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
h=a2.auU()
k=A.oM(h.a,k,i)
m=A.oM(h.b,m,i)}if(v>=w.d){a2.ae6()
return}}else{u=w.w
if(u!=null){u=B.kx[u]
t=a2.CW.gf_()
t=$.aS6().cZ5(0,D.d.cp(B.kx,u),t/1000).a
u=t[0]
m=new A.r(u,26,t[1])
l=v*0.6+0.8
k=new A.r(u+Math.sin(l)*190,85,t[1]+Math.cos(l)*190)
if(v<2.5){j=v/2.5
i=j*j*(3-2*j)
g=a2.auU()
k=A.oM(g.a,k,i)
m=A.oM(g.b,m,i)}if(v>=w.d){a2.ae6()
return}}else{f=v*w.c
if(a2.x1.length<2||f>=D.d.gam(a2.xr)){a2.ae6()
return}u=a2.xr
t=u.length
e=0
for(;;){s=e+2
if(!(s<t&&u[e+1]<=f))break;++e}t=u[e]
n=e+1
d=D.k.F((f-t)/(u[n]-t),0,1)
t=new A.edy()
u=e-1
k=a2.aSp(t.$2(a2.x1,u),t.$2(a2.x1,e),t.$2(a2.x1,n),t.$2(a2.x1,s),d)
m=a2.aSp(t.$2(a2.x2,u),t.$2(a2.x2,e),t.$2(a2.x2,n),t.$2(a2.x2,s),d)}}a0=m.aK(0,k)
a1=Math.max(8,a0.gqg())
u=a2.e
u===$&&C.c()
t=Math.atan2(a0.a,-a0.c)
u.Hy(a1,Math.asin(D.k.F(-a0.b/a1,-1,1)),m,t)},
a30(){var w=this,v=w.e
v===$&&C.c()
v.as=0
v=w.RG
if(v!=null)v.bQ(0)
w.RG=null
if(w.c==null)return
w.m(new A.efO(w))
w.yl()
w.ei("The drone has landed.",!0)},
bQf(){var w=null,v=new A.edw(this),u=D.w.j(0.55),t=C.n(28),s=C.L(D.aW,D.r,1),r=x.p
return C.p(D.A,C.eL(D.A,C.p(w,C.x(C.a([C.A(C.a([B.fWm,D.at,B.bIc,C.aA(w,D.t_,D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new A.edv(this),w,w,w,w,w,w,!1,D.a4)],r),D.m,w,D.e,D.i,0,w,w),B.fJa,v.$4("\ud83c\udf06","The whole city","High flights over every street","city"),v.$4("\ud83e\udea7","Billboards and NGMY logos","Close to every ad, and the big logo board","billboards"),v.$4("\ud83c\udfc1","Edge billboards only","A tour round the big boards at the edges of the city","edges"),v.$4("\ud83c\udfe0","Houses","Fly by the houses, then go inside a big one","houses"),v.$4("\ud83c\udfe5","Hospital, shop and school","Fly in and look round inside each","hospital"),v.$4("\ud83d\ude8c","Traffic","Follow the self-driving buses and police cars","traffic"),v.$4("\ud83c\udfac","Everything","A little of all of it","all")],r),D.al,w,D.e,D.O,0,D.p),D.f,w,w,new C.o(w,w,s,t,w,B.zB,D.n),w,w,w,D.bE,D.bR,w,w,330),D.f,D.e6),D.f,u,w,w,w,w,w,w,w,w,w,w)},
gIL(){var w=this.d
w===$&&C.c()
w=w.d
w===$&&C.c()
return D.d.fl(w,new A.ee3()).cx},
av5(d){var w,v=C.a([],x.u)
for(w=0;w<4;++w)v.push(d.ri(w))
return v},
cBp(d){var w,v,u=C.a([],x.t)
for(w=0;w<4;++w){if(!d.ri(w)){v=d.d
v===$&&C.c()
v=w>=v.length}else v=!0
u.push(v?0:new A.efN(d,w).$0())}return u},
cIJ(d,e){var w,v,u,t,s,r=d.d
r===$&&C.c()
if(e>=r.length)return""
w=r[e]
r=w.a
v=d.at.h(0,r)
u=v==null
t=u?null:v.a
s=A.x6(t==null?w.b:t).toLowerCase()
if(u||!A.h89(w.b,v.a))return"nothing put in yet at "+A.j4(r).b
if(v.b.c<2)return"the "+s+" at "+A.j4(r).b+" is not finished: fasten every wire and close it"
return"the "+s+" at "+A.j4(r).b+" works but is NOT wired safely: "+d.aq7(r).b},
ajJ(d,e){var w=e==null
d.d=w?B.aBx:this.av5(e)
d.e=w?B.a3J:this.cBp(e)},
gbcg(){var w,v,u=this.aP
if(u==null||!u.c)return null
w=u.a
v=u.b.a
return w==="tower"?v*100+u.f:v},
gakH(){var w,v=this.gbcg(),u=v==null?null:this.gIL().h(0,v)
if(u!=null)w=u.gbm4()||D.d.cM(this.av5(u),new A.egC())
else w=!1
return w},
atw(){var w,v,u,t,s,r=this,q=r.aP,p=r.gbcg(),o=p==null,n=o?null:r.gIL().h(0,p)
if(q==null||o||n==null)return
if(!D.d.cM(r.av5(n),new A.ed5())){r.ei("Not quite done: the wiring is not right yet. Open the wiring bench again (tap the panel) and check every wire.",!1)
return}w=q.b
r.gIL().W(0,p)
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
s=10+r.jm.aw(26)
v=r.ghx()
if(v!=null)v.r+=s
r.r6=Date.now()
r.hR=0
q.d=B.duY
q.e=B.a3J
q.B(r.ghx())
r.m(r.gj2())
A.fD(880,120,0.3,"tri")
v=r.d
v===$&&C.c()
u=v.d
u===$&&C.c()
v=u[v.e]
u=v.k4.a
v=v.cy.a
o=o?"The power is back on level "+q.f+".":"The power is back in the house."
v=u+v>0?" The other red tags in the city are different places that still have no power.":""
r.ei("\u2705 JOB COMPLETE! "+o+" +"+s+" stars."+v,!0)},
YR(d){return this.c1i(d)},
c1i(d){var w=0,v=C.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k
var $async$YR=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:l=d.b
k=l.a
if(d.a==="tower")k=k*100+d.f
s=t.gIL().c3(0,k,new A.ee0(l,d))
w=3
return C.b(t.yz(new A.ee1(s)),$async$YR)
case 3:if(t.c==null){w=1
break}t.ajJ(d,s)
if(t.gakH())t.atw()
else{d.B(t.ghx())
t.m(t.gj2())
r=x.s
q=C.a([],r)
if(s.ri(0))q.push("outlet 1")
if(s.ri(1))q.push("outlet 2")
if(s.ri(2))q.push("the ceiling light")
if(s.ri(3))q.push("the switch")
p=C.a([],r)
if(!s.ri(0))p.push("outlet 1")
if(!s.ri(1))p.push("outlet 2")
if(!s.ri(2))p.push("the ceiling light")
if(!s.ri(3))p.push("the switch")
r=C.a([],r)
for(o=0;o<4;++o)if(!s.ri(o))r.push(t.cIJ(s,o))
n=x.cc
m=C.C(new C.X(r,new A.ee2(),n),n.k("M.E"))
r=q.length===0?"Nothing is fixed yet":"Fixed so far: "+D.d.aN(q,", ")
p=D.d.aN(p,", ")
q=m.length===0?"":"Why: "+C.cW(m,0,C.dz(2,"count",x.S),C.T(m).c).aN(0,"; ")+". "
t.ei(r+". Still to do: "+p+". "+q+"Tap the red frames to carry on.",!1)}case 1:return C.h(u,v)}})
return C.i($async$YR,v)},
abE(d){return this.bT9(d)},
bT9(d){var w=0,v=C.j(x.H),u,t=this,s,r,q,p,o
var $async$abE=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:o=t.d
o===$&&C.c()
s=o.d
s===$&&C.c()
r=d.a
q=s[o.e].db.c3(0,r,new A.edG())
w=3
return C.b(t.yz(new A.edH(q)),$async$abE)
case 3:if(t.c==null){w=1
break}if(q.c>=2&&A.x7(A.oi("light"),q).a==="ok"){o=t.d
s=o.d
s===$&&C.c()
s[o.e].db.W(0,r)
o=t.d
s=o.d
s===$&&C.c()
s[o.e].k3.W(0,r)
p=10+t.jm.aw(26)
r=t.ghx()
if(r!=null)r.r+=p
t.m(t.gj2())
t.ei("The street light is on again. You wired it correctly: black to black, white to white, ground to ground. +"+p+" stars.",!0)}else t.ei("The light is still out: finish the wiring and fit the cover, then it comes on.",!1)
case 1:return C.h(u,v)}})
return C.i($async$abE,v)},
c9W(){var w,v,u=this,t=u.aI
if(t==null)return
w=u.d
w===$&&C.c()
v=w.d
v===$&&C.c()
v[w.e].dB(0,"crate",t.f+Math.sin(t.w)*34,t.r+Math.cos(t.w)*34)
u.ao=null
u.m(u.gj2())
u.ei("You put the crate down.",!0)},
c7n(){var w,v,u,t,s,r,q,p,o=this,n=o.d
n===$&&C.c()
n=n.d
n===$&&C.c()
w=D.d.fl(n,new A.eeg())
if(o.gaYd())return
n=x._
v=C.a([],n)
for(u=w.x,t=u.length,s=w.k4,r=0;r<u.length;u.length===t||(0,C.J)(u),++r){q=u[r]
p=q.b
if(p==="house2"||p==="bighouse"){p=q.a
p=!s.q(0,p)&&p!==o.jl}else p=!1
if(p)v.push(q)}if(s.a<2&&v.length!==0&&o.bD==null&&o.bC==null){q=v[o.jm.aw(v.length)]
v=q.a
s.J(0,v)
o.jl=v
v=q.b==="bighouse"?"the big house":"the house"
o.b6_(new A.QH(q,v,"power","",o.aP9(),0))}n=C.a([],n)
for(v=u.length,t=w.k3,r=0;r<u.length;u.length===v||(0,C.J)(u),++r){q=u[r]
s=q.b
if((s==="pole"||s==="lamppost")&&!t.q(0,q.a))n.push(q)}if(t.a<3&&n.length!==0&&D.o.E(o.bW,90)===0){t.J(0,n[D.o.E(o.bW*5,n.length)].a)
o.ei("\u26a1 A street light went out in the town. Find it (it is dark, with a red sign) and fix it.",!1)}n=o.d
v=n.d
v===$&&C.c()
if(v[n.e].c==="outside"&&o.aP==null)o.m(o.gj2())},
axV(d){return this.c7o(d)},
c7o(d){var w=0,v=C.j(x.H),u=this
var $async$axV=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:u.m(new A.eeh(u,d))
return C.h(null,v)}})
return C.i($async$axV,v)},
aYp(){var w,v=this.fE,u=v==null?null:v.a
if(u==null)return null
w=A.ti(new A.r(0,0,B.hJ.h(0,u.b).d/2+60),u.e*3.141592653589793/2)
return new C.y(u.c+w.a,u.d+w.c)},
ax2(){var w=this.aI,v=this.aYp()
if(w==null||v==null)return null
return D.k.V(Math.sqrt(Math.pow(v.a-w.f,2)+Math.pow(v.b-w.r,2))/10)},
cuz(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.aI,g=j.gKK()
g=g==null?i:g.ga7b(0)
if(g==null){g=j.gpq()
g=g==null?i:g.ga7b(0)
w=g}else w=g
if(w==null)w=j.aYp()
g=!1
if(j.fE==null){v=j.gpq()
if((v==null?i:v.x)==null){g=j.gKK()
g=(g==null?i:g.f)==null}}v=!0
if(!g)if(h!=null)if(w!=null){g=j.d
g===$&&C.c()
v=g.d
v===$&&C.c()
g=v[g.e].c!=="outside"||j.aP!=null}else g=v
else g=v
else g=v
if(g)return B.v1
g=C.a([],x.z)
u=new A.eM(g)
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
u.aEH(new A.r(h.f+o*k,1.4,h.r+n*k),B.hnJ,D.bs,p)
k+=26;++l}}u.f=3
u.d=0.4
u.dq(new A.r(v,0,s),new A.r(v,170,s),4,D.bs,8)
u.dq(new A.r(v,0,s),new A.r(v,1.6,s),24,D.bs,14)
return g},
bID(){var w,v,u,t,s,r,q,p=this,o=null,n=p.y1,m=new A.ecA(),l=new A.ecz(),k=x.p
if(n!=null){w=p.ax2()
v=C.a([C.A(C.a([C.h7(D.az,o,C.d(n.gbg5(),o,o,o,o,o,o,D.pO,o,o,o),o,24),D.be,C.E(C.x(C.a([C.d(n.gaER(),o,o,o,o,o,o,D.dg,o,o,o),B.fRO],k),D.E,o,D.e,D.i,0,D.p),1),C.aA(o,D.t_,D.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new A.ecB(p),o,o,o,o,o,o,!1,D.a4)],k),D.m,o,D.e,D.i,0,o,o),D.af],k)
for(u=n.gaIa(0),t=0;t<3;++t)v.push(m.$1(u[t]))
u=D.bs.j(0.12)
s=C.n(14)
r=C.L(D.bs.j(0.5),D.r,1)
v.push(C.p(o,C.A(C.a([B.c20,D.at,C.E(C.d(w==null?"A yellow line on the ground will show you the way.":"Follow the yellow line on the ground. It is about "+C.w(w)+" metres away.",o,o,o,o,o,o,D.pM,o,o,o),1)],k),D.m,o,D.e,D.i,0,o,o),D.f,o,o,new C.o(u,o,r,s,o,o,D.n),o,o,o,D.le,D.bU,o,o,o))
v.push(l.$5$primary(A4.HE,"Show me the way",D.bs,new A.ecC(p),!0))
v.push(l.$4(B.bPj,"Take me there",D.b9,new A.ecD(p,n)))
v.push(l.$4(D.k6,"Later",D.az,new A.ecE(p,n)))
q=C.x(v,D.al,o,D.e,D.O,0,D.p)}else q=C.x(C.a([B.f7g,D.af,m.$1("Hello, this is the City office. A few calls were missed."),m.$1("Please answer the phone, so you can keep working."),m.$1("Every call is a person who needs help. Thank you for answering!"),l.$5$primary(D.hF,"OK, I will answer",D.b9,new A.ecF(p),!0)],k),D.al,o,D.e,D.O,0,D.p)
k=D.w.j(0.55)
v=C.n(28)
return C.p(D.A,C.eL(D.A,C.p(o,q,D.f,o,o,new C.o(o,o,C.L(D.aW,D.r,1),v,B.duC,B.zB,D.n),o,o,o,D.bE,D.bR,o,o,330),D.f,D.e6),D.f,k,o,o,o,o,o,o,o,o,o,o)},
cwS(){var w,v,u,t,s=this,r=s.d
r===$&&C.c()
w=r.d
w===$&&C.c()
v=w[r.e].Cc(s.Q)
if(v==null)return
u=B.dCt.h(0,v.b)
if(u==null){s.ei("This cannot be sold.",!1)
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
w=s.ghx()
if(w!=null)w.r+=u
s.m(s.gj2())
s.ei("Sold for "+C.w(u)+" points.",!0)},
Am(d){return this.bJH(d)},
bJH(d){var w=0,v=C.j(x.H),u,t=this,s
var $async$Am=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return C.b(C.bT(D.L,null,new A.ed1(d),s,!0,!0,!0,null,!1,!1,x.H),$async$Am)
case 3:if(t.c==null){w=1
break}t.m(new A.ed2(t))
case 1:return C.h(u,v)}})
return C.i($async$Am,v)},
cty(d){var w,v,u=this.ghx()
if(u!=null){w=u.c
w===$&&C.c()
w=d>=w.length}else w=!0
if(w)return C.f3(null,x.H)
w=u.c
w===$&&C.c()
v=w[d]
w=this.c
w.toString
return C.bT(E.mH,null,new A.efp(this,v,u),w,!0,!0,!0,D.ke,!1,!1,x.H)},
aAg(d){var w=this.c
w.toString
return C.bT(E.mH,null,new A.ef6(this,d),w,!0,!0,!1,D.ke,!1,!1,x.H)},
cGg(){var w=this.c
w.toString
return C.bT(E.mH,null,new A.egm(this),w,!0,!0,!0,D.ke,!1,!1,x.H)},
cFD(){var w=this.c
w.toString
return C.bT(D.L,null,new A.eg8(this),w,!0,!0,!0,null,!1,!1,x.H)},
b8U(d,e){var w,v,u,t=this,s=t.dx
if(s!=null)s.a1(0)
s=t.d
s===$&&C.c()
s=s.gr7()
w=s.length
v=0
for(;v<w;++v){u=s[v]
if(u.k1==null)u.k1="tv100"
if(u.c==="hall")if(u.k2==null)u.k2="tv100"
u.p2=!0}t.z=!1
s=x.fG
w=t.d
if(e){s=new A.aX_(!0,w,d,C.a([],s))
s.b0p()}else{s=new A.aX_(!1,w,d,C.a([],s))
s.b0p()}t.cx=s
t.cy=t.CW.gf_()/1000
t.x=!0
t.r="look"
t.w=!1
s=D.d.gH(t.cx.d)
t.bn.a9(0)
t.bb=!1
t.m(new A.efK(t,s.a))
t.yl()
t.dx=C.de(D.jl,new A.efL(t))
t.m(new A.efM())},
cBl(d){return this.b8U(d,!1)},
bPv(d,e){var w=d.w[e],v=w.c
switch(w.b){case"left":v=new A.r(-d.geb(0)/2,40,v+d.gh3(0)/2-40)
break
case"right":v=new A.r(d.geb(0)/2,40,v+d.gh3(0)/2-40)
break
default:v=new A.r(v,40,0)
break}return v},
cFE(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=i.cx
if(h==null||i.c==null)return
w=i.CW.gf_()/1000-i.cy
v=h.e
v===$&&C.c()
if(w>=v){i.Sq()
i.iM("The tour is over. Press Tour to walk the house again.")
return}if(i.bb)return
u=h.bdf(w)
v=i.d
v===$&&C.c()
t=v.e
if(u.a!==t){i.ak6(u)
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
if(t&&v<s.w.length){o=1.25*D.dW.aE(0,D.k.F(u.ay,0,1))
q=s.ax
n=q.h(0,v)
if((n==null?0:n)!==o){q.n(0,v,o)
p=!0}}q=u.at
if(D.a.a0(q,"ad")&&i.bn.J(0,q)){s.p3=D.o.E(s.p3+1,8)
A.fD(1000,50,0.25,"tri")
p=!0}if(p)i.m(i.gj2())
m=Math.max(s.geb(0)*0.95,s.gh3(0)*1.15)+20
t=t&&v<s.w.length
q=u.b
if(t){l=i.bPv(s,v)
k=D.dy.aE(0,D.k.F(u.ay,0,1))
j=s.w[v].b
v=i.e
v===$&&C.c()
t=j==="back"?14:0
if(j==="left")n=0.55*k
else n=j==="right"?-0.55*k:-0.03
v.fW(m+(70-m)*k,0.2-0.07*k,new A.r(l.a*0.9+q*0.1,36,l.c+t),n)}else{v=i.e
v===$&&C.c()
v.fW(m,0.24,new A.r(q*0.7,30,u.c*0.6+8),-0.05-q/(s.geb(0)/2)*0.2)}if(u.as!==i.dy)i.m(new A.eg9(i,u))},
ak6(d){return this.cFC(d)},
cFC(d){var w=0,v=C.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j
var $async$ak6=C.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:l={}
r.bb=!0
l.a=null
t=4
p=$.aV.ao$.x.h(0,r.a_)
p=p==null?null:p.gbg()
q=x.cU.a(p)
p=q
p=p==null?null:p.mc(0.6).df(0,D.iJ)
j=l
w=7
return C.b(x.fa.b(p)?p:C.dP(p,x.eT),$async$ak6)
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
case 6:if(r.c==null||r.cx==null){r.bb=!1
w=1
break}p=r.d
p===$&&C.c()
n=p.d
n===$&&C.c()
n[p.e].ax.a9(0)
r.ayt(d.a,!0)
p=r.d
n=p.d
n===$&&C.c()
m=n[p.e]
p=d.ch
if(p>=0&&p<m.w.length)m.ax.n(0,p,1.25)
r.m(new A.efZ(l,r))
l=r.e
l===$&&C.c()
l.d=new A.r(d.b,36,d.c+4)
l.c=70
l.a=-0.03
l.b=0.15
r.bb=!1
case 1:return C.h(u,v)
case 2:return C.f(s.at(-1),v)}})
return C.i($async$ak6,v)},
Sq(){var w,v,u,t=this,s=t.dx
if(s!=null)s.a1(0)
t.dx=null
s=t.d
s===$&&C.c()
s=s.d
s===$&&C.c()
w=s.length
v=0
for(;v<s.length;s.length===w||(0,C.J)(s),++v){u=s[v]
u.at.a9(0)
u.ax.a9(0)}t.aH=null
t.bb=!1
t.m(new A.efR(t))
t.yl()},
coe(){var w,v,u,t,s,r,q,p,o,n=this,m=n.cx
if(m!=null)return m.bdf(n.CW.gf_()/1000-n.cy)
w=n.aI
if(n.bF!=null)return null
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
return A.auj(n.c6.d>0,0,-1,"",!1,o,"",-1,q,!1,!1,!1,v.a,p,r,u,s,t)}return null},
b9D(){var w,v=this,u=v.c6,t=u.r
if(t<=0)return
u.r=0
w=v.ghx()
if(w!=null)w.r=Math.max(0,w.r-t)
if(v.c!=null)v.m(new A.efS())},
b_g(){var w,v,u,t=this.d
t===$&&C.c()
w=t.d
w===$&&C.c()
t=w[t.e]
v=new A.baf(t,-t.geb(0)/2+10,t.geb(0)/2-10,-760,t.gh3(0)-10,0,24,0,B.dkI)
v.GQ(0)
u=$.blP
if(u!=null){t=C.aK(u.h(0,"seed"))
t=t==null?null:D.k.M(t)
t=t===this.d.b&&typeof u.h(0,"x")=="number"&&typeof u.h(0,"z")=="number"}else t=!1
if(t){v.f=C.e0(u.h(0,"x"))
v.r=C.e0(u.h(0,"z"))
t=C.aK(u.h(0,"yaw"))
if(t==null)t=null
v.w=t==null?0:t
v.GQ(0)}return v},
Sk(){var w,v=this,u=v.d
u===$&&C.c()
w=u.d
w===$&&C.c()
if(w[u.e].c!=="outside")return
u=v.aI;(u==null?v.aI=v.b_g():u).GQ(0)
v.aQ=!0
v.bI=Date.now()
u=v.b7
if(u!=null)u.bQ(0)
u=new A.a5C(v.gcIq(),D.a_u)
u.fX(0)
v.b7=u
v.m(new A.efJ())
v.iM("Slide the round stick to walk. Walk up to a door and through it to go in: the house, the hospital or the shop. Double tap a spot to go there.")},
a31(){var w,v=this
v.aQ=!1
v.bf=v.b6=0
v.bm=!1
w=v.b7
if(w!=null)w.bQ(0)
v.b7=null
w=v.aI
if(w!=null)w.x=!1
v.m(new A.efQ())},
cIr(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.aP,f=g==null
if(f)w=null
else{v=g.at
v===$&&C.c()
w=v}if(w==null)w=h.aI
if(h.ok!=null)return
v=!0
if(w!=null)if(h.c!=null)if(f){v=h.d
v===$&&C.c()
u=v.d
u===$&&C.c()
v=u[v.e].c!=="outside"}else v=!1
if(v)return
t=Date.now()
s=D.k.F((t-h.bI)/1000,0,0.1)
h.bI=t
w.GQ(0)
w.z=h.bm&&h.bF==null
if(h.bF==null)w.aKu()
w.cRq(s)
v=h.e
v===$&&C.c()
r=Math.sin(v.a)
q=Math.cos(h.e.a)
v=h.bf
u=h.b6
p=h.bF==null
o=h.c6
n=p?o.c>0:o.b<=0
if(p)w.ch=o.d>0?0.28:1
if(n){if((u!==0||v!==0||w.at!=null)&&t-h.c9>6000){h.c9=t
h.ei(p?"You are too tired to walk. Rest a little, or buy some food in a shop.":"The car has no gas. Get out, walk to a gas station and buy gas.",!1)}w.at=null
m=!1}else if(u!==0||v!==0){w.at=null
m=w.aMO(0,r*v+q*u,-q*v+r*u,s)}else m=w.FT(0,s)
v=!m
if(v)w.x=!1
if(h.ew===0){u=h.d
u===$&&C.c()
p=u.d
p===$&&C.c()
l=p[u.e].c==="outside"}else l=!1
if(l){u=m&&h.bF==null
k=o.bli(s,m&&h.bF!=null,u)}else k=null
if(k!=null)h.ei(k,!1)
h.b9D()
if(!v||w.Q>0){u=h.e
p=w.f
o=w.r
u.cx=null
u.d=new A.r(p,30,o)
u.ae8()
u.b0()}if(!f){g.cx=h.ao
j=g.fH(0,h.ghx())
h.ao=g.cx
if(j!=null){h.iM(j)
h.m(h.gj2())}if(g.cy){g.cy=!1
h.YR(g)}if(g.dx){g.dx=!1
if(!h.id)h.m(new A.egy(h))}if(g.db){g.db=!1
if(!h.k2)h.m(new A.egz(h))}if(g.w){g.w=!1
if(!h.k3)h.m(new A.egA(h))}f=g.x
if(f!==h.k4){h.k4=f
v=h.e
if(f)v.D8(B.h7t)
else v.D8(new A.r(0,30,110))}f=g.at
f===$&&C.c()
v=!1
if(f.r>308)if(Math.abs(f.f)<36)f=!(g.a==="tower"&&g.f>1)
else f=v
else f=v
if(f)h.aYH()
return}f=!1
if(h.bF==null){f=h.gpq()
f=(f==null?null:f.x)!=null}if(f){f=h.gpq()
f.toString
h.aT4(f.blS(w.f,w.r,h.CW.gf_()/1000))}f=!1
if(h.bF==null){f=h.d
f===$&&C.c()
u=f.d
u===$&&C.c()
f=u[f.e].c==="outside"&&h.ok==null&&h.ew===0}if(f){f=$.aS6()
f.FT(0,h.CW.gf_()/1000)
i=f.cTL(w.f,w.r)
if(i>=0)h.cul(i)}f=h.bF
if(f!=null)h.cGn(w)
if(m&&h.bF==null&&h.cIp(w))return
h.cGG(w)
if(!v||D.o.E(h.c1++,25)===0)h.csH()},
cIp(d){var w,v,u,t,s=this
if(Math.abs(d.f)<24){w=d.r
w=w>-2&&w<14}else w=!1
if(w)if(!(Math.abs(d.w)>2.2)){w=d.at
w=w!=null&&w.b<4}else w=!0
else w=!1
if(w){s.a31()
s.AT(10)
s.iM("You are inside the living room. Use Go outside to come back out.")
return!0}w=s.d
w===$&&C.c()
v=w.d
v===$&&C.c()
w=D.d.gag(v[w.e].x)
v=new C.eJ(w,new A.egx())
while(v.C()){u=w.gR(0)
t=A.ti(new A.r(0,0,B.hJ.h(0,u.b).d/2+10),u.e*3.141592653589793/2)
if(Math.abs(d.f-(u.c+t.a))<22&&Math.abs(d.r-(u.d+t.c))<16){s.Y7(u)
return!0}}return!1},
b5n(d){var w,v,u,t,s,r,q,p,o=this,n=o.aI,m=o.d
m===$&&C.c()
w=!0
if(m.a.length===0)if(n!=null){w=m.d
w===$&&C.c()
w=w[m.e].c!=="outside"||o.c==null}if(w)return
w=o.aQ
v=n.f
u=n.r
t=n.w
s=o.aP
s=s==null?null:s.b.a
r=o.e
r===$&&C.c()
$.blP=C.I(["seed",m.b,"steer",w,"x",v,"z",u,"yaw",t,"inner",s,"cy",r.a,"cp",r.b,"cd",r.c],x.N,x.A)
q=Date.now()
if(d||q-o.dw>4000){o.dw=q
p=D.Y.az($.blP,null)
C.az().bJ(new A.eff(p),x.y).eL(new A.efg())}},
csH(){return this.b5n(!1)},
aic(){var w=0,v=C.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0
var $async$aic=C.e(function(a1,a2){if(a1===1){s.push(a2)
w=t}for(;;)switch(w){case 0:d=$.blP
w=d==null?3:4
break
case 3:t=6
w=9
return C.b(C.az(),$async$aic)
case 9:q=a2
p=C.aT(J.t(q.a,"ngmy_city_where"))
if(p!=null)d=J.Bq(x.G.a(D.Y.aS(0,p,null)),x.N,x.A)
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
if(l[m.e].c==="outside")if(J.z(J.t(d,"steer"),!0)){n=C.aK(J.t(d,"seed"))
n=n==null?null:D.k.M(n)
n=n!==r.d.b}}if(n){w=1
break}$.blP=d
if(!r.aQ)r.Sk()
n=C.aK(J.t(d,"inner"))
k=n==null?null:D.k.M(n)
if(k!=null&&r.aP==null){n=r.d
n===$&&C.c()
m=n.d
m===$&&C.c()
n=m[n.e].x
m=n.length
j=0
for(;j<n.length;n.length===m||(0,C.J)(n),++j){i=n[j]
if(i.a===k&&B.a9E.q(0,i.b)){r.Y7(i)
break}}}n=r.aP
m=n==null
if(m)h=null
else{n=n.at
n===$&&C.c()
h=n}if(h==null)h=r.aI
n=r.e
n===$&&C.c()
if(!m)m=n.d
else{m=h==null
l=m?null:h.f
if(l==null)l=n.d.a
m=m?null:h.r
m=new A.r(l,30,m==null?n.d.c:m)}l=C.aK(J.t(d,"cd"))
if(l==null)l=null
if(l==null)l=r.e.c
g=r.e
g=D.k.F(l,g.e,g.f)
l=C.aK(J.t(d,"cy"))
if(l==null)l=null
if(l==null)l=r.e.a
f=C.aK(J.t(d,"cp"))
if(f==null)f=null
if(f==null)f=r.e.b
e=r.e
n.Hy(g,D.k.F(f,e.at,e.ax),m,l)
case 1:return C.h(u,v)
case 2:return C.f(s.at(-1),v)}})
return C.i($async$aic,v)},
bFM(){var w,v,u,t,s,r,q=this,p=q.aI,o=!0
if(p!=null){w=q.d
w===$&&C.c()
v=w.d
v===$&&C.c()
if(v[w.e].c==="outside")if(q.aP==null)if(q.aQ)if(q.bF==null){o=q.e
o===$&&C.c()
o=o.c<340}}if(o)return B.v1
o=q.e
o===$&&C.c()
u=o.c/340
o=C.a([],x.z)
t=new A.eM(o)
t.f=3
s=78+6*u
w=p.f
v=p.r
r=s+16*u
t.wV(new A.r(w,s,v),new A.r(w,r,v),0,B.BQ,7*u,0.2,6)
v=p.f
w=p.r
t.cJ(new A.r(v,r,w),new A.r(v,s+30*u,w),2.2*u,B.BQ,0.2,6)
return o},
Y7(d){var w,v,u,t,s,r,q,p=this
p.bf=p.b6=0
w=d.b
if(w==="store"||w==="gasstation")w="shop"
else if(w==="hq")w="tower"
v=p.d
v===$&&C.c()
u=v.d
u===$&&C.c()
t=d.a
s=A.h3U(w,d,u[v.e].k4.q(0,t))
s.cx=p.ao
s.B(p.ghx())
p.ajJ(s,p.gIL().h(0,t))
s.B(p.ghx())
p.aP=s
p.cO=null
w=s.a
if(w==="tower"){v=p.d
u=v.d
u===$&&C.c()
r=u[v.e].cy.h(0,t)
v=p.fE
if(v!=null&&v.c==="office"&&r!=null)p.k3=!0}v=p.e
v===$&&C.c()
p.dk=new C.b5(v.c,v.a,v.b)
v.e=60
v.f=420
v.at=0.15
v.ax=1.35
v.z=!1
v.r=B.aR3
v.pg(!0)
v=p.e
u=D.k.F(v.c,60,420)
t=p.e
q=t.a
v.fW(u,D.k.F(t.b,0.15,1.35),new A.r(0,30,110),q)
p.m(p.gj2())
A:{if("hospital"===w){w="The hospital. Walk onto the blue mat to admit the sick, and up to a bed to treat the patient. Walk to the green mat to go out."
break A}if("dmv"===w){w="The licence office. Walk onto the blue mat at the desk to get your Uber licence. Walk to the green mat to go out."
break A}if("tower"===w){w="The lobby of an office tower. Walk onto the blue mat (or tap the elevator) to choose a level. Walk to the green mat to go out."
break A}if("house2"===w||"bighouse"===w){w="The house. Walk onto the red or green mat at the breaker panel. Walk to the green mat to go out."
break A}if("school"===w){w="The school. Walk onto the mats to teach the class or read in the library. Walk to the green mat to go out."
break A}if("firestation"===w){w="The fire station. Walk onto the mats to check the equipment. Walk to the green mat to go out."
break A}w="The shop. Walk onto the yellow mat for food and the purple mat for medicine. Walk to the green mat to go out."
break A}p.iM(w)
A.fD(660,80,0.25,"tri")},
aYH(){var w,v,u,t,s,r,q,p,o,n=this,m=n.aP,l=n.aI
if(m==null||l==null)return
w=m.b
v=B.hJ.h(0,w.b)
v.toString
n.ao=m.cx
n.aP=null
n.bf=n.b6=0
u=A.ti(new A.r(0,0,v.d/2+30),w.e*3.141592653589793/2)
l.f=w.c+u.a
l.r=w.d+u.c
l.w=0
l.at=null
l.GQ(0)
n.m(n.gj2())
n.yl()
t=n.dk
v=n.e
v===$&&C.c()
s=l.f
r=l.r
q=t==null
p=q?null:t.a
o=q?null:t.b
q=q?null:t.c
v.fW(p,q,new A.r(s,30,r),o)
n.iM("You are back in the city.")},
cGG(d){var w,v,u,t,s,r,q,p,o,n,m=this,l={}
l.a=null
w=m.bF==null
v=!1
if(!w||m.ao==null){u=m.c6.b
if(u<(!w?0.7:0.99)){u=m.d
u===$&&C.c()
t=u.d
t===$&&C.c()
u=D.d.aX(t[u.e].x,new A.egq(d))
v=u}}if(v)l.a=new C.GB(new A.egr(m),"\u26fd Buy gas ("+A.hcD(m.c6.b)+" \u2b50)")
else if(!w)l.a=new C.GB(m.gbVf(),"\ud83d\udeaa Get out")
else{if(m.ao!=null)l.a=new C.GB(m.gc9V(),"\u2b07 Put the crate down")
w=m.d
w===$&&C.c()
u=w.d
u===$&&C.c()
w=u[w.e].x
u=w.length
s=0
for(;s<w.length;w.length===u||(0,C.J)(w),++s){r=w[s]
q=Math.sqrt(Math.pow(d.f-r.c,2)+Math.pow(d.r-r.d,2))
t=r.b
p=B.hJ.h(0,t).a.toLowerCase()
if(l.a!=null)break
if(t==="crate"&&q<46){l.a=new C.GB(new A.egs(m,r),"\ud83d\udce6 Pick up the crate")
break}if(t==="pole"||t==="lamppost"){o=m.d
n=o.d
n===$&&C.c()
o=n[o.e].k3.q(0,r.a)&&q<60}else o=!1
if(o){l.a=new C.GB(new A.egt(m,r),"\ud83d\udd27 Fix the street light")
break}if(D.d.q(B.Ip,t)&&q<36){l.a=new C.GB(new A.egu(m,r),"\ud83c\udf4e Feed the "+p)
break}if(D.d.q(B.diU,t)&&q<60){l.a=new C.GB(new A.egv(m,r),"\ud83d\ude97 Get in the "+p)
break}}}w=l.a
w=w==null?null:w.b
u=m.cO
if(w!=(u==null?null:u.b))m.m(new A.egw(l,m))},
bSq(d){var w,v=this,u=v.cj,t=d.a,s=u.h(0,t),r=B.hJ.h(0,d.b).a
if(s!=null&&v.CW.gf_()/1000-s<30){v.ei("The "+r.toLowerCase()+" has just eaten. Come back in a little while.",!1)
return}u.n(0,t,v.CW.gf_()/1000)
u=v.ghx()
if(u==null)w=null
else{++u.r
w="You fed the "+r.toLowerCase()+". +1 point."
u.Q0(w)}if(w==null)w="You fed the "+r.toLowerCase()+"."
A.fD(880,90,0.25,"tri")
v.m(new A.edF())
v.iM(w)},
bV4(d){var w=this,v=w.aI
if(v==null)return
w.bF=d
v.CW=d.a
v.ay=22
v.ch=2.4
v.f=d.c
v.r=d.d
v.w=Math.atan2(Math.cos(d.e*3.141592653589793/2),-Math.sin(d.e*3.141592653589793/2))
v.at=null
v.GQ(0)
w.m(w.gj2())
w.iM("You are driving the "+B.hJ.h(0,d.b).a.toLowerCase()+". Slide the stick to drive. Press Get out to stop.")
A.fD(300,120,0.25,"tri")},
bVg(){var w,v,u,t,s,r,q,p=this,o=p.bF,n=p.aI
if(o==null||n==null)return
o.c=n.f
o.d=n.r
w=n.w
o.e=D.o.E(D.k.V((w-1.5707963267948966)/1.5707963267948966),4)
v=w+1.5707963267948966
n.CW=p.bF=null
n.ay=7
n.ch=1
n.z=!1
n.GQ(0)
for(w=[46,62,80],u=w.length,t=0;t<u;++t){s=w[t]
r=n.f+Math.sin(v)*s
q=n.r+Math.cos(v)*s
if(!n.L0(r,q)){n.f=r
n.r=q
break}}n.aKu()
p.m(p.gj2())
p.iM("You got out.")},
bQe(){var w=this.bF,v=this.aI
if(w==null||v==null)return null
return new C.dW([w.b,v.f,v.r,v.w,w.f])},
yz(d){return this.cqk(d)},
cqk(d){var w=0,v=C.j(x.H),u=1,t=[],s=[],r=this,q,p
var $async$yz=C.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:++r.ew
q=r.er?r.ac:0
u=2
p=r.c
p.toString
w=5
return C.b(C.a6(p,!1).cd(C.eb(new A.efd(q,d),!1,null,x.H)),$async$yz)
case 5:s.push(4)
w=3
break
case 2:s=[1]
case 3:u=1;--r.ew
w=s.pop()
break
case 4:return C.h(null,v)
case 1:return C.f(t.at(-1),v)}})
return C.i($async$yz,v)},
Zi(){var w=0,v=C.j(x.H),u=1,t=[],s,r,q
var $async$Zi=C.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
w=6
return C.b(C.az(),$async$Zi)
case 6:s=e
w=C.eo(J.t(s.a,"ngmy_city_locked_until"))!=null?7:8
break
case 7:w=9
return C.b(J.hq(s,"ngmy_city_locked_until"),$async$Zi)
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
aCI(d){var w=this,v=++w.kG
if(v>=3){w.kG=0
w.Bo()
w.b1Z()}else if(v===2){w.ei(d+". That is two in a row.",!1)
w.b1Z()}else w.ei(d+". Answer the phone and finish the job, or you lose your place.",!1)},
b1Z(){A.fD(1046,160,0.3,"sine")
this.m(new A.eel(this))},
gaYd(){return this.ew>0||this.fE!=null||Date.now()<0||this.p4},
aP9(){var w,v,u=B.duo[this.jm.aw(6)]
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
c9Z(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this,a2=a1.d
a2===$&&C.c()
a2=a2.d
a2===$&&C.c()
w=D.d.fl(a2,new A.eei())
v=a1.ghx()
a2=x._
u=C.a([],a2)
for(t=w.x,s=t.length,r=w.k4,q=0;q<t.length;t.length===s||(0,C.J)(t),++q){p=t[q]
o=p.b
if(o==="house2"||o==="bighouse"){o=p.a
o=!r.q(0,o)&&o!==a1.jl}else o=!1
if(o)u.push(p)}s=C.a([],a2)
for(o=t.length,n=w.k3,q=0;q<t.length;t.length===o||(0,C.J)(t),++q){p=t[q]
m=p.b
if((m==="pole"||m==="lamppost")&&!n.q(0,p.a))s.push(p)}l=new C.X(t,new A.eej(),C.T(t).k("X<1>"))
k=C.a([0,1,2,3],x.t)
o=a1.jm
D.d.e0(k,o)
a2=C.a([],a2)
for(m=t.length,j=w.cy,q=0;q<t.length;t.length===m||(0,C.J)(t),++q){p=t[q]
i=p.b
if((i==="tower"||i==="hq")&&!j.an(0,p.a))a2.push(p)}for(t=k.length,m=v!=null,q=0;q<k.length;k.length===t||(0,C.J)(k),++q){h=k[q]
if(h===0&&u.length!==0&&r.a<4){p=u[o.aw(u.length)]
a2=p.a
r.J(0,a2)
a1.jl=a2
a2=p.b==="bighouse"?"the big house":"the house"
return new A.QH(p,a2,"power","",a1.aP9(),0)}if(h===1&&m&&!l.gav(0)){i=v.gCo()
g=C.T(i).k("X<1>")
f=C.C(new C.X(i,new A.eek(),g),g.k("M.E"))
i=f.length
if(i!==0){e=f[o.aw(i)]
e.e=!0
e.c=Math.min(e.c,70)
d=l.gag(0)
if(!d.C())C.bi(C.fp())
return new A.QH(d.gR(0),"the hospital","sick",e.a.b,"",0)}}if(h===3&&a2.length!==0&&j.a<3){p=a2[o.aw(a2.length)]
a0=2+o.aw(A.hDc(p)-1)
j.n(0,p.a,a0)
return new A.QH(p,p.b==="hq"?"the NGMY company building":"the office tower","office","","",a0)}if(h===2&&s.length!==0&&n.a<4){p=s[o.aw(s.length)]
n.J(0,p.a)
return new A.QH(p,"the street","light","","",0)}}return null},
aYo(d){var w,v,u,t=this.d
t===$&&C.c()
t=t.d
t===$&&C.c()
w=D.d.fl(t,new A.ee4())
switch(d.c){case"power":return!w.k4.q(0,d.a.a)
case"light":return!w.k3.q(0,d.a.a)
case"office":return!w.cy.an(0,d.a.a)
default:v=this.ghx()
if(v==null)return!1
t=v.c
t===$&&C.c()
u=new C.X(t,new A.ee5(d),C.T(t).k("X<1>"))
if(!u.gag(0).C())return!0
return u.gH(0).r>=0||!u.gH(0).e||!u.gH(0).f}},
SE(d){var w,v,u,t=this,s=t.aI
if(s!=null){w=t.d
w===$&&C.c()
v=w.d
v===$&&C.c()
w=v[w.e].c!=="outside"}else w=!0
if(w)return
if(t.aP!=null)t.aYH()
s.at=null
s.GQ(0)
u=t.bTZ(d,s)
s.f=u.a
s.r=u.b
s.aKu()
w=t.e
w===$&&C.c()
w.D8(new A.r(s.f,30,s.r))
if(!t.aQ)t.Sk()},
bTZ(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=d.b,i=B.hJ.h(0,j)
i.toString
w=B.a9E.q(0,j)
v=w?i.d/2+32:34
u=A.ti(new A.r(0,0,1),d.e*3.141592653589793/2)
j=u.c
i=u.a
t=-i
s=C.a([],x.f)
if(w)for(r=0;r<5;++r)for(q=v+B.dfI[r],p=i*q,q=j*q,o=0;o<5;++o){n=B.d4O[o]
s.push(new C.y(d.c+p+j*n,d.d+q+t*n))}else for(m=0;m<12;++m){l=m*3.141592653589793/6
s.push(new C.y(d.c+Math.cos(l)*v,d.d+Math.sin(l)*v))}for(j=s.length,r=0;r<s.length;s.length===j||(0,C.J)(s),++r){k=s[r]
if(!e.L0(k.a,k.b))return k}return D.d.gH(s)},
cB8(d){var w,v=this
v.fE=d
v.hE=0
v.SE(d.a)
switch(d.c){case"sick":w="New job: "+d.d+" is sick. Go into the hospital and onto the desk."
break
case"light":w="New job: a street light is out. Tap the dark light to fix it."
break
default:w="New job: a house has no power. Walk in and fix it at the panel."
break}v.ei(w,!0)
v.m(new A.efD())},
bVR(d){var w,v=this,u=v.d
u===$&&C.c()
w=u.d
w===$&&C.c()
if(w[u.e].c!=="outside")return
v.SE(d)
u=d.b
if(u==="house2"||u==="bighouse")v.Y7(d)
else if(u==="tower"||u==="hq"){v.Y7(d)
v.m(new A.edZ(v))}else v.ei(y.Y,!0)},
cFM(){var w,v,u,t=$.aS6(),s=C.a([],x.f),r=this.gpq()
r=r==null?null:r.amX(this.CW.gf_()/1000)
if(r==null)r=B.Iy
w=r.length
v=0
for(;v<r.length;r.length===w||(0,C.J)(r),++v){u=r[v]
s.push(new C.y(u.b,u.c))}t.d=s
return A.iq6(this.CW.gf_()/1000)},
cul(d){var w,v,u,t,s,r=this,q=Date.now()
if(q-r.tj<1e4)return
r.tj=q
w=r.aI
if(w==null)return
A.fD(110,600,0.5,"noise")
C.fL()
r.bf=r.b6=0
w.at=null
v=r.c6
v.a=Math.min(v.a,0.2)
v.c=v.d=0
u=B.kx[d].a==="bus"?"bus":"police car"
v=r.d
v===$&&C.c()
t=v.d
t===$&&C.c()
v=t[v.e].x
t=C.T(v).k("X<1>")
s=C.C(new C.X(v,new A.efr(),t),t.k("M.E"))
if(s.length===0){r.ei("A "+u+" ran you over! Always cross at the zebra crossing when the green walking person shows.",!1)
return}v=r.gpq()
if(v!=null)v.cZc(D.d.gH(s))
r.SE(D.d.gH(s))
r.Y7(D.d.gH(s))
r.ei("\ud83d\ude91 A "+u+" ran you over! An ambulance brought you to the hospital. Medicine and food are being ordered for you: they are on the Orders board. Cross at the zebra crossing when the green walking person shows.",!1)
r.m(new A.efs(r))},
ajq(){var w=0,v=C.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g
var $async$ajq=C.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:h=r.d
h===$&&C.c()
if(h.a.length!==0){w=1
break}q=null
p=$.HW
w=p==null||p.a!==h.b?3:4
break
case 3:t=6
w=9
return C.b(A.aUs(),$async$ajq)
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
break}n=$.HW
if(n!=null&&n.a===r.d.b)m=n
else{if(q!=null){h=C.aK(J.t(q,"seed"))
h=h==null?null:D.k.M(h)
if(h==null)h=-1
h=h===r.d.b}else h=!1
if(h)m=A.h41(q)
else if(q!=null&&r.ek){h=C.aK(J.t(q,"seed"))
l=h==null?null:D.k.M(h)
h=A.aWZ(l==null?r.d.b:l)
r.d=$.Et=h
A.hic(h,q)
m=A.h41(q)}else{h=r.d.b
m=A.h40(h,h)
m.NO(r.d)}}$.HW=m
A.aUt().bJ(new A.efE(r),x.P)
for(h=m.d,k=h.length,j=r.bL,i=0;i<h.length;h.length===k||(0,C.J)(h),++i)j.J(0,h[i].a)
r.m(new A.efF(r))
r.bw=C.de(D.fF,new A.efG(r))
if(r.a.f==="city")r.aic()
case 1:return C.h(u,v)
case 2:return C.f(s.at(-1),v)}})
return C.i($async$ajq,v)},
c9Y(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=i.ghx()
if(h==null||i.c==null)return
if(i.cx==null){w=i.d
w===$&&C.c()
h.aEj(0,1,w)}if(++i.bW%8===0){w=i.d
w===$&&C.c()
h.D9(0,w)}if(i.aP!=null&&i.gakH())i.atw()
w=!1
if(!i.aQ)if(i.ew===0){v=i.d
v===$&&C.c()
u=v.d
u===$&&C.c()
if(u[v.e].c==="outside"){w=i.c6
w=w.c>0||w.d>0}}if(w){t=i.c6.a7d(1)
if(t!=null)i.ei(t,!1)
i.b9D()}if(i.aQ){w=i.d
w===$&&C.c()
v=w.d
v===$&&C.c()
w=v[w.e].c==="outside"&&!i.c6.f&&i.jm.aw(240)===0}else w=!1
if(w){w=i.c6
w.f=!0
w.b0()
i.ei("You feel unwell: a headache. You tire faster until you take pills from a shop.",!1)}if(Date.now()<0||i.ew>0)return
w=!1
if(D.o.E(i.bW,45)===20){v=i.d
v===$&&C.c()
if(v.a.length===0){w=v.d
w===$&&C.c()
v=w[v.e].c==="outside"
w=v}}if(w)i.c7n()
w=i.d
w===$&&C.c()
if(w.a.length===0){v=w.d
v===$&&C.c()
v=v[w.e].c==="outside"}else v=!1
if(v){w=i.gpq()
s=w==null?null:w.FT(0,i.CW.gf_()/1000)
if(s!=null)i.ei("\ud83c\udfc1 "+s,!0)
r=i.aI
if(r!=null){w=i.gpq()
w=(w==null?null:w.x)!=null&&i.aP==null}else w=!1
if(w){w=i.gpq()
w.toString
i.aT4(w.blS(r.f,r.r,i.CW.gf_()/1000))}q=i.fE
if(q!=null){++i.hE
if(i.aYo(q)){i.kG=0
i.r6=Date.now()
i.hR=0
i.fE=null
i.hE=0
if(q.c==="sick"){p=10+i.jm.aw(26)
w=i.ghx()
if(w!=null)w.r+=p
i.ei("The sick person is at the hospital. +"+p+" stars. Well done.",!0)}if(i.c!=null)i.m(i.gj2())}else if(i.hE>=240){i.fE=null
i.hE=0
i.aCI("The job was not finished in time")}}else{w=i.iS
if(w.length!==0&&i.aP==null&&i.bD==null&&i.bC==null&&Date.now()-i.r6>1e4){o=D.d.cA(w,0)
if(!i.aYo(o))i.cB8(o)}else if(i.bD==null&&i.bC==null&&++i.hR>=45)i.cxb()}}else{v=w.d
v===$&&C.c()
if(v[w.e].c!=="outside")i.hR=0}for(w=h.d,v=w.length,u=i.bL,n=0;n<w.length;w.length===v||(0,C.J)(w),++n){m=w[n]
l=i.d
k=l.d
k===$&&C.c()
if(k[l.e].c!=="outside")continue
if((i.ew>0||i.fE!=null||Date.now()<0||i.p4)&&!u.q(0,m.a))continue
if(u.J(0,m.a)){i.hR=0
i.bD=m
i.bC=null
i.b8N()}}u.pt(new A.eeb(h),!0)
j=i.bD
if(j!=null&&!D.d.aX(w,new A.eec(j)))i.Bo()},
cxb(){var w,v,u=this
u.hR=0
w=u.c9Z()
if(w==null)return
if(u.gaYd()){v=u.iS
if(v.length<3)v.push(w)
return}u.b6_(w)},
b6_(d){var w=this
w.hR=0
w.bD=null
w.bC=d
w.b8N()},
b8N(){var w,v=this
v.T=0
w=v.P
if(w!=null)w.a1(0)
v.P=C.de(D.rJ,new A.efH(v))
v.m(new A.efI())},
Bo(){var w=this,v=w.P
if(v!=null)v.a1(0)
w.P=null
if(w.c==null)return
w.m(new A.efP(w))},
ca0(){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null
if(l.ok!=null)return k
if(l.aQ){w=l.d
w===$&&C.c()
v=w.d
v===$&&C.c()
u=v[w.e].c==="outside"}else u=!1
t=l.bD
s=l.bC
if(!u&&t==null&&s==null)return k
r=l.ez
w=new A.eeA()
v=new A.eeJ(r)
q=x.p
p=C.a([],q)
if(s!=null){o=C.h7(D.az,k,C.d(s.gbg5(),k,k,k,k,k,k,D.n8,k,k,k),k,28)
n=s.gaER()
p.push(v.$7$about$avatar$glow$onAnswer$onDecline$onLater$who(s.gbsv(),o,D.bs,new A.eeC(l,s),new A.eeD(l),new A.eeE(l,s),n))}if(t!=null){o=B.D9[t.b]
n=o.b
p.push(v.$6$about$avatar$glow$onAnswer$onDecline$who("NGMY City \xb7 mobile",C.h7(o.e.c,k,C.d(n[0],k,k,k,k,k,k,D.Kq,k,k,k),k,28),D.b9,new A.eeF(l,t),l.gcBG(),n))}if(u){v=C.a([],q)
o=l.cO
if(o!=null)v.push(w.$3$col("\u270b "+o.b,o.a,D.bs))
o=C.a([],q)
if(l.bF==null){n=l.bm
m=n?"\ud83c\udfc3 Run: on":"\ud83c\udfc3 Run"
o.push(w.$3$on(m,new A.eeG(l),n))}if(l.bF==null)o.push(w.$3$col("\u2b06 Jump",new A.eeH(l),D.cq))
v.push(C.A(o,D.m,k,D.e,D.O,0,k,k))
w=l.bF==null
o=w?206:140
v.push(new C.D(D.a0u,new C.a5(o,k,new A.V3(l.c6,!w,12,k),k),k))
p.push(new C.D(B.bEf,C.A(C.a([new A.aJm(new A.eeI(l),k),C.x(v,D.dK,k,D.e,D.O,0,D.p)],q),D.dK,k,D.iR,D.i,0,k,k),k))}return new C.a5(r,k,C.x(p,D.m,k,D.e,D.O,0,D.p),k)},
aUZ(){var w=this.d
w===$&&C.c()
if(w.a.length!==0)this.EA()
else this.a0I()},
EA(){var w=0,v=C.j(x.H),u,t=this,s,r,q,p
var $async$EA=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:p=t.d
p===$&&C.c()
s=p.d
s===$&&C.c()
r=s[p.e]
if(r.gzt()){t.iM("This lesson is done. Try everything: it all works.")
w=1
break}p=r.p4
w=p==="ptrap"||p==="faucet"?3:5
break
case 3:if(r.RG==null)r.RG=A.h7I()
w=6
return C.b(t.yz(new A.eem(r)),$async$EA)
case 6:w=4
break
case 5:if(r.R8==null)r.R8=new A.AG(C.U(x.S,x.N))
w=7
return C.b(t.yz(new A.een(r)),$async$EA)
case 7:case 4:if(t.c==null){w=1
break}t.m(t.gj2())
if(r.gzt()){p=t.ghx()
if(p!=null)p.r+=10
q=r.p4
A:{p="Done! Tap the outlet and plug something in."
if("switch"===q){p="Done! Tap the switch on the wall: the light comes on."
break A}if("fan"===q){p="Done! Tap the wall switch and the fan spins."
break A}if("outlet"===q||"gfci"===q)break A
s=D.d.q(B.iP,q)
if(s){p="Done! Tap the switch on the wall: it works."
break A}s=D.d.q(B.k7,r.p4)
if(s)break A
p="Done! The sink works."
break A}t.iM(p)}case 1:return C.h(u,v)}})
return C.i($async$EA,v)},
akG(d){return this.cIS(d)},
cIS(d){var w=0,v=C.j(x.H),u,t=this,s,r,q,p
var $async$akG=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:p=t.d
p===$&&C.c()
s=p.d
s===$&&C.c()
r=s[p.e].id[d]
q=r.gx_()
w=3
return C.b(t.yz(new A.egB(r)),$async$akG)
case 3:if(t.c==null){w=1
break}t.m(t.gj2())
if(r.gx_()&&!q){p=t.ghx()
if(p!=null)p.r+=8}if(r.gx_()){p=q?"":"You are paid 8 stars. "
s=r.a==="switch"?"Tap it to turn the light on and off.":"Tap it to plug something in."
t.iM("Wired! "+p+s)}case 1:return C.h(u,v)}})
return C.i($async$akG,v)},
a0I(){var w=0,v=C.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$a0I=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:m=t.d
m===$&&C.c()
s=m.d
s===$&&C.c()
r=s[m.e]
s=r.c
if(s==="outside"){w=1
break}q=r.CW
if(q==null){q=A.iqZ(r)
s=s==="hall"?"Hall laundry corner":r.b
p=A.cuJ(q,s,!1,m.b*37+r.a,!1)
p.amJ()
if(!r.ay)p.cM2()
r.CW=p
m=p}else m=q
m.b=t.d.c
o=r.gkT()
w=3
return C.b(t.yz(new A.eep(r)),$async$a0I)
case 3:if(t.c==null){w=1
break}t.m(t.gj2())
if(r.gkT()&&!o){n=10+t.jm.aw(26)
m=t.ghx()
if(m!=null)m.r+=n
m=r.gjW()?"":" The room still needs its plumbing, so it stays red until the pipes are done too."
t.ei(r.b+": the wiring is finished and the light has power. You are paid "+n+" stars!"+m,!0)}else if(r.gkT()){m=r.gjW()?"":" The room still needs its plumbing."
t.iM(r.b+": the wiring is finished. The light has power."+m)}case 1:return C.h(u,v)}})
return C.i($async$a0I,v)},
a0z(){var w=0,v=C.j(x.H),u,t=this,s,r,q,p,o,n
var $async$a0z=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:n=t.d
n===$&&C.c()
s=n.d
s===$&&C.c()
r=s[n.e]
s=r.c
if(!(s==="bathroom"||s==="kitchen")){t.ei("This room has no plumbing. Bathrooms and the kitchen do.",!1)
w=1
break}q=r.fr
if(q==null){s=s==="kitchen"?"kitchen":"bathroom"
s=r.fr=A.h7H(!1,n.b*41+r.a,s)
n=s}else n=q
if(!r.ch&&!n.ga3Z())r.fr.cM1()
r.fr.b=t.d.c
p=r.gjW()
w=3
return C.b(t.yz(new A.eeo(r)),$async$a0z)
case 3:if(t.c==null){w=1
break}t.m(t.gj2())
if(r.gjW()&&!p){o=10+t.jm.aw(26)
n=t.ghx()
if(n!=null)n.r+=o
t.ei(r.b+": the plumbing is finished and nothing leaks. You are paid "+o+" stars!",!0)}else if(r.gjW())t.iM(r.b+": the plumbing is finished and nothing leaks.")
case 1:return C.h(u,v)}})
return C.i($async$a0z,v)},
bDj(){var w=this.c
w.toString
return C.bT(E.mH,null,new A.ec1(this),w,!0,!0,!1,D.ke,!1,!1,x.H)},
bCY(d){var w,v,u,t,s,r,q,p,o=this,n=o.d
n===$&&C.c()
w=n.d
w===$&&C.c()
v=w[n.e]
n=v.c
if(n==="outside"||n==="hall"){o.ei("Add devices in a room, not in the hall or in NGMY City.",!1)
return}n=v.id
if(n.length>=4){o.ei("This room already has four added devices.",!1)
return}w=C.a([-v.geb(0)/4,v.geb(0)/4],x.n)
for(u=v.w,t=D.d.gag(u),s=new C.eJ(t,new A.ebW());s.C();)w.push(t.gR(0).c)
for(u=D.d.gag(u),t=new C.eJ(u,new A.ebX());t.C();)w.push(u.gR(0).c+24)
for(u=n.length,r=0;r<n.length;n.length===u||(0,C.J)(n),++r)w.push(n[r].b)
p=-v.geb(0)/2+14
for(;;){if(!(p<=v.geb(0)/2-14)){q=null
break}if(D.d.cM(w,new A.ebY(p))){q=p
break}p+=6}if(q==null){o.ei("There is no free place left on the back wall.",!1)
return}o.m(new A.ebZ(o,v,d,q))
o.iM("Added. It is red because it is not wired: tap it to wire it.")},
aeN(d,e){var w,v,u=this,t=u.d
t===$&&C.c()
w=t.d
w===$&&C.c()
v=w[t.e].Cc(u.Q)
if(v==null)return
u.m(new A.eef(u,v,D.d.q(B.Sw,v.b),d,e))},
ca6(){var w,v,u=this,t=u.d
t===$&&C.c()
w=t.d
w===$&&C.c()
v=w[t.e].Cc(u.Q)
if(v==null)return
u.m(new A.ega(u,v))},
crt(){var w,v,u=this,t=u.d
t===$&&C.c()
w=t.d
w===$&&C.c()
v=w[t.e].Cc(u.Q)
if(v==null)return
u.m(new A.efe(u,v))
u.iM(B.hJ.h(0,v.b).a+": "+B.cZW[v.f]+".")},
ca4(d){var w,v,u=this,t=u.d
t===$&&C.c()
w=t.d
w===$&&C.c()
v=w[t.e].Cc(u.Q)
if(v==null)return
u.m(new A.efh(u,v))},
bD0(d){var w,v=this,u=v.d
u===$&&C.c()
w=u.d
w===$&&C.c()
v.m(new A.ec_(v,w[u.e].J(0,d)))
v.iM(B.hJ.h(0,d).a+" added. Move it with the arrows.")},
AS(d,e,f,g,h){var w=null,v=e?g.j(0.25):D.c.j(0.07),u=C.n(14),t=e?g:D.aW
t=C.L(t,D.r,e?2:1)
v=C.a([C.p(w,C.d(d,w,w,w,w,w,w,C.l(w,w,e?g:D.c,w,w,w,w,w,w,w,w,11,w,w,D.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),D.f,w,w,new C.o(v,w,t,u,w,w,D.n),w,w,w,w,D.eL,w,w,w)],x.p)
if(h)v.push(C.ap(w,C.p(w,w,D.f,w,w,new C.o(D.ax,w,C.L(B.FZ,D.r,2),w,w,w,D.a7),w,11,w,w,w,w,w,11),w,w,w,-2,-3,w))
return new C.D(D.fz,C.aA(w,new C.an(D.a0,w,D.ac,D.f,v,w),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,!1,D.a4),w)},
it(d,e,f,g){return this.AS(d,e,f,g,!1)},
Jg(d,e,f){return this.AS(d,e,f,D.az,!1)},
aCP(d,e,f,g){var w=null,v=g==null,u=v?34:w,t=v?w:D.ks,s=C.n(10),r=e?D.c:D.aW
r=C.L(r,D.r,e?3:1)
if(v)v=w
else v=C.at(C.d(g,w,w,w,w,w,w,C.l(w,w,d.iR()>0.5?D.w:D.c,w,w,w,w,w,w,w,w,12,w,w,D.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,w,w)
return new C.D(G.om,C.aA(w,C.p(w,v,D.f,w,w,new C.o(d,w,r,s,w,w,D.n),w,34,w,w,t,w,w,u),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,!1,D.a4),w)},
cCz(d,e,f){return this.aCP(d,e,f,null)},
DD(d,e){var w=null,v=D.c.j(0.1),u=C.n(10),t=C.L(D.aW,D.r,1)
return new C.D(D.fz,C.aA(w,C.p(w,C.Y(d,D.c,w,w,w,20),D.f,w,w,new C.o(v,w,t,u,w,w,D.n),w,36,w,w,w,w,w,40),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,e,w,w,w,w,w,w,!1,D.a4),w)},
bLq(){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null
if(k.cx!=null){w=k.dy
return C.A(C.a([C.E(C.d("\ud83c\udfac "+(w.length===0?"Walking in":w),j,1,D.a2,j,j,j,B.fsP,j,j,j),1),k.it("\u23f9 Stop the tour",!0,k.gcBJ(),D.c0)],x.p),D.m,j,D.e,D.i,0,j,j)}switch(k.r){case"furniture":w=k.d
w===$&&C.c()
v=w.d
v===$&&C.c()
u=v[w.e].Cc(k.Q)
w=x.p
v=C.a([],w)
if(u!=null){t=C.a([k.DD(D.k4,new A.edb(k)),k.DD(D.jF,new A.edc(k)),k.DD(D.rQ,new A.edd(k)),k.DD(D.qB,new A.ede(k)),k.DD(H.aqn,k.gca5()),k.DD(D.mf,k.gcrs())],w)
s=k.d
r=s.d
r===$&&C.c()
if(r[s.e].c==="outside")t.push(k.DD(D.Pz,k.gcwR()))
t.push(k.DD(D.ee,k.gca3(k)))
v.push(new C.a5(j,30,C.cj(t,j,j,j,j,j,D.aM,!1),j))}else v.push(B.b1n)
w=C.a([],w)
for(t=B.hJ.gdR(B.hJ),t=t.gag(t);t.C();){s=t.gR(t)
r=D.d.q(B.dmi,s.a)
q=k.d
p=q.d
p===$&&C.c()
if(r===(p[q.e].c==="outside")){r=s.b
w.push(k.it(r.b+" "+r.a,!1,new A.edf(k,s),D.b0))}}v.push(new C.a5(j,30,C.cj(w,j,j,j,j,j,D.aM,!1),j))
return C.x(v,D.m,j,D.e,D.O,0,D.p)
case"walls":w=k.as
v=w<0
w=v?"All walls":"Wall "+(w+1)+": tap Look to reset"
v=C.a([k.Jg(w,v,new A.edg(k))],x.p)
for(o=0;o<8;++o)v.push(k.aCP(B.aAX[o],!1,new A.edh(k,o),B.dwV[o]))
return new C.a5(j,30,C.cj(v,j,j,j,j,j,D.aM,!1),j)
case"floor":w=C.a([],x.p)
for(o=0;o<7;++o){v=B.aAE[o]
t=k.d
t===$&&C.c()
s=t.d
s===$&&C.c()
w.push(k.aCP(v.b,s[t.e].Q===o,new A.edi(k,o),v.a))}return new C.a5(j,30,C.cj(w,j,j,j,j,j,D.aM,!1),j)
case"ceiling":w=k.d
w===$&&C.c()
v=w.d
v===$&&C.c()
w=v[w.e].go==="fan"?"\ud83c\udf00 Fan (tap for light)":"\ud83d\udca1 Light (tap for fan)"
w=C.a([k.it(w,!1,new A.edj(k),D.ba)],x.p)
for(o=0;o<4;++o){v=B.azp[o]
t=k.d
s=t.d
s===$&&C.c()
w.push(k.cCz(v,s[t.e].as===o,new A.edk(k,o)))}return new C.a5(j,30,C.cj(w,j,j,j,j,j,D.aM,!1),j)
default:n=C.aS(x.S)
w=C.a([k.it("\u26f6 Full screen",!1,k.gbRz(),D.aJ)],x.p)
v=k.d
v===$&&C.c()
t=v.d
t===$&&C.c()
if(t[v.e].c==="outside")w.push(k.it("\ud83d\udcf1 Phone",!1,k.gbRB(),D.c1))
v=k.d
t=v.d
t===$&&C.c()
v=t[v.e].w
t=v.length
m=0
for(;m<v.length;v.length===t||(0,C.J)(v),++m){l=v[m]
s=l.d
if(n.J(0,s)){r=k.d.d
r===$&&C.c()
s=r[s]
r=s.gkT()&&s.gjW()
w.push(k.AS("\ud83d\udeaa "+s.b,!1,new A.edl(k,l),D.b0,!r))}}return new C.a5(j,30,C.cj(w,j,j,j,j,j,D.aM,!1),j)}},
B(d){var w,v=this,u=null
if(Date.now()<0){w=C.dw(0,0,0,0-Date.now(),0,0).a
return C.c5(u,F.np,C.bm(!0,C.at(new C.D(D.qw,C.x(C.a([B.fSO,D.af,B.fSV,D.X,B.fT7,D.aC,C.d("It opens again in "+D.o.aq(w,36e8)+"h "+D.o.E(D.o.aq(w,6e7),60)+"m",u,u,u,u,u,u,B.fuK,u,u,u),D.dV,C.bH(D.aW2,u,new A.egE(d),u)],x.p),D.m,u,D.e,D.O,0,D.p),u),u,u,u),!0,!1,D.ag,!0,!0),u,!1,!1,u,u)}w=C.a([C.bR(0,new C.em(v.bHp(d),v.a_),0,0,0)],x.p)
if(v.aH!=null)w.push(C.bR(0,new C.dB(!0,C.ly(new A.egF(v),u,D.dy,D.hD,new C.bQ(v.aL,x.ac),new A.egG(v),new C.bp(1,0,x.e7),x.i),u),0,0,0))
return new C.an(D.a0,u,D.ac,D.t,w,u)},
bJG(){var w,v,u=this,t=null,s=C.a([],x.p)
if(u.gakH())s.push(u.it("\u2705 Complete work",!0,u.gaRO(),D.bg))
w=u.aQ
v=w?"\u23f9 Stop walking":"\ud83d\udeb6 Walk the city"
s.push(u.it(v,w,w?u.gb95():u.gb8R(),D.b9))
s.push(u.it("\ud83c\udfd7 Build",!1,u.gaOw(),D.b9))
w=u.ghx()
w=w==null?t:w.d.length
if(w==null)w=0
s.push(u.AS("\ud83d\udcde Calls",!1,new A.ecO(u),D.c1,w>0))
s.push(u.it("\ud83c\udfe5 Hospital",!1,new A.ecP(u),D.c0))
s.push(u.it("\ud83d\uded2 Shop",!1,new A.ecQ(u),D.cJ))
s.push(u.it("\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc67 People",!1,new A.ecU(u),D.cq))
s.push(u.it("\ud83c\udfe0 Go inside",!1,new A.ecV(u),D.b9))
w=u.aP
if((w==null?t:w.a==="shop")===!0)s.push(u.it("\ud83d\uded2 Buy things",u.k2,new A.ecW(u),D.bs))
w=u.aP
if((w==null?t:w.a==="tower")===!0)s.push(u.it("\ud83c\udfe2 Level "+w.f+" of "+w.gMg(),!1,new A.ecX(u),D.cq))
if(u.fE!=null)s.push(u.it("\ud83d\udccb My job"+(u.ax2()==null?"":" \xb7 "+C.w(u.ax2())+" m"),!1,new A.ecY(u),D.bs))
w=u.iS.length
if(w!==0)s.push(u.it("\u23f3 Waiting: "+w,!1,new A.ecZ(u),D.az))
s.push(u.AS("\ud83d\udef5 Orders",u.gpq().x!=null,new A.ed_(u),D.bs,u.gpq().x==null))
w=u.p4
v=w?"\u23f9 Stop drone":"\ud83d\ude81 Drone"
s.push(u.it(v,w,new A.ed0(u),D.aJ))
w=u.jS
v=w?"\ud83c\udff7 Show tags":"\ud83c\udff7 Hide tags"
s.push(u.it(v,w,new A.ecR(u),D.c0))
s.push(u.it("\ud83d\udc41 Hide all",!1,new A.ecS(u),D.bM))
w=u.gKK()
s.push(u.it("\ud83d\ude96 Uber",(w==null?t:w.f)!=null,u.gcGl(),D.bs))
s.push(u.it("\ud83d\uddfa Map",u.y,new A.ecT(u),D.bt))
return s},
gczP(){var w,v,u,t,s,r,q,p,o=this
if(!o.jS){w=o.f
w===$&&C.c()
return w}w=o.oS
v=o.f
v===$&&C.c()
if(w===v&&o.tk!=null){w=o.tk
w.toString
return w}o.oS=v
w=C.a([],x.E)
for(u=o.f.c,t=u.length,s=0;s<u.length;u.length===t||(0,C.J)(u),++s){r=u[s]
q=!1
if(r.d===0)if(!r.c.A(0,D.bC)){p=r.b
if(!C.cS(p,"rooms still need work",0))q=!C.cS(p,"house is finished",0)}if(q)w.push(r)}u=o.f
return o.tk=new A.qU(v.a,v.b,w,u.d,u.e,!1,0)},
bHp(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d=f.d
d===$&&C.c()
w=d.d
w===$&&C.c()
v=w[d.e]
d=x.w
w=C.aG(a0,e,d).w.a
u=f.er?w.b:w.a
f.ez=u
w=f.d
t=w.d
t===$&&C.c()
t=t[w.e].c==="outside"&&f.aP==null
w=w.a.length!==0?e:new A.ec8(f)
s=f.gczP()
r=f.e
r===$&&C.c()
q=f.at
p=f.ax
o=f.ay
n=f.al
if(f.er)d=62
else if(f.f3)d=C.aG(a0,e,d).w.r.b+66
else d=f.y&&f.d.a.length===0?104:10
m=f.ca0()
l=x.p
k=C.a([],l)
if(f.y&&f.d.a.length===0&&!f.er)k.push(new A.bkk(f.d,f.gc9X(),Math.min(138,u*0.36),e))
j=A.Kh(n,m,r,new A.ec9(f),new A.eca(f),o,q,e,e,new A.ecl(),p,d,f.gbPA(),new A.ecm(f),f.gca1(),s,t,w,k,e)
i=f.y1!=null||f.y2||f.R8||f.k3||f.go||f.k2||f.id
d=f.ok
h=(d==null?e:d.d)===1
if((i||h)&&!f.al){d=C.a([j],l)
if(i){if(f.id)w=f.c3Q()
else if(f.k2)w=f.cyg()
else if(f.go)w=f.cju()
else if(f.k3)w=f.bR0()
else w=f.R8?f.bQf():f.bID()
d.push(C.bR(0,w,0,0,0))}if(h)d.push(C.ap(e,new C.dB(!0,C.at(new C.k_(f.p3,new A.ecn(),e,e,x.cI),e,e,e),e),e,e,0,0,74,e))
g=new C.an(D.a0,e,D.b4,D.t,d,e)}else g=j
if(f.al)return f.bJT(g)
if(f.er)return f.bU1(g)
if(f.f3)return f.cmT(g)
d=f.d
if(d.a.length!==0)d=v.gzt()?"Done \u2713":"To do"
else d=""+d.gcRI()+"/"+f.d.gr7().length+" done"
w=f.d
t=w.d
t===$&&C.c()
w=t[w.e].c==="outside"
t=!w?e:new A.V3(f.c6,f.bF!=null,12,e)
if(w)w=f.bJG()
else{w=f.x?"\ud83d\udd2d See the whole room":"\ud83c\udfe0 Be inside"
w=C.a([f.it(w,!1,new A.eco(f),D.b0)],l)
if(f.d.a.length===0){s=f.cx!=null
r=s?"\u23f9 Stop tour":"\ud83c\udfac Tour"
w.push(f.it(r,s,new A.ecp(f),D.c1))}w.push(f.it("\u2b06 Look up at the ceiling",!1,f.gc4U(),D.b0))
s=f.z
r=s?"\ud83d\udeb6 Stop looking round":"\ud83d\udd04 Look all round (360)"
w.push(f.it(r,s,new A.ecq(f),D.cJ))
w.push(f.it("\ud83d\udcfa TV",!1,f.gcGf(),D.cq))
s=f.d
if(s.a.length===0){r=s.d
r===$&&C.c()
s=r[s.e].c!=="outside"?"\ud83c\udf33 Go outside":"\ud83c\udfe0 Go inside"
w.push(f.it(s,!1,new A.ecr(f),D.b9))}s=f.d
r=s.d
r===$&&C.c()
if(r[s.e].c==="outside"){s=f.aQ
r=s?"\u23f9 Stop walking":"\ud83d\udeb6 Walk about"
w.push(f.it(r,s,s?f.gb95():f.gb8R(),D.b9))}if(f.d.a.length===0)w.push(f.it("\u2795 Add",!1,f.gaOw(),D.b9))
if(f.d.a.length===0){s=f.ghx()
s=s==null?e:s.d.length
if(s==null)s=0
w.push(f.AS("\ud83c\udfd8 Community",!1,new A.ecs(f),D.c1,s>0))}w.push(f.it("\ud83d\udd26 Tester",f.w,new A.ecb(f),D.cJ))
if(f.d.a.length!==0)w.push(f.AS("\ud83d\udd27 Do the lesson",!1,f.gca_(),D.bs,!v.gzt()))
else{s=f.AS("\u26a1 Wiring",!1,f.gcjn(),D.bs,!v.gkT())
r=v.c
r=(r==="bathroom"||r==="kitchen")&&!v.gjW()
D.d.v(w,C.a([s,f.AS("\ud83d\udeb0 Plumbing",!1,f.gciN(),D.cq,r),f.it("\ud83d\uddfa Map",f.y,new A.ecc(f),D.bt)],l))}}return A.II(D.az,new A.ecd(f,a0),C.x(C.a([new C.a5(e,30,C.cj(w,e,e,e,e,e,D.aM,!1),e),D.aw,new C.a5(e,30,C.cj(C.a([f.Jg("\ud83d\udc41 Look",f.r==="look",new A.ece(f)),f.Jg("\ud83d\udecb Furniture",f.r==="furniture",new A.ecf(f)),f.Jg("\ud83e\uddf1 Walls",f.r==="walls",new A.ecg(f)),f.Jg("\ud83d\udfeb Floor",f.r==="floor",new A.ech(f)),f.Jg("\u2b1c Ceiling",f.r==="ceiling",new A.eci(f)),f.Jg("\ud83d\udeaa Doors",f.r==="doors",new A.ecj(f)),f.it("\ud83d\udcd8 Learn",!1,new A.eck(a0),D.bt)],l),e,e,e,e,e,D.aM,!1),e),D.aw,f.bLq()],l),D.E,e,D.e,D.O,0,D.p),g,d,v.b,t)},
cpt(d){return C.bT(E.mH,null,new A.efc(this),d,!0,!0,!0,D.ke,!1,!1,x.H)}}
A.bkk.prototype={
B(d){var w=null,v=D.k.F((this.e-10)/126,0.5,1),u=D.w.j(0.6),t=C.n(12),s=C.L(D.aW,D.r,1)
return C.p(w,new C.a5(126*v,84*v,C.aA(w,C.eL(D.A,C.b4(w,w,w,new A.bjK(this.c,w),B.fbU),D.f,D.vN),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new A.dxG(this,v),w,w,w,w,!1,D.a4),w),D.f,w,w,new C.o(u,w,s,t,w,w,D.n),w,w,w,w,D.md,w,w,w)}}
A.bjK.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=this.b,h=i.d
h===$&&C.c()
w=h.length
v=0
for(;v<h.length;h.length===w||(0,C.J)(h),++v){u=h[v]
t=u.d*14+1
s=u.e*14+1
r=t+(u.f*14-2)
q=s+(u.r*14-2)
p=new C.a2(t,s,r,q)
o=u.a===i.e
if(u.gkT()&&u.gjW())n=D.bg
else n=!u.gkT()?D.ax:D.d5
m=C.br(p,D.hM)
$.S()
l=new C.ao(D.Q,D.N,D.T,D.U,D.S)
l.r=n.j(u.gkT()&&u.gjW()?0.35:0.5).gp(0)
d.ap(m,l)
m=C.br(p,D.hM)
l=new C.ao(D.Q,D.N,D.T,D.U,D.S)
l.b=D.aa
l.c=o?2.2:0.8
l.r=(o?D.c:D.bV).gp(0)
d.ap(m,l)
switch(u.c){case"bedroom":m="\ud83d\udecf"
break
case"bathroom":m="\ud83d\udebf"
break
case"kitchen":m="\ud83c\udf73"
break
case"living":m="\ud83d\udecb"
break
case"outside":m="\ud83c\udf33"
break
default:m=""
break}k=new C.iF(new C.en(m,j,j,D.cH,j,j,j,j,j,j,B.fs1),D.a5,D.bW,new C.jd(1),j,j,j,j,D.bX,j,D.ct)
k.ef()
m=k.b
l=m.c
m=m.a.c
k.a4(d,new C.q(t+(r-t)/2-l/2,s+(q-s)/2-m.gba(m)/2))}},
aC(d){return!0}}
A.aJm.prototype={
S(){return new A.buu()},
bjw(d,e){return this.c.$2(d,e)}}
A.buu.prototype={
b0g(d){var w,v,u={},t=u.a=d.aK(0,B.emb),s=t.gcF()>46?u.a=t.eV(0,t.gcF()).aO(0,46):t,r=s.a/46,q=-s.b/46,p=Math.sqrt(r*r+q*q)
s=this.a
s.toString
w=p<0.15
v=w?0:r
s.bjw(v,w?0:q)
this.m(new A.f9L(u,this))},
b0f(){this.a.bjw(0,0)
this.m(new A.f9K(this))},
B(d){var w=this,v=null,u=C.p(v,v,D.f,v,v,new C.o(D.w.j(0.42),v,C.L(D.b9.j(0.9),D.r,2.4),v,v,v,D.a7),v,132,v,v,v,v,v,132),t=C.p(v,v,D.f,v,v,new C.o(v,v,C.L(D.b9.j(0.25),D.r,1.5),v,v,v,D.a7),v,66,v,v,v,v,v,66),s=w.d,r=s==null
if(r)s=D.I
return C.mI(D.c7,new C.a5(132,132,new C.an(D.A,v,D.ac,D.t,C.a([u,t,C.dO(C.p(v,v,D.f,v,v,new C.o(D.b9.j(r?0.55:0.9),v,C.L(D.c,D.r,2),v,v,v,D.a7),v,56,v,v,v,v,v,56),s)],x.p),v),v),v,new A.f9M(w),new A.f9N(w),v,new A.f9O(w),v,v,new A.f9P(w))}}
A.f4j.prototype={}
A.ML.prototype={}
A.QH.prototype={
gbg5(){switch(this.c){case"sick":var w="\ud83e\udd12"
break
case"light":w="\ud83d\udca1"
break
case"office":w="\ud83c\udfe2"
break
default:switch(this.e){case"dryer":w="\ud83d\udc55"
break
case"range":w="\ud83c\udf73"
break
case"washer":w="\ud83e\uddfa"
break
default:w="\u26a1"
break}break}return w},
gaER(){switch(this.c){case"sick":var w=this.d
if(w.length===0)w="A neighbour"
break
case"light":w="City lights office"
break
case"office":w="Office manager"
break
default:w="Your neighbour"
break}return w},
gbsv(){switch(this.c){case"sick":var w="Needs a doctor"
break
case"light":w="A street light is out"
break
case"office":w="No power in an office"
break
default:switch(this.e){case"dryer":w="The dryer outlet at a house"
break
case"range":w="The stove outlet at a house"
break
case"washer":w="The washer outlet at a house"
break
default:w="No power at a house"
break}break}return w},
gaIa(d){var w,v=this,u="I will pay you between 10 and 35 stars. Thank you!",t=v.c
A:{if("sick"===t){w=C.a(["Hello! "+v.gaER()+" is very sick and cannot get up.","Please take them to the hospital: walk into the hospital and onto the desk to admit them.",u],x.s)
break A}if("office"===t){w=""+v.f
w=C.a(["Hello, this is the office manager. The office on level "+w+" of "+v.b+" has lost its power and nobody can work.","Please take the elevator up to level "+w+", and fix the wiring at the breaker panel there.",u],x.s)
break A}if("light"===t){w=C.a(["Hello! A street light is out and the street is dark.","It is the dark one with the red sign. Could you fix its wiring?",u],x.s)
break A}w=v.e
if(w==="dryer"){w=C.a(["Hello! The dryer in "+v.b+" does not heat any more and the plug is hot to the touch.","It is on the 240 volt outlet in the hall, the laundry corner. Could you look at the dryer outlet and wire it again? Switch the power off before you touch anything, and check if it is the old 3-wire or the new 4-wire kind.",u],x.s)
break A}if(w==="range"){w=C.a(["Hello! The electric stove in "+v.b+" has stopped working and the outlet behind it smells burnt.","It is the 50 amp outlet in the kitchen. Could you wire the range outlet again? Switch the power off before you touch anything, and check if it is the old 3-wire or the new 4-wire kind.",u],x.s)
break A}if(w==="washer"){w=C.a(["Hello! The washing machine in "+v.b+" keeps tripping the breaker.","It is on its own 20 amp outlet in the laundry corner in the hall. Could you wire the washer outlet again? Switch the power off before you touch anything.",u],x.s)
break A}w=C.a(["Hello! All the lights went out in "+v.b+". The power is off in the whole house.","Could you check the breaker panel inside and fix the wiring? Switch the power off before you touch anything.",u],x.s)
break A}return w}}
A.aKk.prototype={
S(){return new A.bwF()}}
A.bwF.prototype={
B(d){var w,v,u=this,t=null,s=C.aG(d,t,x.w).w,r=D.w.j(0.55),q=C.L(D.bV,D.r,1),p=u.d,o=C.ap(0,C.at(C.aA(t,C.p(t,C.Y(p?B.bR0:B.bR1,D.c,t,t,t,20),D.f,t,t,new C.o(r,t,q,t,t,t,D.a7),t,38,t,t,t,t,t,38),D.y,!1,B.hos,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new A.ffu(u),t,t,t,t,t,t,!1,D.a4),t,t,t),t,t,t,6,0,t)
if(p)return C.c5(t,D.w,new C.an(D.a0,t,D.ac,D.t,C.a([C.bR(0,u.a.d,0,0,0),o],x.p),t),t,!1,!1,t,t)
r=s.a
q=r.b
r=r.a
p=u.a
w=p.c
v=s.am2(D.ag,new C.av(q,r),D.ag)
return C.c5(t,D.w,C.at(new C.wz(w,C.q4(new C.a5(q,r,new C.an(D.a0,t,D.ac,D.t,C.a([C.bR(0,p.d,0,0,0),o],x.p),t),t),v),t),t,t,t),t,!1,!1,t,t)}}
A.bW0.prototype={}
A.m3.prototype={}
A.O1.prototype={
S(){return new A.blf()}}
A.blf.prototype={
py(d){var w=this.c
w.toString
return C.a6(w,!1).cd(C.eb(new A.dVp(d),!1,null,x.H))},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null
$.at3="tech"
w=C.aH(m,m,m,m,X.nE,m,m,m,new A.dVs(d),m,m,m,m,m,m)
v=D.az.j(0.16)
u=C.n(13)
t=x.p
u=C.A(C.a([w,C.p(m,B.bcd,D.f,m,m,new C.o(v,m,C.L(D.az.j(0.6),D.r,1),u,m,m,D.n),m,40,m,m,m,m,m,40),D.at,B.bHN],t),D.m,m,D.e,D.i,0,m,m)
v=C.n(26)
w=C.L(D.az,D.r,1.8)
s=x.V
r=C.a([new C.ac(0,D.G,D.az.j(0.28),D.du,26)],s)
r=C.aA(m,C.p(m,C.x(C.a([C.p(m,B.bcF,D.f,m,m,new C.o(D.az.j(0.2),m,C.L(D.az,D.r,2),m,C.a([new C.ac(0,D.G,D.az.j(0.5),D.I,22)],s),m,D.a7),m,78,m,m,m,m,m,78),D.af,B.fLP,D.aw,B.fUX,D.aC,C.p(m,B.fLL,D.f,m,m,new C.o(D.az,m,m,C.n(20),m,m,D.n),m,m,m,m,Z.amf,m,m,m)],t),D.m,m,D.e,D.i,0,D.p),D.f,m,m,new C.o(m,m,w,v,r,B.c6d,D.n),m,m,m,m,D.wj,m,m,m),D.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new A.dVt(n),m,m,m,m,m,m,!1,D.a4)
v=D.w.j(0.6)
w=C.n(16)
w=C.a([r,C.ap(m,C.aA(m,C.p(m,B.h_q,D.f,m,m,new C.o(v,m,C.L(F.f0,D.r,1.4),w,m,m,D.n),m,m,m,m,B.bAW,m,m,m),D.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new A.dVu(n),m,m,m,m,m,m,!1,D.a4),m,m,m,10,10,m)],t)
v=n.cab("JOBS")
r=n.b0h(C.a([n.AU("\ud83d\udd0c","Wire a room","Go to a room that needs wiring",D.bg,new A.dVx(n)),n.AU("\ud83d\udebd","Plumb a room","Go to a bathroom or kitchen",D.aJ,new A.dVy(n)),n.AU("\ud83d\udd27","Fix a house","Walk the house and fix every sign",D.az,new A.dVz(n)),n.AU("\ud83e\uddf1","Build a room","Frame, drywall, then wire",D.b9,new A.dVA(n)),n.AU("\u26a1","Wiring bench","Just the wiring, one room",D.bs,new A.dVB(n)),n.AU("\ud83e\uddea","Safety inspection","A test job: marked when you submit",D.bt,new A.dVC(n)),n.AU("\ud83d\udcde","Service calls","A customer rings with problems",D.i3,new A.dVD(n)),n.AU("\ud83c\udfd8","Neighbourhood jobs","Fix lights and wiring around the city",D.aJ,new A.dVE(n))],t))
s=n.e?D.az.j(0.25):D.c.j(0.07)
q=n.e
p=C.L(q?D.az:D.aW,D.r,1)
o=q?D.cz:D.eW
w=C.a([u,D.af,new C.an(D.a0,m,D.ac,D.t,w,m),v,r,n.b0i("LESSONS",C.aA(m,C.p(m,C.Y(o,q?D.az:D.ad,m,m,m,19),D.f,m,m,new C.o(s,m,p,m,m,m,D.a7),m,34,m,m,m,m,m,34),D.y,!1,B.hoa,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new A.dVv(n),m,m,m,m,m,m,!1,D.a4))],t)
if(n.e){v=D.c.j(0.07)
w.push(new C.D(D.d3,C.aM(m,D.Z,!0,m,!0,D.t,m,C.aN(),m,m,m,m,m,m,2,C.bs(m,new C.b6(4,C.n(16),D.a1),m,m,m,m,m,m,!0,m,m,m,m,m,m,v,!0,m,m,m,m,m,m,m,m,m,m,m,m,m,A5.Ey,"Search the lessons: outlet, switch, dryer, sink...",m,m,m,m,m,!0,m,m,m,!0,!0,!1,m,B.c1P,m,m,m,m,m,m,m,m,m,m,m,m),D.y,!0,m,!0,m,!1,m,D.ak,m,m,m,B.ho5,m,m,m,m,m,1,m,m,!1,"\u2022",m,new A.dVw(n),m,m,m,!1,m,m,!1,m,!0,m,D.ab,m,m,m,m,m,m,m,m,m,m,m,D.KJ,!0,D.a5,m,D.ao,m,m,m,m),m))}D.d.v(w,n.c3M())
return C.c5(m,D.c3,C.bm(!0,C.cj(w,m,m,B.alv,m,m,D.ai,!1),!0,!1,D.ag,!0,!0),m,!1,!1,m,m)},
c3M(){var w,v,u,t,s,r,q,p=this,o=x.dz,n=C.a([],o)
for(w=0;w<24;++w){v=B.die[w]
n.push(new C.QQ([v.d,v.e,v.b,new A.dVi(p,v),v.c,v.a]))}n.push(new C.QQ(["Sheets, screws, tape, mud, sand",D.aJ,"\ud83e\uddf1",new A.dVj(p),"Hanging drywall","drywall sheetrock sheet screws tape mud sand paint primer ceiling walls"]))
n.push(new C.QQ(["A bare frame: boxes, holes, cable",D.az,"\ud83c\udfe0",new A.dVk(p),"Wiring a house","wire wiring house frame studs drill cable box outlet switch panel"]))
n.push(new C.QQ(["Three-way switch, fan with light",D.bt,"\ud83e\udde0",new A.dVl(p),"Diagram lessons","diagram wiring picture"]))
n.push(new C.QQ(["Short cards for beginners",D.bt,"\ud83d\udcd8",new A.dVm(p),"Learn the trades","cards beginner trade"]))
u=D.a.fw(p.f.toLowerCase(),C.af("\\s+",!0,!1,!1,!1))
t=C.T(u).k("X<1>")
s=C.C(new C.X(u,new A.dVn(),t),t.k("M.E"))
o=C.a([],o)
for(u=n.length,w=0;w<n.length;n.length===u||(0,C.J)(n),++w){r=n[w]
if(D.d.cM(s,new A.dVo(r)))o.push(r)}if(o.length===0)return C.a([B.eqb],x.p)
n=x.p
u=C.a([],n)
for(t=o.length,w=0;w<o.length;o.length===t||(0,C.J)(o),++w){q=o[w].a
u.push(p.AU(q[2],q[4],q[0],q[1],q[3]))}return C.a([p.b0h(u)],n)},
b0i(d,e){var w=null,v=x.p,u=C.a([],v),t=e!=null
if(t)u.push(Z.aT5)
u.push(C.E(C.p(w,w,D.f,D.az.j(0.35),w,w,w,1,w,w,w,w,w,w),1))
u.push(new C.D(D.f1,C.d(d,w,w,w,w,w,w,B.fos,w,w,w),w))
u.push(C.E(C.p(w,w,D.f,D.az.j(0.35),w,w,w,1,w,w,w,w,w,w),1))
if(t)D.d.v(u,C.a([D.at,new C.a5(34,w,e,w)],v))
return new C.D(B.bFz,C.A(u,D.m,w,D.e,D.i,0,w,w),w)},
cab(d){return this.b0i(d,null)},
b0h(d){var w,v,u,t,s=null,r=x.p,q=C.a([],r)
for(w=0;v=d.length,w<v;w+=2){u=d[w]
t=w+1
v=t<v?d[t]:D.bL
q.push(new C.D(D.cv,new C.ED(new C.c7(D.aM,D.e,D.i,D.al,s,D.p,s,0,C.a([new C.by(1,D.bc,u,s),D.ae,new C.by(1,D.bc,v,s)],r),s),s),s))}return C.x(q,D.m,s,D.e,D.i,0,D.p)},
AU(d,e,f,g,h){var w=null,v=C.a([g.j(0.2),B.FZ],x.O),u=C.n(22),t=C.L(g.j(0.55),D.r,1.4),s=x.V,r=C.a([new C.ac(0,D.G,g.j(0.18),D.cA,16)],s),q=g.j(0.22),p=C.L(g.j(0.7),D.r,1.5)
s=C.a([new C.ac(0,D.G,g.j(0.35),D.I,14)],s)
return C.aA(w,C.p(w,C.x(C.a([C.p(w,C.at(C.d(d,w,w,w,w,w,w,D.xc,w,w,w),w,w,w),D.f,w,w,new C.o(q,w,p,w,s,w,D.a7),w,56,w,w,w,w,w,56),D.X,C.d(e,w,w,w,w,w,w,D.ja,D.K,w,w),D.cU,C.d(f,w,2,D.a2,w,w,w,B.fAg,D.K,w,w)],x.p),D.m,w,D.bb,D.i,0,D.p),D.f,w,w,new C.o(w,w,t,u,r,new C.a9(D.b1,D.b7,D.x,v,w,w),D.n),w,w,w,w,B.bAE,w,w,w),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,h,w,w,w,w,w,w,!1,D.a4)}}
A.awY.prototype={
S(){return new A.buh()},
bsa(){return this.c.$0()}}
A.buh.prototype={
Z(){this.a3()
this.d=C.de(D.nv,new A.f9B(this))},
t(){var w=this.d
if(w!=null)w.a1(0)
this.a2()},
B(d){var w=null,v=D.w.j(0.6),u=C.n(18),t=C.L(D.bs,D.r,1.5)
return C.p(w,C.d("\u2b50 "+C.w(this.a.bsa()),w,w,w,w,w,w,B.foO,w,w,w),D.f,w,w,new C.o(v,w,t,u,w,w,D.n),w,w,w,D.iK,D.qu,w,w,w)}}
A.b8e.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=x.w,e=C.aG(d,g,f).w.a.a>C.aG(d,g,f).w.a.b
if(h.d)return A.h8c(E.y8,h.r,h.z,h.Q,h.y,h.as,h.db,h.w,h.f,h.c)
w=h.r
v=x.p
u=C.a([C.bR(0,A.h8c(E.y8,w,h.z,h.Q,h.y,h.as,h.db,h.w,h.f,h.c),0,0,0)],v)
t=h.ch
s=t!=null
if(s)u.push(C.ap(g,C.x(t,D.E,g,D.e,D.i,0,D.p),g,g,8,g,8,g))
t=C.a([],v)
r=h.CW
if(r!=null)D.d.v(t,r)
r=C.a([],v)
q=h.e
if(q!=null)r.push(new A.awY(q,g))
r.push(new A.ag9(D.hU,"Zoom in",w,!1,g))
t.push(C.A(r,D.m,g,D.e,D.O,0,g,g))
t.push(new A.ag9(D.wE,"Zoom out",w,!0,g))
w=h.x
t.push(h.ayu(B.bOX,"Back to the whole view",w))
t.push(h.ayu(Ap.CV,"Flip up and down swiping",new A.czk()))
t.push(h.ayu(D.jJ,"Flip left and right swiping",new A.czl()))
u.push(C.ap(g,C.x(t,D.dK,g,D.e,D.i,0,D.p),g,g,g,8,8,g))
t=h.dx
if(t!=null)u.push(C.ap(14,C.at(t,g,g,g),g,g,0,0,g,g))
t=h.at
if(t!=null){r=e?236:10
q=e?g:62
if(e)s=6
else{p=h.cy
if(p==null)s=s?60:10
else s=p}p=e?D.k.F(C.aG(d,g,f).w.a.a*0.4,190,330):1/0
o=e?B.bGM:D.ny
n=h.ax
m=n?D.e_:D.eo
m=m.j(e?0.88:0.95)
l=C.n(e?10:14)
k=C.L(n?D.b9:D.c0,D.r,1)
n=e?3:g
j=e?D.a2:g
u.push(C.ap(g,new C.cR(new C.aZ(0,p,0,1/0),C.p(g,C.d(t,g,n,j,g,g,g,C.l(g,g,D.c,g,g,g,g,g,g,g,g,e?10.5:12.5,g,g,D.V,g,1.3,!0,g,g,g,g,g,g,g,g),g,g,g),D.f,g,g,new C.o(m,g,k,l,g,g,D.n),g,g,g,g,o,g,g,g),g),g,g,r,q,s,g))}t=h.ay
if(t!=null){s=e?8:10
r=e?g:10
f=e?D.k.F(C.aG(d,g,f).w.a.a*0.36,180,300):1/0
q=e?B.bGL:E.alg
p=e?B.bqI:E.afh
o=C.n(e?11:16)
n=C.L(D.aW,D.r,1)
m=t.a
l=e?1:g
k=e?D.a2:g
m=C.d(m,g,l,k,g,g,g,C.l(g,g,D.b0,g,g,g,g,g,g,g,g,e?11.5:14.5,g,g,D.u,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)
l=e?1:3
t=t.b
k=e?2:g
j=e?D.a2:g
i=e?10:12.5
t=C.a([m,new C.a5(g,l,g,g),C.d(t,g,k,j,g,g,g,C.l(g,g,D.ad,g,g,g,g,g,g,g,g,i,g,g,g,g,e?1.25:1.4,!0,g,g,g,g,g,g,g,g),g,g,g)],v)
m=h.cx
if(m!=null)D.d.v(t,C.a([D.an,m],v))
t=C.E(C.x(t,D.E,g,D.e,D.i,0,D.p),1)
m=e?D.ae7:g
l=e?D.ag:D.cl
u.push(C.ap(8,new C.cR(new C.aZ(0,f,0,1/0),C.p(g,C.A(C.a([t,C.aH(g,m,g,g,C.Y(D.cz,D.aD,g,g,g,e?16:20),g,g,g,w,l,g,g,g,g,D.ce)],v),D.E,g,D.e,D.i,0,g,g),D.f,g,g,new C.o(p,g,n,o,g,g,D.n),g,g,g,g,q,g,g,g),g),g,g,s,r,g,g))}return new C.an(D.a0,g,D.ac,D.t,u,g)},
ayu(d,e,f){var w=null,v=D.w.j(0.55),u=C.L(D.aW,D.r,1)
return new C.D(D.eK,C.hb(C.aA(w,C.p(w,C.Y(d,D.c,w,w,w,20),D.f,w,w,new C.o(v,w,u,w,w,w,D.a7),w,38,w,w,w,w,w,38),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,!1,D.a4),w,e,w,w),w)}}
A.aYp.prototype={
B(d){var w,v=this,u=null,t=x.p,s=C.a([C.aH(u,u,u,u,X.nE,u,u,u,new A.bY3(d),u,u,u,u,u,u)],t),r=v.x,q=v.c,p=v.d
if(r==null)s.push(C.E(C.d(q,u,u,u,u,u,u,C.l(u,u,p,u,u,u,u,u,u,u,u,16,u,u,D.u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),1))
else D.d.v(s,C.a([C.d(q,u,u,u,u,u,u,C.l(u,u,p,u,u,u,u,u,u,u,u,16,u,u,D.u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),D.at,C.E(r,1),D.at],t))
r=p.j(0.15)
q=C.n(16)
w=C.L(p.j(0.6),D.r,1)
s.push(C.aA(u,C.p(u,C.A(C.a([C.Y(Aq.aoZ,p,u,u,u,17),D.e1,C.d(v.w,u,u,u,u,u,u,C.l(u,u,p,u,u,u,u,u,u,u,u,12,u,u,D.u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],t),D.m,u,D.e,D.O,0,u,u),D.f,u,u,new C.o(r,u,w,q,u,u,D.n),u,u,u,u,D.qu,u,u,u),D.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,v.r,u,u,u,u,u,u,!1,D.a4))
s=C.A(s,D.m,u,D.e,D.i,0,u,u)
q=C.aG(d,u,x.w).w
return C.c5(u,D.c3,C.bm(!0,C.x(C.a([new C.D(B.bFM,s,u),C.p(u,C.cg(v.f,D.t,u,D.y,u,u,u,u,D.ai),D.f,u,new C.aZ(0,1/0,0,q.a.b*0.34),B.b7D,u,u,u,u,E.a_M,u,u,1/0),C.E(C.bx(Ao.adt,v.e,D.aq),1)],t),D.m,u,D.e,D.i,0,D.p),!0,!1,D.ag,!0,!0),u,!1,!1,u,u)}}
A.adt.prototype={
aF0(d){var w=this,v=new C.V(Date.now(),0,!1),u=w.amV$===d&&D.o.aq(v.bE(w.amW$).a,1000)<2500
w.amV$=u?"":d
w.amW$=v
return u},
aI8(d){var w,v=this
if(d.length===0)return
w=v.a5o$
if(w!=null)w.a1(0)
v.m(new A.dm_(v,d))
v.a5o$=C.cB(D.jZ,new A.dm0(v))},
aGk(){var w=this.a5o$
return w==null?null:w.a1(0)}}
A.BH.prototype={
S(){var w=new C.vj()
$.vM()
w.fX(0)
return new A.aAY(w,B.nH,null,"",C.c1(2000,1,1,0,0,0,0,0))},
gdd(d){return this.d}}
A.aAY.prototype={
gts(){var w,v=this,u=v.d
if(u===$){w=A.oi(v.a.c)
v.d!==$&&C.bE()
v.d=w
u=w}return u},
gdL(d){var w,v=this.e
if(v===$){w=this.a.d
v=this.e=w==null?new A.AG(C.U(x.S,x.N)):w}return v},
gasV(){var w=this.gts().a
return w==="light"||w==="fan"},
geZ(){var w,v=this,u=v.f
if(u===$){w=v.gasV()?new A.uE(1.15,0.12,11,B.W8,$.aw()):new A.uE(0.42,0.26,12,B.hcR,$.aw())
v.f!==$&&C.bE()
u=v.f=w}return u},
glb(){var w=this,v=w.r
return v===$?w.r=A.bDm(w.gts(),w.gdL(0),!0):v},
aBM(d){var w
this.m(new A.ddp(this,d))
switch(d){case"practice":w="Practice: you can put a wire anywhere. The mistake shows when the power goes on."
break
case"test":w="Test: put every wire where you think it goes. Nothing is marked until you submit."
break
default:w="Learn: a wrong wire is refused and explained."
break}this.hv(w,!0)},
t(){var w=this.as
if(w!=null)w.a1(0)
this.aGk()
this.a2()},
hv(d,e){var w=this,v=w.as
if(v!=null)v.a1(0)
w.m(new A.ddn(w,d,e))
w.as=C.cB(D.lI,new A.ddo(w))},
mj(d){return this.hv(d,!1)},
pz(){var w=this.gdL(0)
w.d=w.d&&w.a&&w.c>=2
this.r=A.bDm(this.gts(),w,!0)},
or(){var w,v,u,t=this
if(t.gasV()&&t.gdL(0).c===0){t.geZ().fW(11,0.12,B.W8,1.15)
t.m(new A.dd7(t))
return}w=t.geZ()
v=t.gdL(0).c===0
u=v?2.8:0.4
v=v?12:10
w.fW(v,0.26,new A.r(0,0.1,u),0.42)
t.m(new A.dd8(t))},
aZ5(d){var w,v,u,t=this
if(t.gasV()){t.geZ().fW(9,0.12,B.W8,1.15)
return}w=t.gts().e
v=C.T(w)
u=C.nv(new C.cM(new C.X(w,new A.dd9(d),v.k("X<1>")),new A.dda(),v.k("cM<1,m>")))
if(u==null)u=""
if(d==="ground"||u==="ground")t.geZ().fW(8,0.55,B.hhn,0.15)
else if(d==="white"||u==="neutral")t.geZ().fW(8.5,0.2,B.hm6,0.95)
else t.geZ().fW(8.5,0.2,B.h93,-0.95)},
ca7(){var w,v,u,t="ground",s=this.gdL(0),r=!s.a||s.c>0,q=new A.dd6(this),p=this.gts(),o=p.a
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
Jj(d){var w,v,u,t,s,r,q,p,o,n=this,m="square",l="STOP! The power is still on. Turn the breaker OFF before you touch any wire.",k="Recorded."
if(d===0){n.or()
return}if(B.aSc.q(0,d))return
if(d===40){w=n.gdL(0)
if(w.a){A.fD(180,220,0.25,m)
n.mj("STOP! The power is still on. Turn the breaker OFF before you touch the strap.")}else if(n.gts().a==="cord3")n.hv("Leave the ground strap on. On a 3-wire cord it joins the neutral to the frame of the appliance. That is what grounds it.",!0)
else if(w.c!==0)n.mj("The device is already in the box. Pull it out again to change it.")
else{n.m(new A.ddb(n))
A.pN()
n.hv("Ground strap removed. Now the frame will be grounded by the green wire, and the neutral stays clear of it.",!0)}return}w=n.gts()
v=w.f
u=C.T(v).k("X<1>")
t=C.C(new C.X(v,new A.ddc(d),u),u.k("M.E"))
v=w.a
s=A.hDj(v,d)
u=s!=null
if(u){r=n.gdL(0)
r=r.c===0&&r.b.ij(0,s)}else r=!1
if(r){w=n.gdL(0)
if(w.a){A.fD(180,220,0.25,m)
n.mj(l)
return}w=w.b
w.bt(w,new A.ddd(s))
n.m(n.gcaa())
n.hv("Wire taken off the screw.",!0)
return}r=!1
if(t.length!==0){q=n.gdL(0)
if(q.c===0){q=q.b
if(q.an(0,d))r=n.w.length===0||q.h(0,d)===n.w}}if(r){w=n.gdL(0)
if(w.a){A.fD(180,220,0.25,m)
n.mj(l)
return}w.b.W(0,d)
n.m(new A.dde(n))
n.hv(w.z?k:"Wire taken off.",!0)
return}if(u){u=n.gdL(0)
u=u.c===0&&!u.b.ij(0,s)&&D.d.aX(w.e,new A.ddf(s))}else u=!1
if(u){n.m(new A.ddg(n,s,d))
if(n.w.length!==0){n.aZ5(s)
n.hv(D.d.fl(w.e,new A.ddh(s)).b+": picked up. Now tap the screw, nut or wire it joins.",!0)}return}if(t.length!==0&&n.w.length!==0&&n.gdL(0).c===0){u=n.gdL(0)
p=A.hDd(w,u,n.w,D.d.gH(t),!1)
if(p!=null){++n.Q
A.fD(180,220,0.25,m)
n.mj(p)}else if(u.z){A.fD(520,60,0.25,"tri")
n.m(new A.ddi(n,d))
n.hv(k,!0)
n.w=""}else{A.pN()
n.m(new A.ddj(n,d))
if(u.w)n.hv(D.d.gH(t).b+": fastened.",!0)
else if(A.aiE(w,u))n.hv("Every wire is on the right screw. Now push the device into the box.",!0)
else n.hv(D.d.gH(t).b+": fastened correctly.",!0)
n.geZ().A0(7,A.aQs(v,d,u))
n.w=""}return}o=n.glb().b.h(0,d)
if(o!=null){n.m(new A.ddk(n,d))
w=n.geZ()
v=o.c
w.A0(o.d,v)}},
cos(){var w,v=this
v.m(new A.ddl(v))
w=v.gdL(0)
if(w.a){A.fD(120,200,0.25,"saw")
if(w.c===0)v.mj("The breaker is ON. The wires are LIVE at 120 volts. Turn it OFF before you touch anything.")}else{A.fD(600,100,0.25,"tri")
v.hv("Breaker OFF. It is safe to work on the wires. (In real life, always test them with a tester first.)",!0)}},
cDQ(){var w,v,u=this,t="The tester glows: this outlet has 120 volts and is wired correctly. The lesson is complete! Mistakes: ",s=" is wired correctly: every wire is on the terminal that belongs to it. The lesson is complete! Mistakes: ",r=u.gts(),q=u.gdL(0),p=A.x7(r,q)
if(p.a!=="ok"){u.m(new A.ddq(u,p));++u.Q
A.fD(180,220,0.25,"square")
C.fL()
r=p.r==="arc"
w=r?95:150
A.fD(w,450,0.5,r?"saw":"noise")
if(q.z)r=p.d?"The breaker tripped.":"Power is on."
else r=p.b+"\nHow to fix it: "+p.w
u.mj(r)
return}u.m(new A.ddr(u))
A.pN()
v=r.a
A:{if("switch"===v){r="Power on. Flip the switch and the light turns on: both black wires are on brass screws, so the switch opens and closes the hot wire. The lesson is complete! Mistakes: "+u.Q+"."
break A}if("gfci"===v){r="Power on. Press RESET (it clicks), then TEST: it must shut the outlet off. Wired on LINE, it protects the whole circuit. The lesson is complete! Mistakes: "+u.Q+"."
break A}if("outlet"===v){r=t+u.Q+"."
break A}q=D.d.q(B.iP,v)
if(q){r="Power on. "+r.b+(s+u.Q+".")
break A}if(v!=="light"&&v!=="fan"){r="Power on. The "+r.b.toLowerCase()+(s+u.Q+".")
break A}r=t+u.Q+"."
break A}u.hv(r,!0)},
B(a1){var w,v=this,u=null,t=v.ca7(),s=D.d.bj(t,new A.ddA()),r=s<0?"All done":"Step "+(s+1)+"/"+v.gts().d.length,q=v.gts(),p=v.gdL(0),o=A.aiE(q,p)&&!p.a,n=v.glb(),m=v.geZ(),l=v.x,k=v.y,j=v.z,i=l!==0?v.glb().b.h(0,v.x):u,h=(p.a?D.eo:D.e_).j(0.95),g=C.n(18),f=p.a,e=C.L(f?D.c0:D.b9,D.r,1.5),d=C.Y(f?D.hr:B.bQB,D.c,u,u,u,18),a0=x.p
g=C.a([C.aA(u,C.p(u,C.A(C.a([d,D.e1,C.d(f?"Breaker ON (live)":"Breaker OFF (safe)",u,u,u,u,u,u,D.nT,u,u,u)],a0),D.m,u,D.e,D.O,0,u,u),D.f,u,u,new C.o(h,u,e,g,u,u,D.n),u,u,u,u,D.hb,u,u,u),D.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,v.gcor(),u,u,u,u,u,u,!1,D.a4)],a0)
h=!p.w&&!p.z
h=C.a([A.uo("Learn",D.b9,D.uP,h,new A.ddB(v)),D.an,A.uo("Practice",D.c0,D.or,p.w,new A.ddC(v)),D.an,A.uo("Test",D.bt,D.qF,p.z,new A.ddK(v)),D.an],a0)
if(!p.z)D.d.v(h,C.a([A.uo("Hints",D.az,D.mU,p.e,new A.ddL(v)),D.an,A.uo("Labels",D.aJ,P.CM,p.f,new A.ddM(v)),D.an,A.uo("Wire guide",D.mG,D.ot,!1,new A.ddN(a1)),D.an],a0))
h.push(A.uo("Brass side",B.bsE,E.apS,!1,new A.ddO(v)))
h.push(D.an)
h.push(A.uo("Silver side",B.BK,D.Px,!1,new A.ddP(v)))
h.push(D.P)
n=A.Kh(!1,u,m,new A.ddQ(v),u,j,l,i,u,u,k,u,u,v.gJh(),v.gJi(),n,!1,u,g,h)
m=C.a([],a0)
l=p.c
if(l===0){l=C.a([],a0)
for(k=D.d.gag(q.e),j=new C.eJ(k,new A.ddR(v));j.C();){i=k.gR(0)
h=i.c
g=new C.aP(14,14)
f=v.w
e=i.a
f=f===e
d=f?D.b0:D.aW
w=new C.ay(d,f?3:1,D.r,-1)
d=C.a([],a0)
if(p.b.ij(0,e))d.push(new C.D(D.fz,C.Y(D.e9,i.d,u,u,u,18),u))
f=i.b
e=i.d
d.push(C.d(f,u,u,u,u,u,u,new C.G(!0,e,u,u,u,u,13,D.u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u),u,u,u))
l.push(new C.D(D.iK,C.aA(u,C.p(u,new C.c7(D.aM,D.e,D.i,D.m,u,D.p,u,0,d,u),D.f,u,u,new C.o(h,u,new C.bG(w,w,w,w),new C.bg(g,g,g,g),u,u,D.n),u,u,u,u,D.hS,u,u,u),D.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new A.ddD(v,i),u,u,u,u,u,u,!1,D.a4),u))}l=C.a([C.bW(D.bG,l,D.br,u,6,8)],a0)
if(p.z)D.d.v(l,C.a([C.A(C.a([A.qv("Submit the test",D.qF,new A.ddE(v,a1),D.bt)],a0),D.m,u,D.e,D.i,0,u,u),D.P],a0))
l.push(D.P)
if(o)p="Push it into the box"
else p=p.a?"Turn the breaker OFF first":"Fasten every wire first"
l.push(C.A(C.a([A.qv(p,B.a33,o?new A.ddF(v):u,D.az)],a0),D.m,u,D.e,D.i,0,u,u))
D.d.v(m,l)}else if(l===1)D.d.v(m,C.a([C.A(C.a([A.qv("Pull it back out",D.pq,new A.ddG(v),D.ad),D.ae,A.qv("Put the cover plate on",S.rS,new A.ddH(v),D.az)],a0),D.m,u,D.e,D.i,0,u,u)],a0))
else{l=A.qv("Start over",D.k5,new A.ddI(v),D.ad)
p=p.d
k=p?"Tested \u2713":"Power on and test"
D.d.v(m,C.a([C.A(C.a([l,D.ae,A.qv(k,D.hr,p?u:v.gcDP(),D.az)],a0),D.m,u,D.e,D.i,0,u,u)],a0))}return A.II(D.az,new A.ddJ(v,a1,t),C.x(m,D.m,u,D.e,D.O,0,D.p),n,r,q.b,u)}}
A.aa2.prototype={
S(){return new A.aGV(B.nH,null,"",C.c1(2000,1,1,0,0,0,0,0))},
gdd(d){return this.c}}
A.aGV.prototype={
gdL(d){var w,v=this.d
if(v===$){w=this.a.c
v=this.d=w==null?A.h7I():w}return v},
geZ(){var w=this.e
return w===$?this.e=new A.uE(-0.3,0.18,40,B.aYo,$.aw()):w},
glb(){var w=this.f
return w===$?this.f=A.aQk(this.gdL(0)):w},
t(){var w=this.z
if(w!=null)w.a1(0)
this.aGk()
this.a2()},
hv(d,e){var w=this,v=w.z
if(v!=null)v.a1(0)
w.m(new A.eZS(w,d,e))
w.z=C.cB(D.lI,new A.eZT(w))},
mj(d){return this.hv(d,!1)},
or(){this.geZ().fW(40,0.18,B.aYo,-0.3)
this.m(new A.eZK(this))},
Jj(d){var w,v,u,t,s,r=this,q="square"
if(d===0){r.or()
return}w=C.I([41,"tail",42,"trap",43,"arm"],x.S,x.N).h(0,d)
if(w!=null&&!r.gdL(0).a.q(0,w)){v=r.r
if(v.length===0){if(w==="tail")v="tailpiece"
else v=w==="trap"?"P-trap":"trap arm"
r.mj("Pick the "+v+" from the buttons below first, then tap its glowing outline.")
return}if(v!==w){A.fD(180,220,0.25,q)
switch(r.r){case"tail":v="The tailpiece is the straight pipe that hangs from the sink. It goes at the very top, under the drain."
break
case"trap":v="The P-trap is the U-shaped bend. It goes right under the tailpiece, in the middle."
break
default:v="The trap arm is the long straight pipe that goes into the wall. It goes last, on the right."
break}r.mj(v)
return}if(w==="trap"&&!r.gdL(0).a.q(0,"tail")){A.fD(180,220,0.25,q)
r.mj("Start from the top: put the tailpiece on first, then the trap under it.")
return}if(w==="arm"&&!r.gdL(0).a.q(0,"trap")){A.fD(180,220,0.25,q)
r.mj("The trap arm joins the trap. Put the P-trap on first.")
return}r.m(new A.eZL(r,w))
A.pN()
r.hv("Piece in place. "+(r.gdL(0).a.a===3?"Now tighten the two slip nuts: tap each nut.":"Pick the next piece."),!0)
return}v=d===44
if(v||d===45){u=v?"n1":"n2"
if(r.gdL(0).b.h(0,u)!==!0){r.m(new A.eZM(r,u))
A.pN()
r.hv("Slip nut hand tightened. In real life give it a quarter turn more with pliers, but never over-tighten plastic.",!0)
return}}if(d===46&&r.gdL(0).a.a===3&&r.r.length===0){if(r.gdL(0).c){r.m(new A.eZN(r))
r.hv("Water turned off.",!0)}else r.b6e()
return}t=r.glb().b.h(0,d)
if(t!=null){r.m(new A.eZO(r,d))
v=r.geZ()
s=t.c
v.A0(t.d,s)}},
b6e(){var w=this,v=x.cc,u=C.C(new C.X(C.a(["n1","n2"],x.s),new A.eZP(w),v),v.k("M.E"))
w.m(new A.eZQ(w,u))
if(u.length!==0){A.fD(180,220,0.25,"square")
w.mj("It is dripping from a loose slip nut! Tap the nut and tighten it, then run the water again.")}else{A.pN()
w.hv("No leaks. The water flows through the trap and into the wall. The little pool in the U-bend stays there and blocks sewer gas. The lesson is complete!",!0)}},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.gdL(0),i=j.a,h=i.q(0,"tail"),g=i.q(0,"trap"),f=i.q(0,"arm"),e=j.b
e=e.h(0,"n1")===!0&&e.h(0,"n2")===!0
w=C.a([h,g,f,e,j.c&&j.d.length===0],x.u)
v=D.d.bj(w,new A.eZX())
u=i.a===3
j=v<0?"All done":"Step "+(v+1)+"/5"
h=l.glb()
g=l.geZ()
f=l.w
e=l.x
t=l.y
s=f!==0?l.glb().b.h(0,l.w):k
h=A.Kh(!1,k,g,new A.eZY(l),k,t,f,s,k,k,e,k,k,l.gJh(),l.gJi(),h,!1,k,k,k)
e=x.p
s=C.a([],e)
for(r=0;r<3;++r){q=B.duQ[r]
g=i.q(0,q)?k:new A.eZZ(l,q)
f=i.q(0,q)?D.dt:D.fQ
t=new C.aP(14,14)
p=l.r===q
o=p?D.b0:D.aW
n=new C.ay(o,p?3:1,D.r,-1)
o=C.a([],e)
if(i.q(0,q))o.push(B.eqm)
p=B.dD1.h(0,q)
p.toString
m=i.q(0,q)?D.bV:D.c
o.push(C.d(p,k,k,k,k,k,k,new C.G(!0,m,k,k,k,k,13,D.u,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k),k,k,k))
s.push(new C.D(D.iK,C.aA(k,C.p(k,new C.c7(D.aM,D.e,D.i,D.m,k,D.p,k,0,o,k),D.f,k,k,new C.o(f,k,new C.bG(n,n,n,n),new C.bg(t,t,t,t),k,k,D.n),k,k,k,k,D.hS,k,k,k),D.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,g,k,k,k,k,k,k,!1,D.a4),k))}i=C.bW(D.bG,s,D.br,k,6,8)
g=A.qv("Start over",D.k5,new A.f__(l),D.ad)
f=u?"Run the water":"Build the drain first"
return A.II(D.cq,new A.f_0(d,w),C.x(C.a([i,D.P,C.A(C.a([g,D.ae,A.qv(f,D.pu,u?l.gcuB():k,D.cq)],e),D.m,k,D.e,D.i,0,k,k)],e),D.m,k,D.e,D.O,0,D.p),h,j,"Sink drain (P-trap)",k)}}
A.a5t.prototype={
S(){return new A.aBh(B.nH,null,"",C.c1(2000,1,1,0,0,0,0,0))},
gdd(d){return this.c}}
A.aBh.prototype={
gdL(d){var w,v=this.d
if(v===$){w=this.a.c
v=this.d=w==null?A.h7I():w}return v},
geZ(){var w=this.e
return w===$?this.e=new A.uE(-0.25,0.2,36,B.aXE,$.aw()):w},
glb(){var w=this.f
return w===$?this.f=A.ah6(this.gdL(0)):w},
t(){var w=this.z
if(w!=null)w.a1(0)
this.aGk()
this.a2()},
hv(d,e){var w=this,v=w.z
if(v!=null)v.a1(0)
w.m(new A.dgr(w,d,e))
w.z=C.cB(D.lI,new A.dgs(w))},
mj(d){return this.hv(d,!1)},
or(){this.geZ().fW(36,0.2,B.aXE,-0.25)
this.m(new A.dgj(this))},
Jj(d){var w,v,u,t,s,r,q=this
if(d===0){q.or()
return}w=x.fZ
v=C.C(new C.X(B.Su,new A.dgm(d),w),w.k("M.E"))
if(v.length!==0&&q.r.length!==0){w=q.gdL(0)
u=A.iqb(w,q.r,D.d.gH(v))
if(u!=null){A.fD(180,220,0.25,"square")
q.mj(u)}else{A.pN()
q.m(new A.dgn(q,d))
q.geZ().A0(12,A.RQ(d))
q.hv(A.bDA(w)?"All four ends are connected. Now open the valves.":D.d.gH(v).b+": connected.",!0)}return}if((d===61||d===62)&&q.r.length===0){q.cGe(d)
return}w=d===68
if(w||d===69){t=w?"hot":"cold"
if(q.gdL(0).e.ij(0,t)){q.m(new A.dgo(q,t))
q.hv("Hose taken off.",!0)
return}}s=q.glb().b.h(0,d)
if(s!=null){q.m(new A.dgp(q,d))
w=q.geZ()
r=s.c
w.A0(s.d,r)}},
cGe(d){var w,v,u,t=this,s=d===61,r=s?"hot":"cold"
t.m(new A.dgt(t,s,d))
if(!(s?t.gdL(0).f:t.gdL(0).r)){t.hv("The "+r+" valve is turned off.",!0)
return}w=t.gdL(0)
v=w.e
if(v.h(0,d)===r)u=v.h(0,s?63:64)===r
else u=!1
if(!u){A.fD(180,220,0.25,"square")
t.mj(v.h(0,d)==null?"Water is spraying out of the "+r+" valve: it has no hose! Turn it off and connect the hose first.":"Water is leaking: the "+r+" hose is only fastened at one end. Turn the valve off and finish the connection.")}else if(w.f&&w.r&&A.bDA(w)){A.pN()
t.hv(y.W,!0)}else{A.pN()
w=s?"cold":"hot"
t.hv("The "+r+" water is flowing. Now turn the "+w+" valve too: tap its handle.",!0)}},
ca9(d){var w,v=this
v.m(new A.dgk(v))
w=v.gdL(0)
if(!(w.f&&w.r)){v.hv("Valves closed.",!0)
return}if(A.bDA(w)){A.pN()
v.hv(y.W,!0)}else{A.fD(180,220,0.25,"square")
v.mj("Water is spraying out of a valve that has no hose! Close the valves and finish connecting the hoses first.")}},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=n.gdL(0),k=l.w||l.e.a!==0,j=l.e,i=j.h(0,61)==="hot"&&j.h(0,63)==="hot",h=j.h(0,62)==="cold"&&j.h(0,64)==="cold",g=C.a([k,i,h,l.f&&l.r&&A.bDA(l)],x.u),f=D.d.bj(g,new A.dgx())
k=f<0?"All done":"Step "+(f+1)+"/4"
i=n.glb()
h=n.geZ()
w=n.w
v=n.x
u=n.y
t=w!==0?n.glb().b.h(0,n.w):m
s=x.p
i=A.Kh(!1,m,h,new A.dgy(n),m,u,w,t,m,m,v,m,m,n.gJh(),n.gJi(),i,!1,m,m,C.a([A.uo("Hints",D.az,D.mU,l.w,new A.dgz(n)),D.P],s))
v=C.a([],s)
for(r=0;r<2;++r){h={}
w=B.duh[r]
h.a=null
q=w.a
h.a=q
u=new C.aP(14,14)
t=n.r===q
p=t?D.b0:D.aW
o=new C.ay(p,t?3:1,D.r,-1)
p=C.a([],s)
t=C.a4(j).k("b8<2>")
if(new C.X(new C.b8(j,t),new A.dgA(h),t.k("X<M.E>")).gI(0)===2)p.push(B.eqo)
p.push(C.d(w.b,m,m,m,m,m,m,D.tA,m,m,m))
v.push(new C.D(D.iK,C.aA(m,C.p(m,new C.c7(D.aM,D.e,D.i,D.m,m,D.p,m,0,p,m),D.f,m,m,new C.o(w.c,m,new C.bG(o,o,o,o),new C.bg(u,u,u,u),m,m,D.n),m,m,m,m,D.hS,m,m,m),D.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new A.dgB(h,n),m,m,m,m,m,m,!1,D.a4),m))}j=C.bW(D.bG,v,D.br,m,6,8)
h=A.qv("Start over",D.k5,new A.dgC(n),D.ad)
l=l.f&&l.r?"Close the valves":"Open the valves"
return A.II(D.c0,new A.dgD(d,g),C.x(C.a([j,D.P,C.A(C.a([h,D.ae,A.qv(l,D.pu,n.gca8(n),D.c0)],s),D.m,m,D.e,D.i,0,m,m)],s),D.m,m,D.e,D.O,0,D.p),i,k,"Faucet supply lines",m)}}
A.aCa.prototype={
S(){return new A.aCb(A.hjD())}}
A.aCb.prototype={
geZ(){var w,v=this.e
if(v===$){w=new A.uE(-0.3,0.48,46,B.W5,$.aw())
w.f=80
this.e=w
v=w}return v},
glb(){var w=this.f
return w===$?this.f=A.ah7(this.d):w},
t(){var w=this.z
if(w!=null)w.a1(0)
this.a2()},
hv(d,e){var w=this,v=w.z
if(v!=null)v.a1(0)
w.m(new A.dnz(w,d,e))
w.z=C.cB(D.lI,new A.dnA(w))},
mj(d){return this.hv(d,!1)},
or(){this.geZ().fW(46,0.48,B.W5,-0.3)
this.m(new A.dnt(this))},
Jj(d){var w,v,u,t=this
if(d===0){t.or()
return}if(d===72){w=t.d
w=w.d.q(0,72)&&w.a>=5}else w=!1
if(w){t.m(new A.dnv(t,d))
A.pN()
t.hv("You flipped the breaker fully OFF and then ON. The living room light is back on. A breaker trips when a circuit is overloaded: find out why before it trips again.",!0)
t.geZ().A0(22,B.hj8)
return}w=d===87
if(w||d===86){v=t.d
v=v.b&&!v.c&&v.a>=5}else v=!1
if(v){if(t.w==="wrench"&&w){t.m(new A.dnw(t,d))
A.pN()
t.hv("You tightened the slip nut with the wrench. The drip has stopped.",!0)
return}A.fD(180,220,0.25,"square")
t.mj(w?"Hand tightening is not enough here. Pick the wrench first, then tap the nut.":"The water is dripping from the slip nut on the trap. Pick the wrench, then tap the nut.")}u=t.glb().b.h(0,d)
if(u!=null){t.m(new A.dnx(t,d))
w=t.geZ()
v=u.c
w.A0(u.d,v)}},
cir(d){var w,v
switch(d){case"ptrap":w=B.ewY
break
case"faucet":w=B.bJU
break
default:w=new A.BH(d,null,null)
break}v=this.c
v.toString
C.a6(v,!1).cd(C.eb(new A.dnu(w),!1,null,x.H))},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.d,l=B.doS[m.a],k=o.r,j=k===0?n:A.ifj(k)
k=m.d.q(0,72)
w=!m.b||m.c
v=C.a([!k,w],x.u)
w=m.a
k=o.glb()
u=o.geZ()
t=o.r
s=o.x
r=o.y
q=t!==0?o.glb().b.h(0,o.r):n
p=j==null?n:C.aA(n,C.p(n,B.fC6,D.f,n,n,new C.o(D.az,n,n,C.n(12),n,n,D.n),n,n,n,n,D.qu,n,n,n),D.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new A.dnD(o,j),n,n,n,n,n,n,!1,D.a4)
k=A.Kh(!1,n,u,new A.dnE(o),n,r,t,q,p,new A.dnF(o),s,n,n,o.gJh(),o.gJi(),k,!1,n,n,n)
s=l.a
p=x.p
q=C.A(C.a([C.E(C.d(""+(m.a+1)+". "+s,n,n,n,n,n,n,B.fub,n,n,n),1),A.uo("Wrench",D.aJ,D.or,o.w==="wrench",new A.dnG(o))],p),D.m,n,D.e,D.i,0,n,n)
t=C.d(l.b,n,3,D.a2,n,n,n,B.fvh,n,n,n)
m=C.kT(D.bt,6,s,6,0,new A.dnH(o),m.a)
u=v[0]
s=u?"\u2705 Living room power fixed":"\u26a0 Living room has no power"
s=C.E(C.d(s,n,n,n,n,n,n,C.l(n,n,u?D.et:D.eQ,n,n,n,n,n,n,n,n,11.5,n,n,D.H,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),1)
u=v[1]
r=u?"\u2705 Sink leak fixed":"\u26a0 Kitchen sink drips"
return A.II(D.bt,new A.dnI(d,v),C.x(C.a([q,D.bH,t,m,C.A(C.a([s,C.E(C.d(r,n,n,n,n,n,n,C.l(n,n,u?D.et:D.eQ,n,n,n,n,n,n,n,n,11.5,n,n,D.H,n,n,!0,n,n,n,n,n,n,n,n),D.dX,n,n),1)],p),D.m,n,D.e,D.i,0,n,n)],p),D.m,n,D.e,D.O,0,D.p),k,"Stage "+(w+1)+"/7","Build and fix a house",n)}}
A.ag9.prototype={
S(){return new A.bxW()}}
A.bxW.prototype={
b91(){var w=this,v=w.d
if(v!=null)v.a1(0)
w.d=null
if(w.e&&w.c!=null)w.m(new A.fl2(w))},
cac(d){var w,v,u=this
u.m(new A.fl0(u))
w=u.a
v=w.e
v.aqb(w.f?1.45:0.69)
v=u.d
if(v!=null)v.a1(0)
u.d=C.cB(D.kR,new A.fl1(u))},
t(){var w=this.d
if(w!=null)w.a1(0)
this.a2()},
B(d){var w=this,v=null,u=w.a.d,t=D.w.j(w.e?0.8:0.55),s=w.e,r=s?D.bs:D.aW
r=C.L(r,D.r,s?2:1)
return new C.D(D.eK,C.hb(C.mI(D.c7,C.p(v,C.Y(w.a.c,D.c,v,v,v,22),D.f,v,v,new C.o(t,v,r,v,v,v,D.a7),v,44,v,v,v,v,v,44),v,new A.fl3(w),new A.fl4(w),v,v,v,v,new A.fl5(w)),v,u,v,v),v)}}
A.byx.prototype={}
A.byC.prototype={}
A.bzS.prototype={}
A.jU.prototype={}
A.No.prototype={}
A.a7w.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=x.p,k=C.a([C.A(C.a([C.aH(m,m,m,m,X.nE,m,m,m,new A.ccw(d),m,m,m,m,m,m),B.fMo],l),D.m,m,D.e,D.i,0,m,m)],l)
for(w=0;w<5;++w){v=B.dwC[w]
u=v.c
t=C.a([new C.D(D.amu,C.d(v.b+"  "+v.a.toUpperCase(),m,m,m,m,m,m,new C.G(!0,u,m,m,m,m,12,D.u,m,1.1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m),m)],l)
for(s=v.d,r=s.length,q=0;q<r;++q){p=s[q]
o=new C.aP(14,14)
n=new C.ay(u.j(0.35),1,D.r,-1)
t.push(C.p(m,C.x(C.a([C.d(p.a,m,m,m,m,m,m,D.ja,m,m,m),D.cU,C.d(p.b,m,m,m,m,m,m,E.aaT,m,m,m)],l),D.E,m,D.e,D.i,0,D.p),D.f,m,m,new C.o(B.FZ,m,new C.bG(n,n,n,n),new C.bg(o,o,o,o),m,m,D.n),m,m,m,D.cv,D.bh,m,m,m))}D.d.v(k,t)}return C.c5(m,D.c3,C.bm(!0,C.cj(k,m,m,B.alv,m,m,D.ai,!1),!0,!1,D.ag,!0,!0),m,!1,!1,m,m)}}
A.cpW.prototype={}
A.Fy.prototype={}
A.nz.prototype={}
A.XP.prototype={}
A.cpM.prototype={
bBz(d,e,f){var w,v=this
if(f!=null)w=D.d.fl(B.aAg,new A.cpQ(f))
else{w=new C.e4()
w.d_(v.a)
w=B.aAg[w.aw(2)]}v.c!==$&&C.aQ()
v.c=w
w=new C.e4()
w.d_(v.a+7)
w=w.h8()
v.d!==$&&C.aQ()
v.d=w},
vE(d,e){var w=this.c
w===$&&C.c()
return D.d.fl(w.c,new A.cpR(e))},
PB(d){++this.w
return new A.eu(!1,d,!1,"")},
c7m(d){var w=d.d
return new C.N(w,new A.cpN(this),C.T(w).k("N<1,m>")).aN(0," and ")},
UR(d,e){var w,v,u,t,s=this,r=s.vE(0,e),q=s.e
if(q.q(0,e))return s.PB("The "+r.c.toLowerCase()+" is already there.")
if(d!==r.b)return s.PB(s.b?"That does not go here.":"That does not go here. This spot is for the "+r.c.toLowerCase()+".")
for(w=r.d,v=w.length,u=0;u<v;++u)if(!q.q(0,w[u])){q=s.b?"Not yet: something has to go in first.":"Not yet. "+r.e+" Put in the "+s.c7m(r)+" first.";++s.w
return new A.eu(!1,q,!1,"")}if(r.f&&s.r)return s.PB(s.b?"The water is still on!":"Stop! The water is still on. Cutting into a pipe with the water on floods the room. Turn the water off at the main valve first (pick the hand and tap the main valve).")
q.J(0,e)
s.y=!1
s.x.a9(0)
if(r.r>0)t=s.b?"":" It is only loose. Pick the wrench and tap it to tighten the joints."
else t=""
return new A.eu(!0,r.c+" fitted."+t,!1,"")},
blj(d){var w,v,u,t,s=this,r=s.vE(0,d)
if(!s.e.q(0,d))return s.PB(s.b?"Nothing to tighten yet.":"There is nothing to tighten yet: the "+r.c.toLowerCase()+" is not fitted.")
w=r.r
if(w===0)return s.PB(s.b?"That does not need tightening.":"The "+r.c.toLowerCase()+" does not have joints to tighten. It just sits in place.")
v=s.f
u=v.h(0,d)
if(u==null)u=0
if(u>=w)return s.PB("Already tight. More force would crack it.")
t=u+1
v.n(0,d,t)
s.x.a9(0)
s.y=!1
v=r.c
return new A.eu(!0,t>=w?v+": every joint is tight now.":v+": one joint tightened, one to go.",!1,"")},
aIh(d){var w=this.vE(0,d),v=this.f.h(0,d)
if(v==null)v=0
return w.r-v},
aKn(){var w,v,u,t,s,r,q=this
q.r=!q.r
w=q.x
w.a9(0)
if(!q.r)return B.b12
v=q.c
v===$&&C.c()
u=v.c
t=C.T(u).k("X<1>")
s=C.C(new C.X(u,new A.cpS(q),t),t.k("M.E"))
v=v.c
u=C.T(v).k("X<1>")
r=C.C(new C.X(v,new A.cpT(q),u),u.k("M.E"))
q.y=!0
if(s.length!==0){w.v(0,new C.N(s,new A.cpU(),C.T(s).k("N<1,m>")));++q.w
return new A.eu(!1,"Water is spraying from an open pipe where the "+D.d.gH(s).c.toLowerCase()+" should be! Turn the water off and finish the job.",!0,"")}if(r.length!==0){w.v(0,new C.N(r,new A.cpV(),C.T(r).k("N<1,m>")));++q.w
return new A.eu(!1,"The "+D.d.gH(r).c.toLowerCase()+" is leaking from a loose joint. Turn the water off, tighten it with the wrench, then test again.",!0,"")}if(!q.ga3Z())return B.b0T
return B.b0E},
cM1(){var w,v,u,t,s,r,q,p=this
p.r=!0
p.aKn()
w=p.c
w===$&&C.c()
v=w.c
u=v.length
t=0
for(;t<u;++t){s=v[t]
p.UR(s.b,s.a)}for(w=w.c,v=w.length,t=0;t<v;++t){s=w[t]
for(u=s.r,r=s.a,q=0;q<u;++q)p.blj(r)}p.aKn()
p.w=0},
ga3Z(){var w=this.c
w===$&&C.c()
return D.d.cM(w.c,new A.cpO(this))},
gcK8(){var w=this.c
w===$&&C.c()
return D.d.cM(w.c,new A.cpP(this))},
gx_(){var w=this
return w.ga3Z()&&w.gcK8()&&w.r&&w.y&&w.x.a===0}}
A.WN.prototype={
S(){var w,v=new A.uE(-0.25,0.4,135,B.aZd,$.aw())
v.f=200
w=new C.vj()
$.vM()
w.fX(0)
return new A.aFC(v,w)}}
A.aFC.prototype={
gDa(d){var w=this.d
if(w===$){this.a.toString
w=D.o.E(Date.now(),1e5)
this.d=w}return w},
Z(){var w,v=this
v.a3()
w=v.a.e
if(w==null)w=A.h7H(!0,v.gDa(0),null)
v.e=w
v.r=A.hy5(w,v.x,!w.b)},
t(){var w=this.at
if(w!=null)w.a1(0)
this.a2()},
aeO(){var w=this.e
w===$&&C.c()
return this.r=A.hy5(w,this.x,!w.b)},
ayw(d,e){var w=this,v=w.at
if(v!=null)v.a1(0)
w.m(new A.etA(w,d,e))
w.at=C.cB(D.jX,new A.etB(w))},
b0k(){this.f.fW(135,0.4,B.aZd,-0.25)
this.m(new A.etv(this))},
cBw(d){var w,v,u=this.e
u===$&&C.c()
u=u.c
u===$&&C.c()
u=u.c
w=u.length
if(d>=9100&&d<9100+w)return u[d-9100].a
if(d>=9200&&d<9260){v=D.o.aq(d-9200,2)
if(v<w)return u[v].a}if(d===9260)return"trap"
if(d===9261)return"arm"
return null},
azp(d){var w=this.e
w===$&&C.c();++w.w
return new A.eu(!1,d,!1,"")},
cag(d){return this.b0j(d)},
cAL(d){var w
switch(d){case"main":w=9400
break
default:w=this.e
w===$&&C.c()
w=w.c
w===$&&C.c()
w=9100+D.d.bj(w.c,new A.etF(d))
break}this.b0j(w)},
b8x(){var w,v,u,t,s,r,q,p=this,o=p.x
if(o==="hand")return C.a([B.eQW],x.L)
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
q=r.vE(0,s)
r=r.f.h(0,s)
if(r==null)r=0
r=q.r-r>0}else r=!1
if(r)o.push(new C.y(s,t.c))}return o}o=C.a([],x.L)
w=p.e
w===$&&C.c()
w=w.c
w===$&&C.c()
w=w.c
v=w.length
u=0
for(;u<v;++u){t=w[u]
if(t.b===p.x&&!p.e.e.q(0,t.a))o.push(new C.y(t.a,t.c))}return o},
b0j(d){var w,v,u,t,s,r=this
if(d===0)return
w=r.r
w===$&&C.c()
v=w.b.h(0,d)
if(r.x.length===0){r.m(new A.etk(r,d))
if(v!=null)r.ayw(v.a+": "+v.b,!0)
return}u=r.cBw(d)
w=r.x
if(w==="hand")if(d===9400){w=r.e
w===$&&C.c()
t=w.aKn()}else{w=r.e
w===$&&C.c()
t=r.azp(w.b?"Your hand is only for the main water valve.":"Your hand is for the main water valve. Parts are placed by picking them from the tray.")}else if(w==="wrench")if(u==null){w=r.e
w===$&&C.c()
t=r.azp(w.b?"Nothing to tighten.":"There is nothing to tighten there.")}else{w=r.e
w===$&&C.c()
t=w.blj(u)}else if(u==null){w=r.e
w===$&&C.c()
t=r.azp(w.b?"Not there.":"That does not go there. Tap one of the glowing spots.")}else{s=r.e
s===$&&C.c()
t=s.UR(w,u)}w=t.a
if(w)A.pN()
else A.fD(180,220,0.25,"square")
r.m(new A.etl(r,d))
w=w&&!t.c
r.ayw(t.b,w)
w=r.e
w===$&&C.c()
if(w.gx_()&&!r.as){r.as=!0
$.aV.x1$.push(new A.etm(r))}},
cad(){var w,v=null
this.a.toString
w=this.c
w.toString
C.cf(v,v,!0,v,new A.etr(this,0),w,v,!0,!0,x.H)},
b_8(){this.m(new A.ety(this))
this.b0k()},
gcah(){var w,v,u,t=C.a([],x.s)
for(w=0;w<11;++w){v=B.c98[w]
u=this.e
u===$&&C.c()
u=u.c
u===$&&C.c()
if(D.d.aX(u.c,new A.etG(v)))t.push(v)}return t},
c7K(){var w,v,u,t,s=this.e
s===$&&C.c()
s=s.c
s===$&&C.c()
s=s.c
w=s.length
v=0
for(;v<w;++v){u=s[v]
if(!this.e.e.q(0,u.a)){t=this.e.e
t=D.d.cM(u.d,t.gkD(t))}else t=!1
if(t)return u}return null},
aWp(){var w,v,u,t=this,s=t.e
s===$&&C.c()
if(s.x.a!==0){s=s.c
s===$&&C.c()
s=s.c
w=C.T(s)
v=new C.cM(new C.X(s,new A.ets(t),w.k("X<1>")),new A.ett(),w.k("cM<1,m>")).aN(0,", ")
s=t.e
if(s.r)return new C.b5("\ud83d\udca7 Water is leaking at: "+v+". First turn the main water OFF: pick Hand and tap the main valve.","hand","main")
return new C.b5("\ud83d\udca7 It leaked at: "+v+". Pick the Wrench and tap it to tighten the joint. Then turn the water ON again to test.","wrench",s.x.gH(0))}if(!s.ga3Z()){u=t.c7K()
if(u==null)return B.f0Z
if(u.f&&t.e.r)return B.f0r
s=u.b
w=B.aI0.h(0,s)
if(w==null)w=s
return new C.b5("Next: pick "+w+" from the tray, then tap "+u.c.toLowerCase()+" (the glowing spot). "+u.e,s,u.a)}s=t.e.c
s===$&&C.c()
s=s.c
w=C.T(s).k("X<1>")
v=C.C(new C.X(s,new A.etu(t),w),w.k("M.E"))
if(v.length!==0)return new C.b5("Everything is fitted. Now tighten each joint: pick the Wrench and tap "+D.d.gH(v).c.toLowerCase()+".","wrench",D.d.gH(v).a)
if(!t.e.r)return B.f_7
return B.f1s},
cz6(){var w,v,u,t,s=this,r={}
r.a=r.b=null
w=s.aWp()
r.b=w.b
r.a=w.c
s.m(new A.etC(r,s))
v=r.a
if(v!=null){if(v==="main")u=9400
else{v=s.e
v===$&&C.c()
v=v.c
v===$&&C.c()
u=9100+D.d.bj(v.c,new A.etD(r))}r=s.r
r===$&&C.c()
t=r.b.h(0,u)
if(t!=null)s.f.fW(70,0.3,t.c,-0.2)
s.m(new A.etE(s,u))}s.ayw(w.a,!0)},
ayv(d,e,f){var w,v=null,u=this.x===d,t=u?D.az.j(0.25):D.c.j(0.07),s=C.n(14),r=u?D.az:D.aW
r=C.L(r,D.r,u?2:1)
w=C.Y(f,u?D.az:D.ad,v,v,v,19)
return new C.D(G.om,C.aA(v,C.p(v,C.A(C.a([w,D.bn,C.d(e,v,v,v,v,v,v,C.l(v,v,u?D.az:D.c,v,v,v,v,v,v,v,v,12.5,v,v,D.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),D.m,v,D.e,D.i,0,v,v),D.f,v,v,new C.o(t,v,r,s,v,v,D.n),v,v,v,v,D.f1,v,v,v),D.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new A.eto(this,u,d),v,v,v,v,v,v,!1,D.a4),v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.e
g===$&&C.c()
g=g.c
g===$&&C.c()
g=g.c
w=new C.X(g,new A.etH(i),C.T(g).k("X<1>")).gI(0)
g=i.e.c
g===$&&C.c()
v=i.r
v===$&&C.c()
u=i.y
t=i.z
s=i.Q
r=u!==0?v.b.h(0,u):h
v=A.Kh(!1,h,i.f,new A.etI(i),h,s,u,r,h,new A.etJ(),t,h,h,i.gcae(),i.gcaf(),v,!1,h,h,h)
t=x.p
r=C.a([],t)
if(!i.e.b){u=D.aJ.j(0.12)
s=C.n(12)
q=C.L(D.aJ.j(0.6),D.r,1)
r.push(C.p(h,C.A(C.a([C.E(C.d("\ud83d\udc49 "+i.aWp().a,h,4,D.a2,h,h,h,B.fBe,h,h,h),1),D.bn,C.bH(B.fEY,h,i.gcz5(),C.bn(h,h,h,h,h,B.fbK,D.ks,h,h,h,h,h))],t),D.m,h,D.e,D.i,0,h,h),D.f,h,h,new C.o(u,h,q,s,h,h,D.n),h,h,h,D.eK,D.a_O,h,h,1/0))}if(i.x.length!==0&&i.b8x().length!==0){u=C.a([],t)
for(s=i.b8x(),q=s.length,p=0;p<s.length;s.length===q||(0,C.J)(s),++p){o={}
n=s[p]
o.a=null
o.a=n.a
m=D.eR.j(0.35)
l=new C.aP(12,12)
k=new C.ay(D.b0,1,D.r,-1)
u.push(C.aA(h,C.p(h,C.d("\ud83d\udccd "+n.b,h,h,h,h,h,h,D.oT,h,h,h),D.f,h,h,new C.o(m,h,new C.bG(k,k,k,k),new C.bg(l,l,l,l),h,h,D.n),h,h,h,h,B.a_P,h,h,h),D.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new A.etK(o,i),h,h,h,h,h,h,!1,D.a4))}r.push(new C.D(D.eK,C.bW(D.bG,u,D.br,h,6,6),h))}u=i.e
if(u.b)u="Real work: no hints. Build it in the right order."
else if(u.ga3Z())u="Everything is fitted. Tighten every joint, then turn the main water on to test."
else{u=i.e.c
u===$&&C.c()
u="Job: "+u.d}r.push(new C.bL(D.a6,h,h,C.d(u,h,2,D.a2,h,h,h,B.aUH,h,h,h),h))
r.push(D.P)
t=C.a([i.ayv("hand","Hand",B.aqg),i.ayv("wrench","Wrench",D.or)],t)
for(u=i.gcah(),s=u.length,p=0;p<u.length;u.length===s||(0,C.J)(u),++p){j=u[p]
q=B.aI0.h(0,j)
q.toString
t.push(i.ayv(j,q,Ah.apM))}r.push(new C.a5(h,52,C.cj(t,h,h,h,h,h,D.aM,!1),h))
return A.II(D.aJ,new A.etL(i,d),C.x(r,D.m,h,D.e,D.O,0,D.p),v,""+w+"/"+g.c.length+" fitted","Plumbing job: "+g.b,h)},
c44(d){return C.bT(E.mH,null,new A.etx(this),d,!0,!0,!0,D.ke,!1,!1,x.H)}}
A.zk.prototype={}
A.lc.prototype={}
A.Yu.prototype={}
A.aww.prototype={}
A.aVg.prototype={}
A.eu.prototype={
gjE(){return this.a}}
A.Yj.prototype={
cnS(d,e,f){var w,v,u,t,s,r,q=this,p=null,o="outlet",n="light",m="switch",l="gfci",k=q.a,j=new C.e4()
j.d_(k)
w=j.aw(3)
if(d==null)v=k>=100&&D.o.E(k,5)>=3?D.o.E(k,5):w
else v=d
u=C.a([0,1,2],x.t)
D.d.e0(u,j)
t=3+j.aw(2)
switch(v){case 0:k=e==null?"Living room":e
q.c!==$&&C.aQ()
q.c=k
k=C.a([new A.lc(u[0],o,p),new A.lc(u[1],o,p),new A.lc(5,n,t),new A.lc(t,m,p)],x.B)
q.d!==$&&C.aQ()
q.d=k
break
case 1:k=e==null?"Bedroom":e
q.c!==$&&C.aQ()
q.c=k
k=C.a([new A.lc(u[0],o,p),new A.lc(u[1],o,p),new A.lc(6,"fan",t),new A.lc(t,m,p)],x.B)
q.d!==$&&C.aQ()
q.d=k
break
case 2:k=e==null?"Kitchen":e
q.c!==$&&C.aQ()
q.c=k
k=C.a([new A.lc(u[0],l,p),new A.lc(u[1],l,p),new A.lc(5,n,t),new A.lc(t,m,p)],x.B)
q.d!==$&&C.aQ()
q.d=k
break
case 3:k=e==null?"Laundry room":e
q.c!==$&&C.aQ()
q.c=k
k=u[0]
s=u[1]
r=j.h8()?"dryer4":"dryer3"
r=C.a([new A.lc(k,"washer",p),new A.lc(s,r,p),new A.lc(5,n,t),new A.lc(t,m,p)],x.B)
q.d!==$&&C.aQ()
q.d=r
k=r
break
default:k=e==null?"Kitchen with a range":e
q.c!==$&&C.aQ()
q.c=k
k=u[0]
s=j.h8()?"range4":"range3"
s=C.a([new A.lc(k,s,p),new A.lc(u[1],l,p),new A.lc(5,n,t),new A.lc(t,m,p)],x.B)
q.d!==$&&C.aQ()
q.d=s
k=s}if(f&&v<3){k[1]=new A.lc(k[1].a,B.aBM[j.aw(5)],p)
k=q.d
k===$&&C.c()
k[3]=new A.lc(k[3].a,B.aC5[j.aw(5)],p)}},
gao6(){var w,v,u=C.aS(x.S),t=this.d
t===$&&C.c()
w=t.length
v=0
for(;v<t.length;t.length===w||(0,C.J)(t),++v)u.J(0,t[v].a)
return u},
cYf(d){var w,v,u,t=this.d
t===$&&C.c()
w=t.length
v=0
for(;v<w;++v){u=t[v]
if(u.a===d)return u}return null},
fO(d){++this.f
return new A.eu(!1,d,!1,"")},
amJ(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.d
g===$&&C.c()
w=g.length
v=h.x
u=0
for(;u<g.length;g.length===w||(0,C.J)(g),++u){t=g[u].a
s=A.j4(t)
if(s.e==="fan")r="fan"
else r=s.c?"ceiling":"wall"
v.n(0,t,r)}g=C.a([],x.t)
for(q=0;q<$.Hy().length;++q)g.push(q)
h.y.v(0,g)
h.z.v(0,h.gao6())
for(g=h.Q,w=x.S,u=0;u<3;++u){p=B.oJ[u]
v=C.aS(w)
t=C.aS(w)
o=new A.aww(v,t)
o.d=o.e=o.a=!0
for(r=h.ark(p),n=r.length,m=0;m<r.length;r.length===n||(0,C.J)(r),++m)for(l=r[m]*10,k=0;k<6;++k)t.J(0,l+k)
for(t=h.gao6(),r=C.a4(t),n=new C.ms(t,t.r,r.k("ms<1>")),n.c=t.e,r=r.c,t=p+48;n.C();){l=n.d
if(l==null)l=r.a(l)
s=A.j4(l)
if(!s.c){j=s.d.a
j=j>=p&&j<=t}else j=!1
if(j)v.J(0,l)}g.n(0,p,o)}for(g=h.as,u=0;u<2;++u){i=g[u]
i.a=!0
i.b=3
i.d=i.c=!0}},
cM2(){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=k.d
j===$&&C.c()
w=j.length
v=0
for(;v<j.length;j.length===w||(0,C.J)(j),++v){u=j[v]
k.anG(u.a,u.b)}for(w=j.length,t=x.S,s=x.N,r=k.at,v=0;v<j.length;j.length===w||(0,C.J)(j),++v){q=j[v].a
p=r.h(0,q)
if(p==null)continue
o=p.a
n=A.oi(o)
if(n.w.length!==0)m=n.z
else{switch(o){case"outlet":o=C.I([25,"ground",23,"white",21,"black"],t,s)
break
case"gfci":o=C.I([25,"ground",24,"white",22,"black"],t,s)
break
case"switch":o=C.I([25,"ground",21,"blackLine",22,"blackLoad"],t,s)
break
default:o=C.I([53,"ground",52,"white",51,"black"],t,s)
break}m=o}for(o=m.gdR(m),o=o.gag(o);o.C();){l=o.gR(o)
k.bgg(q,l.b,l.a)}k.aJC(q)
k.aFQ(q)}if(!k.ax)k.a7k()
for(w=j.length,v=0;v<j.length;j.length===w||(0,C.J)(j),++v){u=j[v]
if(D.d.q(B.k7,u.b)){t=u.a
k.aoM(t,"lamp")
k.blC(t)}}for(j=D.d.gag(j),w=new C.eJ(j,new A.cuN());w.C();){t=j.gR(0).a
k.aGS(t)
k.aGS(t)}},
aMR(d){var w,v,u=A.j4(d).d.a,t=C.a([],x.t)
for(w=0;v=$.Hy(),w<v.length;++w){v=v[w]
if(v>u&&v<64)t.push(w)}return t},
cW6(d,e){var w,v,u=this,t=u.x
if(t.an(0,d))return u.fO("There is already a box at "+A.j4(d).b+".")
w=A.j4(d)
v=w.c
if(!v&&e!=="wall")return u.fO("That is a ceiling box. On the wall you use a plain wall box (the blue one with ears).")
if(v&&e==="wall")return u.fO("A wall box cannot go in the ceiling. Use a round ceiling box.")
if(w.e==="fan"&&e!=="fan"){if(!u.b)return u.fO('A fan is heavy and it shakes. It needs a box that says "fan rated". A plain ceiling box can let the fan fall.')
t.n(0,d,e);++u.f
return B.b1g}t.n(0,d,e)
t=v?"ceiling joist":"side of the stud"
return new A.eu(!0,w.b+": box fixed to the "+t+".",!1,"")},
cQA(d){var w,v=this
if(d<0||d>=$.Hy().length)return B.b1a
w=v.y
if(w.q(0,d))return v.fO("That stud already has a hole.")
if(v.x.a===0)return v.fO("Mount the boxes first. Then you know where the cable has to go and which studs need a hole.")
w.J(0,d)
return B.b0V},
cZk(d){var w,v,u,t,s=this,r=A.j4(d)
if(!s.x.an(0,d))return s.fO("There is no box at "+r.b+". Mount the box first, then pull the cable to it.")
w=s.z
if(w.q(0,d))return s.fO("The cable is already there.")
v=s.aMR(d)
u=C.T(v).k("X<1>")
t=C.C(new C.X(v,new A.cuU(s),u),u.k("M.E"))
if(t.length!==0){w=D.o.V($.Hy()[D.d.gH(t)])
v=t.length
u=v===1?"it":"the studs"
return s.fO("The cable is stuck: the stud at "+w+" inches has no hole. Drill "+u+" first ("+v+" left on the way).")}w.J(0,d)
return new A.eu(!0,"Cable pulled from the panel to "+r.b+", through the studs and along the ceiling.",!1,"")},
gapy(){return this.gao6().cM(0,new A.cuV(this))},
aqY(d){var w,v,u,t
for(w=this.Q,w=new C.cs(w,C.a4(w).k("cs<1,2>")).gag(0);w.C();){v=w.d
u=v.b
if(u.a){t=v.a
t=d>=t&&d<=t+48}else t=!1
if(t)return u}return null},
cTp(d){var w,v,u=this
if(!u.gapy())return u.fO("Finish the rough-in first. The cable and the boxes must be in before the drywall hides the studs.")
if(!D.d.q(B.a60,d))return B.b0I
if(!D.d.q(B.oJ,d))return u.fO("The edge of the sheet would land between two studs. The sheet needs a stud under every edge, so there is nothing to screw it to. Start at the left corner (a stud) and move one sheet width (48 inches) at a time.")
w=u.Q
v=w.h(0,d)
if((v==null?null:v.a)===!0)return u.fO("There is already a sheet there.")
v=w.h(0,d)
if(v==null){v=x.S
v=new A.aww(C.aS(v),C.aS(v))}v.a=!0
w.n(0,d,v)
return B.b0U},
ark(d){var w,v,u,t=C.a([],x.t)
for(w=d+48,v=0;u=$.Hy(),v<u.length;++v){u=u[v]
if(u>=d&&u<=w)t.push(v)}return t},
cPr(d){var w,v,u=this,t=A.j4(d)
if(t.c)return u.fO("Ceiling fixtures do not need an opening in the wall.")
if(!u.x.an(0,d))return u.fO("There is no box at "+t.b+".")
w=u.aqY(t.d.a)
if(w==null)return u.fO("There is no sheet over this box yet. Hang the sheet first, then cut the opening.")
v=w.b
if(v.q(0,d))return u.fO("The opening is already cut.")
v.J(0,d)
return B.b13},
aM6(d,e,f){var w,v,u,t,s,r=this
if(f)return r.fO("Missed the stud! There is only air behind the sheet here. The screw would pull through the paper. Screw only where a stud is behind the sheet (every 16 inches).")
w=x.dD
v=C.C(new C.X(B.oJ,new A.cuW(r,d),w),w.k("M.E"))
if(v.length===0)return r.fO("There is no sheet here yet.")
u=d*10+e
if(D.d.cM(v,new A.cuX(r,u)))return r.fO("There is already a screw there.")
for(w=v.length,t=r.Q,s=0;s<v.length;v.length===w||(0,C.J)(v),++s)t.h(0,v[s]).c.J(0,u)
return B.b15},
bpQ(d,e){return this.aM6(d,e,!1)},
bru(d){var w=this.Q.h(0,d)
if(w==null||!w.a)return!1
return D.d.cM(this.ark(d),new A.cuZ(w))},
gaEl(){return D.d.cM(B.oJ,new A.cuM(this))},
gaEk(){var w=this.gao6()
return new C.X(w,new A.cuK(),C.a4(w).k("X<co.E>")).cM(0,new A.cuL(this))},
d0r(d){var w,v=this
if(!v.gaEl())return v.fO("Hang all the sheets first.")
if(!D.d.cM(B.oJ,v.gaqZ()))return v.fO("Finish screwing every sheet to the studs first. Tape goes on a solid wall.")
w=v.as[d]
if(w.a)return v.fO("This seam already has tape.")
w.c=w.a=!0
return B.b0M},
cWa(d){var w,v=this,u=v.as[d]
if(!u.a)return v.fO("Tape first. The mud goes over the tape.")
if(!u.c)return v.fO("The last coat is still wet. Let it dry before the next coat.")
w=u.b
if(w>=3)return v.fO("Three coats are enough. Now sand it.");++w
u.b=w
u.c=!1
return new A.eu(!0,"Coat "+w+" of joint compound spread. Let it dry.",!1,"")},
cV0(){var w,v=this.as
if(D.d.cM(v,new A.cuS()))return B.b10
for(w=0;w<2;++w)v[w].c=!0
return B.b1e},
bpA(d){var w=this,v=w.as[d]
if(v.b<3)return w.fO("Put on all three coats of mud first. Sanding now would just rub off the tape.")
if(!v.c)return w.fO("The mud is still wet. Let it dry first.")
if(v.d)return w.fO("Already sanded.")
v.d=!0
return B.b0J},
cYu(d){var w=this,v=w.Q.h(0,d)
if(v==null||!v.a)return w.fO("There is no sheet there.")
if(!w.gaEk())return w.fO("Cut the openings for the boxes before you paint. Otherwise the paint covers the boxes.")
if(!D.d.cM(w.as,new A.cuT()))return w.fO("Sand the seams first. Paint shows every bump.")
if(v.e)return w.fO("This sheet is already painted.")
v.e=!0
return B.b0F},
gth(){var w=this
return w.gaEl()&&D.d.cM(B.oJ,w.gaqZ())&&w.gaEk()&&D.d.cM(w.as,new A.cuO())&&D.d.cM(B.oJ,new A.cuP(w))},
NP(){var w,v
for(w=this.at,w=new C.dq(w,w.r,w.e);w.C();){v=w.d.b
v.a=this.ax&&!this.ay}},
c3h(d,e){if(d.c)return e==="light"||e==="fan"?"":"A ceiling box holds a light or a fan, not an outlet or a switch."
return D.d.q(B.k7,e)||D.d.q(B.iP,e)?"":"A light or a fan hangs from the ceiling. A wall box holds an outlet, a GFCI or a switch."},
anG(d,e){var w,v,u,t,s,r=this,q=A.j4(d)
if(!r.gth())return r.fO("Finish the drywall first. Devices go in after the walls are painted.")
w=r.x
if(!w.an(0,d)||!r.z.q(0,d))return r.fO("There is no box with cable at "+q.b+".")
v=r.at
if(v.an(0,d))return r.fO("There is already a device there. Pull it out first if you want to move it.")
if(r.ax&&!r.ay){++r.f
return B.b0N}u=r.c3h(q,e)
if(u.length!==0)return r.fO(u)
if(!(D.d.q(B.iP,e)&&q.e==="low"))t=!D.d.q(B.iP,e)&&!q.c&&q.e==="switch"
else t=!0
if(t){if(!r.b)return r.fO(D.d.q(B.iP,e)?"A switch goes about 48 inches from the floor, where a hand falls naturally. This box is down at outlet height.":"Outlets go low, about 16 inches from the floor. This box is up at switch height.");++r.f
r.cy.push("Wrong height at "+q.b+".")}t=e==="fan"
if(t&&w.h(0,d)!=="fan")if(!r.b)return r.fO("This box is not fan rated. A fan on it can fall. Take the box out and put in a fan-rated one.")
s=new A.AG(C.U(x.S,x.N))
s.w=r.b
s.z=r.dx
s.y=!(t&&w.h(0,d)!=="fan")
s.a=r.ax&&!r.ay
v.n(0,d,new A.aVg(e,s))
if(e==="light")w="Light fixture"
else if(t)w="Ceiling fan"
else if(e==="gfci")w="GFCI outlet"
else w=e==="switch"?"Switch":A.x6(e)
return new A.eu(!0,w+" is held up to "+q.b+". Turn the breaker OFF, then wire it.",!1,"")},
apj(d){var w=this,v=w.at,u=v.h(0,d)
if(u==null)return B.b0R
if(w.ax&&!w.ay&&!u.b.x){if(w.b)return w.a2E()
return w.a2T()}v.W(0,d)
w.CW.W(0,d)
w.cx.W(0,d)
w.ch.W(0,d)
return B.b18},
a2T(){++this.r;++this.f
return B.b16},
a2E(){var w,v,u=this;++u.r;--u.e
u.ax=!1
u.NP()
w=u.e
if(w<=0){u.w=!0
return B.b0Q}v=w===1?"life":"lives"
return new A.eu(!1,"ZAP! You touched a live wire and got a shock. The breaker is now off. "+w+" "+v+" left. Always turn the breaker OFF and test the wires first.",!0,"shock")},
bgg(d,e,f){var w,v,u,t,s=this,r=s.at.h(0,d)
if(r==null)return B.acV
s.NP()
w=A.oi(r.a)
v=D.d.fl(w.f,new A.cuQ(f))
u=A.hDd(w,r.b,e,v,!0)
t=u==null
if(t&&s.dx)return B.b0H
if(t){if(!s.b&&!v.c.q(0,e)){++s.f
return new A.eu(!0,v.b+": fastened. Careful: "+C.w(w.r.$2(e,v))+" It will burn or trip the breaker when the power comes on.",!0,"")}return new A.eu(!0,v.b+": wire fastened.",!1,"")}if(D.a.a0(u,"SHOCK"))return s.a2E()
if(D.a.a0(u,"STOP"))return s.a2T();++s.f
return new A.eu(!1,u,!1,"")},
blz(d,e){var w,v=this,u=v.at.h(0,d)
if(u==null)return B.X3
v.NP()
w=u.b
if(w.a&&w.c===0){if(v.b)return v.a2E()
return v.a2T()}w=w.b
w.bt(w,new A.cv_(e))
return B.b1d},
aJC(d){var w,v,u=this,t=u.at.h(0,d)
if(t==null)return B.acV
w=A.oi(t.a)
v=t.b
if(!A.aiE(w,v))return u.fO("Every wire must be fastened first.")
if(u.ax&&!u.ay){if(u.b)return u.a2E()
return u.a2T()}v.c=1
return B.b0Z},
aoW(d){var w,v=this,u=v.at.h(0,d)
if(u==null)return B.X3
if(v.ax&&!v.ay){if(v.b)return v.a2E()
return v.a2T()}w=u.b
w.c=0
w.d=!1
return B.b14},
aFQ(d){var w=this.at.h(0,d)
if(w==null||w.b.c!==1)return this.fO("Push the device into the box first.")
w.b.c=2
return B.b17},
d0s(){var w,v,u,t,s,r,q,p,o,n=C.a([],x.fJ),m=this.d
m===$&&C.c()
w=m.length
v=this.at
u=0
for(;u<m.length;m.length===w||(0,C.J)(m),++u){t=m[u]
s=t.a
r=v.h(0,s)
q=t.b
p=A.oi(q)
o=A.j4(s).b+": "+p.b
if(r==null||r.a!==q){n.push(new A.abx(o,A.fUO(p),B.dkH,!0))
continue}s=A.fUO(p)
q=r.b
n.push(new A.abx(o,s,A.hcs(p,q),q.y))}return n},
d0t(){var w,v,u,t,s,r=C.aS(x.N),q=this.d
q===$&&C.c()
w=q.length
v=0
for(;v<q.length;q.length===w||(0,C.J)(q),++v)r.J(0,q[v].b)
q=C.a([],x.J)
for(r=C.dX(r,r.r,r.$ti.c),w=r.$ti.c;r.C();){u=r.d
u=B.aIh.h(0,u==null?w.a(u):u)
if(u==null)u=B.aBn
t=C.T(u)
s=new C.is(u,0,2,t.k("is<1>"))
s.n4(u,0,2,t.c)
D.d.v(q,s)}return q},
aq7(d){var w=this.at
return A.x7(A.oi(w.h(0,d).a),w.h(0,d).b)},
a7k(){var w=this
if(w.ay){w.ax=w.ay=!1
w.NP()
return B.b0X}w.ax=!w.ax
w.NP()
if(!w.ax)return B.b0P
return w.cai()},
cai(){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=C.a([],x.s),i=k.db
i.a9(0)
for(w=k.at,v=new C.cs(w,C.a4(w).k("cs<1,2>")).gag(0),u=k.cx,t=!1,s=!1,r=!1;v.C();){q=v.d
p=q.b.b
if(p.c===0)continue
o=q.a
n=A.x7(A.oi(w.h(0,o).a),w.h(0,o).b)
p.d=p.c>=2
m=n.r
if(m!=="none"){i.n(0,o,m)
p.Q=m
r=!0}if(n.d)t=!0
if(n.e){p.x=!0
u.J(0,o)
s=!0}if(n.a!=="ok"&&!k.dx)j.push(A.j4(o).b+": "+n.b)}if(t){k.ay=!0
k.NP()
l=s?"BANG! Sparks, smoke and flames. ":"Snap! "
i=k.dx?"The breaker tripped.":l+" The breaker tripped. "+D.d.aN(j," ")+" Fix it, then flip the breaker OFF and ON again."
return new A.eu(!1,i,!0,s?"burn":"trip")}if(r)return new A.eu(!1,k.dx?"Power is on.":"Power is on, and something is wrong. "+D.d.aN(j," "),!0,"arc")
if(j.length!==0)return new A.eu(!0,"Power is on. "+D.d.aN(j," "),!0,"")
return B.b11},
aGS(d){var w,v,u,t,s,r,q=this,p=q.at,o=p.h(0,d)
if(o==null||!D.d.q(B.iP,o.a)||o.b.c<2)return B.b1c
w=q.ch
if(w.q(0,d))w.W(0,d)
else w.J(0,d)
v=q.d
v===$&&C.c()
u=C.T(v).k("X<1>")
t=C.C(new C.X(v,new A.cuR(d),u),u.k("M.E"))
if(t.length===0)return B.b0Y
s=D.d.gH(t)
v=s.a
r=q.anU(v)
if(w.q(0,d)&&r){p=p.h(0,v)
if(p!=null)p.c=!0
return new A.eu(!0,(s.b==="fan"?"The fan spins":"The light turns on")+". The switch works.",!1,"")}if(w.q(0,d)){p=s.b
return new A.eu(!1,(p==="fan"?"The fan":"The light")+" did not come on. Check the breaker and the wires on the switch and on the "+p+".",!1,"")}return B.b1b},
a4Z(d){var w,v=this.at.h(0,d)
if(v!=null){w=v.b
w=w.c<2||w.x}else w=!0
if(w)return!1
return this.aq7(d).c},
anU(d){var w=this,v=w.cYf(d),u=v==null,t=u?null:v.c,s=!0
if(!u)if(t!=null)u=!(w.ax&&!w.ay)||!w.a4Z(d)||!w.a4Z(t)
else u=s
else u=s
if(u)return!1
return w.ch.q(0,t)},
aoM(d,e){var w,v,u,t,s=this,r="Nothing happens.",q=s.at.h(0,d)
if(q==null||!D.d.q(B.k7,q.a)||q.b.c<2)return s.fO("There is no finished outlet there to plug into.")
w=s.CW
if(w.an(0,d))return s.fO("Something is already plugged in.")
v=B.aIC.h(0,e)
if(v!=null&&!v.q(0,q.a)){w=A.aQh(e)
if(e==="washerM")u="the washer outlet (5-20)."
else u=e==="dryerM"?"a dryer outlet (14-30 or 10-30).":"a range outlet (14-50 or 10-50)."
return s.fO("The plug does not fit. "+w+" has a big plug made for its own outlet: "+u)}w.n(0,d,e)
w=q.b
if(w.x)return B.b0S
t=s.aq7(d)
if(s.ax&&!s.ay&&s.a4Z(d)){q.c=!0
if(t.a!=="ok"){w=s.dx
u=w?A.aQh(e)+" runs.":A.aQh(e)+" runs, but this outlet is NOT safe. "+t.b
return new A.eu(!0,u,!w,"")}return new A.eu(!0,A.aQh(e)+" runs. The outlet works.",!1,"")}if(!(s.ax&&!s.ay))return B.b0W
u=t.r
if(u!=="none"){s.db.n(0,d,u)
w.Q=u
w=s.dx?r:A.aQh(e)+" does not run. "+t.b
return new A.eu(!1,w,!0,u==="fire"?"burn":"arc")}return new A.eu(!1,s.dx?r:"Nothing happens. "+t.b,!0,"")},
blC(d){if(this.CW.W(0,d)==null)return B.X3
return B.b0O},
bjK(d){var w,v=this
if(d>=0){w=v.d
w===$&&C.c()
w=d>=w.length}else w=!0
if(w)return 2
if(v.ri(d))return 2
w=v.d
w===$&&C.c()
return v.at.h(0,w[d].a)==null?0:1},
ri(d){var w,v,u,t=this
if(d>=0){w=t.d
w===$&&C.c()
w=d>=w.length}else w=!0
if(w)return!0
w=t.d
w===$&&C.c()
v=w[d]
w=v.a
u=t.at.h(0,w)
if(u==null||!A.h89(v.b,u.a)||u.b.c<2)return!1
return t.aq7(w).a==="ok"},
gbm4(){var w,v,u,t,s,r,q,p,o,n=this.d
n===$&&C.c()
w=n.length
v=this.at
u=0
for(;u<n.length;n.length===w||(0,C.J)(n),++u){t=n[u]
s=t.a
r=v.h(0,s)
if(r!=null){q=t.b
p=r.a
o=!0
if(q!==p)if(!(D.d.q(B.k7,q)&&D.d.q(B.k7,p)))if(!(D.d.q(B.iP,q)&&D.d.q(B.iP,p)))if(q==="light"||q==="fan")q=p==="light"||p==="fan"
else q=!1
else q=o
else q=o
else q=o
q=!q||r.b.c<2}else q=!0
if(q)return!1
if(A.x7(A.oi(v.h(0,s).a),v.h(0,s).b).a!=="ok")return!1}return!0},
gaG7(){var w,v,u,t,s,r,q,p,o,n=this.d
n===$&&C.c()
w=n.length
v=this.at
u=0
for(;u<n.length;n.length===w||(0,C.J)(n),++u){t=n[u]
s=t.a
r=v.h(0,s)
if(r!=null){q=t.b
p=r.a
o=!0
if(q!==p)if(!(D.d.q(B.k7,q)&&D.d.q(B.k7,p)))if(!(D.d.q(B.iP,q)&&D.d.q(B.iP,p)))if(q==="light"||q==="fan")q=p==="light"||p==="fan"
else q=!1
else q=o
else q=o
else q=o
q=!q||r.b.c<2}else q=!0
if(q)return!1
if(A.x7(A.oi(v.h(0,s).a),v.h(0,s).b).a!=="ok")return!1
s=t.b
if(D.d.q(B.k7,s)){if(!r.c)return!1}else if(!D.d.q(B.iP,s)&&!r.c)return!1}return!0}}
A.hI.prototype={}
A.OE.prototype={
S(){var w,v=new A.uE(-0.12,0.14,130,B.abN,$.aw())
v.f=300
v.ch=0.7
v.at=0.05
w=new C.vj()
$.vM()
w.fX(0)
return new A.aFJ(v,w,C.U(x.S,x.i))}}
A.aFJ.prototype={
gDa(d){var w=this.e
if(w===$){this.a.toString
w=D.o.E(Date.now(),1e5)
this.e=w}return w},
Z(){var w,v,u=this
u.a3()
w=u.a.f
if(w==null)w=A.cuJ(null,null,!0,u.gDa(0),!0)
u.d=w
v=u.a
if(v.d)w.dx=!0
if(v.f!=null&&w.gth())u.y=2
if(u.a.r){u.d.amJ()
u.y=2}u.r=A.x5(u.d,new A.rW(u.z,u.as,!1))
w=u.f
w.ay=0
w.ch=1.1},
t(){var w=this.db
if(w!=null)w.a1(0)
this.a2()},
os(d,e){var w,v,u,t=this,s=t.db
if(s!=null)s.a1(0)
t.m(new A.eya(t,d,e))
s=t.c
if(s!=null){w=x.w
s=C.aG(s,null,w).w
v=t.c
v.toString
u=s.a.a>C.aG(v,null,w).w.a.b}else u=!1
t.db=C.cB(C.dw(0,0,0,0,0,u?6:10),new A.eyb(t))},
aeP(d){return this.os(d,!1)},
ie(d){var w,v,u,t,s,r,q,p,o=this,n=d.a
if(n)A.pN()
else A.fD(180,220,0.25,"square")
w=d.d
if(w==="shock"){C.fL()
o.m(new A.exg(o))
C.bP(D.ma,new A.exh(o),x.P)}v=w==="burn"
if(v||w==="trip"||w==="arc"){u=o.d
u===$&&C.c()
u=u.db
u=new C.hC(u,u.r,u.e)
t=o.x
s=o.w
while(u.C()){r=u.d
q=s.gf_()
p=o.d.db.h(0,r)==="fire"?7:4.5
t.n(0,r,q/1000+p)}C.fL()
w=w==="arc"
u=w?95:150
t=w?500:300
A.fD(u,t,0.5,w?"saw":"noise")
if(v){o.m(new A.exi(o))
C.bP(D.eU,new A.exj(o),x.P)}}w=o.d
w===$&&C.c()
o.r=A.x5(w,new A.rW(o.z,o.as,!1))
n=n&&!d.c
o.os(d.b,n)
if(o.d.w&&o.c!=null)$.aV.x1$.push(new A.exk(o))
if(o.d.gaG7()&&!o.cy){o.cy=!0
$.aV.x1$.push(new A.exl(o))}},
b62(){var w=this.CW,v=w?B.h58:B.abN,u=w?205:130,t=w?3.141592653589793:-0.12
w=w?0.4:0.14
this.f.fW(u,w,v,t)},
cal(d,e){var w,v,u,t,s
if(this.as>=0)return
w=this.f
v=w.d1s(d,e)
if(v==null||Math.abs(v.a)>78||Math.abs(v.b)>52)v=w.bgG(d,e,-47)
if(v==null)return
u=D.k.F(v.a,-70,70)
t=D.k.F(v.b,-46,48)
s=D.k.F(v.c,-6,100)
w.A0(Math.max(34,w.c*0.45),new A.r(u,t,s))
A.fD(560,50,0.25,"tri")},
aVi(){var w,v,u=this
u.CW=!1
w=u.f
w.at=0.05
w.ch=0.7
w.pg(!1)
w.ay=0
u.m(new A.exv(u))
v=u.d
v===$&&C.c()
u.r=A.x5(v,new A.rW(u.z,u.as,!1))
w.fW(130,0.14,B.abN,-0.12)},
c4T(){var w,v,u=this
u.CW=!1
w=u.f
w.pg(!1)
w.at=-0.95
w.ay=0
w.ch=1
u.m(new A.exx(u))
v=u.d
v===$&&C.c()
u.r=A.x5(v,new A.rW(u.z,u.as,!1))
w.fW(82,-0.55,B.h4A,-0.12)},
bFT(){var w,v,u,t,s=this,r=s.d
r===$&&C.c()
r=r.CW
w=C.a4(r).k("cs<1,2>")
v=w.k("X<M.E>")
u=C.C(new C.X(new C.cs(r,w),new A.exm(),v),v.k("M.E"))
if(u.length===0){s.aeP("Plug a TV into an outlet first. Then you can look behind it.")
return}t=A.j4(D.d.gH(u).a).d.a
s.CW=!1
r=s.f
r.pg(!1)
r.at=0.02
r.ay=0
r.ch=1.7
s.m(new A.exn(s))
s.r=A.x5(s.d,new A.rW(s.z,s.as,!1))
w=t<0?-1.4:1.4
r.fW(60,0.12,new A.r(t,-30,14),w)
s.os("This is the back of the TV. Tap the TV or its plug to pull the plug.",!0)},
bFR(){var w,v,u=this
u.CW=!0
w=u.f
w.pg(!0)
u.m(new A.exo(u))
v=u.d
v===$&&C.c()
u.r=A.x5(v,new A.rW(u.z,u.as,!1))
w.fW(190,0.3,B.h59,3.141592653589793)},
a_h(d,e){var w,v,u,t,s=this,r=A.j4(e),q=s.f
q.pg(!1)
q.ay=0
s.m(new A.exO(s,e))
w=s.d
w===$&&C.c()
s.r=A.x5(w,new A.rW(s.z,s.as,!1))
v=A.aiw(r,B.h2W)
w=r.c
u=w?20:15
t=w?1.2:0.3
q.fW(u,w?-0.12:0.26,v,t)},
Q4(){var w,v=this
v.m(new A.exw(v))
w=v.d
w===$&&C.c()
v.r=A.x5(w,new A.rW(v.z,v.as,!1))
v.b62()},
cao(d){var w,v,u,t,s,r,q=this
if(d===0){if(q.as<0)q.m(new A.ey6(q))
return}w=q.as
if(w>=0)v=!(d>=5000&&d<5700)
else v=!1
if(v)return
if(d>=5000&&d<5700){v=d-5000
u=D.o.aq(v,100)
if(w!==u){if(q.z==="tester")q.aD4(u)
else{q.m(new A.ey7(q))
q.a_h(0,u)}return}q.aA3(u,D.o.E(v,100))
return}if(d>=1000&&d<1010)if(q.z==="drill"){w=q.d
w===$&&C.c()
q.ie(w.cQA(d-1000))
return}if(d>=2000&&d<2007){q.aA6(d-2000)
return}if(d>=3000&&d<3007){q.b3O(d-3000)
return}if(d>=6000&&d<6005){if(q.z==="sheet"){w=q.d
w===$&&C.c()
q.ie(w.cTp(B.a60[d-6000]))}return}if(d>=6100&&d<6103){t=B.oJ[d-6100]
if(q.z==="paint"){w=q.d
w===$&&C.c()
q.ie(w.cYu(t))
return}}if(d>=6200&&d<6202){s=d-6200
switch(q.z){case"tape":w=q.d
w===$&&C.c()
q.ie(w.d0r(s))
return
case"mud":w=q.d
w===$&&C.c()
q.ie(w.cWa(s))
return
case"sand":w=q.d
w===$&&C.c()
q.ie(w.bpA(s))
return}}if(d>=7000&&d<7100){if(q.z==="screw"){w=q.d
w===$&&C.c()
v=d-7000
q.ie(w.bpQ(D.o.aq(v,10),D.o.E(v,10)))}return}if(d>=7500&&d<7600){if(q.z==="screw"){w=q.d
w===$&&C.c()
v=d-7500
q.ie(w.aM6(D.o.aq(v,10),D.o.E(v,10),!0))}return}if(d===8000){w=q.d
w===$&&C.c()
q.ie(w.a7k())
return}if(d>=8200&&d<8207){w=q.d
w===$&&C.c()
q.ie(w.blC(d-8200))
return}if(d>=8100&&d<8107){w=q.d
w===$&&C.c()
w=w.CW.h(0,d-8100)
q.os(A.aQh(w==null?"":w)+" is plugged in. To pull the plug, go behind it (the Behind the TV button) and tap the plug on the wall.",!0)
return}if(q.z==="look"){w=q.r
w===$&&C.c()
r=w.b.h(0,d)
if(r!=null){q.m(new A.ey8(q,d))
q.os(r.a+": "+r.b,!0)}}},
aA6(d){var w,v,u,t,s=this,r=s.d
r===$&&C.c()
if(r.at.an(0,d)){r=s.z
r=r!=="tester"&&r!=="look"&&!D.d.q(B.zI,r)}else r=!1
if(r){s.m(new A.ey3(s))
s.a_h(0,d)
return}r=s.z
switch(r){case"wall":case"ceiling":case"fanbox":w=s.d
s.ie(w.cW6(d,r==="fanbox"?"fan":r))
return
case"cable":s.ie(s.d.cZk(d))
return
case"knife":s.ie(s.d.cPr(d))
return
case"outlet":case"gfci":case"switch":case"split":case"v240four":case"v240three":case"v240only":case"isolated":case"dryer4":case"dryer3":case"range4":case"range3":case"washer":case"switch2p":case"switch3":case"switch4":case"switchsmart":case"switchcombo":case"light":case"fan":v=s.d.anG(d,r)
s.ie(v)
if(v.a){r=s.d.at.h(0,d).b
w=s.d
r.f=!w.b&&!w.dx
s.z=""
s.a_h(0,d)}return
case"tester":s.aD4(d)
return}if(s.d.at.an(0,d)){s.a_h(0,d)
return}if(s.d.gth()&&s.d.x.an(0,d)&&!s.d.at.an(0,d)){u=A.j4(d)
s.m(new A.ey4(s,d))
if(s.Q===d){if(u.c)r="a light or a fan"
else r=u.e==="switch"?"a switch":"an outlet"
r=u.b+": only what fits this box is in the tray now ("+r+"). Pick one."}else r="Box let go: the tray shows everything again."
s.os(r,!0)
return}r=s.r
r===$&&C.c()
t=r.b.h(0,2000+d)
if(t!=null){s.m(new A.ey5(s,d))
s.os(t.a+": "+t.b,!0)}},
aD4(d){var w,v=this.d
v===$&&C.c()
w=v.ax&&!v.ay&&v.x.an(0,d)&&this.d.z.q(0,d)
v=w?"The tester glows: this box is LIVE (120 volts). Turn the breaker OFF before you touch any wire.":"The tester stays dark: no power here. It is safe to work. (Test again after you turn the breaker off, every time.)"
this.os(v,!w)
A.fD(w?1400:500,120,0.25,"tri")},
b3O(d){var w,v=this,u=v.d
u===$&&C.c()
w=u.at.h(0,d)
if(w==null)return
if(D.d.q(B.zI,v.z)){v.ie(v.d.aoM(d,v.z))
return}u=v.z
if(u==="tester"){v.aD4(d)
return}if(u==="flip"){if(D.d.q(B.iP,w.a)&&w.b.c>=2)v.ie(v.d.aGS(d))
else v.aeP("Only a finished switch can be flipped.")
return}v.m(new A.ey2(v))
v.a_h(0,d)},
aA3(d,e){var w,v,u,t,s,r,q,p,o=this,n=o.d
n===$&&C.c()
w=n.at.h(0,d)
if(w==null)return
if(B.aSc.q(0,e))return
n=w.a
v=A.oi(n)
u=v.f
t=C.T(u).k("X<1>")
s=C.C(new C.X(u,new A.exV(e),t),t.k("M.E"))
r=A.hDj(n,e)
n=r!=null
if(n){u=w.b
u=u.b.ij(0,r)&&u.c===0}else u=!1
if(u){o.ie(o.d.blz(d,r))
return}u=!1
if(s.length!==0){t=w.b
if(t.c===0){t=t.b
if(t.h(0,e)!=null)u=o.ax.length===0||t.h(0,e)===o.ax}}if(u){n=o.d
u=w.b.b.h(0,e)
u.toString
o.ie(n.blz(d,u))
o.m(new A.exW(o))
return}if(n){n=w.b
n=n.c===0&&!n.b.ij(0,r)&&D.d.aX(v.e,new A.exX(r))}else n=!1
if(n){o.m(new A.exY(o,r,d,e))
if(o.ax.length!==0)o.os(D.d.fl(v.e,new A.exZ(r)).b+": picked up. Now tap where it joins.",!0)
return}if(s.length!==0&&w.b.c===0){n=o.ax
if(n.length===0){o.aeP("Pick a wire below first, then tap "+D.d.gH(s).b+".")
o.m(new A.ey_(o,d,e))
return}q=o.d.bgg(d,n,e)
o.ie(q)
if(q.a)o.m(new A.ey0(o))
return}n=o.r
n===$&&C.c()
p=n.b.h(0,5000+d*100+e)
if(p!=null){o.m(new A.ey1(o,d,e))
o.os(p.a+": "+p.b,!0)}},
cap(){var w,v,u,t,s,r,q=this,p=C.a([],x.ek)
for(w=0;w<7;++w){v=B.uW[w]
u=q.d
u===$&&C.c()
t=v.a
s=u.at.an(0,t)
r=q.z
A:{if("wall"===r){u=!v.c&&!q.d.x.an(0,t)
break A}if("ceiling"===r||"fanbox"===r){u=v.c&&!q.d.x.an(0,t)
break A}if("cable"===r){u=q.d.x.an(0,t)&&!q.d.z.q(0,t)
break A}if("knife"===r){u=!v.c&&q.d.x.an(0,t)
break A}u=D.d.q(B.k7,r)||D.d.q(B.iP,q.z)
if(u){u=!v.c&&q.d.x.an(0,t)&&!s
break A}if("light"===r||"fan"===r){u=v.c&&q.d.x.an(0,t)&&!s
break A}u=D.d.q(B.zI,q.z)
if(u){u=s&&D.d.q(B.k7,q.d.at.h(0,t).a)
break A}if("tester"===r){u=q.d.x.an(0,t)
break A}u=!1
break A}if(u)p.push(new C.y(t,v.b))}return p},
cAM(){var w,v,u,t,s,r,q,p,o=null,n=this.cap()
if(n.length===0)return D.bL
w=C.a([],x.p)
for(v=n.length,u=0;u<n.length;n.length===v||(0,C.J)(n),++u){t={}
s=n[u]
t.a=null
t.a=s.a
r=D.eR.j(0.35)
q=new C.aP(12,12)
p=new C.ay(D.b0,1,D.r,-1)
w.push(C.aA(o,C.p(o,C.d("\ud83d\udccd "+s.b,o,o,o,o,o,o,D.oT,o,o,o),D.f,o,o,new C.o(r,o,new C.bG(p,p,p,p),new C.bg(q,q,q,q),o,o,D.n),o,o,o,o,B.a_P,o,o,o),D.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new A.eye(t,this),o,o,o,o,o,o,!1,D.a4))}return new C.D(D.i9,C.bW(D.bG,w,D.br,o,6,6),o)},
bSp(){var w=null,v=this.c
v.toString
C.cf(w,w,!1,w,new A.exu(this),v,w,!0,!0,x.H)},
caj(){var w,v,u,t=this,s=null
if(t.a.c){w=t.d
w===$&&C.c()
v=w.d
v===$&&C.c()
v=v.length
u=A.hid(w.f,w.r,v)}else u=0
if(u>0)A.Te(u)
w=t.c
w.toString
C.cf(s,s,!0,s,new A.exr(t,u),w,s,!0,!0,x.H)},
ayx(d){this.m(new A.exy(this,d))
this.aVi()},
b0m(){return this.ayx(!1)},
cG_(d){var w,v,u=new A.eyf(A.j4(d)),t=C.a([],x.b)
for(w=0;w<30;++w){v=B.aAH[w]
if(u.$1(v.a))t.push(v)}return t},
SW(d,e,f,g){var w=null,v=f==null,u=v?D.dt:g.j(0.9),t=C.n(14),s=C.Y(d,v?D.bV:D.w,w,w,w,17)
return new C.D(G.om,C.aA(w,C.p(w,C.A(C.a([s,D.e1,C.d(e,w,1,w,w,w,w,C.l(w,w,v?D.bV:D.w,w,w,w,w,w,w,w,w,10.5,w,w,D.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),D.m,w,D.e,D.O,0,w,w),D.f,w,w,new C.o(u,w,w,t,w,w,D.n),w,44,w,w,D.ks,w,w,w),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,!1,D.a4),w)},
bcf(d,e,f){return this.SW(d,e,f,D.az)},
cJ0(d,e){var w,v,u,t,s,r,q,p=this,o=null,n=x.p,m=C.a([p.SW(D.k4,"Back to the room",p.gb0l(),D.ad)],n),l=d.b
if(l.c===0){w=A.aiE(e,l)?"Push into the box":"Fasten every wire"
m.push(p.bcf(B.a33,w,A.aiE(e,l)?new A.eyh(p):o))}if(l.c===1)D.d.v(m,C.a([p.SW(D.pq,"Pull it out",new A.eyi(p),D.ad),p.bcf(S.rS,"Cover on",new A.eyj(p))],n))
n=l.c>=2
if(n&&l.x)m.push(p.SW(B.P8,"Take out the burnt one",new A.eyk(p),D.c0))
else if(n)m.push(p.SW(B.P8,"Pull it out of the wall",new A.eyl(p),D.ad))
if(!l.x)m.push(p.SW(D.jJ,"Take it out, put in another",new A.eym(p,d),D.aJ))
if(l.c===0)for(n=D.d.gag(e.e),l=new C.eJ(n,new A.eyn(d));l.C();){w=n.gR(0)
v=w.c
u=new C.aP(14,14)
t=p.ax===w.a
s=t?D.b0:D.aW
r=new C.ay(s,t?3:1,D.r,-1)
s=w.b
q=w.d
m.push(new C.D(G.om,C.aA(o,C.p(o,new C.cc(D.A,o,o,C.d(s,o,o,o,o,o,o,new C.G(!0,q,o,o,o,o,12,D.u,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),o,o,o),o),D.f,o,o,new C.o(v,o,new C.bG(r,r,r,r),new C.bg(u,u,u,u),o,o,D.n),o,44,o,o,D.f1,o,o,o),D.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new A.eyo(p,w),o,o,o,o,o,o,!1,D.a4),o))}return m},
cw2(d,e){var w,v,u,t,s,r,q=null,p=C.a([],x.p)
for(w=D.d.gag(e.f),v=new C.eJ(w,new A.eyc(d));v.C();){u=w.gR(0)
t=D.eR.j(0.35)
s=new C.aP(10,10)
r=new C.ay(D.b0,1,D.r,-1)
p.push(new C.D(D.fz,C.aA(q,C.p(q,new C.cc(D.A,q,q,C.d("\u279c "+u.b,q,q,q,q,q,q,B.fvR,q,q,q),q),D.f,q,q,new C.o(t,q,new C.bG(r,r,r,r),new C.bg(s,s,s,s),q,q,D.n),q,32,q,q,B.amK,q,q,q),D.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new A.eyd(this,u),q,q,q,q,q,q,!1,D.a4),q))}return p},
cam(){var w,v,u,t,s,r,q,p,o,n=this,m=n.d
m===$&&C.c()
if(m.w)return"The job is over."
switch(n.y){case 0:m=m.d
m===$&&C.c()
w=C.T(m).k("X<1>")
v=C.C(new C.X(m,new A.exz(n),w),w.k("M.E"))
if(v.length!==0){u=D.d.gH(v)
t=A.j4(u.a)
m=A.x6(u.b)
if(t.c)w=t.e==="fan"?"fan box":"ceiling box"
else w="wall box"
return"Mount a box at "+t.b+" ("+m.toLowerCase()+" goes here): pick a "+w+", then tap the glowing spot."}m=n.d.d
m===$&&C.c()
w=C.T(m).k("X<1>")
s=C.C(new C.X(m,new A.exA(n),w),w.k("M.E"))
if(s.length!==0){t=D.d.gH(s).a
m=n.d.aMR(t)
r=new C.X(m,new A.exB(n),C.T(m).k("X<1>")).gI(0)
return r>0?"The cable comes from the panel on the right. Pick the drill and tap each stud on the way to "+A.j4(t).b+" ("+r+" left).":"Pick the cable roll and tap "+A.j4(t).b+"."}return"Rough-in done! Open 2 Drywall."
case 1:if(!m.gapy())return"Finish the rough-in first (tab 1). Drywall hides the wires."
if(!n.d.gaEl())return"Pick a drywall sheet and tap a stud edge to hang it. Three sheets cover the wall."
if(!n.d.gaEk())return"Pick the drywall saw and tap each box to cut its opening."
if(!D.d.cM(B.oJ,n.d.gaqZ()))return"Pick the screw gun and put a screw in every glowing spot on the studs."
if(D.d.aX(n.d.as,new A.exE()))return"Pick the tape and tap each seam between two sheets."
if(D.d.aX(n.d.as,new A.exF()))return D.d.aX(n.d.as,new A.exG())?'The mud is wet. Press "Let it dry", then the next coat.':"Pick the mud and tap each seam. It needs three coats, with drying in between."
if(D.d.aX(n.d.as,new A.exH()))return D.d.aX(n.d.as,new A.exI())?'Press "Let it dry", then sand.':"Pick the sander and tap each seam."
if(!n.d.gth())return"Pick the roller and paint each sheet."
return"Drywall done! Open 3 Devices."
default:if(!m.gth())return"Finish the drywall first (tab 2)."
m=n.d.d
m===$&&C.c()
w=C.T(m).k("X<1>")
q=C.C(new C.X(m,new A.exJ(n),w),w.k("M.E"))
if(q.length!==0){u=D.d.gH(q)
return"The breaker being on is not the end: the job is done only when every device is in and wired. Tap the box at "+A.j4(u.a).b+" (small red frame, blinking red dot): the tray then shows only what fits it. Put in the "+A.x6(u.b).toLowerCase()+". ("+C.w(new A.exM().$1(new C.N(q,new A.exK(),C.T(q).k("N<1,F>"))))+" still need a device.)"}m=n.d.d
m===$&&C.c()
w=C.T(m).k("X<1>")
p=C.C(new C.X(m,new A.exL(n),w),w.k("M.E"))
if(p.length!==0)return"Tap "+A.j4(D.d.gH(p).a).b+" to work on it: breaker OFF, wires, push in, cover on."
m=n.d
if(!m.ax)return"Turn the breaker ON (tap the panel or the breaker button) and test."
m=m.d
m===$&&C.c()
w=C.T(m).k("X<1>")
o=C.C(new C.X(m,new A.exC(n),w),w.k("M.E"))
if(o.length!==0)return"Pick the TV or the lamp and plug it into "+A.j4(D.d.gH(o).a).b+" to test it."
m=n.d.d
m===$&&C.c()
return"Flip the wall switch to test the "+(D.d.aX(m,new A.exD())?"fan":"light")+"."}},
B(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this,a3=null,a4=a2.Q,a5=a4>=0&&a2.y===2?a2.cG_(a4):B.d75[a2.y]
a4=x.w
w=C.aG(a6,a3,a4).w.a.a>C.aG(a6,a3,a4).w.a.b
a4=a2.as
if(a4>=0){v=a2.d
v===$&&C.c()
u=v.at.h(0,a4)}else u=a3
a4=u==null
t=a4?a3:A.oi(u.a)
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
for(k=0;k<3;++k)l.push(new C.D(D.NN,C.d(k<a2.d.e?"\u2764\ufe0f":"\ud83d\udda4",a3,a3,a3,a3,a3,a3,D.AM,a3,a3,a3),a3))
l.push(D.bn)
j=a2.d
if(j.ay)j=D.kq
else{j=j.ax
j=j?D.eo:D.e_}j=j.j(0.95)
i=C.n(16)
h=a2.d
g=h.ay
if(g)f=D.cJ
else{f=h.ax
f=f?D.c0:D.b9}f=C.L(f,D.r,1.4)
if(g)h="TRIPPED: tap to reset"
else{h=h.ax
h=h?"Breaker ON":"Breaker OFF"}l.push(C.aA(a3,C.p(a3,C.d(h,a3,a3,a3,a3,a3,a3,B.fsw,a3,a3,a3),D.f,a3,a3,new C.o(j,a3,f,i,a3,a3,D.n),a3,a3,a3,a3,D.rM,a3,a3,a3),D.y,!1,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,new A.eyA(a2),a3,a3,a3,a3,a3,a3,!1,D.a4))
l=C.a([C.A(l,D.m,a3,D.e,D.O,0,a3,a3)],m)
j=a2.CW
i=j?"In front":"Behind the wall"
h=j?H.api:H.aph
j=C.a([A.uo(i,D.bt,h,j,j?a2.gbTY():a2.gbFQ()),D.an,A.uo("Look up",D.b0,B.bRe,!1,a2.gc4S()),D.an,A.uo("Behind the TV",D.cJ,Q.HM,!1,a2.gbFS()),D.an],m)
if(!a4){i=u.b
D.d.v(j,C.a([A.uo("Labels",D.aJ,P.CM,i.f,new A.eyB(a2,u)),D.an,A.uo("Hints",D.az,D.mU,i.e,new A.eyC(a2,u)),D.P],m))}r=A.Kh(!1,a3,a2.f,new A.eyN(a2),a3,o,q,n,a3,a3,p,a3,a2.gcak(),new A.eyP(a2),a2.gcan(),r,!1,a3,l,j)
q=C.a([],m)
if(a4){a4=C.a([],m)
if(!w){p=C.a([],m)
for(k=0;k<3;++k){o=k<2?6:0
n=a2.y===k?D.az.j(0.2):D.dt
l=new C.aP(12,12)
e=new C.ay(a2.y===k?D.az:D.bB,1,D.r,-1)
if(k===0)j=a2.d.gapy()
else{j=a2.d
j=k===1?j.gth():j.gaG7()}j=j?"\u2705 ":""
i=B.aCo[k]
h=a2.y===k?D.az:D.ad
p.push(new C.by(1,D.bc,C.aA(a3,C.p(a3,new C.cc(D.A,a3,a3,C.d(j+i,a3,a3,a3,a3,a3,a3,new C.G(!0,h,a3,a3,a3,a3,12,D.u,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3),a3,a3,a3),a3),D.f,a3,a3,new C.o(n,a3,new C.bG(e,e,e,e),new C.bg(l,l,l,l),a3,a3,D.n),a3,a3,a3,new C.Q(0,0,o,0),A8.NQ,a3,a3,a3),D.y,!1,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,new A.eyQ(a2,k),a3,a3,a3,a3,a3,a3,!1,D.a4),a3))}p=C.a([C.A(p,D.m,a3,D.e,D.i,0,a3,a3),D.an],m)
if(!a2.d.b){o=D.aJ.j(0.1)
n=C.n(10)
l=C.L(D.aJ.j(0.4),D.r,1)
p.push(C.p(a3,C.d("\ud83d\udc49 "+a2.cam(),a3,2,D.a2,a3,a3,a3,B.fu6,a3,a3,a3),D.f,a3,a3,new C.o(o,a3,l,n,a3,a3,D.n),a3,a3,a3,a3,D.cl,a3,a3,1/0))}else p.push(B.fUW)
p.push(D.an)
D.d.v(a4,p)
w=!1}p=C.a([],m)
if(w){o=D.az.j(0.2)
n=C.n(14)
l=C.L(D.az,D.r,1)
j=a2.y
if(j===0)j=a2.d.gapy()
else{i=a2.d
j=j===1?i.gth():i.gaG7()}j=j?"\u2705 ":""
p.push(new C.D(G.om,C.aA(a3,C.p(a3,C.at(C.d(j+B.aCo[a2.y],a3,a3,a3,a3,a3,a3,B.fyR,a3,a3,a3),a3,a3,a3),D.f,a3,a3,new C.o(o,a3,l,n,a3,a3,D.n),a3,a3,a3,a3,D.f1,a3,a3,a3),D.y,!1,B.ho0,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,new A.eyR(a2),a3,a3,a3,a3,a3,a3,!1,D.a4),a3))}if(a2.y<2&&!a2.d.gth())p.push(new C.D(G.om,C.aA(a3,C.p(a3,B.bbX,D.f,a3,a3,new C.o(D.dH,a3,a3,C.n(14),a3,a3,D.n),a3,a3,a3,a3,D.f1,a3,a3,a3),D.y,!1,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,new A.eyS(a2),a3,a3,a3,a3,a3,a3,!1,D.a4),a3))
if(a2.Q>=0&&a2.y===2){o=D.b0.j(0.18)
n=C.n(14)
l=C.L(D.b0,D.r,1)
p.push(new C.D(G.om,C.aA(a3,C.p(a3,C.at(C.d("\u2715 "+A.j4(a2.Q).b,a3,a3,a3,a3,a3,a3,B.fm9,a3,a3,a3),a3,a3,a3),D.f,a3,a3,new C.o(o,a3,l,n,a3,a3,D.n),a3,a3,a3,a3,D.f1,a3,a3,a3),D.y,!1,B.hoh,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,new A.eyT(a2),a3,a3,a3,a3,a3,a3,!1,D.a4),a3))}for(o=a5.length,d=0;d<a5.length;a5.length===o||(0,C.J)(a5),++d){a0=a5[d]
n=a0.a
l=a2.z===n?D.az.j(0.25):D.c.j(0.07)
j=new C.aP(14,14)
n=a2.z===n
i=n?D.az:D.aW
e=new C.ay(i,n?2:1,D.r,-1)
i=n?D.az:D.ad
i=C.Y(a0.c,i,a3,a3,a3,19)
n=n?D.az:D.c
p.push(new C.D(G.om,C.aA(a3,C.p(a3,new C.c7(D.aM,D.e,D.i,D.m,a3,D.p,a3,0,C.a([i,D.bn,C.d(a0.b,a3,a3,a3,a3,a3,a3,new C.G(!0,n,a3,a3,a3,a3,12.5,D.H,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3),a3,a3,a3)],m),a3),D.f,a3,a3,new C.o(l,a3,new C.bG(e,e,e,e),new C.bg(j,j,j,j),a3,a3,D.n),a3,a3,a3,a3,D.f1,a3,a3,a3),D.y,!1,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,new A.eyU(a2,a0),a3,a3,a3,a3,a3,a3,!1,D.a4),a3))}if(a2.y===1)p.push(new C.D(G.om,C.aA(a3,C.p(a3,B.bbP,D.f,a3,a3,new C.o(D.e_,a3,a3,C.n(14),a3,a3,D.n),a3,a3,a3,a3,D.f1,a3,a3,a3),D.y,!1,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,new A.eyV(a2),a3,a3,a3,a3,a3,a3,!1,D.a4),a3))
a4.push(new C.a5(a3,52,C.cj(p,a3,B.ho1,a3,a3,a3,D.aM,!1),a3))
if(a2.z.length!==0)a4.push(a2.cAM())
D.d.v(q,a4)}else if(w){t.toString
a4=C.a([new C.a5(a3,44,C.cj(a2.cJ0(u,t),a3,a3,a3,a3,a3,D.aM,!1),B.hoC)],m)
if(u.b.c===0&&a2.ax.length!==0)D.d.v(a4,C.a([D.an,new C.a5(a3,32,C.cj(a2.cw2(u,t),a3,a3,a3,a3,a3,D.aM,!1),B.ho3)],m))
D.d.v(q,a4)}else{a4=C.a([],m)
p=u.b
if(p.c===0)for(o=D.d.gag(t.e),n=new C.eJ(o,new A.eyD(u)),l=p.b;n.C();){j=o.gR(0)
i=j.c
h=new C.aP(14,14)
g=a2.ax
f=j.a
g=g===f
a1=g?D.b0:D.aW
e=new C.ay(a1,g?3:1,D.r,-1)
a1=C.a([],m)
if(l.ij(0,f))a1.push(new C.D(D.NO,C.Y(D.e9,j.d,a3,a3,a3,17),a3))
g=j.b
f=j.d
a1.push(C.d(g,a3,a3,a3,a3,a3,a3,new C.G(!0,f,a3,a3,a3,a3,12.5,D.u,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3),a3,a3,a3))
a4.push(C.aA(a3,C.p(a3,new C.c7(D.aM,D.e,D.O,D.m,a3,D.p,a3,0,a1,a3),D.f,a3,a3,new C.o(i,a3,new C.bG(e,e,e,e),new C.bg(h,h,h,h),a3,a3,D.n),a3,a3,a3,a3,D.yz,a3,a3,a3),D.y,!1,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,new A.eyE(a2,u,j),a3,a3,a3,a3,a3,a3,!1,D.a4))}a4=C.a([C.bW(D.bG,a4,D.br,a3,6,8)],m)
if(p.c===0&&a2.ax.length!==0){o=C.a([],m)
for(n=D.d.gag(t.f),l=new C.eJ(n,new A.eyF(u));l.C();){j=n.gR(0)
i=D.eR.j(0.35)
h=new C.aP(12,12)
e=new C.ay(D.b0,1,D.r,-1)
o.push(C.aA(a3,C.p(a3,C.d("\u279c "+j.b,a3,a3,a3,a3,a3,a3,D.oT,a3,a3,a3),D.f,a3,a3,new C.o(i,a3,new C.bG(e,e,e,e),new C.bg(h,h,h,h),a3,a3,D.n),a3,a3,a3,a3,B.a_P,a3,a3,a3),D.y,!1,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,new A.eyG(a2,j),a3,a3,a3,a3,a3,a3,!1,D.a4))}a4.push(new C.D(D.jD,C.bW(D.bG,o,D.br,a3,6,6),a3))}a4.push(D.P)
o=C.a([A.qv("Back to the room",D.k4,a2.gb0l(),D.ad),D.ae],m)
if(p.c===0){t.toString
n=A.aiE(t,p)?"Push it into the box":"Fasten every wire"
o.push(A.qv(n,B.a33,A.aiE(t,p)?new A.eyH(a2):a3,D.az))}if(p.c===1)D.d.v(o,C.a([A.qv("Pull it out",D.pq,new A.eyI(a2),D.ad),D.ae,A.qv("Cover on",S.rS,new A.eyJ(a2),D.az)],m))
n=p.c>=2
if(n&&p.x)o.push(A.qv("Take out the burnt one",B.P8,new A.eyK(a2),D.c0))
else if(n)o.push(A.qv("Pull it out of the wall",B.P8,new A.eyL(a2),D.ad))
a4.push(C.A(o,D.m,a3,D.e,D.i,0,a3,a3))
if(!p.x)D.d.v(a4,C.a([D.P,C.A(C.a([A.qv("Take it out and put in a different "+(D.d.q(B.iP,u.a)?"switch":"one"),D.jJ,new A.eyM(a2,u),D.aJ)],m),D.m,a3,D.e,D.i,0,a3,a3)],m))
D.d.v(q,a4)}a4=C.a([A.II(D.az,new A.eyO(a2,a6),C.x(q,D.m,a3,D.e,D.O,0,D.p),r,"Phase "+(v+1)+"/3",s+" job",a3)],m)
if(a2.cx)a4.push(C.bR(0,new C.dB(!0,C.p(a3,a3,D.f,B.ajm,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3),a3),0,0,0))
return new C.an(D.a0,a3,D.ac,D.t,a4,a3)},
cuo(d){var w=this.d
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
break A}w=D.d.q(B.zI,this.z)
if(w){w="Tap a finished outlet to plug it in."
break A}w="Tap a glowing box to put it there."
break A}this.os(w,!0)},
cjt(d){return C.bT(E.mH,null,new A.exU(this,d),d,!0,!0,!0,D.ke,!1,!1,x.H)}}
A.rW.prototype={}
A.rt.prototype={
a6(){return"FaultKind."+this.b}}
A.uK.prototype={}
A.MU.prototype={}
A.cy8.prototype={
bBN(d,e,f){var w,v,u,t,s,r,q,p=this,o=new C.e4()
o.d_(p.a)
w=C.C(B.dhT,x.eP)
D.d.e0(w,o)
v=C.aS(x.S)
u=C.a([],x.gw)
for(t=w.length,s=0;s<w.length;w.length===t||(0,C.J)(w),++s){r=w[s]
q=B.wU.h(0,r).e
if(v.q(0,q))continue
v.J(0,q)
u.push(new A.MU(r,o.aw(3)))
if(u.length>=d)break}p.c!==$&&C.aQ()
p.c=u
p.ayy()},
q8(d,e){var w=this.c
w===$&&C.c()
return D.d.aX(w,new A.cyd(e))},
ayy(){var w,v,u,t,s=this,r=s.d,q=r.d
q.a9(0)
if(s.q8(0,B.a1a))q.J(0,72)
if(s.q8(0,B.a1b))q.J(0,75)
q=s.q8(0,B.Ov)
r.b=q
r.c=!q
r.w=s.q8(0,B.Ow)
r.x=s.q8(0,B.a1f)
r.y=s.q8(0,B.a1g)
r.z=s.q8(0,B.a1e)
r.Q=s.q8(0,B.a1h)
r.as=s.q8(0,B.a1i)
r.at=s.q8(0,B.a1d)
q=r.f
q.a9(0)
r=r.r
r.a9(0)
w=s.c
w===$&&C.c()
w=D.d.gag(w)
v=new C.eJ(w,new A.cy9())
while(v.C()){u=w.gR(0)
t=u.c
u=u.b
if(t)r.J(0,u)
else q.J(0,u)}},
gcK6(){var w=this.c
w===$&&C.c()
return D.d.cM(w,new A.cyb())},
gcRN(){var w=this.c
w===$&&C.c()
return new C.X(w,new A.cyc(),C.T(w).k("X<1>")).gI(0)},
cRr(d){var w,v,u,t,s,r,q,p=this.c
p===$&&C.c()
w=p.length
v=d===86
u=d===92
t=0
for(;t<p.length;p.length===w||(0,C.J)(p),++t){s=p[t]
r=s.a
q=!0
if(B.wU.h(0,r).e!==d)if(!(r===B.Ov&&v))r=r===B.Ow&&u
else r=q
else r=q
if(r)return s}return null},
b0n(d){++this.f
return new A.eu(!1,d,!1,"")},
caq(){var w,v,u,t,s=this;++s.r;--s.e
for(w=s.d,v=w.d,w=w.e,u=0;u<4;++u){t=B.ayK[u]
if(!v.q(0,t))w.J(0,t)}w=s.e
if(w<=0){s.w=!0
return B.b0L}v=w===1?"life":"lives"
return new A.eu(!1,"ZAP! You touched a live wire and got a shock. All the breakers were knocked off. "+w+" "+v+" left. Turn the breaker OFF first.",!0,"shock")},
d1h(d,e){var w,v,u,t,s=this
if(s.w)return B.b0G
if(D.d.q(B.ayK,e))return s.bGm(d,e)
w=s.cRr(e)
if(d==="inspect"){if(w==null||w.c)return B.b0K
return new A.eu(!0,"You look and test: "+B.wU.h(0,w.a).b,!1,"")}if(w==null||w.c)return new A.eu(!1,s.b?"Nothing needs fixing there.":"There is nothing wrong with this, so the "+C.w(B.T_.h(0,d))+' is not needed. Use "Look and test" on things to find the problem.',!1,"")
v=B.wU.h(0,w.a)
if(d!==v.c){++s.f
return new A.eu(!1,s.b?"That is not the right tool for this problem.":"The "+C.w(B.T_.h(0,d))+" does not fix this. "+v.b,!1,"")}u=v.f
if(u!==0){t=s.d
u=!t.d.q(0,u)&&!t.e.q(0,u)}else u=!1
if(u){if(s.b)return s.caq()
return s.b0n("STOP! "+v.r+" The wires here are live (120 volts). Tap the breaker in the panel (with your hand) to switch it off.")}w.c=!0
s.ayy()
return new A.eu(!0,v.d,!1,"")},
bGm(d,e){var w,v,u,t,s=this
if(d==="inspect"){w=s.d
if(w.d.q(0,e))w="This breaker has tripped: it sits in the middle (orange)."
else w=w.e.q(0,e)?"This breaker is switched OFF.":"This breaker is ON."
return new A.eu(!0,w,!1,"")}if(d!=="hand")return s.b0n(s.b?"Use your hand on a breaker.":"A breaker is switched with your hand, not with a "+C.w(B.T_.h(0,d))+".")
w=s.d
v=w.d
if(v.q(0,e)){w=s.c
w===$&&C.c()
u=C.T(w).k("X<1>")
t=C.C(new C.X(w,new A.cya(e),u),u.k("M.E"))
if(t.length!==0){D.d.gH(t).c=!0
s.ayy()
return new A.eu(!0,B.wU.h(0,D.d.gH(t).a).d,!1,"")}v.W(0,e)
return B.b1f}w=w.e
if(w.q(0,e)){w.W(0,e)
return B.b19}w.J(0,e)
return B.b1_}}
A.asq.prototype={
S(){var w,v=new A.uE(-0.3,0.48,46,B.W5,$.aw())
v.f=80
w=new C.vj()
$.vM()
w.fX(0)
return new A.aFN(v,w)}}
A.aFN.prototype={
gK(){var w=this.d
w===$&&C.c()
return w},
gDa(d){var w=this.e
if(w===$){this.a.toString
w=D.o.E(Date.now(),1e5)
this.e=w}return w},
Z(){var w,v=this
v.a3()
w=v.gDa(0)
v.a.toString
w=A.hqh(!0,w)
v.d=w
v.r=A.ah7(w.d)},
t(){var w=this.ax
if(w!=null)w.a1(0)
this.a2()},
cav(d,e){var w=this,v=w.ax
if(v!=null)v.a1(0)
w.m(new A.eAh(w,d,e))
w.ax=C.cB(D.jX,new A.eAi(w))},
b0o(){this.f.fW(46,0.48,B.W5,-0.3)
this.m(new A.eA6(this))},
cau(d){var w,v,u=this
if(d===0)return
w=u.d
w===$&&C.c()
v=w.d1h(u.x,d)
w=v.a
if(w)A.pN()
else A.fD(180,220,0.25,"square")
if(v.d==="shock"){C.fL()
u.m(new A.eAb(u))
C.bP(D.ma,new A.eAc(u),x.P)}u.m(new A.eAd(u,d))
w=w&&!v.c
u.cav(v.b,w)
w=u.d
if(w.w)$.aV.x1$.push(new A.eAe(u))
else if(w.gcK6()&&!u.at){u.at=!0
$.aV.x1$.push(new A.eAf(u))}},
cjB(){var w=null,v=this.c
v.toString
C.cf(w,w,!1,w,new A.eA9(this),v,w,!0,!0,x.H)},
car(){var w,v,u=null,t=this.d
t===$&&C.c()
w=t.c
w===$&&C.c()
w=w.length
v=A.hid(t.f,t.r,w)
A.Te(v)
w=this.c
w.toString
C.cf(u,u,!0,u,new A.eA5(this,v),w,u,!0,!0,x.H)},
axX(){this.m(new A.eA7(this))
this.b0o()},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.d
g===$&&C.c()
g=g.gcRN()
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
for(o=0;o<3;++o)p.push(new C.D(D.NN,C.d(o<i.d.e?"\u2764\ufe0f":"\ud83d\udda4",h,h,h,h,h,h,D.AM,h,h,h),h))
v=A.Kh(!1,h,i.f,new A.eAp(i),h,s,u,r,h,new A.eAq(),t,h,h,i.gcas(),i.gcat(),v,!1,h,C.a([C.A(p,D.m,h,D.e,D.O,0,h,h)],q),h)
u=i.d.c
u===$&&C.c()
t=C.T(u)
t=new C.cM(new C.X(u,new A.eAr(),t.k("X<1>")),new A.eAs(),t.k("cM<1,m>")).aN(0,"  \xb7  ")
u=C.d("Customer: "+(t.length===0?"All fixed!":t),h,2,D.a2,h,h,h,B.aUH,h,h,h)
t=C.a([],q)
for(n=0;n<10;++n){m=B.dxE[n]
s=i.x===m?D.az.j(0.25):D.c.j(0.07)
r=new C.aP(14,14)
p=i.x===m
l=p?D.az:D.aW
k=new C.ay(l,p?2:1,D.r,-1)
l=B.dDr.h(0,m)
p=C.Y(l,i.x===m?D.az:D.ad,h,h,h,19)
l=B.T_.h(0,m)
l.toString
j=i.x===m?D.az:D.c
t.push(new C.D(G.om,C.aA(h,C.p(h,new C.c7(D.aM,D.e,D.i,D.m,h,D.p,h,0,C.a([p,D.bn,C.d(l,h,h,h,h,h,h,new C.G(!0,j,h,h,h,h,12.5,D.H,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h),h,h,h)],q),h),D.f,h,h,new C.o(s,h,new C.bG(k,k,k,k),new C.bg(r,r,r,r),h,h,D.n),h,h,h,h,D.f1,h,h,h),D.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new A.eAt(i,m),h,h,h,h,h,h,!1,D.a4),h))}g=C.a([A.II(D.aJ,new A.eAu(i,d),C.x(C.a([new C.bL(D.a6,h,h,u,h),D.P,new C.a5(h,52,C.cj(t,h,h,h,h,h,D.aM,!1),h)],q),D.m,h,D.e,D.O,0,D.p),v,""+g+"/"+w+" fixed","Service call",h)],q)
if(i.as)g.push(C.bR(0,new C.dB(!0,C.p(h,h,D.f,B.ajm,h,h,h,h,h,h,h,h,h,h),h),0,0,0))
return new C.an(D.a0,h,D.ac,D.t,g,h)},
cEo(d){return C.bT(E.mH,null,new A.eAn(this),d,!0,!0,!0,D.ke,!1,!1,x.H)},
$0(){return this.gK().$0()},
$1(d){return this.gK().$1(d)},
$2(d,e){return this.gK().$2(d,e)},
$3$4(d,e,f,g,h,i,j){return this.gK().$3$4(d,e,f,g,h,i,j)},
$1$2$onError(d,e,f){return this.gK().$1$2$onError(d,e,f)},
$4(d,e,f,g){return this.gK().$4(d,e,f,g)},
$3(d,e,f){return this.gK().$3(d,e,f)},
$1$4(d,e,f,g,h){return this.gK().$1$4(d,e,f,g,h)},
$5(d,e,f,g,h){return this.gK().$5(d,e,f,g,h)},
$2$5(d,e,f,g,h,i,j){return this.gK().$2$5(d,e,f,g,h,i,j)},
$3$6(d,e,f,g,h,i,j,k,l){return this.gK().$3$6(d,e,f,g,h,i,j,k,l)},
$2$4(d,e,f,g,h,i){return this.gK().$2$4(d,e,f,g,h,i)},
$4$cancelOnError$onDone$onError(d,e,f,g){return this.gK().$4$cancelOnError$onDone$onError(d,e,f,g)},
$1$growable(d){return this.gK().$1$growable(d)},
$1$highContrast(d){return this.gK().$1$highContrast(d)},
$1$accessibilityFeatures(d){return this.gK().$1$accessibilityFeatures(d)},
$2$disableAnimations$reduceMotion(d,e){return this.gK().$2$disableAnimations$reduceMotion(d,e)},
$1$platformBrightness(d){return this.gK().$1$platformBrightness(d)},
$1$1(d,e){return this.gK().$1$1(d,e)},
$1$locales(d){return this.gK().$1$locales(d)},
$1$paragraphSpacingOverride(d){return this.gK().$1$paragraphSpacingOverride(d)},
$1$wordSpacingOverride(d){return this.gK().$1$wordSpacingOverride(d)},
$1$letterSpacingOverride(d){return this.gK().$1$letterSpacingOverride(d)},
$1$lineHeightScaleFactorOverride(d){return this.gK().$1$lineHeightScaleFactorOverride(d)},
$1$textScaleFactor(d){return this.gK().$1$textScaleFactor(d)},
$13$buttons$change$device$kind$physicalX$physicalY$pressure$pressureMax$scale$signalKind$timeStamp$viewId(d,e,f,g,h,i,j,k,l,m,n,o,p){return this.gK().$13$buttons$change$device$kind$physicalX$physicalY$pressure$pressureMax$scale$signalKind$timeStamp$viewId(d,e,f,g,h,i,j,k,l,m,n,o,p)},
$15$buttons$change$device$kind$onRespond$physicalX$physicalY$pressure$pressureMax$scrollDeltaX$scrollDeltaY$signalKind$timeStamp$viewId(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){return this.gK().$15$buttons$change$device$kind$onRespond$physicalX$physicalY$pressure$pressureMax$scrollDeltaX$scrollDeltaY$signalKind$timeStamp$viewId(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r)},
$26$buttons$change$device$distance$distanceMax$kind$obscured$orientation$physicalX$physicalY$platformData$pressure$pressureMax$pressureMin$radiusMajor$radiusMax$radiusMin$radiusMinor$scale$scrollDeltaX$scrollDeltaY$signalKind$size$tilt$timeStamp$viewId(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0,a1,a2,a3,a4,a5){return this.gK().$26$buttons$change$device$distance$distanceMax$kind$obscured$orientation$physicalX$physicalY$platformData$pressure$pressureMax$pressureMin$radiusMajor$radiusMax$radiusMin$radiusMinor$scale$scrollDeltaX$scrollDeltaY$signalKind$size$tilt$timeStamp$viewId(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0,a1,a2,a3,a4,a5)},
$1$accessibleNavigation(d){return this.gK().$1$accessibleNavigation(d)},
$1$semanticsEnabled(d){return this.gK().$1$semanticsEnabled(d)},
$6$device$pressureMax$signalKind$timeStamp$viewId(d,e,f,g,h,i){return this.gK().$6$device$pressureMax$signalKind$timeStamp$viewId(d,e,f,g,h,i)},
$3$data$details$event(d,e,f){return this.gK().$3$data$details$event(d,e,f)},
$13$buttons$change$device$kind$physicalX$physicalY$pressure$pressureMax$signalKind$tilt$timeStamp$viewId(d,e,f,g,h,i,j,k,l,m,n,o,p){return this.gK().$13$buttons$change$device$kind$physicalX$physicalY$pressure$pressureMax$signalKind$tilt$timeStamp$viewId(d,e,f,g,h,i,j,k,l,m,n,o,p)},
$1$style(d){return this.gK().$1$style(d)},
$2$priority$scheduler(d,e){return this.gK().$2$priority$scheduler(d,e)},
$1$allowPlatformDefault(d){return this.gK().$1$allowPlatformDefault(d)},
$2$position(d,e){return this.gK().$2$position(d,e)},
$1$debugBuildRoot(d){return this.gK().$1$debugBuildRoot(d)},
$1$defaultBlurTileMode(d){return this.gK().$1$defaultBlurTileMode(d)},
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
$2$1(d,e,f){return this.gK().$2$1(d,e,f)},
$1$alpha(d){return this.gK().$1$alpha(d)},
$1$2$retryIf(d,e,f){return this.gK().$1$2$retryIf(d,e,f)},
$1$end(d){return this.gK().$1$end(d)},
$1$text(d){return this.gK().$1$text(d)},
$1$line(d){return this.gK().$1$line(d)},
$2$color(d,e){return this.gK().$2$color(d,e)},
$2$withDrive(d,e){return this.gK().$2$withDrive(d,e)},
$1$scheme(d){return this.gK().$1$scheme(d)},
$2$arguments(d,e){return this.gK().$2$arguments(d,e)},
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
$1$2(d,e,f){return this.gK().$1$2(d,e,f)},
$5$alignment$alignmentPolicy$curve$duration(d,e,f,g,h){return this.gK().$5$alignment$alignmentPolicy$curve$duration(d,e,f,g,h)},
$2$ignoreCurrentFocus(d,e){return this.gK().$2$ignoreCurrentFocus(d,e)},
$3$alignmentPolicy$forward(d,e,f){return this.gK().$3$alignmentPolicy$forward(d,e,f)},
$1$5(d,e,f,g,h,i){return this.gK().$1$5(d,e,f,g,h,i)},
$3$textDirection(d,e,f){return this.gK().$3$textDirection(d,e,f)},
$3$debugReport(d,e,f){return this.gK().$3$debugReport(d,e,f)},
$1$padding(d){return this.gK().$1$padding(d)},
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
$3$padding$size$viewPadding(d,e,f){return this.gK().$3$padding$size$viewPadding(d,e,f)},
$3$life(d,e,f){return this.gK().$3$life(d,e,f)},
$5$fall$life$size(d,e,f,g,h){return this.gK().$5$fall$life$size(d,e,f,g,h)},
$3$blur(d,e,f){return this.gK().$3$blur(d,e,f)},
$4$blur$shift(d,e,f,g){return this.gK().$4$blur$shift(d,e,f,g)},
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
$4$shine(d,e,f,g){return this.gK().$4$shine(d,e,f,g)},
$6$shine$sides(d,e,f,g,h,i){return this.gK().$6$shine$sides(d,e,f,g,h,i)},
$4$r(d,e,f,g){return this.gK().$4$r(d,e,f,g)},
$3$r(d,e,f){return this.gK().$3$r(d,e,f)},
$6$joints$shine$sides(d,e,f,g,h,i){return this.gK().$6$joints$shine$sides(d,e,f,g,h,i)},
$8$caps$inner$shine$sides(d,e,f,g,h,i,j,k){return this.gK().$8$caps$inner$shine$sides(d,e,f,g,h,i,j,k)},
$5$sides(d,e,f,g,h){return this.gK().$5$sides(d,e,f,g,h)},
$7$caps$shine$sides(d,e,f,g,h,i,j){return this.gK().$7$caps$shine$sides(d,e,f,g,h,i,j)},
$5$shine$split(d,e,f,g,h){return this.gK().$5$shine$split(d,e,f,g,h)},
$1$target(d){return this.gK().$1$target(d)},
$4$split(d,e,f,g){return this.gK().$4$split(d,e,f,g)},
$7$r1$shine$sides(d,e,f,g,h,i,j){return this.gK().$7$r1$shine$sides(d,e,f,g,h,i,j)},
$6$taped(d,e,f,g,h,i){return this.gK().$6$taped(d,e,f,g,h,i)},
$6$normal(d,e,f,g,h,i){return this.gK().$6$normal(d,e,f,g,h,i)},
$2$dist$target(d,e){return this.gK().$2$dist$target(d,e)},
$3$dist$pitch$target(d,e,f){return this.gK().$3$dist$pitch$target(d,e,f)},
$6$color$on$onTap(d,e,f,g,h,i){return this.gK().$6$color$on$onTap(d,e,f,g,h,i)},
$5$on$onTap(d,e,f,g,h){return this.gK().$5$on$onTap(d,e,f,g,h)},
$6$on$onTap$small(d,e,f,g,h,i){return this.gK().$6$on$onTap$small(d,e,f,g,h,i)},
$4$w(d,e,f,g){return this.gK().$4$w(d,e,f,g)},
$5$shine$yaw(d,e,f,g,h){return this.gK().$5$shine$yaw(d,e,f,g,h)},
$7$endCaps$joints$shine$sides(d,e,f,g,h,i,j){return this.gK().$7$endCaps$joints$shine$sides(d,e,f,g,h,i,j)},
$4$alongX(d,e,f,g){return this.gK().$4$alongX(d,e,f,g)},
$5$ends$shine(d,e,f,g,h){return this.gK().$5$ends$shine(d,e,f,g,h)},
$2$col(d,e){return this.gK().$2$col(d,e)},
$5$h$w(d,e,f,g,h){return this.gK().$5$h$w(d,e,f,g,h)},
$7$normal$twoSided(d,e,f,g,h,i,j){return this.gK().$7$normal$twoSided(d,e,f,g,h,i,j)},
$6$shine$skip$split(d,e,f,g,h,i){return this.gK().$6$shine$skip$split(d,e,f,g,h,i)},
$6$shine(d,e,f,g,h,i){return this.gK().$6$shine(d,e,f,g,h,i)},
$4$color(d,e,f,g){return this.gK().$4$color(d,e,f,g)},
$6$caps$sides(d,e,f,g,h,i){return this.gK().$6$caps$sides(d,e,f,g,h,i)},
$5$lat$lon(d,e,f,g,h){return this.gK().$5$lat$lon(d,e,f,g,h)},
$6$r1$sides(d,e,f,g,h,i){return this.gK().$6$r1$sides(d,e,f,g,h,i)},
$7$normal$shine(d,e,f,g,h,i,j){return this.gK().$7$normal$shine(d,e,f,g,h,i,j)},
$5$poster(d,e,f,g,h){return this.gK().$5$poster(d,e,f,g,h)},
$6$ends$shine$split(d,e,f,g,h,i){return this.gK().$6$ends$shine$split(d,e,f,g,h,i)},
$4$round(d,e,f,g){return this.gK().$4$round(d,e,f,g)},
$5$col$round(d,e,f,g,h){return this.gK().$5$col$round(d,e,f,g,h)},
$4$col(d,e,f,g){return this.gK().$4$col(d,e,f,g)},
$4$yaw(d,e,f,g){return this.gK().$4$yaw(d,e,f,g)},
$3$col(d,e,f){return this.gK().$3$col(d,e,f)},
$1$pixelRatio(d){return this.gK().$1$pixelRatio(d)},
$2$format$numChannels(d,e){return this.gK().$2$format$numChannels(d,e)},
$2$alpha$numChannels(d,e){return this.gK().$2$alpha$numChannels(d,e)},
$5$primary(d,e,f,g,h){return this.gK().$5$primary(d,e,f,g,h)},
$3$note(d,e,f){return this.gK().$3$note(d,e,f)},
$1$speed(d){return this.gK().$1$speed(d)},
$7$note(d,e,f,g,h,i,j){return this.gK().$7$note(d,e,f,g,h,i,j)},
$6$joint(d,e,f,g,h,i){return this.gK().$6$joint(d,e,f,g,h,i)},
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
$4$padToo(d,e,f,g){return this.gK().$4$padToo(d,e,f,g)},
$9$shine(d,e,f,g,h,i,j,k,l){return this.gK().$9$shine(d,e,f,g,h,i,j,k,l)},
$5$max$min(d,e,f,g,h){return this.gK().$5$max$min(d,e,f,g,h)},
$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){return this.gK().$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r)},
$2$f$r(d,e){return this.gK().$2$f$r(d,e)},
$1$radius(d){return this.gK().$1$radius(d)},
$4$gender$phone(d,e,f,g){return this.gK().$4$gender$phone(d,e,f,g)},
$3$hint$prefix(d,e,f){return this.gK().$3$hint$prefix(d,e,f)},
$3$helperText$prefixText(d,e,f){return this.gK().$3$helperText$prefixText(d,e,f)},
$1$verifyUrls(d){return this.gK().$1$verifyUrls(d)},
$2$wrapWidth(d,e){return this.gK().$2$wrapWidth(d,e)}}
A.yh.prototype={
giV(d){return this.x}}
A.tW.prototype={}
A.aap.prototype={}
A.i9.prototype={
aHx(d,e,f){var w=this
return d>w.a-f&&d<w.b+f&&e>w.c-f&&e<w.d+f}}
A.cuI.prototype={
caw(d){return-this.a.geb(0)/2+d*4},
a5x(d,e){var w,v,u=this.a
if(d<-u.geb(0)/2+6||d>u.geb(0)/2-6||e<6||e>u.gh3(0)-6)return!1
for(u=this.b,w=u.length,v=0;v<w;++v)if(u[v].aHx(d,e,9))return!1
return!0},
b0q(d,e,f){var w,v,u=e.a,t=f.a-u,s=e.b,r=f.b-s,q=Math.max(1,D.k.cL(Math.sqrt(Math.pow(t,2)+Math.pow(r,2))/2))
for(w=0;w<=q;++w){v=w/q
if(!this.a5x(u+t*v,s+r*v))return!1}return!0},
aZZ(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=a0.a,f=h.a,e=D.k.V((g+f.geb(0)/2)/4),d=h.c
d===$&&C.c()
w=D.o.F(e,0,d-1)
e=a0.b
v=D.k.V(e/4)
u=h.d
u===$&&C.c()
t=D.o.F(v,0,u-1)
for(s=0;s<16;++s){for(r=-s,q=r,p=null,o=1/0;q<=s;++q)for(n=w+q,v=Math.abs(q),m=r;m<=s;++m){if(Math.max(v,Math.abs(m))!==s)continue
l=t+m
if(n<0||l<0||n>=d||l>=u)continue
k=n*4
j=l*4
if(!h.a5x(-f.geb(0)/2+k,j))continue
i=Math.pow(-f.geb(0)/2+k-g,2)+Math.pow(j-e,2)
if(i<o){p=new C.y(n,l)
o=i}}if(p!=null)return p}return null},
apz(b9,c0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5=this,b6=1e9,b7=b5.aZZ(b9),b8=b5.aZZ(c0)
if(b7==null||b8==null)return C.a([b9,c0],x.f)
w=b8.a
v=b5.caw(w)
u=b8.b
t=new C.y(v,u*4)
if(b5.b0q(0,b9,t))return C.a([b9,t],x.f)
v=b7.a
s=b5.d
s===$&&C.c()
r=b7.b
q=x.S
p=C.ey([v*s+r],q)
o=C.U(q,q)
n=x.i
m=C.I([v*s+r,0],q,n)
l=C.I([v*s+r,b5.bW8(v,r,b8)],q,n)
k=w*s+u
v=b5.a
r=p.$ti
q=r.k("ms<1>")
r=r.c
i=0
for(;;){if(p.a!==0){h=i+1
n=i<6000
i=h}else n=!1
if(!n){j=!1
break}g=p.e
if(g==null)C.bi(C.bc("No elements"))
f=g.a
for(n=new C.ms(p,p.r,q),n.c=g;n.C();){e=n.d
d=e==null?r.a(e):e
e=l.h(0,d)
if(e==null)e=b6
a0=l.h(0,f)
if(e<(a0==null?b6:a0))f=d}if(f===k){j=!0
break}p.W(0,f)
a1=D.o.ec(f,s)
a2=D.o.E(f,s)
for(n=a2*4,e=a1*4,a3=-1;a3<=1;++a3)for(a0=a3===0,a4=!a0,a5=a1+a3,a6=a5*4,a7=a5-w,a8=-1;a8<=1;++a8){if(a0&&a8===0)continue
a9=a2+a8
b0=!0
if(a5>=0)if(a9>=0){b0=b5.c
b0===$&&C.c()
b0=a5>=b0||a9>=s||!b5.a5x(-v.geb(0)/2+a6,a9*4)}if(b0)continue
b0=!1
if(a4)if(a8!==0)b0=!b5.a5x(-v.geb(0)/2+a6,n)||!b5.a5x(-v.geb(0)/2+e,a9*4)
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
while(o.an(0,D.d.gam(b3))){w=o.h(0,D.d.gam(b3))
w.toString
b3.push(w)}w=x.f
u=C.a([b9],w)
for(r=x.c5,q=new C.du(b3,r),q=new C.bO(q,q.gI(0),r.k("bO<ak.E>")),r=r.k("ak.E");q.C();){n=q.d
if(n==null)n=r.a(n)
e=D.o.ec(n,s)
u.push(new C.y(-v.geb(0)/2+e*4,D.o.E(n,s)*4))}b4=C.a([D.d.gH(u)],w)
for(a5=0;a9=u.length-1,a5<a9;a5=a9){w=a5+1
for(;;){if(!(a9>w&&!b5.b0q(0,u[a5],u[a9])))break;--a9}b4.push(u[a9])}return b4},
bW8(d,e,f){return Math.sqrt(Math.pow(d-f.a,2)+Math.pow(e-f.b,2))}}
A.AO.prototype={}
A.bsN.prototype={
bC3(d,e,f,g,h,i,j,k,l,m,n,o){var w,v,u,t,s=this.b
if(s!=null)for(w=this.as,v=1;v<s.length;++v){u=v-1
t=Math.sqrt(Math.pow(s[v].a-s[u].a,2)+Math.pow(s[v].b-s[u].b,2))
w.push(t)
this.at+=t}}}
A.aX_.prototype={
avR(d){var w,v,u=d.geb(0),t=new A.bVZ(d,u)
switch(d.c){case"living":w=t.$1(46)
return C.a([B.hsc,new A.AO(w.a,w.b,4,"Switching the ad on the big TV",!1,!0,!0,"ad")],x.h)
case"kitchen":return C.a([new A.AO(new C.y(-u/2+40,42),3.141592653589793,2.8,"Getting a drink from the fridge",!0,!1,!1,""),B.hsb],x.h)
case"bathroom":return B.duj
case"bedroom":v=t.$1(44)
return C.a([new A.AO(v.a,v.b,3.4,"Switching the ad on the TV",!1,!0,!0,"ad")],x.h)
case"hall":if(!this.a)return B.aBq
return C.a([new A.AO(new C.y(-d.geb(0)/2+80,90),3.141592653589793,3,"Looking at the left video wall",!1,!1,!0,""),new A.AO(B.eyx,0,2.4,"Looking over the lounge and the logo carpet",!1,!1,!1,""),new A.AO(new C.y(d.geb(0)/2-80,90),3.141592653589793,3,"Looking at the right video wall",!1,!1,!0,"")],x.h)
default:return B.aBq}},
ad6(a0,a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=e.b.d
d===$&&C.c()
w=d[a0]
v=new A.cuI(w,A.inH(w))
v.c=D.k.cL(w.geb(0)/4)+1
v.d=D.k.cL(w.gh3(0)/4)+1
u=A.hui(w,a1)
t=u.a
s=u.c
d=e.d
r=d.length
q=a3.length===0?"Walking in":a3
d.push(A.bsO(a0,"",!1,q,-1,null,!1,!1,0.5,t.a,u.b,t.b))
for(q=e.avR(w),p=q.length,o=t,n=0;n<q.length;q.length===p||(0,C.J)(q),++n){m=q[n]
l=v.apz(o,m.a)
k=m.e
if(k)j=C.cS(m.d,"Having",0)
else j=!1
d.push(A.bsO(a0,"",j,"Walking",-1,l,!1,!1,0,0,0,0))
o=D.d.gam(l)
d.push(A.bsO(a0,m.w,k,m.d,-1,null,m.r,m.f,m.c,o.a,m.b,o.b))}if(a2!=null){i=A.hui(w,a2)
h=i.c
l=v.apz(o,i.a)
g=e.avR(w).length!==0&&D.d.gam(e.avR(w)).e
d.push(A.bsO(a0,"",g,"Walking to the next room",-1,l,!1,!1,0,0,0,0))
o=D.d.gam(l)
d.push(A.bsO(a0,"",g,"Opening the door",h,null,!1,!1,1.8,o.a,e.bPw(w,h),o.b))}for(f=r;f<d.length;++f)d[f].ay=s},
aYJ(d,e,f){return this.ad6(d,e,f,"")},
bPw(d,e){var w
switch(d.w[e].b){case"left":w=-1.5707963267948966
break
case"right":w=1.5707963267948966
break
default:w=3.141592653589793
break}return w},
b0p(){var w,v,u=this
if(u.a){u.ad6(5,10,9,"Walking into the hall")
u.b0r()
return}u.ad6(10,11,9,"Coming in through the front door")
u.aYJ(9,10,5)
u.ad6(5,9,0,"Walking down the hall")
for(w=0;w<8;++w){v=B.d0Y[w]
u.aYJ(v,5,w===7?null:5)}u.b0r()},
b0r(){var w,v,u,t,s,r,q,p,o=this,n=o.c,m=Math.min(1,n/120)
for(w=o.d,v=w.length,u=0,t=0,s=0;s<v;++s){r=w[s]
if(r.b==null)u+=r.f*=m
else t+=r.at}q=t/Math.max(4,n-u)
for(n=q<=0,p=0,s=0;s<v;++s){r=w[s]
if(r.b!=null)r.f=n?0.1:Math.max(0.05,r.at/q)
r.ax=p
p+=r.f}o.e!==$&&C.aQ()
o.e=p},
bdf(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g={},f=this.e
f===$&&C.c()
w=D.k.F(d,0,f-0.001)
f=this.d
g.a=D.d.gam(f)
for(v=f.length,u=0;u<v;++u){t=f[u]
s=t.ax
if(w>=s&&w<s+t.f){g.a=t
break}}f=g.a
v=f.f
r=v<=0?0:D.k.F((w-f.ax)/v,0,1)
f=g.a
if(f.b==null){q=r>0.5
v=f.a
s=f.y&&q
p=q&&f.z.length!==0?f.z+":"+v:""
o=f.Q
n=o>=0?r:0
return A.auj(!1,n,f.ay,p,f.w,0,f.r,o,0,!1,s,f.x,v,!1,!1,f.c,f.e,f.d)}v=new A.bW_(g)
m=r*f.at
l=v.$1(m)
k=v.$1(Math.min(g.a.at,m+7))
j=v.$1(Math.max(0,m-7))
i=k.a-j.a
h=k.b-j.b
if(Math.abs(i)<0.000001&&Math.abs(h)<0.000001){f=g.a.b
f.toString
f=D.d.gam(f)
v=g.a.b
v.toString
i=f.a-D.d.gH(v).a
v=g.a.b
v.toString
v=D.d.gam(v)
f=g.a.b
f.toString
h=v.b-D.d.gH(f).b}f=g.a
v=l.a
s=l.b
p=Math.atan2(i,h)
o=g.a
return A.auj(!1,0,o.ay,"",o.w,0,o.r,-1,m/12,!1,!1,!1,f.a,!1,!0,v,p,s)}}
A.baf.prototype={
GQ(d){var w=this.a
if(w!=null)this.ax=A.hC9(w,this.CW)},
aKu(){var w,v,u,t,s,r,q=this
if(!q.L0(q.f,q.r))return!1
for(w=6;w<=320;w+=6){v=Math.max(8,D.k.V(w/6)*3)
for(u=0;u<v;++u){t=u*2*3.141592653589793/v
s=q.f+Math.cos(t)*w
r=q.r+Math.sin(t)*w
if(!q.L0(s,r)){q.f=s
q.r=r
q.at=null
return!0}}}return!1},
L0(d,e){var w,v,u,t,s=this
if(d<s.b||d>s.c||e<s.d||e>s.e)return!0
for(w=s.ax,v=w.length,u=s.ay,t=0;t<v;++t)if(w[t].aHx(d,e,u))return!0
return!1},
aMO(d,e,f,g){var w,v,u,t,s,r,q,p,o=this,n=Math.sqrt(e*e+f*f)
if(n<0.000001)return o.x=!1
w=e/n
v=f/n
u=o.ch
t=o.z?1.9:1
s=115*u*t*Math.min(1,n)*g
r=o.f+w*s
q=o.r+v*s
p=!0
if(o.L0(r,q))if(!o.L0(r,o.r))q=o.r
else{p=!o.L0(o.f,q)
if(p)r=o.f}if(p){o.f=r
o.r=q
o.w=Math.atan2(w,v)
o.y=o.y+s/12}return o.x=p},
cRq(d){var w,v=this,u=v.Q
if(u<=0&&v.as<=0)return
w=v.as
u+=w*d
v.Q=u
v.as=w-560*d
if(u<=0)v.as=v.Q=0},
FT(d,e){var w,v,u,t=this,s=t.at
if(s==null)return!1
w=s.a-t.f
v=s.b-t.r
if(Math.sqrt(w*w+v*v)<4){t.at=null
return t.x=!1}u=t.aMO(0,w,v,e)
if(!u){t.at=null
t.x=!1}return u}}
A.akP.prototype={}
A.aqw.prototype={
S(){var w=x.N
return new A.beR(C.U(w,w),null,null)}}
A.beR.prototype={
gab7(){var w,v=this,u=v.Q
if(u===$){w=C.bl(null,D.ma,null,1,null,v)
v.Q!==$&&C.bE()
v.Q=w
u=w}return u},
t(){this.gab7().t()
this.bxn()},
cb2(d){return this.m(new A.d9T(this,d))},
cDt(d){return this.m(new A.d9U(this,d))},
cDE(d){var w=this,v=w.w
if(v==null){w.m(new A.d9V(w))
return}w.m(new A.d9W(w,v,d))
w.gab7().iw(0,0)
C.eW()},
b0D(d,e,f,g){var w,v=null,u=e?D.az.j(0.2):D.c.j(0.05),t=C.n(14),s=e?D.az:D.bB
s=C.L(s,D.r,e?2:1)
w=C.Y(f,e?D.az:D.aD,v,v,v,17)
return C.E(C.aA(v,C.cV(v,C.A(C.a([w,D.bn,new C.dp(1,D.co,C.d(d,v,v,v,v,v,v,C.l(v,v,e?D.az:D.ad,v,v,v,v,v,v,v,v,12.5,v,v,D.H,v,v,!0,v,v,v,v,v,v,v,v),D.K,v,v),v)],x.p),D.m,v,D.bb,D.i,0,v,v),v,v,D.b6,new C.o(u,v,s,t,v,v,D.n),D.eJ,v,v,v,v,D.rL,v,v,v),D.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,g,v,v,v,v,v,v,!1,D.a4),1)},
c3z(d){var w,v=null,u=A.hvw(d),t=this.w===d,s=this.f.h(0,d),r=u.iR()>0.5?D.av:D.c,q=t?D.b0:D.aW
q=C.L(q,D.r,t?3:1)
w=C.a([],x.V)
if(t)w.push(new C.ac(0,D.G,D.b0.j(0.5),D.I,14))
return C.aA(v,C.cV(v,C.A(C.a([C.Y(s!=null?D.e9:A.i6H(d),r,v,v,v,20),Af.Eu,C.E(C.d(d,v,2,D.a2,v,v,v,C.l(v,v,r,v,v,v,v,v,v,v,v,12.5,v,v,D.u,v,1.15,!0,v,v,v,v,v,v,v,v),v,v,v),1)],x.p),D.m,v,D.e,D.i,0,v,v),v,v,D.b6,new C.o(u,v,q,B.b3J,w,v,D.n),D.h8,v,58,v,D.cv,B.bAs,v,v,v),D.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new A.d9P(this,d),v,v,v,v,v,v,!1,D.a4)},
cjH(d){var w,v,u,t,s,r=this,q=null,p=A.i8z(d),o=C.a([],x.s)
for(w=r.f,w=new C.cs(w,C.a4(w).k("cs<1,2>")).gag(0);w.C();){v=w.d
if(v.b===d)o.push(v.a)}w=r.w==null
if(!w)u=D.b0.j(0.7)
else u=o.length!==0?p:D.bB
u=C.L(u,D.r,!w||o.length!==0?2:1)
t=C.a([D.c.j(0.9),p],x.O)
s=C.L(D.hC,D.r,1)
t=C.a([C.p(q,C.at(C.p(q,q,D.f,D.aT,q,q,q,2.5,q,q,q,q,q,10),q,q,q),D.f,q,q,new C.o(q,q,s,q,q,new C.c_(D.A,0.5,D.x,q,0,t,q,q),D.a7),q,22,q,q,q,q,q,22),D.ae,C.E(C.d(d,q,3,D.a2,q,q,q,B.ft8,q,q,q),1)],x.p)
if(o.length!==0)t.push(C.aA(q,B.eqG,D.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new A.d9R(r,o),q,q,q,q,q,q,!1,D.a4))
return C.aA(q,C.cV(q,C.A(t,D.m,q,D.e,D.i,0,q,q),q,q,D.b6,new C.o(B.bma,q,u,B.b41,q,q,D.n),D.h8,q,58,q,D.cv,B.bCe,q,q,q),D.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new A.d9S(r,d),q,q,q,q,q,q,!1,D.a4)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=B.qM[i.d].e,f=Math.max(g.gI(g),5),e=i.f.a
g=x.p
w=C.eE(C.a([C.aH(h,h,h,h,B.bUH,h,h,h,new A.da0(d),h,h,h,h,"Wire guide",h)],g),h,h,!0,!0,E.y8,h,1,h,h,h,!1,h,!1,h,h,h,h,!0,h,h,h,h,h,B.fVO,h,h,h,1,h,!0)
v=C.a([],g)
for(u=x.O,t=0;t<2;++t){s=C.a([],g)
if(t>0)s.push(D.at)
r=i.d===t?B.drb:C.a([D.c.j(0.06),D.c.j(0.03)],u)
q=new C.aP(18,18)
p=new C.ay(i.d===t?D.o5:D.bB,1,D.r,-1)
o=B.qM[t]
n=C.d(o.a==="threeway"?"\ud83d\udd00":"\ud83c\udf00",h,h,h,h,h,h,D.n8,h,h,h)
o=D.d.gH(o.b.split(" ("))
m=i.d===t?D.c:D.ad
s.push(new C.by(1,D.bc,C.aA(h,C.cV(h,new C.c7(D.aM,D.e,D.i,D.m,h,D.p,h,0,C.a([n,D.ae,new C.by(1,D.bc,C.d(o,h,3,D.a2,h,h,h,new C.G(!0,m,h,h,h,h,13,D.u,h,h,h,h,1.15,h,h,h,h,h,h,h,h,h,h,h,h,h),h,h,h),h)],g),h),h,h,D.b6,new C.o(h,h,new C.bG(p,p,p,p),new C.bg(q,q,q,q),h,new C.a9(D.a6,D.a9,D.x,r,h,h),D.n),D.a3,h,h,h,h,D.bh,h,h,h),D.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new A.da1(i,t),h,h,h,h,h,h,!1,D.a4),h))
D.d.v(v,s)}v=C.A(v,D.m,h,D.e,D.i,0,h,h)
u=C.A(C.a([i.b0D("Practice (instant feedback)",!i.e,D.or,new A.da2(i)),D.at,i.b0D("Test (marked on submit)",i.e,D.qF,new A.da3(i))],g),D.m,h,D.e,D.i,0,h,h)
s=D.c.j(0.05)
r=C.n(18)
q=C.L(D.bB,D.r,1)
o=B.qM[i.d]
n=C.d(o.b,h,h,h,h,h,h,L.ab2,h,h,h)
m=C.d(o.c,h,h,h,h,h,h,B.fxA,h,h,h)
o=o.e
o=C.bx(C.n(6),C.kl(D.bB,h,h,8,h,e/o.gI(o),B.b1X),D.aq)
l=B.qM[i.d].e
r=C.a([new C.a5(h,78,v,h),D.af,u,D.aC,C.p(h,C.x(C.a([n,D.an,m,D.X,o,D.aw,C.d(""+e+" of "+l.gI(l)+" wires connected",h,h,h,h,h,h,B.fmm,h,h,h)],g),D.E,h,D.e,D.i,0,D.p),D.f,h,h,new C.o(s,h,q,r,h,h,D.n),h,h,h,h,D.bE,h,h,h),D.aC,B.f73,D.an,C.cr(new A.da4(i,f*66)),D.P],g)
if(i.y!=null&&!i.e){v=(i.z?D.b9:D.c0).j(0.12)
u=C.n(14)
s=C.L((i.z?D.b9:D.c0).j(0.6),D.r,1)
q=i.z
o=q?D.e9:B.bPq
o=C.Y(o,q?D.b9:D.c0,h,h,h,20)
n=i.y
n.toString
r.push(C.cV(h,C.A(C.a([o,D.ae,C.E(C.d(n,h,h,h,h,h,h,C.l(h,h,q?D.et:D.eQ,h,h,h,h,h,h,h,h,12.8,h,h,D.V,h,1.4,!0,h,h,h,h,h,h,h,h),h,h,h),1)],g),D.E,h,D.e,D.i,0,h,h),h,h,D.b6,new C.o(v,h,s,u,h,h,D.n),D.a3,h,h,h,h,D.bh,h,h,h))}r.push(D.af)
v=C.bn(D.az,h,h,h,D.w,h,h,h,new C.b9(C.n(16),D.a1),h,h,h)
u=i.e
s=C.Y(u?D.qF:D.lk,h,h,h,h,h)
r.push(new C.a5(h,52,C.dh(s,C.d(u?"Submit the test":"Check my wiring",h,h,h,h,h,h,D.nS,h,h,h),new A.da5(i),v),h))
v=i.r
if(v!=null){v=v.a
if(v===B.r_)v=D.b9
else v=v===B.JS?D.bs:D.c0
v=v.j(0.1)
u=C.n(16)
s=i.r.a
if(s===B.r_)s=D.b9
else s=s===B.JS?D.bs:D.c0
s=C.L(s.j(0.6),D.r,1)
q=i.r.a
o=q===B.r_
n=o?"CORRECT: every lead follows the diagram.":A.h8b(q)+": not passed"
if(o)q=D.b9
else q=q===B.JS?D.bs:D.c0
q=C.a([C.d(n,h,h,h,h,h,h,C.l(h,h,q,h,h,h,h,h,h,h,h,15,h,h,D.u,h,h,!0,h,h,h,h,h,h,h,h),h,h,h),D.P],g)
for(o=i.r.b,n=o.length,k=0;k<o.length;o.length===n||(0,C.J)(o),++k){j=o[k]
q.push(C.d(j.c+"\nRule: "+j.d+"\nFix: "+j.e+"\n",h,h,h,h,h,h,B.fro,h,h,h))}for(o=B.qM[i.d].f,k=0;k<2;++k)q.push(C.d("\u2022 "+o[k],h,h,h,h,h,h,D.Kr,h,h,h))
D.d.v(r,C.a([D.af,C.p(h,C.x(q,D.E,h,D.e,D.i,0,D.p),D.f,h,h,new C.o(v,h,s,u,h,h,D.n),h,h,h,h,D.bE,h,h,h)],g))}return C.c5(w,E.y8,C.cj(r,h,h,B.bC4,h,h,D.ai,!1),h,!1,!1,h,h)}}
A.bxF.prototype={
a4(b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=null,a9=new A.fjW(),b0=a7.e,b1=b3.a-b0
$.S()
w=C.K()
w.r=D.aW.gp(0)
for(v=a7.b,u=0;u<v.length;++u)b2.N(new C.q(b0,a9.$1(u)),5,w)
for(u=0;u<5;++u)b2.N(new C.q(b1,a9.$1(u)),5,w)
for(t=a7.d,t=new C.cs(t,C.a4(t).k("cs<1,2>")).gag(0),s=a7.f,r=(b0+b1)/2,q=x.g,p=a7.c,o=a7.r,n=o<1,m=x.dc,l=x.f5,k=o>=1;t.C();){j=t.d
i=j.a
h=D.d.cp(v,i)
g=D.d.cp(p,j.b)
if(h<0||g<0)continue
f=a9.$1(h)
e=a9.$1(g)
d=$.S().r
a0=C.a([],q)
a1=new C.aE(d,D.ah,a8,a8,a0)
a0.push(new C.aY(b0,f))
a1.a8()
a2=new C.kP(r,f,r,e,b1,e)
a0.push(a2)
a3=a1.f
if(a3!=null)a2.ai(a3)
a1.a8()
a2=i===s
if(a2&&n){a4=new C.rs(new C.aE(d,a1.b,a1.c,a8,C.bo(a0,!0,m)),!1,C.a([],l))
if(!a4.C())C.bi(C.fp())
a5=a4.gR(0)
d=a5.a
d.ii()
a0=d.e[a5.b].b
a0===$&&C.c()
a0=a0.a.length()
d=d.a
a1=new C.aE(d.a,d.b,a8,new C.cu([a5,0,a0*o,!0]),C.a([],q))}a6=A.hvw(i)
i=new C.ao(D.Q,D.N,D.T,D.U,D.S)
i.b=D.aa
i.c=9
i.d=D.bA
i.r=D.w.j(0.55).gp(0)
b2.ae(a1,i)
i=new C.ao(D.Q,D.N,D.T,D.U,D.S)
i.b=D.aa
i.c=6
i.d=D.bA
i.r=a6.gp(0)
b2.ae(a1,i)
i=new C.ao(D.Q,D.N,D.T,D.U,D.S)
i.b=D.aa
i.c=1.6
i.d=D.bA
i.r=D.c.j(0.45).gp(0)
b2.ae(a1,i)
if(!a2||k){i=new C.ao(D.Q,D.N,D.T,D.U,D.S)
i.r=a6.gp(0)
b2.N(new C.q(b0,f),5.5,i)
i=new C.ao(D.Q,D.N,D.T,D.U,D.S)
i.r=a6.gp(0)
b2.N(new C.q(b1,e),5.5,i)}}},
aC(d){return!0}}
A.aLK.prototype={
t(){var w=this,v=w.aa$
if(v!=null)v.a5(0,w.gbA())
w.aa$=null
w.a2()},
aY(){this.b5()
this.b4()
this.bB()}}
A.K3.prototype={
a6(){return"SafetyStatus."+this.b}}
A.G2.prototype={
a6(){return"TerminalRole."+this.b}}
A.Ga.prototype={
a6(){return"WireFunction."+this.b}}
A.cB7.prototype={}
A.cEH.prototype={}
A.a4C.prototype={}
A.bN6.prototype={}
A.wA.prototype={}
A.tw.prototype={}
A.b6V.prototype={}
A.abx.prototype={}
A.aby.prototype={}
A.vo.prototype={}
A.b5E.prototype={}
A.b8N.prototype={}
A.cB9.prototype={
bst(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=C.a([],x.dH)
for(w=this.a,v=w.length,u=0;u<w.length;w.length===v||(0,C.J)(w),++u){t=w[u]
s=t.b
r=t.c
q=A.hyv(s,r,t.d)
p=new C.X(r,new A.cBa(),C.T(r).k("X<1>")).gI(0)
r=s.d?1:0
o=s.b+s.c+r
n=o===0?0:D.o.F(D.k.V(p*100/o),0,100)
if(q.a!==B.r_)n=D.o.F(n,0,79)
i.push(new A.aby(t.a,q,n))}w=C.a([],x.gl)
for(v=this.b,s=this.c,m=0;m<v.length;++m){r=v[m]
l=s.h(0,m)
w.push(new A.b5E(r,l==null?-1:l))}v=C.a([],x.t)
for(s=i.length,u=0;u<i.length;i.length===s||(0,C.J)(i),++u)v.push(i[u].c)
for(s=w.length,u=0;u<w.length;w.length===s||(0,C.J)(w),++u){k=w[u]
v.push(k.b===k.a.c?100:0)}j=v.length===0?0:D.k.V(D.d.f6(v,new A.cBb())/v.length)
return new A.b8N(i,w,j,D.d.cM(i,new A.cBc())&&j>=80)}}
A.Q6.prototype={}
A.a1L.prototype={
S(){var w=x.S
return new A.bvz(C.U(w,w))}}
A.bvz.prototype={
B(d){var w=null,v=this.e,u=C.aG(d,w,x.w).w
return C.bm(!0,new C.cR(new C.aZ(0,1/0,0,u.a.b*0.9),C.cj(v==null?this.cqy():this.ctY(v),w,w,D.bR,w,w,D.ai,!0),w),!0,!1,D.ag,!0,!0)},
cqy(){var w,v,u,t,s,r,q=this,p=null,o=q.a,n=o.c.b,m=x.p
o=C.a([C.d("Test: "+o.d,p,p,p,p,p,p,D.dg,p,p,p),D.aw,B.fDp,D.X],m)
for(w=q.d,v=x.cE,u=0;u<n.length;u=t){t=u+1
s=C.a([C.d(""+t+". "+n[u].a,p,p,p,p,p,p,D.nQ,p,p,p)],m)
for(r=0;r<3;++r)s.push(new A.aa9(r,w.h(0,u),new A.fdz(q,u),C.d(n[u].b[r],p,p,p,p,p,p,D.AK,p,p,p),!0,p,v))
s.push(D.aw)
D.d.v(o,s)}o.push(D.P)
o.push(C.bH(B.fHN,p,new A.fdA(q),p))
return o},
ctY(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=d.d,g=h?D.b9:D.c0
h=h?"Passed":"Not passed"
w=x.p
h=C.a([C.d(h,i,i,i,i,i,i,C.l(i,i,g,i,i,i,i,i,i,i,i,22,i,i,D.u,i,i,!0,i,i,i,i,i,i,i,i),i,i,i),C.d("Score "+d.c+"%  (pass mark 80%)",i,i,i,i,i,i,D.Vv,i,i,i)],w)
v=d.a
if(D.d.aX(v,new A.fdB()))h.push(B.epZ)
h.push(D.X)
for(u=v.length,t=0;t<v.length;v.length===u||(0,C.J)(v),++t){s=v[t]
r=s.b
q=r.a
p=A.hbU(q).j(0.1)
o=new C.aP(12,12)
n=new C.ay(A.hbU(q).j(0.6),1,D.r,-1)
m=A.h8b(q)
q=A.hbU(q)
q=C.a([C.d(s.a+": "+m+" ("+s.c+"%)",i,i,i,i,i,i,new C.G(!0,q,i,i,i,i,13.5,D.u,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i),i,i,i)],w)
r=r.b
if(r.length===0)q.push(B.fRF)
for(m=r.length,l=0;l<r.length;r.length===m||(0,C.J)(r),++l){k=r[l]
D.d.v(q,C.a([D.aw,C.d(A.h8b(k.b)+": "+k.c,i,i,i,i,i,i,B.fln,i,i,i),C.d("Rule: "+k.d,i,i,i,i,i,i,O.ab3,i,i,i),C.d("Fix: "+k.e,i,i,i,i,i,i,B.frp,i,i,i)],w))}h.push(C.p(i,C.x(q,D.E,i,D.e,D.i,0,D.p),D.f,i,i,new C.o(p,i,new C.bG(n,n,n,n),new C.bg(o,o,o,o),i,i,D.n),i,i,i,D.cv,D.yx,i,i,i))}for(v=d.b,u=v.length,t=0;t<v.length;v.length===u||(0,C.J)(v),++t){j=v[t]
r=D.c.j(0.05)
q=new C.aP(12,12)
p=j.a
o=p.c
m=j.b===o
n=new C.ay(m?D.b9:D.c0,1,D.r,-1)
h.push(C.p(i,C.x(C.a([C.d((m?"\u2705":"\u274c")+" "+p.a,i,i,i,i,i,i,D.lu,i,i,i),C.d("Correct answer: "+p.b[o],i,i,i,i,i,i,D.tz,i,i,i),C.d(p.d,i,i,i,i,i,i,O.ab3,i,i,i)],w),D.E,i,D.e,D.i,0,D.p),D.f,i,i,new C.o(r,i,new C.bG(n,n,n,n),new C.bg(q,q,q,q),i,i,D.n),i,i,i,D.cv,D.yx,i,i,i))}h.push(D.aw)
h.push(C.bH(D.pQ,i,new A.fdC(this),i))
return h}}
A.p4.prototype={}
A.zp.prototype={
gI(d){return this.b===0?this.f-this.e:95.5},
gbj8(){var w,v=this
if(!(v.d-v.c<47.9))if(v.b===0)w=v.f-v.e<95.9
else w=!1
else w=!0
return w}}
A.MG.prototype={}
A.MH.prototype={}
A.a4Q.prototype={}
A.bO3.prototype={
jY(d){var w,v,u,t,s=this
for(w=s.b,w=new C.dq(w,w.r,w.e);w.C();){v=w.d
v.c=v.b=v.a=!1
v.d.a9(0)}for(w=s.c,v=w.length,u=0;u<v;++u){t=w[u]
t.b=t.a=0}s.d.a9(0)
s.e=0},
j3(d){++this.e
return new A.iz(!1,d,D.ef)},
ar5(d){var w,v,u,t,s=C.a([],x.ar)
for(w=$.k2(),v=w.length,u=0;u<w.length;w.length===v||(0,C.J)(w),++u){t=w[u]
if(t.b===d)s.push(t)}return s},
gbdO(){return D.d.cM(this.ar5(0),new A.bO4(this))},
cTo(d){var w,v,u,t=this,s=A.hcx(d)
if(s==null)return t.j3("A sheet goes where the green mark is: tap one of those places.")
w=t.b.h(0,d)
if(w.a)return t.j3("There is a sheet up here already.")
v=s.b===0
if(!v&&!t.gbdO())return t.j3("The ceiling goes up first. The wall sheets then fit tight underneath it and hold its edges up.")
if(s.gbj8()&&!w.b){u=s.d-s.c
if(u<47.9)v=""+D.k.V(u)+" inches wide"
else{u=""+D.k.V(v?s.f-s.e:95.5)+" inches long"
v=u}return t.j3("This place is only "+v+". A whole sheet is too big: measure it and cut it to size first (the Cutter).")}w.a=!0
return new A.iz(!0,v?"Sheet lifted tight against the joists. Screws next, so it cannot sag.":"Sheet stood up against the studs, snug under the ceiling and a hair off the floor. Screws next.",D.ef)},
cPq(d){var w,v,u=this,t=A.hcx(d)
if(t==null)return u.j3("The cutter is for a sheet that has to be made smaller: tap an orange place.")
w=u.b.h(0,d)
if(w.a)return u.j3("The sheet is already up. Cutting is done on the floor, before it goes up.")
if(!t.gbj8())return u.j3("A whole 4 by 8 sheet fits here. No cut is needed.")
if(w.b)return u.j3("This sheet is already cut to size.")
w.b=!0
v=t.d-t.c
if(v<47.9)v=""+D.k.V(v)
else v=""+D.k.V(t.b===0?t.f-t.e:95.5)
return new A.iz(!0,"Measured, then scored the face paper with the knife against the T-square, snapped the sheet over the edge and cut the back paper. Cut to "+v+" inches. Now hang it.",D.ef)},
bpP(d){var w,v=this,u=A.hcx(d)
if(u==null)return v.j3("Screws go into a hung sheet: tap one.")
w=v.b.h(0,d)
if(!w.a)return v.j3("Hang the sheet first, then screw it.")
if(w.c)return v.j3("This sheet is screwed already.")
w.c=!0
return new A.iz(!0,u.b===0?"Screwed to every joist, 12 inches apart, each set just under the paper without breaking it.":"Screwed to every stud, 16 inches apart and 3/8 inch from the edges, each head just under the paper without breaking it.",D.ef)},
bpI(d){var w,v,u=this,t=$.xl(),s=C.nv(new C.X(t,new A.bOa(d),C.T(t).k("X<1>")))
if(s==null)return u.j3("The saw is for the holes: tap a red mark.")
w=u.b.h(0,s.b)
if(!w.a)return u.j3("Hang the sheet first. The holes are cut after it is up.")
t=w.d
if(t.q(0,d))return u.j3("This hole is already cut.")
t.J(0,d)
t=s.d
v=s.c
return new A.iz(!0,t>=0?v+": cut along the frame with the drywall saw, so the sheet ends exactly on the wood.":v+": the hole is cut just big enough for the box. The box now shows through, and the device will fit in later.",D.ef)},
aJg(d){var w,v,u,t,s=C.a([],x.K)
for(w=$.xl(),v=w.length,u=0;u<w.length;w.length===v||(0,C.J)(w),++u){t=w[u]
if(t.d===d)s.push(t)}return D.d.cM(s,new A.bO9(this))},
cKH(d){var w,v=this
if(d<0||d>=2)return v.j3("Corner bead goes on the corners of the door and the window.")
w=v.d
if(w.q(0,d))return v.j3("This opening has its corner bead.")
if(!v.aJg(d))return v.j3("Cut the opening in both sheets first.")
w.J(0,d)
return B.bJe},
azr(d){var w,v,u,t,s,r,q,p,o=this,n=C.a([],x.s)
for(w=o.ar5(d),v=w.length,u=o.b,t=0;t<w.length;w.length===v||(0,C.J)(w),++t){s=u.h(0,w[t].a)
if(!s.a){n.push("a sheet is missing")
break}if(!s.c){n.push("a sheet has no screws")
break}}if(n.length===0)for(w=$.xl(),v=w.length,t=0;t<w.length;w.length===v||(0,C.J)(w),++t){r=w[t]
q=r.b
p=q-5000
if((p>=0&&p<$.k2().length?$.k2()[p]:null).b===d&&!u.h(0,q).d.q(0,r.a)){n.push("a hole is not cut")
break}}if(n.length===0&&d===2&&!o.d.q(0,1))n.push("the window has no corner bead")
if(n.length===0&&d===3&&!o.d.q(0,0))n.push("the door has no corner bead")
return n.length===0?null:"Not yet: "+B.a6_[d]+" is not ready, "+D.d.gH(n)+"."},
cW9(d,e){var w,v,u,t=this,s=t.azr(d)
if(s!=null)return t.j3(s)
w=t.c[d]
v=w.a
switch(v){case 0:w.a=1
w.b=e+4
return new A.iz(!0,"Bed coat: mud pushed into every joint, every corner and over every screw head. Press the paper tape into it right now, while it is wet.",D.ef)
case 1:return t.j3("The tape goes into this wet mud now. Use the Tape.")
case 2:case 3:u=w.b
if(!(e>=u))return t.j3("Still wet. Mud takes a day to dry in real life; here wait "+D.k.cL(u-e)+" more seconds. A coat put on wet mud cracks.");++v
w.a=v
w.b=e+4
return new A.iz(!0,v===3?"Second coat: wider than the first, to hide the tape and its edges. Let it dry.":"Third coat: the widest and thinnest, feathered out to nothing at the edges. Let it dry, then sand.",D.ef)
case 4:return t.j3("That is the third coat. Let it dry, then sand with the Sander.")
default:return t.j3("The mud is finished here. "+(v===5?"Prime it with the Roller.":"This is done."))}},
d0q(d,e){var w,v,u=this,t=u.azr(d)
if(t!=null)return u.j3(t)
w=u.c[d]
v=w.a
if(v===0)return u.j3("Mud first. The paper tape is pressed into a bed of wet mud.")
if(v!==1)return u.j3("The tape is on already.")
w.a=2
w.b=e+4
return B.bJc},
bpz(d,e){var w=this,v=w.c[d],u=v.a
if(u<4)return w.j3(u===0?"Nothing to sand yet.":"Sand only after the third coat is dry, not before.")
if(u>4)return w.j3("It is sanded already.")
u=v.b
if(!(e>=u))return w.j3("Still wet. Sanding wet mud only smears it: wait "+D.k.cL(u-e)+" more seconds.")
v.a=5
return B.bJ8},
fU(d){var w=this.c[d],v=w.a
if(v<5)return this.j3(v===0?"Nothing to paint yet: hang the sheets and finish the joints first.":"Sand first. Primer goes on only over smooth, dry mud.")
if(v>5)return this.j3("This surface is primed already.")
w.a=6
v=B.a6_[d]
return new A.iz(!0,v[0].toUpperCase()+D.a.b2(v,1)+" primed with the roller: the paper and the mud now look the same, and the joints have disappeared.",D.ef)},
bm2(d,e){var w,v,u,t,s,r,q,p,o,n,m=this,l=new A.bOc()
switch(d){case"sheet":w=C.a([],x.u)
for(v=$.k2(),u=v.length,t=m.b,s=0;s<v.length;v.length===u||(0,C.J)(v),++s){r=v[s]
q=r.a
if(!t.h(0,q).a){if(!(r.d-r.c<47.9))if(r.b===0)p=r.f-r.e<95.9
else p=!1
else p=!0
q=!p||t.h(0,q).b}else q=!1
w.push(q)}if(l.$1(w))w=""
else w=m.ganx()===$.k2().length?" Every sheet is up.":" The pieces that are left are narrow: cut them to size with the Cutter first."
return w
case"cut":w=C.a([],x.u)
for(v=$.k2(),u=v.length,t=m.b,s=0;s<v.length;v.length===u||(0,C.J)(v),++s){r=v[s]
if(!(r.d-r.c<47.9))if(r.b===0)q=r.f-r.e<95.9
else q=!1
else q=!0
if(q){q=r.a
q=!t.h(0,q).b&&!t.h(0,q).a}else q=!1
w.push(q)}return l.$1(w)?"":" Nothing needs cutting right now."
case"screw":w=C.a([],x.u)
for(v=$.k2(),u=v.length,t=m.b,s=0;s<v.length;v.length===u||(0,C.J)(v),++s){q=v[s].a
w.push(t.h(0,q).a&&!t.h(0,q).c)}return l.$1(w)?"":" Hang a sheet first: the screws go into a sheet that is up."
case"saw":w=C.a([],x.u)
for(v=$.xl(),u=v.length,t=m.b,s=0;s<v.length;v.length===u||(0,C.J)(v),++s){o=v[s]
q=o.b
w.push(t.h(0,q).a&&!t.h(0,q).d.q(0,o.a))}return l.$1(w)?"":" Hang the sheets over the boxes, the door and the window first: the holes are cut in a sheet that is up."
case"bead":w=C.a([],x.u)
for(v=m.d,n=0;n<2;++n)w.push(!v.q(0,n)&&m.aJg(n))
return l.$1(w)?"":" Cut the door and window openings with the Saw first."
case"mud":w=C.a([],x.u)
for(v=m.c,r=0;r<5;++r){if(!(v[r].a===0&&m.azr(r)==null)){u=v[r]
t=u.a
u=(t===2||t===3)&&e>=u.b}else u=!0
w.push(u)}return l.$1(w)?"":" Nothing is ready for mud yet: on a wall or the ceiling every sheet needs to be up and screwed, the holes cut and the door and window beaded. After a coat, wait for it to dry."
case"tape":w=C.a([],x.u)
for(v=m.c,u=v.length,s=0;s<v.length;v.length===u||(0,C.J)(v),++s)w.push(v[s].a===1)
return l.$1(w)?"":" Tape goes into wet mud: put mud on a surface first."
case"sand":w=C.a([],x.u)
for(v=m.c,r=0;r<5;++r){u=v[r]
w.push(u.a===4&&e>=u.b)}return l.$1(w)?"":" Sand only after the third coat has dried."
default:w=C.a([],x.u)
for(v=m.c,u=v.length,s=0;s<v.length;v.length===u||(0,C.J)(v),++s)w.push(v[s].a===5)
return l.$1(w)?"":" Prime after the mud is sanded."}},
gaI3(){var w,v,u,t=this,s=C.U(x.N,x.y)
s.n(0,"ceiling",t.gbdO())
w=t.ganx()
v=$.k2()
s.n(0,"walls",w===v.length)
s.n(0,"screws",t.gaqJ()===v.length)
s.n(0,"holes",t.gaFY()===$.xl().length)
s.n(0,"beads",t.d.a===2)
for(w=t.c,u=0;u<5;++u)s.n(0,"surface"+u,w[u].a===6)
return s},
cTK(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j
for(w=[!0,!1],v=w.length,u=this.b,t=0;t<v;++t){s=w[t]
for(r=D.d.gag($.k2()),q=new C.eJ(r,new A.bO7(s));q.C();){p=r.gR(0)
o=p.a
if(u.h(0,o).a)continue
if(!(p.d-p.c<47.9))if(p.b===0){w=p.f
p=p.e
w=w-p<95.9}else w=!1
else w=!0
if(w&&!u.h(0,o).b)return new A.lz("This piece is narrower than a sheet: pick the Cutter and tap the lit place to cut it to size.",C.a([o],x.t),"cut")
w=s?"The ceiling goes first: pick Drywall sheet and tap the lit place.":"Now the walls: pick Drywall sheet and tap the lit place."
return new A.lz(w,C.a([o],x.t),"sheet")}}for(w=$.k2(),v=w.length,t=0;t<w.length;w.length===v||(0,C.J)(w),++t){r=w[t].a
if(!u.h(0,r).c)return new A.lz("Screw the sheet to the studs: pick the Screw gun and tap the lit sheet.",C.a([r],x.t),"screw")}for(w=$.xl(),v=w.length,t=0;t<w.length;w.length===v||(0,C.J)(w),++t){n=w[t]
r=n.a
if(!u.h(0,n.b).d.q(0,r))return new A.lz("Cut the hole for the "+n.c.toLowerCase()+": pick the Saw and tap the lit place.",C.a([r],x.t),"saw")}for(w=this.d,m=0;m<2;++m)if(!w.q(0,m))return new A.lz("Put corner bead on the "+B.zK[m].a+": pick Corner bead and tap the lit opening.",C.a([6500+m],x.t),"bead")
for(w=this.c,l=0;l<5;++l){k=w[l]
j=6700+l
switch(k.a){case 0:return new A.lz("Mud first: pick Mud and tap the lit surface for the bed coat.",C.a([j],x.t),"mud")
case 1:return new A.lz("Press the tape into the wet mud now: pick Tape and tap the lit surface.",C.a([j],x.t),"tape")
case 2:case 3:w=k.b
v=x.t
return e>=w?new A.lz("Next coat of mud: pick Mud and tap the lit surface.",C.a([j],v),"mud"):new A.lz("The mud is still wet: wait "+D.k.cL(w-e)+" seconds, then put on the next coat.",C.a([j],v),"")
case 4:w=k.b
v=x.t
return e>=w?new A.lz("Sand it smooth: pick the Sander and tap the lit surface.",C.a([j],v),"sand"):new A.lz("The last coat is still wet: wait "+D.k.cL(w-e)+" seconds, then sand.",C.a([j],v),"")
case 5:return new A.lz("Prime it: pick the Roller and tap the lit surface.",C.a([j],x.t),"paint")}}return B.hpb},
gBU(d){return D.d.cM(this.c,new A.bO5())},
ganx(){var w=this.b,v=C.a4(w).k("b8<2>")
return new C.X(new C.b8(w,v),new A.bO8(),v.k("X<M.E>")).gI(0)},
gaqJ(){var w=this.b,v=C.a4(w).k("b8<2>")
return new C.X(new C.b8(w,v),new A.bOb(),v.k("X<M.E>")).gI(0)},
gaFY(){var w=this.b
return new C.b8(w,C.a4(w).k("b8<2>")).cG(0,0,new A.bO6())}}
A.aqu.prototype={
S(){var w=A.hL9(),v=new C.vj()
$.vM()
v.fX(0)
return new A.aqv(w,v,C.aS(x.S),C.aS(x.N))}}
A.aqv.prototype={
geZ(){var w,v=this.e
if(v===$){w=new A.uE(0,0.07,120,B.AR,$.aw())
w.e=12
w.f=520
w.at=0
w.ax=1.3
w.r=B.Ek
w.pg(!0)
this.e!==$&&C.bE()
this.e=w
v=w}return v},
glb(){var w=this.as
return w===$?this.as=A.hy2(this.d,0,"look"):w},
Z(){var w=this
w.a3()
$.aV.x1$.push(new A.ce3(w))
w.ax=C.de(D.iJ,new A.ce4(w))},
t(){var w=this,v=w.at
if(v!=null)v.a1(0)
v=w.ax
if(v!=null)v.a1(0)
v=w.dx
if(v!=null)v.a1(0)
w.a2()},
a_r(){var w=this,v=w.f
return w.as=A.hy2(w.d,w.Q.gf_()/1000,v)},
ayM(d,e){var w=this,v=w.at
if(v!=null)v.a1(0)
w.m(new A.cdS(w,d,e))
w.at=C.cB(D.bK,new A.cdT(w))},
AV(d){return this.ayM(d,!0)},
Hw(d){var w,v=this
v.m(new A.ce5(v,d))
w=B.aIg.h(0,d)
w.toString
v.AV(w+(d==="look"?"":v.d.bm2(d,v.Q.gf_()/1000)))},
cbx(d,e){var w=this,v=w.geZ(),u=A.hyI(v,d,e)
if(u==null){w.ayM(y.c,!1)
return}if(w.y){w.y=!1
v.r=B.Ek
v.f=520}w.m(new A.cdG(w,u))
v.a8_(Math.min(v.c,70),0.07,u)
w.AV(y.L)},
cbB(d){var w=this,v=w.dx
if(v!=null)v.a1(0)
w.m(new A.cdJ(w,d))
w.dx=C.cB(D.eh,new A.cdK(w))},
cbu(){var w,v,u,t,s=this
for(w=s.d.gaI3(),w=new C.cs(w,C.a4(w).k("cs<1,2>")).gag(0),v=s.fy,u=0;w.C();){t=w.d
if(!t.b||v.q(0,t.a))continue
v.J(0,t.a)
if(s.fr===0)++u
s.fr=0}if(u>0){s.dy+=u
A.Te(u)
return"  \u2b50 +"+u+" for a job finished without a hint."}return""},
cbA(){var w,v=this,u=v.d.cTK(0,v.Q.gf_()/1000);++v.fx;++v.fr
v.dy-=2
A.akk(2)
w=u.b
if(w.length!==0)v.cbB(w)
v.AV("Hint (\u22122 \u2b50): "+u.a)},
cby(d,e){var w=this
w.m(new A.cdH(w,e,d))
w.AV("You picked up the "+B.DD.h(0,d).a.toLowerCase()+". "+C.w(B.aIg.h(0,e))+w.d.bm2(e,w.Q.gf_()/1000))},
cbD(d){var w,v,u,t,s,r,q,p=this,o={},n=d===0
if(!n){w=d===p.cx&&p.Q.gf_()/1000-p.cy<0.45
p.cx=d
p.cy=p.Q.gf_()/1000
v=w}else v=!1
if(v)return
u=B.aI5.h(0,d)
if(u!=null){p.cby(d,u)
return}if(n){p.m(new A.cdL(p))
return}n=p.f
if(n==="look"){t=p.glb().b.h(0,d)
if(t!=null){p.m(new A.cdM(p,d))
p.geZ().D8(t.c)
p.AV(t.a+": "+t.b)}return}s=new A.cdP()
o.a=null
r=d>=6700&&d<6705
switch(n){case"sheet":n=o.a=p.d.cTo(d)
break
case"cut":n=o.a=p.d.cPq(d)
break
case"screw":n=o.a=p.d.bpP(d)
break
case"saw":n=o.a=p.d.bpI(d)
break
case"bead":n=o.a=p.d.cKH(d-6500)
break
case"mud":n=o.a=r?p.d.cW9(s.$1(d),p.Q.gf_()/1000):p.akO()
break
case"tape":n=o.a=r?p.d.d0q(s.$1(d),p.Q.gf_()/1000):p.akO()
break
case"sand":n=o.a=r?p.d.bpz(s.$1(d),p.Q.gf_()/1000):p.akO()
break
default:n=o.a=r?p.d.fU(s.$1(d)):p.akO()}if(n.a)A.pN()
else A.fD(180,220,0.25,"square")
p.m(new A.cdN(o,p,d))
q=o.a.a?p.cbu():""
n=o.a
p.ayM(n.b+q,n.a)
if(p.d.gBU(0)&&!p.z){p.z=!0
$.aV.x1$.push(new A.cdO(p))}},
akO(){++this.d.e
return B.bIZ},
cbv(){var w=null,v=this.c
if(v==null)return
C.cf(w,w,!0,w,new A.cdF(this),v,w,!0,!0,x.H)},
cbI(){var w,v=this
v.m(new A.cdU(v))
if(v.y){w=v.geZ()
w.r=null
w.f=620
w.fW(330,0.85,B.EN,0.5)
v.AV(y.i)}else{w=v.geZ()
w.r=B.Ek
w.f=520
w.fW(120,0.07,B.AR,0)
v.AV("Back inside the room. Drag to turn round.")}},
cbG(){this.m(new A.cdQ(this))
this.AV("The drywall is taken down again. Start with the ceiling.")},
B(d){var w,v,u,t,s=this,r=null,q=s.d,p=q.c,o=new C.X(p,new A.cdV(),C.T(p).k("X<1>")).gI(0),n=D.d.cM(q.ar5(0),new A.cdW(s)),m=q.ganx(),l=$.k2(),k=l.length,j=q.gaqJ(),i=l.length,h=q.gaFY(),g=$.xl(),f=C.a([!0,n,m===k,j===i,h===g.length,q.d.a===2,D.d.cM(p,new A.cdX()),D.d.cM(p,new A.cdY()),q.gBU(0)],x.u),e=D.d.bj(f,new A.cdZ())
p=e<0?"All done":"Step "+(e+1)+"/9"
n=s.glb()
m=s.geZ()
k=s.r
j=s.w
i=s.x
h=k!==0?s.glb().b.h(0,s.r):r
w=s.y
v=w?"Inside":"Whole room"
u=w?D.Pr:D.PE
t=x.p
w=A.Kh(!1,r,m,new A.ce_(s),r,i,k,h,r,r,j,54,s.gcbw(),new A.ce0(s),s.gcbC(),n,!1,new A.ce1(s),r,C.a([A.uo(v,D.az,u,w,s.gcbH()),D.P],t))
u=s.f
v=D.c.j(0.07)
n=C.n(13)
return A.II(D.aJ,new A.ce2(d,f),C.x(C.a([A.if2(B.d0U,u,s.gbr9(),C.a([C.aA(r,C.p(r,B.f7r,D.f,r,r,new C.o(v,r,C.L(D.aW,D.r,1),n,r,r,D.n),r,r,r,r,D.k0,r,r,r),D.y,!1,B.hob,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,s.gcbz(),r,r,r,r,r,r,!1,D.a4)],t)),D.P,C.A(C.a([C.E(C.d("Sheets "+q.ganx()+"/"+l.length+" \xb7 screwed "+q.gaqJ()+"/"+l.length+" \xb7 holes "+q.gaFY()+"/"+g.length+" \xb7 surfaces finished "+o+"/5",r,2,r,r,r,r,B.aUs,r,r,r),1),D.ae,A.qv("Start over",D.k5,s.gcbF(),D.ad)],t),D.m,r,D.e,D.i,0,r,r)],t),D.m,r,D.e,D.O,0,D.p),w,p,"Hanging drywall",r)}}
A.Xt.prototype={}
A.yq.prototype={
gcKz(){return this.d<=20&&this.e>=20},
grd(d){var w
switch(this.f){case"corner":w="Corner stud"
break
case"king":w="King stud"
break
case"jack":w="Jack stud"
break
case"cripple":w="Short (cripple) stud"
break
default:w="Stud"
break}return w}}
A.a5C.prototype={
fX(d){var w,v=this
if(v.c)return
v.c=!0
w=$.aV
w.toString
if(D.a.q(C.vG(C.b2(w).a,null),"Test"))v.d=C.de(v.b,new A.bTt(v))
else v.b0L()},
b0L(){$.eV.Hp(new A.bTs(this))},
bQ(d){var w
this.c=!1
w=this.d
if(w!=null)w.a1(0)
this.d=null}}
A.iz.prototype={
gjE(){return this.a}}
A.aW0.prototype={
gaHH(){var w,v,u,t,s
for(w=this.a,v=0,u=1;u<w.length;++u){t=w[u]
s=w[u-1]
v+=new A.r(t.a-s.a,t.b-s.b,t.c-s.c).gqg()}return v}}
A.w1.prototype={
gGI(){var w=this.x
return new C.X(w,new A.bQo(),C.T(w).k("X<1>")).gI(0)}}
A.Q2.prototype={}
A.lz.prototype={}
A.baa.prototype={
lD(d){var w,v,u,t
for(w=this.b,v=w.length,u=0;u<v;++u){t=w[u]
if(t.a===d)return t}return null},
WO(d,e){++this.d
return new A.iz(!1,d,e)},
j1(d){return this.WO(d,D.ef)},
UR(d,e){var w,v,u,t,s,r,q,p,o=this
if(d==="ceiling"){if(!(e>=3000&&e<3010))return o.j1(A.aiy(e)!=null?"A ceiling box hangs from a joist, the boards over your head. Tap one of those.":"A ceiling box goes on a joist: the boards across the top of the room.")
w=o.b
if(D.d.aX(w,new A.cF0()))return o.j1("This room has one light, and its box is already hung. Pull the cable to it.")
w.push(new A.w1(o.e++,"ceiling",-1,0,null,e-3000,C.a([!1,!1],x.u)))
return B.bJd}v=A.aiy(e)
if(v==null)return o.j1(e>=3000&&e<3010?"That is a ceiling joist. An outlet or switch box is nailed to a stud, a tall board in the wall.":"Tap a stud: one of the tall boards in the wall.")
w=v.f
if(w==="cripple")return o.j1("That short stud only holds up the wood over the door or window. Put the box on a full-height stud.")
u=o.b
if(D.d.aX(u,new A.cF1(v)))return o.j1("There is a box on this stud already.")
t=o.e++
s=v.b
r=v.c
q=new A.w1(t,d,s,r,v.a,null,C.a([!1,!1],x.u))
if(w==="king"||w==="jack"){p=s===2?B.a8f:B.TT
q.r=r<(p.c+p.d)/2?-1:1}u.push(q)
if(d==="switch")return new A.iz(!0,o.aZY(q)?"Switch box nailed on, 48 inches up and right beside the door, where a hand finds it in the dark. Next, break a knockout in it.":"Switch box nailed on, 48 inches up. A light switch belongs beside the door, on the side the door opens. Next, break a knockout.",D.ef)
return B.bJ4},
aZY(d){var w
if(d.c===2){w=d.d
if(!(w>=13.5&&w<=31.5))w=w>=67.5&&w<=85.5
else w=!0}else w=!1
return w},
Gx(d){var w,v,u,t=this,s="Tap one of the little round tabs on a box to break it out."
if(!(d>=4200&&d<4400))return t.j1(s)
w=d-4200
v=t.lD(4000+D.o.aq(w,2))
if(v==null)return t.j1(s)
u=D.o.E(w,2)
w=v.x
if(w[u])return t.j1("That knockout is out already.")
w[u]=!0
return B.bJf},
atn(d){var w,v,u,t=C.a([],x.t)
for(w=d.x,v=4200+(d.a-4000)*2,u=0;u<2;++u)if(!w[u])t.push(v+u)
return t},
bg0(d){var w,v,u,t=this
if(A.hff(d)!=null){w=t.a
if(w.q(0,d))return t.j1("The top plate has its hole here already.")
w.J(0,d)
return B.bJ2}v=A.aiy(d)
if(v==null){if(d===2200)return t.j1("The panel is where the cable starts. You do not drill it.")
if(d>=4000&&d<4100)return t.j1("Drill the studs, the tall boards. The boxes are for the cable to end in.")
return t.j1("Drill through a stud (a tall board), or the top plate over a switch. Not through this.")}w=t.a
u=v.a
if(w.q(0,u))return t.j1("This stud has its hole already.")
if(!v.gcKz())return t.j1("There is no wood at the cable line here: this short stud only sits over the door or window. Drill a stud that reaches the line (20 inches up).")
w.J(0,u)
return B.bJ9},
alA(d){var w=d.w!=null?1:0,v=this.b
return w+new C.X(v,new A.cEO(d),C.T(v).k("X<1>")).gI(0)},
a6E(d){var w,v,u,t
for(w=d,v=0;v<30;++v,w=t){if(w.w==null)return!1
u=w.y
if(u===0)return!0
t=this.lD(u)
if(t==null)return!1}return!1},
baI(d){var w,v,u,t,s
d.w=null
w=d.y=0
for(v=this.b,u=v.length,t=d.a;w<v.length;v.length===u||(0,C.J)(v),++w){s=v[w]
if(s.w!=null&&s.y===t)this.baI(s)}},
b69(d,e,f,g){var w,v,u,t,s,r,q,p,o=new A.cEN(f,d),n=o.$1(e),m=C.a([],x.Y)
for(w=$.z9(),v=w.length,u=n-0.000001,t=0;t<w.length;w.length===v||(0,C.J)(w),++t){s=w[t]
r=!1
if(s.d<=20&&s.e>=20){q=s.b
p=s.c
if(o.$1(B.zD[q]+p)>0.000001)r=o.$1(B.zD[q]+p)<u||s.a===g}if(r)m.push(s)}D.d.aZ(m,new A.cEM(o))
return m},
aSF(d,e,f){var w=new A.cEI(f,d),v=w.$1(e)
return v>w.$1(f>0?295.5:331.5)+0.01},
bke(a7,a8,a9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6=this
if(a8===2200)return B.bJ_
w=a6.lD(a8)
if(w==null)return a6.j1("Tap one of the blue boxes: the cable runs to it.")
if(w.w!=null){a6.baI(w)
return B.bJ7}v=a9===0
u=v?null:a6.lD(a9)
if(!v){if(u==null||u.w==null||!a6.a6E(u))return a6.j1("A cable can only start at the breaker panel, or at a box that already has power.")
if(u.b==="ceiling")return a6.j1("The light box is the end of the line: a cable cannot go on from it.")
if(u.gGI()<a6.alA(u)+1)return a6.WO("The box the cable leaves from has no free knockout: a second cable needs a second hole. Break out its other knockout first.",a6.atn(u))}if(w.gGI()<a6.alA(w)+1)return a6.WO("The cable has to go into the box through a knockout, and this box has none open for it. Break one out first (the Knockout tool).",a6.atn(w))
v=w.b
if(v==="ceiling")return a6.cqb(w,u)
t=u==null
if(t)s=24
else{r=u.c
q=u.d
s=B.zD[r]+q}r=w.c
q=w.d
p=B.zD[r]+q
o=x.t
n=C.a([],o)
for(m=0;m<2;++m){l=B.awG[m]
if(!a6.aSF(s,p,l))n.push(l)}if(n.length===0)return a6.j1("A doorway is in the way both ways round: there is no wood to run a cable through across it.")
D.d.aZ(n,new A.cF2(new A.cF3(p,s)))
k=D.d.gH(n)
n=w.e
n.toString
j=A.aiy(n)
n=j.f
if(!(n==="king"||n==="jack"))w.r=-k
i=a6.b69(s,p,k,w.r!==-k?j.a:null)
h=!t&&u.r!==k
if(t)g=null
else{n=u.e
n.toString
g=A.aiy(n)}if(h&&g!=null)D.d.c4(i,0,g)
n=C.a([],x.Y)
for(f=i.length,e=a6.a,m=0;m<i.length;i.length===f||(0,C.J)(i),++m){d=i[m]
if(!e.q(0,d.a))n.push(d)}f=n.length
if(f!==0){v=f===1
t=v?"has":"have"
v=v?"the lit one":"the lit ones"
o=C.a([],o)
for(r=C.cW(n,0,C.dz(40,"count",x.S),x.c0),q=r.$ti,r=new C.bO(r,r.gI(0),q.k("bO<ak.E>")),q=q.k("ak.E");r.C();){n=r.d
o.push((n==null?q.a(n):n).a)}return a6.WO("The cable has to go through every stud on its way, and "+f+" still "+t+" no hole. Drill "+v+" first.",o)}a0=C.a([],x.o)
if(t){a0.push(A.eZ(0,24,47,1.75))
a0.push(A.eZ(0,24,20,1.75))
a1=0}else{a2=u.d+u.r*1.9
a1=u.c
a0.push(A.eZ(a1,a2,u.b==="switch"?48:16,2.4))
a0.push(A.eZ(a1,a2,20,1.75))}for(o=i.length,n=k>0,m=0;m<i.length;i.length===o||(0,C.J)(i),++m){d=i[m]
a3=d.b
if(a3!==a1){f=n?a1:a3
e=A.eZ(f,(f&1)===0?144:120,20,0)
a4=B.uY[f]
f=B.uY[D.o.E(f+1,4)]
a0.push(new A.r(e.a+a4.a*1.75+f.a*1.75,e.b+a4.b*1.75+f.b*1.75,e.c+a4.c*1.75+f.c*1.75))
a1=a3}a0.push(A.eZ(a3,d.c,20,1.75))}if(r!==a1)a0.push(A.ie4(n?a1:r,20))
a5=q+w.r*1.9
a0.push(A.eZ(r,a5,20,1.75))
v=v==="switch"
a0.push(A.eZ(r,a5,v?48:16,2.4))
r=new A.aW0(a0,!1)
w.w=r
w.y=a9
r=r.gaHH()
v=v?"Switch":"Outlet"
t=t?"the panel":"the "+u.b+" box"
q=i.length
o=q===1?"stud":"studs"
return new A.iz(!0,v+" box connected: the cable runs from "+t+" through "+q+" "+o+", "+D.k.ad(r/12,1)+" feet in all. Leave a loose end in the box to wire the device to.",D.ef)},
bkd(d,e){return this.bke(0,e,0)},
cqb(d,e){var w,v,u,t,s,r,q,p,o,n,m=this,l=e==null
if(!l&&e.b!=="switch")return m.j1("The light is fed from a switch: the power goes to the switch first, then up to the light. Start the cable at a switch box.")
w=C.a([],x.k)
for(v=m.b,u=v.length,t=0;t<v.length;v.length===u||(0,C.J)(v),++t){s=v[t]
if(s.b==="switch"&&s.w!=null&&m.a6E(s)&&s.gGI()>=m.alA(s)+1)w.push(s)}if(l)s=w.length===0?null:D.d.gH(w)
else s=e
if(s==null)return m.j1(D.d.aX(v,new A.cEL())?"The switch box has no free knockout for the cable that goes up to the light. Break out its other knockout first.":"The light is fed from the switch: the power goes to the switch first. Pull the cable to a switch box before this one.")
l=s.c
w=(l&1)===0
v=D.k.cL((w?144:120)/16)
u=s.d
r=Math.min(v-1,D.k.bh(u/16))
q=2100+l*20+r
if(!m.a.q(0,q))return m.WO("The cable goes up inside the wall, through the top plate and into the ceiling. Drill the top plate right over the switch first.",C.a([q],x.t))
p=u+s.r*1.9
w=w?144:120
o=Math.min(w,r*16+8)
w=d.f
w.toString
n=-70+w*15.555555555555555+0.75+2.3
l=new A.aW0(C.a([A.eZ(l,p,50.5,1.75),A.eZ(l,p,88,1.75),A.eZ(l,o,92,1.75),A.eZ(l,o,101.95,1.75),new A.r(n,101.95,0),new A.r(n,99,0)],x.o),!0)
d.w=l
d.y=s.a
return new A.iz(!0,"Light connected: the cable goes up from the switch, through the top plate, and lies across the joists to the ceiling box, "+D.k.ad(l.gaHH()/12,1)+" feet.",D.ef)},
anG(d,e){var w,v,u,t=this,s=t.lD(d)
if(s==null)return t.j1("Tap one of the blue boxes: the device goes in it.")
if(s.w==null)return t.j1("Pull the cable to this box first: the device is wired to the cable.")
w=s.b
v=w==="ceiling"
if(v)u=e==="light"||e==="fan"
else u=w==="switch"?D.d.q(B.iP,e):D.d.q(B.k7,e)
if(!u){if(v)w="A ceiling box takes a light or a fan."
else w=w==="switch"?"This is a switch box (48 inches up): it takes a switch.":"This is an outlet box (16 inches up): it takes an outlet."
return t.j1(w)}w=s.z
if(w!=null&&w!==e){v=s.Q
if(v!=null)v=v.c>0||v.b.a!==0
else v=!1
if(v)return t.j1("There is a "+A.x6(w).toLowerCase()+" wired in this box already. Pick that one to carry on with it.")}if(w!==e){s.z=e
w=new A.AG(C.U(x.S,x.N))
w.a=t.f
s.Q=w
s.as=!1}return new A.iz(!0,"Close-up: "+A.x6(e)+". Connect each wire to its screw.",D.ef)},
ayN(){var w,v,u,t
for(w=this.b,v=w.length,u=0;u<v;++u){t=w[u].Q
if(t!=null)t.a=this.f}},
TD(d){var w
if(d.z!=null){w=d.Q
w=w!=null&&w.c>=2&&!w.x}else w=!1
return w},
aKM(d){var w,v=d.z
if(v==null||d.Q==null)v=null
else{v=A.oi(v)
w=d.Q
w.toString
w=A.x7(v,w)
v=w}return v},
tK(d){var w
if(this.TD(d)){w=this.aKM(d)
w=w==null?null:w.c
w=w===!0}else w=!1
return w},
a79(d){var w,v=this
if(!v.f||!v.a6E(d)||!v.tK(d))return!1
if(d.b==="ceiling"){w=v.lD(d.y)
return w!=null&&w.b==="switch"&&v.tK(w)&&w.as}return!0},
a7k(){var w,v,u,t,s,r,q,p,o,n,m=this
if(m.r){m.f=m.r=!1
m.ayN()
return B.bJ6}m.f=!m.f
m.ayN()
if(!m.f)return B.bJ0
for(w=m.b,v=w.length,u=0,t=0;t<w.length;w.length===v||(0,C.J)(w),++t){s=w[t]
r=s.z
q=r!=null
if(q){p=s.Q
p=p!=null&&p.c>=2&&!p.x}else p=!1
if(!p)continue;++u
if(!q||s.Q==null)o=null
else{r=A.oi(r)
q=s.Q
q.toString
o=A.x7(r,q)}if(o.d||o.e){m.r=!0
m.f=!1;++m.d
m.ayN()
return new A.iz(!1,"The breaker TRIPPED. "+o.b+" Flip it fully off, fix the wiring in that box and try again.",D.ef)}}if(u===0)return B.bJb
v=C.T(w).k("X<1>")
n=C.C(new C.X(w,new A.cF7(m),v),v.k("M.E"))
if(n.length!==0)return new A.iz(!1,"Breaker ON. It works, but a device is not wired safely: "+m.aKM(D.d.gH(n)).b,D.ef)
return new A.iz(!0,"Breaker ON. Every finished device works. Flip the switch to turn the light on, and plug something in.",D.ef)},
cRP(d){var w,v,u,t,s,r,q=this,p=q.lD(d)
if(p==null||p.b!=="switch")return q.j1("Tap a switch to flip it.")
if(!q.TD(p))return q.j1("Wire the switch and put its plate on first.")
if(!q.f)return B.bJ1
p.as=!p.as
w=C.a([],x.k)
for(v=q.b,u=v.length,t=p.a,s=0;s<v.length;v.length===u||(0,C.J)(v),++s){r=v[s]
if(r.b==="ceiling"&&r.y===t)w.push(r)}if(p.as)if(D.d.aX(w,q.gd0g()))w="Switch ON: the light is on."
else{v="Switch ON."+(w.length===0?"":" The light does not come on: check its wiring.")
w=v}else w="Switch OFF."
return new A.iz(!0,w,D.ef)},
aoM(d,e){var w,v=this,u=v.lD(d),t=!0
if(u!=null)if(u.b==="outlet"){t=u.z
t=t==null||!D.d.q(B.k7,t)}if(t)return v.j1("Plug it into a finished outlet: tap an outlet on the wall.")
if(!v.TD(u))return v.j1("Wire the outlet and put its plate on first.")
w=B.aIC.h(0,e)
if(w!=null&&!w.q(0,u.z))return v.j1("The plug does not fit. That machine has a big plug made for its own outlet.")
t=v.c
if(t.h(0,d)===e){t.W(0,d)
return B.bJ3}t.n(0,d,e)
if(!v.f)return B.bJ5
if(!v.a79(u))return v.j1("Plugged in, but nothing happens: the outlet is not working. Check how it is wired.")
return B.bJa},
gaKd(){var w,v,u=C.a([],x.eo)
for(w=this.b,v=0;v<4;++v)u.push(new A.Q2(D.d.aX(w,new A.cF4(v))))
u.push(new A.Q2(D.d.aX(w,new A.cF5(this))))
u.push(new A.Q2(D.d.aX(w,new A.cF6())))
return u},
gBU(d){return D.d.cM(this.gaKd(),new A.cEP())},
gbh4(){var w=this
return w.gBU(0)&&D.d.cM(w.b,w.gaL5())&&w.f},
gbgi(){return D.d.cG(this.b,0,new A.cER())/12},
Tu(d,e){var w=this.b
return new C.X(w,new A.cEQ(e),C.T(w).k("X<1>")).gI(0)},
gaI3(){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.gaKd(),l=C.U(x.N,x.y)
for(w=0;w<m.length;++w)l.n(0,"task"+w,m[w].b)
for(v=o.b,u=v.length,t=0;s=v.length,t<s;v.length===u||(0,C.J)(v),++t){r=v[t]
s=r.z
q=s!=null
if(q){p=r.Q
p=p!=null&&p.c>=2&&!p.x}else p=!1
if(p){if(!q||r.Q==null)s=n
else{s=A.oi(s)
q=r.Q
q.toString
q=A.x7(s,q)
s=q}s=s==null?n:s.c
s=s===!0}else s=!1
if(s){s=r.z
if(s==null||r.Q==null)s=n
else{s=A.oi(s)
q=r.Q
q.toString
q=A.x7(s,q)
s=q}s=s==null?n:s.a==="ok"
s=s===!0}else s=!1
l.n(0,"dev"+r.a,s)}l.n(0,"power",o.f&&s!==0&&D.d.cM(v,o.gaL5()))
return l},
c6H(d){var w,v,u,t,s,r,q,p,o,n=B.zD[d.c]+d.d,m=C.a([],x.t)
for(w=0;w<2;++w){v=B.awG[w]
if(!this.aSF(24,n,v))m.push(v)}if(m.length===0)return B.dkF
D.d.aZ(m,new A.cEJ(new A.cEK(n,24)))
u=D.d.gH(m)
m=d.e
m.toString
t=A.aiy(m)
m=t.f
s=m==="king"||m==="jack"?d.r:-u
r=this.b69(24,n,u,s!==-u?t.a:null)
m=C.a([],x.Y)
for(q=r.length,p=this.a,w=0;w<r.length;r.length===q||(0,C.J)(r),++w){o=r[w]
if(!p.q(0,o.a))m.push(o)}return m},
cTJ(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=new A.cEX(h)
for(w=h.b,v=0;v<4;++v)if(!D.d.aX(w,new A.cES(v))){u=g.$2(v,v===2?112:80)
return new A.lz("Put an outlet box on "+B.dkf[v]+": open Boxes, pick Outlet box, and tap the lit stud.",C.a([u.a],x.t),"outlet")}if(!D.d.aX(w,new A.cET()))return new A.lz("Put a switch box beside the door: open Boxes, pick Switch box, and tap the lit stud next to the door.",C.a([g.$2(2,80).a],x.t),"switch")
if(!D.d.aX(w,new A.cEU()))return B.hpc
for(t=w.length,s=0;r=w.length,s<r;w.length===t||(0,C.J)(w),++s){q=w[s]
if(q.w==null&&q.gGI()===0){w=q.b==="switch"?0:1
return new A.lz("Break a knockout in the lit box: pick Knockout and tap the round tab. The view zooms in to the box.",C.a([4200+(q.a-4000)*2+w],x.t),"knock")}}for(t=C.T(w).k("X<1>"),s=0;p=w.length,s<p;w.length===r||(0,C.J)(w),++s){q=w[s]
if(q.w!=null)continue
if(q.b==="ceiling"){u=C.nv(new C.X(w,new A.cEV(),t))
if(u==null)continue
if(u.gGI()<h.alA(u)+1){w=h.atn(u)
t=C.T(w)
r=new C.is(w,0,1,t.k("is<1>"))
r.n4(w,0,1,t.c)
return new A.lz("The cable up to the light leaves the switch box through a second knockout: pick Knockout and tap the lit tab.",r.dm(0),"knock")}w=u.c
o=2100+w*20+Math.min(D.k.cL(((w&1)===0?144:120)/16)-1,D.k.bh(u.d/16))
if(!h.a.q(0,o))return new A.lz("The light is fed from the switch: drill the lit piece of top plate, right over the switch.",C.a([o],x.t),"drill")
return new A.lz("Pull the cable up to the light: pick Cable roll and tap the lit ceiling box.",C.a([q.a],x.t),"cable")}n=h.c6H(q)
if(n.length!==0){w=C.a([],x.t)
t=C.T(n)
r=t.k("is<1>")
p=new C.is(n,0,40,r)
p.n4(n,0,40,t.c)
p=new C.bO(p,p.gI(0),r.k("bO<ak.E>"))
r=r.k("ak.E")
while(p.C()){t=p.d
w.push((t==null?r.a(t):t).a)}return new A.lz("The cable needs a hole in every stud on its way: pick Drill and tap the lit studs (or press Drill the lit).",w,"drill")}return new A.lz("Pull the cable: pick Cable roll and tap the lit box. It unrolls from the panel.",C.a([q.a],x.t),"cable")}for(s=0;s<w.length;w.length===p||(0,C.J)(w),++s){q=w[s]
if(q.w!=null){r=q.z
m=r!=null
if(m){l=q.Q
l=l!=null&&l.c>=2&&!l.x}else l=!1
if(l){if(!m||q.Q==null)r=null
else{r=A.oi(r)
m=q.Q
m.toString
m=A.x7(r,m)
r=m}r=r==null?null:r.c
r=r===!0}else r=!1
r=!r}else r=!1
if(r){w=q.b
if(w==="ceiling")k="Lights"
else k=w==="switch"?"Switches":"Outlets"
j=q.z!=null
w=j?"Carry on wiring the device in the lit box: pick it again and tap the box. Ground goes to the green screw, white to silver, black to brass; then push it in and put the plate on.":"Wire a device in the lit box: open "+k+", pick one and tap the box. In the close-up, ground goes to the green screw, white to silver, black to brass."
t=C.a([q.a],x.t)
return new A.lz(w,t,j?"dev:"+C.w(q.z):"")}}if(!h.f)return B.hpd
i=C.nv(new C.X(w,new A.cEW(),t))
if(i!=null)return new A.lz("Flip the switch to light the ceiling: pick Look and tap the switch.",C.a([i.a],x.t),"")
return B.hpa}}
A.D_.prototype={}
A.Qe.prototype={}
A.atx.prototype={
S(){var w,v=A.hrr(),u=new C.vj()
$.vM()
u.fX(0)
w=x.S
return new A.aty(v,u,C.U(w,x.i),C.aS(w),C.aS(x.N))}}
A.aty.prototype={
geZ(){var w,v=this.e
if(v===$){w=new A.uE(0,0.07,120,B.AR,$.aw())
w.e=8
w.f=520
w.at=-0.9
w.ax=1.3
w.r=B.Ek
w.pg(!0)
this.e!==$&&C.bE()
this.e=w
v=w}return v},
glb(){var w=this.f
return w===$?this.f=A.hch(this.d,0,"look"):w},
Z(){this.a3()
$.aV.x1$.push(new A.cnx(this))},
t(){var w=this.dx
if(w!=null)w.a1(0)
w=this.dy
if(w!=null)w.a1(0)
this.a2()},
Qc(d,e){var w=this,v=w.dx
if(v!=null)v.a1(0)
w.m(new A.cn7(w,d,e))
w.dx=C.cB(D.cK,new A.cn8(w))},
w5(d){return this.Qc(d,!0)},
EF(){var w=this,v=w.r
return w.f=A.hch(w.d,w.x,v)},
aYM(d){var w=this,v=w.dy
if(v!=null)v.a1(0)
w.m(new A.cmW(w,d))
w.dy=C.cB(D.eh,new A.cmX(w))},
aXF(d){var w
if(D.a.a0(d,"dev:"))return A.x6(D.a.b2(d,4))+": tap a box that has its cable. The view closes in on it and you connect each wire to its screw."
if(D.a.a0(d,"app:")){w=A.fBC(D.a.b2(d,4))
w=w==null?null:w.b
return(w==null?"It":w)+": tap a finished outlet to plug it in (tap it again to unplug it). Turn the breaker on so it runs."}switch(d){case"look":w="Look: tap any piece to learn its name and what it does. Tap a finished switch to flip it. Drag to turn round."
break
case"outlet":w="Outlet box: tap a stud (a green mark shows where the box will sit, 16 inches up). Put one on each of the four walls."
break
case"switch":w="Switch box: tap a stud, ideally right beside the door. It sits 48 inches up."
break
case"ceiling":w="Ceiling box: tap a joist, one of the boards across the top. The light will hang from it."
break
case"knock":w="Knockout: tap the orange mark on a box to break out its round tab. The cable goes in through that hole."
break
case"drill":w="Drill: tap a yellow mark to drill a hole through that stud, 20 inches up. The cable can only pass through studs that have a hole."
break
default:w="Cable roll: tap a box and the cable unrolls from the panel to it. To go on from a box instead, tap a blue box that has power first, then the next box. Tap the panel to start from it again."
break}return w},
b__(d){var w=this
if(d==="cable"&&w.d.b.length===0)return" There is no box yet: put an outlet box on a stud first."
if(d==="knock"&&w.d.b.length===0)return" There is no box yet: put a box on a stud first."
if(D.a.a0(d,"dev:")&&!D.d.aX(w.d.b,new A.cmY()))return" No box has its cable yet: pull the cable to a box first."
if(D.a.a0(d,"app:")&&!D.d.aX(w.d.b,new A.cmZ(w)))return" No outlet is finished yet: wire an outlet in a box first."
return""},
bVU(d,e){var w=this
w.m(new A.cmU(w,e,d))
w.w5("You picked up the "+B.DD.h(0,d).a.toLowerCase()+". "+w.aXF(e)+w.b__(e))},
bVQ(d,e){var w=this,v=w.geZ(),u=A.hyI(v,d,e)
if(u==null){w.Qc(y.c,!1)
return}if(w.as){w.as=!1
v.r=B.Ek
v.f=520}w.m(new A.cmT(w,u))
v.a8_(Math.min(v.c,70),0.07,u)
w.w5(y.L)},
aE1(d){var w=A.ah5(d)
if(d.b==="ceiling")this.geZ().fW(24,-0.7,w,0.6)
else this.geZ().fW(20,0.05,w,B.csU[d.c])},
bQd(){var w,v,u,t,s=this,r=s.ch
r=C.C(r,C.a4(r).k("co.E"))
w=r.length
v=s.d
u=0
t=0
for(;t<r.length;r.length===w||(0,C.J)(r),++t)if(v.bg0(r[t]).a)++u
s.m(new A.cmQ(s))
r=u===1?"hole":"holes"
s.w5(""+u+" "+r+" drilled. Now tap the box with the Cable roll again.")
s.a9k()},
a9k(){var w,v,u,t,s=this
for(w=s.d.gaI3(),w=new C.cs(w,C.a4(w).k("cs<1,2>")).gag(0),v=s.go,u=0;w.C();){t=w.d
if(!t.b||v.q(0,t.a))continue
v.J(0,t.a)
if(s.fx===0)++u
s.fx=0}if(u>0){s.fr+=u
A.Te(u)
return"  \u2b50 +"+u+" for a job finished without a hint."}return""},
cbK(){var w,v,u,t=this,s=t.d,r=s.cTJ(0);++t.fy;++t.fx
t.fr-=2
A.akk(2)
w=r.b
if(w.length!==0)t.aYM(w)
v=w.length===0?null:D.d.gH(w)
w=v!=null
if(w&&v>=4000&&v<4100){u=s.lD(v)
if(u!=null&&r.c==="knock")t.aE1(u)}if(w&&v>=4200&&v<4400){u=s.lD(4000+D.o.aq(v-4200,2))
if(u!=null)t.aE1(u)}t.w5("Hint (\u22122 \u2b50): "+r.a)},
Hw(d){var w=this
w.m(new A.cny(w,d))
w.w5(w.aXF(d)+w.b__(d))},
cEV(){var w=this,v=w.d.a7k(),u=v.a
if(u)A.pN()
else A.fD(180,220,0.25,"square")
w.m(w.gb0O())
w.Qc(v.b+w.a9k(),u)},
af7(d){return this.chF(d)},
chF(d){var w=0,v=C.j(x.H),u,t=this,s,r,q
var $async$af7=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:q=d.Q
if(q!=null)q.a=t.d.f
q=t.c
q.toString
w=3
return C.b(C.a6(q,!1).cd(C.eb(new A.cn_(d),!1,null,x.H)),$async$af7)
case 3:if(t.c==null){w=1
break}t.m(t.gb0O())
s=t.a9k()
r=d.Q
if(r.c>=2){q=d.z
q.toString
q=A.x6(q)+" wired and finished."+s}else q="Not finished: the device is in the box but the job is not done. Pick it again and tap the box to carry on."+s
t.Qc(q,r.c>=2)
t.aQS()
case 1:return C.h(u,v)}})
return C.i($async$af7,v)},
aQS(){var w=this
if(w.d.gbh4()&&!w.at){w.at=!0
$.aV.x1$.push(new A.cmP(w))}},
cbM(d){var w,v,u,t,s,r,q,p,o,n=this,m={},l=d===0
if(!l){w=d===n.cy&&n.ax.gf_()/1000-n.db<0.45
n.cy=d
n.db=n.ax.gf_()/1000
v=w}else v=!1
if(v)return
u=B.aI5.h(0,d)
if(u!=null)v=u==="cable"||u==="drill"
else v=!1
if(v){n.bVU(d,u)
return}if(l){n.m(new A.cn0(n))
return}l=n.r
if(l==="look"){l=n.d
t=l.lD(d)
if(t!=null&&t.b==="switch"&&l.TD(t)){s=l.cRP(d)
n.m(new A.cn1(n,d))
n.Qc(s.b,s.a)
return}r=n.glb().b.h(0,d)
if(r!=null){n.m(new A.cn2(n,d))
n.geZ().D8(r.c)
n.w5(r.a+": "+r.b)}return}m.a=null
if(D.a.a0(l,"dev:")){v=n.d
s=m.a=v.anG(d,D.a.b2(l,4))
if(s.a){A.pN()
l=v.lD(d)
l.toString
n.m(new A.cn3(n,d))
n.w5(s.b)
n.af7(l)
return}l=s}else if(D.a.a0(l,"app:")){s=n.d.aoM(d,D.a.b2(l,4))
m.a=s
l=s}else A:{if("outlet"===l||"switch"===l||"ceiling"===l){s=n.d.UR(l,d)
m.a=s
l=s
break A}if("drill"===l){s=n.d.bg0(d)
m.a=s
l=s
break A}if("knock"===l){l=n.d
v=d>=4200
t=l.lD(v&&d<4400?4000+D.o.aq(d-4200,2):d)
q=t==null
if(!q)n.aE1(t)
if(v&&d<4400)s=l.Gx(d)
else s=new A.iz(!0,q?"Tap a box.":"Close up on the box: tap an orange mark to break out a knockout.",D.ef)
m.a=s
l=s
break A}if(d===2200){n.x=0
m.a=B.anp
l=B.anp}else{l=n.d
t=l.lD(d)
if(t!=null&&t.w!=null&&l.a6E(t)&&t.b!=="ceiling"&&n.x!==t.a){n.x=t.a
s=new A.iz(!0,"The cable will go on from this "+t.b+" box. Tap the next box it must reach. (Tap it again to pull its cable out.)",D.ef)
m.a=s
l=s}else{v=n.x
s=m.a=l.bke(0,d,v)
if(s.a){p=l.lD(d)
if((p==null?null:p.w)!=null)n.ay.n(0,d,n.ax.gf_()/1000)
if(v===d)n.x=0}l=s}}}if(l.a)A.pN()
else A.fD(180,220,0.25,"square")
n.m(new A.cn4(m,n,d))
o=m.a.a?n.a9k():""
l=m.a
n.Qc(l.b+o,l.a)
l=m.a.c
if(l.length!==0)n.aYM(l)
n.aQS()},
bT4(){var w=null,v=this.c
if(v==null)return
C.cf(w,w,!0,w,new A.cmS(this),v,w,!0,!0,x.H)},
cFs(){var w,v=this
v.m(new A.cn9(v))
if(v.as){w=v.geZ()
w.r=null
w.f=620
w.fW(330,0.85,B.EN,0.5)
v.w5(y.i)}else{w=v.geZ()
w.r=B.Ek
w.f=520
w.fW(120,0.07,B.AR,0)
v.w5("Back inside the room. Drag to turn round and see every wall.")}},
cbO(){this.m(new A.cn5(this))
this.w5("Everything is taken out again. Start with the boxes.")},
af6(d,e,f,g,h,i,j){var w,v,u=null,t=h?g.j(0.25):D.c.j(0.07),s=C.n(13),r=h?g:D.aW
r=C.L(r,D.r,h?2:1)
w=C.Y(f,h?g:D.ad,u,u,u,17)
v=x.p
w=C.a([w,D.e1,C.d(e,u,u,u,u,u,u,C.l(u,u,h?g:D.c,u,u,u,u,u,u,u,u,12,u,u,D.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],v)
if(j!=null)D.d.v(w,C.a([D.e1,C.d(j,u,u,u,u,u,u,C.l(u,u,h?g:D.aD,u,u,u,u,u,u,u,u,10.5,u,u,D.V,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],v))
return C.aA(u,C.p(u,C.A(w,D.m,u,D.e,D.O,0,u,u),D.f,u,u,new C.o(t,u,r,s,u,u,D.n),u,u,u,u,D.k0,u,u,u),D.y,!1,new C.bQ(d,x.W),u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,i,u,u,u,u,u,u,!1,D.a4)},
b0M(d,e,f,g,h,i){return this.af6(d,e,f,g,h,i,null)},
a_s(d,e,f,g,h){return this.af6(d,e,f,D.az,g,h,null)},
b0N(d,e,f,g,h,i){return this.af6(d,e,f,D.az,g,h,i)},
cFZ(){var w,v,u,t,s,r,q,p=this,o=null,n=p.w==null?o:D.d.fl($.h2U(),new A.cnd(p))
if(n!=null){w=C.a([p.b0M("menu-back","Back",D.k4,D.ad,!1,new A.cne(p))],x.p)
for(v=n.d,u=v.length,t=0;t<v.length;v.length===u||(0,C.J)(v),++t){s=v[t]
r=s.a
w.push(p.a_s("tool-"+r,s.b,s.c,p.r===r,new A.cnf(p,s)))}return C.bW(D.bG,w,D.br,o,6,6)}q=new A.cnm(p)
w=C.a([p.a_s("tool-look","Look",D.eW,p.r==="look",new A.cng(p))],x.p)
for(v=$.h2U(),v=C.cW(v,0,C.dz(1,"count",x.S),C.T(v).c),u=v.$ti,v=new C.bO(v,v.gI(0),u.k("bO<ak.E>")),u=u.k("ak.E");v.C();){r=v.d
if(r==null)r=u.a(r)
w.push(p.b0N("cat-"+r.a,r.b,r.c,q.$1(r),new A.cnh(p,r),"\u25b8"))}w.push(p.a_s("tool-knock","Knockout",D.ze,p.r==="knock",new A.cni(p)))
w.push(p.a_s("tool-drill","Drill",D.uE,p.r==="drill",new A.cnj(p)))
w.push(p.a_s("tool-cable","Cable roll",E.a29,p.r==="cable",new A.cnk(p)))
for(v=$.h2U(),v=C.cW(v,1,o,C.T(v).c),u=v.$ti,v=new C.bO(v,v.gI(0),u.k("bO<ak.E>")),u=u.k("ak.E");v.C();){r=v.d
if(r==null)r=u.a(r)
w.push(p.b0N("cat-"+r.a,r.b,r.c,q.$1(r),new A.cnl(p,r),"\u25b8"))}v=p.d
u=v.r
if(u)r="Breaker: TRIPPED"
else r=v.f?"Breaker: ON":"Breaker: OFF"
v=v.f
u=u?D.c0:D.b9
w.push(p.b0M("tool-breaker",r,B.bQC,u,v,p.gcEU()))
w.push(p.af6("tool-hint","Hint",D.mU,D.bs,!1,p.gcbJ(),"\u22122 \u2b50"))
return C.bW(D.bG,w,D.br,o,6,6)},
B(d){var w,v,u,t,s,r,q=this,p=null,o=q.d,n=o.gaKd(),m=o.b,l=new C.X(m,o.gaL5(),C.T(m).k("X<1>")).gI(0),k=o.Tu(0,"outlet"),j=o.Tu(0,"switch"),i=o.Tu(0,"ceiling"),h=D.d.aX(m,new A.cno()),g=o.a.a,f=o.gBU(0),e=m.length
e=e!==0&&l===e
w=C.a([!0,k>=1,j>=1,i>=1,h,g!==0,f,e,o.gbh4()],x.u)
v=D.d.bj(w,new A.cnp())
k=v<0?"All done":"Step "+(v+1)+"/9"
j=q.glb()
i=q.geZ()
h=q.y
g=q.z
f=q.Q
e=h!==0?q.glb().b.h(0,q.y):p
u=q.as
t=u?"Inside":"Whole room"
s=u?D.Pr:D.PE
r=x.p
u=A.Kh(!1,p,i,new A.cnq(q),new A.cnr(q),f,h,e,p,p,g,54,q.gbVP(),new A.cns(q),q.gcbL(),j,!1,new A.cnt(q),p,C.a([A.uo(t,D.az,s,u,q.gcFr()),D.P],r))
s=q.cFZ()
o=C.a([C.E(C.d(""+new C.X(n,new A.cnu(),C.T(n).k("X<1>")).gI(0)+"/"+n.length+" cables \xb7 outlets "+o.Tu(0,"outlet")+" \xb7 switch "+o.Tu(0,"switch")+" \xb7 light "+o.Tu(0,"ceiling")+" \xb7 devices "+l+"/"+m.length+" \xb7 "+D.k.ad(o.gbgi(),0)+" ft",p,2,p,p,p,p,B.aUs,p,p,p),1),D.ae],r)
m=q.ch
if(m.a!==0&&m.aX(0,new A.cnv()))D.d.v(o,C.a([A.qv("Drill the lit",D.uE,q.gbQc(),B.BQ),D.ae],r))
o.push(A.qv("Start over",D.k5,q.gcbN(),D.ad))
return A.II(D.az,new A.cnw(d,w),C.x(C.a([s,D.P,C.A(o,D.m,p,D.e,D.i,0,p,p)],r),D.m,p,D.e,D.O,0,D.p),u,k,"Wiring a house",p)}}
var z=a.updateTypes(["~()","~(eM)","m(m,fm)","P(w1)","P(nz)","P(mh)","P(a5H)","r(r)","P(iQ)","ai<ks>(H)","~(F)","P(lc)","P(Yu)","P(fm)","P(zp)","P(aap)","P(a4C)","P(MU)","r(H,H)","r(H,H,H)","F(mh,mh)","aB<~>()","P(ow)","P(Pk)","P(It)","P(r)","P(a4Q)","BH(Z)","~(q,av)","~(mh)","~(xv,av,H)","P(yq)","P(nS)","P(MG)","r(F)","m(nz)","P(zq)","P(Qe)","Ji(Z)","P(MQ)","m(iQ)","r(H,H[H])","P(wA)","P(rh)","P(aby)","OE(Z)","r(hj)","ai<fh>(H)","r(H)","P(Fy)","P(zk)","F(xz,xz)","P(Ax)","P(p4)","P(MH)","~(F,r,r)","~(F,r,u{r:H})","P(Mn)","F(yq,yq)","P(Q2)","P(wh)","r(F,F)","v(rY)","v(m,ai<rY>)","m(mh)","v(xz)","r(ai<r>,F)","Yj()","G2(m)","AG()","aB<N_?>()","WN(Z)","hj(F)","mh?(m)","Qc()","a7w(Z)","~(r,r{note:m?})","mh?(r,r)","P(r,r)","r?(r,r)","H(r)","ai<r>(r,r[F])","~(mh,H,H,H,H,H{note:m?})","~({done:P})","H(mh)","ai<ks>()","ai<ks>(ai<ks>)","H(ow)","~(r,r,r,H,H)","~(r,r,r,H,F)","~(r,r,r,r{poster:F})","~(~(eM),r,r)","~(r,r,H,H,u{joint:P})","F(Gn,Gn)","~(r,r,F{alongX:P})","~(ai<r>,u)","~(ai<r>)","zq()","~(F,r,u{h:H,w:H})","~(r,r,r,r,u,H)","~(F,ai<r>,u,H,m)","~(F,m,r,r,r,P)","P(XP)","~(ks,F)","P(xz)","ai<r>(ai<r>)","~(m,ai<r>{r:H})","~(m,r,r)","~(nz,r,m)","P(D_)","~(F,r,r,m,u)","P(F)","~(F,ai<r>)","F(F,mh)","F(lc)","~(F,r,r{col:u,round:P})","cH()","fh(r,r,r,r,F,H,H)","m(MU)","~(m,K3,m,m,m)","F(Ga,G2)","H(lK)","~(ai<r>{col:u})","a1L(Z)","nS()","F(Ax)","F(Ax,Ax)","~(r,r,r,r)","+(H,H,H,m,m)(Pk,F)","F(F,MH)","P(zp,H,H)","~(aF?)","Ga(m)","ow(H)","~(F,zp,u{padToo:P})","~(m)","~(F,Xt,H,H)","~(r,H,H,H,~(xv,av,H){px:H})","~(F{keepTour:P})","+(r,r)(F)","H(H,w1)","yq(F,H)","~(w1,u{r:H})","m(w1)","ai<+(r,r)>()","~(m,r,r,F)","wA(wA,wA)"])
A.c0J.prototype={
$1(d){var w=this.a
w=w===0?d:A.ti(d,w)
return w.a7(0,this.b)},
$S:z+7}
A.c0K.prototype={
$1(d){var w=this.a
return w===0?d:A.ti(d,w)},
$S:z+7}
A.c0I.prototype={
$4(b5,b6,b7,b8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=this
for(w=b4.b,v=b7.a,u=b7.b,t=b7.c,s=b6.a,r=b6.b,q=b6.c,p=b8.a,o=b8.b,n=b8.c,m=1/w,l=v*m,k=u*m,j=t*m,i=p*m,h=o*m,m=n*m,g=b4.a,f=g.a,e=b4.c,d=x.o,a0=b4.d,a1=b4.e,a2=b4.f,a3=0;a3<w;++a3)for(a4=a3/w,a5=s+v*a4,a6=r+u*a4,a4=q+t*a4,a7=0;a7<w;++a7){a8=a7/w
a9=a5+p*a8
b0=a6+o*a8
a8=a4+n*a8
b1=a9+l
b2=b0+k
b3=a8+j
f.push(new A.ks(C.a([e.$1(new A.r(a9,b0,a8)),e.$1(new A.r(b1,b2,b3)),e.$1(new A.r(b1+i,b2+h,b3+m)),e.$1(new A.r(a9+i,b0+h,a8+m))],d),a0.$1(b5),a1,g.b,a2,g.d,!1,g.c,g.e,g.f,g.w))}},
$S:z+127}
A.c0L.prototype={
$1(d){var w=d*2*3.141592653589793/this.b
return this.a.aO(0,Math.cos(w)).a7(0,this.c.aO(0,Math.sin(w)))},
$S:z+34}
A.c0H.prototype={
$2(d,e){var w=3.141592653589793*d/this.a,v=6.283185307179586*e/this.b
return new A.r(Math.sin(w)*Math.cos(v),Math.cos(w),Math.sin(w)*Math.sin(v))},
$S:z+61}
A.c0M.prototype={
$1(d){var w=d*2*3.141592653589793/this.b
return this.a.aO(0,Math.cos(w)).a7(0,this.c.aO(0,Math.sin(w)))},
$S:z+34}
A.h20.prototype={
$1(d){var w=d.b,v=this.a,u=d.c,t=this.b
return new A.r(d.a,w*v-u*t,w*t+u*v)},
$S:z+7}
A.h1Z.prototype={
$1(d){var w=this.a
return w===0?d:A.ti(d,w)},
$S:z+7}
A.h2_.prototype={
$1(d){var w=this,v=w.b===0?d:w.c.$1(d)
return J.h3f(w.a.$1(v),w.d)},
$S:z+7}
A.h1Y.prototype={
$1(d){var w=this.b===0?d:this.c.$1(d)
return this.a.$1(w)},
$S:z+7}
A.h1O.prototype={
$4(d,e,f,g){var w=-d
return 0.5*(2*e+(w+f)*this.a+(2*d-5*e+4*f-g)*this.b+(w+3*e-3*f+g)*this.c)},
$S:271}
A.bKh.prototype={
$1(d){var w=d.a,v=J.a7(w),u=C.k0(v.h(w,"ngmy_swipe_x3"))
$.ajO=u===!0
w=C.k0(v.h(w,"ngmy_swipe_y3"))
$.ajP=w!==!1},
$S:331}
A.bKi.prototype={
$1(d){},
$S:30}
A.bKj.prototype={
$1(d){d.aB("Bool","ngmy_swipe_x3",$.ajO)
d.aB("Bool","ngmy_swipe_y3",$.ajP)},
$S:331}
A.bKk.prototype={
$1(d){},
$S:30}
A.bKe.prototype={
$4(d,e,f,g){var w
if(d>0.000001)w=(g-e)/d
else w=d<-0.000001?(f-e)/d:1/0
return w},
$S:271}
A.bKm.prototype={
$1(d){var w=this,v=-d.c,u=d.b,t=w.a,s=w.b,r=v*t-u*s,q=d.a,p=w.c,o=w.d
return new A.r(q*p-r*o,u*t+v*s,q*o+r*p)},
$S:z+7}
A.bKl.prototype={
$1(d){var w=this,v=w.a
return v.d.a7(0,w.b.$1(new A.r(w.c*d,w.d*d,d-v.c)))},
$S:z+48}
A.bKg.prototype={
$1(d){var w=this,v=-d.c,u=d.b,t=w.a,s=w.b,r=v*t-u*s,q=d.a,p=w.c,o=w.d
return new A.r(q*p-r*o,u*t+v*s,q*o+r*p)},
$S:z+7}
A.bKf.prototype={
$1(d){var w=this,v=w.a
return v.d.a7(0,w.b.$1(new A.r(w.c*d,w.d*d,d-v.c)))},
$S:z+48}
A.cvI.prototype={
$1(d){var w=this,v=d.a,u=w.a,t=d.c,s=w.b,r=-v*s+t*u,q=d.b,p=w.c,o=w.d
return new A.r(v*u+t*s,q*p-r*o,-(q*o+r*p))},
$S:z+7}
A.cvJ.prototype={
$1(d){var w=this.a.c,v=this.b.$1(d.aK(0,w.d))
return new A.r(v.a,v.b,v.c+w.c)},
$S:z+7}
A.cvH.prototype={
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
for(f=0;f<v;++f)u.push(new A.r(d3.c[f],d3.d[f],d3.e[f]))
b0=A.i3t(u)
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
if(t&&d4.d===u){d2=C.ar(c5,D.b0,0.28+0.14*Math.sin(d2.gH1(0)*6))
d2.toString
c3+=0.12
c5=d2}d2=255*c4*0.55
c6=D.k.V(D.k.F(c5.gb8(c5)*255*c3+d2,0,255))
c7=D.k.V(D.k.F(c5.gbe()*255*c3+d2,0,255))
c8=D.k.V(D.k.F(c5.gbc(c5)*255*c3+d2,0,255))
d2=$.S()
s=C.a([],x.g)
c9=new C.aE(d2.r,D.ah,null,null,s)
c9.D(new C.aY(d3.f[0],d3.r[0]))
for(f=1;f<v;++f){d2=new C.aq(d3.f[f],d3.r[f])
s.push(d2)
r=c9.f
if(r!=null)d2.ai(r)
c9.a8()}c9.D(new C.bt())
d2=d4.f
d3=C.h3X(c6,c7,c8,d2)
s=d4.d
u=s===u&&t
d0=new A.Gn(d4.y,d4.z,null,c9,d3,c0-d4.x,s,d2<0.99,u)
d0.e=c1<2&&c2<2
d1.go.push(d0)
d0.c=d5},
$S:z+103}
A.cvB.prototype={
$1(d){return d.c>=1},
$S:z+25}
A.cvC.prototype={
$1(d){var w,v,u,t,s,r,q,p,o=this,n=!o.c||o.d>=o.e[0],m=o.f,l=o.b
if(n)A.i4l(d,m,o.r,l.gH1(0))
else{n=$.hG4()
C.xF(m)
w=n.a
v=w.get(m)
u=D.k.bh(l.gH1(0)*5)
t=v==null
if(t)s=o.a.x<10
else s=v.a!==u&&o.a.w<3
if(s){$.S()
r=new C.pW(new C.pu())
m.c.$3(C.zl(r,null),new C.av(m.d,m.e),l.gH1(0))
if(!t)v.b.t()
n.n(0,m,new A.cFY(u,r.nZ()))
n=o.a
if(t)++n.x
else ++n.w}C.xF(m)
n=w.get(m)
q=n==null?null:n.b
if(q!=null){n=m.d
m=m.e
p=A.hby(o.r,n,m)
if(p!=null){l=d.c
J.bq(l.save())
d.aE(0,p.a)
l.clipRect(C.i_(new C.a2(0,0,n,0+m)),$.mz()[1],!0)
d.ze(q)
l.restore()}}else{$.S()
n=C.K()
n.r=D.cs.gp(0)
d.ae(o.w,n)}}},
$S:584}
A.cvA.prototype={
$2(d,e){var w=this.a
return A.oM(A.oM(w[0],w[1],d),A.oM(w[3],w[2],d),e)},
$S:z+18}
A.cvD.prototype={
$1(d){return d.c<1},
$S:z+25}
A.cvE.prototype={
$1(d){return A.i4m(d,this.b,this.c,8,6,this.a.gH1(0))},
$S:584}
A.cvF.prototype={
$2(d,e){return D.k.aR(e,d)},
$S:1783}
A.cvG.prototype={
$2(d,e){var w,v=D.o.aR(d.a,e.a)
if(v!==0)return v
w=D.k.aR(e.d,d.d)
return w!==0?w:D.o.aR(d.c,e.c)},
$S:z+93}
A.f5m.prototype={
$1(d){var w=this.a,v=w.r,u=d.a
w.r=d
w.a.d.a7d(D.k.F((u-v.a)/1e6,0,0.1))
w.f.sp(0,u/1e6)},
$S:7}
A.f5l.prototype={
$1(d){if(x.ej.b(d))this.a.a.d.aqb(1+d.gtQ().b*0.0012)},
$S:253}
A.f5j.prototype={
$1(d){var w=this.a
w.w=1
w.x=d.c},
$S:254}
A.f5k.prototype={
$1(d){var w,v,u,t,s,r=d.w,q=this.a
if(r!==q.x){q.x=r
q.w=d.d}if(r>=2){r=d.d
w=q.w/r
q.w=r
if(isFinite(w)&&w>0)q.a.d.aqb(w)}else{r=q.a.d
q=d.a
v=$.ajO?-1:1
v=q.a*0.009*v
u=$.ajP?-1:1
r.dx=r.db=null
v=r.a+=v
if(!r.CW){t=r.ay
s=r.ch
r.a=D.k.F(v,t-s,t+s)}r.b=D.k.F(r.b+-q.b*0.009*u,r.at,r.ax)
r.ae8()
r.b0()}},
$S:219}
A.f5d.prototype={
$1(d){return this.a.y=d.b},
$S:24}
A.f5e.prototype={
$0(){var w,v=this.a,u=v.a.as
u.toString
v=v.y
w=this.b.gY(0)
return u.$2(v,w==null?D.ay:w)},
$S:0}
A.f5g.prototype={
$1(d){var w=this.a
if(++w.at===1){w.z=d.gf0()
w.Q=d.glt(d)
w.as=!1}else w.as=!0},
$S:71}
A.f5h.prototype={
$1(d){var w=this.a,v=w.z
if(v!=null&&d.gf0().aK(0,v).gcF()>14)w.as=!0},
$S:202}
A.f5f.prototype={
$1(d){var w=this.a
w.at=Math.max(0,w.at-1)
w.as=!0},
$S:139}
A.f5i.prototype={
$1(d){var w,v=this.a,u=v.at
v.at=Math.max(0,u-1)
w=v.z
if(u===1&&!v.as&&w!=null&&D.o.aq(d.glt(d).a-v.Q.a,1000)<450){u=v.a.f
if(u!=null)u.$1(v.e.cYL(d.gf0()))}if(v.at===0)v.z=null},
$S:111}
A.fmE.prototype={
$0(){return new A.Qc(!1,C.a([],x.z),C.a([],x.t))},
$S:z+74}
A.bUF.prototype={
$0(){var w=0,v=C.j(x.g7),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j
var $async$$0=C.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return C.b($.re().jn(0,q.a),$async$$0)
case 7:p=e
m=q.b
l=x.N
o=new A.N_(m,C.U(l,x.a6),C.U(l,x.bB),C.a([],x.dQ),C.U(l,x.gN))
w=8
return C.b(o.PK(p),$async$$0)
case 8:$.h4L.n(0,m,o)
$.h4J.W(0,m)
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
$.h4J.J(0,m)
u=null
r=[1]
w=5
break
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
$.h4K.W(0,q.b)
w=r.pop()
break
case 6:case 1:return C.h(u,v)
case 2:return C.f(s.at(-1),v)}})
return C.i($async$$0,v)},
$S:z+70}
A.bUw.prototype={
$1(d){return D.a.q(d,"hips")},
$S:3}
A.bUq.prototype={
$2(d,e){var w,v=Math.floor(d),u=Math.floor(e),t=this.b,s=t.a,r=Math.min(s-1,D.k.bh((d-v)*s))
v=t.b
w=(Math.min(v-1,D.k.bh((e-u)*v))*s+r)*4
s=this.a
t=t.c
s.c=s.c+t[w]
s.b=s.b+t[w+1]
s.a=s.a+t[w+2]},
$S:188}
A.bUp.prototype={
$1(d){return D.k.V(D.k.F(d,0,1)*255)},
$S:258}
A.bUy.prototype={
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
w[s]=g.c3(0,((k*1024+j)*1024+i)*2+r,new A.bUz(g))}e[0]=g.a
return w},
$S:1785}
A.bUz.prototype={
$0(){return this.a.a},
$S:88}
A.bUA.prototype={
$1(d){var w,v,u,t,s,r,q=C.aS(x.S)
for(w=this.a.e,v=w.length,u=0;u<v;u+=3){t=d[w[u]]
s=d[w[u+1]]
r=d[w[u+2]]
if(t===s||s===r||t===r)continue
q.J(0,A.hjs(t,s,r))}return q.a},
$S:1786}
A.bUx.prototype={
$2(d,e){var w,v,u,t=this.a,s=this.b.h(0,d)
s.toString
w=J.a7(e)
v=D.k.V(w.h(e,0)/w.h(e,3))
u=D.k.V(w.h(e,1)/w.h(e,3))
w=D.k.V(w.h(e,2)/w.h(e,3))
t.$flags&2&&C.aj(t)
t[s]=(v<<16|u<<8|w|4278190080)>>>0},
$S:1787}
A.bUu.prototype={
$0(){return new Float64Array(this.a*16)},
$S:579}
A.bUv.prototype={
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
if(n<0)D.nL.h9(k,j,j+16,h)
else A.hjt(k,n*16,h,0,k,j)
k=u.f
k===$&&C.c()
k=k[a1]
j=k.length
m=0
for(;m<k.length;k.length===j||(0,C.J)(k),++m)l.$1(k[m])},
$S:29}
A.bUD.prototype={
$1(d){var w,v,u
for(w=this.a.z,w=new C.hC(w,w.r,w.e);w.C();){v=w.d
u=v.toLowerCase()
if(C.cS(u,d,0))return v}return null},
$S:340}
A.bUB.prototype={
$1(d){return!D.a.q(d.toLowerCase(),"pose")},
$S:3}
A.bUC.prototype={
$0(){var w=this.a.z
return new C.cx(w,C.a4(w).k("cx<1>")).gH(0)},
$S:22}
A.bUG.prototype={
$1(d){var w=this,v=w.c,u=d*3,t=w.a,s=w.d,r=(v[u]-t.b)*s,q=v[u+1],p=w.b.ay,o=(v[u+2]-t.a)*s
t=w.f
u=w.r
return new A.r(r*t+o*u+w.w,(q-p)*s+w.e,-r*u+o*t+w.x)},
$S:z+34}
A.bUr.prototype={
$3(d,e,f){var w=this,v=w.e
return w.b.a7(0,w.c.aO(0,w.a.a*f+0.25)).a7(0,w.d.aO(0,d*v)).a7(0,w.f.aO(0,e*v))},
$2(d,e){return this.$3(d,e,1)},
$S:z+41}
A.bUt.prototype={
$6(d,e,f,g,h,i){var w=this
return w.a.push(new A.ks(C.a([d,e,f,g],x.o),w.b,h,w.c,0,1,!1,0,i,2,w.d))},
$S:z+99}
A.bUs.prototype={
$6(d,e,f,g,h,i){var w=this.b
return this.a.$6(w.$2(d-f,e),w.$2(d,e-g),w.$2(d+f,e),w.$2(d,e+g),h,i)},
$S:1789}
A.fAz.prototype={
$2(d,e){return D.k.V(d+(D.k.F(e,0,255)-d)*0.8)},
$S:577}
A.bIA.prototype={
$1(d){return d.d+this.a.f*d.e},
$S:z+121}
A.bIz.prototype={
$1(d){return d.a===J.t(this.a,"template")},
$S:z+43}
A.fTV.prototype={
$6$lines$w(d,e,f,g,h,i){var w=null,v=C.fv("\u2026",D.ct,w,h,w,C.cQ(w,w,w,w,w,w,w,w,w,C.l(w,w,f,w,w,w,w,w,w,w,w,e,w,w,i,w,1.1,!0,w,w,w,w,w,w,w,w),d),D.a5,D.bW,w,D.dD,D.bX)
v.o3(g)
return v},
$4(d,e,f,g){return this.$6$lines$w(d,e,f,g,2,D.u)},
$5$w(d,e,f,g,h){return this.$6$lines$w(d,e,f,g,2,h)},
$S:1791}
A.fC2.prototype={
$1(d){var w=this.a
return A.ti(d,w.c).a7(0,new A.r(w.a,0,w.b))},
$S:z+7}
A.fC3.prototype={
$6$px(d,e,f,g,h,i){var w=new A.fC4(e,d),v=-f/2,u=g/2,t=f/2,s=-g/2
this.a.push(new A.fh(C.a([w.$2(v,u),w.$2(t,u),w.$2(t,s),w.$2(v,s)],x.o),0,h,i,i*g/f,30,this.b,0,!1))},
$5(d,e,f,g,h){return this.$6$px(d,e,f,g,h,260)},
$S:z+137}
A.fC4.prototype={
$2(d,e){return A.ti(new A.r(d,e,0),this.a).a7(0,this.b)},
$S:z+18}
A.fBW.prototype={
$3(d,e,f){return A.bCl(d,e,f,0)},
$S:23}
A.fBX.prototype={
$3(d,e,f){return A.bCl(d,e,f,3)},
$S:23}
A.fBY.prototype={
$3(d,e,f){return A.bCl(d,e,f,8)},
$S:23}
A.fBZ.prototype={
$3(d,e,f){return A.bCl(d,e,f,9+this.a)},
$S:23}
A.fC_.prototype={
$3(d,e,f){return A.bCl(d,e,f,12+this.a)},
$S:23}
A.fC0.prototype={
$3(d,e,f){return A.hCc(d,e,f,this.a,this.b)},
$S:23}
A.fC1.prototype={
$3(d,e,f){return A.hCc(d,e,f,this.a,this.b)},
$S:23}
A.fnS.prototype={
$4(d,e,f,g){var w=-d,v=this.a
return 0.5*(2*e+(w+f)*v+(2*d-5*e+4*f-g)*v*v+(w+3*e-3*f+g)*v*v*v)},
$S:271}
A.frh.prototype={
$1(d){var w=this.a,v=J.a7(w)
return v.h(w,D.o.F(d,0,v.gI(w)-1))},
$S:z+139}
A.fAG.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n=A.hxK(this.a),m=x.n,l=C.a([],m)
for(w=J.a7(n),v=0;v<w.gI(n)-1;v=u){u=v+1
t=w.h(n,u).a
s=w.h(n,v).a
l.push(Math.pow(Math.max(new A.r(t.a-s.a,t.b-s.b,t.c-s.c).gqg(),250),0.75))}r=D.d.f6(l,new A.fAF())
q=C.a([0],m)
for(m=l.length,p=0;p<l.length;l.length===m||(0,C.J)(l),++p){o=l[p]
q.push(D.d.gam(q)+30*o/r)}return q},
$S:1793}
A.fAF.prototype={
$2(d,e){return d+e},
$S:79}
A.fAD.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this.a,a8=B.dCJ.h(0,a7.a)
if(a8==null){w=C.a([],x.t)
v=a7.w.length
u=v===0
t=0
for(;;){if(!(t<(u?1:v)))break
w.push(t);++t}a8=new C.y(w,0)}s=Math.max(Math.max(a7.gapU(),a7.gbfx()),a7.gH_()*1.3)
w=a7.r
r=new A.r(a7.ga4K(0),w+a7.gH_()/2,a7.ga4M())
q=w+a7.gH_()
v=s*0.55
p=C.a([new C.y(new A.r(a7.ga4K(0)+v,q+s*0.5,a7.ga4M()+s*1.15),r)],x.dt)
for(u=a8.a,o=x.o,n=a7.w,m=a7.e,l=a7.f,k=a8.b,v=q+v,j=null,i=0;i<u.length;++i,j=a2){h=n[u[i]]
g=h.e
f=m*g
e=l*g
d=new A.r(h.a,w+h.d+e/2,h.b)
g=h.c
a0=Math.sin(g)
a1=Math.cos(g)
a2=new A.r(a0,0,a1)
a3=new A.fAE(d,a2,f*1.5,new A.r(Math.cos(g),0,-Math.sin(g)),f,e)
switch(D.o.E(k+i,3)){case 0:g=C.a([a3.$3(1.8,0,1.1),a3.$3(1,-0.22,-0.35),a3.$3(0.9,0.3,-0.2)],o)
break
case 1:g=C.a([a3.$3(0.9,1.5,-0.25),a3.$3(1.05,0,0.05),a3.$3(0.85,-1.3,0.15)],o)
break
default:g=C.a([a3.$3(1.3,0.2,-0.45),a3.$3(1.1,0,0.45),a3.$3(1.7,-0.3,1.3)],o)
break}if(j!=null&&j.a*a0+j.c*a1<0.3){a0=D.d.gam(p).a
a1=D.d.gH(g)
p.push(new C.y(new A.r((a0.a+a1.a)*0.5+j.c*s*0.5,v,(a0.c+a1.c)*0.5-j.a*s*0.5),r))}for(a4=0;a4<3;++a4)p.push(new C.y(g[a4],d))}a5=new A.r(a7.ga4K(0)-s*0.7,q+s*0.6,a7.ga4M()-s)
if(j!=null){a6=D.d.gam(p).a.a7(0,a5).aO(0,0.5)
p.push(new C.y(new A.r(a6.a+j.c*s*0.5,v,a6.c-j.a*s*0.5),r))}p.push(new C.y(a5,r))
return p},
$S:z+144}
A.fAE.prototype={
$3(d,e,f){var w=this
return w.a.a7(0,w.b.aO(0,w.c*d)).a7(0,w.d.aO(0,w.e*e)).a7(0,new A.r(0,w.f*f,0))},
$S:z+19}
A.fBO.prototype={
$1(d){var w=this.b,v=w*d.b,u=d.c,t=this.c
return this.a.a7(0,new A.r(Math.sin(v)*u*t.gdU(0)+w*d.e*t.gapU(),d.d*t.gH_(),Math.cos(v)*u*t.gdU(0)))},
$S:z+46}
A.fBP.prototype={
$1(d){var w=this.c
return this.a.a7(0,new A.r(this.b*d.f*w.gapU(),d.r*w.gH_(),0))},
$S:z+46}
A.fBQ.prototype={
$1(d){var w=this.a
return w[D.o.F(d,0,w.length-1)]},
$S:z+72}
A.c4M.prototype={
$1(d){return d.a===this.a.d.a},
$S:z+43}
A.c4K.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new A.c4J())},
$S:28}
A.c4J.prototype={
$0(){},
$S:0}
A.c4x.prototype={
$0(){var w=this.a
w.f=A.hcg(w.gzQ(),w.d)
w.abM()},
$S:0}
A.c4D.prototype={
$0(){return this.a.x=this.b},
$S:0}
A.c4L.prototype={
$0(){var w=this.a
w.x=0
w.y=!1
w.z=""},
$S:0}
A.c4A.prototype={
$0(){var w=this.a
w.x=-1
w.y=!1
w.z=this.b?"That was the 30 second drone shot. Press it again any time, or change the board and film it again.":""},
$S:0}
A.c4z.prototype={
$0(){var w=this.a
return w.f=A.hcg(w.gzQ(),w.d)},
$S:0}
A.c47.prototype={
$0(){},
$S:0}
A.c4y.prototype={
$0(){return this.a.z="That picture could not be opened."},
$S:0}
A.c4C.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=C.aG(d,k,x.w).w,i=x.p,h=C.a([],i)
for(w=this.a,v=w.d,u=0;u<12;++u){t=B.a4e[u]
s=t.a
r=v.a===s
q=r?D.d9:D.cs
p=new C.aP(16,16)
o=r?F.f0:D.bB
n=new C.ay(o,r?2:1,D.r,-1)
o=C.a([C.d(t.b,k,k,k,k,k,k,D.n8,k,k,k),D.b3],i)
r=t.w.length
m=r===0
if((m?1:r)>1){l=new C.aP(10,10)
o.push(C.p(k,C.d(""+(m?1:r)+" boards",k,k,k,k,k,k,A7.aUZ,k,k,k),D.f,k,k,new C.o(D.e_,k,k,new C.bg(l,l,l,l),k,k,D.n),k,k,k,k,D.yK,k,k,k))}if(v.a===s)o.push(B.epN)
h.push(C.aA(k,C.p(k,C.x(C.a([new C.c7(D.aM,D.e,D.i,D.m,k,D.p,k,0,o,k),D.an,C.d(t.c,k,2,D.a2,k,k,k,D.ja,k,k,k),D.cU,new C.by(1,D.bc,C.d(t.d,k,k,D.V9,k,k,k,B.foC,k,k,k),k)],i),D.E,k,D.e,D.i,0,D.p),D.f,k,k,new C.o(q,k,new C.bG(n,n,n,n),new C.bg(p,p,p,p),k,k,D.n),k,k,k,k,B.bAy,k,k,k),D.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new A.c4B(w,d,t),k,k,k,k,k,k,!1,D.a4))}return C.bm(!0,new C.D(B.bBY,C.x(C.a([B.h_w,D.aw,B.fTr,D.af,new C.cR(new C.aZ(0,1/0,0,j.a.b*0.66),C.kS(1.05,h,2,10,10,k,k,!0),k)],i),D.E,k,D.e,D.O,0,D.p),k),!0,!1,D.ag,!0,!0)},
$S:25}
A.c4B.prototype={
$0(){C.a6(this.b,!1).O(null)
this.a.cxD(this.c.a)},
$S:0}
A.c4w.prototype={
$0(){var w=this,v=w.b.d.b[w.a.a]
w.c.sb1(0,v.b)
w.d.sb1(0,v.c)
w.e.sb1(0,v.d)},
$S:0}
A.c4v.prototype={
$1(d){var w=this
return new C.e_(new A.c4s(w.a,w.b,w.c,w.d,w.e,w.f),null)},
$S:21}
A.c4s.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=this,o=null,n=p.b,m=p.a,l=n.d.b[m.a],k=new A.c4t(m,n),j=new A.c4u(e),i=C.aG(d,o,x.w).w,h=x.p,g=C.a([B.fGp,D.aw,C.d(l.a?"Now it shows the NGMY logo, words and ads. Change anything and it becomes yours.":"This sign is your own.",o,o,o,o,o,o,I.tw,o,o,o)],h),f=n.gzQ().w.length
if((f===0?1:f)>1){f=C.a([],h)
w=p.c
v=0
for(;;){u=n.gzQ().w.length
if(!(v<(u===0?1:u)))break
u=m.a===v
t=u?D.d9:D.cs
s=new C.aP(18,18)
r=new C.ay(u?F.f0:D.aW,2,D.r,-1)
q=v+1
f.push(C.aA(o,C.p(o,C.d("Sign "+q,o,o,o,o,o,o,D.lu,o,o,o),D.f,o,o,new C.o(t,o,new C.bG(r,r,r,r),new C.bg(s,s,s,s),o,o,D.n),o,o,o,o,D.lJ,o,o,o),D.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new A.c4c(m,v,w,e),o,o,o,o,o,o,!1,D.a4))
v=q}D.d.v(g,C.a([D.X,B.h_B,D.an,C.bW(D.bG,f,D.br,o,8,8)],h))}g.push(D.af)
g.push(k.$3("Big words",p.d,new A.c4d(l)))
g.push(k.$3("Smaller words",p.e,new A.c4e(l)))
g.push(k.$3("Bottom line (web address)",p.f,new A.c4f(l)))
f=l.f!=null
w=f?"Your logo is on (change)":"Put your own logo (default: NGMY logo)"
g.push(j.$4(w,f,new A.c4g(m,n),new A.c4h(m,n,l)))
f=l.r!=null
w=f?"Your picture is on (change)":"Put your own picture"
g.push(j.$4(w,f,new A.c4i(m,n),new A.c4j(m,n,l)))
g.push(D.aw)
g.push(B.fUz)
g.push(D.an)
f=C.a([],h)
for(w=x.O,v=0;v<6;++v){u=B.a63[v]
u=C.a([u.b,u.c],w)
t=new C.aP(10,10)
r=new C.ay(l.e===v&&!l.a?F.f0:D.aW,2,D.r,-1)
s=B.a63[v]
f.push(C.aA(o,C.p(o,new C.cc(D.A,o,o,C.d(s.a,o,o,o,o,o,o,new C.G(!0,s.d,o,o,o,o,11,D.H,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),o,o,o),o),D.f,o,o,new C.o(o,o,new C.bG(r,r,r,r),new C.bg(t,t,t,t),o,new C.a9(D.a6,D.a9,D.x,u,o,o),D.n),o,o,o,o,D.hE,o,o,74),D.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new A.c4k(m,n,l,v,e),o,o,o,o,o,o,!1,D.a4))}g.push(C.bW(D.bG,f,D.br,o,8,8))
g.push(D.aC)
m=n.gzQ().w.length
g.push(C.A(C.a([C.E(C.es(B.bZC,C.d((m===0?1:m)>1?"All signs back to the NGMY default":"Back to the NGMY default",o,o,o,o,o,o,B.fAY,o,o,o),new A.c4l(n,l,p.c,e),o),1),D.at,C.bH(D.xh,o,new A.c4m(d),o)],h),D.m,o,D.e,D.i,0,o,o))
return new C.D(new C.Q(16,16,16,i.f.d+16),C.cg(C.x(g,D.E,o,D.e,D.O,0,D.p),D.t,o,D.y,o,o,o,o,D.ai),o)},
$S:105}
A.c4t.prototype={
$3(d,e,f){var w=null
return new C.D(D.d3,C.aM(w,D.Z,!1,w,!0,D.t,w,C.aN(),e,w,w,w,w,w,2,C.bs(w,new C.b6(4,C.n(12),D.a1),w,w,w,w,w,w,!0,w,w,w,w,w,w,D.cs,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,D.Vu,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w),D.y,!0,w,!0,w,!1,w,D.ak,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,new A.c4n(this.a,this.b,f),w,w,w,!1,w,w,!1,w,!0,w,D.ab,w,w,w,w,w,w,w,w,w,w,w,D.dh,!0,D.a5,w,D.ao,w,w,w,w),w)},
$S:1794}
A.c4n.prototype={
$1(d){this.c.$1(d)
this.b.ZW(this.a.a)},
$S:2}
A.c4u.prototype={
$4(d,e,f,g){var w=null,v=this.a,u=e?D.e9:D.uA
u=C.a([C.E(C.es(C.Y(u,e?D.b9:D.ad,w,w,w,w),C.d(d,w,w,w,w,w,w,D.dh,w,w,w),new A.c4q(f,v),w),1)],x.p)
if(e)u.push(C.aH(w,w,w,w,D.t_,w,w,w,new A.c4r(g,v),w,w,w,w,w,w))
return new C.D(D.cv,C.A(u,D.m,w,D.e,D.i,0,w,w),w)},
$S:1795}
A.c4q.prototype={
$0(){var w=0,v=C.j(x.H),u=this
var $async$$0=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:u.a.$0()
w=2
return C.b(C.bP(D.nv,null,x.H),$async$$0)
case 2:u.b.$1(new A.c4p())
return C.h(null,v)}})
return C.i($async$$0,v)},
$S:1}
A.c4p.prototype={
$0(){},
$S:0}
A.c4r.prototype={
$0(){this.a.$0()
this.b.$1(new A.c4o())},
$S:0}
A.c4o.prototype={
$0(){},
$S:0}
A.c4c.prototype={
$0(){var w=this
w.a.a=w.b
w.c.$0()
w.d.$1(new A.c4b())},
$S:0}
A.c4b.prototype={
$0(){},
$S:0}
A.c4d.prototype={
$1(d){return this.a.b=d},
$S:2}
A.c4e.prototype={
$1(d){return this.a.c=d},
$S:2}
A.c4f.prototype={
$1(d){return this.a.d=d},
$S:2}
A.c4g.prototype={
$0(){return this.b.J5(this.a.a,!0)},
$S:0}
A.c4h.prototype={
$0(){var w=this.c
w.w=w.f=null
this.b.ZW(this.a.a)},
$S:0}
A.c4i.prototype={
$0(){return this.b.J5(this.a.a,!1)},
$S:0}
A.c4j.prototype={
$0(){var w=this.c
w.x=w.r=null
this.b.ZW(this.a.a)},
$S:0}
A.c4k.prototype={
$0(){var w=this
w.c.e=w.d
w.b.ZW(w.a.a)
w.e.$1(new A.c4a())},
$S:0}
A.c4a.prototype={
$0(){},
$S:0}
A.c4l.prototype={
$0(){var w=this,v=w.a,u=v.gzQ().w.length
if((u===0?1:u)>1)v.d.d_Q()
else w.b.bkV()
w.c.$0()
v.m(new A.c48())
v.J6()
w.d.$1(new A.c49())},
$S:0}
A.c48.prototype={
$0(){},
$S:0}
A.c49.prototype={
$0(){},
$S:0}
A.c4m.prototype={
$0(){C.a6(this.a,!1).O(null)
return null},
$S:0}
A.c4G.prototype={
$0(){return C.a6(this.a,!1).ip()},
$S:0}
A.c4H.prototype={
$0(){var w=this.a
return w.m(new A.c4F(w))},
$S:0}
A.c4F.prototype={
$0(){return this.a.y=!1},
$S:0}
A.c4I.prototype={
$0(){var w=this.a
return w.m(new A.c4E(w))},
$S:0}
A.c4E.prototype={
$0(){return this.a.y=!0},
$S:0}
A.fEA.prototype={
$1(d){return d.a===this.a},
$S:z+36}
A.fEB.prototype={
$0(){return D.d.gH(B.RR)},
$S:z+97}
A.bMZ.prototype={
$1(d){return d.d.q(0,this.a.b)},
$S:z+36}
A.bN0.prototype={
$2(d,e){var w=this.a,v=this.b
return D.k.aR(w.aaJ(d.c,d.d,new C.y(v.c,v.d)),w.aaJ(e.c,e.d,new C.y(v.c,v.d)))},
$S:z+20}
A.bN1.prototype={
$1(d){return d.f==null},
$S:z+104}
A.bMY.prototype={
$2(d,e){var w,v=d.w
if(v!==e.w)return v?-1:1
v=this.a
w=this.b
return D.k.aR(v.b01(w,A.z_(d.c)),v.b01(w,A.z_(e.c)))},
$S:z+51}
A.bN2.prototype={
$2(d,e){var w=D.o.aR(e.b,d.b)
return w!==0?w:D.o.aR(e.c,d.c)},
$S:1796}
A.bN_.prototype={
$2(d,e){var w,v,u=d.w
if(u!==e.w)return u?-1:1
u=this.a
w=this.b
v=this.c
return D.k.aR(u.aaJ(w,v,A.z_(d.c)),u.aaJ(w,v,A.z_(e.c)))},
$S:z+51}
A.bL5.prototype={
$2(d,e){return(d^D.k.V(e.c)*31+D.k.V(e.d))>>>0},
$S:z+113}
A.c2n.prototype={
$2(d,e){var w,v,u,t,s=null,r=this.a,q=r.c,p=q.d>0
if(p)w=0
else{w=q.c
w=w>0?(1-w/180)*0.5:q.a}v=r.e
if(p)p="\ud83d\udc1b"
else p=q.c>0?"\ud83d\ude34":"\u26a1"
u=x.p
w=C.a([A.h5g(v,p,w)],u)
p=q.e
if(p<0.3||q.f){t=q.f
if(t)p=0.2
t=t?"\ud83e\udd12":"\ud83d\udca7"
D.d.v(w,C.a([new C.a5(s,v/4,s,s),A.h5g(v*0.7,t,p)],u))}if(r.d)D.d.v(w,C.a([new C.a5(s,v/3,s,s),A.h5g(v,"\u26fd",q.b)],u))
return C.x(w,D.m,s,D.e,D.O,0,D.p)},
$S:421}
A.fI9.prototype={
$4(d,e,f,g){var w=f+g/100
return new C.cu([d+100*Math.cos(w),e+100*Math.sin(w),-Math.sin(w),Math.cos(w)])},
$S:1797}
A.fkZ.prototype={
$1(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this.b,h=A.Lz(i,a0).a,g=h[0],f=h[1],e=h[2],d=h[3]
for(h=this.a,w=h.a,v=h.b,u=h.c,h=h.d,t=0;t<5;++t){s=B.d0e[t]
for(r=d*s,q=e*s,p=0;p<3;++p){o=B.df1[p]
n=i.a==="bus"
m=n?120:95.94999999999999
l=n?33.54:31.45
k=g+q*m-d*o*l
m=n?120:95.94999999999999
n=n?33.54:31.45
j=f+r*m+e*o*n
if(k>w&&k<v&&j>u&&j<h)return!0}}return!1},
$S:116}
A.bL7.prototype={
$1(d){return d<=0?0:Math.sqrt(220*d)},
$S:5}
A.h1W.prototype={
$7(d,e,f,g,h,i,j){return new A.fh(C.a([d,e,f,g],x.o),0,new A.h1X(h),i,j,6,2,0,!1)},
$S:z+117}
A.h1X.prototype={
$3(d,e,f){return A.my(d,e,f,this.a+D.k.bh(f/7))},
$S:23}
A.h1U.prototype={
$3(d,e,f){var w=this.a,v=w.b
w=w.a
return A.ti(new A.r(d,e,f),this.b).a7(0,new A.r(v,0,w))},
$S:z+19}
A.h1V.prototype={
$2(d,e){var w=this
return A.ti(new A.r(d,e,0),w.a).a7(0,new A.r(w.b,w.c,w.d))},
$S:z+18}
A.fE9.prototype={
$8(d,e,f,g,h,i,j,k){var w=-g,v=new A.fEa(d+f*h+w*i,f,w,e+g*h+f*i,g,f),u=-j/2,t=-k/2,s=j/2,r=k/2
this.a.xt(v.$2(u,t),v.$2(s,t),v.$2(s,r),v.$2(u,r),D.bP,B.eb)},
$S:1798}
A.fEa.prototype={
$2(d,e){var w=this
return new A.r(w.a+w.b*d+w.c*e,0.95,w.d+w.e*d+w.f*e)},
$S:z+18}
A.cCV.prototype={
$1(d){return d.d===this.a},
$S:z+52}
A.cCW.prototype={
$1(d){return d.r},
$S:z+125}
A.cCU.prototype={
$2(d,e){return D.k.aR(d.x,e.x)},
$S:z+126}
A.bKR.prototype={
$1(d){var w
if(d.r<0)w=d.e||d.c<60
else w=!1
return w},
$S:z+23}
A.bL_.prototype={
$3(d,e,f){var w=this.a
return A.my(d,e,f,w.b.a+w.f+D.k.bh(f/7))},
$S:23}
A.bL0.prototype={
$3(d,e,f){var w=this.a
return A.my(d,e,f,w.b.a+w.f+3+D.k.bh(f/7))},
$S:23}
A.bL1.prototype={
$3(d,e,f){var w=this.a
return A.my(d,e,f,w.b.a+w.f+7+D.k.bh(f/7))},
$S:23}
A.bL2.prototype={
$3(d,e,f){return A.my(d,e,f,this.a.b.a+2+D.k.bh(f/7))},
$S:23}
A.bKS.prototype={
$3(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=this.a,i=j.z
j=j.Q
w=e.a
v=e.b
u=new C.a2(0,0,0+w,0+v)
t=C.br(u,D.ii)
s=$.S()
r=C.K()
r.r=D.dI.gp(0)
d.ap(t,r)
r=C.br(u.cr(-6),D.jK)
t=C.K()
t.b=D.aa
t.c=5
t.r=D.ba.gp(0)
d.ap(r,t)
t=D.k.bh(f*3)
q=new C.aE(s.r,D.ah,k,k,C.a([],x.g))
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
q.D(new C.bt())}j=C.K()
j.r=((t&1)===0?D.ba:D.eR).gp(0)
d.ae(q,j)
j=i===1?"L":""+i
l=C.fv(k,D.ct,k,k,k,C.cQ(k,k,k,k,k,k,k,k,k,C.l(k,k,D.bs,k,k,k,k,k,k,k,k,v*0.78,k,k,D.u,k,k,!0,k,k,k,k,k,k,k,k),j),D.a5,D.bW,k,D.dD,D.bX)
l.ef()
j=l.b
i=j.c
j=j.a.c
l.a4(d,new C.q(w*0.62-i/2,v/2-j.gba(j)/2))
return k},
$S:23}
A.bKT.prototype={
$3(d,e,f){return A.my(d,e,f,1+D.k.bh(f/7))},
$S:23}
A.bKU.prototype={
$3(d,e,f){return A.my(d,e,f,4+D.k.bh(f/7))},
$S:23}
A.bKV.prototype={
$3(d,e,f){var w=this.a>0?2:5
return A.my(d,e,f,w+D.k.bh(f/7))},
$S:23}
A.bKW.prototype={
$3(d,e,f){return A.vL(d,e,f,"NGMY","Welcome")},
$S:23}
A.bKX.prototype={
$2(d,e){var w=this.a,v=C.T(d),u=new C.cM(new C.X(d,new A.bKY(w),v.k("X<1>")),new A.bKZ(w),v.k("cM<1,F>")).cG(0,0,D.xK)
if(u===2)w="works but is NOT wired safely: open it and check every wire"
else w=u===1?"started: finish the wiring":e
return w},
$S:1799}
A.bKY.prototype={
$1(d){return!this.a.d[d]},
$S:33}
A.bKZ.prototype={
$1(d){return this.a.e[d]},
$S:69}
A.bL3.prototype={
$3(d,e,f){return A.i8B(d,e,this.a.a)},
$S:23}
A.bLF.prototype={
$1(d){return!d.f},
$S:z+23}
A.bLC.prototype={
$1(d){return d.b===this.a.a.a},
$S:z+24}
A.bLD.prototype={
$1(d){return d.b===this.a&&d.c===this.b},
$S:z+24}
A.bLE.prototype={
$1(d){return d.a<0},
$S:z+57}
A.bLJ.prototype={
$1(d){var w,v,u,t
for(w=this.a.x,v=w.length,u=0;u<v;++u){t=w[u]
if(t.b===d)return t}return null},
$S:z+73}
A.bLH.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n=this,m=new A.bLI()
switch(d.a.a){case 0:w=n.a.$1("hospital")
if(w!=null)return new C.dW([w.c-34,w.d+52.5+26,3.141592653589793,"duty","\ud83e\ude7a On duty at the hospital"])
break
case 1:v=n.a
u=v.$1("cow")
t=u==null?v.$1("sheep"):u
if(t==null)t=v.$1("horse")
if(t!=null){v=t.c
u=v+34
s=t.d
r=s+22
return new C.dW([u,r,m.$4(u,r,v,s),"feed","\ud83c\udf3e Feeding the animals"])}break
case 2:q=n.a.$1("school")
if(q!=null)return new C.dW([q.c-24,q.d+52.5+26,3.141592653589793,"teach","\ud83d\udcda Teaching"])
break
case 3:t=n.a.$1("car")
if(t!=null)return new C.dW([t.c,t.d+34,3.141592653589793,"wash","\ud83e\uddfd Washing the car"])
break
case 4:q=n.a.$1("shop")
if(q!=null)return new C.dW([q.c+62,q.d+56,2.356194490192345,"cook","\ud83c\udf73 Cooking"])
break
case 5:p=n.a.$1("bench")
if(p!=null)return new C.dW([p.c,p.d+26,3.141592653589793,"rest","\ud83e\ude91 Resting"])
break
case 6:o=n.a.$1("flowers")
if(o!=null){v=o.c
u=v+30
s=o.d
r=s+28
return new C.dW([u,r,m.$4(u,r,v,s),"water","\ud83d\udca7 Watering the flowers"])}break}return new C.dW([-270+e*90,205,0,"",""])},
$S:z+128}
A.bLI.prototype={
$4(d,e,f,g){return Math.atan2(f-d,g-e)},
$S:271}
A.bLG.prototype={
$1(d){return d.b===this.a.a.a},
$S:z+24}
A.bLK.prototype={
$1(d){var w=d.c
return w==="bathroom"||w==="kitchen"},
$S:z+6}
A.dUZ.prototype={
$0(){return this.b.d=this.a.a},
$S:0}
A.dV_.prototype={
$1(d){return this.a.c9T()},
$S:11}
A.dVb.prototype={
$0(){},
$S:0}
A.dV5.prototype={
$0(){return this.a.w=this.b},
$S:0}
A.dV6.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.dV4(w))},
$S:0}
A.dV4.prototype={
$0(){return this.a.w=null},
$S:0}
A.dUV.prototype={
$1(d){return B.aJC},
$S:z+38}
A.dUW.prototype={
$0(){},
$S:0}
A.dVe.prototype={
$1(d){return B.aJC},
$S:z+38}
A.dVf.prototype={
$0(){},
$S:0}
A.dVd.prototype={
$0(){var w=this.a
return w.m(new A.dVc(w,this.b))},
$S:0}
A.dVc.prototype={
$0(){return this.a.r=this.b},
$S:0}
A.dUU.prototype={
$0(){return this.a.acc(this.b)},
$S:0}
A.dV0.prototype={
$0(){return this.a.Jf(this.b.bgh(this.c))},
$S:0}
A.dV1.prototype={
$0(){return this.a.Jf(this.b.aLS(this.c))},
$S:0}
A.dV2.prototype={
$0(){return this.a.Jf(this.b.aEi(this.c))},
$S:0}
A.dV3.prototype={
$0(){return this.a.akz(this.b)},
$S:0}
A.dUY.prototype={
$1(d){var w,v,u=null,t=this.b,s=this.c,r=t.e[s],q=t.c
q===$&&C.c()
q=q[r.a].a
w=this.a
v=x.p
s=C.A(C.a([new A.adb(q.e,44,u),D.at,C.E(C.d("Bed "+(s+1)+": "+q.b,u,u,u,u,u,u,D.hz,u,u,u),1),w.Q1("\ud83d\udc89 Treat",new A.dUX(w,t,s),D.c0)],v),D.m,u,D.e,D.i,0,u,u)
t=r.b
return C.x(C.a([s,D.P,w.WP("Care",t,t<30?D.ax:D.aJ),w.WP("Getting better",r.c,D.b9)],v),D.E,u,D.e,D.i,0,D.p)},
$S:298}
A.dUX.prototype={
$0(){return this.a.Jf(this.b.blv(this.c))},
$S:0}
A.dV8.prototype={
$0(){return this.a.Jf(this.b.aEP("food"))},
$S:0}
A.dV9.prototype={
$0(){return this.a.Jf(this.b.aEP("medicine"))},
$S:0}
A.dVa.prototype={
$0(){var w=0,v=C.j(x.H),u,t=this,s,r
var $async$$0=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:w=3
return C.b(A.aUr(),$async$$0)
case 3:$.Et=null
s=t.a
if(s.c==null){w=1
break}r=s.f
if(r!=null)r.a1(0)
$.HW=null
s.m(new A.dV7(s))
s.a_f()
case 1:return C.h(u,v)}})
return C.i($async$$0,v)},
$S:1}
A.dV7.prototype={
$0(){return this.a.d=null},
$S:0}
A.dVg.prototype={
$0(){return C.a6(this.a,!1).ip()},
$S:0}
A.dVh.prototype={
$1(d){return d.a>=0},
$S:z+57}
A.fGk.prototype={
$2(d,e){var w
switch(d){case"black":w=e.a===25?"The black wire carries the power (hot). It never goes on the green ground screw. Hot goes to a BRASS screw.":"The black (hot) wire goes on a BRASS screw, not on the silver one. Silver is for white (neutral)."
break
case"white":w=e.a===25?"The white wire is the neutral. The green screw is only for the ground wire. Neutral goes to a SILVER screw.":"The white (neutral) wire goes on a SILVER screw, not on brass. Brass is for the black (hot) wire."
break
default:w="The bare copper ground wire only goes on the GREEN screw. It keeps you safe if something goes wrong."
break}return w},
$S:z+2}
A.fGl.prototype={
$2(d,e){return d==="ground"?y.t:"A black (hot) wire never goes on the green ground screw. The two black wires go on the two BRASS screws."},
$S:z+2}
A.fGm.prototype={
$2(d,e){var w
if(e.e)w="Those are the LOAD screws. They are covered with tape because power must come in on the LINE side. If you wire the LOAD side the GFCI will not protect you."
else switch(d){case"black":w="The black (hot) wire goes on the BRASS LINE screw."
break
case"white":w="The white (neutral) wire goes on the SILVER LINE screw."
break
default:w=y.t
break}return w},
$S:z+2}
A.fGn.prototype={
$2(d,e){var w
switch(d){case"black":w="The black (hot) wire joins the fixture BLACK wire. Not the white one, and never the green ground."
break
case"white":w="The white (neutral) wire joins the fixture WHITE wire. Not the black one, and never the green ground."
break
default:w="The bare copper ground wire joins the fixture GREEN ground wire only."
break}return w},
$S:z+2}
A.fGo.prototype={
$2(d,e){var w
switch(d){case"black":w="The black (hot) wire joins the fan BLACK wire. Not the white one, and never the green ground."
break
case"white":w="The white (neutral) wire joins the fan WHITE wire. Not the black one, and never the green ground."
break
default:w="The bare copper ground wire joins the fan GREEN ground wire only."
break}return w},
$S:z+2}
A.fEP.prototype={
$1(d){return d.a===this.a},
$S:z+39}
A.h2w.prototype={
$1(d){return d.a},
$S:z+40}
A.fDW.prototype={
$1(d){var w
switch(d){case"hot":w=B.We
break
case"neutral":w=B.Wf
break
case"ground":w=B.Wg
break
default:w=B.aZU
break}return w},
$S:z+132}
A.fDX.prototype={
$1(d){var w
switch(d){case"hot":w=B.Ki
break
case"neutral":w=B.Kj
break
case"ground":w=B.Kk
break
default:w=B.aTY
break}return w},
$S:z+68}
A.fDU.prototype={
$1(d){return d.a===this.a.a},
$S:z+13}
A.fDV.prototype={
$1(d){return d.a===this.a.b},
$S:z+8}
A.fUP.prototype={
$1(d){return d.e==="hot"},
$S:z+8}
A.fUQ.prototype={
$1(d){return d.e==="neutral"},
$S:z+8}
A.fF1.prototype={
$1(d){return D.d.aX(this.a.b,new A.fF2(d))},
$S:3}
A.fF2.prototype={
$1(d){return d.a===this.a},
$S:z+42}
A.fEZ.prototype={
$2(d,e){return A.avX(e.b)>A.avX(d.b)?e:d},
$S:z+146}
A.fF_.prototype={
$1(d){return d.a===this.a.a},
$S:z+13}
A.fF0.prototype={
$1(d){return d.a===this.a.b},
$S:z+8}
A.fBU.prototype={
$5(d,e,f,g,h){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=j.a
i.b=d
w=j.b
v=w.b
u=C.a4(v).k("cs<1,2>")
t=u.k("X<M.E>")
s=C.C(new C.X(new C.cs(v,u),new A.fBV(g),t),t.k("M.E"))
r=g==="ground"
q=r?B.u9:h
p=r?0.6:0.3
if(w.c>0){o=e.a7(0,B.hgx)
i.iD(A.aix(C.a([e,e.a7(0,B.heh),o],x.o),4),0.12,q,!1,p,8)
return}if(s.length!==0){n=A.aQs(j.c,D.d.gH(s).a,w)
w=A.oM(e,n,0.5)
v=n.a>0
m=w.a7(0,new A.r(v?0.5:-0.5,0.2,0.9))
w=e.a7(0,B.hlA)
if(j.d)v=0
else v=v?0.06:-0.06
l=A.aix(C.a([e,w,m,n.a7(0,new A.r(v,0,0.08)),n],x.o),5)
k=D.d.du(l,0,D.k.bh(l.length*0.8))
i.iD(k,0.12,q,!1,p,8)
if(!r)i.iD(D.d.fN(l,k.length-1),0.08639999999999999,B.u9,!1,0.6,8)}else{l=A.aix(C.a([e,e.a7(0,B.h9P),A.oM(e,f,0.6),f],x.o),5)
k=r?l:D.d.du(l,0,D.k.bh(l.length*0.86))
i.iD(k,0.12,q,!1,p,8)
if(!r)i.iD(D.d.fN(l,k.length-1),0.08639999999999999,B.u9,!1,0.6,8)}},
$S:z+110}
A.fBV.prototype={
$1(d){return d.b===this.a},
$S:565}
A.fmK.prototype={
$2(d,e){var w,v=this.a
v.b=d
w=A.Dz(e,0.9,6)
if(this.b)v.iD(w,0.2,B.Z7,!1,0.35,10)
this.c.push(D.d.gam(w))},
$S:z+112}
A.h2v.prototype={
$1(d){return d.a===this.a},
$S:z+39}
A.fo8.prototype={
$6$taped(d,e,f,g,h,i){var w,v,u,t=this.a
t.e=0.9
t.b=d
w=this.b
v=w.a+e*0.75
u=w.b+f
w=w.c-0.45
t.aD(new A.r(v,u,w),B.hni,h,0.7)
t.cJ(new A.r(v,u,w),new A.r(v+e*0.22,u,w),0.17,g,0.9,12)
t.aF(new A.r(v+e*0.23,u,w),B.hje,B.y_)
if(i)t.aD(new A.r(v+e*0.05,u,w),B.hj_,D.bs,0.2)},
$5(d,e,f,g,h){return this.$6$taped(d,e,f,g,h,!1)},
$S:1801}
A.ftK.prototype={
$5(d,e,f,g,h){var w=new A.ftL(this.a,d,Math.cos(h),Math.sin(h),e),v=-f/2,u=-g/2,t=f/2,s=g/2
this.b.xt(w.$2(v,u),w.$2(t,u),w.$2(t,s),w.$2(v,s),B.aiK,B.hO)},
$4(d,e,f,g){return this.$5(d,e,f,g,0)},
$S:1802}
A.ftL.prototype={
$2(d,e){var w=this,v=w.a,u=w.c,t=w.d
return new A.r(v.a+w.b+d*u-e*t,v.b+w.e+d*t+e*u,v.c+0.5+0.012)},
$S:z+18}
A.ftJ.prototype={
$2(d,e){var w=this.b
return this.a.dq(w.a7(0,new A.r(d,e,0.5)),w.a7(0,new A.r(d,e,0.512)),0.065,B.aiK,12)},
$S:188}
A.ftI.prototype={
$2(d,e){var w=this.a
w.$4(d,e,0.075,0.3)
w.$4(d+0.09,e-0.115,0.2,0.075)},
$S:188}
A.fAw.prototype={
$5(d,e,f,g,h){var w,v,u,t=this.a
t.e=0.9
t.b=d
w=this.b
v=w.a+e
u=w.b+f
w=w.c
t.cJ(new A.r(v,u,w+0.43),new A.r(v,u,w+0.78),0.3,g,0.9,14)
w+=0.79
t.aF(new A.r(v,u,w),B.hd5,B.y_)
t.aF(new A.r(v,u,w),B.hh4,B.y_)},
$S:1803}
A.fGp.prototype={
$2(d,e){var w
if(d==="ground")w=y.t
else w=e.a===25?y.T:"A double-pole switch has two LINE screws on top (power in) and two LOAD screws on the bottom (power out to the heater). Each leg goes straight down the same side: left leg on the left screws, right leg on the right ones."
return w},
$S:z+2}
A.fGq.prototype={
$2(d,e){var w
if(d==="ground")w=y.t
else if(e.a===25)w=y.T
else w=d==="common"?"The COMMON wire does not go on a traveler screw. It goes on the odd-coloured COMMON screw.":"The travelers go on the two brass TRAVELER screws. The COMMON screw is for the black power wire only."
return w},
$S:z+2}
A.fGr.prototype={
$2(d,e){var w
if(d==="ground")w=y.t
else w=e.a===25?"A traveler never goes on the green ground screw.":"A four-way has a pair of screws for the travelers coming IN (top) and a pair for the travelers going OUT (bottom). Do not mix the two pairs."
return w},
$S:z+2}
A.fGs.prototype={
$2(d,e){var w
switch(d){case"ground":w=y.t
break
case"neutral":w="The white neutral wire goes on the silver NEUTRAL screw only."
break
default:if(e.a===25)w=y.T
else w=d==="line"?"The wire from the panel is the LINE: it goes on the LINE screw.":"The wire to the light is the LOAD: it goes on the LOAD screw."
break}return w},
$S:z+2}
A.fGt.prototype={
$2(d,e){var w
if(d==="ground")w=y.t
else if(e.a===25)w=y.T
else w=d==="feed"?"The feed goes on the FEED screw, where the two switches are joined.":"The wires to the lights go on the separate screws, one for each switch."
return w},
$S:z+2}
A.fGu.prototype={
$2(d,e){var w,v=y.T
switch(d){case"ground":w=y.t
break
case"neutral":w="The white neutral wire goes on a SILVER screw."
break
case"always":w=e.a===25?v:"The always-hot wire goes on the BOTTOM brass screw. The top one is for the switched wire."
break
default:w=e.a===25?v:"The switched hot wire (red) goes on the TOP brass screw."
break}return w},
$S:z+2}
A.fGv.prototype={
$2(d,e){var w
switch(d){case"ground":w=y.t
break
case"neutral":w=y.I
break
default:w=e.a===25?y.T:y.S
break}return w},
$S:z+2}
A.fGw.prototype={
$2(d,e){return d==="neutral"?y.I:"The black and red hot wires go on the two brass screws, X and Y."},
$S:z+2}
A.fGx.prototype={
$2(d,e){var w
if(d==="ground")w=y.t
else w=e.a===25?y.T:"Both hot wires go on the two brass screws."
return w},
$S:z+2}
A.fGy.prototype={
$2(d,e){var w
switch(d){case"isoground":w="The isolated ground wire only goes on the green screw with the orange triangle."
break
case"neutral":w=y._
break
default:w=e.a===25?"A hot wire never goes on the ground screw.":y.u
break}return w},
$S:z+2}
A.fGd.prototype={
$2(d,e){return A.fmw(d,e,!0)},
$S:z+2}
A.fGe.prototype={
$2(d,e){return A.fmw(d,e,!1)},
$S:z+2}
A.fGf.prototype={
$2(d,e){return A.fmw(d,e,!0)},
$S:z+2}
A.fGg.prototype={
$2(d,e){return A.fmw(d,e,!1)},
$S:z+2}
A.fGh.prototype={
$2(d,e){var w
switch(d){case"ground":w=y.t
break
case"neutral":w=y._
break
default:w=e.a===25?y.T:y.u
break}return w},
$S:z+2}
A.fGi.prototype={
$2(d,e){var w
switch(d){case"neutral":w="The white neutral wire goes on the MIDDLE terminal, the one with the ground strap."
break
case"hot1":w=y.J
break
default:w="The red wire goes on the RIGHT terminal."
break}return w},
$S:z+2}
A.fGj.prototype={
$2(d,e){var w
switch(d){case"ground":w="The green ground wire goes on the frame screw, where the strap was."
break
case"neutral":w="The white neutral wire goes on the MIDDLE terminal."
break
case"hot1":w=y.J
break
default:w="The red wire goes on the RIGHT terminal."
break}return w},
$S:z+2}
A.fBD.prototype={
$1(d){return d.a===this.a},
$S:z+32}
A.fBE.prototype={
$0(){return B.anG},
$S:z+124}
A.h2s.prototype={
$1(d){var w=d>60?62:99
return Math.min(d*0.5625,w)},
$S:5}
A.h2p.prototype={
$1(d){return d>40?30+d/2:58},
$S:5}
A.h2q.prototype={
$2(d,e){return D.k.aR(d.a,e.a)},
$S:1804}
A.h2r.prototype={
$2(d,e){var w=this.a
if(e-d>w.a-w.b){w.b=d
w.a=e}},
$S:188}
A.bVb.prototype={
$1(d){return d},
$S:97}
A.bVa.prototype={
$1(d){return B.f9o.q(0,d.b)},
$S:z+5}
A.bVM.prototype={
$1(d){return d.a==="Jobs"},
$S:z+60}
A.bVN.prototype={
$1(d){return new A.ow(!1,"back",d,5)},
$S:z+133}
A.bVO.prototype={
$4(d,e,f,g){return!D.d.aX(this.a.x,new A.bVP(d,f,e,g))},
$2(d,e){return this.$4(d,e,340,270)},
$3(d,e,f){return this.$4(d,e,f,270)},
$S:1805}
A.bVP.prototype={
$1(d){var w=this,v=d.b
return!D.d.q(B.a5Y,v)&&!D.d.q(B.Ip,v)&&Math.abs(d.c-w.a)<w.b&&Math.abs(d.d-w.c)<w.d},
$S:z+5}
A.bVQ.prototype={
$4(d,e,f,g){var w,v,u,t,s,r,q,p,o,n
for(w=this.a,v=w.length,u=f/2+90,t=g/2+20,s=0;s<v;++s){r=w[s]
if(Math.abs(r.c-d)<u){q=r.d
p=q>e?70:30
p=Math.abs(q-e)<t+p
q=p}else q=!1
if(q)return!1}for(w=this.b.x,v=w.length,s=0;s<w.length;w.length===v||(0,C.J)(w),++s){o=w[s]
u=o.b
if(D.d.q(B.Sw,u)||u==="roundabout"||u==="rug"||u==="flowers")continue
n=B.hJ.h(0,u)
if(Math.abs(o.c-d)<(f+n.c)/2+300){u=o.d
t=n.d
q=u>e?280:220
q=Math.abs(u-e)<(g+t)/2+q
u=q}else u=!1
if(u)return!1}return!0},
$S:557}
A.bVU.prototype={
$4(d,e,f,g){var w,v,u,t,s,r,q,p,o,n,m,l,k,j
if(Math.abs(d)>1150||e<-600||e>1450)return!1
for(w=this.a.x,v=w.length,u=f/2+40,t=g/2+40,s=0;s<w.length;w.length===v||(0,C.J)(w),++s){r=w[s]
q=r.b
if(q==="rug"||q==="flowers"||q==="pond")continue
p=B.hJ.h(0,q)
p.toString
o=(r.e&1)===1
n=o?p.d:p.c
m=o?p.c:p.d
if(Math.abs(r.c-d)<(f+n)/2+34&&Math.abs(r.d-e)<(g+m)/2+34)return!1
if(B.f9D.q(0,q)){l=r.e*3.141592653589793/2
q=r.c
o=Math.sin(l)
p=p.d/2+30
k=r.d
j=Math.cos(l)
if(Math.abs(q+o*p-d)<u&&Math.abs(k+j*p-e)<t)return!1}}return!0},
$S:557}
A.bVR.prototype={
$3(d,e,f){var w,v,u,t,s,r,q,p,o,n={},m=B.hJ.h(0,d)
m.toString
w=n.a=0
v=this.a
u=new A.bVT(n,v,d)
for(t=f.length,s=this.b,r=m.c,m=m.d;w<t;++w){q=f[w]
p=q.a
o=q.b
if(n.a>=e)return
if(s.$4(p,o,r,m))u.$2(p,o)}v=v.x
o=-500
for(;;){if(!(o<1400&&n.a<e))break
p=-1100
for(;;){if(!(p<=1100&&n.a<e))break
A:{if(D.d.aX(v,new A.bVS(d,p,o)))break A
if(s.$4(p,o,r,m))u.$2(p,o)}p+=110}o+=100}},
$S:1807}
A.bVT.prototype={
$2(d,e){var w=this.b,v=this.c
w.dB(0,v,d,e)
if(v==="ubstation")w.dB(0,"car",d+96,e+6);++this.a.a},
$S:188}
A.bVS.prototype={
$1(d){return d.b===this.a&&Math.abs(d.c-this.b)<420&&Math.abs(d.d-this.c)<420},
$S:z+5}
A.bVY.prototype={
$1(d){return d.gkT()},
$S:z+6}
A.bVX.prototype={
$1(d){var w=d.c
return(w==="bathroom"||w==="kitchen")&&d.gjW()},
$S:z+6}
A.bVW.prototype={
$1(d){var w=d.c
return w==="bathroom"||w==="kitchen"},
$S:z+6}
A.bVV.prototype={
$1(d){return d.gkT()&&d.gjW()},
$S:z+6}
A.egL.prototype={
$1(d){return!(d.gkT()&&d.gjW())},
$S:z+6}
A.egI.prototype={
$1(d){var w
switch(this.a.a.f){case"wiring":w=!d.gkT()
break
case"plumbing":w=!d.gjW()
break
default:w=!(d.gkT()&&d.gjW())
break}return w},
$S:z+6}
A.egJ.prototype={
$1(d){var w,v,u,t,s,r,q=this.a,p=q.ghx()
if(Date.now()<0){if(q.c!=null)q.m(new A.egH())
return}if(p==null||q.c==null||q.cx!=null||q.ew>0)return
w=q.d
w===$&&C.c()
v=w.d
v===$&&C.c()
u=p.bgt(w,v[w.e].a)
w=C.a([],x.s)
for(v=u.length,t=0;t<u.length;u.length===v||(0,C.J)(u),++t){s=u[t]
w.push(""+s.a+":"+D.k.V(s.c)+":"+D.k.V(s.d)+":"+s.x+":"+s.Q)}r=D.d.aN(w,"|")
if(q.aP==null&&r!==q.i3){q.i3=r
q.m(q.gj2())}w=p.f
if(w.length!==0&&D.d.gH(w)!==q.fy){w=D.d.gH(w)
q.fy=w
q.iM(w)}},
$S:11}
A.egH.prototype={
$0(){},
$S:0}
A.egK.prototype={
$1(d){var w,v=this.a
if(v.c==null)return
w=v.d
w===$&&C.c()
if(w.a.length!==0)v.iM(v.c3L())
else{w=v.a.f
if(w.length!==0){switch(w){case"wiring":w="This room needs wiring: press the Wiring button, or tap the red outlet or the light."
break
case"plumbing":w="This room needs plumbing: press the Plumbing button, or tap the toilet or the sink."
break
default:w="Walk through the house and fix what the signs say is wrong."
break}v.iM(w)}}},
$S:7}
A.efu.prototype={
$0(){var w=this.a
w.ax=this.b
w.ay=this.c},
$S:0}
A.efv.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.eft(w))},
$S:0}
A.eft.prototype={
$0(){return this.a.ax=null},
$S:0}
A.efw.prototype={
$0(){var w=this.a
w.r=this.b
w.Q=0
w.as=-1
w.at=0
w.iL()},
$S:0}
A.ee_.prototype={
$0(){var w=this.a,v=w.d
v===$&&C.c()
v.e=this.b
w.Q=0
w.as=-1
w.at=0
w.ax=null
w.iL()},
$S:0}
A.efY.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.d
w===$&&C.c()
u=w[u.e]
u.fy=!u.fy
v.iL()},
$S:0}
A.eeX.prototype={
$0(){return this.a.k3=!0},
$S:0}
A.eeY.prototype={
$0(){var w=this.a,v=this.b
w.Q=v-100
w.at=v
w.iL()},
$S:0}
A.eeZ.prototype={
$0(){var w=this.a,v=this.b
w.as=v-300
w.at=v},
$S:0}
A.ef_.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&C.c()
w=t.d
w===$&&C.c()
v=this.b
if(!w[t.e].at.W(0,v)){t=u.d
w=t.d
w===$&&C.c()
w[t.e].at.J(0,v)}u.iL()},
$S:0}
A.ef0.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.d
w===$&&C.c()
w[u.e].p2=!0
v.iL()},
$S:0}
A.edt.prototype={
$1(d){var w,v,u,t,s,r=this,q=null,p=C.d("Door to "+r.b,q,q,q,q,q,q,D.dg,q,q,q),o=r.a,n=o.d
n===$&&C.c()
w=n.d
w===$&&C.c()
v=r.c
u=C.d(w[n.e].at.q(0,v)?"The door is open.":"The door is closed.",q,q,q,q,q,q,D.mu,q,q,q)
n=o.d
w=n.d
w===$&&C.c()
t=C.Y(w[n.e].at.q(0,v)?B.bNV:B.bO6,q,q,q,q,q)
n=o.d
w=n.d
w===$&&C.c()
s=x.p
return C.bm(!0,new C.D(D.bR,C.x(C.a([p,D.aw,u,D.af,C.bW(D.bG,C.a([C.dh(t,C.d(w[n.e].at.q(0,v)?"Close the door":"Open the door",q,q,q,q,q,q,q,q,q,q),new A.edr(o,d,v),q),C.es(D.aqT,B.fJS,new A.eds(o,d,v,r.d),q)],s),D.br,q,10,10)],s),D.E,q,D.e,D.O,0,D.p),q),!0,!1,D.ag,!0,!0)},
$S:25}
A.edr.prototype={
$0(){var w,v,u
C.a6(this.b,!1).O(null)
w=this.a
v=this.c
w.m(new A.edq(w,v))
w=w.d
w===$&&C.c()
u=w.d
u===$&&C.c()
A.fD(u[w.e].at.q(0,v)?700:450,70,0.25,"tri")},
$S:0}
A.edq.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&C.c()
w=t.d
w===$&&C.c()
v=this.b
if(!w[t.e].at.W(0,v)){t=u.d
w=t.d
w===$&&C.c()
w[t.e].at.J(0,v)}u.iL()},
$S:0}
A.eds.prototype={
$0(){var w,v,u=this
C.a6(u.b,!1).O(null)
w=u.a
v=u.c
w.m(new A.edo(w,v))
A.fD(700,70,0.25,"tri")
C.bP(D.ma,new A.edp(w,v,u.d),x.P)},
$S:0}
A.edo.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.d
w===$&&C.c()
w[u.e].at.J(0,this.b)
v.iL()},
$S:0}
A.edp.prototype={
$0(){var w=this.a
if(w.c==null)return
w.m(new A.edn(w,this.b))
w.AT(this.c)},
$S:12}
A.edn.prototype={
$0(){var w,v=this.a.d
v===$&&C.c()
w=v.d
w===$&&C.c()
return w[v.e].at.W(0,this.b)},
$S:0}
A.edC.prototype={
$0(){return this.a.er=!0},
$S:0}
A.edD.prototype={
$0(){var w=this.a
w.f3=!0
w.fD=!1
w.R8=!w.p4},
$S:0}
A.edE.prototype={
$0(){var w=this.a
w.R8=w.f3=!1},
$S:0}
A.eeQ.prototype={
$2(d,e){var w=null,v=D.w.j(0.55),u=C.L(D.bV,D.r,1)
return C.aA(w,C.p(w,C.Y(d,D.c,w,w,w,22),D.f,w,w,new C.o(v,w,u,w,w,w,D.a7),w,44,w,D.GC,w,w,w,44),D.y,!1,w,new A.eeS(this.a),w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,e,w,w,w,w,w,w,!1,D.a4)},
$S:455}
A.eeS.prototype={
$0(){var w=this.a
return w.m(new A.eeR(w))},
$S:0}
A.eeR.prototype={
$0(){return this.a.fD=!0},
$S:0}
A.eeT.prototype={
$0(){var w=this.a
return w.m(new A.eeP(w))},
$S:0}
A.eeP.prototype={
$0(){return this.a.fD=!1},
$S:0}
A.eeU.prototype={
$0(){var w=this.a
return w.p4?w.a30():w.m(new A.eeO(w))},
$S:0}
A.eeO.prototype={
$0(){return this.a.R8=!0},
$S:0}
A.eeV.prototype={
$0(){var w=this.a
return w.m(new A.eeN(w))},
$S:0}
A.eeN.prototype={
$0(){var w=this.a
return w.jS=!w.jS},
$S:0}
A.eeW.prototype={
$0(){var w=this.a
return w.m(new A.eeM(w))},
$S:0}
A.eeM.prototype={
$0(){return this.a.al=!0},
$S:0}
A.ed3.prototype={
$0(){var w=this.a
return w.m(new A.ed4(w))},
$S:0}
A.ed4.prototype={
$0(){return this.a.al=!1},
$S:0}
A.edO.prototype={
$2(d,e){var w=null,v=D.w.j(0.55),u=C.L(D.bV,D.r,1)
return C.aA(w,C.p(w,C.Y(d,D.c,w,w,w,20),D.f,w,w,new C.o(v,w,u,w,w,w,D.a7),w,40,w,D.iK,w,w,w,40),D.y,!1,w,new A.edQ(this.a),w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,e,w,w,w,w,w,w,!1,D.a4)},
$S:455}
A.edQ.prototype={
$0(){var w=this.a
return w.m(new A.edP(w))},
$S:0}
A.edP.prototype={
$0(){return this.a.fD=!0},
$S:0}
A.edR.prototype={
$0(){var w=this.a
return w.m(new A.edN(w))},
$S:0}
A.edN.prototype={
$0(){return this.a.fD=!1},
$S:0}
A.edS.prototype={
$0(){var w,v,u=this.a
u.m(new A.edM(u))
w=u.d
w===$&&C.c()
v=w.d
v===$&&C.c()
if(v[w.e].c!=="outside")u.yl()},
$S:0}
A.edM.prototype={
$0(){return this.a.er=!1},
$S:0}
A.edT.prototype={
$0(){var w=this.a
return w.m(new A.edL(w))},
$S:0}
A.edL.prototype={
$0(){var w=this.a
return w.ac=w.ac===1?3:1},
$S:0}
A.edU.prototype={
$0(){var w=this.a
return w.m(new A.edK(w))},
$S:0}
A.edK.prototype={
$0(){var w=this.a
return w.jS=!w.jS},
$S:0}
A.edV.prototype={
$0(){var w=this.a
return w.m(new A.edJ(w))},
$S:0}
A.edJ.prototype={
$0(){return this.a.al=!0},
$S:0}
A.edW.prototype={
$0(){var w=this.a
return w.p4?w.a30():w.m(new A.edI(w))},
$S:0}
A.edI.prototype={
$0(){return this.a.R8=!0},
$S:0}
A.efW.prototype={
$2$mine(d,e){var w=null,v=e?D.a9:D.a6,u=e?D.bm:D.ec,t=C.n(18)
return new C.bL(v,w,w,C.p(w,C.d(d,w,w,w,w,w,w,B.aV_,w,w,w),D.f,w,B.ae_,new C.o(u,w,w,t,w,w,D.n),w,w,w,D.cv,D.iu,w,w,w),w)},
$1(d){return this.$2$mine(d,!1)},
$S:1808}
A.efX.prototype={
$1(d){var w=this,v=null,u=w.b,t=u.b,s=x.p,r=C.A(C.a([C.h7(u.e.c,v,C.d(t[0],v,v,v,v,v,v,D.ix,v,v,v),v,18),D.at,C.d(t,v,v,v,v,v,v,D.kh,v,v,v),D.b3,B.fVB],s),D.m,v,D.e,D.i,0,v,v),q=w.c,p=w.d,o=q.$1("Hi, it's "+t+". "+p.d),n=w.e,m="Please come to "+n,l=w.a
return C.bm(!0,new C.D(Ad.yE,C.x(C.a([r,Aa.NB,o,q.$1(p.c==="power"?m+" and fix the wiring. I can't stay in the dark.":m+" and fix the leak before it floods."),q.$1("I'll pay "+p.e+" points. Thank you!"),q.$2$mine("On my way!",!0),D.an,C.bW(D.bG,C.a([C.dh(B.bYF,C.d("Show me where "+t+" is",v,v,v,v,v,v,v,v,v,v),new A.efU(l,d,p,u),v),C.dh(B.c0z,C.d("Go and fix it ("+n+")",v,v,v,v,v,v,v,v,v,v),new A.efV(l,d,w.f,n),v)],s),D.br,v,8,10)],s),D.E,v,D.e,D.O,0,D.p),v),!0,!1,D.ag,!0,!0)},
$S:25}
A.efU.prototype={
$0(){var w,v,u,t,s=this
C.a6(s.b,!1).O(null)
w=s.a
v=w.fr
u=C.T(v).k("X<1>")
t=C.C(new C.X(v,new A.efT(s.c),u),u.k("M.E"))
if(t.length!==0){v=w.d
v===$&&C.c()
u=v.d
u===$&&C.c()
v=u[v.e].c==="outside"}else v=!1
if(v){v=w.e
v===$&&C.c()
v.A0(160,new A.r(D.d.gH(t).c,30,D.d.gH(t).d))}w.ei(s.d.b+" is the one with the phone sign.",!0)},
$S:0}
A.efT.prototype={
$1(d){return d.a===this.a.b},
$S:z+15}
A.efV.prototype={
$0(){var w,v=this
C.a6(v.b,!1).O(null)
w=v.a
if(w.aQ)w.a31()
w.er=!1
w.AT(v.c)
w.ei("You are in "+v.d+". Fix the problem with the Wiring or Plumbing button.",!0)},
$S:0}
A.eed.prototype={
$0(){var w=this.a
w.x=!0
w.z=!1
w.r="ceiling"
w.iL()},
$S:0}
A.ec2.prototype={
$1(d){return d.c==="outside"},
$S:z+6}
A.ego.prototype={
$1(d){return d.c==="outside"},
$S:z+6}
A.ect.prototype={
$0(){},
$S:0}
A.ee8.prototype={
$0(){var w=this.a
return w.m(new A.ee7(w))},
$S:0}
A.ee7.prototype={
$0(){return this.a.id=!1},
$S:0}
A.ee9.prototype={
$0(){var w=this.a
return w.m(new A.ee6(w))},
$S:0}
A.ee6.prototype={
$0(){return this.a.id=!1},
$S:0}
A.egp.prototype={
$1(d){var w=this.b
return d.d===this.a.arg(w.f,w.r)},
$S:z+52}
A.egn.prototype={
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
return D.k.aR((m-j)*(m-w)+(v-u)*(v-t),(s-r)*(s-q)+(p-o)*(p-l))},
$S:z+20}
A.efA.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=d.a==="tank"?A.hcD(l.a.c6.b):d.e,i=l.b
i=i==null?k:i.r
w=(i==null?0:i)>=j
i=l.c
v=i?112:1/0
u=i?8:12
t=i?8:10
s=D.c.j(0.07)
r=C.n(16)
q=C.L(w?D.bs.j(0.5):D.bB,D.r,1)
p=d.b
o=d.c
n=d.d
if(i){i=C.d(p,k,k,k,k,k,k,D.xc,k,k,k)
o=C.d(o,k,1,D.a2,k,k,k,D.KI,D.K,k,k)
n=C.d(n,k,2,D.a2,k,k,k,B.fr7,D.K,k,k)
p=w?D.bs:D.bB
m=C.n(12)
i=C.x(C.a([i,D.bH,o,n,D.fK,C.p(k,C.d(""+j+" \u2b50",k,k,k,k,k,k,C.l(k,k,w?D.w:D.bV,k,k,k,k,k,k,k,k,13,k,k,D.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),D.f,k,k,new C.o(p,k,k,m,k,k,D.n),k,k,k,k,D.GF,k,k,k)],x.p),D.m,k,D.e,D.O,0,D.p)}else{i=C.d(p,k,k,k,k,k,k,D.n8,k,k,k)
p=x.p
n=C.E(C.x(C.a([C.d(o,k,k,k,k,k,k,D.nQ,k,k,k),C.d(n,k,k,k,k,k,k,B.aUq,k,k,k)],p),D.E,k,D.e,D.i,0,D.p),1)
o=w?D.bs:D.bB
m=C.n(14)
i=C.A(C.a([i,D.at,n,C.p(k,C.d(""+j+" \u2b50",k,k,k,k,k,k,C.l(k,k,w?D.w:D.bV,k,k,k,k,k,k,k,k,k,k,k,D.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),D.f,k,k,new C.o(o,k,k,m,k,k,D.n),k,k,k,k,D.ny,k,k,k)],p),D.m,k,D.e,D.i,0,k,k)}return C.aA(k,C.p(k,i,D.f,k,k,new C.o(s,k,q,r,k,k,D.n),k,k,k,D.cv,new C.Q(u,t,u,t),k,k,v),D.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new A.efB(l.a,d),k,k,k,k,k,k,!1,D.a4)},
$S:z+62}
A.efB.prototype={
$0(){return this.a.aQn(this.b)},
$S:0}
A.efz.prototype={
$2(d,e){var w,v,u,t=null,s=x.p,r=C.a([new C.D(B.bA7,C.d(d,t,t,t,t,t,t,B.fxp,t,t,t),t)],s)
if(this.a){s=C.a([],s)
for(w=e.length,v=this.b,u=0;u<w;++u)s.push(v.$1(e[u]))
r.push(C.bW(D.bG,s,D.br,t,0,8))}else for(s=e.length,w=this.b,u=0;u<s;++u)r.push(w.$1(e[u]))
return C.x(r,D.E,t,D.e,D.O,0,D.p)},
$S:z+63}
A.efy.prototype={
$0(){var w=this.a
return w.m(new A.efx(w))},
$S:0}
A.efx.prototype={
$0(){return this.a.k2=!1},
$S:0}
A.eex.prototype={
$2(d,e){var w=null,v=e.j(0.2),u=C.n(10)
return C.p(w,C.d(d,w,w,w,w,w,w,C.l(w,w,e,w,w,w,w,w,w,w,w,11.5,w,w,D.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),D.f,w,w,new C.o(v,w,w,u,w,w,D.n),w,w,w,w,D.fT,w,w,w)},
$S:1809}
A.eey.prototype={
$1(d){return B.hJ.h(0,d.b).a},
$S:z+64}
A.eeu.prototype={
$1(d){var w,v,u,t,s=this,r=null,q=d.c,p=A.z_(q),o=D.k.V(Math.sqrt(Math.pow(p.a-s.b,2)+Math.pow(p.b-s.c,2))/10),n=D.c.j(0.07),m=C.n(16),l=C.L(D.bB,D.r,1),k=d.b,j=C.d(A.Lv(k).b,r,r,r,r,r,r,D.n8,r,r,r),i=s.d
k=C.d(d.w?"\ud83d\ude91 "+A.Lv(k).c+": "+C.w(i.$1(q))+" \u2192 "+C.w(i.$1(d.d))+" (somebody was run over)":A.Lv(k).c+": "+C.w(i.$1(q))+" \u2192 a house",r,r,r,r,r,r,B.aVX,r,r,r)
w=s.e
v=w.$2(""+d.e+" points",D.bs)
u=w.$2(""+o+" m to the shop",D.aJ)
p=A.z_(q)
t=A.z_(d.d)
q=x.p
w=C.E(C.x(C.a([k,D.cU,C.bW(D.bG,C.a([v,u,w.$2(""+D.k.V(Math.sqrt(Math.pow(p.a-t.a,2)+Math.pow(p.b-t.b,2))/10)+" m trip",D.b9)],q),D.br,r,0,6)],q),D.E,r,D.e,D.i,0,D.p),1)
k=s.f!=null
i=k?r:new A.eew(s.a,s.r,d,i)
v=k?D.bB:D.bs
u=C.n(14)
return C.p(r,C.A(C.a([j,D.at,w,D.ae,C.aA(r,C.p(r,C.d("Take",r,r,r,r,r,r,C.l(r,r,k?D.bV:D.w,r,r,r,r,r,r,r,r,r,r,r,D.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),D.f,r,r,new C.o(v,r,r,u,r,r,D.n),r,r,r,r,D.iu,r,r,r),D.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,i,r,r,r,r,r,r,!1,D.a4)],q),D.m,r,D.e,D.i,0,r,r),D.f,r,r,new C.o(n,r,l,m,r,r,D.n),r,r,r,D.cv,D.bU,r,r,r)},
$S:z+65}
A.eew.prototype={
$0(){var w=this,v=w.c,u=w.a
if(w.b.d0m(0,v,u.CW.gf_()/1000)){u.m(new A.eev(u))
if(!u.aQ)u.Sk()
u.ei(A.Lv(v.b).b+" Order taken: go to the "+w.d.$1(v.c).toLowerCase()+" (follow the yellow line), then to the house.",!0)}},
$S:0}
A.eev.prototype={
$0(){return this.a.go=!1},
$S:0}
A.ees.prototype={
$0(){var w=this.a
return w.m(new A.eer(w))},
$S:0}
A.eer.prototype={
$0(){return this.a.go=!1},
$S:0}
A.eet.prototype={
$0(){var w=this.a
return w.m(new A.eeq(w,this.b))},
$S:0}
A.eeq.prototype={
$0(){this.b.a1(0)
this.a.ei("Order given back.",!0)},
$S:0}
A.edX.prototype={
$0(){return this.a.k3=!1},
$S:0}
A.edY.prototype={
$0(){return this.a.k3=!1},
$S:0}
A.efq.prototype={
$0(){return A.fD(1175,220,0.3,"tri")},
$S:0}
A.edA.prototype={
$0(){var w=this.a
return w.m(new A.edz(w))},
$S:0}
A.edz.prototype={
$0(){return this.a.k3=!1},
$S:0}
A.edB.prototype={
$0(){return this.a.bVO(this.b)},
$S:0}
A.edm.prototype={
$4(d,e,f,g){var w=-d,v=this.a
return 0.5*(2*e+(w+f)*v+(2*d-5*e+4*f-g)*v*v+(w+3*e-3*f+g)*v*v*v)},
$S:271}
A.eee.prototype={
$1(d){return d.c==="outside"},
$S:z+6}
A.efC.prototype={
$0(){var w=this.a
w.R8=!1
w.y1=null
w.p4=!0
w.rx=this.b
w.ry=-1},
$S:0}
A.edy.prototype={
$2(d,e){return d[D.o.F(e,0,d.length-1)]},
$S:z+66}
A.efO.prototype={
$0(){var w=this.a
w.p4=!1
w.aP=null
w.iL()},
$S:0}
A.edw.prototype={
$4(d,e,f,g){var w=null,v=D.c.j(0.07),u=C.n(16),t=C.L(D.bB,D.r,1),s=x.p
return C.aA(w,C.p(w,C.A(C.a([C.d(d,w,w,w,w,w,w,D.n8,w,w,w),D.be,C.E(C.x(C.a([C.d(e,w,w,w,w,w,w,D.hz,w,w,w),C.d(f,w,w,w,w,w,w,D.hy,w,w,w)],s),D.E,w,D.e,D.i,0,D.p),1),A6.PK],s),D.m,w,D.e,D.i,0,w,w),D.f,w,w,new C.o(v,w,t,u,w,w,D.n),w,w,w,D.jD,D.bh,w,w,w),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new A.edx(this.a,g),w,w,w,w,w,w,!1,D.a4)},
$S:1810}
A.edx.prototype={
$0(){return this.a.cB0(this.b)},
$S:0}
A.edv.prototype={
$0(){var w=this.a
return w.m(new A.edu(w))},
$S:0}
A.edu.prototype={
$0(){return this.a.R8=!1},
$S:0}
A.ee3.prototype={
$1(d){return d.c==="outside"},
$S:z+6}
A.efN.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&C.c()
w=t[this.b]
v=u.at.h(0,w.a)
if(v==null||!A.h89(w.b,v.a))return 0
return v.b.c<2?1:2},
$S:88}
A.egC.prototype={
$1(d){return d},
$S:97}
A.ed5.prototype={
$1(d){return d},
$S:97}
A.ee0.prototype={
$0(){var w=A.cuJ(0,null,!1,this.a.a*13+5+this.b.f,!0)
w.amJ()
return w},
$S:z+67}
A.ee1.prototype={
$1(d){return A.cjw(!1,!1,this.a,!1)},
$S:z+45}
A.ee2.prototype={
$1(d){return d.length!==0},
$S:3}
A.edG.prototype={
$0(){return new A.AG(C.U(x.S,x.N))},
$S:z+69}
A.edH.prototype={
$1(d){return new A.BH("light",this.a,null)},
$S:z+27}
A.eeg.prototype={
$1(d){return d.c==="outside"},
$S:z+6}
A.eeh.prototype={
$0(){return this.a.y1=this.b},
$S:0}
A.ecA.prototype={
$1(d){var w=null
return new C.bL(D.a6,w,w,C.p(w,C.d(d,w,w,w,w,w,w,B.aV_,w,w,w),D.f,w,B.ae_,B.b7J,w,w,w,D.cv,D.iu,w,w,w),w)},
$S:134}
A.ecz.prototype={
$5$primary(d,e,f,g,h){var w=null,v=h?f:f.j(0.14),u=C.n(16),t=C.L(f,D.r,1),s=C.Y(d,h?D.w:f,w,w,w,21)
return C.aA(w,C.p(w,C.A(C.a([s,D.ae,C.d(e,w,w,w,w,w,w,C.l(w,w,h?D.w:D.c,w,w,w,w,w,w,w,w,14.5,w,w,D.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),D.m,w,D.bb,D.i,0,w,w),D.f,w,w,new C.o(v,w,t,u,w,w,D.n),w,48,w,D.jD,w,w,w,w),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,!1,D.a4)},
$4(d,e,f,g){return this.$5$primary(d,e,f,g,!1)},
$S:1811}
A.ecB.prototype={
$0(){var w=this.a
return w.m(new A.ecy(w))},
$S:0}
A.ecy.prototype={
$0(){return this.a.y1=null},
$S:0}
A.ecC.prototype={
$0(){var w,v,u=this.a
u.m(new A.ecx(u))
if(!u.aQ)u.Sk()
w=u.aI
if(w!=null){v=u.e
v===$&&C.c()
v.D8(new A.r(w.f,30,w.r))}u.ei("Follow the yellow line on the ground to get there.",!0)},
$S:0}
A.ecx.prototype={
$0(){return this.a.y1=null},
$S:0}
A.ecD.prototype={
$0(){var w,v=this.a
v.m(new A.ecw(v))
if(v.fE==null){v.fE=this.b
v.hE=0}w=this.b
v.SE(w.a)
w=w.c
if(w==="power")w="You are at the house. Walk in and onto the red mat at the breaker panel."
else w=w==="sick"?"You are at the hospital. Walk in and onto the desk.":y.Y
v.ei(w,!0)},
$S:0}
A.ecw.prototype={
$0(){return this.a.y1=null},
$S:0}
A.ecE.prototype={
$0(){var w=this.a
w.m(new A.ecv(w,this.b))
w.ei("Saved on your waiting list.",!0)},
$S:0}
A.ecv.prototype={
$0(){var w,v=this.a
v.y1=null
w=this.b
if(v.fE===w)v.fE=null
v=v.iS
if(!D.d.q(v,w))v.push(w)},
$S:0}
A.ecF.prototype={
$0(){var w=this.a
return w.m(new A.ecu(w))},
$S:0}
A.ecu.prototype={
$0(){return this.a.y2=!1},
$S:0}
A.ed1.prototype={
$1(d){var w=null
return C.bx(D.ri,new C.a5(w,C.aG(d,w,x.w).w.a.b*0.82,new A.aq7(this.a,w),w),D.aq)},
$S:1812}
A.ed2.prototype={
$0(){var w=this.a
w.aAG()
w.iL()},
$S:0}
A.efp.prototype={
$1(d){return new C.e_(new A.efn(this.a,this.b,this.c),null)},
$S:21}
A.efn.prototype={
$2(d,e){var w,v,u,t,s=null,r=new A.efo(this.a,e),q=this.b,p=q.a,o=C.d(p.b+" "+q.gaEC(0),s,s,s,s,s,s,U.tv,s,s,s)
p=C.d(p.f,s,s,s,s,s,s,D.xd,s,s,s)
w=C.d("Now: "+q.gUE()+"\nFood "+D.k.V(100-q.b)+"%   Health "+D.k.V(q.c)+"%   Home "+D.k.V(q.d)+"%",s,s,s,s,s,s,B.aVs,s,s,s)
v=this.c
u=x.p
t=C.a([r.$2("\ud83c\udf5e Feed",new A.efk(v,q))],u)
if(q.e)t.push(r.$3$col("\ud83d\udc8a Medicine",new A.efl(v,q),D.bt))
if(q.e||q.c<60)t.push(r.$3$col("\ud83c\udfe5 Hospital",new A.efm(v,q),D.c0))
return C.bm(!0,new C.D(D.bR,C.x(C.a([o,p,D.P,w,D.af,C.bW(D.bG,t,D.br,s,8,8)],u),D.E,s,D.e,D.O,0,D.p),s),!0,!1,D.ag,!0,!0)},
$S:85}
A.efo.prototype={
$3$col(d,e,f){var w=null,v=f.j(0.22),u=C.n(12),t=C.L(f,D.r,1)
return C.aA(w,C.p(w,C.d(d,w,w,w,w,w,w,C.l(w,w,f,w,w,w,w,w,w,w,w,13,w,w,D.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),D.f,w,w,new C.o(v,w,t,u,w,w,D.n),w,w,w,w,A3.wg,w,w,w),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new A.efj(this.a,e,this.b),w,w,w,w,w,w,!1,D.a4)},
$2(d,e){return this.$3$col(d,e,D.az)},
$S:1813}
A.efj.prototype={
$0(){var w,v=this.b.$0()
this.c.$1(new A.efi())
w=this.a
w.m(w.gj2())
w.iM(v)},
$S:0}
A.efi.prototype={
$0(){},
$S:0}
A.efk.prototype={
$0(){return this.a.bgh(this.b)},
$S:22}
A.efl.prototype={
$0(){return this.a.aLS(this.b)},
$S:22}
A.efm.prototype={
$0(){return this.a.aEi(this.b)},
$S:22}
A.ef6.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=x.p,k=C.a([],l)
for(w=D.d.gag(B.a4F),v=new C.eJ(w,new A.ef3()),u=this.a,t=this.b;v.C();){s=w.gR(0)
r=D.c.j(0.08)
q=new C.aP(12,12)
p=u.d
p===$&&C.c()
o=p.d
o===$&&C.c()
n=new C.ay(o[p.e].fx.h(0,t)===s.a?D.az:D.aW,1,D.r,-1)
k.push(C.aA(m,C.p(m,C.d(s.c+" "+s.b,m,m,m,m,m,m,D.KI,m,m,m),D.f,m,m,new C.o(r,m,new C.bG(n,n,n,n),new C.bg(q,q,q,q),m,m,D.n),m,m,m,m,D.eD,m,m,m),D.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new A.ef4(u,d,t,s),m,m,m,m,m,m,!1,D.a4))}w=u.d
w===$&&C.c()
v=w.d
v===$&&C.c()
if(v[w.e].fx.h(0,t)!=null)k.push(C.aA(m,C.p(m,B.fSP,D.f,m,m,new C.o(D.eo,m,m,C.n(12),m,m,D.n),m,m,m,m,D.eD,m,m,m),D.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new A.ef5(u,d,t),m,m,m,m,m,m,!1,D.a4))
return C.bm(!0,new C.D(D.bR,C.x(C.a([B.fOR,D.X,C.bW(D.bG,k,D.br,m,8,8)],l),D.E,m,D.e,D.O,0,D.p),m),!0,!1,D.ag,!0,!0)},
$S:25}
A.ef3.prototype={
$1(d){return!(d.d>70||d.e)},
$S:z+32}
A.ef4.prototype={
$0(){var w,v,u,t=this
C.a6(t.b,!1).O(null)
w=t.a
v=t.d
w.m(new A.ef2(w,t.c,v))
u=v.d>0||v.e
v=v.b
w.iM(u?v+" is on and playing NGMY ads. Tap it to watch full screen.":v+" is plugged in and running.")
A.fD(820,70,0.25,"tri")},
$S:0}
A.ef2.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.d
w===$&&C.c()
w[u.e].fx.n(0,this.b,this.c.a)
v.iL()},
$S:0}
A.ef5.prototype={
$0(){C.a6(this.b,!1).O(null)
var w=this.a
w.m(new A.ef1(w,this.c))
w.iM("Unplugged.")},
$S:0}
A.ef1.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.d
w===$&&C.c()
w[u.e].fx.W(0,this.b)
v.iL()},
$S:0}
A.egm.prototype={
$1(d){return new C.e_(new A.egk(this.a),null)},
$S:21}
A.egk.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.a,k=new A.egl(l,e),j=l.d
j===$&&C.c()
w=j.d
w===$&&C.c()
j=C.d("TV in "+w[j.e].b,m,m,m,m,m,m,D.dg,m,m,m)
w=x.p
v=C.a([],w)
for(u=D.d.gag(B.a4F),t=new C.eJ(u,new A.egd());t.C();){s=u.gR(0)
r=s.b
q=l.d
p=q.d
p===$&&C.c()
q=p[q.e].k1===s.a?D.az:D.eR
v.push(k.$3$color(r,new A.ege(l,s),q))}j=C.a([j,D.X,C.bW(D.bG,v,D.br,m,8,8)],w)
if(l.d.a.length!==0){v=C.a([],w)
for(o=0;o<3;++o){u={}
t=B.dae[o]
u.a=null
n=t.a
u.a=n
s=l.d
r=s.d
r===$&&C.c()
s=r[s.e].p1===n?D.az:D.eR
v.push(k.$3$color(t.b,new A.egf(u,l),s))}D.d.v(j,C.a([B.fBM,D.an,C.bW(D.bG,v,D.br,m,8,8)],w))}j.push(D.X)
w=C.a([],w)
v=l.d
u=v.d
u===$&&C.c()
v=u[v.e]
if(v.k1!=null){v=v.p2?"\u23fb Turn this TV off":"\u23fb Turn this TV on"
w.push(k.$2(v,new A.egg(l)))}v=l.d
u=v.d
u===$&&C.c()
if(u[v.e].k1!=null&&v.a.length===0)w.push(k.$3$color("\ud83d\uddd1 Take it down",new A.egh(l),D.eo))
if(l.d.a.length===0)w.push(k.$3$color("\ud83d\udcfa A TV in every room, all on",new A.egi(l),D.cV))
if(l.d.a.length===0)w.push(k.$3$color("\u23fb All TVs off",new A.egj(l),D.bo))
j.push(C.bW(D.bG,w,D.br,m,8,8))
return C.bm(!0,new C.D(D.bR,C.x(j,D.E,m,D.e,D.O,0,D.p),m),!0,!1,D.ag,!0,!0)},
$S:85}
A.egl.prototype={
$3$color(d,e,f){var w=null,v=f.j(0.4),u=C.n(12),t=C.L(f,D.r,1)
return C.aA(w,C.p(w,C.d(d,w,w,w,w,w,w,Y.AF,w,w,w),D.f,w,w,new C.o(v,w,t,u,w,w,D.n),w,w,w,w,A3.wg,w,w,w),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new A.egc(this.a,e,this.b),w,w,w,w,w,w,!1,D.a4)},
$2(d,e){return this.$3$color(d,e,D.eR)},
$S:1814}
A.egc.prototype={
$0(){this.b.$0()
this.c.$1(new A.egb())
var w=this.a
w.m(w.gj2())},
$S:0}
A.egb.prototype={
$0(){},
$S:0}
A.egd.prototype={
$1(d){return d.d>0||d.e},
$S:z+32}
A.ege.prototype={
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
A.egf.prototype={
$0(){var w,v=this.b.d
v===$&&C.c()
w=v.d
w===$&&C.c()
return w[v.e].p1=this.a.a},
$S:0}
A.egg.prototype={
$0(){var w,v=this.a.d
v===$&&C.c()
w=v.d
w===$&&C.c()
v=w[v.e]
return v.p2=!v.p2},
$S:0}
A.egh.prototype={
$0(){var w,v=this.a.d
v===$&&C.c()
w=v.d
w===$&&C.c()
v=w[v.e]
v.k1=null
v.p2=!1},
$S:0}
A.egi.prototype={
$0(){var w,v,u,t=this.a.d
t===$&&C.c()
t=t.gr7()
w=t.length
v=0
for(;v<w;++v){u=t[v]
if(u.k1==null)u.k1="tv100"
if(u.c==="hall")if(u.k2==null)u.k2="tv100"
u.p2=!0}},
$S:0}
A.egj.prototype={
$0(){var w,v,u=this.a.d
u===$&&C.c()
u=u.gr7()
w=u.length
v=0
for(;v<w;++v)u[v].p2=!1},
$S:0}
A.eg8.prototype={
$1(d){return new C.e_(new A.eg6(this.a),null)},
$S:21}
A.eg6.prototype={
$2(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new A.eg7(),e=C.at(C.p(g,g,D.f,g,g,new C.o(D.aW,g,g,C.n(2),g,g,D.n),g,4,g,g,g,g,g,42),g,g,g),d=x.p,a0=C.A(C.a([C.p(g,H.aqV,D.f,g,g,new C.o(g,g,g,C.n(16),g,B.c5a,D.n),g,52,g,g,g,g,g,52),D.ev,B.bHD],d),D.m,g,D.e,D.i,0,g,g),a1=f.$1("Who walks the house"),a2=C.a([],d)
for(w=B.aIv.gdR(B.aIv),w=w.gag(w),v=x.s,u=x.N,t=x.ec,s=this.a;w.C();){r=w.gR(w)
q=$.ai5
p=r.a
q=q===p?D.aJ.j(0.18):D.c.j(0.06)
o=new C.aP(18,18)
n=$.ai5===p
m=n?D.aJ:D.bB
l=new C.ay(m,n?2:1,D.r,-1)
n=n?D.aJ:D.aW
m=r.b
k=C.d(D.d.gH(m.split(" ")),g,g,g,g,g,g,D.pO,g,g,g)
m=C.a(m.split(" "),v)
j=new C.is(m,1,g,t)
j.n4(m,1,g,u)
j=j.aN(0," ")
p=$.ai5===p?D.aJ:D.c
a2.push(new C.D(D.GC,C.aA(g,C.cV(g,C.x(C.a([new C.qB(k,n,g,20,g),D.an,C.d(j,g,1,D.a2,g,g,g,new C.G(!0,p,g,g,g,g,12.5,D.H,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g),g,g,g)],d),D.m,g,D.bb,D.i,0,D.p),g,g,D.b6,new C.o(q,g,new C.bG(l,l,l,l),new C.bg(o,o,o,o),g,g,D.n),D.h8,g,g,g,g,D.GT,g,g,92),D.y,!1,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,new A.eg2(s,a4,r),g,g,g,g,g,g,!1,D.a4),g))}a2=C.cj(a2,g,g,g,g,g,D.aM,!1)
w=f.$1("How long")
v=D.c.j(0.06)
u=C.n(16)
t=C.a([],d)
for(i=0;i<5;++i){h=B.dvK[i]
r=s.db===h
q=r?D.az:D.L
p=new C.aP(12,12)
if(h<60)o=""+h+" seconds"
else o=h===60?"1 minute":""+(h/60|0)+" minutes"
r=r?D.w:D.ad
t.push(new C.by(1,D.bc,C.aA(g,C.cV(g,new C.cc(D.A,g,g,C.d(o,g,g,g,g,g,g,new C.G(!0,r,g,g,g,g,12.5,D.u,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g),D.K,g,g),g),g,g,D.b6,new C.o(q,g,g,new C.bg(p,p,p,p),g,g,D.n),D.h8,g,g,g,g,D.rL,g,g,g),D.y,!1,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,new A.eg3(s,a4,h),g,g,g,g,g,g,!1,D.a4),g))}v=C.p(g,C.A(t,D.m,g,D.e,D.i,0,g,g),D.f,g,g,new C.o(v,g,g,u,g,g,D.n),g,g,g,g,D.ey,g,g,g)
u=C.aA(g,C.p(g,B.f7p,D.f,g,g,new C.o(g,g,g,C.n(18),C.a([new C.ac(0,D.G,D.ax.j(0.35),D.cA,16)],x.V),B.c68,D.n),g,56,g,g,g,g,g,g),D.y,!1,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,new A.eg4(s,a3),g,g,g,g,g,g,!1,D.a4)
t=D.c.j(0.06)
r=C.n(18)
return C.p(g,C.bm(!0,C.cg(C.x(C.a([e,D.aR,a0,a1,new C.a5(g,96,a2,g),w,v,D.dV,u,D.af,C.aA(g,C.p(g,B.f7j,D.f,g,g,new C.o(t,g,C.L(D.bB,D.r,1),r,g,g,D.n),g,g,g,g,D.bE,g,g,g),D.y,!1,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,new A.eg5(s,a3),g,g,g,g,g,g,!1,D.a4)],d),D.E,g,D.e,D.O,0,D.p),D.t,g,D.y,g,D.am8,g,g,D.ai),!0,!1,D.ag,!0,!0),D.f,g,g,B.b6N,g,g,g,g,g,g,g,g)},
$S:169}
A.eg7.prototype={
$1(d){var w=null
return new C.D(H.akS,C.d(d.toUpperCase(),w,w,w,w,w,w,N.ty,w,w,w),w)},
$S:134}
A.eg2.prototype={
$0(){var w=this.c
this.b.$1(new A.eg0(w))
A.bUE(w.a)
this.a.m(new A.eg1())},
$S:0}
A.eg0.prototype={
$0(){return $.ai5=this.a.a},
$S:0}
A.eg1.prototype={
$0(){},
$S:0}
A.eg3.prototype={
$0(){return this.b.$1(new A.eg_(this.a,this.c))},
$S:0}
A.eg_.prototype={
$0(){return this.a.db=this.b},
$S:0}
A.eg4.prototype={
$0(){C.a6(this.b,!1).O(null)
var w=this.a
w.cBl(w.db)},
$S:0}
A.eg5.prototype={
$0(){C.a6(this.b,!1).O(null)
this.a.b8U(45,!0)},
$S:0}
A.efK.prototype={
$0(){var w=this.a,v=w.d
v===$&&C.c()
v.e=this.b
w.ax=null
w.iL()},
$S:0}
A.efL.prototype={
$1(d){return this.a.cFE()},
$S:11}
A.efM.prototype={
$0(){},
$S:0}
A.eg9.prototype={
$0(){return this.a.dy=this.b.as},
$S:0}
A.efZ.prototype={
$0(){var w=this.b
w.iL()
w.aH=this.a.a;++w.aL},
$S:0}
A.efR.prototype={
$0(){var w=this.a
w.cx=null
w.dy=""},
$S:0}
A.efS.prototype={
$0(){},
$S:0}
A.efJ.prototype={
$0(){},
$S:0}
A.efQ.prototype={
$0(){},
$S:0}
A.egy.prototype={
$0(){return this.a.id=!0},
$S:0}
A.egz.prototype={
$0(){return this.a.k2=!0},
$S:0}
A.egA.prototype={
$0(){return this.a.k3=!0},
$S:0}
A.egx.prototype={
$1(d){return B.a9E.q(0,d.b)},
$S:z+5}
A.eff.prototype={
$1(d){return d.aB("String","ngmy_city_where",this.a)},
$S:240}
A.efg.prototype={
$1(d){return!1},
$S:48}
A.egq.prototype={
$1(d){var w
if(d.b==="gasstation"){w=this.a
w=Math.sqrt(Math.pow(w.f-d.c,2)+Math.pow(w.r-d.d,2))<135}else w=!1
return w},
$S:z+5}
A.egr.prototype={
$0(){return this.a.aQn(B.aSp)},
$S:0}
A.egs.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.d
w===$&&C.c()
D.d.W(w[u.e].x,this.b)
v.ao="crate"
v.m(v.gj2())
v.ei("You picked up a crate. Carry it to the shop and walk onto the green mat by the counter to sell it at the market.",!0)
A.fD(700,60,0.25,"tri")
return null},
$S:0}
A.egt.prototype={
$0(){return this.a.abE(this.b)},
$S:0}
A.egu.prototype={
$0(){return this.a.bSq(this.b)},
$S:0}
A.egv.prototype={
$0(){return this.a.bV4(this.b)},
$S:0}
A.egw.prototype={
$0(){return this.b.cO=this.a.a},
$S:0}
A.edF.prototype={
$0(){},
$S:0}
A.efd.prototype={
$1(d){var w=this.a,v=this.b
return w===0?v.$1(d):new A.aKk(w,v.$1(d),null)},
$S:39}
A.eel.prototype={
$0(){var w=this.a
w.y1=null
w.y2=!0},
$S:0}
A.eei.prototype={
$1(d){return d.c==="outside"},
$S:z+6}
A.eej.prototype={
$1(d){return d.b==="hospital"},
$S:z+5}
A.eek.prototype={
$1(d){return!d.e&&d.r<0},
$S:z+23}
A.ee4.prototype={
$1(d){return d.c==="outside"},
$S:z+6}
A.ee5.prototype={
$1(d){return d.a.b===this.a.d},
$S:z+23}
A.efD.prototype={
$0(){},
$S:0}
A.edZ.prototype={
$0(){return this.a.k3=!0},
$S:0}
A.efr.prototype={
$1(d){return d.b==="hospital"},
$S:z+5}
A.efs.prototype={
$0(){return this.a.go=!1},
$S:0}
A.efE.prototype={
$1(d){var w,v
if(d!==0){w=this.a
w=w.c!=null&&w.ghx()!=null}else w=!1
if(w){w=this.a
v=w.ghx()
v.toString
v.r=Math.max(0,w.ghx().r+d)}},
$S:1815}
A.efF.prototype={
$0(){var w=this.a
w.iL()
w.aeM(!0)},
$S:0}
A.efG.prototype={
$1(d){return this.a.c9Y()},
$S:11}
A.eeb.prototype={
$1(d){return!D.d.aX(this.a.d,new A.eea(d))},
$S:33}
A.eea.prototype={
$1(d){return d.a===this.a},
$S:z+24}
A.eec.prototype={
$1(d){return d.a===this.a.a},
$S:z+24}
A.efH.prototype={
$1(d){var w,v,u=this.a
if(u.c==null)return
w=++u.T
if(w>36){v=u.bC
u.Bo()
if(v!=null)u.aCI("Nobody answered the phone")
return}if(w%8<4){A.fD((w&1)===0?1046:1318,160,0.3,"sine")
if(D.o.E(u.T,8)===0)C.U4()}},
$S:11}
A.efI.prototype={
$0(){},
$S:0}
A.efP.prototype={
$0(){var w=this.a
w.bC=w.bD=null},
$S:0}
A.eeA.prototype={
$4$col$on(d,e,f,g){var w=null,v=g?f.j(0.45):D.w.j(0.62),u=C.n(18),t=C.L(f,D.r,1.8)
return C.aA(w,C.p(w,C.d(d,w,w,w,w,w,w,D.ja,w,w,w),D.f,w,w,new C.o(v,w,t,u,w,w,D.n),w,w,w,D.a0u,B.bGK,w,w,w),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new A.eeB(e),w,w,w,w,!1,D.a4)},
$2(d,e){return this.$4$col$on(d,e,D.b9,!1)},
$3$col(d,e,f){return this.$4$col$on(d,e,f,!1)},
$3$on(d,e,f){return this.$4$col$on(d,e,D.b9,f)},
$S:1816}
A.eeB.prototype={
$1(d){return this.a.$0()},
$S:24}
A.eeJ.prototype={
$7$about$avatar$glow$onAnswer$onDecline$onLater$who(d,e,f,g,h,i,j){var w=null,v=new A.eeK(),u=Math.min(this.a-28,340),t=C.n(30),s=C.L(D.aW,D.r,2),r=C.a([new C.ac(0,D.G,f.j(0.35),D.I,24)],x.V),q=x.p,p=C.A(C.a([e,D.ev,C.E(C.x(C.a([B.fQj,D.bH,C.d(j,w,1,D.a2,w,w,w,D.aaz,w,w,w),D.bH,C.d(d,w,2,D.a2,w,w,w,M.ab5,w,w,w)],q),D.E,w,D.e,D.O,0,D.p),1)],q),D.m,w,D.e,D.i,0,w,w),o=C.a([v.$4(B.bOR,"Decline",D.ax,h)],q)
if(i!=null)o.push(v.$4(D.k6,"Later",D.az,i))
o.push(v.$5$big(D.iN,"Answer",D.bg,g,!0))
return C.p(w,C.x(C.a([p,D.aC,C.A(o,D.E,w,D.e,D.i,0,w,w)],q),D.al,w,D.e,D.O,0,D.p),D.f,w,w,new C.o(w,w,s,t,r,B.zB,D.n),w,w,w,D.d3,Ai.a0a,w,w,u)},
$6$about$avatar$glow$onAnswer$onDecline$who(d,e,f,g,h,i){return this.$7$about$avatar$glow$onAnswer$onDecline$onLater$who(d,e,f,g,h,null,i)},
$S:1817}
A.eeK.prototype={
$5$big(d,e,f,g,h){var w=null,v=h?58:50,u=h?58:50
return C.E(C.aA(w,C.x(C.a([C.p(w,C.Y(d,D.c,w,w,w,h?30:26),D.f,w,w,new C.o(f,w,w,w,w,w,D.a7),w,u,w,w,w,w,w,v),D.fK,C.d(e,w,w,w,w,w,w,O.AJ,w,w,w)],x.p),D.m,w,D.e,D.O,0,D.p),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new A.eeL(g),w,w,w,w,!1,D.a4),1)},
$4(d,e,f,g){return this.$5$big(d,e,f,g,!1)},
$S:1818}
A.eeL.prototype={
$1(d){return this.a.$0()},
$S:24}
A.eeD.prototype={
$0(){var w=this.a
w.Bo()
w.aCI("You turned the call down")},
$S:0}
A.eeE.prototype={
$0(){var w=this.a
w.Bo()
w.iS.push(this.b)
w.ei("Saved on your waiting list. You will be taken there when you are free.",!0)},
$S:0}
A.eeC.prototype={
$0(){var w=this.b,v=this.a
v.Bo()
v.fE=w
v.hE=0
v.axV(w)},
$S:0}
A.eeF.prototype={
$0(){var w=this.a
w.Bo()
w.cDV(this.b)},
$S:0}
A.eeI.prototype={
$2(d,e){var w=this.a
w.b6=d
w.bf=e},
$S:188}
A.eeG.prototype={
$0(){var w=this.a
return w.m(new A.eez(w))},
$S:0}
A.eez.prototype={
$0(){var w=this.a
return w.bm=!w.bm},
$S:0}
A.eeH.prototype={
$0(){var w=this.a,v=w.aP
if(v==null)v=null
else{v=v.at
v===$&&C.c()}w=v==null?w.aI:v
if(w!=null)if(w.Q<=0.01)w.as=160
return null},
$S:0}
A.eem.prototype={
$1(d){var w=this.a,v=w.p4
w=w.RG
return v==="ptrap"?new A.aa2(w,null):new A.a5t(w,null)},
$S:1819}
A.een.prototype={
$1(d){var w=this.a
return new A.BH(w.p4,w.R8,null)},
$S:z+27}
A.egB.prototype={
$1(d){var w=this.a
return new A.BH(w.a,w.c,null)},
$S:z+27}
A.eep.prototype={
$1(d){return A.cjw(!1,!1,this.a.CW,!1)},
$S:z+45}
A.eeo.prototype={
$1(d){return new A.WN(!1,this.a.fr,null)},
$S:z+71}
A.ec1.prototype={
$1(d){var w,v,u,t,s,r,q,p,o=null,n=this.a,m=n.d
m===$&&C.c()
w=m.d
w===$&&C.c()
m=C.d("Add to "+w[m.e].b,o,o,o,o,o,o,D.dg,o,o,o)
w=x.p
v=C.a([],w)
for(u=0;u<10;++u){t={}
s=B.d54[u]
t.a=null
t.a=s.a
r=D.eR.j(0.4)
q=new C.aP(12,12)
p=new C.ay(D.b0,1,D.r,-1)
v.push(C.aA(o,C.p(o,C.d(s.b,o,o,o,o,o,o,D.tA,o,o,o),D.f,o,o,new C.o(r,o,new C.bG(p,p,p,p),new C.bg(q,q,q,q),o,o,D.n),o,o,o,o,A3.wg,o,o,o),D.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new A.ec0(t,n,d),o,o,o,o,o,o,!1,D.a4))}return C.bm(!0,new C.D(D.bR,C.x(C.a([m,D.aw,B.fXn,D.af,C.bW(D.bG,v,D.br,o,8,8)],w),D.E,o,D.e,D.O,0,D.p),o),!0,!1,D.ag,!0,!0)},
$S:25}
A.ec0.prototype={
$0(){C.a6(this.c,!1).O(null)
this.b.bCY(this.a.a)},
$S:0}
A.ebW.prototype={
$1(d){return d.b==="back"},
$S:z+22}
A.ebX.prototype={
$1(d){return d.b==="back"},
$S:z+22}
A.ebY.prototype={
$1(d){return Math.abs(d-this.a)>13},
$S:116}
A.ebZ.prototype={
$0(){var w=this
w.b.id.push(new A.aWT(w.c,w.d,new A.AG(C.U(x.S,x.N))))
w.a.iL()},
$S:0}
A.eef.prototype={
$0(){var w,v=this,u=v.b,t=u.c,s=v.c,r=v.d
u.c=t+(s?D.o.gW4(r)*40:r)
t=u.d
r=v.e
u.d=t+(s?D.o.gW4(r)*40:r)
t=v.a
r=t.d
r===$&&C.c()
w=r.d
w===$&&C.c()
w[r.e].a4i(0,u)
t.iL()},
$S:0}
A.ega.prototype={
$0(){var w,v,u,t=this.b
t.e=D.o.E(t.e+1,4)
w=this.a
v=w.d
v===$&&C.c()
u=v.d
u===$&&C.c()
u[v.e].a4i(0,t)
w.iL()},
$S:0}
A.efe.prototype={
$0(){var w=this.b
w.f=(w.f+1)%6
this.a.iL()},
$S:0}
A.efh.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.d
w===$&&C.c()
D.d.W(w[u.e].x,this.b)
v.at=v.Q=0
v.iL()},
$S:0}
A.ec_.prototype={
$0(){var w=this.a,v=this.b.a
w.Q=v
w.at=100+v
w.iL()},
$S:0}
A.edb.prototype={
$0(){return this.a.aeN(-6,0)},
$S:0}
A.edc.prototype={
$0(){return this.a.aeN(6,0)},
$S:0}
A.edd.prototype={
$0(){return this.a.aeN(0,-6)},
$S:0}
A.ede.prototype={
$0(){return this.a.aeN(0,6)},
$S:0}
A.edf.prototype={
$0(){return this.a.bD0(this.b.a)},
$S:0}
A.edg.prototype={
$0(){var w=this.a
return w.m(new A.eda(w))},
$S:0}
A.eda.prototype={
$0(){return this.a.as=-1},
$S:0}
A.edh.prototype={
$0(){var w=this.a
w.m(new A.ed9(w,this.b))},
$S:0}
A.ed9.prototype={
$0(){var w,v=this.a,u=v.as,t=this.b,s=v.d
if(u<0){s===$&&C.c()
u=s.d
u===$&&C.c()
D.d.hy(u[s.e].z,0,3,t)}else{s===$&&C.c()
w=s.d
w===$&&C.c()
w[s.e].z[u]=t}v.iL()},
$S:0}
A.edi.prototype={
$0(){var w=this.a
w.m(new A.ed8(w,this.b))},
$S:0}
A.ed8.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.d
w===$&&C.c()
w[u.e].Q=this.b
v.iL()},
$S:0}
A.edj.prototype={
$0(){var w=this.a
w.m(new A.ed7(w))},
$S:0}
A.ed7.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.d
w===$&&C.c()
u=w[u.e]
u.go=u.go==="fan"?"light":"fan"
v.iL()},
$S:0}
A.edk.prototype={
$0(){var w=this.a
w.m(new A.ed6(w,this.b))},
$S:0}
A.ed6.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.d
w===$&&C.c()
w[u.e].as=this.b
v.iL()},
$S:0}
A.edl.prototype={
$0(){return this.a.AT(this.b.d)},
$S:0}
A.egE.prototype={
$0(){return C.a6(this.a,!1).ip()},
$S:0}
A.egG.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.egD(w))},
$S:0}
A.egD.prototype={
$0(){return this.a.aH=null},
$S:0}
A.egF.prototype={
$3(d,e,f){var w=null
return C.da(C.crh(D.A,w,w,w,w,D.cj,D.vN,w,this.a.aH,!1,!1,!1,w,D.pv,1,w),e)},
$S:100}
A.ecO.prototype={
$0(){return this.a.Am("calls")},
$S:0}
A.ecP.prototype={
$0(){return this.a.Am("hospital")},
$S:0}
A.ecQ.prototype={
$0(){return this.a.Am("shop")},
$S:0}
A.ecU.prototype={
$0(){return this.a.Am("people")},
$S:0}
A.ecV.prototype={
$0(){return this.a.AT(10)},
$S:0}
A.ecW.prototype={
$0(){var w=this.a
return w.m(new A.ecN(w))},
$S:0}
A.ecN.prototype={
$0(){return this.a.k2=!0},
$S:0}
A.ecX.prototype={
$0(){var w=this.a
return w.m(new A.ecM(w))},
$S:0}
A.ecM.prototype={
$0(){return this.a.k3=!0},
$S:0}
A.ecY.prototype={
$0(){var w=this.a
return w.m(new A.ecL(w))},
$S:0}
A.ecL.prototype={
$0(){var w=this.a
return w.y1=w.fE},
$S:0}
A.ecZ.prototype={
$0(){var w=this.a,v=w.iS.length,u=v===1?"":"s"
return w.ei(""+v+" job"+u+" waiting. You are taken to the next one when you finish this one.",!0)},
$S:0}
A.ed_.prototype={
$0(){var w=this.a
return w.m(new A.ecK(w))},
$S:0}
A.ecK.prototype={
$0(){return this.a.go=!0},
$S:0}
A.ed0.prototype={
$0(){var w=this.a
return w.p4?w.a30():w.m(new A.ecJ(w))},
$S:0}
A.ecJ.prototype={
$0(){return this.a.R8=!0},
$S:0}
A.ecR.prototype={
$0(){var w=this.a
return w.m(new A.ecI(w))},
$S:0}
A.ecI.prototype={
$0(){var w=this.a
return w.jS=!w.jS},
$S:0}
A.ecS.prototype={
$0(){var w=this.a
return w.m(new A.ecH(w))},
$S:0}
A.ecH.prototype={
$0(){return this.a.al=!0},
$S:0}
A.ecT.prototype={
$0(){var w=this.a
return w.m(new A.ecG(w))},
$S:0}
A.ecG.prototype={
$0(){var w=this.a
return w.y=!w.y},
$S:0}
A.ec8.prototype={
$0(){var w=this.a.ghx()
w=w==null?null:w.r
return w==null?0:w},
$S:88}
A.ecm.prototype={
$0(){return this.a.yl()},
$S:0}
A.ecl.prototype={
$1(d){return d<=5},
$S:33}
A.ec9.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n=null,m=this.a,l=m.aP,k=m.CW
if(l!=null){m=k.gf_()
k=B.aIw.h(0,$.ai5)
if(k==null)k=B.a8z
k=l.cQJ(m/1000,k)
m=k}else{l=m.d
l===$&&C.c()
w=l.d
w===$&&C.c()
l=w[l.e]
w=k.gf_()
v=m.coe()
u=B.aIw.h(0,$.ai5)
if(u==null)u=B.a8z
t=m.fr
s=m.r
r=m.bQe()
if(m.ao==null){q=m.gpq()
if(q==null)q=n
else{q=q.x
q=(q==null?n:q.r)===!0}q=q===!0}else q=!0
p=m.d
o=p.d
o===$&&C.c()
if(o[p.e].c!=="outside")k=B.Iy
else{p=m.gpq()
p=p==null?n:p.amX(k.gf_()/1000)
if(p==null)p=B.Iy
p=C.C(p,x.hg)
o=m.gKK()
k=o==null?n:o.amX(k.gf_()/1000)
D.d.v(p,k==null?B.Iy:k)
k=p}l=C.C(A.ifi(l,w/1000,q,k,r,s,v,u,t),x.c)
k=m.d
w=k.d
w===$&&C.c()
if(w[k.e].c==="outside")D.d.v(l,m.cFM())
k=m.d
w=k.d
w===$&&C.c()
if(w[k.e].c==="outside")D.d.v(l,m.bFM())
k=!0
if(m.fE==null){w=m.gpq()
if((w==null?n:w.x)==null){k=m.gKK()
k=(k==null?n:k.f)!=null}}D.d.v(l,k?m.cuz():B.v1)
m=l}return m},
$S:z+9}
A.eca.prototype={
$1(d){var w,v,u=this.a,t=u.aP,s=t==null
if(s){w=u.d
w===$&&C.c()
v=w.d
v===$&&C.c()
w=v[w.e].c==="outside"}else w=!1
if(w)u=A.iq7(u.CW.gf_()/1000)
else{u=s?null:t.cQs()
if(u==null)u=B.qN}return u},
$S:z+47}
A.ecn.prototype={
$3(d,e,f){var w=null,v=D.dI.j(0.82),u=C.n(18),t=C.L(D.ba,D.r,2)
return C.p(w,C.d(e,w,w,w,w,w,w,B.fzS,w,w,w),D.f,w,w,new C.o(v,w,t,u,w,w,D.n),w,w,w,w,B.bEX,w,w,w)},
$S:1820}
A.ecd.prototype={
$0(){var w=this.a,v=w.d
v===$&&C.c()
return v.a.length!==0?w.EA():w.cpt(this.b)},
$S:0}
A.eco.prototype={
$0(){var w=this.a
w.m(new A.ec7(w))
w.yl()},
$S:0}
A.ec7.prototype={
$0(){var w=this.a
w.x=!w.x
w.iL()},
$S:0}
A.ecp.prototype={
$0(){var w=this.a
return w.cx!=null?w.Sq():w.cFD()},
$S:0}
A.ecq.prototype={
$0(){var w=this.a
w.m(new A.ec6(w))
w.yl()
if(w.z)w.iM("Drag to turn all the way round. Double tap a spot on the floor to walk there.")},
$S:0}
A.ec6.prototype={
$0(){var w=this.a,v=!w.z
w.z=v
if(v&&w.cx!=null)w.Sq()
w.iL()},
$S:0}
A.ecr.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.d
w===$&&C.c()
return v.AT(w[u.e].c!=="outside"?11:10)},
$S:0}
A.ecs.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.d
w===$&&C.c()
if(w[u.e].c!=="outside")v.AT(11)
v.Am("calls")},
$S:0}
A.ecb.prototype={
$0(){var w=this.a
return w.m(new A.ec5(w))},
$S:0}
A.ec5.prototype={
$0(){var w=this.a,v=!w.w
w.w=v
if(v)w.iM("Voltage tester in your hand: tap an outlet, a switch or the light.")},
$S:0}
A.ecc.prototype={
$0(){var w=this.a
return w.m(new A.ec4(w))},
$S:0}
A.ec4.prototype={
$0(){var w=this.a
return w.y=!w.y},
$S:0}
A.ece.prototype={
$0(){return this.a.Q3("look")},
$S:0}
A.ecf.prototype={
$0(){return this.a.Q3("furniture")},
$S:0}
A.ecg.prototype={
$0(){return this.a.Q3("walls")},
$S:0}
A.ech.prototype={
$0(){return this.a.Q3("floor")},
$S:0}
A.eci.prototype={
$0(){return this.a.Q3("ceiling")},
$S:0}
A.ecj.prototype={
$0(){return this.a.Q3("doors")},
$S:0}
A.eck.prototype={
$0(){return C.a6(this.a,!1).cd(C.eb(new A.ec3(),!1,null,x.H))},
$S:0}
A.ec3.prototype={
$1(d){return B.aJs},
$S:z+75}
A.efc.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=C.aG(d,l,x.w).w,j=this.a,i=j.d
i===$&&C.c()
w=x.p
i=C.a([B.fLr,D.aw,C.d("Wiring "+i.gd1w()+"/"+j.d.gr7().length+" \xb7 Plumbing "+j.d.gcZ_()+"/"+j.d.gcYZ(),l,l,l,l,l,l,B.Kv,l,l,l),D.X],w)
for(v=j.d.gr7(),u=v.length,t=0;t<v.length;v.length===u||(0,C.J)(v),++t){s=v[t]
r=D.c.j(0.05)
q=new C.aP(12,12)
p=new C.ay(s.gkT()&&s.gjW()?D.b9.j(0.5):D.bB,1,D.r,-1)
o=C.d(s.b,l,l,l,l,l,l,B.aVX,l,l,l)
if(s.gkT()&&s.gjW())n="\u2705 finished"
else{n=s.gkT()?"":"\u26a1 wiring  "
n+=s.gjW()?"":"\ud83d\udeb0 plumbing"}m=s.gkT()&&s.gjW()?D.et:D.ad
i.push(C.aA(l,C.p(l,new C.c7(D.aM,D.e,D.i,D.m,l,D.p,l,0,C.a([new C.by(1,D.bc,o,l),C.d(n,l,l,l,l,l,l,new C.G(!0,m,l,l,l,l,12,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l),l,l,l)],w),l),D.f,l,l,new C.o(r,l,new C.bG(p,p,p,p),new C.bg(q,q,q,q),l,l,D.n),l,l,l,D.eK,D.bU,l,l,l),D.y,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,new A.ef9(j,d,s),l,l,l,l,l,l,!1,D.a4))}i.push(D.P)
i.push(C.dT(B.fIn,new A.efa(j,d),l))
i.push(D.P)
i.push(C.bH(B.fEv,l,new A.efb(j,d),l))
return C.bm(!0,new C.cR(new C.aZ(0,1/0,0,k.a.b*0.75),C.cj(i,l,l,D.bR,l,l,D.ai,!0),l),!0,!1,D.ag,!0,!0)},
$S:25}
A.ef9.prototype={
$0(){C.a6(this.b,!1).O(null)
this.a.AT(this.c.a)},
$S:0}
A.efa.prototype={
$0(){C.a6(this.b,!1).O(null)
var w=this.a
w.m(new A.ef8(w))
w.iM("Every room needs its wiring and plumbing again. Wire the whole house from the start.")},
$S:0}
A.ef8.prototype={
$0(){var w=this.a,v=w.d
v===$&&C.c()
v.cVA()
w.iL()},
$S:0}
A.efb.prototype={
$0(){C.a6(this.b,!1).O(null)
$.Et=A.aWZ(D.o.E(Date.now(),1e5))
var w=this.a
w.m(new A.ef7(w))
w.aeM(!0)},
$S:0}
A.ef7.prototype={
$0(){var w=this.a,v=$.Et
v.toString
w.d=v
w.r="look"
w.Q=0
w.as=-1
w.at=0
w.iL()},
$S:0}
A.dxG.prototype={
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
$S:24}
A.f9L.prototype={
$0(){return this.b.d=this.a.a},
$S:0}
A.f9K.prototype={
$0(){return this.a.d=null},
$S:0}
A.f9N.prototype={
$1(d){return this.a.b0g(d.gf0())},
$S:71}
A.f9O.prototype={
$1(d){return this.a.b0g(d.gf0())},
$S:202}
A.f9P.prototype={
$1(d){return this.a.b0f()},
$S:111}
A.f9M.prototype={
$1(d){return this.a.b0f()},
$S:139}
A.fCe.prototype={
$1$speed(d){var w,v,u,t=null,s=this.a,r=s.a
if(r.length===0)return
w=s.b
v=s.d
u=s.c
u=u.length===0?t:D.d.gH(u)
this.b.push(new A.ML(r,w,d,8,u,t,v,t,t))
v=x.o
s.a=C.a([],v)
s.b=C.a([],v)
s.c=C.a([],x.s)
s.d=!1},
$0(){return this.$1$speed(130)},
$S:1821}
A.fCl.prototype={
$3$note(d,e,f){var w=this.a
w.a.push(d)
w.b.push(e)
if(f!=null)w.c.push(f)},
$2(d,e){return this.$3$note(d,e,null)},
$S:z+76}
A.fCg.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m,l,k
for(w=this.a.x,v=w.length,u=d.a,t=d.c,s=d.b,r=0;r<v;++r){q=w[r]
p=q.b
if(p!=="billboard"&&p!=="cornersign"&&p!=="townsign"&&p!=="adboard")continue
switch(p){case"townsign":p=B.a92
break
case"cornersign":p=B.a94
break
case"adboard":p=B.a91
break
default:p=B.a93
break}o=p.a
n=p.b
m=(q.e&1)===1
l=q.c
k=m?n:o
if(Math.abs(u-l)<k){l=q.d
k=m?o:n
p=Math.abs(t-l)<k&&s<p.c}else p=!1
if(p)return!0}return!1},
$S:z+25}
A.fCm.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
for(w=this.a.x,v=w.length,u=0;u<=1;u+=0.02){t=A.oM(d,e,u)
for(s=t.a,r=t.c,q=t.b,p=0;p<v;++p){o=w[p]
n=o.b
if(n!=="billboard"&&n!=="cornersign"&&n!=="townsign"&&n!=="adboard")continue
switch(n){case"townsign":n=B.a92
break
case"cornersign":n=B.a94
break
case"adboard":n=B.a91
break
default:n=B.a93
break}m=n.a
l=n.b
k=(o.e&1)===1
j=o.c
i=k?l:m
if(Math.abs(s-j)<i){j=o.d
i=k?m:l
n=Math.abs(r-j)<i&&q<n.c}else n=!1
if(n)return o}}return null},
$S:z+77}
A.fCf.prototype={
$2(d,e){return this.a.$2(d,e)!=null},
$S:z+78}
A.fCc.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this.a.$2(d,e)
if(j==null)return null
switch(j.b){case"townsign":w=B.a92
break
case"cornersign":w=B.a94
break
case"adboard":w=B.a91
break
default:w=B.a93
break}v=Math.max(w.a,w.b)+170
u=e.a-d.a
t=e.c-d.c
s=Math.sqrt(u*u+t*t)
if(s<1)return null
r=Math.max(d.b,e.b)
w=j.c
q=-t/s*v
p=j.d
o=u/s*v
n=new A.r(w+q,r,p+o)
m=new A.r(w-q,r,p-o)
o=new A.fCd(d,e)
p=this.b
l=!p.$1(n)
k=!p.$1(m)
if(l&&k)return o.$1(n)<=o.$1(m)?n:m
if(l)w=n
else w=k?m:null
return w},
$S:z+79}
A.fCd.prototype={
$1(d){return d.aK(0,this.a).gqg()+this.b.aK(0,d).gqg()},
$S:z+80}
A.fC6.prototype={
$3(d,e,f){var w,v,u,t=this
if(!t.a.$2(d,e))return B.nH
w=f>=3?null:t.b.$2(d,e)
if(w==null)return C.a([new A.r((d.a+e.a)/2,430,(d.c+e.c)/2)],x.o)
v=f+1
u=C.C(t.$3(d,w,v),x.cv)
u.push(w)
D.d.v(u,t.$3(w,e,v))
return u},
$2(d,e){return this.$3(d,e,0)},
$S:z+81}
A.fCi.prototype={
$7$note(a2,a3,a4,a5,a6,a7,a8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=A.hyu(a2),a1=new A.r(a2.c,a4,a2.d)
for(w=d.d,v=d.a,u=d.b,t=Math.atan2(a0.a,a0.b)-0.55,s=a6-a5,r=d.c,q=null,p=0;p<6;++p){o=t+p*0.38
n=a5+s*p/5
m=a2.c
l=Math.sin(o)
k=p===0
j=k?40:0
i=new A.r(m+l*n,a3+a7*p/5+j,a2.d+Math.cos(o)*n)
if(u.$1(i)){if(k)q=a8
continue}m=v.a
if(m.length!==0&&p>0){h=D.d.gam(m)
g=!1
f=0
for(;;){if(!(f<=1&&!g))break
g=u.$1(A.oM(h,i,f))
f+=0.02}if(g)for(m=r.$2(h,i),l=m.length,e=0;e<m.length;m.length===l||(0,C.J)(m),++e)w.$2(m[e],D.d.gam(v.b))}w.$3$note(i,a1,k?a8:q)
q=null}},
$6(d,e,f,g,h,i){return this.$7$note(d,e,f,g,h,i,null)},
$S:z+82}
A.fCk.prototype={
$1(d){var w=d.b,v=this.a
switch(w){case"townsign":v.$7$note(d,255,250,430,520,60,"The biggest billboard in the city: NGMY Town")
break
case"cornersign":v.$7$note(d,115,120,210,260,50,"A corner billboard: NGMY Town")
break
case"adboard":v.$7$note(d,160,142,330,410,55,"A big NGMY ad billboard")
break
case"tower":v.$7$note(d,430,(w==="hq"?278:A.hxL(B.zF[d.f]))+40,150,210,20,"A tower with NGMY ad boards")
break
case"hq":v.$7$note(d,440,312,190,250,20,"The NGMY company building")
break
default:v.$7$note(d,75,48,130,175,45,"An NGMY billboard")}},
$S:z+29}
A.fCj.prototype={
$1(d){var w,v,u,t,s,r,q,p=this.a,o=p.a.length
this.b.$1(d)
if(o>0&&o<p.a.length){w=p.a
v=o-1
u=this.c.$2(w[v],w[o])
w=J.a7(u)
if(w.gI(u)!==0){t=p.b
s=t[v]
r=t[o]
for(q=0;q<w.gI(u);){v=o+q
D.d.c4(p.a,v,w.h(u,q));++q
D.d.c4(p.b,v,A.oM(s,r,q/(w.gI(u)+1)))}}}},
$S:z+29}
A.fCh.prototype={
$1(d){var w
this.b.$0()
w=x.o
this.c.push(new A.ML(C.a([B.hjR,B.h34,B.h5g],w),C.a([B.hkn,B.h4q,B.h8c],w),55,8,"Inside the "+B.hJ.h(0,d.b).a.toLowerCase(),d,!1,null,null))
this.a.d=!0},
$S:z+29}
A.fC7.prototype={
$1(d){return d.b==="townsign"},
$S:z+5}
A.fC8.prototype={
$2(d,e){var w=this.a
return D.k.aR(Math.pow(d.c-w.a.a,2)+Math.pow(d.d-w.a.c,2),Math.pow(e.c-w.a.a,2)+Math.pow(e.d-w.a.c,2))},
$S:z+20}
A.fC5.prototype={
$1(d){return Math.atan2(d.d-1000,d.c)},
$S:z+84}
A.fC9.prototype={
$2(d,e){var w=this.a
return J.xm(w.$1(d),w.$1(e))},
$S:z+20}
A.fCa.prototype={
$1(d){return d.b==="bighouse"},
$S:z+5}
A.fCb.prototype={
$1(d){return d.b===this.a},
$S:z+5}
A.ffu.prototype={
$0(){var w=this.a
return w.m(new A.fft(w))},
$S:0}
A.fft.prototype={
$0(){var w=this.a
return w.d=!w.d},
$S:0}
A.chE.prototype={
$0(){var w=0,v=C.j(x.P),u=1,t=[],s,r,q,p,o
var $async$$0=C.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
w=6
return C.b($.re().jn(0,"assets/images/ngmy_logo.png"),$async$$0)
case 6:s=e
w=7
return C.b(C.fG6(J.eQ(J.vQ(s)),null),$async$$0)
case 7:r=e
o=$
w=8
return C.b(r.la(),$async$$0)
case 8:o.WH=e.b
u=1
w=5
break
case 3:u=2
p=t.pop()
$.WH=null
w=5
break
case 2:w=1
break
case 5:return C.h(null,v)
case 1:return C.f(t.at(-1),v)}})
return C.i($async$$0,v)},
$S:51}
A.fU5.prototype={
$4(d,e,f,g){var w,v,u=null,t=e*0.05,s=C.fv(u,D.ct,u,1,u,C.cQ(u,u,u,u,u,u,u,u,u,C.l(u,u,f,u,u,u,u,u,u,u,u,e,u,u,D.u,u,u,!0,u,t,u,u,u,u,u,u),d),D.a5,D.bW,u,D.dD,D.bX)
s.ef()
w=s.b.c
v=this.a
if(w>v){s=C.fv(u,D.ct,u,1,u,C.cQ(u,u,u,u,u,u,u,u,u,C.l(u,u,f,u,u,u,u,u,u,u,u,e*v/w,u,u,D.u,u,u,!0,u,t,u,u,u,u,u,u),d),D.a5,D.bW,u,D.dD,D.bX)
s.ef()}s.a4(this.b,new C.q(this.c+v/2-s.b.c/2,g))},
$S:1822}
A.fU3.prototype={
$1(d){var w,v,u,t,s,r=null,q=this.a,p=this.b,o=d.d-d.b
if(q!=null){w=q.c
v=q.d
u=Math.min((d.c-d.a)/w,o/v)
o=C.bJ(d.gbK(),v*u,w*u)
$.S()
t=C.K()
t.z=D.cj
p.pZ(q,new C.a2(0,0,w,v),o,t)}else{s=C.fv(r,D.ct,r,r,r,C.cQ(r,r,r,r,r,r,r,r,r,C.l(r,r,this.c,r,r,r,r,r,r,r,r,o*0.6,r,r,D.u,r,r,!0,r,r,r,r,r,r,r,r),"NGMY"),D.a5,D.bW,r,D.dD,D.bX)
s.ef()
q=d.gbK()
o=s.b
w=o.c
o=o.a.c
s.a4(p,q.aK(0,new C.q(w/2,o.gba(o)/2)))}},
$S:1823}
A.fU2.prototype={
$4$w(d,e,f,g){var w=null,v=C.fv(w,D.ct,w,w,w,C.cQ(w,w,w,w,w,w,w,w,w,C.l(w,w,this.a,w,w,w,w,w,w,w,w,f,w,w,g,w,w,!0,w,f*0.08,w,w,w,w,w,w),d),D.a5,D.bW,w,D.dD,D.bX)
v.o3(this.b.a*0.9)
v.a4(this.c,e.aK(0,new C.q(v.b.c/2,0)))},
$3(d,e,f){return this.$4$w(d,e,f,D.u)},
$S:1824}
A.fU4.prototype={
$1(d){var w=null,v=this.a.b*0.16
v=C.fv(w,D.ct,w,w,w,C.cQ(w,w,w,w,w,w,w,w,w,C.l(w,w,w,w,w,w,w,w,w,w,w,v,w,w,D.u,w,w,!0,w,v*0.08,w,w,w,w,w,w),d),D.a5,D.bW,w,D.dD,D.bX)
v.ef()
return v.b.c},
$S:447}
A.fCN.prototype={
$2(d,e){return this.a===d?e:0},
$S:550}
A.fCz.prototype={
$1(d){return d.b==="right"},
$S:z+22}
A.fCK.prototype={
$0(){var w=C.a([],x.z),v=new A.eM(w)
v.f=1
v.x=$.dl=$.dl+1
v.aF(B.hn2,B.h8j,B.BF)
v.aD(B.h2R,B.hfr,B.i6,0.5)
v.aF(B.aY1,B.hhg,B.BF)
v.aF(B.aY1,B.hcD,B.BF)
return w},
$S:z+85}
A.fCL.prototype={
$1(d){var w=this,v=w.a,u=v.c
switch(v.b){case"left":v=A.nk(d,0,1.5707963267948966,new A.r(-w.b/2,0,u+w.c/2-40))
break
case"right":v=A.nk(d,0,-1.5707963267948966,new A.r(w.b/2,0,u+w.c/2-40))
break
default:v=A.nk(d,0,0,new A.r(u,0,0))
break}return v},
$S:z+86}
A.fCA.prototype={
$1(d){return d.b==="back"},
$S:z+22}
A.fCB.prototype={
$1(d){return d.c},
$S:z+87}
A.fCC.prototype={
$2(d,e){return e},
$S:79}
A.fCD.prototype={
$3(d,e,f){return K.LV(d,e,0,f+this.a)},
$S:23}
A.fCF.prototype={
$2(a8,a9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this
if(a8==null)return
w=A.aQg(a8)
v=a7.a
u=A.hfn(v,w,a9)
t=u.a
s=u.b
r=u.d
q=t-2.5
p=s-2.5
o=v.p3+a9*2
n=a7.b
m=n.b=730+a9
l=n.x=$.dl=$.dl+1
n.e=5
k=v.c==="hall"
if(!(k&&a9<2))j=!k&&v.p1!=="back"
else j=!0
if(j){i=k?a9===1:v.p1==="left"
k=a7.c
h=i?-k/2:k/2
g=i?1:-1
f=u.c
n.aD(new A.r(h+g*1.4,r,f),new A.r(2.6,s+3,t+3),B.Mk,0.5)
n.aD(new A.r(h+g*2.8,r,f),new A.r(0.2,s,t),F.np,0.7)
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
k.push(new A.fh(C.a([new A.r(e,a1,d),new A.r(e,a1,a0),new A.r(e,j,a0),new A.r(e,j,d)],a2),m,new A.fCG(o,v,a9),320,a3,9,1,l,!1))
a4=h+g*0.05
k.push(new A.fh(C.a([new A.r(a4,a1,a0),new A.r(a4,a1,d),new A.r(a4,j,d),new A.r(a4,j,a0)],a2),m,new A.fCH(o,v,a9),320,a3,9,1,l,!1))}}else{h=u.c
n.aD(new A.r(h,r,1.4),new A.r(t+3,s+3,2.6),B.Mk,0.5)
n.aD(new A.r(h,r,2.8),new A.r(t,s,0.2),F.np,0.7)
if(v.p2){k=a7.d
j=q/2
a1=h-j
a2=p/2
a3=r+a2
j=h+j
a2=r-a2
a5=x.o
a6=320*p/q
k.push(new A.fh(C.a([new A.r(a1,a3,2.95),new A.r(j,a3,2.95),new A.r(j,a2,2.95),new A.r(a1,a2,2.95)],a5),m,new A.fCI(o,v,a9),320,a6,9,1,l,!1))
k.push(new A.fh(C.a([new A.r(j,a3,0.05),new A.r(a1,a3,0.05),new A.r(a1,a2,0.05),new A.r(j,a2,0.05)],a5),m,new A.fCJ(o,v,a9),320,a6,9,1,l,!1))}}n.e=n.x=0
v=v.p2?"It is on and playing "+E.kw[D.o.E(o,8)].a+". Tap it to watch full screen with the remote.":"The TV is off. Tap it to turn it on."
a7.e.n(0,m,new A.cH(w.b,v,new A.r(0,r,4),110))},
$S:1826}
A.fCG.prototype={
$3(d,e,f){return K.LV(d,e,this.a,f+this.b.a+this.c*3)},
$S:23}
A.fCH.prototype={
$3(d,e,f){return K.LV(d,e,this.a,f+this.b.a+this.c*3)},
$S:23}
A.fCI.prototype={
$3(d,e,f){return K.LV(d,e,this.a,f+this.b.a+this.c*3)},
$S:23}
A.fCJ.prototype={
$3(d,e,f){return K.LV(d,e,this.a,f+this.b.a+this.c*3)},
$S:23}
A.fCM.prototype={
$2(d,e){var w=this.a,v=w.f,u=w.r
w.f=1
w.r=!1
w.b=0
w.cJ(new A.r(d,e,0),new A.r(d,e,2.2),0.7,B.Ma,0.7,10)
w.f=v
w.r=u},
$S:188}
A.fCE.prototype={
$1(d){return d.b===this.a.a},
$S:z+15}
A.fvv.prototype={
$2(d,e){return this.a===d?e:0},
$S:550}
A.fvw.prototype={
$5(d,e,f,g,h){var w=d.a7(0,e.aO(0,g)).a7(0,new A.r(0,h,0)),v=this.a
A.kK(v,w.a7(0,f.aO(0,0.1)),e,B.eb,26,30,B.kN,f,0)
A.kK(v,w.a7(0,f.aO(0,0.2)),e,B.eb,22,26,B.i6,f,0.6)
A.kK(v,w.a7(0,f.aO(0,0.3)),e,B.eb,22,1.2,B.kN,f,0)
A.kK(v,w.a7(0,f.aO(0,0.3)),e,B.eb,1.2,26,B.kN,f,0)},
$S:z+88}
A.fvr.prototype={
$5(d,e,f,g,h){var w=d.a7(0,e.aO(0,g)),v=this.a,u=v.b
A.kK(v,w.a7(0,new A.r(0,42,0)).a7(0,f.aO(0,0.1)),e,B.eb,34,84,B.kN,f,0)
v.b=h
A.kK(v,w.a7(0,new A.r(0,41,0)).a7(0,f.aO(0,0.2)),e,B.eb,28,80,B.vS,f,0.2)
v.b=0
A.kK(v,w.a7(0,new A.r(0,58,0)).a7(0,f.aO(0,0.3)),e,B.eb,20,26,B.Ni,f,0)
A.kK(v,w.a7(0,new A.r(0,22,0)).a7(0,f.aO(0,0.3)),e,B.eb,20,26,B.Ni,f,0)
v.aD(w.a7(0,e.aO(0,9)).a7(0,new A.r(0,40,0)).a7(0,f.aO(0,1)),new A.r(2.6,2.6,2.6),B.Fv,0.8)
v.b=u},
$S:z+89}
A.fvs.prototype={
$5$poster(d,e,f,g,h){var w=C.a([d,e,f,g],x.o),v=h<0?A.heK():new A.fvt(h),u=h===0,t=u?1000:256
u=u?424:256
return this.a.push(new A.fh(w,0,v,t,u,1,2,this.b,!1))},
$4(d,e,f,g){return this.$5$poster(d,e,f,g,-1)},
$S:z+90}
A.fvt.prototype={
$3(d,e,f){return A.fU1(d,e,f,this.a)},
$S:23}
A.fuP.prototype={
$1(d){var w=d.b
return w==="pole"||w==="lamppost"},
$S:z+5}
A.fuQ.prototype={
$2(d,e){return D.k.aR(d.c,e.c)},
$S:z+20}
A.fuR.prototype={
$1(d){return this.a.cy.an(0,d.a)},
$S:z+5}
A.fv1.prototype={
$1(d){return this.a.k4.q(0,d.a)},
$S:z+5}
A.fvc.prototype={
$1(d){return B.f9G.q(0,d.b)},
$S:z+5}
A.fvu.prototype={
$3(d,e,f){var w=this.b
return A.ti(new A.r(d,e,f),this.a).a7(0,new A.r(w.c,0,w.d))},
$S:z+19}
A.fvl.prototype={
$3(d,e,f){return A.my(d,e,f,this.a.a+D.k.bh(f/7))},
$S:23}
A.fvm.prototype={
$3(d,e,f){return A.my(d,e,f,this.a.a+D.k.bh(f/7))},
$S:23}
A.fvn.prototype={
$3(d,e,f){return A.vL(d,e,f,"NGMY TOWN",this.a)},
$S:23}
A.fvo.prototype={
$3(d,e,f){return A.vL(d,e,f,"NGMY TOWN",this.a)},
$S:23}
A.fvp.prototype={
$3(d,e,f){return A.my(d,e,f,this.a.a+D.k.bh(f/7))},
$S:23}
A.fvq.prototype={
$3(d,e,f){return A.my(d,e,f,this.a.a+4+D.k.bh(f/7))},
$S:23}
A.fuS.prototype={
$3(d,e,f){return A.my(d,e,f,this.a.a+D.k.bh(f/7))},
$S:23}
A.fuT.prototype={
$3(d,e,f){return A.my(d,e,f,this.a.a+7+D.k.bh(f/7))},
$S:23}
A.fuU.prototype={
$3(d,e,f){return A.my(d,e,f,this.a.a+3+D.k.bh(f/7))},
$S:23}
A.fuV.prototype={
$3(d,e,f){return A.my(d,e,f,this.a.a+5+D.k.bh(f/7))},
$S:23}
A.fuW.prototype={
$3(d,e,f){return A.my(d,e,f,this.a.a+1+D.k.bh(f/7))},
$S:23}
A.fuX.prototype={
$3(d,e,f){return A.my(d,e,f,this.a.a+2+D.k.bh(f/7))},
$S:23}
A.fuY.prototype={
$3(d,e,f){return A.vL(d,e,f,"NGMY COMPANY","Building the movement")},
$S:23}
A.fuZ.prototype={
$3(d,e,f){return A.vL(d,e,f,"NGMY","New Global Movement for Youth")},
$S:23}
A.fv_.prototype={
$3(d,e,f){return A.vL(d,e,f,"NGMY COMPANY","Building the movement")},
$S:23}
A.fv0.prototype={
$3(d,e,f){return A.vL(d,e,f,"NGMY","New Global Movement for Youth")},
$S:23}
A.fv2.prototype={
$3(d,e,f){return A.my(d,e,f,this.a.a+4+D.k.bh(f/7))},
$S:23}
A.fv3.prototype={
$3(d,e,f){return A.my(d,e,f,this.a.a+6+D.k.bh(f/7))},
$S:23}
A.fv4.prototype={
$3(d,e,f){return A.my(d,e,f,this.a.a+2+D.k.bh(f/7))},
$S:23}
A.fv5.prototype={
$3(d,e,f){return A.my(d,e,f,this.a.a+3+D.k.bh(f/7))},
$S:23}
A.fv6.prototype={
$3(d,e,f){return A.vL(d,e,f,"NGMY STORE","Everything you need")},
$S:23}
A.fv7.prototype={
$3(d,e,f){return A.vL(d,e,f,"NGMY STORE","Everything you need")},
$S:23}
A.fv8.prototype={
$3(d,e,f){return A.vL(d,e,f,"NGMY STORE","Everything you need")},
$S:23}
A.fv9.prototype={
$3(d,e,f){return A.vL(d,e,f,"NGMY UBER","Rides home")},
$S:23}
A.fva.prototype={
$3(d,e,f){return A.vL(d,e,f,"NGMY UBER","Rides home")},
$S:23}
A.fvb.prototype={
$3(d,e,f){return A.vL(d,e,f,"NGMY LICENCE","Get your Uber licence")},
$S:23}
A.fvd.prototype={
$3(d,e,f){return A.vL(d,e,f,"NGMY LICENCE","Get your Uber licence")},
$S:23}
A.fve.prototype={
$3(d,e,f){return A.vL(d,e,f,"NGMY LICENCE","Get your Uber licence")},
$S:23}
A.fvf.prototype={
$3(d,e,f){return A.vL(d,e,f,"NGMY GAS","Open 24 hours")},
$S:23}
A.fvg.prototype={
$3(d,e,f){return A.my(d,e,f,this.a.a*2+this.b+1)},
$S:23}
A.fvh.prototype={
$1(d){return d.b===this.a.a&&!d.x&&d.Q.length!==0},
$S:z+15}
A.fvi.prototype={
$1(d){return d.b===this.a.a&&d.x},
$S:z+15}
A.fvj.prototype={
$3(d,e,f){return A.fU1(d,e,f,0)},
$S:23}
A.fvk.prototype={
$3(d,e,f){return A.fU1(d,e,f,0)},
$S:23}
A.fFZ.prototype={
$2(d,e){var w,v=this.a
if(v!=null){w=v.b-d
v=v.c-e
v=w*w+v*v<1e4}else v=!0
return v},
$S:1827}
A.fFW.prototype={
$1(d){return D.d.q(B.Ip,d.b)},
$S:z+5}
A.fFX.prototype={
$1(d){return d.b===this.a.a},
$S:z+15}
A.fFY.prototype={
$1(d){return d.b===this.a.a},
$S:z+15}
A.flu.prototype={
$5(d,e,f,g,h){var w,v,u,t,s,r,q,p,o,n,m,l,k,j
for(w=d.length,v=x.z,u=this.a,t=-f/2,s=u.a,r=this.b,q=0,p=0;p<w;++p){o=d[p]
n=o.a
m=C.a([],v)
l=new A.eM(m)
l.b=u.b
l.f=u.f
l.r=!0
l.aF(new A.r(0,t,0),new A.r(g,f,g),h)
k=(q&1)===0?1:-1
j=n>0?1:-1
D.d.v(s,A.nk(m,r*k*j,0,new A.r(n,e,o.b)));++q}},
$S:1828}
A.flk.prototype={
$3(d,e,f){var w=this.a,v=this.b,u=this.c
return new A.r(w.c+v*d+u*f,e,w.d+u*d-v*f)},
$2(d,e){return this.$3(d,e,0)},
$S:z+41}
A.fwm.prototype={
$3(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k=x.z,j=C.a([],k),i=new A.eM(j)
i.b=this.a
i.r=!0
d.$1(i)
k=C.a([],k)
for(j=A.bD2(j,e,B.dZ),w=j.length,v=f.a,u=f.b,t=f.c,s=x.o,r=0;r<j.length;j.length===w||(0,C.J)(j),++r){q=j[r]
p=C.a([],s)
for(o=q.a,n=o.length,m=0;m<o.length;o.length===n||(0,C.J)(o),++m){l=o[m]
p.push(new A.r(l.a+v,l.b+u,l.c+t))}k.push(new A.ks(p,q.b,q.c,q.d,q.e,q.f,q.r,q.w,q.x,q.y,q.z))}D.d.v(this.b.a,k)},
$S:z+91}
A.fvU.prototype={
$6$joint(d,e,f,g,h,i){var w=this.a
w.Tx(d,e,f,h,!1,g,this.b)
if(this.c&&i)w.ee(e,g*1.04,h,3,6)},
$5(d,e,f,g,h){return this.$6$joint(d,e,f,g,h,!0)},
$S:z+92}
A.fvV.prototype={
$1(d){return d.eK(B.dZ,2.6,B.MO,this.a,this.b,0.15)},
$S:z+1}
A.fvW.prototype={
$1(d){return d.ee(B.dZ,2.6,D.bP,3,this.a)},
$S:z+1}
A.fvX.prototype={
$1(d){return d.ee(B.dZ,5.2,this.a,this.b,this.c+2)},
$S:z+1}
A.fw7.prototype={
$1(d){var w=this,v=w.d?12:8
return d.Tx(B.dZ,B.abI,w.a,w.b,!1,w.c,v)},
$S:z+1}
A.fwf.prototype={
$1(d){return d.Li(B.dZ,B.hej,5.1,B.bi3,!1,12)},
$S:z+1}
A.fwg.prototype={
$1(d){return d.ee(B.dZ,2.7,this.a,this.b,this.c)},
$S:z+1}
A.fwh.prototype={
$1(d){var w=this,v=w.a?6.2:6.7,u=w.c
if(u<4)u=4
return d.ee(B.dZ,v,w.b,u,w.d)},
$S:z+1}
A.fwi.prototype={
$1(d){var w=this.b,v=w?6:4
w=w?12:8
return d.ee(B.dZ,4.7,this.a,v,w)},
$S:z+1}
A.fwj.prototype={
$1(d){return d.ee(B.dZ,3,this.a,this.b,this.c)},
$S:z+1}
A.fwk.prototype={
$1(d){return d.ee(B.dZ,1.25,this.a,3,6)},
$S:z+1}
A.fwl.prototype={
$1(d){return d.ee(B.dZ,1,D.c,3,6)},
$S:z+1}
A.fvY.prototype={
$1(d){return d.ee(B.dZ,1.15,this.a,2,6)},
$S:z+1}
A.fvZ.prototype={
$1(d){return d.ee(B.dZ,1,this.a,3,6)},
$S:z+1}
A.fw_.prototype={
$1(d){return d.ee(B.dZ,1,this.a,2,6)},
$S:z+1}
A.fw0.prototype={
$1(d){var w=C.ar(this.a,D.c,0.1)
w.toString
return d.ee(B.dZ,1,w,2,6)},
$S:z+1}
A.fw1.prototype={
$1(d){var w=this.b,v=w?4:3
w=w?9:6
return d.ee(B.dZ,5,this.a,v,w)},
$S:z+1}
A.fw2.prototype={
$1(d){return d.ee(B.dZ,3.6,this.a,3,this.b)},
$S:z+1}
A.fw3.prototype={
$1(d){return d.ee(B.dZ,4.8,this.a,this.b,this.c)},
$S:z+1}
A.fw4.prototype={
$1(d){var w=this.b,v=w?4:3
w=w?9:6
return d.ee(B.dZ,6.2,this.a,v,w)},
$S:z+1}
A.fw5.prototype={
$1(d){return d.ee(B.dZ,4.2,this.a,3,this.b)},
$S:z+1}
A.fw6.prototype={
$1(d){var w=this.b,v=w?4:3
w=w?9:6
return d.ee(B.dZ,5.1,this.a,v,w)},
$S:z+1}
A.fw8.prototype={
$1(d){return d.ee(B.dZ,3.4,this.a,3,this.b)},
$S:z+1}
A.fw9.prototype={
$1(d){var w=C.ar(this.a,D.c,Math.abs(0.08))
w.toString
return d.ee(B.dZ,2.6,w,this.b,this.c)},
$S:z+1}
A.fwa.prototype={
$1(d){return d.ee(B.dZ,4.9,this.a,this.b,this.c)},
$S:z+1}
A.fwb.prototype={
$1(d){return d.ee(B.dZ,3,this.a,3,this.b)},
$S:z+1}
A.fwc.prototype={
$1(d){var w=this.b,v=w?4:3
w=w?9:6
return d.ee(B.dZ,5,this.a,v,w)},
$S:z+1}
A.fwd.prototype={
$1(d){return d.ee(B.dZ,3.6,this.a,3,this.b)},
$S:z+1}
A.fwe.prototype={
$1(d){return d.ee(B.dZ,2.3,this.a,3,6)},
$S:z+1}
A.fpq.prototype={
$4(d,e,f,g){var w,v,u,t,s,r,q,p
for(w=this.a,v=e/2+0.2,u=d-8,t=-e/2-0.2,s=d/2+0.2,r=e-8,q=-d/2-0.2,p=f;p<g;p+=22){A.kK(w,new A.r(0,p,v),B.h4,B.eb,u,9,B.i6,B.hO,0.6)
A.kK(w,new A.r(0,p,t),B.p_,B.eb,u,9,B.i6,B.pT,0.6)
A.kK(w,new A.r(s,p,0),B.pT,B.eb,r,9,B.i6,B.h4,0.6)
A.kK(w,new A.r(q,p,0),B.hO,B.eb,r,9,B.i6,B.p_,0.6)}},
$S:542}
A.fCS.prototype={
$4$alongX(d,e,f,g){var w,v,u,t,s,r,q,p,o,n
for(w=this.a,v=0;v<=f;++v){u=A.oM(d,e,v/f)
w.aEI(new A.r(u.a,4,u.c),B.hnN,B.YY,!1,0.05)}t=A.oM(d,e,0.5)
for(s=e.aK(0,d).gqg()+0.15,r=t.a,q=t.c,p=0;p<2;++p){o=B.dj3[p]
n=g?new A.r(s,0.16,0.3):new A.r(0.3,0.16,s)
w.aD(new A.r(r,o,q),n,B.YY,0.05)}},
$3(d,e,f){return this.$4$alongX(d,e,f,!0)},
$S:z+94}
A.fCP.prototype={
$2(d,e){return this.a.iD(A.Dz(d,0.35,3),0.06,e,!1,0.4,6)},
$S:z+95}
A.fCO.prototype={
$1(d){return this.a.iD(A.Dz(d,0.5,3),0.14,B.q8,!1,0.3,8)},
$S:z+96}
A.fCR.prototype={
$2$col(d,e){return this.a.iD(A.Dz(d,0.4,3),0.055,e,!1,0.35,6)},
$1(d){return this.$2$col(d,B.Z7)},
$S:z+122}
A.fCQ.prototype={
$5$h$w(d,e,f,g,h){var w=this.a
w.b=d
w.aD(e,new A.r(h,g,0.06),f,0.3)},
$3(d,e,f){return this.$5$h$w(d,e,f,0.7,0.45)},
$4$w(d,e,f,g){return this.$5$h$w(d,e,f,0.7,g)},
$S:z+98}
A.fDT.prototype={
$0(){return A.fD(1320,120,0.25,"tri")},
$S:0}
A.dVp.prototype={
$1(d){return this.a},
$S:39}
A.dVs.prototype={
$0(){return C.a6(this.a,!1).ip()},
$S:0}
A.dVt.prototype={
$0(){return this.a.py(A.b1q("","",!0))},
$S:0}
A.dVu.prototype={
$0(){return this.a.py(B.dGP)},
$S:0}
A.dVx.prototype={
$0(){return this.a.py(A.b1q("wiring","",!0))},
$S:0}
A.dVy.prototype={
$0(){return this.a.py(A.b1q("plumbing","",!0))},
$S:0}
A.dVz.prototype={
$0(){return this.a.py(A.b1q("fix","",!0))},
$S:0}
A.dVA.prototype={
$0(){return this.a.py(A.cjw(!0,!0,null,!1))},
$S:0}
A.dVB.prototype={
$0(){return this.a.py(A.cjw(!0,!0,null,!0))},
$S:0}
A.dVC.prototype={
$0(){return this.a.py(B.ebL)},
$S:0}
A.dVD.prototype={
$0(){return this.a.py(new A.asq(!0,null))},
$S:0}
A.dVE.prototype={
$0(){return this.a.py(B.dQW)},
$S:0}
A.dVv.prototype={
$0(){var w=this.a
return w.m(new A.dVr(w))},
$S:0}
A.dVr.prototype={
$0(){var w=this.a,v=w.e
w.e=!v
if(v)w.f=""},
$S:0}
A.dVw.prototype={
$1(d){var w=this.a
return w.m(new A.dVq(w,d))},
$S:2}
A.dVq.prototype={
$0(){return this.a.f=this.b},
$S:0}
A.dVi.prototype={
$0(){var w=this.b.a
w=w==="house"?B.hsk:A.b1q("",w,!1)
return this.a.py(w)},
$S:0}
A.dVj.prototype={
$0(){return this.a.py(B.dNC)},
$S:0}
A.dVk.prototype={
$0(){return this.a.py(B.eg1)},
$S:0}
A.dVl.prototype={
$0(){return this.a.py(B.dND)},
$S:0}
A.dVm.prototype={
$0(){return this.a.py(B.aJs)},
$S:0}
A.dVn.prototype={
$1(d){return d.length!==0},
$S:3}
A.dVo.prototype={
$1(d){var w=this.a.a
return D.a.q((w[4]+" "+w[0]+" "+w[5]).toLowerCase(),d)},
$S:3}
A.f9B.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new A.f9A())},
$S:11}
A.f9A.prototype={
$0(){},
$S:0}
A.czk.prototype={
$0(){$.ajP=!$.ajP
A.hhT()
A.fD($.ajP?520:420,60,0.25,"tri")},
$S:0}
A.czl.prototype={
$0(){$.ajO=!$.ajO
A.hhT()
A.fD($.ajO?520:420,60,0.25,"tri")},
$S:0}
A.fVi.prototype={
$1(d){var w,v,u,t,s,r,q,p=null,o=C.aG(d,p,x.w).w,n=this.b,m=this.c,l=m.length,k=x.p,j=C.a([C.d(this.a,p,p,p,p,p,p,D.dg,p,p,p),D.aw,C.d(""+new C.X(n,new A.fVh(),C.T(n).k("X<1>")).gI(0)+" of "+l+" steps done",p,p,p,p,p,p,B.Kv,p,p,p),D.X],k)
for(w=0;w<l;++w){v=D.c.j(0.05)
u=new C.aP(14,14)
t=new C.ay(n[w]?D.b9.j(0.6):D.bB,1,D.r,-1)
s=n[w]
r=s?"\u2705":""+(w+1)+"."
q=s?D.c:D.az
r=C.d(r,p,p,p,p,p,p,new C.G(!0,q,p,p,p,p,14,D.u,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p),p,p,p)
q=m[w]
s=s?D.aD:D.c
j.push(C.p(p,new C.c7(D.aM,D.e,D.i,D.E,p,D.p,p,0,C.a([r,D.at,new C.by(1,D.bc,C.d(q,p,p,p,p,p,p,new C.G(!0,s,p,p,p,p,13,p,p,p,p,p,1.4,p,p,p,p,p,p,p,p,p,p,p,p,p),p,p,p),p)],k),p),D.f,p,p,new C.o(v,p,new C.bG(t,t,t,t),new C.bg(u,u,u,u),p,p,D.n),p,p,p,D.cv,D.bh,p,p,p))}return C.bm(!0,new C.cR(new C.aZ(0,1/0,0,o.a.b*0.75),C.cj(j,p,p,D.bR,p,p,D.ai,!0),p),!0,!1,D.ag,!0,!0)},
$S:25}
A.fVh.prototype={
$1(d){return d},
$S:97}
A.bY3.prototype={
$0(){return C.a6(this.a,!1).ip()},
$S:0}
A.dm_.prototype={
$0(){return this.a.LR$=this.b},
$S:0}
A.dm0.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.dlZ(w))},
$S:0}
A.dlZ.prototype={
$0(){return this.a.LR$=B.nH},
$S:0}
A.ddp.prototype={
$0(){var w=this.a,v=w.gdL(0),u=this.b
v.w=u==="practice"
u=u==="test"
v.z=u
if(u)v.f=v.e=!1
w.pz()},
$S:0}
A.ddn.prototype={
$0(){var w=this.a
w.y=this.b
w.z=this.c},
$S:0}
A.ddo.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.ddm(w))},
$S:0}
A.ddm.prototype={
$0(){return this.a.y=null},
$S:0}
A.dd7.prototype={
$0(){return this.a.x=0},
$S:0}
A.dd8.prototype={
$0(){return this.a.x=0},
$S:0}
A.dd9.prototype={
$1(d){return d.a===this.a},
$S:z+8}
A.dda.prototype={
$1(d){return d.e},
$S:z+40}
A.dd6.prototype={
$1(d){var w=this.a.gdL(0).b
return new C.b8(w,C.a4(w).k("b8<2>")).q(0,d)},
$S:3}
A.ddb.prototype={
$0(){var w=this.a
w.gdL(0).r=!1
w.pz()},
$S:0}
A.ddc.prototype={
$1(d){return d.a===this.a},
$S:z+13}
A.ddd.prototype={
$2(d,e){return e===this.a},
$S:389}
A.dde.prototype={
$0(){var w=this.a
w.w=""
w.pz()},
$S:0}
A.ddf.prototype={
$1(d){return d.a===this.a},
$S:z+8}
A.ddg.prototype={
$0(){var w=this.a,v=this.b
if(w.w===v)v=""
w.w=v
w.x=v.length===0?0:this.c},
$S:0}
A.ddh.prototype={
$1(d){return d.a===this.a},
$S:z+8}
A.ddi.prototype={
$0(){var w=this.a
w.pz()
w.x=this.b},
$S:0}
A.ddj.prototype={
$0(){var w=this.a
w.pz()
w.x=this.b},
$S:0}
A.ddk.prototype={
$0(){return this.a.x=this.b},
$S:0}
A.ddl.prototype={
$0(){var w=this.a,v=w.gdL(0),u=v.a
v.a=!u
if(u)v.d=!1
w.pz()},
$S:0}
A.ddq.prototype={
$0(){var w,v=this.a,u=v.gdL(0)
u.a=!0
u.d=!1
w=this.b
if(w.e)u.x=!0
u.Q=w.r
v.ax=v.at.gf_()/1000
v.pz()},
$S:0}
A.ddr.prototype={
$0(){var w=this.a,v=w.gdL(0)
v.d=v.a=!0
w.pz()},
$S:0}
A.ddA.prototype={
$1(d){return!d},
$S:97}
A.ddJ.prototype={
$0(){var w=this.a.gts()
return A.aRV(this.b,w.b,w.d,this.c)},
$S:0}
A.ddQ.prototype={
$1(d){var w,v,u,t,s=C.a([],x.z),r=this.a,q=r.gdL(0),p=q.Q
if(p.length!==0){p=r.at.gf_()
w=r.ax
v=q.Q
u=v==="fire"?7:4.5
t=p/1000-w<u
p=v}else t=!1
if(!t)q=q.x&&p.length!==0
else q=!0
if(q){q=t?p:"smolder"
A.hyz(new A.eM(s),q,new A.ddx(),0.32,r.at.gf_()/1000)}s=C.C(s,x.c)
q=r.LR$
if(q.length!==0)D.d.v(s,A.hcK(q,r.at.gf_()/1000))
return s},
$S:z+9}
A.ddx.prototype={
$1(d){return new A.r(d.a*0.32,-0.2+d.b*0.32,0.8+d.c*0.32)},
$S:z+7}
A.ddB.prototype={
$0(){return this.a.aBM("learn")},
$S:0}
A.ddC.prototype={
$0(){return this.a.aBM("practice")},
$S:0}
A.ddK.prototype={
$0(){return this.a.aBM("test")},
$S:0}
A.ddL.prototype={
$0(){var w=this.a
return w.m(new A.ddz(w))},
$S:0}
A.ddz.prototype={
$0(){var w=this.a,v=w.gdL(0)
v.e=!v.e
w.pz()},
$S:0}
A.ddM.prototype={
$0(){var w=this.a
return w.m(new A.ddy(w))},
$S:0}
A.ddy.prototype={
$0(){var w=this.a,v=w.gdL(0)
v.f=!v.f
w.pz()},
$S:0}
A.ddN.prototype={
$0(){return A.hfb(this.a)},
$S:0}
A.ddO.prototype={
$0(){var w=this.a,v=w.geZ()
return v.fW(10,0.2,new A.r(0.6,0,w.gdL(0).c===0?4.2:0.4),-0.95)},
$S:0}
A.ddP.prototype={
$0(){var w=this.a,v=w.geZ()
return v.fW(10,0.2,new A.r(-0.6,0,w.gdL(0).c===0?4.2:0.4),0.95)},
$S:0}
A.ddR.prototype={
$1(d){return!this.a.gdL(0).b.ij(0,d.a)},
$S:z+8}
A.ddD.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m=this.a,l=m.gdL(0),k=l.b,j=this.b,i=j.a
if(k.ij(0,i)){m.mj("That wire is already fastened. Tap the wire in the 3D view to take it off if you want to move it.")
return}w=m.aF0(i)
m.m(new A.ddw(m,w,j))
if(m.w.length!==0){m.aZ5(i)
if(w){v=C.a([],x.o)
for(u=m.gts(),t=u.f,s=t.length,r=0;r<s;++r){q=t[r]
p=!1
if(q.c.q(0,i)){o=q.a
if(k.h(0,o)==null){n=m.r
p=(n===$?m.r=A.bDm(u,l,!0):n).b.h(0,o)!=null}}if(p){n=m.r
v.push((n===$?m.r=A.bDm(u,l,!0):n).b.h(0,q.a).c)}}m.aI8(v)
m.hv(j.b+": the glowing place is where it goes.",!0)}else m.hv(j.b+": now tap the screw it belongs on. Tap its name again to light up where it goes.",!0)}},
$S:0}
A.ddw.prototype={
$0(){var w,v=this,u=v.a
if(v.b)w=v.c.a
else{w=v.c.a
if(u.w===w)w=""}return u.w=w},
$S:0}
A.ddE.prototype={
$0(){var w=this.a,v=w.gts(),u=v.b,t=A.fUO(v)
w=w.gdL(0)
w=C.a([new A.abx(u,t,A.hcs(v,w),w.y)],x.fJ)
v=B.aIh.h(0,v.a)
if(v==null)v=B.aBn
return A.hD3(this.b,w,v,u)},
$S:0}
A.ddF.prototype={
$0(){var w=this.a
w.m(new A.ddv(w))
A.pN()
w.hv("The wires are folded back and the device is pushed into the box. Now put the cover plate on.",!0)
w.or()},
$S:0}
A.ddv.prototype={
$0(){var w=this.a
w.gdL(0).c=1
w.pz()},
$S:0}
A.ddG.prototype={
$0(){var w=this.a
w.m(new A.ddu(w))
w.or()},
$S:0}
A.ddu.prototype={
$0(){var w=this.a
w.gdL(0).c=0
w.pz()},
$S:0}
A.ddH.prototype={
$0(){var w=this.a
w.m(new A.ddt(w))
A.pN()
w.hv("Cover plate on. Now turn the power on and test.",!0)},
$S:0}
A.ddt.prototype={
$0(){var w=this.a
w.gdL(0).c=2
w.pz()},
$S:0}
A.ddI.prototype={
$0(){var w=this.a
w.m(new A.dds(w))
w.or()},
$S:0}
A.dds.prototype={
$0(){var w=this.a,v=w.gdL(0)
v.c=0
v.b.a9(0)
v.a=!0
v.x=v.d=!1
v.Q=""
w.Q=0
w.w=""
w.x=0
w.pz()},
$S:0}
A.eZS.prototype={
$0(){var w=this.a
w.x=this.b
w.y=this.c},
$S:0}
A.eZT.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.eZR(w))},
$S:0}
A.eZR.prototype={
$0(){return this.a.x=null},
$S:0}
A.eZK.prototype={
$0(){return this.a.w=0},
$S:0}
A.eZL.prototype={
$0(){var w=this.a,v=w.gdL(0)
v.a.J(0,this.b)
v.c=!1
v.d=""
w.f=A.aQk(v)
w.r=""},
$S:0}
A.eZM.prototype={
$0(){var w=this.a,v=w.gdL(0)
v.b.n(0,this.b,!0)
v.d=""
w.f=A.aQk(v)},
$S:0}
A.eZN.prototype={
$0(){var w=this.a,v=w.gdL(0)
v.c=!1
v.d=""
w.f=A.aQk(v)},
$S:0}
A.eZO.prototype={
$0(){return this.a.w=this.b},
$S:0}
A.eZP.prototype={
$1(d){return this.a.gdL(0).b.h(0,d)!==!0},
$S:3}
A.eZQ.prototype={
$0(){var w,v=this.a,u=v.gdL(0)
u.c=!0
w=this.b
u.d=w.length===0?"":D.d.gH(w)
v.f=A.aQk(u)},
$S:0}
A.eZX.prototype={
$1(d){return!d},
$S:97}
A.f_0.prototype={
$0(){return A.aRV(this.a,"Sink drain (P-trap)",B.dlM,this.b)},
$S:0}
A.eZY.prototype={
$1(d){var w=this.a,v=C.C(A.io6(w.gdL(0),d),x.c)
w=w.LR$
if(w.length!==0)D.d.v(v,A.hcK(w,d))
return v},
$S:z+9}
A.eZZ.prototype={
$0(){var w,v=this.a,u=this.b,t=v.aF0(u)
v.m(new A.eZW(v,t,u))
if(t){switch(u){case"tail":w=B.hi9
break
case"trap":w=B.hnO
break
default:w=B.aYC
break}v.aI8(C.a([w],x.o))
if(u==="tail")u="Tailpiece"
else u=u==="trap"?"P-trap":"Trap arm"
v.hv(u+": the glowing place is where it goes. Tap it.",!0)}},
$S:0}
A.eZW.prototype={
$0(){var w,v=this,u=v.a
if(v.b)w=v.c
else{w=v.c
if(u.r===w)w=""}return u.r=w},
$S:0}
A.f__.prototype={
$0(){var w=this.a
w.m(new A.eZV(w))
w.or()},
$S:0}
A.eZV.prototype={
$0(){var w,v=this.a,u=v.gdL(0)
u.a.a9(0)
w=u.b
w.aKv(w,new A.eZU())
u.c=!1
v.r=u.d=""
v.w=0
v.f=A.aQk(u)},
$S:0}
A.eZU.prototype={
$2(d,e){return!1},
$S:1831}
A.dgr.prototype={
$0(){var w=this.a
w.x=this.b
w.y=this.c},
$S:0}
A.dgs.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.dgq(w))},
$S:0}
A.dgq.prototype={
$0(){return this.a.x=null},
$S:0}
A.dgj.prototype={
$0(){return this.a.w=0},
$S:0}
A.dgm.prototype={
$1(d){return d.a===this.a},
$S:z+49}
A.dgn.prototype={
$0(){var w=this.a,v=w.gdL(0)
v.r=v.f=!1
w.f=A.ah6(v)
w.w=this.b},
$S:0}
A.dgo.prototype={
$0(){var w=this.a,v=w.gdL(0),u=v.e
u.bt(u,new A.dgl(this.b))
v.r=v.f=!1
w.f=A.ah6(v)},
$S:0}
A.dgl.prototype={
$2(d,e){return e===this.a},
$S:389}
A.dgp.prototype={
$0(){return this.a.w=this.b},
$S:0}
A.dgt.prototype={
$0(){var w,v=this.a
if(this.b){w=v.gdL(0)
w.f=!w.f}else{w=v.gdL(0)
w.r=!w.r}v.f=A.ah6(v.gdL(0))
v.w=this.c},
$S:0}
A.dgk.prototype={
$0(){var w=this.a,v=w.gdL(0)
v.r=v.f=!(v.f&&v.r)
w.f=A.ah6(v)},
$S:0}
A.dgx.prototype={
$1(d){return!d},
$S:97}
A.dgD.prototype={
$0(){return A.aRV(this.a,"Faucet supply lines",B.dq3,this.b)},
$S:0}
A.dgy.prototype={
$1(d){var w=this.a,v=C.C(A.ieQ(w.gdL(0),d),x.c)
w=w.LR$
if(w.length!==0)D.d.v(v,A.hcK(w,d))
return v},
$S:z+9}
A.dgz.prototype={
$0(){var w=this.a
return w.m(new A.dgw(w))},
$S:0}
A.dgw.prototype={
$0(){var w=this.a,v=w.gdL(0)
v.w=!v.w
w.f=A.ah6(v)},
$S:0}
A.dgB.prototype={
$0(){var w,v,u,t,s,r,q=this.b,p=this.a,o=q.aF0(p.a)
q.m(new A.dgv(p,q,o))
if(o){w=p.a==="hot"
v=x.o
u=C.a([],v)
for(t=0;t<4;++t){s=B.Su[t]
if(s.c.q(0,p.a)&&q.gdL(0).e.h(0,s.a)==null){r=A.RQ(s.a)
u.push(new A.r(r.a+0,r.b+0,r.c+1.2))}}if(u.length!==0)p=u
else p=C.a([A.RQ(w?61:62).a7(0,B.hcA)],v)
q.aI8(p)
if(u.length!==0)p=(w?"Hot":"Cold")+" hose: the glowing places are where its two ends go."
else p=(w?"Hot":"Cold")+" hose is on. Now turn its valve: tap the handle."
q.hv(p,!0)}},
$S:0}
A.dgv.prototype={
$0(){var w,v,u=this,t=u.b
if(u.c)w=u.a.a
else{w=t.r
v=u.a.a
w=w===v?"":v}return t.r=w},
$S:0}
A.dgA.prototype={
$1(d){return d===this.a.a},
$S:3}
A.dgC.prototype={
$0(){var w=this.a
w.m(new A.dgu(w))
w.or()},
$S:0}
A.dgu.prototype={
$0(){var w=this.a,v=w.gdL(0)
v.e.a9(0)
v.r=v.f=!1
w.r=""
w.w=0
w.f=A.ah6(v)},
$S:0}
A.dnz.prototype={
$0(){var w=this.a
w.x=this.b
w.y=this.c},
$S:0}
A.dnA.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.dny(w))},
$S:0}
A.dny.prototype={
$0(){return this.a.x=null},
$S:0}
A.dnt.prototype={
$0(){return this.a.r=0},
$S:0}
A.dnv.prototype={
$0(){var w=this.a,v=w.d
v.d.W(0,72)
w.f=A.ah7(v)
w.r=this.b},
$S:0}
A.dnw.prototype={
$0(){var w=this.a,v=w.d
v.c=!0
v.b=!1
w.f=A.ah7(v)
w.r=this.b},
$S:0}
A.dnx.prototype={
$0(){return this.a.r=this.b},
$S:0}
A.dnu.prototype={
$1(d){return this.a},
$S:39}
A.dnI.prototype={
$0(){return A.aRV(this.a,"Fix the house",B.ctD,this.b)},
$S:0}
A.dnD.prototype={
$0(){return this.a.cir(this.b)},
$S:0}
A.dnF.prototype={
$1(d){return d<=this.a.d.a},
$S:33}
A.dnE.prototype={
$1(d){return A.hyW(this.a.d,d)},
$S:z+9}
A.dnG.prototype={
$0(){var w=this.a
return w.m(new A.dnC(w))},
$S:0}
A.dnC.prototype={
$0(){var w=this.a
return w.w=w.w==="wrench"?"":"wrench"},
$S:0}
A.dnH.prototype={
$1(d){var w=this.a
return w.m(new A.dnB(w,d))},
$S:6}
A.dnB.prototype={
$0(){var w=this.a,v=w.d,u=D.k.V(this.b)
v.a=u
if(u<5)w.r=0
w.f=A.ah7(v)},
$S:0}
A.fl2.prototype={
$0(){return this.a.e=!1},
$S:0}
A.fl0.prototype={
$0(){return this.a.e=!0},
$S:0}
A.fl1.prototype={
$0(){var w=this.a
w.d=C.de(B.bzg,new A.fl_(w))},
$S:0}
A.fl_.prototype={
$1(d){var w=this.a.a,v=w.e
return v.aqb(w.f?1.06:0.94)},
$S:11}
A.fl4.prototype={
$1(d){return this.a.cac(0)},
$S:71}
A.fl5.prototype={
$1(d){return this.a.b91()},
$S:111}
A.fl3.prototype={
$1(d){return this.a.b91()},
$S:139}
A.ccw.prototype={
$0(){return C.a6(this.a,!1).ip()},
$S:0}
A.fDt.prototype={
$5(d,e,f,g,h){var w=this.a.a.q(0,h),v=this.b
v.b=d
if(w)v.apT(e,0.66,f,!1,!0,!0,g,14)
else{v.d=0.3
v.Vj(e,0.74,D.b0,!1,!0,0,8)
v.d=1}},
$S:z+100}
A.fDs.prototype={
$6(d,e,f,g,h,i){var w,v
if(!i)return
w=this.a.b.h(0,e)
v=w===!0?f:f.a7(0,h)
w=this.b
w.e=0.5
w.b=d
w.cJ(v.aK(0,g.aO(0,0.6)),v.a7(0,g.aO(0,0.6)),1.12,B.q8,0.35,8)
w.my(v.aK(0,g.aO(0,0.62)),v.aK(0,g.aO(0,0.5)),1.2,0.5,B.Yj,0.2,8)
w.b=0
w.my(f.aK(0,g.aO(0,0.05)),f.a7(0,g.aO(0,0.08)),0.82,0.55,B.brD,0.1,12)
w.e=0},
$S:z+101}
A.fDr.prototype={
$1(d){return d.b<-0.6},
$S:z+25}
A.fCy.prototype={
$1(d){return this.a.e.h(0,d)===this.b},
$S:33}
A.fFj.prototype={
$3(d,e,f){var w,v,u,t,s=A.RQ(d),r=C.a([],x.o)
for(w=s.a,v=s.b,u=s.c,t=0;t<=8;++t)r.push(new A.r(w+f*t/8*2,v+(2.4*t/8-9*Math.pow(t/8,2)),u+(1+3.5*t/8)))
A.hak(this.a,r,this.b,e,0.28,1.2)},
$S:1832}
A.fFi.prototype={
$1(d){return this.a.e.h(0,d.a)!=null},
$S:z+49}
A.cpQ.prototype={
$1(d){return d.a===this.a},
$S:z+102}
A.cpR.prototype={
$1(d){return d.a===this.a},
$S:z+4}
A.cpN.prototype={
$1(d){return this.a.vE(0,d).c.toLowerCase()},
$S:14}
A.cpS.prototype={
$1(d){var w
if(!this.a.e.q(0,d.a)){w=d.b
w=w==="valve"||D.a.a0(w,"hose")}else w=!1
return w},
$S:z+4}
A.cpT.prototype={
$1(d){var w=this.a,v=d.a
return w.e.q(0,v)&&w.aIh(v)>0},
$S:z+4}
A.cpU.prototype={
$1(d){return d.a},
$S:z+35}
A.cpV.prototype={
$1(d){return d.a},
$S:z+35}
A.cpO.prototype={
$1(d){return this.a.e.q(0,d.a)},
$S:z+4}
A.cpP.prototype={
$1(d){var w=this.a,v=d.a
return w.aIh(v)<=0||!w.e.q(0,v)},
$S:z+4}
A.fDq.prototype={
$1(d){var w=this.a
w.b=0
w.cJ(new A.r(d,8,0),new A.r(d,8,1.6),0.5,B.Ma,0.7,10)},
$S:6}
A.fDo.prototype={
$1(d){var w,v,u,t,s,r,q=C.a([],x.o)
for(w=d.length,v=this.a,u=v.a,t=v.b,v=v.c,s=0;s<d.length;d.length===w||(0,C.J)(d),++s){r=d[s]
q.push(new A.r(r.a+u,r.b+t,r.c+v))}return q},
$S:z+105}
A.fDi.prototype={
$3$r(d,e,f){var w=this.a,v=this.b.c
v===$&&C.c()
w.b=9100+D.d.bj(v.c,new A.fDl(d))
w.d=0.32
w.Vj(e,f,D.b0,!1,!0,0,8)
w.d=1},
$2(d,e){return this.$3$r(d,e,1.2)},
$S:z+106}
A.fDl.prototype={
$1(d){return d.a===this.a},
$S:z+4}
A.fDj.prototype={
$3(d,e,f){var w=this.a,v=this.b.c
v===$&&C.c()
w.b=9100+D.d.bj(v.c,new A.fDk(d))
w.d=0.32
w.aF(e,f,D.b0)
w.d=1},
$S:z+107}
A.fDk.prototype={
$1(d){return d.a===this.a},
$S:z+4}
A.fDp.prototype={
$3(d,e,f){var w,v,u,t=this,s=t.a,r=s.c
r===$&&C.c()
w=D.d.cp(r.c,d)
r=d.c
v=s.e
u=d.a
if(v.q(0,u))s="Fitted."
else{s=s.b?"":d.e
s="A spot for the "+r.toLowerCase()+". "+s}t.b.n(0,9100+w,new A.cH(r,s,e,26))
if(t.c&&!v.q(0,u)&&t.d.length!==0)t.e.push(new A.hd(e.a7(0,B.h4N),f,D.eR,0))},
$S:z+108}
A.fDe.prototype={
$0(){return this.a.$3(this.b.a,new A.r(this.c-10,9,2.4),B.abP)},
$S:0}
A.fDf.prototype={
$0(){return this.a.$3(this.b.a,new A.r(this.c-8,9,2.4),B.abP)},
$S:0}
A.fDg.prototype={
$0(){return this.a.$3(this.b.a,new A.r(this.c+8,9,2.4),B.abP)},
$S:0}
A.fDm.prototype={
$4(d,e,f,g){var w,v,u,t,s=this
if(D.d.bj(s.a,new A.fDn(d))<0||!s.b.e.q(0,d))return
w=s.b.f.h(0,d)
v=(w==null?0:w)>=1
w=s.c
u=9260+g
w.b=u
t=v?e:e.a7(0,f.aO(0,1.7))
w.cJ(t.aK(0,f.aO(0,0.6)),t.a7(0,f.aO(0,0.6)),1.12,B.q8,0.35,8)
w.my(t.aK(0,f.aO(0,0.62)),t.aK(0,f.aO(0,0.5)),1.2,0.5,B.Yj,0.2,8)
w=v?"Tight.":"Loose. Tap it with the wrench to tighten it."
s.d.n(0,u,new A.cH("Slip nut",w,e,10))},
$S:z+145}
A.fDn.prototype={
$1(d){return d.a===this.a},
$S:z+4}
A.fDh.prototype={
$1(d){return d.a===this.a},
$S:z+4}
A.fUp.prototype={
$1(d){return d.a===this.a},
$S:z+4}
A.etA.prototype={
$0(){var w=this.a
w.z=this.b
w.Q=this.c},
$S:0}
A.etB.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.etz(w))},
$S:0}
A.etz.prototype={
$0(){return this.a.z=null},
$S:0}
A.etv.prototype={
$0(){return this.a.y=0},
$S:0}
A.etF.prototype={
$1(d){return d.a===this.a},
$S:z+4}
A.etk.prototype={
$0(){return this.a.y=this.b},
$S:0}
A.etl.prototype={
$0(){var w=this.a
w.aeO()
w.y=this.b},
$S:0}
A.etm.prototype={
$1(d){return this.a.cad()},
$S:7}
A.etr.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.e
s===$&&C.c()
w=s.c
w===$&&C.c()
v=this.b
v=v>0?"\n\nYou are paid "+v+" stars! \u2b50":""
s=C.d("The "+w.b.toLowerCase()+" is finished and nothing leaks."+v+"\n\nMistakes: "+s.w+"\n\nThe next job is different.",u,u,u,u,u,u,B.Ks,u,u,u)
return C.eg(C.a([C.bM(!1,B.aWy,u,u,!0,u,u,u,new A.etp(d),u,u),C.bH(B.fLD,u,new A.etq(t,d),u)],x.p),u,u,G.m6,s,u,u,u,u,B.fNf,u)},
$S:18}
A.etp.prototype={
$0(){C.a6(this.a,!1).O(null)
return null},
$S:0}
A.etq.prototype={
$0(){C.a6(this.b,!1).O(null)
this.a.b_8()},
$S:0}
A.ety.prototype={
$0(){var w,v,u=this.a
u.d=D.o.E(Date.now(),1e5)
w=u.gDa(0)
v=u.e
v===$&&C.c()
u.e=A.h7H(v.b,w,null)
u.x=""
u.as=!1
u.z=null
u.y=0
u.aeO()},
$S:0}
A.etG.prototype={
$1(d){return d.b===this.a},
$S:z+4}
A.ets.prototype={
$1(d){var w=this.a.e
w===$&&C.c()
return w.x.q(0,d.a)},
$S:z+4}
A.ett.prototype={
$1(d){return d.c.toLowerCase()},
$S:z+35}
A.etu.prototype={
$1(d){var w=this.a.e
w===$&&C.c()
return w.aIh(d.a)>0},
$S:z+4}
A.etC.prototype={
$0(){var w=this.b
w.x=this.a.b
w.aeO()},
$S:0}
A.etD.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
A.etE.prototype={
$0(){return this.a.y=this.b},
$S:0}
A.eto.prototype={
$0(){var w=this.a
return w.m(new A.etn(w,this.b,this.c))},
$S:0}
A.etn.prototype={
$0(){var w=this.a
w.x=this.b?"":this.c
w.aeO()},
$S:0}
A.etH.prototype={
$1(d){var w=this.a.e
w===$&&C.c()
return w.e.q(0,d.a)},
$S:z+4}
A.etL.prototype={
$0(){return this.a.c44(this.b)},
$S:0}
A.etJ.prototype={
$1(d){return d<=5},
$S:33}
A.etI.prototype={
$1(d){var w=this.a,v=w.e
v===$&&C.c()
return A.inZ(v,w.w.gf_()/1000)},
$S:z+9}
A.etK.prototype={
$0(){return this.b.cAL(this.a.a)},
$S:0}
A.etx.prototype={
$1(d){var w,v,u,t,s,r,q=null,p=this.a,o=p.e
o===$&&C.c()
o=C.a([B.fZf,D.aw,C.d("Mistakes "+o.w,q,q,q,q,q,q,B.Kv,q,q,q),D.X],x.p)
w=p.e.c
w===$&&C.c()
w=w.c
v=w.length
u=0
for(;u<v;++u){t=w[u]
s=D.c.j(0.05)
r=new C.aP(12,12)
o.push(C.p(q,C.d((p.e.e.q(0,t.a)?"\u2705":"\ud83d\udd27")+" "+t.c,q,q,q,q,q,q,B.fm0,q,q,q),D.f,q,q,new C.o(s,q,q,new C.bg(r,r,r,r),q,q,D.n),q,q,q,D.eK,D.bU,q,q,q))}o.push(D.an)
o.push(B.fD2)
o.push(D.P)
o.push(C.bH(B.aWA,q,new A.etw(p,d),q))
return C.bm(!0,C.cj(o,q,q,D.bR,q,q,D.ai,!0),!0,!1,D.ag,!0,!0)},
$S:25}
A.etw.prototype={
$0(){C.a6(this.b,!1).O(null)
this.a.b_8()},
$S:0}
A.h1N.prototype={
$1(d){return d.a===this.a},
$S:z+50}
A.cuN.prototype={
$1(d){return D.d.q(B.iP,d.b)},
$S:z+11}
A.cuU.prototype={
$1(d){return!this.a.y.q(0,d)},
$S:33}
A.cuV.prototype={
$1(d){var w=this.a
return w.x.an(0,d)&&w.z.q(0,d)},
$S:33}
A.cuW.prototype={
$1(d){var w=$.Hy()[this.b],v=!1
if(w>=d)if(w<=d+48){w=this.a.Q.h(0,d)
w=(w==null?null:w.a)===!0}else w=v
else w=v
return w},
$S:33}
A.cuX.prototype={
$1(d){return this.a.Q.h(0,d).c.q(0,this.b)},
$S:33}
A.cuZ.prototype={
$1(d){var w,v=J.e2(6,x.S)
for(w=0;w<6;++w)v[w]=w
return D.d.cM(v,new A.cuY(this.a,d))},
$S:33}
A.cuY.prototype={
$1(d){return this.a.c.q(0,this.b*10+d)},
$S:33}
A.cuM.prototype={
$1(d){var w=this.a.Q.h(0,d)
return(w==null?null:w.a)===!0},
$S:33}
A.cuK.prototype={
$1(d){return!A.j4(d).c},
$S:33}
A.cuL.prototype={
$1(d){var w=this.a.aqY(A.j4(d).d.a)
return(w==null?null:w.b.q(0,d))===!0},
$S:33}
A.cuS.prototype={
$1(d){return d.c},
$S:z+12}
A.cuT.prototype={
$1(d){return d.d},
$S:z+12}
A.cuO.prototype={
$1(d){return d.d},
$S:z+12}
A.cuP.prototype={
$1(d){var w=this.a.Q.h(0,d)
return(w==null?null:w.e)===!0},
$S:33}
A.cuQ.prototype={
$1(d){return d.a===this.a},
$S:z+13}
A.cv_.prototype={
$2(d,e){return e===this.a},
$S:389}
A.cuR.prototype={
$1(d){return d.c===this.a},
$S:z+11}
A.eya.prototype={
$0(){var w=this.a
w.ay=this.b
w.ch=this.c},
$S:0}
A.eyb.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.ey9(w))},
$S:0}
A.ey9.prototype={
$0(){return this.a.ay=null},
$S:0}
A.exg.prototype={
$0(){return this.a.cx=!0},
$S:0}
A.exh.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.exf(w))},
$S:12}
A.exf.prototype={
$0(){return this.a.cx=!1},
$S:0}
A.exi.prototype={
$0(){return this.a.cx=!0},
$S:0}
A.exj.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.exe(w))},
$S:12}
A.exe.prototype={
$0(){return this.a.cx=!1},
$S:0}
A.exk.prototype={
$1(d){return this.a.bSp()},
$S:7}
A.exl.prototype={
$1(d){return this.a.caj()},
$S:7}
A.exv.prototype={
$0(){return this.a.as=-1},
$S:0}
A.exx.prototype={
$0(){return this.a.as=-1},
$S:0}
A.exm.prototype={
$1(d){return d.b==="tv"},
$S:565}
A.exn.prototype={
$0(){return this.a.as=-1},
$S:0}
A.exo.prototype={
$0(){return this.a.as=-1},
$S:0}
A.exO.prototype={
$0(){var w=this.a
w.as=this.b
w.Q=-1
w.z=w.ax=""
w.CW=!1},
$S:0}
A.exw.prototype={
$0(){var w=this.a
w.as=-1
w.ax=""},
$S:0}
A.ey6.prototype={
$0(){return this.a.at=0},
$S:0}
A.ey7.prototype={
$0(){return this.a.z=""},
$S:0}
A.ey8.prototype={
$0(){return this.a.at=this.b},
$S:0}
A.ey3.prototype={
$0(){return this.a.z=""},
$S:0}
A.ey4.prototype={
$0(){var w=this.a,v=this.b
return w.Q=w.Q===v?-1:v},
$S:0}
A.ey5.prototype={
$0(){return this.a.at=2000+this.b},
$S:0}
A.ey2.prototype={
$0(){return this.a.z=""},
$S:0}
A.exV.prototype={
$1(d){return d.a===this.a},
$S:z+13}
A.exW.prototype={
$0(){return this.a.ax=""},
$S:0}
A.exX.prototype={
$1(d){return d.a===this.a},
$S:z+8}
A.exY.prototype={
$0(){var w=this,v=w.a,u=w.b
if(v.ax===u)u=""
v.ax=u
v.at=u.length===0?0:5000+w.c*100+w.d},
$S:0}
A.exZ.prototype={
$1(d){return d.a===this.a},
$S:z+8}
A.ey_.prototype={
$0(){return this.a.at=5000+this.b*100+this.c},
$S:0}
A.ey0.prototype={
$0(){var w=this.a
w.ax=""
w.at=0},
$S:0}
A.ey1.prototype={
$0(){return this.a.at=5000+this.b*100+this.c},
$S:0}
A.eye.prototype={
$0(){var w=this.b,v=D.d.q(B.zI,w.z),u=this.a.a
if(v)w.b3O(u)
else w.aA6(u)},
$S:0}
A.exu.prototype={
$1(d){var w=null
return C.eg(C.a([C.bM(!1,B.fPg,w,w,!0,w,w,w,new A.exs(d),w,w),C.bH(D.EJ,w,new A.ext(this.a,d),w)],x.p),w,w,G.m6,B.fEe,w,w,w,w,B.fM2,w)},
$S:18}
A.exs.prototype={
$0(){C.a6(this.a,!1).O(null)
return null},
$S:0}
A.ext.prototype={
$0(){C.a6(this.b,!1).O(null)
this.a.ayx(!0)},
$S:0}
A.exr.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.d
s===$&&C.c()
w=s.c
w===$&&C.c()
v=this.b
v=v>0?"\n\nYou are paid "+v+" stars! \u2b50":""
s=C.d("The "+w.toLowerCase()+" is built, wired, painted and tested."+v+"\n\nMistakes: "+s.f+"\nShocks: "+s.r+"\nLives left: "+s.e+"\n\nEvery job is a little different. Ready for another one?",u,u,u,u,u,u,B.Ks,u,u,u)
return C.eg(C.a([C.bM(!1,B.h_9,u,u,!0,u,u,u,new A.exp(d),u,u),C.bH(B.fLW,u,new A.exq(t,d),u)],x.p),u,u,G.m6,s,u,u,u,u,B.fU2,u)},
$S:18}
A.exp.prototype={
$0(){C.a6(this.a,!1).O(null)
return null},
$S:0}
A.exq.prototype={
$0(){C.a6(this.b,!1).O(null)
this.a.b0m()},
$S:0}
A.exy.prototype={
$0(){if(!this.b)this.a.e=D.o.E(Date.now(),1e5)
var w=this.a
w.d=A.cuJ(null,null,!0,w.gDa(0),!0)
w.y=0
w.z=""
w.as=-1
w.ax=""
w.at=0
w.cy=!1
w.x.a9(0)
w.ay=null
w.r=A.x5(w.d,new A.rW(w.z,w.as,!1))},
$S:0}
A.eyf.prototype={
$1(d){var w=this.a
if(w.c)w=d==="light"||d==="fan"
else w=w.e==="switch"?D.d.q(B.iP,d):D.d.q(B.k7,d)
return w},
$S:3}
A.eyh.prototype={
$0(){var w=this.a,v=w.d
v===$&&C.c()
return w.ie(v.aJC(w.as))},
$S:0}
A.eyi.prototype={
$0(){var w=this.a,v=w.d
v===$&&C.c()
return w.ie(v.aoW(w.as))},
$S:0}
A.eyj.prototype={
$0(){var w=this.a,v=w.d
v===$&&C.c()
return w.ie(v.aFQ(w.as))},
$S:0}
A.eyk.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.apj(v.as)
v.ie(w)
if(w.a)v.Q4()},
$S:0}
A.eyl.prototype={
$0(){var w=this.a,v=w.d
v===$&&C.c()
return w.ie(v.aoW(w.as))},
$S:0}
A.eym.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.apj(v.as)
v.ie(w)
if(w.a){v.Q4()
v.os("The "+A.x6(this.b.a)+" is out and the box is empty. Pick the kind you want from the tray, then tap the box.",!0)}},
$S:0}
A.eyn.prototype={
$1(d){return!this.a.b.b.ij(0,d.a)},
$S:z+8}
A.eyo.prototype={
$0(){var w=this.a
return w.m(new A.eyg(w,this.b))},
$S:0}
A.eyg.prototype={
$0(){var w=this.a,v=this.b,u=v.a
if(w.ax===u)u=""
w.ax=u
if(u.length!==0)w.os(v.b+": now tap the screw it belongs on.",!0)},
$S:0}
A.eyc.prototype={
$1(d){return!this.a.b.b.an(0,d.a)},
$S:z+13}
A.eyd.prototype={
$0(){var w=this.a
return w.aA3(w.as,this.b.a)},
$S:0}
A.exM.prototype={
$1(d){return new C.N(d,new A.exN(),d.$ti.k("N<ak.E,m>")).aN(0,", ")},
$S:1833}
A.exN.prototype={
$1(d){return A.j4(d).b},
$S:76}
A.exz.prototype={
$1(d){var w=this.a.d
w===$&&C.c()
return!w.x.an(0,d.a)},
$S:z+11}
A.exA.prototype={
$1(d){var w=this.a.d
w===$&&C.c()
return!w.z.q(0,d.a)},
$S:z+11}
A.exB.prototype={
$1(d){var w=this.a.d
w===$&&C.c()
return!w.y.q(0,d)},
$S:33}
A.exE.prototype={
$1(d){return!d.a},
$S:z+12}
A.exF.prototype={
$1(d){return d.b<3},
$S:z+12}
A.exG.prototype={
$1(d){return!d.c},
$S:z+12}
A.exH.prototype={
$1(d){return!d.d},
$S:z+12}
A.exI.prototype={
$1(d){return!d.c},
$S:z+12}
A.exJ.prototype={
$1(d){var w=this.a.d
w===$&&C.c()
w=w.at.h(0,d.a)
w=w==null?null:w.a
return w!==d.b},
$S:z+11}
A.exK.prototype={
$1(d){return d.a},
$S:z+114}
A.exL.prototype={
$1(d){var w=this.a.d
w===$&&C.c()
w=w.at.h(0,d.a)
w=w==null?null:w.b.c
return(w==null?0:w)<2},
$S:z+11}
A.exC.prototype={
$1(d){var w
if(D.d.q(B.k7,d.b)){w=this.a.d
w===$&&C.c()
w=w.at.h(0,d.a)
w=(w==null?null:w.c)!==!0}else w=!1
return w},
$S:z+11}
A.exD.prototype={
$1(d){return d.b==="fan"},
$S:z+11}
A.eyO.prototype={
$0(){return this.a.cjt(this.b)},
$S:0}
A.eyP.prototype={
$0(){var w=this.a
if(w.as>=0)w.Q4()
else{w.m(new A.eyx(w))
w.b62()}},
$S:0}
A.eyx.prototype={
$0(){return this.a.at=0},
$S:0}
A.eyN.prototype={
$1(d){var w,v,u,t=this.a,s=t.d
s===$&&C.c()
w=t.w.gf_()
v=t.Q
u=t.y===2&&t.as<0&&t.d.gth()
return A.iof(s,w/1000,t.x,u,v)},
$S:z+9}
A.eyA.prototype={
$0(){var w=this.a,v=w.d
v===$&&C.c()
return w.ie(v.a7k())},
$S:0}
A.eyB.prototype={
$0(){var w=this.a
return w.m(new A.eyz(w,this.b))},
$S:0}
A.eyz.prototype={
$0(){var w,v=this.b.b
v.f=!v.f
v=this.a
w=v.d
w===$&&C.c()
v.r=A.x5(w,new A.rW(v.z,v.as,!1))},
$S:0}
A.eyC.prototype={
$0(){var w=this.a
return w.m(new A.eyy(w,this.b))},
$S:0}
A.eyy.prototype={
$0(){var w,v=this.b.b
v.e=!v.e
v=this.a
w=v.d
w===$&&C.c()
v.r=A.x5(w,new A.rW(v.z,v.as,!1))},
$S:0}
A.eyQ.prototype={
$0(){var w=this.a
return w.m(new A.eyw(w,this.b))},
$S:0}
A.eyw.prototype={
$0(){var w,v=this.a
v.y=this.b
v.Q=-1
v.z=""
w=v.d
w===$&&C.c()
v.r=A.x5(w,new A.rW("",v.as,!1))},
$S:0}
A.eyR.prototype={
$0(){var w=this.a
return w.m(new A.eyv(w))},
$S:0}
A.eyv.prototype={
$0(){var w,v=this.a
v.y=(v.y+1)%3
v.Q=-1
v.z=""
w=v.d
w===$&&C.c()
v.r=A.x5(w,new A.rW("",v.as,!1))},
$S:0}
A.eyS.prototype={
$0(){var w=this.a
return w.m(new A.eyu(w))},
$S:0}
A.eyu.prototype={
$0(){var w=this.a,v=w.d
v===$&&C.c()
v.amJ()
w.y=2
w.z=""
w.r=A.x5(w.d,new A.rW("",w.as,!1))
w.os("The boxes, the cable and the walls are done. Now the wiring: pick an Outlet or a Switch from the tray, then tap its box on the wall.",!0)},
$S:0}
A.eyT.prototype={
$0(){var w=this.a
return w.m(new A.eyt(w))},
$S:0}
A.eyt.prototype={
$0(){return this.a.Q=-1},
$S:0}
A.eyU.prototype={
$0(){var w=this.a,v=w.Q
if(v>=0&&w.y===2){w.m(new A.eyq(w,this.b))
w.aA6(v)
if(w.c!=null&&w.as<0)w.m(new A.eyr(w))
return}w.m(new A.eys(w,this.b))},
$S:0}
A.eyq.prototype={
$0(){return this.a.z=this.b.a},
$S:0}
A.eyr.prototype={
$0(){return this.a.z=""},
$S:0}
A.eys.prototype={
$0(){var w,v=this.a,u=this.b.a,t=v.z===u?"":u
v.z=t
v.at=0
w=v.d
w===$&&C.c()
v.r=A.x5(w,new A.rW(t,v.as,!1))
if(v.z.length!==0)v.cuo(u)},
$S:0}
A.eyV.prototype={
$0(){var w=this.a,v=w.d
v===$&&C.c()
return w.ie(v.cV0())},
$S:0}
A.eyD.prototype={
$1(d){return!this.a.b.b.ij(0,d.a)},
$S:z+8}
A.eyE.prototype={
$0(){var w=this.a
return w.m(new A.eyp(w,this.b,this.c))},
$S:0}
A.eyp.prototype={
$0(){var w,v=this,u=v.c,t=u.a
if(v.b.b.b.ij(0,t)){v.a.aeP("That wire is already fastened. Tap the wire in the 3D view to take it off.")
return}w=v.a
if(w.ax===t)t=""
w.ax=t
if(t.length!==0)w.os(u.b+": now tap the screw it belongs on, or press the matching button below.",!0)},
$S:0}
A.eyF.prototype={
$1(d){return!this.a.b.b.an(0,d.a)},
$S:z+13}
A.eyG.prototype={
$0(){var w=this.a
return w.aA3(w.as,this.b.a)},
$S:0}
A.eyH.prototype={
$0(){var w=this.a,v=w.d
v===$&&C.c()
return w.ie(v.aJC(w.as))},
$S:0}
A.eyI.prototype={
$0(){var w=this.a,v=w.d
v===$&&C.c()
return w.ie(v.aoW(w.as))},
$S:0}
A.eyJ.prototype={
$0(){var w=this.a,v=w.d
v===$&&C.c()
return w.ie(v.aFQ(w.as))},
$S:0}
A.eyK.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.apj(v.as)
v.ie(w)
if(w.a)v.Q4()},
$S:0}
A.eyL.prototype={
$0(){var w=this.a,v=w.d
v===$&&C.c()
return w.ie(v.aoW(w.as))},
$S:0}
A.eyM.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.apj(v.as)
v.ie(w)
if(w.a){v.Q4()
v.os("The "+A.x6(this.b.a)+" is out and the box is empty. Pick the kind you want from the tray (a different outlet or switch is fine), then tap the box.",!0)}},
$S:0}
A.exU.prototype={
$1(d){return new C.e_(new A.exT(this.a,this.b),null)},
$S:21}
A.exT.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=C.aG(d,k,x.w).w,i=this.a,h=i.d
h===$&&C.c()
w=h.c
w===$&&C.c()
v=x.p
h=C.a([C.d("Job: "+w,k,k,k,k,k,k,D.dg,k,k,k),D.aw,C.d("Mistakes "+h.f+" \xb7 Shocks "+h.r+" \xb7 Lives "+h.e,k,k,k,k,k,k,B.Kv,k,k,k),D.X,B.fPR,D.an],v)
w=i.d.d
w===$&&C.c()
u=w.length
t=0
for(;t<w.length;w.length===u||(0,C.J)(w),++t){s=w[t]
r=D.c.j(0.05)
q=new C.aP(12,12)
p=new C.ay(D.bB,1,D.r,-1)
o=s.a
n=i.d.at.h(0,o)
n=(n==null?k:n.b.c)===2?"\u2705":"\u2b1c"
m=s.b
if(m==="gfci")m="A GFCI outlet"
else if(m==="outlet")m="An outlet"
else if(m==="switch")m="A light switch"
else if(m==="light")m="A ceiling light"
else m=m==="fan"?"A ceiling fan":"A "+A.x6(m).toLowerCase()
o=A.j4(o)
l=s.c
l=l!=null?", turned on by "+A.j4(l).b:""
h.push(C.p(k,C.d(n+" "+m+" at "+o.b+l,k,k,k,k,k,k,D.pM,k,k,k),D.f,k,k,new C.o(r,k,new C.bG(p,p,p,p),new C.bg(q,q,q,q),k,k,D.n),k,k,k,D.eK,D.bU,k,k,k))}h.push(D.X)
h.push(D.an)
w=this.b
h.push(C.A(C.a([C.E(C.dT(B.fNj,new A.exP(w),k),1),D.ae,C.E(C.bH(B.fLd,k,new A.exQ(i,d,w),k),1)],v),D.m,k,D.e,D.i,0,k,k))
h.push(D.an)
h.push(D.an)
h.push(C.A(C.a([C.E(C.dT(B.fFn,new A.exR(i,d),k),1),D.ae,C.E(C.bH(B.aWA,k,new A.exS(i,d),k),1)],v),D.m,k,D.e,D.i,0,k,k))
return C.bm(!0,new C.cR(new C.aZ(0,1/0,0,j.a.b*0.8),C.cj(h,k,k,D.bR,k,k,D.ai,!0),k),!0,!1,D.ag,!0,!0)},
$S:85}
A.exP.prototype={
$0(){return A.hfb(this.a)},
$S:0}
A.exQ.prototype={
$0(){var w=0,v=C.j(x.H),u=this,t,s,r
var $async$$0=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:C.a6(u.b,!1).O(null)
t=u.a
s=t.d
s===$&&C.c()
r=s.c
r===$&&C.c()
w=2
return C.b(A.hD3(u.c,s.d0s(),t.d.d0t(),r),$async$$0)
case 2:return C.h(null,v)}})
return C.i($async$$0,v)},
$S:1}
A.exR.prototype={
$0(){C.a6(this.b,!1).O(null)
this.a.ayx(!0)},
$S:0}
A.exS.prototype={
$0(){C.a6(this.b,!1).O(null)
this.a.b0m()},
$S:0}
A.fvz.prototype={
$1(d){var w=this.a,v=d.a
return w>v[0]&&w<v[1]},
$S:517}
A.fvA.prototype={
$1(d){var w=this.a,v=d.a
return w>v[2]&&w<v[3]},
$S:517}
A.fDu.prototype={
$1(d){return 5000+this.a.a*100+d},
$S:69}
A.fDv.prototype={
$1(d){return 3000+this.a.a},
$S:69}
A.fDw.prototype={
$1(d){return 2000+this.a.a},
$S:69}
A.fDz.prototype={
$5$col$round(d,e,f,g,h){var w=this.a
w.f=3
w.b=d
w.d=0.5
w.e=0.9
if(h)w.dq(e.aK(0,B.eb),e.a7(0,B.eb),f.a/2,g,14)
else w.aF(e,f,g)
w.e=0
w.d=1
w.f=2},
$3(d,e,f){return this.$5$col$round(d,e,f,D.b0,!1)},
$4$round(d,e,f,g){return this.$5$col$round(d,e,f,D.b0,g)},
$4$col(d,e,f,g){return this.$5$col$round(d,e,f,g,!1)},
$S:z+115}
A.fDx.prototype={
$3(d,e,f){return K.LV(d,e,0,f+this.a.a*5)},
$S:23}
A.fDy.prototype={
$0(){var w,v=this.a
if(v.c)w="A place in the ceiling for a "+(v.e==="fan"?"fan (needs a fan-rated box)":"light")+"."
else w="A place on the wall at "+(v.e==="switch"?"switch height, about 48 inches from the floor":"outlet height, about 16 inches from the floor")+"."
return new A.cH(v.b,w,A.aiw(v,B.abF),26)},
$S:z+116}
A.fUK.prototype={
$1(d){return d.e==="fan"},
$S:z+50}
A.fUL.prototype={
$1(d){return d.b==="light"},
$S:z+11}
A.fUM.prototype={
$1(d){return A.aiw(this.a,d)},
$S:z+7}
A.cyd.prototype={
$1(d){return d.a===this.a&&!d.c},
$S:z+17}
A.cy9.prototype={
$1(d){return d.a===B.a1c},
$S:z+17}
A.cyb.prototype={
$1(d){return d.c},
$S:z+17}
A.cyc.prototype={
$1(d){return d.c},
$S:z+17}
A.cya.prototype={
$1(d){return B.wU.h(0,d.a).e===this.a&&!d.c},
$S:z+17}
A.eAh.prototype={
$0(){var w=this.a
w.z=this.b
w.Q=this.c},
$S:0}
A.eAi.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.eAg(w))},
$S:0}
A.eAg.prototype={
$0(){return this.a.z=null},
$S:0}
A.eA6.prototype={
$0(){return this.a.y=0},
$S:0}
A.eAb.prototype={
$0(){return this.a.as=!0},
$S:0}
A.eAc.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.eAa(w))},
$S:12}
A.eAa.prototype={
$0(){return this.a.as=!1},
$S:0}
A.eAd.prototype={
$0(){var w=this.a,v=w.d
v===$&&C.c()
w.r=A.ah7(v.d)
w.y=this.b},
$S:0}
A.eAe.prototype={
$1(d){return this.a.cjB()},
$S:7}
A.eAf.prototype={
$1(d){return this.a.car()},
$S:7}
A.eA9.prototype={
$1(d){var w=null
return C.eg(C.a([C.bH(B.fNa,w,new A.eA8(this.a,d),w)],x.p),w,w,G.m6,B.fMi,w,w,w,w,B.fSH,w)},
$S:18}
A.eA8.prototype={
$0(){C.a6(this.b,!1).O(null)
this.a.axX()},
$S:0}
A.eA5.prototype={
$1(d){var w=null,v=this.a,u=v.d
u===$&&C.c()
u=C.d("Every problem on the customer's list is fixed.\n\nYou are paid "+this.b+" stars! \u2b50\n\nMistakes: "+u.f+"\nShocks: "+u.r+"\nLives left: "+u.e+"\n\nThe next call will have different problems.",w,w,w,w,w,w,B.Ks,w,w,w)
return C.eg(C.a([C.bM(!1,B.aWy,w,w,!0,w,w,w,new A.eA3(d),w,w),C.bH(B.fOt,w,new A.eA4(v,d),w)],x.p),w,w,G.m6,u,w,w,w,w,B.fVb,w)},
$S:18}
A.eA3.prototype={
$0(){C.a6(this.a,!1).O(null)
return null},
$S:0}
A.eA4.prototype={
$0(){C.a6(this.b,!1).O(null)
this.a.axX()},
$S:0}
A.eA7.prototype={
$0(){var w,v,u=this.a
u.e=D.o.E(Date.now(),1e5)
w=u.gDa(0)
v=u.d
v===$&&C.c()
w=A.hqh(v.b,w)
u.d=w
u.r=A.ah7(w.d)
u.at=!1
u.z=null
u.y=0},
$S:0}
A.eAu.prototype={
$0(){return this.a.cEo(this.b)},
$S:0}
A.eAq.prototype={
$1(d){return d<=5},
$S:33}
A.eAp.prototype={
$1(d){var w=this.a,v=w.d
v===$&&C.c()
return A.hyW(v.d,w.w.gf_()/1000)},
$S:z+9}
A.eAr.prototype={
$1(d){return!d.c},
$S:z+17}
A.eAs.prototype={
$1(d){return B.wU.h(0,d.a).a},
$S:z+118}
A.eAt.prototype={
$0(){var w=this.a
return w.m(new A.eAo(w,this.b))},
$S:0}
A.eAo.prototype={
$0(){return this.a.x=this.b},
$S:0}
A.eAn.prototype={
$1(d){return new C.e_(new A.eAm(this.a),null)},
$S:21}
A.eAm.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=this.a,j=k.d
j===$&&C.c()
w=x.p
j=C.a([B.fKH,D.aw,C.d("Mistakes "+j.f+" \xb7 Shocks "+j.r+" \xb7 Lives "+j.e,l,l,l,l,l,l,B.Kv,l,l,l),D.X],w)
v=k.d.c
v===$&&C.c()
u=v.length
t=0
for(;t<v.length;v.length===u||(0,C.J)(v),++t){s=v[t]
r=D.c.j(0.05)
q=new C.aP(14,14)
p=new C.ay(s.c?D.b9.j(0.6):D.bB,1,D.r,-1)
o=s.c?"\u2705":"\ud83d\udd27"
n=B.wU.h(0,s.a).a
m=s.c?D.aD:D.c
j.push(C.p(l,C.d(o+" "+n,l,l,l,l,l,l,new C.G(!0,m,l,l,l,l,13.5,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l),l,l,l),D.f,l,l,new C.o(r,l,new C.bG(p,p,p,p),new C.bg(q,q,q,q),l,l,D.n),l,l,l,D.cv,D.bh,l,l,l))}j.push(D.an)
j.push(B.fQ1)
j.push(D.P)
j.push(C.A(C.a([B.bHq,C.b8D(l,l,l,l,!1,D.y,l,l,l,l,l,l,new A.eAk(k,e),l,l,l,l,l,l,l,l,k.d.b)],w),D.m,l,D.e,D.i,0,l,l))
j.push(C.bH(B.fT9,l,new A.eAl(k,d),l))
return C.bm(!0,C.cj(j,l,l,D.bR,l,l,D.ai,!0),!0,!1,D.ag,!0,!0)},
$S:85}
A.eAk.prototype={
$1(d){var w=this.a.d
w===$&&C.c()
w.b=d
this.b.$1(new A.eAj())},
$S:9}
A.eAj.prototype={
$0(){},
$S:0}
A.eAl.prototype={
$0(){C.a6(this.b,!1).O(null)
this.a.axX()},
$S:0}
A.fo9.prototype={
$1(d){return d.d===this.a},
$S:z+22}
A.bVZ.prototype={
$1(d){var w,v,u,t,s=this.a,r=s.p1
if(r!=="back"){s=r==="left"?-1.5707963267948966:1.5707963267948966
return new C.y(new C.y(0,d),s)}r=s.k1
w=A.hfn(s,A.aQg(r==null?"tv100":r),0)
s=w.c
r=w.a/2
v=s-r-18
u=this.b
t=-u/2+14
if(v<t)v=s+r+18
v=D.k.F(v,t,u/2-14)
return new C.y(new C.y(v,d),Math.atan2(s-v,-d))},
$S:1835}
A.bW_.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n
for(w=this.a,v=w.a,u=v.as,t=u.length,s=t-1,r=0,q=0;q<t;++q,r=o){p=u[q]
o=r+p
if(d<=o||q===s){n=p===0?0:D.k.F((d-r)/p,0,1)
v=w.a.b
u=v[q]
t=u.a
v=v[q+1]
u=u.b
return new C.y(t+(v.a-t)*n,u+(v.b-u)*n)}}w=v.b
w.toString
return D.d.gam(w)},
$S:1836}
A.d9T.prototype={
$0(){var w=this.a
w.d=this.b
w.f.a9(0)
w.y=w.x=w.w=w.r=null},
$S:0}
A.d9U.prototype={
$0(){var w=this.a,v=this.b,u=w.w===v?null:v
w.w=u
if(u!=null){w.y='Now tap the place on the diagram where "'+v+'" goes.'
w.z=!0}},
$S:0}
A.d9V.prototype={
$0(){var w=this.a
w.y="Pick a wire on the left first, then tap the place it goes."
w.z=!1},
$S:0}
A.d9W.prototype={
$0(){var w,v,u,t,s=this.a,r=this.b,q=this.c
s.f.n(0,r,q)
s.x=r
s.w=s.r=null
if(!s.e){w=B.qM[s.d]
v=w.e.h(0,r)
v.toString
u=x.N
t=A.hyw(w.b,C.I([r,v],u,u),C.I([r,q],u,u))
u=t.a===B.r_
s.z=u
if(u)r="Right: this follows the diagram."
else{r=t.b
r=D.d.gH(r).c+" "+D.d.gH(r).e}s.y=r}else s.y=null},
$S:0}
A.d9P.prototype={
$0(){return this.a.cDt(this.b)},
$S:0}
A.d9S.prototype={
$0(){return this.a.cDE(this.b)},
$S:0}
A.d9R.prototype={
$0(){var w=this.a
return w.m(new A.d9Q(w,this.b))},
$S:0}
A.d9Q.prototype={
$0(){var w,v,u,t,s
for(w=this.b,v=w.length,u=this.a,t=u.f,s=0;s<w.length;w.length===v||(0,C.J)(w),++s)t.W(0,w[s])
u.r=null},
$S:0}
A.da0.prototype={
$0(){return A.hfb(this.a)},
$S:0}
A.da1.prototype={
$0(){return this.a.cb2(this.b)},
$S:0}
A.da2.prototype={
$0(){var w=this.a
return w.m(new A.da_(w))},
$S:0}
A.da_.prototype={
$0(){var w=this.a
w.e=!1
w.y=w.r=null},
$S:0}
A.da3.prototype={
$0(){var w=this.a
return w.m(new A.d9Z(w))},
$S:0}
A.d9Z.prototype={
$0(){var w=this.a
w.e=!0
w.y=w.r=null},
$S:0}
A.da4.prototype={
$2(d,e){var w,v,u,t=null,s=(e.b-56)/2,r=this.a,q=C.bR(0,C.c9(r.gab7(),new A.d9Y(r,s),t),0,0,0),p=x.p,o=C.a([],p)
for(w=B.qM[r.d].e,w=J.aX(w.ges(w));w.C();)o.push(r.c3z(w.gR(w)))
o=C.ap(t,C.x(o,D.m,t,D.e,D.i,0,D.p),t,t,0,t,0,s)
w=C.a([],p)
for(v=B.qM[r.d].d,u=0;u<5;++u)w.push(r.cjH(v[u]))
return new C.a5(t,this.b,new C.an(D.a0,t,D.ac,D.t,C.a([q,o,C.ap(t,C.x(w,D.m,t,D.e,D.i,0,D.p),t,t,t,0,0,s)],p),t),t)},
$S:153}
A.d9Y.prototype={
$2(d,e){var w,v,u,t=null,s=this.a,r=B.qM[s.d].e
r=J.pU(r.ges(r))
w=B.qM[s.d]
v=x.N
v=C.dL(s.f,v,v)
u=s.x
s=s.gab7().x
s===$&&C.c()
return C.b4(t,t,t,new A.bxF(r,w.d,v,this.b,u,s,t),D.ay)},
$S:61}
A.da5.prototype={
$0(){var w=this.a
return w.m(new A.d9X(w))},
$S:0}
A.d9X.prototype={
$0(){var w=this.a,v=B.qM[w.d]
return w.r=A.hyw(v.b,v.e,w.f)},
$S:0}
A.fjW.prototype={
$1(d){return d*66+29},
$S:172}
A.fFl.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=this
for(w=k.a*1.8,v=k.b,u=k.c,t=k.d,s=0.3*t,t=0.05*t,r=0;r<d;++r){q=w+r*0.173
p=D.k.E(q,1)
o=Math.sin((r*3.1+D.k.bh(q))*12.9898)*43758.5453
n=(o-Math.floor(o))*3.141592653589793*2
o=Math.sin((r+5)*12.9898)*43758.5453
m=e*(0.6+(o-Math.floor(o))*0.8)
q=u.$1(new A.r(Math.cos(n)*p*m,Math.sin(n)*p*m-p*p*6,3+p*3))
l=C.ar(E.ZK,F.Na,p)
l.toString
v.eK(q,s*(1-p*0.6)+t,l,3,5,0)}},
$S:1837}
A.fFk.prototype={
$3(d,e,f){var w,v,u,t,s,r,q,p,o,n=this,m=n.a
m.d=0.34
for(w=n.b,v=w*0.45,u=n.c,t=n.d,s=1-e,r=0;r<d;++r){q=D.k.E(v+r/d,1)
p=u.$1(new A.r(Math.sin(r*1.7+w)*1.4+q*1.5,q*f-1,3.5+q*4))
o=C.ar(G.BG,B.brV,s)
o.toString
o=C.ar(o,B.bem,q)
o.toString
m.eK(p,(1.1+q*3.4)*t,o,3,6,0)}m.d=1},
$S:1838}
A.fER.prototype={
$5(d,e,f,g,h){return this.a.push(new A.wA(d,e,f,g,h))},
$S:z+119}
A.fEW.prototype={
$2(d,e){var w=this.a
return new C.X(w,new A.fEX(d,e),C.T(w).k("X<1>")).gI(0)},
$S:z+120}
A.fEX.prototype={
$1(d){return d.a.c===this.a&&d.b.c===this.b},
$S:z+16}
A.fES.prototype={
$1(d){return d.b.c===B.aTY},
$S:z+16}
A.fET.prototype={
$1(d){return d.a.c===B.aZU},
$S:z+16}
A.fEU.prototype={
$1(d){return!1},
$S:z+16}
A.fEV.prototype={
$1(d){return!1},
$S:z+16}
A.fnH.prototype={
$1(d){return D.d.aX(this.a,new A.fnI(d))},
$S:3}
A.fnI.prototype={
$1(d){return d.a===this.a},
$S:z+42}
A.cBa.prototype={
$1(d){return A.hYE(d)},
$S:z+16}
A.cBb.prototype={
$2(d,e){return d+e},
$S:63}
A.cBc.prototype={
$1(d){return d.b.a===B.r_},
$S:z+44}
A.fEY.prototype={
$2(d,e){var w=this.a.h(0,d)
if(w==null)this.b.push(new A.wA("LEAD_MISSING",B.JS,"The "+d+" lead is not connected.","Every lead on the diagram needs its connection.","Connect the "+d+" lead to "+e+"."))
else if(w!==e)this.b.push(new A.wA("LEAD_WRONG",B.aRn,"The "+d+" lead is connected to "+w+", but the diagram says "+e+".","Connections follow the approved wiring diagram.","Move the "+d+" lead to "+e+"."))},
$S:121}
A.h1K.prototype={
$1(d){var w,v,u,t,s,r=null,q=C.aG(d,r,x.w).w,p=x.p,o=C.a([B.fBz,D.an,B.fVf,D.X],p)
for(w=0;w<5;++w){v=B.dfh[w]
u=D.c.j(0.05)
t=new C.aP(12,12)
s=new C.ay(D.bB,1,D.r,-1)
o.push(C.p(r,C.x(C.a([C.d(v.a+": "+v.b,r,r,r,r,r,r,D.aVh,r,r,r),D.cU,C.d("Goes to: "+v.c+"\nCircuit: "+v.d,r,r,r,r,r,r,G.EH,r,r,r),D.cU,C.d(v.e,r,r,r,r,r,r,D.aVZ,r,r,r),D.cU,C.d("Exception: "+v.f,r,r,r,r,r,r,B.ftQ,r,r,r)],p),D.E,r,D.e,D.i,0,D.p),D.f,r,r,new C.o(u,r,new C.bG(s,s,s,s),new C.bg(t,t,t,t),r,r,D.n),r,r,r,D.cv,D.yx,r,r,r))}o.push(D.an)
o.push(B.fCT)
return C.bm(!0,new C.cR(new C.aZ(0,1/0,0,q.a.b*0.85),C.cj(o,r,r,D.bR,r,r,D.ai,!0),r),!0,!1,D.ag,!0,!0)},
$S:25}
A.h1I.prototype={
$1(d){return new A.a1L(this.a,this.b,null)},
$S:z+123}
A.fdz.prototype={
$1(d){var w=this.a,v=w.a.c,u=this.b
d.toString
v.c.n(0,u,d)
w.m(new A.fdy(w,u,d))},
$S:151}
A.fdy.prototype={
$0(){var w=this.c
this.a.d.n(0,this.b,w)
return w},
$S:0}
A.fdA.prototype={
$0(){var w=this.a
w.m(new A.fdx(w,w.a.c.bst(0)))},
$S:0}
A.fdx.prototype={
$0(){return this.a.e=this.b},
$S:0}
A.fdB.prototype={
$1(d){return d.b.a!==B.r_},
$S:z+44}
A.fdC.prototype={
$0(){var w=this.a,v=w.c
v.toString
w=w.e
C.a6(v,!1).O(w)
return null},
$S:0}
A.fGb.prototype={
$1(d){return d.a===this.a},
$S:z+53}
A.fGa.prototype={
$1(d){return d.a===this.a},
$S:z+53}
A.fEJ.prototype={
$3(d,e,f){var w=this.a,v=w.b==="switch"?48:16
return A.eZ(w.c,this.b+d,v+e,f)},
$S:z+19}
A.fBH.prototype={
$3(d,e,f){return A.ti(new A.r(d,e,f),this.a).a7(0,this.b)},
$S:z+19}
A.fBF.prototype={
$3(d,e,f){return A.my(d,e,f,this.a.a+this.b.b.length+D.k.bh(f/7))},
$S:23}
A.fBG.prototype={
$3(d,e,f){return K.LV(d,e,0,f)},
$S:23}
A.fmM.prototype={
$1(d){var w
if(d.b===0){w=this.a
w=w>=d.c&&w<d.d&&0>=d.e&&0<d.f}else w=!1
return w},
$S:z+14}
A.fmN.prototype={
$1(d){var w=d.b,v=!1
if(w-1===this.a.c)if(w!==0){w=this.b
w=w>=d.c&&w<d.d}else w=v
else w=v
return w},
$S:z+14}
A.fmO.prototype={
$1(d){var w=d.b
return w!==0&&w-1===this.a.b},
$S:z+14}
A.bO4.prototype={
$1(d){return this.a.b.h(0,d.a).a},
$S:z+14}
A.bOa.prototype={
$1(d){return d.a===this.a},
$S:z+33}
A.bO9.prototype={
$1(d){return this.a.b.h(0,d.b).d.q(0,d.a)},
$S:z+33}
A.bOc.prototype={
$1(d){return D.d.aX(d,new A.bOd())},
$S:1839}
A.bOd.prototype={
$1(d){return d},
$S:97}
A.bO7.prototype={
$1(d){return d.b===0===this.a},
$S:z+14}
A.bO5.prototype={
$1(d){return d.a===6},
$S:z+26}
A.bO8.prototype={
$1(d){return d.a},
$S:z+54}
A.bOb.prototype={
$1(d){return d.c},
$S:z+54}
A.bO6.prototype={
$2(d,e){return d+e.d.a},
$S:z+129}
A.fCs.prototype={
$3(d,e,f){var w,v,u,t,s,r
for(w=$.xl(),v=w.length,u=d.a,t=this.a.b,s=0;s<w.length;w.length===v||(0,C.J)(w),++s){r=w[s]
if(r.b===u&&r.d>=0&&t.h(0,u).d.q(0,r.a)&&e>r.e-0.5&&e<r.f+0.5&&f>r.r-0.5&&f<r.w+0.5)return!0}return!1},
$S:z+130}
A.fCv.prototype={
$9$shine(d,e,f,g,h,i,j,k,l){var w,v,u=f-e
if(u<0.05||h-g<0.05)return
w=A.eZ(d,(e+f)/2,(g+h)/2,i)
v=h-g
u=(d&1)===0?new A.r(u,v,j):new A.r(j,v,u)
this.a.aD(w,u,k,l)},
$8(d,e,f,g,h,i,j,k){return this.$9$shine(d,e,f,g,h,i,j,k,0)},
$S:1840}
A.fCo.prototype={
$1(d){var w,v=this.a
if(d.b===v.b-1){w=d.c
v=w>v.c+0.9&&w<v.d-0.9}else v=!1
return v},
$S:z+31}
A.fCn.prototype={
$4(d,e,f,g){var w=this.b.b,v=A.eZ(w,(d+e)/2,(f+g)/2,this.c),u=e-d,t=g-f
w=(w&1)===0?new A.r(u,t,0.28):new A.r(0.28,t,u)
return this.a.aD(v,w,B.Nj,0.8)},
$S:542}
A.fCu.prototype={
$2(d,e){var w,v,u=C.a([5.5],x.n),t=this.a
if(t>=2)u.push(4.6)
if(t>=3)u.push(10)
if(t>=4)u.push(14)
t=u.length
w=0
v=0
for(;v<u.length;u.length===t||(0,C.J)(u),++v){e.$3(u[v],0.02+w*0.03,d.$1(w));++w}},
$S:1841}
A.fCq.prototype={
$1(d){var w,v
if(d===1)w=B.ai0
else{w=this.a
if(this.b)v=d===(w>=4?3:w-1)
else v=!1
if(w>=5)w=B.MC
else w=v?B.Ng:B.FO}return w},
$S:1842}
A.fCp.prototype={
$3(d,e,f){var w,v,u,t,s,r,q=4+e
for(w=this.a,v=w-1,u=this.b,t=this.c,s=d/2,r=48;r<v;r+=48)u.$8(t,r-s,r+s,0,95.5,q,0.08,f)
v=d*0.5
u.$8(t,0.4,0.4+v,0,95.5,q,0.08,f)
s=w-0.4
u.$8(t,s-v,s,0,95.5,q,0.08,f)
u.$8(t,0,w,95.5-v,95.5,q,0.08,f)},
$S:516}
A.fCt.prototype={
$3(d,e,f){var w=this.a
w.b=d
w.f=3
w.e=0.9
w.d=0.02
w.aF(e,f,D.c)
w.d=1
w.e=0
w.f=2},
$S:z+55}
A.fCr.prototype={
$4$r(d,e,f,g){var w=this.a
w.b=d
w.f=2
w.e=3
w.d=0.95
w.eK(e,g,f,4,8,0.3)
w.d=1
w.e=0},
$3(d,e,f){return this.$4$r(d,e,f,3)},
$S:z+56}
A.fCw.prototype={
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
p.aF(new A.r(w,95.2,s),new A.r(v-1,0.2,u-1),f)
p.d=1
p.e=0
p.f=2
q.b.$3(d,new A.r(w,94.5,s),new A.r(v,2,u))
q.c.$3(d,new A.r(w,94.2,s),f)}else{--w
t/=2
u=A.eZ(w,t,48,4.4)
s=v-1
r=(w&1)===0
p.aF(u,r?new A.r(s,94,0.2):new A.r(0.2,94,s),f)
p.d=1
p.e=0
p.f=2
p=A.eZ(w,t,48,4.7)
v=r?new A.r(v,94,1):new A.r(1,94,v)
q.b.$3(d,p,v)
q.c.$3(d,A.eZ(w,t,48,5.7),f)}},
$3(d,e,f){return this.$4$padToo(d,e,f,!0)},
$S:z+134}
A.ce3.prototype={
$1(d){var w=this.a
if(w.c!=null)w.AV("Tap a tool on the floor (the stack of sheets, the saw, the mud, the tape...), or choose one from the list, to pick it up. Then tap where it works. Stuck? Press Hint (it costs 2 stars; a job done without a hint earns 1).")},
$S:7}
A.ce4.prototype={
$1(d){var w,v,u,t,s,r=this.a
if(r.c==null)return
w=C.a([],x.s)
for(v=r.d.c,u=r.Q,t=0;t<5;++t)w.push(""+v[t].a+(u.gf_()/1000>=v[t].b))
s=D.d.he(w)
if(s!==r.ay){r.ay=s
r.m(r.gcbE())}},
$S:11}
A.cdS.prototype={
$0(){var w=this.a
w.w=this.b
w.x=this.c},
$S:0}
A.cdT.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.cdR(w))},
$S:0}
A.cdR.prototype={
$0(){return this.a.w=null},
$S:0}
A.ce5.prototype={
$0(){var w=this.a
w.f=this.b
w.r=0
w.a_r()},
$S:0}
A.cdG.prototype={
$0(){var w=this.a
w.ch=this.b
w.CW=w.Q.gf_()/1000},
$S:0}
A.cdJ.prototype={
$0(){var w=this.b
return this.a.db=C.jw(w,C.T(w).c)},
$S:0}
A.cdK.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.cdI(w))},
$S:0}
A.cdI.prototype={
$0(){return this.a.db=C.aS(x.S)},
$S:0}
A.cdH.prototype={
$0(){var w=this.a
w.f=this.b
w.r=this.c
w.a_r()},
$S:0}
A.cdL.prototype={
$0(){return this.a.r=0},
$S:0}
A.cdM.prototype={
$0(){return this.a.r=this.b},
$S:0}
A.cdP.prototype={
$1(d){return d-6700},
$S:69}
A.cdN.prototype={
$0(){var w=this.b
w.a_r()
w.r=this.a.a.a?this.c:0},
$S:0}
A.cdO.prototype={
$1(d){return this.a.cbv()},
$S:7}
A.cdF.prototype={
$1(d){var w=null,v=C.d("Every sheet is hung and screwed, the holes are cut, the corners are protected, and all the joints are taped, coated three times, sanded and primed. The room is ready for paint.\n\nMistakes: "+this.a.d.e,w,w,w,w,w,w,B.Ks,w,w,w)
return C.eg(C.a([C.bH(B.aWG,w,new A.cdE(d),w)],x.p),w,w,G.m6,v,w,w,w,w,B.fD6,w)},
$S:18}
A.cdE.prototype={
$0(){C.a6(this.a,!1).O(null)
return null},
$S:0}
A.cdU.prototype={
$0(){var w=this.a
return w.y=!w.y},
$S:0}
A.cdQ.prototype={
$0(){var w=this.a
w.d.jY(0)
w.r=0
w.z=!1
w.a_r()},
$S:0}
A.cdV.prototype={
$1(d){return d.a===6},
$S:z+26}
A.cdW.prototype={
$1(d){return this.a.d.b.h(0,d.a).a},
$S:z+14}
A.cdX.prototype={
$1(d){return d.a>=4},
$S:z+26}
A.cdY.prototype={
$1(d){return d.a>=5},
$S:z+26}
A.cdZ.prototype={
$1(d){return!d},
$S:97}
A.ce2.prototype={
$0(){return A.aRV(this.a,"Hanging drywall",B.dbM,this.b)},
$S:0}
A.ce0.prototype={
$0(){var w=this.a
if(w.y)w.geZ().fW(330,0.85,B.EN,0.5)
else w.geZ().fW(120,0.07,B.AR,0)},
$S:0}
A.ce1.prototype={
$0(){var w=$.HW,v=w==null
w=v?null:w.r
if(w==null)w=0
return w+(v?this.a.dy:0)},
$S:88}
A.ce_.prototype={
$1(d){var w=this.a,v=w.geZ(),u=Math.cos(v.b),t=w.Q,s=C.C(A.ieA(w.d,t.gf_()/1000,new A.r(-u*Math.sin(v.a),Math.sin(v.b),u*Math.cos(v.a))),x.c)
D.d.v(s,A.hyJ(w.ch,w.CW,t.gf_()/1000))
D.d.v(s,A.hyH(v))
D.d.v(s,A.ieB(w.db,t.gf_()/1000))
return s},
$S:z+9}
A.fEN.prototype={
$6(d,e,f,g,h,i){return this.a.xt(new A.r(d,h,f),new A.r(e,h,f),new A.r(e,h,g),new A.r(d,h,g),i,this.b)},
$S:1844}
A.fEM.prototype={
$1(d){return d.b===0},
$S:z+14}
A.fEO.prototype={
$1(d){return d.a===this.a},
$S:z+33}
A.fmP.prototype={
$5(d,e,f,g,h){var w=this.a
return w.push(new A.yq(1000+w.length,d,e,f,g,h))},
$S:1845}
A.bTt.prototype={
$1(d){return this.a.a.$0()},
$S:11}
A.bTs.prototype={
$1(d){var w=this.a
if(!w.c)return
w.a.$0()
if(w.c)w.b0L()},
$S:7}
A.h2x.prototype={
$1(d){return D.o.F(d+this.a-D.k.V(this.b*40),0,255)},
$S:69}
A.fEK.prototype={
$4(d,e,f,g){var w,v,u,t,s=this.a
s.x=$.dl=$.dl+1
s.b=d
w=e.b
v=e.c
u=e.d
t=A.eZ(w,(v+u)/2,(f+g)/2,1.75)
v=u-v+1.5
u=g-f
w=(w&1)===0?new A.r(v,u,3.5):new A.r(3.5,u,v)
s.aD(t,w,A.aS4(d,0),0.05)
s.x=0},
$S:z+136}
A.fFE.prototype={
$0(){return this.b.$1(this.a.a)},
$S:0}
A.bQo.prototype={
$1(d){return d},
$S:97}
A.cF0.prototype={
$1(d){return d.b==="ceiling"},
$S:z+3}
A.cF1.prototype={
$1(d){return d.e===this.a.a},
$S:z+3}
A.cEO.prototype={
$1(d){return d.w!=null&&d.y===this.a.a},
$S:z+3}
A.cEN.prototype={
$1(d){var w=this.b
return this.a>0?D.k.E(D.k.E(d-w,528)+528,528):D.k.E(D.k.E(w-d,528)+528,528)},
$S:5}
A.cEM.prototype={
$2(d,e){var w=this.a
return J.xm(w.$1(B.zD[d.b]+d.c),w.$1(B.zD[e.b]+e.c))},
$S:z+58}
A.cEI.prototype={
$1(d){var w=this.b
return this.a>0?D.k.E(D.k.E(d-w,528)+528,528):D.k.E(D.k.E(w-d,528)+528,528)},
$S:5}
A.cF3.prototype={
$1(d){var w=this.a,v=this.b
return d>0?D.k.E(D.k.E(w-v,528)+528,528):D.k.E(D.k.E(v-w,528)+528,528)},
$S:172}
A.cF2.prototype={
$2(d,e){var w=this.a
return J.xm(w.$1(d),w.$1(e))},
$S:63}
A.cEL.prototype={
$1(d){return d.b==="switch"&&d.w!=null},
$S:z+3}
A.cF7.prototype={
$1(d){var w=this.a
return w.TD(d)&&w.aKM(d).a!=="ok"},
$S:z+3}
A.cF4.prototype={
$1(d){return d.b==="outlet"&&d.c===this.a&&d.w!=null},
$S:z+3}
A.cF5.prototype={
$1(d){return d.b==="switch"&&d.w!=null&&this.a.aZY(d)},
$S:z+3}
A.cF6.prototype={
$1(d){return d.b==="ceiling"&&d.w!=null},
$S:z+3}
A.cEP.prototype={
$1(d){return d.b},
$S:z+59}
A.cER.prototype={
$2(d,e){var w=e.w
w=w==null?null:w.gaHH()
return d+(w==null?0:w)},
$S:z+140}
A.cEQ.prototype={
$1(d){return d.b===this.a},
$S:z+3}
A.cEK.prototype={
$1(d){var w=this.a,v=this.b
return d>0?D.k.E(D.k.E(w-v,528)+528,528):D.k.E(D.k.E(v-w,528)+528,528)},
$S:172}
A.cEJ.prototype={
$2(d,e){var w=this.a
return J.xm(w.$1(d),w.$1(e))},
$S:63}
A.cEX.prototype={
$2(d,e){var w=$.z9(),v=C.T(w).k("X<1>"),u=C.C(new C.X(w,new A.cEZ(this.a,d),v),v.k("M.E"))
D.d.aZ(u,new A.cF_(e))
return D.d.gH(u)},
$S:z+141}
A.cEZ.prototype={
$1(d){return d.b===this.b&&d.f==="common"&&!D.d.aX(this.a.b,new A.cEY(d))},
$S:z+31}
A.cEY.prototype={
$1(d){return d.e===this.a.a},
$S:z+3}
A.cF_.prototype={
$2(d,e){var w=this.a
return D.k.aR(Math.abs(d.c-w),Math.abs(e.c-w))},
$S:z+58}
A.cES.prototype={
$1(d){return d.b==="outlet"&&d.c===this.a},
$S:z+3}
A.cET.prototype={
$1(d){return d.b==="switch"},
$S:z+3}
A.cEU.prototype={
$1(d){return d.b==="ceiling"},
$S:z+3}
A.cEV.prototype={
$1(d){return d.b==="switch"&&d.w!=null},
$S:z+3}
A.cEW.prototype={
$1(d){return d.b==="switch"&&!d.as},
$S:z+3}
A.fDH.prototype={
$3(d,e,f){var w=this.a
w.b=d
w.f=3
w.e=0.9
w.d=0.02
w.aF(e,f,D.c)
w.d=1
w.e=0
w.f=2},
$S:z+55}
A.fDF.prototype={
$4$r(d,e,f,g){var w=this.a
w.b=d
w.f=2
w.e=3
w.d=0.95
w.eK(e,g,f,4,8,0.3)
w.d=1
w.e=0},
$3(d,e,f){return this.$4$r(d,e,f,1.5)},
$S:z+56}
A.fDG.prototype={
$3$r(d,e,f){var w=A.ah5(d),v=d.a
this.a.$3(v,w,B.aYu)
this.b.$4$r(v,w.a7(0,B.he8),e,f)},
$2(d,e){return this.$3$r(d,e,1.7)},
$S:z+142}
A.fDD.prototype={
$1(d){return d.e===this.a.a},
$S:z+3}
A.fDE.prototype={
$1(d){return d.b==="ceiling"},
$S:z+3}
A.fDC.prototype={
$1(d){var w=d.b
if(w==="ceiling")w="Ceiling box"
else w=w==="switch"?"Switch box":"Outlet box"
return w},
$S:z+143}
A.cnx.prototype={
$1(d){var w=this.a
if(w.c!=null)w.w5("Tap a tool on the floor (the cable roll, the drill), or choose one from the list, to pick it up. Stuck? Press Hint (it costs 2 stars; a job done without a hint earns 1).")},
$S:7}
A.cn7.prototype={
$0(){var w=this.a
w.z=this.b
w.Q=this.c},
$S:0}
A.cn8.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.cn6(w))},
$S:0}
A.cn6.prototype={
$0(){return this.a.z=null},
$S:0}
A.cmW.prototype={
$0(){var w=this.b
return this.a.ch=C.jw(w,C.T(w).c)},
$S:0}
A.cmX.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.cmV(w))},
$S:0}
A.cmV.prototype={
$0(){return this.a.ch=C.aS(x.S)},
$S:0}
A.cmY.prototype={
$1(d){return d.w!=null},
$S:z+3}
A.cmZ.prototype={
$1(d){return d.b==="outlet"&&this.a.d.TD(d)},
$S:z+3}
A.cmU.prototype={
$0(){var w=this.a
w.r=this.b
w.y=this.c
w.w=null
w.EF()},
$S:0}
A.cmT.prototype={
$0(){var w=this.a
w.CW=this.b
w.cx=w.ax.gf_()/1000},
$S:0}
A.cmQ.prototype={
$0(){var w=this.a
w.ch=C.aS(x.S)
w.EF()},
$S:0}
A.cny.prototype={
$0(){var w=this.a
w.r=this.b
w.y=0
w.EF()},
$S:0}
A.cn_.prototype={
$1(d){var w=this.a,v=w.z
v.toString
return new A.BH(v,w.Q,null)},
$S:z+27}
A.cmP.prototype={
$1(d){return this.a.bT4()},
$S:7}
A.cn0.prototype={
$0(){return this.a.y=0},
$S:0}
A.cn1.prototype={
$0(){var w=this.a
w.EF()
w.y=this.b},
$S:0}
A.cn2.prototype={
$0(){return this.a.y=this.b},
$S:0}
A.cn3.prototype={
$0(){var w=this.a
w.y=this.b
w.EF()},
$S:0}
A.cn4.prototype={
$0(){var w=this.b
w.EF()
w.y=this.a.a.a?this.c:0},
$S:0}
A.cmS.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.d,r=D.k.ad(s.gbgi(),0)
s=s.d
w=t.fy
t=t.fr
v=t>=0?"+":""
t=C.d("Every box has its cable and its device, the power is on and everything works, with "+r+" feet of cable.\n\nMistakes: "+s+"   Hints: "+w+"   Stars this lesson: "+v+t+"\n\nTry plugging in a TV or a phone, then the Hanging drywall lesson.",u,u,u,u,u,u,B.Ks,u,u,u)
return C.eg(C.a([C.bH(B.aWG,u,new A.cmR(d),u)],x.p),u,u,G.m6,t,u,u,u,u,B.fGo,u)},
$S:18}
A.cmR.prototype={
$0(){C.a6(this.a,!1).O(null)
return null},
$S:0}
A.cn9.prototype={
$0(){var w=this.a
return w.as=!w.as},
$S:0}
A.cn5.prototype={
$0(){var w=this.a,v=w.d
v.a.a9(0)
D.d.a9(v.b)
v.c.a9(0)
v.d=0
v.e=4000
v.r=v.f=!1
w.ay.a9(0)
w.ch=C.aS(x.S)
w.x=w.y=0
w.at=!1
w.EF()},
$S:0}
A.cnd.prototype={
$1(d){return d.a===this.a.w},
$S:z+37}
A.cne.prototype={
$0(){var w=this.a
return w.m(new A.cnc(w))},
$S:0}
A.cnc.prototype={
$0(){return this.a.w=null},
$S:0}
A.cnf.prototype={
$0(){return this.a.Hw(this.b.a)},
$S:0}
A.cnm.prototype={
$1(d){return D.d.aX(d.d,new A.cnn(this.a))},
$S:z+37}
A.cnn.prototype={
$1(d){return d.a===this.a.r},
$S:z+109}
A.cng.prototype={
$0(){return this.a.Hw("look")},
$S:0}
A.cnh.prototype={
$0(){var w=this.a
return w.m(new A.cnb(w,this.b))},
$S:0}
A.cnb.prototype={
$0(){return this.a.w=this.b.a},
$S:0}
A.cni.prototype={
$0(){return this.a.Hw("knock")},
$S:0}
A.cnj.prototype={
$0(){return this.a.Hw("drill")},
$S:0}
A.cnk.prototype={
$0(){return this.a.Hw("cable")},
$S:0}
A.cnl.prototype={
$0(){var w=this.a
return w.m(new A.cna(w,this.b))},
$S:0}
A.cna.prototype={
$0(){return this.a.w=this.b.a},
$S:0}
A.cno.prototype={
$1(d){return d.gGI()>0},
$S:z+3}
A.cnp.prototype={
$1(d){return!d},
$S:97}
A.cnw.prototype={
$0(){return A.aRV(this.a,"Wiring a house",B.cJA,this.b)},
$S:0}
A.cns.prototype={
$0(){var w=this.a
if(w.as)w.geZ().fW(330,0.85,B.EN,0.5)
else w.geZ().fW(120,0.07,B.AR,0)},
$S:0}
A.cnt.prototype={
$0(){var w=$.HW,v=w==null
w=v?null:w.r
if(w==null)w=0
return w+(v?this.a.fr:0)},
$S:88}
A.cnq.prototype={
$1(d){var w=this.a,v=w.d,u=C.C(A.iqY(v,d,w.ay,w.ch),x.c)
D.d.v(u,A.ies(v,d))
D.d.v(u,A.hyJ(w.CW,w.cx,w.ax.gf_()/1000))
D.d.v(u,A.hyH(w.geZ()))
return u},
$S:z+9}
A.cnr.prototype={
$1(d){return A.id1(this.a.d)},
$S:z+47}
A.cnu.prototype={
$1(d){return d.b},
$S:z+59}
A.cnv.prototype={
$1(d){return A.aiy(d)!=null||A.hff(d)!=null},
$S:33}
A.fFv.prototype={
$2(d,e){return D.d.fl($.z9(),new A.fFw(d,e)).a},
$S:577}
A.fFw.prototype={
$1(d){return d.b===this.a&&d.c===this.b&&d.f!=="cripple"},
$S:z+31};(function aliases(){var w=A.aOn.prototype
w.bAc=w.t
w=A.aLK.prototype
w.bxn=w.t})();(function installTearOffs(){var w=a._instance_0u,v=a._instance_1u,u=a.installStaticTearOff,t=a.installInstanceTearOff,s=a._instance_2u,r=a._instance_0i
var q
w(q=A.aeH.prototype,"gbYg","bYh",0)
v(q,"gLW","a5y",131)
u(A,"imI",3,null,["$3"],["i8A"],30,0)
w(q=A.ap8.prototype,"gc8H","c8I",0)
w(q,"gbsm","bsn",0)
t(q,"gcBH",0,0,null,["$1$done","$0"],["aCz","cBI"],83,0,0)
w(q,"gcDM","cDN",0)
w(q,"gbQA","bQB",0)
v(A.aUq.prototype,"gcUF","cUG",23)
s(q=A.aF9.prototype,"gbPA","bPB",28)
w(q,"gj2","iL",0)
t(q,"gc9X",0,1,null,["$2$keepTour","$1"],["ayt","AT"],138,0,0)
v(q,"gca1","ca2",10)
w(q,"gbRz","bRA",0)
w(q,"gbRB","bRC",0)
w(q,"gbRW","bRX",0)
w(q,"gc4U","c4V",0)
w(q,"gbI_","bI0",0)
w(q,"gcGl","cGm",0)
w(q,"gcug","cuh",0)
w(q,"gbQg","bQh",0)
w(q,"gaRO","atw",0)
w(q,"gc9V","c9W",0)
w(q,"gcwR","cwS",0)
w(q,"gcGf","cGg",21)
w(q,"gcBJ","Sq",0)
w(q,"gb8R","Sk",0)
w(q,"gb95","a31",0)
w(q,"gcIq","cIr",0)
w(q,"gbVf","bVg",0)
w(q,"gcBG","Bo",0)
w(q,"gca_","EA",21)
w(q,"gcjn","a0I",21)
w(q,"gciN","a0z",21)
w(q,"gaOw","bDj",21)
w(q,"gca5","ca6",0)
w(q,"gcrs","crt",0)
r(q,"gca3","ca4",0)
u(A,"hC3",3,null,["$3"],["inQ"],30,0)
u(A,"heK",3,null,["$3"],["hCh"],30,0)
w(q=A.aAY.prototype,"gcaa","pz",0)
w(q,"gJh","or",0)
v(q,"gJi","Jj",10)
w(q,"gcor","cos",0)
w(q,"gcDP","cDQ",0)
w(q=A.aGV.prototype,"gJh","or",0)
v(q,"gJi","Jj",10)
w(q,"gcuB","b6e",0)
w(q=A.aBh.prototype,"gJh","or",0)
v(q,"gJi","Jj",10)
r(q,"gca8","ca9",0)
w(q=A.aCb.prototype,"gJh","or",0)
v(q,"gJi","Jj",10)
w(q=A.aFC.prototype,"gcae","b0k",0)
v(q,"gcaf","cag",10)
w(q,"gcz5","cz6",0)
v(A.Yj.prototype,"gaqZ","bru",111)
s(q=A.aFJ.prototype,"gcak","cal",28)
w(q,"gbTY","aVi",0)
w(q,"gc4S","c4T",0)
w(q,"gbFS","bFT",0)
w(q,"gbFQ","bFR",0)
w(q,"gb0l","Q4",0)
v(q,"gcan","cao",10)
w(q=A.aFN.prototype,"gcas","b0o",0)
v(q,"gcat","cau",10)
w(q=A.aqv.prototype,"gcbE","a_r",0)
v(q,"gbr9","Hw",135)
s(q,"gcbw","cbx",28)
w(q,"gcbz","cbA",0)
v(q,"gcbC","cbD",10)
w(q,"gcbH","cbI",0)
w(q,"gcbF","cbG",0)
v(q=A.baa.prototype,"gaL5","tK",3)
v(q,"gd0g","a79",3)
w(q=A.aty.prototype,"gb0O","EF",0)
s(q,"gbVP","bVQ",28)
w(q,"gbQc","bQd",0)
w(q,"gcbJ","cbK",0)
w(q,"gcEU","cEV",0)
v(q,"gcbL","cbM",10)
w(q,"gcFr","cFs",0)
w(q,"gcbN","cbO",0)})();(function inheritance(){var w=a.mixin,v=a.mixinHard,u=a.inheritMany,t=a.inherit
u(C.lB,[A.f1W,A.rt,A.K3,A.G2,A.Ga])
u(C.ag,[A.aa9,A.aw1,A.ap7,A.aq7,A.Ji,A.aJm,A.aKk,A.O1,A.awY,A.BH,A.aa2,A.a5t,A.aCa,A.ag9,A.WN,A.OE,A.asq,A.aqw,A.a1L,A.aqu,A.atx])
u(C.ah,[A.aOe,A.aOn,A.ap8,A.ble,A.aF9,A.buu,A.bwF,A.blf,A.buh,A.byx,A.bzS,A.byC,A.aCb,A.bxW,A.aFC,A.aFJ,A.aFN,A.aLK,A.bvz,A.aqv,A.aty])
t(A.aeH,A.aOe)
t(A.bpX,R.auX)
u(C.aF,[A.r,A.ks,A.cH,A.hd,A.qU,A.fh,A.eM,A.bVK,A.cFY,A.Gn,A.Qc,A.cNW,A.bcC,A.bcX,A.bi3,A.drJ,A.N_,A.dxg,A.dlS,A.lK,A.rh,A.HK,A.aTB,A.bIy,A.hj,A.Ge,A.zq,A.xz,A.aUG,A.a4H,A.akK,A.bMX,A.bL4,A.dmn,A.rY,A.SZ,A.aU2,A.bxV,A.bL6,A.Ax,A.cCT,A.pK,A.bKQ,A.FJ,A.Pk,A.It,A.Mn,A.aUq,A.fm,A.AG,A.iQ,A.MQ,A.ayg,A.mh,A.fo,A.Ep,A.nS,A.ac8,A.ow,A.aWT,A.a5H,A.aWY,A.f4j,A.ML,A.QH,A.bW0,A.m3,A.adt,A.jU,A.No,A.cpW,A.Fy,A.nz,A.XP,A.cpM,A.zk,A.lc,A.Yu,A.aww,A.aVg,A.eu,A.Yj,A.hI,A.rW,A.uK,A.MU,A.cy8,A.yh,A.tW,A.aap,A.i9,A.cuI,A.AO,A.bsN,A.aX_,A.baf,A.akP,A.cB7,A.cEH,A.a4C,A.bN6,A.wA,A.tw,A.b6V,A.abx,A.aby,A.vo,A.b5E,A.b8N,A.cB9,A.Q6,A.p4,A.zp,A.MG,A.MH,A.a4Q,A.bO3,A.Xt,A.yq,A.a5C,A.iz,A.aW0,A.w1,A.Q2,A.lz,A.baa,A.D_,A.Qe])
u(C.hu,[A.c0J,A.c0K,A.c0I,A.c0L,A.c0M,A.h20,A.h1Z,A.h2_,A.h1Y,A.h1O,A.bKh,A.bKi,A.bKj,A.bKk,A.bKe,A.bKm,A.bKl,A.bKg,A.bKf,A.cvI,A.cvJ,A.cvB,A.cvC,A.cvD,A.cvE,A.f5m,A.f5l,A.f5j,A.f5k,A.f5d,A.f5g,A.f5h,A.f5f,A.f5i,A.bUw,A.bUp,A.bUA,A.bUv,A.bUD,A.bUB,A.bUG,A.bUr,A.bUt,A.bUs,A.bIA,A.bIz,A.fTV,A.fC2,A.fC3,A.fBW,A.fBX,A.fBY,A.fBZ,A.fC_,A.fC0,A.fC1,A.fnS,A.frh,A.fAE,A.fBO,A.fBP,A.fBQ,A.c4M,A.c4K,A.c4C,A.c4v,A.c4t,A.c4n,A.c4u,A.c4d,A.c4e,A.c4f,A.fEA,A.bMZ,A.bN1,A.fI9,A.fkZ,A.bL7,A.h1W,A.h1X,A.h1U,A.fE9,A.cCV,A.cCW,A.bKR,A.bL_,A.bL0,A.bL1,A.bL2,A.bKS,A.bKT,A.bKU,A.bKV,A.bKW,A.bKY,A.bKZ,A.bL3,A.bLF,A.bLC,A.bLD,A.bLE,A.bLJ,A.bLI,A.bLG,A.bLK,A.dV_,A.dUV,A.dVe,A.dUY,A.dVh,A.fEP,A.h2w,A.fDW,A.fDX,A.fDU,A.fDV,A.fUP,A.fUQ,A.fF1,A.fF2,A.fF_,A.fF0,A.fBU,A.fBV,A.h2v,A.fo8,A.ftK,A.fAw,A.fBD,A.h2s,A.h2p,A.bVb,A.bVa,A.bVM,A.bVN,A.bVO,A.bVP,A.bVQ,A.bVU,A.bVR,A.bVS,A.bVY,A.bVX,A.bVW,A.bVV,A.egL,A.egI,A.egJ,A.egK,A.edt,A.efW,A.efX,A.efT,A.ec2,A.ego,A.egp,A.efA,A.eey,A.eeu,A.edm,A.eee,A.edw,A.ee3,A.egC,A.ed5,A.ee1,A.ee2,A.edH,A.eeg,A.ecA,A.ecz,A.ed1,A.efp,A.efo,A.ef6,A.ef3,A.egm,A.egl,A.egd,A.eg8,A.eg7,A.efL,A.egx,A.eff,A.efg,A.egq,A.efd,A.eei,A.eej,A.eek,A.ee4,A.ee5,A.efr,A.efE,A.efG,A.eeb,A.eea,A.eec,A.efH,A.eeA,A.eeB,A.eeJ,A.eeK,A.eeL,A.eem,A.een,A.egB,A.eep,A.eeo,A.ec1,A.ebW,A.ebX,A.ebY,A.egF,A.ecl,A.ec9,A.eca,A.ecn,A.ec3,A.efc,A.dxG,A.f9N,A.f9O,A.f9P,A.f9M,A.fCe,A.fCl,A.fCg,A.fCd,A.fC6,A.fCi,A.fCk,A.fCj,A.fCh,A.fC7,A.fC5,A.fCa,A.fCb,A.fU5,A.fU3,A.fU2,A.fU4,A.fCz,A.fCL,A.fCA,A.fCB,A.fCD,A.fCG,A.fCH,A.fCI,A.fCJ,A.fCE,A.fvw,A.fvr,A.fvs,A.fvt,A.fuP,A.fuR,A.fv1,A.fvc,A.fvu,A.fvl,A.fvm,A.fvn,A.fvo,A.fvp,A.fvq,A.fuS,A.fuT,A.fuU,A.fuV,A.fuW,A.fuX,A.fuY,A.fuZ,A.fv_,A.fv0,A.fv2,A.fv3,A.fv4,A.fv5,A.fv6,A.fv7,A.fv8,A.fv9,A.fva,A.fvb,A.fvd,A.fve,A.fvf,A.fvg,A.fvh,A.fvi,A.fvj,A.fvk,A.fFW,A.fFX,A.fFY,A.flu,A.flk,A.fwm,A.fvU,A.fvV,A.fvW,A.fvX,A.fw7,A.fwf,A.fwg,A.fwh,A.fwi,A.fwj,A.fwk,A.fwl,A.fvY,A.fvZ,A.fw_,A.fw0,A.fw1,A.fw2,A.fw3,A.fw4,A.fw5,A.fw6,A.fw8,A.fw9,A.fwa,A.fwb,A.fwc,A.fwd,A.fwe,A.fpq,A.fCS,A.fCO,A.fCR,A.fCQ,A.dVp,A.dVw,A.dVn,A.dVo,A.f9B,A.fVi,A.fVh,A.dd9,A.dda,A.dd6,A.ddc,A.ddf,A.ddh,A.ddA,A.ddQ,A.ddx,A.ddR,A.eZP,A.eZX,A.eZY,A.dgm,A.dgx,A.dgy,A.dgA,A.dnu,A.dnF,A.dnE,A.dnH,A.fl_,A.fl4,A.fl5,A.fl3,A.fDt,A.fDs,A.fDr,A.fCy,A.fFj,A.fFi,A.cpQ,A.cpR,A.cpN,A.cpS,A.cpT,A.cpU,A.cpV,A.cpO,A.cpP,A.fDq,A.fDo,A.fDi,A.fDl,A.fDj,A.fDk,A.fDp,A.fDm,A.fDn,A.fDh,A.fUp,A.etF,A.etm,A.etr,A.etG,A.ets,A.ett,A.etu,A.etD,A.etH,A.etJ,A.etI,A.etx,A.h1N,A.cuN,A.cuU,A.cuV,A.cuW,A.cuX,A.cuZ,A.cuY,A.cuM,A.cuK,A.cuL,A.cuS,A.cuT,A.cuO,A.cuP,A.cuQ,A.cuR,A.exk,A.exl,A.exm,A.exV,A.exX,A.exZ,A.exu,A.exr,A.eyf,A.eyn,A.eyc,A.exM,A.exN,A.exz,A.exA,A.exB,A.exE,A.exF,A.exG,A.exH,A.exI,A.exJ,A.exK,A.exL,A.exC,A.exD,A.eyN,A.eyD,A.eyF,A.exU,A.fvz,A.fvA,A.fDu,A.fDv,A.fDw,A.fDz,A.fDx,A.fUK,A.fUL,A.fUM,A.cyd,A.cy9,A.cyb,A.cyc,A.cya,A.eAe,A.eAf,A.eA9,A.eA5,A.eAq,A.eAp,A.eAr,A.eAs,A.eAn,A.eAk,A.fo9,A.bVZ,A.bW_,A.fjW,A.fFk,A.fER,A.fEX,A.fES,A.fET,A.fEU,A.fEV,A.fnH,A.fnI,A.cBa,A.cBc,A.h1K,A.h1I,A.fdz,A.fdB,A.fGb,A.fGa,A.fEJ,A.fBH,A.fBF,A.fBG,A.fmM,A.fmN,A.fmO,A.bO4,A.bOa,A.bO9,A.bOc,A.bOd,A.bO7,A.bO5,A.bO8,A.bOb,A.fCs,A.fCv,A.fCo,A.fCn,A.fCq,A.fCp,A.fCt,A.fCr,A.fCw,A.ce3,A.ce4,A.cdP,A.cdO,A.cdF,A.cdV,A.cdW,A.cdX,A.cdY,A.cdZ,A.ce_,A.fEN,A.fEM,A.fEO,A.fmP,A.bTt,A.bTs,A.h2x,A.fEK,A.bQo,A.cF0,A.cF1,A.cEO,A.cEN,A.cEI,A.cF3,A.cEL,A.cF7,A.cF4,A.cF5,A.cF6,A.cEP,A.cEQ,A.cEK,A.cEZ,A.cEY,A.cES,A.cET,A.cEU,A.cEV,A.cEW,A.fDH,A.fDF,A.fDG,A.fDD,A.fDE,A.fDC,A.cnx,A.cmY,A.cmZ,A.cn_,A.cmP,A.cmS,A.cnd,A.cnm,A.cnn,A.cno,A.cnp,A.cnq,A.cnr,A.cnu,A.cnv,A.fFw])
u(C.jt,[A.c0H,A.cvH,A.cvA,A.cvF,A.cvG,A.bUq,A.bUy,A.bUx,A.fAz,A.fC4,A.fAF,A.c4s,A.bN0,A.bMY,A.bN2,A.bN_,A.bL5,A.c2n,A.h1V,A.fEa,A.cCU,A.bKX,A.bLH,A.fGk,A.fGl,A.fGm,A.fGn,A.fGo,A.fEZ,A.fmK,A.ftL,A.ftJ,A.ftI,A.fGp,A.fGq,A.fGr,A.fGs,A.fGt,A.fGu,A.fGv,A.fGw,A.fGx,A.fGy,A.fGd,A.fGe,A.fGf,A.fGg,A.fGh,A.fGi,A.fGj,A.h2q,A.h2r,A.bVT,A.eeQ,A.edO,A.egn,A.efz,A.eex,A.edy,A.efn,A.egk,A.eg6,A.eeI,A.fCm,A.fCf,A.fCc,A.fC8,A.fC9,A.fCN,A.fCC,A.fCF,A.fCM,A.fvv,A.fuQ,A.fFZ,A.fCP,A.ddd,A.eZU,A.dgl,A.cv_,A.exT,A.eAm,A.da4,A.d9Y,A.fFl,A.fEW,A.cBb,A.fEY,A.bO6,A.fCu,A.cEM,A.cF2,A.cER,A.cEJ,A.cEX,A.cF_,A.fFv])
u(C.p6,[A.uE,A.aU3])
u(C.mg,[A.b6Y,A.bg0,A.bjK,A.bxF])
t(A.bsA,A.aOn)
u(C.iG,[A.f5e,A.fmE,A.bUF,A.bUz,A.bUu,A.bUC,A.fAG,A.fAD,A.c4J,A.c4x,A.c4D,A.c4L,A.c4A,A.c4z,A.c47,A.c4y,A.c4B,A.c4w,A.c4q,A.c4p,A.c4r,A.c4o,A.c4c,A.c4b,A.c4g,A.c4h,A.c4i,A.c4j,A.c4k,A.c4a,A.c4l,A.c48,A.c49,A.c4m,A.c4G,A.c4H,A.c4F,A.c4I,A.c4E,A.fEB,A.dUZ,A.dVb,A.dV5,A.dV6,A.dV4,A.dUW,A.dVf,A.dVd,A.dVc,A.dUU,A.dV0,A.dV1,A.dV2,A.dV3,A.dUX,A.dV8,A.dV9,A.dVa,A.dV7,A.dVg,A.fBE,A.egH,A.efu,A.efv,A.eft,A.efw,A.ee_,A.efY,A.eeX,A.eeY,A.eeZ,A.ef_,A.ef0,A.edr,A.edq,A.eds,A.edo,A.edp,A.edn,A.edC,A.edD,A.edE,A.eeS,A.eeR,A.eeT,A.eeP,A.eeU,A.eeO,A.eeV,A.eeN,A.eeW,A.eeM,A.ed3,A.ed4,A.edQ,A.edP,A.edR,A.edN,A.edS,A.edM,A.edT,A.edL,A.edU,A.edK,A.edV,A.edJ,A.edW,A.edI,A.efU,A.efV,A.eed,A.ect,A.ee8,A.ee7,A.ee9,A.ee6,A.efB,A.efy,A.efx,A.eew,A.eev,A.ees,A.eer,A.eet,A.eeq,A.edX,A.edY,A.efq,A.edA,A.edz,A.edB,A.efC,A.efO,A.edx,A.edv,A.edu,A.efN,A.ee0,A.edG,A.eeh,A.ecB,A.ecy,A.ecC,A.ecx,A.ecD,A.ecw,A.ecE,A.ecv,A.ecF,A.ecu,A.ed2,A.efj,A.efi,A.efk,A.efl,A.efm,A.ef4,A.ef2,A.ef5,A.ef1,A.egc,A.egb,A.ege,A.egf,A.egg,A.egh,A.egi,A.egj,A.eg2,A.eg0,A.eg1,A.eg3,A.eg_,A.eg4,A.eg5,A.efK,A.efM,A.eg9,A.efZ,A.efR,A.efS,A.efJ,A.efQ,A.egy,A.egz,A.egA,A.egr,A.egs,A.egt,A.egu,A.egv,A.egw,A.edF,A.eel,A.efD,A.edZ,A.efs,A.efF,A.efI,A.efP,A.eeD,A.eeE,A.eeC,A.eeF,A.eeG,A.eez,A.eeH,A.ec0,A.ebZ,A.eef,A.ega,A.efe,A.efh,A.ec_,A.edb,A.edc,A.edd,A.ede,A.edf,A.edg,A.eda,A.edh,A.ed9,A.edi,A.ed8,A.edj,A.ed7,A.edk,A.ed6,A.edl,A.egE,A.egG,A.egD,A.ecO,A.ecP,A.ecQ,A.ecU,A.ecV,A.ecW,A.ecN,A.ecX,A.ecM,A.ecY,A.ecL,A.ecZ,A.ed_,A.ecK,A.ed0,A.ecJ,A.ecR,A.ecI,A.ecS,A.ecH,A.ecT,A.ecG,A.ec8,A.ecm,A.ecd,A.eco,A.ec7,A.ecp,A.ecq,A.ec6,A.ecr,A.ecs,A.ecb,A.ec5,A.ecc,A.ec4,A.ece,A.ecf,A.ecg,A.ech,A.eci,A.ecj,A.eck,A.ef9,A.efa,A.ef8,A.efb,A.ef7,A.f9L,A.f9K,A.ffu,A.fft,A.chE,A.fCK,A.fDT,A.dVs,A.dVt,A.dVu,A.dVx,A.dVy,A.dVz,A.dVA,A.dVB,A.dVC,A.dVD,A.dVE,A.dVv,A.dVr,A.dVq,A.dVi,A.dVj,A.dVk,A.dVl,A.dVm,A.f9A,A.czk,A.czl,A.bY3,A.dm_,A.dm0,A.dlZ,A.ddp,A.ddn,A.ddo,A.ddm,A.dd7,A.dd8,A.ddb,A.dde,A.ddg,A.ddi,A.ddj,A.ddk,A.ddl,A.ddq,A.ddr,A.ddJ,A.ddB,A.ddC,A.ddK,A.ddL,A.ddz,A.ddM,A.ddy,A.ddN,A.ddO,A.ddP,A.ddD,A.ddw,A.ddE,A.ddF,A.ddv,A.ddG,A.ddu,A.ddH,A.ddt,A.ddI,A.dds,A.eZS,A.eZT,A.eZR,A.eZK,A.eZL,A.eZM,A.eZN,A.eZO,A.eZQ,A.f_0,A.eZZ,A.eZW,A.f__,A.eZV,A.dgr,A.dgs,A.dgq,A.dgj,A.dgn,A.dgo,A.dgp,A.dgt,A.dgk,A.dgD,A.dgz,A.dgw,A.dgB,A.dgv,A.dgC,A.dgu,A.dnz,A.dnA,A.dny,A.dnt,A.dnv,A.dnw,A.dnx,A.dnI,A.dnD,A.dnG,A.dnC,A.dnB,A.fl2,A.fl0,A.fl1,A.ccw,A.fDe,A.fDf,A.fDg,A.etA,A.etB,A.etz,A.etv,A.etk,A.etl,A.etp,A.etq,A.ety,A.etC,A.etE,A.eto,A.etn,A.etL,A.etK,A.etw,A.eya,A.eyb,A.ey9,A.exg,A.exh,A.exf,A.exi,A.exj,A.exe,A.exv,A.exx,A.exn,A.exo,A.exO,A.exw,A.ey6,A.ey7,A.ey8,A.ey3,A.ey4,A.ey5,A.ey2,A.exW,A.exY,A.ey_,A.ey0,A.ey1,A.eye,A.exs,A.ext,A.exp,A.exq,A.exy,A.eyh,A.eyi,A.eyj,A.eyk,A.eyl,A.eym,A.eyo,A.eyg,A.eyd,A.eyO,A.eyP,A.eyx,A.eyA,A.eyB,A.eyz,A.eyC,A.eyy,A.eyQ,A.eyw,A.eyR,A.eyv,A.eyS,A.eyu,A.eyT,A.eyt,A.eyU,A.eyq,A.eyr,A.eys,A.eyV,A.eyE,A.eyp,A.eyG,A.eyH,A.eyI,A.eyJ,A.eyK,A.eyL,A.eyM,A.exP,A.exQ,A.exR,A.exS,A.fDy,A.eAh,A.eAi,A.eAg,A.eA6,A.eAb,A.eAc,A.eAa,A.eAd,A.eA8,A.eA3,A.eA4,A.eA7,A.eAu,A.eAt,A.eAo,A.eAj,A.eAl,A.d9T,A.d9U,A.d9V,A.d9W,A.d9P,A.d9S,A.d9R,A.d9Q,A.da0,A.da1,A.da2,A.da_,A.da3,A.d9Z,A.da5,A.d9X,A.fdy,A.fdA,A.fdx,A.fdC,A.cdS,A.cdT,A.cdR,A.ce5,A.cdG,A.cdJ,A.cdK,A.cdI,A.cdH,A.cdL,A.cdM,A.cdN,A.cdE,A.cdU,A.cdQ,A.ce2,A.ce0,A.ce1,A.fFE,A.cn7,A.cn8,A.cn6,A.cmW,A.cmX,A.cmV,A.cmU,A.cmT,A.cmQ,A.cny,A.cn0,A.cn1,A.cn2,A.cn3,A.cn4,A.cmR,A.cn9,A.cn5,A.cne,A.cnc,A.cnf,A.cng,A.cnh,A.cnb,A.cni,A.cnj,A.cnk,A.cnl,A.cna,A.cnw,A.cns,A.cnt])
u(C.ax,[A.aZo,A.V3,A.adb,A.bkk,A.b8e,A.aYp,A.a7w])
t(A.aAY,A.byx)
t(A.aGV,A.bzS)
t(A.aBh,A.byC)
t(A.beR,A.aLK)
w(A.aOe,R.auW)
v(A.aOn,C.cd)
w(A.byx,A.adt)
w(A.byC,A.adt)
w(A.bzS,A.adt)
v(A.aLK,C.cd)})()
C.j0(b.typeUniverse,JSON.parse('{"aa9":{"ag":[],"v":[]},"aeH":{"ah":["aa9<1>"]},"aw1":{"ag":[],"v":[]},"uE":{"aC":[]},"b6Y":{"aC":[]},"bsA":{"ah":["aw1"]},"ap7":{"ag":[],"v":[]},"ap8":{"ah":["ap7"]},"aU3":{"aC":[]},"aZo":{"ax":[],"v":[]},"V3":{"ax":[],"v":[]},"aq7":{"ag":[],"v":[]},"ble":{"ah":["aq7"]},"adb":{"ax":[],"v":[]},"bg0":{"aC":[]},"Ji":{"ag":[],"v":[]},"aJm":{"ag":[],"v":[]},"aKk":{"ag":[],"v":[]},"aF9":{"ah":["Ji"]},"bkk":{"ax":[],"v":[]},"bjK":{"aC":[]},"buu":{"ah":["aJm"]},"bwF":{"ah":["aKk"]},"awY":{"ag":[],"v":[]},"BH":{"ag":[],"v":[]},"aa2":{"ag":[],"v":[]},"a5t":{"ag":[],"v":[]},"aCa":{"ag":[],"v":[]},"ag9":{"ag":[],"v":[]},"O1":{"ag":[],"v":[]},"blf":{"ah":["O1"]},"buh":{"ah":["awY"]},"b8e":{"ax":[],"v":[]},"aYp":{"ax":[],"v":[]},"aAY":{"ah":["BH"]},"aGV":{"ah":["aa2"]},"aBh":{"ah":["a5t"]},"aCb":{"ah":["aCa"]},"bxW":{"ah":["ag9"]},"a7w":{"ax":[],"v":[]},"WN":{"ag":[],"v":[]},"aFC":{"ah":["WN"]},"OE":{"ag":[],"v":[]},"aFJ":{"ah":["OE"]},"asq":{"ag":[],"v":[]},"aFN":{"ah":["asq"]},"aqw":{"ag":[],"v":[]},"beR":{"ah":["aqw"]},"bxF":{"aC":[]},"a1L":{"ag":[],"v":[]},"bvz":{"ah":["a1L"]},"aqu":{"ag":[],"v":[]},"aqv":{"ah":["aqu"]},"atx":{"ag":[],"v":[]},"aty":{"ah":["atx"]}}'))
C.D9(b.typeUniverse,JSON.parse('{"bpX":1,"aOe":1,"adt":1}'))
var y={T:"A hot wire never goes on the green ground screw.",X:"A shut-off valve goes on the pipe that comes out of the wall.",v:"Both black wires go on brass screws. It does not matter which one.",N:"Brass screws are for the HOT wire (black).",m:"Breaker OFF. It is safe to work on the wires.",c:"Double tap the floor or a wall to walk over there.",q:"Each switch has its own screw on the other side, and each goes to its own light.",R:"Fasten the bare copper ground to the GREEN screw.",E:"Fasten the black hot to one HOT (X or Y) brass screw.",A:"Fasten the black wire to the LEFT terminal.",k:"Fasten the red hot to the other HOT brass screw.",d:"Fasten the red wire to the RIGHT terminal.",F:"Fasten the white neutral to a SILVER screw.",r:"Fasten the white neutral to the silver NEUTRAL (W) screw.",b:"Fold the wires back and push the device into the box.",W:"Hot and cold flow through the hoses and out of the faucet. No leaks. The lesson is complete!",P:"LOAD is for feeding other outlets further down the line. It is covered with tape. Power comes in on the LINE screws.",x:"Look at the device and the wires. Learn which wire is which before you touch a screw.",M:"Move it with the arrow buttons, turn it, change its colour or take it out.",G:"Neutral goes on a silver screw. The silver screws stay joined, so one wire feeds both halves.",o:"Pick a paint colour above to change this wall.",n:"Put the cover plate on, turn the power on and test.",Q:"Silver screws are for the NEUTRAL wire (white).",f:"Switch the power on and flip the wall switch.",H:"The bare copper ground goes on the green screw.",t:"The bare copper ground wire only goes on the GREEN screw.",S:"The black and red hot wires go on the two brass screws, X and Y. The silver W screw is for the neutral.",u:"The black hot wire goes on a brass screw.",J:"The black wire goes on the LEFT terminal.",C:"The gold screws are BRASS. They are for the HOT wire (black).",Z:"The green screw is for the bare copper ground wire.",l:"The two hot wires (black and red) go on the two brass screws, X and Y, in either order.",s:"The two hot wires go on the two brass screws, X and Y, in either order.",p:"The two hot wires go on the two brass screws, in either order.",a:"The two traveler wires go on the two brass traveler screws, in either order.",g:"The two travelers coming from the first three-way go on the two top screws.",e:"The two travelers going to the second three-way go on the two bottom screws.",_:"The white neutral wire goes on a silver screw.",I:"The white neutral wire goes on the silver W screw.",B:"The white-silver screws are NICKEL. They are for the NEUTRAL wire (white).",i:"The whole room from above: the near walls are left out so you can see in.",D:"There is no medicine left. Buy some in the shop.",O:"Turn the breaker OFF and test that the wires are dead.",Y:"You are at the street light. Press Fix the street light.",K:"You flipped the tripped breaker fully OFF. Fix the problem before you turn it on again.",L:"You walked over here. Drag to turn round."}
var x=(function rtii(){var w=C.as
return{dw:w("lJ<u?>"),gk:w("p4"),ff:w("aTB"),l:w("bv<m,m>"),gW:w("bv<m,H>"),M:w("df<m>"),hg:w("a4H"),ag:w("MH"),cD:w("aVg"),ha:w("w1"),eP:w("rt"),gN:w("Im"),eB:w("mh"),fa:w("aB<BU?>"),v:w("d3<F,m>"),R:w("iK<F>"),fC:w("It"),F:w("O<p4>"),f5:w("O<SH>"),m:w("O<lK>"),gQ:w("O<Mn>"),V:w("O<ac>"),O:w("O<u>"),bm:w("O<a4C>"),fW:w("O<aUG>"),I:w("O<a4H>"),K:w("O<MG>"),ar:w("O<zp>"),gc:w("O<a4Q>"),C:w("O<xz>"),dI:w("O<ML>"),k:w("O<w1>"),gw:w("O<MU>"),dh:w("O<Im>"),_:w("O<mh>"),dY:w("O<ow>"),cX:w("O<aWT>"),Q:w("O<a5H>"),gM:w("O<It>"),r:w("O<fm>"),E:w("O<hd>"),Z:w("O<jU>"),gL:w("O<ai<F>>"),ez:w("O<a8<m,aF>>"),c7:w("O<a8<m,@>>"),f4:w("O<a8<m,ch>>"),T:w("O<i9>"),dN:w("O<q>"),B:w("O<lc>"),fI:w("O<nz>"),g:w("O<fT>"),z:w("O<ks>"),gl:w("O<b5E>"),aB:w("O<+(a9r,F)>"),L:w("O<+(m,m)>"),dt:w("O<+(r,r)>"),U:w("O<+(H,m)>"),f:w("O<+(H,H)>"),ek:w("O<+(F,m)>"),aJ:w("O<+(m,F,F)>"),dV:w("O<+(H,H,u)>"),al:w("O<+(F,H,P)>"),gp:w("O<+(F,F,ai<q>)>"),dQ:w("O<+(F,F,F)>"),D:w("O<+(H,H,H,H)>"),az:w("O<+(F,F,H,P,m)>"),dz:w("O<+blurb,color,emoji,open,title,words(m,u,m,~(),m,m)>"),fP:w("O<Pk>"),e3:w("O<aap>"),fB:w("O<wA>"),a:w("O<fh>"),gD:w("O<Yu>"),a_:w("O<rY>"),s:w("O<m>"),Y:w("O<yq>"),fJ:w("O<abx>"),dH:w("O<aby>"),J:w("O<vo>"),bz:w("O<Ax>"),o:w("O<r>"),eo:w("O<Q2>"),p:w("O<v>"),d:w("O<iQ>"),dF:w("O<Qc>"),gR:w("O<bcC>"),bl:w("O<Gn>"),h:w("O<AO>"),b:w("O<hI>"),aM:w("O<D_>"),x:w("O<hj>"),aQ:w("O<QH>"),fG:w("O<bsN>"),X:w("O<pK>"),u:w("O<P>"),n:w("O<H>"),t:w("O<F>"),dS:w("O<aC?>"),cA:w("O<ch>"),eF:w("cw<ah<ag>>"),dg:w("ai<H>"),j:w("ai<@>"),e:w("a8<m,@>"),G:w("a8<@,@>"),w:w("iA"),P:w("ct"),q:w("cH"),aU:w("aF"),dx:w("q"),dc:w("fT"),ej:w("JO"),c:w("ks"),cE:w("aa9<F>"),a6:w("+(H,H)"),c5:w("du<F>"),cR:w("Yj"),fd:w("fh"),cH:w("aww"),N:w("m"),c0:w("yq"),ec:w("is<m>"),dZ:w("b8N"),e7:w("bp<H>"),cv:w("r"),W:w("bQ<m>"),ac:w("bQ<F>"),cI:w("k_<m>"),am:w("X<mh>"),fZ:w("X<Fy>"),cc:w("X<m>"),dD:w("X<F>"),c1:w("hi"),gh:w("AG"),gf:w("Qc"),bB:w("bcX"),c9:w("bi3"),y:w("P"),i:w("H"),A:w("@"),S:w("F"),g7:w("N_?"),eT:w("BU?"),bM:w("ai<@>?"),dy:w("a8<m,@>?"),fF:w("a8<@,@>?"),cU:w("qf?"),di:w("ch"),H:w("~")}})();(function constants(){var w=a.makeConstList
B.b0E=new A.eu(!0,"The water is on and nothing leaks. Perfect job!",!1,"")
B.b0F=new A.eu(!0,"Primer and paint rolled on.",!1,"")
B.b0G=new A.eu(!1,"This call is over. Start a new one.",!1,"")
B.b0H=new A.eu(!0,"Recorded.",!1,"")
B.b0I=new A.eu(!1,"That is not a place for a sheet.",!1,"")
B.b0J=new A.eu(!0,"Sanded smooth. Wear a mask: the dust is bad to breathe.",!1,"")
B.acV=new A.eu(!1,"There is no device here.",!1,"")
B.b0K=new A.eu(!0,"You look closely. Everything looks fine here.",!1,"")
B.b0L=new A.eu(!1,"ZAP! You were shocked badly and it was your last life. Always turn the breaker OFF and test before you touch wires.",!0,"shock")
B.b0M=new A.eu(!0,"Paper tape pressed into the seam.",!1,"")
B.b0N=new A.eu(!1,"STOP! The breaker is ON, so this box is live (120 volts). Nobody puts a device into a live box. Turn the breaker OFF first, test that the wires are dead, then put the device in.",!1,"")
B.b0O=new A.eu(!0,"Unplugged.",!1,"")
B.b0P=new A.eu(!0,y.m,!1,"")
B.b0Q=new A.eu(!1,"ZAP! You were shocked badly. That was your last life: the job is over. Lesson: ALWAYS turn the breaker OFF and test the wires before you touch them.",!0,"shock")
B.b0R=new A.eu(!1,"There is nothing there.",!1,"")
B.b0S=new A.eu(!1,"The outlet is burnt. Nothing works. Pull it out and put in a new one.",!0,"")
B.b0T=new A.eu(!0,"The water is on and nothing leaks yet, but the job is not finished.",!1,"")
B.b0U=new A.eu(!0,"Sheet hung. Now screw it to the studs.",!1,"")
B.b0V=new A.eu(!0,"Hole drilled through the middle of the stud, at the cable height. Holes go in the center so a nail cannot reach the cable.",!1,"")
B.b0W=new A.eu(!0,"Plugged in. Nothing happens because the breaker is off. Turn it on to test.",!1,"")
B.b0X=new A.eu(!0,y.K,!1,"")
B.b0Y=new A.eu(!0,"Click.",!1,"")
B.b0Z=new A.eu(!0,"The wires are folded back and the device is in the box. Now put the cover on.",!1,"")
B.b1_=new A.eu(!0,"Breaker OFF. The wires on this circuit are dead now. (Always test them to be sure.)",!1,"")
B.b10=new A.eu(!1,"Nothing is wet.",!1,"")
B.b11=new A.eu(!0,"Power is on.",!1,"")
B.b12=new A.eu(!0,"Water OFF at the main valve. You can cut into the pipes safely now.",!1,"")
B.b13=new A.eu(!0,"Opening cut around the box with the drywall saw. Keep it tight: the plate has to cover the edge.",!1,"")
B.b14=new A.eu(!0,"Device pulled out of the box.",!1,"")
B.b15=new A.eu(!0,"Screw set just below the paper, not through it.",!1,"")
B.b16=new A.eu(!1,"ZAP! You touched a live wire. In Learn mode you are not hurt, but in real life this can kill. Switch the breaker OFF and test the wires first.",!0,"shock")
B.b17=new A.eu(!0,"Cover on. Now you can turn the breaker on and test.",!1,"")
B.X3=new A.eu(!1,"",!1,"")
B.b18=new A.eu(!0,"Device taken out. You can put it somewhere else, or put in a new one.",!1,"")
B.b19=new A.eu(!0,"Breaker back ON.",!1,"")
B.b1a=new A.eu(!1,"That is not a stud.",!1,"")
B.b1b=new A.eu(!0,"Off.",!1,"")
B.b1c=new A.eu(!1,"Nothing to flip yet.",!1,"")
B.b1d=new A.eu(!0,"Wire taken off.",!1,"")
B.b1e=new A.eu(!0,"The mud is dry.",!1,"")
B.b1f=new A.eu(!0,"Breaker reset.",!1,"")
B.b1g=new A.eu(!0,"Box mounted. (Careful: this is not a fan-rated box. A fan on it could fall.)",!1,"")
B.fUE=new C.B("Tap a piece of furniture, or add one:",null,D.AI,null,null,null,null,null,null,null,null,null)
B.eqO=new C.D(D.nw,B.fUE,null)
B.b1n=new C.bL(D.a6,null,null,B.eqO,null)
B.b1X=new C.lJ(D.az,x.dw)
B.ado=new A.lK(0,0,0,0,1)
B.b3J=new C.bg(D.jL,D.JM,D.jL,D.JM)
B.b41=new C.bg(D.JM,D.jL,D.JM,D.jL)
B.ae_=new C.aZ(0,290,0,1/0)
B.b3O=new C.bg(H.Ui,H.Ui,D.bI,D.bI)
B.buE=new C.u(1,0.12156862745098039,0.13725490196078433,0.18823529411764706,D.q)
B.buM=new C.u(1,0.054901960784313725,0.06274509803921569,0.09411764705882353,D.q)
B.d9o=w([B.buE,B.buM],x.O)
B.c4U=new C.a9(D.b1,D.b7,D.x,B.d9o,null,null)
B.b6N=new C.o(null,null,H.adO,B.b3O,null,B.c4U,D.n)
B.FZ=new C.u(1,0.08627450980392157,0.10588235294117647,0.1411764705882353,D.q)
B.b5b=new C.bG(D.a1,D.a1,Ag.vL,D.a1)
B.b7D=new C.o(B.FZ,null,B.b5b,null,null,null,D.n)
B.b3Z=new C.bg(D.n2,D.ii,D.ii,D.ii)
B.b7J=new C.o(D.aL,null,null,B.b3Z,null,null,D.n)
B.fVk=new C.B("\u2600\ufe0f Let it dry",null,Y.AF,null,null,null,null,null,null,null,null,null)
B.bbP=new C.cc(D.A,null,null,B.fVk,null)
B.fV4=new C.B("\u23e9 Skip to the wiring",null,Y.AF,null,null,null,null,null,null,null,null,null)
B.bbX=new C.cc(D.A,null,null,B.fV4,null)
B.fJk=new C.B("\ud83c\udfd7\ufe0f",null,D.pO,null,null,null,null,null,null,null,null,null)
B.bcd=new C.cc(D.A,null,null,B.fJk,null)
B.fJ7=new C.B("\ud83c\udfe0",null,D.aVw,null,null,null,null,null,null,null,null,null)
B.bcF=new C.cc(D.A,null,null,B.fJ7,null)
B.be4=new C.u(1,0.9294117647058824,0.9098039215686274,0.8627450980392157,D.q)
B.M0=new C.u(1,0.1803921568627451,0.20392156862745098,0.25098039215686274,D.q)
B.afc=new C.u(1,0.16470588235294117,0.10588235294117647,0.07058823529411765,D.q)
B.XX=new C.u(1,0.7215686274509804,0.7450980392156863,0.7764705882352941,D.q)
B.beg=new C.u(1,0.9725490196078431,0.9647058823529412,0.9333333333333333,D.q)
B.vS=new C.u(1,0.5450980392156862,0.3686274509803922,0.20392156862745098,D.q)
B.bem=new C.u(1,0.5568627450980392,0.5568627450980392,0.5882352941176471,D.q)
B.afj=new C.u(1,0.611764705882353,0.5568627450980392,0.4588235294117647,D.q)
B.bew=new C.u(1,0.8862745098039215,0.8666666666666667,0.807843137254902,D.q)
B.Ft=new C.u(1,0.24705882352941178,0.5607843137254902,0.30980392156862746,D.q)
B.beD=new C.u(1,0.8392156862745098,0.9333333333333333,0.984313725490196,D.q)
B.afo=new C.u(1,0.7058823529411765,0.7294117647058823,0.7686274509803922,D.q)
B.m1=new C.u(1,0.9450980392156862,0.9450980392156862,0.9176470588235294,D.q)
B.bf2=new C.u(1,0.1843137254901961,0.43529411764705883,0.8392156862745098,D.q)
B.bf3=new C.u(1,0.9098039215686274,0.9254901960784314,0.9372549019607843,D.q)
B.bf5=new C.u(1,0.4823529411764706,0.5098039215686274,0.5450980392156862,D.q)
B.bfc=new C.u(1,0.7098039215686275,0.8470588235294118,1,D.q)
B.bff=new C.u(1,0.10588235294117647,0.4980392156862745,0.20392156862745098,D.q)
B.afB=new C.u(1,0.7215686274509804,0.7450980392156863,0.7725490196078432,D.q)
B.vU=new C.u(1,0.8196078431372549,0.29411764705882354,0.22745098039215686,D.q)
B.bfj=new C.u(1,0.9019607843137255,0.9176470588235294,0.9411764705882353,D.q)
B.o2=new C.u(1,0.5450980392156862,0.3686274509803922,0.23529411764705882,D.q)
B.Y3=new C.u(1,0.1803921568627451,0.2,0.23137254901960785,D.q)
B.afD=new C.u(1,0.8509803921568627,0.8274509803921568,0.7725490196078432,D.q)
B.afH=new C.u(1,0.6549019607843137,0.6784313725490196,0.7098039215686275,D.q)
B.f_=new C.u(1,0.16862745098039217,0.17647058823529413,0.2,D.q)
B.afK=new C.u(1,0.9490196078431372,0.9490196078431372,0.9490196078431372,D.q)
B.afN=new C.u(1,0.13333333333333333,0.6274509803921569,0.4196078431372549,D.q)
B.Fv=new C.u(1,0.8980392156862745,0.7529411764705882,0.4823529411764706,D.q)
B.Ma=new C.u(1,0.8156862745098039,0.5098039215686274,0.27450980392156865,D.q)
B.Fy=new C.u(1,0.5411764705882353,0.41568627450980394,0.2784313725490196,D.q)
B.Y6=new C.u(1,0.4980392156862745,0.7137254901960784,0.9098039215686274,D.q)
B.afQ=new C.u(1,0.1843137254901961,0.4196078431372549,0.23529411764705882,D.q)
B.Y9=new C.u(1,0.2980392156862745,0.5450980392156862,0.2901960784313726,D.q)
B.tS=new C.u(1,0.788235294117647,0.6274509803921569,0.22745098039215686,D.q)
B.afW=new C.u(1,0.9411764705882353,0.5411764705882353,0.1411764705882353,D.q)
B.bgN=new C.u(1,0.7254901960784313,0.7019607843137254,0.6274509803921569,D.q)
B.FC=new C.u(1,0.9921568627450981,0.9882352941176471,0.9686274509803922,D.q)
B.Yd=new C.u(1,0.5568627450980392,0.5843137254901961,0.6196078431372549,D.q)
B.ag1=new C.u(1,0.47843137254901963,0.35294117647058826,0.22745098039215686,D.q)
B.hj=new C.u(1,0.788235294117647,0.807843137254902,0.8392156862745098,D.q)
B.ag6=new C.u(1,0.4196078431372549,0.45098039215686275,0.5019607843137255,D.q)
B.ag7=new C.u(1,0.5568627450980392,0.35294117647058826,0.2901960784313726,D.q)
B.Bu=new C.u(1,0.9294117647058824,0.9176470588235294,0.8784313725490196,D.q)
B.bhx=new C.u(1,0.8470588235294118,0.8196078431372549,0.7450980392156863,D.q)
B.bhT=new C.u(1,0.9137254901960784,0.7254901960784313,0.28627450980392155,D.q)
B.bi3=new C.u(1,0.22745098039215686,0.22745098039215686,0.24705882352941178,D.q)
B.bib=new C.u(1,0.5490196078431373,0.5764705882352941,0.6078431372549019,D.q)
B.y_=new C.u(1,0.22745098039215686,0.24705882352941178,0.2784313725490196,D.q)
B.Yj=new C.u(1,0.8980392156862745,0.8980392156862745,0.8666666666666667,D.q)
B.Mk=new C.u(1,0.10588235294117647,0.11372549019607843,0.13333333333333333,D.q)
B.bip=new C.u(1,0.22745098039215686,0.23529411764705882,0.25882352941176473,D.q)
B.Yn=new C.u(1,0.30980392156862746,0.6588235294117647,0.3764705882352941,D.q)
B.biv=new C.u(1,0.48627450980392156,0.7686274509803922,1,D.q)
B.agm=new C.u(1,0.8509803921568627,0.803921568627451,0.7215686274509804,D.q)
B.agn=new C.u(1,0.4196078431372549,0.2901960784313726,0.16862745098039217,D.q)
B.FH=new C.u(1,0.11764705882352941,0.11764705882352941,0.12549019607843137,D.q)
B.biD=new C.u(1,0.9137254901960784,0.9058823529411765,0.8627450980392157,D.q)
B.biE=new C.u(1,0.8862745098039215,0.8745098039215686,0.8235294117647058,D.q)
B.agq=new C.u(1,0.9490196078431372,0.7803921568627451,0.611764705882353,D.q)
B.Yq=new C.u(1,0.6039215686274509,0.6352941176470588,0.6784313725490196,D.q)
B.biI=new C.u(1,0.42745098039215684,0.2901960784313726,1,D.q)
B.biN=new C.u(1,0.3686274509803922,0.27450980392156865,0.18823529411764706,D.q)
B.biQ=new C.u(1,0.9058823529411765,0.8470588235294118,0.7450980392156863,D.q)
B.bj_=new C.u(1,0.5411764705882353,0.4823529411764706,0.41568627450980394,D.q)
B.bj3=new C.u(1,0.24705882352941178,0.16470588235294117,0.10980392156862745,D.q)
B.agx=new C.u(1,0.34901960784313724,0.3176470588235294,0.29411764705882354,D.q)
B.bj6=new C.u(1,0.24705882352941178,0.6470588235294118,0.3568627450980392,D.q)
B.Yt=new C.u(1,0.13725490196078433,0.14901960784313725,0.16862745098039217,D.q)
B.bje=new C.u(1,0.8117647058823529,0.792156862745098,0.7411764705882353,D.q)
B.Yu=new C.u(1,0.8117647058823529,0.8901960784313725,0.9176470588235294,D.q)
B.Yv=new C.u(1,0.7215686274509804,0.7450980392156863,0.7843137254901961,D.q)
B.bjm=new C.u(1,0.9490196078431372,0.6941176470588235,0,D.q)
B.Mn=new C.u(1,0.3333333333333333,0.396078431372549,0.4823529411764706,D.q)
B.agE=new C.u(1,0.5529411764705883,0.7843137254901961,1,D.q)
B.Mo=new C.u(1,1,0.9019607843137255,0.5019607843137255,D.q)
B.bjJ=new C.u(1,0.5411764705882353,0.1843137254901961,0.22745098039215686,D.q)
B.Mq=new C.u(1,0.9490196078431372,0.7607843137254902,0.10588235294117647,D.q)
B.Mr=new C.u(1,0.8274509803921568,0.23137254901960785,0.1843137254901961,D.q)
B.FO=new C.u(1,0.8627450980392157,0.8392156862745098,0.7725490196078432,D.q)
B.agM=new C.u(1,0.9490196078431372,0.9411764705882353,0.9019607843137255,D.q)
B.bk3=new C.u(1,0.8509803921568627,0.7725490196078432,0.6392156862745098,D.q)
B.bk7=new C.u(1,0.9686274509803922,0.9607843137254902,0.9333333333333333,D.q)
B.agR=new C.u(1,0.6823529411764706,0.6941176470588235,0.7372549019607844,D.q)
B.nj=new C.u(1,0.1843137254901961,0.49019607843137253,0.8823529411764706,D.q)
B.bki=new C.u(1,0.788235294117647,0.7176470588235294,0.6078431372549019,D.q)
B.Bz=new C.u(1,0.8901960784313725,0.6627450980392157,0.10980392156862745,D.q)
B.Mx=new C.u(1,0.7137254901960784,0.7372549019607844,0.7686274509803922,D.q)
B.bkn=new C.u(1,0.8431372549019608,0.8509803921568627,0.8784313725490196,D.q)
B.YB=new C.u(1,0.7215686274509804,0.7529411764705882,0.8,D.q)
B.bky=new C.u(1,0.22745098039215686,0.49019607843137253,0.26666666666666666,D.q)
B.vY=new C.u(1,0.9019607843137255,0.8823529411764706,0.8352941176470589,D.q)
B.YE=new C.u(1,0.3686274509803922,0.17647058823529413,0.13725490196078433,D.q)
B.bkM=new C.u(1,0.0196078431372549,0.027450980392156862,0.050980392156862744,D.q)
B.ah3=new C.u(1,0.6039215686274509,0.6274509803921569,0.6588235294117647,D.q)
B.FR=new C.u(1,0.09019607843137255,0.09411764705882353,0.10588235294117647,D.q)
B.BA=new C.u(1,0.9725490196078431,0.9725490196078431,0.9568627450980393,D.q)
B.MB=new C.u(1,0.5411764705882353,0.5647058823529412,0.6,D.q)
B.bl_=new C.u(1,0.2901960784313726,0.12156862745098039,0.15294117647058825,D.q)
B.MC=new C.u(1,0.9019607843137255,0.8862745098039215,0.8352941176470589,D.q)
B.ah8=new C.u(1,0.9450980392156862,0.9568627450980393,0.9725490196078431,D.q)
B.blg=new C.u(1,0.9019607843137255,0.9019607843137255,0.8784313725490196,D.q)
B.blq=new C.u(1,0.29411764705882354,0.21176470588235294,0.12941176470588237,D.q)
B.bly=new C.u(1,0.5607843137254902,0.596078431372549,0.6392156862745098,D.q)
B.ahe=new C.u(1,1,0.6392156862745098,0.2784313725490196,D.q)
B.ahf=new C.u(1,0.5529411764705883,0.5294117647058824,0.4627450980392157,D.q)
B.YI=new C.u(1,0.8941176470588236,0.9058823529411765,0.9176470588235294,D.q)
B.iC=new C.u(1,0.7686274509803922,0.6039215686274509,0.3843137254901961,D.q)
B.blX=new C.u(1,0.08235294117647059,0.06274509803921569,0.047058823529411764,D.q)
B.YM=new C.u(1,1,0.35294117647058826,0.12156862745098039,D.q)
B.ahq=new C.u(1,0.5411764705882353,0.5607843137254902,0.596078431372549,D.q)
B.ME=new C.u(1,0.16470588235294117,0.10196078431372549,0.06274509803921569,D.q)
B.ahs=new C.u(1,0.07058823529411765,0.22745098039215686,0.5098039215686274,D.q)
B.aht=new C.u(1,0.5411764705882353,0.29411764705882354,0.29411764705882354,D.q)
B.bma=new C.u(1,0.10588235294117647,0.13333333333333333,0.17254901960784313,D.q)
B.MF=new C.u(1,0.9098039215686274,0.8509803921568627,0.7372549019607844,D.q)
B.bmc=new C.u(1,0.48627450980392156,0.3215686274509804,0.18823529411764706,D.q)
B.nl=new C.u(1,1,0.9450980392156862,0.6588235294117647,D.q)
B.ahy=new C.u(1,0.1411764705882353,0.10196078431372549,0.06274509803921569,D.q)
B.bmC=new C.u(1,0.5411764705882353,0.5411764705882353,0.5176470588235295,D.q)
B.bmE=new C.u(1,0.9647058823529412,0.9568627450980393,0.9254901960784314,D.q)
B.MI=new C.u(1,0.47843137254901963,0.23137254901960785,0.1803921568627451,D.q)
B.bmO=new C.u(1,0.3333333333333333,0.6274509803921569,0.3333333333333333,D.q)
B.ahE=new C.u(1,0.7058823529411765,0.3254901960784314,0.3254901960784314,D.q)
B.bmW=new C.u(1,0.6078431372549019,0.6078431372549019,0.592156862745098,D.q)
B.BF=new C.u(1,0.9568627450980393,0.9450980392156862,0.9176470588235294,D.q)
B.bn1=new C.u(1,0.6078431372549019,0.23137254901960785,0.2901960784313726,D.q)
B.rv=new C.u(1,0.8862745098039215,0.23137254901960785,0.23137254901960785,D.q)
B.q8=new C.u(1,0.9490196078431372,0.9490196078431372,0.9254901960784314,D.q)
B.bn6=new C.u(1,0.30980392156862746,0.615686274509804,0.3568627450980392,D.q)
B.bnb=new C.u(1,0.6549019607843137,0.6901960784313725,0.7294117647058823,D.q)
B.ahJ=new C.u(1,0.788235294117647,0.8117647058823529,0.8392156862745098,D.q)
B.YW=new C.u(1,0.611764705882353,0.796078431372549,1,D.q)
B.bnc=new C.u(1,0.9294117647058824,0.9215686274509803,0.8941176470588236,D.q)
B.YY=new C.u(1,0.8392156862745098,0.6823529411764706,0.4470588235294118,D.q)
B.ahM=new C.u(1,0.9098039215686274,0.9098039215686274,0.9098039215686274,D.q)
B.MK=new C.u(1,0.2901960784313726,0.2980392156862745,0.32941176470588235,D.q)
B.Z_=new C.u(1,0.3686274509803922,0.43137254901960786,0.5176470588235295,D.q)
B.bnW=new C.u(1,0.20784313725490197,0.47843137254901963,0.26666666666666666,D.q)
B.bnZ=new C.u(1,0.3568627450980392,0.10196078431372549,0.09019607843137255,D.q)
B.Z2=new C.u(1,0.23137254901960785,0.1843137254901961,0.14901960784313725,D.q)
B.ahX=new C.u(1,0.8509803921568627,0.788235294117647,0.6588235294117647,D.q)
B.bo_=new C.u(1,0.4196078431372549,0.6666666666666666,0.35294117647058826,D.q)
B.kN=new C.u(1,0.9686274509803922,0.9568627450980393,0.9254901960784314,D.q)
B.Z4=new C.u(1,0.22745098039215686,0.23921568627450981,0.26666666666666666,D.q)
B.ai_=new C.u(1,0.13333333333333333,0.1450980392156863,0.16862745098039217,D.q)
B.ai0=new C.u(1,0.9568627450980393,0.9450980392156862,0.9098039215686274,D.q)
B.u5=new C.u(1,0.16470588235294117,0.1450980392156863,0.13725490196078433,D.q)
B.boj=new C.u(1,0.5411764705882353,0.23137254901960785,0.23137254901960785,D.q)
B.ai7=new C.u(1,0.9450980392156862,0.9294117647058824,0.8784313725490196,D.q)
B.BK=new C.u(1,0.796078431372549,0.8156862745098039,0.8392156862745098,D.q)
B.Z7=new C.u(1,0.8980392156862745,0.7254901960784313,0.11764705882352941,D.q)
B.ai9=new C.u(1,0.5607843137254902,0.8156862745098039,1,D.q)
B.aib=new C.u(1,0.7490196078431373,0.8901960784313725,1,D.q)
B.boK=new C.u(1,0.11764705882352941,0.13333333333333333,0.1568627450980392,D.q)
B.aih=new C.u(1,0.6039215686274509,0.4196078431372549,0.24705882352941178,D.q)
B.MO=new C.u(1,0.10588235294117647,0.10588235294117647,0.11372549019607843,D.q)
B.bp3=new C.u(1,0.9529411764705882,0.9058823529411765,0.6313725490196078,D.q)
B.aio=new C.u(1,0.9490196078431372,0.9490196078431372,0.9333333333333333,D.q)
B.bpb=new C.u(1,0.6313725490196078,0.48627450980392156,0.2980392156862745,D.q)
B.bpt=new C.u(1,0.6274509803921569,0.6509803921568628,0.6823529411764706,D.q)
B.aiq=new C.u(1,0.9176470588235294,0.9019607843137255,0.8549019607843137,D.q)
B.bpG=new C.u(0,0.2196078431372549,0.7411764705882353,0.9725490196078431,D.q)
B.bpO=new C.u(1,0.8156862745098039,0.35294117647058826,0.22745098039215686,D.q)
B.bpU=new C.u(1,0.8509803921568627,0.788235294117647,0.6274509803921569,D.q)
B.bpV=new C.u(1,0.16470588235294117,0.16470588235294117,0.18823529411764706,D.q)
B.Zf=new C.u(1,0.9294117647058824,0.9372549019607843,0.9490196078431372,D.q)
B.Zg=new C.u(1,0.9490196078431372,0.9176470588235294,0.8274509803921568,D.q)
B.aiJ=new C.u(1,0.10588235294117647,0.07058823529411765,0.03529411764705882,D.q)
B.bqg=new C.u(1,0.3607843137254902,0.7019607843137254,0.9098039215686274,D.q)
B.aiK=new C.u(1,0.043137254901960784,0.043137254901960784,0.050980392156862744,D.q)
B.MU=new C.u(1,0.24705882352941178,0.26666666666666666,0.3137254901960784,D.q)
B.aiM=new C.u(1,0.6039215686274509,0.8156862745098039,0.9607843137254902,D.q)
B.bqq=new C.u(1,0.12549019607843137,0.13333333333333333,0.14901960784313725,D.q)
B.w3=new C.u(1,0.8862745098039215,0.27058823529411763,0.35294117647058826,D.q)
B.bqG=new C.u(1,0.12156862745098039,0.43529411764705883,0.2627450980392157,D.q)
B.bqI=new C.u(0.8509803921568627,0.06666666666666667,0.07450980392156863,0.09411764705882353,D.q)
B.yd=new C.u(1,0.17254901960784313,0.4196078431372549,0.8392156862745098,D.q)
B.u9=new C.u(1,0.7607843137254902,0.4627450980392157,0.22745098039215686,D.q)
B.ye=new C.u(1,0.7254901960784313,0.7450980392156863,0.7764705882352941,D.q)
B.aiU=new C.u(1,0.611764705882353,0.35294117647058826,0.27058823529411763,D.q)
B.br9=new C.u(1,0.611764705882353,0.5882352941176471,0.5450980392156862,D.q)
B.aj1=new C.u(1,0.23137254901960785,0.1843137254901961,0.16470588235294117,D.q)
B.N3=new C.u(1,0.23137254901960785,0.49019607843137253,0.8784313725490196,D.q)
B.brw=new C.u(1,0.4196078431372549,0.3137254901960784,0.18823529411764706,D.q)
B.N4=new C.u(1,0.9686274509803922,0.9490196078431372,0.9019607843137255,D.q)
B.brD=new C.u(1,0.2,0.21176470588235294,0.23137254901960785,D.q)
B.brI=new C.u(1,0.7098039215686275,0.7333333333333333,0.7647058823529411,D.q)
B.brJ=new C.u(1,0.9529411764705882,0.9450980392156862,0.9176470588235294,D.q)
B.brK=new C.u(1,0.9294117647058824,0.9294117647058824,0.9098039215686274,D.q)
B.aj7=new C.u(1,0.9019607843137255,0.8901960784313725,0.8470588235294118,D.q)
B.brQ=new C.u(1,0.9098039215686274,0.8941176470588236,0.8549019607843137,D.q)
B.brV=new C.u(1,0.23137254901960785,0.23137254901960785,0.25098039215686274,D.q)
B.brZ=new C.u(1,0.1411764705882353,0.10588235294117647,0.09411764705882353,D.q)
B.Gc=new C.u(1,0.7686274509803922,0.5411764705882353,0.11764705882352941,D.q)
B.bs1=new C.u(1,0.43529411764705883,0.7137254901960784,1,D.q)
B.bs8=new C.u(1,0.788235294117647,0.7019607843137254,0.5568627450980392,D.q)
B.bsc=new C.u(1,0.9450980392156862,0.9019607843137255,0.8156862745098039,D.q)
B.bse=new C.u(1,0.9137254901960784,0.8980392156862745,0.8549019607843137,D.q)
B.Zu=new C.u(1,0.18823529411764706,0.2,0.22745098039215686,D.q)
B.Zv=new C.u(1,0.6235294117647059,0.6588235294117647,0.7019607843137254,D.q)
B.N6=new C.u(1,0.9372549019607843,0.9372549019607843,0.9176470588235294,D.q)
B.N7=new C.u(1,0.9568627450980393,0.9568627450980393,0.9333333333333333,D.q)
B.ajm=new C.u(0.6666666666666666,1,0.16470588235294117,0.10196078431372549,D.q)
B.bsv=new C.u(1,0.9372549019607843,0.9137254901960784,0.8627450980392157,D.q)
B.bsy=new C.u(1,0.9294117647058824,0.9019607843137255,0.8156862745098039,D.q)
B.Zy=new C.u(1,0.4196078431372549,0.24705882352941178,0.19215686274509805,D.q)
B.ajp=new C.u(1,0.12156862745098039,0.6392156862745098,0.2627450980392157,D.q)
B.bsE=new C.u(1,0.803921568627451,0.6274509803921569,0.2,D.q)
B.bsY=new C.u(1,0.788235294117647,0.8156862745098039,0.8549019607843137,D.q)
B.BQ=new C.u(1,1,0.8392156862745098,0.0392156862745098,D.q)
B.ZB=new C.u(1,0.8901960784313725,0.8627450980392157,0.8117647058823529,D.q)
B.ZC=new C.u(1,0.3607843137254902,0.7019607843137254,1,D.q)
B.ajB=new C.u(1,0.48627450980392156,0.2901960784313726,0.17647058823529413,D.q)
B.ZD=new C.u(1,0.9568627450980393,0.9568627450980393,0.9411764705882353,D.q)
B.btm=new C.u(1,0.8431372549019608,0.8,0.6588235294117647,D.q)
B.Nb=new C.u(1,0.9176470588235294,0.9647058823529412,1,D.q)
B.btH=new C.u(1,0.9450980392156862,0.9450980392156862,0.9254901960784314,D.q)
B.btI=new C.u(1,0.9411764705882353,0.9411764705882353,0.9176470588235294,D.q)
B.bu2=new C.u(1,0.9019607843137255,0.8745098039215686,0.796078431372549,D.q)
B.Ng=new C.u(1,0.7254901960784313,0.6980392156862745,0.615686274509804,D.q)
B.ajN=new C.u(1,0.8431372549019608,0.16470588235294117,0.16470588235294117,D.q)
B.ZM=new C.u(1,0.9450980392156862,0.9372549019607843,0.9019607843137255,D.q)
B.Ni=new C.u(1,0.47843137254901963,0.30980392156862746,0.1568627450980392,D.q)
B.ajQ=new C.u(1,0.9294117647058824,0.9372549019607843,0.9529411764705882,D.q)
B.buw=new C.u(1,0.8509803921568627,0.8352941176470589,0.7843137254901961,D.q)
B.yh=new C.u(1,0.6901960784313725,0.5411764705882353,0.3568627450980392,D.q)
B.Nj=new C.u(1,0.7647058823529411,0.792156862745098,0.8274509803921568,D.q)
B.i6=new C.u(1,0.6078431372549019,0.8274509803921568,0.9607843137254902,D.q)
B.buG=new C.u(1,0.48627450980392156,0.2901960784313726,0.22745098039215686,D.q)
B.ZP=new C.u(1,0.7490196078431373,0.8901960784313725,0.9686274509803922,D.q)
B.ZQ=new C.u(1,0.23137254901960785,0.6078431372549019,1,D.q)
B.ajW=new C.u(1,0.8509803921568627,0.8235294117647058,0.7607843137254902,D.q)
B.buP=new C.u(1,0.9568627450980393,0.9607843137254902,0.9725490196078431,D.q)
B.ZS=new C.u(1,1,0.6901960784313725,0.6588235294117647,D.q)
B.qk=new C.u(1,0.4196078431372549,0.2901960784313726,0.19607843137254902,D.q)
B.buV=new C.u(1,0.8509803921568627,0.7450980392156863,0.5725490196078431,D.q)
B.ql=new C.u(1,0.13333333333333333,0.14901960784313725,0.17254901960784313,D.q)
B.buY=new C.u(1,0.8117647058823529,0.788235294117647,0.7215686274509804,D.q)
B.bv1=new C.u(1,0.7176470588235294,0.4745098039215686,0.12156862745098039,D.q)
B.bv7=new C.u(1,0.9294117647058824,0.9294117647058824,0.9176470588235294,D.q)
B.bv8=new C.u(1,0.7529411764705882,0.5411764705882353,0.35294117647058826,D.q)
B.bva=new C.u(1,0.5450980392156862,0.4196078431372549,0.24705882352941178,D.q)
B.bwd=new A.tw("none","Nothing happens: the device gets no power.",!1,!1,!1)
B.bwe=new A.tw("none","It cannot be judged: the wire functions were not verified.",!1,!1,!1)
B.bwf=new A.tw("smoke","The loose connection overheats: it glows, smokes and chars the device. In a real wall this can start a fire.",!1,!1,!0)
B.bwg=new A.tw("none","It does not work as it should: some part runs wrongly or not at all. That does not tell you what is wrong, so check against the diagram.",!1,!1,!1)
B.bwh=new A.tw("none","It runs. There is nothing to see, and that is the danger: with no ground, a fault would energize the metal parts.",!0,!1,!1)
B.bwi=new A.tw("none","It works as the diagram says.",!0,!1,!1)
B.bwj=new A.tw("none","It works, and every safety rule is met.",!0,!1,!1)
B.bwk=new A.tw("none","Nothing happens: it is dead. But the hot wire is connected, so it can still be live. No sparks, no smoke: that does not make it safe.",!1,!1,!1)
B.bwl=new A.tw("spark","Bare copper touches something it should not: sparks. The circuit is not safe.",!1,!1,!1)
B.bwm=new A.tw("none","It looks fine for now. But the support cannot carry the weight, and it can fall later.",!1,!1,!1)
B.bwn=new A.tw("fire","BANG. A short circuit: a flash, sparks, smoke and a flame at the device. The breaker trips and the device is ruined. The wires and the device are not safe to use.",!1,!0,!0)
B.bwo=new A.tw("arc","Hot and neutral are reversed: the parts that should be dead are live. Blue arcs show the energized metal. The simulator does not let anything run on this: it is unsafe, even if a real appliance might seem to work.",!1,!1,!1)
B.bwp=new A.tw("arc","Current flows through the ground wire and the metal parts it joins. Arcs crackle at the box. This is a shock hazard.",!1,!1,!1)
B.bwq=new A.tw("spark","The neutral and ground are joined: the protective device trips with a snap of sparks.",!1,!0,!1)
B.bxk=new A.akK("expired","That order took too long and went back on the board.",0)
B.bzg=new C.bd(55e3)
B.bA7=new C.Q(0,2,0,6)
B.bAs=new C.Q(10,0,16,0)
B.bAy=new C.Q(10,10,10,8)
B.bAE=new C.Q(10,16,10,14)
B.bAW=new C.Q(11,7,11,7)
B.a_P=new C.Q(11,9,11,9)
B.bBY=new C.Q(14,16,14,10)
B.bC4=new C.Q(14,4,14,28)
B.alv=new C.Q(14,8,14,24)
B.bCe=new C.Q(16,0,10,0)
B.bDE=new C.Q(1,0,0,0)
B.bEf=new C.Q(22,0,22,44)
B.bEX=new C.Q(26,8,26,8)
B.bFz=new C.Q(4,22,4,12)
B.bFM=new C.Q(4,4,8,4)
B.bFO=new C.Q(4,6,12,4)
B.amK=new C.Q(9,0,9,0)
B.bGK=new C.Q(9,12,9,12)
B.bGL=new C.Q(9,6,2,6)
B.bGM=new C.Q(9,6,9,6)
B.h_y=new C.B("Practice mode (no explanations, real shocks)",null,D.aVE,null,null,null,null,null,null,null,null,null)
B.bHq=new C.by(1,D.bc,B.h_y,null)
B.fCS=new C.B("\ud83c\udfd8 Community",null,U.tv,null,null,null,null,null,null,null,null,null)
B.bbJ=new C.cc(D.A,null,null,B.fCS,null)
B.bHy=new C.by(1,D.bc,B.bbJ,null)
B.fHv=new C.B("House tour",null,D.n7,null,null,null,null,null,null,null,null,null)
B.fO2=new C.B("A film of your whole house, with every TV on.",null,D.aay,null,null,null,null,null,null,null,null,null)
B.dpu=w([B.fHv,D.bH,B.fO2],x.p)
B.bwb=new C.fj(D.ai,D.e,D.i,D.E,null,D.p,null,0,B.dpu,null)
B.bHD=new C.by(1,D.bc,B.bwb,null)
B.fNE=new C.B("Construction Lab",null,U.tv,null,null,null,null,null,null,null,null,null)
B.fCg=new C.B("Wire it. Plumb it. Fix a house.",null,D.hy,null,null,null,null,null,null,null,null,null)
B.dfP=w([B.fNE,B.fCg],x.p)
B.bvV=new C.fj(D.ai,D.e,D.i,D.E,null,D.p,null,0,B.dfP,null)
B.bHN=new C.by(1,D.bc,B.bvV,null)
B.aUU=new C.G(!0,D.c,null,null,null,null,14,D.H,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fVZ=new C.B("5 portions of food\n10 points",null,B.aUU,null,null,null,null,null,null,null,null,null)
B.bHS=new C.by(1,D.bc,B.fVZ,null)
B.fI2=new C.B("3 doses of medicine\n12 points",null,B.aUU,null,null,null,null,null,null,null,null,null)
B.bI7=new C.by(1,D.bc,B.fI2,null)
B.fTB=new C.B("Drone film",null,D.fB,null,null,null,null,null,null,null,null,null)
B.bIc=new C.by(1,D.bc,B.fTB,null)
B.h_8=new C.B("Uber licence",null,D.fB,null,null,null,null,null,null,null,null,null)
B.bIE=new C.by(1,D.bc,B.h_8,null)
B.bIZ=new A.iz(!1,"Tap a blue surface: a whole wall or the ceiling. The finishing is done on a whole surface at a time.",D.ef)
B.bJ_=new A.iz(!0,"The cable starts at the breaker panel. Tap the box it must reach.",D.ef)
B.bJ0=new A.iz(!0,y.m,D.ef)
B.bJ1=new A.iz(!0,"The breaker is OFF, so the switch does nothing yet. Turn the breaker on.",D.ef)
B.bJ2=new A.iz(!0,"Hole drilled straight up through the top plate. This is where a cable goes up into the ceiling.",D.ef)
B.anp=new A.iz(!0,"The cable will start at the breaker panel. Tap the box it must reach.",D.ef)
B.bJ3=new A.iz(!0,"Unplugged.",D.ef)
B.bJ4=new A.iz(!0,"Outlet box nailed to the side of the stud, 16 inches up to its middle (the usual height), with its front level with the wood so the drywall will fit. Next, break a knockout in it.",D.ef)
B.bJ5=new A.iz(!0,"Plugged in. Nothing happens because the breaker is off.",D.ef)
B.bJ6=new A.iz(!0,y.K,D.ef)
B.bJ7=new A.iz(!0,"Cable pulled back out of the box (and the cables that went on from it).",D.ef)
B.bJ8=new A.iz(!0,"Sanded smooth with the pole sander until you cannot feel the joints. Wipe the dust off, then prime.",D.ef)
B.bJ9=new A.iz(!0,"Hole drilled through the middle of the stud, 20 inches up. It is 3/4 inch wide and well away from both edges, so the stud stays strong and a nail cannot reach the cable.",D.ef)
B.bJa=new A.iz(!0,"Plugged in and running.",D.ef)
B.bJb=new A.iz(!0,"Breaker ON. There is nothing to test yet: wire a device in a box first.",D.ef)
B.bJc=new A.iz(!0,"Paper tape pressed into the wet mud over every seam and in every corner, and the extra mud scraped off flat. Let it dry.",D.ef)
B.bJd=new A.iz(!0,"Ceiling box hung on the joist, level with the bottom of the board. Break a knockout in it for the cable, then the light hangs from it.",D.ef)
B.bJe=new A.iz(!0,"Metal corner bead nailed round the opening. It protects the sharp corner and gives the mud a straight edge to finish against.",D.ef)
B.bJf=new A.iz(!0,"Knockout broken out: a screwdriver on the tab and a tap, and it pops out, leaving a clean round hole for the cable to go through. A box needs one open knockout for each cable that comes in.",D.ef)
B.bJU=new A.a5t(null,null)
B.a1a=new A.rt(0,"tripped")
B.a1b=new A.rt(1,"noHotWater")
B.a1c=new A.rt(10,"wallHole")
B.a1d=new A.rt(11,"clogged")
B.Ov=new A.rt(2,"nutLeak")
B.Ow=new A.rt(3,"pexLeak")
B.a1e=new A.rt(5,"flicker")
B.a1f=new A.rt(6,"burntOutlet")
B.a1g=new A.rt(7,"gfciTripped")
B.a1h=new A.rt(8,"runningToilet")
B.a1i=new A.rt(9,"dripFaucet")
B.bLF=new A.ow(!1,"back",0,10)
B.bLG=new A.ow(!1,"back",0,9)
B.bLH=new A.ow(!1,"back",50,0)
B.bLI=new A.ow(!1,"back",56,11)
B.bLJ=new A.ow(!1,"back",-50,10)
B.bLK=new A.ow(!1,"left",40,9)
B.bLL=new A.ow(!1,"right",40,10)
B.a1r=new A.ow(!1,"right",50,5)
B.anG=new A.nS("tv100",'Giant 100"',"\ud83d\udcfa",89,!1)
B.bNV=new C.a0(61419,"MaterialIcons",!1)
B.bO6=new C.a0(61888,"MaterialIcons",!1)
B.bOR=new C.a0(62978,"MaterialIcons",!1)
B.bOX=new C.a0(63015,"MaterialIcons",!1)
B.bPj=new C.a0(63165,"MaterialIcons",!1)
B.P8=new C.a0(63228,"MaterialIcons",!1)
B.bPq=new C.a0(63251,"MaterialIcons",!1)
B.apx=new C.a0(63547,"MaterialIcons",!0)
B.bQB=new C.a0(983222,"MaterialIcons",!1)
B.CR=new C.a0(983223,"MaterialIcons",!1)
B.bQC=new C.a0(983224,"MaterialIcons",!1)
B.bR0=new C.a0(983510,"MaterialIcons",!1)
B.bR1=new C.a0(983511,"MaterialIcons",!1)
B.bR5=new C.a0(983572,"MaterialIcons",!1)
B.bRe=new C.a0(983666,"MaterialIcons",!1)
B.aqg=new C.a0(983775,"MaterialIcons",!1)
B.a33=new C.a0(983894,"MaterialIcons",!1)
B.bUH=new C.ae(D.ot,null,null,null,null,null)
B.bWa=new C.ae(D.cz,26,D.aD,null,null,null)
B.bYF=new C.ae(D.mV,null,null,null,null,null)
B.bZx=new C.ae(D.CW,22,D.c,null,null,null)
B.bZC=new C.ae(D.k5,null,F.f0,null,null,null)
B.c0z=new C.ae(D.or,null,null,null,null,null)
B.c1P=new C.ae(D.eW,null,D.aD,null,null,null)
B.c20=new C.ae(A4.HE,null,D.bs,null,null,null)
B.h32=new A.r(0,100,20)
B.c3U=new A.hd(B.h32,"No power in this house",D.bC,0)
B.hkN=new A.r(-60,40,130)
B.c3V=new A.hd(B.hkN,"\ud83e\uddef Walk here to check the equipment",D.d2,0)
B.h4O=new A.r(0,62,12)
B.c3W=new A.hd(B.h4O,"\ud83d\uded7 Elevator: walk onto the blue mat or tap",D.jB,19502)
B.h4G=new A.r(0,50,80)
B.c3X=new A.hd(B.h4G,"\ud83d\udcda Walk here to teach the class",D.d2,0)
B.h5n=new A.r(105,52,100)
B.c3Y=new A.hd(B.h5n,"\ud83c\udf06 Balcony: step here to see the city",D.en,0)
B.hl2=new A.r(-80,70,40)
B.c3Z=new A.hd(B.hl2,"\ud83d\udc69\u200d\u2695\ufe0f Nurse",D.cS,0)
B.h4L=new A.r(0,52,78)
B.c4_=new A.hd(B.h4L,"\ud83e\udeaa Walk here to get your Uber licence",D.jB,0)
B.hl3=new A.r(-84,84,120)
B.c40=new A.hd(B.hl3,"\ud83c\udf5e Food and drinks",D.d2,0)
B.h4u=new A.r(0,40,176)
B.c41=new A.hd(B.h4u,"\ud83c\udf4e Fresh fruit",D.ep,0)
B.aXv=new A.r(0,26,312)
B.c42=new A.hd(B.aXv,"\u2b07 Walk here to go out",D.en,0)
B.c43=new A.hd(B.aXv,"\ud83d\uded7 Take the elevator down to go out",D.jB,0)
B.hbL=new A.r(90,40,56)
B.c44=new A.hd(B.hbL,"\ud83d\udcd6 Library",D.dH,0)
B.hbf=new A.r(80,40,56)
B.c45=new A.hd(B.hbf,"\ud83d\udd25 Fire drill",D.bC,0)
B.aXn=new A.r(0,100,36)
B.c46=new A.hd(B.aXn,"\ud83e\udeaa NGMY Licence office",D.R,0)
B.aY8=new A.r(34,56,18)
B.c47=new A.hd(B.aY8,"\ud83e\uddd1\u200d\ud83d\udcbc Clerk",D.cS,0)
B.hjK=new A.r(-0.4,4.2,-2.4)
B.c48=new A.hd(B.hjK,"LIVE 120 V",D.bC,0)
B.hl1=new A.r(-80,52,66)
B.c49=new A.hd(B.hl1,"\ud83c\udfe5 Walk here to admit the sick",D.eR,0)
B.h4H=new A.r(0,50,84)
B.c4a=new A.hd(B.h4H,"\ud83d\udcb0 Counter: walk here to pay or sell",D.en,0)
B.c4b=new A.hd(B.aY8,"\ud83e\uddd1\u200d\ud83d\udcbc Cashier",D.cS,0)
B.c5a=new C.a9(D.a6,D.a9,D.x,O.aAr,null,null)
B.c68=new C.a9(D.a6,D.a9,D.x,O.ayR,null,null)
B.bs3=new C.u(1,0.2901960784313726,0.20392156862745098,0.0784313725490196,D.q)
B.boJ=new C.u(1,0.12156862745098039,0.10196078431372549,0.07058823529411765,D.q)
B.bhh=new C.u(1,0.16470588235294117,0.12156862745098039,0.07058823529411765,D.q)
B.dru=w([B.bs3,B.boJ,B.bhh],x.O)
B.c6d=new C.a9(D.aA,D.aF,D.x,B.dru,null,null)
B.bjh=new C.u(1,0.8509803921568627,0.6039215686274509,0.11764705882352941,D.q)
B.ddI=w([F.f0,B.bjh],x.O)
B.c6l=new C.a9(D.aA,D.aF,D.x,B.ddI,null,null)
B.brc=new C.u(1,0.0392156862745098,0.058823529411764705,0.1803921568627451,D.q)
B.bu4=new C.u(1,0.1411764705882353,0.08235294117647059,0.3215686274509804,D.q)
B.cPg=w([E.agP,B.brc,B.bu4],x.O)
B.c72=new C.a9(D.b1,D.b7,D.x,B.cPg,null,null)
B.dab=w([E.iD,E.Mh,E.iD],x.O)
B.asC=new C.a9(D.a6,D.a9,D.x,B.dab,null,null)
B.boz=new C.u(1,0.8901960784313725,0.9254901960784314,0.9803921568627451,D.q)
B.d8E=w([D.c,B.boz],x.O)
B.c8j=new C.a9(D.b1,D.b7,D.x,B.d8E,null,null)
B.buZ=new C.u(1,0.07058823529411765,0.22745098039215686,0.47843137254901963,D.q)
B.d1O=w([E.iD,B.buZ],x.O)
B.c8u=new C.a9(D.aA,D.aF,D.x,B.d1O,null,null)
B.dsb=w([D.cs,D.df],x.O)
B.zB=new C.a9(D.b1,D.b7,D.x,B.dsb,null,null)
B.cmi=w([E.iD,E.Mh],x.O)
B.c8J=new C.a9(D.a6,D.a9,D.x,B.cmi,null,null)
B.c90=w([0],x.n)
B.eiR={ground:0}
B.Ax=new C.df(B.eiR,1,x.M)
B.uz=new A.fm(25,"Green screw: GROUND",B.Ax,y.H,!1,"ground")
B.ej8={lineA:0}
B.f9s=new C.df(B.ej8,1,x.M)
B.bMF=new A.fm(23,"LINE screw 1 (top left)",B.f9s,"Hot leg 1 from the panel goes on the top left screw.",!1,"hot")
B.ej9={lineB:0}
B.f9d=new C.df(B.ej9,1,x.M)
B.bMx=new A.fm(21,"LINE screw 2 (top right)",B.f9d,"Hot leg 2 from the panel goes on the top right screw.",!1,"hot")
B.ejb={loadA:0}
B.f9r=new C.df(B.ejb,1,x.M)
B.bMd=new A.fm(24,"LOAD screw 1 (bottom left)",B.f9r,"Hot leg 1 to the heater goes on the bottom left screw: it is switched through from the top left one.",!1,"hot")
B.ejd={loadB:0}
B.fa7=new C.df(B.ejd,1,x.M)
B.bMq=new A.fm(22,"LOAD screw 2 (bottom right)",B.fa7,"Hot leg 2 to the heater goes on the bottom right screw.",!1,"hot")
B.c94=w([B.uz,B.bMF,B.bMx,B.bMd,B.bMq],x.r)
B.c98=w(["flange","wax","toilet","bolts","valve","hosehot","hosecold","faucet","tail","trap","arm"],x.s)
B.a3J=w([0,0,0,0],x.t)
B.c9k=w([0,0,0,1],x.cA)
B.zD=w([0,144,264,408],x.n)
B.c9z=w([54,59.5],x.n)
B.cim=w([139,161],x.n)
B.cit=w([145,158],x.n)
B.ckq=w([15,25],x.n)
B.awo=w([16,28],x.n)
B.cma=w([A0.qZ,A9.Up,V.lt,Z.aQA],x.f)
B.cmm=w([1,1,1],x.cA)
B.cmn=w([1,1,1,1],x.cA)
B.awG=w([1,-1],x.t)
B.hh6=new A.r(-57.8,-32,0)
B.b9d=new A.zk(0,"Outlet spot 1",!1,B.hh6,"low")
B.hi4=new A.r(-9.8,-32,0)
B.b9a=new A.zk(1,"Outlet spot 2",!1,B.hi4,"low")
B.hiI=new A.r(38.2,-32,0)
B.b9g=new A.zk(2,"Outlet spot 3",!1,B.hiI,"low")
B.hgE=new A.r(-25.8,0,0)
B.b9e=new A.zk(3,"Switch spot 1",!1,B.hgE,"switch")
B.hhY=new A.r(22.2,0,0)
B.b9c=new A.zk(4,"Switch spot 2",!1,B.hhY,"switch")
B.hkp=new A.r(-30,48,40)
B.b9f=new A.zk(5,"Ceiling light spot",!0,B.hkp,"light")
B.h8d=new A.r(30,48,40)
B.b9b=new A.zk(6,"Ceiling fan spot",!0,B.h8d,"fan")
B.uW=w([B.b9d,B.b9a,B.b9g,B.b9e,B.b9c,B.b9f,B.b9b],C.as("O<zk>"))
B.eCi=new C.y(4,6)
B.eCP=new C.y(5,7)
B.eDd=new C.y(6,8)
B.cmQ=w([V.lt,An.vp,E.Um,E.Un,B.eCi,B.eCP,B.eDd],C.as("O<+(F,F)>"))
B.cmT=w([2],x.t)
B.csU=w([0,1.5707963267948966,3.141592653589793,-1.5707963267948966],x.n)
B.ctD=w(["The living room has no power: find the tripped breaker in the panel and reset it.","The kitchen sink drips: pick the wrench and tighten the slip nut under the sink. (Build the house up to Fixtures to see the problems.)"],x.s)
B.hio=new A.r(11,4.6,-6)
B.hc7=new A.r(11,5.4,-7.85)
B.hhw=new A.r(3.4,5.4,-7.85)
B.aYI=new A.r(3.4,3.4,-7.85)
B.ctF=w([B.hio,B.hc7,B.hhw,B.aYI],x.o)
B.h4=new A.r(1,0,0)
B.hO=new A.r(0,0,1)
B.p_=new A.r(-1,0,0)
B.pT=new A.r(0,0,-1)
B.a48=w([B.h4,B.hO,B.p_,B.pT],x.o)
B.cun=w([3],x.t)
B.cuy=w([300,800,1300,1800],x.n)
B.cwy=w([32,80],x.n)
B.htX=new A.hj(0,0.7,2.2,2,0,0,0)
B.htM=new A.hj(3,0.1,0.95,-0.42,-0.3,-0.2,0.05)
B.hu5=new A.hj(6.5,0,0.9,-0.38,0.3,0.2,0.05)
B.hue=new A.hj(9.5,-0.9,1.15,0.1,0,0,0)
B.hub=new A.hj(12.5,-1.7,1.45,1.6,0,0,0)
B.htL=new A.hj(15.5,-2.8,1,-0.35,0,0,0)
B.hu4=new A.hj(18.5,-3.6,0.9,0.05,0,0,0)
B.hu8=new A.hj(21.5,-4.6,1.5,1.5,0,0,0)
B.htY=new A.hj(24.5,-5.4,0.9,-0.4,0,0,0)
B.hug=new A.hj(27.5,-6.28,0.75,0.05,0,0,0)
B.htZ=new A.hj(30,-6,2.4,1.7,0,0,0)
B.d7_=w([B.htX,B.htM,B.hu5,B.hue,B.hub,B.htL,B.hu4,B.hu8,B.htY,B.hug,B.htZ],x.x)
B.htP=new A.hj(0,-3.14,1.2,-0.3,0,0,0)
B.htI=new A.hj(4,-2.2,1.1,0,0,0,0)
B.huf=new A.hj(8,-1.2,1,0.4,0,0,0)
B.htN=new A.hj(12,-0.4,1,0.9,0,0,0)
B.htQ=new A.hj(15,0.1,0.85,1.7,0,0,0)
B.htH=new A.hj(18,0.3,0.8,0,0,0,0)
B.htO=new A.hj(21,0,0.9,-0.2,0.35,0.25,0)
B.htU=new A.hj(24,0.6,1.4,0.1,-0.2,0,0)
B.htV=new A.hj(27,1.4,1.2,0.8,0,0,0)
B.htT=new A.hj(30,2.4,2.3,1.5,0,0,0)
B.dem=w([B.htP,B.htI,B.huf,B.htN,B.htQ,B.htH,B.htO,B.htU,B.htV,B.htT],x.x)
B.htR=new A.hj(0,0.3,2.6,0.5,0,0,0)
B.hua=new A.hj(3,0.1,1,0,0,0,0)
B.hud=new A.hj(6,0,0.95,0.05,0.2,0.15,0)
B.hu1=new A.hj(9,-0.8,1.6,0.3,0,0,0)
B.hu6=new A.hj(12,-1.57,1,-0.2,0,0,0)
B.hu_=new A.hj(15,-2.4,1.5,0.9,0,0,0)
B.hu3=new A.hj(18,-3.14,1,0.1,0,0,0)
B.htW=new A.hj(21,-3.9,1.5,0.6,0,0,0)
B.huh=new A.hj(24,-4.71,1,-0.3,0,0,0)
B.htJ=new A.hj(27,-5.5,1.3,0.5,0,0,0)
B.htG=new A.hj(30,-6.28,2.6,0.9,0,0,0)
B.cKi=w([B.htR,B.hua,B.hud,B.hu1,B.hu6,B.hu_,B.hu3,B.htW,B.huh,B.htJ,B.htG],x.x)
B.hu9=new A.hj(0,0,0.5,3.5,0,0,0)
B.htK=new A.hj(4,0.2,1,-0.3,0,0,0)
B.huc=new A.hj(8,1,1,0,0,0,0)
B.htE=new A.hj(12,1.57,1.2,0.3,0,0,0)
B.hu7=new A.hj(16,3.14,1.4,1.2,0,0,0)
B.htF=new A.hj(20,3.5,0.9,-0.35,0,0,0)
B.htS=new A.hj(24,4.7,1.1,0,0,0,0)
B.hu0=new A.hj(28,6,1,0.3,0,0,0)
B.hu2=new A.hj(30,6.3,2.2,1.4,0,0,0)
B.d6E=w([B.hu9,B.htK,B.huc,B.htE,B.hu7,B.htF,B.htS,B.hu0,B.hu2],x.x)
B.cyS=w([B.d7_,B.dem,B.cKi,B.d6E],C.as("O<ai<hj>>"))
B.cyT=w([380,820,1420,1660],x.n)
B.ejk={neutral:0}
B.Eq=new C.df(B.ejk,1,x.M)
B.bMw=new A.fm(23,"Silver screw (top): NEUTRAL",B.Eq,y.G,!1,"neutral")
B.bM4=new A.fm(24,"Silver screw (bottom): NEUTRAL",B.Eq,y.G,!1,"neutral")
B.ejC={switched:0}
B.fag=new C.df(B.ejC,1,x.M)
B.bM2=new A.fm(21,"Brass screw (top): SWITCHED hot",B.fag,"The top half is the switched one: the red wire that comes back from the wall switch goes here.",!1,"hot")
B.eiv={always:0}
B.f9a=new C.df(B.eiv,1,x.M)
B.bMt=new A.fm(22,"Brass screw (bottom): ALWAYS hot",B.f9a,"The bottom half is always on: the black wire straight from the panel goes here.",!1,"hot")
B.cA5=w([B.uz,B.bMw,B.bM4,B.bM2,B.bMt],x.r)
B.eSN=new C.y(-820,640)
B.eDR=new C.y(820,640)
B.cAa=w([B.eSN,B.eDR],x.f)
B.b2g=new A.p4("phone","Phone",3)
B.b2f=new A.p4("bigphone","Big phone",3.4)
B.b26=new A.p4("tablet","Tablet",7.4)
B.a4d=w([B.b2g,B.b2f,B.b26],x.F)
B.hBf=new A.pK(0,-80,66,24)
B.hBg=new A.pK(1,20,48,20)
B.hBo=new A.pK(2,20,98,20)
B.hBp=new A.pK(3,20,148,20)
B.cAA=w([B.hBf,B.hBg,B.hBo,B.hBp],x.X)
B.Du=w([],x.m)
B.b3f=new A.rh("highway","\ud83d\udee3\ufe0f","Highway board","Huge and wide, on two thick poles, with a walkway under it",420,170,150,B.Du,0,1)
B.b3c=new A.rh("tower","\ud83d\uddfc","Tall tower sign","A big sign high up on one very thick pole",400,210,270,B.Du,0,1)
B.b3i=new A.rh("neon","\ud83c\udf03","Neon board","A big black board with a glowing neon edge",380,190,120,B.Du,0,1)
B.b3h=new A.rh("roof","\ud83c\udfe0","Rooftop board","A tall house with two big TVs, the NGMY carpet on its back, and a huge board on its roof",460,180,308,B.Du,800,1)
B.b3b=new A.rh("screen","\ud83d\udcfa","Big screen","A giant TV screen on a stand",440,250,60,B.Du,0,1)
B.b3j=new A.rh("gate","\ud83d\udeaa","Town gate","A huge arch with the board across it",600,200,200,B.Du,0,1)
B.b2Y=new A.lK(-420,140,0.35,0,1)
B.b2W=new A.lK(460,-420,-0.3,160,1.35)
B.d4Q=w([B.b2Y,B.b2W],x.m)
B.b3a=new A.rh("duo","\ud83e\udea7","Two far apart","Two separate boards: a near one and a taller one far behind it",320,160,140,B.d4Q,0,0.7)
B.b2R=new A.lK(-460,0,0,0,1)
B.b2Z=new A.lK(460,0,0,0,1)
B.dqE=w([B.b2R,B.ado,B.b2Z],x.m)
B.b3l=new A.rh("line3","\u2194\ufe0f","Three in a row","Three separate boards standing in one straight line",300,150,150,B.dqE,0,0.6)
B.b2P=new A.lK(-950,250,0.5,0,1)
B.b2O=new A.lK(150,-700,-0.2,220,1.55)
B.b2S=new A.lK(1000,60,-0.55,0,0.9)
B.cVJ=w([B.b2P,B.b2O,B.b2S],x.m)
B.b3d=new A.rh("far3","\ud83d\udef0\ufe0f","Three scattered far","Three separate boards far from each other, one of them tall and far behind",320,160,140,B.cVJ,0,0.6)
B.b33=new A.lK(-360,300,0.15,0,1)
B.b2T=new A.lK(360,300,-0.15,0,1)
B.b30=new A.lK(0,-120,0,100,1.25)
B.b2V=new A.lK(-160,-640,0.1,260,1.6)
B.c9N=w([B.b33,B.b2T,B.b30,B.b2V],x.m)
B.b3g=new A.rh("skyline","\ud83c\udf06","Skyline","Four separate boards, the taller ones standing behind the shorter ones",300,150,130,B.c9N,0,0.6)
B.b2N=new A.lK(-440,160,0,0,1)
B.b31=new A.lK(0,160,0,0,1)
B.b2M=new A.lK(440,160,0,0,1)
B.b32=new A.lK(-440,-420,3.141592653589793,130,1.2)
B.b2Q=new A.lK(0,-420,3.141592653589793,130,1.2)
B.b3_=new A.lK(440,-420,3.141592653589793,130,1.2)
B.dsk=w([B.b2N,B.b31,B.b2M,B.b32,B.b2Q,B.b3_],x.m)
B.b3e=new A.rh("lines6","\ud83d\udee4\ufe0f","Two lines of three","Six separate boards: a straight line of three facing front, and a taller line of three behind it facing back",280,140,140,B.dsk,0,0.6)
B.b2X=new A.lK(0,300,0,0,1)
B.b2K=new A.lK(0,-300,3.141592653589793,0,1)
B.b2U=new A.lK(-560,0,-1.5707963267948966,0,1)
B.b2L=new A.lK(560,0,1.5707963267948966,0,1)
B.dxq=w([B.b2X,B.b2K,B.b2U,B.b2L],x.m)
B.b3k=new A.rh("scatter","\ud83c\udf10","Billboard park","Four separate boards: one at the front, one at the back and one on each side, all facing out",320,160,150,B.dxq,0,0.6)
B.a4e=w([B.b3f,B.b3c,B.b3i,B.b3h,B.b3b,B.b3j,B.b3a,B.b3l,B.b3d,B.b3g,B.b3e,B.b3k],C.as("O<rh>"))
B.dEf=new A.i9(-134,-36,16,44)
B.dE2=new A.i9(34,118,30,66)
B.dE3=new A.i9(34,118,80,116)
B.dE1=new A.i9(34,118,130,166)
B.dEg=new A.i9(-134,-76,140,160)
B.cAE=w([B.dEf,B.dE2,B.dE3,B.dE1,B.dEg],x.T)
B.cAH=w([y.O,y.x,y.R,"Fasten the single black feed from the panel to the FEED screw (it powers both switches through a joined tab).","Fasten the black wire to the first light to the screw of switch 1.","Fasten the black wire to the second light to the screw of switch 2.",y.b,y.n],x.s)
B.eSx=new C.y(-600,1250)
B.eSv=new C.y(-520,1260)
B.eSt=new C.y(-460,1250)
B.eCA=new C.y(520,1280)
B.eCY=new C.y(600,1270)
B.eSh=new C.y(-300,1300)
B.cFz=w([B.eSx,B.eSv,B.eSt,B.eCA,B.eCY,B.eSh],x.f)
B.cG0=w([460,900,1500,1740],x.n)
B.bkm=new C.u(1,0.5411764705882353,0.35294117647058826,0.23529411764705882,D.q)
B.agv=new C.u(1,0.10588235294117647,0.07058823529411765,0.06274509803921569,D.q)
B.buS=new C.u(1,0.8509803921568627,0.27450980392156865,0.49411764705882355,D.q)
B.aff=new C.u(1,0.23137254901960785,0.24705882352941178,0.3607843137254902,D.q)
B.euu=new A.tW(B.bkm,B.agv,B.buS,B.aff,"xbot",!1,0,1)
B.f6o=new A.FJ(0,"Ama",0,2,B.euu,"A nurse who works nights.")
B.bmw=new C.u(1,0.4196078431372549,0.27058823529411763,0.18823529411764706,D.q)
B.bjx=new C.u(1,0.08627450980392157,0.06274509803921569,0.06274509803921569,D.q)
B.bsg=new C.u(1,0.1803921568627451,0.5607843137254902,0.3568627450980392,D.q)
B.euy=new A.tW(B.bmw,B.bjx,B.bsg,B.M0,"soldier",!1,0,1)
B.f6m=new A.FJ(1,"Joseph",1,2,B.euy,"A student who is always hungry.")
B.bqb=new C.u(1,0.6274509803921569,0.4196078431372549,0.2784313725490196,D.q)
B.bkF=new C.u(1,0.2901960784313726,0.24705882352941178,0.4196078431372549,D.q)
B.euz=new A.tW(B.bqb,B.ME,D.az,B.bkF,"xbot",!1,0,1)
B.f6q=new A.FJ(2,"Grace",3,4,B.euz,"A teacher who marks papers late.")
B.aft=new C.u(1,0.8784313725490196,0.6431372549019608,0.48627450980392156,D.q)
B.ajK=new C.u(1,0.1843137254901961,0.43529411764705883,0.7098039215686275,D.q)
B.euw=new A.tW(B.aft,D.ahC,B.ajK,B.M0,"soldier",!1,0,1)
B.f6n=new A.FJ(3,"Daniel",6,8,B.euw,"A driver who sleeps in the day.")
B.bsT=new C.u(1,0.788235294117647,0.5450980392156862,0.3686274509803922,D.q)
B.bkR=new C.u(1,0.16862745098039217,0.17647058823529413,0.22745098039215686,D.q)
B.eus=new A.tW(B.bsT,B.agv,D.aE,B.bkR,"xbot",!1,0,1)
B.f6s=new A.FJ(4,"Fatima",7,8,B.eus,"A baker who gets up at four.")
B.ajA=new C.u(1,0.47843137254901963,0.29411764705882354,0.18823529411764706,D.q)
B.brl=new C.u(1,0.24705882352941178,0.22745098039215686,0.2,D.q)
B.euv=new A.tW(B.ajA,D.e5,D.d2,B.brl,"soldier",!1,0,1)
B.f6p=new A.FJ(5,"Papa Moses",10,-1,B.euv,"The oldest in the house. He watches TV all day.")
B.boY=new C.u(1,0.5490196078431373,0.3568627450980392,0.23137254901960785,D.q)
B.eux=new A.tW(B.boY,B.ahq,D.ax,B.aff,"xbot",!1,0,1)
B.f6r=new A.FJ(6,"Mama Rose",9,-1,B.eux,"Cooks for everybody in the kitchen.")
B.D9=w([B.f6o,B.f6m,B.f6q,B.f6n,B.f6s,B.f6p,B.f6r],C.as("O<FJ>"))
B.cI_=w([50,130],x.n)
B.cI0=w([50,140],x.n)
B.cIN=w([51,52,53],x.t)
B.cJA=w(["Look round the bare frame: the studs, the plates, the joists, the door, the window and the breaker panel.","Put an outlet box on a stud on each of the four walls (16 inches up).","Put a switch box on a stud beside the door (48 inches up).","Hang a ceiling box on a joist for the light.","Break out a knockout in each box: the round tab the cable goes in through.","Drill the studs the cable has to pass through (20 inches up, in the middle of the stud).","Pull the cable from the breaker panel to every box (or on from one box to the next). The light is fed from the switch, through a hole in the top plate.","Wire a device in every box: in the close-up connect each wire to its screw, push the device in and put the plate on.","Turn the breaker on and test everything: flip the switch, plug in a TV or a phone. The house is wired."],x.s)
B.eI3=new C.y(-9.5,4.6)
B.eKx=new C.y(-5.9,2.3)
B.eQH=new C.y(8.8,4.4)
B.cK4=w([B.eI3,B.eKx,B.eQH],x.f)
B.cKr=w([5,35],x.n)
B.cL1=w([61,63],x.t)
B.cLe=w([62,64],x.t)
B.cMe=w([68,172],x.n)
B.bjD=new C.u(1,0.6039215686274509,0.30980392156862746,0.30980392156862746,D.q)
B.bv0=new C.u(1,0.30980392156862746,0.47843137254901963,0.3686274509803922,D.q)
B.zF=w([B.o2,B.Z_,B.bjD,B.bv0,B.ahX,D.iG],x.O)
B.brs=new C.u(1,0.23137254901960785,0.07058823529411765,0.07058823529411765,D.q)
B.bkQ=new C.u(1,0.23137254901960785,0.1843137254901961,0.0392156862745098,D.q)
B.bhS=new C.u(1,0.043137254901960784,0.1803921568627451,0.09019607843137255,D.q)
B.cN5=w([B.brs,B.bkQ,B.bhS],x.O)
B.cNa=w([6,19],x.n)
B.rb=new A.iQ("ground","Bare copper \xb7 ground",B.u9,D.c,"ground")
B.rA=new C.u(1,0.14901960784313725,0.14901960784313725,0.16470588235294117,D.q)
B.hpK=new A.iQ("feed","Black \xb7 hot feed from the panel",B.rA,D.c,"hot")
B.ML=new C.u(1,0.22745098039215686,0.1803921568627451,0.1803921568627451,D.q)
B.hpF=new A.iQ("loadA","Black \xb7 to light 1",B.ML,D.c,"hot")
B.bh5=new C.u(1,0.16862745098039217,0.16862745098039217,0.2,D.q)
B.hpH=new A.iQ("loadB","Black \xb7 to light 2",B.bh5,D.c,"hot")
B.cNE=w([B.rb,B.hpK,B.hpF,B.hpH],x.d)
B.ayK=w([72,73,74,75],x.t)
B.eSe=new C.y(-25,-15)
B.ezU=new C.y(25,-15)
B.eSd=new C.y(-25,15)
B.ezT=new C.y(25,15)
B.cRA=w([B.eSe,B.ezU,B.eSd,B.ezT],x.f)
B.cRK=w([-57.5,57.5],x.n)
B.hbI=new A.r(-125,292,-114.5)
B.hfH=new A.r(125,292,-114.5)
B.hiO=new A.r(125,208,-114.5)
B.hfl=new A.r(-125,208,-114.5)
B.cRS=w([B.hbI,B.hfH,B.hiO,B.hfl],x.o)
B.eYS=new C.b5(600,400,!0)
B.eYf=new C.b5(1030,400,!0)
B.eYg=new C.b5(1320,400,!0)
B.cS0=w([B.eYS,B.eYf,B.eYg],C.as("O<+(H,H,P)>"))
B.cS3=w([y.O,y.x,y.R,y.r,y.E,y.k,y.b,y.n],x.s)
B.cVS=w([y.O,"Look at the face: an L-shaped slot (W, neutral) and two slanted slots (X and Y, hot), and no ground hole. That is a NEMA 10-30, the old 3-wire dryer outlet. The neutral also grounds the dryer, which is only allowed in old houses.",y.r,y.E,y.k,y.b,y.n],x.s)
B.bLN=new A.nS("wall","Whole-wall TV","\ud83c\udfac",0,!0)
B.bLY=new A.nS("tv200",'Cinema 200"',"\ud83c\udfac",175,!1)
B.bLQ=new A.nS("tv150",'Cinema 150"',"\ud83c\udfac",130,!1)
B.bLS=new A.nS("bangtv",'Beovision TV 77"',"\ud83d\udcfa",66,!1)
B.bLM=new A.nS("sonytv",'Sony Bravia 75"',"\ud83d\udcfa",64,!1)
B.bLZ=new A.nS("lgtv",'LG OLED 65"',"\ud83d\udcfa",56,!1)
B.bLP=new A.nS("tv",'Samsung Neo QLED 55"',"\ud83d\udcfa",48,!1)
B.bLX=new A.nS("appletv",'Apple TV 4K 50"',"\ud83d\udcfa",44,!1)
B.bLW=new A.nS("lamp","Table lamp","\ud83d\udca1",0,!1)
B.bLV=new A.nS("toaster","Toaster","\ud83c\udf5e",0,!1)
B.bLO=new A.nS("hairdryer","Hair dryer","\ud83d\udc87",0,!1)
B.bLR=new A.nS("washer","Washing machine","\ud83e\uddfa",0,!1)
B.bLT=new A.nS("dryer","Clothes dryer","\ud83c\udf00",0,!1)
B.bLU=new A.nS("range","Kitchen range","\ud83c\udf73",0,!1)
B.a4F=w([B.bLN,B.bLY,B.bLQ,B.anG,B.bLS,B.bLM,B.bLZ,B.bLP,B.bLX,B.bLW,B.bLV,B.bLO,B.bLR,B.bLT,B.bLU],C.as("O<nS>"))
B.bk1=new C.u(1,0.7764705882352941,0.5254901960784314,0.25882352941176473,D.q)
B.bkY=new C.u(1,0.43529411764705883,0.2901960784313726,0.1803921568627451,D.q)
B.bsr=new C.u(1,0.6627450980392157,0.44313725490196076,0.29411764705882354,D.q)
B.az2=w([F.mK,B.bk1,E.agu,B.bkY,B.bsr],x.O)
B.cZs=w([y.O,"Two cables come into the box: one from the breaker panel (LINE) and one going to the light (LOAD).","Twist the two white wires together with a wire nut. A switch does not cut the neutral.",y.R,"Fasten the black wire from the panel to one BRASS screw.","Fasten the black wire that goes to the light to the other BRASS screw.","Push the switch into the box, put the plate on and test with the power on."],x.s)
B.eyz=new C.y(0,330)
B.eS3=new C.y(-120,1080)
B.ez3=new C.y(120,1080)
B.eSf=new C.y(-300,1000)
B.eAi=new C.y(300,1000)
B.eSH=new C.y(-700,800)
B.eDm=new C.y(700,800)
B.cZQ=w([B.eyz,B.eS3,B.ez3,B.eSf,B.eAi,B.eSH,B.eDm],x.f)
B.cZW=w(["Walnut","Blue grey","Brick red","Sage green","Sand","Charcoal"],x.s)
B.iP=w(["switch","switch2p","switch3","switch4","switchsmart","switchcombo"],x.s)
B.hdX=new A.r(-6.5,7.5,-7.85)
B.he2=new A.r(-6.5,7.8,-3)
B.d_g=w([B.hdX,B.he2],x.o)
B.hqa=new A.Ge("NGMY JOBS","Find work. Get hired. Get paid.",D.az,D.ir,D.tZ)
B.hqi=new A.Ge("NGMY LOANS","Help when you need it most.",D.cV,D.e_,D.w2)
B.hqd=new A.Ge("KISWAHILI SCHOOL","Learn Swahili and English, step by step.",D.bQ,D.tW,D.w6)
B.hqf=new A.Ge("CIVIC REGISTRY","Your family, your community, registered.",D.d5,D.d9,D.o4)
B.hq9=new A.Ge("CORE PROTOCOL","Studios for curious minds.",D.b8,D.jx,D.q6)
B.hqe=new A.Ge("BUILD AND FIX","The Construction Lab: wire it, plumb it.",D.fx,D.hR,D.ua)
B.hq3=new A.Ge("CREATE WITH NGMY","Videos, slides, bios and books.",D.bF,D.km,D.q3)
B.d_k=w([B.hqa,B.hqi,B.hqd,B.hqf,B.hq9,B.hqe,B.hq3],C.as("O<Ge>"))
B.dxe=w(["Switch 1 common","Switch 2 common","Traveler terminal (both switches)","Green ground screw","Neutral splice (not on a switch)"],x.s)
B.eil={"Line (from the breaker)":0,"Load (to the light)":1,"Traveler A":2,"Traveler B":3,Ground:4,Neutral:5}
B.dBl=new C.bv(B.eil,["Switch 1 common","Switch 2 common","Traveler terminal (both switches)","Traveler terminal (both switches)","Green ground screw","Neutral splice (not on a switch)"],x.l)
B.dr9=w(["Never assume the dark screw is the same on every brand: read the diagram on the switch.","A switch loop or an old house may not follow the colors: verify the wires."],x.s)
B.byi=new A.akP("threeway","Three-way switch (two switches, one light)","Two three-way switches control one light from two places. Each switch has a COMMON terminal (dark screw) and two TRAVELER terminals. Power (line) goes to the common of the first switch, the light (load) to the common of the second, and two travelers join the switches. The ground goes to the green screw. A standard single-pole switch cannot do this job.",B.dxe,B.dBl,B.dr9)
B.d0f=w(["Fan (motor) control wire","Light control wire","Neutral","Ground","Fan-rated support"],x.s)
B.ej2={"Motor lead (black)":0,"Light lead (blue)":1,"Neutral (white)":2,"Ground (green)":3,Support:4}
B.dBV=new C.bv(B.ej2,["Fan (motor) control wire","Light control wire","Neutral","Ground","Fan-rated support"],x.l)
B.d4P=w(["A blue wire is a light-kit lead on many fans, but not on all: read the diagram.","A fan that spins does not prove the installation is safe."],x.s)
B.byj=new A.akP("fanlight","Ceiling fan with a light kit","A fan has a motor and often a light kit, and they are not always switched together. Follow the fan maker's diagram: the motor lead goes to the fan control (or switched hot), the light lead to the light control, the white to neutral and the green to the ground. The box must be fan rated.",B.d0f,B.dBV,B.d4P)
B.qM=w([B.byi,B.byj],C.as("O<akP>"))
B.hBc=new A.pK(0,-100,100,24)
B.hBj=new A.pK(1,90,100,24)
B.d_w=w([B.hBc,B.hBj],x.X)
B.eSR=new C.y(-95,160)
B.eSn=new C.y(-35,175)
B.eEa=new C.y(95,170)
B.d_B=w([B.eSR,B.eSn,B.eEa],x.f)
B.bkw=new C.u(1,0.9176470588235294,0.9490196078431372,0.9686274509803922,D.q)
B.bq8=new C.u(1,0.9647058823529412,0.9098039215686274,0.9098039215686274,D.q)
B.bp2=new C.u(1,0.9529411764705882,0.9215686274509803,0.7843137254901961,D.q)
B.azp=w([B.BF,B.bkw,B.bq8,B.bp2],x.O)
B.aZQ=new A.iQ("neutral","White \xb7 neutral (middle)",B.m1,D.av,"neutral")
B.aZT=new A.iQ("hot1","Black \xb7 hot (left)",B.rA,D.c,"hot")
B.aZR=new A.iQ("hot2","Red \xb7 hot (right)",B.vU,D.c,"hot")
B.d_H=w([B.aZQ,B.aZT,B.aZR],x.d)
B.eiE={common:0}
B.f9Y=new C.df(B.eiE,1,x.M)
B.bMc=new A.fm(23,"COMMON screw (the odd one)",B.f9Y,"The COMMON screw is the one with a different colour. The black wire that brings the power in, or goes to the light, belongs here.",!1,"hot")
B.ejE={trav1:0,trav2:1}
B.aSm=new C.df(B.ejE,2,x.M)
B.bMj=new A.fm(21,"Traveler screw (top)",B.aSm,y.a,!1,"hot")
B.bMy=new A.fm(22,"Traveler screw (bottom)",B.aSm,y.a,!1,"hot")
B.d_O=w([B.uz,B.bMc,B.bMj,B.bMy],x.r)
B.dEm=new A.i9(-60,60,28,50)
B.dEi=new A.i9(-150,-100,70,170)
B.dDW=new A.i9(100,150,70,170)
B.dEn=new A.i9(-60,-20,156,186)
B.dE0=new A.i9(20,60,156,186)
B.d02=w([B.dEm,B.dEi,B.dDW,B.dEn,B.dE0],x.T)
B.d04=w([y.O,"The cable comes in through the top of the box. Strip about 3/4 inch of insulation from each wire.","Fasten the bare copper ground wire to the GREEN screw.","Fasten the white (neutral) wire to a SILVER screw.","Fasten the black (hot) wire to a BRASS screw. Wrap each wire clockwise under its screw.","Fold the wires back and push the outlet into the box.","Put the cover plate on, then turn the power on and test."],x.s)
B.hmr=new A.r(-3.6,7.5,-7.85)
B.hdf=new A.r(-3.6,4.2,-7.85)
B.d0c=w([B.hmr,B.hdf],x.o)
B.d0e=w([-0.5,-0.25,0,0.25,0.5],x.n)
B.f0Y=new C.b5("look","Look",D.eW)
B.f18=new C.b5("sheet","Drywall sheet",D.zl)
B.eYZ=new C.b5("cut","Cutter",D.CD)
B.f_X=new C.b5("screw","Screw gun",A1.CL)
B.bOV=new C.a0(63005,"MaterialIcons",!1)
B.f0W=new C.b5("saw","Saw",B.bOV)
B.f_Q=new C.b5("bead","Corner bead",S.rS)
B.f_M=new C.b5("mud","Mud",W.Pi)
B.f0i=new C.b5("tape","Tape",D.rU)
B.eZw=new C.b5("sand","Sander",D.CC)
B.aqz=new C.a0(985109,"MaterialIcons",!1)
B.f17=new C.b5("paint","Roller",B.aqz)
B.d0U=w([B.f0Y,B.f18,B.eYZ,B.f_X,B.f0W,B.f_Q,B.f_M,B.f0i,B.eZw,B.f17],C.as("O<+(m,m,a0)>"))
B.d0Y=w([0,2,1,3,4,6,7,8],x.t)
B.eZF=new C.b5(-0.1,0,0.5)
B.f0X=new C.b5(0.35,-0.4,0.3)
B.f_F=new C.b5(-0.4,0.55,0.35)
B.d13=w([B.eZF,B.f0X,B.f_F],C.as("O<+(H,H,H)>"))
B.eRY=new C.y(-1050,"store")
B.aQO=new C.y(-840,"tower")
B.eSz=new C.y(-630,"tower")
B.eSp=new C.y(-420,"gasstation")
B.aQN=new C.y(-210,"tower")
B.eyE=new C.y(0,"hq")
B.aQB=new C.y(210,"tower")
B.eAR=new C.y(420,"store")
B.eD_=new C.y(630,"tower")
B.aQD=new C.y(840,"tower")
B.eyU=new C.y(1050,"gasstation")
B.d1E=w([B.eRY,B.aQO,B.eSz,B.eSp,B.aQN,B.eyE,B.aQB,B.eAR,B.eD_,B.aQD,B.eyU],x.U)
B.a4W=w(["Always switch the breaker OFF and test the wires with a tester before you touch them.","Never use water on an electrical fire: switch the power off at the breaker first.","Reversed hot and neutral can look fine and still be a shock hazard.","A GFCI outlet protects you near water: press TEST every month.","A ceiling fan needs a fan-rated box, because it is heavy and it shakes."],x.s)
B.hiW=new A.r(9.8,6,-7.85)
B.hcc=new A.r(9.8,7.5,-7.85)
B.hmS=new A.r(-8,7.5,-7.85)
B.hfn=new A.r(-8,1.5,-7.85)
B.d1R=w([B.hiW,B.hcc,B.hmS,B.hfn],x.o)
B.eYc=new C.b5(0,32,"outlet")
B.eYj=new C.b5(1,96,"outlet")
B.eYq=new C.b5(2,112,"outlet")
B.eYy=new C.b5(3,64,"outlet")
B.eYr=new C.b5(2,80,"switch")
B.d2h=w([B.eYc,B.eYj,B.eYq,B.eYy,B.eYr],C.as("O<+(F,H,m)>"))
B.aYU=new A.r(5,1.8,-7.85)
B.hgr=new A.r(5,-0.1,-7.85)
B.hhK=new A.r(12.5,-0.1,-7.85)
B.d2Z=w([B.aYU,B.hgr,B.hhK],x.o)
B.d37=w([-69.5,69.5],x.n)
B.h2T=new A.r(3,3.1,-7.1)
B.aYK=new A.r(3,1.7,-7.1)
B.hhD=new A.r(3,1,-7.1)
B.h7L=new A.r(3.65,0.5,-7.1)
B.h9V=new A.r(4.3,1,-7.1)
B.hgo=new A.r(4.3,1.8,-7.1)
B.hmW=new A.r(5,1.8,-7.1)
B.d3t=w([B.h2T,B.aYK,B.hhD,B.h7L,B.h9V,B.hgo,B.hmW,B.aYU],x.o)
B.zI=w(["tv","lamp","toaster","hairdryer","washerM","dryerM","rangeM"],x.s)
B.OF=new A.fm(23,"Silver screw W: NEUTRAL",B.Eq,y.I,!1,"neutral")
B.eiU={hot1:0,hot2:1}
B.Eo=new C.df(B.eiU,2,x.M)
B.anH=new A.fm(21,"Brass screw X: HOT",B.Eo,y.l,!1,"hot")
B.anQ=new A.fm(22,"Brass screw Y: HOT",B.Eo,y.l,!1,"hot")
B.d3E=w([B.uz,B.OF,B.anH,B.anQ],x.r)
B.anP=new A.fm(23,"Silver screw: NEUTRAL",B.Eq,y._,!1,"neutral")
B.eiW={hot:0}
B.a9G=new C.df(B.eiW,1,x.M)
B.anL=new A.fm(21,"Brass screw: HOT",B.a9G,y.u,!1,"hot")
B.d3G=w([B.uz,B.anP,B.anL],x.r)
B.d40=w(["My outlet is dead and it is dark in here. Please come and wire it.","The light in my room does not work, and my phone will not charge. Can you fix the wiring?","I have no power in my room at all. Can an electrician come?"],x.s)
B.f2Q=new C.cu([-0.35,-0.2,0.42,0.3])
B.f33=new C.cu([0.3,0.25,0.32,0.38])
B.f1T=new C.cu([0.05,-0.55,0.22,0.14])
B.f2l=new C.cu([-0.5,0.45,0.2,0.16])
B.d4c=w([B.f2Q,B.f33,B.f1T,B.f2l],x.D)
B.d4d=w([D.ax,D.bg,D.az,D.d5,D.bP,D.fb],x.O)
B.hm4=new A.r(0.6,11,-3.4)
B.haZ=new A.r(0.6,3.2,-3.2)
B.hlu=new A.r(0.6,2.2,-1.9)
B.har=new A.r(0.6,0.7,-1.5)
B.d4C=w([B.hm4,B.haZ,B.hlu,B.har],x.o)
B.d4O=w([0,24,-24,48,-48],x.n)
B.EQ=new A.iQ("neutral","White \xb7 neutral",B.m1,D.av,"neutral")
B.hpu=new A.iQ("line","Black \xb7 hot from the panel (LINE)",B.rA,D.c,"hot")
B.hpM=new A.iQ("load","Black \xb7 hot to the light (LOAD)",B.ML,D.c,"hot")
B.d50=w([B.rb,B.EQ,B.hpu,B.hpM],x.d)
B.eF3=new C.y("outlet","\ud83d\udd0c Outlet")
B.eTw=new C.y("gfci","\ud83d\udee1\ufe0f GFCI outlet")
B.eP_=new C.y("switch","\ud83d\udca1 Light switch")
B.eKy=new C.y("dryer4","\ud83d\udc55 Dryer outlet 4-wire")
B.eTS=new C.y("dryer3","\ud83e\udde6 Dryer outlet 3-wire")
B.eQZ=new C.y("range4","\ud83c\udf73 Range outlet 4-wire")
B.eJY=new C.y("range3","\ud83e\udd58 Range outlet 3-wire")
B.ezQ=new C.y("washer","\ud83e\uddfa Washer outlet")
B.eRB=new C.y("cord4","\u26a1 Dryer cord 4-wire")
B.eXq=new C.y("cord3","\ud83d\udd0c Dryer cord 3-wire")
B.d54=w([B.eF3,B.eTw,B.eP_,B.eKy,B.eTS,B.eQZ,B.eJY,B.ezQ,B.eRB,B.eXq],x.L)
B.azW=w([3,3.6,3.3,2.6],x.n)
B.d5i=w([y.O,y.x,y.R,"Fasten the white NEUTRAL wire to the NEUTRAL (silver) screw. A regular switch never touches the neutral, this one does.","Fasten the black wire from the panel to the LINE screw.","Fasten the black wire that goes to the light to the LOAD screw.",y.b,y.n],x.s)
B.eSG=new C.y(-700,330)
B.eDl=new C.y(700,380)
B.eS_=new C.y(-1100,-420)
B.ez_=new C.y(1100,-480)
B.eS5=new C.y(-1300,100)
B.ez6=new C.y(1350,30)
B.eyF=new C.y(0,-900)
B.eS6=new C.y(-1500,-300)
B.ez7=new C.y(1550,-200)
B.d5l=w([B.eSG,B.eDl,B.eS_,B.ez_,B.eS5,B.ez6,B.eyF,B.eS6,B.ez7],x.f)
B.d5r=w([A0.qZ,A9.Up,V.lt],x.f)
B.bMp=new A.fm(25,"FRAME screw: GROUND (green)",B.Ax,"The green ground wire goes on the screw on the frame, where the strap was.",!1,"ground")
B.anK=new A.fm(21,"MIDDLE terminal: NEUTRAL (white)",B.Eq,"The white neutral wire goes on the middle terminal.",!1,"neutral")
B.eiT={hot1:0}
B.f9I=new C.df(B.eiT,1,x.M)
B.anO=new A.fm(23,"LEFT terminal: black",B.f9I,"The black wire goes on the left terminal.",!1,"hot")
B.eiV={hot2:0}
B.f9Q=new C.df(B.eiV,1,x.M)
B.anN=new A.fm(22,"RIGHT terminal: red",B.f9Q,"The red wire goes on the right terminal.",!1,"hot")
B.d5u=w([B.bMp,B.anK,B.anO,B.anN],x.r)
B.hBe=new A.pK(0,-64,120,26)
B.hBh=new A.pK(1,64,120,26)
B.hBm=new A.pK(2,0,84,24)
B.d61=w([B.hBe,B.hBh,B.hBm],x.X)
B.h8N=new A.r(0,8.3,0)
B.aYe=new A.r(0,3.9,0)
B.aA0=w([B.h8N,B.aYe],x.o)
B.d6i=w([y.O,"Make sure the box is rated for a fan. A plain light box cannot carry the weight and the shaking.","Join the house ground wire to the fan ground.","Join the house white wire to the fan white wire with a wire nut.","Join the house black wire to the fan black wire with a wire nut.","Push the wires up into the box and fasten the canopy to the ceiling.",y.f],x.s)
B.eR_=new C.y(-3.5,11)
B.eGo=new C.y(3.5,11)
B.eED=new C.y(-3.5,-11)
B.eCc=new C.y(3.5,-11)
B.d6B=w([B.eR_,B.eGo,B.eED,B.eCc],x.f)
B.hjt=new A.r(-0.6,11,-3.4)
B.hcj=new A.r(-0.6,3.2,-3.2)
B.hif=new A.r(-0.6,2.2,-1.9)
B.hnm=new A.r(-0.6,0.7,-1.5)
B.d6C=w([B.hjt,B.hcj,B.hif,B.hnm],x.o)
B.Ip=w(["dog","cat","cow","sheep","chicken","horse"],x.s)
B.acl=new A.hI("look","Look",D.eW)
B.hsQ=new A.hI("wall","Wall box",N.P7)
B.hsM=new A.hI("ceiling","Ceiling box",D.pj)
B.ht7=new A.hI("fanbox","Fan box",P.Cy)
B.htj=new A.hI("drill","Drill",D.uE)
B.ht8=new A.hI("cable","Cable roll",E.a29)
B.dlP=w([B.acl,B.hsQ,B.hsM,B.ht7,B.htj,B.ht8],x.b)
B.htg=new A.hI("sheet","Drywall sheet",D.zl)
B.hsX=new A.hI("knife","Drywall saw",D.CD)
B.hsT=new A.hI("screw","Screw gun",A1.CL)
B.htl=new A.hI("tape","Tape",D.rU)
B.htd=new A.hI("mud","Mud",W.Pi)
B.htq=new A.hI("sand","Sander",D.CC)
B.ht1=new A.hI("paint","Roller",B.aqz)
B.di0=w([B.acl,B.htg,B.hsX,B.hsT,B.htl,B.htd,B.htq,B.ht1],x.b)
B.htm=new A.hI("outlet","Outlet",B.CR)
B.hsZ=new A.hI("gfci","GFCI",D.uQ)
B.htk=new A.hI("switch","Switch",E.pp)
B.hsS=new A.hI("split","Split outlet",B.CR)
B.hto=new A.hI("v240four","240 V 4-wire",A_.CF)
B.hsO=new A.hI("v240three","240 V 3-wire",A_.CF)
B.ht5=new A.hI("v240only","240 V only",A_.CF)
B.hsW=new A.hI("isolated","Isolated ground",B.CR)
B.a2h=new C.a0(63208,"MaterialIcons",!1)
B.hte=new A.hI("dryer4","Dryer 4-wire (14-30)",B.a2h)
B.hsV=new A.hI("dryer3","Dryer 3-wire (10-30)",B.a2h)
B.a2A=new C.a0(63678,"MaterialIcons",!1)
B.hsR=new A.hI("range4","Range 4-wire (14-50)",B.a2A)
B.htb=new A.hI("range3","Range 3-wire (10-50)",B.a2A)
B.apB=new C.a0(63601,"MaterialIcons",!1)
B.hsJ=new A.hI("washer","Washer (5-20)",B.apB)
B.htf=new A.hI("switch2p","Double-pole",E.pp)
B.hth=new A.hI("switch3","3-way switch",E.pp)
B.ht6=new A.hI("switch4","4-way switch",E.pp)
B.ht3=new A.hI("switchsmart","Smart switch",E.pp)
B.hsK=new A.hI("switchcombo","Double switch",E.pp)
B.htc=new A.hI("light","Light",D.mU)
B.aqy=new C.a0(985094,"MaterialIcons",!1)
B.ht2=new A.hI("fan","Fan",B.aqy)
B.hta=new A.hI("tv","TV",Q.HM)
B.bQ1=new C.a0(63571,"MaterialIcons",!1)
B.ht_=new A.hI("lamp","Lamp",B.bQ1)
B.bOO=new C.a0(62944,"MaterialIcons",!1)
B.hsY=new A.hI("toaster","Toaster",B.bOO)
B.bPo=new C.a0(63209,"MaterialIcons",!1)
B.htp=new A.hI("hairdryer","Hair dryer",B.bPo)
B.hsP=new A.hI("washerM","Washing machine",B.apB)
B.hsU=new A.hI("dryerM","Dryer",B.a2h)
B.hti=new A.hI("rangeM","Kitchen range",B.a2A)
B.htn=new A.hI("flip","Flip switch",E.pp)
B.ht9=new A.hI("tester","Voltage tester",D.uG)
B.aAH=w([B.acl,B.htm,B.hsZ,B.htk,B.hsS,B.hto,B.hsO,B.ht5,B.hsW,B.hte,B.hsV,B.hsR,B.htb,B.hsJ,B.htf,B.hth,B.ht6,B.ht3,B.hsK,B.htc,B.ht2,B.hta,B.ht_,B.hsY,B.htp,B.hsP,B.hsU,B.hti,B.htn,B.ht9],x.b)
B.d75=w([B.dlP,B.di0,B.aAH],C.as("O<ai<hI>>"))
B.eNX=new C.y(-1.2,0)
B.eX0=new C.y(1.2,0)
B.d7i=w([B.eNX,B.eX0],x.f)
B.d7v=w([-0.58,0.58],x.n)
B.d7M=w([40,70,100,130,160],x.n)
B.bMe=new A.fm(23,"NEUTRAL screw (silver)",B.Eq,"The electronics inside need the neutral wire to run. White goes on the silver screw.",!1,"neutral")
B.eja={line:0}
B.fa6=new C.df(B.eja,1,x.M)
B.bMs=new A.fm(21,"LINE screw (brass, hot in)",B.fa6,"The black wire from the breaker panel goes on the LINE screw.",!1,"hot")
B.eje={load:0}
B.f94=new C.df(B.eje,1,x.M)
B.bMu=new A.fm(22,"LOAD screw (brass, hot out)",B.f94,"The black wire that goes to the light goes on the LOAD screw.",!1,"hot")
B.d7W=w([B.uz,B.bMe,B.bMs,B.bMu],x.r)
B.epv=new A.nz("flange","flange","Toilet flange",D.Z,"The flange is fixed to the floor over the drain. Everything else sits on it.",!1,0)
B.dls=w(["flange"],x.s)
B.ept=new A.nz("wax","wax","Wax ring",B.dls,"The wax ring goes on the flange before the toilet. It makes the seal against sewer gas and water.",!1,0)
B.dwH=w(["wax"],x.s)
B.epq=new A.nz("toilet","toilet","Toilet",B.dwH,"The toilet is lowered straight down onto the wax ring. The ring has to be there first.",!1,0)
B.duW=w(["toilet"],x.s)
B.epu=new A.nz("bolts","bolts","Toilet bolts",B.duW,"The two bolts hold the toilet to the flange. Set the toilet first.",!1,2)
B.epr=new A.nz("tvalve","valve","Toilet shut-off valve",D.Z,"The shut-off valve goes on the pipe that comes out of the wall.",!0,0)
B.dv2=w(["tvalve","toilet"],x.s)
B.eps=new A.nz("those","hosecold","Toilet supply hose",B.dv2,"The hose joins the valve to the toilet tank, so both must be there first.",!1,2)
B.aLN=new A.nz("faucet","faucet","Faucet",D.Z,"The faucet goes through the hole in the counter.",!1,0)
B.aLQ=new A.nz("vhot","valve","Hot shut-off valve (left)",D.Z,y.X,!0,0)
B.aLO=new A.nz("vcold","valve","Cold shut-off valve (right)",D.Z,y.X,!0,0)
B.dw3=w(["vhot","faucet"],x.s)
B.aLR=new A.nz("hhot","hosehot","Hot supply hose",B.dw3,"The hose joins the hot valve to the faucet, so the valve and the faucet must be there first.",!1,2)
B.dw0=w(["vcold","faucet"],x.s)
B.aLP=new A.nz("hcold","hosecold","Cold supply hose",B.dw0,"The hose joins the cold valve to the faucet, so the valve and the faucet must be there first.",!1,2)
B.aLM=new A.nz("tail","tail","Tailpiece",D.Z,"The tailpiece hangs from the sink drain. It is the first piece of the drain.",!1,0)
B.duP=w(["tail"],x.s)
B.aLS=new A.nz("trap","trap","P-trap",B.duP,"The P-trap joins the tailpiece. Build the drain from the top down.",!1,1)
B.duX=w(["trap"],x.s)
B.aLT=new A.nz("arm","arm","Trap arm",B.duX,"The trap arm joins the trap and goes into the wall.",!1,1)
B.d2r=w([B.epv,B.ept,B.epq,B.epu,B.epr,B.eps,B.aLN,B.aLQ,B.aLO,B.aLR,B.aLP,B.aLM,B.aLS,B.aLT],x.fI)
B.evP=new A.XP("bathroom","Bathroom",B.d2r,"Fit out a bathroom: a toilet and a sink with its faucet, supply hoses and drain.")
B.dnn=w([B.aLN,B.aLQ,B.aLO,B.aLR,B.aLP,B.aLM,B.aLS,B.aLT],x.fI)
B.evQ=new A.XP("kitchen","Kitchen",B.dnn,"Fit out a kitchen sink: the faucet, the hot and cold supplies and the drain.")
B.aAg=w([B.evP,B.evQ],C.as("O<XP>"))
B.f30=new C.cu([-150,180,2,200])
B.f1O=new C.cu([150,180,2,200])
B.f1K=new C.cu([0,280,302,2])
B.d8f=w([B.f30,B.f1O,B.f1K],x.D)
B.eSQ=new C.y(-900,400)
B.eE6=new C.y(900,400)
B.eSO=new C.y(-900,1000)
B.eE4=new C.y(900,1000)
B.eSg=new C.y(-300,1260)
B.eAj=new C.y(300,1260)
B.eRW=new C.y(-1000,700)
B.eyR=new C.y(1000,700)
B.eSA=new C.y(-640,90)
B.eD0=new C.y(640,90)
B.eSP=new C.y(-900,1400)
B.eE5=new C.y(900,1400)
B.d8s=w([B.eSQ,B.eE6,B.eSO,B.eE4,B.eSg,B.eAj,B.eRW,B.eyR,B.eSA,B.eD0,B.eSP,B.eE5],x.f)
B.d8X=w([B.anK,B.anO,B.anN],x.r)
B.h2Q=new A.r(8.2,0.9,-6.3)
B.hit=new A.r(8.2,-0.1,-6.3)
B.h6X=new A.r(8.2,-0.1,-7.85)
B.d96=w([B.h2Q,B.hit,B.h6X],x.o)
B.eCX=new C.y(-4.5,10)
B.eTG=new C.y(4.5,10)
B.eWY=new C.y(-4.5,-10)
B.eTC=new C.y(4.5,-10)
B.d9i=w([B.eCX,B.eTG,B.eWY,B.eTC],x.f)
B.d9j=w([-0.28,0.28],x.n)
B.dEp=new A.i9(-70,70,20,44)
B.dEa=new A.i9(-110,-50,80,100)
B.dE5=new A.i9(50,110,80,100)
B.dE9=new A.i9(-110,-50,130,150)
B.dE4=new A.i9(50,110,130,150)
B.d9w=w([B.dEp,B.dEa,B.dE5,B.dE9,B.dE4],x.T)
B.d9N=w([D.ax,D.az,D.bg,D.m2,D.d5,D.cf,D.fb],x.O)
B.eMm=new C.y("back","Back wall")
B.eWJ=new C.y("left","Left wall")
B.eOB=new C.y("right","Right wall")
B.dae=w([B.eMm,B.eWJ,B.eOB],x.L)
B.aAA=w(["dryer4","dryer3","range4","range3","washer"],x.s)
B.eiy={black:0}
B.K2=new C.df(B.eiy,1,x.M)
B.bM5=new A.fm(51,"Black wire nut: HOT",B.K2,"The house black wire joins the fixture black wire.",!1,"hot")
B.ejL={white:0}
B.K1=new C.df(B.ejL,1,x.M)
B.bMB=new A.fm(52,"White wire nut: NEUTRAL",B.K1,"The house white wire joins the fixture white wire.",!1,"neutral")
B.bM0=new A.fm(53,"Green ground connection",B.Ax,"The bare copper house ground joins the green fixture ground wire.",!1,"ground")
B.dap=w([B.bM5,B.bMB,B.bM0],x.r)
B.eSm=new C.y(-34,-6)
B.eAl=new C.y(30,10)
B.eRZ=new C.y(-10,24)
B.dau=w([B.eSm,B.eAl,B.eRZ],x.f)
B.daB=w([y.O,y.x,y.R,"Fasten hot leg 1 from the panel (black) to the top LEFT screw.","Fasten hot leg 2 from the panel (red) to the top RIGHT screw.","Fasten hot leg 1 to the heater (black) to the bottom LEFT screw.","Fasten hot leg 2 to the heater (red) to the bottom RIGHT screw.",y.b,y.n],x.s)
B.bKy=new A.Ep("Oak",B.yh,"wood")
B.bKA=new A.Ep("Dark wood",B.qk,"wood")
B.ajC=new C.u(1,0.5529411764705883,0.5647058823529412,0.5882352941176471,D.q)
B.bKC=new A.Ep("Grey carpet",B.ajC,"carpet")
B.bsM=new C.u(1,0.3568627450980392,0.4980392156862745,0.6509803921568628,D.q)
B.bKz=new A.Ep("Blue carpet",B.bsM,"carpet")
B.bq7=new C.u(1,0.8470588235294118,0.803921568627451,0.7058823529411765,D.q)
B.bKw=new A.Ep("Cream carpet",B.bq7,"carpet")
B.bKB=new A.Ep("White tile",B.YI,"tile")
B.bKx=new A.Ep("Slate tile",B.ag6,"tile")
B.aAE=w([B.bKy,B.bKA,B.bKC,B.bKz,B.bKw,B.bKB,B.bKx],C.as("O<Ep>"))
B.ac4=new A.iQ("hot1","Black \xb7 hot 1",B.rA,D.c,"hot")
B.ac5=new A.iQ("hot2","Red \xb7 hot 2",B.vU,D.c,"hot")
B.a5a=w([B.EQ,B.ac4,B.ac5],x.d)
B.eZ_=new C.b5(-80,100,D.ax)
B.f0k=new C.b5(80,100,D.bg)
B.f_c=new C.b5(-80,150,D.az)
B.dbm=w([B.eZ_,B.f0k,B.f_c],x.dV)
B.hBa=new A.pK(0,0,78,26)
B.dbu=w([B.hBa],x.X)
B.ejB={store:0,gasstation:1}
B.fa8=new C.df(B.ejB,2,x.M)
B.bxn=new A.zq("food","\ud83c\udf54","Food",B.fa8)
B.ejy={shop:0,store:1}
B.f9B=new C.df(B.ejy,2,x.M)
B.bxm=new A.zq("groceries","\ud83d\uded2","Groceries",B.f9B)
B.eiS={hospital:0}
B.f9w=new C.df(B.eiS,1,x.M)
B.bxp=new A.zq("medicine","\ud83d\udc8a","Medicine",B.f9w)
B.eiX={hq:0,tower:1}
B.fa4=new C.df(B.eiX,2,x.M)
B.bxl=new A.zq("package","\ud83d\udce6","Package",B.fa4)
B.ei0={school:0,firestation:1,hq:2}
B.f9g=new C.df(B.ei0,3,x.M)
B.bxo=new A.zq("letters","\u2709\ufe0f","Letters",B.f9g)
B.RR=w([B.bxn,B.bxm,B.bxp,B.bxl,B.bxo],C.as("O<zq>"))
B.dbJ=w([y.O,y.x,y.F,"Fasten the black hot to a BRASS screw.","Fasten the green wire with the yellow stripe (the isolated ground, which runs all the way to the panel) to the GREEN screw with the orange triangle. The box itself is grounded with its own bare copper wire.",y.b,y.n],x.s)
B.dbM=w(["Look round: the stack of sheets, the mud, the tape, the knife, the screw gun and the rest of the tools are on the floor.","Hang the ceiling first. Cut the 24 inch pieces to size with the Cutter before you hang them.","Hang the wall sheets, cutting the narrow ones.","Screw every sheet to the studs and joists with the Screw gun.","Cut the holes for the boxes, the door and the window with the Saw.","Put corner bead on the door and the window.","On each surface: mud (bed coat), tape, then mud twice more, waiting for each coat to dry.","Sand each surface smooth when the last coat is dry.","Prime every surface with the Roller. The room is finished."],x.s)
B.dbR=w([-1000,-500,0,500,1000],x.n)
B.dcP=w([y.O,y.x,"Take the metal GROUND STRAP off: tap it. On a 4-wire cord the neutral must NOT touch the frame, because the green wire grounds the frame.","Fasten the green ground wire to the GREEN frame screw where the strap was.","Fasten the white neutral to the MIDDLE terminal.",y.A,y.d,y.b,y.n],x.s)
B.hig=new A.r(3,3.2,-7.85)
B.hnq=new A.r(3,4,-7.85)
B.hms=new A.r(3,4.2,-7.4)
B.h5b=new A.r(3,3.95,-7)
B.dcS=w([B.hig,B.hnq,B.hms,B.h5b],x.o)
B.dcU=w(["The sink leaks and there is water on the floor. Please fix the plumbing.","The toilet is not connected and the water is running everywhere. Help!","There is no water at my sink and the pipes are open. Can a plumber come?"],x.s)
B.Y8=new C.u(1,0.23137254901960785,0.3568627450980392,0.47843137254901963,D.q)
B.dd4=w([D.am,B.Y8,D.bM,D.bu],x.O)
B.faH=new A.rY("apple","\ud83c\udf4e","Apple","A little energy",3,0.12,0,0.1,!1)
B.faI=new A.rY("water","\ud83d\udca7","Water","Quenches your thirst",2,0,0,0.8,!1)
B.faJ=new A.rY("juice","\ud83e\udd64","Juice","Some energy and a drink",4,0.18,0,0.5,!1)
B.faO=new A.rY("sandwich","\ud83e\udd6a","Sandwich","A good bit of energy",6,0.3,0,0,!1)
B.faG=new A.rY("meal","\ud83c\udf54","Burger meal","Lots of energy",10,0.55,0,0,!1)
B.dd7=w([B.faH,B.faI,B.faJ,B.faO,B.faG],x.a_)
B.a8f=new A.Xt("door",2,31.5,67.5,0,80.5)
B.TT=new A.Xt("window",1,40,76,36,72)
B.zK=w([B.a8f,B.TT],C.as("O<Xt>"))
B.eSB=new C.y(-660,340)
B.eSj=new C.y(-330,340)
B.eAm=new C.y(330,340)
B.eD2=new C.y(660,340)
B.eSC=new C.y(-660,500)
B.eSk=new C.y(-330,500)
B.eAn=new C.y(330,500)
B.eD3=new C.y(660,500)
B.eSD=new C.y(-660,780)
B.eSl=new C.y(-330,780)
B.eAp=new C.y(330,780)
B.eD4=new C.y(660,780)
B.eSu=new C.y(-500,940)
B.eCx=new C.y(500,940)
B.ddK=w([B.eSB,B.eSj,B.eAm,B.eD2,B.eSC,B.eSk,B.eAn,B.eD3,B.eSD,B.eSl,B.eAp,B.eD4,B.eSu,B.eCx],x.f)
B.k7=w(["outlet","gfci","split","v240four","v240three","v240only","isolated","dryer4","dryer3","range4","range3","washer"],x.s)
B.hj0=new A.r(6,0.2,0)
B.hgW=new A.r(6,2.6,0)
B.aZu=new A.r(8.6,2.6,0)
B.dee=w([B.hj0,B.hgW,B.aZu],x.o)
B.uY=w([B.hO,B.p_,B.pT,B.h4],x.o)
B.deK=w([D.c,D.dw,D.et,D.eQ,D.bO,D.bN],x.O)
B.eSK=new C.y(-7,-7)
B.eDB=new C.y(7,-7)
B.eSJ=new C.y(-7,7)
B.eDA=new C.y(7,7)
B.deZ=w([B.eSK,B.eDB,B.eSJ,B.eDA],x.f)
B.df0=w([-2.4,2.4],x.n)
B.df1=w([-0.5,0,0.5],x.n)
B.anM=new A.fm(21,"Brass screw X: HOT",B.Eo,y.p,!1,"hot")
B.anI=new A.fm(22,"Brass screw Y: HOT",B.Eo,y.p,!1,"hot")
B.dfc=w([B.uz,B.anM,B.anI],x.r)
B.dff=w([-1.2,1.2],x.n)
B.hpR=new A.Q6("Black","Hot (line or switched)","Brass terminal","120 V branch circuit","Carries the power from the breaker. Treat it as live until it is tested dead.","Can be a traveler in a three-way switch, or a switched hot. Verify with a tester.")
B.hpP=new A.Q6("Red","Hot (second hot or traveler)","Brass or the marked traveler terminal","Switch legs, travelers, fan and light controls","Often the switched wire to a fan or light, or a traveler.","Check the diagram: red can be a traveler or a second circuit.")
B.hpO=new A.Q6("White","Neutral","Silver terminal","120 V branch circuit","The return path for the current. It can still be live if something is wrong.","In a switch loop a white wire can be re-marked as a hot. A white wire is not always neutral.")
B.hpN=new A.Q6("Bare copper or green","Equipment ground","Green screw or the ground lead","Every grounded device","Not for current in normal use. It is the safety path if a fault happens.","Never use the neutral as a ground. Older homes may have no ground at all: that needs verification.")
B.hpQ=new A.Q6("Gray / blue / others","Depends on the installation","See the device diagram","Low voltage, control wires, other systems","Do not guess what a wire does from its color.","Colors and their meaning are not the same everywhere. REQUIRES VERIFICATION.")
B.dfh=w([B.hpR,B.hpP,B.hpO,B.hpN,B.hpQ],C.as("O<Q6>"))
B.RZ=w([-1.6,1.6],x.n)
B.hps=new A.iQ("blackLine","Black \xb7 from the breaker",B.rA,D.c,"hot")
B.hpI=new A.iQ("blackLoad","Black \xb7 to the light",B.ML,D.c,"hot")
B.dfq=w([B.hps,B.hpI,B.rb],x.d)
B.dfI=w([0,10,22,36,52],x.n)
B.hBd=new A.pK(0,-60,130,26)
B.hBi=new A.pK(1,80,56,22)
B.dfJ=w([B.hBd,B.hBi],x.X)
B.dg8=w([D.bp,D.bs,D.ax,D.aJ,D.bu],x.O)
B.dgh=w([1.1,-1.1],x.n)
B.b2b=new A.p4("lamp","Table lamp",11)
B.b2h=new A.p4("toaster","Toaster",10)
B.b29=new A.p4("hairdryer","Hair dryer",9)
B.b25=new A.p4("washerM","Washing machine",27)
B.b28=new A.p4("dryerM","Clothes dryer",27)
B.b2a=new A.p4("rangeM","Kitchen range",30)
B.aAU=w([B.b2b,B.b2h,B.b29,B.b25,B.b28,B.b2a],x.F)
B.ej1={isoground:0}
B.f98=new C.df(B.ej1,1,x.M)
B.bMA=new A.fm(25,"Isolated-ground screw (green, orange triangle)",B.f98,"The dedicated ground wire goes on the green screw with the orange triangle. It does not touch the box or the strap.",!1,"ground")
B.dgk=w([B.bMA,B.anP,B.anL],x.r)
B.bh_=new C.u(1,0.9294117647058824,0.9019607843137255,0.8392156862745098,D.q)
B.beU=new C.u(1,0.9137254901960784,0.8274509803921568,0.8274509803921568,D.q)
B.be3=new C.u(1,0.8352941176470589,0.8941176470588236,0.8156862745098039,D.q)
B.ahH=new C.u(1,0.9529411764705882,0.8901960784313725,0.6549019607843137,D.q)
B.bjO=new C.u(1,0.7254901960784313,0.7647058823529411,0.8666666666666667,D.q)
B.bsV=new C.u(1,0.5607843137254902,0.6392156862745098,0.6588235294117647,D.q)
B.aAX=w([B.bh_,B.Yu,B.beU,B.be3,B.ahH,B.bjO,B.ahM,B.bsV],x.O)
B.eix={blackLine:0,blackLoad:1}
B.aS6=new C.df(B.eix,2,x.M)
B.bMf=new A.fm(21,"Brass screw (top)",B.aS6,y.v,!1,"hot")
B.bM1=new A.fm(22,"Brass screw (bottom)",B.aS6,y.v,!1,"hot")
B.anJ=new A.fm(25,"Green screw: GROUND",B.Ax,y.Z,!1,"ground")
B.dgW=w([B.bMf,B.bM1,B.anJ],x.r)
B.eSM=new C.y(-80,90)
B.eDP=new C.y(80,90)
B.eSL=new C.y(-80,140)
B.eDO=new C.y(80,140)
B.dhE=w([B.eSM,B.eDP,B.eSL,B.eDO],x.f)
B.bMC=new A.fm(51,"Black wire nut: HOT",B.K2,"The house black wire joins the fan black wire.",!1,"hot")
B.bM_=new A.fm(52,"White wire nut: NEUTRAL",B.K1,"The house white wire joins the fan white wire.",!1,"neutral")
B.bMn=new A.fm(53,"Green ground connection",B.Ax,"The bare copper house ground joins the green fan ground wire.",!1,"ground")
B.dhL=w([B.bMC,B.bM_,B.bMn],x.r)
B.bdP=new A.SZ("bus",-575,-25,0,1)
B.bdR=new A.SZ("police",-575,-25,854,5)
B.bdQ=new A.SZ("bus",25,575,850,3)
B.bdS=new A.SZ("police",25,575,1704,6)
B.kx=w([B.bdP,B.bdR,B.bdQ,B.bdS],C.as("O<SZ>"))
B.ans=new A.rt(4,"deadOutlet")
B.dhT=w([B.a1a,B.a1b,B.Ov,B.Ow,B.ans,B.a1e,B.a1f,B.a1g,B.a1h,B.a1i,B.a1c,B.a1d],C.as("O<rt>"))
B.f1L=new C.cu([0,560,240,7])
B.f1M=new C.cu([0,560,300,9])
B.a5m=w([B.f1L,B.f1M],C.as("O<+(H,H,H,F)>"))
B.huz=new A.m3("outlet","\ud83d\udd0c","Wall outlet","Black to brass, white to silver",D.az)
B.hur=new A.m3("switch","\ud83d\udca1","Light switch","Two blacks and a wire nut",D.aJ)
B.hus=new A.m3("gfci","\ud83d\udee1\ufe0f","GFCI outlet","LINE and LOAD near water",D.bw)
B.huA=new A.m3("fan","\ud83c\udf00","Ceiling fan","Black, white, green and a fan box",D.ba)
B.huk=new A.m3("switch2p","\ud83d\udd25","Double-pole switch","240 V: breaks both hot legs",D.i3)
B.hut=new A.m3("switch3","\ud83d\udd00","Three-way switch","Common and two travelers",D.aJ)
B.huF=new A.m3("switch4","\ud83d\udd01","Four-way switch","Between two three-ways",D.cq)
B.huD=new A.m3("switchsmart","\ud83d\udcf6","Smart, motion or timer switch","Needs the neutral wire",D.bt)
B.huu=new A.m3("switchcombo","\ud83c\udf9a\ufe0f","Combination switch","Two switches, one feed",D.hm)
B.hun=new A.m3("split","\ud83c\udf17","Split (half-switched) outlet","Break the tab: switched and always-on",D.aU)
B.huB=new A.m3("v240four","\ud83e\uddfa","4-wire 240 V outlet","Dryer, range and EV: two hots, neutral, ground",D.c0)
B.huC=new A.m3("v240three","\ud83d\udd70\ufe0f","3-wire 240 V outlet","Old dryer or range: no separate ground",D.cJ)
B.hum=new A.m3("v240only","\u2744\ufe0f","240 V only outlet","Window AC, welder: two hots and ground",D.ba)
B.huw=new A.m3("isolated","\ud83c\udfed","Isolated-ground outlet","Its own ground wire to the panel",D.bw)
B.huo=new A.m3("dryer4","\ud83d\udc55","Dryer outlet, 4-wire (14-30)","New houses: X, Y, W and a ground",D.i3)
B.huy=new A.m3("dryer3","\ud83e\udde6","Dryer outlet, 3-wire (10-30)","Old houses: the neutral also grounds",D.cJ)
B.huv=new A.m3("range4","\ud83c\udf73","Range outlet, 4-wire (14-50)","50 amp stove: X, Y, W and a ground",D.c0)
B.huG=new A.m3("range3","\ud83e\udd58","Range outlet, 3-wire (10-50)","Old 50 amp stove: no separate ground",D.aU)
B.huj=new A.m3("washer","\ud83e\uddfa","Washing machine outlet (5-20)","Its own 20 amp circuit, near water",D.aJ)
B.huE=new A.m3("cord3","\ud83d\udd0c","Dryer cord, 3-wire hookup","The ground strap stays on",D.bt)
B.huq=new A.m3("cord4","\u26a1","Dryer cord, 4-wire hookup","Take the ground strap off",D.bw)
B.hux=new A.m3("ptrap","\ud83e\udea0","Sink drain (P-trap)","Build a drain with a water seal",D.cq)
B.hup=new A.m3("faucet","\ud83d\udeb0","Faucet supply lines","Hot left, cold right",D.c0)
B.hul=new A.m3("house","\ud83c\udfd7\ufe0f","Build and fix a house","Stage by stage, then repair",D.bt)
B.die=w([B.huz,B.hur,B.hus,B.huA,B.huk,B.hut,B.huF,B.huD,B.huu,B.hun,B.huB,B.huC,B.hum,B.huw,B.huo,B.huy,B.huv,B.huG,B.huj,B.huE,B.huq,B.hux,B.hup,B.hul],C.as("O<m3>"))
B.hpG=new A.iQ("always","Black \xb7 always hot (from the panel)",B.rA,D.c,"hot")
B.hpA=new A.iQ("switched","Red \xb7 switched hot (from the wall switch)",B.vU,D.c,"hot")
B.dik=w([B.rb,B.EQ,B.hpG,B.hpA],x.d)
B.dio=w([y.O,"Find the LINE and LOAD screws. LOAD is covered with yellow tape. Leave it covered unless you feed another outlet.",y.R,"Fasten the white wire to the silver LINE screw.","Fasten the black wire to the brass LINE screw.","Push the GFCI into the box and put the plate on.","Turn the power on, press RESET, then press TEST. It must click off."],x.s)
B.dir=w([y.O,y.x,y.R,"Fasten the black wire (power in, or to the light) to the COMMON screw: the odd-coloured one.","Fasten the first traveler (red) to a TRAVELER screw.","Fasten the second traveler (white wire taped black) to the other TRAVELER screw.",y.b,y.n],x.s)
B.hBb=new A.pK(0,0,80,26)
B.hBk=new A.pK(1,90,56,22)
B.diK=w([B.hBb,B.hBk],x.X)
B.diU=w(["car","ambulance","firetruck"],x.s)
B.diV=w([y.O,y.x,"This outlet has its own 20 amp breaker and 12 gauge wire (a yellow cable): the washer must not share its circuit with anything else. The T-shaped slot tells you it takes both 15 and 20 amp plugs. In a laundry area the new code asks for GFCI protection, from a GFCI breaker or a GFCI outlet before it.",y.R,y.F,"Fasten the black hot to a BRASS screw.",y.b,y.n],x.s)
B.dEo=new A.i9(-62,62,6,46)
B.dEb=new A.i9(-117,-73,149,171)
B.dEl=new A.i9(-57,-13,164,186)
B.dE6=new A.i9(73,117,159,181)
B.dDZ=new A.i9(120,144,140,160)
B.dDX=new A.i9(108,142,48,60)
B.dj_=w([B.dEo,B.dEb,B.dEl,B.dE6,B.dDZ,B.dDX],x.T)
B.dj3=w([0.1,8.05],x.n)
B.h5f=new A.r(1000,900,1500)
B.h3H=new A.r(0,200,0)
B.aQM=new C.y(B.h5f,B.h3H)
B.h84=new A.r(300,70,1000)
B.h41=new A.r(0,250,300)
B.eME=new C.y(B.h84,B.h41)
B.hkc=new A.r(-200,90,780)
B.h3Y=new A.r(0,240,300)
B.eIC=new C.y(B.hkc,B.h3Y)
B.hkC=new A.r(-420,520,1000)
B.h3W=new A.r(0,230,300)
B.eEd=new C.y(B.hkC,B.h3W)
B.hay=new A.r(700,330,900)
B.h82=new A.r(300,230,200)
B.eRt=new C.y(B.hay,B.h82)
B.h5z=new A.r(1100,80,300)
B.h9D=new A.r(560,250,0)
B.eQr=new C.y(B.h5z,B.h9D)
B.h5o=new A.r(1080,100,-250)
B.h9C=new A.r(560,240,-100)
B.eUs=new C.y(B.h5o,B.h9C)
B.h5e=new A.r(1000,700,-700)
B.h71=new A.r(200,230,-300)
B.eWF=new C.y(B.h5e,B.h71)
B.h72=new A.r(200,90,-860)
B.h43=new A.r(0,250,-300)
B.eT0=new C.y(B.h72,B.h43)
B.hkk=new A.r(-300,110,-820)
B.h3Z=new A.r(0,240,-300)
B.eJd=new C.y(B.hkk,B.h3Z)
B.hla=new A.r(-900,600,-600)
B.hkl=new A.r(-300,230,-100)
B.eHO=new C.y(B.hla,B.hkl)
B.hjW=new A.r(-1100,90,-200)
B.hkJ=new A.r(-560,250,0)
B.eWD=new C.y(B.hjW,B.hkJ)
B.hjV=new A.r(-1100,120,250)
B.hkI=new A.r(-560,240,0)
B.eM4=new C.y(B.hjV,B.hkI)
B.hkS=new A.r(-700,520,1000)
B.hjS=new A.r(-100,230,100)
B.eFN=new C.y(B.hkS,B.hjS)
B.h70=new A.r(200,170,1300)
B.h3V=new A.r(0,230,150)
B.eWp=new C.y(B.h70,B.h3V)
B.djj=w([B.aQM,B.eME,B.eIC,B.eEd,B.eRt,B.eQr,B.eUs,B.eWF,B.eT0,B.eJd,B.eHO,B.eWD,B.eM4,B.eFN,B.eWp,B.aQM],x.dt)
B.heC=new A.r(-0.35,11,-3.4)
B.hcv=new A.r(-0.35,3.2,-3.2)
B.hh5=new A.r(-0.35,2.2,-1.9)
B.hak=new A.r(-0.35,0.7,-1.5)
B.djk=w([B.heC,B.hcv,B.hh5,B.hak],x.o)
B.hmh=new A.r(5.2,7.5,-7.85)
B.hgR=new A.r(5.2,4,-7.85)
B.djq=w([B.hmh,B.hgR],x.o)
B.eWZ=new C.y(-0.9,0)
B.ePT=new C.y(0.9,0)
B.djt=w([B.eWZ,B.ePT],x.f)
B.eS9=new C.y(-1,"NGMY")
B.ezu=new C.y(1,"ELEVATOR")
B.djQ=w([B.eS9,B.ezu],x.U)
B.bM9=new A.fm(21,"LOAD hot (brass, taped)",D.M,y.P,!0,"load")
B.bMb=new A.fm(22,"LINE hot (brass)",B.K2,"The black (hot) wire from the breaker goes on the brass LINE screw.",!1,"hot")
B.bM8=new A.fm(23,"LOAD neutral (silver, taped)",D.M,y.P,!0,"load")
B.bMk=new A.fm(24,"LINE neutral (silver)",B.K1,"The white (neutral) wire from the breaker goes on the silver LINE screw.",!1,"neutral")
B.djV=w([B.bM9,B.bMb,B.bM8,B.bMk,B.anJ],x.r)
B.hjj=new A.r(0,15.5,-3.6)
B.heW=new A.r(0,20,-3.6)
B.hn1=new A.r(0,22.5,-2)
B.hc1=new A.r(0,22.5,1.1999999999999997)
B.abS=new A.r(0,21.1,1.6)
B.dk0=w([B.hjj,B.heW,B.hn1,B.hc1,B.abS],x.o)
B.dkf=w(["the panel wall","the window wall","the door wall","the bare wall"],x.s)
B.dkH=w([],x.bm)
B.Iy=w([],x.I)
B.dkG=w([],x.dI)
B.v0=w([],x.E)
B.dkI=w([],x.T)
B.v1=w([],x.z)
B.aBo=w([],x.e3)
B.qN=w([],x.a)
B.dkF=w([],x.Y)
B.aBn=w([],x.J)
B.nH=w([],x.o)
B.aBq=w([],x.h)
B.aBp=w([],x.f)
B.eI7=new C.y(-1.6,3.5)
B.eHG=new C.y(1.6,3.5)
B.eJG=new C.y(-1.6,-3.5)
B.eGm=new C.y(1.6,-3.5)
B.dkW=w([B.eI7,B.eHG,B.eJG,B.eGm],x.f)
B.dl2=w([y.O,"Look at the face: two slanted slots at the top (X and Y, hot) and one straight slot at the bottom (W, neutral), and no ground hole. That is a NEMA 10-50, the old 3-wire range outlet.",y.r,y.E,y.k,y.b,y.n],x.s)
B.dl4=w([y.O,y.x,"Look at the face: a straight slot at the top (W, neutral), two straight slots at the sides (X and Y, hot) and a round hole at the bottom (G, ground). That is a NEMA 14-50, the 4-wire range outlet. It takes 6 gauge wire and a 50 amp double breaker.",y.R,y.r,y.E,y.k,y.b,y.n],x.s)
B.aBx=w([!1,!1,!1,!1],x.u)
B.ej0={in1:0,in2:1}
B.aS5=new C.df(B.ej0,2,x.M)
B.bM3=new A.fm(23,"IN screw (top left)",B.aS5,y.g,!1,"hot")
B.bMv=new A.fm(21,"IN screw (top right)",B.aS5,y.g,!1,"hot")
B.ejp={out1:0,out2:1}
B.aSb=new C.df(B.ejp,2,x.M)
B.bMm=new A.fm(24,"OUT screw (bottom left)",B.aSb,y.e,!1,"hot")
B.bMo=new A.fm(22,"OUT screw (bottom right)",B.aSb,y.e,!1,"hot")
B.dlq=w([B.uz,B.bM3,B.bMv,B.bMm,B.bMo],x.r)
B.dlA=w(["city","billboards","edges","houses","hospital","traffic"],x.s)
B.dlM=w(["Look at the pieces: the tailpiece, the P-trap and the trap arm. Pick the tailpiece first and tap its glowing outline under the sink.","Pick the P-trap (the U-shaped bend) and tap its glowing outline. It joins the tailpiece.","Pick the trap arm and tap its outline. It joins the trap to the wall drain.","Slide each slip nut up to its joint and hand tighten it: tap the nuts.","Run the water and look for leaks. The U-bend keeps a plug of water that blocks sewer gas."],x.s)
B.fPj=new C.B("\u2728",null,D.aaw,null,null,null,null,null,null,null,null,null)
B.fZQ=new C.B("Nobody needs help right now.",null,D.fC,null,D.K,null,null,null,null,null,null,null)
B.fza=new C.G(!0,D.aS,null,null,null,null,13,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fRI=new C.B("Everybody's wiring and plumbing works. Keep an eye on food and health: things break when you least expect it.",null,B.fza,null,D.K,null,null,null,null,null,null,null)
B.dmb=w([B.fPj,D.P,B.fZQ,D.aw,B.fRI],x.p)
B.dmi=w(["road","roundabout","roadturn","roadtee","roadcross","house2","bighouse","billboard","tower","hq","store","gasstation","dmv","ubstation","townsign","cornersign","adboard","shop","hospital","firestation","school","car","firetruck","ambulance","dog","cat","cow","sheep","chicken","horse","tree","pine","bush","flowers","fence","lamppost","bench","pond","swing","shed","doghouse"],x.s)
B.eS2=new C.y(-1150,80)
B.ez2=new C.y(1150,80)
B.eS1=new C.y(-1150,1990)
B.ez1=new C.y(1150,1990)
B.dmr=w([B.eS2,B.ez2,B.eS1,B.ez1],x.f)
B.faM=new A.rY("pills","\ud83e\ude79","Pain pills","Cures a headache or a cold: you walk normally again",8,0,0,0,!0)
B.faL=new A.rY("bread","\ud83c\udf5e","Food for the town","5 portions for the people who live here",10,0,0,0,!1)
B.faK=new A.rY("medicine","\ud83d\udc8a","Medicine","3 doses for the sick",12,0,0,0,!1)
B.dmv=w([B.faM,B.faL,B.faK],x.a_)
B.dmy=w([D.ax,D.bs,D.bg],x.O)
B.hjE=new A.r(125,292,-121.5)
B.hmR=new A.r(-125,292,-121.5)
B.h5c=new A.r(-125,208,-121.5)
B.hjf=new A.r(125,208,-121.5)
B.dmC=w([B.hjE,B.hmR,B.h5c,B.hjf],x.o)
B.h6l=new A.r(11.4,4.6,-6)
B.hfi=new A.r(11.4,5,-7.85)
B.hal=new A.r(2.6,5,-7.85)
B.hb8=new A.r(2.6,3.4,-7.85)
B.dmE=w([B.h6l,B.hfi,B.hal,B.hb8],x.o)
B.dmI=w(["hospital","shop","school"],x.s)
B.dmJ=w(["hot","cold"],x.s)
B.dmM=w([D.ax,D.bg,D.az,D.fb,D.bT],x.O)
B.hpE=new A.iQ("black","Black \xb7 hot",B.rA,D.c,"hot")
B.hpy=new A.iQ("white","White \xb7 neutral",B.m1,D.av,"neutral")
B.Sm=w([B.hpE,B.hpy,B.rb],x.d)
B.eEB=new C.y(-3.5,4)
B.eLF=new C.y(3.5,4)
B.eGP=new C.y(-3.5,-4)
B.eyr=new C.y(3.5,-4)
B.dnc=w([B.eEB,B.eLF,B.eGP,B.eyr],x.f)
B.dnh=w(["Ada","Ben","Chidi","Dina","Efe","Farah","Gus","Halima","Ivo","Jamal","Kemi","Lola"],x.s)
B.eWN=new C.y(-2.4,5)
B.eN6=new C.y(2.4,5)
B.eKh=new C.y(-2.4,-5)
B.eIY=new C.y(2.4,-5)
B.dni=w([B.eWN,B.eN6,B.eKh,B.eIY],x.f)
B.dnL=w([y.O,"Break off the little brass tab between the two brass screws, so the two halves are separate.",y.R,"Fasten the white neutral to a SILVER screw (the silver tab stays joined).","Fasten the always-hot black wire to the bottom BRASS screw.","Fasten the switched hot (red, from the wall switch) to the top BRASS screw.",y.b,y.n],x.s)
B.dnW=w([y.O,y.x,"Look at the face: an L-shaped slot (W, neutral), two straight slots at the sides (X and Y, hot) and a round hole (G, ground). That is a NEMA 14-30, the 4-wire dryer outlet. It takes 10 gauge wire and a 30 amp double breaker.",y.R,y.r,y.E,y.k,y.b,y.n],x.s)
B.bMi=new A.fm(25,"Green screw G: GROUND",B.Ax,y.H,!1,"ground")
B.aBL=w([B.bMi,B.OF,B.anH,B.anQ],x.r)
B.f0q=new C.b5(-6,-4,D.c1)
B.eZJ=new C.b5(5,-5,D.bs)
B.f0o=new C.b5(0,1,D.ax)
B.f1_=new C.b5(-5,5,D.bt)
B.eYL=new C.b5(6,4,D.c)
B.do5=w([B.f0q,B.eZJ,B.f0o,B.f1_,B.eYL],x.dV)
B.doz=w([A0.qZ,V.lt],x.f)
B.aBM=w(["split","v240four","v240three","v240only","isolated"],x.s)
B.eiN={feed:0}
B.f9J=new C.df(B.eiN,1,x.M)
B.bM7=new A.fm(21,"FEED screw (joined tab)",B.f9J,"The one feed wire goes on the side where the brass screws are joined by a tab: it powers both switches.",!1,"hot")
B.ejc={loadA:0,loadB:1}
B.aSa=new C.df(B.ejc,2,x.M)
B.bMz=new A.fm(22,"Switch 1 screw \u2192 light 1",B.aSa,y.q,!1,"hot")
B.bME=new A.fm(24,"Switch 2 screw \u2192 light 2",B.aSa,y.q,!1,"hot")
B.doP=w([B.uz,B.bM7,B.bMz,B.bME],x.r)
B.eRv=new C.y("Slab","First the concrete slab (the foundation) is poured and left to cure. Every wall sits on it.")
B.eUw=new C.y("Framing","The carpenters build the wall frames from 2x4 studs, spaced 16 inches apart, with plates on the top and bottom.")
B.eIH=new C.y("Plumbing rough-in","The plumber runs the hot (red) and cold (blue) water lines and the white drain pipes inside the walls and floor before anything is closed up.")
B.ePD=new C.y("Electrical rough-in","The electrician runs the yellow and white cables from the breaker panel to every box, and fixes the boxes to the studs.")
B.eQK=new C.y("Drywall","Drywall covers the frame. Here it is see-through so you can still look at the pipes and wires behind it.")
B.eJ8=new C.y("Fixtures","Last come the outlets, switches, light, sink, toilet and water heater. This is where most repairs happen.")
B.eKs=new C.y("Roof","The roof goes on to keep everything dry. It is see-through here so you can keep looking inside.")
B.doS=w([B.eRv,B.eUw,B.eIH,B.ePD,B.eQK,B.eJ8,B.eKs],x.L)
B.dE8=new A.i9(-100,100,24,90)
B.dEd=new A.i9(-134,-110,100,190)
B.dDY=new A.i9(110,134,100,190)
B.doW=w([B.dE8,B.dEd,B.dDY],x.T)
B.aZS=new A.iQ("hot","Black \xb7 hot",B.rA,D.c,"hot")
B.dp1=w([B.rb,B.EQ,B.aZS],x.d)
B.eS8=new C.y(-17,-9)
B.ezb=new C.y(17,-9)
B.eS7=new C.y(-17,9)
B.eza=new C.y(17,9)
B.dpx=w([B.eS8,B.ezb,B.eS7,B.eza],x.f)
B.dpD=w([-100,0,100],x.n)
B.dpE=w([-110,-80,80,110],x.n)
B.a5M=w([-14,14],x.n)
B.dpG=w([-150,150],x.n)
B.dpH=w([-178,178],x.n)
B.dpJ=w([-18,18],x.n)
B.aBU=w([-20,0,20],x.n)
B.dpL=w([-21,21],x.n)
B.a5N=w([-26,26],x.n)
B.dpM=w([-27,27],x.n)
B.faN=new A.rY("can","\ud83d\udee2","Gas can","Half a tank of gas",8,0,0.5,0,!1)
B.aSp=new A.rY("tank","\u26fd","Fill the tank","A full tank",12,0,1,0,!1)
B.dpN=w([B.faN,B.aSp],x.a_)
B.dpP=w([-30,-10,10,30],x.n)
B.dpQ=w([-32,32],x.n)
B.dpR=w([-32,-8,34],x.n)
B.aBV=w([-34,34],x.n)
B.dpS=w([-3,3],x.n)
B.dpT=w([-47,47],x.n)
B.dpU=w([-48,48],x.n)
B.dpV=w([-52,52],x.n)
B.aBX=w([-55,55],x.n)
B.dpX=w([-600,0,600],x.n)
B.dpY=w([-600,600],x.n)
B.aBY=w([-62,62],x.n)
B.dpZ=w([-6,6],x.n)
B.dq0=w([-70,70],x.n)
B.oJ=w([-72,-24,24],x.t)
B.dq2=w([-75,75],x.n)
B.dq3=w(["Look under the sink. The wall has two shut-off valves: hot on the LEFT (red handle) and cold on the RIGHT (blue handle).","Pick the red hot hose. Tap the left shut-off valve, then the left faucet inlet.","Pick the blue cold hose. Tap the right shut-off valve, then the right faucet inlet.","Turn each valve handle (tap it) to let the water in. Check every connection for drips."],x.s)
B.a5P=w([-7,7],x.n)
B.aBZ=w([-80,80],x.n)
B.dq5=w([-900,-300,300,900],x.n)
B.dq6=w([-90,0,90],x.n)
B.dq7=w([-90,-52,52,90],x.n)
B.aC1=w([-9,9],x.n)
B.aC5=w(["switch2p","switch3","switch4","switchsmart","switchcombo"],x.s)
B.dqq=w(["medicine","food"],x.s)
B.dqD=w([y.O,y.x,y.R,"The first traveler from the FIRST three-way goes on a top screw (IN).","The second traveler from the FIRST three-way goes on the other top screw (IN).","The first traveler to the SECOND three-way goes on a bottom screw (OUT).","The second traveler to the SECOND three-way goes on the other bottom screw (OUT).",y.b,y.n],x.s)
B.drb=w([D.d2,D.az],x.O)
B.b2d=new A.p4("bangtv",'Beovision 77"',66)
B.b2c=new A.p4("sonytv",'Sony Bravia 75"',64)
B.b24=new A.p4("lgtv",'LG OLED 65"',56)
B.b27=new A.p4("tv",'Samsung 55"',48)
B.b2e=new A.p4("appletv",'Apple TV 50"',44)
B.a5V=w([B.b2d,B.b2c,B.b24,B.b27,B.b2e],x.F)
B.hau=new A.r(8.2,5,-7.85)
B.hgV=new A.r(8.2,1.2,-7.85)
B.hjA=new A.r(8.2,1,-7.4)
B.drO=w([B.hau,B.hgV,B.hjA],x.o)
B.hpr=new A.iQ("common","Black \xb7 COMMON (power in or to the light)",B.rA,D.c,"hot")
B.hpp=new A.iQ("trav1","Red \xb7 traveler 1",B.vU,D.c,"hot")
B.hpB=new A.iQ("trav2","White taped black \xb7 traveler 2",B.m1,D.av,"hot")
B.drP=w([B.rb,B.hpr,B.hpp,B.hpB],x.d)
B.a5Y=w(["rug","road","roundabout","roadturn","roadtee","roadcross","pond","flowers"],x.s)
B.ds1=w(["human","soldier","michelle","xbot","human"],x.s)
B.eRX=new C.y(-1050,"hospital")
B.eSy=new C.y(-630,"store")
B.eSq=new C.y(-420,"tower")
B.eyG=new C.y(0,"tower")
B.eAS=new C.y(420,"tower")
B.eCZ=new C.y(630,"store")
B.eyV=new C.y(1050,"hospital")
B.ds5=w([B.eRX,B.aQO,B.eSy,B.eSq,B.aQN,B.eyG,B.aQB,B.eAS,B.eCZ,B.aQD,B.eyV],x.U)
B.evN=new A.Fy(61,"Hot shut-off valve (left)",B.a9G,"Hot is always on the LEFT. The red hose goes on the left valve.")
B.eiD={cold:0}
B.aSl=new C.df(B.eiD,1,x.M)
B.evO=new A.Fy(62,"Cold shut-off valve (right)",B.aSl,"Cold is always on the RIGHT. The blue hose goes on the right valve.")
B.evL=new A.Fy(63,"Hot faucet inlet (left)",B.a9G,"The left faucet inlet takes the hot (red) hose.")
B.evM=new A.Fy(64,"Cold faucet inlet (right)",B.aSl,"The right faucet inlet takes the cold (blue) hose.")
B.Su=w([B.evN,B.evO,B.evL,B.evM],C.as("O<Fy>"))
B.bMD=new A.fm(21,"Brass screw X: HOT",B.Eo,y.s,!1,"hot")
B.bM6=new A.fm(22,"Brass screw Y: HOT",B.Eo,y.s,!1,"hot")
B.aCi=w([B.OF,B.bMD,B.bM6],x.r)
B.a6_=w(["the ceiling","the panel wall","the window wall","the door wall","the bare wall"],x.s)
B.a60=w([-72,-48,-24,0,24],x.t)
B.aCo=w(["1 Rough-in","2 Drywall","3 Devices"],x.s)
B.dte=w([y.O,y.x,"Look at the terminal block. There is a metal GROUND STRAP from the middle terminal to the frame of the appliance. On a 3-wire cord it stays on: the neutral also grounds the frame.","Fasten the white neutral to the MIDDLE terminal, under the strap.",y.A,y.d,y.b,y.n],x.s)
B.dEr=new A.i9(-90,10,130,160)
B.dEk=new A.i9(-50,50,70,100)
B.dEe=new A.i9(-134,-110,20,70)
B.dtI=w([B.dEr,B.dEk,B.dEe],x.T)
B.Sw=w(["road","roadturn","roadtee","roadcross"],x.s)
B.N0=new C.u(1,0.1843137254901961,0.6352941176470588,0.30980392156862746,D.q)
B.hpL=new A.iQ("ground","Green \xb7 ground (to the frame)",B.N0,D.c,"ground")
B.dtS=w([B.hpL,B.aZQ,B.aZT,B.aZR],x.d)
B.bMg=new A.fm(21,"Brass screw (top): HOT side",B.K2,y.N,!1,"hot")
B.bMr=new A.fm(22,"Brass screw (bottom): HOT side",B.K2,y.N,!1,"hot")
B.bMl=new A.fm(23,"Silver screw (top): NEUTRAL side",B.K1,y.Q,!1,"neutral")
B.bMa=new A.fm(24,"Silver screw (bottom): NEUTRAL side",B.K1,y.Q,!1,"neutral")
B.bMh=new A.fm(25,"Green screw: GROUND",B.Ax,"The green screw is for the bare copper or green GROUND wire.",!1,"ground")
B.dtU=w([B.bMg,B.bMr,B.bMl,B.bMa,B.bMh],x.r)
B.du_=w([y.O,y.x,y.R,"Fasten the black hot to one HOT brass screw.","Fasten the red hot to the other HOT brass screw. There is no neutral and no silver screw in use.",y.b,y.n],x.s)
B.eSF=new C.y(-700,225)
B.eS4=new C.y(-120,160)
B.ez4=new C.y(120,160)
B.eDo=new C.y(720,225)
B.duf=w([B.eSF,B.eS4,B.ez4,B.eDo],x.f)
B.eZf=new C.b5("hot","Hot hose (red)",B.rv)
B.f_2=new C.b5("cold","Cold hose (blue)",B.nj)
B.duh=w([B.eZf,B.f_2],C.as("O<+(m,m,u)>"))
B.eAr=new C.y(34,40)
B.hsd=new A.AO(B.eAr,3.141592653589793,2.6,"Washing hands at the sink",!1,!1,!1,"")
B.duj=w([B.hsd],x.h)
B.duo=w(["dryer","range","washer","","dryer","range"],x.s)
B.b34=new A.HK("NGMY navy",E.iD,E.Mh,D.c,F.f0)
B.b39=new A.HK("Purple",D.oe,D.dJ,D.c,D.bN)
B.b37=new A.HK("Green",D.h7,D.bQ,D.c,D.m3)
B.b35=new A.HK("Sunset",D.ep,D.az,D.c,D.i2)
B.b36=new A.HK("Night",D.R,D.aL,D.b0,D.c1)
B.b38=new A.HK("Light",D.c,D.o4,E.iD,D.e0)
B.a63=w([B.b34,B.b39,B.b37,B.b35,B.b36,B.b38],C.as("O<HK>"))
B.abY=new A.r(15,2.6,0)
B.aCy=w([B.aZu,B.abY],x.o)
B.a64=w([B.rb,B.EQ,B.ac4,B.ac5],x.d)
B.b8y=new C.ac(0,D.G,D.aT,D.I,24)
B.duC=w([B.b8y],x.V)
B.duQ=w(["tail","trap","arm"],x.s)
B.duY=w([!0,!0,!0,!0],x.u)
B.dvg=w([B.rb,B.ac4,B.ac5],x.d)
B.bur=new C.u(1,0.1843137254901961,0.30980392156862746,0.30980392156862746,D.q)
B.brS=new C.u(1,0.3568627450980392,0.4196078431372549,0.5490196078431373,D.q)
B.dvh=w([B.Y8,D.bu,B.bur,B.brS,D.bo,D.aL],x.O)
B.dvn=w([D.bF,D.bQ,D.ch,D.cf,D.w_,D.cy],x.O)
B.dvp=w([-400,400,-900,900,-1400,1400],x.n)
B.dvq=w([D.ax,D.bs,D.bg,D.d5],x.O)
B.dvB=w([y.O,"Hold the fixture up to the ceiling box. It has three short wires: black, white and green.","Join the house ground wire to the fixture ground.","Join the house white wire to the fixture white wire with a wire nut.","Join the house black wire to the fixture black wire with a wire nut.","Push the wires into the box and fasten the fixture to the ceiling.",y.f],x.s)
B.dEq=new A.i9(-70,70,28,52)
B.dEh=new A.i9(-134,-96,100,170)
B.dE7=new A.i9(96,134,100,170)
B.dvJ=w([B.dEq,B.dEh,B.dE7],x.T)
B.dvK=w([30,60,120,180,300],x.t)
B.eSc=new C.y(-210,60)
B.ezP=new C.y(210,90)
B.eSi=new C.y(-330,120)
B.eAo=new C.y(330,60)
B.eS0=new C.y(-110,330)
B.ez0=new C.y(110,330)
B.eSw=new C.y(-560,640)
B.eCF=new C.y(560,640)
B.eSo=new C.y(-420,1100)
B.eAQ=new C.y(420,1100)
B.dvT=w([B.eSc,B.ezP,B.eSi,B.eAo,B.eS0,B.ez0,B.eSw,B.eCF,B.eSo,B.eAQ],x.f)
B.c4v=new A.jU("Breaker off, then test","Before you touch any wire, switch its breaker OFF, then check with a voltage tester that the wire is dead. A switch on the wall is not enough.")
B.c4i=new A.jU("Lock out, tag out","On a real job you put a lock or a note on the panel so nobody switches the power back on while you work.")
B.c4C=new A.jU("Water and power","Water carries electricity. Near sinks, tubs and outdoors the outlets must be GFCI, and wet hands never touch wires.")
B.c4n=new A.jU("Eyes, ears, lungs","Safety glasses for drilling and cutting, ear protection for loud tools, and a mask when you sand drywall dust or cut tile.")
B.c4B=new A.jU("Shut the water off","Before you cut or loosen a pipe, close the main water valve and open a faucet to drain the line.")
B.dol=w([B.c4v,B.c4i,B.c4C,B.c4n,B.c4B],x.Z)
B.c4O=new A.No("Safety first","\ud83e\uddba",D.c0,B.dol)
B.c4D=new A.jU("Wire colours","Black is hot (it carries the power), white is neutral (the way back), bare copper or green is ground (the safety path). Red is a second hot, often used for a switched line.")
B.c4K=new A.jU("Screw colours","On an outlet the brass screw takes the hot wire, the silver screw takes the neutral and the green screw takes the ground.")
B.c4x=new A.jU("Wire size","14 gauge wire is for 15 amp circuits (lights and outlets). 12 gauge is for 20 amp circuits (kitchens). A thinner wire than the breaker allows can overheat and start a fire.")
B.c4r=new A.jU("Breakers","A breaker is a safety switch. It trips when a circuit carries too much current, so the wires never get hot enough to burn.")
B.c4F=new A.jU("Wire nuts","Strip about 3/4 inch, twist the bare ends together clockwise, and screw on the nut until no bare copper shows. Give each wire a gentle tug.")
B.c4L=new A.jU("Switches","A switch cuts the hot wire only. The neutral goes straight through to the light.")
B.c4M=new A.jU("GFCI","A GFCI outlet watches the current going out and coming back. If a little leaks (through water or a person) it cuts the power in a fraction of a second.")
B.c4k=new A.jU("Ceiling fans","A fan shakes and is heavy. It needs a box that says fan rated, fixed to the joist, not a plain light box.")
B.c4m=new A.jU("Heights","Outlets sit about 16 inches from the floor. Switches sit about 48 inches up, where your hand falls.")
B.dgn=w([B.c4D,B.c4K,B.c4x,B.c4r,B.c4F,B.c4L,B.c4M,B.c4k,B.c4m],x.Z)
B.c4R=new A.No("Wiring basics","\u26a1",D.bs,B.dgn)
B.c4j=new A.jU("Hot left, cold right","On a faucet, hot is on the left and cold on the right. Hot lines are marked red and cold lines blue.")
B.c4w=new A.jU("The P-trap","The curved pipe under a sink always holds a little water. That water seal stops sewer gas coming up the drain.")
B.c4H=new A.jU("Shut-off valves","Every sink and toilet has its own small valve, so you can stop the water to one fixture without turning off the whole house.")
B.c4p=new A.jU("Slip nuts","Drain joints are sealed by a washer and a slip nut. Tighten by hand and a quarter turn: too much force cracks plastic.")
B.c4o=new A.jU("Wax ring","A toilet sits on a wax ring that seals it to the floor drain. A toilet is lowered straight down once, and cannot be slid around.")
B.c4E=new A.jU("Drain slope","Drains fall about 1/4 inch per foot so water and waste keep moving. Too flat and it clogs, too steep and the water leaves the solids behind.")
B.c4J=new A.jU("Order of work","Plumbing goes from the top down on the drain (tailpiece, trap, arm) and from the wall out on the supply (valve, hose, fixture).")
B.cmF=w([B.c4j,B.c4w,B.c4H,B.c4p,B.c4o,B.c4E,B.c4J],x.Z)
B.c4P=new A.No("Plumbing basics","\ud83d\udeb0",D.cq,B.cmF)
B.c4l=new A.jU("Studs","Studs are the vertical 2x4 posts inside a wall, 16 inches apart from centre to centre. Everything is fixed to them.")
B.c4z=new A.jU("Drilling studs","Holes for cable go through the middle of the stud, so a nail or screw cannot reach the wire.")
B.c4q=new A.jU("Drywall","A sheet is 4 feet wide, so its edges land on studs 48 inches apart. Screws go into studs only, just under the paper.")
B.c4t=new A.jU("Taping and mud","Seams get paper tape and three thin coats of joint compound, sanded smooth between coats, then primer and paint.")
B.c4I=new A.jU("Order of a build","Frame, run the pipes and wires (rough-in), inspect, hang drywall, finish it, paint, then fit the fixtures and devices.")
B.d0G=w([B.c4l,B.c4z,B.c4q,B.c4t,B.c4I],x.Z)
B.c4N=new A.No("Framing and walls","\ud83c\udfe0",D.e0,B.d0G)
B.c4u=new A.jU("Voltage tester","A pen that glows or beeps near live wires. Test it on a known live outlet first, so you know it works.")
B.c4A=new A.jU("Wire strippers","Strip the plastic off without nicking the copper. A nick weakens the wire.")
B.c4G=new A.jU("Adjustable wrench","For nuts on valves and hoses. Hold the fitting steady with a second wrench so you do not twist the pipe.")
B.c4y=new A.jU("Drill and screw gun","A drill makes holes through studs. A screw gun sets drywall screws to the right depth.")
B.c4s=new A.jU("Level and tape measure","Measure twice, cut once. A level makes sure outlets, shelves and pipes are straight.")
B.dx1=w([B.c4u,B.c4A,B.c4G,B.c4y,B.c4s],x.Z)
B.c4Q=new A.No("Tools","\ud83e\uddf0",D.bw,B.dx1)
B.dwC=w([B.c4O,B.c4R,B.c4P,B.c4N,B.c4Q],C.as("O<No>"))
B.dwF=w([y.O,"There is no separate ground wire here: the neutral also grounds the frame of the old appliance. This is only allowed in old installations.",y.r,y.E,y.k,y.b,y.n],x.s)
B.bi7=new C.u(1,0.48627450980392156,0.22745098039215686,0.22745098039215686,D.q)
B.bq_=new C.u(1,0.24705882352941178,0.4196078431372549,0.30980392156862746,D.q)
B.boh=new C.u(1,0.4196078431372549,0.30980392156862746,0.48627450980392156,D.q)
B.bl7=new C.u(1,0.47843137254901963,0.41568627450980394,0.23137254901960785,D.q)
B.dwJ=w([B.Y8,B.bi7,B.bq_,B.boh,B.bl7],x.O)
B.dwV=w(["Cream","Sky","Blush","Mint","Butter","Periwinkle","White","Slate"],x.s)
B.hpt=new A.iQ("in1","Red \xb7 traveler in 1 (from the first 3-way)",B.vU,D.c,"hot")
B.hpz=new A.iQ("in2","White taped red \xb7 traveler in 2",B.m1,D.av,"hot")
B.afp=new C.u(1,0.6901960784313725,0.22745098039215686,0.16862745098039217,D.q)
B.hpq=new A.iQ("out1","Red \xb7 traveler out 1 (to the second 3-way)",B.afp,D.c,"hot")
B.hpD=new A.iQ("out2","White taped red \xb7 traveler out 2",D.bP,D.av,"hot")
B.dwY=w([B.rb,B.hpt,B.hpz,B.hpq,B.hpD],x.d)
B.eSI=new C.y(-760,330)
B.eDp=new C.y(760,330)
B.eSs=new C.y(-450,1080)
B.eC4=new C.y(450,1080)
B.dx0=w([B.eSI,B.eDp,B.eSs,B.eC4],x.f)
B.dx8=w([0.72,-0.72],x.n)
B.hpw=new A.iQ("isoground","Green with yellow stripe \xb7 isolated ground",B.N0,D.c,"ground")
B.dxh=w([B.EQ,B.aZS,B.hpw],x.d)
B.dxt=w([B.OF,B.anM,B.anI],x.r)
B.dxE=w(["inspect","hand","screwdriver","pliers","wrench","crimper","plunger","flapper","newoutlet","patch"],x.s)
B.hB9=new A.pK(0,0,70,26)
B.hBl=new A.pK(1,-100,110,24)
B.hBn=new A.pK(2,105,100,26)
B.dyb=w([B.hB9,B.hBl,B.hBn],x.X)
B.hkY=new A.r(-72,0,-60)
B.haJ=new A.r(72,0,-60)
B.haI=new A.r(72,0,60)
B.hkX=new A.r(-72,0,60)
B.dym=w([B.hkY,B.haJ,B.haI,B.hkX],x.o)
B.hpx=new A.iQ("lineA","Black \xb7 hot leg 1 (from the panel)",B.rA,D.c,"hot")
B.hpC=new A.iQ("lineB","Red \xb7 hot leg 2 (from the panel)",B.vU,D.c,"hot")
B.hpJ=new A.iQ("loadA","Black \xb7 hot leg 1 (to the heater)",B.ML,D.c,"hot")
B.hpv=new A.iQ("loadB","Red \xb7 hot leg 2 (to the heater)",B.afp,D.c,"hot")
B.dyy=w([B.rb,B.hpx,B.hpC,B.hpJ,B.hpv],x.d)
B.dyE=w(["Maya","Kofi","Amara","Tunde","Zawadi"],x.s)
B.eiQ={flange:0,wax:1,toilet:2,bolts:3,valve:4,hosehot:5,hosecold:6,faucet:7,tail:8,trap:9,arm:10}
B.aI0=new C.bv(B.eiQ,["Flange","Wax ring","Toilet","Bolts","Shut-off valve","Hot hose","Cold hose","Faucet","Tailpiece","P-trap","Trap arm"],x.l)
B.dB0=new C.d3([25,"ground",23,"lineA",21,"lineB",24,"loadA",22,"loadB"],x.v)
B.dB1=new C.d3([25,"ground",23,"in1",21,"in2",24,"out1",22,"out2"],x.v)
B.aI5=new C.d3([7000,"cable",7001,"drill",7010,"sheet",7011,"mud",7012,"tape",7013,"mud",7014,"screw",7015,"cut",7016,"sand",7017,"bead",7018,"paint",7019,"saw"],x.v)
B.aYb=new A.r(36,8,-40)
B.f1a=new C.b5("Roll of cable","Yellow 12 gauge cable for the outlets and white 14 gauge for the light. Tap it to pick up the cable roll, then tap a box.",B.aYb)
B.aZc=new A.r(-30,3,-38)
B.f_4=new C.b5("Cordless drill","Drills the holes in the studs for the cable. Tap it to pick it up, then tap a stud.",B.aZc)
B.hkB=new A.r(-40,5,4)
B.eZl=new C.b5("Stack of drywall","Sheets of half inch drywall, 4 by 8 feet. Tap them to pick up a sheet, then tap where it goes.",B.hkB)
B.aYf=new A.r(40,8,36)
B.f00=new C.b5("Bucket of joint compound","The mud: it fills the joints and covers the screw heads. Tap it to pick up the mud and the knife.",B.aYf)
B.aYh=new A.r(56,3,24)
B.f07=new C.b5("Paper tape","Paper tape is pressed into the first coat of mud over every joint. Tap it to pick it up.",B.aYh)
B.aZv=new A.r(26,1.5,46)
B.f_p=new C.b5("Taping knife","Spreads the mud. Tap it to pick up the mud and the knife.",B.aZv)
B.aZb=new A.r(-2,3,44)
B.eYO=new C.b5("Screw gun","Drives the drywall screws just under the paper. Tap it to pick it up, then tap a hung sheet.",B.aZb)
B.aZ2=new A.r(8,1.5,-34)
B.eZB=new C.b5("T-square and knife","A straight edge to score a sheet against before it is snapped. Tap it to pick up the cutter.",B.aZ2)
B.aZf=new A.r(14,1.5,-46)
B.eZx=new C.b5("Sanding pole","Sands the dry mud smooth. Tap it to pick up the sander.",B.aZf)
B.aYZ=new A.r(60,1.5,-8)
B.eYP=new C.b5("Corner bead","Metal angle for the corners of the door and the window. Tap it to pick it up.",B.aYZ)
B.aZe=new A.r(-8,2,-22)
B.eYt=new C.b5("Paint tray and roller","Primer on the roller seals the paper and the mud so they look the same. Tap it to pick up the roller.",B.aZe)
B.h75=new A.r(20,1,12)
B.f0T=new C.b5("Drywall saw","A pointed saw to cut the holes for the boxes, the door and the window. Tap it to pick it up.",B.h75)
B.DD=new C.d3([7000,B.f1a,7001,B.f_4,7010,B.eZl,7011,B.f00,7012,B.f07,7013,B.f_p,7014,B.eYO,7015,B.eZB,7016,B.eZx,7017,B.eYP,7018,B.eYt,7019,B.f0T],C.as("d3<F,+(m,m,r)>"))
B.eij={xbot:0,michelle:1,soldier:2}
B.ST=new C.bv(B.eij,["assets/avatars/Xbot.glb","assets/avatars/Michelle.glb","assets/avatars/Soldier.glb"],x.l)
B.ehn={highway:0,tower:1,neon:2,roof:3,screen:4,gate:5}
B.aQz=new C.y(0,!1)
B.ezx=new C.y(1,!1)
B.eAE=new C.y(3,!1)
B.eAa=new C.y(2,!0)
B.ezz=new C.y(1,!0)
B.eAF=new C.y(3,!0)
B.dBc=new C.bv(B.ehn,[B.aQz,B.ezx,B.eAE,B.eAa,B.ezz,B.eAF],C.as("bv<m,+(F,P)>"))
B.a6C=new C.d3([25,"ground",23,"neutral",21,"hot1",22,"hot2"],x.v)
B.dBh=new C.d3([25,"ground",23,"common",21,"trav1",22,"trav2"],x.v)
B.dBi=new C.d3([25,"ground",23,"neutral",21,"line",22,"load"],x.v)
B.dBj=new C.d3([25,"ground",23,"neutral",21,"switched",22,"always"],x.v)
B.dBo=new C.d3([25,"ground",21,"neutral",23,"hot1",22,"hot2"],x.v)
B.dBx=new C.d3([25,"ground",21,"hot1",22,"hot2"],x.v)
B.dBO=new C.d3([21,"neutral",23,"hot1",22,"hot2"],x.v)
B.eif={bed:0,nightstand:1,wardrobe:2,desk:3,rug:4,sofa:5,armchair:6,coffee:7,tvstand:8,dining:9,chair:10,plant:11,lamp:12,console:13,shelf:14,tree:15,pine:16,bush:17,flowers:18,fence:19,lamppost:20,bench:21,car:22,road:23,roundabout:24,roadturn:25,roadtee:26,roadcross:27,house2:28,bighouse:29,pole:30,crate:31,billboard:32,tower:33,hq:34,store:35,gasstation:36,dmv:37,ubstation:38,townsign:39,cornersign:40,adboard:41,shop:42,hospital:43,firestation:44,school:45,firetruck:46,ambulance:47,dog:48,cat:49,cow:50,sheep:51,chicken:52,horse:53,pond:54,swing:55,shed:56,doghouse:57}
B.bLb=new A.fo("Bed","\ud83d\udecf\ufe0f",48,64)
B.bLn=new A.fo("Night table","\ud83e\ude91",13,13)
B.bKV=new A.fo("Wardrobe","\ud83d\udeaa",35,16)
B.bL6=new A.fo("Desk","\ud83d\udda5\ufe0f",38,19)
B.bKW=new A.fo("Rug","\ud83d\udfe5",56,40)
B.bKR=new A.fo("Sofa","\ud83d\udecb\ufe0f",64,26)
B.bLf=new A.fo("Armchair","\ud83d\udcba",24,24)
B.bLu=new A.fo("Coffee table","\u2615",32,19)
B.bKT=new A.fo("Media cabinet","\ud83d\uddc4\ufe0f",45,14)
B.bLs=new A.fo("Dining table","\ud83c\udf7d\ufe0f",45,29)
B.bLm=new A.fo("Chair","\ud83e\ude91",14,14)
B.bLt=new A.fo("Plant","\ud83e\udeb4",14,14)
B.bLo=new A.fo("Floor lamp","\ud83d\udca1",10,10)
B.bLc=new A.fo("Console table","\ud83d\uddc4\ufe0f",35,11)
B.bLl=new A.fo("Bookshelf","\ud83d\udcda",29,10)
B.bLy=new A.fo("Tree","\ud83c\udf33",36,36)
B.bL9=new A.fo("Pine tree","\ud83c\udf32",30,30)
B.bKQ=new A.fo("Bush","\ud83c\udf3f",18,18)
B.bLi=new A.fo("Flowers","\ud83c\udf37",22,22)
B.bKJ=new A.fo("Fence","\ud83d\udea7",64,6)
B.bKX=new A.fo("Street lamp","\ud83c\udfee",8,8)
B.bLe=new A.fo("Bench","\ud83e\ude91",44,16)
B.bKK=new A.fo("Car","\ud83d\ude97",84,40)
B.bL5=new A.fo("Road","\ud83d\udee3\ufe0f",40,40)
B.bLz=new A.fo("Roundabout","\ud83d\udd04",80,80)
B.bKP=new A.fo("Road corner","\u21aa\ufe0f",40,40)
B.bLB=new A.fo("Road T-junction","\u22a4",40,40)
B.bL7=new A.fo("Crossroads","\u271a",40,40)
B.bKS=new A.fo("House","\ud83c\udfe0",108,90)
B.bLa=new A.fo("Big house","\ud83c\udfe2",158,120)
B.bKL=new A.fo("Electric pole","\ud83d\udd0c",10,10)
B.bL4=new A.fo("Crate","\ud83d\udce6",28,28)
B.bLx=new A.fo("Billboard","\ud83e\udea7",72,10)
B.bKO=new A.fo("Office tower","\ud83c\udfe2",100,70)
B.bL_=new A.fo("NGMY company","\ud83c\udfdb\ufe0f",170,90)
B.bKZ=new A.fo("NGMY store","\ud83c\udfec",130,80)
B.bLA=new A.fo("NGMY gas station","\u26fd",150,90)
B.bLk=new A.fo("NGMY licence office","\ud83e\udeaa",130,80)
B.bL1=new A.fo("NGMY Uber","\ud83d\ude96",120,60)
B.bKM=new A.fo("NGMY Town sign","\ud83e\udea7",380,14)
B.bLg=new A.fo("NGMY Town billboard","\ud83e\udea7",150,10)
B.bL3=new A.fo("NGMY ad billboard","\ud83d\udcfa",330,14)
B.bL8=new A.fo("Shop","\ud83c\udfea",126,90)
B.bL0=new A.fo("Hospital","\ud83c\udfe5",165,105)
B.bKI=new A.fo("Fire station","\ud83d\ude92",135,96)
B.bLj=new A.fo("School","\ud83c\udfeb",186,105)
B.bLr=new A.fo("Fire truck","\ud83d\ude92",96,40)
B.bLd=new A.fo("Ambulance","\ud83d\ude91",84,40)
B.bKY=new A.fo("Dog","\ud83d\udc15",22,10)
B.bL2=new A.fo("Cat","\ud83d\udc08",16,8)
B.bLp=new A.fo("Cow","\ud83d\udc04",38,16)
B.bKU=new A.fo("Sheep","\ud83d\udc11",26,14)
B.bLq=new A.fo("Chicken","\ud83d\udc14",12,8)
B.bKN=new A.fo("Horse","\ud83d\udc0e",46,16)
B.bLv=new A.fo("Pond","\ud83d\udca7",80,56)
B.bLh=new A.fo("Swing set","\ud83c\udfa0",56,40)
B.bLw=new A.fo("Shed","\ud83d\uded6",50,42)
B.bLC=new A.fo("Dog house","\ud83d\udc15",24,22)
B.hJ=new C.bv(B.eif,[B.bLb,B.bLn,B.bKV,B.bL6,B.bKW,B.bKR,B.bLf,B.bLu,B.bKT,B.bLs,B.bLm,B.bLt,B.bLo,B.bLc,B.bLl,B.bLy,B.bL9,B.bKQ,B.bLi,B.bKJ,B.bKX,B.bLe,B.bKK,B.bL5,B.bLz,B.bKP,B.bLB,B.bL7,B.bKS,B.bLa,B.bKL,B.bL4,B.bLx,B.bKO,B.bL_,B.bKZ,B.bLA,B.bLk,B.bL1,B.bKM,B.bLg,B.bL3,B.bL8,B.bL0,B.bKI,B.bLj,B.bLr,B.bLd,B.bKY,B.bL2,B.bLp,B.bKU,B.bLq,B.bKN,B.bLv,B.bLh,B.bLw,B.bLC],C.as("bv<m,fo>"))
B.ehF={look:0,sheet:1,cut:2,screw:3,saw:4,bead:5,mud:6,tape:7,sand:8,paint:9}
B.aIg=new C.bv(B.ehF,["Look: tap a sheet, a hole or a surface to learn about it. The tools and the stack of sheets are on the floor.","Drywall sheet: tap a green place. The ceiling goes first. The narrow pieces need cutting first.","Cutter: tap an orange place to cut the sheet to size (score with the knife against the T-square, then snap).","Screw gun: tap a yellow sheet to screw it to every stud or joist.","Saw: tap a red mark to cut the hole for a box, the door or the window.","Corner bead: tap a door or window once its opening is cut, to protect the corner.","Mud: tap a blue surface for a coat. First the bed coat, then the tape, then two more coats. Wait for each to dry.","Tape: right after the first coat, tap the surface to press paper tape into the wet mud.","Sander: when the third coat is dry, tap the surface to sand it smooth.","Roller: when it is sanded, tap the surface to prime it."],x.l)
B.dCp=new C.d3([25,"ground",23,"neutral",21,"hot"],x.v)
B.dCq=new C.d3([25,"isoground",23,"neutral",21,"hot"],x.v)
B.ehx={outlet:0,switch:1,light:2,fan:3,gfci:4}
B.dbz=w(["Silver","Brass","Green"],x.s)
B.fku=new A.vo("On a standard receptacle, which terminal does the hot wire go on?",B.dbz,1,"Brass is the hot side. Silver is neutral and green is the ground.")
B.cMU=w(["Yes, it works","No: reversed polarity leaves live parts that should be dead","Yes if there is a ground"],x.s)
B.fks=new A.vo("The outlet works with hot and neutral swapped. Is it safe?",B.cMU,1,"Working is not the same as safe. Reversed polarity energizes the wrong parts.")
B.d56=w(["Yes","No, never","Only in old houses"],x.s)
B.fko=new A.vo("May the neutral be used as the equipment ground?",B.d56,1,"The ground is a separate safety path. The neutral carries current in normal use.")
B.dgY=w([B.fku,B.fks,B.fko],x.J)
B.c9i=w(["The hot to the light","The neutral","The ground"],x.s)
B.fkv=new A.vo("A single-pole switch opens and closes which conductor?",B.c9i,0,"The switch breaks the hot conductor to the load.")
B.d2F=w(["Yes","No, never","If the wire is thick"],x.s)
B.fkw=new A.vo("May the ground wire be used to carry current to the light?",B.d2F,1,"The equipment ground is only for safety.")
B.daw=w(["Yes","No: never assume it does","Only new houses"],x.s)
B.fkp=new A.vo("Does every switch box have a neutral?",B.daw,1,"Many switch boxes have no neutral. Smart switches need to be chosen for that.")
B.dwG=w([B.fkv,B.fkw,B.fkp],x.J)
B.do8=w(["Yes","No: the wires, the ground and the support must be right","Only with a switch"],x.s)
B.fkt=new A.vo("Does a light that turns on prove the fixture is wired safely?",B.do8,1,"A fixture can light up with an unsafe connection.")
B.dna=w(["Its wires","A box or mount rated for its weight","Tape"],x.s)
B.fkx=new A.vo("A fixture must hang from:",B.dna,1,"The box carries the weight. The wires never do.")
B.daW=w([B.fkt,B.fkx],x.J)
B.dc_=w(["Any ceiling box","Rated for a fan","Plastic only"],x.s)
B.fkr=new A.vo("A ceiling fan needs a box that is:",B.dc_,1,"A fan shakes and is heavy. A plain light box can let it fall.")
B.drf=w(["Yes","No: support, ground and wiring must all be right","Yes if it is quiet"],x.s)
B.fkq=new A.vo("The fan spins. Is the installation safe?",B.drf,1,"A spinning fan says nothing about the box, the ground or the connections.")
B.dbe=w([B.fkr,B.fkq],x.J)
B.d6P=w(["LINE","LOAD","Either"],x.s)
B.fkn=new A.vo("On a GFCI, power from the breaker goes on:",B.d6P,0,"LINE is the supply. LOAD feeds outlets further down the line.")
B.cRD=w([B.fkn],x.J)
B.aIh=new C.bv(B.ehx,[B.dgY,B.dwG,B.daW,B.dbe,B.cRD],C.as("bv<m,ai<vo>>"))
B.eie={house2:0,bighouse:1,shop:2,billboard:3,crate:4,car:5,tree:6,bench:7,tower:8,hq:9,store:10,gasstation:11,cornersign:12}
B.dCt=new C.bv(B.eie,[40,80,70,15,4,25,5,4,120,200,90,90,30],C.as("bv<m,F>"))
B.bJW=new A.uK("The living room has no power at all.","The living room breaker is sitting in the middle (orange). It has tripped. Flip it fully OFF and ON again, by hand.","hand","Breaker reset. The living room has power again.",72,0,"")
B.bK5=new A.uK("There is no hot water.","The water heater breaker has tripped (orange). Reset it by hand.","hand","Breaker reset. The water heater is heating again.",75,0,"")
B.bK2=new A.uK("Water is dripping under the kitchen sink.","The slip nut on the P-trap is loose and the joint drips. Tighten it with the wrench.","wrench","Slip nut tightened. The drip stopped.",87,0,"")
B.bJV=new A.uK("There is a wet spot on the wall behind the kitchen.","A crimped joint in the hot water line is leaking. A crimp joint is squeezed with a crimping tool, not tightened with a wrench.","crimper","The joint is crimped again and it does not leak.",96,0,"")
B.bK_=new A.uK("The outlet by the sofa does not work, but the lights do.","The tester finds power at the box but the outlet is dead: a screw on the outlet has come loose. Turn the breaker off first, then tighten the screws with the screwdriver.","screwdriver","You tightened the loose screw. The outlet works again.",81,72,"Turn the living room breaker OFF first.")
B.bJX=new A.uK("The living room light flickers.","A wire nut in the light box has worked loose. Turn the breaker off, then twist the wire nut tight with the pliers.","pliers","You twisted the wire nut tight. The light is steady.",83,72,"Turn the living room breaker OFF first.")
B.bJY=new A.uK("The kitchen outlet sparks and smells burnt.","The outlet has burnt. Turn the breaker off and replace it with a new outlet.","newoutlet","New outlet fitted. No more sparks.",84,73,"Turn the kitchen breaker OFF first.")
B.bK3=new A.uK("The kitchen outlets are dead.","The GFCI outlet has tripped. Press its RESET button by hand.","hand","You pressed RESET. The kitchen outlets work.",84,0,"")
B.bJZ=new A.uK("The toilet keeps running.","The rubber flapper in the tank no longer seals, so water leaks into the bowl all the time. Replace the flapper.","flapper","New flapper fitted. The toilet stops running.",88,0,"")
B.bK1=new A.uK("The kitchen faucet drips.","The faucet washer is worn. Tighten the packing nut with the wrench, then check.","wrench","The faucet is sealed. No more drips.",85,0,"")
B.bK0=new A.uK("There is a hole in the wall.","A hole in the drywall. Stick a drywall patch over it, then tape, mud, sand and paint it.","patch","Patch fitted. Now it only needs mud, sanding and paint.",95,0,"")
B.bK4=new A.uK("The kitchen sink drains very slowly.","The drain is clogged. Use the plunger.","plunger","The clog is gone. The sink drains fast.",94,0,"")
B.wU=new C.d3([B.a1a,B.bJW,B.a1b,B.bK5,B.Ov,B.bK2,B.Ow,B.bJV,B.ans,B.bK_,B.a1e,B.bJX,B.a1f,B.bJY,B.a1g,B.bK3,B.a1h,B.bJZ,B.a1i,B.bK1,B.a1c,B.bK0,B.a1d,B.bK4],C.as("d3<rt,uK>"))
B.ejQ={duo:0,line3:1,far3:2,skyline:3,lines6:4}
B.eIE=new C.y(D.a3K,0)
B.eWg=new C.y(A7.asZ,1)
B.ctT=w([2,0,1],x.t)
B.eDr=new C.y(B.ctT,2)
B.c9m=w([0,1,2,3],x.t)
B.eVf=new C.y(B.c9m,0)
B.dpe=w([0,1,2,5,4,3],x.t)
B.eLN=new C.y(B.dpe,1)
B.dCJ=new C.bv(B.ejQ,[B.eIE,B.eWg,B.eDr,B.eVf,B.eLN],C.as("bv<m,+(ai<F>,F)>"))
B.ejh={michelle:0}
B.dCK=new C.bv(B.ejh,[0.55],x.gW)
B.SY=new C.bv(D.hX,[],C.as("bv<F,cH>"))
B.IS=new C.bv(D.hX,[],C.as("bv<F,m>"))
B.a6J=new C.d3([23,"neutral",21,"hot1",22,"hot2"],x.v)
B.dD_=new C.d3([25,"ground",21,"feed",22,"loadA",24,"loadB"],x.v)
B.eiO={tail:0,trap:1,arm:2}
B.dD1=new C.bv(B.eiO,["Tailpiece","P-trap","Trap arm"],x.l)
B.aKP={xbot:0,michelle:1,soldier:2,human:3}
B.aIv=new C.bv(B.aKP,["\ud83e\udd16 X Bot","\ud83d\udc83 Dancer","\ud83e\ude96 Soldier","\ud83d\ude42 Person"],x.l)
B.afY=new C.u(1,0.9137254901960784,0.9215686274509803,0.9372549019607843,D.q)
B.bnA=new C.u(1,0.8549019607843137,0.8666666666666667,0.8901960784313725,D.q)
B.U2=new A.tW(B.afY,E.XZ,B.afY,B.bnA,"xbot",!1,0,1)
B.bpA=new C.u(1,0.0784313725490196,0.047058823529411764,0.03137254901960784,D.q)
B.bfH=new C.u(1,0.9607843137254902,0.7725490196078432,0.09411764705882353,D.q)
B.eut=new A.tW(B.ajA,B.bpA,D.dq,B.bfH,"michelle",!0,2,1)
B.buy=new C.u(1,0.8509803921568627,0.6470588235294118,0.48627450980392156,D.q)
B.btt=new C.u(1,0.3568627450980392,0.4196078431372549,0.22745098039215686,D.q)
B.bi8=new C.u(1,0.5411764705882353,0.4823529411764706,0.3333333333333333,D.q)
B.JC=new A.tW(B.buy,D.MN,B.btt,B.bi8,"soldier",!1,0,1.04)
B.a8z=new A.tW(B.aft,B.ME,B.ajK,B.M0,"human",!1,0,1)
B.aIw=new C.bv(B.aKP,[B.U2,B.eut,B.JC,B.a8z],C.as("bv<m,tW>"))
B.ejA={soldier:0}
B.dDk=new C.bv(B.ejA,[3.141592653589793],x.gW)
B.hiU=new A.r(0,0,-1.2)
B.egk=new A.cH("Electrical box","The box is ready. Pull a cable to it, then wire a device.",B.hiU,9)
B.dDn=new C.d3([3,B.egk],C.as("d3<F,cH>"))
B.aKI={inspect:0,hand:1,screwdriver:2,pliers:3,wrench:4,crimper:5,plunger:6,flapper:7,newoutlet:8,patch:9}
B.T_=new C.bv(B.aKI,["Look and test","Hand","Screwdriver","Pliers","Wrench","Crimp tool","Plunger","New flapper","New outlet","Drywall patch"],x.l)
B.bP7=new C.a0(63072,"MaterialIcons",!1)
B.dDr=new C.bv(B.aKI,[D.eW,B.aqg,A1.CL,D.CD,D.or,B.bP7,Ae.a2X,D.pu,B.CR,S.rS],C.as("bv<m,a0>"))
B.ehq={washerM:0,dryerM:1,rangeM:2}
B.ejK={washer:0}
B.f9S=new C.df(B.ejK,1,x.M)
B.eiJ={dryer4:0,dryer3:1}
B.f9C=new C.df(B.eiJ,2,x.M)
B.eju={range4:0,range3:1}
B.fad=new C.df(B.eju,2,x.M)
B.aIC=new C.bv(B.ehq,[B.f9S,B.f9C,B.fad],C.as("bv<m,dZ<m>>"))
B.dE_=new A.i9(18,50,0,20)
B.dEc=new A.i9(-126,126,-66,5)
B.dEj=new A.i9(-4,16,0,24)
B.dGP=new A.ap7(null)
B.aJs=new A.a7w(null)
B.dNC=new A.aqu(null)
B.dND=new A.aqw(null)
B.dQW=new A.Ji(!1,"city","",null)
B.aJC=new A.Ji(!1,"","",null)
B.ebL=new A.OE(!0,!0,null,!0,null)
B.eg1=new A.atx(null)
B.hmy=new A.r(16,2.6,0)
B.eg2=new A.cH("Wall drain","The pipe stub that comes out of the wall. The trap arm slides into it.",B.hmy,8)
B.h4o=new A.r(0,3,-6)
B.eg3=new A.cH("Wall","The copper supply pipes come out of the wall here.",B.h4o,24)
B.hi8=new A.r(8.2,1,-7)
B.eg4=new A.cH("Toilet","The tank fills from the cold supply on the wall. The bowl drains into the white pipe in the floor.",B.hi8,7)
B.h2X=new A.r(0,0,40)
B.eg5=new A.cH("The room","A room to build from bare studs to finished, working electrics. The walls hold the cable, the boxes and the devices.",B.h2X,190)
B.heu=new A.r(-2.4,11.5,-3.6)
B.eg6=new A.cH("Hot faucet inlet","The threaded tail under the faucet where the hot supply hose screws on.",B.heu,7)
B.h7V=new A.r(-3.6,4,-7.8)
B.eg7=new A.cH("Light switch","Controls the ceiling light. Tap Open lesson to wire one.",B.h7V,4.5)
B.haT=new A.r(0,-0.7,4.8)
B.eg8=new A.cH("Ground strap","A metal strap from the middle (neutral) terminal to the frame of the appliance. On a 3-wire cord it stays: the neutral also grounds the frame. On a 4-wire cord you take it off, because the green wire grounds the frame.",B.haT,7)
B.hgm=new A.r(0,0.5,2)
B.eg9=new A.cH("Voltage tester","A tester that glows when it touches live power.",B.hgm,6)
B.ega=new A.cH("Pipe joint","A crimped joint in the hot water line.",B.aYI,4)
B.heZ=new A.r(0,-0.2,0.2)
B.egb=new A.cH("Cover plate","The plate covers the box and the edges of the drywall so nobody touches the wires.",B.heZ,8)
B.hll=new A.r(-4.6,0.5,-3.4)
B.egc=new A.cH("Hot shut-off valve","The angle stop valve on the hot pipe. Turn the handle to stop the water to the faucet without shutting off the whole house. Hot is always on the left.",B.hll,8)
B.W8=new A.r(0,-0.3,3.2)
B.egd=new A.cH("White wire nut: NEUTRAL","Twist the house white wire and the fixture white wire together under this cap.",B.W8,6)
B.hg5=new A.r(4.6,0.5,-3.4)
B.ege=new A.cH("Cold shut-off valve","The angle stop valve on the cold pipe. Cold is always on the right.",B.hg5,8)
B.h6U=new A.r(2.4,11.5,-3.6)
B.egf=new A.cH("Cold faucet inlet","The threaded tail under the faucet where the cold supply hose screws on.",B.h6U,7)
B.hnQ=new A.r(0.8,-0.8,1.2)
B.egg=new A.cH("Black wire to the light","This black wire carries power to the light once the switch is on. It goes on the other brass screw.",B.hnQ,7)
B.heo=new A.r(10.05,5.2,-7.5)
B.egh=new A.cH("Water heater breaker","A big circuit for the water heater. It is ON.",B.heo,3.5)
B.EN=new A.r(0,40,0)
B.egi=new A.cH("Back wall",y.o,B.EN,140)
B.hhZ=new A.r(3,3.8,-7.4)
B.egj=new A.cH("Kitchen faucet","Hot on the left, cold on the right. Tap Open lesson to connect the supply hoses.",B.hhZ,4.5)
B.AS=new A.r(0,6,0)
B.egl=new A.cH("Tailpiece","The straight pipe that hangs from the sink drain. Its bottom end is smooth so the slip nut can slide on and grip it.",B.AS,10)
B.hkO=new A.r(-60,40,50)
B.egm=new A.cH("Left wall",y.o,B.hkO,140)
B.h8G=new A.r(3,1,0)
B.egn=new A.cH("P-trap","The U-shaped bend. It always keeps a little water inside, and that water plug blocks sewer gas from coming back up into the house.",B.h8G,11)
B.h3L=new A.r(0,20,5)
B.ego=new A.cH("The room","A bare room with the water supply stubs and the drain stub already in the wall and floor.",B.h3L,120)
B.h5a=new A.r(0,-8,0)
B.egp=new A.cH("Cabinet","The cabinet under the sink where the drain is built.",B.h5a,22)
B.h2V=new A.r(0,0,150)
B.egq=new A.cH("Lawn","The grass. Walls, floors and the sky stay as they are, but you can add things to the garden with the Furniture button.",B.h2V,400)
B.h4F=new A.r(0,4,-8)
B.egr=new A.cH("Wall framing","2x4 studs 16 inches apart. Pipes and cables run through holes drilled in the middle of the studs, never along the edge where a nail could hit them.",B.h4F,18)
B.aZ_=new A.r(0,-0.2,5.1)
B.egs=new A.cH("TEST and RESET buttons","Press TEST to make the GFCI trip. Press RESET to turn it back on. Test it once a month.",B.aZ_,5)
B.aXp=new A.r(0,11,0)
B.egt=new A.cH("Sink","The sink bowl and the counter. The drain flange at the bottom is where the tailpiece starts.",B.aXp,16)
B.dZ=new A.r(0,0,0)
B.egu=new A.cH("Drywall","The wall surface. A hole is cut in it for the electrical box.",B.dZ,22)
B.hab=new A.r(60,40,50)
B.egv=new A.cH("Right wall",y.o,B.hab,140)
B.h3r=new A.r(0,14,-3)
B.egw=new A.cH("Counter and sink","The faucet is mounted through a hole in the counter.",B.h3r,20)
B.hcL=new A.r(0,-1.9,5)
B.egx=new A.cH("GREEN screw: GROUND",y.Z,B.hcL,5)
B.h4C=new A.r(0,47,-2)
B.egy=new A.cH("Top and bottom plate","The horizontal 2x4s at the top and the bottom of the wall. The studs stand between them.",B.h4C,70)
B.hbD=new A.r(8,85,58)
B.egz=new A.cH("Door header","A thick beam over the door that carries the weight of the wall above it.",B.hbD,70)
B.h31=new A.r(0,0,-8)
B.egA=new A.cH("Wall","Behind the wall the drain pipe goes down to the sewer line.",B.h31,22)
B.h3F=new A.r(0,19,-3)
B.egB=new A.cH("Faucet","The faucet with hot on the left (red) and cold on the right (blue).",B.h3F,14)
B.haW=new A.r(3.5,2,-7.2)
B.egC=new A.cH("Kitchen counter and cabinet","The cabinet under the sink is where the drain and the shut-off valves live.",B.haW,9)
B.hdk=new A.r(10.05,5.7,-7.5)
B.egD=new A.cH("Kitchen breaker","Protects the kitchen outlets. It is ON.",B.hdk,3.5)
B.heF=new A.r(4,6,-2.5)
B.egE=new A.cH("Cold supply hose","A braided steel hose with a rubber liner and a blue band.",B.heF,9)
B.haC=new A.r(70,37,-2)
B.egF=new A.cH("Window sill","The board the window sits on. The short studs under it hold it up.",B.haC,70)
B.hgf=new A.r(-1,0.6,4.3)
B.egG=new A.cH("SILVER screw: NEUTRAL side",y.B,B.hgf,5)
B.abT=new A.r(0,3.7,0)
B.egH=new A.cH("Slip nut","A big plastic nut. Slide it on the pipe first, then the washer, then join the pieces and hand tighten. A rubber washer inside makes the seal.",B.abT,7)
B.W7=new A.r(0,-1,-0.6)
B.egI=new A.cH("Wire nut","A twist-on cap that joins wires safely. The two white wires are joined here because a switch only cuts the hot wire.",B.W7,5)
B.heP=new A.r(-1.5,-0.3,3.2)
B.egJ=new A.cH("Black wire nut: HOT","Twist the house black wire and the fixture black wire together under this cap.",B.heP,6)
B.hdj=new A.r(-1.9,0,-2)
B.egK=new A.cH("Wood stud","The 2x4 frame inside the wall. The electrical box is nailed or screwed to a stud so it cannot move.",B.hdj,16)
B.hiS=new A.r(-1,-0.8,4.3)
B.egL=new A.cH("SILVER screw: NEUTRAL side",y.B,B.hiS,5)
B.hn0=new A.r(6,3,-7.8)
B.egM=new A.cH("Water and drain pipes","Red is hot water, blue is cold water (PEX tubing). The white pipes are drains. They slope down so the waste flows away.",B.hn0,14)
B.hiZ=new A.r(1,0.6,4.3)
B.egN=new A.cH("BRASS screw: HOT side",y.C,B.hiZ,5)
B.hjC=new A.r(0,-0.2,4.9)
B.egO=new A.cH("Mounting strap (yoke)","The metal strap with two screw slots. Long screws through the ears hold the device in the box.",B.hjC,7)
B.hnM=new A.r(9.55,4.7,-7.5)
B.egP=new A.cH("Spare breaker","A spare circuit.",B.hnM,3.5)
B.h3M=new A.r(0,20,8)
B.egQ=new A.cH("Vanity and counter","The cabinet that holds the sink. The pipes live inside it.",B.h3M,70)
B.hm8=new A.r(-3.2,1.3,-7.8)
B.egR=new A.cH("Living room outlet","A standard outlet. Tap Open lesson to wire one in 3D.",B.hm8,4.5)
B.hjF=new A.r(1.5,-0.3,3.2)
B.egS=new A.cH("Green ground connection","Join the bare copper house ground wire to the green fixture ground wire.",B.hjF,6)
B.aYC=new A.r(12,2.6,0)
B.egT=new A.cH("Trap arm","The pipe that carries the waste water from the trap into the wall. It must slope down toward the wall, about 1/4 inch per foot.",B.aYC,9)
B.hfL=new A.r(0,6.5,-7.8)
B.egU=new A.cH("Electrical cables","Cables run from the breaker panel to every outlet, switch and light. Yellow is 12 gauge for 20 amps. White is 14 gauge for 15 amps.",B.hfL,16)
B.hgC=new A.r(11.2,2.3,-6)
B.egV=new A.cH("Water heater","Heats the water. The cold line goes in at the top and the hot line comes out at the top.",B.hgC,9)
B.hht=new A.r(9.55,5.2,-7.5)
B.egW=new A.cH("Bathroom breaker","Protects the bathroom. It is ON.",B.hht,3.5)
B.hkE=new A.r(-48,59,-58)
B.egX=new A.cH("Breaker panel","Every cable in the house starts here, one breaker for each circuit. Tap it with the Cable roll to start a cable from here.",B.hkE,50)
B.hds=new A.r(5.2,3.9,-7.8)
B.egY=new A.cH("Kitchen GFCI outlet","Outlets near water must be GFCI. Tap Open lesson to wire one.",B.hds,4.5)
B.h4y=new A.r(0,40,-3)
B.egZ=new A.cH("Electrical cable","Yellow 12/2 cable with ground: it carries power from the breaker panel through the holes in the studs to each box.",B.h4y,80)
B.hel=new A.r(-8.4,1.2,-6.4)
B.eh_=new A.cH("Sofa","Just furniture, to show the size of the room.",B.hel,10)
B.eh0=new A.cH("Outlet face","Two outlets. The short slot is hot, the long slot is neutral, and the round hole is ground.",B.aZ_,6)
B.hcp=new A.r(0,4,-7.8)
B.eh1=new A.cH("Wall","The drywall of the back wall.",B.hcp,16)
B.hmd=new A.r(0,0,0.6)
B.eh2=new A.cH("Canopy","The round cover that hides the box and the wire connections against the ceiling.",B.hmd,8)
B.haE=new A.r(70,76,-2)
B.eh3=new A.cH("Window header","A thick beam over the window, held up by the jack studs.",B.haE,70)
B.eh4=new A.cH("Concrete slab","The foundation. It carries the whole weight of the house. Plumbing drains are placed before it is poured.",B.dZ,30)
B.h4r=new A.r(0,40,12)
B.eh5=new A.cH("Front door","Tap the door to go inside the house.",B.h4r,260)
B.abV=new A.r(8.9,2.6,0)
B.eh6=new A.cH("Slip nut","Hand tighten it, then about a quarter turn with pliers. Over-tightening cracks the plastic.",B.abV,7)
B.hhq=new A.r(1,-0.8,4.3)
B.eh7=new A.cH("BRASS screw: HOT side",y.C,B.hhq,5)
B.hc6=new A.r(0.6,1.5,-1.8)
B.eh8=new A.cH("Cable to the light (LOAD)","This cable carries the switched power on to the light. The black wire here only has power when the switch is on.",B.hc6,8)
B.hcF=new A.r(9.8,5,-7.5)
B.eh9=new A.cH("Breaker panel","The main electrical panel. Each breaker protects one circuit. A breaker that is in the middle position has TRIPPED. Flip it fully OFF and then ON to reset.",B.hcF,6)
B.heL=new A.r(-4,6,-2.5)
B.eha=new A.cH("Hot supply hose","A braided steel hose with a rubber liner and a red band. Hand tighten the nuts, then a quarter turn with a wrench.",B.heL,9)
B.emb=new C.q(66,66)
B.bW4=new C.ae(D.e9,20,F.f0,null,null,null)
B.epN=new C.D(D.uu,B.bW4,null)
B.fB9=new C.G(!0,D.mG,null,null,null,null,12.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fHQ=new C.B("A circuit that is not CORRECT and safe can never pass, even if the light or fan would have worked.",null,B.fB9,null,null,null,null,null,null,null,null,null)
B.epZ=new C.D(D.i9,B.fHQ,null)
B.fRT=new C.B("Sick people can stay in a hospital bed. Treat each patient before their care runs out, and they go home better.",null,D.VA,null,D.K,null,null,null,null,null,null,null)
B.eq4=new C.D(D.amG,B.fRT,null)
B.bA5=new C.Q(0,26,0,26)
B.frP=new C.G(!0,D.aD,null,null,null,null,13.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.ho7=new C.bQ("lessons-none",x.W)
B.fDa=new C.B("No lesson found. Try another word.",null,B.frP,null,null,null,null,null,null,null,null,B.ho7)
B.bbB=new C.cc(D.A,null,null,B.fDa,null)
B.eqb=new C.D(B.bA5,B.bbB,null)
B.bVf=new C.ae(D.e9,18,D.b9,null,null,null)
B.eqm=new C.D(D.fz,B.bVf,null)
B.eqo=new C.D(D.fz,H.arR,null)
B.eqG=new C.D(D.uu,H.PR,null)
B.eum=new A.yh(0,0,18,0,!1,!1,!1,!1,!1,0,!1,!1,"","",-1,0,-1,0)
B.eun=new A.yh(0,100,120,-2.2,!1,!1,!1,!1,!1,0,!1,!1,"","",-1,0,-1,0)
B.euo=new A.yh(0,40,150,0.5,!1,!1,!1,!1,!1,0,!1,!1,"","",-1,0,-1,0)
B.eup=new A.yh(0,0,0,0,!1,!1,!1,!1,!1,0,!1,!1,"","",-1,0,-1,0)
B.euq=new A.yh(0,-80,50,0,!1,!1,!1,!1,!1,0,!1,!1,"","",-1,0,-1,0)
B.eur=new A.yh(0,0,56,0,!1,!1,!1,!1,!1,0,!1,!1,"","",-1,0,-1,0)
B.ewY=new A.aa2(null,null)
B.blD=new C.u(1,0.30980392156862746,0.7019607843137254,0.9647058823529412,D.q)
B.bu9=new C.u(1,0.11372549019607843,0.37254901960784315,0.7686274509803922,D.q)
B.bqO=new C.u(1,0.043137254901960784,0.16470588235294117,0.4196078431372549,D.q)
B.d51=w([B.blD,B.bu9,B.bqO],x.O)
B.exH=new C.c_(Ac.xD,0.5,D.x,null,0,B.d51,null,null)
B.bun=new C.u(1,0.8392156862745098,0.9019607843137255,0.9176470588235294,D.q)
B.eyo=new C.y(B.bun,B.YI)
B.eyx=new C.y(0,120)
B.eyy=new C.y(0,300)
B.eyO=new C.y(B.m1,B.dZ)
B.eAt=new C.y(64,2.4)
B.eC8=new C.y("LOAD (taped)",D.d2)
B.bi6=new C.u(1,0.9450980392156862,0.8901960784313725,0.7764705882352941,D.q)
B.bli=new C.u(1,0.8470588235294118,0.7686274509803922,0.6274509803921569,D.q)
B.eDv=new C.y(B.bi6,B.bli)
B.dnd=w([D.ax,D.cf,D.ax],x.O)
B.eDU=new C.y(-40,B.dnd)
B.eFl=new C.y(63,-2.4)
B.bkg=new C.u(1,0.8901960784313725,0.9254901960784314,0.9607843137254902,D.q)
B.bf0=new C.u(1,0.7372549019607844,0.7843137254901961,0.8392156862745098,D.q)
B.eFT=new C.y(B.bkg,B.bf0)
B.eG9=new C.y(51,B.afW)
B.bgh=new C.u(1,0.9137254901960784,0.8705882352941177,0.7607843137254902,D.q)
B.eIS=new C.y(B.bgh,B.yh)
B.bgF=new C.u(1,0.9137254901960784,0.9372549019607843,0.9490196078431372,D.q)
B.bhf=new C.u(1,0.8509803921568627,0.8941176470588236,0.9098039215686274,D.q)
B.eJH=new C.y(B.bgF,B.bhf)
B.bq1=new C.u(1,0.9058823529411765,0.8235294117647058,0.8156862745098039,D.q)
B.bhg=new C.u(1,0.7058823529411765,0.7176470588235294,0.7411764705882353,D.q)
B.eKI=new C.y(B.bq1,B.bhg)
B.ben=new C.u(1,0.7647058823529411,0.8117647058823529,0.9019607843137255,D.q)
B.eLy=new C.y(B.ben,B.ajC)
B.bou=new C.u(1,0.3568627450980392,0.39215686274509803,0.4392156862745098,D.q)
B.eNl=new C.y("SILVER \xb7 NEUTRAL",B.bou)
B.hmo=new A.r(-1.5,0,0)
B.eNu=new C.y(B.FH,B.hmo)
B.eP3=new C.y(52,B.vU)
B.bkT=new C.u(1,0.12156862745098039,0.47843137254901963,0.22745098039215686,D.q)
B.ePY=new C.y("GREEN \xb7 GROUND",B.bkT)
B.btg=new C.u(1,0.9450980392156862,0.9098039215686274,0.8235294117647058,D.q)
B.eQF=new C.y(B.btg,B.yh)
B.eQW=new C.y("main","Main water valve")
B.cRp=w([D.w_,D.bs,D.bg],x.O)
B.eTh=new C.y(40,B.cRp)
B.hnR=new A.r(1.5,0,0)
B.eV7=new C.y(B.N0,B.hnR)
B.bgX=new C.u(1,0.9529411764705882,0.9411764705882353,0.9098039215686274,D.q)
B.bo1=new C.u(1,0.4823529411764706,0.5294117647058824,0.5803921568627451,D.q)
B.eVP=new C.y(B.bgX,B.bo1)
B.eWO=new C.y(B.i6,B.Y9)
B.bjW=new C.u(1,0.9529411764705882,0.9019607843137255,0.7843137254901961,D.q)
B.bqV=new C.u(1,0.788235294117647,0.7098039215686275,0.5490196078431373,D.q)
B.eX7=new C.y(B.bjW,B.bqV)
B.bgw=new C.u(1,0.6039215686274509,0.4196078431372549,0.047058823529411764,D.q)
B.eXD=new C.y("BRASS \xb7 HOT",B.bgw)
B.eY4=new C.y(53,B.N0)
B.a91=new C.b5(180,40,215)
B.a92=new C.b5(215,40,345)
B.a93=new C.b5(60,60,90)
B.eZ2=new C.b5(61,-4.6,B.rv)
B.a94=new C.b5(95,40,185)
B.f_7=new C.b5("Turn the main water ON to test for leaks: pick Hand and tap the main valve.","hand","main")
B.f0f=new C.b5(62,4.6,B.nj)
B.f0r=new C.b5("The water must be OFF before you cut into the pipes: pick Hand and tap the main valve.","hand","main")
B.f0Z=new C.b5("Fit the parts in the order of the job list.","",null)
B.f1s=new C.b5("Looks good. Watch for leaks; if none, the job is done.","",null)
B.f2n=new C.cu([0,17.1,16.4,5.8])
B.f2q=new C.cu([0,-0.1,16.4,4.2])
B.aQY=new C.cu([-72,72,-60,60])
B.f3u=new C.cu([15.6,9,14.8,22])
B.f3y=new C.cu([-15.6,9,14.8,22])
B.f3H=new C.dW([72,60,44,B.MF,B.MI])
B.bu5=new C.u(1,0.8941176470588236,0.6901960784313725,0.47843137254901963,D.q)
B.f3Y=new C.dW([124,70,44,B.bu5,B.qk])
B.f3Z=new C.dW([-33,33,-5,76,98])
B.Ek=new C.dW([-64.5,64.5,-52.5,52.5,92])
B.f45=new C.dW([90,64,46,B.ahE,D.hp])
B.aR3=new C.dW([-140,140,12,310,132])
B.f4o=new C.dW([110,70,62,D.bO,D.am])
B.f4t=new C.dW([84,60,40,B.ahH,B.MI])
B.aUh=new C.G(!0,D.bV,null,null,null,null,11,D.u,null,2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fVl=new C.B("WIRES",null,B.aUh,null,D.K,null,null,null,null,null,null,null)
B.bHM=new C.by(1,D.bc,B.fVl,null)
B.fd8=new C.a5(56,null,null,null)
B.fPz=new C.B("DIAGRAM",null,B.aUh,null,D.K,null,null,null,null,null,null,null)
B.bIG=new C.by(1,D.bc,B.fPz,null)
B.doO=w([B.bHM,B.fd8,B.bIG],x.p)
B.f73=new C.c7(D.aM,D.e,D.i,D.m,null,D.p,null,0,B.doO,null)
B.fGs=new C.B("\u260e",null,D.pO,null,null,null,null,null,null,null,null,null)
B.bd9=new C.qB(B.fGs,D.ax,null,24,null)
B.fIY=new C.B("City office",null,D.dg,null,null,null,null,null,null,null,null,null)
B.dej=w([B.bd9,D.be,B.fIY],x.p)
B.f7g=new C.c7(D.aM,D.e,D.i,D.m,null,D.p,null,0,B.dej,null)
B.bWP=new C.ae(D.Pt,26,D.c1,null,null,null)
B.fWh=new C.B("Hallway tour",null,D.hz,null,null,null,null,null,null,null,null,null)
B.fHr=new C.B("Just the hall and its big TVs, 45 seconds",null,D.xd,null,null,null,null,null,null,null,null,null)
B.dwr=w([B.fWh,B.fHr],x.p)
B.bvS=new C.fj(D.ai,D.e,D.i,D.E,null,D.p,null,0,B.dwr,null)
B.bIm=new C.by(1,D.bc,B.bvS,null)
B.d0M=w([B.bWP,D.be,B.bIm,A6.PK],x.p)
B.f7j=new C.c7(D.aM,D.e,D.i,D.m,null,D.p,null,0,B.d0M,null)
B.bUt=new C.ae(D.hs,30,D.c,null,null,null)
B.fYi=new C.B("Play the tour",null,D.kh,null,null,null,null,null,null,null,null,null)
B.d9X=w([B.bUt,D.bn,B.fYi],x.p)
B.f7p=new C.c7(D.aM,D.bb,D.i,D.m,null,D.p,null,0,B.d9X,null)
B.bZ3=new C.ae(D.mU,17,D.bs,null,null,null)
B.aUu=new C.G(!0,D.bs,null,null,null,null,12,D.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fR9=new C.B("Hint",null,B.aUu,null,null,null,null,null,null,null,null,null)
B.foi=new C.G(!0,D.aD,null,null,null,null,10.5,D.V,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fKB=new C.B("\u22122 \u2b50",null,B.foi,null,null,null,null,null,null,null,null,null)
B.d1o=w([B.bZ3,D.e1,B.fR9,D.e1,B.fKB],x.p)
B.f7r=new C.c7(D.aM,D.e,D.O,D.m,null,D.p,null,0,B.d1o,null)
B.r_=new A.K3(0,"correct")
B.aRn=new A.K3(1,"incorrect")
B.tk=new A.K3(2,"unsafe")
B.JS=new A.K3(3,"incomplete")
B.f7E=new A.K3(4,"requiresVerification")
B.f9f=new C.iK([1],x.R)
B.ehK={hospital:0,shop:1,school:2,firestation:3,house2:4,bighouse:5,store:6,gasstation:7,dmv:8,tower:9,hq:10}
B.a9E=new C.df(B.ehK,11,x.M)
B.eht={wardrobe:0,shelf:1,lamp:2,console:3}
B.f9o=new C.df(B.eht,4,x.M)
B.f9u=new C.iK([0,2,3],x.R)
B.aSc=new C.iK([1,2,3,4,5],x.R)
B.ehb={house2:0,bighouse:1,shop:2,hospital:3,school:4,firestation:5,store:6,gasstation:7,tower:8,hq:9,dmv:10}
B.f9D=new C.df(B.ehb,11,x.M)
B.ejD={billboard:0,bighouse:1,townsign:2,cornersign:3,adboard:4,tower:5,hq:6,store:7,gasstation:8,ubstation:9,dmv:10}
B.f9G=new C.df(B.ejD,11,x.M)
B.aSh=new C.df(D.hX,0,C.as("df<F>"))
B.fa9=new C.iK([4],x.R)
B.faa=new C.iK([5],x.R)
B.fbK=new C.av(0,36)
B.fbU=new C.av(126,84)
B.fcS=new C.a5(110,64,null,null)
B.fcT=new C.a5(120,70,null,null)
B.fcZ=new C.a5(270,64,null,null)
B.fd_=new C.a5(270,70,null,null)
B.Ki=new A.G2(0,"hot")
B.Kj=new A.G2(1,"neutral")
B.Kk=new A.G2(2,"ground")
B.aTY=new A.G2(3,"load")
B.fln=new C.G(!0,D.c,null,null,null,null,12.5,null,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fm0=new C.G(!0,D.c,null,null,null,null,13.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fm5=new C.G(!0,D.c,null,null,null,null,16,D.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,L.Dh,null,null,null)
B.fm9=new C.G(!0,D.b0,null,null,null,null,12.5,D.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fmm=new C.G(!0,D.aD,null,null,null,null,11.5,D.V,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fnl=new C.G(!0,D.aD,null,null,null,null,14,D.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.aUq=new C.G(!0,D.aD,null,null,null,null,11.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.aUs=new C.G(!0,D.ad,null,null,null,null,11.5,D.V,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fo0=new C.G(!0,D.ad,null,null,null,null,13.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fos=new C.G(!0,D.az,null,null,null,null,12.5,D.u,null,2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.foC=new C.G(!0,D.aS,null,null,null,null,11.5,null,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.foO=new C.G(!0,D.bs,null,null,null,null,15,D.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.aUH=new C.G(!0,D.ad,null,null,null,null,12,D.V,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fq_=new C.G(!0,D.c,null,null,null,null,13,D.V,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.Ks=new C.G(!0,D.ad,null,null,null,null,null,null,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fqs=new C.G(!0,D.bs,null,null,null,null,13,D.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fr7=new C.G(!0,D.aD,null,null,null,null,9.5,null,null,null,null,null,1.15,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fro=new C.G(!0,D.ad,null,null,null,null,12.5,null,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.frp=new C.G(!0,D.fq,null,null,null,null,12,null,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fs1=new C.G(!0,null,null,null,null,null,9,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.Kv=new C.G(!0,D.az,null,null,null,null,12.5,D.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fsw=new C.G(!0,D.c,null,null,null,null,11.5,D.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.aV_=new C.G(!0,D.c,null,null,null,null,14,null,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fsP=new C.G(!0,D.bN,null,null,null,null,13,D.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.ft8=new C.G(!0,D.c,null,null,null,null,12,D.H,null,null,null,null,1.15,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.ftQ=new C.G(!0,D.mG,null,null,null,null,12,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.ftW=new C.G(!0,D.ad,null,null,null,null,13.5,null,D.cF,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fu6=new C.G(!0,D.fq,null,null,null,null,11.5,D.V,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fub=new C.G(!0,D.eI,null,null,null,null,14,D.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fuK=new C.G(!0,D.bs,null,null,null,null,18,D.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fvh=new C.G(!0,D.aS,null,null,null,null,12,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fvR=new C.G(!0,D.c,null,null,null,null,10.5,D.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fw2=new C.G(!0,D.bs,null,null,null,null,null,D.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.aVs=new C.G(!0,D.ad,null,null,null,null,13.5,null,null,null,null,null,1.5,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fxp=new C.G(!0,D.aD,null,null,null,null,11,D.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fxA=new C.G(!0,D.ad,null,null,null,null,12.8,null,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fyR=new C.G(!0,D.az,null,null,null,null,12.5,D.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fzS=new C.G(!0,D.bs,null,null,null,null,44,D.u,null,2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.aVX=new C.G(!0,D.c,null,null,null,null,13.5,D.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fAg=new C.G(!0,D.aS,null,null,null,null,11.5,null,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fAY=new C.G(!0,F.f0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fBe=new C.G(!0,D.fq,null,null,null,null,12,D.V,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fBz=new C.B("Wire guide (U.S. houses)",null,D.dg,null,null,null,null,null,null,null,null,null)
B.fBM=new C.B("Which wall?",null,D.VJ,null,null,null,null,null,null,null,null,null)
B.fmg=new C.G(!0,D.w,null,null,null,null,12,D.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fC6=new C.B("Open the 3D lesson",null,B.fmg,null,null,null,null,null,null,null,null,null)
B.fCT=new C.B("Never rely on color alone. With the power off, prove what each wire does with a tester and the device diagram. A licensed electrician does real house wiring.",null,M.aaG,null,null,null,null,null,null,null,null,null)
B.fD2=new C.B("Tip: pick a part, then tap its glowing spot. Joints on hoses, bolts and the drain are only loose: pick the Wrench and tap them. Use your Hand on the main water valve: turn the water OFF before you cut into a pipe, and ON to test for leaks.",null,D.Kr,null,null,null,null,null,null,null,null,null)
B.fD6=new C.B("The room is finished! \ud83c\udf89",null,M.AL,null,null,null,null,null,null,null,null,null)
B.fDp=new C.B("Answer, then submit. Nothing is marked until you submit.",null,I.tw,null,null,null,null,null,null,null,null,null)
B.fEe=new C.B("You used all three lives. Electricity does not give second chances, so in real life you turn the breaker OFF and test the wires every single time. Try the job again.",null,D.xg,null,null,null,null,null,null,null,null,null)
B.fEv=new C.B("A different house",null,null,null,null,null,null,null,null,null,null,null)
B.fEX=new C.B("\ud83c\udf5e",null,D.xe,null,null,null,null,null,null,null,null,null)
B.fEY=new C.B("Show me",null,D.lU,null,null,null,null,null,null,null,null,null)
B.fFn=new C.B("Start this job again",null,null,null,null,null,null,null,null,null,null,null)
B.fwf=new C.G(!0,D.c0,null,null,null,null,12.5,D.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fFH=new C.B("Give back",null,B.fwf,null,null,null,null,null,null,null,null,null)
B.fGo=new C.B("The house is wired! \ud83c\udf89",null,M.AL,null,null,null,null,null,null,null,null,null)
B.fGp=new C.B("Edit your billboard",null,D.dg,null,null,null,null,null,null,null,null,null)
B.fHy=new C.B("L is the lobby. On every level there is a balcony with a view of the town.",null,I.ED,null,null,null,null,null,null,null,null,null)
B.fHN=new C.B("Submit the test",null,null,null,null,null,null,null,null,null,null,null)
B.fIa=new C.B("\ud83e\udeaa",null,D.xe,null,null,null,null,null,null,null,null,null)
B.fIn=new C.B("Start from a bare house (wire everything)",null,null,null,null,null,null,null,null,null,null,null)
B.fJ5=new C.B("THE RACE",null,N.ty,null,null,null,null,null,null,null,null,null)
B.fJa=new C.B("What should the drone show you?",null,D.aay,null,null,null,null,null,null,null,null,null)
B.fJS=new C.B("Go through",null,null,null,null,null,null,null,null,null,null,null)
B.fKH=new C.B("The customer says\u2026",null,D.dg,null,null,null,null,null,null,null,null,null)
B.fLd=new C.B("Submit for inspection",null,null,null,null,null,null,null,null,null,null,null)
B.fLr=new C.B("What the house needs",null,D.dg,null,null,null,null,null,null,null,null,null)
B.fLD=new C.B("Next job",null,null,null,null,null,null,null,null,null,null,null)
B.fnN=new C.G(!0,D.w,null,null,null,null,14,D.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fLL=new C.B("Go in",null,B.fnN,null,null,null,null,null,null,null,null,null)
B.fxi=new C.G(!0,D.az,null,null,null,null,22,D.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fLP=new C.B("My House",null,B.fxi,null,D.K,null,null,null,null,null,null,null)
B.fLW=new C.B("New job",null,null,null,null,null,null,null,null,null,null,null)
B.aV4=new C.G(!0,D.c0,null,null,null,null,null,D.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fM2=new C.B("Job over",null,B.aV4,null,null,null,null,null,null,null,null,null)
B.fMi=new C.B("Three shocks. In real life you switch the breaker off and test the wires, every time. Try another call.",null,D.xg,null,null,null,null,null,null,null,null,null)
B.fMo=new C.B("Learn the trades",null,U.tv,null,null,null,null,null,null,null,null,null)
B.fNa=new C.B("New call",null,null,null,null,null,null,null,null,null,null,null)
B.fNf=new C.B("Job done! \ud83c\udf89",null,M.AL,null,null,null,null,null,null,null,null,null)
B.fNj=new C.B("Wire guide",null,null,null,null,null,null,null,null,null,null,null)
B.fOt=new C.B("Next call",null,null,null,null,null,null,null,null,null,null,null)
B.fOR=new C.B("Plug in",null,D.dg,null,null,null,null,null,null,null,null,null)
B.fPg=new C.B("Look around",null,null,null,null,null,null,null,null,null,null,null)
B.fPC=new C.B("\ud83d\udef5",null,D.xc,null,null,null,null,null,null,null,null,null)
B.fPR=new C.B("The customer wants:",null,D.Vv,null,null,null,null,null,null,null,null,null)
B.fQ1=new C.B('Tip: pick "Look and test" and tap things to find out what is wrong. Then pick the right tool. Turn the breaker off (hand) before you touch any wire.',null,D.Kr,null,null,null,null,null,null,null,null,null)
B.fsQ=new C.G(!0,D.aD,null,null,null,null,11.5,D.H,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fQj=new C.B("INCOMING CALL",null,B.fsQ,null,null,null,null,null,null,null,null,null)
B.fQp=new C.B("Elevator",null,D.fB,null,null,null,null,null,null,null,null,null)
B.fRr=new C.B("Deliveries",null,D.fB,null,null,null,null,null,null,null,null,null)
B.fRF=new C.B("Every connection is on the right terminal and every safety check passes.",null,D.tz,null,null,null,null,null,null,null,null,null)
B.fRO=new C.B("Message \xb7 now",null,D.vu,null,null,null,null,null,null,null,null,null)
B.fSH=new C.B("Call over",null,B.aV4,null,null,null,null,null,null,null,null,null)
B.fSO=new C.B("\ud83d\udd12",null,Z.Vw,null,null,null,null,null,null,null,null,null)
B.fSP=new C.B("\u23cf Unplug",null,Y.AF,null,null,null,null,null,null,null,null,null)
B.fSV=new C.B("The game is closed for now",null,D.n7,null,D.K,null,null,null,null,null,null,null)
B.fnw=new C.G(!0,D.ad,null,null,null,null,14.5,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fT7=new C.B("You missed 3 jobs in a row. The City office needs people who answer the phone and finish the job.",null,B.fnw,null,D.K,null,null,null,null,null,null,null)
B.fT9=new C.B("A different call",null,null,null,null,null,null,null,null,null,null,null)
B.fTr=new C.B("One board on its own, or several boards standing apart.",null,I.tw,null,null,null,null,null,null,null,null,null)
B.fTC=new C.B("\ud83d\udecf\ufe0f",null,D.n8,null,null,null,null,null,null,null,null,null)
B.fU2=new C.B("Job complete! \ud83c\udf89",null,M.AL,null,null,null,null,null,null,null,null,null)
B.fUf=new C.B("OPEN ORDERS",null,N.ty,null,null,null,null,null,null,null,null,null)
B.fUz=new C.B("Colours",null,D.AE,null,null,null,null,null,null,null,null,null)
B.fUD=new C.B("How you are doing",null,D.hz,null,null,null,null,null,null,null,null,null)
B.fUW=new C.B("Real work: no hints. You will only hear from me when something is wrong.",null,I.ED,null,null,null,null,null,null,null,null,null)
B.fUX=new C.B("5 bedrooms, 3 bathrooms and NGMY City outside. Walk in, look all round, fix what is wrong.",null,Ab.Vf,null,D.K,null,null,null,null,null,null,null)
B.fVb=new C.B("All fixed! \ud83c\udf89",null,M.AL,null,null,null,null,null,null,null,null,null)
B.fVf=new C.B("These are the usual U.S. house wiring colors. Colors are a hint, not proof: old work, switch loops and other countries differ. A real installer proves what each wire does with a tester, with the power off, and follows the device diagram.",null,A5.aaF,null,null,null,null,null,null,null,null,null)
B.fVB=new C.B("Messages",null,D.vu,null,null,null,null,null,null,null,null,null)
B.fVO=new C.B("Diagram lessons",null,D.cB,null,null,null,null,null,null,null,null,null)
B.aWy=new C.B("Stay",null,null,null,null,null,null,null,null,null,null,null)
B.fWm=new C.B("\ud83d\ude81",null,D.xc,null,null,null,null,null,null,null,null,null)
B.fWz=new C.B("Choose a level. A red one has an office with no power.",null,D.AK,null,null,null,null,null,null,null,null,null)
B.aWA=new C.B("A different job",null,null,null,null,null,null,null,null,null,null,null)
B.fXn=new C.B("It goes on the back wall, not wired yet. Tap the red one to wire it yourself.",null,I.tw,null,null,null,null,null,null,null,null,null)
B.fYk=new C.B("\ud83d\uded7",null,D.xc,null,null,null,null,null,null,null,null,null)
B.fYF=new C.B("\u26a1",null,D.pN,null,null,null,null,null,null,null,null,null)
B.fZf=new C.B("The job",null,D.dg,null,null,null,null,null,null,null,null,null)
B.h_9=new C.B("Stay in the room",null,null,null,null,null,null,null,null,null,null,null)
B.aWG=new C.B("Great",null,null,null,null,null,null,null,null,null,null,null)
B.fzf=new C.G(!0,F.f0,null,null,null,null,12,D.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.h_q=new C.B("\ud83e\udea7 Billboards",null,B.fzf,null,null,null,null,null,null,null,null,null)
B.h_w=new C.B("Choose a billboard",null,D.dg,null,null,null,null,null,null,null,null,null)
B.h_B=new C.B("Which sign?",null,D.AE,null,null,null,null,null,null,null,null,null)
B.h_I=new C.B("\ud83d\udc8a",null,D.xe,null,null,null,null,null,null,null,null,null)
B.h2N=new A.r(30,0.8,46)
B.h2O=new A.r(3.6,2.6,0.6)
B.h2P=new A.r(0,95.1,0)
B.h2R=new A.r(0,56,0.9)
B.h2S=new A.r(-146.4,62,84)
B.h2U=new A.r(0,139.4,180)
B.h2W=new A.r(0,0,3)
B.abF=new A.r(0,0,4)
B.h2Y=new A.r(0,0,500)
B.h2Z=new A.r(0,0,640)
B.h3_=new A.r(0,0,8)
B.h30=new A.r(0,0,800)
B.abG=new A.r(0,0,-60)
B.h33=new A.r(0,101,38)
B.h34=new A.r(0,105,280)
B.aXo=new A.r(0,10,0)
B.h35=new A.r(0,10,3)
B.h36=new A.r(0,110,10)
B.h37=new A.r(0,110,95)
B.h38=new A.r(0,112,36)
B.h39=new A.r(0,116,0)
B.h3a=new A.r(0,11,-15)
B.h3b=new A.r(0,120,0)
B.h3c=new A.r(0,122,0)
B.h3d=new A.r(0,124,0)
B.aXq=new A.r(0,124,28)
B.h3e=new A.r(0,126,4)
B.aXr=new A.r(0,12,0)
B.h3f=new A.r(0,12,3)
B.h3g=new A.r(0,130,-3)
B.abH=new A.r(0,13,0)
B.h3h=new A.r(0,13,56)
B.h3i=new A.r(0,13,8)
B.h3j=new A.r(0,13,-8)
B.h3k=new A.r(0,141,180)
B.h3l=new A.r(0,142,0)
B.W3=new A.r(0,14,0)
B.h3m=new A.r(0,14,11)
B.h3n=new A.r(0,14,150)
B.h3o=new A.r(0,14,2)
B.h3p=new A.r(0,14,32)
B.aXs=new A.r(0,14,40)
B.h3q=new A.r(0,14,5)
B.h3s=new A.r(0,14,-9)
B.h3t=new A.r(0,150,-150)
B.aXt=new A.r(0,156,28)
B.h3u=new A.r(0,159,0)
B.h3v=new A.r(0,165,3)
B.h3w=new A.r(0,165,-63)
B.h3x=new A.r(0,16,0)
B.h3y=new A.r(0,178,-30)
B.abI=new A.r(0,17,0)
B.h3z=new A.r(0,17,21)
B.h3A=new A.r(0,17,27)
B.h3B=new A.r(0,188,0)
B.h3C=new A.r(0,18,13)
B.h3D=new A.r(0,19,0)
B.h3E=new A.r(0,19,14)
B.h3G=new A.r(0,19,-30)
B.eb=new A.r(0,1,0)
B.aXu=new A.r(0,1,8)
B.h3I=new A.r(0,202,0)
B.h3J=new A.r(0,20,0)
B.h3K=new A.r(0,20,16)
B.h3N=new A.r(0,20,-14)
B.h3O=new A.r(0,20,-6)
B.h3P=new A.r(0,210,-150)
B.h3Q=new A.r(0,216,-30)
B.h3R=new A.r(0,21,0)
B.h3S=new A.r(0,22,-11)
B.h3T=new A.r(0,22,-12)
B.h3U=new A.r(0,22,-39)
B.h3X=new A.r(0,23,0)
B.h4_=new A.r(0,24,0)
B.h40=new A.r(0,24,13)
B.h42=new A.r(0,250,640)
B.AQ=new A.r(0,250,-118)
B.h44=new A.r(0,252,0)
B.h45=new A.r(0,25,27)
B.h46=new A.r(0,25,-15)
B.h47=new A.r(0,26,-24)
B.W4=new A.r(0,28,0)
B.h48=new A.r(0,28,-8)
B.aXw=new A.r(0,29,40)
B.h49=new A.r(0,2,14)
B.h4a=new A.r(0,304,-150)
B.abJ=new A.r(0,30,0)
B.h4b=new A.r(0,30,110)
B.h4c=new A.r(0,316,0)
B.h4d=new A.r(0,31,46)
B.h4e=new A.r(0,31,-6)
B.h4f=new A.r(0,330,260)
B.h4g=new A.r(0,34,0)
B.h4h=new A.r(0,36,0)
B.h4i=new A.r(0,36,19)
B.h4j=new A.r(0,36,-3)
B.h4k=new A.r(0,37,22)
B.h4l=new A.r(0,3,0)
B.h4m=new A.r(0,3,150)
B.h4n=new A.r(0,3,-30)
B.h4p=new A.r(0,400,60)
B.h4q=new A.r(0,40,100)
B.h4s=new A.r(0,40,150)
B.h4t=new A.r(0,40,17)
B.h4v=new A.r(0,40,40)
B.h4w=new A.r(0,40,45)
B.h4x=new A.r(0,40,50)
B.h4z=new A.r(0,40,-6)
B.aXx=new A.r(0,44,46)
B.h4A=new A.r(0,44,55)
B.AR=new A.r(0,46,0)
B.h4B=new A.r(0,47,0)
B.aXy=new A.r(0,48,0)
B.h4D=new A.r(0,48,20)
B.h4E=new A.r(0,48,82)
B.W5=new A.r(0,4,-2)
B.h4I=new A.r(0,50,-8)
B.h4J=new A.r(0,520,1450)
B.aXz=new A.r(0,52,0)
B.h4K=new A.r(0,52,52)
B.h4M=new A.r(0,55,0)
B.abK=new A.r(0,58,0)
B.h4N=new A.r(0,5,4)
B.h4P=new A.r(0,66,0)
B.h4Q=new A.r(0,66,1)
B.h4R=new A.r(0,6,-15)
B.h4S=new A.r(0,75,-30)
B.aXA=new A.r(0,76,36)
B.abL=new A.r(0,7,0)
B.h4T=new A.r(0,7,7)
B.h4U=new A.r(0,7,-5)
B.aXB=new A.r(0,82,0)
B.xo=new A.r(0,8,0)
B.h4V=new A.r(0,8,6)
B.h4W=new A.r(0,8,90)
B.h4X=new A.r(0,8,-16)
B.h4Y=new A.r(0,8,-19)
B.h4Z=new A.r(0,8,-4)
B.h5_=new A.r(0,900,1600)
B.h50=new A.r(0,90,0)
B.h51=new A.r(0,91,80)
B.aXC=new A.r(0,92,1)
B.aXD=new A.r(0,92,28)
B.h52=new A.r(0,93,0)
B.h53=new A.r(0,94,13)
B.h54=new A.r(0,98,8)
B.h55=new A.r(0,99,38)
B.abM=new A.r(0,9,0)
B.aXE=new A.r(0,9,-3)
B.h56=new A.r(0,-1,0)
B.h57=new A.r(0,-2,0)
B.abN=new A.r(0,-2,12)
B.h58=new A.r(0,-4,28)
B.h59=new A.r(0,-4,-20)
B.h5d=new A.r(-100,38,0.7)
B.h5g=new A.r(100,100,320)
B.h5h=new A.r(100,14,36)
B.h5i=new A.r(100,24,36)
B.h5j=new A.r(100,24,8)
B.h5k=new A.r(100,290,-330)
B.h5l=new A.r(100,7,7)
B.h5m=new A.r(101,4,37)
B.h5p=new A.r(10,12,10)
B.h5q=new A.r(10,12,16)
B.h5r=new A.r(10,16,3)
B.h5s=new A.r(10,26,2)
B.h5t=new A.r(10,34,1)
B.h5u=new A.r(10,3,7)
B.h5v=new A.r(10,5,50)
B.h5w=new A.r(10,60,14)
B.h5x=new A.r(10,8,10)
B.h5y=new A.r(10,8,15)
B.h5A=new A.r(110,0,20)
B.h5B=new A.r(110,130,20)
B.h5C=new A.r(110,14,2)
B.h5D=new A.r(110,8,34)
B.h5E=new A.r(110,96,120)
B.aXF=new A.r(112,22,3)
B.h5F=new A.r(112,46,2)
B.h5G=new A.r(11,0,0)
B.h5H=new A.r(11,12,30)
B.aXG=new A.r(11,16,7)
B.h5I=new A.r(11,1,11)
B.h5J=new A.r(120,0,-30)
B.h5K=new A.r(120,28,22)
B.h5L=new A.r(120,40,100)
B.h5M=new A.r(124,2,26)
B.h5N=new A.r(124,4,60)
B.h5O=new A.r(125,8,54)
B.h5P=new A.r(126,2,62)
B.aXH=new A.r(12,3,9)
B.h5Q=new A.r(12,4,22)
B.h5R=new A.r(12,86,0)
B.h5S=new A.r(130,18,12)
B.h5T=new A.r(130,28,24)
B.aXI=new A.r(130,4,14)
B.aXJ=new A.r(130,56,80)
B.h5U=new A.r(130,5,50)
B.h5V=new A.r(132,14,150)
B.h5W=new A.r(132,2,52)
B.aXK=new A.r(134,4,84)
B.h5X=new A.r(13,0,0)
B.h5Y=new A.r(13,12,13)
B.h5Z=new A.r(13,15,2)
B.aXL=new A.r(13,18,8)
B.h6_=new A.r(13,28,3)
B.h60=new A.r(13,8,8)
B.h61=new A.r(0,0.52,2.35)
B.h62=new A.r(140,28,22)
B.h63=new A.r(140,9,43)
B.h64=new A.r(144,2,120)
B.h65=new A.r(144,2,26)
B.h66=new A.r(146,3,40)
B.h67=new A.r(148,60,120)
B.h68=new A.r(14,10,2)
B.aXM=new A.r(14,11,14)
B.h69=new A.r(14,13,28)
B.h6a=new A.r(14,14,3)
B.h6b=new A.r(14,17,4)
B.h6c=new A.r(14,20,-28)
B.h6d=new A.r(14,30,14)
B.h6e=new A.r(14,36,14)
B.h6f=new A.r(14,3,14)
B.h6g=new A.r(150,30,42)
B.W6=new A.r(150,4,7)
B.aXN=new A.r(150,62,4)
B.h6h=new A.r(150,70,5)
B.h6i=new A.r(151,3,43)
B.h6j=new A.r(152,4,7)
B.h6k=new A.r(154,2,130)
B.h6m=new A.r(16,10,10)
B.h6n=new A.r(16,16,16)
B.h6o=new A.r(16,18,16)
B.h6p=new A.r(16,3,11)
B.h6q=new A.r(16,80,60)
B.h6r=new A.r(16,9,2)
B.h6s=new A.r(17,1,0)
B.aXO=new A.r(17,3,17)
B.h6t=new A.r(27,1.4,27)
B.h6u=new A.r(18,18,14)
B.h6v=new A.r(18,20,18)
B.h6w=new A.r(18,22,2)
B.h6x=new A.r(18,28,16)
B.h6y=new A.r(18,2,18)
B.h6z=new A.r(18,3,0)
B.h6A=new A.r(18,5,7)
B.h6B=new A.r(18,6,0)
B.h6C=new A.r(18,80,2)
B.h6D=new A.r(18,90,5)
B.h6E=new A.r(18,9,11)
B.h6F=new A.r(190,20,60)
B.h6G=new A.r(190,320,100)
B.h6H=new A.r(19,13,7)
B.h6I=new A.r(19,18,12)
B.h6J=new A.r(70,0.6,50)
B.h6K=new A.r(0,3,-6.5)
B.aXP=new A.r(1,23.6,18)
B.h6L=new A.r(-4,20.4,0)
B.h6M=new A.r(1,1,0.64)
B.h6N=new A.r(-4.6,1.5,-3.6)
B.h6O=new A.r(0,-13.5,-1.5)
B.h6P=new A.r(4,10,3.5)
B.aXQ=new A.r(0.95,1.7,0.85)
B.h6Q=new A.r(1,16,36)
B.h6R=new A.r(1,18,18)
B.h6S=new A.r(1,26,14)
B.h6T=new A.r(1,28,14)
B.aXR=new A.r(1,2,1)
B.aXS=new A.r(1,3,1)
B.abO=new A.r(1,3,6)
B.h6V=new A.r(1,0.9,0.06)
B.h6W=new A.r(1.2,44,34)
B.h6Y=new A.r(200,0,500)
B.h6Z=new A.r(200,0,900)
B.h7_=new A.r(200,140,200)
B.h73=new A.r(1.6,15,1.6)
B.h74=new A.r(20,12,14)
B.aXT=new A.r(20,14,7)
B.h76=new A.r(20,2,2)
B.h77=new A.r(20,2,8)
B.h78=new A.r(20,30,26)
B.h79=new A.r(20,3,14)
B.h7a=new A.r(20,4,26)
B.h7b=new A.r(20,92,26)
B.h7c=new A.r(20,9,10)
B.h7d=new A.r(216,8,216)
B.h7e=new A.r(22,12,34)
B.h7f=new A.r(22,14,0)
B.h7g=new A.r(22,14,2)
B.h7h=new A.r(22,14,3)
B.h7i=new A.r(22,16,3)
B.h7j=new A.r(22,18,14)
B.h7k=new A.r(22,1,1)
B.h7l=new A.r(22,2,28)
B.h7m=new A.r(22,3,10)
B.h7n=new A.r(22,3,22)
B.h7o=new A.r(22,4,20)
B.h7p=new A.r(22,5,9)
B.h7q=new A.r(22,6,20)
B.h7r=new A.r(22,8,9)
B.h7s=new A.r(230,330,-210)
B.h7t=new A.r(230,-40,100)
B.h7u=new A.r(240,150,60)
B.h7v=new A.r(244,6,64)
B.h7w=new A.r(140,15,3.6)
B.h7x=new A.r(24,12,34)
B.h7y=new A.r(24,14,22)
B.h7z=new A.r(24,38,0)
B.aXU=new A.r(24,6,14)
B.h7A=new A.r(250,92,6)
B.h7B=new A.r(260,300,-160)
B.h7C=new A.r(262,3,5)
B.h7D=new A.r(262,3,56)
B.h7E=new A.r(26,14,26)
B.h7F=new A.r(26,2,26)
B.aXV=new A.r(26,4,22)
B.h7G=new A.r(26,72,26)
B.h7H=new A.r(26,8,18)
B.h7I=new A.r(26,-34,96)
B.h7J=new A.r(27,38,27)
B.aXW=new A.r(28,30,22)
B.h7K=new A.r(28,4,1)
B.h7M=new A.r(1.6,1.4,48)
B.h7N=new A.r(7.4,6,10.4)
B.h7O=new A.r(-0.1,0,0)
B.h7P=new A.r(5,1.2,1.4)
B.aXX=new A.r(2,100,90)
B.h7Q=new A.r(2,10,2)
B.aXY=new A.r(2,12,60)
B.h7R=new A.r(2,13,2)
B.aXZ=new A.r(2,23,12)
B.aY_=new A.r(2,28,22)
B.h7S=new A.r(2,5,1)
B.h7T=new A.r(2,700,900)
B.aY0=new A.r(2,8,2)
B.h7U=new A.r(1,0.9,0.8)
B.h7W=new A.r(64,10,-1.4)
B.h7X=new A.r(47,48,3.5)
B.h7Y=new A.r(46.5,15.5,36)
B.h7Z=new A.r(19.6,0,-1.5)
B.aY1=new A.r(0,56,1.3)
B.h8_=new A.r(0,15.5,0)
B.h80=new A.r(3000,0,3000)
B.h81=new A.r(3000,0,-3000)
B.h83=new A.r(300,6,3)
B.h85=new A.r(302,2,200)
B.h86=new A.r(30,16,30)
B.aY2=new A.r(30,16,72)
B.h87=new A.r(30,22,0)
B.h88=new A.r(30,24,8)
B.h89=new A.r(30,29,0)
B.h8a=new A.r(30,34,40)
B.h8b=new A.r(30,36,26)
B.h8c=new A.r(30,40,100)
B.h8e=new A.r(30,6,12)
B.h8f=new A.r(324,114,6)
B.aY3=new A.r(324,6,10)
B.aY4=new A.r(32,35,26)
B.h8g=new A.r(33,11,10)
B.h8h=new A.r(34,10,1)
B.h8i=new A.r(34,22,3)
B.aY5=new A.r(34,25,18)
B.h8j=new A.r(34,30,1)
B.aY6=new A.r(34,39,18)
B.aY7=new A.r(34,42,18)
B.h8k=new A.r(34,4,28)
B.aY9=new A.r(34,8,18)
B.h8l=new A.r(-1,-1.7,2.3)
B.h8m=new A.r(366,124,6)
B.aYa=new A.r(366,6,10)
B.h8n=new A.r(36,1,18)
B.h8o=new A.r(36,22,0)
B.h8p=new A.r(36,30,0)
B.h8q=new A.r(36,30,1)
B.h8r=new A.r(36,4,3)
B.h8s=new A.r(36,60,12)
B.h8t=new A.r(36,8,-37)
B.h8u=new A.r(36,8,-44)
B.h8v=new A.r(0,93,3.5)
B.h8w=new A.r(37,16,0)
B.h8x=new A.r(37,50,38)
B.h8y=new A.r(38,10,24)
B.h8z=new A.r(38,20,3)
B.h8A=new A.r(38,2,6)
B.h8B=new A.r(-0.2,-0.3,-0.4)
B.h8C=new A.r(60,62,3.6)
B.h8D=new A.r(0,48.6,55)
B.h8E=new A.r(-3.5,4.5,7)
B.aYc=new A.r(3,12,12)
B.aYd=new A.r(3,14,18)
B.h8F=new A.r(3,16,3)
B.h8H=new A.r(3,22,2)
B.h8I=new A.r(3,26,3)
B.abP=new A.r(3,3,3)
B.h8J=new A.r(3,42,70)
B.h8K=new A.r(3,46,90)
B.h8L=new A.r(3,5,3)
B.h8M=new A.r(17.5,1.9,1.5)
B.h8O=new A.r(40,0,36)
B.h8P=new A.r(40,11,36)
B.h8Q=new A.r(40,12,2)
B.h8R=new A.r(40,15,36)
B.h8S=new A.r(40,16,18)
B.h8T=new A.r(40,1,14)
B.h8U=new A.r(40,28,1)
B.h8V=new A.r(40,2,104)
B.h8W=new A.r(40,2,24)
B.h8X=new A.r(40,60,40)
B.h8Y=new A.r(40,7,36)
B.h8Z=new A.r(40,80,3)
B.h9_=new A.r(40,8,104)
B.h90=new A.r(44,10,2)
B.aYg=new A.r(44,2,14)
B.h91=new A.r(44,3,22)
B.h92=new A.r(44,72,20)
B.h93=new A.r(0.9,0,4.4)
B.h94=new A.r(8.2,1.9,-7.55)
B.h95=new A.r(46,10,34)
B.h96=new A.r(46,3,10)
B.h97=new A.r(46,3,3)
B.h98=new A.r(48,2,24)
B.h99=new A.r(48,6,96)
B.h9a=new A.r(48,7,96)
B.h9b=new A.r(120.6,140,-52)
B.h9c=new A.r(0,-47.25,-2.25)
B.h9d=new A.r(-147.6,54,45)
B.h9e=new A.r(0.6,68,0.4)
B.h9f=new A.r(64,49,8.4)
B.h9g=new A.r(1.5,28,120)
B.h9h=new A.r(36,8,-37.6)
B.h9i=new A.r(0,1.59,0.14)
B.h9j=new A.r(4,108,0)
B.h9k=new A.r(4,80,104)
B.h9l=new A.r(4,96,0)
B.h9m=new A.r(0,-3.4,1)
B.h9n=new A.r(25,79,1.4)
B.h9o=new A.r(1,0,-1.2)
B.h9p=new A.r(0.6,4,2.4)
B.h9q=new A.r(50,12,32)
B.h9r=new A.r(50,1,1)
B.h9s=new A.r(50,1,2)
B.h9t=new A.r(50,28,42)
B.h9u=new A.r(50,4,28)
B.h9v=new A.r(50,5,10)
B.h9w=new A.r(51,7,33)
B.h9x=new A.r(52,10,22)
B.h9y=new A.r(52,56,1)
B.h9z=new A.r(52,5,8)
B.h9A=new A.r(36,4.2,-40.5)
B.h9B=new A.r(54,5,18)
B.h9E=new A.r(56,18,18)
B.h9F=new A.r(56,2,36)
B.h9G=new A.r(56,3,32)
B.h9H=new A.r(56,3,48)
B.h9I=new A.r(1.3,0.4,0.55)
B.h9J=new A.r(58,0,30)
B.h9K=new A.r(58,14,9)
B.h9L=new A.r(58,64,22)
B.h9M=new A.r(58,92,30)
B.h9N=new A.r(58,96,30)
B.h9O=new A.r(58,9,74)
B.h9P=new A.r(0,-0.8,0.9)
B.h9Q=new A.r(27,6,0.6)
B.h9R=new A.r(11.9,0,-8)
B.h9S=new A.r(20,7,34.4)
B.h9T=new A.r(-47,48,3.5)
B.aYi=new A.r(1.6,1.6,0.4)
B.h9U=new A.r(-17.5,1.9,1.5)
B.h9W=new A.r(0.16,0.32,0.07)
B.h9X=new A.r(5,10,3)
B.h9Y=new A.r(5,10,5)
B.aYj=new A.r(5,12,26)
B.h9Z=new A.r(5,17,2)
B.ha_=new A.r(5,1,2)
B.ha0=new A.r(5,34,24)
B.ha1=new A.r(5,3,44)
B.aYk=new A.r(5,5,5)
B.ha2=new A.r(5,6,10)
B.ha3=new A.r(5,6,3)
B.ha4=new A.r(5,9,8)
B.ha5=new A.r(-120.1,150,0)
B.ha6=new A.r(0,0,3.2)
B.aYl=new A.r(-13,8.6,-9.5)
B.ha7=new A.r(60,12,56)
B.ha8=new A.r(60,12,80)
B.ha9=new A.r(60,16,28)
B.haa=new A.r(60,30,3)
B.hac=new A.r(620,300,270)
B.had=new A.r(62,11,0)
B.hae=new A.r(62,18,20)
B.haf=new A.r(62,22,6)
B.hag=new A.r(62,5,0)
B.hah=new A.r(632,10,282)
B.hai=new A.r(640,8,290)
B.haj=new A.r(64,10,0)
B.ham=new A.r(0,-3.45,4)
B.han=new A.r(14,9,0.5)
B.aYm=new A.r(6,14,20)
B.aYn=new A.r(6,14,32)
B.hao=new A.r(6,28,6)
B.hap=new A.r(6,4,4)
B.haq=new A.r(6,6,6)
B.has=new A.r(-150.6,70,160)
B.hat=new A.r(0,-0.2,0.14)
B.hav=new A.r(-3.8,2.3,7)
B.haw=new A.r(120.6,140,-8)
B.hax=new A.r(0.3,38,2)
B.haz=new A.r(700,430,1150)
B.haA=new A.r(70,175,-45)
B.haB=new A.r(70,194,-45)
B.haD=new A.r(70,6,36)
B.haF=new A.r(720,100,105)
B.haG=new A.r(720,360,320)
B.haH=new A.r(0,6.9,7)
B.haK=new A.r(72,32,3)
B.haL=new A.r(72,-17,70)
B.haM=new A.r(12,5,0.4)
B.haN=new A.r(74,20,5)
B.haO=new A.r(76,100,2)
B.haP=new A.r(76,2,90)
B.haQ=new A.r(76,8,3)
B.haR=new A.r(12,1.6,18)
B.haS=new A.r(34,30,0.6)
B.haU=new A.r(1.6,1.7,3.6)
B.haV=new A.r(48,0.7,2.2)
B.haX=new A.r(-72.8,0,55)
B.haY=new A.r(-146.4,15,84)
B.hb_=new A.r(25,79,0.2)
B.hb0=new A.r(7,0,-8)
B.hb1=new A.r(7,18,10)
B.hb2=new A.r(7,27,10)
B.hb3=new A.r(7,2,7)
B.aYo=new A.r(7,3,0)
B.hb4=new A.r(7,6,3)
B.hb5=new A.r(7,7,7)
B.hb6=new A.r(7,8,3)
B.aYp=new A.r(7,96,7)
B.hb7=new A.r(2200,0.4,560)
B.hb9=new A.r(0,11,9.2)
B.hba=new A.r(-3.2,1.3,-7.82)
B.hbb=new A.r(20,0.8,12)
B.hbc=new A.r(80,16,32)
B.hbd=new A.r(80,26,8)
B.hbe=new A.r(80,38,26)
B.hbg=new A.r(80,4,14)
B.hbh=new A.r(80,6,32)
B.aYq=new A.r(147,1.5,3.5)
B.hbi=new A.r(82,46,3)
B.aYr=new A.r(-6.5,6.9,-3)
B.hbj=new A.r(-17,3.2,-22)
B.hbk=new A.r(84,10,38)
B.hbl=new A.r(84,18,38)
B.hbm=new A.r(84,84,120)
B.hbn=new A.r(84,8,36)
B.hbo=new A.r(0.93,0.92,1)
B.hbp=new A.r(4.6,4.2,9.5)
B.hbq=new A.r(88,24,28)
B.hbr=new A.r(88,84,3)
B.hbs=new A.r(0.4,6,8)
B.hbt=new A.r(0,-48.6,55)
B.hbu=new A.r(2.6,2,2.6)
B.hbv=new A.r(5.5,8.5,3)
B.hbw=new A.r(0,0,0.26)
B.hbx=new A.r(120.6,96,-52)
B.hby=new A.r(20,11,0.7)
B.hbz=new A.r(8,18,8)
B.aYs=new A.r(8,2,16)
B.hbA=new A.r(8,2,6)
B.aYt=new A.r(8,2,8)
B.hbB=new A.r(8,6,40)
B.hbC=new A.r(8,6,6)
B.hbE=new A.r(8,8,12)
B.hbF=new A.r(8,8,40)
B.aYu=new A.r(8,9,8)
B.hbG=new A.r(8,9,9)
B.hbH=new A.r(-140,62,3.6)
B.hbJ=new A.r(15,19,0.5)
B.hbK=new A.r(900,2,700)
B.hbM=new A.r(92,2,32)
B.hbN=new A.r(95,26,1)
B.hbO=new A.r(95,50,6)
B.hbP=new A.r(96,14,38)
B.hbQ=new A.r(0.4,0.38,0.12)
B.hbR=new A.r(0,0,-0.43)
B.aYv=new A.r(11.2,4.5,-6)
B.aYw=new A.r(1.2,96,112)
B.aYx=new A.r(0.08,3.8,2.4)
B.hbS=new A.r(9,10,9)
B.aYy=new A.r(9,1,9)
B.hbT=new A.r(9,40,4)
B.hbU=new A.r(9,5,9)
B.hbV=new A.r(0,70,-0.6)
B.hbW=new A.r(-34.6,86,69)
B.hbX=new A.r(-3.5,26,15)
B.hbY=new A.r(34,6,0.6)
B.hbZ=new A.r(1.5,1.3,0.6)
B.hc_=new A.r(-120.6,96,-8)
B.hc0=new A.r(0,1.9,-0.7)
B.hc2=new A.r(0,-1.78,0.27)
B.aYz=new A.r(1.2,9,1.2)
B.hc3=new A.r(0,0.62,0)
B.hc4=new A.r(5.5,1.4,12)
B.hc5=new A.r(-50,0.6,50)
B.hc8=new A.r(20,11.5,0)
B.hc9=new A.r(20,66,1.4)
B.hca=new A.r(3.2,0.12,-6.7)
B.hcb=new A.r(12,0,-8.1)
B.hcd=new A.r(-34.6,86,7)
B.aYA=new A.r(0,0,3.4)
B.hce=new A.r(1.25,0.28,0.1)
B.hcf=new A.r(100,38,0.7)
B.hcg=new A.r(0,36,10.2)
B.hch=new A.r(24,0.08,16)
B.hci=new A.r(34,1.4,1.4)
B.hck=new A.r(0,4,-7.9)
B.hcl=new A.r(11.9,0,8)
B.hcm=new A.r(0,41.5,-4.9)
B.hcn=new A.r(-26,146,0.6)
B.aYB=new A.r(0.8,1.7,0.78)
B.hco=new A.r(0,0.8,9)
B.hcq=new A.r(21,1.4,8)
B.hcr=new A.r(0.8,0.8,1.6)
B.hcs=new A.r(1.4,1,1)
B.hct=new A.r(30,36,0.8)
B.hcu=new A.r(10,6.8,6)
B.hcw=new A.r(71.2,46.6,55)
B.hcx=new A.r(3,3.28,-7.2)
B.hcy=new A.r(4.1,3.4,0.12)
B.hcz=new A.r(1.4,0.3,1)
B.hcA=new A.r(0,-1.7,1.6)
B.hcB=new A.r(0,42,1.5)
B.hcC=new A.r(-6.1,1.2,-6.4)
B.hcD=new A.r(1.4,26,0.4)
B.hcE=new A.r(76,0.6,4)
B.hcG=new A.r(0,0.8,7)
B.hcH=new A.r(26,0.3,130)
B.hcI=new A.r(0,-45.5,0.5)
B.hcJ=new A.r(1.8,4,1)
B.hcK=new A.r(5,1.6,0.5)
B.hcM=new A.r(18,10,0.6)
B.hcN=new A.r(0,11,8.5)
B.hcO=new A.r(0.1,-2,2.4)
B.hcP=new A.r(302.4,1.2,322)
B.hcQ=new A.r(-1,33.4,-4.9)
B.hcR=new A.r(0,0.2,2.8)
B.hcS=new A.r(6,10,1.4)
B.hcT=new A.r(6,1.8,3.6)
B.hcU=new A.r(-15.5,0.6,-34)
B.hcV=new A.r(80,2.4,2)
B.hcW=new A.r(0.95,0.95,1)
B.hcX=new A.r(3.5,4.5,7)
B.hcY=new A.r(24,32,0.8)
B.hcZ=new A.r(0,10,5.2)
B.hd_=new A.r(0,-1.2,4.7)
B.hd0=new A.r(18.9,2.6,0)
B.hd1=new A.r(-2200,0.4,720)
B.hd2=new A.r(66,89,3.8)
B.hd3=new A.r(-12,0,-8.1)
B.hd4=new A.r(3,11,0.5)
B.hd5=new A.r(0.42,0.07,0.03)
B.hd6=new A.r(0,70,320.6)
B.hd7=new A.r(0,120,278.6)
B.hd8=new A.r(11.8,4,0)
B.hd9=new A.r(0.97,0.18,2.25)
B.hda=new A.r(0,6.6,-0.6)
B.hdb=new A.r(58,96,31.7)
B.hdc=new A.r(0,34,3.6)
B.hdd=new A.r(14,20,1.2)
B.aYD=new A.r(-71.7,6,55)
B.hde=new A.r(0,-3.75,4.15)
B.hdg=new A.r(64,57,8.4)
B.hdh=new A.r(5.6,0.3,1.9)
B.hdi=new A.r(0.34,0.05,0.02)
B.hdl=new A.r(52,8,0.4)
B.hdm=new A.r(0,14,51.2)
B.hdn=new A.r(4.6,7.6,3)
B.hdo=new A.r(-1,0,-1.2)
B.hdp=new A.r(0,1.7,0)
B.hdq=new A.r(0,1.8,-0.9)
B.hdr=new A.r(7,0.2,3.6)
B.hdt=new A.r(-1,0,1.5)
B.hdu=new A.r(0,17,28.6)
B.hdv=new A.r(27,19,0.4)
B.hdw=new A.r(32,6,1.2)
B.hdx=new A.r(90,2,0.5)
B.hdy=new A.r(-17,98,77.2)
B.hdz=new A.r(5,8,0.4)
B.hdA=new A.r(0,98,6.6)
B.hdB=new A.r(5,14,8.5)
B.hdC=new A.r(5,2.2,0.8)
B.hdD=new A.r(-120.6,140,-52)
B.hdE=new A.r(-2200,0.4,560)
B.hdF=new A.r(0.18,0.12,0.08)
B.hdG=new A.r(50,0.6,50)
B.hdH=new A.r(147,3,1.4)
B.hdI=new A.r(20,0.6,50)
B.hdJ=new A.r(0,6.6,0)
B.hdK=new A.r(4,16.2,0)
B.hdL=new A.r(60,0.4,12)
B.hdM=new A.r(5.5,1.5,2.2)
B.hdN=new A.r(10,15,0.5)
B.hdO=new A.r(144,5,0.7)
B.hdP=new A.r(1.2,-1.7,2.3)
B.hdQ=new A.r(0.42,1.95,0.07)
B.hdR=new A.r(2.4,2.6,6.2)
B.hdS=new A.r(31.5,23,0)
B.hdT=new A.r(0,0.9,0)
B.hdU=new A.r(2.4,2.4,70)
B.hdV=new A.r(-12.5,0.9,-46)
B.hdW=new A.r(-120.6,140,-8)
B.hdY=new A.r(-146.4,15,172)
B.hdZ=new A.r(0.82,1.7,0.3)
B.he_=new A.r(0.55,0.45,0.35)
B.he0=new A.r(47,7,34.4)
B.he1=new A.r(-0.12,0,0)
B.he3=new A.r(3.5,94,0.2)
B.he4=new A.r(1.1,2.05,0.04)
B.he5=new A.r(32,0.8,26)
B.he6=new A.r(25,79,1.2)
B.he7=new A.r(1.2,3.6,18)
B.he8=new A.r(0,5.5,0)
B.abQ=new A.r(0.7,0.14,0.06)
B.he9=new A.r(10,14,0.5)
B.hea=new A.r(0,17,28.1)
B.heb=new A.r(0,138.8,95)
B.hec=new A.r(0,35.5,-4.9)
B.hed=new A.r(5,8,0.5)
B.abR=new A.r(1.1,0.5,0.7)
B.hee=new A.r(-20,11.5,0)
B.hef=new A.r(0,94.6,0)
B.heg=new A.r(0,1.1,0)
B.heh=new A.r(0,-0.5,0.6)
B.hei=new A.r(32,6,0.5)
B.hej=new A.r(0,1.4,0)
B.hek=new A.r(58,130,277.7)
B.hem=new A.r(1,3,0.8)
B.hen=new A.r(0,3.4,0.8)
B.hep=new A.r(0.1,0.1,0.1)
B.heq=new A.r(12,0.12,4.4)
B.her=new A.r(0,-0.6,38)
B.hes=new A.r(0,-10.5,1.5)
B.het=new A.r(-0.85,4,-3.2)
B.hev=new A.r(-7.1,19,4)
B.hew=new A.r(0,58,-14.2)
B.hex=new A.r(40,7.2,1.2)
B.aYE=new A.r(0.42,0.34,0.12)
B.hey=new A.r(1.7,0.08,1.2)
B.hez=new A.r(-58,110,277.7)
B.heA=new A.r(8.6,0.5,3.4)
B.heB=new A.r(0,0,0.38)
B.heD=new A.r(5.2,3.9,-7.76)
B.heE=new A.r(1.15,0.42,0.7)
B.aYF=new A.r(-25.8,3.4,-38)
B.heG=new A.r(146.2,52,120)
B.heH=new A.r(30,22,0.8)
B.heI=new A.r(2.6,0.45,0.5)
B.heJ=new A.r(0.07,0.3,0.03)
B.heK=new A.r(-40,6.05,4)
B.heM=new A.r(0,-0.55,0.36)
B.heN=new A.r(41.5,11,12)
B.heO=new A.r(36.2,60,38)
B.heQ=new A.r(20,1.4,8)
B.heR=new A.r(75.4,24,0)
B.heS=new A.r(124,26,1.6)
B.heT=new A.r(0,-0.2,0.19)
B.heU=new A.r(-20,0.6,-50)
B.heV=new A.r(1.3,0.26,0.6)
B.heX=new A.r(1.2,49,36)
B.heY=new A.r(0,9.3,0)
B.hf_=new A.r(0,-1.45,0)
B.hf0=new A.r(9,12,0.6)
B.hf1=new A.r(0,-0.6,160)
B.aYG=new A.r(1.4,3,1.6)
B.hf2=new A.r(0,40,0.95)
B.hf3=new A.r(28,0.8,22)
B.hf4=new A.r(11,3,0.5)
B.hf5=new A.r(34.6,34,7)
B.hf6=new A.r(0,17,28.2)
B.hf7=new A.r(190,0.6,90)
B.hf8=new A.r(0,-1.9,-1.2)
B.hf9=new A.r(-3.2,1.15,-7.78)
B.hfa=new A.r(0,-3.4,1.2)
B.hfb=new A.r(64,10,0.2)
B.hfc=new A.r(0,-1.78,0.53)
B.hfd=new A.r(0.8,2.6,0.3)
B.aYH=new A.r(-6.5,7.4,-3)
B.hfe=new A.r(1,1.05,0.75)
B.hff=new A.r(0,76,1.1)
B.hfg=new A.r(1.35,0.32,0.5)
B.hfh=new A.r(-4.6,-2,1.2)
B.hfj=new A.r(0,40,1.4)
B.aYJ=new A.r(0.6,32,34)
B.hfk=new A.r(-3,36,10.6)
B.hfm=new A.r(0,0.2,0)
B.hfo=new A.r(2.5,30,2.5)
B.hfp=new A.r(160,1.2,120)
B.hfq=new A.r(7,40,2.4)
B.hfr=new A.r(30,26,0.6)
B.hfs=new A.r(3.4,3.25,-7.85)
B.hft=new A.r(0,-0.2,-0.1)
B.hfu=new A.r(72.8,0,55)
B.hfv=new A.r(0.5,62,30)
B.hfw=new A.r(0,76,37.8)
B.hfx=new A.r(58,110,277.7)
B.hfy=new A.r(146.4,62,120)
B.hfz=new A.r(34.6,86,7)
B.hfA=new A.r(2.2,1.1,6.4)
B.hfB=new A.r(0,0,0.46)
B.hfC=new A.r(17,98,77.2)
B.hfD=new A.r(3,1.55,-7.1)
B.hfE=new A.r(0.4,3,3)
B.aYL=new A.r(0,-0.1,0.1)
B.hfF=new A.r(-52,96,-60.6)
B.hfG=new A.r(0,0,0.04)
B.hfI=new A.r(0,14,-19.3)
B.hfJ=new A.r(2.4,11.6,-3.6)
B.hfK=new A.r(4,11,3.5)
B.hfM=new A.r(5,8.6,-2.25)
B.hfN=new A.r(0,-1.78,0.3)
B.hfO=new A.r(2.2,2.2,1.8)
B.hfP=new A.r(0.1,1.35,0.2)
B.hfQ=new A.r(0,1.9,-1.2)
B.hfR=new A.r(0,56,2.1)
B.hfS=new A.r(0.26,0.04,0.02)
B.hfT=new A.r(-2.4,11.6,-3.6)
B.hfU=new A.r(11.25,0,-2.25)
B.hfV=new A.r(0,3.7,1.4)
B.hfW=new A.r(1,-1.8,2.4)
B.hfX=new A.r(-26,43,3.8)
B.hfY=new A.r(-60,15,3.6)
B.hfZ=new A.r(20,0.6,-50)
B.hg_=new A.r(-11.8,4,0)
B.aYM=new A.r(-7,3.2,-22)
B.hg0=new A.r(-34,3.2,-38)
B.hg1=new A.r(1.2,4,7)
B.hg2=new A.r(11.2,4.7,-6)
B.hg3=new A.r(66,43,3.8)
B.aYN=new A.r(0,2.8,0)
B.hg4=new A.r(24,8,0.05)
B.aYO=new A.r(86,52,1.4)
B.hg6=new A.r(0.12,0,0)
B.hg7=new A.r(2.7,0.22,0.45)
B.hg8=new A.r(1.1,1.1,0.03)
B.hg9=new A.r(-50,0.6,-50)
B.hga=new A.r(-26,94,0.6)
B.hgb=new A.r(0,32,320.9)
B.hgc=new A.r(0,5,1.1)
B.hgd=new A.r(4.6,5.4,3.2)
B.hge=new A.r(3.4,3.55,-7.85)
B.hgg=new A.r(0,35,27.2)
B.hgh=new A.r(71.6,-22,62)
B.hgi=new A.r(0,3,1.2)
B.hgj=new A.r(22,18,0.4)
B.hgk=new A.r(5.5,1.3,1.4)
B.hgl=new A.r(-20,0.6,50)
B.hgn=new A.r(24,14,0.5)
B.aYP=new A.r(1.5,18,3.5)
B.aYQ=new A.r(0,1.5,-0.9)
B.hgp=new A.r(-0.28,0.55,-0.8)
B.hgq=new A.r(0,-0.2,0.24000000000000002)
B.hgs=new A.r(0,-3.3,4)
B.hgt=new A.r(46,0.8,46)
B.hgu=new A.r(1,-0.2,0.14)
B.hgv=new A.r(0,137,1.6)
B.aYR=new A.r(84,3,0.5)
B.hgw=new A.r(-1.9,0,-2.25)
B.hgx=new A.r(0,-0.9,1.1)
B.hgy=new A.r(8,0.5,-34)
B.hgz=new A.r(1.1,0.4,0.6)
B.hgA=new A.r(8.2,1.05,-6.7)
B.hgB=new A.r(0,9.6,11.6)
B.hgD=new A.r(34.6,34,69)
B.hgF=new A.r(-149.3,38,128)
B.hgG=new A.r(-2,3.2,-22)
B.hgH=new A.r(0.07,0.4,0.03)
B.hgI=new A.r(2,3.8,0.08)
B.hgJ=new A.r(72,2.4,1.4)
B.hgK=new A.r(31,83,0.9)
B.hgL=new A.r(64,40,-3.2)
B.hgM=new A.r(0.95,0.62,2.2)
B.aYS=new A.r(1.4,3,112)
B.hgN=new A.r(1,33.4,-4.9)
B.hgO=new A.r(14,0.14,2.2)
B.hgP=new A.r(0,0.3,314)
B.aYT=new A.r(302.4,140,1.2)
B.hgQ=new A.r(0,46.6,0.8)
B.hgS=new A.r(6.5,6.4,13)
B.hgT=new A.r(0,0,-8.8)
B.hgU=new A.r(0,0.7,-1)
B.hgX=new A.r(-11.9,0,8)
B.hgY=new A.r(7,0,1.5)
B.hgZ=new A.r(-8.4,0.7,-6.4)
B.hh_=new A.r(-3.2,1.45,-7.78)
B.hh0=new A.r(34,25,21.6)
B.hh1=new A.r(0,41,0.45)
B.hh2=new A.r(-6.575,0,-0.25)
B.hh3=new A.r(1.7,1,0.6)
B.hh4=new A.r(0.07,0.42,0.03)
B.hh7=new A.r(3.7,1.35,0.5)
B.aYV=new A.r(0,0,-2.3)
B.abU=new A.r(-13,12.5,0)
B.hh8=new A.r(0,0,0.62)
B.hh9=new A.r(-60,62,3.6)
B.hha=new A.r(0.2,-0.3,-0.4)
B.hhb=new A.r(-40,3.5,4)
B.aYW=new A.r(10.85,18,0.5)
B.hhc=new A.r(120.1,174,-30)
B.hhd=new A.r(0.6,70,0.6)
B.hhe=new A.r(-29,3.4,-38)
B.hhf=new A.r(1.4,1.3,0.02)
B.hhg=new A.r(30,1.4,0.4)
B.hhh=new A.r(6.3,1.5,-7.2)
B.hhi=new A.r(8,14,1.2)
B.hhj=new A.r(-120.1,150,-60)
B.hhk=new A.r(140,1.2,116)
B.hhl=new A.r(0,5,11.2)
B.aYX=new A.r(0,0.62,2.85)
B.hhm=new A.r(37.5,23,0)
B.aYY=new A.r(0.05,8,16)
B.hhn=new A.r(0,-1.2,5)
B.hho=new A.r(0.2,-2,2.6)
B.hhp=new A.r(142,0.2,118)
B.hhr=new A.r(0,-3.15,4.2)
B.hhs=new A.r(0,3.4,7)
B.hhu=new A.r(11.2,2.4,-5.18)
B.hhv=new A.r(40,14.4,36)
B.hhx=new A.r(47.6,0.12,0.1)
B.hhy=new A.r(-1,-0.2,0.14)
B.hhz=new A.r(0.97,0.9,1.04)
B.hhA=new A.r(-17,83,77.2)
B.hhB=new A.r(0.5,8,6)
B.hhC=new A.r(1.2,1.2,0.3)
B.aZ0=new A.r(2,0.08,2.4)
B.hhE=new A.r(9.5,13.5,1.4)
B.hhF=new A.r(0,19,13.5)
B.hhG=new A.r(24,14,0.8)
B.hhH=new A.r(2.2,18,2.2)
B.hhI=new A.r(22,0.2,0.8)
B.hhJ=new A.r(-0.32,0,0.5)
B.aZ1=new A.r(1.3,4,0.8)
B.hhL=new A.r(-26,89,3.8)
B.hhM=new A.r(-120.1,174,-30)
B.hhN=new A.r(0.8,0.55,0.05)
B.hhO=new A.r(0.14,0.35,17)
B.hhP=new A.r(1.4,2.4,0.3)
B.hhQ=new A.r(0,11,8.2)
B.hhR=new A.r(20,0.7,12)
B.hhS=new A.r(9,1.6,6)
B.hhT=new A.r(52,96,-60.6)
B.hhU=new A.r(26,146,0.6)
B.hhV=new A.r(3.2,5,0.8)
B.hhW=new A.r(0,24,-0.6)
B.hhX=new A.r(-35.5,2,-38)
B.hi_=new A.r(-58,130,277.7)
B.hi0=new A.r(150,0.6,90)
B.hi1=new A.r(0,11.5,19.3)
B.hi2=new A.r(0,1.95,0.31)
B.hi3=new A.r(150,1.2,112)
B.aZ3=new A.r(0.75,4.5,0.1)
B.hi5=new A.r(-35.5,0.9,-38)
B.hi6=new A.r(0,94.4,0)
B.hi7=new A.r(0.12,0,0.05)
B.hi9=new A.r(0,6.2,0)
B.hia=new A.r(-34.6,34,69)
B.hib=new A.r(1.8,3.6,1.8)
B.hic=new A.r(9,1.2,9)
B.hid=new A.r(120.1,150,-60)
B.hie=new A.r(0,-0.5,0)
B.hih=new A.r(0,37.5,-4.9)
B.hii=new A.r(-2.4,14,8)
B.hij=new A.r(-190,160,-14.2)
B.hik=new A.r(0,0,3.6)
B.hil=new A.r(3,14,1.5)
B.him=new A.r(1.5,5.5,144)
B.hin=new A.r(5.5,8.5,0.5)
B.aZ4=new A.r(0.05,8,9.6)
B.hip=new A.r(1.5,94,3.5)
B.hiq=new A.r(0,8.2,0)
B.hir=new A.r(0,12.6,10.2)
B.his=new A.r(-120.6,96,-52)
B.hiu=new A.r(4,94,0.4)
B.aZ5=new A.r(1.4,8,1)
B.hiv=new A.r(120.6,96,-8)
B.hiw=new A.r(114,30,0.4)
B.hix=new A.r(0,-1.45,0.3)
B.hiy=new A.r(3.7,1.2,-7.1)
B.hiz=new A.r(0,36.3,13)
B.hiA=new A.r(1.5,1.35,1.5)
B.hiB=new A.r(8.2,0.05,-6.7)
B.hiC=new A.r(0,-0.3,0)
B.hiD=new A.r(6.575,0,-0.25)
B.aZ6=new A.r(150.6,70,160)
B.hiE=new A.r(52,140,-60.6)
B.aZ7=new A.r(0,1.8,0)
B.hiF=new A.r(100,14,0.6)
B.hiG=new A.r(9,5,0.6)
B.hiH=new A.r(34,2,0.8)
B.hiJ=new A.r(26,94,0.6)
B.hiK=new A.r(9.8,5,-7.75)
B.aZ8=new A.r(0,2.4,0)
B.hiL=new A.r(1.5,3.5,112)
B.hiM=new A.r(18,0.5,4.4)
B.hiN=new A.r(-8,31.5,6)
B.hiP=new A.r(22,7,34.4)
B.hiQ=new A.r(0,80,3.4)
B.hiR=new A.r(3,1.85,-7.1)
B.hiT=new A.r(40,1.4,60)
B.hiV=new A.r(48,0.1,96)
B.hiX=new A.r(34,3,0.8)
B.hiY=new A.r(16,0.4,16)
B.abW=new A.r(13,12.5,0)
B.hj_=new A.r(0.34,0.66,0.9)
B.hj1=new A.r(0.9,1.08,0.98)
B.hj2=new A.r(36,8,-43.4)
B.hj3=new A.r(29.5,1,12)
B.hj4=new A.r(12,0.4,6)
B.hj5=new A.r(-6.5,7.9,-3)
B.hj6=new A.r(11,4.4,3.8)
B.hj7=new A.r(1.5,1.5,0.05)
B.hj8=new A.r(-6.5,5,-3)
B.hj9=new A.r(-21.5,3.4,-38)
B.hja=new A.r(58.4,1.6,50)
B.hjb=new A.r(22,0.3,46)
B.hjc=new A.r(1.05,0.95,1)
B.hjd=new A.r(16,22,0.6)
B.hje=new A.r(0.02,0.28,0.05)
B.hjg=new A.r(0,0.7,1)
B.hjh=new A.r(26,22,1.4)
B.hji=new A.r(0,9.5,-7)
B.aZ9=new A.r(13,8.6,9.5)
B.hjk=new A.r(-140,15,3.6)
B.hjl=new A.r(1.3,0.95,0.6)
B.hjm=new A.r(5,5,0.8)
B.hjn=new A.r(-3.6,4,-7.76)
B.hjo=new A.r(-1.15,1.18,0.45)
B.hjp=new A.r(0,-8,10.2)
B.hjq=new A.r(0.82,0.9,0.05)
B.hjr=new A.r(0,-5.5,-0.25)
B.hjs=new A.r(0,11,21.2)
B.aZa=new A.r(0,19.2,-2.3)
B.hju=new A.r(14,0.5,-46)
B.hjv=new A.r(0,16,26.2)
B.hjw=new A.r(34.6,86,69)
B.hjx=new A.r(64,50,6.6)
B.hjy=new A.r(-34,40,36.4)
B.hjz=new A.r(2.2,1.8,2)
B.hjB=new A.r(190,160,-14.2)
B.hjD=new A.r(0,0.6,0)
B.hjG=new A.r(1.9,0,0)
B.hjH=new A.r(10,4.6,3.6)
B.hjI=new A.r(0.45,0.72,0.06)
B.hjJ=new A.r(95,26,1.8)
B.hjL=new A.r(14,0.4,7)
B.hjM=new A.r(64,24,-3.2)
B.abX=new A.r(1.2,140,320)
B.hjN=new A.r(1,4.5,0.8)
B.hjO=new A.r(40,14.5,36)
B.hjP=new A.r(120.1,150,0)
B.hjQ=new A.r(0,0.03,0)
B.hjR=new A.r(-100,100,320)
B.hjT=new A.r(-100,400,350)
B.hjU=new A.r(-10,22,0)
B.hjX=new A.r(-110,96,120)
B.hjY=new A.r(-112,38,24)
B.hjZ=new A.r(-120,0,-30)
B.hk_=new A.r(-120,300,-320)
B.hk0=new A.r(-125,16,30)
B.hk1=new A.r(-13,15,2)
B.hk2=new A.r(-144,82,45)
B.hk3=new A.r(-147,54,45)
B.hk4=new A.r(-148,56,120)
B.hk5=new A.r(-14,17,4)
B.hk6=new A.r(-14,20,-28)
B.hk7=new A.r(-18,6,0)
B.hk8=new A.r(-1,0,-8)
B.hk9=new A.r(-200,0,500)
B.hka=new A.r(-200,0,900)
B.hkb=new A.r(-200,100,480)
B.hkd=new A.r(-20,4,26)
B.hke=new A.r(-20,92,26)
B.hkf=new A.r(-22,14,0)
B.hkg=new A.r(-24,38,0)
B.hkh=new A.r(-260,330,-80)
B.hki=new A.r(-3000,0,3000)
B.hkj=new A.r(-3000,0,-3000)
B.hkm=new A.r(-30,36,38)
B.hkn=new A.r(-30,40,100)
B.hko=new A.r(-30,44,33)
B.hkq=new A.r(-330,40,760)
B.hkr=new A.r(-34,34,38)
B.hks=new A.r(-34,40,38)
B.hkt=new A.r(-37,16,0)
B.hku=new A.r(-37,50,38)
B.hkv=new A.r(-380,470,1300)
B.hkw=new A.r(-390,144,-120)
B.hkx=new A.r(-390,70,-120)
B.hky=new A.r(-40,12,150)
B.hkz=new A.r(-40,30,164)
B.hkA=new A.r(-40,3,4)
B.hkD=new A.r(-42,-34,96)
B.hkF=new A.r(0,-0.6,22)
B.hkG=new A.r(-4,20,0)
B.hkH=new A.r(-4,22,150)
B.aZd=new A.r(-4,22,8)
B.hkK=new A.r(-5,17,0)
B.hkL=new A.r(0,36.5,0)
B.hkM=new A.r(-60,28,56)
B.hkP=new A.r(-60,50,1)
B.hkQ=new A.r(-60,70,6)
B.hkR=new A.r(-700,430,1150)
B.hkT=new A.r(-70,0,34)
B.hkU=new A.r(-70,95,34)
B.hkV=new A.r(-70,96,34)
B.hkW=new A.r(-720,360,320)
B.hkZ=new A.r(-72,6,55)
B.hl_=new A.r(-80,12,30)
B.hl0=new A.r(-80,25,30)
B.hl4=new A.r(-8,24,0)
B.hl5=new A.r(-8,25,0)
B.hl6=new A.r(-8,3,44)
B.hl7=new A.r(-8,42,-5)
B.hl8=new A.r(-8,-28,104)
B.hl9=new A.r(-8,-39,96)
B.hlb=new A.r(0,0.35,0.78)
B.hlc=new A.r(0.6,6,14)
B.hld=new A.r(-11.9,0,-8)
B.hle=new A.r(32,3,0.5)
B.hlf=new A.r(38,1.4,12)
B.hlg=new A.r(14,0.1,0.35)
B.hlh=new A.r(25,0.5,66)
B.hli=new A.r(-8.4,1.9,-7.2)
B.hlj=new A.r(1.6,8,5)
B.hlk=new A.r(0.8,1.6,1.4)
B.hlm=new A.r(25,6,0.2)
B.hln=new A.r(14,0.3,14)
B.aZg=new A.r(1.25,1,0.1)
B.hlo=new A.r(11.2,0,-6)
B.hlp=new A.r(-146.4,62,172)
B.hlq=new A.r(0.4,7,9)
B.hlr=new A.r(-12,0.8,-22)
B.hls=new A.r(20,1.5,12)
B.hlt=new A.r(1.2,1.1,0.8)
B.hlv=new A.r(150,49,1.2)
B.hlw=new A.r(41.5,11,-12)
B.hlx=new A.r(62,0.2,42)
B.hly=new A.r(4.6,1.5,-3.6)
B.hlz=new A.r(-2.5,3,44)
B.hlA=new A.r(0,-0.7,0.8)
B.hlB=new A.r(0,15.55,-3.6)
B.hlC=new A.r(0.6,9,9)
B.hlD=new A.r(8.9,1.9,0.9)
B.hlE=new A.r(-34.6,34,7)
B.hlF=new A.r(60,15,3.6)
B.aZh=new A.r(1.6,58,66)
B.hlG=new A.r(0,-1.55,-0.6)
B.hlH=new A.r(36.2,32.2,0.6)
B.hlI=new A.r(1.78,4.25,0.08)
B.hlJ=new A.r(27,0.6,19)
B.hlK=new A.r(1.4,52,96)
B.hlL=new A.r(0,5.5,-0.25)
B.hlM=new A.r(28,2.5,26)
B.hlN=new A.r(-10,1.8,44)
B.hlO=new A.r(0,0.7,0)
B.hlP=new A.r(-1.2,-1.6,2.2)
B.hlQ=new A.r(11,25,0.3)
B.hlR=new A.r(17,83,77.2)
B.aZi=new A.r(-12,14,19.4)
B.aZj=new A.r(13,8.6,-9.5)
B.aZk=new A.r(0.05,0.12,0.03)
B.aZl=new A.r(8.2,0.95,-6.7)
B.hlS=new A.r(0,-2.5,0)
B.hlT=new A.r(40,1.2,22)
B.hlU=new A.r(3.2,4,3.2)
B.aZm=new A.r(26,1.2,1.2)
B.hlV=new A.r(0.7,1.5,-7.2)
B.hlW=new A.r(0,-1,4.9)
B.hlX=new A.r(0,0.35,0.18)
B.hlY=new A.r(62,2.4,8)
B.hlZ=new A.r(-1.6,11,6)
B.hm_=new A.r(0.1,0,0)
B.hm0=new A.r(0.32,0,0.5)
B.hm1=new A.r(2200,0.4,720)
B.hm2=new A.r(1.6,11,6)
B.hm3=new A.r(-10,0.5,150)
B.hm5=new A.r(-60,50,1.8)
B.hm6=new A.r(-0.9,0,4.4)
B.hm7=new A.r(-6.5,7.2,-3)
B.hm9=new A.r(300,6,1.6)
B.hma=new A.r(30,0.6,26)
B.hmb=new A.r(76,64,0.6)
B.hmc=new A.r(7.1,18,-3)
B.hme=new A.r(0.45,1.3,0.9)
B.hmf=new A.r(74,1.2,90)
B.hmg=new A.r(15.5,2.6,0)
B.hmi=new A.r(-8,-47.8,70)
B.hmj=new A.r(14,1.5,3.5)
B.hmk=new A.r(0,0,0.5)
B.aZn=new A.r(17,24,0.3)
B.hml=new A.r(5.2,3.9,-7.82)
B.hmm=new A.r(0,0.7,2.4)
B.hmn=new A.r(0,0.3,0)
B.aZo=new A.r(2.3,7,0.5)
B.hmp=new A.r(0,66,1.8)
B.hmq=new A.r(44,84,1.2)
B.aZp=new A.r(-13,8.6,9.5)
B.hmt=new A.r(0.6,28,52)
B.hmu=new A.r(6.5,6,14)
B.hmv=new A.r(0,4.2,2.4)
B.hmw=new A.r(0,-1.99,0.14)
B.hmx=new A.r(0.4,36,34)
B.hmz=new A.r(4.6,-2,1.2)
B.hmA=new A.r(0,14,19.3)
B.aZq=new A.r(0,0,-2.4)
B.hmB=new A.r(1.3,0.8,0.9)
B.hmC=new A.r(-36.2,60,38)
B.hmD=new A.r(110,18,0.6)
B.hmE=new A.r(0,-1.78,0.52)
B.hmF=new A.r(120,1.4,150)
B.hmG=new A.r(0.12,0.1,0.03)
B.hmH=new A.r(9.8,5,-7.58)
B.hmI=new A.r(14,1.5,5)
B.hmJ=new A.r(0.95,2.3,0.5)
B.aZr=new A.r(0.5,1.4,2)
B.hmK=new A.r(0,6.5,9)
B.hmL=new A.r(3.5,0.15,-7.2)
B.aZs=new A.r(64,2,1.2)
B.hmM=new A.r(1.2,26.4,20)
B.hmN=new A.r(9.5,1.3,4.2)
B.hmO=new A.r(-3.6,4,-7.82)
B.hmP=new A.r(-3,37,-4.9)
B.hmQ=new A.r(0.3,2,36)
B.hmT=new A.r(24,0.8,6.5)
B.hmU=new A.r(-28,76,38.3)
B.hmV=new A.r(300,1.2,200)
B.hmX=new A.r(22,0.5,5)
B.hmY=new A.r(9,10,0.6)
B.hmZ=new A.r(13,0.12,4.6)
B.hn_=new A.r(0,22,2.1)
B.hn2=new A.r(0,56,0.5)
B.hn3=new A.r(150,1.2,70)
B.hn4=new A.r(0,-5.5,-3.4)
B.hn5=new A.r(58,104,31.7)
B.hn6=new A.r(2.4,0.9,9)
B.hn7=new A.r(100,52,2.4)
B.hn8=new A.r(2.1,0.4,0.5)
B.aZt=new A.r(0.4,29,31)
B.hn9=new A.r(0,-0.6,180)
B.hna=new A.r(0,0.8,-1.3)
B.hnb=new A.r(-19.5,-1,-1.5)
B.hnc=new A.r(80,0.5,60)
B.hnd=new A.r(3.4,3.6,3.2)
B.hne=new A.r(0,10.45,0)
B.hnf=new A.r(6.85,4,-3.2)
B.hng=new A.r(52,58,0.6)
B.hnh=new A.r(0,14.4,0)
B.aZw=new A.r(0.12,3,1.9)
B.hni=new A.r(0.06,0.62,0.8)
B.hnj=new A.r(0,18.5,0)
B.hnk=new A.r(0,1.18,0.45)
B.hnl=new A.r(50,0.6,-50)
B.hnn=new A.r(20,0.55,13.2)
B.hno=new A.r(96,56,1.6)
B.hnp=new A.r(9.55,5.7,-7.5)
B.hnr=new A.r(-400,80,-19.2)
B.hns=new A.r(0.8,2.4,0.3)
B.aZx=new A.r(0,0.7,2)
B.hnt=new A.r(3.5,26,15)
B.hnu=new A.r(0.95,0.62,1)
B.aZy=new A.r(0,24,40.2)
B.hnv=new A.r(0.8,1.1,1.2)
B.hnw=new A.r(0,51.5,20)
B.hnx=new A.r(0,0.3,4.3)
B.hny=new A.r(-20,0.5,145)
B.hnz=new A.r(1.15,1.18,0.45)
B.hnA=new A.r(2.4,14,8)
B.hnB=new A.r(0,47.25,-2.25)
B.hnC=new A.r(40,14.6,36)
B.hnD=new A.r(-8,31.5,-6)
B.hnE=new A.r(0.5,0.5,0.04)
B.hnF=new A.r(12.5,39,0.6)
B.hnG=new A.r(140,62,3.6)
B.hnH=new A.r(0,3,0.9)
B.hnI=new A.r(0,-1.45,0.32)
B.hnJ=new A.r(9,0.7,15)
B.hnK=new A.r(3,36,10.6)
B.hnL=new A.r(25,10,0.2)
B.hnN=new A.r(0.14,8,0.3)
B.hnO=new A.r(3,0.6,0)
B.hnP=new A.r(11,15,0.3)
B.hnS=new A.r(0.6,0.12,0.03)
B.hnT=new A.r(-10.7,1.2,-6.4)
B.hnU=new A.r(-52,140,-60.6)
B.hnV=new A.r(-71.2,46.6,55)
B.hnW=new A.r(5,4.5,3)
B.hnX=new A.r(120,36,1.4)
B.hnY=new A.r(0,3.9,2.5)
B.aZz=new A.r(0,3.7,2.6)
B.ho0=new C.bQ("phase-chip",x.W)
B.ho1=new C.bQ("room-tray",x.W)
B.ho3=new C.bQ("screw-row",x.W)
B.ho5=new C.bQ("lessons-search-field",x.W)
B.hoa=new C.bQ("lessons-search",x.W)
B.hob=new C.bQ("tool-hint",x.W)
B.hoh=new C.bQ("tray-show-all",x.W)
B.hos=new C.bQ("turned-page-rotate",x.W)
B.hoC=new C.bQ("work-row",x.W)
B.hoZ=new A.ayg("bonded","The ground strap is still on the terminal block, so the neutral is joined to the metal frame of the appliance. On a 4-wire cord the strap must come off: the frame is grounded by the green wire, and the neutral carries current.",!0,!1,!1,"none","Take the metal ground strap off the terminal block.")
B.hpa=new A.lz("Everything works. Try it: open TVs or Phones, pick one and tap a finished outlet to plug it in.",D.ef,"")
B.hpb=new A.lz("The room is finished. Well done.",D.ef,"")
B.cus=w([3004],x.t)
B.hpc=new A.lz("Hang a ceiling box for the light: open Boxes, pick Ceiling box, and tap a lit joist.",B.cus,"ceiling")
B.hpd=new A.lz("Turn the power on to test everything: press the Breaker button.",D.ef,"breaker")
B.We=new A.Ga(0,"hot")
B.Wf=new A.Ga(1,"neutral")
B.Wg=new A.Ga(2,"ground")
B.aZU=new A.Ga(3,"unknown")
B.htr=new A.D_("dev:light","Ceiling light",D.mU)
B.ht4=new A.D_("dev:fan","Ceiling fan",B.aqy)
B.cmM=w([B.htr,B.ht4],x.aM)
B.hr2=new A.Qe("lights","Lights",D.mU,B.cmM)
B.ht0=new A.D_("outlet","Outlet box",N.P7)
B.hsL=new A.D_("switch","Switch box",E.pp)
B.hsN=new A.D_("ceiling","Ceiling box",D.pj)
B.d5X=w([B.ht0,B.hsL,B.hsN],x.aM)
B.hr3=new A.Qe("boxes","Boxes",N.P7,B.d5X)
B.eSb=new C.y(-20,46)
B.hsb=new A.AO(B.eSb,0,2.4,"Having the drink",!0,!1,!1,"")
B.eAs=new C.y(34,62)
B.hsc=new A.AO(B.eAs,3.141592653589793,2.2,"Picking up the remote",!1,!0,!1,"")
B.hsk=new A.aCa(null)
B.hDf=new A.f1W(0,"material")})();(function staticFields(){$.dl=0
$.ajO=!1
$.ajP=!0
$.hhS=!1
$.h4L=C.U(x.N,C.as("N_"))
$.h4K=C.U(x.N,C.as("aB<N_?>"))
$.h4J=C.aS(x.N)
$.icl=C.U(x.N,C.as("ai<+(r,r)>"))
$.icj=C.U(x.N,x.dg)
$.hxG=C.U(x.N,C.as("iF"))
$.HW=null
$.Et=null
$.blP=null
$.WH=null
$.ho5=null
$.fvS=C.U(x.S,C.as("ai<ks>"))
$.ai5="xbot"})();(function lazyInitializers(){var w=a.lazyFinal
w($,"iwH","hG4",()=>C.a5o())
w($,"iwV","hg9",()=>C.a5o())
w($,"iry","hDw",()=>new A.aU3($.aw()))
w($,"izs","bGk",()=>{var v,u,t=C.as("O<aU2>"),s=C.a([],t)
for(v=0;v<2;++v){u=v*9
D.d.v(s,C.a([A.h3V(v,175,u),A.h3V(v,612,u+14),A.h3V(v,1013,u+7)],t))}return s})
w($,"iz1","h35",()=>C.a([A.ht1(-80,80,400,565),A.ht1(-80,80,715,885)],C.as("O<bxV>")))
w($,"irz","aS6",()=>A.hJx())
w($,"izr","hHB",()=>{var v=C.a([A.ou("Wire a standard 120 volt receptacle: black to brass, white to silver, bare copper to green.",B.Sm,B.dtU,"outlet","",!0,B.IS,B.d04,!1,"Wall outlet",new A.fGk()),A.ou("A single-pole switch breaks the hot wire to the light: two black wires go on the two brass screws.",B.dfq,B.dgW,"switch","",!0,B.IS,B.cZs,!1,"Light switch",new A.fGl()),A.ou("A GFCI protects you near water. Power comes in on LINE. The LOAD screws (covered with tape) feed other outlets.",B.Sm,B.djV,"gfci","",!0,B.IS,B.dio,!1,"GFCI outlet",new A.fGm()),A.ou("Join the house wires to the fixture wires with wire nuts: black to black, white to white, ground to ground.",B.Sm,B.dap,"light","",!0,B.IS,B.dvB,!1,"Ceiling light",new A.fGn()),A.ou("A fan hangs from a strong fan-rated box. Join black, white and ground with wire nuts, then fasten the canopy.",B.Sm,B.dhL,"fan","",!0,B.IS,B.d6i,!1,"Ceiling fan",new A.fGo())],C.as("O<MQ>"))
D.d.v(v,$.h3b())
return v})
w($,"izt","h3b",()=>{var v="switch",u="outlet",t=C.a([A.ou("Breaks BOTH hot legs of a 240 volt circuit at once: water heaters and baseboard heat.",B.dyy,B.c94,"switch2p",v,!0,B.dB0,B.daB,!0,"Double-pole switch (240 V)",new A.fGp()),A.ou("One light, two switches. One COMMON screw and two TRAVELER screws; it pairs with a second three-way.",B.drP,B.d_O,"switch3",v,!0,B.dBh,B.dir,!0,"Three-way switch",new A.fGq()),A.ou("Sits in the middle of two three-way switches: two traveler wires in on one side, two out on the other.",B.dwY,B.dlq,"switch4",v,!0,B.dB1,B.dqD,!0,"Four-way switch",new A.fGr()),A.ou("Needs a NEUTRAL wire in the box as well: hot in, hot out to the light, neutral and ground.",B.d50,B.d7W,"switchsmart",v,!0,B.dBi,B.d5i,!0,"Smart, motion or timer switch",new A.fGs()),A.ou("Two switches in one device: one hot feed is split between them, and two separate lights come out.",B.cNE,B.doP,"switchcombo",v,!0,B.dD_,B.cAH,!0,"Combination (double) switch",new A.fGt()),A.ou("The tab between the brass screws is broken off: the top half is switched, the bottom half is always on.",B.dik,B.cA5,"split",u,!0,B.dBj,B.dnL,!0,"Split (half-switched) outlet",new A.fGu()),A.ou("Two hots, a neutral and a ground: the dryer 14-30, and the range and car charger 14-50.",B.a64,B.d3E,"v240four",u,!0,B.a6C,B.cS3,!0,"4-wire 240 V outlet (dryer, range, EV)",new A.fGv()),A.ou("Two hots and a neutral, with no separate ground: the old 10-30 and 10-50, from before 1996.",B.a5a,B.dxt,"v240three",u,!1,B.a6J,B.dwF,!0,"3-wire 240 V outlet (old dryer or range)",new A.fGw()),A.ou("Two hots and a ground, and no neutral at all: the 6-series outlets.",B.dvg,B.dfc,"v240only",u,!0,B.dBx,B.du_,!0,"240 V only outlet (window AC, welder)",new A.fGx()),A.ou("Hot and neutral as usual, but the ground goes on its own wire straight back to the panel: shops and offices.",B.dxh,B.dgk,"isolated",u,!0,B.dCq,B.dbJ,!0,"Isolated-ground outlet",new A.fGy())],C.as("O<MQ>"))
D.d.v(t,$.hHA())
return t})
w($,"izm","hHA",()=>C.a([A.ou("The dryer outlet of every new house: 30 amp, 240 volts. Two hots (X, Y), a neutral (W) and a separate ground (G).",B.a64,B.aBL,"dryer4","nema1430",!0,B.a6C,B.dnW,!0,"Dryer outlet, 4-wire (NEMA 14-30)",new A.fGd()),A.ou("The dryer outlet of older houses (before 1996): 30 amp, 240 volts. Two hots and a neutral that also grounds the dryer. No separate ground.",B.a5a,B.aCi,"dryer3","nema1030",!1,B.a6J,B.cVS,!0,"Dryer outlet, 3-wire (NEMA 10-30)",new A.fGe()),A.ou("The electric stove outlet of every new house: 50 amp, 240 volts. Two hots (X, Y), a neutral (W) and a separate ground (G). Also used for car chargers.",B.a64,B.aBL,"range4","nema1450",!0,B.a6C,B.dl4,!0,"Range outlet, 4-wire (NEMA 14-50)",new A.fGf()),A.ou("The electric stove outlet of older houses (before 1996): 50 amp, 240 volts. Two hots and a neutral that also grounds the range. No separate ground.",B.a5a,B.aCi,"range3","nema1050",!1,B.a6J,B.dl2,!0,"Range outlet, 3-wire (NEMA 10-50)",new A.fGg()),A.ou("A dedicated 120 volt, 20 amp outlet for the washer, with a T-shaped neutral slot. Near water, so it needs GFCI protection.",B.dp1,B.d3G,"washer","nema520",!0,B.dCp,B.diV,!0,"Washing machine outlet (NEMA 5-20)",new A.fGh()),A.ou("At the back of the appliance: black to the left terminal, white (neutral) to the middle one, red to the right one. The ground strap STAYS: it joins the neutral to the frame.",B.d_H,B.d8X,"cord3","terminal3",!1,B.dBO,B.dte,!0,"Dryer or range cord, 3-wire hookup",new A.fGi()),A.ou("At the back of the appliance: REMOVE the ground strap first, then black left, white (neutral) middle, red right, and the green ground wire to the frame.",B.dtS,B.d5u,"cord4","terminal4",!0,B.dBo,B.dcP,!0,"Dryer or range cord, 4-wire hookup",new A.fGj())],C.as("O<MQ>")))
w($,"izE","Hy",()=>{var v,u=C.a([],x.n)
for(v=0;v<10;++v)u.push(-72+16*v)
return u})
w($,"izo","k2",()=>A.i2L())
w($,"izn","xl",()=>A.i2K(A.hyB()))
w($,"izF","z9",()=>A.i2O())
w($,"ix_","h2U",()=>{var v,u,t,s,r,q,p,o,n=x.aM,m=C.a([],n)
for(v=x.s,u=C.a(["outlet","gfci"],v),D.d.v(u,B.aBM),D.d.v(u,B.aAA),t=u.length,s=0;s<u.length;u.length===t||(0,C.J)(u),++s){r=u[s]
m.push(A.biu("dev:"+r,A.x6(r),B.CR))}m=A.bct("outlets","Outlets",B.CR,m)
u=C.a([],n)
for(v=C.a(["switch"],v),D.d.v(v,B.aC5),t=v.length,s=0;s<v.length;v.length===t||(0,C.J)(v),++s){r=v[s]
u.push(A.biu("dev:"+r,A.x6(r),E.pp))}v=A.bct("switches","Switches",E.pp,u)
u=C.a([],n)
for(s=0;s<5;++s){q=B.a5V[s]
u.push(A.biu("app:"+q.a,q.b,Q.HM))}u=A.bct("tvs","TVs",Q.HM,u)
t=C.a([],n)
for(s=0;s<3;++s){q=B.a4d[s]
p=q.a
o=p==="tablet"?B.bR5:D.zg
t.push(A.biu("app:"+p,q.b,o))}t=A.bct("phones","Phones",D.zg,t)
n=C.a([],n)
for(s=0;s<6;++s){q=B.aAU[s]
n.push(A.biu("app:"+q.a,q.b,W.Pp))}return C.a([B.hr3,m,v,B.hr2,u,t,A.bct("appliances","Appliances",W.Pp,n)],C.as("O<Qe>"))})})()};
(a=>{a["UqNkLZEJC/vmSRILhHoiNZQmtEE="]=a.current})($__dart_deferred_initializers__);