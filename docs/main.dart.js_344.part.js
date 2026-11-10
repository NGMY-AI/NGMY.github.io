((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,C,D,A1,A9,Aa,Ab,H,Q,I,A2,Ac,Ad,A3,Ae,R,Af,M,A4,S,Ag,X,Ah,Y,A5,Ai,Z,A_,Aj,Ak,G,Al,T,U,A0,Am,A6,A7,V,A8,An,N,A={f_M:function f_M(d,e){this.a=d
this.b=e},a9P:function a9P(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.at=g
_.CW=h
_.a=i
_.$ti=j},aej:function aej(d,e){var _=this
_.d=null
_.e=$
_.Gd$=d
_.c=_.a=null
_.$ti=e},bpF:function bpF(d){this.a=d},aNW:function aNW(){},
pB(d,e,f){var w=d.a,v=d.b,u=d.c
return new A.q(w+(e.a-w)*f,v+(e.b-v)*f,u+(e.c-u)*f)},
vG(d,e){var w=Math.cos(e),v=Math.sin(e),u=d.a,t=d.c
return new A.q(u*w+t*v,d.b,-u*v+t*w)},
nE(d,e,f,g){var w,v,u,t,s,r,q,p,o=new A.h_w(Math.cos(e),Math.sin(e)),n=new A.h_u(f),m=new A.h_v(n,e,o,g),l=new A.h_t(n,e,o),k=C.a([],x.z)
for(w=d.length,v=x.o,u=0;u<d.length;d.length===w||(0,C.L)(d),++u){t=d[u]
s=C.a([],v)
for(r=t.a,q=r.length,p=0;p<r.length;r.length===q||(0,C.L)(r),++p)s.push(m.$1(r[p]))
k.push(new A.kq(s,l.$1(t.b),t.c,t.d,t.e,t.f,t.r,t.w,t.x,t.y,t.z))}return k},
Dl(d,e,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
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
l=Math.min(e,n.guZ()*0.5)
k=Math.min(e,m.guZ()*0.5)
j=n.gmV(0)
i=new A.q(q-j.a*l,p-j.b*l,o-j.c*l)
j=m.gmV(0)
h=new A.q(q+j.a*k,p+j.b*k,o+j.c*k)
for(g=0;g<=a0;++g){f=g/a0
w.push(A.pB(A.pB(i,s,f),A.pB(s,h,f),f))}}w.push(D.d.gak(d))
return w},
aib(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
if(a3.length<3)return a3
w=C.a([],x.o)
for(v=0;u=v+1,t=a3.length,u<t;v=u){s=v===0?a3[v]:a3[v-1]
r=a3[v]
q=a3[u]
p=v+2
o=p<t?a3[p]:q
for(t=s.a,p=r.a,n=q.a,m=o.a,l=s.b,k=r.b,j=q.b,i=o.b,h=s.c,g=r.c,f=q.c,e=o.c,d=0;d<a4;++d){a0=d/a4
a1=a0*a0
a2=new A.h_i(a0,a1,a1*a0)
w.push(new A.q(a2.$4(t,p,n,m),a2.$4(l,k,j,i),a2.$4(h,g,f,e)))}}w.push(D.d.gak(a3))
return w},
hG6(){if($.hf5)return
$.hf5=!0
C.az().bJ(new A.bJW(),x.P).eK(new A.bJX())},
hf6(){C.az().bJ(new A.bJY(),x.P).eK(new A.bJZ())},
i01(d){var w,v,u,t,s,r,q,p,o,n
for(w=d.length,v=!0,u=!0,t=0;t<w;++t)if(d[t].c>=0.5)u=!1
else v=!1
if(v)return d
if(u)return B.nC
s=C.a([],x.o)
for(r=0;w=d.length,r<w;){q=d[r];++r
p=d[r%w]
w=q.c
o=w>=0.5
n=p.c
if(o)s.push(q)
if(o!==n>=0.5)s.push(A.pB(q,p,(0.5-w)/(n-w)))}return s},
h8Z(a2,a3,a4){var w,v,u,t,s,r,q,p=J.a6(a2),o=p.h(a2,0).a,n=p.h(a2,0).b,m=p.h(a2,1).a,l=p.h(a2,1).b,k=p.h(a2,2).a,j=p.h(a2,2).b,i=p.h(a2,3).a,h=p.h(a2,3).b,g=m-k,f=i-k,e=o-m+k-i,d=l-j,a0=h-j,a1=n-l+j-h
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
i0U(d,e,f,g){var w,v=e.d,u=e.e,t=A.h8Z(f,v,u)
if(t==null)return
w=d.a
J.bl(w.save())
d.aw(0,t.a)
w.clipRect(C.bG(new C.a3(0,0,v,0+u)),$.my()[1],!0)
e.c.$3(d,new C.av(v,u),g)
w.restore()},
i0V(d,e,f,g,h,i){var w,v,u,t,s,r,q,p,o,n,m,l,k=e.d,j=e.e
$.S()
w=new C.p2()
e.c.$3(C.z9(w,null),new C.av(k,j),i)
v=w.ni()
u=k/g
t=j/h
for(s=f.length,r=d.a,q=0+u,p=0+t,o=0;o<f.length;f.length===s||(0,C.L)(f),++o){n=f[o]
m=A.h8Z(n.c,u,t)
if(m==null)continue
J.bl(r.save())
l=m.a
r.concat(C.h_o(C.Hb(l)))
r.clipRect(C.bG(new C.a3(0,0,q,p)),$.my()[1],!0)
r.translate(-n.a*u,-n.b*t)
n=v.b
n===$&&C.c()
n=n.a
n===$&&C.c()
n=n.a
n.toString
r.drawPicture(n)
r.restore()}v.q()},
h5F(d,e,f,g,h,i,j,k,l,m){return new A.avD(l,e,h,k,i,f,g,d,m,j,null)},
i_f(a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=$.hdq()
C.E4(a4)
w=a3.a.get(a4)
if(w!=null)return w
v=new A.PR(!0,C.a([],x.z),C.a([],x.t))
a3=x.S
u=x.gf
t=C.U(a3,u)
s=C.U(a3,u)
r=a4.a
for(q=0;q<r.length;++q){p=r[q]
a3=p.z
u=a3!==0
if(u&&s.h(0,a3)!=null){s.h(0,a3).rZ(0,p,q)
continue}for(o=p.a,n=o.length,m=1/0,l=-1/0,k=1/0,j=-1/0,i=1/0,h=-1/0,g=0;g<n;++g){f=o[g]
e=f.a
if(e<m)m=e
if(e>l)l=e
d=f.b
if(d<k)k=d
if(d>j)j=d
a0=f.c
if(a0<i)i=a0
if(a0>h)h=a0}if(l-m>90||j-k>90||h-i>90){v.rZ(0,p,q)
continue}a1=t.c3(0,((D.k.bf(m/60)+4096)*8192+(D.k.bf(k/60)+4096))*8192+(D.k.bf(i/60)+4096),new A.fkL())
a1.rZ(0,p,q)
if(u)s.n(0,a3,a1)}a3=C.a([v],x.dF)
D.d.v(a3,new C.bd(t,t.$ti.k("bd<2>")))
a2=new A.cLG(a3)
$.hdq().n(0,a4,a2)
return a2},
b7i(d,e,f,g,h,i,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9){var w,v,u,t,s,r,q,p,o,n=(a1-g)/2,m=h-e,l=Math.max(a7*2,m*0.3),k=m-l,j=a6-a5/2
m=a1/2-n/2
d.al5(new A.q(a8-m,j,a9),new A.q(n,a5,h),a0,0.5,4,a4)
d.al5(new A.q(a8+m,j,a9),new A.q(n,a5,h),a0,0.5,8,a4)
m=h/2
w=a9-m
d.al5(new A.q(a8,j,w+k/2),new A.q(g,a5,k),a0,0.5,13,a4)
d.al5(new A.q(a8,j,a9+m-l/2),new A.q(g,a5,l),a0,0.5,14,a4)
m=e/2
v=w+k+m
u=a6-a2/2
w=g/2
t=a7/2
d.aQ(new A.q(a8-w+t,u,v),new A.q(a7,a2,e),f,0.7)
d.aQ(new A.q(a8+w-t,u,v),new A.q(a7,a2,e),f,0.7)
w=v-m
d.aQ(new A.q(a8,u,w+t),new A.q(g,a2,a7),f,0.7)
s=a6-a2
r=C.ar(f,D.dn,0.18)
r.toString
d.aQ(new A.q(a8,s+t,v),new A.q(g,a7,e),r,0.6)
d.aQ(new A.q(a8,u,v+m-t),new A.q(g,a2,a7),f,0.7)
d.e=0.5
s+=a7
t=Math.min(g,e)
d.dv(new A.q(a8,s,v),new A.q(a8,s+0.05,v),t*0.09,B.he,14)
if(!a3){d.e=0
return}q=w-k*0.38
m=t*0.08
w=t*0.2
d.aQ(new A.q(a8,a6+t*0.04,q),new A.q(t*0.65,m,w),i,0.9)
s=a6+t*0.5
r=a6+t*0.62
d.j9(A.Dl(C.a([new A.q(a8,a6+m,q),new A.q(a8,s,q),new A.q(a8,r,q+t*0.12),new A.q(a8,r,q+t*0.38),new A.q(a8,s,q+t*0.42)],x.o),t*0.1,6),t*0.045,i,!0,0.9,8)
for(m=a6+w,w=t*0.035,s=a6+t*0.24,r=t*0.075,p=0;p<2;++p){o=a8+F.hq[p]*t*0.3
d.dm(new A.q(o,a6,q),new A.q(o,m,q),w,i,0.9,8)
d.dm(new A.q(o,m,q),new A.q(o,s,q),r,i,0.9,10)}d.e=0},
q:function q(d,e,f){this.a=d
this.b=e
this.c=f},
kq:function kq(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
cV:function cV(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
hh:function hh(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
tU:function tU(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fq:function fq(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
fg:function fg(d){var _=this
_.a=d
_.c=_.b=0
_.d=1
_.e=0
_.f=2
_.r=!1
_.x=_.w=0},
c0g:function c0g(d,e){this.a=d
this.b=e},
c0h:function c0h(d){this.a=d},
c0f:function c0f(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
c0i:function c0i(d,e,f){this.a=d
this.b=e
this.c=f},
c0e:function c0e(d,e){this.a=d
this.b=e},
c0j:function c0j(d,e,f){this.a=d
this.b=e
this.c=f},
h_w:function h_w(d,e){this.a=d
this.b=e},
h_u:function h_u(d){this.a=d},
h_v:function h_v(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
h_t:function h_t(d,e,f){this.a=d
this.b=e
this.c=f},
h_i:function h_i(d,e,f){this.a=d
this.b=e
this.c=f},
xj:function xj(d,e,f,g,h){var _=this
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
bJW:function bJW(){},
bJX:function bJX(){},
bJY:function bJY(){},
bJZ:function bJZ(){},
bJT:function bJT(){},
bK0:function bK0(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bK_:function bK_(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bJV:function bJV(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bJU:function bJU(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bVe:function bVe(d){this.a=d},
b6B:function b6B(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
ctX:function ctX(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ctY:function ctY(d,e){this.a=d
this.b=e},
ctW:function ctW(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0,a1,a2,a3,a4,a5,a6){var _=this
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
ctQ:function ctQ(){},
ctR:function ctR(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
ctP:function ctP(d){this.a=d},
ctS:function ctS(){},
ctT:function ctT(d,e,f){this.a=d
this.b=e
this.c=f},
ctU:function ctU(){},
ctV:function ctV(){},
cDJ:function cDJ(d,e){this.a=d
this.b=e},
G5:function G5(d,e,f,g,h,i,j,k,l){var _=this
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
avD:function avD(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
bsf:function bsf(d,e,f,g,h,i,j){var _=this
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
f3i:function f3i(d){this.a=d},
f3h:function f3h(d){this.a=d},
f3f:function f3f(d){this.a=d},
f3g:function f3g(d){this.a=d},
f39:function f39(d){this.a=d},
f3a:function f3a(d,e){this.a=d
this.b=e},
f3c:function f3c(d){this.a=d},
f3d:function f3d(d){this.a=d},
f3b:function f3b(d){this.a=d},
f3e:function f3e(d){this.a=d},
PR:function PR(d,e,f){var _=this
_.a=d
_.b=e
_.c=f
_.d=1/0
_.e=-1/0
_.f=1/0
_.r=-1/0
_.w=1/0
_.x=-1/0},
cLG:function cLG(d){this.a=d},
fkL:function fkL(){},
aO4:function aO4(){},
bU8(d){var w,v,u=$.h2e.h(0,d)
if(u!=null)return C.f8(u,x.U)
w=B.Sl.h(0,d)
if(w==null)return C.f8(null,x.U)
v=$.h2d.h(0,d)
if(v==null){v=new A.bU9(w,d).$0()
$.h2d.n(0,d,v)}return v},
aWo(d){var w=0,v=C.j(x.H),u
var $async$aWo=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:w=2
return C.b(A.bU8(d),$async$aWo)
case 2:u=J.aW(B.Sl.gev(B.Sl))
case 3:if(!u.C()){w=4
break}w=5
return C.b(A.bU8(u.gS(u)),$async$aWo)
case 5:w=3
break
case 4:return C.h(null,v)}})
return C.i($async$aWo,v)},
hJd(d){var w,v,u=new Float64Array(d*16)
for(w=0;w<d;++w){v=w*16
u[v+15]=1
u[v+10]=1
u[v+5]=1
u[v]=1}return u},
hgF(d,e,f){var w,v,u,t
if(d>e){w=d
v=e}else{w=e
v=d}if(w>f){u=w
w=f}else u=f
if(v>w){t=w
w=v
v=t}return(v*65536+w)*65536+u},
hJe(d,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=d.c,g=d.b===1,f=g?4:3,e=h.length
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
hgG(d,a0,a1,a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
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
i8K(d,e){var w=D.o.aD(d,16)&255,v=D.o.aD(d,8)&255,u=d&255,t=0.35+(0.299*w+0.587*v+0.114*u)/255,s=new A.fyA()
return C.a_(255,s.$2(w,e.gb6(e)*255*t),s.$2(v,e.gbc()*255*t),s.$2(u,e.gb9(e)*255*t))},
bch:function bch(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
bcC:function bcC(d,e){this.b=d
this.c=e},
bhL:function bhL(d,e,f){this.a=d
this.b=e
this.c=f},
dpC:function dpC(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=$},
MD:function MD(d,e,f,g,h){var _=this
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
bU9:function bU9(d,e){this.a=d
this.b=e},
bU0:function bU0(){},
bTV:function bTV(d,e){this.a=d
this.b=e},
bTU:function bTU(){},
bU2:function bU2(d,e,f){this.a=d
this.b=e
this.c=f},
bU3:function bU3(d){this.a=d},
bU4:function bU4(d){this.a=d},
bU1:function bU1(d,e){this.a=d
this.b=e},
bTZ:function bTZ(d){this.a=d},
bU_:function bU_(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
bU7:function bU7(d){this.a=d},
bU5:function bU5(){},
bU6:function bU6(d){this.a=d},
bUa:function bUa(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
bTW:function bTW(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
bTY:function bTY(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bTX:function bTX(d,e){this.a=d
this.b=e},
fyA:function fyA(){},
dv9:function dv9(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
djL:function djL(d,e){this.a=d
this.b=e},
hFN(){var w,v=J.e_(6,x.ff)
for(w=0;w<6;++w)v[w]=new A.aTe()
return new A.bId(v)},
ag_(d){return A.i0t(d)},
i0t(d){var w=0,v=C.j(x.eT),u,t=2,s=[],r,q,p,o,n
var $async$ag_=C.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:if(d==null){u=null
w=1
break}t=4
w=7
return C.b(C.fDF(d,null),$async$ag_)
case 7:r=f
n=J
w=8
return C.b(r.lM(),$async$ag_)
case 8:q=n.a3g(f)
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
return C.i($async$ag_,v)},
hzh(a5,a6,a7,a8,a9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
if(a8.a){w=a7/8
if(a9===0){v=D.k.bf(w)
A.mV(a5,a6,a7,D.o.F(v,2)===0?0:1+D.o.ao(v,2))}else A.mV(a5,a6,a7,a9+1+D.k.bf(w))
return}u=B.a5s[a8.e]
w=a6.a
t=a6.b
s=0+t
r=new C.a3(0,0,0+w,s)
$.S()
q=C.I()
q.sam(new C.a9(D.a5,D.a8,D.x,C.a([u.b,u.c],x.O),null,null).aA(0,r))
a5.aP(r,q)
q=t*0.04
p=r.cr(-q)
o=C.I()
o.b=D.a9
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
g=C.bK(new C.t(i/2,h/2),o/v,j/v)
j=a5.a
J.bl(j.save())
o=t*0.05
j.clipRRect(C.e7(C.bs(k,new C.aP(o,o))),$.nF(),!0)
o=C.I()
o.Q=D.ci
a5.oC(l,g,k,o)
j.restore()
f=p+m*0.8}else f=m
e=a8.w
if(e==null)e=$.Wa
p=t*0.3
o=f+p
p=m+p
d=new C.a3(f,m,o,p)
j=d.gbL()
o-=f
i=C.I()
i.r=B.Fk.gp(0)
a5.ad(j,o/2,i)
if(e!=null){j=e.c
i=e.d
v=Math.min(o*0.8/j,(p-m)*0.8/i)
o=C.bK(d.gbL(),i*v,j*v)
h=C.I()
h.Q=D.ci
a5.oC(e,new C.a3(0,0,j,i),o,h)}o=new A.fRr()
a0=w-f-m
j=u.d
a1=o.$4(a8.b,t*0.17,j,a0)
a1.a3(a5,new C.t(f,p+q))
a2=o.$5$w(a8.c,t*0.09,n,a0,D.U)
n=a1.b.a.c
a2.a3(a5,new C.t(f,p+t*0.06+n.gbb(n)))
a3=o.$6$lines$w(a8.d,t*0.08,j.j(0.85),a0,1,D.H)
j=a3.b
o=j.c
j=j.a.c
a3.a3(a5,new C.t(w-m-o,t-m-j.gbb(j)))
a4=(D.k.F(a7*0.35,1.6)-0.3)*w
j=a5.a
J.bl(j.save())
j.clipRect(C.bG(r),$.my()[1],!0)
t=C.I()
t.r=D.c.j(0.1).gp(0)
a5.aP(new C.a3(a4,0,a4+w*0.1,s),t)
j.restore()},
ia2(d,e){var w,v,u,t,s=d.w
if(s.length===0){s=d.e
w=d.r
return new C.cw([-s/2,s/2,w+d.f,w])}v=s[e]
s=v.e
u=d.e*s
t=d.r+v.d
return new C.cw([-u/2,u/2,t+d.f*s,t])},
bC_(d,e,f,g){var w,v,u,t,s,r,q,p,o=new C.a3(0,0,0+e.a,0+e.b)
$.S()
w=C.I()
w.r=B.bjk.gp(0)
d.aP(o,w)
v=o.cr(-(e.gdE()*0.06))
w=d.a
J.bl(w.save())
w.clipRect(C.bG(v),$.my()[1],!0)
u=v.a
t=v.b
w.translate(u,t)
u=v.c-u
t=v.d-t
if((g&1)===0){s=0+u
r=0+t
q=C.I()
q.sam(B.c6E.aA(0,new C.a3(0,0,s,r)))
d.aP(new C.a3(0,0,s,r),q)
p=t*0.82
J.bl(w.save())
w.translate((u-p)/2,(t-p)/2)
A.hzm(d,new C.av(p,p),f)
w.restore()}else A.mV(d,new C.av(u,t),f,g)
w.restore()},
i56(d,e,f){var w,v,u,t,s=e.a,r=e.b
$.S()
w=C.I()
w.r=B.aiY.gp(0)
d.aP(new C.a3(0,0,0+s,0+r),w)
v=C.I()
v.r=L.ahI.gp(0)
w=s*0.12
u=r*0.07
t=w+s*0.76
d.aP(new C.a3(w,u,t,u+r*0.38),v)
u=r*0.52
d.aP(new C.a3(w,u,t,u+r*0.4),v)
u=C.I()
u.r=F.f8.gp(0)
d.ad(new C.t(s*0.82,r*0.5),s*0.05,u)},
h9E(d9,e0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6=x.z,d7=C.a([],d6),d8=new A.fg(d7)
d8.f=0
d8.Cn(B.heK,B.h3P,B.h3O,B.heJ,B.blm,B.e8)
d8.f=1
d8.Cn(B.h8N,B.h6u,B.hgi,B.h8d,B.My,B.e8)
for(w=-2100;w<2100;w+=90){v=w+45
d8.Cn(new A.q(w,0.8,637),new A.q(v,0.8,637),new A.q(v,0.8,643),new A.q(w,0.8,643),L.Mc,B.e8)}d8.f=2
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
case"screen":n=D.av
o=6
break
case"roof":n=D.ax
break
case"gate":n=D.d7
break
case"duo":n=D.b8
break
case"line3":n=D.be
break
case"far3":n=D.aA
break
case"skyline":n=D.bq
break
case"lines6":n=D.aP
break
case"scatter":n=D.b8
break
default:n=F.f8}m=p==="roof"
l=m?3:2
k=q?720:900
j=k*t/u
i=C.a([],x.a)
r=q?r:1
for(h=e0.b,g=x.o,f=-o,e=f-0.8,d=p==="highway",a0=f/2,f=p!=="neon",a1=a0-0.2,a2=p==="screen",a3=s-16,a4=(14+s-7)/2,a5=s-21,a6=s-7,a7=0;a7<r;++a7){a8=q?v[a7]:B.acH
a9=a8.e
b0=u*a9
b1=t*a9
b2=new A.fzZ(a8)
b3=C.a([],d6)
b4=new A.fg(b3)
b4.f=l
b5=C.a([],d6)
b6=new A.fg(b5)
b6.f=l
b7=A.ia2(d9,a7).a
b8=b7[0]
b9=b7[1]
c0=b7[2]
c1=b7[3]
c2=(b8+b9)/2
c3=(c0+c1)/2
b7=b2.$1(new A.q(c2,c3,a1))
c4=!f||a2?D.av:D.cr
c5=a8.c
b4.wu(b7,new A.q(b0+16,b1+16,o),c4,0.2,c5)
c6=7*Math.max(1,a9*0.8)
c4=b0+14
b6.wu(b2.$1(new A.q(c2,c0+3,3)),new A.q(c4,c6,8),n,0.4,c5)
b6.wu(b2.$1(new A.q(c2,c1-3,3)),new A.q(c4,c6,8),n,0.4,c5)
b7=b1+14
b6.wu(b2.$1(new A.q(b8-3,c3,3)),new A.q(c6,b7,8),n,0.4,c5)
b6.wu(b2.$1(new A.q(b9+3,c3,3)),new A.q(c6,b7,8),n,0.4,c5)
D.d.v(d7,b3)
D.d.v(d7,b5)
b5=C.a([],d6)
c7=new A.fg(b5)
c8=Math.max(6,b0*0.018)
c9=new A.fA_(i,l)
switch(q?"sep":p){case"tower":c7.dv(new A.q(0,0,a0),new A.q(0,a6,a0),c8*1.9,D.hk,12)
c7.dv(new A.q(0,0,a0),new A.q(0,14,a0),c8*2.8,D.av,12)
break
case"screen":c7.aG(new A.q(0,7,-10),new A.q(b0*0.6,14,70),D.av)
c7.aG(new A.q(0,a4,a0),new A.q(60,a5,14),D.hk)
break
case"roof":c7.lU(B.h_E,B.h5J,B.bho,0.1,4)
c7.lU(B.h0i,B.h5P,D.dn,0.15,4)
c7.hj(B.h_Y,B.h5O,D.dn,4)
c7.lU(B.heY,B.h2W,B.biC,0.1,2)
c7.hj(B.heX,B.h37,D.dn,2)
c7.aG(B.h3j,B.h4D,B.nX)
c7.aG(B.h_s,B.h1G,D.el)
c9.$6$px(B.hcY,0,210,126,new A.fzS(),360)
c9.$6$px(B.he3,0,210,126,new A.fzT(),360)
c9.$6$px(B.h9y,0,72,116,A.ijk(),140)
c9.$6$px(B.hhA,0,130,80,new A.fzU(),300)
for(d0=0;d0<3;++d0){d1=-60-d0*90
c9.$6$px(new A.q(310.8,140,d1),1.5707963267948966,80,64,new A.fzV(d0),240)
c9.$6$px(new A.q(310.8,55,d1),1.5707963267948966,60,60,A.hc4(),200)}for(d0=0;d0<2;++d0){d1=-65-d0*110
c9.$6$px(new A.q(-490.8,95,d1),-1.5707963267948966,90,60,new A.fzW(d0),240)
c9.$6$px(new A.q(-490.8,40,d1),-1.5707963267948966,50,50,A.hc4(),180)}c9.$6$px(new A.q(0,100,-285.8),3.141592653589793,580,170,A.hz8(),900)
break
case"gate":for(b3=b0/2+25,b7=s+b1,c4=b7+26,c5=c8*1.6,d2=0;d2<2;++d2){d3=F.hq[d2]*b3
c7.dv(new A.q(d3,0,a0),new A.q(d3,c4,a0),c5,D.hk,12)}c7.aQ(new A.q(0,b7+17,a0),new A.q(b0+80,18,22),D.hk,0.2)
break
default:for(b3=s+a8.d-7,d2=0;d2<2;++d2){b7=F.hq[d2]*b0*0.3
c7.dv(b2.$1(new A.q(b7,0,a0)),b2.$1(new A.q(b7,b3,a0)),c8,D.hk,10)}if(d)c7.aG(new A.q(0,a3,14),new A.q(c4,3,24),D.hk)}D.d.v(d7,b5)
d4=h[a7]
i.push(new A.fq(C.a([b2.$1(new A.q(b8,c0,0.8)),b2.$1(new A.q(b9,c0,0.8)),b2.$1(new A.q(b9,c1,0.8)),b2.$1(new A.q(b8,c1,0.8))],g),0,new A.fzX(d4,a7),k,j,60,l,0,!1))
i.push(new A.fq(C.a([b2.$1(new A.q(b9,c0,e)),b2.$1(new A.q(b8,c0,e)),b2.$1(new A.q(b8,c1,e)),b2.$1(new A.q(b9,c1,e))],g),0,new A.fzY(d4,a7),k,j,60,l,0,!1))}d6=C.a([],d6)
d5=new A.fg(d6)
for(d2=0;d2<9;++d2){v=B.d33[d2]
w=v.a
d1=v.b
if(m&&d1>200)continue
d5.dv(new A.q(w,0,d1),new A.q(w,55,d1),7,B.qa,6)
d5.ee(new A.q(w,98,d1),46,E.XE,3,6)}for(d2=0;d2<6;++d2){w=B.dt1[d2]
d5.dv(new A.q(w,0,580),new A.q(w,90,580),3,D.hk,5)
d5.ee(new A.q(w,95,580),8,B.o8,3,6)}D.d.v(d7,d6)
return new A.tU(d7,B.Sq,B.zy,i,null,6000)},
hry(d){return d*d*(3-2*d)},
flT(d,e,f,g,h){var w=new A.flU(h)
return new A.q(w.$4(d.a,e.a,f.a,g.a),w.$4(d.b,e.b,f.b,g.b),w.$4(d.c,e.c,f.c,g.c))},
hsv(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=D.k.E(e,0,30)
if(f==null){w=C.a([],x.n)
for(v=J.a6(d),u=0;u<v.gL(d);++u)w.push(30*u/(v.gL(d)-1))
t=w}else t=f
w=J.a6(d)
v=J.a6(t)
s=0
for(;;){r=s+2
if(!(r<w.gL(d)&&v.h(t,s+1)<=m))break;++s}w=s+1
q=A.hry(D.k.E((m-v.h(t,s))/(v.h(t,w)-v.h(t,s)),0,1))
v=new A.fpi(d)
p=s-1
o=A.flT(v.$1(p).a,v.$1(s).a,v.$1(w).a,v.$1(r).a,q)
n=A.flT(v.$1(p).b,v.$1(s).b,v.$1(w).b,v.$1(r).b,q)
r=Math.sin(m*1.3)
v=Math.sin(m*1.9)
w=Math.cos(m*1.1)
return new C.z(new A.q(o.a+r*3,Math.max(o.b+v*2.5,18),o.c+w*3),n)},
i8S(d){return $.i8R.c3(0,d.a,new A.fyG(d))},
huZ(d){return $.i8T.c3(0,d.a,new A.fyD(d))},
ia1(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=d.a
if(i==="scatter")return A.hsv(B.dgY,e,null)
if(d.w.length!==0)return A.hsv(A.huZ(d),e,A.i8S(d))
w=B.dyO.h(0,i)
if(w==null)w=B.aPV
v=B.cwH[w.a]
u=w.b?-1:1
t=new A.q(d.ga4z(0),d.r+d.gGQ()/2,d.ga4B())
s=new A.fzK(t,u,d)
r=new A.fzL(t,u,d)
q=D.k.E(e,0,30)
i=v.length
p=0
for(;;){o=p+2
if(!(o<i&&v[p+1].a<=q))break;++p}i=v[p].a
n=p+1
m=A.hry(D.k.E((q-i)/(v[n].a-i),0,1))
i=new A.fzM(v)
l=p-1
k=A.flT(s.$1(i.$1(l)),s.$1(i.$1(p)),s.$1(i.$1(n)),s.$1(i.$1(o)),m)
j=A.flT(r.$1(i.$1(l)),r.$1(i.$1(p)),r.$1(i.$1(n)),r.$1(i.$1(o)),m)
return new C.z(new A.q(k.a,Math.max(k.b,18),k.c),j)},
lI:function lI(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
rd:function rd(d,e,f,g,h,i,j,k,l,m){var _=this
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
bIf:function bIf(d){this.a=d},
Hq:function Hq(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
aTe:function aTe(){var _=this
_.a=!0
_.b="NEW GLOBAL MOVEMENT FOR YOUTH"
_.c="Videos, slides, blogs and books."
_.d="ngmy.org"
_.e=0
_.x=_.w=_.r=_.f=null},
bId:function bId(d){this.a="highway"
this.b=d},
bIe:function bIe(d){this.a=d},
fRr:function fRr(){},
fzZ:function fzZ(d){this.a=d},
fA_:function fA_(d,e){this.a=d
this.b=e},
fA0:function fA0(d,e){this.a=d
this.b=e},
fzS:function fzS(){},
fzT:function fzT(){},
fzU:function fzU(){},
fzV:function fzV(d){this.a=d},
fzW:function fzW(d){this.a=d},
fzX:function fzX(d,e){this.a=d
this.b=e},
fzY:function fzY(d,e){this.a=d
this.b=e},
ho:function ho(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
flU:function flU(d){this.a=d},
fpi:function fpi(d){this.a=d},
fyG:function fyG(d){this.a=d},
fyF:function fyF(){},
fyD:function fyD(d){this.a=d},
fyE:function fyE(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fzK:function fzK(d,e,f){this.a=d
this.b=e
this.c=f},
fzL:function fzL(d,e,f){this.a=d
this.b=e
this.c=f},
fzM:function fzM(d){this.a=d},
aoN:function aoN(d){this.a=d},
aoO:function aoO(d,e){var _=this
_.d=d
_.r=_.f=_.e=$
_.w=e
_.x=-1
_.y=!1
_.z=""
_.c=_.a=null},
c4h:function c4h(d){this.a=d},
c4f:function c4f(d){this.a=d},
c4e:function c4e(){},
c42:function c42(d){this.a=d},
c48:function c48(d,e){this.a=d
this.b=e},
c4g:function c4g(d){this.a=d},
c45:function c45(d,e){this.a=d
this.b=e},
c44:function c44(d){this.a=d},
c3D:function c3D(){},
c43:function c43(d){this.a=d},
c47:function c47(d){this.a=d},
c46:function c46(d,e,f){this.a=d
this.b=e
this.c=f},
c41:function c41(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
c40:function c40(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
c3Y:function c3Y(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
c3Z:function c3Z(d,e){this.a=d
this.b=e},
c3T:function c3T(d,e,f){this.a=d
this.b=e
this.c=f},
c4_:function c4_(d){this.a=d},
c3W:function c3W(d,e){this.a=d
this.b=e},
c3V:function c3V(){},
c3X:function c3X(d,e){this.a=d
this.b=e},
c3U:function c3U(){},
c3I:function c3I(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
c3H:function c3H(){},
c3J:function c3J(d){this.a=d},
c3K:function c3K(d){this.a=d},
c3L:function c3L(d){this.a=d},
c3M:function c3M(d,e){this.a=d
this.b=e},
c3N:function c3N(d,e,f){this.a=d
this.b=e
this.c=f},
c3O:function c3O(d,e){this.a=d
this.b=e},
c3P:function c3P(d,e,f){this.a=d
this.b=e
this.c=f},
c3Q:function c3Q(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
c3G:function c3G(){},
c3R:function c3R(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
c3E:function c3E(){},
c3F:function c3F(){},
c3S:function c3S(d){this.a=d},
c4b:function c4b(d){this.a=d},
c4c:function c4c(d){this.a=d},
c4a:function c4a(d){this.a=d},
c4d:function c4d(d){this.a=d},
c49:function c49(d){this.a=d},
h9u(d,e,f,g){var w,v,u,t=null,s=e.r
s=s==null?t:D.k.V(s)
w=D.k.V(f)
v=e.b
v=v==null?t:v.l()
u=d+"|"+C.w(s)+"|"+w+"|"+C.w(v)
v=$.huV.h(0,u)
if(v==null){s=C.fy(t,t,g,t,C.cS(t,t,t,t,t,t,t,t,t,e,d),D.a4,D.bY,t,D.dA,D.bW)
s.o_(f)
$.huV.n(0,u,s)}else s=v
return s},
mV(a5,a6,a7,a8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4=D.o.F(a8,17)
if(a4===0){A.fRy(a5,a6,a7,0)
w=a6.a
v=(D.k.F(a7*0.35,1.6)-0.3)*w
u=a5.a
J.bl(u.save())
t=0+a6.b
u.clipRect(C.bG(new C.a3(0,0,0+w,t)),$.my()[1],!0)
$.S()
s=C.I()
s.r=D.c.j(0.12).gp(0)
a5.aP(new C.a3(v,0,v+w*0.12,t),s)
u.restore()
return}if(a4>=8){K.RZ(a5,a6,a4-8,a7)
return}r=B.cY6[a4-1]
w=a6.a
u=a6.b
q=new C.a3(0,0,0+w,0+u)
t=$.S()
s=C.I()
s.sam(new C.a9(D.ay,D.aE,D.x,C.a([r.c,r.d],x.O),a3,a3).aA(0,q))
a5.aP(q,s)
s=a5.a
J.bl(s.save())
s.clipRect(C.bG(q),$.my()[1],!0)
p=C.I()
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
n=C.I()
m=r.e
n.r=m.j(0.18).gp(0)
a5.ad(new C.t(w*0.88,u*0.3),u*(0.22+0.03*t),n)
s.restore()
s=w*0.06
A.h9u(r.a,C.l(a3,a3,D.c,a3,a3,a3,a3,a3,a3,a3,a3,u*0.22,a3,a3,D.u,a3,a3,!0,a3,u*0.012,a3,a3,a3,a3,a3,a3),w*0.9,1).a3(a5,new C.t(s,u*0.2))
A.h9u(r.b,C.l(a3,a3,m,a3,a3,a3,a3,a3,a3,a3,a3,u*0.1,a3,a3,D.U,a3,a3,!0,a3,a3,a3,a3,a3,a3,a3,a3),w*0.8,2).a3(a5,new C.t(s,u*0.5))
d=$.Wa
m=u*0.76
if(d!=null){t=d.c
n=d.d
a0=Math.min((s+o-s)/t,(m+u*0.16-m)/n)
o=C.I()
o.Q=D.ci
a5.oC(d,new C.a3(0,0,t,n),new C.a3(s,m,s+t*a0,m+n*a0),o)}else{a1=C.fy(a3,a3,a3,a3,C.cS(a3,a3,a3,a3,a3,a3,a3,a3,a3,C.l(a3,a3,D.c,a3,a3,a3,a3,a3,a3,a3,a3,u*0.12,a3,a3,D.u,a3,a3,!0,a3,a3,a3,a3,a3,a3,a3,a3),"NGMY"),D.a4,D.bY,a3,D.dA,D.bW)
a1.el()
a1.a3(a5,new C.t(s,m))}a2=A.h9u("ngmy.org",C.l(a3,a3,D.ac,a3,a3,a3,a3,a3,a3,a3,a3,u*0.08,a3,a3,D.H,a3,a3,!0,a3,a3,a3,a3,a3,a3,a3,a3),400,1)
a2.a3(a5,new C.t(w-a2.b.c-w*0.05,u*0.82))},
FY:function FY(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
L9(d){return D.d.dN(B.Rj,new A.fCg(d),new A.fCh())},
yP(d){var w=B.hE.h(0,d.b),v=d.e*3.141592653589793/2,u=w.d/2+30
return new C.z(d.c+Math.sin(v)*u,d.d+Math.cos(v)*u)},
hHh(d){var w=C.a([],x.C),v=C.a([],x.fW),u=new C.e6()
u.cX(7)
w=new A.bMD(d,u,w,v)
w.bzI(d,7)
return w},
zd:function zd(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fCg:function fCg(d){this.a=d},
fCh:function fCh(){},
xo:function xo(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=null
_.w=_.r=!1
_.x=0},
aUo:function aUo(d,e,f,g,h,i,j){var _=this
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
a4q:function a4q(d,e,f,g,h,i,j,k){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.w=j
_.x=k},
akq:function akq(d,e,f){this.a=d
this.b=e
this.c=f},
bMD:function bMD(d,e,f,g){var _=this
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
bMF:function bMF(d){this.a=d},
bMH:function bMH(d,e){this.a=d
this.b=e},
bMI:function bMI(){},
bME:function bME(d,e){this.a=d
this.b=e},
bMJ:function bMJ(){},
bMG:function bMG(d,e,f){this.a=d
this.b=e
this.c=f},
hfb(d){var w=d.x
return C.bw(w.length,D.d.cI(w,0,new A.bKK()),D.h,D.h,D.h,D.h,D.h,D.h,D.h,D.h,D.h,D.h,D.h,D.h,D.h,D.h,D.h,D.h,D.h,D.h)},
ikw(d){var w,v,u
for(w=0,v=0;u=v+1,u<d.length;v=u)w+=Math.sqrt(Math.pow(d[u].a-d[v].a,2)+Math.pow(d[u].b-d[v].b,2))
return w},
ikC(d,e){var w,v,u,t,s,r,q,p,o
for(w=e,v=0;u=v+1,u<d.length;v=u){t=d[u]
s=d[v]
r=t.a-s.a
q=t.b-s.b
p=Math.sqrt(r*r+q*q)
if(p<0.000001)continue
if(w<=p||v+2===d.length){o=D.k.E(w/p,0,1)
t=d[v]
return new C.b7(t.a+r*o,t.b+q*o,Math.atan2(r,q))}w-=p}return new C.b7(D.d.gak(d).a,D.d.gak(d).b,0)},
bKJ:function bKJ(d){var _=this
_.a=d
_.e=_.d=_.c=_.b=$
_.f=-1},
bKK:function bKK(){},
dkg:function dkg(d,e){this.a=d
this.b=e},
h2K(d,e,f){return new A.aZ0(f,d,e,null)},
h9Z(d){return D.k.dc((1-D.k.E(d,0,1))*12)},
aTK:function aTK(d){var _=this
_.b=_.a=1
_.d=_.c=0
_.e=1
_.f=!1
_.r=0
_.w=!1
_.P$=0
_.T$=d
_.by$=_.bK$=0},
aZ0:function aZ0(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
Ux:function Ux(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
c1T:function c1T(d){this.a=d},
rR:function rR(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
fql(d){var w=d.d-d.b-200
return new C.bqL([157.07963267948966,2*w+380+628.3185307179587,w,190])},
Le(d,e){var w,v=A.fql(d).a,u=v[2],t=v[3],s=v[0]
v=v[1]
w=D.k.F(e,v)
if(w<0)w+=v
v=new A.fFG()
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
h1o(d,e,f){return new A.aTJ(d,e,f)},
haf(d,e){var w=D.k.F(e+d.c,28)
if(w<12)return 0
if(w<15)return 1
return 2},
hqe(d,e,f,g){var w=x.n
w=new A.bxy(d,e,f,g,C.a([],w),C.a([],w))
w.bAO(d,e,f,g)
return w},
hGo(){var w,v=C.a([],x.n)
for(w=0;w<4;++w)v.push(B.kq[w].r)
return new A.bKL(v,C.bZ(4,0,!1,x.i),B.aAI)},
i7o(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=C.a([],x.z)
for(w=d.length,v=e.a,u=e.b,t=e.c,s=x.o,r=0;r<d.length;d.length===w||(0,C.L)(d),++r){q=d[r]
p=C.a([],s)
for(o=q.a,n=o.length,m=0;m<o.length;o.length===n||(0,C.L)(o),++m){l=o[m]
p.push(new A.q(l.a*v,l.b*u,l.c*t))}k.push(new A.kq(p,q.b,q.c,q.d,q.e,q.f,q.r,q.w,q.x,q.y,q.z))}return k},
i_p(){var w,v,u,t,s=new A.fg(C.a([],x.z))
s.r=!0
s.aQ(B.h_S,B.h2g,D.d7,0.3)
s.aQ(B.hf8,B.h26,D.bN,0.2)
s.aQ(B.ab_,B.h24,B.i1,0.6)
s.aQ(B.h9S,B.h2M,B.i1,0.6)
s.aG(B.h8S,B.h2i,D.bt)
for(w=0;w<2;++w)s.aG(new A.q(75.5,9,B.a5c[w]),B.ab4,B.o8)
for(w=0;w<2;++w){v=B.dnv[w]
for(u=0;u<2;++u){t=B.dnm[u]
s.dv(new A.q(v,7,t-1.5),new A.q(v,7,t+1.5),7.5,D.nk,12)}}return s},
i5X(d,e){var w,v,u,t,s,r=new A.fg(C.a([],x.z))
r.r=!0
r.aQ(B.aWy,B.h1l,D.bN,0.4)
r.aQ(B.hfq,B.h52,D.bN,0.4)
r.aQ(B.hfr,B.h56,B.i1,0.6)
r.aG(B.xg,B.h1q,D.dF)
w=D.k.F(d*5+e,2)<1
r.aQ(B.hhL,B.aWO,w?D.ax:D.ek,0.6)
r.aQ(B.hdo,B.aWO,w?D.d7:D.d3,0.6)
for(v=0;v<2;++v){u=B.dnr[v]
for(t=0;t<2;++t){s=B.dnk[t]
r.dv(new A.q(u,6.5,s-1.5),new A.q(u,6.5,s+1.5),6.5,D.nk,12)}}return r},
imJ(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=x.z,a5=C.a([],a4)
for(w=0;w<4;++w){v=B.kq[w]
u=$.aRM()
t=D.d.cp(B.kq,v)
u.FH(0,a6)
t=A.Le(B.kq[t],u.a[t]).a
s=t[0]
r=t[1]
q=t[2]
p=t[3]
u=v.a==="bus"
o=u?A.i_p():A.i5X(a6,w)
u=u?B.aXD:B.aWX
D.d.v(a5,A.nE(A.i7o(o.a,u),0,Math.atan2(q,p)-1.5707963267948966,new A.q(s,0,r)))}for(u=$.bG0(),t=u.length,n=0;n<u.length;u.length===t||(0,C.L)(u),++n)D.d.v(a5,A.i3k(u[n],a6))
for(u=a6*0.9,t=x.o,m=a6*22,l=a6*0.09,w=0;w<2;++w){k=B.a4N[w].a
j=k[0]
i=k[1]
h=k[2]
g=l+w*3.141592653589793
k=Math.cos(g)
f=Math.sin(g)
e=Math.atan2(-Math.sin(g),Math.cos(g))
d=C.a([],a4)
a0=new A.fg(d)
a0.r=!0
a0.aQ(B.dX,B.h4y,D.bB,0.4)
a0.aQ(B.h2q,B.h1u,B.i1,0.7)
a0.dv(B.h2x,B.h5N,2.6,D.bB,8)
a0.aG(B.h5K,B.hd_,D.bN)
a0.dv(B.xg,B.aaY,1.2,B.he,8)
for(a1=0;a1<2;++a1)a0.aE5(new A.q(0,13.4,0),B.h7V,B.he,m+a1*3.141592653589793/2)
for(n=0;n<2;++n){a2=E.aBi[n]
a0.aG(new A.q(0,-11,a2),B.h7B,B.he)
a0.aG(new A.q(-10,-6,a2),B.aXB,B.he)
a0.aG(new A.q(10,-6,a2),B.aXB,B.he)}for(n=0;n<2;++n){a3=B.aBc[n]
a0.j9(C.a([new A.q(a3*0.45,-10,0),new A.q(a3,-22,0)],t),0.3,B.he,!1,0,4)}D.d.v(a5,A.nE(d,0,e-1.5707963267948966,new A.q(j+520*k,h+Math.sin(u+w)*5,i+520*f)))}return a5},
imK(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=C.a([],x.a),f=new A.h_r()
for(w=0;w<4;++w){v={}
u=B.kq[w]
v.a=v.b=null
t=$.aRM()
s=D.d.cp(B.kq,u)
t.FH(0,d)
s=A.Le(B.kq[s],t.a[s]).a
v.b=s[0]
v.a=s[1]
s=new A.h_p(v,Math.atan2(s[2],s[3])-1.5707963267948966)
v=u.a==="bus"
r=v?B.aXD:B.aWX
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
g.push(f.$7(s.$3(q,o,p),s.$3(v,o,p),s.$3(v,n,p),s.$3(q,n,p),t+5,1200,220))}for(v=d*0.09,t=d*0.9,w=0;w<2;++w){s=B.a4N[w].a
l=s[0]
k=s[1]
j=s[2]
i=s[3]
h=v+w*3.141592653589793
s=Math.cos(h)
p=Math.sin(h)
p=new A.h_q(Math.atan2(-Math.sin(h),Math.cos(h))-1.5707963267948966,l+520*s,j+Math.sin(t+w)*5,k+520*p)
g.push(f.$7(p.$2(-42,-22),p.$2(42,-22),p.$2(42,-44),p.$2(-42,-44),i,900,230))
g.push(f.$7(p.$2(42,-22.3),p.$2(-42,-22.3),p.$2(-42,-44.3),p.$2(42,-44.3),i,900,230))}return g},
i3k(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k=B.kq[d.a*2],j=d.b,i=A.Le(k,j).a,h=i[0],g=i[1],f=i[2],e=i[3]
j=A.Le(k,j+22).a
j=[j[0],j[1],f,e,h+-e*56,g+f*56]
w=A.haf(d,a0)
v=D.k.F(a0+d.c,28)
u=v>=17&&v<26
i=C.a([],x.z)
t=new A.fg(i)
t.r=!0
t.dv(B.dX,B.aWI,1.7,D.hk,6)
t.aQ(B.h0X,B.h6q,D.av,0.3)
for(s=w===2,r=w===1,q=w===0,p=0;p<3;++p){o=!0
if(!(p===0&&s))if(!(p===1&&r)){n=p===2&&q
o=n}n=o?B.dk7[p]:B.cKU[p]
m=o?0.9:0.1
t.fQ(new A.q(-3.9,74-p*8,0),3.3,n,4,7,m)}t.aQ(B.h0r,B.h1v,D.av,0.3)
if(u){t.ee(B.h7F,1.6,D.bf,4,6)
t.aG(B.hcW,B.hcD,D.bf)
t.aG(B.h85,B.aY0,D.bf)
t.aG(B.hbG,B.aY0,D.bf)}else{t.aG(B.h9g,B.hdR,D.ax)
for(l=-2;l<=1;++l)t.aG(new A.q(l*1.25+0.6,40,-4.9),B.hee,D.ax)
t.aG(B.hh1,B.h9p,D.ax)}return A.nE(i,0,Math.atan2(j[2],j[3])-1.5707963267948966,new A.q(j[4],0,j[5]))},
iaY(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=C.a([],x.z),i=new A.fg(j)
i.f=1
i.e=90
w=new A.fBP(i)
for(v=$.bG0(),u=v.length,t=0;t<v.length;v.length===u||(0,C.L)(v),++t){s=v[t]
r=B.kq[s.a*2]
q=s.b
p=A.Le(r,q+22).a
o=p[0]
n=p[1]
m=p[2]
l=p[3]
for(k=-4;k<=4;++k)w.$8(o,n,m,l,0,-25+k*11,18,5)
q=A.Le(r,q-6).a
w.$8(q[0],q[1],m,l,0,0,2.2,46)}return j},
SB:function SB(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.d=f
_.r=g
_.w=h},
fFG:function fFG(){},
aTJ:function aTJ(d,e,f){this.a=d
this.b=e
this.c=f},
bxy:function bxy(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=-1},
fj5:function fj5(d,e){this.a=d
this.b=e},
bKL:function bKL(d,e,f){var _=this
_.a=d
_.b=e
_.c=0
_.d=f},
bKM:function bKM(){},
h_r:function h_r(){},
h_s:function h_s(d){this.a=d},
h_p:function h_p(d,e){this.a=d
this.b=e},
h_q:function h_q(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fBP:function fBP(d){this.a=d},
fBQ:function fBQ(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
Ak:function Ak(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.x=0},
cB9:function cB9(d,e,f){var _=this
_.a=d
_.b=e
_.d=_.c=$
_.e=f
_.f=null
_.w=_.r=0
_.x=1
_.y=0},
cBb:function cBb(d){this.a=d},
cBc:function cBc(){},
cBa:function cBa(){},
hAg(d){return d.b==="hq"?12:D.o.E(D.k.bf((210+D.o.F(B.zp[d.f].l(),5)*24)/22),8,14)},
h1n(d,e,f){var w=new A.bKv(d,e,f,B.aAQ,B.a3c,C.a([],x.a),C.aX(x.S))
w.at=new A.b9Y(null,-138,138,12,316,0,296,3.141592653589793,w.ccz())
w.ax=w.cHz()
return w},
pG:function pG(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bKv:function bKv(d,e,f,g,h,i,j){var _=this
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
bKw:function bKw(){},
bKF:function bKF(d){this.a=d},
bKG:function bKG(d){this.a=d},
bKH:function bKH(d){this.a=d},
bKI:function bKI(d){this.a=d},
bKx:function bKx(d){this.a=d},
bKy:function bKy(){},
bKz:function bKz(){},
bKA:function bKA(d){this.a=d},
bKB:function bKB(){},
bKC:function bKC(d){this.a=d},
bKD:function bKD(d){this.a=d},
bKE:function bKE(d){this.a=d},
h1u(d,e){var w=C.a([],x.ha),v=C.a([new A.M0(),new A.M0(),new A.M0()],x.gQ),u=C.a([],x.s),t=new C.e6()
t.cX(e)
w=new A.aU8(d,t,w,v,u)
w.bzG(d,e)
return w},
hfo(d,e){var w,v,u,t,s,r,q,p,o=J.a6(e),n=x.fF,m=n.a(o.h(e,"wired"))
if(m==null)m=D.uS
w=n.a(o.h(e,"plumbed"))
if(w==null)w=D.uS
for(o=d.gqU(),n=o.length,v=J.a6(w),u=J.a6(m),t=0;t<o.length;o.length===n||(0,C.L)(o),++t){s=o[t]
r=""+s.a
q=u.h(m,r)
if(C.r5(q)){s.ay=!q
s.CW=null}p=v.h(w,r)
if(C.r5(p)){r=s.c
r=r==="bathroom"||r==="kitchen"}else r=!1
if(r){s.ch=!p
s.fr=null}}},
h1v(d){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=J.a6(d),j=C.aK(k.h(d,"seed"))
j=j==null?l:D.k.N(j)
if(j==null)j=1
w=C.aK(k.h(d,"clock"))
w=w==null?l:D.k.N(w)
v=A.h1u(j,(w==null?0:w)+7)
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
j=x.Y
u=j.a(k.h(d,"res"))
if(u==null)u=D.cv
w=J.a6(u)
t=x.G
s=0
for(;;){r=v.c
r===$&&C.c()
if(!(s<r.length&&s<w.gL(u)))break
q=t.a(w.h(u,s))
r=v.c[s]
p=J.a6(q)
r.b=C.e3(p.h(q,"hunger"))
r.c=C.e3(p.h(q,"health"))
r.d=C.e3(p.h(q,"comfort"))
r.e=J.A(p.h(q,"sick"),!0)
r.f=!J.A(p.h(q,"alive"),!1)
p=C.aK(p.h(q,"bed"))
p=p==null?l:D.k.N(p)
r.r=p==null?-1:p;++s}o=j.a(k.h(d,"beds"))
if(o==null)o=D.cv
w=J.a6(o)
r=v.e
s=0
for(;;){if(!(s<r.length&&s<w.gL(o)))break
q=t.a(w.h(o,s))
p=r[s]
n=J.a6(q)
p.a=D.k.N(C.e3(n.h(q,"res")))
p.b=C.e3(n.h(q,"care"))
p.c=C.e3(n.h(q,"heal"));++s}k=j.a(k.h(d,"calls"))
k=J.aW(k==null?D.cv:k)
j=v.d
while(k.C()){m=t.a(k.gS(k))
w=J.a6(m)
r=new A.I7(D.k.N(C.e3(w.h(m,"id"))),D.k.N(C.e3(w.h(m,"res"))),C.cQ(w.h(m,"kind")),C.cQ(w.h(m,"msg")),D.k.N(C.e3(w.h(m,"reward"))))
r.f=C.e3(w.h(m,"age"))
j.push(r)}return v},
ak0(d){return A.hGD(d)},
hGD(d){var w=0,v=C.j(x.H),u,t=2,s=[],r,q,p,o,n
var $async$ak0=C.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:if(d<=0){w=1
break}q=$.a4i
if(q!=null){q.r+=d
w=1
break}t=4
w=7
return C.b(C.az(),$async$ak0)
case 7:r=f
p=C.ev(J.r(r.a,"ngmy_construction_bonus_stars"))
if(p==null)p=0
w=8
return C.b(r.ar("Int","ngmy_construction_bonus_stars",p+d),$async$ak0)
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
return C.i($async$ak0,v)},
aUb(){var w=0,v=C.j(x.S),u,t=2,s=[],r,q,p,o,n
var $async$aUb=C.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return C.b(C.az(),$async$aUb)
case 7:r=e
p=C.ev(J.r(r.a,"ngmy_construction_bonus_stars"))
q=p==null?0:p
w=!J.A(q,0)?8:9
break
case 8:w=10
return C.b(J.hu(r,"ngmy_construction_bonus_stars"),$async$aUb)
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
return C.i($async$aUb,v)},
hfp(d,e,f){return Math.max(6,12+4*f-2*d-5*e)},
aUa(){var w=0,v=C.j(x.dy),u,t=2,s=[],r,q,p,o,n
var $async$aUa=C.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return C.b(C.az(),$async$aUa)
case 7:r=e
q=C.aS(J.r(r.a,"ngmy_community_v1"))
if(q==null){u=null
w=1
break}p=x.c.a(D.X.aM(0,q,null))
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
return C.i($async$aUa,v)},
aU9(){var w=0,v=C.j(x.H),u=1,t=[],s,r,q
var $async$aU9=C.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
w=6
return C.b(C.az(),$async$aU9)
case 6:s=e
w=7
return C.b(J.hu(s,"ngmy_community_v1"),$async$aU9)
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
return C.i($async$aU9,v)},
Fr:function Fr(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
P1:function P1(d){var _=this
_.a=d
_.b=25
_.d=_.c=100
_.e=!1
_.f=!0
_.r=-1},
I7:function I7(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=0},
M0:function M0(){this.a=-1
this.b=100
this.c=0},
aU8:function aU8(d,e,f,g,h){var _=this
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
bLm:function bLm(){},
bLj:function bLj(d){this.a=d},
bLk:function bLk(d,e){this.a=d
this.b=e},
bLl:function bLl(){},
bLq:function bLq(d){this.a=d},
bLo:function bLo(d){this.a=d},
bLp:function bLp(){},
bLn:function bLn(d){this.a=d},
bLr:function bLr(){},
apN:function apN(d,e){this.c=d
this.a=e},
bkX:function bkX(){var _=this
_.d=null
_.e=$
_.f=null
_.r=$
_.x=_.w=null
_.y=0
_.c=_.a=null},
dSS:function dSS(d,e){this.a=d
this.b=e},
dST:function dST(d){this.a=d},
dT4:function dT4(){},
dSZ:function dSZ(d,e){this.a=d
this.b=e},
dT_:function dT_(d){this.a=d},
dSY:function dSY(d){this.a=d},
dSO:function dSO(){},
dSP:function dSP(){},
dT7:function dT7(){},
dT8:function dT8(){},
dT6:function dT6(d,e){this.a=d
this.b=e},
dT5:function dT5(d,e){this.a=d
this.b=e},
dSN:function dSN(d,e){this.a=d
this.b=e},
dSU:function dSU(d,e,f){this.a=d
this.b=e
this.c=f},
dSV:function dSV(d,e,f){this.a=d
this.b=e
this.c=f},
dSW:function dSW(d,e,f){this.a=d
this.b=e
this.c=f},
dSX:function dSX(d,e){this.a=d
this.b=e},
dSR:function dSR(d,e,f){this.a=d
this.b=e
this.c=f},
dSQ:function dSQ(d,e,f){this.a=d
this.b=e
this.c=f},
dT1:function dT1(d,e){this.a=d
this.b=e},
dT2:function dT2(d,e){this.a=d
this.b=e},
dT3:function dT3(d){this.a=d},
dT0:function dT0(d){this.a=d},
dT9:function dT9(d){this.a=d},
dTa:function dTa(){},
acO:function acO(d,e,f){this.c=d
this.d=e
this.a=f},
bfH:function bfH(d,e){this.b=d
this.a=e},
oo(d,e,f,g,h,i,j,k,l,m,n){return new A.Ms(g,m,d,k,e,f,n,h,l,i,j)},
t7(d){return D.d.fZ($.hEr(),new A.fCq(d))},
aih(d,e){var w,v,u=d.e,t=new C.N(u,new A.h01(),C.T(u).k("N<1,n>")).fK(0)
u=e.b
w=C.a7(u).k("bd<2>")
v=C.df(new C.bd(u,w),w.k("M.E"))
if(d.a==="cord4"&&e.r)return!1
return t.d_(0,v.gkX(v))},
hAi(d,e,f,g,h){var w,v
if(e.a&&e.c===0){if(e.w)return"SHOCK! The breaker was still ON and you touched a live wire. Always turn the power OFF and test the wires first."
return"STOP! The breaker is still ON, so these wires are live (120 volts). Turn the breaker OFF first. This can shock you badly."}if(e.c!==0)return"The device is already in the box. Pull it out again to change the wires."
w=!1
if(d.a==="cord4")if(e.r)if(!e.w)if(!e.z)w=f==="neutral"||f==="ground"
if(w)return"Take the ground strap off first: tap the metal strap on the terminal block. On a 4-wire cord the neutral must not touch the frame, because the green wire grounds the frame."
if(!e.w&&!e.z&&!h&&!g.c.t(0,f))return d.r.$2(f,g)
w=e.b
v=g.a
if(w.h(0,v)!=null)return"That place already has a wire. Tap the wire to take it off first."
if(new C.bd(w,C.a7(w).k("bd<2>")).t(0,f))return"That wire is already fastened. Tap it to take it off if you want to move it."
w.n(0,v,f)
return null},
h9P(d,e){var w,v,u,t,s,r,q=new A.fBC(),p=new A.fBD(),o=C.a([],x.bm)
for(w=e.b,w=new C.cD(w,C.a7(w).k("cD<1,2>")).gaf(0),v=d.f,u=d.e;w.C();){t=w.d
t.toString
s=D.d.fZ(v,new A.fBA(t))
r=D.d.fZ(u,new A.fBB(t))
o.push(new A.a4l(new A.cCY(r.a,q.$1(r.e)),new A.czn(p.$1(s.f))))}return o},
fSi(d){var w=d.e,v=C.T(w).k("Z<1>")
return new A.bMN(new C.Z(w,new A.fSj(),v).gL(0),new C.Z(w,new A.fSk(),v).gL(0),d.y)},
La(d,e){var w,v,u,t,s,r,q,p,o,n,m
if(d.a==="cord4"&&e.r)return B.hj5
w=A.hvH(A.fSi(d),A.h9P(d,e),e.y)
v=w.c
u=new A.fCD(w)
t=w.b
s=t.length===0?null:D.d.f4(t,new A.fCA())
t=w.a===B.qR
if(t)r="ok"
else if(u.$1("SHORT")||u.$1("HOT_TO_GROUND"))r="short"
else{if(u.$1("REVERSED"))q="reversed"
else if(u.$1("NEUTRAL_GROUND"))q="bonded"
else if(u.$1("GROUND_AS_CURRENT"))q="groundWire"
else if(u.$1("OPEN_NEUTRAL"))q="openNeutral"
else if(u.$1("UNVERIFIED"))q="unverified"
else q=u.$1("MISSING_GROUND")?"noGround":"dead"
r=q}if(d.x&&!e.z)for(q=e.b,q=new C.cD(q,C.a7(q).k("cD<1,2>")).gaf(0),p=d.f;q.C();){o=q.d
o.toString
n=D.d.fZ(p,new A.fCB(o))
if(!n.c.t(0,o.b)){t=n.d
return new A.axQ("dead","The "+D.d.fZ(d.e,new A.fCC(o)).b+" is on the wrong terminal ("+n.b+"). "+t,!1,!1,!1,"none",t)}}m=t?"Wired correctly. Hot, neutral and ground are all in the right place, and every safety check passes.":s.c+" "+v.c
t=s==null?null:s.e
if(t==null)t=""
return new A.axQ(r,m,v.d,v.e,v.f,v.b,t)},
hag(d){var w,v,u,t
for(w=$.h0F(),v=w.length,u=0;u<v;++u){t=w[u]
if(t.a===d)return t.w}return d},
aOQ(d,e){var w
if(d==="light"||d==="fan")w=e.c===0?6.4:0.6
else w=e.c===0?4.7:-0.25
return w},
aQ8(d,e,f){var w,v
if(d==="light"||d==="fan"){w=A.aOQ(d,f)
v=f.c===0?w-3.2:w
switch(e){case 51:return new A.q(-1.5,-0.3,v)
case 52:return new A.q(0,-0.3,v)
default:return new A.q(1.5,-0.3,v)}}w=A.aOQ(d,f)
if(D.a.a0(d,"terminal")||d==="cord3"||d==="cord4")switch(e){case 23:return new A.q(-1.15,0.14999999999999997,w-0.3)
case 21:return new A.q(0,0.14999999999999997,w-0.3)
case 22:return new A.q(1.15,0.14999999999999997,w-0.3)
default:return new A.q(0,-1.65,w-0.1)}switch(e){case 21:return new A.q(0.98,-0.2+(d==="gfci"?0.95:0.85),w-0.45)
case 22:return new A.q(0.98,-0.2+(d==="gfci"?-0.75:-0.55),w-0.45)
case 23:return new A.q(-0.98,-0.2+(d==="gfci"?0.95:0.85),w-0.45)
case 24:return new A.q(-0.98,-0.2+(d==="gfci"?-0.75:-0.55),w-0.45)
default:return new A.q(0,-1.98,w+0.52)}},
bD0(b7,b8,b9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1="nema",b2="terminal",b3=C.a([],x.z),b4=new A.fg(b3),b5=A.hag(b7.a),b6=b5==="light"||b5==="fan"
if(b9){b4.b=1
b4.hj(B.hbV,B.aXW,B.vP,3)
b4.hj(B.hdf,B.aXW,B.vP,3)
b4.hj(B.hg2,B.aYh,B.vP,2)
b4.hj(B.hdW,B.aYh,B.vP,2)
b4.b=2
b4.lU(B.hbs,B.aXP,B.iz,0.05,3)
b4.lU(B.haU,B.aXP,B.iz,0.05,3)
b4.lU(B.haM,B.hgz,B.iz,0.05,2)}w=b7.w.length===0
v=A.hqM(b4,w?b5:"outlet",!0)
u=new A.fzQ(b4,b8,b5,b6)
t=D.d.gI(v)
s=!w
if(s){r=b7.e
q=r.length
for(p=t.a,o=t.b+0,n=t.c,m=q-1,l=q===1,k=0;k<q;++k){j=r[k]
i=l?0:k/m-0.5
h=D.o.F(k,2)
if(j.e==="ground")g=B.tY
else{g=j.c
if(g.A(0,B.mx))g=B.mx}u.$5(60+k,new A.q(p+i*0.5,o,n+0.04*k),new A.q(i*3.6,-1.7-0.12*h,2.3+0.15*k),j.a,g)}}else if(b5==="switch"){f=D.d.gak(v)
u.$5(10,t.a7(0,B.h3D),B.hg5,"blackLine",B.Fp)
u.$5(13,f.a7(0,B.hgg),B.h8X,"blackLoad",B.Fp)
u.$5(12,t.a7(0,B.hcN),B.h83,"ground",B.tY)
b4.b=6
r=x.o
b4.j9(C.a([t.a7(0,B.aXM),B.h4l,B.VG],r),0.075,B.mx,!1,0.3,8)
b4.j9(C.a([f.a7(0,B.aXM),B.hc2,B.VG],r),0.075,B.mx,!1,0.3,8)
b4.yU(B.VG,B.hfY,0.28,B.afh,0.18,0.3,10)}else{u.$5(10,t.a7(0,B.h97),B.h47,"black",B.Fp)
u.$5(11,t.a7(0,B.haG),B.hcd,"white",B.mx)
u.$5(12,t.a7(0,B.hb5),B.haW,"ground",B.tY)}if(b6)A.hrO(b4,b5,b8)
else A.hrr(b4,b5,A.aOQ(b5,b8),b8.x,!1,s,b8.r)
if(b8.e&&b8.c===0){b4.b=0
b4.d=0.5
for(r=b7.f,p=r.length,e=0;e<p;++e){d=r[e]
a0=A.aQ8(b5,d.a,b8)
if(d.e)a1=D.bt
else{o=d.f
if(o==="ground")a1=D.bf
else{o=o==="neutral"?D.c:B.Bh
a1=o}}if(b6)o=0
else{o=a0.a
if(o>0.4)o=0.12
else o=o<-0.4?-0.12:0}if(b6)n=0.6
else n=Math.abs(a0.a)<0.4?0.2:0
b4.fQ(new A.q(a0.a+o,a0.b+0,a0.c+n),0.36,a1,4,8,0.1)}b4.d=1}if(b8.c>=2&&!b6)A.htU(b4,b8.x)
r=!1
if(b8.c>=2)if(b8.d)r=b5==="outlet"||b5==="gfci"||D.a.a0(b5,b1)
if(r)A.i8H(b4,b8.a&&!b8.x)
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
a3=A.aOQ(b5,b8)
a4=p?"Ceiling fan":"Ceiling light"
p=p?"The motor housing with blades. It has three wires: black (motor), white (neutral) and green (ground).":"The light fixture with a frosted dome. It has three wires: black, white and green."
a5=C.H([1,B.ee3,2,B.eeh,3,new A.cV(r,"A box that holds the wire connections. Every connection must be inside a box, never loose in the wall or the ceiling."+o,new A.q(0,0,-1.2),9),4,new A.cV(m,"The yellow jacket holds three wires: black (hot), white (neutral) and bare copper (ground). Yellow means 12 gauge wire for a 20 amp circuit. White jackets are 14 gauge for 15 amps.",new A.q(-0.4,1.5,-1.8),8),5,B.eeE,10,new A.cV("Black wire: hot","The hot wire brings the power from the breaker. It is the dangerous one. "+l,new A.q(-0.8,-0.8,1.2),7),13,B.edQ,11,new A.cV("White wire: neutral","The neutral wire carries the power back to the panel. "+h,new A.q(0,-0.8,1.2),7),12,new A.cV("Bare copper wire: ground","The ground wire is a safety path. If a wire touches metal, the current runs down the ground instead of through you. "+g,new A.q(0.5,-0.8,1.2),7),6,B.eef,20,new A.cV(a2,n,new A.q(0,-0.2,a3),9),40,B.edI,21,B.eek,22,B.eeD,23,B.eed,24,B.eei,25,B.ee6,26,B.eel,27,B.eex,28,B.ee1,30,B.edL,31,B.edJ,51,B.eeg,52,B.edN,53,B.eep,54,new A.cV(a4,p,new A.q(0,0,6.4),9),55,B.eez],x.S,x.q)
if(s){a5.n(0,20,new A.cV(b7.b,b7.c,new A.q(0,-0.2,A.aOQ(b5,b8)),9))
for(s=b7.e,r=s.length,k=0;k<r;++k)a5.n(0,60+k,new A.cV(s[k].b,"Pick this wire up, then tap the screw it belongs on. Tap it again on the screw to take it off.",new A.q(-0.8+k*0.5,-0.8,1.2),7))
for(s=b7.f,r=s.length,e=0;e<r;++e){a6=s[e]
p=a6.a
a5.n(0,p,new A.cV(a6.b,a6.d,A.aQ8(b5,p,b8),5))}}a7=C.a([],x.E)
if(b8.f&&b8.c===0)for(s=b7.f,r=s.length,e=0;e<r;++e){d=s[e]
a0=A.aQ8(b5,d.a,b8)
a8=d.f
A:{p="hot"===a8
if(p){o=B.eUR
break A}if("neutral"===a8){o=B.eKC
break A}if("ground"===a8){o=B.eNd
break A}o=B.ezp
break A}a9=o.a
if(b6){B:{if(p){n="BLACK NUT \xb7 HOT"
break B}if("neutral"===a8){n="WHITE NUT \xb7 NEUTRAL"
break B}n="GROUND"
break B}i=n}else i=w?a9:d.b
if(b6){C:{if(p){p=B.hah
break C}if("neutral"===a8){p=B.haa
break C}p=B.hgO
break C}b0=p}else{p=a0.a
if(p>0.4)n=3.8
else n=p<-0.4?-4.2:0
b0=new A.q(n,Math.abs(p)<0.4?-3:-0.4,1)}a7.push(new A.hh(new A.q(a0.a+b0.a,a0.b+b0.b,a0.c+b0.c),i,o.b,0))}if(b8.a&&b8.c===0)a7.push(B.c23)
return new A.tU(b3,a5,a7,B.wH,null,0)},
hqM(d,e,f){var w,v,u=e==="light"||e==="fan"
d.b=3
if(u){d.dm(B.aYj,B.aXV,2.2,B.y5,0.3,18)
d.a4A(B.aXV,B.dX,2.2,B.y5,!1,!0,0.3,18)}else{d.aQ(B.aYj,B.hbC,B.y5,0.3)
d.aQ(B.h8z,B.aXz,B.y5,0.3)
d.aQ(B.h50,B.aXz,B.y5,0.3)
d.aQ(B.haQ,B.aY_,B.y5,0.3)
d.aQ(B.ha8,B.aY_,B.y5,0.3)}w=C.a([],x.o)
v=new A.fkR(d,f,w)
if(e==="switch"){v.$2(4,B.d4j)
v.$2(5,B.d2k)}else v.$2(4,B.dgZ)
return w},
hAn(d,e){var w,v=$.h0F(),u=new C.Z(v,new A.h00(d),C.T(v).k("Z<1>"))
if(!u.gan(0)){w=e-60
return w>=0&&w<u.gI(0).e.length?u.gI(0).e[w].a:null}return A.i3h(d,e)},
i3h(d,e){var w
A:{if(10===e){w=d==="switch"?"blackLine":"black"
break A}if(13===e){w="blackLoad"
break A}if(11===e){w="white"
break A}if(12===e){w="ground"
break A}w=null
break A}return w},
hrr(d,e,f,g,h,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
if(D.a.a0(e,"terminal")){A.i8G(d,e,f,g,a1)
return}w=new A.q(0,-0.2,f)
v=e==="switch"
u=e==="gfci"
if(g)t=B.tU
else t=v?B.blc:B.YI
s=u?3.1:2.95
d.e=0
d.b=20
if(!h){d.aQ(w.a7(0,B.h7a),new A.q(1.5,s,1.3),t,0.25)
d.e=0.15
d.b=26
r=w.a7(0,B.h6S)
d.aQ(r,B.hg_,g?B.afS:B.Bs,0.8)
d.aG(w.a7(0,B.hcK),B.hi_,B.xT)}d.e=0.3
d.b=27
r=w.a7(0,B.h9D)
d.aQ(r,new A.q(1.3,u?2.85:2.7,0.16),t,0.3)
if(v){d.e=0.7
d.b=28
r=w.a7(0,B.hc0)
d.aQ(r,B.h94,g?B.tU:H.YS,0.35)
r=w.a7(0,B.hfw)
d.aQ(r,B.hdV,g?B.tU:B.ag8,0.35)}else{d.e=0.6
if(D.a.a0(e,"nema"))A.i49(d,w,e,g)
else{r=u?G.aw_:B.duL
q=r.length
p=f+0.47
o=f+0.46
n=f+0.5
m=0
for(;m<q;++m){l=r[m]
d.b=27
k=-0.2+(l+0.04)
d.aG(new A.q(-0.28,k,p),B.hbB,B.Fy)
d.aG(new A.q(0.28,k,p),B.h9L,B.Fy)
k=-0.2+(l-0.32)
d.dv(new A.q(0,k,o),new A.q(0,k,n),0.11,B.Fy,10)}if(u){d.e=0.7
d.b=28
d.aQ(w.a7(0,B.hct),B.aXG,B.boX,0.3)
d.aQ(w.a7(0,B.hgh),B.aXG,B.aj9,0.3)}}}if(h){d.e=0
return}j=u?0.95:0.85
i=u?-0.75:-0.55
r=new A.fma(d,w)
if(!v||a0){r.$6$taped(23,-1,j,B.agx,B.ah4,u)
r.$5(24,-1,i,B.agx,B.ah4)}r.$6$taped(21,1,j,B.Bh,B.FX,u)
r.$5(22,1,i,B.Bh,B.FX)
d.e=0.9
d.b=25
d.dm(w.a7(0,B.haN),w.a7(0,B.hgT),0.18,B.aiK,0.7,12)
d.aG(w.a7(0,B.hac),B.haS,D.dY)
d.aQ(w.a7(0,B.h7l),B.hcx,B.bdQ,0.6)
d.e=0},
hrO(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=e==="fan",i=A.aOQ(e,f)
d.e=0
d.b=55
w=i-0.3
v=i+0.3
u=j?3.3:3.5
t=f.x?B.tU:B.blK
d.dm(new A.q(0,0,w),new A.q(0,0,v),u,t,0.45,20)
d.b=54
if(j){u=i+4.2
d.dm(new A.q(0,0,v),new A.q(0,0,u),0.45,B.bhy,0.5,10)
v=i+7.4
d.dm(new A.q(0,0,u),new A.q(0,0,v),3.6,B.XD,0.5,18)
d.dm(new A.q(0,0,v),new A.q(0,0,i+8.6),1.6,B.bqk,0.7,14)}else{d.d=0.92
v=f.x?B.tU:B.biG
d.fQ(new A.q(0,0,i+1.2),3.6,v,6,14,0.7)
d.d=1}v=d.b=54
s=[B.eKL,B.ew5,B.eSm]
for(u=x.o,r=i-3.2,q=0,p=0;p<3;++p){t=s[p]
o=f.c===0
d.b=o?B.cGC[q]:v;++q
n=o?r:i
o=t.b.a
d.j9(C.a([new A.q(o,-0.3,w),new A.q(o,-0.3,n+0.4)],u),0.07,t.a,!1,0.3,6)}if(f.c===0)for(w=[B.eDq,B.eMk,B.eVi],v=f.b,p=0;p<3;++p){m=w[p]
u=m.a
l=A.aQ8(e,u,f)
d.b=u
d.e=0.8
t=l.a+0
o=l.b+0
k=l.c
d.dm(new A.q(t,o,k+-0.2),new A.q(t,o,k+0.3),0.09,B.tY,0.6,6)
if(v.aj(0,u))d.yU(new A.q(t,o,k+-0.5),new A.q(t,o,k+0.9),0.4,m.b,0.26,0.4,8)
d.e=0}},
htU(d,e){var w
d.e=0.4
d.b=30
w=e?B.tU:B.bcT
d.aQ(B.hcj,B.aY1,w,0.3)
d.aQ(B.hbq,B.aY1,w,0.3)
d.aQ(B.h4V,B.aYa,w,0.3)
d.aQ(B.h6_,B.h7x,w,0.3)
d.aQ(B.hgL,B.aYa,w,0.3)
d.dm(B.h9U,B.hbm,0.1,B.Bs,0.8,10)
d.e=0},
i8H(d,e){var w,v
d.b=31
for(w=0;w<2;++w){v=B.d70[w]
d.dm(new A.q(v,0.52,0.2),new A.q(v,0.52,1.9),0.04,B.Bs,0.8,6)}d.aQ(B.h22,B.hfL,B.bij,0.35)
d.bcp(B.aXX,0.2,e?D.Y6:B.bmw,0.9)
if(e){d.d=0.35
d.fQ(B.aXX,0.5,D.Y6,4,8,0)
d.d=1}},
i49(d,e,f,g){var w,v,u,t,s
d.b=27
d.e=0.62
w=e.a7(0,B.haB)
v=e.a7(0,B.hgA)
d.dm(w,v,0.64,g?B.tU:B.ail,0.35,28)
d.e=0.7
u=new A.frI(e,d)
t=new A.frH(d,e)
s=new A.frG(u)
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
i8G(d,e,f,g,h){var w,v,u=new A.q(0,-0.2,f)
d.e=0
d.b=26
w=u.a7(0,B.hat)
d.aQ(w,B.h7P,g?B.afS:B.Bs,0.8)
d.e=0.2
d.b=20
w=u.a7(0,B.hgd)
d.aQ(w,B.hc_,g?B.tU:B.ail,0.25)
d.e=0.3
for(w=f+0.5,v=0;v<2;++v)d.aG(new A.q(0+B.d5c[v],0.14999999999999997,w),B.haP,B.bqt)
d.b=27
d.e=0.4
d.aG(u.a7(0,B.hdT),B.ab6,B.Fp)
d.aG(u.a7(0,B.hhu),B.ab6,B.mx)
d.aG(u.a7(0,B.hhI),B.ab6,B.vL)
w=new A.fyx(d,u)
w.$5(23,-1.15,0.35,B.Bh,B.FX)
w.$5(21,0,0.35,B.Bh,B.FX)
w.$5(22,1.15,0.35,B.Bh,B.FX)
d.e=0.9
d.b=25
d.dm(u.a7(0,B.ha0),u.a7(0,B.hda),0.26,B.aiK,0.7,12)
d.aG(u.a7(0,B.hhQ),B.h8t,D.dY)
if(h){d.e=0.8
d.b=40
d.aQ(u.a7(0,B.h9N),B.h8Y,B.tY,0.7)}d.e=0},
fm:function fm(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
CC:function CC(d){var _=this
_.a=!0
_.b=d
_.c=0
_.f=_.e=_.d=!1
_.r=!0
_.x=_.w=!1
_.y=!0
_.z=!1
_.Q=""},
iP:function iP(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
Ms:function Ms(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
fDQ:function fDQ(){},
fDR:function fDR(){},
fDS:function fDS(){},
fDT:function fDT(){},
fDU:function fDU(){},
fCq:function fCq(d){this.a=d},
h01:function h01(){},
axQ:function axQ(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.r=i
_.w=j},
fBC:function fBC(){},
fBD:function fBD(){},
fBA:function fBA(d){this.a=d},
fBB:function fBB(d){this.a=d},
fSj:function fSj(){},
fSk:function fSk(){},
fCD:function fCD(d){this.a=d},
fCE:function fCE(d){this.a=d},
fCA:function fCA(){},
fCB:function fCB(d){this.a=d},
fCC:function fCC(d){this.a=d},
fzQ:function fzQ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fzR:function fzR(d){this.a=d},
fkR:function fkR(d,e,f){this.a=d
this.b=e
this.c=f},
h00:function h00(d){this.a=d},
fma:function fma(d,e){this.a=d
this.b=e},
frI:function frI(d,e){this.a=d
this.b=e},
frJ:function frJ(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
frH:function frH(d,e){this.a=d
this.b=e},
frG:function frG(d){this.a=d},
fyx:function fyx(d,e){this.a=d
this.b=e},
a2l(d){var w
A:{if("outlet"===d){w="Outlet"
break A}if("gfci"===d){w="GFCI outlet"
break A}if("switch"===d){w="Light switch"
break A}if("light"===d){w="Ceiling light"
break A}if("fan"===d){w="Ceiling fan"
break A}w=A.t7(d).b
break A}return w},
fkD(d,e,f){var w
A:{if("ground"===d){w=y.t
break A}if("neutral"===d){w=y.I
break A}w=e.a===25?y.T:y.S
break A}return w},
fDV:function fDV(){},
fDW:function fDW(){},
fDX:function fDX(){},
fDY:function fDY(){},
fDZ:function fDZ(){},
fE_:function fE_(){},
fE0:function fE0(){},
fE1:function fE1(){},
fE2:function fE2(){},
fE3:function fE3(){},
fDJ:function fDJ(){},
fDK:function fDK(){},
fDL:function fDL(){},
fDM:function fDM(){},
fDN:function fDN(){},
fDO:function fDO(){},
fDP:function fDP(){},
aPW(d){return D.d.dN(B.a46,new A.fzC(d),new A.fzD())},
hcD(d,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i={},h=new A.h_Y(),g=new A.h_V(),f=d.c,e=f==="hall"
if(!e&&d.p1!=="back"){w=a0.e?d.gh0(0)-14:Math.min(a0.d,d.gh0(0)-14)
v=h.$1(w)
return new A.abM(w,v,d.gh0(0)/2,g.$1(v))}if(e&&a1<2){w=a0.e?d.gh0(0)-14:Math.min(a0.d,d.gh0(0)-14)
v=h.$1(w)
return new A.abM(w,v,d.gh0(0)/2,g.$1(v))}if(e){f=C.a([],x.n)
for(e=d.w,u=e.length,t=0;t<e.length;e.length===u||(0,C.L)(e),++t){s=e[t]
if(s.b==="back"&&!s.a)f.push(s.c)}r=f.length===0?-40:D.d.f4(f,D.vH)-19-8
q=f.length===0?40:D.d.f4(f,D.pO)+19+8
p=d.geb(0)/2-8
f=a1===2?(-p+r)/2:(q+p)/2
return new A.abM(p-q,106,f,61)}e=d.geb(0)
q=d.geb(0)/2-6
if(f==="bathroom"&&!d.ok)q=14
f=C.a([],x.f)
for(u=d.w,o=u.length,t=0;t<u.length;u.length===o||(0,C.L)(u),++t){s=u[t]
if(s.b==="back"&&!s.a){n=s.c
f.push(new C.z(n-19,n+19))}}D.d.aZ(f,new A.h_W())
m=i.a=i.b=-e/2+6
l=new A.h_X(i)
for(e=f.length,t=0;t<f.length;f.length===e||(0,C.L)(f),++t){u=f[t]
k=u.a
if(k>m)l.$2(m,Math.min(k,q))
m=Math.max(m,u.b)}if(m<q)l.$2(m,q)
j=Math.max(30,i.a-i.b-4)
w=a0.e?j:Math.min(a0.d,j)
v=h.$1(w)
return new A.abM(w,v,(i.b+i.a)/2,g.$1(v))},
zk(d,e,f,g,h,i,j,k){var w=x.S
return new A.a5n(d,e,f,g,h,i,j,k,C.a([],x._),C.a([0,0,0],x.t),C.aX(w),C.U(w,x.i),C.U(w,x.cR),C.U(w,w),C.U(w,x.gh),C.U(w,x.N),C.a([],x.cX),C.aX(w),C.aX(w))},
aWC(d){var w=new A.aWB(d)
w.c8s()
return w},
hJs(d){var w=new A.aWB(7)
w.bzT(d)
return w},
inA(d){var w,v=d.c
A:{if("bedroom"===v){w=1
break A}if("bathroom"===v){w=2
break A}if("kitchen"===v){w=4
break A}if("hall"===v){w=3
break A}w=0
break A}return w},
mg:function mg(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.f=_.e=0},
fp:function fp(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
E9:function E9(d,e,f){this.a=d
this.b=e
this.c=f},
nO:function nO(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fzC:function fzC(d){this.a=d},
fzD:function fzD(){},
abM:function abM(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
h_Y:function h_Y(){},
h_V:function h_V(){},
h_W:function h_W(){},
h_X:function h_X(d){this.a=d},
oq:function oq(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aWw:function aWw(d,e,f){this.a=d
this.b=e
this.c=f},
a5n:function a5n(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v){var _=this
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
bUG:function bUG(){},
bUF:function bUF(){},
aWB:function aWB(d){var _=this
_.a=""
_.b=d
_.c=!1
_.d=$
_.e=0},
bVg:function bVg(){},
bVh:function bVh(){},
bVi:function bVi(d){this.a=d},
bVj:function bVj(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bVk:function bVk(d,e){this.a=d
this.b=e},
bVo:function bVo(d){this.a=d},
bVl:function bVl(d,e){this.a=d
this.b=e},
bVn:function bVn(d,e,f){this.a=d
this.b=e
this.c=f},
bVm:function bVm(d,e,f){this.a=d
this.b=e
this.c=f},
bVs:function bVs(){},
bVr:function bVr(){},
bVq:function bVq(){},
bVp:function bVp(){},
b12(d,e,f){return new A.IW(f,d,e,null)},
hvG(d){var w=A.vG(B.ig,d.e*3.141592653589793/2)
return new C.z(w.a,w.c)},
ia8(b3,b4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8=null,a9="A helicopter with its billboard",b0={},b1=C.a([],x.dI),b2=x.o
b0.a=C.a([],b2)
b0.b=C.a([],b2)
b0.c=C.a([],x.s)
b0.d=!1
w=new A.fAa(b0,b1)
v=new A.fAh(b0)
u=new A.fAc(b3)
t=new A.fAi(b3)
s=new A.fA2(new A.fAb(t),new A.fA8(t,u))
r=new A.fAe(b0,u,s,v)
q=new A.fAf(b0,new A.fAg(r),s)
p=new A.fAd(b0,w,b1)
b2=D.d.t(B.dj9,b4)
o=!b2
n=x._
m=C.a([],n)
for(l=b3.x,k=l.length,j=0;j<l.length;l.length===k||(0,C.L)(l),++j){i=l[j]
h=i.b
if(h==="billboard"||h==="cornersign"||h==="adboard"||h==="tower"||h==="hq")m.push(i)}k=C.T(l).k("Z<1>")
g=new C.Z(l,new A.fA3(),k)
h=C.a([],n)
for(f=l.length,j=0;j<l.length;l.length===f||(0,C.L)(l),++j){i=l[j]
e=i.b
if(e==="house2"||e==="bighouse")h.push(i)}v.$3$note(B.h16,B.h0b,"Welcome to NGMY Town")
if(!g.gan(0))q.$1(g.gI(0))
if(b4==="city"||o){v.$2(B.hfe,B.heB)
v.$2(B.hfj,B.heA)
v.$2(B.h0x,B.h_a)
v.$2(B.h69,B.h2U)
v.$2(B.h64,B.h2V)
v.$2(B.h0R,B.h_c)
w.$1$speed(200)}if(b4==="billboards"||o){d={}
v.$2(B.heW,B.heR)
v.$3$note(B.h0n,B.Ax,"The big NGMY logo board: New Global Movement for Youth")
v.$2(B.h2D,B.Ax)
v.$2(B.h3s,B.Ax)
v.$2(B.h1o,B.Ax)
v.$2(B.heq,B.Ax)
v.$2(B.heI,B.Ax)
v.$2(B.hej,B.heC)
d.a=!g.gaf(0).C()?B.h_b:new A.q(g.gI(0).c,0,g.gI(0).d)
a0=C.C(m,x.eB)
a1=0
for(;;){if(a0.length!==0)m=a1<(o?8:80)
else m=!1
if(!m)break
D.d.aZ(a0,new A.fA4(d))
i=D.d.cz(a0,0)
q.$1(i)
d.a=new A.q(i.c,0,i.d);++a1}w.$1$speed(105)
for(a2=0;a2<2;++a2)b1.push(new A.Mn(B.nC,B.nC,130,6,a9,a8,!1,a8,a2))}if(b4==="edges"){n=C.a([],n)
for(m=l.length,j=0;j<l.length;l.length===m||(0,C.L)(l),++j){i=l[j]
f=i.b
if(f==="adboard"||f==="cornersign")n.push(i)}D.d.aZ(n,new A.fA5(new A.fA1()))
for(m=n.length,j=0;j<n.length;n.length===m||(0,C.L)(n),++j){i=n[j]
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
r.$7$note(i,150,50,270,330,70,i.b==="bighouse"?"A big house with TV windows":"A house");++a2}a4=new C.Z(h,new A.fA6(),x.am)
if(!a4.gan(0)){i=a4.gI(0)
a5=A.hvG(i)
n=i.c
m=i.d
v.$2(new A.q(n+a5.a*220,110,m+a5.b*220),new A.q(n,45,m))
p.$1(i)}}if(b4==="hospital"||o)for(j=0;j<3;++j){a6=B.dkh[j]
i=new C.Z(l,new A.fA7(a6),k)
if(!i.gaf(0).C())continue
a7=i.gaf(0)
if(!a7.C())C.b9(C.fs())
r.$7$note(a7.gS(0),160,50,300,360,60,"The "+a6)
a7=i.gaf(0)
if(!a7.C())C.b9(C.fs())
p.$1(a7.gS(0))}w.$0()
if(b4==="traffic"||o){if(b2){for(a2=0;a2<2;++a2)b1.push(new A.Mn(B.nC,B.nC,130,6,a9,a8,!1,a8,a2))
o=!1}a2=0
for(;;){if(a2<4)b2=a2<(o?2:4)
else b2=!1
if(!b2)break
b1.push(new A.Mn(B.nC,B.nC,130,6,B.kq[a2].a==="bus"?"A self-driving bus with its billboards":"A self-driving police car",a8,!1,a2,a8));++a2}}return b1},
IW:function IW(d,e,f,g){var _=this
_.d=d
_.f=e
_.r=f
_.a=g},
aEO:function aEO(d,e,f,g,h,i,j,k,l,m,n,o,p,q){var _=this
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
_.aB=null
_.aF=0
_.aL=!1
_.b4=_.aC=null
_.bM=_.be=_.b2=0
_.aJ=null
_.bi=!1
_.bG=null
_.c8=0
_.c5=m
_.cK=null
_.cl=n
_.P=_.bD=null
_.T=0
_.bK=o
_.by=null
_.bX=0
_.f2=_.eu=_.ek=!1
_.ab=1
_.eA=400
_.ai=_.fB=!1
_.bE=_.al=null
_.dw=_.c1=0
_.di=null
_.ex=0
_.i1=""
_.fC=null
_.iS=p
_.hB=_.kc=0
_.ji=-1
_.jj=q
_.jO=!1
_.tb=_.qT=-1e5
_.hP=0
_.c=_.a=_.tc=_.oK=null},
eeC:function eeC(){},
eez:function eez(d){this.a=d},
eeA:function eeA(d){this.a=d},
eey:function eey(){},
eeB:function eeB(d){this.a=d},
edl:function edl(d,e,f){this.a=d
this.b=e
this.c=f},
edm:function edm(d){this.a=d},
edk:function edk(d){this.a=d},
edn:function edn(d,e){this.a=d
this.b=e},
ebR:function ebR(d,e){this.a=d
this.b=e},
edP:function edP(d){this.a=d},
ecO:function ecO(d){this.a=d},
ecP:function ecP(d,e){this.a=d
this.b=e},
ecQ:function ecQ(d,e){this.a=d
this.b=e},
ecR:function ecR(d,e){this.a=d
this.b=e},
ecS:function ecS(d){this.a=d},
ebk:function ebk(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ebi:function ebi(d,e,f){this.a=d
this.b=e
this.c=f},
ebh:function ebh(d,e){this.a=d
this.b=e},
ebj:function ebj(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ebf:function ebf(d,e){this.a=d
this.b=e},
ebg:function ebg(d,e,f){this.a=d
this.b=e
this.c=f},
ebe:function ebe(d,e){this.a=d
this.b=e},
ebt:function ebt(d){this.a=d},
ebu:function ebu(d){this.a=d},
ebv:function ebv(d){this.a=d},
ecH:function ecH(d){this.a=d},
ecJ:function ecJ(d){this.a=d},
ecI:function ecI(d){this.a=d},
ecK:function ecK(d){this.a=d},
ecG:function ecG(d){this.a=d},
ecL:function ecL(d){this.a=d},
ecF:function ecF(d){this.a=d},
ecM:function ecM(d){this.a=d},
ecE:function ecE(d){this.a=d},
ecN:function ecN(d){this.a=d},
ecD:function ecD(d){this.a=d},
eaV:function eaV(d){this.a=d},
eaW:function eaW(d){this.a=d},
ebF:function ebF(d){this.a=d},
ebH:function ebH(d){this.a=d},
ebG:function ebG(d){this.a=d},
ebI:function ebI(d){this.a=d},
ebE:function ebE(d){this.a=d},
ebJ:function ebJ(d){this.a=d},
ebD:function ebD(d){this.a=d},
ebK:function ebK(d){this.a=d},
ebC:function ebC(d){this.a=d},
ebL:function ebL(d){this.a=d},
ebB:function ebB(d){this.a=d},
ebM:function ebM(d){this.a=d},
ebA:function ebA(d){this.a=d},
ebN:function ebN(d){this.a=d},
ebz:function ebz(d){this.a=d},
edN:function edN(){},
edO:function edO(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
edL:function edL(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
edK:function edK(d){this.a=d},
edM:function edM(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ec4:function ec4(d){this.a=d},
e9U:function e9U(){},
eef:function eef(){},
eak:function eak(){},
ec_:function ec_(d){this.a=d},
ebZ:function ebZ(d){this.a=d},
ec0:function ec0(d){this.a=d},
ebY:function ebY(d){this.a=d},
eeg:function eeg(d,e){this.a=d
this.b=e},
eee:function eee(d){this.a=d},
edr:function edr(d,e,f){this.a=d
this.b=e
this.c=f},
eds:function eds(d,e){this.a=d
this.b=e},
edq:function edq(d,e){this.a=d
this.b=e},
edp:function edp(d){this.a=d},
edo:function edo(d){this.a=d},
eco:function eco(){},
ecp:function ecp(){},
ecl:function ecl(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
ecn:function ecn(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ecm:function ecm(d){this.a=d},
ecj:function ecj(d){this.a=d},
eci:function eci(d){this.a=d},
eck:function eck(d,e){this.a=d
this.b=e},
ech:function ech(d,e){this.a=d
this.b=e},
ebO:function ebO(d){this.a=d},
ebP:function ebP(d){this.a=d},
edh:function edh(){},
ebr:function ebr(d){this.a=d},
ebq:function ebq(d){this.a=d},
ebs:function ebs(d,e){this.a=d
this.b=e},
ebd:function ebd(d){this.a=d},
ec5:function ec5(){},
edt:function edt(d,e){this.a=d
this.b=e},
ebp:function ebp(){},
edF:function edF(d){this.a=d},
ebn:function ebn(d){this.a=d},
ebo:function ebo(d,e){this.a=d
this.b=e},
ebm:function ebm(d){this.a=d},
ebl:function ebl(d){this.a=d},
ebV:function ebV(){},
edE:function edE(d,e){this.a=d
this.b=e},
eet:function eet(){},
eaX:function eaX(){},
ebS:function ebS(d,e){this.a=d
this.b=e},
ebT:function ebT(d){this.a=d},
ebU:function ebU(){},
ebx:function ebx(){},
eby:function eby(d){this.a=d},
ec7:function ec7(){},
ec8:function ec8(d,e){this.a=d
this.b=e},
ear:function ear(){},
eaq:function eaq(){},
eas:function eas(d){this.a=d},
eap:function eap(d){this.a=d},
eat:function eat(d){this.a=d},
eao:function eao(d){this.a=d},
eau:function eau(d,e){this.a=d
this.b=e},
ean:function ean(d){this.a=d},
eav:function eav(d,e){this.a=d
this.b=e},
eam:function eam(d,e){this.a=d
this.b=e},
eaw:function eaw(d){this.a=d},
eal:function eal(d){this.a=d},
eaT:function eaT(d){this.a=d},
eaU:function eaU(d){this.a=d},
edg:function edg(d,e,f){this.a=d
this.b=e
this.c=f},
ede:function ede(d,e,f){this.a=d
this.b=e
this.c=f},
edf:function edf(d,e){this.a=d
this.b=e},
eda:function eda(d,e,f){this.a=d
this.b=e
this.c=f},
ed9:function ed9(){},
edb:function edb(d,e){this.a=d
this.b=e},
edc:function edc(d,e){this.a=d
this.b=e},
edd:function edd(d,e){this.a=d
this.b=e},
ecY:function ecY(d,e){this.a=d
this.b=e},
ecV:function ecV(){},
ecW:function ecW(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ecU:function ecU(d,e,f){this.a=d
this.b=e
this.c=f},
ecX:function ecX(d,e,f){this.a=d
this.b=e
this.c=f},
ecT:function ecT(d,e){this.a=d
this.b=e},
eed:function eed(d){this.a=d},
eeb:function eeb(d){this.a=d},
eec:function eec(d,e){this.a=d
this.b=e},
ee3:function ee3(d,e,f){this.a=d
this.b=e
this.c=f},
ee2:function ee2(){},
ee4:function ee4(){},
ee5:function ee5(d,e){this.a=d
this.b=e},
ee6:function ee6(d,e){this.a=d
this.b=e},
ee7:function ee7(d){this.a=d},
ee8:function ee8(d){this.a=d},
ee9:function ee9(d){this.a=d},
eea:function eea(d){this.a=d},
ee_:function ee_(d){this.a=d},
edY:function edY(d){this.a=d},
edZ:function edZ(){},
edU:function edU(d,e,f){this.a=d
this.b=e
this.c=f},
edS:function edS(d){this.a=d},
edT:function edT(){},
edV:function edV(d,e,f){this.a=d
this.b=e
this.c=f},
edR:function edR(d,e){this.a=d
this.b=e},
edW:function edW(d,e){this.a=d
this.b=e},
edX:function edX(d,e){this.a=d
this.b=e},
edB:function edB(d,e){this.a=d
this.b=e},
edC:function edC(d){this.a=d},
edD:function edD(){},
ee0:function ee0(d,e){this.a=d
this.b=e},
edQ:function edQ(d,e){this.a=d
this.b=e},
edI:function edI(d){this.a=d},
edJ:function edJ(){},
edA:function edA(){},
edH:function edH(){},
eep:function eep(d){this.a=d},
eeq:function eeq(d){this.a=d},
eer:function eer(d){this.a=d},
eeo:function eeo(){},
ed6:function ed6(d){this.a=d},
ed7:function ed7(){},
eeh:function eeh(d){this.a=d},
eei:function eei(d){this.a=d},
eej:function eej(d,e){this.a=d
this.b=e},
eek:function eek(d,e){this.a=d
this.b=e},
eel:function eel(d,e){this.a=d
this.b=e},
eem:function eem(d,e){this.a=d
this.b=e},
een:function een(d,e){this.a=d
this.b=e},
ebw:function ebw(){},
ed4:function ed4(d,e){this.a=d
this.b=e},
ecc:function ecc(d){this.a=d},
ec9:function ec9(){},
eca:function eca(){},
ecb:function ecb(){},
ebW:function ebW(){},
ebX:function ebX(d){this.a=d},
edu:function edu(){},
ebQ:function ebQ(d){this.a=d},
edi:function edi(){},
edj:function edj(d){this.a=d},
edv:function edv(d){this.a=d},
edw:function edw(d){this.a=d},
edx:function edx(d){this.a=d},
ec2:function ec2(d){this.a=d},
ec1:function ec1(d){this.a=d},
ec3:function ec3(d){this.a=d},
edy:function edy(d){this.a=d},
edz:function edz(){},
edG:function edG(d){this.a=d},
ecr:function ecr(){},
ecs:function ecs(d){this.a=d},
ecA:function ecA(d){this.a=d},
ecB:function ecB(){},
ecC:function ecC(d){this.a=d},
ecu:function ecu(d){this.a=d},
ecv:function ecv(d,e){this.a=d
this.b=e},
ect:function ect(d,e){this.a=d
this.b=e},
ecw:function ecw(d,e){this.a=d
this.b=e},
ecz:function ecz(d){this.a=d},
ecx:function ecx(d){this.a=d},
ecq:function ecq(d){this.a=d},
ecy:function ecy(d){this.a=d},
ecd:function ecd(d){this.a=d},
ece:function ece(d){this.a=d},
ees:function ees(d){this.a=d},
ecg:function ecg(d){this.a=d},
ecf:function ecf(d){this.a=d},
e9T:function e9T(d){this.a=d},
e9S:function e9S(d,e,f){this.a=d
this.b=e
this.c=f},
e9N:function e9N(){},
e9O:function e9O(){},
e9P:function e9P(d){this.a=d},
e9Q:function e9Q(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ec6:function ec6(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
ee1:function ee1(d,e){this.a=d
this.b=e},
ed5:function ed5(d,e){this.a=d
this.b=e},
ed8:function ed8(d,e){this.a=d
this.b=e},
e9R:function e9R(d,e){this.a=d
this.b=e},
eb2:function eb2(d){this.a=d},
eb3:function eb3(d){this.a=d},
eb4:function eb4(d){this.a=d},
eb5:function eb5(d){this.a=d},
eb6:function eb6(d,e){this.a=d
this.b=e},
eb7:function eb7(d){this.a=d},
eb1:function eb1(d){this.a=d},
eb8:function eb8(d,e){this.a=d
this.b=e},
eb0:function eb0(d,e){this.a=d
this.b=e},
eb9:function eb9(d,e){this.a=d
this.b=e},
eb_:function eb_(d,e){this.a=d
this.b=e},
eba:function eba(d){this.a=d},
eaZ:function eaZ(d){this.a=d},
ebb:function ebb(d,e){this.a=d
this.b=e},
eaY:function eaY(d,e){this.a=d
this.b=e},
ebc:function ebc(d,e){this.a=d
this.b=e},
eev:function eev(d){this.a=d},
eex:function eex(d){this.a=d},
eeu:function eeu(d){this.a=d},
eew:function eew(d){this.a=d},
eaF:function eaF(d){this.a=d},
eaG:function eaG(d){this.a=d},
eaH:function eaH(d){this.a=d},
eaL:function eaL(d){this.a=d},
eaM:function eaM(d){this.a=d},
eaN:function eaN(d){this.a=d},
eaE:function eaE(d){this.a=d},
eaO:function eaO(d){this.a=d},
eaD:function eaD(d){this.a=d},
eaP:function eaP(d){this.a=d},
eaC:function eaC(d){this.a=d},
eaQ:function eaQ(d){this.a=d},
eaR:function eaR(d){this.a=d},
eaB:function eaB(d){this.a=d},
eaS:function eaS(d){this.a=d},
eaA:function eaA(d){this.a=d},
eaI:function eaI(d){this.a=d},
eaz:function eaz(d){this.a=d},
eaJ:function eaJ(d){this.a=d},
eay:function eay(d){this.a=d},
eaK:function eaK(d){this.a=d},
eax:function eax(d){this.a=d},
ea_:function ea_(d){this.a=d},
ead:function ead(d){this.a=d},
eac:function eac(){},
ea0:function ea0(d){this.a=d},
ea1:function ea1(d){this.a=d},
eae:function eae(){},
ea4:function ea4(d,e){this.a=d
this.b=e},
eaf:function eaf(d){this.a=d},
e9Z:function e9Z(d){this.a=d},
eag:function eag(d){this.a=d},
eah:function eah(d){this.a=d},
e9Y:function e9Y(d){this.a=d},
eai:function eai(d){this.a=d},
eaj:function eaj(d){this.a=d},
ea2:function ea2(d){this.a=d},
e9X:function e9X(d){this.a=d},
ea3:function ea3(d){this.a=d},
e9W:function e9W(d){this.a=d},
ea5:function ea5(d){this.a=d},
ea6:function ea6(d){this.a=d},
ea7:function ea7(d){this.a=d},
ea8:function ea8(d){this.a=d},
ea9:function ea9(d){this.a=d},
eaa:function eaa(d){this.a=d},
eab:function eab(d){this.a=d},
e9V:function e9V(){},
ed3:function ed3(d){this.a=d},
ed0:function ed0(d,e,f){this.a=d
this.b=e
this.c=f},
ed1:function ed1(d,e){this.a=d
this.b=e},
ed_:function ed_(d){this.a=d},
ed2:function ed2(d,e){this.a=d
this.b=e},
ecZ:function ecZ(d){this.a=d},
bk1:function bk1(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
dvz:function dvz(d,e){this.a=d
this.b=e},
bjr:function bjr(d,e){this.b=d
this.a=e},
aJ2:function aJ2(d,e){this.c=d
this.a=e},
bu6:function bu6(){this.c=this.a=this.d=null},
f7F:function f7F(d,e){this.a=d
this.b=e},
f7E:function f7E(d){this.a=d},
f7H:function f7H(d){this.a=d},
f7I:function f7I(d){this.a=d},
f7J:function f7J(d){this.a=d},
f7G:function f7G(d){this.a=d},
f29:function f29(d,e,f){var _=this
_.a=d
_.b=e
_.c=f
_.d=0
_.e=1
_.f=3
_.r=0
_.w=112
_.x=!1},
Mn:function Mn(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
Qk:function Qk(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fAa:function fAa(d,e){this.a=d
this.b=e},
fAh:function fAh(d){this.a=d},
fAc:function fAc(d){this.a=d},
fAi:function fAi(d){this.a=d},
fAb:function fAb(d){this.a=d},
fA8:function fA8(d,e){this.a=d
this.b=e},
fA9:function fA9(d,e){this.a=d
this.b=e},
fA2:function fA2(d,e){this.a=d
this.b=e},
fAe:function fAe(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fAg:function fAg(d){this.a=d},
fAf:function fAf(d,e,f){this.a=d
this.b=e
this.c=f},
fAd:function fAd(d,e,f){this.a=d
this.b=e
this.c=f},
fA3:function fA3(){},
fA4:function fA4(d){this.a=d},
fA1:function fA1(){},
fA5:function fA5(d){this.a=d},
fA6:function fA6(){},
fA7:function fA7(d){this.a=d},
aK0:function aK0(d,e,f){this.c=d
this.d=e
this.a=f},
bwh:function bwh(){this.d=!1
this.c=this.a=null},
fdn:function fdn(d){this.a=d},
fdm:function fdm(d){this.a=d},
hlg(){var w=$.hlf
return w==null?$.hlf=new A.cgH().$0():w},
iks(d,e,f){var w,v,u,t,s,r,q,p,o,n=null,m=e.a,l=e.b,k=new C.a3(0,0,0+m,0+l),j=C.bs(k,D.it)
$.S()
w=C.I()
w.sam(B.c6p.aA(0,k))
d.az(j,w)
v=C.I()
v.b=D.a9
v.r=F.f8.gp(0)
v.c=l*0.025
w=l*0.05
j=l*0.08
d.az(C.bs(k.cr(-w),new C.aP(j,j)),v)
w=C.bs(k.cr(-(l*0.1)),new C.aP(w,w))
v.c=l*0.01
d.az(w,v)
u=new C.t(m/2,l/2)
t=l*0.36
l=C.I()
l.r=H.ahq.gp(0)
d.ad(u,t*1.1,l)
l=C.I()
l.r=F.f8.gp(0)
d.ad(u,t,l)
l=C.I()
l.r=B.Fk.gp(0)
d.ad(u,t*0.9,l)
l=C.I()
l.b=D.a9
l.r=E.iU.gp(0)
l.c=t*0.04
d.ad(u,t*0.95,l)
s=$.Wa
r=C.bK(u,t*1.2,t*1.5)
if(s!=null){m=s.c
l=s.d
q=Math.min((r.c-r.a)/m,(r.d-r.b)/l)
p=C.bK(r.gbL(),l*q,m*q)
j=C.I()
j.Q=D.ci
d.oC(s,new C.a3(0,0,m,l),p,j)}else{o=C.fy(n,n,n,n,C.cS(n,n,n,n,n,n,n,n,n,C.l(n,n,E.iU,n,n,n,n,n,n,n,n,t*0.6,n,n,D.u,n,n,!0,n,n,n,n,n,n,n,n),"NGMY"),D.a4,D.bY,n,D.dA,D.bW)
o.el()
m=o.b
l=m.c
m=m.a.c
o.a3(d,u.aE(0,new C.t(l/2,m.gbb(m)/2)))}},
hzm(d,e,f){var w,v,u,t,s,r,q,p,o=null,n=e.ej(D.I),m=e.gdE()/2
$.S()
w=C.I()
w.r=F.f8.gp(0)
d.ad(n,m,w)
w=C.I()
w.r=B.Fk.gp(0)
d.ad(n,m*0.9,w)
w=C.I()
w.b=D.a9
w.r=E.iU.gp(0)
w.c=m*0.04
d.ad(n,m*0.93,w)
v=$.Wa
u=C.bK(n,m*1.2,m*1.5)
if(v!=null){w=v.c
t=v.d
s=Math.min((u.c-u.a)/w,(u.d-u.b)/t)
r=C.bK(u.gbL(),t*s,w*s)
q=C.I()
q.Q=D.ci
d.oC(v,new C.a3(0,0,w,t),r,q)}else{p=C.fy(o,o,o,o,C.cS(o,o,o,o,o,o,o,o,o,C.l(o,o,E.iU,o,o,o,o,o,o,o,o,m*0.6,o,o,D.u,o,o,!0,o,o,o,o,o,o,o,o),"NGMY"),D.a4,D.bY,o,D.dA,D.bW)
p.el()
w=p.b
t=w.c
w=w.a.c
p.a3(d,n.aE(0,new C.t(t/2,w.gbb(w)/2)))}},
vF(d,e,f,g,h){var w,v,u,t,s,r,q,p,o,n,m=null,l=e.a,k=e.b,j=new C.a3(0,0,0+l,0+k),i=e.gdE()*0.08
i=C.bs(j,new C.aP(i,i))
$.S()
w=C.I()
w.sam(B.arW.aA(0,j))
d.az(i,w)
w=j.cr(-(e.gdE()*0.045))
i=e.gdE()*0.06
i=C.bs(w,new C.aP(i,i))
w=C.I()
w.b=D.a9
w.r=F.f8.gp(0)
w.c=e.gdE()*0.035
d.az(i,w)
v=k*0.33
u=new C.t(k*0.6,k*0.5)
w=C.I()
w.r=F.f8.gp(0)
d.ad(u,v,w)
w=C.I()
w.r=B.Fk.gp(0)
d.ad(u,v*0.88,w)
t=$.Wa
s=C.bK(u,v*1.15,v*1.4)
if(t!=null){i=t.c
w=t.d
r=Math.min((s.c-s.a)/i,(s.d-s.b)/w)
q=C.bK(s.gbL(),w*r,i*r)
p=C.I()
p.Q=D.ci
d.oC(t,new C.a3(0,0,i,w),q,p)}else{o=C.fy(m,m,m,m,C.cS(m,m,m,m,m,m,m,m,m,C.l(m,m,E.iU,m,m,m,m,m,m,m,m,v*0.55,m,m,D.u,m,m,!0,m,m,m,m,m,m,m,m),"NGMY"),D.a4,D.bY,m,D.dA,D.bW)
o.el()
i=o.b
w=i.c
i=i.a.c
o.a3(d,u.aE(0,new C.t(w/2,i.gbb(i)/2)))}n=k*1.08
l=new A.fRC(l-n-k*0.2,d,n)
l.$4(g,k*0.36,D.c,k*0.16)
l.$4(h,k*0.14,F.f8,k*0.62)},
hv_(d){return 210+D.o.F(d.l(),5)*24},
fRy(d,e,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k="NEW GLOBAL",j="MOVEMENT",i="FOR YOUTH",h=e.a,g=e.b,f=new C.a3(0,0,0+h,0+g)
A:{if(0===a1){w=B.arW
break A}if(1===a1){w=B.c6e
break A}w=B.c4g
break A}v=e.gdE()*0.06
v=C.bs(f,new C.aP(v,v))
$.S()
u=C.I()
u.sam(w.aA(0,f))
d.az(v,u)
t=C.I()
t.b=D.a9
w=a1===2
t.r=(w?E.iU:F.f8).gp(0)
t.c=e.gdE()*0.04
v=f.cr(-(e.gdE()*0.05))
u=e.gdE()*0.05
d.az(C.bs(v,new C.aP(u,u)),t)
u=f.cr(-(e.gdE()*0.1))
v=e.gdE()*0.03
v=C.bs(u,new C.aP(v,v))
t.c=e.gdE()*0.012
d.az(v,t)
if(a1===1)s=E.iU
else s=w?E.iU:D.c
w=new A.fRA($.Wa,d,s)
v=new A.fRz(s,e,d)
u=g*0.4
r=g*0.12
if(a1===0){q=g*0.5
p=new C.t(g*0.62,q)
o=C.I()
o.r=F.f8.gp(0)
d.ad(p,g*0.34,o)
o=C.I()
o.r=B.Fk.gp(0)
d.ad(p,g*0.3,o)
w.$1(C.bK(p,u,q))
n=g*1.04
m=h-r
r=new A.fRB(e)
h=r.$1(k)
q=r.$1(j)
r=r.$1(i)
r=Math.max(C.je(q),C.je(r))
l=(n+m)/2
r=g*0.16*Math.min(1,(m-n)/Math.max(C.je(h),r))
v.$3(k,new C.t(l,g*0.2),r)
v.$3(j,new C.t(l,u),r)
v.$3(i,new C.t(l,g*0.6),r)}else{q=h/2
w.$1(C.bK(new C.t(q,g*0.42),u,h*0.6))
v.$3("NGMY",new C.t(q,g*0.68),r)
v.$4$w(i,new C.t(q,g*0.82),g*0.06,D.U)}},
hvh(f9,g0,g1,g2,g3,g4,g5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1,e2,e3,e4,e5,e6,e7,e8,e9,f0,f1,f2,f3,f4="walls",f5="GFCI outlet",f6="Wall outlet",f7="\ud83d\udeb0 Needs plumbing",f8=f9.c
if(f8==="outside")return A.i54(f9,g3,g2,g5,g4,g1)
f9.cJD()
w=x.z
v=C.a([],w)
u=new A.fg(v)
t=C.U(x.S,x.q)
s=C.a([],x.E)
r=C.a([],x.a)
q=f9.geb(0)
p=f9.gh0(0)
o=C.a([],x.O)
for(n=f9.z,m=n.length,l=0;l<n.length;n.length===m||(0,C.L)(n),++l)o.push(B.aAe[n[l]])
k=B.azX[f9.Q]
j=new A.fAz(g2)
u.f=-1
u.b=j.$2("floor",310)
i=$.dM+1
u.x=$.dM=i
n=p/2
m=q+2.4
h=p+2
g=k.b
f=k.c
e=f==="tile"
if(e)d=0.35
else d=f==="wood"?0.15:0
u.lU(new A.q(0,-0.6,n),new A.q(m,1.2,h),g,d,3)
t.n(0,310,new A.cV("Floor","The "+k.a.toLowerCase()+" floor.",new A.q(0,0,n),140))
u.b=0
if(f==="wood")for(f=-q/2,a0=1;a0<8;++a0){e=C.ar(g,D.w,0.25)
e.toString
u.aG(new A.q(f+a0*q/8,0.05,n),new A.q(0.3,0.2,p),e)}else if(e)for(g=-q/2,a0=1;a0<6;++a0){u.aG(new A.q(g+a0*q/6,0.05,n),new A.q(0.3,0.2,p),B.aeW)
u.aG(new A.q(0,0.05,a0*p/6),new A.q(q,0.2,0.3),B.aeW)}u.x=0
g=f8==="hall"
if(g){a1=Math.min(q*0.5,p*1.5)
a2=p-14
f=-a1/2
e=a1/2
r.push(new A.fq(C.a([new A.q(f,0.5,14),new A.q(e,0.5,14),new A.q(e,0.5,a2),new A.q(f,0.5,a2)],x.o),0,A.hz8(),900,900*(a2-14)/a1,60,-1,i,!1))}u.f=0
u.b=j.$2(f4,300)
a3=u.x=$.dM=$.dM+1
u.hj(new A.q(0,65,-0.6),new A.q(m,130,1.2),o[0],3)
u.x=0
u.b=j.$2(f4,301)
a4=u.x=$.dM=$.dM+1
f=-q
e=f/2
u.hj(new A.q(e-0.6,65,n),new A.q(1.2,130,p),o[1],3)
u.x=0
u.b=j.$2(f4,302)
a5=u.x=$.dM=$.dM+1
d=q/2
u.hj(new A.q(d+0.6,65,n),new A.q(1.2,130,p),o[2],3)
u.x=0
t.n(0,300,B.edS)
t.n(0,301,B.edW)
t.n(0,302,B.ee4)
if(g0){u.b=0
u.hj(new A.q(0,65,p+0.6),new A.q(m,130,1.2),o[0],3)}u.f=u.b=0
u.x=a3
u.aQ(new A.q(0,2.5,0.4),new A.q(q,5,0.8),B.kG,0.1)
u.x=a4
u.aQ(new A.q(e+0.4,2.5,n),new A.q(0.8,5,p),B.kG,0.1)
u.x=a5
u.aQ(new A.q(d-0.4,2.5,n),new A.q(0.8,5,p),B.kG,0.1)
u.x=0
u.f=g0?0:3
u.b=j.$2("ceiling",320)
if(g0)o=1
else o=g2==="ceiling"?0.6:0.4
u.d=o
u.hj(new A.q(0,130.6,n),new A.q(m,1.2,h),B.ayI[f9.as],2)
u.d=1
u.b=u.f=0
u.x=a3
u.aQ(new A.q(0,128,1),new A.q(q,3,1.4),D.c,0.2)
u.x=a4
u.aQ(new A.q(e+1,128,n),new A.q(1.4,3,p),D.c,0.2)
u.x=a5
u.aQ(new A.q(d-1,128,n),new A.q(1.4,3,p),D.c,0.2)
u.x=0
t.n(0,320,new A.cV("Ceiling","Pick a colour above to paint the ceiling.",new A.q(0,130,n),140))
h=f9.w
a6=D.d.b3(h,new A.fAl())?"left":"right"
if(!g){o=new A.fAw()
a7=p*0.55
if(g0)D.d.v(v,A.nE(o.$0(),0,3.141592653589793,new A.q(0,0,p+0.2)))
D.d.v(v,a6==="right"?A.nE(o.$0(),0,-1.5707963267948966,new A.q(d,0,a7)):A.nE(o.$0(),0,1.5707963267948966,new A.q(e,0,a7)))}for(o=f9.ax,m=f9.at,a0=0;a0<h.length;++a0){a8=h[a0]
if(a8.a)continue
a9=o.h(0,a0)
if(a9==null)a9=m.t(0,a0)?1.25:0
b0=C.a([],w)
b1=new A.fg(b0)
b1.f=1
b1.x=$.dM=$.dM+1
b2=b1.b=600+a0
b1.aG(B.hbU,B.hbD,B.kG)
b3=C.a([],w)
b4=new A.fg(b3)
b4.r=!0
b4.b=b2
if(a9>0.04){b1.b=0
b5=A.i23(a8.d)
b6=b5.a
b1.aG(B.ha3,B.h6n,b6)
b1.aG(B.hbb,B.hhT,b5.b)
b7=C.ar(b6,D.w,0.25)
b7.toString
b1.aG(B.haf,B.hfG,b7)
b8=-a9
b7=A.vG(B.hhN,b8)
b4.wu(new A.q(-12.5+b7.a,0+b7.b,1.2+b7.c),B.h5_,B.vJ,0.15,b8)}else{b1.aQ(B.haj,B.h9c,B.vJ,0.15)
b1.aQ(B.haq,B.haO,B.Fe,0.8)
b1.aG(B.haR,B.aYg,B.MT)
b1.aG(B.hhb,B.aYg,B.MT)}b7=new A.fAx(a8,q,p)
D.d.v(v,b7.$1(b0))
D.d.v(v,b7.$1(b3))
t.n(0,b2,new A.cV("Door","Tap the door to go through it.",B.aWD,90))}for(o=f9.x,m=o.length,l=0;l<o.length;o.length===m||(0,C.L)(o),++l){b9=o[l]
b0=b9.b
b2=B.hE.h(0,b0)
b2.toString
b3=C.a([],w)
c0=new A.fg(b3)
c0.r=!0
c0.f=b0==="rug"?1:2
b7=100+b9.a
c0.b=j.$2("furniture",b7)
A.h7P(c0,b0,B.zp[b9.f])
D.d.v(v,A.nE(A.i7Z(b3,0.8),0,b9.e*3.141592653589793/2,new A.q(b9.c,0,b9.d)))
t.n(0,b7,new A.cV(b2.a,y.M,new A.q(b9.c,12,b9.d),90))}u.f=2
u.r=!0
c1=p*0.5
w=C.T(h)
o=d-10
c2=D.k.E(new C.cO(new C.Z(h,new A.fAm(),w.k("Z<1>")),new A.fAn(),w.k("cO<1,K>")).cI(0,e+30,new A.fAo())+24,e+10,o)
c3=f9.go==="fan"
c4=f9.ga6g()
c5=c4&&f9.gMk()&&f9.fy
u.b=703
if(c3){u.dv(new A.q(0,129.5,c1),new A.q(0,120,c1),1,B.he,8)
u.dm(new A.q(0,120,c1),new A.q(0,113,c1),6,D.iC,0.5,14)
w=c5?B.o8:D.dn
u.dm(new A.q(0,113,c1),new A.q(0,110,c1),3.6,w,0.6,12)}else{w=c5?B.o8:D.dn
u.dm(new A.q(0,129.5,c1),new A.q(0,127,c1),7,w,0.6,16)}if(c5&&!c3){u.b=0
u.f=3
u.d=0.2
u.La(new A.q(0,127,c1),new A.q(0,0.5,c1),36,B.o8,!1,14)
u.d=1
u.f=2}c6=c3?"Ceiling fan":"Ceiling light"
if(!c4)c7="It has no power yet. "+(f9.p4.length!==0?"Tap it to wire it.":"The room still needs wiring: use the Wiring button.")
else if(!f9.gMk())c7="It is ready: wire the wall switch to turn it on."
else{w=f9.fy?"It is on. Tap the wall switch (or tap this) to turn it off.":"It is off. Tap the wall switch (or tap this) to turn it on."
c7=w}t.n(0,703,new A.cV(c6,c7,new A.q(0,122,c1),80))
w=f8==="bathroom"
m=!w
c8=!m||f8==="kitchen"||f9.p4==="gfci"
h=f9.ganN()
b0=c8?f5:f6
b2=f9.p4.length!==0||f9.Ir(1)
b3=c8?f5:f6
b3=C.a([new C.e2([0,700,f/4,h,b0]),new C.e2([1,701,q/4,b2,b3])],x.az)
for(h=f9.id,a0=0;a0<h.length;++a0){f=h[a0]
b0=f.a
if(b0!=="switch"){b2=f.c
b0=b2.c>=2&&A.La(A.t7(b0),b2).a==="ok"
b2=h[a0].a==="gfci"?"Added GFCI outlet":"Added outlet"
b3.push(new C.e2([2+a0,800+a0,f.b,b0,b2]))}}u.f=1
u.r=!1
for(f=b3.length,b0=f9.fx,l=0;l<b3.length;b3.length===f||(0,C.L)(b3),++l){b2=b3[l].a
a0=b2[0]
c9=b2[1]
d0=b2[2]
d1=b2[3]
d2=b2[4]
u.x=$.dM=$.dM+1
u.b=c9
u.e=0.4
u.d=0.55
d3=2
if(!d1)if(a0<2){b2=f9.p4
if(b2.length!==0)b2=d3
else{b2=f9.CW
if(b2!=null)b2=b2.biI(a0)
else b2=f9.ay?0:2}d3=b2}else d3=0
if(d1)b2=D.bf
else b2=d3===1?D.aA:D.ax
u.aG(new A.q(d0,14,0.25),B.h72,b2)
u.d=1
u.e=0
b2=d1?B.MH:D.iC
u.aQ(new A.q(d0,14,0.9),B.hcp,b2,0.25)
u.b=0
for(d4=0;d4<2;++d4)for(b2=14+F.hq[d4]*2.8,d5=0;d5<2;++d5)u.aG(new A.q(d0+B.Rr[d5],b2,1.7),B.hhB,B.ahn)
u.aG(new A.q(d0,14,1.7),B.hcn,D.dn)
u.x=0
if(!d1)b2="This one is not wired yet. Tap it to wire it."
else b2=b0.h(0,a0)==null?"Tap it to plug something in.":"Tap it to plug something else in, or to unplug."
t.n(0,c9,new A.cV(d2,b2,new A.q(d0,14,2),60))}f=C.a([new C.b7(702,c2,f9.gMk())],x.al)
for(a0=0;a0<h.length;++a0){b2=h[a0]
b7=b2.a
if(b7==="switch"){d6=b2.c
b7=d6.c>=2&&A.La(A.t7(b7),d6).a==="ok"
f.push(new C.b7(800+a0,b2.b,b7))}}for(h=f.length,l=0;l<f.length;f.length===h||(0,C.L)(f),++l){b2=f[l]
d0=b2.b
d1=b2.c
u.x=$.dM=$.dM+1
c9=u.b=b2.a
u.e=0.4
u.d=0.55
d7=2
if(!d1)if(c9===702){b2=f9.p4
if(b2.length!==0)b2=d7
else{b2=f9.CW
if(b2!=null)b2=b2.biI(3)
else b2=f9.ay?0:2}d7=b2}else d7=0
if(d1)b2=D.bf
else b2=d7===1?D.aA:D.ax
u.aG(new A.q(d0,48,0.25),B.h8V,b2)
u.d=1
u.e=0
b2=d1?B.MH:D.iC
u.aQ(new A.q(d0,48,0.9),B.h87,b2,0.25)
u.aG(new A.q(d0,f9.fy&&d1?49.2:46.8,1.9),B.h7Z,B.aji)
u.x=0
if(!d1)b2="Not wired yet. Tap it to wire it."
else if(f9.fy)b2="On. Tap to turn the "+(c3?"fan":"light")+" off."
else b2="Off. Tap to turn the "+(c3?"fan":"light")+" on."
t.n(0,c9,new A.cV("Light switch",b2,new A.q(d0,48,2),60))}if(f9.p4.length===0&&!f9.gkR()){if(f9.p4.length===0)h=f9.gkR()
else h=!0
if(h)d8=D.Y
else{h=C.a([],x.s)
if(!f9.ganN())h.push("outlet 1")
if(!(f9.p4.length!==0||f9.Ir(1)))h.push("outlet 2")
if(!f9.ga6g())h.push(f9.go==="fan"?"ceiling fan":"ceiling light")
if(!f9.gMk())h.push("switch")
d8=h}h=d8.length===0?"\u26a1 No power: needs wiring":"\u26a1 Still to wire: "+D.d.aH(d8,", ")
s.push(new A.hh(new A.q(0,104,c1),h,D.bB,0))}h=!1
if(f9.p4.length!==0)if(!f9.gza()){h=f9.p4
h=!(h==="ptrap"||h==="faucet")}if(h)s.push(new A.hh(new A.q(0,40,14),"\ud83d\udc46 Tap the red one to wire it",D.bB,0))
u.f=2
u.r=!0
for(h=b3.length,f=x.o,b2=f9.a,l=0;l<b3.length;b3.length===h||(0,C.L)(b3),++l){b7=b3[l].a
a0=b7[0]
d0=b7[2]
d1=b7[3]
d9=b0.h(0,a0)
if(d9==null||!d1)continue
e0=A.aPW(d9)
b7=u.b=720+a0
u.j9(C.a([new A.q(d0,12,1.8),new A.q(d0,6,3),new A.q(d0,2,11)],f),0.3,B.YD,!1,0.2,6)
d6=e0.d
e1=d6<=0
if(!e1||e0.e){b8=d6*0.56
e2=$.dM+1
u.x=$.dM=e2
u.aQ(new A.q(d0,2,15),new A.q(d6*0.45,4,14),B.he,0.3)
u.aQ(new A.q(d0,8,15),B.h6t,B.he,0.3)
e3=12+b8/2
u.aQ(new A.q(d0,e3,15),new A.q(d6,b8,3),E.FC,0.5)
d6=(d6-3.5)/2
e4=d0-d6
e5=(b8-3.5)/2
e6=e3+e5
d6=d0+d6
e5=e3-e5
r.push(new A.fq(C.a([new A.q(e4,e6,16.6),new A.q(d6,e6,16.6),new A.q(d6,e5,16.6),new A.q(e4,e5,16.6)],f),b7,new A.fAp(a0*7+b2),320,180,9,2,e2,!0))
u.x=0}else{d6=e0.a
if(d6==="lamp"){u.dm(new A.q(d0,0,14),new A.q(d0,1,14),6,B.XD,0.4,14)
u.dm(new A.q(d0,1,14),new A.q(d0,22,14),1,B.BC,0.5,8)
d6=f9.fy?B.o8:L.YK
u.yV(new A.q(d0,20,14),new A.q(d0,32,14),9,d6,!1,!0,5.5,0.2,16)}else{e3=d6==="washer"
if(e3||d6==="dryer"){d6=e3?B.ahX:B.aiU
u.aQ(new A.q(d0,15,20),B.aX2,d6,0.4)
u.aQ(new A.q(d0,28,31.2),B.h3A,B.aeY,0.3)
u.dm(new A.q(d0,14,31),new A.q(d0,14,31.8),8.5,B.aez,0.8,20)
d6=e3?B.afa:B.aiF
u.dm(new A.q(d0,14,31.7),new A.q(d0,14,32.2),6.5,d6,0.9,20)}else if(d6==="range"){u.aQ(new A.q(d0,15,20),B.aX2,B.Bv,0.7)
u.aQ(new A.q(d0,13,31.2),B.h6U,D.xQ,0.9)
u.aQ(new A.q(d0,22,32.2),B.h3e,B.agt,0.9)
u.aQ(new A.q(d0,30.3,20),B.ha4,B.afT,0.5)
for(d4=0;d4<2;++d4)for(d6=d0+B.dnA[d4],d5=0;d5<2;++d5){e7=B.cij[d5]
u.dm(new A.q(d6,30.8,e7),new A.q(d6,31.1,e7),3.6,B.ahm,0.3,14)}}else{u.aQ(new A.q(d0,9,15),B.h2s,B.nX,0.1)
if(d6==="toaster"){u.aQ(new A.q(d0,23,15),B.h2l,B.jb,0.8)
u.aG(new A.q(d0,28.2,15),B.hdC,B.aiE)}else{u.yU(new A.q(d0-7,21,15),new A.q(d0+7,21,15),3.6,B.FR,3,0.6,12)
u.aQ(new A.q(d0-8,14.5,15),B.haK,B.FR,0.6)}}}}d6=!e1||e0.e?"It is playing NGMY ads. Tap it to watch full screen with the remote.":"It is plugged in and running. Tap the outlet to unplug it or plug in something else."
t.n(0,b7,new A.cV(e0.b,d6,new A.q(d0,16,14),90))}u.f=1
u.r=!1
e8=new A.fAr(f9,u,q,r,t)
e8.$2(f9.k1,0)
if(g){e8.$2(f9.k2,1)
e8.$2(f9.k1,2)
h=f9.k2
e8.$2(h==null?f9.k1:h,3)}if(g)for(e9=p-14,h=d-14,a0=0;a0<4;++a0){f0=(D.o.F(a0,2)===0?-1:1)*h
f1=a0<2?14:e9
f2=Math.atan2(-f0,-(n-f1)*-1)
u.f=2
u.r=!1
u.x=$.dM=$.dM+1
g=19e3+a0
u.b=g
u.aG(new A.q(f0,125,f1),B.h5u,D.iC)
u.wu(new A.q(f0,118,f1),B.h1B,D.bO,0.4,f2)
u.wu(new A.q(f0+Math.sin(f2)*8.5,118,f1+Math.cos(f2)*8.5),B.h6s,D.av,0.6,f2)
u.ee(new A.q(f0-Math.sin(f2)*5+Math.cos(f2)*3,122,f1-Math.cos(f2)*5-Math.sin(f2)*3),1.4,D.ax,3,5)
u.b=u.x=0
t.n(0,g,new A.cV("Hall camera","Tap it and you look from here, like your eyes.",new A.q(f0,118,f1),60))}u.f=2
u.r=!0
if(!m||f8==="kitchen"){f8=f9.p4
f8=f8.length===0||f8==="ptrap"||f8==="faucet"}else f8=!1
if(f8){d1=f9.gjT()
f8=new A.fAy(u)
if(w){f3=e+17
if(d1){u.b=710
u.yU(new A.q(6,0.5,14),new A.q(6,15,14),8,B.Bi,5.6,0.8,18)
u.dm(new A.q(6,15,14),new A.q(6,16,14),9,B.MJ,0.8,18)
u.aQ(new A.q(6,21,5),B.h2E,B.Bi,0.8)
u.aQ(new A.q(6,28,5),B.h9R,B.MJ,0.8)}else{u.b=710
u.d=0.3
u.f=3
u.aG(new A.q(6,14,9),B.h2v,D.b_)
u.d=1
u.f=2
f8.$2(-4,8)}u.b=711
A.hse(u,new A.q(34,14,10),30,28,18,B.nX)
A.b7i(u,11,D.c,18,20,B.jb,B.Yc,32,7,d1,1,2,30,0.6,34,10)
w=!d1
if(w){f8.$2(28,18)
f8.$2(40,18)}u.b=712
if(d1){u.aQ(new A.q(f3,8,38),B.aX9,B.Z2,0.7)
u.aQ(new A.q(f3,16.2,38),B.hfB,B.XZ,0.8)
u.dm(new A.q(f3,30,3),new A.q(f3,52,3),0.7,B.jb,0.9,8)
u.dm(new A.q(f3,52,3),new A.q(f3,52,10),0.7,B.jb,0.9,8)}else{u.d=0.3
u.f=3
u.aG(new A.q(f3,8,38),B.aX9,D.b_)
u.d=1
u.f=2
f8.$2(f3-4,34)
f8.$2(f3+4,34)}f8=d1?"Fitted on its flange with a wax ring, and the supply hose joins the shut-off valve.":"There is no toilet yet: only the flange and the water stub. Use the Plumbing button to fit it."
t.n(0,710,new A.cV("Toilet",f8,new A.q(6,14,10),70))
f8=d1?"The faucet, the hoses and the P-trap are fitted.":"The sink is not plumbed. Use the Plumbing button."
t.n(0,711,new A.cV("Vanity sink",f8,new A.q(34,28,10),70))
f8=d1?"The bath is in and connected.":"The bath is not connected yet."
t.n(0,712,new A.cV("Bath",f8,new A.q(f3,10,38),90))
if(w)s.push(new A.hh(new A.q(0,40,14),f7,D.bl,0))}else{u.b=0
u.aQ(new A.q(e+15,36,14),B.h3x,B.ah7,0.6)
u.aG(new A.q(e+28.5,36,14.4),B.hc4,D.dn)
u.aQ(new A.q(o,15,14),B.h33,B.afr,0.1)
u.aQ(new A.q(o,31,14),B.h3f,B.he,0.5)
u.aQ(new A.q(d-15,32.4,14),B.aXA,D.i2,0.3)
u.aQ(new A.q(d-5,32.4,14),B.aXA,D.i2,0.3)
u.b=713
A.hse(u,new A.q(30,15,14),40,30,26,B.nX)
A.b7i(u,17,D.e2,28,28,B.jb,B.Mp,42,8.5,d1,1,2,32,0.6,30,14)
w=!d1
if(w){f8.$2(22,18)
f8.$2(38,18)}f8=d1?"The faucet, the hoses and the drain are fitted.":"The kitchen sink is not plumbed yet. Use the Plumbing button."
t.n(0,713,new A.cV("Kitchen sink",f8,new A.q(30,30,14),70))
if(w)s.push(new A.hh(new A.q(30,48,14),f7,D.bl,0))}}for(f8=D.d.gaf(g4),w=new C.f2(f8,new A.fAq(f9));w.C();){o=f8.gS(0)
t.n(0,900+o.a,new A.cV(o.r,"Tap to see how they are, feed them or give medicine.",new A.q(o.c,36,o.d),90))}return new A.tU(v,t,s,r,new C.cw([e,d,0,p]),0)},
kI(d,e,f,g,h,i,j,k,l){var w=-h/2,v=i/2,u=h/2,t=-i/2
d.cXw(e.a7(0,f.aK(0,w)).a7(0,g.aK(0,v)),e.a7(0,f.aK(0,u)).a7(0,g.aK(0,v)),e.a7(0,f.aK(0,u)).a7(0,g.aK(0,t)),e.a7(0,f.aK(0,w)).a7(0,g.aK(0,t)),j,k,l)},
i54(d7,d8,d9,e0,e1,e2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5=-158,c6=1000,c7=1200,c8=x.z,c9=C.a([],c8),d0=new A.fg(c9),d1=x.S,d2=C.U(d1,x.q),d3=C.a([],x.E),d4=d7.geb(0),d5=d7.gh0(0),d6=new A.ftt(d9)
d0.f=0
d0.b=d6.$2("floor",310)
d0.hj(new A.q(0,-0.6,d5/2-60),new A.q(d4*2.5,1.2,d5*2.5),B.XG,5)
d2.n(0,310,B.ee_)
d0.b=0
d0.f=1
d0.aG(new A.q(0,0.15,60),B.h7X,E.Fh)
for(w=0;w<6;++w)d0.aG(new A.q(0,0.35,8+w*22),B.hcs,B.bpG)
d0.f=2
v=$.dM+1
d0.x=$.dM=v
d0.hj(B.h1_,B.h3l,B.Mk,3)
d0.aG(B.h0v,B.h3m,B.aeE)
u=new A.ftu(d0)
t=new A.ftp(d0)
for(s=0;s<4;++s){r=B.dnJ[s]
u.$5(B.dX,B.hu,B.ig,r,62)
u.$5(B.dX,B.hu,B.ig,r,122)}t.$5(B.dX,B.hu,B.ig,0,600)
for(s=0;s<2;++s){r=B.aBh[s]
u.$5(B.aaX,B.r0,B.tr,r,62)
u.$5(B.aaX,B.r0,B.tr,r,122)}t.$5(B.aaX,B.r0,B.tr,0,0)
for(s=0;s<2;++s){q=B.a5c[s]
u.$5(B.h1L,B.tr,B.hu,q,62)
u.$5(B.hep,B.ig,B.r0,-q,62)}p=C.a([],c8)
new A.fg(p).lU(B.dX,B.h3u,B.Mn,0.1,2)
d0.a7f(B.hef,B.hcS,B.hc3,B.Mk,B.hu,!1)
d0.a7f(B.hc9,B.h5C,B.hcw,B.Mk,B.r0,!1)
d0.x=0
d0.r=!0
D.d.v(c9,A.nE(p,0.5,0,B.h_G))
D.d.v(c9,A.nE(p,-0.5,0,B.h_H))
d0.aG(B.h_J,B.h3t,B.Y8)
d0.aG(B.h65,B.h2e,B.aid)
d0.aG(B.h66,B.aWV,B.qa)
d0.aG(B.h0h,B.h55,E.Fh)
d0.dv(B.heE,B.heF,2.2,B.kG,8)
d0.dv(B.h35,B.h36,2.2,B.kG,8)
d0.aQ(B.h18,B.h5e,B.Mn,0.1)
d2.n(0,600,B.eeB)
p=x.a
o=C.a([],p)
n=new A.ftq(o,v)
n.$4(B.h7G,B.hcC,B.hdl,B.hb9)
n.$5$poster(B.h61,B.h4P,B.h6T,B.hd8,1)
n.$5$poster(B.h8M,B.h91,B.h7i,B.hd5,2)
n.$5$poster(B.hdg,B.hi1,B.haF,B.hcB,0)
d0.r=!0
m=C.U(d1,d1)
for(d1=d7.x,l=d1.length,s=0;s<d1.length;d1.length===l||(0,C.L)(d1),++s){k=d1[s]
j=k.a
i=100+j
if(e2.t(0,i))continue
h=k.b
if(D.d.t(B.I9,h)){d2.n(0,i,new A.cV(B.hE.h(0,h).a,"It wanders about. Move it with the arrow buttons or take it out.",new A.q(k.c,12,k.d),140))
continue}g=B.hE.h(0,h)
g.toString
f=C.a([],c8)
e=new A.fg(f)
d=e.r=!0
e.f=D.d.t(B.a5n,h)?1:2
a0=h==="hospital"
e.b=(!a0?h==="shop":d)?i:d6.$2("furniture",i)
A.h7P(e,h,B.zp[k.f])
if(f.length!==0)m.n(0,j,D.d.gI(f).z)
D.d.v(c9,A.nE(f,0,k.e*3.141592653589793/2,new A.q(k.c,0,k.d)))
if(a0)j="The hospital: tap it to see the beds and treat the patients."
else j=h==="shop"?"The shop: tap it to buy food and medicine.":y.M
d2.n(0,i,new A.cV(g.a,j,new A.q(k.c,12,k.d),140))}a1=C.a([],x._)
for(l=D.d.gaf(d1),j=new C.f2(l,new A.fsN()),i=d7.k3;j.C();){h=l.gS(0)
g=h.a
a2=i.t(0,g)
f=h.b==="pole"
d=h.c
a0=h.d
a3=f?new A.q(d+20,86,a0):new A.q(d,55,a0)
d=C.a([],c8)
a4=new A.fg(d)
a0=f?4.6:4.2
a5=a2?D.e9:B.o8
a4.fQ(a3,a0,a5,3,6,a2?0.1:0)
if(!a2){a4.d=0.2
a4.fQ(a3,10,B.o8,2,6,0)
a4.d=1}D.d.v(c9,d)
if(a2)d3.push(new A.hh(new A.q(a3.a+0,a3.b+14,a3.c+0),"\u26a1 Light out: tap to go and fix it",D.bB,2e4+g))
if(f)a1.push(h)}D.d.aZ(a1,new A.fsO())
for(l=x.o,w=0;a6=w+1,a6<a1.length;w=a6){a7=a1[w]
a8=a1[a6]
if(Math.abs(a7.d-a8.d)>1||Math.abs(a8.c-a7.c)>170)continue
j=C.a([],c8)
a9=new A.fg(j)
for(s=0;s<3;++s){b0=B.aBb[s]
i=a7.c
h=a7.d
g=a8.c
a9.j9(C.a([new A.q(i+b0,121,h),new A.q((i+g)/2+b0,117,h),new A.q(g+b0,121,h)],l),0.35,D.av,!1,0,4)}D.d.v(c9,j)}for(j=D.d.gaf(d1),i=new C.f2(j,new A.fsP(d7)),h=d7.cy;i.C();){g=j.gS(0)
f=g.c
d=g.b==="hq"?190:130
a0=g.d
g=g.a
d3.push(new A.hh(new A.q(f,d,a0+40),"\u26a1 Level "+C.w(h.h(0,g))+" has no power: tap to go and fix it",D.bB,2e4+g))}for(j=D.d.gaf(d1),i=new C.f2(j,new A.ft_(d7));i.C();){h=j.gS(0)
g=h.b
f=B.hE.h(0,g)
f.toString
d=h.c
g=g==="bighouse"?120:82
d3.push(new A.hh(new A.q(d,g,h.d),"\u26a1 No power: tap to go in and fix it",D.bB,2e4+h.a))
g=C.a([],c8)
b1=new A.fg(g)
b1.d=0.45
d=h.c
b1.aG(new A.q(d,30,h.d),new A.q(f.c+2,60,f.d+2),D.dd)
b1.d=1
D.d.v(c9,g)}if(d7.c==="outside")D.d.v(c9,A.iaY())
b2=C.a([],p)
for(c8=D.d.gaf(d1),d1=new C.f2(c8,new A.fta());d1.C();){p=c8.gS(0)
d4=new A.fts(p.e*3.141592653589793/2,p)
b3=m.h(0,p.a)
if(b3==null)b3=0
j=p.b
if(j==="billboard"){b2.push(new A.fq(C.a([d4.$3(-33,62.5,2),d4.$3(33,62.5,2),d4.$3(33,31.5,2),d4.$3(-33,31.5,2)],l),0,new A.ftj(p),960,450,4,2,b3,!1))
b2.push(new A.fq(C.a([d4.$3(33,62.5,-2),d4.$3(-33,62.5,-2),d4.$3(-33,31.5,-2),d4.$3(33,31.5,-2)],l),0,new A.ftk(p),960,450,4,2,b3,!1))}else{i=j==="townsign"
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
b2.push(new A.fq(C.a([d4.$3(p,j,b7),d4.$3(b4,j,b7),d4.$3(b4,i,b7),d4.$3(p,i,b7)],l),0,new A.ftl(b8),b9,c0,4,2,b3,!1))
h=-b7
b2.push(new A.fq(C.a([d4.$3(b4,j,h),d4.$3(p,j,h),d4.$3(p,i,h),d4.$3(b4,i,h)],l),0,new A.ftm(b8),b9,c0,4,2,b3,!1))}else if(j==="adboard"){b2.push(new A.fq(C.a([d4.$3(c5,195,3.6),d4.$3(158,195,3.6),d4.$3(158,90,3.6),d4.$3(c5,90,3.6)],l),0,new A.ftn(p),1280,424,4,2,b3,!1))
b2.push(new A.fq(C.a([d4.$3(158,195,-3.6),d4.$3(c5,195,-3.6),d4.$3(c5,90,-3.6),d4.$3(158,90,-3.6)],l),0,new A.fto(p),1280,424,4,2,b3,!1))}else if(j==="tower"){c1=210+D.o.F(B.zp[p.f].l(),5)*24
j=c1-8
i=c1-54
b2.push(new A.fq(C.a([d4.$3(-40,j,35.9),d4.$3(40,j,35.9),d4.$3(40,i,35.9),d4.$3(-40,i,35.9)],l),0,new A.fsQ(p),800,460,8,2,b3,!1))
b2.push(new A.fq(C.a([d4.$3(40,j,-35.9),d4.$3(-40,j,-35.9),d4.$3(-40,i,-35.9),d4.$3(40,i,-35.9)],l),0,new A.fsR(p),800,460,8,2,b3,!1))
b2.push(new A.fq(C.a([d4.$3(50.9,j,28),d4.$3(50.9,j,-28),d4.$3(50.9,i,-28),d4.$3(50.9,i,28)],l),0,new A.fsS(p),640,460,8,2,b3,!1))
b2.push(new A.fq(C.a([d4.$3(-50.9,j,-28),d4.$3(-50.9,j,28),d4.$3(-50.9,i,28),d4.$3(-50.9,i,-28)],l),0,new A.fsT(p),640,460,8,2,b3,!1))
i=c1+58
j=c1+22
b2.push(new A.fq(C.a([d4.$3(-40,i,1.7),d4.$3(40,i,1.7),d4.$3(40,j,1.7),d4.$3(-40,j,1.7)],l),0,new A.fsU(p),960,400,8,2,b3,!1))
b2.push(new A.fq(C.a([d4.$3(40,i,-1.7),d4.$3(-40,i,-1.7),d4.$3(-40,j,-1.7),d4.$3(40,j,-1.7)],l),0,new A.fsV(p),960,400,8,2,b3,!1))}else if(j==="hq"){b2.push(new A.fq(C.a([d4.$3(-70,108,45.9),d4.$3(70,108,45.9),d4.$3(70,52,45.9),d4.$3(-70,52,45.9)],l),0,new A.fsW(),c6,400,8,2,b3,!1))
b2.push(new A.fq(C.a([d4.$3(-48,215,30.2),d4.$3(48,215,30.2),d4.$3(48,175,30.2),d4.$3(-48,175,30.2)],l),0,new A.fsX(),900,380,8,2,b3,!1))
b2.push(new A.fq(C.a([d4.$3(70,108,-45.9),d4.$3(-70,108,-45.9),d4.$3(-70,52,-45.9),d4.$3(70,52,-45.9)],l),0,new A.fsY(),c6,400,8,2,b3,!1))
b2.push(new A.fq(C.a([d4.$3(48,215,-30.2),d4.$3(-48,215,-30.2),d4.$3(-48,175,-30.2),d4.$3(48,175,-30.2)],l),0,new A.fsZ(),900,380,8,2,b3,!1))
b2.push(new A.fq(C.a([d4.$3(-54,328,1.7),d4.$3(54,328,1.7),d4.$3(54,294,1.7),d4.$3(-54,294,1.7)],l),0,new A.ft0(p),c6,360,8,2,b3,!1))
b2.push(new A.fq(C.a([d4.$3(54,328,-1.7),d4.$3(-54,328,-1.7),d4.$3(-54,294,-1.7),d4.$3(54,294,-1.7)],l),0,new A.ft1(p),c6,360,8,2,b3,!1))
b2.push(new A.fq(C.a([d4.$3(85.9,118,36),d4.$3(85.9,118,-36),d4.$3(85.9,62,-36),d4.$3(85.9,62,36)],l),0,new A.ft2(p),720,560,8,2,b3,!1))
b2.push(new A.fq(C.a([d4.$3(-85.9,118,-36),d4.$3(-85.9,118,36),d4.$3(-85.9,62,36),d4.$3(-85.9,62,-36)],l),0,new A.ft3(p),720,560,8,2,b3,!1))}else if(j==="store"){b2.push(new A.fq(C.a([d4.$3(-54,85,37.7),d4.$3(54,85,37.7),d4.$3(54,67,37.7),d4.$3(-54,67,37.7)],l),0,new A.ft4(),900,150,6,2,b3,!1))
b2.push(new A.fq(C.a([d4.$3(-72,152,30.3),d4.$3(72,152,30.3),d4.$3(72,96,30.3),d4.$3(-72,96,30.3)],l),0,new A.ft5(),c7,470,8,2,b3,!1))
b2.push(new A.fq(C.a([d4.$3(72,152,25.7),d4.$3(-72,152,25.7),d4.$3(-72,96,25.7),d4.$3(72,96,25.7)],l),0,new A.ft6(),c7,470,8,2,b3,!1))}else if(j==="ubstation"){b2.push(new A.fq(C.a([d4.$3(40,106,31.9),d4.$3(76,106,31.9),d4.$3(76,86,31.9),d4.$3(40,86,31.9)],l),0,new A.ft7(),480,270,8,2,b3,!1))
b2.push(new A.fq(C.a([d4.$3(76,106,28.1),d4.$3(40,106,28.1),d4.$3(40,86,28.1),d4.$3(76,86,28.1)],l),0,new A.ft8(),480,270,8,2,b3,!1))}else if(j==="dmv"){b2.push(new A.fq(C.a([d4.$3(-50,85,38.6),d4.$3(50,85,38.6),d4.$3(50,67,38.6),d4.$3(-50,67,38.6)],l),0,new A.ft9(),900,160,8,2,b3,!1))
b2.push(new A.fq(C.a([d4.$3(-72,152,30.3),d4.$3(72,152,30.3),d4.$3(72,96,30.3),d4.$3(-72,96,30.3)],l),0,new A.ftb(),c7,470,8,2,b3,!1))
b2.push(new A.fq(C.a([d4.$3(72,152,25.7),d4.$3(-72,152,25.7),d4.$3(-72,96,25.7),d4.$3(72,96,25.7)],l),0,new A.ftc(),c7,470,8,2,b3,!1))}else if(j==="gasstation")b2.push(new A.fq(C.a([d4.$3(-86,107,35.7),d4.$3(-54,107,35.7),d4.$3(-54,85,35.7),d4.$3(-86,85,35.7)],l),0,new A.ftd(),480,330,6,2,b3,!1))
else for(c2=0;c2<2;++c2){c3=c2===0?-40:40
j=c3-26
i=c3+26
b2.push(new A.fq(C.a([d4.$3(j,70,60.7),d4.$3(i,70,60.7),d4.$3(i,40,60.7),d4.$3(j,40,60.7)],l),0,new A.fte(p,c2),720,520,9,2,b3,!1))}}}for(c8=D.d.gaf(e1),d1=new C.f2(c8,new A.ftf(d7));d1.C();){p=c8.gS(0)
d3.push(new A.hh(new A.q(p.c,82,p.d),p.Q,D.cQ,0))}for(c8=D.d.gaf(e1),d1=new C.f2(c8,new A.ftg(d7));d1.C();){p=c8.gS(0)
d3.push(new A.hh(new A.q(p.c,80,p.d),"\ud83d\udcde Help!",D.bB,0))}c8=d8===0
d1=c8?"\u2705 The house is finished":"\ud83c\udfe0 "+d8+" rooms still need work"
d3.push(new A.hh(B.h_Z,d1,c8?D.cT:D.dZ,0))
c4=d0.x=$.dM=$.dM+1
for(s=0;s<2;++s){r=B.aBh[s]
d0.dv(new A.q(r,0,-118),new A.q(r,215,-118),3,D.iC,8)}d0.aQ(B.Ax,B.h3r,D.av,0.3)
d0.x=0
o.push(new A.fq(B.cPE,0,new A.fth(),c6,336,4,2,c4,!1))
o.push(new A.fq(B.dkb,0,new A.fti(),c6,336,4,2,c4,!1))
c8=C.C(o,x.R)
D.d.v(c8,b2)
return new A.tU(c9,d2,d3,c8,null,4000)},
ibU(a5,a6,a7,a8,a9,b0,b1,b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=x.z,a3=C.a([],a2),a4=new A.fg(a3)
a4.r=!0
if(a5.c==="outside"){w=new A.fDx(b1)
v=b1!=null
if(v&&b1.a===a5.a)A.wQ(a4,b1,a6,b2,!0,0,null)
if(a7&&v&&b1.a===a5.a){v=C.a([],a2)
u=b1.b
t=b1.d
new A.fg(v).aG(new A.q(u+Math.sin(t)*9,46+b1.y,b1.c+Math.cos(t)*9),B.aWT,B.iz)
D.d.v(a3,v)}if(a9!=null){v=C.a([],a2)
s=new A.fg(v)
s.r=!0
u=a9.a
A.h7P(s,u[0],B.zp[u[4]])
D.d.v(a3,A.nE(v,0,u[3]-1.5707963267948966,new A.q(u[1],0,u[2])))}for(v=D.d.gaf(a5.x),u=new C.f2(v,new A.fDu()),t=a6*6,r=b0==="furniture";u.C();){q=v.gS(0)
p=q.a
o=a6*(0.25+D.o.F(p,5)*0.04)+p*1.7
n=q.c
m=Math.cos(o)
l=q.d
k=Math.sin(o)
j=Math.atan2(-Math.sin(o),Math.cos(o))
i=C.a([],a2)
h=new A.fg(i)
h.r=!0
h.b=r?100+p:0
A.hqj(h,q.b,B.zp[q.f],Math.sin(t+p)*0.5)
D.d.v(a3,A.nE(i,0,j,new A.q(n+m*10,0,l+k*10)))}for(v=D.d.gaf(b3),u=new C.f2(v,new A.fDv(a5)),t=a5.a;u.C();){r=v.gS(0)
q=r.c
p=r.d
n=r.e
m=r.f
l=r.a
A.wQ(a4,new A.y6(t,q,p,n,!1,!1,!1,!1,!1,0,!1,!1,"","",-1,0,-1,0),a6,m,w.$2(q,p),900+l,m.c)
A.hZN(a4,r,a6)}for(v=a8.length,g=0;g<a8.length;a8.length===v||(0,C.L)(a8),++g){f=a8[g]
u=f.b
r=f.c
q=f.d
A.wQ(a4,new A.y6(t,u,r,q,f.f,!1,!1,!1,!1,0,!1,!1,"","",-1,0,-1,f.e),a6,f.w,w.$2(u,r),0,f.x)
if(f.r){p=C.a([],a2)
new A.fg(p).aG(new A.q(u+Math.sin(q)*9,46,r+Math.cos(q)*9),B.h2_,F.f8)
D.d.v(a3,p)}}return a3}if(b1!=null&&b1.a===a5.a)A.wQ(a4,b1,a6,b2,!0,0,null)
for(a2=D.d.gaf(b3),v=new C.f2(a2,new A.fDw(a5)),u=a5.a,t=a6*0.5;v.C();){r=a2.gS(0)
q=r.y
p=q>0
e=p?Math.sin(t+r.a)*q:0
q=r.c
n=r.d
if(p)m=Math.cos(t+r.a)>=0?1.5707963267948966:-1.5707963267948966
else m=r.x?0.5:r.e
A.wQ(a4,new A.y6(u,q+e,n,m,p,!1,!1,!1,r.x,0,!1,!1,"","",-1,0,-1,0),a6,r.f,!0,900+r.a,null)}d=a5.gh0(0)
if(a5.go==="fan"){a0=a5.ga6g()&&a5.gMk()&&a5.fy?a6*7:0
a4.b=703
for(a2=d*0.5,a1=0;a1<4;++a1){o=a0+a1*3.141592653589793/2
a4.wu(new A.q(Math.cos(o)*15,115,a2+Math.sin(o)*15),B.hh5,B.nX,0.1,-o)}}return a3},
i23(d){var w
A:{if(5===d){w=B.eNV
break A}if(9===d){w=B.eT3
break A}if(10===d){w=B.eG8
break A}if(11===d){w=B.eU2
break A}if(2===d||4===d||8===d){w=B.evG
break A}w=B.eIP
break A}return w},
fzp(b0,b1,b2,b3,b4,b5,b6,b7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9
for(w=b2.a,v=b2.b,u=b2.c,t=b1.a,s=b1.b,r=b1.c,q=b3.a,p=q*0.1,o=b3.b,n=o*0.1,m=b3.c,l=m*0.1,k=q*0.2,j=o*0.2,i=m*0.2,q*=0.3,o*=0.3,m*=0.3,h=-b4/2,g=b5-1,f=b5===1,e=0;e<b5;++e){d=f?0:h+b4*e/g
for(a0=b6.length,a1=s+v*d,a2=t+w*d+0,a3=r+u*d+0,a4=a2+p,a5=a3+l,a6=a2+k,a7=a3+i,a2+=q,a3+=m,a8=0;a8<b6.length;b6.length===a0||(0,C.L)(b6),++a8){a9=a1+b6[a8]
A.kI(b0,new A.q(a4,a9+n,a5),b2,B.e8,14,17,B.kG,b3,0)
A.kI(b0,new A.q(a6,a9+j,a7),b2,B.e8,11,14,b7,b3,0.6)
A.kI(b0,new A.q(a2,a9+o,a3),b2,B.e8,11,0.9,B.kG,b3,0)}}},
hqO(a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0
A:{if("shop"===a2){w=B.f1g
break A}if("hospital"===a2){w=B.f1b
break A}if("firestation"===a2){w=B.f0S
break A}if("school"===a2){w=B.f0L
break A}w=B.f0u
break A}w=w.a
v=w[0]
u=w[1]
t=w[2]
s=w[3]
r=w[4]
q=u/2
p=v/2
a1.x=$.dM=$.dM+1
a1.hj(new A.q(0,t/2,0),new A.q(v,t,u),s,2)
a1.aG(new A.q(0,2.5,0),new A.q(v+3,5,u+3),B.aeE)
w=a2==="hospital"
if(w)o=C.a([14,30,46],x.n)
else if(a2==="school"){n=C.a([14,32],x.n)
o=n}else{n=x.n
n=a2==="house2"?C.a([26],n):C.a([22],n)
o=n}m=D.o.E(D.k.bf(v/24),2,5)
n=a2==="firestation"
l=n?C.a([34],x.n):o
k=v-30
A.fzp(a1,new A.q(0,0,q).a7(0,B.dX),B.hu,B.ig,k,m,l,B.i1)
j=q+0.4
if(n){A.kI(a1,new A.q(-14,17,j),B.hu,B.e8,34,34,D.hk,B.ig,0.2)
for(i=q+0.5,h=0;h<6;++h)A.kI(a1,new A.q(-14,4+h*6,i),B.hu,B.e8,33,0.8,D.dn,B.ig,0)
A.kI(a1,new A.q(24,15,j),B.hu,B.e8,14,30,B.vJ,B.ig,0)}else{A.kI(a1,new A.q(0,14,q+0.3),B.hu,B.e8,18,28,B.kG,B.ig,0)
A.kI(a1,new A.q(0,13,j),B.hu,B.e8,14,26,B.vJ,B.ig,0.2)}switch(a2){case"hospital":i=t-8
A.kI(a1,new A.q(0,i,j),B.hu,B.e8,30,9,D.bB,B.ig,0)
j=q+0.5
A.kI(a1,new A.q(0,i,j),B.hu,B.e8,24,2.6,D.c,B.ig,0)
A.kI(a1,new A.q(0,i,j),B.hu,B.e8,2.6,7,D.c,B.ig,0)
break
case"shop":for(i=q+3,h=0;h<6;++h){g=(h&1)===0?D.ax:D.c
A.kI(a1,new A.q(-30+h*12,33,i),B.hu,B.e8,6,6,g,B.ig,0)}A.kI(a1,new A.q(0,t-4,j),B.hu,B.e8,36,6,a3,B.ig,0)
break
case"firestation":A.kI(a1,new A.q(0,t-5,j),B.hu,B.e8,40,7,D.bt,B.ig,0)
break
case"school":A.kI(a1,new A.q(0,t-5,j),B.hu,B.e8,40,7,D.bl,B.ig,0)
break}j=-q
A.fzp(a1,new A.q(0,0,j),B.r0,B.tr,k,m,l,B.i1)
A.kI(a1,new A.q(0,13,j-0.4),B.r0,B.e8,14,26,B.vJ,B.tr,0)
f=D.o.E(D.k.bf(u/24),1,3)
k=u-26
A.fzp(a1,new A.q(p,0,0),B.tr,B.hu,k,f,l,B.i1)
i=-p
A.fzp(a1,new A.q(i,0,0),B.ig,B.r0,k,f,l,B.i1)
a1.x=0
k=x.z
g=C.a([],k)
e=new A.fg(g)
e.r=!0
e.b=a1.b
e.f=a1.f
if(a2==="house2"||a2==="school"){w=C.a([],k)
d=new A.fg(w)
d.r=!0
d.b=a1.b
d.f=a1.f
d.aQ(B.dX,new A.q(v+6,2.5,u*0.58),r,0.1)
n=a1.a
k=t+5
D.d.v(n,A.nE(w,0.42,0,new A.q(0,k,u*0.25)))
a0=-u
D.d.v(n,A.nE(w,-0.42,0,new A.q(0,k,a0*0.25)))
k=p+0.2
w=t+12
a1.a7f(new A.q(k,t,q),new A.q(k,t,j),new A.q(k,w,0),s,B.hu,!1)
i-=0.2
a1.a7f(new A.q(i,t,j),new A.q(i,t,q),new A.q(i,w,0),s,B.r0,!1)
if(a2==="school"){w=q-10
e.aG(new A.q(0,t+18,w),B.h2t,D.agw)
e.aG(new A.q(0,t+30,w),B.h3h,r)
e.dv(new A.q(0,t+31,w),new A.q(0,t+46,w),0.6,D.dn,6)
e.aG(new A.q(5,t+44,w),B.hdi,D.ax)}else e.aG(new A.q(v*0.28,t+14,a0*0.1),B.h6V,B.aid)}else{k=v+2
e.aQ(new A.q(0,t+1.5,0),new A.q(k,3,u+2),r,0.05)
e.aG(new A.q(0,t+4,q+0.5),new A.q(k,4,1.4),a3)
if(w){w=v*0.25
k=-u*0.15
e.aG(new A.q(w,t+5,k),B.h3w,D.bs)
e.aG(new A.q(w,t+6.2,k),B.hdx,D.c)}if(n){w=p-10
n=-u*0.2
e.aG(new A.q(w,t+16,n),B.h2d,B.ah_)
e.aG(new A.q(w,t+32,n),B.aWV,r)}}D.d.v(a1.a,g)},
i71(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=d.f,f=d.e
d.f=1
d.e=0
if(e==="road"){d.Cn(B.h9V,B.haZ,B.h8R,B.hbi,B.My,B.e8)
d.e=90
for(w=0;w<2;++w){v=B.Rr[w]
u=v-0.7
t=v+0.7
d.Cn(new A.q(-20,0.9,u),new A.q(20,0.9,u),new A.q(20,0.9,t),new A.q(-20,0.9,t),L.Mc,B.e8)}for(w=0;w<2;++w){v=B.dnu[w]
u=v-0.8
t=v+0.8
d.Cn(new A.q(-20,0.9,u),new A.q(20,0.9,u),new A.q(20,0.9,t),new A.q(-20,0.9,t),D.bO,B.e8)}d.f=g
d.e=f
return}d.Cn(B.hb8,B.hhv,B.h8P,B.h7o,B.My,B.e8)
d.e=90
A:{if("roadturn"===e){u=B.dm8
break A}if("roadtee"===e){u=B.d39
break A}u=B.ck3
break A}for(t=u.length,w=0;w<t;++w){s=u[w]
r=s.a
q=s.b
for(s=q!==0,p=r!==0,o=30*r,n=30*q,m=0;m<2;++m){l=B.Rr[m]
k=p?o:l
j=s?n:l
i=p?36:1.4
h=s?36:1.4
d.aG(new A.q(k,0.95,j),new A.q(i,0.1,h),L.Mc)}}d.f=g
d.e=f},
hqj(d,e,f,g){var w=new A.fjB(d,g)
switch(e){case"dog":d.aQ(B.xg,B.hgJ,f,0.05)
d.ee(B.h82,3.4,f,4,8)
d.aG(B.hbw,B.h6Q,D.Ms)
d.aG(B.hcX,B.aXH,B.he)
d.aG(B.hhJ,B.aXH,B.he)
d.dv(B.hdN,B.h_D,0.8,f,5)
w.$5(B.dkS,6,6,1.7,f)
break
case"cat":d.aQ(B.Ay,B.h6L,f,0.05)
d.ee(B.h11,2.7,f,4,8)
d.aG(B.hgf,B.aWY,f)
d.aG(B.hgj,B.aWY,f)
d.dv(B.h10,B.h_u,0.7,f,5)
w.$5(B.div,4,4,1.2,f)
break
case"cow":d.aQ(B.aaZ,B.h29,D.bN,0.05)
d.aG(B.hgs,B.hfK,B.he)
d.aG(B.h9x,B.h6O,B.he)
d.aG(B.h_T,B.h7_,D.bN)
d.aG(B.h_K,B.hi3,D.nW)
d.aG(B.h7f,B.aWZ,D.bO)
d.aG(B.hhC,B.aWZ,D.bO)
d.dv(B.h_W,B.h13,0.7,B.he,5)
w.$5(B.d7_,11,11,3.2,D.bO)
break
case"sheep":d.ee(B.aaY,8.5,D.q2,4,8)
d.ee(B.h_B,7,D.q2,4,8)
d.ee(B.h_x,3.4,B.he,4,8)
w.$5(B.dkM,8,8,1.8,B.he)
break
case"chicken":d.ee(B.Ay,4,f,4,8)
d.ee(B.h_h,2.2,f,3,6)
d.aG(B.h_r,B.hfE,D.bB)
d.aG(B.h8a,B.h7J,D.aA)
d.aG(B.h15,B.h51,f)
w.$5(B.d5_,3,3,0.8,D.aA)
break
case"horse":d.aQ(B.h0_,B.h1J,f,0.1)
d.Lb(B.h09,B.h0q,4.2,f,3,8)
d.aG(B.h0s,B.h5z,f)
d.aG(B.h0B,B.hfD,B.he)
d.dv(B.h0e,B.h14,1.8,B.he,6)
w.$5(B.d4i,16,16,2.6,f)
break
default:d.aG(B.Ay,B.h6Y,f)}},
bCH(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=C.a([],x.z)
for(w=d.length,v=e.a,u=e.b,t=e.c,s=f.a,r=f.b,q=f.c,p=x.o,o=0;o<d.length;d.length===w||(0,C.L)(d),++o){n=d[o]
m=C.a([],p)
for(l=n.a,k=l.length,j=0;j<l.length;l.length===k||(0,C.L)(l),++j){i=l[j]
m.push(new A.q(s+(i.a-s)*v,r+(i.b-r)*u,q+(i.c-q)*t))}l=n.b
h.push(new A.kq(m,new A.q(l.a/v,l.b/u,l.c/t).gmV(0),n.c,n.d,n.e,n.f,n.r,n.w,n.x,n.y,n.z))}return h},
hZN(d,e,f){var w,v,u,t,s,r=e.z
if(r.length===0)return
w=e.e
v=new A.fjr(e,Math.sin(w),Math.cos(w))
u=d.b
d.b=0
switch(r){case"feed":d.Lb(v.$3(14,0,8),v.$3(14,9,8),4.5,B.nX,5.5,10)
for(r=f*0.9,t=0;t<9;++t){s=D.k.F(r+t/9,1)
d.fQ(v.$3(10+s*26,26-s*22,Math.sin(t*2.1)*4),0.9,D.lZ,3,5,0)}break
case"cook":d.aQ(v.$2(18,9),B.h3d,D.iC,0.2)
d.aG(v.$2(18,18.4),B.h6y,D.fs)
d.d=0.3
for(r=f*0.5,t=0;t<6;++t){s=D.k.F(r+t/6,1)
d.fQ(v.$2(18+Math.sin(t*1.9)*3,22+s*22),2+s*4,D.Fl,3,6,0)}d.d=1
break
case"wash":d.Lb(v.$3(20,0,-10),v.$3(20,8,-10),4,D.aJ,5,10)
for(r=f*1.4,t=0;t<12;++t){s=D.k.F(r+t/12,1)
d.fQ(v.$3(8+s*24,30-s*s*26,6),0.8,D.hj,3,5,0.3)}break
case"water":d.aQ(v.$3(12,22,7),B.h6X,D.ej,0.2)
for(r=f*1.2,t=0;t<10;++t){s=D.k.F(r+t/10,1)
d.fQ(v.$3(18+s*8,22-s*22,7),0.7,D.hj,3,5,0.3)}break
case"teach":d.aQ(v.$2(22,26),B.hdM,D.dY,0.1)
d.aG(v.$2(22.8,26),B.hbh,D.bN)
break
case"duty":d.aG(v.$3(0,74,0),B.h9s,D.L)
break}d.b=u},
wQ(d,e,f,g,h,i,j){var w,v,u,t,s,r
if(e.Q){w=C.a([],x.z)
A.wQ(new A.fg(w),A.atV(!1,0,-1,"",!1,0,"",-1,e.CW*0.5,!1,!1,!1,e.a,!1,e.e,0,0,0),f,g,h,i,j)
D.d.v(d.a,A.nE(w,1.5707963267948966,e.d,new A.q(e.b,9,e.c)))
return}w=g.e
v=$.h2e.h(0,w)
if(v==null){if(B.Sl.aj(0,w)&&!$.h2c.t(0,w)){A.bU8(w)
return}A.i5P(d,e,f,h,i,g)
return}w=e.e
u=e.z
t=w&&!u&&e.CW>0?e.CW*12:null
s=j==null
r=s?null:g.a
s=s?null:g.d
D.d.v(d.a,v.cX_(h,i,e.y,s,u,r,f,j,t,w,e.b,e.d,e.c))},
i5P(e6,e7,e8,e9,f0,f1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2=e7.e,d3=d2?D.k.V(e7.CW*24):-1,d4=f1.a,d5=f1.b,d6=f1.c,d7=f1.d,d8=f1.f,d9=f1.r,e0=f1.w,e1=e7.f,e2=e7.r,e3=e7.w,e4=C.bw(d4.l(),d5.l(),d6.l(),d7.l(),d8,d9,e0,e9,d3,e1,e2,e3,f0,D.h,D.h,D.h,D.h,D.h,D.h,D.h),e5=$.ftQ.h(0,e4)
if(e5!=null){D.d.v(e6.a,A.nE(e5,0,e7.d,new A.q(e7.b,e7.y,e7.c)))
return}w=C.a([],x.z)
v=new A.fg(w)
v.b=f0
v.r=!0
u=C.ar(d4,D.w,0.16)
u.toString
t=C.ar(d4,B.blA,0.55)
t.toString
s=d2?Math.sin(e7.CW*3.141592653589793):0
r=e9?8:6
q=e9?4:3
p=e9?8:6
o=e9?4:3
n=e9?9:6
m=x.n
l=C.a([],m)
for(k=0;k<2;++k)l.push(s*F.hq[k]*0.6)
j=C.a([],m)
for(i=l.length,k=0;k<l.length;l.length===i||(0,C.L)(l),++k){h=l[k]
j.push(d2?Math.max(0,-h)*1.5+0.1:0.04)}m=C.a([],m)
for(g=0;g<2;++g)m.push(16*Math.cos(l[g])+15.5*Math.cos(l[g]+j[g]))
f=Math.max(m[0],m[1])+3.3
e=new A.fuk(f0,v)
d=new A.ftS(v,r,e9)
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
e.$3(new A.ftT(q,p),B.hbF,new A.q(a1,a2+-1.6,i))
if(e9)e.$3(new A.ftU(p),B.h8l,new A.q(a1,a2+-2.9,i))
if(e9){i=C.ar(d7,D.c,m)
i.toString
v.ee(new A.q(a1,a2+1.2,a3+0),2.1,i,3,p)}}m=d8?1.22:1.12
e.$3(new A.ftV(d7,q,p),new A.q(m,0.78,0.76),new A.q(0,f+1.2,0))
if(d8){d7=C.ar(d7,D.c,Math.abs(0.05))
d7.toString
m=e9?12:8
v.Tm(new A.q(0,f+3.4,0),new A.q(0,f-9.5,0),5.9,d7,!1,7.8,m)}a6=d8?5.8:6.5
a7=d8?4.2:4.9
d7=d8?0.66:0.62
e.$3(new A.fu5(a7,d6,a6,e9),new A.q(1,1,d7),new A.q(0,f+2.5,0))
if(!d8)e.$3(new A.fud(),B.h2I,new A.q(0,f+2.4,0))
if(d8&&e9)for(d7=f+14.3,k=0;k<2;++k)e.$3(new A.fue(d6,q,p),B.h3I,new A.q(F.hq[k]*2.7,d7,2.7))
d7=d8?1.1:1.2
e.$3(new A.fuf(d8,d6,o,n),new A.q(d7,0.5,0.62),new A.q(0,f+19.6,0))
d7=d8?1.8:2.1
v.dv(new A.q(0,f+20.5,0.2),new A.q(0,f+24.2,0.5),d7,d4,8)
if(e9){d7=C.ar(d6,D.c,Math.abs(0.12))
d7.toString
v.Tm(new A.q(0,f+20,0.1),new A.q(0,f+21.4,0.2),3.1,d7,!1,2.5,10)}d7=f+29
a8=new A.q(0,d7,0.6)
e.$3(new A.fug(d4,e9),B.hdB,a8)
m=d8?0.95:1.05
e.$3(new A.fuh(d4,q,p),new A.q(m,0.8,0.95),a8.a7(0,B.h4Z))
if(e9)for(m=d7+-0.3,k=0;k<2;++k)e.$3(new A.fui(d4),B.hgu,new A.q(0+F.hq[k]*4.35,m,0.7))
else for(m=d7+-0.2,k=0;k<2;++k)v.ee(new A.q(0+F.hq[k]*4.2,m,0.6),1,d4,2,5)
for(m=d7+1.9,l=d7+0.4,j=d7+2.05,i=d7+0.7,a1=d7+1.25,a2=d7+0.95,k=0;k<2;++k){a0=F.hq[k]
a3=a0*1.8
a9=0+a3
if(e9){e.$3(new A.fuj(),B.hdQ,new A.q(a9,l,4.75))
v.ee(new A.q(a9,l,5.1),0.55,B.aew,2,5)}else v.aG(new A.q(a9,l,5),B.hbW,B.aew)
a3=0+a3
if(e9){v.ee(new A.q(0+a0*1.6,i,5.55),0.18,D.c,2,4)
e.$3(new A.ftW(u),B.h9W,new A.q(a3,a1,4.8))
a9=d8?0.28:0.18
v.aG(new A.q(a3,a2,5.22),new A.q(2.3,a9,0.2),D.nk)
a9=d8?0.34:0.5
v.aG(new A.q(a3,j,4.75),new A.q(2.4,a9,0.55),d5)}else v.aG(new A.q(a3,m,4.8),B.hhj,d5)}e.$3(new A.ftX(u),B.hhE,a8.a7(0,B.h8b))
if(e9){v.La(a8.a7(0,B.hhG),a8.a7(0,B.hgc),0.55,d4,!1,5)
for(m=d7+-1.8,k=0;k<2;++k)v.aG(new A.q(0+F.hq[k]*0.55,m,5.1),B.h95,u)}if(e9){v.aG(a8.a7(0,B.h5T),B.hb6,B.bjy)
e.$3(new A.ftY(t),B.hag,a8.a7(0,B.hcf))
e.$3(new A.ftZ(t),B.h5g,a8.a7(0,B.h8p))}else v.aG(a8.a7(0,B.hbo),B.h9K,B.bmQ)
switch(d9){case 1:e.$3(new A.fu_(d5,e9),B.h88,a8.a7(0,B.aXQ))
e.$3(new A.fu0(d5,p),B.ab7,a8.a7(0,B.aYr))
e.$3(new A.fu1(d5,q,p),B.hgY,a8.a7(0,B.hhg))
for(d9=d7+1.5,d7+=-7.2,k=0;k<2;++k){a0=F.hq[k]
v.La(new A.q(0+a0*4.4,d9,1),new A.q(0+a0*4.3,d7,1),1.2,d5,!1,6)}break
case 2:e.$3(new A.fu2(d5,e9),B.hdH,a8.a7(0,B.h8B))
e.$3(new A.fu3(d5,p),B.h9G,a8.a7(0,B.hgK))
break
case 3:d5=C.ar(d6,D.c,Math.abs(0.18))
d5.toString
e.$3(new A.fu4(d5,e9),B.hck,a8.a7(0,B.h7j))
e.$3(new A.fu6(d5,p),B.ab7,a8.a7(0,B.hi5))
e.$3(new A.fu7(d5,q,p),B.hgQ,a8.a7(0,B.h8m))
break
case 4:e.$3(new A.fu8(d5,q,p),B.hhD,a8.a7(0,B.hhl))
e.$3(new A.fu9(d5,p),B.hbu,a8.a7(0,B.haV))
break
default:e.$3(new A.fua(d5,e9),B.h6K,a8.a7(0,B.aXQ))
e.$3(new A.fub(d5,p),B.ab7,a8.a7(0,B.aYr))}b0=d8?6.2:7
for(d5=f+19.3,d7=-s,k=0;k<2;++k){a0=F.hq[k]
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
e.$3(new A.fuc(d4),B.hae,new A.q(t,i,a1))
if(e9){a2=d9<0?-1:1
a3=0*a2
a9=-j*a2
a2=d9*a2
for(b4=t+0,b5=i+d9*1.5+0,b6=a1+j*1.5+0,b7=a3*0.25,b8=a9*0.25,b9=a2*0.25,c0=0+a3*0.8,c1=d9*0.6+a9*0.8,c2=j*0.6+a2*0.8,c3=0;c3<4;++c3){c4=u?1:-1
c4=b4+(-1.5+c3)*c4
c5=B.aze[c3]
c6=c4+0*c5*0.55+b7
c7=b5+d9*c5*0.55+b8
c5=b6+j*c5*0.55+b9
c8=new A.q(c6,c7,c5)
c9=new A.q(c0,c1,c2).gmV(0)
d0=B.aze[c3]
v.Tm(new A.q(c4,b5,b6),c8,0.62,d4,!1,0.58,4)
v.Tm(c8,new A.q(c6+c9.a*d0*0.45,c7+c9.b*d0*0.45,c5+c9.c*d0*0.45),0.56,d4,!1,0.48,4)}b5=-a0
b4+=b5*2
i=i+d9*0.4+0
a1=a1+j*0.4+0.5
b5=new A.q(0+b5*0.5,d9*0.7+0,j*0.7+0.5).gmV(0)
b6=b4+b5.a*1.7
b7=i+b5.b*1.7
b5=a1+b5.c*1.7
d1=new A.q(b6,b7,b5)
a2=new A.q(0+a3*0.4,d9*0.8+a9*0.4,j*0.8+a2*0.4).gmV(0)
v.La(new A.q(b4,i,a1),d1,0.7,d4,!1,4)
v.La(d1,new A.q(b6+a2.a*1.4,b7+a2.b*1.4,b5+a2.c*1.4),0.6,d4,!1,4)}if(u&&e1){d9=l+0
v.dm(new A.q(t,m+-2.6,d9),new A.q(t,m+2.6,d9),1.7,D.aJ,0.5,8)}if(u&&e2){v.aQ(new A.q(t,m+-0.4,l+2.6),B.haA,D.nk,0.3)
v.aG(new A.q(t,m+0.2,l+3.8),B.h7Q,D.ax)}}if(e0!==1)w=A.bCH(w,new A.q(e0,e0,e0),B.dX)
if($.ftQ.a>900)$.ftQ.aa(0)
$.ftQ.n(0,e4,w)
D.d.v(e6.a,A.nE(w,0,e7.d,new A.q(e7.b,e7.y,e7.c)))},
i7Z(d,e){var w,v,u,t,s,r,q,p,o,n=C.a([],x.z)
for(w=d.length,v=x.o,u=0;u<d.length;d.length===w||(0,C.L)(d),++u){t=d[u]
s=C.a([],v)
for(r=t.a,q=r.length,p=0;p<r.length;r.length===q||(0,C.L)(r),++p){o=r[p]
s.push(new A.q(o.a*e,o.b*e,o.c*e))}n.push(new A.kq(s,t.b,t.c,t.d,t.e,t.f,t.r,t.w,t.x,t.y,t.z))}return n},
h7P(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=C.ar(f,D.w,Math.abs(-0.25))
h.toString
w=C.ar(f,D.c,Math.abs(0.2))
w.toString
A:{if("bed"===e){d.aQ(B.Ay,B.h5F,B.qa,0.1)
d.aQ(B.h_z,B.h5m,f,0.05)
d.aG(B.hex,B.aX0,B.ahJ)
d.aG(B.h2c,B.aX0,B.ahJ)
d.aQ(B.h02,B.h5H,B.qa,0.1)
d.aG(B.h_N,B.hdG,w)
break A}if("nightstand"===e){d.aQ(B.xg,B.h2m,f,0.1)
d.aG(B.hcA,B.h6c,h)
d.aG(B.hht,B.h4u,B.ahj)
d.aG(B.h05,B.h7c,B.o8)
break A}if("wardrobe"===e){d.aQ(B.h0p,B.h4I,f,0.1)
d.aG(B.h7z,B.h4S,h)
d.aQ(B.hak,B.aY3,B.Fe,0.8)
d.aQ(B.hhS,B.aY3,B.Fe,0.8)
break A}if("desk"===e){d.aQ(B.VD,B.h4O,f,0.1)
d.aG(B.heG,B.aX6,h)
d.aG(B.h39,B.aX6,h)
d.aQ(B.h0H,B.h3a,B.M5,0.5)
d.aG(B.h0m,B.h5W,D.iC)
break A}if("rug"===e){d.hj(B.hgD,B.h2F,f,2)
d.aG(B.h7m,B.hfP,w)
break A}if("sofa"===e){d.aQ(B.xg,B.h6z,f,0.05)
d.aQ(B.h01,B.h6A,h,0.05)
d.aQ(B.heU,B.aXq,h,0.05)
d.aQ(B.h4g,B.aXq,h,0.05)
d.aG(B.hew,B.aX1,w)
d.aG(B.h2b,B.aX1,w)
break A}if("armchair"===e){d.aQ(B.xg,B.h3U,f,0.05)
d.aQ(B.h00,B.h3W,h,0.05)
d.aG(B.hes,B.aXn,h)
d.aG(B.h20,B.aXn,h)
break A}if("coffee"===e){d.aQ(B.VC,B.h4C,f,0.2)
for(v=0;v<4;++v){w=B.dn8[v]
d.aG(new A.q(w.a,6.5,w.b),B.h3F,h)}d.aQ(B.h8T,B.h6W,D.bO,0.5)
break A}if("tvstand"===e){d.aQ(B.ab2,B.h5c,f,0.1)
d.aG(B.h6w,B.h8w,h)
d.aG(B.h_M,B.h32,B.he)
break A}if("dining"===e){d.aQ(B.VD,B.h5d,f,0.2)
for(v=0;v<4;++v){w=B.cPn[v]
d.aG(new A.q(w.a,13,w.b),B.h4r,h)}break A}if("chair"===e){d.aQ(B.h_I,B.h2w,f,0.1)
d.aQ(B.h0g,B.h2u,f,0.1)
for(v=0;v<4;++v){w=B.dcF[v]
d.aG(new A.q(w.a,7.5,w.b),B.h3_,h)}break A}if("plant"===e){d.dv(B.dX,B.ab2,5,D.d0,10)
d.ee(B.aaZ,8,B.Fc,5,8)
d.ee(B.h4q,5,B.XU,4,8)
break A}if("lamp"===e){d.dv(B.dX,B.e8,4.5,B.he,10)
d.dv(B.e8,B.aWF,0.7,B.he,6)
d.Lb(B.h0J,B.ab0,6,B.o8,3.5,12)
break A}if("console"===e){d.aQ(B.h08,B.aXl,f,0.15)
d.aG(B.h9i,B.aX5,h)
d.aG(B.h7r,B.aX5,h)
d.aG(B.xg,B.hfA,h)
break A}if("shelf"===e){d.aQ(B.ab_,B.h4e,f,0.1)
for(u=0;u<4;++u){h=10+u*15
d.aG(new A.q(0,h,1),B.h42,B.he)
w=D.o.F(u,2)
d.aG(new A.q(-8+w*6,h,2),B.h5B,[D.el,D.dF,D.ej,D.dZ][u])
d.aG(new A.q(4+w*4,h,2),B.h6Z,[D.dZ,D.ej,D.el,D.dF][u])}break A}if("tree"===e){d.Lb(B.dX,B.h0o,4.2,B.qa,3,8)
d.ee(B.aWF,17,B.Fc,5,9)
d.ee(B.h7b,11,B.XU,4,8)
d.ee(B.hfs,12,B.bmt,4,8)
break A}if("pine"===e){d.dv(B.dX,B.aWv,3,B.qa,8)
for(u=0;u<3;++u){h=u*14
d.Lb(new A.q(0,8+h,0),new A.q(0,26+h,0),14-u*3.5,B.afb,1.5,10)}break A}if("bush"===e){d.ee(B.xg,9,B.bj6,4,8)
d.ee(B.h5A,6.5,B.XU,4,8)
break A}if("flowers"===e){for(v=0;v<5;++v){h=B.dlF[v]
t=h.a
s=h.b
d.dv(new A.q(t,0,s),new A.q(t,7,s),0.4,B.afb,5)
d.ee(new A.q(t,8,s),2.2,h.c,3,6)}break A}if("fence"===e){for(v=0;v<4;++v)d.aQ(new A.q(B.dnq[v],9,0),B.hcr,f,0.05)
d.aG(B.Ay,B.aYl,h)
d.aG(B.aaY,B.aYl,h)
break A}if("lamppost"===e){d.dv(B.dX,B.aWG,1.3,B.he,5)
d.dv(B.dX,B.h0t,3.5,B.he,6)
break A}if("bench"===e){d.aQ(B.aWy,B.aXl,f,0.1)
d.aQ(B.h_X,B.h4G,f,0.1)
d.aG(B.hey,B.aXi,B.he)
d.aG(B.h2y,B.aXi,B.he)
break A}if("car"===e){d.aQ(B.aWv,B.h6G,f,0.4)
d.aQ(B.hf3,B.h4L,f,0.4)
d.aQ(B.h2H,B.h96,B.i1,0.6)
d.aG(B.hfO,B.ab4,B.o8)
d.aG(B.h9O,B.ab4,B.o8)
for(v=0;v<2;++v){t=B.a5e[v]
d.dv(new A.q(t,5,-18),new A.q(t,5,-21),5.5,D.nk,12)
d.dv(new A.q(t,5,18),new A.q(t,5,21),5.5,D.nk,12)}break A}if("road"===e||"roadturn"===e||"roadtee"===e||"roadcross"===e){A.i71(d,e)
break A}if("roundabout"===e){d.dv(B.dX,B.h9_,72,B.My,16)
d.dv(B.h9j,B.aY6,17,D.bn,10)
d.dv(B.aY6,B.aXN,15,B.blF,10)
d.ee(B.ab2,6,E.XE,3,6)
d.dv(B.aXN,B.ab1,0.9,B.qa,5)
break A}if("house2"===e||"shop"===e||"hospital"===e||"firestation"===e||"school"===e){h=C.a([],x.z)
r=new A.fg(h)
r.b=d.b
r.r=!0
r.f=d.f
A.hqO(r,e,f)
D.d.v(d.a,A.bCH(h,B.hdc,B.dX))
break A}if("bighouse"===e){h=C.a([],x.z)
q=new A.fg(h)
q.b=d.b
q.r=!0
q.f=d.f
A.hqO(q,"house2",f)
D.d.v(d.a,A.bCH(h,B.he1,B.dX))
break A}if("pole"===e){d.Lb(B.dX,B.h_p,2.6,B.qa,2,5)
d.aG(B.h_l,B.h4N,B.bhl)
for(v=0;v<3;++v){t=B.aBb[v]
d.dv(new A.q(t,116,0),new A.q(t,121,0),1.1,D.bN,4)}d.dv(B.h4Y,B.h4W,5.5,D.bn,6)
d.aG(B.h1T,B.h31,D.iC)
break A}if("crate"===e){d.aQ(B.ab1,B.h3v,B.iz,0.05)
d.aG(B.hhr,B.h2r,B.vJ)
d.fQ(B.hf7,3.4,D.ax,3,5,0.3)
d.fQ(B.h5v,3.4,D.aA,3,5,0.3)
break A}if("billboard"===e){d.x=$.dM=$.dM+1
for(v=0;v<2;++v){t=B.a5e[v]
d.dv(new A.q(t,0,-1),new A.q(t,40,-1),1.6,D.iC,8)}d.aQ(B.h0K,B.h6a,D.cr,0.3)
d.x=0
break A}if("tower"===e||"hq"===e){d.x=$.dM=$.dM+1
p=e==="hq"
o=p?170:100
n=p?90:70
m=p?150:A.hv_(f)
l=p?D.bO:B.dsU[D.o.F(f.l()>>>4,6)]
k=new A.fnr(d)
d.aQ(new A.q(0,m/2,0),new A.q(o,m,n),l,0.25)
k.$4(o,n,20,m-8)
if(p){h=o*0.66
w=n*0.66
d.aQ(new A.q(0,m+60,0),new A.q(h,120,w),D.bN,0.25)
k.$4(h,w,m+16,m+112)
d.aQ(new A.q(0,m+124,0),new A.q(o*0.7,8,n*0.7),F.f8,0.4)}else{d.aG(new A.q(0,m+3,0),new A.q(o+4,6,n+4),D.cr)
d.aG(new A.q(o*0.2,m+12,0),new A.q(o*0.3,12,n*0.3),D.dn)}j=p?m+128:m+6
for(h=o*0.3,h=[-h,h],w=j+8,v=0;v<2;++v)d.aG(new A.q(h[v],w,0),B.h4o,D.iC)
h=p?112:84
d.aQ(new A.q(0,j+34,0),new A.q(h,38,3),E.iU,0.3)
h=n/2
A.kI(d,new A.q(0,17,h+0.6),B.hu,B.e8,34,34,D.cr,B.ig,0.5)
A.kI(d,new A.q(0,17,h+0.7),B.e8.FY(B.ig),B.e8,1.2,34,B.i1,B.ig,0.6)
d.aQ(new A.q(0,38,h+5),B.h4M,F.f8,0.3)
d.x=0
break A}if("store"===e){d.x=$.dM=$.dM+1
d.aQ(B.VD,B.aWQ,f,0.2)
d.aG(B.ab0,B.aWR,D.cr)
A.kI(d,B.aYq,B.hu,B.e8,112,30,B.i1,B.ig,0.6)
d.aG(B.aWE,B.aWP,D.bB)
d.aG(B.aWH,B.aWM,D.av)
for(v=0;v<2;++v){t=B.aBf[v]
d.dv(new A.q(t,58,28),new A.q(t,96,28),2.5,D.iC,6)}d.aQ(B.aWx,B.aWU,E.iU,0.3)
d.aG(B.aWA,B.VF,F.f8)
d.aG(B.aWK,B.VF,F.f8)
d.x=0
break A}if("dmv"===e){d.x=$.dM=$.dM+1
d.aQ(B.VD,B.aWQ,D.aN,0.2)
d.aG(B.ab0,B.aWR,D.d7)
A.kI(d,B.aYq,B.hu,B.e8,112,30,B.i1,B.ig,0.6)
d.aG(B.aWE,B.aWP,D.bl)
d.aG(B.aWH,B.aWM,D.d7)
d.aG(B.haw,B.hdh,D.bt)
d.aG(B.hh6,B.h5U,D.d7)
for(v=0;v<2;++v){t=B.aBf[v]
d.dv(new A.q(t,58,28),new A.q(t,96,28),2.5,D.iC,6)}d.aQ(B.aWx,B.aWU,E.iU,0.3)
d.aG(B.aWA,B.VF,F.f8)
d.aG(B.aWK,B.VF,F.f8)
d.x=0
break A}if("ubstation"===e){d.x=$.dM=$.dM+1
for(v=0;v<2;++v){t=B.dnw[v]
for(i=0;i<2;++i){s=E.RV[i]
d.dv(new A.q(t,0,s),new A.q(t,50,s),2.2,D.aK,6)}}d.aQ(B.aWG,B.h1P,D.av,0.3)
d.aG(B.h0U,B.h1R,D.bt)
d.aQ(B.h0f,B.h1I,D.du,0.6)
d.aG(B.h_m,B.h6D,D.bs)
d.aG(B.h0Z,B.h6f,D.aK)
d.dv(B.h5h,B.h5k,2,D.iC,6)
d.aG(B.h5l,B.h4j,D.av)
d.aG(B.h8n,B.h9l,D.bt)
d.aG(B.hhh,B.hfz,D.c)
d.x=0
break A}if("gasstation"===e){d.x=$.dM=$.dM+1
for(v=0;v<2;++v){t=B.aBe[v]
for(i=0;i<2;++i){s=B.cIf[i]
d.dv(new A.q(t,0,s),new A.q(t,46,s),2.4,D.bO,6)}}d.aQ(B.h0M,B.h1W,D.bB,0.3)
d.aG(B.hhF,B.h1Y,F.f8)
for(v=0;v<2;++v){t=E.RV[v]
d.aQ(new A.q(t,9,20),B.h6p,D.iy,0.3)
d.aG(new A.q(t,15,20.2),B.h3C,D.bB)}d.aQ(B.h_P,B.h6B,f,0.2)
d.dv(B.hfg,B.hfh,2.2,D.iC,6)
d.aG(B.hfi,B.h44,D.av)
d.x=0
break A}if("townsign"===e){d.x=$.dM=$.dM+1
for(v=0;v<2;++v){t=B.dni[v]
d.dv(new A.q(t,0,0),new A.q(t,316,0),5.5,D.iC,6)}d.aQ(B.h0d,B.h48,E.iU,0.3)
d.aG(B.h0k,B.aXh,F.f8)
d.aG(B.h_L,B.aXh,F.f8)
d.x=0
break A}if("adboard"===e){d.x=$.dM=$.dM+1
for(v=0;v<2;++v){t=B.dnh[v]
d.dv(new A.q(t,0,0),new A.q(t,205,0),4.5,D.iC,6)}d.aQ(B.h_w,B.h41,E.iU,0.3)
d.aG(B.h_R,B.aXa,F.f8)
d.aG(B.aWI,B.aXa,F.f8)
d.x=0
break A}if("cornersign"===e){d.x=$.dM=$.dM+1
for(v=0;v<2;++v){t=B.aBe[v]
d.dv(new A.q(t,0,0),new A.q(t,125,0),3,D.iC,6)}d.aQ(B.h_o,B.h2h,E.iU,0.3)
d.aG(B.h_F,B.h2j,F.f8)
d.x=0
break A}if("firetruck"===e){d.aQ(B.aWw,B.h78,D.bB,0.3)
d.aQ(B.h4a,B.h38,D.bB,0.3)
d.aQ(B.hcb,B.h5p,B.i1,0.6)
d.aG(B.hek,B.hge,D.dn)
for(u=0;u<6;++u)d.aG(new A.q(-34+u*11,24,0),B.hb0,D.dn)
d.aG(B.h4b,B.aXv,D.d3)
d.aG(B.hcJ,B.h8G,B.bnB)
for(v=0;v<3;++v){t=B.dns[v]
d.dv(new A.q(t,6,-19),new A.q(t,6,-22.5),6,D.nk,12)
d.dv(new A.q(t,6,19),new A.q(t,6,22.5),6,D.nk,12)}break A}if("ambulance"===e){d.aQ(B.VC,B.h6H,D.c,0.4)
d.aQ(B.h3V,B.h3o,D.c,0.4)
d.aQ(B.h8Z,B.hdq,B.i1,0.6)
d.aG(B.hgP,B.aXR,D.bB)
d.aG(B.haI,B.aXR,D.bB)
d.aG(B.aYc,B.ha5,D.bB)
d.aG(B.aYc,B.h8g,D.bB)
d.aG(B.h3X,B.aXv,D.ax)
for(v=0;v<2;++v){t=B.a5e[v]
d.dv(new A.q(t,6,-19),new A.q(t,6,-22.5),6,D.nk,12)
d.dv(new A.q(t,6,19),new A.q(t,6,22.5),6,D.nk,12)}break A}if("dog"===e||"cat"===e||"cow"===e||"sheep"===e||"chicken"===e||"horse"===e){A.hqj(d,e,f,0)
break A}if("pond"===e){h=C.a([],x.z)
q=new A.fg(h)
q.b=d.b
q.f=d.f
q.r=!0
q.dm(B.dX,B.he5,28,B.boN,0.8,22)
D.d.v(d.a,A.bCH(h,B.h7K,B.dX))
for(v=0;v<3;++v){h=B.d8b[v]
d.ee(new A.q(h.a,1.2,h.b),2.6,B.agO,3,6)}break A}if("swing"===e){d.dv(B.heH,B.h3q,1.6,D.d0,8)
for(v=0;v<2;++v){t=E.a5d[v]
d.dv(new A.q(t,38,0),new A.q(t,0,14),1.4,D.d0,6)
d.dv(new A.q(t,38,0),new A.q(t,0,-14),1.4,D.d0,6)}for(v=0;v<2;++v){t=E.a5f[v]
d.dv(new A.q(t,38,0),new A.q(t,15,0),0.3,B.he,4)}d.aG(B.VC,B.hgX,f)
break A}if("shed"===e){d.aQ(B.VC,B.h54,f,0.05)
d.aG(B.ab_,B.h5f,B.Y8)
d.aG(B.hdX,B.hdI,h)
break A}if("doghouse"===e){d.aQ(B.ab1,B.h3p,f,0.05)
d.aG(B.h3N,B.hg3,B.Y8)
d.aG(B.hca,B.hha,B.M5)
break A}d.aG(B.Ay,B.h1t,f)}},
hse(d,e,f,g,h,i){var w=e.a,v=e.b,u=e.c,t=h/2
d.aQ(new A.q(w,v,u+t-0.5),new A.q(f,g,1),i,0.1)
d.aQ(new A.q(w,v,u-t+0.5),new A.q(f,g,1),i,0.1)
t=f/2
d.aQ(new A.q(w-t+0.5,v,u),new A.q(1,g,h),i,0.1)
d.aQ(new A.q(w+t-0.5,v,u),new A.q(1,g,h),i,0.1)
d.aQ(new A.q(w,v-g/2+0.5,u),new A.q(f,1,h),i,0.1)},
cgH:function cgH(){},
fRC:function fRC(d,e,f){this.a=d
this.b=e
this.c=f},
fRA:function fRA(d,e,f){this.a=d
this.b=e
this.c=f},
fRz:function fRz(d,e,f){this.a=d
this.b=e
this.c=f},
fRB:function fRB(d){this.a=d},
fAz:function fAz(d){this.a=d},
fAl:function fAl(){},
fAw:function fAw(){},
fAx:function fAx(d,e,f){this.a=d
this.b=e
this.c=f},
fAm:function fAm(){},
fAn:function fAn(){},
fAo:function fAo(){},
fAp:function fAp(d){this.a=d},
fAr:function fAr(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fAs:function fAs(d,e,f){this.a=d
this.b=e
this.c=f},
fAt:function fAt(d,e,f){this.a=d
this.b=e
this.c=f},
fAu:function fAu(d,e,f){this.a=d
this.b=e
this.c=f},
fAv:function fAv(d,e,f){this.a=d
this.b=e
this.c=f},
fAy:function fAy(d){this.a=d},
fAq:function fAq(d){this.a=d},
ftt:function ftt(d){this.a=d},
ftu:function ftu(d){this.a=d},
ftp:function ftp(d){this.a=d},
ftq:function ftq(d,e){this.a=d
this.b=e},
ftr:function ftr(d){this.a=d},
fsN:function fsN(){},
fsO:function fsO(){},
fsP:function fsP(d){this.a=d},
ft_:function ft_(d){this.a=d},
fta:function fta(){},
fts:function fts(d,e){this.a=d
this.b=e},
ftj:function ftj(d){this.a=d},
ftk:function ftk(d){this.a=d},
ftl:function ftl(d){this.a=d},
ftm:function ftm(d){this.a=d},
ftn:function ftn(d){this.a=d},
fto:function fto(d){this.a=d},
fsQ:function fsQ(d){this.a=d},
fsR:function fsR(d){this.a=d},
fsS:function fsS(d){this.a=d},
fsT:function fsT(d){this.a=d},
fsU:function fsU(d){this.a=d},
fsV:function fsV(d){this.a=d},
fsW:function fsW(){},
fsX:function fsX(){},
fsY:function fsY(){},
fsZ:function fsZ(){},
ft0:function ft0(d){this.a=d},
ft1:function ft1(d){this.a=d},
ft2:function ft2(d){this.a=d},
ft3:function ft3(d){this.a=d},
ft4:function ft4(){},
ft5:function ft5(){},
ft6:function ft6(){},
ft7:function ft7(){},
ft8:function ft8(){},
ft9:function ft9(){},
ftb:function ftb(){},
ftc:function ftc(){},
ftd:function ftd(){},
fte:function fte(d,e){this.a=d
this.b=e},
ftf:function ftf(d){this.a=d},
ftg:function ftg(d){this.a=d},
fth:function fth(){},
fti:function fti(){},
fDx:function fDx(d){this.a=d},
fDu:function fDu(){},
fDv:function fDv(d){this.a=d},
fDw:function fDw(d){this.a=d},
fjB:function fjB(d,e){this.a=d
this.b=e},
fjr:function fjr(d,e,f){this.a=d
this.b=e
this.c=f},
fuk:function fuk(d,e){this.a=d
this.b=e},
ftS:function ftS(d,e,f){this.a=d
this.b=e
this.c=f},
ftT:function ftT(d,e){this.a=d
this.b=e},
ftU:function ftU(d){this.a=d},
ftV:function ftV(d,e,f){this.a=d
this.b=e
this.c=f},
fu5:function fu5(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fud:function fud(){},
fue:function fue(d,e,f){this.a=d
this.b=e
this.c=f},
fuf:function fuf(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fug:function fug(d,e){this.a=d
this.b=e},
fuh:function fuh(d,e,f){this.a=d
this.b=e
this.c=f},
fui:function fui(d){this.a=d},
fuj:function fuj(){},
ftW:function ftW(d){this.a=d},
ftX:function ftX(d){this.a=d},
ftY:function ftY(d){this.a=d},
ftZ:function ftZ(d){this.a=d},
fu_:function fu_(d,e){this.a=d
this.b=e},
fu0:function fu0(d,e){this.a=d
this.b=e},
fu1:function fu1(d,e,f){this.a=d
this.b=e
this.c=f},
fu2:function fu2(d,e){this.a=d
this.b=e},
fu3:function fu3(d,e){this.a=d
this.b=e},
fu4:function fu4(d,e){this.a=d
this.b=e},
fu6:function fu6(d,e){this.a=d
this.b=e},
fu7:function fu7(d,e,f){this.a=d
this.b=e
this.c=f},
fu8:function fu8(d,e,f){this.a=d
this.b=e
this.c=f},
fu9:function fu9(d,e){this.a=d
this.b=e},
fua:function fua(d,e){this.a=d
this.b=e},
fub:function fub(d,e){this.a=d
this.b=e},
fuc:function fuc(d){this.a=d},
fnr:function fnr(d){this.a=d},
hgQ(){var w=x.S
return new A.bVv(C.eD([72],w),C.aX(w),C.aX(w),C.aX(w))},
ibV(d){var w
A:{if(81===d){w="outlet"
break A}if(82===d){w="switch"
break A}if(84===d){w="gfci"
break A}if(86===d||87===d){w="ptrap"
break A}if(85===d){w="faucet"
break A}w=null
break A}return w},
agN(a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=C.a([],x.z),a0=new A.fg(d)
a0.b=70
a0.hj(B.hde,B.hg0,B.blu,4)
a0.c=1
a0.b=91
w=new A.fAE(a0)
w.$3(B.h8f,B.h7u,15)
w.$4$alongX(B.hfy,B.hbP,11,!1)
w.$4$alongX(B.h5o,B.h7E,11,!1)
w.$4$alongX(B.hez,B.h8D,6,!1)
w.$4$alongX(B.h6o,B.hbQ,6,!1)
for(v=0;v<=12;++v)a0.aE6(new A.q(-12+v*2,8.4,0),B.hcy,B.Yr,!1,0.05)
a0.c=2
a0.b=92
u=new A.fAB(a0)
u.$2(B.crv,B.rm)
u.$2(B.dkd,B.nd)
u.$2(B.dpq,B.nd)
t=new A.fAA(a0)
t.$1(B.d0I)
t.$1(B.d6O)
a0.c=3
a0.b=93
s=new A.fAD(a0)
s.$1(B.d_B)
s.$2$col(B.cYZ,B.mx)
s.$2$col(B.cY2,B.mx)
s.$1(B.dh4)
a0.c=4
a0.b=0
a0.d=0.22
a0.hj(B.h7D,B.hb3,B.Bc,4)
a0.hj(B.hb_,B.aXY,B.Bc,4)
a0.hj(B.h8k,B.aXY,B.Bc,4)
a0.hj(B.h9v,B.aY2,B.Bc,3)
a0.hj(B.hhp,B.aY2,B.Bc,3)
a0.d=1
a0.c=5
a0.e=0.3
a0.b=0
a0.lU(B.heg,B.h7A,B.biR,0.1,4)
a0.b=71
a0.aQ(B.hdm,B.hcz,B.XK,0.5)
a0.aG(B.hgW,B.h9a,B.xT)
r=[72,73,74,75,76]
for(q=a1.d,p=a1.e,v=0;v<5;++v){o=D.o.F(v,2)
n=D.o.ao(v,2)
m=r[v]
l=q.t(0,m)
k=p.t(0,m)
a0.b=m
m=9.55+o*0.5
j=5.7-n*0.5
a0.aQ(new A.q(m,j,-7.5),B.h79,B.Zi,0.3)
if(l)i=0
else i=k?-0.07:0.07
if(l)h=D.cd
else h=k?D.bn:D.bO
a0.aQ(new A.q(m+0,j+i,-7.42),B.h8O,h,0.4)}a0.b=90
a0.aQ(B.hbR,B.h5w,B.bt5,0.1)
a0.aQ(B.hfC,B.h8_,B.YZ,0.1)
a0.aQ(B.hi0,B.aYk,B.YZ,0.1)
a0.aQ(B.h7T,B.aYk,B.YZ,0.1)
g=new A.fAC(a0)
g.$3(81,B.h6x,a1.x?B.tU:B.YI)
a0.b=81
a0.aG(B.hbS,B.aYe,B.Fy)
a0.aG(B.ha9,B.aYe,B.Fy)
g.$5$h$w(82,B.hh0,H.YS,0.65,0.4)
a0.b=82
a0.aQ(B.hdS,B.h5t,B.ag8,0.4)
f=!q.t(0,72)
a0.b=83
a0.dm(B.hdD,B.aXI,0.5,B.bqI,0.4,14)
a0.bcp(B.hgo,0.3,f?Al.FT:B.bla,0.7)
if(f){a0.b=0
a0.d=0.22
a0.fQ(B.aXu,1.5,B.Y1,4,10,0)
a0.d=1}a0.b=94
a0.aQ(B.hgb,B.aYo,B.iz,0.1)
a0.aQ(B.hc7,B.aYo,B.iz,0.1)
a0.aQ(B.hgZ,B.h8s,B.iz,0.1)
A.b7i(a0,1.35,B.Me,2.5,2.1,B.jb,B.Mp,6,0.55,!1,1,0.18,3.19,0.06,3,-7.15)
a0.b=85
a0.j9(A.Dl(B.day,0.2,6),0.055,B.jb,!1,0.9,8)
a0.b=84
a0.aQ(B.hgB,B.he9,B.YI,0.3)
a0.aG(B.h9F,B.hgV,a1.y?B.agN:B.aj9)
a0.b=86
a0.j9(A.Dl(B.d1b,0.35,3),0.11,B.q_,!1,0.3,8)
a0.b=87
a0.dm(B.haD,B.hdr,0.19,a1.c?B.XQ:B.boq,0.3,8)
a0.b=88
a0.aQ(B.h4K,B.h7h,B.Bi,0.7)
a0.yU(B.hdd,B.aYf,0.72,B.Bi,0.55,0.7,16)
a0.dm(B.aYf,B.hbv,0.78,B.bqe,0.7,16)
a0.b=89
a0.dm(B.hfI,B.aXx,0.85,B.bdE,0.6,18)
a0.dm(B.aXx,B.hb1,0.5,B.bdG,0.5,12)
a0.aG(B.hch,B.hhM,B.bok)
a0.b=95
for(p=a1.f,m=a1.r,v=0;v<3;++v){e=B.cHT[v]
if(m.t(0,v)){j=e.a
i=e.b
a0.aG(new A.q(j,i,-7.82),B.hdE,B.Bc)
a0.aG(new A.q(j,i,-7.79),B.hb7,B.bhc)}else if(p.t(0,v)){j=e.a
i=e.b
a0.aG(new A.q(j,i,-7.82),B.h2R,B.ai3)
a0.aG(new A.q(j,i,-7.8),B.hc5,B.btn)}}if(a1.w){a0.b=96
a0.dm(B.hbd,B.has,0.1,D.d0,0.7,8)}a0.e=0
a0.c=6
a0.b=0
a0.d=0.4
a0.bji(B.aXo,B.aYd,B.abc,B.aba,B.afs,B.hbM,!0)
a0.bji(B.aY7,B.aYi,B.aba,B.abc,B.afs,B.hdL,!0)
a0.bkr(B.aXo,B.aYi,B.aba,B.afH)
a0.bkr(B.aYd,B.aY7,B.abc,B.afH)
a0.d=1
p=q.t(0,72)?"This breaker has TRIPPED (it is in the middle, orange). The living room has no power. Tap it to flip it off and on again.":"This breaker is ON. The living room has power."
q=q.t(0,72)?"The light is off because the living room breaker has tripped.":"The ceiling light is on."
m=a1.b
j=m&&!a1.c?"Water is dripping from the slip nut here. Pick the wrench, then tap the nut to tighten it.":"The P-trap holds a water seal that blocks sewer gas. Tap Open lesson to build one."
m=m&&!a1.c?"This slip nut is loose and the trap is dripping. Pick the wrench and tap here to tighten it.":"The slip nut is tight."
return new A.tU(d,C.H([70,B.eeA,91,B.ee0,92,B.eej,93,B.eer,71,B.eeF,72,new A.cV("Living room breaker",p,B.hhy,3.5),73,B.eeb,74,B.eet,75,B.edR,76,B.eem,81,B.eeo,82,B.edH,83,new A.cV("Ceiling light",q,B.aXI,7),84,B.eeu,85,B.edT,86,new A.cV("P-trap under the sink",j,B.hdb,4.5),87,new A.cV("Slip nut (leaking?)",m,B.aXL,3.5),88,B.edE,89,B.ees,90,B.eew,94,B.eea,95,B.eey,96,B.edK],x.S,x.q),B.zy,B.wH,null,0)},
hw3(d,e){var w,v,u,t,s,r,q,p=C.a([],x.z),o=new A.fg(p)
o.c=5
o.e=0.8
if(d.w)for(w=e*1.5,v=0;v<6;++v){u=D.k.F(w+v/6,1)
o.fQ(new A.q(3.4+Math.sin(v*2)*0.12,3.3-u*u*2.8,-7.7),0.05,D.afE,3,6,0.9)}if(d.as){u=D.k.F(e*1.1,1)
o.fQ(new A.q(3,3.9-u*u*0.7,-6.95),0.05,B.ag0,3,6,0.9)}if(d.Q)for(w=e*1.6,v=0;v<6;++v){u=D.k.F(w+v/6,1)
o.fQ(new A.q(8.2+Math.sin(v*1.7)*0.15,2.2-u*1.5,-7.2),0.05,B.ag0,3,6,0.9)}if(d.at){o.d=0.55
o.aQ(B.h7O,B.h9A,B.bqw,0.8)
o.d=1}if(d.x)for(w=e*2,t=e*6,v=0;v<8;++v){u=D.k.F(w+v*0.13,1)
s=v*2.4+t
r=Math.cos(s)
s=Math.sin(s)
q=C.ar(F.MM,E.Z9,1-u)
q.toString
o.fQ(new A.q(-3.2+r*u*0.7,1.3+s*u*0.7,-7.6+u*0.3),0.05,q,3,5,0)}if(d.z&&!d.d.t(0,72)){o.b=0
o.d=D.k.E((Math.sin(e*17)+Math.sin(e*29)+2)/4*0.5,0,0.6)
o.fQ(B.aXu,1.5,B.Y1,4,10,0)
o.d=1}if(d.b&&!d.c){for(w=e*1.3,v=0;v<5;++v){u=D.k.F(w+v*0.2,1)
o.fQ(new A.q(3.05,1.45-u*u*1.4,-6.95),0.05,B.Z1,3,6,0.9)}o.d=0.5
o.aQ(B.h7t,new A.q(0.7+0.3*Math.sin(e),0.02,0.5),B.Z1,0.9)
o.d=1}return p},
bVv:function bVv(d,e,f,g){var _=this
_.a=5
_.b=!0
_.c=!1
_.d=d
_.e=e
_.f=f
_.r=g
_.at=_.as=_.Q=_.z=_.y=_.x=_.w=!1},
fAE:function fAE(d){this.a=d},
fAB:function fAB(d){this.a=d},
fAA:function fAA(d){this.a=d},
fAD:function fAD(d){this.a=d},
fAC:function fAC(d){this.a=d},
fQ(d,e,f,g){var w
try{Ak.dF(d,"",e,0,f,g)}catch(w){}},
uk(){A.fQ(880,80,0.25,"tri")
C.bP(A_.ak4,new A.fBz(),x.H)},
hOd(){return new A.NI(null)},
Ya(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w){return new A.b7U(t,d,u,s,f,r,q,j,g,h,m,n,i,k,v,w,l,o,p,e,null)},
wY(d,e,f,g,h){var w=null,v=g?e.j(0.25):D.w.j(0.5),u=C.m(18),t=C.J(g?e:D.aX,D.r,1),s=x.p,r=C.a([],s)
D.d.v(r,C.a([C.X(f,g?e:D.ac,w,w,w,16),D.eg],s))
r.push(C.d(d,w,w,w,w,w,w,C.l(w,w,g?e:D.ac,w,w,w,w,w,w,w,w,12,w,w,D.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w))
return C.aA(w,C.p(w,C.B(r,D.m,w,D.e,D.P,0,w,w),D.f,w,w,new C.o(v,w,t,u,w,w,D.n),w,w,w,w,D.h7,w,w,w),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,h,w,w,w,w,w,w,!1,D.a3)},
uj(d,e,f,g){var w=null,v=f==null,u=v?D.dr:g.j(0.9),t=C.m(14),s=C.X(e,v?D.bU:D.w,w,w,w,18)
return C.E(C.aA(w,C.p(w,C.B(C.a([s,D.bm,new C.dr(1,D.cn,C.d(d,w,w,w,w,w,w,C.l(w,w,v?D.bU:D.w,w,w,w,w,w,w,w,w,12.5,w,w,D.u,w,w,!0,w,w,w,w,w,w,w,w),D.K,w,w),w)],x.p),D.m,w,D.b9,D.i,0,w,w),D.f,w,w,new C.o(u,w,w,t,w,w,D.n),w,w,w,w,D.rC,w,w,w),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,!1,D.a3),1)},
fSL(d,e,f,g){return C.bV(E.mC,null,new A.fSN(e,g,f),d,!0,!0,!0,D.k5,!1,!1,x.H)},
U2(d,e,f,g,h,i,j){return new A.aY0(i,d,g,f,e,h,j,null)},
fBz:function fBz(){},
m2:function m2(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
NI:function NI(d){this.a=d},
bkY:function bkY(){var _=this
_.e=!1
_.f=""
_.c=_.a=null},
dTg:function dTg(d){this.a=d},
dTj:function dTj(d){this.a=d},
dTk:function dTk(d){this.a=d},
dTl:function dTl(d){this.a=d},
dTo:function dTo(d){this.a=d},
dTp:function dTp(d){this.a=d},
dTq:function dTq(d){this.a=d},
dTr:function dTr(d){this.a=d},
dTs:function dTs(d){this.a=d},
dTt:function dTt(d){this.a=d},
dTu:function dTu(d){this.a=d},
dTv:function dTv(d){this.a=d},
dTm:function dTm(d){this.a=d},
dTi:function dTi(d){this.a=d},
dTn:function dTn(d){this.a=d},
dTh:function dTh(d,e){this.a=d
this.b=e},
dTb:function dTb(d,e){this.a=d
this.b=e},
dTc:function dTc(d){this.a=d},
dTd:function dTd(d){this.a=d},
dTe:function dTe(){},
dTf:function dTf(d){this.a=d},
awy:function awy(d,e){this.c=d
this.a=e},
btV:function btV(){this.c=this.a=this.d=null},
f7v:function f7v(d){this.a=d},
f7u:function f7u(){},
b7U:function b7U(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0){var _=this
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
cxA:function cxA(){},
cxB:function cxB(){},
fSN:function fSN(d,e,f){this.a=d
this.b=e
this.c=f},
fSM:function fSM(){},
aY0:function aY0(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
bXB:function bXB(d){this.a=d},
ad5:function ad5(){},
djT:function djT(d,e){this.a=d
this.b=e},
djU:function djU(d){this.a=d},
djS:function djS(d){this.a=d},
E0:function E0(d,e,f){this.c=d
this.d=e
this.a=f},
aAD:function aAD(d,e,f,g,h){var _=this
_.r=_.f=_.e=_.d=$
_.w=""
_.x=0
_.y=null
_.z=!1
_.Q=0
_.as=null
_.at=d
_.ax=0
_.LK$=e
_.a5f$=f
_.amA$=g
_.amB$=h
_.c=_.a=null},
dbi:function dbi(d,e){this.a=d
this.b=e},
dbg:function dbg(d,e,f){this.a=d
this.b=e
this.c=f},
dbh:function dbh(d){this.a=d},
dbf:function dbf(d){this.a=d},
db0:function db0(d){this.a=d},
db1:function db1(d){this.a=d},
db2:function db2(d){this.a=d},
db3:function db3(){},
db_:function db_(d){this.a=d},
db4:function db4(d){this.a=d},
db5:function db5(d){this.a=d},
db6:function db6(d){this.a=d},
db7:function db7(d){this.a=d},
db8:function db8(d){this.a=d},
db9:function db9(d,e,f){this.a=d
this.b=e
this.c=f},
dba:function dba(d){this.a=d},
dbb:function dbb(d,e){this.a=d
this.b=e},
dbc:function dbc(d,e){this.a=d
this.b=e},
dbd:function dbd(d,e){this.a=d
this.b=e},
dbe:function dbe(d){this.a=d},
dbj:function dbj(d,e){this.a=d
this.b=e},
dbk:function dbk(d){this.a=d},
dbt:function dbt(){},
dbC:function dbC(d,e,f){this.a=d
this.b=e
this.c=f},
dbJ:function dbJ(d){this.a=d},
dbq:function dbq(){},
dbu:function dbu(d){this.a=d},
dbv:function dbv(d){this.a=d},
dbD:function dbD(d){this.a=d},
dbE:function dbE(d){this.a=d},
dbs:function dbs(d){this.a=d},
dbF:function dbF(d){this.a=d},
dbr:function dbr(d){this.a=d},
dbG:function dbG(d){this.a=d},
dbH:function dbH(d){this.a=d},
dbI:function dbI(d){this.a=d},
dbK:function dbK(d){this.a=d},
dbw:function dbw(d,e){this.a=d
this.b=e},
dbp:function dbp(d,e,f){this.a=d
this.b=e
this.c=f},
dbx:function dbx(d,e){this.a=d
this.b=e},
dby:function dby(d){this.a=d},
dbo:function dbo(d){this.a=d},
dbz:function dbz(d){this.a=d},
dbn:function dbn(d){this.a=d},
dbA:function dbA(d){this.a=d},
dbm:function dbm(d){this.a=d},
dbB:function dbB(d){this.a=d},
dbl:function dbl(d){this.a=d},
a9I:function a9I(d,e){this.c=d
this.a=e},
aGz:function aGz(d,e,f,g){var _=this
_.f=_.e=_.d=$
_.r=""
_.w=0
_.x=null
_.y=!1
_.z=null
_.LK$=d
_.a5f$=e
_.amA$=f
_.amB$=g
_.c=_.a=null},
eXI:function eXI(d,e,f){this.a=d
this.b=e
this.c=f},
eXJ:function eXJ(d){this.a=d},
eXH:function eXH(d){this.a=d},
eXA:function eXA(d){this.a=d},
eXB:function eXB(d,e){this.a=d
this.b=e},
eXC:function eXC(d,e){this.a=d
this.b=e},
eXD:function eXD(d){this.a=d},
eXE:function eXE(d,e){this.a=d
this.b=e},
eXF:function eXF(d){this.a=d},
eXG:function eXG(d,e){this.a=d
this.b=e},
eXN:function eXN(){},
eXR:function eXR(d,e){this.a=d
this.b=e},
eXO:function eXO(d){this.a=d},
eXP:function eXP(d,e){this.a=d
this.b=e},
eXM:function eXM(d,e,f){this.a=d
this.b=e
this.c=f},
eXQ:function eXQ(d){this.a=d},
eXL:function eXL(d){this.a=d},
eXK:function eXK(){},
a59:function a59(d,e){this.c=d
this.a=e},
aAX:function aAX(d,e,f,g){var _=this
_.f=_.e=_.d=$
_.r=""
_.w=0
_.x=null
_.y=!1
_.z=null
_.LK$=d
_.a5f$=e
_.amA$=f
_.amB$=g
_.c=_.a=null},
dek:function dek(d,e,f){this.a=d
this.b=e
this.c=f},
del:function del(d){this.a=d},
dej:function dej(d){this.a=d},
dec:function dec(d){this.a=d},
def:function def(d){this.a=d},
deg:function deg(d,e){this.a=d
this.b=e},
deh:function deh(d,e){this.a=d
this.b=e},
dee:function dee(d){this.a=d},
dei:function dei(d,e){this.a=d
this.b=e},
dem:function dem(d,e,f){this.a=d
this.b=e
this.c=f},
ded:function ded(d){this.a=d},
deq:function deq(){},
dew:function dew(d,e){this.a=d
this.b=e},
der:function der(d){this.a=d},
des:function des(d){this.a=d},
dep:function dep(d){this.a=d},
deu:function deu(d,e){this.a=d
this.b=e},
deo:function deo(d,e,f){this.a=d
this.b=e
this.c=f},
det:function det(d){this.a=d},
dev:function dev(d){this.a=d},
den:function den(d){this.a=d},
aBP:function aBP(d){this.a=d},
aBQ:function aBQ(d){var _=this
_.d=d
_.f=_.e=$
_.r=0
_.w=""
_.x=null
_.y=!1
_.c=_.a=_.z=null},
dls:function dls(d,e,f){this.a=d
this.b=e
this.c=f},
dlt:function dlt(d){this.a=d},
dlr:function dlr(d){this.a=d},
dlm:function dlm(d){this.a=d},
dlo:function dlo(d,e){this.a=d
this.b=e},
dlp:function dlp(d,e){this.a=d
this.b=e},
dlq:function dlq(d,e){this.a=d
this.b=e},
dln:function dln(d){this.a=d},
dlB:function dlB(d,e){this.a=d
this.b=e},
dlw:function dlw(d,e){this.a=d
this.b=e},
dly:function dly(d){this.a=d},
dlx:function dlx(d){this.a=d},
dlz:function dlz(d){this.a=d},
dlv:function dlv(d){this.a=d},
dlA:function dlA(d){this.a=d},
dlu:function dlu(d,e){this.a=d
this.b=e},
afP:function afP(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bxB:function bxB(){var _=this
_.d=null
_.e=!1
_.c=_.a=null},
fj9:function fj9(d){this.a=d},
fj7:function fj7(d){this.a=d},
fj8:function fj8(d){this.a=d},
fj6:function fj6(d){this.a=d},
fjb:function fjb(d){this.a=d},
fjc:function fjc(d){this.a=d},
fja:function fja(d){this.a=d},
byc:function byc(){},
byh:function byh(){},
bzx:function bzx(){},
jS:function jS(d,e){this.a=d
this.b=e},
N4:function N4(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a7b:function a7b(d){this.a=d},
cc1:function cc1(d){this.a=d},
h5b(){var w=x.N
return new A.cob(C.aX(w),C.H(["n1",!1,"n2",!1],w,x.y),C.U(x.S,w))},
imO(d,e,f){var w,v
if(!f.c.t(0,e)){w=f.d
return e==="hot"?"The red (hot) hose goes on the LEFT side only. "+w:"The blue (cold) hose goes on the RIGHT side only. "+w}w=d.e
v=f.a
if(w.h(0,v)!=null)return"That connection already has a hose."
w.n(0,v,e)
return null},
hcd(){var w,v,u=C.a([B.aXk,B.ham],x.o)
for(w=1;w<=12;++w){v=3.141592653589793+3.141592653589793*w/12
u.push(new A.q(3+3*Math.cos(v),0.2+3*Math.sin(v),0))}D.d.v(u,A.Dl(B.dbV,1,6))
return u},
aQ_(d){var w,v,u,t,s="trap",r=C.a([],x.z),q=new A.fg(r)
q.b=49
q.lU(B.h2K,B.h4z,B.iz,0.1,2)
q.lU(B.hhm,B.h2O,B.iz,0.1,2)
q.b=47
q.hj(B.hbL,B.h4A,B.vP,3)
q.hj(B.h3M,B.h2P,B.vP,3)
q.b=46
A.b7i(q,9,B.Me,14,15,B.jb,B.Mp,40,5.9,!0,2,1.8,15.1,0.6,0,-1.2)
q.dm(B.hd3,B.h9Z,1.5,B.jb,0.85,14)
q.b=48
q.a4A(B.abe,B.h8c,0.92,B.q_,!1,!0,0.3,14)
q.cZ0(B.abe,B.hgw,1,0.72,B.q_,0.3)
w=new A.fBf(d,q)
w.$5(41,B.azj,B.jb,0.85,"tail")
w.$5(42,A.hcd(),B.q_,0.3,s)
w.$5(43,B.aBQ,B.q_,0.3,"arm")
w=new A.fBe(d,q)
v=d.a
w.$6(44,"n1",B.ab9,B.e8,B.h8A,v.t(0,"tail")&&v.t(0,s))
w.$6(45,"n2",B.abb,B.hu,B.he8,v.t(0,s)&&v.t(0,"arm"))
if(v.t(0,s)){q.b=0
q.d=0.55
q.e=0.4
u=A.hcd()
w=C.T(u).k("Z<1>")
t=C.C(new C.Z(u,new A.fBd(),w),w.k("M.E"))
if(t.length>1)q.a7g(t,0.4092,B.Zf,!1,!0,0.6,8)
q.d=1
q.e=0}return new A.tU(r,C.H([41,B.edV,42,B.edX,43,B.eeq,44,B.eee,45,B.eeC,46,B.ee2,47,B.ee8,48,B.edC,49,B.edZ],x.S,x.q),B.zy,B.wH,null,0)},
h7e(d,e){var w=D.k.E(e,0,1)*(d.length-1),v=D.o.E(D.k.bf(w),0,d.length-2)
return A.pB(d[v],d[v+1],w-v)},
h7M(d,e,f,g,h,i){var w,v,u,t,s
d.b=0
d.e=0.3
d.d=0.55
d.a7g(e,h,g,!1,!0,0.9,8)
d.d=0.95
for(w=f*i,v=x.o,u=h*0.5,t=0;t<5;++t){s=D.k.F(w+t/5,1)
d.a7g(C.a([A.h7e(e,s),A.h7e(e,Math.min(1,s+0.09))],v),u,B.MN,!1,!1,1,6)}d.d=1
d.e=0},
huD(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k
d.b=0
d.e=0.4
for(w=f*1.3,v=e.a,u=v+0,t=e.b,s=t+0.05,r=e.c,q=r+0,p=t+0.12,o=0;o<3;++o){n=D.k.F(w+o/3,1)
m=0.5+n*3
d.d=0.7*(1-n)
d.r6(new A.q(u,s,q),new A.q(u,p,q),m,Math.max(0.1,m-0.3),B.MN,0.6,16)}d.d=0.9
for(w=f*1.8,l=0;l<6;++l){n=D.k.F(w+l/6,1)
k=l*1.05
d.fQ(new A.q(v+Math.cos(k)*n*1.4,t+4*n*(1-n),r+Math.sin(k)*n*1.4),0.16,B.MN,3,6,1)}d.d=1
d.e=0},
ha5(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=C.a([],x.z),k=new A.fg(l)
k.e=0.9
w=0.5+0.5*Math.sin(e*7)
for(v=d.length,u=0.25+0.25*w,t=1.5+0.7*w,s=0.9*w,r=2.3+s,s=1.9+s,q=0;q<d.length;d.length===v||(0,C.L)(d),++q){p=d[q]
k.d=u
k.fQ(p,t,G.Zb,5,10,0)
k.d=0.8
o=p.a+0
n=p.b+0
m=p.c
k.r6(new A.q(o,n,m+0.6),new A.q(o,n,m+0.9),r,s,G.Zb,0.2,20)}k.d=1
k.e=0
return l},
ikJ(d,e){var w,v,u,t,s,r,q,p,o=C.a([],x.z),n=new A.fg(o),m=d.d
if(m.length!==0){w=m==="n1"?B.hhP:B.hfU
for(m=e*1.4,v=w.a+0,u=w.b,t=w.c+0,s=0;s<5;++s){r=D.k.F(m+s*0.2,1)
n.d=0.85
n.fQ(new A.q(v,u+(-r*6*r-r*1.5),t),0.24*(1-r*0.3),B.Z1,3,6,0.9)}n.d=1}if(d.c){A.h7M(n,C.a([B.aY8,B.aY8.a7(0,B.h1b),new A.q(0,11,-2.3)],x.o),e,B.bh4,0.42,1.4)
n.b=0
n.d=0.5
n.e=0.2
n.aQ(B.hho,new A.q(12.6,1.0999999999999996,7.6),B.ahv,0.7)
n.d=1
n.e=0
A.huD(n,new A.q(0,11.05,-2.3),e)
n.b=0
n.e=0.4
for(m=e*0.9,q=0;q<2;++q){p=2.2*(1-D.k.F(m+q/2,1))
n.d=0.7
n.r6(new A.q(0,11.06,0),new A.q(0,11.12,0),p+0.25,p,B.MN,0.5,14)}n.d=1
n.e=0}return o},
Rs(d){switch(d){case 61:return B.h2J
case 62:return B.hfQ
case 63:return B.haT
default:return B.haJ}},
hw1(d){var w=d==="hot",v=A.Rs(w?61:62),u=A.Rs(w?63:64),t=w?-1:1
return A.aib(C.a([v,v.a7(0,new A.q(t*0.6,2.2,1.2)),A.pB(v,u,0.5).a7(0,new A.q(t*1.4,0,2.6)),u.a7(0,new A.q(-t*0.2,-2,1)),u],x.o),6)},
agM(a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=C.a([],x.z),a3=new A.fg(a2)
a3.b=67
a3.hj(B.h2G,B.h4c,B.vP,3)
a3.b=66
A.b7i(a3,7,B.Z2,14,18,B.jb,B.Mp,36,7,!1,2,1.6,15.3,0.6,0,1.5)
a3.lU(B.h5r,B.aWW,B.iz,0.1,2)
a3.lU(B.h4v,B.aWW,B.iz,0.1,2)
a3.lU(B.h9u,B.h49,B.iz,0.1,3)
a3.lU(B.hdU,B.hdw,B.iz,0.1,2)
a3.lU(B.hd4,B.hdj,B.iz,0.1,2)
a3.b=65
a3.e=0.5
a3.aQ(B.hfS,B.h9C,B.jb,0.9)
a3.j9(A.Dl(B.dhD,1.4,6),0.5,B.jb,!0,0.9,12)
for(w=0;w<2;++w){v=B.dcH[w]
u=v*1.2
a3.dm(new A.q(u,15.5,-3.6),new A.q(u,17.7,-3.6),0.38,B.jb,0.9,10)
t=v<0?B.rm:B.nd
a3.dm(new A.q(u,17.7,-3.6),new A.q(u,18.6,-3.6),0.6,t,0.6,12)}a3.e=0
for(u=[B.eCC,B.exK],w=0;w<2;++w){t=u[w]
v=t.b
a3.b=t.a
a3.dm(new A.q(v,15.3,-3.6),new A.q(v,11.4,-3.6),0.45,B.jb,0.9,10)
a3.dm(new A.q(v,11.4,-3.6),new A.q(v,10.7,-3.6),0.3,B.bo_,0.6,8)
a3.r6(new A.q(v,11.3,-3.6),new A.q(v,11.9,-3.6),0.78,0.48,B.bqd,0.7,8)}for(u=[B.eW7,B.eY9],w=0;w<2;++w){t=u[w]
s=t.a
v=t.b
r=t.c
a3.b=s
a3.dm(new A.q(v,-1.5,-6),new A.q(v,-1.5,-3.6),0.4,B.LW,0.7,12)
a3.dm(new A.q(v,-1.5,-4.4),new A.q(v,0.7,-4.4),1,B.jb,0.9,14)
a3.dm(new A.q(v,0.7,-4.4),new A.q(v,1.5,-3.6),0.45,B.jb,0.9,10)
a3.dm(new A.q(v,-0.2,-4.4),new A.q(v,-0.2,-3.1),0.2,B.af2,0.7,8)
q=(s===61?a4.f:a4.r)?B.e8:B.hu
a3.dm(new A.q(v,-0.2,-3.1),new A.q(v,-0.2,-2.2),1,r,0.5,12)
t=q.a*1.9
p=q.b*1.9
o=q.c*1.9
n=v-t
m=-0.2-p
l=-2.6-o
t=v+t
p=-0.2+p
o=-2.6+o
a3.dm(new A.q(n,m,l),new A.q(t,p,o),0.5,r,0.5,8)
a3.fQ(new A.q(n,m,l),0.75,r,4,8,0.5)
a3.fQ(new A.q(t,p,o),0.75,r,4,8,0.5)
a3.r6(new A.q(v,1.2,-3.6),new A.q(v,1.9,-3.6),0.78,0.4,B.vM,0.8,8)}for(u=x.o,w=0;w<2;++w){k=B.dki[w]
t=k==="hot"
j=t?B.cIQ:B.cJ2
p=C.T(j).k("Z<1>")
i=C.C(new C.Z(j,new A.fAk(a4,k),p),p.k("M.E"))
a3.b=t?68:69
h=t?B.rm:B.nd
t=i.length
if(t===2){g=A.hw1(k)
a3.j9(g,0.34,B.Bv,!1,0.7,8)
f=g.length/2|0
a3.j9(C.a([g[f-1],g[f],g[f+1]],u),0.4,h,!1,0.4,8)
for(t=j.length,e=0;e<t;++e){d=A.Rs(j[e])
p=d.a+0
o=d.b
n=d.c+0
a3.r6(new A.q(p,o+-0.2,n),new A.q(p,o+0.6,n),0.62,0.3,B.vM,0.8,8)}}else if(t===1){d=A.Rs(D.d.gI(i))
a0=D.d.gI(i)===D.d.gI(j)?1:-1
t=d.a+0
p=d.b
o=d.c
a3.j9(C.a([d,new A.q(t,p+a0*1.4,o+1),new A.q(t,p+a0*3,o+2.4)],u),0.34,B.Bv,!1,0.7,8)
o+=0
a3.r6(new A.q(t,p+-0.2,o),new A.q(t,p+0.6,o),0.62,0.3,B.vM,0.8,8)}}if(a4.w){a3.b=0
a3.d=0.5
for(u=a4.e,w=0;w<4;++w){a1=B.RX[w]
t=a1.a
if(u.h(0,t)!=null)continue
t=A.Rs(t)
p=a1.c.t(0,"hot")?B.rm:B.nd
a3.fQ(new A.q(t.a+0,t.b+0,t.c+0.9),0.65,p,4,8,0.1)}a3.d=1}return new A.tU(a2,C.H([61,B.edM,62,B.edO,63,B.edG,64,B.edP,65,B.ee9,66,B.ee5,67,B.edD,68,B.eeG,69,B.eec],x.S,x.q),B.zy,B.wH,null,0)},
ibs(d,e){var w,v,u,t,s,r,q,p,o,n=C.a([],x.z),m=new A.fg(n),l=new A.fCV(m,e)
if(d.f){w=d.e
v=w.h(0,61)==="hot"&&w.h(0,63)==="hot"}else v=!1
if(d.r){w=d.e
u=w.h(0,62)==="cold"&&w.h(0,64)==="cold"}else u=!1
if(d.f&&!v)l.$3(61,B.Zh,-1)
if(d.r&&!u)l.$3(62,B.Yp,1)
for(w=[new C.b7(v,"hot",B.Zh),new C.b7(u,"cold",B.Yp)],t=e*0.6,s=0;s<2;++s){r=w[s]
q=r.c
if(!r.a)continue
p=A.hw1(r.b)
m.b=0
m.e=0.3
m.d=0.9
for(o=0;o<4;++o){r=A.h7e(p,D.k.F(t+o/4,1))
m.fQ(new A.q(r.a+0,r.b+0,r.c+0.32),0.2,q,3,6,0.9)}m.d=1
m.e=0}if(v||u){if(v&&u)q=B.bdN
else q=v?B.Zh:B.Yp
A.h7M(m,C.a([B.ab8,B.ab8.a7(0,B.hg8),new A.q(0,10.6,1.6)],x.o),e,q,0.42,1.4)
m.b=0
m.d=0.5
m.e=0.2
m.aQ(new A.q(0,10.05,3.7),new A.q(12.8,1.0999999999999996,5.8),B.ahv,0.7)
m.d=1
m.e=0
A.huD(m,new A.q(0,10.65,1.6),e)}return n},
bDe(d){return D.d.d_(B.RX,new A.fCU(d))},
cob:function cob(d,e,f){var _=this
_.a=d
_.b=e
_.c=!1
_.d=""
_.e=f
_.w=_.r=_.f=!1},
Fg:function Fg(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fBf:function fBf(d,e){this.a=d
this.b=e},
fBe:function fBe(d,e){this.a=d
this.b=e},
fBd:function fBd(){},
fAk:function fAk(d,e){this.a=d
this.b=e},
fCV:function fCV(d,e){this.a=d
this.b=e},
fCU:function fCU(d){this.a=d},
h5a(d,e,f){var w=x.N
w=new A.co1(e,d,C.aX(w),C.U(w,x.S),C.aX(w))
w.bAi(d,e,f)
return w},
hvj(c0,c1,c2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5=C.a([],x.z),b6=new A.fg(b5),b7=C.U(x.S,x.q),b8=C.a([],x.E),b9=c0.c
b9===$&&C.c()
w=b9.a==="bathroom"
v=w?28:0
b6.b=9199
b6.hj(B.hf2,B.hhf,B.bgL,4)
b6.hj(B.hcE,B.hfN,B.XZ,4)
b6.hj(new A.q(v+19.8+0.6,24,16),B.h9Y,B.vP,2)
b7.n(0,9199,B.edY)
b6.b=9198
b6.aQ(new A.q(v,0.6,10),B.hg9,B.iz,0.1)
b6.aQ(new A.q(v,29.4,18.6),B.h9z,B.iz,0.1)
b6.aQ(new A.q(v-19.4,13.6,10.5),B.hh_,B.iz,0.1)
for(u=[B.f0l,B.f0h,B.f_d,B.f_a],t=0;t<4;++t){s=u[t].a
b6.aQ(new A.q(v+s[0],33,s[1]),new A.q(s[2],2.4,s[3]),B.btx,0.6)}b6.a4A(new A.q(v,27,8),new A.q(v,34.3,8),10.5,B.Z2,!1,!0,0.7,24)
b6.dm(new A.q(v,27,8),new A.q(v,27.2,8),10.5,B.bjP,0.5,24)
if(w){b6.aQ(new A.q(v,46,0.6),B.h9J,D.bO,0.3)
b6.aQ(new A.q(v,46,1.1),B.h8E,B.i1,0.9)}b6.dv(new A.q(v,27.1,8),new A.q(v,27.3,8),1.4,B.he,12)
b6.a4A(new A.q(v+15,23.6,8),new A.q(v+19.4,23.6,8),0.92,B.q_,!1,!0,0.3,12)
b7.n(0,9198,B.een)
b6.b=9400
b6.dm(new A.q(-56,18,0),new A.q(-56,18,6),1.5,B.vM,0.8,12)
u=c0.r?B.nd:D.bn
b6.dm(new A.q(-57,18,6),new A.q(-55,18,6.5),4,u,0.5,14)
b6.dm(new A.q(-56,16,0),new A.q(-56,20,0),1,B.LW,0.7,10)
u=c0.r?"The water is ON. Turn it OFF with your hand before you cut into any pipe, and turn it ON to test your work.":"The water is OFF. Turn it ON to test your work."
b7.n(0,9400,new A.cV("Main water valve",u,new A.q(-56,18,4),22))
u=c0.r
s=u?"MAIN WATER: ON":"MAIN WATER: OFF"
u=u?D.dF:D.bn
b8.push(new A.hh(new A.q(-56,24,6),s,u,0))
r=new A.fBc(b6)
u=v-8
r.$1(u)
s=v+8
r.$1(s)
if(w)r.$1(-40)
q=new A.q(v,21,8)
p=new A.fBa(q)
o=new A.fB4(b6,c0)
n=new A.fB5(b6,c0)
m=new A.fBb(c0,b7,c2,c1,b8)
l=b9.c
for(k=l.length,j=c0.x,i=c0.e,h=c0.f,g=x.o,t=0;t<k;++t){f=l[t]
e=f.a
d=i.t(0,e)
if(d){a0=c0.vr(0,e)
a1=h.h(0,e)
if(a1==null)a1=0
a2=a0.r-a1>0}else a2=!1
a3=D.d.cp(l,f)
a4=9100+a3
j.t(0,e)
switch(e){case"flange":a5=new A.q(-30,0.3,14)
if(d){b6.b=a4
b6.dm(a5,new A.q(-30,0.8999999999999999,14),5.5,B.q_,0.4,18)
b6.r6(new A.q(-30,0.8,14),new A.q(-30,1.2,14),5.5,3.2,B.vM,0.8,18)}else n.$3(e,new A.q(-30,0.8,14),B.h1K)
m.$3(f,a5,"Flange spot")
break
case"wax":a5=new A.q(-30,1.2,14)
if(d){b6.b=a4
b6.r6(a5,new A.q(-30,2.3,14),4.2,2.4,B.btA,0.2,18)}else n.$3(e,new A.q(-30,1.7,14),B.hcR)
m.$3(f,a5,"Wax ring spot")
break
case"toilet":if(d){b6.b=a4
b6.yU(new A.q(-30,0.5,14),new A.q(-30,16,14),8.5,B.Bi,6,0.8,20)
b6.dm(new A.q(-30,16,14),new A.q(-30,17,14),9.5,B.MJ,0.8,20)
b6.aQ(new A.q(-30,22,4.5),B.aX_,B.Bi,0.8)
b6.aQ(new A.q(-30,29.2,4.5),B.h7I,B.MJ,0.8)}else{b6.b=a4
b6.d=0.32
b6.dv(new A.q(-30,0.5,14),new A.q(-30,17,14),8.5,D.b_,16)
b6.aG(new A.q(-30,22,4.5),B.aX_,D.b_)
b6.d=1}m.$3(f,new A.q(-30,12,12),"Toilet spot")
break
case"bolts":if(d){for(e=9200+a3*2,a6=0;a6<2;++a6){a7=B.aBk[a6]
b6.b=e+(a7<0?0:1)
a0=-30+a7
b6.dm(new A.q(a0,0.5,17),new A.q(a0,3.6,17),0.45,B.Me,0.8,8)
a1=a2?D.cL:B.Me
b6.dm(new A.q(a0,3.4,17),new A.q(a0,4.6,17),1.2,a1,0.8,6)}e=a2?"The nuts are loose. Tighten them with the wrench, a little at a time so the porcelain does not crack.":"The toilet is bolted down."
b7.n(0,a4,new A.cV(f.c,e,new A.q(-30,3,17),20))}else for(a6=0;a6<2;++a6){a7=B.aBk[a6]
b6.b=a4
b6.d=0.4
e=-30+a7
b6.dv(new A.q(e,0.5,17),new A.q(e,4.6,17),1.2,D.b_,8)
b6.d=1}m.$3(f,new A.q(-30,3,17),"Bolts")
break
case"tvalve":A.h9x(b6,a4,new A.q(-40,8,1.6),d,B.nd,new A.fB0(n,f,-30))
m.$3(f,new A.q(-40,8,2),"Valve")
break
case"those":if(d){b6.b=a4
b6.j9(A.aib(C.a([new A.q(-40,10,1.6),new A.q(-42,14,3.5),new A.q(-36,17,3.6),new A.q(-32,21,2.5)],g),6),0.55,B.Bv,!1,0.7,8)
b6.j9(C.a([new A.q(-36.8,15.5,3.6),new A.q(-35,16.4,3.6)],g),0.62,B.nd,!1,0.4,8)
if(a2)b6.dv(new A.q(-40,10,1.6),new A.q(-40,11.2,1.6),0.9,D.cL,8)}else o.$3$r(e,A.aib(C.a([new A.q(-40,10,1.6),new A.q(-42,14,3.5),new A.q(-36,17,3.6),new A.q(-32,21,2.5)],g),6),0.9)
m.$3(f,new A.q(-36,15,3),"Toilet hose")
break
case"faucet":if(d){b6.b=a4
b6.dm(new A.q(v,34.2,8),new A.q(v,34.6,8),3.6,B.jb,0.9,20)
b6.j9(A.Dl(C.a([new A.q(v,34.6,8),new A.q(v,40,8),new A.q(v,43,10),new A.q(v,43,14),new A.q(v,41.2,14.6)],g),1.4,6),0.5,B.jb,!0,0.9,10)
for(a6=0;a6<2;++a6){a7=E.a5f[a6]
e=v+a7
b6.dm(new A.q(e,34.6,8),new A.q(e,36.6,8),0.5,B.jb,0.9,8)
a0=a7<0?B.rm:B.nd
b6.dm(new A.q(e,36.6,8),new A.q(e,37.6,8),0.8,a0,0.6,10)}for(a6=0;a6<2;++a6){e=v+B.dnt[a6]
b6.dm(new A.q(e,34,8),new A.q(e,28.4,8),0.45,B.jb,0.9,8)}}else n.$3(e,new A.q(v,38,9),B.h1A)
m.$3(f,new A.q(v,38,8),"Faucet spot")
break
case"vhot":A.h9x(b6,a4,new A.q(u,8,1.6),d,B.rm,new A.fB1(n,f,v))
m.$3(f,new A.q(u,8,2),"Hot valve")
break
case"vcold":A.h9x(b6,a4,new A.q(s,8,1.6),d,B.nd,new A.fB2(n,f,v))
m.$3(f,new A.q(s,8,2),"Cold valve")
break
case"hhot":case"hcold":a8=e==="hhot"
a9=a8?-1:1
a0=v+a9*3
b0=A.aib(C.a([new A.q(v+a9*8,10.5,1.8),new A.q(v+a9*9,16,3.5),new A.q(v+a9*6,22,4.2),new A.q(a0,27.5,6),new A.q(a0,28.6,8)],g),6)
if(d){b6.b=a4
b6.j9(b0,0.5,B.Bv,!1,0.7,8)
b1=b0.length/2|0
e=C.a([b0[b1-1],b0[b1],b0[b1+1]],g)
b6.j9(e,0.58,a8?B.rm:B.nd,!1,0.4,8)
if(a2){e=D.d.gI(b0)
a0=D.d.gI(b0)
b6.dv(e,new A.q(a0.a+0,a0.b+1.4,a0.c+0),0.9,D.cL,8)
a0=D.d.gak(b0)
b6.dv(new A.q(a0.a,a0.b-1.4,a0.c),D.d.gak(b0),0.9,D.cL,8)}}else o.$3$r(e,b0,0.9)
e=b0[b0.length/2|0]
m.$3(f,e,a8?"Hot hose":"Cold hose")
break
case"tail":case"trap":case"arm":a0=e==="tail"
if(a0)a1=B.azj
else a1=e==="trap"?A.hcd():B.aBQ
b2=p.$1(a1)
if(d){b6.b=a4
a1=a0?B.jb:B.q_
b6.apo(b2,0.66,a1,!1,!0,!0,a0?0.85:0.3,12)}else o.$3$r(e,b2,0.78)
a1=J.a6(b2)
a1=a1.h(b2,a1.gL(b2)/2|0)
if(a0)e="Tailpiece"
else e=e==="trap"?"P-trap":"Trap arm"
m.$3(f,a1,e)
break}}b3=new A.fB8(l,c0,b6,b7)
b3.$4("trap",q.a7(0,B.ab9),B.e8,0)
b3.$4("arm",q.a7(0,B.abb),B.hu,1)
for(u=C.en(j,j.r,C.a7(j).c),s=u.$ti.c;u.C();){k=u.d
if(k==null)k=s.a(k)
b4=D.d.fZ(b9.c,new A.fB3(k))
k=A.hzu(c0,k)
b8.push(new A.hh(new A.q(k.a+0,k.b+6,k.c+4),"\ud83d\udca7 LEAK: "+b4.c,D.bB,0))}return new A.tU(b5,b7,b8,B.wH,null,0)},
h9x(d,e,f,g,h,i){if(!g){i.$0()
return}d.b=e
d.dm(f.a7(0,B.hcT),f.a7(0,B.aY5),0.9,B.vM,0.8,12)
d.dm(f.a7(0,B.aY5),f.a7(0,B.h9q),0.45,B.vM,0.8,10)
d.dm(f.a7(0,B.hg4),f.a7(0,B.aYp),0.3,B.af2,0.7,8)
d.dm(f.a7(0,B.aYp),f.a7(0,B.hgC),1.2,h,0.5,12)},
hzu(d,e){var w,v=d.c
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
ikB(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=C.a([],x.z),f=new A.fg(g),e=d.x
if(e.a===0)return g
for(e=C.en(e,e.r,C.a7(e).c),w=a0*2,v=e.$ti.c,u=d.e;e.C();){t=e.d
if(t==null)t=v.a(t)
s=A.hzu(d,t)
r=d.c
r===$&&C.c()
q=D.d.fZ(r.c,new A.fRW(t)).b==="valve"||!u.t(0,t)
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
f.fQ(new A.q(t+m*l*n,r+(l*k-l*l*j),p+(1.5+l*i)),h,B.Zf,3,6,0.5);++o}f.d=0.55
f.dm(new A.q(t,0.3,11),new A.q(t,0.5,11),7+2*Math.sin(w),B.Zf,0.6,18)
f.d=1}return g},
nw:function nw(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
Xh:function Xh(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
co1:function co1(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.d=_.c=$
_.e=f
_.f=g
_.r=!0
_.w=0
_.x=h
_.y=!1},
co5:function co5(d){this.a=d},
co6:function co6(d){this.a=d},
co2:function co2(d){this.a=d},
co7:function co7(d){this.a=d},
co8:function co8(d){this.a=d},
co9:function co9(){},
coa:function coa(){},
co3:function co3(d){this.a=d},
co4:function co4(d){this.a=d},
fBc:function fBc(d){this.a=d},
fBa:function fBa(d){this.a=d},
fB4:function fB4(d,e){this.a=d
this.b=e},
fB7:function fB7(d){this.a=d},
fB5:function fB5(d,e){this.a=d
this.b=e},
fB6:function fB6(d){this.a=d},
fBb:function fBb(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fB0:function fB0(d,e,f){this.a=d
this.b=e
this.c=f},
fB1:function fB1(d,e,f){this.a=d
this.b=e
this.c=f},
fB2:function fB2(d,e,f){this.a=d
this.b=e
this.c=f},
fB8:function fB8(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fB9:function fB9(d){this.a=d},
fB3:function fB3(d){this.a=d},
fRW:function fRW(d){this.a=d},
Wg:function Wg(d,e,f){this.c=d
this.e=e
this.a=f},
aFg:function aFg(d,e){var _=this
_.e=_.d=$
_.f=d
_.r=$
_.w=e
_.x=""
_.y=0
_.z=null
_.as=_.Q=!1
_.c=_.a=_.at=null},
err:function err(d,e,f){this.a=d
this.b=e
this.c=f},
ers:function ers(d){this.a=d},
erq:function erq(d){this.a=d},
erm:function erm(d){this.a=d},
erw:function erw(d){this.a=d},
erb:function erb(d,e){this.a=d
this.b=e},
erc:function erc(d,e){this.a=d
this.b=e},
erd:function erd(d){this.a=d},
eri:function eri(d,e){this.a=d
this.b=e},
erg:function erg(d){this.a=d},
erh:function erh(d,e){this.a=d
this.b=e},
erp:function erp(d){this.a=d},
erx:function erx(d){this.a=d},
erj:function erj(d){this.a=d},
erk:function erk(){},
erl:function erl(d){this.a=d},
ert:function ert(d,e){this.a=d
this.b=e},
eru:function eru(d){this.a=d},
erv:function erv(d,e){this.a=d
this.b=e},
erf:function erf(d,e,f){this.a=d
this.b=e
this.c=f},
ere:function ere(d,e,f){this.a=d
this.b=e
this.c=f},
ery:function ery(d){this.a=d},
erC:function erC(d,e){this.a=d
this.b=e},
erA:function erA(){},
erz:function erz(d){this.a=d},
erB:function erB(d,e){this.a=d
this.b=e},
ero:function ero(d){this.a=d},
ern:function ern(d,e){this.a=d
this.b=e},
j4(d){return D.d.fZ(B.uM,new A.h_h(d))},
aPX(d){var w
A:{if("tv"===d){w="The TV"
break A}if("lamp"===d){w="The lamp"
break A}if("toaster"===d){w="The toaster"
break A}if("washerM"===d){w="The washing machine"
break A}if("dryerM"===d){w="The dryer"
break A}if("rangeM"===d){w="The range"
break A}w="The hair dryer"
break A}return w},
csY(d,e,f,g,h){var w=x.S,v=x.N
v=new A.XL(g,f,C.U(w,v),C.aX(w),C.aX(w),C.U(w,x.cH),C.a([new A.XX(),new A.XX()],x.gD),C.U(w,x.cD),C.aX(w),C.U(w,v),C.aX(w),C.a([],x.s),C.U(w,v))
v.cm3(d,e,h)
return v},
h5C(d,e){var w=!0
if(d!==e)if(!(D.d.t(B.lj,d)&&D.d.t(B.lj,e)))if(!(D.d.t(B.jG,d)&&D.d.t(B.jG,e)))if(d==="light"||d==="fan")w=e==="light"||e==="fan"
else w=!1
return w},
z8:function z8(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
h_h:function h_h(d){this.a=d},
l9:function l9(d,e,f){this.a=d
this.b=e
this.c=f},
XX:function XX(){var _=this
_.a=!1
_.b=0
_.c=!0
_.d=!1},
aw6:function aw6(d,e){var _=this
_.a=!1
_.b=d
_.c=e
_.e=_.d=!1},
aUY:function aUY(d,e){this.a=d
this.b=e
this.c=!1},
ey:function ey(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
XL:function XL(d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
ct1:function ct1(){},
ct8:function ct8(d){this.a=d},
ct9:function ct9(d){this.a=d},
cta:function cta(d,e){this.a=d
this.b=e},
ctb:function ctb(d,e){this.a=d
this.b=e},
ctd:function ctd(d){this.a=d},
ctc:function ctc(d,e){this.a=d
this.b=e},
ct0:function ct0(d){this.a=d},
csZ:function csZ(){},
ct_:function ct_(d){this.a=d},
ct6:function ct6(){},
ct7:function ct7(){},
ct2:function ct2(){},
ct3:function ct3(d){this.a=d},
ct4:function ct4(d){this.a=d},
cte:function cte(d){this.a=d},
ct5:function ct5(d){this.a=d},
ciz(d,e,f,g){return new A.Ok(d,!1,f,g,null)},
hM:function hM(d,e,f){this.a=d
this.b=e
this.c=f},
Ok:function Ok(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.a=h},
aFn:function aFn(d,e,f){var _=this
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
ew1:function ew1(d,e,f){this.a=d
this.b=e
this.c=f},
ew2:function ew2(d){this.a=d},
ew0:function ew0(d){this.a=d},
ev7:function ev7(d){this.a=d},
ev8:function ev8(d){this.a=d},
ev6:function ev6(d){this.a=d},
ev9:function ev9(d){this.a=d},
eva:function eva(d){this.a=d},
ev5:function ev5(d){this.a=d},
evb:function evb(d){this.a=d},
evc:function evc(d){this.a=d},
evm:function evm(d){this.a=d},
evo:function evo(d){this.a=d},
evd:function evd(){},
eve:function eve(d){this.a=d},
evf:function evf(d){this.a=d},
evF:function evF(d,e){this.a=d
this.b=e},
evn:function evn(d){this.a=d},
evY:function evY(d){this.a=d},
evZ:function evZ(d){this.a=d},
ew_:function ew_(d,e){this.a=d
this.b=e},
evV:function evV(d){this.a=d},
evW:function evW(d,e){this.a=d
this.b=e},
evX:function evX(d,e){this.a=d
this.b=e},
evU:function evU(d){this.a=d},
evM:function evM(d){this.a=d},
evN:function evN(d){this.a=d},
evO:function evO(d){this.a=d},
evP:function evP(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
evQ:function evQ(d){this.a=d},
evR:function evR(d,e,f){this.a=d
this.b=e
this.c=f},
evS:function evS(d){this.a=d},
evT:function evT(d,e,f){this.a=d
this.b=e
this.c=f},
ew5:function ew5(d,e){this.a=d
this.b=e},
evl:function evl(d){this.a=d},
evj:function evj(d){this.a=d},
evk:function evk(d,e){this.a=d
this.b=e},
evi:function evi(d,e){this.a=d
this.b=e},
evg:function evg(d){this.a=d},
evh:function evh(d,e){this.a=d
this.b=e},
evp:function evp(d,e){this.a=d
this.b=e},
ew6:function ew6(d){this.a=d},
ew8:function ew8(d){this.a=d},
ew9:function ew9(d){this.a=d},
ewa:function ewa(d){this.a=d},
ewb:function ewb(d){this.a=d},
ewc:function ewc(d){this.a=d},
ewd:function ewd(d,e){this.a=d
this.b=e},
ewe:function ewe(d){this.a=d},
ewf:function ewf(d,e){this.a=d
this.b=e},
ew7:function ew7(d,e){this.a=d
this.b=e},
ew3:function ew3(d){this.a=d},
ew4:function ew4(d,e){this.a=d
this.b=e},
evD:function evD(){},
evE:function evE(){},
evq:function evq(d){this.a=d},
evr:function evr(d){this.a=d},
evs:function evs(d){this.a=d},
evv:function evv(){},
evw:function evw(){},
evx:function evx(){},
evy:function evy(){},
evz:function evz(){},
evA:function evA(d){this.a=d},
evB:function evB(){},
evC:function evC(d){this.a=d},
evt:function evt(d){this.a=d},
evu:function evu(){},
ewF:function ewF(d,e){this.a=d
this.b=e},
ewG:function ewG(d){this.a=d},
ewo:function ewo(d){this.a=d},
ewE:function ewE(d){this.a=d},
ewr:function ewr(d){this.a=d},
ews:function ews(d,e){this.a=d
this.b=e},
ewq:function ewq(d,e){this.a=d
this.b=e},
ewt:function ewt(d,e){this.a=d
this.b=e},
ewp:function ewp(d,e){this.a=d
this.b=e},
ewH:function ewH(d,e){this.a=d
this.b=e},
ewn:function ewn(d,e){this.a=d
this.b=e},
ewI:function ewI(d){this.a=d},
ewm:function ewm(d){this.a=d},
ewJ:function ewJ(d){this.a=d},
ewl:function ewl(d){this.a=d},
ewK:function ewK(d){this.a=d},
ewk:function ewk(d){this.a=d},
ewL:function ewL(d,e){this.a=d
this.b=e},
ewh:function ewh(d,e){this.a=d
this.b=e},
ewi:function ewi(d){this.a=d},
ewj:function ewj(d,e){this.a=d
this.b=e},
ewM:function ewM(d){this.a=d},
ewu:function ewu(d){this.a=d},
ewv:function ewv(d,e,f){this.a=d
this.b=e
this.c=f},
ewg:function ewg(d,e,f){this.a=d
this.b=e
this.c=f},
eww:function eww(d){this.a=d},
ewx:function ewx(d,e){this.a=d
this.b=e},
ewy:function ewy(d){this.a=d},
ewz:function ewz(d){this.a=d},
ewA:function ewA(d){this.a=d},
ewB:function ewB(d){this.a=d},
ewC:function ewC(d){this.a=d},
ewD:function ewD(d,e){this.a=d
this.b=e},
evL:function evL(d,e){this.a=d
this.b=e},
evK:function evK(d,e){this.a=d
this.b=e},
evG:function evG(d){this.a=d},
evH:function evH(d,e,f){this.a=d
this.b=e
this.c=f},
evI:function evI(d,e){this.a=d
this.b=e},
evJ:function evJ(d,e){this.a=d
this.b=e},
aia(d,e){var w=d.d,v=e.a,u=e.c,t=e.b,s=w.a,r=w.b
w=w.c
return d.c?new A.q(s+v,r-u,w+t):new A.q(s+v,r+t,w+u)},
h8N(d,e,f,g){var w,v,u,t,s,r=d.a,q=e.d,p=e.c?A.nE(r,1.5707963267948966,0,q):A.nE(r,0,0,q)
r=C.a([],x.z)
for(q=p.length,w=0;w<p.length;p.length===q||(0,C.L)(p),++w){v=p[w]
u=v.d
u=u===0?0:f.$1(u)
t=v.f
s=t<0.99?3:2
r.push(new A.kq(v.a,v.b,v.c,u,v.e,t,v.r,v.w,v.x,s,g))}q=C.U(x.S,x.q)
for(u=d.b,u=u.gdW(u),u=u.gaf(u);u.C();){t=u.gS(u)
s=f.$1(t.a)
t=t.b
q.n(0,s,new A.cV(t.a,t.b,A.aia(e,t.c),t.d))}return new C.z(r,q)},
i58(a3,a4,a5,a6,a7,a8,a9,b0,b1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=x.i,a2=C.eD([a4,a5],a1)
for(w=b1.length,v=0;v<b1.length;b1.length===w||(0,C.L)(b1),++v){u=b1[v].a
a2.M(0,D.k.E(u[0],a4,a5))
a2.M(0,D.k.E(u[1],a4,a5))}t=C.C(a2,a2.$ti.k("cs.E"))
D.d.ff(t)
for(w=C.T(b1).k("Z<1>"),u=w.k("M.E"),s=0;r=s+1,r<t.length;s=r){q=t[s]
p=t[r]
o=p-q
if(o<0.01)continue
n=(q+p)/2
m=C.C(new C.Z(b1,new A.ftx(n),w),u)
l=C.eD([a6,a7],a1)
for(k=m.length,v=0;v<m.length;m.length===k||(0,C.L)(m),++v){j=m[v].a
l.M(0,D.k.E(j[2],a6,a7))
l.M(0,D.k.E(j[3],a6,a7))}i=C.C(l,l.$ti.k("cs.E"))
D.d.ff(i)
for(k=!(o>30),h=0;g=h+1,g<i.length;h=g){f=i[h]
e=i[g]
j=e-f
if(j<0.01)continue
d=(f+e)/2
if(D.d.b3(m,new A.fty(d)))continue
a0=!k||j>60?2:1
a3.hj(new A.q(n,d,a8),new A.q(o,j,a9),b0,a0)}}},
wX(d3,d4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3=null,c4=x.z,c5=C.a([],c4),c6=new A.fg(c5),c7=C.a([],x.a),c8=x.E,c9=C.a([],c8),d0=x.S,d1=C.U(d0,x.q),d2=$.dM=$.dM+1
c6.f=-1
c6.b=8001
c6.lU(B.h6P,B.hap,B.BC,0.15,4)
c6.f=0
c6.hj(B.h6k,B.aXy,B.aeZ,3)
c6.aQ(B.hfk,B.hgM,B.i1,0.5)
c6.aG(B.aXF,B.h62,B.Bn)
c6.aG(B.aXF,B.hh2,B.Bn)
c6.hj(B.hau,B.aXy,B.aeZ,3)
c6.aQ(B.h6b,B.hav,B.vJ,0.15)
c6.aQ(B.hbf,B.haE,B.Fe,0.8)
c6.b=0
c6.f=3
c6.d=d3.gt7()?0.42:0.1
c6.hj(B.h4n,B.hcL,d3.gt7()?B.kG:B.bcH,3)
c6.d=1
c6.f=2
c6.b=8001
if(!d3.gt7())for(w=0;w<10;++w)c6.aE6(new A.q(-72+w*16,51.3,55),B.hdn,B.iz,!1,0.05)
else{c6.x=d2
c6.aQ(B.hbI,B.h8Q,D.c,0.2)
c6.aQ(B.hi2,B.aXS,D.c,0.2)
c6.aQ(B.h7N,B.aXS,D.c,0.2)}if(d3.gt7()){c6.x=d2
c6.aQ(B.h7Y,B.h8W,B.kG,0.2)}c6.x=0
c6.b=8001
c6.r=!0
c6.hj(B.hgy,B.hhn,B.agQ,2)
c6.aQ(B.hfu,B.h5L,B.Yt,0.1)
c6.aQ(B.hft,B.h5M,B.M8,0.1)
c6.aQ(B.hf1,B.aXp,B.M8,0.1)
c6.aQ(B.h3z,B.aXp,B.M8,0.1)
c6.r=!1
d1.n(0,8001,B.edF)
c6.x=d2
c6.b=8002
c6.lU(B.hhK,B.aXt,B.iz,0.05,3)
c6.lU(B.h4Q,B.aXt,B.iz,0.05,3)
d1.n(0,8002,B.ee7)
for(v=d3.y,w=0;u=$.Hf(),w<u.length;++w){t=1000+w
c6.b=t
c6.cIZ(new A.q(u[w],0,-2.25),B.hd2,B.iz,!1,0.05,2)
s=v.t(0,w)?"This one has a hole for the cable.":"Tap it with the drill to put a hole through it."
d1.n(0,t,new A.cV("Wall stud","A 2x4 stud, one of the vertical posts in the wall. They stand 16 inches apart. "+s,new A.q(u[w],20,-2),60))
if(v.t(0,w)){c6.b=0
c6.e=0.6
c6.aG(new A.q(u[w],40,-2.25),B.h6i,B.ai3)
c6.e=0}}c6.b=8000
c6.aQ(B.h3K,B.h21,B.XK,0.5)
c6.e=0.4
c6.aG(B.hab,B.hg6,B.xT)
for(r=0;r<6;++r)for(v=19.5-r*3.6,q=0;q<2;++q)c6.aQ(new A.q(61.6+q*4.8,v,0.5),B.h_1,B.Zi,0.3)
p=d3.ax&&!d3.ay
v=p?0.6:0
if(d3.ay)u=D.cd
else u=p?D.bB:D.hk
c6.aQ(new A.q(64,-2.5+v,0.9),B.h8L,u,0.4)
c6.e=0
if(d3.ay)v="The main breaker has TRIPPED (orange). Tap it to flip it fully OFF, fix the problem, then turn it ON."
else v=d3.ax?"The power is ON. Tap to turn it OFF. Always turn it OFF before you touch any wire.":"The power is OFF. Tap to turn it ON."
d1.n(0,8000,new A.cV("Breaker panel",v,B.h5Q,60))
c6.b=8003
for(v=d3.z,u=C.en(v,v.r,C.a7(v).c),t=x.o,s=u.$ti.c;u.C();){o=u.d
n=A.j4(o==null?s.a(o):o)
o=n.d
m=o.a-0.35
l=C.a([B.hed,B.hbE,new A.q(m,40,-3.2)],t)
if(n.c)D.d.v(l,C.a([new A.q(m,51.4,-3.2),new A.q(m,51.4,o.c+11)],t))
else l.push(new A.q(m,o.b+11,-3.4))
c6.j9(A.Dl(l,3,6),0.2,B.Yz,!1,0.35,6)}d1.n(0,8003,B.eev)
for(u=x.D,s=d3.Q,k=0;k<3;++k){j=B.oC[k]
i=s.h(0,j)
if(i==null||!i.a)continue
if(i.e)h=B.bqZ
else h=i.d?B.bst:B.brP
o=C.a([],u)
for(m=i.b,l=C.a7(m),g=new C.mr(m,m.r,l.k("mr<1>")),g.c=m.e,l=l.c;g.C();){m=g.d
if(m==null)m=l.a(m)
o.push(new C.cw([A.j4(m).d.a-1.15,A.j4(m).d.a+1.15,A.j4(m).d.b-2,A.j4(m).d.b+2]))}m=6100+k
c6.b=m
A.i58(c6,j,j+48,-47,47,-0.25,0.5,h,o)
o=i.e?"Painted and finished.":"A 4 by 8 foot sheet of drywall (gypsum between two layers of paper). It is screwed to the studs."
d1.n(0,m,new A.cV("Drywall sheet",o,new A.q(j+24,0,0),90))
c6.b=0
c6.e=0.3
for(o=i.c,m=C.a7(o),l=new C.mr(o,o.r,m.k("mr<1>")),l.c=o.e,m=m.c;l.C();){o=l.d
if(o==null)o=m.a(o)
f=D.o.ao(o,10)
e=D.o.F(o,10)
c6.fQ(new A.q($.Hf()[f],-40+e*16,0.1),0.34,B.xT,3,5,0.3)}c6.e=0}for(u=d4.a,o=u!=="tape",m=d3.as,l=u!=="mud",g=u==="sand",w=0;w<2;w=a1){d=-24+48*w
a0=s.h(0,B.oC[w])
a0=a0==null?c3:a0.a
a1=w+1
a2=s.h(0,B.oC[a1])
a2=a2==null?c3:a2.a
if(a0!==!0||a2!==!0)continue
a3=m[w]
a0=6200+w
c6.b=a0
if(a3.a&&!a3.d){a2=a3.b
if(a2===0)h=B.br1
else h=a3.c?B.bmR:B.bhN
c6.e=0.5
c6.aG(new A.q(d,0,0.08+0.02*a2),new A.q(2.2+a2*1.4,94,0.12),h)
c6.e=0}else if(!o||!l||g){c6.d=0.45
c6.e=0.6
c6.aG(new A.q(d,0,0.12),B.h99,D.b_)
c6.e=0
c6.d=1}if(a3.d)a2="Smooth and ready for paint."
else if(!a3.a)a2="The joint between two sheets. It needs tape and three coats of joint compound."
else{a2=a3.b
a4=a2===1?"":"s"
a4="Taped, with "+a2+" coat"+a4+" of mud."
a2=a4}d1.n(0,a0,new A.cV("Seam",a2,new A.q(d,0,0),70))}for(o=d4.b,m=d3.x,l=d3.at,g=x.N,a5=0;a5<7;++a5){n=B.uM[a5]
a0=n.a
a6=m.aj(0,a0)
a7=l.h(0,a0)
a8=o===a0&&a7!=null
if(!a6)continue
a2=n.c
if(a2)a9=n.e==="fan"?"fan":"light"
else{a4=a7==null?c3:a7.a
a9=a4==null?"outlet":a4}if(a8){b0=A.t7(a7.a)
a0=a7.b
b1=A.bD0(b0,a0,!1)
b2=A.h8N(b1,n,new A.fBg(n),d2)
D.d.v(c5,b2.a)
d1.v(0,b2.b)
if(a0.f&&a0.c===0){a0=C.a([],c8)
for(a2=b1.c,a4=a2.length,b3=0;b3<a2.length;a2.length===a4||(0,C.L)(a2),++b3){b4=a2[b3]
a0.push(new A.hh(A.aia(n,b4.a),b4.b,b4.c,0))}D.d.v(c9,a0)}}else if(a7!=null&&a7.b.c>=2){a4=a7.a
b5=a7.b
b6=b5.x
b7=C.a([],c4)
b8=new A.fg(b7)
b9=new A.CC(C.U(d0,g))
b9.c=2
b9.x=b6
if(a4==="light"||a4==="fan")A.hrO(b8,a4,b9)
else{A.hrr(b8,A.hag(a4),-0.25,b6,!0,!1,!0)
A.htU(b8,b6)}D.d.v(c5,A.h8N(new A.tU(b7,B.Sq,B.zy,B.wH,c3,0),n,new A.fBh(n),d2).a)
if(!a2){c6.f=3
c6.b=3000+a0
c6.e=0.4
c6.d=0.55
a2=n.d
b5=b5.x?D.ax:D.b8
c6.aG(new A.q(a2.a,a2.b,a2.c+0.2),B.h9e,b5)
c6.d=1
c6.f=2
c6.e=0}d1.n(0,3000+a0,new A.cV(A.i0M(a4),A.i0L(d3,a0),A.aia(n,B.aaW),22))}else{a4=C.a([],c4)
b5=A.hag(a9)===a9?a9:"outlet"
A.hqM(new A.fg(a4),b5,!1)
D.d.v(c5,A.h8N(new A.tU(a4,B.dB_,B.zy,B.wH,c3,0),n,new A.fBi(n),d2).a)
a2=a2?"Ceiling box":"Electrical box"
a4=v.t(0,a0)?"The box is mounted and the cable is in. A device can be wired here.":"The box is mounted. Pull the cable to it."
d1.n(0,2000+a0,new A.cV(a2,a4,A.aia(n,B.aaW),24))}}c6.x=0
c0=new A.fBl(c6)
if(u==="wall"||u==="ceiling"||u==="fanbox")for(a5=0;a5<7;++a5){n=B.uM[a5]
c4=n.a
if(m.aj(0,c4))continue
c8=n.c
d0=n.d
s=d0.a
o=d0.b
a0=c8?new A.q(s,o-1,d0.c):new A.q(s,o,1.5)
a2=c8?B.h6r:B.h8y
c0.$4$round(2000+c4,a0,a2,c8)
c4=c8?new A.q(s,o-8,d0.c):new A.q(s,o+7,3)
c9.push(new A.hh(c4,n.b,D.eP,0))}else if(u==="cable")for(a5=0;a5<7;++a5){n=B.uM[a5]
c4=n.a
if(!m.aj(0,c4)||v.t(0,c4))continue
c8=n.c
d0=n.d
s=d0.a
o=d0.b
d0=c8?new A.q(s,o-1,d0.c):new A.q(s,o,1.5)
s=c8?B.aXw:B.h6R
c0.$5$col$round(2000+c4,d0,s,D.bt,c8)}else if(u==="knife")for(a5=0;a5<7;++a5){n=B.uM[a5]
if(n.c||!m.aj(0,n.a))continue
c4=n.d
c8=c4.a
i=d3.aqr(c8)
if(i==null||i.b.t(0,n.a))continue
c0.$4$col(2000+n.a,new A.q(c8,c4.b,0.5),B.h8I,D.cL)}else if(u==="sheet")for(w=0;w<5;){j=B.a5p[w]
c0.$3(6000+w,new A.q(j,0,0.3),B.hd7);++w
c9.push(new A.hh(new A.q(j,50,1),"edge "+w,D.eP,0))}else if(u==="screw")for(a5=0;a5<3;++a5){j=B.oC[a5]
i=s.h(0,j)
if(i==null||!i.a)continue
for(c4=d3.aqM(j),c8=c4.length,d0=i.c,o=j+48,b3=0;b3<c4.length;c4.length===c8||(0,C.L)(c4),++b3){f=c4[b3]
for(a0=f*10,a2=7000+a0,r=0;r<6;++r){if(d0.t(0,a0+r))continue
c0.$3(a2+r,new A.q($.Hf()[f],-40+r*16,0.5),B.aXm)}a2=$.Hf()
if(f+1<a2.length&&a2[f]+16<=o)for(a0=7500+a0,r=0;r<6;r+=2)c0.$4$col(a0+r,new A.q(a2[f]+8,-40+r*16+8,0.5),B.aXm,D.du)}}if(!C.eD(["wall","ceiling","fanbox","cable","knife","sheet","screw",""],g).t(0,u))c4=D.d.t(B.zs,u)||C.eD(["outlet","gfci","switch","light","fan"],g).t(0,u)||D.d.t(B.lj,u)||D.d.t(B.jG,u)
else c4=!1
if(c4)for(c4=d3.CW,a5=0;a5<7;++a5){n=B.uM[a5]
if(D.d.t(B.zs,u)){c8=n.a
a7=l.h(0,c8)
if(a7!=null&&D.d.t(B.lj,a7.a)&&a7.b.c>=2&&!c4.aj(0,c8)){d0=n.d
c0.$4$col(3000+c8,new A.q(d0.a,d0.b,1.2),B.h9h,D.be)}}else{c8=n.a
if(m.aj(0,c8)&&v.t(0,c8)&&!l.aj(0,c8)){d0=n.c
s=n.d
o=s.a
g=s.b
s=d0?new A.q(o,g-1,s.c):new A.q(o,g,1.2)
o=d0?B.aXw:B.hd0
c0.$4$round(2000+c8,s,o,d0)}}}c6.r=!0
for(c4=d3.CW,c8=new C.cD(c4,C.a7(c4).k("cD<1,2>")).gaf(0);c8.C();){j=c8.d
d0=j.a
n=A.j4(d0)
v=n.d
d=v.a
c6.b=8200+d0
v=v.b
c6.j9(A.Dl(C.a([new A.q(d,v,2.5),new A.q(d,-46,3.5),new A.q(d,-46,22)],t),4,6),0.55,B.YD,!1,0.2,6)
c6.aQ(new A.q(d,v,1.8),B.hbc,B.bgZ,0.3)
v=c6.b=8100+d0
u=j.b
switch(u){case"tv":c6.aQ(new A.q(d,-45,24),B.h59,B.ahi,0.2)
c6.aQ(new A.q(d,-19,24),B.h6F,E.FC,0.4)
if(c4.aj(0,d0))d0=d3.ax&&!d3.ay&&d3.a4N(d0)
else d0=!1
if(d0){d0=d-38.5
s=d+38.5
c7.push(new A.fq(C.a([new A.q(d0,1.5,25.7),new A.q(s,1.5,25.7),new A.q(s,-39.5,25.7),new A.q(d0,-39.5,25.7)],t),v,new A.fBj(j),320,180,9,2,0,!1))}break
case"lamp":c6.dm(new A.q(d,-47.5,24),new A.q(d,-46.5,24),6,B.XD,0.4,14)
c6.dm(new A.q(d,-46.5,24),new A.q(d,-22,24),1,B.BC,0.5,8)
c6.yV(new A.q(d,-26,24),new A.q(d,-12,24),9,L.YK,!1,!0,5.5,0.2,16)
break
case"toaster":c6.aQ(new A.q(d,-42.5,24),B.h2B,B.jb,0.8)
c6.aG(new A.q(d,-38,24),B.hec,B.aiE)
break
case"washerM":case"dryerM":c1=u==="washerM"
d0=c1?B.ahX:B.aiU
c6.aQ(new A.q(d,-30,22),B.aXb,d0,0.4)
c6.aQ(new A.q(d,-15.5,35.2),B.h8F,B.aeY,0.3)
c6.dm(new A.q(d,-29,35),new A.q(d,-29,36.2),10.5,B.aez,0.8,20)
d0=c1?B.afa:B.aiF
c6.dm(new A.q(d,-29,36.1),new A.q(d,-29,36.6),8.2,d0,0.9,20)
break
case"rangeM":c6.aQ(new A.q(d,-30,22),B.aXb,B.Bv,0.7)
c6.aQ(new A.q(d,-28,35.3),B.hcq,D.xQ,0.9)
c6.aQ(new A.q(d,-19.5,36.4),B.hga,B.agt,0.9)
c6.aQ(new A.q(d,-12.2,22),B.h9b,B.afT,0.5)
for(a5=0;a5<2;++a5)for(d0=d+B.aBg[a5],b3=0;b3<2;++b3){c2=B.avI[b3]
c6.dm(new A.q(d0,-11.6,c2),new A.q(d0,-11.2,c2),4.2,B.ahm,0.3,14)}break
default:c6.aQ(new A.q(d,-43.5,24),B.h3g,B.ahi,0.2)
c6.yU(new A.q(d-6,-38,24),new A.q(d+8,-38,24),3.4,B.FR,3,0.6,12)
c6.wu(new A.q(d-8,-43,24),B.h2L,B.FR,0.6,0)}d0=A.hZV(u)
s="Plugged into "+n.b
u=u==="tv"?s+". To unplug it, go behind it (the Behind the TV button) and tap the plug on the wall.":s+". Tap it to unplug."
d1.n(0,v,new A.cV(d0,u,new A.q(d,-35,20),60))}c6.r=!1
for(a5=0;a5<7;++a5){n=B.uM[a5]
d1.c3(0,2000+n.a,new A.fBk(n))}return new A.tU(c5,d1,c9,c7,c3,0)},
i0M(d){var w
A:{if("gfci"===d){w="GFCI outlet"
break A}if("switch"===d){w="Light switch"
break A}if("light"===d){w="Ceiling light"
break A}if("fan"===d){w="Ceiling fan"
break A}if("outlet"===d){w="Outlet"
break A}w=A.a2l(d)
break A}return w},
hZV(d){var w
A:{if("tv"===d){w="TV"
break A}if("lamp"===d){w="Lamp"
break A}if("toaster"===d){w="Toaster"
break A}if("washerM"===d){w="Washing machine"
break A}if("dryerM"===d){w="Dryer"
break A}if("rangeM"===d){w="Kitchen range"
break A}w="Hair dryer"
break A}return w},
i0L(d,e){var w,v=d.at.h(0,e)
if(v==null)return""
if(v.b.x)return"BURNT. It was wired wrong and it burnt out. Pull it out and put in a new one."
w=v.a
if(D.d.t(B.jG,w))return d.ch.t(0,e)?"The switch is ON. Tap to turn it off.":"The switch is OFF. Tap to flip it on."
if(w==="light"||w==="fan")return d.anx(e)?"It is running.":"It is off. Flip its switch (breaker on)."
w=d.CW.h(0,e)
return"Tap with a TV, lamp, toaster, hair dryer, washing machine, dryer or range in your hand to plug it in. Plugged: "+(w==null?"nothing":w)+"."},
ikS(b3,b4,b5,b6,b7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=C.a([],x.z),b2=new A.fg(b1)
for(w=D.d.gaf(B.uM),v=new C.f2(w,new A.fSe()),u=b3.at,t=b4*7;v.C();){s=w.gS(0)
r=s.a
q=u.h(0,r)
if(q==null||q.b.c<1)continue
p=b3.anx(r)?t:0.4
b2.b=3000+r
s=s.d
r=s.a
o=s.b-6.6
s=s.c
for(n=0;n<4;++n){m=p+n*3.141592653589793/2
l=A.vG(B.h1Z,m)
b2.wu(new A.q(r+l.a,o+l.b,s+l.c),B.hh9,B.bfC,0.3,m)}}w=b3.d
w===$&&C.c()
v=D.d.gaf(w)
s=new C.f2(v,new A.fSf())
r=b4*5
while(s.C()){o=v.gS(0).a
if(b3.anx(o)){k=A.j4(o)
b2.b=0
b2.d=0.25+0.05*Math.sin(r)
o=k.d
b2.fQ(new A.q(o.a,o.b-5,o.c),11,B.Y1,4,10,0)
b2.d=1}}for(v=b3.CW,s=new C.cD(v,C.a7(v).k("cD<1,2>")).gaf(0),o=b4*1.6,l=b4*6;s.C();){j=s.d
i=j.a
if(v.aj(0,i))h=b3.ax&&!b3.ay&&b3.a4N(i)
else h=!1
if(!h)continue
g=A.j4(i).d.a
b2.b=8100+i
i=j.b
switch(i){case"tv":break
case"lamp":b2.b=0
b2.d=0.3+0.05*Math.sin(l)
b2.fQ(new A.q(g,-19,24),11,I.xN,4,10,0)
b2.d=1
break
case"toaster":b2.e=0.8
i=C.ar(B.agN,A2.FV,(Math.sin(l)+1)/2)
i.toString
b2.aG(new A.q(g,-38.2,24),new A.q(13,0.3,6),i)
b2.e=0
break
case"washerM":case"dryerM":f=i==="washerM"
b2.e=0.8
for(e=0;e<3;++e){m=b4*(f?5:7)+e*2.1
i=Math.cos(m)
h=Math.sin(m)
if(f)d=(e&1)===0?B.bem:B.FR
else d=(e&1)===0?A2.FV:D.aA
b2.fQ(new A.q(g+i*4.5,-29+h*4.5,36.8),1.9,d,3,6,0.2)}b2.e=0
break
case"rangeM":b2.e=0.8
for(a0=0;a0<2;++a0){a1=B.aBg[a0]
for(i=g+a1,h=r+a1,a2=0;a2<2;++a2){a3=B.avI[a2]
d=C.ar(E.Y3,B.bk7,(Math.sin(h)+1)/2)
d.toString
b2.r6(new A.q(i,-11.1,a3),new A.q(i,-10.9,a3),3.8,1.8,d,0,12)}}b2.e=0
break
default:for(i=g+9,e=0;e<6;++e)b2.fQ(new A.q(i+D.k.F(o+e/6,1)*22,-38+Math.sin(e*2)*2,24),0.6,B.bnf,3,5,0.2)}}for(v=b3.db,v=new C.cD(v,C.a7(v).k("cD<1,2>")).gaf(0),s=b3.cx;v.C();){j=v.d
r=j.a
k=A.j4(r)
a4=b5.h(0,r)
a5=b4<=(a4==null?0:a4)
a6=s.t(0,r)
if(!a5&&!a6)continue
r=a5?j.b:"smolder"
A.hvL(b2,r,new A.fSg(k),1,b4)}if(b6){a7=(D.k.bf(b4*2.4)&1)===0
for(e=0;e<w.length;++e){k=A.j4(w[e].a)
a8=b3.r2(e)
v=k.a
b2.b=2000+v
b2.f=3
b2.e=0.9
b2.d=0.02
if(!u.aj(0,v)){s=k.d
r=s.a
o=s.b
if(k.c)b2.aG(new A.q(r,o-1.5,s.c),B.hfH,D.c)
else b2.aG(new A.q(r,o,2.2),B.hhX,D.c)}b2.d=1
if(a7){a9=a8?D.bf:D.ax
s=k.d
r=s.a
o=s.b
b0=k.c?new A.q(r,o-3.5,s.c):new A.q(r,o+7.4,2)
b2.fQ(b0,v===b7?1.15:0.8,a9,4,8,0.2)}b2.e=0
b2.f=2}}return b1},
rP:function rP(d,e,f){this.a=d
this.b=e
this.c=f},
ftx:function ftx(d){this.a=d},
fty:function fty(d){this.a=d},
fBg:function fBg(d){this.a=d},
fBh:function fBh(d){this.a=d},
fBi:function fBi(d){this.a=d},
fBl:function fBl(d){this.a=d},
fBj:function fBj(d){this.a=d},
fBk:function fBk(d){this.a=d},
fSe:function fSe(){},
fSf:function fSf(){},
fSg:function fSg(d){this.a=d},
hnt(d,e){var w=new A.cwn(e,d,A.hgQ())
w.bAv(4,d,e)
return w},
rn:function rn(d,e){this.a=d
this.b=e},
uF:function uF(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
Mw:function Mw(d,e){this.a=d
this.b=e
this.c=!1},
cwn:function cwn(d,e,f){var _=this
_.a=d
_.b=e
_.c=$
_.d=f
_.e=3
_.r=_.f=0
_.w=!1},
cws:function cws(d){this.a=d},
cwo:function cwo(){},
cwq:function cwq(){},
cwr:function cwr(){},
cwp:function cwp(d){this.a=d},
as3:function as3(d,e){this.d=d
this.a=e},
aFr:function aFr(d,e){var _=this
_.e=_.d=$
_.f=d
_.r=$
_.w=e
_.x="inspect"
_.y=0
_.z=null
_.at=_.as=_.Q=!1
_.c=_.a=_.ax=null},
ey8:function ey8(d,e,f){this.a=d
this.b=e
this.c=f},
ey9:function ey9(d){this.a=d},
ey7:function ey7(d){this.a=d},
exY:function exY(d){this.a=d},
ey2:function ey2(d){this.a=d},
ey3:function ey3(d){this.a=d},
ey1:function ey1(d){this.a=d},
ey4:function ey4(d,e){this.a=d
this.b=e},
ey5:function ey5(d){this.a=d},
ey6:function ey6(d){this.a=d},
ey0:function ey0(d){this.a=d},
ey_:function ey_(d,e){this.a=d
this.b=e},
exX:function exX(d,e){this.a=d
this.b=e},
exV:function exV(d){this.a=d},
exW:function exW(d,e){this.a=d
this.b=e},
exZ:function exZ(d){this.a=d},
eyl:function eyl(d,e){this.a=d
this.b=e},
eyh:function eyh(){},
eyg:function eyg(d){this.a=d},
eyi:function eyi(){},
eyj:function eyj(){},
eyk:function eyk(d,e){this.a=d
this.b=e},
eyf:function eyf(d,e){this.a=d
this.b=e},
eye:function eye(d){this.a=d},
eyd:function eyd(d){this.a=d},
eyb:function eyb(d,e){this.a=d
this.b=e},
eya:function eya(){},
eyc:function eyc(d,e){this.a=d
this.b=e},
atV(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){return new A.y6(p,s,u,t,r,h,o,n,m,i,q,d,j,g,k,e,f,l)},
ikj(d){var w,v,u,t,s,r,q,p,o,n,m=d.geb(0),l=C.a([],x.T)
for(w=d.x,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u){t=w[u]
s=t.b
if(s==="rug")continue
s=B.hE.h(0,s)
s.toString
r=(t.e&1)===1
q=r?s.d:s.c
p=r?s.c:s.d
s=t.c
r=q/2
o=t.d
n=p/2
l.push(new A.ia(s-r,s+r,o-n,o+n))}switch(d.c){case"kitchen":w=-m/2
l.push(new A.ia(w,w+28,0,28))
l.push(new A.ia(10,m/2,0,28))
break
case"bathroom":l.push(B.dC3)
l.push(B.dBK)
w=-m/2
l.push(new A.ia(w,w+33,0,75))
break}return l},
bst(d,e,f,g,h,i,j,k,l,m,n,o){var w=new A.bss(d,i,m,o,n,l,g,f,k,j,e,h,C.a([],x.n))
w.bAL(d,e,f,g,h,i,j,k,l,m,n,o)
return w},
hru(d,e){var w,v,u,t=d.w,s=D.d.bh(t,new A.fmb(e))
if(s<0)s=0
w=t[s]
v=d.geb(0)
u=d.gh0(0)
t=w.c
switch(w.b){case"left":return new C.b7(new C.z(-v/2+18,D.k.E(t+u/2-40,10,u-10)),1.5707963267948966,s)
case"right":return new C.b7(new C.z(v/2-18,D.k.E(t+u/2-40,10,u-10)),-1.5707963267948966,s)
default:return new C.b7(new C.z(D.o.E(t,-v/2+12,v/2-12),18),0,s)}},
y6:function y6(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){var _=this
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
tO:function tO(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
aa3:function aa3(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
ia:function ia(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
csX:function csX(d,e){var _=this
_.a=d
_.b=e
_.d=_.c=$},
AA:function AA(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
bss:function bss(d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
fmb:function fmb(d){this.a=d},
aWD:function aWD(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=$},
bVt:function bVt(d,e){this.a=d
this.b=e},
bVu:function bVu(d){this.a=d},
hze(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=C.a([B.dBX],x.T)
for(w=d.x,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u){t=w[u]
if(t.a===e)continue
s=t.b
if(D.d.t(B.a5n,s)||D.d.t(B.I9,s)||s==="bush")continue
r=s==="townsign"
if(r||s==="adboard"){q=r?178:150
for(s=[-q,q],p=0;p<2;++p){o=s[p]
n=t.e*3.141592653589793/2
r=Math.cos(n)
m=Math.sin(n)
r=t.c+o*r
m=t.d+-o*m
i.push(new A.ia(r-8,r+8,m-8,m+8))}continue}r=B.hE.h(0,s)
r.toString
m=(t.e&1)===1
l=m?r.d:r.c
k=m?r.c:r.d
if(s==="tree"||s==="pine"){l=10
k=10}s=t.c
r=l/2
m=t.d
j=k/2
i.push(new A.ia(s-r,s+r,m-j,m+j))}return i},
b9Y:function b9Y(d,e,f,g,h,i,j,k,l){var _=this
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
hsH(d){var w=d.toLowerCase()
if(D.a.t(w,"blue"))return B.nd
if(D.a.t(w,"ground")||D.a.t(w,"green"))return B.af7
if(D.a.t(w,"neutral")||D.a.t(w,"white"))return B.mx
if(D.a.t(w,"traveler a"))return B.rm
if(D.a.t(w,"traveler b"))return D.aA
if(D.a.t(w,"load"))return B.aiY
if(D.a.t(w,"support"))return D.dn
return B.bor},
i55(d){var w=d.toLowerCase()
if(D.a.t(w,"ground"))return B.af7
if(D.a.t(w,"common"))return D.M3
if(D.a.t(w,"traveler"))return B.vM
if(D.a.t(w,"neutral"))return B.Bs
if(D.a.t(w,"support"))return D.dn
return D.aA},
i3f(d){var w=d.toLowerCase()
if(D.a.t(w,"ground"))return G.a2l
if(D.a.t(w,"neutral"))return D.wu
if(D.a.t(w,"support"))return Am.a1w
if(D.a.t(w,"light")||D.a.t(w,"load"))return D.qx
if(D.a.t(w,"motor"))return O.Cg
if(D.a.t(w,"traveler"))return D.jF
return D.hm},
akv:function akv(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
aq9:function aq9(d){this.a=d},
bex:function bex(d,e,f){var _=this
_.d=0
_.e=!1
_.f=d
_.y=_.x=_.w=_.r=null
_.z=!0
_.Q=$
_.bw$=e
_.a8$=f
_.c=_.a=null},
d7J:function d7J(d,e){this.a=d
this.b=e},
d7K:function d7K(d,e){this.a=d
this.b=e},
d7L:function d7L(d){this.a=d},
d7M:function d7M(d,e,f){this.a=d
this.b=e
this.c=f},
d7F:function d7F(d,e){this.a=d
this.b=e},
d7I:function d7I(d,e){this.a=d
this.b=e},
d7H:function d7H(d,e){this.a=d
this.b=e},
d7G:function d7G(d,e){this.a=d
this.b=e},
d7R:function d7R(d){this.a=d},
d7S:function d7S(d,e){this.a=d
this.b=e},
d7T:function d7T(d){this.a=d},
d7Q:function d7Q(d){this.a=d},
d7U:function d7U(d){this.a=d},
d7P:function d7P(d){this.a=d},
d7V:function d7V(d,e){this.a=d
this.b=e},
d7O:function d7O(d,e){this.a=d
this.b=e},
d7W:function d7W(d){this.a=d},
d7N:function d7N(d){this.a=d},
bxi:function bxi(d,e,f,g,h,i,j){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.a=j},
fhR:function fhR(){},
aLr:function aLr(){},
hvL(d,e,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
if(e==="none"||e.length===0)return
d.b=0
w=new A.fCX(a2,d,a0,a1)
v=new A.fCW(d,a2,a0,a1)
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
d.j9(m,t,o,!1,0,4)}d.d=0.16+0.1*Math.sin(a2*31)
d.fQ(a0.$1(B.hcZ),3.2*a1,D.du,4,8,0)
d.d=1
break
case"spark":w.$2(22,7)
d.d=0.2+0.1*Math.sin(a2*26)
d.fQ(a0.$1(B.aXC),2.4*a1,I.xN,4,8,0)
d.d=1
break
case"smoke":d.d=0.3+0.08*Math.sin(a2*7)
d.fQ(a0.$1(B.h5D),2.6*a1,D.ax,4,8,0)
d.d=1
v.$3(9,0.8,11)
w.$2(5,3)
break
case"fire":d.d=0.3+0.12*Math.sin(a2*20)
d.fQ(a0.$1(B.aXC),4.4*a1,D.cL,4,8,0)
d.d=1
h=D.k.bf(a2*11)
for(t=0.85*a1,s=0.05*a1,r=0.5*a1,o=0.04*a1,k=0;k<6;++k){p=-2.2+k*0.88
g=Math.sin((h+k*5)*12.9898)*43758.5453
f=2.4+(g-Math.floor(g))*3.6
l=a0.$1(new A.q(p,-2.2,3))
g=Math.sin((h+k)*12.9898)*43758.5453
d.yU(l,a0.$1(new A.q(p+(g-Math.floor(g)-0.5)*1.2,-2.2+f,3.4)),t,D.fs,s,0,6)
d.yU(a0.$1(new A.q(p,-2.2,3.1)),a0.$1(new A.q(p,-2.2+f*0.62,3.5)),r,D.bt,o,0,6)}w.$2(16,6)
v.$3(10,1,13)
break
case"smolder":v.$3(4,0.9,9)
break}},
fCX:function fCX(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fCW:function fCW(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
h5E(d){var w
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
avy(d){var w
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
hvH(d,e,a0){var w,v,u,t,s=C.a([],x.fB),r=new A.fCs(s),q=new A.fCx(e),p=q.$2(B.VN,B.K3),o=q.$2(B.VN,B.K4),n=q.$2(B.VN,B.K5),m=q.$2(B.VO,B.K4),l=q.$2(B.VO,B.K3),k=q.$2(B.VO,B.K5),j=q.$2(B.VP,B.K5),i=q.$2(B.VP,B.K3),h=q.$2(B.VP,B.K4),g=new C.Z(e,new A.fCt(),C.T(e).k("Z<1>")).gL(0),f=D.d.b3(e,new A.fCu())
if(f)r.$5("UNVERIFIED",B.f4q,"A conductor is in use whose function was never verified. A wire color alone does not prove what a wire does.","Verify every conductor with a tester before you connect it.","Identify each wire with a tester and the device diagram, then connect it.")
if(D.d.b3(e,new A.fCv()))r.$5("LOOSE",B.t9,"A connection is loose. A loose connection heats up and can arc.","Every conductor must be fastened tightly under its screw or connector.","Tighten the connection.")
if(D.d.b3(e,new A.fCw()))r.$5("EXPOSED",B.t9,"Bare copper is showing outside the terminal. An exposed energized conductor can shock or short.","No conductor may be left exposed.","Trim the wire so only the part under the screw is bare.")
if(!a0)r.$5("SUPPORT",B.t9,"The box or support is not rated for this device. It can fall.","A fixture or fan must hang from a box or bracket rated for its weight.","Use a box rated for this fixture (a fan-rated box for a fan).")
if(n>0||i>0)r.$5("HOT_TO_GROUND",B.t9,"The hot wire is connected to the ground. That is a short circuit to ground: a very large current.","The equipment ground never carries current in normal use, and the hot wire never touches it.","Hot goes on the hot terminal (brass). Ground goes only on the green screw.")
f=o>0
if(!(f&&m>0))w=l>0&&p>0
else w=!0
if(w)r.$5("SHORT",B.t9,"The hot and the neutral are connected together. That is a short circuit.","Hot and neutral must never touch each other.","Put each wire on its own terminal.")
else if(f||l>0)r.$5("REVERSED",B.t9,"Hot and neutral are reversed (reversed polarity). The device may still seem to work, but the parts that should be dead are live. This is a shock hazard.","Hot goes to the brass (hot) terminal and neutral to the silver (neutral) terminal.","Swap them: black (hot) to brass, white (neutral) to silver.")
if(k>0||h>0)r.$5("NEUTRAL_GROUND",B.t9,"The neutral and the equipment ground are joined at the device. Current can flow on the ground path and trip protective devices.","The neutral is never used as the equipment ground, and the two are not joined at the device.","Neutral to the silver terminal only. Ground to the green screw only.")
if(!(i>0&&n===0))f=h>0&&k===0
else f=!0
if(f)r.$5("GROUND_AS_CURRENT",B.t9,"The equipment ground was fastened to a terminal that carries current. The ground must never be used as a normal conductor.","The equipment ground goes only to the ground terminal.","Move the bare copper (ground) wire to the green screw.")
if(g>0&&p<d.b)r.$5("LOAD_SIDE",B.aQH,"The wires are on the LOAD screws. Power must come in on LINE; on LOAD the device would not protect or feed anything.","Supply (line) conductors go to the LINE terminals.","Move the wires to the LINE screws.")
f=d.b
if(p<f&&g===0&&o===0&&l===0&&n===0)r.$5("MISSING_HOT",B.JH,"The hot wire is not on the hot terminal, so the device gets no power.","The device needs its hot connection.","Connect the black (hot) wire to the brass terminal.")
if(p>=f){f=d.c
f=m<f&&f>0&&l===0&&k===0}else f=!1
if(f)r.$5("OPEN_NEUTRAL",B.t9,"The neutral is not connected, but the hot wire is. The device will not run, and parts of it can still be live. There may be nothing to see.","The neutral return conductor must be connected.","Connect the white (neutral) wire to the silver terminal.")
if(d.d&&j===0)r.$5("MISSING_GROUND",B.t9,"There is no equipment ground. It may seem to work, but nothing protects you if a fault happens.","A required equipment ground must be connected to the ground terminal.","Connect the bare copper (ground) wire to the green screw.")
for(f=s.length,v=B.qR,u=0;u<f;++u){t=s[u].b
if(A.avy(t)>A.avy(v))v=t}return new A.b6y(v,s,A.i0i(s,e))},
i0i(d,e){var w=new A.flJ(d)
if(w.$1("SHORT")||w.$1("HOT_TO_GROUND"))return B.buN
if(w.$1("LOOSE"))return B.buF
if(w.$1("EXPOSED"))return B.buL
if(w.$1("GROUND_AS_CURRENT"))return B.buP
if(w.$1("REVERSED"))return B.buO
if(w.$1("NEUTRAL_GROUND"))return B.buQ
if(w.$1("SUPPORT"))return B.buM
if(w.$1("OPEN_NEUTRAL"))return B.buK
if(w.$1("LOAD_SIDE")||w.$1("MISSING_HOT"))return B.buD
if(w.$1("UNVERIFIED"))return B.buE
if(w.$1("MISSING_GROUND"))return B.buH
return B.buJ},
hVh(d){var w
switch(d.a.c.a){case 0:w=d.b.c===B.K3
break
case 1:w=d.b.c===B.K4
break
case 2:w=d.b.c===B.K5
break
case 3:w=!1
break
default:w=null}return w},
hvI(d,e,f){var w,v,u,t,s=C.a([],x.fB)
e.bQ(0,new A.fCz(f,s))
for(w=s.length,v=B.qR,u=0;u<w;++u){t=s[u].b
if(A.avy(t)>A.avy(v))v=t}return new A.b6y(v,s,v===B.qR?B.buI:B.buG)},
JH:function JH(d,e){this.a=d
this.b=e},
FN:function FN(d,e){this.a=d
this.b=e},
FU:function FU(d,e){this.a=d
this.b=e},
czn:function czn(d){this.c=d},
cCY:function cCY(d,e){this.a=d
this.c=e},
a4l:function a4l(d,e){this.a=d
this.b=e},
bMN:function bMN(d,e,f){this.b=d
this.c=e
this.d=f},
ws:function ws(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
tn:function tn(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h},
b6y:function b6y(d,e,f){this.a=d
this.b=e
this.c=f},
fCs:function fCs(d){this.a=d},
fCx:function fCx(d){this.a=d},
fCy:function fCy(d,e){this.a=d
this.b=e},
fCt:function fCt(){},
fCu:function fCu(){},
fCv:function fCv(){},
fCw:function fCw(){},
flJ:function flJ(d){this.a=d},
flK:function flK(d){this.a=d},
abb:function abb(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
abc:function abc(d,e,f){this.a=d
this.b=e
this.c=f},
vi:function vi(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
b5g:function b5g(d,e){this.a=d
this.b=e},
b8s:function b8s(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
czp:function czp(d,e,f){this.a=d
this.b=e
this.c=f},
czq:function czq(){},
czr:function czr(){},
czs:function czs(){},
PM:function PM(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fCz:function fCz(d,e){this.a=d
this.b=e},
h9j(d){var w
switch(d.a){case 0:w=D.be
break
case 1:w=D.cL
break
case 2:w=D.c0
break
case 3:w=D.bt
break
case 4:w=D.bq
break
default:w=null}return w},
hct(d){return C.bV(E.mC,null,new A.h_e(),d,!0,!0,!0,D.k5,!1,!1,x.H)},
hA8(d,e,f,g){var w=x.S
return C.bV(E.mC,null,new A.h_c(new A.czp(e,f,C.U(w,w)),g),d,!0,!0,!0,D.k5,!1,!1,x.dZ)},
h_e:function h_e(){},
h_c:function h_c(d,e){this.a=d
this.b=e},
a1h:function a1h(d,e,f){this.c=d
this.d=e
this.a=f},
bvb:function bvb(d){var _=this
_.d=d
_.c=_.a=_.e=null},
fbt:function fbt(d,e){this.a=d
this.b=e},
fbs:function fbs(d,e,f){this.a=d
this.b=e
this.c=f},
fbu:function fbu(d){this.a=d},
fbr:function fbr(d,e){this.a=d
this.b=e},
fbv:function fbv(){},
fbw:function fbw(d){this.a=d},
a5i:function a5i(d,e){var _=this
_.a=d
_.b=e
_.c=!1
_.d=null},
bT_:function bT_(d){this.a=d},
bSZ:function bSZ(d){this.a=d}},B,K,E,Ao,F,P,L,Ap,W,O,Aq
J=c[1]
C=c[0]
D=c[2]
A1=c[107]
A9=c[118]
Aa=c[88]
Ab=c[133]
H=c[96]
Q=c[122]
I=c[106]
A2=c[135]
Ac=c[117]
Ad=c[132]
A3=c[83]
Ae=c[115]
R=c[119]
Af=c[124]
M=c[92]
A4=c[85]
S=c[127]
Ag=c[113]
X=c[131]
Ah=c[130]
Y=c[125]
A5=c[129]
Ai=c[123]
Z=c[98]
A_=c[114]
Aj=c[104]
Ak=c[38]
G=c[108]
Al=c[134]
T=c[102]
U=c[121]
A0=c[120]
Am=c[136]
A6=c[116]
A7=c[101]
V=c[109]
A8=c[126]
An=c[128]
N=c[100]
A=a.updateHolder(c[26],A)
B=c[95]
K=c[28]
E=c[99]
Ao=c[69]
F=c[97]
P=c[33]
L=c[105]
Ap=c[110]
W=c[112]
O=c[103]
Aq=c[111]
A.f_M.prototype={
a6(){return"_RadioType."+this.b}}
A.a9P.prototype={
R(){return new A.aej(null,this.$ti.k("aej<1>"))}}
A.aej.prototype={
gcoO(){var w=this.e
return w===$?this.e=new A.bpF(this):w},
game(){var w=this.Gd$
w=w==null?null:w.gaq7()
return w==null?this.a.d:w},
gazS(){this.a.toString
return!0},
bWQ(){var w=this,v=w.a.c,u=w.game()
if(v===u)return
w.a5o(v===w.game()?null:v)},
a5o(d){var w=this.Gd$
if(w!=null)w.glH().$1(d)
this.a.e.$1(d)},
d4(){var w,v=this
v.eH()
w=v.c
w.toString
v.sa6S(P.h5s(w,v.$ti.c))},
q(){this.sa6S(null)
var w=this.d
if(w!=null)w.q()
this.a1()},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.a
m.toString
switch(0){case 0:w=o.gcoO()
v=w.a.game()
o.a.toString
u=new C.HR(!0,P.hTs(n,!1,n,o.gazS(),n,w,v,n,n,D.kr,n,n,n,n,n,!1,m.c,o.$ti.c),n)
break}C.an6(d)
o.a.toString
A:{m=new C.z(u,n)
break A}t=C.Q(d)
s=P.h5t(d)
o.a.toString
w=s.b
w=w==null?n:w.aU(C.aX(x.c1))
r=w
if(r==null)r=t.ax.y
w=o.a.at
v=o.gazS()
q=o.gazS()?o.gbWP():n
p=o.d
if(p==null){p=C.k4(!0,n,!0,!0,n,n,!1)
o.d=p}return new C.zx(C.dG(!1,n,!0,n,v,p,n,n,!1,n,n,m.a,n,n,n,n,q,!1,r,n,n,n,n,n,n,w,n,m.b,n),n)}}
A.bpF.prototype={
gaq7(){return this.a.game()},
glH(){return this.a.gLQ()},
bjt(d){},
bkz(d){},
gda(d){return this.a}}
A.aNW.prototype={}
A.q.prototype={
a7(d,e){return new A.q(this.a+e.a,this.b+e.b,this.c+e.c)},
aE(d,e){return new A.q(this.a-e.a,this.b-e.b,this.c-e.c)},
aK(d,e){return new A.q(this.a*e,this.b*e,this.c*e)},
FY(d){var w=this.b,v=d.c,u=this.c,t=d.b,s=d.a,r=this.a
return new A.q(w*v-u*t,u*s-r*v,r*t-w*s)},
guZ(){var w=this.a,v=this.b,u=this.c
return Math.sqrt(w*w+v*v+u*u)},
gmV(d){var w=this,v=w.guZ()
return v<1e-9?w:new A.q(w.a/v,w.b/v,w.c/v)}}
A.kq.prototype={}
A.cV.prototype={}
A.hh.prototype={}
A.tU.prototype={}
A.fq.prototype={}
A.fg.prototype={
WJ(){var w=this.x
if(!(w!==0))if(this.r){w=$.dM+1
$.dM=w}else w=0
this.w=w},
aJ0(d,e,f,g,h,i,j,k){var w=this,v=i.gmV(0)
w.a.push(new A.kq(C.a([d,e,f,g],x.o),v,h,w.b,j,w.d,k,w.c,w.e,w.f,w.w))},
bji(d,e,f,g,h,i,j){return this.aJ0(d,e,f,g,h,i,0,j)},
Cn(d,e,f,g,h,i){return this.aJ0(d,e,f,g,h,i,0,!1)},
cXw(d,e,f,g,h,i,j){return this.aJ0(d,e,f,g,h,i,j,!1)},
a7f(d,e,f,g,h,i){var w=this,v=(h==null?e.aE(0,d).FY(f.aE(0,d)):h).gmV(0)
w.a.push(new A.kq(C.a([d,e,f],x.o),v,g,w.b,0,w.d,i,w.c,w.e,w.f,w.w))},
bkr(d,e,f,g){return this.a7f(d,e,f,g,null,!0)},
Bu(d,e,f,g,h,i,j,k){var w,v,u,t,s,r
this.WJ()
w=e.a/2
v=e.b/2
u=e.c/2
t=new A.c0f(this,j,new A.c0g(k,d),new A.c0h(k),f,h)
if((i&1)===0)t.$4(new A.q(0,0,1),new A.q(-w,-v,u),new A.q(2*w,0,0),new A.q(0,2*v,0))
if((i&2)===0)t.$4(new A.q(0,0,-1),new A.q(w,-v,-u),new A.q(-2*w,0,0),new A.q(0,2*v,0))
if((i&4)===0)t.$4(new A.q(1,0,0),new A.q(w,-v,u),new A.q(0,0,-2*u),new A.q(0,2*v,0))
if((i&8)===0)t.$4(new A.q(-1,0,0),new A.q(-w,-v,-u),new A.q(0,0,2*u),new A.q(0,2*v,0))
if(g){s=-w
r=2*w
t.$4(new A.q(0,1,0),new A.q(s,v,u),new A.q(r,0,0),new A.q(0,0,-2*u))
t.$4(new A.q(0,-1,0),new A.q(s,-v,-u),new A.q(r,0,0),new A.q(0,0,2*u))}},
hj(d,e,f,g){return this.Bu(d,e,f,!0,0,0,g,0)},
aE6(d,e,f,g,h){return this.Bu(d,e,f,g,h,0,1,0)},
lU(d,e,f,g,h){return this.Bu(d,e,f,!0,g,0,h,0)},
aQ(d,e,f,g){return this.Bu(d,e,f,!0,g,0,1,0)},
aG(d,e,f){return this.Bu(d,e,f,!0,0,0,1,0)},
al5(d,e,f,g,h,i){return this.Bu(d,e,f,!0,g,h,i,0)},
wu(d,e,f,g,h){return this.Bu(d,e,f,!0,g,0,1,h)},
cIZ(d,e,f,g,h,i){return this.Bu(d,e,f,g,h,0,i,0)},
aE5(d,e,f,g){return this.Bu(d,e,f,!0,0,0,1,g)},
yV(b3,b4,b5,b6,b7,b8,b9,c0,c1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this
b2.WJ()
w=b4.aE(0,b3).gmV(0)
v=w.b
u=w.FY(Math.abs(v)<0.9?B.e8:B.hu).gmV(0)
t=w.FY(u).gmV(0)
s=b9<0?b5:b9
r=new A.c0i(u,c1,t)
for(q=b2.a,p=b3.a,o=b3.b,n=b3.c,m=b4.a,l=b4.b,k=b4.c,j=x.o,i=w.a*-1,v*=-1,h=w.c*-1,g=0;g<c1;){f=r.$1(g);++g
e=r.$1(g)
d=f.a
a0=e.a
a1=f.b
a2=e.b
a3=f.c
a4=e.c
a5=new A.q(d+a0,a1+a2,a3+a4).gmV(0)
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
q.push(new A.kq(C.a([new A.q(a6,a7,a8),new A.q(a9,b0,b1),new A.q(a0,a2,a4),new A.q(d,a1,a3)],j),a5,b6,b2.b,c0,b2.d,b8,b2.c,b2.e,b2.f,b2.w))
if(b7){q.push(new A.kq(C.a([b3,new A.q(a9,b0,b1),new A.q(a6,a7,a8)],j),new A.q(i,v,h),b6,b2.b,c0,b2.d,!1,b2.c,b2.e,b2.f,b2.w))
q.push(new A.kq(C.a([b4,new A.q(d,a1,a3),new A.q(a0,a2,a4)],j),w,b6,b2.b,c0,b2.d,!1,b2.c,b2.e,b2.f,b2.w))}}},
dm(d,e,f,g,h,i){return this.yV(d,e,f,g,!0,!1,-1,h,i)},
yU(d,e,f,g,h,i,j){return this.yV(d,e,f,g,!0,!1,h,i,j)},
a4A(d,e,f,g,h,i,j,k){return this.yV(d,e,f,g,h,i,-1,j,k)},
dv(d,e,f,g,h){return this.yV(d,e,f,g,!0,!1,-1,0,h)},
cNw(d,e,f,g,h,i,j){return this.yV(d,e,f,g,h,!1,-1,i,j)},
La(d,e,f,g,h,i){return this.yV(d,e,f,g,h,!1,-1,0,i)},
Lb(d,e,f,g,h,i){return this.yV(d,e,f,g,!0,!1,h,0,i)},
Tm(d,e,f,g,h,i,j){return this.yV(d,e,f,g,h,!1,i,0,j)},
fQ(a7,a8,a9,b0,b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6=this
a6.WJ()
w=new A.c0e(b0,b1)
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
v.push(new A.kq(C.a([new A.q(u+i*a8,t+h*a8,s+g*a8),new A.q(u+f*a8,t+e*a8,s+d*a8),new A.q(u+a0*a8,t+a1*a8,s+a2*a8),new A.q(u+a3*a8,t+a4*a8,s+a5*a8)],r),new A.q(i+f+a0+a3,h+e+a1+a4,g+d+a2+a5).gmV(0),a9,a6.b,b2,a6.d,!1,a6.c,a6.e,a6.f,a6.w))}},
bcp(d,e,f,g){return this.fQ(d,e,f,6,10,g)},
ee(d,e,f,g,h){return this.fQ(d,e,f,g,h,0.4)},
apo(d,e,f,g,h,i,j,k){var w,v,u,t,s
this.WJ()
for(w=0;v=w+1,v<d.length;w=v){u=d[v]
t=d[w]
if(new A.q(u.a-t.a,u.b-t.b,u.c-t.c).guZ()<0.000001)continue
u=d[w]
t=d[v]
if(g)s=w===0||w===d.length-2
else s=!1
this.a4A(u,t,e,f,s,h,j,k)}if(i)for(u=e*0.98,w=1;v=w+1,v<d.length;w=v)this.fQ(d[w],u,f,4,k,j)},
j9(d,e,f,g,h,i){return this.apo(d,e,f,!0,!1,g,h,i)},
a7g(d,e,f,g,h,i,j){return this.apo(d,e,f,g,!1,h,i,j)},
r6(a4,a5,a6,a7,a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=this
a3.WJ()
a3.cNw(a4,a5,a6,a8,!1,a9,b0)
w=a5.aE(0,a4).gmV(0)
v=w.FY(Math.abs(w.b)<0.9?B.e8:B.hu).gmV(0)
u=new A.c0j(v,b0,w.FY(v).gmV(0))
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
s.push(new A.kq(C.a([new A.q(p+i*a7,m+h*a7,l+j*a7),new A.q(p+f*a6,m+e*a6,l+g*a6),new A.q(p+a0*a6,m+a1*a6,l+d*a6),new A.q(p+a2.a*a7,m+a2.b*a7,l+a2.c*a7)],r),n,a8,a3.b,a9,a3.d,!1,a3.c,a3.e,a3.f,a3.w))}}},
cZ0(d,e,f,g,h,i){return this.r6(d,e,f,g,h,i,16)}}
A.xj.prototype={
aZu(d){var w,v,u,t,s,r,q,p,o,n,m,l=this
if(d&&l.c!==l.x)l.w=l.c
w=D.k.E(l.w,l.e,l.f)
l.y=1
v=l.r
if(v!=null){u=Math.cos(l.b)
t=Math.sin(l.a)
s=Math.sin(l.b)
r=Math.cos(l.a)
q=new A.bJT()
p=l.d
o=v.a
p=q.$4(-u*t,p.a,o[0]+5,o[1]-5)
r=q.$4(u*r,l.d.c,o[2]+5,o[3]-5)
n=Math.min(Math.min(C.je(p),C.je(r)),C.je(q.$4(s,l.d.b,4,o[4]-5)))
m=Math.min(w,Math.max(l.e,n))
if(l.z&&w>m)l.y=D.k.E(Math.sqrt(m/w),0.5,1)}else m=w
l.x=l.c=m},
adW(){return this.aZu(!0)},
rb(d){var w,v,u,t=this
t.CW=d
if(!d){w=t.a
v=t.ay
u=t.ch
t.a=D.k.E(w,v-u,v+u)}t.aW()},
im(d,e,f,g){var w=this
w.cx=f
w.cy=d
w.db=g
w.dx=e
w.aW()},
zK(d,e){return this.im(d,null,e,null)},
Ni(d){return this.im(null,null,d,null)},
aLa(d,e,f){return this.im(d,e,f,null)},
Hn(d,e,f,g){var w=this
w.dx=w.db=w.cy=w.cx=null
w.d=f
w.c=d
w.a=g
w.b=e
w.adW()
w.aW()},
a73(d){var w,v,u,t=this
if(!(t.cx!=null||t.cy!=null||t.db!=null||t.dx!=null))return
w=1-Math.exp(-d*7)
if(t.cy!=null&&t.c!==t.x)t.w=t.c
v=t.cx
if(v!=null){u=A.pB(t.d,v,w)
t.d=u
if(u.aE(0,v).guZ()<0.02){v=t.cx
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
t.dx=null}}t.adW()
t.aW()},
d_h(d,e){var w,v,u,t,s=this,r=e.a,q=e.b,p=Math.min(r,q)*1.15*s.y,o=Math.cos(s.a),n=Math.sin(s.a)
q=new A.bK_(s,new A.bK0(Math.cos(s.b),Math.sin(s.b),o,n),(d.a-r/2)/p,-(d.b-q/2)/p)
w=q.$1(0)
r=q.$1(1).c
v=w.c
u=r-v
if(Math.abs(u)<1e-9)return null
t=(0-v)/u
if(t<=0)return null
return q.$1(t)},
bfC(d,e,f){var w,v,u,t,s=this,r=e.a,q=e.b,p=Math.min(r,q)*1.15*s.y,o=Math.cos(s.a),n=Math.sin(s.a)
q=new A.bJU(s,new A.bJV(Math.cos(s.b),Math.sin(s.b),o,n),(d.a-r/2)/p,-(d.b-q/2)/p)
w=q.$1(0)
r=q.$1(1).b
v=w.b
u=r-v
if(Math.abs(u)<1e-9)return null
t=(f-v)/u
if(t<=0)return null
return q.$1(t)},
cPN(d,e){return this.bfC(d,e,0)},
apH(d){var w,v=this
v.cy=null
w=v.c
if(w!==v.x)v.w=w
v.w=D.k.E(Math.max(v.w,w)*d,v.e,v.f)
v.aZu(!1)
v.aW()}}
A.bVe.prototype={
cWK(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this.a,f=g.length-1,e=a0.a,d=a0.b
for(;;){if(!(f>=0)){w=0
v=null
break}if(g[f].a.gbu().a.contains(e,d)){u=g[f]
w=u.b
u=u.a.gbu().a.getBounds()
v=new C.a3(u[0],u[1],u[2],u[3])
break}--f}if(w!==0&&v.gdE()<16)return w
for(u=g.length,t=0,s=1/0,r=0;r<g.length;g.length===u||(0,C.L)(g),++r){q=g[r]
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
A.b6B.prototype={
gGS(d){var w=this.r.a
return w==null?0:w},
ciO(b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=null,a8=b2.a,a9=b2.b,b0=new C.a3(0,0,0+a8,0+a9)
$.S()
w=C.I()
w.sam(B.c4Y.aA(0,b0))
b1.aP(b0,w)
v=this.c.a*90
w=b1.a
J.bl(w.save())
w.translate(a8*0.45-v,a9*0.3)
b1.il(0,-0.45)
for(u=x.O,t=0;t<3;++t){s=C.bK(D.I,a9*(0.2-t*0.05),a8*(1.9-t*0.4))
r=[B.bhg,D.aJ,D.rp][t]
q=new C.ao(D.O,D.M,D.S,D.T,D.R)
q.sam(new C.c_(D.A,0.5,D.x,a7,0,C.a([r.j(0.3-t*0.07),r.j(0)],u),a7,a7).aA(0,s))
p=q.G()
w.drawOval(C.bG(s),p)
p.delete()}w.restore()
o=new C.e6()
o.cX(11)
n=C.I()
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
i=new C.t(l,j)
h=Math.min(a8,a9)*0.12
g=h*1.5
f=$.S()
e=C.I()
e.sam(new C.c_(D.A,0.5,D.x,a7,0,C.a([D.aJ.j(0.28),B.boc],u),a7,a7).aA(0,C.bX(i,g)))
b1.ad(i,g,e)
J.bl(w.save())
f=new C.aF(f.r,D.ag,a7,a7,C.a([],x.g))
f.D(new C.jL(C.bX(i,h)))
b1.mK(0,f)
f=C.I()
f.sam(B.euZ.aA(0,C.bX(i,h)))
b1.ad(i,h,f)
d=C.I()
d.r=B.bhF.gp(0)
for(a0=0;a0<4;++a0){u=B.d1V[a0].a
a1=u[0]
a2=u[1]
a3=u[2]
a4=u[3]
u=q.a
u=C.bK(new C.t(l+(a1*h+Math.sin((u==null?0:u)*0.05)*h*0.08),j+a2*h),a4*h*2,a3*h*2)
p=d.G()
w.drawOval(C.bG(u),p)
p.delete()}$.S()
a5=C.I()
a5.r=D.c.j(0.55).gp(0)
for(u=h*0.16,a0=0;a0<3;++a0){q=B.cZP[a0]
q=C.bK(new C.t(l+q.a*h,j+q.b*h),u,q.c*h*2)
p=a5.G()
w.drawOval(C.bG(q),p)
p.delete()}u=i.a7(0,new C.t(h*0.45,h*0.35))
$.S()
q=C.I()
q.r=D.w.j(0.38).gp(0)
b1.ad(u,h,q)
w.restore()
a6=new C.t(a8*0.18-v*0.2,a9*0.12)
w=C.I()
w.r=B.biW.gp(0)
b1.ad(a6,h*0.28,w)
w=h*0.05
q=a6.a7(0,new C.t(h*0.08,w))
u=C.I()
u.r=B.agd.gp(0)
b1.ad(q,h*0.07,u)
u=-h
u=a6.a7(0,new C.t(u*0.1,u*0.09))
q=C.I()
q.r=B.agd.gp(0)
b1.ad(u,w,q)},
a3(j3,j4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1,e2,e3,e4,e5,e6,e7,e8,e9,f0,f1,f2,f3,f4,f5,f6,f7,f8,f9,g0,g1,g2,g3,g4,g5,g6,g7,g8,g9,h0,h1,h2,h3,h4,h5,h6,h7,h8,h9,i0,i1,i2,i3,i4,i5,i6,i7,i8,i9,j0=this,j1=null,j2={}
if(j0.z)j0.ciO(j3,j4)
else{w=0+j4.a
v=0+j4.b
$.S()
u=C.I()
t=j0.y
s=C.ar(t,D.c,0.06)
s.toString
u.sam(new C.a9(D.b0,D.b6,D.x,C.a([s,t],x.O),j1,j1).aA(0,new C.a3(0,0,w,v)))
j3.aP(new C.a3(0,0,w,v),u)}r=j4.a
q=j4.b
w=j0.c
p=Math.min(r,q)*1.15*w.y
o=r/2
n=q/2
m=Math.cos(w.a)
l=Math.sin(w.a)
k=Math.cos(w.b)
j=Math.sin(w.b)
i=new A.ctX(m,l,k,j)
h=new A.ctY(j0,i)
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
if(u)for(u=v.a,e=u.length,a2=0;a2<u.length;u.length===e||(0,C.L)(u),++a2){a3=u[a2]
if(a3.y!==0||a3.z===0)continue
for(a4=a3.a,a5=a4.length,a6=0,a7=0;a7<a4.length;a4.length===a5||(0,C.L)(a4),++a7)a6+=h.$1(a4[a7]).c
a5=a3.z
a8=a0.h(0,a5)
if(a8==null)a8=0
a0.n(0,a5,a8+a6/a4.length)
a4=a1.h(0,a5)
a1.n(0,a5,(a4==null?0:a4)+1)}u=v.f
a9=u<=0?0:1800+(u-1800)*D.k.E((w.c-200)/600,0,1)
b0=Math.max(Math.max(w.c*2.4+450,a9),w.as)
b1=C.U(t,s)
b2=C.U(t,t)
b3=B.hbl.gmV(0)
b4=b3.a7(0,B.tr).gmV(0)
b5=C.a([],x.bl)
u=j0.w
b6=u==null?B.Dc:u.$1(j0.gGS(0))
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
c1=new A.ctW(j2,j0,b7,b8,b9,m,l,k,j,c0,o,p,n,a0,a1,b0,r,q,b1,b2,b3.a,b3.b,b3.c,b4.a,b4.b,b4.c,b5)
c2=v.a
c3=c2.length>1500?A.i_f(v):j1
if(c3==null)for(c4=0;c4<c2.length;++c4)c1.$2(c2[c4],c4)
else for(w=c3.a,u=w.length,e=r+40,a4=q+40,a2=0;a2<w.length;w.length===u||(0,C.L)(w),++a2){c5=w[a2]
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
if(a5)continue}for(a5=c5.b,a8=c5.c,d7=0;d7<a5.length;++d7)c1.$2(a5[d7],a8[d7])}for(w=J.a6(b6),c4=0;c4<w.gL(b6);++c4)c1.$2(w.h(b6,c4),c2.length+c4)
u=j0.x
e5=v.d
if(u==null)e6=e5
else{e=C.C(e5,x.R)
D.d.v(e,u.$1(j0.gGS(0)))
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
g1=i.$1(new A.q(f7.a-f9,f7.b-g0,f7.c-f8).FY(new A.q(c9.a-f9,c9.b-g0,c9.c-f8)))
if(g1.a*((f2.a+f3.a+f4.a+f5.a)*0.25)+g1.b*((f2.b+f3.b+f4.b+f5.b)*0.25)+g1.c*f6>0&&!f1.x)continue
if(f6>b0)continue
if(D.d.d_(c8,new A.ctQ())){c9=C.a([],e)
for(f2=c8.length,a2=0;a2<c8.length;c8.length===f2||(0,C.L)(c8),++a2){g2=c8[a2]
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
f2.push(new C.LN(c8,!0))
c8=h0.gbu().a.getBounds()
f2=c8[0]
f3=c8[1]
h1=(c8[2]-f2)*(c8[3]-f3)
e7.push(h1)
b5.push(new A.G5(f1.r,f1.w,new A.ctR(j2,j0,f0<e9,h1,e8,f1,c9,h0),h0,D.L,f6-f1.f,f1.b,!1,!1))
continue}h2=new A.ctP(c8)
h3=C.a([],a5)
c8=$.S()
c9=C.a([],a8)
h0=new C.aF(c8.r,D.ag,j1,j1,c9)
for(h4=0;h4<6;h4=h5)for(c8=h4/6,h5=h4+1,f2=h5/6,c4=0;c4<8;c4=h6){f3=c4/8
h6=c4+1
f4=h6/8
h7=C.a([h2.$2(f3,c8),h2.$2(f4,c8),h2.$2(f4,f2),h2.$2(f3,f2)],a4)
if(D.d.b3(h7,new A.ctS()))continue
f3=C.a([],e)
for(a2=0;a2<4;++a2){g2=h7[a2]
f4=g2.c
f3.push(new C.t(o+g2.a*p/f4,n-g2.b*p/f4))}h3.push(new C.b7(c4,h4,f3))
f3=C.C(f3,u)
f3=new C.LN(f3,!0)
c9.push(f3)
f4=h0.f
if(f4!=null)f3.bx(f4)
f3=h0.e
if(f3!=null)f3.a.delete()
h0.e=null}if(h3.length===0)continue
b5.push(new A.G5(f1.r,f1.w,new A.ctT(j0,f1,h3),h0,D.L,f6-f1.f,f1.b,!1,!1))}D.d.aZ(e7,new A.ctU())
e8[0]=e7.length>6?e7[5]:0
h8=C.dO(b1,t,s)
h9=C.dO(b2,t,t)
for(u=b5.length,a2=0;a2<b5.length;b5.length===u||(0,C.L)(b5),++a2){i0=b5[a2]
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
i2.d=w}D.d.aZ(b5,new A.ctV())
w=j0.d.a
D.d.aa(w)
$.S()
i4=C.I()
i4.b=D.M
i5=C.I()
i5.b=D.a9
i5.c=0.8
for(u=b5.length,t=j3.a,a2=0;a2<b5.length;b5.length===u||(0,C.L)(b5),++a2){i2=b5[a2]
s=i2.f
if(s!=null){s.$1(j3)
s=i2.y
if(s!==0)w.push(new C.z(i2.r,s))
continue}s=i2.w
i4.r=s.gp(0)
e=i2.r
i6=i4.G()
a4=e.e
t.drawPath((a4==null?e.e=new C.cd(e.gbu().a.snapshot()):a4).a,i6)
i6.delete()
if(!i2.z&&!i2.e){i5.r=s.gp(0)
i6=i5.G()
s=e.e
t.drawPath((s==null?e.e=new C.cd(e.gbu().a.snapshot()):s).a,i6)
i6.delete()}s=i2.y
if(s!==0)w.push(new C.z(e,s))}if(j0.e!==0){$.S()
g7=C.I()
g7.b=D.a9
g7.c=1.4
g7.r=D.c.j(0.35+0.25*Math.sin(j0.gGS(0)*6)).gp(0)
for(u=b5.length,a2=0;a2<b5.length;b5.length===u||(0,C.L)(b5),++a2){i2=b5[a2]
if(i2.Q){s=i2.r
i6=g7.G()
e=s.e
t.drawPath((e==null?s.e=new C.cd(s.gbu().a.snapshot()):e).a,i6)
i6.delete()}}}for(v=v.c,u=v.length,a2=0;a2<v.length;v.length===u||(0,C.L)(v),++a2){i7=v[a2]
g2=h.$1(i7.a)
s=g2.c
if(s<1)continue
e=o+g2.a*p/s
s=n-g2.b*p/s
i8=new C.iN(new C.eu(i7.b,j1,j1,D.cN,j1,j1,j1,j1,j1,j1,new C.F(!0,D.c,j1,j1,j1,j1,11,D.u,j1,j1,j1,j1,j1,j1,j1,j1,j1,j1,j1,j1,j1,j1,j1,j1,j1,j1)),D.a4,D.bY,new C.jr(1),j1,j1,j1,j1,D.bW,j1)
i8.el()
a4=i8.b
a5=a4.c
a4=a4.a.c
i9=C.bs(C.bK(new C.t(e,s),a4.gbb(a4)+8,a5+14),D.hF)
a5=$.S()
a4=new C.ao(D.O,D.M,D.S,D.T,D.R)
a4.r=i7.c.j(0.92).gp(0)
i6=a4.G()
t.drawRRect(C.e7(i9),i6)
i6.delete()
a4=new C.ao(D.O,D.M,D.S,D.T,D.R)
a4.b=D.a9
a4.c=1
a4.r=D.ac.gp(0)
i6=a4.G()
t.drawRRect(C.e7(i9),i6)
i6.delete()
a4=i8.b
c6=a4.c
a4=a4.a.c
i8.a3(j3,new C.t(e-c6/2,s-a4.gbb(a4)/2))
s=i7.d
if(s!==0){e=C.a([],a8)
e.push(new C.iT(i9))
w.push(new C.z(new C.aF(a5.r,D.ag,j1,j1,e),s))}}},
av(d){return!0}}
A.cDJ.prototype={}
A.G5.prototype={}
A.avD.prototype={
R(){return new A.bsf(new A.bVe(C.a([],x.a6)),new C.eC(0,$.ax()),D.bC,D.I,D.bC,null,null)}}
A.bsf.prototype={
Z(){var w,v=this
v.a2()
A.hG6()
w=v.pS(new A.f3i(v))
w.h8(0)
v.d!==$&&C.aQ()
v.d=w},
q(){var w=this.d
w===$&&C.c()
w.q()
w=this.f
w.T$=$.ax()
w.P$=0
this.byY()},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.a,l=m.as==null,k=l?n:new A.f39(o)
l=l?n:new A.f3a(o,d)
w=m.c
v=m.d
u=m.e
t=m.r
s=o.f
r=m.w
m=m.x
q=C.a([v,s],x.dS)
p=o.a
q=C.a([C.jj(C.mH(D.iG,new C.er(C.b4(n,n,n,new A.b6B(w,v,o.e,u,t,s,r,m,p.y,p.Q,new C.h8(q)),D.fF),n),n,new A.f3b(o),new A.f3c(o),n,new A.f3d(o),n,n,new A.f3e(o)),D.t,n)],x.p)
o.a.toString
return C.mH(D.iG,C.aA(D.c6,new C.an(D.a_,n,D.b3,D.t,q,n),D.y,!1,n,l,k,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new A.f3f(o),new A.f3g(o),n,n,n,n,n,n,n,n,n,n,n,!1,D.a3),n,n,n,n,n,n,new A.f3h(o),n)}}
A.PR.prototype={
rZ(d,e,f){var w,v,u,t,s,r=this
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
A.cLG.prototype={}
A.aO4.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a5(0,w.gbB())
w.a8$=null
w.a1()},
aV(){this.b1()
this.b0()
this.bC()}}
A.bch.prototype={}
A.bcC.prototype={}
A.bhL.prototype={}
A.dpC.prototype={}
A.MD.prototype={
PC(d){return this.cp5(d)},
cp5(e4){var w=0,v=C.j(x.H),u=this,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1,e2,e3
var $async$PC=C.e(function(e6,e7){if(e6===1)return C.f(e7,v)
for(;;)switch(w){case 0:if(e4.getUint32(0,!0)!==1179937895)throw C.W("not a glb file")
for(n=x.c,m=12,l=null,k=null;m+8<=e4.byteLength;){j=e4.getUint32(m,!0)
i=e4.getUint32(m+4,!0)
h=J.eH(D.dK.gaS(e4),e4.byteOffset+m+8,j)
if(i===1313821514)l=n.a(D.X.aM(0,new C.Gr(!1).DK(h,0,null,!0),null))
if(i===5130562)k=h
m+=8+j}if(l==null||k==null)throw C.W("empty glb")
g=new A.djL(l,k)
f=J.a6(l)
e=x.j
d=J.kK(e.a(f.h(l,"nodes")),n)
n=d.a
a0=J.a6(n)
a1=a0.gL(n)
a2=x.S
u.b=C.bZ(a1,-1,!1,a2)
a3=C.a([],x.s)
for(a4=d.$ti,a5=a4.k("bT<c2.E>"),a6=new C.bT(d,d.gL(0),a5),a7=a4.k("c2.E");a6.C();){a8=a6.d
a8=C.aS(J.r(a8==null?a7.a(a8):a8,"name"))
if(a8==null)a8=""
a3.push(a8.toLowerCase())}u.c=a3
u.d=D.d.bh(a3,new A.bU0())
a3=x.gL
a6=C.a([],a3)
for(a5=new C.bT(d,d.gL(0),a5),a8=x.Y,a9=x.t;a5.C();){b0=a5.d
if(b0==null)b0=a7.a(b0)
b1=C.a([],a9)
b0=a8.a(J.r(b0,"children"))
b0=J.aW(b0==null?D.cv:b0)
while(b0.C())b1.push(D.k.N(C.e3(b0.gS(b0))))
a6.push(b1)}u.f=a6
for(a5=u.b,b2=0;b2<a1;++b2)for(a7=a6[b2],b0=a7.length,b3=0;b3<b0;++b3)a5[a7[b3]]=b2
a5=C.a([],a9)
a6=e.a(f.h(l,"scenes"))
a7=C.aK(f.h(l,"scene"))
a7=a7==null?null:D.k.N(a7)
a6=J.aW(e.a(J.r(J.r(a6,a7==null?0:a7),"nodes")))
while(a6.C())a5.push(D.k.N(C.e3(a6.gS(a6))))
u.r=a5
a5=a1*3
u.w=new Float64Array(a5)
u.x=new Float64Array(a1*4)
u.y=new Float64Array(a5)
for(a5=x.di,a4=a4.y[1],b2=0;b2<a1;++b2){b4=a4.a(a0.h(n,b2))
a6=J.a6(b4)
a7=a8.a(a6.h(b4,"translation"))
b5=a7==null?null:J.kK(a7,a5)
if(b5==null)b5=H.ash
a7=a8.a(a6.h(b4,"rotation"))
b6=a7==null?null:J.kK(a7,a5)
if(b6==null)b6=B.c7d
a6=a8.a(a6.h(b4,"scale"))
b7=a6==null?null:J.kK(a6,a5)
if(b7==null)b7=B.ckf
for(a6=b2*3,a7=J.a6(b5),b0=J.a6(b7),b8=0;b8<3;++b8){b1=u.w
b9=a6+b8
c0=a7.h(b5,b8)
b1.$flags&2&&C.aj(b1)
b1[b9]=c0
c0=u.y
b1=b0.h(b7,b8)
c0.$flags&2&&C.aj(c0)
c0[b9]=b1}for(a6=b2*4,a7=J.a6(b6),b8=0;b8<4;++b8){b0=u.x
b1=a7.h(b6,b8)
b0.$flags&2&&C.aj(b0)
b0[a6+b8]=b1}}u.Q=C.a([],a3)
u.as=C.a([],x.dh)
n=a8.a(f.h(l,"skins"))
n=J.aW(n==null?D.cv:n)
while(n.C()){b7=n.gS(n)
a0=C.a([],a9)
for(a3=J.a6(b7),a4=J.aW(e.a(a3.h(b7,"joints")));a4.C();)a0.push(D.k.N(C.e3(a4.gS(a4))))
u.Q.push(a0)
c1=a3.h(b7,"inverseBindMatrices")!=null?g.FB(D.k.N(C.e3(a3.h(b7,"inverseBindMatrices")))).a:null
a3=u.as
a3.push(c1==null?A.hJd(a0.length):c1)}n=a8.a(f.h(l,"animations"))
n=J.aW(n==null?D.cv:n)
a0=u.z
a3=x.G
a4=x.gR
while(n.C()){c2=n.gS(n)
c3=C.a([],a4)
a5=J.a6(c2)
c4=e.a(a5.h(c2,"samplers"))
for(a6=J.aW(e.a(a5.h(c2,"channels"))),a7=J.a6(c4),c5=0;a6.C();){c6=a6.gS(a6)
a9=J.a6(c6)
c7=a3.a(a9.h(c6,"target"))
b0=J.a6(c7)
b1=C.aK(b0.h(c7,"node"))
c8=b1==null?null:D.k.N(b1)
c9=b0.h(c7,"path")
A:{if("translation"===c9){b0=0
break A}if("rotation"===c9){b0=1
break A}if("scale"===c9){b0=2
break A}b0=-1
break A}if(c8==null||b0<0)continue
b7=a3.a(a7.h(c4,D.k.N(C.e3(a9.h(c6,"sampler")))))
a9=J.a6(b7)
d0=g.FB(D.k.N(C.e3(a9.h(b7,"input")))).a
d1=g.FB(D.k.N(C.e3(a9.h(b7,"output")))).a
d2=a9.h(b7,"interpolation")
if(d2==null)d2="LINEAR"
d3=b0===1?4:3
a9=J.kX(d2)
if(a9.A(d2,"CUBICSPLINE")){b1=d0.length
d4=new Float64Array(b1*d3)
for(b2=0;b2<b1;++b2)for(b9=b2*d3,c0=(b2*3+1)*d3,b8=0;b8<d3;++b8)d4[b9+b8]=d1[c0+b8]
d1=d4}if(!D.oE.gan(d0)){b1=d0.length
if(b1===0)C.b9(C.fs())
c5=Math.max(c5,d0[b1-1])}c3.push(new A.bch(c8,b0,d0,d1,a9.A(d2,"STEP")))}d5=C.aS(a5.h(c2,"name"))
if(d5==null)d5="clip"+a0.a
a0.n(0,d5,new A.bcC(c5,c3))}t=C.U(a2,x.c9)
s=0
n=x.H
e="Could not read a picture of "+u.a+": "
case 2:a0=s
a2=a8.a(f.h(l,"images"))
a2=a2==null?null:J.ad(a2)
if(!(a0<(a2==null?0:a2))){w=3
break}r=g.cRP(s)
if(r==null){w=4
break}try{a0=r
d6=C.ha0(a0)
q=d6==null?null:d6.pT(0,a0,null)
if(q!=null){p=q.cKk(D.c9,4)
a0=s
a2=p.a
a2=a2==null?null:a2.a
if(a2==null)a2=0
a3=p.a
a3=a3==null?null:a3.b
if(a3==null)a3=0
d7=p
a4=d7.gr0()
d8=4!==a4?d7.cKj(null,4):d7
a4=d8.a
a4=a4==null?null:a4.bnt(d8!==d7,D.LE)
if(a4==null){a4=d7.a
a4=a4==null?null:J.eS(a4.gaS(a4))
if(a4==null){a4=d7.a
a4=a4==null?null:a4.gaS(a4)
if(a4==null)a4=D.aG.gaS(new Uint8Array(0))
a4=J.eS(a4)}}J.aJ(t,a0,new A.bhL(a2,a3,new Uint8Array(C.cn(a4))))}}catch(e5){o=C.ab(e5)
$.am.$1(e+C.w(o))}w=5
return C.b(C.bP(D.bC,null,n),$async$PC)
case 5:case 4:++s
w=2
break
case 3:e0=u.bSR(l,g,d,t)
w=6
return C.b(C.bP(D.bC,null,n),$async$PC)
case 6:u.at=u.b99(e0,5000)
w=7
return C.b(C.bP(D.bC,null,n),$async$PC)
case 7:u.ax=u.b99(e0,1800)
n=u.at
n.r=u.b4l(n)
n=u.ax
n.r=u.b4l(n)
e1=u.azE(null,0)
e2=u.b7e(u.at,e1)
for(n=e2.length,e3=1/0,s=1;s<n;s+=3)e3=Math.min(e3,e2[s])
u.ay=isFinite(e3)?e3:0
return C.h(null,v)}})
return C.i($async$PC,v)},
cqv(d){var w,v,u
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
b4l(d){var w,v,u,t,s,r,q,p,o,n,m=d.a.length/3|0,l=new Uint8Array(m)
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
l[t]=o<n.length?this.cqv(n[o]):5}return l},
bSR(e9,f0,f1,f2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1,e2=null,e3="POSITION",e4="JOINTS_0",e5="WEIGHTS_0",e6=J.a6(e9),e7=x.Y,e8=e7.a(e6.h(e9,"materials"))
if(e8==null)e8=D.cv
w=x.c
v=J.kK(e8,w)
e8=e7.a(e6.h(e9,"textures"))
u=J.kK(e8==null?D.cv:e8,w)
e8=x.j
t=J.kK(e8.a(e6.h(e9,"meshes")),w)
e6=x.n
s=C.a([],e6)
r=x.t
q=C.a([],r)
p=C.a([],e6)
o=C.a([],r)
n=C.a([],r)
m=C.a([],r)
for(e6=f1.a,r=J.a6(e6),l=t.a,k=J.a6(l),j=t.$ti.y[1],i=x.N,h=x.A,g=x.fF,f=x.di,e=x.G,d=v.a,a0=J.a6(d),a1=v.$ti.y[1],a2=u.a,a3=J.a6(a2),a4=u.$ti.y[1],a5=this.ch,a6=f1.$ti.y[1],a7=0;a7<r.gL(e6);++a7){a8=a6.a(r.h(e6,a7))
a9=J.a6(a8)
b0=C.aK(a9.h(a8,"mesh"))
b1=b0==null?e2:D.k.N(b0)
if(b1==null)continue
a9=C.aK(a9.h(a8,"skin"))
b2=a9==null?e2:D.k.N(a9)
for(a9=J.kK(e8.a(J.r(j.a(k.h(l,b1)),"primitives")),w),b0=a9.$ti,a9=new C.bT(a9,a9.gL(0),b0.k("bT<c2.E>")),b3=b2==null,b0=b0.k("c2.E");a9.C();){b4=a9.d
if(b4==null)b4=b0.a(b4)
b5=J.a6(b4)
b6=J.Bd(e.a(b5.h(b4,"attributes")),i,h)
if(b6.h(0,e3)==null||b5.h(b4,"indices")==null)continue
b7=f0.FB(D.k.N(C.e3(b6.h(0,e3)))).a
b8=b7.length/3|0
b9=b6.h(0,e4)!=null?f0.FB(D.k.N(C.e3(b6.h(0,e4)))).a:e2
c0=b6.h(0,e5)!=null?f0.FB(D.k.N(C.e3(b6.h(0,e5)))).a:e2
c1=C.aK(b5.h(b4,"material"))
c2=c1==null?e2:D.k.N(c1)
c1=g.a(J.r(c2!=null?a1.a(a0.h(d,c2)):D.cB,"pbrMetallicRoughness"))
c3=c1==null?e2:J.Bd(c1,i,h)
if(c3==null)c3=D.cB
c1=e7.a(c3.h(0,"baseColorFactor"))
c4=c1==null?e2:J.kK(c1,f)
if(c4==null)c4=B.ckg
c1=g.a(c3.h(0,"baseColorTexture"))
c5=c1==null?e2:J.Bd(c1,i,h)
c1=c5==null
c6=C.aK(c1?e2:c5.h(0,"texCoord"))
c7=c6==null?e2:D.k.N(c6)
c8=b6.h(0,"TEXCOORD_"+(c7==null?0:c7))
c9=c8!=null?f0.FB(D.k.N(C.e3(c8))).a:e2
if(!c1){c1=C.aK(J.r(a4.a(a3.h(a2,D.k.N(C.e3(c5.h(0,"index"))))),"source"))
d0=c1==null?e2:D.k.N(c1)
d1=d0!=null?f2.h(0,d0):e2}else d1=e2
d2=s.length/3|0
D.d.v(s,b7)
for(c1=c0!=null,c6=b9!=null,d3=0;d3<b8;++d3){o.push(b3?255:b2)
for(d4=d3*4,d5=0;d5<4;++d5){q.push(c6?D.k.N(b9[d4+d5]):0)
if(c1)d6=c0[d4+d5]
else d6=d5===0?1:0
p.push(d6)}}d7=f0.FB(D.k.N(C.e3(b5.h(b4,"indices")))).a
for(b4=d7.length,d8=0;b5=d8+2,b5<b4;d8+=3){d9=D.k.N(d7[d8])
e0=D.k.N(d7[d8+1])
e1=D.k.N(d7[b5])
n.push(d2+d9)
n.push(d2+e0)
n.push(d2+e1)
m.push(this.bQX(d1,c9,d9,e0,e1,c4))}if(b3)a5.push(new C.b7(d2,b8,a7))}}return new A.dv9(new Float64Array(C.cn(s)),new Uint16Array(C.cn(q)),new Float64Array(C.cn(p)),new Uint8Array(C.cn(o)),new Int32Array(C.cn(n)),new Int32Array(C.cn(m)))},
bQX(d,e,f,g,h,i){var w,v,u,t,s,r,q,p=J.a6(i),o=p.h(i,0),n=p.h(i,1),m=p.h(i,2)
if(d!=null&&e!=null){w={}
p=f*2
v=g*2
u=h*2
t=(e[p]+e[v]+e[u])/3
s=(e[p+1]+e[v+1]+e[u+1])/3
r=w.a=w.b=w.c=0
q=new A.bTV(w,d)
q.$2(t,s)
for(p=[f,g,h];r<3;++r){v=p[r]*2
q.$2((t+e[v])/2,(s+e[v+1])/2)}o*=w.c/4/255
n*=w.b/4/255
m*=w.a/4/255}p=new A.bTU()
return(p.$1(o)<<16|p.$1(n)<<8|p.$1(m)|4278190080)>>>0},
b99(d7,d8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4={},d5=d7.a,d6=d5.length/3|0
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
f=new A.bU2(d4,d6,d7)
e=new A.bU4(d7)
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
D.k_.hu(b2,0,a5,-1)
b3=new Float64Array(a5)
D.oE.hu(b3,0,a5,1/0)
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
c4=A.hgF(c2,c3,b1)
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
b9.bQ(0,new A.bU1(c7,c0))
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
d0[p]=s[d3]}d1[b1]=u[d2]}return new A.dpC(c8,c9,d0,d1,new Int32Array(C.cn(b8)),c7)},
azE(a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=d.b
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
for(w=s.c,q=w.length,p=0;p<w.length;w.length===q||(0,C.L)(w),++p){o=w[p]
n=o.b
if(n===0)n=v
else n=n===1?u:t
A.hJe(o,r,n)}}m=d.CW.c3(0,"world",new A.bTZ(a0.length))
l=new A.bU_(d,v,u,t,new Float64Array(16),m)
a0=d.r
a0===$&&C.c()
w=a0.length
p=0
for(;p<a0.length;a0.length===w||(0,C.L)(a0),++p)l.$1(a0[p])
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
A.hgG(m,w*16,q[h],f*16,j,i)
i+=16}}for(w=a0.length,p=0;p<a0.length;a0.length===w||(0,C.L)(a0),++p,i=e){e=i+16
D.oE.eo(j,i,e,m,a0[p].c*16)}return j},
b7e(b8,b9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=b8.a,b4=b3.length/3|0,b5=new Float64Array(b4*3),b6=C.a([],x.t),b7=this.Q
b7===$&&C.c()
w=b7.length
v=0
u=0
for(;u<b7.length;b7.length===w||(0,C.L)(b7),++u){t=b7[u]
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
cJJ(d,e){var w,v,u=new A.bU7(this)
if(d){w=u.$1("run")
v=w==null?u.$1("walk"):w}else if(e){w=u.$1("walk")
v=w}else{w=u.$1("idle")
if(w==null)w=u.$1("samba")
v=w}if(v!=null)return v
u=u.$1("samba")
if(u==null){u=this.z
u=new C.cy(u,C.a7(u).k("cy<1>")).dN(0,new A.bU5(),new A.bU6(this))}return u},
cX_(b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=this,b4="world",b5={}
if(b6){w=b3.at
w===$&&C.c()
v=w}else{w=b3.ax
w===$&&C.c()
v=w}u=b3.cJJ(c0,c5)
w=b3.z.h(0,u)
t=w==null?null:w.b
if(t==null)t=1
if(c5&&c4!=null&&D.a.t(u.toLowerCase(),"walk"))s=c4/50*t
else{w=B.dAl.h(0,b3.a)
s=c2*(w==null?1:w)}w=b3.e
r=w.h(0,u)
if(r==null){b3.azE(u,0)
if(b3.d>=0){q=b3.CW
r=new C.z(q.h(0,b4)[b3.d*16+12],q.h(0,b4)[b3.d*16+14])}else r=D.A5
w.n(0,u,r)}p=b3.azE(u,s)
b5.a=b5.b=0
if(b3.d>=0){w=b3.CW
b5.b=w.h(0,b4)[b3.d*16+12]-r.a
b5.a=w.h(0,b4)[b3.d*16+14]-r.b}o=b3.b7e(v,p)
w=b3.a
q=B.dAX.h(0,w)
n=c7+(q==null?0:q)
m=C.iq(v.a.length/3|0,new A.bUa(b5,b3,o,36,b8,Math.cos(n),Math.sin(n),c6,c8),!0,x.cv)
q=C.a([],x.t)
for(l=0;l<6;++l){k=$.dM+1
$.dM=k
q.push(k)}j=C.a([],x.z)
for(k=v.e,i=k.length,h=v.f,g=x.o,f=c3!=null,e=c1!=null,d=b9!=null,a0=0;a0<i;a0+=3){a1=m[k[a0]]
a2=m[k[a0+1]]
a3=m[k[a0+2]]
a4=a1.a
a5=a2.b
a6=a1.b
a7=a1.c
a8=a3.b
a9=new A.q(a2.a-a4,a5-a6,a2.c-a7).FY(new A.q(a3.a-a4,a8-a6,a3.c-a7)).gmV(0)
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
a5=b2==null?C.b1(h[D.o.ao(a0,3)]):A.i8K(h[D.o.ao(a0,3)],b2)
j.push(new A.kq(a4,a9,a5,b7,0.08,1,!1,0,0,2,q[b0]))}if(e&&f&&w!=="michelle")D.d.v(j,b3.bQY(v,m,n,c1,b7,q[0]))
return j},
bQY(a6,a7,a8,a9,b0,b1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5={}
for(w=a6.a.length/3|0,v=a6.r,u=-1e9,t=1e9,s=0;s<w;++s){v===$&&C.c()
if(v[s]!==0)continue
r=a7[s].b
if(r>u)u=r
if(r<t)t=r}if(u<t)return B.Dc
q=Math.cos(a8)
p=Math.sin(a8)
o=new A.q(p,0,q)
v=-p
n=Math.max(t,u-(u-t)*0.75)
for(m=a6.r,l=0,k=0,j=0,s=0;s<w;++s){m===$&&C.c()
if(m[s]!==0||a7[s].b<n)continue
i=a7[s]
l+=i.a
k+=i.c;++j}if(j===0)return B.Dc
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
d=new A.bTW(a5,new A.q(m,(u+n)/2,i),o,new A.q(q,0,v),e,new A.q(0,1,0))
w=C.ar(a9,B.bkv,0.88)
w.toString
v=C.ar(a9,D.w,0.25)
v.toString
m=C.ar(a9,B.big,0.6)
m.toString
a0=C.a([],x.z)
a1=new A.bTY(a0,o,b0,b1)
a2=new A.bTX(a1,d)
for(a3=0;a3<2;++a3){a4=F.hq[a3]
i=a4*0.34
a2.$6(i,0.08,0.2,0.11,D.c,1.2)
a2.$6(i,0.08,0.085,0.085,w,1.6)
g=i-0.22
i+=0.22
f=0.04*a4
a1.$6(d.$2(g,0.33),d.$2(i,0.31+f),d.$2(i,0.25+f),d.$2(g,0.27),w,1.2)}a0.push(new A.kq(C.a([d.$2(0,0.12),d.$2(-0.1,-0.22),d.$2(0.1,-0.22)],x.o),o,v,b0,0,1,!1,0,1.2,2,b1))
a1.$6(d.$2(-0.2,-0.46),d.$2(0.2,-0.46),d.$2(0.17,-0.53),d.$2(-0.17,-0.53),m,1.2)
a1.$6(d.$2(-0.2,-0.46),d.$2(0.2,-0.46),d.$2(0.2,-0.485),d.$2(-0.2,-0.485),w,1.5)
return a0}}
A.dv9.prototype={}
A.djL.prototype={
cRP(d){var w,v,u=this.a,t=J.a6(u),s=x.j,r=x.G,q=C.aK(J.r(r.a(J.r(s.a(t.h(u,"images")),d)),"bufferView")),p=q==null?null:D.k.N(q)
if(p==null)return null
w=r.a(J.r(s.a(t.h(u,"bufferViews")),p))
u=J.a6(w)
t=C.aK(u.h(w,"byteOffset"))
v=t==null?null:D.k.N(t)
if(v==null)v=0
return C.yn(this.b,v,v+D.k.N(C.e3(u.h(w,"byteLength"))))},
FB(a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=null,g="byteOffset",f=this.a,e=J.a6(f),d=x.j,a0=x.G,a1=a0.a(J.r(d.a(e.h(f,"accessors")),a5)),a2=J.a6(a1),a3=D.k.N(C.e3(a2.h(a1,"count"))),a4=a2.h(a1,"type")
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
f=J.a6(p)
e=C.aK(f.h(p,g))
e=e==null?h:D.k.N(e)
if(e==null)e=0
a2=C.aK(a2.h(a1,g))
d=a2==null?h:D.k.N(a2)
o=e+(d==null?0:d)
f=C.aK(f.h(p,"byteStride"))
n=f==null?h:D.k.N(f)
if(n==null)n=w*u
m=C.aTx(this.b)
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
A.lI.prototype={}
A.rd.prototype={
gDt(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=1e9,d=-1e9,a0=this.w,a1=a0.length
if(a1===0){a0=this.e
return new C.cw([-a0/2,a0/2,-12,0])}for(w=this.e,v=-w,u=d,t=e,s=u,r=t,q=0;q<a1;++q){p=a0[q]
for(o=p.e,o=[v*o/2,w*o/2],n=p.c,m=p.a,l=p.b,k=0;k<2;++k){j=o[k]
for(i=[-12,0],h=0;h<2;++h){g=A.vG(new A.q(j,0,i[h]),n)
f=g.a+m
r=Math.min(r,f)
s=Math.max(s,f)
f=g.c+l
t=Math.min(t,f)
u=Math.max(u,f)}}}return new C.cw([r,s,t,u])},
gapp(){return this.gDt().a[1]-this.gDt().a[0]},
gGQ(){var w=this.w
return w.length===0?this.f:new C.N(w,new A.bIf(this),C.T(w).k("N<1,K>")).f4(0,D.pO)},
gbew(){return this.gDt().a[3]-this.gDt().a[2]},
ga4z(d){return this.w.length===0?0:(this.gDt().a[0]+this.gDt().a[1])/2},
ga4B(){return this.w.length===0?0:(this.gDt().a[2]+this.gDt().a[3])/2},
geh(d){var w=this
return Math.max(Math.max(w.gapp(),w.gbew()),Math.max(w.gGQ()*1.3,w.x))*w.y}}
A.Hq.prototype={}
A.aTe.prototype={
bjQ(){var w=this
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
if(w!=null)u.n(0,"logo",D.cJ.gcu().aO(w))
w=v.r
if(w!=null)u.n(0,"pic",D.cJ.gcu().aO(w))
return u},
U_(d){var w,v=this,u=J.a6(d)
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
v.f=typeof u.h(d,"logo")=="string"?D.cF.aO(C.cQ(u.h(d,"logo"))):null
v.r=typeof u.h(d,"pic")=="string"?D.cF.aO(C.cQ(u.h(d,"pic"))):null}}
A.bId.prototype={
cYJ(){var w,v,u
for(w=this.b,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].bjQ()},
ah(){var w,v,u,t=this.a,s=C.a([],x.c7)
for(w=this.b,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)s.push(w[u].ah())
return C.H(["template",t,"signs",s],x.N,x.A)},
U_(d){var w,v,u,t,s,r,q
this.a=D.d.b3(B.a3G,new A.bIe(d))?C.cQ(J.r(d,"template")):"highway"
w=J.r(d,"signs")
if(x.j.b(w)){v=J.a6(w)
u=x.G
t=this.b
s=x.N
r=x.A
q=0
for(;;){if(!(q<6&&q<v.gL(w)))break
if(u.b(v.h(w,q)))t[q].U_(C.a2(u.a(v.h(w,q)),s,r));++q}}else this.b[0].U_(d)}}
A.ho.prototype={}
A.aoN.prototype={
R(){var w=A.hFN()
$.yZ()
return new A.aoO(w,new C.yf())}}
A.aoO.prototype={
gis(){var w,v=this.e
if(v===$){w=new A.xj(0.5,0.25,420,B.h_n,$.ax())
w.e=30
w.f=5000
w.at=0.02
w.ax=1.4
w.rb(!0)
this.e!==$&&C.bF()
this.e=w
v=w}return v},
gaxE(){var w=this.r
return w===$?this.r=new A.a5i(this.gc7f(),Z.BJ):w},
gzz(){return D.d.fZ(B.a3G,new A.c4h(this))},
Z(){var w=this
w.a2()
w.f=A.h9E(w.gzz(),w.d)
w.abA()
A.hlg().bJ(new A.c4f(w),x.P)
w.PG()},
q(){this.gaxE().bR(0)
var w=this.gis()
w.T$=$.ax()
w.P$=0
this.a1()},
abA(){var w=this.gzz(),v=this.gis(),u=w.ga4z(0),t=w.gGQ(),s=w.ga4B()
v.Hn(w.geh(0)*1.9,0.22,new A.q(u,w.r+t/2,s),0.45)},
PG(){var w=0,v=C.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i
var $async$PG=C.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return C.b(C.az(),$async$PG)
case 7:q=e
p=C.aS(J.r(q.a,"ngmy_billboard_studio_v1"))
if(p==null){w=1
break}n=r.d
n.U_(x.c.a(D.X.aM(0,p,null)))
n=n.b,m=n.length,l=0
case 8:if(!(l<n.length)){w=10
break}o=n[l]
i=o
w=11
return C.b(A.ag_(o.f),$async$PG)
case 11:i.w=e
i=o
w=12
return C.b(A.ag_(o.r),$async$PG)
case 12:i.x=e
case 9:n.length===m||(0,C.L)(n),++l
w=8
break
case 10:if(r.c==null){w=1
break}r.m(new A.c42(r))
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
return C.i($async$PG,v)},
IY(){var w=0,v=C.j(x.H),u=1,t=[],s=this,r,q,p
var $async$IY=C.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
w=6
return C.b(C.az(),$async$IY)
case 6:r=e
w=7
return C.b(r.ar("String","ngmy_billboard_studio_v1",D.X.aq(s.d.ah(),null)),$async$IY)
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
return C.i($async$IY,v)},
c7g(){var w,v,u,t,s,r,q,p=this
if(!(p.x>=0)||p.c==null)return
w=p.w.gig()/1000
if(w>=30){p.aBW(!0)
return}v=A.ia1(p.gzz(),w)
u=v.b
t=u.aE(0,v.a)
s=Math.max(8,t.guZ())
r=p.gis()
q=Math.atan2(t.a,-t.c)
r.Hn(s,Math.asin(D.k.E(-t.b/s,-1,1)),u,q)
p.m(new A.c48(p,w))},
brb(){var w,v=this
v.gis().at=-1.4
w=v.w
w.kN(0)
w.h8(0)
v.m(new A.c4g(v))
v.gaxE().h8(0)},
aBW(d){var w,v=this
v.gaxE().bR(0)
w=v.w
if(w.b==null)w.b=$.a9D.$0()
v.gis().at=0.02
v.m(new A.c45(v,d))
v.abA()},
czX(){return this.aBW(!1)},
cvS(d){var w=this
w.d.a=d
w.m(new A.c44(w))
w.abA()
w.IY()},
ZO(d){this.d.b[d].a=!1
this.m(new A.c3D())
this.IY()},
IX(d,e){return this.clw(d,e)},
clw(d,e){var w=0,v=C.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k
var $async$IX=C.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
m=e?400:900
w=7
return C.b(new C.hX().l4(85,m,D.eL),$async$IX)
case 7:q=g
if(q==null){w=1
break}w=8
return C.b(q.fl(),$async$IX)
case 8:p=g
w=9
return C.b(A.ag_(p),$async$IX)
case 9:o=g
if(o==null){w=1
break}n=r.d.b[d]
if(e){n.f=p
n.w=o}else{n.r=p
n.x=o}r.ZO(d)
t=2
w=6
break
case 4:t=3
k=s.pop()
if(r.c!=null)r.m(new A.c43(r))
w=6
break
case 3:w=2
break
case 6:case 1:return C.h(u,v)
case 2:return C.f(s.at(-1),v)}})
return C.i($async$IX,v)},
cC1(){var w=this.c
w.toString
C.bV(D.av,null,new A.c47(this),w,!0,!0,!0,D.k5,!1,!1,x.H)},
bPe(){var w,v,u,t,s,r,q=this,p={}
p.a=0
w=q.d.b[0]
v=w.b
u=$.ax()
t=new C.au(new C.ba(v,D.b4,D.aO),u)
v=w.c
s=new C.au(new C.ba(v,D.b4,D.aO),u)
w=w.d
r=new C.au(new C.ba(w,D.b4,D.aO),u)
w=q.c
w.toString
C.bV(D.av,null,new A.c40(p,q,new A.c41(p,q,t,s,r),t,s,r),w,!0,!0,!0,D.k5,!1,!1,x.H)},
axG(d,e,f,g){var w=null,v=g?f.j(0.3):D.w.j(0.6),u=C.m(20),t=C.J(f,D.r,1)
return C.aA(w,C.p(w,C.d(d,w,w,w,w,w,w,C.l(w,w,f,w,w,w,w,w,w,w,w,13,w,w,D.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),D.f,w,w,new C.o(v,w,t,u,w,w,D.n),w,w,w,w,D.iq,w,w,w),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,e,w,w,w,w,w,w,!1,D.a3)},
axF(d,e,f){return this.axG(d,e,f,!1)},
c7e(d,e,f){return this.axG(d,e,D.aJ,f)},
B(d){var w,v,u,t,s,r=this,q=null,p=C.aG(d,q,x.w).w.r,o=r.f
o===$&&C.c()
w=x.p
o=C.a([C.bS(0,A.h5F(E.y0,r.gis(),q,q,0,q,q,q,o,!0),0,0,0)],w)
if(!(r.x>=0))o.push(C.ap(q,C.B(C.a([C.aA(q,C.p(q,D.a2D,D.f,q,q,new C.o(D.w.j(0.55),q,C.J(D.bU,D.r,1),q,q,q,D.a6),q,40,q,q,q,q,q,40),D.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new A.c4b(d),q,q,q,q,q,q,!1,D.a3),D.as,C.E(C.d("Billboard studio \xb7 "+r.gzz().c,q,q,q,q,q,q,B.fip,q,q,q),1)],w),D.m,q,D.e,D.i,0,q,q),q,q,8,8,p.b+8,q))
if(r.x>=0&&r.y)o.push(C.bS(0,C.aA(D.c6,q,D.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new A.c4c(r),q,q,q,q,q,q,!1,D.a3),0,0,0))
if(!(r.x>=0&&r.y)){v=C.a([],w)
if(r.z.length!==0&&!(r.x>=0)){u=D.dY.j(0.95)
t=C.m(12)
s=C.J(D.be,D.r,1)
v.push(C.p(q,C.d(r.z,q,q,q,q,q,q,D.UT,q,q,q),D.f,q,q,new C.o(u,q,s,t,q,q,D.n),q,q,q,D.ct,D.bT,q,q,q))}w=C.a([],w)
if(!(r.x>=0))w.push(r.axF("\ud83e\udea7 Choose billboard",r.gcC0(),F.f8))
if(!(r.x>=0))w.push(r.axF("\u270f\ufe0f Edit",r.gbPd(),D.be))
if(r.x>=0)w.push(r.axG("\u23f9 Stop the drone",r.gczW(),D.c0,!0))
if(r.x>=0)w.push(r.axF("\ud83d\udc41 Hide everything",new A.c4d(r),D.aN))
if(!(r.x>=0))w.push(r.c7e("\ud83c\udfac 30 second drone shot",r.gbra(),!0))
v.push(C.bY(D.fI,w,D.br,q,8,8))
o.push(C.ap(p.d+12,C.x(v,D.m,q,D.e,D.P,0,D.p),q,q,10,10,q,q))}return C.c6(q,D.w,new C.an(D.a_,q,D.ab,D.t,o,q),q,!1,!1,q,q)}}
A.FY.prototype={}
A.zd.prototype={}
A.xo.prototype={}
A.aUo.prototype={}
A.a4q.prototype={}
A.akq.prototype={}
A.bMD.prototype={
bzI(d,e){var w,v,u,t,s,r,q,p=this,o=x._,n=C.a([],o)
for(w=p.a.x,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u){t=w[u]
s=t.b
if(s==="house2"||s==="bighouse")n.push(t)}p.b!==$&&C.aQ()
p.b=n
o=C.a([],o)
for(n=w.length,u=0;u<w.length;w.length===n||(0,C.L)(w),++u){t=w[u]
if(D.d.b3(B.Rj,new A.bMF(t)))o.push(t)}p.c!==$&&C.aQ()
p.c=o
for(o=p.f,r=0;r<5;++r){q=p.coQ()
n=B.dwf[r]
w=B.dkl[r]
o.push(new A.aUo(n,w,new A.tO(B.ayl[r],B.Mj,w,B.LM,B.dpE[r],!1,0,1),58+r*7.5,q.a,q.b,B.aAI))}p.UO(0)},
coQ(){var w,v=this.c
v===$&&C.c()
w=v.length
if(w===0)return B.evQ
return A.yP(v[this.d.ap(w)])},
cXb(d){var w,v,u,t,s,r,q,p=this,o=C.a([],x._),n=p.c
n===$&&C.c()
w=n.length
v=0
for(;v<n.length;n.length===w||(0,C.L)(n),++v){u=n[v]
t=u.b
if(t==="store"||t==="shop"||t==="gasstation")o.push(u)}if(o.length===0)return
D.d.aZ(o,new A.bMH(p,d))
for(n=p.e,s=0,v=0;v<2;++v){r=B.do2[v]
q=o[D.o.F(s,o.length)];++s;++p.r
w=new A.xo(r,q,d,r==="medicine"?30:24)
w.w=!0
D.d.c6(n,0,w)}},
UO(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=j.d,h=j.e,g=x._,f=C.T(h).k("Z<1>"),e=0
for(;;){if(new C.Z(h,new A.bMI(),f).gL(0)<7){w=e+1
v=e<30
e=w}else v=!1
if(!v)break
u=B.Rj[i.ap(5)]
v=C.a([],g)
t=j.c
t===$&&C.c()
s=t.length
r=u.d
q=0
for(;q<t.length;t.length===s||(0,C.L)(t),++q){p=t[q]
if(r.t(0,p.b))v.push(p)}t=v.length
if(t!==0){s=j.b
s===$&&C.c()
s=s.length===0}else s=!0
if(s)return
o=v[i.ap(t)]
v=j.b
v===$&&C.c()
n=v[i.ap(v.length)]
m=A.yP(o)
l=A.yP(n)
k=Math.sqrt(Math.pow(m.a-l.a,2)+Math.pow(m.b-l.b,2));++j.r
h.push(new A.xo(u.a,o,n,6+D.o.E(D.k.V(k/70),0,22)))}},
cZd(d,e,f){if(this.x!=null||e.f!=null||!D.d.t(this.e,e))return!1
e.f=-1
e.x=f
this.x=e
return!0},
a4(d){var w=this.x
if(w==null)return
w.f=null
w.r=!1
this.x=null},
ga71(d){var w=this.x
if(w==null)return null
return A.yP(w.r?w.d:w.c)},
bkL(d,e,f){var w,v,u,t,s,r,q,p=this,o=p.x
if(o==null)return null
if(f-o.x>360){p.a4(0)
return B.bvI}w=p.ga71(0)
if(Math.sqrt(Math.pow(w.a-d,2)+Math.pow(w.b-e,2))>58)return null
if(!o.r){o.r=!0
v=o.b
u=A.L9(v)
v=A.L9(v)
t=B.hE.h(0,o.c.b).a
s=o.w?"hospital":"house"
return new A.akq("pickup",u.b+" You picked up the "+v.c.toLowerCase()+" at the "+t.toLowerCase()+". Now take it to the "+s+".",0)}D.d.W(p.e,o)
p.x=null;++p.z;++p.y
v=p.Q
u=o.e
p.Q=v+u
p.UO(f)
r=A.L9(o.b).b+" Delivered! +"+u+" points."
if(p.y>=8){p.Q+=40
r+=" You won the race with 8 deliveries: +40 points!"
p.aZj()
q=40}else q=0
v=q>0?"won":"delivered"
return new A.akq(v,r,u+q)},
aZj(){var w,v,u;++this.as
this.y=0
for(w=this.f,v=w.length,u=0;u<v;++u)w[u].r=0},
FH(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
for(w=j.f,v=w.length,u=j.e,t=e+2,s=j.d,r=x.C,q=null,p=0;p<w.length;w.length===v||(0,C.L)(w),++p){o=w[p]
n=o.ch
if(n===0){if(e<o.CW)continue
n=C.a([],r)
for(m=u.length,l=0;l<u.length;u.length===m||(0,C.L)(u),++l){k=u[l]
if(k.f==null)n.push(k)}if(n.length===0)continue
D.d.aZ(n,new A.bME(j,o))
k=n[Math.min(n.length-1,s.ap(3))]
k.f=D.d.cp(w,o)
o.y=k
j.b7M(o,e,1,k.c)}else if(e>=o.Q){if(!o.db){o.e=o.ax
o.f=o.ay
o.db=!0
o.dx=e+(n===1?1.6:1.3)
continue}if(e<o.dx)continue
o.db=!1
m=o.y
m.toString
if(n===1)j.b7M(o,e,2,m.d)
else{D.d.W(u,m)
o.y=null
o.ch=0;++o.w;++o.r
o.x=o.x+m.e
o.CW=t+s.ag()*5
j.UO(e)
if(o.r>=8){q=o.a+" won the race with 8 deliveries! A new round starts."
j.aZj()}}}}return q},
b_8(d,e){return Math.sqrt(Math.pow(e.a-d.e,2)+Math.pow(e.b-d.f,2))},
b7M(d,e,f,g){var w,v,u,t=this,s=A.yP(g),r=B.hE.h(0,g.b),q=g.e*3.141592653589793/2,p=r.d/2-2,o=g.c+Math.sin(q)*p,n=g.d+Math.cos(q)*p
d.ch=f
d.ax=o
d.ay=n
w=t.w
if(w===$){v=new A.bKJ(t.a)
v.b_9()
t.w!==$&&C.bF()
t.w=v
w=v}u=C.C(w.ap4(new C.z(d.e,d.f),s),x.Q)
u.push(new C.z(o,n))
d.cx=u
o=A.ikw(u)
d.cy=o
d.z=e
d.Q=e+Math.max(1,o/d.d)},
amC(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=C.a([],x.F)
for(w=this.f,v=w.length,u=d*2.2,t=0;t<w.length;w.length===v||(0,C.L)(w),++t){s=w[t]
r=s.e
q=s.f
if(s.db)continue
if(s.ch!==0&&d>=s.z&&s.cx.length>1){p=s.z
o=D.k.E((d-p)/Math.max(0.01,s.Q-p),0,1)
n=A.ikC(s.cx,s.cy*o)
r=n.a
q=n.b
m=n.c
l=o<1}else{m=0
l=!1}k.push(new A.a4q(r,q,m,u+s.d,l,s.ch===2,s.c,s.b))}return k},
cZb(){var w,v,u,t,s=C.a([new C.b7("You",this.y,this.Q)],x.aJ)
for(w=this.f,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u){t=w[u]
s.push(new C.b7(t.a,t.r,t.x))}D.d.aZ(s,new A.bMJ())
return s},
r1(d,e,f){var w,v,u,t,s=C.a([],x.C)
for(w=this.e,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u){t=w[u]
if(t.f==null)s.push(t)}D.d.aZ(s,new A.bMG(this,e,f))
return s},
aaz(d,e,f){return Math.sqrt(Math.pow(f.a-d,2)+Math.pow(f.b-e,2))}}
A.bKJ.prototype={
b_c(d){return-this.a.geb(0)/2+8+d*24},
b_9(){var w,v,u,t,s=this,r=s.a
s.d=A.hze(r,null)
s.b=D.k.dc((r.geb(0)-16)/24)+1
w=D.k.dc((r.gh0(0)-10- -750)/24)+1
s.c=w
s.e=C.bZ(s.b*w,!1,!1,x.y)
for(v=0;v<s.b;++v)for(w=v*24,u=0;t=s.c,u<t;++u)s.e[v*t+u]=s.acs(-r.geb(0)/2+8+w,-750+u*24)
s.f=A.hfb(r)},
acs(d,e){var w,v,u=this.a
if(d<-u.geb(0)/2+12||d>u.geb(0)/2-12||e<-756||e>u.gh0(0)-14)return!0
u=this.d
u===$&&C.c()
w=u.length
v=0
for(;v<w;++v)if(u[v].aGX(d,e,14))return!0
return!1},
b_a(d,e,f){var w,v,u=e.a,t=f.a-u,s=e.b,r=f.b-s,q=Math.max(1,D.k.dc(Math.sqrt(Math.pow(t,2)+Math.pow(r,2))/8))
for(w=0;w<=q;++w){v=w/q
if(this.acs(u+t*v,s+r*v))return!1}return!0},
b_b(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=d.a,h=j.a,g=D.k.V((i+h.geb(0)/2-8)/24),f=j.b
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
ap4(d,e){var w,v,u,t,s,r,q,p,o,n,m=this
if(A.hfb(m.a)!==m.f)m.b_9()
w=m.b_b(d)
v=m.b_b(e)
if(w==null||v==null)return C.a([d,e],x.f)
u=new C.z(m.b_c(w.a),-750+w.b*24)
t=new C.z(m.b_c(v.a),-750+v.b*24)
s=x.f
r=m.acs(d.a,d.b)?C.a([d],s):C.a([],s)
q=m.acs(e.a,e.b)?C.a([e],s):C.a([],s)
p=C.a([],s)
o=r.length===0?d:u
n=q.length===0?e:t
if(m.b_a(0,o,n))D.d.v(p,C.a([o,n],s))
else D.d.v(p,m.cuF(w,v,o,n))
s=C.C(r,x.Q)
D.d.v(s,p)
D.d.v(s,q)
return s},
cuF(a9,b0,b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this,a3=x.t,a4=C.a([],a3),a5=new A.dkg(a4,C.a([],x.n)),a6=x.S,a7=C.U(a6,a6),a8=C.U(a6,x.i)
a6=a9.a
w=a2.c
w===$&&C.c()
v=a9.b
u=a6*w+v
t=b0.a
s=b0.b
r=t*w+s
a8.n(0,u,0)
a5.aoy(u,a2.c7L(a6,v,b0))
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
a5.aoy(e,d+Math.sqrt(Math.pow(v,2)+Math.pow(h-s,2)))}}}if(!q)return C.a([b1,b2],x.f)
a0=C.a([r],a3)
while(a7.aj(0,D.d.gak(a0))){a3=a7.h(0,D.d.gak(a0))
a3.toString
a0.push(a3)}a3=x.f
a4=C.a([b1],a3)
for(a6=x.c5,w=new C.dx(a0,a6),w=new C.bT(w,w.gL(0),a6.k("bT<ak.E>")),v=a2.a,a6=a6.k("ak.E");w.C();){t=w.d
if(t==null)t=a6.a(t)
s=a2.c
g=D.o.ec(t,s)
a4.push(new C.z(-v.geb(0)/2+8+g*24,-750+D.o.F(t,s)*24))}a4.push(b2)
a1=C.a([D.d.gI(a4)],a3)
for(j=0;h=a4.length-1,j<h;j=h){a3=j+1
for(;;){if(!(h>a3&&!a2.b_a(0,a4[j],a4[h])))break;--h}a1.push(a4[h])}return a1},
c7L(d,e,f){return Math.sqrt(Math.pow(d-f.a,2)+Math.pow(e-f.b,2))}}
A.dkg.prototype={
gcm(d){return this.a.length!==0},
aoy(d,e){var w,v,u,t=this.a
t.push(d)
w=this.b
w.push(e)
v=t.length-1
for(;v>0;v=u){u=D.o.ao(v-1,2)
if(w[u]<=w[v])break
this.b8s(v,u)}},
eN(){var w,v,u,t,s,r=this.a,q=D.d.gI(r),p=r.pop(),o=this.b,n=o.pop()
if(r.length!==0){r[0]=p
o[0]=n
for(w=0;;w=s){v=2*w+1
u=v+1
t=r.length
s=v<t&&o[v]<o[w]?v:w
if(u<t&&o[u]<o[s])s=u
if(s===w)break
this.b8s(w,s)}}return q},
b8s(d,e){var w,v=this.a,u=v[d]
v[d]=v[e]
v[e]=u
v=this.b
w=v[d]
v[d]=v[e]
v[e]=w}}
A.aTK.prototype={
bkc(d,e,f){var w,v,u,t,s=this,r=null,q=s.d
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
a73(d){return this.bkc(d,!1,!1)}}
A.aZ0.prototype={
B(d){var w,v,u,t,s,r=null,q=D.k.E(this.c,0,1)
if(q>0.5)w=D.bf
else w=q>0.25?D.bt:D.ax
v=C.a([],x.p)
u=this.d
v.push(new C.D(D.qi,C.d(this.e,r,r,r,r,r,r,C.l(r,r,r,r,r,r,r,r,r,r,r,u,r,r,r,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),r))
t=C.m(u/3)
s=C.J(D.ac,D.r,1.5)
v.push(C.E(C.p(r,new C.bM(D.a5,r,r,C.Bz(D.A,C.c4(r,new C.o(w,r,r,C.m(u/4),r,r,D.n),D.bh),1,q),r),D.f,r,r,new C.o(D.aS,r,s,t,r,r,D.n),r,u,r,r,D.nv,r,r,r),1))
v.push(C.p(r,r,D.f,r,r,new C.o(D.ac,r,r,C.m(1),r,r,D.n),r,u*0.45,r,B.bC1,r,r,r,3))
return C.B(v,D.m,r,D.e,D.P,0,r,r)}}
A.Ux.prototype={
B(d){return new C.ty(new A.c1T(this),null,this.c,null)}}
A.rR.prototype={}
A.SB.prototype={
gL(d){return this.a==="bus"?120:95.94999999999999}}
A.aTJ.prototype={}
A.bxy.prototype={
bAO(d,e,f,g){var w,v,u,t,s,r,q,p,o,n,m
for(w=this.e,v=this.f,u=0;u<4;++u){t=B.kq[u]
s=A.fql(t).a[1]
r=new A.fj5(this,t)
q=0
for(;;){if(!(r.$1(q)&&q<s))break;++q}for(p=-1,o=0,n=0;n<s;++n){m=D.o.F(q+n,s)
if(r.$1(m)){if(p<0)p=m;++o}else if(p>=0)break}w.push(p)
v.push(o)}}}
A.bKL.prototype={
kN(d){var w,v,u,t
for(w=this.a,v=this.b,u=0;u<4;++u){w[u]=B.kq[u].r
v[u]=0}t=this.c=0
for(w=$.h0z();t<2;++t)w[t].r=-1},
FH(d,e){var w,v,u,t=this
if(e<t.c-0.0001)t.kN(0)
w=t.c
if(e-w>90){w=e-2
t.c=w}for(v=e-1e-9;w<v;){u=Math.min(0.05,e-w)
t.czM(u)
w=t.c+=u}},
czM(b8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7=this
for(w=$.h0z(),v=b7.a,u=0;u<2;++u){t=w[u]
s=t.r
if(s<0)continue
r=A.fql(B.kq[s]).a[1]
q=D.k.F(v[s]-t.e[s],r)
if(q<0)q+=r
if(q>=t.f[s]&&q<r/2)t.r=-1}for(w=b7.b,p=110*b8,o=40*b8,n=0;n<4;++n){m=B.kq[n]
r=A.fql(m).a[1]
l=m.a==="bus"
k=(l?120:95.94999999999999)/2
j=new A.bKM()
for(i=34,h=0;h<4;++h){if(h===n||D.o.ao(n,2)!==D.o.ao(h,2))continue
g=D.k.F(v[h]-v[n],r)
if(g<0)g+=r
g-=k+(B.kq[h].a==="bus"?120:95.94999999999999)/2
if(g<400)i=Math.min(i,C.je(j.$1(g-18)))}for(f=$.bG0(),e=f.length,d=r-30,u=0;u<f.length;f.length===e||(0,C.L)(f),++u){a0=f[u]
if(a0.a!==D.o.ao(n,2))continue
a1=A.haf(a0,b7.c)
if(a1===0)continue
a2=D.k.F(a0.b-(v[n]+k),r)
if(a2<0)a2+=r
if(a2>d)continue
if(a2<260)a3=!(a1===1&&a2<w[n]*1.2)
else a3=!1
if(a3)i=Math.min(i,C.je(j.$1(a2-4)))}for(f=$.h0z(),u=0;u<2;++u){t=f[u]
a4=t.e[n]
if(a4<0)continue
e=v[n]
a2=D.k.F(a4-e,r)
if(a2<0)a2+=r
if(D.k.F(e-a4,r)<t.f[n]){if(t.r<0)t.r=n
continue}if(t.r===n)continue
e=w[n]
for(d=$.bG0(),a3=d.length,a5=b7.c,a6=!1,a7=0;a7<a3;++a7){a0=d[a7]
if(a0.a!==D.o.ao(n,2)||A.haf(a0,a5)===0)continue
a8=D.k.F(a0.b-(v[n]+k),r)
if((a8<0?a8+r:a8)<a2)a6=!0}if(t.r<0&&a2<40+e*e/220+20&&!a6){t.r=n
continue}if(a2<400)i=Math.min(i,C.je(j.$1(a2-10)))}f=A.Le(m,v[n]).a
a9=f[0]
b0=f[1]
b1=f[2]
b2=f[3]
for(f=b7.d,e=f.length,d=k-5,a3=k+110,u=0;u<f.length;f.length===e||(0,C.L)(f),++u){a5=f[u]
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
cX4(d,e,f){this.FH(0,f)
return A.Le(B.kq[e],this.a[e])},
cRH(d,e){var w,v,u,t,s,r,q,p,o,n,m,l
for(w=this.a,v=this.b,u=0;u<4;++u){if(v[u]<4)continue
t=B.kq[u]
s=A.Le(t,w[u]).a
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
A.Ak.prototype={
ga8u(){var w=this.d,v=w.e*3.141592653589793/2,u=Math.sin(v),t=Math.cos(v),s=this.r-1
return new C.z(w.c+u*42-t*s*24,w.d+t*42+u*s*24)}}
A.cB9.prototype={
bAD(d,e){var w,v,u,t,s=this,r=x._,q=C.a([],r)
for(w=s.a.x,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u){t=w[u]
if(t.b==="ubstation")q.push(t)}s.c!==$&&C.aQ()
s.c=q
r=C.a([],r)
for(q=w.length,u=0;u<w.length;w.length===q||(0,C.L)(w),++u){t=w[u]
v=t.b
if(v==="house2"||v==="bighouse")r.push(t)}s.d!==$&&C.aQ()
s.d=r
s.UO(0)},
UO(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.d
f===$&&C.c()
if(f.length===0)return
w=g.c
w===$&&C.c()
v=w.length
u=g.b
t=g.e
s=C.T(t)
r=s.k("Z<1>")
s=s.k("cO<1,G>")
q=s.k("M.E")
p=0
for(;p<w.length;w.length===v||(0,C.L)(w),++p){o=w[p]
n=C.pZ(q)
n.v(0,new C.cO(new C.Z(t,new A.cBb(o),r),new A.cBc(),s))
for(m=0;m<3;++m){if(n.t(0,m))continue
l=g.f
k=l==null
if((k?null:l.d)===o)l=(k?null:l.r)===m
else l=!1
if(l)continue
l=g.x++
j=f[u.ap(f.length)]
i=A.yP(j)
h=Math.sqrt(Math.pow(o.c-i.a,2)+Math.pow(o.d-i.b,2))
l=new A.Ak(l,B.dkR[u.ap(12)],new A.tO(B.ayl[u.ap(5)],B.Mj,B.dt_[u.ap(6)],D.aK,"human",!1,0,1),o,j,6+D.o.E(D.k.V(h/45),0,30),m)
l.x=d
t.push(l)}}},
aqI(d,e){var w,v,u,t=this.c
t===$&&C.c()
w=t.length
v=0
for(;v<t.length;t.length===w||(0,C.L)(t),++v){u=t[v]
if(Math.sqrt(Math.pow(u.c-d,2)+Math.pow(u.d-e,2))<150)return u}return null},
cWQ(d,e){var w,v,u,t,s,r,q=this
if(q.f!=null)return null
w=q.aqI(d,e)
if(w==null)return null
v=C.a([],x.bz)
for(u=q.e,t=u.length,s=0;s<u.length;u.length===t||(0,C.L)(u),++s){r=u[s]
if(r.d===w)v.push(r)}if(v.length===0)return null
D.d.aZ(v,new A.cBa())
r=D.d.gI(v)
D.d.W(u,r)
return q.f=r},
ga71(d){var w=this.f
return w==null?null:A.yP(w.e)},
cOD(d,e,f){var w,v,u=this,t=u.f,s=u.ga71(0)
if(t==null||s==null)return 0
if(Math.sqrt(Math.pow(s.a-d,2)+Math.pow(s.b-e,2))>70)return 0
u.f=null;++u.r
w=u.w
v=t.f
u.w=w+v
u.y=f+4
u.UO(f)
return v},
amC(d){var w,v,u,t,s,r,q,p
if(d<this.y)return B.Ii
w=C.a([],x.F)
for(v=this.e,u=v.length,t=d*1.4,s=0;s<v.length;v.length===u||(0,C.L)(v),++s){r=v[s]
q=r.d
p=r.c
w.push(new A.a4q(r.ga8u().a,r.ga8u().b,Math.atan2(q.c-r.ga8u().a,q.d-r.ga8u().b)+3.141592653589793,t+r.a,!1,!1,p,p.c))}return w}}
A.pG.prototype={}
A.bKv.prototype={
gMa(){var w,v=this,u=v.r
if(u===$){w=A.hAg(v.b)
v.r!==$&&C.bF()
v.r=w
u=w}return u},
ccz(){var w,v=this.a
A:{if("hospital"===v){w=B.cyt
break A}if("dmv"===v){w=B.dtl
break A}if("shop"===v){w=B.cYP
break A}if("school"===v){w=B.d7d
break A}if("firestation"===v){w=B.dmw
break A}if("tower"===v){w=B.dgE
break A}w=B.drk
break A}return w},
cHz(){var w,v=this.a
A:{if("hospital"===v){w=B.cyp
break A}if("dmv"===v){w=B.d9b
break A}if("shop"===v){w=B.d3J
break A}if("school"===v){w=B.dgo
break A}if("firestation"===v){w=B.ddo
break A}if("tower"===v){w=B.dvO
break A}w=B.cYi
break A}return w},
fw(d,e){var w,v,u,t,s,r,q,p=this,o=p.ax
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
t=p.c8m(q,e)}if(t!=null)p.B(e)
return t},
c8m(d,e){var w,v,u,t,s,r=this,q="The city is still loading.",p="The breaker panel on level "
switch(r.a){case"hospital":if(e==null)return q
if(d===0){w=e.gC7()
v=C.T(w).k("Z<1>")
u=C.C(new C.Z(w,new A.bKw(),v),v.k("M.E"))
if(u.length===0)return"The desk: nobody needs the hospital right now. "+e.x+" doses of medicine in stock."
return e.aDI(D.d.gI(u))}t=d-1
if(e.e[t].a<0)return"This bed is empty. Admit someone at the desk first."
return e.bkq(t)
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
return"You taught the class a lesson. +3 points. "+B.a4n[D.o.F(w==null?0:w,5)]}w=e==null?null:e.r
return"The library: "+B.a4n[D.o.F(w==null?1:w,5)]
case"firestation":if(d===0){if(e!=null)e.r+=2
return"You checked the equipment with the firefighters. +2 points. Keep the extinguishers charged."}w=e==null?null:e.r
return"Fire drill: "+B.a4n[D.o.F((w==null?0:w)+1,5)]
case"tower":if(d===0){r.w=!0
return"The elevator: choose your level (you are on level "+r.f+" of "+r.gMa()+")."}if(d===2){r.x=!0
return"The balcony on level "+r.f+": the whole town is below you."}if(r.c){r.cy=!0
return p+r.f+". This office has no power. Let us find the wiring fault."}return p+r.f+": every breaker is on and the office has power."
default:if(d===0){if(r.c){r.cy=!0
return"The breaker panel. This house has no power. Let us find the wiring fault."}return"The breaker panel: every breaker is on and the house has power."}return r.c?"The outlet is dead: there is no power in this house.":"The outlet works. Everything here is wired right."}},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this
g.ch=d
w=g.a
if(w==="cabin"){g.bFn()
return}v=C.a([],x.z)
u=new A.fg(v)
t=C.a([],x.E)
A:{if("hospital"===w){s=B.eGY
break A}if("shop"===w){s=B.eAM
break A}if("dmv"===w){s=B.eD9
break A}if("school"===w){s=B.eUl
break A}if("firestation"===w){s=B.eHZ
break A}if("tower"===w){s=new C.z(g.c?B.agr:B.ajc,B.afX)
break A}s=new C.z(g.c?B.agr:B.bqG,B.iz)
break A}r=s.a
u.f=-1
u.lU(B.ha2,B.h84,s.b,0.2,3)
u.f=0
u.x=$.dM=$.dM+1
u.hj(B.h7d,B.aXT,r,3)
u.x=0
u.x=$.dM=$.dM+1
u.hj(B.h5Z,B.abd,r,3)
u.x=0
s=w==="tower"
if(s){u.f=3
u.d=0.18
u.aG(B.aY4,B.abd,B.Ze)
u.d=1
u.f=0}else{u.x=$.dM=$.dM+1
u.hj(B.aY4,B.abd,r,3)
u.x=0}u.f=0
q=s&&g.f>1
p=$.dM+1
if(q){u.x=$.dM=p
u.hj(B.h8i,B.aXT,r,3)
u.x=0}else{u.x=$.dM=p
u.hj(new A.q(-94,70,320.6),new A.q(113.2,140,1.2),r,2)
u.x=0
u.x=$.dM=$.dM+1
u.hj(new A.q(94,70,320.6),new A.q(113.2,140,1.2),r,2)
u.x=0
u.x=$.dM=$.dM+1
u.aG(new A.q(0,102,320.6),new A.q(76,76,1.2),r)
u.x=0
u.x=$.dM=$.dM+1
u.aQ(B.hba,B.hgr,B.bde,0.5)
u.x=0}u.f=1
for(o=0;o<3;++o){n=B.dne[o]
u.aG(new A.q(n,78,0.6),B.hfZ,B.kG)
u.aQ(new A.q(n,78,0.8),B.h6g,B.i1,0.6)}for(q=!s,o=0;o<2;++o){m=B.cFP[o]
u.aG(new A.q(-149.6,78,m),B.aXK,B.kG)
u.aQ(new A.q(-149.2,78,m),B.aYm,B.i1,0.6)
if(q){u.aG(new A.q(149.6,78,m),B.aXK,B.kG)
u.aQ(new A.q(149.2,78,m),B.aYm,B.i1,0.6)}}u.aG(B.hbg,B.hgq,B.kG)
u.aG(B.hbr,B.h3R,D.bO)
u.f=2
u.r=!0
for(q=w!=="house2",p=w==="bighouse",o=0;o<3;++o){n=B.dnI[o]
for(l=0;l<2;++l){m=B.cFQ[l]
u.dv(new A.q(n,138,m),new A.q(n,122,m),0.5,D.iC,4)
k=(!q||p||s)&&g.c?D.hk:B.o8
u.ee(new A.q(n,120,m),5,k,3,6)}}switch(w){case"hospital":g.c_V(u,t,d)
break
case"shop":g.cwu(u,t)
break
case"dmv":g.bO2(u,t)
break
case"school":g.cua(u,t)
break
case"firestation":g.czI(u,t)
break
case"tower":g.cDQ(u,t)
break
default:u.f=1
u.aG(B.hhH,B.hcI,g.c?B.qa:B.agQ)
u.f=2
u.aQ(B.heZ,B.h1m,B.Yt,0.1)
u.aQ(B.hf_,B.h1n,B.M8,0.1)
u.aQ(B.h12,B.h5G,B.nX,0.2)
u.aQ(B.h7s,B.hhi,E.FC,0.4)
u.aG(B.h1N,B.h2o,B.ahC)
u.ee(B.her,10,B.Fc,3,6)
g.bbi(u,t)}u.f=1
if(s&&g.f>1)t.push(B.c1Z)
else{u.aG(B.hbH,B.h8U,D.cT)
t.push(B.c1Y)}if(d!=null){w=d.r
k=d.w
j=d.x
i=g.cx!=null?"   \ud83d\udce6 carrying":""
t.push(new A.hh(B.h_q,"\u2b50 "+w+"   \ud83c\udf5e "+k+"   \ud83d\udc8a "+j+i,D.N,0))}h=C.a([],x.a)
if(s){u.f=2
u.e=0
u.aQ(B.h1h,B.aXO,D.av,0.3)
u.aQ(B.h7y,B.aXO,D.av,0.3)
u.aQ(B.hbA,B.hg1,D.av,0.3)
w=x.o
h.push(new A.fq(C.a([B.h70,B.hc1,B.haY,B.hdP],w),0,new A.bKF(g),960,560,60,2,0,!1))
h.push(new A.fq(C.a([B.h4m,B.hhO,B.h3n,B.hfX],w),0,new A.bKG(g),960,560,60,2,0,!1))
h.push(new A.fq(C.a([B.hfJ,B.h_4,B.h6l,B.h93],w),0,new A.bKH(g),960,560,60,2,0,!1))}if((!q||p)&&!g.c)h.push(new A.fq(C.a([B.hcv,B.h8e,B.hb2,B.haX],x.o),0,new A.bKI(g),960,480,60,2,0,!1))
g.ay=new A.tU(v,B.Sq,t,h,null,0)},
rB(d,e,f,g,h){var w=d.f
d.f=1
d.dv(new A.q(e,0.2,f),new A.q(e,0.6,f),g,h,20)
d.f=w},
c_V(d,e,f){var w,v,u,t,s,r,q,p,o
d.f=1
d.aG(B.aWJ,B.h43,D.bB)
d.aG(B.aWJ,B.h1x,D.bB)
d.f=2
d.aQ(B.hfl,B.h6M,B.nX,0.15)
d.aQ(B.hfm,B.h75,D.bN,0.3)
d.aG(B.heo,B.h5V,D.aJ)
this.rB(d,-80,66,22,D.cp)
e.push(B.c24)
e.push(B.c1U)
for(w=0;w<2;++w)d.aG(new A.q(-105,8,B.cgm[w]),B.h5i,D.bs)
d.ee(B.h1U,9,B.Fc,3,6)
for(v=f!=null,u=0;u<3;++u){t=48+u*50
d.aG(new A.q(76,8,t),B.h6J,D.cq)
d.aG(new A.q(76,14,t),B.h6E,D.aP)
d.aG(new A.q(108,18,t),B.h1S,D.c)
s=v&&u<f.e.length?f.e[u]:null
if(s!=null&&s.a>=0){r=f.c
r===$&&C.c()
q=r[s.a]
r=s.b>70?D.be:D.c0
d.aG(new A.q(54,24,t),B.h46,r)
r=s.b>70
p=r?"cared for":"needs treatment"
r=r?D.ej:D.bB
e.push(new A.hh(new A.q(76,40,t),q.a.b+"  "+p,r,0))}else e.push(new A.hh(new A.q(76,30,t),"Free bed "+(u+1),D.bs,0))
r=t-2
o=d.f
d.f=1
d.dv(new A.q(20,0.2,r),new A.q(20,0.6,r),16,D.aA,20)
d.f=o}},
bO2(d,e){var w,v,u,t,s
d.f=2
d.r=!0
d.x=$.dM=$.dM+1
d.aQ(B.aWz,B.h23,D.bs,0.15)
d.aQ(B.aWC,B.h25,D.bN,0.3)
d.aQ(B.heT,B.h3b,D.av,0.3)
d.aQ(B.he0,B.h81,D.b8,0.5)
d.aG(B.heS,B.h5X,D.aK)
d.aG(B.h3Y,B.h2n,D.bt)
d.x=0
d.x=$.dM=$.dM+1
d.aG(B.aXg,B.aWN,D.cr)
d.aG(B.aXc,B.aWS,D.bl)
d.ee(B.aXd,5.5,B.afL,5,8)
d.ee(B.aXe,5.7,D.av,3,8)
d.x=0
d.x=$.dM=$.dM+1
d.aG(B.hev,B.h4t,D.aP)
for(w=0;w<3;++w){v=90+w*30
d.aE5(new A.q(-146,62,v),B.h2N,[D.bB,D.bt,D.bl][w],0)
d.aG(new A.q(-145.6,62,v),B.hfT,D.c)}d.aG(B.h27,B.h4s,D.fU)
d.aG(B.hay,B.hgI,D.c)
d.aG(B.h9I,B.hfx,D.bB)
d.x=0
for(u=0;u<4;++u){t=B.dnf[u]
d.x=$.dM=$.dM+1
d.aG(new A.q(t,9,150),B.h3i,D.bl)
d.aG(new A.q(t,17,160),B.h3c,D.bl)
d.aG(new A.q(t-8,4,150),B.aX7,D.aK)
d.aG(new A.q(t+8,4,150),B.aX7,D.aK)
d.x=0}d.x=$.dM=$.dM+1
d.aG(B.h0u,B.h67,D.bM)
d.aQ(B.h_y,B.h57,D.ax,0.4)
d.aQ(B.hf4,B.h3y,D.du,0.5)
for(u=0;u<2;++u){t=E.aBa[u]
for(s=0;s<2;++s){v=B.cgf[s]
d.dv(new A.q(t,9,v-1.5),new A.q(t,9,v+1.5),5,D.av,8)}}d.x=0
this.rB(d,0,78,24,D.aJ)
e.push(B.c21)
e.push(B.c1V)
e.push(B.c22)},
aVy(a5,a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=a6*128
A:{if(1===a7){w=B.dcq
break A}if(2===a7){w=B.ddO
break A}w=B.d7u
break A}a5.x=$.dM=$.dM+1
a5.aG(new A.q(a6*148,40,120),B.h4X,B.afI)
for(v=0;v<2;++v)a5.aG(new A.q(a4,40,B.cK2[v]),B.h4E,B.afI)
a5.aG(new A.q(a4,4,120),B.h4F,B.bjZ)
for(u=0;u<4;++u)a5.aQ(new A.q(a4,11+u*18,120),B.h4B,B.btk,0.1)
for(t=a7===0,s=w.length,r=a6*2.7,u=0;u<4;++u){q=12+u*18
for(p=q+6.6,o=q+3.2,n=u*7,m=q+10,l=q+12.5,k=q+7,j=q+8,i=q+2.5,h=q+5.5,g=0;g<9;++g){f=76+g*11
for(e=n+g*3,d=u+g+a7,a0=0;a0<2;++a0){a1=a6*(114+a0*14)
a2=w[D.o.F(e+a0*5+a7,s)]
switch(D.o.F(d+a0,4)){case 0:a5.dm(new A.q(a1,q,f),new A.q(a1,j,f),3.2,a2,0.3,8)
a5.La(new A.q(a1,i,f),new A.q(a1,h,f),3.3,D.c,!1,8)
break
case 1:a5.aQ(new A.q(a1,k,f),B.h8K,a2,0.1)
a5.aG(new A.q(a1-r,j,f),B.hcm,D.c)
break
case 2:a5.dm(new A.q(a1,q,f),new A.q(a1,m,f),2.4,a2,0.45,8)
a5.dv(new A.q(a1,m,f),new A.q(a1,l,f),1.2,D.c,6)
break
default:a3=t?B.btr:a2
a5.aQ(new A.q(a1,o,f),B.hbK,a3,0.05)
a3=t?B.bgs:D.c
a5.aG(new A.q(a1,p,f),B.h7n,a3)}}}}a5.x=0},
aUv(d,e){var w,v,u,t,s,r,q,p
d.x=$.dM=$.dM+1
d.aQ(new A.q(e,32,11),B.h5j,D.bO,0.3)
d.aG(new A.q(e,33,22.4),B.h58,D.bo)
for(w=e-21,v=0;v<3;++v){u=v*17
d.aG(new A.q(e,15+u,21),B.h53,D.bM)
for(t=16+u,u=27+u,s=v*2,r=0;r<7;++r){q=w+r*7
d.dm(new A.q(q,t,21.6),new A.q(q,u,21.6),2.2,B.d1W[D.o.F(r+s,6)],0.5,6)}}d.x=0
p=d.f
d.f=3
d.d=0.2
d.aG(new A.q(e,33,23.2),B.hhq,B.Ze)
d.d=1
d.f=p},
cwu(d,e){var w,v,u,t,s,r,q,p,o,n=this,m=n.b.b==="gasstation"
d.f=2
d.r=!0
d.x=$.dM=$.dM+1
d.aQ(B.aWz,B.h1M,B.nX,0.15)
d.aQ(B.aWC,B.h1O,D.bN,0.3)
d.aG(B.h8x,B.hgS,B.bty)
d.aQ(B.heN,B.h30,D.e9,0.3)
d.aQ(B.heP,B.h2p,D.b8,0.5)
d.aG(B.h0l,B.h1y,D.av)
for(w=0;w<6;++w)d.aG(new A.q(14+w*7.5,33,47),B.h5y,B.dt2[D.o.F(w,4)])
d.x=0
d.x=$.dM=$.dM+1
d.aG(B.aXg,B.aWN,D.cr)
d.aG(B.aXc,B.aWS,D.cT)
d.aG(B.hbT,B.ha1,D.vV)
d.ee(B.aXd,5.5,B.afL,5,8)
d.ee(B.aXe,5.7,B.bhC,3,8)
d.x=0
n.aVy(d,-1,0)
n.aVy(d,1,m?2:1)
n.aUv(d,-104)
n.aUv(d,104)
for(v=[B.eBa,B.eQw],u=0;u<2;++u){t=v[u]
s=t.a
r=t.b
d.x=$.dM=$.dM+1
d.aG(new A.q(s,5,170),B.h4i,B.ahC)
d.aG(new A.q(s,11,160),B.h4k,B.bkL)
for(t=s-13.5,q=J.a6(r),w=0;w<4;++w)for(p=t+w*9,o=0;o<3;++o)d.ee(new A.q(p,12.5,163+o*7.5),4.2,q.h(r,D.o.F(w+o,3)),4,6)
d.x=0}d.x=$.dM=$.dM+1
d.aG(B.aWu,B.h1F,m?D.bB:D.cT)
d.aG(B.hen,B.aX4,D.aA)
d.aG(B.h1H,B.aX4,m?D.bo:D.aJ)
d.x=0
n.rB(d,-64,120,24,D.bt)
n.rB(d,64,120,24,D.bq)
n.rB(d,0,84,22,D.bf)
e.push(new A.hh(B.h_k,m?"\u26fd NGMY Gas shop":"\ud83d\uded2 NGMY Mart",D.N,0))
e.push(B.c1W)
e.push(new A.hh(B.h6I,m?"\ud83d\udee2 For the car":"\ud83d\udc8a Medicine and health",D.iV,0))
e.push(B.c25)
e.push(B.c1X)
e.push(B.c26)},
cua(d,e){var w,v,u,t,s
d.aQ(B.h0Y,B.hi4,D.dY,0.1)
d.aG(B.hgF,B.hd9,B.bpc)
d.aQ(B.h_A,B.h1V,B.nX,0.15)
for(w=0;w<4;++w){v=B.dfi[w]
u=v.a
t=v.b
for(s=0;s<2;++s){v=u+B.a5c[s]
d.aG(new A.q(v,10,t),B.h34,B.iz)
d.aG(new A.q(v,5,t),B.h3E,D.bn)}}this.rB(d,0,80,24,D.bt)
this.rB(d,90,56,20,D.cp)
e.push(B.c1S)
e.push(B.c2_)},
czI(d,e){var w,v,u,t,s
d.aQ(B.h_t,B.h2C,D.bB,0.3)
d.aQ(B.hf9,B.h5E,D.bB,0.3)
for(w=0;w<2;++w){v=B.dnC[w]
for(u=0;u<2;++u){t=B.cun[u]
d.dv(new A.q(v,6,t-1.5),new A.q(v,6,t+1.5),8,D.nk,10)}}for(s=0;s<5;++s)d.aG(new A.q(-142,30,110+s*18),B.h1z,D.al)
d.dv(B.h1D,B.h1E,2,D.bt,6)
this.rB(d,-60,130,24,D.aA)
this.rB(d,80,56,20,D.cp)
e.push(B.c1Q)
e.push(B.c20)},
cDQ(d,e){var w,v,u,t,s,r,q,p,o,n=this
d.f=1
d.aG(B.hgk,B.ha7,B.dul[D.o.F(n.f,5)])
d.f=2
d.b=19502
d.aG(B.h7S,B.h6N,D.N)
d.aQ(B.h5q,B.aXs,D.bs,0.5)
d.aQ(B.h3L,B.aXs,D.bs,0.5)
d.aQ(B.h4f,B.h1p,D.bs,0.5)
d.e=16
d.aQ(B.h19,B.h7g,D.b8,0.4)
d.aG(B.h8J,B.h4x,D.av)
d.aG(B.he_,B.h1w,D.e9)
d.ee(B.h8r,2,D.bt,3,5)
d.ee(B.h4T,2,D.bf,3,5)
d.b=d.e=0
n.rB(d,0,70,26,D.aJ)
for(w=0;w<3;++w){v=B.cYn[w]
u=v.a
t=v.b
d.aQ(new A.q(u,15,t),B.h4H,B.nX,0.2)
d.aG(new A.q(u-19,7,t),B.aXj,D.iC)
d.aG(new A.q(u+19,7,t),B.aXj,D.iC)
d.aQ(new A.q(u,24,t-4),B.h28,E.FC,0.5)
d.aG(new A.q(u,9,t+18),B.h2f,D.cr)
d.aG(new A.q(u,16,t+25),B.h2a,D.cr)}n.rB(d,105,100,26,D.bf)
d.d=0.3
d.f=3
d.aG(new A.q(144,14,100),B.h4U,B.Ze)
d.d=1
d.f=2
for(w=0;w<5;++w)d.aQ(new A.q(144,14,B.d5t[w]),B.hao,D.dn,0.5)
d.ee(B.h1X,10,B.Fc,3,6)
d.aG(B.h1Q,B.h40,B.nX)
s=-(n.f*22)
d.f=-1
d.aG(new A.q(520,s-1,105),B.h73,B.XG)
d.aG(B.h68,B.h3H,B.i1)
d.f=1
for(v=n.b.a,r=v*7,q=0;q<15;++q){p=30+D.o.F(r+q*13,90)
o=B.daL[D.o.F(v+q,4)]
d.aG(new A.q(215+D.o.F(q,5)*80,s+p/2,-60+D.o.ao(q,5)*135),new A.q(38,p,38),o)}e.push(new A.hh(B.h_i,"\ud83c\udfe2 LEVEL "+n.f+" of "+n.gMa(),D.dF,19502))
e.push(B.c1R)
e.push(B.c1T)
n.bbi(d,e)},
bFn(){var w,v,u,t,s,r,q,p,o,n=C.a([],x.z),m=new A.fg(n)
m.f=-1
m.aQ(B.h9t,B.hgv,D.bs,0.3)
m.f=0
m.x=$.dM=$.dM+1
m.aQ(B.heV,B.aX3,B.agi,0.4)
m.x=0
m.x=$.dM=$.dM+1
m.aQ(B.h4h,B.aX3,B.agi,0.4)
m.x=0
m.f=1
m.aG(B.h_f,B.h6e,D.aN)
m.f=2
m.r=!0
for(w=0;w<2;++w)m.aQ(new A.q(B.aBc[w],40,38),B.h90,D.bM,0.7)
m.aQ(B.h1a,B.hdt,D.vQ,0.2)
for(w=0;w<2;++w)m.aQ(new A.q(B.dnn[w],45,80),B.h2A,D.aK,0.3)
m.aQ(B.h17,B.h6d,D.aK,0.3)
m.aG(B.h0N,B.h4d,D.al)
m.aQ(B.hgR,B.aYb,D.av,0.3)
m.aQ(B.h9P,B.aYb,D.av,0.3)
v=this.as
D.d.aa(v)
u=x.o
v.push(new A.fq(C.a([B.haC,B.h8H,B.hcl,B.hg7],u),0,new A.bKx(this),520,230,6,2,0,!1))
v.push(new A.fq(C.a([B.h7e,B.h7w,B.hfW,B.hcQ],u),0,new A.bKy(),720,600,30,2,0,!1))
v.push(new A.fq(C.a([B.haz,B.hdZ,B.hby,B.ha6],u),0,new A.bKz(),720,600,30,2,0,!1))
m.f=-1
m.lU(B.hhk,B.hh7,B.afX,0.2,3)
m.f=0
for(w=0;w<3;++w){t=B.d5X[w].a
s=t[0]
r=t[1]
q=t[2]
p=t[3]
m.x=$.dM=$.dM+1
m.hj(new A.q(s,70,r),new A.q(q,140,p),B.ajc,3)
m.x=0}m.f=1
m.aG(B.h_v,B.h3T,B.bte)
m.aQ(B.h_6,B.hgU,D.vQ,0.2)
m.f=1
for(w=0;w<2;++w){s=B.dnE[w]
m.aQ(new A.q(s,75,278.6),B.hhx,D.av,0.3)
t=s+42
o=s-42
v.push(new A.fq(C.a([new A.q(t,100,277.7),new A.q(o,100,277.7),new A.q(o,50,277.7),new A.q(t,50,277.7)],u),0,new A.bKA(s),720,420,0.6,1,0,!1))}m.aQ(B.h8j,B.h9T,E.iU,0.3)
v.push(new A.fq(C.a([B.h9n,B.hcH,B.h9B,B.hax],u),0,new A.bKB(),900,160,0.6,1,0,!1))
v=C.C(v,x.R)
this.ay=new A.tU(n,B.Sq,B.zy,v,null,0)},
bbi(d,e){var w,v,u,t,s,r,q,p,o=this,n="dead, tap to fix it"
d.b=19500
d.aQ(B.heu,B.h5x,B.XK,0.5)
for(w=0;w<4;++w){v=o.c&&w===0?D.cd:B.Zi
d.aG(new A.q(-144.2,62-w*6,45),B.h9d,v)}d.b=0
o.rB(d,-100,100,22,o.c?D.ax:D.bf)
o.rB(d,90,100,22,D.cp)
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
d.aG(B.h4R,B.h2S,o.c?D.ax:D.bf)
d.b=19501
d.aG(B.h76,B.h7L,t?D.bf:D.ax)
d.aG(B.hfc,B.h89,s?D.bf:D.ax)
d.aG(B.h9f,B.hbp,r?D.bf:D.ax)
d.d=1
d.aQ(B.hea,B.h8o,B.MH,0.25)
for(q=0;q<2;++q)for(u=26+F.hq[q]*3.4,p=0;p<2;++p)d.aG(new A.q(95+B.Rr[p],u,2.6),B.had,B.ahn)
d.aQ(B.hgm,B.hc8,B.MH,0.25)
d.aG(new A.q(-60,s?52:48,2.8),B.h3G,B.aji)
d.b=0
d.f=2
if(o.c)v=v.length===0?"\u26a1 Breaker panel: tap to switch the power on":"\u26a1 Breaker panel: still to fix: "+D.d.aH(v,", ")
else v="\u26a1 Breaker panel: all fine"
e.push(new A.hh(B.het,v,o.c?D.bB:D.ej,19500))
v=new A.bKC(o)
u=t?"\ud83d\udd0c Outlets: fixed":"\ud83d\udd0c Outlet: "+C.w(v.$2(D.a3d,n))
e.push(new A.hh(B.h77,u,t?D.ej:D.bB,19501))
u=s?"\ud83d\udca1 Switch: fixed":"\ud83d\udca1 Switch: "+C.w(v.$2(B.csd,"no power, tap to fix it"))
e.push(new A.hh(B.hfd,u,s?D.ej:D.bB,19501))
v=r?"\ud83d\udca1 Ceiling light: fixed":"\ud83d\udca1 Ceiling light: "+C.w(v.$2(B.ckK,n))
e.push(new A.hh(B.h_j,v,r?D.ej:D.bB,19501))
if(o.c)e.push(B.c1P)},
cOH(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=x.z,i=C.a([],j),h=new A.fg(i),g=k.a,f=g==="tower"
if(f||g==="cabin"){w=C.a([],j)
v=new A.fg(w)
if(f){v.e=16
for(u=0;u<2;++u)v.aQ(new A.q(F.hq[u]*(24+21*k.y),42,6.6),B.hfV,D.aP,0.7)}else{v.e=16
for(u=0;u<2;++u)v.aQ(new A.q(F.hq[u]*(9+18*k.y),40,78.6),B.h2z,D.aN,0.7)}D.d.v(i,w)}switch(g){case"shop":A.wQ(h,B.erE,d,B.Jr,!1,0,D.b7)
break
case"hospital":A.wQ(h,B.erI,d,B.Tv,!1,0,D.bP)
t=D.k.F(d*12,220)
g=t<110
f=g?t:220-t
g=g?0:3.141592653589793
A.wQ(h,A.atV(!1,0,-1,"",!1,0,"",-1,t/12,!1,!1,!1,0,!1,!0,6,g,40+f),d,B.Jr,!1,0,D.bO)
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
A.wQ(new A.fg(f),B.erH,d,p,!1,0,p.c)
D.d.v(i,A.nE(f,-1.5707963267948966,-1.5707963267948966,new A.q(46,27,48+r*50)))}++r}}break
case"school":A.wQ(h,B.erJ,d,B.Tv,!1,0,D.bl)
for(u=0;u<3;++u){g=B.d93[u]
A.wQ(h,new A.y6(0,g.a,g.b,3.141592653589793,!1,!1,!1,!1,!1,0,!1,!1,"","",-1,0,-1,0),d,B.Jr,!1,0,g.c)}break
case"firestation":A.wQ(h,B.erF,d,B.Jr,!1,0,D.bB)
A.wQ(h,B.erG,d,B.Tv,!1,0,D.aA)
break
default:break}g=k.at
g===$&&C.c()
f=g.f
w=g.r
o=g.w
n=g.x
m=g.y
l=g.z&&n
A.wQ(h,A.atV(!1,0,-1,"",!1,g.Q,"",-1,m,!1,!1,!1,0,l,n,f,o,w),d,e,!0,0,null)
if(k.cx!=null){j=C.a([],j)
new A.fg(j).aG(new A.q(g.f+Math.sin(g.w)*9,48+g.Q,g.r+Math.cos(g.w)*9),B.aWT,B.iz)
D.d.v(i,j)}return i},
gda(d){return this.e}}
A.Fr.prototype={}
A.P1.prototype={
gUs(){var w,v=this
if(!v.f)return"has died"
if(v.r>=0)return"in hospital"
if(v.c<30)return"in danger"
if(v.e)return"sick"
w=v.b
if(w>80)return"starving"
if(w>55)return"hungry"
if(v.d<40)return"unhappy at home"
return"fine"},
gaE0(d){var w,v=this.gUs()
A:{if("has died"===v){w="\ud83d\udd6f"
break A}if("in hospital"===v){w="\ud83c\udfe5"
break A}if("in danger"===v){w="\ud83c\udd98"
break A}if("sick"===v){w="\ud83e\udd12"
break A}if("starving"===v||"hungry"===v){w="\ud83c\udf7d"
break A}if("unhappy at home"===v){w="\ud83d\ude1f"
break A}w="\ud83d\ude42"
break A}return w}}
A.I7.prototype={}
A.M0.prototype={}
A.aU8.prototype={
bzG(d,e){var w,v=C.a([],x.fP)
for(w=0;w<7;++w)v.push(new A.P1(B.CS[w]))
this.c=v
v[1].b=55
v[4].b=40},
gC7(){var w,v,u,t=C.a([],x.fP),s=this.c
s===$&&C.c()
w=s.length
v=0
for(;v<s.length;s.length===w||(0,C.L)(s),++v){u=s[v]
if(u.f)t.push(u)}return t},
gcNC(){var w=this.c
w===$&&C.c()
return new C.Z(w,new A.bLm(),C.T(w).k("Z<1>")).gL(0)},
PT(d){var w=this.f
D.d.c6(w,0,d)
if(w.length>12)w.pop()},
aDJ(a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this
a1.as+=a3
for(w=a1.gC7(),v=w.length,u=-0.6*a3,t=0.8*a3,s=0.2*a3,r=a1.b,q=0.012*a3,p=a1.f,o=0.15*a3,n=0;n<w.length;w.length===v||(0,C.L)(w),++n){m=w[n]
l=a4.d
l===$&&C.c()
k=m.a
j=l[k.c]
i=j.gkR()
l=k.d
if(l>=0)h=!a4.d[l].gjT()
else{l=j.c
h=(l==="bathroom"||l==="kitchen")&&!j.gjT()}if(m.r<0){m.b=Math.min(100,m.b+s)
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
m.c=l}}if(l<=0)a1.aSz(m)}}for(w=a1.e,v=1.2*a3,u=2.2*a3,d=0;d<w.length;++d){a0=w[d]
t=a0.a
if(t<0)continue
s=a1.c
s===$&&C.c()
m=s[t]
if(!m.f){a0.a=-1
continue}t=a0.b=Math.max(0,a0.b-a3)
if(t>30)a0.c=Math.min(100,a0.c+u)
else if(t<=0)if((m.c-=v)<=0){a1.aSz(m)
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
a1.NG(a4)
if((a1.at-=a3)<=0){a1.at=60+r.ag()*50
a1.cJ0(a4)}},
aSz(d){var w
d.f=!1
d.c=0
w=d.r
if(w>=0)this.e[w].a=-1
d.r=-1
D.d.bs(this.d,new A.bLj(d))
this.PT(d.a.b+" has died. Keep up with everybody's needs: food, medicine and a home that works.")},
aWm(d,e){return D.d.b3(this.d,new A.bLk(d,e))},
NG(d){var w,v,u,t,s,r,q,p,o,n=this,m=n.d,l=C.C(m,x.fC),k=l.length,j=n.f,i=0
for(;i<l.length;l.length===k||(0,C.L)(l),++i){w=l[i]
v=B.CS[w.b]
u=w.c==="power"
if(u){t=d.d
t===$&&C.c()
s=t[v.c].gkR()}else{t=v.d
r=d.d
if(t>=0){r===$&&C.c()
t=r[t].gjT()
s=t}else{r===$&&C.c()
t=r[v.c].gjT()
s=t}}if(s){D.d.W(m,w)
t=w.e
n.r=n.r+t;++n.y
u=u?"power is back":"leak is fixed"
D.d.c6(j,0,v.b+"'s "+u+". +"+t+" points. Thank you!")
if(j.length>12)j.pop()}}for(l=n.gC7(),k=l.length,u=n.b,i=0;i<l.length;l.length===k||(0,C.L)(l),++i){q=l[i]
if(m.length>=4)break
t=d.d
t===$&&C.c()
r=q.a
p=t[r.c]
if(!p.gkR()&&!n.aWm(r.a,"power")){m.push(new A.I7(n.Q++,r.a,"power",B.d1J[u.ap(3)],15))
D.d.c6(j,0,r.b+" is calling for help: no power.")
if(j.length>12)j.pop()}t=r.d
o=t>=0?d.d[t]:p
t=o.c
if((t==="bathroom"||t==="kitchen")&&!o.gjT()&&!n.aWm(r.a,"leak")&&m.length<4){m.push(new A.I7(n.Q++,r.a,"leak",B.daA[u.ap(3)],15))
D.d.c6(j,0,r.b+" is calling for help: a leak.")
if(j.length>12)j.pop()}}},
cJ0(d){var w,v,u,t,s,r,q=this
if(q.d.length>=3||q.gC7().length===0)return
w=q.b
v=q.gC7()[w.ap(q.gC7().length)]
u=d.d
u===$&&C.c()
t=v.a
s=u[t.c]
t=t.d
r=t>=0?u[t]:s
u=r.c
if((u==="bathroom"||u==="kitchen")&&r.gjT()&&w.h6()){r.ch=!0
r.fr=null}else if(s.gkR()){s.ay=!0
s.CW=null
s.fy=!1
s.fx.aa(0)}else return
q.NG(d)},
bfg(d){var w,v,u,t=this
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
t.PT(u)
return u},
aL9(d){var w,v,u=this
if(!d.f)return d.a.b+" has died."
if(!d.e)return d.a.b+" is not sick."
w=u.x
if(w<=0)return y.D
u.x=w-1
d.e=!1
d.c=Math.min(100,d.c+20)
u.r+=3
v=d.a.b+" took the medicine and is better. +3 points."
u.PT(v)
return v},
aDI(d){var w,v,u,t
if(!d.f)return d.a.b+" has died."
if(d.r>=0)return d.a.b+" is already in hospital."
if(!d.e&&d.c>60)return d.a.b+" is not ill enough for the hospital."
w=this.e
v=D.d.bh(w,new A.bLl())
if(v<0)return"The hospital is full. Treat the patients first, they go home when they are better."
w=w[v]
u=d.a
w.a=u.a
w.b=100
w.c=0
d.r=v
t=u.b+" is in bed "+(v+1)+" of the hospital. Keep up with their care."
this.PT(t)
return t},
bkq(d){var w,v,u=this,t=u.e[d],s=t.a
if(s<0)return"This bed is empty."
if(t.b>70)return"The patient is cared for already."
w=u.x
if(w<=0)return y.D
u.x=w-1
t.b=100;++u.r
w=u.c
w===$&&C.c()
v=w[s].a.b+" was treated. +1 point."
u.PT(v)
return v},
aEd(d){var w,v=this
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
cSG(d){return d.r<0},
bfr(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=C.a([],x.e3),e=d.d
e===$&&C.c()
w=e[a0]
if(w.c!=="outside")return f
v=new A.bLo(new A.bLq(w))
for(e=D.d.gaf(this.gC7()),u=new C.f2(e,this.gcSF()),t=this.d,s=0;u.C();){r=e.gS(0)
q=D.d.b3(t,new A.bLn(r))
p=v.$2(r,s).a
o=p[0]
n=p[1]
m=p[2]
l=p[3]
k=p[4]
p=r.a
j=q?0.4:m
i=q?"\ud83d\udcde ":""
h=r.gaE0(0)
r.gUs()
r=q?"":l
g=q?"":k
f.push(new A.aa3(p.a,a0,o,n,j,p.e,i+p.b+" "+h,q,0,r,g));++s}return f},
cZy(a2){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.r,j=l.w,i=l.x,h=l.y,g=l.z,f=l.as,e=l.Q,d=x.ez,a0=C.a([],d),a1=l.c
a1===$&&C.c()
w=a1.length
v=x.N
u=x.aU
t=0
for(;t<a1.length;a1.length===w||(0,C.L)(a1),++t){s=a1[t]
a0.push(C.H(["hunger",s.b,"health",s.c,"comfort",s.d,"sick",s.e,"alive",s.f,"bed",s.r],v,u))}a1=C.a([],x.f4)
for(w=l.e,r=w.length,q=x.di,t=0;t<w.length;w.length===r||(0,C.L)(w),++t){p=w[t]
a1.push(C.H(["res",p.a,"care",p.b,"heal",p.c],v,q))}d=C.a([],d)
for(w=l.d,r=w.length,t=0;t<w.length;w.length===r||(0,C.L)(w),++t){o=w[t]
d.push(C.H(["id",o.a,"res",o.b,"kind",o.c,"msg",o.d,"reward",o.e,"age",o.f],v,u))}w=x.y
u=C.U(v,w)
for(r=a2.gqU(),q=r.length,t=0;t<r.length;r.length===q||(0,C.L)(r),++t){n=r[t]
u.n(0,""+n.a,n.gkR())}w=C.U(v,w)
for(r=D.d.gaf(a2.gqU()),q=new C.f2(r,new A.bLr());q.C();){m=r.gS(0)
w.n(0,""+m.a,m.gjT())}return C.H(["v",1,"seed",l.a,"points",k,"food",j,"medicine",i,"served",h,"saved",g,"clock",f,"nextCall",e,"res",a0,"beds",a1,"calls",d,"wired",u,"plumbed",w],v,x.A)},
CX(d,e){return this.box(0,e)},
box(d,e){var w=0,v=C.j(x.H),u=1,t=[],s=this,r,q,p,o
var $async$CX=C.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return C.b(C.az(),$async$CX)
case 6:r=g
q=C.dO(s.cZy(e),x.N,x.A)
J.aJ(q,"at",Date.now())
w=7
return C.b(r.ar("String","ngmy_community_v1",D.X.aq(q,null)),$async$CX)
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
return C.i($async$CX,v)}}
A.apN.prototype={
R(){return new A.bkX()}}
A.bkX.prototype={
gbka(){var w=this.r
return w===$?this.r=this.a.c:w},
Z(){this.a2()
this.a_7()},
a_7(){return this.c2R()},
c2R(){var w=0,v=C.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$a_7=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:m={}
w=3
return C.b(A.aUa(),$async$a_7)
case 3:l=e
if(t.c==null){w=1
break}m.a=null
if(l!=null){s=J.a6(l)
r=C.aK(s.h(l,"seed"))
q=r==null?null:D.k.N(r)
if(q==null)q=1
r=$.Ed
if((r==null?null:r.b)===q){r.toString
t.e=r}else{r=A.aWC(q)
t.e=$.Ed=r
A.hfo(r,l)}m.a=A.h1v(l)
r=Date.now()
s=C.aK(s.h(l,"at"))
s=s==null?null:D.k.N(s)
p=D.k.E((r-(s==null?Date.now():s))/1000*0.15,0,90)
while(p>0){o=p>5?5:p
s=m.a
r=t.e
r===$&&C.c()
s.aDJ(0,o,r)
p-=o}}else{s=$.Ed
if(s==null)s=$.Ed=A.aWC(D.o.F(Date.now(),1e5))
t.e=s
s=s.b
n=A.h1u(s,s)
m.a=n
n.NG(t.e)}$.a4i=m.a
t.m(new A.dSS(m,t))
t.f=C.dh(D.fB,new A.dST(t))
case 1:return C.h(u,v)}})
return C.i($async$a_7,v)},
c8r(){var w,v,u,t=this,s=t.d
if(s==null||t.c==null)return
w=s.f
v=w.length===0?"":D.d.gI(w)
u=t.e
u===$&&C.c()
s.aDJ(0,1,u)
if(w.length!==0&&D.d.gI(w)!==v)t.J7(D.d.gI(w))
if(++t.y%8===0)s.CX(0,t.e)
t.m(new A.dT4())},
q(){var w,v=this,u=v.f
if(u!=null)u.a4(0)
u=v.x
if(u!=null)u.a4(0)
u=v.d
if(u!=null){w=v.e
w===$&&C.c()
u.CX(0,w)}v.a1()},
J7(d){var w=this,v=w.x
if(v!=null)v.a4(0)
w.m(new A.dSZ(w,d))
w.x=C.cG(D.ua,new A.dT_(w))},
ac0(d){return this.bUo(d)},
bUo(d){var w=0,v=C.j(x.H),u,t=this,s,r,q
var $async$ac0=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:q=B.CS[d.b]
if(d.c==="power")s=q.c
else{r=q.d
s=r>=0?r:q.c}r=t.e
r===$&&C.c()
r.e=s
r=t.c
r.toString
w=3
return C.b(C.a5(r,!1).cc(C.eh(new A.dSO(),!1,null,x.H)),$async$ac0)
case 3:if(t.c==null){w=1
break}r=t.d
if(r!=null)r.NG(t.e)
r=t.d
if(r!=null)r.CX(0,t.e)
t.m(new A.dSP())
case 1:return C.h(u,v)}})
return C.i($async$ac0,v)},
akj(d){return this.cGq(d)},
cGq(d){var w=0,v=C.j(x.H),u,t=this,s
var $async$akj=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:s=t.e
s===$&&C.c()
s.e=d.a.c
s=t.c
s.toString
w=3
return C.b(C.a5(s,!1).cc(C.eh(new A.dT7(),!1,null,x.H)),$async$akj)
case 3:if(t.c==null){w=1
break}s=t.d
if(s!=null)s.NG(t.e)
t.m(new A.dT8())
case 1:return C.h(u,v)}})
return C.i($async$akj,v)},
a_8(d,e){var w=null,v=e.j(0.18),u=C.m(14),t=C.J(e.j(0.7),D.r,1)
return C.p(w,C.d(d,w,w,w,w,w,w,C.l(w,w,e,w,w,w,w,w,w,w,w,12.5,w,w,D.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),D.f,w,w,new C.o(v,w,t,u,w,w,D.n),w,w,w,w,N.akp,w,w,w)},
WH(d,e,f){var w=null
return new C.D(D.nr,C.B(C.a([new C.a4(62,w,C.d(d,w,w,w,w,w,w,A7.aa4,w,w,w),w),C.E(C.bx(C.m(6),C.kj(D.bz,w,w,8,w,D.k.E(e/100,0,1),new C.lH(f,x.dw)),D.ap),1)],x.p),D.m,w,D.e,D.i,0,w,w),w)},
PU(d,e,f){var w=null,v=e==null,u=v?D.dr:f.j(0.22),t=C.m(12),s=C.J(v?D.aX:f,D.r,1)
return C.aA(w,C.p(w,C.d(d,w,w,w,w,w,w,C.l(w,w,v?D.bU:f,w,w,w,w,w,w,w,w,12.5,w,w,D.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),D.f,w,w,new C.o(u,w,s,t,w,w,D.n),w,w,w,w,D.nt,w,w,w),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,e,w,w,w,w,w,w,!1,D.a3)},
aey(d,e){return this.PU(d,e,D.aA)},
PV(d,e){var w=null,v=C.a([e.j(0.1),B.FH],x.O),u=C.m(18)
return C.p(w,d,D.f,w,w,new C.o(w,w,C.J(e.j(0.5),D.r,1),u,w,new C.a9(D.b0,D.b6,D.x,v,w,w),D.n),w,w,w,D.d1,D.bg,w,w,w)},
c8n(d){return this.PV(d,D.aX)},
b_l(d,e,f){var w,v=null,u=this.gbka()===d,t=u?D.aA.j(0.22):D.c.j(0.06),s=C.m(14),r=u?D.aA:D.aX
r=C.J(r,D.r,u?2:1)
w=f>0?e+" ("+f+")":e
return C.E(C.aA(v,C.p(v,C.as(C.d(w,v,v,v,v,v,v,C.l(v,v,u?D.aA:D.ac,v,v,v,v,v,v,v,v,12.5,v,v,D.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,v),D.f,v,v,new C.o(t,v,r,s,v,v,D.n),v,v,v,D.jA,D.jU,v,v,v),D.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new A.dT6(this,d),v,v,v,v,v,v,!1,D.a3),1)},
axR(d,e){return this.b_l(d,e,0)},
bH2(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=d.d
if(l.length===0)return new C.D(D.eu,C.x(B.djL,D.m,m,D.e,D.i,0,D.p),m)
w=x.p
v=C.a([],w)
for(u=l.length,t=0;t<l.length;l.length===u||(0,C.L)(l),++t){s=l[t]
r=s.c==="power"
q=r?D.bt:D.cp
p=B.CS[s.b]
o=r?"\u26a1 Power":"\ud83d\udeb0 Leak"
r=r?D.bt:D.cp
v.push(n.PV(C.x(C.a([new C.ca(D.aM,D.e,D.i,D.m,m,D.p,m,0,C.a([new A.acO(p.e,44,m),D.as,new C.by(1,D.ba,new C.y(p.b,m,D.ht,m,m,m,m,m,m,m,m,m),m),n.a_8(o+"  +"+s.e,r)],w),m),D.Q,new C.y('"'+s.d+'"',m,B.fqf,m,m,m,m,m,m,m,m,m),D.W,new C.bM(D.a8,m,m,n.aey("\ud83d\udd27 Go and fix it",new A.dSN(n,s)),m)],w),D.E,m,D.e,D.i,0,D.p),q))}return C.x(v,D.m,m,D.e,D.i,0,D.p)},
c8p(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=x.p,k=C.a([],l),j=d.c
j===$&&C.c()
w=j.length
v=0
for(;v<j.length;j.length===w||(0,C.L)(j),++v){u=j[v]
t=u.f
if(!t)s=D.aX
else s=u.gUs()==="fine"?D.be:D.c0
t=t?1:0.5
r=u.a
q=u.gaE0(0)
p=u.gUs()
o=u.gUs()==="fine"?D.ep:D.eO
r=C.a([new C.ca(D.aM,D.e,D.i,D.m,m,D.p,m,0,C.a([new A.acO(r.e,50,m),D.as,new C.by(1,D.ba,C.x(C.a([new C.y(r.b+"  "+q,m,D.ht,m,m,m,m,m,m,m,m,m),new C.y(r.f,m,B.aTz,m,m,m,m,m,m,m,m,m),new C.y("Now: "+p,m,new C.F(!0,o,m,m,m,m,12.5,D.H,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m,m,m,m,m,m,m)],l),D.E,m,D.e,D.i,0,D.p),m)],l),m),D.Q,n.WH("Food",100-u.b,D.cL),n.WH("Health",u.c,D.be),n.WH("Home",u.d,D.cp)],l)
if(u.f){q=n.aey("\ud83c\udf5e Feed",new A.dSU(n,d,u))
p=n.PU("\ud83d\udc8a Medicine",u.e?new A.dSV(n,d,u):m,D.bq)
D.d.v(r,C.a([D.am,new C.CD(D.bG,8,8,D.br,C.a([q,p,n.PU("\ud83c\udfe5 Hospital",u.r>=0?m:new A.dSW(n,d,u),D.c0),n.PU("\ud83c\udfe0 Visit",new A.dSX(n,u),D.b_)],l),m)],l))}k.push(n.PV(new C.kB(t,C.x(r,D.E,m,D.e,D.i,0,D.p),m),s))}return C.x(k,D.m,m,D.e,D.i,0,D.p)},
c8o(d){var w,v,u,t,s=null,r=x.p,q=C.a([B.enm],r)
for(w=d.e,v=0;v<w.length;++v){u=w[v].a<0
t=u?D.aX:D.c0
q.push(this.PV(u?new C.ca(D.aM,D.e,D.i,D.m,s,D.p,s,0,C.a([B.fPS,D.as,new C.y("Bed "+(v+1)+": empty",s,B.fjF,s,s,s,s,s,s,s,s,s)],r),s):new C.ff(new A.dSR(this,d,v),s),t))}return C.x(q,D.m,s,D.e,D.i,0,D.p)},
c8q(d){var w=this,v=null,u=x.p,t=w.PV(C.B(C.a([B.fBf,D.as,B.bG6,w.aey("Buy",new A.dT1(w,d))],u),D.m,v,D.e,D.i,0,v,v),D.cL),s=w.PV(C.B(C.a([B.fWY,D.as,B.bGm,w.PU("Buy",new A.dT2(w,d),D.bq)],u),D.m,v,D.e,D.i,0,v,v),D.bq),r=C.a([B.fQT,D.am,C.d("Calls answered: "+d.y+"\nPatients sent home better: "+d.z+"\nPeople lost: "+d.gcNC(),v,v,v,v,v,v,B.aUz,v,v,v)],u)
if(d.gC7().length===0)D.d.v(r,C.a([D.W,w.aey("Start a new community",new A.dT3(w))],u))
return C.x(C.a([t,s,w.c8n(C.x(r,D.E,v,D.e,D.i,0,D.p))],u),D.m,v,D.e,D.i,0,D.p)},
B(d){var w,v,u,t,s,r,q=this,p=null,o=q.d
if(o==null)w=D.lY
else{w=x.p
v=C.B(C.a([C.aH(p,p,p,p,T.nz,p,p,p,new A.dT9(d),p,p,p,p,p,p),B.bFN,q.a_8("\u2b50 "+o.r,D.aA)],w),D.m,p,D.e,D.i,0,p,p)
u=q.a_8("\ud83c\udf5e "+o.w,D.cL)
t=q.a_8("\ud83d\udc8a "+o.x,D.bq)
s=o.e
s=C.B(C.a([u,D.ad,t,D.ad,q.a_8("\ud83c\udfe5 "+new C.Z(s,new A.dTa(),C.T(s).k("Z<1>")).gL(0)+"/"+s.length,D.c0)],w),D.m,p,D.b9,D.i,0,p,p)
t=C.B(C.a([q.b_l("calls","\ud83d\udcde Calls",o.d.length),q.axR("people","\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc67 People"),q.axR("hospital","\ud83c\udfe5 Hospital"),q.axR("shop","\ud83d\uded2 Shop")],w),D.m,p,D.e,D.i,0,p,p)
r=q.gbka()
A:{if("people"===r){u=q.c8p(o)
break A}if("hospital"===r){u=q.c8o(o)
break A}if("shop"===r){u=q.c8q(o)
break A}u=q.bH2(o)
break A}w=C.a([new C.D(B.bEb,v,p),new C.D(D.BR,s,p),new C.D(B.am6,t,p),D.Q,C.E(C.cl(C.a([u],w),p,p,D.Gn,p,p,D.ah,!1),1)],w)
if(q.w!=null){v=D.dY.j(0.96)
u=C.m(14)
t=C.J(D.be,D.r,1)
s=q.w
s.toString
w.push(C.p(p,C.d(s,p,p,p,p,p,p,B.fmi,p,p,p),D.f,p,p,new C.o(v,p,t,u,p,p,D.n),p,p,p,H.aks,D.bg,p,p,1/0))}w=C.x(w,D.m,p,D.e,D.i,0,D.p)}return C.c6(p,D.c2,C.bn(!0,w,!0,!1,D.af,!0,!0),p,!1,!1,p,p)}}
A.acO.prototype={
B(d){var w=null,v=this.d
return new C.a4(v,v,C.b4(w,w,w,new A.bfH(this.c,w),D.aw),w)},
gY(d){return this.d}}
A.bfH.prototype={
a3(d,e){var w,v,u,t,s=e.a,r=s/2,q=$.S(),p=C.I()
p.r=D.dr.gp(0)
d.ad(new C.t(r,r),r,p)
p=d.a
J.bl(p.save())
q=new C.aF(q.r,D.ag,null,null,C.a([],x.g))
r=0+s
q.D(new C.jL(new C.a3(0,0,r,r)))
d.mK(0,q)
q=s*0.1
r=s*0.78
w=s*0.5
v=C.I()
u=this.b
v.r=u.c.gp(0)
d.dQ(new C.a3(q,r,q+s*0.8,r+w),v)
v=s*0.27
r=s*0.16
t=C.I()
t.r=u.a.gp(0)
d.dQ(new C.a3(v,r,v+s*0.46,r+s*0.56),t)
t=s*0.24
r=C.I()
r.r=u.b.gp(0)
d.e4(new C.a3(t,q,t+s*0.52,q+w),3.14,3.14,!0,r)
r=s*0.44
q=s*0.035
t=C.I()
t.r=D.nk.gp(0)
d.ad(new C.t(s*0.42,r),q,t)
t=C.I()
t.r=D.nk.gp(0)
d.ad(new C.t(s*0.58,r),q,t)
t=s*0.4
q=C.I()
q.b=D.a9
q.c=1.4
q.r=D.ek.gp(0)
d.e4(new C.a3(t,w,t+s*0.2,w+s*0.12),0.2,2.7,!1,q)
p.restore()},
av(d){return!1}}
A.fm.prototype={}
A.CC.prototype={}
A.iP.prototype={}
A.Ms.prototype={}
A.axQ.prototype={
gjR(){return this.a==="ok"}}
A.mg.prototype={}
A.fp.prototype={}
A.E9.prototype={}
A.nO.prototype={}
A.abM.prototype={}
A.oq.prototype={}
A.aWw.prototype={
gwJ(){var w=this.c
return w.c>=2&&A.La(A.t7(this.a),w).a==="ok"},
gda(d){return this.c}}
A.a5n.prototype={
gza(){var w,v,u=this.p4,t=u==="ptrap"
if(t||u==="faucet"){w=this.RG
if(w==null)return!1
if(t)if(w.a.a===3){u=w.b
u=new C.bd(u,C.a7(u).k("bd<2>")).d_(0,new A.bUG())&&w.c}else u=!1
else u=A.bDe(w)&&w.f&&w.r
return u}v=this.R8
return v!=null&&v.c>=2&&A.La(A.t7(u),v).a==="ok"},
Ir(d){var w
if(this.c!=="outside"){w=this.CW
w=w!=null?w.r2(d):!this.ay}else w=!0
return w},
ga6g(){var w=this.p4
if(w.length===0)w=this.Ir(2)
else w=w!=="fan"||this.gza()
return w},
gMk(){var w=this.p4
if(w.length===0)w=this.Ir(3)
else w=!D.d.t(B.jG,w)||this.gza()
return w},
ganN(){var w=this.p4
if(w.length===0)w=this.Ir(0)
else w=!D.d.t(B.lj,w)||this.gza()
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
gh0(d){var w,v=180
if(!this.ok){w=this.c
A:{if("bathroom"===w){v=100
break A}if("kitchen"===w){v=110
break A}if("living"===w){v=120
break A}if("hall"===w)break A
if("outside"===w){v=2100
break A}v=112
break A}}return v},
gkR(){var w,v=this
if(v.c!=="outside"){w=v.p4
if(w.length!==0)w=w==="ptrap"||w==="faucet"||v.gza()
else{w=v.CW
w=w==null?null:w.gbkX()
if(w==null)w=!v.ay}}else w=!0
return w},
gjT(){var w=this,v=w.c
if(v==="bathroom"||v==="kitchen"){v=w.p4
if(v.length!==0)v=!(v==="ptrap"||v==="faucet")||w.gza()
else{v=w.fr
v=v==null?null:v.gwJ()
if(v==null)v=!w.ch}}else v=!0
return v},
BV(d){var w,v,u,t
for(w=this.x,v=w.length,u=0;u<v;++u){t=w[u]
if(t.a===d)return t}return null},
dB(d,e,f,g){var w=this,v=w.y++,u=f==null?0:f,t=new A.mg(v,e,u,g==null?w.gh0(0)*0.6:g)
w.x.push(t)
w.a4a(0,t)
return t},
M(d,e){return this.dB(0,e,null,null)},
cJD(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=d.k1
if(a0!=null){w=d.c
w=w==="outside"||w==="hall"}else w=!0
if(w)return
v=A.hcD(d,A.aPW(a0),0)
w=v.c
u=v.a/2
t=w-u-6
s=w+u+6
for(w=D.d.gaf(d.x),u=new C.f2(w,new A.bUF());u.C();){r=w.gS(0)
q=B.hE.h(0,r.b)
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
if(f<=d.gh0(0)-m-1)r.d=f
else if(e>=m+1)r.d=e
else r.c=q?h+52+l+1:h-52-l-1}}},
a4a(d,e){var w,v,u,t,s,r=this,q=e.b,p=B.hE.h(0,q)
p.toString
w=(e.e&1)===1
v=w?p.d:p.c
u=w?p.c:p.d
p=v/2
e.c=D.k.E(e.c,-r.geb(0)/2+p+1,r.geb(0)/2-p-1)
p=e.d
t=u/2
s=r.c==="outside"?-760+t:t+1
e.d=D.k.E(p,s,r.gh0(0)-t-1)
if(D.d.t(B.RZ,q)){e.c=D.k.V(e.c/40)*40
e.d=D.k.V(e.d/40)*40}}}
A.aWB.prototype={
bzT(d){var w,v,u
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
break B}u=A.zk(0,w,v,0,0,1,1,C.a([],x.dY))
u.p4=d
u.go=d==="fan"?"fan":"light"
if(d==="gfci")u.Q=5
u.ch=u.ay=!1
u.Q=v==="bathroom"||v==="kitchen"?5:0
u.ok=!0
u.k1="tv150"
u.p2=!0
u.p3=Math.max(0,D.d.bh(E.kp,new A.bVg()))
this.d=C.a([u],x.I)},
cTA(){var w,v,u,t,s,r
for(w=this.gqU(),v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u){t=w[u]
t.fr=t.CW=null
s=t.ay=!0
r=t.c
t.ch=r!=="bathroom"?r==="kitchen":s
t.fy=!1
t.fx.aa(0)
D.d.aa(t.id)}},
c8s(){var w,v,u,t,s,r,q,p=this,o="back",n="bedroom",m="bathroom",l=new C.e6()
l.cX(p.b)
w=new A.bVh()
v=x.dY
u=C.a([B.bJG,B.bJD,B.bJE],v)
for(t=0;t<7;++t){s=B.ckH[t]
u.push(new A.oq(!0,o,-150+s.a*50,s.b))}r=p.d=C.a([A.zk(0,"Bedroom 1",n,0,0,2,2,C.a([w.$1(-48)],v)),A.zk(1,"Bedroom 2",n,2,0,2,2,C.a([w.$1(-48)],v)),A.zk(2,"Bathroom 1",m,4,0,1,2,C.a([B.a0U],v)),A.zk(3,"Bedroom 3",n,5,0,2,2,C.a([w.$1(-48)],v)),A.zk(4,"Bathroom 2",m,7,0,2,2,C.a([B.a0U],v)),A.zk(5,"Hall","hall",0,2,9,1,u),A.zk(6,"Bedroom 4",n,0,3,2,2,C.a([w.$1(-48)],v)),A.zk(7,"Bedroom 5",n,2,3,2,2,C.a([w.$1(-48)],v)),A.zk(8,"Bathroom 3",m,4,3,1,2,C.a([B.a0U],v)),A.zk(9,"Kitchen","kitchen",5,3,2,2,C.a([new A.oq(!1,o,-26,5),B.bJI],v)),A.zk(10,"Living room","living",7,3,2,2,C.a([new A.oq(!1,o,-70,5),B.bJH,B.bJF],v)),A.zk(11,"NGMY City","outside",0,5,9,1,C.a([B.bJC],v))],x.I)
for(v=r.length,t=0;t<r.length;r.length===v||(0,C.L)(r),++t){q=r[t]
u=q.c
if(u==="outside"){p.aUx(q)
continue}q.go=u==="bedroom"?"fan":"light"
q.ay=l.ag()<0.6
q.ch=(u==="bathroom"||u==="kitchen")&&l.ag()<0.7
D.d.hu(q.z,0,3,l.ap(8))
A:{if("bathroom"===u){u=5+l.ap(2)
break A}if("kitchen"===u){u=5+l.ap(2)
break A}if("bedroom"===u){u=2+l.ap(3)
break A}if("living"===u){u=l.ap(2)
break A}u=l.ap(2)
break A}q.Q=u
q.as=l.ap(4)
p.aUx(q)}v=p.d
u=v[5]
u.k2=u.k1="tv100"
u.p2=!0
v[3].ay=!0
v[2].ch=!0},
aUx(b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4="plant",a5="roadcross",a6="road",a7="roundabout",a8="house2",a9="bighouse",b0="adboard",b1="flowers",b2=b3.geb(0)/2
switch(b3.c){case"bedroom":b3.dB(0,"rug",0,b3.gh0(0)*0.55)
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
b3.dB(0,a4,b3.geb(0)/2-12,b3.gh0(0)-12)
break
case"outside":for(w=-780;w<=780;w+=40){v=Math.abs(w)<1
b3.dB(0,v?a5:a6,w,420)
b3.dB(0,v?a5:a6,w,860)}for(u=200;u<=820;u+=40){if(Math.abs(u-420)<1||Math.abs(u-860)<1)continue
b3.dB(0,a6,0,u).e=1}for(t=0;t<2;++t){s=B.dnz[t]
for(u=460;u<859;u+=40)b3.dB(0,a6,s,u).e=1}for(t=0;t<3;++t){s=B.dny[t]
b3.dB(0,a7,s,420)
b3.dB(0,a7,s,860)}r=new A.bVi(b3)
b3.dB(0,"shop",-250,225)
b3.dB(0,"hospital",250,215)
b3.dB(0,"firestation",-480,225)
b3.dB(0,"school",520,210)
for(t=0;t<14;++t){v=B.dbq[t]
w=v.a
u=v.b
if(r.$4(w,u,60,40))b3.dB(0,"billboard",w,u)}for(t=0;t<4;++t){v=B.drS[t]
w=v.a
u=v.b
if(r.$2(w,u))b3.dB(0,a8,w,u)}for(t=0;t<3;++t){v=B.cPN[t]
u=v.a
q=v.b
p=v.c
for(v=u<900,w=-800;w<=800;w+=q){o=Math.abs(w)
if(o<100)continue
if(v&&o>400)continue
if(r.$2(w,u))b3.dB(0,p&&D.o.F(D.k.ec(w,q),2)===0?a9:a8,w,u)}}for(t=0;t<2;++t){v=B.cy_[t]
w=v.a
u=v.b
if(r.$2(w,u))b3.dB(0,a9,w,u)}for(w=-1220;w<=1220;w+=40){if(Math.abs(w)>780){b3.dB(0,a6,w,420)
b3.dB(0,a6,w,860)}b3.dB(0,a6,w,1460)
b3.dB(0,a6,w,1700)}for(u=900;u<1459;u+=40)b3.dB(0,a6,0,u).e=1
v=C.a([],x._)
for(o=b3.x,n=o.length,t=0;t<o.length;o.length===n||(0,C.L)(o),++t){m=o[t]
l=m.b
if(D.d.t(B.RZ,l)||l==="roundabout")v.push(m)}k=new A.bVk(v,b3)
j=new A.bVl(b3,new A.bVo(b3))
j.$3("gasstation",6,B.d69)
j.$3("dmv",1,B.duD)
j.$3("ubstation",3,B.cXC)
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
e=B.hE.h(0,f)
if(k.$4(w,u,e.c,e.d)){b3.dB(0,f,w,u);++i}}++g}++h}for(d=0,t=0;t<11;++t,d=a0){v=B.d_o[t]
a0=d+1
b3.dB(0,v.b,v.a,1560).f=D.o.F(d,6)}for(t=0;t<11;++t,d=a0){v=B.dpI[t]
a0=d+1
b3.dB(0,v.b,v.a,1860).f=D.o.F(d,6)}b3.dB(0,"townsign",0,640)
for(t=0;t<4;++t){v=B.dk0[t]
b3.dB(0,"cornersign",v.a,v.b)}for(t=0;t<5;++t)b3.dB(0,b0,B.d9x[t],2045)
for(t=0;t<4;++t)b3.dB(0,b0,B.dnH[t],-690)
for(t=0;t<4;++t){u=B.csn[t]
a1=b3.dB(0,b0,-1245,u)
a1.e=1
a1.c=-1245
b3.a4a(0,a1)
a2=b3.dB(0,b0,1245,u)
a2.e=3
a2.c=1245
b3.a4a(0,a2)}for(w=-1200;w<=1200;w+=480){for(t=0;t<4;++t)b3.dB(0,"pole",w,B.cwI[t])
for(v=Math.abs(w)<1100,o=w+240,t=0;t<4;++t){u=B.cDQ[t]
if(v)b3.dB(0,"lamppost",o,u)}}b3.dB(0,"car",-300,490).e=2
b3.dB(0,"ambulance",110,345)
b3.dB(0,"firetruck",-385,345)
for(t=0;t<10;++t){v=B.dtv[t]
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
for(t=0;t<6;++t){v=B.cDo[t]
b3.dB(0,"crate",v.a,v.b)}break
case"hall":default:}},
gqU(){var w,v,u,t=C.a([],x.I),s=this.d
s===$&&C.c()
w=s.length
v=0
for(;v<s.length;s.length===w||(0,C.L)(s),++v){u=s[v]
if(u.c!=="outside")t.push(u)}return t},
gd_l(){var w=this.gqU()
return new C.Z(w,new A.bVs(),C.T(w).k("Z<1>")).gL(0)},
gcWZ(){var w=this.d
w===$&&C.c()
return new C.Z(w,new A.bVr(),C.T(w).k("Z<1>")).gL(0)},
gcWY(){var w=this.d
w===$&&C.c()
return new C.Z(w,new A.bVq(),C.T(w).k("Z<1>")).gL(0)},
gcPF(){var w=this.gqU()
return new C.Z(w,new A.bVp(),C.T(w).k("Z<1>")).gL(0)}}
A.IW.prototype={
R(){var w,v,u,t,s=new C.yf()
$.yZ()
s.h8(0)
w=$.ax()
v=$.hAx()
u=x.S
t=C.a([],x.aQ)
return new A.aEO(s,B.aAH,new C.eC("",w),B.dif,B.nC,B.nC,D.D9,C.aX(x.N),new C.cx(null,x.eF),v,C.U(u,x.i),C.aX(u),t,D.cK)}}
A.aEO.prototype={
ghF(){var w,v,u=$.a4i
if(u!=null){w=u.a
v=this.d
v===$&&C.c()
v=w===v.b
w=v}else w=!1
return w?u:null},
aA0(){var w,v,u=this.ghF()
if(u==null)u=null
else{w=this.d
w===$&&C.c()
v=w.d
v===$&&C.c()
w=u.bfr(w,v[w.e].a)
u=w}this.fr=u==null?B.aAH:u},
gbja(){var w=this.d
w===$&&C.c()
w=w.gqU()
return new C.Z(w,new A.eeC(),C.T(w).k("Z<1>")).gL(0)},
Z(){var w,v,u,t,s,r=this
r.a2()
w=r.a.r
if(w.length!==0)w=r.d=A.hJs(w)
else{w=$.Ed==null
if(w){w=D.o.F(Date.now(),1e5)
$.Ed=A.aWC(w)
r.ek=!0}w=$.Ed
w.toString
w=r.d=w}v=r.a
if(v.r.length===0)u=!0
else u=v.d||w.c
w.c=u
u=new A.xj(-0.05,0.1,120,B.h0D,$.ax())
u.f=560
r.e=u
v=v.f
u=v==="city"
if(u)w.e=11
if(v.length!==0&&!u){w=w.gqU()
t=new C.Z(w,new A.eez(r),C.T(w).k("Z<1>"))
if(!t.gan(0)){w=r.d
w===$&&C.c()
w.e=t.gI(0).a}}A.aWo($.ahK)
A.hlg()
r.aja()
r.aA0()
w=r.d
w===$&&C.c()
v=w.d
v===$&&C.c()
w=v[w.e]
v=r.gbja()
u=r.d
s=u.d
s===$&&C.c()
r.f=A.hvh(w,s[u.e].c!=="outside",B.aRq,"look",v,r.fr,0)
r.aez(!0)
r.Za()
r.fx=C.dh(D.fY,new A.eeA(r))
$.aV.x1$.push(new A.eeB(r))},
q(){var w,v=this
v.b4t(!0)
w=v.p1
if(w!=null)w.bR(0)
w=v.RG
if(w!=null)w.bR(0)
w=v.b4
if(w!=null)w.bR(0)
w=v.ch
if(w!=null)w.a4(0)
w=v.dx
if(w!=null)w.a4(0)
w=v.fx
if(w!=null)w.a4(0)
w=v.by
if(w!=null)w.a4(0)
w=v.P
if(w!=null)w.a4(0)
v.a1()},
c2k(){var w,v=this.d
v===$&&C.c()
w=v.a
A:{if("switch"===w){v="The ceiling light is already in. Tap the red switch on the wall and wire it. Then flip it to see the light work."
break A}if("outlet"===w){v="Tap the red outlet on the wall and wire it. Then plug in a lamp or a TV to test it."
break A}if("gfci"===w){v="Tap the red GFCI outlet and wire it. Then plug in a hair dryer to test it."
break A}if("fan"===w){v="Tap the ceiling fan and wire it. Then flip the wall switch and watch it spin."
break A}if("ptrap"===w){v="The sink has no drain yet. Tap the sink and build the drain under it."
break A}v="The faucet is not connected yet. Tap the sink and connect the hoses."
break A}return v},
aez(d){var w,v,u,t,s,r,q,p=this,o=p.e
o===$&&C.c()
o.z=!0
w=p.d
w===$&&C.c()
v=w.d
v===$&&C.c()
u=v[w.e]
if(p.z){t=new A.q(0,40,u.gh0(0)*0.5)
s=Math.max(u.geb(0),u.gh0(0))*0.6
o.e=20
o.f=Math.max(Math.max(u.geb(0),u.gh0(0))*2,380)
o.r=new C.e2([-u.geb(0)/2,u.geb(0)/2,0,u.gh0(0),130])
o.at=-1.2
o.ax=1.2
o.rb(!0)
r=0.12
q=-0.05}else if(u.c==="outside"){o.e=30
o.f=2400
o.r=null
o.at=0.03
o.ax=1.35
o.rb(!0)
t=B.h0A
s=540
r=0.35
q=-0.25}else if(p.x){t=new A.q(0,46,u.gh0(0)*0.1)
s=u.gh0(0)*0.74
o.e=6
o.f=Math.max(Math.max(u.geb(0),u.gh0(0))*2,380)
o.r=new C.e2([-u.geb(0)/2,u.geb(0)/2,0,u.gh0(0),130])
o.at=0.02
o.ax=1.35
o.rb(!0)
r=0.05
q=0}else{t=new A.q(0,30,u.gh0(0)*0.45)
s=(u.geb(0)*1.2>u.gh0(0)*1.4?u.geb(0)*1.2:u.gh0(0)*1.4)+30
o.e=6
o.f=560
o.r=null
o.at=0.1
o.ax=1.35
o.rb(!0)
r=0.5
q=-0.12}o=p.e
if(d){o.d=t
o.c=s
o.y=1
o.a=q
o.b=r}else o.im(s,r,t,q)},
y3(){return this.aez(!1)},
bOh(d,e){var w,v,u,t,s,r,q,p,o=this,n=o.e
n===$&&C.c()
w=n.cPN(d,e)
if(w==null)return
n=o.d
n===$&&C.c()
v=n.d
v===$&&C.c()
u=v[n.e]
t=o.aJ
if(t!=null){n=t.at
n===$&&C.c()
n.at=new C.z(D.k.E(w.a,-138,138),D.k.E(w.c,12,316))}else if(o.z){s=D.k.E(w.a,-u.geb(0)/2+10,u.geb(0)/2-10)
r=D.k.E(w.c,10,u.gh0(0)-10)
o.e.Ni(new A.q(s,48,r))}else{n=u.c==="outside"
if(n&&o.aL&&o.aC!=null){n=o.aC
n.toString
n.at=new C.z(D.k.E(w.a,-u.geb(0)/2+12,u.geb(0)/2-12),D.k.E(w.c,-290,u.gh0(0)-12))}else{v=o.e
q=w.a
p=w.c
if(n)v.aLa(Math.max(70,v.c*0.4),0.32,new A.q(q,30,p))
else{n=D.k.E(q,-u.geb(0)/2+8,u.geb(0)/2-8)
p=D.k.E(p,8,u.gh0(0)-8)
v.aLa(Math.max(36,o.e.c*0.35),0.2,new A.q(n,40,p))}}}A.fQ(560,50,0.25,"tri")},
iK(){var w,v,u,t,s,r,q,p,o=this
o.aA0()
w=o.aJ
if(w!=null){v=w.ay
v===$&&C.c()}else{v=o.d
v===$&&C.c()
u=v.d
u===$&&C.c()
v=u[v.e]
u=o.r
t=o.Q
s=o.gbja()
if(!o.z)if(o.x){r=o.d
q=r.d
q===$&&C.c()
r=q[r.e].c!=="outside"&&o.cx==null}else r=!1
else r=!0
q=o.fr
p=o.bG
v=A.hvh(v,r,p!=null?C.eD([100+p.a],x.S):B.aRq,u,s,q,t)}o.f=v},
ei(d,e){var w=this,v=w.ch
if(v!=null)v.a4(0)
w.m(new A.edl(w,d,e))
w.ch=C.cG(D.eq,new A.edm(w))},
iL(d){return this.ei(d,!0)},
PW(d){this.m(new A.edn(this,d))
A.fQ(660,50,0.25,"tri")},
axS(d,e){var w,v=this,u=v.d
u===$&&C.c()
if(d!==u.e){u=u.d
u===$&&C.c()
u=d>=u.length}else u=!0
if(u)return
if(v.aL&&d!==11)v.a2T()
v.cK=v.bG=v.aJ=null
if(!e&&v.cx!=null)v.Sf()
v.m(new A.ebR(v,d))
u=v.d
w=u.d
w===$&&C.c()
if(w[u.e].c==="outside")v.aC=v.aZn()
v.y3()
A.fQ(520,60,0.25,"tri")},
AD(d){return this.axS(d,!1)},
aY2(d){var w,v,u,t=this
if(d===700){w=t.d
w===$&&C.c()
v=w.d
v===$&&C.c()
return v[w.e].ganN()}if(d===701){w=t.d
w===$&&C.c()
v=w.d
v===$&&C.c()
w=v[w.e]
return w.p4.length!==0||w.Ir(1)}if(d===702){w=t.d
w===$&&C.c()
v=w.d
v===$&&C.c()
return v[w.e].gMk()}if(d===703){w=t.d
w===$&&C.c()
v=w.d
v===$&&C.c()
return v[w.e].ga6g()}if(d>=800&&d<820){u=d-800
w=t.d
w===$&&C.c()
v=w.d
v===$&&C.c()
w=v[w.e].id
return u<w.length&&w[u].gwJ()}if(d===720){w=t.d
w===$&&C.c()
v=w.d
v===$&&C.c()
return v[w.e].ganN()}if(d===721){w=t.d
w===$&&C.c()
v=w.d
v===$&&C.c()
w=v[w.e]
return w.p4.length!==0||w.Ir(1)}if(d>=722&&d<728){u=d-720-2
w=t.d
w===$&&C.c()
v=w.d
v===$&&C.c()
w=v[w.e].id
return u<w.length&&w[u].gwJ()}w=t.d
w===$&&C.c()
v=w.d
v===$&&C.c()
return v[w.e].gkR()},
b9m(){var w,v,u=this,t=u.d
t===$&&C.c()
w=t.d
w===$&&C.c()
v=w[t.e].go==="fan"
u.m(new A.edP(u))
t=u.d
w=t.d
w===$&&C.c()
if(w[t.e].fy)t=v?"The fan spins.":"The light is on."
else t=v?"The fan stops.":"The light is off."
u.iL(t)
t=u.d
w=t.d
w===$&&C.c()
A.fQ(w[t.e].fy?900:500,60,0.25,"tri")},
c8B(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this
if(a0===0)return
if(a0>=19e3&&a0<19004){w=a0-19e3
v=d.d
v===$&&C.c()
u=v.d
u===$&&C.c()
t=u[v.e]
v=D.o.F(w,2)===0?-1:1
s=v*(t.geb(0)/2-14)
r=w<2?14:t.gh0(0)-14
q=Math.atan2(-s,-(t.gh0(0)/2-r))
w=Math.cos(0.12)
v=Math.sin(q)
u=Math.sin(0.12)
p=Math.cos(0.12)
o=Math.cos(q)
n=d.e
n===$&&C.c()
n.e=6
n.im(26,0.12,new A.q(s+26*w*v,106-26*u,r-26*p*o),q)
d.ei("You are looking from the camera in the corner. Drag to look round, or tap a camera for another corner.",!0)
A.fQ(700,70,0.25,"tri")
return}if(a0>=2e4&&a0<23e3){w=d.d
w===$&&C.c()
v=w.d
v===$&&C.c()
m=v[w.e].BV(a0-2e4)
if(m!=null)d.bUq(m)
return}if(a0===19502){w=d.aJ
if((w==null?null:w.a==="tower")===!0)d.m(new A.ecO(d))
return}if(a0===19500||a0===19501){l=d.aJ
if(l!=null)if(l.c)d.YJ(l)
else d.ei("This one works: the house has power.",!0)
return}if(a0>=900&&a0<920){d.crJ(a0-900)
return}if(a0>=100&&a0<200){w=d.d
w===$&&C.c()
v=w.d
v===$&&C.c()
k=v[w.e].BV(a0-100)
w=d.d
v=w.d
v===$&&C.c()
u=!1
if(v[w.e].c==="outside")if(d.r!=="furniture")if(k!=null){w=k.b
w=w==="hospital"||w==="shop"}else w=u
else w=u
else w=u
if(w){d.A6(k.b)
return}if(d.r!=="furniture")return
d.m(new A.ecP(d,a0))
w=d.d
v=w.d
v===$&&C.c()
m=v[w.e].BV(d.Q)
if(m!=null)d.iL(B.hE.h(0,m.b).a+": move it with the arrows.")
return}if(a0===300||a0===301||a0===302){if(d.r!=="walls")return
d.m(new A.ecQ(d,a0))
d.iL("Wall picked. Choose a paint colour.")
return}if(a0>=600&&a0<620){j=a0-600
w=d.d
w===$&&C.c()
v=w.d
v===$&&C.c()
if(j>=v[w.e].w.length)return
if(d.r==="doors"){d.m(new A.ecR(d,j))
w=d.d
v=w.d
v===$&&C.c()
A.fQ(v[w.e].at.t(0,j)?700:450,70,0.25,"tri")
return}d.bOa(j)
return}w=a0===700
v=!w
i=!0
if(v)if(a0!==701){if(a0!==702)if(a0!==703)if(!(a0>=800&&a0<820))u=a0>=720&&a0<728
else u=i
else u=i
else u=i
i=u}if(d.w&&i){h=d.aY2(a0)
A.fQ(h?1400:500,160,0.25,"tri")
w=h?"The tester glows and beeps: LIVE, 120 volts. Never touch a live wire. Switch the breaker off first.":"The tester stays dark: no power here. It still needs wiring."
d.ei(w,!h)
return}if(!v||a0===701){if(d.aY2(a0))d.azC(w?0:1)
else d.aUd()
return}if(a0>=800&&a0<820){j=a0-800
w=d.d
w===$&&C.c()
v=w.d
v===$&&C.c()
w=v[w.e].id
if(j>=w.length)return
g=w[j]
if(!g.gwJ())d.akr(j)
else if(g.a==="switch")d.b9m()
else d.azC(2+j)
return}if(a0===702||a0===703){w=d.d
w===$&&C.c()
v=w.d
v===$&&C.c()
if(v[w.e].gMk()){w=d.d
v=w.d
v===$&&C.c()
w=!v[w.e].ga6g()}else w=!0
if(w)d.aUd()
else d.b9m()
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
if(!w[u].p2){d.m(new A.ecS(d))
w=d.d
v=w.d
v===$&&C.c()
d.iL("The TV is on and playing "+E.kp[v[w.e].p3].a+".")}else{e=A.aPW(f)
w=d.c
w.toString
K.hcs(w,0,e.a,!0,D.yh,e.b)}return}if(a0>=720&&a0<728){w=d.d
w===$&&C.c()
v=w.d
v===$&&C.c()
u=a0-720
f=v[w.e].fx.h(0,u)
if(f==null)return
e=A.aPW(f)
if(e.d>0||e.e){w=d.c
w.toString
K.hcs(w,0,e.a,!0,D.yh,e.b)}else d.azC(u)
return}if(a0===710||a0===711||a0===712||a0===713){w=d.d
w===$&&C.c()
v=w.d
v===$&&C.c()
if(!v[w.e].gjT())if(d.d.a.length!==0)d.Ep()
else d.a0p()
else{w=d.f
w===$&&C.c()
j=w.b.h(0,a0)
if(j!=null)d.iL(j.a+": "+j.b)}}},
bOa(d){var w,v,u,t=this.d
t===$&&C.c()
w=t.d
w===$&&C.c()
v=w[t.e].w[d].d
u=v<w.length?w[v].b:"the next room"
t=this.c
t.toString
return C.bV(E.mC,null,new A.ebk(this,u,d,v),t,!0,!0,!1,D.k5,!1,!1,x.H)},
bQd(){var w,v,u=this
u.m(new A.ebt(u))
if(!u.aL){w=u.d
w===$&&C.c()
v=w.d
v===$&&C.c()
w=v[w.e].c==="outside"}else w=!1
if(w)u.S9()
w=u.d
w===$&&C.c()
v=w.d
v===$&&C.c()
if(v[w.e].c!=="outside")u.y3()},
bQf(){this.m(new A.ebu(this))
this.ei("Phone view: the city fills your phone standing up. Pick a drone film and start filming.",!0)},
bQz(){var w=this
if(w.p4)w.a2S()
w.m(new A.ebv(w))},
cl5(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.c
n.toString
w=C.aG(n,o,x.w).w
n=new A.ecH(p)
v=x.p
u=C.a([C.bS(0,d,0,0,0)],v)
t=w.r.b
if(p.fB)u.push(C.ap(o,C.aA(D.iH,B.f9b,D.y,!1,o,new A.ecK(p),o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!1,D.a3),o,o,0,o,t,o))
else{s=n.$2(D.cx,p.gbQy())
r=p.p4?D.z4:D.Co
r=n.$2(r,new A.ecL(p))
q=p.jO?B.aoR:O.Cr
u.push(C.ap(o,C.B(C.a([s,r,n.$2(q,new A.ecM(p)),n.$2(D.uI,new A.ecN(p))],v),D.m,o,D.e,D.i,0,o,o),o,o,10,o,t+8,o))}return C.c6(o,D.w,new C.an(D.a_,o,D.ab,D.t,u,o),o,!1,!1,o,o)},
bIz(d){var w,v,u,t,s,r,q=this,p=null,o=q.c
o.toString
w=C.aG(o,p,x.w).w
o=new A.eaV(q)
if(q.eu){v=w.a
u=v.b
v=v.a
t=q.ab
s=w.alH(D.af,new C.av(u,v),D.af)
return C.c6(p,D.w,C.as(new C.wr(t,C.q0(new C.a4(u,v,new C.an(D.a_,p,D.ab,D.t,C.a([C.bS(0,d,0,0,0),C.ap(p,C.aA(D.iH,B.f9h,D.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,o,p,p,p,p,p,p,!1,D.a3),p,p,0,p,0,p)],x.p),p),p),s),p),p,p,p),p,!1,!1,p,p)}r=q.f2?w.r.b:0
return C.c6(p,D.w,new C.an(D.a_,p,D.ab,D.t,C.a([C.bS(0,d,0,0,0),C.ap(p,C.aA(D.iH,B.f9i,D.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,o,p,p,p,p,p,p,!1,D.a3),p,p,0,p,r,p)],x.p),p),p,!1,!1,p,p)},
bSD(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.c
k.toString
w=C.aG(k,l,x.w).w
k=w.a
v=k.b
k=k.a
u=new A.ebF(m)
t=m.ab
s=w.alH(D.af,new C.av(v,k),D.af)
r=x.p
q=C.a([C.bS(0,d,0,0,0)],r)
if(m.fB)q.push(C.ap(l,C.aA(D.iH,B.f9a,D.y,!1,l,new A.ebI(m),l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,!1,D.a3),l,l,0,l,0,l))
else{p=u.$2(Aj.a1U,new A.ebJ(m))
o=u.$2(D.a2i,new A.ebK(m))
n=m.jO?B.aoR:O.Cr
r=C.a([p,o,u.$2(n,new A.ebL(m)),u.$2(D.uI,new A.ebM(m))],r)
p=m.d
p===$&&C.c()
o=p.d
o===$&&C.c()
if(o[p.e].c==="outside"){p=m.p4?D.z4:D.Co
r.push(u.$2(p,new A.ebN(m)))}if(m.gaks())r.push(C.aA(l,C.p(l,B.bXs,D.f,l,l,new C.o(D.cT,l,C.J(D.c,D.r,1),l,l,l,D.a6),l,40,l,D.iF,l,l,l,40),D.y,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,m.gaR4(),l,l,l,l,l,l,!1,D.a3))
q.push(C.ap(l,C.B(r,D.m,l,D.e,D.i,0,l,l),l,l,10,l,10,l))}return C.c6(l,D.w,C.as(new C.wr(t,C.q0(new C.a4(v,k,new C.an(D.a_,l,D.ab,D.t,q,l),l),s),l),l,l,l),l,!1,!1,l,l)},
cC9(d){var w,v,u,t=B.CS[d.b]
if(d.c==="power")w=t.c
else{v=t.d
w=v>=0?v:t.c}v=this.d
v===$&&C.c()
v=v.d
v===$&&C.c()
u=w<v.length?v[w].b:"the house"
v=this.c
v.toString
return C.bV(D.av,null,new A.edO(this,t,new A.edN(),d,u,w),v,!0,!0,!0,L.a8A,!1,!1,x.H)},
c3u(){var w,v,u=this,t=u.d
t===$&&C.c()
w=t.d
w===$&&C.c()
v=w[t.e]
if(v.c==="outside")return
u.m(new A.ec4(u))
t=u.e
t===$&&C.c()
t.e=20
t.f=300
t.at=-0.95
t.ax=1.35
t.rb(!0)
t=u.e
w=v.gh0(0)
t.im(Math.max(v.geb(0),v.gh0(0))*0.75,-0.5,new A.q(0,118,w*0.5),-0.05)
u.ei("Looking up at the ceiling from the floor. Drag to look round.",!0)},
gpn(){var w,v,u=this.d
u===$&&C.c()
u=u.d
u===$&&C.c()
w=new C.Z(u,new A.e9U(),C.T(u).k("Z<1>"))
if(!w.gaf(0).C())return null
v=w.gI(0)
u=v.dx
return u==null?v.dx=A.hHh(v):u},
aSl(d){var w,v,u=this
if(d==null)return
w=d.c
if(w>0){v=u.ghF()
if(v!=null)v.r+=w}w=d.a
A.fQ(w==="pickup"?700:940,120,0.25,"tri")
u.ei(d.b,w!=="expired")
u.m(u.gj_())},
gKz(){var w,v,u,t=this.d
t===$&&C.c()
t=t.d
t===$&&C.c()
w=new C.Z(t,new A.eef(),C.T(t).k("Z<1>"))
if(!w.gaf(0).C())return null
v=w.gI(0)
t=v.dy
if(t==null){t=C.a([],x.bz)
u=new C.e6()
u.cX(11)
t=new A.cB9(v,u,t)
t.bAD(v,11)
v.dy=t}return t},
bGG(){var w,v,u=this,t=u.ghF()
if(t==null)return
w=u.c5
if(w.w)u.ei("You already have your Uber licence.",!0)
else{v=t.r
if(v<40)u.ei("The licence costs 40 points. You have "+v+". Earn more with jobs and deliveries.",!1)
else{t.r=v-40
w.w=!0
A.fQ(880,140,0.25,"tri")
u.ei("You passed! Here is your Uber licence. Drive a car to an Uber station and the people waiting will get in.",!0)}}u.m(new A.eak())
w=u.aJ
if(w!=null)w.B(u.ghF())},
c2p(){var w,v,u,t,s=this,r=null,q=s.ghF(),p=s.c5.w,o=D.w.j(0.55),n=C.m(28),m=C.J(D.aX,D.r,1),l=x.p,k=C.B(C.a([B.fEs,D.as,B.bGT,C.aA(r,D.rP,D.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new A.ec_(s),r,r,r,r,r,r,!1,D.a3)],l),D.m,r,D.e,D.i,0,r,r),j=C.d(p?"You are a licensed Uber driver. Drive a car to an Uber station (the yellow and black shelter): the people waiting get in, and you take them to their house. The fare is paid when you get there.":"With the Uber licence you can take the people waiting at the Uber stations home and be paid for every ride. The car needs gas, so watch the gas bar.",r,r,r,r,r,r,B.fkl,r,r,r),i=q==null,h=i?r:q.r
h=C.d("You have "+(h==null?0:h)+" \u2b50",r,r,r,r,r,r,B.fsm,r,r,r)
w=p?new A.ec0(s):s.gbGF()
if(p)v=D.bf
else{v=i?r:q.r
v=(v==null?0:v)>=40?D.bt:D.bz}u=C.m(16)
t=p?"\u2713 Licensed":"Get the licence \xb7 40 \u2b50"
if(!p){i=i?r:q.r
i=(i==null?0:i)>=40}else i=!0
return C.p(D.A,C.p(r,C.x(C.a([k,D.W,j,D.W,h,D.W,C.aA(r,C.p(D.A,C.d(t,r,r,r,r,r,r,C.l(r,r,i?D.w:D.bU,r,r,r,r,r,r,r,r,16,r,r,D.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),D.f,r,r,new C.o(v,r,r,u,r,r,D.n),r,50,r,r,r,r,r,r),D.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,w,r,r,r,r,r,r,!1,D.a3)],l),D.ak,r,D.e,D.P,0,D.p),D.f,r,r,new C.o(r,r,m,n,r,B.zm,D.n),r,r,r,D.bD,D.bQ,r,r,330),D.f,o,r,r,r,r,r,r,r,r,r,r)},
cEy(d){var w,v,u,t=this,s=t.gKz()
if(s!=null){w=s.c
w===$&&C.c()
w=w.length===0}else w=!0
if(w)return
v=s.cOD(d.f,d.r,t.CW.gig()/1000)
if(v>0){w=t.ghF()
if(w!=null)w.r+=v
A.fQ(940,140,0.25,"tri")
t.ei("\ud83d\ude96 You dropped the passenger at the house. Fare: +"+v+" points. Thank you!",!0)
t.m(t.gj_())
return}if(s.f==null&&s.aqI(d.f,d.r)!=null&&D.d.b3(s.e,new A.eeg(s,d))){w=t.c5
if(!w.w){if(Date.now()-t.k1>2e4){t.k1=Date.now()
t.ei("People are waiting for a ride, but you need an Uber licence first. Get it at the licence office.",!1)}return}if(w.b<=0)return
u=s.cWQ(d.f,d.r)
if(u!=null){A.fQ(700,100,0.25,"tri")
t.ei("\ud83d\ude96 "+u.b+" got in. Take them to their house (follow the yellow line): "+u.f+" points.",!0)
t.m(t.gj_())}}},
cEx(){var w,v,u,t,s,r,q,p=this,o=p.gKz()
if(o==null)return
w=o.f
if(w!=null){p.ei("\ud83d\ude96 "+w.b+" is in the car and wants to go home: "+w.f+" points. Follow the yellow line to the house.",!0)
return}if(!p.c5.w){v=C.a([],x._)
u=p.d
u===$&&C.c()
t=u.d
t===$&&C.c()
u=t[u.e].x
t=u.length
s=0
for(;s<u.length;u.length===t||(0,C.L)(u),++s){r=u[s]
if(r.b==="dmv")v.push(r)}if(v.length===0){p.ei("There is no licence office in this town yet.",!1)
return}p.St(D.d.gI(v))
p.ei("You are at the licence office. Walk in through the door and onto the blue mat to get your Uber licence.",!0)
return}v=o.c
v===$&&C.c()
if(v.length===0){p.ei("There is no Uber station in this town yet.",!1)
return}q=p.aC
v=C.C(v,x.eB)
D.d.aZ(v,new A.eee(q))
p.St(D.d.gI(v))
p.ei("You are at an Uber station. Get in the car parked next to it and drive up to the people waiting. They get in by themselves.",!0)},
aPI(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=" points for the ",i=k.ghF()
if(i==null)return
w=d.a
v=w==="bread"
if(v||w==="medicine"){u=i.aEd(v?"food":"medicine")
t=!D.a.a0(u,"You need")}else{v=d.r
t=!1
if(v>0){w=w==="tank"
s=w?A.h9Z(k.c5.b):d.e
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
u="You had the "+d.c.toLowerCase()+". "+w}t=!l}}}A.fQ(t?880:300,90,0.25,"tri")
k.ei(u,t)
w=k.aJ
if(w!=null)w.B(k.ghF())
k.m(k.gj_())},
cwv(){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.ghF(),i=l.aJ
i=i==null?k:i.b.b==="gasstation"
w=i===!0
i=l.c
i.toString
v=C.aG(i,k,x.w).w.a
i=v.a
u=i>v.b*1.15
t=new A.edq(u,new A.edr(l,j,u))
s=C.d(w?"\u26fd":"\ud83d\uded2",k,k,k,k,k,k,D.x4,k,k,k)
r=C.d(w?"NGMY Gas shop":"NGMY Mart",k,k,k,k,k,k,D.fx,k,k,k)
q=j==null?k:j.r
p=x.p
q=C.a([s,D.as,C.E(C.x(C.a([r,C.d("You have "+(q==null?0:q)+" \u2b50",k,k,k,k,k,k,B.fmL,k,k,k)],p),D.E,k,D.e,D.i,0,D.p),1)],p)
if(u)q.push(new C.a4(190,k,new A.Ux(l.c5,w,14,k),k))
q.push(D.bc)
q.push(C.aA(k,B.bU6,D.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new A.edp(l),k,k,k,k,k,k,!1,D.a3))
o=C.B(q,D.m,k,D.e,D.i,0,k,k)
n=t.$2("FOOD AND DRINKS (energy)",B.daO)
s=w?"GAS":"HEALTH AND THE TOWN"
m=t.$2(s,w?B.dno:B.dk4)
t=D.w.j(0.55)
i=u?Math.min(i-24,820):340
s=C.m(28)
r=C.J(D.aX,D.r,1)
q=C.a([o,D.W],p)
if(!u)D.d.v(q,C.a([new A.Ux(l.c5,w,14,k),D.Q],p))
if(u)q.push(C.B(C.a([C.E(n,5),D.es,C.E(m,3)],p),D.E,k,D.e,D.i,0,k,k))
else D.d.v(q,C.a([n,m],p))
return C.p(D.A,C.eO(D.A,C.p(k,C.x(q,D.ak,k,D.e,D.P,0,D.p),D.f,k,k,new C.o(k,k,r,s,k,B.zm,D.n),k,k,k,D.bg,D.bQ,k,k,i),D.f,D.e3),D.f,t,k,k,k,k,k,k,k,k,k,k)},
chI(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=this,a1=null,a2=a0.gpn()
a2.toString
w=a0.aC
v=w==null
u=v?a1:w.f
if(u==null)u=0
t=v?a1:w.r
if(t==null)t=300
s=a2.x
r=new A.ecp()
q=new A.ecl(a0,u,t,r,new A.eco(),s,a2)
p=a2.cZb()
o=["\ud83e\udd47","\ud83e\udd48","\ud83e\udd49","4","5","6"]
v=D.w.j(0.55)
n=C.m(28)
m=C.J(D.aX,D.r,1)
l=x.p
k=C.a([C.B(C.a([B.fLT,D.as,C.E(C.x(C.a([B.fNH,C.d("Race "+a2.as+": first to 8 wins +40",a1,a1,a1,a1,a1,a1,I.tk,a1,a1,a1)],l),D.E,a1,D.e,D.i,0,D.p),1),C.aA(a1,D.rP,D.y,!1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,new A.ecj(a0),a1,a1,a1,a1,a1,a1,!1,D.a3)],l),D.m,a1,D.e,D.i,0,a1,a1),D.ae],l)
if(s!=null){j=D.bt.j(0.14)
i=C.m(16)
h=C.J(D.bt,D.r,1)
g=s.b
f=C.d(A.L9(g).b,a1,a1,a1,a1,a1,a1,D.Kk,a1,a1,a1)
k.push(C.p(a1,C.B(C.a([f,D.as,C.E(C.d(s.r?"You have the "+A.L9(g).c.toLowerCase()+". Take it to the house (follow the yellow line).":"Go to the "+r.$1(s.c).toLowerCase()+" to pick up the "+A.L9(g).c.toLowerCase()+".",a1,a1,a1,a1,a1,a1,D.pE,a1,a1,a1),1),C.aA(a1,B.fC_,D.y,!1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,new A.eck(a0,a2),a1,a1,a1,a1,a1,a1,!1,D.a3)],l),D.m,a1,D.e,D.i,0,a1,a1),D.f,a1,a1,new C.o(j,a1,h,i,a1,a1,D.n),a1,a1,a1,D.d1,D.bg,a1,a1,a1))}else{j=C.a([B.fQv,D.Q],l)
for(a2=a2.r1(0,u,t),a2=C.d5(a2,0,C.dC(6,"count",x.S),C.T(a2).c),i=a2.$ti,a2=new C.bT(a2,a2.gL(0),i.k("bT<ak.E>")),i=i.k("ak.E");a2.C();){h=a2.d
j.push(q.$1(h==null?i.a(h):h))}D.d.v(k,j)}k.push(D.am)
k.push(B.fFn)
k.push(D.Q)
for(e=0;e<p.length;++e){a2=p[e].a==="You"?D.aJ.j(0.18):D.c.j(0.05)
j=new C.aP(12,12)
i=p[e]
h=i.a
g=h==="You"
d=new C.ay(g?D.aJ:D.dr,1,D.r,-1)
f=o[e]
g=g?D.u:D.U
k.push(C.p(a1,new C.ca(D.aM,D.e,D.i,D.m,a1,D.p,a1,0,C.a([new C.a4(26,a1,new C.y(f,a1,D.aTo,a1,a1,a1,a1,a1,a1,a1,a1,a1),a1),new C.by(1,D.ba,new C.y(h,a1,new C.F(!0,D.c,a1,a1,a1,a1,a1,g,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1,a1,a1,a1,a1,a1,a1),a1),new C.y(""+i.b+"/8",a1,M.Km,a1,a1,a1,a1,a1,a1,a1,a1,a1),D.as,new C.y(""+i.c+" pts",a1,B.fkb,a1,a1,a1,a1,a1,a1,a1,a1,a1)],l),a1),D.f,a1,a1,new C.o(a2,a1,new C.bH(d,d,d,d),new C.bh(j,j,j,j),a1,a1,D.n),a1,a1,a1,D.eI,D.l9,a1,a1,a1))}return C.p(D.A,C.eO(D.A,C.p(a1,C.x(k,D.ak,a1,D.e,D.P,0,D.p),D.f,a1,a1,new C.o(a1,a1,m,n,a1,B.zm,D.n),a1,a1,a1,D.bD,D.bQ,a1,a1,340),D.f,D.e3),D.f,v,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1)},
bUp(d){var w,v,u=this,t=u.aJ
if(t==null||t.a!=="tower"||u.ok!=null)return
w=t.f
if(d===w){u.m(new A.ebO(u))
return}u.p2=t
w=new A.f29(w,d,Date.now())
v=t.at
v===$&&C.c()
w.r=v.f
w.w=v.r
u.ok=w
t.y=u.be=u.b2=0
u.m(new A.ebP(u))
w=u.e
w===$&&C.c()
w.im(175,0.28,B.h0E,0)
u.ei("Going to level "+d+": walking to the elevator.",!0)
w=u.p1
if(w!=null)w.bR(0)
w=new A.a5i(u.gcst(),Z.BJ)
w.h8(0)
u.p1=w},
DR(d){var w=D.k.E(d,0,1)
return w*w*(3-2*w)},
csu(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d="tri",a0=e.ok,a1=e.p2
if(a0==null||a1==null||e.c==null){w=e.p1
if(w!=null)w.bR(0)
return}v=Date.now()
u=(v-a0.c)/1000
w=a0.b
t=a0.a
s=w>t
switch(a0.d){case 0:r=a1.at
r===$&&C.c()
if(u<1){q=e.DR(u/1)
p=a0.r
r.f=p*(1-q)
o=a0.w
n=62-o
r.r=o+n*q
r.w=Math.atan2(-p,n)
r.x=!0}else if(u<1.8){r.f=0
r.r=62
r.w=3.141592653589793
r.x=!1}else if(u<2.5){r.r=62-44*e.DR((u-1.8)/0.7)
r.w=3.141592653589793
r.x=!0}else r.x=!1
r.y+=0.3
a1.y=e.DR((u-0.8)/0.8)
if(u>=2.6){a0.d=1
a0.c=v
a0.f=3+D.o.E(Math.abs(w-t)-1,0,99)*1.1
a0.e=t
m=A.h1n("cabin",a1.b,!1)
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
e.m(e.gj_())
w=e.e
w===$&&C.c()
w.Hn(54,0.1,B.h0S,3.141592653589793)
A.fQ(520,70,0.25,d)}break
case 1:m=e.aJ
if(m==null||m.a!=="cabin")return
l=a0.f
if(u<0.9)r=1-e.DR(u/0.9)
else{r=l-0.9
r=u>r?e.DR((u-r)/0.9):0}m.y=r
k=u>0.9&&u<l-0.9
if(k){j=D.o.E(t+D.k.V((w-t)*e.DR((u-0.9)/(l-1.8))),1,m.gMa())
if(j!==a0.e){m.z=a0.e=j
t=s?"\u25b2":"\u25bc"
e.p3.sp(0,t+"  "+C.w(j===1?"L":j))
A.fQ(500+j*22,45,0.2,d)}}i=k?1:0.25
t=e.e
t===$&&C.c()
r=Math.sin(u*5.3)
p=Math.sin(u*2.1)
o=Math.sin(u*0.9)
n=Math.sin(u*8)
t.Hn(54+p*1.2,0.1+Math.sin(u*6.1)*0.007*i,new A.q(0,52+r*0.5*i,52),3.141592653589793+o*0.5+n*0.01*i)
if(u>l-0.9&&!a0.x){a0.x=!0
m.z=w
e.p3.sp(0,C.w(w===1?"L":w))
A.fQ(880,140,0.3,d)
C.bP(D.fO,new A.edh(),x.H)}if(u>=l){a0.d=2
a0.c=v
h=a1.b.a
t=e.d
t===$&&C.c()
r=t.d
r===$&&C.c()
t=r[t.e].cy.h(0,h)
g=e.gIC().h(0,h*100+w)
a1.f=D.o.E(w,1,a1.gMa())
a1.c=t===w
w=a1.at
w===$&&C.c()
w.f=0
w.r=112
w.w=3.141592653589793
a1.x=!1
a1.CW.aa(0)
a1.B(a1.ch)
e.ajt(a1,g)
a1.B(e.ghF())
w.f=0
w.r=16
w.w=0
w.x=!1
a1.y=1
e.aJ=a1
e.m(e.gj_())
e.e.Hn(175,0.28,B.h0F,0)}break
default:w=a1.at
w===$&&C.c()
q=e.DR(u/1.6)
w.f=0
w.r=16+96*q
w.w=0
w.x=u<1.6
w.y+=0.3
a1.y=1-e.DR((u-1.3)/0.8)
t=e.e
t===$&&C.c()
t.Ni(new A.q(0,40,w.r*0.7+14))
if(u>=2.2){f=a1.c
t=e.p1
if(t!=null)t.bR(0)
e.ok=null
w.x=!1
a1.y=0
e.m(e.gj_())
e.e.im(170,0.4,B.h0j,0)
A.fQ(660,80,0.25,d)
w=""+a1.f
e.ei(f?"Level "+w+". This office has no power: walk onto the red mat at the breaker panel, or tap the red frames.":"Level "+w+" of "+a1.gMa()+".",!0)}}},
bPE(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.aJ
if(g==null||g.a!=="tower")return D.bJ
w=i.d
w===$&&C.c()
v=w.d
v===$&&C.c()
u=v[w.e].cy.h(0,g.b.a)
w=D.w.j(0.55)
v=C.m(28)
t=C.J(D.aX,D.r,1)
s=g.f
r=g.gMa()
q=x.p
s=C.B(C.a([B.fUA,D.as,C.E(C.x(C.a([B.fMG,C.d("You are on level "+s+" of "+r,h,h,h,h,h,h,I.tk,h,h,h)],q),D.E,h,D.e,D.i,0,D.p),1),C.aA(h,D.rP,D.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new A.ebr(i),h,h,h,h,h,h,!1,D.a3)],q),D.m,h,D.e,D.i,0,h,h)
p=C.a([],q)
for(;r>=1;--r){if(r===g.f)o=D.aJ
else o=r===u?D.bB.j(0.35):D.c.j(0.08)
n=new C.aP(14,14)
m=r===u
if(m)l=D.ax
else l=r===g.f?D.c:D.aX
k=r===g.f
j=new C.ay(l,k||m?2:1,D.r,-1)
l=r===1?"L":""+r
k=k?D.w:D.c
l=C.a([new C.y(l,h,new C.F(!0,k,h,h,h,h,19,D.u,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h),h,h,h,h,h,h,h,h,h)],q)
if(m)l.push(B.fUV)
p.push(C.aA(h,C.p(D.A,C.x(l,D.m,h,D.b9,D.i,0,D.p),D.f,h,h,new C.o(o,h,new C.bH(j,j,j,j),new C.bh(n,n,n,n),h,h,D.n),h,52,h,h,h,h,h,58),D.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new A.ebs(i,r),h,h,h,h,h,h,!1,D.a3))}return C.p(D.A,C.eO(D.A,C.p(h,C.x(C.a([s,D.ae,B.fSP,D.W,C.bY(D.bG,p,D.br,h,8,8),D.am,B.fDQ],q),D.ak,h,D.e,D.P,0,D.p),D.f,h,h,new C.o(h,h,t,v,h,B.zm,D.n),h,h,h,D.bD,D.bQ,h,h,330),D.f,D.e3),D.f,w,h,h,h,h,h,h,h,h,h,h)},
auh(){var w,v,u,t,s,r,q=this,p=q.e
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
aRF(d,e,f,g,h){var w=new A.ebd(h)
return new A.q(w.$4(d.a,e.a,f.a,g.a),w.$4(d.b,e.b,f.b,g.b),w.$4(d.c,e.c,f.c,g.c))},
c41(d){var w=this.d
w===$&&C.c()
w=w.d
w===$&&C.c()
return A.ia8(D.d.fZ(w,new A.ec5()),d)},
czf(d){var w,v,u=this
u.B7()
u.Sf()
if(u.aL)u.a2T()
u.aJ=null
w=u.c41(d)
if(w.length===0)return
u.m(new A.edt(u,w))
v=u.e
v===$&&C.c()
v.as=4800
v.e=6
v.f=2600
v.at=-1.2
v.ax=1.4
v.rb(!0)
u.adU()
v=u.RG
if(v!=null)v.bR(0)
v=new A.a5i(u.gbOU(),Z.BJ)
v.h8(0)
u.RG=v},
adU(){var w,v,u,t,s,r,q,p=this,o=++p.ry,n=p.rx
if(o>=n.length){p.a2S()
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
u=A.h1n(v,o,u.k4.t(0,t))
u.B(p.ghF())
p.aJ=u
p.ajt(u,p.gIC().h(0,t))
t=p.aJ
t.toString
t.B(p.ghF())
p.m(p.gj_())}s=w.r
if(s&&p.aJ!=null){p.aJ=null
p.m(p.gj_())}if(w.w==null&&w.x==null){s=!n||s
r=p.auh()
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
D.d.M(o,n+Math.max(1,new A.q(u.a-v.a,u.b-v.b,u.c-v.c).guZ()))}}o=w.e
if(o!=null)p.ei("\ud83d\ude81 "+o,!0)},
bOV(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this
if(!a2.p4||a2.c==null)return
w=a2.rx[a2.ry]
v=(Date.now()-a2.to)/1000
u=w.x
if(u!=null){t=a2.CW.gig()/1000
s=B.a4N[u].a
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
h=a2.auh()
k=A.pB(h.a,k,i)
m=A.pB(h.b,m,i)}if(v>=w.d){a2.adU()
return}}else{u=w.w
if(u!=null){u=B.kq[u]
t=a2.CW.gig()
t=$.aRM().cX4(0,D.d.cp(B.kq,u),t/1000).a
u=t[0]
m=new A.q(u,26,t[1])
l=v*0.6+0.8
k=new A.q(u+Math.sin(l)*190,85,t[1]+Math.cos(l)*190)
if(v<2.5){j=v/2.5
i=j*j*(3-2*j)
g=a2.auh()
k=A.pB(g.a,k,i)
m=A.pB(g.b,m,i)}if(v>=w.d){a2.adU()
return}}else{f=v*w.c
if(a2.x1.length<2||f>=D.d.gak(a2.xr)){a2.adU()
return}u=a2.xr
t=u.length
e=0
for(;;){s=e+2
if(!(s<t&&u[e+1]<=f))break;++e}t=u[e]
n=e+1
d=D.k.E((f-t)/(u[n]-t),0,1)
t=new A.ebp()
u=e-1
k=a2.aRF(t.$2(a2.x1,u),t.$2(a2.x1,e),t.$2(a2.x1,n),t.$2(a2.x1,s),d)
m=a2.aRF(t.$2(a2.x2,u),t.$2(a2.x2,e),t.$2(a2.x2,n),t.$2(a2.x2,s),d)}}a0=m.aE(0,k)
a1=Math.max(8,a0.guZ())
u=a2.e
u===$&&C.c()
t=Math.atan2(a0.a,-a0.c)
u.Hn(a1,Math.asin(D.k.E(-a0.b/a1,-1,1)),m,t)},
a2S(){var w=this,v=w.e
v===$&&C.c()
v.as=0
v=w.RG
if(v!=null)v.bR(0)
w.RG=null
if(w.c==null)return
w.m(new A.edF(w))
w.y3()
w.ei("The drone has landed.",!0)},
bOT(){var w=null,v=new A.ebn(this),u=D.w.j(0.55),t=C.m(28),s=C.J(D.aX,D.r,1),r=x.p
return C.p(D.A,C.eO(D.A,C.p(w,C.x(C.a([C.B(C.a([B.fSC,D.as,B.bGr,C.aA(w,D.rP,D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new A.ebm(this),w,w,w,w,w,w,!1,D.a3)],r),D.m,w,D.e,D.i,0,w,w),B.fFs,v.$4("\ud83c\udf06","The whole city","High flights over every street","city"),v.$4("\ud83e\udea7","Billboards and NGMY logos","Close to every ad, and the big logo board","billboards"),v.$4("\ud83c\udfc1","Edge billboards only","A tour round the big boards at the edges of the city","edges"),v.$4("\ud83c\udfe0","Houses","Fly by the houses, then go inside a big one","houses"),v.$4("\ud83c\udfe5","Hospital, shop and school","Fly in and look round inside each","hospital"),v.$4("\ud83d\ude8c","Traffic","Follow the self-driving buses and police cars","traffic"),v.$4("\ud83c\udfac","Everything","A little of all of it","all")],r),D.ak,w,D.e,D.P,0,D.p),D.f,w,w,new C.o(w,w,s,t,w,B.zm,D.n),w,w,w,D.bD,D.bQ,w,w,330),D.f,D.e3),D.f,u,w,w,w,w,w,w,w,w,w,w)},
gIC(){var w=this.d
w===$&&C.c()
w=w.d
w===$&&C.c()
return D.d.fZ(w,new A.ebV()).cx},
aut(d){var w,v=C.a([],x.u)
for(w=0;w<4;++w)v.push(d.r2(w))
return v},
czE(d){var w,v,u=C.a([],x.t)
for(w=0;w<4;++w){if(!d.r2(w)){v=d.d
v===$&&C.c()
v=w>=v.length}else v=!0
u.push(v?0:new A.edE(d,w).$0())}return u},
cGQ(d,e){var w,v,u,t,s,r=d.d
r===$&&C.c()
if(e>=r.length)return""
w=r[e]
r=w.a
v=d.at.h(0,r)
u=v==null
t=u?null:v.a
s=A.a2l(t==null?w.b:t).toLowerCase()
if(u||!A.h5C(w.b,v.a))return"nothing put in yet at "+A.j4(r).b
if(v.b.c<2)return"the "+s+" at "+A.j4(r).b+" is not finished: fasten every wire and close it"
return"the "+s+" at "+A.j4(r).b+" works but is NOT wired safely: "+d.apD(r).b},
ajt(d,e){var w=e==null
d.d=w?B.aAQ:this.aut(e)
d.e=w?B.a3c:this.czE(e)},
gbbl(){var w,v,u=this.aJ
if(u==null||!u.c)return null
w=u.a
v=u.b.a
return w==="tower"?v*100+u.f:v},
gaks(){var w,v=this.gbbl(),u=v==null?null:this.gIC().h(0,v)
if(u!=null)w=u.gbkX()||D.d.d_(this.aut(u),new A.eet())
else w=!1
return w},
asT(){var w,v,u,t,s,r=this,q=r.aJ,p=r.gbbl(),o=p==null,n=o?null:r.gIC().h(0,p)
if(q==null||o||n==null)return
if(!D.d.d_(r.aut(n),new A.eaX())){r.ei("Not quite done: the wiring is not right yet. Open the wiring bench again (tap the panel) and check every wire.",!1)
return}w=q.b
r.gIC().W(0,p)
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
s=10+r.jj.ap(26)
v=r.ghF()
if(v!=null)v.r+=s
r.qT=Date.now()
r.hP=0
q.d=B.dsA
q.e=B.a3c
q.B(r.ghF())
r.m(r.gj_())
A.fQ(880,120,0.3,"tri")
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
YJ(d){return this.c_X(d)},
c_X(d){var w=0,v=C.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k
var $async$YJ=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:l=d.b
k=l.a
if(d.a==="tower")k=k*100+d.f
s=t.gIC().c3(0,k,new A.ebS(l,d))
w=3
return C.b(t.yh(new A.ebT(s)),$async$YJ)
case 3:if(t.c==null){w=1
break}t.ajt(d,s)
if(t.gaks())t.asT()
else{d.B(t.ghF())
t.m(t.gj_())
r=x.s
q=C.a([],r)
if(s.r2(0))q.push("outlet 1")
if(s.r2(1))q.push("outlet 2")
if(s.r2(2))q.push("the ceiling light")
if(s.r2(3))q.push("the switch")
p=C.a([],r)
if(!s.r2(0))p.push("outlet 1")
if(!s.r2(1))p.push("outlet 2")
if(!s.r2(2))p.push("the ceiling light")
if(!s.r2(3))p.push("the switch")
r=C.a([],r)
for(o=0;o<4;++o)if(!s.r2(o))r.push(t.cGQ(s,o))
n=x.cc
m=C.C(new C.Z(r,new A.ebU(),n),n.k("M.E"))
r=q.length===0?"Nothing is fixed yet":"Fixed so far: "+D.d.aH(q,", ")
p=D.d.aH(p,", ")
q=m.length===0?"":"Why: "+C.d5(m,0,C.dC(2,"count",x.S),C.T(m).c).aH(0,"; ")+". "
t.ei(r+". Still to do: "+p+". "+q+"Tap the red frames to carry on.",!1)}case 1:return C.h(u,v)}})
return C.i($async$YJ,v)},
abs(d){return this.bRM(d)},
bRM(d){var w=0,v=C.j(x.H),u,t=this,s,r,q,p,o
var $async$abs=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:o=t.d
o===$&&C.c()
s=o.d
s===$&&C.c()
r=d.a
q=s[o.e].db.c3(0,r,new A.ebx())
w=3
return C.b(t.yh(new A.eby(q)),$async$abs)
case 3:if(t.c==null){w=1
break}if(q.c>=2&&A.La(A.t7("light"),q).a==="ok"){o=t.d
s=o.d
s===$&&C.c()
s[o.e].db.W(0,r)
o=t.d
s=o.d
s===$&&C.c()
s[o.e].k3.W(0,r)
p=10+t.jj.ap(26)
r=t.ghF()
if(r!=null)r.r+=p
t.m(t.gj_())
t.ei("The street light is on again. You wired it correctly: black to black, white to white, ground to ground. +"+p+" stars.",!0)}else t.ei("The light is still out: finish the wiring and fit the cover, then it comes on.",!1)
case 1:return C.h(u,v)}})
return C.i($async$abs,v)},
c8u(){var w,v,u=this,t=u.aC
if(t==null)return
w=u.d
w===$&&C.c()
v=w.d
v===$&&C.c()
v[w.e].dB(0,"crate",t.f+Math.sin(t.w)*34,t.r+Math.cos(t.w)*34)
u.al=null
u.m(u.gj_())
u.ei("You put the crate down.",!0)},
c5W(){var w,v,u,t,s,r,q,p,o=this,n=o.d
n===$&&C.c()
n=n.d
n===$&&C.c()
w=D.d.fZ(n,new A.ec7())
if(o.gaXo())return
n=x._
v=C.a([],n)
for(u=w.x,t=u.length,s=w.k4,r=0;r<u.length;u.length===t||(0,C.L)(u),++r){q=u[r]
p=q.b
if(p==="house2"||p==="bighouse"){p=q.a
p=!s.t(0,p)&&p!==o.ji}else p=!1
if(p)v.push(q)}if(s.a<2&&v.length!==0&&o.bD==null&&o.bE==null){q=v[o.jj.ap(v.length)]
v=q.a
s.M(0,v)
o.ji=v
v=q.b==="bighouse"?"the big house":"the house"
o.b55(new A.Qk(q,v,"power","",o.aOv(),0))}n=C.a([],n)
for(v=u.length,t=w.k3,r=0;r<u.length;u.length===v||(0,C.L)(u),++r){q=u[r]
s=q.b
if((s==="pole"||s==="lamppost")&&!t.t(0,q.a))n.push(q)}if(t.a<3&&n.length!==0&&D.o.F(o.bX,90)===0){t.M(0,n[D.o.F(o.bX*5,n.length)].a)
o.ei("\u26a1 A street light went out in the town. Find it (it is dark, with a red sign) and fix it.",!1)}n=o.d
v=n.d
v===$&&C.c()
if(v[n.e].c==="outside"&&o.aJ==null)o.m(o.gj_())},
axi(d){return this.c5X(d)},
c5X(d){var w=0,v=C.j(x.H),u=this
var $async$axi=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:u.m(new A.ec8(u,d))
return C.h(null,v)}})
return C.i($async$axi,v)},
aXz(){var w,v=this.fC,u=v==null?null:v.a
if(u==null)return null
w=A.vG(new A.q(0,0,B.hE.h(0,u.b).d/2+60),u.e*3.141592653589793/2)
return new C.z(u.c+w.a,u.d+w.c)},
awq(){var w=this.aC,v=this.aXz()
if(w==null||v==null)return null
return D.k.V(Math.sqrt(Math.pow(v.a-w.f,2)+Math.pow(v.b-w.r,2))/10)},
csM(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.aC,g=j.gKz()
g=g==null?i:g.ga71(0)
if(g==null){g=j.gpn()
g=g==null?i:g.ga71(0)
w=g}else w=g
if(w==null)w=j.aXz()
g=!1
if(j.fC==null){v=j.gpn()
if((v==null?i:v.x)==null){g=j.gKz()
g=(g==null?i:g.f)==null}}v=!0
if(!g)if(h!=null)if(w!=null){g=j.d
g===$&&C.c()
v=g.d
v===$&&C.c()
g=v[g.e].c!=="outside"||j.aJ!=null}else g=v
else g=v
else g=v
if(g)return B.Dc
g=C.a([],x.z)
u=new A.fg(g)
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
u.aE5(new A.q(h.f+o*k,1.4,h.r+n*k),B.hhR,D.bt,p)
k+=26;++l}}u.f=3
u.d=0.4
u.dv(new A.q(v,0,s),new A.q(v,170,s),4,D.bt,8)
u.dv(new A.q(v,0,s),new A.q(v,1.6,s),24,D.bt,14)
return g},
bHi(){var w,v,u,t,s,r,q,p=this,o=null,n=p.y1,m=new A.ear(),l=new A.eaq(),k=x.p
if(n!=null){w=p.awq()
v=C.a([C.B(C.a([C.ha(D.aA,o,C.d(n.gbf3(),o,o,o,o,o,o,D.pG,o,o,o),o,24),D.bc,C.E(C.x(C.a([C.d(n.gaEf(),o,o,o,o,o,o,D.de,o,o,o),B.fO3],k),D.E,o,D.e,D.i,0,D.p),1),C.aA(o,D.rP,D.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new A.eas(p),o,o,o,o,o,o,!1,D.a3)],k),D.m,o,D.e,D.i,0,o,o),D.ae],k)
for(u=n.gaHy(0),t=0;t<3;++t)v.push(m.$1(u[t]))
u=D.bt.j(0.12)
s=C.m(14)
r=C.J(D.bt.j(0.5),D.r,1)
v.push(C.p(o,C.B(C.a([B.c_W,D.as,C.E(C.d(w==null?"A yellow line on the ground will show you the way.":"Follow the yellow line on the ground. It is about "+C.w(w)+" metres away.",o,o,o,o,o,o,D.pE,o,o,o),1)],k),D.m,o,D.e,D.i,0,o,o),D.f,o,o,new C.o(u,o,r,s,o,o,D.n),o,o,o,D.l7,D.bT,o,o,o))
v.push(l.$5$primary(A1.Ho,"Show me the way",D.bt,new A.eat(p),!0))
v.push(l.$4(B.bNf,"Take me there",D.be,new A.eau(p,n)))
v.push(l.$4(D.jY,"Later",D.aA,new A.eav(p,n)))
q=C.x(v,D.ak,o,D.e,D.P,0,D.p)}else q=C.x(C.a([B.f43,D.ae,m.$1("Hello, this is the City office. A few calls were missed."),m.$1("Please answer the phone, so you can keep working."),m.$1("Every call is a person who needs help. Thank you for answering!"),l.$5$primary(D.hA,"OK, I will answer",D.be,new A.eaw(p),!0)],k),D.ak,o,D.e,D.P,0,D.p)
k=D.w.j(0.55)
v=C.m(28)
return C.p(D.A,C.eO(D.A,C.p(o,q,D.f,o,o,new C.o(o,o,C.J(D.aX,D.r,1),v,B.dse,B.zm,D.n),o,o,o,D.bD,D.bQ,o,o,330),D.f,D.e3),D.f,k,o,o,o,o,o,o,o,o,o,o)},
cv5(){var w,v,u,t,s=this,r=s.d
r===$&&C.c()
w=r.d
w===$&&C.c()
v=w[r.e].BV(s.Q)
if(v==null)return
u=B.dA4.h(0,v.b)
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
w=s.ghF()
if(w!=null)w.r+=u
s.m(s.gj_())
s.ei("Sold for "+C.w(u)+" points.",!0)},
A6(d){return this.bIn(d)},
bIn(d){var w=0,v=C.j(x.H),u,t=this,s
var $async$A6=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return C.b(C.bV(D.L,null,new A.eaT(d),s,!0,!0,!0,null,!1,!1,x.H),$async$A6)
case 3:if(t.c==null){w=1
break}t.m(new A.eaU(t))
case 1:return C.h(u,v)}})
return C.i($async$A6,v)},
crJ(d){var w,v,u=this.ghF()
if(u!=null){w=u.c
w===$&&C.c()
w=d>=w.length}else w=!0
if(w)return C.f8(null,x.H)
w=u.c
w===$&&C.c()
v=w[d]
w=this.c
w.toString
return C.bV(E.mC,null,new A.edg(this,v,u),w,!0,!0,!0,D.k5,!1,!1,x.H)},
azC(d){var w=this.c
w.toString
return C.bV(E.mC,null,new A.ecY(this,d),w,!0,!0,!1,D.k5,!1,!1,x.H)},
cEr(){var w=this.c
w.toString
return C.bV(E.mC,null,new A.eed(this),w,!0,!0,!0,D.k5,!1,!1,x.H)},
cDO(){var w=this.c
w.toString
return C.bV(D.L,null,new A.ee_(this),w,!0,!0,!0,null,!1,!1,x.H)},
b7Z(d,e){var w,v,u,t=this,s=t.dx
if(s!=null)s.a4(0)
s=t.d
s===$&&C.c()
s=s.gqU()
w=s.length
v=0
for(;v<w;++v){u=s[v]
if(u.k1==null)u.k1="tv100"
if(u.c==="hall")if(u.k2==null)u.k2="tv100"
u.p2=!0}t.z=!1
s=x.fG
w=t.d
if(e){s=new A.aWD(!0,w,d,C.a([],s))
s.b_x()}else{s=new A.aWD(!1,w,d,C.a([],s))
s.b_x()}t.cx=s
t.cy=t.CW.gig()/1000
t.x=!0
t.r="look"
t.w=!1
s=D.d.gI(t.cx.d)
t.bj.aa(0)
t.b8=!1
t.m(new A.edB(t,s.a))
t.y3()
t.dx=C.dh(D.jh,new A.edC(t))
t.m(new A.edD())},
czA(d){return this.b7Z(d,!1)},
bOb(d,e){var w,v=d.w[e],u=v.b
A:{if("left"===u){w=new A.q(-d.geb(0)/2,40,v.c+d.gh0(0)/2-40)
break A}if("right"===u){w=new A.q(d.geb(0)/2,40,v.c+d.gh0(0)/2-40)
break A}w=new A.q(v.c,40,0)
break A}return w},
cDP(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=i.cx
if(h==null||i.c==null)return
w=i.CW.gig()/1000-i.cy
v=h.e
v===$&&C.c()
if(w>=v){i.Sf()
i.iL("The tour is over. Press Tour to walk the house again.")
return}if(i.b8)return
u=h.bck(w)
v=i.d
v===$&&C.c()
t=v.e
if(u.a!==t){i.ajR(u)
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
if(D.a.a0(q,"ad")&&i.bj.M(0,q)){s.p3=D.o.F(s.p3+1,8)
A.fQ(1000,50,0.25,"tri")
p=!0}if(p)i.m(i.gj_())
m=Math.max(s.geb(0)*0.95,s.gh0(0)*1.15)+20
t=t&&v<s.w.length
q=u.b
if(t){l=i.bOb(s,v)
k=D.dw.aw(0,D.k.E(u.ay,0,1))
j=s.w[v].b
v=i.e
v===$&&C.c()
t=j==="back"?14:0
if(j==="left")n=0.55*k
else n=j==="right"?-0.55*k:-0.03
v.im(m+(70-m)*k,0.2-0.07*k,new A.q(l.a*0.9+q*0.1,36,l.c+t),n)}else{v=i.e
v===$&&C.c()
v.im(m,0.24,new A.q(q*0.7,30,u.c*0.6+8),-0.05-q/(s.geb(0)/2)*0.2)}if(u.as!==i.dy)i.m(new A.ee0(i,u))},
ajR(d){return this.cDN(d)},
cDN(d){var w=0,v=C.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j
var $async$ajR=C.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:l={}
r.b8=!0
l.a=null
t=4
p=$.aV.al$.x.h(0,r.a_)
p=p==null?null:p.gbd()
q=x.cU.a(p)
p=q
p=p==null?null:p.m7(0.6).d9(0,D.iY)
j=l
w=7
return C.b(x.fa.b(p)?p:C.dV(p,x.eT),$async$ajR)
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
r.axS(d.a,!0)
p=r.d
n=p.d
n===$&&C.c()
m=n[p.e]
p=d.ch
if(p>=0&&p<m.w.length)m.ax.n(0,p,1.25)
r.m(new A.edQ(l,r))
l=r.e
l===$&&C.c()
l.d=new A.q(d.b,36,d.c+4)
l.c=70
l.a=-0.03
l.b=0.15
r.b8=!1
case 1:return C.h(u,v)
case 2:return C.f(s.at(-1),v)}})
return C.i($async$ajR,v)},
Sf(){var w,v,u,t=this,s=t.dx
if(s!=null)s.a4(0)
t.dx=null
s=t.d
s===$&&C.c()
s=s.d
s===$&&C.c()
w=s.length
v=0
for(;v<s.length;s.length===w||(0,C.L)(s),++v){u=s[v]
u.at.aa(0)
u.ax.aa(0)}t.aB=null
t.b8=!1
t.m(new A.edI(t))
t.y3()},
cmr(){var w,v,u,t,s,r,q,p,o,n=this,m=n.cx
if(m!=null)return m.bck(n.CW.gig()/1000-n.cy)
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
return A.atV(n.c5.d>0,0,-1,"",!1,o,"",-1,q,!1,!1,!1,v.a,p,r,u,s,t)}return null},
b8I(){var w,v=this,u=v.c5,t=u.r
if(t<=0)return
u.r=0
w=v.ghF()
if(w!=null)w.r=Math.max(0,w.r-t)
if(v.c!=null)v.m(new A.edJ())},
aZn(){var w,v,u,t=this.d
t===$&&C.c()
w=t.d
w===$&&C.c()
t=w[t.e]
v=new A.b9Y(t,-t.geb(0)/2+10,t.geb(0)/2-10,-760,t.gh0(0)-10,0,24,0,B.dih)
v.GF(0)
u=$.blx
if(u!=null){t=C.aK(u.h(0,"seed"))
t=t==null?null:D.k.N(t)
t=t===this.d.b&&typeof u.h(0,"x")=="number"&&typeof u.h(0,"z")=="number"}else t=!1
if(t){v.f=C.e3(u.h(0,"x"))
v.r=C.e3(u.h(0,"z"))
t=C.aK(u.h(0,"yaw"))
if(t==null)t=null
v.w=t==null?0:t
v.GF(0)}return v},
S9(){var w,v=this,u=v.d
u===$&&C.c()
w=u.d
w===$&&C.c()
if(w[u.e].c!=="outside")return
u=v.aC;(u==null?v.aC=v.aZn():u).GF(0)
v.aL=!0
v.bM=Date.now()
u=v.b4
if(u!=null)u.bR(0)
u=new A.a5i(v.gcGx(),D.ZV)
u.h8(0)
v.b4=u
v.m(new A.edA())
v.iL("Slide the round stick to walk. Walk up to a door and through it to go in: the house, the hospital or the shop. Double tap a spot to go there.")},
a2T(){var w,v=this
v.aL=!1
v.be=v.b2=0
v.bi=!1
w=v.b4
if(w!=null)w.bR(0)
v.b4=null
w=v.aC
if(w!=null)w.x=!1
v.m(new A.edH())},
cGy(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.aJ,f=g==null
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
w.GF(0)
w.z=h.bi&&h.bG==null
if(h.bG==null)w.aJP()
w.cPn(s)
v=h.e
v===$&&C.c()
r=Math.sin(v.a)
q=Math.cos(h.e.a)
v=h.be
u=h.b2
p=h.bG==null
o=h.c5
n=p?o.c>0:o.b<=0
if(p)w.ch=o.d>0?0.28:1
if(n){if((u!==0||v!==0||w.at!=null)&&t-h.c8>6000){h.c8=t
h.ei(p?"You are too tired to walk. Rest a little, or buy some food in a shop.":"The car has no gas. Get out, walk to a gas station and buy gas.",!1)}w.at=null
m=!1}else if(u!==0||v!==0){w.at=null
m=w.aM6(0,r*v+q*u,-q*v+r*u,s)}else m=w.FH(0,s)
v=!m
if(v)w.x=!1
if(h.ex===0){u=h.d
u===$&&C.c()
p=u.d
p===$&&C.c()
l=p[u.e].c==="outside"}else l=!1
if(l){u=m&&h.bG==null
k=o.bkc(s,m&&h.bG!=null,u)}else k=null
if(k!=null)h.ei(k,!1)
h.b8I()
if(!v||w.Q>0){u=h.e
p=w.f
o=w.r
u.cx=null
u.d=new A.q(p,30,o)
u.adW()
u.aW()}if(!f){g.cx=h.al
j=g.fw(0,h.ghF())
h.al=g.cx
if(j!=null){h.iL(j)
h.m(h.gj_())}if(g.cy){g.cy=!1
h.YJ(g)}if(g.dx){g.dx=!1
if(!h.id)h.m(new A.eep(h))}if(g.db){g.db=!1
if(!h.k2)h.m(new A.eeq(h))}if(g.w){g.w=!1
if(!h.k3)h.m(new A.eer(h))}f=g.x
if(f!==h.k4){h.k4=f
v=h.e
if(f)v.Ni(B.h3k)
else v.Ni(new A.q(0,30,110))}f=g.at
f===$&&C.c()
v=!1
if(f.r>308)if(Math.abs(f.f)<36)f=!(g.a==="tower"&&g.f>1)
else f=v
else f=v
if(f)h.aXR()
return}f=!1
if(h.bG==null){f=h.gpn()
f=(f==null?null:f.x)!=null}if(f){f=h.gpn()
f.toString
h.aSl(f.bkL(w.f,w.r,h.CW.gig()/1000))}f=!1
if(h.bG==null){f=h.d
f===$&&C.c()
u=f.d
u===$&&C.c()
f=u[f.e].c==="outside"&&h.ok==null&&h.ex===0}if(f){f=$.aRM()
f.FH(0,h.CW.gig()/1000)
i=f.cRH(w.f,w.r)
if(i>=0)h.csy(i)}f=h.bG
if(f!=null)h.cEy(w)
if(m&&h.bG==null&&h.cGw(w))return
h.cER(w)
if(!v||D.o.F(h.c1++,25)===0)h.cqT()},
cGw(d){var w,v,u,t,s=this
if(Math.abs(d.f)<24){w=d.r
w=w>-2&&w<14}else w=!1
if(w)if(!(Math.abs(d.w)>2.2)){w=d.at
w=w!=null&&w.b<4}else w=!0
else w=!1
if(w){s.a2T()
s.AD(10)
s.iL("You are inside the living room. Use Go outside to come back out.")
return!0}w=s.d
w===$&&C.c()
v=w.d
v===$&&C.c()
w=D.d.gaf(v[w.e].x)
v=new C.f2(w,new A.eeo())
while(v.C()){u=w.gS(0)
t=A.vG(new A.q(0,0,B.hE.h(0,u.b).d/2+10),u.e*3.141592653589793/2)
if(Math.abs(d.f-(u.c+t.a))<22&&Math.abs(d.r-(u.d+t.c))<16){s.XZ(u)
return!0}}return!1},
b4t(d){var w,v,u,t,s,r,q,p,o=this,n=o.aC,m=o.d
m===$&&C.c()
w=!0
if(m.a.length===0)if(n!=null){w=m.d
w===$&&C.c()
w=w[m.e].c!=="outside"||o.c==null}if(w)return
w=o.aL
v=n.f
u=n.r
t=n.w
s=o.aJ
s=s==null?null:s.b.a
r=o.e
r===$&&C.c()
$.blx=C.H(["seed",m.b,"steer",w,"x",v,"z",u,"yaw",t,"inner",s,"cy",r.a,"cp",r.b,"cd",r.c],x.N,x.A)
q=Date.now()
if(d||q-o.dw>4000){o.dw=q
p=D.X.aq($.blx,null)
C.az().bJ(new A.ed6(p),x.y).eK(new A.ed7())}},
cqT(){return this.b4t(!1)},
ahX(){var w=0,v=C.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0
var $async$ahX=C.e(function(a1,a2){if(a1===1){s.push(a2)
w=t}for(;;)switch(w){case 0:d=$.blx
w=d==null?3:4
break
case 3:t=6
w=9
return C.b(C.az(),$async$ahX)
case 9:q=a2
p=C.aS(J.r(q.a,"ngmy_city_where"))
if(p!=null)d=J.Bd(x.G.a(D.X.aM(0,p,null)),x.N,x.A)
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
break}$.blx=d
if(!r.aL)r.S9()
n=C.aK(J.r(d,"inner"))
k=n==null?null:D.k.N(n)
if(k!=null&&r.aJ==null){n=r.d
n===$&&C.c()
m=n.d
m===$&&C.c()
n=m[n.e].x
m=n.length
j=0
for(;j<n.length;n.length===m||(0,C.L)(n),++j){i=n[j]
if(i.a===k&&B.a8V.t(0,i.b)){r.XZ(i)
break}}}n=r.aJ
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
n.Hn(g,D.k.E(f,e.at,e.ax),m,l)
case 1:return C.h(u,v)
case 2:return C.f(s.at(-1),v)}})
return C.i($async$ahX,v)},
bEr(){var w,v,u,t,s,r,q=this,p=q.aC,o=!0
if(p!=null){w=q.d
w===$&&C.c()
v=w.d
v===$&&C.c()
if(v[w.e].c==="outside")if(q.aJ==null)if(q.aL)if(q.bG==null){o=q.e
o===$&&C.c()
o=o.c<340}}if(o)return B.Dc
o=q.e
o===$&&C.c()
u=o.c/340
o=C.a([],x.z)
t=new A.fg(o)
t.f=3
s=78+6*u
w=p.f
v=p.r
r=s+16*u
t.yU(new A.q(w,s,v),new A.q(w,r,v),0,B.aiT,7*u,0.2,6)
v=p.f
w=p.r
t.dm(new A.q(v,r,w),new A.q(v,s+30*u,w),2.2*u,B.aiT,0.2,6)
return o},
XZ(d){var w,v,u,t,s,r,q,p=this
p.be=p.b2=0
w=d.b
if(w==="store"||w==="gasstation")w="shop"
else if(w==="hq")w="tower"
v=p.d
v===$&&C.c()
u=v.d
u===$&&C.c()
t=d.a
s=A.h1n(w,d,u[v.e].k4.t(0,t))
s.cx=p.al
s.B(p.ghF())
p.ajt(s,p.gIC().h(0,t))
s.B(p.ghF())
p.aJ=s
p.cK=null
w=s.a
if(w==="tower"){v=p.d
u=v.d
u===$&&C.c()
r=u[v.e].cy.h(0,t)
v=p.fC
if(v!=null&&v.c==="office"&&r!=null)p.k3=!0}v=p.e
v===$&&C.c()
p.di=new C.b7(v.c,v.a,v.b)
v.e=60
v.f=420
v.at=0.15
v.ax=1.35
v.z=!1
v.r=B.f18
v.rb(!0)
v=p.e
u=D.k.E(v.c,60,420)
t=p.e
q=t.a
v.im(u,D.k.E(t.b,0.15,1.35),new A.q(0,30,110),q)
p.m(p.gj_())
A:{if("hospital"===w){w="The hospital. Walk onto the blue mat to admit the sick, and up to a bed to treat the patient. Walk to the green mat to go out."
break A}if("dmv"===w){w="The licence office. Walk onto the blue mat at the desk to get your Uber licence. Walk to the green mat to go out."
break A}if("tower"===w){w="The lobby of an office tower. Walk onto the blue mat (or tap the elevator) to choose a level. Walk to the green mat to go out."
break A}if("house2"===w||"bighouse"===w){w="The house. Walk onto the red or green mat at the breaker panel. Walk to the green mat to go out."
break A}if("school"===w){w="The school. Walk onto the mats to teach the class or read in the library. Walk to the green mat to go out."
break A}if("firestation"===w){w="The fire station. Walk onto the mats to check the equipment. Walk to the green mat to go out."
break A}w="The shop. Walk onto the yellow mat for food and the purple mat for medicine. Walk to the green mat to go out."
break A}p.iL(w)
A.fQ(660,80,0.25,"tri")},
aXR(){var w,v,u,t,s,r,q,p,o,n=this,m=n.aJ,l=n.aC
if(m==null||l==null)return
w=m.b
v=B.hE.h(0,w.b)
v.toString
n.al=m.cx
n.aJ=null
n.be=n.b2=0
u=A.vG(new A.q(0,0,v.d/2+30),w.e*3.141592653589793/2)
l.f=w.c+u.a
l.r=w.d+u.c
l.w=0
l.at=null
l.GF(0)
n.m(n.gj_())
n.y3()
t=n.di
v=n.e
v===$&&C.c()
s=l.f
r=l.r
q=t==null
p=q?null:t.a
o=q?null:t.b
q=q?null:t.c
v.im(p,q,new A.q(s,30,r),o)
n.iL("You are back in the city.")},
cER(d){var w,v,u,t,s,r,q,p,o,n,m=this,l={}
l.a=null
w=m.bG==null
v=!1
if(!w||m.al==null){u=m.c5.b
if(u<(!w?0.7:0.99)){u=m.d
u===$&&C.c()
t=u.d
t===$&&C.c()
u=D.d.b3(t[u.e].x,new A.eeh(d))
v=u}}if(v)l.a=new C.Gj(new A.eei(m),"\u26fd Buy gas ("+A.h9Z(m.c5.b)+" \u2b50)")
else if(!w)l.a=new C.Gj(m.gbTR(),"\ud83d\udeaa Get out")
else{if(m.al!=null)l.a=new C.Gj(m.gc8t(),"\u2b07 Put the crate down")
w=m.d
w===$&&C.c()
u=w.d
u===$&&C.c()
w=u[w.e].x
u=w.length
s=0
for(;s<w.length;w.length===u||(0,C.L)(w),++s){r=w[s]
q=Math.sqrt(Math.pow(d.f-r.c,2)+Math.pow(d.r-r.d,2))
t=r.b
p=B.hE.h(0,t).a.toLowerCase()
if(l.a!=null)break
if(t==="crate"&&q<46){l.a=new C.Gj(new A.eej(m,r),"\ud83d\udce6 Pick up the crate")
break}if(t==="pole"||t==="lamppost"){o=m.d
n=o.d
n===$&&C.c()
o=n[o.e].k3.t(0,r.a)&&q<60}else o=!1
if(o){l.a=new C.Gj(new A.eek(m,r),"\ud83d\udd27 Fix the street light")
break}if(D.d.t(B.I9,t)&&q<36){l.a=new C.Gj(new A.eel(m,r),"\ud83c\udf4e Feed the "+p)
break}if(D.d.t(B.dgy,t)&&q<60){l.a=new C.Gj(new A.eem(m,r),"\ud83d\ude97 Get in the "+p)
break}}}w=l.a
w=w==null?null:w.b
u=m.cK
if(w!=(u==null?null:u.b))m.m(new A.een(l,m))},
bR2(d){var w,v=this,u=v.cl,t=d.a,s=u.h(0,t),r=B.hE.h(0,d.b).a
if(s!=null&&v.CW.gig()/1000-s<30){v.ei("The "+r.toLowerCase()+" has just eaten. Come back in a little while.",!1)
return}u.n(0,t,v.CW.gig()/1000)
u=v.ghF()
if(u==null)w=null
else{++u.r
w="You fed the "+r.toLowerCase()+". +1 point."
u.PT(w)}if(w==null)w="You fed the "+r.toLowerCase()+"."
A.fQ(880,90,0.25,"tri")
v.m(new A.ebw())
v.iL(w)},
bTG(d){var w=this,v=w.aC
if(v==null)return
w.bG=d
v.CW=d.a
v.ay=22
v.ch=2.4
v.f=d.c
v.r=d.d
v.w=Math.atan2(Math.cos(d.e*3.141592653589793/2),-Math.sin(d.e*3.141592653589793/2))
v.at=null
v.GF(0)
w.m(w.gj_())
w.iL("You are driving the "+B.hE.h(0,d.b).a.toLowerCase()+". Slide the stick to drive. Press Get out to stop.")
A.fQ(300,120,0.25,"tri")},
bTS(){var w,v,u,t,s,r,q=this,p=q.bG,o=q.aC
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
o.GF(0)
for(w=[46,62,80],u=0;u<3;++u){t=w[u]
s=o.f+Math.sin(v)*t
r=o.r+Math.cos(v)*t
if(!o.KR(s,r)){o.f=s
o.r=r
break}}o.aJP()
q.m(q.gj_())
q.iL("You got out.")},
bOS(){var w=this.bG,v=this.aC
if(w==null||v==null)return null
return new C.e2([w.b,v.f,v.r,v.w,w.f])},
yh(d){return this.cow(d)},
cow(d){var w=0,v=C.j(x.H),u=1,t=[],s=[],r=this,q,p
var $async$yh=C.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:++r.ex
q=r.eu?r.ab:0
u=2
p=r.c
p.toString
w=5
return C.b(C.a5(p,!1).cc(C.eh(new A.ed4(q,d),!1,null,x.H)),$async$yh)
case 5:s.push(4)
w=3
break
case 2:s=[1]
case 3:u=1;--r.ex
w=s.pop()
break
case 4:return C.h(null,v)
case 1:return C.f(t.at(-1),v)}})
return C.i($async$yh,v)},
Za(){var w=0,v=C.j(x.H),u=1,t=[],s,r,q
var $async$Za=C.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
w=6
return C.b(C.az(),$async$Za)
case 6:s=e
w=C.ev(J.r(s.a,"ngmy_city_locked_until"))!=null?7:8
break
case 7:w=9
return C.b(J.hu(s,"ngmy_city_locked_until"),$async$Za)
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
return C.i($async$Za,v)},
aC4(d){var w=this,v=++w.kc
if(v>=3){w.kc=0
w.B7()
w.b13()}else if(v===2){w.ei(d+". That is two in a row.",!1)
w.b13()}else w.ei(d+". Answer the phone and finish the job, or you lose your place.",!1)},
b13(){A.fQ(1046,160,0.3,"sine")
this.m(new A.ecc(this))},
gaXo(){return this.ex>0||this.fC!=null||Date.now()<0||this.p4},
aOv(){var w,v,u=B.ds0[this.jj.ap(6)]
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
c8x(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this,a2=a1.d
a2===$&&C.c()
a2=a2.d
a2===$&&C.c()
w=D.d.fZ(a2,new A.ec9())
v=a1.ghF()
a2=x._
u=C.a([],a2)
for(t=w.x,s=t.length,r=w.k4,q=0;q<t.length;t.length===s||(0,C.L)(t),++q){p=t[q]
o=p.b
if(o==="house2"||o==="bighouse"){o=p.a
o=!r.t(0,o)&&o!==a1.ji}else o=!1
if(o)u.push(p)}s=C.a([],a2)
for(o=t.length,n=w.k3,q=0;q<t.length;t.length===o||(0,C.L)(t),++q){p=t[q]
m=p.b
if((m==="pole"||m==="lamppost")&&!n.t(0,p.a))s.push(p)}l=new C.Z(t,new A.eca(),C.T(t).k("Z<1>"))
k=C.a([0,1,2,3],x.t)
o=a1.jj
D.d.e_(k,o)
a2=C.a([],a2)
for(m=t.length,j=w.cy,q=0;q<t.length;t.length===m||(0,C.L)(t),++q){p=t[q]
i=p.b
if((i==="tower"||i==="hq")&&!j.aj(0,p.a))a2.push(p)}for(t=k.length,m=v!=null,q=0;q<k.length;k.length===t||(0,C.L)(k),++q){h=k[q]
if(h===0&&u.length!==0&&r.a<4){p=u[o.ap(u.length)]
a2=p.a
r.M(0,a2)
a1.ji=a2
a2=p.b==="bighouse"?"the big house":"the house"
return new A.Qk(p,a2,"power","",a1.aOv(),0)}if(h===1&&m&&!l.gan(0)){i=v.gC7()
g=C.T(i).k("Z<1>")
f=C.C(new C.Z(i,new A.ecb(),g),g.k("M.E"))
i=f.length
if(i!==0){e=f[o.ap(i)]
e.e=!0
e.c=Math.min(e.c,70)
d=l.gaf(0)
if(!d.C())C.b9(C.fs())
return new A.Qk(d.gS(0),"the hospital","sick",e.a.b,"",0)}}if(h===3&&a2.length!==0&&j.a<3){p=a2[o.ap(a2.length)]
a0=2+o.ap(A.hAg(p)-1)
j.n(0,p.a,a0)
return new A.Qk(p,p.b==="hq"?"the NGMY company building":"the office tower","office","","",a0)}if(h===2&&s.length!==0&&n.a<4){p=s[o.ap(s.length)]
n.M(0,p.a)
return new A.Qk(p,"the street","light","","",0)}}return null},
aXy(d){var w,v,u,t=this.d
t===$&&C.c()
t=t.d
t===$&&C.c()
w=D.d.fZ(t,new A.ebW())
switch(d.c){case"power":return!w.k4.t(0,d.a.a)
case"light":return!w.k3.t(0,d.a.a)
case"office":return!w.cy.aj(0,d.a.a)
default:v=this.ghF()
if(v==null)return!1
t=v.c
t===$&&C.c()
u=new C.Z(t,new A.ebX(d),C.T(t).k("Z<1>"))
if(!u.gaf(0).C())return!0
return u.gI(0).r>=0||!u.gI(0).e||!u.gI(0).f}},
St(d){var w,v,u,t=this,s=t.aC
if(s!=null){w=t.d
w===$&&C.c()
v=w.d
v===$&&C.c()
w=v[w.e].c!=="outside"}else w=!0
if(w)return
if(t.aJ!=null)t.aXR()
s.at=null
s.GF(0)
u=t.bSA(d,s)
s.f=u.a
s.r=u.b
s.aJP()
w=t.e
w===$&&C.c()
w.Ni(new A.q(s.f,30,s.r))
if(!t.aL)t.S9()},
bSA(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=d.b,i=B.hE.h(0,j)
i.toString
w=B.a8V.t(0,j)
v=w?i.d/2+32:34
u=A.vG(new A.q(0,0,1),d.e*3.141592653589793/2)
j=u.c
i=u.a
t=-i
s=C.a([],x.f)
if(w)for(r=0;r<5;++r)for(q=v+B.ddn[r],p=i*q,q=j*q,o=0;o<5;++o){n=B.d2w[o]
s.push(new C.z(d.c+p+j*n,d.d+q+t*n))}else for(m=0;m<12;++m){l=m*3.141592653589793/6
s.push(new C.z(d.c+Math.cos(l)*v,d.d+Math.sin(l)*v))}for(j=s.length,r=0;r<s.length;s.length===j||(0,C.L)(s),++r){k=s[r]
if(!e.KR(k.a,k.b))return k}return D.d.gI(s)},
czn(d){var w,v,u=this
u.fC=d
u.hB=0
u.St(d.a)
w=d.c
A:{if("sick"===w){v="New job: "+d.d+" is sick. Go into the hospital and onto the desk."
break A}if("light"===w){v="New job: a street light is out. Tap the dark light to fix it."
break A}v="New job: a house has no power. Walk in and fix it at the panel."
break A}u.ei(v,!0)
u.m(new A.edu())},
bUq(d){var w,v=this,u=v.d
u===$&&C.c()
w=u.d
w===$&&C.c()
if(w[u.e].c!=="outside")return
v.St(d)
u=d.b
if(u==="house2"||u==="bighouse")v.XZ(d)
else if(u==="tower"||u==="hq"){v.XZ(d)
v.m(new A.ebQ(v))}else v.ei(y.Y,!0)},
cDX(){var w,v,u,t=$.aRM(),s=C.a([],x.f),r=this.gpn()
r=r==null?null:r.amC(this.CW.gig()/1000)
if(r==null)r=B.Ii
w=r.length
v=0
for(;v<r.length;r.length===w||(0,C.L)(r),++v){u=r[v]
s.push(new C.z(u.b,u.c))}t.d=s
return A.imJ(this.CW.gig()/1000)},
csy(d){var w,v,u,t,s,r=this,q=Date.now()
if(q-r.tb<1e4)return
r.tb=q
w=r.aC
if(w==null)return
A.fQ(110,600,0.5,"noise")
C.fN()
r.be=r.b2=0
w.at=null
v=r.c5
v.a=Math.min(v.a,0.2)
v.c=v.d=0
u=B.kq[d].a==="bus"?"bus":"police car"
v=r.d
v===$&&C.c()
t=v.d
t===$&&C.c()
v=t[v.e].x
t=C.T(v).k("Z<1>")
s=C.C(new C.Z(v,new A.edi(),t),t.k("M.E"))
if(s.length===0){r.ei("A "+u+" ran you over! Always cross at the zebra crossing when the green walking person shows.",!1)
return}v=r.gpn()
if(v!=null)v.cXb(D.d.gI(s))
r.St(D.d.gI(s))
r.XZ(D.d.gI(s))
r.ei("\ud83d\ude91 A "+u+" ran you over! An ambulance brought you to the hospital. Medicine and food are being ordered for you: they are on the Orders board. Cross at the zebra crossing when the green walking person shows.",!1)
r.m(new A.edj(r))},
aja(){var w=0,v=C.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g
var $async$aja=C.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:h=r.d
h===$&&C.c()
if(h.a.length!==0){w=1
break}q=null
p=$.a4i
w=p==null||p.a!==h.b?3:4
break
case 3:t=6
w=9
return C.b(A.aUa(),$async$aja)
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
break}n=$.a4i
if(n!=null&&n.a===r.d.b)m=n
else{if(q!=null){h=C.aK(J.r(q,"seed"))
h=h==null?null:D.k.N(h)
if(h==null)h=-1
h=h===r.d.b}else h=!1
if(h)m=A.h1v(q)
else if(q!=null&&r.ek){h=C.aK(J.r(q,"seed"))
l=h==null?null:D.k.N(h)
h=A.aWC(l==null?r.d.b:l)
r.d=$.Ed=h
A.hfo(h,q)
m=A.h1v(q)}else{h=r.d.b
m=A.h1u(h,h)
m.NG(r.d)}}$.a4i=m
A.aUb().bJ(new A.edv(r),x.P)
for(h=m.d,k=h.length,j=r.bK,i=0;i<h.length;h.length===k||(0,C.L)(h),++i)j.M(0,h[i].a)
r.m(new A.edw(r))
r.by=C.dh(D.fB,new A.edx(r))
if(r.a.f==="city")r.ahX()
case 1:return C.h(u,v)
case 2:return C.f(s.at(-1),v)}})
return C.i($async$aja,v)},
c8w(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=i.ghF()
if(h==null||i.c==null)return
if(i.cx==null){w=i.d
w===$&&C.c()
h.aDJ(0,1,w)}if(++i.bX%8===0){w=i.d
w===$&&C.c()
h.CX(0,w)}if(i.aJ!=null&&i.gaks())i.asT()
w=!1
if(!i.aL)if(i.ex===0){v=i.d
v===$&&C.c()
u=v.d
u===$&&C.c()
if(u[v.e].c==="outside"){w=i.c5
w=w.c>0||w.d>0}}if(w){t=i.c5.a73(1)
if(t!=null)i.ei(t,!1)
i.b8I()}if(i.aL){w=i.d
w===$&&C.c()
v=w.d
v===$&&C.c()
w=v[w.e].c==="outside"&&!i.c5.f&&i.jj.ap(240)===0}else w=!1
if(w){w=i.c5
w.f=!0
w.aW()
i.ei("You feel unwell: a headache. You tire faster until you take pills from a shop.",!1)}if(Date.now()<0||i.ex>0)return
w=!1
if(D.o.F(i.bX,45)===20){v=i.d
v===$&&C.c()
if(v.a.length===0){w=v.d
w===$&&C.c()
v=w[v.e].c==="outside"
w=v}}if(w)i.c5W()
w=i.d
w===$&&C.c()
if(w.a.length===0){v=w.d
v===$&&C.c()
v=v[w.e].c==="outside"}else v=!1
if(v){w=i.gpn()
s=w==null?null:w.FH(0,i.CW.gig()/1000)
if(s!=null)i.ei("\ud83c\udfc1 "+s,!0)
r=i.aC
if(r!=null){w=i.gpn()
w=(w==null?null:w.x)!=null&&i.aJ==null}else w=!1
if(w){w=i.gpn()
w.toString
i.aSl(w.bkL(r.f,r.r,i.CW.gig()/1000))}q=i.fC
if(q!=null){++i.hB
if(i.aXy(q)){i.kc=0
i.qT=Date.now()
i.hP=0
i.fC=null
i.hB=0
if(q.c==="sick"){p=10+i.jj.ap(26)
w=i.ghF()
if(w!=null)w.r+=p
i.ei("The sick person is at the hospital. +"+p+" stars. Well done.",!0)}if(i.c!=null)i.m(i.gj_())}else if(i.hB>=240){i.fC=null
i.hB=0
i.aC4("The job was not finished in time")}}else{w=i.iS
if(w.length!==0&&i.aJ==null&&i.bD==null&&i.bE==null&&Date.now()-i.qT>1e4){o=D.d.cz(w,0)
if(!i.aXy(o))i.czn(o)}else if(i.bD==null&&i.bE==null&&++i.hP>=45)i.cvq()}}else{v=w.d
v===$&&C.c()
if(v[w.e].c!=="outside")i.hP=0}for(w=h.d,v=w.length,u=i.bK,n=0;n<w.length;w.length===v||(0,C.L)(w),++n){m=w[n]
l=i.d
k=l.d
k===$&&C.c()
if(k[l.e].c!=="outside")continue
if((i.ex>0||i.fC!=null||Date.now()<0||i.p4)&&!u.t(0,m.a))continue
if(u.M(0,m.a)){i.hP=0
i.bD=m
i.bE=null
i.b7S()}}u.pq(new A.ec2(h),!0)
j=i.bD
if(j!=null&&!D.d.b3(w,new A.ec3(j)))i.B7()},
cvq(){var w,v,u=this
u.hP=0
w=u.c8x()
if(w==null)return
if(u.gaXo()){v=u.iS
if(v.length<3)v.push(w)
return}u.b55(w)},
b55(d){var w=this
w.hP=0
w.bD=null
w.bE=d
w.b7S()},
b7S(){var w,v=this
v.T=0
w=v.P
if(w!=null)w.a4(0)
v.P=C.dh(D.rA,new A.edy(v))
v.m(new A.edz())},
B7(){var w=this,v=w.P
if(v!=null)v.a4(0)
w.P=null
if(w.c==null)return
w.m(new A.edG(w))},
c8z(){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null
if(l.ok!=null)return k
if(l.aL){w=l.d
w===$&&C.c()
v=w.d
v===$&&C.c()
u=v[w.e].c==="outside"}else u=!1
t=l.bD
s=l.bE
if(!u&&t==null&&s==null)return k
r=l.eA
w=new A.ecr()
v=new A.ecA(r)
q=x.p
p=C.a([],q)
if(s!=null){o=C.ha(D.aA,k,C.d(s.gbf3(),k,k,k,k,k,k,D.n2,k,k,k),k,28)
n=s.gaEf()
p.push(v.$7$about$avatar$glow$onAnswer$onDecline$onLater$who(s.gbrj(),o,D.bt,new A.ect(l,s),new A.ecu(l),new A.ecv(l,s),n))}if(t!=null){o=B.CS[t.b]
n=o.b
p.push(v.$6$about$avatar$glow$onAnswer$onDecline$who("NGMY City \xb7 mobile",C.ha(o.e.c,k,C.d(n[0],k,k,k,k,k,k,D.Kb,k,k,k),k,28),D.be,new A.ecw(l,t),l.gczV(),n))}if(u){v=C.a([],q)
o=l.cK
if(o!=null)v.push(w.$3$col("\u270b "+o.b,o.a,D.bt))
o=C.a([],q)
if(l.bG==null){n=l.bi
m=n?"\ud83c\udfc3 Run: on":"\ud83c\udfc3 Run"
o.push(w.$3$on(m,new A.ecx(l),n))}if(l.bG==null)o.push(w.$3$col("\u2b06 Jump",new A.ecy(l),D.cp))
v.push(C.B(o,D.m,k,D.e,D.P,0,k,k))
w=l.bG==null
o=w?206:140
v.push(new C.D(D.a_V,new C.a4(o,k,new A.Ux(l.c5,!w,12,k),k),k))
p.push(new C.D(B.bCD,C.B(C.a([new A.aJ2(new A.ecz(l),k),C.x(v,D.dI,k,D.e,D.P,0,D.p)],q),D.dI,k,D.iL,D.i,0,k,k),k))}return new C.a4(r,k,C.x(p,D.m,k,D.e,D.P,0,D.p),k)},
aUd(){var w=this.d
w===$&&C.c()
if(w.a.length!==0)this.Ep()
else this.a0y()},
Ep(){var w=0,v=C.j(x.H),u,t=this,s,r,q,p
var $async$Ep=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:p=t.d
p===$&&C.c()
s=p.d
s===$&&C.c()
r=s[p.e]
if(r.gza()){t.iL("This lesson is done. Try everything: it all works.")
w=1
break}p=r.p4
w=p==="ptrap"||p==="faucet"?3:5
break
case 3:if(r.RG==null)r.RG=A.h5b()
w=6
return C.b(t.yh(new A.ecd(r)),$async$Ep)
case 6:w=4
break
case 5:if(r.R8==null)r.R8=new A.CC(C.U(x.S,x.N))
w=7
return C.b(t.yh(new A.ece(r)),$async$Ep)
case 7:case 4:if(t.c==null){w=1
break}t.m(t.gj_())
if(r.gza()){p=t.ghF()
if(p!=null)p.r+=10
q=r.p4
A:{p="Done! Tap the outlet and plug something in."
if("switch"===q){p="Done! Tap the switch on the wall: the light comes on."
break A}if("fan"===q){p="Done! Tap the wall switch and the fan spins."
break A}if("outlet"===q||"gfci"===q)break A
s=D.d.t(B.jG,q)
if(s){p="Done! Tap the switch on the wall: it works."
break A}s=D.d.t(B.lj,r.p4)
if(s)break A
p="Done! The sink works."
break A}t.iL(p)}case 1:return C.h(u,v)}})
return C.i($async$Ep,v)},
akr(d){return this.cGZ(d)},
cGZ(d){var w=0,v=C.j(x.H),u,t=this,s,r,q,p
var $async$akr=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:p=t.d
p===$&&C.c()
s=p.d
s===$&&C.c()
r=s[p.e].id[d]
q=r.gwJ()
w=3
return C.b(t.yh(new A.ees(r)),$async$akr)
case 3:if(t.c==null){w=1
break}t.m(t.gj_())
if(r.gwJ()&&!q){p=t.ghF()
if(p!=null)p.r+=8}if(r.gwJ()){p=q?"":"You are paid 8 stars. "
s=r.a==="switch"?"Tap it to turn the light on and off.":"Tap it to plug something in."
t.iL("Wired! "+p+s)}case 1:return C.h(u,v)}})
return C.i($async$akr,v)},
a0y(){var w=0,v=C.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$a0y=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:m=t.d
m===$&&C.c()
s=m.d
s===$&&C.c()
r=s[m.e]
s=r.c
if(s==="outside"){w=1
break}q=r.CW
if(q==null){q=A.inA(r)
s=s==="hall"?"Hall laundry corner":r.b
p=A.csY(q,s,!1,m.b*37+r.a,!1)
p.amo()
if(!r.ay)p.cK3()
r.CW=p
m=p}else m=q
m.b=t.d.c
o=r.gkR()
w=3
return C.b(t.yh(new A.ecg(r)),$async$a0y)
case 3:if(t.c==null){w=1
break}t.m(t.gj_())
if(r.gkR()&&!o){n=10+t.jj.ap(26)
m=t.ghF()
if(m!=null)m.r+=n
m=r.gjT()?"":" The room still needs its plumbing, so it stays red until the pipes are done too."
t.ei(r.b+": the wiring is finished and the light has power. You are paid "+n+" stars!"+m,!0)}else if(r.gkR()){m=r.gjT()?"":" The room still needs its plumbing."
t.iL(r.b+": the wiring is finished. The light has power."+m)}case 1:return C.h(u,v)}})
return C.i($async$a0y,v)},
a0p(){var w=0,v=C.j(x.H),u,t=this,s,r,q,p,o,n
var $async$a0p=C.e(function(d,e){if(d===1)return C.f(e,v)
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
s=r.fr=A.h5a(!1,n.b*41+r.a,s)
n=s}else n=q
if(!r.ch&&!n.ga3P())r.fr.cK2()
r.fr.b=t.d.c
p=r.gjT()
w=3
return C.b(t.yh(new A.ecf(r)),$async$a0p)
case 3:if(t.c==null){w=1
break}t.m(t.gj_())
if(r.gjT()&&!p){o=10+t.jj.ap(26)
n=t.ghF()
if(n!=null)n.r+=o
t.ei(r.b+": the plumbing is finished and nothing leaks. You are paid "+o+" stars!",!0)}else if(r.gjT())t.iL(r.b+": the plumbing is finished and nothing leaks.")
case 1:return C.h(u,v)}})
return C.i($async$a0p,v)},
bBZ(){var w=this.c
w.toString
return C.bV(E.mC,null,new A.e9T(this),w,!0,!0,!1,D.k5,!1,!1,x.H)},
bBD(d){var w,v,u,t,s,r,q,p,o=this,n=o.d
n===$&&C.c()
w=n.d
w===$&&C.c()
v=w[n.e]
n=v.c
if(n==="outside"||n==="hall"){o.ei("Add devices in a room, not in the hall or in NGMY City.",!1)
return}n=v.id
if(n.length>=4){o.ei("This room already has four added devices.",!1)
return}w=C.a([-v.geb(0)/4,v.geb(0)/4],x.n)
for(u=v.w,t=D.d.gaf(u),s=new C.f2(t,new A.e9N());s.C();)w.push(t.gS(0).c)
for(u=D.d.gaf(u),t=new C.f2(u,new A.e9O());t.C();)w.push(u.gS(0).c+24)
for(u=n.length,r=0;r<n.length;n.length===u||(0,C.L)(n),++r)w.push(n[r].b)
p=-v.geb(0)/2+14
for(;;){if(!(p<=v.geb(0)/2-14)){q=null
break}if(D.d.d_(w,new A.e9P(p))){q=p
break}p+=6}if(q==null){o.ei("There is no free place left on the back wall.",!1)
return}o.m(new A.e9Q(o,v,d,q))
o.iL("Added. It is red because it is not wired: tap it to wire it.")},
aeA(d,e){var w,v,u=this,t=u.d
t===$&&C.c()
w=t.d
w===$&&C.c()
v=w[t.e].BV(u.Q)
if(v==null)return
u.m(new A.ec6(u,v,D.d.t(B.RZ,v.b),d,e))},
c8F(){var w,v,u=this,t=u.d
t===$&&C.c()
w=t.d
w===$&&C.c()
v=w[t.e].BV(u.Q)
if(v==null)return
u.m(new A.ee1(u,v))},
cpF(){var w,v,u=this,t=u.d
t===$&&C.c()
w=t.d
w===$&&C.c()
v=w[t.e].BV(u.Q)
if(v==null)return
u.m(new A.ed5(u,v))
u.iL(B.hE.h(0,v.b).a+": "+B.cXI[v.f]+".")},
c8D(d){var w,v,u=this,t=u.d
t===$&&C.c()
w=t.d
w===$&&C.c()
v=w[t.e].BV(u.Q)
if(v==null)return
u.m(new A.ed8(u,v))},
bBG(d){var w,v=this,u=v.d
u===$&&C.c()
w=u.d
w===$&&C.c()
v.m(new A.e9R(v,w[u.e].M(0,d)))
v.iL(B.hE.h(0,d).a+" added. Move it with the arrows.")},
AC(d,e,f,g,h){var w=null,v=e?g.j(0.25):D.c.j(0.07),u=C.m(14),t=e?g:D.aX
t=C.J(t,D.r,e?2:1)
v=C.a([C.p(w,C.d(d,w,w,w,w,w,w,C.l(w,w,e?g:D.c,w,w,w,w,w,w,w,w,11,w,w,D.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),D.f,w,w,new C.o(v,w,t,u,w,w,D.n),w,w,w,w,D.eJ,w,w,w)],x.p)
if(h)v.push(C.ap(w,C.p(w,w,D.f,w,w,new C.o(D.ax,w,C.J(B.FH,D.r,2),w,w,w,D.a6),w,11,w,w,w,w,w,11),w,w,w,-2,-3,w))
return new C.D(D.fv,C.aA(w,new C.an(D.a_,w,D.ab,D.f,v,w),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,!1,D.a3),w)},
iq(d,e,f,g){return this.AC(d,e,f,g,!1)},
J8(d,e,f){return this.AC(d,e,f,D.aA,!1)},
aCb(d,e,f,g){var w=null,v=g==null,u=v?34:w,t=v?w:D.kk,s=C.m(10),r=e?D.c:D.aX
r=C.J(r,D.r,e?3:1)
if(v)v=w
else v=C.as(C.d(g,w,w,w,w,w,w,C.l(w,w,d.iQ()>0.5?D.w:D.c,w,w,w,w,w,w,w,w,12,w,w,D.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,w,w)
return new C.D(G.og,C.aA(w,C.p(w,v,D.f,w,w,new C.o(d,w,r,s,w,w,D.n),w,34,w,w,t,w,w,u),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,!1,D.a3),w)},
cAO(d,e,f){return this.aCb(d,e,f,null)},
Dq(d,e){var w=null,v=D.c.j(0.1),u=C.m(10),t=C.J(D.aX,D.r,1)
return new C.D(D.fv,C.aA(w,C.p(w,C.X(d,D.c,w,w,w,20),D.f,w,w,new C.o(v,w,t,u,w,w,D.n),w,36,w,w,w,w,w,40),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,e,w,w,w,w,w,w,!1,D.a3),w)},
bK6(){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null
if(k.cx!=null){w=k.dy
return C.B(C.a([C.E(C.d("\ud83c\udfac "+(w.length===0?"Walking in":w),j,1,D.a1,j,j,j,B.fp8,j,j,j),1),k.iq("\u23f9 Stop the tour",!0,k.gczY(),D.c0)],x.p),D.m,j,D.e,D.i,0,j,j)}switch(k.r){case"furniture":w=k.d
w===$&&C.c()
v=w.d
v===$&&C.c()
u=v[w.e].BV(k.Q)
w=x.p
v=C.a([],w)
if(u!=null){t=C.a([k.Dq(D.km,new A.eb2(k)),k.Dq(D.jB,new A.eb3(k)),k.Dq(D.rH,new A.eb4(k)),k.Dq(D.qr,new A.eb5(k)),k.Dq(H.apJ,k.gc8E()),k.Dq(D.ma,k.gcpE())],w)
s=k.d
r=s.d
r===$&&C.c()
if(r[s.e].c==="outside")t.push(k.Dq(D.P2,k.gcv4()))
t.push(k.Dq(D.eb,k.gc8C(k)))
v.push(new C.a4(j,30,C.cl(t,j,j,j,j,j,D.aM,!1),j))}else v.push(B.b0c)
w=C.a([],w)
for(t=B.hE.gdW(B.hE),t=t.gaf(t);t.C();){s=t.gS(t)
r=D.d.t(B.djS,s.a)
q=k.d
p=q.d
p===$&&C.c()
if(r===(p[q.e].c==="outside")){r=s.b
w.push(k.iq(r.b+" "+r.a,!1,new A.eb6(k,s),D.b_))}}v.push(new C.a4(j,30,C.cl(w,j,j,j,j,j,D.aM,!1),j))
return C.x(v,D.m,j,D.e,D.P,0,D.p)
case"walls":w=k.as
v=w<0
w=v?"All walls":"Wall "+(w+1)+": tap Look to reset"
v=C.a([k.J8(w,v,new A.eb7(k))],x.p)
for(o=0;o<8;++o)v.push(k.aCb(B.aAe[o],!1,new A.eb8(k,o),B.dux[o]))
return new C.a4(j,30,C.cl(v,j,j,j,j,j,D.aM,!1),j)
case"floor":w=C.a([],x.p)
for(o=0;o<7;++o){v=B.azX[o]
t=k.d
t===$&&C.c()
s=t.d
s===$&&C.c()
w.push(k.aCb(v.b,s[t.e].Q===o,new A.eb9(k,o),v.a))}return new C.a4(j,30,C.cl(w,j,j,j,j,j,D.aM,!1),j)
case"ceiling":w=k.d
w===$&&C.c()
v=w.d
v===$&&C.c()
w=v[w.e].go==="fan"?"\ud83c\udf00 Fan (tap for light)":"\ud83d\udca1 Light (tap for fan)"
w=C.a([k.iq(w,!1,new A.eba(k),D.b8)],x.p)
for(o=0;o<4;++o){v=B.ayI[o]
t=k.d
s=t.d
s===$&&C.c()
w.push(k.cAO(v,s[t.e].as===o,new A.ebb(k,o)))}return new C.a4(j,30,C.cl(w,j,j,j,j,j,D.aM,!1),j)
default:n=C.aX(x.S)
w=C.a([k.iq("\u26f6 Full screen",!1,k.gbQc(),D.aJ)],x.p)
v=k.d
v===$&&C.c()
t=v.d
t===$&&C.c()
if(t[v.e].c==="outside")w.push(k.iq("\ud83d\udcf1 Phone",!1,k.gbQe(),D.c_))
v=k.d
t=v.d
t===$&&C.c()
v=t[v.e].w
t=v.length
m=0
for(;m<v.length;v.length===t||(0,C.L)(v),++m){l=v[m]
s=l.d
if(n.M(0,s)){r=k.d.d
r===$&&C.c()
s=r[s]
r=s.gkR()&&s.gjT()
w.push(k.AC("\ud83d\udeaa "+s.b,!1,new A.ebc(k,l),D.b_,!r))}}return new C.a4(j,30,C.cl(w,j,j,j,j,j,D.aM,!1),j)}},
B(d){var w,v=this,u=null
if(Date.now()<0){w=C.dy(0,0,0,0-Date.now(),0,0).a
return C.c6(u,F.ni,C.bn(!0,C.as(new C.D(D.ql,C.x(C.a([B.fP3,D.ae,B.fPa,D.W,B.fPn,D.aB,C.d("It opens again in "+D.o.ao(w,36e8)+"h "+D.o.F(D.o.ao(w,6e7),60)+"m",u,u,u,u,u,u,B.fr3,u,u,u),D.dT,C.bI(D.aV9,u,new A.eev(d),u)],x.p),D.m,u,D.e,D.P,0,D.p),u),u,u,u),!0,!1,D.af,!0,!0),u,!1,!1,u,u)}w=C.a([C.bS(0,new C.er(v.bG4(d),v.a_),0,0,0)],x.p)
if(v.aB!=null)w.push(C.bS(0,C.dZ(C.lx(new A.eew(v),u,D.dw,D.hy,new C.bR(v.aF,x.ac),new A.eex(v),new C.bq(1,0,x.e7),x.i),!0,u),0,0,0))
return new C.an(D.a_,u,D.ab,D.t,w,u)},
bIm(){var w,v,u=this,t=null,s=C.a([],x.p)
if(u.gaks())s.push(u.iq("\u2705 Complete work",!0,u.gaR4(),D.bf))
w=u.aL
v=w?"\u23f9 Stop walking":"\ud83d\udeb6 Walk the city"
s.push(u.iq(v,w,w?u.gb8a():u.gb7W(),D.be))
s.push(u.iq("\ud83c\udfd7 Build",!1,u.gaNS(),D.be))
w=u.ghF()
w=w==null?t:w.d.length
if(w==null)w=0
s.push(u.AC("\ud83d\udcde Calls",!1,new A.eaF(u),D.c_,w>0))
s.push(u.iq("\ud83c\udfe5 Hospital",!1,new A.eaG(u),D.c0))
s.push(u.iq("\ud83d\uded2 Shop",!1,new A.eaH(u),D.cL))
s.push(u.iq("\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc67 People",!1,new A.eaL(u),D.cp))
s.push(u.iq("\ud83c\udfe0 Go inside",!1,new A.eaM(u),D.be))
w=u.aJ
if((w==null?t:w.a==="shop")===!0)s.push(u.iq("\ud83d\uded2 Buy things",u.k2,new A.eaN(u),D.bt))
w=u.aJ
if((w==null?t:w.a==="tower")===!0)s.push(u.iq("\ud83c\udfe2 Level "+w.f+" of "+w.gMa(),!1,new A.eaO(u),D.cp))
if(u.fC!=null)s.push(u.iq("\ud83d\udccb My job"+(u.awq()==null?"":" \xb7 "+C.w(u.awq())+" m"),!1,new A.eaP(u),D.bt))
w=u.iS.length
if(w!==0)s.push(u.iq("\u23f3 Waiting: "+w,!1,new A.eaQ(u),D.aA))
s.push(u.AC("\ud83d\udef5 Orders",u.gpn().x!=null,new A.eaR(u),D.bt,u.gpn().x==null))
w=u.p4
v=w?"\u23f9 Stop drone":"\ud83d\ude81 Drone"
s.push(u.iq(v,w,new A.eaS(u),D.aJ))
w=u.jO
v=w?"\ud83c\udff7 Show tags":"\ud83c\udff7 Hide tags"
s.push(u.iq(v,w,new A.eaI(u),D.c0))
s.push(u.iq("\ud83d\udc41 Hide all",!1,new A.eaJ(u),D.bM))
w=u.gKz()
s.push(u.iq("\ud83d\ude96 Uber",(w==null?t:w.f)!=null,u.gcEw(),D.bt))
s.push(u.iq("\ud83d\uddfa Map",u.y,new A.eaK(u),D.bq))
return s},
gcy3(){var w,v,u,t,s,r,q,p,o=this
if(!o.jO){w=o.f
w===$&&C.c()
return w}w=o.oK
v=o.f
v===$&&C.c()
if(w===v&&o.tc!=null){w=o.tc
w.toString
return w}o.oK=v
w=C.a([],x.E)
for(u=o.f.c,t=u.length,s=0;s<u.length;u.length===t||(0,C.L)(u),++s){r=u[s]
q=!1
if(r.d===0)if(!r.c.A(0,D.bB)){p=r.b
if(!C.cU(p,"rooms still need work",0))q=!C.cU(p,"house is finished",0)}if(q)w.push(r)}u=o.f
return o.tc=new A.tU(v.a,v.b,w,u.d,u.e,0)},
bG4(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d=f.d
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
t=t[w.e].c==="outside"&&f.aJ==null
w=w.a.length!==0?e:new A.ea_(f)
s=f.gcy3()
r=f.e
r===$&&C.c()
q=f.at
p=f.ax
o=f.ay
n=f.ai
if(f.eu)d=62
else if(f.f2)d=C.aG(a0,e,d).w.r.b+66
else d=f.y&&f.d.a.length===0?104:10
m=f.c8z()
l=x.p
k=C.a([],l)
if(f.y&&f.d.a.length===0&&!f.eu)k.push(new A.bk1(f.d,f.gc8v(),Math.min(138,u*0.36),e))
j=A.Ya(n,m,r,new A.ea0(f),new A.ea1(f),o,q,e,e,new A.eac(),p,d,f.gbOg(),new A.ead(f),f.gc8A(),s,t,w,k,e)
i=f.y1!=null||f.y2||f.R8||f.k3||f.go||f.k2||f.id
d=f.ok
h=(d==null?e:d.d)===1
if((i||h)&&!f.ai){d=C.a([j],l)
if(i){if(f.id)w=f.c2p()
else if(f.k2)w=f.cwv()
else if(f.go)w=f.chI()
else if(f.k3)w=f.bPE()
else w=f.R8?f.bOT():f.bHi()
d.push(C.bS(0,w,0,0,0))}if(h)d.push(C.ap(e,C.dZ(C.as(new C.jX(f.p3,new A.eae(),e,e,x.cI),e,e,e),!0,e),e,e,0,0,74,e))
g=new C.an(D.a_,e,D.b3,D.t,d,e)}else g=j
if(f.ai)return f.bIz(g)
if(f.eu)return f.bSD(g)
if(f.f2)return f.cl5(g)
d=f.d
if(d.a.length!==0)d=v.gza()?"Done \u2713":"To do"
else d=""+d.gcPF()+"/"+f.d.gqU().length+" done"
w=f.d
t=w.d
t===$&&C.c()
w=t[w.e].c==="outside"
t=!w?e:new A.Ux(f.c5,f.bG!=null,12,e)
if(w)w=f.bIm()
else{w=f.x?"\ud83d\udd2d See the whole room":"\ud83c\udfe0 Be inside"
w=C.a([f.iq(w,!1,new A.eaf(f),D.b_)],l)
if(f.d.a.length===0){s=f.cx!=null
r=s?"\u23f9 Stop tour":"\ud83c\udfac Tour"
w.push(f.iq(r,s,new A.eag(f),D.c_))}w.push(f.iq("\u2b06 Look up at the ceiling",!1,f.gc3t(),D.b_))
s=f.z
r=s?"\ud83d\udeb6 Stop looking round":"\ud83d\udd04 Look all round (360)"
w.push(f.iq(r,s,new A.eah(f),D.cL))
w.push(f.iq("\ud83d\udcfa TV",!1,f.gcEq(),D.cp))
s=f.d
if(s.a.length===0){r=s.d
r===$&&C.c()
s=r[s.e].c!=="outside"?"\ud83c\udf33 Go outside":"\ud83c\udfe0 Go inside"
w.push(f.iq(s,!1,new A.eai(f),D.be))}s=f.d
r=s.d
r===$&&C.c()
if(r[s.e].c==="outside"){s=f.aL
r=s?"\u23f9 Stop walking":"\ud83d\udeb6 Walk about"
w.push(f.iq(r,s,s?f.gb8a():f.gb7W(),D.be))}if(f.d.a.length===0)w.push(f.iq("\u2795 Add",!1,f.gaNS(),D.be))
if(f.d.a.length===0){s=f.ghF()
s=s==null?e:s.d.length
if(s==null)s=0
w.push(f.AC("\ud83c\udfd8 Community",!1,new A.eaj(f),D.c_,s>0))}w.push(f.iq("\ud83d\udd26 Tester",f.w,new A.ea2(f),D.cL))
if(f.d.a.length!==0)w.push(f.AC("\ud83d\udd27 Do the lesson",!1,f.gc8y(),D.bt,!v.gza()))
else{s=f.AC("\u26a1 Wiring",!1,f.gchB(),D.bt,!v.gkR())
r=v.c
r=(r==="bathroom"||r==="kitchen")&&!v.gjT()
D.d.v(w,C.a([s,f.AC("\ud83d\udeb0 Plumbing",!1,f.gch0(),D.cp,r),f.iq("\ud83d\uddfa Map",f.y,new A.ea3(f),D.bq)],l))}}return A.U2(D.aA,new A.ea4(f,a0),C.x(C.a([new C.a4(e,30,C.cl(w,e,e,e,e,e,D.aM,!1),e),D.au,new C.a4(e,30,C.cl(C.a([f.J8("\ud83d\udc41 Look",f.r==="look",new A.ea5(f)),f.J8("\ud83d\udecb Furniture",f.r==="furniture",new A.ea6(f)),f.J8("\ud83e\uddf1 Walls",f.r==="walls",new A.ea7(f)),f.J8("\ud83d\udfeb Floor",f.r==="floor",new A.ea8(f)),f.J8("\u2b1c Ceiling",f.r==="ceiling",new A.ea9(f)),f.J8("\ud83d\udeaa Doors",f.r==="doors",new A.eaa(f)),f.iq("\ud83d\udcd8 Learn",!1,new A.eab(a0),D.bq)],l),e,e,e,e,e,D.aM,!1),e),D.au,f.bK6()],l),D.E,e,D.e,D.P,0,D.p),g,d,v.b,t)},
cnG(d){return C.bV(E.mC,null,new A.ed3(this),d,!0,!0,!0,D.k5,!1,!1,x.H)}}
A.bk1.prototype={
B(d){var w=null,v=D.k.E((this.e-10)/126,0.5,1),u=D.w.j(0.6),t=C.m(12),s=C.J(D.aX,D.r,1)
return C.p(w,new C.a4(126*v,84*v,C.aA(w,C.eO(D.A,C.b4(w,w,w,new A.bjr(this.c,w),B.f8c),D.f,D.vF),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new A.dvz(this,v),w,w,w,w,!1,D.a3),w),D.f,w,w,new C.o(u,w,s,t,w,w,D.n),w,w,w,w,D.m8,w,w,w)}}
A.bjr.prototype={
a3(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=this.b,e=f.d
e===$&&C.c()
w=e.length
v=d.a
u=0
for(;u<e.length;e.length===w||(0,C.L)(e),++u){t=e[u]
s=t.d*14+1
r=t.e*14+1
q=s+(t.f*14-2)
p=r+(t.r*14-2)
o=new C.a3(s,r,q,p)
n=t.a===f.e
if(t.gkR()&&t.gjT())m=D.bf
else m=!t.gkR()?D.ax:D.d3
l=C.bs(o,D.hG)
$.S()
k=new C.ao(D.O,D.M,D.S,D.T,D.R)
k.r=m.j(t.gkR()&&t.gjT()?0.35:0.5).gp(0)
j=k.G()
v.drawRRect(C.e7(l),j)
j.delete()
l=C.bs(o,D.hG)
k=new C.ao(D.O,D.M,D.S,D.T,D.R)
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
break A}h=new C.iN(new C.eu(l,g,g,D.cN,g,g,g,g,g,g,B.fok),D.a4,D.bY,new C.jr(1),g,g,g,g,D.bW,g)
h.el()
l=h.b
k=l.c
l=l.a.c
h.a3(d,new C.t(s+(q-s)/2-k/2,r+(p-r)/2-l.gbb(l)/2))}},
av(d){return!0}}
A.aJ2.prototype={
R(){return new A.bu6()},
biu(d,e){return this.c.$2(d,e)}}
A.bu6.prototype={
b_n(d){var w,v,u={},t=u.a=d.aE(0,B.ejv),s=t.gcC()>46?u.a=t.eV(0,t.gcC()).aK(0,46):t,r=s.a/46,q=-s.b/46,p=Math.sqrt(r*r+q*q)
s=this.a
s.toString
w=p<0.15
v=w?0:r
s.biu(v,w?0:q)
this.m(new A.f7F(u,this))},
b_m(){this.a.biu(0,0)
this.m(new A.f7E(this))},
B(d){var w=this,v=null,u=C.p(v,v,D.f,v,v,new C.o(D.w.j(0.42),v,C.J(D.be.j(0.9),D.r,2.4),v,v,v,D.a6),v,132,v,v,v,v,v,132),t=C.p(v,v,D.f,v,v,new C.o(v,v,C.J(D.be.j(0.25),D.r,1.5),v,v,v,D.a6),v,66,v,v,v,v,v,66),s=w.d,r=s==null
if(r)s=D.I
return C.mH(D.c6,new C.a4(132,132,new C.an(D.A,v,D.ab,D.t,C.a([u,t,C.dR(C.p(v,v,D.f,v,v,new C.o(D.be.j(r?0.55:0.9),v,C.J(D.c,D.r,2),v,v,v,D.a6),v,56,v,v,v,v,v,56),s)],x.p),v),v),v,new A.f7G(w),new A.f7H(w),v,new A.f7I(w),v,v,new A.f7J(w))}}
A.f29.prototype={}
A.Mn.prototype={}
A.Qk.prototype={
gbf3(){var w,v,u=this.c
A:{if("sick"===u){w="\ud83e\udd12"
break A}if("light"===u){w="\ud83d\udca1"
break A}if("office"===u){w="\ud83c\udfe2"
break A}v=this.e
B:{if("dryer"===v){w="\ud83d\udc55"
break B}if("range"===v){w="\ud83c\udf73"
break B}if("washer"===v){w="\ud83e\uddfa"
break B}w="\u26a1"
break B}break A}return w},
gaEf(){var w,v=this.c
A:{if("sick"===v){w=this.d
if(w.length===0)w="A neighbour"
break A}if("light"===v){w="City lights office"
break A}if("office"===v){w="Office manager"
break A}w="Your neighbour"
break A}return w},
gbrj(){var w,v,u=this.c
A:{if("sick"===u){w="Needs a doctor"
break A}if("light"===u){w="A street light is out"
break A}if("office"===u){w="No power in an office"
break A}v=this.e
B:{if("dryer"===v){w="The dryer outlet at a house"
break B}if("range"===v){w="The stove outlet at a house"
break B}if("washer"===v){w="The washer outlet at a house"
break B}w="No power at a house"
break B}break A}return w},
gaHy(d){var w,v=this,u="I will pay you between 10 and 35 stars. Thank you!",t=v.c
A:{if("sick"===t){w=C.a(["Hello! "+v.gaEf()+" is very sick and cannot get up.","Please take them to the hospital: walk into the hospital and onto the desk to admit them.",u],x.s)
break A}if("office"===t){w=""+v.f
w=C.a(["Hello, this is the office manager. The office on level "+w+" of "+v.b+" has lost its power and nobody can work.","Please take the elevator up to level "+w+", and fix the wiring at the breaker panel there.",u],x.s)
break A}if("light"===t){w=C.a(["Hello! A street light is out and the street is dark.","It is the dark one with the red sign. Could you fix its wiring?",u],x.s)
break A}w=v.e
if(w==="dryer"){w=C.a(["Hello! The dryer in "+v.b+" does not heat any more and the plug is hot to the touch.","It is on the 240 volt outlet in the hall, the laundry corner. Could you look at the dryer outlet and wire it again? Switch the power off before you touch anything, and check if it is the old 3-wire or the new 4-wire kind.",u],x.s)
break A}if(w==="range"){w=C.a(["Hello! The electric stove in "+v.b+" has stopped working and the outlet behind it smells burnt.","It is the 50 amp outlet in the kitchen. Could you wire the range outlet again? Switch the power off before you touch anything, and check if it is the old 3-wire or the new 4-wire kind.",u],x.s)
break A}if(w==="washer"){w=C.a(["Hello! The washing machine in "+v.b+" keeps tripping the breaker.","It is on its own 20 amp outlet in the laundry corner in the hall. Could you wire the washer outlet again? Switch the power off before you touch anything.",u],x.s)
break A}w=C.a(["Hello! All the lights went out in "+v.b+". The power is off in the whole house.","Could you check the breaker panel inside and fix the wiring? Switch the power off before you touch anything.",u],x.s)
break A}return w}}
A.aK0.prototype={
R(){return new A.bwh()}}
A.bwh.prototype={
B(d){var w,v,u=this,t=null,s=C.aG(d,t,x.w).w,r=D.w.j(0.55),q=C.J(D.bU,D.r,1),p=u.d,o=C.ap(0,C.as(C.aA(t,C.p(t,C.X(p?B.bOW:B.bOX,D.c,t,t,t,20),D.f,t,t,new C.o(r,t,q,t,t,t,D.a6),t,38,t,t,t,t,t,38),D.y,!1,B.hiz,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new A.fdn(u),t,t,t,t,t,t,!1,D.a3),t,t,t),t,t,t,6,0,t)
if(p)return C.c6(t,D.w,new C.an(D.a_,t,D.ab,D.t,C.a([C.bS(0,u.a.d,0,0,0),o],x.p),t),t,!1,!1,t,t)
r=s.a
q=r.b
r=r.a
p=u.a
w=p.c
v=s.alH(D.af,new C.av(q,r),D.af)
return C.c6(t,D.w,C.as(new C.wr(w,C.q0(new C.a4(q,r,new C.an(D.a_,t,D.ab,D.t,C.a([C.bS(0,p.d,0,0,0),o],x.p),t),t),v),t),t,t,t),t,!1,!1,t,t)}}
A.bVv.prototype={}
A.m2.prototype={}
A.NI.prototype={
R(){return new A.bkY()}}
A.bkY.prototype={
rF(d){var w=this.c
w.toString
return C.a5(w,!1).cc(C.eh(new A.dTg(d),!1,null,x.H))},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null
$.asH="tech"
w=C.aH(m,m,m,m,T.nz,m,m,m,new A.dTj(d),m,m,m,m,m,m)
v=D.aA.j(0.16)
u=C.m(13)
t=x.p
u=C.B(C.a([w,C.p(m,B.baQ,D.f,m,m,new C.o(v,m,C.J(D.aA.j(0.6),D.r,1),u,m,m,D.n),m,40,m,m,m,m,m,40),D.as,B.bG1],t),D.m,m,D.e,D.i,0,m,m)
v=C.m(26)
w=C.J(D.aA,D.r,1.8)
s=x.V
r=C.a([new C.ac(0,D.G,D.aA.j(0.28),D.ds,26)],s)
r=C.aA(m,C.p(m,C.x(C.a([C.p(m,B.bbh,D.f,m,m,new C.o(D.aA.j(0.2),m,C.J(D.aA,D.r,2),m,C.a([new C.ac(0,D.G,D.aA.j(0.5),D.I,22)],s),m,D.a6),m,78,m,m,m,m,m,78),D.ae,B.fI5,D.au,B.fRc,D.aB,C.p(m,B.fI1,D.f,m,m,new C.o(D.aA,m,m,C.m(20),m,m,D.n),m,m,m,m,V.alC,m,m,m)],t),D.m,m,D.e,D.i,0,D.p),D.f,m,m,new C.o(m,m,w,v,r,B.c48,D.n),m,m,m,m,D.w9,m,m,m),D.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new A.dTk(n),m,m,m,m,m,m,!1,D.a3)
v=D.w.j(0.6)
w=C.m(16)
w=C.a([r,C.ap(m,C.aA(m,C.p(m,B.fWG,D.f,m,m,new C.o(v,m,C.J(F.f8,D.r,1.4),w,m,m,D.n),m,m,m,m,B.bzj,m,m,m),D.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new A.dTl(n),m,m,m,m,m,m,!1,D.a3),m,m,m,10,10,m)],t)
v=n.c8L("JOBS")
r=n.b_o(C.a([n.AE("\ud83d\udd0c","Wire a room","Go to a room that needs wiring",D.bf,new A.dTo(n)),n.AE("\ud83d\udebd","Plumb a room","Go to a bathroom or kitchen",D.aJ,new A.dTp(n)),n.AE("\ud83d\udd27","Fix a house","Walk the house and fix every sign",D.aA,new A.dTq(n)),n.AE("\ud83e\uddf1","Build a room","Frame, drywall, then wire",D.be,new A.dTr(n)),n.AE("\u26a1","Wiring bench","Just the wiring, one room",D.bt,new A.dTs(n)),n.AE("\ud83e\uddea","Safety inspection","A test job: marked when you submit",D.bq,new A.dTt(n)),n.AE("\ud83d\udcde","Service calls","A customer rings with problems",D.hZ,new A.dTu(n)),n.AE("\ud83c\udfd8","Neighbourhood jobs","Fix lights and wiring around the city",D.aJ,new A.dTv(n))],t))
s=n.e?D.aA.j(0.25):D.c.j(0.07)
q=n.e
p=C.J(q?D.aA:D.aX,D.r,1)
o=q?D.cx:D.fa
w=C.a([u,D.ae,new C.an(D.a_,m,D.ab,D.t,w,m),v,r,n.b_q("LESSONS",C.aA(m,C.p(m,C.X(o,q?D.aA:D.ac,m,m,m,19),D.f,m,m,new C.o(s,m,p,m,m,m,D.a6),m,34,m,m,m,m,m,34),D.y,!1,B.hii,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new A.dTm(n),m,m,m,m,m,m,!1,D.a3))],t)
if(n.e){v=D.c.j(0.07)
w.push(new C.D(D.d1,C.aM(m,D.Y,!0,m,!0,D.t,m,C.aN(),m,m,m,m,m,m,2,C.br(m,new C.b5(4,C.m(16),D.a0),m,m,m,m,m,m,!0,m,m,m,m,m,m,v,!0,m,m,m,m,m,m,m,m,m,m,m,m,m,A3.Eh,"Search the lessons: outlet, switch, dryer, sink...",m,m,m,m,m,!0,m,m,m,!0,!0,!1,m,B.c_K,m,m,m,m,m,m,m,m,m,m,m,m),D.y,!0,m,!0,m,!1,m,D.aj,m,m,m,B.hid,m,m,m,m,m,1,m,m,!1,"\u2022",m,new A.dTn(n),m,m,m,!1,m,m,!1,m,!0,m,D.aa,m,m,m,m,m,m,m,m,m,m,m,D.Ku,!0,D.a4,m,D.an,m,m,m,m),m))}D.d.v(w,n.c2l())
return C.c6(m,D.c2,C.bn(!0,C.cl(w,m,m,B.akS,m,m,D.ah,!1),!0,!1,D.af,!0,!0),m,!1,!1,m,m)},
c2l(){var w,v,u,t,s,r,q,p=this,o=x.dz,n=C.a([],o)
for(w=0;w<24;++w){v=B.dfT[w]
n.push(new C.aeL([v.d,v.e,v.b,new A.dTb(p,v),v.c,v.a]))}n.push(new C.aeL(["Three-way switch, fan with light",D.bq,"\ud83e\udde0",new A.dTc(p),"Diagram lessons","diagram wiring picture"]))
n.push(new C.aeL(["Short cards for beginners",D.bq,"\ud83d\udcd8",new A.dTd(p),"Learn the trades","cards beginner trade"]))
u=D.a.fq(p.f.toLowerCase(),C.ag("\\s+",!0,!1,!1,!1))
t=C.T(u).k("Z<1>")
s=C.C(new C.Z(u,new A.dTe(),t),t.k("M.E"))
o=C.a([],o)
for(u=n.length,w=0;w<n.length;n.length===u||(0,C.L)(n),++w){r=n[w]
if(D.d.d_(s,new A.dTf(r)))o.push(r)}if(o.length===0)return C.a([B.ent],x.p)
n=x.p
u=C.a([],n)
for(t=o.length,w=0;w<o.length;o.length===t||(0,C.L)(o),++w){q=o[w].a
u.push(p.AE(q[2],q[4],q[0],q[1],q[3]))}return C.a([p.b_o(u)],n)},
b_q(d,e){var w=null,v=x.p,u=C.a([],v),t=e!=null
if(t)u.push(V.aSe)
u.push(C.E(C.p(w,w,D.f,D.aA.j(0.35),w,w,w,1,w,w,w,w,w,w),1))
u.push(new C.D(D.eY,C.d(d,w,w,w,w,w,w,B.fkL,w,w,w),w))
u.push(C.E(C.p(w,w,D.f,D.aA.j(0.35),w,w,w,1,w,w,w,w,w,w),1))
if(t)D.d.v(u,C.a([D.as,new C.a4(34,w,e,w)],v))
return new C.D(B.bDX,C.B(u,D.m,w,D.e,D.i,0,w,w),w)},
c8L(d){return this.b_q(d,null)},
b_o(d){var w,v,u,t,s=null,r=x.p,q=C.a([],r)
for(w=0;v=d.length,w<v;w+=2){u=d[w]
t=w+1
v=t<v?d[t]:D.bJ
q.push(new C.D(D.ct,new C.Em(new C.ca(D.aM,D.e,D.i,D.ak,s,D.p,s,0,C.a([new C.by(1,D.ba,u,s),D.ad,new C.by(1,D.ba,v,s)],r),s),s),s))}return C.x(q,D.m,s,D.e,D.i,0,D.p)},
AE(d,e,f,g,h){var w=null,v=C.a([g.j(0.2),B.FH],x.O),u=C.m(22),t=C.J(g.j(0.55),D.r,1.4),s=x.V,r=C.a([new C.ac(0,D.G,g.j(0.18),D.cy,16)],s),q=g.j(0.22),p=C.J(g.j(0.7),D.r,1.5)
s=C.a([new C.ac(0,D.G,g.j(0.35),D.I,14)],s)
return C.aA(w,C.p(w,C.x(C.a([C.p(w,C.as(C.d(d,w,w,w,w,w,w,D.x4,w,w,w),w,w,w),D.f,w,w,new C.o(q,w,p,w,s,w,D.a6),w,56,w,w,w,w,w,56),D.W,C.d(e,w,w,w,w,w,w,D.j6,D.K,w,w),D.cS,C.d(f,w,2,D.a1,w,w,w,B.fwA,D.K,w,w)],x.p),D.m,w,D.b9,D.i,0,D.p),D.f,w,w,new C.o(w,w,t,u,r,new C.a9(D.b0,D.b6,D.x,v,w,w),D.n),w,w,w,w,B.bz1,w,w,w),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,h,w,w,w,w,w,w,!1,D.a3)}}
A.awy.prototype={
R(){return new A.btV()},
bqZ(){return this.c.$0()}}
A.btV.prototype={
Z(){this.a2()
this.d=C.dh(D.nq,new A.f7v(this))},
q(){var w=this.d
if(w!=null)w.a4(0)
this.a1()},
B(d){var w=null,v=D.w.j(0.6),u=C.m(18),t=C.J(D.bt,D.r,1.5)
return C.p(w,C.d("\u2b50 "+C.w(this.a.bqZ()),w,w,w,w,w,w,B.fl6,w,w,w),D.f,w,w,new C.o(v,w,t,u,w,w,D.n),w,w,w,D.iF,D.qj,w,w,w)}}
A.b7U.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=x.w,e=C.aG(d,g,f).w.a.a>C.aG(d,g,f).w.a.b
if(h.d)return A.h5F(E.y0,h.r,h.z,h.Q,h.y,h.as,h.db,h.w,h.f,h.c)
w=h.r
v=x.p
u=C.a([C.bS(0,A.h5F(E.y0,w,h.z,h.Q,h.y,h.as,h.db,h.w,h.f,h.c),0,0,0)],v)
t=h.ch
s=t!=null
if(s)u.push(C.ap(g,C.x(t,D.E,g,D.e,D.i,0,D.p),g,g,8,g,8,g))
t=C.a([],v)
r=h.CW
if(r!=null)D.d.v(t,r)
r=C.a([],v)
q=h.e
if(q!=null)r.push(new A.awy(q,g))
r.push(new A.afP(D.hQ,"Zoom in",w,!1,g))
t.push(C.B(r,D.m,g,D.e,D.P,0,g,g))
t.push(new A.afP(D.wu,"Zoom out",w,!0,g))
w=h.x
t.push(h.axT(B.bMT,"Back to the whole view",w))
t.push(h.axT(Ap.CA,"Flip up and down swiping",new A.cxA()))
t.push(h.axT(D.jF,"Flip left and right swiping",new A.cxB()))
u.push(C.ap(g,C.x(t,D.dI,g,D.e,D.i,0,D.p),g,g,g,8,8,g))
t=h.dx
if(t!=null)u.push(C.ap(14,C.as(t,g,g,g),g,g,0,0,g,g))
t=h.at
if(t!=null){r=e?236:10
q=e?g:62
if(e)s=6
else{p=h.cy
if(p==null)s=s?60:10
else s=p}p=e?D.k.E(C.aG(d,g,f).w.a.a*0.4,190,330):1/0
o=e?B.bF9:D.nt
n=h.ax
m=n?D.dY:D.ek
m=m.j(e?0.88:0.95)
l=C.m(e?10:14)
k=C.J(n?D.be:D.c0,D.r,1)
n=e?3:g
j=e?D.a1:g
u.push(C.ap(g,new C.cT(new C.aZ(0,p,0,1/0),C.p(g,C.d(t,g,n,j,g,g,g,C.l(g,g,D.c,g,g,g,g,g,g,g,g,e?10.5:12.5,g,g,D.U,g,1.3,!0,g,g,g,g,g,g,g,g),g,g,g),D.f,g,g,new C.o(m,g,k,l,g,g,D.n),g,g,g,g,o,g,g,g),g),g,g,r,q,s,g))}t=h.ay
if(t!=null){s=e?8:10
r=e?g:10
f=e?D.k.E(C.aG(d,g,f).w.a.a*0.36,180,300):1/0
q=e?B.bF8:E.akD
p=e?B.bpe:E.aeC
o=C.m(e?11:16)
n=C.J(D.aX,D.r,1)
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
m=e?D.adq:g
l=e?D.af:D.ck
u.push(C.ap(8,new C.cT(new C.aZ(0,f,0,1/0),C.p(g,C.B(C.a([t,C.aH(g,m,g,g,C.X(D.cx,D.aC,g,g,g,e?16:20),g,g,g,w,l,g,g,g,g,D.cc)],v),D.E,g,D.e,D.i,0,g,g),D.f,g,g,new C.o(p,g,n,o,g,g,D.n),g,g,g,g,q,g,g,g),g),g,g,s,r,g,g))}return new C.an(D.a_,g,D.ab,D.t,u,g)},
axT(d,e,f){var w=null,v=D.w.j(0.55),u=C.J(D.aX,D.r,1)
return new C.D(D.eI,C.he(C.aA(w,C.p(w,C.X(d,D.c,w,w,w,20),D.f,w,w,new C.o(v,w,u,w,w,w,D.a6),w,38,w,w,w,w,w,38),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,!1,D.a3),w,e,w,w),w)}}
A.aY0.prototype={
B(d){var w,v=this,u=null,t=x.p,s=C.a([C.aH(u,u,u,u,T.nz,u,u,u,new A.bXB(d),u,u,u,u,u,u)],t),r=v.x,q=v.c,p=v.d
if(r==null)s.push(C.E(C.d(q,u,u,u,u,u,u,C.l(u,u,p,u,u,u,u,u,u,u,u,16,u,u,D.u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),1))
else D.d.v(s,C.a([C.d(q,u,u,u,u,u,u,C.l(u,u,p,u,u,u,u,u,u,u,u,16,u,u,D.u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),D.as,C.E(r,1),D.as],t))
r=p.j(0.15)
q=C.m(16)
w=C.J(p.j(0.6),D.r,1)
s.push(C.aA(u,C.p(u,C.B(C.a([C.X(Aq.aog,p,u,u,u,17),D.eg,C.d(v.w,u,u,u,u,u,u,C.l(u,u,p,u,u,u,u,u,u,u,u,12,u,u,D.u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],t),D.m,u,D.e,D.P,0,u,u),D.f,u,u,new C.o(r,u,w,q,u,u,D.n),u,u,u,u,D.qj,u,u,u),D.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,v.r,u,u,u,u,u,u,!1,D.a3))
s=C.B(s,D.m,u,D.e,D.i,0,u,u)
q=C.aG(d,u,x.w).w
return C.c6(u,D.c2,C.bn(!0,C.x(C.a([new C.D(B.bE9,s,u),C.p(u,C.ch(v.f,D.t,u,D.y,u,u,u,u,D.ah),D.f,u,new C.aZ(0,1/0,0,q.a.b*0.34),B.b6e,u,u,u,u,E.a_c,u,u,1/0),C.E(C.bx(Ao.acM,v.e,D.ap),1)],t),D.m,u,D.e,D.i,0,D.p),!0,!1,D.af,!0,!0),u,!1,!1,u,u)}}
A.ad5.prototype={
aEq(d){var w=this,v=new C.V(Date.now(),0,!1),u=w.amA$===d&&D.o.ao(v.bF(w.amB$).a,1000)<2500
w.amA$=u?"":d
w.amB$=v
return u},
aHx(d){var w,v=this
if(d.length===0)return
w=v.a5f$
if(w!=null)w.a4(0)
v.m(new A.djT(v,d))
v.a5f$=C.cG(D.jT,new A.djU(v))},
aFK(){var w=this.a5f$
return w==null?null:w.a4(0)}}
A.E0.prototype={
R(){var w=new C.yf()
$.yZ()
w.h8(0)
return new A.aAD(w,B.nC,null,"",C.c3(2000,1,1,0,0,0,0,0))},
gda(d){return this.d}}
A.aAD.prototype={
gtj(){var w,v=this,u=v.d
if(u===$){w=A.t7(v.a.c)
v.d!==$&&C.bF()
v.d=w
u=w}return u},
gdI(d){var w,v=this.e
if(v===$){w=this.a.d
v=this.e=w==null?new A.CC(C.U(x.S,x.N)):w}return v},
gasi(){var w=this.gtj().a
return w==="light"||w==="fan"},
gis(){var w,v=this,u=v.f
if(u===$){w=v.gasi()?new A.xj(1.15,0.12,11,B.VH,$.ax()):new A.xj(0.42,0.26,12,B.h86,$.ax())
v.f!==$&&C.bF()
u=v.f=w}return u},
gpa(){var w=this,v=w.r
return v===$?w.r=A.bD0(w.gtj(),w.gdI(0),!0):v},
aB8(d){var w
this.m(new A.dbi(this,d))
A:{if("practice"===d){w="Practice: you can put a wire anywhere. The mistake shows when the power goes on."
break A}if("test"===d){w="Test: put every wire where you think it goes. Nothing is marked until you submit."
break A}w="Learn: a wrong wire is refused and explained."
break A}this.hs(w,!0)},
q(){var w=this.as
if(w!=null)w.a4(0)
this.aFK()
this.a1()},
hs(d,e){var w=this,v=w.as
if(v!=null)v.a4(0)
w.m(new A.dbg(w,d,e))
w.as=C.cG(D.lE,new A.dbh(w))},
me(d){return this.hs(d,!1)},
pv(){var w=this.gdI(0)
w.d=w.d&&w.a&&w.c>=2
this.r=A.bD0(this.gtj(),w,!0)},
oj(){var w,v,u,t=this
if(t.gasi()&&t.gdI(0).c===0){t.gis().im(11,0.12,B.VH,1.15)
t.m(new A.db0(t))
return}w=t.gis()
v=t.gdI(0).c===0
u=v?2.8:0.4
v=v?12:10
w.im(v,0.26,new A.q(0,0.1,u),0.42)
t.m(new A.db1(t))},
aYd(d){var w,v,u,t=this
if(t.gasi()){t.gis().im(9,0.12,B.VH,1.15)
return}w=t.gtj().e
v=C.T(w)
u=C.p7(new C.cO(new C.Z(w,new A.db2(d),v.k("Z<1>")),new A.db3(),v.k("cO<1,n>")))
if(u==null)u=""
if(d==="ground"||u==="ground")t.gis().im(8,0.55,B.hcc,0.15)
else if(d==="white"||u==="neutral")t.gis().im(8.5,0.2,B.hgn,0.95)
else t.gis().im(8.5,0.2,B.h4J,-0.95)},
c8G(){var w,v,u,t="ground",s=this.gdI(0),r=!s.a||s.c>0,q=new A.db_(this),p=this.gtj(),o=p.a
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
Jb(d){var w,v,u,t,s,r,q,p,o,n=this,m="square",l="STOP! The power is still on. Turn the breaker OFF before you touch any wire.",k="Recorded."
if(d===0){n.oj()
return}if(B.aRl.t(0,d))return
if(d===40){w=n.gdI(0)
if(w.a){A.fQ(180,220,0.25,m)
n.me("STOP! The power is still on. Turn the breaker OFF before you touch the strap.")}else if(n.gtj().a==="cord3")n.hs("Leave the ground strap on. On a 3-wire cord it joins the neutral to the frame of the appliance. That is what grounds it.",!0)
else if(w.c!==0)n.me("The device is already in the box. Pull it out again to change it.")
else{n.m(new A.db4(n))
A.uk()
n.hs("Ground strap removed. Now the frame will be grounded by the green wire, and the neutral stays clear of it.",!0)}return}w=n.gtj()
v=w.f
u=C.T(v).k("Z<1>")
t=C.C(new C.Z(v,new A.db5(d),u),u.k("M.E"))
v=w.a
s=A.hAn(v,d)
u=s!=null
if(u){r=n.gdI(0)
r=r.c===0&&r.b.it(0,s)}else r=!1
if(r){w=n.gdI(0)
if(w.a){A.fQ(180,220,0.25,m)
n.me(l)
return}w=w.b
w.bs(w,new A.db6(s))
n.m(n.gc8J())
n.hs("Wire taken off the screw.",!0)
return}r=!1
if(t.length!==0){q=n.gdI(0)
if(q.c===0){q=q.b
if(q.aj(0,d))r=n.w.length===0||q.h(0,d)===n.w}}if(r){w=n.gdI(0)
if(w.a){A.fQ(180,220,0.25,m)
n.me(l)
return}w.b.W(0,d)
n.m(new A.db7(n))
n.hs(w.z?k:"Wire taken off.",!0)
return}if(u){u=n.gdI(0)
u=u.c===0&&!u.b.it(0,s)&&D.d.b3(w.e,new A.db8(s))}else u=!1
if(u){n.m(new A.db9(n,s,d))
if(n.w.length!==0){n.aYd(s)
n.hs(D.d.fZ(w.e,new A.dba(s)).b+": picked up. Now tap the screw, nut or wire it joins.",!0)}return}if(t.length!==0&&n.w.length!==0&&n.gdI(0).c===0){u=n.gdI(0)
p=A.hAi(w,u,n.w,D.d.gI(t),!1)
if(p!=null){++n.Q
A.fQ(180,220,0.25,m)
n.me(p)}else if(u.z){A.fQ(520,60,0.25,"tri")
n.m(new A.dbb(n,d))
n.hs(k,!0)
n.w=""}else{A.uk()
n.m(new A.dbc(n,d))
if(u.w)n.hs(D.d.gI(t).b+": fastened.",!0)
else if(A.aih(w,u))n.hs("Every wire is on the right screw. Now push the device into the box.",!0)
else n.hs(D.d.gI(t).b+": fastened correctly.",!0)
n.gis().zK(7,A.aQ8(v,d,u))
n.w=""}return}o=n.gpa().b.h(0,d)
if(o!=null){n.m(new A.dbd(n,d))
w=n.gis()
v=o.c
w.zK(o.d,v)}},
cmF(){var w,v=this
v.m(new A.dbe(v))
w=v.gdI(0)
if(w.a){A.fQ(120,200,0.25,"saw")
if(w.c===0)v.me("The breaker is ON. The wires are LIVE at 120 volts. Turn it OFF before you touch anything.")}else{A.fQ(600,100,0.25,"tri")
v.hs("Breaker OFF. It is safe to work on the wires. (In real life, always test them with a tester first.)",!0)}},
cC4(){var w,v,u=this,t="The tester glows: this outlet has 120 volts and is wired correctly. The lesson is complete! Mistakes: ",s=" is wired correctly: every wire is on the terminal that belongs to it. The lesson is complete! Mistakes: ",r=u.gtj(),q=u.gdI(0),p=A.La(r,q)
if(p.a!=="ok"){u.m(new A.dbj(u,p));++u.Q
A.fQ(180,220,0.25,"square")
C.fN()
r=p.r==="arc"
w=r?95:150
A.fQ(w,450,0.5,r?"saw":"noise")
if(q.z)r=p.d?"The breaker tripped.":"Power is on."
else r=p.b+"\nHow to fix it: "+p.w
u.me(r)
return}u.m(new A.dbk(u))
A.uk()
v=r.a
A:{if("switch"===v){r="Power on. Flip the switch and the light turns on: both black wires are on brass screws, so the switch opens and closes the hot wire. The lesson is complete! Mistakes: "+u.Q+"."
break A}if("gfci"===v){r="Power on. Press RESET (it clicks), then TEST: it must shut the outlet off. Wired on LINE, it protects the whole circuit. The lesson is complete! Mistakes: "+u.Q+"."
break A}if("outlet"===v){r=t+u.Q+"."
break A}q=D.d.t(B.jG,v)
if(q){r="Power on. "+r.b+(s+u.Q+".")
break A}if(v!=="light"&&v!=="fan"){r="Power on. The "+r.b.toLowerCase()+(s+u.Q+".")
break A}r=t+u.Q+"."
break A}u.hs(r,!0)},
B(a1){var w,v=this,u=null,t=v.c8G(),s=D.d.bh(t,new A.dbt()),r=s<0?"All done":"Step "+(s+1)+"/"+v.gtj().d.length,q=v.gtj(),p=v.gdI(0),o=A.aih(q,p)&&!p.a,n=v.gpa(),m=v.gis(),l=v.x,k=v.y,j=v.z,i=l!==0?v.gpa().b.h(0,v.x):u,h=(p.a?D.ek:D.dY).j(0.95),g=C.m(18),f=p.a,e=C.J(f?D.c0:D.be,D.r,1.5),d=C.X(f?D.hm:B.bOx,D.c,u,u,u,18),a0=x.p
g=C.a([C.aA(u,C.p(u,C.B(C.a([d,D.eg,C.d(f?"Breaker ON (live)":"Breaker OFF (safe)",u,u,u,u,u,u,D.nN,u,u,u)],a0),D.m,u,D.e,D.P,0,u,u),D.f,u,u,new C.o(h,u,e,g,u,u,D.n),u,u,u,u,D.h7,u,u,u),D.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,v.gcmE(),u,u,u,u,u,u,!1,D.a3)],a0)
h=!p.w&&!p.z
h=C.a([A.wY("Learn",D.be,D.uE,h,new A.dbu(v)),D.am,A.wY("Practice",D.c0,D.ok,p.w,new A.dbv(v)),D.am,A.wY("Test",D.bq,D.qv,p.z,new A.dbD(v)),D.am],a0)
if(!p.z)D.d.v(h,C.a([A.wY("Hints",D.aA,D.qx,p.e,new A.dbE(v)),D.am,A.wY("Labels",D.aJ,O.Cr,p.f,new A.dbF(v)),D.am,A.wY("Wire guide",D.mB,D.om,!1,new A.dbG(a1)),D.am],a0))
h.push(A.wY("Brass side",B.br7,E.apc,!1,new A.dbH(v)))
h.push(D.am)
h.push(A.wY("Silver side",B.Bs,D.P0,!1,new A.dbI(v)))
h.push(D.Q)
n=A.Ya(!1,u,m,new A.dbJ(v),u,j,l,i,u,u,k,u,u,v.gJ9(),v.gJa(),n,!1,u,g,h)
m=C.a([],a0)
l=p.c
if(l===0){l=C.a([],a0)
for(k=D.d.gaf(q.e),j=new C.f2(k,new A.dbK(v));j.C();){i=k.gS(0)
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
l.push(new C.D(D.iF,C.aA(u,C.p(u,new C.ca(D.aM,D.e,D.i,D.m,u,D.p,u,0,d,u),D.f,u,u,new C.o(h,u,new C.bH(w,w,w,w),new C.bh(g,g,g,g),u,u,D.n),u,u,u,u,D.hO,u,u,u),D.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new A.dbw(v,i),u,u,u,u,u,u,!1,D.a3),u))}l=C.a([C.bY(D.bG,l,D.br,u,6,8)],a0)
if(p.z)D.d.v(l,C.a([C.B(C.a([A.uj("Submit the test",D.qv,new A.dbx(v,a1),D.bq)],a0),D.m,u,D.e,D.i,0,u,u),D.Q],a0))
l.push(D.Q)
if(o)p="Push it into the box"
else p=p.a?"Turn the breaker OFF first":"Fasten every wire first"
l.push(C.B(C.a([A.uj(p,B.a2x,o?new A.dby(v):u,D.aA)],a0),D.m,u,D.e,D.i,0,u,u))
D.d.v(m,l)}else if(l===1)D.d.v(m,C.a([C.B(C.a([A.uj("Pull it back out",D.pi,new A.dbz(v),D.ac),D.ad,A.uj("Put the cover plate on",W.us,new A.dbA(v),D.aA)],a0),D.m,u,D.e,D.i,0,u,u)],a0))
else{l=A.uj("Start over",D.kN,new A.dbB(v),D.ac)
p=p.d
k=p?"Tested \u2713":"Power on and test"
D.d.v(m,C.a([C.B(C.a([l,D.ad,A.uj(k,D.hm,p?u:v.gcC3(),D.aA)],a0),D.m,u,D.e,D.i,0,u,u)],a0))}return A.U2(D.aA,new A.dbC(v,a1,t),C.x(m,D.m,u,D.e,D.P,0,D.p),n,r,q.b,u)}}
A.a9I.prototype={
R(){return new A.aGz(B.nC,null,"",C.c3(2000,1,1,0,0,0,0,0))},
gda(d){return this.c}}
A.aGz.prototype={
gdI(d){var w,v=this.d
if(v===$){w=this.a.c
v=this.d=w==null?A.h5b():w}return v},
gis(){var w=this.e
return w===$?this.e=new A.xj(-0.3,0.18,40,B.aXr,$.ax()):w},
gpa(){var w=this.f
return w===$?this.f=A.aQ_(this.gdI(0)):w},
q(){var w=this.z
if(w!=null)w.a4(0)
this.aFK()
this.a1()},
hs(d,e){var w=this,v=w.z
if(v!=null)v.a4(0)
w.m(new A.eXI(w,d,e))
w.z=C.cG(D.lE,new A.eXJ(w))},
me(d){return this.hs(d,!1)},
oj(){this.gis().im(40,0.18,B.aXr,-0.3)
this.m(new A.eXA(this))},
Jb(d){var w,v,u,t,s,r,q=this,p="square"
if(d===0){q.oj()
return}w=C.H([41,"tail",42,"trap",43,"arm"],x.S,x.N).h(0,d)
if(w!=null&&!q.gdI(0).a.t(0,w)){v=q.r
if(v.length===0){if(w==="tail")v="tailpiece"
else v=w==="trap"?"P-trap":"trap arm"
q.me("Pick the "+v+" from the buttons below first, then tap its glowing outline.")
return}if(v!==w){A.fQ(180,220,0.25,p)
u=q.r
A:{if("tail"===u){v="The tailpiece is the straight pipe that hangs from the sink. It goes at the very top, under the drain."
break A}if("trap"===u){v="The P-trap is the U-shaped bend. It goes right under the tailpiece, in the middle."
break A}v="The trap arm is the long straight pipe that goes into the wall. It goes last, on the right."
break A}q.me(v)
return}if(w==="trap"&&!q.gdI(0).a.t(0,"tail")){A.fQ(180,220,0.25,p)
q.me("Start from the top: put the tailpiece on first, then the trap under it.")
return}if(w==="arm"&&!q.gdI(0).a.t(0,"trap")){A.fQ(180,220,0.25,p)
q.me("The trap arm joins the trap. Put the P-trap on first.")
return}q.m(new A.eXB(q,w))
A.uk()
q.hs("Piece in place. "+(q.gdI(0).a.a===3?"Now tighten the two slip nuts: tap each nut.":"Pick the next piece."),!0)
return}v=d===44
if(v||d===45){t=v?"n1":"n2"
if(q.gdI(0).b.h(0,t)!==!0){q.m(new A.eXC(q,t))
A.uk()
q.hs("Slip nut hand tightened. In real life give it a quarter turn more with pliers, but never over-tighten plastic.",!0)
return}}if(d===46&&q.gdI(0).a.a===3&&q.r.length===0){if(q.gdI(0).c){q.m(new A.eXD(q))
q.hs("Water turned off.",!0)}else q.b_p()
return}s=q.gpa().b.h(0,d)
if(s!=null){q.m(new A.eXE(q,d))
v=q.gis()
r=s.c
v.zK(s.d,r)}},
b_p(){var w=this,v=x.cc,u=C.C(new C.Z(C.a(["n1","n2"],x.s),new A.eXF(w),v),v.k("M.E"))
w.m(new A.eXG(w,u))
if(u.length!==0){A.fQ(180,220,0.25,"square")
w.me("It is dripping from a loose slip nut! Tap the nut and tighten it, then run the water again.")}else{A.uk()
w.hs("No leaks. The water flows through the trap and into the wall. The little pool in the U-bend stays there and blocks sewer gas. The lesson is complete!",!0)}},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.gdI(0),i=j.a,h=i.t(0,"tail"),g=i.t(0,"trap"),f=i.t(0,"arm"),e=j.b
e=e.h(0,"n1")===!0&&e.h(0,"n2")===!0
w=C.a([h,g,f,e,j.c&&j.d.length===0],x.u)
v=D.d.bh(w,new A.eXN())
u=i.a===3
j=v<0?"All done":"Step "+(v+1)+"/5"
h=l.gpa()
g=l.gis()
f=l.w
e=l.x
t=l.y
s=f!==0?l.gpa().b.h(0,l.w):k
h=A.Ya(!1,k,g,new A.eXO(l),k,t,f,s,k,k,e,k,k,l.gJ9(),l.gJa(),h,!1,k,k,k)
e=x.p
s=C.a([],e)
for(r=0;r<3;++r){q=B.dss[r]
g=i.t(0,q)?k:new A.eXP(l,q)
f=i.t(0,q)?D.dr:D.fN
t=new C.aP(14,14)
p=l.r===q
o=p?D.b_:D.aX
n=new C.ay(o,p?3:1,D.r,-1)
o=C.a([],e)
if(i.t(0,q))o.push(B.enE)
p=B.dAE.h(0,q)
p.toString
m=i.t(0,q)?D.bU:D.c
o.push(new C.y(p,k,new C.F(!0,m,k,k,k,k,13,D.u,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k),k,k,k,k,k,k,k,k,k))
s.push(new C.D(D.iF,C.aA(k,C.p(k,new C.ca(D.aM,D.e,D.i,D.m,k,D.p,k,0,o,k),D.f,k,k,new C.o(f,k,new C.bH(n,n,n,n),new C.bh(t,t,t,t),k,k,D.n),k,k,k,k,D.hO,k,k,k),D.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,g,k,k,k,k,k,k,!1,D.a3),k))}i=C.bY(D.bG,s,D.br,k,6,8)
g=A.uj("Start over",D.kN,new A.eXQ(l),D.ac)
f=u?"Run the water":"Build the drain first"
return A.U2(D.cp,new A.eXR(d,w),C.x(C.a([i,D.Q,C.B(C.a([g,D.ad,A.uj(f,D.pm,u?l.gc8K():k,D.cp)],e),D.m,k,D.e,D.i,0,k,k)],e),D.m,k,D.e,D.P,0,D.p),h,j,"Sink drain (P-trap)",k)}}
A.a59.prototype={
R(){return new A.aAX(B.nC,null,"",C.c3(2000,1,1,0,0,0,0,0))},
gda(d){return this.c}}
A.aAX.prototype={
gdI(d){var w,v=this.d
if(v===$){w=this.a.c
v=this.d=w==null?A.h5b():w}return v},
gis(){var w=this.e
return w===$?this.e=new A.xj(-0.25,0.2,36,B.aWL,$.ax()):w},
gpa(){var w=this.f
return w===$?this.f=A.agM(this.gdI(0)):w},
q(){var w=this.z
if(w!=null)w.a4(0)
this.aFK()
this.a1()},
hs(d,e){var w=this,v=w.z
if(v!=null)v.a4(0)
w.m(new A.dek(w,d,e))
w.z=C.cG(D.lE,new A.del(w))},
me(d){return this.hs(d,!1)},
oj(){this.gis().im(36,0.2,B.aWL,-0.25)
this.m(new A.dec(this))},
Jb(d){var w,v,u,t,s,r,q=this
if(d===0){q.oj()
return}w=x.fZ
v=C.C(new C.Z(B.RX,new A.def(d),w),w.k("M.E"))
if(v.length!==0&&q.r.length!==0){w=q.gdI(0)
u=A.imO(w,q.r,D.d.gI(v))
if(u!=null){A.fQ(180,220,0.25,"square")
q.me(u)}else{A.uk()
q.m(new A.deg(q,d))
q.gis().zK(12,A.Rs(d))
q.hs(A.bDe(w)?"All four ends are connected. Now open the valves.":D.d.gI(v).b+": connected.",!0)}return}if((d===61||d===62)&&q.r.length===0){q.cEp(d)
return}w=d===68
if(w||d===69){t=w?"hot":"cold"
if(q.gdI(0).e.it(0,t)){q.m(new A.deh(q,t))
q.hs("Hose taken off.",!0)
return}}s=q.gpa().b.h(0,d)
if(s!=null){q.m(new A.dei(q,d))
w=q.gis()
r=s.c
w.zK(s.d,r)}},
cEp(d){var w,v,u,t=this,s=d===61,r=s?"hot":"cold"
t.m(new A.dem(t,s,d))
if(!(s?t.gdI(0).f:t.gdI(0).r)){t.hs("The "+r+" valve is turned off.",!0)
return}w=t.gdI(0)
v=w.e
if(v.h(0,d)===r)u=v.h(0,s?63:64)===r
else u=!1
if(!u){A.fQ(180,220,0.25,"square")
t.me(v.h(0,d)==null?"Water is spraying out of the "+r+" valve: it has no hose! Turn it off and connect the hose first.":"Water is leaking: the "+r+" hose is only fastened at one end. Turn the valve off and finish the connection.")}else if(w.f&&w.r&&A.bDe(w)){A.uk()
t.hs(y.W,!0)}else{A.uk()
w=s?"cold":"hot"
t.hs("The "+r+" water is flowing. Now turn the "+w+" valve too: tap its handle.",!0)}},
c8I(d){var w,v=this
v.m(new A.ded(v))
w=v.gdI(0)
if(!(w.f&&w.r)){v.hs("Valves closed.",!0)
return}if(A.bDe(w)){A.uk()
v.hs(y.W,!0)}else{A.fQ(180,220,0.25,"square")
v.me("Water is spraying out of a valve that has no hose! Close the valves and finish connecting the hoses first.")}},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=n.gdI(0),k=l.w||l.e.a!==0,j=l.e,i=j.h(0,61)==="hot"&&j.h(0,63)==="hot",h=j.h(0,62)==="cold"&&j.h(0,64)==="cold",g=C.a([k,i,h,l.f&&l.r&&A.bDe(l)],x.u),f=D.d.bh(g,new A.deq())
k=f<0?"All done":"Step "+(f+1)+"/4"
i=n.gpa()
h=n.gis()
w=n.w
v=n.x
u=n.y
t=w!==0?n.gpa().b.h(0,n.w):m
s=x.p
i=A.Ya(!1,m,h,new A.der(n),m,u,w,t,m,m,v,m,m,n.gJ9(),n.gJa(),i,!1,m,m,C.a([A.wY("Hints",D.aA,D.qx,l.w,new A.des(n)),D.Q],s))
v=C.a([],s)
for(r=0;r<2;++r){h={}
w=B.drU[r]
h.a=null
q=w.a
h.a=q
u=new C.aP(14,14)
t=n.r===q
p=t?D.b_:D.aX
o=new C.ay(p,t?3:1,D.r,-1)
p=C.a([],s)
t=C.a7(j).k("bd<2>")
if(new C.Z(new C.bd(j,t),new A.det(h),t.k("Z<M.E>")).gL(0)===2)p.push(B.enG)
p.push(new C.y(w.b,m,D.to,m,m,m,m,m,m,m,m,m))
v.push(new C.D(D.iF,C.aA(m,C.p(m,new C.ca(D.aM,D.e,D.i,D.m,m,D.p,m,0,p,m),D.f,m,m,new C.o(w.c,m,new C.bH(o,o,o,o),new C.bh(u,u,u,u),m,m,D.n),m,m,m,m,D.hO,m,m,m),D.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new A.deu(h,n),m,m,m,m,m,m,!1,D.a3),m))}j=C.bY(D.bG,v,D.br,m,6,8)
h=A.uj("Start over",D.kN,new A.dev(n),D.ac)
l=l.f&&l.r?"Close the valves":"Open the valves"
return A.U2(D.c0,new A.dew(d,g),C.x(C.a([j,D.Q,C.B(C.a([h,D.ad,A.uj(l,D.pm,n.gc8H(n),D.c0)],s),D.m,m,D.e,D.i,0,m,m)],s),D.m,m,D.e,D.P,0,D.p),i,k,"Faucet supply lines",m)}}
A.aBP.prototype={
R(){return new A.aBQ(A.hgQ())}}
A.aBQ.prototype={
gis(){var w,v=this.e
if(v===$){w=new A.xj(-0.3,0.48,46,B.VE,$.ax())
w.f=80
this.e=w
v=w}return v},
gpa(){var w=this.f
return w===$?this.f=A.agN(this.d):w},
q(){var w=this.z
if(w!=null)w.a4(0)
this.a1()},
hs(d,e){var w=this,v=w.z
if(v!=null)v.a4(0)
w.m(new A.dls(w,d,e))
w.z=C.cG(D.lE,new A.dlt(w))},
me(d){return this.hs(d,!1)},
oj(){this.gis().im(46,0.48,B.VE,-0.3)
this.m(new A.dlm(this))},
Jb(d){var w,v,u,t=this
if(d===0){t.oj()
return}if(d===72){w=t.d
w=w.d.t(0,72)&&w.a>=5}else w=!1
if(w){t.m(new A.dlo(t,d))
A.uk()
t.hs("You flipped the breaker fully OFF and then ON. The living room light is back on. A breaker trips when a circuit is overloaded: find out why before it trips again.",!0)
t.gis().zK(22,B.hdF)
return}w=d===87
if(w||d===86){v=t.d
v=v.b&&!v.c&&v.a>=5}else v=!1
if(v){if(t.w==="wrench"&&w){t.m(new A.dlp(t,d))
A.uk()
t.hs("You tightened the slip nut with the wrench. The drip has stopped.",!0)
return}A.fQ(180,220,0.25,"square")
t.me(w?"Hand tightening is not enough here. Pick the wrench first, then tap the nut.":"The water is dripping from the slip nut on the trap. Pick the wrench, then tap the nut.")}u=t.gpa().b.h(0,d)
if(u!=null){t.m(new A.dlq(t,d))
w=t.gis()
v=u.c
w.zK(u.d,v)}},
cgF(d){var w,v
A:{if("ptrap"===d){w=B.euf
break A}if("faucet"===d){w=B.bHR
break A}w=new A.E0(d,null,null)
break A}v=this.c
v.toString
C.a5(v,!1).cc(C.eh(new A.dln(w),!1,null,x.H))},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.d,l=B.dms[m.a],k=o.r,j=k===0?n:A.ibV(k)
k=m.d.t(0,72)
w=!m.b||m.c
v=C.a([!k,w],x.u)
w=m.a
k=o.gpa()
u=o.gis()
t=o.r
s=o.x
r=o.y
q=t!==0?o.gpa().b.h(0,o.r):n
p=j==null?n:C.aA(n,C.p(n,B.fyq,D.f,n,n,new C.o(D.aA,n,n,C.m(12),n,n,D.n),n,n,n,n,D.qj,n,n,n),D.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new A.dlw(o,j),n,n,n,n,n,n,!1,D.a3)
k=A.Ya(!1,n,u,new A.dlx(o),n,r,t,q,p,new A.dly(o),s,n,n,o.gJ9(),o.gJa(),k,!1,n,n,n)
s=l.a
p=x.p
q=C.B(C.a([C.E(C.d(""+(m.a+1)+". "+s,n,n,n,n,n,n,B.fqv,n,n,n),1),A.wY("Wrench",D.aJ,D.ok,o.w==="wrench",new A.dlz(o))],p),D.m,n,D.e,D.i,0,n,n)
t=C.d(l.b,n,3,D.a1,n,n,n,B.frB,n,n,n)
m=C.kR(D.bq,6,s,6,0,new A.dlA(o),m.a)
u=v[0]
s=u?"\u2705 Living room power fixed":"\u26a0 Living room has no power"
s=C.E(C.d(s,n,n,n,n,n,n,C.l(n,n,u?D.ep:D.eO,n,n,n,n,n,n,n,n,11.5,n,n,D.H,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),1)
u=v[1]
r=u?"\u2705 Sink leak fixed":"\u26a0 Kitchen sink drips"
return A.U2(D.bq,new A.dlB(d,v),C.x(C.a([q,D.bF,t,m,C.B(C.a([s,C.E(C.d(r,n,n,n,n,n,n,C.l(n,n,u?D.ep:D.eO,n,n,n,n,n,n,n,n,11.5,n,n,D.H,n,n,!0,n,n,n,n,n,n,n,n),D.dV,n,n),1)],p),D.m,n,D.e,D.i,0,n,n)],p),D.m,n,D.e,D.P,0,D.p),k,"Stage "+(w+1)+"/7","Build and fix a house",n)}}
A.afP.prototype={
R(){return new A.bxB()}}
A.bxB.prototype={
b86(){var w=this,v=w.d
if(v!=null)v.a4(0)
w.d=null
if(w.e&&w.c!=null)w.m(new A.fj9(w))},
c8M(d){var w,v,u=this
u.m(new A.fj7(u))
w=u.a
v=w.e
v.apH(w.f?1.45:0.69)
v=u.d
if(v!=null)v.a4(0)
u.d=C.cG(D.kJ,new A.fj8(u))},
q(){var w=this.d
if(w!=null)w.a4(0)
this.a1()},
B(d){var w=this,v=null,u=w.a.d,t=D.w.j(w.e?0.8:0.55),s=w.e,r=s?D.bt:D.aX
r=C.J(r,D.r,s?2:1)
return new C.D(D.eI,C.he(C.mH(D.c6,C.p(v,C.X(w.a.c,D.c,v,v,v,22),D.f,v,v,new C.o(t,v,r,v,v,v,D.a6),v,44,v,v,v,v,v,44),v,new A.fja(w),new A.fjb(w),v,v,v,v,new A.fjc(w)),v,u,v,v),v)}}
A.byc.prototype={}
A.byh.prototype={}
A.bzx.prototype={}
A.jS.prototype={}
A.N4.prototype={}
A.a7b.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=x.p,k=C.a([C.B(C.a([C.aH(m,m,m,m,T.nz,m,m,m,new A.cc1(d),m,m,m,m,m,m),B.fIF],l),D.m,m,D.e,D.i,0,m,m)],l)
for(w=0;w<5;++w){v=B.due[w]
u=v.c
t=C.a([new C.D(D.alR,new C.y(v.b+"  "+v.a.toUpperCase(),m,new C.F(!0,u,m,m,m,m,12,D.u,m,1.1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m,m,m,m,m,m,m),m)],l)
for(s=v.d,r=s.length,q=0;q<r;++q){p=s[q]
o=new C.aP(14,14)
n=new C.ay(u.j(0.35),1,D.r,-1)
t.push(C.p(m,C.x(C.a([new C.y(p.a,m,D.j6,m,m,m,m,m,m,m,m,m),D.cS,new C.y(p.b,m,E.aaa,m,m,m,m,m,m,m,m,m)],l),D.E,m,D.e,D.i,0,D.p),D.f,m,m,new C.o(B.FH,m,new C.bH(n,n,n,n),new C.bh(o,o,o,o),m,m,D.n),m,m,m,D.ct,D.bg,m,m,m))}D.d.v(k,t)}return C.c6(m,D.c2,C.bn(!0,C.cl(k,m,m,B.akS,m,m,D.ah,!1),!0,!1,D.af,!0,!0),m,!1,!1,m,m)}}
A.cob.prototype={}
A.Fg.prototype={}
A.nw.prototype={}
A.Xh.prototype={}
A.co1.prototype={
bAi(d,e,f){var w,v=this
if(f!=null)w=D.d.fZ(B.azA,new A.co5(f))
else{w=new C.e6()
w.cX(v.a)
w=B.azA[w.ap(2)]}v.c!==$&&C.aQ()
v.c=w
w=new C.e6()
w.cX(v.a+7)
w=w.h6()
v.d!==$&&C.aQ()
v.d=w},
vr(d,e){var w=this.c
w===$&&C.c()
return D.d.fZ(w.c,new A.co6(e))},
Pt(d){++this.w
return new A.ey(!1,d,!1,"")},
c5V(d){var w=d.d
return new C.N(w,new A.co2(this),C.T(w).k("N<1,n>")).aH(0," and ")},
biW(d,e){var w,v,u,t,s=this,r=s.vr(0,e),q=s.e
if(q.t(0,e))return s.Pt("The "+r.c.toLowerCase()+" is already there.")
if(d!==r.b)return s.Pt(s.b?"That does not go here.":"That does not go here. This spot is for the "+r.c.toLowerCase()+".")
for(w=r.d,v=w.length,u=0;u<v;++u)if(!q.t(0,w[u])){q=s.b?"Not yet: something has to go in first.":"Not yet. "+r.e+" Put in the "+s.c5V(r)+" first.";++s.w
return new A.ey(!1,q,!1,"")}if(r.f&&s.r)return s.Pt(s.b?"The water is still on!":"Stop! The water is still on. Cutting into a pipe with the water on floods the room. Turn the water off at the main valve first (pick the hand and tap the main valve).")
q.M(0,e)
s.y=!1
s.x.aa(0)
if(r.r>0)t=s.b?"":" It is only loose. Pick the wrench and tap it to tighten the joints."
else t=""
return new A.ey(!0,r.c+" fitted."+t,!1,"")},
bkd(d){var w,v,u,t,s=this,r=s.vr(0,d)
if(!s.e.t(0,d))return s.Pt(s.b?"Nothing to tighten yet.":"There is nothing to tighten yet: the "+r.c.toLowerCase()+" is not fitted.")
w=r.r
if(w===0)return s.Pt(s.b?"That does not need tightening.":"The "+r.c.toLowerCase()+" does not have joints to tighten. It just sits in place.")
v=s.f
u=v.h(0,d)
if(u==null)u=0
if(u>=w)return s.Pt("Already tight. More force would crack it.")
t=u+1
v.n(0,d,t)
s.x.aa(0)
s.y=!1
v=r.c
return new A.ey(!0,t>=w?v+": every joint is tight now.":v+": one joint tightened, one to go.",!1,"")},
aHF(d){var w=this.vr(0,d),v=this.f.h(0,d)
if(v==null)v=0
return w.r-v},
aJI(){var w,v,u,t,s,r,q=this
q.r=!q.r
w=q.x
w.aa(0)
if(!q.r)return B.b_S
v=q.c
v===$&&C.c()
u=v.c
t=C.T(u).k("Z<1>")
s=C.C(new C.Z(u,new A.co7(q),t),t.k("M.E"))
v=v.c
u=C.T(v).k("Z<1>")
r=C.C(new C.Z(v,new A.co8(q),u),u.k("M.E"))
q.y=!0
if(s.length!==0){w.v(0,new C.N(s,new A.co9(),C.T(s).k("N<1,n>")));++q.w
return new A.ey(!1,"Water is spraying from an open pipe where the "+D.d.gI(s).c.toLowerCase()+" should be! Turn the water off and finish the job.",!0,"")}if(r.length!==0){w.v(0,new C.N(r,new A.coa(),C.T(r).k("N<1,n>")));++q.w
return new A.ey(!1,"The "+D.d.gI(r).c.toLowerCase()+" is leaking from a loose joint. Turn the water off, tighten it with the wrench, then test again.",!0,"")}if(!q.ga3P())return B.b_I
return B.b_t},
cK2(){var w,v,u,t,s,r,q,p=this
p.r=!0
p.aJI()
w=p.c
w===$&&C.c()
v=w.c
u=v.length
t=0
for(;t<u;++t){s=v[t]
p.biW(s.b,s.a)}for(w=w.c,v=w.length,t=0;t<v;++t){s=w[t]
for(u=s.r,r=s.a,q=0;q<u;++q)p.bkd(r)}p.aJI()
p.w=0},
ga3P(){var w=this.c
w===$&&C.c()
return D.d.d_(w.c,new A.co3(this))},
gcId(){var w=this.c
w===$&&C.c()
return D.d.d_(w.c,new A.co4(this))},
gwJ(){var w=this
return w.ga3P()&&w.gcId()&&w.r&&w.y&&w.x.a===0}}
A.Wg.prototype={
R(){var w,v=new A.xj(-0.25,0.4,135,B.aY9,$.ax())
v.f=200
w=new C.yf()
$.yZ()
w.h8(0)
return new A.aFg(v,w)}}
A.aFg.prototype={
gCY(d){var w=this.d
if(w===$){this.a.toString
w=D.o.F(Date.now(),1e5)
this.d=w}return w},
Z(){var w,v=this
v.a2()
w=v.a.e
if(w==null)w=A.h5a(!0,v.gCY(0),null)
v.e=w
v.r=A.hvj(w,v.x,!w.b)},
q(){var w=this.at
if(w!=null)w.a4(0)
this.a1()},
aeB(){var w=this.e
w===$&&C.c()
return this.r=A.hvj(w,this.x,!w.b)},
axV(d,e){var w=this,v=w.at
if(v!=null)v.a4(0)
w.m(new A.err(w,d,e))
w.at=C.cG(D.jR,new A.ers(w))},
b_s(){this.f.im(135,0.4,B.aY9,-0.25)
this.m(new A.erm(this))},
czL(d){var w,v,u=this.e
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
ayM(d){var w=this.e
w===$&&C.c();++w.w
return new A.ey(!1,d,!1,"")},
c8Q(d){return this.b_r(d)},
cz_(d){var w
A:{if("main"===d){w=9400
break A}w=this.e
w===$&&C.c()
w=w.c
w===$&&C.c()
w=9100+D.d.bh(w.c,new A.erw(d))
break A}this.b_r(w)},
b7C(){var w,v,u,t,s,r,q,p=this,o=p.x
if(o==="hand")return C.a([B.eOb],x.L)
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
q=r.vr(0,s)
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
b_r(d){var w,v,u,t,s,r=this
if(d===0)return
w=r.r
w===$&&C.c()
v=w.b.h(0,d)
if(r.x.length===0){r.m(new A.erb(r,d))
if(v!=null)r.axV(v.a+": "+v.b,!0)
return}u=r.czL(d)
w=r.x
if(w==="hand")if(d===9400){w=r.e
w===$&&C.c()
t=w.aJI()}else{w=r.e
w===$&&C.c()
t=r.ayM(w.b?"Your hand is only for the main water valve.":"Your hand is for the main water valve. Parts are placed by picking them from the tray.")}else if(w==="wrench")if(u==null){w=r.e
w===$&&C.c()
t=r.ayM(w.b?"Nothing to tighten.":"There is nothing to tighten there.")}else{w=r.e
w===$&&C.c()
t=w.bkd(u)}else if(u==null){w=r.e
w===$&&C.c()
t=r.ayM(w.b?"Not there.":"That does not go there. Tap one of the glowing spots.")}else{s=r.e
s===$&&C.c()
t=s.biW(w,u)}w=t.a
if(w)A.uk()
else A.fQ(180,220,0.25,"square")
r.m(new A.erc(r,d))
w=w&&!t.c
r.axV(t.b,w)
w=r.e
w===$&&C.c()
if(w.gwJ()&&!r.as){r.as=!0
$.aV.x1$.push(new A.erd(r))}},
c8N(){var w,v=null
this.a.toString
w=this.c
w.toString
C.ck(v,v,!0,v,new A.eri(this,0),w,v,!0,!0,x.H)},
aZf(){this.m(new A.erp(this))
this.b_s()},
gcE9(){var w,v,u,t=C.a([],x.s)
for(w=0;w<11;++w){v=B.c72[w]
u=this.e
u===$&&C.c()
u=u.c
u===$&&C.c()
if(D.d.b3(u.c,new A.erx(v)))t.push(v)}return t},
c6i(){var w,v,u,t,s=this.e
s===$&&C.c()
s=s.c
s===$&&C.c()
s=s.c
w=s.length
v=0
for(;v<w;++v){u=s[v]
if(!this.e.e.t(0,u.a)){t=this.e.e
t=D.d.d_(u.d,t.gkX(t))}else t=!1
if(t)return u}return null},
aVC(){var w,v,u,t=this,s=t.e
s===$&&C.c()
if(s.x.a!==0){s=s.c
s===$&&C.c()
s=s.c
w=C.T(s)
v=new C.cO(new C.Z(s,new A.erj(t),w.k("Z<1>")),new A.erk(),w.k("cO<1,n>")).aH(0,", ")
s=t.e
if(s.r)return new C.b7("\ud83d\udca7 Water is leaking at: "+v+". First turn the main water OFF: pick Hand and tap the main valve.","hand","main")
return new C.b7("\ud83d\udca7 It leaked at: "+v+". Pick the Wrench and tap it to tighten the joint. Then turn the water ON again to test.","wrench",s.x.gI(0))}if(!s.ga3P()){u=t.c6i()
if(u==null)return B.eYP
if(u.f&&t.e.r)return B.eYk
s=u.b
w=B.aHi.h(0,s)
if(w==null)w=s
return new C.b7("Next: pick "+w+" from the tray, then tap "+u.c.toLowerCase()+" (the glowing spot). "+u.e,s,u.a)}s=t.e.c
s===$&&C.c()
s=s.c
w=C.T(s).k("Z<1>")
v=C.C(new C.Z(s,new A.erl(t),w),w.k("M.E"))
if(v.length!==0)return new C.b7("Everything is fitted. Now tighten each joint: pick the Wrench and tap "+D.d.gI(v).c.toLowerCase()+".","wrench",D.d.gI(v).a)
if(!t.e.r)return B.eX7
return B.eZf},
cxl(){var w,v,u,t,s=this,r={}
r.a=r.b=null
w=s.aVC()
r.b=w.b
r.a=w.c
s.m(new A.ert(r,s))
v=r.a
if(v!=null){if(v==="main")u=9400
else{v=s.e
v===$&&C.c()
v=v.c
v===$&&C.c()
u=9100+D.d.bh(v.c,new A.eru(r))}r=s.r
r===$&&C.c()
t=r.b.h(0,u)
if(t!=null)s.f.im(70,0.3,t.c,-0.2)
s.m(new A.erv(s,u))}s.axV(w.a,!0)},
axU(d,e,f){var w,v=null,u=this.x===d,t=u?D.aA.j(0.25):D.c.j(0.07),s=C.m(14),r=u?D.aA:D.aX
r=C.J(r,D.r,u?2:1)
w=C.X(f,u?D.aA:D.ac,v,v,v,19)
return new C.D(G.og,C.aA(v,C.p(v,C.B(C.a([w,D.bm,C.d(e,v,v,v,v,v,v,C.l(v,v,u?D.aA:D.c,v,v,v,v,v,v,v,v,12.5,v,v,D.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),D.m,v,D.e,D.i,0,v,v),D.f,v,v,new C.o(t,v,r,s,v,v,D.n),v,v,v,v,D.eY,v,v,v),D.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new A.erf(this,u,d),v,v,v,v,v,v,!1,D.a3),v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.e
h===$&&C.c()
h=h.c
h===$&&C.c()
h=h.c
w=new C.Z(h,new A.ery(j),C.T(h).k("Z<1>")).gL(0)
h=j.e.c
h===$&&C.c()
v=j.r
v===$&&C.c()
u=j.y
t=j.z
s=j.Q
r=u!==0?v.b.h(0,u):i
v=A.Ya(!1,i,j.f,new A.erz(j),i,s,u,r,i,new A.erA(),t,i,i,j.gc8O(),j.gc8P(),v,!1,i,i,i)
t=x.p
r=C.a([],t)
if(!j.e.b){u=D.aJ.j(0.12)
s=C.m(12)
q=C.J(D.aJ.j(0.6),D.r,1)
r.push(C.p(i,C.B(C.a([C.E(C.d("\ud83d\udc49 "+j.aVC().a,i,4,D.a1,i,i,i,B.fxy,i,i,i),1),D.bm,C.bI(B.fBg,i,j.gcxk(),C.bo(i,i,i,i,i,B.f82,D.kk,i,i,i,i,i))],t),D.m,i,D.e,D.i,0,i,i),D.f,i,i,new C.o(u,i,q,s,i,i,D.n),i,i,i,D.eI,D.a_e,i,i,1/0))}if(j.x.length!==0&&j.b7C().length!==0){u=C.a([],t)
for(s=j.b7C(),q=s.length,p=0;p<s.length;s.length===q||(0,C.L)(s),++p){o={}
n=s[p]
o.a=null
o.a=n.a
m=new C.aP(12,12)
l=new C.ay(D.b_,1,D.r,-1)
u.push(C.aA(i,C.p(i,new C.y("\ud83d\udccd "+n.b,i,D.oN,i,i,i,i,i,i,i,i,i),D.f,i,i,new C.o(D.eP.j(0.35),i,new C.bH(l,l,l,l),new C.bh(m,m,m,m),i,i,D.n),i,i,i,i,B.a_f,i,i,i),D.y,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new A.erB(o,j),i,i,i,i,i,i,!1,D.a3))}r.push(new C.D(D.eI,C.bY(D.bG,u,D.br,i,6,6),i))}u=j.e
if(u.b)u="Real work: no hints. Build it in the right order."
else if(u.ga3P())u="Everything is fitted. Tighten every joint, then turn the main water on to test."
else{u=j.e.c
u===$&&C.c()
u="Job: "+u.d}r.push(new C.bM(D.a5,i,i,C.d(u,i,2,D.a1,i,i,i,B.aTO,i,i,i),i))
r.push(D.Q)
t=C.a([j.axU("hand","Hand",B.apC),j.axU("wrench","Wrench",D.ok)],t)
for(u=j.gcE9(),s=u.length,p=0;p<u.length;u.length===s||(0,C.L)(u),++p){k=u[p]
q=B.aHi.h(0,k)
q.toString
t.push(j.axU(k,q,Ag.ap6))}r.push(new C.a4(i,52,C.cl(t,i,i,i,i,i,D.aM,!1),i))
return A.U2(D.aJ,new A.erC(j,d),C.x(r,D.m,i,D.e,D.P,0,D.p),v,""+w+"/"+h.c.length+" fitted","Plumbing job: "+h.b,i)},
c2E(d){return C.bV(E.mC,null,new A.ero(this),d,!0,!0,!0,D.k5,!1,!1,x.H)}}
A.z8.prototype={}
A.l9.prototype={}
A.XX.prototype={}
A.aw6.prototype={}
A.aUY.prototype={}
A.ey.prototype={
gjR(){return this.a}}
A.XL.prototype={
cm3(d,e,f){var w,v,u,t,s,r,q=this,p=null,o="outlet",n="light",m="switch",l="gfci",k=q.a,j=new C.e6()
j.cX(k)
w=j.ap(3)
if(d==null)v=k>=100&&D.o.F(k,5)>=3?D.o.F(k,5):w
else v=d
u=C.a([0,1,2],x.t)
D.d.e_(u,j)
t=3+j.ap(2)
switch(v){case 0:k=e==null?"Living room":e
q.c!==$&&C.aQ()
q.c=k
k=C.a([new A.l9(u[0],o,p),new A.l9(u[1],o,p),new A.l9(5,n,t),new A.l9(t,m,p)],x.B)
q.d!==$&&C.aQ()
q.d=k
break
case 1:k=e==null?"Bedroom":e
q.c!==$&&C.aQ()
q.c=k
k=C.a([new A.l9(u[0],o,p),new A.l9(u[1],o,p),new A.l9(6,"fan",t),new A.l9(t,m,p)],x.B)
q.d!==$&&C.aQ()
q.d=k
break
case 2:k=e==null?"Kitchen":e
q.c!==$&&C.aQ()
q.c=k
k=C.a([new A.l9(u[0],l,p),new A.l9(u[1],l,p),new A.l9(5,n,t),new A.l9(t,m,p)],x.B)
q.d!==$&&C.aQ()
q.d=k
break
case 3:k=e==null?"Laundry room":e
q.c!==$&&C.aQ()
q.c=k
k=u[0]
s=u[1]
r=j.h6()?"dryer4":"dryer3"
r=C.a([new A.l9(k,"washer",p),new A.l9(s,r,p),new A.l9(5,n,t),new A.l9(t,m,p)],x.B)
q.d!==$&&C.aQ()
q.d=r
k=r
break
default:k=e==null?"Kitchen with a range":e
q.c!==$&&C.aQ()
q.c=k
k=u[0]
s=j.h6()?"range4":"range3"
s=C.a([new A.l9(k,s,p),new A.l9(u[1],l,p),new A.l9(5,n,t),new A.l9(t,m,p)],x.B)
q.d!==$&&C.aQ()
q.d=s
k=s}if(f&&v<3){k[1]=new A.l9(k[1].a,B.dmc[j.ap(5)],p)
k=q.d
k===$&&C.c()
k[3]=new A.l9(k[3].a,B.dnV[j.ap(5)],p)}},
ganK(){var w,v,u=C.aX(x.S),t=this.d
t===$&&C.c()
w=t.length
v=0
for(;v<t.length;t.length===w||(0,C.L)(t),++v)u.M(0,t[v].a)
return u},
cWe(d){var w,v,u,t=this.d
t===$&&C.c()
w=t.length
v=0
for(;v<w;++v){u=t[v]
if(u.a===d)return u}return null},
fN(d){++this.f
return new A.ey(!1,d,!1,"")},
amo(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.d
g===$&&C.c()
w=g.length
v=h.x
u=0
for(;u<g.length;g.length===w||(0,C.L)(g),++u){t=g[u].a
s=A.j4(t)
if(s.e==="fan")r="fan"
else r=s.c?"ceiling":"wall"
v.n(0,t,r)}g=C.a([],x.t)
for(q=0;q<$.Hf().length;++q)g.push(q)
h.y.v(0,g)
h.z.v(0,h.ganK())
for(g=h.Q,w=x.S,u=0;u<3;++u){p=B.oC[u]
v=C.aX(w)
t=C.aX(w)
o=new A.aw6(v,t)
o.d=o.e=o.a=!0
for(r=h.aqM(p),n=r.length,m=0;m<r.length;r.length===n||(0,C.L)(r),++m)for(l=r[m]*10,k=0;k<6;++k)t.M(0,l+k)
for(t=h.ganK(),r=C.a7(t),n=new C.mr(t,t.r,r.k("mr<1>")),n.c=t.e,r=r.c,t=p+48;n.C();){l=n.d
if(l==null)l=r.a(l)
s=A.j4(l)
if(!s.c){j=s.d.a
j=j>=p&&j<=t}else j=!1
if(j)v.M(0,l)}g.n(0,p,o)}for(g=h.as,u=0;u<2;++u){i=g[u]
i.a=!0
i.b=3
i.d=i.c=!0}},
cK3(){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=k.d
j===$&&C.c()
w=j.length
v=0
for(;v<j.length;j.length===w||(0,C.L)(j),++v){u=j[v]
k.bgU(u.a,u.b)}for(w=j.length,t=x.S,s=x.N,r=k.at,v=0;v<j.length;j.length===w||(0,C.L)(j),++v){q=j[v].a
p=r.h(0,q)
if(p==null)continue
o=p.a
n=A.t7(o)
if(n.w.length!==0)m=n.z
else{A:{if("outlet"===o){o=C.H([25,"ground",23,"white",21,"black"],t,s)
break A}if("gfci"===o){o=C.H([25,"ground",24,"white",22,"black"],t,s)
break A}if("switch"===o){o=C.H([25,"ground",21,"blackLine",22,"blackLoad"],t,s)
break A}o=C.H([53,"ground",52,"white",51,"black"],t,s)
break A}m=o}for(o=m.gdW(m),o=o.gaf(o);o.C();){l=o.gS(o)
k.bff(q,l.b,l.a)}k.aIZ(q)
k.aFf(q)}if(!k.ax)k.aJG()
for(w=j.length,v=0;v<j.length;j.length===w||(0,C.L)(j),++v){u=j[v]
if(D.d.t(B.lj,u.b)){t=u.a
k.biY(t,"lamp")
k.bkx(t)}}for(j=D.d.gaf(j),w=new C.f2(j,new A.ct1());w.C();){t=j.gS(0).a
k.aGh(t)
k.aGh(t)}},
aM9(d){var w,v,u=A.j4(d).d.a,t=C.a([],x.t)
for(w=0;v=$.Hf(),w<v.length;++w){v=v[w]
if(v>u&&v<64)t.push(w)}return t},
cU6(d,e){var w,v,u=this,t=u.x
if(t.aj(0,d))return u.fN("There is already a box at "+A.j4(d).b+".")
w=A.j4(d)
v=w.c
if(!v&&e!=="wall")return u.fN("That is a ceiling box. On the wall you use a plain wall box (the blue one with ears).")
if(v&&e==="wall")return u.fN("A wall box cannot go in the ceiling. Use a round ceiling box.")
if(w.e==="fan"&&e!=="fan"){if(!u.b)return u.fN('A fan is heavy and it shakes. It needs a box that says "fan rated". A plain ceiling box can let the fan fall.')
t.n(0,d,e);++u.f
return B.b05}t.n(0,d,e)
t=v?"ceiling joist":"side of the stud"
return new A.ey(!0,w.b+": box fixed to the "+t+".",!1,"")},
cOz(d){var w,v=this
if(d<0||d>=$.Hf().length)return B.b0_
w=v.y
if(w.t(0,d))return v.fN("That stud already has a hole.")
if(v.x.a===0)return v.fN("Mount the boxes first. Then you know where the cable has to go and which studs need a hole.")
w.M(0,d)
return B.b_K},
cXj(d){var w,v,u,t,s=this,r=A.j4(d)
if(!s.x.aj(0,d))return s.fN("There is no box at "+r.b+". Mount the box first, then pull the cable to it.")
w=s.z
if(w.t(0,d))return s.fN("The cable is already there.")
v=s.aM9(d)
u=C.T(v).k("Z<1>")
t=C.C(new C.Z(v,new A.ct8(s),u),u.k("M.E"))
if(t.length!==0){w=D.o.V($.Hf()[D.d.gI(t)])
v=t.length
u=v===1?"it":"the studs"
return s.fN("The cable is stuck: the stud at "+w+" inches has no hole. Drill "+u+" first ("+v+" left on the way).")}w.M(0,d)
return new A.ey(!0,"Cable pulled from the panel to "+r.b+", through the studs and along the ceiling.",!1,"")},
gap3(){return this.ganK().d_(0,new A.ct9(this))},
aqr(d){var w,v,u,t
for(w=this.Q,w=new C.cD(w,C.a7(w).k("cD<1,2>")).gaf(0);w.C();){v=w.d
u=v.b
if(u.a){t=v.a
t=d>=t&&d<=t+48}else t=!1
if(t)return u}return null},
cRn(d){var w,v,u=this
if(!u.gap3())return u.fN("Finish the rough-in first. The cable and the boxes must be in before the drywall hides the studs.")
if(!D.d.t(B.a5p,d))return B.b_x
if(!D.d.t(B.oC,d))return u.fN("The edge of the sheet would land between two studs. The sheet needs a stud under every edge, so there is nothing to screw it to. Start at the left corner (a stud) and move one sheet width (48 inches) at a time.")
w=u.Q
v=w.h(0,d)
if((v==null?null:v.a)===!0)return u.fN("There is already a sheet there.")
v=w.h(0,d)
if(v==null){v=x.S
v=new A.aw6(C.aX(v),C.aX(v))}v.a=!0
w.n(0,d,v)
return B.b_J},
aqM(d){var w,v,u,t=C.a([],x.t)
for(w=d+48,v=0;u=$.Hf(),v<u.length;++v){u=u[v]
if(u>=d&&u<=w)t.push(v)}return t},
cNt(d){var w,v,u=this,t=A.j4(d)
if(t.c)return u.fN("Ceiling fixtures do not need an opening in the wall.")
if(!u.x.aj(0,d))return u.fN("There is no box at "+t.b+".")
w=u.aqr(t.d.a)
if(w==null)return u.fN("There is no sheet over this box yet. Hang the sheet first, then cut the opening.")
v=w.b
if(v.t(0,d))return u.fN("The opening is already cut.")
v.M(0,d)
return B.b_T},
aLo(d,e,f){var w,v,u,t,s,r=this
if(f)return r.fN("Missed the stud! There is only air behind the sheet here. The screw would pull through the paper. Screw only where a stud is behind the sheet (every 16 inches).")
w=x.dD
v=C.C(new C.Z(B.oC,new A.cta(r,d),w),w.k("M.E"))
if(v.length===0)return r.fN("There is no sheet here yet.")
u=d*10+e
if(D.d.d_(v,new A.ctb(r,u)))return r.fN("There is already a screw there.")
for(w=v.length,t=r.Q,s=0;s<v.length;v.length===w||(0,C.L)(v),++s)t.h(0,v[s]).c.M(0,u)
return B.b_V},
boG(d,e){return this.aLo(d,e,!1)},
bqj(d){var w=this.Q.h(0,d)
if(w==null||!w.a)return!1
return D.d.d_(this.aqM(d),new A.ctd(w))},
gaDL(){return D.d.d_(B.oC,new A.ct0(this))},
gaDK(){var w=this.ganK()
return new C.Z(w,new A.csZ(),C.a7(w).k("Z<cs.E>")).d_(0,new A.ct_(this))},
cZh(d){var w,v=this
if(!v.gaDL())return v.fN("Hang all the sheets first.")
if(!D.d.d_(B.oC,v.gaqs()))return v.fN("Finish screwing every sheet to the studs first. Tape goes on a solid wall.")
w=v.as[d]
if(w.a)return v.fN("This seam already has tape.")
w.c=w.a=!0
return B.b_B},
cU9(d){var w,v=this,u=v.as[d]
if(!u.a)return v.fN("Tape first. The mud goes over the tape.")
if(!u.c)return v.fN("The last coat is still wet. Let it dry before the next coat.")
w=u.b
if(w>=3)return v.fN("Three coats are enough. Now sand it.");++w
u.b=w
u.c=!1
return new A.ey(!0,"Coat "+w+" of joint compound spread. Let it dry.",!1,"")},
cT0(){var w,v=this.as
if(D.d.d_(v,new A.ct6()))return B.b_Q
for(w=0;w<2;++w)v[w].c=!0
return B.b03},
bos(d){var w=this,v=w.as[d]
if(v.b<3)return w.fN("Put on all three coats of mud first. Sanding now would just rub off the tape.")
if(!v.c)return w.fN("The mud is still wet. Let it dry first.")
if(v.d)return w.fN("Already sanded.")
v.d=!0
return B.b_y},
cWt(d){var w=this,v=w.Q.h(0,d)
if(v==null||!v.a)return w.fN("There is no sheet there.")
if(!w.gaDK())return w.fN("Cut the openings for the boxes before you paint. Otherwise the paint covers the boxes.")
if(!D.d.d_(w.as,new A.ct7()))return w.fN("Sand the seams first. Paint shows every bump.")
if(v.e)return w.fN("This sheet is already painted.")
v.e=!0
return B.b_u},
gt7(){var w=this
return w.gaDL()&&D.d.d_(B.oC,w.gaqs())&&w.gaDK()&&D.d.d_(w.as,new A.ct2())&&D.d.d_(B.oC,new A.ct3(w))},
NH(){var w,v
for(w=this.at,w=new C.du(w,w.r,w.e);w.C();){v=w.d.b
v.a=this.ax&&!this.ay}},
c1R(d,e){if(d.c)return e==="light"||e==="fan"?"":"A ceiling box holds a light or a fan, not an outlet or a switch."
return D.d.t(B.lj,e)||D.d.t(B.jG,e)?"":"A light or a fan hangs from the ceiling. A wall box holds an outlet, a GFCI or a switch."},
bgU(d,e){var w,v,u,t,s,r=this,q=A.j4(d)
if(!r.gt7())return r.fN("Finish the drywall first. Devices go in after the walls are painted.")
w=r.x
if(!w.aj(0,d)||!r.z.t(0,d))return r.fN("There is no box with cable at "+q.b+".")
v=r.at
if(v.aj(0,d))return r.fN("There is already a device there. Pull it out first if you want to move it.")
if(r.ax&&!r.ay){++r.f
return B.b_C}u=r.c1R(q,e)
if(u.length!==0)return r.fN(u)
if(!(D.d.t(B.jG,e)&&q.e==="low"))t=!D.d.t(B.jG,e)&&!q.c&&q.e==="switch"
else t=!0
if(t){if(!r.b)return r.fN(D.d.t(B.jG,e)?"A switch goes about 48 inches from the floor, where a hand falls naturally. This box is down at outlet height.":"Outlets go low, about 16 inches from the floor. This box is up at switch height.");++r.f
r.cy.push("Wrong height at "+q.b+".")}t=e==="fan"
if(t&&w.h(0,d)!=="fan")if(!r.b)return r.fN("This box is not fan rated. A fan on it can fall. Take the box out and put in a fan-rated one.")
s=new A.CC(C.U(x.S,x.N))
s.w=r.b
s.z=r.dx
s.y=!(t&&w.h(0,d)!=="fan")
s.a=r.ax&&!r.ay
v.n(0,d,new A.aUY(e,s))
if(e==="light")w="Light fixture"
else if(t)w="Ceiling fan"
else if(e==="gfci")w="GFCI outlet"
else w=e==="switch"?"Switch":A.a2l(e)
return new A.ey(!0,w+" is held up to "+q.b+". Turn the breaker OFF, then wire it.",!1,"")},
aoR(d){var w=this,v=w.at,u=v.h(0,d)
if(u==null)return B.b_G
if(w.ax&&!w.ay&&!u.b.x){if(w.b)return w.a2w()
return w.a2L()}v.W(0,d)
w.CW.W(0,d)
w.cx.W(0,d)
w.ch.W(0,d)
return B.b_Y},
a2L(){++this.r;++this.f
return B.b_W},
a2w(){var w,v,u=this;++u.r;--u.e
u.ax=!1
u.NH()
w=u.e
if(w<=0){u.w=!0
return B.b_F}v=w===1?"life":"lives"
return new A.ey(!1,"ZAP! You touched a live wire and got a shock. The breaker is now off. "+w+" "+v+" left. Always turn the breaker OFF and test the wires first.",!0,"shock")},
bff(d,e,f){var w,v,u,t,s=this,r=s.at.h(0,d)
if(r==null)return B.ace
s.NH()
w=A.t7(r.a)
v=D.d.fZ(w.f,new A.ct4(f))
u=A.hAi(w,r.b,e,v,!0)
t=u==null
if(t&&s.dx)return B.b_w
if(t){if(!s.b&&!v.c.t(0,e)){++s.f
return new A.ey(!0,v.b+": fastened. Careful: "+C.w(w.r.$2(e,v))+" It will burn or trip the breaker when the power comes on.",!0,"")}return new A.ey(!0,v.b+": wire fastened.",!1,"")}if(D.a.a0(u,"SHOCK"))return s.a2w()
if(D.a.a0(u,"STOP"))return s.a2L();++s.f
return new A.ey(!1,u,!1,"")},
bku(d,e){var w,v=this,u=v.at.h(0,d)
if(u==null)return B.WC
v.NH()
w=u.b
if(w.a&&w.c===0){if(v.b)return v.a2w()
return v.a2L()}w=w.b
w.bs(w,new A.cte(e))
return B.b02},
aIZ(d){var w,v,u=this,t=u.at.h(0,d)
if(t==null)return B.ace
w=A.t7(t.a)
v=t.b
if(!A.aih(w,v))return u.fN("Every wire must be fastened first.")
if(u.ax&&!u.ay){if(u.b)return u.a2w()
return u.a2L()}v.c=1
return B.b_O},
aox(d){var w,v=this,u=v.at.h(0,d)
if(u==null)return B.WC
if(v.ax&&!v.ay){if(v.b)return v.a2w()
return v.a2L()}w=u.b
w.c=0
w.d=!1
return B.b_U},
aFf(d){var w=this.at.h(0,d)
if(w==null||w.b.c!==1)return this.fN("Push the device into the box first.")
w.b.c=2
return B.b_X},
cZi(){var w,v,u,t,s,r,q,p,o,n=C.a([],x.fJ),m=this.d
m===$&&C.c()
w=m.length
v=this.at
u=0
for(;u<m.length;m.length===w||(0,C.L)(m),++u){t=m[u]
s=t.a
r=v.h(0,s)
q=t.b
p=A.t7(q)
o=A.j4(s).b+": "+p.b
if(r==null||r.a!==q){n.push(new A.abb(o,A.fSi(p),B.dig,!0))
continue}s=A.fSi(p)
q=r.b
n.push(new A.abb(o,s,A.h9P(p,q),q.y))}return n},
cZj(){var w,v,u,t,s,r=C.aX(x.N),q=this.d
q===$&&C.c()
w=q.length
v=0
for(;v<q.length;q.length===w||(0,C.L)(q),++v)r.M(0,q[v].b)
q=C.a([],x.J)
for(r=C.en(r,r.r,r.$ti.c),w=r.$ti.c;r.C();){u=r.d
u=B.aHw.h(0,u==null?w.a(u):u)
if(u==null)u=B.aAG
t=C.T(u)
s=new C.jd(u,0,2,t.k("jd<1>"))
s.oc(u,0,2,t.c)
D.d.v(q,s)}return q},
apD(d){var w=this.at
return A.La(A.t7(w.h(0,d).a),w.h(0,d).b)},
aJG(){var w=this
if(w.ay){w.ax=w.ay=!1
w.NH()
return B.b_M}w.ax=!w.ax
w.NH()
if(!w.ax)return B.b_E
return w.c8R()},
c8R(){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=C.a([],x.s),i=k.db
i.aa(0)
for(w=k.at,v=new C.cD(w,C.a7(w).k("cD<1,2>")).gaf(0),u=k.cx,t=!1,s=!1,r=!1;v.C();){q=v.d
p=q.b.b
if(p.c===0)continue
o=q.a
n=A.La(A.t7(w.h(0,o).a),w.h(0,o).b)
p.d=p.c>=2
m=n.r
if(m!=="none"){i.n(0,o,m)
p.Q=m
r=!0}if(n.d)t=!0
if(n.e){p.x=!0
u.M(0,o)
s=!0}if(n.a!=="ok"&&!k.dx)j.push(A.j4(o).b+": "+n.b)}if(t){k.ay=!0
k.NH()
l=s?"BANG! Sparks, smoke and flames. ":"Snap! "
i=k.dx?"The breaker tripped.":l+" The breaker tripped. "+D.d.aH(j," ")+" Fix it, then flip the breaker OFF and ON again."
return new A.ey(!1,i,!0,s?"burn":"trip")}if(r)return new A.ey(!1,k.dx?"Power is on.":"Power is on, and something is wrong. "+D.d.aH(j," "),!0,"arc")
if(j.length!==0)return new A.ey(!0,"Power is on. "+D.d.aH(j," "),!0,"")
return B.b_R},
aGh(d){var w,v,u,t,s,r,q=this,p=q.at,o=p.h(0,d)
if(o==null||!D.d.t(B.jG,o.a)||o.b.c<2)return B.b01
w=q.ch
if(w.t(0,d))w.W(0,d)
else w.M(0,d)
v=q.d
v===$&&C.c()
u=C.T(v).k("Z<1>")
t=C.C(new C.Z(v,new A.ct5(d),u),u.k("M.E"))
if(t.length===0)return B.b_N
s=D.d.gI(t)
v=s.a
r=q.anx(v)
if(w.t(0,d)&&r){p=p.h(0,v)
if(p!=null)p.c=!0
return new A.ey(!0,(s.b==="fan"?"The fan spins":"The light turns on")+". The switch works.",!1,"")}if(w.t(0,d)){p=s.b
return new A.ey(!1,(p==="fan"?"The fan":"The light")+" did not come on. Check the breaker and the wires on the switch and on the "+p+".",!1,"")}return B.b00},
a4N(d){var w,v=this.at.h(0,d)
if(v!=null){w=v.b
w=w.c<2||w.x}else w=!0
if(w)return!1
return this.apD(d).c},
anx(d){var w=this,v=w.cWe(d),u=v==null,t=u?null:v.c,s=!0
if(!u)if(t!=null)u=!(w.ax&&!w.ay)||!w.a4N(d)||!w.a4N(t)
else u=s
else u=s
if(u)return!1
return w.ch.t(0,t)},
biY(d,e){var w,v,u,t,s=this,r="Nothing happens.",q=s.at.h(0,d)
if(q==null||!D.d.t(B.lj,q.a)||q.b.c<2)return s.fN("There is no finished outlet there to plug into.")
w=s.CW
if(w.aj(0,d))return s.fN("Something is already plugged in.")
v=B.dB4.h(0,e)
if(v!=null&&!v.t(0,q.a)){w=A.aPX(e)
if(e==="washerM")u="the washer outlet (5-20)."
else u=e==="dryerM"?"a dryer outlet (14-30 or 10-30).":"a range outlet (14-50 or 10-50)."
return s.fN("The plug does not fit. "+w+" has a big plug made for its own outlet: "+u)}w.n(0,d,e)
w=q.b
if(w.x)return B.b_H
t=s.apD(d)
if(s.ax&&!s.ay&&s.a4N(d)){q.c=!0
if(t.a!=="ok"){w=s.dx
u=w?A.aPX(e)+" runs.":A.aPX(e)+" runs, but this outlet is NOT safe. "+t.b
return new A.ey(!0,u,!w,"")}return new A.ey(!0,A.aPX(e)+" runs. The outlet works.",!1,"")}if(!(s.ax&&!s.ay))return B.b_L
u=t.r
if(u!=="none"){s.db.n(0,d,u)
w.Q=u
w=s.dx?r:A.aPX(e)+" does not run. "+t.b
return new A.ey(!1,w,!0,u==="fire"?"burn":"arc")}return new A.ey(!1,s.dx?r:"Nothing happens. "+t.b,!0,"")},
bkx(d){if(this.CW.W(0,d)==null)return B.WC
return B.b_D},
biI(d){var w,v=this
if(d>=0){w=v.d
w===$&&C.c()
w=d>=w.length}else w=!0
if(w)return 2
if(v.r2(d))return 2
w=v.d
w===$&&C.c()
return v.at.h(0,w[d].a)==null?0:1},
r2(d){var w,v,u,t=this
if(d>=0){w=t.d
w===$&&C.c()
w=d>=w.length}else w=!0
if(w)return!0
w=t.d
w===$&&C.c()
v=w[d]
w=v.a
u=t.at.h(0,w)
if(u==null||!A.h5C(v.b,u.a)||u.b.c<2)return!1
return t.apD(w).a==="ok"},
gbkX(){var w,v,u,t,s,r,q,p,o,n=this.d
n===$&&C.c()
w=n.length
v=this.at
u=0
for(;u<n.length;n.length===w||(0,C.L)(n),++u){t=n[u]
s=t.a
r=v.h(0,s)
if(r!=null){q=t.b
p=r.a
o=!0
if(q!==p)if(!(D.d.t(B.lj,q)&&D.d.t(B.lj,p)))if(!(D.d.t(B.jG,q)&&D.d.t(B.jG,p)))if(q==="light"||q==="fan")q=p==="light"||p==="fan"
else q=!1
else q=o
else q=o
else q=o
q=!q||r.b.c<2}else q=!0
if(q)return!1
if(A.La(A.t7(v.h(0,s).a),v.h(0,s).b).a!=="ok")return!1}return!0},
gaFx(){var w,v,u,t,s,r,q,p,o,n=this.d
n===$&&C.c()
w=n.length
v=this.at
u=0
for(;u<n.length;n.length===w||(0,C.L)(n),++u){t=n[u]
s=t.a
r=v.h(0,s)
if(r!=null){q=t.b
p=r.a
o=!0
if(q!==p)if(!(D.d.t(B.lj,q)&&D.d.t(B.lj,p)))if(!(D.d.t(B.jG,q)&&D.d.t(B.jG,p)))if(q==="light"||q==="fan")q=p==="light"||p==="fan"
else q=!1
else q=o
else q=o
else q=o
q=!q||r.b.c<2}else q=!0
if(q)return!1
if(A.La(A.t7(v.h(0,s).a),v.h(0,s).b).a!=="ok")return!1
s=t.b
if(D.d.t(B.lj,s)){if(!r.c)return!1}else if(!D.d.t(B.jG,s)&&!r.c)return!1}return!0}}
A.hM.prototype={}
A.Ok.prototype={
R(){var w,v=new A.xj(-0.12,0.14,130,B.ab3,$.ax())
v.f=300
v.ch=0.7
v.at=0.05
w=new C.yf()
$.yZ()
w.h8(0)
return new A.aFn(v,w,C.U(x.S,x.i))}}
A.aFn.prototype={
gCY(d){var w=this.e
if(w===$){this.a.toString
w=D.o.F(Date.now(),1e5)
this.e=w}return w},
Z(){var w,v,u=this
u.a2()
w=u.a.f
if(w==null)w=A.csY(null,null,!0,u.gCY(0),!0)
u.d=w
v=u.a
if(v.d)w.dx=!0
if(v.f!=null&&w.gt7())u.y=2
if(u.a.r){u.d.amo()
u.y=2}u.r=A.wX(u.d,new A.rP(u.z,u.as,!1))
w=u.f
w.ay=0
w.ch=1.1},
q(){var w=this.db
if(w!=null)w.a4(0)
this.a1()},
ol(d,e){var w,v,u,t=this,s=t.db
if(s!=null)s.a4(0)
t.m(new A.ew1(t,d,e))
s=t.c
if(s!=null){w=x.w
s=C.aG(s,null,w).w
v=t.c
v.toString
u=s.a.a>C.aG(v,null,w).w.a.b}else u=!1
t.db=C.cG(C.dy(0,0,0,0,0,u?6:10),new A.ew2(t))},
aeC(d){return this.ol(d,!1)},
ib(d){var w,v,u,t,s,r,q,p,o=this,n=d.a
if(n)A.uk()
else A.fQ(180,220,0.25,"square")
w=d.d
if(w==="shock"){C.fN()
o.m(new A.ev7(o))
C.bP(D.m5,new A.ev8(o),x.P)}v=w==="burn"
if(v||w==="trip"||w==="arc"){u=o.d
u===$&&C.c()
u=u.db
u=new C.hF(u,u.r,u.e)
t=o.x
s=o.w
while(u.C()){r=u.d
q=s.gig()
p=o.d.db.h(0,r)==="fire"?7:4.5
t.n(0,r,q/1000+p)}C.fN()
w=w==="arc"
u=w?95:150
t=w?500:300
A.fQ(u,t,0.5,w?"saw":"noise")
if(v){o.m(new A.ev9(o))
C.bP(D.eR,new A.eva(o),x.P)}}w=o.d
w===$&&C.c()
o.r=A.wX(w,new A.rP(o.z,o.as,!1))
n=n&&!d.c
o.ol(d.b,n)
if(o.d.w&&o.c!=null)$.aV.x1$.push(new A.evb(o))
if(o.d.gaFx()&&!o.cy){o.cy=!0
$.aV.x1$.push(new A.evc(o))}},
b58(){var w=this.CW,v=w?B.h1c:B.ab3,u=w?205:130,t=w?3.141592653589793:-0.12
w=w?0.4:0.14
this.f.im(u,w,v,t)},
c8U(d,e){var w,v,u,t,s
if(this.as>=0)return
w=this.f
v=w.d_h(d,e)
if(v==null||Math.abs(v.a)>78||Math.abs(v.b)>52)v=w.bfC(d,e,-47)
if(v==null)return
u=D.k.E(v.a,-70,70)
t=D.k.E(v.b,-46,48)
s=D.k.E(v.c,-6,100)
w.zK(Math.max(34,w.c*0.45),new A.q(u,t,s))
A.fQ(560,50,0.25,"tri")},
aUw(){var w,v,u=this
u.CW=!1
w=u.f
w.at=0.05
w.ch=0.7
w.rb(!1)
w.ay=0
u.m(new A.evm(u))
v=u.d
v===$&&C.c()
u.r=A.wX(v,new A.rP(u.z,u.as,!1))
w.im(130,0.14,B.ab3,-0.12)},
c3s(){var w,v,u=this
u.CW=!1
w=u.f
w.rb(!1)
w.at=-0.95
w.ay=0
w.ch=1
u.m(new A.evo(u))
v=u.d
v===$&&C.c()
u.r=A.wX(v,new A.rP(u.z,u.as,!1))
w.im(82,-0.55,B.h0I,-0.12)},
bEy(){var w,v,u,t,s=this,r=s.d
r===$&&C.c()
r=r.CW
w=C.a7(r).k("cD<1,2>")
v=w.k("Z<M.E>")
u=C.C(new C.Z(new C.cD(r,w),new A.evd(),v),v.k("M.E"))
if(u.length===0){s.aeC("Plug a TV into an outlet first. Then you can look behind it.")
return}t=A.j4(D.d.gI(u).a).d.a
s.CW=!1
r=s.f
r.rb(!1)
r.at=0.02
r.ay=0
r.ch=1.7
s.m(new A.eve(s))
s.r=A.wX(s.d,new A.rP(s.z,s.as,!1))
w=t<0?-1.4:1.4
r.im(60,0.12,new A.q(t,-30,14),w)
s.ol("This is the back of the TV. Tap the TV or its plug to pull the plug.",!0)},
bEw(){var w,v,u=this
u.CW=!0
w=u.f
w.rb(!0)
u.m(new A.evf(u))
v=u.d
v===$&&C.c()
u.r=A.wX(v,new A.rP(u.z,u.as,!1))
w.im(190,0.3,B.h1d,3.141592653589793)},
a_9(d,e){var w,v,u,t,s=this,r=A.j4(e),q=s.f
q.rb(!1)
q.ay=0
s.m(new A.evF(s,e))
w=s.d
w===$&&C.c()
s.r=A.wX(w,new A.rP(s.z,s.as,!1))
v=A.aia(r,B.h_8)
w=r.c
u=w?20:15
t=w?1.2:0.3
q.im(u,w?-0.12:0.26,v,t)},
PX(){var w,v=this
v.m(new A.evn(v))
w=v.d
w===$&&C.c()
v.r=A.wX(w,new A.rP(v.z,v.as,!1))
v.b58()},
c8X(d){var w,v,u,t,s,r,q=this
if(d===0){if(q.as<0)q.m(new A.evY(q))
return}w=q.as
if(w>=0)v=!(d>=5000&&d<5700)
else v=!1
if(v)return
if(d>=5000&&d<5700){v=d-5000
u=D.o.ao(v,100)
if(w!==u){if(q.z==="tester")q.aCr(u)
else{q.m(new A.evZ(q))
q.a_9(0,u)}return}q.azp(u,D.o.F(v,100))
return}if(d>=1000&&d<1010)if(q.z==="drill"){w=q.d
w===$&&C.c()
q.ib(w.cOz(d-1000))
return}if(d>=2000&&d<2007){q.azs(d-2000)
return}if(d>=3000&&d<3007){q.b2S(d-3000)
return}if(d>=6000&&d<6005){if(q.z==="sheet"){w=q.d
w===$&&C.c()
q.ib(w.cRn(B.a5p[d-6000]))}return}if(d>=6100&&d<6103){t=B.oC[d-6100]
if(q.z==="paint"){w=q.d
w===$&&C.c()
q.ib(w.cWt(t))
return}}if(d>=6200&&d<6202){s=d-6200
switch(q.z){case"tape":w=q.d
w===$&&C.c()
q.ib(w.cZh(s))
return
case"mud":w=q.d
w===$&&C.c()
q.ib(w.cU9(s))
return
case"sand":w=q.d
w===$&&C.c()
q.ib(w.bos(s))
return}}if(d>=7000&&d<7100){if(q.z==="screw"){w=q.d
w===$&&C.c()
v=d-7000
q.ib(w.boG(D.o.ao(v,10),D.o.F(v,10)))}return}if(d>=7500&&d<7600){if(q.z==="screw"){w=q.d
w===$&&C.c()
v=d-7500
q.ib(w.aLo(D.o.ao(v,10),D.o.F(v,10),!0))}return}if(d===8000){w=q.d
w===$&&C.c()
q.ib(w.aJG())
return}if(d>=8200&&d<8207){w=q.d
w===$&&C.c()
q.ib(w.bkx(d-8200))
return}if(d>=8100&&d<8107){w=q.d
w===$&&C.c()
w=w.CW.h(0,d-8100)
q.ol(A.aPX(w==null?"":w)+" is plugged in. To pull the plug, go behind it (the Behind the TV button) and tap the plug on the wall.",!0)
return}if(q.z==="look"){w=q.r
w===$&&C.c()
r=w.b.h(0,d)
if(r!=null){q.m(new A.ew_(q,d))
q.ol(r.a+": "+r.b,!0)}}},
azs(d){var w,v,u,t,s=this,r=s.d
r===$&&C.c()
if(r.at.aj(0,d)){r=s.z
r=r!=="tester"&&r!=="look"&&!D.d.t(B.zs,r)}else r=!1
if(r){s.m(new A.evV(s))
s.a_9(0,d)
return}r=s.z
switch(r){case"wall":case"ceiling":case"fanbox":w=s.d
s.ib(w.cU6(d,r==="fanbox"?"fan":r))
return
case"cable":s.ib(s.d.cXj(d))
return
case"knife":s.ib(s.d.cNt(d))
return
case"outlet":case"gfci":case"switch":case"split":case"v240four":case"v240three":case"v240only":case"isolated":case"dryer4":case"dryer3":case"range4":case"range3":case"washer":case"switch2p":case"switch3":case"switch4":case"switchsmart":case"switchcombo":case"light":case"fan":v=s.d.bgU(d,r)
s.ib(v)
if(v.a){r=s.d.at.h(0,d).b
w=s.d
r.f=!w.b&&!w.dx
s.z=""
s.a_9(0,d)}return
case"tester":s.aCr(d)
return}if(s.d.at.aj(0,d)){s.a_9(0,d)
return}if(s.d.gt7()&&s.d.x.aj(0,d)&&!s.d.at.aj(0,d)){u=A.j4(d)
s.m(new A.evW(s,d))
if(s.Q===d){if(u.c)r="a light or a fan"
else r=u.e==="switch"?"a switch":"an outlet"
r=u.b+": only what fits this box is in the tray now ("+r+"). Pick one."}else r="Box let go: the tray shows everything again."
s.ol(r,!0)
return}r=s.r
r===$&&C.c()
t=r.b.h(0,2000+d)
if(t!=null){s.m(new A.evX(s,d))
s.ol(t.a+": "+t.b,!0)}},
aCr(d){var w,v=this.d
v===$&&C.c()
w=v.ax&&!v.ay&&v.x.aj(0,d)&&this.d.z.t(0,d)
v=w?"The tester glows: this box is LIVE (120 volts). Turn the breaker OFF before you touch any wire.":"The tester stays dark: no power here. It is safe to work. (Test again after you turn the breaker off, every time.)"
this.ol(v,!w)
A.fQ(w?1400:500,120,0.25,"tri")},
b2S(d){var w,v=this,u=v.d
u===$&&C.c()
w=u.at.h(0,d)
if(w==null)return
if(D.d.t(B.zs,v.z)){v.ib(v.d.biY(d,v.z))
return}u=v.z
if(u==="tester"){v.aCr(d)
return}if(u==="flip"){if(D.d.t(B.jG,w.a)&&w.b.c>=2)v.ib(v.d.aGh(d))
else v.aeC("Only a finished switch can be flipped.")
return}v.m(new A.evU(v))
v.a_9(0,d)},
azp(d,e){var w,v,u,t,s,r,q,p,o=this,n=o.d
n===$&&C.c()
w=n.at.h(0,d)
if(w==null)return
if(B.aRl.t(0,e))return
n=w.a
v=A.t7(n)
u=v.f
t=C.T(u).k("Z<1>")
s=C.C(new C.Z(u,new A.evM(e),t),t.k("M.E"))
r=A.hAn(n,e)
n=r!=null
if(n){u=w.b
u=u.b.it(0,r)&&u.c===0}else u=!1
if(u){o.ib(o.d.bku(d,r))
return}u=!1
if(s.length!==0){t=w.b
if(t.c===0){t=t.b
if(t.h(0,e)!=null)u=o.ax.length===0||t.h(0,e)===o.ax}}if(u){n=o.d
u=w.b.b.h(0,e)
u.toString
o.ib(n.bku(d,u))
o.m(new A.evN(o))
return}if(n){n=w.b
n=n.c===0&&!n.b.it(0,r)&&D.d.b3(v.e,new A.evO(r))}else n=!1
if(n){o.m(new A.evP(o,r,d,e))
if(o.ax.length!==0)o.ol(D.d.fZ(v.e,new A.evQ(r)).b+": picked up. Now tap where it joins.",!0)
return}if(s.length!==0&&w.b.c===0){n=o.ax
if(n.length===0){o.aeC("Pick a wire below first, then tap "+D.d.gI(s).b+".")
o.m(new A.evR(o,d,e))
return}q=o.d.bff(d,n,e)
o.ib(q)
if(q.a)o.m(new A.evS(o))
return}n=o.r
n===$&&C.c()
p=n.b.h(0,5000+d*100+e)
if(p!=null){o.m(new A.evT(o,d,e))
o.ol(p.a+": "+p.b,!0)}},
c8Y(){var w,v,u,t,s,r,q=this,p=C.a([],x.ek)
for(w=0;w<7;++w){v=B.uM[w]
u=q.d
u===$&&C.c()
t=v.a
s=u.at.aj(0,t)
r=q.z
A:{if("wall"===r){u=!v.c&&!q.d.x.aj(0,t)
break A}if("ceiling"===r||"fanbox"===r){u=v.c&&!q.d.x.aj(0,t)
break A}if("cable"===r){u=q.d.x.aj(0,t)&&!q.d.z.t(0,t)
break A}if("knife"===r){u=!v.c&&q.d.x.aj(0,t)
break A}u=D.d.t(B.lj,r)||D.d.t(B.jG,q.z)
if(u){u=!v.c&&q.d.x.aj(0,t)&&!s
break A}if("light"===r||"fan"===r){u=v.c&&q.d.x.aj(0,t)&&!s
break A}u=D.d.t(B.zs,q.z)
if(u){u=s&&D.d.t(B.lj,q.d.at.h(0,t).a)
break A}if("tester"===r){u=q.d.x.aj(0,t)
break A}u=!1
break A}if(u)p.push(new C.z(t,v.b))}return p},
cz0(){var w,v,u,t,s,r,q,p=null,o=this.c8Y()
if(o.length===0)return D.bJ
w=C.a([],x.p)
for(v=o.length,u=0;u<o.length;o.length===v||(0,C.L)(o),++u){t={}
s=o[u]
t.a=null
t.a=s.a
r=new C.aP(12,12)
q=new C.ay(D.b_,1,D.r,-1)
w.push(C.aA(p,C.p(p,new C.y("\ud83d\udccd "+s.b,p,D.oN,p,p,p,p,p,p,p,p,p),D.f,p,p,new C.o(D.eP.j(0.35),p,new C.bH(q,q,q,q),new C.bh(r,r,r,r),p,p,D.n),p,p,p,p,B.a_f,p,p,p),D.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new A.ew5(t,this),p,p,p,p,p,p,!1,D.a3))}return new C.D(D.i4,C.bY(D.bG,w,D.br,p,6,6),p)},
bR1(){var w=null,v=this.c
v.toString
C.ck(w,w,!1,w,new A.evl(this),v,w,!0,!0,x.H)},
c8S(){var w,v,u,t=this,s=null
if(t.a.c){w=t.d
w===$&&C.c()
v=w.d
v===$&&C.c()
v=v.length
u=A.hfp(w.f,w.r,v)}else u=0
if(u>0)A.ak0(u)
w=t.c
w.toString
C.ck(s,s,!0,s,new A.evi(t,u),w,s,!0,!0,x.H)},
axW(d){this.m(new A.evp(this,d))
this.aUw()},
b_u(){return this.axW(!1)},
cEa(d){var w,v,u=new A.ew6(A.j4(d)),t=C.a([],x.b)
for(w=0;w<30;++w){v=B.aA_[w]
if(u.$1(v.a))t.push(v)}return t},
SL(d,e,f,g){var w=null,v=f==null,u=v?D.dr:g.j(0.9),t=C.m(14),s=C.X(d,v?D.bU:D.w,w,w,w,17)
return new C.D(G.og,C.aA(w,C.p(w,C.B(C.a([s,D.eg,C.d(e,w,1,w,w,w,w,C.l(w,w,v?D.bU:D.w,w,w,w,w,w,w,w,w,10.5,w,w,D.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),D.m,w,D.e,D.P,0,w,w),D.f,w,w,new C.o(u,w,w,t,w,w,D.n),w,44,w,w,D.kk,w,w,w),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,!1,D.a3),w)},
bbk(d,e,f){return this.SL(d,e,f,D.aA)},
cH7(d,e){var w,v,u,t,s,r,q,p=this,o=null,n=x.p,m=C.a([p.SL(D.km,"Back to the room",p.gb_t(),D.ac)],n),l=d.b
if(l.c===0){w=A.aih(e,l)?"Push into the box":"Fasten every wire"
m.push(p.bbk(B.a2x,w,A.aih(e,l)?new A.ew8(p):o))}if(l.c===1)D.d.v(m,C.a([p.SL(D.pi,"Pull it out",new A.ew9(p),D.ac),p.bbk(W.us,"Cover on",new A.ewa(p))],n))
n=l.c>=2
if(n&&l.x)m.push(p.SL(B.OE,"Take out the burnt one",new A.ewb(p),D.c0))
else if(n)m.push(p.SL(B.OE,"Pull it out of the wall",new A.ewc(p),D.ac))
if(!l.x)m.push(p.SL(D.jF,"Take it out, put in another",new A.ewd(p,d),D.aJ))
if(l.c===0)for(n=D.d.gaf(e.e),l=new C.f2(n,new A.ewe(d));l.C();){w=n.gS(0)
v=w.c
u=new C.aP(14,14)
t=p.ax===w.a
s=t?D.b_:D.aX
r=new C.ay(s,t?3:1,D.r,-1)
s=w.b
q=w.d
m.push(new C.D(G.og,C.aA(o,C.p(o,new C.cf(D.A,o,o,new C.y(s,o,new C.F(!0,q,o,o,o,o,12,D.u,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),o,o,o,o,o,o,o,o,o),o),D.f,o,o,new C.o(v,o,new C.bH(r,r,r,r),new C.bh(u,u,u,u),o,o,D.n),o,44,o,o,D.eY,o,o,o),D.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new A.ewf(p,w),o,o,o,o,o,o,!1,D.a3),o))}return m},
cug(d,e){var w,v,u,t,s,r,q=null,p=C.a([],x.p)
for(w=D.d.gaf(e.f),v=new C.f2(w,new A.ew3(d));v.C();){u=w.gS(0)
t=D.eP.j(0.35)
s=new C.aP(10,10)
r=new C.ay(D.b_,1,D.r,-1)
p.push(new C.D(D.fv,C.aA(q,C.p(q,new C.cf(D.A,q,q,new C.y("\u279c "+u.b,q,B.fsa,q,q,q,q,q,q,q,q,q),q),D.f,q,q,new C.o(t,q,new C.bH(r,r,r,r),new C.bh(s,s,s,s),q,q,D.n),q,32,q,q,B.am6,q,q,q),D.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new A.ew4(this,u),q,q,q,q,q,q,!1,D.a3),q))}return p},
c8V(){var w,v,u,t,s,r,q,p,o,n=this,m=n.d
m===$&&C.c()
if(m.w)return"The job is over."
switch(n.y){case 0:m=m.d
m===$&&C.c()
w=C.T(m).k("Z<1>")
v=C.C(new C.Z(m,new A.evq(n),w),w.k("M.E"))
if(v.length!==0){u=D.d.gI(v)
t=A.j4(u.a)
m=A.a2l(u.b)
if(t.c)w=t.e==="fan"?"fan box":"ceiling box"
else w="wall box"
return"Mount a box at "+t.b+" ("+m.toLowerCase()+" goes here): pick a "+w+", then tap the glowing spot."}m=n.d.d
m===$&&C.c()
w=C.T(m).k("Z<1>")
s=C.C(new C.Z(m,new A.evr(n),w),w.k("M.E"))
if(s.length!==0){t=D.d.gI(s).a
m=n.d.aM9(t)
r=new C.Z(m,new A.evs(n),C.T(m).k("Z<1>")).gL(0)
return r>0?"The cable comes from the panel on the right. Pick the drill and tap each stud on the way to "+A.j4(t).b+" ("+r+" left).":"Pick the cable roll and tap "+A.j4(t).b+"."}return"Rough-in done! Open 2 Drywall."
case 1:if(!m.gap3())return"Finish the rough-in first (tab 1). Drywall hides the wires."
if(!n.d.gaDL())return"Pick a drywall sheet and tap a stud edge to hang it. Three sheets cover the wall."
if(!n.d.gaDK())return"Pick the drywall saw and tap each box to cut its opening."
if(!D.d.d_(B.oC,n.d.gaqs()))return"Pick the screw gun and put a screw in every glowing spot on the studs."
if(D.d.b3(n.d.as,new A.evv()))return"Pick the tape and tap each seam between two sheets."
if(D.d.b3(n.d.as,new A.evw()))return D.d.b3(n.d.as,new A.evx())?'The mud is wet. Press "Let it dry", then the next coat.':"Pick the mud and tap each seam. It needs three coats, with drying in between."
if(D.d.b3(n.d.as,new A.evy()))return D.d.b3(n.d.as,new A.evz())?'Press "Let it dry", then sand.':"Pick the sander and tap each seam."
if(!n.d.gt7())return"Pick the roller and paint each sheet."
return"Drywall done! Open 3 Devices."
default:if(!m.gt7())return"Finish the drywall first (tab 2)."
m=n.d.d
m===$&&C.c()
w=C.T(m).k("Z<1>")
q=C.C(new C.Z(m,new A.evA(n),w),w.k("M.E"))
if(q.length!==0){u=D.d.gI(q)
return"The breaker being on is not the end: the job is done only when every device is in and wired. Tap the box at "+A.j4(u.a).b+" (small red frame, blinking red dot): the tray then shows only what fits it. Put in the "+A.a2l(u.b).toLowerCase()+". ("+C.w(new A.evD().$1(new C.N(q,new A.evB(),C.T(q).k("N<1,G>"))))+" still need a device.)"}m=n.d.d
m===$&&C.c()
w=C.T(m).k("Z<1>")
p=C.C(new C.Z(m,new A.evC(n),w),w.k("M.E"))
if(p.length!==0)return"Tap "+A.j4(D.d.gI(p).a).b+" to work on it: breaker OFF, wires, push in, cover on."
m=n.d
if(!m.ax)return"Turn the breaker ON (tap the panel or the breaker button) and test."
m=m.d
m===$&&C.c()
w=C.T(m).k("Z<1>")
o=C.C(new C.Z(m,new A.evt(n),w),w.k("M.E"))
if(o.length!==0)return"Pick the TV or the lamp and plug it into "+A.j4(D.d.gI(o).a).b+" to test it."
m=n.d.d
m===$&&C.c()
return"Flip the wall switch to test the "+(D.d.b3(m,new A.evu())?"fan":"light")+"."}},
B(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this,a3=null,a4=a2.Q,a5=a4>=0&&a2.y===2?a2.cEa(a4):B.d4N[a2.y]
a4=x.w
w=C.aG(a6,a3,a4).w.a.a>C.aG(a6,a3,a4).w.a.b
a4=a2.as
if(a4>=0){v=a2.d
v===$&&C.c()
u=v.at.h(0,a4)}else u=a3
a4=u==null
t=a4?a3:A.t7(u.a)
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
for(k=0;k<3;++k)l.push(new C.D(D.Nm,new C.y(k<a2.d.e?"\u2764\ufe0f":"\ud83d\udda4",a3,D.As,a3,a3,a3,a3,a3,a3,a3,a3,a3),a3))
l.push(D.bm)
j=a2.d
if(j.ay)j=D.kh
else{j=j.ax
j=j?D.ek:D.dY}j=j.j(0.95)
i=C.m(16)
h=a2.d
g=h.ay
if(g)f=D.cL
else{f=h.ax
f=f?D.c0:D.be}f=C.J(f,D.r,1.4)
if(g)h="TRIPPED: tap to reset"
else{h=h.ax
h=h?"Breaker ON":"Breaker OFF"}l.push(C.aA(a3,C.p(a3,C.d(h,a3,a3,a3,a3,a3,a3,B.foQ,a3,a3,a3),D.f,a3,a3,new C.o(j,a3,f,i,a3,a3,D.n),a3,a3,a3,a3,D.rD,a3,a3,a3),D.y,!1,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,new A.ewr(a2),a3,a3,a3,a3,a3,a3,!1,D.a3))
l=C.a([C.B(l,D.m,a3,D.e,D.P,0,a3,a3)],m)
j=a2.CW
i=j?"In front":"Behind the wall"
h=j?H.aoB:H.aoA
j=C.a([A.wY(i,D.bq,h,j,j?a2.gbSz():a2.gbEv()),D.am,A.wY("Look up",D.b_,B.bP8,!1,a2.gc3r()),D.am,A.wY("Behind the TV",D.cL,A_.a2p,!1,a2.gbEx()),D.am],m)
if(!a4){i=u.b
D.d.v(j,C.a([A.wY("Labels",D.aJ,O.Cr,i.f,new A.ews(a2,u)),D.am,A.wY("Hints",D.aA,D.qx,i.e,new A.ewt(a2,u)),D.Q],m))}r=A.Ya(!1,a3,a2.f,new A.ewE(a2),a3,o,q,n,a3,a3,p,a3,a2.gc8T(),new A.ewG(a2),a2.gc8W(),r,!1,a3,l,j)
q=C.a([],m)
if(a4){a4=C.a([],m)
if(!w){p=C.a([],m)
for(k=0;k<3;++k){o=k<2?6:0
n=a2.y===k?D.aA.j(0.2):D.dr
l=new C.aP(12,12)
e=new C.ay(a2.y===k?D.aA:D.bz,1,D.r,-1)
if(k===0)j=a2.d.gap3()
else{j=a2.d
j=k===1?j.gt7():j.gaFx()}j=j?"\u2705 ":""
i=B.aBG[k]
h=a2.y===k?D.aA:D.ac
p.push(new C.by(1,D.ba,C.aA(a3,C.p(a3,new C.cf(D.A,a3,a3,new C.y(j+i,a3,new C.F(!0,h,a3,a3,a3,a3,12,D.u,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3),a3,a3,a3,a3,a3,a3,a3,a3,a3),a3),D.f,a3,a3,new C.o(n,a3,new C.bH(e,e,e,e),new C.bh(l,l,l,l),a3,a3,D.n),a3,a3,a3,new C.P(0,0,o,0),A7.Np,a3,a3,a3),D.y,!1,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,new A.ewH(a2,k),a3,a3,a3,a3,a3,a3,!1,D.a3),a3))}p=C.a([C.B(p,D.m,a3,D.e,D.i,0,a3,a3),D.am],m)
if(!a2.d.b){o=D.aJ.j(0.1)
n=C.m(10)
l=C.J(D.aJ.j(0.4),D.r,1)
p.push(C.p(a3,C.d("\ud83d\udc49 "+a2.c8V(),a3,2,D.a1,a3,a3,a3,B.fqq,a3,a3,a3),D.f,a3,a3,new C.o(o,a3,l,n,a3,a3,D.n),a3,a3,a3,a3,D.ck,a3,a3,1/0))}else p.push(B.fRb)
p.push(D.am)
D.d.v(a4,p)
w=!1}p=C.a([],m)
if(w){o=D.aA.j(0.2)
n=C.m(14)
l=C.J(D.aA,D.r,1)
j=a2.y
if(j===0)j=a2.d.gap3()
else{i=a2.d
j=j===1?i.gt7():i.gaFx()}j=j?"\u2705 ":""
p.push(new C.D(G.og,C.aA(a3,C.p(a3,C.as(C.d(j+B.aBG[a2.y],a3,a3,a3,a3,a3,a3,B.fva,a3,a3,a3),a3,a3,a3),D.f,a3,a3,new C.o(o,a3,l,n,a3,a3,D.n),a3,a3,a3,a3,D.eY,a3,a3,a3),D.y,!1,B.hi8,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,new A.ewI(a2),a3,a3,a3,a3,a3,a3,!1,D.a3),a3))}if(a2.y<2&&!a2.d.gt7())p.push(new C.D(G.og,C.aA(a3,C.p(a3,B.baz,D.f,a3,a3,new C.o(D.dF,a3,a3,C.m(14),a3,a3,D.n),a3,a3,a3,a3,D.eY,a3,a3,a3),D.y,!1,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,new A.ewJ(a2),a3,a3,a3,a3,a3,a3,!1,D.a3),a3))
if(a2.Q>=0&&a2.y===2){o=D.b_.j(0.18)
n=C.m(14)
l=C.J(D.b_,D.r,1)
p.push(new C.D(G.og,C.aA(a3,C.p(a3,C.as(C.d("\u2715 "+A.j4(a2.Q).b,a3,a3,a3,a3,a3,a3,B.fit,a3,a3,a3),a3,a3,a3),D.f,a3,a3,new C.o(o,a3,l,n,a3,a3,D.n),a3,a3,a3,a3,D.eY,a3,a3,a3),D.y,!1,B.hio,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,new A.ewK(a2),a3,a3,a3,a3,a3,a3,!1,D.a3),a3))}for(o=a5.length,d=0;d<a5.length;a5.length===o||(0,C.L)(a5),++d){a0=a5[d]
n=a0.a
l=a2.z===n?D.aA.j(0.25):D.c.j(0.07)
j=new C.aP(14,14)
n=a2.z===n
i=n?D.aA:D.aX
e=new C.ay(i,n?2:1,D.r,-1)
i=n?D.aA:D.ac
i=C.X(a0.c,i,a3,a3,a3,19)
n=n?D.aA:D.c
p.push(new C.D(G.og,C.aA(a3,C.p(a3,new C.ca(D.aM,D.e,D.i,D.m,a3,D.p,a3,0,C.a([i,D.bm,new C.y(a0.b,a3,new C.F(!0,n,a3,a3,a3,a3,12.5,D.H,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3),a3,a3,a3,a3,a3,a3,a3,a3,a3)],m),a3),D.f,a3,a3,new C.o(l,a3,new C.bH(e,e,e,e),new C.bh(j,j,j,j),a3,a3,D.n),a3,a3,a3,a3,D.eY,a3,a3,a3),D.y,!1,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,new A.ewL(a2,a0),a3,a3,a3,a3,a3,a3,!1,D.a3),a3))}if(a2.y===1)p.push(new C.D(G.og,C.aA(a3,C.p(a3,B.bar,D.f,a3,a3,new C.o(D.dY,a3,a3,C.m(14),a3,a3,D.n),a3,a3,a3,a3,D.eY,a3,a3,a3),D.y,!1,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,new A.ewM(a2),a3,a3,a3,a3,a3,a3,!1,D.a3),a3))
a4.push(new C.a4(a3,52,C.cl(p,a3,B.hi9,a3,a3,a3,D.aM,!1),a3))
if(a2.z.length!==0)a4.push(a2.cz0())
D.d.v(q,a4)}else if(w){t.toString
a4=C.a([new C.a4(a3,44,C.cl(a2.cH7(u,t),a3,a3,a3,a3,a3,D.aM,!1),B.hiJ)],m)
if(u.b.c===0&&a2.ax.length!==0)D.d.v(a4,C.a([D.am,new C.a4(a3,32,C.cl(a2.cug(u,t),a3,a3,a3,a3,a3,D.aM,!1),B.hib)],m))
D.d.v(q,a4)}else{a4=C.a([],m)
p=u.b
if(p.c===0)for(o=D.d.gaf(t.e),n=new C.f2(o,new A.ewu(u)),l=p.b;n.C();){j=o.gS(0)
i=j.c
h=new C.aP(14,14)
g=a2.ax
f=j.a
g=g===f
a1=g?D.b_:D.aX
e=new C.ay(a1,g?3:1,D.r,-1)
a1=C.a([],m)
if(l.it(0,f))a1.push(new C.D(D.Nn,C.X(D.e6,j.d,a3,a3,a3,17),a3))
g=j.b
f=j.d
a1.push(new C.y(g,a3,new C.F(!0,f,a3,a3,a3,a3,12.5,D.u,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3),a3,a3,a3,a3,a3,a3,a3,a3,a3))
a4.push(C.aA(a3,C.p(a3,new C.ca(D.aM,D.e,D.P,D.m,a3,D.p,a3,0,a1,a3),D.f,a3,a3,new C.o(i,a3,new C.bH(e,e,e,e),new C.bh(h,h,h,h),a3,a3,D.n),a3,a3,a3,a3,D.yo,a3,a3,a3),D.y,!1,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,new A.ewv(a2,u,j),a3,a3,a3,a3,a3,a3,!1,D.a3))}a4=C.a([C.bY(D.bG,a4,D.br,a3,6,8)],m)
if(p.c===0&&a2.ax.length!==0){o=C.a([],m)
for(n=D.d.gaf(t.f),l=new C.f2(n,new A.eww(u));l.C();){j=n.gS(0)
i=D.eP.j(0.35)
h=new C.aP(12,12)
e=new C.ay(D.b_,1,D.r,-1)
o.push(C.aA(a3,C.p(a3,new C.y("\u279c "+j.b,a3,D.oN,a3,a3,a3,a3,a3,a3,a3,a3,a3),D.f,a3,a3,new C.o(i,a3,new C.bH(e,e,e,e),new C.bh(h,h,h,h),a3,a3,D.n),a3,a3,a3,a3,B.a_f,a3,a3,a3),D.y,!1,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,new A.ewx(a2,j),a3,a3,a3,a3,a3,a3,!1,D.a3))}a4.push(new C.D(D.jz,C.bY(D.bG,o,D.br,a3,6,6),a3))}a4.push(D.Q)
o=C.a([A.uj("Back to the room",D.km,a2.gb_t(),D.ac),D.ad],m)
if(p.c===0){t.toString
n=A.aih(t,p)?"Push it into the box":"Fasten every wire"
o.push(A.uj(n,B.a2x,A.aih(t,p)?new A.ewy(a2):a3,D.aA))}if(p.c===1)D.d.v(o,C.a([A.uj("Pull it out",D.pi,new A.ewz(a2),D.ac),D.ad,A.uj("Cover on",W.us,new A.ewA(a2),D.aA)],m))
n=p.c>=2
if(n&&p.x)o.push(A.uj("Take out the burnt one",B.OE,new A.ewB(a2),D.c0))
else if(n)o.push(A.uj("Pull it out of the wall",B.OE,new A.ewC(a2),D.ac))
a4.push(C.B(o,D.m,a3,D.e,D.i,0,a3,a3))
if(!p.x)D.d.v(a4,C.a([D.Q,C.B(C.a([A.uj("Take it out and put in a different "+(D.d.t(B.jG,u.a)?"switch":"one"),D.jF,new A.ewD(a2,u),D.aJ)],m),D.m,a3,D.e,D.i,0,a3,a3)],m))
D.d.v(q,a4)}a4=C.a([A.U2(D.aA,new A.ewF(a2,a6),C.x(q,D.m,a3,D.e,D.P,0,D.p),r,"Phase "+(v+1)+"/3",s+" job",a3)],m)
if(a2.cx)a4.push(C.bS(0,C.dZ(C.p(a3,a3,D.f,B.aiH,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3),!0,a3),0,0,0))
return new C.an(D.a_,a3,D.ab,D.t,a4,a3)},
csB(d){var w=this.d
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
break A}w=D.d.t(B.zs,this.z)
if(w){w="Tap a finished outlet to plug it in."
break A}w="Tap a glowing box to put it there."
break A}this.ol(w,!0)},
chH(d){return C.bV(E.mC,null,new A.evL(this,d),d,!0,!0,!0,D.k5,!1,!1,x.H)}}
A.rP.prototype={}
A.rn.prototype={
a6(){return"FaultKind."+this.b}}
A.uF.prototype={}
A.Mw.prototype={}
A.cwn.prototype={
bAv(d,e,f){var w,v,u,t,s,r,q,p=this,o=new C.e6()
o.cX(p.a)
w=C.C(B.dfx,x.eP)
D.d.e_(w,o)
v=C.aX(x.S)
u=C.a([],x.gw)
for(t=w.length,s=0;s<w.length;w.length===t||(0,C.L)(w),++s){r=w[s]
q=B.wL.h(0,r).e
if(v.t(0,q))continue
v.M(0,q)
u.push(new A.Mw(r,o.ap(3)))
if(u.length>=d)break}p.c!==$&&C.aQ()
p.c=u
p.axX()},
q1(d,e){var w=this.c
w===$&&C.c()
return D.d.b3(w,new A.cws(e))},
axX(){var w,v,u,t,s=this,r=s.d,q=r.d
q.aa(0)
if(s.q1(0,B.a0D))q.M(0,72)
if(s.q1(0,B.a0E))q.M(0,75)
q=s.q1(0,B.O1)
r.b=q
r.c=!q
r.w=s.q1(0,B.O2)
r.x=s.q1(0,B.a0I)
r.y=s.q1(0,B.a0J)
r.z=s.q1(0,B.a0H)
r.Q=s.q1(0,B.a0K)
r.as=s.q1(0,B.a0L)
r.at=s.q1(0,B.a0G)
q=r.f
q.aa(0)
r=r.r
r.aa(0)
w=s.c
w===$&&C.c()
w=D.d.gaf(w)
v=new C.f2(w,new A.cwo())
while(v.C()){u=w.gS(0)
t=u.c
u=u.b
if(t)r.M(0,u)
else q.M(0,u)}},
gcIb(){var w=this.c
w===$&&C.c()
return D.d.d_(w,new A.cwq())},
gcPK(){var w=this.c
w===$&&C.c()
return new C.Z(w,new A.cwr(),C.T(w).k("Z<1>")).gL(0)},
cPo(d){var w,v,u,t,s,r,q,p=this.c
p===$&&C.c()
w=p.length
v=d===86
u=d===92
t=0
for(;t<p.length;p.length===w||(0,C.L)(p),++t){s=p[t]
r=s.a
q=!0
if(B.wL.h(0,r).e!==d)if(!(r===B.O1&&v))r=r===B.O2&&u
else r=q
else r=q
if(r)return s}return null},
b_v(d){++this.f
return new A.ey(!1,d,!1,"")},
c8Z(){var w,v,u,t,s=this;++s.r;--s.e
for(w=s.d,v=w.d,w=w.e,u=0;u<4;++u){t=B.ay2[u]
if(!v.t(0,t))w.M(0,t)}w=s.e
if(w<=0){s.w=!0
return B.b_A}v=w===1?"life":"lives"
return new A.ey(!1,"ZAP! You touched a live wire and got a shock. All the breakers were knocked off. "+w+" "+v+" left. Turn the breaker OFF first.",!0,"shock")},
d_6(d,e){var w,v,u,t,s=this
if(s.w)return B.b_v
if(D.d.t(B.ay2,e))return s.bF1(d,e)
w=s.cPo(e)
if(d==="inspect"){if(w==null||w.c)return B.b_z
return new A.ey(!0,"You look and test: "+B.wL.h(0,w.a).b,!1,"")}if(w==null||w.c)return new A.ey(!1,s.b?"Nothing needs fixing there.":"There is nothing wrong with this, so the "+C.w(B.Ss.h(0,d))+' is not needed. Use "Look and test" on things to find the problem.',!1,"")
v=B.wL.h(0,w.a)
if(d!==v.c){++s.f
return new A.ey(!1,s.b?"That is not the right tool for this problem.":"The "+C.w(B.Ss.h(0,d))+" does not fix this. "+v.b,!1,"")}u=v.f
if(u!==0){t=s.d
u=!t.d.t(0,u)&&!t.e.t(0,u)}else u=!1
if(u){if(s.b)return s.c8Z()
return s.b_v("STOP! "+v.r+" The wires here are live (120 volts). Tap the breaker in the panel (with your hand) to switch it off.")}w.c=!0
s.axX()
return new A.ey(!0,v.d,!1,"")},
bF1(d,e){var w,v,u,t,s=this
if(d==="inspect"){w=s.d
if(w.d.t(0,e))w="This breaker has tripped: it sits in the middle (orange)."
else w=w.e.t(0,e)?"This breaker is switched OFF.":"This breaker is ON."
return new A.ey(!0,w,!1,"")}if(d!=="hand")return s.b_v(s.b?"Use your hand on a breaker.":"A breaker is switched with your hand, not with a "+C.w(B.Ss.h(0,d))+".")
w=s.d
v=w.d
if(v.t(0,e)){w=s.c
w===$&&C.c()
u=C.T(w).k("Z<1>")
t=C.C(new C.Z(w,new A.cwp(e),u),u.k("M.E"))
if(t.length!==0){D.d.gI(t).c=!0
s.axX()
return new A.ey(!0,B.wL.h(0,D.d.gI(t).a).d,!1,"")}v.W(0,e)
return B.b04}w=w.e
if(w.t(0,e)){w.W(0,e)
return B.b_Z}w.M(0,e)
return B.b_P}}
A.as3.prototype={
R(){var w,v=new A.xj(-0.3,0.48,46,B.VE,$.ax())
v.f=80
w=new C.yf()
$.yZ()
w.h8(0)
return new A.aFr(v,w)}}
A.aFr.prototype={
gJ(){var w=this.d
w===$&&C.c()
return w},
gCY(d){var w=this.e
if(w===$){this.a.toString
w=D.o.F(Date.now(),1e5)
this.e=w}return w},
Z(){var w,v=this
v.a2()
w=v.gCY(0)
v.a.toString
w=A.hnt(!0,w)
v.d=w
v.r=A.agN(w.d)},
q(){var w=this.ax
if(w!=null)w.a4(0)
this.a1()},
c93(d,e){var w=this,v=w.ax
if(v!=null)v.a4(0)
w.m(new A.ey8(w,d,e))
w.ax=C.cG(D.jR,new A.ey9(w))},
b_w(){this.f.im(46,0.48,B.VE,-0.3)
this.m(new A.exY(this))},
c92(d){var w,v,u=this
if(d===0)return
w=u.d
w===$&&C.c()
v=w.d_6(u.x,d)
w=v.a
if(w)A.uk()
else A.fQ(180,220,0.25,"square")
if(v.d==="shock"){C.fN()
u.m(new A.ey2(u))
C.bP(D.m5,new A.ey3(u),x.P)}u.m(new A.ey4(u,d))
w=w&&!v.c
u.c93(v.b,w)
w=u.d
if(w.w)$.aV.x1$.push(new A.ey5(u))
else if(w.gcIb()&&!u.at){u.at=!0
$.aV.x1$.push(new A.ey6(u))}},
chP(){var w=null,v=this.c
v.toString
C.ck(w,w,!1,w,new A.ey0(this),v,w,!0,!0,x.H)},
c9_(){var w,v,u=null,t=this.d
t===$&&C.c()
w=t.c
w===$&&C.c()
w=w.length
v=A.hfp(t.f,t.r,w)
A.ak0(v)
w=this.c
w.toString
C.ck(u,u,!0,u,new A.exX(this,v),w,u,!0,!0,x.H)},
axk(){this.m(new A.exZ(this))
this.b_w()},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.d
g===$&&C.c()
g=g.gcPK()
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
for(o=0;o<3;++o)p.push(new C.D(D.Nm,new C.y(o<i.d.e?"\u2764\ufe0f":"\ud83d\udda4",h,D.As,h,h,h,h,h,h,h,h,h),h))
v=A.Ya(!1,h,i.f,new A.eyg(i),h,s,u,r,h,new A.eyh(),t,h,h,i.gc90(),i.gc91(),v,!1,h,C.a([C.B(p,D.m,h,D.e,D.P,0,h,h)],q),h)
u=i.d.c
u===$&&C.c()
t=C.T(u)
t=new C.cO(new C.Z(u,new A.eyi(),t.k("Z<1>")),new A.eyj(),t.k("cO<1,n>")).aH(0,"  \xb7  ")
u=C.d("Customer: "+(t.length===0?"All fixed!":t),h,2,D.a1,h,h,h,B.aTO,h,h,h)
t=C.a([],q)
for(n=0;n<10;++n){m=B.dvg[n]
s=i.x===m?D.aA.j(0.25):D.c.j(0.07)
r=new C.aP(14,14)
p=i.x===m
l=p?D.aA:D.aX
k=new C.ay(l,p?2:1,D.r,-1)
l=B.dB3.h(0,m)
p=C.X(l,i.x===m?D.aA:D.ac,h,h,h,19)
l=B.Ss.h(0,m)
l.toString
j=i.x===m?D.aA:D.c
t.push(new C.D(G.og,C.aA(h,C.p(h,new C.ca(D.aM,D.e,D.i,D.m,h,D.p,h,0,C.a([p,D.bm,new C.y(l,h,new C.F(!0,j,h,h,h,h,12.5,D.H,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h),h,h,h,h,h,h,h,h,h)],q),h),D.f,h,h,new C.o(s,h,new C.bH(k,k,k,k),new C.bh(r,r,r,r),h,h,D.n),h,h,h,h,D.eY,h,h,h),D.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new A.eyk(i,m),h,h,h,h,h,h,!1,D.a3),h))}g=C.a([A.U2(D.aJ,new A.eyl(i,d),C.x(C.a([new C.bM(D.a5,h,h,u,h),D.Q,new C.a4(h,52,C.cl(t,h,h,h,h,h,D.aM,!1),h)],q),D.m,h,D.e,D.P,0,D.p),v,""+g+"/"+w+" fixed","Service call",h)],q)
if(i.as)g.push(C.bS(0,C.dZ(C.p(h,h,D.f,B.aiH,h,h,h,h,h,h,h,h,h,h),!0,h),0,0,0))
return new C.an(D.a_,h,D.ab,D.t,g,h)},
cCD(d){return C.bV(E.mC,null,new A.eye(this),d,!0,!0,!0,D.k5,!1,!1,x.H)},
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
$6$shine$skip$split(d,e,f,g,h,i){return this.gJ().$6$shine$skip$split(d,e,f,g,h,i)},
$5$sides(d,e,f,g,h){return this.gJ().$5$sides(d,e,f,g,h)},
$7$caps$shine$sides(d,e,f,g,h,i,j){return this.gJ().$7$caps$shine$sides(d,e,f,g,h,i,j)},
$7$endCaps$joints$shine$sides(d,e,f,g,h,i,j){return this.gJ().$7$endCaps$joints$shine$sides(d,e,f,g,h,i,j)},
$6$shine(d,e,f,g,h,i){return this.gJ().$6$shine(d,e,f,g,h,i)},
$6$taped(d,e,f,g,h,i){return this.gJ().$6$taped(d,e,f,g,h,i)},
$6$normal(d,e,f,g,h,i){return this.gJ().$6$normal(d,e,f,g,h,i)},
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
$1$target(d){return this.gJ().$1$target(d)},
$4$yaw(d,e,f,g){return this.gJ().$4$yaw(d,e,f,g)},
$3$col(d,e,f){return this.gJ().$3$col(d,e,f)},
$3$dist$pitch$target(d,e,f){return this.gJ().$3$dist$pitch$target(d,e,f)},
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
$5$max$min(d,e,f,g,h){return this.gJ().$5$max$min(d,e,f,g,h)},
$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){return this.gJ().$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r)},
$2$f$r(d,e){return this.gJ().$2$f$r(d,e)},
$1$radius(d){return this.gJ().$1$radius(d)},
$4$gender$phone(d,e,f,g){return this.gJ().$4$gender$phone(d,e,f,g)},
$3$hint$prefix(d,e,f){return this.gJ().$3$hint$prefix(d,e,f)},
$3$helperText$prefixText(d,e,f){return this.gJ().$3$helperText$prefixText(d,e,f)},
$1$verifyUrls(d){return this.gJ().$1$verifyUrls(d)},
$2$wrapWidth(d,e){return this.gJ().$2$wrapWidth(d,e)}}
A.y6.prototype={
giU(d){return this.x}}
A.tO.prototype={}
A.aa3.prototype={}
A.ia.prototype={
aGX(d,e,f){var w=this
return d>w.a-f&&d<w.b+f&&e>w.c-f&&e<w.d+f}}
A.csX.prototype={
c94(d){return-this.a.geb(0)/2+d*4},
a5n(d,e){var w,v,u=this.a
if(d<-u.geb(0)/2+6||d>u.geb(0)/2-6||e<6||e>u.gh0(0)-6)return!1
for(u=this.b,w=u.length,v=0;v<w;++v)if(u[v].aGX(d,e,9))return!1
return!0},
b_y(d,e,f){var w,v,u=e.a,t=f.a-u,s=e.b,r=f.b-s,q=Math.max(1,D.k.dc(Math.sqrt(Math.pow(t,2)+Math.pow(r,2))/2))
for(w=0;w<=q;++w){v=w/q
if(!this.a5n(u+t*v,s+r*v))return!1}return!0},
aZ6(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=a0.a,f=h.a,e=D.k.V((g+f.geb(0)/2)/4),d=h.c
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
if(!h.a5n(-f.geb(0)/2+k,j))continue
i=Math.pow(-f.geb(0)/2+k-g,2)+Math.pow(j-e,2)
if(i<o){p=new C.z(n,l)
o=i}}if(p!=null)return p}return null},
ap4(b9,c0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5=this,b6=1e9,b7=b5.aZ6(b9),b8=b5.aZ6(c0)
if(b7==null||b8==null)return C.a([b9,c0],x.f)
w=b8.a
v=b5.c94(w)
u=b8.b
t=new C.z(v,u*4)
if(b5.b_y(0,b9,t))return C.a([b9,t],x.f)
v=b7.a
s=b5.d
s===$&&C.c()
r=b7.b
q=x.S
p=C.eD([v*s+r],q)
o=C.U(q,q)
n=x.i
m=C.H([v*s+r,0],q,n)
l=C.H([v*s+r,b5.bUH(v,r,b8)],q,n)
k=w*s+u
v=b5.a
r=p.$ti
q=r.k("mr<1>")
r=r.c
i=0
for(;;){if(p.a!==0){h=i+1
n=i<6000
i=h}else n=!1
if(!n){j=!1
break}g=p.e
if(g==null)C.b9(C.be("No elements"))
f=g.a
for(n=new C.mr(p,p.r,q),n.c=g;n.C();){e=n.d
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
b0=a5>=b0||a9>=s||!b5.a5n(-v.geb(0)/2+a6,a9*4)}if(b0)continue
b0=!1
if(a4)if(a8!==0)b0=!b5.a5n(-v.geb(0)/2+a6,n)||!b5.a5n(-v.geb(0)/2+e,a9*4)
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
for(r=x.c5,q=new C.dx(b3,r),q=new C.bT(q,q.gL(0),r.k("bT<ak.E>")),r=r.k("ak.E");q.C();){n=q.d
if(n==null)n=r.a(n)
e=D.o.ec(n,s)
u.push(new C.z(-v.geb(0)/2+e*4,D.o.F(n,s)*4))}b4=C.a([D.d.gI(u)],w)
for(a5=0;a9=u.length-1,a5<a9;a5=a9){w=a5+1
for(;;){if(!(a9>w&&!b5.b_y(0,u[a5],u[a9])))break;--a9}b4.push(u[a9])}return b4},
bUH(d,e,f){return Math.sqrt(Math.pow(d-f.a,2)+Math.pow(e-f.b,2))}}
A.AA.prototype={}
A.bss.prototype={
bAL(d,e,f,g,h,i,j,k,l,m,n,o){var w,v,u,t,s=this.b
if(s!=null)for(w=this.as,v=1;v<s.length;++v){u=v-1
t=Math.sqrt(Math.pow(s[v].a-s[u].a,2)+Math.pow(s[v].b-s[u].b,2))
w.push(t)
this.at+=t}}}
A.aWD.prototype={
avd(d){var w,v,u=d.geb(0),t=new A.bVt(d,u)
switch(d.c){case"living":w=t.$1(46)
return C.a([B.hmc,new A.AA(w.a,w.b,4,"Switching the ad on the big TV",!1,!0,!0,"ad")],x.h)
case"kitchen":return C.a([new A.AA(new C.z(-u/2+40,42),3.141592653589793,2.8,"Getting a drink from the fridge",!0,!1,!1,""),B.hmb],x.h)
case"bathroom":return B.drW
case"bedroom":v=t.$1(44)
return C.a([new A.AA(v.a,v.b,3.4,"Switching the ad on the TV",!1,!0,!0,"ad")],x.h)
case"hall":if(!this.a)return B.aAJ
return C.a([new A.AA(new C.z(-d.geb(0)/2+80,90),3.141592653589793,3,"Looking at the left video wall",!1,!1,!0,""),new A.AA(B.evP,0,2.4,"Looking over the lounge and the logo carpet",!1,!1,!1,""),new A.AA(new C.z(d.geb(0)/2-80,90),3.141592653589793,3,"Looking at the right video wall",!1,!1,!0,"")],x.h)
default:return B.aAJ}},
acV(a0,a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=e.b.d
d===$&&C.c()
w=d[a0]
v=new A.csX(w,A.ikj(w))
v.c=D.k.dc(w.geb(0)/4)+1
v.d=D.k.dc(w.gh0(0)/4)+1
u=A.hru(w,a1)
t=u.a
s=u.c
d=e.d
r=d.length
q=a3.length===0?"Walking in":a3
d.push(A.bst(a0,"",!1,q,-1,null,!1,!1,0.5,t.a,u.b,t.b))
for(q=e.avd(w),p=q.length,o=t,n=0;n<q.length;q.length===p||(0,C.L)(q),++n){m=q[n]
l=v.ap4(o,m.a)
k=m.e
if(k)j=C.cU(m.d,"Having",0)
else j=!1
d.push(A.bst(a0,"",j,"Walking",-1,l,!1,!1,0,0,0,0))
o=D.d.gak(l)
d.push(A.bst(a0,m.w,k,m.d,-1,null,m.r,m.f,m.c,o.a,m.b,o.b))}if(a2!=null){i=A.hru(w,a2)
h=i.c
l=v.ap4(o,i.a)
g=e.avd(w).length!==0&&D.d.gak(e.avd(w)).e
d.push(A.bst(a0,"",g,"Walking to the next room",-1,l,!1,!1,0,0,0,0))
o=D.d.gak(l)
d.push(A.bst(a0,"",g,"Opening the door",h,null,!1,!1,1.8,o.a,e.bOc(w,h),o.b))}for(f=r;f<d.length;++f)d[f].ay=s},
aXT(d,e,f){return this.acV(d,e,f,"")},
bOc(d,e){var w,v=d.w[e].b
A:{if("left"===v){w=-1.5707963267948966
break A}if("right"===v){w=1.5707963267948966
break A}w=3.141592653589793
break A}return w},
b_x(){var w,v,u=this
if(u.a){u.acV(5,10,9,"Walking into the hall")
u.b_z()
return}u.acV(10,11,9,"Coming in through the front door")
u.aXT(9,10,5)
u.acV(5,9,0,"Walking down the hall")
for(w=0;w<8;++w){v=B.cZJ[w]
u.aXT(v,5,w===7?null:5)}u.b_z()},
b_z(){var w,v,u,t,s,r,q,p,o=this,n=o.c,m=Math.min(1,n/120)
for(w=o.d,v=w.length,u=0,t=0,s=0;s<v;++s){r=w[s]
if(r.b==null)u+=r.f*=m
else t+=r.at}q=t/Math.max(4,n-u)
for(n=q<=0,p=0,s=0;s<v;++s){r=w[s]
if(r.b!=null)r.f=n?0.1:Math.max(0.05,r.at/q)
r.ax=p
p+=r.f}o.e!==$&&C.aQ()
o.e=p},
bck(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g={},f=this.e
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
return A.atV(!1,n,f.ay,p,f.w,0,f.r,o,0,!1,s,f.x,v,!1,!1,f.c,f.e,f.d)}v=new A.bVu(g)
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
return A.atV(!1,0,o.ay,"",o.w,0,o.r,-1,m/12,!1,!1,!1,f.a,!1,!0,v,p,s)}}
A.b9Y.prototype={
GF(d){var w=this.a
if(w!=null)this.ax=A.hze(w,this.CW)},
aJP(){var w,v,u,t,s,r,q=this
if(!q.KR(q.f,q.r))return!1
for(w=6;w<=320;w+=6){v=Math.max(8,D.k.V(w/6)*3)
for(u=0;u<v;++u){t=u*2*3.141592653589793/v
s=q.f+Math.cos(t)*w
r=q.r+Math.sin(t)*w
if(!q.KR(s,r)){q.f=s
q.r=r
q.at=null
return!0}}}return!1},
KR(d,e){var w,v,u,t,s=this
if(d<s.b||d>s.c||e<s.d||e>s.e)return!0
for(w=s.ax,v=w.length,u=s.ay,t=0;t<v;++t)if(w[t].aGX(d,e,u))return!0
return!1},
aM6(d,e,f,g){var w,v,u,t,s,r,q,p,o=this,n=Math.sqrt(e*e+f*f)
if(n<0.000001)return o.x=!1
w=e/n
v=f/n
u=o.ch
t=o.z?1.9:1
s=115*u*t*Math.min(1,n)*g
r=o.f+w*s
q=o.r+v*s
p=!0
if(o.KR(r,q))if(!o.KR(r,o.r))q=o.r
else{p=!o.KR(o.f,q)
if(p)r=o.f}if(p){o.f=r
o.r=q
o.w=Math.atan2(w,v)
o.y=o.y+s/12}return o.x=p},
cPn(d){var w,v=this,u=v.Q
if(u<=0&&v.as<=0)return
w=v.as
u+=w*d
v.Q=u
v.as=w-560*d
if(u<=0)v.as=v.Q=0},
FH(d,e){var w,v,u,t=this,s=t.at
if(s==null)return!1
w=s.a-t.f
v=s.b-t.r
if(Math.sqrt(w*w+v*v)<4){t.at=null
return t.x=!1}u=t.aM6(0,w,v,e)
if(!u){t.at=null
t.x=!1}return u}}
A.akv.prototype={}
A.aq9.prototype={
R(){var w=x.N
return new A.bex(C.U(w,w),null,null)}}
A.bex.prototype={
gaaW(){var w,v=this,u=v.Q
if(u===$){w=C.bm(null,D.m5,null,1,null,v)
v.Q!==$&&C.bF()
v.Q=w
u=w}return u},
q(){this.gaaW().q()
this.bw8()},
c9B(d){return this.m(new A.d7J(this,d))},
cBI(d){return this.m(new A.d7K(this,d))},
cBT(d){var w=this,v=w.w
if(v==null){w.m(new A.d7L(w))
return}w.m(new A.d7M(w,v,d))
w.gaaW().iv(0,0)
C.eY()},
b_L(d,e,f,g){var w,v=null,u=e?D.aA.j(0.2):D.c.j(0.05),t=C.m(14),s=e?D.aA:D.bz
s=C.J(s,D.r,e?2:1)
w=C.X(f,e?D.aA:D.aC,v,v,v,17)
return C.E(C.aA(v,C.cY(v,C.B(C.a([w,D.bm,new C.dr(1,D.cn,C.d(d,v,v,v,v,v,v,C.l(v,v,e?D.aA:D.ac,v,v,v,v,v,v,v,v,12.5,v,v,D.H,v,v,!0,v,v,v,v,v,v,v,v),D.K,v,v),v)],x.p),D.m,v,D.b9,D.i,0,v,v),v,v,D.b5,new C.o(u,v,s,t,v,v,D.n),D.eH,v,v,v,v,D.rC,v,v,v),D.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,g,v,v,v,v,v,v,!1,D.a3),1)},
c28(d){var w,v=null,u=A.hsH(d),t=this.w===d,s=this.f.h(0,d),r=u.iQ()>0.5?D.av:D.c,q=t?D.b_:D.aX
q=C.J(q,D.r,t?3:1)
w=C.a([],x.V)
if(t)w.push(new C.ac(0,D.G,D.b_.j(0.5),D.I,14))
return C.aA(v,C.cY(v,C.B(C.a([C.X(s!=null?D.e6:A.i3f(d),r,v,v,v,20),Ae.Ed,C.E(C.d(d,v,2,D.a1,v,v,v,C.l(v,v,r,v,v,v,v,v,v,v,v,12.5,v,v,D.u,v,1.15,!0,v,v,v,v,v,v,v,v),v,v,v),1)],x.p),D.m,v,D.e,D.i,0,v,v),v,v,D.b5,new C.o(u,v,q,B.b2k,w,v,D.n),D.h4,v,58,v,D.ct,B.byQ,v,v,v),D.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new A.d7F(this,d),v,v,v,v,v,v,!1,D.a3)},
chV(d){var w,v,u,t,s,r=this,q=null,p=A.i55(d),o=C.a([],x.s)
for(w=r.f,w=new C.cD(w,C.a7(w).k("cD<1,2>")).gaf(0);w.C();){v=w.d
if(v.b===d)o.push(v.a)}w=r.w==null
if(!w)u=D.b_.j(0.7)
else u=o.length!==0?p:D.bz
u=C.J(u,D.r,!w||o.length!==0?2:1)
t=C.a([D.c.j(0.9),p],x.O)
s=C.J(D.hx,D.r,1)
t=C.a([C.p(q,C.as(C.p(q,q,D.f,D.aS,q,q,q,2.5,q,q,q,q,q,10),q,q,q),D.f,q,q,new C.o(q,q,s,q,q,new C.c_(D.A,0.5,D.x,q,0,t,q,q),D.a6),q,22,q,q,q,q,q,22),D.ad,C.E(C.d(d,q,3,D.a1,q,q,q,B.fps,q,q,q),1)],x.p)
if(o.length!==0)t.push(C.aA(q,B.enY,D.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new A.d7H(r,o),q,q,q,q,q,q,!1,D.a3))
return C.aA(q,C.cY(q,C.B(t,D.m,q,D.e,D.i,0,q,q),q,q,D.b5,new C.o(B.bkJ,q,u,B.b2D,q,q,D.n),D.h4,q,58,q,D.ct,B.bAC,q,q,q),D.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new A.d7I(r,d),q,q,q,q,q,q,!1,D.a3)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=B.qD[i.d].e,f=Math.max(g.gL(g),5),e=i.f.a
g=x.p
w=C.eI(C.a([C.aH(h,h,h,h,B.bSD,h,h,h,new A.d7R(d),h,h,h,h,"Wire guide",h)],g),h,h,!0,!0,E.y0,h,1,h,h,h,!1,h,!1,h,h,h,h,!0,h,h,h,h,h,B.fS3,h,h,h,1,h,!0)
v=C.a([],g)
for(u=x.O,t=0;t<2;++t){s=C.a([],g)
if(t>0)s.push(D.as)
r=i.d===t?B.doO:C.a([D.c.j(0.06),D.c.j(0.03)],u)
q=new C.aP(18,18)
p=new C.ay(i.d===t?D.o_:D.bz,1,D.r,-1)
o=B.qD[t]
n=o.a==="threeway"?"\ud83d\udd00":"\ud83c\udf00"
o=D.d.gI(o.b.split(" ("))
m=i.d===t?D.c:D.ac
s.push(new C.by(1,D.ba,C.aA(h,C.cY(h,new C.ca(D.aM,D.e,D.i,D.m,h,D.p,h,0,C.a([new C.y(n,h,D.n2,h,h,h,h,h,h,h,h,h),D.ad,new C.by(1,D.ba,new C.y(o,h,new C.F(!0,m,h,h,h,h,13,D.u,h,h,h,h,1.15,h,h,h,h,h,h,h,h,h,h,h,h,h),h,h,h,h,D.a1,h,3,h,h),h)],g),h),h,h,D.b5,new C.o(h,h,new C.bH(p,p,p,p),new C.bh(q,q,q,q),h,new C.a9(D.a5,D.a8,D.x,r,h,h),D.n),D.a2,h,h,h,h,D.bg,h,h,h),D.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new A.d7S(i,t),h,h,h,h,h,h,!1,D.a3),h))
D.d.v(v,s)}v=C.B(v,D.m,h,D.e,D.i,0,h,h)
u=C.B(C.a([i.b_L("Practice (instant feedback)",!i.e,D.ok,new A.d7T(i)),D.as,i.b_L("Test (marked on submit)",i.e,D.qv,new A.d7U(i))],g),D.m,h,D.e,D.i,0,h,h)
s=D.c.j(0.05)
r=C.m(18)
q=C.J(D.bz,D.r,1)
o=B.qD[i.d]
n=C.d(o.b,h,h,h,h,h,h,L.aak,h,h,h)
m=C.d(o.c,h,h,h,h,h,h,B.ftU,h,h,h)
o=o.e
o=C.bx(C.m(6),C.kj(D.bz,h,h,8,h,e/o.gL(o),B.b0M),D.ap)
l=B.qD[i.d].e
r=C.a([new C.a4(h,78,v,h),D.ae,u,D.aB,C.p(h,C.x(C.a([n,D.am,m,D.W,o,D.au,C.d(""+e+" of "+l.gL(l)+" wires connected",h,h,h,h,h,h,B.fiG,h,h,h)],g),D.E,h,D.e,D.i,0,D.p),D.f,h,h,new C.o(s,h,q,r,h,h,D.n),h,h,h,h,D.bD,h,h,h),D.aB,B.f3R,D.am,C.cu(new A.d7V(i,f*66)),D.Q],g)
if(i.y!=null&&!i.e){v=(i.z?D.be:D.c0).j(0.12)
u=C.m(14)
s=C.J((i.z?D.be:D.c0).j(0.6),D.r,1)
q=i.z
o=q?D.e6:B.bNm
o=C.X(o,q?D.be:D.c0,h,h,h,20)
n=i.y
n.toString
r.push(C.cY(h,C.B(C.a([o,D.ad,C.E(C.d(n,h,h,h,h,h,h,C.l(h,h,q?D.ep:D.eO,h,h,h,h,h,h,h,h,12.8,h,h,D.U,h,1.4,!0,h,h,h,h,h,h,h,h),h,h,h),1)],g),D.E,h,D.e,D.i,0,h,h),h,h,D.b5,new C.o(v,h,s,u,h,h,D.n),D.a2,h,h,h,h,D.bg,h,h,h))}r.push(D.ae)
v=C.bo(D.aA,h,h,h,D.w,h,h,h,new C.b8(C.m(16),D.a0),h,h,h)
u=i.e
s=C.X(u?D.qv:D.le,h,h,h,h,h)
r.push(new C.a4(h,52,C.di(s,C.d(u?"Submit the test":"Check my wiring",h,h,h,h,h,h,D.nM,h,h,h),new A.d7W(i),v),h))
v=i.r
if(v!=null){v=v.a
if(v===B.qR)v=D.be
else v=v===B.JH?D.bt:D.c0
v=v.j(0.1)
u=C.m(16)
s=i.r.a
if(s===B.qR)s=D.be
else s=s===B.JH?D.bt:D.c0
s=C.J(s.j(0.6),D.r,1)
q=i.r.a
o=q===B.qR
n=o?"CORRECT: every lead follows the diagram.":A.h5E(q)+": not passed"
if(o)q=D.be
else q=q===B.JH?D.bt:D.c0
q=C.a([C.d(n,h,h,h,h,h,h,C.l(h,h,q,h,h,h,h,h,h,h,h,15,h,h,D.u,h,h,!0,h,h,h,h,h,h,h,h),h,h,h),D.Q],g)
for(o=i.r.b,n=o.length,k=0;k<o.length;o.length===n||(0,C.L)(o),++k){j=o[k]
q.push(new C.y(j.c+"\nRule: "+j.d+"\nFix: "+j.e+"\n",h,B.fnH,h,h,h,h,h,h,h,h,h))}for(o=B.qD[i.d].f,k=0;k<2;++k)q.push(new C.y("\u2022 "+o[k],h,D.Kc,h,h,h,h,h,h,h,h,h))
D.d.v(r,C.a([D.ae,C.p(h,C.x(q,D.E,h,D.e,D.i,0,D.p),D.f,h,h,new C.o(v,h,s,u,h,h,D.n),h,h,h,h,D.bD,h,h,h)],g))}return C.c6(w,E.y0,C.cl(r,h,h,B.bAs,h,h,D.ah,!1),h,!1,!1,h,h)}}
A.bxi.prototype={
a3(b3,b4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8=this,a9=null,b0=new A.fhR(),b1=a8.e,b2=b4.a-b1
$.S()
w=C.I()
w.r=D.aX.gp(0)
for(v=a8.b,u=b3.a,t=0;t<v.length;++t){s=b0.$1(t)
r=w.G()
u.drawCircle(b1,s,5,r)
r.delete()}for(t=0;t<5;++t){s=b0.$1(t)
r=w.G()
u.drawCircle(b2,s,5,r)
r.delete()}for(s=a8.d,s=new C.cD(s,C.a7(s).k("cD<1,2>")).gaf(0),q=a8.f,p=(b1+b2)/2,o=x.g,n=a8.c,m=a8.r,l=m<1,k=x.dc,j=x.f5,i=m>=1;s.C();){h=s.d
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
a2.push(new C.kN(p,d,p,a0,b2,a0))
a4=g===q
if(a4&&l){a5=new C.rm(new C.aF(a1,D.ag,a9,a9,C.bp(a2,!0,k)),!1,C.a([],j))
if(!a5.C())C.b9(C.fs())
a6=a5.gS(0)
a1=a6.a
a1.ie()
a2=a1.e[a6.b].b
a2===$&&C.c()
a2=a2.a.length()
a1=a1.a
a3=new C.aF(a1.a,a1.b,a9,new C.cw([a6,0,a2*m,!0]),C.a([],o))}a7=A.hsH(g)
g=new C.ao(D.O,D.M,D.S,D.T,D.R)
g.b=D.a9
g.c=9
g.d=D.by
g.r=D.w.j(0.55).gp(0)
r=g.G()
g=a3.e
u.drawPath((g==null?a3.e=new C.cd(a3.gbu().a.snapshot()):g).a,r)
r.delete()
g=new C.ao(D.O,D.M,D.S,D.T,D.R)
g.b=D.a9
g.c=6
g.d=D.by
g.r=a7.gp(0)
r=g.G()
g=a3.e
u.drawPath((g==null?a3.e=new C.cd(a3.gbu().a.snapshot()):g).a,r)
r.delete()
g=new C.ao(D.O,D.M,D.S,D.T,D.R)
g.b=D.a9
g.c=1.6
g.d=D.by
g.r=D.c.j(0.45).gp(0)
r=g.G()
g=a3.e
u.drawPath((g==null?a3.e=new C.cd(a3.gbu().a.snapshot()):g).a,r)
r.delete()
if(!a4||i){g=new C.ao(D.O,D.M,D.S,D.T,D.R)
g.r=a7.gp(0)
r=g.G()
u.drawCircle(b1,d,5.5,r)
r.delete()
d=new C.ao(D.O,D.M,D.S,D.T,D.R)
d.r=a7.gp(0)
r=d.G()
u.drawCircle(b2,a0,5.5,r)
r.delete()}}},
av(d){return!0}}
A.aLr.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a5(0,w.gbB())
w.a8$=null
w.a1()},
aV(){this.b1()
this.b0()
this.bC()}}
A.JH.prototype={
a6(){return"SafetyStatus."+this.b}}
A.FN.prototype={
a6(){return"TerminalRole."+this.b}}
A.FU.prototype={
a6(){return"WireFunction."+this.b}}
A.czn.prototype={}
A.cCY.prototype={}
A.a4l.prototype={}
A.bMN.prototype={}
A.ws.prototype={}
A.tn.prototype={}
A.b6y.prototype={}
A.abb.prototype={}
A.abc.prototype={}
A.vi.prototype={}
A.b5g.prototype={}
A.b8s.prototype={}
A.czp.prototype={
brh(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=C.a([],x.dH)
for(w=this.a,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u){t=w[u]
s=t.b
r=t.c
q=A.hvH(s,r,t.d)
p=new C.Z(r,new A.czq(),C.T(r).k("Z<1>")).gL(0)
r=s.d?1:0
o=s.b+s.c+r
n=o===0?0:D.o.E(D.k.V(p*100/o),0,100)
if(q.a!==B.qR)n=D.o.E(n,0,79)
i.push(new A.abc(t.a,q,n))}w=C.a([],x.gl)
for(v=this.b,s=this.c,m=0;m<v.length;++m){r=v[m]
l=s.h(0,m)
w.push(new A.b5g(r,l==null?-1:l))}v=C.a([],x.t)
for(s=i.length,u=0;u<i.length;i.length===s||(0,C.L)(i),++u)v.push(i[u].c)
for(s=w.length,u=0;u<w.length;w.length===s||(0,C.L)(w),++u){k=w[u]
v.push(k.b===k.a.c?100:0)}j=v.length===0?0:D.k.V(D.d.f4(v,new A.czr())/v.length)
return new A.b8s(i,w,j,D.d.d_(i,new A.czs())&&j>=80)}}
A.PM.prototype={}
A.a1h.prototype={
R(){var w=x.S
return new A.bvb(C.U(w,w))}}
A.bvb.prototype={
B(d){var w=null,v=this.e,u=C.aG(d,w,x.w).w
return C.bn(!0,new C.cT(new C.aZ(0,1/0,0,u.a.b*0.9),C.cl(v==null?this.coK():this.cs9(v),w,w,D.bQ,w,w,D.ah,!0),w),!0,!1,D.af,!0,!0)},
coK(){var w,v,u,t,s,r,q=this,p=null,o=q.a,n=o.c.b,m=x.p
o=C.a([C.d("Test: "+o.d,p,p,p,p,p,p,D.de,p,p,p),D.au,B.fzI,D.W],m)
for(w=q.d,v=x.cE,u=0;u<n.length;u=t){t=u+1
s=C.a([new C.y(""+t+". "+n[u].a,p,D.nK,p,p,p,p,p,p,p,p,p)],m)
for(r=0;r<3;++r)s.push(new A.a9P(r,w.h(0,u),new A.fbt(q,u),new C.y(n[u].b[r],p,D.Ar,p,p,p,p,p,p,p,p,p),!0,p,v))
s.push(D.au)
D.d.v(o,s)}o.push(D.Q)
o.push(C.bI(B.fE4,p,new A.fbu(q),p))
return o},
cs9(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=d.d,g=h?D.be:D.c0
h=h?"Passed":"Not passed"
w=x.p
h=C.a([C.d(h,i,i,i,i,i,i,C.l(i,i,g,i,i,i,i,i,i,i,i,22,i,i,D.u,i,i,!0,i,i,i,i,i,i,i,i),i,i,i),C.d("Score "+d.c+"%  (pass mark 80%)",i,i,i,i,i,i,D.V3,i,i,i)],w)
v=d.a
if(D.d.b3(v,new A.fbv()))h.push(B.eng)
h.push(D.W)
for(u=v.length,t=0;t<v.length;v.length===u||(0,C.L)(v),++t){s=v[t]
r=s.b
q=r.a
p=A.h9j(q).j(0.1)
o=new C.aP(12,12)
n=new C.ay(A.h9j(q).j(0.6),1,D.r,-1)
m=A.h5E(q)
q=A.h9j(q)
q=C.a([new C.y(s.a+": "+m+" ("+s.c+"%)",i,new C.F(!0,q,i,i,i,i,13.5,D.u,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i),i,i,i,i,i,i,i,i,i)],w)
r=r.b
if(r.length===0)q.push(B.fNV)
for(m=r.length,l=0;l<r.length;r.length===m||(0,C.L)(r),++l){k=r[l]
D.d.v(q,C.a([D.au,new C.y(A.h5E(k.b)+": "+k.c,i,B.fhH,i,i,i,i,i,i,i,i,i),new C.y("Rule: "+k.d,i,N.aal,i,i,i,i,i,i,i,i,i),new C.y("Fix: "+k.e,i,B.fnI,i,i,i,i,i,i,i,i,i)],w))}h.push(C.p(i,C.x(q,D.E,i,D.e,D.i,0,D.p),D.f,i,i,new C.o(p,i,new C.bH(n,n,n,n),new C.bh(o,o,o,o),i,i,D.n),i,i,i,D.ct,D.ym,i,i,i))}for(v=d.b,u=v.length,t=0;t<v.length;v.length===u||(0,C.L)(v),++t){j=v[t]
r=D.c.j(0.05)
q=new C.aP(12,12)
p=j.a
o=p.c
m=j.b===o
n=new C.ay(m?D.be:D.c0,1,D.r,-1)
m=m?"\u2705":"\u274c"
h.push(C.p(i,C.x(C.a([new C.y(m+" "+p.a,i,D.lq,i,i,i,i,i,i,i,i,i),new C.y("Correct answer: "+p.b[o],i,D.tn,i,i,i,i,i,i,i,i,i),new C.y(p.d,i,N.aal,i,i,i,i,i,i,i,i,i)],w),D.E,i,D.e,D.i,0,D.p),D.f,i,i,new C.o(r,i,new C.bH(n,n,n,n),new C.bh(q,q,q,q),i,i,D.n),i,i,i,D.ct,D.ym,i,i,i))}h.push(D.au)
h.push(C.bI(D.pI,i,new A.fbw(this),i))
return h}}
A.a5i.prototype={
h8(d){var w,v=this
if(v.c)return
v.c=!0
w=$.aV
w.toString
if(D.a.t(C.vz(C.b0(w).a,null),"Test"))v.d=C.dh(v.b,new A.bT_(v))
else v.b_T()},
b_T(){$.eX.He(new A.bSZ(this))},
bR(d){var w
this.c=!1
w=this.d
if(w!=null)w.a4(0)
this.d=null}}
var z=a.updateTypes(["~()","~(fg)","n(n,fm)","R(nw)","R(mg)","R(a5n)","q(q)","R(iP)","R(l9)","~(G)","ai<kq>(K)","R(XX)","R(fm)","R(a4l)","R(aa3)","R(Mw)","q(K,K)","G(mg,mg)","R(P1)","R(I7)","aB<~>()","R(oq)","R(q)","n(nw)","q(K,K,K)","q(G)","R(nO)","E0(Y)","~(xk,av,K)","~(mg)","~(t,av)","R(Ak)","q(K)","R(M0)","IW(Y)","n(iP)","q(ho)","R(Fg)","G(xo,xo)","R(rd)","R(z8)","Ok(Y)","R(Ms)","R(abc)","q(K,K[K])","R(zd)","R(ws)","PR()","G(G5,G5)","ws(ws,ws)","~(G,q,q,n,u)","~(G,ai<q>)","zd()","nO()","aB<MD?>()","R(w8)","oq(K)","FN(n)","~(G{keepTour:R})","FU(n)","~(q,q,q,q,u,K)","K(lI)","~(q,q,q,q)","v(n,ai<rR>)","n(mg)","v(xo)","q(ai<q>,G)","XL()","~(aD?)","CC()","R(xo)","Wg(Y)","~(kq,G)","~(q,K,K,K,~(xk,av,K){px:K})","ai<fq>(K)","a7b(Y)","~(q,q{note:n?})","mg?(q,q)","R(q,q)","q?(q,q)","K(q)","ai<q>(q,q[G])","+(K,K,K,n,n)(P1,G)","G(G,mg)","K(mg)","ai<kq>()","ai<kq>(ai<kq>)","K(oq)","~(q,q,q,K,K)","a1h(Y)","~(q,q,q,q{poster:G})","~(~(fg),q,q)","~(q,q,K,K,u{joint:R})","+(q,q)(G)","~(q,q,G{alongX:R})","~(ai<q>,u)","~(ai<q>)","~(ai<q>{col:u})","~(G,q,u{h:K,w:K})","mg?(n)","~(G,ai<q>,u,K,n)","~(G,n,q,q,q,R)","R(Xh)","ai<+(q,q)>()","~(mg,K,K,K,K,K{note:n?})","ai<q>(ai<q>)","~(n,ai<q>{r:K})","~(n,q,q)","~(nw,q,n)","~(n,q,q,G)","q(G,G)","R(G)","fq(q,q,q,q,G,K,K)","G(Ak,Ak)","G(l9)","~(G,q,q{col:u,round:R})","cV()","ho(G)","n(Mw)","~(n,JH,n,n,n)","G(FU,FN)","~({done:R})","G(Ak)","~(q,q,q,K,G)","v(rR)"])
A.c0g.prototype={
$1(d){var w=this.a
w=w===0?d:A.vG(d,w)
return w.a7(0,this.b)},
$S:z+6}
A.c0h.prototype={
$1(d){var w=this.a
return w===0?d:A.vG(d,w)},
$S:z+6}
A.c0f.prototype={
$4(b5,b6,b7,b8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=this
for(w=b4.b,v=b7.a,u=b7.b,t=b7.c,s=b6.a,r=b6.b,q=b6.c,p=b8.a,o=b8.b,n=b8.c,m=1/w,l=v*m,k=u*m,j=t*m,i=p*m,h=o*m,m=n*m,g=b4.a,f=g.a,e=b4.c,d=x.o,a0=b4.d,a1=b4.e,a2=b4.f,a3=0;a3<w;++a3)for(a4=a3/w,a5=s+v*a4,a6=r+u*a4,a4=q+t*a4,a7=0;a7<w;++a7){a8=a7/w
a9=a5+p*a8
b0=a6+o*a8
a8=a4+n*a8
b1=a9+l
b2=b0+k
b3=a8+j
f.push(new A.kq(C.a([e.$1(new A.q(a9,b0,a8)),e.$1(new A.q(b1,b2,b3)),e.$1(new A.q(b1+i,b2+h,b3+m)),e.$1(new A.q(a9+i,b0+h,a8+m))],d),a0.$1(b5),a1,g.b,a2,g.d,!1,g.c,g.e,g.f,g.w))}},
$S:z+62}
A.c0i.prototype={
$1(d){var w=d*2*3.141592653589793/this.b
return this.a.aK(0,Math.cos(w)).a7(0,this.c.aK(0,Math.sin(w)))},
$S:z+25}
A.c0e.prototype={
$2(d,e){var w=3.141592653589793*d/this.a,v=6.283185307179586*e/this.b
return new A.q(Math.sin(w)*Math.cos(v),Math.cos(w),Math.sin(w)*Math.sin(v))},
$S:z+110}
A.c0j.prototype={
$1(d){var w=d*2*3.141592653589793/this.b
return this.a.aK(0,Math.cos(w)).a7(0,this.c.aK(0,Math.sin(w)))},
$S:z+25}
A.h_w.prototype={
$1(d){var w=d.b,v=this.a,u=d.c,t=this.b
return new A.q(d.a,w*v-u*t,w*t+u*v)},
$S:z+6}
A.h_u.prototype={
$1(d){var w=this.a
return w===0?d:A.vG(d,w)},
$S:z+6}
A.h_v.prototype={
$1(d){var w=this,v=w.b===0?d:w.c.$1(d)
return J.h0J(w.a.$1(v),w.d)},
$S:z+6}
A.h_t.prototype={
$1(d){var w=this.b===0?d:this.c.$1(d)
return this.a.$1(w)},
$S:z+6}
A.h_i.prototype={
$4(d,e,f,g){var w=-d
return 0.5*(2*e+(w+f)*this.a+(2*d-5*e+4*f-g)*this.b+(w+3*e-3*f+g)*this.c)},
$S:248}
A.bJW.prototype={
$1(d){var w=d.a,v=J.a6(w),u=C.jY(v.h(w,"ngmy_swipe_x3"))
$.ajq=u===!0
w=C.jY(v.h(w,"ngmy_swipe_y3"))
$.ajr=w!==!1},
$S:305}
A.bJX.prototype={
$1(d){},
$S:28}
A.bJY.prototype={
$1(d){d.ar("Bool","ngmy_swipe_x3",$.ajq)
d.ar("Bool","ngmy_swipe_y3",$.ajr)},
$S:305}
A.bJZ.prototype={
$1(d){},
$S:28}
A.bJT.prototype={
$4(d,e,f,g){var w
if(d>0.000001)w=(g-e)/d
else w=d<-0.000001?(f-e)/d:1/0
return w},
$S:248}
A.bK0.prototype={
$1(d){var w=this,v=-d.c,u=d.b,t=w.a,s=w.b,r=v*t-u*s,q=d.a,p=w.c,o=w.d
return new A.q(q*p-r*o,u*t+v*s,q*o+r*p)},
$S:z+6}
A.bK_.prototype={
$1(d){var w=this,v=w.a
return v.d.a7(0,w.b.$1(new A.q(w.c*d,w.d*d,d-v.c)))},
$S:z+32}
A.bJV.prototype={
$1(d){var w=this,v=-d.c,u=d.b,t=w.a,s=w.b,r=v*t-u*s,q=d.a,p=w.c,o=w.d
return new A.q(q*p-r*o,u*t+v*s,q*o+r*p)},
$S:z+6}
A.bJU.prototype={
$1(d){var w=this,v=w.a
return v.d.a7(0,w.b.$1(new A.q(w.c*d,w.d*d,d-v.c)))},
$S:z+32}
A.ctX.prototype={
$1(d){var w=this,v=d.a,u=w.a,t=d.c,s=w.b,r=-v*s+t*u,q=d.b,p=w.c,o=w.d
return new A.q(v*u+t*s,q*p-r*o,-(q*o+r*p))},
$S:z+6}
A.ctY.prototype={
$1(d){var w=this.a.c,v=this.b.$1(d.aE(0,w.d))
return new A.q(v.a,v.b,v.c+w.c)},
$S:z+6}
A.ctW.prototype={
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
b0=A.i01(u)
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
if(t&&d4.d===u){d2=C.ar(c5,D.b_,0.28+0.14*Math.sin(d2.gGS(0)*6))
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
d3=C.h1q(c6,c7,c8,d2)
s=d4.d
u=s===u&&t
d0=new A.G5(d4.y,d4.z,null,c9,d3,c0-d4.x,s,d2<0.99,u)
d0.e=c1<2&&c2<2
d1.go.push(d0)
d0.c=d5},
$S:z+72}
A.ctQ.prototype={
$1(d){return d.c>=1},
$S:z+22}
A.ctR.prototype={
$1(d){var w,v,u,t,s,r,q,p,o=this,n=!o.c||o.d>=o.e[0],m=o.f,l=o.b
if(n)A.i0U(d,m,o.r,l.gGS(0))
else{n=$.hD1()
C.E4(m)
w=n.a
v=w.get(m)
u=D.k.bf(l.gGS(0)*5)
t=v==null
if(t)s=o.a.x<10
else s=v.a!==u&&o.a.w<3
if(s){$.S()
r=new C.p2()
m.c.$3(C.z9(r,null),new C.av(m.d,m.e),l.gGS(0))
if(!t)v.b.q()
n.n(0,m,new A.cDJ(u,r.ni()))
n=o.a
if(t)++n.x
else ++n.w}C.E4(m)
n=w.get(m)
q=n==null?null:n.b
if(q!=null){n=m.d
m=m.e
p=A.h8Z(o.r,n,m)
if(p!=null){l=d.a
J.bl(l.save())
d.aw(0,p.a)
l.clipRect(C.bG(new C.a3(0,0,n,0+m)),$.my()[1],!0)
m=q.b
m===$&&C.c()
m=m.a
m===$&&C.c()
m=m.a
m.toString
l.drawPicture(m)
l.restore()}}else{$.S()
n=C.I()
n.r=D.cr.gp(0)
d.aI(o.w,n)}}},
$S:710}
A.ctP.prototype={
$2(d,e){var w=this.a
return A.pB(A.pB(w[0],w[1],d),A.pB(w[3],w[2],d),e)},
$S:z+16}
A.ctS.prototype={
$1(d){return d.c<1},
$S:z+22}
A.ctT.prototype={
$1(d){return A.i0V(d,this.b,this.c,8,6,this.a.gGS(0))},
$S:710}
A.ctU.prototype={
$2(d,e){return D.k.aN(e,d)},
$S:1775}
A.ctV.prototype={
$2(d,e){var w,v=D.o.aN(d.a,e.a)
if(v!==0)return v
w=D.k.aN(e.d,d.d)
return w!==0?w:D.o.aN(d.c,e.c)},
$S:z+48}
A.f3i.prototype={
$1(d){var w=this.a,v=w.r,u=d.a
w.r=d
w.a.d.a73(D.k.E((u-v.a)/1e6,0,0.1))
w.f.sp(0,u/1e6)},
$S:8}
A.f3h.prototype={
$1(d){if(x.ej.b(d))this.a.a.d.apH(1+d.gtF().b*0.0012)},
$S:245}
A.f3f.prototype={
$1(d){var w=this.a
w.w=1
w.x=d.c},
$S:256}
A.f3g.prototype={
$1(d){var w,v,u,t,s,r=d.w,q=this.a
if(r!==q.x){q.x=r
q.w=d.d}if(r>=2){r=d.d
w=q.w/r
q.w=r
if(isFinite(w)&&w>0)q.a.d.apH(w)}else{r=q.a.d
q=d.a
v=$.ajq?-1:1
v=q.a*0.009*v
u=$.ajr?-1:1
r.dx=r.db=null
v=r.a+=v
if(!r.CW){t=r.ay
s=r.ch
r.a=D.k.E(v,t-s,t+s)}r.b=D.k.E(r.b+-q.b*0.009*u,r.at,r.ax)
r.adW()
r.aW()}},
$S:218}
A.f39.prototype={
$1(d){return this.a.y=d.b},
$S:22}
A.f3a.prototype={
$0(){var w,v=this.a,u=v.a.as
u.toString
v=v.y
w=this.b.gY(0)
return u.$2(v,w==null?D.aw:w)},
$S:0}
A.f3c.prototype={
$1(d){var w=this.a
if(++w.at===1){w.z=d.geZ()
w.Q=d.glp(d)
w.as=!1}else w.as=!0},
$S:68}
A.f3d.prototype={
$1(d){var w=this.a,v=w.z
if(v!=null&&d.geZ().aE(0,v).gcC()>14)w.as=!0},
$S:192}
A.f3b.prototype={
$1(d){var w=this.a
w.at=Math.max(0,w.at-1)
w.as=!0},
$S:134}
A.f3e.prototype={
$1(d){var w,v=this.a,u=v.at
v.at=Math.max(0,u-1)
w=v.z
if(u===1&&!v.as&&w!=null&&D.o.ao(d.glp(d).a-v.Q.a,1000)<450){u=v.a.f
if(u!=null)u.$1(v.e.cWK(d.geZ()))}if(v.at===0)v.z=null},
$S:110}
A.fkL.prototype={
$0(){return new A.PR(!1,C.a([],x.z),C.a([],x.t))},
$S:z+47}
A.bU9.prototype={
$0(){var w=0,v=C.j(x.U),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j
var $async$$0=C.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return C.b($.ra().jk(0,q.a),$async$$0)
case 7:p=e
m=q.b
l=x.N
o=new A.MD(m,C.U(l,x.Q),C.U(l,x.bB),C.a([],x.dQ),C.U(l,x.gN))
w=8
return C.b(o.PC(p),$async$$0)
case 8:$.h2e.n(0,m,o)
$.h2c.W(0,m)
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
$.h2c.M(0,m)
u=null
r=[1]
w=5
break
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
$.h2d.W(0,q.b)
w=r.pop()
break
case 6:case 1:return C.h(u,v)
case 2:return C.f(s.at(-1),v)}})
return C.i($async$$0,v)},
$S:z+54}
A.bU0.prototype={
$1(d){return D.a.t(d,"hips")},
$S:3}
A.bTV.prototype={
$2(d,e){var w,v=Math.floor(d),u=Math.floor(e),t=this.b,s=t.a,r=Math.min(s-1,D.k.bf((d-v)*s))
v=t.b
w=(Math.min(v-1,D.k.bf((e-u)*v))*s+r)*4
s=this.a
t=t.c
s.c=s.c+t[w]
s.b=s.b+t[w+1]
s.a=s.a+t[w+2]},
$S:199}
A.bTU.prototype={
$1(d){return D.k.V(D.k.E(d,0,1)*255)},
$S:258}
A.bU2.prototype={
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
w[s]=g.c3(0,((k*1024+j)*1024+i)*2+r,new A.bU3(g))}e[0]=g.a
return w},
$S:1777}
A.bU3.prototype={
$0(){return this.a.a},
$S:93}
A.bU4.prototype={
$1(d){var w,v,u,t,s,r,q=C.aX(x.S)
for(w=this.a.e,v=w.length,u=0;u<v;u+=3){t=d[w[u]]
s=d[w[u+1]]
r=d[w[u+2]]
if(t===s||s===r||t===r)continue
q.M(0,A.hgF(t,s,r))}return q.a},
$S:1778}
A.bU1.prototype={
$2(d,e){var w,v,u,t=this.a,s=this.b.h(0,d)
s.toString
w=J.a6(e)
v=D.k.V(w.h(e,0)/w.h(e,3))
u=D.k.V(w.h(e,1)/w.h(e,3))
w=D.k.V(w.h(e,2)/w.h(e,3))
t.$flags&2&&C.aj(t)
t[s]=(v<<16|u<<8|w|4278190080)>>>0},
$S:1779}
A.bTZ.prototype={
$0(){return new Float64Array(this.a*16)},
$S:711}
A.bU_.prototype={
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
if(n<0)D.oE.he(k,j,j+16,h)
else A.hgG(k,n*16,h,0,k,j)
k=u.f
k===$&&C.c()
k=k[a1]
j=k.length
m=0
for(;m<k.length;k.length===j||(0,C.L)(k),++m)l.$1(k[m])},
$S:30}
A.bU7.prototype={
$1(d){var w,v,u
for(w=this.a.z,w=new C.hF(w,w.r,w.e);w.C();){v=w.d
u=v.toLowerCase()
if(C.cU(u,d,0))return v}return null},
$S:338}
A.bU5.prototype={
$1(d){return!D.a.t(d.toLowerCase(),"pose")},
$S:3}
A.bU6.prototype={
$0(){var w=this.a.z
return new C.cy(w,C.a7(w).k("cy<1>")).gI(0)},
$S:23}
A.bUa.prototype={
$1(d){var w=this,v=w.c,u=d*3,t=w.a,s=w.d,r=(v[u]-t.b)*s,q=v[u+1],p=w.b.ay,o=(v[u+2]-t.a)*s
t=w.f
u=w.r
return new A.q(r*t+o*u+w.w,(q-p)*s+w.e,-r*u+o*t+w.x)},
$S:z+25}
A.bTW.prototype={
$3(d,e,f){var w=this,v=w.e
return w.b.a7(0,w.c.aK(0,w.a.a*f+0.25)).a7(0,w.d.aK(0,d*v)).a7(0,w.f.aK(0,e*v))},
$2(d,e){return this.$3(d,e,1)},
$S:z+44}
A.bTY.prototype={
$6(d,e,f,g,h,i){var w=this
return w.a.push(new A.kq(C.a([d,e,f,g],x.o),w.b,h,w.c,0,1,!1,0,i,2,w.d))},
$S:z+60}
A.bTX.prototype={
$6(d,e,f,g,h,i){var w=this.b
return this.a.$6(w.$2(d-f,e),w.$2(d,e-g),w.$2(d+f,e),w.$2(d,e+g),h,i)},
$S:1781}
A.fyA.prototype={
$2(d,e){return D.k.V(d+(D.k.E(e,0,255)-d)*0.8)},
$S:1782}
A.bIf.prototype={
$1(d){return d.d+this.a.f*d.e},
$S:z+61}
A.bIe.prototype={
$1(d){return d.a===J.r(this.a,"template")},
$S:z+39}
A.fRr.prototype={
$6$lines$w(d,e,f,g,h,i){var w=null,v=C.fy("\u2026",w,h,w,C.cS(w,w,w,w,w,w,w,w,w,C.l(w,w,f,w,w,w,w,w,w,w,w,e,w,w,i,w,1.1,!0,w,w,w,w,w,w,w,w),d),D.a4,D.bY,w,D.dA,D.bW)
v.o_(g)
return v},
$4(d,e,f,g){return this.$6$lines$w(d,e,f,g,2,D.u)},
$5$w(d,e,f,g,h){return this.$6$lines$w(d,e,f,g,2,h)},
$S:1783}
A.fzZ.prototype={
$1(d){var w=this.a
return A.vG(d,w.c).a7(0,new A.q(w.a,0,w.b))},
$S:z+6}
A.fA_.prototype={
$6$px(d,e,f,g,h,i){var w=new A.fA0(e,d),v=-f/2,u=g/2,t=f/2,s=-g/2
this.a.push(new A.fq(C.a([w.$2(v,u),w.$2(t,u),w.$2(t,s),w.$2(v,s)],x.o),0,h,i,i*g/f,30,this.b,0,!1))},
$5(d,e,f,g,h){return this.$6$px(d,e,f,g,h,260)},
$S:z+73}
A.fA0.prototype={
$2(d,e){return A.vG(new A.q(d,e,0),this.a).a7(0,this.b)},
$S:z+16}
A.fzS.prototype={
$3(d,e,f){return A.bC_(d,e,f,0)},
$S:24}
A.fzT.prototype={
$3(d,e,f){return A.bC_(d,e,f,3)},
$S:24}
A.fzU.prototype={
$3(d,e,f){return A.bC_(d,e,f,8)},
$S:24}
A.fzV.prototype={
$3(d,e,f){return A.bC_(d,e,f,9+this.a)},
$S:24}
A.fzW.prototype={
$3(d,e,f){return A.bC_(d,e,f,12+this.a)},
$S:24}
A.fzX.prototype={
$3(d,e,f){return A.hzh(d,e,f,this.a,this.b)},
$S:24}
A.fzY.prototype={
$3(d,e,f){return A.hzh(d,e,f,this.a,this.b)},
$S:24}
A.flU.prototype={
$4(d,e,f,g){var w=-d,v=this.a
return 0.5*(2*e+(w+f)*v+(2*d-5*e+4*f-g)*v*v+(w+3*e-3*f+g)*v*v*v)},
$S:248}
A.fpi.prototype={
$1(d){var w=this.a,v=J.a6(w)
return v.h(w,D.o.E(d,0,v.gL(w)-1))},
$S:z+93}
A.fyG.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n=A.huZ(this.a),m=x.n,l=C.a([],m)
for(w=J.a6(n),v=0;v<w.gL(n)-1;v=u){u=v+1
t=w.h(n,u).a
s=w.h(n,v).a
l.push(Math.pow(Math.max(new A.q(t.a-s.a,t.b-s.b,t.c-s.c).guZ(),250),0.75))}r=D.d.f4(l,new A.fyF())
q=C.a([0],m)
for(m=l.length,p=0;p<l.length;l.length===m||(0,C.L)(l),++p){o=l[p]
q.push(D.d.gak(q)+30*o/r)}return q},
$S:1785}
A.fyF.prototype={
$2(d,e){return d+e},
$S:80}
A.fyD.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8=this.a,a9=B.dAk.h(0,a8.a)
if(a9==null){w=C.a([],x.t)
v=a8.w.length
u=v===0
t=0
for(;;){if(!(t<(u?1:v)))break
w.push(t);++t}a9=new C.z(w,0)}s=Math.max(Math.max(a8.gapp(),a8.gbew()),a8.gGQ()*1.3)
w=a8.r
r=new A.q(a8.ga4z(0),w+a8.gGQ()/2,a8.ga4B())
q=w+a8.gGQ()
v=s*0.55
p=C.a([new C.z(new A.q(a8.ga4z(0)+v,q+s*0.5,a8.ga4B()+s*1.15),r)],x.dt)
for(u=a9.a,o=x.o,n=a8.w,m=a8.e,l=a8.f,k=a9.b,v=q+v,j=null,i=0;i<u.length;++i,j=a2){h=n[u[i]]
g=h.e
f=m*g
e=l*g
d=new A.q(h.a,w+h.d+e/2,h.b)
g=h.c
a0=Math.sin(g)
a1=Math.cos(g)
a2=new A.q(a0,0,a1)
a3=new A.fyE(d,a2,f*1.5,new A.q(Math.cos(g),0,-Math.sin(g)),f,e)
a4=D.o.F(k+i,3)
A:{if(0===a4){g=C.a([a3.$3(1.8,0,1.1),a3.$3(1,-0.22,-0.35),a3.$3(0.9,0.3,-0.2)],o)
break A}if(1===a4){g=C.a([a3.$3(0.9,1.5,-0.25),a3.$3(1.05,0,0.05),a3.$3(0.85,-1.3,0.15)],o)
break A}g=C.a([a3.$3(1.3,0.2,-0.45),a3.$3(1.1,0,0.45),a3.$3(1.7,-0.3,1.3)],o)
break A}if(j!=null&&j.a*a0+j.c*a1<0.3){a0=D.d.gak(p).a
a1=D.d.gI(g)
p.push(new C.z(new A.q((a0.a+a1.a)*0.5+j.c*s*0.5,v,(a0.c+a1.c)*0.5-j.a*s*0.5),r))}for(a5=0;a5<3;++a5)p.push(new C.z(g[a5],d))}a6=new A.q(a8.ga4z(0)-s*0.7,q+s*0.6,a8.ga4B()-s)
if(j!=null){a7=D.d.gak(p).a.a7(0,a6).aK(0,0.5)
p.push(new C.z(new A.q(a7.a+j.c*s*0.5,v,a7.c-j.a*s*0.5),r))}p.push(new C.z(a6,r))
return p},
$S:z+103}
A.fyE.prototype={
$3(d,e,f){var w=this
return w.a.a7(0,w.b.aK(0,w.c*d)).a7(0,w.d.aK(0,w.e*e)).a7(0,new A.q(0,w.f*f,0))},
$S:z+24}
A.fzK.prototype={
$1(d){var w=this.b,v=w*d.b,u=d.c,t=this.c
return this.a.a7(0,new A.q(Math.sin(v)*u*t.geh(0)+w*d.e*t.gapp(),d.d*t.gGQ(),Math.cos(v)*u*t.geh(0)))},
$S:z+36}
A.fzL.prototype={
$1(d){var w=this.c
return this.a.a7(0,new A.q(this.b*d.f*w.gapp(),d.r*w.gGQ(),0))},
$S:z+36}
A.fzM.prototype={
$1(d){var w=this.a
return w[D.o.E(d,0,w.length-1)]},
$S:z+117}
A.c4h.prototype={
$1(d){return d.a===this.a.d.a},
$S:z+39}
A.c4f.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new A.c4e())},
$S:31}
A.c4e.prototype={
$0(){},
$S:0}
A.c42.prototype={
$0(){var w=this.a
w.f=A.h9E(w.gzz(),w.d)
w.abA()},
$S:0}
A.c48.prototype={
$0(){return this.a.x=this.b},
$S:0}
A.c4g.prototype={
$0(){var w=this.a
w.x=0
w.y=!1
w.z=""},
$S:0}
A.c45.prototype={
$0(){var w=this.a
w.x=-1
w.y=!1
w.z=this.b?"That was the 30 second drone shot. Press it again any time, or change the board and film it again.":""},
$S:0}
A.c44.prototype={
$0(){var w=this.a
return w.f=A.h9E(w.gzz(),w.d)},
$S:0}
A.c3D.prototype={
$0(){},
$S:0}
A.c43.prototype={
$0(){return this.a.z="That picture could not be opened."},
$S:0}
A.c47.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=C.aG(d,k,x.w).w,i=x.p,h=C.a([],i)
for(w=this.a,v=w.d,u=0;u<12;++u){t=B.a3G[u]
s=t.a
r=v.a===s
q=r?D.d7:D.cr
p=new C.aP(16,16)
o=r?F.f8:D.bz
n=new C.ay(o,r?2:1,D.r,-1)
o=C.a([new C.y(t.b,k,D.n2,k,k,k,k,k,k,k,k,k),D.b2],i)
r=t.w.length
m=r===0
if((m?1:r)>1){l=new C.aP(10,10)
o.push(C.p(k,new C.y(""+(m?1:r)+" boards",k,A6.aU5,k,k,k,k,k,k,k,k,k),D.f,k,k,new C.o(D.dY,k,k,new C.bh(l,l,l,l),k,k,D.n),k,k,k,k,D.yz,k,k,k))}if(v.a===s)o.push(B.en4)
h.push(C.aA(k,C.p(k,C.x(C.a([new C.ca(D.aM,D.e,D.i,D.m,k,D.p,k,0,o,k),D.am,new C.y(t.c,k,D.j6,k,k,k,k,D.a1,k,2,k,k),D.cS,new C.by(1,D.ba,new C.y(t.d,k,B.fkV,k,k,k,k,D.UI,k,k,k,k),k)],i),D.E,k,D.e,D.i,0,D.p),D.f,k,k,new C.o(q,k,new C.bH(n,n,n,n),new C.bh(p,p,p,p),k,k,D.n),k,k,k,k,B.byW,k,k,k),D.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new A.c46(w,d,t),k,k,k,k,k,k,!1,D.a3))}return C.bn(!0,new C.D(B.bAl,C.x(C.a([B.fWM,D.au,B.fPH,D.ae,new C.cT(new C.aZ(0,1/0,0,j.a.b*0.66),C.kQ(1.05,h,2,10,10,k,k,!0),k)],i),D.E,k,D.e,D.P,0,D.p),k),!0,!1,D.af,!0,!0)},
$S:27}
A.c46.prototype={
$0(){C.a5(this.b,!1).O(null)
this.a.cvS(this.c.a)},
$S:0}
A.c41.prototype={
$0(){var w=this,v=w.b.d.b[w.a.a]
w.c.saY(0,v.b)
w.d.saY(0,v.c)
w.e.saY(0,v.d)},
$S:0}
A.c40.prototype={
$1(d){var w=this
return new C.e1(new A.c3Y(w.a,w.b,w.c,w.d,w.e,w.f),null)},
$S:21}
A.c3Y.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=this,o=null,n=p.b,m=p.a,l=n.d.b[m.a],k=new A.c3Z(m,n),j=new A.c4_(e),i=C.aG(d,o,x.w).w,h=x.p,g=C.a([B.fCH,D.au,C.d(l.a?"Now it shows the NGMY logo, words and ads. Change anything and it becomes yours.":"This sign is your own.",o,o,o,o,o,o,I.tk,o,o,o)],h),f=n.gzz().w.length
if((f===0?1:f)>1){f=C.a([],h)
w=p.c
v=0
for(;;){u=n.gzz().w.length
if(!(v<(u===0?1:u)))break
u=m.a===v
t=u?D.d7:D.cr
s=new C.aP(18,18)
r=new C.ay(u?F.f8:D.aX,2,D.r,-1)
q=v+1
f.push(C.aA(o,C.p(o,new C.y("Sign "+q,o,D.lq,o,o,o,o,o,o,o,o,o),D.f,o,o,new C.o(t,o,new C.bH(r,r,r,r),new C.bh(s,s,s,s),o,o,D.n),o,o,o,o,D.lF,o,o,o),D.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new A.c3I(m,v,w,e),o,o,o,o,o,o,!1,D.a3))
v=q}D.d.v(g,C.a([D.W,B.fWR,D.am,C.bY(D.bG,f,D.br,o,8,8)],h))}g.push(D.ae)
g.push(k.$3("Big words",p.d,new A.c3J(l)))
g.push(k.$3("Smaller words",p.e,new A.c3K(l)))
g.push(k.$3("Bottom line (web address)",p.f,new A.c3L(l)))
f=l.f!=null
w=f?"Your logo is on (change)":"Put your own logo (default: NGMY logo)"
g.push(j.$4(w,f,new A.c3M(m,n),new A.c3N(m,n,l)))
f=l.r!=null
w=f?"Your picture is on (change)":"Put your own picture"
g.push(j.$4(w,f,new A.c3O(m,n),new A.c3P(m,n,l)))
g.push(D.au)
g.push(B.fQP)
g.push(D.am)
f=C.a([],h)
for(w=x.O,v=0;v<6;++v){u=B.a5s[v]
u=C.a([u.b,u.c],w)
t=new C.aP(10,10)
r=new C.ay(l.e===v&&!l.a?F.f8:D.aX,2,D.r,-1)
s=B.a5s[v]
f.push(C.aA(o,C.p(o,new C.cf(D.A,o,o,new C.y(s.a,o,new C.F(!0,s.d,o,o,o,o,11,D.H,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),o,o,o,o,o,o,o,o,o),o),D.f,o,o,new C.o(o,o,new C.bH(r,r,r,r),new C.bh(t,t,t,t),o,new C.a9(D.a5,D.a8,D.x,u,o,o),D.n),o,o,o,o,D.hz,o,o,74),D.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new A.c3Q(m,n,l,v,e),o,o,o,o,o,o,!1,D.a3))}g.push(C.bY(D.bG,f,D.br,o,8,8))
g.push(D.aB)
m=n.gzz().w.length
g.push(C.B(C.a([C.E(C.ex(B.bXx,C.d((m===0?1:m)>1?"All signs back to the NGMY default":"Back to the NGMY default",o,o,o,o,o,o,B.fxh,o,o,o),new A.c3R(n,l,p.c,e),o),1),D.as,C.bI(D.x9,o,new A.c3S(d),o)],h),D.m,o,D.e,D.i,0,o,o))
return new C.D(new C.P(16,16,16,i.f.d+16),C.ch(C.x(g,D.E,o,D.e,D.P,0,D.p),D.t,o,D.y,o,o,o,o,D.ah),o)},
$S:102}
A.c3Z.prototype={
$3(d,e,f){var w=null
return new C.D(D.d1,C.aM(w,D.Y,!1,w,!0,D.t,w,C.aN(),e,w,w,w,w,w,2,C.br(w,new C.b5(4,C.m(12),D.a0),w,w,w,w,w,w,!0,w,w,w,w,w,w,D.cr,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,D.V2,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w),D.y,!0,w,!0,w,!1,w,D.aj,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,new A.c3T(this.a,this.b,f),w,w,w,!1,w,w,!1,w,!0,w,D.aa,w,w,w,w,w,w,w,w,w,w,w,D.df,!0,D.a4,w,D.an,w,w,w,w),w)},
$S:1786}
A.c3T.prototype={
$1(d){this.c.$1(d)
this.b.ZO(this.a.a)},
$S:2}
A.c4_.prototype={
$4(d,e,f,g){var w=null,v=this.a,u=e?D.e6:D.uo
u=C.a([C.E(C.ex(C.X(u,e?D.be:D.ac,w,w,w,w),C.d(d,w,w,w,w,w,w,D.df,w,w,w),new A.c3W(f,v),w),1)],x.p)
if(e)u.push(C.aH(w,w,w,w,D.rP,w,w,w,new A.c3X(g,v),w,w,w,w,w,w))
return new C.D(D.ct,C.B(u,D.m,w,D.e,D.i,0,w,w),w)},
$S:1787}
A.c3W.prototype={
$0(){var w=0,v=C.j(x.H),u=this
var $async$$0=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:u.a.$0()
w=2
return C.b(C.bP(D.nq,null,x.H),$async$$0)
case 2:u.b.$1(new A.c3V())
return C.h(null,v)}})
return C.i($async$$0,v)},
$S:1}
A.c3V.prototype={
$0(){},
$S:0}
A.c3X.prototype={
$0(){this.a.$0()
this.b.$1(new A.c3U())},
$S:0}
A.c3U.prototype={
$0(){},
$S:0}
A.c3I.prototype={
$0(){var w=this
w.a.a=w.b
w.c.$0()
w.d.$1(new A.c3H())},
$S:0}
A.c3H.prototype={
$0(){},
$S:0}
A.c3J.prototype={
$1(d){return this.a.b=d},
$S:2}
A.c3K.prototype={
$1(d){return this.a.c=d},
$S:2}
A.c3L.prototype={
$1(d){return this.a.d=d},
$S:2}
A.c3M.prototype={
$0(){return this.b.IX(this.a.a,!0)},
$S:0}
A.c3N.prototype={
$0(){var w=this.c
w.w=w.f=null
this.b.ZO(this.a.a)},
$S:0}
A.c3O.prototype={
$0(){return this.b.IX(this.a.a,!1)},
$S:0}
A.c3P.prototype={
$0(){var w=this.c
w.x=w.r=null
this.b.ZO(this.a.a)},
$S:0}
A.c3Q.prototype={
$0(){var w=this
w.c.e=w.d
w.b.ZO(w.a.a)
w.e.$1(new A.c3G())},
$S:0}
A.c3G.prototype={
$0(){},
$S:0}
A.c3R.prototype={
$0(){var w=this,v=w.a,u=v.gzz().w.length
if((u===0?1:u)>1)v.d.cYJ()
else w.b.bjQ()
w.c.$0()
v.m(new A.c3E())
v.IY()
w.d.$1(new A.c3F())},
$S:0}
A.c3E.prototype={
$0(){},
$S:0}
A.c3F.prototype={
$0(){},
$S:0}
A.c3S.prototype={
$0(){C.a5(this.a,!1).O(null)
return null},
$S:0}
A.c4b.prototype={
$0(){return C.a5(this.a,!1).ik()},
$S:0}
A.c4c.prototype={
$0(){var w=this.a
return w.m(new A.c4a(w))},
$S:0}
A.c4a.prototype={
$0(){return this.a.y=!1},
$S:0}
A.c4d.prototype={
$0(){var w=this.a
return w.m(new A.c49(w))},
$S:0}
A.c49.prototype={
$0(){return this.a.y=!0},
$S:0}
A.fCg.prototype={
$1(d){return d.a===this.a},
$S:z+45}
A.fCh.prototype={
$0(){return D.d.gI(B.Rj)},
$S:z+52}
A.bMF.prototype={
$1(d){return d.d.t(0,this.a.b)},
$S:z+45}
A.bMH.prototype={
$2(d,e){var w=this.a,v=this.b
return D.k.aN(w.aaz(d.c,d.d,new C.z(v.c,v.d)),w.aaz(e.c,e.d,new C.z(v.c,v.d)))},
$S:z+17}
A.bMI.prototype={
$1(d){return d.f==null},
$S:z+70}
A.bME.prototype={
$2(d,e){var w,v=d.w
if(v!==e.w)return v?-1:1
v=this.a
w=this.b
return D.k.aN(v.b_8(w,A.yP(d.c)),v.b_8(w,A.yP(e.c)))},
$S:z+38}
A.bMJ.prototype={
$2(d,e){var w=D.o.aN(e.b,d.b)
return w!==0?w:D.o.aN(e.c,d.c)},
$S:1788}
A.bMG.prototype={
$2(d,e){var w,v,u=d.w
if(u!==e.w)return u?-1:1
u=this.a
w=this.b
v=this.c
return D.k.aN(u.aaz(w,v,A.yP(d.c)),u.aaz(w,v,A.yP(e.c)))},
$S:z+38}
A.bKK.prototype={
$2(d,e){return(d^D.k.V(e.c)*31+D.k.V(e.d))>>>0},
$S:z+83}
A.c1T.prototype={
$2(d,e){var w,v,u,t,s=null,r=this.a,q=r.c,p=q.d>0
if(p)w=0
else{w=q.c
w=w>0?(1-w/180)*0.5:q.a}v=r.e
if(p)p="\ud83d\udc1b"
else p=q.c>0?"\ud83d\ude34":"\u26a1"
u=x.p
w=C.a([A.h2K(v,p,w)],u)
p=q.e
if(p<0.3||q.f){t=q.f
if(t)p=0.2
t=t?"\ud83e\udd12":"\ud83d\udca7"
D.d.v(w,C.a([new C.a4(s,v/4,s,s),A.h2K(v*0.7,t,p)],u))}if(r.d)D.d.v(w,C.a([new C.a4(s,v/3,s,s),A.h2K(v,"\u26fd",q.b)],u))
return C.x(w,D.m,s,D.e,D.P,0,D.p)},
$S:410}
A.fFG.prototype={
$4(d,e,f,g){var w=f+g/100
return new C.cw([d+100*Math.cos(w),e+100*Math.sin(w),-Math.sin(w),Math.cos(w)])},
$S:1789}
A.fj5.prototype={
$1(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this.b,h=A.Le(i,a0).a,g=h[0],f=h[1],e=h[2],d=h[3]
for(h=this.a,w=h.a,v=h.b,u=h.c,h=h.d,t=0;t<5;++t){s=B.cZ0[t]
for(r=d*s,q=e*s,p=0;p<3;++p){o=B.dcI[p]
n=i.a==="bus"
m=n?120:95.94999999999999
l=n?33.54:31.45
k=g+q*m-d*o*l
m=n?120:95.94999999999999
n=n?33.54:31.45
j=f+r*m+e*o*n
if(k>w&&k<v&&j>u&&j<h)return!0}}return!1},
$S:120}
A.bKM.prototype={
$1(d){return d<=0?0:Math.sqrt(220*d)},
$S:5}
A.h_r.prototype={
$7(d,e,f,g,h,i,j){return new A.fq(C.a([d,e,f,g],x.o),0,new A.h_s(h),i,j,6,2,0,!1)},
$S:z+112}
A.h_s.prototype={
$3(d,e,f){return A.mV(d,e,f,this.a+D.k.bf(f/7))},
$S:24}
A.h_p.prototype={
$3(d,e,f){var w=this.a,v=w.b
w=w.a
return A.vG(new A.q(d,e,f),this.b).a7(0,new A.q(v,0,w))},
$S:z+24}
A.h_q.prototype={
$2(d,e){var w=this
return A.vG(new A.q(d,e,0),w.a).a7(0,new A.q(w.b,w.c,w.d))},
$S:z+16}
A.fBP.prototype={
$8(d,e,f,g,h,i,j,k){var w=-g,v=new A.fBQ(d+f*h+w*i,f,w,e+g*h+f*i,g,f),u=-j/2,t=-k/2,s=j/2,r=k/2
this.a.Cn(v.$2(u,t),v.$2(s,t),v.$2(s,r),v.$2(u,r),D.bO,B.e8)},
$S:1790}
A.fBQ.prototype={
$2(d,e){var w=this
return new A.q(w.a+w.b*d+w.c*e,0.95,w.d+w.e*d+w.f*e)},
$S:z+16}
A.cBb.prototype={
$1(d){return d.d===this.a},
$S:z+31}
A.cBc.prototype={
$1(d){return d.r},
$S:z+122}
A.cBa.prototype={
$2(d,e){return D.k.aN(d.x,e.x)},
$S:z+113}
A.bKw.prototype={
$1(d){var w
if(d.r<0)w=d.e||d.c<60
else w=!1
return w},
$S:z+18}
A.bKF.prototype={
$3(d,e,f){var w=this.a
return A.mV(d,e,f,w.b.a+w.f+D.k.bf(f/7))},
$S:24}
A.bKG.prototype={
$3(d,e,f){var w=this.a
return A.mV(d,e,f,w.b.a+w.f+3+D.k.bf(f/7))},
$S:24}
A.bKH.prototype={
$3(d,e,f){var w=this.a
return A.mV(d,e,f,w.b.a+w.f+7+D.k.bf(f/7))},
$S:24}
A.bKI.prototype={
$3(d,e,f){return A.mV(d,e,f,this.a.b.a+2+D.k.bf(f/7))},
$S:24}
A.bKx.prototype={
$3(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=this.a,i=j.z
j=j.Q
w=e.a
v=e.b
u=new C.a3(0,0,0+w,0+v)
t=C.bs(u,D.it)
s=$.S()
r=C.I()
r.r=D.dG.gp(0)
d.az(t,r)
r=C.bs(u.cr(-6),D.k4)
t=C.I()
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
q.D(new C.bt())}j=C.I()
j.r=((t&1)===0?D.b8:D.eP).gp(0)
d.aI(q,j)
j=i===1?"L":""+i
l=C.fy(k,k,k,k,C.cS(k,k,k,k,k,k,k,k,k,C.l(k,k,D.bt,k,k,k,k,k,k,k,k,v*0.78,k,k,D.u,k,k,!0,k,k,k,k,k,k,k,k),j),D.a4,D.bY,k,D.dA,D.bW)
l.el()
j=l.b
i=j.c
j=j.a.c
l.a3(d,new C.t(w*0.62-i/2,v/2-j.gbb(j)/2))
return k},
$S:24}
A.bKy.prototype={
$3(d,e,f){return A.mV(d,e,f,1+D.k.bf(f/7))},
$S:24}
A.bKz.prototype={
$3(d,e,f){return A.mV(d,e,f,4+D.k.bf(f/7))},
$S:24}
A.bKA.prototype={
$3(d,e,f){var w=this.a>0?2:5
return A.mV(d,e,f,w+D.k.bf(f/7))},
$S:24}
A.bKB.prototype={
$3(d,e,f){return A.vF(d,e,f,"NGMY","Welcome")},
$S:24}
A.bKC.prototype={
$2(d,e){var w=this.a,v=C.T(d),u=new C.cO(new C.Z(d,new A.bKD(w),v.k("Z<1>")),new A.bKE(w),v.k("cO<1,G>")).cI(0,0,D.xE)
if(u===2)w="works but is NOT wired safely: open it and check every wire"
else w=u===1?"started: finish the wiring":e
return w},
$S:1791}
A.bKD.prototype={
$1(d){return!this.a.d[d]},
$S:34}
A.bKE.prototype={
$1(d){return this.a.e[d]},
$S:78}
A.bLm.prototype={
$1(d){return!d.f},
$S:z+18}
A.bLj.prototype={
$1(d){return d.b===this.a.a.a},
$S:z+19}
A.bLk.prototype={
$1(d){return d.b===this.a&&d.c===this.b},
$S:z+19}
A.bLl.prototype={
$1(d){return d.a<0},
$S:z+33}
A.bLq.prototype={
$1(d){var w,v,u,t
for(w=this.a.x,v=w.length,u=0;u<v;++u){t=w[u]
if(t.b===d)return t}return null},
$S:z+99}
A.bLo.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n=this,m=new A.bLp()
switch(d.a.a){case 0:w=n.a.$1("hospital")
if(w!=null)return new C.e2([w.c-34,w.d+52.5+26,3.141592653589793,"duty","\ud83e\ude7a On duty at the hospital"])
break
case 1:v=n.a
u=v.$1("cow")
t=u==null?v.$1("sheep"):u
if(t==null)t=v.$1("horse")
if(t!=null){v=t.c
u=v+34
s=t.d
r=s+22
return new C.e2([u,r,m.$4(u,r,v,s),"feed","\ud83c\udf3e Feeding the animals"])}break
case 2:q=n.a.$1("school")
if(q!=null)return new C.e2([q.c-24,q.d+52.5+26,3.141592653589793,"teach","\ud83d\udcda Teaching"])
break
case 3:t=n.a.$1("car")
if(t!=null)return new C.e2([t.c,t.d+34,3.141592653589793,"wash","\ud83e\uddfd Washing the car"])
break
case 4:q=n.a.$1("shop")
if(q!=null)return new C.e2([q.c+62,q.d+56,2.356194490192345,"cook","\ud83c\udf73 Cooking"])
break
case 5:p=n.a.$1("bench")
if(p!=null)return new C.e2([p.c,p.d+26,3.141592653589793,"rest","\ud83e\ude91 Resting"])
break
case 6:o=n.a.$1("flowers")
if(o!=null){v=o.c
u=v+30
s=o.d
r=s+28
return new C.e2([u,r,m.$4(u,r,v,s),"water","\ud83d\udca7 Watering the flowers"])}break}return new C.e2([-270+e*90,205,0,"",""])},
$S:z+82}
A.bLp.prototype={
$4(d,e,f,g){return Math.atan2(f-d,g-e)},
$S:248}
A.bLn.prototype={
$1(d){return d.b===this.a.a.a},
$S:z+19}
A.bLr.prototype={
$1(d){var w=d.c
return w==="bathroom"||w==="kitchen"},
$S:z+5}
A.dSS.prototype={
$0(){return this.b.d=this.a.a},
$S:0}
A.dST.prototype={
$1(d){return this.a.c8r()},
$S:11}
A.dT4.prototype={
$0(){},
$S:0}
A.dSZ.prototype={
$0(){return this.a.w=this.b},
$S:0}
A.dT_.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.dSY(w))},
$S:0}
A.dSY.prototype={
$0(){return this.a.w=null},
$S:0}
A.dSO.prototype={
$1(d){return B.aIV},
$S:z+34}
A.dSP.prototype={
$0(){},
$S:0}
A.dT7.prototype={
$1(d){return B.aIV},
$S:z+34}
A.dT8.prototype={
$0(){},
$S:0}
A.dT6.prototype={
$0(){var w=this.a
return w.m(new A.dT5(w,this.b))},
$S:0}
A.dT5.prototype={
$0(){return this.a.r=this.b},
$S:0}
A.dSN.prototype={
$0(){return this.a.ac0(this.b)},
$S:0}
A.dSU.prototype={
$0(){return this.a.J7(this.b.bfg(this.c))},
$S:0}
A.dSV.prototype={
$0(){return this.a.J7(this.b.aL9(this.c))},
$S:0}
A.dSW.prototype={
$0(){return this.a.J7(this.b.aDI(this.c))},
$S:0}
A.dSX.prototype={
$0(){return this.a.akj(this.b)},
$S:0}
A.dSR.prototype={
$1(d){var w,v,u=null,t=this.b,s=this.c,r=t.e[s],q=t.c
q===$&&C.c()
q=q[r.a].a
w=this.a
v=x.p
s=C.B(C.a([new A.acO(q.e,44,u),D.as,C.E(C.d("Bed "+(s+1)+": "+q.b,u,u,u,u,u,u,D.ht,u,u,u),1),w.PU("\ud83d\udc89 Treat",new A.dSQ(w,t,s),D.c0)],v),D.m,u,D.e,D.i,0,u,u)
t=r.b
return C.x(C.a([s,D.Q,w.WH("Care",t,t<30?D.ax:D.aJ),w.WH("Getting better",r.c,D.be)],v),D.E,u,D.e,D.i,0,D.p)},
$S:313}
A.dSQ.prototype={
$0(){return this.a.J7(this.b.bkq(this.c))},
$S:0}
A.dT1.prototype={
$0(){return this.a.J7(this.b.aEd("food"))},
$S:0}
A.dT2.prototype={
$0(){return this.a.J7(this.b.aEd("medicine"))},
$S:0}
A.dT3.prototype={
$0(){var w=0,v=C.j(x.H),u,t=this,s,r
var $async$$0=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:w=3
return C.b(A.aU9(),$async$$0)
case 3:$.Ed=null
s=t.a
if(s.c==null){w=1
break}r=s.f
if(r!=null)r.a4(0)
$.a4i=null
s.m(new A.dT0(s))
s.a_7()
case 1:return C.h(u,v)}})
return C.i($async$$0,v)},
$S:1}
A.dT0.prototype={
$0(){return this.a.d=null},
$S:0}
A.dT9.prototype={
$0(){return C.a5(this.a,!1).ik()},
$S:0}
A.dTa.prototype={
$1(d){return d.a>=0},
$S:z+33}
A.fDQ.prototype={
$2(d,e){var w
A:{if("black"===d){w=e.a===25?"The black wire carries the power (hot). It never goes on the green ground screw. Hot goes to a BRASS screw.":"The black (hot) wire goes on a BRASS screw, not on the silver one. Silver is for white (neutral)."
break A}if("white"===d){w=e.a===25?"The white wire is the neutral. The green screw is only for the ground wire. Neutral goes to a SILVER screw.":"The white (neutral) wire goes on a SILVER screw, not on brass. Brass is for the black (hot) wire."
break A}w="The bare copper ground wire only goes on the GREEN screw. It keeps you safe if something goes wrong."
break A}return w},
$S:z+2}
A.fDR.prototype={
$2(d,e){return d==="ground"?y.t:"A black (hot) wire never goes on the green ground screw. The two black wires go on the two BRASS screws."},
$S:z+2}
A.fDS.prototype={
$2(d,e){var w
if(e.e)w="Those are the LOAD screws. They are covered with tape because power must come in on the LINE side. If you wire the LOAD side the GFCI will not protect you."
else A:{if("black"===d){w="The black (hot) wire goes on the BRASS LINE screw."
break A}if("white"===d){w="The white (neutral) wire goes on the SILVER LINE screw."
break A}w=y.t
break A}return w},
$S:z+2}
A.fDT.prototype={
$2(d,e){var w
A:{if("black"===d){w="The black (hot) wire joins the fixture BLACK wire. Not the white one, and never the green ground."
break A}if("white"===d){w="The white (neutral) wire joins the fixture WHITE wire. Not the black one, and never the green ground."
break A}w="The bare copper ground wire joins the fixture GREEN ground wire only."
break A}return w},
$S:z+2}
A.fDU.prototype={
$2(d,e){var w
A:{if("black"===d){w="The black (hot) wire joins the fan BLACK wire. Not the white one, and never the green ground."
break A}if("white"===d){w="The white (neutral) wire joins the fan WHITE wire. Not the black one, and never the green ground."
break A}w="The bare copper ground wire joins the fan GREEN ground wire only."
break A}return w},
$S:z+2}
A.fCq.prototype={
$1(d){return d.a===this.a},
$S:z+42}
A.h01.prototype={
$1(d){return d.a},
$S:z+35}
A.fBC.prototype={
$1(d){var w
A:{if("hot"===d){w=B.VN
break A}if("neutral"===d){w=B.VO
break A}if("ground"===d){w=B.VP
break A}w=B.aYK
break A}return w},
$S:z+59}
A.fBD.prototype={
$1(d){var w
A:{if("hot"===d){w=B.K3
break A}if("neutral"===d){w=B.K4
break A}if("ground"===d){w=B.K5
break A}w=B.aT6
break A}return w},
$S:z+57}
A.fBA.prototype={
$1(d){return d.a===this.a.a},
$S:z+12}
A.fBB.prototype={
$1(d){return d.a===this.a.b},
$S:z+7}
A.fSj.prototype={
$1(d){return d.e==="hot"},
$S:z+7}
A.fSk.prototype={
$1(d){return d.e==="neutral"},
$S:z+7}
A.fCD.prototype={
$1(d){return D.d.b3(this.a.b,new A.fCE(d))},
$S:3}
A.fCE.prototype={
$1(d){return d.a===this.a},
$S:z+46}
A.fCA.prototype={
$2(d,e){return A.avy(e.b)>A.avy(d.b)?e:d},
$S:z+49}
A.fCB.prototype={
$1(d){return d.a===this.a.a},
$S:z+12}
A.fCC.prototype={
$1(d){return d.a===this.a.b},
$S:z+7}
A.fzQ.prototype={
$5(d,e,f,g,h){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=j.a
i.b=d
w=j.b
v=w.b
u=C.a7(v).k("cD<1,2>")
t=u.k("Z<M.E>")
s=C.C(new C.Z(new C.cD(v,u),new A.fzR(g),t),t.k("M.E"))
r=g==="ground"
q=r?B.tY:h
p=r?0.6:0.3
if(w.c>0){o=e.a7(0,B.hbt)
i.j9(A.aib(C.a([e,e.a7(0,B.h9k),o],x.o),4),0.12,q,!1,p,8)
return}if(s.length!==0){n=A.aQ8(j.c,D.d.gI(s).a,w)
w=A.pB(e,n,0.5)
v=n.a>0
m=w.a7(0,new A.q(v?0.5:-0.5,0.2,0.9))
w=e.a7(0,B.hfR)
if(j.d)v=0
else v=v?0.06:-0.06
l=A.aib(C.a([e,w,m,n.a7(0,new A.q(v,0,0.08)),n],x.o),5)
k=D.d.dt(l,0,D.k.bf(l.length*0.8))
i.j9(k,0.12,q,!1,p,8)
if(!r)i.j9(D.d.fM(l,k.length-1),0.08639999999999999,B.tY,!1,0.6,8)}else{l=A.aib(C.a([e,e.a7(0,B.h5n),A.pB(e,f,0.6),f],x.o),5)
k=r?l:D.d.dt(l,0,D.k.bf(l.length*0.86))
i.j9(k,0.12,q,!1,p,8)
if(!r)i.j9(D.d.fM(l,k.length-1),0.08639999999999999,B.tY,!1,0.6,8)}},
$S:z+50}
A.fzR.prototype={
$1(d){return d.b===this.a},
$S:712}
A.fkR.prototype={
$2(d,e){var w,v=this.a
v.b=d
w=A.Dl(e,0.9,6)
if(this.b)v.j9(w,0.2,B.Yz,!1,0.35,10)
this.c.push(D.d.gak(w))},
$S:z+51}
A.h00.prototype={
$1(d){return d.a===this.a},
$S:z+42}
A.fma.prototype={
$6$taped(d,e,f,g,h,i){var w,v,u,t=this.a
t.e=0.9
t.b=d
w=this.b
v=w.a+e*0.75
u=w.b+f
w=w.c-0.45
t.aQ(new A.q(v,u,w),B.hhs,h,0.7)
t.dm(new A.q(v,u,w),new A.q(v+e*0.22,u,w),0.17,g,0.9,12)
t.aG(new A.q(v+e*0.23,u,w),B.hdJ,B.xT)
if(i)t.aQ(new A.q(v+e*0.05,u,w),B.hdz,D.bt,0.2)},
$5(d,e,f,g,h){return this.$6$taped(d,e,f,g,h,!1)},
$S:1793}
A.frI.prototype={
$5(d,e,f,g,h){var w=new A.frJ(this.a,d,Math.cos(h),Math.sin(h),e),v=-f/2,u=-g/2,t=f/2,s=g/2
this.b.Cn(w.$2(v,u),w.$2(t,u),w.$2(t,s),w.$2(v,s),B.ai4,B.ig)},
$4(d,e,f,g){return this.$5(d,e,f,g,0)},
$S:1794}
A.frJ.prototype={
$2(d,e){var w=this,v=w.a,u=w.c,t=w.d
return new A.q(v.a+w.b+d*u-e*t,v.b+w.e+d*t+e*u,v.c+0.5+0.012)},
$S:z+16}
A.frH.prototype={
$2(d,e){var w=this.b
return this.a.dv(w.a7(0,new A.q(d,e,0.5)),w.a7(0,new A.q(d,e,0.512)),0.065,B.ai4,12)},
$S:199}
A.frG.prototype={
$2(d,e){var w=this.a
w.$4(d,e,0.075,0.3)
w.$4(d+0.09,e-0.115,0.2,0.075)},
$S:199}
A.fyx.prototype={
$5(d,e,f,g,h){var w,v,u,t=this.a
t.e=0.9
t.b=d
w=this.b
v=w.a+e
u=w.b+f
w=w.c
t.dm(new A.q(v,u,w+0.43),new A.q(v,u,w+0.78),0.3,g,0.9,14)
w+=0.79
t.aG(new A.q(v,u,w),B.h8h,B.xT)
t.aG(new A.q(v,u,w),B.hbX,B.xT)},
$S:1795}
A.fDV.prototype={
$2(d,e){var w
if(d==="ground")w=y.t
else w=e.a===25?y.T:"A double-pole switch has two LINE screws on top (power in) and two LOAD screws on the bottom (power out to the heater). Each leg goes straight down the same side: left leg on the left screws, right leg on the right ones."
return w},
$S:z+2}
A.fDW.prototype={
$2(d,e){var w
if(d==="ground")w=y.t
else if(e.a===25)w=y.T
else w=d==="common"?"The COMMON wire does not go on a traveler screw. It goes on the odd-coloured COMMON screw.":"The travelers go on the two brass TRAVELER screws. The COMMON screw is for the black power wire only."
return w},
$S:z+2}
A.fDX.prototype={
$2(d,e){var w
if(d==="ground")w=y.t
else w=e.a===25?"A traveler never goes on the green ground screw.":"A four-way has a pair of screws for the travelers coming IN (top) and a pair for the travelers going OUT (bottom). Do not mix the two pairs."
return w},
$S:z+2}
A.fDY.prototype={
$2(d,e){var w
A:{if("ground"===d){w=y.t
break A}if("neutral"===d){w="The white neutral wire goes on the silver NEUTRAL screw only."
break A}if(e.a===25)w=y.T
else w=d==="line"?"The wire from the panel is the LINE: it goes on the LINE screw.":"The wire to the light is the LOAD: it goes on the LOAD screw."
break A}return w},
$S:z+2}
A.fDZ.prototype={
$2(d,e){var w
if(d==="ground")w=y.t
else if(e.a===25)w=y.T
else w=d==="feed"?"The feed goes on the FEED screw, where the two switches are joined.":"The wires to the lights go on the separate screws, one for each switch."
return w},
$S:z+2}
A.fE_.prototype={
$2(d,e){var w,v=y.T
A:{if("ground"===d){w=y.t
break A}if("neutral"===d){w="The white neutral wire goes on a SILVER screw."
break A}if("always"===d){w=e.a===25?v:"The always-hot wire goes on the BOTTOM brass screw. The top one is for the switched wire."
break A}w=e.a===25?v:"The switched hot wire (red) goes on the TOP brass screw."
break A}return w},
$S:z+2}
A.fE0.prototype={
$2(d,e){var w
A:{if("ground"===d){w=y.t
break A}if("neutral"===d){w=y.I
break A}w=e.a===25?y.T:y.S
break A}return w},
$S:z+2}
A.fE1.prototype={
$2(d,e){return d==="neutral"?y.I:"The black and red hot wires go on the two brass screws, X and Y."},
$S:z+2}
A.fE2.prototype={
$2(d,e){var w
if(d==="ground")w=y.t
else w=e.a===25?y.T:"Both hot wires go on the two brass screws."
return w},
$S:z+2}
A.fE3.prototype={
$2(d,e){var w
A:{if("isoground"===d){w="The isolated ground wire only goes on the green screw with the orange triangle."
break A}if("neutral"===d){w=y._
break A}w=e.a===25?"A hot wire never goes on the ground screw.":y.u
break A}return w},
$S:z+2}
A.fDJ.prototype={
$2(d,e){return A.fkD(d,e,!0)},
$S:z+2}
A.fDK.prototype={
$2(d,e){return A.fkD(d,e,!1)},
$S:z+2}
A.fDL.prototype={
$2(d,e){return A.fkD(d,e,!0)},
$S:z+2}
A.fDM.prototype={
$2(d,e){return A.fkD(d,e,!1)},
$S:z+2}
A.fDN.prototype={
$2(d,e){var w
A:{if("ground"===d){w=y.t
break A}if("neutral"===d){w=y._
break A}w=e.a===25?y.T:y.u
break A}return w},
$S:z+2}
A.fDO.prototype={
$2(d,e){var w
A:{if("neutral"===d){w="The white neutral wire goes on the MIDDLE terminal, the one with the ground strap."
break A}if("hot1"===d){w=y.J
break A}w="The red wire goes on the RIGHT terminal."
break A}return w},
$S:z+2}
A.fDP.prototype={
$2(d,e){var w
A:{if("ground"===d){w="The green ground wire goes on the frame screw, where the strap was."
break A}if("neutral"===d){w="The white neutral wire goes on the MIDDLE terminal."
break A}if("hot1"===d){w=y.J
break A}w="The red wire goes on the RIGHT terminal."
break A}return w},
$S:z+2}
A.fzC.prototype={
$1(d){return d.a===this.a},
$S:z+26}
A.fzD.prototype={
$0(){return B.amX},
$S:z+53}
A.h_Y.prototype={
$1(d){var w=d>60?62:99
return Math.min(d*0.5625,w)},
$S:5}
A.h_V.prototype={
$1(d){return d>40?30+d/2:58},
$S:5}
A.h_W.prototype={
$2(d,e){return D.k.aN(d.a,e.a)},
$S:1796}
A.h_X.prototype={
$2(d,e){var w=this.a
if(e-d>w.a-w.b){w.b=d
w.a=e}},
$S:199}
A.bUG.prototype={
$1(d){return d},
$S:117}
A.bUF.prototype={
$1(d){return B.f5O.t(0,d.b)},
$S:z+4}
A.bVg.prototype={
$1(d){return d.a==="Jobs"},
$S:z+55}
A.bVh.prototype={
$1(d){return new A.oq(!1,"back",d,5)},
$S:z+56}
A.bVi.prototype={
$4(d,e,f,g){return!D.d.b3(this.a.x,new A.bVj(d,f,e,g))},
$2(d,e){return this.$4(d,e,340,270)},
$3(d,e,f){return this.$4(d,e,f,270)},
$S:1797}
A.bVj.prototype={
$1(d){var w=this,v=d.b
return!D.d.t(B.a5n,v)&&!D.d.t(B.I9,v)&&Math.abs(d.c-w.a)<w.b&&Math.abs(d.d-w.c)<w.d},
$S:z+4}
A.bVk.prototype={
$4(d,e,f,g){var w,v,u,t,s,r,q,p,o,n
for(w=this.a,v=w.length,u=f/2+90,t=g/2+20,s=0;s<v;++s){r=w[s]
if(Math.abs(r.c-d)<u){q=r.d
p=q>e?70:30
p=Math.abs(q-e)<t+p
q=p}else q=!1
if(q)return!1}for(w=this.b.x,v=w.length,s=0;s<w.length;w.length===v||(0,C.L)(w),++s){o=w[s]
u=o.b
if(D.d.t(B.RZ,u)||u==="roundabout"||u==="rug"||u==="flowers")continue
n=B.hE.h(0,u)
if(Math.abs(o.c-d)<(f+n.c)/2+300){u=o.d
t=n.d
q=u>e?280:220
q=Math.abs(u-e)<(g+t)/2+q
u=q}else u=!1
if(u)return!1}return!0},
$S:713}
A.bVo.prototype={
$4(d,e,f,g){var w,v,u,t,s,r,q,p,o,n,m,l,k,j
if(Math.abs(d)>1150||e<-600||e>1450)return!1
for(w=this.a.x,v=w.length,u=f/2+40,t=g/2+40,s=0;s<w.length;w.length===v||(0,C.L)(w),++s){r=w[s]
q=r.b
if(q==="rug"||q==="flowers"||q==="pond")continue
p=B.hE.h(0,q)
p.toString
o=(r.e&1)===1
n=o?p.d:p.c
m=o?p.c:p.d
if(Math.abs(r.c-d)<(f+n)/2+34&&Math.abs(r.d-e)<(g+m)/2+34)return!1
if(B.f61.t(0,q)){l=r.e*3.141592653589793/2
q=r.c
o=Math.sin(l)
p=p.d/2+30
k=r.d
j=Math.cos(l)
if(Math.abs(q+o*p-d)<u&&Math.abs(k+j*p-e)<t)return!1}}return!0},
$S:713}
A.bVl.prototype={
$3(d,e,f){var w,v,u,t,s,r,q,p,o,n={},m=B.hE.h(0,d)
m.toString
w=n.a=0
v=this.a
u=new A.bVn(n,v,d)
for(t=f.length,s=this.b,r=m.c,m=m.d;w<t;++w){q=f[w]
p=q.a
o=q.b
if(n.a>=e)return
if(s.$4(p,o,r,m))u.$2(p,o)}v=v.x
o=-500
for(;;){if(!(o<1400&&n.a<e))break
p=-1100
for(;;){if(!(p<=1100&&n.a<e))break
A:{if(D.d.b3(v,new A.bVm(d,p,o)))break A
if(s.$4(p,o,r,m))u.$2(p,o)}p+=110}o+=100}},
$S:1799}
A.bVn.prototype={
$2(d,e){var w=this.b,v=this.c
w.dB(0,v,d,e)
if(v==="ubstation")w.dB(0,"car",d+96,e+6);++this.a.a},
$S:199}
A.bVm.prototype={
$1(d){return d.b===this.a&&Math.abs(d.c-this.b)<420&&Math.abs(d.d-this.c)<420},
$S:z+4}
A.bVs.prototype={
$1(d){return d.gkR()},
$S:z+5}
A.bVr.prototype={
$1(d){var w=d.c
return(w==="bathroom"||w==="kitchen")&&d.gjT()},
$S:z+5}
A.bVq.prototype={
$1(d){var w=d.c
return w==="bathroom"||w==="kitchen"},
$S:z+5}
A.bVp.prototype={
$1(d){return d.gkR()&&d.gjT()},
$S:z+5}
A.eeC.prototype={
$1(d){return!(d.gkR()&&d.gjT())},
$S:z+5}
A.eez.prototype={
$1(d){var w,v=this.a.a.f
A:{if("wiring"===v){w=!d.gkR()
break A}if("plumbing"===v){w=!d.gjT()
break A}w=!(d.gkR()&&d.gjT())
break A}return w},
$S:z+5}
A.eeA.prototype={
$1(d){var w,v,u,t,s,r,q=this.a,p=q.ghF()
if(Date.now()<0){if(q.c!=null)q.m(new A.eey())
return}if(p==null||q.c==null||q.cx!=null||q.ex>0)return
w=q.d
w===$&&C.c()
v=w.d
v===$&&C.c()
u=p.bfr(w,v[w.e].a)
w=C.a([],x.s)
for(v=u.length,t=0;t<u.length;u.length===v||(0,C.L)(u),++t){s=u[t]
w.push(""+s.a+":"+D.k.V(s.c)+":"+D.k.V(s.d)+":"+s.x+":"+s.Q)}r=D.d.aH(w,"|")
if(q.aJ==null&&r!==q.i1){q.i1=r
q.m(q.gj_())}w=p.f
if(w.length!==0&&D.d.gI(w)!==q.fy){w=D.d.gI(w)
q.fy=w
q.iL(w)}},
$S:11}
A.eey.prototype={
$0(){},
$S:0}
A.eeB.prototype={
$1(d){var w,v=this.a
if(v.c==null)return
w=v.d
w===$&&C.c()
if(w.a.length!==0)v.iL(v.c2k())
else{w=v.a.f
if(w.length!==0){A:{if("wiring"===w){w="This room needs wiring: press the Wiring button, or tap the red outlet or the light."
break A}if("plumbing"===w){w="This room needs plumbing: press the Plumbing button, or tap the toilet or the sink."
break A}w="Walk through the house and fix what the signs say is wrong."
break A}v.iL(w)}}},
$S:8}
A.edl.prototype={
$0(){var w=this.a
w.ax=this.b
w.ay=this.c},
$S:0}
A.edm.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.edk(w))},
$S:0}
A.edk.prototype={
$0(){return this.a.ax=null},
$S:0}
A.edn.prototype={
$0(){var w=this.a
w.r=this.b
w.Q=0
w.as=-1
w.at=0
w.iK()},
$S:0}
A.ebR.prototype={
$0(){var w=this.a,v=w.d
v===$&&C.c()
v.e=this.b
w.Q=0
w.as=-1
w.at=0
w.ax=null
w.iK()},
$S:0}
A.edP.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.d
w===$&&C.c()
u=w[u.e]
u.fy=!u.fy
v.iK()},
$S:0}
A.ecO.prototype={
$0(){return this.a.k3=!0},
$S:0}
A.ecP.prototype={
$0(){var w=this.a,v=this.b
w.Q=v-100
w.at=v
w.iK()},
$S:0}
A.ecQ.prototype={
$0(){var w=this.a,v=this.b
w.as=v-300
w.at=v},
$S:0}
A.ecR.prototype={
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
A.ecS.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.d
w===$&&C.c()
w[u.e].p2=!0
v.iK()},
$S:0}
A.ebk.prototype={
$1(d){var w,v,u,t,s,r=this,q=null,p=C.d("Door to "+r.b,q,q,q,q,q,q,D.de,q,q,q),o=r.a,n=o.d
n===$&&C.c()
w=n.d
w===$&&C.c()
v=r.c
u=C.d(w[n.e].at.t(0,v)?"The door is open.":"The door is closed.",q,q,q,q,q,q,D.mp,q,q,q)
n=o.d
w=n.d
w===$&&C.c()
t=C.X(w[n.e].at.t(0,v)?B.bLS:B.bM3,q,q,q,q,q)
n=o.d
w=n.d
w===$&&C.c()
s=x.p
return C.bn(!0,new C.D(D.bQ,C.x(C.a([p,D.au,u,D.ae,C.bY(D.bG,C.a([C.di(t,C.d(w[n.e].at.t(0,v)?"Close the door":"Open the door",q,q,q,q,q,q,q,q,q,q),new A.ebi(o,d,v),q),C.ex(D.aqc,B.fG9,new A.ebj(o,d,v,r.d),q)],s),D.br,q,10,10)],s),D.E,q,D.e,D.P,0,D.p),q),!0,!1,D.af,!0,!0)},
$S:27}
A.ebi.prototype={
$0(){var w,v,u
C.a5(this.b,!1).O(null)
w=this.a
v=this.c
w.m(new A.ebh(w,v))
w=w.d
w===$&&C.c()
u=w.d
u===$&&C.c()
A.fQ(u[w.e].at.t(0,v)?700:450,70,0.25,"tri")},
$S:0}
A.ebh.prototype={
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
A.ebj.prototype={
$0(){var w,v,u=this
C.a5(u.b,!1).O(null)
w=u.a
v=u.c
w.m(new A.ebf(w,v))
A.fQ(700,70,0.25,"tri")
C.bP(D.m5,new A.ebg(w,v,u.d),x.P)},
$S:0}
A.ebf.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.d
w===$&&C.c()
w[u.e].at.M(0,this.b)
v.iK()},
$S:0}
A.ebg.prototype={
$0(){var w=this.a
if(w.c==null)return
w.m(new A.ebe(w,this.b))
w.AD(this.c)},
$S:12}
A.ebe.prototype={
$0(){var w,v=this.a.d
v===$&&C.c()
w=v.d
w===$&&C.c()
return w[v.e].at.W(0,this.b)},
$S:0}
A.ebt.prototype={
$0(){return this.a.eu=!0},
$S:0}
A.ebu.prototype={
$0(){var w=this.a
w.f2=!0
w.fB=!1
w.R8=!w.p4},
$S:0}
A.ebv.prototype={
$0(){var w=this.a
w.R8=w.f2=!1},
$S:0}
A.ecH.prototype={
$2(d,e){var w=null,v=D.w.j(0.55),u=C.J(D.bU,D.r,1)
return C.aA(w,C.p(w,C.X(d,D.c,w,w,w,22),D.f,w,w,new C.o(v,w,u,w,w,w,D.a6),w,44,w,D.Gm,w,w,w,44),D.y,!1,w,new A.ecJ(this.a),w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,e,w,w,w,w,w,w,!1,D.a3)},
$S:446}
A.ecJ.prototype={
$0(){var w=this.a
return w.m(new A.ecI(w))},
$S:0}
A.ecI.prototype={
$0(){return this.a.fB=!0},
$S:0}
A.ecK.prototype={
$0(){var w=this.a
return w.m(new A.ecG(w))},
$S:0}
A.ecG.prototype={
$0(){return this.a.fB=!1},
$S:0}
A.ecL.prototype={
$0(){var w=this.a
return w.p4?w.a2S():w.m(new A.ecF(w))},
$S:0}
A.ecF.prototype={
$0(){return this.a.R8=!0},
$S:0}
A.ecM.prototype={
$0(){var w=this.a
return w.m(new A.ecE(w))},
$S:0}
A.ecE.prototype={
$0(){var w=this.a
return w.jO=!w.jO},
$S:0}
A.ecN.prototype={
$0(){var w=this.a
return w.m(new A.ecD(w))},
$S:0}
A.ecD.prototype={
$0(){return this.a.ai=!0},
$S:0}
A.eaV.prototype={
$0(){var w=this.a
return w.m(new A.eaW(w))},
$S:0}
A.eaW.prototype={
$0(){return this.a.ai=!1},
$S:0}
A.ebF.prototype={
$2(d,e){var w=null,v=D.w.j(0.55),u=C.J(D.bU,D.r,1)
return C.aA(w,C.p(w,C.X(d,D.c,w,w,w,20),D.f,w,w,new C.o(v,w,u,w,w,w,D.a6),w,40,w,D.iF,w,w,w,40),D.y,!1,w,new A.ebH(this.a),w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,e,w,w,w,w,w,w,!1,D.a3)},
$S:446}
A.ebH.prototype={
$0(){var w=this.a
return w.m(new A.ebG(w))},
$S:0}
A.ebG.prototype={
$0(){return this.a.fB=!0},
$S:0}
A.ebI.prototype={
$0(){var w=this.a
return w.m(new A.ebE(w))},
$S:0}
A.ebE.prototype={
$0(){return this.a.fB=!1},
$S:0}
A.ebJ.prototype={
$0(){var w,v,u=this.a
u.m(new A.ebD(u))
w=u.d
w===$&&C.c()
v=w.d
v===$&&C.c()
if(v[w.e].c!=="outside")u.y3()},
$S:0}
A.ebD.prototype={
$0(){return this.a.eu=!1},
$S:0}
A.ebK.prototype={
$0(){var w=this.a
return w.m(new A.ebC(w))},
$S:0}
A.ebC.prototype={
$0(){var w=this.a
return w.ab=w.ab===1?3:1},
$S:0}
A.ebL.prototype={
$0(){var w=this.a
return w.m(new A.ebB(w))},
$S:0}
A.ebB.prototype={
$0(){var w=this.a
return w.jO=!w.jO},
$S:0}
A.ebM.prototype={
$0(){var w=this.a
return w.m(new A.ebA(w))},
$S:0}
A.ebA.prototype={
$0(){return this.a.ai=!0},
$S:0}
A.ebN.prototype={
$0(){var w=this.a
return w.p4?w.a2S():w.m(new A.ebz(w))},
$S:0}
A.ebz.prototype={
$0(){return this.a.R8=!0},
$S:0}
A.edN.prototype={
$2$mine(d,e){var w=null,v=e?D.a8:D.a5,u=e?D.bl:D.e9,t=C.m(18)
return new C.bM(v,w,w,C.p(w,C.d(d,w,w,w,w,w,w,B.aU6,w,w,w),D.f,w,B.adi,new C.o(u,w,w,t,w,w,D.n),w,w,w,D.ct,D.iq,w,w,w),w)},
$1(d){return this.$2$mine(d,!1)},
$S:1800}
A.edO.prototype={
$1(d){var w=this,v=null,u=w.b,t=u.b,s=x.p,r=C.B(C.a([C.ha(u.e.c,v,C.d(t[0],v,v,v,v,v,v,D.iu,v,v,v),v,18),D.as,C.d(t,v,v,v,v,v,v,D.k8,v,v,v),D.b2,B.fRR],s),D.m,v,D.e,D.i,0,v,v),q=w.c,p=w.d,o=q.$1("Hi, it's "+t+". "+p.d),n=w.e,m="Please come to "+n,l=w.a
return C.bn(!0,new C.D(Ac.yt,C.x(C.a([r,A9.Na,o,q.$1(p.c==="power"?m+" and fix the wiring. I can't stay in the dark.":m+" and fix the leak before it floods."),q.$1("I'll pay "+p.e+" points. Thank you!"),q.$2$mine("On my way!",!0),D.am,C.bY(D.bG,C.a([C.di(B.bWB,C.d("Show me where "+t+" is",v,v,v,v,v,v,v,v,v,v),new A.edL(l,d,p,u),v),C.di(B.bZu,C.d("Go and fix it ("+n+")",v,v,v,v,v,v,v,v,v,v),new A.edM(l,d,w.f,n),v)],s),D.br,v,8,10)],s),D.E,v,D.e,D.P,0,D.p),v),!0,!1,D.af,!0,!0)},
$S:27}
A.edL.prototype={
$0(){var w,v,u,t,s=this
C.a5(s.b,!1).O(null)
w=s.a
v=w.fr
u=C.T(v).k("Z<1>")
t=C.C(new C.Z(v,new A.edK(s.c),u),u.k("M.E"))
if(t.length!==0){v=w.d
v===$&&C.c()
u=v.d
u===$&&C.c()
v=u[v.e].c==="outside"}else v=!1
if(v){v=w.e
v===$&&C.c()
v.zK(160,new A.q(D.d.gI(t).c,30,D.d.gI(t).d))}w.ei(s.d.b+" is the one with the phone sign.",!0)},
$S:0}
A.edK.prototype={
$1(d){return d.a===this.a.b},
$S:z+14}
A.edM.prototype={
$0(){var w,v=this
C.a5(v.b,!1).O(null)
w=v.a
if(w.aL)w.a2T()
w.eu=!1
w.AD(v.c)
w.ei("You are in "+v.d+". Fix the problem with the Wiring or Plumbing button.",!0)},
$S:0}
A.ec4.prototype={
$0(){var w=this.a
w.x=!0
w.z=!1
w.r="ceiling"
w.iK()},
$S:0}
A.e9U.prototype={
$1(d){return d.c==="outside"},
$S:z+5}
A.eef.prototype={
$1(d){return d.c==="outside"},
$S:z+5}
A.eak.prototype={
$0(){},
$S:0}
A.ec_.prototype={
$0(){var w=this.a
return w.m(new A.ebZ(w))},
$S:0}
A.ebZ.prototype={
$0(){return this.a.id=!1},
$S:0}
A.ec0.prototype={
$0(){var w=this.a
return w.m(new A.ebY(w))},
$S:0}
A.ebY.prototype={
$0(){return this.a.id=!1},
$S:0}
A.eeg.prototype={
$1(d){var w=this.b
return d.d===this.a.aqI(w.f,w.r)},
$S:z+31}
A.eee.prototype={
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
return D.k.aN((m-j)*(m-w)+(v-u)*(v-t),(s-r)*(s-q)+(p-o)*(p-l))},
$S:z+17}
A.edr.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=d.a==="tank"?A.h9Z(l.a.c5.b):d.e,i=l.b
i=i==null?k:i.r
w=(i==null?0:i)>=j
i=l.c
v=i?112:1/0
u=i?8:12
t=i?8:10
s=D.c.j(0.07)
r=C.m(16)
q=C.J(w?D.bt.j(0.5):D.bz,D.r,1)
p=d.b
o=d.c
n=d.d
if(i){i=C.d(p,k,k,k,k,k,k,D.x4,k,k,k)
o=C.d(o,k,1,D.a1,k,k,k,D.Kt,D.K,k,k)
n=C.d(n,k,2,D.a1,k,k,k,B.fnq,D.K,k,k)
p=w?D.bt:D.bz
m=C.m(12)
i=C.x(C.a([i,D.bF,o,n,D.fG,C.p(k,C.d(""+j+" \u2b50",k,k,k,k,k,k,C.l(k,k,w?D.w:D.bU,k,k,k,k,k,k,k,k,13,k,k,D.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),D.f,k,k,new C.o(p,k,k,m,k,k,D.n),k,k,k,k,D.Gp,k,k,k)],x.p),D.m,k,D.e,D.P,0,D.p)}else{i=C.d(p,k,k,k,k,k,k,D.n2,k,k,k)
p=x.p
n=C.E(C.x(C.a([C.d(o,k,k,k,k,k,k,D.nK,k,k,k),C.d(n,k,k,k,k,k,k,B.aTz,k,k,k)],p),D.E,k,D.e,D.i,0,D.p),1)
o=w?D.bt:D.bz
m=C.m(14)
i=C.B(C.a([i,D.as,n,C.p(k,C.d(""+j+" \u2b50",k,k,k,k,k,k,C.l(k,k,w?D.w:D.bU,k,k,k,k,k,k,k,k,k,k,k,D.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),D.f,k,k,new C.o(o,k,k,m,k,k,D.n),k,k,k,k,D.nt,k,k,k)],p),D.m,k,D.e,D.i,0,k,k)}return C.aA(k,C.p(k,i,D.f,k,k,new C.o(s,k,q,r,k,k,D.n),k,k,k,D.ct,new C.P(u,t,u,t),k,k,v),D.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new A.eds(l.a,d),k,k,k,k,k,k,!1,D.a3)},
$S:z+124}
A.eds.prototype={
$0(){return this.a.aPI(this.b)},
$S:0}
A.edq.prototype={
$2(d,e){var w,v,u,t=null,s=x.p,r=C.a([new C.D(B.byv,C.d(d,t,t,t,t,t,t,B.ftJ,t,t,t),t)],s)
if(this.a){s=C.a([],s)
for(w=e.length,v=this.b,u=0;u<w;++u)s.push(v.$1(e[u]))
r.push(C.bY(D.bG,s,D.br,t,0,8))}else for(s=e.length,w=this.b,u=0;u<s;++u)r.push(w.$1(e[u]))
return C.x(r,D.E,t,D.e,D.P,0,D.p)},
$S:z+63}
A.edp.prototype={
$0(){var w=this.a
return w.m(new A.edo(w))},
$S:0}
A.edo.prototype={
$0(){return this.a.k2=!1},
$S:0}
A.eco.prototype={
$2(d,e){var w=null,v=e.j(0.2),u=C.m(10)
return C.p(w,C.d(d,w,w,w,w,w,w,C.l(w,w,e,w,w,w,w,w,w,w,w,11.5,w,w,D.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),D.f,w,w,new C.o(v,w,w,u,w,w,D.n),w,w,w,w,D.fP,w,w,w)},
$S:1801}
A.ecp.prototype={
$1(d){return B.hE.h(0,d.b).a},
$S:z+64}
A.ecl.prototype={
$1(d){var w,v,u,t,s=this,r=null,q=d.c,p=A.yP(q),o=D.k.V(Math.sqrt(Math.pow(p.a-s.b,2)+Math.pow(p.b-s.c,2))/10),n=D.c.j(0.07),m=C.m(16),l=C.J(D.bz,D.r,1),k=d.b,j=C.d(A.L9(k).b,r,r,r,r,r,r,D.n2,r,r,r),i=s.d
k=C.d(d.w?"\ud83d\ude91 "+A.L9(k).c+": "+C.w(i.$1(q))+" \u2192 "+C.w(i.$1(d.d))+" (somebody was run over)":A.L9(k).c+": "+C.w(i.$1(q))+" \u2192 a house",r,r,r,r,r,r,B.aV3,r,r,r)
w=s.e
v=w.$2(""+d.e+" points",D.bt)
u=w.$2(""+o+" m to the shop",D.aJ)
p=A.yP(q)
t=A.yP(d.d)
q=x.p
w=C.E(C.x(C.a([k,D.cS,C.bY(D.bG,C.a([v,u,w.$2(""+D.k.V(Math.sqrt(Math.pow(p.a-t.a,2)+Math.pow(p.b-t.b,2))/10)+" m trip",D.be)],q),D.br,r,0,6)],q),D.E,r,D.e,D.i,0,D.p),1)
k=s.f!=null
i=k?r:new A.ecn(s.a,s.r,d,i)
v=k?D.bz:D.bt
u=C.m(14)
return C.p(r,C.B(C.a([j,D.as,w,D.ad,C.aA(r,C.p(r,C.d("Take",r,r,r,r,r,r,C.l(r,r,k?D.bU:D.w,r,r,r,r,r,r,r,r,r,r,r,D.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),D.f,r,r,new C.o(v,r,r,u,r,r,D.n),r,r,r,r,D.iq,r,r,r),D.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,i,r,r,r,r,r,r,!1,D.a3)],q),D.m,r,D.e,D.i,0,r,r),D.f,r,r,new C.o(n,r,l,m,r,r,D.n),r,r,r,D.ct,D.bT,r,r,r)},
$S:z+65}
A.ecn.prototype={
$0(){var w=this,v=w.c,u=w.a
if(w.b.cZd(0,v,u.CW.gig()/1000)){u.m(new A.ecm(u))
if(!u.aL)u.S9()
u.ei(A.L9(v.b).b+" Order taken: go to the "+w.d.$1(v.c).toLowerCase()+" (follow the yellow line), then to the house.",!0)}},
$S:0}
A.ecm.prototype={
$0(){return this.a.go=!1},
$S:0}
A.ecj.prototype={
$0(){var w=this.a
return w.m(new A.eci(w))},
$S:0}
A.eci.prototype={
$0(){return this.a.go=!1},
$S:0}
A.eck.prototype={
$0(){var w=this.a
return w.m(new A.ech(w,this.b))},
$S:0}
A.ech.prototype={
$0(){this.b.a4(0)
this.a.ei("Order given back.",!0)},
$S:0}
A.ebO.prototype={
$0(){return this.a.k3=!1},
$S:0}
A.ebP.prototype={
$0(){return this.a.k3=!1},
$S:0}
A.edh.prototype={
$0(){return A.fQ(1175,220,0.3,"tri")},
$S:0}
A.ebr.prototype={
$0(){var w=this.a
return w.m(new A.ebq(w))},
$S:0}
A.ebq.prototype={
$0(){return this.a.k3=!1},
$S:0}
A.ebs.prototype={
$0(){return this.a.bUp(this.b)},
$S:0}
A.ebd.prototype={
$4(d,e,f,g){var w=-d,v=this.a
return 0.5*(2*e+(w+f)*v+(2*d-5*e+4*f-g)*v*v+(w+3*e-3*f+g)*v*v*v)},
$S:248}
A.ec5.prototype={
$1(d){return d.c==="outside"},
$S:z+5}
A.edt.prototype={
$0(){var w=this.a
w.R8=!1
w.y1=null
w.p4=!0
w.rx=this.b
w.ry=-1},
$S:0}
A.ebp.prototype={
$2(d,e){return d[D.o.E(e,0,d.length-1)]},
$S:z+66}
A.edF.prototype={
$0(){var w=this.a
w.p4=!1
w.aJ=null
w.iK()},
$S:0}
A.ebn.prototype={
$4(d,e,f,g){var w=null,v=D.c.j(0.07),u=C.m(16),t=C.J(D.bz,D.r,1),s=x.p
return C.aA(w,C.p(w,C.B(C.a([C.d(d,w,w,w,w,w,w,D.n2,w,w,w),D.bc,C.E(C.x(C.a([C.d(e,w,w,w,w,w,w,D.ht,w,w,w),C.d(f,w,w,w,w,w,w,D.hs,w,w,w)],s),D.E,w,D.e,D.i,0,D.p),1),A4.Pc],s),D.m,w,D.e,D.i,0,w,w),D.f,w,w,new C.o(v,w,t,u,w,w,D.n),w,w,w,D.jz,D.bg,w,w,w),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new A.ebo(this.a,g),w,w,w,w,w,w,!1,D.a3)},
$S:1802}
A.ebo.prototype={
$0(){return this.a.czf(this.b)},
$S:0}
A.ebm.prototype={
$0(){var w=this.a
return w.m(new A.ebl(w))},
$S:0}
A.ebl.prototype={
$0(){return this.a.R8=!1},
$S:0}
A.ebV.prototype={
$1(d){return d.c==="outside"},
$S:z+5}
A.edE.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&C.c()
w=t[this.b]
v=u.at.h(0,w.a)
if(v==null||!A.h5C(w.b,v.a))return 0
return v.b.c<2?1:2},
$S:93}
A.eet.prototype={
$1(d){return d},
$S:117}
A.eaX.prototype={
$1(d){return d},
$S:117}
A.ebS.prototype={
$0(){var w=A.csY(0,null,!1,this.a.a*13+5+this.b.f,!0)
w.amo()
return w},
$S:z+67}
A.ebT.prototype={
$1(d){return A.ciz(!1,!1,this.a,!1)},
$S:z+41}
A.ebU.prototype={
$1(d){return d.length!==0},
$S:3}
A.ebx.prototype={
$0(){return new A.CC(C.U(x.S,x.N))},
$S:z+69}
A.eby.prototype={
$1(d){return new A.E0("light",this.a,null)},
$S:z+27}
A.ec7.prototype={
$1(d){return d.c==="outside"},
$S:z+5}
A.ec8.prototype={
$0(){return this.a.y1=this.b},
$S:0}
A.ear.prototype={
$1(d){var w=null
return new C.bM(D.a5,w,w,C.p(w,C.d(d,w,w,w,w,w,w,B.aU6,w,w,w),D.f,w,B.adi,B.b6k,w,w,w,D.ct,D.iq,w,w,w),w)},
$S:136}
A.eaq.prototype={
$5$primary(d,e,f,g,h){var w=null,v=h?f:f.j(0.14),u=C.m(16),t=C.J(f,D.r,1),s=C.X(d,h?D.w:f,w,w,w,21)
return C.aA(w,C.p(w,C.B(C.a([s,D.ad,C.d(e,w,w,w,w,w,w,C.l(w,w,h?D.w:D.c,w,w,w,w,w,w,w,w,14.5,w,w,D.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),D.m,w,D.b9,D.i,0,w,w),D.f,w,w,new C.o(v,w,t,u,w,w,D.n),w,48,w,D.jz,w,w,w,w),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,!1,D.a3)},
$4(d,e,f,g){return this.$5$primary(d,e,f,g,!1)},
$S:1803}
A.eas.prototype={
$0(){var w=this.a
return w.m(new A.eap(w))},
$S:0}
A.eap.prototype={
$0(){return this.a.y1=null},
$S:0}
A.eat.prototype={
$0(){var w,v,u=this.a
u.m(new A.eao(u))
if(!u.aL)u.S9()
w=u.aC
if(w!=null){v=u.e
v===$&&C.c()
v.Ni(new A.q(w.f,30,w.r))}u.ei("Follow the yellow line on the ground to get there.",!0)},
$S:0}
A.eao.prototype={
$0(){return this.a.y1=null},
$S:0}
A.eau.prototype={
$0(){var w,v=this.a
v.m(new A.ean(v))
if(v.fC==null){v.fC=this.b
v.hB=0}w=this.b
v.St(w.a)
w=w.c
if(w==="power")w="You are at the house. Walk in and onto the red mat at the breaker panel."
else w=w==="sick"?"You are at the hospital. Walk in and onto the desk.":y.Y
v.ei(w,!0)},
$S:0}
A.ean.prototype={
$0(){return this.a.y1=null},
$S:0}
A.eav.prototype={
$0(){var w=this.a
w.m(new A.eam(w,this.b))
w.ei("Saved on your waiting list.",!0)},
$S:0}
A.eam.prototype={
$0(){var w,v=this.a
v.y1=null
w=this.b
if(v.fC===w)v.fC=null
v=v.iS
if(!D.d.t(v,w))v.push(w)},
$S:0}
A.eaw.prototype={
$0(){var w=this.a
return w.m(new A.eal(w))},
$S:0}
A.eal.prototype={
$0(){return this.a.y2=!1},
$S:0}
A.eaT.prototype={
$1(d){var w=null
return C.bx(D.ra,new C.a4(w,C.aG(d,w,x.w).w.a.b*0.82,new A.apN(this.a,w),w),D.ap)},
$S:1804}
A.eaU.prototype={
$0(){var w=this.a
w.aA0()
w.iK()},
$S:0}
A.edg.prototype={
$1(d){return new C.e1(new A.ede(this.a,this.b,this.c),null)},
$S:21}
A.ede.prototype={
$2(d,e){var w,v,u,t,s=null,r=new A.edf(this.a,e),q=this.b,p=q.a,o=C.d(p.b+" "+q.gaE0(0),s,s,s,s,s,s,R.tj,s,s,s)
p=C.d(p.f,s,s,s,s,s,s,D.x5,s,s,s)
w=C.d("Now: "+q.gUs()+"\nFood "+D.k.V(100-q.b)+"%   Health "+D.k.V(q.c)+"%   Home "+D.k.V(q.d)+"%",s,s,s,s,s,s,B.aUz,s,s,s)
v=this.c
u=x.p
t=C.a([r.$2("\ud83c\udf5e Feed",new A.edb(v,q))],u)
if(q.e)t.push(r.$3$col("\ud83d\udc8a Medicine",new A.edc(v,q),D.bq))
if(q.e||q.c<60)t.push(r.$3$col("\ud83c\udfe5 Hospital",new A.edd(v,q),D.c0))
return C.bn(!0,new C.D(D.bQ,C.x(C.a([o,p,D.Q,w,D.ae,C.bY(D.bG,t,D.br,s,8,8)],u),D.E,s,D.e,D.P,0,D.p),s),!0,!1,D.af,!0,!0)},
$S:86}
A.edf.prototype={
$3$col(d,e,f){var w=null,v=f.j(0.22),u=C.m(12),t=C.J(f,D.r,1)
return C.aA(w,C.p(w,C.d(d,w,w,w,w,w,w,C.l(w,w,f,w,w,w,w,w,w,w,w,13,w,w,D.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),D.f,w,w,new C.o(v,w,t,u,w,w,D.n),w,w,w,w,A0.w6,w,w,w),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new A.eda(this.a,e,this.b),w,w,w,w,w,w,!1,D.a3)},
$2(d,e){return this.$3$col(d,e,D.aA)},
$S:1805}
A.eda.prototype={
$0(){var w,v=this.b.$0()
this.c.$1(new A.ed9())
w=this.a
w.m(w.gj_())
w.iL(v)},
$S:0}
A.ed9.prototype={
$0(){},
$S:0}
A.edb.prototype={
$0(){return this.a.bfg(this.b)},
$S:23}
A.edc.prototype={
$0(){return this.a.aL9(this.b)},
$S:23}
A.edd.prototype={
$0(){return this.a.aDI(this.b)},
$S:23}
A.ecY.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=x.p,k=C.a([],l)
for(w=D.d.gaf(B.a46),v=new C.f2(w,new A.ecV()),u=this.a,t=this.b;v.C();){s=w.gS(0)
r=D.c.j(0.08)
q=new C.aP(12,12)
p=u.d
p===$&&C.c()
o=p.d
o===$&&C.c()
n=new C.ay(o[p.e].fx.h(0,t)===s.a?D.aA:D.aX,1,D.r,-1)
k.push(C.aA(m,C.p(m,new C.y(s.c+" "+s.b,m,D.Kt,m,m,m,m,m,m,m,m,m),D.f,m,m,new C.o(r,m,new C.bH(n,n,n,n),new C.bh(q,q,q,q),m,m,D.n),m,m,m,m,D.eB,m,m,m),D.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new A.ecW(u,d,t,s),m,m,m,m,m,m,!1,D.a3))}w=u.d
w===$&&C.c()
v=w.d
v===$&&C.c()
if(v[w.e].fx.h(0,t)!=null)k.push(C.aA(m,C.p(m,B.fP4,D.f,m,m,new C.o(D.ek,m,m,C.m(12),m,m,D.n),m,m,m,m,D.eB,m,m,m),D.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new A.ecX(u,d,t),m,m,m,m,m,m,!1,D.a3))
return C.bn(!0,new C.D(D.bQ,C.x(C.a([B.fL7,D.W,C.bY(D.bG,k,D.br,m,8,8)],l),D.E,m,D.e,D.P,0,D.p),m),!0,!1,D.af,!0,!0)},
$S:27}
A.ecV.prototype={
$1(d){return!(d.d>70||d.e)},
$S:z+26}
A.ecW.prototype={
$0(){var w,v,u,t=this
C.a5(t.b,!1).O(null)
w=t.a
v=t.d
w.m(new A.ecU(w,t.c,v))
u=v.d>0||v.e
v=v.b
w.iL(u?v+" is on and playing NGMY ads. Tap it to watch full screen.":v+" is plugged in and running.")
A.fQ(820,70,0.25,"tri")},
$S:0}
A.ecU.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.d
w===$&&C.c()
w[u.e].fx.n(0,this.b,this.c.a)
v.iK()},
$S:0}
A.ecX.prototype={
$0(){C.a5(this.b,!1).O(null)
var w=this.a
w.m(new A.ecT(w,this.c))
w.iL("Unplugged.")},
$S:0}
A.ecT.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.d
w===$&&C.c()
w[u.e].fx.W(0,this.b)
v.iK()},
$S:0}
A.eed.prototype={
$1(d){return new C.e1(new A.eeb(this.a),null)},
$S:21}
A.eeb.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.a,k=new A.eec(l,e),j=l.d
j===$&&C.c()
w=j.d
w===$&&C.c()
j=C.d("TV in "+w[j.e].b,m,m,m,m,m,m,D.de,m,m,m)
w=x.p
v=C.a([],w)
for(u=D.d.gaf(B.a46),t=new C.f2(u,new A.ee4());t.C();){s=u.gS(0)
r=s.b
q=l.d
p=q.d
p===$&&C.c()
q=p[q.e].k1===s.a?D.aA:D.eP
v.push(k.$3$color(r,new A.ee5(l,s),q))}j=C.a([j,D.W,C.bY(D.bG,v,D.br,m,8,8)],w)
if(l.d.a.length!==0){v=C.a([],w)
for(o=0;o<3;++o){u={}
t=B.d7W[o]
u.a=null
n=t.a
u.a=n
s=l.d
r=s.d
r===$&&C.c()
s=r[s.e].p1===n?D.aA:D.eP
v.push(k.$3$color(t.b,new A.ee6(u,l),s))}D.d.v(j,C.a([B.fy5,D.am,C.bY(D.bG,v,D.br,m,8,8)],w))}j.push(D.W)
w=C.a([],w)
v=l.d
u=v.d
u===$&&C.c()
v=u[v.e]
if(v.k1!=null){v=v.p2?"\u23fb Turn this TV off":"\u23fb Turn this TV on"
w.push(k.$2(v,new A.ee7(l)))}v=l.d
u=v.d
u===$&&C.c()
if(u[v.e].k1!=null&&v.a.length===0)w.push(k.$3$color("\ud83d\uddd1 Take it down",new A.ee8(l),D.ek))
if(l.d.a.length===0)w.push(k.$3$color("\ud83d\udcfa A TV in every room, all on",new A.ee9(l),D.cT))
if(l.d.a.length===0)w.push(k.$3$color("\u23fb All TVs off",new A.eea(l),D.bn))
j.push(C.bY(D.bG,w,D.br,m,8,8))
return C.bn(!0,new C.D(D.bQ,C.x(j,D.E,m,D.e,D.P,0,D.p),m),!0,!1,D.af,!0,!0)},
$S:86}
A.eec.prototype={
$3$color(d,e,f){var w=null,v=f.j(0.4),u=C.m(12),t=C.J(f,D.r,1)
return C.aA(w,C.p(w,C.d(d,w,w,w,w,w,w,U.Am,w,w,w),D.f,w,w,new C.o(v,w,t,u,w,w,D.n),w,w,w,w,A0.w6,w,w,w),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new A.ee3(this.a,e,this.b),w,w,w,w,w,w,!1,D.a3)},
$2(d,e){return this.$3$color(d,e,D.eP)},
$S:1806}
A.ee3.prototype={
$0(){this.b.$0()
this.c.$1(new A.ee2())
var w=this.a
w.m(w.gj_())},
$S:0}
A.ee2.prototype={
$0(){},
$S:0}
A.ee4.prototype={
$1(d){return d.d>0||d.e},
$S:z+26}
A.ee5.prototype={
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
A.ee6.prototype={
$0(){var w,v=this.b.d
v===$&&C.c()
w=v.d
w===$&&C.c()
return w[v.e].p1=this.a.a},
$S:0}
A.ee7.prototype={
$0(){var w,v=this.a.d
v===$&&C.c()
w=v.d
w===$&&C.c()
v=w[v.e]
return v.p2=!v.p2},
$S:0}
A.ee8.prototype={
$0(){var w,v=this.a.d
v===$&&C.c()
w=v.d
w===$&&C.c()
v=w[v.e]
v.k1=null
v.p2=!1},
$S:0}
A.ee9.prototype={
$0(){var w,v,u,t=this.a.d
t===$&&C.c()
t=t.gqU()
w=t.length
v=0
for(;v<w;++v){u=t[v]
if(u.k1==null)u.k1="tv100"
if(u.c==="hall")if(u.k2==null)u.k2="tv100"
u.p2=!0}},
$S:0}
A.eea.prototype={
$0(){var w,v,u=this.a.d
u===$&&C.c()
u=u.gqU()
w=u.length
v=0
for(;v<w;++v)u[v].p2=!1},
$S:0}
A.ee_.prototype={
$1(d){return new C.e1(new A.edY(this.a),null)},
$S:21}
A.edY.prototype={
$2(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new A.edZ(),e=C.as(C.p(g,g,D.f,g,g,new C.o(D.aX,g,g,C.m(2),g,g,D.n),g,4,g,g,g,g,g,42),g,g,g),d=x.p,a0=C.B(C.a([C.p(g,H.aqe,D.f,g,g,new C.o(g,g,g,C.m(16),g,B.c35,D.n),g,52,g,g,g,g,g,52),D.es,B.bFS],d),D.m,g,D.e,D.i,0,g,g),a1=f.$1("Who walks the house"),a2=C.a([],d)
for(w=B.aHK.gdW(B.aHK),w=w.gaf(w),v=x.s,u=x.N,t=x.ec,s=this.a;w.C();){r=w.gS(w)
q=$.ahK
p=r.a
q=q===p?D.aJ.j(0.18):D.c.j(0.06)
o=new C.aP(18,18)
n=$.ahK===p
m=n?D.aJ:D.bz
l=new C.ay(m,n?2:1,D.r,-1)
n=n?D.aJ:D.aX
m=r.b
k=D.d.gI(m.split(" "))
m=C.a(m.split(" "),v)
j=new C.jd(m,1,g,t)
j.oc(m,1,g,u)
j=j.aH(0," ")
p=$.ahK===p?D.aJ:D.c
a2.push(new C.D(D.Gm,C.aA(g,C.cY(g,C.x(C.a([new C.qz(new C.y(k,g,D.pG,g,g,g,g,g,g,g,g,g),n,g,20,g),D.am,new C.y(j,g,new C.F(!0,p,g,g,g,g,12.5,D.H,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g),g,g,g,g,D.a1,g,1,g,g)],d),D.m,g,D.b9,D.i,0,D.p),g,g,D.b5,new C.o(q,g,new C.bH(l,l,l,l),new C.bh(o,o,o,o),g,g,D.n),D.h4,g,g,g,g,D.GD,g,g,92),D.y,!1,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,new A.edU(s,a4,r),g,g,g,g,g,g,!1,D.a3),g))}a2=C.cl(a2,g,g,g,g,g,D.aM,!1)
w=f.$1("How long")
v=D.c.j(0.06)
u=C.m(16)
t=C.a([],d)
for(i=0;i<5;++i){h=B.dtm[i]
r=s.db===h
q=r?D.aA:D.L
p=new C.aP(12,12)
if(h<60)o=""+h+" seconds"
else o=h===60?"1 minute":""+(h/60|0)+" minutes"
r=r?D.w:D.ac
t.push(new C.by(1,D.ba,C.aA(g,C.cY(g,new C.cf(D.A,g,g,new C.y(o,g,new C.F(!0,r,g,g,g,g,12.5,D.u,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g),g,D.K,g,g,g,g,g,g,g),g),g,g,D.b5,new C.o(q,g,g,new C.bh(p,p,p,p),g,g,D.n),D.h4,g,g,g,g,D.rC,g,g,g),D.y,!1,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,new A.edV(s,a4,h),g,g,g,g,g,g,!1,D.a3),g))}v=C.p(g,C.B(t,D.m,g,D.e,D.i,0,g,g),D.f,g,g,new C.o(v,g,g,u,g,g,D.n),g,g,g,g,D.ev,g,g,g)
u=C.aA(g,C.p(g,B.f4c,D.f,g,g,new C.o(g,g,g,C.m(18),C.a([new C.ac(0,D.G,D.ax.j(0.35),D.cy,16)],x.V),B.c43,D.n),g,56,g,g,g,g,g,g),D.y,!1,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,new A.edW(s,a3),g,g,g,g,g,g,!1,D.a3)
t=D.c.j(0.06)
r=C.m(18)
return C.p(g,C.bn(!0,C.ch(C.x(C.a([e,D.aQ,a0,a1,new C.a4(g,96,a2,g),w,v,D.dT,u,D.ae,C.aA(g,C.p(g,B.f46,D.f,g,g,new C.o(t,g,C.J(D.bz,D.r,1),r,g,g,D.n),g,g,g,g,D.bD,g,g,g),D.y,!1,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,new A.edX(s,a3),g,g,g,g,g,g,!1,D.a3)],d),D.E,g,D.e,D.P,0,D.p),D.t,g,D.y,g,D.alv,g,g,D.ah),!0,!1,D.af,!0,!0),D.f,g,g,B.b5o,g,g,g,g,g,g,g,g)},
$S:164}
A.edZ.prototype={
$1(d){var w=null
return new C.D(H.ake,C.d(d.toUpperCase(),w,w,w,w,w,w,Q.tm,w,w,w),w)},
$S:136}
A.edU.prototype={
$0(){var w=this.c
this.b.$1(new A.edS(w))
A.bU8(w.a)
this.a.m(new A.edT())},
$S:0}
A.edS.prototype={
$0(){return $.ahK=this.a.a},
$S:0}
A.edT.prototype={
$0(){},
$S:0}
A.edV.prototype={
$0(){return this.b.$1(new A.edR(this.a,this.c))},
$S:0}
A.edR.prototype={
$0(){return this.a.db=this.b},
$S:0}
A.edW.prototype={
$0(){C.a5(this.b,!1).O(null)
var w=this.a
w.czA(w.db)},
$S:0}
A.edX.prototype={
$0(){C.a5(this.b,!1).O(null)
this.a.b7Z(45,!0)},
$S:0}
A.edB.prototype={
$0(){var w=this.a,v=w.d
v===$&&C.c()
v.e=this.b
w.ax=null
w.iK()},
$S:0}
A.edC.prototype={
$1(d){return this.a.cDP()},
$S:11}
A.edD.prototype={
$0(){},
$S:0}
A.ee0.prototype={
$0(){return this.a.dy=this.b.as},
$S:0}
A.edQ.prototype={
$0(){var w=this.b
w.iK()
w.aB=this.a.a;++w.aF},
$S:0}
A.edI.prototype={
$0(){var w=this.a
w.cx=null
w.dy=""},
$S:0}
A.edJ.prototype={
$0(){},
$S:0}
A.edA.prototype={
$0(){},
$S:0}
A.edH.prototype={
$0(){},
$S:0}
A.eep.prototype={
$0(){return this.a.id=!0},
$S:0}
A.eeq.prototype={
$0(){return this.a.k2=!0},
$S:0}
A.eer.prototype={
$0(){return this.a.k3=!0},
$S:0}
A.eeo.prototype={
$1(d){return B.a8V.t(0,d.b)},
$S:z+4}
A.ed6.prototype={
$1(d){return d.ar("String","ngmy_city_where",this.a)},
$S:237}
A.ed7.prototype={
$1(d){return!1},
$S:47}
A.eeh.prototype={
$1(d){var w
if(d.b==="gasstation"){w=this.a
w=Math.sqrt(Math.pow(w.f-d.c,2)+Math.pow(w.r-d.d,2))<135}else w=!1
return w},
$S:z+4}
A.eei.prototype={
$0(){return this.a.aPI(B.aRy)},
$S:0}
A.eej.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.d
w===$&&C.c()
D.d.W(w[u.e].x,this.b)
v.al="crate"
v.m(v.gj_())
v.ei("You picked up a crate. Carry it to the shop and walk onto the green mat by the counter to sell it at the market.",!0)
A.fQ(700,60,0.25,"tri")
return null},
$S:0}
A.eek.prototype={
$0(){return this.a.abs(this.b)},
$S:0}
A.eel.prototype={
$0(){return this.a.bR2(this.b)},
$S:0}
A.eem.prototype={
$0(){return this.a.bTG(this.b)},
$S:0}
A.een.prototype={
$0(){return this.b.cK=this.a.a},
$S:0}
A.ebw.prototype={
$0(){},
$S:0}
A.ed4.prototype={
$1(d){var w=this.a,v=this.b
return w===0?v.$1(d):new A.aK0(w,v.$1(d),null)},
$S:39}
A.ecc.prototype={
$0(){var w=this.a
w.y1=null
w.y2=!0},
$S:0}
A.ec9.prototype={
$1(d){return d.c==="outside"},
$S:z+5}
A.eca.prototype={
$1(d){return d.b==="hospital"},
$S:z+4}
A.ecb.prototype={
$1(d){return!d.e&&d.r<0},
$S:z+18}
A.ebW.prototype={
$1(d){return d.c==="outside"},
$S:z+5}
A.ebX.prototype={
$1(d){return d.a.b===this.a.d},
$S:z+18}
A.edu.prototype={
$0(){},
$S:0}
A.ebQ.prototype={
$0(){return this.a.k3=!0},
$S:0}
A.edi.prototype={
$1(d){return d.b==="hospital"},
$S:z+4}
A.edj.prototype={
$0(){return this.a.go=!1},
$S:0}
A.edv.prototype={
$1(d){var w
if(d>0&&this.a.c!=null){w=this.a.ghF()
if(w!=null)w.r+=d}},
$S:1807}
A.edw.prototype={
$0(){var w=this.a
w.iK()
w.aez(!0)},
$S:0}
A.edx.prototype={
$1(d){return this.a.c8w()},
$S:11}
A.ec2.prototype={
$1(d){return!D.d.b3(this.a.d,new A.ec1(d))},
$S:34}
A.ec1.prototype={
$1(d){return d.a===this.a},
$S:z+19}
A.ec3.prototype={
$1(d){return d.a===this.a.a},
$S:z+19}
A.edy.prototype={
$1(d){var w,v,u=this.a
if(u.c==null)return
w=++u.T
if(w>36){v=u.bE
u.B7()
if(v!=null)u.aC4("Nobody answered the phone")
return}if(w%8<4){A.fQ((w&1)===0?1046:1318,160,0.3,"sine")
if(D.o.F(u.T,8)===0)C.Tv()}},
$S:11}
A.edz.prototype={
$0(){},
$S:0}
A.edG.prototype={
$0(){var w=this.a
w.bE=w.bD=null},
$S:0}
A.ecr.prototype={
$4$col$on(d,e,f,g){var w=null,v=g?f.j(0.45):D.w.j(0.62),u=C.m(18),t=C.J(f,D.r,1.8)
return C.aA(w,C.p(w,C.d(d,w,w,w,w,w,w,D.j6,w,w,w),D.f,w,w,new C.o(v,w,t,u,w,w,D.n),w,w,w,D.a_V,B.bF7,w,w,w),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new A.ecs(e),w,w,w,w,!1,D.a3)},
$2(d,e){return this.$4$col$on(d,e,D.be,!1)},
$3$col(d,e,f){return this.$4$col$on(d,e,f,!1)},
$3$on(d,e,f){return this.$4$col$on(d,e,D.be,f)},
$S:1808}
A.ecs.prototype={
$1(d){return this.a.$0()},
$S:22}
A.ecA.prototype={
$7$about$avatar$glow$onAnswer$onDecline$onLater$who(d,e,f,g,h,i,j){var w=null,v=new A.ecB(),u=Math.min(this.a-28,340),t=C.m(30),s=C.J(D.aX,D.r,2),r=C.a([new C.ac(0,D.G,f.j(0.35),D.I,24)],x.V),q=x.p,p=C.B(C.a([e,D.es,C.E(C.x(C.a([B.fMA,D.bF,C.d(j,w,1,D.a1,w,w,w,D.a9Q,w,w,w),D.bF,C.d(d,w,2,D.a1,w,w,w,M.aan,w,w,w)],q),D.E,w,D.e,D.P,0,D.p),1)],q),D.m,w,D.e,D.i,0,w,w),o=C.a([v.$4(B.bMO,"Decline",D.ax,h)],q)
if(i!=null)o.push(v.$4(D.jY,"Later",D.aA,i))
o.push(v.$5$big(D.iI,"Answer",D.bf,g,!0))
return C.p(w,C.x(C.a([p,D.aB,C.B(o,D.E,w,D.e,D.i,0,w,w)],q),D.ak,w,D.e,D.P,0,D.p),D.f,w,w,new C.o(w,w,s,t,r,B.zm,D.n),w,w,w,D.d1,Ai.a_B,w,w,u)},
$6$about$avatar$glow$onAnswer$onDecline$who(d,e,f,g,h,i){return this.$7$about$avatar$glow$onAnswer$onDecline$onLater$who(d,e,f,g,h,null,i)},
$S:1809}
A.ecB.prototype={
$5$big(d,e,f,g,h){var w=null,v=h?58:50,u=h?58:50
return C.E(C.aA(w,C.x(C.a([C.p(w,C.X(d,D.c,w,w,w,h?30:26),D.f,w,w,new C.o(f,w,w,w,w,w,D.a6),w,u,w,w,w,w,w,v),D.fG,C.d(e,w,w,w,w,w,w,N.Aq,w,w,w)],x.p),D.m,w,D.e,D.P,0,D.p),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new A.ecC(g),w,w,w,w,!1,D.a3),1)},
$4(d,e,f,g){return this.$5$big(d,e,f,g,!1)},
$S:1810}
A.ecC.prototype={
$1(d){return this.a.$0()},
$S:22}
A.ecu.prototype={
$0(){var w=this.a
w.B7()
w.aC4("You turned the call down")},
$S:0}
A.ecv.prototype={
$0(){var w=this.a
w.B7()
w.iS.push(this.b)
w.ei("Saved on your waiting list. You will be taken there when you are free.",!0)},
$S:0}
A.ect.prototype={
$0(){var w=this.b,v=this.a
v.B7()
v.fC=w
v.hB=0
v.axi(w)},
$S:0}
A.ecw.prototype={
$0(){var w=this.a
w.B7()
w.cC9(this.b)},
$S:0}
A.ecz.prototype={
$2(d,e){var w=this.a
w.b2=d
w.be=e},
$S:199}
A.ecx.prototype={
$0(){var w=this.a
return w.m(new A.ecq(w))},
$S:0}
A.ecq.prototype={
$0(){var w=this.a
return w.bi=!w.bi},
$S:0}
A.ecy.prototype={
$0(){var w=this.a,v=w.aJ
if(v==null)v=null
else{v=v.at
v===$&&C.c()}w=v==null?w.aC:v
if(w!=null)if(w.Q<=0.01)w.as=160
return null},
$S:0}
A.ecd.prototype={
$1(d){var w=this.a,v=w.p4
w=w.RG
return v==="ptrap"?new A.a9I(w,null):new A.a59(w,null)},
$S:1811}
A.ece.prototype={
$1(d){var w=this.a
return new A.E0(w.p4,w.R8,null)},
$S:z+27}
A.ees.prototype={
$1(d){var w=this.a
return new A.E0(w.a,w.c,null)},
$S:z+27}
A.ecg.prototype={
$1(d){return A.ciz(!1,!1,this.a.CW,!1)},
$S:z+41}
A.ecf.prototype={
$1(d){return new A.Wg(!1,this.a.fr,null)},
$S:z+71}
A.e9T.prototype={
$1(d){var w,v,u,t,s,r,q,p=null,o=this.a,n=o.d
n===$&&C.c()
w=n.d
w===$&&C.c()
n=C.d("Add to "+w[n.e].b,p,p,p,p,p,p,D.de,p,p,p)
w=x.p
v=C.a([],w)
for(u=0;u<10;++u){t={}
s=B.d2N[u]
t.a=null
t.a=s.a
r=new C.aP(12,12)
q=new C.ay(D.b_,1,D.r,-1)
v.push(C.aA(p,C.p(p,new C.y(s.b,p,D.to,p,p,p,p,p,p,p,p,p),D.f,p,p,new C.o(D.eP.j(0.4),p,new C.bH(q,q,q,q),new C.bh(r,r,r,r),p,p,D.n),p,p,p,p,A0.w6,p,p,p),D.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new A.e9S(t,o,d),p,p,p,p,p,p,!1,D.a3))}return C.bn(!0,new C.D(D.bQ,C.x(C.a([n,D.au,B.fTD,D.ae,C.bY(D.bG,v,D.br,p,8,8)],w),D.E,p,D.e,D.P,0,D.p),p),!0,!1,D.af,!0,!0)},
$S:27}
A.e9S.prototype={
$0(){C.a5(this.c,!1).O(null)
this.b.bBD(this.a.a)},
$S:0}
A.e9N.prototype={
$1(d){return d.b==="back"},
$S:z+21}
A.e9O.prototype={
$1(d){return d.b==="back"},
$S:z+21}
A.e9P.prototype={
$1(d){return Math.abs(d-this.a)>13},
$S:120}
A.e9Q.prototype={
$0(){var w=this
w.b.id.push(new A.aWw(w.c,w.d,new A.CC(C.U(x.S,x.N))))
w.a.iK()},
$S:0}
A.ec6.prototype={
$0(){var w,v=this,u=v.b,t=u.c,s=v.c,r=v.d
u.c=t+(s?D.o.gVY(r)*40:r)
t=u.d
r=v.e
u.d=t+(s?D.o.gVY(r)*40:r)
t=v.a
r=t.d
r===$&&C.c()
w=r.d
w===$&&C.c()
w[r.e].a4a(0,u)
t.iK()},
$S:0}
A.ee1.prototype={
$0(){var w,v,u,t=this.b
t.e=D.o.F(t.e+1,4)
w=this.a
v=w.d
v===$&&C.c()
u=v.d
u===$&&C.c()
u[v.e].a4a(0,t)
w.iK()},
$S:0}
A.ed5.prototype={
$0(){var w=this.b
w.f=(w.f+1)%6
this.a.iK()},
$S:0}
A.ed8.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.d
w===$&&C.c()
D.d.W(w[u.e].x,this.b)
v.at=v.Q=0
v.iK()},
$S:0}
A.e9R.prototype={
$0(){var w=this.a,v=this.b.a
w.Q=v
w.at=100+v
w.iK()},
$S:0}
A.eb2.prototype={
$0(){return this.a.aeA(-6,0)},
$S:0}
A.eb3.prototype={
$0(){return this.a.aeA(6,0)},
$S:0}
A.eb4.prototype={
$0(){return this.a.aeA(0,-6)},
$S:0}
A.eb5.prototype={
$0(){return this.a.aeA(0,6)},
$S:0}
A.eb6.prototype={
$0(){return this.a.bBG(this.b.a)},
$S:0}
A.eb7.prototype={
$0(){var w=this.a
return w.m(new A.eb1(w))},
$S:0}
A.eb1.prototype={
$0(){return this.a.as=-1},
$S:0}
A.eb8.prototype={
$0(){var w=this.a
w.m(new A.eb0(w,this.b))},
$S:0}
A.eb0.prototype={
$0(){var w,v=this.a,u=v.as,t=this.b,s=v.d
if(u<0){s===$&&C.c()
u=s.d
u===$&&C.c()
D.d.hu(u[s.e].z,0,3,t)}else{s===$&&C.c()
w=s.d
w===$&&C.c()
w[s.e].z[u]=t}v.iK()},
$S:0}
A.eb9.prototype={
$0(){var w=this.a
w.m(new A.eb_(w,this.b))},
$S:0}
A.eb_.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.d
w===$&&C.c()
w[u.e].Q=this.b
v.iK()},
$S:0}
A.eba.prototype={
$0(){var w=this.a
w.m(new A.eaZ(w))},
$S:0}
A.eaZ.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.d
w===$&&C.c()
u=w[u.e]
u.go=u.go==="fan"?"light":"fan"
v.iK()},
$S:0}
A.ebb.prototype={
$0(){var w=this.a
w.m(new A.eaY(w,this.b))},
$S:0}
A.eaY.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.d
w===$&&C.c()
w[u.e].as=this.b
v.iK()},
$S:0}
A.ebc.prototype={
$0(){return this.a.AD(this.b.d)},
$S:0}
A.eev.prototype={
$0(){return C.a5(this.a,!1).ik()},
$S:0}
A.eex.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.eeu(w))},
$S:0}
A.eeu.prototype={
$0(){return this.a.aB=null},
$S:0}
A.eew.prototype={
$3(d,e,f){var w=null
return C.db(C.cpx(D.A,w,w,w,w,D.ci,D.vF,w,this.a.aB,!1,!1,!1,w,D.pn,1,w),e)},
$S:100}
A.eaF.prototype={
$0(){return this.a.A6("calls")},
$S:0}
A.eaG.prototype={
$0(){return this.a.A6("hospital")},
$S:0}
A.eaH.prototype={
$0(){return this.a.A6("shop")},
$S:0}
A.eaL.prototype={
$0(){return this.a.A6("people")},
$S:0}
A.eaM.prototype={
$0(){return this.a.AD(10)},
$S:0}
A.eaN.prototype={
$0(){var w=this.a
return w.m(new A.eaE(w))},
$S:0}
A.eaE.prototype={
$0(){return this.a.k2=!0},
$S:0}
A.eaO.prototype={
$0(){var w=this.a
return w.m(new A.eaD(w))},
$S:0}
A.eaD.prototype={
$0(){return this.a.k3=!0},
$S:0}
A.eaP.prototype={
$0(){var w=this.a
return w.m(new A.eaC(w))},
$S:0}
A.eaC.prototype={
$0(){var w=this.a
return w.y1=w.fC},
$S:0}
A.eaQ.prototype={
$0(){var w=this.a,v=w.iS.length,u=v===1?"":"s"
return w.ei(""+v+" job"+u+" waiting. You are taken to the next one when you finish this one.",!0)},
$S:0}
A.eaR.prototype={
$0(){var w=this.a
return w.m(new A.eaB(w))},
$S:0}
A.eaB.prototype={
$0(){return this.a.go=!0},
$S:0}
A.eaS.prototype={
$0(){var w=this.a
return w.p4?w.a2S():w.m(new A.eaA(w))},
$S:0}
A.eaA.prototype={
$0(){return this.a.R8=!0},
$S:0}
A.eaI.prototype={
$0(){var w=this.a
return w.m(new A.eaz(w))},
$S:0}
A.eaz.prototype={
$0(){var w=this.a
return w.jO=!w.jO},
$S:0}
A.eaJ.prototype={
$0(){var w=this.a
return w.m(new A.eay(w))},
$S:0}
A.eay.prototype={
$0(){return this.a.ai=!0},
$S:0}
A.eaK.prototype={
$0(){var w=this.a
return w.m(new A.eax(w))},
$S:0}
A.eax.prototype={
$0(){var w=this.a
return w.y=!w.y},
$S:0}
A.ea_.prototype={
$0(){var w=this.a.ghF()
w=w==null?null:w.r
return w==null?0:w},
$S:93}
A.ead.prototype={
$0(){return this.a.y3()},
$S:0}
A.eac.prototype={
$1(d){return d<=5},
$S:34}
A.ea0.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n=null,m=this.a,l=m.aJ,k=m.CW
if(l!=null){m=k.gig()
k=B.aHL.h(0,$.ahK)
if(k==null)k=B.a7V
k=l.cOH(m/1000,k)
m=k}else{l=m.d
l===$&&C.c()
w=l.d
w===$&&C.c()
l=w[l.e]
w=k.gig()
v=m.cmr()
u=B.aHL.h(0,$.ahK)
if(u==null)u=B.a7V
t=m.fr
s=m.r
r=m.bOS()
if(m.al==null){q=m.gpn()
if(q==null)q=n
else{q=q.x
q=(q==null?n:q.r)===!0}q=q===!0}else q=!0
p=m.d
o=p.d
o===$&&C.c()
if(o[p.e].c!=="outside")k=B.Ii
else{p=m.gpn()
p=p==null?n:p.amC(k.gig()/1000)
if(p==null)p=B.Ii
p=C.C(p,x.hg)
o=m.gKz()
k=o==null?n:o.amC(k.gig()/1000)
D.d.v(p,k==null?B.Ii:k)
k=p}l=C.C(A.ibU(l,w/1000,q,k,r,s,v,u,t),x.e)
k=m.d
w=k.d
w===$&&C.c()
if(w[k.e].c==="outside")D.d.v(l,m.cDX())
k=m.d
w=k.d
w===$&&C.c()
if(w[k.e].c==="outside")D.d.v(l,m.bEr())
k=!0
if(m.fC==null){w=m.gpn()
if((w==null?n:w.x)==null){k=m.gKz()
k=(k==null?n:k.f)!=null}}D.d.v(l,k?m.csM():B.Dc)
m=l}return m},
$S:z+10}
A.ea1.prototype={
$1(d){var w,v,u=this.a
if(u.aJ==null){w=u.d
w===$&&C.c()
v=w.d
v===$&&C.c()
w=v[w.e].c==="outside"}else w=!1
return w?A.imK(u.CW.gig()/1000):B.wH},
$S:z+74}
A.eae.prototype={
$3(d,e,f){var w=null,v=D.dG.j(0.82),u=C.m(18),t=C.J(D.b8,D.r,2)
return C.p(w,C.d(e,w,w,w,w,w,w,B.fwb,w,w,w),D.f,w,w,new C.o(v,w,t,u,w,w,D.n),w,w,w,w,B.bDk,w,w,w)},
$S:1812}
A.ea4.prototype={
$0(){var w=this.a,v=w.d
v===$&&C.c()
return v.a.length!==0?w.Ep():w.cnG(this.b)},
$S:0}
A.eaf.prototype={
$0(){var w=this.a
w.m(new A.e9Z(w))
w.y3()},
$S:0}
A.e9Z.prototype={
$0(){var w=this.a
w.x=!w.x
w.iK()},
$S:0}
A.eag.prototype={
$0(){var w=this.a
return w.cx!=null?w.Sf():w.cDO()},
$S:0}
A.eah.prototype={
$0(){var w=this.a
w.m(new A.e9Y(w))
w.y3()
if(w.z)w.iL("Drag to turn all the way round. Double tap a spot on the floor to walk there.")},
$S:0}
A.e9Y.prototype={
$0(){var w=this.a,v=!w.z
w.z=v
if(v&&w.cx!=null)w.Sf()
w.iK()},
$S:0}
A.eai.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.d
w===$&&C.c()
return v.AD(w[u.e].c!=="outside"?11:10)},
$S:0}
A.eaj.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.d
w===$&&C.c()
if(w[u.e].c!=="outside")v.AD(11)
v.A6("calls")},
$S:0}
A.ea2.prototype={
$0(){var w=this.a
return w.m(new A.e9X(w))},
$S:0}
A.e9X.prototype={
$0(){var w=this.a,v=!w.w
w.w=v
if(v)w.iL("Voltage tester in your hand: tap an outlet, a switch or the light.")},
$S:0}
A.ea3.prototype={
$0(){var w=this.a
return w.m(new A.e9W(w))},
$S:0}
A.e9W.prototype={
$0(){var w=this.a
return w.y=!w.y},
$S:0}
A.ea5.prototype={
$0(){return this.a.PW("look")},
$S:0}
A.ea6.prototype={
$0(){return this.a.PW("furniture")},
$S:0}
A.ea7.prototype={
$0(){return this.a.PW("walls")},
$S:0}
A.ea8.prototype={
$0(){return this.a.PW("floor")},
$S:0}
A.ea9.prototype={
$0(){return this.a.PW("ceiling")},
$S:0}
A.eaa.prototype={
$0(){return this.a.PW("doors")},
$S:0}
A.eab.prototype={
$0(){return C.a5(this.a,!1).cc(C.eh(new A.e9V(),!1,null,x.H))},
$S:0}
A.e9V.prototype={
$1(d){return B.aIL},
$S:z+75}
A.ed3.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=C.aG(d,m,x.w).w,k=this.a,j=k.d
j===$&&C.c()
w=x.p
j=C.a([B.fHI,D.au,C.d("Wiring "+j.gd_l()+"/"+k.d.gqU().length+" \xb7 Plumbing "+k.d.gcWZ()+"/"+k.d.gcWY(),m,m,m,m,m,m,B.Kf,m,m,m),D.W],w)
for(v=k.d.gqU(),u=v.length,t=0;t<v.length;v.length===u||(0,C.L)(v),++t){s=v[t]
r=D.c.j(0.05)
q=new C.aP(12,12)
p=new C.ay(s.gkR()&&s.gjT()?D.be.j(0.5):D.bz,1,D.r,-1)
if(s.gkR()&&s.gjT())o="\u2705 finished"
else{o=s.gkR()?"":"\u26a1 wiring  "
o+=s.gjT()?"":"\ud83d\udeb0 plumbing"}n=s.gkR()&&s.gjT()?D.ep:D.ac
j.push(C.aA(m,C.p(m,new C.ca(D.aM,D.e,D.i,D.m,m,D.p,m,0,C.a([new C.by(1,D.ba,new C.y(s.b,m,B.aV3,m,m,m,m,m,m,m,m,m),m),new C.y(o,m,new C.F(!0,n,m,m,m,m,12,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m,m,m,m,m,m,m)],w),m),D.f,m,m,new C.o(r,m,new C.bH(p,p,p,p),new C.bh(q,q,q,q),m,m,D.n),m,m,m,D.eI,D.bT,m,m,m),D.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new A.ed0(k,d,s),m,m,m,m,m,m,!1,D.a3))}j.push(D.Q)
j.push(C.dT(B.fEF,new A.ed1(k,d),m))
j.push(D.Q)
j.push(C.bI(B.fAO,m,new A.ed2(k,d),m))
return C.bn(!0,new C.cT(new C.aZ(0,1/0,0,l.a.b*0.75),C.cl(j,m,m,D.bQ,m,m,D.ah,!0),m),!0,!1,D.af,!0,!0)},
$S:27}
A.ed0.prototype={
$0(){C.a5(this.b,!1).O(null)
this.a.AD(this.c.a)},
$S:0}
A.ed1.prototype={
$0(){C.a5(this.b,!1).O(null)
var w=this.a
w.m(new A.ed_(w))
w.iL("Every room needs its wiring and plumbing again. Wire the whole house from the start.")},
$S:0}
A.ed_.prototype={
$0(){var w=this.a,v=w.d
v===$&&C.c()
v.cTA()
w.iK()},
$S:0}
A.ed2.prototype={
$0(){C.a5(this.b,!1).O(null)
$.Ed=A.aWC(D.o.F(Date.now(),1e5))
var w=this.a
w.m(new A.ecZ(w))
w.aez(!0)},
$S:0}
A.ecZ.prototype={
$0(){var w=this.a,v=$.Ed
v.toString
w.d=v
w.r="look"
w.Q=0
w.as=-1
w.at=0
w.iK()},
$S:0}
A.dvz.prototype={
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
A.f7F.prototype={
$0(){return this.b.d=this.a.a},
$S:0}
A.f7E.prototype={
$0(){return this.a.d=null},
$S:0}
A.f7H.prototype={
$1(d){return this.a.b_n(d.geZ())},
$S:68}
A.f7I.prototype={
$1(d){return this.a.b_n(d.geZ())},
$S:192}
A.f7J.prototype={
$1(d){return this.a.b_m()},
$S:110}
A.f7G.prototype={
$1(d){return this.a.b_m()},
$S:134}
A.fAa.prototype={
$1$speed(d){var w,v,u,t=null,s=this.a,r=s.a
if(r.length===0)return
w=s.b
v=s.d
u=s.c
u=u.length===0?t:D.d.gI(u)
this.b.push(new A.Mn(r,w,d,8,u,t,v,t,t))
v=x.o
s.a=C.a([],v)
s.b=C.a([],v)
s.c=C.a([],x.s)
s.d=!1},
$0(){return this.$1$speed(130)},
$S:1813}
A.fAh.prototype={
$3$note(d,e,f){var w=this.a
w.a.push(d)
w.b.push(e)
if(f!=null)w.c.push(f)},
$2(d,e){return this.$3$note(d,e,null)},
$S:z+76}
A.fAc.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m,l,k
for(w=this.a.x,v=w.length,u=d.a,t=d.c,s=d.b,r=0;r<v;++r){q=w[r]
p=q.b
if(p!=="billboard"&&p!=="cornersign"&&p!=="townsign"&&p!=="adboard")continue
A:{if("townsign"===p){p=B.a8o
break A}if("cornersign"===p){p=B.a8q
break A}if("adboard"===p){p=B.a8n
break A}p=B.a8p
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
A.fAi.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
for(w=this.a.x,v=w.length,u=0;u<=1;u+=0.02){t=A.pB(d,e,u)
for(s=t.a,r=t.c,q=t.b,p=0;p<v;++p){o=w[p]
n=o.b
if(n!=="billboard"&&n!=="cornersign"&&n!=="townsign"&&n!=="adboard")continue
A:{if("townsign"===n){n=B.a8o
break A}if("cornersign"===n){n=B.a8q
break A}if("adboard"===n){n=B.a8n
break A}n=B.a8p
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
A.fAb.prototype={
$2(d,e){return this.a.$2(d,e)!=null},
$S:z+78}
A.fA8.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this.a.$2(d,e)
if(i==null)return null
w=i.b
A:{if("townsign"===w){v=B.a8o
break A}if("cornersign"===w){v=B.a8q
break A}if("adboard"===w){v=B.a8n
break A}v=B.a8p
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
n=new A.fA9(d,e)
o=this.b
k=!o.$1(m)
j=!o.$1(l)
if(k&&j)return n.$1(m)<=n.$1(l)?m:l
if(k)v=m
else v=j?l:null
return v},
$S:z+79}
A.fA9.prototype={
$1(d){return d.aE(0,this.a).guZ()+this.b.aE(0,d).guZ()},
$S:z+80}
A.fA2.prototype={
$3(d,e,f){var w,v,u,t=this
if(!t.a.$2(d,e))return B.nC
w=f>=3?null:t.b.$2(d,e)
if(w==null)return C.a([new A.q((d.a+e.a)/2,430,(d.c+e.c)/2)],x.o)
v=f+1
u=C.C(t.$3(d,w,v),x.cv)
u.push(w)
D.d.v(u,t.$3(w,e,v))
return u},
$2(d,e){return this.$3(d,e,0)},
$S:z+81}
A.fAe.prototype={
$7$note(a2,a3,a4,a5,a6,a7,a8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=A.hvG(a2),a1=new A.q(a2.c,a4,a2.d)
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
g=u.$1(A.pB(h,i,f))
f+=0.02}if(g)for(m=r.$2(h,i),l=m.length,e=0;e<m.length;m.length===l||(0,C.L)(m),++e)w.$2(m[e],D.d.gak(v.b))}w.$3$note(i,a1,k?a8:q)
q=null}},
$6(d,e,f,g,h,i){return this.$7$note(d,e,f,g,h,i,null)},
$S:z+104}
A.fAg.prototype={
$1(d){var w=d.b,v=this.a
switch(w){case"townsign":v.$7$note(d,255,250,430,520,60,"The biggest billboard in the city: NGMY Town")
break
case"cornersign":v.$7$note(d,115,120,210,260,50,"A corner billboard: NGMY Town")
break
case"adboard":v.$7$note(d,160,142,330,410,55,"A big NGMY ad billboard")
break
case"tower":v.$7$note(d,430,(w==="hq"?278:A.hv_(B.zp[d.f]))+40,150,210,20,"A tower with NGMY ad boards")
break
case"hq":v.$7$note(d,440,312,190,250,20,"The NGMY company building")
break
default:v.$7$note(d,75,48,130,175,45,"An NGMY billboard")}},
$S:z+29}
A.fAf.prototype={
$1(d){var w,v,u,t,s,r,q,p=this.a,o=p.a.length
this.b.$1(d)
if(o>0&&o<p.a.length){w=p.a
v=o-1
u=this.c.$2(w[v],w[o])
w=J.a6(u)
if(w.gL(u)!==0){t=p.b
s=t[v]
r=t[o]
for(q=0;q<w.gL(u);){v=o+q
D.d.c6(p.a,v,w.h(u,q));++q
D.d.c6(p.b,v,A.pB(s,r,q/(w.gL(u)+1)))}}}},
$S:z+29}
A.fAd.prototype={
$1(d){var w
this.b.$0()
w=x.o
this.c.push(new A.Mn(C.a([B.heh,B.h_g,B.h1k],w),C.a([B.heO,B.h0y,B.h3Z],w),55,8,"Inside the "+B.hE.h(0,d.b).a.toLowerCase(),d,!1,null,null))
this.a.d=!0},
$S:z+29}
A.fA3.prototype={
$1(d){return d.b==="townsign"},
$S:z+4}
A.fA4.prototype={
$2(d,e){var w=this.a
return D.k.aN(Math.pow(d.c-w.a.a,2)+Math.pow(d.d-w.a.c,2),Math.pow(e.c-w.a.a,2)+Math.pow(e.d-w.a.c,2))},
$S:z+17}
A.fA1.prototype={
$1(d){return Math.atan2(d.d-1000,d.c)},
$S:z+84}
A.fA5.prototype={
$2(d,e){var w=this.a
return J.Do(w.$1(d),w.$1(e))},
$S:z+17}
A.fA6.prototype={
$1(d){return d.b==="bighouse"},
$S:z+4}
A.fA7.prototype={
$1(d){return d.b===this.a},
$S:z+4}
A.fdn.prototype={
$0(){var w=this.a
return w.m(new A.fdm(w))},
$S:0}
A.fdm.prototype={
$0(){var w=this.a
return w.d=!w.d},
$S:0}
A.cgH.prototype={
$0(){var w=0,v=C.j(x.P),u=1,t=[],s,r,q,p,o,n
var $async$$0=C.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
w=6
return C.b($.ra().jk(0,"assets/images/ngmy_logo.png"),$async$$0)
case 6:s=e
w=7
return C.b(C.fDF(J.eS(J.vK(s)),null),$async$$0)
case 7:r=e
o=$
n=J
w=8
return C.b(r.lM(),$async$$0)
case 8:o.Wa=n.a3g(e)
u=1
w=5
break
case 3:u=2
p=t.pop()
$.Wa=null
w=5
break
case 2:w=1
break
case 5:return C.h(null,v)
case 1:return C.f(t.at(-1),v)}})
return C.i($async$$0,v)},
$S:50}
A.fRC.prototype={
$4(d,e,f,g){var w,v,u=null,t=e*0.05,s=C.fy(u,u,1,u,C.cS(u,u,u,u,u,u,u,u,u,C.l(u,u,f,u,u,u,u,u,u,u,u,e,u,u,D.u,u,u,!0,u,t,u,u,u,u,u,u),d),D.a4,D.bY,u,D.dA,D.bW)
s.el()
w=s.b.c
v=this.a
if(w>v){s=C.fy(u,u,1,u,C.cS(u,u,u,u,u,u,u,u,u,C.l(u,u,f,u,u,u,u,u,u,u,u,e*v/w,u,u,D.u,u,u,!0,u,t,u,u,u,u,u,u),d),D.a4,D.bY,u,D.dA,D.bW)
s.el()}s.a3(this.b,new C.t(this.c+v/2-s.b.c/2,g))},
$S:1814}
A.fRA.prototype={
$1(d){var w,v,u,t,s,r=null,q=this.a,p=this.b,o=d.d-d.b
if(q!=null){w=q.c
v=q.d
u=Math.min((d.c-d.a)/w,o/v)
o=C.bK(d.gbL(),v*u,w*u)
$.S()
t=C.I()
t.Q=D.ci
p.oC(q,new C.a3(0,0,w,v),o,t)}else{s=C.fy(r,r,r,r,C.cS(r,r,r,r,r,r,r,r,r,C.l(r,r,this.c,r,r,r,r,r,r,r,r,o*0.6,r,r,D.u,r,r,!0,r,r,r,r,r,r,r,r),"NGMY"),D.a4,D.bY,r,D.dA,D.bW)
s.el()
q=d.gbL()
o=s.b
w=o.c
o=o.a.c
s.a3(p,q.aE(0,new C.t(w/2,o.gbb(o)/2)))}},
$S:1815}
A.fRz.prototype={
$4$w(d,e,f,g){var w=null,v=C.fy(w,w,w,w,C.cS(w,w,w,w,w,w,w,w,w,C.l(w,w,this.a,w,w,w,w,w,w,w,w,f,w,w,g,w,w,!0,w,f*0.08,w,w,w,w,w,w),d),D.a4,D.bY,w,D.dA,D.bW)
v.o_(this.b.a*0.9)
v.a3(this.c,e.aE(0,new C.t(v.b.c/2,0)))},
$3(d,e,f){return this.$4$w(d,e,f,D.u)},
$S:1816}
A.fRB.prototype={
$1(d){var w=null,v=this.a.b*0.16
v=C.fy(w,w,w,w,C.cS(w,w,w,w,w,w,w,w,w,C.l(w,w,w,w,w,w,w,w,w,w,w,v,w,w,D.u,w,w,!0,w,v*0.08,w,w,w,w,w,w),d),D.a4,D.bY,w,D.dA,D.bW)
v.el()
return v.b.c},
$S:714}
A.fAz.prototype={
$2(d,e){return this.a===d?e:0},
$S:715}
A.fAl.prototype={
$1(d){return d.b==="right"},
$S:z+21}
A.fAw.prototype={
$0(){var w=C.a([],x.z),v=new A.fg(w)
v.f=1
v.x=$.dM=$.dM+1
v.aG(B.hhe,B.h45,B.Bn)
v.aQ(B.h_3,B.har,B.i1,0.5)
v.aG(B.aX8,B.hc6,B.Bn)
v.aG(B.aX8,B.h7U,B.Bn)
return w},
$S:z+85}
A.fAx.prototype={
$1(d){var w=this,v=w.a,u=v.b
A:{if("left"===u){v=A.nE(d,0,1.5707963267948966,new A.q(-w.b/2,0,v.c+w.c/2-40))
break A}if("right"===u){v=A.nE(d,0,-1.5707963267948966,new A.q(w.b/2,0,v.c+w.c/2-40))
break A}v=A.nE(d,0,0,new A.q(v.c,0,0))
break A}return v},
$S:z+86}
A.fAm.prototype={
$1(d){return d.b==="back"},
$S:z+21}
A.fAn.prototype={
$1(d){return d.c},
$S:z+87}
A.fAo.prototype={
$2(d,e){return e},
$S:80}
A.fAp.prototype={
$3(d,e,f){return K.RZ(d,e,0,f+this.a)},
$S:24}
A.fAr.prototype={
$2(a8,a9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this
if(a8==null)return
w=A.aPW(a8)
v=a7.a
u=A.hcD(v,w,a9)
t=u.a
s=u.b
r=u.d
q=t-2.5
p=s-2.5
o=v.p3+a9*2
n=a7.b
m=n.b=730+a9
l=n.x=$.dM=$.dM+1
n.e=5
k=v.c==="hall"
if(!(k&&a9<2))j=!k&&v.p1!=="back"
else j=!0
if(j){i=k?a9===1:v.p1==="left"
k=a7.c
h=i?-k/2:k/2
g=i?1:-1
f=u.c
n.aQ(new A.q(h+g*1.4,r,f),new A.q(2.6,s+3,t+3),B.M5,0.5)
n.aQ(new A.q(h+g*2.8,r,f),new A.q(0.2,s,t),F.ni,0.7)
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
k.push(new A.fq(C.a([new A.q(e,a1,d),new A.q(e,a1,a0),new A.q(e,j,a0),new A.q(e,j,d)],a2),m,new A.fAs(o,v,a9),320,a3,9,1,l,!1))
a4=h+g*0.05
k.push(new A.fq(C.a([new A.q(a4,a1,a0),new A.q(a4,a1,d),new A.q(a4,j,d),new A.q(a4,j,a0)],a2),m,new A.fAt(o,v,a9),320,a3,9,1,l,!1))}}else{h=u.c
n.aQ(new A.q(h,r,1.4),new A.q(t+3,s+3,2.6),B.M5,0.5)
n.aQ(new A.q(h,r,2.8),new A.q(t,s,0.2),F.ni,0.7)
if(v.p2){k=a7.d
j=q/2
a1=h-j
a2=p/2
a3=r+a2
j=h+j
a2=r-a2
a5=x.o
a6=320*p/q
k.push(new A.fq(C.a([new A.q(a1,a3,2.95),new A.q(j,a3,2.95),new A.q(j,a2,2.95),new A.q(a1,a2,2.95)],a5),m,new A.fAu(o,v,a9),320,a6,9,1,l,!1))
k.push(new A.fq(C.a([new A.q(j,a3,0.05),new A.q(a1,a3,0.05),new A.q(a1,a2,0.05),new A.q(j,a2,0.05)],a5),m,new A.fAv(o,v,a9),320,a6,9,1,l,!1))}}n.e=n.x=0
v=v.p2?"It is on and playing "+E.kp[D.o.F(o,8)].a+". Tap it to watch full screen with the remote.":"The TV is off. Tap it to turn it on."
a7.e.n(0,m,new A.cV(w.b,v,new A.q(0,r,4),110))},
$S:1819}
A.fAs.prototype={
$3(d,e,f){return K.RZ(d,e,this.a,f+this.b.a+this.c*3)},
$S:24}
A.fAt.prototype={
$3(d,e,f){return K.RZ(d,e,this.a,f+this.b.a+this.c*3)},
$S:24}
A.fAu.prototype={
$3(d,e,f){return K.RZ(d,e,this.a,f+this.b.a+this.c*3)},
$S:24}
A.fAv.prototype={
$3(d,e,f){return K.RZ(d,e,this.a,f+this.b.a+this.c*3)},
$S:24}
A.fAy.prototype={
$2(d,e){var w=this.a,v=w.f,u=w.r
w.f=1
w.r=!1
w.b=0
w.dm(new A.q(d,e,0),new A.q(d,e,2.2),0.7,B.LW,0.7,10)
w.f=v
w.r=u},
$S:199}
A.fAq.prototype={
$1(d){return d.b===this.a.a},
$S:z+14}
A.ftt.prototype={
$2(d,e){return this.a===d?e:0},
$S:715}
A.ftu.prototype={
$5(d,e,f,g,h){var w=d.a7(0,e.aK(0,g)).a7(0,new A.q(0,h,0)),v=this.a
A.kI(v,w.a7(0,f.aK(0,0.1)),e,B.e8,26,30,B.kG,f,0)
A.kI(v,w.a7(0,f.aK(0,0.2)),e,B.e8,22,26,B.i1,f,0.6)
A.kI(v,w.a7(0,f.aK(0,0.3)),e,B.e8,22,1.2,B.kG,f,0)
A.kI(v,w.a7(0,f.aK(0,0.3)),e,B.e8,1.2,26,B.kG,f,0)},
$S:z+88}
A.ftp.prototype={
$5(d,e,f,g,h){var w=d.a7(0,e.aK(0,g)),v=this.a,u=v.b
A.kI(v,w.a7(0,new A.q(0,42,0)).a7(0,f.aK(0,0.1)),e,B.e8,34,84,B.kG,f,0)
v.b=h
A.kI(v,w.a7(0,new A.q(0,41,0)).a7(0,f.aK(0,0.2)),e,B.e8,28,80,B.vJ,f,0.2)
v.b=0
A.kI(v,w.a7(0,new A.q(0,58,0)).a7(0,f.aK(0,0.3)),e,B.e8,20,26,B.MT,f,0)
A.kI(v,w.a7(0,new A.q(0,22,0)).a7(0,f.aK(0,0.3)),e,B.e8,20,26,B.MT,f,0)
v.aQ(w.a7(0,e.aK(0,9)).a7(0,new A.q(0,40,0)).a7(0,f.aK(0,1)),new A.q(2.6,2.6,2.6),B.Fe,0.8)
v.b=u},
$S:z+123}
A.ftq.prototype={
$5$poster(d,e,f,g,h){var w=C.a([d,e,f,g],x.o),v=h<0?A.hc4():new A.ftr(h),u=h===0,t=u?1000:256
u=u?424:256
return this.a.push(new A.fq(w,0,v,t,u,1,2,this.b,!1))},
$4(d,e,f,g){return this.$5$poster(d,e,f,g,-1)},
$S:z+90}
A.ftr.prototype={
$3(d,e,f){return A.fRy(d,e,f,this.a)},
$S:24}
A.fsN.prototype={
$1(d){var w=d.b
return w==="pole"||w==="lamppost"},
$S:z+4}
A.fsO.prototype={
$2(d,e){return D.k.aN(d.c,e.c)},
$S:z+17}
A.fsP.prototype={
$1(d){return this.a.cy.aj(0,d.a)},
$S:z+4}
A.ft_.prototype={
$1(d){return this.a.k4.t(0,d.a)},
$S:z+4}
A.fta.prototype={
$1(d){return B.f64.t(0,d.b)},
$S:z+4}
A.fts.prototype={
$3(d,e,f){var w=this.b
return A.vG(new A.q(d,e,f),this.a).a7(0,new A.q(w.c,0,w.d))},
$S:z+24}
A.ftj.prototype={
$3(d,e,f){return A.mV(d,e,f,this.a.a+D.k.bf(f/7))},
$S:24}
A.ftk.prototype={
$3(d,e,f){return A.mV(d,e,f,this.a.a+D.k.bf(f/7))},
$S:24}
A.ftl.prototype={
$3(d,e,f){return A.vF(d,e,f,"NGMY TOWN",this.a)},
$S:24}
A.ftm.prototype={
$3(d,e,f){return A.vF(d,e,f,"NGMY TOWN",this.a)},
$S:24}
A.ftn.prototype={
$3(d,e,f){return A.mV(d,e,f,this.a.a+D.k.bf(f/7))},
$S:24}
A.fto.prototype={
$3(d,e,f){return A.mV(d,e,f,this.a.a+4+D.k.bf(f/7))},
$S:24}
A.fsQ.prototype={
$3(d,e,f){return A.mV(d,e,f,this.a.a+D.k.bf(f/7))},
$S:24}
A.fsR.prototype={
$3(d,e,f){return A.mV(d,e,f,this.a.a+7+D.k.bf(f/7))},
$S:24}
A.fsS.prototype={
$3(d,e,f){return A.mV(d,e,f,this.a.a+3+D.k.bf(f/7))},
$S:24}
A.fsT.prototype={
$3(d,e,f){return A.mV(d,e,f,this.a.a+5+D.k.bf(f/7))},
$S:24}
A.fsU.prototype={
$3(d,e,f){return A.mV(d,e,f,this.a.a+1+D.k.bf(f/7))},
$S:24}
A.fsV.prototype={
$3(d,e,f){return A.mV(d,e,f,this.a.a+2+D.k.bf(f/7))},
$S:24}
A.fsW.prototype={
$3(d,e,f){return A.vF(d,e,f,"NGMY COMPANY","Building the movement")},
$S:24}
A.fsX.prototype={
$3(d,e,f){return A.vF(d,e,f,"NGMY","New Global Movement for Youth")},
$S:24}
A.fsY.prototype={
$3(d,e,f){return A.vF(d,e,f,"NGMY COMPANY","Building the movement")},
$S:24}
A.fsZ.prototype={
$3(d,e,f){return A.vF(d,e,f,"NGMY","New Global Movement for Youth")},
$S:24}
A.ft0.prototype={
$3(d,e,f){return A.mV(d,e,f,this.a.a+4+D.k.bf(f/7))},
$S:24}
A.ft1.prototype={
$3(d,e,f){return A.mV(d,e,f,this.a.a+6+D.k.bf(f/7))},
$S:24}
A.ft2.prototype={
$3(d,e,f){return A.mV(d,e,f,this.a.a+2+D.k.bf(f/7))},
$S:24}
A.ft3.prototype={
$3(d,e,f){return A.mV(d,e,f,this.a.a+3+D.k.bf(f/7))},
$S:24}
A.ft4.prototype={
$3(d,e,f){return A.vF(d,e,f,"NGMY STORE","Everything you need")},
$S:24}
A.ft5.prototype={
$3(d,e,f){return A.vF(d,e,f,"NGMY STORE","Everything you need")},
$S:24}
A.ft6.prototype={
$3(d,e,f){return A.vF(d,e,f,"NGMY STORE","Everything you need")},
$S:24}
A.ft7.prototype={
$3(d,e,f){return A.vF(d,e,f,"NGMY UBER","Rides home")},
$S:24}
A.ft8.prototype={
$3(d,e,f){return A.vF(d,e,f,"NGMY UBER","Rides home")},
$S:24}
A.ft9.prototype={
$3(d,e,f){return A.vF(d,e,f,"NGMY LICENCE","Get your Uber licence")},
$S:24}
A.ftb.prototype={
$3(d,e,f){return A.vF(d,e,f,"NGMY LICENCE","Get your Uber licence")},
$S:24}
A.ftc.prototype={
$3(d,e,f){return A.vF(d,e,f,"NGMY LICENCE","Get your Uber licence")},
$S:24}
A.ftd.prototype={
$3(d,e,f){return A.vF(d,e,f,"NGMY GAS","Open 24 hours")},
$S:24}
A.fte.prototype={
$3(d,e,f){return A.mV(d,e,f,this.a.a*2+this.b+1)},
$S:24}
A.ftf.prototype={
$1(d){return d.b===this.a.a&&!d.x&&d.Q.length!==0},
$S:z+14}
A.ftg.prototype={
$1(d){return d.b===this.a.a&&d.x},
$S:z+14}
A.fth.prototype={
$3(d,e,f){return A.fRy(d,e,f,0)},
$S:24}
A.fti.prototype={
$3(d,e,f){return A.fRy(d,e,f,0)},
$S:24}
A.fDx.prototype={
$2(d,e){var w,v=this.a
if(v!=null){w=v.b-d
v=v.c-e
v=w*w+v*v<1e4}else v=!0
return v},
$S:1820}
A.fDu.prototype={
$1(d){return D.d.t(B.I9,d.b)},
$S:z+4}
A.fDv.prototype={
$1(d){return d.b===this.a.a},
$S:z+14}
A.fDw.prototype={
$1(d){return d.b===this.a.a},
$S:z+14}
A.fjB.prototype={
$5(d,e,f,g,h){var w,v,u,t,s,r,q,p,o,n,m,l,k,j
for(w=d.length,v=x.z,u=this.a,t=-f/2,s=u.a,r=this.b,q=0,p=0;p<w;++p){o=d[p]
n=o.a
m=C.a([],v)
l=new A.fg(m)
l.b=u.b
l.f=u.f
l.r=!0
l.aG(new A.q(0,t,0),new A.q(g,f,g),h)
k=(q&1)===0?1:-1
j=n>0?1:-1
D.d.v(s,A.nE(m,r*k*j,0,new A.q(n,e,o.b)));++q}},
$S:1821}
A.fjr.prototype={
$3(d,e,f){var w=this.a,v=this.b,u=this.c
return new A.q(w.c+v*d+u*f,e,w.d+u*d-v*f)},
$2(d,e){return this.$3(d,e,0)},
$S:z+44}
A.fuk.prototype={
$3(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k=x.z,j=C.a([],k),i=new A.fg(j)
i.b=this.a
i.r=!0
d.$1(i)
k=C.a([],k)
for(j=A.bCH(j,e,B.dX),w=j.length,v=f.a,u=f.b,t=f.c,s=x.o,r=0;r<j.length;j.length===w||(0,C.L)(j),++r){q=j[r]
p=C.a([],s)
for(o=q.a,n=o.length,m=0;m<o.length;o.length===n||(0,C.L)(o),++m){l=o[m]
p.push(new A.q(l.a+v,l.b+u,l.c+t))}k.push(new A.kq(p,q.b,q.c,q.d,q.e,q.f,q.r,q.w,q.x,q.y,q.z))}D.d.v(this.b.a,k)},
$S:z+91}
A.ftS.prototype={
$6$joint(d,e,f,g,h,i){var w=this.a
w.Tm(d,e,f,h,!1,g,this.b)
if(this.c&&i)w.ee(e,g*1.04,h,3,6)},
$5(d,e,f,g,h){return this.$6$joint(d,e,f,g,h,!0)},
$S:z+92}
A.ftT.prototype={
$1(d){return d.fQ(B.dX,2.6,B.YD,this.a,this.b,0.15)},
$S:z+1}
A.ftU.prototype={
$1(d){return d.ee(B.dX,2.6,D.bO,3,this.a)},
$S:z+1}
A.ftV.prototype={
$1(d){return d.ee(B.dX,5.2,this.a,this.b,this.c+2)},
$S:z+1}
A.fu5.prototype={
$1(d){var w=this,v=w.d?12:8
return d.Tm(B.dX,B.aaZ,w.a,w.b,!1,w.c,v)},
$S:z+1}
A.fud.prototype={
$1(d){return d.La(B.dX,B.h9m,5.1,B.bgD,!1,12)},
$S:z+1}
A.fue.prototype={
$1(d){return d.ee(B.dX,2.7,this.a,this.b,this.c)},
$S:z+1}
A.fuf.prototype={
$1(d){var w=this,v=w.a?6.2:6.7,u=w.c
if(u<4)u=4
return d.ee(B.dX,v,w.b,u,w.d)},
$S:z+1}
A.fug.prototype={
$1(d){var w=this.b,v=w?6:4
w=w?12:8
return d.ee(B.dX,4.7,this.a,v,w)},
$S:z+1}
A.fuh.prototype={
$1(d){return d.ee(B.dX,3,this.a,this.b,this.c)},
$S:z+1}
A.fui.prototype={
$1(d){return d.ee(B.dX,1.25,this.a,3,6)},
$S:z+1}
A.fuj.prototype={
$1(d){return d.ee(B.dX,1,D.c,3,6)},
$S:z+1}
A.ftW.prototype={
$1(d){return d.ee(B.dX,1.15,this.a,2,6)},
$S:z+1}
A.ftX.prototype={
$1(d){return d.ee(B.dX,1,this.a,3,6)},
$S:z+1}
A.ftY.prototype={
$1(d){return d.ee(B.dX,1,this.a,2,6)},
$S:z+1}
A.ftZ.prototype={
$1(d){var w=C.ar(this.a,D.c,0.1)
w.toString
return d.ee(B.dX,1,w,2,6)},
$S:z+1}
A.fu_.prototype={
$1(d){var w=this.b,v=w?4:3
w=w?9:6
return d.ee(B.dX,5,this.a,v,w)},
$S:z+1}
A.fu0.prototype={
$1(d){return d.ee(B.dX,3.6,this.a,3,this.b)},
$S:z+1}
A.fu1.prototype={
$1(d){return d.ee(B.dX,4.8,this.a,this.b,this.c)},
$S:z+1}
A.fu2.prototype={
$1(d){var w=this.b,v=w?4:3
w=w?9:6
return d.ee(B.dX,6.2,this.a,v,w)},
$S:z+1}
A.fu3.prototype={
$1(d){return d.ee(B.dX,4.2,this.a,3,this.b)},
$S:z+1}
A.fu4.prototype={
$1(d){var w=this.b,v=w?4:3
w=w?9:6
return d.ee(B.dX,5.1,this.a,v,w)},
$S:z+1}
A.fu6.prototype={
$1(d){return d.ee(B.dX,3.4,this.a,3,this.b)},
$S:z+1}
A.fu7.prototype={
$1(d){var w=C.ar(this.a,D.c,Math.abs(0.08))
w.toString
return d.ee(B.dX,2.6,w,this.b,this.c)},
$S:z+1}
A.fu8.prototype={
$1(d){return d.ee(B.dX,4.9,this.a,this.b,this.c)},
$S:z+1}
A.fu9.prototype={
$1(d){return d.ee(B.dX,3,this.a,3,this.b)},
$S:z+1}
A.fua.prototype={
$1(d){var w=this.b,v=w?4:3
w=w?9:6
return d.ee(B.dX,5,this.a,v,w)},
$S:z+1}
A.fub.prototype={
$1(d){return d.ee(B.dX,3.6,this.a,3,this.b)},
$S:z+1}
A.fuc.prototype={
$1(d){return d.ee(B.dX,2.3,this.a,3,6)},
$S:z+1}
A.fnr.prototype={
$4(d,e,f,g){var w,v,u,t,s,r,q,p
for(w=this.a,v=e/2+0.2,u=d-8,t=-e/2-0.2,s=d/2+0.2,r=e-8,q=-d/2-0.2,p=f;p<g;p+=22){A.kI(w,new A.q(0,p,v),B.hu,B.e8,u,9,B.i1,B.ig,0.6)
A.kI(w,new A.q(0,p,t),B.r0,B.e8,u,9,B.i1,B.tr,0.6)
A.kI(w,new A.q(s,p,0),B.tr,B.e8,r,9,B.i1,B.hu,0.6)
A.kI(w,new A.q(q,p,0),B.ig,B.e8,r,9,B.i1,B.r0,0.6)}},
$S:1822}
A.fAE.prototype={
$4$alongX(d,e,f,g){var w,v,u,t,s,r,q,p,o,n
for(w=this.a,v=0;v<=f;++v){u=A.pB(d,e,v/f)
w.aE6(new A.q(u.a,4,u.c),B.hhV,B.Yr,!1,0.05)}t=A.pB(d,e,0.5)
for(s=e.aE(0,d).guZ()+0.15,r=t.a,q=t.c,p=0;p<2;++p){o=B.dgI[p]
n=g?new A.q(s,0.16,0.3):new A.q(0.3,0.16,s)
w.aQ(new A.q(r,o,q),n,B.Yr,0.05)}},
$3(d,e,f){return this.$4$alongX(d,e,f,!0)},
$S:z+94}
A.fAB.prototype={
$2(d,e){return this.a.j9(A.Dl(d,0.35,3),0.06,e,!1,0.4,6)},
$S:z+95}
A.fAA.prototype={
$1(d){return this.a.j9(A.Dl(d,0.5,3),0.14,B.q_,!1,0.3,8)},
$S:z+96}
A.fAD.prototype={
$2$col(d,e){return this.a.j9(A.Dl(d,0.4,3),0.055,e,!1,0.35,6)},
$1(d){return this.$2$col(d,B.Yz)},
$S:z+97}
A.fAC.prototype={
$5$h$w(d,e,f,g,h){var w=this.a
w.b=d
w.aQ(e,new A.q(h,g,0.06),f,0.3)},
$3(d,e,f){return this.$5$h$w(d,e,f,0.7,0.45)},
$4$w(d,e,f,g){return this.$5$h$w(d,e,f,0.7,g)},
$S:z+98}
A.fBz.prototype={
$0(){return A.fQ(1320,120,0.25,"tri")},
$S:0}
A.dTg.prototype={
$1(d){return this.a},
$S:39}
A.dTj.prototype={
$0(){return C.a5(this.a,!1).ik()},
$S:0}
A.dTk.prototype={
$0(){return this.a.rF(A.b12("","",!0))},
$S:0}
A.dTl.prototype={
$0(){return this.a.rF(B.dEz)},
$S:0}
A.dTo.prototype={
$0(){return this.a.rF(A.b12("wiring","",!0))},
$S:0}
A.dTp.prototype={
$0(){return this.a.rF(A.b12("plumbing","",!0))},
$S:0}
A.dTq.prototype={
$0(){return this.a.rF(A.b12("fix","",!0))},
$S:0}
A.dTr.prototype={
$0(){return this.a.rF(A.ciz(!0,!0,null,!1))},
$S:0}
A.dTs.prototype={
$0(){return this.a.rF(A.ciz(!0,!0,null,!0))},
$S:0}
A.dTt.prototype={
$0(){return this.a.rF(B.e9l)},
$S:0}
A.dTu.prototype={
$0(){return this.a.rF(new A.as3(!0,null))},
$S:0}
A.dTv.prototype={
$0(){return this.a.rF(B.dOD)},
$S:0}
A.dTm.prototype={
$0(){var w=this.a
return w.m(new A.dTi(w))},
$S:0}
A.dTi.prototype={
$0(){var w=this.a,v=w.e
w.e=!v
if(v)w.f=""},
$S:0}
A.dTn.prototype={
$1(d){var w=this.a
return w.m(new A.dTh(w,d))},
$S:2}
A.dTh.prototype={
$0(){return this.a.f=this.b},
$S:0}
A.dTb.prototype={
$0(){var w=this.b.a
w=w==="house"?B.hmk:A.b12("",w,!1)
return this.a.rF(w)},
$S:0}
A.dTc.prototype={
$0(){return this.a.rF(B.dLk)},
$S:0}
A.dTd.prototype={
$0(){return this.a.rF(B.aIL)},
$S:0}
A.dTe.prototype={
$1(d){return d.length!==0},
$S:3}
A.dTf.prototype={
$1(d){var w=this.a.a
return D.a.t((w[4]+" "+w[0]+" "+w[5]).toLowerCase(),d)},
$S:3}
A.f7v.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new A.f7u())},
$S:11}
A.f7u.prototype={
$0(){},
$S:0}
A.cxA.prototype={
$0(){$.ajr=!$.ajr
A.hf6()
A.fQ($.ajr?520:420,60,0.25,"tri")},
$S:0}
A.cxB.prototype={
$0(){$.ajq=!$.ajq
A.hf6()
A.fQ($.ajq?520:420,60,0.25,"tri")},
$S:0}
A.fSN.prototype={
$1(d){var w,v,u,t,s,r,q,p,o=null,n=C.aG(d,o,x.w).w,m=this.b,l=this.c,k=l.length,j=x.p,i=C.a([C.d(this.a,o,o,o,o,o,o,D.de,o,o,o),D.au,C.d(""+new C.Z(m,new A.fSM(),C.T(m).k("Z<1>")).gL(0)+" of "+k+" steps done",o,o,o,o,o,o,B.Kf,o,o,o),D.W],j)
for(w=0;w<k;++w){v=D.c.j(0.05)
u=new C.aP(14,14)
t=new C.ay(m[w]?D.be.j(0.6):D.bz,1,D.r,-1)
s=m[w]
r=s?"\u2705":""+(w+1)+"."
q=s?D.c:D.aA
p=l[w]
s=s?D.aC:D.c
i.push(C.p(o,new C.ca(D.aM,D.e,D.i,D.E,o,D.p,o,0,C.a([new C.y(r,o,new C.F(!0,q,o,o,o,o,14,D.u,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),o,o,o,o,o,o,o,o,o),D.as,new C.by(1,D.ba,new C.y(p,o,new C.F(!0,s,o,o,o,o,13,o,o,o,o,o,1.4,o,o,o,o,o,o,o,o,o,o,o,o,o),o,o,o,o,o,o,o,o,o),o)],j),o),D.f,o,o,new C.o(v,o,new C.bH(t,t,t,t),new C.bh(u,u,u,u),o,o,D.n),o,o,o,D.ct,D.bg,o,o,o))}return C.bn(!0,new C.cT(new C.aZ(0,1/0,0,n.a.b*0.75),C.cl(i,o,o,D.bQ,o,o,D.ah,!0),o),!0,!1,D.af,!0,!0)},
$S:27}
A.fSM.prototype={
$1(d){return d},
$S:117}
A.bXB.prototype={
$0(){return C.a5(this.a,!1).ik()},
$S:0}
A.djT.prototype={
$0(){return this.a.LK$=this.b},
$S:0}
A.djU.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.djS(w))},
$S:0}
A.djS.prototype={
$0(){return this.a.LK$=B.nC},
$S:0}
A.dbi.prototype={
$0(){var w=this.a,v=w.gdI(0),u=this.b
v.w=u==="practice"
u=u==="test"
v.z=u
if(u)v.f=v.e=!1
w.pv()},
$S:0}
A.dbg.prototype={
$0(){var w=this.a
w.y=this.b
w.z=this.c},
$S:0}
A.dbh.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.dbf(w))},
$S:0}
A.dbf.prototype={
$0(){return this.a.y=null},
$S:0}
A.db0.prototype={
$0(){return this.a.x=0},
$S:0}
A.db1.prototype={
$0(){return this.a.x=0},
$S:0}
A.db2.prototype={
$1(d){return d.a===this.a},
$S:z+7}
A.db3.prototype={
$1(d){return d.e},
$S:z+35}
A.db_.prototype={
$1(d){var w=this.a.gdI(0).b
return new C.bd(w,C.a7(w).k("bd<2>")).t(0,d)},
$S:3}
A.db4.prototype={
$0(){var w=this.a
w.gdI(0).r=!1
w.pv()},
$S:0}
A.db5.prototype={
$1(d){return d.a===this.a},
$S:z+12}
A.db6.prototype={
$2(d,e){return e===this.a},
$S:405}
A.db7.prototype={
$0(){var w=this.a
w.w=""
w.pv()},
$S:0}
A.db8.prototype={
$1(d){return d.a===this.a},
$S:z+7}
A.db9.prototype={
$0(){var w=this.a,v=this.b
if(w.w===v)v=""
w.w=v
w.x=v.length===0?0:this.c},
$S:0}
A.dba.prototype={
$1(d){return d.a===this.a},
$S:z+7}
A.dbb.prototype={
$0(){var w=this.a
w.pv()
w.x=this.b},
$S:0}
A.dbc.prototype={
$0(){var w=this.a
w.pv()
w.x=this.b},
$S:0}
A.dbd.prototype={
$0(){return this.a.x=this.b},
$S:0}
A.dbe.prototype={
$0(){var w=this.a,v=w.gdI(0),u=v.a
v.a=!u
if(u)v.d=!1
w.pv()},
$S:0}
A.dbj.prototype={
$0(){var w,v=this.a,u=v.gdI(0)
u.a=!0
u.d=!1
w=this.b
if(w.e)u.x=!0
u.Q=w.r
v.ax=v.at.gig()/1000
v.pv()},
$S:0}
A.dbk.prototype={
$0(){var w=this.a,v=w.gdI(0)
v.d=v.a=!0
w.pv()},
$S:0}
A.dbt.prototype={
$1(d){return!d},
$S:117}
A.dbC.prototype={
$0(){var w=this.a.gtj()
return A.fSL(this.b,w.b,w.d,this.c)},
$S:0}
A.dbJ.prototype={
$1(d){var w,v,u,t,s=C.a([],x.z),r=this.a,q=r.gdI(0),p=q.Q
if(p.length!==0){p=r.at.gig()
w=r.ax
v=q.Q
u=v==="fire"?7:4.5
t=p/1000-w<u
p=v}else t=!1
if(!t)q=q.x&&p.length!==0
else q=!0
if(q){q=t?p:"smolder"
A.hvL(new A.fg(s),q,new A.dbq(),0.32,r.at.gig()/1000)}s=C.C(s,x.e)
q=r.LK$
if(q.length!==0)D.d.v(s,A.ha5(q,r.at.gig()/1000))
return s},
$S:z+10}
A.dbq.prototype={
$1(d){return new A.q(d.a*0.32,-0.2+d.b*0.32,0.8+d.c*0.32)},
$S:z+6}
A.dbu.prototype={
$0(){return this.a.aB8("learn")},
$S:0}
A.dbv.prototype={
$0(){return this.a.aB8("practice")},
$S:0}
A.dbD.prototype={
$0(){return this.a.aB8("test")},
$S:0}
A.dbE.prototype={
$0(){var w=this.a
return w.m(new A.dbs(w))},
$S:0}
A.dbs.prototype={
$0(){var w=this.a,v=w.gdI(0)
v.e=!v.e
w.pv()},
$S:0}
A.dbF.prototype={
$0(){var w=this.a
return w.m(new A.dbr(w))},
$S:0}
A.dbr.prototype={
$0(){var w=this.a,v=w.gdI(0)
v.f=!v.f
w.pv()},
$S:0}
A.dbG.prototype={
$0(){return A.hct(this.a)},
$S:0}
A.dbH.prototype={
$0(){var w=this.a,v=w.gis()
return v.im(10,0.2,new A.q(0.6,0,w.gdI(0).c===0?4.2:0.4),-0.95)},
$S:0}
A.dbI.prototype={
$0(){var w=this.a,v=w.gis()
return v.im(10,0.2,new A.q(-0.6,0,w.gdI(0).c===0?4.2:0.4),0.95)},
$S:0}
A.dbK.prototype={
$1(d){return!this.a.gdI(0).b.it(0,d.a)},
$S:z+7}
A.dbw.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m=this.a,l=m.gdI(0),k=l.b,j=this.b,i=j.a
if(k.it(0,i)){m.me("That wire is already fastened. Tap the wire in the 3D view to take it off if you want to move it.")
return}w=m.aEq(i)
m.m(new A.dbp(m,w,j))
if(m.w.length!==0){m.aYd(i)
if(w){v=C.a([],x.o)
for(u=m.gtj(),t=u.f,s=t.length,r=0;r<s;++r){q=t[r]
p=!1
if(q.c.t(0,i)){o=q.a
if(k.h(0,o)==null){n=m.r
p=(n===$?m.r=A.bD0(u,l,!0):n).b.h(0,o)!=null}}if(p){n=m.r
v.push((n===$?m.r=A.bD0(u,l,!0):n).b.h(0,q.a).c)}}m.aHx(v)
m.hs(j.b+": the glowing place is where it goes.",!0)}else m.hs(j.b+": now tap the screw it belongs on. Tap its name again to light up where it goes.",!0)}},
$S:0}
A.dbp.prototype={
$0(){var w,v=this,u=v.a
if(v.b)w=v.c.a
else{w=v.c.a
if(u.w===w)w=""}return u.w=w},
$S:0}
A.dbx.prototype={
$0(){var w=this.a,v=w.gtj(),u=v.b,t=A.fSi(v)
w=w.gdI(0)
w=C.a([new A.abb(u,t,A.h9P(v,w),w.y)],x.fJ)
v=B.aHw.h(0,v.a)
if(v==null)v=B.aAG
return A.hA8(this.b,w,v,u)},
$S:0}
A.dby.prototype={
$0(){var w=this.a
w.m(new A.dbo(w))
A.uk()
w.hs("The wires are folded back and the device is pushed into the box. Now put the cover plate on.",!0)
w.oj()},
$S:0}
A.dbo.prototype={
$0(){var w=this.a
w.gdI(0).c=1
w.pv()},
$S:0}
A.dbz.prototype={
$0(){var w=this.a
w.m(new A.dbn(w))
w.oj()},
$S:0}
A.dbn.prototype={
$0(){var w=this.a
w.gdI(0).c=0
w.pv()},
$S:0}
A.dbA.prototype={
$0(){var w=this.a
w.m(new A.dbm(w))
A.uk()
w.hs("Cover plate on. Now turn the power on and test.",!0)},
$S:0}
A.dbm.prototype={
$0(){var w=this.a
w.gdI(0).c=2
w.pv()},
$S:0}
A.dbB.prototype={
$0(){var w=this.a
w.m(new A.dbl(w))
w.oj()},
$S:0}
A.dbl.prototype={
$0(){var w=this.a,v=w.gdI(0)
v.c=0
v.b.aa(0)
v.a=!0
v.x=v.d=!1
v.Q=""
w.Q=0
w.w=""
w.x=0
w.pv()},
$S:0}
A.eXI.prototype={
$0(){var w=this.a
w.x=this.b
w.y=this.c},
$S:0}
A.eXJ.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.eXH(w))},
$S:0}
A.eXH.prototype={
$0(){return this.a.x=null},
$S:0}
A.eXA.prototype={
$0(){return this.a.w=0},
$S:0}
A.eXB.prototype={
$0(){var w=this.a,v=w.gdI(0)
v.a.M(0,this.b)
v.c=!1
v.d=""
w.f=A.aQ_(v)
w.r=""},
$S:0}
A.eXC.prototype={
$0(){var w=this.a,v=w.gdI(0)
v.b.n(0,this.b,!0)
v.d=""
w.f=A.aQ_(v)},
$S:0}
A.eXD.prototype={
$0(){var w=this.a,v=w.gdI(0)
v.c=!1
v.d=""
w.f=A.aQ_(v)},
$S:0}
A.eXE.prototype={
$0(){return this.a.w=this.b},
$S:0}
A.eXF.prototype={
$1(d){return this.a.gdI(0).b.h(0,d)!==!0},
$S:3}
A.eXG.prototype={
$0(){var w,v=this.a,u=v.gdI(0)
u.c=!0
w=this.b
u.d=w.length===0?"":D.d.gI(w)
v.f=A.aQ_(u)},
$S:0}
A.eXN.prototype={
$1(d){return!d},
$S:117}
A.eXR.prototype={
$0(){return A.fSL(this.a,"Sink drain (P-trap)",B.djl,this.b)},
$S:0}
A.eXO.prototype={
$1(d){var w=this.a,v=C.C(A.ikJ(w.gdI(0),d),x.e)
w=w.LK$
if(w.length!==0)D.d.v(v,A.ha5(w,d))
return v},
$S:z+10}
A.eXP.prototype={
$0(){var w,v=this.a,u=this.b,t=v.aEq(u)
v.m(new A.eXM(v,t,u))
if(t){A:{if("tail"===u){w=B.hcP
break A}if("trap"===u){w=B.hhW
break A}w=B.aXE
break A}v.aHx(C.a([w],x.o))
if(u==="tail")u="Tailpiece"
else u=u==="trap"?"P-trap":"Trap arm"
v.hs(u+": the glowing place is where it goes. Tap it.",!0)}},
$S:0}
A.eXM.prototype={
$0(){var w,v=this,u=v.a
if(v.b)w=v.c
else{w=v.c
if(u.r===w)w=""}return u.r=w},
$S:0}
A.eXQ.prototype={
$0(){var w=this.a
w.m(new A.eXL(w))
w.oj()},
$S:0}
A.eXL.prototype={
$0(){var w,v=this.a,u=v.gdI(0)
u.a.aa(0)
w=u.b
w.aJQ(w,new A.eXK())
u.c=!1
v.r=u.d=""
v.w=0
v.f=A.aQ_(u)},
$S:0}
A.eXK.prototype={
$2(d,e){return!1},
$S:1824}
A.dek.prototype={
$0(){var w=this.a
w.x=this.b
w.y=this.c},
$S:0}
A.del.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.dej(w))},
$S:0}
A.dej.prototype={
$0(){return this.a.x=null},
$S:0}
A.dec.prototype={
$0(){return this.a.w=0},
$S:0}
A.def.prototype={
$1(d){return d.a===this.a},
$S:z+37}
A.deg.prototype={
$0(){var w=this.a,v=w.gdI(0)
v.r=v.f=!1
w.f=A.agM(v)
w.w=this.b},
$S:0}
A.deh.prototype={
$0(){var w=this.a,v=w.gdI(0),u=v.e
u.bs(u,new A.dee(this.b))
v.r=v.f=!1
w.f=A.agM(v)},
$S:0}
A.dee.prototype={
$2(d,e){return e===this.a},
$S:405}
A.dei.prototype={
$0(){return this.a.w=this.b},
$S:0}
A.dem.prototype={
$0(){var w,v=this.a
if(this.b){w=v.gdI(0)
w.f=!w.f}else{w=v.gdI(0)
w.r=!w.r}v.f=A.agM(v.gdI(0))
v.w=this.c},
$S:0}
A.ded.prototype={
$0(){var w=this.a,v=w.gdI(0)
v.r=v.f=!(v.f&&v.r)
w.f=A.agM(v)},
$S:0}
A.deq.prototype={
$1(d){return!d},
$S:117}
A.dew.prototype={
$0(){return A.fSL(this.a,"Faucet supply lines",B.dnF,this.b)},
$S:0}
A.der.prototype={
$1(d){var w=this.a,v=C.C(A.ibs(w.gdI(0),d),x.e)
w=w.LK$
if(w.length!==0)D.d.v(v,A.ha5(w,d))
return v},
$S:z+10}
A.des.prototype={
$0(){var w=this.a
return w.m(new A.dep(w))},
$S:0}
A.dep.prototype={
$0(){var w=this.a,v=w.gdI(0)
v.w=!v.w
w.f=A.agM(v)},
$S:0}
A.deu.prototype={
$0(){var w,v,u,t,s,r,q=this.b,p=this.a,o=q.aEq(p.a)
q.m(new A.deo(p,q,o))
if(o){w=p.a==="hot"
v=x.o
u=C.a([],v)
for(t=0;t<4;++t){s=B.RX[t]
if(s.c.t(0,p.a)&&q.gdI(0).e.h(0,s.a)==null){r=A.Rs(s.a)
u.push(new A.q(r.a+0,r.b+0,r.c+1.2))}}if(u.length!==0)p=u
else p=C.a([A.Rs(w?61:62).a7(0,B.h7R)],v)
q.aHx(p)
if(u.length!==0)p=(w?"Hot":"Cold")+" hose: the glowing places are where its two ends go."
else p=(w?"Hot":"Cold")+" hose is on. Now turn its valve: tap the handle."
q.hs(p,!0)}},
$S:0}
A.deo.prototype={
$0(){var w,v,u=this,t=u.b
if(u.c)w=u.a.a
else{w=t.r
v=u.a.a
w=w===v?"":v}return t.r=w},
$S:0}
A.det.prototype={
$1(d){return d===this.a.a},
$S:3}
A.dev.prototype={
$0(){var w=this.a
w.m(new A.den(w))
w.oj()},
$S:0}
A.den.prototype={
$0(){var w=this.a,v=w.gdI(0)
v.e.aa(0)
v.r=v.f=!1
w.r=""
w.w=0
w.f=A.agM(v)},
$S:0}
A.dls.prototype={
$0(){var w=this.a
w.x=this.b
w.y=this.c},
$S:0}
A.dlt.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.dlr(w))},
$S:0}
A.dlr.prototype={
$0(){return this.a.x=null},
$S:0}
A.dlm.prototype={
$0(){return this.a.r=0},
$S:0}
A.dlo.prototype={
$0(){var w=this.a,v=w.d
v.d.W(0,72)
w.f=A.agN(v)
w.r=this.b},
$S:0}
A.dlp.prototype={
$0(){var w=this.a,v=w.d
v.c=!0
v.b=!1
w.f=A.agN(v)
w.r=this.b},
$S:0}
A.dlq.prototype={
$0(){return this.a.r=this.b},
$S:0}
A.dln.prototype={
$1(d){return this.a},
$S:39}
A.dlB.prototype={
$0(){return A.fSL(this.a,"Fix the house",B.crt,this.b)},
$S:0}
A.dlw.prototype={
$0(){return this.a.cgF(this.b)},
$S:0}
A.dly.prototype={
$1(d){return d<=this.a.d.a},
$S:34}
A.dlx.prototype={
$1(d){return A.hw3(this.a.d,d)},
$S:z+10}
A.dlz.prototype={
$0(){var w=this.a
return w.m(new A.dlv(w))},
$S:0}
A.dlv.prototype={
$0(){var w=this.a
return w.w=w.w==="wrench"?"":"wrench"},
$S:0}
A.dlA.prototype={
$1(d){var w=this.a
return w.m(new A.dlu(w,d))},
$S:6}
A.dlu.prototype={
$0(){var w=this.a,v=w.d,u=D.k.V(this.b)
v.a=u
if(u<5)w.r=0
w.f=A.agN(v)},
$S:0}
A.fj9.prototype={
$0(){return this.a.e=!1},
$S:0}
A.fj7.prototype={
$0(){return this.a.e=!0},
$S:0}
A.fj8.prototype={
$0(){var w=this.a
w.d=C.dh(B.bxE,new A.fj6(w))},
$S:0}
A.fj6.prototype={
$1(d){var w=this.a.a,v=w.e
return v.apH(w.f?1.06:0.94)},
$S:11}
A.fjb.prototype={
$1(d){return this.a.c8M(0)},
$S:68}
A.fjc.prototype={
$1(d){return this.a.b86()},
$S:110}
A.fja.prototype={
$1(d){return this.a.b86()},
$S:134}
A.cc1.prototype={
$0(){return C.a5(this.a,!1).ik()},
$S:0}
A.fBf.prototype={
$5(d,e,f,g,h){var w=this.a.a.t(0,h),v=this.b
v.b=d
if(w)v.apo(e,0.66,f,!1,!0,!0,g,14)
else{v.d=0.3
v.a7g(e,0.74,D.b_,!1,!0,0,8)
v.d=1}},
$S:z+100}
A.fBe.prototype={
$6(d,e,f,g,h,i){var w,v
if(!i)return
w=this.a.b.h(0,e)
v=w===!0?f:f.a7(0,h)
w=this.b
w.e=0.5
w.b=d
w.dm(v.aE(0,g.aK(0,0.6)),v.a7(0,g.aK(0,0.6)),1.12,B.q_,0.35,8)
w.r6(v.aE(0,g.aK(0,0.62)),v.aE(0,g.aK(0,0.5)),1.2,0.5,B.XQ,0.2,8)
w.b=0
w.r6(f.aE(0,g.aK(0,0.05)),f.a7(0,g.aK(0,0.08)),0.82,0.55,B.bq8,0.1,12)
w.e=0},
$S:z+101}
A.fBd.prototype={
$1(d){return d.b<-0.6},
$S:z+22}
A.fAk.prototype={
$1(d){return this.a.e.h(0,d)===this.b},
$S:34}
A.fCV.prototype={
$3(d,e,f){var w,v,u,t,s=A.Rs(d),r=C.a([],x.o)
for(w=s.a,v=s.b,u=s.c,t=0;t<=8;++t)r.push(new A.q(w+f*t/8*2,v+(2.4*t/8-9*Math.pow(t/8,2)),u+(1+3.5*t/8)))
A.h7M(this.a,r,this.b,e,0.28,1.2)},
$S:1825}
A.fCU.prototype={
$1(d){return this.a.e.h(0,d.a)!=null},
$S:z+37}
A.co5.prototype={
$1(d){return d.a===this.a},
$S:z+102}
A.co6.prototype={
$1(d){return d.a===this.a},
$S:z+3}
A.co2.prototype={
$1(d){return this.a.vr(0,d).c.toLowerCase()},
$S:14}
A.co7.prototype={
$1(d){var w
if(!this.a.e.t(0,d.a)){w=d.b
w=w==="valve"||D.a.a0(w,"hose")}else w=!1
return w},
$S:z+3}
A.co8.prototype={
$1(d){var w=this.a,v=d.a
return w.e.t(0,v)&&w.aHF(v)>0},
$S:z+3}
A.co9.prototype={
$1(d){return d.a},
$S:z+23}
A.coa.prototype={
$1(d){return d.a},
$S:z+23}
A.co3.prototype={
$1(d){return this.a.e.t(0,d.a)},
$S:z+3}
A.co4.prototype={
$1(d){var w=this.a,v=d.a
return w.aHF(v)<=0||!w.e.t(0,v)},
$S:z+3}
A.fBc.prototype={
$1(d){var w=this.a
w.b=0
w.dm(new A.q(d,8,0),new A.q(d,8,1.6),0.5,B.LW,0.7,10)},
$S:6}
A.fBa.prototype={
$1(d){var w,v,u,t,s,r,q=C.a([],x.o)
for(w=d.length,v=this.a,u=v.a,t=v.b,v=v.c,s=0;s<d.length;d.length===w||(0,C.L)(d),++s){r=d[s]
q.push(new A.q(r.a+u,r.b+t,r.c+v))}return q},
$S:z+105}
A.fB4.prototype={
$3$r(d,e,f){var w=this.a,v=this.b.c
v===$&&C.c()
w.b=9100+D.d.bh(v.c,new A.fB7(d))
w.d=0.32
w.a7g(e,f,D.b_,!1,!0,0,8)
w.d=1},
$2(d,e){return this.$3$r(d,e,1.2)},
$S:z+106}
A.fB7.prototype={
$1(d){return d.a===this.a},
$S:z+3}
A.fB5.prototype={
$3(d,e,f){var w=this.a,v=this.b.c
v===$&&C.c()
w.b=9100+D.d.bh(v.c,new A.fB6(d))
w.d=0.32
w.aG(e,f,D.b_)
w.d=1},
$S:z+107}
A.fB6.prototype={
$1(d){return d.a===this.a},
$S:z+3}
A.fBb.prototype={
$3(d,e,f){var w,v,u,t=this,s=t.a,r=s.c
r===$&&C.c()
w=D.d.cp(r.c,d)
r=d.c
v=s.e
u=d.a
if(v.t(0,u))s="Fitted."
else{s=s.b?"":d.e
s="A spot for the "+r.toLowerCase()+". "+s}t.b.n(0,9100+w,new A.cV(r,s,e,26))
if(t.c&&!v.t(0,u)&&t.d.length!==0)t.e.push(new A.hh(e.a7(0,B.h0V),f,D.eP,0))},
$S:z+108}
A.fB0.prototype={
$0(){return this.a.$3(this.b.a,new A.q(this.c-10,9,2.4),B.ab5)},
$S:0}
A.fB1.prototype={
$0(){return this.a.$3(this.b.a,new A.q(this.c-8,9,2.4),B.ab5)},
$S:0}
A.fB2.prototype={
$0(){return this.a.$3(this.b.a,new A.q(this.c+8,9,2.4),B.ab5)},
$S:0}
A.fB8.prototype={
$4(d,e,f,g){var w,v,u,t,s=this
if(D.d.bh(s.a,new A.fB9(d))<0||!s.b.e.t(0,d))return
w=s.b.f.h(0,d)
v=(w==null?0:w)>=1
w=s.c
u=9260+g
w.b=u
t=v?e:e.a7(0,f.aK(0,1.7))
w.dm(t.aE(0,f.aK(0,0.6)),t.a7(0,f.aK(0,0.6)),1.12,B.q_,0.35,8)
w.r6(t.aE(0,f.aK(0,0.62)),t.aE(0,f.aK(0,0.5)),1.2,0.5,B.XQ,0.2,8)
w=v?"Tight.":"Loose. Tap it with the wrench to tighten it."
s.d.n(0,u,new A.cV("Slip nut",w,e,10))},
$S:z+109}
A.fB9.prototype={
$1(d){return d.a===this.a},
$S:z+3}
A.fB3.prototype={
$1(d){return d.a===this.a},
$S:z+3}
A.fRW.prototype={
$1(d){return d.a===this.a},
$S:z+3}
A.err.prototype={
$0(){var w=this.a
w.z=this.b
w.Q=this.c},
$S:0}
A.ers.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.erq(w))},
$S:0}
A.erq.prototype={
$0(){return this.a.z=null},
$S:0}
A.erm.prototype={
$0(){return this.a.y=0},
$S:0}
A.erw.prototype={
$1(d){return d.a===this.a},
$S:z+3}
A.erb.prototype={
$0(){return this.a.y=this.b},
$S:0}
A.erc.prototype={
$0(){var w=this.a
w.aeB()
w.y=this.b},
$S:0}
A.erd.prototype={
$1(d){return this.a.c8N()},
$S:8}
A.eri.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.e
s===$&&C.c()
w=s.c
w===$&&C.c()
v=this.b
v=v>0?"\n\nYou are paid "+v+" stars! \u2b50":""
s=C.d("The "+w.b.toLowerCase()+" is finished and nothing leaks."+v+"\n\nMistakes: "+s.w+"\n\nThe next job is different.",u,u,u,u,u,u,B.a9W,u,u,u)
return C.ep(C.a([C.bN(!1,B.aVF,u,u,!0,u,u,u,new A.erg(d),u,u),C.bI(B.fHU,u,new A.erh(t,d),u)],x.p),u,u,G.nl,s,u,u,u,u,B.fJw,u)},
$S:19}
A.erg.prototype={
$0(){C.a5(this.a,!1).O(null)
return null},
$S:0}
A.erh.prototype={
$0(){C.a5(this.b,!1).O(null)
this.a.aZf()},
$S:0}
A.erp.prototype={
$0(){var w,v,u=this.a
u.d=D.o.F(Date.now(),1e5)
w=u.gCY(0)
v=u.e
v===$&&C.c()
u.e=A.h5a(v.b,w,null)
u.x=""
u.as=!1
u.z=null
u.y=0
u.aeB()},
$S:0}
A.erx.prototype={
$1(d){return d.b===this.a},
$S:z+3}
A.erj.prototype={
$1(d){var w=this.a.e
w===$&&C.c()
return w.x.t(0,d.a)},
$S:z+3}
A.erk.prototype={
$1(d){return d.c.toLowerCase()},
$S:z+23}
A.erl.prototype={
$1(d){var w=this.a.e
w===$&&C.c()
return w.aHF(d.a)>0},
$S:z+3}
A.ert.prototype={
$0(){var w=this.b
w.x=this.a.b
w.aeB()},
$S:0}
A.eru.prototype={
$1(d){return d.a===this.a.a},
$S:z+3}
A.erv.prototype={
$0(){return this.a.y=this.b},
$S:0}
A.erf.prototype={
$0(){var w=this.a
return w.m(new A.ere(w,this.b,this.c))},
$S:0}
A.ere.prototype={
$0(){var w=this.a
w.x=this.b?"":this.c
w.aeB()},
$S:0}
A.ery.prototype={
$1(d){var w=this.a.e
w===$&&C.c()
return w.e.t(0,d.a)},
$S:z+3}
A.erC.prototype={
$0(){return this.a.c2E(this.b)},
$S:0}
A.erA.prototype={
$1(d){return d<=5},
$S:34}
A.erz.prototype={
$1(d){var w=this.a,v=w.e
v===$&&C.c()
return A.ikB(v,w.w.gig()/1000)},
$S:z+10}
A.erB.prototype={
$0(){return this.b.cz_(this.a.a)},
$S:0}
A.ero.prototype={
$1(d){var w,v,u,t,s,r,q=null,p=this.a,o=p.e
o===$&&C.c()
o=C.a([B.fVv,D.au,C.d("Mistakes "+o.w,q,q,q,q,q,q,B.Kf,q,q,q),D.W],x.p)
w=p.e.c
w===$&&C.c()
w=w.c
v=w.length
u=0
for(;u<v;++u){t=w[u]
s=D.c.j(0.05)
r=new C.aP(12,12)
o.push(C.p(q,new C.y((p.e.e.t(0,t.a)?"\u2705":"\ud83d\udd27")+" "+t.c,q,B.fik,q,q,q,q,q,q,q,q,q),D.f,q,q,new C.o(s,q,q,new C.bh(r,r,r,r),q,q,D.n),q,q,q,D.eI,D.bT,q,q,q))}o.push(D.am)
o.push(B.fzm)
o.push(D.Q)
o.push(C.bI(B.aVH,q,new A.ern(p,d),q))
return C.bn(!0,C.cl(o,q,q,D.bQ,q,q,D.ah,!0),!0,!1,D.af,!0,!0)},
$S:27}
A.ern.prototype={
$0(){C.a5(this.b,!1).O(null)
this.a.aZf()},
$S:0}
A.h_h.prototype={
$1(d){return d.a===this.a},
$S:z+40}
A.ct1.prototype={
$1(d){return D.d.t(B.jG,d.b)},
$S:z+8}
A.ct8.prototype={
$1(d){return!this.a.y.t(0,d)},
$S:34}
A.ct9.prototype={
$1(d){var w=this.a
return w.x.aj(0,d)&&w.z.t(0,d)},
$S:34}
A.cta.prototype={
$1(d){var w=$.Hf()[this.b],v=!1
if(w>=d)if(w<=d+48){w=this.a.Q.h(0,d)
w=(w==null?null:w.a)===!0}else w=v
else w=v
return w},
$S:34}
A.ctb.prototype={
$1(d){return this.a.Q.h(0,d).c.t(0,this.b)},
$S:34}
A.ctd.prototype={
$1(d){var w,v=J.e_(6,x.S)
for(w=0;w<6;++w)v[w]=w
return D.d.d_(v,new A.ctc(this.a,d))},
$S:34}
A.ctc.prototype={
$1(d){return this.a.c.t(0,this.b*10+d)},
$S:34}
A.ct0.prototype={
$1(d){var w=this.a.Q.h(0,d)
return(w==null?null:w.a)===!0},
$S:34}
A.csZ.prototype={
$1(d){return!A.j4(d).c},
$S:34}
A.ct_.prototype={
$1(d){var w=this.a.aqr(A.j4(d).d.a)
return(w==null?null:w.b.t(0,d))===!0},
$S:34}
A.ct6.prototype={
$1(d){return d.c},
$S:z+11}
A.ct7.prototype={
$1(d){return d.d},
$S:z+11}
A.ct2.prototype={
$1(d){return d.d},
$S:z+11}
A.ct3.prototype={
$1(d){var w=this.a.Q.h(0,d)
return(w==null?null:w.e)===!0},
$S:34}
A.ct4.prototype={
$1(d){return d.a===this.a},
$S:z+12}
A.cte.prototype={
$2(d,e){return e===this.a},
$S:405}
A.ct5.prototype={
$1(d){return d.c===this.a},
$S:z+8}
A.ew1.prototype={
$0(){var w=this.a
w.ay=this.b
w.ch=this.c},
$S:0}
A.ew2.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.ew0(w))},
$S:0}
A.ew0.prototype={
$0(){return this.a.ay=null},
$S:0}
A.ev7.prototype={
$0(){return this.a.cx=!0},
$S:0}
A.ev8.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.ev6(w))},
$S:12}
A.ev6.prototype={
$0(){return this.a.cx=!1},
$S:0}
A.ev9.prototype={
$0(){return this.a.cx=!0},
$S:0}
A.eva.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.ev5(w))},
$S:12}
A.ev5.prototype={
$0(){return this.a.cx=!1},
$S:0}
A.evb.prototype={
$1(d){return this.a.bR1()},
$S:8}
A.evc.prototype={
$1(d){return this.a.c8S()},
$S:8}
A.evm.prototype={
$0(){return this.a.as=-1},
$S:0}
A.evo.prototype={
$0(){return this.a.as=-1},
$S:0}
A.evd.prototype={
$1(d){return d.b==="tv"},
$S:712}
A.eve.prototype={
$0(){return this.a.as=-1},
$S:0}
A.evf.prototype={
$0(){return this.a.as=-1},
$S:0}
A.evF.prototype={
$0(){var w=this.a
w.as=this.b
w.Q=-1
w.z=w.ax=""
w.CW=!1},
$S:0}
A.evn.prototype={
$0(){var w=this.a
w.as=-1
w.ax=""},
$S:0}
A.evY.prototype={
$0(){return this.a.at=0},
$S:0}
A.evZ.prototype={
$0(){return this.a.z=""},
$S:0}
A.ew_.prototype={
$0(){return this.a.at=this.b},
$S:0}
A.evV.prototype={
$0(){return this.a.z=""},
$S:0}
A.evW.prototype={
$0(){var w=this.a,v=this.b
return w.Q=w.Q===v?-1:v},
$S:0}
A.evX.prototype={
$0(){return this.a.at=2000+this.b},
$S:0}
A.evU.prototype={
$0(){return this.a.z=""},
$S:0}
A.evM.prototype={
$1(d){return d.a===this.a},
$S:z+12}
A.evN.prototype={
$0(){return this.a.ax=""},
$S:0}
A.evO.prototype={
$1(d){return d.a===this.a},
$S:z+7}
A.evP.prototype={
$0(){var w=this,v=w.a,u=w.b
if(v.ax===u)u=""
v.ax=u
v.at=u.length===0?0:5000+w.c*100+w.d},
$S:0}
A.evQ.prototype={
$1(d){return d.a===this.a},
$S:z+7}
A.evR.prototype={
$0(){return this.a.at=5000+this.b*100+this.c},
$S:0}
A.evS.prototype={
$0(){var w=this.a
w.ax=""
w.at=0},
$S:0}
A.evT.prototype={
$0(){return this.a.at=5000+this.b*100+this.c},
$S:0}
A.ew5.prototype={
$0(){var w=this.b,v=D.d.t(B.zs,w.z),u=this.a.a
if(v)w.b2S(u)
else w.azs(u)},
$S:0}
A.evl.prototype={
$1(d){var w=null
return C.ep(C.a([C.bN(!1,B.fLx,w,w,!0,w,w,w,new A.evj(d),w,w),C.bI(D.Es,w,new A.evk(this.a,d),w)],x.p),w,w,G.nl,B.fAx,w,w,w,w,B.fIj,w)},
$S:19}
A.evj.prototype={
$0(){C.a5(this.a,!1).O(null)
return null},
$S:0}
A.evk.prototype={
$0(){C.a5(this.b,!1).O(null)
this.a.axW(!0)},
$S:0}
A.evi.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.d
s===$&&C.c()
w=s.c
w===$&&C.c()
v=this.b
v=v>0?"\n\nYou are paid "+v+" stars! \u2b50":""
s=C.d("The "+w.toLowerCase()+" is built, wired, painted and tested."+v+"\n\nMistakes: "+s.f+"\nShocks: "+s.r+"\nLives left: "+s.e+"\n\nEvery job is a little different. Ready for another one?",u,u,u,u,u,u,B.a9W,u,u,u)
return C.ep(C.a([C.bN(!1,B.fWp,u,u,!0,u,u,u,new A.evg(d),u,u),C.bI(B.fIc,u,new A.evh(t,d),u)],x.p),u,u,G.nl,s,u,u,u,u,B.fQi,u)},
$S:19}
A.evg.prototype={
$0(){C.a5(this.a,!1).O(null)
return null},
$S:0}
A.evh.prototype={
$0(){C.a5(this.b,!1).O(null)
this.a.b_u()},
$S:0}
A.evp.prototype={
$0(){if(!this.b)this.a.e=D.o.F(Date.now(),1e5)
var w=this.a
w.d=A.csY(null,null,!0,w.gCY(0),!0)
w.y=0
w.z=""
w.as=-1
w.ax=""
w.at=0
w.cy=!1
w.x.aa(0)
w.ay=null
w.r=A.wX(w.d,new A.rP(w.z,w.as,!1))},
$S:0}
A.ew6.prototype={
$1(d){var w=this.a
if(w.c)w=d==="light"||d==="fan"
else w=w.e==="switch"?D.d.t(B.jG,d):D.d.t(B.lj,d)
return w},
$S:3}
A.ew8.prototype={
$0(){var w=this.a,v=w.d
v===$&&C.c()
return w.ib(v.aIZ(w.as))},
$S:0}
A.ew9.prototype={
$0(){var w=this.a,v=w.d
v===$&&C.c()
return w.ib(v.aox(w.as))},
$S:0}
A.ewa.prototype={
$0(){var w=this.a,v=w.d
v===$&&C.c()
return w.ib(v.aFf(w.as))},
$S:0}
A.ewb.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.aoR(v.as)
v.ib(w)
if(w.a)v.PX()},
$S:0}
A.ewc.prototype={
$0(){var w=this.a,v=w.d
v===$&&C.c()
return w.ib(v.aox(w.as))},
$S:0}
A.ewd.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.aoR(v.as)
v.ib(w)
if(w.a){v.PX()
v.ol("The "+A.a2l(this.b.a)+" is out and the box is empty. Pick the kind you want from the tray, then tap the box.",!0)}},
$S:0}
A.ewe.prototype={
$1(d){return!this.a.b.b.it(0,d.a)},
$S:z+7}
A.ewf.prototype={
$0(){var w=this.a
return w.m(new A.ew7(w,this.b))},
$S:0}
A.ew7.prototype={
$0(){var w=this.a,v=this.b,u=v.a
if(w.ax===u)u=""
w.ax=u
if(u.length!==0)w.ol(v.b+": now tap the screw it belongs on.",!0)},
$S:0}
A.ew3.prototype={
$1(d){return!this.a.b.b.aj(0,d.a)},
$S:z+12}
A.ew4.prototype={
$0(){var w=this.a
return w.azp(w.as,this.b.a)},
$S:0}
A.evD.prototype={
$1(d){return new C.N(d,new A.evE(),d.$ti.k("N<ak.E,n>")).aH(0,", ")},
$S:1826}
A.evE.prototype={
$1(d){return A.j4(d).b},
$S:72}
A.evq.prototype={
$1(d){var w=this.a.d
w===$&&C.c()
return!w.x.aj(0,d.a)},
$S:z+8}
A.evr.prototype={
$1(d){var w=this.a.d
w===$&&C.c()
return!w.z.t(0,d.a)},
$S:z+8}
A.evs.prototype={
$1(d){var w=this.a.d
w===$&&C.c()
return!w.y.t(0,d)},
$S:34}
A.evv.prototype={
$1(d){return!d.a},
$S:z+11}
A.evw.prototype={
$1(d){return d.b<3},
$S:z+11}
A.evx.prototype={
$1(d){return!d.c},
$S:z+11}
A.evy.prototype={
$1(d){return!d.d},
$S:z+11}
A.evz.prototype={
$1(d){return!d.c},
$S:z+11}
A.evA.prototype={
$1(d){var w=this.a.d
w===$&&C.c()
w=w.at.h(0,d.a)
w=w==null?null:w.a
return w!==d.b},
$S:z+8}
A.evB.prototype={
$1(d){return d.a},
$S:z+114}
A.evC.prototype={
$1(d){var w=this.a.d
w===$&&C.c()
w=w.at.h(0,d.a)
w=w==null?null:w.b.c
return(w==null?0:w)<2},
$S:z+8}
A.evt.prototype={
$1(d){var w
if(D.d.t(B.lj,d.b)){w=this.a.d
w===$&&C.c()
w=w.at.h(0,d.a)
w=(w==null?null:w.c)!==!0}else w=!1
return w},
$S:z+8}
A.evu.prototype={
$1(d){return d.b==="fan"},
$S:z+8}
A.ewF.prototype={
$0(){return this.a.chH(this.b)},
$S:0}
A.ewG.prototype={
$0(){var w=this.a
if(w.as>=0)w.PX()
else{w.m(new A.ewo(w))
w.b58()}},
$S:0}
A.ewo.prototype={
$0(){return this.a.at=0},
$S:0}
A.ewE.prototype={
$1(d){var w,v,u,t=this.a,s=t.d
s===$&&C.c()
w=t.w.gig()
v=t.Q
u=t.y===2&&t.as<0&&t.d.gt7()
return A.ikS(s,w/1000,t.x,u,v)},
$S:z+10}
A.ewr.prototype={
$0(){var w=this.a,v=w.d
v===$&&C.c()
return w.ib(v.aJG())},
$S:0}
A.ews.prototype={
$0(){var w=this.a
return w.m(new A.ewq(w,this.b))},
$S:0}
A.ewq.prototype={
$0(){var w,v=this.b.b
v.f=!v.f
v=this.a
w=v.d
w===$&&C.c()
v.r=A.wX(w,new A.rP(v.z,v.as,!1))},
$S:0}
A.ewt.prototype={
$0(){var w=this.a
return w.m(new A.ewp(w,this.b))},
$S:0}
A.ewp.prototype={
$0(){var w,v=this.b.b
v.e=!v.e
v=this.a
w=v.d
w===$&&C.c()
v.r=A.wX(w,new A.rP(v.z,v.as,!1))},
$S:0}
A.ewH.prototype={
$0(){var w=this.a
return w.m(new A.ewn(w,this.b))},
$S:0}
A.ewn.prototype={
$0(){var w,v=this.a
v.y=this.b
v.Q=-1
v.z=""
w=v.d
w===$&&C.c()
v.r=A.wX(w,new A.rP("",v.as,!1))},
$S:0}
A.ewI.prototype={
$0(){var w=this.a
return w.m(new A.ewm(w))},
$S:0}
A.ewm.prototype={
$0(){var w,v=this.a
v.y=(v.y+1)%3
v.Q=-1
v.z=""
w=v.d
w===$&&C.c()
v.r=A.wX(w,new A.rP("",v.as,!1))},
$S:0}
A.ewJ.prototype={
$0(){var w=this.a
return w.m(new A.ewl(w))},
$S:0}
A.ewl.prototype={
$0(){var w=this.a,v=w.d
v===$&&C.c()
v.amo()
w.y=2
w.z=""
w.r=A.wX(w.d,new A.rP("",w.as,!1))
w.ol("The boxes, the cable and the walls are done. Now the wiring: pick an Outlet or a Switch from the tray, then tap its box on the wall.",!0)},
$S:0}
A.ewK.prototype={
$0(){var w=this.a
return w.m(new A.ewk(w))},
$S:0}
A.ewk.prototype={
$0(){return this.a.Q=-1},
$S:0}
A.ewL.prototype={
$0(){var w=this.a,v=w.Q
if(v>=0&&w.y===2){w.m(new A.ewh(w,this.b))
w.azs(v)
if(w.c!=null&&w.as<0)w.m(new A.ewi(w))
return}w.m(new A.ewj(w,this.b))},
$S:0}
A.ewh.prototype={
$0(){return this.a.z=this.b.a},
$S:0}
A.ewi.prototype={
$0(){return this.a.z=""},
$S:0}
A.ewj.prototype={
$0(){var w,v=this.a,u=this.b.a,t=v.z===u?"":u
v.z=t
v.at=0
w=v.d
w===$&&C.c()
v.r=A.wX(w,new A.rP(t,v.as,!1))
if(v.z.length!==0)v.csB(u)},
$S:0}
A.ewM.prototype={
$0(){var w=this.a,v=w.d
v===$&&C.c()
return w.ib(v.cT0())},
$S:0}
A.ewu.prototype={
$1(d){return!this.a.b.b.it(0,d.a)},
$S:z+7}
A.ewv.prototype={
$0(){var w=this.a
return w.m(new A.ewg(w,this.b,this.c))},
$S:0}
A.ewg.prototype={
$0(){var w,v=this,u=v.c,t=u.a
if(v.b.b.b.it(0,t)){v.a.aeC("That wire is already fastened. Tap the wire in the 3D view to take it off.")
return}w=v.a
if(w.ax===t)t=""
w.ax=t
if(t.length!==0)w.ol(u.b+": now tap the screw it belongs on, or press the matching button below.",!0)},
$S:0}
A.eww.prototype={
$1(d){return!this.a.b.b.aj(0,d.a)},
$S:z+12}
A.ewx.prototype={
$0(){var w=this.a
return w.azp(w.as,this.b.a)},
$S:0}
A.ewy.prototype={
$0(){var w=this.a,v=w.d
v===$&&C.c()
return w.ib(v.aIZ(w.as))},
$S:0}
A.ewz.prototype={
$0(){var w=this.a,v=w.d
v===$&&C.c()
return w.ib(v.aox(w.as))},
$S:0}
A.ewA.prototype={
$0(){var w=this.a,v=w.d
v===$&&C.c()
return w.ib(v.aFf(w.as))},
$S:0}
A.ewB.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.aoR(v.as)
v.ib(w)
if(w.a)v.PX()},
$S:0}
A.ewC.prototype={
$0(){var w=this.a,v=w.d
v===$&&C.c()
return w.ib(v.aox(w.as))},
$S:0}
A.ewD.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.aoR(v.as)
v.ib(w)
if(w.a){v.PX()
v.ol("The "+A.a2l(this.b.a)+" is out and the box is empty. Pick the kind you want from the tray (a different outlet or switch is fine), then tap the box.",!0)}},
$S:0}
A.evL.prototype={
$1(d){return new C.e1(new A.evK(this.a,this.b),null)},
$S:21}
A.evK.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=C.aG(d,k,x.w).w,i=this.a,h=i.d
h===$&&C.c()
w=h.c
w===$&&C.c()
v=x.p
h=C.a([C.d("Job: "+w,k,k,k,k,k,k,D.de,k,k,k),D.au,C.d("Mistakes "+h.f+" \xb7 Shocks "+h.r+" \xb7 Lives "+h.e,k,k,k,k,k,k,B.Kf,k,k,k),D.W,B.fM7,D.am],v)
w=i.d.d
w===$&&C.c()
u=w.length
t=0
for(;t<w.length;w.length===u||(0,C.L)(w),++t){s=w[t]
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
else m=m==="fan"?"A ceiling fan":"A "+A.a2l(m).toLowerCase()
o=A.j4(o)
l=s.c
l=l!=null?", turned on by "+A.j4(l).b:""
h.push(C.p(k,new C.y(n+" "+m+" at "+o.b+l,k,D.pE,k,k,k,k,k,k,k,k,k),D.f,k,k,new C.o(r,k,new C.bH(p,p,p,p),new C.bh(q,q,q,q),k,k,D.n),k,k,k,D.eI,D.bT,k,k,k))}h.push(D.W)
h.push(D.am)
w=this.b
h.push(C.B(C.a([C.E(C.dT(B.fJA,new A.evG(w),k),1),D.ad,C.E(C.bI(B.fHu,k,new A.evH(i,d,w),k),1)],v),D.m,k,D.e,D.i,0,k,k))
h.push(D.am)
h.push(D.am)
h.push(C.B(C.a([C.E(C.dT(B.fBG,new A.evI(i,d),k),1),D.ad,C.E(C.bI(B.aVH,k,new A.evJ(i,d),k),1)],v),D.m,k,D.e,D.i,0,k,k))
return C.bn(!0,new C.cT(new C.aZ(0,1/0,0,j.a.b*0.8),C.cl(h,k,k,D.bQ,k,k,D.ah,!0),k),!0,!1,D.af,!0,!0)},
$S:86}
A.evG.prototype={
$0(){return A.hct(this.a)},
$S:0}
A.evH.prototype={
$0(){var w=0,v=C.j(x.H),u=this,t,s,r
var $async$$0=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:C.a5(u.b,!1).O(null)
t=u.a
s=t.d
s===$&&C.c()
r=s.c
r===$&&C.c()
w=2
return C.b(A.hA8(u.c,s.cZi(),t.d.cZj(),r),$async$$0)
case 2:return C.h(null,v)}})
return C.i($async$$0,v)},
$S:1}
A.evI.prototype={
$0(){C.a5(this.b,!1).O(null)
this.a.axW(!0)},
$S:0}
A.evJ.prototype={
$0(){C.a5(this.b,!1).O(null)
this.a.b_u()},
$S:0}
A.ftx.prototype={
$1(d){var w=this.a,v=d.a
return w>v[0]&&w<v[1]},
$S:717}
A.fty.prototype={
$1(d){var w=this.a,v=d.a
return w>v[2]&&w<v[3]},
$S:717}
A.fBg.prototype={
$1(d){return 5000+this.a.a*100+d},
$S:78}
A.fBh.prototype={
$1(d){return 3000+this.a.a},
$S:78}
A.fBi.prototype={
$1(d){return 2000+this.a.a},
$S:78}
A.fBl.prototype={
$5$col$round(d,e,f,g,h){var w=this.a
w.f=3
w.b=d
w.d=0.5
w.e=0.9
if(h)w.dv(e.aE(0,B.e8),e.a7(0,B.e8),f.a/2,g,14)
else w.aG(e,f,g)
w.e=0
w.d=1
w.f=2},
$3(d,e,f){return this.$5$col$round(d,e,f,D.b_,!1)},
$4$round(d,e,f,g){return this.$5$col$round(d,e,f,D.b_,g)},
$4$col(d,e,f,g){return this.$5$col$round(d,e,f,g,!1)},
$S:z+115}
A.fBj.prototype={
$3(d,e,f){return K.RZ(d,e,0,f+this.a.a*5)},
$S:24}
A.fBk.prototype={
$0(){var w,v=this.a
if(v.c)w="A place in the ceiling for a "+(v.e==="fan"?"fan (needs a fan-rated box)":"light")+"."
else w="A place on the wall at "+(v.e==="switch"?"switch height, about 48 inches from the floor":"outlet height, about 16 inches from the floor")+"."
return new A.cV(v.b,w,A.aia(v,B.aaW),26)},
$S:z+116}
A.fSe.prototype={
$1(d){return d.e==="fan"},
$S:z+40}
A.fSf.prototype={
$1(d){return d.b==="light"},
$S:z+8}
A.fSg.prototype={
$1(d){return A.aia(this.a,d)},
$S:z+6}
A.cws.prototype={
$1(d){return d.a===this.a&&!d.c},
$S:z+15}
A.cwo.prototype={
$1(d){return d.a===B.a0F},
$S:z+15}
A.cwq.prototype={
$1(d){return d.c},
$S:z+15}
A.cwr.prototype={
$1(d){return d.c},
$S:z+15}
A.cwp.prototype={
$1(d){return B.wL.h(0,d.a).e===this.a&&!d.c},
$S:z+15}
A.ey8.prototype={
$0(){var w=this.a
w.z=this.b
w.Q=this.c},
$S:0}
A.ey9.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.ey7(w))},
$S:0}
A.ey7.prototype={
$0(){return this.a.z=null},
$S:0}
A.exY.prototype={
$0(){return this.a.y=0},
$S:0}
A.ey2.prototype={
$0(){return this.a.as=!0},
$S:0}
A.ey3.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.ey1(w))},
$S:12}
A.ey1.prototype={
$0(){return this.a.as=!1},
$S:0}
A.ey4.prototype={
$0(){var w=this.a,v=w.d
v===$&&C.c()
w.r=A.agN(v.d)
w.y=this.b},
$S:0}
A.ey5.prototype={
$1(d){return this.a.chP()},
$S:8}
A.ey6.prototype={
$1(d){return this.a.c9_()},
$S:8}
A.ey0.prototype={
$1(d){var w=null
return C.ep(C.a([C.bI(B.fJr,w,new A.ey_(this.a,d),w)],x.p),w,w,G.nl,B.fIz,w,w,w,w,B.fOX,w)},
$S:19}
A.ey_.prototype={
$0(){C.a5(this.b,!1).O(null)
this.a.axk()},
$S:0}
A.exX.prototype={
$1(d){var w=null,v=this.a,u=v.d
u===$&&C.c()
u=C.d("Every problem on the customer's list is fixed.\n\nYou are paid "+this.b+" stars! \u2b50\n\nMistakes: "+u.f+"\nShocks: "+u.r+"\nLives left: "+u.e+"\n\nThe next call will have different problems.",w,w,w,w,w,w,B.a9W,w,w,w)
return C.ep(C.a([C.bN(!1,B.aVF,w,w,!0,w,w,w,new A.exV(d),w,w),C.bI(B.fKK,w,new A.exW(v,d),w)],x.p),w,w,G.nl,u,w,w,w,w,B.fRr,w)},
$S:19}
A.exV.prototype={
$0(){C.a5(this.a,!1).O(null)
return null},
$S:0}
A.exW.prototype={
$0(){C.a5(this.b,!1).O(null)
this.a.axk()},
$S:0}
A.exZ.prototype={
$0(){var w,v,u=this.a
u.e=D.o.F(Date.now(),1e5)
w=u.gCY(0)
v=u.d
v===$&&C.c()
w=A.hnt(v.b,w)
u.d=w
u.r=A.agN(w.d)
u.at=!1
u.z=null
u.y=0},
$S:0}
A.eyl.prototype={
$0(){return this.a.cCD(this.b)},
$S:0}
A.eyh.prototype={
$1(d){return d<=5},
$S:34}
A.eyg.prototype={
$1(d){var w=this.a,v=w.d
v===$&&C.c()
return A.hw3(v.d,w.w.gig()/1000)},
$S:z+10}
A.eyi.prototype={
$1(d){return!d.c},
$S:z+15}
A.eyj.prototype={
$1(d){return B.wL.h(0,d.a).a},
$S:z+118}
A.eyk.prototype={
$0(){var w=this.a
return w.m(new A.eyf(w,this.b))},
$S:0}
A.eyf.prototype={
$0(){return this.a.x=this.b},
$S:0}
A.eye.prototype={
$1(d){return new C.e1(new A.eyd(this.a),null)},
$S:21}
A.eyd.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=this.a,j=k.d
j===$&&C.c()
w=x.p
j=C.a([B.fGY,D.au,C.d("Mistakes "+j.f+" \xb7 Shocks "+j.r+" \xb7 Lives "+j.e,l,l,l,l,l,l,B.Kf,l,l,l),D.W],w)
v=k.d.c
v===$&&C.c()
u=v.length
t=0
for(;t<v.length;v.length===u||(0,C.L)(v),++t){s=v[t]
r=D.c.j(0.05)
q=new C.aP(14,14)
p=new C.ay(s.c?D.be.j(0.6):D.bz,1,D.r,-1)
o=s.c?"\u2705":"\ud83d\udd27"
n=B.wL.h(0,s.a).a
m=s.c?D.aC:D.c
j.push(C.p(l,new C.y(o+" "+n,l,new C.F(!0,m,l,l,l,l,13.5,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l),l,l,l,l,l,l,l,l,l),D.f,l,l,new C.o(r,l,new C.bH(p,p,p,p),new C.bh(q,q,q,q),l,l,D.n),l,l,l,D.ct,D.bg,l,l,l))}j.push(D.am)
j.push(B.fMi)
j.push(D.Q)
j.push(C.B(C.a([B.bFF,C.b8i(l,l,l,l,!1,D.y,l,l,l,l,l,l,new A.eyb(k,e),l,l,l,l,l,l,l,l,k.d.b)],w),D.m,l,D.e,D.i,0,l,l))
j.push(C.bI(B.fPp,l,new A.eyc(k,d),l))
return C.bn(!0,C.cl(j,l,l,D.bQ,l,l,D.ah,!0),!0,!1,D.af,!0,!0)},
$S:86}
A.eyb.prototype={
$1(d){var w=this.a.d
w===$&&C.c()
w.b=d
this.b.$1(new A.eya())},
$S:9}
A.eya.prototype={
$0(){},
$S:0}
A.eyc.prototype={
$0(){C.a5(this.b,!1).O(null)
this.a.axk()},
$S:0}
A.fmb.prototype={
$1(d){return d.d===this.a},
$S:z+21}
A.bVt.prototype={
$1(d){var w,v,u,t,s=this.a,r=s.p1
if(r!=="back"){s=r==="left"?-1.5707963267948966:1.5707963267948966
return new C.z(new C.z(0,d),s)}r=s.k1
w=A.hcD(s,A.aPW(r==null?"tv100":r),0)
s=w.c
r=w.a/2
v=s-r-18
u=this.b
t=-u/2+14
if(v<t)v=s+r+18
v=D.k.E(v,t,u/2-14)
return new C.z(new C.z(v,d),Math.atan2(s-v,-d))},
$S:1828}
A.bVu.prototype={
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
A.d7J.prototype={
$0(){var w=this.a
w.d=this.b
w.f.aa(0)
w.y=w.x=w.w=w.r=null},
$S:0}
A.d7K.prototype={
$0(){var w=this.a,v=this.b,u=w.w===v?null:v
w.w=u
if(u!=null){w.y='Now tap the place on the diagram where "'+v+'" goes.'
w.z=!0}},
$S:0}
A.d7L.prototype={
$0(){var w=this.a
w.y="Pick a wire on the left first, then tap the place it goes."
w.z=!1},
$S:0}
A.d7M.prototype={
$0(){var w,v,u,t,s=this.a,r=this.b,q=this.c
s.f.n(0,r,q)
s.x=r
s.w=s.r=null
if(!s.e){w=B.qD[s.d]
v=w.e.h(0,r)
v.toString
u=x.N
t=A.hvI(w.b,C.H([r,v],u,u),C.H([r,q],u,u))
u=t.a===B.qR
s.z=u
if(u)r="Right: this follows the diagram."
else{r=t.b
r=D.d.gI(r).c+" "+D.d.gI(r).e}s.y=r}else s.y=null},
$S:0}
A.d7F.prototype={
$0(){return this.a.cBI(this.b)},
$S:0}
A.d7I.prototype={
$0(){return this.a.cBT(this.b)},
$S:0}
A.d7H.prototype={
$0(){var w=this.a
return w.m(new A.d7G(w,this.b))},
$S:0}
A.d7G.prototype={
$0(){var w,v,u,t,s
for(w=this.b,v=w.length,u=this.a,t=u.f,s=0;s<w.length;w.length===v||(0,C.L)(w),++s)t.W(0,w[s])
u.r=null},
$S:0}
A.d7R.prototype={
$0(){return A.hct(this.a)},
$S:0}
A.d7S.prototype={
$0(){return this.a.c9B(this.b)},
$S:0}
A.d7T.prototype={
$0(){var w=this.a
return w.m(new A.d7Q(w))},
$S:0}
A.d7Q.prototype={
$0(){var w=this.a
w.e=!1
w.y=w.r=null},
$S:0}
A.d7U.prototype={
$0(){var w=this.a
return w.m(new A.d7P(w))},
$S:0}
A.d7P.prototype={
$0(){var w=this.a
w.e=!0
w.y=w.r=null},
$S:0}
A.d7V.prototype={
$2(d,e){var w,v,u,t=null,s=(e.b-56)/2,r=this.a,q=C.bS(0,C.cb(r.gaaW(),new A.d7O(r,s),t),0,0,0),p=x.p,o=C.a([],p)
for(w=B.qD[r.d].e,w=J.aW(w.gev(w));w.C();)o.push(r.c28(w.gS(w)))
o=C.ap(t,C.x(o,D.m,t,D.e,D.i,0,D.p),t,t,0,t,0,s)
w=C.a([],p)
for(v=B.qD[r.d].d,u=0;u<5;++u)w.push(r.chV(v[u]))
return new C.a4(t,this.b,new C.an(D.a_,t,D.ab,D.t,C.a([q,o,C.ap(t,C.x(w,D.m,t,D.e,D.i,0,D.p),t,t,t,0,0,s)],p),t),t)},
$S:154}
A.d7O.prototype={
$2(d,e){var w,v,u,t=null,s=this.a,r=B.qD[s.d].e
r=J.pP(r.gev(r))
w=B.qD[s.d]
v=x.N
v=C.dO(s.f,v,v)
u=s.x
s=s.gaaW().x
s===$&&C.c()
return C.b4(t,t,t,new A.bxi(r,w.d,v,this.b,u,s,t),D.aw)},
$S:59}
A.d7W.prototype={
$0(){var w=this.a
return w.m(new A.d7N(w))},
$S:0}
A.d7N.prototype={
$0(){var w=this.a,v=B.qD[w.d]
return w.r=A.hvI(v.b,v.e,w.f)},
$S:0}
A.fhR.prototype={
$1(d){return d*66+29},
$S:236}
A.fCX.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=this
for(w=k.a*1.8,v=k.b,u=k.c,t=k.d,s=0.3*t,t=0.05*t,r=0;r<d;++r){q=w+r*0.173
p=D.k.F(q,1)
o=Math.sin((r*3.1+D.k.bf(q))*12.9898)*43758.5453
n=(o-Math.floor(o))*3.141592653589793*2
o=Math.sin((r+5)*12.9898)*43758.5453
m=e*(0.6+(o-Math.floor(o))*0.8)
q=u.$1(new A.q(Math.cos(n)*p*m,Math.sin(n)*p*m-p*p*6,3+p*3))
l=C.ar(E.Z9,F.MM,p)
l.toString
v.fQ(q,s*(1-p*0.6)+t,l,3,5,0)}},
$S:1830}
A.fCW.prototype={
$3(d,e,f){var w,v,u,t,s,r,q,p,o,n=this,m=n.a
m.d=0.34
for(w=n.b,v=w*0.45,u=n.c,t=n.d,s=1-e,r=0;r<d;++r){q=D.k.F(v+r/d,1)
p=u.$1(new A.q(Math.sin(r*1.7+w)*1.4+q*1.5,q*f-1,3.5+q*4))
o=C.ar(G.Bo,B.bqp,s)
o.toString
o=C.ar(o,B.bcZ,q)
o.toString
m.fQ(p,(1.1+q*3.4)*t,o,3,6,0)}m.d=1},
$S:1831}
A.fCs.prototype={
$5(d,e,f,g,h){return this.a.push(new A.ws(d,e,f,g,h))},
$S:z+119}
A.fCx.prototype={
$2(d,e){var w=this.a
return new C.Z(w,new A.fCy(d,e),C.T(w).k("Z<1>")).gL(0)},
$S:z+120}
A.fCy.prototype={
$1(d){return d.a.c===this.a&&d.b.c===this.b},
$S:z+13}
A.fCt.prototype={
$1(d){return d.b.c===B.aT6},
$S:z+13}
A.fCu.prototype={
$1(d){return d.a.c===B.aYK},
$S:z+13}
A.fCv.prototype={
$1(d){return!1},
$S:z+13}
A.fCw.prototype={
$1(d){return!1},
$S:z+13}
A.flJ.prototype={
$1(d){return D.d.b3(this.a,new A.flK(d))},
$S:3}
A.flK.prototype={
$1(d){return d.a===this.a},
$S:z+46}
A.czq.prototype={
$1(d){return A.hVh(d)},
$S:z+13}
A.czr.prototype={
$2(d,e){return d+e},
$S:67}
A.czs.prototype={
$1(d){return d.b.a===B.qR},
$S:z+43}
A.fCz.prototype={
$2(d,e){var w=this.a.h(0,d)
if(w==null)this.b.push(new A.ws("LEAD_MISSING",B.JH,"The "+d+" lead is not connected.","Every lead on the diagram needs its connection.","Connect the "+d+" lead to "+e+"."))
else if(w!==e)this.b.push(new A.ws("LEAD_WRONG",B.aQH,"The "+d+" lead is connected to "+w+", but the diagram says "+e+".","Connections follow the approved wiring diagram.","Move the "+d+" lead to "+e+"."))},
$S:115}
A.h_e.prototype={
$1(d){var w,v,u,t,s,r=null,q=C.aG(d,r,x.w).w,p=x.p,o=C.a([B.fxT,D.am,B.fRv,D.W],p)
for(w=0;w<5;++w){v=B.dcX[w]
u=D.c.j(0.05)
t=new C.aP(12,12)
s=new C.ay(D.bz,1,D.r,-1)
o.push(C.p(r,C.x(C.a([new C.y(v.a+": "+v.b,r,D.aUo,r,r,r,r,r,r,r,r,r),D.cS,new C.y("Goes to: "+v.c+"\nCircuit: "+v.d,r,G.Eq,r,r,r,r,r,r,r,r,r),D.cS,new C.y(v.e,r,D.aV5,r,r,r,r,r,r,r,r,r),D.cS,new C.y("Exception: "+v.f,r,B.fq9,r,r,r,r,r,r,r,r,r)],p),D.E,r,D.e,D.i,0,D.p),D.f,r,r,new C.o(u,r,new C.bH(s,s,s,s),new C.bh(t,t,t,t),r,r,D.n),r,r,r,D.ct,D.ym,r,r,r))}o.push(D.am)
o.push(B.fzc)
return C.bn(!0,new C.cT(new C.aZ(0,1/0,0,q.a.b*0.85),C.cl(o,r,r,D.bQ,r,r,D.ah,!0),r),!0,!1,D.af,!0,!0)},
$S:27}
A.h_c.prototype={
$1(d){return new A.a1h(this.a,this.b,null)},
$S:z+89}
A.fbt.prototype={
$1(d){var w=this.a,v=w.a.c,u=this.b
d.toString
v.c.n(0,u,d)
w.m(new A.fbs(w,u,d))},
$S:159}
A.fbs.prototype={
$0(){var w=this.c
this.a.d.n(0,this.b,w)
return w},
$S:0}
A.fbu.prototype={
$0(){var w=this.a
w.m(new A.fbr(w,w.a.c.brh(0)))},
$S:0}
A.fbr.prototype={
$0(){return this.a.e=this.b},
$S:0}
A.fbv.prototype={
$1(d){return d.b.a!==B.qR},
$S:z+43}
A.fbw.prototype={
$0(){var w=this.a,v=w.c
v.toString
w=w.e
C.a5(v,!1).O(w)
return null},
$S:0}
A.bT_.prototype={
$1(d){return this.a.a.$0()},
$S:11}
A.bSZ.prototype={
$1(d){var w=this.a
if(!w.c)return
w.a.$0()
if(w.c)w.b_T()},
$S:8};(function aliases(){var w=A.aO4.prototype
w.byY=w.q
w=A.aLr.prototype
w.bw8=w.q})();(function installTearOffs(){var w=a._instance_0u,v=a._instance_1u,u=a.installStaticTearOff,t=a.installInstanceTearOff,s=a._instance_2u,r=a._instance_0i
var q
w(q=A.aej.prototype,"gbWP","bWQ",0)
v(q,"gLQ","a5o",68)
u(A,"ijk",3,null,["$3"],["i56"],28,0)
w(q=A.aoO.prototype,"gc7f","c7g",0)
w(q,"gbra","brb",0)
t(q,"gczW",0,0,null,["$1$done","$0"],["aBW","czX"],121,0,0)
w(q,"gcC0","cC1",0)
w(q,"gbPd","bPe",0)
v(A.aU8.prototype,"gcSF","cSG",18)
s(q=A.aEO.prototype,"gbOg","bOh",30)
w(q,"gj_","iK",0)
t(q,"gc8v",0,1,null,["$2$keepTour","$1"],["axS","AD"],58,0,0)
v(q,"gc8A","c8B",9)
w(q,"gbQc","bQd",0)
w(q,"gbQe","bQf",0)
w(q,"gbQy","bQz",0)
w(q,"gc3t","c3u",0)
w(q,"gbGF","bGG",0)
w(q,"gcEw","cEx",0)
w(q,"gcst","csu",0)
w(q,"gbOU","bOV",0)
w(q,"gaR4","asT",0)
w(q,"gc8t","c8u",0)
w(q,"gcv4","cv5",0)
w(q,"gcEq","cEr",20)
w(q,"gczY","Sf",0)
w(q,"gb7W","S9",0)
w(q,"gb8a","a2T",0)
w(q,"gcGx","cGy",0)
w(q,"gbTR","bTS",0)
w(q,"gczV","B7",0)
w(q,"gc8y","Ep",20)
w(q,"gchB","a0y",20)
w(q,"gch0","a0p",20)
w(q,"gaNS","bBZ",20)
w(q,"gc8E","c8F",0)
w(q,"gcpE","cpF",0)
r(q,"gc8C","c8D",0)
u(A,"hz8",3,null,["$3"],["iks"],28,0)
u(A,"hc4",3,null,["$3"],["hzm"],28,0)
w(q=A.aAD.prototype,"gc8J","pv",0)
w(q,"gJ9","oj",0)
v(q,"gJa","Jb",9)
w(q,"gcmE","cmF",0)
w(q,"gcC3","cC4",0)
w(q=A.aGz.prototype,"gJ9","oj",0)
v(q,"gJa","Jb",9)
w(q,"gc8K","b_p",0)
w(q=A.aAX.prototype,"gJ9","oj",0)
v(q,"gJa","Jb",9)
r(q,"gc8H","c8I",0)
w(q=A.aBQ.prototype,"gJ9","oj",0)
v(q,"gJa","Jb",9)
w(q=A.aFg.prototype,"gc8O","b_s",0)
v(q,"gc8P","c8Q",9)
w(q,"gcxk","cxl",0)
v(A.XL.prototype,"gaqs","bqj",111)
s(q=A.aFn.prototype,"gc8T","c8U",30)
w(q,"gbSz","aUw",0)
w(q,"gc3r","c3s",0)
w(q,"gbEx","bEy",0)
w(q,"gbEv","bEw",0)
w(q,"gb_t","PX",0)
v(q,"gc8W","c8X",9)
w(q=A.aFr.prototype,"gc90","b_w",0)
v(q,"gc91","c92",9)})();(function inheritance(){var w=a.mixin,v=a.mixinHard,u=a.inheritMany,t=a.inherit
u(C.lA,[A.f_M,A.rn,A.JH,A.FN,A.FU])
u(C.af,[A.a9P,A.avD,A.aoN,A.apN,A.IW,A.aJ2,A.aK0,A.NI,A.awy,A.E0,A.a9I,A.a59,A.aBP,A.afP,A.Wg,A.Ok,A.as3,A.aq9,A.a1h])
u(C.ah,[A.aNW,A.aO4,A.aoO,A.bkX,A.aEO,A.bu6,A.bwh,A.bkY,A.btV,A.byc,A.bzx,A.byh,A.aBQ,A.bxB,A.aFg,A.aFn,A.aFr,A.aLr,A.bvb])
t(A.aej,A.aNW)
t(A.bpF,P.auy)
u(C.aD,[A.q,A.kq,A.cV,A.hh,A.tU,A.fq,A.fg,A.bVe,A.cDJ,A.G5,A.PR,A.cLG,A.bch,A.bcC,A.bhL,A.dpC,A.MD,A.dv9,A.djL,A.lI,A.rd,A.Hq,A.aTe,A.bId,A.ho,A.FY,A.zd,A.xo,A.aUo,A.a4q,A.akq,A.bMD,A.bKJ,A.dkg,A.rR,A.SB,A.aTJ,A.bxy,A.bKL,A.Ak,A.cB9,A.pG,A.bKv,A.Fr,A.P1,A.I7,A.M0,A.aU8,A.fm,A.CC,A.iP,A.Ms,A.axQ,A.mg,A.fp,A.E9,A.nO,A.abM,A.oq,A.aWw,A.a5n,A.aWB,A.f29,A.Mn,A.Qk,A.bVv,A.m2,A.ad5,A.jS,A.N4,A.cob,A.Fg,A.nw,A.Xh,A.co1,A.z8,A.l9,A.XX,A.aw6,A.aUY,A.ey,A.XL,A.hM,A.rP,A.uF,A.Mw,A.cwn,A.y6,A.tO,A.aa3,A.ia,A.csX,A.AA,A.bss,A.aWD,A.b9Y,A.akv,A.czn,A.cCY,A.a4l,A.bMN,A.ws,A.tn,A.b6y,A.abb,A.abc,A.vi,A.b5g,A.b8s,A.czp,A.PM,A.a5i])
u(C.hy,[A.c0g,A.c0h,A.c0f,A.c0i,A.c0j,A.h_w,A.h_u,A.h_v,A.h_t,A.h_i,A.bJW,A.bJX,A.bJY,A.bJZ,A.bJT,A.bK0,A.bK_,A.bJV,A.bJU,A.ctX,A.ctY,A.ctQ,A.ctR,A.ctS,A.ctT,A.f3i,A.f3h,A.f3f,A.f3g,A.f39,A.f3c,A.f3d,A.f3b,A.f3e,A.bU0,A.bTU,A.bU4,A.bU_,A.bU7,A.bU5,A.bUa,A.bTW,A.bTY,A.bTX,A.bIf,A.bIe,A.fRr,A.fzZ,A.fA_,A.fzS,A.fzT,A.fzU,A.fzV,A.fzW,A.fzX,A.fzY,A.flU,A.fpi,A.fyE,A.fzK,A.fzL,A.fzM,A.c4h,A.c4f,A.c47,A.c40,A.c3Z,A.c3T,A.c4_,A.c3J,A.c3K,A.c3L,A.fCg,A.bMF,A.bMI,A.fFG,A.fj5,A.bKM,A.h_r,A.h_s,A.h_p,A.fBP,A.cBb,A.cBc,A.bKw,A.bKF,A.bKG,A.bKH,A.bKI,A.bKx,A.bKy,A.bKz,A.bKA,A.bKB,A.bKD,A.bKE,A.bLm,A.bLj,A.bLk,A.bLl,A.bLq,A.bLp,A.bLn,A.bLr,A.dST,A.dSO,A.dT7,A.dSR,A.dTa,A.fCq,A.h01,A.fBC,A.fBD,A.fBA,A.fBB,A.fSj,A.fSk,A.fCD,A.fCE,A.fCB,A.fCC,A.fzQ,A.fzR,A.h00,A.fma,A.frI,A.fyx,A.fzC,A.h_Y,A.h_V,A.bUG,A.bUF,A.bVg,A.bVh,A.bVi,A.bVj,A.bVk,A.bVo,A.bVl,A.bVm,A.bVs,A.bVr,A.bVq,A.bVp,A.eeC,A.eez,A.eeA,A.eeB,A.ebk,A.edN,A.edO,A.edK,A.e9U,A.eef,A.eeg,A.edr,A.ecp,A.ecl,A.ebd,A.ec5,A.ebn,A.ebV,A.eet,A.eaX,A.ebT,A.ebU,A.eby,A.ec7,A.ear,A.eaq,A.eaT,A.edg,A.edf,A.ecY,A.ecV,A.eed,A.eec,A.ee4,A.ee_,A.edZ,A.edC,A.eeo,A.ed6,A.ed7,A.eeh,A.ed4,A.ec9,A.eca,A.ecb,A.ebW,A.ebX,A.edi,A.edv,A.edx,A.ec2,A.ec1,A.ec3,A.edy,A.ecr,A.ecs,A.ecA,A.ecB,A.ecC,A.ecd,A.ece,A.ees,A.ecg,A.ecf,A.e9T,A.e9N,A.e9O,A.e9P,A.eew,A.eac,A.ea0,A.ea1,A.eae,A.e9V,A.ed3,A.dvz,A.f7H,A.f7I,A.f7J,A.f7G,A.fAa,A.fAh,A.fAc,A.fA9,A.fA2,A.fAe,A.fAg,A.fAf,A.fAd,A.fA3,A.fA1,A.fA6,A.fA7,A.fRC,A.fRA,A.fRz,A.fRB,A.fAl,A.fAx,A.fAm,A.fAn,A.fAp,A.fAs,A.fAt,A.fAu,A.fAv,A.fAq,A.ftu,A.ftp,A.ftq,A.ftr,A.fsN,A.fsP,A.ft_,A.fta,A.fts,A.ftj,A.ftk,A.ftl,A.ftm,A.ftn,A.fto,A.fsQ,A.fsR,A.fsS,A.fsT,A.fsU,A.fsV,A.fsW,A.fsX,A.fsY,A.fsZ,A.ft0,A.ft1,A.ft2,A.ft3,A.ft4,A.ft5,A.ft6,A.ft7,A.ft8,A.ft9,A.ftb,A.ftc,A.ftd,A.fte,A.ftf,A.ftg,A.fth,A.fti,A.fDu,A.fDv,A.fDw,A.fjB,A.fjr,A.fuk,A.ftS,A.ftT,A.ftU,A.ftV,A.fu5,A.fud,A.fue,A.fuf,A.fug,A.fuh,A.fui,A.fuj,A.ftW,A.ftX,A.ftY,A.ftZ,A.fu_,A.fu0,A.fu1,A.fu2,A.fu3,A.fu4,A.fu6,A.fu7,A.fu8,A.fu9,A.fua,A.fub,A.fuc,A.fnr,A.fAE,A.fAA,A.fAD,A.fAC,A.dTg,A.dTn,A.dTe,A.dTf,A.f7v,A.fSN,A.fSM,A.db2,A.db3,A.db_,A.db5,A.db8,A.dba,A.dbt,A.dbJ,A.dbq,A.dbK,A.eXF,A.eXN,A.eXO,A.def,A.deq,A.der,A.det,A.dln,A.dly,A.dlx,A.dlA,A.fj6,A.fjb,A.fjc,A.fja,A.fBf,A.fBe,A.fBd,A.fAk,A.fCV,A.fCU,A.co5,A.co6,A.co2,A.co7,A.co8,A.co9,A.coa,A.co3,A.co4,A.fBc,A.fBa,A.fB4,A.fB7,A.fB5,A.fB6,A.fBb,A.fB8,A.fB9,A.fB3,A.fRW,A.erw,A.erd,A.eri,A.erx,A.erj,A.erk,A.erl,A.eru,A.ery,A.erA,A.erz,A.ero,A.h_h,A.ct1,A.ct8,A.ct9,A.cta,A.ctb,A.ctd,A.ctc,A.ct0,A.csZ,A.ct_,A.ct6,A.ct7,A.ct2,A.ct3,A.ct4,A.ct5,A.evb,A.evc,A.evd,A.evM,A.evO,A.evQ,A.evl,A.evi,A.ew6,A.ewe,A.ew3,A.evD,A.evE,A.evq,A.evr,A.evs,A.evv,A.evw,A.evx,A.evy,A.evz,A.evA,A.evB,A.evC,A.evt,A.evu,A.ewE,A.ewu,A.eww,A.evL,A.ftx,A.fty,A.fBg,A.fBh,A.fBi,A.fBl,A.fBj,A.fSe,A.fSf,A.fSg,A.cws,A.cwo,A.cwq,A.cwr,A.cwp,A.ey5,A.ey6,A.ey0,A.exX,A.eyh,A.eyg,A.eyi,A.eyj,A.eye,A.eyb,A.fmb,A.bVt,A.bVu,A.fhR,A.fCW,A.fCs,A.fCy,A.fCt,A.fCu,A.fCv,A.fCw,A.flJ,A.flK,A.czq,A.czs,A.h_e,A.h_c,A.fbt,A.fbv,A.bT_,A.bSZ])
u(C.jv,[A.c0e,A.ctW,A.ctP,A.ctU,A.ctV,A.bTV,A.bU2,A.bU1,A.fyA,A.fA0,A.fyF,A.c3Y,A.bMH,A.bME,A.bMJ,A.bMG,A.bKK,A.c1T,A.h_q,A.fBQ,A.cBa,A.bKC,A.bLo,A.fDQ,A.fDR,A.fDS,A.fDT,A.fDU,A.fCA,A.fkR,A.frJ,A.frH,A.frG,A.fDV,A.fDW,A.fDX,A.fDY,A.fDZ,A.fE_,A.fE0,A.fE1,A.fE2,A.fE3,A.fDJ,A.fDK,A.fDL,A.fDM,A.fDN,A.fDO,A.fDP,A.h_W,A.h_X,A.bVn,A.ecH,A.ebF,A.eee,A.edq,A.eco,A.ebp,A.ede,A.eeb,A.edY,A.ecz,A.fAi,A.fAb,A.fA8,A.fA4,A.fA5,A.fAz,A.fAo,A.fAr,A.fAy,A.ftt,A.fsO,A.fDx,A.fAB,A.db6,A.eXK,A.dee,A.cte,A.evK,A.eyd,A.d7V,A.d7O,A.fCX,A.fCx,A.czr,A.fCz])
u(C.p1,[A.xj,A.aTK])
u(C.mf,[A.b6B,A.bfH,A.bjr,A.bxi])
t(A.bsf,A.aO4)
u(C.iG,[A.f3a,A.fkL,A.bU9,A.bU3,A.bTZ,A.bU6,A.fyG,A.fyD,A.c4e,A.c42,A.c48,A.c4g,A.c45,A.c44,A.c3D,A.c43,A.c46,A.c41,A.c3W,A.c3V,A.c3X,A.c3U,A.c3I,A.c3H,A.c3M,A.c3N,A.c3O,A.c3P,A.c3Q,A.c3G,A.c3R,A.c3E,A.c3F,A.c3S,A.c4b,A.c4c,A.c4a,A.c4d,A.c49,A.fCh,A.dSS,A.dT4,A.dSZ,A.dT_,A.dSY,A.dSP,A.dT8,A.dT6,A.dT5,A.dSN,A.dSU,A.dSV,A.dSW,A.dSX,A.dSQ,A.dT1,A.dT2,A.dT3,A.dT0,A.dT9,A.fzD,A.eey,A.edl,A.edm,A.edk,A.edn,A.ebR,A.edP,A.ecO,A.ecP,A.ecQ,A.ecR,A.ecS,A.ebi,A.ebh,A.ebj,A.ebf,A.ebg,A.ebe,A.ebt,A.ebu,A.ebv,A.ecJ,A.ecI,A.ecK,A.ecG,A.ecL,A.ecF,A.ecM,A.ecE,A.ecN,A.ecD,A.eaV,A.eaW,A.ebH,A.ebG,A.ebI,A.ebE,A.ebJ,A.ebD,A.ebK,A.ebC,A.ebL,A.ebB,A.ebM,A.ebA,A.ebN,A.ebz,A.edL,A.edM,A.ec4,A.eak,A.ec_,A.ebZ,A.ec0,A.ebY,A.eds,A.edp,A.edo,A.ecn,A.ecm,A.ecj,A.eci,A.eck,A.ech,A.ebO,A.ebP,A.edh,A.ebr,A.ebq,A.ebs,A.edt,A.edF,A.ebo,A.ebm,A.ebl,A.edE,A.ebS,A.ebx,A.ec8,A.eas,A.eap,A.eat,A.eao,A.eau,A.ean,A.eav,A.eam,A.eaw,A.eal,A.eaU,A.eda,A.ed9,A.edb,A.edc,A.edd,A.ecW,A.ecU,A.ecX,A.ecT,A.ee3,A.ee2,A.ee5,A.ee6,A.ee7,A.ee8,A.ee9,A.eea,A.edU,A.edS,A.edT,A.edV,A.edR,A.edW,A.edX,A.edB,A.edD,A.ee0,A.edQ,A.edI,A.edJ,A.edA,A.edH,A.eep,A.eeq,A.eer,A.eei,A.eej,A.eek,A.eel,A.eem,A.een,A.ebw,A.ecc,A.edu,A.ebQ,A.edj,A.edw,A.edz,A.edG,A.ecu,A.ecv,A.ect,A.ecw,A.ecx,A.ecq,A.ecy,A.e9S,A.e9Q,A.ec6,A.ee1,A.ed5,A.ed8,A.e9R,A.eb2,A.eb3,A.eb4,A.eb5,A.eb6,A.eb7,A.eb1,A.eb8,A.eb0,A.eb9,A.eb_,A.eba,A.eaZ,A.ebb,A.eaY,A.ebc,A.eev,A.eex,A.eeu,A.eaF,A.eaG,A.eaH,A.eaL,A.eaM,A.eaN,A.eaE,A.eaO,A.eaD,A.eaP,A.eaC,A.eaQ,A.eaR,A.eaB,A.eaS,A.eaA,A.eaI,A.eaz,A.eaJ,A.eay,A.eaK,A.eax,A.ea_,A.ead,A.ea4,A.eaf,A.e9Z,A.eag,A.eah,A.e9Y,A.eai,A.eaj,A.ea2,A.e9X,A.ea3,A.e9W,A.ea5,A.ea6,A.ea7,A.ea8,A.ea9,A.eaa,A.eab,A.ed0,A.ed1,A.ed_,A.ed2,A.ecZ,A.f7F,A.f7E,A.fdn,A.fdm,A.cgH,A.fAw,A.fBz,A.dTj,A.dTk,A.dTl,A.dTo,A.dTp,A.dTq,A.dTr,A.dTs,A.dTt,A.dTu,A.dTv,A.dTm,A.dTi,A.dTh,A.dTb,A.dTc,A.dTd,A.f7u,A.cxA,A.cxB,A.bXB,A.djT,A.djU,A.djS,A.dbi,A.dbg,A.dbh,A.dbf,A.db0,A.db1,A.db4,A.db7,A.db9,A.dbb,A.dbc,A.dbd,A.dbe,A.dbj,A.dbk,A.dbC,A.dbu,A.dbv,A.dbD,A.dbE,A.dbs,A.dbF,A.dbr,A.dbG,A.dbH,A.dbI,A.dbw,A.dbp,A.dbx,A.dby,A.dbo,A.dbz,A.dbn,A.dbA,A.dbm,A.dbB,A.dbl,A.eXI,A.eXJ,A.eXH,A.eXA,A.eXB,A.eXC,A.eXD,A.eXE,A.eXG,A.eXR,A.eXP,A.eXM,A.eXQ,A.eXL,A.dek,A.del,A.dej,A.dec,A.deg,A.deh,A.dei,A.dem,A.ded,A.dew,A.des,A.dep,A.deu,A.deo,A.dev,A.den,A.dls,A.dlt,A.dlr,A.dlm,A.dlo,A.dlp,A.dlq,A.dlB,A.dlw,A.dlz,A.dlv,A.dlu,A.fj9,A.fj7,A.fj8,A.cc1,A.fB0,A.fB1,A.fB2,A.err,A.ers,A.erq,A.erm,A.erb,A.erc,A.erg,A.erh,A.erp,A.ert,A.erv,A.erf,A.ere,A.erC,A.erB,A.ern,A.ew1,A.ew2,A.ew0,A.ev7,A.ev8,A.ev6,A.ev9,A.eva,A.ev5,A.evm,A.evo,A.eve,A.evf,A.evF,A.evn,A.evY,A.evZ,A.ew_,A.evV,A.evW,A.evX,A.evU,A.evN,A.evP,A.evR,A.evS,A.evT,A.ew5,A.evj,A.evk,A.evg,A.evh,A.evp,A.ew8,A.ew9,A.ewa,A.ewb,A.ewc,A.ewd,A.ewf,A.ew7,A.ew4,A.ewF,A.ewG,A.ewo,A.ewr,A.ews,A.ewq,A.ewt,A.ewp,A.ewH,A.ewn,A.ewI,A.ewm,A.ewJ,A.ewl,A.ewK,A.ewk,A.ewL,A.ewh,A.ewi,A.ewj,A.ewM,A.ewv,A.ewg,A.ewx,A.ewy,A.ewz,A.ewA,A.ewB,A.ewC,A.ewD,A.evG,A.evH,A.evI,A.evJ,A.fBk,A.ey8,A.ey9,A.ey7,A.exY,A.ey2,A.ey3,A.ey1,A.ey4,A.ey_,A.exV,A.exW,A.exZ,A.eyl,A.eyk,A.eyf,A.eya,A.eyc,A.d7J,A.d7K,A.d7L,A.d7M,A.d7F,A.d7I,A.d7H,A.d7G,A.d7R,A.d7S,A.d7T,A.d7Q,A.d7U,A.d7P,A.d7W,A.d7N,A.fbs,A.fbu,A.fbr,A.fbw])
u(C.aw,[A.aZ0,A.Ux,A.acO,A.bk1,A.b7U,A.aY0,A.a7b])
t(A.aAD,A.byc)
t(A.aGz,A.bzx)
t(A.aAX,A.byh)
t(A.bex,A.aLr)
w(A.aNW,P.aux)
v(A.aO4,C.cg)
w(A.byc,A.ad5)
w(A.byh,A.ad5)
w(A.bzx,A.ad5)
v(A.aLr,C.cg)})()
C.j0(b.typeUniverse,JSON.parse('{"a9P":{"af":[],"v":[]},"aej":{"ah":["a9P<1>"]},"avD":{"af":[],"v":[]},"xj":{"aC":[]},"b6B":{"aC":[]},"bsf":{"ah":["avD"]},"aoN":{"af":[],"v":[]},"aoO":{"ah":["aoN"]},"aTK":{"aC":[]},"aZ0":{"aw":[],"v":[]},"Ux":{"aw":[],"v":[]},"apN":{"af":[],"v":[]},"bkX":{"ah":["apN"]},"acO":{"aw":[],"v":[]},"bfH":{"aC":[]},"IW":{"af":[],"v":[]},"aJ2":{"af":[],"v":[]},"aK0":{"af":[],"v":[]},"aEO":{"ah":["IW"]},"bk1":{"aw":[],"v":[]},"bjr":{"aC":[]},"bu6":{"ah":["aJ2"]},"bwh":{"ah":["aK0"]},"awy":{"af":[],"v":[]},"E0":{"af":[],"v":[]},"a9I":{"af":[],"v":[]},"a59":{"af":[],"v":[]},"aBP":{"af":[],"v":[]},"afP":{"af":[],"v":[]},"NI":{"af":[],"v":[]},"bkY":{"ah":["NI"]},"btV":{"ah":["awy"]},"b7U":{"aw":[],"v":[]},"aY0":{"aw":[],"v":[]},"aAD":{"ah":["E0"]},"aGz":{"ah":["a9I"]},"aAX":{"ah":["a59"]},"aBQ":{"ah":["aBP"]},"bxB":{"ah":["afP"]},"a7b":{"aw":[],"v":[]},"Wg":{"af":[],"v":[]},"aFg":{"ah":["Wg"]},"Ok":{"af":[],"v":[]},"aFn":{"ah":["Ok"]},"as3":{"af":[],"v":[]},"aFr":{"ah":["as3"]},"aq9":{"af":[],"v":[]},"bex":{"ah":["aq9"]},"bxi":{"aC":[]},"a1h":{"af":[],"v":[]},"bvb":{"ah":["a1h"]}}'))
C.CW(b.typeUniverse,JSON.parse('{"bpF":1,"aNW":1,"ad5":1}'))
var y={T:"A hot wire never goes on the green ground screw.",X:"A shut-off valve goes on the pipe that comes out of the wall.",v:"Both black wires go on brass screws. It does not matter which one.",N:"Brass screws are for the HOT wire (black).",q:"Each switch has its own screw on the other side, and each goes to its own light.",R:"Fasten the bare copper ground to the GREEN screw.",E:"Fasten the black hot to one HOT (X or Y) brass screw.",A:"Fasten the black wire to the LEFT terminal.",k:"Fasten the red hot to the other HOT brass screw.",c:"Fasten the red wire to the RIGHT terminal.",F:"Fasten the white neutral to a SILVER screw.",r:"Fasten the white neutral to the silver NEUTRAL (W) screw.",b:"Fold the wires back and push the device into the box.",W:"Hot and cold flow through the hoses and out of the faucet. No leaks. The lesson is complete!",P:"LOAD is for feeding other outlets further down the line. It is covered with tape. Power comes in on the LINE screws.",x:"Look at the device and the wires. Learn which wire is which before you touch a screw.",M:"Move it with the arrow buttons, turn it, change its colour or take it out.",G:"Neutral goes on a silver screw. The silver screws stay joined, so one wire feeds both halves.",o:"Pick a paint colour above to change this wall.",n:"Put the cover plate on, turn the power on and test.",Q:"Silver screws are for the NEUTRAL wire (white).",f:"Switch the power on and flip the wall switch.",H:"The bare copper ground goes on the green screw.",t:"The bare copper ground wire only goes on the GREEN screw.",S:"The black and red hot wires go on the two brass screws, X and Y. The silver W screw is for the neutral.",u:"The black hot wire goes on a brass screw.",J:"The black wire goes on the LEFT terminal.",C:"The gold screws are BRASS. They are for the HOT wire (black).",Z:"The green screw is for the bare copper ground wire.",l:"The two hot wires (black and red) go on the two brass screws, X and Y, in either order.",m:"The two hot wires go on the two brass screws, X and Y, in either order.",p:"The two hot wires go on the two brass screws, in either order.",a:"The two traveler wires go on the two brass traveler screws, in either order.",g:"The two travelers coming from the first three-way go on the two top screws.",d:"The two travelers going to the second three-way go on the two bottom screws.",_:"The white neutral wire goes on a silver screw.",I:"The white neutral wire goes on the silver W screw.",B:"The white-silver screws are NICKEL. They are for the NEUTRAL wire (white).",D:"There is no medicine left. Buy some in the shop.",O:"Turn the breaker OFF and test that the wires are dead.",Y:"You are at the street light. Press Fix the street light."}
var x=(function rtii(){var w=C.at
return{dw:w("lH<u?>"),ff:w("aTe"),l:w("bu<n,n>"),gW:w("bu<n,K>"),M:w("dw<n>"),hg:w("a4q"),cD:w("aUY"),eP:w("rn"),gN:w("I1"),eB:w("mg"),fa:w("aB<MN?>"),v:w("dp<G,n>"),fC:w("I7"),f5:w("O<Sl>"),m:w("O<lI>"),gQ:w("O<M0>"),V:w("O<ac>"),O:w("O<u>"),bm:w("O<a4l>"),fW:w("O<aUo>"),F:w("O<a4q>"),C:w("O<xo>"),dI:w("O<Mn>"),gw:w("O<Mw>"),dh:w("O<I1>"),_:w("O<mg>"),dY:w("O<oq>"),cX:w("O<aWw>"),I:w("O<a5n>"),ha:w("O<I7>"),r:w("O<fm>"),E:w("O<hh>"),Z:w("O<jS>"),gL:w("O<ai<G>>"),ez:w("O<a8<n,aD>>"),c7:w("O<a8<n,@>>"),f4:w("O<a8<n,ci>>"),T:w("O<ia>"),dN:w("O<t>"),B:w("O<l9>"),fI:w("O<nw>"),g:w("O<fV>"),z:w("O<kq>"),gl:w("O<b5g>"),a6:w("O<+(a96,G)>"),L:w("O<+(n,n)>"),dt:w("O<+(q,q)>"),d6:w("O<+(K,n)>"),f:w("O<+(K,K)>"),ek:w("O<+(G,n)>"),aJ:w("O<+(n,G,G)>"),dV:w("O<+(K,K,u)>"),al:w("O<+(G,K,R)>"),gp:w("O<+(G,G,ai<t>)>"),dQ:w("O<+(G,G,G)>"),D:w("O<+(K,K,K,K)>"),az:w("O<+(G,G,K,R,n)>"),dz:w("O<+blurb,color,emoji,open,title,words(n,u,n,~(),n,n)>"),fP:w("O<P1>"),e3:w("O<aa3>"),fB:w("O<ws>"),a:w("O<fq>"),gD:w("O<XX>"),K:w("O<rR>"),s:w("O<n>"),fJ:w("O<abb>"),dH:w("O<abc>"),J:w("O<vi>"),bz:w("O<Ak>"),o:w("O<q>"),p:w("O<v>"),d:w("O<iP>"),dF:w("O<PR>"),gR:w("O<bch>"),bl:w("O<G5>"),h:w("O<AA>"),b:w("O<hM>"),x:w("O<ho>"),aQ:w("O<Qk>"),fG:w("O<bss>"),X:w("O<pG>"),u:w("O<R>"),n:w("O<K>"),t:w("O<G>"),dS:w("O<aC?>"),k:w("O<ci>"),eF:w("cx<ah<af>>"),dg:w("ai<K>"),j:w("ai<@>"),c:w("a8<n,@>"),G:w("a8<@,@>"),w:w("iB"),P:w("cv"),q:w("cV"),aU:w("aD"),dx:w("t"),dc:w("fV"),ej:w("Jr"),e:w("kq"),cE:w("a9P<G>"),Q:w("+(K,K)"),c5:w("dx<G>"),cR:w("XL"),R:w("fq"),cH:w("aw6"),N:w("n"),ec:w("jd<n>"),dZ:w("b8s"),e7:w("bq<K>"),cv:w("q"),W:w("bR<n>"),ac:w("bR<G>"),cI:w("jX<n>"),am:w("Z<mg>"),fZ:w("Z<Fg>"),cc:w("Z<n>"),dD:w("Z<G>"),c1:w("hn"),gh:w("CC"),gf:w("PR"),bB:w("bcC"),c9:w("bhL"),y:w("R"),i:w("K"),A:w("@"),S:w("G"),U:w("MD?"),eT:w("MN?"),Y:w("ai<@>?"),dy:w("a8<n,@>?"),fF:w("a8<@,@>?"),cU:w("qb?"),di:w("ci"),H:w("~")}})();(function constants(){var w=a.makeConstList
B.b_t=new A.ey(!0,"The water is on and nothing leaks. Perfect job!",!1,"")
B.b_u=new A.ey(!0,"Primer and paint rolled on.",!1,"")
B.b_v=new A.ey(!1,"This call is over. Start a new one.",!1,"")
B.b_w=new A.ey(!0,"Recorded.",!1,"")
B.b_x=new A.ey(!1,"That is not a place for a sheet.",!1,"")
B.b_y=new A.ey(!0,"Sanded smooth. Wear a mask: the dust is bad to breathe.",!1,"")
B.ace=new A.ey(!1,"There is no device here.",!1,"")
B.b_z=new A.ey(!0,"You look closely. Everything looks fine here.",!1,"")
B.b_A=new A.ey(!1,"ZAP! You were shocked badly and it was your last life. Always turn the breaker OFF and test before you touch wires.",!0,"shock")
B.b_B=new A.ey(!0,"Paper tape pressed into the seam.",!1,"")
B.b_C=new A.ey(!1,"STOP! The breaker is ON, so this box is live (120 volts). Nobody puts a device into a live box. Turn the breaker OFF first, test that the wires are dead, then put the device in.",!1,"")
B.b_D=new A.ey(!0,"Unplugged.",!1,"")
B.b_E=new A.ey(!0,"Breaker OFF. It is safe to work on the wires.",!1,"")
B.b_F=new A.ey(!1,"ZAP! You were shocked badly. That was your last life: the job is over. Lesson: ALWAYS turn the breaker OFF and test the wires before you touch them.",!0,"shock")
B.b_G=new A.ey(!1,"There is nothing there.",!1,"")
B.b_H=new A.ey(!1,"The outlet is burnt. Nothing works. Pull it out and put in a new one.",!0,"")
B.b_I=new A.ey(!0,"The water is on and nothing leaks yet, but the job is not finished.",!1,"")
B.b_J=new A.ey(!0,"Sheet hung. Now screw it to the studs.",!1,"")
B.b_K=new A.ey(!0,"Hole drilled through the middle of the stud, at the cable height. Holes go in the center so a nail cannot reach the cable.",!1,"")
B.b_L=new A.ey(!0,"Plugged in. Nothing happens because the breaker is off. Turn it on to test.",!1,"")
B.b_M=new A.ey(!0,"You flipped the tripped breaker fully OFF. Fix the problem before you turn it on again.",!1,"")
B.b_N=new A.ey(!0,"Click.",!1,"")
B.b_O=new A.ey(!0,"The wires are folded back and the device is in the box. Now put the cover on.",!1,"")
B.b_P=new A.ey(!0,"Breaker OFF. The wires on this circuit are dead now. (Always test them to be sure.)",!1,"")
B.b_Q=new A.ey(!1,"Nothing is wet.",!1,"")
B.b_R=new A.ey(!0,"Power is on.",!1,"")
B.b_S=new A.ey(!0,"Water OFF at the main valve. You can cut into the pipes safely now.",!1,"")
B.b_T=new A.ey(!0,"Opening cut around the box with the drywall saw. Keep it tight: the plate has to cover the edge.",!1,"")
B.b_U=new A.ey(!0,"Device pulled out of the box.",!1,"")
B.b_V=new A.ey(!0,"Screw set just below the paper, not through it.",!1,"")
B.b_W=new A.ey(!1,"ZAP! You touched a live wire. In Learn mode you are not hurt, but in real life this can kill. Switch the breaker OFF and test the wires first.",!0,"shock")
B.b_X=new A.ey(!0,"Cover on. Now you can turn the breaker on and test.",!1,"")
B.WC=new A.ey(!1,"",!1,"")
B.b_Y=new A.ey(!0,"Device taken out. You can put it somewhere else, or put in a new one.",!1,"")
B.b_Z=new A.ey(!0,"Breaker back ON.",!1,"")
B.b0_=new A.ey(!1,"That is not a stud.",!1,"")
B.b00=new A.ey(!0,"Off.",!1,"")
B.b01=new A.ey(!1,"Nothing to flip yet.",!1,"")
B.b02=new A.ey(!0,"Wire taken off.",!1,"")
B.b03=new A.ey(!0,"The mud is dry.",!1,"")
B.b04=new A.ey(!0,"Breaker reset.",!1,"")
B.b05=new A.ey(!0,"Box mounted. (Careful: this is not a fan-rated box. A fan on it could fall.)",!1,"")
B.fQU=new C.y("Tap a piece of furniture, or add one:",null,D.Ap,null,null,null,null,null,null,null,null,null)
B.eo5=new C.D(D.nr,B.fQU,null)
B.b0c=new C.bM(D.a5,null,null,B.eo5,null)
B.b0M=new C.lH(D.aA,x.dw)
B.acH=new A.lI(0,0,0,0,1)
B.b2k=new C.bh(D.jH,D.JB,D.jH,D.JB)
B.b2D=new C.bh(D.JB,D.jH,D.JB,D.jH)
B.adi=new C.aZ(0,290,0,1/0)
B.b2p=new C.bh(H.TL,H.TL,D.bH,D.bH)
B.bt3=new C.u(1,0.12156862745098039,0.13725490196078433,0.18823529411764706,D.q)
B.btb=new C.u(1,0.054901960784313725,0.06274509803921569,0.09411764705882353,D.q)
B.d75=w([B.bt3,B.btb],x.O)
B.c2P=new C.a9(D.b0,D.b6,D.x,B.d75,null,null)
B.b5o=new C.o(null,null,H.ad6,B.b2p,null,B.c2P,D.n)
B.FH=new C.u(1,0.08627450980392157,0.10588235294117647,0.1411764705882353,D.q)
B.b3N=new C.bH(D.a0,D.a0,Af.vD,D.a0)
B.b6e=new C.o(B.FH,null,B.b3N,null,null,null,D.n)
B.b2A=new C.bh(D.mX,D.it,D.it,D.it)
B.b6k=new C.o(D.aK,null,null,B.b2A,null,null,D.n)
B.fRA=new C.y("\u2600\ufe0f Let it dry",null,U.Am,null,null,null,null,null,null,null,null,null)
B.bar=new C.cf(D.A,null,null,B.fRA,null)
B.fRk=new C.y("\u23e9 Skip to the wiring",null,U.Am,null,null,null,null,null,null,null,null,null)
B.baz=new C.cf(D.A,null,null,B.fRk,null)
B.fFC=new C.y("\ud83c\udfd7\ufe0f",null,D.pG,null,null,null,null,null,null,null,null,null)
B.baQ=new C.cf(D.A,null,null,B.fFC,null)
B.fFp=new C.y("\ud83c\udfe0",null,D.aUD,null,null,null,null,null,null,null,null,null)
B.bbh=new C.cf(D.A,null,null,B.fFp,null)
B.bcH=new C.u(1,0.9294117647058824,0.9098039215686274,0.8627450980392157,D.q)
B.LM=new C.u(1,0.1803921568627451,0.20392156862745098,0.25098039215686274,D.q)
B.aew=new C.u(1,0.16470588235294117,0.10588235294117647,0.07058823529411765,D.q)
B.aez=new C.u(1,0.7215686274509804,0.7450980392156863,0.7764705882352941,D.q)
B.bcT=new C.u(1,0.9725490196078431,0.9647058823529412,0.9333333333333333,D.q)
B.vJ=new C.u(1,0.5450980392156862,0.3686274509803922,0.20392156862745098,D.q)
B.bcZ=new C.u(1,0.5568627450980392,0.5568627450980392,0.5882352941176471,D.q)
B.aeE=new C.u(1,0.611764705882353,0.5568627450980392,0.4588235294117647,D.q)
B.Fc=new C.u(1,0.24705882352941178,0.5607843137254902,0.30980392156862746,D.q)
B.bde=new C.u(1,0.8392156862745098,0.9333333333333333,0.984313725490196,D.q)
B.mx=new C.u(1,0.9450980392156862,0.9450980392156862,0.9176470588235294,D.q)
B.bdE=new C.u(1,0.9098039215686274,0.9254901960784314,0.9372549019607843,D.q)
B.bdG=new C.u(1,0.4823529411764706,0.5098039215686274,0.5450980392156862,D.q)
B.bdN=new C.u(1,0.7098039215686275,0.8470588235294118,1,D.q)
B.bdQ=new C.u(1,0.10588235294117647,0.4980392156862745,0.20392156862745098,D.q)
B.aeW=new C.u(1,0.7215686274509804,0.7450980392156863,0.7725490196078432,D.q)
B.vL=new C.u(1,0.8196078431372549,0.29411764705882354,0.22745098039215686,D.q)
B.nX=new C.u(1,0.5450980392156862,0.3686274509803922,0.23529411764705882,D.q)
B.aeY=new C.u(1,0.1803921568627451,0.2,0.23137254901960785,D.q)
B.aeZ=new C.u(1,0.8509803921568627,0.8274509803921568,0.7725490196078432,D.q)
B.af2=new C.u(1,0.6549019607843137,0.6784313725490196,0.7098039215686275,D.q)
B.he=new C.u(1,0.16862745098039217,0.17647058823529413,0.2,D.q)
B.bem=new C.u(1,0.9490196078431372,0.9490196078431372,0.9490196078431372,D.q)
B.af7=new C.u(1,0.13333333333333333,0.6274509803921569,0.4196078431372549,D.q)
B.Fe=new C.u(1,0.8980392156862745,0.7529411764705882,0.4823529411764706,D.q)
B.LW=new C.u(1,0.8156862745098039,0.5098039215686274,0.27450980392156865,D.q)
B.XD=new C.u(1,0.5411764705882353,0.41568627450980394,0.2784313725490196,D.q)
B.afa=new C.u(1,0.4980392156862745,0.7137254901960784,0.9098039215686274,D.q)
B.afb=new C.u(1,0.1843137254901961,0.4196078431372549,0.23529411764705882,D.q)
B.XG=new C.u(1,0.2980392156862745,0.5450980392156862,0.2901960784313726,D.q)
B.vM=new C.u(1,0.788235294117647,0.6274509803921569,0.22745098039215686,D.q)
B.afh=new C.u(1,0.9411764705882353,0.5411764705882353,0.1411764705882353,D.q)
B.Fk=new C.u(1,0.9921568627450981,0.9882352941176471,0.9686274509803922,D.q)
B.XK=new C.u(1,0.5568627450980392,0.5843137254901961,0.6196078431372549,D.q)
B.bfC=new C.u(1,0.47843137254901963,0.35294117647058826,0.22745098039215686,D.q)
B.jb=new C.u(1,0.788235294117647,0.807843137254902,0.8392156862745098,D.q)
B.afr=new C.u(1,0.4196078431372549,0.45098039215686275,0.5019607843137255,D.q)
B.afs=new C.u(1,0.5568627450980392,0.35294117647058826,0.2901960784313726,D.q)
B.Bc=new C.u(1,0.9294117647058824,0.9176470588235294,0.8784313725490196,D.q)
B.bgs=new C.u(1,0.9137254901960784,0.7254901960784313,0.28627450980392155,D.q)
B.bgD=new C.u(1,0.22745098039215686,0.22745098039215686,0.24705882352941178,D.q)
B.bgL=new C.u(1,0.5490196078431373,0.5764705882352941,0.6078431372549019,D.q)
B.xT=new C.u(1,0.22745098039215686,0.24705882352941178,0.2784313725490196,D.q)
B.XQ=new C.u(1,0.8980392156862745,0.8980392156862745,0.8666666666666667,D.q)
B.M5=new C.u(1,0.10588235294117647,0.11372549019607843,0.13333333333333333,D.q)
B.bgZ=new C.u(1,0.22745098039215686,0.23529411764705882,0.25882352941176473,D.q)
B.XU=new C.u(1,0.30980392156862746,0.6588235294117647,0.3764705882352941,D.q)
B.bh4=new C.u(1,0.48627450980392156,0.7686274509803922,1,D.q)
B.afH=new C.u(1,0.8509803921568627,0.803921568627451,0.7215686274509804,D.q)
B.afI=new C.u(1,0.4196078431372549,0.2901960784313726,0.16862745098039217,D.q)
B.Fp=new C.u(1,0.11764705882352941,0.11764705882352941,0.12549019607843137,D.q)
B.bhc=new C.u(1,0.8862745098039215,0.8745098039215686,0.8235294117647058,D.q)
B.afL=new C.u(1,0.9490196078431372,0.7803921568627451,0.611764705882353,D.q)
B.bhg=new C.u(1,0.42745098039215684,0.2901960784313726,1,D.q)
B.bhl=new C.u(1,0.3686274509803922,0.27450980392156865,0.18823529411764706,D.q)
B.bho=new C.u(1,0.9058823529411765,0.8470588235294118,0.7450980392156863,D.q)
B.bhy=new C.u(1,0.5411764705882353,0.4823529411764706,0.41568627450980394,D.q)
B.bhC=new C.u(1,0.24705882352941178,0.16470588235294117,0.10980392156862745,D.q)
B.afS=new C.u(1,0.34901960784313724,0.3176470588235294,0.29411764705882354,D.q)
B.bhF=new C.u(1,0.24705882352941178,0.6470588235294118,0.3568627450980392,D.q)
B.afT=new C.u(1,0.13725490196078433,0.14901960784313725,0.16862745098039217,D.q)
B.bhN=new C.u(1,0.8117647058823529,0.792156862745098,0.7411764705882353,D.q)
B.XZ=new C.u(1,0.8117647058823529,0.8901960784313725,0.9176470588235294,D.q)
B.afX=new C.u(1,0.7215686274509804,0.7450980392156863,0.7843137254901961,D.q)
B.M8=new C.u(1,0.3333333333333333,0.396078431372549,0.4823529411764706,D.q)
B.ag0=new C.u(1,0.5529411764705883,0.7843137254901961,1,D.q)
B.Y1=new C.u(1,1,0.9019607843137255,0.5019607843137255,D.q)
B.big=new C.u(1,0.5411764705882353,0.1843137254901961,0.22745098039215686,D.q)
B.bij=new C.u(1,0.9490196078431372,0.7607843137254902,0.10588235294117647,D.q)
B.ag8=new C.u(1,0.9490196078431372,0.9411764705882353,0.9019607843137255,D.q)
B.biC=new C.u(1,0.8509803921568627,0.7725490196078432,0.6392156862745098,D.q)
B.biG=new C.u(1,0.9686274509803922,0.9607843137254902,0.9333333333333333,D.q)
B.agd=new C.u(1,0.6823529411764706,0.6941176470588235,0.7372549019607844,D.q)
B.nd=new C.u(1,0.1843137254901961,0.49019607843137253,0.8823529411764706,D.q)
B.biR=new C.u(1,0.788235294117647,0.7176470588235294,0.6078431372549019,D.q)
B.Bh=new C.u(1,0.8901960784313725,0.6627450980392157,0.10980392156862745,D.q)
B.Me=new C.u(1,0.7137254901960784,0.7372549019607844,0.7686274509803922,D.q)
B.biW=new C.u(1,0.8431372549019608,0.8509803921568627,0.8784313725490196,D.q)
B.agi=new C.u(1,0.7215686274509804,0.7529411764705882,0.8,D.q)
B.bj6=new C.u(1,0.22745098039215686,0.49019607843137253,0.26666666666666666,D.q)
B.vP=new C.u(1,0.9019607843137255,0.8823529411764706,0.8352941176470589,D.q)
B.Y8=new C.u(1,0.3686274509803922,0.17647058823529413,0.13725490196078433,D.q)
B.bjk=new C.u(1,0.0196078431372549,0.027450980392156862,0.050980392156862744,D.q)
B.agr=new C.u(1,0.6039215686274509,0.6274509803921569,0.6588235294117647,D.q)
B.Fy=new C.u(1,0.09019607843137255,0.09411764705882353,0.10588235294117647,D.q)
B.Bi=new C.u(1,0.9725490196078431,0.9725490196078431,0.9568627450980393,D.q)
B.agt=new C.u(1,0.5411764705882353,0.5647058823529412,0.6,D.q)
B.bjy=new C.u(1,0.2901960784313726,0.12156862745098039,0.15294117647058825,D.q)
B.agx=new C.u(1,0.9450980392156862,0.9568627450980393,0.9725490196078431,D.q)
B.bjP=new C.u(1,0.9019607843137255,0.9019607843137255,0.8784313725490196,D.q)
B.bjZ=new C.u(1,0.29411764705882354,0.21176470588235294,0.12941176470588237,D.q)
B.bk7=new C.u(1,1,0.6392156862745098,0.2784313725490196,D.q)
B.Yc=new C.u(1,0.8941176470588236,0.9058823529411765,0.9176470588235294,D.q)
B.iz=new C.u(1,0.7686274509803922,0.6039215686274509,0.3843137254901961,D.q)
B.bkv=new C.u(1,0.08235294117647059,0.06274509803921569,0.047058823529411764,D.q)
B.agN=new C.u(1,1,0.35294117647058826,0.12156862745098039,D.q)
B.agO=new C.u(1,0.5411764705882353,0.5607843137254902,0.596078431372549,D.q)
B.Mj=new C.u(1,0.16470588235294117,0.10196078431372549,0.06274509803921569,D.q)
B.agQ=new C.u(1,0.5411764705882353,0.29411764705882354,0.29411764705882354,D.q)
B.bkJ=new C.u(1,0.10588235294117647,0.13333333333333333,0.17254901960784313,D.q)
B.Mk=new C.u(1,0.9098039215686274,0.8509803921568627,0.7372549019607844,D.q)
B.bkL=new C.u(1,0.48627450980392156,0.3215686274509804,0.18823529411764706,D.q)
B.o8=new C.u(1,1,0.9450980392156862,0.6588235294117647,D.q)
B.bla=new C.u(1,0.5411764705882353,0.5411764705882353,0.5176470588235295,D.q)
B.blc=new C.u(1,0.9647058823529412,0.9568627450980393,0.9254901960784314,D.q)
B.Mn=new C.u(1,0.47843137254901963,0.23137254901960785,0.1803921568627451,D.q)
B.blm=new C.u(1,0.3333333333333333,0.6274509803921569,0.3333333333333333,D.q)
B.ah_=new C.u(1,0.7058823529411765,0.3254901960784314,0.3254901960784314,D.q)
B.blu=new C.u(1,0.6078431372549019,0.6078431372549019,0.592156862745098,D.q)
B.Bn=new C.u(1,0.9568627450980393,0.9450980392156862,0.9176470588235294,D.q)
B.blA=new C.u(1,0.6078431372549019,0.23137254901960785,0.2901960784313726,D.q)
B.rm=new C.u(1,0.8862745098039215,0.23137254901960785,0.23137254901960785,D.q)
B.q_=new C.u(1,0.9490196078431372,0.9490196078431372,0.9254901960784314,D.q)
B.blF=new C.u(1,0.30980392156862746,0.615686274509804,0.3568627450980392,D.q)
B.ah4=new C.u(1,0.788235294117647,0.8117647058823529,0.8392156862745098,D.q)
B.Yp=new C.u(1,0.611764705882353,0.796078431372549,1,D.q)
B.blK=new C.u(1,0.9294117647058824,0.9215686274509803,0.8941176470588236,D.q)
B.Yr=new C.u(1,0.8392156862745098,0.6823529411764706,0.4470588235294118,D.q)
B.ah7=new C.u(1,0.9098039215686274,0.9098039215686274,0.9098039215686274,D.q)
B.Mp=new C.u(1,0.2901960784313726,0.2980392156862745,0.32941176470588235,D.q)
B.Yt=new C.u(1,0.3686274509803922,0.43137254901960786,0.5176470588235295,D.q)
B.bmt=new C.u(1,0.20784313725490197,0.47843137254901963,0.26666666666666666,D.q)
B.bmw=new C.u(1,0.3568627450980392,0.10196078431372549,0.09019607843137255,D.q)
B.ahi=new C.u(1,0.23137254901960785,0.1843137254901961,0.14901960784313725,D.q)
B.ahj=new C.u(1,0.8509803921568627,0.788235294117647,0.6588235294117647,D.q)
B.kG=new C.u(1,0.9686274509803922,0.9568627450980393,0.9254901960784314,D.q)
B.ahm=new C.u(1,0.22745098039215686,0.23921568627450981,0.26666666666666666,D.q)
B.ahn=new C.u(1,0.13333333333333333,0.1450980392156863,0.16862745098039217,D.q)
B.tU=new C.u(1,0.16470588235294117,0.1450980392156863,0.13725490196078433,D.q)
B.bmQ=new C.u(1,0.5411764705882353,0.23137254901960785,0.23137254901960785,D.q)
B.bmR=new C.u(1,0.9450980392156862,0.9294117647058824,0.8784313725490196,D.q)
B.Bs=new C.u(1,0.796078431372549,0.8156862745098039,0.8392156862745098,D.q)
B.Yz=new C.u(1,0.8980392156862745,0.7254901960784313,0.11764705882352941,D.q)
B.ahv=new C.u(1,0.5607843137254902,0.8156862745098039,1,D.q)
B.bnf=new C.u(1,0.7490196078431373,0.8901960784313725,1,D.q)
B.ahC=new C.u(1,0.6039215686274509,0.4196078431372549,0.24705882352941178,D.q)
B.YD=new C.u(1,0.10588235294117647,0.10588235294117647,0.11372549019607843,D.q)
B.bnB=new C.u(1,0.9529411764705882,0.9058823529411765,0.6313725490196078,D.q)
B.ahJ=new C.u(1,0.9490196078431372,0.9490196078431372,0.9333333333333333,D.q)
B.bo_=new C.u(1,0.6274509803921569,0.6509803921568628,0.6823529411764706,D.q)
B.boc=new C.u(0,0.2196078431372549,0.7411764705882353,0.9725490196078431,D.q)
B.bok=new C.u(1,0.8156862745098039,0.35294117647058826,0.22745098039215686,D.q)
B.boq=new C.u(1,0.8509803921568627,0.788235294117647,0.6274509803921569,D.q)
B.bor=new C.u(1,0.16470588235294117,0.16470588235294117,0.18823529411764706,D.q)
B.ahX=new C.u(1,0.9294117647058824,0.9372549019607843,0.9490196078431372,D.q)
B.YI=new C.u(1,0.9490196078431372,0.9176470588235294,0.8274509803921568,D.q)
B.ai3=new C.u(1,0.10588235294117647,0.07058823529411765,0.03529411764705882,D.q)
B.boN=new C.u(1,0.3607843137254902,0.7019607843137254,0.9098039215686274,D.q)
B.ai4=new C.u(1,0.043137254901960784,0.043137254901960784,0.050980392156862744,D.q)
B.My=new C.u(1,0.24705882352941178,0.26666666666666666,0.3137254901960784,D.q)
B.boX=new C.u(1,0.12549019607843137,0.13333333333333333,0.14901960784313725,D.q)
B.FR=new C.u(1,0.8862745098039215,0.27058823529411763,0.35294117647058826,D.q)
B.bpc=new C.u(1,0.12156862745098039,0.43529411764705883,0.2627450980392157,D.q)
B.bpe=new C.u(0.8509803921568627,0.06666666666666667,0.07450980392156863,0.09411764705882353,D.q)
B.y5=new C.u(1,0.17254901960784313,0.4196078431372549,0.8392156862745098,D.q)
B.tY=new C.u(1,0.7607843137254902,0.4627450980392157,0.22745098039215686,D.q)
B.Bv=new C.u(1,0.7254901960784313,0.7450980392156863,0.7764705882352941,D.q)
B.aid=new C.u(1,0.611764705882353,0.35294117647058826,0.27058823529411763,D.q)
B.bpG=new C.u(1,0.611764705882353,0.5882352941176471,0.5450980392156862,D.q)
B.ail=new C.u(1,0.23137254901960785,0.1843137254901961,0.16470588235294117,D.q)
B.MH=new C.u(1,0.9686274509803922,0.9490196078431372,0.9019607843137255,D.q)
B.bq8=new C.u(1,0.2,0.21176470588235294,0.23137254901960785,D.q)
B.bqd=new C.u(1,0.7098039215686275,0.7333333333333333,0.7647058823529411,D.q)
B.bqe=new C.u(1,0.9294117647058824,0.9294117647058824,0.9098039215686274,D.q)
B.bqk=new C.u(1,0.9098039215686274,0.8941176470588236,0.8549019607843137,D.q)
B.bqp=new C.u(1,0.23137254901960785,0.23137254901960785,0.25098039215686274,D.q)
B.bqt=new C.u(1,0.1411764705882353,0.10588235294117647,0.09411764705882353,D.q)
B.FX=new C.u(1,0.7686274509803922,0.5411764705882353,0.11764705882352941,D.q)
B.bqw=new C.u(1,0.43529411764705883,0.7137254901960784,1,D.q)
B.bqG=new C.u(1,0.9450980392156862,0.9019607843137255,0.8156862745098039,D.q)
B.bqI=new C.u(1,0.9137254901960784,0.8980392156862745,0.8549019607843137,D.q)
B.aiE=new C.u(1,0.18823529411764706,0.2,0.22745098039215686,D.q)
B.aiF=new C.u(1,0.6235294117647059,0.6588235294117647,0.7019607843137254,D.q)
B.MJ=new C.u(1,0.9372549019607843,0.9372549019607843,0.9176470588235294,D.q)
B.aiH=new C.u(0.6666666666666666,1,0.16470588235294117,0.10196078431372549,D.q)
B.bqZ=new C.u(1,0.9372549019607843,0.9137254901960784,0.8627450980392157,D.q)
B.br1=new C.u(1,0.9294117647058824,0.9019607843137255,0.8156862745098039,D.q)
B.YZ=new C.u(1,0.4196078431372549,0.24705882352941178,0.19215686274509805,D.q)
B.aiK=new C.u(1,0.12156862745098039,0.6392156862745098,0.2627450980392157,D.q)
B.br7=new C.u(1,0.803921568627451,0.6274509803921569,0.2,D.q)
B.aiT=new C.u(1,1,0.8392156862745098,0.0392156862745098,D.q)
B.aiU=new C.u(1,0.8901960784313725,0.8627450980392157,0.8117647058823529,D.q)
B.Z1=new C.u(1,0.3607843137254902,0.7019607843137254,1,D.q)
B.aiY=new C.u(1,0.48627450980392156,0.2901960784313726,0.17647058823529413,D.q)
B.Z2=new C.u(1,0.9568627450980393,0.9568627450980393,0.9411764705882353,D.q)
B.brP=new C.u(1,0.8431372549019608,0.8,0.6588235294117647,D.q)
B.MN=new C.u(1,0.9176470588235294,0.9647058823529412,1,D.q)
B.bst=new C.u(1,0.9019607843137255,0.8745098039215686,0.796078431372549,D.q)
B.aj9=new C.u(1,0.8431372549019608,0.16470588235294117,0.16470588235294117,D.q)
B.MT=new C.u(1,0.47843137254901963,0.30980392156862746,0.1568627450980392,D.q)
B.ajc=new C.u(1,0.9294117647058824,0.9372549019607843,0.9529411764705882,D.q)
B.BC=new C.u(1,0.6901960784313725,0.5411764705882353,0.3568627450980392,D.q)
B.i1=new C.u(1,0.6078431372549019,0.8274509803921568,0.9607843137254902,D.q)
B.bt5=new C.u(1,0.48627450980392156,0.2901960784313726,0.22745098039215686,D.q)
B.Ze=new C.u(1,0.7490196078431373,0.8901960784313725,0.9686274509803922,D.q)
B.Zf=new C.u(1,0.23137254901960785,0.6078431372549019,1,D.q)
B.aji=new C.u(1,0.8509803921568627,0.8235294117647058,0.7607843137254902,D.q)
B.bte=new C.u(1,0.9568627450980393,0.9607843137254902,0.9725490196078431,D.q)
B.Zh=new C.u(1,1,0.6901960784313725,0.6588235294117647,D.q)
B.qa=new C.u(1,0.4196078431372549,0.2901960784313726,0.19607843137254902,D.q)
B.btk=new C.u(1,0.8509803921568627,0.7450980392156863,0.5725490196078431,D.q)
B.Zi=new C.u(1,0.13333333333333333,0.14901960784313725,0.17254901960784313,D.q)
B.btn=new C.u(1,0.8117647058823529,0.788235294117647,0.7215686274509804,D.q)
B.btr=new C.u(1,0.7176470588235294,0.4745098039215686,0.12156862745098039,D.q)
B.btx=new C.u(1,0.9294117647058824,0.9294117647058824,0.9176470588235294,D.q)
B.bty=new C.u(1,0.7529411764705882,0.5411764705882353,0.35294117647058826,D.q)
B.btA=new C.u(1,0.5450980392156862,0.4196078431372549,0.24705882352941178,D.q)
B.buD=new A.tn("none","Nothing happens: the device gets no power.",!1,!1,!1)
B.buE=new A.tn("none","It cannot be judged: the wire functions were not verified.",!1,!1,!1)
B.buF=new A.tn("smoke","The loose connection overheats: it glows, smokes and chars the device. In a real wall this can start a fire.",!1,!1,!0)
B.buG=new A.tn("none","It does not work as it should: some part runs wrongly or not at all. That does not tell you what is wrong, so check against the diagram.",!1,!1,!1)
B.buH=new A.tn("none","It runs. There is nothing to see, and that is the danger: with no ground, a fault would energize the metal parts.",!0,!1,!1)
B.buI=new A.tn("none","It works as the diagram says.",!0,!1,!1)
B.buJ=new A.tn("none","It works, and every safety rule is met.",!0,!1,!1)
B.buK=new A.tn("none","Nothing happens: it is dead. But the hot wire is connected, so it can still be live. No sparks, no smoke: that does not make it safe.",!1,!1,!1)
B.buL=new A.tn("spark","Bare copper touches something it should not: sparks. The circuit is not safe.",!1,!1,!1)
B.buM=new A.tn("none","It looks fine for now. But the support cannot carry the weight, and it can fall later.",!1,!1,!1)
B.buN=new A.tn("fire","BANG. A short circuit: a flash, sparks, smoke and a flame at the device. The breaker trips and the device is ruined. The wires and the device are not safe to use.",!1,!0,!0)
B.buO=new A.tn("arc","Hot and neutral are reversed: the parts that should be dead are live. Blue arcs show the energized metal. The simulator does not let anything run on this: it is unsafe, even if a real appliance might seem to work.",!1,!1,!1)
B.buP=new A.tn("arc","Current flows through the ground wire and the metal parts it joins. Arcs crackle at the box. This is a shock hazard.",!1,!1,!1)
B.buQ=new A.tn("spark","The neutral and ground are joined: the protective device trips with a snap of sparks.",!1,!0,!1)
B.bvI=new A.akq("expired","That order took too long and went back on the board.",0)
B.bxE=new C.bb(55e3)
B.byv=new C.P(0,2,0,6)
B.byQ=new C.P(10,0,16,0)
B.byW=new C.P(10,10,10,8)
B.bz1=new C.P(10,16,10,14)
B.bzj=new C.P(11,7,11,7)
B.a_f=new C.P(11,9,11,9)
B.bAl=new C.P(14,16,14,10)
B.bAs=new C.P(14,4,14,28)
B.akS=new C.P(14,8,14,24)
B.bAC=new C.P(16,0,10,0)
B.bC1=new C.P(1,0,0,0)
B.bCD=new C.P(22,0,22,44)
B.bDk=new C.P(26,8,26,8)
B.bDX=new C.P(4,22,4,12)
B.bE9=new C.P(4,4,8,4)
B.bEb=new C.P(4,6,12,4)
B.am6=new C.P(9,0,9,0)
B.bF7=new C.P(9,12,9,12)
B.bF8=new C.P(9,6,2,6)
B.bF9=new C.P(9,6,9,6)
B.fWO=new C.y("Practice mode (no explanations, real shocks)",null,D.aUL,null,null,null,null,null,null,null,null,null)
B.bFF=new C.by(1,D.ba,B.fWO,null)
B.fzb=new C.y("\ud83c\udfd8 Community",null,R.tj,null,null,null,null,null,null,null,null,null)
B.bal=new C.cf(D.A,null,null,B.fzb,null)
B.bFN=new C.by(1,D.ba,B.bal,null)
B.fDN=new C.y("House tour",null,D.n1,null,null,null,null,null,null,null,null,null)
B.fKj=new C.y("A film of your whole house, with every TV on.",null,D.a9P,null,null,null,null,null,null,null,null,null)
B.dn5=w([B.fDN,D.bF,B.fKj],x.p)
B.buB=new C.fk(D.ah,D.e,D.i,D.E,null,D.p,null,0,B.dn5,null)
B.bFS=new C.by(1,D.ba,B.buB,null)
B.fJV=new C.y("Construction Lab",null,R.tj,null,null,null,null,null,null,null,null,null)
B.fyA=new C.y("Wire it. Plumb it. Fix a house.",null,D.hs,null,null,null,null,null,null,null,null,null)
B.ddu=w([B.fJV,B.fyA],x.p)
B.buk=new C.fk(D.ah,D.e,D.i,D.E,null,D.p,null,0,B.ddu,null)
B.bG1=new C.by(1,D.ba,B.buk,null)
B.aU0=new C.F(!0,D.c,null,null,null,null,14,D.H,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fSe=new C.y("5 portions of food\n10 points",null,B.aU0,null,null,null,null,null,null,null,null,null)
B.bG6=new C.by(1,D.ba,B.fSe,null)
B.fEk=new C.y("3 doses of medicine\n12 points",null,B.aU0,null,null,null,null,null,null,null,null,null)
B.bGm=new C.by(1,D.ba,B.fEk,null)
B.fPR=new C.y("Drone film",null,D.fx,null,null,null,null,null,null,null,null,null)
B.bGr=new C.by(1,D.ba,B.fPR,null)
B.fWo=new C.y("Uber licence",null,D.fx,null,null,null,null,null,null,null,null,null)
B.bGT=new C.by(1,D.ba,B.fWo,null)
B.bHR=new A.a59(null,null)
B.a0D=new A.rn(0,"tripped")
B.a0E=new A.rn(1,"noHotWater")
B.a0F=new A.rn(10,"wallHole")
B.a0G=new A.rn(11,"clogged")
B.O1=new A.rn(2,"nutLeak")
B.O2=new A.rn(3,"pexLeak")
B.a0H=new A.rn(5,"flicker")
B.a0I=new A.rn(6,"burntOutlet")
B.a0J=new A.rn(7,"gfciTripped")
B.a0K=new A.rn(8,"runningToilet")
B.a0L=new A.rn(9,"dripFaucet")
B.bJC=new A.oq(!1,"back",0,10)
B.bJD=new A.oq(!1,"back",0,9)
B.bJE=new A.oq(!1,"back",50,0)
B.bJF=new A.oq(!1,"back",56,11)
B.bJG=new A.oq(!1,"back",-50,10)
B.bJH=new A.oq(!1,"left",40,9)
B.bJI=new A.oq(!1,"right",40,10)
B.a0U=new A.oq(!1,"right",50,5)
B.amX=new A.nO("tv100",'Giant 100"',"\ud83d\udcfa",89,!1)
B.bLS=new C.a0(61419,"MaterialIcons",!1)
B.bM3=new C.a0(61888,"MaterialIcons",!1)
B.bMO=new C.a0(62978,"MaterialIcons",!1)
B.bMT=new C.a0(63015,"MaterialIcons",!1)
B.bNf=new C.a0(63165,"MaterialIcons",!1)
B.OE=new C.a0(63228,"MaterialIcons",!1)
B.bNm=new C.a0(63251,"MaterialIcons",!1)
B.aoR=new C.a0(63547,"MaterialIcons",!0)
B.bOx=new C.a0(983222,"MaterialIcons",!1)
B.bOW=new C.a0(983510,"MaterialIcons",!1)
B.bOX=new C.a0(983511,"MaterialIcons",!1)
B.bP8=new C.a0(983666,"MaterialIcons",!1)
B.apC=new C.a0(983775,"MaterialIcons",!1)
B.a2x=new C.a0(983894,"MaterialIcons",!1)
B.bSD=new C.ae(D.om,null,null,null,null,null)
B.bU6=new C.ae(D.cx,26,D.aC,null,null,null)
B.bWB=new C.ae(D.mO,null,null,null,null,null)
B.bXs=new C.ae(D.CB,22,D.c,null,null,null)
B.bXx=new C.ae(D.kN,null,F.f8,null,null,null)
B.bZu=new C.ae(D.ok,null,null,null,null,null)
B.c_K=new C.ae(D.fa,null,D.aC,null,null,null)
B.c_W=new C.ae(A1.Ho,null,D.bt,null,null,null)
B.h_e=new A.q(0,100,20)
B.c1P=new A.hh(B.h_e,"No power in this house",D.bB,0)
B.hfa=new A.q(-60,40,130)
B.c1Q=new A.hh(B.hfa,"\ud83e\uddef Walk here to check the equipment",D.d0,0)
B.h0W=new A.q(0,62,12)
B.c1R=new A.hh(B.h0W,"\ud83d\uded7 Elevator: walk onto the blue mat or tap",D.jx,19502)
B.h0P=new A.q(0,50,80)
B.c1S=new A.hh(B.h0P,"\ud83d\udcda Walk here to teach the class",D.d0,0)
B.h1r=new A.q(105,52,100)
B.c1T=new A.hh(B.h1r,"\ud83c\udf06 Balcony: step here to see the city",D.ej,0)
B.hfo=new A.q(-80,70,40)
B.c1U=new A.hh(B.hfo,"\ud83d\udc69\u200d\u2695\ufe0f Nurse",D.cQ,0)
B.h0T=new A.q(0,52,78)
B.c1V=new A.hh(B.h0T,"\ud83e\udeaa Walk here to get your Uber licence",D.jx,0)
B.hfp=new A.q(-84,84,120)
B.c1W=new A.hh(B.hfp,"\ud83c\udf5e Food and drinks",D.d0,0)
B.h0C=new A.q(0,40,176)
B.c1X=new A.hh(B.h0C,"\ud83c\udf4e Fresh fruit",D.el,0)
B.aWB=new A.q(0,26,312)
B.c1Y=new A.hh(B.aWB,"\u2b07 Walk here to go out",D.ej,0)
B.c1Z=new A.hh(B.aWB,"\ud83d\uded7 Take the elevator down to go out",D.jx,0)
B.h74=new A.q(90,40,56)
B.c2_=new A.hh(B.h74,"\ud83d\udcd6 Library",D.dF,0)
B.h6C=new A.q(80,40,56)
B.c20=new A.hh(B.h6C,"\ud83d\udd25 Fire drill",D.bB,0)
B.aWu=new A.q(0,100,36)
B.c21=new A.hh(B.aWu,"\ud83e\udeaa NGMY Licence office",D.N,0)
B.aXf=new A.q(34,56,18)
B.c22=new A.hh(B.aXf,"\ud83e\uddd1\u200d\ud83d\udcbc Clerk",D.cQ,0)
B.heb=new A.q(-0.4,4.2,-2.4)
B.c23=new A.hh(B.heb,"LIVE 120 V",D.bB,0)
B.hfn=new A.q(-80,52,66)
B.c24=new A.hh(B.hfn,"\ud83c\udfe5 Walk here to admit the sick",D.eP,0)
B.h0Q=new A.q(0,50,84)
B.c25=new A.hh(B.h0Q,"\ud83d\udcb0 Counter: walk here to pay or sell",D.ej,0)
B.c26=new A.hh(B.aXf,"\ud83e\uddd1\u200d\ud83d\udcbc Cashier",D.cQ,0)
B.c35=new C.a9(D.a5,D.a8,D.x,N.azL,null,null)
B.c43=new C.a9(D.a5,D.a8,D.x,N.ay9,null,null)
B.bqy=new C.u(1,0.2901960784313726,0.20392156862745098,0.0784313725490196,D.q)
B.bnh=new C.u(1,0.12156862745098039,0.10196078431372549,0.07058823529411765,D.q)
B.bfS=new C.u(1,0.16470588235294117,0.12156862745098039,0.07058823529411765,D.q)
B.dp6=w([B.bqy,B.bnh,B.bfS],x.O)
B.c48=new C.a9(D.ay,D.aE,D.x,B.dp6,null,null)
B.bhQ=new C.u(1,0.8509803921568627,0.6039215686274509,0.11764705882352941,D.q)
B.dbo=w([F.f8,B.bhQ],x.O)
B.c4g=new C.a9(D.ay,D.aE,D.x,B.dbo,null,null)
B.bpJ=new C.u(1,0.0392156862745098,0.058823529411764705,0.1803921568627451,D.q)
B.bsv=new C.u(1,0.1411764705882353,0.08235294117647059,0.3215686274509804,D.q)
B.cN3=w([E.agb,B.bpJ,B.bsv],x.O)
B.c4Y=new C.a9(D.b0,D.b6,D.x,B.cN3,null,null)
B.d7T=w([E.iU,E.M2,E.iU],x.O)
B.arW=new C.a9(D.a5,D.a8,D.x,B.d7T,null,null)
B.bn6=new C.u(1,0.8901960784313725,0.9254901960784314,0.9803921568627451,D.q)
B.d6l=w([D.c,B.bn6],x.O)
B.c6e=new C.a9(D.b0,D.b6,D.x,B.d6l,null,null)
B.bto=new C.u(1,0.07058823529411765,0.22745098039215686,0.47843137254901963,D.q)
B.d_y=w([E.iU,B.bto],x.O)
B.c6p=new C.a9(D.ay,D.aE,D.x,B.d_y,null,null)
B.dpO=w([D.cr,D.dd],x.O)
B.zm=new C.a9(D.b0,D.b6,D.x,B.dpO,null,null)
B.ckb=w([E.iU,E.M2],x.O)
B.c6E=new C.a9(D.a5,D.a8,D.x,B.ckb,null,null)
B.egh={ground:0}
B.Ae=new C.dw(B.egh,1,x.M)
B.un=new A.fm(25,"Green screw: GROUND",B.Ae,y.H,!1,"ground")
B.egz={lineA:0}
B.f5S=new C.dw(B.egz,1,x.M)
B.bKC=new A.fm(23,"LINE screw 1 (top left)",B.f5S,"Hot leg 1 from the panel goes on the top left screw.",!1,"hot")
B.egA={lineB:0}
B.f5G=new C.dw(B.egA,1,x.M)
B.bKu=new A.fm(21,"LINE screw 2 (top right)",B.f5G,"Hot leg 2 from the panel goes on the top right screw.",!1,"hot")
B.egC={loadA:0}
B.f5R=new C.dw(B.egC,1,x.M)
B.bKa=new A.fm(24,"LOAD screw 1 (bottom left)",B.f5R,"Hot leg 1 to the heater goes on the bottom left screw: it is switched through from the top left one.",!1,"hot")
B.egE={loadB:0}
B.f6t=new C.dw(B.egE,1,x.M)
B.bKn=new A.fm(22,"LOAD screw 2 (bottom right)",B.f6t,"Hot leg 2 to the heater goes on the bottom right screw.",!1,"hot")
B.c6Z=w([B.un,B.bKC,B.bKu,B.bKa,B.bKn],x.r)
B.c72=w(["flange","wax","toilet","bolts","valve","hosehot","hosecold","faucet","tail","trap","arm"],x.s)
B.a3c=w([0,0,0,0],x.t)
B.c7d=w([0,0,0,1],x.k)
B.cgf=w([139,161],x.n)
B.cgm=w([145,158],x.n)
B.cij=w([15,25],x.n)
B.avI=w([16,28],x.n)
B.ck3=w([Y.qQ,A8.TS,S.lp,V.aPW],x.f)
B.ckf=w([1,1,1],x.k)
B.ckg=w([1,1,1,1],x.k)
B.hbZ=new A.q(-57.8,-32,0)
B.b7P=new A.z8(0,"Outlet spot 1",!1,B.hbZ,"low")
B.hcM=new A.q(-9.8,-32,0)
B.b7M=new A.z8(1,"Outlet spot 2",!1,B.hcM,"low")
B.hdk=new A.q(38.2,-32,0)
B.b7S=new A.z8(2,"Outlet spot 3",!1,B.hdk,"low")
B.hbz=new A.q(-25.8,0,0)
B.b7Q=new A.z8(3,"Switch spot 1",!1,B.hbz,"switch")
B.hcF=new A.q(22.2,0,0)
B.b7O=new A.z8(4,"Switch spot 2",!1,B.hcF,"switch")
B.heQ=new A.q(-30,48,40)
B.b7R=new A.z8(5,"Ceiling light spot",!0,B.heQ,"light")
B.h4_=new A.q(30,48,40)
B.b7N=new A.z8(6,"Ceiling fan spot",!0,B.h4_,"fan")
B.uM=w([B.b7P,B.b7M,B.b7S,B.b7Q,B.b7O,B.b7R,B.b7N],C.at("O<z8>"))
B.ezz=new C.z(4,6)
B.eA5=new C.z(5,7)
B.eAu=new C.z(6,8)
B.ckH=w([S.lp,An.vd,E.TP,E.TQ,B.ezz,B.eA5,B.eAu],C.at("O<+(G,G)>"))
B.ckK=w([2],x.t)
B.crt=w(["The living room has no power: find the tripped breaker in the panel and reset it.","The kitchen sink drips: pick the wrench and tighten the slip nut under the sink. (Build the house up to Fixtures to see the problems.)"],x.s)
B.hd1=new A.q(11,4.6,-6)
B.h7q=new A.q(11,5.4,-7.85)
B.hci=new A.q(3.4,5.4,-7.85)
B.aXJ=new A.q(3.4,3.4,-7.85)
B.crv=w([B.hd1,B.h7q,B.hci,B.aXJ],x.o)
B.csd=w([3],x.t)
B.csn=w([300,800,1300,1800],x.n)
B.cun=w([32,80],x.n)
B.hnW=new A.ho(0,0.7,2.2,2,0,0,0)
B.hnL=new A.ho(3,0.1,0.95,-0.42,-0.3,-0.2,0.05)
B.ho4=new A.ho(6.5,0,0.9,-0.38,0.3,0.2,0.05)
B.hod=new A.ho(9.5,-0.9,1.15,0.1,0,0,0)
B.hoa=new A.ho(12.5,-1.7,1.45,1.6,0,0,0)
B.hnK=new A.ho(15.5,-2.8,1,-0.35,0,0,0)
B.ho3=new A.ho(18.5,-3.6,0.9,0.05,0,0,0)
B.ho7=new A.ho(21.5,-4.6,1.5,1.5,0,0,0)
B.hnX=new A.ho(24.5,-5.4,0.9,-0.4,0,0,0)
B.hof=new A.ho(27.5,-6.28,0.75,0.05,0,0,0)
B.hnY=new A.ho(30,-6,2.4,1.7,0,0,0)
B.d4H=w([B.hnW,B.hnL,B.ho4,B.hod,B.hoa,B.hnK,B.ho3,B.ho7,B.hnX,B.hof,B.hnY],x.x)
B.hnO=new A.ho(0,-3.14,1.2,-0.3,0,0,0)
B.hnH=new A.ho(4,-2.2,1.1,0,0,0,0)
B.hoe=new A.ho(8,-1.2,1,0.4,0,0,0)
B.hnM=new A.ho(12,-0.4,1,0.9,0,0,0)
B.hnP=new A.ho(15,0.1,0.85,1.7,0,0,0)
B.hnG=new A.ho(18,0.3,0.8,0,0,0,0)
B.hnN=new A.ho(21,0,0.9,-0.2,0.35,0.25,0)
B.hnT=new A.ho(24,0.6,1.4,0.1,-0.2,0,0)
B.hnU=new A.ho(27,1.4,1.2,0.8,0,0,0)
B.hnS=new A.ho(30,2.4,2.3,1.5,0,0,0)
B.dc2=w([B.hnO,B.hnH,B.hoe,B.hnM,B.hnP,B.hnG,B.hnN,B.hnT,B.hnU,B.hnS],x.x)
B.hnQ=new A.ho(0,0.3,2.6,0.5,0,0,0)
B.ho9=new A.ho(3,0.1,1,0,0,0,0)
B.hoc=new A.ho(6,0,0.95,0.05,0.2,0.15,0)
B.ho0=new A.ho(9,-0.8,1.6,0.3,0,0,0)
B.ho5=new A.ho(12,-1.57,1,-0.2,0,0,0)
B.hnZ=new A.ho(15,-2.4,1.5,0.9,0,0,0)
B.ho2=new A.ho(18,-3.14,1,0.1,0,0,0)
B.hnV=new A.ho(21,-3.9,1.5,0.6,0,0,0)
B.hog=new A.ho(24,-4.71,1,-0.3,0,0,0)
B.hnI=new A.ho(27,-5.5,1.3,0.5,0,0,0)
B.hnF=new A.ho(30,-6.28,2.6,0.9,0,0,0)
B.cI6=w([B.hnQ,B.ho9,B.hoc,B.ho0,B.ho5,B.hnZ,B.ho2,B.hnV,B.hog,B.hnI,B.hnF],x.x)
B.ho8=new A.ho(0,0,0.5,3.5,0,0,0)
B.hnJ=new A.ho(4,0.2,1,-0.3,0,0,0)
B.hob=new A.ho(8,1,1,0,0,0,0)
B.hnD=new A.ho(12,1.57,1.2,0.3,0,0,0)
B.ho6=new A.ho(16,3.14,1.4,1.2,0,0,0)
B.hnE=new A.ho(20,3.5,0.9,-0.35,0,0,0)
B.hnR=new A.ho(24,4.7,1.1,0,0,0,0)
B.ho_=new A.ho(28,6,1,0.3,0,0,0)
B.ho1=new A.ho(30,6.3,2.2,1.4,0,0,0)
B.d4l=w([B.ho8,B.hnJ,B.hob,B.hnD,B.ho6,B.hnE,B.hnR,B.ho_,B.ho1],x.x)
B.cwH=w([B.d4H,B.dc2,B.cI6,B.d4l],C.at("O<ai<ho>>"))
B.cwI=w([380,820,1420,1660],x.n)
B.egL={neutral:0}
B.E9=new C.dw(B.egL,1,x.M)
B.bKt=new A.fm(23,"Silver screw (top): NEUTRAL",B.E9,y.G,!1,"neutral")
B.bK1=new A.fm(24,"Silver screw (bottom): NEUTRAL",B.E9,y.G,!1,"neutral")
B.eh1={switched:0}
B.f6z=new C.dw(B.eh1,1,x.M)
B.bK_=new A.fm(21,"Brass screw (top): SWITCHED hot",B.f6z,"The top half is the switched one: the red wire that comes back from the wall switch goes here.",!1,"hot")
B.efW={always:0}
B.f5D=new C.dw(B.efW,1,x.M)
B.bKq=new A.fm(22,"Brass screw (bottom): ALWAYS hot",B.f5D,"The bottom half is always on: the black wire straight from the panel goes here.",!1,"hot")
B.cxV=w([B.un,B.bKt,B.bK1,B.bK_,B.bKq],x.r)
B.eQ1=new C.z(-820,640)
B.eB7=new C.z(820,640)
B.cy_=w([B.eQ1,B.eB7],x.f)
B.hvs=new A.pG(0,-80,66,24)
B.hvt=new A.pG(1,20,48,20)
B.hvB=new A.pG(2,20,98,20)
B.hvC=new A.pG(3,20,148,20)
B.cyp=w([B.hvs,B.hvt,B.hvB,B.hvC],x.X)
B.Dd=w([],x.m)
B.b1R=new A.rd("highway","\ud83d\udee3\ufe0f","Highway board","Huge and wide, on two thick poles, with a walkway under it",420,170,150,B.Dd,0,1)
B.b1O=new A.rd("tower","\ud83d\uddfc","Tall tower sign","A big sign high up on one very thick pole",400,210,270,B.Dd,0,1)
B.b1U=new A.rd("neon","\ud83c\udf03","Neon board","A big black board with a glowing neon edge",380,190,120,B.Dd,0,1)
B.b1T=new A.rd("roof","\ud83c\udfe0","Rooftop board","A tall house with two big TVs, the NGMY carpet on its back, and a huge board on its roof",460,180,308,B.Dd,800,1)
B.b1N=new A.rd("screen","\ud83d\udcfa","Big screen","A giant TV screen on a stand",440,250,60,B.Dd,0,1)
B.b1V=new A.rd("gate","\ud83d\udeaa","Town gate","A huge arch with the board across it",600,200,200,B.Dd,0,1)
B.b1z=new A.lI(-420,140,0.35,0,1)
B.b1x=new A.lI(460,-420,-0.3,160,1.35)
B.d2y=w([B.b1z,B.b1x],x.m)
B.b1M=new A.rd("duo","\ud83e\udea7","Two far apart","Two separate boards: a near one and a taller one far behind it",320,160,140,B.d2y,0,0.7)
B.b1s=new A.lI(-460,0,0,0,1)
B.b1A=new A.lI(460,0,0,0,1)
B.dog=w([B.b1s,B.acH,B.b1A],x.m)
B.b1X=new A.rd("line3","\u2194\ufe0f","Three in a row","Three separate boards standing in one straight line",300,150,150,B.dog,0,0.6)
B.b1q=new A.lI(-950,250,0.5,0,1)
B.b1p=new A.lI(150,-700,-0.2,220,1.55)
B.b1t=new A.lI(1000,60,-0.55,0,0.9)
B.cTv=w([B.b1q,B.b1p,B.b1t],x.m)
B.b1P=new A.rd("far3","\ud83d\udef0\ufe0f","Three scattered far","Three separate boards far from each other, one of them tall and far behind",320,160,140,B.cTv,0,0.6)
B.b1F=new A.lI(-360,300,0.15,0,1)
B.b1u=new A.lI(360,300,-0.15,0,1)
B.b1C=new A.lI(0,-120,0,100,1.25)
B.b1w=new A.lI(-160,-640,0.1,260,1.6)
B.c7G=w([B.b1F,B.b1u,B.b1C,B.b1w],x.m)
B.b1S=new A.rd("skyline","\ud83c\udf06","Skyline","Four separate boards, the taller ones standing behind the shorter ones",300,150,130,B.c7G,0,0.6)
B.b1o=new A.lI(-440,160,0,0,1)
B.b1D=new A.lI(0,160,0,0,1)
B.b1n=new A.lI(440,160,0,0,1)
B.b1E=new A.lI(-440,-420,3.141592653589793,130,1.2)
B.b1r=new A.lI(0,-420,3.141592653589793,130,1.2)
B.b1B=new A.lI(440,-420,3.141592653589793,130,1.2)
B.dpX=w([B.b1o,B.b1D,B.b1n,B.b1E,B.b1r,B.b1B],x.m)
B.b1Q=new A.rd("lines6","\ud83d\udee4\ufe0f","Two lines of three","Six separate boards: a straight line of three facing front, and a taller line of three behind it facing back",280,140,140,B.dpX,0,0.6)
B.b1y=new A.lI(0,300,0,0,1)
B.b1l=new A.lI(0,-300,3.141592653589793,0,1)
B.b1v=new A.lI(-560,0,-1.5707963267948966,0,1)
B.b1m=new A.lI(560,0,1.5707963267948966,0,1)
B.dv2=w([B.b1y,B.b1l,B.b1v,B.b1m],x.m)
B.b1W=new A.rd("scatter","\ud83c\udf10","Billboard park","Four separate boards: one at the front, one at the back and one on each side, all facing out",320,160,150,B.dv2,0,0.6)
B.a3G=w([B.b1R,B.b1O,B.b1U,B.b1T,B.b1N,B.b1V,B.b1M,B.b1X,B.b1P,B.b1S,B.b1Q,B.b1W],C.at("O<rd>"))
B.dC_=new A.ia(-134,-36,16,44)
B.dBN=new A.ia(34,118,30,66)
B.dBO=new A.ia(34,118,80,116)
B.dBM=new A.ia(34,118,130,166)
B.dC0=new A.ia(-134,-76,140,160)
B.cyt=w([B.dC_,B.dBN,B.dBO,B.dBM,B.dC0],x.T)
B.cyw=w([y.O,y.x,y.R,"Fasten the single black feed from the panel to the FEED screw (it powers both switches through a joined tab).","Fasten the black wire to the first light to the screw of switch 1.","Fasten the black wire to the second light to the screw of switch 2.",y.b,y.n],x.s)
B.ePM=new C.z(-600,1250)
B.ePK=new C.z(-520,1260)
B.ePI=new C.z(-460,1250)
B.ezR=new C.z(520,1280)
B.eAe=new C.z(600,1270)
B.ePw=new C.z(-300,1300)
B.cDo=w([B.ePM,B.ePK,B.ePI,B.ezR,B.eAe,B.ePw],x.f)
B.cDQ=w([460,900,1500,1740],x.n)
B.biV=new C.u(1,0.5411764705882353,0.35294117647058826,0.23529411764705882,D.q)
B.afQ=new C.u(1,0.10588235294117647,0.07058823529411765,0.06274509803921569,D.q)
B.bth=new C.u(1,0.8509803921568627,0.27450980392156865,0.49411764705882355,D.q)
B.aeA=new C.u(1,0.23137254901960785,0.24705882352941178,0.3607843137254902,D.q)
B.erM=new A.tO(B.biV,B.afQ,B.bth,B.aeA,"xbot",!1,0,1)
B.f3b=new A.Fr(0,"Ama",0,2,B.erM,"A nurse who works nights.")
B.bl4=new C.u(1,0.4196078431372549,0.27058823529411763,0.18823529411764706,D.q)
B.bi4=new C.u(1,0.08627450980392157,0.06274509803921569,0.06274509803921569,D.q)
B.bqK=new C.u(1,0.1803921568627451,0.5607843137254902,0.3568627450980392,D.q)
B.erQ=new A.tO(B.bl4,B.bi4,B.bqK,B.LM,"soldier",!1,0,1)
B.f39=new A.Fr(1,"Joseph",1,2,B.erQ,"A student who is always hungry.")
B.boI=new C.u(1,0.6274509803921569,0.4196078431372549,0.2784313725490196,D.q)
B.bjd=new C.u(1,0.2901960784313726,0.24705882352941178,0.4196078431372549,D.q)
B.erR=new A.tO(B.boI,B.Mj,D.aA,B.bjd,"xbot",!1,0,1)
B.f3d=new A.Fr(2,"Grace",3,4,B.erR,"A teacher who marks papers late.")
B.aeO=new C.u(1,0.8784313725490196,0.6431372549019608,0.48627450980392156,D.q)
B.aj6=new C.u(1,0.1843137254901961,0.43529411764705883,0.7098039215686275,D.q)
B.erO=new A.tO(B.aeO,D.agY,B.aj6,B.LM,"soldier",!1,0,1)
B.f3a=new A.Fr(3,"Daniel",6,8,B.erO,"A driver who sleeps in the day.")
B.brm=new C.u(1,0.788235294117647,0.5450980392156862,0.3686274509803922,D.q)
B.bjp=new C.u(1,0.16862745098039217,0.17647058823529413,0.22745098039215686,D.q)
B.erK=new A.tO(B.brm,B.afQ,D.aD,B.bjp,"xbot",!1,0,1)
B.f3f=new A.Fr(4,"Fatima",7,8,B.erK,"A baker who gets up at four.")
B.aiX=new C.u(1,0.47843137254901963,0.29411764705882354,0.18823529411764706,D.q)
B.bpS=new C.u(1,0.24705882352941178,0.22745098039215686,0.2,D.q)
B.erN=new A.tO(B.aiX,D.e2,D.d0,B.bpS,"soldier",!1,0,1)
B.f3c=new A.Fr(5,"Papa Moses",10,-1,B.erN,"The oldest in the house. He watches TV all day.")
B.bnv=new C.u(1,0.5490196078431373,0.3568627450980392,0.23137254901960785,D.q)
B.erP=new A.tO(B.bnv,B.agO,D.ax,B.aeA,"xbot",!1,0,1)
B.f3e=new A.Fr(6,"Mama Rose",9,-1,B.erP,"Cooks for everybody in the kitchen.")
B.CS=w([B.f3b,B.f39,B.f3d,B.f3a,B.f3f,B.f3c,B.f3e],C.at("O<Fr>"))
B.cFP=w([50,130],x.n)
B.cFQ=w([50,140],x.n)
B.cGC=w([51,52,53],x.t)
B.eFk=new C.z(-9.5,4.6)
B.eHO=new C.z(-5.9,2.3)
B.eNX=new C.z(8.8,4.4)
B.cHT=w([B.eFk,B.eHO,B.eNX],x.f)
B.cIf=w([5,35],x.n)
B.cIQ=w([61,63],x.t)
B.cJ2=w([62,64],x.t)
B.cK2=w([68,172],x.n)
B.bia=new C.u(1,0.6039215686274509,0.30980392156862746,0.30980392156862746,D.q)
B.btq=new C.u(1,0.30980392156862746,0.47843137254901963,0.3686274509803922,D.q)
B.zp=w([B.nX,B.Yt,B.bia,B.btq,B.ahj,D.iC],x.O)
B.bpZ=new C.u(1,0.23137254901960785,0.07058823529411765,0.07058823529411765,D.q)
B.bjo=new C.u(1,0.23137254901960785,0.1843137254901961,0.0392156862745098,D.q)
B.bgr=new C.u(1,0.043137254901960784,0.1803921568627451,0.09019607843137255,D.q)
B.cKU=w([B.bpZ,B.bjo,B.bgr],x.O)
B.r3=new A.iP("ground","Bare copper \xb7 ground",B.tY,D.c,"ground")
B.rr=new C.u(1,0.14901960784313725,0.14901960784313725,0.16470588235294117,D.q)
B.hjM=new A.iP("feed","Black \xb7 hot feed from the panel",B.rr,D.c,"hot")
B.Mq=new C.u(1,0.22745098039215686,0.1803921568627451,0.1803921568627451,D.q)
B.hjH=new A.iP("loadA","Black \xb7 to light 1",B.Mq,D.c,"hot")
B.bfG=new C.u(1,0.16862745098039217,0.16862745098039217,0.2,D.q)
B.hjJ=new A.iP("loadB","Black \xb7 to light 2",B.bfG,D.c,"hot")
B.cLr=w([B.r3,B.hjM,B.hjH,B.hjJ],x.d)
B.ay2=w([72,73,74,75],x.t)
B.ePt=new C.z(-25,-15)
B.exa=new C.z(25,-15)
B.ePs=new C.z(-25,15)
B.ex9=new C.z(25,15)
B.cPn=w([B.ePt,B.exa,B.ePs,B.ex9],x.f)
B.h71=new A.q(-125,292,-114.5)
B.haH=new A.q(125,292,-114.5)
B.hdp=new A.q(125,208,-114.5)
B.hal=new A.q(-125,208,-114.5)
B.cPE=w([B.h71,B.haH,B.hdp,B.hal],x.o)
B.eVY=new C.b7(600,400,!0)
B.eVs=new C.b7(1030,400,!0)
B.eVt=new C.b7(1320,400,!0)
B.cPN=w([B.eVY,B.eVs,B.eVt],C.at("O<+(K,K,R)>"))
B.cPQ=w([y.O,y.x,y.R,y.r,y.E,y.k,y.b,y.n],x.s)
B.cTE=w([y.O,"Look at the face: an L-shaped slot (W, neutral) and two slanted slots (X and Y, hot), and no ground hole. That is a NEMA 10-30, the old 3-wire dryer outlet. The neutral also grounds the dryer, which is only allowed in old houses.",y.r,y.E,y.k,y.b,y.n],x.s)
B.bJK=new A.nO("wall","Whole-wall TV","\ud83c\udfac",0,!0)
B.bJV=new A.nO("tv200",'Cinema 200"',"\ud83c\udfac",175,!1)
B.bJN=new A.nO("tv150",'Cinema 150"',"\ud83c\udfac",130,!1)
B.bJP=new A.nO("bangtv",'Beovision TV 77"',"\ud83d\udcfa",66,!1)
B.bJJ=new A.nO("sonytv",'Sony Bravia 75"',"\ud83d\udcfa",64,!1)
B.bJW=new A.nO("lgtv",'LG OLED 65"',"\ud83d\udcfa",56,!1)
B.bJM=new A.nO("tv",'Samsung Neo QLED 55"',"\ud83d\udcfa",48,!1)
B.bJU=new A.nO("appletv",'Apple TV 4K 50"',"\ud83d\udcfa",44,!1)
B.bJT=new A.nO("lamp","Table lamp","\ud83d\udca1",0,!1)
B.bJS=new A.nO("toaster","Toaster","\ud83c\udf5e",0,!1)
B.bJL=new A.nO("hairdryer","Hair dryer","\ud83d\udc87",0,!1)
B.bJO=new A.nO("washer","Washing machine","\ud83e\uddfa",0,!1)
B.bJQ=new A.nO("dryer","Clothes dryer","\ud83c\udf00",0,!1)
B.bJR=new A.nO("range","Kitchen range","\ud83c\udf73",0,!1)
B.a46=w([B.bJK,B.bJV,B.bJN,B.amX,B.bJP,B.bJJ,B.bJW,B.bJM,B.bJU,B.bJT,B.bJS,B.bJL,B.bJO,B.bJQ,B.bJR],C.at("O<nO>"))
B.biA=new C.u(1,0.7764705882352941,0.5254901960784314,0.25882352941176473,D.q)
B.bjw=new C.u(1,0.43529411764705883,0.2901960784313726,0.1803921568627451,D.q)
B.bqV=new C.u(1,0.6627450980392157,0.44313725490196076,0.29411764705882354,D.q)
B.ayl=w([F.mF,B.biA,E.afP,B.bjw,B.bqV],x.O)
B.cXe=w([y.O,"Two cables come into the box: one from the breaker panel (LINE) and one going to the light (LOAD).","Twist the two white wires together with a wire nut. A switch does not cut the neutral.",y.R,"Fasten the black wire from the panel to one BRASS screw.","Fasten the black wire that goes to the light to the other BRASS screw.","Push the switch into the box, put the plate on and test with the power on."],x.s)
B.evR=new C.z(0,330)
B.ePj=new C.z(-120,1080)
B.ewl=new C.z(120,1080)
B.ePu=new C.z(-300,1000)
B.exz=new C.z(300,1000)
B.ePW=new C.z(-700,800)
B.eAD=new C.z(700,800)
B.cXC=w([B.evR,B.ePj,B.ewl,B.ePu,B.exz,B.ePW,B.eAD],x.f)
B.cXI=w(["Walnut","Blue grey","Brick red","Sage green","Sand","Charcoal"],x.s)
B.jG=w(["switch","switch2p","switch3","switch4","switchsmart","switchcombo"],x.s)
B.h92=new A.q(-6.5,7.5,-7.85)
B.h98=new A.q(-6.5,7.8,-3)
B.cY2=w([B.h92,B.h98],x.o)
B.hkc=new A.FY("NGMY JOBS","Find work. Get hired. Get paid.",D.aA,D.im,D.tO)
B.hkk=new A.FY("NGMY LOANS","Help when you need it most.",D.cT,D.dY,D.vV)
B.hkf=new A.FY("KISWAHILI SCHOOL","Learn Swahili and English, step by step.",D.bP,D.tL,D.vY)
B.hkh=new A.FY("CIVIC REGISTRY","Your family, your community, registered.",D.d3,D.d7,D.nZ)
B.hkb=new A.FY("CORE PROTOCOL","Studios for curious minds.",D.b7,D.jt,D.pY)
B.hkg=new A.FY("BUILD AND FIX","The Construction Lab: wire it, plumb it.",D.fs,D.hN,D.tZ)
B.hk5=new A.FY("CREATE WITH NGMY","Videos, slides, bios and books.",D.bE,D.kd,D.pV)
B.cY6=w([B.hkc,B.hkk,B.hkf,B.hkh,B.hkb,B.hkg,B.hk5],C.at("O<FY>"))
B.duR=w(["Switch 1 common","Switch 2 common","Traveler terminal (both switches)","Green ground screw","Neutral splice (not on a switch)"],x.s)
B.efM={"Line (from the breaker)":0,"Load (to the light)":1,"Traveler A":2,"Traveler B":3,Ground:4,Neutral:5}
B.dyX=new C.bu(B.efM,["Switch 1 common","Switch 2 common","Traveler terminal (both switches)","Traveler terminal (both switches)","Green ground screw","Neutral splice (not on a switch)"],x.l)
B.doM=w(["Never assume the dark screw is the same on every brand: read the diagram on the switch.","A switch loop or an old house may not follow the colors: verify the wires."],x.s)
B.bwG=new A.akv("threeway","Three-way switch (two switches, one light)","Two three-way switches control one light from two places. Each switch has a COMMON terminal (dark screw) and two TRAVELER terminals. Power (line) goes to the common of the first switch, the light (load) to the common of the second, and two travelers join the switches. The ground goes to the green screw. A standard single-pole switch cannot do this job.",B.duR,B.dyX,B.doM)
B.cZ1=w(["Fan (motor) control wire","Light control wire","Neutral","Ground","Fan-rated support"],x.s)
B.egt={"Motor lead (black)":0,"Light lead (blue)":1,"Neutral (white)":2,"Ground (green)":3,Support:4}
B.dzw=new C.bu(B.egt,["Fan (motor) control wire","Light control wire","Neutral","Ground","Fan-rated support"],x.l)
B.d2x=w(["A blue wire is a light-kit lead on many fans, but not on all: read the diagram.","A fan that spins does not prove the installation is safe."],x.s)
B.bwH=new A.akv("fanlight","Ceiling fan with a light kit","A fan has a motor and often a light kit, and they are not always switched together. Follow the fan maker's diagram: the motor lead goes to the fan control (or switched hot), the light lead to the light control, the white to neutral and the green to the ground. The box must be fan rated.",B.cZ1,B.dzw,B.d2x)
B.qD=w([B.bwG,B.bwH],C.at("O<akv>"))
B.hvp=new A.pG(0,-100,100,24)
B.hvw=new A.pG(1,90,100,24)
B.cYi=w([B.hvp,B.hvw],x.X)
B.eQ5=new C.z(-95,160)
B.ePC=new C.z(-35,175)
B.eBr=new C.z(95,170)
B.cYn=w([B.eQ5,B.ePC,B.eBr],x.f)
B.bj4=new C.u(1,0.9176470588235294,0.9490196078431372,0.9686274509803922,D.q)
B.boF=new C.u(1,0.9647058823529412,0.9098039215686274,0.9098039215686274,D.q)
B.bnA=new C.u(1,0.9529411764705882,0.9215686274509803,0.7843137254901961,D.q)
B.ayI=w([B.Bn,B.bj4,B.boF,B.bnA],x.O)
B.aYG=new A.iP("neutral","White \xb7 neutral (middle)",B.mx,D.av,"neutral")
B.aYJ=new A.iP("hot1","Black \xb7 hot (left)",B.rr,D.c,"hot")
B.aYH=new A.iP("hot2","Red \xb7 hot (right)",B.vL,D.c,"hot")
B.cYt=w([B.aYG,B.aYJ,B.aYH],x.d)
B.eg4={common:0}
B.f6k=new C.dw(B.eg4,1,x.M)
B.bK9=new A.fm(23,"COMMON screw (the odd one)",B.f6k,"The COMMON screw is the one with a different colour. The black wire that brings the power in, or goes to the light, belongs here.",!1,"hot")
B.eh3={trav1:0,trav2:1}
B.aRv=new C.dw(B.eh3,2,x.M)
B.bKg=new A.fm(21,"Traveler screw (top)",B.aRv,y.a,!1,"hot")
B.bKv=new A.fm(22,"Traveler screw (bottom)",B.aRv,y.a,!1,"hot")
B.cYA=w([B.un,B.bK9,B.bKg,B.bKv],x.r)
B.dC6=new A.ia(-60,60,28,50)
B.dC2=new A.ia(-150,-100,70,170)
B.dBG=new A.ia(100,150,70,170)
B.dC7=new A.ia(-60,-20,156,186)
B.dBL=new A.ia(20,60,156,186)
B.cYP=w([B.dC6,B.dC2,B.dBG,B.dC7,B.dBL],x.T)
B.cYR=w([y.O,"The cable comes in through the top of the box. Strip about 3/4 inch of insulation from each wire.","Fasten the bare copper ground wire to the GREEN screw.","Fasten the white (neutral) wire to a SILVER screw.","Fasten the black (hot) wire to a BRASS screw. Wrap each wire clockwise under its screw.","Fold the wires back and push the outlet into the box.","Put the cover plate on, then turn the power on and test."],x.s)
B.hgG=new A.q(-3.6,7.5,-7.85)
B.h8q=new A.q(-3.6,4.2,-7.85)
B.cYZ=w([B.hgG,B.h8q],x.o)
B.cZ0=w([-0.5,-0.25,0,0.25,0.5],x.n)
B.cZJ=w([0,2,1,3,4,6,7,8],x.t)
B.eWG=new C.b7(-0.1,0,0.5)
B.eYO=new C.b7(0.35,-0.4,0.3)
B.eXE=new C.b7(-0.4,0.55,0.35)
B.cZP=w([B.eWG,B.eYO,B.eXE],C.at("O<+(K,K,K)>"))
B.ePd=new C.z(-1050,"store")
B.aQ9=new C.z(-840,"tower")
B.ePO=new C.z(-630,"tower")
B.ePE=new C.z(-420,"gasstation")
B.aQ8=new C.z(-210,"tower")
B.evW=new C.z(0,"hq")
B.aPX=new C.z(210,"tower")
B.ey7=new C.z(420,"store")
B.eAg=new C.z(630,"tower")
B.aPZ=new C.z(840,"tower")
B.ewb=new C.z(1050,"gasstation")
B.d_o=w([B.ePd,B.aQ9,B.ePO,B.ePE,B.aQ8,B.evW,B.aPX,B.ey7,B.eAg,B.aPZ,B.ewb],x.d6)
B.a4n=w(["Always switch the breaker OFF and test the wires with a tester before you touch them.","Never use water on an electrical fire: switch the power off at the breaker first.","Reversed hot and neutral can look fine and still be a shock hazard.","A GFCI outlet protects you near water: press TEST every month.","A ceiling fan needs a fan-rated box, because it is heavy and it shakes."],x.s)
B.hdv=new A.q(9.8,6,-7.85)
B.h7v=new A.q(9.8,7.5,-7.85)
B.hh4=new A.q(-8,7.5,-7.85)
B.han=new A.q(-8,1.5,-7.85)
B.d_B=w([B.hdv,B.h7v,B.hh4,B.han],x.o)
B.aXU=new A.q(5,1.8,-7.85)
B.hbn=new A.q(5,-0.1,-7.85)
B.hcu=new A.q(12.5,-0.1,-7.85)
B.d0I=w([B.aXU,B.hbn,B.hcu],x.o)
B.h_5=new A.q(3,3.1,-7.1)
B.aXL=new A.q(3,1.7,-7.1)
B.hco=new A.q(3,1,-7.1)
B.h3B=new A.q(3.65,0.5,-7.1)
B.h5s=new A.q(4.3,1,-7.1)
B.hbk=new A.q(4.3,1.8,-7.1)
B.hh8=new A.q(5,1.8,-7.1)
B.d1b=w([B.h_5,B.aXL,B.hco,B.h3B,B.h5s,B.hbk,B.hh8,B.aXU],x.o)
B.zs=w(["tv","lamp","toaster","hairdryer","washerM","dryerM","rangeM"],x.s)
B.Ob=new A.fm(23,"Silver screw W: NEUTRAL",B.E9,y.I,!1,"neutral")
B.egk={hot1:0,hot2:1}
B.E7=new C.dw(B.egk,2,x.M)
B.amY=new A.fm(21,"Brass screw X: HOT",B.E7,y.l,!1,"hot")
B.an6=new A.fm(22,"Brass screw Y: HOT",B.E7,y.l,!1,"hot")
B.d1m=w([B.un,B.Ob,B.amY,B.an6],x.r)
B.an5=new A.fm(23,"Silver screw: NEUTRAL",B.E9,y._,!1,"neutral")
B.egm={hot:0}
B.a8X=new C.dw(B.egm,1,x.M)
B.an1=new A.fm(21,"Brass screw: HOT",B.a8X,y.u,!1,"hot")
B.d1o=w([B.un,B.an5,B.an1],x.r)
B.d1J=w(["My outlet is dead and it is dark in here. Please come and wire it.","The light in my room does not work, and my phone will not charge. Can you fix the wiring?","I have no power in my room at all. Can an electrician come?"],x.s)
B.f_D=new C.cw([-0.35,-0.2,0.42,0.3])
B.f_R=new C.cw([0.3,0.25,0.32,0.38])
B.eZG=new C.cw([0.05,-0.55,0.22,0.14])
B.f_8=new C.cw([-0.5,0.45,0.2,0.16])
B.d1V=w([B.f_D,B.f_R,B.eZG,B.f_8],x.D)
B.d1W=w([D.ax,D.bf,D.aA,D.d3,D.bO,D.f6],x.O)
B.hgl=new A.q(0.6,11,-3.4)
B.h6m=new A.q(0.6,3.2,-3.2)
B.hfM=new A.q(0.6,2.2,-1.9)
B.h5Y=new A.q(0.6,0.7,-1.5)
B.d2k=w([B.hgl,B.h6m,B.hfM,B.h5Y],x.o)
B.d2w=w([0,24,-24,48,-48],x.n)
B.Ey=new A.iP("neutral","White \xb7 neutral",B.mx,D.av,"neutral")
B.hjw=new A.iP("line","Black \xb7 hot from the panel (LINE)",B.rr,D.c,"hot")
B.hjO=new A.iP("load","Black \xb7 hot to the light (LOAD)",B.Mq,D.c,"hot")
B.d2J=w([B.r3,B.Ey,B.hjw,B.hjO],x.d)
B.eCk=new C.z("outlet","\ud83d\udd0c Outlet")
B.eQL=new C.z("gfci","\ud83d\udee1\ufe0f GFCI outlet")
B.eMg=new C.z("switch","\ud83d\udca1 Light switch")
B.eHP=new C.z("dryer4","\ud83d\udc55 Dryer outlet 4-wire")
B.eR6=new C.z("dryer3","\ud83e\udde6 Dryer outlet 3-wire")
B.eOe=new C.z("range4","\ud83c\udf73 Range outlet 4-wire")
B.eHe=new C.z("range3","\ud83e\udd58 Range outlet 3-wire")
B.ex6=new C.z("washer","\ud83e\uddfa Washer outlet")
B.eOR=new C.z("cord4","\u26a1 Dryer cord 4-wire")
B.eUE=new C.z("cord3","\ud83d\udd0c Dryer cord 3-wire")
B.d2N=w([B.eCk,B.eQL,B.eMg,B.eHP,B.eR6,B.eOe,B.eHe,B.ex6,B.eOR,B.eUE],x.L)
B.aze=w([3,3.6,3.3,2.6],x.n)
B.d30=w([y.O,y.x,y.R,"Fasten the white NEUTRAL wire to the NEUTRAL (silver) screw. A regular switch never touches the neutral, this one does.","Fasten the black wire from the panel to the LINE screw.","Fasten the black wire that goes to the light to the LOAD screw.",y.b,y.n],x.s)
B.ePV=new C.z(-700,330)
B.eAC=new C.z(700,380)
B.ePf=new C.z(-1100,-420)
B.ewh=new C.z(1100,-480)
B.ePl=new C.z(-1300,100)
B.ewo=new C.z(1350,30)
B.evX=new C.z(0,-900)
B.ePm=new C.z(-1500,-300)
B.ewp=new C.z(1550,-200)
B.d33=w([B.ePV,B.eAC,B.ePf,B.ewh,B.ePl,B.ewo,B.evX,B.ePm,B.ewp],x.f)
B.d39=w([Y.qQ,A8.TS,S.lp],x.f)
B.bKm=new A.fm(25,"FRAME screw: GROUND (green)",B.Ae,"The green ground wire goes on the screw on the frame, where the strap was.",!1,"ground")
B.an0=new A.fm(21,"MIDDLE terminal: NEUTRAL (white)",B.E9,"The white neutral wire goes on the middle terminal.",!1,"neutral")
B.egj={hot1:0}
B.f66=new C.dw(B.egj,1,x.M)
B.an4=new A.fm(23,"LEFT terminal: black",B.f66,"The black wire goes on the left terminal.",!1,"hot")
B.egl={hot2:0}
B.f6d=new C.dw(B.egl,1,x.M)
B.an3=new A.fm(22,"RIGHT terminal: red",B.f6d,"The red wire goes on the right terminal.",!1,"hot")
B.d3c=w([B.bKm,B.an0,B.an4,B.an3],x.r)
B.hvr=new A.pG(0,-64,120,26)
B.hvu=new A.pG(1,64,120,26)
B.hvz=new A.pG(2,0,84,24)
B.d3J=w([B.hvr,B.hvu,B.hvz],x.X)
B.h4w=new A.q(0,8.3,0)
B.aXk=new A.q(0,3.9,0)
B.azj=w([B.h4w,B.aXk],x.o)
B.d4_=w([y.O,"Make sure the box is rated for a fan. A plain light box cannot carry the weight and the shaking.","Join the house ground wire to the fan ground.","Join the house white wire to the fan white wire with a wire nut.","Join the house black wire to the fan black wire with a wire nut.","Push the wires up into the box and fasten the canopy to the ceiling.",y.f],x.s)
B.eOf=new C.z(-3.5,11)
B.eDF=new C.z(3.5,11)
B.eBU=new C.z(-3.5,-11)
B.ezt=new C.z(3.5,-11)
B.d4i=w([B.eOf,B.eDF,B.eBU,B.ezt],x.f)
B.hdY=new A.q(-0.6,11,-3.4)
B.h7C=new A.q(-0.6,3.2,-3.2)
B.hcU=new A.q(-0.6,2.2,-1.9)
B.hhw=new A.q(-0.6,0.7,-1.5)
B.d4j=w([B.hdY,B.h7C,B.hcU,B.hhw],x.o)
B.I9=w(["dog","cat","cow","sheep","chicken","horse"],x.s)
B.abC=new A.hM("look","Look",D.fa)
B.hmS=new A.hM("wall","Wall box",Q.aon)
B.hmP=new A.hM("ceiling","Ceiling box",D.qp)
B.hn7=new A.hM("fanbox","Fan box",O.Cg)
B.hnj=new A.hM("drill","Drill",D.yV)
B.hn8=new A.hM("cable","Cable roll",E.aof)
B.djo=w([B.abC,B.hmS,B.hmP,B.hn7,B.hnj,B.hn8],x.b)
B.hng=new A.hM("sheet","Drywall sheet",D.CF)
B.hmZ=new A.hM("knife","Drywall saw",D.H7)
B.hmV=new A.hM("screw","Screw gun",A5.Hh)
B.hnl=new A.hM("tape","Tape",D.ux)
B.hnd=new A.hM("mud","Mud",Ah.a1S)
B.hnq=new A.hM("sand","Sander",D.H5)
B.bPK=new C.a0(985109,"MaterialIcons",!1)
B.hn2=new A.hM("paint","Roller",B.bPK)
B.dfF=w([B.abC,B.hng,B.hmZ,B.hmV,B.hnl,B.hnd,B.hnq,B.hn2],x.b)
B.OZ=new C.a0(983223,"MaterialIcons",!1)
B.hnm=new A.hM("outlet","Outlet",B.OZ)
B.hn0=new A.hM("gfci","GFCI",D.uF)
B.hnk=new A.hM("switch","Switch",E.uH)
B.hmU=new A.hM("split","Split outlet",B.OZ)
B.hno=new A.hM("v240four","240 V 4-wire",X.Cl)
B.hmQ=new A.hM("v240three","240 V 3-wire",X.Cl)
B.hn5=new A.hM("v240only","240 V only",X.Cl)
B.hmY=new A.hM("isolated","Isolated ground",B.OZ)
B.a1J=new C.a0(63208,"MaterialIcons",!1)
B.hne=new A.hM("dryer4","Dryer 4-wire (14-30)",B.a1J)
B.hmX=new A.hM("dryer3","Dryer 3-wire (10-30)",B.a1J)
B.a22=new C.a0(63678,"MaterialIcons",!1)
B.hmT=new A.hM("range4","Range 4-wire (14-50)",B.a22)
B.hnb=new A.hM("range3","Range 3-wire (10-50)",B.a22)
B.aoV=new C.a0(63601,"MaterialIcons",!1)
B.hmN=new A.hM("washer","Washer (5-20)",B.aoV)
B.hnf=new A.hM("switch2p","Double-pole",E.uH)
B.hnh=new A.hM("switch3","3-way switch",E.uH)
B.hn6=new A.hM("switch4","4-way switch",E.uH)
B.hn4=new A.hM("switchsmart","Smart switch",E.uH)
B.hmO=new A.hM("switchcombo","Double switch",E.uH)
B.hnc=new A.hM("light","Light",D.qx)
B.bPI=new C.a0(985094,"MaterialIcons",!1)
B.hn3=new A.hM("fan","Fan",B.bPI)
B.hna=new A.hM("tv","TV",A_.a2p)
B.bNY=new C.a0(63571,"MaterialIcons",!1)
B.hn1=new A.hM("lamp","Lamp",B.bNY)
B.bML=new C.a0(62944,"MaterialIcons",!1)
B.hn_=new A.hM("toaster","Toaster",B.bML)
B.bNk=new C.a0(63209,"MaterialIcons",!1)
B.hnp=new A.hM("hairdryer","Hair dryer",B.bNk)
B.hmR=new A.hM("washerM","Washing machine",B.aoV)
B.hmW=new A.hM("dryerM","Dryer",B.a1J)
B.hni=new A.hM("rangeM","Kitchen range",B.a22)
B.hnn=new A.hM("flip","Flip switch",E.uH)
B.hn9=new A.hM("tester","Voltage tester",D.uu)
B.aA_=w([B.abC,B.hnm,B.hn0,B.hnk,B.hmU,B.hno,B.hmQ,B.hn5,B.hmY,B.hne,B.hmX,B.hmT,B.hnb,B.hmN,B.hnf,B.hnh,B.hn6,B.hn4,B.hmO,B.hnc,B.hn3,B.hna,B.hn1,B.hn_,B.hnp,B.hmR,B.hmW,B.hni,B.hnn,B.hn9],x.b)
B.d4N=w([B.djo,B.dfF,B.aA_],C.at("O<ai<hM>>"))
B.eLd=new C.z(-1.2,0)
B.eUe=new C.z(1.2,0)
B.d5_=w([B.eLd,B.eUe],x.f)
B.d5c=w([-0.58,0.58],x.n)
B.d5t=w([40,70,100,130,160],x.n)
B.bKb=new A.fm(23,"NEUTRAL screw (silver)",B.E9,"The electronics inside need the neutral wire to run. White goes on the silver screw.",!1,"neutral")
B.egB={line:0}
B.f6s=new C.dw(B.egB,1,x.M)
B.bKp=new A.fm(21,"LINE screw (brass, hot in)",B.f6s,"The black wire from the breaker panel goes on the LINE screw.",!1,"hot")
B.egF={load:0}
B.f5x=new C.dw(B.egF,1,x.M)
B.bKr=new A.fm(22,"LOAD screw (brass, hot out)",B.f5x,"The black wire that goes to the light goes on the LOAD screw.",!1,"hot")
B.d5D=w([B.un,B.bKb,B.bKp,B.bKr],x.r)
B.emN=new A.nw("flange","flange","Toilet flange",D.Y,"The flange is fixed to the floor over the drain. Everything else sits on it.",!1,0)
B.dj1=w(["flange"],x.s)
B.emL=new A.nw("wax","wax","Wax ring",B.dj1,"The wax ring goes on the flange before the toilet. It makes the seal against sewer gas and water.",!1,0)
B.duj=w(["wax"],x.s)
B.emI=new A.nw("toilet","toilet","Toilet",B.duj,"The toilet is lowered straight down onto the wax ring. The ring has to be there first.",!1,0)
B.dsy=w(["toilet"],x.s)
B.emM=new A.nw("bolts","bolts","Toilet bolts",B.dsy,"The two bolts hold the toilet to the flange. Set the toilet first.",!1,2)
B.emJ=new A.nw("tvalve","valve","Toilet shut-off valve",D.Y,"The shut-off valve goes on the pipe that comes out of the wall.",!0,0)
B.dsF=w(["tvalve","toilet"],x.s)
B.emK=new A.nw("those","hosecold","Toilet supply hose",B.dsF,"The hose joins the valve to the toilet tank, so both must be there first.",!1,2)
B.aL8=new A.nw("faucet","faucet","Faucet",D.Y,"The faucet goes through the hole in the counter.",!1,0)
B.aLb=new A.nw("vhot","valve","Hot shut-off valve (left)",D.Y,y.X,!0,0)
B.aL9=new A.nw("vcold","valve","Cold shut-off valve (right)",D.Y,y.X,!0,0)
B.dtG=w(["vhot","faucet"],x.s)
B.aLc=new A.nw("hhot","hosehot","Hot supply hose",B.dtG,"The hose joins the hot valve to the faucet, so the valve and the faucet must be there first.",!1,2)
B.dtD=w(["vcold","faucet"],x.s)
B.aLa=new A.nw("hcold","hosecold","Cold supply hose",B.dtD,"The hose joins the cold valve to the faucet, so the valve and the faucet must be there first.",!1,2)
B.aL7=new A.nw("tail","tail","Tailpiece",D.Y,"The tailpiece hangs from the sink drain. It is the first piece of the drain.",!1,0)
B.dsr=w(["tail"],x.s)
B.aLd=new A.nw("trap","trap","P-trap",B.dsr,"The P-trap joins the tailpiece. Build the drain from the top down.",!1,1)
B.dsz=w(["trap"],x.s)
B.aLe=new A.nw("arm","arm","Trap arm",B.dsz,"The trap arm joins the trap and goes into the wall.",!1,1)
B.d0a=w([B.emN,B.emL,B.emI,B.emM,B.emJ,B.emK,B.aL8,B.aLb,B.aL9,B.aLc,B.aLa,B.aL7,B.aLd,B.aLe],x.fI)
B.et6=new A.Xh("bathroom","Bathroom",B.d0a,"Fit out a bathroom: a toilet and a sink with its faucet, supply hoses and drain.")
B.dkX=w([B.aL8,B.aLb,B.aL9,B.aLc,B.aLa,B.aL7,B.aLd,B.aLe],x.fI)
B.et7=new A.Xh("kitchen","Kitchen",B.dkX,"Fit out a kitchen sink: the faucet, the hot and cold supplies and the drain.")
B.azA=w([B.et6,B.et7],C.at("O<Xh>"))
B.f_O=new C.cw([-150,180,2,200])
B.eZB=new C.cw([150,180,2,200])
B.eZx=new C.cw([0,280,302,2])
B.d5X=w([B.f_O,B.eZB,B.eZx],x.D)
B.eQ4=new C.z(-900,400)
B.eBn=new C.z(900,400)
B.eQ2=new C.z(-900,1000)
B.eBl=new C.z(900,1000)
B.ePv=new C.z(-300,1260)
B.exA=new C.z(300,1260)
B.ePb=new C.z(-1000,700)
B.ew8=new C.z(1000,700)
B.ePP=new C.z(-640,90)
B.eAh=new C.z(640,90)
B.eQ3=new C.z(-900,1400)
B.eBm=new C.z(900,1400)
B.d69=w([B.eQ4,B.eBn,B.eQ2,B.eBl,B.ePv,B.exA,B.ePb,B.ew8,B.ePP,B.eAh,B.eQ3,B.eBm],x.f)
B.d6E=w([B.an0,B.an4,B.an3],x.r)
B.h_2=new A.q(8.2,0.9,-6.3)
B.hd6=new A.q(8.2,-0.1,-6.3)
B.h2T=new A.q(8.2,-0.1,-7.85)
B.d6O=w([B.h_2,B.hd6,B.h2T],x.o)
B.eAd=new C.z(-4.5,10)
B.eQV=new C.z(4.5,10)
B.eUc=new C.z(-4.5,-10)
B.eQR=new C.z(4.5,-10)
B.d7_=w([B.eAd,B.eQV,B.eUc,B.eQR],x.f)
B.d70=w([-0.28,0.28],x.n)
B.dC9=new A.ia(-70,70,20,44)
B.dBV=new A.ia(-110,-50,80,100)
B.dBQ=new A.ia(50,110,80,100)
B.dBU=new A.ia(-110,-50,130,150)
B.dBP=new A.ia(50,110,130,150)
B.d7d=w([B.dC9,B.dBV,B.dBQ,B.dBU,B.dBP],x.T)
B.d7u=w([D.ax,D.aA,D.bf,D.lZ,D.d3,D.cd,D.f6],x.O)
B.eJD=new C.z("back","Back wall")
B.eTY=new C.z("left","Left wall")
B.eLS=new C.z("right","Right wall")
B.d7W=w([B.eJD,B.eTY,B.eLS],x.L)
B.efZ={black:0}
B.JO=new C.dw(B.efZ,1,x.M)
B.bK2=new A.fm(51,"Black wire nut: HOT",B.JO,"The house black wire joins the fixture black wire.",!1,"hot")
B.eha={white:0}
B.JN=new C.dw(B.eha,1,x.M)
B.bKy=new A.fm(52,"White wire nut: NEUTRAL",B.JN,"The house white wire joins the fixture white wire.",!1,"neutral")
B.bJY=new A.fm(53,"Green ground connection",B.Ae,"The bare copper house ground joins the green fixture ground wire.",!1,"ground")
B.d86=w([B.bK2,B.bKy,B.bJY],x.r)
B.ePB=new C.z(-34,-6)
B.exC=new C.z(30,10)
B.ePe=new C.z(-10,24)
B.d8b=w([B.ePB,B.exC,B.ePe],x.f)
B.d8i=w([y.O,y.x,y.R,"Fasten hot leg 1 from the panel (black) to the top LEFT screw.","Fasten hot leg 2 from the panel (red) to the top RIGHT screw.","Fasten hot leg 1 to the heater (black) to the bottom LEFT screw.","Fasten hot leg 2 to the heater (red) to the bottom RIGHT screw.",y.b,y.n],x.s)
B.bIv=new A.E9("Oak",B.BC,"wood")
B.bIx=new A.E9("Dark wood",B.qa,"wood")
B.aiZ=new C.u(1,0.5529411764705883,0.5647058823529412,0.5882352941176471,D.q)
B.bIz=new A.E9("Grey carpet",B.aiZ,"carpet")
B.brf=new C.u(1,0.3568627450980392,0.4980392156862745,0.6509803921568628,D.q)
B.bIw=new A.E9("Blue carpet",B.brf,"carpet")
B.boE=new C.u(1,0.8470588235294118,0.803921568627451,0.7058823529411765,D.q)
B.bIt=new A.E9("Cream carpet",B.boE,"carpet")
B.bIy=new A.E9("White tile",B.Yc,"tile")
B.bIu=new A.E9("Slate tile",B.afr,"tile")
B.azX=w([B.bIv,B.bIx,B.bIz,B.bIw,B.bIt,B.bIy,B.bIu],C.at("O<E9>"))
B.abl=new A.iP("hot1","Black \xb7 hot 1",B.rr,D.c,"hot")
B.abm=new A.iP("hot2","Red \xb7 hot 2",B.vL,D.c,"hot")
B.a4B=w([B.Ey,B.abl,B.abm],x.d)
B.eW4=new C.b7(-80,100,D.ax)
B.eYd=new C.b7(80,100,D.bf)
B.eXc=new C.b7(-80,150,D.aA)
B.d93=w([B.eW4,B.eYd,B.eXc],x.dV)
B.hvn=new A.pG(0,0,78,26)
B.d9b=w([B.hvn],x.X)
B.eh0={store:0,gasstation:1}
B.f6u=new C.dw(B.eh0,2,x.M)
B.bvL=new A.zd("food","\ud83c\udf54","Food",B.f6u)
B.egY={shop:0,store:1}
B.f6_=new C.dw(B.egY,2,x.M)
B.bvK=new A.zd("groceries","\ud83d\uded2","Groceries",B.f6_)
B.egi={hospital:0}
B.f5V=new C.dw(B.egi,1,x.M)
B.bvN=new A.zd("medicine","\ud83d\udc8a","Medicine",B.f5V)
B.egn={hq:0,tower:1}
B.f6q=new C.dw(B.egn,2,x.M)
B.bvJ=new A.zd("package","\ud83d\udce6","Package",B.f6q)
B.efs={school:0,firestation:1,hq:2}
B.f5I=new C.dw(B.efs,3,x.M)
B.bvM=new A.zd("letters","\u2709\ufe0f","Letters",B.f5I)
B.Rj=w([B.bvL,B.bvK,B.bvN,B.bvJ,B.bvM],C.at("O<zd>"))
B.d9q=w([y.O,y.x,y.F,"Fasten the black hot to a BRASS screw.","Fasten the green wire with the yellow stripe (the isolated ground, which runs all the way to the panel) to the GREEN screw with the orange triangle. The box itself is grounded with its own bare copper wire.",y.b,y.n],x.s)
B.d9x=w([-1000,-500,0,500,1000],x.n)
B.dav=w([y.O,y.x,"Take the metal GROUND STRAP off: tap it. On a 4-wire cord the neutral must NOT touch the frame, because the green wire grounds the frame.","Fasten the green ground wire to the GREEN frame screw where the strap was.","Fasten the white neutral to the MIDDLE terminal.",y.A,y.c,y.b,y.n],x.s)
B.hcV=new A.q(3,3.2,-7.85)
B.hhz=new A.q(3,4,-7.85)
B.hgH=new A.q(3,4.2,-7.4)
B.h1f=new A.q(3,3.95,-7)
B.day=w([B.hcV,B.hhz,B.hgH,B.h1f],x.o)
B.daA=w(["The sink leaks and there is water on the floor. Please fix the plumbing.","The toilet is not connected and the water is running everywhere. Help!","There is no water at my sink and the pipes are open. Can a plumber come?"],x.s)
B.XF=new C.u(1,0.23137254901960785,0.3568627450980392,0.47843137254901963,D.q)
B.daL=w([D.al,B.XF,D.bM,D.bs],x.O)
B.f7_=new A.rR("apple","\ud83c\udf4e","Apple","A little energy",3,0.12,0,0.1,!1)
B.f70=new A.rR("water","\ud83d\udca7","Water","Quenches your thirst",2,0,0,0.8,!1)
B.f71=new A.rR("juice","\ud83e\udd64","Juice","Some energy and a drink",4,0.18,0,0.5,!1)
B.f76=new A.rR("sandwich","\ud83e\udd6a","Sandwich","A good bit of energy",6,0.3,0,0,!1)
B.f6Z=new A.rR("meal","\ud83c\udf54","Burger meal","Lots of energy",10,0.55,0,0,!1)
B.daO=w([B.f7_,B.f70,B.f71,B.f76,B.f6Z],x.K)
B.ePQ=new C.z(-660,340)
B.ePy=new C.z(-330,340)
B.exD=new C.z(330,340)
B.eAj=new C.z(660,340)
B.ePR=new C.z(-660,500)
B.ePz=new C.z(-330,500)
B.exE=new C.z(330,500)
B.eAk=new C.z(660,500)
B.ePS=new C.z(-660,780)
B.ePA=new C.z(-330,780)
B.exG=new C.z(330,780)
B.eAl=new C.z(660,780)
B.ePJ=new C.z(-500,940)
B.ezO=new C.z(500,940)
B.dbq=w([B.ePQ,B.ePy,B.exD,B.eAj,B.ePR,B.ePz,B.exE,B.eAk,B.ePS,B.ePA,B.exG,B.eAl,B.ePJ,B.ezO],x.f)
B.lj=w(["outlet","gfci","split","v240four","v240three","v240only","isolated","dryer4","dryer3","range4","range3","washer"],x.s)
B.hdA=new A.q(6,0.2,0)
B.hbO=new A.q(6,2.6,0)
B.aYn=new A.q(8.6,2.6,0)
B.dbV=w([B.hdA,B.hbO,B.aYn],x.o)
B.dcq=w([D.c,D.du,D.ep,D.eO,D.bN,D.bL],x.O)
B.ePZ=new C.z(-7,-7)
B.eAS=new C.z(7,-7)
B.ePY=new C.z(-7,7)
B.eAR=new C.z(7,7)
B.dcF=w([B.ePZ,B.eAS,B.ePY,B.eAR],x.f)
B.dcH=w([-2.4,2.4],x.n)
B.dcI=w([-0.5,0,0.5],x.n)
B.an2=new A.fm(21,"Brass screw X: HOT",B.E7,y.p,!1,"hot")
B.amZ=new A.fm(22,"Brass screw Y: HOT",B.E7,y.p,!1,"hot")
B.dcT=w([B.un,B.an2,B.amZ],x.r)
B.hjT=new A.PM("Black","Hot (line or switched)","Brass terminal","120 V branch circuit","Carries the power from the breaker. Treat it as live until it is tested dead.","Can be a traveler in a three-way switch, or a switched hot. Verify with a tester.")
B.hjR=new A.PM("Red","Hot (second hot or traveler)","Brass or the marked traveler terminal","Switch legs, travelers, fan and light controls","Often the switched wire to a fan or light, or a traveler.","Check the diagram: red can be a traveler or a second circuit.")
B.hjQ=new A.PM("White","Neutral","Silver terminal","120 V branch circuit","The return path for the current. It can still be live if something is wrong.","In a switch loop a white wire can be re-marked as a hot. A white wire is not always neutral.")
B.hjP=new A.PM("Bare copper or green","Equipment ground","Green screw or the ground lead","Every grounded device","Not for current in normal use. It is the safety path if a fault happens.","Never use the neutral as a ground. Older homes may have no ground at all: that needs verification.")
B.hjS=new A.PM("Gray / blue / others","Depends on the installation","See the device diagram","Low voltage, control wires, other systems","Do not guess what a wire does from its color.","Colors and their meaning are not the same everywhere. REQUIRES VERIFICATION.")
B.dcX=w([B.hjT,B.hjR,B.hjQ,B.hjP,B.hjS],C.at("O<PM>"))
B.Rr=w([-1.6,1.6],x.n)
B.hju=new A.iP("blackLine","Black \xb7 from the breaker",B.rr,D.c,"hot")
B.hjK=new A.iP("blackLoad","Black \xb7 to the light",B.Mq,D.c,"hot")
B.dd5=w([B.hju,B.hjK,B.r3],x.d)
B.ddn=w([0,10,22,36,52],x.n)
B.hvq=new A.pG(0,-60,130,26)
B.hvv=new A.pG(1,80,56,22)
B.ddo=w([B.hvq,B.hvv],x.X)
B.ddO=w([D.bo,D.bt,D.ax,D.aJ,D.bs],x.O)
B.egs={isoground:0}
B.f5B=new C.dw(B.egs,1,x.M)
B.bKx=new A.fm(25,"Isolated-ground screw (green, orange triangle)",B.f5B,"The dedicated ground wire goes on the green screw with the orange triangle. It does not touch the box or the strap.",!1,"ground")
B.ddZ=w([B.bKx,B.an5,B.an1],x.r)
B.bfz=new C.u(1,0.9294117647058824,0.9019607843137255,0.8392156862745098,D.q)
B.bdv=new C.u(1,0.9137254901960784,0.8274509803921568,0.8274509803921568,D.q)
B.bcG=new C.u(1,0.8352941176470589,0.8941176470588236,0.8156862745098039,D.q)
B.ah2=new C.u(1,0.9529411764705882,0.8901960784313725,0.6549019607843137,D.q)
B.bim=new C.u(1,0.7254901960784313,0.7647058823529411,0.8666666666666667,D.q)
B.bro=new C.u(1,0.5607843137254902,0.6392156862745098,0.6588235294117647,D.q)
B.aAe=w([B.bfz,B.XZ,B.bdv,B.bcG,B.ah2,B.bim,B.ah7,B.bro],x.O)
B.efY={blackLine:0,blackLoad:1}
B.aRf=new C.dw(B.efY,2,x.M)
B.bKc=new A.fm(21,"Brass screw (top)",B.aRf,y.v,!1,"hot")
B.bJZ=new A.fm(22,"Brass screw (bottom)",B.aRf,y.v,!1,"hot")
B.an_=new A.fm(25,"Green screw: GROUND",B.Ae,y.Z,!1,"ground")
B.deA=w([B.bKc,B.bJZ,B.an_],x.r)
B.eQ0=new C.z(-80,90)
B.eB5=new C.z(80,90)
B.eQ_=new C.z(-80,140)
B.eB4=new C.z(80,140)
B.dfi=w([B.eQ0,B.eB5,B.eQ_,B.eB4],x.f)
B.bKz=new A.fm(51,"Black wire nut: HOT",B.JO,"The house black wire joins the fan black wire.",!1,"hot")
B.bJX=new A.fm(52,"White wire nut: NEUTRAL",B.JN,"The house white wire joins the fan white wire.",!1,"neutral")
B.bKk=new A.fm(53,"Green ground connection",B.Ae,"The bare copper house ground joins the green fan ground wire.",!1,"ground")
B.dfp=w([B.bKz,B.bJX,B.bKk],x.r)
B.bcr=new A.SB("bus",-575,-25,0,1)
B.bct=new A.SB("police",-575,-25,854,5)
B.bcs=new A.SB("bus",25,575,850,3)
B.bcu=new A.SB("police",25,575,1704,6)
B.kq=w([B.bcr,B.bct,B.bcs,B.bcu],C.at("O<SB>"))
B.amJ=new A.rn(4,"deadOutlet")
B.dfx=w([B.a0D,B.a0E,B.O1,B.O2,B.amJ,B.a0H,B.a0I,B.a0J,B.a0K,B.a0L,B.a0F,B.a0G],C.at("O<rn>"))
B.eZy=new C.cw([0,560,240,7])
B.eZz=new C.cw([0,560,300,9])
B.a4N=w([B.eZy,B.eZz],C.at("O<+(K,K,K,G)>"))
B.hoy=new A.m2("outlet","\ud83d\udd0c","Wall outlet","Black to brass, white to silver",D.aA)
B.hoq=new A.m2("switch","\ud83d\udca1","Light switch","Two blacks and a wire nut",D.aJ)
B.hor=new A.m2("gfci","\ud83d\udee1\ufe0f","GFCI outlet","LINE and LOAD near water",D.bv)
B.hoz=new A.m2("fan","\ud83c\udf00","Ceiling fan","Black, white, green and a fan box",D.b8)
B.hoj=new A.m2("switch2p","\ud83d\udd25","Double-pole switch","240 V: breaks both hot legs",D.hZ)
B.hos=new A.m2("switch3","\ud83d\udd00","Three-way switch","Common and two travelers",D.aJ)
B.hoE=new A.m2("switch4","\ud83d\udd01","Four-way switch","Between two three-ways",D.cp)
B.hoC=new A.m2("switchsmart","\ud83d\udcf6","Smart, motion or timer switch","Needs the neutral wire",D.bq)
B.hot=new A.m2("switchcombo","\ud83c\udf9a\ufe0f","Combination switch","Two switches, one feed",D.hh)
B.hom=new A.m2("split","\ud83c\udf17","Split (half-switched) outlet","Break the tab: switched and always-on",D.aT)
B.hoA=new A.m2("v240four","\ud83e\uddfa","4-wire 240 V outlet","Dryer, range and EV: two hots, neutral, ground",D.c0)
B.hoB=new A.m2("v240three","\ud83d\udd70\ufe0f","3-wire 240 V outlet","Old dryer or range: no separate ground",D.cL)
B.hol=new A.m2("v240only","\u2744\ufe0f","240 V only outlet","Window AC, welder: two hots and ground",D.b8)
B.hov=new A.m2("isolated","\ud83c\udfed","Isolated-ground outlet","Its own ground wire to the panel",D.bv)
B.hon=new A.m2("dryer4","\ud83d\udc55","Dryer outlet, 4-wire (14-30)","New houses: X, Y, W and a ground",D.hZ)
B.hox=new A.m2("dryer3","\ud83e\udde6","Dryer outlet, 3-wire (10-30)","Old houses: the neutral also grounds",D.cL)
B.hou=new A.m2("range4","\ud83c\udf73","Range outlet, 4-wire (14-50)","50 amp stove: X, Y, W and a ground",D.c0)
B.hoF=new A.m2("range3","\ud83e\udd58","Range outlet, 3-wire (10-50)","Old 50 amp stove: no separate ground",D.aT)
B.hoi=new A.m2("washer","\ud83e\uddfa","Washing machine outlet (5-20)","Its own 20 amp circuit, near water",D.aJ)
B.hoD=new A.m2("cord3","\ud83d\udd0c","Dryer cord, 3-wire hookup","The ground strap stays on",D.bq)
B.hop=new A.m2("cord4","\u26a1","Dryer cord, 4-wire hookup","Take the ground strap off",D.bv)
B.how=new A.m2("ptrap","\ud83e\udea0","Sink drain (P-trap)","Build a drain with a water seal",D.cp)
B.hoo=new A.m2("faucet","\ud83d\udeb0","Faucet supply lines","Hot left, cold right",D.c0)
B.hok=new A.m2("house","\ud83c\udfd7\ufe0f","Build and fix a house","Stage by stage, then repair",D.bq)
B.dfT=w([B.hoy,B.hoq,B.hor,B.hoz,B.hoj,B.hos,B.hoE,B.hoC,B.hot,B.hom,B.hoA,B.hoB,B.hol,B.hov,B.hon,B.hox,B.hou,B.hoF,B.hoi,B.hoD,B.hop,B.how,B.hoo,B.hok],C.at("O<m2>"))
B.hjI=new A.iP("always","Black \xb7 always hot (from the panel)",B.rr,D.c,"hot")
B.hjC=new A.iP("switched","Red \xb7 switched hot (from the wall switch)",B.vL,D.c,"hot")
B.dfZ=w([B.r3,B.Ey,B.hjI,B.hjC],x.d)
B.dg2=w([y.O,"Find the LINE and LOAD screws. LOAD is covered with yellow tape. Leave it covered unless you feed another outlet.",y.R,"Fasten the white wire to the silver LINE screw.","Fasten the black wire to the brass LINE screw.","Push the GFCI into the box and put the plate on.","Turn the power on, press RESET, then press TEST. It must click off."],x.s)
B.dg5=w([y.O,y.x,y.R,"Fasten the black wire (power in, or to the light) to the COMMON screw: the odd-coloured one.","Fasten the first traveler (red) to a TRAVELER screw.","Fasten the second traveler (white wire taped black) to the other TRAVELER screw.",y.b,y.n],x.s)
B.hvo=new A.pG(0,0,80,26)
B.hvx=new A.pG(1,90,56,22)
B.dgo=w([B.hvo,B.hvx],x.X)
B.dgy=w(["car","ambulance","firetruck"],x.s)
B.dgz=w([y.O,y.x,"This outlet has its own 20 amp breaker and 12 gauge wire (a yellow cable): the washer must not share its circuit with anything else. The T-shaped slot tells you it takes both 15 and 20 amp plugs. In a laundry area the new code asks for GFCI protection, from a GFCI breaker or a GFCI outlet before it.",y.R,y.F,"Fasten the black hot to a BRASS screw.",y.b,y.n],x.s)
B.dC8=new A.ia(-62,62,6,46)
B.dBW=new A.ia(-117,-73,149,171)
B.dC5=new A.ia(-57,-13,164,186)
B.dBR=new A.ia(73,117,159,181)
B.dBJ=new A.ia(120,144,140,160)
B.dBH=new A.ia(108,142,48,60)
B.dgE=w([B.dC8,B.dBW,B.dC5,B.dBR,B.dBJ,B.dBH],x.T)
B.dgI=w([0.1,8.05],x.n)
B.h1j=new A.q(1000,900,1500)
B.h_Q=new A.q(0,200,0)
B.aQ7=new C.z(B.h1j,B.h_Q)
B.h3S=new A.q(300,70,1000)
B.h0a=new A.q(0,250,300)
B.eJV=new C.z(B.h3S,B.h0a)
B.heD=new A.q(-200,90,780)
B.h06=new A.q(0,240,300)
B.eFT=new C.z(B.heD,B.h06)
B.hf0=new A.q(-420,520,1000)
B.h04=new A.q(0,230,300)
B.eBu=new C.z(B.hf0,B.h04)
B.h63=new A.q(700,330,900)
B.h3Q=new A.q(300,230,200)
B.eOJ=new C.z(B.h63,B.h3Q)
B.h1C=new A.q(1100,80,300)
B.h5b=new A.q(560,250,0)
B.eNH=new C.z(B.h1C,B.h5b)
B.h1s=new A.q(1080,100,-250)
B.h5a=new A.q(560,240,-100)
B.eRH=new C.z(B.h1s,B.h5a)
B.h1i=new A.q(1000,700,-700)
B.h2Y=new A.q(200,230,-300)
B.eTU=new C.z(B.h1i,B.h2Y)
B.h2Z=new A.q(200,90,-860)
B.h0c=new A.q(0,250,-300)
B.eQf=new C.z(B.h2Z,B.h0c)
B.heL=new A.q(-300,110,-820)
B.h07=new A.q(0,240,-300)
B.eGu=new C.z(B.heL,B.h07)
B.hfv=new A.q(-900,600,-600)
B.heM=new A.q(-300,230,-100)
B.eF4=new C.z(B.hfv,B.heM)
B.hem=new A.q(-1100,90,-200)
B.hf6=new A.q(-560,250,0)
B.eTS=new C.z(B.hem,B.hf6)
B.hel=new A.q(-1100,120,250)
B.hf5=new A.q(-560,240,0)
B.eJl=new C.z(B.hel,B.hf5)
B.hff=new A.q(-700,520,1000)
B.hei=new A.q(-100,230,100)
B.eD3=new C.z(B.hff,B.hei)
B.h2X=new A.q(200,170,1300)
B.h03=new A.q(0,230,150)
B.eTE=new C.z(B.h2X,B.h03)
B.dgY=w([B.aQ7,B.eJV,B.eFT,B.eBu,B.eOJ,B.eNH,B.eRH,B.eTU,B.eQf,B.eGu,B.eF4,B.eTS,B.eJl,B.eD3,B.eTE,B.aQ7],x.dt)
B.h9E=new A.q(-0.35,11,-3.4)
B.h7M=new A.q(-0.35,3.2,-3.2)
B.hbY=new A.q(-0.35,2.2,-1.9)
B.h5R=new A.q(-0.35,0.7,-1.5)
B.dgZ=w([B.h9E,B.h7M,B.hbY,B.h5R],x.o)
B.hgx=new A.q(5.2,7.5,-7.85)
B.hbJ=new A.q(5.2,4,-7.85)
B.dh4=w([B.hgx,B.hbJ],x.o)
B.bK6=new A.fm(21,"LOAD hot (brass, taped)",D.vi,y.P,!0,"load")
B.bK8=new A.fm(22,"LINE hot (brass)",B.JO,"The black (hot) wire from the breaker goes on the brass LINE screw.",!1,"hot")
B.bK5=new A.fm(23,"LOAD neutral (silver, taped)",D.vi,y.P,!0,"load")
B.bKh=new A.fm(24,"LINE neutral (silver)",B.JN,"The white (neutral) wire from the breaker goes on the silver LINE screw.",!1,"neutral")
B.dhx=w([B.bK6,B.bK8,B.bK5,B.bKh,B.an_],x.r)
B.hdO=new A.q(0,15.5,-3.6)
B.h9X=new A.q(0,20,-3.6)
B.hhd=new A.q(0,22.5,-2)
B.h7k=new A.q(0,22.5,1.1999999999999997)
B.ab8=new A.q(0,21.1,1.6)
B.dhD=w([B.hdO,B.h9X,B.hhd,B.h7k,B.ab8],x.o)
B.dig=w([],x.bm)
B.Ii=w([],x.F)
B.dif=w([],x.dI)
B.zy=w([],x.E)
B.dih=w([],x.T)
B.Dc=w([],x.z)
B.aAH=w([],x.e3)
B.wH=w([],x.a)
B.aAG=w([],x.J)
B.nC=w([],x.o)
B.aAJ=w([],x.h)
B.aAI=w([],x.f)
B.eFo=new C.z(-1.6,3.5)
B.eEX=new C.z(1.6,3.5)
B.eGX=new C.z(-1.6,-3.5)
B.eDD=new C.z(1.6,-3.5)
B.div=w([B.eFo,B.eEX,B.eGX,B.eDD],x.f)
B.diC=w([y.O,"Look at the face: two slanted slots at the top (X and Y, hot) and one straight slot at the bottom (W, neutral), and no ground hole. That is a NEMA 10-50, the old 3-wire range outlet.",y.r,y.E,y.k,y.b,y.n],x.s)
B.diE=w([y.O,y.x,"Look at the face: a straight slot at the top (W, neutral), two straight slots at the sides (X and Y, hot) and a round hole at the bottom (G, ground). That is a NEMA 14-50, the 4-wire range outlet. It takes 6 gauge wire and a 50 amp double breaker.",y.R,y.r,y.E,y.k,y.b,y.n],x.s)
B.aAQ=w([!1,!1,!1,!1],x.u)
B.egr={in1:0,in2:1}
B.aRe=new C.dw(B.egr,2,x.M)
B.bK0=new A.fm(23,"IN screw (top left)",B.aRe,y.g,!1,"hot")
B.bKs=new A.fm(21,"IN screw (top right)",B.aRe,y.g,!1,"hot")
B.egQ={out1:0,out2:1}
B.aRk=new C.dw(B.egQ,2,x.M)
B.bKj=new A.fm(24,"OUT screw (bottom left)",B.aRk,y.d,!1,"hot")
B.bKl=new A.fm(22,"OUT screw (bottom right)",B.aRk,y.d,!1,"hot")
B.dj_=w([B.un,B.bK0,B.bKs,B.bKj,B.bKl],x.r)
B.dj9=w(["city","billboards","edges","houses","hospital","traffic"],x.s)
B.djl=w(["Look at the pieces: the tailpiece, the P-trap and the trap arm. Pick the tailpiece first and tap its glowing outline under the sink.","Pick the P-trap (the U-shaped bend) and tap its glowing outline. It joins the tailpiece.","Pick the trap arm and tap its outline. It joins the trap to the wall drain.","Slide each slip nut up to its joint and hand tighten it: tap the nuts.","Run the water and look for leaks. The U-bend keeps a plug of water that blocks sewer gas."],x.s)
B.fLA=new C.y("\u2728",null,D.a9N,null,null,null,null,null,null,null,null,null)
B.fW5=new C.y("Nobody needs help right now.",null,D.fy,null,D.K,null,null,null,null,null,null,null)
B.fvu=new C.F(!0,D.aR,null,null,null,null,13,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fNY=new C.y("Everybody's wiring and plumbing works. Keep an eye on food and health: things break when you least expect it.",null,B.fvu,null,D.K,null,null,null,null,null,null,null)
B.djL=w([B.fLA,D.Q,B.fW5,D.au,B.fNY],x.p)
B.djS=w(["road","roundabout","roadturn","roadtee","roadcross","house2","bighouse","billboard","tower","hq","store","gasstation","dmv","ubstation","townsign","cornersign","adboard","shop","hospital","firestation","school","car","firetruck","ambulance","dog","cat","cow","sheep","chicken","horse","tree","pine","bush","flowers","fence","lamppost","bench","pond","swing","shed","doghouse"],x.s)
B.ePi=new C.z(-1150,80)
B.ewk=new C.z(1150,80)
B.ePh=new C.z(-1150,1990)
B.ewj=new C.z(1150,1990)
B.dk0=w([B.ePi,B.ewk,B.ePh,B.ewj],x.f)
B.f74=new A.rR("pills","\ud83e\ude79","Pain pills","Cures a headache or a cold: you walk normally again",8,0,0,0,!0)
B.f73=new A.rR("bread","\ud83c\udf5e","Food for the town","5 portions for the people who live here",10,0,0,0,!1)
B.f72=new A.rR("medicine","\ud83d\udc8a","Medicine","3 doses for the sick",12,0,0,0,!1)
B.dk4=w([B.f74,B.f73,B.f72],x.K)
B.dk7=w([D.ax,D.bt,D.bf],x.O)
B.he6=new A.q(125,292,-121.5)
B.hh3=new A.q(-125,292,-121.5)
B.h1g=new A.q(-125,208,-121.5)
B.hdK=new A.q(125,208,-121.5)
B.dkb=w([B.he6,B.hh3,B.h1g,B.hdK],x.o)
B.h2k=new A.q(11.4,4.6,-6)
B.hai=new A.q(11.4,5,-7.85)
B.h5S=new A.q(2.6,5,-7.85)
B.h6v=new A.q(2.6,3.4,-7.85)
B.dkd=w([B.h2k,B.hai,B.h5S,B.h6v],x.o)
B.dkh=w(["hospital","shop","school"],x.s)
B.dki=w(["hot","cold"],x.s)
B.dkl=w([D.ax,D.bf,D.aA,D.f6,D.bS],x.O)
B.hjG=new A.iP("black","Black \xb7 hot",B.rr,D.c,"hot")
B.hjA=new A.iP("white","White \xb7 neutral",B.mx,D.av,"neutral")
B.RQ=w([B.hjG,B.hjA,B.r3],x.d)
B.eBS=new C.z(-3.5,4)
B.eIW=new C.z(3.5,4)
B.eE5=new C.z(-3.5,-4)
B.evJ=new C.z(3.5,-4)
B.dkM=w([B.eBS,B.eIW,B.eE5,B.evJ],x.f)
B.dkR=w(["Ada","Ben","Chidi","Dina","Efe","Farah","Gus","Halima","Ivo","Jamal","Kemi","Lola"],x.s)
B.eU1=new C.z(-2.4,5)
B.eKn=new C.z(2.4,5)
B.eHy=new C.z(-2.4,-5)
B.eGe=new C.z(2.4,-5)
B.dkS=w([B.eU1,B.eKn,B.eHy,B.eGe],x.f)
B.dlk=w([y.O,"Break off the little brass tab between the two brass screws, so the two halves are separate.",y.R,"Fasten the white neutral to a SILVER screw (the silver tab stays joined).","Fasten the always-hot black wire to the bottom BRASS screw.","Fasten the switched hot (red, from the wall switch) to the top BRASS screw.",y.b,y.n],x.s)
B.dlv=w([y.O,y.x,"Look at the face: an L-shaped slot (W, neutral), two straight slots at the sides (X and Y, hot) and a round hole (G, ground). That is a NEMA 14-30, the 4-wire dryer outlet. It takes 10 gauge wire and a 30 amp double breaker.",y.R,y.r,y.E,y.k,y.b,y.n],x.s)
B.bKf=new A.fm(25,"Green screw G: GROUND",B.Ae,y.H,!1,"ground")
B.aB3=w([B.bKf,B.Ob,B.amY,B.an6],x.r)
B.eYj=new C.b7(-6,-4,D.c_)
B.eWK=new C.b7(5,-5,D.bt)
B.eYh=new C.b7(0,1,D.ax)
B.eYQ=new C.b7(-5,5,D.bq)
B.eVT=new C.b7(6,4,D.c)
B.dlF=w([B.eYj,B.eWK,B.eYh,B.eYQ,B.eVT],x.dV)
B.dm8=w([Y.qQ,S.lp],x.f)
B.dmc=w(["split","v240four","v240three","v240only","isolated"],x.s)
B.egd={feed:0}
B.f67=new C.dw(B.egd,1,x.M)
B.bK4=new A.fm(21,"FEED screw (joined tab)",B.f67,"The one feed wire goes on the side where the brass screws are joined by a tab: it powers both switches.",!1,"hot")
B.egD={loadA:0,loadB:1}
B.aRj=new C.dw(B.egD,2,x.M)
B.bKw=new A.fm(22,"Switch 1 screw \u2192 light 1",B.aRj,y.q,!1,"hot")
B.bKB=new A.fm(24,"Switch 2 screw \u2192 light 2",B.aRj,y.q,!1,"hot")
B.dmp=w([B.un,B.bK4,B.bKw,B.bKB],x.r)
B.eOL=new C.z("Slab","First the concrete slab (the foundation) is poured and left to cure. Every wall sits on it.")
B.eRL=new C.z("Framing","The carpenters build the wall frames from 2x4 studs, spaced 16 inches apart, with plates on the top and bottom.")
B.eFY=new C.z("Plumbing rough-in","The plumber runs the hot (red) and cold (blue) water lines and the white drain pipes inside the walls and floor before anything is closed up.")
B.eMU=new C.z("Electrical rough-in","The electrician runs the yellow and white cables from the breaker panel to every box, and fixes the boxes to the studs.")
B.eO_=new C.z("Drywall","Drywall covers the frame. Here it is see-through so you can still look at the pipes and wires behind it.")
B.eGp=new C.z("Fixtures","Last come the outlets, switches, light, sink, toilet and water heater. This is where most repairs happen.")
B.eHJ=new C.z("Roof","The roof goes on to keep everything dry. It is see-through here so you can keep looking inside.")
B.dms=w([B.eOL,B.eRL,B.eFY,B.eMU,B.eO_,B.eGp,B.eHJ],x.L)
B.dBT=new A.ia(-100,100,24,90)
B.dBY=new A.ia(-134,-110,100,190)
B.dBI=new A.ia(110,134,100,190)
B.dmw=w([B.dBT,B.dBY,B.dBI],x.T)
B.aYI=new A.iP("hot","Black \xb7 hot",B.rr,D.c,"hot")
B.dmC=w([B.r3,B.Ey,B.aYI],x.d)
B.ePo=new C.z(-17,-9)
B.ewt=new C.z(17,-9)
B.ePn=new C.z(-17,9)
B.ews=new C.z(17,9)
B.dn8=w([B.ePo,B.ewt,B.ePn,B.ews],x.f)
B.dne=w([-100,0,100],x.n)
B.dnf=w([-110,-80,80,110],x.n)
B.a5c=w([-14,14],x.n)
B.dnh=w([-150,150],x.n)
B.dni=w([-178,178],x.n)
B.dnk=w([-18,18],x.n)
B.aBb=w([-20,0,20],x.n)
B.dnm=w([-21,21],x.n)
B.a5e=w([-26,26],x.n)
B.dnn=w([-27,27],x.n)
B.f75=new A.rR("can","\ud83d\udee2","Gas can","Half a tank of gas",8,0,0.5,0,!1)
B.aRy=new A.rR("tank","\u26fd","Fill the tank","A full tank",12,0,1,0,!1)
B.dno=w([B.f75,B.aRy],x.K)
B.dnq=w([-30,-10,10,30],x.n)
B.dnr=w([-32,32],x.n)
B.dns=w([-32,-8,34],x.n)
B.aBc=w([-34,34],x.n)
B.dnt=w([-3,3],x.n)
B.dnu=w([-47,47],x.n)
B.dnv=w([-48,48],x.n)
B.dnw=w([-52,52],x.n)
B.aBe=w([-55,55],x.n)
B.dny=w([-600,0,600],x.n)
B.dnz=w([-600,600],x.n)
B.aBf=w([-62,62],x.n)
B.dnA=w([-6,6],x.n)
B.dnC=w([-70,70],x.n)
B.oC=w([-72,-24,24],x.t)
B.dnE=w([-75,75],x.n)
B.dnF=w(["Look under the sink. The wall has two shut-off valves: hot on the LEFT (red handle) and cold on the RIGHT (blue handle).","Pick the red hot hose. Tap the left shut-off valve, then the left faucet inlet.","Pick the blue cold hose. Tap the right shut-off valve, then the right faucet inlet.","Turn each valve handle (tap it) to let the water in. Check every connection for drips."],x.s)
B.aBg=w([-7,7],x.n)
B.aBh=w([-80,80],x.n)
B.dnH=w([-900,-300,300,900],x.n)
B.dnI=w([-90,0,90],x.n)
B.dnJ=w([-90,-52,52,90],x.n)
B.aBk=w([-9,9],x.n)
B.dnV=w(["switch2p","switch3","switch4","switchsmart","switchcombo"],x.s)
B.do2=w(["medicine","food"],x.s)
B.dof=w([y.O,y.x,y.R,"The first traveler from the FIRST three-way goes on a top screw (IN).","The second traveler from the FIRST three-way goes on the other top screw (IN).","The first traveler to the SECOND three-way goes on a bottom screw (OUT).","The second traveler to the SECOND three-way goes on the other bottom screw (OUT).",y.b,y.n],x.s)
B.doO=w([D.d0,D.aA],x.O)
B.h60=new A.q(8.2,5,-7.85)
B.hbN=new A.q(8.2,1.2,-7.85)
B.he2=new A.q(8.2,1,-7.4)
B.dpq=w([B.h60,B.hbN,B.he2],x.o)
B.hjt=new A.iP("common","Black \xb7 COMMON (power in or to the light)",B.rr,D.c,"hot")
B.hjr=new A.iP("trav1","Red \xb7 traveler 1",B.vL,D.c,"hot")
B.hjD=new A.iP("trav2","White taped black \xb7 traveler 2",B.mx,D.av,"hot")
B.dpr=w([B.r3,B.hjt,B.hjr,B.hjD],x.d)
B.a5n=w(["rug","road","roundabout","roadturn","roadtee","roadcross","pond","flowers"],x.s)
B.dpE=w(["human","soldier","michelle","xbot","human"],x.s)
B.ePc=new C.z(-1050,"hospital")
B.ePN=new C.z(-630,"store")
B.ePF=new C.z(-420,"tower")
B.evY=new C.z(0,"tower")
B.ey8=new C.z(420,"tower")
B.eAf=new C.z(630,"store")
B.ewc=new C.z(1050,"hospital")
B.dpI=w([B.ePc,B.aQ9,B.ePN,B.ePF,B.aQ8,B.evY,B.aPX,B.ey8,B.eAf,B.aPZ,B.ewc],x.d6)
B.et4=new A.Fg(61,"Hot shut-off valve (left)",B.a8X,"Hot is always on the LEFT. The red hose goes on the left valve.")
B.eg3={cold:0}
B.aRu=new C.dw(B.eg3,1,x.M)
B.et5=new A.Fg(62,"Cold shut-off valve (right)",B.aRu,"Cold is always on the RIGHT. The blue hose goes on the right valve.")
B.et2=new A.Fg(63,"Hot faucet inlet (left)",B.a8X,"The left faucet inlet takes the hot (red) hose.")
B.et3=new A.Fg(64,"Cold faucet inlet (right)",B.aRu,"The right faucet inlet takes the cold (blue) hose.")
B.RX=w([B.et4,B.et5,B.et2,B.et3],C.at("O<Fg>"))
B.bKA=new A.fm(21,"Brass screw X: HOT",B.E7,y.m,!1,"hot")
B.bK3=new A.fm(22,"Brass screw Y: HOT",B.E7,y.m,!1,"hot")
B.aBA=w([B.Ob,B.bKA,B.bK3],x.r)
B.a5p=w([-72,-48,-24,0,24],x.t)
B.aBG=w(["1 Rough-in","2 Drywall","3 Devices"],x.s)
B.dqR=w([y.O,y.x,"Look at the terminal block. There is a metal GROUND STRAP from the middle terminal to the frame of the appliance. On a 3-wire cord it stays on: the neutral also grounds the frame.","Fasten the white neutral to the MIDDLE terminal, under the strap.",y.A,y.c,y.b,y.n],x.s)
B.dCb=new A.ia(-90,10,130,160)
B.dC4=new A.ia(-50,50,70,100)
B.dBZ=new A.ia(-134,-110,20,70)
B.drk=w([B.dCb,B.dC4,B.dBZ],x.T)
B.RZ=w(["road","roadturn","roadtee","roadcross"],x.s)
B.ME=new C.u(1,0.1843137254901961,0.6352941176470588,0.30980392156862746,D.q)
B.hjN=new A.iP("ground","Green \xb7 ground (to the frame)",B.ME,D.c,"ground")
B.dru=w([B.hjN,B.aYG,B.aYJ,B.aYH],x.d)
B.bKd=new A.fm(21,"Brass screw (top): HOT side",B.JO,y.N,!1,"hot")
B.bKo=new A.fm(22,"Brass screw (bottom): HOT side",B.JO,y.N,!1,"hot")
B.bKi=new A.fm(23,"Silver screw (top): NEUTRAL side",B.JN,y.Q,!1,"neutral")
B.bK7=new A.fm(24,"Silver screw (bottom): NEUTRAL side",B.JN,y.Q,!1,"neutral")
B.bKe=new A.fm(25,"Green screw: GROUND",B.Ae,"The green screw is for the bare copper or green GROUND wire.",!1,"ground")
B.drw=w([B.bKd,B.bKo,B.bKi,B.bK7,B.bKe],x.r)
B.drC=w([y.O,y.x,y.R,"Fasten the black hot to one HOT brass screw.","Fasten the red hot to the other HOT brass screw. There is no neutral and no silver screw in use.",y.b,y.n],x.s)
B.ePU=new C.z(-700,225)
B.ePk=new C.z(-120,160)
B.ewm=new C.z(120,160)
B.eAF=new C.z(720,225)
B.drS=w([B.ePU,B.ePk,B.ewm,B.eAF],x.f)
B.eWk=new C.b7("hot","Hot hose (red)",B.rm)
B.eX3=new C.b7("cold","Cold hose (blue)",B.nd)
B.drU=w([B.eWk,B.eX3],C.at("O<+(n,n,u)>"))
B.exI=new C.z(34,40)
B.hmd=new A.AA(B.exI,3.141592653589793,2.6,"Washing hands at the sink",!1,!1,!1,"")
B.drW=w([B.hmd],x.h)
B.ds0=w(["dryer","range","washer","","dryer","range"],x.s)
B.b1G=new A.Hq("NGMY navy",E.iU,E.M2,D.c,F.f8)
B.b1L=new A.Hq("Purple",D.o9,D.dH,D.c,D.bL)
B.b1J=new A.Hq("Green",D.h3,D.bP,D.c,D.m_)
B.b1H=new A.Hq("Sunset",D.el,D.aA,D.c,D.hY)
B.b1I=new A.Hq("Night",D.N,D.aK,D.b_,D.c_)
B.b1K=new A.Hq("Light",D.c,D.nZ,E.iU,D.dZ)
B.a5s=w([B.b1G,B.b1L,B.b1J,B.b1H,B.b1I,B.b1K],C.at("O<Hq>"))
B.abe=new A.q(15,2.6,0)
B.aBQ=w([B.aYn,B.abe],x.o)
B.a5t=w([B.r3,B.Ey,B.abl,B.abm],x.d)
B.b79=new C.ac(0,D.G,D.aS,D.I,24)
B.dse=w([B.b79],x.V)
B.dss=w(["tail","trap","arm"],x.s)
B.dsA=w([!0,!0,!0,!0],x.u)
B.dsT=w([B.r3,B.abl,B.abm],x.d)
B.bsS=new C.u(1,0.1843137254901961,0.30980392156862746,0.30980392156862746,D.q)
B.bqm=new C.u(1,0.3568627450980392,0.4196078431372549,0.5490196078431373,D.q)
B.dsU=w([B.XF,D.bs,B.bsS,B.bqm,D.bn,D.aK],x.O)
B.dt_=w([D.bE,D.bP,D.cf,D.cd,D.vS,D.cw],x.O)
B.dt1=w([-400,400,-900,900,-1400,1400],x.n)
B.dt2=w([D.ax,D.bt,D.bf,D.d3],x.O)
B.dtd=w([y.O,"Hold the fixture up to the ceiling box. It has three short wires: black, white and green.","Join the house ground wire to the fixture ground.","Join the house white wire to the fixture white wire with a wire nut.","Join the house black wire to the fixture black wire with a wire nut.","Push the wires into the box and fasten the fixture to the ceiling.",y.f],x.s)
B.dCa=new A.ia(-70,70,28,52)
B.dC1=new A.ia(-134,-96,100,170)
B.dBS=new A.ia(96,134,100,170)
B.dtl=w([B.dCa,B.dC1,B.dBS],x.T)
B.dtm=w([30,60,120,180,300],x.t)
B.ePr=new C.z(-210,60)
B.ex5=new C.z(210,90)
B.ePx=new C.z(-330,120)
B.exF=new C.z(330,60)
B.ePg=new C.z(-110,330)
B.ewi=new C.z(110,330)
B.ePL=new C.z(-560,640)
B.ezW=new C.z(560,640)
B.ePD=new C.z(-420,1100)
B.ey6=new C.z(420,1100)
B.dtv=w([B.ePr,B.ex5,B.ePx,B.exF,B.ePg,B.ewi,B.ePL,B.ezW,B.ePD,B.ey6],x.f)
B.c2q=new A.jS("Breaker off, then test","Before you touch any wire, switch its breaker OFF, then check with a voltage tester that the wire is dead. A switch on the wall is not enough.")
B.c2d=new A.jS("Lock out, tag out","On a real job you put a lock or a note on the panel so nobody switches the power back on while you work.")
B.c2x=new A.jS("Water and power","Water carries electricity. Near sinks, tubs and outdoors the outlets must be GFCI, and wet hands never touch wires.")
B.c2i=new A.jS("Eyes, ears, lungs","Safety glasses for drilling and cutting, ear protection for loud tools, and a mask when you sand drywall dust or cut tile.")
B.c2w=new A.jS("Shut the water off","Before you cut or loosen a pipe, close the main water valve and open a faucet to drain the line.")
B.dlV=w([B.c2q,B.c2d,B.c2x,B.c2i,B.c2w],x.Z)
B.c2J=new A.N4("Safety first","\ud83e\uddba",D.c0,B.dlV)
B.c2y=new A.jS("Wire colours","Black is hot (it carries the power), white is neutral (the way back), bare copper or green is ground (the safety path). Red is a second hot, often used for a switched line.")
B.c2F=new A.jS("Screw colours","On an outlet the brass screw takes the hot wire, the silver screw takes the neutral and the green screw takes the ground.")
B.c2s=new A.jS("Wire size","14 gauge wire is for 15 amp circuits (lights and outlets). 12 gauge is for 20 amp circuits (kitchens). A thinner wire than the breaker allows can overheat and start a fire.")
B.c2m=new A.jS("Breakers","A breaker is a safety switch. It trips when a circuit carries too much current, so the wires never get hot enough to burn.")
B.c2A=new A.jS("Wire nuts","Strip about 3/4 inch, twist the bare ends together clockwise, and screw on the nut until no bare copper shows. Give each wire a gentle tug.")
B.c2G=new A.jS("Switches","A switch cuts the hot wire only. The neutral goes straight through to the light.")
B.c2H=new A.jS("GFCI","A GFCI outlet watches the current going out and coming back. If a little leaks (through water or a person) it cuts the power in a fraction of a second.")
B.c2f=new A.jS("Ceiling fans","A fan shakes and is heavy. It needs a box that says fan rated, fixed to the joist, not a plain light box.")
B.c2h=new A.jS("Heights","Outlets sit about 16 inches from the floor. Switches sit about 48 inches up, where your hand falls.")
B.de1=w([B.c2y,B.c2F,B.c2s,B.c2m,B.c2A,B.c2G,B.c2H,B.c2f,B.c2h],x.Z)
B.c2M=new A.N4("Wiring basics","\u26a1",D.bt,B.de1)
B.c2e=new A.jS("Hot left, cold right","On a faucet, hot is on the left and cold on the right. Hot lines are marked red and cold lines blue.")
B.c2r=new A.jS("The P-trap","The curved pipe under a sink always holds a little water. That water seal stops sewer gas coming up the drain.")
B.c2C=new A.jS("Shut-off valves","Every sink and toilet has its own small valve, so you can stop the water to one fixture without turning off the whole house.")
B.c2k=new A.jS("Slip nuts","Drain joints are sealed by a washer and a slip nut. Tighten by hand and a quarter turn: too much force cracks plastic.")
B.c2j=new A.jS("Wax ring","A toilet sits on a wax ring that seals it to the floor drain. A toilet is lowered straight down once, and cannot be slid around.")
B.c2z=new A.jS("Drain slope","Drains fall about 1/4 inch per foot so water and waste keep moving. Too flat and it clogs, too steep and the water leaves the solids behind.")
B.c2E=new A.jS("Order of work","Plumbing goes from the top down on the drain (tailpiece, trap, arm) and from the wall out on the supply (valve, hose, fixture).")
B.ckx=w([B.c2e,B.c2r,B.c2C,B.c2k,B.c2j,B.c2z,B.c2E],x.Z)
B.c2K=new A.N4("Plumbing basics","\ud83d\udeb0",D.cp,B.ckx)
B.c2g=new A.jS("Studs","Studs are the vertical 2x4 posts inside a wall, 16 inches apart from centre to centre. Everything is fixed to them.")
B.c2u=new A.jS("Drilling studs","Holes for cable go through the middle of the stud, so a nail or screw cannot reach the wire.")
B.c2l=new A.jS("Drywall","A sheet is 4 feet wide, so its edges land on studs 48 inches apart. Screws go into studs only, just under the paper.")
B.c2o=new A.jS("Taping and mud","Seams get paper tape and three thin coats of joint compound, sanded smooth between coats, then primer and paint.")
B.c2D=new A.jS("Order of a build","Frame, run the pipes and wires (rough-in), inspect, hang drywall, finish it, paint, then fit the fixtures and devices.")
B.cZs=w([B.c2g,B.c2u,B.c2l,B.c2o,B.c2D],x.Z)
B.c2I=new A.N4("Framing and walls","\ud83c\udfe0",D.dZ,B.cZs)
B.c2p=new A.jS("Voltage tester","A pen that glows or beeps near live wires. Test it on a known live outlet first, so you know it works.")
B.c2v=new A.jS("Wire strippers","Strip the plastic off without nicking the copper. A nick weakens the wire.")
B.c2B=new A.jS("Adjustable wrench","For nuts on valves and hoses. Hold the fitting steady with a second wrench so you do not twist the pipe.")
B.c2t=new A.jS("Drill and screw gun","A drill makes holes through studs. A screw gun sets drywall screws to the right depth.")
B.c2n=new A.jS("Level and tape measure","Measure twice, cut once. A level makes sure outlets, shelves and pipes are straight.")
B.duE=w([B.c2p,B.c2v,B.c2B,B.c2t,B.c2n],x.Z)
B.c2L=new A.N4("Tools","\ud83e\uddf0",D.bv,B.duE)
B.due=w([B.c2J,B.c2M,B.c2K,B.c2I,B.c2L],C.at("O<N4>"))
B.duh=w([y.O,"There is no separate ground wire here: the neutral also grounds the frame of the old appliance. This is only allowed in old installations.",y.r,y.E,y.k,y.b,y.n],x.s)
B.bgH=new C.u(1,0.48627450980392156,0.22745098039215686,0.22745098039215686,D.q)
B.bow=new C.u(1,0.24705882352941178,0.4196078431372549,0.30980392156862746,D.q)
B.bmO=new C.u(1,0.4196078431372549,0.30980392156862746,0.48627450980392156,D.q)
B.bjG=new C.u(1,0.47843137254901963,0.41568627450980394,0.23137254901960785,D.q)
B.dul=w([B.XF,B.bgH,B.bow,B.bmO,B.bjG],x.O)
B.dux=w(["Cream","Sky","Blush","Mint","Butter","Periwinkle","White","Slate"],x.s)
B.hjv=new A.iP("in1","Red \xb7 traveler in 1 (from the first 3-way)",B.vL,D.c,"hot")
B.hjB=new A.iP("in2","White taped red \xb7 traveler in 2",B.mx,D.av,"hot")
B.aeJ=new C.u(1,0.6901960784313725,0.22745098039215686,0.16862745098039217,D.q)
B.hjs=new A.iP("out1","Red \xb7 traveler out 1 (to the second 3-way)",B.aeJ,D.c,"hot")
B.hjF=new A.iP("out2","White taped red \xb7 traveler out 2",D.bO,D.av,"hot")
B.duA=w([B.r3,B.hjv,B.hjB,B.hjs,B.hjF],x.d)
B.ePX=new C.z(-760,330)
B.eAG=new C.z(760,330)
B.ePH=new C.z(-450,1080)
B.ezl=new C.z(450,1080)
B.duD=w([B.ePX,B.eAG,B.ePH,B.ezl],x.f)
B.duL=w([0.72,-0.72],x.n)
B.hjy=new A.iP("isoground","Green with yellow stripe \xb7 isolated ground",B.ME,D.c,"ground")
B.duU=w([B.Ey,B.aYI,B.hjy],x.d)
B.dv5=w([B.Ob,B.an2,B.amZ],x.r)
B.dvg=w(["inspect","hand","screwdriver","pliers","wrench","crimper","plunger","flapper","newoutlet","patch"],x.s)
B.hvm=new A.pG(0,0,70,26)
B.hvy=new A.pG(1,-100,110,24)
B.hvA=new A.pG(2,105,100,26)
B.dvO=w([B.hvm,B.hvy,B.hvA],x.X)
B.hjz=new A.iP("lineA","Black \xb7 hot leg 1 (from the panel)",B.rr,D.c,"hot")
B.hjE=new A.iP("lineB","Red \xb7 hot leg 2 (from the panel)",B.vL,D.c,"hot")
B.hjL=new A.iP("loadA","Black \xb7 hot leg 1 (to the heater)",B.Mq,D.c,"hot")
B.hjx=new A.iP("loadB","Red \xb7 hot leg 2 (to the heater)",B.aeJ,D.c,"hot")
B.dw9=w([B.r3,B.hjz,B.hjE,B.hjL,B.hjx],x.d)
B.dwf=w(["Maya","Kofi","Amara","Tunde","Zawadi"],x.s)
B.egg={flange:0,wax:1,toilet:2,bolts:3,valve:4,hosehot:5,hosecold:6,faucet:7,tail:8,trap:9,arm:10}
B.aHi=new C.bu(B.egg,["Flange","Wax ring","Toilet","Bolts","Shut-off valve","Hot hose","Cold hose","Faucet","Tailpiece","P-trap","Trap arm"],x.l)
B.dyC=new C.dp([25,"ground",23,"lineA",21,"lineB",24,"loadA",22,"loadB"],x.v)
B.dyD=new C.dp([25,"ground",23,"in1",21,"in2",24,"out1",22,"out2"],x.v)
B.efK={xbot:0,michelle:1,soldier:2}
B.Sl=new C.bu(B.efK,["assets/avatars/Xbot.glb","assets/avatars/Michelle.glb","assets/avatars/Soldier.glb"],x.l)
B.eeT={highway:0,tower:1,neon:2,roof:3,screen:4,gate:5}
B.aPV=new C.z(0,!1)
B.ewO=new C.z(1,!1)
B.exV=new C.z(3,!1)
B.exr=new C.z(2,!0)
B.ewQ=new C.z(1,!0)
B.exW=new C.z(3,!0)
B.dyO=new C.bu(B.eeT,[B.aPV,B.ewO,B.exV,B.exr,B.ewQ,B.exW],C.at("bu<n,+(G,R)>"))
B.a60=new C.dp([25,"ground",23,"neutral",21,"hot1",22,"hot2"],x.v)
B.dyT=new C.dp([25,"ground",23,"common",21,"trav1",22,"trav2"],x.v)
B.dyU=new C.dp([25,"ground",23,"neutral",21,"line",22,"load"],x.v)
B.dyV=new C.dp([25,"ground",23,"neutral",21,"switched",22,"always"],x.v)
B.dz_=new C.dp([25,"ground",21,"neutral",23,"hot1",22,"hot2"],x.v)
B.dz8=new C.dp([25,"ground",21,"hot1",22,"hot2"],x.v)
B.dzp=new C.dp([21,"neutral",23,"hot1",22,"hot2"],x.v)
B.efG={bed:0,nightstand:1,wardrobe:2,desk:3,rug:4,sofa:5,armchair:6,coffee:7,tvstand:8,dining:9,chair:10,plant:11,lamp:12,console:13,shelf:14,tree:15,pine:16,bush:17,flowers:18,fence:19,lamppost:20,bench:21,car:22,road:23,roundabout:24,roadturn:25,roadtee:26,roadcross:27,house2:28,bighouse:29,pole:30,crate:31,billboard:32,tower:33,hq:34,store:35,gasstation:36,dmv:37,ubstation:38,townsign:39,cornersign:40,adboard:41,shop:42,hospital:43,firestation:44,school:45,firetruck:46,ambulance:47,dog:48,cat:49,cow:50,sheep:51,chicken:52,horse:53,pond:54,swing:55,shed:56,doghouse:57}
B.bJ8=new A.fp("Bed","\ud83d\udecf\ufe0f",48,64)
B.bJk=new A.fp("Night table","\ud83e\ude91",13,13)
B.bIS=new A.fp("Wardrobe","\ud83d\udeaa",35,16)
B.bJ3=new A.fp("Desk","\ud83d\udda5\ufe0f",38,19)
B.bIT=new A.fp("Rug","\ud83d\udfe5",56,40)
B.bIO=new A.fp("Sofa","\ud83d\udecb\ufe0f",64,26)
B.bJc=new A.fp("Armchair","\ud83d\udcba",24,24)
B.bJr=new A.fp("Coffee table","\u2615",32,19)
B.bIQ=new A.fp("Media cabinet","\ud83d\uddc4\ufe0f",45,14)
B.bJp=new A.fp("Dining table","\ud83c\udf7d\ufe0f",45,29)
B.bJj=new A.fp("Chair","\ud83e\ude91",14,14)
B.bJq=new A.fp("Plant","\ud83e\udeb4",14,14)
B.bJl=new A.fp("Floor lamp","\ud83d\udca1",10,10)
B.bJ9=new A.fp("Console table","\ud83d\uddc4\ufe0f",35,11)
B.bJi=new A.fp("Bookshelf","\ud83d\udcda",29,10)
B.bJv=new A.fp("Tree","\ud83c\udf33",36,36)
B.bJ6=new A.fp("Pine tree","\ud83c\udf32",30,30)
B.bIN=new A.fp("Bush","\ud83c\udf3f",18,18)
B.bJf=new A.fp("Flowers","\ud83c\udf37",22,22)
B.bIG=new A.fp("Fence","\ud83d\udea7",64,6)
B.bIU=new A.fp("Street lamp","\ud83c\udfee",8,8)
B.bJb=new A.fp("Bench","\ud83e\ude91",44,16)
B.bIH=new A.fp("Car","\ud83d\ude97",84,40)
B.bJ2=new A.fp("Road","\ud83d\udee3\ufe0f",40,40)
B.bJw=new A.fp("Roundabout","\ud83d\udd04",80,80)
B.bIM=new A.fp("Road corner","\u21aa\ufe0f",40,40)
B.bJy=new A.fp("Road T-junction","\u22a4",40,40)
B.bJ4=new A.fp("Crossroads","\u271a",40,40)
B.bIP=new A.fp("House","\ud83c\udfe0",108,90)
B.bJ7=new A.fp("Big house","\ud83c\udfe2",158,120)
B.bII=new A.fp("Electric pole","\ud83d\udd0c",10,10)
B.bJ1=new A.fp("Crate","\ud83d\udce6",28,28)
B.bJu=new A.fp("Billboard","\ud83e\udea7",72,10)
B.bIL=new A.fp("Office tower","\ud83c\udfe2",100,70)
B.bIX=new A.fp("NGMY company","\ud83c\udfdb\ufe0f",170,90)
B.bIW=new A.fp("NGMY store","\ud83c\udfec",130,80)
B.bJx=new A.fp("NGMY gas station","\u26fd",150,90)
B.bJh=new A.fp("NGMY licence office","\ud83e\udeaa",130,80)
B.bIZ=new A.fp("NGMY Uber","\ud83d\ude96",120,60)
B.bIJ=new A.fp("NGMY Town sign","\ud83e\udea7",380,14)
B.bJd=new A.fp("NGMY Town billboard","\ud83e\udea7",150,10)
B.bJ0=new A.fp("NGMY ad billboard","\ud83d\udcfa",330,14)
B.bJ5=new A.fp("Shop","\ud83c\udfea",126,90)
B.bIY=new A.fp("Hospital","\ud83c\udfe5",165,105)
B.bIF=new A.fp("Fire station","\ud83d\ude92",135,96)
B.bJg=new A.fp("School","\ud83c\udfeb",186,105)
B.bJo=new A.fp("Fire truck","\ud83d\ude92",96,40)
B.bJa=new A.fp("Ambulance","\ud83d\ude91",84,40)
B.bIV=new A.fp("Dog","\ud83d\udc15",22,10)
B.bJ_=new A.fp("Cat","\ud83d\udc08",16,8)
B.bJm=new A.fp("Cow","\ud83d\udc04",38,16)
B.bIR=new A.fp("Sheep","\ud83d\udc11",26,14)
B.bJn=new A.fp("Chicken","\ud83d\udc14",12,8)
B.bIK=new A.fp("Horse","\ud83d\udc0e",46,16)
B.bJs=new A.fp("Pond","\ud83d\udca7",80,56)
B.bJe=new A.fp("Swing set","\ud83c\udfa0",56,40)
B.bJt=new A.fp("Shed","\ud83d\uded6",50,42)
B.bJz=new A.fp("Dog house","\ud83d\udc15",24,22)
B.hE=new C.bu(B.efG,[B.bJ8,B.bJk,B.bIS,B.bJ3,B.bIT,B.bIO,B.bJc,B.bJr,B.bIQ,B.bJp,B.bJj,B.bJq,B.bJl,B.bJ9,B.bJi,B.bJv,B.bJ6,B.bIN,B.bJf,B.bIG,B.bIU,B.bJb,B.bIH,B.bJ2,B.bJw,B.bIM,B.bJy,B.bJ4,B.bIP,B.bJ7,B.bII,B.bJ1,B.bJu,B.bIL,B.bIX,B.bIW,B.bJx,B.bJh,B.bIZ,B.bIJ,B.bJd,B.bJ0,B.bJ5,B.bIY,B.bIF,B.bJg,B.bJo,B.bJa,B.bIV,B.bJ_,B.bJm,B.bIR,B.bJn,B.bIK,B.bJs,B.bJe,B.bJt,B.bJz],C.at("bu<n,fp>"))
B.dA0=new C.dp([25,"ground",23,"neutral",21,"hot"],x.v)
B.dA1=new C.dp([25,"isoground",23,"neutral",21,"hot"],x.v)
B.ef1={outlet:0,switch:1,light:2,fan:3,gfci:4}
B.d9g=w(["Silver","Brass","Green"],x.s)
B.fgN=new A.vi("On a standard receptacle, which terminal does the hot wire go on?",B.d9g,1,"Brass is the hot side. Silver is neutral and green is the ground.")
B.cKI=w(["Yes, it works","No: reversed polarity leaves live parts that should be dead","Yes if there is a ground"],x.s)
B.fgL=new A.vi("The outlet works with hot and neutral swapped. Is it safe?",B.cKI,1,"Working is not the same as safe. Reversed polarity energizes the wrong parts.")
B.d2P=w(["Yes","No, never","Only in old houses"],x.s)
B.fgH=new A.vi("May the neutral be used as the equipment ground?",B.d2P,1,"The ground is a separate safety path. The neutral carries current in normal use.")
B.deC=w([B.fgN,B.fgL,B.fgH],x.J)
B.c7b=w(["The hot to the light","The neutral","The ground"],x.s)
B.fgO=new A.vi("A single-pole switch opens and closes which conductor?",B.c7b,0,"The switch breaks the hot conductor to the load.")
B.d0o=w(["Yes","No, never","If the wire is thick"],x.s)
B.fgP=new A.vi("May the ground wire be used to carry current to the light?",B.d0o,1,"The equipment ground is only for safety.")
B.d8d=w(["Yes","No: never assume it does","Only new houses"],x.s)
B.fgI=new A.vi("Does every switch box have a neutral?",B.d8d,1,"Many switch boxes have no neutral. Smart switches need to be chosen for that.")
B.dui=w([B.fgO,B.fgP,B.fgI],x.J)
B.dlI=w(["Yes","No: the wires, the ground and the support must be right","Only with a switch"],x.s)
B.fgM=new A.vi("Does a light that turns on prove the fixture is wired safely?",B.dlI,1,"A fixture can light up with an unsafe connection.")
B.dkK=w(["Its wires","A box or mount rated for its weight","Tape"],x.s)
B.fgQ=new A.vi("A fixture must hang from:",B.dkK,1,"The box carries the weight. The wires never do.")
B.d8D=w([B.fgM,B.fgQ],x.J)
B.d9G=w(["Any ceiling box","Rated for a fan","Plastic only"],x.s)
B.fgK=new A.vi("A ceiling fan needs a box that is:",B.d9G,1,"A fan shakes and is heavy. A plain light box can let it fall.")
B.doS=w(["Yes","No: support, ground and wiring must all be right","Yes if it is quiet"],x.s)
B.fgJ=new A.vi("The fan spins. Is the installation safe?",B.doS,1,"A spinning fan says nothing about the box, the ground or the connections.")
B.d8W=w([B.fgK,B.fgJ],x.J)
B.d4w=w(["LINE","LOAD","Either"],x.s)
B.fgG=new A.vi("On a GFCI, power from the breaker goes on:",B.d4w,0,"LINE is the supply. LOAD feeds outlets further down the line.")
B.cPq=w([B.fgG],x.J)
B.aHw=new C.bu(B.ef1,[B.deC,B.dui,B.d8D,B.d8W,B.cPq],C.at("bu<n,ai<vi>>"))
B.efF={house2:0,bighouse:1,shop:2,billboard:3,crate:4,car:5,tree:6,bench:7,tower:8,hq:9,store:10,gasstation:11,cornersign:12}
B.dA4=new C.bu(B.efF,[40,80,70,15,4,25,5,4,120,200,90,90,30],C.at("bu<n,G>"))
B.bHT=new A.uF("The living room has no power at all.","The living room breaker is sitting in the middle (orange). It has tripped. Flip it fully OFF and ON again, by hand.","hand","Breaker reset. The living room has power again.",72,0,"")
B.bI2=new A.uF("There is no hot water.","The water heater breaker has tripped (orange). Reset it by hand.","hand","Breaker reset. The water heater is heating again.",75,0,"")
B.bI_=new A.uF("Water is dripping under the kitchen sink.","The slip nut on the P-trap is loose and the joint drips. Tighten it with the wrench.","wrench","Slip nut tightened. The drip stopped.",87,0,"")
B.bHS=new A.uF("There is a wet spot on the wall behind the kitchen.","A crimped joint in the hot water line is leaking. A crimp joint is squeezed with a crimping tool, not tightened with a wrench.","crimper","The joint is crimped again and it does not leak.",96,0,"")
B.bHX=new A.uF("The outlet by the sofa does not work, but the lights do.","The tester finds power at the box but the outlet is dead: a screw on the outlet has come loose. Turn the breaker off first, then tighten the screws with the screwdriver.","screwdriver","You tightened the loose screw. The outlet works again.",81,72,"Turn the living room breaker OFF first.")
B.bHU=new A.uF("The living room light flickers.","A wire nut in the light box has worked loose. Turn the breaker off, then twist the wire nut tight with the pliers.","pliers","You twisted the wire nut tight. The light is steady.",83,72,"Turn the living room breaker OFF first.")
B.bHV=new A.uF("The kitchen outlet sparks and smells burnt.","The outlet has burnt. Turn the breaker off and replace it with a new outlet.","newoutlet","New outlet fitted. No more sparks.",84,73,"Turn the kitchen breaker OFF first.")
B.bI0=new A.uF("The kitchen outlets are dead.","The GFCI outlet has tripped. Press its RESET button by hand.","hand","You pressed RESET. The kitchen outlets work.",84,0,"")
B.bHW=new A.uF("The toilet keeps running.","The rubber flapper in the tank no longer seals, so water leaks into the bowl all the time. Replace the flapper.","flapper","New flapper fitted. The toilet stops running.",88,0,"")
B.bHZ=new A.uF("The kitchen faucet drips.","The faucet washer is worn. Tighten the packing nut with the wrench, then check.","wrench","The faucet is sealed. No more drips.",85,0,"")
B.bHY=new A.uF("There is a hole in the wall.","A hole in the drywall. Stick a drywall patch over it, then tape, mud, sand and paint it.","patch","Patch fitted. Now it only needs mud, sanding and paint.",95,0,"")
B.bI1=new A.uF("The kitchen sink drains very slowly.","The drain is clogged. Use the plunger.","plunger","The clog is gone. The sink drains fast.",94,0,"")
B.wL=new C.dp([B.a0D,B.bHT,B.a0E,B.bI2,B.O1,B.bI_,B.O2,B.bHS,B.amJ,B.bHX,B.a0H,B.bHU,B.a0I,B.bHV,B.a0J,B.bI0,B.a0K,B.bHW,B.a0L,B.bHZ,B.a0F,B.bHY,B.a0G,B.bI1],C.at("dp<rn,uF>"))
B.ehf={duo:0,line3:1,far3:2,skyline:3,lines6:4}
B.eFV=new C.z(D.a3d,0)
B.eTv=new C.z(A6.asi,1)
B.crJ=w([2,0,1],x.t)
B.eAI=new C.z(B.crJ,2)
B.c7f=w([0,1,2,3],x.t)
B.eSu=new C.z(B.c7f,0)
B.dmP=w([0,1,2,5,4,3],x.t)
B.eJ3=new C.z(B.dmP,1)
B.dAk=new C.bu(B.ehf,[B.eFV,B.eTv,B.eAI,B.eSu,B.eJ3],C.at("bu<n,+(ai<G>,G)>"))
B.egI={michelle:0}
B.dAl=new C.bu(B.egI,[0.55],x.gW)
B.Sq=new C.bu(D.hT,[],C.at("bu<G,cV>"))
B.ID=new C.bu(D.hT,[],C.at("bu<G,n>"))
B.a67=new C.dp([23,"neutral",21,"hot1",22,"hot2"],x.v)
B.dAC=new C.dp([25,"ground",21,"feed",22,"loadA",24,"loadB"],x.v)
B.ege={tail:0,trap:1,arm:2}
B.dAE=new C.bu(B.ege,["Tailpiece","P-trap","Trap arm"],x.l)
B.aKc={xbot:0,michelle:1,soldier:2,human:3}
B.aHK=new C.bu(B.aKc,["\ud83e\udd16 X Bot","\ud83d\udc83 Dancer","\ud83e\ude96 Soldier","\ud83d\ude42 Person"],x.l)
B.afj=new C.u(1,0.9137254901960784,0.9215686274509803,0.9372549019607843,D.q)
B.bm7=new C.u(1,0.8549019607843137,0.8666666666666667,0.8901960784313725,D.q)
B.Tv=new A.tO(B.afj,E.aeK,B.afj,B.bm7,"xbot",!1,0,1)
B.bo6=new C.u(1,0.0784313725490196,0.047058823529411764,0.03137254901960784,D.q)
B.beg=new C.u(1,0.9607843137254902,0.7725490196078432,0.09411764705882353,D.q)
B.erL=new A.tO(B.aiX,B.bo6,D.dn,B.beg,"michelle",!0,2,1)
B.bsY=new C.u(1,0.8509803921568627,0.6470588235294118,0.48627450980392156,D.q)
B.brW=new C.u(1,0.3568627450980392,0.4196078431372549,0.22745098039215686,D.q)
B.bgI=new C.u(1,0.5411764705882353,0.4823529411764706,0.3333333333333333,D.q)
B.Jr=new A.tO(B.bsY,D.Ms,B.brW,B.bgI,"soldier",!1,0,1.04)
B.a7V=new A.tO(B.aeO,B.Mj,B.aj6,B.LM,"human",!1,0,1)
B.aHL=new C.bu(B.aKc,[B.Tv,B.erL,B.Jr,B.a7V],C.at("bu<n,tO>"))
B.eh_={soldier:0}
B.dAX=new C.bu(B.eh_,[3.141592653589793],x.gW)
B.hdu=new A.q(0,0,-1.2)
B.edU=new A.cV("Electrical box","The box is ready. Pull a cable to it, then wire a device.",B.hdu,9)
B.dB_=new C.dp([3,B.edU],C.at("dp<G,cV>"))
B.aK5={inspect:0,hand:1,screwdriver:2,pliers:3,wrench:4,crimper:5,plunger:6,flapper:7,newoutlet:8,patch:9}
B.Ss=new C.bu(B.aK5,["Look and test","Hand","Screwdriver","Pliers","Wrench","Crimp tool","Plunger","New flapper","New outlet","Drywall patch"],x.l)
B.bN3=new C.a0(63072,"MaterialIcons",!1)
B.dB3=new C.bu(B.aK5,[D.fa,B.apC,A5.Hh,D.H7,D.ok,B.bN3,Ad.a2q,D.pm,B.OZ,W.us],C.at("bu<n,a0>"))
B.eeV={washerM:0,dryerM:1,rangeM:2}
B.eh9={washer:0}
B.f6e=new C.dw(B.eh9,1,x.M)
B.eg9={dryer4:0,dryer3:1}
B.f60=new C.dw(B.eg9,2,x.M)
B.egU={range4:0,range3:1}
B.f6x=new C.dw(B.egU,2,x.M)
B.dB4=new C.bu(B.eeV,[B.f6e,B.f60,B.f6x],C.at("bu<n,e0<n>>"))
B.dBK=new A.ia(18,50,0,20)
B.dBX=new A.ia(-126,126,-66,5)
B.dC3=new A.ia(-4,16,0,24)
B.dEz=new A.aoN(null)
B.aIL=new A.a7b(null)
B.dLk=new A.aq9(null)
B.dOD=new A.IW(!1,"city","",null)
B.aIV=new A.IW(!1,"","",null)
B.e9l=new A.Ok(!0,!0,null,!0,null)
B.hgN=new A.q(16,2.6,0)
B.edC=new A.cV("Wall drain","The pipe stub that comes out of the wall. The trap arm slides into it.",B.hgN,8)
B.h0w=new A.q(0,3,-6)
B.edD=new A.cV("Wall","The copper supply pipes come out of the wall here.",B.h0w,24)
B.hcO=new A.q(8.2,1,-7)
B.edE=new A.cV("Toilet","The tank fills from the cold supply on the wall. The bowl drains into the white pipe in the floor.",B.hcO,7)
B.h_9=new A.q(0,0,40)
B.edF=new A.cV("The room","A room to build from bare studs to finished, working electrics. The walls hold the cable, the boxes and the devices.",B.h_9,190)
B.h9w=new A.q(-2.4,11.5,-3.6)
B.edG=new A.cV("Hot faucet inlet","The threaded tail under the faucet where the hot supply hose screws on.",B.h9w,7)
B.h3J=new A.q(-3.6,4,-7.8)
B.edH=new A.cV("Light switch","Controls the ceiling light. Tap Open lesson to wire one.",B.h3J,4.5)
B.h6h=new A.q(0,-0.7,4.8)
B.edI=new A.cV("Ground strap","A metal strap from the middle (neutral) terminal to the frame of the appliance. On a 3-wire cord it stays: the neutral also grounds the frame. On a 4-wire cord you take it off, because the green wire grounds the frame.",B.h6h,7)
B.hbj=new A.q(0,0.5,2)
B.edJ=new A.cV("Voltage tester","A tester that glows when it touches live power.",B.hbj,6)
B.edK=new A.cV("Pipe joint","A crimped joint in the hot water line.",B.aXJ,4)
B.ha_=new A.q(0,-0.2,0.2)
B.edL=new A.cV("Cover plate","The plate covers the box and the edges of the drywall so nobody touches the wires.",B.ha_,8)
B.hfF=new A.q(-4.6,0.5,-3.4)
B.edM=new A.cV("Hot shut-off valve","The angle stop valve on the hot pipe. Turn the handle to stop the water to the faucet without shutting off the whole house. Hot is always on the left.",B.hfF,8)
B.VH=new A.q(0,-0.3,3.2)
B.edN=new A.cV("White wire nut: NEUTRAL","Twist the house white wire and the fixture white wire together under this cap.",B.VH,6)
B.hb4=new A.q(4.6,0.5,-3.4)
B.edO=new A.cV("Cold shut-off valve","The angle stop valve on the cold pipe. Cold is always on the right.",B.hb4,8)
B.h2Q=new A.q(2.4,11.5,-3.6)
B.edP=new A.cV("Cold faucet inlet","The threaded tail under the faucet where the cold supply hose screws on.",B.h2Q,7)
B.hhY=new A.q(0.8,-0.8,1.2)
B.edQ=new A.cV("Black wire to the light","This black wire carries power to the light once the switch is on. It goes on the other brass screw.",B.hhY,7)
B.h9r=new A.q(10.05,5.2,-7.5)
B.edR=new A.cV("Water heater breaker","A big circuit for the water heater. It is ON.",B.h9r,3.5)
B.aWD=new A.q(0,40,0)
B.edS=new A.cV("Back wall",y.o,B.aWD,140)
B.hcG=new A.q(3,3.8,-7.4)
B.edT=new A.cV("Kitchen faucet","Hot on the left, cold on the right. Tap Open lesson to connect the supply hoses.",B.hcG,4.5)
B.Ay=new A.q(0,6,0)
B.edV=new A.cV("Tailpiece","The straight pipe that hangs from the sink drain. Its bottom end is smooth so the slip nut can slide on and grip it.",B.Ay,10)
B.hfb=new A.q(-60,40,50)
B.edW=new A.cV("Left wall",y.o,B.hfb,140)
B.h4p=new A.q(3,1,0)
B.edX=new A.cV("P-trap","The U-shaped bend. It always keeps a little water inside, and that water plug blocks sewer gas from coming back up into the house.",B.h4p,11)
B.h_U=new A.q(0,20,5)
B.edY=new A.cV("The room","A bare room with the water supply stubs and the drain stub already in the wall and floor.",B.h_U,120)
B.h1e=new A.q(0,-8,0)
B.edZ=new A.cV("Cabinet","The cabinet under the sink where the drain is built.",B.h1e,22)
B.h_7=new A.q(0,0,150)
B.ee_=new A.cV("Lawn","The grass. Walls, floors and the sky stay as they are, but you can add things to the garden with the Furniture button.",B.h_7,400)
B.h0O=new A.q(0,4,-8)
B.ee0=new A.cV("Wall framing","2x4 studs 16 inches apart. Pipes and cables run through holes drilled in the middle of the studs, never along the edge where a nail could hit them.",B.h0O,18)
B.aXZ=new A.q(0,-0.2,5.1)
B.ee1=new A.cV("TEST and RESET buttons","Press TEST to make the GFCI trip. Press RESET to turn it back on. Test it once a month.",B.aXZ,5)
B.aWw=new A.q(0,11,0)
B.ee2=new A.cV("Sink","The sink bowl and the counter. The drain flange at the bottom is where the tailpiece starts.",B.aWw,16)
B.dX=new A.q(0,0,0)
B.ee3=new A.cV("Drywall","The wall surface. A hole is cut in it for the electrical box.",B.dX,22)
B.h5I=new A.q(60,40,50)
B.ee4=new A.cV("Right wall",y.o,B.h5I,140)
B.h_C=new A.q(0,14,-3)
B.ee5=new A.cV("Counter and sink","The faucet is mounted through a hole in the counter.",B.h_C,20)
B.h80=new A.q(0,-1.9,5)
B.ee6=new A.cV("GREEN screw: GROUND",y.Z,B.h80,5)
B.h0L=new A.q(0,47,-2)
B.ee7=new A.cV("Top and bottom plate","The horizontal 2x4s at the top and the bottom of the wall. The studs stand between them.",B.h0L,70)
B.h_d=new A.q(0,0,-8)
B.ee8=new A.cV("Wall","Behind the wall the drain pipe goes down to the sewer line.",B.h_d,22)
B.h_O=new A.q(0,19,-3)
B.ee9=new A.cV("Faucet","The faucet with hot on the left (red) and cold on the right (blue).",B.h_O,14)
B.h6j=new A.q(3.5,2,-7.2)
B.eea=new A.cV("Kitchen counter and cabinet","The cabinet under the sink is where the drain and the shut-off valves live.",B.h6j,9)
B.h8v=new A.q(10.05,5.7,-7.5)
B.eeb=new A.cV("Kitchen breaker","Protects the kitchen outlets. It is ON.",B.h8v,3.5)
B.h9H=new A.q(4,6,-2.5)
B.eec=new A.cV("Cold supply hose","A braided steel hose with a rubber liner and a blue band.",B.h9H,9)
B.hbe=new A.q(-1,0.6,4.3)
B.eed=new A.cV("SILVER screw: NEUTRAL side",y.B,B.hbe,5)
B.ab9=new A.q(0,3.7,0)
B.eee=new A.cV("Slip nut","A big plastic nut. Slide it on the pipe first, then the washer, then join the pieces and hand tighten. A rubber washer inside makes the seal.",B.ab9,7)
B.VG=new A.q(0,-1,-0.6)
B.eef=new A.cV("Wire nut","A twist-on cap that joins wires safely. The two white wires are joined here because a switch only cuts the hot wire.",B.VG,5)
B.h9Q=new A.q(-1.5,-0.3,3.2)
B.eeg=new A.cV("Black wire nut: HOT","Twist the house black wire and the fixture black wire together under this cap.",B.h9Q,6)
B.h8u=new A.q(-1.9,0,-2)
B.eeh=new A.cV("Wood stud","The 2x4 frame inside the wall. The electrical box is nailed or screwed to a stud so it cannot move.",B.h8u,16)
B.hds=new A.q(-1,-0.8,4.3)
B.eei=new A.cV("SILVER screw: NEUTRAL side",y.B,B.hds,5)
B.hhc=new A.q(6,3,-7.8)
B.eej=new A.cV("Water and drain pipes","Red is hot water, blue is cold water (PEX tubing). The white pipes are drains. They slope down so the waste flows away.",B.hhc,14)
B.hdy=new A.q(1,0.6,4.3)
B.eek=new A.cV("BRASS screw: HOT side",y.C,B.hdy,5)
B.he4=new A.q(0,-0.2,4.9)
B.eel=new A.cV("Mounting strap (yoke)","The metal strap with two screw slots. Long screws through the ears hold the device in the box.",B.he4,7)
B.hhU=new A.q(9.55,4.7,-7.5)
B.eem=new A.cV("Spare breaker","A spare circuit.",B.hhU,3.5)
B.h_V=new A.q(0,20,8)
B.een=new A.cV("Vanity and counter","The cabinet that holds the sink. The pipes live inside it.",B.h_V,70)
B.hgp=new A.q(-3.2,1.3,-7.8)
B.eeo=new A.cV("Living room outlet","A standard outlet. Tap Open lesson to wire one in 3D.",B.hgp,4.5)
B.he7=new A.q(1.5,-0.3,3.2)
B.eep=new A.cV("Green ground connection","Join the bare copper house ground wire to the green fixture ground wire.",B.he7,6)
B.aXE=new A.q(12,2.6,0)
B.eeq=new A.cV("Trap arm","The pipe that carries the waste water from the trap into the wall. It must slope down toward the wall, about 1/4 inch per foot.",B.aXE,9)
B.haL=new A.q(0,6.5,-7.8)
B.eer=new A.cV("Electrical cables","Cables run from the breaker panel to every outlet, switch and light. Yellow is 12 gauge for 20 amps. White is 14 gauge for 15 amps.",B.haL,16)
B.hbx=new A.q(11.2,2.3,-6)
B.ees=new A.cV("Water heater","Heats the water. The cold line goes in at the top and the hot line comes out at the top.",B.hbx,9)
B.hcg=new A.q(9.55,5.2,-7.5)
B.eet=new A.cV("Bathroom breaker","Protects the bathroom. It is ON.",B.hcg,3.5)
B.h8C=new A.q(5.2,3.9,-7.8)
B.eeu=new A.cV("Kitchen GFCI outlet","Outlets near water must be GFCI. Tap Open lesson to wire one.",B.h8C,4.5)
B.h0G=new A.q(0,40,-3)
B.eev=new A.cV("Electrical cable","Yellow 12/2 cable with ground: it carries power from the breaker panel through the holes in the studs to each box.",B.h0G,80)
B.h9o=new A.q(-8.4,1.2,-6.4)
B.eew=new A.cV("Sofa","Just furniture, to show the size of the room.",B.h9o,10)
B.eex=new A.cV("Outlet face","Two outlets. The short slot is hot, the long slot is neutral, and the round hole is ground.",B.aXZ,6)
B.h7H=new A.q(0,4,-7.8)
B.eey=new A.cV("Wall","The drywall of the back wall.",B.h7H,16)
B.hgt=new A.q(0,0,0.6)
B.eez=new A.cV("Canopy","The round cover that hides the box and the wire connections against the ceiling.",B.hgt,8)
B.eeA=new A.cV("Concrete slab","The foundation. It carries the whole weight of the house. Plumbing drains are placed before it is poured.",B.dX,30)
B.h0z=new A.q(0,40,12)
B.eeB=new A.cV("Front door","Tap the door to go inside the house.",B.h0z,260)
B.abb=new A.q(8.9,2.6,0)
B.eeC=new A.cV("Slip nut","Hand tighten it, then about a quarter turn with pliers. Over-tightening cracks the plastic.",B.abb,7)
B.hce=new A.q(1,-0.8,4.3)
B.eeD=new A.cV("BRASS screw: HOT side",y.C,B.hce,5)
B.h7p=new A.q(0.6,1.5,-1.8)
B.eeE=new A.cV("Cable to the light (LOAD)","This cable carries the switched power on to the light. The black wire here only has power when the switch is on.",B.h7p,8)
B.h7W=new A.q(9.8,5,-7.5)
B.eeF=new A.cV("Breaker panel","The main electrical panel. Each breaker protects one circuit. A breaker that is in the middle position has TRIPPED. Flip it fully OFF and then ON to reset.",B.h7W,6)
B.h9M=new A.q(-4,6,-2.5)
B.eeG=new A.cV("Hot supply hose","A braided steel hose with a rubber liner and a red band. Hand tighten the nuts, then a quarter turn with a wrench.",B.h9M,9)
B.ejv=new C.t(66,66)
B.bU0=new C.ae(D.e6,20,F.f8,null,null,null)
B.en4=new C.D(D.uj,B.bU0,null)
B.fxt=new C.F(!0,D.mB,null,null,null,null,12.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fE7=new C.y("A circuit that is not CORRECT and safe can never pass, even if the light or fan would have worked.",null,B.fxt,null,null,null,null,null,null,null,null,null)
B.eng=new C.D(D.i4,B.fE7,null)
B.fO8=new C.y("Sick people can stay in a hospital bed. Treat each patient before their care runs out, and they go home better.",null,D.V8,null,D.K,null,null,null,null,null,null,null)
B.enm=new C.D(D.am2,B.fO8,null)
B.byt=new C.P(0,26,0,26)
B.fo7=new C.F(!0,D.aC,null,null,null,null,13.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.hif=new C.bR("lessons-none",x.W)
B.fzt=new C.y("No lesson found. Try another word.",null,B.fo7,null,null,null,null,null,null,null,null,B.hif)
B.bad=new C.cf(D.A,null,null,B.fzt,null)
B.ent=new C.D(B.byt,B.bad,null)
B.bTb=new C.ae(D.e6,18,D.be,null,null,null)
B.enE=new C.D(D.fv,B.bTb,null)
B.enG=new C.D(D.fv,H.ara,null)
B.enY=new C.D(D.uj,H.Pj,null)
B.erE=new A.y6(0,0,18,0,!1,!1,!1,!1,!1,0,!1,!1,"","",-1,0,-1,0)
B.erF=new A.y6(0,100,120,-2.2,!1,!1,!1,!1,!1,0,!1,!1,"","",-1,0,-1,0)
B.erG=new A.y6(0,40,150,0.5,!1,!1,!1,!1,!1,0,!1,!1,"","",-1,0,-1,0)
B.erH=new A.y6(0,0,0,0,!1,!1,!1,!1,!1,0,!1,!1,"","",-1,0,-1,0)
B.erI=new A.y6(0,-80,50,0,!1,!1,!1,!1,!1,0,!1,!1,"","",-1,0,-1,0)
B.erJ=new A.y6(0,0,56,0,!1,!1,!1,!1,!1,0,!1,!1,"","",-1,0,-1,0)
B.euf=new A.a9I(null,null)
B.bkb=new C.u(1,0.30980392156862746,0.7019607843137254,0.9647058823529412,D.q)
B.bsA=new C.u(1,0.11372549019607843,0.37254901960784315,0.7686274509803922,D.q)
B.bpk=new C.u(1,0.043137254901960784,0.16470588235294117,0.4196078431372549,D.q)
B.d2K=w([B.bkb,B.bsA,B.bpk],x.O)
B.euZ=new C.c_(Ab.xv,0.5,D.x,null,0,B.d2K,null,null)
B.bsO=new C.u(1,0.8392156862745098,0.9019607843137255,0.9176470588235294,D.q)
B.evG=new C.z(B.bsO,B.Yc)
B.evP=new C.z(0,120)
B.evQ=new C.z(0,300)
B.ew5=new C.z(B.mx,B.dX)
B.exK=new C.z(64,2.4)
B.ezp=new C.z("LOAD (taped)",D.d0)
B.bgG=new C.u(1,0.9450980392156862,0.8901960784313725,0.7764705882352941,D.q)
B.bjR=new C.u(1,0.8470588235294118,0.7686274509803922,0.6274509803921569,D.q)
B.eAM=new C.z(B.bgG,B.bjR)
B.dkN=w([D.ax,D.cd,D.ax],x.O)
B.eBa=new C.z(-40,B.dkN)
B.eCC=new C.z(63,-2.4)
B.biP=new C.u(1,0.8901960784313725,0.9254901960784314,0.9607843137254902,D.q)
B.bdC=new C.u(1,0.7372549019607844,0.7843137254901961,0.8392156862745098,D.q)
B.eD9=new C.z(B.biP,B.bdC)
B.eDq=new C.z(51,B.afh)
B.beS=new C.u(1,0.9137254901960784,0.8705882352941177,0.7607843137254902,D.q)
B.eG8=new C.z(B.beS,B.BC)
B.bff=new C.u(1,0.9137254901960784,0.9372549019607843,0.9490196078431372,D.q)
B.bfQ=new C.u(1,0.8509803921568627,0.8941176470588236,0.9098039215686274,D.q)
B.eGY=new C.z(B.bff,B.bfQ)
B.boy=new C.u(1,0.9058823529411765,0.8235294117647058,0.8156862745098039,D.q)
B.bfR=new C.u(1,0.7058823529411765,0.7176470588235294,0.7411764705882353,D.q)
B.eHZ=new C.z(B.boy,B.bfR)
B.bd_=new C.u(1,0.7647058823529411,0.8117647058823529,0.9019607843137255,D.q)
B.eIP=new C.z(B.bd_,B.aiZ)
B.bn1=new C.u(1,0.3568627450980392,0.39215686274509803,0.4392156862745098,D.q)
B.eKC=new C.z("SILVER \xb7 NEUTRAL",B.bn1)
B.hgE=new A.q(-1.5,0,0)
B.eKL=new C.z(B.Fp,B.hgE)
B.eMk=new C.z(52,B.vL)
B.bjr=new C.u(1,0.12156862745098039,0.47843137254901963,0.22745098039215686,D.q)
B.eNd=new C.z("GREEN \xb7 GROUND",B.bjr)
B.brJ=new C.u(1,0.9450980392156862,0.9098039215686274,0.8235294117647058,D.q)
B.eNV=new C.z(B.brJ,B.BC)
B.eOb=new C.z("main","Main water valve")
B.cPc=w([D.vS,D.bt,D.bf],x.O)
B.eQw=new C.z(40,B.cPc)
B.hhZ=new A.q(1.5,0,0)
B.eSm=new C.z(B.ME,B.hhZ)
B.bfw=new C.u(1,0.9529411764705882,0.9411764705882353,0.9098039215686274,D.q)
B.bmy=new C.u(1,0.4823529411764706,0.5294117647058824,0.5803921568627451,D.q)
B.eT3=new C.z(B.bfw,B.bmy)
B.eU2=new C.z(B.i1,B.XG)
B.biu=new C.u(1,0.9529411764705882,0.9019607843137255,0.7843137254901961,D.q)
B.bpr=new C.u(1,0.788235294117647,0.7098039215686275,0.5490196078431373,D.q)
B.eUl=new C.z(B.biu,B.bpr)
B.bf6=new C.u(1,0.6039215686274509,0.4196078431372549,0.047058823529411764,D.q)
B.eUR=new C.z("BRASS \xb7 HOT",B.bf6)
B.eVi=new C.z(53,B.ME)
B.a8n=new C.b7(180,40,215)
B.a8o=new C.b7(215,40,345)
B.a8p=new C.b7(60,60,90)
B.eW7=new C.b7(61,-4.6,B.rm)
B.a8q=new C.b7(95,40,185)
B.eX7=new C.b7("Turn the main water ON to test for leaks: pick Hand and tap the main valve.","hand","main")
B.eY9=new C.b7(62,4.6,B.nd)
B.eYk=new C.b7("The water must be OFF before you cut into the pipes: pick Hand and tap the main valve.","hand","main")
B.eYP=new C.b7("Fit the parts in the order of the job list.","",null)
B.eZf=new C.b7("Looks good. Watch for leaks; if none, the job is done.","",null)
B.f_a=new C.cw([0,17.1,16.4,5.8])
B.f_d=new C.cw([0,-0.1,16.4,4.2])
B.f0h=new C.cw([15.6,9,14.8,22])
B.f0l=new C.cw([-15.6,9,14.8,22])
B.f0u=new C.e2([72,60,44,B.Mk,B.Mn])
B.bsw=new C.u(1,0.8941176470588236,0.6901960784313725,0.47843137254901963,D.q)
B.f0L=new C.e2([124,70,44,B.bsw,B.qa])
B.f0S=new C.e2([90,64,46,B.ah_,D.hk])
B.f18=new C.e2([-140,140,12,310,132])
B.f1b=new C.e2([110,70,62,D.bN,D.al])
B.f1g=new C.e2([84,60,40,B.ah2,B.Mn])
B.aTq=new C.F(!0,D.bU,null,null,null,null,11,D.u,null,2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fRB=new C.y("WIRES",null,B.aTq,null,D.K,null,null,null,null,null,null,null)
B.bG0=new C.by(1,D.ba,B.fRB,null)
B.f9r=new C.a4(56,null,null,null)
B.fLQ=new C.y("DIAGRAM",null,B.aTq,null,D.K,null,null,null,null,null,null,null)
B.bGV=new C.by(1,D.ba,B.fLQ,null)
B.dmo=w([B.bG0,B.f9r,B.bGV],x.p)
B.f3R=new C.ca(D.aM,D.e,D.i,D.m,null,D.p,null,0,B.dmo,null)
B.fCK=new C.y("\u260e",null,D.pG,null,null,null,null,null,null,null,null,null)
B.bbM=new C.qz(B.fCK,D.ax,null,24,null)
B.fFf=new C.y("City office",null,D.de,null,null,null,null,null,null,null,null,null)
B.dc_=w([B.bbM,D.bc,B.fFf],x.p)
B.f43=new C.ca(D.aM,D.e,D.i,D.m,null,D.p,null,0,B.dc_,null)
B.bUL=new C.ae(D.OW,26,D.c_,null,null,null)
B.fSx=new C.y("Hallway tour",null,D.ht,null,null,null,null,null,null,null,null,null)
B.fDJ=new C.y("Just the hall and its big TVs, 45 seconds",null,D.x5,null,null,null,null,null,null,null,null,null)
B.du3=w([B.fSx,B.fDJ],x.p)
B.buh=new C.fk(D.ah,D.e,D.i,D.E,null,D.p,null,0,B.du3,null)
B.bGB=new C.by(1,D.ba,B.buh,null)
B.cZy=w([B.bUL,D.bc,B.bGB,A4.Pc],x.p)
B.f46=new C.ca(D.aM,D.e,D.i,D.m,null,D.p,null,0,B.cZy,null)
B.bSp=new C.ae(D.hn,30,D.c,null,null,null)
B.fUy=new C.y("Play the tour",null,D.k8,null,null,null,null,null,null,null,null,null)
B.d7E=w([B.bSp,D.bm,B.fUy],x.p)
B.f4c=new C.ca(D.aM,D.b9,D.i,D.m,null,D.p,null,0,B.d7E,null)
B.qR=new A.JH(0,"correct")
B.aQH=new A.JH(1,"incorrect")
B.t9=new A.JH(2,"unsafe")
B.JH=new A.JH(3,"incomplete")
B.f4q=new A.JH(4,"requiresVerification")
B.efd={hospital:0,shop:1,school:2,firestation:3,house2:4,bighouse:5,store:6,gasstation:7,dmv:8,tower:9,hq:10}
B.a8V=new C.dw(B.efd,11,x.M)
B.eeY={wardrobe:0,shelf:1,lamp:2,console:3}
B.f5O=new C.dw(B.eeY,4,x.M)
B.aRl=new C.jw([1,2,3,4,5],C.at("jw<G>"))
B.eeH={house2:0,bighouse:1,shop:2,hospital:3,school:4,firestation:5,store:6,gasstation:7,tower:8,hq:9,dmv:10}
B.f61=new C.dw(B.eeH,11,x.M)
B.eh2={billboard:0,bighouse:1,townsign:2,cornersign:3,adboard:4,tower:5,hq:6,store:7,gasstation:8,ubstation:9,dmv:10}
B.f64=new C.dw(B.eh2,11,x.M)
B.aRq=new C.dw(D.hT,0,C.at("dw<G>"))
B.f82=new C.av(0,36)
B.f8c=new C.av(126,84)
B.f9a=new C.a4(110,64,null,null)
B.f9b=new C.a4(120,70,null,null)
B.f9h=new C.a4(270,64,null,null)
B.f9i=new C.a4(270,70,null,null)
B.K3=new A.FN(0,"hot")
B.K4=new A.FN(1,"neutral")
B.K5=new A.FN(2,"ground")
B.aT6=new A.FN(3,"load")
B.fhH=new C.F(!0,D.c,null,null,null,null,12.5,null,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fik=new C.F(!0,D.c,null,null,null,null,13.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fip=new C.F(!0,D.c,null,null,null,null,16,D.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,L.D_,null,null,null)
B.fit=new C.F(!0,D.b_,null,null,null,null,12.5,D.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fiG=new C.F(!0,D.aC,null,null,null,null,11.5,D.U,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fjF=new C.F(!0,D.aC,null,null,null,null,14,D.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.aTz=new C.F(!0,D.aC,null,null,null,null,11.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fkb=new C.F(!0,D.bt,null,null,null,null,12,D.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fkl=new C.F(!0,D.ac,null,null,null,null,13.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fkL=new C.F(!0,D.aA,null,null,null,null,12.5,D.u,null,2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fkV=new C.F(!0,D.aR,null,null,null,null,11.5,null,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fl6=new C.F(!0,D.bt,null,null,null,null,15,D.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.aTO=new C.F(!0,D.ac,null,null,null,null,12,D.U,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fmi=new C.F(!0,D.c,null,null,null,null,13,D.U,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.a9W=new C.F(!0,D.ac,null,null,null,null,null,null,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fmL=new C.F(!0,D.bt,null,null,null,null,13,D.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fnq=new C.F(!0,D.aC,null,null,null,null,9.5,null,null,null,null,null,1.15,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fnH=new C.F(!0,D.ac,null,null,null,null,12.5,null,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fnI=new C.F(!0,D.fl,null,null,null,null,12,null,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fok=new C.F(!0,null,null,null,null,null,9,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.Kf=new C.F(!0,D.aA,null,null,null,null,12.5,D.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.foQ=new C.F(!0,D.c,null,null,null,null,11.5,D.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.aU6=new C.F(!0,D.c,null,null,null,null,14,null,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fp8=new C.F(!0,D.bL,null,null,null,null,13,D.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fps=new C.F(!0,D.c,null,null,null,null,12,D.H,null,null,null,null,1.15,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fq9=new C.F(!0,D.mB,null,null,null,null,12,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fqf=new C.F(!0,D.ac,null,null,null,null,13.5,null,D.cD,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fqq=new C.F(!0,D.fl,null,null,null,null,11.5,D.U,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fqv=new C.F(!0,D.eG,null,null,null,null,14,D.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fr3=new C.F(!0,D.bt,null,null,null,null,18,D.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.frB=new C.F(!0,D.aR,null,null,null,null,12,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fsa=new C.F(!0,D.c,null,null,null,null,10.5,D.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fsm=new C.F(!0,D.bt,null,null,null,null,null,D.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.aUz=new C.F(!0,D.ac,null,null,null,null,13.5,null,null,null,null,null,1.5,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.ftJ=new C.F(!0,D.aC,null,null,null,null,11,D.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.ftU=new C.F(!0,D.ac,null,null,null,null,12.8,null,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fva=new C.F(!0,D.aA,null,null,null,null,12.5,D.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fwb=new C.F(!0,D.bt,null,null,null,null,44,D.u,null,2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.aV3=new C.F(!0,D.c,null,null,null,null,13.5,D.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fwA=new C.F(!0,D.aR,null,null,null,null,11.5,null,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fxh=new C.F(!0,F.f8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fxy=new C.F(!0,D.fl,null,null,null,null,12,D.U,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fxT=new C.y("Wire guide (U.S. houses)",null,D.de,null,null,null,null,null,null,null,null,null)
B.fy5=new C.y("Which wall?",null,D.Vh,null,null,null,null,null,null,null,null,null)
B.fiA=new C.F(!0,D.w,null,null,null,null,12,D.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fyq=new C.y("Open the 3D lesson",null,B.fiA,null,null,null,null,null,null,null,null,null)
B.fzc=new C.y("Never rely on color alone. With the power off, prove what each wire does with a tester and the device diagram. A licensed electrician does real house wiring.",null,M.a9Y,null,null,null,null,null,null,null,null,null)
B.fzm=new C.y("Tip: pick a part, then tap its glowing spot. Joints on hoses, bolts and the drain are only loose: pick the Wrench and tap them. Use your Hand on the main water valve: turn the water OFF before you cut into a pipe, and ON to test for leaks.",null,D.Kc,null,null,null,null,null,null,null,null,null)
B.fzI=new C.y("Answer, then submit. Nothing is marked until you submit.",null,I.tk,null,null,null,null,null,null,null,null,null)
B.fAx=new C.y("You used all three lives. Electricity does not give second chances, so in real life you turn the breaker OFF and test the wires every single time. Try the job again.",null,D.x8,null,null,null,null,null,null,null,null,null)
B.fAO=new C.y("A different house",null,null,null,null,null,null,null,null,null,null,null)
B.fBf=new C.y("\ud83c\udf5e",null,D.x6,null,null,null,null,null,null,null,null,null)
B.fBg=new C.y("Show me",null,D.lQ,null,null,null,null,null,null,null,null,null)
B.fBG=new C.y("Start this job again",null,null,null,null,null,null,null,null,null,null,null)
B.fsz=new C.F(!0,D.c0,null,null,null,null,12.5,D.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fC_=new C.y("Give back",null,B.fsz,null,null,null,null,null,null,null,null,null)
B.fCH=new C.y("Edit your billboard",null,D.de,null,null,null,null,null,null,null,null,null)
B.fDQ=new C.y("L is the lobby. On every level there is a balcony with a view of the town.",null,I.Em,null,null,null,null,null,null,null,null,null)
B.fE4=new C.y("Submit the test",null,null,null,null,null,null,null,null,null,null,null)
B.fEs=new C.y("\ud83e\udeaa",null,D.x6,null,null,null,null,null,null,null,null,null)
B.fEF=new C.y("Start from a bare house (wire everything)",null,null,null,null,null,null,null,null,null,null,null)
B.fFn=new C.y("THE RACE",null,Q.tm,null,null,null,null,null,null,null,null,null)
B.fFs=new C.y("What should the drone show you?",null,D.a9P,null,null,null,null,null,null,null,null,null)
B.fG9=new C.y("Go through",null,null,null,null,null,null,null,null,null,null,null)
B.fGY=new C.y("The customer says\u2026",null,D.de,null,null,null,null,null,null,null,null,null)
B.fHu=new C.y("Submit for inspection",null,null,null,null,null,null,null,null,null,null,null)
B.fHI=new C.y("What the house needs",null,D.de,null,null,null,null,null,null,null,null,null)
B.fHU=new C.y("Next job",null,null,null,null,null,null,null,null,null,null,null)
B.fk6=new C.F(!0,D.w,null,null,null,null,14,D.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fI1=new C.y("Go in",null,B.fk6,null,null,null,null,null,null,null,null,null)
B.ftC=new C.F(!0,D.aA,null,null,null,null,22,D.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fI5=new C.y("My House",null,B.ftC,null,D.K,null,null,null,null,null,null,null)
B.fIc=new C.y("New job",null,null,null,null,null,null,null,null,null,null,null)
B.aUb=new C.F(!0,D.c0,null,null,null,null,null,D.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fIj=new C.y("Job over",null,B.aUb,null,null,null,null,null,null,null,null,null)
B.fIz=new C.y("Three shocks. In real life you switch the breaker off and test the wires, every time. Try another call.",null,D.x8,null,null,null,null,null,null,null,null,null)
B.fIF=new C.y("Learn the trades",null,R.tj,null,null,null,null,null,null,null,null,null)
B.fJr=new C.y("New call",null,null,null,null,null,null,null,null,null,null,null)
B.fJw=new C.y("Job done! \ud83c\udf89",null,M.Km,null,null,null,null,null,null,null,null,null)
B.fJA=new C.y("Wire guide",null,null,null,null,null,null,null,null,null,null,null)
B.fKK=new C.y("Next call",null,null,null,null,null,null,null,null,null,null,null)
B.fL7=new C.y("Plug in",null,D.de,null,null,null,null,null,null,null,null,null)
B.fLx=new C.y("Look around",null,null,null,null,null,null,null,null,null,null,null)
B.fLT=new C.y("\ud83d\udef5",null,D.x4,null,null,null,null,null,null,null,null,null)
B.fM7=new C.y("The customer wants:",null,D.V3,null,null,null,null,null,null,null,null,null)
B.fMi=new C.y('Tip: pick "Look and test" and tap things to find out what is wrong. Then pick the right tool. Turn the breaker off (hand) before you touch any wire.',null,D.Kc,null,null,null,null,null,null,null,null,null)
B.fp9=new C.F(!0,D.aC,null,null,null,null,11.5,D.H,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fMA=new C.y("INCOMING CALL",null,B.fp9,null,null,null,null,null,null,null,null,null)
B.fMG=new C.y("Elevator",null,D.fx,null,null,null,null,null,null,null,null,null)
B.fNH=new C.y("Deliveries",null,D.fx,null,null,null,null,null,null,null,null,null)
B.fNV=new C.y("Every connection is on the right terminal and every safety check passes.",null,D.tn,null,null,null,null,null,null,null,null,null)
B.fO3=new C.y("Message \xb7 now",null,D.vm,null,null,null,null,null,null,null,null,null)
B.fOX=new C.y("Call over",null,B.aUb,null,null,null,null,null,null,null,null,null)
B.fP3=new C.y("\ud83d\udd12",null,V.V4,null,null,null,null,null,null,null,null,null)
B.fP4=new C.y("\u23cf Unplug",null,U.Am,null,null,null,null,null,null,null,null,null)
B.fPa=new C.y("The game is closed for now",null,D.n1,null,D.K,null,null,null,null,null,null,null)
B.fjQ=new C.F(!0,D.ac,null,null,null,null,14.5,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fPn=new C.y("You missed 3 jobs in a row. The City office needs people who answer the phone and finish the job.",null,B.fjQ,null,D.K,null,null,null,null,null,null,null)
B.fPp=new C.y("A different call",null,null,null,null,null,null,null,null,null,null,null)
B.fPH=new C.y("One board on its own, or several boards standing apart.",null,I.tk,null,null,null,null,null,null,null,null,null)
B.fPS=new C.y("\ud83d\udecf\ufe0f",null,D.n2,null,null,null,null,null,null,null,null,null)
B.fQi=new C.y("Job complete! \ud83c\udf89",null,M.Km,null,null,null,null,null,null,null,null,null)
B.fQv=new C.y("OPEN ORDERS",null,Q.tm,null,null,null,null,null,null,null,null,null)
B.fQP=new C.y("Colours",null,D.Al,null,null,null,null,null,null,null,null,null)
B.fQT=new C.y("How you are doing",null,D.ht,null,null,null,null,null,null,null,null,null)
B.fRb=new C.y("Real work: no hints. You will only hear from me when something is wrong.",null,I.Em,null,null,null,null,null,null,null,null,null)
B.fRc=new C.y("5 bedrooms, 3 bathrooms and NGMY City outside. Walk in, look all round, fix what is wrong.",null,Aa.UO,null,D.K,null,null,null,null,null,null,null)
B.fRr=new C.y("All fixed! \ud83c\udf89",null,M.Km,null,null,null,null,null,null,null,null,null)
B.fRv=new C.y("These are the usual U.S. house wiring colors. Colors are a hint, not proof: old work, switch loops and other countries differ. A real installer proves what each wire does with a tester, with the power off, and follows the device diagram.",null,A3.a9X,null,null,null,null,null,null,null,null,null)
B.fRR=new C.y("Messages",null,D.vm,null,null,null,null,null,null,null,null,null)
B.fS3=new C.y("Diagram lessons",null,D.cz,null,null,null,null,null,null,null,null,null)
B.aVF=new C.y("Stay",null,null,null,null,null,null,null,null,null,null,null)
B.fSC=new C.y("\ud83d\ude81",null,D.x4,null,null,null,null,null,null,null,null,null)
B.fSP=new C.y("Choose a level. A red one has an office with no power.",null,D.Ar,null,null,null,null,null,null,null,null,null)
B.aVH=new C.y("A different job",null,null,null,null,null,null,null,null,null,null,null)
B.fTD=new C.y("It goes on the back wall, not wired yet. Tap the red one to wire it yourself.",null,I.tk,null,null,null,null,null,null,null,null,null)
B.fUA=new C.y("\ud83d\uded7",null,D.x4,null,null,null,null,null,null,null,null,null)
B.fUV=new C.y("\u26a1",null,D.pF,null,null,null,null,null,null,null,null,null)
B.fVv=new C.y("The job",null,D.de,null,null,null,null,null,null,null,null,null)
B.fWp=new C.y("Stay in the room",null,null,null,null,null,null,null,null,null,null,null)
B.fvz=new C.F(!0,F.f8,null,null,null,null,12,D.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fWG=new C.y("\ud83e\udea7 Billboards",null,B.fvz,null,null,null,null,null,null,null,null,null)
B.fWM=new C.y("Choose a billboard",null,D.de,null,null,null,null,null,null,null,null,null)
B.fWR=new C.y("Which sign?",null,D.Al,null,null,null,null,null,null,null,null,null)
B.fWY=new C.y("\ud83d\udc8a",null,D.x6,null,null,null,null,null,null,null,null,null)
B.h_1=new A.q(3.6,2.6,0.6)
B.h_3=new A.q(0,56,0.9)
B.h_4=new A.q(-146.4,62,84)
B.h_6=new A.q(0,139.4,180)
B.ig=new A.q(0,0,1)
B.h_8=new A.q(0,0,3)
B.aaW=new A.q(0,0,4)
B.h_a=new A.q(0,0,500)
B.h_b=new A.q(0,0,640)
B.h_c=new A.q(0,0,800)
B.tr=new A.q(0,0,-1)
B.aaX=new A.q(0,0,-60)
B.h_f=new A.q(0,101,38)
B.h_g=new A.q(0,105,280)
B.aWv=new A.q(0,10,0)
B.h_h=new A.q(0,10,3)
B.h_i=new A.q(0,110,10)
B.h_j=new A.q(0,110,95)
B.h_k=new A.q(0,112,36)
B.h_l=new A.q(0,116,0)
B.h_m=new A.q(0,11,-15)
B.h_n=new A.q(0,120,0)
B.h_o=new A.q(0,122,0)
B.h_p=new A.q(0,124,0)
B.aWx=new A.q(0,124,28)
B.h_q=new A.q(0,126,4)
B.aWy=new A.q(0,12,0)
B.h_r=new A.q(0,12,3)
B.h_s=new A.q(0,130,-3)
B.aaY=new A.q(0,13,0)
B.h_t=new A.q(0,13,56)
B.h_u=new A.q(0,13,-8)
B.h_v=new A.q(0,141,180)
B.h_w=new A.q(0,142,0)
B.VC=new A.q(0,14,0)
B.h_x=new A.q(0,14,11)
B.h_y=new A.q(0,14,150)
B.h_z=new A.q(0,14,2)
B.h_A=new A.q(0,14,32)
B.aWz=new A.q(0,14,40)
B.h_B=new A.q(0,14,5)
B.h_D=new A.q(0,14,-9)
B.h_E=new A.q(0,150,-150)
B.aWA=new A.q(0,156,28)
B.h_F=new A.q(0,159,0)
B.h_G=new A.q(0,165,3)
B.h_H=new A.q(0,165,-63)
B.h_I=new A.q(0,16,0)
B.h_J=new A.q(0,178,-30)
B.aaZ=new A.q(0,17,0)
B.h_K=new A.q(0,17,21)
B.h_L=new A.q(0,188,0)
B.h_M=new A.q(0,19,0)
B.h_N=new A.q(0,19,14)
B.h_P=new A.q(0,19,-30)
B.e8=new A.q(0,1,0)
B.h_R=new A.q(0,202,0)
B.h_S=new A.q(0,20,0)
B.h_T=new A.q(0,20,16)
B.h_W=new A.q(0,20,-14)
B.h_X=new A.q(0,20,-6)
B.h_Y=new A.q(0,210,-150)
B.h_Z=new A.q(0,216,-30)
B.h0_=new A.q(0,21,0)
B.h00=new A.q(0,22,-11)
B.h01=new A.q(0,22,-12)
B.h02=new A.q(0,22,-39)
B.h05=new A.q(0,23,0)
B.h08=new A.q(0,24,0)
B.h09=new A.q(0,24,13)
B.h0b=new A.q(0,250,640)
B.Ax=new A.q(0,250,-118)
B.h0d=new A.q(0,252,0)
B.h0e=new A.q(0,25,-15)
B.h0f=new A.q(0,26,-24)
B.VD=new A.q(0,28,0)
B.h0g=new A.q(0,28,-8)
B.aWC=new A.q(0,29,40)
B.h0h=new A.q(0,2,14)
B.h0i=new A.q(0,304,-150)
B.ab_=new A.q(0,30,0)
B.h0j=new A.q(0,30,110)
B.h0k=new A.q(0,316,0)
B.h0l=new A.q(0,31,46)
B.h0m=new A.q(0,31,-6)
B.h0n=new A.q(0,330,260)
B.h0o=new A.q(0,34,0)
B.h0p=new A.q(0,36,0)
B.h0q=new A.q(0,36,19)
B.h0r=new A.q(0,36,-3)
B.h0s=new A.q(0,37,22)
B.h0t=new A.q(0,3,0)
B.h0u=new A.q(0,3,150)
B.h0v=new A.q(0,3,-30)
B.h0x=new A.q(0,400,60)
B.h0y=new A.q(0,40,100)
B.h0A=new A.q(0,40,150)
B.h0B=new A.q(0,40,17)
B.h0D=new A.q(0,40,40)
B.h0E=new A.q(0,40,45)
B.h0F=new A.q(0,40,50)
B.h0H=new A.q(0,40,-6)
B.aWE=new A.q(0,44,46)
B.h0I=new A.q(0,44,55)
B.h0J=new A.q(0,46,0)
B.h0K=new A.q(0,47,0)
B.aWF=new A.q(0,48,0)
B.h0M=new A.q(0,48,20)
B.h0N=new A.q(0,48,82)
B.VE=new A.q(0,4,-2)
B.h0R=new A.q(0,520,1450)
B.aWG=new A.q(0,52,0)
B.h0S=new A.q(0,52,52)
B.h0U=new A.q(0,55,0)
B.ab0=new A.q(0,58,0)
B.h0V=new A.q(0,5,4)
B.h0X=new A.q(0,66,0)
B.h0Y=new A.q(0,66,1)
B.h0Z=new A.q(0,6,-15)
B.h1_=new A.q(0,75,-30)
B.aWH=new A.q(0,76,36)
B.ab1=new A.q(0,7,0)
B.h10=new A.q(0,7,-5)
B.aWI=new A.q(0,82,0)
B.xg=new A.q(0,8,0)
B.h11=new A.q(0,8,6)
B.h12=new A.q(0,8,90)
B.h13=new A.q(0,8,-16)
B.h14=new A.q(0,8,-19)
B.h15=new A.q(0,8,-4)
B.h16=new A.q(0,900,1600)
B.h17=new A.q(0,91,80)
B.aWJ=new A.q(0,92,1)
B.aWK=new A.q(0,92,28)
B.h18=new A.q(0,94,13)
B.h19=new A.q(0,98,8)
B.h1a=new A.q(0,99,38)
B.ab2=new A.q(0,9,0)
B.aWL=new A.q(0,9,-3)
B.h1b=new A.q(0,-2,0)
B.ab3=new A.q(0,-2,12)
B.h1c=new A.q(0,-4,28)
B.h1d=new A.q(0,-4,-20)
B.h1h=new A.q(-100,38,0.7)
B.h1k=new A.q(100,100,320)
B.h1l=new A.q(100,14,36)
B.h1m=new A.q(100,24,36)
B.h1n=new A.q(100,24,8)
B.h1o=new A.q(100,290,-330)
B.h1p=new A.q(100,7,7)
B.h1q=new A.q(101,4,37)
B.h1t=new A.q(10,12,10)
B.h1u=new A.q(10,12,16)
B.h1v=new A.q(10,16,3)
B.h1w=new A.q(10,26,2)
B.h1x=new A.q(10,34,1)
B.h1y=new A.q(10,3,7)
B.h1z=new A.q(10,60,14)
B.h1A=new A.q(10,8,10)
B.h1B=new A.q(10,8,15)
B.h1D=new A.q(110,0,20)
B.h1E=new A.q(110,130,20)
B.h1F=new A.q(110,14,2)
B.h1G=new A.q(110,8,34)
B.h1H=new A.q(110,96,120)
B.aWM=new A.q(112,22,3)
B.h1I=new A.q(112,46,2)
B.h1J=new A.q(11,12,30)
B.aWN=new A.q(11,16,7)
B.h1K=new A.q(11,1,11)
B.h1L=new A.q(120,0,-30)
B.h1M=new A.q(120,28,22)
B.h1N=new A.q(120,40,100)
B.h1O=new A.q(124,2,26)
B.h1P=new A.q(124,4,60)
B.h1Q=new A.q(125,8,54)
B.h1R=new A.q(126,2,62)
B.aWO=new A.q(12,3,9)
B.h1S=new A.q(12,4,22)
B.h1T=new A.q(12,86,0)
B.h1U=new A.q(130,18,12)
B.h1V=new A.q(130,28,24)
B.aWP=new A.q(130,4,14)
B.aWQ=new A.q(130,56,80)
B.h1W=new A.q(130,5,50)
B.h1X=new A.q(132,14,150)
B.h1Y=new A.q(132,2,52)
B.aWR=new A.q(134,4,84)
B.h1Z=new A.q(13,0,0)
B.h2_=new A.q(13,12,13)
B.h20=new A.q(13,15,2)
B.aWS=new A.q(13,18,8)
B.h21=new A.q(13,28,3)
B.h22=new A.q(0,0.52,2.35)
B.h23=new A.q(140,28,22)
B.h24=new A.q(140,9,43)
B.h25=new A.q(144,2,26)
B.h26=new A.q(146,3,40)
B.h27=new A.q(148,60,120)
B.h28=new A.q(14,10,2)
B.aWT=new A.q(14,11,14)
B.h29=new A.q(14,13,28)
B.h2a=new A.q(14,14,3)
B.h2b=new A.q(14,17,4)
B.h2c=new A.q(14,20,-28)
B.h2d=new A.q(14,30,14)
B.h2e=new A.q(14,36,14)
B.h2f=new A.q(14,3,14)
B.h2g=new A.q(150,30,42)
B.VF=new A.q(150,4,7)
B.aWU=new A.q(150,62,4)
B.h2h=new A.q(150,70,5)
B.h2i=new A.q(151,3,43)
B.h2j=new A.q(152,4,7)
B.h2l=new A.q(16,10,10)
B.h2m=new A.q(16,16,16)
B.h2n=new A.q(16,3,11)
B.h2o=new A.q(16,80,60)
B.h2p=new A.q(16,9,2)
B.h2q=new A.q(17,1,0)
B.aWV=new A.q(17,3,17)
B.h2r=new A.q(27,1.4,27)
B.h2s=new A.q(18,18,14)
B.h2t=new A.q(18,20,18)
B.h2u=new A.q(18,22,2)
B.h2v=new A.q(18,28,16)
B.h2w=new A.q(18,2,18)
B.h2x=new A.q(18,3,0)
B.h2y=new A.q(18,6,0)
B.h2z=new A.q(18,80,2)
B.h2A=new A.q(18,90,5)
B.h2B=new A.q(18,9,11)
B.h2C=new A.q(190,20,60)
B.h2D=new A.q(190,320,100)
B.h2E=new A.q(19,13,7)
B.h2F=new A.q(70,0.6,50)
B.h2G=new A.q(0,3,-6.5)
B.aWW=new A.q(1,23.6,18)
B.h2H=new A.q(-4,20.4,0)
B.h2I=new A.q(1,1,0.64)
B.h2J=new A.q(-4.6,1.5,-3.6)
B.h2K=new A.q(0,-13.5,-1.5)
B.h2L=new A.q(4,10,3.5)
B.aWX=new A.q(0.95,1.7,0.85)
B.hu=new A.q(1,0,0)
B.h2M=new A.q(1,16,36)
B.h2N=new A.q(1,18,18)
B.h2O=new A.q(1,26,14)
B.h2P=new A.q(1,28,14)
B.aWY=new A.q(1,2,1)
B.aWZ=new A.q(1,3,1)
B.ab4=new A.q(1,3,6)
B.h2R=new A.q(1,0.9,0.06)
B.h2S=new A.q(1.2,44,34)
B.h2U=new A.q(200,0,500)
B.h2V=new A.q(200,0,900)
B.h2W=new A.q(200,140,200)
B.h3_=new A.q(1.6,15,1.6)
B.h30=new A.q(20,12,14)
B.aX_=new A.q(20,14,7)
B.h31=new A.q(20,2,2)
B.h32=new A.q(20,2,8)
B.h33=new A.q(20,30,26)
B.h34=new A.q(20,3,14)
B.h35=new A.q(20,4,26)
B.h36=new A.q(20,92,26)
B.h37=new A.q(216,8,216)
B.h38=new A.q(22,12,34)
B.h39=new A.q(22,14,0)
B.h3a=new A.q(22,14,2)
B.h3b=new A.q(22,14,3)
B.h3c=new A.q(22,16,3)
B.h3d=new A.q(22,18,14)
B.h3e=new A.q(22,1,1)
B.h3f=new A.q(22,2,28)
B.h3g=new A.q(22,3,10)
B.h3h=new A.q(22,3,22)
B.h3i=new A.q(22,4,20)
B.h3j=new A.q(230,330,-210)
B.h3k=new A.q(230,-40,100)
B.h3l=new A.q(240,150,60)
B.h3m=new A.q(244,6,64)
B.h3n=new A.q(140,15,3.6)
B.h3o=new A.q(24,12,34)
B.h3p=new A.q(24,14,22)
B.h3q=new A.q(24,38,0)
B.aX0=new A.q(24,6,14)
B.h3r=new A.q(250,92,6)
B.h3s=new A.q(260,300,-160)
B.h3t=new A.q(262,3,5)
B.h3u=new A.q(262,3,56)
B.h3v=new A.q(26,14,26)
B.h3w=new A.q(26,2,26)
B.aX1=new A.q(26,4,22)
B.h3x=new A.q(26,72,26)
B.h3y=new A.q(26,8,18)
B.h3z=new A.q(26,-34,96)
B.aX2=new A.q(28,30,22)
B.h3A=new A.q(28,4,1)
B.h3C=new A.q(7.4,6,10.4)
B.h3D=new A.q(-0.1,0,0)
B.aX3=new A.q(2,100,90)
B.h3E=new A.q(2,10,2)
B.aX4=new A.q(2,12,60)
B.h3F=new A.q(2,13,2)
B.aX5=new A.q(2,23,12)
B.aX6=new A.q(2,28,22)
B.h3G=new A.q(2,5,1)
B.h3H=new A.q(2,700,900)
B.aX7=new A.q(2,8,2)
B.h3I=new A.q(1,0.9,0.8)
B.h3K=new A.q(64,10,-1.4)
B.h3L=new A.q(47,48,3.5)
B.h3M=new A.q(19.6,0,-1.5)
B.aX8=new A.q(0,56,1.3)
B.h3N=new A.q(0,15.5,0)
B.h3O=new A.q(3000,0,3000)
B.h3P=new A.q(3000,0,-3000)
B.h3R=new A.q(300,6,3)
B.h3T=new A.q(302,2,200)
B.h3U=new A.q(30,16,30)
B.aX9=new A.q(30,16,72)
B.h3V=new A.q(30,22,0)
B.h3W=new A.q(30,24,8)
B.h3X=new A.q(30,29,0)
B.h3Y=new A.q(30,34,40)
B.h3Z=new A.q(30,40,100)
B.h40=new A.q(30,6,12)
B.h41=new A.q(324,114,6)
B.aXa=new A.q(324,6,10)
B.aXb=new A.q(32,35,26)
B.h42=new A.q(33,11,10)
B.h43=new A.q(34,10,1)
B.h44=new A.q(34,22,3)
B.aXc=new A.q(34,25,18)
B.h45=new A.q(34,30,1)
B.aXd=new A.q(34,39,18)
B.aXe=new A.q(34,42,18)
B.h46=new A.q(34,4,28)
B.aXg=new A.q(34,8,18)
B.h47=new A.q(-1,-1.7,2.3)
B.h48=new A.q(366,124,6)
B.aXh=new A.q(366,6,10)
B.h49=new A.q(36,1,18)
B.h4a=new A.q(36,22,0)
B.h4b=new A.q(36,30,0)
B.h4c=new A.q(36,30,1)
B.h4d=new A.q(36,4,3)
B.h4e=new A.q(36,60,12)
B.h4f=new A.q(0,93,3.5)
B.h4g=new A.q(37,16,0)
B.h4h=new A.q(37,50,38)
B.h4i=new A.q(38,10,24)
B.h4j=new A.q(38,20,3)
B.h4k=new A.q(38,2,6)
B.h4l=new A.q(-0.2,-0.3,-0.4)
B.h4m=new A.q(60,62,3.6)
B.h4n=new A.q(0,48.6,55)
B.aXi=new A.q(3,12,12)
B.aXj=new A.q(3,14,18)
B.h4o=new A.q(3,16,3)
B.h4q=new A.q(3,22,2)
B.h4r=new A.q(3,26,3)
B.ab5=new A.q(3,3,3)
B.h4s=new A.q(3,42,70)
B.h4t=new A.q(3,46,90)
B.h4u=new A.q(3,5,3)
B.h4v=new A.q(17.5,1.9,1.5)
B.h4x=new A.q(40,12,2)
B.h4y=new A.q(40,16,18)
B.h4z=new A.q(40,1,14)
B.h4A=new A.q(40,28,1)
B.h4B=new A.q(40,2,104)
B.h4C=new A.q(40,2,24)
B.h4D=new A.q(40,60,40)
B.h4E=new A.q(40,80,3)
B.h4F=new A.q(40,8,104)
B.h4G=new A.q(44,10,2)
B.aXl=new A.q(44,2,14)
B.h4H=new A.q(44,3,22)
B.h4I=new A.q(44,72,20)
B.h4J=new A.q(0.9,0,4.4)
B.h4K=new A.q(8.2,1.9,-7.55)
B.h4L=new A.q(46,10,34)
B.h4M=new A.q(46,3,10)
B.h4N=new A.q(46,3,3)
B.h4O=new A.q(48,2,24)
B.h4P=new A.q(120.6,140,-52)
B.h4Q=new A.q(0,-47.25,-2.25)
B.h4R=new A.q(-147.6,54,45)
B.h4S=new A.q(0.6,68,0.4)
B.h4T=new A.q(64,49,8.4)
B.h4U=new A.q(1.5,28,120)
B.h4V=new A.q(0,1.59,0.14)
B.h4W=new A.q(4,108,0)
B.h4X=new A.q(4,80,104)
B.h4Y=new A.q(4,96,0)
B.h4Z=new A.q(0,-3.4,1)
B.h5_=new A.q(25,79,1.4)
B.h50=new A.q(1,0,-1.2)
B.h51=new A.q(0.6,4,2.4)
B.h52=new A.q(50,12,32)
B.h53=new A.q(50,1,2)
B.h54=new A.q(50,28,42)
B.h55=new A.q(50,4,28)
B.h56=new A.q(51,7,33)
B.h57=new A.q(52,10,22)
B.h58=new A.q(52,56,1)
B.h59=new A.q(54,5,18)
B.h5c=new A.q(56,18,18)
B.h5d=new A.q(56,2,36)
B.h5e=new A.q(56,3,32)
B.h5f=new A.q(56,3,48)
B.h5g=new A.q(1.3,0.4,0.55)
B.h5h=new A.q(58,0,30)
B.h5i=new A.q(58,14,9)
B.h5j=new A.q(58,64,22)
B.h5k=new A.q(58,92,30)
B.h5l=new A.q(58,96,30)
B.h5m=new A.q(58,9,74)
B.h5n=new A.q(0,-0.8,0.9)
B.h5o=new A.q(11.9,0,-8)
B.h5p=new A.q(20,7,34.4)
B.h5q=new A.q(-47,48,3.5)
B.aXm=new A.q(1.6,1.6,0.4)
B.h5r=new A.q(-17.5,1.9,1.5)
B.h5t=new A.q(0.16,0.32,0.07)
B.h5u=new A.q(5,10,5)
B.aXn=new A.q(5,12,26)
B.h5v=new A.q(5,17,2)
B.h5w=new A.q(5,1,2)
B.h5x=new A.q(5,34,24)
B.h5y=new A.q(5,5,5)
B.h5z=new A.q(5,6,10)
B.h5A=new A.q(5,6,3)
B.h5B=new A.q(5,9,8)
B.h5C=new A.q(-120.1,150,0)
B.h5D=new A.q(0,0,3.2)
B.aXo=new A.q(-13,8.6,-9.5)
B.h5E=new A.q(60,12,56)
B.h5F=new A.q(60,12,80)
B.h5G=new A.q(60,16,28)
B.h5H=new A.q(60,30,3)
B.h5J=new A.q(620,300,270)
B.h5K=new A.q(62,11,0)
B.h5L=new A.q(62,18,20)
B.h5M=new A.q(62,22,6)
B.h5N=new A.q(62,5,0)
B.h5O=new A.q(632,10,282)
B.h5P=new A.q(640,8,290)
B.h5Q=new A.q(64,10,0)
B.h5T=new A.q(0,-3.45,4)
B.h5U=new A.q(14,9,0.5)
B.aXp=new A.q(6,14,20)
B.aXq=new A.q(6,14,32)
B.h5V=new A.q(6,28,6)
B.h5W=new A.q(6,4,4)
B.h5X=new A.q(6,6,6)
B.h5Z=new A.q(-150.6,70,160)
B.h6_=new A.q(0,-0.2,0.14)
B.h61=new A.q(120.6,140,-8)
B.h62=new A.q(0.3,38,2)
B.h64=new A.q(700,430,1150)
B.h65=new A.q(70,175,-45)
B.h66=new A.q(70,194,-45)
B.h67=new A.q(70,6,36)
B.h68=new A.q(720,100,105)
B.h69=new A.q(720,360,320)
B.h6a=new A.q(72,32,3)
B.h6b=new A.q(72,-17,70)
B.h6c=new A.q(12,5,0.4)
B.h6d=new A.q(74,20,5)
B.h6e=new A.q(76,2,90)
B.h6f=new A.q(76,8,3)
B.h6g=new A.q(34,30,0.6)
B.h6i=new A.q(1.6,1.7,3.6)
B.h6k=new A.q(-72.8,0,55)
B.h6l=new A.q(-146.4,15,84)
B.h6n=new A.q(25,79,0.2)
B.h6o=new A.q(7,0,-8)
B.h6p=new A.q(7,18,10)
B.h6q=new A.q(7,27,10)
B.h6r=new A.q(7,2,7)
B.aXr=new A.q(7,3,0)
B.h6s=new A.q(7,6,3)
B.h6t=new A.q(7,8,3)
B.aXs=new A.q(7,96,7)
B.h6u=new A.q(2200,0.4,560)
B.h6w=new A.q(0,11,9.2)
B.h6x=new A.q(-3.2,1.3,-7.82)
B.h6y=new A.q(20,0.8,12)
B.h6z=new A.q(80,16,32)
B.h6A=new A.q(80,26,8)
B.h6B=new A.q(80,38,26)
B.h6D=new A.q(80,4,14)
B.h6E=new A.q(80,6,32)
B.aXt=new A.q(147,1.5,3.5)
B.h6F=new A.q(82,46,3)
B.aXu=new A.q(-6.5,6.9,-3)
B.h6G=new A.q(84,10,38)
B.h6H=new A.q(84,18,38)
B.h6I=new A.q(84,84,120)
B.h6J=new A.q(84,8,36)
B.h6K=new A.q(0.93,0.92,1)
B.h6L=new A.q(4.6,4.2,9.5)
B.h6M=new A.q(88,24,28)
B.h6N=new A.q(88,84,3)
B.h6O=new A.q(0.4,6,8)
B.h6P=new A.q(0,-48.6,55)
B.h6Q=new A.q(2.6,2,2.6)
B.h6R=new A.q(5.5,8.5,3)
B.h6S=new A.q(0,0,0.26)
B.h6T=new A.q(120.6,96,-52)
B.h6U=new A.q(20,11,0.7)
B.h6V=new A.q(8,18,8)
B.aXv=new A.q(8,2,16)
B.h6W=new A.q(8,2,6)
B.aXw=new A.q(8,2,8)
B.h6X=new A.q(8,6,6)
B.h6Y=new A.q(8,8,12)
B.h6Z=new A.q(8,9,8)
B.h7_=new A.q(8,9,9)
B.h70=new A.q(-140,62,3.6)
B.h72=new A.q(15,19,0.5)
B.h73=new A.q(900,2,700)
B.h75=new A.q(92,2,32)
B.h76=new A.q(95,26,1)
B.h77=new A.q(95,50,6)
B.h78=new A.q(96,14,38)
B.h79=new A.q(0.4,0.38,0.12)
B.h7a=new A.q(0,0,-0.43)
B.aXx=new A.q(11.2,4.5,-6)
B.aXy=new A.q(1.2,96,112)
B.aXz=new A.q(0.08,3.8,2.4)
B.aXA=new A.q(9,1,9)
B.h7b=new A.q(9,40,4)
B.h7c=new A.q(9,5,9)
B.h7d=new A.q(0,70,-0.6)
B.h7e=new A.q(-34.6,86,69)
B.h7f=new A.q(-3.5,26,15)
B.h7g=new A.q(34,6,0.6)
B.h7h=new A.q(1.5,1.3,0.6)
B.h7i=new A.q(-120.6,96,-8)
B.h7j=new A.q(0,1.9,-0.7)
B.h7l=new A.q(0,-1.78,0.27)
B.aXB=new A.q(1.2,9,1.2)
B.h7m=new A.q(0,0.62,0)
B.h7n=new A.q(5.5,1.4,12)
B.h7o=new A.q(-50,0.6,50)
B.h7r=new A.q(20,11.5,0)
B.h7s=new A.q(20,66,1.4)
B.h7t=new A.q(3.2,0.12,-6.7)
B.h7u=new A.q(12,0,-8.1)
B.h7w=new A.q(-34.6,86,7)
B.aXC=new A.q(0,0,3.4)
B.h7x=new A.q(1.25,0.28,0.1)
B.h7y=new A.q(100,38,0.7)
B.h7z=new A.q(0,36,10.2)
B.h7A=new A.q(24,0.08,16)
B.h7B=new A.q(34,1.4,1.4)
B.h7D=new A.q(0,4,-7.9)
B.h7E=new A.q(11.9,0,8)
B.h7F=new A.q(0,41.5,-4.9)
B.h7G=new A.q(-26,146,0.6)
B.aXD=new A.q(0.8,1.7,0.78)
B.h7I=new A.q(21,1.4,8)
B.h7J=new A.q(0.8,0.8,1.6)
B.h7K=new A.q(1.4,1,1)
B.h7L=new A.q(30,36,0.8)
B.h7N=new A.q(71.2,46.6,55)
B.h7O=new A.q(3,3.28,-7.2)
B.h7P=new A.q(4.1,3.4,0.12)
B.h7Q=new A.q(1.4,0.3,1)
B.h7R=new A.q(0,-1.7,1.6)
B.h7S=new A.q(0,42,1.5)
B.h7T=new A.q(-6.1,1.2,-6.4)
B.h7U=new A.q(1.4,26,0.4)
B.h7V=new A.q(76,0.6,4)
B.h7X=new A.q(26,0.3,130)
B.h7Y=new A.q(0,-45.5,0.5)
B.h7Z=new A.q(1.8,4,1)
B.h8_=new A.q(5,1.6,0.5)
B.h81=new A.q(18,10,0.6)
B.h82=new A.q(0,11,8.5)
B.h83=new A.q(0.1,-2,2.4)
B.h84=new A.q(302.4,1.2,322)
B.h85=new A.q(-1,33.4,-4.9)
B.h86=new A.q(0,0.2,2.8)
B.h87=new A.q(6,10,1.4)
B.h88=new A.q(0.95,0.95,1)
B.h89=new A.q(24,32,0.8)
B.h8a=new A.q(0,10,5.2)
B.h8b=new A.q(0,-1.2,4.7)
B.h8c=new A.q(18.9,2.6,0)
B.h8d=new A.q(-2200,0.4,720)
B.h8e=new A.q(66,89,3.8)
B.h8f=new A.q(-12,0,-8.1)
B.h8g=new A.q(3,11,0.5)
B.h8h=new A.q(0.42,0.07,0.03)
B.h8i=new A.q(0,70,320.6)
B.h8j=new A.q(0,120,278.6)
B.h8k=new A.q(11.8,4,0)
B.h8l=new A.q(0.97,0.18,2.25)
B.h8m=new A.q(0,6.6,-0.6)
B.h8n=new A.q(58,96,31.7)
B.h8o=new A.q(14,20,1.2)
B.aXF=new A.q(-71.7,6,55)
B.h8p=new A.q(0,-3.75,4.15)
B.h8r=new A.q(64,57,8.4)
B.h8s=new A.q(5.6,0.3,1.9)
B.h8t=new A.q(0.34,0.05,0.02)
B.h8w=new A.q(52,8,0.4)
B.h8x=new A.q(0,14,51.2)
B.h8y=new A.q(4.6,7.6,3)
B.h8z=new A.q(-1,0,-1.2)
B.h8A=new A.q(0,1.7,0)
B.h8B=new A.q(0,1.8,-0.9)
B.h8D=new A.q(-1,0,1.5)
B.h8E=new A.q(27,19,0.4)
B.h8F=new A.q(32,6,1.2)
B.h8G=new A.q(90,2,0.5)
B.h8H=new A.q(-17,98,77.2)
B.h8I=new A.q(5,8,0.4)
B.h8J=new A.q(0,98,6.6)
B.h8K=new A.q(5,14,8.5)
B.h8L=new A.q(5,2.2,0.8)
B.h8M=new A.q(-120.6,140,-52)
B.h8N=new A.q(-2200,0.4,560)
B.h8O=new A.q(0.18,0.12,0.08)
B.h8P=new A.q(50,0.6,50)
B.h8Q=new A.q(147,3,1.4)
B.h8R=new A.q(20,0.6,50)
B.h8S=new A.q(0,6.6,0)
B.h8T=new A.q(4,16.2,0)
B.h8U=new A.q(60,0.4,12)
B.h8V=new A.q(10,15,0.5)
B.h8W=new A.q(144,5,0.7)
B.h8X=new A.q(1.2,-1.7,2.3)
B.h8Y=new A.q(0.42,1.95,0.07)
B.h8Z=new A.q(31.5,23,0)
B.h9_=new A.q(0,0.9,0)
B.h90=new A.q(2.4,2.4,70)
B.h91=new A.q(-120.6,140,-8)
B.h93=new A.q(-146.4,15,172)
B.h94=new A.q(0.82,1.7,0.3)
B.h95=new A.q(0.55,0.45,0.35)
B.h96=new A.q(47,7,34.4)
B.h97=new A.q(-0.12,0,0)
B.h99=new A.q(3.5,94,0.2)
B.h9a=new A.q(1.1,2.05,0.04)
B.h9b=new A.q(32,0.8,26)
B.h9c=new A.q(25,79,1.2)
B.h9d=new A.q(1.2,3.6,18)
B.ab6=new A.q(0.7,0.14,0.06)
B.h9e=new A.q(10,14,0.5)
B.h9f=new A.q(0,138.8,95)
B.h9g=new A.q(0,35.5,-4.9)
B.h9h=new A.q(5,8,0.5)
B.ab7=new A.q(1.1,0.5,0.7)
B.h9i=new A.q(-20,11.5,0)
B.h9j=new A.q(0,1.1,0)
B.h9k=new A.q(0,-0.5,0.6)
B.h9l=new A.q(32,6,0.5)
B.h9m=new A.q(0,1.4,0)
B.h9n=new A.q(58,130,277.7)
B.h9p=new A.q(1,3,0.8)
B.h9q=new A.q(0,3.4,0.8)
B.h9s=new A.q(0.1,0.1,0.1)
B.h9t=new A.q(0,-0.6,38)
B.h9u=new A.q(0,-10.5,1.5)
B.h9v=new A.q(-0.85,4,-3.2)
B.h9x=new A.q(-7.1,19,4)
B.h9y=new A.q(0,58,-14.2)
B.h9z=new A.q(40,7.2,1.2)
B.aXG=new A.q(0.42,0.34,0.12)
B.h9A=new A.q(1.7,0.08,1.2)
B.h9B=new A.q(-58,110,277.7)
B.h9C=new A.q(8.6,0.5,3.4)
B.h9D=new A.q(0,0,0.38)
B.h9F=new A.q(5.2,3.9,-7.76)
B.h9G=new A.q(1.15,0.42,0.7)
B.h9I=new A.q(146.2,52,120)
B.h9J=new A.q(30,22,0.8)
B.h9K=new A.q(2.6,0.45,0.5)
B.h9L=new A.q(0.07,0.3,0.03)
B.h9N=new A.q(0,-0.55,0.36)
B.h9O=new A.q(41.5,11,12)
B.h9P=new A.q(36.2,60,38)
B.h9R=new A.q(20,1.4,8)
B.h9S=new A.q(75.4,24,0)
B.h9T=new A.q(124,26,1.6)
B.h9U=new A.q(0,-0.2,0.19)
B.h9V=new A.q(-20,0.6,-50)
B.h9W=new A.q(1.3,0.26,0.6)
B.h9Y=new A.q(1.2,49,36)
B.h9Z=new A.q(0,9.3,0)
B.ha0=new A.q(0,-1.45,0)
B.ha1=new A.q(9,12,0.6)
B.ha2=new A.q(0,-0.6,160)
B.aXH=new A.q(1.4,3,1.6)
B.ha3=new A.q(0,40,0.95)
B.ha4=new A.q(28,0.8,22)
B.ha5=new A.q(11,3,0.5)
B.ha6=new A.q(34.6,34,7)
B.ha7=new A.q(190,0.6,90)
B.ha8=new A.q(0,-1.9,-1.2)
B.ha9=new A.q(-3.2,1.15,-7.78)
B.haa=new A.q(0,-3.4,1.2)
B.hab=new A.q(64,10,0.2)
B.hac=new A.q(0,-1.78,0.53)
B.had=new A.q(0.8,2.6,0.3)
B.aXI=new A.q(-6.5,7.4,-3)
B.hae=new A.q(1,1.05,0.75)
B.haf=new A.q(0,76,1.1)
B.hag=new A.q(1.35,0.32,0.5)
B.hah=new A.q(-4.6,-2,1.2)
B.haj=new A.q(0,40,1.4)
B.aXK=new A.q(0.6,32,34)
B.hak=new A.q(-3,36,10.6)
B.ham=new A.q(0,0.2,0)
B.hao=new A.q(2.5,30,2.5)
B.hap=new A.q(160,1.2,120)
B.haq=new A.q(7,40,2.4)
B.har=new A.q(30,26,0.6)
B.has=new A.q(3.4,3.25,-7.85)
B.hat=new A.q(0,-0.2,-0.1)
B.hau=new A.q(72.8,0,55)
B.hav=new A.q(0.5,62,30)
B.haw=new A.q(0,76,37.8)
B.hax=new A.q(58,110,277.7)
B.hay=new A.q(146.4,62,120)
B.haz=new A.q(34.6,86,7)
B.haA=new A.q(2.2,1.1,6.4)
B.haB=new A.q(0,0,0.46)
B.haC=new A.q(17,98,77.2)
B.haD=new A.q(3,1.55,-7.1)
B.haE=new A.q(0.4,3,3)
B.aXM=new A.q(0,-0.1,0.1)
B.haF=new A.q(-52,96,-60.6)
B.haG=new A.q(0,0,0.04)
B.haI=new A.q(0,14,-19.3)
B.haJ=new A.q(2.4,11.6,-3.6)
B.haK=new A.q(4,11,3.5)
B.haM=new A.q(5,8.6,-2.25)
B.haN=new A.q(0,-1.78,0.3)
B.haO=new A.q(2.2,2.2,1.8)
B.haP=new A.q(0.1,1.35,0.2)
B.haQ=new A.q(0,1.9,-1.2)
B.haR=new A.q(0,56,2.1)
B.haS=new A.q(0.26,0.04,0.02)
B.haT=new A.q(-2.4,11.6,-3.6)
B.haU=new A.q(11.25,0,-2.25)
B.haV=new A.q(0,3.7,1.4)
B.haW=new A.q(1,-1.8,2.4)
B.haX=new A.q(-26,43,3.8)
B.haY=new A.q(-60,15,3.6)
B.haZ=new A.q(20,0.6,-50)
B.hb_=new A.q(-11.8,4,0)
B.hb0=new A.q(1.2,4,7)
B.hb1=new A.q(11.2,4.7,-6)
B.hb2=new A.q(66,43,3.8)
B.aXN=new A.q(0,2.8,0)
B.hb3=new A.q(24,8,0.05)
B.aXO=new A.q(86,52,1.4)
B.hb5=new A.q(0.12,0,0)
B.hb6=new A.q(2.7,0.22,0.45)
B.hb7=new A.q(1.1,1.1,0.03)
B.hb8=new A.q(-50,0.6,-50)
B.hb9=new A.q(-26,94,0.6)
B.hba=new A.q(0,32,320.9)
B.hbb=new A.q(0,5,1.1)
B.hbc=new A.q(4.6,5.4,3.2)
B.hbd=new A.q(3.4,3.55,-7.85)
B.hbf=new A.q(71.6,-22,62)
B.hbg=new A.q(0,3,1.2)
B.hbh=new A.q(22,18,0.4)
B.hbi=new A.q(-20,0.6,50)
B.aXP=new A.q(1.5,18,3.5)
B.aXQ=new A.q(0,1.5,-0.9)
B.hbl=new A.q(-0.28,0.55,-0.8)
B.hbm=new A.q(0,-0.2,0.24000000000000002)
B.hbo=new A.q(0,-3.3,4)
B.hbp=new A.q(46,0.8,46)
B.hbq=new A.q(1,-0.2,0.14)
B.hbr=new A.q(0,137,1.6)
B.aXR=new A.q(84,3,0.5)
B.hbs=new A.q(-1.9,0,-2.25)
B.hbt=new A.q(0,-0.9,1.1)
B.hbu=new A.q(1.1,0.4,0.6)
B.hbv=new A.q(8.2,1.05,-6.7)
B.hbw=new A.q(0,9.6,11.6)
B.hby=new A.q(34.6,34,69)
B.hbA=new A.q(-149.3,38,128)
B.hbB=new A.q(0.07,0.4,0.03)
B.hbC=new A.q(2,3.8,0.08)
B.hbD=new A.q(31,83,0.9)
B.hbE=new A.q(64,40,-3.2)
B.hbF=new A.q(0.95,0.62,2.2)
B.aXS=new A.q(1.4,3,112)
B.hbG=new A.q(1,33.4,-4.9)
B.hbH=new A.q(0,0.3,314)
B.aXT=new A.q(302.4,140,1.2)
B.hbI=new A.q(0,46.6,0.8)
B.hbK=new A.q(6.5,6.4,13)
B.hbL=new A.q(0,0,-8.8)
B.hbM=new A.q(0,0.7,-1)
B.hbP=new A.q(-11.9,0,8)
B.hbQ=new A.q(7,0,1.5)
B.hbR=new A.q(-8.4,0.7,-6.4)
B.hbS=new A.q(-3.2,1.45,-7.78)
B.hbT=new A.q(34,25,21.6)
B.hbU=new A.q(0,41,0.45)
B.hbV=new A.q(-6.575,0,-0.25)
B.hbW=new A.q(1.7,1,0.6)
B.hbX=new A.q(0.07,0.42,0.03)
B.hc_=new A.q(3.7,1.35,0.5)
B.aXV=new A.q(0,0,-2.3)
B.aba=new A.q(-13,12.5,0)
B.hc0=new A.q(0,0,0.62)
B.hc1=new A.q(-60,62,3.6)
B.hc2=new A.q(0.2,-0.3,-0.4)
B.aXW=new A.q(10.85,18,0.5)
B.hc3=new A.q(120.1,174,-30)
B.hc4=new A.q(0.6,70,0.6)
B.hc5=new A.q(1.4,1.3,0.02)
B.hc6=new A.q(30,1.4,0.4)
B.hc7=new A.q(6.3,1.5,-7.2)
B.hc8=new A.q(8,14,1.2)
B.hc9=new A.q(-120.1,150,-60)
B.hca=new A.q(0,5,11.2)
B.aXX=new A.q(0,0.62,2.85)
B.hcb=new A.q(37.5,23,0)
B.aXY=new A.q(0.05,8,16)
B.hcc=new A.q(0,-1.2,5)
B.hcd=new A.q(0.2,-2,2.6)
B.hcf=new A.q(0,-3.15,4.2)
B.hch=new A.q(11.2,2.4,-5.18)
B.hcj=new A.q(-1,-0.2,0.14)
B.hck=new A.q(0.97,0.9,1.04)
B.hcl=new A.q(-17,83,77.2)
B.hcm=new A.q(0.5,8,6)
B.hcn=new A.q(1.2,1.2,0.3)
B.aY_=new A.q(2,0.08,2.4)
B.hcp=new A.q(9.5,13.5,1.4)
B.hcq=new A.q(24,14,0.8)
B.hcr=new A.q(2.2,18,2.2)
B.hcs=new A.q(22,0.2,0.8)
B.hct=new A.q(-0.32,0,0.5)
B.aY0=new A.q(1.3,4,0.8)
B.hcv=new A.q(-26,89,3.8)
B.hcw=new A.q(-120.1,174,-30)
B.hcx=new A.q(0.8,0.55,0.05)
B.hcy=new A.q(0.14,0.35,17)
B.hcz=new A.q(1.4,2.4,0.3)
B.hcA=new A.q(0,11,8.2)
B.hcB=new A.q(52,96,-60.6)
B.hcC=new A.q(26,146,0.6)
B.hcD=new A.q(3.2,5,0.8)
B.hcE=new A.q(0,24,-0.6)
B.hcH=new A.q(-58,130,277.7)
B.hcI=new A.q(150,0.6,90)
B.hcJ=new A.q(0,11.5,19.3)
B.hcK=new A.q(0,1.95,0.31)
B.hcL=new A.q(150,1.2,112)
B.aY1=new A.q(0.75,4.5,0.1)
B.hcN=new A.q(0.12,0,0.05)
B.hcP=new A.q(0,6.2,0)
B.hcQ=new A.q(-34.6,34,69)
B.hcR=new A.q(9,1.2,9)
B.hcS=new A.q(120.1,150,-60)
B.hcT=new A.q(0,-0.5,0)
B.hcW=new A.q(0,37.5,-4.9)
B.hcX=new A.q(-2.4,14,8)
B.hcY=new A.q(-190,160,-14.2)
B.hcZ=new A.q(0,0,3.6)
B.hd_=new A.q(3,14,1.5)
B.hd0=new A.q(5.5,8.5,0.5)
B.aY2=new A.q(0.05,8,9.6)
B.hd2=new A.q(1.5,94,3.5)
B.hd3=new A.q(0,8.2,0)
B.hd4=new A.q(0,12.6,10.2)
B.hd5=new A.q(-120.6,96,-52)
B.hd7=new A.q(4,94,0.4)
B.aY3=new A.q(1.4,8,1)
B.hd8=new A.q(120.6,96,-8)
B.hd9=new A.q(114,30,0.4)
B.hda=new A.q(0,-1.45,0.3)
B.hdb=new A.q(3.7,1.2,-7.1)
B.hdc=new A.q(1.5,1.35,1.5)
B.hdd=new A.q(8.2,0.05,-6.7)
B.hde=new A.q(0,-0.3,0)
B.hdf=new A.q(6.575,0,-0.25)
B.aY4=new A.q(150.6,70,160)
B.hdg=new A.q(52,140,-60.6)
B.aY5=new A.q(0,1.8,0)
B.hdh=new A.q(100,14,0.6)
B.hdi=new A.q(9,5,0.6)
B.hdj=new A.q(34,2,0.8)
B.hdl=new A.q(26,94,0.6)
B.hdm=new A.q(9.8,5,-7.75)
B.aY6=new A.q(0,2.4,0)
B.hdn=new A.q(1.5,3.5,112)
B.hdo=new A.q(-8,31.5,6)
B.hdq=new A.q(22,7,34.4)
B.hdr=new A.q(3,1.85,-7.1)
B.hdt=new A.q(40,1.4,60)
B.hdw=new A.q(34,3,0.8)
B.hdx=new A.q(16,0.4,16)
B.abc=new A.q(13,12.5,0)
B.hdz=new A.q(0.34,0.66,0.9)
B.hdB=new A.q(0.9,1.08,0.98)
B.hdC=new A.q(12,0.4,6)
B.hdD=new A.q(-6.5,7.9,-3)
B.hdE=new A.q(1.5,1.5,0.05)
B.hdF=new A.q(-6.5,5,-3)
B.hdG=new A.q(58.4,1.6,50)
B.hdH=new A.q(1.05,0.95,1)
B.hdI=new A.q(16,22,0.6)
B.hdJ=new A.q(0.02,0.28,0.05)
B.hdL=new A.q(0,0.7,1)
B.hdM=new A.q(26,22,1.4)
B.hdN=new A.q(0,9.5,-7)
B.aY7=new A.q(13,8.6,9.5)
B.hdP=new A.q(-140,15,3.6)
B.hdQ=new A.q(1.3,0.95,0.6)
B.hdR=new A.q(5,5,0.8)
B.hdS=new A.q(-3.6,4,-7.76)
B.hdT=new A.q(-1.15,1.18,0.45)
B.hdU=new A.q(0,-8,10.2)
B.hdV=new A.q(0.82,0.9,0.05)
B.hdW=new A.q(0,-5.5,-0.25)
B.hdX=new A.q(0,11,21.2)
B.aY8=new A.q(0,19.2,-2.3)
B.hdZ=new A.q(34.6,86,69)
B.he_=new A.q(64,50,6.6)
B.he0=new A.q(-34,40,36.4)
B.he1=new A.q(2.2,1.8,2)
B.he3=new A.q(190,160,-14.2)
B.he5=new A.q(0,0.6,0)
B.he8=new A.q(1.9,0,0)
B.he9=new A.q(0.45,0.72,0.06)
B.hea=new A.q(95,26,1.8)
B.hec=new A.q(14,0.4,7)
B.hed=new A.q(64,24,-3.2)
B.abd=new A.q(1.2,140,320)
B.hee=new A.q(1,4.5,0.8)
B.hef=new A.q(120.1,150,0)
B.heg=new A.q(0,0.03,0)
B.heh=new A.q(-100,100,320)
B.hej=new A.q(-100,400,350)
B.hek=new A.q(-10,22,0)
B.hen=new A.q(-110,96,120)
B.heo=new A.q(-112,38,24)
B.hep=new A.q(-120,0,-30)
B.heq=new A.q(-120,300,-320)
B.her=new A.q(-125,16,30)
B.hes=new A.q(-13,15,2)
B.het=new A.q(-144,82,45)
B.heu=new A.q(-147,54,45)
B.hev=new A.q(-148,56,120)
B.hew=new A.q(-14,17,4)
B.hex=new A.q(-14,20,-28)
B.hey=new A.q(-18,6,0)
B.r0=new A.q(-1,0,0)
B.hez=new A.q(-1,0,-8)
B.heA=new A.q(-200,0,500)
B.heB=new A.q(-200,0,900)
B.heC=new A.q(-200,100,480)
B.heE=new A.q(-20,4,26)
B.heF=new A.q(-20,92,26)
B.heG=new A.q(-22,14,0)
B.heH=new A.q(-24,38,0)
B.heI=new A.q(-260,330,-80)
B.heJ=new A.q(-3000,0,3000)
B.heK=new A.q(-3000,0,-3000)
B.heN=new A.q(-30,36,38)
B.heO=new A.q(-30,40,100)
B.heP=new A.q(-30,44,33)
B.heR=new A.q(-330,40,760)
B.heS=new A.q(-34,34,38)
B.heT=new A.q(-34,40,38)
B.heU=new A.q(-37,16,0)
B.heV=new A.q(-37,50,38)
B.heW=new A.q(-380,470,1300)
B.heX=new A.q(-390,144,-120)
B.heY=new A.q(-390,70,-120)
B.heZ=new A.q(-40,12,150)
B.hf_=new A.q(-40,30,164)
B.hf1=new A.q(-42,-34,96)
B.hf2=new A.q(0,-0.6,22)
B.hf3=new A.q(-4,20,0)
B.hf4=new A.q(-4,22,150)
B.aY9=new A.q(-4,22,8)
B.hf7=new A.q(-5,17,0)
B.hf8=new A.q(0,36.5,0)
B.hf9=new A.q(-60,28,56)
B.hfc=new A.q(-60,50,1)
B.hfd=new A.q(-60,70,6)
B.hfe=new A.q(-700,430,1150)
B.hfg=new A.q(-70,0,34)
B.hfh=new A.q(-70,95,34)
B.hfi=new A.q(-70,96,34)
B.hfj=new A.q(-720,360,320)
B.hfk=new A.q(-72,6,55)
B.hfl=new A.q(-80,12,30)
B.hfm=new A.q(-80,25,30)
B.hfq=new A.q(-8,24,0)
B.hfr=new A.q(-8,25,0)
B.hfs=new A.q(-8,42,-5)
B.hft=new A.q(-8,-28,104)
B.hfu=new A.q(-8,-39,96)
B.hfw=new A.q(0,0.35,0.78)
B.hfx=new A.q(0.6,6,14)
B.hfy=new A.q(-11.9,0,-8)
B.hfz=new A.q(32,3,0.5)
B.hfA=new A.q(38,1.4,12)
B.hfB=new A.q(25,0.5,66)
B.hfC=new A.q(-8.4,1.9,-7.2)
B.hfD=new A.q(1.6,8,5)
B.hfE=new A.q(0.8,1.6,1.4)
B.hfG=new A.q(25,6,0.2)
B.hfH=new A.q(14,0.3,14)
B.aYa=new A.q(1.25,1,0.1)
B.hfI=new A.q(11.2,0,-6)
B.hfJ=new A.q(-146.4,62,172)
B.hfK=new A.q(0.4,7,9)
B.hfL=new A.q(1.2,1.1,0.8)
B.hfN=new A.q(150,49,1.2)
B.hfO=new A.q(41.5,11,-12)
B.hfP=new A.q(62,0.2,42)
B.hfQ=new A.q(4.6,1.5,-3.6)
B.hfR=new A.q(0,-0.7,0.8)
B.hfS=new A.q(0,15.55,-3.6)
B.hfT=new A.q(0.6,9,9)
B.hfU=new A.q(8.9,1.9,0.9)
B.hfV=new A.q(42,84,1.2)
B.hfW=new A.q(-34.6,34,7)
B.hfX=new A.q(60,15,3.6)
B.aYb=new A.q(1.6,58,66)
B.hfY=new A.q(0,-1.55,-0.6)
B.hfZ=new A.q(36.2,32.2,0.6)
B.hg_=new A.q(1.78,4.25,0.08)
B.hg0=new A.q(27,0.6,19)
B.hg1=new A.q(1.4,52,96)
B.hg2=new A.q(0,5.5,-0.25)
B.hg3=new A.q(28,2.5,26)
B.hg4=new A.q(0,0.7,0)
B.hg5=new A.q(-1.2,-1.6,2.2)
B.hg6=new A.q(11,25,0.3)
B.hg7=new A.q(17,83,77.2)
B.aYc=new A.q(-12,14,19.4)
B.aYd=new A.q(13,8.6,-9.5)
B.aYe=new A.q(0.05,0.12,0.03)
B.aYf=new A.q(8.2,0.95,-6.7)
B.hg8=new A.q(0,-2.5,0)
B.hg9=new A.q(40,1.2,22)
B.hga=new A.q(26,1.2,1.2)
B.hgb=new A.q(0.7,1.5,-7.2)
B.hgc=new A.q(0,-1,4.9)
B.hgd=new A.q(0,0.35,0.18)
B.hge=new A.q(62,2.4,8)
B.hgf=new A.q(-1.6,11,6)
B.hgg=new A.q(0.1,0,0)
B.hgh=new A.q(0.32,0,0.5)
B.hgi=new A.q(2200,0.4,720)
B.hgj=new A.q(1.6,11,6)
B.hgk=new A.q(-10,0.5,150)
B.hgm=new A.q(-60,50,1.8)
B.hgn=new A.q(-0.9,0,4.4)
B.hgo=new A.q(-6.5,7.2,-3)
B.hgq=new A.q(300,6,1.6)
B.hgr=new A.q(76,64,0.6)
B.hgs=new A.q(7.1,18,-3)
B.hgu=new A.q(0.45,1.3,0.9)
B.hgv=new A.q(74,1.2,90)
B.hgw=new A.q(15.5,2.6,0)
B.hgy=new A.q(-8,-47.8,70)
B.hgz=new A.q(14,1.5,3.5)
B.hgA=new A.q(0,0,0.5)
B.aYg=new A.q(17,24,0.3)
B.hgB=new A.q(5.2,3.9,-7.82)
B.hgC=new A.q(0,0.7,2.4)
B.hgD=new A.q(0,0.3,0)
B.aYh=new A.q(2.3,7,0.5)
B.hgF=new A.q(0,66,1.8)
B.aYi=new A.q(-13,8.6,9.5)
B.hgI=new A.q(0.6,28,52)
B.hgJ=new A.q(6.5,6,14)
B.hgK=new A.q(0,4.2,2.4)
B.hgL=new A.q(0,-1.99,0.14)
B.hgM=new A.q(0.4,36,34)
B.hgO=new A.q(4.6,-2,1.2)
B.hgP=new A.q(0,14,19.3)
B.aYj=new A.q(0,0,-2.4)
B.hgQ=new A.q(1.3,0.8,0.9)
B.hgR=new A.q(-36.2,60,38)
B.hgS=new A.q(110,18,0.6)
B.hgT=new A.q(0,-1.78,0.52)
B.hgU=new A.q(120,1.4,150)
B.hgV=new A.q(0.12,0.1,0.03)
B.hgW=new A.q(9.8,5,-7.58)
B.hgX=new A.q(14,1.5,5)
B.hgY=new A.q(0.95,2.3,0.5)
B.aYk=new A.q(0.5,1.4,2)
B.hgZ=new A.q(3.5,0.15,-7.2)
B.aYl=new A.q(64,2,1.2)
B.hh_=new A.q(1.2,26.4,20)
B.hh0=new A.q(-3.6,4,-7.82)
B.hh1=new A.q(-3,37,-4.9)
B.hh2=new A.q(0.3,2,36)
B.hh5=new A.q(24,0.8,6.5)
B.hh6=new A.q(-28,76,38.3)
B.hh7=new A.q(300,1.2,200)
B.hh9=new A.q(22,0.5,5)
B.hha=new A.q(9,10,0.6)
B.hhb=new A.q(0,22,2.1)
B.hhe=new A.q(0,56,0.5)
B.hhf=new A.q(150,1.2,70)
B.hhg=new A.q(0,-5.5,-3.4)
B.hhh=new A.q(58,104,31.7)
B.hhi=new A.q(100,52,2.4)
B.hhj=new A.q(2.1,0.4,0.5)
B.aYm=new A.q(0.4,29,31)
B.hhk=new A.q(0,-0.6,180)
B.hhl=new A.q(0,0.8,-1.3)
B.hhm=new A.q(-19.5,-1,-1.5)
B.hhn=new A.q(80,0.5,60)
B.hho=new A.q(0,10.45,0)
B.hhp=new A.q(6.85,4,-3.2)
B.hhq=new A.q(52,58,0.6)
B.hhr=new A.q(0,14.4,0)
B.aYo=new A.q(0.12,3,1.9)
B.hhs=new A.q(0.06,0.62,0.8)
B.hht=new A.q(0,18.5,0)
B.hhu=new A.q(0,1.18,0.45)
B.hhv=new A.q(50,0.6,-50)
B.hhx=new A.q(96,56,1.6)
B.hhy=new A.q(9.55,5.7,-7.5)
B.hhA=new A.q(-400,80,-19.2)
B.hhB=new A.q(0.8,2.4,0.3)
B.aYp=new A.q(0,0.7,2)
B.hhC=new A.q(3.5,26,15)
B.hhD=new A.q(0.95,0.62,1)
B.aYq=new A.q(0,24,40.2)
B.hhE=new A.q(0.8,1.1,1.2)
B.hhF=new A.q(0,51.5,20)
B.hhG=new A.q(0,0.3,4.3)
B.hhH=new A.q(-20,0.5,145)
B.hhI=new A.q(1.15,1.18,0.45)
B.hhJ=new A.q(2.4,14,8)
B.hhK=new A.q(0,47.25,-2.25)
B.hhL=new A.q(-8,31.5,-6)
B.hhM=new A.q(0.5,0.5,0.04)
B.hhN=new A.q(12.5,39,0.6)
B.hhO=new A.q(140,62,3.6)
B.hhP=new A.q(0,3,0.9)
B.hhQ=new A.q(0,-1.45,0.32)
B.hhR=new A.q(9,0.7,15)
B.hhS=new A.q(3,36,10.6)
B.hhT=new A.q(25,10,0.2)
B.hhV=new A.q(0.14,8,0.3)
B.hhW=new A.q(3,0.6,0)
B.hhX=new A.q(11,15,0.3)
B.hi_=new A.q(0.6,0.12,0.03)
B.hi0=new A.q(-10.7,1.2,-6.4)
B.hi1=new A.q(-52,140,-60.6)
B.hi2=new A.q(-71.2,46.6,55)
B.hi3=new A.q(5,4.5,3)
B.hi4=new A.q(120,36,1.4)
B.hi5=new A.q(0,3.9,2.5)
B.aYr=new A.q(0,3.7,2.6)
B.hi8=new C.bR("phase-chip",x.W)
B.hi9=new C.bR("room-tray",x.W)
B.hib=new C.bR("screw-row",x.W)
B.hid=new C.bR("lessons-search-field",x.W)
B.hii=new C.bR("lessons-search",x.W)
B.hio=new C.bR("tray-show-all",x.W)
B.hiz=new C.bR("turned-page-rotate",x.W)
B.hiJ=new C.bR("work-row",x.W)
B.hj5=new A.axQ("bonded","The ground strap is still on the terminal block, so the neutral is joined to the metal frame of the appliance. On a 4-wire cord the strap must come off: the frame is grounded by the green wire, and the neutral carries current.",!0,!1,!1,"none","Take the metal ground strap off the terminal block.")
B.VN=new A.FU(0,"hot")
B.VO=new A.FU(1,"neutral")
B.VP=new A.FU(2,"ground")
B.aYK=new A.FU(3,"unknown")
B.ePq=new C.z(-20,46)
B.hmb=new A.AA(B.ePq,0,2.4,"Having the drink",!0,!1,!1,"")
B.exJ=new C.z(34,62)
B.hmc=new A.AA(B.exJ,3.141592653589793,2.2,"Picking up the remote",!1,!0,!1,"")
B.hmk=new A.aBP(null)
B.hxu=new A.f_M(0,"material")})();(function staticFields(){$.dM=0
$.ajq=!1
$.ajr=!0
$.hf5=!1
$.h2e=C.U(x.N,C.at("MD"))
$.h2d=C.U(x.N,C.at("aB<MD?>"))
$.h2c=C.aX(x.N)
$.i8T=C.U(x.N,C.at("ai<+(q,q)>"))
$.i8R=C.U(x.N,x.dg)
$.huV=C.U(x.N,C.at("iN"))
$.a4i=null
$.Ed=null
$.blx=null
$.Wa=null
$.hlf=null
$.ftQ=C.U(x.S,C.at("ai<kq>"))
$.ahK="xbot"})();(function lazyInitializers(){var w=a.lazyFinal
w($,"itd","hD1",()=>C.bPO())
w($,"itp","hdq",()=>C.bPO())
w($,"io7","hAx",()=>new A.aTK($.ax()))
w($,"ivN","bG0",()=>{var v,u,t=C.at("O<aTJ>"),s=C.a([],t)
for(v=0;v<2;++v){u=v*9
D.d.v(s,C.a([A.h1o(v,175,u),A.h1o(v,612,u+14),A.h1o(v,1013,u+7)],t))}return s})
w($,"ivo","h0z",()=>C.a([A.hqe(-80,80,400,565),A.hqe(-80,80,715,885)],C.at("O<bxy>")))
w($,"io8","aRM",()=>A.hGo())
w($,"ivM","hEr",()=>{var v=C.a([A.oo("Wire a standard 120 volt receptacle: black to brass, white to silver, bare copper to green.",B.RQ,B.drw,"outlet","",!0,B.ID,B.cYR,!1,"Wall outlet",new A.fDQ()),A.oo("A single-pole switch breaks the hot wire to the light: two black wires go on the two brass screws.",B.dd5,B.deA,"switch","",!0,B.ID,B.cXe,!1,"Light switch",new A.fDR()),A.oo("A GFCI protects you near water. Power comes in on LINE. The LOAD screws (covered with tape) feed other outlets.",B.RQ,B.dhx,"gfci","",!0,B.ID,B.dg2,!1,"GFCI outlet",new A.fDS()),A.oo("Join the house wires to the fixture wires with wire nuts: black to black, white to white, ground to ground.",B.RQ,B.d86,"light","",!0,B.ID,B.dtd,!1,"Ceiling light",new A.fDT()),A.oo("A fan hangs from a strong fan-rated box. Join black, white and ground with wire nuts, then fasten the canopy.",B.RQ,B.dfp,"fan","",!0,B.ID,B.d4_,!1,"Ceiling fan",new A.fDU())],C.at("O<Ms>"))
D.d.v(v,$.h0F())
return v})
w($,"ivO","h0F",()=>{var v="switch",u="outlet",t=C.a([A.oo("Breaks BOTH hot legs of a 240 volt circuit at once: water heaters and baseboard heat.",B.dw9,B.c6Z,"switch2p",v,!0,B.dyC,B.d8i,!0,"Double-pole switch (240 V)",new A.fDV()),A.oo("One light, two switches. One COMMON screw and two TRAVELER screws; it pairs with a second three-way.",B.dpr,B.cYA,"switch3",v,!0,B.dyT,B.dg5,!0,"Three-way switch",new A.fDW()),A.oo("Sits in the middle of two three-way switches: two traveler wires in on one side, two out on the other.",B.duA,B.dj_,"switch4",v,!0,B.dyD,B.dof,!0,"Four-way switch",new A.fDX()),A.oo("Needs a NEUTRAL wire in the box as well: hot in, hot out to the light, neutral and ground.",B.d2J,B.d5D,"switchsmart",v,!0,B.dyU,B.d30,!0,"Smart, motion or timer switch",new A.fDY()),A.oo("Two switches in one device: one hot feed is split between them, and two separate lights come out.",B.cLr,B.dmp,"switchcombo",v,!0,B.dAC,B.cyw,!0,"Combination (double) switch",new A.fDZ()),A.oo("The tab between the brass screws is broken off: the top half is switched, the bottom half is always on.",B.dfZ,B.cxV,"split",u,!0,B.dyV,B.dlk,!0,"Split (half-switched) outlet",new A.fE_()),A.oo("Two hots, a neutral and a ground: the dryer 14-30, and the range and car charger 14-50.",B.a5t,B.d1m,"v240four",u,!0,B.a60,B.cPQ,!0,"4-wire 240 V outlet (dryer, range, EV)",new A.fE0()),A.oo("Two hots and a neutral, with no separate ground: the old 10-30 and 10-50, from before 1996.",B.a4B,B.dv5,"v240three",u,!1,B.a67,B.duh,!0,"3-wire 240 V outlet (old dryer or range)",new A.fE1()),A.oo("Two hots and a ground, and no neutral at all: the 6-series outlets.",B.dsT,B.dcT,"v240only",u,!0,B.dz8,B.drC,!0,"240 V only outlet (window AC, welder)",new A.fE2()),A.oo("Hot and neutral as usual, but the ground goes on its own wire straight back to the panel: shops and offices.",B.duU,B.ddZ,"isolated",u,!0,B.dA1,B.d9q,!0,"Isolated-ground outlet",new A.fE3())],C.at("O<Ms>"))
D.d.v(t,$.hEq())
return t})
w($,"ivJ","hEq",()=>C.a([A.oo("The dryer outlet of every new house: 30 amp, 240 volts. Two hots (X, Y), a neutral (W) and a separate ground (G).",B.a5t,B.aB3,"dryer4","nema1430",!0,B.a60,B.dlv,!0,"Dryer outlet, 4-wire (NEMA 14-30)",new A.fDJ()),A.oo("The dryer outlet of older houses (before 1996): 30 amp, 240 volts. Two hots and a neutral that also grounds the dryer. No separate ground.",B.a4B,B.aBA,"dryer3","nema1030",!1,B.a67,B.cTE,!0,"Dryer outlet, 3-wire (NEMA 10-30)",new A.fDK()),A.oo("The electric stove outlet of every new house: 50 amp, 240 volts. Two hots (X, Y), a neutral (W) and a separate ground (G). Also used for car chargers.",B.a5t,B.aB3,"range4","nema1450",!0,B.a60,B.diE,!0,"Range outlet, 4-wire (NEMA 14-50)",new A.fDL()),A.oo("The electric stove outlet of older houses (before 1996): 50 amp, 240 volts. Two hots and a neutral that also grounds the range. No separate ground.",B.a4B,B.aBA,"range3","nema1050",!1,B.a67,B.diC,!0,"Range outlet, 3-wire (NEMA 10-50)",new A.fDM()),A.oo("A dedicated 120 volt, 20 amp outlet for the washer, with a T-shaped neutral slot. Near water, so it needs GFCI protection.",B.dmC,B.d1o,"washer","nema520",!0,B.dA0,B.dgz,!0,"Washing machine outlet (NEMA 5-20)",new A.fDN()),A.oo("At the back of the appliance: black to the left terminal, white (neutral) to the middle one, red to the right one. The ground strap STAYS: it joins the neutral to the frame.",B.cYt,B.d6E,"cord3","terminal3",!1,B.dzp,B.dqR,!0,"Dryer or range cord, 3-wire hookup",new A.fDO()),A.oo("At the back of the appliance: REMOVE the ground strap first, then black left, white (neutral) middle, red right, and the green ground wire to the frame.",B.dru,B.d3c,"cord4","terminal4",!0,B.dz_,B.dav,!0,"Dryer or range cord, 4-wire hookup",new A.fDP())],C.at("O<Ms>")))
w($,"ivZ","Hf",()=>{var v,u=C.a([],x.n)
for(v=0;v<10;++v)u.push(-72+16*v)
return u})})()};
(a=>{a["CzodO+AEMjORI7DnjBqkYxr2lMM="]=a.current})($__dart_deferred_initializers__);