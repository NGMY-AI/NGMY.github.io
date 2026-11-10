((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,C,D,A1,A8,A9,Aa,H,Q,I,Ab,Ac,Ad,A2,R,Ae,Af,M,A3,S,Ag,X,Ah,Y,A4,Ai,Z,A_,Aj,Ak,G,Al,T,U,A0,A5,A6,V,A7,Am,N,A={f_m:function f_m(d,e){this.a=d
this.b=e},a9O:function a9O(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.at=g
_.CW=h
_.a=i
_.$ti=j},aeh:function aeh(d,e){var _=this
_.d=null
_.e=$
_.Gd$=d
_.c=_.a=null
_.$ti=e},bpA:function bpA(d){this.a=d},aNT:function aNT(){},
o7(d,e,f){var w=d.a,v=d.b,u=d.c
return new A.q(w+(e.a-w)*f,v+(e.b-v)*f,u+(e.c-u)*f)},
vE(d,e){var w=Math.cos(e),v=Math.sin(e),u=d.a,t=d.c
return new A.q(u*w+t*v,d.b,-u*v+t*w)},
nE(d,e,f,g){var w,v,u,t,s,r,q,p,o=new A.h_3(Math.cos(e),Math.sin(e)),n=new A.h_1(f),m=new A.h_2(n,e,o,g),l=new A.h_0(n,e,o),k=C.a([],x.z)
for(w=d.length,v=x.o,u=0;u<d.length;d.length===w||(0,C.L)(d),++u){t=d[u]
s=C.a([],v)
for(r=t.a,q=r.length,p=0;p<r.length;r.length===q||(0,C.L)(r),++p)s.push(m.$1(r[p]))
k.push(new A.kp(s,l.$1(t.b),t.c,t.d,t.e,t.f,t.r,t.w,t.x,t.y,t.z))}return k},
Dj(d,e,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
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
l=Math.min(e,n.guW()*0.5)
k=Math.min(e,m.guW()*0.5)
j=n.gmW(0)
i=new A.q(q-j.a*l,p-j.b*l,o-j.c*l)
j=m.gmW(0)
h=new A.q(q+j.a*k,p+j.b*k,o+j.c*k)
for(g=0;g<=a0;++g){f=g/a0
w.push(A.o7(A.o7(i,s,f),A.o7(s,h,f),f))}}w.push(D.d.gak(d))
return w},
ai9(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
if(a3.length<3)return a3
w=C.a([],x.o)
for(v=0;u=v+1,t=a3.length,u<t;v=u){s=v===0?a3[v]:a3[v-1]
r=a3[v]
q=a3[u]
p=v+2
o=p<t?a3[p]:q
for(t=s.a,p=r.a,n=q.a,m=o.a,l=s.b,k=r.b,j=q.b,i=o.b,h=s.c,g=r.c,f=q.c,e=o.c,d=0;d<a4;++d){a0=d/a4
a1=a0*a0
a2=new A.fZQ(a0,a1,a1*a0)
w.push(new A.q(a2.$4(t,p,n,m),a2.$4(l,k,j,i),a2.$4(h,g,f,e)))}}w.push(D.d.gak(a3))
return w},
hFA(){if($.heB)return
$.heB=!0
C.az().bK(new A.bJM(),x.P).eR(new A.bJN())},
heC(){C.az().bK(new A.bJO(),x.P).eR(new A.bJP())},
i_v(d){var w,v,u,t,s,r,q,p,o,n
for(w=d.length,v=!0,u=!0,t=0;t<w;++t)if(d[t].c>=0.5)u=!1
else v=!1
if(v)return d
if(u)return B.rN
s=C.a([],x.o)
for(r=0;w=d.length,r<w;){q=d[r];++r
p=d[r%w]
w=q.c
o=w>=0.5
n=p.c
if(o)s.push(q)
if(o!==n>=0.5)s.push(A.o7(q,p,(0.5-w)/(n-w)))}return s},
h8u(a2,a3,a4){var w,v,u,t,s,r,q,p=J.a6(a2),o=p.h(a2,0).a,n=p.h(a2,0).b,m=p.h(a2,1).a,l=p.h(a2,1).b,k=p.h(a2,2).a,j=p.h(a2,2).b,i=p.h(a2,3).a,h=p.h(a2,3).b,g=m-k,f=i-k,e=o-m+k-i,d=l-j,a0=h-j,a1=n-l+j-h
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
i0n(d,e,f,g){var w,v=e.d,u=e.e,t=A.h8u(f,v,u)
if(t==null)return
w=d.a
J.bl(w.save())
d.aw(0,t.a)
w.clipRect(C.bG(new C.a3(0,0,v,0+u)),$.my()[1],!0)
e.c.$3(d,new C.av(v,u),g)
w.restore()},
i0o(d,e,f,g,h,i){var w,v,u,t,s,r,q,p,o,n,m,l,k=e.d,j=e.e
$.S()
w=new C.p2()
e.c.$3(C.z8(w,null),new C.av(k,j),i)
v=w.nj()
u=k/g
t=j/h
for(s=f.length,r=d.a,q=0+u,p=0+t,o=0;o<f.length;f.length===s||(0,C.L)(f),++o){n=f[o]
m=A.h8u(n.c,u,t)
if(m==null)continue
J.bl(r.save())
l=m.a
r.concat(C.fZW(C.Hb(l)))
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
h5c(d,e,f,g,h,i,j,k,l,m){return new A.avB(l,e,h,k,i,f,g,d,m,j,null)},
hZJ(a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=$.hcW()
C.E3(a4)
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
if(u&&s.h(0,a3)!=null){s.h(0,a3).rX(0,p,q)
continue}for(o=p.a,n=o.length,m=1/0,l=-1/0,k=1/0,j=-1/0,i=1/0,h=-1/0,g=0;g<n;++g){f=o[g]
e=f.a
if(e<m)m=e
if(e>l)l=e
d=f.b
if(d<k)k=d
if(d>j)j=d
a0=f.c
if(a0<i)i=a0
if(a0>h)h=a0}if(l-m>90||j-k>90||h-i>90){v.rX(0,p,q)
continue}a1=t.c3(0,((D.k.bf(m/60)+4096)*8192+(D.k.bf(k/60)+4096))*8192+(D.k.bf(i/60)+4096),new A.fkk())
a1.rX(0,p,q)
if(u)s.n(0,a3,a1)}a3=C.a([v],x.f5)
D.d.v(a3,new C.bd(t,t.$ti.k("bd<2>")))
a2=new A.cLv(a3)
$.hcW().n(0,a4,a2)
return a2},
b7e(d,e,f,g,h,i,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9){var w,v,u,t,s,r,q,p,o,n=(a1-g)/2,m=h-e,l=Math.max(a7*2,m*0.3),k=m-l,j=a6-a5/2
m=a1/2-n/2
d.akZ(new A.q(a8-m,j,a9),new A.q(n,a5,h),a0,0.5,4,a4)
d.akZ(new A.q(a8+m,j,a9),new A.q(n,a5,h),a0,0.5,8,a4)
m=h/2
w=a9-m
d.akZ(new A.q(a8,j,w+k/2),new A.q(g,a5,k),a0,0.5,13,a4)
d.akZ(new A.q(a8,j,a9+m-l/2),new A.q(g,a5,l),a0,0.5,14,a4)
m=e/2
v=w+k+m
u=a6-a2/2
w=g/2
t=a7/2
d.aV(new A.q(a8-w+t,u,v),new A.q(a7,a2,e),f,0.7)
d.aV(new A.q(a8+w-t,u,v),new A.q(a7,a2,e),f,0.7)
w=v-m
d.aV(new A.q(a8,u,w+t),new A.q(g,a2,a7),f,0.7)
s=a6-a2
r=C.ar(f,D.dt,0.18)
r.toString
d.aV(new A.q(a8,s+t,v),new A.q(g,a7,e),r,0.6)
d.aV(new A.q(a8,u,v+m-t),new A.q(g,a2,a7),f,0.7)
d.e=0.5
s+=a7
t=Math.min(g,e)
d.dE(new A.q(a8,s,v),new A.q(a8,s+0.05,v),t*0.09,B.hd,14)
if(!a3){d.e=0
return}q=w-k*0.38
m=t*0.08
w=t*0.2
d.aV(new A.q(a8,a6+t*0.04,q),new A.q(t*0.65,m,w),i,0.9)
s=a6+t*0.5
r=a6+t*0.62
d.j8(A.Dj(C.a([new A.q(a8,a6+m,q),new A.q(a8,s,q),new A.q(a8,r,q+t*0.12),new A.q(a8,r,q+t*0.38),new A.q(a8,s,q+t*0.42)],x.o),t*0.1,6),t*0.045,i,!0,0.9,8)
for(m=a6+w,w=t*0.035,s=a6+t*0.24,r=t*0.075,p=0;p<2;++p){o=a8+F.ho[p]*t*0.3
d.dR(new A.q(o,a6,q),new A.q(o,m,q),w,i,0.9,8)
d.dR(new A.q(o,m,q),new A.q(o,s,q),r,i,0.9,10)}d.e=0},
q:function q(d,e,f){this.a=d
this.b=e
this.c=f},
kp:function kp(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
fP:function fP(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
fm:function fm(d){var _=this
_.a=d
_.c=_.b=0
_.d=1
_.e=0
_.f=2
_.r=!1
_.x=_.w=0},
c04:function c04(d,e){this.a=d
this.b=e},
c05:function c05(d){this.a=d},
c03:function c03(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
c06:function c06(d,e,f){this.a=d
this.b=e
this.c=f},
c02:function c02(d,e){this.a=d
this.b=e},
c07:function c07(d,e,f){this.a=d
this.b=e
this.c=f},
h_3:function h_3(d,e){this.a=d
this.b=e},
h_1:function h_1(d){this.a=d},
h_2:function h_2(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
h_0:function h_0(d,e,f){this.a=d
this.b=e
this.c=f},
fZQ:function fZQ(d,e,f){this.a=d
this.b=e
this.c=f},
xi:function xi(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=6
_.f=160
_.r=null
_.w=0
_.x=-1
_.y=0
_.z=-1.25
_.Q=1.35
_.as=0
_.at=1.25
_.ax=!1
_.cx=_.CW=_.ch=_.ay=null
_.P$=0
_.T$=h
_.by$=_.bJ$=0},
bJM:function bJM(){},
bJN:function bJN(){},
bJO:function bJO(){},
bJP:function bJP(){},
bJJ:function bJJ(){},
bJR:function bJR(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bJQ:function bJQ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bJL:function bJL(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bJK:function bJK(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bV2:function bV2(d){this.a=d},
b6x:function b6x(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
ctM:function ctM(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ctN:function ctN(d,e){this.a=d
this.b=e},
ctL:function ctL(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0,a1,a2,a3,a4,a5,a6){var _=this
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
ctF:function ctF(){},
ctG:function ctG(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
ctE:function ctE(d){this.a=d},
ctH:function ctH(){},
ctI:function ctI(d,e,f){this.a=d
this.b=e
this.c=f},
ctJ:function ctJ(){},
ctK:function ctK(){},
cDy:function cDy(d,e){this.a=d
this.b=e},
G4:function G4(d,e,f,g,h,i,j,k,l){var _=this
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
avB:function avB(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
bsa:function bsa(d,e,f,g,h,i,j){var _=this
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
_.a9$=j
_.c=_.a=null},
f2T:function f2T(d){this.a=d},
f2S:function f2S(d){this.a=d},
f2Q:function f2Q(d){this.a=d},
f2R:function f2R(d){this.a=d},
f2K:function f2K(d){this.a=d},
f2L:function f2L(d,e){this.a=d
this.b=e},
f2N:function f2N(d){this.a=d},
f2O:function f2O(d){this.a=d},
f2M:function f2M(d){this.a=d},
f2P:function f2P(d){this.a=d},
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
cLv:function cLv(d){this.a=d},
fkk:function fkk(){},
aO1:function aO1(){},
bTX(d){var w,v,u=$.h1M.h(0,d)
if(u!=null)return C.f8(u,x.e)
w=B.Sf.h(0,d)
if(w==null)return C.f8(null,x.e)
v=$.h1L.h(0,d)
if(v==null){v=new A.bTY(w,d).$0()
$.h1L.n(0,d,v)}return v},
aWk(d){var w=0,v=C.j(x.H),u
var $async$aWk=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:w=2
return C.b(A.bTX(d),$async$aWk)
case 2:u=J.aW(B.Sf.gew(B.Sf))
case 3:if(!u.C()){w=4
break}w=5
return C.b(A.bTX(u.gS(u)),$async$aWk)
case 5:w=3
break
case 4:return C.h(null,v)}})
return C.i($async$aWk,v)},
hIH(d){var w,v,u=new Float64Array(d*16)
for(w=0;w<d;++w){v=w*16
u[v+15]=1
u[v+10]=1
u[v+5]=1
u[v]=1}return u},
hga(d,e,f){var w,v,u,t
if(d>e){w=d
v=e}else{w=e
v=d}if(w>f){u=w
w=f}else u=f
if(v>w){t=w
w=v
v=t}return(v*65536+w)*65536+u},
hII(d,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=d.c,g=d.b===1,f=g?4:3,e=h.length
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
hgb(d,a0,a1,a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
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
i8b(d,e){var w=D.o.aD(d,16)&255,v=D.o.aD(d,8)&255,u=d&255,t=0.35+(0.299*w+0.587*v+0.114*u)/255,s=new A.fy5()
return C.a_(255,s.$2(w,e.gb6(e)*255*t),s.$2(v,e.gbc()*255*t),s.$2(u,e.gb9(e)*255*t))},
bcd:function bcd(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
bcy:function bcy(d,e){this.b=d
this.c=e},
bhH:function bhH(d,e,f){this.a=d
this.b=e
this.c=f},
dpf:function dpf(d,e,f,g,h,i){var _=this
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
bTY:function bTY(d,e){this.a=d
this.b=e},
bTP:function bTP(){},
bTJ:function bTJ(d,e){this.a=d
this.b=e},
bTI:function bTI(){},
bTR:function bTR(d,e,f){this.a=d
this.b=e
this.c=f},
bTS:function bTS(d){this.a=d},
bTT:function bTT(d){this.a=d},
bTQ:function bTQ(d,e){this.a=d
this.b=e},
bTN:function bTN(d){this.a=d},
bTO:function bTO(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
bTW:function bTW(d){this.a=d},
bTU:function bTU(){},
bTV:function bTV(d){this.a=d},
bTZ:function bTZ(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
bTK:function bTK(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
bTM:function bTM(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bTL:function bTL(d,e){this.a=d
this.b=e},
fy5:function fy5(){},
duN:function duN(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
djr:function djr(d,e){this.a=d
this.b=e},
hFg(){var w,v=J.e_(6,x.ff)
for(w=0;w<6;++w)v[w]=new A.aTa()
return new A.bI3(v)},
afY(d){return A.i_X(d)},
i_X(d){var w=0,v=C.j(x.eT),u,t=2,s=[],r,q,p,o,n
var $async$afY=C.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:if(d==null){u=null
w=1
break}t=4
w=7
return C.b(C.fDb(d,null),$async$afY)
case 7:r=f
n=J
w=8
return C.b(r.lM(),$async$afY)
case 8:q=n.a3f(f)
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
return C.i($async$afY,v)},
hyL(a5,a6,a7,a8,a9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
if(a8.a){w=a7/8
if(a9===0){v=D.k.bf(w)
A.nj(a5,a6,a7,D.o.F(v,2)===0?0:1+D.o.ao(v,2))}else A.nj(a5,a6,a7,a9+1+D.k.bf(w))
return}u=B.a5l[a8.e]
w=a6.a
t=a6.b
s=0+t
r=new C.a3(0,0,0+w,s)
$.S()
q=C.I()
q.sam(new C.a9(D.a5,D.a8,D.x,C.a([u.b,u.c],x.O),null,null).aA(0,r))
a5.aP(r,q)
q=t*0.04
p=r.cq(-q)
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
j.clipRRect(C.e6(C.bs(k,new C.aP(o,o))),$.nF(),!0)
o=C.I()
o.Q=D.ci
a5.oD(l,g,k,o)
j.restore()
f=p+m*0.8}else f=m
e=a8.w
if(e==null)e=$.W9
p=t*0.3
o=f+p
p=m+p
d=new C.a3(f,m,o,p)
j=d.gbL()
o-=f
i=C.I()
i.r=B.Fe.gp(0)
a5.ad(j,o/2,i)
if(e!=null){j=e.c
i=e.d
v=Math.min(o*0.8/j,(p-m)*0.8/i)
o=C.bK(d.gbL(),i*v,j*v)
h=C.I()
h.Q=D.ci
a5.oD(e,new C.a3(0,0,j,i),o,h)}o=new A.fQY()
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
i9u(d,e){var w,v,u,t,s=d.w
if(s.length===0){s=d.e
w=d.r
return new C.cy([-s/2,s/2,w+d.f,w])}v=s[e]
s=v.e
u=d.e*s
t=d.r+v.d
return new C.cy([-u/2,u/2,t+d.f*s,t])},
bBR(d,e,f,g){var w,v,u,t,s,r,q,p,o=new C.a3(0,0,0+e.a,0+e.b)
$.S()
w=C.I()
w.r=B.biI.gp(0)
d.aP(o,w)
v=o.cq(-(e.gdC()*0.06))
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
q.sam(B.c5V.aA(0,new C.a3(0,0,s,r)))
d.aP(new C.a3(0,0,s,r),q)
p=t*0.82
J.bl(w.save())
w.translate((u-p)/2,(t-p)/2)
A.hyQ(d,new C.av(p,p),f)
w.restore()}else A.nj(d,new C.av(u,t),f,g)
w.restore()},
i4y(d,e,f){var w,v,u,t,s=e.a,r=e.b
$.S()
w=C.I()
w.r=B.br8.gp(0)
d.aP(new C.a3(0,0,0+s,0+r),w)
v=C.I()
v.r=L.ahp.gp(0)
w=s*0.12
u=r*0.07
t=w+s*0.76
d.aP(new C.a3(w,u,t,u+r*0.38),v)
u=r*0.52
d.aP(new C.a3(w,u,t,u+r*0.4),v)
u=C.I()
u.r=F.fA.gp(0)
d.ad(new C.t(s*0.82,r*0.5),s*0.05,u)},
h9a(d9,e0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6=x.z,d7=C.a([],d6),d8=new A.fm(d7)
d8.f=0
d8.Cn(B.hdp,B.h2G,B.h2F,B.hdo,B.bkI,B.ea)
d8.f=1
d8.Cn(B.h7A,B.h5k,B.heW,B.h72,B.Ms,B.ea)
for(w=-2100;w<2100;w+=90){v=w+45
d8.Cn(new A.q(w,0.8,637),new A.q(v,0.8,637),new A.q(v,0.8,643),new A.q(w,0.8,643),L.M6,B.ea)}d8.f=2
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
case"line3":n=D.bf
break
case"far3":n=D.aB
break
case"skyline":n=D.br
break
case"lines6":n=D.aP
break
case"scatter":n=D.b8
break
default:n=F.fA}m=p==="roof"
l=m?3:2
k=q?720:900
j=k*t/u
i=C.a([],x.a)
r=q?r:1
for(h=e0.b,g=x.o,f=-o,e=f-0.8,d=p==="highway",a0=f/2,f=p!=="neon",a1=a0-0.2,a2=p==="screen",a3=s-16,a4=(14+s-7)/2,a5=s-21,a6=s-7,a7=0;a7<r;++a7){a8=q?v[a7]:B.acy
a9=a8.e
b0=u*a9
b1=t*a9
b2=new A.fzu(a8)
b3=C.a([],d6)
b4=new A.fm(b3)
b4.f=l
b5=C.a([],d6)
b6=new A.fm(b5)
b6.f=l
b7=A.i9u(d9,a7).a
b8=b7[0]
b9=b7[1]
c0=b7[2]
c1=b7[3]
c2=(b8+b9)/2
c3=(c0+c1)/2
b7=b2.$1(new A.q(c2,c3,a1))
c4=!f||a2?D.av:D.cr
c5=a8.c
b4.wr(b7,new A.q(b0+16,b1+16,o),c4,0.2,c5)
c6=7*Math.max(1,a9*0.8)
c4=b0+14
b6.wr(b2.$1(new A.q(c2,c0+3,3)),new A.q(c4,c6,8),n,0.4,c5)
b6.wr(b2.$1(new A.q(c2,c1-3,3)),new A.q(c4,c6,8),n,0.4,c5)
b7=b1+14
b6.wr(b2.$1(new A.q(b8-3,c3,3)),new A.q(c6,b7,8),n,0.4,c5)
b6.wr(b2.$1(new A.q(b9+3,c3,3)),new A.q(c6,b7,8),n,0.4,c5)
D.d.v(d7,b3)
D.d.v(d7,b5)
b5=C.a([],d6)
c7=new A.fm(b5)
c8=Math.max(6,b0*0.018)
c9=new A.fzv(i,l)
switch(q?"sep":p){case"tower":c7.dE(new A.q(0,0,a0),new A.q(0,a6,a0),c8*1.9,D.hj,12)
c7.dE(new A.q(0,0,a0),new A.q(0,14,a0),c8*2.8,D.av,12)
break
case"screen":c7.aJ(new A.q(0,7,-10),new A.q(b0*0.6,14,70),D.av)
c7.aJ(new A.q(0,a4,a0),new A.q(60,a5,14),D.hj)
break
case"roof":c7.mi(B.fZy,B.h4z,B.bgL,0.1,4)
c7.mi(B.h_c,B.h4F,D.dt,0.15,4)
c7.hs(B.fZS,B.h4E,D.dt,4)
c7.mi(B.hdD,B.h1P,B.bi_,0.1,2)
c7.hs(B.hdC,B.h20,D.dt,2)
c7.aJ(B.h2b,B.h3t,B.nU)
c7.aJ(B.fZn,B.h0z,D.el)
c9.$6$px(B.hbD,0,210,126,new A.fzn(),360)
c9.$6$px(B.hcJ,0,210,126,new A.fzo(),360)
c9.$6$px(B.h8j,0,72,116,A.iiM(),140)
c9.$6$px(B.hg8,0,130,80,new A.fzp(),300)
for(d0=0;d0<3;++d0){d1=-60-d0*90
c9.$6$px(new A.q(310.8,140,d1),1.5707963267948966,80,64,new A.fzq(d0),240)
c9.$6$px(new A.q(310.8,55,d1),1.5707963267948966,60,60,A.hbB(),200)}for(d0=0;d0<2;++d0){d1=-65-d0*110
c9.$6$px(new A.q(-490.8,95,d1),-1.5707963267948966,90,60,new A.fzr(d0),240)
c9.$6$px(new A.q(-490.8,40,d1),-1.5707963267948966,50,50,A.hbB(),180)}c9.$6$px(new A.q(0,100,-285.8),3.141592653589793,580,170,A.hyC(),900)
break
case"gate":for(b3=b0/2+25,b7=s+b1,c4=b7+26,c5=c8*1.6,d2=0;d2<2;++d2){d3=F.ho[d2]*b3
c7.dE(new A.q(d3,0,a0),new A.q(d3,c4,a0),c5,D.hj,12)}c7.aV(new A.q(0,b7+17,a0),new A.q(b0+80,18,22),D.hj,0.2)
break
default:for(b3=s+a8.d-7,d2=0;d2<2;++d2){b7=F.ho[d2]*b0*0.3
c7.dE(b2.$1(new A.q(b7,0,a0)),b2.$1(new A.q(b7,b3,a0)),c8,D.hj,10)}if(d)c7.aJ(new A.q(0,a3,14),new A.q(c4,3,24),D.hj)}D.d.v(d7,b5)
d4=h[a7]
i.push(new A.fP(C.a([b2.$1(new A.q(b8,c0,0.8)),b2.$1(new A.q(b9,c0,0.8)),b2.$1(new A.q(b9,c1,0.8)),b2.$1(new A.q(b8,c1,0.8))],g),0,new A.fzs(d4,a7),k,j,60,l,0,!1))
i.push(new A.fP(C.a([b2.$1(new A.q(b9,c0,e)),b2.$1(new A.q(b8,c0,e)),b2.$1(new A.q(b8,c1,e)),b2.$1(new A.q(b9,c1,e))],g),0,new A.fzt(d4,a7),k,j,60,l,0,!1))}d6=C.a([],d6)
d5=new A.fm(d6)
for(d2=0;d2<9;++d2){v=B.d2j[d2]
w=v.a
d1=v.b
if(m&&d1>200)continue
d5.dE(new A.q(w,0,d1),new A.q(w,55,d1),7,B.q9,6)
d5.ed(new A.q(w,98,d1),46,E.Xz,3,6)}for(d2=0;d2<6;++d2){w=B.dsb[d2]
d5.dE(new A.q(w,0,580),new A.q(w,90,580),3,D.hj,5)
d5.ed(new A.q(w,95,580),8,B.o5,3,6)}D.d.v(d7,d6)
return new A.tU(d7,B.Sk,B.zu,i,null,6000)},
hr4(d){return d*d*(3-2*d)},
fls(d,e,f,g,h){var w=new A.flt(h)
return new A.q(w.$4(d.a,e.a,f.a,g.a),w.$4(d.b,e.b,f.b,g.b),w.$4(d.c,e.c,f.c,g.c))},
hs1(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=D.k.E(e,0,30)
if(f==null){w=C.a([],x.n)
for(v=J.a6(d),u=0;u<v.gL(d);++u)w.push(30*u/(v.gL(d)-1))
t=w}else t=f
w=J.a6(d)
v=J.a6(t)
s=0
for(;;){r=s+2
if(!(r<w.gL(d)&&v.h(t,s+1)<=m))break;++s}w=s+1
q=A.hr4(D.k.E((m-v.h(t,s))/(v.h(t,w)-v.h(t,s)),0,1))
v=new A.foS(d)
p=s-1
o=A.fls(v.$1(p).a,v.$1(s).a,v.$1(w).a,v.$1(r).a,q)
n=A.fls(v.$1(p).b,v.$1(s).b,v.$1(w).b,v.$1(r).b,q)
r=Math.sin(m*1.3)
v=Math.sin(m*1.9)
w=Math.cos(m*1.1)
return new C.z(new A.q(o.a+r*3,Math.max(o.b+v*2.5,18),o.c+w*3),n)},
i8j(d){return $.i8i.c3(0,d.a,new A.fyb(d))},
hut(d){return $.i8k.c3(0,d.a,new A.fy8(d))},
i9t(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=d.a
if(i==="scatter")return A.hs1(B.dgc,e,null)
if(d.w.length!==0)return A.hs1(A.hut(d),e,A.i8j(d))
w=B.dxZ.h(0,i)
if(w==null)w=B.aPu
v=B.cvX[w.a]
u=w.b?-1:1
t=new A.q(d.ga4w(0),d.r+d.gGP()/2,d.ga4y())
s=new A.fzf(t,u,d)
r=new A.fzg(t,u,d)
q=D.k.E(e,0,30)
i=v.length
p=0
for(;;){o=p+2
if(!(o<i&&v[p+1].a<=q))break;++p}i=v[p].a
n=p+1
m=A.hr4(D.k.E((q-i)/(v[n].a-i),0,1))
i=new A.fzh(v)
l=p-1
k=A.fls(s.$1(i.$1(l)),s.$1(i.$1(p)),s.$1(i.$1(n)),s.$1(i.$1(o)),m)
j=A.fls(r.$1(i.$1(l)),r.$1(i.$1(p)),r.$1(i.$1(n)),r.$1(i.$1(o)),m)
return new C.z(new A.q(k.a,Math.max(k.b,18),k.c),j)},
lH:function lH(d,e,f,g,h){var _=this
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
bI5:function bI5(d){this.a=d},
Hq:function Hq(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
aTa:function aTa(){var _=this
_.a=!0
_.b="NEW GLOBAL MOVEMENT FOR YOUTH"
_.c="Videos, slides, blogs and books."
_.d="ngmy.org"
_.e=0
_.x=_.w=_.r=_.f=null},
bI3:function bI3(d){this.a="highway"
this.b=d},
bI4:function bI4(d){this.a=d},
fQY:function fQY(){},
fzu:function fzu(d){this.a=d},
fzv:function fzv(d,e){this.a=d
this.b=e},
fzw:function fzw(d,e){this.a=d
this.b=e},
fzn:function fzn(){},
fzo:function fzo(){},
fzp:function fzp(){},
fzq:function fzq(d){this.a=d},
fzr:function fzr(d){this.a=d},
fzs:function fzs(d,e){this.a=d
this.b=e},
fzt:function fzt(d,e){this.a=d
this.b=e},
ho:function ho(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
flt:function flt(d){this.a=d},
foS:function foS(d){this.a=d},
fyb:function fyb(d){this.a=d},
fya:function fya(){},
fy8:function fy8(d){this.a=d},
fy9:function fy9(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fzf:function fzf(d,e,f){this.a=d
this.b=e
this.c=f},
fzg:function fzg(d,e,f){this.a=d
this.b=e
this.c=f},
fzh:function fzh(d){this.a=d},
aoL:function aoL(d){this.a=d},
aoM:function aoM(d,e){var _=this
_.d=d
_.r=_.f=_.e=$
_.w=e
_.x=-1
_.y=!1
_.z=""
_.c=_.a=null},
c45:function c45(d){this.a=d},
c43:function c43(d){this.a=d},
c42:function c42(){},
c3R:function c3R(d){this.a=d},
c3X:function c3X(d,e){this.a=d
this.b=e},
c44:function c44(d){this.a=d},
c3U:function c3U(d,e){this.a=d
this.b=e},
c3T:function c3T(d){this.a=d},
c3r:function c3r(){},
c3S:function c3S(d){this.a=d},
c3W:function c3W(d){this.a=d},
c3V:function c3V(d,e,f){this.a=d
this.b=e
this.c=f},
c3Q:function c3Q(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
c3P:function c3P(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
c3M:function c3M(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
c3N:function c3N(d,e){this.a=d
this.b=e},
c3H:function c3H(d,e,f){this.a=d
this.b=e
this.c=f},
c3O:function c3O(d){this.a=d},
c3K:function c3K(d,e){this.a=d
this.b=e},
c3J:function c3J(){},
c3L:function c3L(d,e){this.a=d
this.b=e},
c3I:function c3I(){},
c3w:function c3w(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
c3v:function c3v(){},
c3x:function c3x(d){this.a=d},
c3y:function c3y(d){this.a=d},
c3z:function c3z(d){this.a=d},
c3A:function c3A(d,e){this.a=d
this.b=e},
c3B:function c3B(d,e,f){this.a=d
this.b=e
this.c=f},
c3C:function c3C(d,e){this.a=d
this.b=e},
c3D:function c3D(d,e,f){this.a=d
this.b=e
this.c=f},
c3E:function c3E(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
c3u:function c3u(){},
c3F:function c3F(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
c3s:function c3s(){},
c3t:function c3t(){},
c3G:function c3G(d){this.a=d},
c4_:function c4_(d){this.a=d},
c40:function c40(d){this.a=d},
c3Z:function c3Z(d){this.a=d},
c41:function c41(d){this.a=d},
c3Y:function c3Y(d){this.a=d},
h9_(d,e,f,g){var w,v,u,t=null,s=e.r
s=s==null?t:D.k.V(s)
w=D.k.V(f)
v=e.b
v=v==null?t:v.l()
u=d+"|"+C.w(s)+"|"+w+"|"+C.w(v)
v=$.hup.h(0,u)
if(v==null){s=C.fx(t,t,g,t,C.cS(t,t,t,t,t,t,t,t,t,e,d),D.a4,D.bY,t,D.dA,D.bW)
s.o0(f)
$.hup.n(0,u,s)}else s=v
return s},
nj(a5,a6,a7,a8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4=D.o.F(a8,17)
if(a4===0){A.fR4(a5,a6,a7,0)
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
return}if(a4>=8){K.RY(a5,a6,a4-8,a7)
return}r=B.cXl[a4-1]
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
h=g.gbv().a.snapshot()
s.drawPath((g.e=new C.cf(h)).a,e)
e.delete()}t=Math.sin(a7*2)
n=C.I()
m=r.e
n.r=m.j(0.18).gp(0)
a5.ad(new C.t(w*0.88,u*0.3),u*(0.22+0.03*t),n)
s.restore()
s=w*0.06
A.h9_(r.a,C.l(a3,a3,D.c,a3,a3,a3,a3,a3,a3,a3,a3,u*0.22,a3,a3,D.u,a3,a3,!0,a3,u*0.012,a3,a3,a3,a3,a3,a3),w*0.9,1).a3(a5,new C.t(s,u*0.2))
A.h9_(r.b,C.l(a3,a3,m,a3,a3,a3,a3,a3,a3,a3,a3,u*0.1,a3,a3,D.U,a3,a3,!0,a3,a3,a3,a3,a3,a3,a3,a3),w*0.8,2).a3(a5,new C.t(s,u*0.5))
d=$.W9
m=u*0.76
if(d!=null){t=d.c
n=d.d
a0=Math.min((s+o-s)/t,(m+u*0.16-m)/n)
o=C.I()
o.Q=D.ci
a5.oD(d,new C.a3(0,0,t,n),new C.a3(s,m,s+t*a0,m+n*a0),o)}else{a1=C.fx(a3,a3,a3,a3,C.cS(a3,a3,a3,a3,a3,a3,a3,a3,a3,C.l(a3,a3,D.c,a3,a3,a3,a3,a3,a3,a3,a3,u*0.12,a3,a3,D.u,a3,a3,!0,a3,a3,a3,a3,a3,a3,a3,a3),"NGMY"),D.a4,D.bY,a3,D.dA,D.bW)
a1.ek()
a1.a3(a5,new C.t(s,m))}a2=A.h9_("ngmy.org",C.l(a3,a3,D.ac,a3,a3,a3,a3,a3,a3,a3,a3,u*0.08,a3,a3,D.H,a3,a3,!0,a3,a3,a3,a3,a3,a3,a3,a3),400,1)
a2.a3(a5,new C.t(w-a2.b.c-w*0.05,u*0.82))},
FX:function FX(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
L9(d){return D.d.dL(B.Re,new A.fBM(d),new A.fBN())},
yO(d){var w=B.hC.h(0,d.b),v=d.e*3.141592653589793/2,u=w.d/2+30
return new C.z(d.c+Math.sin(v)*u,d.d+Math.cos(v)*u)},
hGL(d){var w=C.a([],x.C),v=C.a([],x.fW),u=new C.e4()
u.cY(7)
w=new A.bMr(d,u,w,v)
w.bzv(d,7)
return w},
zc:function zc(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fBM:function fBM(d){this.a=d},
fBN:function fBN(){},
xn:function xn(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=null
_.w=_.r=!1
_.x=0},
aUk:function aUk(d,e,f,g,h,i,j){var _=this
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
ako:function ako(d,e,f){this.a=d
this.b=e
this.c=f},
bMr:function bMr(d,e,f,g){var _=this
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
bMt:function bMt(d){this.a=d},
bMv:function bMv(d,e){this.a=d
this.b=e},
bMw:function bMw(){},
bMs:function bMs(d,e){this.a=d
this.b=e},
bMx:function bMx(){},
bMu:function bMu(d,e,f){this.a=d
this.b=e
this.c=f},
heH(d){var w=d.x
return C.bv(w.length,D.d.cI(w,0,new A.bKy()),D.h,D.h,D.h,D.h,D.h,D.h,D.h,D.h,D.h,D.h,D.h,D.h,D.h,D.h,D.h,D.h,D.h,D.h)},
ijY(d){var w,v,u
for(w=0,v=0;u=v+1,u<d.length;v=u)w+=Math.sqrt(Math.pow(d[u].a-d[v].a,2)+Math.pow(d[u].b-d[v].b,2))
return w},
ik3(d,e){var w,v,u,t,s,r,q,p,o
for(w=e,v=0;u=v+1,u<d.length;v=u){t=d[u]
s=d[v]
r=t.a-s.a
q=t.b-s.b
p=Math.sqrt(r*r+q*q)
if(p<0.000001)continue
if(w<=p||v+2===d.length){o=D.k.E(w/p,0,1)
t=d[v]
return new C.b7(t.a+r*o,t.b+q*o,Math.atan2(r,q))}w-=p}return new C.b7(D.d.gak(d).a,D.d.gak(d).b,0)},
bKx:function bKx(d){var _=this
_.a=d
_.e=_.d=_.c=_.b=$
_.f=-1},
bKy:function bKy(){},
djU:function djU(d,e){this.a=d
this.b=e},
h2h(d,e,f){return new A.aYX(f,d,e,null)},
h9v(d){return D.k.dd((1-D.k.E(d,0,1))*12)},
aTG:function aTG(d){var _=this
_.b=_.a=1
_.d=_.c=0
_.e=1
_.f=!1
_.r=0
_.w=!1
_.P$=0
_.T$=d
_.by$=_.bJ$=0},
aYX:function aYX(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
Uw:function Uw(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
c1H:function c1H(d){this.a=d},
rQ:function rQ(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
fpV(d){var w=d.d-d.b-200
return new C.bqG([157.07963267948966,2*w+380+628.3185307179587,w,190])},
Le(d,e){var w,v=A.fpV(d).a,u=v[2],t=v[3],s=v[0]
v=v[1]
w=D.k.F(e,v)
if(w<0)w+=v
v=new A.fFc()
if(w<u)return new C.cy([d.b+100+w,445,1,0])
w-=u
if(w<s)return v.$4(d.d-100,545,-1.5707963267948966,w)
w-=s
if(w<t)return new C.cy([d.d,545+w,0,1])
w-=t
if(w<s)return v.$4(d.d-100,735,0,w)
w-=s
if(w<u)return new C.cy([d.d-100-w,835,-1,0])
w-=u
if(w<s)return v.$4(d.b+100,735,1.5707963267948966,w)
w-=s
if(w<t)return new C.cy([d.b,735-w,0,-1])
return v.$4(d.b+100,545,3.141592653589793,w-t)},
h0W(d,e,f){return new A.aTF(d,e,f)},
h9M(d,e){var w=D.k.F(e+d.c,28)
if(w<12)return 0
if(w<15)return 1
return 2},
hpL(d,e,f,g){var w=x.n
w=new A.bxs(d,e,f,g,C.a([],w),C.a([],w))
w.bAB(d,e,f,g)
return w},
hFS(){var w,v=C.a([],x.n)
for(w=0;w<4;++w)v.push(B.kp[w].r)
return new A.bKz(v,C.bZ(4,0,!1,x.i),B.aAk)},
i6Q(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=C.a([],x.z)
for(w=d.length,v=e.a,u=e.b,t=e.c,s=x.o,r=0;r<d.length;d.length===w||(0,C.L)(d),++r){q=d[r]
p=C.a([],s)
for(o=q.a,n=o.length,m=0;m<o.length;o.length===n||(0,C.L)(o),++m){l=o[m]
p.push(new A.q(l.a*v,l.b*u,l.c*t))}k.push(new A.kp(p,q.b,q.c,q.d,q.e,q.f,q.r,q.w,q.x,q.y,q.z))}return k},
hZT(){var w,v,u,t,s=new A.fm(C.a([],x.z))
s.r=!0
s.aV(B.fZM,B.h19,D.d7,0.3)
s.aV(B.hdO,B.h1_,D.bN,0.2)
s.aV(B.aaS,B.h0Y,B.i1,0.6)
s.aV(B.h8C,B.h1F,B.i1,0.6)
s.aJ(B.h7F,B.h1b,D.bu)
for(w=0;w<2;++w)s.aJ(new A.q(75.5,9,B.a54[w]),B.aaX,B.o5)
for(w=0;w<2;++w){v=B.dmJ[w]
for(u=0;u<2;++u){t=B.dmA[u]
s.dE(new A.q(v,7,t-1.5),new A.q(v,7,t+1.5),7.5,D.ni,12)}}return s},
i5o(d,e){var w,v,u,t,s,r=new A.fm(C.a([],x.z))
r.r=!0
r.aV(B.aW7,B.h0e,D.bN,0.4)
r.aV(B.he5,B.h3T,D.bN,0.4)
r.aV(B.he6,B.h3X,B.i1,0.6)
r.aJ(B.xc,B.h0j,D.dF)
w=D.k.F(d*5+e,2)<1
r.aV(B.hgj,B.aWl,w?D.ax:D.ek,0.6)
r.aV(B.hc3,B.aWl,w?D.d7:D.d3,0.6)
for(v=0;v<2;++v){u=B.dmF[v]
for(t=0;t<2;++t){s=B.dmy[t]
r.dE(new A.q(u,6.5,s-1.5),new A.q(u,6.5,s+1.5),6.5,D.ni,12)}}return r},
ima(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=x.z,a5=C.a([],a4)
for(w=0;w<4;++w){v=B.kp[w]
u=$.aRI()
t=D.d.cu(B.kp,v)
u.FH(0,a6)
t=A.Le(B.kp[t],u.a[t]).a
s=t[0]
r=t[1]
q=t[2]
p=t[3]
u=v.a==="bus"
o=u?A.hZT():A.i5o(a6,w)
u=u?B.aX7:B.aWt
D.d.v(a5,A.nE(A.i6Q(o.a,u),0,Math.atan2(q,p)-1.5707963267948966,new A.q(s,0,r)))}for(u=$.bFR(),t=u.length,n=0;n<u.length;u.length===t||(0,C.L)(u),++n)D.d.v(a5,A.i2N(u[n],a6))
for(u=a6*0.9,t=x.o,m=a6*22,l=a6*0.09,w=0;w<2;++w){k=B.a4F[w].a
j=k[0]
i=k[1]
h=k[2]
g=l+w*3.141592653589793
k=Math.cos(g)
f=Math.sin(g)
e=Math.atan2(-Math.sin(g),Math.cos(g))
d=C.a([],a4)
a0=new A.fm(d)
a0.r=!0
a0.aV(B.dX,B.h3o,D.bz,0.4)
a0.aV(B.h1j,B.h0n,B.i1,0.7)
a0.dE(B.h1q,B.h4D,2.6,D.bz,8)
a0.aJ(B.h4A,B.hbF,D.bN)
a0.dE(B.xc,B.aaQ,1.2,B.hd,8)
for(a1=0;a1<2;++a1)a0.aE_(new A.q(0,13.4,0),B.h6J,B.hd,m+a1*3.141592653589793/2)
for(n=0;n<2;++n){a2=E.aAT[n]
a0.aJ(new A.q(0,-11,a2),B.h6q,B.hd)
a0.aJ(new A.q(-10,-6,a2),B.aX5,B.hd)
a0.aJ(new A.q(10,-6,a2),B.aX5,B.hd)}for(n=0;n<2;++n){a3=B.aAP[n]
a0.j8(C.a([new A.q(a3*0.45,-10,0),new A.q(a3,-22,0)],t),0.3,B.hd,!1,0,4)}D.d.v(a5,A.nE(d,0,e-1.5707963267948966,new A.q(j+520*k,h+Math.sin(u+w)*5,i+520*f)))}return a5},
imb(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=C.a([],x.a),f=new A.fZZ()
for(w=0;w<4;++w){v={}
u=B.kp[w]
v.a=v.b=null
t=$.aRI()
s=D.d.cu(B.kp,u)
t.FH(0,d)
s=A.Le(B.kp[s],t.a[s]).a
v.b=s[0]
v.a=s[1]
s=new A.fZX(v,Math.atan2(s[2],s[3])-1.5707963267948966)
v=u.a==="bus"
r=v?B.aX7:B.aWt
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
g.push(f.$7(s.$3(q,o,p),s.$3(v,o,p),s.$3(v,n,p),s.$3(q,n,p),t+5,1200,220))}for(v=d*0.09,t=d*0.9,w=0;w<2;++w){s=B.a4F[w].a
l=s[0]
k=s[1]
j=s[2]
i=s[3]
h=v+w*3.141592653589793
s=Math.cos(h)
p=Math.sin(h)
p=new A.fZY(Math.atan2(-Math.sin(h),Math.cos(h))-1.5707963267948966,l+520*s,j+Math.sin(t+w)*5,k+520*p)
g.push(f.$7(p.$2(-42,-22),p.$2(42,-22),p.$2(42,-44),p.$2(-42,-44),i,900,230))
g.push(f.$7(p.$2(42,-22.3),p.$2(-42,-22.3),p.$2(-42,-44.3),p.$2(42,-44.3),i,900,230))}return g},
i2N(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k=B.kp[d.a*2],j=d.b,i=A.Le(k,j).a,h=i[0],g=i[1],f=i[2],e=i[3]
j=A.Le(k,j+22).a
j=[j[0],j[1],f,e,h+-e*56,g+f*56]
w=A.h9M(d,a0)
v=D.k.F(a0+d.c,28)
u=v>=17&&v<26
i=C.a([],x.z)
t=new A.fm(i)
t.r=!0
t.dE(B.dX,B.aWg,1.7,D.hj,6)
t.aV(B.h_R,B.h5g,D.av,0.3)
for(s=w===2,r=w===1,q=w===0,p=0;p<3;++p){o=!0
if(!(p===0&&s))if(!(p===1&&r)){n=p===2&&q
o=n}n=o?B.djm[p]:B.cK9[p]
m=o?0.9:0.1
t.fO(new A.q(-3.9,74-p*8,0),3.3,n,4,7,m)}t.aV(B.h_l,B.h0o,D.av,0.3)
if(u){t.ed(B.h6u,1.6,D.be,4,6)
t.aJ(B.hbB,B.hbk,D.be)
t.aJ(B.h6U,B.aXu,D.be)
t.aJ(B.hao,B.aXu,D.be)}else{t.aJ(B.h82,B.hcw,D.ax)
for(l=-2;l<=1;++l)t.aJ(new A.q(l*1.25+0.6,40,-4.9),B.hcU,D.ax)
t.aJ(B.hfE,B.h8a,D.ax)}return A.nE(i,0,Math.atan2(j[2],j[3])-1.5707963267948966,new A.q(j[4],0,j[5]))},
iap(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=C.a([],x.z),i=new A.fm(j)
i.f=1
i.e=90
w=new A.fBk(i)
for(v=$.bFR(),u=v.length,t=0;t<v.length;v.length===u||(0,C.L)(v),++t){s=v[t]
r=B.kp[s.a*2]
q=s.b
p=A.Le(r,q+22).a
o=p[0]
n=p[1]
m=p[2]
l=p[3]
for(k=-4;k<=4;++k)w.$8(o,n,m,l,0,-25+k*11,18,5)
q=A.Le(r,q-6).a
w.$8(q[0],q[1],m,l,0,0,2.2,46)}return j},
Sz:function Sz(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.d=f
_.r=g
_.w=h},
fFc:function fFc(){},
aTF:function aTF(d,e,f){this.a=d
this.b=e
this.c=f},
bxs:function bxs(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=-1},
fiF:function fiF(d,e){this.a=d
this.b=e},
bKz:function bKz(d,e,f){var _=this
_.a=d
_.b=e
_.c=0
_.d=f},
bKA:function bKA(){},
fZZ:function fZZ(){},
h__:function h__(d){this.a=d},
fZX:function fZX(d,e){this.a=d
this.b=e},
fZY:function fZY(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fBk:function fBk(d){this.a=d},
fBl:function fBl(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
Aj:function Aj(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.x=0},
cAZ:function cAZ(d,e,f){var _=this
_.a=d
_.b=e
_.d=_.c=$
_.e=f
_.f=null
_.w=_.r=0
_.x=1
_.y=0},
cB0:function cB0(d){this.a=d},
cB1:function cB1(){},
cB_:function cB_(){},
hzK(d){return d.b==="hq"?12:D.o.E(D.k.bf((210+D.o.F(B.zm[d.f].l(),5)*24)/22),8,14)},
h0V(d,e,f){var w=new A.bKl(d,e,f,B.aAs,B.a33,C.a([],x.a),C.aX(x.S))
w.at=new A.b9U(null,-138,138,12,316,0,296,3.141592653589793,w.cck())
w.ax=w.cHf()
return w},
pE:function pE(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bKl:function bKl(d,e,f,g,h,i,j){var _=this
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
bKm:function bKm(){},
bKt:function bKt(d){this.a=d},
bKu:function bKu(d){this.a=d},
bKv:function bKv(d){this.a=d},
bKw:function bKw(d){this.a=d},
bKn:function bKn(d){this.a=d},
bKo:function bKo(){},
bKp:function bKp(){},
bKq:function bKq(d){this.a=d},
bKr:function bKr(d){this.a=d},
bKs:function bKs(d){this.a=d},
h11(d,e){var w=C.a([],x.ha),v=C.a([new A.M0(),new A.M0(),new A.M0()],x.gQ),u=C.a([],x.s),t=new C.e4()
t.cY(e)
w=new A.aU4(d,t,w,v,u)
w.bzt(d,e)
return w},
heU(d,e){var w,v,u,t,s,r,q,p,o=J.a6(e),n=x.fF,m=n.a(o.h(e,"wired"))
if(m==null)m=D.uP
w=n.a(o.h(e,"plumbed"))
if(w==null)w=D.uP
for(o=d.gqT(),n=o.length,v=J.a6(w),u=J.a6(m),t=0;t<o.length;o.length===n||(0,C.L)(o),++t){s=o[t]
r=""+s.a
q=u.h(m,r)
if(C.r5(q)){s.ay=!q
s.CW=null}p=v.h(w,r)
if(C.r5(p)){r=s.c
r=r==="bathroom"||r==="kitchen"}else r=!1
if(r){s.ch=!p
s.fr=null}}},
h12(d){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=J.a6(d),j=C.aK(k.h(d,"seed"))
j=j==null?l:D.k.N(j)
if(j==null)j=1
w=C.aK(k.h(d,"clock"))
w=w==null?l:D.k.N(w)
v=A.h11(j,(w==null?0:w)+7)
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
w=J.a6(u)
t=x.G
s=0
for(;;){r=v.c
r===$&&C.c()
if(!(s<r.length&&s<w.gL(u)))break
q=t.a(w.h(u,s))
r=v.c[s]
p=J.a6(q)
r.b=C.e8(p.h(q,"hunger"))
r.c=C.e8(p.h(q,"health"))
r.d=C.e8(p.h(q,"comfort"))
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
p.a=D.k.N(C.e8(n.h(q,"res")))
p.b=C.e8(n.h(q,"care"))
p.c=C.e8(n.h(q,"heal"));++s}k=j.a(k.h(d,"calls"))
k=J.aW(k==null?D.cv:k)
j=v.d
while(k.C()){m=t.a(k.gS(k))
w=J.a6(m)
r=new A.I7(D.k.N(C.e8(w.h(m,"id"))),D.k.N(C.e8(w.h(m,"res"))),C.cP(w.h(m,"kind")),C.cP(w.h(m,"msg")),D.k.N(C.e8(w.h(m,"reward"))))
r.f=C.e8(w.h(m,"age"))
j.push(r)}return v},
ajZ(d){return A.hG6(d)},
hG6(d){var w=0,v=C.j(x.H),u,t=2,s=[],r,q,p,o,n
var $async$ajZ=C.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:if(d<=0){w=1
break}q=$.a4i
if(q!=null){q.r+=d
w=1
break}t=4
w=7
return C.b(C.az(),$async$ajZ)
case 7:r=f
p=C.ev(J.r(r.a,"ngmy_construction_bonus_stars"))
if(p==null)p=0
w=8
return C.b(r.au("Int","ngmy_construction_bonus_stars",p+d),$async$ajZ)
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
return C.i($async$ajZ,v)},
aU7(){var w=0,v=C.j(x.S),u,t=2,s=[],r,q,p,o,n
var $async$aU7=C.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return C.b(C.az(),$async$aU7)
case 7:r=e
p=C.ev(J.r(r.a,"ngmy_construction_bonus_stars"))
q=p==null?0:p
w=!J.A(q,0)?8:9
break
case 8:w=10
return C.b(J.hu(r,"ngmy_construction_bonus_stars"),$async$aU7)
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
return C.i($async$aU7,v)},
heV(d,e,f){return Math.max(6,12+4*f-2*d-5*e)},
aU6(){var w=0,v=C.j(x.dy),u,t=2,s=[],r,q,p,o,n
var $async$aU6=C.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return C.b(C.az(),$async$aU6)
case 7:r=e
q=C.aT(J.r(r.a,"ngmy_community_v1"))
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
return C.i($async$aU6,v)},
aU5(){var w=0,v=C.j(x.H),u=1,t=[],s,r,q
var $async$aU5=C.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
w=6
return C.b(C.az(),$async$aU5)
case 6:s=e
w=7
return C.b(J.hu(s,"ngmy_community_v1"),$async$aU5)
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
return C.i($async$aU5,v)},
Fq:function Fq(d,e,f,g,h,i){var _=this
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
aU4:function aU4(d,e,f,g,h){var _=this
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
bLa:function bLa(){},
bL7:function bL7(d){this.a=d},
bL8:function bL8(d,e){this.a=d
this.b=e},
bL9:function bL9(){},
bLe:function bLe(d){this.a=d},
bLc:function bLc(d){this.a=d},
bLd:function bLd(){},
bLb:function bLb(d){this.a=d},
bLf:function bLf(){},
apL:function apL(d,e){this.c=d
this.a=e},
bkT:function bkT(){var _=this
_.d=null
_.e=$
_.f=null
_.r=$
_.x=_.w=null
_.y=0
_.c=_.a=null},
dSv:function dSv(d,e){this.a=d
this.b=e},
dSw:function dSw(d){this.a=d},
dSI:function dSI(){},
dSC:function dSC(d,e){this.a=d
this.b=e},
dSD:function dSD(d){this.a=d},
dSB:function dSB(d){this.a=d},
dSr:function dSr(){},
dSs:function dSs(){},
dSL:function dSL(){},
dSM:function dSM(){},
dSK:function dSK(d,e){this.a=d
this.b=e},
dSJ:function dSJ(d,e){this.a=d
this.b=e},
dSq:function dSq(d,e){this.a=d
this.b=e},
dSx:function dSx(d,e,f){this.a=d
this.b=e
this.c=f},
dSy:function dSy(d,e,f){this.a=d
this.b=e
this.c=f},
dSz:function dSz(d,e,f){this.a=d
this.b=e
this.c=f},
dSA:function dSA(d,e){this.a=d
this.b=e},
dSu:function dSu(d,e,f){this.a=d
this.b=e
this.c=f},
dSt:function dSt(d,e,f){this.a=d
this.b=e
this.c=f},
dSF:function dSF(d,e){this.a=d
this.b=e},
dSG:function dSG(d,e){this.a=d
this.b=e},
dSH:function dSH(d){this.a=d},
dSE:function dSE(d){this.a=d},
dSN:function dSN(d){this.a=d},
dSO:function dSO(){},
acN:function acN(d,e,f){this.c=d
this.d=e
this.a=f},
bfD:function bfD(d,e){this.b=d
this.a=e},
oo(d,e,f,g,h,i,j,k,l,m,n){return new A.Ms(g,m,d,k,e,f,n,h,l,i,j)},
t6(d){return D.d.fY($.hDV(),new A.fBW(d))},
aif(d,e){var w,v,u=d.e,t=new C.N(u,new A.h_z(),C.T(u).k("N<1,m>")).fJ(0)
u=e.b
w=C.a7(u).k("bd<2>")
v=C.df(new C.bd(u,w),w.k("M.E"))
if(d.a==="cord4"&&e.r)return!1
return t.d0(0,v.gkU(v))},
hzM(d,e,f,g,h){var w,v
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
h9l(d,e){var w,v,u,t,s,r,q=new A.fB7(),p=new A.fB8(),o=C.a([],x.bm)
for(w=e.b,w=new C.cI(w,C.a7(w).k("cI<1,2>")).gag(0),v=d.f,u=d.e;w.C();){t=w.d
t.toString
s=D.d.fY(v,new A.fB5(t))
r=D.d.fY(u,new A.fB6(t))
o.push(new A.a4l(new A.cCN(r.a,q.$1(r.e)),new A.czc(p.$1(s.f))))}return o},
fRQ(d){var w=d.e,v=C.T(w).k("Z<1>")
return new A.bMB(new C.Z(w,new A.fRR(),v).gL(0),new C.Z(w,new A.fRS(),v).gL(0),d.y)},
La(d,e){var w,v,u,t,s,r,q,p,o,n,m
if(d.a==="cord4"&&e.r)return B.hhD
w=A.hvb(A.fRQ(d),A.h9l(d,e),e.y)
v=w.c
u=new A.fC8(w)
t=w.b
s=t.length===0?null:D.d.f4(t,new A.fC5())
t=w.a===B.vd
if(t)r="ok"
else if(u.$1("SHORT")||u.$1("HOT_TO_GROUND"))r="short"
else{if(u.$1("REVERSED"))q="reversed"
else if(u.$1("NEUTRAL_GROUND"))q="bonded"
else if(u.$1("GROUND_AS_CURRENT"))q="groundWire"
else if(u.$1("OPEN_NEUTRAL"))q="openNeutral"
else if(u.$1("UNVERIFIED"))q="unverified"
else q=u.$1("MISSING_GROUND")?"noGround":"dead"
r=q}if(d.x&&!e.z)for(q=e.b,q=new C.cI(q,C.a7(q).k("cI<1,2>")).gag(0),p=d.f;q.C();){o=q.d
o.toString
n=D.d.fY(p,new A.fC6(o))
if(!n.c.t(0,o.b)){t=n.d
return new A.axO("dead","The "+D.d.fY(d.e,new A.fC7(o)).b+" is on the wrong terminal ("+n.b+"). "+t,!1,!1,!1,"none",t)}}m=t?"Wired correctly. Hot, neutral and ground are all in the right place, and every safety check passes.":s.c+" "+v.c
t=s==null?null:s.e
if(t==null)t=""
return new A.axO(r,m,v.d,v.e,v.f,v.b,t)},
h9N(d){var w,v,u,t
for(w=$.h0c(),v=w.length,u=0;u<v;++u){t=w[u]
if(t.a===d)return t.w}return d},
aON(d,e){var w
if(d==="light"||d==="fan")w=e.c===0?6.4:0.6
else w=e.c===0?4.7:-0.25
return w},
aQ4(d,e,f){var w,v
if(d==="light"||d==="fan"){w=A.aON(d,f)
v=f.c===0?w-3.2:w
switch(e){case 51:return new A.q(-1.5,-0.3,v)
case 52:return new A.q(0,-0.3,v)
default:return new A.q(1.5,-0.3,v)}}w=A.aON(d,f)
if(D.a.a0(d,"terminal")||d==="cord3"||d==="cord4")switch(e){case 23:return new A.q(-1.15,0.14999999999999997,w-0.3)
case 21:return new A.q(0,0.14999999999999997,w-0.3)
case 22:return new A.q(1.15,0.14999999999999997,w-0.3)
default:return new A.q(0,-1.65,w-0.1)}switch(e){case 21:return new A.q(0.98,-0.2+(d==="gfci"?0.95:0.85),w-0.45)
case 22:return new A.q(0.98,-0.2+(d==="gfci"?-0.75:-0.55),w-0.45)
case 23:return new A.q(-0.98,-0.2+(d==="gfci"?0.95:0.85),w-0.45)
case 24:return new A.q(-0.98,-0.2+(d==="gfci"?-0.75:-0.55),w-0.45)
default:return new A.q(0,-1.98,w+0.52)}},
h99(b7,b8,b9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1="nema",b2="terminal",b3=C.a([],x.z),b4=new A.fm(b3),b5=A.h9N(b7.a),b6=b5==="light"||b5==="fan"
if(b9){b4.b=1
b4.hs(B.haD,B.aXp,B.vN,3)
b4.hs(B.hbV,B.aXp,B.vN,3)
b4.hs(B.heI,B.aXK,B.vN,2)
b4.hs(B.hcB,B.aXK,B.vN,2)
b4.b=2
b4.mi(B.haa,B.aXi,B.iz,0.05,3)
b4.mi(B.h9C,B.aXi,B.iz,0.05,3)
b4.mi(B.h9u,B.hfc,B.iz,0.05,2)}w=b7.w.length===0
v=A.hqi(b4,w?b5:"outlet",!0)
u=new A.fzl(b4,b8,b5,b6)
t=D.d.gI(v)
s=!w
if(s){r=b7.e
q=r.length
for(p=t.a,o=t.b+0,n=t.c,m=q-1,l=q===1,k=0;k<q;++k){j=r[k]
i=l?0:k/m-0.5
h=D.o.F(k,2)
if(j.e==="ground")g=B.tU
else{g=j.c
if(g.A(0,B.n7))g=B.n7}u.$5(60+k,new A.q(p+i*0.5,o,n+0.04*k),new A.q(i*3.6,-1.7-0.12*h,2.3+0.15*k),j.a,g)}}else if(b5==="switch"){f=D.d.gak(v)
u.$5(10,t.a7(0,B.h2u),B.heL,"blackLine",B.Fk)
u.$5(13,f.a7(0,B.heU),B.h7K,"blackLoad",B.Fk)
u.$5(12,t.a7(0,B.hbt),B.h6S,"ground",B.tU)
b4.b=6
r=x.o
b4.j8(C.a([t.a7(0,B.aXf),B.h3b,B.VB],r),0.075,B.n7,!1,0.3,8)
b4.j8(C.a([f.a7(0,B.aXf),B.haL,B.VB],r),0.075,B.n7,!1,0.3,8)
b4.BF(B.VB,B.heD,0.28,B.af4,0.18,0.3,10)}else{u.$5(10,t.a7(0,B.h7V),B.h2Y,"black",B.Fk)
u.$5(11,t.a7(0,B.h9o),B.haW,"white",B.n7)
u.$5(12,t.a7(0,B.h9O),B.h9E,"ground",B.tU)}if(b6)A.hrk(b4,b5,b8)
else A.hqY(b4,b5,A.aON(b5,b8),b8.x,!1,s,b8.r)
if(b8.e&&b8.c===0){b4.b=0
b4.d=0.5
for(r=b7.f,p=r.length,e=0;e<p;++e){d=r[e]
a0=A.aQ4(b5,d.a,b8)
if(d.e)a1=D.bu
else{o=d.f
if(o==="ground")a1=D.be
else{o=o==="neutral"?D.c:B.Be
a1=o}}if(b6)o=0
else{o=a0.a
if(o>0.4)o=0.12
else o=o<-0.4?-0.12:0}if(b6)n=0.6
else n=Math.abs(a0.a)<0.4?0.2:0
b4.fO(new A.q(a0.a+o,a0.b+0,a0.c+n),0.36,a1,4,8,0.1)}b4.d=1}if(b8.c>=2&&!b6)A.htp(b4,b8.x)
r=!1
if(b8.c>=2)if(b8.d)r=b5==="outlet"||b5==="gfci"||D.a.a0(b5,b1)
if(r)A.i88(b4,b8.a&&!b8.x)
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
a3=A.aON(b5,b8)
a4=p?"Ceiling fan":"Ceiling light"
p=p?"The motor housing with blades. It has three wires: black (motor), white (neutral) and green (ground).":"The light fixture with a frosted dome. It has three wires: black, white and green."
a5=C.H([1,B.edd,2,B.edr,3,new A.cV(r,"A box that holds the wire connections. Every connection must be inside a box, never loose in the wall or the ceiling."+o,new A.q(0,0,-1.2),9),4,new A.cV(m,"The yellow jacket holds three wires: black (hot), white (neutral) and bare copper (ground). Yellow means 12 gauge wire for a 20 amp circuit. White jackets are 14 gauge for 15 amps.",new A.q(-0.4,1.5,-1.8),8),5,B.edO,10,new A.cV("Black wire: hot","The hot wire brings the power from the breaker. It is the dangerous one. "+l,new A.q(-0.8,-0.8,1.2),7),13,B.ed_,11,new A.cV("White wire: neutral","The neutral wire carries the power back to the panel. "+h,new A.q(0,-0.8,1.2),7),12,new A.cV("Bare copper wire: ground","The ground wire is a safety path. If a wire touches metal, the current runs down the ground instead of through you. "+g,new A.q(0.5,-0.8,1.2),7),6,B.edp,20,new A.cV(a2,n,new A.q(0,-0.2,a3),9),40,B.ecS,21,B.edu,22,B.edN,23,B.edn,24,B.eds,25,B.edg,26,B.edv,27,B.edH,28,B.edb,30,B.ecV,31,B.ecT,51,B.edq,52,B.ecX,53,B.edz,54,new A.cV(a4,p,new A.q(0,0,6.4),9),55,B.edJ],x.S,x.q)
if(s){a5.n(0,20,new A.cV(b7.b,b7.c,new A.q(0,-0.2,A.aON(b5,b8)),9))
for(s=b7.e,r=s.length,k=0;k<r;++k)a5.n(0,60+k,new A.cV(s[k].b,"Pick this wire up, then tap the screw it belongs on. Tap it again on the screw to take it off.",new A.q(-0.8+k*0.5,-0.8,1.2),7))
for(s=b7.f,r=s.length,e=0;e<r;++e){a6=s[e]
p=a6.a
a5.n(0,p,new A.cV(a6.b,a6.d,A.aQ4(b5,p,b8),5))}}a7=C.a([],x.E)
if(b8.f&&b8.c===0)for(s=b7.f,r=s.length,e=0;e<r;++e){d=s[e]
a0=A.aQ4(b5,d.a,b8)
a8=d.f
A:{p="hot"===a8
if(p){o=B.eTX
break A}if("neutral"===a8){o=B.eJI
break A}if("ground"===a8){o=B.eMj
break A}o=B.eyv
break A}a9=o.a
if(b6){B:{if(p){n="BLACK NUT \xb7 HOT"
break B}if("neutral"===a8){n="WHITE NUT \xb7 NEUTRAL"
break B}n="GROUND"
break B}i=n}else i=w?a9:d.b
if(b6){C:{if(p){p=B.h90
break C}if("neutral"===a8){p=B.h8U
break C}p=B.hfr
break C}b0=p}else{p=a0.a
if(p>0.4)n=3.8
else n=p<-0.4?-4.2:0
b0=new A.q(n,Math.abs(p)<0.4?-3:-0.4,1)}a7.push(new A.hh(new A.q(a0.a+b0.a,a0.b+b0.b,a0.c+b0.c),i,o.b,0))}if(b8.a&&b8.c===0)a7.push(B.c1k)
return new A.tU(b3,a5,a7,B.wE,null,0)},
hqi(d,e,f){var w,v,u=e==="light"||e==="fan"
d.b=3
if(u){d.dR(B.aXM,B.aXo,2.2,B.y1,0.3,18)
d.a4x(B.aXo,B.dX,2.2,B.y1,!1,!0,0.3,18)}else{d.aV(B.aXM,B.hak,B.y1,0.3)
d.aV(B.h7n,B.aX3,B.y1,0.3)
d.aV(B.h3R,B.aX3,B.y1,0.3)
d.aV(B.h9y,B.aXt,B.y1,0.3)
d.aV(B.h8S,B.aXt,B.y1,0.3)}w=C.a([],x.o)
v=new A.fkq(d,f,w)
if(e==="switch"){v.$2(4,B.d3A)
v.$2(5,B.d1A)}else v.$2(4,B.dgd)
return w},
hzR(d,e){var w,v=$.h0c(),u=new C.Z(v,new A.h_y(d),C.T(v).k("Z<1>"))
if(!u.gan(0)){w=e-60
return w>=0&&w<u.gI(0).e.length?u.gI(0).e[w].a:null}return A.i2K(d,e)},
i2K(d,e){var w
A:{if(10===e){w=d==="switch"?"blackLine":"black"
break A}if(13===e){w="blackLoad"
break A}if(11===e){w="white"
break A}if(12===e){w="ground"
break A}w=null
break A}return w},
hqY(d,e,f,g,h,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
if(D.a.a0(e,"terminal")){A.i87(d,e,f,g,a1)
return}w=new A.q(0,-0.2,f)
v=e==="switch"
u=e==="gfci"
if(g)t=B.tQ
else t=v?B.bky:B.YE
s=u?3.1:2.95
d.e=0
d.b=20
if(!h){d.aV(w.a7(0,B.h6_),new A.q(1.5,s,1.3),t,0.25)
d.e=0.15
d.b=26
r=w.a7(0,B.h5I)
d.aV(r,B.heF,g?B.afE:B.FI,0.8)
d.aJ(w.a7(0,B.hbq),B.hgx,B.xP)}d.e=0.3
d.b=27
r=w.a7(0,B.h8n)
d.aV(r,new A.q(1.3,u?2.85:2.7,0.16),t,0.3)
if(v){d.e=0.7
d.b=28
r=w.a7(0,B.haJ)
d.aV(r,B.h7S,g?B.tQ:H.YO,0.35)
r=w.a7(0,B.heb)
d.aV(r,B.hcA,g?B.tQ:B.afT,0.35)}else{d.e=0.6
if(D.a.a0(e,"nema"))A.i3C(d,w,e,g)
else{r=u?G.avD:B.dtV
q=r.length
p=f+0.47
o=f+0.46
n=f+0.5
m=0
for(;m<q;++m){l=r[m]
d.b=27
k=-0.2+(l+0.04)
d.aJ(new A.q(-0.28,k,p),B.haj,B.Ft)
d.aJ(new A.q(0.28,k,p),B.h8v,B.Ft)
k=-0.2+(l-0.32)
d.dE(new A.q(0,k,o),new A.q(0,k,n),0.11,B.Ft,10)}if(u){d.e=0.7
d.b=28
d.aV(w.a7(0,B.hba),B.aX9,B.boh,0.3)
d.aV(w.a7(0,B.heV),B.aX9,B.aiM,0.3)}}}if(h){d.e=0
return}j=u?0.95:0.85
i=u?-0.75:-0.55
r=new A.flK(d,w)
if(!v||a0){r.$6$taped(23,-1,j,B.agg,B.agO,u)
r.$5(24,-1,i,B.agg,B.agO)}r.$6$taped(21,1,j,B.Be,B.FR,u)
r.$5(22,1,i,B.Be,B.FR)
d.e=0.9
d.b=25
d.dR(w.a7(0,B.h9v),w.a7(0,B.hfw),0.18,B.aip,0.7,12)
d.aJ(w.a7(0,B.h8W),B.h9A,D.dY)
d.aV(w.a7(0,B.h6a),B.hbe,B.bde,0.6)
d.e=0},
hrk(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=e==="fan",i=A.aON(e,f)
d.e=0
d.b=55
w=i-0.3
v=i+0.3
u=j?3.3:3.5
t=f.x?B.tQ:B.bl5
d.dR(new A.q(0,0,w),new A.q(0,0,v),u,t,0.45,20)
d.b=54
if(j){u=i+4.2
d.dR(new A.q(0,0,v),new A.q(0,0,u),0.45,B.bgV,0.5,10)
v=i+7.4
d.dR(new A.q(0,0,u),new A.q(0,0,v),3.6,B.Xy,0.5,18)
d.dR(new A.q(0,0,v),new A.q(0,0,i+8.6),1.6,B.bpF,0.7,14)}else{d.d=0.92
v=f.x?B.tQ:B.bi3
d.fO(new A.q(0,0,i+1.2),3.6,v,6,14,0.7)
d.d=1}v=d.b=54
s=[B.eJR,B.evb,B.eRs]
for(u=x.o,r=i-3.2,q=0,p=0;p<3;++p){t=s[p]
o=f.c===0
d.b=o?B.cFS[q]:v;++q
n=o?r:i
o=t.b.a
d.j8(C.a([new A.q(o,-0.3,w),new A.q(o,-0.3,n+0.4)],u),0.07,t.a,!1,0.3,6)}if(f.c===0)for(w=[B.eCw,B.eLq,B.eUo],v=f.b,p=0;p<3;++p){m=w[p]
u=m.a
l=A.aQ4(e,u,f)
d.b=u
d.e=0.8
t=l.a+0
o=l.b+0
k=l.c
d.dR(new A.q(t,o,k+-0.2),new A.q(t,o,k+0.3),0.09,B.tU,0.6,6)
if(v.aj(0,u))d.BF(new A.q(t,o,k+-0.5),new A.q(t,o,k+0.9),0.4,m.b,0.26,0.4,8)
d.e=0}},
htp(d,e){var w
d.e=0.4
d.b=30
w=e?B.tQ:B.bci
d.aV(B.hb1,B.aXv,w,0.3)
d.aV(B.ha8,B.aXv,w,0.3)
d.aV(B.h3L,B.aXD,w,0.3)
d.aV(B.h4Q,B.h6m,w,0.3)
d.aV(B.hfo,B.aXD,w,0.3)
d.dR(B.h8D,B.ha4,0.1,B.FI,0.8,10)
d.e=0},
i88(d,e){var w,v
d.b=31
for(w=0;w<2;++w){v=B.d6f[w]
d.dR(new A.q(v,0.52,0.2),new A.q(v,0.52,1.9),0.04,B.FI,0.8,6)}d.aV(B.h0W,B.heq,B.bhH,0.35)
d.bcc(B.aXq,0.2,e?D.Y2:B.blS,0.9)
if(e){d.d=0.35
d.fO(B.aXq,0.5,D.Y2,4,8,0)
d.d=1}},
i3C(d,e,f,g){var w,v,u,t,s
d.b=27
d.e=0.62
w=e.a7(0,B.h9j)
v=e.a7(0,B.hfd)
d.dR(w,v,0.64,g?B.tQ:B.ai1,0.35,28)
d.e=0.7
u=new A.frh(e,d)
t=new A.frg(d,e)
s=new A.frf(u)
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
i87(d,e,f,g,h){var w,v,u=new A.q(0,-0.2,f)
d.e=0
d.b=26
w=u.a7(0,B.h9c)
d.aV(w,B.h6E,g?B.afE:B.FI,0.8)
d.e=0.2
d.b=20
w=u.a7(0,B.heR)
d.aV(w,B.haI,g?B.tQ:B.ai1,0.25)
d.e=0.3
for(w=f+0.5,v=0;v<2;++v)d.aJ(new A.q(0+B.d4s[v],0.14999999999999997,w),B.h9x,B.bpO)
d.b=27
d.e=0.4
d.aJ(u.a7(0,B.hcy),B.aaZ,B.Fk)
d.aJ(u.a7(0,B.hg3),B.aaZ,B.n7)
d.aJ(u.a7(0,B.hgg),B.aaZ,B.vK)
w=new A.fy2(d,u)
w.$5(23,-1.15,0.35,B.Be,B.FR)
w.$5(21,0,0.35,B.Be,B.FR)
w.$5(22,1.15,0.35,B.Be,B.FR)
d.e=0.9
d.b=25
d.dR(u.a7(0,B.h8K),u.a7(0,B.hbQ),0.26,B.aip,0.7,12)
d.aJ(u.a7(0,B.hgo),B.h7h,D.dY)
if(h){d.e=0.8
d.b=40
d.aV(u.a7(0,B.h8x),B.h7L,B.tU,0.7)}d.e=0},
fl:function fl(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
CA:function CA(d){var _=this
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
fDm:function fDm(){},
fDn:function fDn(){},
fDo:function fDo(){},
fDp:function fDp(){},
fDq:function fDq(){},
fBW:function fBW(d){this.a=d},
h_z:function h_z(){},
axO:function axO(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.r=i
_.w=j},
fB7:function fB7(){},
fB8:function fB8(){},
fB5:function fB5(d){this.a=d},
fB6:function fB6(d){this.a=d},
fRR:function fRR(){},
fRS:function fRS(){},
fC8:function fC8(d){this.a=d},
fC9:function fC9(d){this.a=d},
fC5:function fC5(){},
fC6:function fC6(d){this.a=d},
fC7:function fC7(d){this.a=d},
fzl:function fzl(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fzm:function fzm(d){this.a=d},
fkq:function fkq(d,e,f){this.a=d
this.b=e
this.c=f},
h_y:function h_y(d){this.a=d},
flK:function flK(d,e){this.a=d
this.b=e},
frh:function frh(d,e){this.a=d
this.b=e},
fri:function fri(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
frg:function frg(d,e){this.a=d
this.b=e},
frf:function frf(d){this.a=d},
fy2:function fy2(d,e){this.a=d
this.b=e},
a2k(d){var w
A:{if("outlet"===d){w="Outlet"
break A}if("gfci"===d){w="GFCI outlet"
break A}if("switch"===d){w="Light switch"
break A}if("light"===d){w="Ceiling light"
break A}if("fan"===d){w="Ceiling fan"
break A}w=A.t6(d).b
break A}return w},
fkc(d,e,f){var w
A:{if("ground"===d){w=y.t
break A}if("neutral"===d){w=y.I
break A}w=e.a===25?y.T:y.S
break A}return w},
fDr:function fDr(){},
fDs:function fDs(){},
fDt:function fDt(){},
fDu:function fDu(){},
fDv:function fDv(){},
fDw:function fDw(){},
fDx:function fDx(){},
fDy:function fDy(){},
fDz:function fDz(){},
fDA:function fDA(){},
fDf:function fDf(){},
fDg:function fDg(){},
fDh:function fDh(){},
fDi:function fDi(){},
fDj:function fDj(){},
fDk:function fDk(){},
fDl:function fDl(){},
aPT(d){return D.d.dL(B.a3Q,new A.fz7(d),new A.fz8())},
hc8(d,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i={},h=new A.h_v(),g=new A.h_s(),f=d.c,e=f==="hall"
if(!e&&d.p1!=="back"){w=a0.e?d.gh_(0)-14:Math.min(a0.d,d.gh_(0)-14)
v=h.$1(w)
return new A.abL(w,v,d.gh_(0)/2,g.$1(v))}if(e&&a1<2){w=a0.e?d.gh_(0)-14:Math.min(a0.d,d.gh_(0)-14)
v=h.$1(w)
return new A.abL(w,v,d.gh_(0)/2,g.$1(v))}if(e){f=C.a([],x.n)
for(e=d.w,u=e.length,t=0;t<e.length;e.length===u||(0,C.L)(e),++t){s=e[t]
if(s.b==="back"&&!s.a)f.push(s.c)}r=f.length===0?-40:D.d.f4(f,D.vG)-19-8
q=f.length===0?40:D.d.f4(f,D.pN)+19+8
p=d.gea(0)/2-8
f=a1===2?(-p+r)/2:(q+p)/2
return new A.abL(p-q,106,f,61)}e=d.gea(0)
q=d.gea(0)/2-6
if(f==="bathroom"&&!d.ok)q=14
f=C.a([],x.f)
for(u=d.w,o=u.length,t=0;t<u.length;u.length===o||(0,C.L)(u),++t){s=u[t]
if(s.b==="back"&&!s.a){n=s.c
f.push(new C.z(n-19,n+19))}}D.d.aZ(f,new A.h_t())
m=i.a=i.b=-e/2+6
l=new A.h_u(i)
for(e=f.length,t=0;t<f.length;f.length===e||(0,C.L)(f),++t){u=f[t]
k=u.a
if(k>m)l.$2(m,Math.min(k,q))
m=Math.max(m,u.b)}if(m<q)l.$2(m,q)
j=Math.max(30,i.a-i.b-4)
w=a0.e?j:Math.min(a0.d,j)
v=h.$1(w)
return new A.abL(w,v,(i.b+i.a)/2,g.$1(v))},
zj(d,e,f,g,h,i,j,k){var w=x.S
return new A.a5m(d,e,f,g,h,i,j,k,C.a([],x._),C.a([0,0,0],x.t),C.aX(w),C.U(w,x.i),C.U(w,x.cR),C.U(w,w),C.U(w,x.gh),C.U(w,x.N),C.a([],x.cX),C.aX(w),C.aX(w))},
aWy(d){var w=new A.aWx(d)
w.c8e()
return w},
hIW(d){var w=new A.aWx(7)
w.bzG(d)
return w},
in1(d){var w,v=d.c
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
E8:function E8(d,e,f){this.a=d
this.b=e
this.c=f},
pT:function pT(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fz7:function fz7(d){this.a=d},
fz8:function fz8(){},
abL:function abL(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
h_v:function h_v(){},
h_s:function h_s(){},
h_t:function h_t(){},
h_u:function h_u(d){this.a=d},
oq:function oq(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aWs:function aWs(d,e,f){this.a=d
this.b=e
this.c=f},
a5m:function a5m(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v){var _=this
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
bUu:function bUu(){},
bUt:function bUt(){},
aWx:function aWx(d){var _=this
_.a=""
_.b=d
_.c=!1
_.d=$
_.e=0},
bV4:function bV4(){},
bV5:function bV5(){},
bV6:function bV6(d){this.a=d},
bV7:function bV7(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bV8:function bV8(d,e){this.a=d
this.b=e},
bVc:function bVc(d){this.a=d},
bV9:function bV9(d,e){this.a=d
this.b=e},
bVb:function bVb(d,e,f){this.a=d
this.b=e
this.c=f},
bVa:function bVa(d,e,f){this.a=d
this.b=e
this.c=f},
bVg:function bVg(){},
bVf:function bVf(){},
bVe:function bVe(){},
bVd:function bVd(){},
b0Z(d,e,f){return new A.IW(f,d,e,null)},
hva(d){var w=A.vE(B.ig,d.e*3.141592653589793/2)
return new C.z(w.a,w.c)},
i9A(b3,b4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8=null,a9="A helicopter with its billboard",b0={},b1=C.a([],x.dI),b2=x.o
b0.a=C.a([],b2)
b0.b=C.a([],b2)
b0.c=C.a([],x.s)
b0.d=!1
w=new A.fzG(b0,b1)
v=new A.fzN(b0)
u=new A.fzI(b3)
t=new A.fzO(b3)
s=new A.fzy(new A.fzH(t),new A.fzE(t,u))
r=new A.fzK(b0,u,s,v)
q=new A.fzL(b0,new A.fzM(r),s)
p=new A.fzJ(b0,w,b1)
b2=D.d.t(B.dio,b4)
o=!b2
n=x._
m=C.a([],n)
for(l=b3.x,k=l.length,j=0;j<l.length;l.length===k||(0,C.L)(l),++j){i=l[j]
h=i.b
if(h==="billboard"||h==="cornersign"||h==="adboard"||h==="tower"||h==="hq")m.push(i)}k=C.T(l).k("Z<1>")
g=new C.Z(l,new A.fzz(),k)
h=C.a([],n)
for(f=l.length,j=0;j<l.length;l.length===f||(0,C.L)(l),++j){i=l[j]
e=i.b
if(e==="house2"||e==="bighouse")h.push(i)}v.$3$note(B.h00,B.h_5,"Welcome to NGMY Town")
if(!g.gan(0))q.$1(g.gI(0))
if(b4==="city"||o){v.$2(B.hdU,B.hdg)
v.$2(B.hdZ,B.hdf)
v.$2(B.h_r,B.fZ5)
v.$2(B.h5_,B.h1N)
v.$2(B.h4V,B.h1O)
v.$2(B.h_L,B.fZ7)
w.$1$speed(200)}if(b4==="billboards"||o){d={}
v.$2(B.hdB,B.hdw)
v.$3$note(B.h_h,B.Au,"The big NGMY logo board: New Global Movement for Youth")
v.$2(B.h1w,B.Au)
v.$2(B.h2k,B.Au)
v.$2(B.h0h,B.Au)
v.$2(B.hd5,B.Au)
v.$2(B.hdn,B.Au)
v.$2(B.hcZ,B.hdh)
d.a=!g.gag(0).C()?B.fZ6:new A.q(g.gI(0).c,0,g.gI(0).d)
a0=C.C(m,x.eB)
a1=0
for(;;){if(a0.length!==0)m=a1<(o?8:80)
else m=!1
if(!m)break
D.d.aZ(a0,new A.fzA(d))
i=D.d.cz(a0,0)
q.$1(i)
d.a=new A.q(i.c,0,i.d);++a1}w.$1$speed(105)
for(a2=0;a2<2;++a2)b1.push(new A.Mn(B.rN,B.rN,130,6,a9,a8,!1,a8,a2))}if(b4==="edges"){n=C.a([],n)
for(m=l.length,j=0;j<l.length;l.length===m||(0,C.L)(l),++j){i=l[j]
f=i.b
if(f==="adboard"||f==="cornersign")n.push(i)}D.d.aZ(n,new A.fzB(new A.fzx()))
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
r.$7$note(i,150,50,270,330,70,i.b==="bighouse"?"A big house with TV windows":"A house");++a2}a4=new C.Z(h,new A.fzC(),x.am)
if(!a4.gan(0)){i=a4.gI(0)
a5=A.hva(i)
n=i.c
m=i.d
v.$2(new A.q(n+a5.a*220,110,m+a5.b*220),new A.q(n,45,m))
p.$1(i)}}if(b4==="hospital"||o)for(j=0;j<3;++j){a6=B.djw[j]
i=new C.Z(l,new A.fzD(a6),k)
if(!i.gag(0).C())continue
a7=i.gag(0)
if(!a7.C())C.b9(C.fu())
r.$7$note(a7.gS(0),160,50,300,360,60,"The "+a6)
a7=i.gag(0)
if(!a7.C())C.b9(C.fu())
p.$1(a7.gS(0))}w.$0()
if(b4==="traffic"||o){if(b2){for(a2=0;a2<2;++a2)b1.push(new A.Mn(B.rN,B.rN,130,6,a9,a8,!1,a8,a2))
o=!1}a2=0
for(;;){if(a2<4)b2=a2<(o?2:4)
else b2=!1
if(!b2)break
b1.push(new A.Mn(B.rN,B.rN,130,6,B.kp[a2].a==="bus"?"A self-driving bus with its billboards":"A self-driving police car",a8,!1,a2,a8));++a2}}return b1},
IW:function IW(d,e,f,g){var _=this
_.d=d
_.f=e
_.r=f
_.a=g},
aEM:function aEM(d,e,f,g,h,i,j,k,l,m,n,o,p,q){var _=this
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
_.aN=!1
_.b4=_.aC=null
_.bM=_.be=_.b2=0
_.aK=null
_.bi=!1
_.bG=null
_.c8=0
_.c5=m
_.cL=null
_.cl=n
_.P=_.bD=null
_.T=0
_.bJ=o
_.by=null
_.bX=0
_.f2=_.eu=_.ej=!1
_.ab=1
_.ez=400
_.ai=_.fB=!1
_.bE=_.al=null
_.bZ=0
_.du=""
_.cJ=null
_.eK=p
_.hO=_.hN=0
_.jh=-1
_.is=q
_.ha=!1
_.mO=_.lg=-1e5
_.lB=0
_.c=_.a=_.qS=_.t9=null},
eed:function eed(){},
eea:function eea(d){this.a=d},
eeb:function eeb(d){this.a=d},
ee9:function ee9(){},
eec:function eec(d){this.a=d},
ecX:function ecX(d,e,f){this.a=d
this.b=e
this.c=f},
ecY:function ecY(d){this.a=d},
ecW:function ecW(d){this.a=d},
ecZ:function ecZ(d,e){this.a=d
this.b=e},
ebu:function ebu(d,e){this.a=d
this.b=e},
edq:function edq(d){this.a=d},
ecr:function ecr(d){this.a=d},
ecs:function ecs(d,e){this.a=d
this.b=e},
ect:function ect(d,e){this.a=d
this.b=e},
ecu:function ecu(d,e){this.a=d
this.b=e},
ecv:function ecv(d){this.a=d},
eaY:function eaY(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eaW:function eaW(d,e,f){this.a=d
this.b=e
this.c=f},
eaV:function eaV(d,e){this.a=d
this.b=e},
eaX:function eaX(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eaT:function eaT(d,e){this.a=d
this.b=e},
eaU:function eaU(d,e,f){this.a=d
this.b=e
this.c=f},
eaS:function eaS(d,e){this.a=d
this.b=e},
eb6:function eb6(d){this.a=d},
eb7:function eb7(d){this.a=d},
eb8:function eb8(d){this.a=d},
eck:function eck(d){this.a=d},
ecm:function ecm(d){this.a=d},
ecl:function ecl(d){this.a=d},
ecn:function ecn(d){this.a=d},
ecj:function ecj(d){this.a=d},
eco:function eco(d){this.a=d},
eci:function eci(d){this.a=d},
ecp:function ecp(d){this.a=d},
ech:function ech(d){this.a=d},
ecq:function ecq(d){this.a=d},
ecg:function ecg(d){this.a=d},
eay:function eay(d){this.a=d},
eaz:function eaz(d){this.a=d},
ebi:function ebi(d){this.a=d},
ebk:function ebk(d){this.a=d},
ebj:function ebj(d){this.a=d},
ebl:function ebl(d){this.a=d},
ebh:function ebh(d){this.a=d},
ebm:function ebm(d){this.a=d},
ebg:function ebg(d){this.a=d},
ebn:function ebn(d){this.a=d},
ebf:function ebf(d){this.a=d},
ebo:function ebo(d){this.a=d},
ebe:function ebe(d){this.a=d},
ebp:function ebp(d){this.a=d},
ebd:function ebd(d){this.a=d},
ebq:function ebq(d){this.a=d},
ebc:function ebc(d){this.a=d},
edo:function edo(){},
edp:function edp(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
edm:function edm(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
edl:function edl(d){this.a=d},
edn:function edn(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ebI:function ebI(d){this.a=d},
e9x:function e9x(){},
edR:function edR(){},
e9Y:function e9Y(){},
ebD:function ebD(d){this.a=d},
ebC:function ebC(d){this.a=d},
ebE:function ebE(d){this.a=d},
ebB:function ebB(d){this.a=d},
edS:function edS(d,e){this.a=d
this.b=e},
edQ:function edQ(d){this.a=d},
ed2:function ed2(d,e,f){this.a=d
this.b=e
this.c=f},
ed3:function ed3(d,e){this.a=d
this.b=e},
ed1:function ed1(d,e){this.a=d
this.b=e},
ed0:function ed0(d){this.a=d},
ed_:function ed_(d){this.a=d},
ec1:function ec1(){},
ec2:function ec2(){},
ebZ:function ebZ(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
ec0:function ec0(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ec_:function ec_(d){this.a=d},
ebX:function ebX(d){this.a=d},
ebW:function ebW(d){this.a=d},
ebY:function ebY(d,e){this.a=d
this.b=e},
ebV:function ebV(d,e){this.a=d
this.b=e},
ebr:function ebr(d){this.a=d},
ebs:function ebs(d){this.a=d},
ecT:function ecT(){},
eb4:function eb4(d){this.a=d},
eb3:function eb3(d){this.a=d},
eb5:function eb5(d,e){this.a=d
this.b=e},
eaR:function eaR(d){this.a=d},
ebJ:function ebJ(){},
ed4:function ed4(d,e){this.a=d
this.b=e},
eb2:function eb2(){},
edg:function edg(d){this.a=d},
eb0:function eb0(d){this.a=d},
eb1:function eb1(d,e){this.a=d
this.b=e},
eb_:function eb_(d){this.a=d},
eaZ:function eaZ(d){this.a=d},
eby:function eby(){},
edf:function edf(d,e){this.a=d
this.b=e},
ee4:function ee4(){},
eaA:function eaA(){},
ebv:function ebv(d,e){this.a=d
this.b=e},
ebw:function ebw(d){this.a=d},
ebx:function ebx(){},
eba:function eba(){},
ebb:function ebb(d){this.a=d},
ebL:function ebL(){},
ebM:function ebM(d,e){this.a=d
this.b=e},
ea4:function ea4(){},
ea3:function ea3(){},
ea5:function ea5(d){this.a=d},
ea2:function ea2(d){this.a=d},
ea6:function ea6(d){this.a=d},
ea1:function ea1(d){this.a=d},
ea7:function ea7(d,e){this.a=d
this.b=e},
ea0:function ea0(d){this.a=d},
ea8:function ea8(d,e){this.a=d
this.b=e},
ea_:function ea_(d,e){this.a=d
this.b=e},
ea9:function ea9(d){this.a=d},
e9Z:function e9Z(d){this.a=d},
eaw:function eaw(d){this.a=d},
eax:function eax(d){this.a=d},
ecS:function ecS(d,e,f){this.a=d
this.b=e
this.c=f},
ecQ:function ecQ(d,e,f){this.a=d
this.b=e
this.c=f},
ecR:function ecR(d,e){this.a=d
this.b=e},
ecM:function ecM(d,e,f){this.a=d
this.b=e
this.c=f},
ecL:function ecL(){},
ecN:function ecN(d,e){this.a=d
this.b=e},
ecO:function ecO(d,e){this.a=d
this.b=e},
ecP:function ecP(d,e){this.a=d
this.b=e},
ecB:function ecB(d,e){this.a=d
this.b=e},
ecy:function ecy(){},
ecz:function ecz(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ecx:function ecx(d,e,f){this.a=d
this.b=e
this.c=f},
ecA:function ecA(d,e,f){this.a=d
this.b=e
this.c=f},
ecw:function ecw(d,e){this.a=d
this.b=e},
edP:function edP(d){this.a=d},
edN:function edN(d){this.a=d},
edO:function edO(d,e){this.a=d
this.b=e},
edF:function edF(d,e,f){this.a=d
this.b=e
this.c=f},
edE:function edE(){},
edG:function edG(){},
edH:function edH(d,e){this.a=d
this.b=e},
edI:function edI(d,e){this.a=d
this.b=e},
edJ:function edJ(d){this.a=d},
edK:function edK(d){this.a=d},
edL:function edL(d){this.a=d},
edM:function edM(d){this.a=d},
edB:function edB(d){this.a=d},
edz:function edz(d){this.a=d},
edA:function edA(){},
edv:function edv(d,e,f){this.a=d
this.b=e
this.c=f},
edt:function edt(d){this.a=d},
edu:function edu(){},
edw:function edw(d,e,f){this.a=d
this.b=e
this.c=f},
eds:function eds(d,e){this.a=d
this.b=e},
edx:function edx(d,e){this.a=d
this.b=e},
edy:function edy(d,e){this.a=d
this.b=e},
edc:function edc(d,e){this.a=d
this.b=e},
edd:function edd(d){this.a=d},
ede:function ede(){},
edC:function edC(d,e){this.a=d
this.b=e},
edr:function edr(d,e){this.a=d
this.b=e},
edj:function edj(d){this.a=d},
edk:function edk(){},
edb:function edb(){},
edi:function edi(){},
ee_:function ee_(d){this.a=d},
ee0:function ee0(d){this.a=d},
ee1:function ee1(d){this.a=d},
ee2:function ee2(){},
edT:function edT(d){this.a=d},
edU:function edU(d){this.a=d},
edV:function edV(d,e){this.a=d
this.b=e},
edW:function edW(d,e){this.a=d
this.b=e},
edX:function edX(d,e){this.a=d
this.b=e},
edY:function edY(d,e){this.a=d
this.b=e},
edZ:function edZ(d,e){this.a=d
this.b=e},
eb9:function eb9(){},
ecI:function ecI(d,e){this.a=d
this.b=e},
ebQ:function ebQ(d){this.a=d},
ebN:function ebN(){},
ebO:function ebO(){},
ebP:function ebP(){},
ebz:function ebz(){},
ebA:function ebA(d){this.a=d},
ed5:function ed5(){},
ebt:function ebt(d){this.a=d},
ecU:function ecU(){},
ecV:function ecV(d){this.a=d},
ed6:function ed6(d){this.a=d},
ed7:function ed7(d){this.a=d},
ed8:function ed8(d){this.a=d},
ebG:function ebG(d){this.a=d},
ebF:function ebF(d){this.a=d},
ebH:function ebH(d){this.a=d},
ed9:function ed9(d){this.a=d},
eda:function eda(){},
edh:function edh(d){this.a=d},
ec4:function ec4(){},
ec5:function ec5(d){this.a=d},
ecd:function ecd(d){this.a=d},
ece:function ece(){},
ecf:function ecf(d){this.a=d},
ec7:function ec7(d){this.a=d},
ec8:function ec8(d,e){this.a=d
this.b=e},
ec6:function ec6(d,e){this.a=d
this.b=e},
ec9:function ec9(d,e){this.a=d
this.b=e},
ecc:function ecc(d){this.a=d},
eca:function eca(d){this.a=d},
ec3:function ec3(d){this.a=d},
ecb:function ecb(d){this.a=d},
ebR:function ebR(d){this.a=d},
ebS:function ebS(d){this.a=d},
ee3:function ee3(d){this.a=d},
ebU:function ebU(d){this.a=d},
ebT:function ebT(d){this.a=d},
e9w:function e9w(d){this.a=d},
e9v:function e9v(d,e,f){this.a=d
this.b=e
this.c=f},
e9q:function e9q(){},
e9r:function e9r(){},
e9s:function e9s(d){this.a=d},
e9t:function e9t(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ebK:function ebK(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
edD:function edD(d,e){this.a=d
this.b=e},
ecJ:function ecJ(d,e){this.a=d
this.b=e},
ecK:function ecK(d,e){this.a=d
this.b=e},
e9u:function e9u(d,e){this.a=d
this.b=e},
eaG:function eaG(d){this.a=d},
eaH:function eaH(d){this.a=d},
eaI:function eaI(d){this.a=d},
eaJ:function eaJ(d){this.a=d},
eaK:function eaK(d,e){this.a=d
this.b=e},
eaL:function eaL(d){this.a=d},
eaF:function eaF(d){this.a=d},
eaM:function eaM(d,e){this.a=d
this.b=e},
eaE:function eaE(d,e){this.a=d
this.b=e},
eaN:function eaN(d,e){this.a=d
this.b=e},
eaD:function eaD(d,e){this.a=d
this.b=e},
eaO:function eaO(d){this.a=d},
eaC:function eaC(d){this.a=d},
eaP:function eaP(d,e){this.a=d
this.b=e},
eaB:function eaB(d,e){this.a=d
this.b=e},
eaQ:function eaQ(d,e){this.a=d
this.b=e},
ee6:function ee6(d){this.a=d},
ee8:function ee8(d){this.a=d},
ee5:function ee5(d){this.a=d},
ee7:function ee7(d){this.a=d},
eai:function eai(d){this.a=d},
eaj:function eaj(d){this.a=d},
eak:function eak(d){this.a=d},
eao:function eao(d){this.a=d},
eap:function eap(d){this.a=d},
eaq:function eaq(d){this.a=d},
eah:function eah(d){this.a=d},
ear:function ear(d){this.a=d},
eag:function eag(d){this.a=d},
eas:function eas(d){this.a=d},
eaf:function eaf(d){this.a=d},
eat:function eat(d){this.a=d},
eau:function eau(d){this.a=d},
eae:function eae(d){this.a=d},
eav:function eav(d){this.a=d},
ead:function ead(d){this.a=d},
eal:function eal(d){this.a=d},
eac:function eac(d){this.a=d},
eam:function eam(d){this.a=d},
eab:function eab(d){this.a=d},
ean:function ean(d){this.a=d},
eaa:function eaa(d){this.a=d},
e9D:function e9D(d){this.a=d},
e9R:function e9R(d){this.a=d},
e9Q:function e9Q(){},
e9E:function e9E(d){this.a=d},
e9F:function e9F(d){this.a=d},
e9S:function e9S(){},
e9I:function e9I(d,e){this.a=d
this.b=e},
e9T:function e9T(d){this.a=d},
e9C:function e9C(d){this.a=d},
e9U:function e9U(d){this.a=d},
e9V:function e9V(d){this.a=d},
e9B:function e9B(d){this.a=d},
e9W:function e9W(d){this.a=d},
e9X:function e9X(d){this.a=d},
e9G:function e9G(d){this.a=d},
e9A:function e9A(d){this.a=d},
e9H:function e9H(d){this.a=d},
e9z:function e9z(d){this.a=d},
e9J:function e9J(d){this.a=d},
e9K:function e9K(d){this.a=d},
e9L:function e9L(d){this.a=d},
e9M:function e9M(d){this.a=d},
e9N:function e9N(d){this.a=d},
e9O:function e9O(d){this.a=d},
e9P:function e9P(d){this.a=d},
e9y:function e9y(){},
ecH:function ecH(d){this.a=d},
ecE:function ecE(d,e,f){this.a=d
this.b=e
this.c=f},
ecF:function ecF(d,e){this.a=d
this.b=e},
ecD:function ecD(d){this.a=d},
ecG:function ecG(d,e){this.a=d
this.b=e},
ecC:function ecC(d){this.a=d},
bjY:function bjY(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
dvc:function dvc(d,e){this.a=d
this.b=e},
bjn:function bjn(d,e){this.b=d
this.a=e},
aJ0:function aJ0(d,e){this.c=d
this.a=e},
bu1:function bu1(){this.c=this.a=this.d=null},
f7f:function f7f(d,e){this.a=d
this.b=e},
f7e:function f7e(d){this.a=d},
f7h:function f7h(d){this.a=d},
f7i:function f7i(d){this.a=d},
f7j:function f7j(d){this.a=d},
f7g:function f7g(d){this.a=d},
f1K:function f1K(d,e,f){var _=this
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
fzG:function fzG(d,e){this.a=d
this.b=e},
fzN:function fzN(d){this.a=d},
fzI:function fzI(d){this.a=d},
fzO:function fzO(d){this.a=d},
fzH:function fzH(d){this.a=d},
fzE:function fzE(d,e){this.a=d
this.b=e},
fzF:function fzF(d,e){this.a=d
this.b=e},
fzy:function fzy(d,e){this.a=d
this.b=e},
fzK:function fzK(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fzM:function fzM(d){this.a=d},
fzL:function fzL(d,e,f){this.a=d
this.b=e
this.c=f},
fzJ:function fzJ(d,e,f){this.a=d
this.b=e
this.c=f},
fzz:function fzz(){},
fzA:function fzA(d){this.a=d},
fzx:function fzx(){},
fzB:function fzB(d){this.a=d},
fzC:function fzC(){},
fzD:function fzD(d){this.a=d},
aJZ:function aJZ(d,e,f){this.c=d
this.d=e
this.a=f},
bwc:function bwc(){this.d=!1
this.c=this.a=null},
fcY:function fcY(d){this.a=d},
fcX:function fcX(d){this.a=d},
hkM(){var w=$.hkL
return w==null?$.hkL=new A.cgv().$0():w},
ijU(d,e,f){var w,v,u,t,s,r,q,p,o,n=null,m=e.a,l=e.b,k=new C.a3(0,0,0+m,0+l),j=C.bs(k,D.it)
$.S()
w=C.I()
w.sam(B.c5G.aA(0,k))
d.az(j,w)
v=C.I()
v.b=D.a9
v.r=F.fA.gp(0)
v.c=l*0.025
w=l*0.05
j=l*0.08
d.az(C.bs(k.cq(-w),new C.aP(j,j)),v)
w=C.bs(k.cq(-(l*0.1)),new C.aP(w,w))
v.c=l*0.01
d.az(w,v)
u=new C.t(m/2,l/2)
t=l*0.36
l=C.I()
l.r=H.ah8.gp(0)
d.ad(u,t*1.1,l)
l=C.I()
l.r=F.fA.gp(0)
d.ad(u,t,l)
l=C.I()
l.r=B.Fe.gp(0)
d.ad(u,t*0.9,l)
l=C.I()
l.b=D.a9
l.r=E.jL.gp(0)
l.c=t*0.04
d.ad(u,t*0.95,l)
s=$.W9
r=C.bK(u,t*1.2,t*1.5)
if(s!=null){m=s.c
l=s.d
q=Math.min((r.c-r.a)/m,(r.d-r.b)/l)
p=C.bK(r.gbL(),l*q,m*q)
j=C.I()
j.Q=D.ci
d.oD(s,new C.a3(0,0,m,l),p,j)}else{o=C.fx(n,n,n,n,C.cS(n,n,n,n,n,n,n,n,n,C.l(n,n,E.jL,n,n,n,n,n,n,n,n,t*0.6,n,n,D.u,n,n,!0,n,n,n,n,n,n,n,n),"NGMY"),D.a4,D.bY,n,D.dA,D.bW)
o.ek()
m=o.b
l=m.c
m=m.a.c
o.a3(d,u.aE(0,new C.t(l/2,m.gbb(m)/2)))}},
hyQ(d,e,f){var w,v,u,t,s,r,q,p,o=null,n=e.ei(D.I),m=e.gdC()/2
$.S()
w=C.I()
w.r=F.fA.gp(0)
d.ad(n,m,w)
w=C.I()
w.r=B.Fe.gp(0)
d.ad(n,m*0.9,w)
w=C.I()
w.b=D.a9
w.r=E.jL.gp(0)
w.c=m*0.04
d.ad(n,m*0.93,w)
v=$.W9
u=C.bK(n,m*1.2,m*1.5)
if(v!=null){w=v.c
t=v.d
s=Math.min((u.c-u.a)/w,(u.d-u.b)/t)
r=C.bK(u.gbL(),t*s,w*s)
q=C.I()
q.Q=D.ci
d.oD(v,new C.a3(0,0,w,t),r,q)}else{p=C.fx(o,o,o,o,C.cS(o,o,o,o,o,o,o,o,o,C.l(o,o,E.jL,o,o,o,o,o,o,o,o,m*0.6,o,o,D.u,o,o,!0,o,o,o,o,o,o,o,o),"NGMY"),D.a4,D.bY,o,D.dA,D.bW)
p.ek()
w=p.b
t=w.c
w=w.a.c
p.a3(d,n.aE(0,new C.t(t/2,w.gbb(w)/2)))}},
H7(d,e,f,g,h){var w,v,u,t,s,r,q,p,o,n,m=null,l=e.a,k=e.b,j=new C.a3(0,0,0+l,0+k),i=e.gdC()*0.08
i=C.bs(j,new C.aP(i,i))
$.S()
w=C.I()
w.sam(B.arA.aA(0,j))
d.az(i,w)
w=j.cq(-(e.gdC()*0.045))
i=e.gdC()*0.06
i=C.bs(w,new C.aP(i,i))
w=C.I()
w.b=D.a9
w.r=F.fA.gp(0)
w.c=e.gdC()*0.035
d.az(i,w)
v=k*0.33
u=new C.t(k*0.6,k*0.5)
w=C.I()
w.r=F.fA.gp(0)
d.ad(u,v,w)
w=C.I()
w.r=B.Fe.gp(0)
d.ad(u,v*0.88,w)
t=$.W9
s=C.bK(u,v*1.15,v*1.4)
if(t!=null){i=t.c
w=t.d
r=Math.min((s.c-s.a)/i,(s.d-s.b)/w)
q=C.bK(s.gbL(),w*r,i*r)
p=C.I()
p.Q=D.ci
d.oD(t,new C.a3(0,0,i,w),q,p)}else{o=C.fx(m,m,m,m,C.cS(m,m,m,m,m,m,m,m,m,C.l(m,m,E.jL,m,m,m,m,m,m,m,m,v*0.55,m,m,D.u,m,m,!0,m,m,m,m,m,m,m,m),"NGMY"),D.a4,D.bY,m,D.dA,D.bW)
o.ek()
i=o.b
w=i.c
i=i.a.c
o.a3(d,u.aE(0,new C.t(w/2,i.gbb(i)/2)))}n=k*1.08
l=new A.fR8(l-n-k*0.2,d,n)
l.$4(g,k*0.36,D.c,k*0.16)
l.$4(h,k*0.14,F.fA,k*0.62)},
huu(d){return 210+D.o.F(d.l(),5)*24},
fR4(d,e,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k="NEW GLOBAL",j="MOVEMENT",i="FOR YOUTH",h=e.a,g=e.b,f=new C.a3(0,0,0+h,0+g)
A:{if(0===a1){w=B.arA
break A}if(1===a1){w=B.c5v
break A}w=B.c3x
break A}v=e.gdC()*0.06
v=C.bs(f,new C.aP(v,v))
$.S()
u=C.I()
u.sam(w.aA(0,f))
d.az(v,u)
t=C.I()
t.b=D.a9
w=a1===2
t.r=(w?E.jL:F.fA).gp(0)
t.c=e.gdC()*0.04
v=f.cq(-(e.gdC()*0.05))
u=e.gdC()*0.05
d.az(C.bs(v,new C.aP(u,u)),t)
u=f.cq(-(e.gdC()*0.1))
v=e.gdC()*0.03
v=C.bs(u,new C.aP(v,v))
t.c=e.gdC()*0.012
d.az(v,t)
if(a1===1)s=E.jL
else s=w?E.jL:D.c
w=new A.fR6($.W9,d,s)
v=new A.fR5(s,e,d)
u=g*0.4
r=g*0.12
if(a1===0){q=g*0.5
p=new C.t(g*0.62,q)
o=C.I()
o.r=F.fA.gp(0)
d.ad(p,g*0.34,o)
o=C.I()
o.r=B.Fe.gp(0)
d.ad(p,g*0.3,o)
w.$1(C.bK(p,u,q))
n=g*1.04
m=h-r
r=new A.fR7(e)
h=r.$1(k)
q=r.$1(j)
r=r.$1(i)
r=Math.max(C.jf(q),C.jf(r))
l=(n+m)/2
r=g*0.16*Math.min(1,(m-n)/Math.max(C.jf(h),r))
v.$3(k,new C.t(l,g*0.2),r)
v.$3(j,new C.t(l,u),r)
v.$3(i,new C.t(l,g*0.6),r)}else{q=h/2
w.$1(C.bK(new C.t(q,g*0.42),u,h*0.6))
v.$3("NGMY",new C.t(q,g*0.68),r)
v.$4$w(i,new C.t(q,g*0.82),g*0.06,D.U)}},
huM(f8,f9,g0,g1,g2,g3,g4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1,e2,e3,e4,e5,e6,e7,e8,e9,f0,f1,f2,f3="walls",f4="GFCI outlet",f5="Wall outlet",f6="\ud83d\udeb0 Needs plumbing",f7=f8.c
if(f7==="outside")return A.i4x(f8,g2,g1,g4,g3,g0)
f8.cJj()
w=x.z
v=C.a([],w)
u=new A.fm(v)
t=C.U(x.S,x.q)
s=C.a([],x.E)
r=C.a([],x.a)
q=f8.gea(0)
p=f8.gh_(0)
o=C.a([],x.O)
for(n=f8.z,m=n.length,l=0;l<n.length;n.length===m||(0,C.L)(n),++l)o.push(B.azR[n[l]])
k=B.azz[f8.Q]
j=new A.fA4(g1)
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
u.mi(new A.q(0,-0.6,n),new A.q(m,1.2,h),g,d,3)
t.n(0,310,new A.cV("Floor","The "+k.a.toLowerCase()+" floor.",new A.q(0,0,n),140))
u.b=0
if(f==="wood")for(f=-q/2,a0=1;a0<8;++a0){e=C.ar(g,D.w,0.25)
e.toString
u.aJ(new A.q(f+a0*q/8,0.05,n),new A.q(0.3,0.2,p),e)}else if(e)for(g=-q/2,a0=1;a0<6;++a0){u.aJ(new A.q(g+a0*q/6,0.05,n),new A.q(0.3,0.2,p),B.aeM)
u.aJ(new A.q(0,0.05,a0*p/6),new A.q(q,0.2,0.3),B.aeM)}u.x=0
g=f7==="hall"
if(g){a1=Math.min(q*0.5,p*1.5)
a2=p-14
f=-a1/2
e=a1/2
r.push(new A.fP(C.a([new A.q(f,0.5,14),new A.q(e,0.5,14),new A.q(e,0.5,a2),new A.q(f,0.5,a2)],x.o),0,A.hyC(),900,900*(a2-14)/a1,60,-1,i,!1))}u.f=0
u.b=j.$2(f3,300)
a3=u.x=$.dS=$.dS+1
u.hs(new A.q(0,65,-0.6),new A.q(m,130,1.2),o[0],3)
u.x=0
u.b=j.$2(f3,301)
a4=u.x=$.dS=$.dS+1
f=-q
e=f/2
u.hs(new A.q(e-0.6,65,n),new A.q(1.2,130,p),o[1],3)
u.x=0
u.b=j.$2(f3,302)
a5=u.x=$.dS=$.dS+1
d=q/2
u.hs(new A.q(d+0.6,65,n),new A.q(1.2,130,p),o[2],3)
u.x=0
t.n(0,300,B.ed1)
t.n(0,301,B.ed5)
t.n(0,302,B.ede)
if(f9){u.b=0
u.hs(new A.q(0,65,p+0.6),new A.q(m,130,1.2),o[0],3)}u.f=u.b=0
u.x=a3
u.aV(new A.q(0,2.5,0.4),new A.q(q,5,0.8),B.kF,0.1)
u.x=a4
u.aV(new A.q(e+0.4,2.5,n),new A.q(0.8,5,p),B.kF,0.1)
u.x=a5
u.aV(new A.q(d-0.4,2.5,n),new A.q(0.8,5,p),B.kF,0.1)
u.x=0
u.f=f9?0:3
u.b=j.$2("ceiling",320)
if(f9)o=1
else o=g1==="ceiling"?0.6:0.4
u.d=o
u.hs(new A.q(0,130.6,n),new A.q(m,1.2,h),B.ayl[f8.as],2)
u.d=1
u.b=u.f=0
u.x=a3
u.aV(new A.q(0,128,1),new A.q(q,3,1.4),D.c,0.2)
u.x=a4
u.aV(new A.q(e+1,128,n),new A.q(1.4,3,p),D.c,0.2)
u.x=a5
u.aV(new A.q(d-1,128,n),new A.q(1.4,3,p),D.c,0.2)
u.x=0
t.n(0,320,new A.cV("Ceiling","Pick a colour above to paint the ceiling.",new A.q(0,130,n),140))
h=f8.w
a6=D.d.b3(h,new A.fzR())?"left":"right"
if(!g){o=new A.fA1()
a7=p*0.55
if(f9)D.d.v(v,A.nE(o.$0(),0,3.141592653589793,new A.q(0,0,p+0.2)))
D.d.v(v,a6==="right"?A.nE(o.$0(),0,-1.5707963267948966,new A.q(d,0,a7)):A.nE(o.$0(),0,1.5707963267948966,new A.q(e,0,a7)))}for(o=f8.ax,m=f8.at,a0=0;a0<h.length;++a0){a8=h[a0]
if(a8.a)continue
a9=o.h(0,a0)
if(a9==null)a9=m.t(0,a0)?1.25:0
b0=C.a([],w)
b1=new A.fm(b0)
b1.f=1
b1.x=$.dS=$.dS+1
b2=b1.b=600+a0
b1.aJ(B.haC,B.hal,B.kF)
b3=C.a([],w)
b4=new A.fm(b3)
b4.r=!0
b4.b=b2
if(a9>0.04){b1.b=0
b5=A.i1x(a8.d)
b6=b5.a
b1.aJ(B.h8N,B.h5d,b6)
b1.aJ(B.h9U,B.hgr,b5.b)
b7=C.ar(b6,D.w,0.25)
b7.toString
b1.aJ(B.h8Z,B.hel,b7)
b8=-a9
b7=A.vE(B.hgl,b8)
b4.wr(new A.q(-12.5+b7.a,0+b7.b,1.2+b7.c),B.h3Q,B.vI,0.15,b8)}else{b1.aV(B.h92,B.h7Z,B.vI,0.15)
b1.aV(B.h99,B.h9w,B.F8,0.8)
b1.aJ(B.h9z,B.aXJ,B.MP)
b1.aJ(B.hfN,B.aXJ,B.MP)}b7=new A.fA2(a8,q,p)
D.d.v(v,b7.$1(b0))
D.d.v(v,b7.$1(b3))
t.n(0,b2,new A.cV("Door","Tap the door to go through it.",B.aWb,90))}for(o=f8.x,m=o.length,l=0;l<o.length;o.length===m||(0,C.L)(o),++l){b9=o[l]
b0=b9.b
b2=B.hC.h(0,b0)
b2.toString
b3=C.a([],w)
c0=new A.fm(b3)
c0.r=!0
c0.f=b0==="rug"?1:2
b7=100+b9.a
c0.b=j.$2("furniture",b7)
A.h7k(c0,b0,B.zm[b9.f])
D.d.v(v,A.nE(A.i7q(b3,0.8),0,b9.e*3.141592653589793/2,new A.q(b9.c,0,b9.d)))
t.n(0,b7,new A.cV(b2.a,y.M,new A.q(b9.c,12,b9.d),90))}u.f=2
u.r=!0
c1=p*0.5
w=C.T(h)
o=d-10
c2=D.k.E(new C.cQ(new C.Z(h,new A.fzS(),w.k("Z<1>")),new A.fzT(),w.k("cQ<1,J>")).cI(0,e+30,new A.fzU())+24,e+10,o)
c3=f8.go==="fan"
c4=f8.ga6c()
c5=c4&&f8.gMh()&&f8.fy
u.b=703
if(c3){u.dE(new A.q(0,129.5,c1),new A.q(0,120,c1),1,B.hd,8)
u.dR(new A.q(0,120,c1),new A.q(0,113,c1),6,D.jf,0.5,14)
w=c5?B.o5:D.dt
u.dR(new A.q(0,113,c1),new A.q(0,110,c1),3.6,w,0.6,12)}else{w=c5?B.o5:D.dt
u.dR(new A.q(0,129.5,c1),new A.q(0,127,c1),7,w,0.6,16)}if(c5&&!c3){u.b=0
u.f=3
u.d=0.2
u.L8(new A.q(0,127,c1),new A.q(0,0.5,c1),36,B.o5,!1,14)
u.d=1
u.f=2}c6=c3?"Ceiling fan":"Ceiling light"
if(!c4)c7="It has no power yet. "+(f8.p4.length!==0?"Tap it to wire it.":"The room still needs wiring: use the Wiring button.")
else if(!f8.gMh())c7="It is ready: wire the wall switch to turn it on."
else{w=f8.fy?"It is on. Tap the wall switch (or tap this) to turn it off.":"It is off. Tap the wall switch (or tap this) to turn it on."
c7=w}t.n(0,703,new A.cV(c6,c7,new A.q(0,122,c1),80))
w=f7==="bathroom"
m=!w
c8=!m||f7==="kitchen"||f8.p4==="gfci"
h=f8.ganE()
b0=c8?f4:f5
b2=f8.p4.length!==0||f8.Ip(1)
b3=c8?f4:f5
b3=C.a([new C.e5([0,700,f/4,h,b0]),new C.e5([1,701,q/4,b2,b3])],x.az)
for(h=f8.id,a0=0;a0<h.length;++a0){f=h[a0]
b0=f.a
if(b0!=="switch"){b2=f.c
b0=b2.c>=2&&A.La(A.t6(b0),b2).a==="ok"
b2=h[a0].a==="gfci"?"Added GFCI outlet":"Added outlet"
b3.push(new C.e5([2+a0,800+a0,f.b,b0,b2]))}}u.f=1
u.r=!1
for(f=b3.length,b0=f8.fx,l=0;l<b3.length;b3.length===f||(0,C.L)(b3),++l){b2=b3[l].a
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
if(b2!=null)b2=b2.biv(a0)
else b2=f8.ay?0:2}d3=b2}else d3=0
if(d1)b2=D.be
else b2=d3===1?D.aB:D.ax
u.aJ(new A.q(d0,14,0.25),B.h5S,b2)
u.d=1
u.e=0
b2=d1?B.ME:D.jf
u.aV(new A.q(d0,14,0.9),B.hb7,b2,0.25)
u.b=0
for(d4=0;d4<2;++d4)for(b2=14+F.ho[d4]*2.8,d5=0;d5<2;++d5)u.aJ(new A.q(d0+B.Rm[d5],b2,1.7),B.hg9,B.ah5)
u.aJ(new A.q(d0,14,1.7),B.hb5,D.dt)
u.x=0
if(!d1)b2="This one is not wired yet. Tap it to wire it."
else b2=b0.h(0,a0)==null?"Tap it to plug something in.":"Tap it to plug something else in, or to unplug."
t.n(0,c9,new A.cV(d2,b2,new A.q(d0,14,2),60))}f=C.a([new C.b7(702,c2,f8.gMh())],x.al)
for(a0=0;a0<h.length;++a0){b2=h[a0]
b7=b2.a
if(b7==="switch"){d6=b2.c
b7=d6.c>=2&&A.La(A.t6(b7),d6).a==="ok"
f.push(new C.b7(800+a0,b2.b,b7))}}for(h=f.length,l=0;l<f.length;f.length===h||(0,C.L)(f),++l){b2=f[l]
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
if(b2!=null)b2=b2.biv(3)
else b2=f8.ay?0:2}d7=b2}else d7=0
if(d1)b2=D.be
else b2=d7===1?D.aB:D.ax
u.aJ(new A.q(d0,48,0.25),B.h7I,b2)
u.d=1
u.e=0
b2=d1?B.ME:D.jf
u.aV(new A.q(d0,48,0.9),B.h6W,b2,0.25)
u.aJ(new A.q(d0,f8.fy&&d1?49.2:46.8,1.9),B.h6N,B.aiU)
u.x=0
if(!d1)b2="Not wired yet. Tap it to wire it."
else if(f8.fy)b2="On. Tap to turn the "+(c3?"fan":"light")+" off."
else b2="Off. Tap to turn the "+(c3?"fan":"light")+" on."
t.n(0,c9,new A.cV("Light switch",b2,new A.q(d0,48,2),60))}if(f8.p4.length===0&&!f8.gkO()){if(f8.p4.length===0)h=f8.gkO()
else h=!0
if(h)d8=D.Y
else{h=C.a([],x.s)
if(!f8.ganE())h.push("outlet 1")
if(!(f8.p4.length!==0||f8.Ip(1)))h.push("outlet 2")
if(!f8.ga6c())h.push(f8.go==="fan"?"ceiling fan":"ceiling light")
if(!f8.gMh())h.push("switch")
d8=h}h=d8.length===0?"\u26a1 No power: needs wiring":"\u26a1 Still to wire: "+D.d.aG(d8,", ")
s.push(new A.hh(new A.q(0,104,c1),h,D.bz,0))}h=!1
if(f8.p4.length!==0)if(!f8.gz8()){h=f8.p4
h=!(h==="ptrap"||h==="faucet")}if(h)s.push(new A.hh(new A.q(0,40,14),"\ud83d\udc46 Tap the red one to wire it",D.bz,0))
u.f=2
u.r=!0
for(h=b3.length,f=x.o,b2=f8.a,l=0;l<b3.length;b3.length===h||(0,C.L)(b3),++l){b7=b3[l].a
a0=b7[0]
d0=b7[2]
d1=b7[3]
d9=b0.h(0,a0)
if(d9==null||!d1)continue
e0=A.aPT(d9)
b7=u.b=720+a0
u.j8(C.a([new A.q(d0,12,1.8),new A.q(d0,6,3),new A.q(d0,2,11)],f),0.3,B.Yz,!1,0.2,6)
d6=e0.d
e1=d6<=0
if(!e1||e0.e){b8=d6*0.56
e2=$.dS+1
u.x=$.dS=e2
u.aV(new A.q(d0,2,15),new A.q(d6*0.45,4,14),B.hd,0.3)
u.aV(new A.q(d0,8,15),B.h5j,B.hd,0.3)
e3=12+b8/2
u.aV(new A.q(d0,e3,15),new A.q(d6,b8,3),E.Fx,0.5)
d6=(d6-3.5)/2
e4=d0-d6
e5=(b8-3.5)/2
e6=e3+e5
d6=d0+d6
e5=e3-e5
r.push(new A.fP(C.a([new A.q(e4,e6,16.6),new A.q(d6,e6,16.6),new A.q(d6,e5,16.6),new A.q(e4,e5,16.6)],f),b7,new A.fzV(a0*7+b2),320,180,9,2,e2,!0))
u.x=0}else{d6=e0.a
if(d6==="lamp"){u.dR(new A.q(d0,0,14),new A.q(d0,1,14),6,B.Xy,0.4,14)
u.dR(new A.q(d0,1,14),new A.q(d0,22,14),1,B.By,0.5,8)
d6=f8.fy?B.o5:L.YG
u.yT(new A.q(d0,20,14),new A.q(d0,32,14),9,d6,!1,!0,5.5,0.2,16)}else{u.aV(new A.q(d0,9,15),B.h1l,B.nU,0.1)
if(d6==="toaster"){u.aV(new A.q(d0,23,15),B.h1e,B.j9,0.8)
u.aJ(new A.q(d0,28.2,15),B.hch,B.aik)}else{u.BF(new A.q(d0-7,21,15),new A.q(d0+7,21,15),3.6,B.Mw,3,0.6,12)
u.aV(new A.q(d0-8,14.5,15),B.h9s,B.Mw,0.6)}}}d6=!e1||e0.e?"It is playing NGMY ads. Tap it to watch full screen with the remote.":"It is plugged in and running. Tap the outlet to unplug it or plug in something else."
t.n(0,b7,new A.cV(e0.b,d6,new A.q(d0,16,14),90))}u.f=1
u.r=!1
e7=new A.fzX(f8,u,q,r,t)
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
u.aJ(new A.q(e9,125,f0),B.h4k,D.jf)
u.wr(new A.q(e9,118,f0),B.h0u,D.bO,0.4,f1)
u.wr(new A.q(e9+Math.sin(f1)*8.5,118,f0+Math.cos(f1)*8.5),B.h5i,D.av,0.6,f1)
u.ed(new A.q(e9-Math.sin(f1)*5+Math.cos(f1)*3,122,f0-Math.cos(f1)*5-Math.sin(f1)*3),1.4,D.ax,3,5)
u.b=u.x=0
t.n(0,g,new A.cV("Hall camera","Tap it and you look from here, like your eyes.",new A.q(e9,118,f0),60))}u.f=2
u.r=!0
if(!m||f7==="kitchen"){f7=f8.p4
f7=f7.length===0||f7==="ptrap"||f7==="faucet"}else f7=!1
if(f7){d1=f8.gjR()
f7=new A.fA3(u)
if(w){f2=e+17
if(d1){u.b=710
u.BF(new A.q(6,0.5,14),new A.q(6,15,14),8,B.Bf,5.6,0.8,18)
u.dR(new A.q(6,15,14),new A.q(6,16,14),9,B.MG,0.8,18)
u.aV(new A.q(6,21,5),B.h1x,B.Bf,0.8)
u.aV(new A.q(6,28,5),B.h8B,B.MG,0.8)}else{u.b=710
u.d=0.3
u.f=3
u.aJ(new A.q(6,14,9),B.h1o,D.b_)
u.d=1
u.f=2
f7.$2(-4,8)}u.b=711
A.hrL(u,new A.q(34,14,10),30,28,18,B.nU)
A.b7e(u,11,D.c,18,20,B.j9,B.Y8,32,7,d1,1,2,30,0.6,34,10)
w=!d1
if(w){f7.$2(28,18)
f7.$2(40,18)}u.b=712
if(d1){u.aV(new A.q(f2,8,38),B.aWF,B.YZ,0.7)
u.aV(new A.q(f2,16.2,38),B.heg,B.XV,0.8)
u.dR(new A.q(f2,30,3),new A.q(f2,52,3),0.7,B.j9,0.9,8)
u.dR(new A.q(f2,52,3),new A.q(f2,52,10),0.7,B.j9,0.9,8)}else{u.d=0.3
u.f=3
u.aJ(new A.q(f2,8,38),B.aWF,D.b_)
u.d=1
u.f=2
f7.$2(f2-4,34)
f7.$2(f2+4,34)}f7=d1?"Fitted on its flange with a wax ring, and the supply hose joins the shut-off valve.":"There is no toilet yet: only the flange and the water stub. Use the Plumbing button to fit it."
t.n(0,710,new A.cV("Toilet",f7,new A.q(6,14,10),70))
f7=d1?"The faucet, the hoses and the P-trap are fitted.":"The sink is not plumbed. Use the Plumbing button."
t.n(0,711,new A.cV("Vanity sink",f7,new A.q(34,28,10),70))
f7=d1?"The bath is in and connected.":"The bath is not connected yet."
t.n(0,712,new A.cV("Bath",f7,new A.q(f2,10,38),90))
if(w)s.push(new A.hh(new A.q(0,40,14),f6,D.bl,0))}else{u.b=0
u.aV(new A.q(e+15,36,14),B.h2p,B.agR,0.6)
u.aJ(new A.q(e+28.5,36,14.4),B.haN,D.dt)
u.aV(new A.q(o,15,14),B.h1X,B.afe,0.1)
u.aV(new A.q(o,31,14),B.h27,B.hd,0.5)
u.aV(new A.q(d-15,32.4,14),B.aX4,D.i2,0.3)
u.aV(new A.q(d-5,32.4,14),B.aX4,D.i2,0.3)
u.b=713
A.hrL(u,new A.q(30,15,14),40,30,26,B.nU)
A.b7e(u,17,D.e2,28,28,B.j9,B.Mj,42,8.5,d1,1,2,32,0.6,30,14)
w=!d1
if(w){f7.$2(22,18)
f7.$2(38,18)}f7=d1?"The faucet, the hoses and the drain are fitted.":"The kitchen sink is not plumbed yet. Use the Plumbing button."
t.n(0,713,new A.cV("Kitchen sink",f7,new A.q(30,30,14),70))
if(w)s.push(new A.hh(new A.q(30,48,14),f6,D.bl,0))}}for(f7=D.d.gag(g3),w=new C.f2(f7,new A.fzW(f8));w.C();){o=f7.gS(0)
t.n(0,900+o.a,new A.cV(o.r,"Tap to see how they are, feed them or give medicine.",new A.q(o.c,36,o.d),90))}return new A.tU(v,t,s,r,new C.cy([e,d,0,p]),0)},
kI(d,e,f,g,h,i,j,k,l){var w=-h/2,v=i/2,u=h/2,t=-i/2
d.cXc(e.a7(0,f.aI(0,w)).a7(0,g.aI(0,v)),e.a7(0,f.aI(0,u)).a7(0,g.aI(0,v)),e.a7(0,f.aI(0,u)).a7(0,g.aI(0,t)),e.a7(0,f.aI(0,w)).a7(0,g.aI(0,t)),j,k,l)},
i4x(d6,d7,d8,d9,e0,e1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5=-158,c6=1000,c7=x.z,c8=C.a([],c7),c9=new A.fm(c8),d0=x.S,d1=C.U(d0,x.q),d2=C.a([],x.E),d3=d6.gea(0),d4=d6.gh_(0),d5=new A.fsZ(d8)
c9.f=0
c9.b=d5.$2("floor",310)
c9.hs(new A.q(0,-0.6,d4/2-60),new A.q(d3*2.5,1.2,d4*2.5),B.XB,5)
d1.n(0,310,B.ed9)
c9.b=0
c9.f=1
c9.aJ(new A.q(0,0.15,60),B.h6L,E.Fb)
for(w=0;w<6;++w)c9.aJ(new A.q(0,0.35,8+w*22),B.hb9,B.bp0)
c9.f=2
v=$.dS+1
c9.x=$.dS=v
c9.hs(B.h_U,B.h2d,B.Me,3)
c9.aJ(B.h_p,B.h2e,B.aeu)
u=new A.ft_(c9)
t=new A.fsV(c9)
for(s=0;s<4;++s){r=B.dmU[s]
u.$5(B.dX,B.hI,B.ig,r,62)
u.$5(B.dX,B.hI,B.ig,r,122)}t.$5(B.dX,B.hI,B.ig,0,600)
for(s=0;s<2;++s){r=B.aAS[s]
u.$5(B.aaP,B.qW,B.tm,r,62)
u.$5(B.aaP,B.qW,B.tm,r,122)}t.$5(B.aaP,B.qW,B.tm,0,0)
for(s=0;s<2;++s){q=B.a54[s]
u.$5(B.h0E,B.tm,B.hI,q,62)
u.$5(B.hd4,B.ig,B.qW,-q,62)}p=C.a([],c7)
new A.fm(p).mi(B.dX,B.h2m,B.Mh,0.1,2)
c9.a7b(B.hcV,B.hbx,B.haM,B.Me,B.hI,!1)
c9.a7b(B.haS,B.h4s,B.hbd,B.Me,B.qW,!1)
c9.x=0
c9.r=!0
D.d.v(c8,A.nE(p,0.5,0,B.fZA))
D.d.v(c8,A.nE(p,-0.5,0,B.fZB))
c9.aJ(B.fZD,B.h2l,B.Y4)
c9.aJ(B.h4W,B.h17,B.ahU)
c9.aJ(B.h4X,B.aWr,B.q9)
c9.aJ(B.h_b,B.h3W,E.Fb)
c9.dE(B.hdj,B.hdk,2.2,B.kF,8)
c9.dE(B.h1Z,B.h2_,2.2,B.kF,8)
c9.aV(B.h02,B.h44,B.Mh,0.1)
d1.n(0,600,B.edL)
p=x.a
o=C.a([],p)
n=new A.fsW(o,v)
n.$4(B.h6v,B.hbj,B.hc0,B.h9S)
n.$5$poster(B.h4S,B.h3F,B.h5J,B.hbO,1)
n.$5$poster(B.h7z,B.h7P,B.h67,B.hbL,2)
n.$5$poster(B.hbW,B.hgz,B.h9n,B.hbi,0)
c9.r=!0
m=C.U(d0,d0)
for(d0=d6.x,l=d0.length,s=0;s<d0.length;d0.length===l||(0,C.L)(d0),++s){k=d0[s]
j=k.a
i=100+j
if(e1.t(0,i))continue
h=k.b
if(D.d.t(B.I4,h)){d1.n(0,i,new A.cV(B.hC.h(0,h).a,"It wanders about. Move it with the arrow buttons or take it out.",new A.q(k.c,12,k.d),140))
continue}g=B.hC.h(0,h)
g.toString
f=C.a([],c7)
e=new A.fm(f)
d=e.r=!0
e.f=D.d.t(B.a5f,h)?1:2
a0=h==="hospital"
e.b=(!a0?h==="shop":d)?i:d5.$2("furniture",i)
A.h7k(e,h,B.zm[k.f])
if(f.length!==0)m.n(0,j,D.d.gI(f).z)
D.d.v(c8,A.nE(f,0,k.e*3.141592653589793/2,new A.q(k.c,0,k.d)))
if(a0)j="The hospital: tap it to see the beds and treat the patients."
else j=h==="shop"?"The shop: tap it to buy food and medicine.":y.M
d1.n(0,i,new A.cV(g.a,j,new A.q(k.c,12,k.d),140))}a1=C.a([],x._)
for(l=D.d.gag(d0),j=new C.f2(l,new A.fsm()),i=d6.k3;j.C();){h=l.gS(0)
g=h.a
a2=i.t(0,g)
f=h.b==="pole"
d=h.c
a0=h.d
a3=f?new A.q(d+20,86,a0):new A.q(d,55,a0)
d=C.a([],c7)
a4=new A.fm(d)
a0=f?4.6:4.2
a5=a2?D.e7:B.o5
a4.fO(a3,a0,a5,3,6,a2?0.1:0)
if(!a2){a4.d=0.2
a4.fO(a3,10,B.o5,2,6,0)
a4.d=1}D.d.v(c8,d)
if(a2)d2.push(new A.hh(new A.q(a3.a+0,a3.b+14,a3.c+0),"\u26a1 Light out: tap to go and fix it",D.bz,2e4+g))
if(f)a1.push(h)}D.d.aZ(a1,new A.fsn())
for(l=x.o,w=0;a6=w+1,a6<a1.length;w=a6){a7=a1[w]
a8=a1[a6]
if(Math.abs(a7.d-a8.d)>1||Math.abs(a8.c-a7.c)>170)continue
j=C.a([],c7)
a9=new A.fm(j)
for(s=0;s<3;++s){b0=B.aAO[s]
i=a7.c
h=a7.d
g=a8.c
a9.j8(C.a([new A.q(i+b0,121,h),new A.q((i+g)/2+b0,117,h),new A.q(g+b0,121,h)],l),0.35,D.av,!1,0,4)}D.d.v(c8,j)}for(j=D.d.gag(d0),i=new C.f2(j,new A.fso(d6)),h=d6.cy;i.C();){g=j.gS(0)
f=g.c
d=g.b==="hq"?190:130
a0=g.d
g=g.a
d2.push(new A.hh(new A.q(f,d,a0+40),"\u26a1 Level "+C.w(h.h(0,g))+" has no power: tap to go and fix it",D.bz,2e4+g))}for(j=D.d.gag(d0),i=new C.f2(j,new A.fsz(d6));i.C();){h=j.gS(0)
g=h.b
f=B.hC.h(0,g)
f.toString
d=h.c
g=g==="bighouse"?120:82
d2.push(new A.hh(new A.q(d,g,h.d),"\u26a1 No power: tap to go in and fix it",D.bz,2e4+h.a))
g=C.a([],c7)
b1=new A.fm(g)
b1.d=0.45
d=h.c
b1.aJ(new A.q(d,30,h.d),new A.q(f.c+2,60,f.d+2),D.de)
b1.d=1
D.d.v(c8,g)}if(d6.c==="outside")D.d.v(c8,A.iap())
b2=C.a([],p)
for(c7=D.d.gag(d0),d0=new C.f2(c7,new A.fsK());d0.C();){p=c7.gS(0)
d3=new A.fsY(p.e*3.141592653589793/2,p)
b3=m.h(0,p.a)
if(b3==null)b3=0
j=p.b
if(j==="billboard"){b2.push(new A.fP(C.a([d3.$3(-33,62.5,2),d3.$3(33,62.5,2),d3.$3(33,31.5,2),d3.$3(-33,31.5,2)],l),0,new A.fsP(p),960,450,4,2,b3,!1))
b2.push(new A.fP(C.a([d3.$3(33,62.5,-2),d3.$3(-33,62.5,-2),d3.$3(-33,31.5,-2),d3.$3(33,31.5,-2)],l),0,new A.fsQ(p),960,450,4,2,b3,!1))}else{i=j==="townsign"
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
b2.push(new A.fP(C.a([d3.$3(p,j,b7),d3.$3(b4,j,b7),d3.$3(b4,i,b7),d3.$3(p,i,b7)],l),0,new A.fsR(b8),b9,c0,4,2,b3,!1))
h=-b7
b2.push(new A.fP(C.a([d3.$3(b4,j,h),d3.$3(p,j,h),d3.$3(p,i,h),d3.$3(b4,i,h)],l),0,new A.fsS(b8),b9,c0,4,2,b3,!1))}else if(j==="adboard"){b2.push(new A.fP(C.a([d3.$3(c5,195,3.6),d3.$3(158,195,3.6),d3.$3(158,90,3.6),d3.$3(c5,90,3.6)],l),0,new A.fsT(p),1280,424,4,2,b3,!1))
b2.push(new A.fP(C.a([d3.$3(158,195,-3.6),d3.$3(c5,195,-3.6),d3.$3(c5,90,-3.6),d3.$3(158,90,-3.6)],l),0,new A.fsU(p),1280,424,4,2,b3,!1))}else if(j==="tower"){c1=210+D.o.F(B.zm[p.f].l(),5)*24
j=c1-8
i=c1-54
b2.push(new A.fP(C.a([d3.$3(-40,j,35.9),d3.$3(40,j,35.9),d3.$3(40,i,35.9),d3.$3(-40,i,35.9)],l),0,new A.fsp(p),800,460,8,2,b3,!1))
b2.push(new A.fP(C.a([d3.$3(40,j,-35.9),d3.$3(-40,j,-35.9),d3.$3(-40,i,-35.9),d3.$3(40,i,-35.9)],l),0,new A.fsq(p),800,460,8,2,b3,!1))
b2.push(new A.fP(C.a([d3.$3(50.9,j,28),d3.$3(50.9,j,-28),d3.$3(50.9,i,-28),d3.$3(50.9,i,28)],l),0,new A.fsr(p),640,460,8,2,b3,!1))
b2.push(new A.fP(C.a([d3.$3(-50.9,j,-28),d3.$3(-50.9,j,28),d3.$3(-50.9,i,28),d3.$3(-50.9,i,-28)],l),0,new A.fss(p),640,460,8,2,b3,!1))
i=c1+58
j=c1+22
b2.push(new A.fP(C.a([d3.$3(-40,i,1.7),d3.$3(40,i,1.7),d3.$3(40,j,1.7),d3.$3(-40,j,1.7)],l),0,new A.fst(p),960,400,8,2,b3,!1))
b2.push(new A.fP(C.a([d3.$3(40,i,-1.7),d3.$3(-40,i,-1.7),d3.$3(-40,j,-1.7),d3.$3(40,j,-1.7)],l),0,new A.fsu(p),960,400,8,2,b3,!1))}else if(j==="hq"){b2.push(new A.fP(C.a([d3.$3(-70,108,45.9),d3.$3(70,108,45.9),d3.$3(70,52,45.9),d3.$3(-70,52,45.9)],l),0,new A.fsv(),c6,400,8,2,b3,!1))
b2.push(new A.fP(C.a([d3.$3(-48,215,30.2),d3.$3(48,215,30.2),d3.$3(48,175,30.2),d3.$3(-48,175,30.2)],l),0,new A.fsw(),900,380,8,2,b3,!1))
b2.push(new A.fP(C.a([d3.$3(70,108,-45.9),d3.$3(-70,108,-45.9),d3.$3(-70,52,-45.9),d3.$3(70,52,-45.9)],l),0,new A.fsx(),c6,400,8,2,b3,!1))
b2.push(new A.fP(C.a([d3.$3(48,215,-30.2),d3.$3(-48,215,-30.2),d3.$3(-48,175,-30.2),d3.$3(48,175,-30.2)],l),0,new A.fsy(),900,380,8,2,b3,!1))
b2.push(new A.fP(C.a([d3.$3(-54,328,1.7),d3.$3(54,328,1.7),d3.$3(54,294,1.7),d3.$3(-54,294,1.7)],l),0,new A.fsA(p),c6,360,8,2,b3,!1))
b2.push(new A.fP(C.a([d3.$3(54,328,-1.7),d3.$3(-54,328,-1.7),d3.$3(-54,294,-1.7),d3.$3(54,294,-1.7)],l),0,new A.fsB(p),c6,360,8,2,b3,!1))
b2.push(new A.fP(C.a([d3.$3(85.9,118,36),d3.$3(85.9,118,-36),d3.$3(85.9,62,-36),d3.$3(85.9,62,36)],l),0,new A.fsC(p),720,560,8,2,b3,!1))
b2.push(new A.fP(C.a([d3.$3(-85.9,118,-36),d3.$3(-85.9,118,36),d3.$3(-85.9,62,36),d3.$3(-85.9,62,-36)],l),0,new A.fsD(p),720,560,8,2,b3,!1))}else if(j==="store")b2.push(new A.fP(C.a([d3.$3(-54,85,37.7),d3.$3(54,85,37.7),d3.$3(54,67,37.7),d3.$3(-54,67,37.7)],l),0,new A.fsE(),900,150,6,2,b3,!1))
else if(j==="ubstation"){b2.push(new A.fP(C.a([d3.$3(40,106,31.9),d3.$3(76,106,31.9),d3.$3(76,86,31.9),d3.$3(40,86,31.9)],l),0,new A.fsF(),480,270,8,2,b3,!1))
b2.push(new A.fP(C.a([d3.$3(76,106,28.1),d3.$3(40,106,28.1),d3.$3(40,86,28.1),d3.$3(76,86,28.1)],l),0,new A.fsG(),480,270,8,2,b3,!1))}else if(j==="dmv")b2.push(new A.fP(C.a([d3.$3(-50,85,38.6),d3.$3(50,85,38.6),d3.$3(50,67,38.6),d3.$3(-50,67,38.6)],l),0,new A.fsH(),900,160,8,2,b3,!1))
else if(j==="gasstation")b2.push(new A.fP(C.a([d3.$3(-86,107,35.7),d3.$3(-54,107,35.7),d3.$3(-54,85,35.7),d3.$3(-86,85,35.7)],l),0,new A.fsI(),480,330,6,2,b3,!1))
else for(c2=0;c2<2;++c2){c3=c2===0?-40:40
j=c3-26
i=c3+26
b2.push(new A.fP(C.a([d3.$3(j,70,60.7),d3.$3(i,70,60.7),d3.$3(i,40,60.7),d3.$3(j,40,60.7)],l),0,new A.fsJ(p,c2),720,520,9,2,b3,!1))}}}for(c7=D.d.gag(e0),d0=new C.f2(c7,new A.fsL(d6));d0.C();){p=c7.gS(0)
d2.push(new A.hh(new A.q(p.c,82,p.d),p.Q,D.cQ,0))}for(c7=D.d.gag(e0),d0=new C.f2(c7,new A.fsM(d6));d0.C();){p=c7.gS(0)
d2.push(new A.hh(new A.q(p.c,80,p.d),"\ud83d\udcde Help!",D.bz,0))}c7=d7===0
d0=c7?"\u2705 The house is finished":"\ud83c\udfe0 "+d7+" rooms still need work"
d2.push(new A.hh(B.fZT,d0,c7?D.cT:D.dZ,0))
c4=c9.x=$.dS=$.dS+1
for(s=0;s<2;++s){r=B.aAS[s]
c9.dE(new A.q(r,0,-118),new A.q(r,215,-118),3,D.jf,8)}c9.aV(B.Au,B.h2j,D.av,0.3)
c9.x=0
o.push(new A.fP(B.cOU,0,new A.fsN(),c6,336,4,2,c4,!1))
o.push(new A.fP(B.djq,0,new A.fsO(),c6,336,4,2,c4,!1))
c7=C.C(o,x.K)
D.d.v(c7,b2)
return new A.tU(c8,d1,d2,c7,null,4000)},
ibl(a5,a6,a7,a8,a9,b0,b1,b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=x.z,a3=C.a([],a2),a4=new A.fm(a3)
a4.r=!0
if(a5.c==="outside"){w=new A.fD3(b1)
v=b1!=null
if(v&&b1.a===a5.a)A.wO(a4,b1,a6,b2,!0,0,null)
if(a7&&v&&b1.a===a5.a){v=C.a([],a2)
u=b1.b
t=b1.d
new A.fm(v).aJ(new A.q(u+Math.sin(t)*9,46+b1.y,b1.c+Math.cos(t)*9),B.aWq,B.iz)
D.d.v(a3,v)}if(a9!=null){v=C.a([],a2)
s=new A.fm(v)
s.r=!0
u=a9.a
A.h7k(s,u[0],B.zm[u[4]])
D.d.v(a3,A.nE(v,0,u[3]-1.5707963267948966,new A.q(u[1],0,u[2])))}for(v=D.d.gag(a5.x),u=new C.f2(v,new A.fD0()),t=a6*6,r=b0==="furniture";u.C();){q=v.gS(0)
p=q.a
o=a6*(0.25+D.o.F(p,5)*0.04)+p*1.7
n=q.c
m=Math.cos(o)
l=q.d
k=Math.sin(o)
j=Math.atan2(-Math.sin(o),Math.cos(o))
i=C.a([],a2)
h=new A.fm(i)
h.r=!0
h.b=r?100+p:0
A.hpQ(h,q.b,B.zm[q.f],Math.sin(t+p)*0.5)
D.d.v(a3,A.nE(i,0,j,new A.q(n+m*10,0,l+k*10)))}for(v=D.d.gag(b3),u=new C.f2(v,new A.fD1(a5)),t=a5.a;u.C();){r=v.gS(0)
q=r.c
p=r.d
n=r.e
m=r.f
l=r.a
A.wO(a4,new A.y5(t,q,p,n,!1,!1,!1,!1,!1,0,!1,!1,"","",-1,0,-1,0),a6,m,w.$2(q,p),900+l,m.c)
A.hZg(a4,r,a6)}for(v=a8.length,g=0;g<a8.length;a8.length===v||(0,C.L)(a8),++g){f=a8[g]
u=f.b
r=f.c
q=f.d
A.wO(a4,new A.y5(t,u,r,q,f.f,!1,!1,!1,!1,0,!1,!1,"","",-1,0,-1,f.e),a6,f.w,w.$2(u,r),0,f.x)
if(f.r){p=C.a([],a2)
new A.fm(p).aJ(new A.q(u+Math.sin(q)*9,46,r+Math.cos(q)*9),B.h0T,F.fA)
D.d.v(a3,p)}}return a3}if(b1!=null&&b1.a===a5.a)A.wO(a4,b1,a6,b2,!0,0,null)
for(a2=D.d.gag(b3),v=new C.f2(a2,new A.fD2(a5)),u=a5.a,t=a6*0.5;v.C();){r=a2.gS(0)
q=r.y
p=q>0
e=p?Math.sin(t+r.a)*q:0
q=r.c
n=r.d
if(p)m=Math.cos(t+r.a)>=0?1.5707963267948966:-1.5707963267948966
else m=r.x?0.5:r.e
A.wO(a4,new A.y5(u,q+e,n,m,p,!1,!1,!1,r.x,0,!1,!1,"","",-1,0,-1,0),a6,r.f,!0,900+r.a,null)}d=a5.gh_(0)
if(a5.go==="fan"){a0=a5.ga6c()&&a5.gMh()&&a5.fy?a6*7:0
a4.b=703
for(a2=d*0.5,a1=0;a1<4;++a1){o=a0+a1*3.141592653589793/2
a4.wr(new A.q(Math.cos(o)*15,115,a2+Math.sin(o)*15),B.hfI,B.nU,0.1,-o)}}return a3},
i1x(d){var w
A:{if(5===d){w=B.eN0
break A}if(9===d){w=B.eS9
break A}if(10===d){w=B.eFe
break A}if(11===d){w=B.eT8
break A}if(2===d||4===d||8===d){w=B.euM
break A}w=B.eHV
break A}return w},
fyV(b0,b1,b2,b3,b4,b5,b6,b7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9
for(w=b2.a,v=b2.b,u=b2.c,t=b1.a,s=b1.b,r=b1.c,q=b3.a,p=q*0.1,o=b3.b,n=o*0.1,m=b3.c,l=m*0.1,k=q*0.2,j=o*0.2,i=m*0.2,q*=0.3,o*=0.3,m*=0.3,h=-b4/2,g=b5-1,f=b5===1,e=0;e<b5;++e){d=f?0:h+b4*e/g
for(a0=b6.length,a1=s+v*d,a2=t+w*d+0,a3=r+u*d+0,a4=a2+p,a5=a3+l,a6=a2+k,a7=a3+i,a2+=q,a3+=m,a8=0;a8<b6.length;b6.length===a0||(0,C.L)(b6),++a8){a9=a1+b6[a8]
A.kI(b0,new A.q(a4,a9+n,a5),b2,B.ea,14,17,B.kF,b3,0)
A.kI(b0,new A.q(a6,a9+j,a7),b2,B.ea,11,14,b7,b3,0.6)
A.kI(b0,new A.q(a2,a9+o,a3),b2,B.ea,11,0.9,B.kF,b3,0)}}},
hqk(a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0
A:{if("shop"===a2){w=B.f0i
break A}if("hospital"===a2){w=B.f0d
break A}if("firestation"===a2){w=B.f_V
break A}if("school"===a2){w=B.f_O
break A}w=B.f_x
break A}w=w.a
v=w[0]
u=w[1]
t=w[2]
s=w[3]
r=w[4]
q=u/2
p=v/2
a1.x=$.dS=$.dS+1
a1.hs(new A.q(0,t/2,0),new A.q(v,t,u),s,2)
a1.aJ(new A.q(0,2.5,0),new A.q(v+3,5,u+3),B.aeu)
w=a2==="hospital"
if(w)o=C.a([14,30,46],x.n)
else if(a2==="school"){n=C.a([14,32],x.n)
o=n}else{n=x.n
n=a2==="house2"?C.a([26],n):C.a([22],n)
o=n}m=D.o.E(D.k.bf(v/24),2,5)
n=a2==="firestation"
l=n?C.a([34],x.n):o
k=v-30
A.fyV(a1,new A.q(0,0,q).a7(0,B.dX),B.hI,B.ig,k,m,l,B.i1)
j=q+0.4
if(n){A.kI(a1,new A.q(-14,17,j),B.hI,B.ea,34,34,D.hj,B.ig,0.2)
for(i=q+0.5,h=0;h<6;++h)A.kI(a1,new A.q(-14,4+h*6,i),B.hI,B.ea,33,0.8,D.dt,B.ig,0)
A.kI(a1,new A.q(24,15,j),B.hI,B.ea,14,30,B.vI,B.ig,0)}else{A.kI(a1,new A.q(0,14,q+0.3),B.hI,B.ea,18,28,B.kF,B.ig,0)
A.kI(a1,new A.q(0,13,j),B.hI,B.ea,14,26,B.vI,B.ig,0.2)}switch(a2){case"hospital":i=t-8
A.kI(a1,new A.q(0,i,j),B.hI,B.ea,30,9,D.bz,B.ig,0)
j=q+0.5
A.kI(a1,new A.q(0,i,j),B.hI,B.ea,24,2.6,D.c,B.ig,0)
A.kI(a1,new A.q(0,i,j),B.hI,B.ea,2.6,7,D.c,B.ig,0)
break
case"shop":for(i=q+3,h=0;h<6;++h){g=(h&1)===0?D.ax:D.c
A.kI(a1,new A.q(-30+h*12,33,i),B.hI,B.ea,6,6,g,B.ig,0)}A.kI(a1,new A.q(0,t-4,j),B.hI,B.ea,36,6,a3,B.ig,0)
break
case"firestation":A.kI(a1,new A.q(0,t-5,j),B.hI,B.ea,40,7,D.bu,B.ig,0)
break
case"school":A.kI(a1,new A.q(0,t-5,j),B.hI,B.ea,40,7,D.bl,B.ig,0)
break}j=-q
A.fyV(a1,new A.q(0,0,j),B.qW,B.tm,k,m,l,B.i1)
A.kI(a1,new A.q(0,13,j-0.4),B.qW,B.ea,14,26,B.vI,B.tm,0)
f=D.o.E(D.k.bf(u/24),1,3)
k=u-26
A.fyV(a1,new A.q(p,0,0),B.tm,B.hI,k,f,l,B.i1)
i=-p
A.fyV(a1,new A.q(i,0,0),B.ig,B.qW,k,f,l,B.i1)
a1.x=0
k=x.z
g=C.a([],k)
e=new A.fm(g)
e.r=!0
e.b=a1.b
e.f=a1.f
if(a2==="house2"||a2==="school"){w=C.a([],k)
d=new A.fm(w)
d.r=!0
d.b=a1.b
d.f=a1.f
d.aV(B.dX,new A.q(v+6,2.5,u*0.58),r,0.1)
n=a1.a
k=t+5
D.d.v(n,A.nE(w,0.42,0,new A.q(0,k,u*0.25)))
a0=-u
D.d.v(n,A.nE(w,-0.42,0,new A.q(0,k,a0*0.25)))
k=p+0.2
w=t+12
a1.a7b(new A.q(k,t,q),new A.q(k,t,j),new A.q(k,w,0),s,B.hI,!1)
i-=0.2
a1.a7b(new A.q(i,t,j),new A.q(i,t,q),new A.q(i,w,0),s,B.qW,!1)
if(a2==="school"){w=q-10
e.aJ(new A.q(0,t+18,w),B.h1m,D.agf)
e.aJ(new A.q(0,t+30,w),B.h29,r)
e.dE(new A.q(0,t+31,w),new A.q(0,t+46,w),0.6,D.dt,6)
e.aJ(new A.q(5,t+44,w),B.hbY,D.ax)}else e.aJ(new A.q(v*0.28,t+14,a0*0.1),B.h5K,B.ahU)}else{k=v+2
e.aV(new A.q(0,t+1.5,0),new A.q(k,3,u+2),r,0.05)
e.aJ(new A.q(0,t+4,q+0.5),new A.q(k,4,1.4),a3)
if(w){w=v*0.25
k=-u*0.15
e.aJ(new A.q(w,t+5,k),B.h2o,D.bs)
e.aJ(new A.q(w,t+6.2,k),B.hcc,D.c)}if(n){w=p-10
n=-u*0.2
e.aJ(new A.q(w,t+16,n),B.h16,B.agJ)
e.aJ(new A.q(w,t+32,n),B.aWr,r)}}D.d.v(a1.a,g)},
i6t(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=d.f,f=d.e
d.f=1
d.e=0
if(e==="road"){d.Cn(B.h8E,B.h9H,B.h7E,B.ha0,B.Ms,B.ea)
d.e=90
for(w=0;w<2;++w){v=B.Rm[w]
u=v-0.7
t=v+0.7
d.Cn(new A.q(-20,0.9,u),new A.q(20,0.9,u),new A.q(20,0.9,t),new A.q(-20,0.9,t),L.M6,B.ea)}for(w=0;w<2;++w){v=B.dmI[w]
u=v-0.8
t=v+0.8
d.Cn(new A.q(-20,0.9,u),new A.q(20,0.9,u),new A.q(20,0.9,t),new A.q(-20,0.9,t),D.bO,B.ea)}d.f=g
d.e=f
return}d.Cn(B.h9R,B.hg4,B.h7C,B.h6d,B.Ms,B.ea)
d.e=90
A:{if("roadturn"===e){u=B.dln
break A}if("roadtee"===e){u=B.d2p
break A}u=B.cjj
break A}for(t=u.length,w=0;w<t;++w){s=u[w]
r=s.a
q=s.b
for(s=q!==0,p=r!==0,o=30*r,n=30*q,m=0;m<2;++m){l=B.Rm[m]
k=p?o:l
j=s?n:l
i=p?36:1.4
h=s?36:1.4
d.aJ(new A.q(k,0.95,j),new A.q(i,0.1,h),L.M6)}}d.f=g
d.e=f},
hpQ(d,e,f,g){var w=new A.fja(d,g)
switch(e){case"dog":d.aV(B.xc,B.hfm,f,0.05)
d.ed(B.h6R,3.4,f,4,8)
d.aJ(B.hae,B.h5G,D.Mm)
d.aJ(B.hbC,B.aXa,B.hd)
d.aJ(B.hgh,B.aXa,B.hd)
d.dE(B.hcs,B.fZx,0.8,f,5)
w.$5(B.dk6,6,6,1.7,f)
break
case"cat":d.aV(B.Av,B.h5B,f,0.05)
d.ed(B.h_W,2.7,f,4,8)
d.aJ(B.heT,B.aWu,f)
d.aJ(B.heX,B.aWu,f)
d.dE(B.h_V,B.fZp,0.7,f,5)
w.$5(B.dhK,4,4,1.2,f)
break
case"cow":d.aV(B.aaR,B.h12,D.bN,0.05)
d.aJ(B.hf5,B.hep,B.hd)
d.aJ(B.h8i,B.h5E,B.hd)
d.aJ(B.fZN,B.h5P,D.bN)
d.aJ(B.fZE,B.hgB,D.nT)
d.aJ(B.h64,B.aWv,D.bO)
d.aJ(B.hga,B.aWv,D.bO)
d.dE(B.fZQ,B.h_Y,0.7,B.hd,5)
w.$5(B.d6e,11,11,3.2,D.bO)
break
case"sheep":d.ed(B.aaQ,8.5,D.q1,4,8)
d.ed(B.fZv,7,D.q1,4,8)
d.ed(B.fZr,3.4,B.hd,4,8)
w.$5(B.dk0,8,8,1.8,B.hd)
break
case"chicken":d.ed(B.Av,4,f,4,8)
d.ed(B.fZc,2.2,f,3,6)
d.aJ(B.fZm,B.hej,D.bz)
d.aJ(B.h7_,B.h6y,D.aB)
d.aJ(B.h0_,B.h3S,f)
w.$5(B.d4f,3,3,0.8,D.aB)
break
case"horse":d.aV(B.fZU,B.h0C,f,0.1)
d.L9(B.h_3,B.h_k,4.2,f,3,8)
d.aJ(B.h_m,B.h4p,f)
d.aJ(B.h_v,B.hei,B.hd)
d.dE(B.h_8,B.h_Z,1.8,B.hd,6)
w.$5(B.d3z,16,16,2.6,f)
break
default:d.aJ(B.Av,B.h5N,f)}},
bCy(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=C.a([],x.z)
for(w=d.length,v=e.a,u=e.b,t=e.c,s=f.a,r=f.b,q=f.c,p=x.o,o=0;o<d.length;d.length===w||(0,C.L)(d),++o){n=d[o]
m=C.a([],p)
for(l=n.a,k=l.length,j=0;j<l.length;l.length===k||(0,C.L)(l),++j){i=l[j]
m.push(new A.q(s+(i.a-s)*v,r+(i.b-r)*u,q+(i.c-q)*t))}l=n.b
h.push(new A.kp(m,new A.q(l.a/v,l.b/u,l.c/t).gmW(0),n.c,n.d,n.e,n.f,n.r,n.w,n.x,n.y,n.z))}return h},
hZg(d,e,f){var w,v,u,t,s,r=e.z
if(r.length===0)return
w=e.e
v=new A.fj0(e,Math.sin(w),Math.cos(w))
u=d.b
d.b=0
switch(r){case"feed":d.L9(v.$3(14,0,8),v.$3(14,9,8),4.5,B.nU,5.5,10)
for(r=f*0.9,t=0;t<9;++t){s=D.k.F(r+t/9,1)
d.fO(v.$3(10+s*26,26-s*22,Math.sin(t*2.1)*4),0.9,D.m0,3,5,0)}break
case"cook":d.aV(v.$2(18,9),B.h26,D.jf,0.2)
d.aJ(v.$2(18,18.4),B.h5o,D.fr)
d.d=0.3
for(r=f*0.5,t=0;t<6;++t){s=D.k.F(r+t/6,1)
d.fO(v.$2(18+Math.sin(t*1.9)*3,22+s*22),2+s*4,D.Ff,3,6,0)}d.d=1
break
case"wash":d.L9(v.$3(20,0,-10),v.$3(20,8,-10),4,D.aJ,5,10)
for(r=f*1.4,t=0;t<12;++t){s=D.k.F(r+t/12,1)
d.fO(v.$3(8+s*24,30-s*s*26,6),0.8,D.hi,3,5,0.3)}break
case"water":d.aV(v.$3(12,22,7),B.h5M,D.ej,0.2)
for(r=f*1.2,t=0;t<10;++t){s=D.k.F(r+t/10,1)
d.fO(v.$3(18+s*8,22-s*22,7),0.7,D.hi,3,5,0.3)}break
case"teach":d.aV(v.$2(22,26),B.hcr,D.dY,0.1)
d.aJ(v.$2(22.8,26),B.ha_,D.bN)
break
case"duty":d.aJ(v.$3(0,74,0),B.h8d,D.L)
break}d.b=u},
wO(d,e,f,g,h,i,j){var w,v,u,t,s,r
if(e.Q){w=C.a([],x.z)
A.wO(new A.fm(w),A.atT(!1,0,-1,"",!1,0,"",-1,e.CW*0.5,!1,!1,!1,e.a,!1,e.e,0,0,0),f,g,h,i,j)
D.d.v(d.a,A.nE(w,1.5707963267948966,e.d,new A.q(e.b,9,e.c)))
return}w=g.e
v=$.h1M.h(0,w)
if(v==null){if(B.Sf.aj(0,w)&&!$.h1K.t(0,w)){A.bTX(w)
return}A.i5g(d,e,f,h,i,g)
return}w=e.e
u=e.z
t=w&&!u&&e.CW>0?e.CW*12:null
s=j==null
r=s?null:g.a
s=s?null:g.d
D.d.v(d.a,v.cWG(h,i,e.y,s,u,r,f,j,t,w,e.b,e.d,e.c))},
i5g(e6,e7,e8,e9,f0,f1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2=e7.e,d3=d2?D.k.V(e7.CW*24):-1,d4=f1.a,d5=f1.b,d6=f1.c,d7=f1.d,d8=f1.f,d9=f1.r,e0=f1.w,e1=e7.f,e2=e7.r,e3=e7.w,e4=C.bv(d4.l(),d5.l(),d6.l(),d7.l(),d8,d9,e0,e9,d3,e1,e2,e3,f0,D.h,D.h,D.h,D.h,D.h,D.h,D.h),e5=$.ftl.h(0,e4)
if(e5!=null){D.d.v(e6.a,A.nE(e5,0,e7.d,new A.q(e7.b,e7.y,e7.c)))
return}w=C.a([],x.z)
v=new A.fm(w)
v.b=f0
v.r=!0
u=C.ar(d4,D.w,0.16)
u.toString
t=C.ar(d4,B.bkW,0.55)
t.toString
s=d2?Math.sin(e7.CW*3.141592653589793):0
r=e9?8:6
q=e9?4:3
p=e9?8:6
o=e9?4:3
n=e9?9:6
m=x.n
l=C.a([],m)
for(k=0;k<2;++k)l.push(s*F.ho[k]*0.6)
j=C.a([],m)
for(i=l.length,k=0;k<l.length;l.length===i||(0,C.L)(l),++k){h=l[k]
j.push(d2?Math.max(0,-h)*1.5+0.1:0.04)}m=C.a([],m)
for(g=0;g<2;++g)m.push(16*Math.cos(l[g])+15.5*Math.cos(l[g]+j[g]))
f=Math.max(m[0],m[1])+3.3
e=new A.ftQ(f0,v)
d=new A.ftn(v,r,e9)
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
e.$3(new A.fto(q,p),B.han,new A.q(a1,a2+-1.6,i))
if(e9)e.$3(new A.ftp(p),B.h79,new A.q(a1,a2+-2.9,i))
if(e9){i=C.ar(d7,D.c,m)
i.toString
v.ed(new A.q(a1,a2+1.2,a3+0),2.1,i,3,p)}}m=d8?1.22:1.12
e.$3(new A.ftq(d7,q,p),new A.q(m,0.78,0.76),new A.q(0,f+1.2,0))
if(d8){d7=C.ar(d7,D.c,Math.abs(0.05))
d7.toString
m=e9?12:8
v.Tj(new A.q(0,f+3.4,0),new A.q(0,f-9.5,0),5.9,d7,!1,7.8,m)}a6=d8?5.8:6.5
a7=d8?4.2:4.9
d7=d8?0.66:0.62
e.$3(new A.ftB(a7,d6,a6,e9),new A.q(1,1,d7),new A.q(0,f+2.5,0))
if(!d8)e.$3(new A.ftJ(),B.h1B,new A.q(0,f+2.4,0))
if(d8&&e9)for(d7=f+14.3,k=0;k<2;++k)e.$3(new A.ftK(d6,q,p),B.h2z,new A.q(F.ho[k]*2.7,d7,2.7))
d7=d8?1.1:1.2
e.$3(new A.ftL(d8,d6,o,n),new A.q(d7,0.5,0.62),new A.q(0,f+19.6,0))
d7=d8?1.8:2.1
v.dE(new A.q(0,f+20.5,0.2),new A.q(0,f+24.2,0.5),d7,d4,8)
if(e9){d7=C.ar(d6,D.c,Math.abs(0.12))
d7.toString
v.Tj(new A.q(0,f+20,0.1),new A.q(0,f+21.4,0.2),3.1,d7,!1,2.5,10)}d7=f+29
a8=new A.q(0,d7,0.6)
e.$3(new A.ftM(d4,e9),B.hcg,a8)
m=d8?0.95:1.05
e.$3(new A.ftN(d4,q,p),new A.q(m,0.8,0.95),a8.a7(0,B.h3P))
if(e9)for(m=d7+-0.3,k=0;k<2;++k)e.$3(new A.ftO(d4),B.hf7,new A.q(0+F.ho[k]*4.35,m,0.7))
else for(m=d7+-0.2,k=0;k<2;++k)v.ed(new A.q(0+F.ho[k]*4.2,m,0.6),1,d4,2,5)
for(m=d7+1.9,l=d7+0.4,j=d7+2.05,i=d7+0.7,a1=d7+1.25,a2=d7+0.95,k=0;k<2;++k){a0=F.ho[k]
a3=a0*1.8
a9=0+a3
if(e9){e.$3(new A.ftP(),B.hcv,new A.q(a9,l,4.75))
v.ed(new A.q(a9,l,5.1),0.55,B.aen,2,5)}else v.aJ(new A.q(a9,l,5),B.haE,B.aen)
a3=0+a3
if(e9){v.ed(new A.q(0+a0*1.6,i,5.55),0.18,D.c,2,4)
e.$3(new A.ftr(u),B.h8F,new A.q(a3,a1,4.8))
a9=d8?0.28:0.18
v.aJ(new A.q(a3,a2,5.22),new A.q(2.3,a9,0.2),D.ni)
a9=d8?0.34:0.5
v.aJ(new A.q(a3,j,4.75),new A.q(2.4,a9,0.55),d5)}else v.aJ(new A.q(a3,m,4.8),B.hfV,d5)}e.$3(new A.fts(u),B.hgc,a8.a7(0,B.h70))
if(e9){v.L8(a8.a7(0,B.hge),a8.a7(0,B.heQ),0.55,d4,!1,5)
for(m=d7+-1.8,k=0;k<2;++k)v.aJ(new A.q(0+F.ho[k]*0.55,m,5.1),B.h7T,u)}if(e9){v.aJ(a8.a7(0,B.h4J),B.h9P,B.biW)
e.$3(new A.ftt(t),B.h9_,a8.a7(0,B.haY))
e.$3(new A.ftu(t),B.h46,a8.a7(0,B.h7d))}else v.aJ(a8.a7(0,B.ha6),B.h8u,B.bmb)
switch(d9){case 1:e.$3(new A.ftv(d5,e9),B.h6X,a8.a7(0,B.aXj))
e.$3(new A.ftw(d5,p),B.ab_,a8.a7(0,B.aXU))
e.$3(new A.ftx(d5,q,p),B.hfA,a8.a7(0,B.hfS))
for(d9=d7+1.5,d7+=-7.2,k=0;k<2;++k){a0=F.ho[k]
v.L8(new A.q(0+a0*4.4,d9,1),new A.q(0+a0*4.3,d7,1),1.2,d5,!1,6)}break
case 2:e.$3(new A.fty(d5,e9),B.hcm,a8.a7(0,B.h7p))
e.$3(new A.ftz(d5,p),B.h8q,a8.a7(0,B.hfn))
break
case 3:d5=C.ar(d6,D.c,Math.abs(0.18))
d5.toString
e.$3(new A.ftA(d5,e9),B.hb2,a8.a7(0,B.h68))
e.$3(new A.ftC(d5,p),B.ab_,a8.a7(0,B.hgD))
e.$3(new A.ftD(d5,q,p),B.hft,a8.a7(0,B.h7a))
break
case 4:e.$3(new A.ftE(d5,q,p),B.hgb,a8.a7(0,B.hfW))
e.$3(new A.ftF(d5,p),B.hac,a8.a7(0,B.h9D))
break
default:e.$3(new A.ftG(d5,e9),B.h5A,a8.a7(0,B.aXj))
e.$3(new A.ftH(d5,p),B.ab_,a8.a7(0,B.aXU))}b0=d8?6.2:7
for(d5=f+19.3,d7=-s,k=0;k<2;++k){a0=F.ho[k]
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
e.$3(new A.ftI(d4),B.h8Y,new A.q(t,i,a1))
if(e9){a2=d9<0?-1:1
a3=0*a2
a9=-j*a2
a2=d9*a2
for(b4=t+0,b5=i+d9*1.5+0,b6=a1+j*1.5+0,b7=a3*0.25,b8=a9*0.25,b9=a2*0.25,c0=0+a3*0.8,c1=d9*0.6+a9*0.8,c2=j*0.6+a2*0.8,c3=0;c3<4;++c3){c4=u?1:-1
c4=b4+(-1.5+c3)*c4
c5=B.ayS[c3]
c6=c4+0*c5*0.55+b7
c7=b5+d9*c5*0.55+b8
c5=b6+j*c5*0.55+b9
c8=new A.q(c6,c7,c5)
c9=new A.q(c0,c1,c2).gmW(0)
d0=B.ayS[c3]
v.Tj(new A.q(c4,b5,b6),c8,0.62,d4,!1,0.58,4)
v.Tj(c8,new A.q(c6+c9.a*d0*0.45,c7+c9.b*d0*0.45,c5+c9.c*d0*0.45),0.56,d4,!1,0.48,4)}b5=-a0
b4+=b5*2
i=i+d9*0.4+0
a1=a1+j*0.4+0.5
b5=new A.q(0+b5*0.5,d9*0.7+0,j*0.7+0.5).gmW(0)
b6=b4+b5.a*1.7
b7=i+b5.b*1.7
b5=a1+b5.c*1.7
d1=new A.q(b6,b7,b5)
a2=new A.q(0+a3*0.4,d9*0.8+a9*0.4,j*0.8+a2*0.4).gmW(0)
v.L8(new A.q(b4,i,a1),d1,0.7,d4,!1,4)
v.L8(d1,new A.q(b6+a2.a*1.4,b7+a2.b*1.4,b5+a2.c*1.4),0.6,d4,!1,4)}if(u&&e1){d9=l+0
v.dR(new A.q(t,m+-2.6,d9),new A.q(t,m+2.6,d9),1.7,D.aJ,0.5,8)}if(u&&e2){v.aV(new A.q(t,m+-0.4,l+2.6),B.h9i,D.ni,0.3)
v.aJ(new A.q(t,m+0.2,l+3.8),B.h6F,D.ax)}}if(e0!==1)w=A.bCy(w,new A.q(e0,e0,e0),B.dX)
if($.ftl.a>900)$.ftl.aa(0)
$.ftl.n(0,e4,w)
D.d.v(e6.a,A.nE(w,0,e7.d,new A.q(e7.b,e7.y,e7.c)))},
i7q(d,e){var w,v,u,t,s,r,q,p,o,n=C.a([],x.z)
for(w=d.length,v=x.o,u=0;u<d.length;d.length===w||(0,C.L)(d),++u){t=d[u]
s=C.a([],v)
for(r=t.a,q=r.length,p=0;p<r.length;r.length===q||(0,C.L)(r),++p){o=r[p]
s.push(new A.q(o.a*e,o.b*e,o.c*e))}n.push(new A.kp(s,t.b,t.c,t.d,t.e,t.f,t.r,t.w,t.x,t.y,t.z))}return n},
h7k(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=C.ar(f,D.w,Math.abs(-0.25))
h.toString
w=C.ar(f,D.c,Math.abs(0.2))
w.toString
A:{if("bed"===e){d.aV(B.Av,B.h4v,B.q9,0.1)
d.aV(B.fZt,B.h4c,f,0.05)
d.aJ(B.hdc,B.aWx,B.ahq)
d.aJ(B.h15,B.aWx,B.ahq)
d.aV(B.fZX,B.h4x,B.q9,0.1)
d.aJ(B.fZH,B.hcl,w)
break A}if("nightstand"===e){d.aV(B.xc,B.h1f,f,0.1)
d.aJ(B.hbh,B.h52,h)
d.aJ(B.hg2,B.h3k,B.ah2)
d.aJ(B.h__,B.h61,B.o5)
break A}if("wardrobe"===e){d.aV(B.h_j,B.h3y,f,0.1)
d.aJ(B.h6o,B.h3I,h)
d.aV(B.h93,B.aXx,B.F8,0.8)
d.aV(B.hgq,B.aXx,B.F8,0.8)
break A}if("desk"===e){d.aV(B.Vz,B.h3E,f,0.1)
d.aJ(B.hdl,B.aWC,h)
d.aJ(B.h22,B.aWC,h)
d.aV(B.h_B,B.h23,B.M_,0.5)
d.aJ(B.h_g,B.h4M,D.jf)
break A}if("rug"===e){d.hs(B.hfg,B.h1y,f,2)
d.aJ(B.h6b,B.heu,w)
break A}if("sofa"===e){d.aV(B.xc,B.h5p,f,0.05)
d.aV(B.fZW,B.h5q,h,0.05)
d.aV(B.hdz,B.aWV,h,0.05)
d.aV(B.h36,B.aWV,h,0.05)
d.aJ(B.hdb,B.aWy,w)
d.aJ(B.h14,B.aWy,w)
break A}if("armchair"===e){d.aV(B.xc,B.h2K,f,0.05)
d.aV(B.fZV,B.h2M,h,0.05)
d.aJ(B.hd7,B.aWS,h)
d.aJ(B.h0U,B.aWS,h)
break A}if("coffee"===e){d.aV(B.Vy,B.h3s,f,0.2)
for(v=0;v<4;++v){w=B.dmm[v]
d.aJ(new A.q(w.a,6.5,w.b),B.h2w,h)}d.aV(B.h7G,B.h5L,D.bO,0.5)
break A}if("tvstand"===e){d.aV(B.aaV,B.h42,f,0.1)
d.aJ(B.h5m,B.h7k,h)
d.aJ(B.fZG,B.h1W,B.hd)
break A}if("dining"===e){d.aV(B.Vz,B.h43,f,0.2)
for(v=0;v<4;++v){w=B.cOD[v]
d.aJ(new A.q(w.a,13,w.b),B.h3h,h)}break A}if("chair"===e){d.aV(B.fZC,B.h1p,f,0.1)
d.aV(B.h_a,B.h1n,f,0.1)
for(v=0;v<4;++v){w=B.dbU[v]
d.aJ(new A.q(w.a,7.5,w.b),B.h1T,h)}break A}if("plant"===e){d.dE(B.dX,B.aaV,5,D.d2,10)
d.ed(B.aaR,8,B.F6,5,8)
d.ed(B.h3g,5,B.XQ,4,8)
break A}if("lamp"===e){d.dE(B.dX,B.ea,4.5,B.hd,10)
d.dE(B.ea,B.aWd,0.7,B.hd,6)
d.L9(B.h_D,B.aaT,6,B.o5,3.5,12)
break A}if("console"===e){d.aV(B.h_2,B.aWQ,f,0.15)
d.aJ(B.h84,B.aWB,h)
d.aJ(B.h6g,B.aWB,h)
d.aJ(B.xc,B.hef,h)
break A}if("shelf"===e){d.aV(B.aaS,B.h34,f,0.1)
for(u=0;u<4;++u){h=10+u*15
d.aJ(new A.q(0,h,1),B.h2T,B.hd)
w=D.o.F(u,2)
d.aJ(new A.q(-8+w*6,h,2),B.h4r,[D.el,D.dF,D.ej,D.dZ][u])
d.aJ(new A.q(4+w*4,h,2),B.h5O,[D.dZ,D.ej,D.el,D.dF][u])}break A}if("tree"===e){d.L9(B.dX,B.h_i,4.2,B.q9,3,8)
d.ed(B.aWd,17,B.F6,5,9)
d.ed(B.h60,11,B.XQ,4,8)
d.ed(B.he7,12,B.blP,4,8)
break A}if("pine"===e){d.dE(B.dX,B.aW5,3,B.q9,8)
for(u=0;u<3;++u){h=u*14
d.L9(new A.q(0,8+h,0),new A.q(0,26+h,0),14-u*3.5,B.aeZ,1.5,10)}break A}if("bush"===e){d.ed(B.xc,9,B.biu,4,8)
d.ed(B.h4q,6.5,B.XQ,4,8)
break A}if("flowers"===e){for(v=0;v<5;++v){h=B.dkU[v]
t=h.a
s=h.b
d.dE(new A.q(t,0,s),new A.q(t,7,s),0.4,B.aeZ,5)
d.ed(new A.q(t,8,s),2.2,h.c,3,6)}break A}if("fence"===e){for(v=0;v<4;++v)d.aV(new A.q(B.dmE[v],9,0),B.hb8,f,0.05)
d.aJ(B.Av,B.aXO,h)
d.aJ(B.aaQ,B.aXO,h)
break A}if("lamppost"===e){d.dE(B.dX,B.aWe,1.3,B.hd,5)
d.dE(B.dX,B.h_n,3.5,B.hd,6)
break A}if("bench"===e){d.aV(B.aW7,B.aWQ,f,0.1)
d.aV(B.fZR,B.h3w,f,0.1)
d.aJ(B.hdd,B.aWN,B.hd)
d.aJ(B.h1r,B.aWN,B.hd)
break A}if("car"===e){d.aV(B.aW5,B.h5w,f,0.4)
d.aV(B.hdJ,B.h3B,f,0.4)
d.aV(B.h1A,B.h7U,B.i1,0.6)
d.aJ(B.het,B.aaX,B.o5)
d.aJ(B.h8y,B.aaX,B.o5)
for(v=0;v<2;++v){t=B.a56[v]
d.dE(new A.q(t,5,-18),new A.q(t,5,-21),5.5,D.ni,12)
d.dE(new A.q(t,5,18),new A.q(t,5,21),5.5,D.ni,12)}break A}if("road"===e||"roadturn"===e||"roadtee"===e||"roadcross"===e){A.i6t(d,e)
break A}if("roundabout"===e){d.dE(B.dX,B.h7N,72,B.Ms,16)
d.dE(B.h85,B.aXA,17,D.bm,10)
d.dE(B.aXA,B.aXg,15,B.bl0,10)
d.ed(B.aaV,6,E.Xz,3,6)
d.dE(B.aXg,B.aaU,0.9,B.q9,5)
break A}if("house2"===e||"shop"===e||"hospital"===e||"firestation"===e||"school"===e){h=C.a([],x.z)
r=new A.fm(h)
r.b=d.b
r.r=!0
r.f=d.f
A.hqk(r,e,f)
D.d.v(d.a,A.bCy(h,B.hbS,B.dX))
break A}if("bighouse"===e){h=C.a([],x.z)
q=new A.fm(h)
q.b=d.b
q.r=!0
q.f=d.f
A.hqk(q,"house2",f)
D.d.v(d.a,A.bCy(h,B.hcH,B.dX))
break A}if("pole"===e){d.L9(B.dX,B.fZk,2.6,B.q9,2,5)
d.aJ(B.fZg,B.h3D,B.bgI)
for(v=0;v<3;++v){t=B.aAO[v]
d.dE(new A.q(t,116,0),new A.q(t,121,0),1.1,D.bN,4)}d.dE(B.h3O,B.h3M,5.5,D.bm,6)
d.aJ(B.h0M,B.h1V,D.jf)
break A}if("crate"===e){d.aV(B.aaU,B.h2n,B.iz,0.05)
d.aJ(B.hg0,B.h1k,B.vI)
d.fO(B.hdN,3.4,D.ax,3,5,0.3)
d.fO(B.h4l,3.4,D.aB,3,5,0.3)
break A}if("billboard"===e){d.x=$.dS=$.dS+1
for(v=0;v<2;++v){t=B.a56[v]
d.dE(new A.q(t,0,-1),new A.q(t,40,-1),1.6,D.jf,8)}d.aV(B.h_E,B.h50,D.cr,0.3)
d.x=0
break A}if("tower"===e||"hq"===e){d.x=$.dS=$.dS+1
p=e==="hq"
o=p?170:100
n=p?90:70
m=p?150:A.huu(f)
l=p?D.bO:B.ds3[D.o.F(f.l()>>>4,6)]
k=new A.fn0(d)
d.aV(new A.q(0,m/2,0),new A.q(o,m,n),l,0.25)
k.$4(o,n,20,m-8)
if(p){h=o*0.66
w=n*0.66
d.aV(new A.q(0,m+60,0),new A.q(h,120,w),D.bN,0.25)
k.$4(h,w,m+16,m+112)
d.aV(new A.q(0,m+124,0),new A.q(o*0.7,8,n*0.7),F.fA,0.4)}else{d.aJ(new A.q(0,m+3,0),new A.q(o+4,6,n+4),D.cr)
d.aJ(new A.q(o*0.2,m+12,0),new A.q(o*0.3,12,n*0.3),D.dt)}j=p?m+128:m+6
for(h=o*0.3,h=[-h,h],w=j+8,v=0;v<2;++v)d.aJ(new A.q(h[v],w,0),B.h3e,D.jf)
h=p?112:84
d.aV(new A.q(0,j+34,0),new A.q(h,38,3),E.jL,0.3)
h=n/2
A.kI(d,new A.q(0,17,h+0.6),B.hI,B.ea,34,34,D.cr,B.ig,0.5)
A.kI(d,new A.q(0,17,h+0.7),B.ea.FY(B.ig),B.ea,1.2,34,B.i1,B.ig,0.6)
d.aV(new A.q(0,38,h+5),B.h3C,F.fA,0.3)
d.x=0
break A}if("store"===e){d.x=$.dS=$.dS+1
d.aV(B.Vz,B.aWn,f,0.2)
d.aJ(B.aaT,B.aWo,D.cr)
A.kI(d,B.aXT,B.hI,B.ea,112,30,B.i1,B.ig,0.6)
d.aJ(B.aWc,B.aWm,D.bz)
d.aJ(B.aWf,B.aWj,D.av)
d.x=0
break A}if("dmv"===e){d.x=$.dS=$.dS+1
d.aV(B.Vz,B.aWn,D.aN,0.2)
d.aJ(B.aaT,B.aWo,D.d7)
A.kI(d,B.aXT,B.hI,B.ea,112,30,B.i1,B.ig,0.6)
d.aJ(B.aWc,B.aWm,D.bl)
d.aJ(B.aWf,B.aWj,D.d7)
d.aJ(B.h9f,B.hbX,D.bu)
d.aJ(B.hfJ,B.h4K,D.d7)
d.x=0
break A}if("ubstation"===e){d.x=$.dS=$.dS+1
for(v=0;v<2;++v){t=B.dmK[v]
for(i=0;i<2;++i){s=E.RQ[i]
d.dE(new A.q(t,0,s),new A.q(t,50,s),2.2,D.aK,6)}}d.aV(B.aWe,B.h0I,D.av,0.3)
d.aJ(B.h_O,B.h0K,D.bu)
d.aV(B.h_9,B.h0B,D.du,0.6)
d.aJ(B.fZh,B.h5t,D.bs)
d.aJ(B.h_T,B.h55,D.aK)
d.dE(B.h47,B.h4a,2,D.jf,6)
d.aJ(B.h4b,B.h39,D.av)
d.aJ(B.h7b,B.h87,D.bu)
d.aJ(B.hfT,B.hee,D.c)
d.x=0
break A}if("gasstation"===e){d.x=$.dS=$.dS+1
for(v=0;v<2;++v){t=B.aAR[v]
for(i=0;i<2;++i){s=B.cHv[i]
d.dE(new A.q(t,0,s),new A.q(t,46,s),2.4,D.bO,6)}}d.aV(B.h_G,B.h0P,D.bz,0.3)
d.aJ(B.hgd,B.h0R,F.fA)
for(v=0;v<2;++v){t=E.RQ[v]
d.aV(new A.q(t,9,20),B.h5f,D.iy,0.3)
d.aJ(new A.q(t,15,20.2),B.h2t,D.bz)}d.aV(B.fZJ,B.h5r,f,0.2)
d.dE(B.hdW,B.hdX,2.2,D.jf,6)
d.aJ(B.hdY,B.h2V,D.av)
d.x=0
break A}if("townsign"===e){d.x=$.dS=$.dS+1
for(v=0;v<2;++v){t=B.dmw[v]
d.dE(new A.q(t,0,0),new A.q(t,316,0),5.5,D.jf,6)}d.aV(B.h_7,B.h2Z,E.jL,0.3)
d.aJ(B.h_e,B.aWM,F.fA)
d.aJ(B.fZF,B.aWM,F.fA)
d.x=0
break A}if("adboard"===e){d.x=$.dS=$.dS+1
for(v=0;v<2;++v){t=B.dmv[v]
d.dE(new A.q(t,0,0),new A.q(t,205,0),4.5,D.jf,6)}d.aV(B.fZq,B.h2S,E.jL,0.3)
d.aJ(B.fZL,B.aWG,F.fA)
d.aJ(B.aWg,B.aWG,F.fA)
d.x=0
break A}if("cornersign"===e){d.x=$.dS=$.dS+1
for(v=0;v<2;++v){t=B.aAR[v]
d.dE(new A.q(t,0,0),new A.q(t,125,0),3,D.jf,6)}d.aV(B.fZj,B.h1a,E.jL,0.3)
d.aJ(B.fZz,B.h1c,F.fA)
d.x=0
break A}if("firetruck"===e){d.aV(B.aW6,B.h5Y,D.bz,0.3)
d.aV(B.h30,B.h21,D.bz,0.3)
d.aV(B.haU,B.h4f,B.i1,0.6)
d.aJ(B.hd_,B.heS,D.dt)
for(u=0;u<6;++u)d.aJ(new A.q(-34+u*11,24,0),B.h9J,D.dt)
d.aJ(B.h31,B.aX_,D.d3)
d.aJ(B.hbp,B.h7t,B.bmX)
for(v=0;v<3;++v){t=B.dmG[v]
d.dE(new A.q(t,6,-19),new A.q(t,6,-22.5),6,D.ni,12)
d.dE(new A.q(t,6,19),new A.q(t,6,22.5),6,D.ni,12)}break A}if("ambulance"===e){d.aV(B.Vy,B.h5x,D.c,0.4)
d.aV(B.h2L,B.h2g,D.c,0.4)
d.aV(B.h7M,B.hc5,B.i1,0.6)
d.aJ(B.hfs,B.aXk,D.bz)
d.aJ(B.h9q,B.aXk,D.bz)
d.aJ(B.aXF,B.h8O,D.bz)
d.aJ(B.aXF,B.h75,D.bz)
d.aJ(B.h2N,B.aX_,D.ax)
for(v=0;v<2;++v){t=B.a56[v]
d.dE(new A.q(t,6,-19),new A.q(t,6,-22.5),6,D.ni,12)
d.dE(new A.q(t,6,19),new A.q(t,6,22.5),6,D.ni,12)}break A}if("dog"===e||"cat"===e||"cow"===e||"sheep"===e||"chicken"===e||"horse"===e){A.hpQ(d,e,f,0)
break A}if("pond"===e){h=C.a([],x.z)
q=new A.fm(h)
q.b=d.b
q.f=d.f
q.r=!0
q.dR(B.dX,B.hcL,28,B.bo7,0.8,22)
D.d.v(d.a,A.bCy(h,B.h6z,B.dX))
for(v=0;v<3;++v){h=B.d7q[v]
d.ed(new A.q(h.a,1.2,h.b),2.6,B.agx,3,6)}break A}if("swing"===e){d.dE(B.hdm,B.h2i,1.6,D.d2,8)
for(v=0;v<2;++v){t=E.a55[v]
d.dE(new A.q(t,38,0),new A.q(t,0,14),1.4,D.d2,6)
d.dE(new A.q(t,38,0),new A.q(t,0,-14),1.4,D.d2,6)}for(v=0;v<2;++v){t=E.a57[v]
d.dE(new A.q(t,38,0),new A.q(t,15,0),0.3,B.hd,4)}d.aJ(B.Vy,B.hfz,f)
break A}if("shed"===e){d.aV(B.Vy,B.h3V,f,0.05)
d.aJ(B.aaS,B.h45,B.Y4)
d.aJ(B.hcC,B.hcn,h)
break A}if("doghouse"===e){d.aV(B.aaU,B.h2h,f,0.05)
d.aJ(B.h2E,B.heJ,B.Y4)
d.aJ(B.haT,B.hfM,B.M_)
break A}d.aJ(B.Av,B.h0m,f)}},
hrL(d,e,f,g,h,i){var w=e.a,v=e.b,u=e.c,t=h/2
d.aV(new A.q(w,v,u+t-0.5),new A.q(f,g,1),i,0.1)
d.aV(new A.q(w,v,u-t+0.5),new A.q(f,g,1),i,0.1)
t=f/2
d.aV(new A.q(w-t+0.5,v,u),new A.q(1,g,h),i,0.1)
d.aV(new A.q(w+t-0.5,v,u),new A.q(1,g,h),i,0.1)
d.aV(new A.q(w,v-g/2+0.5,u),new A.q(f,1,h),i,0.1)},
cgv:function cgv(){},
fR8:function fR8(d,e,f){this.a=d
this.b=e
this.c=f},
fR6:function fR6(d,e,f){this.a=d
this.b=e
this.c=f},
fR5:function fR5(d,e,f){this.a=d
this.b=e
this.c=f},
fR7:function fR7(d){this.a=d},
fA4:function fA4(d){this.a=d},
fzR:function fzR(){},
fA1:function fA1(){},
fA2:function fA2(d,e,f){this.a=d
this.b=e
this.c=f},
fzS:function fzS(){},
fzT:function fzT(){},
fzU:function fzU(){},
fzV:function fzV(d){this.a=d},
fzX:function fzX(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fzY:function fzY(d,e,f){this.a=d
this.b=e
this.c=f},
fzZ:function fzZ(d,e,f){this.a=d
this.b=e
this.c=f},
fA_:function fA_(d,e,f){this.a=d
this.b=e
this.c=f},
fA0:function fA0(d,e,f){this.a=d
this.b=e
this.c=f},
fA3:function fA3(d){this.a=d},
fzW:function fzW(d){this.a=d},
fsZ:function fsZ(d){this.a=d},
ft_:function ft_(d){this.a=d},
fsV:function fsV(d){this.a=d},
fsW:function fsW(d,e){this.a=d
this.b=e},
fsX:function fsX(d){this.a=d},
fsm:function fsm(){},
fsn:function fsn(){},
fso:function fso(d){this.a=d},
fsz:function fsz(d){this.a=d},
fsK:function fsK(){},
fsY:function fsY(d,e){this.a=d
this.b=e},
fsP:function fsP(d){this.a=d},
fsQ:function fsQ(d){this.a=d},
fsR:function fsR(d){this.a=d},
fsS:function fsS(d){this.a=d},
fsT:function fsT(d){this.a=d},
fsU:function fsU(d){this.a=d},
fsp:function fsp(d){this.a=d},
fsq:function fsq(d){this.a=d},
fsr:function fsr(d){this.a=d},
fss:function fss(d){this.a=d},
fst:function fst(d){this.a=d},
fsu:function fsu(d){this.a=d},
fsv:function fsv(){},
fsw:function fsw(){},
fsx:function fsx(){},
fsy:function fsy(){},
fsA:function fsA(d){this.a=d},
fsB:function fsB(d){this.a=d},
fsC:function fsC(d){this.a=d},
fsD:function fsD(d){this.a=d},
fsE:function fsE(){},
fsF:function fsF(){},
fsG:function fsG(){},
fsH:function fsH(){},
fsI:function fsI(){},
fsJ:function fsJ(d,e){this.a=d
this.b=e},
fsL:function fsL(d){this.a=d},
fsM:function fsM(d){this.a=d},
fsN:function fsN(){},
fsO:function fsO(){},
fD3:function fD3(d){this.a=d},
fD0:function fD0(){},
fD1:function fD1(d){this.a=d},
fD2:function fD2(d){this.a=d},
fja:function fja(d,e){this.a=d
this.b=e},
fj0:function fj0(d,e,f){this.a=d
this.b=e
this.c=f},
ftQ:function ftQ(d,e){this.a=d
this.b=e},
ftn:function ftn(d,e,f){this.a=d
this.b=e
this.c=f},
fto:function fto(d,e){this.a=d
this.b=e},
ftp:function ftp(d){this.a=d},
ftq:function ftq(d,e,f){this.a=d
this.b=e
this.c=f},
ftB:function ftB(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ftJ:function ftJ(){},
ftK:function ftK(d,e,f){this.a=d
this.b=e
this.c=f},
ftL:function ftL(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ftM:function ftM(d,e){this.a=d
this.b=e},
ftN:function ftN(d,e,f){this.a=d
this.b=e
this.c=f},
ftO:function ftO(d){this.a=d},
ftP:function ftP(){},
ftr:function ftr(d){this.a=d},
fts:function fts(d){this.a=d},
ftt:function ftt(d){this.a=d},
ftu:function ftu(d){this.a=d},
ftv:function ftv(d,e){this.a=d
this.b=e},
ftw:function ftw(d,e){this.a=d
this.b=e},
ftx:function ftx(d,e,f){this.a=d
this.b=e
this.c=f},
fty:function fty(d,e){this.a=d
this.b=e},
ftz:function ftz(d,e){this.a=d
this.b=e},
ftA:function ftA(d,e){this.a=d
this.b=e},
ftC:function ftC(d,e){this.a=d
this.b=e},
ftD:function ftD(d,e,f){this.a=d
this.b=e
this.c=f},
ftE:function ftE(d,e,f){this.a=d
this.b=e
this.c=f},
ftF:function ftF(d,e){this.a=d
this.b=e},
ftG:function ftG(d,e){this.a=d
this.b=e},
ftH:function ftH(d,e){this.a=d
this.b=e},
ftI:function ftI(d){this.a=d},
fn0:function fn0(d){this.a=d},
hgl(){var w=x.S
return new A.bVj(C.eE([72],w),C.aX(w),C.aX(w),C.aX(w))},
ibm(d){var w
A:{if(81===d){w="outlet"
break A}if(82===d){w="switch"
break A}if(84===d){w="gfci"
break A}if(86===d||87===d){w="ptrap"
break A}if(85===d){w="faucet"
break A}w=null
break A}return w},
agK(a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=C.a([],x.z),a0=new A.fm(d)
a0.b=70
a0.hs(B.hbU,B.heG,B.bkQ,4)
a0.c=1
a0.b=91
w=new A.fA9(a0)
w.$3(B.h74,B.h6j,15)
w.$4$alongX(B.hed,B.hax,11,!1)
w.$4$alongX(B.h4e,B.h6t,11,!1)
w.$4$alongX(B.hde,B.h7r,6,!1)
w.$4$alongX(B.h5e,B.hay,6,!1)
for(v=0;v<=12;++v)a0.aE0(new A.q(-12+v*2,8.4,0),B.hbf,B.Ym,!1,0.05)
a0.c=2
a0.b=92
u=new A.fA6(a0)
u.$2(B.cqL,B.tO)
u.$2(B.djs,B.o1)
u.$2(B.doA,B.o1)
t=new A.fA5(a0)
t.$1(B.d_Y)
t.$1(B.d62)
a0.c=3
a0.b=93
s=new A.fA8(a0)
s.$1(B.cZR)
s.$2$col(B.cYd,B.n7)
s.$2$col(B.cXh,B.n7)
s.$1(B.dgj)
a0.c=4
a0.b=0
a0.d=0.22
a0.hs(B.h6s,B.h9M,B.B9,4)
a0.hs(B.h9I,B.aXr,B.B9,4)
a0.hs(B.h78,B.aXr,B.B9,4)
a0.hs(B.h8g,B.aXw,B.B9,3)
a0.hs(B.hfZ,B.aXw,B.B9,3)
a0.d=1
a0.c=5
a0.e=0.3
a0.b=0
a0.mi(B.hcW,B.h6p,B.bie,0.1,4)
a0.b=71
a0.aV(B.hc1,B.hbg,B.XF,0.5)
a0.aJ(B.hfy,B.h7Y,B.xP)
r=[72,73,74,75,76]
for(q=a1.d,p=a1.e,v=0;v<5;++v){o=D.o.F(v,2)
n=D.o.ao(v,2)
m=r[v]
l=q.t(0,m)
k=p.t(0,m)
a0.b=m
m=9.55+o*0.5
j=5.7-n*0.5
a0.aV(new A.q(m,j,-7.5),B.h5Z,B.Zc,0.3)
if(l)i=0
else i=k?-0.07:0.07
if(l)h=D.cd
else h=k?D.bm:D.bO
a0.aV(new A.q(m+0,j+i,-7.42),B.h7B,h,0.4)}a0.b=90
a0.aV(B.haz,B.h4m,B.bsv,0.1)
a0.aV(B.heh,B.h6O,B.YV,0.1)
a0.aV(B.hgy,B.aXN,B.YV,0.1)
a0.aV(B.h6H,B.aXN,B.YV,0.1)
g=new A.fA7(a0)
g.$3(81,B.h5n,a1.x?B.tQ:B.YE)
a0.b=81
a0.aJ(B.haA,B.aXH,B.Ft)
a0.aJ(B.h8T,B.aXH,B.Ft)
g.$5$h$w(82,B.hfD,H.YO,0.65,0.4)
a0.b=82
a0.aV(B.hcx,B.h4j,B.afT,0.4)
f=!q.t(0,72)
a0.b=83
a0.dR(B.hci,B.aXb,0.5,B.bq2,0.4,14)
a0.bcc(B.hf1,0.3,f?Al.FO:B.bkw,0.7)
if(f){a0.b=0
a0.d=0.22
a0.fO(B.aWZ,1.5,B.XZ,4,10,0)
a0.d=1}a0.b=94
a0.aV(B.heP,B.aXR,B.iz,0.1)
a0.aV(B.haQ,B.aXR,B.iz,0.1)
a0.aV(B.hfB,B.h7g,B.iz,0.1)
A.b7e(a0,1.35,B.M8,2.5,2.1,B.j9,B.Mj,6,0.55,!1,1,0.18,3.19,0.06,3,-7.15)
a0.b=85
a0.j8(A.Dj(B.d9N,0.2,6),0.055,B.j9,!1,0.9,8)
a0.b=84
a0.aV(B.hfe,B.hcP,B.YE,0.3)
a0.aJ(B.h8p,B.hfx,a1.y?B.agw:B.aiM)
a0.b=86
a0.j8(A.Dj(B.d0r,0.35,3),0.11,B.pZ,!1,0.3,8)
a0.b=87
a0.dR(B.h9l,B.hc6,0.19,a1.c?B.XM:B.bnM,0.3,8)
a0.b=88
a0.aV(B.h3A,B.h66,B.Bf,0.7)
a0.BF(B.hbT,B.aXI,0.72,B.Bf,0.55,0.7,16)
a0.dR(B.aXI,B.had,0.78,B.bpz,0.7,16)
a0.b=89
a0.dR(B.hen,B.aX1,0.85,B.bd3,0.6,18)
a0.dR(B.aX1,B.h9K,0.5,B.bd5,0.5,12)
a0.aJ(B.hb_,B.hgk,B.bnG)
a0.b=95
for(p=a1.f,m=a1.r,v=0;v<3;++v){e=B.cH8[v]
if(m.t(0,v)){j=e.a
i=e.b
a0.aJ(new A.q(j,i,-7.82),B.hcj,B.B9)
a0.aJ(new A.q(j,i,-7.79),B.h9Q,B.bgz)}else if(p.t(0,v)){j=e.a
i=e.b
a0.aJ(new A.q(j,i,-7.82),B.h1K,B.ahK)
a0.aJ(new A.q(j,i,-7.8),B.haO,B.bsM)}}if(a1.w){a0.b=96
a0.dR(B.h9W,B.h9b,0.1,D.d2,0.7,8)}a0.e=0
a0.c=6
a0.b=0
a0.d=0.4
a0.bj5(B.aWT,B.aXG,B.ab3,B.ab1,B.aff,B.hau,!0)
a0.bj5(B.aXB,B.aXL,B.ab1,B.ab3,B.aff,B.hcq,!0)
a0.bke(B.aWT,B.aXL,B.ab1,B.aft)
a0.bke(B.aXG,B.aXB,B.ab3,B.aft)
a0.d=1
p=q.t(0,72)?"This breaker has TRIPPED (it is in the middle, orange). The living room has no power. Tap it to flip it off and on again.":"This breaker is ON. The living room has power."
q=q.t(0,72)?"The light is off because the living room breaker has tripped.":"The ceiling light is on."
m=a1.b
j=m&&!a1.c?"Water is dripping from the slip nut here. Pick the wrench, then tap the nut to tighten it.":"The P-trap holds a water seal that blocks sewer gas. Tap Open lesson to build one."
m=m&&!a1.c?"This slip nut is loose and the trap is dripping. Pick the wrench and tap here to tighten it.":"The slip nut is tight."
return new A.tU(d,C.H([70,B.edK,91,B.eda,92,B.edt,93,B.edB,71,B.edP,72,new A.cV("Living room breaker",p,B.hg6,3.5),73,B.edl,74,B.edD,75,B.ed0,76,B.edw,81,B.edy,82,B.ecR,83,new A.cV("Ceiling light",q,B.aXb,7),84,B.edE,85,B.ed2,86,new A.cV("P-trap under the sink",j,B.hbR,4.5),87,new A.cV("Slip nut (leaking?)",m,B.aXe,3.5),88,B.ecO,89,B.edC,90,B.edG,94,B.edk,95,B.edI,96,B.ecU],x.S,x.q),B.zu,B.wE,null,0)},
hvx(d,e){var w,v,u,t,s,r,q,p=C.a([],x.z),o=new A.fm(p)
o.c=5
o.e=0.8
if(d.w)for(w=e*1.5,v=0;v<6;++v){u=D.k.F(w+v/6,1)
o.fO(new A.q(3.4+Math.sin(v*2)*0.12,3.3-u*u*2.8,-7.7),0.05,D.LZ,3,6,0.9)}if(d.as){u=D.k.F(e*1.1,1)
o.fO(new A.q(3,3.9-u*u*0.7,-6.95),0.05,B.XW,3,6,0.9)}if(d.Q)for(w=e*1.6,v=0;v<6;++v){u=D.k.F(w+v/6,1)
o.fO(new A.q(8.2+Math.sin(v*1.7)*0.15,2.2-u*1.5,-7.2),0.05,B.XW,3,6,0.9)}if(d.at){o.d=0.55
o.aV(B.h6D,B.h8l,B.bpR,0.8)
o.d=1}if(d.x)for(w=e*2,t=e*6,v=0;v<8;++v){u=D.k.F(w+v*0.13,1)
s=v*2.4+t
r=Math.cos(s)
s=Math.sin(s)
q=C.ar(F.MJ,E.Z5,1-u)
q.toString
o.fO(new A.q(-3.2+r*u*0.7,1.3+s*u*0.7,-7.6+u*0.3),0.05,q,3,5,0)}if(d.z&&!d.d.t(0,72)){o.b=0
o.d=D.k.E((Math.sin(e*17)+Math.sin(e*29)+2)/4*0.5,0,0.6)
o.fO(B.aWZ,1.5,B.XZ,4,10,0)
o.d=1}if(d.b&&!d.c){for(w=e*1.3,v=0;v<5;++v){u=D.k.F(w+v*0.2,1)
o.fO(new A.q(3.05,1.45-u*u*1.4,-6.95),0.05,B.YY,3,6,0.9)}o.d=0.5
o.aV(B.h6i,new A.q(0.7+0.3*Math.sin(e),0.02,0.5),B.YY,0.9)
o.d=1}return p},
bVj:function bVj(d,e,f,g){var _=this
_.a=5
_.b=!0
_.c=!1
_.d=d
_.e=e
_.f=f
_.r=g
_.at=_.as=_.Q=_.z=_.y=_.x=_.w=!1},
fA9:function fA9(d){this.a=d},
fA6:function fA6(d){this.a=d},
fA5:function fA5(d){this.a=d},
fA8:function fA8(d){this.a=d},
fA7:function fA7(d){this.a=d},
fR(d,e,f,g){var w
try{Ak.dF(d,"",e,0,f,g)}catch(w){}},
wW(){A.fR(880,80,0.25,"tri")
C.bP(A_.ajG,new A.fB4(),x.H)},
hNH(){return new A.NI(null)},
Y9(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w){return new A.b7Q(t,d,u,s,f,r,q,j,g,h,m,n,i,k,v,w,l,o,p,e,null)},
wX(d,e,f,g,h){var w=null,v=g?e.j(0.25):D.w.j(0.5),u=C.n(18),t=C.K(g?e:D.aX,D.r,1),s=x.p,r=C.a([],s)
D.d.v(r,C.a([C.X(f,g?e:D.ac,w,w,w,16),D.eg],s))
r.push(C.d(d,w,w,w,w,w,w,C.l(w,w,g?e:D.ac,w,w,w,w,w,w,w,w,12,w,w,D.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w))
return C.aA(w,C.p(w,C.B(r,D.m,w,D.e,D.O,0,w,w),D.f,w,w,new C.o(v,w,t,u,w,w,D.n),w,w,w,w,D.h6,w,w,w),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,h,w,w,w,w,w,w,!1,D.a3)},
uj(d,e,f,g){var w=null,v=f==null,u=v?D.dq:g.j(0.9),t=C.n(14),s=C.X(e,v?D.bU:D.w,w,w,w,18)
return C.E(C.aA(w,C.p(w,C.B(C.a([s,D.bn,new C.ds(1,D.cp,C.d(d,w,w,w,w,w,w,C.l(w,w,v?D.bU:D.w,w,w,w,w,w,w,w,w,12.5,w,w,D.u,w,w,!0,w,w,w,w,w,w,w,w),D.K,w,w),w)],x.p),D.m,w,D.b9,D.i,0,w,w),D.f,w,w,new C.o(u,w,w,t,w,w,D.n),w,w,w,w,D.u7,w,w,w),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,!1,D.a3),1)},
fSi(d,e,f,g){return C.bV(E.lB,null,new A.fSk(e,g,f),d,!0,!0,!0,D.k3,!1,!1,x.H)},
U1(d,e,f,g,h,i,j){return new A.aXX(i,d,g,f,e,h,j,null)},
fB4:function fB4(){},
m1:function m1(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
NI:function NI(d){this.a=d},
bkU:function bkU(){var _=this
_.e=!1
_.f=""
_.c=_.a=null},
dSU:function dSU(d){this.a=d},
dSX:function dSX(d){this.a=d},
dSY:function dSY(d){this.a=d},
dSZ:function dSZ(d){this.a=d},
dT1:function dT1(d){this.a=d},
dT2:function dT2(d){this.a=d},
dT3:function dT3(d){this.a=d},
dT4:function dT4(d){this.a=d},
dT5:function dT5(d){this.a=d},
dT6:function dT6(d){this.a=d},
dT7:function dT7(d){this.a=d},
dT8:function dT8(d){this.a=d},
dT_:function dT_(d){this.a=d},
dSW:function dSW(d){this.a=d},
dT0:function dT0(d){this.a=d},
dSV:function dSV(d,e){this.a=d
this.b=e},
dSP:function dSP(d,e){this.a=d
this.b=e},
dSQ:function dSQ(d){this.a=d},
dSR:function dSR(d){this.a=d},
dSS:function dSS(){},
dST:function dST(d){this.a=d},
aww:function aww(d,e){this.c=d
this.a=e},
btQ:function btQ(){this.c=this.a=this.d=null},
f75:function f75(d){this.a=d},
f74:function f74(){},
b7Q:function b7Q(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0){var _=this
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
cxp:function cxp(){},
cxq:function cxq(){},
fSk:function fSk(d,e,f){this.a=d
this.b=e
this.c=f},
fSj:function fSj(){},
aXX:function aXX(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
bXp:function bXp(d){this.a=d},
E_:function E_(d,e,f){this.c=d
this.d=e
this.a=f},
aAB:function aAB(d){var _=this
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
db_:function db_(d,e){this.a=d
this.b=e},
daY:function daY(d,e,f){this.a=d
this.b=e
this.c=f},
daZ:function daZ(d){this.a=d},
daX:function daX(d){this.a=d},
daK:function daK(d){this.a=d},
daL:function daL(d){this.a=d},
daJ:function daJ(d){this.a=d},
daM:function daM(d){this.a=d},
daN:function daN(d){this.a=d},
daO:function daO(d){this.a=d},
daP:function daP(d){this.a=d},
daQ:function daQ(d){this.a=d},
daR:function daR(d,e,f){this.a=d
this.b=e
this.c=f},
daS:function daS(d){this.a=d},
daT:function daT(d,e){this.a=d
this.b=e},
daU:function daU(d,e){this.a=d
this.b=e},
daV:function daV(d,e){this.a=d
this.b=e},
daW:function daW(d){this.a=d},
db0:function db0(d,e){this.a=d
this.b=e},
db1:function db1(d){this.a=d},
dba:function dba(){},
dbj:function dbj(d,e,f){this.a=d
this.b=e
this.c=f},
dbq:function dbq(d){this.a=d},
db7:function db7(){},
dbb:function dbb(d){this.a=d},
dbc:function dbc(d){this.a=d},
dbk:function dbk(d){this.a=d},
dbl:function dbl(d){this.a=d},
db9:function db9(d){this.a=d},
dbm:function dbm(d){this.a=d},
db8:function db8(d){this.a=d},
dbn:function dbn(d){this.a=d},
dbo:function dbo(d){this.a=d},
dbp:function dbp(d){this.a=d},
dbr:function dbr(d){this.a=d},
dbd:function dbd(d,e){this.a=d
this.b=e},
db6:function db6(d,e){this.a=d
this.b=e},
dbe:function dbe(d,e){this.a=d
this.b=e},
dbf:function dbf(d){this.a=d},
db5:function db5(d){this.a=d},
dbg:function dbg(d){this.a=d},
db4:function db4(d){this.a=d},
dbh:function dbh(d){this.a=d},
db3:function db3(d){this.a=d},
dbi:function dbi(d){this.a=d},
db2:function db2(d){this.a=d},
a9H:function a9H(d,e){this.c=d
this.a=e},
aGx:function aGx(){var _=this
_.f=_.e=_.d=$
_.r=""
_.w=0
_.x=null
_.y=!1
_.c=_.a=_.z=null},
eXi:function eXi(d,e,f){this.a=d
this.b=e
this.c=f},
eXj:function eXj(d){this.a=d},
eXh:function eXh(d){this.a=d},
eXb:function eXb(d){this.a=d},
eXc:function eXc(d,e){this.a=d
this.b=e},
eXd:function eXd(d,e){this.a=d
this.b=e},
eXe:function eXe(d,e){this.a=d
this.b=e},
eXf:function eXf(d){this.a=d},
eXg:function eXg(d,e){this.a=d
this.b=e},
eXn:function eXn(){},
eXr:function eXr(d,e){this.a=d
this.b=e},
eXo:function eXo(d){this.a=d},
eXp:function eXp(d,e){this.a=d
this.b=e},
eXm:function eXm(d,e){this.a=d
this.b=e},
eXq:function eXq(d){this.a=d},
eXl:function eXl(d){this.a=d},
eXk:function eXk(){},
a58:function a58(d,e){this.c=d
this.a=e},
aAV:function aAV(){var _=this
_.f=_.e=_.d=$
_.r=""
_.w=0
_.x=null
_.y=!1
_.c=_.a=_.z=null},
de1:function de1(d,e,f){this.a=d
this.b=e
this.c=f},
de2:function de2(d){this.a=d},
de0:function de0(d){this.a=d},
ddU:function ddU(d){this.a=d},
ddX:function ddX(d){this.a=d},
ddY:function ddY(d,e){this.a=d
this.b=e},
ddZ:function ddZ(d,e){this.a=d
this.b=e},
ddW:function ddW(d){this.a=d},
de_:function de_(d,e){this.a=d
this.b=e},
ddV:function ddV(d){this.a=d},
de6:function de6(){},
dec:function dec(d,e){this.a=d
this.b=e},
de7:function de7(d){this.a=d},
de8:function de8(d){this.a=d},
de5:function de5(d){this.a=d},
dea:function dea(d,e){this.a=d
this.b=e},
de4:function de4(d,e){this.a=d
this.b=e},
de9:function de9(d){this.a=d},
deb:function deb(d){this.a=d},
de3:function de3(d){this.a=d},
aBN:function aBN(d){this.a=d},
aBO:function aBO(d){var _=this
_.d=d
_.f=_.e=$
_.r=0
_.w=""
_.x=null
_.y=!1
_.c=_.a=_.z=null},
dl5:function dl5(d,e,f){this.a=d
this.b=e
this.c=f},
dl6:function dl6(d){this.a=d},
dl4:function dl4(d){this.a=d},
dl_:function dl_(d){this.a=d},
dl1:function dl1(d,e){this.a=d
this.b=e},
dl2:function dl2(d,e){this.a=d
this.b=e},
dl3:function dl3(d,e){this.a=d
this.b=e},
dl0:function dl0(d){this.a=d},
dle:function dle(d,e){this.a=d
this.b=e},
dl9:function dl9(d,e){this.a=d
this.b=e},
dlb:function dlb(d){this.a=d},
dla:function dla(d){this.a=d},
dlc:function dlc(d){this.a=d},
dl8:function dl8(d){this.a=d},
dld:function dld(d){this.a=d},
dl7:function dl7(d,e){this.a=d
this.b=e},
afN:function afN(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bxv:function bxv(){var _=this
_.d=null
_.e=!1
_.c=_.a=null},
fiJ:function fiJ(d){this.a=d},
fiH:function fiH(d){this.a=d},
fiI:function fiI(d){this.a=d},
fiG:function fiG(d){this.a=d},
fiL:function fiL(d){this.a=d},
fiM:function fiM(d){this.a=d},
fiK:function fiK(d){this.a=d},
jS:function jS(d,e){this.a=d
this.b=e},
N4:function N4(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a7a:function a7a(d){this.a=d},
cbQ:function cbQ(d){this.a=d},
h4J(){var w=x.N
return new A.co_(C.aX(w),C.H(["n1",!1,"n2",!1],w,x.R),C.U(x.S,w))},
imf(d,e,f){var w,v
if(!f.c.t(0,e)){w=f.d
return e==="hot"?"The red (hot) hose goes on the LEFT side only. "+w:"The blue (cold) hose goes on the RIGHT side only. "+w}w=d.e
v=f.a
if(w.h(0,v)!=null)return"That connection already has a hose."
w.n(0,v,e)
return null},
fRD(){var w,v,u=C.a([B.aWP,B.h95],x.o)
for(w=1;w<=12;++w){v=3.141592653589793+3.141592653589793*w/12
u.push(new A.q(3+3*Math.cos(v),0.2+3*Math.sin(v),0))}D.d.v(u,A.Dj(B.db9,1,6))
return u},
bCS(d){var w,v,u,t,s="trap",r=C.a([],x.z),q=new A.fm(r)
q.b=49
q.mi(B.h1D,B.h3p,B.iz,0.1,2)
q.mi(B.hfX,B.h1H,B.iz,0.1,2)
q.b=47
q.hs(B.hat,B.h3q,B.vN,3)
q.hs(B.h2D,B.h1I,B.vN,3)
q.b=46
A.b7e(q,9,B.M8,14,15,B.j9,B.Mj,40,5.9,!0,2,1.8,15.1,0.6,0,-1.2)
q.dR(B.hbJ,B.h8I,1.5,B.j9,0.85,14)
q.b=48
q.a4x(B.ab5,B.h71,0.92,B.pZ,!1,!0,0.3,14)
q.cYH(B.ab5,B.hf9,1,0.72,B.pZ,0.3)
w=new A.fAL(d,q)
w.$5(41,B.a4o,B.j9,0.85,"tail")
w.$5(42,A.fRD(),B.pZ,0.3,s)
w.$5(43,B.a5m,B.pZ,0.3,"arm")
w=new A.fAK(d,q)
v=d.a
w.$6(44,"n1",B.ab0,B.ea,B.h7o,v.t(0,"tail")&&v.t(0,s))
w.$6(45,"n2",B.ab2,B.hI,B.hcO,v.t(0,s)&&v.t(0,"arm"))
if(v.t(0,s)){q.b=0
q.d=0.55
q.e=0.4
u=A.fRD()
w=C.T(u).k("Z<1>")
t=C.C(new C.Z(u,new A.fAJ(),w),w.k("M.E"))
if(t.length>1)q.aJF(t,0.4092,B.Za,!1,!0,0.6,8)
q.d=1
q.e=0}return new A.tU(r,C.H([41,B.ed4,42,B.ed6,43,B.edA,44,B.edo,45,B.edM,46,B.edc,47,B.edi,48,B.ecM,49,B.ed8],x.S,x.q),B.zu,B.wE,null,0)},
ika(d,e){var w,v,u,t,s,r,q,p=C.a([],x.z),o=new A.fm(p),n=d.d
if(n.length!==0){w=n==="n1"?B.hgn:B.hez
for(n=e*1.4,v=w.a+0,u=w.b,t=w.c+0,s=0;s<5;++s){r=D.k.F(n+s*0.2,1)
o.fO(new A.q(v,u+(-r*6*r-r*1.5),t),0.22*(1-r*0.3),B.YY,3,6,0.9)}}else if(d.c){n=x.Q
v=C.C(B.a4o,n)
u=A.fRD()
D.d.v(v,C.d_(u,1,null,C.T(u).c))
D.d.v(v,C.d_(B.a5m,1,null,n))
for(n=e*0.45,s=0;s<18;++s){r=D.k.F(n+s/18,1)
q=D.o.E(D.k.bf(r*(v.length-1)),0,v.length-2)
u=v.length
o.fO(A.o7(v[q],v[q+1],r*(u-1)-q),0.38,B.brS,3,6,0.9)}for(n=e*2.2,s=0;s<6;++s)o.fO(new A.q(0,14-D.k.F(n+s/6,1)*5.4,0),0.3,B.XW,3,6,0.9)}return p},
agW(d){switch(d){case 61:return B.h1C
case 62:return B.hev
case 63:return B.h9B
default:return B.h9r}},
h9D(d){var w=d==="hot",v=A.agW(w?61:62),u=A.agW(w?63:64),t=w?-1:1
return A.ai9(C.a([v,v.a7(0,new A.q(t*0.6,2.2,1.2)),A.o7(v,u,0.5).a7(0,new A.q(t*1.4,0,2.6)),u.a7(0,new A.q(-t*0.2,-2,1)),u],x.o),6)},
aPW(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=C.a([],x.z),e=new A.fm(f)
e.b=67
e.hs(B.h1z,B.h32,B.vN,3)
e.b=66
A.b7e(e,7,B.YZ,14,18,B.j9,B.Mj,36,7,!1,2,1.6,15.3,0.6,0,1.5)
e.mi(B.h4h,B.aWs,B.iz,0.1,2)
e.mi(B.h3l,B.aWs,B.iz,0.1,2)
e.mi(B.h8f,B.h3_,B.iz,0.1,3)
e.mi(B.hcz,B.hcb,B.iz,0.1,2)
e.mi(B.hbK,B.hbZ,B.iz,0.1,2)
e.b=65
e.e=0.5
e.aV(B.hex,B.h8m,B.j9,0.9)
e.j8(A.Dj(B.dgS,1.4,6),0.5,B.j9,!0,0.9,12)
for(w=0;w<2;++w){v=B.dbW[w]
u=v*1.2
e.dR(new A.q(u,15.5,-3.6),new A.q(u,17.7,-3.6),0.38,B.j9,0.9,10)
t=v<0?B.tO:B.o1
e.dR(new A.q(u,17.7,-3.6),new A.q(u,18.6,-3.6),0.6,t,0.6,12)}e.e=0
for(u=[B.eBI,B.ewQ],w=0;w<2;++w){t=u[w]
v=t.b
e.b=t.a
e.dR(new A.q(v,15.3,-3.6),new A.q(v,11.4,-3.6),0.45,B.j9,0.9,10)
e.dR(new A.q(v,11.4,-3.6),new A.q(v,10.7,-3.6),0.3,B.bnl,0.6,8)
e.zs(new A.q(v,11.3,-3.6),new A.q(v,11.9,-3.6),0.78,0.48,B.bpy,0.7,8)}for(u=[B.eVd,B.eXf],w=0;w<2;++w){t=u[w]
v=t.b
e.b=t.a
e.dR(new A.q(v,-1.5,-6),new A.q(v,-1.5,-3.6),0.4,B.LQ,0.7,12)
e.dR(new A.q(v,-1.5,-4.4),new A.q(v,0.7,-4.4),1,B.j9,0.9,14)
e.dR(new A.q(v,0.7,-4.4),new A.q(v,1.5,-3.6),0.45,B.j9,0.9,10)
e.dR(new A.q(v,-0.2,-4.4),new A.q(v,-0.2,-3.1),0.2,B.aeS,0.7,8)
e.dR(new A.q(v,-0.2,-3.1),new A.q(v,-0.2,-2.4000000000000004),1.45,t.c,0.5,14)
e.zs(new A.q(v,1.2,-3.6),new A.q(v,1.9,-3.6),0.78,0.4,B.xL,0.8,8)}for(u=x.o,w=0;w<2;++w){s=B.djx[w]
t=s==="hot"
r=t?B.cI5:B.cIi
q=C.T(r).k("Z<1>")
p=C.C(new C.Z(r,new A.fzQ(d,s),q),q.k("M.E"))
e.b=t?68:69
o=t?B.tO:B.o1
t=p.length
if(t===2){n=A.h9D(s)
e.j8(n,0.34,B.Mz,!1,0.7,8)
m=n.length/2|0
e.j8(C.a([n[m-1],n[m],n[m+1]],u),0.4,o,!1,0.4,8)
for(t=r.length,l=0;l<t;++l){k=A.agW(r[l])
q=k.a+0
j=k.b
i=k.c+0
e.zs(new A.q(q,j+-0.2,i),new A.q(q,j+0.6,i),0.62,0.3,B.xL,0.8,8)}}else if(t===1){k=A.agW(D.d.gI(p))
h=D.d.gI(p)===D.d.gI(r)?1:-1
t=k.a+0
q=k.b
j=k.c
e.j8(C.a([k,new A.q(t,q+h*1.4,j+1),new A.q(t,q+h*3,j+2.4)],u),0.34,B.Mz,!1,0.7,8)
j+=0
e.zs(new A.q(t,q+-0.2,j),new A.q(t,q+0.6,j),0.62,0.3,B.xL,0.8,8)}}if(d.r){e.b=0
e.d=0.5
for(u=d.e,w=0;w<4;++w){g=B.a5g[w]
t=g.a
if(u.h(0,t)!=null)continue
t=A.agW(t)
q=g.c.t(0,"hot")?B.tO:B.o1
e.fO(new A.q(t.a+0,t.b+0,t.c+0.9),0.65,q,4,8,0.1)}e.d=1}return new A.tU(f,C.H([61,B.ecW,62,B.ecY,63,B.ecQ,64,B.ecZ,65,B.edj,66,B.edf,67,B.ecN,68,B.edQ,69,B.edm],x.S,x.q),B.zu,B.wE,null,0)},
iaU(d,e){var w,v,u,t,s,r,q,p,o,n=C.a([],x.z),m=new A.fm(n)
if(!d.f)return n
w=d.e
v=w.h(0,61)==="hot"&&w.h(0,63)==="hot"
u=w.h(0,62)==="cold"&&w.h(0,64)==="cold"
t=new A.fCr(e,m)
if(v){s=A.h9D("hot")
for(r=e*0.5,q=0;q<10;++q){p=D.k.F(r+q/10,1)
o=D.o.E(D.k.bf(p*(s.length-1)),0,s.length-2)
m.fO(A.o7(s[o],s[o+1],p*(s.length-1)-o),0.2,D.LZ,3,6,0.9)}}else if(w.h(0,61)==null)t.$2(61,D.LZ)
if(u){s=A.h9D("cold")
for(w=e*0.5,q=0;q<10;++q){p=D.k.F(w+q/10,1)
o=D.o.E(D.k.bf(p*(s.length-1)),0,s.length-2)
m.fO(A.o7(s[o],s[o+1],p*(s.length-1)-o),0.2,B.Ys,3,6,0.9)}}else if(w.h(0,62)==null)t.$2(62,B.Ys)
if(v&&u)for(w=e*2,q=0;q<8;++q){p=D.k.F(w+q/8,1)
r=C.ar(B.brY,B.Ys,0.5)
r.toString
m.fO(new A.q(0,21-p*6.5,1.6),0.26,r,3,6,0.9)}return n},
fCp(d){return D.d.d0(B.a5g,new A.fCq(d))},
co_:function co_(d,e,f){var _=this
_.a=d
_.b=e
_.c=!1
_.d=""
_.e=f
_.r=_.f=!1},
Ff:function Ff(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fAL:function fAL(d,e){this.a=d
this.b=e},
fAK:function fAK(d,e){this.a=d
this.b=e},
fAJ:function fAJ(){},
fzQ:function fzQ(d,e){this.a=d
this.b=e},
fCr:function fCr(d,e){this.a=d
this.b=e},
fCq:function fCq(d){this.a=d},
h4I(d,e,f){var w=x.N
w=new A.cnQ(e,d,C.aX(w),C.U(w,x.S),C.aX(w))
w.bA5(d,e,f)
return w},
huO(c0,c1,c2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5=C.a([],x.z),b6=new A.fm(b5),b7=C.U(x.S,x.q),b8=C.a([],x.E),b9=c0.c
b9===$&&C.c()
w=b9.a==="bathroom"
v=w?28:0
b6.b=9199
b6.hs(B.hdI,B.hfR,B.bg8,4)
b6.hs(B.hbl,B.hes,B.XV,4)
b6.hs(new A.q(v+19.8+0.6,24,16),B.h8H,B.vN,2)
b7.n(0,9199,B.ed7)
b6.b=9198
b6.aV(new A.q(v,0.6,10),B.heO,B.iz,0.1)
b6.aV(new A.q(v,29.4,18.6),B.h8k,B.iz,0.1)
b6.aV(new A.q(v-19.4,13.6,10.5),B.hfC,B.iz,0.1)
for(u=[B.f_o,B.f_k,B.eZh,B.eZe],t=0;t<4;++t){s=u[t].a
b6.aV(new A.q(v+s[0],33,s[1]),new A.q(s[2],2.4,s[3]),B.bsW,0.6)}b6.a4x(new A.q(v,27,8),new A.q(v,34.3,8),10.5,B.YZ,!1,!0,0.7,24)
b6.dR(new A.q(v,27,8),new A.q(v,27.2,8),10.5,B.bjc,0.5,24)
if(w){b6.aV(new A.q(v,46,0.6),B.h8t,D.bO,0.3)
b6.aV(new A.q(v,46,1.1),B.h7s,B.i1,0.9)}b6.dE(new A.q(v,27.1,8),new A.q(v,27.3,8),1.4,B.hd,12)
b6.a4x(new A.q(v+15,23.6,8),new A.q(v+19.4,23.6,8),0.92,B.pZ,!1,!0,0.3,12)
b7.n(0,9198,B.edx)
b6.b=9400
b6.dR(new A.q(-56,18,0),new A.q(-56,18,6),1.5,B.xL,0.8,12)
u=c0.r?B.o1:D.bm
b6.dR(new A.q(-57,18,6),new A.q(-55,18,6.5),4,u,0.5,14)
b6.dR(new A.q(-56,16,0),new A.q(-56,20,0),1,B.LQ,0.7,10)
u=c0.r?"The water is ON. Turn it OFF with your hand before you cut into any pipe, and turn it ON to test your work.":"The water is OFF. Turn it ON to test your work."
b7.n(0,9400,new A.cV("Main water valve",u,new A.q(-56,18,4),22))
u=c0.r
s=u?"MAIN WATER: ON":"MAIN WATER: OFF"
u=u?D.dF:D.bm
b8.push(new A.hh(new A.q(-56,24,6),s,u,0))
r=new A.fAI(b6)
u=v-8
r.$1(u)
s=v+8
r.$1(s)
if(w)r.$1(-40)
q=new A.q(v,21,8)
p=new A.fAG(q)
o=new A.fAA(b6,c0)
n=new A.fAB(b6,c0)
m=new A.fAH(c0,b7,c2,c1,b8)
l=b9.c
for(k=l.length,j=c0.x,i=c0.e,h=c0.f,g=x.o,t=0;t<k;++t){f=l[t]
e=f.a
d=i.t(0,e)
if(d){a0=c0.vo(0,e)
a1=h.h(0,e)
if(a1==null)a1=0
a2=a0.r-a1>0}else a2=!1
a3=D.d.cu(l,f)
a4=9100+a3
j.t(0,e)
switch(e){case"flange":a5=new A.q(-30,0.3,14)
if(d){b6.b=a4
b6.dR(a5,new A.q(-30,0.8999999999999999,14),5.5,B.pZ,0.4,18)
b6.zs(new A.q(-30,0.8,14),new A.q(-30,1.2,14),5.5,3.2,B.xL,0.8,18)}else n.$3(e,new A.q(-30,0.8,14),B.h0D)
m.$3(f,a5,"Flange spot")
break
case"wax":a5=new A.q(-30,1.2,14)
if(d){b6.b=a4
b6.zs(a5,new A.q(-30,2.3,14),4.2,2.4,B.bsZ,0.2,18)}else n.$3(e,new A.q(-30,1.7,14),B.hbw)
m.$3(f,a5,"Wax ring spot")
break
case"toilet":if(d){b6.b=a4
b6.BF(new A.q(-30,0.5,14),new A.q(-30,16,14),8.5,B.Bf,6,0.8,20)
b6.dR(new A.q(-30,16,14),new A.q(-30,17,14),9.5,B.MG,0.8,20)
b6.aV(new A.q(-30,22,4.5),B.aWw,B.Bf,0.8)
b6.aV(new A.q(-30,29.2,4.5),B.h6x,B.MG,0.8)}else{b6.b=a4
b6.d=0.32
b6.dE(new A.q(-30,0.5,14),new A.q(-30,17,14),8.5,D.b_,16)
b6.aJ(new A.q(-30,22,4.5),B.aWw,D.b_)
b6.d=1}m.$3(f,new A.q(-30,12,12),"Toilet spot")
break
case"bolts":if(d){for(e=9200+a3*2,a6=0;a6<2;++a6){a7=B.aAV[a6]
b6.b=e+(a7<0?0:1)
a0=-30+a7
b6.dR(new A.q(a0,0.5,17),new A.q(a0,3.6,17),0.45,B.M8,0.8,8)
a1=a2?D.cL:B.M8
b6.dR(new A.q(a0,3.4,17),new A.q(a0,4.6,17),1.2,a1,0.8,6)}e=a2?"The nuts are loose. Tighten them with the wrench, a little at a time so the porcelain does not crack.":"The toilet is bolted down."
b7.n(0,a4,new A.cV(f.c,e,new A.q(-30,3,17),20))}else for(a6=0;a6<2;++a6){a7=B.aAV[a6]
b6.b=a4
b6.d=0.4
e=-30+a7
b6.dE(new A.q(e,0.5,17),new A.q(e,4.6,17),1.2,D.b_,8)
b6.d=1}m.$3(f,new A.q(-30,3,17),"Bolts")
break
case"tvalve":A.h92(b6,a4,new A.q(-40,8,1.6),d,B.o1,new A.fAw(n,f,-30))
m.$3(f,new A.q(-40,8,2),"Valve")
break
case"those":if(d){b6.b=a4
b6.j8(A.ai9(C.a([new A.q(-40,10,1.6),new A.q(-42,14,3.5),new A.q(-36,17,3.6),new A.q(-32,21,2.5)],g),6),0.55,B.Mz,!1,0.7,8)
b6.j8(C.a([new A.q(-36.8,15.5,3.6),new A.q(-35,16.4,3.6)],g),0.62,B.o1,!1,0.4,8)
if(a2)b6.dE(new A.q(-40,10,1.6),new A.q(-40,11.2,1.6),0.9,D.cL,8)}else o.$3$r(e,A.ai9(C.a([new A.q(-40,10,1.6),new A.q(-42,14,3.5),new A.q(-36,17,3.6),new A.q(-32,21,2.5)],g),6),0.9)
m.$3(f,new A.q(-36,15,3),"Toilet hose")
break
case"faucet":if(d){b6.b=a4
b6.dR(new A.q(v,34.2,8),new A.q(v,34.6,8),3.6,B.j9,0.9,20)
b6.j8(A.Dj(C.a([new A.q(v,34.6,8),new A.q(v,40,8),new A.q(v,43,10),new A.q(v,43,14),new A.q(v,41.2,14.6)],g),1.4,6),0.5,B.j9,!0,0.9,10)
for(a6=0;a6<2;++a6){a7=E.a57[a6]
e=v+a7
b6.dR(new A.q(e,34.6,8),new A.q(e,36.6,8),0.5,B.j9,0.9,8)
a0=a7<0?B.tO:B.o1
b6.dR(new A.q(e,36.6,8),new A.q(e,37.6,8),0.8,a0,0.6,10)}for(a6=0;a6<2;++a6){e=v+B.dmH[a6]
b6.dR(new A.q(e,34,8),new A.q(e,28.4,8),0.45,B.j9,0.9,8)}}else n.$3(e,new A.q(v,38,9),B.h0t)
m.$3(f,new A.q(v,38,8),"Faucet spot")
break
case"vhot":A.h92(b6,a4,new A.q(u,8,1.6),d,B.tO,new A.fAx(n,f,v))
m.$3(f,new A.q(u,8,2),"Hot valve")
break
case"vcold":A.h92(b6,a4,new A.q(s,8,1.6),d,B.o1,new A.fAy(n,f,v))
m.$3(f,new A.q(s,8,2),"Cold valve")
break
case"hhot":case"hcold":a8=e==="hhot"
a9=a8?-1:1
a0=v+a9*3
b0=A.ai9(C.a([new A.q(v+a9*8,10.5,1.8),new A.q(v+a9*9,16,3.5),new A.q(v+a9*6,22,4.2),new A.q(a0,27.5,6),new A.q(a0,28.6,8)],g),6)
if(d){b6.b=a4
b6.j8(b0,0.5,B.Mz,!1,0.7,8)
b1=b0.length/2|0
e=C.a([b0[b1-1],b0[b1],b0[b1+1]],g)
b6.j8(e,0.58,a8?B.tO:B.o1,!1,0.4,8)
if(a2){e=D.d.gI(b0)
a0=D.d.gI(b0)
b6.dE(e,new A.q(a0.a+0,a0.b+1.4,a0.c+0),0.9,D.cL,8)
a0=D.d.gak(b0)
b6.dE(new A.q(a0.a,a0.b-1.4,a0.c),D.d.gak(b0),0.9,D.cL,8)}}else o.$3$r(e,b0,0.9)
e=b0[b0.length/2|0]
m.$3(f,e,a8?"Hot hose":"Cold hose")
break
case"tail":case"trap":case"arm":a0=e==="tail"
if(a0)a1=B.a4o
else a1=e==="trap"?A.fRD():B.a5m
b2=p.$1(a1)
if(d){b6.b=a4
a1=a0?B.j9:B.pZ
b6.apf(b2,0.66,a1,!1,!0,!0,a0?0.85:0.3,12)}else o.$3$r(e,b2,0.78)
a1=J.a6(b2)
a1=a1.h(b2,a1.gL(b2)/2|0)
if(a0)e="Tailpiece"
else e=e==="trap"?"P-trap":"Trap arm"
m.$3(f,a1,e)
break}}b3=new A.fAE(l,c0,b6,b7)
b3.$4("trap",q.a7(0,B.ab0),B.ea,0)
b3.$4("arm",q.a7(0,B.ab2),B.hI,1)
for(u=C.en(j,j.r,C.a7(j).c),s=u.$ti.c;u.C();){k=u.d
if(k==null)k=s.a(k)
b4=D.d.fY(b9.c,new A.fAz(k))
k=A.hyY(c0,k)
b8.push(new A.hh(new A.q(k.a+0,k.b+6,k.c+4),"\ud83d\udca7 LEAK: "+b4.c,D.bz,0))}return new A.tU(b5,b7,b8,B.wE,null,0)},
h92(d,e,f,g,h,i){if(!g){i.$0()
return}d.b=e
d.dR(f.a7(0,B.hby),f.a7(0,B.aXz),0.9,B.xL,0.8,12)
d.dR(f.a7(0,B.aXz),f.a7(0,B.h8b),0.45,B.xL,0.8,10)
d.dR(f.a7(0,B.heK),f.a7(0,B.aXS),0.3,B.aeS,0.7,8)
d.dR(f.a7(0,B.aXS),f.a7(0,B.hff),1.2,h,0.5,12)},
hyY(d,e){var w,v=d.c
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
ik2(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=C.a([],x.z),f=new A.fm(g),e=d.x
if(e.a===0)return g
for(e=C.en(e,e.r,C.a7(e).c),w=a0*2,v=e.$ti.c,u=d.e;e.C();){t=e.d
if(t==null)t=v.a(t)
s=A.hyY(d,t)
r=d.c
r===$&&C.c()
q=D.d.fY(r.c,new A.fRs(t)).b==="valve"||!u.t(0,t)
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
f.fO(new A.q(t+m*l*n,r+(l*k-l*l*j),p+(1.5+l*i)),h,B.Za,3,6,0.5);++o}f.d=0.55
f.dR(new A.q(t,0.3,11),new A.q(t,0.5,11),7+2*Math.sin(w),B.Za,0.6,18)
f.d=1}return g},
nw:function nw(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
Xg:function Xg(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cnQ:function cnQ(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.d=_.c=$
_.e=f
_.f=g
_.r=!0
_.w=0
_.x=h
_.y=!1},
cnU:function cnU(d){this.a=d},
cnV:function cnV(d){this.a=d},
cnR:function cnR(d){this.a=d},
cnW:function cnW(d){this.a=d},
cnX:function cnX(d){this.a=d},
cnY:function cnY(){},
cnZ:function cnZ(){},
cnS:function cnS(d){this.a=d},
cnT:function cnT(d){this.a=d},
fAI:function fAI(d){this.a=d},
fAG:function fAG(d){this.a=d},
fAA:function fAA(d,e){this.a=d
this.b=e},
fAD:function fAD(d){this.a=d},
fAB:function fAB(d,e){this.a=d
this.b=e},
fAC:function fAC(d){this.a=d},
fAH:function fAH(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fAw:function fAw(d,e,f){this.a=d
this.b=e
this.c=f},
fAx:function fAx(d,e,f){this.a=d
this.b=e
this.c=f},
fAy:function fAy(d,e,f){this.a=d
this.b=e
this.c=f},
fAE:function fAE(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fAF:function fAF(d){this.a=d},
fAz:function fAz(d){this.a=d},
fRs:function fRs(d){this.a=d},
Wf:function Wf(d,e,f){this.c=d
this.e=e
this.a=f},
aFe:function aFe(d,e){var _=this
_.e=_.d=$
_.f=d
_.r=$
_.w=e
_.x=""
_.y=0
_.z=null
_.as=_.Q=!1
_.c=_.a=_.at=null},
er2:function er2(d,e,f){this.a=d
this.b=e
this.c=f},
er3:function er3(d){this.a=d},
er1:function er1(d){this.a=d},
eqY:function eqY(d){this.a=d},
er7:function er7(d){this.a=d},
eqN:function eqN(d,e){this.a=d
this.b=e},
eqO:function eqO(d,e){this.a=d
this.b=e},
eqP:function eqP(d){this.a=d},
eqU:function eqU(d,e){this.a=d
this.b=e},
eqS:function eqS(d){this.a=d},
eqT:function eqT(d,e){this.a=d
this.b=e},
er0:function er0(d){this.a=d},
er8:function er8(d){this.a=d},
eqV:function eqV(d){this.a=d},
eqW:function eqW(){},
eqX:function eqX(d){this.a=d},
er4:function er4(d,e){this.a=d
this.b=e},
er5:function er5(d){this.a=d},
er6:function er6(d,e){this.a=d
this.b=e},
eqR:function eqR(d,e,f){this.a=d
this.b=e
this.c=f},
eqQ:function eqQ(d,e,f){this.a=d
this.b=e
this.c=f},
er9:function er9(d){this.a=d},
erd:function erd(d,e){this.a=d
this.b=e},
erb:function erb(){},
era:function era(d){this.a=d},
erc:function erc(d,e){this.a=d
this.b=e},
er_:function er_(d){this.a=d},
eqZ:function eqZ(d,e){this.a=d
this.b=e},
j5(d){return D.d.fY(B.uJ,new A.fZP(d))},
csM(d,e,f,g,h){var w=x.S,v=x.N
v=new A.XK(g,f,C.U(w,v),C.aX(w),C.aX(w),C.U(w,x.cH),C.a([new A.XW(),new A.XW()],x.gD),C.U(w,x.cD),C.aX(w),C.U(w,v),C.aX(w),C.a([],x.s),C.U(w,v))
v.clP(d,e,h)
return v},
csN(d){var w
A:{if("tv"===d){w="The TV"
break A}if("lamp"===d){w="The lamp"
break A}if("toaster"===d){w="The toaster"
break A}w="The hair dryer"
break A}return w},
h59(d,e){var w=!0
if(d!==e)if(!(D.d.t(B.lh,d)&&D.d.t(B.lh,e)))if(!(D.d.t(B.jE,d)&&D.d.t(B.jE,e)))if(d==="light"||d==="fan")w=e==="light"||e==="fan"
else w=!1
return w},
z7:function z7(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fZP:function fZP(d){this.a=d},
l9:function l9(d,e,f){this.a=d
this.b=e
this.c=f},
XW:function XW(){var _=this
_.a=!1
_.b=0
_.c=!0
_.d=!1},
aw4:function aw4(d,e){var _=this
_.a=!1
_.b=d
_.c=e
_.e=_.d=!1},
aUU:function aUU(d,e){this.a=d
this.b=e
this.c=!1},
ey:function ey(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
XK:function XK(d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
csR:function csR(){},
csY:function csY(d){this.a=d},
csZ:function csZ(d){this.a=d},
ct_:function ct_(d,e){this.a=d
this.b=e},
ct0:function ct0(d,e){this.a=d
this.b=e},
ct2:function ct2(d){this.a=d},
ct1:function ct1(d,e){this.a=d
this.b=e},
csQ:function csQ(d){this.a=d},
csO:function csO(){},
csP:function csP(d){this.a=d},
csW:function csW(){},
csX:function csX(){},
csS:function csS(){},
csT:function csT(d){this.a=d},
csU:function csU(d){this.a=d},
ct3:function ct3(d){this.a=d},
csV:function csV(d){this.a=d},
cin(d,e,f,g){return new A.Ok(d,!1,f,g,null)},
i8:function i8(d,e,f){this.a=d
this.b=e
this.c=f},
Ok:function Ok(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.a=h},
aFl:function aFl(d,e,f){var _=this
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
evD:function evD(d,e,f){this.a=d
this.b=e
this.c=f},
evE:function evE(d){this.a=d},
evC:function evC(d){this.a=d},
euJ:function euJ(d){this.a=d},
euK:function euK(d){this.a=d},
euI:function euI(d){this.a=d},
euL:function euL(d){this.a=d},
euM:function euM(d){this.a=d},
euH:function euH(d){this.a=d},
euN:function euN(d){this.a=d},
euO:function euO(d){this.a=d},
euY:function euY(d){this.a=d},
ev_:function ev_(d){this.a=d},
euP:function euP(){},
euQ:function euQ(d){this.a=d},
euR:function euR(d){this.a=d},
evg:function evg(d,e){this.a=d
this.b=e},
euZ:function euZ(d){this.a=d},
evz:function evz(d){this.a=d},
evA:function evA(d){this.a=d},
evB:function evB(d,e){this.a=d
this.b=e},
evw:function evw(d){this.a=d},
evx:function evx(d,e){this.a=d
this.b=e},
evy:function evy(d,e){this.a=d
this.b=e},
evv:function evv(d){this.a=d},
evn:function evn(d){this.a=d},
evo:function evo(d){this.a=d},
evp:function evp(d){this.a=d},
evq:function evq(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
evr:function evr(d){this.a=d},
evs:function evs(d,e,f){this.a=d
this.b=e
this.c=f},
evt:function evt(d){this.a=d},
evu:function evu(d,e,f){this.a=d
this.b=e
this.c=f},
evH:function evH(d,e){this.a=d
this.b=e},
euX:function euX(d){this.a=d},
euV:function euV(d){this.a=d},
euW:function euW(d,e){this.a=d
this.b=e},
euU:function euU(d,e){this.a=d
this.b=e},
euS:function euS(d){this.a=d},
euT:function euT(d,e){this.a=d
this.b=e},
ev0:function ev0(d,e){this.a=d
this.b=e},
evI:function evI(d){this.a=d},
evK:function evK(d){this.a=d},
evL:function evL(d){this.a=d},
evM:function evM(d){this.a=d},
evN:function evN(d){this.a=d},
evO:function evO(d){this.a=d},
evP:function evP(d,e){this.a=d
this.b=e},
evQ:function evQ(d){this.a=d},
evR:function evR(d,e){this.a=d
this.b=e},
evJ:function evJ(d,e){this.a=d
this.b=e},
evF:function evF(d){this.a=d},
evG:function evG(d,e){this.a=d
this.b=e},
eve:function eve(){},
evf:function evf(){},
ev1:function ev1(d){this.a=d},
ev2:function ev2(d){this.a=d},
ev3:function ev3(d){this.a=d},
ev6:function ev6(){},
ev7:function ev7(){},
ev8:function ev8(){},
ev9:function ev9(){},
eva:function eva(){},
evb:function evb(d){this.a=d},
evc:function evc(){},
evd:function evd(d){this.a=d},
ev4:function ev4(d){this.a=d},
ev5:function ev5(){},
ewg:function ewg(d,e){this.a=d
this.b=e},
ewh:function ewh(d){this.a=d},
ew_:function ew_(d){this.a=d},
ewf:function ewf(d){this.a=d},
ew2:function ew2(d){this.a=d},
ew3:function ew3(d,e){this.a=d
this.b=e},
ew1:function ew1(d,e){this.a=d
this.b=e},
ew4:function ew4(d,e){this.a=d
this.b=e},
ew0:function ew0(d,e){this.a=d
this.b=e},
ewi:function ewi(d,e){this.a=d
this.b=e},
evZ:function evZ(d,e){this.a=d
this.b=e},
ewj:function ewj(d){this.a=d},
evY:function evY(d){this.a=d},
ewk:function ewk(d){this.a=d},
evX:function evX(d){this.a=d},
ewl:function ewl(d){this.a=d},
evW:function evW(d){this.a=d},
ewm:function ewm(d,e){this.a=d
this.b=e},
evT:function evT(d,e){this.a=d
this.b=e},
evU:function evU(d){this.a=d},
evV:function evV(d,e){this.a=d
this.b=e},
ewn:function ewn(d){this.a=d},
ew5:function ew5(d){this.a=d},
ew6:function ew6(d,e,f){this.a=d
this.b=e
this.c=f},
evS:function evS(d,e,f){this.a=d
this.b=e
this.c=f},
ew7:function ew7(d){this.a=d},
ew8:function ew8(d,e){this.a=d
this.b=e},
ew9:function ew9(d){this.a=d},
ewa:function ewa(d){this.a=d},
ewb:function ewb(d){this.a=d},
ewc:function ewc(d){this.a=d},
ewd:function ewd(d){this.a=d},
ewe:function ewe(d,e){this.a=d
this.b=e},
evm:function evm(d,e){this.a=d
this.b=e},
evl:function evl(d,e){this.a=d
this.b=e},
evh:function evh(d){this.a=d},
evi:function evi(d,e,f){this.a=d
this.b=e
this.c=f},
evj:function evj(d,e){this.a=d
this.b=e},
evk:function evk(d,e){this.a=d
this.b=e},
ai8(d,e){var w=d.d,v=e.a,u=e.c,t=e.b,s=w.a,r=w.b
w=w.c
return d.c?new A.q(s+v,r-u,w+t):new A.q(s+v,r+t,w+u)},
h8i(d,e,f,g){var w,v,u,t,s,r=d.a,q=e.d,p=e.c?A.nE(r,1.5707963267948966,0,q):A.nE(r,0,0,q)
r=C.a([],x.z)
for(q=p.length,w=0;w<p.length;p.length===q||(0,C.L)(p),++w){v=p[w]
u=v.d
u=u===0?0:f.$1(u)
t=v.f
s=t<0.99?3:2
r.push(new A.kp(v.a,v.b,v.c,u,v.e,t,v.r,v.w,v.x,s,g))}q=C.U(x.S,x.q)
for(u=d.b,u=u.gdV(u),u=u.gag(u);u.C();){t=u.gS(u)
s=f.$1(t.a)
t=t.b
q.n(0,s,new A.cV(t.a,t.b,A.ai8(e,t.c),t.d))}return new C.z(r,q)},
i4A(a3,a4,a5,a6,a7,a8,a9,b0,b1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=x.i,a2=C.eE([a4,a5],a1)
for(w=b1.length,v=0;v<b1.length;b1.length===w||(0,C.L)(b1),++v){u=b1[v].a
a2.M(0,D.k.E(u[0],a4,a5))
a2.M(0,D.k.E(u[1],a4,a5))}t=C.C(a2,a2.$ti.k("cs.E"))
D.d.ff(t)
for(w=C.T(b1).k("Z<1>"),u=w.k("M.E"),s=0;r=s+1,r<t.length;s=r){q=t[s]
p=t[r]
o=p-q
if(o<0.01)continue
n=(q+p)/2
m=C.C(new C.Z(b1,new A.ft2(n),w),u)
l=C.eE([a6,a7],a1)
for(k=m.length,v=0;v<m.length;m.length===k||(0,C.L)(m),++v){j=m[v].a
l.M(0,D.k.E(j[2],a6,a7))
l.M(0,D.k.E(j[3],a6,a7))}i=C.C(l,l.$ti.k("cs.E"))
D.d.ff(i)
for(k=!(o>30),h=0;g=h+1,g<i.length;h=g){f=i[h]
e=i[g]
j=e-f
if(j<0.01)continue
d=(f+e)/2
if(D.d.b3(m,new A.ft3(d)))continue
a0=!k||j>60?2:1
a3.hs(new A.q(n,d,a8),new A.q(o,j,a9),b0,a0)}}},
wV(d1,d2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1=null,c2=x.z,c3=C.a([],c2),c4=new A.fm(c3),c5=C.a([],x.a),c6=x.E,c7=C.a([],c6),c8=x.S,c9=C.U(c8,x.q),d0=$.dS=$.dS+1
c4.f=-1
c4.b=8001
c4.mi(B.h5F,B.h98,B.By,0.15,4)
c4.f=0
c4.hs(B.h5a,B.aX2,B.aeO,3)
c4.aV(B.he_,B.hfp,B.i1,0.5)
c4.aJ(B.aX8,B.h4T,B.Bk)
c4.aJ(B.aX8,B.hfF,B.Bk)
c4.hs(B.h9d,B.aX2,B.aeO,3)
c4.aV(B.h51,B.h9e,B.vI,0.15)
c4.aV(B.h9Y,B.h9m,B.F8,0.8)
c4.b=0
c4.f=3
c4.d=d1.gt5()?0.42:0.1
c4.hs(B.h3d,B.hbr,d1.gt5()?B.kF:B.bc6,3)
c4.d=1
c4.f=2
c4.b=8001
if(!d1.gt5())for(w=0;w<10;++w)c4.aE0(new A.q(-72+w*16,51.3,55),B.hc2,B.iz,!1,0.05)
else{c4.x=d0
c4.aV(B.haq,B.h7D,D.c,0.2)
c4.aV(B.hgA,B.aXl,D.c,0.2)
c4.aV(B.h6C,B.aXl,D.c,0.2)}if(d1.gt5()){c4.x=d0
c4.aV(B.h6M,B.h7J,B.kF,0.2)}c4.x=0
c4.b=8001
c4.r=!0
c4.hs(B.hfb,B.hfY,B.agz,2)
c4.aV(B.he9,B.h4B,B.Yo,0.1)
c4.aV(B.he8,B.h4C,B.M2,0.1)
c4.aV(B.hdH,B.aWU,B.M2,0.1)
c4.aV(B.h2r,B.aWU,B.M2,0.1)
c4.r=!1
c9.n(0,8001,B.ecP)
c4.x=d0
c4.b=8002
c4.mi(B.hgi,B.aWY,B.iz,0.05,3)
c4.mi(B.h3G,B.aWY,B.iz,0.05,3)
c9.n(0,8002,B.edh)
for(v=d1.y,w=0;u=$.Hf(),w<u.length;++w){t=1000+w
c4.b=t
c4.cIF(new A.q(u[w],0,-2.25),B.hbI,B.iz,!1,0.05,2)
s=v.t(0,w)?"This one has a hole for the cable.":"Tap it with the drill to put a hole through it."
c9.n(0,t,new A.cV("Wall stud","A 2x4 stud, one of the vertical posts in the wall. They stand 16 inches apart. "+s,new A.q(u[w],20,-2),60))
if(v.t(0,w)){c4.b=0
c4.e=0.6
c4.aJ(new A.q(u[w],40,-2.25),B.h58,B.ahK)
c4.e=0}}c4.b=8000
c4.aV(B.h2B,B.h0V,B.XF,0.5)
c4.e=0.4
c4.aJ(B.h8V,B.heM,B.xP)
for(r=0;r<6;++r)for(v=19.5-r*3.6,q=0;q<2;++q)c4.aV(new A.q(61.6+q*4.8,v,0.5),B.fYY,B.Zc,0.3)
p=d1.ax&&!d1.ay
v=p?0.6:0
if(d1.ay)u=D.cd
else u=p?D.bz:D.hj
c4.aV(new A.q(64,-2.5+v,0.9),B.h7y,u,0.4)
c4.e=0
if(d1.ay)v="The main breaker has TRIPPED (orange). Tap it to flip it fully OFF, fix the problem, then turn it ON."
else v=d1.ax?"The power is ON. Tap to turn it OFF. Always turn it OFF before you touch any wire.":"The power is OFF. Tap to turn it ON."
c9.n(0,8000,new A.cV("Breaker panel",v,B.h4G,60))
c4.b=8003
for(v=d1.z,u=C.en(v,v.r,C.a7(v).c),t=x.o,s=u.$ti.c;u.C();){o=u.d
n=A.j5(o==null?s.a(o):o)
o=n.d
m=o.a-0.35
l=C.a([B.hcT,B.ham,new A.q(m,40,-3.2)],t)
if(n.c)D.d.v(l,C.a([new A.q(m,51.4,-3.2),new A.q(m,51.4,o.c+11)],t))
else l.push(new A.q(m,o.b+11,-3.4))
c4.j8(A.Dj(l,3,6),0.2,B.Yv,!1,0.35,6)}c9.n(0,8003,B.edF)
for(u=x.eV,s=d1.Q,k=0;k<3;++k){j=B.oy[k]
i=s.h(0,j)
if(i==null||!i.a)continue
if(i.e)h=B.bqj
else h=i.d?B.brP:B.bra
o=C.a([],u)
for(m=i.b,l=C.a7(m),g=new C.mr(m,m.r,l.k("mr<1>")),g.c=m.e,l=l.c;g.C();){m=g.d
if(m==null)m=l.a(m)
o.push(new C.cy([A.j5(m).d.a-1.15,A.j5(m).d.a+1.15,A.j5(m).d.b-2,A.j5(m).d.b+2]))}m=6100+k
c4.b=m
A.i4A(c4,j,j+48,-47,47,-0.25,0.5,h,o)
o=i.e?"Painted and finished.":"A 4 by 8 foot sheet of drywall (gypsum between two layers of paper). It is screwed to the studs."
c9.n(0,m,new A.cV("Drywall sheet",o,new A.q(j+24,0,0),90))
c4.b=0
c4.e=0.3
for(o=i.c,m=C.a7(o),l=new C.mr(o,o.r,m.k("mr<1>")),l.c=o.e,m=m.c;l.C();){o=l.d
if(o==null)o=m.a(o)
f=D.o.ao(o,10)
e=D.o.F(o,10)
c4.fO(new A.q($.Hf()[f],-40+e*16,0.1),0.34,B.xP,3,5,0.3)}c4.e=0}for(u=d2.a,o=u!=="tape",m=d1.as,l=u!=="mud",g=u==="sand",w=0;w<2;w=a1){d=-24+48*w
a0=s.h(0,B.oy[w])
a0=a0==null?c1:a0.a
a1=w+1
a2=s.h(0,B.oy[a1])
a2=a2==null?c1:a2.a
if(a0!==!0||a2!==!0)continue
a3=m[w]
a0=6200+w
c4.b=a0
if(a3.a&&!a3.d){a2=a3.b
if(a2===0)h=B.bqm
else h=a3.c?B.bmc:B.bh9
c4.e=0.5
c4.aJ(new A.q(d,0,0.08+0.02*a2),new A.q(2.2+a2*1.4,94,0.12),h)
c4.e=0}else if(!o||!l||g){c4.d=0.45
c4.e=0.6
c4.aJ(new A.q(d,0,0.12),B.h7X,D.b_)
c4.e=0
c4.d=1}if(a3.d)a2="Smooth and ready for paint."
else if(!a3.a)a2="The joint between two sheets. It needs tape and three coats of joint compound."
else{a2=a3.b
a4=a2===1?"":"s"
a4="Taped, with "+a2+" coat"+a4+" of mud."
a2=a4}c9.n(0,a0,new A.cV("Seam",a2,new A.q(d,0,0),70))}for(o=d2.b,m=d1.x,l=d1.at,g=x.N,a5=0;a5<7;++a5){n=B.uJ[a5]
a0=n.a
a6=m.aj(0,a0)
a7=l.h(0,a0)
a8=o===a0&&a7!=null
if(!a6)continue
a2=n.c
if(a2)a9=n.e==="fan"?"fan":"light"
else{a4=a7==null?c1:a7.a
a9=a4==null?"outlet":a4}if(a8){b0=A.t6(a7.a)
a0=a7.b
b1=A.h99(b0,a0,!1)
b2=A.h8i(b1,n,new A.fAM(n),d0)
D.d.v(c3,b2.a)
c9.v(0,b2.b)
if(a0.f&&a0.c===0){a0=C.a([],c6)
for(a2=b1.c,a4=a2.length,b3=0;b3<a2.length;a2.length===a4||(0,C.L)(a2),++b3){b4=a2[b3]
a0.push(new A.hh(A.ai8(n,b4.a),b4.b,b4.c,0))}D.d.v(c7,a0)}}else if(a7!=null&&a7.b.c>=2){a4=a7.a
b5=a7.b
b6=b5.x
b7=C.a([],c2)
b8=new A.fm(b7)
b9=new A.CA(C.U(c8,g))
b9.c=2
b9.x=b6
if(a4==="light"||a4==="fan")A.hrk(b8,a4,b9)
else{A.hqY(b8,A.h9N(a4),-0.25,b6,!0,!1,!0)
A.htp(b8,b6)}D.d.v(c3,A.h8i(new A.tU(b7,B.Sk,B.zu,B.wE,c1,0),n,new A.fAN(n),d0).a)
if(!a2){c4.f=3
c4.b=3000+a0
c4.e=0.4
c4.d=0.55
a2=n.d
b5=b5.x?D.ax:D.b8
c4.aJ(new A.q(a2.a,a2.b,a2.c+0.2),B.h80,b5)
c4.d=1
c4.f=2
c4.e=0}c9.n(0,3000+a0,new A.cV(A.i0f(a4),A.i0e(d1,a0),A.ai8(n,B.aaO),22))}else{a4=C.a([],c2)
b5=A.h9N(a9)===a9?a9:"outlet"
A.hqi(new A.fm(a4),b5,!1)
D.d.v(c3,A.h8i(new A.tU(a4,B.dAa,B.zu,B.wE,c1,0),n,new A.fAO(n),d0).a)
a2=a2?"Ceiling box":"Electrical box"
a4=v.t(0,a0)?"The box is mounted and the cable is in. A device can be wired here.":"The box is mounted. Pull the cable to it."
c9.n(0,2000+a0,new A.cV(a2,a4,A.ai8(n,B.aaO),24))}}c4.x=0
c0=new A.fAR(c4)
if(u==="wall"||u==="ceiling"||u==="fanbox")for(a5=0;a5<7;++a5){n=B.uJ[a5]
c2=n.a
if(m.aj(0,c2))continue
c6=n.c
c8=n.d
s=c8.a
o=c8.b
a0=c6?new A.q(s,o-1,c8.c):new A.q(s,o,1.5)
a2=c6?B.h5h:B.h7m
c0.$4$round(2000+c2,a0,a2,c6)
c2=c6?new A.q(s,o-8,c8.c):new A.q(s,o+7,3)
c7.push(new A.hh(c2,n.b,D.eN,0))}else if(u==="cable")for(a5=0;a5<7;++a5){n=B.uJ[a5]
c2=n.a
if(!m.aj(0,c2)||v.t(0,c2))continue
c6=n.c
c8=n.d
s=c8.a
o=c8.b
c8=c6?new A.q(s,o-1,c8.c):new A.q(s,o,1.5)
s=c6?B.aX0:B.h5H
c0.$5$col$round(2000+c2,c8,s,D.bu,c6)}else if(u==="knife")for(a5=0;a5<7;++a5){n=B.uJ[a5]
if(n.c||!m.aj(0,n.a))continue
c2=n.d
c6=c2.a
i=d1.aqk(c6)
if(i==null||i.b.t(0,n.a))continue
c0.$4$col(2000+n.a,new A.q(c6,c2.b,0.5),B.h7v,D.cL)}else if(u==="sheet")for(w=0;w<5;){j=B.a5i[w]
c0.$3(6000+w,new A.q(j,0,0.3),B.hbN);++w
c7.push(new A.hh(new A.q(j,50,1),"edge "+w,D.eN,0))}else if(u==="screw")for(a5=0;a5<3;++a5){j=B.oy[a5]
i=s.h(0,j)
if(i==null||!i.a)continue
for(c2=d1.aqF(j),c6=c2.length,c8=i.c,o=j+48,b3=0;b3<c2.length;c2.length===c6||(0,C.L)(c2),++b3){f=c2[b3]
for(a0=f*10,a2=7000+a0,r=0;r<6;++r){if(c8.t(0,a0+r))continue
c0.$3(a2+r,new A.q($.Hf()[f],-40+r*16,0.5),B.aWR)}a2=$.Hf()
if(f+1<a2.length&&a2[f]+16<=o)for(a0=7500+a0,r=0;r<6;r+=2)c0.$4$col(a0+r,new A.q(a2[f]+8,-40+r*16+8,0.5),B.aWR,D.du)}}if(!C.eE(["wall","ceiling","fanbox","cable","knife","sheet","screw",""],g).t(0,u))c2=D.d.t(B.Ih,u)||C.eE(["outlet","gfci","switch","light","fan"],g).t(0,u)||D.d.t(B.lh,u)||D.d.t(B.jE,u)
else c2=!1
if(c2)for(c2=d1.CW,a5=0;a5<7;++a5){n=B.uJ[a5]
if(D.d.t(B.Ih,u)){c6=n.a
a7=l.h(0,c6)
if(a7!=null&&D.d.t(B.lh,a7.a)&&a7.b.c>=2&&!c2.aj(0,c6)){c8=n.d
c0.$4$col(3000+c6,new A.q(c8.a,c8.b,1.2),B.h83,D.bf)}}else{c6=n.a
if(m.aj(0,c6)&&v.t(0,c6)&&!l.aj(0,c6)){c8=n.c
s=n.d
o=s.a
g=s.b
s=c8?new A.q(o,g-1,s.c):new A.q(o,g,1.2)
o=c8?B.aX0:B.hbG
c0.$4$round(2000+c6,s,o,c8)}}}c4.r=!0
for(c2=d1.CW,c6=new C.cI(c2,C.a7(c2).k("cI<1,2>")).gag(0);c6.C();){j=c6.d
c8=j.a
n=A.j5(c8)
v=n.d
d=v.a
c4.b=8200+c8
v=v.b
c4.j8(A.Dj(C.a([new A.q(d,v,2.5),new A.q(d,-46,3.5),new A.q(d,-46,22)],t),4,6),0.55,B.Yz,!1,0.2,6)
c4.aV(new A.q(d,v,1.8),B.h9V,B.bgm,0.3)
v=c4.b=8100+c8
u=j.b
switch(u){case"tv":c4.aV(new A.q(d,-45,24),B.h4_,B.ah1,0.2)
c4.aV(new A.q(d,-19,24),B.h5v,E.Fx,0.4)
if(c2.aj(0,c8))c8=d1.ax&&!d1.ay&&d1.a4K(c8)
else c8=!1
if(c8){c8=d-38.5
s=d+38.5
c5.push(new A.fP(C.a([new A.q(c8,1.5,25.7),new A.q(s,1.5,25.7),new A.q(s,-39.5,25.7),new A.q(c8,-39.5,25.7)],t),v,new A.fAP(j),320,180,9,2,0,!1))}break
case"lamp":c4.dR(new A.q(d,-47.5,24),new A.q(d,-46.5,24),6,B.Xy,0.4,14)
c4.dR(new A.q(d,-46.5,24),new A.q(d,-22,24),1,B.By,0.5,8)
c4.yT(new A.q(d,-26,24),new A.q(d,-12,24),9,L.YG,!1,!0,5.5,0.2,16)
break
case"toaster":c4.aV(new A.q(d,-42.5,24),B.h1u,B.j9,0.8)
c4.aJ(new A.q(d,-38,24),B.hcS,B.aik)
break
default:c4.aV(new A.q(d,-43.5,24),B.h28,B.ah1,0.2)
c4.BF(new A.q(d-6,-38,24),new A.q(d+8,-38,24),3.4,B.Mw,3,0.6,12)
c4.wr(new A.q(d-8,-43,24),B.h1E,B.Mw,0.6,0)}c8=A.hZo(u)
s="Plugged into "+n.b
u=u==="tv"?s+". To unplug it, go behind it (the Behind the TV button) and tap the plug on the wall.":s+". Tap it to unplug."
c9.n(0,v,new A.cV(c8,u,new A.q(d,-35,20),60))}c4.r=!1
for(a5=0;a5<7;++a5){n=B.uJ[a5]
c9.c3(0,2000+n.a,new A.fAQ(n))}return new A.tU(c3,c9,c7,c5,c1,0)},
i0f(d){var w
A:{if("gfci"===d){w="GFCI outlet"
break A}if("switch"===d){w="Light switch"
break A}if("light"===d){w="Ceiling light"
break A}if("fan"===d){w="Ceiling fan"
break A}if("outlet"===d){w="Outlet"
break A}w=A.a2k(d)
break A}return w},
hZo(d){var w
A:{if("tv"===d){w="TV"
break A}if("lamp"===d){w="Lamp"
break A}if("toaster"===d){w="Toaster"
break A}w="Hair dryer"
break A}return w},
i0e(d,e){var w,v=d.at.h(0,e)
if(v==null)return""
if(v.b.x)return"BURNT. It was wired wrong and it burnt out. Pull it out and put in a new one."
w=v.a
if(D.d.t(B.jE,w))return d.ch.t(0,e)?"The switch is ON. Tap to turn it off.":"The switch is OFF. Tap to flip it on."
if(w==="light"||w==="fan")return d.ano(e)?"It is running.":"It is off. Flip its switch (breaker on)."
w=d.CW.h(0,e)
return"Tap with a TV, lamp, toaster or hair dryer in your hand to plug it in. Plugged: "+(w==null?"nothing":w)+"."},
ikj(a6,a7,a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=C.a([],x.z),a5=new A.fm(a4)
for(w=D.d.gag(B.uJ),v=new C.f2(w,new A.fRM()),u=a6.at,t=a7*7;v.C();){s=w.gS(0)
r=s.a
q=u.h(0,r)
if(q==null||q.b.c<1)continue
p=a6.ano(r)?t:0.4
a5.b=3000+r
s=s.d
r=s.a
o=s.b-6.6
s=s.c
for(n=0;n<4;++n){m=p+n*3.141592653589793/2
l=A.vE(B.h0S,m)
a5.wr(new A.q(r+l.a,o+l.b,s+l.c),B.hfL,B.bf_,0.3,m)}}w=a6.d
w===$&&C.c()
v=D.d.gag(w)
s=new C.f2(v,new A.fRN())
r=a7*5
while(s.C()){o=v.gS(0).a
if(a6.ano(o)){k=A.j5(o)
a5.b=0
a5.d=0.25+0.05*Math.sin(r)
o=k.d
a5.fO(new A.q(o.a,o.b-5,o.c),11,B.XZ,4,10,0)
a5.d=1}}for(v=a6.CW,s=new C.cI(v,C.a7(v).k("cI<1,2>")).gag(0),r=a7*1.6,o=a7*6;s.C();){j=s.d
l=j.a
if(v.aj(0,l))i=a6.ax&&!a6.ay&&a6.a4K(l)
else i=!1
if(!i)continue
h=A.j5(l).d.a
a5.b=8100+l
switch(j.b){case"tv":break
case"lamp":a5.b=0
a5.d=0.3+0.05*Math.sin(o)
a5.fO(new A.q(h,-19,24),11,I.xJ,4,10,0)
a5.d=1
break
case"toaster":a5.e=0.8
l=C.ar(B.agw,Ab.MC,(Math.sin(o)+1)/2)
l.toString
a5.aJ(new A.q(h,-38.2,24),new A.q(13,0.3,6),l)
a5.e=0
break
default:for(l=h+9,g=0;g<6;++g)a5.fO(new A.q(l+D.k.F(r+g/6,1)*22,-38+Math.sin(g*2)*2,24),0.6,B.bmB,3,5,0.2)}}for(v=a6.db,v=new C.cI(v,C.a7(v).k("cI<1,2>")).gag(0),s=a6.cx;v.C();){j=v.d
r=j.a
k=A.j5(r)
f=a8.h(0,r)
e=a7<=(f==null?0:f)
d=s.t(0,r)
if(!e&&!d)continue
r=e?j.b:"smolder"
A.hvf(a5,r,new A.fRO(k),1,a7)}if(a9){a0=(D.k.bf(a7*2.4)&1)===0
for(g=0;g<w.length;++g){k=A.j5(w[g].a)
a1=a6.r1(g)
v=k.a
a5.b=2000+v
a5.f=3
a5.e=0.9
a5.d=0.02
if(!u.aj(0,v)){s=k.d
r=s.a
o=s.b
if(k.c)a5.aJ(new A.q(r,o-1.5,s.c),B.hem,D.c)
else a5.aJ(new A.q(r,o,2.2),B.hgu,D.c)}a5.d=1
if(a0){a2=a1?D.be:D.ax
s=k.d
r=s.a
o=s.b
a3=k.c?new A.q(r,o-3.5,s.c):new A.q(r,o+7.4,2)
a5.fO(a3,v===b0?1.15:0.8,a2,4,8,0.2)}a5.e=0
a5.f=2}}return a4},
rO:function rO(d,e,f){this.a=d
this.b=e
this.c=f},
ft2:function ft2(d){this.a=d},
ft3:function ft3(d){this.a=d},
fAM:function fAM(d){this.a=d},
fAN:function fAN(d){this.a=d},
fAO:function fAO(d){this.a=d},
fAR:function fAR(d){this.a=d},
fAP:function fAP(d){this.a=d},
fAQ:function fAQ(d){this.a=d},
fRM:function fRM(){},
fRN:function fRN(){},
fRO:function fRO(d){this.a=d},
hmZ(d,e){var w=new A.cwc(e,d,A.hgl())
w.bAi(4,d,e)
return w},
rm:function rm(d,e){this.a=d
this.b=e},
uE:function uE(d,e,f,g,h,i,j){var _=this
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
cwc:function cwc(d,e,f){var _=this
_.a=d
_.b=e
_.c=$
_.d=f
_.e=3
_.r=_.f=0
_.w=!1},
cwh:function cwh(d){this.a=d},
cwd:function cwd(){},
cwf:function cwf(){},
cwg:function cwg(){},
cwe:function cwe(d){this.a=d},
as1:function as1(d,e){this.d=d
this.a=e},
aFp:function aFp(d,e){var _=this
_.e=_.d=$
_.f=d
_.r=$
_.w=e
_.x="inspect"
_.y=0
_.z=null
_.at=_.as=_.Q=!1
_.c=_.a=_.ax=null},
exK:function exK(d,e,f){this.a=d
this.b=e
this.c=f},
exL:function exL(d){this.a=d},
exJ:function exJ(d){this.a=d},
exz:function exz(d){this.a=d},
exE:function exE(d){this.a=d},
exF:function exF(d){this.a=d},
exD:function exD(d){this.a=d},
exG:function exG(d,e){this.a=d
this.b=e},
exH:function exH(d){this.a=d},
exI:function exI(d){this.a=d},
exC:function exC(d){this.a=d},
exB:function exB(d,e){this.a=d
this.b=e},
exy:function exy(d,e){this.a=d
this.b=e},
exw:function exw(d){this.a=d},
exx:function exx(d,e){this.a=d
this.b=e},
exA:function exA(d){this.a=d},
exX:function exX(d,e){this.a=d
this.b=e},
exT:function exT(){},
exS:function exS(d){this.a=d},
exU:function exU(){},
exV:function exV(){},
exW:function exW(d,e){this.a=d
this.b=e},
exR:function exR(d,e){this.a=d
this.b=e},
exQ:function exQ(d){this.a=d},
exP:function exP(d){this.a=d},
exN:function exN(d,e){this.a=d
this.b=e},
exM:function exM(){},
exO:function exO(d,e){this.a=d
this.b=e},
atT(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){return new A.y5(p,s,u,t,r,h,o,n,m,i,q,d,j,g,k,e,f,l)},
ijL(d){var w,v,u,t,s,r,q,p,o,n,m=d.gea(0),l=C.a([],x.T)
for(w=d.x,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u){t=w[u]
s=t.b
if(s==="rug")continue
s=B.hC.h(0,s)
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
case"bathroom":l.push(B.dBd)
l.push(B.dAU)
w=-m/2
l.push(new A.ia(w,w+33,0,75))
break}return l},
bso(d,e,f,g,h,i,j,k,l,m,n,o){var w=new A.bsn(d,i,m,o,n,l,g,f,k,j,e,h,C.a([],x.n))
w.bAy(d,e,f,g,h,i,j,k,l,m,n,o)
return w},
hr0(d,e){var w,v,u,t=d.w,s=D.d.bh(t,new A.flL(e))
if(s<0)s=0
w=t[s]
v=d.gea(0)
u=d.gh_(0)
t=w.c
switch(w.b){case"left":return new C.b7(new C.z(-v/2+18,D.k.E(t+u/2-40,10,u-10)),1.5707963267948966,s)
case"right":return new C.b7(new C.z(v/2-18,D.k.E(t+u/2-40,10,u-10)),-1.5707963267948966,s)
default:return new C.b7(new C.z(D.o.E(t,-v/2+12,v/2-12),18),0,s)}},
y5:function y5(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){var _=this
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
aa2:function aa2(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
csL:function csL(d,e){var _=this
_.a=d
_.b=e
_.d=_.c=$},
Az:function Az(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
bsn:function bsn(d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
flL:function flL(d){this.a=d},
aWz:function aWz(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=$},
bVh:function bVh(d,e){this.a=d
this.b=e},
bVi:function bVi(d){this.a=d},
hyI(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=C.a([B.dB6],x.T)
for(w=d.x,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u){t=w[u]
if(t.a===e)continue
s=t.b
if(D.d.t(B.a5f,s)||D.d.t(B.I4,s)||s==="bush")continue
r=s==="townsign"
if(r||s==="adboard"){q=r?178:150
for(s=[-q,q],p=0;p<2;++p){o=s[p]
n=t.e*3.141592653589793/2
r=Math.cos(n)
m=Math.sin(n)
r=t.c+o*r
m=t.d+-o*m
i.push(new A.ia(r-8,r+8,m-8,m+8))}continue}r=B.hC.h(0,s)
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
hob(d,e,f){var w=new A.b9U(d,-d.gea(0)/2+10,d.gea(0)/2-10,-760,d.gh_(0)-10,e,f,0,B.dhw)
w.MC(0)
return w},
b9U:function b9U(d,e,f,g,h,i,j,k,l){var _=this
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
akt:function akt(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h},
aq7:function aq7(d){this.a=d},
bet:function bet(d){var _=this
_.d=0
_.e=!1
_.f=d
_.c=_.a=_.r=null},
d7z:function d7z(d){this.a=d},
d7A:function d7A(d,e){this.a=d
this.b=e},
d7y:function d7y(d,e){this.a=d
this.b=e},
d7B:function d7B(d){this.a=d},
d7x:function d7x(d){this.a=d},
d7C:function d7C(d){this.a=d},
d7w:function d7w(d){this.a=d},
d7D:function d7D(d,e){this.a=d
this.b=e},
d7v:function d7v(d,e,f){this.a=d
this.b=e
this.c=f},
d7E:function d7E(d,e){this.a=d
this.b=e},
d7F:function d7F(d){this.a=d},
d7u:function d7u(d){this.a=d},
hvf(d,e,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
if(e==="none"||e.length===0)return
d.b=0
w=new A.fCt(a2,d,a0,a1)
v=new A.fCs(d,a2,a0,a1)
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
o=C.ar(D.c,D.co,p-Math.floor(p))
o.toString
d.j8(m,t,o,!1,0,4)}d.d=0.16+0.1*Math.sin(a2*31)
d.fO(a0.$1(B.hbE),3.2*a1,D.du,4,8,0)
d.d=1
break
case"spark":w.$2(22,7)
d.d=0.2+0.1*Math.sin(a2*26)
d.fO(a0.$1(B.aX6),2.4*a1,I.xJ,4,8,0)
d.d=1
break
case"smoke":d.d=0.3+0.08*Math.sin(a2*7)
d.fO(a0.$1(B.h4t),2.6*a1,D.ax,4,8,0)
d.d=1
v.$3(9,0.8,11)
w.$2(5,3)
break
case"fire":d.d=0.3+0.12*Math.sin(a2*20)
d.fO(a0.$1(B.aX6),4.4*a1,D.cL,4,8,0)
d.d=1
h=D.k.bf(a2*11)
for(t=0.85*a1,s=0.05*a1,r=0.5*a1,o=0.04*a1,k=0;k<6;++k){p=-2.2+k*0.88
g=Math.sin((h+k*5)*12.9898)*43758.5453
f=2.4+(g-Math.floor(g))*3.6
l=a0.$1(new A.q(p,-2.2,3))
g=Math.sin((h+k)*12.9898)*43758.5453
d.BF(l,a0.$1(new A.q(p+(g-Math.floor(g)-0.5)*1.2,-2.2+f,3.4)),t,D.fr,s,0,6)
d.BF(a0.$1(new A.q(p,-2.2,3.1)),a0.$1(new A.q(p,-2.2+f*0.62,3.5)),r,D.bu,o,0,6)}w.$2(16,6)
v.$3(10,1,13)
break
case"smolder":v.$3(4,0.9,9)
break}},
fCt:function fCt(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fCs:function fCs(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
h5b(d){var w
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
avw(d){var w
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
hvb(d,e,a0){var w,v,u,t,s=C.a([],x.fB),r=new A.fBY(s),q=new A.fC2(e),p=q.$2(B.VI,B.K_),o=q.$2(B.VI,B.K0),n=q.$2(B.VI,B.K1),m=q.$2(B.VJ,B.K0),l=q.$2(B.VJ,B.K_),k=q.$2(B.VJ,B.K1),j=q.$2(B.VK,B.K1),i=q.$2(B.VK,B.K_),h=q.$2(B.VK,B.K0),g=new C.Z(e,new A.fBZ(),C.T(e).k("Z<1>")).gL(0),f=D.d.b3(e,new A.fC_())
if(f)r.$5("UNVERIFIED",B.f3r,"A conductor is in use whose function was never verified. A wire color alone does not prove what a wire does.","Verify every conductor with a tester before you connect it.","Identify each wire with a tester and the device diagram, then connect it.")
if(D.d.b3(e,new A.fC0()))r.$5("LOOSE",B.t4,"A connection is loose. A loose connection heats up and can arc.","Every conductor must be fastened tightly under its screw or connector.","Tighten the connection.")
if(D.d.b3(e,new A.fC1()))r.$5("EXPOSED",B.t4,"Bare copper is showing outside the terminal. An exposed energized conductor can shock or short.","No conductor may be left exposed.","Trim the wire so only the part under the screw is bare.")
if(!a0)r.$5("SUPPORT",B.t4,"The box or support is not rated for this device. It can fall.","A fixture or fan must hang from a box or bracket rated for its weight.","Use a box rated for this fixture (a fan-rated box for a fan).")
if(n>0||i>0)r.$5("HOT_TO_GROUND",B.t4,"The hot wire is connected to the ground. That is a short circuit to ground: a very large current.","The equipment ground never carries current in normal use, and the hot wire never touches it.","Hot goes on the hot terminal (brass). Ground goes only on the green screw.")
f=o>0
if(!(f&&m>0))w=l>0&&p>0
else w=!0
if(w)r.$5("SHORT",B.t4,"The hot and the neutral are connected together. That is a short circuit.","Hot and neutral must never touch each other.","Put each wire on its own terminal.")
else if(f||l>0)r.$5("REVERSED",B.t4,"Hot and neutral are reversed (reversed polarity). The device may still seem to work, but the parts that should be dead are live. This is a shock hazard.","Hot goes to the brass (hot) terminal and neutral to the silver (neutral) terminal.","Swap them: black (hot) to brass, white (neutral) to silver.")
if(k>0||h>0)r.$5("NEUTRAL_GROUND",B.t4,"The neutral and the equipment ground are joined at the device. Current can flow on the ground path and trip protective devices.","The neutral is never used as the equipment ground, and the two are not joined at the device.","Neutral to the silver terminal only. Ground to the green screw only.")
if(!(i>0&&n===0))f=h>0&&k===0
else f=!0
if(f)r.$5("GROUND_AS_CURRENT",B.t4,"The equipment ground was fastened to a terminal that carries current. The ground must never be used as a normal conductor.","The equipment ground goes only to the ground terminal.","Move the bare copper (ground) wire to the green screw.")
if(g>0&&p<d.b)r.$5("LOAD_SIDE",B.aQg,"The wires are on the LOAD screws. Power must come in on LINE; on LOAD the device would not protect or feed anything.","Supply (line) conductors go to the LINE terminals.","Move the wires to the LINE screws.")
f=d.b
if(p<f&&g===0&&o===0&&l===0&&n===0)r.$5("MISSING_HOT",B.TT,"The hot wire is not on the hot terminal, so the device gets no power.","The device needs its hot connection.","Connect the black (hot) wire to the brass terminal.")
if(p>=f){f=d.c
f=m<f&&f>0&&l===0&&k===0}else f=!1
if(f)r.$5("OPEN_NEUTRAL",B.t4,"The neutral is not connected, but the hot wire is. The device will not run, and parts of it can still be live. There may be nothing to see.","The neutral return conductor must be connected.","Connect the white (neutral) wire to the silver terminal.")
if(d.d&&j===0)r.$5("MISSING_GROUND",B.t4,"There is no equipment ground. It may seem to work, but nothing protects you if a fault happens.","A required equipment ground must be connected to the ground terminal.","Connect the bare copper (ground) wire to the green screw.")
for(f=s.length,v=B.vd,u=0;u<f;++u){t=s[u].b
if(A.avw(t)>A.avw(v))v=t}return new A.b6u(v,s,A.i_M(s,e))},
i_M(d,e){var w=new A.fli(d)
if(w.$1("SHORT")||w.$1("HOT_TO_GROUND"))return B.bub
if(w.$1("LOOSE"))return B.bu3
if(w.$1("EXPOSED"))return B.bu9
if(w.$1("GROUND_AS_CURRENT"))return B.bud
if(w.$1("REVERSED"))return B.buc
if(w.$1("NEUTRAL_GROUND"))return B.bue
if(w.$1("SUPPORT"))return B.bua
if(w.$1("OPEN_NEUTRAL"))return B.bu8
if(w.$1("LOAD_SIDE")||w.$1("MISSING_HOT"))return B.bu1
if(w.$1("UNVERIFIED"))return B.bu2
if(w.$1("MISSING_GROUND"))return B.bu5
return B.bu7},
hUL(d){var w
switch(d.a.c.a){case 0:w=d.b.c===B.K_
break
case 1:w=d.b.c===B.K0
break
case 2:w=d.b.c===B.K1
break
case 3:w=!1
break
default:w=null}return w},
hvc(d,e,f){var w,v,u,t,s=C.a([],x.fB)
e.bQ(0,new A.fC4(f,s))
for(w=s.length,v=B.vd,u=0;u<w;++u){t=s[u].b
if(A.avw(t)>A.avw(v))v=t}return new A.b6u(v,s,v===B.vd?B.bu6:B.bu4)},
JH:function JH(d,e){this.a=d
this.b=e},
FM:function FM(d,e){this.a=d
this.b=e},
FT:function FT(d,e){this.a=d
this.b=e},
czc:function czc(d){this.c=d},
cCN:function cCN(d,e){this.a=d
this.c=e},
a4l:function a4l(d,e){this.a=d
this.b=e},
bMB:function bMB(d,e,f){this.b=d
this.c=e
this.d=f},
wq:function wq(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
tm:function tm(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h},
b6u:function b6u(d,e,f){this.a=d
this.b=e
this.c=f},
fBY:function fBY(d){this.a=d},
fC2:function fC2(d){this.a=d},
fC3:function fC3(d,e){this.a=d
this.b=e},
fBZ:function fBZ(){},
fC_:function fC_(){},
fC0:function fC0(){},
fC1:function fC1(){},
fli:function fli(d){this.a=d},
flj:function flj(d){this.a=d},
aba:function aba(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
abb:function abb(d,e,f){this.a=d
this.b=e
this.c=f},
vh:function vh(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
b5c:function b5c(d,e){this.a=d
this.b=e},
b8o:function b8o(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cze:function cze(d,e,f){this.a=d
this.b=e
this.c=f},
czf:function czf(){},
czg:function czg(){},
czh:function czh(){},
PM:function PM(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fC4:function fC4(d,e){this.a=d
this.b=e},
h8P(d){var w
switch(d.a){case 0:w=D.bf
break
case 1:w=D.cL
break
case 2:w=D.c6
break
case 3:w=D.bu
break
case 4:w=D.br
break
default:w=null}return w},
hbZ(d){return C.bV(E.lB,null,new A.fZM(),d,!0,!0,!0,D.k3,!1,!1,x.H)},
hzC(d,e,f,g){var w=x.S
return C.bV(E.lB,null,new A.fZK(new A.cze(e,f,C.U(w,w)),g),d,!0,!0,!0,D.k3,!1,!1,x.dZ)},
fZM:function fZM(){},
fZK:function fZK(d,e){this.a=d
this.b=e},
a1g:function a1g(d,e,f){this.c=d
this.d=e
this.a=f},
bv6:function bv6(d){var _=this
_.d=d
_.c=_.a=_.e=null},
fb3:function fb3(d,e){this.a=d
this.b=e},
fb2:function fb2(d,e,f){this.a=d
this.b=e
this.c=f},
fb4:function fb4(d){this.a=d},
fb1:function fb1(d,e){this.a=d
this.b=e},
fb5:function fb5(){},
fb6:function fb6(d){this.a=d},
a5h:function a5h(d,e){var _=this
_.a=d
_.b=e
_.c=!1
_.d=null},
bSO:function bSO(d){this.a=d},
bSN:function bSN(d){this.a=d}},B,K,E,An,F,O,L,Ao,W,P,Ap
J=c[1]
C=c[0]
D=c[2]
A1=c[107]
A8=c[117]
A9=c[88]
Aa=c[132]
H=c[96]
Q=c[121]
I=c[106]
Ab=c[134]
Ac=c[116]
Ad=c[131]
A2=c[83]
R=c[118]
Ae=c[123]
Af=c[94]
M=c[92]
A3=c[85]
S=c[126]
Ag=c[113]
X=c[130]
Ah=c[129]
Y=c[124]
A4=c[128]
Ai=c[122]
Z=c[98]
A_=c[114]
Aj=c[104]
Ak=c[38]
G=c[108]
Al=c[133]
T=c[102]
U=c[120]
A0=c[119]
A5=c[115]
A6=c[101]
V=c[109]
A7=c[125]
Am=c[127]
N=c[100]
A=a.updateHolder(c[26],A)
B=c[95]
K=c[28]
E=c[99]
An=c[69]
F=c[97]
O=c[33]
L=c[105]
Ao=c[110]
W=c[112]
P=c[103]
Ap=c[111]
A.f_m.prototype={
a6(){return"_RadioType."+this.b}}
A.a9O.prototype={
R(){return new A.aeh(null,this.$ti.k("aeh<1>"))}}
A.aeh.prototype={
gcoz(){var w=this.e
return w===$?this.e=new A.bpA(this):w},
gam7(){var w=this.Gd$
w=w==null?null:w.gaq0()
return w==null?this.a.d:w},
gazM(){this.a.toString
return!0},
bWC(){var w=this,v=w.a.c,u=w.gam7()
if(v===u)return
w.a5k(v===w.gam7()?null:v)},
a5k(d){var w=this.Gd$
if(w!=null)w.glH().$1(d)
this.a.e.$1(d)},
d5(){var w,v=this
v.eG()
w=v.c
w.toString
v.sa6O(O.h5_(w,v.$ti.c))},
q(){this.sa6O(null)
var w=this.d
if(w!=null)w.q()
this.a1()},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.a
m.toString
switch(0){case 0:w=o.gcoz()
v=w.a.gam7()
o.a.toString
u=new C.HR(!0,O.hSW(n,!1,n,o.gazM(),n,w,v,n,n,D.kq,n,n,n,n,n,!1,m.c,o.$ti.c),n)
break}C.an4(d)
o.a.toString
A:{m=new C.z(u,n)
break A}t=C.P(d)
s=O.h50(d)
o.a.toString
w=s.b
w=w==null?n:w.aT(C.aX(x.c1))
r=w
if(r==null)r=t.ax.y
w=o.a.at
v=o.gazM()
q=o.gazM()?o.gbWB():n
p=o.d
if(p==null){p=C.k4(!0,n,!0,!0,n,n,!1)
o.d=p}return new C.zw(C.dG(!1,n,!0,n,v,p,n,n,!1,n,n,m.a,n,n,n,n,q,!1,r,n,n,n,n,n,n,w,n,m.b,n),n)}}
A.bpA.prototype={
gaq0(){return this.a.gam7()},
glH(){return this.a.gLN()},
bjg(d){},
bkm(d){},
gdc(d){return this.a}}
A.aNT.prototype={}
A.q.prototype={
a7(d,e){return new A.q(this.a+e.a,this.b+e.b,this.c+e.c)},
aE(d,e){return new A.q(this.a-e.a,this.b-e.b,this.c-e.c)},
aI(d,e){return new A.q(this.a*e,this.b*e,this.c*e)},
FY(d){var w=this.b,v=d.c,u=this.c,t=d.b,s=d.a,r=this.a
return new A.q(w*v-u*t,u*s-r*v,r*t-w*s)},
guW(){var w=this.a,v=this.b,u=this.c
return Math.sqrt(w*w+v*v+u*u)},
gmW(d){var w=this,v=w.guW()
return v<1e-9?w:new A.q(w.a/v,w.b/v,w.c/v)}}
A.kp.prototype={}
A.cV.prototype={}
A.hh.prototype={}
A.tU.prototype={}
A.fP.prototype={}
A.fm.prototype={
WG(){var w=this.x
if(!(w!==0))if(this.r){w=$.dS+1
$.dS=w}else w=0
this.w=w},
aIS(d,e,f,g,h,i,j,k){var w=this,v=i.gmW(0)
w.a.push(new A.kp(C.a([d,e,f,g],x.o),v,h,w.b,j,w.d,k,w.c,w.e,w.f,w.w))},
bj5(d,e,f,g,h,i,j){return this.aIS(d,e,f,g,h,i,0,j)},
Cn(d,e,f,g,h,i){return this.aIS(d,e,f,g,h,i,0,!1)},
cXc(d,e,f,g,h,i,j){return this.aIS(d,e,f,g,h,i,j,!1)},
a7b(d,e,f,g,h,i){var w=this,v=(h==null?e.aE(0,d).FY(f.aE(0,d)):h).gmW(0)
w.a.push(new A.kp(C.a([d,e,f],x.o),v,g,w.b,0,w.d,i,w.c,w.e,w.f,w.w))},
bke(d,e,f,g){return this.a7b(d,e,f,g,null,!0)},
Bs(d,e,f,g,h,i,j,k){var w,v,u,t,s,r
this.WG()
w=e.a/2
v=e.b/2
u=e.c/2
t=new A.c03(this,j,new A.c04(k,d),new A.c05(k),f,h)
if((i&1)===0)t.$4(new A.q(0,0,1),new A.q(-w,-v,u),new A.q(2*w,0,0),new A.q(0,2*v,0))
if((i&2)===0)t.$4(new A.q(0,0,-1),new A.q(w,-v,-u),new A.q(-2*w,0,0),new A.q(0,2*v,0))
if((i&4)===0)t.$4(new A.q(1,0,0),new A.q(w,-v,u),new A.q(0,0,-2*u),new A.q(0,2*v,0))
if((i&8)===0)t.$4(new A.q(-1,0,0),new A.q(-w,-v,-u),new A.q(0,0,2*u),new A.q(0,2*v,0))
if(g){s=-w
r=2*w
t.$4(new A.q(0,1,0),new A.q(s,v,u),new A.q(r,0,0),new A.q(0,0,-2*u))
t.$4(new A.q(0,-1,0),new A.q(s,-v,-u),new A.q(r,0,0),new A.q(0,0,2*u))}},
hs(d,e,f,g){return this.Bs(d,e,f,!0,0,0,g,0)},
aE0(d,e,f,g,h){return this.Bs(d,e,f,g,h,0,1,0)},
mi(d,e,f,g,h){return this.Bs(d,e,f,!0,g,0,h,0)},
aV(d,e,f,g){return this.Bs(d,e,f,!0,g,0,1,0)},
aJ(d,e,f){return this.Bs(d,e,f,!0,0,0,1,0)},
akZ(d,e,f,g,h,i){return this.Bs(d,e,f,!0,g,h,i,0)},
wr(d,e,f,g,h){return this.Bs(d,e,f,!0,g,0,1,h)},
cIF(d,e,f,g,h,i){return this.Bs(d,e,f,g,h,0,i,0)},
aE_(d,e,f,g){return this.Bs(d,e,f,!0,0,0,1,g)},
yT(b3,b4,b5,b6,b7,b8,b9,c0,c1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this
b2.WG()
w=b4.aE(0,b3).gmW(0)
v=w.b
u=w.FY(Math.abs(v)<0.9?B.ea:B.hI).gmW(0)
t=w.FY(u).gmW(0)
s=b9<0?b5:b9
r=new A.c06(u,c1,t)
for(q=b2.a,p=b3.a,o=b3.b,n=b3.c,m=b4.a,l=b4.b,k=b4.c,j=x.o,i=w.a*-1,v*=-1,h=w.c*-1,g=0;g<c1;){f=r.$1(g);++g
e=r.$1(g)
d=f.a
a0=e.a
a1=f.b
a2=e.b
a3=f.c
a4=e.c
a5=new A.q(d+a0,a1+a2,a3+a4).gmW(0)
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
q.push(new A.kp(C.a([new A.q(a6,a7,a8),new A.q(a9,b0,b1),new A.q(a0,a2,a4),new A.q(d,a1,a3)],j),a5,b6,b2.b,c0,b2.d,b8,b2.c,b2.e,b2.f,b2.w))
if(b7){q.push(new A.kp(C.a([b3,new A.q(a9,b0,b1),new A.q(a6,a7,a8)],j),new A.q(i,v,h),b6,b2.b,c0,b2.d,!1,b2.c,b2.e,b2.f,b2.w))
q.push(new A.kp(C.a([b4,new A.q(d,a1,a3),new A.q(a0,a2,a4)],j),w,b6,b2.b,c0,b2.d,!1,b2.c,b2.e,b2.f,b2.w))}}},
dR(d,e,f,g,h,i){return this.yT(d,e,f,g,!0,!1,-1,h,i)},
BF(d,e,f,g,h,i,j){return this.yT(d,e,f,g,!0,!1,h,i,j)},
a4x(d,e,f,g,h,i,j,k){return this.yT(d,e,f,g,h,i,-1,j,k)},
dE(d,e,f,g,h){return this.yT(d,e,f,g,!0,!1,-1,0,h)},
cNc(d,e,f,g,h,i,j){return this.yT(d,e,f,g,h,!1,-1,i,j)},
L8(d,e,f,g,h,i){return this.yT(d,e,f,g,h,!1,-1,0,i)},
L9(d,e,f,g,h,i){return this.yT(d,e,f,g,!0,!1,h,0,i)},
Tj(d,e,f,g,h,i,j){return this.yT(d,e,f,g,h,!1,i,0,j)},
fO(a7,a8,a9,b0,b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6=this
a6.WG()
w=new A.c02(b0,b1)
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
v.push(new A.kp(C.a([new A.q(u+i*a8,t+h*a8,s+g*a8),new A.q(u+f*a8,t+e*a8,s+d*a8),new A.q(u+a0*a8,t+a1*a8,s+a2*a8),new A.q(u+a3*a8,t+a4*a8,s+a5*a8)],r),new A.q(i+f+a0+a3,h+e+a1+a4,g+d+a2+a5).gmW(0),a9,a6.b,b2,a6.d,!1,a6.c,a6.e,a6.f,a6.w))}},
bcc(d,e,f,g){return this.fO(d,e,f,6,10,g)},
ed(d,e,f,g,h){return this.fO(d,e,f,g,h,0.4)},
apf(d,e,f,g,h,i,j,k){var w,v,u,t,s
this.WG()
for(w=0;v=w+1,v<d.length;w=v){u=d[v]
t=d[w]
if(new A.q(u.a-t.a,u.b-t.b,u.c-t.c).guW()<0.000001)continue
u=d[w]
t=d[v]
if(g)s=w===0||w===d.length-2
else s=!1
this.a4x(u,t,e,f,s,h,j,k)}if(i)for(u=e*0.98,w=1;v=w+1,v<d.length;w=v)this.fO(d[w],u,f,4,k,j)},
j8(d,e,f,g,h,i){return this.apf(d,e,f,!0,!1,g,h,i)},
aJF(d,e,f,g,h,i,j){return this.apf(d,e,f,g,!1,h,i,j)},
zs(a4,a5,a6,a7,a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=this
a3.WG()
a3.cNc(a4,a5,a6,a8,!1,a9,b0)
w=a5.aE(0,a4).gmW(0)
v=w.FY(Math.abs(w.b)<0.9?B.ea:B.hI).gmW(0)
u=new A.c07(v,b0,w.FY(v).gmW(0))
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
s.push(new A.kp(C.a([new A.q(p+i*a7,m+h*a7,l+j*a7),new A.q(p+f*a6,m+e*a6,l+g*a6),new A.q(p+a0*a6,m+a1*a6,l+d*a6),new A.q(p+a2.a*a7,m+a2.b*a7,l+a2.c*a7)],r),n,a8,a3.b,a9,a3.d,!1,a3.c,a3.e,a3.f,a3.w))}}},
cYH(d,e,f,g,h,i){return this.zs(d,e,f,g,h,i,16)}}
A.xi.prototype={
aZk(d){var w,v,u,t,s,r,q,p,o,n,m=this
if(d&&m.c!==m.x)m.w=m.c
w=D.k.E(m.w,m.e,m.f)
v=m.r
if(v!=null){u=Math.cos(m.b)
t=Math.sin(m.a)
s=Math.sin(m.b)
r=Math.cos(m.a)
q=new A.bJJ()
p=m.d
o=v.a
p=q.$4(-u*t,p.a,o[0]+5,o[1]-5)
r=q.$4(u*r,m.d.c,o[2]+5,o[3]-5)
n=Math.min(Math.min(C.jf(p),C.jf(r)),C.jf(q.$4(s,m.d.b,4,o[4]-5)))
w=Math.min(w,Math.max(m.e,n))}m.x=m.c=w},
axi(){return this.aZk(!0)},
r9(d){var w,v,u,t=this
t.ax=d
if(!d){w=t.a
v=t.as
u=t.at
t.a=D.k.E(w,v-u,v+u)}t.aW()},
hT(d,e,f,g){var w=this
w.ay=f
w.ch=d
w.CW=g
w.cx=e
w.aW()},
xl(d,e){return this.hT(d,null,e,null)},
bo7(d){return this.hT(d,null,null,null)},
apX(d){return this.hT(null,null,d,null)},
apY(d,e,f){return this.hT(d,e,f,null)},
Np(d,e,f,g){var w=this
w.cx=w.CW=w.ch=w.ay=null
w.d=f
w.c=d
w.a=g
w.b=e
w.axi()
w.aW()},
a7_(d){var w,v,u,t=this
if(!(t.ay!=null||t.ch!=null||t.CW!=null||t.cx!=null))return
w=1-Math.exp(-d*7)
if(t.ch!=null&&t.c!==t.x)t.w=t.c
v=t.ay
if(v!=null){u=A.o7(t.d,v,w)
t.d=u
if(u.aE(0,v).guW()<0.02){v=t.ay
v.toString
t.d=v
t.ay=null}}v=t.ch
if(v!=null){u=t.c
u+=(v-u)*w
t.c=u
if(Math.abs(u-v)<0.05){t.c=v
t.ch=null}}v=t.CW
if(v!=null){u=t.a
u+=(v-u)*w
t.a=u
if(Math.abs(u-v)<0.003){t.a=v
t.CW=null}}v=t.cx
if(v!=null){u=t.b
u+=(v-u)*w
t.b=u
if(Math.abs(u-v)<0.003){t.b=v
t.cx=null}}t.axi()
t.aW()},
cZY(d,e){var w,v,u,t,s=this,r=e.a,q=e.b,p=Math.min(r,q)*1.15,o=Math.cos(s.a),n=Math.sin(s.a)
q=new A.bJQ(s,new A.bJR(Math.cos(s.b),Math.sin(s.b),o,n),(d.a-r/2)/p,-(d.b-q/2)/p)
w=q.$1(0)
r=q.$1(1).c
v=w.c
u=r-v
if(Math.abs(u)<1e-9)return null
t=(0-v)/u
if(t<=0)return null
return q.$1(t)},
bfp(d,e,f){var w,v,u,t,s=this,r=e.a,q=e.b,p=Math.min(r,q)*1.15,o=Math.cos(s.a),n=Math.sin(s.a)
q=new A.bJK(s,new A.bJL(Math.cos(s.b),Math.sin(s.b),o,n),(d.a-r/2)/p,-(d.b-q/2)/p)
w=q.$1(0)
r=q.$1(1).b
v=w.b
u=r-v
if(Math.abs(u)<1e-9)return null
t=(f-v)/u
if(t<=0)return null
return q.$1(t)},
cPt(d,e){return this.bfp(d,e,0)},
apy(d){var w,v=this
v.ch=null
w=v.c
if(w!==v.x)v.w=w
w=d<1?w:Math.max(v.w,w)
v.w=D.k.E(w*d,v.e,v.f)
v.aZk(!1)
v.aW()}}
A.bV2.prototype={
cWq(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this.a,f=g.length-1,e=a0.a,d=a0.b
for(;;){if(!(f>=0)){w=0
v=null
break}if(g[f].a.gbv().a.contains(e,d)){u=g[f]
w=u.b
u=u.a.gbv().a.getBounds()
v=new C.a3(u[0],u[1],u[2],u[3])
break}--f}if(w!==0&&v.gdC()<16)return w
for(u=g.length,t=0,s=1/0,r=0;r<g.length;g.length===u||(0,C.L)(g),++r){q=g[r]
p=q.a.gbv().a.getBounds()
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
A.b6x.prototype={
gGR(d){var w=this.r.a
return w==null?0:w},
ciz(b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=null,a8=b2.a,a9=b2.b,b0=new C.a3(0,0,0+a8,0+a9)
$.S()
w=C.I()
w.sam(B.c4e.aA(0,b0))
b1.aP(b0,w)
v=this.c.a*90
w=b1.a
J.bl(w.save())
w.translate(a8*0.45-v,a9*0.3)
b1.ii(0,-0.45)
for(u=x.O,t=0;t<3;++t){s=C.bK(D.I,a9*(0.2-t*0.05),a8*(1.9-t*0.4))
r=[B.bgD,D.aJ,D.rj][t]
q=new C.ao(D.Q,D.M,D.S,D.T,D.R)
q.sam(new C.c2(D.A,0.5,D.x,a7,0,C.a([r.j(0.3-t*0.07),r.j(0)],u),a7,a7).aA(0,s))
p=q.G()
w.drawOval(C.bG(s),p)
p.delete()}w.restore()
o=new C.e4()
o.cY(11)
n=C.I()
for(q=this.r,t=0;t<170;++t){m=D.k.F(D.k.F(o.af()*a8*1.5-v*(0.4+o.af()*0.6),a8)+a8,a8)
l=o.af()
k=o.af()
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
e.sam(new C.c2(D.A,0.5,D.x,a7,0,C.a([D.aJ.j(0.28),B.bny],u),a7,a7).aA(0,C.bY(i,g)))
b1.ad(i,g,e)
J.bl(w.save())
f=new C.aF(f.r,D.ag,a7,a7,C.a([],x.g))
f.D(new C.jL(C.bY(i,h)))
b1.mK(0,f)
f=C.I()
f.sam(B.eu3.aA(0,C.bY(i,h)))
b1.ad(i,h,f)
d=C.I()
d.r=B.bh1.gp(0)
for(a0=0;a0<4;++a0){u=B.d1a[a0].a
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
for(u=h*0.16,a0=0;a0<3;++a0){q=B.cZ4[a0]
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
w.r=B.bij.gp(0)
b1.ad(a6,h*0.28,w)
w=h*0.05
q=a6.a7(0,new C.t(h*0.08,w))
u=C.I()
u.r=B.afY.gp(0)
b1.ad(q,h*0.07,u)
u=-h
u=a6.a7(0,new C.t(u*0.1,u*0.09))
q=C.I()
q.r=B.afY.gp(0)
b1.ad(u,w,q)},
a3(j3,j4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1,e2,e3,e4,e5,e6,e7,e8,e9,f0,f1,f2,f3,f4,f5,f6,f7,f8,f9,g0,g1,g2,g3,g4,g5,g6,g7,g8,g9,h0,h1,h2,h3,h4,h5,h6,h7,h8,h9,i0,i1,i2,i3,i4,i5,i6,i7,i8,i9,j0=this,j1=null,j2={}
if(j0.z)j0.ciz(j3,j4)
else{w=0+j4.a
v=0+j4.b
$.S()
u=C.I()
t=j0.y
s=C.ar(t,D.c,0.06)
s.toString
u.sam(new C.a9(D.b0,D.b5,D.x,C.a([s,t],x.O),j1,j1).aA(0,new C.a3(0,0,w,v)))
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
i=new A.ctM(m,l,k,j)
h=new A.ctN(j0,i)
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
b0=Math.max(Math.max(w.c*2.4+450,a9),w.y)
b1=C.U(t,s)
b2=C.U(t,t)
b3=B.ha3.gmW(0)
b4=b3.a7(0,B.tm).gmW(0)
b5=C.a([],x.bl)
u=j0.w
b6=u==null?B.Ie:u.$1(j0.gGR(0))
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
c1=new A.ctL(j2,j0,b7,b8,b9,m,l,k,j,c0,o,p,n,a0,a1,b0,r,q,b1,b2,b3.a,b3.b,b3.c,b4.a,b4.b,b4.c,b5)
c2=v.a
c3=c2.length>1500?A.hZJ(v):j1
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
else{e=C.C(e5,x.K)
D.d.v(e,u.$1(j0.gGR(0)))
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
if(D.d.d0(c8,new A.ctF())){c9=C.a([],e)
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
c8=h0.gbv().a.getBounds()
f2=c8[0]
f3=c8[1]
h1=(c8[2]-f2)*(c8[3]-f3)
e7.push(h1)
b5.push(new A.G4(f1.r,f1.w,new A.ctG(j2,j0,f0<e9,h1,e8,f1,c9,h0),h0,D.L,f6-f1.f,f1.b,!1,!1))
continue}h2=new A.ctE(c8)
h3=C.a([],a5)
c8=$.S()
c9=C.a([],a8)
h0=new C.aF(c8.r,D.ag,j1,j1,c9)
for(h4=0;h4<6;h4=h5)for(c8=h4/6,h5=h4+1,f2=h5/6,c4=0;c4<8;c4=h6){f3=c4/8
h6=c4+1
f4=h6/8
h7=C.a([h2.$2(f3,c8),h2.$2(f4,c8),h2.$2(f4,f2),h2.$2(f3,f2)],a4)
if(D.d.b3(h7,new A.ctH()))continue
f3=C.a([],e)
for(a2=0;a2<4;++a2){g2=h7[a2]
f4=g2.c
f3.push(new C.t(o+g2.a*p/f4,n-g2.b*p/f4))}h3.push(new C.b7(c4,h4,f3))
f3=C.C(f3,u)
f3=new C.LN(f3,!0)
c9.push(f3)
f4=h0.f
if(f4!=null)f3.bw(f4)
f3=h0.e
if(f3!=null)f3.a.delete()
h0.e=null}if(h3.length===0)continue
b5.push(new A.G4(f1.r,f1.w,new A.ctI(j0,f1,h3),h0,D.L,f6-f1.f,f1.b,!1,!1))}D.d.aZ(e7,new A.ctJ())
e8[0]=e7.length>6?e7[5]:0
h8=C.dR(b1,t,s)
h9=C.dR(b2,t,t)
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
i2.d=w}D.d.aZ(b5,new A.ctK())
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
t.drawPath((a4==null?e.e=new C.cf(e.gbv().a.snapshot()):a4).a,i6)
i6.delete()
if(!i2.z&&!i2.e){i5.r=s.gp(0)
i6=i5.G()
s=e.e
t.drawPath((s==null?e.e=new C.cf(e.gbv().a.snapshot()):s).a,i6)
i6.delete()}s=i2.y
if(s!==0)w.push(new C.z(e,s))}if(j0.e!==0){$.S()
g7=C.I()
g7.b=D.a9
g7.c=1.4
g7.r=D.c.j(0.35+0.25*Math.sin(j0.gGR(0)*6)).gp(0)
for(u=b5.length,a2=0;a2<b5.length;b5.length===u||(0,C.L)(b5),++a2){i2=b5[a2]
if(i2.Q){s=i2.r
i6=g7.G()
e=s.e
t.drawPath((e==null?s.e=new C.cf(s.gbv().a.snapshot()):e).a,i6)
i6.delete()}}}for(v=v.c,u=v.length,a2=0;a2<v.length;v.length===u||(0,C.L)(v),++a2){i7=v[a2]
g2=h.$1(i7.a)
s=g2.c
if(s<1)continue
e=o+g2.a*p/s
s=n-g2.b*p/s
i8=new C.iN(new C.eu(i7.b,j1,j1,D.cN,j1,j1,j1,j1,j1,j1,new C.F(!0,D.c,j1,j1,j1,j1,11,D.u,j1,j1,j1,j1,j1,j1,j1,j1,j1,j1,j1,j1,j1,j1,j1,j1,j1,j1)),D.a4,D.bY,new C.js(1),j1,j1,j1,j1,D.bW,j1)
i8.ek()
a4=i8.b
a5=a4.c
a4=a4.a.c
i9=C.bs(C.bK(new C.t(e,s),a4.gbb(a4)+8,a5+14),D.hD)
a5=$.S()
a4=new C.ao(D.Q,D.M,D.S,D.T,D.R)
a4.r=i7.c.j(0.92).gp(0)
i6=a4.G()
t.drawRRect(C.e6(i9),i6)
i6.delete()
a4=new C.ao(D.Q,D.M,D.S,D.T,D.R)
a4.b=D.a9
a4.c=1
a4.r=D.ac.gp(0)
i6=a4.G()
t.drawRRect(C.e6(i9),i6)
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
A.cDy.prototype={}
A.G4.prototype={}
A.avB.prototype={
R(){return new A.bsa(new A.bV2(C.a([],x.a6)),new C.eD(0,$.ax()),D.bA,D.I,D.bA,null,null)}}
A.bsa.prototype={
Z(){var w,v=this
v.a2()
A.hFA()
w=v.pS(new A.f2T(v))
w.h7(0)
v.d!==$&&C.aQ()
v.d=w},
q(){var w=this.d
w===$&&C.c()
w.q()
w=this.f
w.T$=$.ax()
w.P$=0
this.byL()},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.a,l=m.as==null,k=l?n:new A.f2K(o)
l=l?n:new A.f2L(o,d)
w=m.c
v=m.d
u=m.e
t=m.r
s=o.f
r=m.w
m=m.x
q=C.a([v,s],x.dS)
p=o.a
q=C.a([C.jk(C.mH(D.iF,new C.er(C.b4(n,n,n,new A.b6x(w,v,o.e,u,t,s,r,m,p.y,p.Q,new C.h8(q)),D.fF),n),n,new A.f2M(o),new A.f2N(o),n,new A.f2O(o),n,n,new A.f2P(o)),D.t,n)],x.p)
o.a.toString
return C.mH(D.iF,C.aA(D.c5,new C.an(D.a_,n,D.b3,D.t,q,n),D.y,!1,n,l,k,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new A.f2Q(o),new A.f2R(o),n,n,n,n,n,n,n,n,n,n,n,!1,D.a3),n,n,n,n,n,n,new A.f2S(o),n)}}
A.PR.prototype={
rX(d,e,f){var w,v,u,t,s,r=this
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
A.cLv.prototype={}
A.aO1.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a5(0,w.gbB())
w.a9$=null
w.a1()},
aU(){this.b1()
this.b0()
this.bC()}}
A.bcd.prototype={}
A.bcy.prototype={}
A.bhH.prototype={}
A.dpf.prototype={}
A.MD.prototype={
PA(d){return this.coR(d)},
coR(e4){var w=0,v=C.j(x.H),u=this,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1,e2,e3
var $async$PA=C.e(function(e6,e7){if(e6===1)return C.f(e7,v)
for(;;)switch(w){case 0:if(e4.getUint32(0,!0)!==1179937895)throw C.W("not a glb file")
for(n=x.c,m=12,l=null,k=null;m+8<=e4.byteLength;){j=e4.getUint32(m,!0)
i=e4.getUint32(m+4,!0)
h=J.eI(D.dK.gaR(e4),e4.byteOffset+m+8,j)
if(i===1313821514)l=n.a(D.X.aM(0,new C.Gq(!1).DK(h,0,null,!0),null))
if(i===5130562)k=h
m+=8+j}if(l==null||k==null)throw C.W("empty glb")
g=new A.djr(l,k)
f=J.a6(l)
e=x.j
d=J.kK(e.a(f.h(l,"nodes")),n)
n=d.a
a0=J.a6(n)
a1=a0.gL(n)
a2=x.S
u.b=C.bZ(a1,-1,!1,a2)
a3=C.a([],x.s)
for(a4=d.$ti,a5=a4.k("bS<c1.E>"),a6=new C.bS(d,d.gL(0),a5),a7=a4.k("c1.E");a6.C();){a8=a6.d
a8=C.aT(J.r(a8==null?a7.a(a8):a8,"name"))
if(a8==null)a8=""
a3.push(a8.toLowerCase())}u.c=a3
u.d=D.d.bh(a3,new A.bTP())
a3=x.gL
a6=C.a([],a3)
for(a5=new C.bS(d,d.gL(0),a5),a8=x.U,a9=x.t;a5.C();){b0=a5.d
if(b0==null)b0=a7.a(b0)
b1=C.a([],a9)
b0=a8.a(J.r(b0,"children"))
b0=J.aW(b0==null?D.cv:b0)
while(b0.C())b1.push(D.k.N(C.e8(b0.gS(b0))))
a6.push(b1)}u.f=a6
for(a5=u.b,b2=0;b2<a1;++b2)for(a7=a6[b2],b0=a7.length,b3=0;b3<b0;++b3)a5[a7[b3]]=b2
a5=C.a([],a9)
a6=e.a(f.h(l,"scenes"))
a7=C.aK(f.h(l,"scene"))
a7=a7==null?null:D.k.N(a7)
a6=J.aW(e.a(J.r(J.r(a6,a7==null?0:a7),"nodes")))
while(a6.C())a5.push(D.k.N(C.e8(a6.gS(a6))))
u.r=a5
a5=a1*3
u.w=new Float64Array(a5)
u.x=new Float64Array(a1*4)
u.y=new Float64Array(a5)
for(a5=x.Y,a4=a4.y[1],b2=0;b2<a1;++b2){b4=a4.a(a0.h(n,b2))
a6=J.a6(b4)
a7=a8.a(a6.h(b4,"translation"))
b5=a7==null?null:J.kK(a7,a5)
if(b5==null)b5=H.arW
a7=a8.a(a6.h(b4,"rotation"))
b6=a7==null?null:J.kK(a7,a5)
if(b6==null)b6=B.c6u
a6=a8.a(a6.h(b4,"scale"))
b7=a6==null?null:J.kK(a6,a5)
if(b7==null)b7=B.cjv
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
for(a3=J.a6(b7),a4=J.aW(e.a(a3.h(b7,"joints")));a4.C();)a0.push(D.k.N(C.e8(a4.gS(a4))))
u.Q.push(a0)
c1=a3.h(b7,"inverseBindMatrices")!=null?g.FB(D.k.N(C.e8(a3.h(b7,"inverseBindMatrices")))).a:null
a3=u.as
a3.push(c1==null?A.hIH(a0.length):c1)}n=a8.a(f.h(l,"animations"))
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
b7=a3.a(a7.h(c4,D.k.N(C.e8(a9.h(c6,"sampler")))))
a9=J.a6(b7)
d0=g.FB(D.k.N(C.e8(a9.h(b7,"input")))).a
d1=g.FB(D.k.N(C.e8(a9.h(b7,"output")))).a
d2=a9.h(b7,"interpolation")
if(d2==null)d2="LINEAR"
d3=b0===1?4:3
a9=J.kW(d2)
if(a9.A(d2,"CUBICSPLINE")){b1=d0.length
d4=new Float64Array(b1*d3)
for(b2=0;b2<b1;++b2)for(b9=b2*d3,c0=(b2*3+1)*d3,b8=0;b8<d3;++b8)d4[b9+b8]=d1[c0+b8]
d1=d4}if(!D.oA.gan(d0)){b1=d0.length
if(b1===0)C.b9(C.fu())
c5=Math.max(c5,d0[b1-1])}c3.push(new A.bcd(c8,b0,d0,d1,a9.A(d2,"STEP")))}d5=C.aT(a5.h(c2,"name"))
if(d5==null)d5="clip"+a0.a
a0.n(0,d5,new A.bcy(c5,c3))}t=C.U(a2,x.c9)
s=0
n=x.H
e="Could not read a picture of "+u.a+": "
case 2:a0=s
a2=a8.a(f.h(l,"images"))
a2=a2==null?null:J.ad(a2)
if(!(a0<(a2==null?0:a2))){w=3
break}r=g.cRv(s)
if(r==null){w=4
break}try{a0=r
d6=C.h9x(a0)
q=d6==null?null:d6.pT(0,a0,null)
if(q!=null){p=q.cK0(D.c9,4)
a0=s
a2=p.a
a2=a2==null?null:a2.a
if(a2==null)a2=0
a3=p.a
a3=a3==null?null:a3.b
if(a3==null)a3=0
d7=p
a4=d7.gr_()
d8=4!==a4?d7.cK_(null,4):d7
a4=d8.a
a4=a4==null?null:a4.bng(d8!==d7,D.Ly)
if(a4==null){a4=d7.a
a4=a4==null?null:J.eS(a4.gaR(a4))
if(a4==null){a4=d7.a
a4=a4==null?null:a4.gaR(a4)
if(a4==null)a4=D.aG.gaR(new Uint8Array(0))
a4=J.eS(a4)}}J.aJ(t,a0,new A.bhH(a2,a3,new Uint8Array(C.cn(a4))))}}catch(e5){o=C.ab(e5)
$.am.$1(e+C.w(o))}w=5
return C.b(C.bP(D.bA,null,n),$async$PA)
case 5:case 4:++s
w=2
break
case 3:e0=u.bSD(l,g,d,t)
w=6
return C.b(C.bP(D.bA,null,n),$async$PA)
case 6:u.at=u.b8X(e0,5000)
w=7
return C.b(C.bP(D.bA,null,n),$async$PA)
case 7:u.ax=u.b8X(e0,1800)
n=u.at
n.r=u.b49(n)
n=u.ax
n.r=u.b49(n)
e1=u.azy(null,0)
e2=u.b71(u.at,e1)
for(n=e2.length,e3=1/0,s=1;s<n;s+=3)e3=Math.min(e3,e2[s])
u.ay=isFinite(e3)?e3:0
return C.h(null,v)}})
return C.i($async$PA,v)},
cqg(d){var w,v,u
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
b49(d){var w,v,u,t,s,r,q,p,o,n,m=d.a.length/3|0,l=new Uint8Array(m)
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
l[t]=o<n.length?this.cqg(n[o]):5}return l},
bSD(e9,f0,f1,f2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1,e2=null,e3="POSITION",e4="JOINTS_0",e5="WEIGHTS_0",e6=J.a6(e9),e7=x.U,e8=e7.a(e6.h(e9,"materials"))
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
for(e6=f1.a,r=J.a6(e6),l=t.a,k=J.a6(l),j=t.$ti.y[1],i=x.N,h=x.A,g=x.fF,f=x.Y,e=x.G,d=v.a,a0=J.a6(d),a1=v.$ti.y[1],a2=u.a,a3=J.a6(a2),a4=u.$ti.y[1],a5=this.ch,a6=f1.$ti.y[1],a7=0;a7<r.gL(e6);++a7){a8=a6.a(r.h(e6,a7))
a9=J.a6(a8)
b0=C.aK(a9.h(a8,"mesh"))
b1=b0==null?e2:D.k.N(b0)
if(b1==null)continue
a9=C.aK(a9.h(a8,"skin"))
b2=a9==null?e2:D.k.N(a9)
for(a9=J.kK(e8.a(J.r(j.a(k.h(l,b1)),"primitives")),w),b0=a9.$ti,a9=new C.bS(a9,a9.gL(0),b0.k("bS<c1.E>")),b3=b2==null,b0=b0.k("c1.E");a9.C();){b4=a9.d
if(b4==null)b4=b0.a(b4)
b5=J.a6(b4)
b6=J.Dm(e.a(b5.h(b4,"attributes")),i,h)
if(b6.h(0,e3)==null||b5.h(b4,"indices")==null)continue
b7=f0.FB(D.k.N(C.e8(b6.h(0,e3)))).a
b8=b7.length/3|0
b9=b6.h(0,e4)!=null?f0.FB(D.k.N(C.e8(b6.h(0,e4)))).a:e2
c0=b6.h(0,e5)!=null?f0.FB(D.k.N(C.e8(b6.h(0,e5)))).a:e2
c1=C.aK(b5.h(b4,"material"))
c2=c1==null?e2:D.k.N(c1)
c1=g.a(J.r(c2!=null?a1.a(a0.h(d,c2)):D.cA,"pbrMetallicRoughness"))
c3=c1==null?e2:J.Dm(c1,i,h)
if(c3==null)c3=D.cA
c1=e7.a(c3.h(0,"baseColorFactor"))
c4=c1==null?e2:J.kK(c1,f)
if(c4==null)c4=B.cjw
c1=g.a(c3.h(0,"baseColorTexture"))
c5=c1==null?e2:J.Dm(c1,i,h)
c1=c5==null
c6=C.aK(c1?e2:c5.h(0,"texCoord"))
c7=c6==null?e2:D.k.N(c6)
c8=b6.h(0,"TEXCOORD_"+(c7==null?0:c7))
c9=c8!=null?f0.FB(D.k.N(C.e8(c8))).a:e2
if(!c1){c1=C.aK(J.r(a4.a(a3.h(a2,D.k.N(C.e8(c5.h(0,"index"))))),"source"))
d0=c1==null?e2:D.k.N(c1)
d1=d0!=null?f2.h(0,d0):e2}else d1=e2
d2=s.length/3|0
D.d.v(s,b7)
for(c1=c0!=null,c6=b9!=null,d3=0;d3<b8;++d3){o.push(b3?255:b2)
for(d4=d3*4,d5=0;d5<4;++d5){q.push(c6?D.k.N(b9[d4+d5]):0)
if(c1)d6=c0[d4+d5]
else d6=d5===0?1:0
p.push(d6)}}d7=f0.FB(D.k.N(C.e8(b5.h(b4,"indices")))).a
for(b4=d7.length,d8=0;b5=d8+2,b5<b4;d8+=3){d9=D.k.N(d7[d8])
e0=D.k.N(d7[d8+1])
e1=D.k.N(d7[b5])
n.push(d2+d9)
n.push(d2+e0)
n.push(d2+e1)
m.push(this.bQJ(d1,c9,d9,e0,e1,c4))}if(b3)a5.push(new C.b7(d2,b8,a7))}}return new A.duN(new Float64Array(C.cn(s)),new Uint16Array(C.cn(q)),new Float64Array(C.cn(p)),new Uint8Array(C.cn(o)),new Int32Array(C.cn(n)),new Int32Array(C.cn(m)))},
bQJ(d,e,f,g,h,i){var w,v,u,t,s,r,q,p=J.a6(i),o=p.h(i,0),n=p.h(i,1),m=p.h(i,2)
if(d!=null&&e!=null){w={}
p=f*2
v=g*2
u=h*2
t=(e[p]+e[v]+e[u])/3
s=(e[p+1]+e[v+1]+e[u+1])/3
r=w.a=w.b=w.c=0
q=new A.bTJ(w,d)
q.$2(t,s)
for(p=[f,g,h];r<3;++r){v=p[r]*2
q.$2((t+e[v])/2,(s+e[v+1])/2)}o*=w.c/4/255
n*=w.b/4/255
m*=w.a/4/255}p=new A.bTI()
return(p.$1(o)<<16|p.$1(n)<<8|p.$1(m)|4278190080)>>>0},
b8X(d7,d8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4={},d5=d7.a,d6=d5.length/3|0
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
f=new A.bTR(d4,d6,d7)
e=new A.bTT(d7)
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
D.jY.ht(b2,0,a5,-1)
b3=new Float64Array(a5)
D.oA.ht(b3,0,a5,1/0)
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
c4=A.hga(c2,c3,b1)
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
b9.bQ(0,new A.bTQ(c7,c0))
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
d0[p]=s[d3]}d1[b1]=u[d2]}return new A.dpf(c8,c9,d0,d1,new Int32Array(C.cn(b8)),c7)},
azy(a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=d.b
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
A.hII(o,r,n)}}m=d.CW.c3(0,"world",new A.bTN(a0.length))
l=new A.bTO(d,v,u,t,new Float64Array(16),m)
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
A.hgb(m,w*16,q[h],f*16,j,i)
i+=16}}for(w=a0.length,p=0;p<a0.length;a0.length===w||(0,C.L)(a0),++p,i=e){e=i+16
D.oA.eo(j,i,e,m,a0[p].c*16)}return j},
b71(b8,b9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=b8.a,b4=b3.length/3|0,b5=new Float64Array(b4*3),b6=C.a([],x.t),b7=this.Q
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
cJp(d,e){var w,v,u=new A.bTW(this)
if(d){w=u.$1("run")
v=w==null?u.$1("walk"):w}else if(e){w=u.$1("walk")
v=w}else{w=u.$1("idle")
if(w==null)w=u.$1("samba")
v=w}if(v!=null)return v
u=u.$1("samba")
if(u==null){u=this.z
u=new C.cx(u,C.a7(u).k("cx<1>")).dL(0,new A.bTU(),new A.bTV(this))}return u},
cWG(b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=this,b4="world",b5={}
if(b6){w=b3.at
w===$&&C.c()
v=w}else{w=b3.ax
w===$&&C.c()
v=w}u=b3.cJp(c0,c5)
w=b3.z.h(0,u)
t=w==null?null:w.b
if(t==null)t=1
if(c5&&c4!=null&&D.a.t(u.toLowerCase(),"walk"))s=c4/50*t
else{w=B.dzw.h(0,b3.a)
s=c2*(w==null?1:w)}w=b3.e
r=w.h(0,u)
if(r==null){b3.azy(u,0)
if(b3.d>=0){q=b3.CW
r=new C.z(q.h(0,b4)[b3.d*16+12],q.h(0,b4)[b3.d*16+14])}else r=D.A2
w.n(0,u,r)}p=b3.azy(u,s)
b5.a=b5.b=0
if(b3.d>=0){w=b3.CW
b5.b=w.h(0,b4)[b3.d*16+12]-r.a
b5.a=w.h(0,b4)[b3.d*16+14]-r.b}o=b3.b71(v,p)
w=b3.a
q=B.dA7.h(0,w)
n=c7+(q==null?0:q)
m=C.iq(v.a.length/3|0,new A.bTZ(b5,b3,o,36,b8,Math.cos(n),Math.sin(n),c6,c8),!0,x.Q)
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
a9=new A.q(a2.a-a4,a5-a6,a2.c-a7).FY(new A.q(a3.a-a4,a8-a6,a3.c-a7)).gmW(0)
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
a5=b2==null?C.b1(h[D.o.ao(a0,3)]):A.i8b(h[D.o.ao(a0,3)],b2)
j.push(new A.kp(a4,a9,a5,b7,0.08,1,!1,0,0,2,q[b0]))}if(e&&f&&w!=="michelle")D.d.v(j,b3.bQK(v,m,n,c1,b7,q[0]))
return j},
bQK(a6,a7,a8,a9,b0,b1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5={}
for(w=a6.a.length/3|0,v=a6.r,u=-1e9,t=1e9,s=0;s<w;++s){v===$&&C.c()
if(v[s]!==0)continue
r=a7[s].b
if(r>u)u=r
if(r<t)t=r}if(u<t)return B.Ie
q=Math.cos(a8)
p=Math.sin(a8)
o=new A.q(p,0,q)
v=-p
n=Math.max(t,u-(u-t)*0.75)
for(m=a6.r,l=0,k=0,j=0,s=0;s<w;++s){m===$&&C.c()
if(m[s]!==0||a7[s].b<n)continue
i=a7[s]
l+=i.a
k+=i.c;++j}if(j===0)return B.Ie
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
d=new A.bTK(a5,new A.q(m,(u+n)/2,i),o,new A.q(q,0,v),e,new A.q(0,1,0))
w=C.ar(a9,B.bjS,0.88)
w.toString
v=C.ar(a9,D.w,0.25)
v.toString
m=C.ar(a9,B.bhE,0.6)
m.toString
a0=C.a([],x.z)
a1=new A.bTM(a0,o,b0,b1)
a2=new A.bTL(a1,d)
for(a3=0;a3<2;++a3){a4=F.ho[a3]
i=a4*0.34
a2.$6(i,0.08,0.2,0.11,D.c,1.2)
a2.$6(i,0.08,0.085,0.085,w,1.6)
g=i-0.22
i+=0.22
f=0.04*a4
a1.$6(d.$2(g,0.33),d.$2(i,0.31+f),d.$2(i,0.25+f),d.$2(g,0.27),w,1.2)}a0.push(new A.kp(C.a([d.$2(0,0.12),d.$2(-0.1,-0.22),d.$2(0.1,-0.22)],x.o),o,v,b0,0,1,!1,0,1.2,2,b1))
a1.$6(d.$2(-0.2,-0.46),d.$2(0.2,-0.46),d.$2(0.17,-0.53),d.$2(-0.17,-0.53),m,1.2)
a1.$6(d.$2(-0.2,-0.46),d.$2(0.2,-0.46),d.$2(0.2,-0.485),d.$2(-0.2,-0.485),w,1.5)
return a0}}
A.duN.prototype={}
A.djr.prototype={
cRv(d){var w,v,u=this.a,t=J.a6(u),s=x.j,r=x.G,q=C.aK(J.r(r.a(J.r(s.a(t.h(u,"images")),d)),"bufferView")),p=q==null?null:D.k.N(q)
if(p==null)return null
w=r.a(J.r(s.a(t.h(u,"bufferViews")),p))
u=J.a6(w)
t=C.aK(u.h(w,"byteOffset"))
v=t==null?null:D.k.N(t)
if(v==null)v=0
return C.ym(this.b,v,v+D.k.N(C.e8(u.h(w,"byteLength"))))},
FB(a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=null,g="byteOffset",f=this.a,e=J.a6(f),d=x.j,a0=x.G,a1=a0.a(J.r(d.a(e.h(f,"accessors")),a5)),a2=J.a6(a1),a3=D.k.N(C.e8(a2.h(a1,"count"))),a4=a2.h(a1,"type")
A:{w=1
if("SCALAR"===a4)break A
if("VEC2"===a4){w=2
break A}if("VEC3"===a4){w=3
break A}if("VEC4"===a4){w=4
break A}if("MAT2"===a4){w=4
break A}if("MAT3"===a4){w=9
break A}if("MAT4"===a4){w=16
break A}break A}v=D.k.N(C.e8(a2.h(a1,"componentType")))
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
m=C.aTt(this.b)
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
A.lH.prototype={}
A.rd.prototype={
gDt(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=1e9,d=-1e9,a0=this.w,a1=a0.length
if(a1===0){a0=this.e
return new C.cy([-a0/2,a0/2,-12,0])}for(w=this.e,v=-w,u=d,t=e,s=u,r=t,q=0;q<a1;++q){p=a0[q]
for(o=p.e,o=[v*o/2,w*o/2],n=p.c,m=p.a,l=p.b,k=0;k<2;++k){j=o[k]
for(i=[-12,0],h=0;h<2;++h){g=A.vE(new A.q(j,0,i[h]),n)
f=g.a+m
r=Math.min(r,f)
s=Math.max(s,f)
f=g.c+l
t=Math.min(t,f)
u=Math.max(u,f)}}}return new C.cy([r,s,t,u])},
gapg(){return this.gDt().a[1]-this.gDt().a[0]},
gGP(){var w=this.w
return w.length===0?this.f:new C.N(w,new A.bI5(this),C.T(w).k("N<1,J>")).f4(0,D.pN)},
gbej(){return this.gDt().a[3]-this.gDt().a[2]},
ga4w(d){return this.w.length===0?0:(this.gDt().a[0]+this.gDt().a[1])/2},
ga4y(){return this.w.length===0?0:(this.gDt().a[2]+this.gDt().a[3])/2},
geg(d){var w=this
return Math.max(Math.max(w.gapg(),w.gbej()),Math.max(w.gGP()*1.3,w.x))*w.y}}
A.Hq.prototype={}
A.aTa.prototype={
bjD(){var w=this
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
if(w!=null)u.n(0,"logo",D.cJ.gct().aO(w))
w=v.r
if(w!=null)u.n(0,"pic",D.cJ.gct().aO(w))
return u},
TX(d){var w,v=this,u=J.a6(d)
v.a=!J.A(u.h(d,"custom"),!0)
w=C.aT(u.h(d,"headline"))
v.b=w==null?"NEW GLOBAL MOVEMENT FOR YOUTH":w
w=C.aT(u.h(d,"subtitle"))
v.c=w==null?"Videos, slides, blogs and books.":w
w=C.aT(u.h(d,"footer"))
v.d=w==null?"ngmy.org":w
w=C.aK(u.h(d,"scheme"))
w=w==null?null:D.k.N(w)
v.e=D.o.E(w==null?0:w,0,5)
v.f=typeof u.h(d,"logo")=="string"?D.cF.aO(C.cP(u.h(d,"logo"))):null
v.r=typeof u.h(d,"pic")=="string"?D.cF.aO(C.cP(u.h(d,"pic"))):null}}
A.bI3.prototype={
cYp(){var w,v,u
for(w=this.b,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].bjD()},
ah(){var w,v,u,t=this.a,s=C.a([],x.c7)
for(w=this.b,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)s.push(w[u].ah())
return C.H(["template",t,"signs",s],x.N,x.A)},
TX(d){var w,v,u,t,s,r,q
this.a=D.d.b3(B.a3x,new A.bI4(d))?C.cP(J.r(d,"template")):"highway"
w=J.r(d,"signs")
if(x.j.b(w)){v=J.a6(w)
u=x.G
t=this.b
s=x.N
r=x.A
q=0
for(;;){if(!(q<6&&q<v.gL(w)))break
if(u.b(v.h(w,q)))t[q].TX(C.a2(u.a(v.h(w,q)),s,r));++q}}else this.b[0].TX(d)}}
A.ho.prototype={}
A.aoL.prototype={
R(){var w=A.hFg()
$.yY()
return new A.aoM(w,new C.ye())}}
A.aoM.prototype={
gip(){var w,v=this.e
if(v===$){w=new A.xi(0.5,0.25,420,B.fZi,$.ax())
w.e=30
w.f=5000
w.z=0.02
w.Q=1.4
w.r9(!0)
this.e!==$&&C.bF()
this.e=w
v=w}return v},
gaxy(){var w=this.r
return w===$?this.r=new A.a5h(this.gc71(),Z.BF):w},
gzy(){return D.d.fY(B.a3x,new A.c45(this))},
Z(){var w=this
w.a2()
w.f=A.h9a(w.gzy(),w.d)
w.abv()
A.hkM().bK(new A.c43(w),x.P)
w.PE()},
q(){this.gaxy().bR(0)
var w=this.gip()
w.T$=$.ax()
w.P$=0
this.a1()},
abv(){var w=this.gzy(),v=this.gip(),u=w.ga4w(0),t=w.gGP(),s=w.ga4y()
v.Np(w.geg(0)*1.9,0.22,new A.q(u,w.r+t/2,s),0.45)},
PE(){var w=0,v=C.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i
var $async$PE=C.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return C.b(C.az(),$async$PE)
case 7:q=e
p=C.aT(J.r(q.a,"ngmy_billboard_studio_v1"))
if(p==null){w=1
break}n=r.d
n.TX(x.c.a(D.X.aM(0,p,null)))
n=n.b,m=n.length,l=0
case 8:if(!(l<n.length)){w=10
break}o=n[l]
i=o
w=11
return C.b(A.afY(o.f),$async$PE)
case 11:i.w=e
i=o
w=12
return C.b(A.afY(o.r),$async$PE)
case 12:i.x=e
case 9:n.length===m||(0,C.L)(n),++l
w=8
break
case 10:if(r.c==null){w=1
break}r.m(new A.c3R(r))
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
return C.i($async$PE,v)},
IW(){var w=0,v=C.j(x.H),u=1,t=[],s=this,r,q,p
var $async$IW=C.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
w=6
return C.b(C.az(),$async$IW)
case 6:r=e
w=7
return C.b(r.au("String","ngmy_billboard_studio_v1",D.X.aq(s.d.ah(),null)),$async$IW)
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
return C.i($async$IW,v)},
c72(){var w,v,u,t,s,r,q,p=this
if(!(p.x>=0)||p.c==null)return
w=p.w.gir()/1000
if(w>=30){p.aBQ(!0)
return}v=A.i9t(p.gzy(),w)
u=v.b
t=u.aE(0,v.a)
s=Math.max(8,t.guW())
r=p.gip()
q=Math.atan2(t.a,-t.c)
r.Np(s,Math.asin(D.k.E(-t.b/s,-1,1)),u,q)
p.m(new A.c3X(p,w))},
br_(){var w,v=this
v.gip().z=-1.4
w=v.w
w.kK(0)
w.h7(0)
v.m(new A.c44(v))
v.gaxy().h7(0)},
aBQ(d){var w,v=this
v.gaxy().bR(0)
w=v.w
if(w.b==null)w.b=$.a9C.$0()
v.gip().z=0.02
v.m(new A.c3U(v,d))
v.abv()},
czH(){return this.aBQ(!1)},
cvC(d){var w=this
w.d.a=d
w.m(new A.c3T(w))
w.abv()
w.IW()},
ZK(d){this.d.b[d].a=!1
this.m(new A.c3r())
this.IW()},
IV(d,e){return this.clh(d,e)},
clh(d,e){var w=0,v=C.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k
var $async$IV=C.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
m=e?400:900
w=7
return C.b(new C.hW().l2(85,m,D.eK),$async$IV)
case 7:q=g
if(q==null){w=1
break}w=8
return C.b(q.fl(),$async$IV)
case 8:p=g
w=9
return C.b(A.afY(p),$async$IV)
case 9:o=g
if(o==null){w=1
break}n=r.d.b[d]
if(e){n.f=p
n.w=o}else{n.r=p
n.x=o}r.ZK(d)
t=2
w=6
break
case 4:t=3
k=s.pop()
if(r.c!=null)r.m(new A.c3S(r))
w=6
break
case 3:w=2
break
case 6:case 1:return C.h(u,v)
case 2:return C.f(s.at(-1),v)}})
return C.i($async$IV,v)},
cBK(){var w=this.c
w.toString
C.bV(D.av,null,new A.c3W(this),w,!0,!0,!0,D.k3,!1,!1,x.H)},
bP0(){var w,v,u,t,s,r,q=this,p={}
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
C.bV(D.av,null,new A.c3P(p,q,new A.c3Q(p,q,t,s,r),t,s,r),w,!0,!0,!0,D.k3,!1,!1,x.H)},
axA(d,e,f,g){var w=null,v=g?f.j(0.3):D.w.j(0.6),u=C.n(20),t=C.K(f,D.r,1)
return C.aA(w,C.p(w,C.d(d,w,w,w,w,w,w,C.l(w,w,f,w,w,w,w,w,w,w,w,13,w,w,D.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),D.f,w,w,new C.o(v,w,t,u,w,w,D.n),w,w,w,w,D.iq,w,w,w),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,e,w,w,w,w,w,w,!1,D.a3)},
axz(d,e,f){return this.axA(d,e,f,!1)},
c70(d,e,f){return this.axA(d,e,D.aJ,f)},
B(d){var w,v,u,t,s,r=this,q=null,p=C.aG(d,q,x.w).w.r,o=r.f
o===$&&C.c()
w=x.p
o=C.a([C.bT(0,A.h5c(E.Bn,r.gip(),q,q,0,q,q,q,o,!0),0,0,0)],w)
if(!(r.x>=0))o.push(C.ap(q,C.B(C.a([C.aA(q,C.p(q,D.a2t,D.f,q,q,new C.o(D.w.j(0.55),q,C.K(D.bU,D.r,1),q,q,q,D.a6),q,40,q,q,q,q,q,40),D.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new A.c4_(d),q,q,q,q,q,q,!1,D.a3),D.as,C.E(C.d("Billboard studio \xb7 "+r.gzy().c,q,q,q,q,q,q,B.fhm,q,q,q),1)],w),D.m,q,D.e,D.i,0,q,q),q,q,8,8,p.b+8,q))
if(r.x>=0&&r.y)o.push(C.bT(0,C.aA(D.c5,q,D.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new A.c40(r),q,q,q,q,q,q,!1,D.a3),0,0,0))
if(!(r.x>=0&&r.y)){v=C.a([],w)
if(r.z.length!==0&&!(r.x>=0)){u=D.dY.j(0.95)
t=C.n(12)
s=C.K(D.bf,D.r,1)
v.push(C.p(q,C.d(r.z,q,q,q,q,q,q,D.UP,q,q,q),D.f,q,q,new C.o(u,q,s,t,q,q,D.n),q,q,q,D.cu,D.bT,q,q,q))}w=C.a([],w)
if(!(r.x>=0))w.push(r.axz("\ud83e\udea7 Choose billboard",r.gcBJ(),F.fA))
if(!(r.x>=0))w.push(r.axz("\u270f\ufe0f Edit",r.gbP_(),D.bf))
if(r.x>=0)w.push(r.axA("\u23f9 Stop the drone",r.gczG(),D.c6,!0))
if(r.x>=0)w.push(r.axz("\ud83d\udc41 Hide everything",new A.c41(r),D.aN))
if(!(r.x>=0))w.push(r.c70("\ud83c\udfac 30 second drone shot",r.gbqZ(),!0))
v.push(C.bX(D.fI,w,D.bq,q,8,8))
o.push(C.ap(p.d+12,C.x(v,D.m,q,D.e,D.O,0,D.p),q,q,10,10,q,q))}return C.c5(q,D.w,new C.an(D.a_,q,D.ab,D.t,o,q),q,!1,!1,q,q)}}
A.FX.prototype={}
A.zc.prototype={}
A.xn.prototype={}
A.aUk.prototype={}
A.a4q.prototype={}
A.ako.prototype={}
A.bMr.prototype={
bzv(d,e){var w,v,u,t,s,r,q,p=this,o=x._,n=C.a([],o)
for(w=p.a.x,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u){t=w[u]
s=t.b
if(s==="house2"||s==="bighouse")n.push(t)}p.b!==$&&C.aQ()
p.b=n
o=C.a([],o)
for(n=w.length,u=0;u<w.length;w.length===n||(0,C.L)(w),++u){t=w[u]
if(D.d.b3(B.Re,new A.bMt(t)))o.push(t)}p.c!==$&&C.aQ()
p.c=o
for(o=p.f,r=0;r<5;++r){q=p.coB()
n=B.dvp[r]
w=B.djA[r]
o.push(new A.aUk(n,w,new A.tO(B.axZ[r],B.Md,w,B.LG,B.doO[r],!1,0,1),58+r*7.5,q.a,q.b,B.aAk))}p.UL(0)},
coB(){var w,v=this.c
v===$&&C.c()
w=v.length
if(w===0)return B.euW
return A.yO(v[this.d.ap(w)])},
cWS(d){var w,v,u,t,s,r,q,p=this,o=C.a([],x._),n=p.c
n===$&&C.c()
w=n.length
v=0
for(;v<n.length;n.length===w||(0,C.L)(n),++v){u=n[v]
t=u.b
if(t==="store"||t==="shop"||t==="gasstation")o.push(u)}if(o.length===0)return
D.d.aZ(o,new A.bMv(p,d))
for(n=p.e,s=0,v=0;v<2;++v){r=B.dnd[v]
q=o[D.o.F(s,o.length)];++s;++p.r
w=new A.xn(r,q,d,r==="medicine"?30:24)
w.w=!0
D.d.c6(n,0,w)}},
UL(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=j.d,h=j.e,g=x._,f=C.T(h).k("Z<1>"),e=0
for(;;){if(new C.Z(h,new A.bMw(),f).gL(0)<7){w=e+1
v=e<30
e=w}else v=!1
if(!v)break
u=B.Re[i.ap(5)]
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
m=A.yO(o)
l=A.yO(n)
k=Math.sqrt(Math.pow(m.a-l.a,2)+Math.pow(m.b-l.b,2));++j.r
h.push(new A.xn(u.a,o,n,6+D.o.E(D.k.V(k/70),0,22)))}},
cYU(d,e,f){if(this.x!=null||e.f!=null||!D.d.t(this.e,e))return!1
e.f=-1
e.x=f
this.x=e
return!0},
a4(d){var w=this.x
if(w==null)return
w.f=null
w.r=!1
this.x=null},
ga6Y(d){var w=this.x
if(w==null)return null
return A.yO(w.r?w.d:w.c)},
bky(d,e,f){var w,v,u,t,s,r,q,p=this,o=p.x
if(o==null)return null
if(f-o.x>360){p.a4(0)
return B.bv6}w=p.ga6Y(0)
if(Math.sqrt(Math.pow(w.a-d,2)+Math.pow(w.b-e,2))>58)return null
if(!o.r){o.r=!0
v=o.b
u=A.L9(v)
v=A.L9(v)
t=B.hC.h(0,o.c.b).a
s=o.w?"hospital":"house"
return new A.ako("pickup",u.b+" You picked up the "+v.c.toLowerCase()+" at the "+t.toLowerCase()+". Now take it to the "+s+".",0)}D.d.W(p.e,o)
p.x=null;++p.z;++p.y
v=p.Q
u=o.e
p.Q=v+u
p.UL(f)
r=A.L9(o.b).b+" Delivered! +"+u+" points."
if(p.y>=8){p.Q+=40
r+=" You won the race with 8 deliveries: +40 points!"
p.aZa()
q=40}else q=0
v=q>0?"won":"delivered"
return new A.ako(v,r,u+q)},
aZa(){var w,v,u;++this.as
this.y=0
for(w=this.f,v=w.length,u=0;u<v;++u)w[u].r=0},
FH(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
for(w=j.f,v=w.length,u=j.e,t=e+2,s=j.d,r=x.C,q=null,p=0;p<w.length;w.length===v||(0,C.L)(w),++p){o=w[p]
n=o.ch
if(n===0){if(e<o.CW)continue
n=C.a([],r)
for(m=u.length,l=0;l<u.length;u.length===m||(0,C.L)(u),++l){k=u[l]
if(k.f==null)n.push(k)}if(n.length===0)continue
D.d.aZ(n,new A.bMs(j,o))
k=n[Math.min(n.length-1,s.ap(3))]
k.f=D.d.cu(w,o)
o.y=k
j.b7z(o,e,1,k.c)}else if(e>=o.Q){if(!o.db){o.e=o.ax
o.f=o.ay
o.db=!0
o.dx=e+(n===1?1.6:1.3)
continue}if(e<o.dx)continue
o.db=!1
m=o.y
m.toString
if(n===1)j.b7z(o,e,2,m.d)
else{D.d.W(u,m)
o.y=null
o.ch=0;++o.w;++o.r
o.x=o.x+m.e
o.CW=t+s.af()*5
j.UL(e)
if(o.r>=8){q=o.a+" won the race with 8 deliveries! A new round starts."
j.aZa()}}}}return q},
aZZ(d,e){return Math.sqrt(Math.pow(e.a-d.e,2)+Math.pow(e.b-d.f,2))},
b7z(d,e,f,g){var w,v,u,t=this,s=A.yO(g),r=B.hC.h(0,g.b),q=g.e*3.141592653589793/2,p=r.d/2-2,o=g.c+Math.sin(q)*p,n=g.d+Math.cos(q)*p
d.ch=f
d.ax=o
d.ay=n
w=t.w
if(w===$){v=new A.bKx(t.a)
v.b__()
t.w!==$&&C.bF()
t.w=v
w=v}u=C.C(w.aoW(new C.z(d.e,d.f),s),x.I)
u.push(new C.z(o,n))
d.cx=u
o=A.ijY(u)
d.cy=o
d.z=e
d.Q=e+Math.max(1,o/d.d)},
amt(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=C.a([],x.D)
for(w=this.f,v=w.length,u=d*2.2,t=0;t<w.length;w.length===v||(0,C.L)(w),++t){s=w[t]
r=s.e
q=s.f
if(s.db)continue
if(s.ch!==0&&d>=s.z&&s.cx.length>1){p=s.z
o=D.k.E((d-p)/Math.max(0.01,s.Q-p),0,1)
n=A.ik3(s.cx,s.cy*o)
r=n.a
q=n.b
m=n.c
l=o<1}else{m=0
l=!1}k.push(new A.a4q(r,q,m,u+s.d,l,s.ch===2,s.c,s.b))}return k},
cYS(){var w,v,u,t,s=C.a([new C.b7("You",this.y,this.Q)],x.aJ)
for(w=this.f,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u){t=w[u]
s.push(new C.b7(t.a,t.r,t.x))}D.d.aZ(s,new A.bMx())
return s},
r0(d,e,f){var w,v,u,t,s=C.a([],x.C)
for(w=this.e,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u){t=w[u]
if(t.f==null)s.push(t)}D.d.aZ(s,new A.bMu(this,e,f))
return s},
aau(d,e,f){return Math.sqrt(Math.pow(f.a-d,2)+Math.pow(f.b-e,2))}}
A.bKx.prototype={
b_2(d){return-this.a.gea(0)/2+8+d*24},
b__(){var w,v,u,t,s=this,r=s.a
s.d=A.hyI(r,null)
s.b=D.k.dd((r.gea(0)-16)/24)+1
w=D.k.dd((r.gh_(0)-10- -750)/24)+1
s.c=w
s.e=C.bZ(s.b*w,!1,!1,x.R)
for(v=0;v<s.b;++v)for(w=v*24,u=0;t=s.c,u<t;++u)s.e[v*t+u]=s.acn(-r.gea(0)/2+8+w,-750+u*24)
s.f=A.heH(r)},
acn(d,e){var w,v,u=this.a
if(d<-u.gea(0)/2+12||d>u.gea(0)/2-12||e<-756||e>u.gh_(0)-14)return!0
u=this.d
u===$&&C.c()
w=u.length
v=0
for(;v<w;++v)if(u[v].aGP(d,e,14))return!0
return!1},
b_0(d,e,f){var w,v,u=e.a,t=f.a-u,s=e.b,r=f.b-s,q=Math.max(1,D.k.dd(Math.sqrt(Math.pow(t,2)+Math.pow(r,2))/8))
for(w=0;w<=q;++w){v=w/q
if(this.acn(u+t*v,s+r*v))return!1}return!0},
b_1(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=d.a,h=j.a,g=D.k.V((i+h.gea(0)/2-8)/24),f=j.b
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
k=Math.pow(-h.gea(0)/2+8+o*24-i,2)+Math.pow(-750+m*24-f,2)
if(k<p){q=new C.z(o,m)
p=k}}if(q!=null)return q}return null},
aoW(d,e){var w,v,u,t,s,r,q,p,o,n,m=this
if(A.heH(m.a)!==m.f)m.b__()
w=m.b_1(d)
v=m.b_1(e)
if(w==null||v==null)return C.a([d,e],x.f)
u=new C.z(m.b_2(w.a),-750+w.b*24)
t=new C.z(m.b_2(v.a),-750+v.b*24)
s=x.f
r=m.acn(d.a,d.b)?C.a([d],s):C.a([],s)
q=m.acn(e.a,e.b)?C.a([e],s):C.a([],s)
p=C.a([],s)
o=r.length===0?d:u
n=q.length===0?e:t
if(m.b_0(0,o,n))D.d.v(p,C.a([o,n],s))
else D.d.v(p,m.cup(w,v,o,n))
s=C.C(r,x.I)
D.d.v(s,p)
D.d.v(s,q)
return s},
cup(a9,b0,b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this,a3=x.t,a4=C.a([],a3),a5=new A.djU(a4,C.a([],x.n)),a6=x.S,a7=C.U(a6,a6),a8=C.U(a6,x.i)
a6=a9.a
w=a2.c
w===$&&C.c()
v=a9.b
u=a6*w+v
t=b0.a
s=b0.b
r=t*w+s
a8.n(0,u,0)
a5.aop(u,a2.c7x(a6,v,b0))
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
a5.aop(e,d+Math.sqrt(Math.pow(v,2)+Math.pow(h-s,2)))}}}if(!q)return C.a([b1,b2],x.f)
a0=C.a([r],a3)
while(a7.aj(0,D.d.gak(a0))){a3=a7.h(0,D.d.gak(a0))
a3.toString
a0.push(a3)}a3=x.f
a4=C.a([b1],a3)
for(a6=x.c5,w=new C.dw(a0,a6),w=new C.bS(w,w.gL(0),a6.k("bS<ak.E>")),v=a2.a,a6=a6.k("ak.E");w.C();){t=w.d
if(t==null)t=a6.a(t)
s=a2.c
g=D.o.eb(t,s)
a4.push(new C.z(-v.gea(0)/2+8+g*24,-750+D.o.F(t,s)*24))}a4.push(b2)
a1=C.a([D.d.gI(a4)],a3)
for(j=0;h=a4.length-1,j<h;j=h){a3=j+1
for(;;){if(!(h>a3&&!a2.b_0(0,a4[j],a4[h])))break;--h}a1.push(a4[h])}return a1},
c7x(d,e,f){return Math.sqrt(Math.pow(d-f.a,2)+Math.pow(e-f.b,2))}}
A.djU.prototype={
gcm(d){return this.a.length!==0},
aop(d,e){var w,v,u,t=this.a
t.push(d)
w=this.b
w.push(e)
v=t.length-1
for(;v>0;v=u){u=D.o.ao(v-1,2)
if(w[u]<=w[v])break
this.b8f(v,u)}},
eM(){var w,v,u,t,s,r=this.a,q=D.d.gI(r),p=r.pop(),o=this.b,n=o.pop()
if(r.length!==0){r[0]=p
o[0]=n
for(w=0;;w=s){v=2*w+1
u=v+1
t=r.length
s=v<t&&o[v]<o[w]?v:w
if(u<t&&o[u]<o[s])s=u
if(s===w)break
this.b8f(w,s)}}return q},
b8f(d,e){var w,v=this.a,u=v[d]
v[d]=v[e]
v[e]=u
v=this.b
w=v[d]
v[d]=v[e]
v[e]=w}}
A.aTG.prototype={
bk_(d,e,f){var w,v,u,t,s=this,r=null,q=s.d
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
a7_(d){return this.bk_(d,!1,!1)}}
A.aYX.prototype={
B(d){var w,v,u,t,s,r=null,q=D.k.E(this.c,0,1)
if(q>0.5)w=D.be
else w=q>0.25?D.bu:D.ax
v=C.a([],x.p)
u=this.d
v.push(new C.D(D.qh,C.d(this.e,r,r,r,r,r,r,C.l(r,r,r,r,r,r,r,r,r,r,r,u,r,r,r,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),r))
t=C.n(u/3)
s=C.K(D.ac,D.r,1.5)
v.push(C.E(C.p(r,new C.bM(D.a5,r,r,C.Bx(D.A,C.c3(r,new C.o(w,r,r,C.n(u/4),r,r,D.n),D.bh),1,q),r),D.f,r,r,new C.o(D.aS,r,s,t,r,r,D.n),r,u,r,r,D.nt,r,r,r),1))
v.push(C.p(r,r,D.f,r,r,new C.o(D.ac,r,r,C.n(1),r,r,D.n),r,u*0.45,r,B.bBn,r,r,r,3))
return C.B(v,D.m,r,D.e,D.O,0,r,r)}}
A.Uw.prototype={
B(d){return new C.ty(new A.c1H(this),null,this.c,null)}}
A.rQ.prototype={}
A.Sz.prototype={
gL(d){return this.a==="bus"?120:95.94999999999999}}
A.aTF.prototype={}
A.bxs.prototype={
bAB(d,e,f,g){var w,v,u,t,s,r,q,p,o,n,m
for(w=this.e,v=this.f,u=0;u<4;++u){t=B.kp[u]
s=A.fpV(t).a[1]
r=new A.fiF(this,t)
q=0
for(;;){if(!(r.$1(q)&&q<s))break;++q}for(p=-1,o=0,n=0;n<s;++n){m=D.o.F(q+n,s)
if(r.$1(m)){if(p<0)p=m;++o}else if(p>=0)break}w.push(p)
v.push(o)}}}
A.bKz.prototype={
kK(d){var w,v,u,t
for(w=this.a,v=this.b,u=0;u<4;++u){w[u]=B.kp[u].r
v[u]=0}t=this.c=0
for(w=$.h06();t<2;++t)w[t].r=-1},
FH(d,e){var w,v,u,t=this
if(e<t.c-0.0001)t.kK(0)
w=t.c
if(e-w>90){w=e-2
t.c=w}for(v=e-1e-9;w<v;){u=Math.min(0.05,e-w)
t.czw(u)
w=t.c+=u}},
czw(b8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7=this
for(w=$.h06(),v=b7.a,u=0;u<2;++u){t=w[u]
s=t.r
if(s<0)continue
r=A.fpV(B.kp[s]).a[1]
q=D.k.F(v[s]-t.e[s],r)
if(q<0)q+=r
if(q>=t.f[s]&&q<r/2)t.r=-1}for(w=b7.b,p=110*b8,o=40*b8,n=0;n<4;++n){m=B.kp[n]
r=A.fpV(m).a[1]
l=m.a==="bus"
k=(l?120:95.94999999999999)/2
j=new A.bKA()
for(i=34,h=0;h<4;++h){if(h===n||D.o.ao(n,2)!==D.o.ao(h,2))continue
g=D.k.F(v[h]-v[n],r)
if(g<0)g+=r
g-=k+(B.kp[h].a==="bus"?120:95.94999999999999)/2
if(g<400)i=Math.min(i,C.jf(j.$1(g-18)))}for(f=$.bFR(),e=f.length,d=r-30,u=0;u<f.length;f.length===e||(0,C.L)(f),++u){a0=f[u]
if(a0.a!==D.o.ao(n,2))continue
a1=A.h9M(a0,b7.c)
if(a1===0)continue
a2=D.k.F(a0.b-(v[n]+k),r)
if(a2<0)a2+=r
if(a2>d)continue
if(a2<260)a3=!(a1===1&&a2<w[n]*1.2)
else a3=!1
if(a3)i=Math.min(i,C.jf(j.$1(a2-4)))}for(f=$.h06(),u=0;u<2;++u){t=f[u]
a4=t.e[n]
if(a4<0)continue
e=v[n]
a2=D.k.F(a4-e,r)
if(a2<0)a2+=r
if(D.k.F(e-a4,r)<t.f[n]){if(t.r<0)t.r=n
continue}if(t.r===n)continue
e=w[n]
for(d=$.bFR(),a3=d.length,a5=b7.c,a6=!1,a7=0;a7<a3;++a7){a0=d[a7]
if(a0.a!==D.o.ao(n,2)||A.h9M(a0,a5)===0)continue
a8=D.k.F(a0.b-(v[n]+k),r)
if((a8<0?a8+r:a8)<a2)a6=!0}if(t.r<0&&a2<40+e*e/220+20&&!a6){t.r=n
continue}if(a2<400)i=Math.min(i,C.jf(j.$1(a2-10)))}f=A.Le(m,v[n]).a
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
a5=Math.abs(-b3*b2+b4*b1)<a5/2+16}if(a5)i=Math.min(i,C.jf(j.$1(b5-k-10)))}b6=w[n]
l=b6<i?Math.min(i,b6+o):Math.max(i,b6-p)
w[n]=l
if(l<0){w[n]=0
l=0}v[n]=v[n]+l*b8}},
cWL(d,e,f){this.FH(0,f)
return A.Le(B.kp[e],this.a[e])},
cRn(d,e){var w,v,u,t,s,r,q,p,o,n,m,l
for(w=this.a,v=this.b,u=0;u<4;++u){if(v[u]<4)continue
t=B.kp[u]
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
A.Aj.prototype={
ga8p(){var w=this.d,v=w.e*3.141592653589793/2,u=Math.sin(v),t=Math.cos(v),s=this.r-1
return new C.z(w.c+u*42-t*s*24,w.d+t*42+u*s*24)}}
A.cAZ.prototype={
bAq(d,e){var w,v,u,t,s=this,r=x._,q=C.a([],r)
for(w=s.a.x,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u){t=w[u]
if(t.b==="ubstation")q.push(t)}s.c!==$&&C.aQ()
s.c=q
r=C.a([],r)
for(q=w.length,u=0;u<w.length;w.length===q||(0,C.L)(w),++u){t=w[u]
v=t.b
if(v==="house2"||v==="bighouse")r.push(t)}s.d!==$&&C.aQ()
s.d=r
s.UL(0)},
UL(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.d
f===$&&C.c()
if(f.length===0)return
w=g.c
w===$&&C.c()
v=w.length
u=g.b
t=g.e
s=C.T(t)
r=s.k("Z<1>")
s=s.k("cQ<1,G>")
q=s.k("M.E")
p=0
for(;p<w.length;w.length===v||(0,C.L)(w),++p){o=w[p]
n=C.pY(q)
n.v(0,new C.cQ(new C.Z(t,new A.cB0(o),r),new A.cB1(),s))
for(m=0;m<3;++m){if(n.t(0,m))continue
l=g.f
k=l==null
if((k?null:l.d)===o)l=(k?null:l.r)===m
else l=!1
if(l)continue
l=g.x++
j=f[u.ap(f.length)]
i=A.yO(j)
h=Math.sqrt(Math.pow(o.c-i.a,2)+Math.pow(o.d-i.b,2))
l=new A.Aj(l,B.dk5[u.ap(12)],new A.tO(B.axZ[u.ap(5)],B.Md,B.ds9[u.ap(6)],D.aK,"human",!1,0,1),o,j,6+D.o.E(D.k.V(h/45),0,30),m)
l.x=d
t.push(l)}}},
aqB(d,e){var w,v,u,t=this.c
t===$&&C.c()
w=t.length
v=0
for(;v<t.length;t.length===w||(0,C.L)(t),++v){u=t[v]
if(Math.sqrt(Math.pow(u.c-d,2)+Math.pow(u.d-e,2))<150)return u}return null},
cWw(d,e){var w,v,u,t,s,r,q=this
if(q.f!=null)return null
w=q.aqB(d,e)
if(w==null)return null
v=C.a([],x.bz)
for(u=q.e,t=u.length,s=0;s<u.length;u.length===t||(0,C.L)(u),++s){r=u[s]
if(r.d===w)v.push(r)}if(v.length===0)return null
D.d.aZ(v,new A.cB_())
r=D.d.gI(v)
D.d.W(u,r)
return q.f=r},
ga6Y(d){var w=this.f
return w==null?null:A.yO(w.e)},
cOj(d,e,f){var w,v,u=this,t=u.f,s=u.ga6Y(0)
if(t==null||s==null)return 0
if(Math.sqrt(Math.pow(s.a-d,2)+Math.pow(s.b-e,2))>70)return 0
u.f=null;++u.r
w=u.w
v=t.f
u.w=w+v
u.y=f+4
u.UL(f)
return v},
amt(d){var w,v,u,t,s,r,q,p
if(d<this.y)return B.Id
w=C.a([],x.D)
for(v=this.e,u=v.length,t=d*1.4,s=0;s<v.length;v.length===u||(0,C.L)(v),++s){r=v[s]
q=r.d
p=r.c
w.push(new A.a4q(r.ga8p().a,r.ga8p().b,Math.atan2(q.c-r.ga8p().a,q.d-r.ga8p().b)+3.141592653589793,t+r.a,!1,!1,p,p.c))}return w}}
A.pE.prototype={}
A.bKl.prototype={
gM7(){var w,v=this,u=v.r
if(u===$){w=A.hzK(v.b)
v.r!==$&&C.bF()
v.r=w
u=w}return u},
cck(){var w,v=this.a
A:{if("hospital"===v){w=B.cxJ
break A}if("dmv"===v){w=B.dsv
break A}if("shop"===v){w=B.cY3
break A}if("school"===v){w=B.d6s
break A}if("firestation"===v){w=B.dlL
break A}if("tower"===v){w=B.dfT
break A}w=B.dqu
break A}return w},
cHf(){var w,v=this.a
A:{if("hospital"===v){w=B.cxF
break A}if("dmv"===v){w=B.d8q
break A}if("shop"===v){w=B.d3_
break A}if("school"===v){w=B.dfD
break A}if("firestation"===v){w=B.dcD
break A}if("tower"===v){w=B.duY
break A}w=B.cXx
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
t=p.c88(q,e)}if(t!=null)p.B(e)
return t},
c88(d,e){var w,v,u,t,s,r=this,q="The city is still loading.",p="The breaker panel on level "
switch(r.a){case"hospital":if(e==null)return q
if(d===0){w=e.gC7()
v=C.T(w).k("Z<1>")
u=C.C(new C.Z(w,new A.bKm(),v),v.k("M.E"))
if(u.length===0)return"The desk: nobody needs the hospital right now. "+e.x+" doses of medicine in stock."
return e.aDC(D.d.gI(u))}t=d-1
if(e.e[t].a<0)return"This bed is empty. Admit someone at the desk first."
return e.bkd(t)
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
return"You taught the class a lesson. +3 points. "+B.a4e[D.o.F(w==null?0:w,5)]}w=e==null?null:e.r
return"The library: "+B.a4e[D.o.F(w==null?1:w,5)]
case"firestation":if(d===0){if(e!=null)e.r+=2
return"You checked the equipment with the firefighters. +2 points. Keep the extinguishers charged."}w=e==null?null:e.r
return"Fire drill: "+B.a4e[D.o.F((w==null?0:w)+1,5)]
case"tower":if(d===0){r.w=!0
return"The elevator: choose your level (you are on level "+r.f+" of "+r.gM7()+")."}if(d===2){r.x=!0
return"The balcony on level "+r.f+": the whole town is below you."}if(r.c){r.cy=!0
return p+r.f+". This office has no power. Let us find the wiring fault."}return p+r.f+": every breaker is on and the office has power."
default:if(d===0){if(r.c){r.cy=!0
return"The breaker panel. This house has no power. Let us find the wiring fault."}return"The breaker panel: every breaker is on and the house has power."}return r.c?"The outlet is dead: there is no power in this house.":"The outlet works. Everything here is wired right."}},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this
g.ch=d
w=g.a
if(w==="cabin"){g.bF9()
return}v=C.a([],x.z)
u=new A.fm(v)
t=C.a([],x.E)
A:{if("hospital"===w){s=B.eG3
break A}if("shop"===w){s=B.ezS
break A}if("dmv"===w){s=B.eCf
break A}if("school"===w){s=B.eTr
break A}if("firestation"===w){s=B.eH4
break A}if("tower"===w){s=new C.z(g.c?B.agb:B.bsb,B.bhe)
break A}s=new C.z(g.c?B.agb:B.bq0,B.iz)
break A}r=s.a
u.f=-1
u.mi(B.h8M,B.h6T,s.b,0.2,3)
u.f=0
u.x=$.dS=$.dS+1
u.hs(B.h62,B.aXm,r,3)
u.x=0
u.x=$.dS=$.dS+1
u.hs(B.h4P,B.ab4,r,3)
u.x=0
s=w==="tower"
if(s){u.f=3
u.d=0.18
u.aJ(B.aXy,B.ab4,B.Z9)
u.d=1
u.f=0}else{u.x=$.dS=$.dS+1
u.hs(B.aXy,B.ab4,r,3)
u.x=0}u.f=0
q=s&&g.f>1
p=$.dS+1
if(q){u.x=$.dS=p
u.hs(B.h77,B.aXm,r,3)
u.x=0}else{u.x=$.dS=p
u.hs(new A.q(-94,70,320.6),new A.q(113.2,140,1.2),r,2)
u.x=0
u.x=$.dS=$.dS+1
u.hs(new A.q(94,70,320.6),new A.q(113.2,140,1.2),r,2)
u.x=0
u.x=$.dS=$.dS+1
u.aJ(new A.q(0,102,320.6),new A.q(76,76,1.2),r)
u.x=0
u.x=$.dS=$.dS+1
u.aV(B.h9T,B.hf4,B.bcE,0.5)
u.x=0}u.f=1
for(o=0;o<3;++o){n=B.dms[o]
u.aJ(new A.q(n,78,0.6),B.heE,B.kF)
u.aV(new A.q(n,78,0.8),B.h56,B.i1,0.6)}for(q=!s,o=0;o<2;++o){m=B.cF4[o]
u.aJ(new A.q(-149.6,78,m),B.aXd,B.kF)
u.aV(new A.q(-149.2,78,m),B.aXP,B.i1,0.6)
if(q){u.aJ(new A.q(149.6,78,m),B.aXd,B.kF)
u.aV(new A.q(149.2,78,m),B.aXP,B.i1,0.6)}}u.aJ(B.h9Z,B.hf3,B.kF)
u.aJ(B.ha9,B.h2I,D.bO)
u.f=2
u.r=!0
for(q=w!=="house2",p=w==="bighouse",o=0;o<3;++o){n=B.dmT[o]
for(l=0;l<2;++l){m=B.cF5[l]
u.dE(new A.q(n,138,m),new A.q(n,122,m),0.5,D.jf,4)
k=(!q||p||s)&&g.c?D.hj:B.o5
u.ed(new A.q(n,120,m),5,k,3,6)}}switch(w){case"hospital":g.c_H(u,t,d)
break
case"shop":g.cwe(u,t)
break
case"dmv":g.bNP(u,t)
break
case"school":g.ctV(u,t)
break
case"firestation":g.czs(u,t)
break
case"tower":g.cDy(u,t)
break
default:u.f=1
u.aJ(B.hgf,B.hbo,g.c?B.q9:B.agz)
u.f=2
u.aV(B.hdE,B.h0f,B.Yo,0.1)
u.aV(B.hdF,B.h0g,B.M2,0.1)
u.aV(B.h_X,B.h4w,B.nU,0.2)
u.aV(B.h6h,B.hfU,E.Fx,0.4)
u.aJ(B.h0G,B.h1h,B.ahj)
u.ed(B.hd6,10,B.F6,3,6)
g.bb5(u,t)}u.f=1
if(s&&g.f>1)t.push(B.c1f)
else{u.aJ(B.hap,B.h7H,D.cT)
t.push(B.c1e)}if(d!=null){w=d.r
k=d.w
j=d.x
i=g.cx!=null?"   \ud83d\udce6 carrying":""
t.push(new A.hh(B.fZl,"\u2b50 "+w+"   \ud83c\udf5e "+k+"   \ud83d\udc8a "+j+i,D.N,0))}h=C.a([],x.a)
if(s){u.f=2
u.e=0
u.aV(B.h0a,B.aXh,D.av,0.3)
u.aV(B.h6n,B.aXh,D.av,0.3)
u.aV(B.hai,B.heH,D.av,0.3)
w=x.o
h.push(new A.fP(C.a([B.h5Q,B.haK,B.h9G,B.hcu],w),0,new A.bKt(g),960,560,60,2,0,!1))
h.push(new A.fP(C.a([B.h3c,B.hgm,B.h2f,B.heC],w),0,new A.bKu(g),960,560,60,2,0,!1))
h.push(new A.fP(C.a([B.heo,B.fZ0,B.h5b,B.h7R],w),0,new A.bKv(g),960,560,60,2,0,!1))}if((!q||p)&&!g.c)h.push(new A.fP(C.a([B.hbc,B.h73,B.h9L,B.h9F],x.o),0,new A.bKw(g),960,480,60,2,0,!1))
g.ay=new A.tU(v,B.Sk,t,h,null,0)},
rz(d,e,f,g,h){var w=d.f
d.f=1
d.dE(new A.q(e,0.2,f),new A.q(e,0.6,f),g,h,20)
d.f=w},
c_H(d,e,f){var w,v,u,t,s,r,q,p,o
d.f=1
d.aJ(B.aWh,B.h2U,D.bz)
d.aJ(B.aWh,B.h0q,D.bz)
d.f=2
d.aV(B.he0,B.h5C,B.nU,0.15)
d.aV(B.he1,B.h5V,D.bN,0.3)
d.aJ(B.hd3,B.h4L,D.aJ)
this.rz(d,-80,66,22,D.co)
e.push(B.c1l)
e.push(B.c1a)
for(w=0;w<2;++w)d.aJ(new A.q(-105,8,B.cfD[w]),B.h48,D.bs)
d.ed(B.h0N,9,B.F6,3,6)
for(v=f!=null,u=0;u<3;++u){t=48+u*50
d.aJ(new A.q(76,8,t),B.h5z,D.cq)
d.aJ(new A.q(76,14,t),B.h5u,D.aP)
d.aJ(new A.q(108,18,t),B.h0L,D.c)
s=v&&u<f.e.length?f.e[u]:null
if(s!=null&&s.a>=0){r=f.c
r===$&&C.c()
q=r[s.a]
r=s.b>70?D.bf:D.c6
d.aJ(new A.q(54,24,t),B.h2X,r)
r=s.b>70
p=r?"cared for":"needs treatment"
r=r?D.ej:D.bz
e.push(new A.hh(new A.q(76,40,t),q.a.b+"  "+p,r,0))}else e.push(new A.hh(new A.q(76,30,t),"Free bed "+(u+1),D.bs,0))
r=t-2
o=d.f
d.f=1
d.dE(new A.q(20,0.2,r),new A.q(20,0.6,r),16,D.aB,20)
d.f=o}},
bNP(d,e){var w,v,u,t,s
d.f=2
d.r=!0
d.x=$.dS=$.dS+1
d.aV(B.aW8,B.h0X,D.bs,0.15)
d.aV(B.aWa,B.h0Z,D.bN,0.3)
d.aV(B.hdy,B.h24,D.av,0.3)
d.aV(B.hcG,B.h6Q,D.b8,0.5)
d.aJ(B.hdx,B.h4N,D.aK)
d.aJ(B.h2O,B.h1g,D.bu)
d.x=0
d.x=$.dS=$.dS+1
d.aJ(B.aWL,B.aWk,D.cr)
d.aJ(B.aWH,B.aWp,D.bl)
d.ed(B.aWI,5.5,B.afx,5,8)
d.ed(B.aWJ,5.7,D.av,3,8)
d.x=0
d.x=$.dS=$.dS+1
d.aJ(B.hda,B.h3j,D.aP)
for(w=0;w<3;++w){v=90+w*30
d.aE_(new A.q(-146,62,v),B.h1G,[D.bz,D.bu,D.bl][w],0)
d.aJ(new A.q(-145.6,62,v),B.hey,D.c)}d.aJ(B.h10,B.h3i,D.fU)
d.aJ(B.h9g,B.hfl,D.c)
d.aJ(B.h8s,B.hec,D.bz)
d.x=0
for(u=0;u<4;++u){t=B.dmt[u]
d.x=$.dS=$.dS+1
d.aJ(new A.q(t,9,150),B.h2a,D.bl)
d.aJ(new A.q(t,17,160),B.h25,D.bl)
d.aJ(new A.q(t-8,4,150),B.aWD,D.aK)
d.aJ(new A.q(t+8,4,150),B.aWD,D.aK)
d.x=0}d.x=$.dS=$.dS+1
d.aJ(B.h_o,B.h4Y,D.bM)
d.aV(B.fZs,B.h3Y,D.ax,0.4)
d.aV(B.hdK,B.h2q,D.du,0.5)
for(u=0;u<2;++u){t=E.aAN[u]
for(s=0;s<2;++s){v=B.cfw[s]
d.dE(new A.q(t,9,v-1.5),new A.q(t,9,v+1.5),5,D.av,8)}}d.x=0
this.rz(d,0,78,24,D.aJ)
e.push(B.c1i)
e.push(B.c1b)
e.push(B.c1j)},
aVp(a5,a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=a6*128
A:{if(1===a7){w=B.dbF
break A}if(2===a7){w=B.dd2
break A}w=B.d6J
break A}a5.x=$.dS=$.dS+1
a5.aJ(new A.q(a6*148,40,120),B.h3N,B.afu)
for(v=0;v<2;++v)a5.aJ(new A.q(a4,40,B.cJi[v]),B.h3u,B.afu)
a5.aJ(new A.q(a4,4,120),B.h3v,B.bjm)
for(u=0;u<4;++u)a5.aV(new A.q(a4,11+u*18,120),B.h3r,B.bsJ,0.1)
for(t=a7===0,s=w.length,r=a6*2.7,u=0;u<4;++u){q=12+u*18
for(p=q+6.6,o=q+3.2,n=u*7,m=q+10,l=q+12.5,k=q+7,j=q+8,i=q+2.5,h=q+5.5,g=0;g<9;++g){f=76+g*11
for(e=n+g*3,d=u+g+a7,a0=0;a0<2;++a0){a1=a6*(114+a0*14)
a2=w[D.o.F(e+a0*5+a7,s)]
switch(D.o.F(d+a0,4)){case 0:a5.dR(new A.q(a1,q,f),new A.q(a1,j,f),3.2,a2,0.3,8)
a5.L8(new A.q(a1,i,f),new A.q(a1,h,f),3.3,D.c,!1,8)
break
case 1:a5.aV(new A.q(a1,k,f),B.h7x,a2,0.1)
a5.aJ(new A.q(a1-r,j,f),B.hb4,D.c)
break
case 2:a5.dR(new A.q(a1,q,f),new A.q(a1,m,f),2.4,a2,0.45,8)
a5.dE(new A.q(a1,m,f),new A.q(a1,l,f),1.2,D.c,6)
break
default:a3=t?B.bsQ:a2
a5.aV(new A.q(a1,o,f),B.has,a3,0.05)
a3=t?B.bfQ:D.c
a5.aJ(new A.q(a1,p,f),B.h6c,a3)}}}}a5.x=0},
aUm(d,e){var w,v,u,t,s,r,q,p
d.x=$.dS=$.dS+1
d.aV(new A.q(e,32,11),B.h49,D.bO,0.3)
d.aJ(new A.q(e,33,22.4),B.h3Z,D.bo)
for(w=e-21,v=0;v<3;++v){u=v*17
d.aJ(new A.q(e,15+u,21),B.h3U,D.bM)
for(t=16+u,u=27+u,s=v*2,r=0;r<7;++r){q=w+r*7
d.dR(new A.q(q,t,21.6),new A.q(q,u,21.6),2.2,B.d1b[D.o.F(r+s,6)],0.5,6)}}d.x=0
p=d.f
d.f=3
d.d=0.2
d.aJ(new A.q(e,33,23.2),B.hg_,B.Z9)
d.d=1
d.f=p},
cwe(d,e){var w,v,u,t,s,r,q,p,o,n=this,m=n.b.b==="gasstation"
d.f=2
d.r=!0
d.x=$.dS=$.dS+1
d.aV(B.aW8,B.h0F,B.nU,0.15)
d.aV(B.aWa,B.h0H,D.bN,0.3)
d.aJ(B.h7l,B.hfv,B.bsX)
d.aV(B.hds,B.h1U,D.e7,0.3)
d.aV(B.hdu,B.h1i,D.b8,0.5)
d.aJ(B.h_f,B.h0r,D.av)
for(w=0;w<6;++w)d.aJ(new A.q(14+w*7.5,33,47),B.h4o,B.dsc[D.o.F(w,4)])
d.x=0
d.x=$.dS=$.dS+1
d.aJ(B.aWL,B.aWk,D.cr)
d.aJ(B.aWH,B.aWp,D.cT)
d.aJ(B.haB,B.h8L,D.vS)
d.ed(B.aWI,5.5,B.afx,5,8)
d.ed(B.aWJ,5.7,B.bgZ,3,8)
d.x=0
n.aVp(d,-1,0)
n.aVp(d,1,m?2:1)
n.aUm(d,-104)
n.aUm(d,104)
for(v=[B.eAg,B.ePC],u=0;u<2;++u){t=v[u]
s=t.a
r=t.b
d.x=$.dS=$.dS+1
d.aJ(new A.q(s,5,170),B.h38,B.ahj)
d.aJ(new A.q(s,11,160),B.h3a,B.bk6)
for(t=s-13.5,q=J.a6(r),w=0;w<4;++w)for(p=t+w*9,o=0;o<3;++o)d.ed(new A.q(p,12.5,163+o*7.5),4.2,q.h(r,D.o.F(w+o,3)),4,6)
d.x=0}d.x=$.dS=$.dS+1
d.aJ(B.aW4,B.h0y,m?D.bz:D.cT)
d.aJ(B.hd2,B.aWA,D.aB)
d.aJ(B.h0A,B.aWA,m?D.bo:D.aJ)
d.x=0
n.rz(d,-64,120,24,D.bu)
n.rz(d,64,120,24,D.br)
n.rz(d,0,84,22,D.be)
e.push(new A.hh(B.fZf,m?"\u26fd NGMY Gas shop":"\ud83d\uded2 NGMY Mart",D.N,0))
e.push(B.c1c)
e.push(new A.hh(B.h5y,m?"\ud83d\udee2 For the car":"\ud83d\udc8a Medicine and health",D.iT,0))
e.push(B.c1m)
e.push(B.c1d)
e.push(B.c1n)},
ctV(d,e){var w,v,u,t,s
d.aV(B.h_S,B.hgC,D.dY,0.1)
d.aJ(B.hfi,B.hbP,B.box)
d.aV(B.fZu,B.h0O,B.nU,0.15)
for(w=0;w<4;++w){v=B.dex[w]
u=v.a
t=v.b
for(s=0;s<2;++s){v=u+B.a54[s]
d.aJ(new A.q(v,10,t),B.h1Y,B.iz)
d.aJ(new A.q(v,5,t),B.h2v,D.bm)}}this.rz(d,0,80,24,D.bu)
this.rz(d,90,56,20,D.co)
e.push(B.c18)
e.push(B.c1g)},
czs(d,e){var w,v,u,t,s
d.aV(B.fZo,B.h1v,D.bz,0.3)
d.aV(B.hdP,B.h4u,D.bz,0.3)
for(w=0;w<2;++w){v=B.dmP[w]
for(u=0;u<2;++u){t=B.ctD[u]
d.dE(new A.q(v,6,t-1.5),new A.q(v,6,t+1.5),8,D.ni,10)}}for(s=0;s<5;++s)d.aJ(new A.q(-142,30,110+s*18),B.h0s,D.al)
d.dE(B.h0w,B.h0x,2,D.bu,6)
this.rz(d,-60,130,24,D.aB)
this.rz(d,80,56,20,D.co)
e.push(B.c16)
e.push(B.c1h)},
cDy(d,e){var w,v,u,t,s,r,q,p,o,n=this
d.f=1
d.aJ(B.heY,B.h8Q,B.dtv[D.o.F(n.f,5)])
d.f=2
d.b=19502
d.aJ(B.h6G,B.h5D,D.N)
d.aV(B.h4g,B.aWX,D.bs,0.5)
d.aV(B.h2C,B.aWX,D.bs,0.5)
d.aV(B.h35,B.h0i,D.bs,0.5)
d.e=16
d.aV(B.h03,B.h65,D.b8,0.4)
d.aJ(B.h7w,B.h3n,D.av)
d.aJ(B.hcF,B.h0p,D.e7)
d.ed(B.h7f,2,D.bu,3,5)
d.ed(B.h3J,2,D.be,3,5)
d.b=d.e=0
n.rz(d,0,70,26,D.aJ)
for(w=0;w<3;++w){v=B.cXC[w]
u=v.a
t=v.b
d.aV(new A.q(u,15,t),B.h3x,B.nU,0.2)
d.aJ(new A.q(u-19,7,t),B.aWO,D.jf)
d.aJ(new A.q(u+19,7,t),B.aWO,D.jf)
d.aV(new A.q(u,24,t-4),B.h11,E.Fx,0.5)
d.aJ(new A.q(u,9,t+18),B.h18,D.cr)
d.aJ(new A.q(u,16,t+25),B.h13,D.cr)}n.rz(d,105,100,26,D.be)
d.d=0.3
d.f=3
d.aJ(new A.q(144,14,100),B.h3K,B.Z9)
d.d=1
d.f=2
for(w=0;w<5;++w)d.aV(new A.q(144,14,B.d4J[w]),B.h97,D.dt,0.5)
d.ed(B.h0Q,10,B.F6,3,6)
d.aJ(B.h0J,B.h2R,B.nU)
s=-(n.f*22)
d.f=-1
d.aJ(new A.q(520,s-1,105),B.h5T,B.XB)
d.aJ(B.h4Z,B.h2y,B.i1)
d.f=1
for(v=n.b.a,r=v*7,q=0;q<15;++q){p=30+D.o.F(r+q*13,90)
o=B.da_[D.o.F(v+q,4)]
d.aJ(new A.q(215+D.o.F(q,5)*80,s+p/2,-60+D.o.ao(q,5)*135),new A.q(38,p,38),o)}e.push(new A.hh(B.fZd,"\ud83c\udfe2 LEVEL "+n.f+" of "+n.gM7(),D.dF,19502))
e.push(B.c17)
e.push(B.c19)
n.bb5(d,e)},
bF9(){var w,v,u,t=C.a([],x.z),s=new A.fm(t)
s.f=-1
s.aV(B.h8e,B.hf8,D.bs,0.3)
s.f=0
s.x=$.dS=$.dS+1
s.aV(B.hdA,B.aWz,B.ag2,0.4)
s.x=0
s.x=$.dS=$.dS+1
s.aV(B.h37,B.aWz,B.ag2,0.4)
s.x=0
s.f=1
s.aJ(B.fZa,B.h54,D.aN)
s.f=2
s.r=!0
for(w=0;w<2;++w)s.aV(new A.q(B.aAP[w],40,38),B.h7O,D.bM,0.7)
s.aV(B.h04,B.hc8,D.xV,0.2)
for(w=0;w<2;++w)s.aV(new A.q(B.dmB[w],45,80),B.h1t,D.aK,0.3)
s.aV(B.h01,B.h53,D.aK,0.3)
s.aJ(B.h_H,B.h33,D.al)
s.aV(B.hfu,B.aXE,D.av,0.3)
s.aV(B.h8z,B.aXE,D.av,0.3)
v=this.as
D.d.aa(v)
u=x.o
v.push(new A.fP(C.a([B.h9k,B.h7u,B.hb3,B.heN],u),0,new A.bKn(this),520,230,6,2,0,!1))
v.push(new A.fP(C.a([B.h63,B.h6l,B.heB,B.hbv],u),0,new A.bKo(),720,600,30,2,0,!1))
v.push(new A.fP(C.a([B.h9h,B.hcE,B.hag,B.h8P],u),0,new A.bKp(),720,600,30,2,0,!1))
v=C.C(v,x.K)
this.ay=new A.tU(t,B.Sk,B.zu,v,null,0)},
bb5(d,e){var w,v,u,t,s,r,q,p,o=this,n="dead, tap to fix it"
d.b=19500
d.aV(B.hd9,B.h4n,B.XF,0.5)
for(w=0;w<4;++w){v=o.c&&w===0?D.cd:B.Zc
d.aJ(new A.q(-144.2,62-w*6,45),B.h8_,v)}d.b=0
o.rz(d,-100,100,22,o.c?D.ax:D.be)
o.rz(d,90,100,22,D.co)
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
d.aJ(B.h3H,B.h1L,o.c?D.ax:D.be)
d.b=19501
d.aJ(B.h5W,B.h6A,t?D.be:D.ax)
d.aJ(B.hdS,B.h6Z,s?D.be:D.ax)
d.aJ(B.h81,B.ha7,r?D.be:D.ax)
d.d=1
d.aV(B.hcQ,B.h7c,B.ME,0.25)
for(q=0;q<2;++q)for(u=26+F.ho[q]*3.4,p=0;p<2;++p)d.aJ(new A.q(95+B.Rm[p],u,2.6),B.h8X,B.ah5)
d.aV(B.hf_,B.haR,B.ME,0.25)
d.aJ(new A.q(-60,s?52:48,2.8),B.h2x,B.aiU)
d.b=0
d.f=2
if(o.c)v=v.length===0?"\u26a1 Breaker panel: tap to switch the power on":"\u26a1 Breaker panel: still to fix: "+D.d.aG(v,", ")
else v="\u26a1 Breaker panel: all fine"
e.push(new A.hh(B.hd8,v,o.c?D.bz:D.ej,19500))
v=new A.bKq(o)
u=t?"\ud83d\udd0c Outlets: fixed":"\ud83d\udd0c Outlet: "+C.w(v.$2(D.a34,n))
e.push(new A.hh(B.h5X,u,t?D.ej:D.bz,19501))
u=s?"\ud83d\udca1 Switch: fixed":"\ud83d\udca1 Switch: "+C.w(v.$2(B.crt,"no power, tap to fix it"))
e.push(new A.hh(B.hdT,u,s?D.ej:D.bz,19501))
v=r?"\ud83d\udca1 Ceiling light: fixed":"\ud83d\udca1 Ceiling light: "+C.w(v.$2(B.ck_,n))
e.push(new A.hh(B.fZe,v,r?D.ej:D.bz,19501))
if(o.c)e.push(B.c15)},
cOn(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=x.z,i=C.a([],j),h=new A.fm(i),g=k.a,f=g==="tower"
if(f||g==="cabin"){w=C.a([],j)
v=new A.fm(w)
if(f){v.e=16
for(u=0;u<2;++u)v.aV(new A.q(F.ho[u]*(24+21*k.y),42,6.6),B.heA,D.aP,0.7)}else{v.e=16
for(u=0;u<2;++u)v.aV(new A.q(F.ho[u]*(9+18*k.y),40,78.6),B.h1s,D.aN,0.7)}D.d.v(i,w)}switch(g){case"shop":A.wO(h,B.eqJ,d,B.Jo,!1,0,D.b6)
break
case"hospital":A.wO(h,B.eqN,d,B.Tp,!1,0,D.bP)
t=D.k.F(d*12,220)
g=t<110
f=g?t:220-t
g=g?0:3.141592653589793
A.wO(h,A.atT(!1,0,-1,"",!1,0,"",-1,t/12,!1,!1,!1,0,!1,!0,6,g,40+f),d,B.Jo,!1,0,D.bO)
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
A.wO(new A.fm(f),B.eqM,d,p,!1,0,p.c)
D.d.v(i,A.nE(f,-1.5707963267948966,-1.5707963267948966,new A.q(46,27,48+r*50)))}++r}}break
case"school":A.wO(h,B.eqO,d,B.Tp,!1,0,D.bl)
for(u=0;u<3;++u){g=B.d8i[u]
A.wO(h,new A.y5(0,g.a,g.b,3.141592653589793,!1,!1,!1,!1,!1,0,!1,!1,"","",-1,0,-1,0),d,B.Jo,!1,0,g.c)}break
case"firestation":A.wO(h,B.eqK,d,B.Jo,!1,0,D.bz)
A.wO(h,B.eqL,d,B.Tp,!1,0,D.aB)
break
default:break}g=k.at
g===$&&C.c()
f=g.f
w=g.r
o=g.w
n=g.x
m=g.y
l=g.z&&n
A.wO(h,A.atT(!1,0,-1,"",!1,g.Q,"",-1,m,!1,!1,!1,0,l,n,f,o,w),d,e,!0,0,null)
if(k.cx!=null){j=C.a([],j)
new A.fm(j).aJ(new A.q(g.f+Math.sin(g.w)*9,48+g.Q,g.r+Math.cos(g.w)*9),B.aWq,B.iz)
D.d.v(i,j)}return i},
gdc(d){return this.e}}
A.Fq.prototype={}
A.P1.prototype={
gUp(){var w,v=this
if(!v.f)return"has died"
if(v.r>=0)return"in hospital"
if(v.c<30)return"in danger"
if(v.e)return"sick"
w=v.b
if(w>80)return"starving"
if(w>55)return"hungry"
if(v.d<40)return"unhappy at home"
return"fine"},
gaDV(d){var w,v=this.gUp()
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
A.aU4.prototype={
bzt(d,e){var w,v=C.a([],x.fP)
for(w=0;w<7;++w)v.push(new A.P1(B.CN[w]))
this.c=v
v[1].b=55
v[4].b=40},
gC7(){var w,v,u,t=C.a([],x.fP),s=this.c
s===$&&C.c()
w=s.length
v=0
for(;v<s.length;s.length===w||(0,C.L)(s),++v){u=s[v]
if(u.f)t.push(u)}return t},
gcNi(){var w=this.c
w===$&&C.c()
return new C.Z(w,new A.bLa(),C.T(w).k("Z<1>")).gL(0)},
PR(d){var w=this.f
D.d.c6(w,0,d)
if(w.length>12)w.pop()},
aDD(a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this
a1.as+=a3
for(w=a1.gC7(),v=w.length,u=-0.6*a3,t=0.8*a3,s=0.2*a3,r=a1.b,q=0.012*a3,p=a1.f,o=0.15*a3,n=0;n<w.length;w.length===v||(0,C.L)(w),++n){m=w[n]
l=a4.d
l===$&&C.c()
k=m.a
j=l[k.c]
i=j.gkO()
l=k.d
if(l>=0)h=!a4.d[l].gjR()
else{l=j.c
h=(l==="bathroom"||l==="kitchen")&&!j.gjR()}if(m.r<0){m.b=Math.min(100,m.b+s)
l=i?0:45
g=h?35:0
f=m.d
f+=D.k.E(100-l-g-f,u,t)
m.d=f
if(!m.e)l=(f<40||m.b>85)&&r.af()<q
else l=!1
if(l){m.e=!0
D.d.c6(p,0,k.b+" has fallen sick. Give medicine, or send them to the hospital.")
if(p.length>12)p.pop()}e=m.b>=95?0.9:0
if(m.e)e+=0.55
if(m.d<15)e+=0.4
if(e>0)l=m.c=m.c-e*a3
else{l=m.c
if(l<100){l=Math.min(100,l+o)
m.c=l}}if(l<=0)a1.aSq(m)}}for(w=a1.e,v=1.2*a3,u=2.2*a3,d=0;d<w.length;++d){a0=w[d]
t=a0.a
if(t<0)continue
s=a1.c
s===$&&C.c()
m=s[t]
if(!m.f){a0.a=-1
continue}t=a0.b=Math.max(0,a0.b-a3)
if(t>30)a0.c=Math.min(100,a0.c+u)
else if(t<=0)if((m.c-=v)<=0){a1.aSq(m)
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
a1.NE(a4)
if((a1.at-=a3)<=0){a1.at=60+r.af()*50
a1.cIH(a4)}},
aSq(d){var w
d.f=!1
d.c=0
w=d.r
if(w>=0)this.e[w].a=-1
d.r=-1
D.d.bs(this.d,new A.bL7(d))
this.PR(d.a.b+" has died. Keep up with everybody's needs: food, medicine and a home that works.")},
aWd(d,e){return D.d.b3(this.d,new A.bL8(d,e))},
NE(d){var w,v,u,t,s,r,q,p,o,n=this,m=n.d,l=C.C(m,x.fC),k=l.length,j=n.f,i=0
for(;i<l.length;l.length===k||(0,C.L)(l),++i){w=l[i]
v=B.CN[w.b]
u=w.c==="power"
if(u){t=d.d
t===$&&C.c()
s=t[v.c].gkO()}else{t=v.d
r=d.d
if(t>=0){r===$&&C.c()
t=r[t].gjR()
s=t}else{r===$&&C.c()
t=r[v.c].gjR()
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
if(!p.gkO()&&!n.aWd(r.a,"power")){m.push(new A.I7(n.Q++,r.a,"power",B.d0Z[u.ap(3)],15))
D.d.c6(j,0,r.b+" is calling for help: no power.")
if(j.length>12)j.pop()}t=r.d
o=t>=0?d.d[t]:p
t=o.c
if((t==="bathroom"||t==="kitchen")&&!o.gjR()&&!n.aWd(r.a,"leak")&&m.length<4){m.push(new A.I7(n.Q++,r.a,"leak",B.d9P[u.ap(3)],15))
D.d.c6(j,0,r.b+" is calling for help: a leak.")
if(j.length>12)j.pop()}}},
cIH(d){var w,v,u,t,s,r,q=this
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
if((u==="bathroom"||u==="kitchen")&&r.gjR()&&w.h5()){r.ch=!0
r.fr=null}else if(s.gkO()){s.ay=!0
s.CW=null
s.fy=!1
s.fx.aa(0)}else return
q.NE(d)},
bf3(d){var w,v,u,t=this
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
t.PR(u)
return u},
aL1(d){var w,v,u=this
if(!d.f)return d.a.b+" has died."
if(!d.e)return d.a.b+" is not sick."
w=u.x
if(w<=0)return y.D
u.x=w-1
d.e=!1
d.c=Math.min(100,d.c+20)
u.r+=3
v=d.a.b+" took the medicine and is better. +3 points."
u.PR(v)
return v},
aDC(d){var w,v,u,t
if(!d.f)return d.a.b+" has died."
if(d.r>=0)return d.a.b+" is already in hospital."
if(!d.e&&d.c>60)return d.a.b+" is not ill enough for the hospital."
w=this.e
v=D.d.bh(w,new A.bL9())
if(v<0)return"The hospital is full. Treat the patients first, they go home when they are better."
w=w[v]
u=d.a
w.a=u.a
w.b=100
w.c=0
d.r=v
t=u.b+" is in bed "+(v+1)+" of the hospital. Keep up with their care."
this.PR(t)
return t},
bkd(d){var w,v,u=this,t=u.e[d],s=t.a
if(s<0)return"This bed is empty."
if(t.b>70)return"The patient is cared for already."
w=u.x
if(w<=0)return y.D
u.x=w-1
t.b=100;++u.r
w=u.c
w===$&&C.c()
v=w[s].a.b+" was treated. +1 point."
u.PR(v)
return v},
aE7(d){var w,v=this
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
cSm(d){return d.r<0},
bfe(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=C.a([],x.e3),e=d.d
e===$&&C.c()
w=e[a0]
if(w.c!=="outside")return f
v=new A.bLc(new A.bLe(w))
for(e=D.d.gag(this.gC7()),u=new C.f2(e,this.gcSl()),t=this.d,s=0;u.C();){r=e.gS(0)
q=D.d.b3(t,new A.bLb(r))
p=v.$2(r,s).a
o=p[0]
n=p[1]
m=p[2]
l=p[3]
k=p[4]
p=r.a
j=q?0.4:m
i=q?"\ud83d\udcde ":""
h=r.gaDV(0)
r.gUp()
r=q?"":l
g=q?"":k
f.push(new A.aa2(p.a,a0,o,n,j,p.e,i+p.b+" "+h,q,0,r,g));++s}return f},
cZe(a2){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.r,j=l.w,i=l.x,h=l.y,g=l.z,f=l.as,e=l.Q,d=x.ez,a0=C.a([],d),a1=l.c
a1===$&&C.c()
w=a1.length
v=x.N
u=x.aU
t=0
for(;t<a1.length;a1.length===w||(0,C.L)(a1),++t){s=a1[t]
a0.push(C.H(["hunger",s.b,"health",s.c,"comfort",s.d,"sick",s.e,"alive",s.f,"bed",s.r],v,u))}a1=C.a([],x.f4)
for(w=l.e,r=w.length,q=x.Y,t=0;t<w.length;w.length===r||(0,C.L)(w),++t){p=w[t]
a1.push(C.H(["res",p.a,"care",p.b,"heal",p.c],v,q))}d=C.a([],d)
for(w=l.d,r=w.length,t=0;t<w.length;w.length===r||(0,C.L)(w),++t){o=w[t]
d.push(C.H(["id",o.a,"res",o.b,"kind",o.c,"msg",o.d,"reward",o.e,"age",o.f],v,u))}w=x.R
u=C.U(v,w)
for(r=a2.gqT(),q=r.length,t=0;t<r.length;r.length===q||(0,C.L)(r),++t){n=r[t]
u.n(0,""+n.a,n.gkO())}w=C.U(v,w)
for(r=D.d.gag(a2.gqT()),q=new C.f2(r,new A.bLf());q.C();){m=r.gS(0)
w.n(0,""+m.a,m.gjR())}return C.H(["v",1,"seed",l.a,"points",k,"food",j,"medicine",i,"served",h,"saved",g,"clock",f,"nextCall",e,"res",a0,"beds",a1,"calls",d,"wired",u,"plumbed",w],v,x.A)},
CX(d,e){return this.bol(0,e)},
bol(d,e){var w=0,v=C.j(x.H),u=1,t=[],s=this,r,q,p,o
var $async$CX=C.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return C.b(C.az(),$async$CX)
case 6:r=g
q=C.dR(s.cZe(e),x.N,x.A)
J.aJ(q,"at",Date.now())
w=7
return C.b(r.au("String","ngmy_community_v1",D.X.aq(q,null)),$async$CX)
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
A.apL.prototype={
R(){return new A.bkT()}}
A.bkT.prototype={
gbjY(){var w=this.r
return w===$?this.r=this.a.c:w},
Z(){this.a2()
this.a_3()},
a_3(){return this.c2D()},
c2D(){var w=0,v=C.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$a_3=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:m={}
w=3
return C.b(A.aU6(),$async$a_3)
case 3:l=e
if(t.c==null){w=1
break}m.a=null
if(l!=null){s=J.a6(l)
r=C.aK(s.h(l,"seed"))
q=r==null?null:D.k.N(r)
if(q==null)q=1
r=$.Ec
if((r==null?null:r.b)===q){r.toString
t.e=r}else{r=A.aWy(q)
t.e=$.Ec=r
A.heU(r,l)}m.a=A.h12(l)
r=Date.now()
s=C.aK(s.h(l,"at"))
s=s==null?null:D.k.N(s)
p=D.k.E((r-(s==null?Date.now():s))/1000*0.15,0,90)
while(p>0){o=p>5?5:p
s=m.a
r=t.e
r===$&&C.c()
s.aDD(0,o,r)
p-=o}}else{s=$.Ec
if(s==null)s=$.Ec=A.aWy(D.o.F(Date.now(),1e5))
t.e=s
s=s.b
n=A.h11(s,s)
m.a=n
n.NE(t.e)}$.a4i=m.a
t.m(new A.dSv(m,t))
t.f=C.dh(D.fB,new A.dSw(t))
case 1:return C.h(u,v)}})
return C.i($async$a_3,v)},
c8d(){var w,v,u,t=this,s=t.d
if(s==null||t.c==null)return
w=s.f
v=w.length===0?"":D.d.gI(w)
u=t.e
u===$&&C.c()
s.aDD(0,1,u)
if(w.length!==0&&D.d.gI(w)!==v)t.J5(D.d.gI(w))
if(++t.y%8===0)s.CX(0,t.e)
t.m(new A.dSI())},
q(){var w,v=this,u=v.f
if(u!=null)u.a4(0)
u=v.x
if(u!=null)u.a4(0)
u=v.d
if(u!=null){w=v.e
w===$&&C.c()
u.CX(0,w)}v.a1()},
J5(d){var w=this,v=w.x
if(v!=null)v.a4(0)
w.m(new A.dSC(w,d))
w.x=C.cG(D.u6,new A.dSD(w))},
abW(d){return this.bUa(d)},
bUa(d){var w=0,v=C.j(x.H),u,t=this,s,r,q
var $async$abW=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:q=B.CN[d.b]
if(d.c==="power")s=q.c
else{r=q.d
s=r>=0?r:q.c}r=t.e
r===$&&C.c()
r.e=s
r=t.c
r.toString
w=3
return C.b(C.a4(r,!1).cc(C.eh(new A.dSr(),!1,null,x.H)),$async$abW)
case 3:if(t.c==null){w=1
break}r=t.d
if(r!=null)r.NE(t.e)
r=t.d
if(r!=null)r.CX(0,t.e)
t.m(new A.dSs())
case 1:return C.h(u,v)}})
return C.i($async$abW,v)},
akc(d){return this.cG7(d)},
cG7(d){var w=0,v=C.j(x.H),u,t=this,s
var $async$akc=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:s=t.e
s===$&&C.c()
s.e=d.a.c
s=t.c
s.toString
w=3
return C.b(C.a4(s,!1).cc(C.eh(new A.dSL(),!1,null,x.H)),$async$akc)
case 3:if(t.c==null){w=1
break}s=t.d
if(s!=null)s.NE(t.e)
t.m(new A.dSM())
case 1:return C.h(u,v)}})
return C.i($async$akc,v)},
a_4(d,e){var w=null,v=e.j(0.18),u=C.n(14),t=C.K(e.j(0.7),D.r,1)
return C.p(w,C.d(d,w,w,w,w,w,w,C.l(w,w,e,w,w,w,w,w,w,w,w,12.5,w,w,D.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),D.f,w,w,new C.o(v,w,t,u,w,w,D.n),w,w,w,w,N.ak0,w,w,w)},
WE(d,e,f){var w=null
return new C.D(D.np,C.B(C.a([new C.a5(62,w,C.d(d,w,w,w,w,w,w,A6.a9Y,w,w,w),w),C.E(C.bx(C.n(6),C.kx(D.bC,w,w,8,w,D.k.E(e/100,0,1),new C.ma(f,x.dw)),D.ap),1)],x.p),D.m,w,D.e,D.i,0,w,w),w)},
PS(d,e,f){var w=null,v=e==null,u=v?D.dq:f.j(0.22),t=C.n(12),s=C.K(v?D.aX:f,D.r,1)
return C.aA(w,C.p(w,C.d(d,w,w,w,w,w,w,C.l(w,w,v?D.bU:f,w,w,w,w,w,w,w,w,12.5,w,w,D.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),D.f,w,w,new C.o(u,w,s,t,w,w,D.n),w,w,w,w,D.nr,w,w,w),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,e,w,w,w,w,w,w,!1,D.a3)},
aes(d,e){return this.PS(d,e,D.aB)},
PT(d,e){var w=null,v=C.a([e.j(0.1),B.FC],x.O),u=C.n(18)
return C.p(w,d,D.f,w,w,new C.o(w,w,C.K(e.j(0.5),D.r,1),u,w,new C.a9(D.b0,D.b5,D.x,v,w,w),D.n),w,w,w,D.d0,D.bg,w,w,w)},
c89(d){return this.PT(d,D.aX)},
b_b(d,e,f){var w,v=null,u=this.gbjY()===d,t=u?D.aB.j(0.22):D.c.j(0.06),s=C.n(14),r=u?D.aB:D.aX
r=C.K(r,D.r,u?2:1)
w=f>0?e+" ("+f+")":e
return C.E(C.aA(v,C.p(v,C.as(C.d(w,v,v,v,v,v,v,C.l(v,v,u?D.aB:D.ac,v,v,v,v,v,v,v,v,12.5,v,v,D.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,v),D.f,v,v,new C.o(t,v,r,s,v,v,D.n),v,v,v,D.jz,D.jR,v,v,v),D.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new A.dSK(this,d),v,v,v,v,v,v,!1,D.a3),1)},
axL(d,e){return this.b_b(d,e,0)},
bGP(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=d.d
if(l.length===0)return new C.D(D.eu,C.x(B.dj_,D.m,m,D.e,D.i,0,D.p),m)
w=x.p
v=C.a([],w)
for(u=l.length,t=0;t<l.length;l.length===u||(0,C.L)(l),++t){s=l[t]
r=s.c==="power"
q=r?D.bu:D.co
p=B.CN[s.b]
o=r?"\u26a1 Power":"\ud83d\udeb0 Leak"
r=r?D.bu:D.co
v.push(n.PT(C.x(C.a([new C.cd(D.aM,D.e,D.i,D.m,m,D.p,m,0,C.a([new A.acN(p.e,44,m),D.as,new C.bA(1,D.bd,new C.y(p.b,m,D.hr,m,m,m,m,m,m,m,m,m),m),n.a_4(o+"  +"+s.e,r)],w),m),D.P,new C.y('"'+s.d+'"',m,B.fpa,m,m,m,m,m,m,m,m,m),D.W,new C.bM(D.a8,m,m,n.aes("\ud83d\udd27 Go and fix it",new A.dSq(n,s)),m)],w),D.E,m,D.e,D.i,0,D.p),q))}return C.x(v,D.m,m,D.e,D.i,0,D.p)},
c8b(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=x.p,k=C.a([],l),j=d.c
j===$&&C.c()
w=j.length
v=0
for(;v<j.length;j.length===w||(0,C.L)(j),++v){u=j[v]
t=u.f
if(!t)s=D.aX
else s=u.gUp()==="fine"?D.bf:D.c6
t=t?1:0.5
r=u.a
q=u.gaDV(0)
p=u.gUp()
o=u.gUp()==="fine"?D.es:D.eP
r=C.a([new C.cd(D.aM,D.e,D.i,D.m,m,D.p,m,0,C.a([new A.acN(r.e,50,m),D.as,new C.bA(1,D.bd,C.x(C.a([new C.y(r.b+"  "+q,m,D.hr,m,m,m,m,m,m,m,m,m),new C.y(r.f,m,B.aT8,m,m,m,m,m,m,m,m,m),new C.y("Now: "+p,m,new C.F(!0,o,m,m,m,m,12.5,D.H,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m,m,m,m,m,m,m)],l),D.E,m,D.e,D.i,0,D.p),m)],l),m),D.P,n.WE("Food",100-u.b,D.cL),n.WE("Health",u.c,D.bf),n.WE("Home",u.d,D.co)],l)
if(u.f){q=n.aes("\ud83c\udf5e Feed",new A.dSx(n,d,u))
p=n.PS("\ud83d\udc8a Medicine",u.e?new A.dSy(n,d,u):m,D.br)
D.d.v(r,C.a([D.am,new C.CB(D.bG,8,8,D.bq,C.a([q,p,n.PS("\ud83c\udfe5 Hospital",u.r>=0?m:new A.dSz(n,d,u),D.c6),n.PS("\ud83c\udfe0 Visit",new A.dSA(n,u),D.b_)],l),m)],l))}k.push(n.PT(new C.kB(t,C.x(r,D.E,m,D.e,D.i,0,D.p),m),s))}return C.x(k,D.m,m,D.e,D.i,0,D.p)},
c8a(d){var w,v,u,t,s=null,r=x.p,q=C.a([B.ems],r)
for(w=d.e,v=0;v<w.length;++v){u=w[v].a<0
t=u?D.aX:D.c6
q.push(this.PT(u?new C.cd(D.aM,D.e,D.i,D.m,s,D.p,s,0,C.a([B.fOO,D.as,new C.y("Bed "+(v+1)+": empty",s,B.fiB,s,s,s,s,s,s,s,s,s)],r),s):new C.fe(new A.dSu(this,d,v),s),t))}return C.x(q,D.m,s,D.e,D.i,0,D.p)},
c8c(d){var w=this,v=null,u=x.p,t=w.PT(C.B(C.a([B.fAa,D.as,B.bFr,w.aes("Buy",new A.dSF(w,d))],u),D.m,v,D.e,D.i,0,v,v),D.cL),s=w.PT(C.B(C.a([B.fVU,D.as,B.bFH,w.PS("Buy",new A.dSG(w,d),D.br)],u),D.m,v,D.e,D.i,0,v,v),D.br),r=C.a([B.fPP,D.am,C.d("Calls answered: "+d.y+"\nPatients sent home better: "+d.z+"\nPeople lost: "+d.gcNi(),v,v,v,v,v,v,B.aU8,v,v,v)],u)
if(d.gC7().length===0)D.d.v(r,C.a([D.W,w.aes("Start a new community",new A.dSH(w))],u))
return C.x(C.a([t,s,w.c89(C.x(r,D.E,v,D.e,D.i,0,D.p))],u),D.m,v,D.e,D.i,0,D.p)},
B(d){var w,v,u,t,s,r,q=this,p=null,o=q.d
if(o==null)w=D.m_
else{w=x.p
v=C.B(C.a([C.aH(p,p,p,p,T.nx,p,p,p,new A.dSN(d),p,p,p,p,p,p),B.bF8,q.a_4("\u2b50 "+o.r,D.aB)],w),D.m,p,D.e,D.i,0,p,p)
u=q.a_4("\ud83c\udf5e "+o.w,D.cL)
t=q.a_4("\ud83d\udc8a "+o.x,D.br)
s=o.e
s=C.B(C.a([u,D.ad,t,D.ad,q.a_4("\ud83c\udfe5 "+new C.Z(s,new A.dSO(),C.T(s).k("Z<1>")).gL(0)+"/"+s.length,D.c6)],w),D.m,p,D.b9,D.i,0,p,p)
t=C.B(C.a([q.b_b("calls","\ud83d\udcde Calls",o.d.length),q.axL("people","\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc67 People"),q.axL("hospital","\ud83c\udfe5 Hospital"),q.axL("shop","\ud83d\uded2 Shop")],w),D.m,p,D.e,D.i,0,p,p)
r=q.gbjY()
A:{if("people"===r){u=q.c8b(o)
break A}if("hospital"===r){u=q.c8a(o)
break A}if("shop"===r){u=q.c8c(o)
break A}u=q.bGP(o)
break A}w=C.a([new C.D(B.bDx,v,p),new C.D(D.BN,s,p),new C.D(B.alI,t,p),D.P,C.E(C.cl(C.a([u],w),p,p,D.Gh,p,p,D.ah,!1),1)],w)
if(q.w!=null){v=D.dY.j(0.96)
u=C.n(14)
t=C.K(D.bf,D.r,1)
s=q.w
s.toString
w.push(C.p(p,C.d(s,p,p,p,p,p,p,B.fle,p,p,p),D.f,p,p,new C.o(v,p,t,u,p,p,D.n),p,p,p,H.ak3,D.bg,p,p,1/0))}w=C.x(w,D.m,p,D.e,D.i,0,D.p)}return C.c5(p,D.c1,C.bm(!0,w,!0,!1,D.af,!0,!0),p,!1,!1,p,p)}}
A.acN.prototype={
B(d){var w=null,v=this.d
return new C.a5(v,v,C.b4(w,w,w,new A.bfD(this.c,w),D.aw),w)},
gY(d){return this.d}}
A.bfD.prototype={
a3(d,e){var w,v,u,t,s=e.a,r=s/2,q=$.S(),p=C.I()
p.r=D.dq.gp(0)
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
t.r=D.ni.gp(0)
d.ad(new C.t(s*0.42,r),q,t)
t=C.I()
t.r=D.ni.gp(0)
d.ad(new C.t(s*0.58,r),q,t)
t=s*0.4
q=C.I()
q.b=D.a9
q.c=1.4
q.r=D.ek.gp(0)
d.e3(new C.a3(t,w,t+s*0.2,w+s*0.12),0.2,2.7,!1,q)
p.restore()},
av(d){return!1}}
A.fl.prototype={}
A.CA.prototype={}
A.iP.prototype={}
A.Ms.prototype={}
A.axO.prototype={
gjP(){return this.a==="ok"}}
A.mg.prototype={}
A.fp.prototype={}
A.E8.prototype={}
A.pT.prototype={}
A.abL.prototype={}
A.oq.prototype={}
A.aWs.prototype={
gwG(){var w=this.c
return w.c>=2&&A.La(A.t6(this.a),w).a==="ok"},
gdc(d){return this.c}}
A.a5m.prototype={
gz8(){var w,v,u=this.p4,t=u==="ptrap"
if(t||u==="faucet"){w=this.RG
if(w==null)return!1
if(t)if(w.a.a===3){u=w.b
u=new C.bd(u,C.a7(u).k("bd<2>")).d0(0,new A.bUu())&&w.c}else u=!1
else u=A.fCp(w)&&w.f
return u}v=this.R8
return v!=null&&v.c>=2&&A.La(A.t6(u),v).a==="ok"},
Ip(d){var w
if(this.c!=="outside"){w=this.CW
w=w!=null?w.r1(d):!this.ay}else w=!0
return w},
ga6c(){var w=this.p4
if(w.length===0)w=this.Ip(2)
else w=w!=="fan"||this.gz8()
return w},
gMh(){var w=this.p4
if(w.length===0)w=this.Ip(3)
else w=!D.d.t(B.jE,w)||this.gz8()
return w},
ganE(){var w=this.p4
if(w.length===0)w=this.Ip(0)
else w=!D.d.t(B.lh,w)||this.gz8()
return w},
gea(d){var w,v
if(this.ok)w=260
else{v=this.c
A:{if("bathroom"===v){w=110
break A}if("kitchen"===v){w=140
break A}if("living"===v){w=180
break A}if("hall"===v){w=480
break A}if("outside"===v){w=2600
break A}w=130
break A}}return w},
gh_(d){var w,v=180
if(!this.ok){w=this.c
A:{if("bathroom"===w){v=100
break A}if("kitchen"===w){v=110
break A}if("living"===w){v=120
break A}if("hall"===w)break A
if("outside"===w){v=2100
break A}v=112
break A}}return v},
gkO(){var w,v=this
if(v.c!=="outside"){w=v.p4
if(w.length!==0)w=w==="ptrap"||w==="faucet"||v.gz8()
else{w=v.CW
w=w==null?null:w.gbkK()
if(w==null)w=!v.ay}}else w=!0
return w},
gjR(){var w=this,v=w.c
if(v==="bathroom"||v==="kitchen"){v=w.p4
if(v.length!==0)v=!(v==="ptrap"||v==="faucet")||w.gz8()
else{v=w.fr
v=v==null?null:v.gwG()
if(v==null)v=!w.ch}}else v=!0
return v},
BV(d){var w,v,u,t
for(w=this.x,v=w.length,u=0;u<v;++u){t=w[u]
if(t.a===d)return t}return null},
dz(d,e,f,g){var w=this,v=w.y++,u=f==null?0:f,t=new A.mg(v,e,u,g==null?w.gh_(0)*0.6:g)
w.x.push(t)
w.a47(0,t)
return t},
M(d,e){return this.dz(0,e,null,null)},
cJj(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=d.k1
if(a0!=null){w=d.c
w=w==="outside"||w==="hall"}else w=!0
if(w)return
v=A.hc8(d,A.aPT(a0),0)
w=v.c
u=v.a/2
t=w-u-6
s=w+u+6
for(w=D.d.gag(d.x),u=new C.f2(w,new A.bUt());u.C();){r=w.gS(0)
q=B.hC.h(0,r.b)
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
i=d.gea(0)/2-m-1
m=k<=i
if(m){l=r.c
l=Math.abs(l-k)<=Math.abs(l-j)}else l=!1
if(!l)m=j<-i&&m
else m=!0
if(m)r.c=k
else if(j>=-i)r.c=j
else r.d=52+q+1}else{q=q==="left"
h=q?-d.gea(0)/2:d.gea(0)/2
m=r.c
l=o/2
if(q?m-l<h+52:m+l>h-52){m=r.d
g=n/2
m=m+g<=t||m-g>=s}else m=!0
if(m)continue
m=n/2
f=s+m+1
e=t-m-1
if(f<=d.gh_(0)-m-1)r.d=f
else if(e>=m+1)r.d=e
else r.c=q?h+52+l+1:h-52-l-1}}},
a47(d,e){var w,v,u,t,s,r=this,q=e.b,p=B.hC.h(0,q)
p.toString
w=(e.e&1)===1
v=w?p.d:p.c
u=w?p.c:p.d
p=v/2
e.c=D.k.E(e.c,-r.gea(0)/2+p+1,r.gea(0)/2-p-1)
p=e.d
t=u/2
s=r.c==="outside"?-760+t:t+1
e.d=D.k.E(p,s,r.gh_(0)-t-1)
if(D.d.t(B.RT,q)){e.c=D.k.V(e.c/40)*40
e.d=D.k.V(e.d/40)*40}}}
A.aWx.prototype={
bzG(d){var w,v,u
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
break B}u=A.zj(0,w,v,0,0,1,1,C.a([],x.dY))
u.p4=d
u.go=d==="fan"?"fan":"light"
if(d==="gfci")u.Q=5
u.ch=u.ay=!1
u.Q=v==="bathroom"||v==="kitchen"?5:0
u.ok=!0
u.k1="tv150"
u.p2=!0
u.p3=Math.max(0,D.d.bh(E.ko,new A.bV4()))
this.d=C.a([u],x.F)},
cTg(){var w,v,u,t,s,r
for(w=this.gqT(),v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u){t=w[u]
t.fr=t.CW=null
s=t.ay=!0
r=t.c
t.ch=r!=="bathroom"?r==="kitchen":s
t.fy=!1
t.fx.aa(0)
D.d.aa(t.id)}},
c8e(){var w,v,u,t,s,r,q,p=this,o="back",n="bedroom",m="bathroom",l=new C.e4()
l.cY(p.b)
w=new A.bV5()
v=x.dY
u=C.a([B.bJ_,B.bIX,B.bIY],v)
for(t=0;t<7;++t){s=B.cjX[t]
u.push(new A.oq(!0,o,-150+s.a*50,s.b))}r=p.d=C.a([A.zj(0,"Bedroom 1",n,0,0,2,2,C.a([w.$1(-48)],v)),A.zj(1,"Bedroom 2",n,2,0,2,2,C.a([w.$1(-48)],v)),A.zj(2,"Bathroom 1",m,4,0,1,2,C.a([B.a0O],v)),A.zj(3,"Bedroom 3",n,5,0,2,2,C.a([w.$1(-48)],v)),A.zj(4,"Bathroom 2",m,7,0,2,2,C.a([B.a0O],v)),A.zj(5,"Hall","hall",0,2,9,1,u),A.zj(6,"Bedroom 4",n,0,3,2,2,C.a([w.$1(-48)],v)),A.zj(7,"Bedroom 5",n,2,3,2,2,C.a([w.$1(-48)],v)),A.zj(8,"Bathroom 3",m,4,3,1,2,C.a([B.a0O],v)),A.zj(9,"Kitchen","kitchen",5,3,2,2,C.a([new A.oq(!1,o,-26,5),B.bJ1],v)),A.zj(10,"Living room","living",7,3,2,2,C.a([new A.oq(!1,o,-70,5),B.bJ0,B.bIZ],v)),A.zj(11,"NGMY City","outside",0,5,9,1,C.a([B.bIW],v))],x.F)
for(v=r.length,t=0;t<r.length;r.length===v||(0,C.L)(r),++t){q=r[t]
u=q.c
if(u==="outside"){p.aUo(q)
continue}q.go=u==="bedroom"?"fan":"light"
q.ay=l.af()<0.6
q.ch=(u==="bathroom"||u==="kitchen")&&l.af()<0.7
D.d.ht(q.z,0,3,l.ap(8))
A:{if("bathroom"===u){u=5+l.ap(2)
break A}if("kitchen"===u){u=5+l.ap(2)
break A}if("bedroom"===u){u=2+l.ap(3)
break A}if("living"===u){u=l.ap(2)
break A}u=l.ap(2)
break A}q.Q=u
q.as=l.ap(4)
p.aUo(q)}v=p.d
u=v[5]
u.k2=u.k1="tv100"
u.p2=!0
v[3].ay=!0
v[2].ch=!0},
aUo(b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4="plant",a5="roadcross",a6="road",a7="roundabout",a8="house2",a9="bighouse",b0="adboard",b1="flowers",b2=b3.gea(0)/2
switch(b3.c){case"bedroom":b3.dz(0,"rug",0,b3.gh_(0)*0.55)
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
b3.dz(0,a4,b3.gea(0)/2-12,b3.gh_(0)-12)
break
case"outside":for(w=-780;w<=780;w+=40){v=Math.abs(w)<1
b3.dz(0,v?a5:a6,w,420)
b3.dz(0,v?a5:a6,w,860)}for(u=200;u<=820;u+=40){if(Math.abs(u-420)<1||Math.abs(u-860)<1)continue
b3.dz(0,a6,0,u).e=1}for(t=0;t<2;++t){s=B.dmN[t]
for(u=460;u<859;u+=40)b3.dz(0,a6,s,u).e=1}for(t=0;t<3;++t){s=B.dmM[t]
b3.dz(0,a7,s,420)
b3.dz(0,a7,s,860)}r=new A.bV6(b3)
b3.dz(0,"shop",-250,225)
b3.dz(0,"hospital",250,215)
b3.dz(0,"firestation",-480,225)
b3.dz(0,"school",520,210)
for(t=0;t<14;++t){v=B.daF[t]
w=v.a
u=v.b
if(r.$4(w,u,60,40))b3.dz(0,"billboard",w,u)}for(t=0;t<4;++t){v=B.dr1[t]
w=v.a
u=v.b
if(r.$2(w,u))b3.dz(0,a8,w,u)}for(t=0;t<3;++t){v=B.cYJ[t]
u=v.a
q=v.b
p=v.c
for(v=u<900,w=-800;w<=800;w+=q){o=Math.abs(w)
if(o<100)continue
if(v&&o>400)continue
if(r.$2(w,u))b3.dz(0,p&&D.o.F(D.k.eb(w,q),2)===0?a9:a8,w,u)}}for(t=0;t<2;++t){v=B.cxf[t]
w=v.a
u=v.b
if(r.$2(w,u))b3.dz(0,a9,w,u)}for(w=-1220;w<=1220;w+=40){if(Math.abs(w)>780){b3.dz(0,a6,w,420)
b3.dz(0,a6,w,860)}b3.dz(0,a6,w,1460)
b3.dz(0,a6,w,1700)}for(u=900;u<1459;u+=40)b3.dz(0,a6,0,u).e=1
v=C.a([],x._)
for(o=b3.x,n=o.length,t=0;t<o.length;o.length===n||(0,C.L)(o),++t){m=o[t]
l=m.b
if(D.d.t(B.RT,l)||l==="roundabout")v.push(m)}k=new A.bV8(v,b3)
j=new A.bV9(b3,new A.bVc(b3))
j.$3("gasstation",6,B.d5o)
j.$3("dmv",1,B.dtN)
j.$3("ubstation",3,B.cWR)
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
e=B.hC.h(0,f)
if(k.$4(w,u,e.c,e.d)){b3.dz(0,f,w,u);++i}}++g}++h}for(d=0,t=0;t<11;++t,d=a0){v=B.cZE[t]
a0=d+1
b3.dz(0,v.b,v.a,1560).f=D.o.F(d,6)}for(t=0;t<11;++t,d=a0){v=B.doS[t]
a0=d+1
b3.dz(0,v.b,v.a,1860).f=D.o.F(d,6)}b3.dz(0,"townsign",0,640)
for(t=0;t<4;++t){v=B.djf[t]
b3.dz(0,"cornersign",v.a,v.b)}for(t=0;t<5;++t)b3.dz(0,b0,B.d8M[t],2045)
for(t=0;t<4;++t)b3.dz(0,b0,B.dmS[t],-690)
for(t=0;t<4;++t){u=B.crD[t]
a1=b3.dz(0,b0,-1245,u)
a1.e=1
a1.c=-1245
b3.a47(0,a1)
a2=b3.dz(0,b0,1245,u)
a2.e=3
a2.c=1245
b3.a47(0,a2)}for(w=-1200;w<=1200;w+=480){for(t=0;t<4;++t)b3.dz(0,"pole",w,B.cvY[t])
for(v=Math.abs(w)<1100,o=w+240,t=0;t<4;++t){u=B.cD5[t]
if(v)b3.dz(0,"lamppost",o,u)}}b3.dz(0,"car",-300,490).e=2
b3.dz(0,"ambulance",110,345)
b3.dz(0,"firetruck",-385,345)
for(t=0;t<10;++t){v=B.dsF[t]
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
for(t=0;t<6;++t){v=B.cCE[t]
b3.dz(0,"crate",v.a,v.b)}break
case"hall":default:}},
gqT(){var w,v,u,t=C.a([],x.F),s=this.d
s===$&&C.c()
w=s.length
v=0
for(;v<s.length;s.length===w||(0,C.L)(s),++v){u=s[v]
if(u.c!=="outside")t.push(u)}return t},
gd_1(){var w=this.gqT()
return new C.Z(w,new A.bVg(),C.T(w).k("Z<1>")).gL(0)},
gcWF(){var w=this.d
w===$&&C.c()
return new C.Z(w,new A.bVf(),C.T(w).k("Z<1>")).gL(0)},
gcWE(){var w=this.d
w===$&&C.c()
return new C.Z(w,new A.bVe(),C.T(w).k("Z<1>")).gL(0)},
gcPl(){var w=this.gqT()
return new C.Z(w,new A.bVd(),C.T(w).k("Z<1>")).gL(0)}}
A.IW.prototype={
R(){var w,v,u,t,s=new C.ye()
$.yY()
s.h7(0)
w=$.ax()
v=$.hA0()
u=x.S
t=C.a([],x.aQ)
return new A.aEM(s,B.aAj,new C.eD("",w),B.dhu,B.rN,B.rN,D.D4,C.aX(x.N),new C.cw(null,x.eF),v,C.U(u,x.i),C.aX(u),t,D.cK)}}
A.aEM.prototype={
ghD(){var w,v,u=$.a4i
if(u!=null){w=u.a
v=this.d
v===$&&C.c()
v=w===v.b
w=v}else w=!1
return w?u:null},
azV(){var w,v,u=this.ghD()
if(u==null)u=null
else{w=this.d
w===$&&C.c()
v=w.d
v===$&&C.c()
w=u.bfe(w,v[w.e].a)
u=w}this.fr=u==null?B.aAj:u},
gbiY(){var w=this.d
w===$&&C.c()
w=w.gqT()
return new C.Z(w,new A.eed(),C.T(w).k("Z<1>")).gL(0)},
Z(){var w,v,u,t,s,r=this
r.a2()
w=r.a.r
if(w.length!==0)w=r.d=A.hIW(w)
else{w=$.Ec==null
if(w){w=D.o.F(Date.now(),1e5)
$.Ec=A.aWy(w)
r.ej=!0}w=$.Ec
w.toString
w=r.d=w}v=r.a
if(v.r.length===0)u=!0
else u=v.d||w.c
w.c=u
u=new A.xi(-0.05,0.1,120,B.h_x,$.ax())
u.f=560
r.e=u
v=v.f
if(v==="city")w.e=11
if(v.length!==0){w=w.gqT()
t=new C.Z(w,new A.eea(r),C.T(w).k("Z<1>"))
if(!t.gan(0)){w=r.d
w===$&&C.c()
w.e=t.gI(0).a}}A.aWk($.ahI)
A.hkM()
r.aj3()
r.azV()
w=r.d
w===$&&C.c()
v=w.d
v===$&&C.c()
w=v[w.e]
v=r.gbiY()
u=r.d
s=u.d
s===$&&C.c()
r.f=A.huM(w,s[u.e].c!=="outside",B.aR0,"look",v,r.fr,0)
r.aet(!0)
r.Z6()
r.fx=C.dh(D.fY,new A.eeb(r))
$.aV.x1$.push(new A.eec(r))},
q(){var w=this,v=w.p1
if(v!=null)v.bR(0)
v=w.RG
if(v!=null)v.bR(0)
v=w.b4
if(v!=null)v.bR(0)
v=w.ch
if(v!=null)v.a4(0)
v=w.dx
if(v!=null)v.a4(0)
v=w.fx
if(v!=null)v.a4(0)
v=w.by
if(v!=null)v.a4(0)
v=w.P
if(v!=null)v.a4(0)
w.a1()},
c26(){var w,v=this.d
v===$&&C.c()
w=v.a
A:{if("switch"===w){v="The ceiling light is already in. Tap the red switch on the wall and wire it. Then flip it to see the light work."
break A}if("outlet"===w){v="Tap the red outlet on the wall and wire it. Then plug in a lamp or a TV to test it."
break A}if("gfci"===w){v="Tap the red GFCI outlet and wire it. Then plug in a hair dryer to test it."
break A}if("fan"===w){v="Tap the ceiling fan and wire it. Then flip the wall switch and watch it spin."
break A}if("ptrap"===w){v="The sink has no drain yet. Tap the sink and build the drain under it."
break A}v="The faucet is not connected yet. Tap the sink and connect the hoses."
break A}return v},
aet(d){var w,v,u,t,s,r,q=this,p=q.d
p===$&&C.c()
w=p.d
w===$&&C.c()
v=w[p.e]
if(q.z){u=new A.q(0,40,v.gh_(0)*0.5)
t=Math.max(v.gea(0),v.gh_(0))*0.6
p=q.e
p===$&&C.c()
p.e=20
p.f=Math.max(Math.max(v.gea(0),v.gh_(0))*2,380)
p.r=new C.e5([-v.gea(0)/2,v.gea(0)/2,0,v.gh_(0),130])
p.z=-1.2
p.Q=1.2
p.r9(!0)
s=0.12
r=-0.05}else if(v.c==="outside"){p=q.e
p===$&&C.c()
p.e=30
p.f=2400
p.r=null
p.z=0.03
p.Q=1.35
p.r9(!0)
u=B.h_u
t=540
s=0.35
r=-0.25}else if(q.x){u=new A.q(0,46,v.gh_(0)*0.1)
t=v.gh_(0)*0.74
p=q.e
p===$&&C.c()
p.e=6
p.f=Math.max(Math.max(v.gea(0),v.gh_(0))*2,380)
p.r=new C.e5([-v.gea(0)/2,v.gea(0)/2,0,v.gh_(0),130])
p.z=0.02
p.Q=1.35
p.r9(!0)
s=0.05
r=0}else{u=new A.q(0,30,v.gh_(0)*0.45)
t=(v.gea(0)*1.2>v.gh_(0)*1.4?v.gea(0)*1.2:v.gh_(0)*1.4)+30
p=q.e
p===$&&C.c()
p.e=6
p.f=560
p.r=null
p.z=0.1
p.Q=1.35
p.r9(!0)
s=0.5
r=-0.12}p=q.e
if(d){p===$&&C.c()
p.d=u
p.c=t
p.a=r
p.b=s}else{p===$&&C.c()
p.hT(t,s,u,r)}},
y0(){return this.aet(!1)},
bO3(d,e){var w,v,u,t,s,r,q,p,o=this,n=o.e
n===$&&C.c()
w=n.cPt(d,e)
if(w==null)return
n=o.d
n===$&&C.c()
v=n.d
v===$&&C.c()
u=v[n.e]
t=o.aK
if(t!=null){n=t.at
n===$&&C.c()
n.at=new C.z(D.k.E(w.a,-138,138),D.k.E(w.c,12,316))}else if(o.z){s=D.k.E(w.a,-u.gea(0)/2+10,u.gea(0)/2-10)
r=D.k.E(w.c,10,u.gh_(0)-10)
o.e.apX(new A.q(s,48,r))}else{n=u.c==="outside"
if(n&&o.aN&&o.aC!=null){n=o.aC
n.toString
n.at=new C.z(D.k.E(w.a,-u.gea(0)/2+12,u.gea(0)/2-12),D.k.E(w.c,-290,u.gh_(0)-12))}else{v=o.e
q=w.a
p=w.c
if(n)v.apY(Math.max(70,v.c*0.4),0.32,new A.q(q,30,p))
else{n=D.k.E(q,-u.gea(0)/2+8,u.gea(0)/2-8)
p=D.k.E(p,8,u.gh_(0)-8)
v.apY(Math.max(36,o.e.c*0.35),0.2,new A.q(n,40,p))}}}A.fR(560,50,0.25,"tri")},
iI(){var w,v,u,t,s,r,q,p,o=this
o.azV()
w=o.aK
if(w!=null){v=w.ay
v===$&&C.c()}else{v=o.d
v===$&&C.c()
u=v.d
u===$&&C.c()
v=u[v.e]
u=o.r
t=o.Q
s=o.gbiY()
if(!o.z)if(o.x){r=o.d
q=r.d
q===$&&C.c()
r=q[r.e].c!=="outside"&&o.cx==null}else r=!1
else r=!0
q=o.fr
p=o.bG
v=A.huM(v,r,p!=null?C.eE([100+p.a],x.S):B.aR0,u,s,q,t)}o.f=v},
eh(d,e){var w=this,v=w.ch
if(v!=null)v.a4(0)
w.m(new A.ecX(w,d,e))
w.ch=C.cG(D.ep,new A.ecY(w))},
iJ(d){return this.eh(d,!0)},
PU(d){this.m(new A.ecZ(this,d))
A.fR(660,50,0.25,"tri")},
axM(d,e){var w,v=this,u=v.d
u===$&&C.c()
if(d!==u.e){u=u.d
u===$&&C.c()
u=d>=u.length}else u=!0
if(u)return
if(v.aN&&d!==11)v.a2Q()
v.cL=v.bG=v.aK=null
if(!e&&v.cx!=null)v.Sc()
v.m(new A.ebu(v,d))
u=v.d
w=u.d
w===$&&C.c()
u=w[u.e]
if(u.c==="outside")v.aC=A.hob(u,0,24)
v.y0()
A.fR(520,60,0.25,"tri")},
AB(d){return this.axM(d,!1)},
aXU(d){var w,v,u,t=this
if(d===700){w=t.d
w===$&&C.c()
v=w.d
v===$&&C.c()
return v[w.e].ganE()}if(d===701){w=t.d
w===$&&C.c()
v=w.d
v===$&&C.c()
w=v[w.e]
return w.p4.length!==0||w.Ip(1)}if(d===702){w=t.d
w===$&&C.c()
v=w.d
v===$&&C.c()
return v[w.e].gMh()}if(d===703){w=t.d
w===$&&C.c()
v=w.d
v===$&&C.c()
return v[w.e].ga6c()}if(d>=800&&d<820){u=d-800
w=t.d
w===$&&C.c()
v=w.d
v===$&&C.c()
w=v[w.e].id
return u<w.length&&w[u].gwG()}if(d===720){w=t.d
w===$&&C.c()
v=w.d
v===$&&C.c()
return v[w.e].ganE()}if(d===721){w=t.d
w===$&&C.c()
v=w.d
v===$&&C.c()
w=v[w.e]
return w.p4.length!==0||w.Ip(1)}if(d>=722&&d<728){u=d-720-2
w=t.d
w===$&&C.c()
v=w.d
v===$&&C.c()
w=v[w.e].id
return u<w.length&&w[u].gwG()}w=t.d
w===$&&C.c()
v=w.d
v===$&&C.c()
return v[w.e].gkO()},
b99(){var w,v,u=this,t=u.d
t===$&&C.c()
w=t.d
w===$&&C.c()
v=w[t.e].go==="fan"
u.m(new A.edq(u))
t=u.d
w=t.d
w===$&&C.c()
if(w[t.e].fy)t=v?"The fan spins.":"The light is on."
else t=v?"The fan stops.":"The light is off."
u.iJ(t)
t=u.d
w=t.d
w===$&&C.c()
A.fR(w[t.e].fy?900:500,60,0.25,"tri")},
c8m(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this
if(a0===0)return
if(a0>=19e3&&a0<19004){w=a0-19e3
v=d.d
v===$&&C.c()
u=v.d
u===$&&C.c()
t=u[v.e]
v=D.o.F(w,2)===0?-1:1
s=v*(t.gea(0)/2-14)
r=w<2?14:t.gh_(0)-14
q=Math.atan2(-s,-(t.gh_(0)/2-r))
w=Math.cos(0.12)
v=Math.sin(q)
u=Math.sin(0.12)
p=Math.cos(0.12)
o=Math.cos(q)
n=d.e
n===$&&C.c()
n.e=6
n.hT(26,0.12,new A.q(s+26*w*v,106-26*u,r-26*p*o),q)
d.eh("You are looking from the camera in the corner. Drag to look round, or tap a camera for another corner.",!0)
A.fR(700,70,0.25,"tri")
return}if(a0>=2e4&&a0<23e3){w=d.d
w===$&&C.c()
v=w.d
v===$&&C.c()
m=v[w.e].BV(a0-2e4)
if(m!=null)d.bUc(m)
return}if(a0===19502){w=d.aK
if((w==null?null:w.a==="tower")===!0)d.m(new A.ecr(d))
return}if(a0===19500||a0===19501){l=d.aK
if(l!=null)if(l.c)d.YF(l)
else d.eh("This one works: the house has power.",!0)
return}if(a0>=900&&a0<920){d.crt(a0-900)
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
if(w){d.A4(k.b)
return}if(d.r!=="furniture")return
d.m(new A.ecs(d,a0))
w=d.d
v=w.d
v===$&&C.c()
m=v[w.e].BV(d.Q)
if(m!=null)d.iJ(B.hC.h(0,m.b).a+": move it with the arrows.")
return}if(a0===300||a0===301||a0===302){if(d.r!=="walls")return
d.m(new A.ect(d,a0))
d.iJ("Wall picked. Choose a paint colour.")
return}if(a0>=600&&a0<620){j=a0-600
w=d.d
w===$&&C.c()
v=w.d
v===$&&C.c()
if(j>=v[w.e].w.length)return
if(d.r==="doors"){d.m(new A.ecu(d,j))
w=d.d
v=w.d
v===$&&C.c()
A.fR(v[w.e].at.t(0,j)?700:450,70,0.25,"tri")
return}d.bNX(j)
return}w=a0===700
v=!w
i=!0
if(v)if(a0!==701){if(a0!==702)if(a0!==703)if(!(a0>=800&&a0<820))u=a0>=720&&a0<728
else u=i
else u=i
else u=i
i=u}if(d.w&&i){h=d.aXU(a0)
A.fR(h?1400:500,160,0.25,"tri")
w=h?"The tester glows and beeps: LIVE, 120 volts. Never touch a live wire. Switch the breaker off first.":"The tester stays dark: no power here. It still needs wiring."
d.eh(w,!h)
return}if(!v||a0===701){if(d.aXU(a0))d.azw(w?0:1)
else d.aU4()
return}if(a0>=800&&a0<820){j=a0-800
w=d.d
w===$&&C.c()
v=w.d
v===$&&C.c()
w=v[w.e].id
if(j>=w.length)return
g=w[j]
if(!g.gwG())d.akk(j)
else if(g.a==="switch")d.b99()
else d.azw(2+j)
return}if(a0===702||a0===703){w=d.d
w===$&&C.c()
v=w.d
v===$&&C.c()
if(v[w.e].gMh()){w=d.d
v=w.d
v===$&&C.c()
w=!v[w.e].ga6c()}else w=!0
if(w)d.aU4()
else d.b99()
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
if(!w[u].p2){d.m(new A.ecv(d))
w=d.d
v=w.d
v===$&&C.c()
d.iJ("The TV is on and playing "+E.ko[v[w.e].p3].a+".")}else{e=A.aPT(f)
w=d.c
w.toString
K.hbY(w,0,e.a,!0,D.yd,e.b)}return}if(a0>=720&&a0<728){w=d.d
w===$&&C.c()
v=w.d
v===$&&C.c()
u=a0-720
f=v[w.e].fx.h(0,u)
if(f==null)return
e=A.aPT(f)
if(e.d>0||e.e){w=d.c
w.toString
K.hbY(w,0,e.a,!0,D.yd,e.b)}else d.azw(u)
return}if(a0===710||a0===711||a0===712||a0===713){w=d.d
w===$&&C.c()
v=w.d
v===$&&C.c()
if(!v[w.e].gjR())if(d.d.a.length!==0)d.Ep()
else d.a0l()
else{w=d.f
w===$&&C.c()
j=w.b.h(0,a0)
if(j!=null)d.iJ(j.a+": "+j.b)}}},
bNX(d){var w,v,u,t=this.d
t===$&&C.c()
w=t.d
w===$&&C.c()
v=w[t.e].w[d].d
u=v<w.length?w[v].b:"the next room"
t=this.c
t.toString
return C.bV(E.lB,null,new A.eaY(this,u,d,v),t,!0,!0,!1,D.k3,!1,!1,x.H)},
bQ_(){var w,v,u=this
u.m(new A.eb6(u))
if(!u.aN){w=u.d
w===$&&C.c()
v=w.d
v===$&&C.c()
w=v[w.e].c==="outside"}else w=!1
if(w)u.a2M()
w=u.d
w===$&&C.c()
v=w.d
v===$&&C.c()
if(v[w.e].c!=="outside")u.y0()},
bQ1(){this.m(new A.eb7(this))
this.eh("Phone view: the city fills your phone standing up. Pick a drone film and start filming.",!0)},
bQl(){var w=this
if(w.p4)w.a2P()
w.m(new A.eb8(w))},
ckR(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.c
n.toString
w=C.aG(n,o,x.w).w
n=new A.eck(p)
v=x.p
u=C.a([C.bT(0,d,0,0,0)],v)
t=w.r.b
if(p.fB)u.push(C.ap(o,C.aA(D.iG,B.f89,D.y,!1,o,new A.ecn(p),o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!1,D.a3),o,o,0,o,t,o))
else{s=n.$2(D.cx,p.gbQk())
r=p.p4?D.z1:D.Cj
r=n.$2(r,new A.eco(p))
q=p.ha?B.aou:P.Cm
u.push(C.ap(o,C.B(C.a([s,r,n.$2(q,new A.ecp(p)),n.$2(D.uF,new A.ecq(p))],v),D.m,o,D.e,D.i,0,o,o),o,o,10,o,t+8,o))}return C.c5(o,D.w,new C.an(D.a_,o,D.ab,D.t,u,o),o,!1,!1,o,o)},
bIl(d){var w,v,u,t,s,r,q=this,p=null,o=q.c
o.toString
w=C.aG(o,p,x.w).w
o=new A.eay(q)
if(q.eu){v=w.a
u=v.b
v=v.a
t=q.ab
s=w.alA(D.af,new C.av(u,v),D.af)
return C.c5(p,D.w,C.as(new C.wp(t,C.q_(new C.a5(u,v,new C.an(D.a_,p,D.ab,D.t,C.a([C.bT(0,d,0,0,0),C.ap(p,C.aA(D.iG,B.f8f,D.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,o,p,p,p,p,p,p,!1,D.a3),p,p,0,p,0,p)],x.p),p),p),s),p),p,p,p),p,!1,!1,p,p)}r=q.f2?w.r.b:0
return C.c5(p,D.w,new C.an(D.a_,p,D.ab,D.t,C.a([C.bT(0,d,0,0,0),C.ap(p,C.aA(D.iG,B.f8g,D.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,o,p,p,p,p,p,p,!1,D.a3),p,p,0,p,r,p)],x.p),p),p,!1,!1,p,p)},
bSp(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.c
k.toString
w=C.aG(k,l,x.w).w
k=w.a
v=k.b
k=k.a
u=new A.ebi(m)
t=m.ab
s=w.alA(D.af,new C.av(v,k),D.af)
r=x.p
q=C.a([C.bT(0,d,0,0,0)],r)
if(m.fB)q.push(C.ap(l,C.aA(D.iG,B.f88,D.y,!1,l,new A.ebl(m),l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,!1,D.a3),l,l,0,l,0,l))
else{p=u.$2(Aj.a1M,new A.ebm(m))
o=u.$2(D.a29,new A.ebn(m))
n=m.ha?B.aou:P.Cm
r=C.a([p,o,u.$2(n,new A.ebo(m)),u.$2(D.uF,new A.ebp(m))],r)
p=m.d
p===$&&C.c()
o=p.d
o===$&&C.c()
if(o[p.e].c==="outside"){p=m.p4?D.z1:D.Cj
r.push(u.$2(p,new A.ebq(m)))}if(m.gakl())r.push(C.aA(l,C.p(l,B.bWJ,D.f,l,l,new C.o(D.cT,l,C.K(D.c,D.r,1),l,l,l,D.a6),l,40,l,D.iE,l,l,l,40),D.y,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,m.gaQW(),l,l,l,l,l,l,!1,D.a3))
q.push(C.ap(l,C.B(r,D.m,l,D.e,D.i,0,l,l),l,l,10,l,10,l))}return C.c5(l,D.w,C.as(new C.wp(t,C.q_(new C.a5(v,k,new C.an(D.a_,l,D.ab,D.t,q,l),l),s),l),l,l,l),l,!1,!1,l,l)},
cBS(d){var w,v,u,t=B.CN[d.b]
if(d.c==="power")w=t.c
else{v=t.d
w=v>=0?v:t.c}v=this.d
v===$&&C.c()
v=v.d
v===$&&C.c()
u=w<v.length?v[w].b:"the house"
v=this.c
v.toString
return C.bV(D.av,null,new A.edp(this,t,new A.edo(),d,u,w),v,!0,!0,!0,L.a8u,!1,!1,x.H)},
c3g(){var w,v,u=this,t=u.d
t===$&&C.c()
w=t.d
w===$&&C.c()
v=w[t.e]
if(v.c==="outside")return
u.m(new A.ebI(u))
t=u.e
t===$&&C.c()
t.e=20
t.f=300
t.z=-0.95
t.Q=1.35
t.r9(!0)
t=u.e
w=v.gh_(0)
t.hT(Math.max(v.gea(0),v.gh_(0))*0.75,-0.5,new A.q(0,118,w*0.5),-0.05)
u.eh("Looking up at the ceiling from the floor. Drag to look round.",!0)},
gpn(){var w,v,u=this.d
u===$&&C.c()
u=u.d
u===$&&C.c()
w=new C.Z(u,new A.e9x(),C.T(u).k("Z<1>"))
if(!w.gag(0).C())return null
v=w.gI(0)
u=v.dx
return u==null?v.dx=A.hGL(v):u},
aSc(d){var w,v,u=this
if(d==null)return
w=d.c
if(w>0){v=u.ghD()
if(v!=null)v.r+=w}w=d.a
A.fR(w==="pickup"?700:940,120,0.25,"tri")
u.eh(d.b,w!=="expired")
u.m(u.giY())},
gKx(){var w,v,u,t=this.d
t===$&&C.c()
t=t.d
t===$&&C.c()
w=new C.Z(t,new A.edR(),C.T(t).k("Z<1>"))
if(!w.gag(0).C())return null
v=w.gI(0)
t=v.dy
if(t==null){t=C.a([],x.bz)
u=new C.e4()
u.cY(11)
t=new A.cAZ(v,u,t)
t.bAq(v,11)
v.dy=t}return t},
bGs(){var w,v,u=this,t=u.ghD()
if(t==null)return
w=u.c5
if(w.w)u.eh("You already have your Uber licence.",!0)
else{v=t.r
if(v<40)u.eh("The licence costs 40 points. You have "+v+". Earn more with jobs and deliveries.",!1)
else{t.r=v-40
w.w=!0
A.fR(880,140,0.25,"tri")
u.eh("You passed! Here is your Uber licence. Drive a car to an Uber station and the people waiting will get in.",!0)}}u.m(new A.e9Y())
w=u.aK
if(w!=null)w.B(u.ghD())},
c2b(){var w,v,u,t,s=this,r=null,q=s.ghD(),p=s.c5.w,o=D.w.j(0.55),n=C.n(28),m=C.K(D.aX,D.r,1),l=x.p,k=C.B(C.a([B.fDo,D.as,B.bGd,C.aA(r,D.rJ,D.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new A.ebD(s),r,r,r,r,r,r,!1,D.a3)],l),D.m,r,D.e,D.i,0,r,r),j=C.d(p?"You are a licensed Uber driver. Drive a car to an Uber station (the yellow and black shelter): the people waiting get in, and you take them to their house. The fare is paid when you get there.":"With the Uber licence you can take the people waiting at the Uber stations home and be paid for every ride. The car needs gas, so watch the gas bar.",r,r,r,r,r,r,B.fjh,r,r,r),i=q==null,h=i?r:q.r
h=C.d("You have "+(h==null?0:h)+" \u2b50",r,r,r,r,r,r,B.frh,r,r,r)
w=p?new A.ebE(s):s.gbGr()
if(p)v=D.be
else{v=i?r:q.r
v=(v==null?0:v)>=40?D.bu:D.bC}u=C.n(16)
t=p?"\u2713 Licensed":"Get the licence \xb7 40 \u2b50"
if(!p){i=i?r:q.r
i=(i==null?0:i)>=40}else i=!0
return C.p(D.A,C.p(r,C.x(C.a([k,D.W,j,D.W,h,D.W,C.aA(r,C.p(D.A,C.d(t,r,r,r,r,r,r,C.l(r,r,i?D.w:D.bU,r,r,r,r,r,r,r,r,16,r,r,D.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),D.f,r,r,new C.o(v,r,r,u,r,r,D.n),r,50,r,r,r,r,r,r),D.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,w,r,r,r,r,r,r,!1,D.a3)],l),D.ak,r,D.e,D.O,0,D.p),D.f,r,r,new C.o(r,r,m,n,r,B.zj,D.n),r,r,r,D.bE,D.bQ,r,r,330),D.f,o,r,r,r,r,r,r,r,r,r,r)},
cEf(d){var w,v,u,t=this,s=t.gKx()
if(s!=null){w=s.c
w===$&&C.c()
w=w.length===0}else w=!0
if(w)return
v=s.cOj(d.f,d.r,t.CW.gir()/1000)
if(v>0){w=t.ghD()
if(w!=null)w.r+=v
A.fR(940,140,0.25,"tri")
t.eh("\ud83d\ude96 You dropped the passenger at the house. Fare: +"+v+" points. Thank you!",!0)
t.m(t.giY())
return}if(s.f==null&&s.aqB(d.f,d.r)!=null&&D.d.b3(s.e,new A.edS(s,d))){w=t.c5
if(!w.w){if(Date.now()-t.k1>2e4){t.k1=Date.now()
t.eh("People are waiting for a ride, but you need an Uber licence first. Get it at the licence office.",!1)}return}if(w.b<=0)return
u=s.cWw(d.f,d.r)
if(u!=null){A.fR(700,100,0.25,"tri")
t.eh("\ud83d\ude96 "+u.b+" got in. Take them to their house (follow the yellow line): "+u.f+" points.",!0)
t.m(t.giY())}}},
cEe(){var w,v,u,t,s,r,q,p=this,o=p.gKx()
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
for(;s<u.length;u.length===t||(0,C.L)(u),++s){r=u[s]
if(r.b==="dmv")v.push(r)}if(v.length===0){p.eh("There is no licence office in this town yet.",!1)
return}p.Sq(D.d.gI(v))
p.eh("You are at the licence office. Walk in through the door and onto the blue mat to get your Uber licence.",!0)
return}v=o.c
v===$&&C.c()
if(v.length===0){p.eh("There is no Uber station in this town yet.",!1)
return}q=p.aC
v=C.C(v,x.eB)
D.d.aZ(v,new A.edQ(q))
p.Sq(D.d.gI(v))
p.eh("You are at an Uber station. Get in the car parked next to it and drive up to the people waiting. They get in by themselves.",!0)},
aPz(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=" points for the ",i=k.ghD()
if(i==null)return
w=d.a
v=w==="bread"
if(v||w==="medicine"){u=i.aE7(v?"food":"medicine")
t=!D.a.a0(u,"You need")}else{v=d.r
t=!1
if(v>0){w=w==="tank"
s=w?A.h9v(k.c5.b):d.e
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
u="You had the "+d.c.toLowerCase()+". "+w}t=!l}}}A.fR(t?880:300,90,0.25,"tri")
k.eh(u,t)
w=k.aK
if(w!=null)w.B(k.ghD())
k.m(k.giY())},
cwf(){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.ghD(),i=l.aK
i=i==null?k:i.b.b==="gasstation"
w=i===!0
i=l.c
i.toString
v=C.aG(i,k,x.w).w.a
i=v.a
u=i>v.b*1.15
t=new A.ed1(u,new A.ed2(l,j,u))
s=C.d(w?"\u26fd":"\ud83d\uded2",k,k,k,k,k,k,D.x1,k,k,k)
r=C.d(w?"NGMY Gas shop":"NGMY Mart",k,k,k,k,k,k,D.fw,k,k,k)
q=j==null?k:j.r
p=x.p
q=C.a([s,D.as,C.E(C.x(C.a([r,C.d("You have "+(q==null?0:q)+" \u2b50",k,k,k,k,k,k,B.flH,k,k,k)],p),D.E,k,D.e,D.i,0,D.p),1)],p)
if(u)q.push(new C.a5(190,k,new A.Uw(l.c5,w,14,k),k))
q.push(D.bb)
q.push(C.aA(k,B.bTn,D.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new A.ed0(l),k,k,k,k,k,k,!1,D.a3))
o=C.B(q,D.m,k,D.e,D.i,0,k,k)
n=t.$2("FOOD AND DRINKS (energy)",B.da2)
s=w?"GAS":"HEALTH AND THE TOWN"
m=t.$2(s,w?B.dmC:B.djj)
t=D.w.j(0.55)
i=u?Math.min(i-24,820):340
s=C.n(28)
r=C.K(D.aX,D.r,1)
q=C.a([o,D.W],p)
if(!u)D.d.v(q,C.a([new A.Uw(l.c5,w,14,k),D.P],p))
if(u)q.push(C.B(C.a([C.E(n,5),D.er,C.E(m,3)],p),D.E,k,D.e,D.i,0,k,k))
else D.d.v(q,C.a([n,m],p))
return C.p(D.A,C.eO(D.A,C.p(k,C.x(q,D.ak,k,D.e,D.O,0,D.p),D.f,k,k,new C.o(k,k,r,s,k,B.zj,D.n),k,k,k,D.bg,D.bQ,k,k,i),D.f,D.e3),D.f,t,k,k,k,k,k,k,k,k,k,k)},
cht(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=this,a1=null,a2=a0.gpn()
a2.toString
w=a0.aC
v=w==null
u=v?a1:w.f
if(u==null)u=0
t=v?a1:w.r
if(t==null)t=300
s=a2.x
r=new A.ec2()
q=new A.ebZ(a0,u,t,r,new A.ec1(),s,a2)
p=a2.cYS()
o=["\ud83e\udd47","\ud83e\udd48","\ud83e\udd49","4","5","6"]
v=D.w.j(0.55)
n=C.n(28)
m=C.K(D.aX,D.r,1)
l=x.p
k=C.a([C.B(C.a([B.fKP,D.as,C.E(C.x(C.a([B.fMD,C.d("Race "+a2.as+": first to 8 wins +40",a1,a1,a1,a1,a1,a1,I.tf,a1,a1,a1)],l),D.E,a1,D.e,D.i,0,D.p),1),C.aA(a1,D.rJ,D.y,!1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,new A.ebX(a0),a1,a1,a1,a1,a1,a1,!1,D.a3)],l),D.m,a1,D.e,D.i,0,a1,a1),D.ae],l)
if(s!=null){j=D.bu.j(0.14)
i=C.n(16)
h=C.K(D.bu,D.r,1)
g=s.b
f=C.d(A.L9(g).b,a1,a1,a1,a1,a1,a1,D.Ke,a1,a1,a1)
k.push(C.p(a1,C.B(C.a([f,D.as,C.E(C.d(s.r?"You have the "+A.L9(g).c.toLowerCase()+". Take it to the house (follow the yellow line).":"Go to the "+r.$1(s.c).toLowerCase()+" to pick up the "+A.L9(g).c.toLowerCase()+".",a1,a1,a1,a1,a1,a1,D.oM,a1,a1,a1),1),C.aA(a1,B.fAW,D.y,!1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,new A.ebY(a0,a2),a1,a1,a1,a1,a1,a1,!1,D.a3)],l),D.m,a1,D.e,D.i,0,a1,a1),D.f,a1,a1,new C.o(j,a1,h,i,a1,a1,D.n),a1,a1,a1,D.d0,D.bg,a1,a1,a1))}else{j=C.a([B.fPr,D.P],l)
for(a2=a2.r0(0,u,t),a2=C.d_(a2,0,C.dB(6,"count",x.S),C.T(a2).c),i=a2.$ti,a2=new C.bS(a2,a2.gL(0),i.k("bS<ak.E>")),i=i.k("ak.E");a2.C();){h=a2.d
j.push(q.$1(h==null?i.a(h):h))}D.d.v(k,j)}k.push(D.am)
k.push(B.fEj)
k.push(D.P)
for(e=0;e<p.length;++e){a2=p[e].a==="You"?D.aJ.j(0.18):D.c.j(0.05)
j=new C.aP(12,12)
i=p[e]
h=i.a
g=h==="You"
d=new C.ay(g?D.aJ:D.dq,1,D.r,-1)
f=o[e]
g=g?D.u:D.U
k.push(C.p(a1,new C.cd(D.aM,D.e,D.i,D.m,a1,D.p,a1,0,C.a([new C.a5(26,a1,new C.y(f,a1,D.aSZ,a1,a1,a1,a1,a1,a1,a1,a1,a1),a1),new C.bA(1,D.bd,new C.y(h,a1,new C.F(!0,D.c,a1,a1,a1,a1,a1,g,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1,a1,a1,a1,a1,a1,a1),a1),new C.y(""+i.b+"/8",a1,M.Kg,a1,a1,a1,a1,a1,a1,a1,a1,a1),D.as,new C.y(""+i.c+" pts",a1,B.fj7,a1,a1,a1,a1,a1,a1,a1,a1,a1)],l),a1),D.f,a1,a1,new C.o(a2,a1,new C.bH(d,d,d,d),new C.bh(j,j,j,j),a1,a1,D.n),a1,a1,a1,D.eH,D.l8,a1,a1,a1))}return C.p(D.A,C.eO(D.A,C.p(a1,C.x(k,D.ak,a1,D.e,D.O,0,D.p),D.f,a1,a1,new C.o(a1,a1,m,n,a1,B.zj,D.n),a1,a1,a1,D.bE,D.bQ,a1,a1,340),D.f,D.e3),D.f,v,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1)},
bUb(d){var w,v,u=this,t=u.aK
if(t==null||t.a!=="tower"||u.ok!=null)return
w=t.f
if(d===w){u.m(new A.ebr(u))
return}u.p2=t
w=new A.f1K(w,d,Date.now())
v=t.at
v===$&&C.c()
w.r=v.f
w.w=v.r
u.ok=w
t.y=u.be=u.b2=0
u.m(new A.ebs(u))
w=u.e
w===$&&C.c()
w.hT(175,0.28,B.h_y,0)
u.eh("Going to level "+d+": walking to the elevator.",!0)
w=u.p1
if(w!=null)w.bR(0)
w=new A.a5h(u.gcsc(),Z.BF)
w.h7(0)
u.p1=w},
DR(d){var w=D.k.E(d,0,1)
return w*w*(3-2*w)},
csd(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d="tri",a0=e.ok,a1=e.p2
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
m=A.h0V("cabin",a1.b,!1)
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
e.aK=m
w=s?"\u25b2":"\u25bc"
e.p3.sp(0,w+"  "+C.w(t===1?"L":t))
e.m(e.giY())
w=e.e
w===$&&C.c()
w.Np(54,0.1,B.h_M,3.141592653589793)
A.fR(520,70,0.25,d)}break
case 1:m=e.aK
if(m==null||m.a!=="cabin")return
l=a0.f
if(u<0.9)r=1-e.DR(u/0.9)
else{r=l-0.9
r=u>r?e.DR((u-r)/0.9):0}m.y=r
k=u>0.9&&u<l-0.9
if(k){j=D.o.E(t+D.k.V((w-t)*e.DR((u-0.9)/(l-1.8))),1,m.gM7())
if(j!==a0.e){m.z=a0.e=j
t=s?"\u25b2":"\u25bc"
e.p3.sp(0,t+"  "+C.w(j===1?"L":j))
A.fR(500+j*22,45,0.2,d)}}i=k?1:0.25
t=e.e
t===$&&C.c()
r=Math.sin(u*5.3)
p=Math.sin(u*2.1)
o=Math.sin(u*0.9)
n=Math.sin(u*8)
t.Np(54+p*1.2,0.1+Math.sin(u*6.1)*0.007*i,new A.q(0,52+r*0.5*i,52),3.141592653589793+o*0.5+n*0.01*i)
if(u>l-0.9&&!a0.x){a0.x=!0
m.z=w
e.p3.sp(0,C.w(w===1?"L":w))
A.fR(880,140,0.3,d)
C.bP(D.fO,new A.ecT(),x.H)}if(u>=l){a0.d=2
a0.c=v
h=a1.b.a
t=e.d
t===$&&C.c()
r=t.d
r===$&&C.c()
t=r[t.e].cy.h(0,h)
g=e.gIA().h(0,h*100+w)
a1.f=D.o.E(w,1,a1.gM7())
a1.c=t===w
w=a1.at
w===$&&C.c()
w.f=0
w.r=112
w.w=3.141592653589793
a1.x=!1
a1.CW.aa(0)
a1.B(a1.ch)
e.ajm(a1,g)
a1.B(e.ghD())
w.f=0
w.r=16
w.w=0
w.x=!1
a1.y=1
e.aK=a1
e.m(e.giY())
e.e.Np(175,0.28,B.h_z,0)}break
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
t.apX(new A.q(0,40,w.r*0.7+14))
if(u>=2.2){f=a1.c
t=e.p1
if(t!=null)t.bR(0)
e.ok=null
w.x=!1
a1.y=0
e.m(e.giY())
e.e.hT(170,0.4,B.h_d,0)
A.fR(660,80,0.25,d)
w=""+a1.f
e.eh(f?"Level "+w+". This office has no power: walk onto the red mat at the breaker panel, or tap the red frames.":"Level "+w+" of "+a1.gM7()+".",!0)}}},
bPq(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.aK
if(g==null||g.a!=="tower")return D.bJ
w=i.d
w===$&&C.c()
v=w.d
v===$&&C.c()
u=v[w.e].cy.h(0,g.b.a)
w=D.w.j(0.55)
v=C.n(28)
t=C.K(D.aX,D.r,1)
s=g.f
r=g.gM7()
q=x.p
s=C.B(C.a([B.fTv,D.as,C.E(C.x(C.a([B.fLC,C.d("You are on level "+s+" of "+r,h,h,h,h,h,h,I.tf,h,h,h)],q),D.E,h,D.e,D.i,0,D.p),1),C.aA(h,D.rJ,D.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new A.eb4(i),h,h,h,h,h,h,!1,D.a3)],q),D.m,h,D.e,D.i,0,h,h)
p=C.a([],q)
for(;r>=1;--r){if(r===g.f)o=D.aJ
else o=r===u?D.bz.j(0.35):D.c.j(0.08)
n=new C.aP(14,14)
m=r===u
if(m)l=D.ax
else l=r===g.f?D.c:D.aX
k=r===g.f
j=new C.ay(l,k||m?2:1,D.r,-1)
l=r===1?"L":""+r
k=k?D.w:D.c
l=C.a([new C.y(l,h,new C.F(!0,k,h,h,h,h,19,D.u,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h),h,h,h,h,h,h,h,h,h)],q)
if(m)l.push(B.fTQ)
p.push(C.aA(h,C.p(D.A,C.x(l,D.m,h,D.b9,D.i,0,D.p),D.f,h,h,new C.o(o,h,new C.bH(j,j,j,j),new C.bh(n,n,n,n),h,h,D.n),h,52,h,h,h,h,h,58),D.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new A.eb5(i,r),h,h,h,h,h,h,!1,D.a3))}return C.p(D.A,C.eO(D.A,C.p(h,C.x(C.a([s,D.ae,B.fRK,D.W,C.bX(D.bG,p,D.bq,h,8,8),D.am,B.fCM],q),D.ak,h,D.e,D.O,0,D.p),D.f,h,h,new C.o(h,h,t,v,h,B.zj,D.n),h,h,h,D.bE,D.bQ,h,h,330),D.f,D.e3),D.f,w,h,h,h,h,h,h,h,h,h,h)},
aua(){var w,v,u,t,s,r,q=this,p=q.e
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
aRw(d,e,f,g,h){var w=new A.eaR(h)
return new A.q(w.$4(d.a,e.a,f.a,g.a),w.$4(d.b,e.b,f.b,g.b),w.$4(d.c,e.c,f.c,g.c))},
c3O(d){var w=this.d
w===$&&C.c()
w=w.d
w===$&&C.c()
return A.i9A(D.d.fY(w,new A.ebJ()),d)},
cz_(d){var w,v,u=this
u.B5()
u.Sc()
if(u.aN)u.a2Q()
u.aK=null
w=u.c3O(d)
if(w.length===0)return
u.m(new A.ed4(u,w))
v=u.e
v===$&&C.c()
v.y=4800
v.e=6
v.f=2600
v.z=-1.2
v.Q=1.4
v.r9(!0)
u.adP()
v=u.RG
if(v!=null)v.bR(0)
v=new A.a5h(u.gbOG(),Z.BF)
v.h7(0)
u.RG=v},
adP(){var w,v,u,t,s,r,q,p=this,o=++p.ry,n=p.rx
if(o>=n.length){p.a2P()
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
u=A.h0V(v,o,u.k4.t(0,t))
u.B(p.ghD())
p.aK=u
p.ajm(u,p.gIA().h(0,t))
t=p.aK
t.toString
t.B(p.ghD())
p.m(p.giY())}s=w.r
if(s&&p.aK!=null){p.aK=null
p.m(p.giY())}if(w.w==null&&w.x==null){s=!n||s
r=p.aua()
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
D.d.M(o,n+Math.max(1,new A.q(u.a-v.a,u.b-v.b,u.c-v.c).guW()))}}o=w.e
if(o!=null)p.eh("\ud83d\ude81 "+o,!0)},
bOH(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this
if(!a2.p4||a2.c==null)return
w=a2.rx[a2.ry]
v=(Date.now()-a2.to)/1000
u=w.x
if(u!=null){t=a2.CW.gir()/1000
s=B.a4F[u].a
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
h=a2.aua()
k=A.o7(h.a,k,i)
m=A.o7(h.b,m,i)}if(v>=w.d){a2.adP()
return}}else{u=w.w
if(u!=null){u=B.kp[u]
t=a2.CW.gir()
t=$.aRI().cWL(0,D.d.cu(B.kp,u),t/1000).a
u=t[0]
m=new A.q(u,26,t[1])
l=v*0.6+0.8
k=new A.q(u+Math.sin(l)*190,85,t[1]+Math.cos(l)*190)
if(v<2.5){j=v/2.5
i=j*j*(3-2*j)
g=a2.aua()
k=A.o7(g.a,k,i)
m=A.o7(g.b,m,i)}if(v>=w.d){a2.adP()
return}}else{f=v*w.c
if(a2.x1.length<2||f>=D.d.gak(a2.xr)){a2.adP()
return}u=a2.xr
t=u.length
e=0
for(;;){s=e+2
if(!(s<t&&u[e+1]<=f))break;++e}t=u[e]
n=e+1
d=D.k.E((f-t)/(u[n]-t),0,1)
t=new A.eb2()
u=e-1
k=a2.aRw(t.$2(a2.x1,u),t.$2(a2.x1,e),t.$2(a2.x1,n),t.$2(a2.x1,s),d)
m=a2.aRw(t.$2(a2.x2,u),t.$2(a2.x2,e),t.$2(a2.x2,n),t.$2(a2.x2,s),d)}}a0=m.aE(0,k)
a1=Math.max(8,a0.guW())
u=a2.e
u===$&&C.c()
t=Math.atan2(a0.a,-a0.c)
u.Np(a1,Math.asin(D.k.E(-a0.b/a1,-1,1)),m,t)},
a2P(){var w=this,v=w.e
v===$&&C.c()
v.y=0
v=w.RG
if(v!=null)v.bR(0)
w.RG=null
if(w.c==null)return
w.m(new A.edg(w))
w.y0()
w.eh("The drone has landed.",!0)},
bOF(){var w=null,v=new A.eb0(this),u=D.w.j(0.55),t=C.n(28),s=C.K(D.aX,D.r,1),r=x.p
return C.p(D.A,C.eO(D.A,C.p(w,C.x(C.a([C.B(C.a([B.fRx,D.as,B.bFM,C.aA(w,D.rJ,D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new A.eb_(this),w,w,w,w,w,w,!1,D.a3)],r),D.m,w,D.e,D.i,0,w,w),B.fEo,v.$4("\ud83c\udf06","The whole city","High flights over every street","city"),v.$4("\ud83e\udea7","Billboards and NGMY logos","Close to every ad, and the big logo board","billboards"),v.$4("\ud83c\udfc1","Edge billboards only","A tour round the big boards at the edges of the city","edges"),v.$4("\ud83c\udfe0","Houses","Fly by the houses, then go inside a big one","houses"),v.$4("\ud83c\udfe5","Hospital, shop and school","Fly in and look round inside each","hospital"),v.$4("\ud83d\ude8c","Traffic","Follow the self-driving buses and police cars","traffic"),v.$4("\ud83c\udfac","Everything","A little of all of it","all")],r),D.ak,w,D.e,D.O,0,D.p),D.f,w,w,new C.o(w,w,s,t,w,B.zj,D.n),w,w,w,D.bE,D.bQ,w,w,330),D.f,D.e3),D.f,u,w,w,w,w,w,w,w,w,w,w)},
gIA(){var w=this.d
w===$&&C.c()
w=w.d
w===$&&C.c()
return D.d.fY(w,new A.eby()).cx},
aum(d){var w,v=C.a([],x.u)
for(w=0;w<4;++w)v.push(d.r1(w))
return v},
czo(d){var w,v,u=C.a([],x.t)
for(w=0;w<4;++w){if(!d.r1(w)){v=d.d
v===$&&C.c()
v=w>=v.length}else v=!0
u.push(v?0:new A.edf(d,w).$0())}return u},
cGw(d,e){var w,v,u,t,s,r=d.d
r===$&&C.c()
if(e>=r.length)return""
w=r[e]
r=w.a
v=d.at.h(0,r)
u=v==null
t=u?null:v.a
s=A.a2k(t==null?w.b:t).toLowerCase()
if(u||!A.h59(w.b,v.a))return"nothing put in yet at "+A.j5(r).b
if(v.b.c<2)return"the "+s+" at "+A.j5(r).b+" is not finished: fasten every wire and close it"
return"the "+s+" at "+A.j5(r).b+" works but is NOT wired safely: "+d.apu(r).b},
ajm(d,e){var w=e==null
d.d=w?B.aAs:this.aum(e)
d.e=w?B.a33:this.czo(e)},
gbb8(){var w,v,u=this.aK
if(u==null||!u.c)return null
w=u.a
v=u.b.a
return w==="tower"?v*100+u.f:v},
gakl(){var w,v=this.gbb8(),u=v==null?null:this.gIA().h(0,v)
if(u!=null)w=u.gbkK()||D.d.d0(this.aum(u),new A.ee4())
else w=!1
return w},
asM(){var w,v,u,t,s,r=this,q=r.aK,p=r.gbb8(),o=p==null,n=o?null:r.gIA().h(0,p)
if(q==null||o||n==null)return
if(!D.d.d0(r.aum(n),new A.eaA())){r.eh("Not quite done: the wiring is not right yet. Open the wiring bench again (tap the panel) and check every wire.",!1)
return}w=q.b
r.gIA().W(0,p)
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
s=10+r.is.ap(26)
v=r.ghD()
if(v!=null)v.r+=s
r.lg=Date.now()
r.lB=0
q.d=B.drK
q.e=B.a33
q.B(r.ghD())
r.m(r.giY())
A.fR(880,120,0.3,"tri")
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
YF(d){return this.c_J(d)},
c_J(d){var w=0,v=C.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k
var $async$YF=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:l=d.b
k=l.a
if(d.a==="tower")k=k*100+d.f
s=t.gIA().c3(0,k,new A.ebv(l,d))
w=3
return C.b(t.yg(new A.ebw(s)),$async$YF)
case 3:if(t.c==null){w=1
break}t.ajm(d,s)
if(t.gakl())t.asM()
else{d.B(t.ghD())
t.m(t.giY())
r=x.s
q=C.a([],r)
if(s.r1(0))q.push("outlet 1")
if(s.r1(1))q.push("outlet 2")
if(s.r1(2))q.push("the ceiling light")
if(s.r1(3))q.push("the switch")
p=C.a([],r)
if(!s.r1(0))p.push("outlet 1")
if(!s.r1(1))p.push("outlet 2")
if(!s.r1(2))p.push("the ceiling light")
if(!s.r1(3))p.push("the switch")
r=C.a([],r)
for(o=0;o<4;++o)if(!s.r1(o))r.push(t.cGw(s,o))
n=x.cc
m=C.C(new C.Z(r,new A.ebx(),n),n.k("M.E"))
r=q.length===0?"Nothing is fixed yet":"Fixed so far: "+D.d.aG(q,", ")
p=D.d.aG(p,", ")
q=m.length===0?"":"Why: "+C.d_(m,0,C.dB(2,"count",x.S),C.T(m).c).aG(0,"; ")+". "
t.eh(r+". Still to do: "+p+". "+q+"Tap the red frames to carry on.",!1)}case 1:return C.h(u,v)}})
return C.i($async$YF,v)},
abn(d){return this.bRy(d)},
bRy(d){var w=0,v=C.j(x.H),u,t=this,s,r,q,p,o
var $async$abn=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:o=t.d
o===$&&C.c()
s=o.d
s===$&&C.c()
r=d.a
q=s[o.e].db.c3(0,r,new A.eba())
w=3
return C.b(t.yg(new A.ebb(q)),$async$abn)
case 3:if(t.c==null){w=1
break}if(q.c>=2&&A.La(A.t6("light"),q).a==="ok"){o=t.d
s=o.d
s===$&&C.c()
s[o.e].db.W(0,r)
o=t.d
s=o.d
s===$&&C.c()
s[o.e].k3.W(0,r)
p=10+t.is.ap(26)
r=t.ghD()
if(r!=null)r.r+=p
t.m(t.giY())
t.eh("The street light is on again. You wired it correctly: black to black, white to white, ground to ground. +"+p+" stars.",!0)}else t.eh("The light is still out: finish the wiring and fit the cover, then it comes on.",!1)
case 1:return C.h(u,v)}})
return C.i($async$abn,v)},
c8g(){var w,v,u=this,t=u.aC
if(t==null)return
w=u.d
w===$&&C.c()
v=w.d
v===$&&C.c()
v[w.e].dz(0,"crate",t.f+Math.sin(t.w)*34,t.r+Math.cos(t.w)*34)
u.al=null
u.m(u.giY())
u.eh("You put the crate down.",!0)},
c5I(){var w,v,u,t,s,r,q,p,o=this,n=o.d
n===$&&C.c()
n=n.d
n===$&&C.c()
w=D.d.fY(n,new A.ebL())
if(o.gaXf())return
n=x._
v=C.a([],n)
for(u=w.x,t=u.length,s=w.k4,r=0;r<u.length;u.length===t||(0,C.L)(u),++r){q=u[r]
p=q.b
if(p==="house2"||p==="bighouse"){p=q.a
p=!s.t(0,p)&&p!==o.jh}else p=!1
if(p)v.push(q)}if(s.a<2&&v.length!==0&&o.bD==null&&o.bE==null){q=v[o.is.ap(v.length)]
v=q.a
s.M(0,v)
o.jh=v
v=q.b==="bighouse"?"the big house":"the house"
o.b4T(new A.Qk(q,v,"power","",o.aOm(),0))}n=C.a([],n)
for(v=u.length,t=w.k3,r=0;r<u.length;u.length===v||(0,C.L)(u),++r){q=u[r]
s=q.b
if((s==="pole"||s==="lamppost")&&!t.t(0,q.a))n.push(q)}if(t.a<3&&n.length!==0&&D.o.F(o.bX,90)===0){t.M(0,n[D.o.F(o.bX*5,n.length)].a)
o.eh("\u26a1 A street light went out in the town. Find it (it is dark, with a red sign) and fix it.",!1)}n=o.d
v=n.d
v===$&&C.c()
if(v[n.e].c==="outside"&&o.aK==null)o.m(o.giY())},
axb(d){return this.c5J(d)},
c5J(d){var w=0,v=C.j(x.H),u=this
var $async$axb=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:u.m(new A.ebM(u,d))
return C.h(null,v)}})
return C.i($async$axb,v)},
aXq(){var w,v=this.cJ,u=v==null?null:v.a
if(u==null)return null
w=A.vE(new A.q(0,0,B.hC.h(0,u.b).d/2+60),u.e*3.141592653589793/2)
return new C.z(u.c+w.a,u.d+w.c)},
awj(){var w=this.aC,v=this.aXq()
if(w==null||v==null)return null
return D.k.V(Math.sqrt(Math.pow(v.a-w.f,2)+Math.pow(v.b-w.r,2))/10)},
csw(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.aC,g=j.gKx()
g=g==null?i:g.ga6Y(0)
if(g==null){g=j.gpn()
g=g==null?i:g.ga6Y(0)
w=g}else w=g
if(w==null)w=j.aXq()
g=!1
if(j.cJ==null){v=j.gpn()
if((v==null?i:v.x)==null){g=j.gKx()
g=(g==null?i:g.f)==null}}v=!0
if(!g)if(h!=null)if(w!=null){g=j.d
g===$&&C.c()
v=g.d
v===$&&C.c()
g=v[g.e].c!=="outside"||j.aK!=null}else g=v
else g=v
else g=v
if(g)return B.Ie
g=C.a([],x.z)
u=new A.fm(g)
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
u.aE_(new A.q(h.f+o*k,1.4,h.r+n*k),B.hgp,D.bu,p)
k+=26;++l}}u.f=3
u.d=0.4
u.dE(new A.q(v,0,s),new A.q(v,170,s),4,D.bu,8)
u.dE(new A.q(v,0,s),new A.q(v,1.6,s),24,D.bu,14)
return g},
bH4(){var w,v,u,t,s,r,q,p=this,o=null,n=p.y1,m=new A.ea4(),l=new A.ea3(),k=x.p
if(n!=null){w=p.awj()
v=C.a([C.B(C.a([C.ha(D.aB,o,C.d(n.gbeR(),o,o,o,o,o,o,D.pF,o,o,o),o,24),D.bb,C.E(C.x(C.a([C.d(n.gaE9(),o,o,o,o,o,o,D.dd,o,o,o),B.fN_],k),D.E,o,D.e,D.i,0,D.p),1),C.aA(o,D.rJ,D.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new A.ea5(p),o,o,o,o,o,o,!1,D.a3)],k),D.m,o,D.e,D.i,0,o,o),D.ae],k)
for(u=n.gaHp(0),t=0;t<3;++t)v.push(m.$1(u[t]))
u=D.bu.j(0.12)
s=C.n(14)
r=C.K(D.bu.j(0.5),D.r,1)
v.push(C.p(o,C.B(C.a([B.c_c,D.as,C.E(C.d(w==null?"A yellow line on the ground will show you the way.":"Follow the yellow line on the ground. It is about "+C.w(w)+" metres away.",o,o,o,o,o,o,D.oM,o,o,o),1)],k),D.m,o,D.e,D.i,0,o,o),D.f,o,o,new C.o(u,o,r,s,o,o,D.n),o,o,o,D.l6,D.bT,o,o,o))
v.push(l.$5$primary(A1.Hj,"Show me the way",D.bu,new A.ea6(p),!0))
v.push(l.$4(B.bMw,"Take me there",D.bf,new A.ea7(p,n)))
v.push(l.$4(D.jV,"Later",D.aB,new A.ea8(p,n)))
q=C.x(v,D.ak,o,D.e,D.O,0,D.p)}else q=C.x(C.a([B.f34,D.ae,m.$1("Hello, this is the City office. A few calls were missed."),m.$1("Please answer the phone, so you can keep working."),m.$1("Every call is a person who needs help. Thank you for answering!"),l.$5$primary(D.hy,"OK, I will answer",D.bf,new A.ea9(p),!0)],k),D.ak,o,D.e,D.O,0,D.p)
k=D.w.j(0.55)
v=C.n(28)
return C.p(D.A,C.eO(D.A,C.p(o,q,D.f,o,o,new C.o(o,o,C.K(D.aX,D.r,1),v,B.dro,B.zj,D.n),o,o,o,D.bE,D.bQ,o,o,330),D.f,D.e3),D.f,k,o,o,o,o,o,o,o,o,o,o)},
cuQ(){var w,v,u,t,s=this,r=s.d
r===$&&C.c()
w=r.d
w===$&&C.c()
v=w[r.e].BV(s.Q)
if(v==null)return
u=B.dzf.h(0,v.b)
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
w=s.ghD()
if(w!=null)w.r+=u
s.m(s.giY())
s.eh("Sold for "+C.w(u)+" points.",!0)},
A4(d){return this.bI9(d)},
bI9(d){var w=0,v=C.j(x.H),u,t=this,s
var $async$A4=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return C.b(C.bV(D.L,null,new A.eaw(d),s,!0,!0,!0,null,!1,!1,x.H),$async$A4)
case 3:if(t.c==null){w=1
break}t.m(new A.eax(t))
case 1:return C.h(u,v)}})
return C.i($async$A4,v)},
crt(d){var w,v,u=this.ghD()
if(u!=null){w=u.c
w===$&&C.c()
w=d>=w.length}else w=!0
if(w)return C.f8(null,x.H)
w=u.c
w===$&&C.c()
v=w[d]
w=this.c
w.toString
return C.bV(E.lB,null,new A.ecS(this,v,u),w,!0,!0,!0,D.k3,!1,!1,x.H)},
azw(d){var w=this.c
w.toString
return C.bV(E.lB,null,new A.ecB(this,d),w,!0,!0,!1,D.k3,!1,!1,x.H)},
cE8(){var w=this.c
w.toString
return C.bV(E.lB,null,new A.edP(this),w,!0,!0,!0,D.k3,!1,!1,x.H)},
cDw(){var w=this.c
w.toString
return C.bV(D.L,null,new A.edB(this),w,!0,!0,!0,null,!1,!1,x.H)},
b7M(d,e){var w,v,u,t=this,s=t.dx
if(s!=null)s.a4(0)
s=t.d
s===$&&C.c()
s=s.gqT()
w=s.length
v=0
for(;v<w;++v){u=s[v]
if(u.k1==null)u.k1="tv100"
if(u.c==="hall")if(u.k2==null)u.k2="tv100"
u.p2=!0}t.z=!1
s=x.fG
w=t.d
if(e){s=new A.aWz(!0,w,d,C.a([],s))
s.b_m()}else{s=new A.aWz(!1,w,d,C.a([],s))
s.b_m()}t.cx=s
t.cy=t.CW.gir()/1000
t.x=!0
t.r="look"
t.w=!1
s=D.d.gI(t.cx.d)
t.bj.aa(0)
t.b8=!1
t.m(new A.edc(t,s.a))
t.y0()
t.dx=C.dh(D.jg,new A.edd(t))
t.m(new A.ede())},
czk(d){return this.b7M(d,!1)},
bNY(d,e){var w,v=d.w[e],u=v.b
A:{if("left"===u){w=new A.q(-d.gea(0)/2,40,v.c+d.gh_(0)/2-40)
break A}if("right"===u){w=new A.q(d.gea(0)/2,40,v.c+d.gh_(0)/2-40)
break A}w=new A.q(v.c,40,0)
break A}return w},
cDx(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=i.cx
if(h==null||i.c==null)return
w=i.CW.gir()/1000-i.cy
v=h.e
v===$&&C.c()
if(w>=v){i.Sc()
i.iJ("The tour is over. Press Tour to walk the house again.")
return}if(i.b8)return
u=h.bc7(w)
v=i.d
v===$&&C.c()
t=v.e
if(u.a!==t){i.ajK(u)
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
A.fR(1000,50,0.25,"tri")
p=!0}if(p)i.m(i.giY())
m=Math.max(s.gea(0)*0.95,s.gh_(0)*1.15)+20
t=t&&v<s.w.length
q=u.b
if(t){l=i.bNY(s,v)
k=D.dw.aw(0,D.k.E(u.ay,0,1))
j=s.w[v].b
v=i.e
v===$&&C.c()
t=j==="back"?14:0
if(j==="left")n=0.55*k
else n=j==="right"?-0.55*k:-0.03
v.hT(m+(70-m)*k,0.2-0.07*k,new A.q(l.a*0.9+q*0.1,36,l.c+t),n)}else{v=i.e
v===$&&C.c()
v.hT(m,0.24,new A.q(q*0.7,30,u.c*0.6+8),-0.05-q/(s.gea(0)/2)*0.2)}if(u.as!==i.dy)i.m(new A.edC(i,u))},
ajK(d){return this.cDv(d)},
cDv(d){var w=0,v=C.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j
var $async$ajK=C.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:l={}
r.b8=!0
l.a=null
t=4
p=$.aV.al$.x.h(0,r.a_)
p=p==null?null:p.gbd()
q=x.cU.a(p)
p=q
p=p==null?null:p.m6(0.6).da(0,D.iW)
j=l
w=7
return C.b(x.fa.b(p)?p:C.dV(p,x.eT),$async$ajK)
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
r.axM(d.a,!0)
p=r.d
n=p.d
n===$&&C.c()
m=n[p.e]
p=d.ch
if(p>=0&&p<m.w.length)m.ax.n(0,p,1.25)
r.m(new A.edr(l,r))
l=r.e
l===$&&C.c()
l.d=new A.q(d.b,36,d.c+4)
l.c=70
l.a=-0.03
l.b=0.15
r.b8=!1
case 1:return C.h(u,v)
case 2:return C.f(s.at(-1),v)}})
return C.i($async$ajK,v)},
Sc(){var w,v,u,t=this,s=t.dx
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
t.m(new A.edj(t))
t.y0()},
cmb(){var w,v,u,t,s,r,q,p,o,n=this,m=n.cx
if(m!=null)return m.bc7(n.CW.gir()/1000-n.cy)
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
return A.atT(n.c5.d>0,0,-1,"",!1,o,"",-1,q,!1,!1,!1,v.a,p,r,u,s,t)}return null},
b8v(){var w,v=this,u=v.c5,t=u.r
if(t<=0)return
u.r=0
w=v.ghD()
if(w!=null)w.r=Math.max(0,w.r-t)
if(v.c!=null)v.m(new A.edk())},
a2M(){var w,v=this,u=v.d
u===$&&C.c()
w=u.d
w===$&&C.c()
u=w[u.e]
if(u.c!=="outside")return
w=v.aC;(w==null?v.aC=A.hob(u,0,24):w).MC(0)
v.aN=!0
v.bM=Date.now()
u=v.b4
if(u!=null)u.bR(0)
u=new A.a5h(v.gcGd(),D.ZP)
u.h7(0)
v.b4=u
v.m(new A.edb())
v.iJ("Slide the round stick to walk. Walk up to a door to go in: the house, the hospital or the shop. Double tap a spot to go there.")},
a2Q(){var w,v=this
v.aN=!1
v.be=v.b2=0
v.bi=!1
w=v.b4
if(w!=null)w.bR(0)
v.b4=null
w=v.aC
if(w!=null)w.x=!1
v.m(new A.edi())},
cGe(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.aK,e=f==null
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
s=D.k.E((t-g.bM)/1000,0,0.1)
g.bM=t
w.MC(0)
w.z=g.bi&&g.bG==null
if(g.bG==null)w.aJH()
w.cP3(s)
v=g.e
v===$&&C.c()
r=Math.sin(v.a)
q=Math.cos(g.e.a)
v=g.be
u=g.b2
p=g.bG==null
o=g.c5
n=p?o.c>0:o.b<=0
if(p)w.ch=o.d>0?0.28:1
if(n){if((u!==0||v!==0||w.at!=null)&&t-g.c8>6000){g.c8=t
g.eh(p?"You are too tired to walk. Rest a little, or buy some food in a shop.":"The car has no gas. Get out, walk to a gas station and buy gas.",!1)}w.at=null
m=!1}else if(u!==0||v!==0){w.at=null
m=w.aLY(0,r*v+q*u,-q*v+r*u,s)}else m=w.FH(0,s)
v=!m
if(v)w.x=!1
if(g.bZ===0){u=g.d
u===$&&C.c()
p=u.d
p===$&&C.c()
l=p[u.e].c==="outside"}else l=!1
if(l){u=m&&g.bG==null
k=o.bk_(s,m&&g.bG!=null,u)}else k=null
if(k!=null)g.eh(k,!1)
g.b8v()
if(!v||w.Q>0){v=g.e
u=w.f
p=w.r
v.ay=null
v.d=new A.q(u,30,p)
v.aW()}if(!e){f.cx=g.al
j=f.fw(0,g.ghD())
g.al=f.cx
if(j!=null){g.iJ(j)
g.m(g.giY())}if(f.cy){f.cy=!1
g.YF(f)}if(f.dx){f.dx=!1
if(!g.id)g.m(new A.ee_(g))}if(f.db){f.db=!1
if(!g.k2)g.m(new A.ee0(g))}if(f.w){f.w=!1
if(!g.k3)g.m(new A.ee1(g))}e=f.x
if(e!==g.k4){g.k4=e
v=g.e
if(e)v.hT(330,0.35,B.h2c,1.35)
else v.hT(170,0.4,new A.q(0,30,110),0)}e=f.at
e===$&&C.c()
v=!1
if(e.r>308)if(Math.abs(e.f)<36)e=!(f.a==="tower"&&f.f>1)
else e=v
else e=v
if(e)g.aXI()
if(!g.k4&&g.ok==null)g.c1w()
return}e=!1
if(g.bG==null){e=g.gpn()
e=(e==null?null:e.x)!=null}if(e){e=g.gpn()
e.toString
g.aSc(e.bky(w.f,w.r,g.CW.gir()/1000))}e=!1
if(g.bG==null){e=g.d
e===$&&C.c()
v=e.d
v===$&&C.c()
e=v[e.e].c==="outside"&&g.ok==null&&g.bZ===0}if(e){e=$.aRI()
e.FH(0,g.CW.gir()/1000)
i=e.cRn(w.f,w.r)
if(i>=0)g.csh(i)}e=g.bG
if(e!=null)g.cEf(w)
if(m&&g.bG==null){if(Math.abs(w.f)<24){e=w.r
e=e>-2&&e<14}else e=!1
if(e)if(!(Math.abs(w.w)>2.2)){e=w.at
e=e!=null&&e.b<4}else e=!0
else e=!1
if(e){g.a2Q()
g.AB(10)
g.iJ("You are inside the living room. Use Go outside to come back out.")
return}e=g.d
e===$&&C.c()
v=e.d
v===$&&C.c()
e=D.d.gag(v[e.e].x)
v=new C.f2(e,new A.ee2())
while(v.C()){u=e.gS(0)
h=A.vE(new A.q(0,0,B.hC.h(0,u.b).d/2+10),u.e*3.141592653589793/2)
if(Math.abs(w.f-(u.c+h.a))<22&&Math.abs(w.r-(u.d+h.c))<16){g.ab6(u)
return}}}g.cEy(w)},
c1w(){var w,v,u,t,s,r,q,p,o,n,m=this,l=m.e
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
if(s!==w)l.bo7(s)},
ab6(d){var w,v,u,t,s,r,q=this
q.be=q.b2=0
w=d.b
if(w==="store"||w==="gasstation")w="shop"
else if(w==="hq")w="tower"
v=q.d
v===$&&C.c()
u=v.d
u===$&&C.c()
t=d.a
s=A.h0V(w,d,u[v.e].k4.t(0,t))
s.cx=q.al
s.B(q.ghD())
q.ajm(s,q.gIA().h(0,t))
s.B(q.ghD())
q.aK=s
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
v.z=0.15
v.Q=1.35
v.r9(!0)
q.e.hT(170,0.4,new A.q(0,30,110),0)
q.m(q.giY())
A:{if("hospital"===w){w="The hospital. Walk onto the blue mat to admit the sick, and up to a bed to treat the patient. Walk to the green mat to go out."
break A}if("dmv"===w){w="The licence office. Walk onto the blue mat at the desk to get your Uber licence. Walk to the green mat to go out."
break A}if("tower"===w){w="The lobby of an office tower. Walk onto the blue mat (or tap the elevator) to choose a level. Walk to the green mat to go out."
break A}if("house2"===w||"bighouse"===w){w="The house. Walk onto the red or green mat at the breaker panel. Walk to the green mat to go out."
break A}if("school"===w){w="The school. Walk onto the mats to teach the class or read in the library. Walk to the green mat to go out."
break A}if("firestation"===w){w="The fire station. Walk onto the mats to check the equipment. Walk to the green mat to go out."
break A}w="The shop. Walk onto the yellow mat for food and the purple mat for medicine. Walk to the green mat to go out."
break A}q.iJ(w)
A.fR(660,80,0.25,"tri")},
aXI(){var w,v,u,t=this,s=t.aK,r=t.aC
if(s==null||r==null)return
w=s.b
v=B.hC.h(0,w.b)
v.toString
t.al=s.cx
t.aK=null
t.be=t.b2=0
u=A.vE(new A.q(0,0,v.d/2+30),w.e*3.141592653589793/2)
r.f=w.c+u.a
r.r=w.d+u.c
r.w=0
r.at=null
r.MC(0)
t.m(t.giY())
t.y0()
v=t.e
v===$&&C.c()
v.apX(new A.q(r.f,30,r.r))
t.iJ("You are back in the city.")},
cEy(d){var w,v,u,t,s,r,q,p,o,n,m=this,l={}
l.a=null
w=m.bG==null
v=!1
if(!w||m.al==null){u=m.c5.b
if(u<(!w?0.7:0.99)){u=m.d
u===$&&C.c()
t=u.d
t===$&&C.c()
u=D.d.b3(t[u.e].x,new A.edT(d))
v=u}}if(v)l.a=new C.Gi(new A.edU(m),"\u26fd Buy gas ("+A.h9v(m.c5.b)+" \u2b50)")
else if(!w)l.a=new C.Gi(m.gbTD(),"\ud83d\udeaa Get out")
else{if(m.al!=null)l.a=new C.Gi(m.gc8f(),"\u2b07 Put the crate down")
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
p=B.hC.h(0,t).a.toLowerCase()
if(l.a!=null)break
if(t==="crate"&&q<46){l.a=new C.Gi(new A.edV(m,r),"\ud83d\udce6 Pick up the crate")
break}if(t==="pole"||t==="lamppost"){o=m.d
n=o.d
n===$&&C.c()
o=n[o.e].k3.t(0,r.a)&&q<60}else o=!1
if(o){l.a=new C.Gi(new A.edW(m,r),"\ud83d\udd27 Fix the street light")
break}if(D.d.t(B.I4,t)&&q<36){l.a=new C.Gi(new A.edX(m,r),"\ud83c\udf4e Feed the "+p)
break}if(D.d.t(B.dfN,t)&&q<60){l.a=new C.Gi(new A.edY(m,r),"\ud83d\ude97 Get in the "+p)
break}}}w=l.a
w=w==null?null:w.b
u=m.cL
if(w!=(u==null?null:u.b))m.m(new A.edZ(l,m))},
bQP(d){var w,v=this,u=v.cl,t=d.a,s=u.h(0,t),r=B.hC.h(0,d.b).a
if(s!=null&&v.CW.gir()/1000-s<30){v.eh("The "+r.toLowerCase()+" has just eaten. Come back in a little while.",!1)
return}u.n(0,t,v.CW.gir()/1000)
u=v.ghD()
if(u==null)w=null
else{++u.r
w="You fed the "+r.toLowerCase()+". +1 point."
u.PR(w)}if(w==null)w="You fed the "+r.toLowerCase()+"."
A.fR(880,90,0.25,"tri")
v.m(new A.eb9())
v.iJ(w)},
bTs(d){var w=this,v=w.aC
if(v==null)return
w.bG=d
v.CW=d.a
v.ay=22
v.ch=2.4
v.f=d.c
v.r=d.d
v.w=Math.atan2(Math.cos(d.e*3.141592653589793/2),-Math.sin(d.e*3.141592653589793/2))
v.at=null
v.MC(0)
w.m(w.giY())
w.iJ("You are driving the "+B.hC.h(0,d.b).a.toLowerCase()+". Slide the stick to drive. Press Get out to stop.")
A.fR(300,120,0.25,"tri")},
bTE(){var w,v,u,t,s,r,q=this,p=q.bG,o=q.aC
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
o.MC(0)
for(w=[46,62,80],u=0;u<3;++u){t=w[u]
s=o.f+Math.sin(v)*t
r=o.r+Math.cos(v)*t
if(!o.KP(s,r)){o.f=s
o.r=r
break}}o.aJH()
q.m(q.giY())
q.iJ("You got out.")},
bOE(){var w=this.bG,v=this.aC
if(w==null||v==null)return null
return new C.e5([w.b,v.f,v.r,v.w,w.f])},
yg(d){return this.coh(d)},
coh(d){var w=0,v=C.j(x.H),u=1,t=[],s=[],r=this,q,p
var $async$yg=C.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:++r.bZ
q=r.eu?r.ab:0
u=2
p=r.c
p.toString
w=5
return C.b(C.a4(p,!1).cc(C.eh(new A.ecI(q,d),!1,null,x.H)),$async$yg)
case 5:s.push(4)
w=3
break
case 2:s=[1]
case 3:u=1;--r.bZ
w=s.pop()
break
case 4:return C.h(null,v)
case 1:return C.f(t.at(-1),v)}})
return C.i($async$yg,v)},
Z6(){var w=0,v=C.j(x.H),u=1,t=[],s,r,q
var $async$Z6=C.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
w=6
return C.b(C.az(),$async$Z6)
case 6:s=e
w=C.ev(J.r(s.a,"ngmy_city_locked_until"))!=null?7:8
break
case 7:w=9
return C.b(J.hu(s,"ngmy_city_locked_until"),$async$Z6)
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
return C.i($async$Z6,v)},
aBZ(d){var w=this,v=++w.hN
if(v>=3){w.hN=0
w.B5()
w.b0S()}else if(v===2){w.eh(d+". That is two in a row.",!1)
w.b0S()}else w.eh(d+". Answer the phone and finish the job, or you lose your place.",!1)},
b0S(){A.fR(1046,160,0.3,"sine")
this.m(new A.ebQ(this))},
gaXf(){return this.bZ>0||this.cJ!=null||Date.now()<0||this.p4},
aOm(){var w,v,u=B.dra[this.is.ap(6)]
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
c8j(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this,a2=a1.d
a2===$&&C.c()
a2=a2.d
a2===$&&C.c()
w=D.d.fY(a2,new A.ebN())
v=a1.ghD()
a2=x._
u=C.a([],a2)
for(t=w.x,s=t.length,r=w.k4,q=0;q<t.length;t.length===s||(0,C.L)(t),++q){p=t[q]
o=p.b
if(o==="house2"||o==="bighouse"){o=p.a
o=!r.t(0,o)&&o!==a1.jh}else o=!1
if(o)u.push(p)}s=C.a([],a2)
for(o=t.length,n=w.k3,q=0;q<t.length;t.length===o||(0,C.L)(t),++q){p=t[q]
m=p.b
if((m==="pole"||m==="lamppost")&&!n.t(0,p.a))s.push(p)}l=new C.Z(t,new A.ebO(),C.T(t).k("Z<1>"))
k=C.a([0,1,2,3],x.t)
o=a1.is
D.d.dZ(k,o)
a2=C.a([],a2)
for(m=t.length,j=w.cy,q=0;q<t.length;t.length===m||(0,C.L)(t),++q){p=t[q]
i=p.b
if((i==="tower"||i==="hq")&&!j.aj(0,p.a))a2.push(p)}for(t=k.length,m=v!=null,q=0;q<k.length;k.length===t||(0,C.L)(k),++q){h=k[q]
if(h===0&&u.length!==0&&r.a<4){p=u[o.ap(u.length)]
a2=p.a
r.M(0,a2)
a1.jh=a2
a2=p.b==="bighouse"?"the big house":"the house"
return new A.Qk(p,a2,"power","",a1.aOm(),0)}if(h===1&&m&&!l.gan(0)){i=v.gC7()
g=C.T(i).k("Z<1>")
f=C.C(new C.Z(i,new A.ebP(),g),g.k("M.E"))
i=f.length
if(i!==0){e=f[o.ap(i)]
e.e=!0
e.c=Math.min(e.c,70)
d=l.gag(0)
if(!d.C())C.b9(C.fu())
return new A.Qk(d.gS(0),"the hospital","sick",e.a.b,"",0)}}if(h===3&&a2.length!==0&&j.a<3){p=a2[o.ap(a2.length)]
a0=2+o.ap(A.hzK(p)-1)
j.n(0,p.a,a0)
return new A.Qk(p,p.b==="hq"?"the NGMY company building":"the office tower","office","","",a0)}if(h===2&&s.length!==0&&n.a<4){p=s[o.ap(s.length)]
n.M(0,p.a)
return new A.Qk(p,"the street","light","","",0)}}return null},
aXp(d){var w,v,u,t=this.d
t===$&&C.c()
t=t.d
t===$&&C.c()
w=D.d.fY(t,new A.ebz())
switch(d.c){case"power":return!w.k4.t(0,d.a.a)
case"light":return!w.k3.t(0,d.a.a)
case"office":return!w.cy.aj(0,d.a.a)
default:v=this.ghD()
if(v==null)return!1
t=v.c
t===$&&C.c()
u=new C.Z(t,new A.ebA(d),C.T(t).k("Z<1>"))
if(!u.gag(0).C())return!0
return u.gI(0).r>=0||!u.gI(0).e||!u.gI(0).f}},
Sq(d){var w,v,u,t=this,s=t.aC
if(s!=null){w=t.d
w===$&&C.c()
v=w.d
v===$&&C.c()
w=v[w.e].c!=="outside"}else w=!0
if(w)return
if(t.aK!=null)t.aXI()
s.at=null
s.MC(0)
u=t.bSm(d,s)
s.f=u.a
s.r=u.b
s.aJH()
w=t.e
w===$&&C.c()
w.xl(170,new A.q(s.f,30,s.r))
if(!t.aN)t.a2M()},
bSm(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=d.b,i=B.hC.h(0,j)
i.toString
w=B.aQS.t(0,j)
v=w?i.d/2+32:34
u=A.vE(new A.q(0,0,1),d.e*3.141592653589793/2)
j=u.c
i=u.a
t=-i
s=C.a([],x.f)
if(w)for(r=0;r<5;++r)for(q=v+B.dcC[r],p=i*q,q=j*q,o=0;o<5;++o){n=B.d1M[o]
s.push(new C.z(d.c+p+j*n,d.d+q+t*n))}else for(m=0;m<12;++m){l=m*3.141592653589793/6
s.push(new C.z(d.c+Math.cos(l)*v,d.d+Math.sin(l)*v))}for(j=s.length,r=0;r<s.length;s.length===j||(0,C.L)(s),++r){k=s[r]
if(!e.KP(k.a,k.b))return k}return D.d.gI(s)},
cz7(d){var w,v,u=this
u.cJ=d
u.hO=0
u.Sq(d.a)
w=d.c
A:{if("sick"===w){v="New job: "+d.d+" is sick. Go into the hospital and onto the desk."
break A}if("light"===w){v="New job: a street light is out. Tap the dark light to fix it."
break A}v="New job: a house has no power. Walk in and fix it at the panel."
break A}u.eh(v,!0)
u.m(new A.ed5())},
bUc(d){var w,v=this,u=v.d
u===$&&C.c()
w=u.d
w===$&&C.c()
if(w[u.e].c!=="outside")return
v.Sq(d)
u=d.b
if(u==="house2"||u==="bighouse")v.ab6(d)
else if(u==="tower"||u==="hq"){v.ab6(d)
v.m(new A.ebt(v))}else v.eh(y.Y,!0)},
cDF(){var w,v,u,t=$.aRI(),s=C.a([],x.f),r=this.gpn()
r=r==null?null:r.amt(this.CW.gir()/1000)
if(r==null)r=B.Id
w=r.length
v=0
for(;v<r.length;r.length===w||(0,C.L)(r),++v){u=r[v]
s.push(new C.z(u.b,u.c))}t.d=s
return A.ima(this.CW.gir()/1000)},
csh(d){var w,v,u,t,s,r=this,q=Date.now()
if(q-r.mO<1e4)return
r.mO=q
w=r.aC
if(w==null)return
A.fR(110,600,0.5,"noise")
C.fM()
r.be=r.b2=0
w.at=null
v=r.c5
v.a=Math.min(v.a,0.2)
v.c=v.d=0
u=B.kp[d].a==="bus"?"bus":"police car"
v=r.d
v===$&&C.c()
t=v.d
t===$&&C.c()
v=t[v.e].x
t=C.T(v).k("Z<1>")
s=C.C(new C.Z(v,new A.ecU(),t),t.k("M.E"))
if(s.length===0){r.eh("A "+u+" ran you over! Always cross at the zebra crossing when the green walking person shows.",!1)
return}v=r.gpn()
if(v!=null)v.cWS(D.d.gI(s))
r.Sq(D.d.gI(s))
r.ab6(D.d.gI(s))
r.eh("\ud83d\ude91 A "+u+" ran you over! An ambulance brought you to the hospital. Medicine and food are being ordered for you: they are on the Orders board. Cross at the zebra crossing when the green walking person shows.",!1)
r.m(new A.ecV(r))},
aj3(){var w=0,v=C.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g
var $async$aj3=C.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:h=r.d
h===$&&C.c()
if(h.a.length!==0){w=1
break}q=null
p=$.a4i
w=p==null||p.a!==h.b?3:4
break
case 3:t=6
w=9
return C.b(A.aU6(),$async$aj3)
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
if(h)m=A.h12(q)
else if(q!=null&&r.ej){h=C.aK(J.r(q,"seed"))
l=h==null?null:D.k.N(h)
h=A.aWy(l==null?r.d.b:l)
r.d=$.Ec=h
A.heU(h,q)
m=A.h12(q)}else{h=r.d.b
m=A.h11(h,h)
m.NE(r.d)}}$.a4i=m
A.aU7().bK(new A.ed6(r),x.P)
for(h=m.d,k=h.length,j=r.bJ,i=0;i<h.length;h.length===k||(0,C.L)(h),++i)j.M(0,h[i].a)
r.m(new A.ed7(r))
r.by=C.dh(D.fB,new A.ed8(r))
case 1:return C.h(u,v)
case 2:return C.f(s.at(-1),v)}})
return C.i($async$aj3,v)},
c8i(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=i.ghD()
if(h==null||i.c==null)return
if(i.cx==null){w=i.d
w===$&&C.c()
h.aDD(0,1,w)}if(++i.bX%8===0){w=i.d
w===$&&C.c()
h.CX(0,w)}if(i.aK!=null&&i.gakl())i.asM()
w=!1
if(!i.aN)if(i.bZ===0){v=i.d
v===$&&C.c()
u=v.d
u===$&&C.c()
if(u[v.e].c==="outside"){w=i.c5
w=w.c>0||w.d>0}}if(w){t=i.c5.a7_(1)
if(t!=null)i.eh(t,!1)
i.b8v()}if(i.aN){w=i.d
w===$&&C.c()
v=w.d
v===$&&C.c()
w=v[w.e].c==="outside"&&!i.c5.f&&i.is.ap(240)===0}else w=!1
if(w){w=i.c5
w.f=!0
w.aW()
i.eh("You feel unwell: a headache. You tire faster until you take pills from a shop.",!1)}if(Date.now()<0||i.bZ>0)return
w=!1
if(D.o.F(i.bX,45)===20){v=i.d
v===$&&C.c()
if(v.a.length===0){w=v.d
w===$&&C.c()
v=w[v.e].c==="outside"
w=v}}if(w)i.c5I()
w=i.d
w===$&&C.c()
if(w.a.length===0){v=w.d
v===$&&C.c()
v=v[w.e].c==="outside"}else v=!1
if(v){w=i.gpn()
s=w==null?null:w.FH(0,i.CW.gir()/1000)
if(s!=null)i.eh("\ud83c\udfc1 "+s,!0)
r=i.aC
if(r!=null){w=i.gpn()
w=(w==null?null:w.x)!=null&&i.aK==null}else w=!1
if(w){w=i.gpn()
w.toString
i.aSc(w.bky(r.f,r.r,i.CW.gir()/1000))}q=i.cJ
if(q!=null){++i.hO
if(i.aXp(q)){i.hN=0
i.lg=Date.now()
i.lB=0
i.cJ=null
i.hO=0
if(q.c==="sick"){p=10+i.is.ap(26)
w=i.ghD()
if(w!=null)w.r+=p
i.eh("The sick person is at the hospital. +"+p+" stars. Well done.",!0)}if(i.c!=null)i.m(i.giY())}else if(i.hO>=240){i.cJ=null
i.hO=0
i.aBZ("The job was not finished in time")}}else{w=i.eK
if(w.length!==0&&i.aK==null&&i.bD==null&&i.bE==null&&Date.now()-i.lg>1e4){o=D.d.cz(w,0)
if(!i.aXp(o))i.cz7(o)}else if(i.bD==null&&i.bE==null&&++i.lB>=45)i.cva()}}else{v=w.d
v===$&&C.c()
if(v[w.e].c!=="outside")i.lB=0}for(w=h.d,v=w.length,u=i.bJ,n=0;n<w.length;w.length===v||(0,C.L)(w),++n){m=w[n]
l=i.d
k=l.d
k===$&&C.c()
if(k[l.e].c!=="outside")continue
if((i.bZ>0||i.cJ!=null||Date.now()<0||i.p4)&&!u.t(0,m.a))continue
if(u.M(0,m.a)){i.lB=0
i.bD=m
i.bE=null
i.b7F()}}u.pq(new A.ebG(h),!0)
j=i.bD
if(j!=null&&!D.d.b3(w,new A.ebH(j)))i.B5()},
cva(){var w,v,u=this
u.lB=0
w=u.c8j()
if(w==null)return
if(u.gaXf()){v=u.eK
if(v.length<3)v.push(w)
return}u.b4T(w)},
b4T(d){var w=this
w.lB=0
w.bD=null
w.bE=d
w.b7F()},
b7F(){var w,v=this
v.T=0
w=v.P
if(w!=null)w.a4(0)
v.P=C.dh(D.ru,new A.ed9(v))
v.m(new A.eda())},
B5(){var w=this,v=w.P
if(v!=null)v.a4(0)
w.P=null
if(w.c==null)return
w.m(new A.edh(w))},
chG(){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null
if(l.ok!=null)return k
if(l.aN){w=l.d
w===$&&C.c()
v=w.d
v===$&&C.c()
u=v[w.e].c==="outside"}else u=!1
t=l.bD
s=l.bE
if(!u&&t==null&&s==null)return k
r=l.ez
w=new A.ec4()
v=new A.ecd(r)
q=x.p
p=C.a([],q)
if(s!=null){o=C.ha(D.aB,k,C.d(s.gbeR(),k,k,k,k,k,k,D.nJ,k,k,k),k,28)
n=s.gaE9()
p.push(v.$7$about$avatar$glow$onAnswer$onDecline$onLater$who(s.gbr7(),o,D.bu,new A.ec6(l,s),new A.ec7(l),new A.ec8(l,s),n))}if(t!=null){o=B.CN[t.b]
n=o.b
p.push(v.$6$about$avatar$glow$onAnswer$onDecline$who("NGMY City \xb7 mobile",C.ha(o.e.c,k,C.d(n[0],k,k,k,k,k,k,D.K7,k,k,k),k,28),D.bf,new A.ec9(l,t),l.gczF(),n))}if(u){v=C.a([],q)
o=l.cL
if(o!=null)v.push(w.$3$col("\u270b "+o.b,o.a,D.bu))
o=C.a([],q)
if(l.bG==null){n=l.bi
m=n?"\ud83c\udfc3 Run: on":"\ud83c\udfc3 Run"
o.push(w.$3$on(m,new A.eca(l),n))}if(l.bG==null)o.push(w.$3$col("\u2b06 Jump",new A.ecb(l),D.co))
v.push(C.B(o,D.m,k,D.e,D.O,0,k,k))
w=l.bG==null
o=w?206:140
v.push(new C.D(D.a_P,new C.a5(o,k,new A.Uw(l.c5,!w,12,k),k),k))
p.push(new C.D(B.bBZ,C.B(C.a([new A.aJ0(new A.ecc(l),k),C.x(v,D.dI,k,D.e,D.O,0,D.p)],q),D.dI,k,D.iK,D.i,0,k,k),k))}return new C.a5(r,k,C.x(p,D.m,k,D.e,D.O,0,D.p),k)},
aU4(){var w=this.d
w===$&&C.c()
if(w.a.length!==0)this.Ep()
else this.a0u()},
Ep(){var w=0,v=C.j(x.H),u,t=this,s,r,q,p
var $async$Ep=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:p=t.d
p===$&&C.c()
s=p.d
s===$&&C.c()
r=s[p.e]
if(r.gz8()){t.iJ("This lesson is done. Try everything: it all works.")
w=1
break}p=r.p4
w=p==="ptrap"||p==="faucet"?3:5
break
case 3:if(r.RG==null)r.RG=A.h4J()
w=6
return C.b(t.yg(new A.ebR(r)),$async$Ep)
case 6:w=4
break
case 5:if(r.R8==null)r.R8=new A.CA(C.U(x.S,x.N))
w=7
return C.b(t.yg(new A.ebS(r)),$async$Ep)
case 7:case 4:if(t.c==null){w=1
break}t.m(t.giY())
if(r.gz8()){p=t.ghD()
if(p!=null)p.r+=10
q=r.p4
A:{p="Done! Tap the outlet and plug something in."
if("switch"===q){p="Done! Tap the switch on the wall: the light comes on."
break A}if("fan"===q){p="Done! Tap the wall switch and the fan spins."
break A}if("outlet"===q||"gfci"===q)break A
s=D.d.t(B.jE,q)
if(s){p="Done! Tap the switch on the wall: it works."
break A}s=D.d.t(B.lh,r.p4)
if(s)break A
p="Done! The sink works."
break A}t.iJ(p)}case 1:return C.h(u,v)}})
return C.i($async$Ep,v)},
akk(d){return this.cGF(d)},
cGF(d){var w=0,v=C.j(x.H),u,t=this,s,r,q,p
var $async$akk=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:p=t.d
p===$&&C.c()
s=p.d
s===$&&C.c()
r=s[p.e].id[d]
q=r.gwG()
w=3
return C.b(t.yg(new A.ee3(r)),$async$akk)
case 3:if(t.c==null){w=1
break}t.m(t.giY())
if(r.gwG()&&!q){p=t.ghD()
if(p!=null)p.r+=8}if(r.gwG()){p=q?"":"You are paid 8 stars. "
s=r.a==="switch"?"Tap it to turn the light on and off.":"Tap it to plug something in."
t.iJ("Wired! "+p+s)}case 1:return C.h(u,v)}})
return C.i($async$akk,v)},
a0u(){var w=0,v=C.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$a0u=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:m=t.d
m===$&&C.c()
s=m.d
s===$&&C.c()
r=s[m.e]
s=r.c
if(s==="outside"){w=1
break}q=r.CW
if(q==null){q=A.in1(r)
s=s==="hall"?"Hall laundry corner":r.b
p=A.csM(q,s,!1,m.b*37+r.a,!1)
p.amh()
if(!r.ay)p.cJK()
r.CW=p
m=p}else m=q
m.b=t.d.c
o=r.gkO()
w=3
return C.b(t.yg(new A.ebU(r)),$async$a0u)
case 3:if(t.c==null){w=1
break}t.m(t.giY())
if(r.gkO()&&!o){n=10+t.is.ap(26)
m=t.ghD()
if(m!=null)m.r+=n
m=r.gjR()?"":" The room still needs its plumbing, so it stays red until the pipes are done too."
t.eh(r.b+": the wiring is finished and the light has power. You are paid "+n+" stars!"+m,!0)}else if(r.gkO()){m=r.gjR()?"":" The room still needs its plumbing."
t.iJ(r.b+": the wiring is finished. The light has power."+m)}case 1:return C.h(u,v)}})
return C.i($async$a0u,v)},
a0l(){var w=0,v=C.j(x.H),u,t=this,s,r,q,p,o,n
var $async$a0l=C.e(function(d,e){if(d===1)return C.f(e,v)
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
s=r.fr=A.h4I(!1,n.b*41+r.a,s)
n=s}else n=q
if(!r.ch&&!n.ga3M())r.fr.cJJ()
r.fr.b=t.d.c
p=r.gjR()
w=3
return C.b(t.yg(new A.ebT(r)),$async$a0l)
case 3:if(t.c==null){w=1
break}t.m(t.giY())
if(r.gjR()&&!p){o=10+t.is.ap(26)
n=t.ghD()
if(n!=null)n.r+=o
t.eh(r.b+": the plumbing is finished and nothing leaks. You are paid "+o+" stars!",!0)}else if(r.gjR())t.iJ(r.b+": the plumbing is finished and nothing leaks.")
case 1:return C.h(u,v)}})
return C.i($async$a0l,v)},
bBM(){var w=this.c
w.toString
return C.bV(E.lB,null,new A.e9w(this),w,!0,!0,!1,D.k3,!1,!1,x.H)},
bBq(d){var w,v,u,t,s,r,q,p,o=this,n=o.d
n===$&&C.c()
w=n.d
w===$&&C.c()
v=w[n.e]
n=v.c
if(n==="outside"||n==="hall"){o.eh("Add devices in a room, not in the hall or in NGMY City.",!1)
return}n=v.id
if(n.length>=4){o.eh("This room already has four added devices.",!1)
return}w=C.a([-v.gea(0)/4,v.gea(0)/4],x.n)
for(u=v.w,t=D.d.gag(u),s=new C.f2(t,new A.e9q());s.C();)w.push(t.gS(0).c)
for(u=D.d.gag(u),t=new C.f2(u,new A.e9r());t.C();)w.push(u.gS(0).c+24)
for(u=n.length,r=0;r<n.length;n.length===u||(0,C.L)(n),++r)w.push(n[r].b)
p=-v.gea(0)/2+14
for(;;){if(!(p<=v.gea(0)/2-14)){q=null
break}if(D.d.d0(w,new A.e9s(p))){q=p
break}p+=6}if(q==null){o.eh("There is no free place left on the back wall.",!1)
return}o.m(new A.e9t(o,v,d,q))
o.iJ("Added. It is red because it is not wired: tap it to wire it.")},
aeu(d,e){var w,v,u=this,t=u.d
t===$&&C.c()
w=t.d
w===$&&C.c()
v=w[t.e].BV(u.Q)
if(v==null)return
u.m(new A.ebK(u,v,D.d.t(B.RT,v.b),d,e))},
c8q(){var w,v,u=this,t=u.d
t===$&&C.c()
w=t.d
w===$&&C.c()
v=w[t.e].BV(u.Q)
if(v==null)return
u.m(new A.edD(u,v))},
cpq(){var w,v,u=this,t=u.d
t===$&&C.c()
w=t.d
w===$&&C.c()
v=w[t.e].BV(u.Q)
if(v==null)return
u.m(new A.ecJ(u,v))
u.iJ(B.hC.h(0,v.b).a+": "+B.cWX[v.f]+".")},
c8o(d){var w,v,u=this,t=u.d
t===$&&C.c()
w=t.d
w===$&&C.c()
v=w[t.e].BV(u.Q)
if(v==null)return
u.m(new A.ecK(u,v))},
bBt(d){var w,v=this,u=v.d
u===$&&C.c()
w=u.d
w===$&&C.c()
v.m(new A.e9u(v,w[u.e].M(0,d)))
v.iJ(B.hC.h(0,d).a+" added. Move it with the arrows.")},
AA(d,e,f,g,h){var w=null,v=e?g.j(0.25):D.c.j(0.07),u=C.n(14),t=e?g:D.aX
t=C.K(t,D.r,e?2:1)
v=C.a([C.p(w,C.d(d,w,w,w,w,w,w,C.l(w,w,e?g:D.c,w,w,w,w,w,w,w,w,11,w,w,D.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),D.f,w,w,new C.o(v,w,t,u,w,w,D.n),w,w,w,w,D.eI,w,w,w)],x.p)
if(h)v.push(C.ap(w,C.p(w,w,D.f,w,w,new C.o(D.ax,w,C.K(B.FC,D.r,2),w,w,w,D.a6),w,11,w,w,w,w,w,11),w,w,w,-2,-3,w))
return new C.D(D.fu,C.aA(w,new C.an(D.a_,w,D.ab,D.f,v,w),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,!1,D.a3),w)},
il(d,e,f,g){return this.AA(d,e,f,g,!1)},
J6(d,e,f){return this.AA(d,e,f,D.aB,!1)},
aC5(d,e,f,g){var w=null,v=g==null,u=v?34:w,t=v?w:D.kj,s=C.n(10),r=e?D.c:D.aX
r=C.K(r,D.r,e?3:1)
if(v)v=w
else v=C.as(C.d(g,w,w,w,w,w,w,C.l(w,w,d.j1()>0.5?D.w:D.c,w,w,w,w,w,w,w,w,12,w,w,D.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,w,w)
return new C.D(G.od,C.aA(w,C.p(w,v,D.f,w,w,new C.o(d,w,r,s,w,w,D.n),w,34,w,w,t,w,w,u),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,!1,D.a3),w)},
cAy(d,e,f){return this.aC5(d,e,f,null)},
Dq(d,e){var w=null,v=D.c.j(0.1),u=C.n(10),t=C.K(D.aX,D.r,1)
return new C.D(D.fu,C.aA(w,C.p(w,C.X(d,D.c,w,w,w,20),D.f,w,w,new C.o(v,w,t,u,w,w,D.n),w,36,w,w,w,w,w,40),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,e,w,w,w,w,w,w,!1,D.a3),w)},
bJT(){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null
if(k.cx!=null){w=k.dy
return C.B(C.a([C.E(C.d("\ud83c\udfac "+(w.length===0?"Walking in":w),j,1,D.a1,j,j,j,B.fo3,j,j,j),1),k.il("\u23f9 Stop the tour",!0,k.gczI(),D.c6)],x.p),D.m,j,D.e,D.i,0,j,j)}switch(k.r){case"furniture":w=k.d
w===$&&C.c()
v=w.d
v===$&&C.c()
u=v[w.e].BV(k.Q)
w=x.p
v=C.a([],w)
if(u!=null){t=C.a([k.Dq(D.kl,new A.eaG(k)),k.Dq(D.jA,new A.eaH(k)),k.Dq(D.rA,new A.eaI(k)),k.Dq(D.qq,new A.eaJ(k)),k.Dq(H.apn,k.gc8p()),k.Dq(D.mb,k.gcpp())],w)
s=k.d
r=s.d
r===$&&C.c()
if(r[s.e].c==="outside")t.push(k.Dq(D.OZ,k.gcuP()))
t.push(k.Dq(D.e9,k.gc8n(k)))
v.push(new C.a5(j,30,C.cl(t,j,j,j,j,j,D.aM,!1),j))}else v.push(B.b_F)
w=C.a([],w)
for(t=B.hC.gdV(B.hC),t=t.gag(t);t.C();){s=t.gS(t)
r=D.d.t(B.dj6,s.a)
q=k.d
p=q.d
p===$&&C.c()
if(r===(p[q.e].c==="outside")){r=s.b
w.push(k.il(r.b+" "+r.a,!1,new A.eaK(k,s),D.b_))}}v.push(new C.a5(j,30,C.cl(w,j,j,j,j,j,D.aM,!1),j))
return C.x(v,D.m,j,D.e,D.O,0,D.p)
case"walls":w=k.as
v=w<0
w=v?"All walls":"Wall "+(w+1)+": tap Look to reset"
v=C.a([k.J6(w,v,new A.eaL(k))],x.p)
for(o=0;o<8;++o)v.push(k.aC5(B.azR[o],!1,new A.eaM(k,o),B.dtH[o]))
return new C.a5(j,30,C.cl(v,j,j,j,j,j,D.aM,!1),j)
case"floor":w=C.a([],x.p)
for(o=0;o<7;++o){v=B.azz[o]
t=k.d
t===$&&C.c()
s=t.d
s===$&&C.c()
w.push(k.aC5(v.b,s[t.e].Q===o,new A.eaN(k,o),v.a))}return new C.a5(j,30,C.cl(w,j,j,j,j,j,D.aM,!1),j)
case"ceiling":w=k.d
w===$&&C.c()
v=w.d
v===$&&C.c()
w=v[w.e].go==="fan"?"\ud83c\udf00 Fan (tap for light)":"\ud83d\udca1 Light (tap for fan)"
w=C.a([k.il(w,!1,new A.eaO(k),D.b8)],x.p)
for(o=0;o<4;++o){v=B.ayl[o]
t=k.d
s=t.d
s===$&&C.c()
w.push(k.cAy(v,s[t.e].as===o,new A.eaP(k,o)))}return new C.a5(j,30,C.cl(w,j,j,j,j,j,D.aM,!1),j)
default:n=C.aX(x.S)
w=C.a([k.il("\u26f6 Full screen",!1,k.gbPZ(),D.aJ)],x.p)
v=k.d
v===$&&C.c()
t=v.d
t===$&&C.c()
if(t[v.e].c==="outside")w.push(k.il("\ud83d\udcf1 Phone",!1,k.gbQ0(),D.c_))
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
r=s.gkO()&&s.gjR()
w.push(k.AA("\ud83d\udeaa "+s.b,!1,new A.eaQ(k,l),D.b_,!r))}}return new C.a5(j,30,C.cl(w,j,j,j,j,j,D.aM,!1),j)}},
B(d){var w,v=this,u=null
if(Date.now()<0){w=C.dx(0,0,0,0-Date.now(),0,0).a
return C.c5(u,F.ng,C.bm(!0,C.as(new C.D(D.qk,C.x(C.a([B.fO_,D.ae,B.fO6,D.W,B.fOj,D.aA,C.d("It opens again in "+D.o.ao(w,36e8)+"h "+D.o.F(D.o.ao(w,6e7),60)+"m",u,u,u,u,u,u,B.fpZ,u,u,u),D.dT,C.bI(D.aUK,u,new A.ee6(d),u)],x.p),D.m,u,D.e,D.O,0,D.p),u),u,u,u),!0,!1,D.af,!0,!0),u,!1,!1,u,u)}w=C.a([C.bT(0,new C.er(v.bFR(d),v.a_),0,0,0)],x.p)
if(v.aB!=null)w.push(C.bT(0,C.dZ(C.lx(new A.ee7(v),u,D.dw,D.hv,new C.bR(v.aF,x.ac),new A.ee8(v),new C.bp(1,0,x.g6),x.i),!0,u),0,0,0))
return new C.an(D.a_,u,D.ab,D.t,w,u)},
bI8(){var w,v,u=this,t=null,s=C.a([],x.p)
if(u.gakl())s.push(u.il("\u2705 Complete work",!0,u.gaQW(),D.be))
w=u.aN
v=w?"\u23f9 Stop walking":"\ud83d\udeb6 Walk the city"
s.push(u.il(v,w,w?u.gb7Y():u.gb7J(),D.bf))
s.push(u.il("\ud83c\udfd7 Build",!1,u.gaNJ(),D.bf))
w=u.ghD()
w=w==null?t:w.d.length
if(w==null)w=0
s.push(u.AA("\ud83d\udcde Calls",!1,new A.eai(u),D.c_,w>0))
s.push(u.il("\ud83c\udfe5 Hospital",!1,new A.eaj(u),D.c6))
s.push(u.il("\ud83d\uded2 Shop",!1,new A.eak(u),D.cL))
s.push(u.il("\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc67 People",!1,new A.eao(u),D.co))
s.push(u.il("\ud83c\udfe0 Go inside",!1,new A.eap(u),D.bf))
w=u.aK
if((w==null?t:w.a==="shop")===!0)s.push(u.il("\ud83d\uded2 Buy things",u.k2,new A.eaq(u),D.bu))
w=u.aK
if((w==null?t:w.a==="tower")===!0)s.push(u.il("\ud83c\udfe2 Level "+w.f+" of "+w.gM7(),!1,new A.ear(u),D.co))
if(u.cJ!=null)s.push(u.il("\ud83d\udccb My job"+(u.awj()==null?"":" \xb7 "+C.w(u.awj())+" m"),!1,new A.eas(u),D.bu))
w=u.eK.length
if(w!==0)s.push(u.il("\u23f3 Waiting: "+w,!1,new A.eat(u),D.aB))
s.push(u.AA("\ud83d\udef5 Orders",u.gpn().x!=null,new A.eau(u),D.bu,u.gpn().x==null))
w=u.p4
v=w?"\u23f9 Stop drone":"\ud83d\ude81 Drone"
s.push(u.il(v,w,new A.eav(u),D.aJ))
w=u.ha
v=w?"\ud83c\udff7 Show tags":"\ud83c\udff7 Hide tags"
s.push(u.il(v,w,new A.eal(u),D.c6))
s.push(u.il("\ud83d\udc41 Hide all",!1,new A.eam(u),D.bM))
w=u.gKx()
s.push(u.il("\ud83d\ude96 Uber",(w==null?t:w.f)!=null,u.gcEd(),D.bu))
s.push(u.il("\ud83d\uddfa Map",u.y,new A.ean(u),D.br))
return s},
gcxO(){var w,v,u,t,s,r,q,p,o=this
if(!o.ha){w=o.f
w===$&&C.c()
return w}w=o.t9
v=o.f
v===$&&C.c()
if(w===v&&o.qS!=null){w=o.qS
w.toString
return w}o.t9=v
w=C.a([],x.E)
for(u=o.f.c,t=u.length,s=0;s<u.length;u.length===t||(0,C.L)(u),++s){r=u[s]
q=!1
if(r.d===0)if(!r.c.A(0,D.bz)){p=r.b
if(!C.cU(p,"rooms still need work",0))q=!C.cU(p,"house is finished",0)}if(q)w.push(r)}u=o.f
return o.qS=new A.tU(v.a,v.b,w,u.d,u.e,0)},
bFR(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d=f.d
d===$&&C.c()
w=d.d
w===$&&C.c()
v=w[d.e]
d=x.w
w=C.aG(a0,e,d).w.a
u=f.eu?w.b:w.a
f.ez=u
w=f.d
t=w.d
t===$&&C.c()
t=t[w.e].c==="outside"&&f.aK==null
w=w.a.length!==0?e:new A.e9D(f)
s=f.gcxO()
r=f.e
r===$&&C.c()
q=f.at
p=f.ax
o=f.ay
n=f.ai
if(f.eu)d=62
else if(f.f2)d=C.aG(a0,e,d).w.r.b+66
else d=f.y&&f.d.a.length===0?104:10
m=f.chG()
l=x.p
k=C.a([],l)
if(f.y&&f.d.a.length===0&&!f.eu)k.push(new A.bjY(f.d,f.gc8h(),Math.min(138,u*0.36),e))
j=A.Y9(n,m,r,new A.e9E(f),new A.e9F(f),o,q,e,e,new A.e9Q(),p,d,f.gbO2(),new A.e9R(f),f.gc8l(),s,t,w,k,e)
i=f.y1!=null||f.y2||f.R8||f.k3||f.go||f.k2||f.id
d=f.ok
h=(d==null?e:d.d)===1
if((i||h)&&!f.ai){d=C.a([j],l)
if(i){if(f.id)w=f.c2b()
else if(f.k2)w=f.cwf()
else if(f.go)w=f.cht()
else if(f.k3)w=f.bPq()
else w=f.R8?f.bOF():f.bH4()
d.push(C.bT(0,w,0,0,0))}if(h)d.push(C.ap(e,C.dZ(C.as(new C.jX(f.p3,new A.e9S(),e,e,x.cI),e,e,e),!0,e),e,e,0,0,74,e))
g=new C.an(D.a_,e,D.b3,D.t,d,e)}else g=j
if(f.ai)return f.bIl(g)
if(f.eu)return f.bSp(g)
if(f.f2)return f.ckR(g)
d=f.d
if(d.a.length!==0)d=v.gz8()?"Done \u2713":"To do"
else d=""+d.gcPl()+"/"+f.d.gqT().length+" done"
w=f.d
t=w.d
t===$&&C.c()
w=t[w.e].c==="outside"
t=!w?e:new A.Uw(f.c5,f.bG!=null,12,e)
if(w)w=f.bI8()
else{w=f.x?"\ud83d\udd2d See the whole room":"\ud83c\udfe0 Be inside"
w=C.a([f.il(w,!1,new A.e9T(f),D.b_)],l)
if(f.d.a.length===0){s=f.cx!=null
r=s?"\u23f9 Stop tour":"\ud83c\udfac Tour"
w.push(f.il(r,s,new A.e9U(f),D.c_))}w.push(f.il("\u2b06 Look up at the ceiling",!1,f.gc3f(),D.b_))
s=f.z
r=s?"\ud83d\udeb6 Stop looking round":"\ud83d\udd04 Look all round (360)"
w.push(f.il(r,s,new A.e9V(f),D.cL))
w.push(f.il("\ud83d\udcfa TV",!1,f.gcE7(),D.co))
s=f.d
if(s.a.length===0){r=s.d
r===$&&C.c()
s=r[s.e].c!=="outside"?"\ud83c\udf33 Go outside":"\ud83c\udfe0 Go inside"
w.push(f.il(s,!1,new A.e9W(f),D.bf))}s=f.d
r=s.d
r===$&&C.c()
if(r[s.e].c==="outside"){s=f.aN
r=s?"\u23f9 Stop walking":"\ud83d\udeb6 Walk about"
w.push(f.il(r,s,s?f.gb7Y():f.gb7J(),D.bf))}if(f.d.a.length===0)w.push(f.il("\u2795 Add",!1,f.gaNJ(),D.bf))
if(f.d.a.length===0){s=f.ghD()
s=s==null?e:s.d.length
if(s==null)s=0
w.push(f.AA("\ud83c\udfd8 Community",!1,new A.e9X(f),D.c_,s>0))}w.push(f.il("\ud83d\udd26 Tester",f.w,new A.e9G(f),D.cL))
if(f.d.a.length!==0)w.push(f.AA("\ud83d\udd27 Do the lesson",!1,f.gc8k(),D.bu,!v.gz8()))
else{s=f.AA("\u26a1 Wiring",!1,f.gchm(),D.bu,!v.gkO())
r=v.c
r=(r==="bathroom"||r==="kitchen")&&!v.gjR()
D.d.v(w,C.a([s,f.AA("\ud83d\udeb0 Plumbing",!1,f.gcgM(),D.co,r),f.il("\ud83d\uddfa Map",f.y,new A.e9H(f),D.br)],l))}}return A.U1(D.aB,new A.e9I(f,a0),C.x(C.a([new C.a5(e,30,C.cl(w,e,e,e,e,e,D.aM,!1),e),D.au,new C.a5(e,30,C.cl(C.a([f.J6("\ud83d\udc41 Look",f.r==="look",new A.e9J(f)),f.J6("\ud83d\udecb Furniture",f.r==="furniture",new A.e9K(f)),f.J6("\ud83e\uddf1 Walls",f.r==="walls",new A.e9L(f)),f.J6("\ud83d\udfeb Floor",f.r==="floor",new A.e9M(f)),f.J6("\u2b1c Ceiling",f.r==="ceiling",new A.e9N(f)),f.J6("\ud83d\udeaa Doors",f.r==="doors",new A.e9O(f)),f.il("\ud83d\udcd8 Learn",!1,new A.e9P(a0),D.br)],l),e,e,e,e,e,D.aM,!1),e),D.au,f.bJT()],l),D.E,e,D.e,D.O,0,D.p),g,d,v.b,t)},
cnr(d){return C.bV(E.lB,null,new A.ecH(this),d,!0,!0,!0,D.k3,!1,!1,x.H)}}
A.bjY.prototype={
B(d){var w=null,v=D.k.E((this.e-10)/126,0.5,1),u=D.w.j(0.6),t=C.n(12),s=C.K(D.aX,D.r,1)
return C.p(w,new C.a5(126*v,84*v,C.aA(w,C.eO(D.A,C.b4(w,w,w,new A.bjn(this.c,w),B.f7a),D.f,D.vE),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new A.dvc(this,v),w,w,w,w,!1,D.a3),w),D.f,w,w,new C.o(u,w,s,t,w,w,D.n),w,w,w,w,D.m9,w,w,w)}}
A.bjn.prototype={
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
if(t.gkO()&&t.gjR())m=D.be
else m=!t.gkO()?D.ax:D.d3
l=C.bs(o,D.hE)
$.S()
k=new C.ao(D.Q,D.M,D.S,D.T,D.R)
k.r=m.j(t.gkO()&&t.gjR()?0.35:0.5).gp(0)
j=k.G()
v.drawRRect(C.e6(l),j)
j.delete()
l=C.bs(o,D.hE)
k=new C.ao(D.Q,D.M,D.S,D.T,D.R)
k.b=D.a9
k.c=n?2.2:0.8
k.r=(n?D.c:D.bU).gp(0)
j=k.G()
v.drawRRect(C.e6(l),j)
j.delete()
i=t.c
A:{if("bedroom"===i){l="\ud83d\udecf"
break A}if("bathroom"===i){l="\ud83d\udebf"
break A}if("kitchen"===i){l="\ud83c\udf73"
break A}if("living"===i){l="\ud83d\udecb"
break A}if("outside"===i){l="\ud83c\udf33"
break A}l=""
break A}h=new C.iN(new C.eu(l,g,g,D.cN,g,g,g,g,g,g,B.fng),D.a4,D.bY,new C.js(1),g,g,g,g,D.bW,g)
h.ek()
l=h.b
k=l.c
l=l.a.c
h.a3(d,new C.t(s+(q-s)/2-k/2,r+(p-r)/2-l.gbb(l)/2))}},
av(d){return!0}}
A.aJ0.prototype={
R(){return new A.bu1()},
bih(d,e){return this.c.$2(d,e)}}
A.bu1.prototype={
b_d(d){var w,v,u={},t=u.a=d.aE(0,B.eiB),s=t.gcC()>46?u.a=t.eV(0,t.gcC()).aI(0,46):t,r=s.a/46,q=-s.b/46,p=Math.sqrt(r*r+q*q)
s=this.a
s.toString
w=p<0.15
v=w?0:r
s.bih(v,w?0:q)
this.m(new A.f7f(u,this))},
b_c(){this.a.bih(0,0)
this.m(new A.f7e(this))},
B(d){var w=this,v=null,u=C.p(v,v,D.f,v,v,new C.o(D.w.j(0.42),v,C.K(D.bf.j(0.9),D.r,2.4),v,v,v,D.a6),v,132,v,v,v,v,v,132),t=C.p(v,v,D.f,v,v,new C.o(v,v,C.K(D.bf.j(0.25),D.r,1.5),v,v,v,D.a6),v,66,v,v,v,v,v,66),s=w.d,r=s==null
if(r)s=D.I
return C.mH(D.c5,new C.a5(132,132,new C.an(D.A,v,D.ab,D.t,C.a([u,t,C.dP(C.p(v,v,D.f,v,v,new C.o(D.bf.j(r?0.55:0.9),v,C.K(D.c,D.r,2),v,v,v,D.a6),v,56,v,v,v,v,v,56),s)],x.p),v),v),v,new A.f7g(w),new A.f7h(w),v,new A.f7i(w),v,v,new A.f7j(w))}}
A.f1K.prototype={}
A.Mn.prototype={}
A.Qk.prototype={
gbeR(){var w,v,u=this.c
A:{if("sick"===u){w="\ud83e\udd12"
break A}if("light"===u){w="\ud83d\udca1"
break A}if("office"===u){w="\ud83c\udfe2"
break A}v=this.e
B:{if("dryer"===v){w="\ud83d\udc55"
break B}if("range"===v){w="\ud83c\udf73"
break B}if("washer"===v){w="\ud83e\uddfa"
break B}w="\u26a1"
break B}break A}return w},
gaE9(){var w,v=this.c
A:{if("sick"===v){w=this.d
if(w.length===0)w="A neighbour"
break A}if("light"===v){w="City lights office"
break A}if("office"===v){w="Office manager"
break A}w="Your neighbour"
break A}return w},
gbr7(){var w,v,u=this.c
A:{if("sick"===u){w="Needs a doctor"
break A}if("light"===u){w="A street light is out"
break A}if("office"===u){w="No power in an office"
break A}v=this.e
B:{if("dryer"===v){w="The dryer outlet at a house"
break B}if("range"===v){w="The stove outlet at a house"
break B}if("washer"===v){w="The washer outlet at a house"
break B}w="No power at a house"
break B}break A}return w},
gaHp(d){var w,v=this,u="I will pay you between 10 and 35 stars. Thank you!",t=v.c
A:{if("sick"===t){w=C.a(["Hello! "+v.gaE9()+" is very sick and cannot get up.","Please take them to the hospital: walk into the hospital and onto the desk to admit them.",u],x.s)
break A}if("office"===t){w=""+v.f
w=C.a(["Hello, this is the office manager. The office on level "+w+" of "+v.b+" has lost its power and nobody can work.","Please take the elevator up to level "+w+", and fix the wiring at the breaker panel there.",u],x.s)
break A}if("light"===t){w=C.a(["Hello! A street light is out and the street is dark.","It is the dark one with the red sign. Could you fix its wiring?",u],x.s)
break A}w=v.e
if(w==="dryer"){w=C.a(["Hello! The dryer in "+v.b+" does not heat any more and the plug is hot to the touch.","It is on the 240 volt outlet in the hall, the laundry corner. Could you look at the dryer outlet and wire it again? Switch the power off before you touch anything, and check if it is the old 3-wire or the new 4-wire kind.",u],x.s)
break A}if(w==="range"){w=C.a(["Hello! The electric stove in "+v.b+" has stopped working and the outlet behind it smells burnt.","It is the 50 amp outlet in the kitchen. Could you wire the range outlet again? Switch the power off before you touch anything, and check if it is the old 3-wire or the new 4-wire kind.",u],x.s)
break A}if(w==="washer"){w=C.a(["Hello! The washing machine in "+v.b+" keeps tripping the breaker.","It is on its own 20 amp outlet in the laundry corner in the hall. Could you wire the washer outlet again? Switch the power off before you touch anything.",u],x.s)
break A}w=C.a(["Hello! All the lights went out in "+v.b+". The power is off in the whole house.","Could you check the breaker panel inside and fix the wiring? Switch the power off before you touch anything.",u],x.s)
break A}return w}}
A.aJZ.prototype={
R(){return new A.bwc()}}
A.bwc.prototype={
B(d){var w,v,u=this,t=null,s=C.aG(d,t,x.w).w,r=D.w.j(0.55),q=C.K(D.bU,D.r,1),p=u.d,o=C.ap(0,C.as(C.aA(t,C.p(t,C.X(p?B.bOc:B.bOd,D.c,t,t,t,20),D.f,t,t,new C.o(r,t,q,t,t,t,D.a6),t,38,t,t,t,t,t,38),D.y,!1,B.hh6,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new A.fcY(u),t,t,t,t,t,t,!1,D.a3),t,t,t),t,t,t,6,0,t)
if(p)return C.c5(t,D.w,new C.an(D.a_,t,D.ab,D.t,C.a([C.bT(0,u.a.d,0,0,0),o],x.p),t),t,!1,!1,t,t)
r=s.a
q=r.b
r=r.a
p=u.a
w=p.c
v=s.alA(D.af,new C.av(q,r),D.af)
return C.c5(t,D.w,C.as(new C.wp(w,C.q_(new C.a5(q,r,new C.an(D.a_,t,D.ab,D.t,C.a([C.bT(0,p.d,0,0,0),o],x.p),t),t),v),t),t,t,t),t,!1,!1,t,t)}}
A.bVj.prototype={}
A.m1.prototype={}
A.NI.prototype={
R(){return new A.bkU()}}
A.bkU.prototype={
rD(d){var w=this.c
w.toString
return C.a4(w,!1).cc(C.eh(new A.dSU(d),!1,null,x.H))},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null
$.asF="tech"
w=C.aH(m,m,m,m,T.nx,m,m,m,new A.dSX(d),m,m,m,m,m,m)
v=D.aB.j(0.16)
u=C.n(13)
t=x.p
u=C.B(C.a([w,C.p(m,B.baf,D.f,m,m,new C.o(v,m,C.K(D.aB.j(0.6),D.r,1),u,m,m,D.n),m,40,m,m,m,m,m,40),D.as,B.bFm],t),D.m,m,D.e,D.i,0,m,m)
v=C.n(26)
w=C.K(D.aB,D.r,1.8)
s=x.V
r=C.a([new C.ac(0,D.G,D.aB.j(0.28),D.dr,26)],s)
r=C.aA(m,C.p(m,C.x(C.a([C.p(m,B.baH,D.f,m,m,new C.o(D.aB.j(0.2),m,C.K(D.aB,D.r,2),m,C.a([new C.ac(0,D.G,D.aB.j(0.5),D.I,22)],s),m,D.a6),m,78,m,m,m,m,m,78),D.ae,B.fH2,D.au,B.fQ8,D.aA,C.p(m,B.fGZ,D.f,m,m,new C.o(D.aB,m,m,C.n(20),m,m,D.n),m,m,m,m,V.ald,m,m,m)],t),D.m,m,D.e,D.i,0,D.p),D.f,m,m,new C.o(m,m,w,v,r,B.c3p,D.n),m,m,m,m,D.w6,m,m,m),D.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new A.dSY(n),m,m,m,m,m,m,!1,D.a3)
v=D.w.j(0.6)
w=C.n(16)
w=C.a([r,C.ap(m,C.aA(m,C.p(m,B.fVC,D.f,m,m,new C.o(v,m,C.K(F.fA,D.r,1.4),w,m,m,D.n),m,m,m,m,B.byH,m,m,m),D.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new A.dSZ(n),m,m,m,m,m,m,!1,D.a3),m,m,m,10,10,m)],t)
v=n.c8x("JOBS")
r=n.b_e(C.a([n.AC("\ud83d\udd0c","Wire a room","Go to a room that needs wiring",D.be,new A.dT1(n)),n.AC("\ud83d\udebd","Plumb a room","Go to a bathroom or kitchen",D.aJ,new A.dT2(n)),n.AC("\ud83d\udd27","Fix a house","Walk the house and fix every sign",D.aB,new A.dT3(n)),n.AC("\ud83e\uddf1","Build a room","Frame, drywall, then wire",D.bf,new A.dT4(n)),n.AC("\u26a1","Wiring bench","Just the wiring, one room",D.bu,new A.dT5(n)),n.AC("\ud83e\uddea","Safety inspection","A test job: marked when you submit",D.br,new A.dT6(n)),n.AC("\ud83d\udcde","Service calls","A customer rings with problems",D.hZ,new A.dT7(n)),n.AC("\ud83c\udfd8","Neighbourhood jobs","Fix lights and wiring around the city",D.aJ,new A.dT8(n))],t))
s=n.e?D.aB.j(0.25):D.c.j(0.07)
q=n.e
p=C.K(q?D.aB:D.aX,D.r,1)
o=q?D.cx:D.f9
w=C.a([u,D.ae,new C.an(D.a_,m,D.ab,D.t,w,m),v,r,n.b_f("LESSONS",C.aA(m,C.p(m,C.X(o,q?D.aB:D.ac,m,m,m,19),D.f,m,m,new C.o(s,m,p,m,m,m,D.a6),m,34,m,m,m,m,m,34),D.y,!1,B.hgQ,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new A.dT_(n),m,m,m,m,m,m,!1,D.a3))],t)
if(n.e){v=D.c.j(0.07)
w.push(new C.D(D.d0,C.aM(m,D.Y,!0,m,!0,D.t,m,C.aN(),m,m,m,m,m,m,2,C.br(m,new C.b5(4,C.n(16),D.a0),m,m,m,m,m,m,!0,m,m,m,m,m,m,v,!0,m,m,m,m,m,m,m,m,m,m,m,m,m,A2.Ea,"Search the lessons: outlet, switch, dryer, sink...",m,m,m,m,m,!0,m,m,m,!0,!0,!1,m,B.c_0,m,m,m,m,m,m,m,m,m,m,m,m),D.y,!0,m,!0,m,!1,m,D.aj,m,m,m,B.hgL,m,m,m,m,m,1,m,m,!1,"\u2022",m,new A.dT0(n),m,m,m,!1,m,m,!1,m,!0,m,D.aa,m,m,m,m,m,m,m,m,m,m,m,D.Ko,!0,D.a4,m,D.an,m,m,m,m),m))}D.d.v(w,n.c27())
return C.c5(m,D.c1,C.bm(!0,C.cl(w,m,m,B.akt,m,m,D.ah,!1),!0,!1,D.af,!0,!0),m,!1,!1,m,m)},
c27(){var w,v,u,t,s,r,q,p=this,o=x.dz,n=C.a([],o)
for(w=0;w<24;++w){v=B.df7[w]
n.push(new C.aeJ([v.d,v.e,v.b,new A.dSP(p,v),v.c,v.a]))}n.push(new C.aeJ(["Three-way switch, fan with light",D.br,"\ud83e\udde0",new A.dSQ(p),"Diagram lessons","diagram wiring picture"]))
n.push(new C.aeJ(["Short cards for beginners",D.br,"\ud83d\udcd8",new A.dSR(p),"Learn the trades","cards beginner trade"]))
u=D.a.fq(p.f.toLowerCase(),C.ag("\\s+",!0,!1,!1,!1))
t=C.T(u).k("Z<1>")
s=C.C(new C.Z(u,new A.dSS(),t),t.k("M.E"))
o=C.a([],o)
for(u=n.length,w=0;w<n.length;n.length===u||(0,C.L)(n),++w){r=n[w]
if(D.d.d0(s,new A.dST(r)))o.push(r)}if(o.length===0)return C.a([B.emz],x.p)
n=x.p
u=C.a([],n)
for(t=o.length,w=0;w<o.length;o.length===t||(0,C.L)(o),++w){q=o[w].a
u.push(p.AC(q[2],q[4],q[0],q[1],q[3]))}return C.a([p.b_e(u)],n)},
b_f(d,e){var w=null,v=x.p,u=C.a([],v),t=e!=null
if(t)u.push(V.aRP)
u.push(C.E(C.p(w,w,D.f,D.aB.j(0.35),w,w,w,1,w,w,w,w,w,w),1))
u.push(new C.D(D.eZ,C.d(d,w,w,w,w,w,w,B.fjH,w,w,w),w))
u.push(C.E(C.p(w,w,D.f,D.aB.j(0.35),w,w,w,1,w,w,w,w,w,w),1))
if(t)D.d.v(u,C.a([D.as,new C.a5(34,w,e,w)],v))
return new C.D(B.bDi,C.B(u,D.m,w,D.e,D.i,0,w,w),w)},
c8x(d){return this.b_f(d,null)},
b_e(d){var w,v,u,t,s=null,r=x.p,q=C.a([],r)
for(w=0;v=d.length,w<v;w+=2){u=d[w]
t=w+1
v=t<v?d[t]:D.bJ
q.push(new C.D(D.cu,new C.El(new C.cd(D.aM,D.e,D.i,D.ak,s,D.p,s,0,C.a([new C.bA(1,D.bd,u,s),D.ad,new C.bA(1,D.bd,v,s)],r),s),s),s))}return C.x(q,D.m,s,D.e,D.i,0,D.p)},
AC(d,e,f,g,h){var w=null,v=C.a([g.j(0.2),B.FC],x.O),u=C.n(22),t=C.K(g.j(0.55),D.r,1.4),s=x.V,r=C.a([new C.ac(0,D.G,g.j(0.18),D.cy,16)],s),q=g.j(0.22),p=C.K(g.j(0.7),D.r,1.5)
s=C.a([new C.ac(0,D.G,g.j(0.35),D.I,14)],s)
return C.aA(w,C.p(w,C.x(C.a([C.p(w,C.as(C.d(d,w,w,w,w,w,w,D.x1,w,w,w),w,w,w),D.f,w,w,new C.o(q,w,p,w,s,w,D.a6),w,56,w,w,w,w,w,56),D.W,C.d(e,w,w,w,w,w,w,D.j4,D.K,w,w),D.cS,C.d(f,w,2,D.a1,w,w,w,B.fvv,D.K,w,w)],x.p),D.m,w,D.b9,D.i,0,D.p),D.f,w,w,new C.o(w,w,t,u,r,new C.a9(D.b0,D.b5,D.x,v,w,w),D.n),w,w,w,w,B.byp,w,w,w),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,h,w,w,w,w,w,w,!1,D.a3)}}
A.aww.prototype={
R(){return new A.btQ()},
bqN(){return this.c.$0()}}
A.btQ.prototype={
Z(){this.a2()
this.d=C.dh(D.no,new A.f75(this))},
q(){var w=this.d
if(w!=null)w.a4(0)
this.a1()},
B(d){var w=null,v=D.w.j(0.6),u=C.n(18),t=C.K(D.bu,D.r,1.5)
return C.p(w,C.d("\u2b50 "+C.w(this.a.bqN()),w,w,w,w,w,w,B.fk2,w,w,w),D.f,w,w,new C.o(v,w,t,u,w,w,D.n),w,w,w,D.iE,D.qi,w,w,w)}}
A.b7Q.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=x.w,e=C.aG(d,g,f).w.a.a>C.aG(d,g,f).w.a.b
if(h.d)return A.h5c(E.Bn,h.r,h.z,h.Q,h.y,h.as,h.db,h.w,h.f,h.c)
w=h.r
v=x.p
u=C.a([C.bT(0,A.h5c(E.Bn,w,h.z,h.Q,h.y,h.as,h.db,h.w,h.f,h.c),0,0,0)],v)
t=h.ch
s=t!=null
if(s)u.push(C.ap(g,C.x(t,D.E,g,D.e,D.i,0,D.p),g,g,8,g,8,g))
t=C.a([],v)
r=h.CW
if(r!=null)D.d.v(t,r)
r=C.a([],v)
q=h.e
if(q!=null)r.push(new A.aww(q,g))
r.push(new A.afN(D.hQ,"Zoom in",w,!1,g))
t.push(C.B(r,D.m,g,D.e,D.O,0,g,g))
t.push(new A.afN(D.z_,"Zoom out",w,!0,g))
w=h.x
t.push(h.axN(B.bM9,"Back to the whole view",w))
t.push(h.axN(Ao.Cv,"Flip up and down swiping",new A.cxp()))
t.push(h.axN(D.jW,"Flip left and right swiping",new A.cxq()))
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
o=e?B.bEv:D.nr
n=h.ax
m=n?D.dY:D.ek
m=m.j(e?0.88:0.95)
l=C.n(e?10:14)
k=C.K(n?D.bf:D.c6,D.r,1)
n=e?3:g
j=e?D.a1:g
u.push(C.ap(g,new C.cT(new C.aZ(0,p,0,1/0),C.p(g,C.d(t,g,n,j,g,g,g,C.l(g,g,D.c,g,g,g,g,g,g,g,g,e?10.5:12.5,g,g,D.U,g,1.3,!0,g,g,g,g,g,g,g,g),g,g,g),D.f,g,g,new C.o(m,g,k,l,g,g,D.n),g,g,g,g,o,g,g,g),g),g,g,r,q,s,g))}t=h.ay
if(t!=null){s=e?8:10
r=e?g:10
f=e?D.k.E(C.aG(d,g,f).w.a.a*0.36,180,300):1/0
q=e?B.bEu:E.ake
p=e?B.boz:E.aes
o=C.n(e?11:16)
n=C.K(D.aX,D.r,1)
m=t.a
l=e?1:g
k=e?D.a1:g
m=C.d(m,g,l,k,g,g,g,C.l(g,g,D.b_,g,g,g,g,g,g,g,g,e?11.5:14.5,g,g,D.u,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)
l=e?1:3
t=t.b
k=e?2:g
j=e?D.a1:g
i=e?10:12.5
t=C.a([m,new C.a5(g,l,g,g),C.d(t,g,k,j,g,g,g,C.l(g,g,D.ac,g,g,g,g,g,g,g,g,i,g,g,g,g,e?1.25:1.4,!0,g,g,g,g,g,g,g,g),g,g,g)],v)
m=h.cx
if(m!=null)D.d.v(t,C.a([D.am,m],v))
t=C.E(C.x(t,D.E,g,D.e,D.i,0,D.p),1)
m=e?D.adh:g
l=e?D.af:D.ck
u.push(C.ap(8,new C.cT(new C.aZ(0,f,0,1/0),C.p(g,C.B(C.a([t,C.aH(g,m,g,g,C.X(D.cx,D.aC,g,g,g,e?16:20),g,g,g,w,l,g,g,g,g,D.cc)],v),D.E,g,D.e,D.i,0,g,g),D.f,g,g,new C.o(p,g,n,o,g,g,D.n),g,g,g,g,q,g,g,g),g),g,g,s,r,g,g))}return new C.an(D.a_,g,D.ab,D.t,u,g)},
axN(d,e,f){var w=null,v=D.w.j(0.55),u=C.K(D.aX,D.r,1)
return new C.D(D.eH,C.he(C.aA(w,C.p(w,C.X(d,D.c,w,w,w,20),D.f,w,w,new C.o(v,w,u,w,w,w,D.a6),w,38,w,w,w,w,w,38),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,!1,D.a3),w,e,w,w),w)}}
A.aXX.prototype={
B(d){var w,v=this,u=null,t=x.p,s=C.a([C.aH(u,u,u,u,T.nx,u,u,u,new A.bXp(d),u,u,u,u,u,u)],t),r=v.x,q=v.c,p=v.d
if(r==null)s.push(C.E(C.d(q,u,u,u,u,u,u,C.l(u,u,p,u,u,u,u,u,u,u,u,16,u,u,D.u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),1))
else D.d.v(s,C.a([C.d(q,u,u,u,u,u,u,C.l(u,u,p,u,u,u,u,u,u,u,u,16,u,u,D.u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),D.as,C.E(r,1),D.as],t))
r=p.j(0.15)
q=C.n(16)
w=C.K(p.j(0.6),D.r,1)
s.push(C.aA(u,C.p(u,C.B(C.a([C.X(Ap.anT,p,u,u,u,17),D.eg,C.d(v.w,u,u,u,u,u,u,C.l(u,u,p,u,u,u,u,u,u,u,u,12,u,u,D.u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],t),D.m,u,D.e,D.O,0,u,u),D.f,u,u,new C.o(r,u,w,q,u,u,D.n),u,u,u,u,D.qi,u,u,u),D.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,v.r,u,u,u,u,u,u,!1,D.a3))
s=C.B(s,D.m,u,D.e,D.i,0,u,u)
q=C.aG(d,u,x.w).w
return C.c5(u,D.c1,C.bm(!0,C.x(C.a([new C.D(B.bDv,s,u),C.p(u,C.ch(v.f,D.t,u,D.y,u,u,u,u,D.ah),D.f,u,new C.aZ(0,1/0,0,q.a.b*0.34),B.b5E,u,u,u,u,E.a_6,u,u,1/0),C.E(C.bx(An.acD,v.e,D.ap),1)],t),D.m,u,D.e,D.i,0,D.p),!0,!1,D.af,!0,!0),u,!1,!1,u,u)}}
A.E_.prototype={
R(){var w=new C.ye()
$.yY()
w.h7(0)
return new A.aAB(w)},
gdc(d){return this.d}}
A.aAB.prototype={
gwX(){var w,v=this,u=v.d
if(u===$){w=A.t6(v.a.c)
v.d!==$&&C.bF()
v.d=w
u=w}return u},
gem(d){var w,v=this.e
if(v===$){w=this.a.d
v=this.e=w==null?new A.CA(C.U(x.S,x.N)):w}return v},
gasb(){var w=this.gwX().a
return w==="light"||w==="fan"},
gip(){var w,v=this,u=v.f
if(u===$){w=v.gasb()?new A.xi(1.15,0.12,11,B.VC,$.ax()):new A.xi(0.42,0.26,12,B.h6V,$.ax())
v.f!==$&&C.bF()
u=v.f=w}return u},
gpa(){var w=this,v=w.r
return v===$?w.r=A.h99(w.gwX(),w.gem(0),!0):v},
aB2(d){var w
this.m(new A.db_(this,d))
A:{if("practice"===d){w="Practice: you can put a wire anywhere. The mistake shows when the power goes on."
break A}if("test"===d){w="Test: put every wire where you think it goes. Nothing is marked until you submit."
break A}w="Learn: a wrong wire is refused and explained."
break A}this.iK(w,!0)},
q(){var w=this.as
if(w!=null)w.a4(0)
this.a1()},
iK(d,e){var w=this,v=w.as
if(v!=null)v.a4(0)
w.m(new A.daY(w,d,e))
w.as=C.cG(D.lE,new A.daZ(w))},
mF(d){return this.iK(d,!1)},
pv(){var w=this.gem(0)
w.d=w.d&&w.a&&w.c>=2
this.r=A.h99(this.gwX(),w,!0)},
ol(){var w,v,u,t=this
if(t.gasb()&&t.gem(0).c===0){t.gip().hT(11,0.12,B.VC,1.15)
t.m(new A.daK(t))
return}w=t.gip()
v=t.gem(0).c===0
u=v?2.8:0.4
v=v?12:10
w.hT(v,0.26,new A.q(0,0.1,u),0.42)
t.m(new A.daL(t))},
aY4(d){var w=this
if(w.gasb()){w.gip().hT(9,0.12,B.VC,1.15)
return}if(d==="ground")w.gip().hT(8,0.55,B.haV,0.15)
else if(d==="white")w.gip().hT(8.5,0.2,B.hf0,0.95)
else w.gip().hT(8.5,0.2,B.h3z,-0.95)},
c8r(){var w,v,u,t="ground",s=this.gem(0),r=!s.a||s.c>0,q=new A.daJ(this),p=this.gwX(),o=p.a
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
J9(d){var w,v,u,t,s,r,q,p,o,n=this,m="square",l="STOP! The power is still on. Turn the breaker OFF before you touch any wire.",k="Recorded."
if(d===0){n.ol()
return}if(B.aQW.t(0,d))return
if(d===40){w=n.gem(0)
if(w.a){A.fR(180,220,0.25,m)
n.mF("STOP! The power is still on. Turn the breaker OFF before you touch the strap.")}else if(n.gwX().a==="cord3")n.iK("Leave the ground strap on. On a 3-wire cord it joins the neutral to the frame of the appliance. That is what grounds it.",!0)
else if(w.c!==0)n.mF("The device is already in the box. Pull it out again to change it.")
else{n.m(new A.daM(n))
A.wW()
n.iK("Ground strap removed. Now the frame will be grounded by the green wire, and the neutral stays clear of it.",!0)}return}w=n.gwX()
v=w.f
u=C.T(v).k("Z<1>")
t=C.C(new C.Z(v,new A.daN(d),u),u.k("M.E"))
v=w.a
s=A.hzR(v,d)
u=s!=null
if(u){r=n.gem(0)
r=r.c===0&&r.b.iq(0,s)}else r=!1
if(r){w=n.gem(0)
if(w.a){A.fR(180,220,0.25,m)
n.mF(l)
return}w=w.b
w.bs(w,new A.daO(s))
n.m(n.gc8u())
n.iK("Wire taken off the screw.",!0)
return}r=!1
if(t.length!==0){q=n.gem(0)
if(q.c===0){q=q.b
if(q.aj(0,d))r=n.w.length===0||q.h(0,d)===n.w}}if(r){w=n.gem(0)
if(w.a){A.fR(180,220,0.25,m)
n.mF(l)
return}w.b.W(0,d)
n.m(new A.daP(n))
n.iK(w.z?k:"Wire taken off.",!0)
return}if(u){u=n.gem(0)
u=u.c===0&&!u.b.iq(0,s)&&D.d.b3(w.e,new A.daQ(s))}else u=!1
if(u){n.m(new A.daR(n,s,d))
if(n.w.length!==0){n.aY4(s)
n.iK(D.d.fY(w.e,new A.daS(s)).b+": picked up. Now tap the screw, nut or wire it joins.",!0)}return}if(t.length!==0&&n.w.length!==0&&n.gem(0).c===0){u=n.gem(0)
p=A.hzM(w,u,n.w,D.d.gI(t),!1)
if(p!=null){++n.Q
A.fR(180,220,0.25,m)
n.mF(p)}else if(u.z){A.fR(520,60,0.25,"tri")
n.m(new A.daT(n,d))
n.iK(k,!0)
n.w=""}else{A.wW()
n.m(new A.daU(n,d))
if(u.w)n.iK(D.d.gI(t).b+": fastened.",!0)
else if(A.aif(w,u))n.iK("Every wire is on the right screw. Now push the device into the box.",!0)
else n.iK(D.d.gI(t).b+": fastened correctly.",!0)
n.gip().xl(7,A.aQ4(v,d,u))
n.w=""}return}o=n.gpa().b.h(0,d)
if(o!=null){n.m(new A.daV(n,d))
w=n.gip()
v=o.c
w.xl(o.d,v)}},
cmq(){var w,v=this
v.m(new A.daW(v))
w=v.gem(0)
if(w.a){A.fR(120,200,0.25,"saw")
if(w.c===0)v.mF("The breaker is ON. The wires are LIVE at 120 volts. Turn it OFF before you touch anything.")}else{A.fR(600,100,0.25,"tri")
v.iK("Breaker OFF. It is safe to work on the wires. (In real life, always test them with a tester first.)",!0)}},
cBN(){var w,v,u=this,t="The tester glows: this outlet has 120 volts and is wired correctly. The lesson is complete! Mistakes: ",s=" is wired correctly: every wire is on the terminal that belongs to it. The lesson is complete! Mistakes: ",r=u.gwX(),q=u.gem(0),p=A.La(r,q)
if(p.a!=="ok"){u.m(new A.db0(u,p));++u.Q
A.fR(180,220,0.25,"square")
C.fM()
r=p.r==="arc"
w=r?95:150
A.fR(w,450,0.5,r?"saw":"noise")
if(q.z)r=p.d?"The breaker tripped.":"Power is on."
else r=p.b+"\nHow to fix it: "+p.w
u.mF(r)
return}u.m(new A.db1(u))
A.wW()
v=r.a
A:{if("switch"===v){r="Power on. Flip the switch and the light turns on: both black wires are on brass screws, so the switch opens and closes the hot wire. The lesson is complete! Mistakes: "+u.Q+"."
break A}if("gfci"===v){r="Power on. Press RESET (it clicks), then TEST: it must shut the outlet off. Wired on LINE, it protects the whole circuit. The lesson is complete! Mistakes: "+u.Q+"."
break A}if("outlet"===v){r=t+u.Q+"."
break A}q=D.d.t(B.jE,v)
if(q){r="Power on. "+r.b+(s+u.Q+".")
break A}if(v!=="light"&&v!=="fan"){r="Power on. The "+r.b.toLowerCase()+(s+u.Q+".")
break A}r=t+u.Q+"."
break A}u.iK(r,!0)},
B(a1){var w,v=this,u=null,t=v.c8r(),s=D.d.bh(t,new A.dba()),r=s<0?"All done":"Step "+(s+1)+"/"+v.gwX().d.length,q=v.gwX(),p=v.gem(0),o=A.aif(q,p)&&!p.a,n=v.gpa(),m=v.gip(),l=v.x,k=v.y,j=v.z,i=l!==0?v.gpa().b.h(0,v.x):u,h=(p.a?D.ek:D.dY).j(0.95),g=C.n(18),f=p.a,e=C.K(f?D.c6:D.bf,D.r,1.5),d=C.X(f?D.hx:B.bNO,D.c,u,u,u,18),a0=x.p
g=C.a([C.aA(u,C.p(u,C.B(C.a([d,D.eg,C.d(f?"Breaker ON (live)":"Breaker OFF (safe)",u,u,u,u,u,u,D.nK,u,u,u)],a0),D.m,u,D.e,D.O,0,u,u),D.f,u,u,new C.o(h,u,e,g,u,u,D.n),u,u,u,u,D.h6,u,u,u),D.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,v.gcmo(),u,u,u,u,u,u,!1,D.a3)],a0)
h=!p.w&&!p.z
h=C.a([A.wX("Learn",D.bf,D.uB,h,new A.dbb(v)),D.am,A.wX("Practice",D.c6,D.pe,p.w,new A.dbc(v)),D.am,A.wX("Test",D.br,D.uq,p.z,new A.dbk(v)),D.am],a0)
if(!p.z)D.d.v(h,C.a([A.wX("Hints",D.aB,D.rD,p.e,new A.dbl(v)),D.am,A.wX("Labels",D.aJ,P.Cm,p.f,new A.dbm(v)),D.am,A.wX("Wire guide",D.mA,D.oi,!1,new A.dbn(a1)),D.am],a0))
h.push(A.wX("Brass side",B.bqs,E.aoQ,!1,new A.dbo(v)))
h.push(D.am)
h.push(A.wX("Silver side",B.FI,D.OX,!1,new A.dbp(v)))
h.push(D.P)
n=A.Y9(!1,u,m,new A.dbq(v),u,j,l,i,u,u,k,u,u,v.gJ7(),v.gJ8(),n,!1,u,g,h)
m=C.a([],a0)
l=p.c
if(l===0){l=C.a([],a0)
for(k=D.d.gag(q.e),j=new C.f2(k,new A.dbr(v));j.C();){i=k.gS(0)
h=i.c
g=new C.aP(14,14)
f=v.w
e=i.a
f=f===e
d=f?D.b_:D.aX
w=new C.ay(d,f?3:1,D.r,-1)
d=C.a([],a0)
if(p.b.iq(0,e))d.push(new C.D(D.fu,C.X(D.ed,i.d,u,u,u,18),u))
f=i.b
e=i.d
d.push(new C.y(f,u,new C.F(!0,e,u,u,u,u,13,D.u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u),u,u,u,u,u,u,u,u,u))
l.push(new C.D(D.iE,C.aA(u,C.p(u,new C.cd(D.aM,D.e,D.i,D.m,u,D.p,u,0,d,u),D.f,u,u,new C.o(h,u,new C.bH(w,w,w,w),new C.bh(g,g,g,g),u,u,D.n),u,u,u,u,D.hO,u,u,u),D.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new A.dbd(v,i),u,u,u,u,u,u,!1,D.a3),u))}l=C.a([C.bX(D.bG,l,D.bq,u,6,8)],a0)
if(p.z)D.d.v(l,C.a([C.B(C.a([A.uj("Submit the test",D.uq,new A.dbe(v,a1),D.br)],a0),D.m,u,D.e,D.i,0,u,u),D.P],a0))
l.push(D.P)
if(o)p="Push it into the box"
else p=p.a?"Turn the breaker OFF first":"Fasten every wire first"
l.push(C.B(C.a([A.uj(p,B.a2n,o?new A.dbf(v):u,D.aB)],a0),D.m,u,D.e,D.i,0,u,u))
D.d.v(m,l)}else if(l===1)D.d.v(m,C.a([C.B(C.a([A.uj("Pull it back out",D.pi,new A.dbg(v),D.ac),D.ad,A.uj("Put the cover plate on",W.uo,new A.dbh(v),D.aB)],a0),D.m,u,D.e,D.i,0,u,u)],a0))
else{l=A.uj("Start over",D.kM,new A.dbi(v),D.ac)
p=p.d
k=p?"Tested \u2713":"Power on and test"
D.d.v(m,C.a([C.B(C.a([l,D.ad,A.uj(k,D.hx,p?u:v.gcBM(),D.aB)],a0),D.m,u,D.e,D.i,0,u,u)],a0))}return A.U1(D.aB,new A.dbj(v,a1,t),C.x(m,D.m,u,D.e,D.O,0,D.p),n,r,q.b,u)}}
A.a9H.prototype={
R(){return new A.aGx()},
gdc(d){return this.c}}
A.aGx.prototype={
gem(d){var w,v=this.d
if(v===$){w=this.a.c
v=this.d=w==null?A.h4J():w}return v},
gip(){var w=this.e
return w===$?this.e=new A.xi(-0.3,0.18,40,B.aWW,$.ax()):w},
gpa(){var w=this.f
return w===$?this.f=A.bCS(this.gem(0)):w},
q(){var w=this.z
if(w!=null)w.a4(0)
this.a1()},
iK(d,e){var w=this,v=w.z
if(v!=null)v.a4(0)
w.m(new A.eXi(w,d,e))
w.z=C.cG(D.lE,new A.eXj(w))},
mF(d){return this.iK(d,!1)},
ol(){this.gip().hT(40,0.18,B.aWW,-0.3)
this.m(new A.eXb(this))},
J9(d){var w,v,u,t,s,r,q=this,p="square"
if(d===0){q.ol()
return}w=C.H([41,"tail",42,"trap",43,"arm"],x.S,x.N).h(0,d)
if(w!=null&&!q.gem(0).a.t(0,w)){v=q.r
if(v.length===0){if(w==="tail")v="tailpiece"
else v=w==="trap"?"P-trap":"trap arm"
q.mF("Pick the "+v+" from the buttons below first, then tap its glowing outline.")
return}if(v!==w){A.fR(180,220,0.25,p)
u=q.r
A:{if("tail"===u){v="The tailpiece is the straight pipe that hangs from the sink. It goes at the very top, under the drain."
break A}if("trap"===u){v="The P-trap is the U-shaped bend. It goes right under the tailpiece, in the middle."
break A}v="The trap arm is the long straight pipe that goes into the wall. It goes last, on the right."
break A}q.mF(v)
return}if(w==="trap"&&!q.gem(0).a.t(0,"tail")){A.fR(180,220,0.25,p)
q.mF("Start from the top: put the tailpiece on first, then the trap under it.")
return}if(w==="arm"&&!q.gem(0).a.t(0,"trap")){A.fR(180,220,0.25,p)
q.mF("The trap arm joins the trap. Put the P-trap on first.")
return}q.m(new A.eXc(q,w))
A.wW()
q.iK("Piece in place. "+(q.gem(0).a.a===3?"Now tighten the two slip nuts: tap each nut.":"Pick the next piece."),!0)
return}v=d===44
if(v||d===45){t=v?"n1":"n2"
if(q.gem(0).b.h(0,t)!==!0){q.m(new A.eXd(q,t))
A.wW()
q.iK("Slip nut hand tightened. In real life give it a quarter turn more with pliers, but never over-tighten plastic.",!0)
return}}s=q.gpa().b.h(0,d)
if(s!=null){q.m(new A.eXe(q,d))
v=q.gip()
r=s.c
v.xl(s.d,r)}},
c8w(){var w=this,v=x.cc,u=C.C(new C.Z(C.a(["n1","n2"],x.s),new A.eXf(w),v),v.k("M.E"))
w.m(new A.eXg(w,u))
if(u.length!==0){A.fR(180,220,0.25,"square")
w.mF("It is dripping from a loose slip nut! Tap the nut and tighten it, then run the water again.")}else{A.wW()
w.iK("No leaks. The water flows through the trap and into the wall. The little pool in the U-bend stays there and blocks sewer gas. The lesson is complete!",!0)}},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.gem(0),i=j.a,h=i.t(0,"tail"),g=i.t(0,"trap"),f=i.t(0,"arm"),e=j.b
e=e.h(0,"n1")===!0&&e.h(0,"n2")===!0
w=C.a([h,g,f,e,j.c&&j.d.length===0],x.u)
v=D.d.bh(w,new A.eXn())
u=i.a===3
j=v<0?"All done":"Step "+(v+1)+"/5"
h=l.gpa()
g=l.gip()
f=l.w
e=l.x
t=l.y
s=f!==0?l.gpa().b.h(0,l.w):k
h=A.Y9(!1,k,g,new A.eXo(l),k,t,f,s,k,k,e,k,k,l.gJ7(),l.gJ8(),h,!1,k,k,k)
e=x.p
s=C.a([],e)
for(r=0;r<3;++r){q=B.drC[r]
g=i.t(0,q)?k:new A.eXp(l,q)
f=i.t(0,q)?D.dq:D.fN
t=new C.aP(14,14)
p=l.r===q
o=p?D.b_:D.aX
n=new C.ay(o,p?3:1,D.r,-1)
o=C.a([],e)
if(i.t(0,q))o.push(B.emK)
p=B.dzP.h(0,q)
p.toString
m=i.t(0,q)?D.bU:D.c
o.push(new C.y(p,k,new C.F(!0,m,k,k,k,k,13,D.u,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k),k,k,k,k,k,k,k,k,k))
s.push(new C.D(D.iE,C.aA(k,C.p(k,new C.cd(D.aM,D.e,D.i,D.m,k,D.p,k,0,o,k),D.f,k,k,new C.o(f,k,new C.bH(n,n,n,n),new C.bh(t,t,t,t),k,k,D.n),k,k,k,k,D.hO,k,k,k),D.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,g,k,k,k,k,k,k,!1,D.a3),k))}i=C.bX(D.bG,s,D.bq,k,6,8)
g=A.uj("Start over",D.kM,new A.eXq(l),D.ac)
f=u?"Run the water":"Build the drain first"
return A.U1(D.co,new A.eXr(d,w),C.x(C.a([i,D.P,C.B(C.a([g,D.ad,A.uj(f,D.pm,u?l.gc8v():k,D.co)],e),D.m,k,D.e,D.i,0,k,k)],e),D.m,k,D.e,D.O,0,D.p),h,j,"Sink drain (P-trap)",k)}}
A.a58.prototype={
R(){return new A.aAV()},
gdc(d){return this.c}}
A.aAV.prototype={
gem(d){var w,v=this.d
if(v===$){w=this.a.c
v=this.d=w==null?A.h4J():w}return v},
gip(){var w=this.e
return w===$?this.e=new A.xi(-0.25,0.2,36,B.aWi,$.ax()):w},
gpa(){var w=this.f
return w===$?this.f=A.aPW(this.gem(0)):w},
q(){var w=this.z
if(w!=null)w.a4(0)
this.a1()},
iK(d,e){var w=this,v=w.z
if(v!=null)v.a4(0)
w.m(new A.de1(w,d,e))
w.z=C.cG(D.lE,new A.de2(w))},
mF(d){return this.iK(d,!1)},
ol(){this.gip().hT(36,0.2,B.aWi,-0.25)
this.m(new A.ddU(this))},
J9(d){var w,v,u,t,s,r,q=this
if(d===0){q.ol()
return}w=x.fZ
v=C.C(new C.Z(B.a5g,new A.ddX(d),w),w.k("M.E"))
if(v.length!==0&&q.r.length!==0){w=q.gem(0)
u=A.imf(w,q.r,D.d.gI(v))
if(u!=null){A.fR(180,220,0.25,"square")
q.mF(u)}else{A.wW()
q.m(new A.ddY(q,d))
q.gip().xl(12,A.agW(d))
q.iK(A.fCp(w)?"All four ends are connected. Now open the valves.":D.d.gI(v).b+": connected.",!0)}return}w=d===68
if(w||d===69){t=w?"hot":"cold"
if(q.gem(0).e.iq(0,t)){q.m(new A.ddZ(q,t))
q.iK("Hose taken off.",!0)
return}}s=q.gpa().b.h(0,d)
if(s!=null){q.m(new A.de_(q,d))
w=q.gip()
r=s.c
w.xl(s.d,r)}},
c8t(d){var w,v=this
v.m(new A.ddV(v))
w=v.gem(0)
if(!w.f){v.iK("Valves closed.",!0)
return}if(A.fCp(w)){A.wW()
v.iK("Hot and cold flow through the hoses and out of the faucet. No leaks. The lesson is complete!",!0)}else{A.fR(180,220,0.25,"square")
v.mF("Water is spraying out of a valve that has no hose! Close the valves and finish connecting the hoses first.")}},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=n.gem(0),k=l.r||l.e.a!==0,j=l.e,i=j.h(0,61)==="hot"&&j.h(0,63)==="hot",h=j.h(0,62)==="cold"&&j.h(0,64)==="cold",g=C.a([k,i,h,l.f&&A.fCp(l)],x.u),f=D.d.bh(g,new A.de6())
k=f<0?"All done":"Step "+(f+1)+"/4"
i=n.gpa()
h=n.gip()
w=n.w
v=n.x
u=n.y
t=w!==0?n.gpa().b.h(0,n.w):m
s=x.p
i=A.Y9(!1,m,h,new A.de7(n),m,u,w,t,m,m,v,m,m,n.gJ7(),n.gJ8(),i,!1,m,m,C.a([A.wX("Hints",D.aB,D.rD,l.r,new A.de8(n)),D.P],s))
v=C.a([],s)
for(r=0;r<2;++r){h={}
w=B.dr3[r]
h.a=null
q=w.a
h.a=q
u=new C.aP(14,14)
t=n.r===q
p=t?D.b_:D.aX
o=new C.ay(p,t?3:1,D.r,-1)
p=C.a([],s)
t=C.a7(j).k("bd<2>")
if(new C.Z(new C.bd(j,t),new A.de9(h),t.k("Z<M.E>")).gL(0)===2)p.push(B.emM)
p.push(new C.y(w.b,m,D.tj,m,m,m,m,m,m,m,m,m))
v.push(new C.D(D.iE,C.aA(m,C.p(m,new C.cd(D.aM,D.e,D.i,D.m,m,D.p,m,0,p,m),D.f,m,m,new C.o(w.c,m,new C.bH(o,o,o,o),new C.bh(u,u,u,u),m,m,D.n),m,m,m,m,D.hO,m,m,m),D.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new A.dea(h,n),m,m,m,m,m,m,!1,D.a3),m))}j=C.bX(D.bG,v,D.bq,m,6,8)
h=A.uj("Start over",D.kM,new A.deb(n),D.ac)
l=l.f?"Close the valves":"Open the valves"
return A.U1(D.c6,new A.dec(d,g),C.x(C.a([j,D.P,C.B(C.a([h,D.ad,A.uj(l,D.pm,n.gc8s(n),D.c6)],s),D.m,m,D.e,D.i,0,m,m)],s),D.m,m,D.e,D.O,0,D.p),i,k,"Faucet supply lines",m)}}
A.aBN.prototype={
R(){return new A.aBO(A.hgl())}}
A.aBO.prototype={
gip(){var w,v=this.e
if(v===$){w=new A.xi(-0.3,0.48,46,B.VA,$.ax())
w.f=80
this.e=w
v=w}return v},
gpa(){var w=this.f
return w===$?this.f=A.agK(this.d):w},
q(){var w=this.z
if(w!=null)w.a4(0)
this.a1()},
iK(d,e){var w=this,v=w.z
if(v!=null)v.a4(0)
w.m(new A.dl5(w,d,e))
w.z=C.cG(D.lE,new A.dl6(w))},
mF(d){return this.iK(d,!1)},
ol(){this.gip().hT(46,0.48,B.VA,-0.3)
this.m(new A.dl_(this))},
J9(d){var w,v,u,t=this
if(d===0){t.ol()
return}if(d===72){w=t.d
w=w.d.t(0,72)&&w.a>=5}else w=!1
if(w){t.m(new A.dl1(t,d))
A.wW()
t.iK("You flipped the breaker fully OFF and then ON. The living room light is back on. A breaker trips when a circuit is overloaded: find out why before it trips again.",!0)
t.gip().xl(22,B.hck)
return}w=d===87
if(w||d===86){v=t.d
v=v.b&&!v.c&&v.a>=5}else v=!1
if(v){if(t.w==="wrench"&&w){t.m(new A.dl2(t,d))
A.wW()
t.iK("You tightened the slip nut with the wrench. The drip has stopped.",!0)
return}A.fR(180,220,0.25,"square")
t.mF(w?"Hand tightening is not enough here. Pick the wrench first, then tap the nut.":"The water is dripping from the slip nut on the trap. Pick the wrench, then tap the nut.")}u=t.gpa().b.h(0,d)
if(u!=null){t.m(new A.dl3(t,d))
w=t.gip()
v=u.c
w.xl(u.d,v)}},
cgq(d){var w,v
A:{if("ptrap"===d){w=B.etk
break A}if("faucet"===d){w=B.bHa
break A}w=new A.E_(d,null,null)
break A}v=this.c
v.toString
C.a4(v,!1).cc(C.eh(new A.dl0(w),!1,null,x.H))},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.d,l=B.dlH[m.a],k=o.r,j=k===0?n:A.ibm(k)
k=m.d.t(0,72)
w=!m.b||m.c
v=C.a([!k,w],x.u)
w=m.a
k=o.gpa()
u=o.gip()
t=o.r
s=o.x
r=o.y
q=t!==0?o.gpa().b.h(0,o.r):n
p=j==null?n:C.aA(n,C.p(n,B.fxl,D.f,n,n,new C.o(D.aB,n,n,C.n(12),n,n,D.n),n,n,n,n,D.qi,n,n,n),D.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new A.dl9(o,j),n,n,n,n,n,n,!1,D.a3)
k=A.Y9(!1,n,u,new A.dla(o),n,r,t,q,p,new A.dlb(o),s,n,n,o.gJ7(),o.gJ8(),k,!1,n,n,n)
s=l.a
p=x.p
q=C.B(C.a([C.E(C.d(""+(m.a+1)+". "+s,n,n,n,n,n,n,B.fpq,n,n,n),1),A.wX("Wrench",D.aJ,D.pe,o.w==="wrench",new A.dlc(o))],p),D.m,n,D.e,D.i,0,n,n)
t=C.d(l.b,n,3,D.a1,n,n,n,B.fqw,n,n,n)
m=C.kQ(D.br,6,s,6,0,new A.dld(o),m.a)
u=v[0]
s=u?"\u2705 Living room power fixed":"\u26a0 Living room has no power"
s=C.E(C.d(s,n,n,n,n,n,n,C.l(n,n,u?D.es:D.eP,n,n,n,n,n,n,n,n,11.5,n,n,D.H,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),1)
u=v[1]
r=u?"\u2705 Sink leak fixed":"\u26a0 Kitchen sink drips"
return A.U1(D.br,new A.dle(d,v),C.x(C.a([q,D.bF,t,m,C.B(C.a([s,C.E(C.d(r,n,n,n,n,n,n,C.l(n,n,u?D.es:D.eP,n,n,n,n,n,n,n,n,11.5,n,n,D.H,n,n,!0,n,n,n,n,n,n,n,n),D.dV,n,n),1)],p),D.m,n,D.e,D.i,0,n,n)],p),D.m,n,D.e,D.O,0,D.p),k,"Stage "+(w+1)+"/7","Build and fix a house",n)}}
A.afN.prototype={
R(){return new A.bxv()}}
A.bxv.prototype={
b7U(){var w=this,v=w.d
if(v!=null)v.a4(0)
w.d=null
if(w.e&&w.c!=null)w.m(new A.fiJ(w))},
c8y(d){var w,v,u=this
u.m(new A.fiH(u))
w=u.a
v=w.e
v.apy(w.f?1.45:0.69)
v=u.d
if(v!=null)v.a4(0)
u.d=C.cG(D.kI,new A.fiI(u))},
q(){var w=this.d
if(w!=null)w.a4(0)
this.a1()},
B(d){var w=this,v=null,u=w.a.d,t=D.w.j(w.e?0.8:0.55),s=w.e,r=s?D.bu:D.aX
r=C.K(r,D.r,s?2:1)
return new C.D(D.eH,C.he(C.mH(D.c5,C.p(v,C.X(w.a.c,D.c,v,v,v,22),D.f,v,v,new C.o(t,v,r,v,v,v,D.a6),v,44,v,v,v,v,v,44),v,new A.fiK(w),new A.fiL(w),v,v,v,v,new A.fiM(w)),v,u,v,v),v)}}
A.jS.prototype={}
A.N4.prototype={}
A.a7a.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=x.p,k=C.a([C.B(C.a([C.aH(m,m,m,m,T.nx,m,m,m,new A.cbQ(d),m,m,m,m,m,m),B.fHC],l),D.m,m,D.e,D.i,0,m,m)],l)
for(w=0;w<5;++w){v=B.dto[w]
u=v.c
t=C.a([new C.D(D.als,new C.y(v.b+"  "+v.a.toUpperCase(),m,new C.F(!0,u,m,m,m,m,12,D.u,m,1.1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m,m,m,m,m,m,m),m)],l)
for(s=v.d,r=s.length,q=0;q<r;++q){p=s[q]
o=new C.aP(14,14)
n=new C.ay(u.j(0.35),1,D.r,-1)
t.push(C.p(m,C.x(C.a([new C.y(p.a,m,D.j4,m,m,m,m,m,m,m,m,m),D.cS,new C.y(p.b,m,E.aa3,m,m,m,m,m,m,m,m,m)],l),D.E,m,D.e,D.i,0,D.p),D.f,m,m,new C.o(B.FC,m,new C.bH(n,n,n,n),new C.bh(o,o,o,o),m,m,D.n),m,m,m,D.cu,D.bg,m,m,m))}D.d.v(k,t)}return C.c5(m,D.c1,C.bm(!0,C.cl(k,m,m,B.akt,m,m,D.ah,!1),!0,!1,D.af,!0,!0),m,!1,!1,m,m)}}
A.co_.prototype={}
A.Ff.prototype={}
A.nw.prototype={}
A.Xg.prototype={}
A.cnQ.prototype={
bA5(d,e,f){var w,v=this
if(f!=null)w=D.d.fY(B.azc,new A.cnU(f))
else{w=new C.e4()
w.cY(v.a)
w=B.azc[w.ap(2)]}v.c!==$&&C.aQ()
v.c=w
w=new C.e4()
w.cY(v.a+7)
w=w.h5()
v.d!==$&&C.aQ()
v.d=w},
vo(d,e){var w=this.c
w===$&&C.c()
return D.d.fY(w.c,new A.cnV(e))},
Pr(d){++this.w
return new A.ey(!1,d,!1,"")},
c5H(d){var w=d.d
return new C.N(w,new A.cnR(this),C.T(w).k("N<1,m>")).aG(0," and ")},
biJ(d,e){var w,v,u,t,s=this,r=s.vo(0,e),q=s.e
if(q.t(0,e))return s.Pr("The "+r.c.toLowerCase()+" is already there.")
if(d!==r.b)return s.Pr(s.b?"That does not go here.":"That does not go here. This spot is for the "+r.c.toLowerCase()+".")
for(w=r.d,v=w.length,u=0;u<v;++u)if(!q.t(0,w[u])){q=s.b?"Not yet: something has to go in first.":"Not yet. "+r.e+" Put in the "+s.c5H(r)+" first.";++s.w
return new A.ey(!1,q,!1,"")}if(r.f&&s.r)return s.Pr(s.b?"The water is still on!":"Stop! The water is still on. Cutting into a pipe with the water on floods the room. Turn the water off at the main valve first (pick the hand and tap the main valve).")
q.M(0,e)
s.y=!1
s.x.aa(0)
if(r.r>0)t=s.b?"":" It is only loose. Pick the wrench and tap it to tighten the joints."
else t=""
return new A.ey(!0,r.c+" fitted."+t,!1,"")},
bk0(d){var w,v,u,t,s=this,r=s.vo(0,d)
if(!s.e.t(0,d))return s.Pr(s.b?"Nothing to tighten yet.":"There is nothing to tighten yet: the "+r.c.toLowerCase()+" is not fitted.")
w=r.r
if(w===0)return s.Pr(s.b?"That does not need tightening.":"The "+r.c.toLowerCase()+" does not have joints to tighten. It just sits in place.")
v=s.f
u=v.h(0,d)
if(u==null)u=0
if(u>=w)return s.Pr("Already tight. More force would crack it.")
t=u+1
v.n(0,d,t)
s.x.aa(0)
s.y=!1
v=r.c
return new A.ey(!0,t>=w?v+": every joint is tight now.":v+": one joint tightened, one to go.",!1,"")},
aHw(d){var w=this.vo(0,d),v=this.f.h(0,d)
if(v==null)v=0
return w.r-v},
aJz(){var w,v,u,t,s,r,q=this
q.r=!q.r
w=q.x
w.aa(0)
if(!q.r)return B.b_k
v=q.c
v===$&&C.c()
u=v.c
t=C.T(u).k("Z<1>")
s=C.C(new C.Z(u,new A.cnW(q),t),t.k("M.E"))
v=v.c
u=C.T(v).k("Z<1>")
r=C.C(new C.Z(v,new A.cnX(q),u),u.k("M.E"))
q.y=!0
if(s.length!==0){w.v(0,new C.N(s,new A.cnY(),C.T(s).k("N<1,m>")));++q.w
return new A.ey(!1,"Water is spraying from an open pipe where the "+D.d.gI(s).c.toLowerCase()+" should be! Turn the water off and finish the job.",!0,"")}if(r.length!==0){w.v(0,new C.N(r,new A.cnZ(),C.T(r).k("N<1,m>")));++q.w
return new A.ey(!1,"The "+D.d.gI(r).c.toLowerCase()+" is leaking from a loose joint. Turn the water off, tighten it with the wrench, then test again.",!0,"")}if(!q.ga3M())return B.b_a
return B.aZW},
cJJ(){var w,v,u,t,s,r,q,p=this
p.r=!0
p.aJz()
w=p.c
w===$&&C.c()
v=w.c
u=v.length
t=0
for(;t<u;++t){s=v[t]
p.biJ(s.b,s.a)}for(w=w.c,v=w.length,t=0;t<v;++t){s=w[t]
for(u=s.r,r=s.a,q=0;q<u;++q)p.bk0(r)}p.aJz()
p.w=0},
ga3M(){var w=this.c
w===$&&C.c()
return D.d.d0(w.c,new A.cnS(this))},
gcHU(){var w=this.c
w===$&&C.c()
return D.d.d0(w.c,new A.cnT(this))},
gwG(){var w=this
return w.ga3M()&&w.gcHU()&&w.r&&w.y&&w.x.a===0}}
A.Wf.prototype={
R(){var w,v=new A.xi(-0.25,0.4,135,B.aXC,$.ax())
v.f=200
w=new C.ye()
$.yY()
w.h7(0)
return new A.aFe(v,w)}}
A.aFe.prototype={
gCY(d){var w=this.d
if(w===$){this.a.toString
w=D.o.F(Date.now(),1e5)
this.d=w}return w},
Z(){var w,v=this
v.a2()
w=v.a.e
if(w==null)w=A.h4I(!0,v.gCY(0),null)
v.e=w
v.r=A.huO(w,v.x,!w.b)},
q(){var w=this.at
if(w!=null)w.a4(0)
this.a1()},
aev(){var w=this.e
w===$&&C.c()
return this.r=A.huO(w,this.x,!w.b)},
axP(d,e){var w=this,v=w.at
if(v!=null)v.a4(0)
w.m(new A.er2(w,d,e))
w.at=C.cG(D.jP,new A.er3(w))},
b_h(){this.f.hT(135,0.4,B.aXC,-0.25)
this.m(new A.eqY(this))},
czv(d){var w,v,u=this.e
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
ayG(d){var w=this.e
w===$&&C.c();++w.w
return new A.ey(!1,d,!1,"")},
c8C(d){return this.b_g(d)},
cyK(d){var w
A:{if("main"===d){w=9400
break A}w=this.e
w===$&&C.c()
w=w.c
w===$&&C.c()
w=9100+D.d.bh(w.c,new A.er7(d))
break A}this.b_g(w)},
b7p(){var w,v,u,t,s,r,q,p=this,o=p.x
if(o==="hand")return C.a([B.eNh],x.L)
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
q=r.vo(0,s)
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
b_g(d){var w,v,u,t,s,r=this
if(d===0)return
w=r.r
w===$&&C.c()
v=w.b.h(0,d)
if(r.x.length===0){r.m(new A.eqN(r,d))
if(v!=null)r.axP(v.a+": "+v.b,!0)
return}u=r.czv(d)
w=r.x
if(w==="hand")if(d===9400){w=r.e
w===$&&C.c()
t=w.aJz()}else{w=r.e
w===$&&C.c()
t=r.ayG(w.b?"Your hand is only for the main water valve.":"Your hand is for the main water valve. Parts are placed by picking them from the tray.")}else if(w==="wrench")if(u==null){w=r.e
w===$&&C.c()
t=r.ayG(w.b?"Nothing to tighten.":"There is nothing to tighten there.")}else{w=r.e
w===$&&C.c()
t=w.bk0(u)}else if(u==null){w=r.e
w===$&&C.c()
t=r.ayG(w.b?"Not there.":"That does not go there. Tap one of the glowing spots.")}else{s=r.e
s===$&&C.c()
t=s.biJ(w,u)}w=t.a
if(w)A.wW()
else A.fR(180,220,0.25,"square")
r.m(new A.eqO(r,d))
w=w&&!t.c
r.axP(t.b,w)
w=r.e
w===$&&C.c()
if(w.gwG()&&!r.as){r.as=!0
$.aV.x1$.push(new A.eqP(r))}},
c8z(){var w,v=null
this.a.toString
w=this.c
w.toString
C.ck(v,v,!0,v,new A.eqU(this,0),w,v,!0,!0,x.H)},
aZ6(){this.m(new A.er0(this))
this.b_h()},
gcDS(){var w,v,u,t=C.a([],x.s)
for(w=0;w<11;++w){v=B.c6j[w]
u=this.e
u===$&&C.c()
u=u.c
u===$&&C.c()
if(D.d.b3(u.c,new A.er8(v)))t.push(v)}return t},
c64(){var w,v,u,t,s=this.e
s===$&&C.c()
s=s.c
s===$&&C.c()
s=s.c
w=s.length
v=0
for(;v<w;++v){u=s[v]
if(!this.e.e.t(0,u.a)){t=this.e.e
t=D.d.d0(u.d,t.gkU(t))}else t=!1
if(t)return u}return null},
aVt(){var w,v,u,t=this,s=t.e
s===$&&C.c()
if(s.x.a!==0){s=s.c
s===$&&C.c()
s=s.c
w=C.T(s)
v=new C.cQ(new C.Z(s,new A.eqV(t),w.k("Z<1>")),new A.eqW(),w.k("cQ<1,m>")).aG(0,", ")
s=t.e
if(s.r)return new C.b7("\ud83d\udca7 Water is leaking at: "+v+". First turn the main water OFF: pick Hand and tap the main valve.","hand","main")
return new C.b7("\ud83d\udca7 It leaked at: "+v+". Pick the Wrench and tap it to tighten the joint. Then turn the water ON again to test.","wrench",s.x.gI(0))}if(!s.ga3M()){u=t.c64()
if(u==null)return B.eXV
if(u.f&&t.e.r)return B.eXq
s=u.b
w=B.aGS.h(0,s)
if(w==null)w=s
return new C.b7("Next: pick "+w+" from the tray, then tap "+u.c.toLowerCase()+" (the glowing spot). "+u.e,s,u.a)}s=t.e.c
s===$&&C.c()
s=s.c
w=C.T(s).k("Z<1>")
v=C.C(new C.Z(s,new A.eqX(t),w),w.k("M.E"))
if(v.length!==0)return new C.b7("Everything is fitted. Now tighten each joint: pick the Wrench and tap "+D.d.gI(v).c.toLowerCase()+".","wrench",D.d.gI(v).a)
if(!t.e.r)return B.eWd
return B.eYl},
cx5(){var w,v,u,t,s=this,r={}
r.a=r.b=null
w=s.aVt()
r.b=w.b
r.a=w.c
s.m(new A.er4(r,s))
v=r.a
if(v!=null){if(v==="main")u=9400
else{v=s.e
v===$&&C.c()
v=v.c
v===$&&C.c()
u=9100+D.d.bh(v.c,new A.er5(r))}r=s.r
r===$&&C.c()
t=r.b.h(0,u)
if(t!=null)s.f.hT(70,0.3,t.c,-0.2)
s.m(new A.er6(s,u))}s.axP(w.a,!0)},
axO(d,e,f){var w,v=null,u=this.x===d,t=u?D.aB.j(0.25):D.c.j(0.07),s=C.n(14),r=u?D.aB:D.aX
r=C.K(r,D.r,u?2:1)
w=C.X(f,u?D.aB:D.ac,v,v,v,19)
return new C.D(G.od,C.aA(v,C.p(v,C.B(C.a([w,D.bn,C.d(e,v,v,v,v,v,v,C.l(v,v,u?D.aB:D.c,v,v,v,v,v,v,v,v,12.5,v,v,D.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),D.m,v,D.e,D.i,0,v,v),D.f,v,v,new C.o(t,v,r,s,v,v,D.n),v,v,v,v,D.eZ,v,v,v),D.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new A.eqR(this,u,d),v,v,v,v,v,v,!1,D.a3),v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.e
h===$&&C.c()
h=h.c
h===$&&C.c()
h=h.c
w=new C.Z(h,new A.er9(j),C.T(h).k("Z<1>")).gL(0)
h=j.e.c
h===$&&C.c()
v=j.r
v===$&&C.c()
u=j.y
t=j.z
s=j.Q
r=u!==0?v.b.h(0,u):i
v=A.Y9(!1,i,j.f,new A.era(j),i,s,u,r,i,new A.erb(),t,i,i,j.gc8A(),j.gc8B(),v,!1,i,i,i)
t=x.p
r=C.a([],t)
if(!j.e.b){u=D.aJ.j(0.12)
s=C.n(12)
q=C.K(D.aJ.j(0.6),D.r,1)
r.push(C.p(i,C.B(C.a([C.E(C.d("\ud83d\udc49 "+j.aVt().a,i,4,D.a1,i,i,i,B.fwt,i,i,i),1),D.bn,C.bI(B.fAb,i,j.gcx4(),C.bo(i,i,i,i,i,B.f70,D.kj,i,i,i,i,i))],t),D.m,i,D.e,D.i,0,i,i),D.f,i,i,new C.o(u,i,q,s,i,i,D.n),i,i,i,D.eH,D.a_8,i,i,1/0))}if(j.x.length!==0&&j.b7p().length!==0){u=C.a([],t)
for(s=j.b7p(),q=s.length,p=0;p<s.length;s.length===q||(0,C.L)(s),++p){o={}
n=s[p]
o.a=null
o.a=n.a
m=new C.aP(12,12)
l=new C.ay(D.b_,1,D.r,-1)
u.push(C.aA(i,C.p(i,new C.y("\ud83d\udccd "+n.b,i,D.oJ,i,i,i,i,i,i,i,i,i),D.f,i,i,new C.o(D.eN.j(0.35),i,new C.bH(l,l,l,l),new C.bh(m,m,m,m),i,i,D.n),i,i,i,i,B.a_9,i,i,i),D.y,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new A.erc(o,j),i,i,i,i,i,i,!1,D.a3))}r.push(new C.D(D.eH,C.bX(D.bG,u,D.bq,i,6,6),i))}u=j.e
if(u.b)u="Real work: no hints. Build it in the right order."
else if(u.ga3M())u="Everything is fitted. Tighten every joint, then turn the main water on to test."
else{u=j.e.c
u===$&&C.c()
u="Job: "+u.d}r.push(new C.bM(D.a5,i,i,C.d(u,i,2,D.a1,i,i,i,B.aTn,i,i,i),i))
r.push(D.P)
t=C.a([j.axO("hand","Hand",B.apg),j.axO("wrench","Wrench",D.pe)],t)
for(u=j.gcDS(),s=u.length,p=0;p<u.length;u.length===s||(0,C.L)(u),++p){k=u[p]
q=B.aGS.h(0,k)
q.toString
t.push(j.axO(k,q,Ag.aoK))}r.push(new C.a5(i,52,C.cl(t,i,i,i,i,i,D.aM,!1),i))
return A.U1(D.aJ,new A.erd(j,d),C.x(r,D.m,i,D.e,D.O,0,D.p),v,""+w+"/"+h.c.length+" fitted","Plumbing job: "+h.b,i)},
c2q(d){return C.bV(E.lB,null,new A.er_(this),d,!0,!0,!0,D.k3,!1,!1,x.H)}}
A.z7.prototype={}
A.l9.prototype={}
A.XW.prototype={}
A.aw4.prototype={}
A.aUU.prototype={}
A.ey.prototype={
gjP(){return this.a}}
A.XK.prototype={
clP(d,e,f){var w,v,u,t,s,r,q=this,p=null,o="outlet",n="light",m="switch",l="gfci",k=q.a,j=new C.e4()
j.cY(k)
w=j.ap(3)
if(d==null)v=k>=100&&D.o.F(k,5)>=3?D.o.F(k,5):w
else v=d
u=C.a([0,1,2],x.t)
D.d.dZ(u,j)
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
r=j.h5()?"dryer4":"dryer3"
r=C.a([new A.l9(k,"washer",p),new A.l9(s,r,p),new A.l9(5,n,t),new A.l9(t,m,p)],x.B)
q.d!==$&&C.aQ()
q.d=r
k=r
break
default:k=e==null?"Kitchen with a range":e
q.c!==$&&C.aQ()
q.c=k
k=u[0]
s=j.h5()?"range4":"range3"
s=C.a([new A.l9(k,s,p),new A.l9(u[1],l,p),new A.l9(5,n,t),new A.l9(t,m,p)],x.B)
q.d!==$&&C.aQ()
q.d=s
k=s}if(f&&v<3){k[1]=new A.l9(k[1].a,B.dlr[j.ap(5)],p)
k=q.d
k===$&&C.c()
k[3]=new A.l9(k[3].a,B.dn5[j.ap(5)],p)}},
ganB(){var w,v,u=C.aX(x.S),t=this.d
t===$&&C.c()
w=t.length
v=0
for(;v<t.length;t.length===w||(0,C.L)(t),++v)u.M(0,t[v].a)
return u},
cVV(d){var w,v,u,t=this.d
t===$&&C.c()
w=t.length
v=0
for(;v<w;++v){u=t[v]
if(u.a===d)return u}return null},
fV(d){++this.f
return new A.ey(!1,d,!1,"")},
amh(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.d
g===$&&C.c()
w=g.length
v=h.x
u=0
for(;u<g.length;g.length===w||(0,C.L)(g),++u){t=g[u].a
s=A.j5(t)
if(s.e==="fan")r="fan"
else r=s.c?"ceiling":"wall"
v.n(0,t,r)}g=C.a([],x.t)
for(q=0;q<$.Hf().length;++q)g.push(q)
h.y.v(0,g)
h.z.v(0,h.ganB())
for(g=h.Q,w=x.S,u=0;u<3;++u){p=B.oy[u]
v=C.aX(w)
t=C.aX(w)
o=new A.aw4(v,t)
o.d=o.e=o.a=!0
for(r=h.aqF(p),n=r.length,m=0;m<r.length;r.length===n||(0,C.L)(r),++m)for(l=r[m]*10,k=0;k<6;++k)t.M(0,l+k)
for(t=h.ganB(),r=C.a7(t),n=new C.mr(t,t.r,r.k("mr<1>")),n.c=t.e,r=r.c,t=p+48;n.C();){l=n.d
if(l==null)l=r.a(l)
s=A.j5(l)
if(!s.c){j=s.d.a
j=j>=p&&j<=t}else j=!1
if(j)v.M(0,l)}g.n(0,p,o)}for(g=h.as,u=0;u<2;++u){i=g[u]
i.a=!0
i.b=3
i.d=i.c=!0}},
cJK(){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=k.d
j===$&&C.c()
w=j.length
v=0
for(;v<j.length;j.length===w||(0,C.L)(j),++v){u=j[v]
k.bgH(u.a,u.b)}for(w=j.length,t=x.S,s=x.N,r=k.at,v=0;v<j.length;j.length===w||(0,C.L)(j),++v){q=j[v].a
p=r.h(0,q)
if(p==null)continue
o=p.a
n=A.t6(o)
if(n.w.length!==0)m=n.z
else{A:{if("outlet"===o){o=C.H([25,"ground",23,"white",21,"black"],t,s)
break A}if("gfci"===o){o=C.H([25,"ground",24,"white",22,"black"],t,s)
break A}if("switch"===o){o=C.H([25,"ground",21,"blackLine",22,"blackLoad"],t,s)
break A}o=C.H([53,"ground",52,"white",51,"black"],t,s)
break A}m=o}for(o=m.gdV(m),o=o.gag(o);o.C();){l=o.gS(o)
k.bf2(q,l.b,l.a)}k.aIQ(q)
k.aF8(q)}if(!k.ax)k.aJx()
for(w=j.length,v=0;v<j.length;j.length===w||(0,C.L)(j),++v){u=j[v]
if(D.d.t(B.lh,u.b)){t=u.a
k.biL(t,"lamp")
k.bkk(t)}}for(j=D.d.gag(j),w=new C.f2(j,new A.csR());w.C();){t=j.gS(0).a
k.aG9(t)
k.aG9(t)}},
aM0(d){var w,v,u=A.j5(d).d.a,t=C.a([],x.t)
for(w=0;v=$.Hf(),w<v.length;++w){v=v[w]
if(v>u&&v<64)t.push(w)}return t},
cTN(d,e){var w,v,u=this,t=u.x
if(t.aj(0,d))return u.fV("There is already a box at "+A.j5(d).b+".")
w=A.j5(d)
v=w.c
if(!v&&e!=="wall")return u.fV("That is a ceiling box. On the wall you use a plain wall box (the blue one with ears).")
if(v&&e==="wall")return u.fV("A wall box cannot go in the ceiling. Use a round ceiling box.")
if(w.e==="fan"&&e!=="fan"){if(!u.b)return u.fV('A fan is heavy and it shakes. It needs a box that says "fan rated". A plain ceiling box can let the fan fall.')
t.n(0,d,e);++u.f
return B.b_y}t.n(0,d,e)
t=v?"ceiling joist":"side of the stud"
return new A.ey(!0,w.b+": box fixed to the "+t+".",!1,"")},
cOf(d){var w,v=this
if(d<0||d>=$.Hf().length)return B.b_s
w=v.y
if(w.t(0,d))return v.fV("That stud already has a hole.")
if(v.x.a===0)return v.fV("Mount the boxes first. Then you know where the cable has to go and which studs need a hole.")
w.M(0,d)
return B.b_c},
cX_(d){var w,v,u,t,s=this,r=A.j5(d)
if(!s.x.aj(0,d))return s.fV("There is no box at "+r.b+". Mount the box first, then pull the cable to it.")
w=s.z
if(w.t(0,d))return s.fV("The cable is already there.")
v=s.aM0(d)
u=C.T(v).k("Z<1>")
t=C.C(new C.Z(v,new A.csY(s),u),u.k("M.E"))
if(t.length!==0){w=D.o.V($.Hf()[D.d.gI(t)])
v=t.length
u=v===1?"it":"the studs"
return s.fV("The cable is stuck: the stud at "+w+" inches has no hole. Drill "+u+" first ("+v+" left on the way).")}w.M(0,d)
return new A.ey(!0,"Cable pulled from the panel to "+r.b+", through the studs and along the ceiling.",!1,"")},
gaoV(){return this.ganB().d0(0,new A.csZ(this))},
aqk(d){var w,v,u,t
for(w=this.Q,w=new C.cI(w,C.a7(w).k("cI<1,2>")).gag(0);w.C();){v=w.d
u=v.b
if(u.a){t=v.a
t=d>=t&&d<=t+48}else t=!1
if(t)return u}return null},
cR3(d){var w,v,u=this
if(!u.gaoV())return u.fV("Finish the rough-in first. The cable and the boxes must be in before the drywall hides the studs.")
if(!D.d.t(B.a5i,d))return B.b__
if(!D.d.t(B.oy,d))return u.fV("The edge of the sheet would land between two studs. The sheet needs a stud under every edge, so there is nothing to screw it to. Start at the left corner (a stud) and move one sheet width (48 inches) at a time.")
w=u.Q
v=w.h(0,d)
if((v==null?null:v.a)===!0)return u.fV("There is already a sheet there.")
v=w.h(0,d)
if(v==null){v=x.S
v=new A.aw4(C.aX(v),C.aX(v))}v.a=!0
w.n(0,d,v)
return B.b_b},
aqF(d){var w,v,u,t=C.a([],x.t)
for(w=d+48,v=0;u=$.Hf(),v<u.length;++v){u=u[v]
if(u>=d&&u<=w)t.push(v)}return t},
cN9(d){var w,v,u=this,t=A.j5(d)
if(t.c)return u.fV("Ceiling fixtures do not need an opening in the wall.")
if(!u.x.aj(0,d))return u.fV("There is no box at "+t.b+".")
w=u.aqk(t.d.a)
if(w==null)return u.fV("There is no sheet over this box yet. Hang the sheet first, then cut the opening.")
v=w.b
if(v.t(0,d))return u.fV("The opening is already cut.")
v.M(0,d)
return B.b_l},
aLf(d,e,f){var w,v,u,t,s,r=this
if(f)return r.fV("Missed the stud! There is only air behind the sheet here. The screw would pull through the paper. Screw only where a stud is behind the sheet (every 16 inches).")
w=x.dD
v=C.C(new C.Z(B.oy,new A.ct_(r,d),w),w.k("M.E"))
if(v.length===0)return r.fV("There is no sheet here yet.")
u=d*10+e
if(D.d.d0(v,new A.ct0(r,u)))return r.fV("There is already a screw there.")
for(w=v.length,t=r.Q,s=0;s<v.length;v.length===w||(0,C.L)(v),++s)t.h(0,v[s]).c.M(0,u)
return B.b_n},
bou(d,e){return this.aLf(d,e,!1)},
bq7(d){var w=this.Q.h(0,d)
if(w==null||!w.a)return!1
return D.d.d0(this.aqF(d),new A.ct2(w))},
gaDF(){return D.d.d0(B.oy,new A.csQ(this))},
gaDE(){var w=this.ganB()
return new C.Z(w,new A.csO(),C.a7(w).k("Z<cs.E>")).d0(0,new A.csP(this))},
cYY(d){var w,v=this
if(!v.gaDF())return v.fV("Hang all the sheets first.")
if(!D.d.d0(B.oy,v.gaql()))return v.fV("Finish screwing every sheet to the studs first. Tape goes on a solid wall.")
w=v.as[d]
if(w.a)return v.fV("This seam already has tape.")
w.c=w.a=!0
return B.b_3},
cTQ(d){var w,v=this,u=v.as[d]
if(!u.a)return v.fV("Tape first. The mud goes over the tape.")
if(!u.c)return v.fV("The last coat is still wet. Let it dry before the next coat.")
w=u.b
if(w>=3)return v.fV("Three coats are enough. Now sand it.");++w
u.b=w
u.c=!1
return new A.ey(!0,"Coat "+w+" of joint compound spread. Let it dry.",!1,"")},
cSH(){var w,v=this.as
if(D.d.d0(v,new A.csW()))return B.b_i
for(w=0;w<2;++w)v[w].c=!0
return B.b_w},
bog(d){var w=this,v=w.as[d]
if(v.b<3)return w.fV("Put on all three coats of mud first. Sanding now would just rub off the tape.")
if(!v.c)return w.fV("The mud is still wet. Let it dry first.")
if(v.d)return w.fV("Already sanded.")
v.d=!0
return B.b_0},
cW9(d){var w=this,v=w.Q.h(0,d)
if(v==null||!v.a)return w.fV("There is no sheet there.")
if(!w.gaDE())return w.fV("Cut the openings for the boxes before you paint. Otherwise the paint covers the boxes.")
if(!D.d.d0(w.as,new A.csX()))return w.fV("Sand the seams first. Paint shows every bump.")
if(v.e)return w.fV("This sheet is already painted.")
v.e=!0
return B.aZX},
gt5(){var w=this
return w.gaDF()&&D.d.d0(B.oy,w.gaql())&&w.gaDE()&&D.d.d0(w.as,new A.csS())&&D.d.d0(B.oy,new A.csT(w))},
NF(){var w,v
for(w=this.at,w=new C.du(w,w.r,w.e);w.C();){v=w.d.b
v.a=this.ax&&!this.ay}},
c1E(d,e){if(d.c)return e==="light"||e==="fan"?"":"A ceiling box holds a light or a fan, not an outlet or a switch."
return D.d.t(B.lh,e)||D.d.t(B.jE,e)?"":"A light or a fan hangs from the ceiling. A wall box holds an outlet, a GFCI or a switch."},
bgH(d,e){var w,v,u,t,s,r=this,q=A.j5(d)
if(!r.gt5())return r.fV("Finish the drywall first. Devices go in after the walls are painted.")
w=r.x
if(!w.aj(0,d)||!r.z.t(0,d))return r.fV("There is no box with cable at "+q.b+".")
v=r.at
if(v.aj(0,d))return r.fV("There is already a device there. Pull it out first if you want to move it.")
if(r.ax&&!r.ay){++r.f
return B.b_4}u=r.c1E(q,e)
if(u.length!==0)return r.fV(u)
if(!(D.d.t(B.jE,e)&&q.e==="low"))t=!D.d.t(B.jE,e)&&!q.c&&q.e==="switch"
else t=!0
if(t){if(!r.b)return r.fV(D.d.t(B.jE,e)?"A switch goes about 48 inches from the floor, where a hand falls naturally. This box is down at outlet height.":"Outlets go low, about 16 inches from the floor. This box is up at switch height.");++r.f
r.cy.push("Wrong height at "+q.b+".")}t=e==="fan"
if(t&&w.h(0,d)!=="fan")if(!r.b)return r.fV("This box is not fan rated. A fan on it can fall. Take the box out and put in a fan-rated one.")
s=new A.CA(C.U(x.S,x.N))
s.w=r.b
s.z=r.dx
s.y=!(t&&w.h(0,d)!=="fan")
s.a=r.ax&&!r.ay
v.n(0,d,new A.aUU(e,s))
if(e==="light")w="Light fixture"
else if(t)w="Ceiling fan"
else if(e==="gfci")w="GFCI outlet"
else w=e==="switch"?"Switch":A.a2k(e)
return new A.ey(!0,w+" is held up to "+q.b+". Turn the breaker OFF, then wire it.",!1,"")},
aoI(d){var w=this,v=w.at,u=v.h(0,d)
if(u==null)return B.b_8
if(w.ax&&!w.ay&&!u.b.x){if(w.b)return w.a2s()
return w.a2H()}v.W(0,d)
w.CW.W(0,d)
w.cx.W(0,d)
w.ch.W(0,d)
return B.b_q},
a2H(){++this.r;++this.f
return B.b_o},
a2s(){var w,v,u=this;++u.r;--u.e
u.ax=!1
u.NF()
w=u.e
if(w<=0){u.w=!0
return B.b_7}v=w===1?"life":"lives"
return new A.ey(!1,"ZAP! You touched a live wire and got a shock. The breaker is now off. "+w+" "+v+" left. Always turn the breaker OFF and test the wires first.",!0,"shock")},
bf2(d,e,f){var w,v,u,t,s=this,r=s.at.h(0,d)
if(r==null)return B.ac5
s.NF()
w=A.t6(r.a)
v=D.d.fY(w.f,new A.csU(f))
u=A.hzM(w,r.b,e,v,!0)
t=u==null
if(t&&s.dx)return B.aZZ
if(t){if(!s.b&&!v.c.t(0,e)){++s.f
return new A.ey(!0,v.b+": fastened. Careful: "+C.w(w.r.$2(e,v))+" It will burn or trip the breaker when the power comes on.",!0,"")}return new A.ey(!0,v.b+": wire fastened.",!1,"")}if(D.a.a0(u,"SHOCK"))return s.a2s()
if(D.a.a0(u,"STOP"))return s.a2H();++s.f
return new A.ey(!1,u,!1,"")},
bkh(d,e){var w,v=this,u=v.at.h(0,d)
if(u==null)return B.Wx
v.NF()
w=u.b
if(w.a&&w.c===0){if(v.b)return v.a2s()
return v.a2H()}w=w.b
w.bs(w,new A.ct3(e))
return B.b_v},
aIQ(d){var w,v,u=this,t=u.at.h(0,d)
if(t==null)return B.ac5
w=A.t6(t.a)
v=t.b
if(!A.aif(w,v))return u.fV("Every wire must be fastened first.")
if(u.ax&&!u.ay){if(u.b)return u.a2s()
return u.a2H()}v.c=1
return B.b_g},
aoo(d){var w,v=this,u=v.at.h(0,d)
if(u==null)return B.Wx
if(v.ax&&!v.ay){if(v.b)return v.a2s()
return v.a2H()}w=u.b
w.c=0
w.d=!1
return B.b_m},
aF8(d){var w=this.at.h(0,d)
if(w==null||w.b.c!==1)return this.fV("Push the device into the box first.")
w.b.c=2
return B.b_p},
cYZ(){var w,v,u,t,s,r,q,p,o,n=C.a([],x.fJ),m=this.d
m===$&&C.c()
w=m.length
v=this.at
u=0
for(;u<m.length;m.length===w||(0,C.L)(m),++u){t=m[u]
s=t.a
r=v.h(0,s)
q=t.b
p=A.t6(q)
o=A.j5(s).b+": "+p.b
if(r==null||r.a!==q){n.push(new A.aba(o,A.fRQ(p),B.dhv,!0))
continue}s=A.fRQ(p)
q=r.b
n.push(new A.aba(o,s,A.h9l(p,q),q.y))}return n},
cZ_(){var w,v,u,t,s,r=C.aX(x.N),q=this.d
q===$&&C.c()
w=q.length
v=0
for(;v<q.length;q.length===w||(0,C.L)(q),++v)r.M(0,q[v].b)
q=C.a([],x.J)
for(r=C.en(r,r.r,r.$ti.c),w=r.$ti.c;r.C();){u=r.d
u=B.aH5.h(0,u==null?w.a(u):u)
if(u==null)u=B.aAi
t=C.T(u)
s=new C.je(u,0,2,t.k("je<1>"))
s.od(u,0,2,t.c)
D.d.v(q,s)}return q},
apu(d){var w=this.at
return A.La(A.t6(w.h(0,d).a),w.h(0,d).b)},
aJx(){var w=this
if(w.ay){w.ax=w.ay=!1
w.NF()
return B.b_e}w.ax=!w.ax
w.NF()
if(!w.ax)return B.b_6
return w.c8D()},
c8D(){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=C.a([],x.s),i=k.db
i.aa(0)
for(w=k.at,v=new C.cI(w,C.a7(w).k("cI<1,2>")).gag(0),u=k.cx,t=!1,s=!1,r=!1;v.C();){q=v.d
p=q.b.b
if(p.c===0)continue
o=q.a
n=A.La(A.t6(w.h(0,o).a),w.h(0,o).b)
p.d=p.c>=2
m=n.r
if(m!=="none"){i.n(0,o,m)
p.Q=m
r=!0}if(n.d)t=!0
if(n.e){p.x=!0
u.M(0,o)
s=!0}if(n.a!=="ok"&&!k.dx)j.push(A.j5(o).b+": "+n.b)}if(t){k.ay=!0
k.NF()
l=s?"BANG! Sparks, smoke and flames. ":"Snap! "
i=k.dx?"The breaker tripped.":l+" The breaker tripped. "+D.d.aG(j," ")+" Fix it, then flip the breaker OFF and ON again."
return new A.ey(!1,i,!0,s?"burn":"trip")}if(r)return new A.ey(!1,k.dx?"Power is on.":"Power is on, and something is wrong. "+D.d.aG(j," "),!0,"arc")
if(j.length!==0)return new A.ey(!0,"Power is on. "+D.d.aG(j," "),!0,"")
return B.b_j},
aG9(d){var w,v,u,t,s,r,q=this,p=q.at,o=p.h(0,d)
if(o==null||!D.d.t(B.jE,o.a)||o.b.c<2)return B.b_u
w=q.ch
if(w.t(0,d))w.W(0,d)
else w.M(0,d)
v=q.d
v===$&&C.c()
u=C.T(v).k("Z<1>")
t=C.C(new C.Z(v,new A.csV(d),u),u.k("M.E"))
if(t.length===0)return B.b_f
s=D.d.gI(t)
v=s.a
r=q.ano(v)
if(w.t(0,d)&&r){p=p.h(0,v)
if(p!=null)p.c=!0
return new A.ey(!0,(s.b==="fan"?"The fan spins":"The light turns on")+". The switch works.",!1,"")}if(w.t(0,d)){p=s.b
return new A.ey(!1,(p==="fan"?"The fan":"The light")+" did not come on. Check the breaker and the wires on the switch and on the "+p+".",!1,"")}return B.b_t},
a4K(d){var w,v=this.at.h(0,d)
if(v!=null){w=v.b
w=w.c<2||w.x}else w=!0
if(w)return!1
return this.apu(d).c},
ano(d){var w=this,v=w.cVV(d),u=v==null,t=u?null:v.c,s=!0
if(!u)if(t!=null)u=!(w.ax&&!w.ay)||!w.a4K(d)||!w.a4K(t)
else u=s
else u=s
if(u)return!1
return w.ch.t(0,t)},
biL(d,e){var w,v,u,t=this,s="Nothing happens.",r=t.at.h(0,d)
if(r==null||!D.d.t(B.lh,r.a)||r.b.c<2)return t.fV("There is no finished outlet there to plug into.")
w=t.CW
if(w.aj(0,d))return t.fV("Something is already plugged in.")
w.n(0,d,e)
w=r.b
if(w.x)return B.b_9
v=t.apu(d)
if(t.ax&&!t.ay&&t.a4K(d)){r.c=!0
if(v.a!=="ok"){w=t.dx
u=w?A.csN(e)+" runs.":A.csN(e)+" runs, but this outlet is NOT safe. "+v.b
return new A.ey(!0,u,!w,"")}return new A.ey(!0,A.csN(e)+" runs. The outlet works.",!1,"")}if(!(t.ax&&!t.ay))return B.b_d
u=v.r
if(u!=="none"){t.db.n(0,d,u)
w.Q=u
w=t.dx?s:A.csN(e)+" does not run. "+v.b
return new A.ey(!1,w,!0,u==="fire"?"burn":"arc")}return new A.ey(!1,t.dx?s:"Nothing happens. "+v.b,!0,"")},
bkk(d){if(this.CW.W(0,d)==null)return B.Wx
return B.b_5},
biv(d){var w,v=this
if(d>=0){w=v.d
w===$&&C.c()
w=d>=w.length}else w=!0
if(w)return 2
if(v.r1(d))return 2
w=v.d
w===$&&C.c()
return v.at.h(0,w[d].a)==null?0:1},
r1(d){var w,v,u,t=this
if(d>=0){w=t.d
w===$&&C.c()
w=d>=w.length}else w=!0
if(w)return!0
w=t.d
w===$&&C.c()
v=w[d]
w=v.a
u=t.at.h(0,w)
if(u==null||!A.h59(v.b,u.a)||u.b.c<2)return!1
return t.apu(w).a==="ok"},
gbkK(){var w,v,u,t,s,r,q,p,o,n=this.d
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
if(q!==p)if(!(D.d.t(B.lh,q)&&D.d.t(B.lh,p)))if(!(D.d.t(B.jE,q)&&D.d.t(B.jE,p)))if(q==="light"||q==="fan")q=p==="light"||p==="fan"
else q=!1
else q=o
else q=o
else q=o
q=!q||r.b.c<2}else q=!0
if(q)return!1
if(A.La(A.t6(v.h(0,s).a),v.h(0,s).b).a!=="ok")return!1}return!0},
gaFq(){var w,v,u,t,s,r,q,p,o,n=this.d
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
if(q!==p)if(!(D.d.t(B.lh,q)&&D.d.t(B.lh,p)))if(!(D.d.t(B.jE,q)&&D.d.t(B.jE,p)))if(q==="light"||q==="fan")q=p==="light"||p==="fan"
else q=!1
else q=o
else q=o
else q=o
q=!q||r.b.c<2}else q=!0
if(q)return!1
if(A.La(A.t6(v.h(0,s).a),v.h(0,s).b).a!=="ok")return!1
s=t.b
if(D.d.t(B.lh,s)){if(!r.c)return!1}else if(!D.d.t(B.jE,s)&&!r.c)return!1}return!0}}
A.i8.prototype={}
A.Ok.prototype={
R(){var w,v=new A.xi(-0.12,0.14,130,B.aaW,$.ax())
v.f=300
v.at=0.7
v.z=0.05
w=new C.ye()
$.yY()
w.h7(0)
return new A.aFl(v,w,C.U(x.S,x.i))}}
A.aFl.prototype={
gCY(d){var w=this.e
if(w===$){this.a.toString
w=D.o.F(Date.now(),1e5)
this.e=w}return w},
Z(){var w,v,u=this
u.a2()
w=u.a.f
if(w==null)w=A.csM(null,null,!0,u.gCY(0),!0)
u.d=w
v=u.a
if(v.d)w.dx=!0
if(v.f!=null&&w.gt5())u.y=2
if(u.a.r){u.d.amh()
u.y=2}u.r=A.wV(u.d,new A.rO(u.z,u.as,!1))
w=u.f
w.as=0
w.at=1.1},
q(){var w=this.db
if(w!=null)w.a4(0)
this.a1()},
om(d,e){var w,v,u,t=this,s=t.db
if(s!=null)s.a4(0)
t.m(new A.evD(t,d,e))
s=t.c
if(s!=null){w=x.w
s=C.aG(s,null,w).w
v=t.c
v.toString
u=s.a.a>C.aG(v,null,w).w.a.b}else u=!1
t.db=C.cG(C.dx(0,0,0,0,0,u?6:10),new A.evE(t))},
aew(d){return this.om(d,!1)},
ia(d){var w,v,u,t,s,r,q,p,o=this,n=d.a
if(n)A.wW()
else A.fR(180,220,0.25,"square")
w=d.d
if(w==="shock"){C.fM()
o.m(new A.euJ(o))
C.bP(D.mF,new A.euK(o),x.P)}v=w==="burn"
if(v||w==="trip"||w==="arc"){u=o.d
u===$&&C.c()
u=u.db
u=new C.hF(u,u.r,u.e)
t=o.x
s=o.w
while(u.C()){r=u.d
q=s.gir()
p=o.d.db.h(0,r)==="fire"?7:4.5
t.n(0,r,q/1000+p)}C.fM()
w=w==="arc"
u=w?95:150
t=w?500:300
A.fR(u,t,0.5,w?"saw":"noise")
if(v){o.m(new A.euL(o))
C.bP(D.eR,new A.euM(o),x.P)}}w=o.d
w===$&&C.c()
o.r=A.wV(w,new A.rO(o.z,o.as,!1))
n=n&&!d.c
o.om(d.b,n)
if(o.d.w&&o.c!=null)$.aV.x1$.push(new A.euN(o))
if(o.d.gaFq()&&!o.cy){o.cy=!0
$.aV.x1$.push(new A.euO(o))}},
b4W(){var w=this.CW,v=w?B.h05:B.aaW,u=w?205:130,t=w?3.141592653589793:-0.12
w=w?0.4:0.14
this.f.hT(u,w,v,t)},
c8G(d,e){var w,v,u,t,s
if(this.as>=0)return
w=this.f
v=w.cZY(d,e)
if(v==null||Math.abs(v.a)>78||Math.abs(v.b)>52)v=w.bfp(d,e,-47)
if(v==null)return
u=D.k.E(v.a,-70,70)
t=D.k.E(v.b,-46,48)
s=D.k.E(v.c,-6,100)
w.xl(Math.max(34,w.c*0.45),new A.q(u,t,s))
A.fR(560,50,0.25,"tri")},
aUn(){var w,v,u=this
u.CW=!1
w=u.f
w.z=0.05
w.at=0.7
w.r9(!1)
w.as=0
u.m(new A.euY(u))
v=u.d
v===$&&C.c()
u.r=A.wV(v,new A.rO(u.z,u.as,!1))
w.hT(130,0.14,B.aaW,-0.12)},
c3e(){var w,v,u=this
u.CW=!1
w=u.f
w.r9(!1)
w.z=-0.95
w.as=0
w.at=1
u.m(new A.ev_(u))
v=u.d
v===$&&C.c()
u.r=A.wV(v,new A.rO(u.z,u.as,!1))
w.hT(82,-0.55,B.h_C,-0.12)},
bEk(){var w,v,u,t,s=this,r=s.d
r===$&&C.c()
r=r.CW
w=C.a7(r).k("cI<1,2>")
v=w.k("Z<M.E>")
u=C.C(new C.Z(new C.cI(r,w),new A.euP(),v),v.k("M.E"))
if(u.length===0){s.aew("Plug a TV into an outlet first. Then you can look behind it.")
return}t=A.j5(D.d.gI(u).a).d.a
s.CW=!1
r=s.f
r.r9(!1)
r.z=0.02
r.as=0
r.at=1.7
s.m(new A.euQ(s))
s.r=A.wV(s.d,new A.rO(s.z,s.as,!1))
w=t<0?-1.4:1.4
r.hT(60,0.12,new A.q(t,-30,14),w)
s.om("This is the back of the TV. Tap the TV or its plug to pull the plug.",!0)},
bEi(){var w,v,u=this
u.CW=!0
w=u.f
w.r9(!0)
u.m(new A.euR(u))
v=u.d
v===$&&C.c()
u.r=A.wV(v,new A.rO(u.z,u.as,!1))
w.hT(190,0.3,B.h06,3.141592653589793)},
a_5(d,e){var w,v,u,t,s=this,r=A.j5(e),q=s.f
q.r9(!1)
q.as=0
s.m(new A.evg(s,e))
w=s.d
w===$&&C.c()
s.r=A.wV(w,new A.rO(s.z,s.as,!1))
v=A.ai8(r,B.fZ3)
w=r.c
u=w?20:15
t=w?1.2:0.3
q.hT(u,w?-0.12:0.26,v,t)},
PV(){var w,v=this
v.m(new A.euZ(v))
w=v.d
w===$&&C.c()
v.r=A.wV(w,new A.rO(v.z,v.as,!1))
v.b4W()},
c8J(d){var w,v,u,t,s,r,q,p=this
if(d===0){if(p.as<0)p.m(new A.evz(p))
return}w=p.as
if(w>=0)v=!(d>=5000&&d<5700)
else v=!1
if(v)return
if(d>=5000&&d<5700){v=d-5000
u=D.o.ao(v,100)
if(w!==u){if(p.z==="tester")p.aCl(u)
else{p.m(new A.evA(p))
p.a_5(0,u)}return}p.azj(u,D.o.F(v,100))
return}if(d>=1000&&d<1010)if(p.z==="drill"){w=p.d
w===$&&C.c()
p.ia(w.cOf(d-1000))
return}if(d>=2000&&d<2007){p.azm(d-2000)
return}if(d>=3000&&d<3007){p.b2G(d-3000)
return}if(d>=6000&&d<6005){if(p.z==="sheet"){w=p.d
w===$&&C.c()
p.ia(w.cR3(B.a5i[d-6000]))}return}if(d>=6100&&d<6103){t=B.oy[d-6100]
if(p.z==="paint"){w=p.d
w===$&&C.c()
p.ia(w.cW9(t))
return}}if(d>=6200&&d<6202){s=d-6200
switch(p.z){case"tape":w=p.d
w===$&&C.c()
p.ia(w.cYY(s))
return
case"mud":w=p.d
w===$&&C.c()
p.ia(w.cTQ(s))
return
case"sand":w=p.d
w===$&&C.c()
p.ia(w.bog(s))
return}}if(d>=7000&&d<7100){if(p.z==="screw"){w=p.d
w===$&&C.c()
v=d-7000
p.ia(w.bou(D.o.ao(v,10),D.o.F(v,10)))}return}if(d>=7500&&d<7600){if(p.z==="screw"){w=p.d
w===$&&C.c()
v=d-7500
p.ia(w.aLf(D.o.ao(v,10),D.o.F(v,10),!0))}return}if(d===8000){w=p.d
w===$&&C.c()
p.ia(w.aJx())
return}if(d>=8200&&d<8207){w=p.d
w===$&&C.c()
p.ia(w.bkk(d-8200))
return}if(d>=8100&&d<8107){w=p.d
w===$&&C.c()
r=w.CW.h(0,d-8100)
A:{if("tv"===r){w="The TV"
break A}if("lamp"===r){w="The lamp"
break A}if("toaster"===r){w="The toaster"
break A}w="The hair dryer"
break A}p.om(w+" is plugged in. To pull the plug, go behind it (the Behind the TV button) and tap the plug on the wall.",!0)
return}if(p.z==="look"){w=p.r
w===$&&C.c()
q=w.b.h(0,d)
if(q!=null){p.m(new A.evB(p,d))
p.om(q.a+": "+q.b,!0)}}},
azm(d){var w,v,u,t,s=this,r=s.d
r===$&&C.c()
if(r.at.aj(0,d)){r=s.z
r=r!=="tester"&&r!=="look"&&!D.d.t(B.Ih,r)}else r=!1
if(r){s.m(new A.evw(s))
s.a_5(0,d)
return}r=s.z
switch(r){case"wall":case"ceiling":case"fanbox":w=s.d
s.ia(w.cTN(d,r==="fanbox"?"fan":r))
return
case"cable":s.ia(s.d.cX_(d))
return
case"knife":s.ia(s.d.cN9(d))
return
case"outlet":case"gfci":case"switch":case"split":case"v240four":case"v240three":case"v240only":case"isolated":case"dryer4":case"dryer3":case"range4":case"range3":case"washer":case"switch2p":case"switch3":case"switch4":case"switchsmart":case"switchcombo":case"light":case"fan":v=s.d.bgH(d,r)
s.ia(v)
if(v.a){r=s.d.at.h(0,d).b
w=s.d
r.f=!w.b&&!w.dx
s.z=""
s.a_5(0,d)}return
case"tester":s.aCl(d)
return}if(s.d.at.aj(0,d)){s.a_5(0,d)
return}if(s.d.gt5()&&s.d.x.aj(0,d)&&!s.d.at.aj(0,d)){u=A.j5(d)
s.m(new A.evx(s,d))
if(s.Q===d){if(u.c)r="a light or a fan"
else r=u.e==="switch"?"a switch":"an outlet"
r=u.b+": only what fits this box is in the tray now ("+r+"). Pick one."}else r="Box let go: the tray shows everything again."
s.om(r,!0)
return}r=s.r
r===$&&C.c()
t=r.b.h(0,2000+d)
if(t!=null){s.m(new A.evy(s,d))
s.om(t.a+": "+t.b,!0)}},
aCl(d){var w,v=this.d
v===$&&C.c()
w=v.ax&&!v.ay&&v.x.aj(0,d)&&this.d.z.t(0,d)
v=w?"The tester glows: this box is LIVE (120 volts). Turn the breaker OFF before you touch any wire.":"The tester stays dark: no power here. It is safe to work. (Test again after you turn the breaker off, every time.)"
this.om(v,!w)
A.fR(w?1400:500,120,0.25,"tri")},
b2G(d){var w,v=this,u=v.d
u===$&&C.c()
w=u.at.h(0,d)
if(w==null)return
if(D.d.t(B.Ih,v.z)){v.ia(v.d.biL(d,v.z))
return}u=v.z
if(u==="tester"){v.aCl(d)
return}if(u==="flip"){if(D.d.t(B.jE,w.a)&&w.b.c>=2)v.ia(v.d.aG9(d))
else v.aew("Only a finished switch can be flipped.")
return}v.m(new A.evv(v))
v.a_5(0,d)},
azj(d,e){var w,v,u,t,s,r,q,p,o=this,n=o.d
n===$&&C.c()
w=n.at.h(0,d)
if(w==null)return
if(B.aQW.t(0,e))return
n=w.a
v=A.t6(n)
u=v.f
t=C.T(u).k("Z<1>")
s=C.C(new C.Z(u,new A.evn(e),t),t.k("M.E"))
r=A.hzR(n,e)
n=r!=null
if(n){u=w.b
u=u.b.iq(0,r)&&u.c===0}else u=!1
if(u){o.ia(o.d.bkh(d,r))
return}u=!1
if(s.length!==0){t=w.b
if(t.c===0){t=t.b
if(t.h(0,e)!=null)u=o.ax.length===0||t.h(0,e)===o.ax}}if(u){n=o.d
u=w.b.b.h(0,e)
u.toString
o.ia(n.bkh(d,u))
o.m(new A.evo(o))
return}if(n){n=w.b
n=n.c===0&&!n.b.iq(0,r)&&D.d.b3(v.e,new A.evp(r))}else n=!1
if(n){o.m(new A.evq(o,r,d,e))
if(o.ax.length!==0)o.om(D.d.fY(v.e,new A.evr(r)).b+": picked up. Now tap where it joins.",!0)
return}if(s.length!==0&&w.b.c===0){n=o.ax
if(n.length===0){o.aew("Pick a wire below first, then tap "+D.d.gI(s).b+".")
o.m(new A.evs(o,d,e))
return}q=o.d.bf2(d,n,e)
o.ia(q)
if(q.a)o.m(new A.evt(o))
return}n=o.r
n===$&&C.c()
p=n.b.h(0,5000+d*100+e)
if(p!=null){o.m(new A.evu(o,d,e))
o.om(p.a+": "+p.b,!0)}},
c8K(){var w,v,u,t,s,r,q=this,p=C.a([],x.ek)
for(w=0;w<7;++w){v=B.uJ[w]
u=q.d
u===$&&C.c()
t=v.a
s=u.at.aj(0,t)
r=q.z
A:{if("wall"===r){u=!v.c&&!q.d.x.aj(0,t)
break A}if("ceiling"===r||"fanbox"===r){u=v.c&&!q.d.x.aj(0,t)
break A}if("cable"===r){u=q.d.x.aj(0,t)&&!q.d.z.t(0,t)
break A}if("knife"===r){u=!v.c&&q.d.x.aj(0,t)
break A}u=D.d.t(B.lh,r)||D.d.t(B.jE,q.z)
if(u){u=!v.c&&q.d.x.aj(0,t)&&!s
break A}if("light"===r||"fan"===r){u=v.c&&q.d.x.aj(0,t)&&!s
break A}if("tv"===r||"lamp"===r||"toaster"===r||"hairdryer"===r){u=s&&D.d.t(B.lh,q.d.at.h(0,t).a)
break A}if("tester"===r){u=q.d.x.aj(0,t)
break A}u=!1
break A}if(u)p.push(new C.z(t,v.b))}return p},
cyL(){var w,v,u,t,s,r,q,p=null,o=this.c8K()
if(o.length===0)return D.bJ
w=C.a([],x.p)
for(v=o.length,u=0;u<o.length;o.length===v||(0,C.L)(o),++u){t={}
s=o[u]
t.a=null
t.a=s.a
r=new C.aP(12,12)
q=new C.ay(D.b_,1,D.r,-1)
w.push(C.aA(p,C.p(p,new C.y("\ud83d\udccd "+s.b,p,D.oJ,p,p,p,p,p,p,p,p,p),D.f,p,p,new C.o(D.eN.j(0.35),p,new C.bH(q,q,q,q),new C.bh(r,r,r,r),p,p,D.n),p,p,p,p,B.a_9,p,p,p),D.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new A.evH(t,this),p,p,p,p,p,p,!1,D.a3))}return new C.D(D.i4,C.bX(D.bG,w,D.bq,p,6,6),p)},
bQO(){var w=null,v=this.c
v.toString
C.ck(w,w,!1,w,new A.euX(this),v,w,!0,!0,x.H)},
c8E(){var w,v,u,t=this,s=null
if(t.a.c){w=t.d
w===$&&C.c()
v=w.d
v===$&&C.c()
v=v.length
u=A.heV(w.f,w.r,v)}else u=0
if(u>0)A.ajZ(u)
w=t.c
w.toString
C.ck(s,s,!0,s,new A.euU(t,u),w,s,!0,!0,x.H)},
axQ(d){this.m(new A.ev0(this,d))
this.aUn()},
b_j(){return this.axQ(!1)},
cDT(d){var w,v,u=new A.evI(A.j5(d)),t=C.a([],x.b)
for(w=0;w<27;++w){v=B.azA[w]
if(u.$1(v.a))t.push(v)}return t},
SI(d,e,f,g){var w=null,v=f==null,u=v?D.dq:g.j(0.9),t=C.n(14),s=C.X(d,v?D.bU:D.w,w,w,w,17)
return new C.D(G.od,C.aA(w,C.p(w,C.B(C.a([s,D.eg,C.d(e,w,1,w,w,w,w,C.l(w,w,v?D.bU:D.w,w,w,w,w,w,w,w,w,10.5,w,w,D.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),D.m,w,D.e,D.O,0,w,w),D.f,w,w,new C.o(u,w,w,t,w,w,D.n),w,44,w,w,D.kj,w,w,w),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,!1,D.a3),w)},
bb7(d,e,f){return this.SI(d,e,f,D.aB)},
cGO(d,e){var w,v,u,t,s,r,q,p=this,o=null,n=x.p,m=C.a([p.SI(D.kl,"Back to the room",p.gb_i(),D.ac)],n),l=d.b
if(l.c===0){w=A.aif(e,l)?"Push into the box":"Fasten every wire"
m.push(p.bb7(B.a2n,w,A.aif(e,l)?new A.evK(p):o))}if(l.c===1)D.d.v(m,C.a([p.SI(D.pi,"Pull it out",new A.evL(p),D.ac),p.bb7(W.uo,"Cover on",new A.evM(p))],n))
n=l.c>=2
if(n&&l.x)m.push(p.SI(B.OA,"Take out the burnt one",new A.evN(p),D.c6))
else if(n)m.push(p.SI(B.OA,"Pull it out of the wall",new A.evO(p),D.ac))
if(!l.x)m.push(p.SI(D.jW,"Take it out, put in another",new A.evP(p,d),D.aJ))
if(l.c===0)for(n=D.d.gag(e.e),l=new C.f2(n,new A.evQ(d));l.C();){w=n.gS(0)
v=w.c
u=new C.aP(14,14)
t=p.ax===w.a
s=t?D.b_:D.aX
r=new C.ay(s,t?3:1,D.r,-1)
s=w.b
q=w.d
m.push(new C.D(G.od,C.aA(o,C.p(o,new C.ce(D.A,o,o,new C.y(s,o,new C.F(!0,q,o,o,o,o,12,D.u,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),o,o,o,o,o,o,o,o,o),o),D.f,o,o,new C.o(v,o,new C.bH(r,r,r,r),new C.bh(u,u,u,u),o,o,D.n),o,44,o,o,D.eZ,o,o,o),D.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new A.evR(p,w),o,o,o,o,o,o,!1,D.a3),o))}return m},
cu0(d,e){var w,v,u,t,s,r,q=null,p=C.a([],x.p)
for(w=D.d.gag(e.f),v=new C.f2(w,new A.evF(d));v.C();){u=w.gS(0)
t=D.eN.j(0.35)
s=new C.aP(10,10)
r=new C.ay(D.b_,1,D.r,-1)
p.push(new C.D(D.fu,C.aA(q,C.p(q,new C.ce(D.A,q,q,new C.y("\u279c "+u.b,q,B.fr5,q,q,q,q,q,q,q,q,q),q),D.f,q,q,new C.o(t,q,new C.bH(r,r,r,r),new C.bh(s,s,s,s),q,q,D.n),q,32,q,q,B.alI,q,q,q),D.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new A.evG(this,u),q,q,q,q,q,q,!1,D.a3),q))}return p},
c8H(){var w,v,u,t,s,r,q,p,o,n=this,m=n.d
m===$&&C.c()
if(m.w)return"The job is over."
switch(n.y){case 0:m=m.d
m===$&&C.c()
w=C.T(m).k("Z<1>")
v=C.C(new C.Z(m,new A.ev1(n),w),w.k("M.E"))
if(v.length!==0){u=D.d.gI(v)
t=A.j5(u.a)
m=A.a2k(u.b)
if(t.c)w=t.e==="fan"?"fan box":"ceiling box"
else w="wall box"
return"Mount a box at "+t.b+" ("+m.toLowerCase()+" goes here): pick a "+w+", then tap the glowing spot."}m=n.d.d
m===$&&C.c()
w=C.T(m).k("Z<1>")
s=C.C(new C.Z(m,new A.ev2(n),w),w.k("M.E"))
if(s.length!==0){t=D.d.gI(s).a
m=n.d.aM0(t)
r=new C.Z(m,new A.ev3(n),C.T(m).k("Z<1>")).gL(0)
return r>0?"The cable comes from the panel on the right. Pick the drill and tap each stud on the way to "+A.j5(t).b+" ("+r+" left).":"Pick the cable roll and tap "+A.j5(t).b+"."}return"Rough-in done! Open 2 Drywall."
case 1:if(!m.gaoV())return"Finish the rough-in first (tab 1). Drywall hides the wires."
if(!n.d.gaDF())return"Pick a drywall sheet and tap a stud edge to hang it. Three sheets cover the wall."
if(!n.d.gaDE())return"Pick the drywall saw and tap each box to cut its opening."
if(!D.d.d0(B.oy,n.d.gaql()))return"Pick the screw gun and put a screw in every glowing spot on the studs."
if(D.d.b3(n.d.as,new A.ev6()))return"Pick the tape and tap each seam between two sheets."
if(D.d.b3(n.d.as,new A.ev7()))return D.d.b3(n.d.as,new A.ev8())?'The mud is wet. Press "Let it dry", then the next coat.':"Pick the mud and tap each seam. It needs three coats, with drying in between."
if(D.d.b3(n.d.as,new A.ev9()))return D.d.b3(n.d.as,new A.eva())?'Press "Let it dry", then sand.':"Pick the sander and tap each seam."
if(!n.d.gt5())return"Pick the roller and paint each sheet."
return"Drywall done! Open 3 Devices."
default:if(!m.gt5())return"Finish the drywall first (tab 2)."
m=n.d.d
m===$&&C.c()
w=C.T(m).k("Z<1>")
q=C.C(new C.Z(m,new A.evb(n),w),w.k("M.E"))
if(q.length!==0){u=D.d.gI(q)
return"The breaker being on is not the end: the job is done only when every device is in and wired. Tap the box at "+A.j5(u.a).b+" (small red frame, blinking red dot): the tray then shows only what fits it. Put in the "+A.a2k(u.b).toLowerCase()+". ("+C.w(new A.eve().$1(new C.N(q,new A.evc(),C.T(q).k("N<1,G>"))))+" still need a device.)"}m=n.d.d
m===$&&C.c()
w=C.T(m).k("Z<1>")
p=C.C(new C.Z(m,new A.evd(n),w),w.k("M.E"))
if(p.length!==0)return"Tap "+A.j5(D.d.gI(p).a).b+" to work on it: breaker OFF, wires, push in, cover on."
m=n.d
if(!m.ax)return"Turn the breaker ON (tap the panel or the breaker button) and test."
m=m.d
m===$&&C.c()
w=C.T(m).k("Z<1>")
o=C.C(new C.Z(m,new A.ev4(n),w),w.k("M.E"))
if(o.length!==0)return"Pick the TV or the lamp and plug it into "+A.j5(D.d.gI(o).a).b+" to test it."
m=n.d.d
m===$&&C.c()
return"Flip the wall switch to test the "+(D.d.b3(m,new A.ev5())?"fan":"light")+"."}},
B(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this,a3=null,a4=a2.Q,a5=a4>=0&&a2.y===2?a2.cDT(a4):B.d2H[a2.y]
a4=x.w
w=C.aG(a6,a3,a4).w.a.a>C.aG(a6,a3,a4).w.a.b
a4=a2.as
if(a4>=0){v=a2.d
v===$&&C.c()
u=v.at.h(0,a4)}else u=a3
a4=u==null
t=a4?a3:A.t6(u.a)
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
for(k=0;k<3;++k)l.push(new C.D(D.Ni,new C.y(k<a2.d.e?"\u2764\ufe0f":"\ud83d\udda4",a3,D.Ap,a3,a3,a3,a3,a3,a3,a3,a3,a3),a3))
l.push(D.bn)
j=a2.d
if(j.ay)j=D.kf
else{j=j.ax
j=j?D.ek:D.dY}j=j.j(0.95)
i=C.n(16)
h=a2.d
g=h.ay
if(g)f=D.cL
else{f=h.ax
f=f?D.c6:D.bf}f=C.K(f,D.r,1.4)
if(g)h="TRIPPED: tap to reset"
else{h=h.ax
h=h?"Breaker ON":"Breaker OFF"}l.push(C.aA(a3,C.p(a3,C.d(h,a3,a3,a3,a3,a3,a3,B.fnL,a3,a3,a3),D.f,a3,a3,new C.o(j,a3,f,i,a3,a3,D.n),a3,a3,a3,a3,D.rw,a3,a3,a3),D.y,!1,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,new A.ew2(a2),a3,a3,a3,a3,a3,a3,!1,D.a3))
l=C.a([C.B(l,D.m,a3,D.e,D.O,0,a3,a3)],m)
j=a2.CW
i=j?"In front":"Behind the wall"
h=j?H.aoe:H.aod
j=C.a([A.wX(i,D.br,h,j,j?a2.gbSl():a2.gbEh()),D.am,A.wX("Look up",D.b_,B.bOp,!1,a2.gc3d()),D.am,A.wX("Behind the TV",D.cL,A_.a2f,!1,a2.gbEj()),D.am],m)
if(!a4){i=u.b
D.d.v(j,C.a([A.wX("Labels",D.aJ,P.Cm,i.f,new A.ew3(a2,u)),D.am,A.wX("Hints",D.aB,D.rD,i.e,new A.ew4(a2,u)),D.P],m))}r=A.Y9(!1,a3,a2.f,new A.ewf(a2),a3,o,q,n,a3,a3,p,a3,a2.gc8F(),new A.ewh(a2),a2.gc8I(),r,!1,a3,l,j)
q=C.a([],m)
if(a4){a4=C.a([],m)
if(!w){p=C.a([],m)
for(k=0;k<3;++k){o=k<2?6:0
n=a2.y===k?D.aB.j(0.2):D.dq
l=new C.aP(12,12)
e=new C.ay(a2.y===k?D.aB:D.bC,1,D.r,-1)
if(k===0)j=a2.d.gaoV()
else{j=a2.d
j=k===1?j.gt5():j.gaFq()}j=j?"\u2705 ":""
i=B.aBg[k]
h=a2.y===k?D.aB:D.ac
p.push(new C.bA(1,D.bd,C.aA(a3,C.p(a3,new C.ce(D.A,a3,a3,new C.y(j+i,a3,new C.F(!0,h,a3,a3,a3,a3,12,D.u,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3),a3,a3,a3,a3,a3,a3,a3,a3,a3),a3),D.f,a3,a3,new C.o(n,a3,new C.bH(e,e,e,e),new C.bh(l,l,l,l),a3,a3,D.n),a3,a3,a3,new C.Q(0,0,o,0),A6.Nl,a3,a3,a3),D.y,!1,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,new A.ewi(a2,k),a3,a3,a3,a3,a3,a3,!1,D.a3),a3))}p=C.a([C.B(p,D.m,a3,D.e,D.i,0,a3,a3),D.am],m)
if(!a2.d.b){o=D.aJ.j(0.1)
n=C.n(10)
l=C.K(D.aJ.j(0.4),D.r,1)
p.push(C.p(a3,C.d("\ud83d\udc49 "+a2.c8H(),a3,2,D.a1,a3,a3,a3,B.fpl,a3,a3,a3),D.f,a3,a3,new C.o(o,a3,l,n,a3,a3,D.n),a3,a3,a3,a3,D.ck,a3,a3,1/0))}else p.push(B.fQ7)
p.push(D.am)
D.d.v(a4,p)
w=!1}p=C.a([],m)
if(w){o=D.aB.j(0.2)
n=C.n(14)
l=C.K(D.aB,D.r,1)
j=a2.y
if(j===0)j=a2.d.gaoV()
else{i=a2.d
j=j===1?i.gt5():i.gaFq()}j=j?"\u2705 ":""
p.push(new C.D(G.od,C.aA(a3,C.p(a3,C.as(C.d(j+B.aBg[a2.y],a3,a3,a3,a3,a3,a3,B.fu5,a3,a3,a3),a3,a3,a3),D.f,a3,a3,new C.o(o,a3,l,n,a3,a3,D.n),a3,a3,a3,a3,D.eZ,a3,a3,a3),D.y,!1,B.hgG,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,new A.ewj(a2),a3,a3,a3,a3,a3,a3,!1,D.a3),a3))}if(a2.y<2&&!a2.d.gt5())p.push(new C.D(G.od,C.aA(a3,C.p(a3,B.b9Z,D.f,a3,a3,new C.o(D.dF,a3,a3,C.n(14),a3,a3,D.n),a3,a3,a3,a3,D.eZ,a3,a3,a3),D.y,!1,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,new A.ewk(a2),a3,a3,a3,a3,a3,a3,!1,D.a3),a3))
if(a2.Q>=0&&a2.y===2){o=D.b_.j(0.18)
n=C.n(14)
l=C.K(D.b_,D.r,1)
p.push(new C.D(G.od,C.aA(a3,C.p(a3,C.as(C.d("\u2715 "+A.j5(a2.Q).b,a3,a3,a3,a3,a3,a3,B.fhq,a3,a3,a3),a3,a3,a3),D.f,a3,a3,new C.o(o,a3,l,n,a3,a3,D.n),a3,a3,a3,a3,D.eZ,a3,a3,a3),D.y,!1,B.hgW,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,new A.ewl(a2),a3,a3,a3,a3,a3,a3,!1,D.a3),a3))}for(o=a5.length,d=0;d<a5.length;a5.length===o||(0,C.L)(a5),++d){a0=a5[d]
n=a0.a
l=a2.z===n?D.aB.j(0.25):D.c.j(0.07)
j=new C.aP(14,14)
n=a2.z===n
i=n?D.aB:D.aX
e=new C.ay(i,n?2:1,D.r,-1)
i=n?D.aB:D.ac
i=C.X(a0.c,i,a3,a3,a3,19)
n=n?D.aB:D.c
p.push(new C.D(G.od,C.aA(a3,C.p(a3,new C.cd(D.aM,D.e,D.i,D.m,a3,D.p,a3,0,C.a([i,D.bn,new C.y(a0.b,a3,new C.F(!0,n,a3,a3,a3,a3,12.5,D.H,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3),a3,a3,a3,a3,a3,a3,a3,a3,a3)],m),a3),D.f,a3,a3,new C.o(l,a3,new C.bH(e,e,e,e),new C.bh(j,j,j,j),a3,a3,D.n),a3,a3,a3,a3,D.eZ,a3,a3,a3),D.y,!1,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,new A.ewm(a2,a0),a3,a3,a3,a3,a3,a3,!1,D.a3),a3))}if(a2.y===1)p.push(new C.D(G.od,C.aA(a3,C.p(a3,B.b9R,D.f,a3,a3,new C.o(D.dY,a3,a3,C.n(14),a3,a3,D.n),a3,a3,a3,a3,D.eZ,a3,a3,a3),D.y,!1,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,new A.ewn(a2),a3,a3,a3,a3,a3,a3,!1,D.a3),a3))
a4.push(new C.a5(a3,52,C.cl(p,a3,B.hgH,a3,a3,a3,D.aM,!1),a3))
if(a2.z.length!==0)a4.push(a2.cyL())
D.d.v(q,a4)}else if(w){t.toString
a4=C.a([new C.a5(a3,44,C.cl(a2.cGO(u,t),a3,a3,a3,a3,a3,D.aM,!1),B.hhg)],m)
if(u.b.c===0&&a2.ax.length!==0)D.d.v(a4,C.a([D.am,new C.a5(a3,32,C.cl(a2.cu0(u,t),a3,a3,a3,a3,a3,D.aM,!1),B.hgJ)],m))
D.d.v(q,a4)}else{a4=C.a([],m)
p=u.b
if(p.c===0)for(o=D.d.gag(t.e),n=new C.f2(o,new A.ew5(u)),l=p.b;n.C();){j=o.gS(0)
i=j.c
h=new C.aP(14,14)
g=a2.ax
f=j.a
g=g===f
a1=g?D.b_:D.aX
e=new C.ay(a1,g?3:1,D.r,-1)
a1=C.a([],m)
if(l.iq(0,f))a1.push(new C.D(D.Nj,C.X(D.ed,j.d,a3,a3,a3,17),a3))
g=j.b
f=j.d
a1.push(new C.y(g,a3,new C.F(!0,f,a3,a3,a3,a3,12.5,D.u,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3),a3,a3,a3,a3,a3,a3,a3,a3,a3))
a4.push(C.aA(a3,C.p(a3,new C.cd(D.aM,D.e,D.O,D.m,a3,D.p,a3,0,a1,a3),D.f,a3,a3,new C.o(i,a3,new C.bH(e,e,e,e),new C.bh(h,h,h,h),a3,a3,D.n),a3,a3,a3,a3,D.yk,a3,a3,a3),D.y,!1,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,new A.ew6(a2,u,j),a3,a3,a3,a3,a3,a3,!1,D.a3))}a4=C.a([C.bX(D.bG,a4,D.bq,a3,6,8)],m)
if(p.c===0&&a2.ax.length!==0){o=C.a([],m)
for(n=D.d.gag(t.f),l=new C.f2(n,new A.ew7(u));l.C();){j=n.gS(0)
i=D.eN.j(0.35)
h=new C.aP(12,12)
e=new C.ay(D.b_,1,D.r,-1)
o.push(C.aA(a3,C.p(a3,new C.y("\u279c "+j.b,a3,D.oJ,a3,a3,a3,a3,a3,a3,a3,a3,a3),D.f,a3,a3,new C.o(i,a3,new C.bH(e,e,e,e),new C.bh(h,h,h,h),a3,a3,D.n),a3,a3,a3,a3,B.a_9,a3,a3,a3),D.y,!1,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,new A.ew8(a2,j),a3,a3,a3,a3,a3,a3,!1,D.a3))}a4.push(new C.D(D.jy,C.bX(D.bG,o,D.bq,a3,6,6),a3))}a4.push(D.P)
o=C.a([A.uj("Back to the room",D.kl,a2.gb_i(),D.ac),D.ad],m)
if(p.c===0){t.toString
n=A.aif(t,p)?"Push it into the box":"Fasten every wire"
o.push(A.uj(n,B.a2n,A.aif(t,p)?new A.ew9(a2):a3,D.aB))}if(p.c===1)D.d.v(o,C.a([A.uj("Pull it out",D.pi,new A.ewa(a2),D.ac),D.ad,A.uj("Cover on",W.uo,new A.ewb(a2),D.aB)],m))
n=p.c>=2
if(n&&p.x)o.push(A.uj("Take out the burnt one",B.OA,new A.ewc(a2),D.c6))
else if(n)o.push(A.uj("Pull it out of the wall",B.OA,new A.ewd(a2),D.ac))
a4.push(C.B(o,D.m,a3,D.e,D.i,0,a3,a3))
if(!p.x)D.d.v(a4,C.a([D.P,C.B(C.a([A.uj("Take it out and put in a different "+(D.d.t(B.jE,u.a)?"switch":"one"),D.jW,new A.ewe(a2,u),D.aJ)],m),D.m,a3,D.e,D.i,0,a3,a3)],m))
D.d.v(q,a4)}a4=C.a([A.U1(D.aB,new A.ewg(a2,a6),C.x(q,D.m,a3,D.e,D.O,0,D.p),r,"Phase "+(v+1)+"/3",s+" job",a3)],m)
if(a2.cx)a4.push(C.bT(0,C.dZ(C.p(a3,a3,D.f,B.aim,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3),!0,a3),0,0,0))
return new C.an(D.a_,a3,D.ab,D.t,a4,a3)},
csk(d){var w=this.d
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
break A}this.om(w,!0)},
chs(d){return C.bV(E.lB,null,new A.evm(this,d),d,!0,!0,!0,D.k3,!1,!1,x.H)}}
A.rO.prototype={}
A.rm.prototype={
a6(){return"FaultKind."+this.b}}
A.uE.prototype={}
A.Mw.prototype={}
A.cwc.prototype={
bAi(d,e,f){var w,v,u,t,s,r,q,p=this,o=new C.e4()
o.cY(p.a)
w=C.C(B.deM,x.eP)
D.d.dZ(w,o)
v=C.aX(x.S)
u=C.a([],x.gw)
for(t=w.length,s=0;s<w.length;w.length===t||(0,C.L)(w),++s){r=w[s]
q=B.wI.h(0,r).e
if(v.t(0,q))continue
v.M(0,q)
u.push(new A.Mw(r,o.ap(3)))
if(u.length>=d)break}p.c!==$&&C.aQ()
p.c=u
p.axR()},
q1(d,e){var w=this.c
w===$&&C.c()
return D.d.b3(w,new A.cwh(e))},
axR(){var w,v,u,t,s=this,r=s.d,q=r.d
q.aa(0)
if(s.q1(0,B.a0x))q.M(0,72)
if(s.q1(0,B.a0y))q.M(0,75)
q=s.q1(0,B.NY)
r.b=q
r.c=!q
r.w=s.q1(0,B.NZ)
r.x=s.q1(0,B.a0C)
r.y=s.q1(0,B.a0D)
r.z=s.q1(0,B.a0B)
r.Q=s.q1(0,B.a0E)
r.as=s.q1(0,B.a0F)
r.at=s.q1(0,B.a0A)
q=r.f
q.aa(0)
r=r.r
r.aa(0)
w=s.c
w===$&&C.c()
w=D.d.gag(w)
v=new C.f2(w,new A.cwd())
while(v.C()){u=w.gS(0)
t=u.c
u=u.b
if(t)r.M(0,u)
else q.M(0,u)}},
gcHS(){var w=this.c
w===$&&C.c()
return D.d.d0(w,new A.cwf())},
gcPq(){var w=this.c
w===$&&C.c()
return new C.Z(w,new A.cwg(),C.T(w).k("Z<1>")).gL(0)},
cP4(d){var w,v,u,t,s,r,q,p=this.c
p===$&&C.c()
w=p.length
v=d===86
u=d===92
t=0
for(;t<p.length;p.length===w||(0,C.L)(p),++t){s=p[t]
r=s.a
q=!0
if(B.wI.h(0,r).e!==d)if(!(r===B.NY&&v))r=r===B.NZ&&u
else r=q
else r=q
if(r)return s}return null},
b_k(d){++this.f
return new A.ey(!1,d,!1,"")},
c8L(){var w,v,u,t,s=this;++s.r;--s.e
for(w=s.d,v=w.d,w=w.e,u=0;u<4;++u){t=B.axG[u]
if(!v.t(0,t))w.M(0,t)}w=s.e
if(w<=0){s.w=!0
return B.b_2}v=w===1?"life":"lives"
return new A.ey(!1,"ZAP! You touched a live wire and got a shock. All the breakers were knocked off. "+w+" "+v+" left. Turn the breaker OFF first.",!0,"shock")},
cZN(d,e){var w,v,u,t,s=this
if(s.w)return B.aZY
if(D.d.t(B.axG,e))return s.bEO(d,e)
w=s.cP4(e)
if(d==="inspect"){if(w==null||w.c)return B.b_1
return new A.ey(!0,"You look and test: "+B.wI.h(0,w.a).b,!1,"")}if(w==null||w.c)return new A.ey(!1,s.b?"Nothing needs fixing there.":"There is nothing wrong with this, so the "+C.w(B.Sm.h(0,d))+' is not needed. Use "Look and test" on things to find the problem.',!1,"")
v=B.wI.h(0,w.a)
if(d!==v.c){++s.f
return new A.ey(!1,s.b?"That is not the right tool for this problem.":"The "+C.w(B.Sm.h(0,d))+" does not fix this. "+v.b,!1,"")}u=v.f
if(u!==0){t=s.d
u=!t.d.t(0,u)&&!t.e.t(0,u)}else u=!1
if(u){if(s.b)return s.c8L()
return s.b_k("STOP! "+v.r+" The wires here are live (120 volts). Tap the breaker in the panel (with your hand) to switch it off.")}w.c=!0
s.axR()
return new A.ey(!0,v.d,!1,"")},
bEO(d,e){var w,v,u,t,s=this
if(d==="inspect"){w=s.d
if(w.d.t(0,e))w="This breaker has tripped: it sits in the middle (orange)."
else w=w.e.t(0,e)?"This breaker is switched OFF.":"This breaker is ON."
return new A.ey(!0,w,!1,"")}if(d!=="hand")return s.b_k(s.b?"Use your hand on a breaker.":"A breaker is switched with your hand, not with a "+C.w(B.Sm.h(0,d))+".")
w=s.d
v=w.d
if(v.t(0,e)){w=s.c
w===$&&C.c()
u=C.T(w).k("Z<1>")
t=C.C(new C.Z(w,new A.cwe(e),u),u.k("M.E"))
if(t.length!==0){D.d.gI(t).c=!0
s.axR()
return new A.ey(!0,B.wI.h(0,D.d.gI(t).a).d,!1,"")}v.W(0,e)
return B.b_x}w=w.e
if(w.t(0,e)){w.W(0,e)
return B.b_r}w.M(0,e)
return B.b_h}}
A.as1.prototype={
R(){var w,v=new A.xi(-0.3,0.48,46,B.VA,$.ax())
v.f=80
w=new C.ye()
$.yY()
w.h7(0)
return new A.aFp(v,w)}}
A.aFp.prototype={
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
w=A.hmZ(!0,w)
v.d=w
v.r=A.agK(w.d)},
q(){var w=this.ax
if(w!=null)w.a4(0)
this.a1()},
c8Q(d,e){var w=this,v=w.ax
if(v!=null)v.a4(0)
w.m(new A.exK(w,d,e))
w.ax=C.cG(D.jP,new A.exL(w))},
b_l(){this.f.hT(46,0.48,B.VA,-0.3)
this.m(new A.exz(this))},
c8P(d){var w,v,u=this
if(d===0)return
w=u.d
w===$&&C.c()
v=w.cZN(u.x,d)
w=v.a
if(w)A.wW()
else A.fR(180,220,0.25,"square")
if(v.d==="shock"){C.fM()
u.m(new A.exE(u))
C.bP(D.mF,new A.exF(u),x.P)}u.m(new A.exG(u,d))
w=w&&!v.c
u.c8Q(v.b,w)
w=u.d
if(w.w)$.aV.x1$.push(new A.exH(u))
else if(w.gcHS()&&!u.at){u.at=!0
$.aV.x1$.push(new A.exI(u))}},
chA(){var w=null,v=this.c
v.toString
C.ck(w,w,!1,w,new A.exC(this),v,w,!0,!0,x.H)},
c8M(){var w,v,u=null,t=this.d
t===$&&C.c()
w=t.c
w===$&&C.c()
w=w.length
v=A.heV(t.f,t.r,w)
A.ajZ(v)
w=this.c
w.toString
C.ck(u,u,!0,u,new A.exy(this,v),w,u,!0,!0,x.H)},
axd(){this.m(new A.exA(this))
this.b_l()},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.d
g===$&&C.c()
g=g.gcPq()
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
for(o=0;o<3;++o)p.push(new C.D(D.Ni,new C.y(o<i.d.e?"\u2764\ufe0f":"\ud83d\udda4",h,D.Ap,h,h,h,h,h,h,h,h,h),h))
v=A.Y9(!1,h,i.f,new A.exS(i),h,s,u,r,h,new A.exT(),t,h,h,i.gc8N(),i.gc8O(),v,!1,h,C.a([C.B(p,D.m,h,D.e,D.O,0,h,h)],q),h)
u=i.d.c
u===$&&C.c()
t=C.T(u)
t=new C.cQ(new C.Z(u,new A.exU(),t.k("Z<1>")),new A.exV(),t.k("cQ<1,m>")).aG(0,"  \xb7  ")
u=C.d("Customer: "+(t.length===0?"All fixed!":t),h,2,D.a1,h,h,h,B.aTn,h,h,h)
t=C.a([],q)
for(n=0;n<10;++n){m=B.duq[n]
s=i.x===m?D.aB.j(0.25):D.c.j(0.07)
r=new C.aP(14,14)
p=i.x===m
l=p?D.aB:D.aX
k=new C.ay(l,p?2:1,D.r,-1)
l=B.dAe.h(0,m)
p=C.X(l,i.x===m?D.aB:D.ac,h,h,h,19)
l=B.Sm.h(0,m)
l.toString
j=i.x===m?D.aB:D.c
t.push(new C.D(G.od,C.aA(h,C.p(h,new C.cd(D.aM,D.e,D.i,D.m,h,D.p,h,0,C.a([p,D.bn,new C.y(l,h,new C.F(!0,j,h,h,h,h,12.5,D.H,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h),h,h,h,h,h,h,h,h,h)],q),h),D.f,h,h,new C.o(s,h,new C.bH(k,k,k,k),new C.bh(r,r,r,r),h,h,D.n),h,h,h,h,D.eZ,h,h,h),D.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new A.exW(i,m),h,h,h,h,h,h,!1,D.a3),h))}g=C.a([A.U1(D.aJ,new A.exX(i,d),C.x(C.a([new C.bM(D.a5,h,h,u,h),D.P,new C.a5(h,52,C.cl(t,h,h,h,h,h,D.aM,!1),h)],q),D.m,h,D.e,D.O,0,D.p),v,""+g+"/"+w+" fixed","Service call",h)],q)
if(i.as)g.push(C.bT(0,C.dZ(C.p(h,h,D.f,B.aim,h,h,h,h,h,h,h,h,h,h),!0,h),0,0,0))
return new C.an(D.a_,h,D.ab,D.t,g,h)},
cCl(d){return C.bV(E.lB,null,new A.exQ(this),d,!0,!0,!0,D.k3,!1,!1,x.H)},
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
$6$shine(d,e,f,g,h,i){return this.gJ().$6$shine(d,e,f,g,h,i)},
$7$endCaps$joints$shine$sides(d,e,f,g,h,i,j){return this.gJ().$7$endCaps$joints$shine$sides(d,e,f,g,h,i,j)},
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
$4$yaw(d,e,f,g){return this.gJ().$4$yaw(d,e,f,g)},
$1$dist(d){return this.gJ().$1$dist(d)},
$1$target(d){return this.gJ().$1$target(d)},
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
A.y5.prototype={
giS(d){return this.x}}
A.tO.prototype={}
A.aa2.prototype={}
A.ia.prototype={
aGP(d,e,f){var w=this
return d>w.a-f&&d<w.b+f&&e>w.c-f&&e<w.d+f}}
A.csL.prototype={
c8R(d){return-this.a.gea(0)/2+d*4},
a5j(d,e){var w,v,u=this.a
if(d<-u.gea(0)/2+6||d>u.gea(0)/2-6||e<6||e>u.gh_(0)-6)return!1
for(u=this.b,w=u.length,v=0;v<w;++v)if(u[v].aGP(d,e,9))return!1
return!0},
b_n(d,e,f){var w,v,u=e.a,t=f.a-u,s=e.b,r=f.b-s,q=Math.max(1,D.k.dd(Math.sqrt(Math.pow(t,2)+Math.pow(r,2))/2))
for(w=0;w<=q;++w){v=w/q
if(!this.a5j(u+t*v,s+r*v))return!1}return!0},
aYY(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=a0.a,f=h.a,e=D.k.V((g+f.gea(0)/2)/4),d=h.c
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
if(!h.a5j(-f.gea(0)/2+k,j))continue
i=Math.pow(-f.gea(0)/2+k-g,2)+Math.pow(j-e,2)
if(i<o){p=new C.z(n,l)
o=i}}if(p!=null)return p}return null},
aoW(b9,c0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5=this,b6=1e9,b7=b5.aYY(b9),b8=b5.aYY(c0)
if(b7==null||b8==null)return C.a([b9,c0],x.f)
w=b8.a
v=b5.c8R(w)
u=b8.b
t=new C.z(v,u*4)
if(b5.b_n(0,b9,t))return C.a([b9,t],x.f)
v=b7.a
s=b5.d
s===$&&C.c()
r=b7.b
q=x.S
p=C.eE([v*s+r],q)
o=C.U(q,q)
n=x.i
m=C.H([v*s+r,0],q,n)
l=C.H([v*s+r,b5.bUt(v,r,b8)],q,n)
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
a1=D.o.eb(f,s)
a2=D.o.F(f,s)
for(n=a2*4,e=a1*4,a3=-1;a3<=1;++a3)for(a0=a3===0,a4=!a0,a5=a1+a3,a6=a5*4,a7=a5-w,a8=-1;a8<=1;++a8){if(a0&&a8===0)continue
a9=a2+a8
b0=!0
if(a5>=0)if(a9>=0){b0=b5.c
b0===$&&C.c()
b0=a5>=b0||a9>=s||!b5.a5j(-v.gea(0)/2+a6,a9*4)}if(b0)continue
b0=!1
if(a4)if(a8!==0)b0=!b5.a5j(-v.gea(0)/2+a6,n)||!b5.a5j(-v.gea(0)/2+e,a9*4)
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
for(r=x.c5,q=new C.dw(b3,r),q=new C.bS(q,q.gL(0),r.k("bS<ak.E>")),r=r.k("ak.E");q.C();){n=q.d
if(n==null)n=r.a(n)
e=D.o.eb(n,s)
u.push(new C.z(-v.gea(0)/2+e*4,D.o.F(n,s)*4))}b4=C.a([D.d.gI(u)],w)
for(a5=0;a9=u.length-1,a5<a9;a5=a9){w=a5+1
for(;;){if(!(a9>w&&!b5.b_n(0,u[a5],u[a9])))break;--a9}b4.push(u[a9])}return b4},
bUt(d,e,f){return Math.sqrt(Math.pow(d-f.a,2)+Math.pow(e-f.b,2))}}
A.Az.prototype={}
A.bsn.prototype={
bAy(d,e,f,g,h,i,j,k,l,m,n,o){var w,v,u,t,s=this.b
if(s!=null)for(w=this.as,v=1;v<s.length;++v){u=v-1
t=Math.sqrt(Math.pow(s[v].a-s[u].a,2)+Math.pow(s[v].b-s[u].b,2))
w.push(t)
this.at+=t}}}
A.aWz.prototype={
av6(d){var w,v,u=d.gea(0),t=new A.bVh(d,u)
switch(d.c){case"living":w=t.$1(46)
return C.a([B.hkK,new A.Az(w.a,w.b,4,"Switching the ad on the big TV",!1,!0,!0,"ad")],x.h)
case"kitchen":return C.a([new A.Az(new C.z(-u/2+40,42),3.141592653589793,2.8,"Getting a drink from the fridge",!0,!1,!1,""),B.hkJ],x.h)
case"bathroom":return B.dr5
case"bedroom":v=t.$1(44)
return C.a([new A.Az(v.a,v.b,3.4,"Switching the ad on the TV",!1,!0,!0,"ad")],x.h)
case"hall":if(!this.a)return B.aAl
return C.a([new A.Az(new C.z(-d.gea(0)/2+80,90),3.141592653589793,3,"Looking at the left video wall",!1,!1,!0,""),new A.Az(B.euV,0,2.4,"Looking over the lounge and the logo carpet",!1,!1,!1,""),new A.Az(new C.z(d.gea(0)/2-80,90),3.141592653589793,3,"Looking at the right video wall",!1,!1,!0,"")],x.h)
default:return B.aAl}},
acQ(a0,a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=e.b.d
d===$&&C.c()
w=d[a0]
v=new A.csL(w,A.ijL(w))
v.c=D.k.dd(w.gea(0)/4)+1
v.d=D.k.dd(w.gh_(0)/4)+1
u=A.hr0(w,a1)
t=u.a
s=u.c
d=e.d
r=d.length
q=a3.length===0?"Walking in":a3
d.push(A.bso(a0,"",!1,q,-1,null,!1,!1,0.5,t.a,u.b,t.b))
for(q=e.av6(w),p=q.length,o=t,n=0;n<q.length;q.length===p||(0,C.L)(q),++n){m=q[n]
l=v.aoW(o,m.a)
k=m.e
if(k)j=C.cU(m.d,"Having",0)
else j=!1
d.push(A.bso(a0,"",j,"Walking",-1,l,!1,!1,0,0,0,0))
o=D.d.gak(l)
d.push(A.bso(a0,m.w,k,m.d,-1,null,m.r,m.f,m.c,o.a,m.b,o.b))}if(a2!=null){i=A.hr0(w,a2)
h=i.c
l=v.aoW(o,i.a)
g=e.av6(w).length!==0&&D.d.gak(e.av6(w)).e
d.push(A.bso(a0,"",g,"Walking to the next room",-1,l,!1,!1,0,0,0,0))
o=D.d.gak(l)
d.push(A.bso(a0,"",g,"Opening the door",h,null,!1,!1,1.8,o.a,e.bNZ(w,h),o.b))}for(f=r;f<d.length;++f)d[f].ay=s},
aXK(d,e,f){return this.acQ(d,e,f,"")},
bNZ(d,e){var w,v=d.w[e].b
A:{if("left"===v){w=-1.5707963267948966
break A}if("right"===v){w=1.5707963267948966
break A}w=3.141592653589793
break A}return w},
b_m(){var w,v,u=this
if(u.a){u.acQ(5,10,9,"Walking into the hall")
u.b_o()
return}u.acQ(10,11,9,"Coming in through the front door")
u.aXK(9,10,5)
u.acQ(5,9,0,"Walking down the hall")
for(w=0;w<8;++w){v=B.cYZ[w]
u.aXK(v,5,w===7?null:5)}u.b_o()},
b_o(){var w,v,u,t,s,r,q,p,o=this,n=o.c,m=Math.min(1,n/120)
for(w=o.d,v=w.length,u=0,t=0,s=0;s<v;++s){r=w[s]
if(r.b==null)u+=r.f*=m
else t+=r.at}q=t/Math.max(4,n-u)
for(n=q<=0,p=0,s=0;s<v;++s){r=w[s]
if(r.b!=null)r.f=n?0.1:Math.max(0.05,r.at/q)
r.ax=p
p+=r.f}o.e!==$&&C.aQ()
o.e=p},
bc7(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g={},f=this.e
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
return A.atT(!1,n,f.ay,p,f.w,0,f.r,o,0,!1,s,f.x,v,!1,!1,f.c,f.e,f.d)}v=new A.bVi(g)
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
return A.atT(!1,0,o.ay,"",o.w,0,o.r,-1,m/12,!1,!1,!1,f.a,!1,!0,v,p,s)}}
A.b9U.prototype={
MC(d){var w=this.a
if(w!=null)this.ax=A.hyI(w,this.CW)},
aJH(){var w,v,u,t,s,r,q=this
if(!q.KP(q.f,q.r))return!1
for(w=6;w<=320;w+=6){v=Math.max(8,D.k.V(w/6)*3)
for(u=0;u<v;++u){t=u*2*3.141592653589793/v
s=q.f+Math.cos(t)*w
r=q.r+Math.sin(t)*w
if(!q.KP(s,r)){q.f=s
q.r=r
q.at=null
return!0}}}return!1},
KP(d,e){var w,v,u,t,s=this
if(d<s.b||d>s.c||e<s.d||e>s.e)return!0
for(w=s.ax,v=w.length,u=s.ay,t=0;t<v;++t)if(w[t].aGP(d,e,u))return!0
return!1},
aLY(d,e,f,g){var w,v,u,t,s,r,q,p,o=this,n=Math.sqrt(e*e+f*f)
if(n<0.000001)return o.x=!1
w=e/n
v=f/n
u=o.ch
t=o.z?1.9:1
s=115*u*t*Math.min(1,n)*g
r=o.f+w*s
q=o.r+v*s
p=!0
if(o.KP(r,q))if(!o.KP(r,o.r))q=o.r
else{p=!o.KP(o.f,q)
if(p)r=o.f}if(p){o.f=r
o.r=q
o.w=Math.atan2(w,v)
o.y=o.y+s/12}return o.x=p},
cP3(d){var w,v=this,u=v.Q
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
return t.x=!1}u=t.aLY(0,w,v,e)
if(!u){t.at=null
t.x=!1}return u}}
A.akt.prototype={}
A.aq7.prototype={
R(){var w=x.N
return new A.bet(C.U(w,w))}}
A.bet.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=x.p,g=C.eJ(C.a([C.aH(i,i,i,i,B.bRU,i,i,i,new A.d7z(d),i,i,i,i,i,i)],h),i,i,!0,!0,E.lB,i,1,i,i,i,!1,i,!1,i,i,i,i,!0,i,i,i,i,i,B.fF2,i,i,i,1,i,!0),f=C.a([],h)
for(w=0;w<2;++w)f.push(C.iU(i,i,i,new C.y(D.d.gI(B.zv[w].b.split(" (")),i,i,i,i,i,i,i,i,i,i,i),i,new A.d7A(j,w),j.d===w,i,i,i,i))
f=C.bX(D.bG,f,D.bq,i,0,8)
v=j.e
v=C.bX(D.bG,C.a([C.iU(i,i,i,B.fUm,i,new A.d7B(j),!v,i,i,i,i),C.iU(i,i,i,B.fQA,i,new A.d7C(j),v,i,i,i,i)],h),D.bq,i,0,8)
u=B.zv[j.d]
u=C.a([f,D.P,v,D.W,C.d(u.b,i,i,i,i,i,i,D.dd,i,i,i),D.au,C.d(u.c,i,i,i,i,i,i,Af.Eg,i,i,i),D.W],h)
for(f=B.zv[j.d].e,f=J.aW(f.gew(f)),v=x.N,t=x.e7,s=j.f,r=x.bP;f.C();){q=f.gS(f)
p=s.h(0,q)
o=C.a([],r)
for(n=B.zv[j.d].d,m=0;m<5;++m){l=n[m]
o.push(new C.ez(l,new C.y(l,i,D.oM,i,i,i,i,i,i,i,i,i),D.eY,i,t))}p=C.a([new C.y(q,i,B.fsb,i,i,i,i,i,i,i,i,i),C.T2(i,E.lB,B.fAr,i,!1,!0,o,new A.d7D(j,q),i,i,p,v)],h)
if(!j.e&&s.h(0,q)!=null)p.push(new C.fe(new A.d7E(j,q),i))
p.push(D.am)
D.d.v(u,p)}u.push(C.bI(C.d(j.e?"Submit the test":"Check my wiring",i,i,i,i,i,i,i,i,i,i),i,new A.d7F(j),i))
f=j.r
if(f!=null){f=f.a
v=f===B.vd
t=v?"CORRECT: every lead follows the diagram.":A.h5b(f)+": not passed"
if(v)f=D.bf
else f=f===B.TT?D.bu:D.c6
h=C.a([D.W,C.d(t,i,i,i,i,i,i,C.l(i,i,f,i,i,i,i,i,i,i,i,16,i,i,D.u,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)],h)
for(f=j.r.b,v=f.length,m=0;m<f.length;f.length===v||(0,C.L)(f),++m){k=f[m]
h.push(new C.y(k.c+"\nRule: "+k.d+"\nFix: "+k.e+"\n",i,B.fmD,i,i,i,i,i,i,i,i,i))}for(f=B.zv[j.d].f,m=0;m<2;++m)h.push(new C.y("\u2022 "+f[m],i,D.vp,i,i,i,i,i,i,i,i,i))
D.d.v(u,h)}return C.c5(g,E.Bn,C.cl(u,i,i,D.bE,i,i,D.ah,!1),i,!1,!1,i,i)}}
A.JH.prototype={
a6(){return"SafetyStatus."+this.b}}
A.FM.prototype={
a6(){return"TerminalRole."+this.b}}
A.FT.prototype={
a6(){return"WireFunction."+this.b}}
A.czc.prototype={}
A.cCN.prototype={}
A.a4l.prototype={}
A.bMB.prototype={}
A.wq.prototype={}
A.tm.prototype={}
A.b6u.prototype={}
A.aba.prototype={}
A.abb.prototype={}
A.vh.prototype={}
A.b5c.prototype={}
A.b8o.prototype={}
A.cze.prototype={
br5(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=C.a([],x.dH)
for(w=this.a,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u){t=w[u]
s=t.b
r=t.c
q=A.hvb(s,r,t.d)
p=new C.Z(r,new A.czf(),C.T(r).k("Z<1>")).gL(0)
r=s.d?1:0
o=s.b+s.c+r
n=o===0?0:D.o.E(D.k.V(p*100/o),0,100)
if(q.a!==B.vd)n=D.o.E(n,0,79)
i.push(new A.abb(t.a,q,n))}w=C.a([],x.gl)
for(v=this.b,s=this.c,m=0;m<v.length;++m){r=v[m]
l=s.h(0,m)
w.push(new A.b5c(r,l==null?-1:l))}v=C.a([],x.t)
for(s=i.length,u=0;u<i.length;i.length===s||(0,C.L)(i),++u)v.push(i[u].c)
for(s=w.length,u=0;u<w.length;w.length===s||(0,C.L)(w),++u){k=w[u]
v.push(k.b===k.a.c?100:0)}j=v.length===0?0:D.k.V(D.d.f4(v,new A.czg())/v.length)
return new A.b8o(i,w,j,D.d.d0(i,new A.czh())&&j>=80)}}
A.PM.prototype={}
A.a1g.prototype={
R(){var w=x.S
return new A.bv6(C.U(w,w))}}
A.bv6.prototype={
B(d){var w=null,v=this.e,u=C.aG(d,w,x.w).w
return C.bm(!0,new C.cT(new C.aZ(0,1/0,0,u.a.b*0.9),C.cl(v==null?this.cov():this.crU(v),w,w,D.bQ,w,w,D.ah,!0),w),!0,!1,D.af,!0,!0)},
cov(){var w,v,u,t,s,r,q=this,p=null,o=q.a,n=o.c.b,m=x.p
o=C.a([C.d("Test: "+o.d,p,p,p,p,p,p,D.dd,p,p,p),D.au,B.fyD,D.W],m)
for(w=q.d,v=x.cE,u=0;u<n.length;u=t){t=u+1
s=C.a([new C.y(""+t+". "+n[u].a,p,D.nH,p,p,p,p,p,p,p,p,p)],m)
for(r=0;r<3;++r)s.push(new A.a9O(r,w.h(0,u),new A.fb3(q,u),new C.y(n[u].b[r],p,D.Ao,p,p,p,p,p,p,p,p,p),!0,p,v))
s.push(D.au)
D.d.v(o,s)}o.push(D.P)
o.push(C.bI(B.fD0,p,new A.fb4(q),p))
return o},
crU(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=d.d,g=h?D.bf:D.c6
h=h?"Passed":"Not passed"
w=x.p
h=C.a([C.d(h,i,i,i,i,i,i,C.l(i,i,g,i,i,i,i,i,i,i,i,22,i,i,D.u,i,i,!0,i,i,i,i,i,i,i,i),i,i,i),C.d("Score "+d.c+"%  (pass mark 80%)",i,i,i,i,i,i,D.V_,i,i,i)],w)
v=d.a
if(D.d.b3(v,new A.fb5()))h.push(B.emm)
h.push(D.W)
for(u=v.length,t=0;t<v.length;v.length===u||(0,C.L)(v),++t){s=v[t]
r=s.b
q=r.a
p=A.h8P(q).j(0.1)
o=new C.aP(12,12)
n=new C.ay(A.h8P(q).j(0.6),1,D.r,-1)
m=A.h5b(q)
q=A.h8P(q)
q=C.a([new C.y(s.a+": "+m+" ("+s.c+"%)",i,new C.F(!0,q,i,i,i,i,13.5,D.u,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i),i,i,i,i,i,i,i,i,i)],w)
r=r.b
if(r.length===0)q.push(B.fMR)
for(m=r.length,l=0;l<r.length;r.length===m||(0,C.L)(r),++l){k=r[l]
D.d.v(q,C.a([D.au,new C.y(A.h5b(k.b)+": "+k.c,i,B.fgE,i,i,i,i,i,i,i,i,i),new C.y("Rule: "+k.d,i,N.aad,i,i,i,i,i,i,i,i,i),new C.y("Fix: "+k.e,i,B.fmE,i,i,i,i,i,i,i,i,i)],w))}h.push(C.p(i,C.x(q,D.E,i,D.e,D.i,0,D.p),D.f,i,i,new C.o(p,i,new C.bH(n,n,n,n),new C.bh(o,o,o,o),i,i,D.n),i,i,i,D.cu,D.yi,i,i,i))}for(v=d.b,u=v.length,t=0;t<v.length;v.length===u||(0,C.L)(v),++t){j=v[t]
r=D.c.j(0.05)
q=new C.aP(12,12)
p=j.a
o=p.c
m=j.b===o
n=new C.ay(m?D.bf:D.c6,1,D.r,-1)
m=m?"\u2705":"\u274c"
h.push(C.p(i,C.x(C.a([new C.y(m+" "+p.a,i,D.lp,i,i,i,i,i,i,i,i,i),new C.y("Correct answer: "+p.b[o],i,D.ti,i,i,i,i,i,i,i,i,i),new C.y(p.d,i,N.aad,i,i,i,i,i,i,i,i,i)],w),D.E,i,D.e,D.i,0,D.p),D.f,i,i,new C.o(r,i,new C.bH(n,n,n,n),new C.bh(q,q,q,q),i,i,D.n),i,i,i,D.cu,D.yi,i,i,i))}h.push(D.au)
h.push(C.bI(D.pH,i,new A.fb6(this),i))
return h}}
A.a5h.prototype={
h7(d){var w,v=this
if(v.c)return
v.c=!0
w=$.aV
w.toString
if(D.a.t(C.vy(C.b0(w).a,null),"Test"))v.d=C.dh(v.b,new A.bSO(v))
else v.b_H()},
b_H(){$.eX.Hd(new A.bSN(this))},
bR(d){var w
this.c=!1
w=this.d
if(w!=null)w.a4(0)
this.d=null}}
var z=a.updateTypes(["~()","~(fm)","m(m,fl)","R(nw)","R(mg)","R(a5m)","q(q)","R(iP)","R(l9)","~(G)","ai<kp>(J)","R(XW)","R(fl)","R(a4l)","R(aa2)","R(Mw)","q(J,J)","G(mg,mg)","R(P1)","R(I7)","aB<~>()","R(oq)","R(q)","m(nw)","q(J,J,J)","q(G)","R(pT)","E_(Y)","~(xj,av,J)","~(mg)","~(t,av)","R(Aj)","q(J)","R(M0)","IW(Y)","R(abb)","q(ho)","R(Ff)","G(xn,xn)","R(rd)","R(z7)","Ok(Y)","R(Ms)","q(J,J[J])","R(zc)","R(wq)","G(G4,G4)","PR()","FM(m)","wq(wq,wq)","~(G,q,q,m,u)","~(G,ai<q>)","zc()","pT()","aB<MD?>()","R(w6)","oq(J)","FT(m)","~(G{keepTour:R})","m(iP)","~(q,q,q,q,u,J)","J(lH)","~(q,q,q,q)","v(m,ai<rQ>)","m(mg)","v(xn)","q(ai<q>,G)","XK()","~(aD?)","CA()","R(xn)","Wf(Y)","~(kp,G)","~(q,J,J,J,~(xj,av,J){px:J})","ai<fP>(J)","a7a(Y)","~(q,q{note:m?})","mg?(q,q)","R(q,q)","q?(q,q)","J(q)","ai<q>(q,q[G])","+(J,J,J,m,m)(P1,G)","G(G,mg)","J(mg)","ai<kp>()","ai<kp>(ai<kp>)","J(oq)","~(q,q,q,J,J)","a1g(Y)","~(q,q,q,q{poster:G})","~(~(fm),q,q)","~(q,q,J,J,u{joint:R})","+(q,q)(G)","~(q,q,G{alongX:R})","~(ai<q>,u)","~(ai<q>)","~(ai<q>{col:u})","~(G,q,u{h:J,w:J})","mg?(m)","~(G,ai<q>,u,J,m)","~(G,m,q,q,q,R)","R(Xg)","ai<+(q,q)>()","~(mg,J,J,J,J,J{note:m?})","ai<q>(ai<q>)","~(m,ai<q>{r:J})","~(m,q,q)","~(nw,q,m)","~(m,q,q,G)","q(G,G)","R(G)","fP(q,q,q,q,G,J,J)","G(Aj,Aj)","G(l9)","~(G,q,q{col:u,round:R})","cV()","ho(G)","m(Mw)","~(m,JH,m,m,m)","G(FT,FM)","~({done:R})","G(Aj)","~(q,q,q,J,G)","v(rQ)"])
A.c04.prototype={
$1(d){var w=this.a
w=w===0?d:A.vE(d,w)
return w.a7(0,this.b)},
$S:z+6}
A.c05.prototype={
$1(d){var w=this.a
return w===0?d:A.vE(d,w)},
$S:z+6}
A.c03.prototype={
$4(b5,b6,b7,b8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=this
for(w=b4.b,v=b7.a,u=b7.b,t=b7.c,s=b6.a,r=b6.b,q=b6.c,p=b8.a,o=b8.b,n=b8.c,m=1/w,l=v*m,k=u*m,j=t*m,i=p*m,h=o*m,m=n*m,g=b4.a,f=g.a,e=b4.c,d=x.o,a0=b4.d,a1=b4.e,a2=b4.f,a3=0;a3<w;++a3)for(a4=a3/w,a5=s+v*a4,a6=r+u*a4,a4=q+t*a4,a7=0;a7<w;++a7){a8=a7/w
a9=a5+p*a8
b0=a6+o*a8
a8=a4+n*a8
b1=a9+l
b2=b0+k
b3=a8+j
f.push(new A.kp(C.a([e.$1(new A.q(a9,b0,a8)),e.$1(new A.q(b1,b2,b3)),e.$1(new A.q(b1+i,b2+h,b3+m)),e.$1(new A.q(a9+i,b0+h,a8+m))],d),a0.$1(b5),a1,g.b,a2,g.d,!1,g.c,g.e,g.f,g.w))}},
$S:z+62}
A.c06.prototype={
$1(d){var w=d*2*3.141592653589793/this.b
return this.a.aI(0,Math.cos(w)).a7(0,this.c.aI(0,Math.sin(w)))},
$S:z+25}
A.c02.prototype={
$2(d,e){var w=3.141592653589793*d/this.a,v=6.283185307179586*e/this.b
return new A.q(Math.sin(w)*Math.cos(v),Math.cos(w),Math.sin(w)*Math.sin(v))},
$S:z+110}
A.c07.prototype={
$1(d){var w=d*2*3.141592653589793/this.b
return this.a.aI(0,Math.cos(w)).a7(0,this.c.aI(0,Math.sin(w)))},
$S:z+25}
A.h_3.prototype={
$1(d){var w=d.b,v=this.a,u=d.c,t=this.b
return new A.q(d.a,w*v-u*t,w*t+u*v)},
$S:z+6}
A.h_1.prototype={
$1(d){var w=this.a
return w===0?d:A.vE(d,w)},
$S:z+6}
A.h_2.prototype={
$1(d){var w=this,v=w.b===0?d:w.c.$1(d)
return J.h0g(w.a.$1(v),w.d)},
$S:z+6}
A.h_0.prototype={
$1(d){var w=this.b===0?d:this.c.$1(d)
return this.a.$1(w)},
$S:z+6}
A.fZQ.prototype={
$4(d,e,f,g){var w=-d
return 0.5*(2*e+(w+f)*this.a+(2*d-5*e+4*f-g)*this.b+(w+3*e-3*f+g)*this.c)},
$S:270}
A.bJM.prototype={
$1(d){var w=d.a,v=J.a6(w),u=C.jY(v.h(w,"ngmy_swipe_x3"))
$.ajo=u===!0
w=C.jY(v.h(w,"ngmy_swipe_y3"))
$.ajp=w!==!1},
$S:305}
A.bJN.prototype={
$1(d){},
$S:28}
A.bJO.prototype={
$1(d){d.au("Bool","ngmy_swipe_x3",$.ajo)
d.au("Bool","ngmy_swipe_y3",$.ajp)},
$S:305}
A.bJP.prototype={
$1(d){},
$S:28}
A.bJJ.prototype={
$4(d,e,f,g){var w
if(d>0.000001)w=(g-e)/d
else w=d<-0.000001?(f-e)/d:1/0
return w},
$S:270}
A.bJR.prototype={
$1(d){var w=this,v=-d.c,u=d.b,t=w.a,s=w.b,r=v*t-u*s,q=d.a,p=w.c,o=w.d
return new A.q(q*p-r*o,u*t+v*s,q*o+r*p)},
$S:z+6}
A.bJQ.prototype={
$1(d){var w=this,v=w.a
return v.d.a7(0,w.b.$1(new A.q(w.c*d,w.d*d,d-v.c)))},
$S:z+32}
A.bJL.prototype={
$1(d){var w=this,v=-d.c,u=d.b,t=w.a,s=w.b,r=v*t-u*s,q=d.a,p=w.c,o=w.d
return new A.q(q*p-r*o,u*t+v*s,q*o+r*p)},
$S:z+6}
A.bJK.prototype={
$1(d){var w=this,v=w.a
return v.d.a7(0,w.b.$1(new A.q(w.c*d,w.d*d,d-v.c)))},
$S:z+32}
A.ctM.prototype={
$1(d){var w=this,v=d.a,u=w.a,t=d.c,s=w.b,r=-v*s+t*u,q=d.b,p=w.c,o=w.d
return new A.q(v*u+t*s,q*p-r*o,-(q*o+r*p))},
$S:z+6}
A.ctN.prototype={
$1(d){var w=this.a.c,v=this.b.$1(d.aE(0,w.d))
return new A.q(v.a,v.b,v.c+w.c)},
$S:z+6}
A.ctL.prototype={
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
b0=A.i_v(u)
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
if(t&&d4.d===u){d2=C.ar(c5,D.b_,0.28+0.14*Math.sin(d2.gGR(0)*6))
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
if(r!=null)d2.bw(r)
d2=c9.e
if(d2!=null)d2.a.delete()
c9.e=null}c9.D(new C.bt())
d2=d4.f
d3=C.h0Y(c6,c7,c8,d2)
s=d4.d
u=s===u&&t
d0=new A.G4(d4.y,d4.z,null,c9,d3,c0-d4.x,s,d2<0.99,u)
d0.e=c1<2&&c2<2
d1.go.push(d0)
d0.c=d5},
$S:z+72}
A.ctF.prototype={
$1(d){return d.c>=1},
$S:z+22}
A.ctG.prototype={
$1(d){var w,v,u,t,s,r,q,p,o=this,n=!o.c||o.d>=o.e[0],m=o.f,l=o.b
if(n)A.i0n(d,m,o.r,l.gGR(0))
else{n=$.hCv()
C.E3(m)
w=n.a
v=w.get(m)
u=D.k.bf(l.gGR(0)*5)
t=v==null
if(t)s=o.a.x<10
else s=v.a!==u&&o.a.w<3
if(s){$.S()
r=new C.p2()
m.c.$3(C.z8(r,null),new C.av(m.d,m.e),l.gGR(0))
if(!t)v.b.q()
n.n(0,m,new A.cDy(u,r.nj()))
n=o.a
if(t)++n.x
else ++n.w}C.E3(m)
n=w.get(m)
q=n==null?null:n.b
if(q!=null){n=m.d
m=m.e
p=A.h8u(o.r,n,m)
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
d.aH(o.w,n)}}},
$S:710}
A.ctE.prototype={
$2(d,e){var w=this.a
return A.o7(A.o7(w[0],w[1],d),A.o7(w[3],w[2],d),e)},
$S:z+16}
A.ctH.prototype={
$1(d){return d.c<1},
$S:z+22}
A.ctI.prototype={
$1(d){return A.i0o(d,this.b,this.c,8,6,this.a.gGR(0))},
$S:710}
A.ctJ.prototype={
$2(d,e){return D.k.aL(e,d)},
$S:1775}
A.ctK.prototype={
$2(d,e){var w,v=D.o.aL(d.a,e.a)
if(v!==0)return v
w=D.k.aL(e.d,d.d)
return w!==0?w:D.o.aL(d.c,e.c)},
$S:z+46}
A.f2T.prototype={
$1(d){var w=this.a,v=w.r,u=d.a
w.r=d
w.a.d.a7_(D.k.E((u-v.a)/1e6,0,0.1))
w.f.sp(0,u/1e6)},
$S:8}
A.f2S.prototype={
$1(d){if(x.ej.b(d))this.a.a.d.apy(1+d.gtC().b*0.0012)},
$S:245}
A.f2Q.prototype={
$1(d){var w=this.a
w.w=1
w.x=d.c},
$S:244}
A.f2R.prototype={
$1(d){var w,v,u,t,s,r=d.w,q=this.a
if(r!==q.x){q.x=r
q.w=d.d}if(r>=2){r=d.d
w=q.w/r
q.w=r
if(isFinite(w)&&w>0)q.a.d.apy(w)}else{r=q.a.d
q=d.a
v=$.ajo?-1:1
v=q.a*0.009*v
u=$.ajp?-1:1
r.cx=r.CW=null
v=r.a+=v
if(!r.ax){t=r.as
s=r.at
r.a=D.k.E(v,t-s,t+s)}r.b=D.k.E(r.b+-q.b*0.009*u,r.z,r.Q)
r.axi()
r.aW()}},
$S:216}
A.f2K.prototype={
$1(d){return this.a.y=d.b},
$S:22}
A.f2L.prototype={
$0(){var w,v=this.a,u=v.a.as
u.toString
v=v.y
w=this.b.gY(0)
return u.$2(v,w==null?D.aw:w)},
$S:0}
A.f2N.prototype={
$1(d){var w=this.a
if(++w.at===1){w.z=d.geZ()
w.Q=d.glo(d)
w.as=!1}else w.as=!0},
$S:71}
A.f2O.prototype={
$1(d){var w=this.a,v=w.z
if(v!=null&&d.geZ().aE(0,v).gcC()>14)w.as=!0},
$S:192}
A.f2M.prototype={
$1(d){var w=this.a
w.at=Math.max(0,w.at-1)
w.as=!0},
$S:141}
A.f2P.prototype={
$1(d){var w,v=this.a,u=v.at
v.at=Math.max(0,u-1)
w=v.z
if(u===1&&!v.as&&w!=null&&D.o.ao(d.glo(d).a-v.Q.a,1000)<450){u=v.a.f
if(u!=null)u.$1(v.e.cWq(d.geZ()))}if(v.at===0)v.z=null},
$S:111}
A.fkk.prototype={
$0(){return new A.PR(!1,C.a([],x.z),C.a([],x.t))},
$S:z+47}
A.bTY.prototype={
$0(){var w=0,v=C.j(x.e),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j
var $async$$0=C.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return C.b($.ra().ji(0,q.a),$async$$0)
case 7:p=e
m=q.b
l=x.N
o=new A.MD(m,C.U(l,x.I),C.U(l,x.bB),C.a([],x.dQ),C.U(l,x.gN))
w=8
return C.b(o.PA(p),$async$$0)
case 8:$.h1M.n(0,m,o)
$.h1K.W(0,m)
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
$.h1K.M(0,m)
u=null
r=[1]
w=5
break
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
$.h1L.W(0,q.b)
w=r.pop()
break
case 6:case 1:return C.h(u,v)
case 2:return C.f(s.at(-1),v)}})
return C.i($async$$0,v)},
$S:z+54}
A.bTP.prototype={
$1(d){return D.a.t(d,"hips")},
$S:3}
A.bTJ.prototype={
$2(d,e){var w,v=Math.floor(d),u=Math.floor(e),t=this.b,s=t.a,r=Math.min(s-1,D.k.bf((d-v)*s))
v=t.b
w=(Math.min(v-1,D.k.bf((e-u)*v))*s+r)*4
s=this.a
t=t.c
s.c=s.c+t[w]
s.b=s.b+t[w+1]
s.a=s.a+t[w+2]},
$S:199}
A.bTI.prototype={
$1(d){return D.k.V(D.k.E(d,0,1)*255)},
$S:256}
A.bTR.prototype={
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
w[s]=g.c3(0,((k*1024+j)*1024+i)*2+r,new A.bTS(g))}e[0]=g.a
return w},
$S:1777}
A.bTS.prototype={
$0(){return this.a.a},
$S:98}
A.bTT.prototype={
$1(d){var w,v,u,t,s,r,q=C.aX(x.S)
for(w=this.a.e,v=w.length,u=0;u<v;u+=3){t=d[w[u]]
s=d[w[u+1]]
r=d[w[u+2]]
if(t===s||s===r||t===r)continue
q.M(0,A.hga(t,s,r))}return q.a},
$S:1778}
A.bTQ.prototype={
$2(d,e){var w,v,u,t=this.a,s=this.b.h(0,d)
s.toString
w=J.a6(e)
v=D.k.V(w.h(e,0)/w.h(e,3))
u=D.k.V(w.h(e,1)/w.h(e,3))
w=D.k.V(w.h(e,2)/w.h(e,3))
t.$flags&2&&C.aj(t)
t[s]=(v<<16|u<<8|w|4278190080)>>>0},
$S:1779}
A.bTN.prototype={
$0(){return new Float64Array(this.a*16)},
$S:711}
A.bTO.prototype={
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
if(n<0)D.oA.he(k,j,j+16,h)
else A.hgb(k,n*16,h,0,k,j)
k=u.f
k===$&&C.c()
k=k[a1]
j=k.length
m=0
for(;m<k.length;k.length===j||(0,C.L)(k),++m)l.$1(k[m])},
$S:29}
A.bTW.prototype={
$1(d){var w,v,u
for(w=this.a.z,w=new C.hF(w,w.r,w.e);w.C();){v=w.d
u=v.toLowerCase()
if(C.cU(u,d,0))return v}return null},
$S:338}
A.bTU.prototype={
$1(d){return!D.a.t(d.toLowerCase(),"pose")},
$S:3}
A.bTV.prototype={
$0(){var w=this.a.z
return new C.cx(w,C.a7(w).k("cx<1>")).gI(0)},
$S:23}
A.bTZ.prototype={
$1(d){var w=this,v=w.c,u=d*3,t=w.a,s=w.d,r=(v[u]-t.b)*s,q=v[u+1],p=w.b.ay,o=(v[u+2]-t.a)*s
t=w.f
u=w.r
return new A.q(r*t+o*u+w.w,(q-p)*s+w.e,-r*u+o*t+w.x)},
$S:z+25}
A.bTK.prototype={
$3(d,e,f){var w=this,v=w.e
return w.b.a7(0,w.c.aI(0,w.a.a*f+0.25)).a7(0,w.d.aI(0,d*v)).a7(0,w.f.aI(0,e*v))},
$2(d,e){return this.$3(d,e,1)},
$S:z+43}
A.bTM.prototype={
$6(d,e,f,g,h,i){var w=this
return w.a.push(new A.kp(C.a([d,e,f,g],x.o),w.b,h,w.c,0,1,!1,0,i,2,w.d))},
$S:z+60}
A.bTL.prototype={
$6(d,e,f,g,h,i){var w=this.b
return this.a.$6(w.$2(d-f,e),w.$2(d,e-g),w.$2(d+f,e),w.$2(d,e+g),h,i)},
$S:1781}
A.fy5.prototype={
$2(d,e){return D.k.V(d+(D.k.E(e,0,255)-d)*0.8)},
$S:1782}
A.bI5.prototype={
$1(d){return d.d+this.a.f*d.e},
$S:z+61}
A.bI4.prototype={
$1(d){return d.a===J.r(this.a,"template")},
$S:z+39}
A.fQY.prototype={
$6$lines$w(d,e,f,g,h,i){var w=null,v=C.fx("\u2026",w,h,w,C.cS(w,w,w,w,w,w,w,w,w,C.l(w,w,f,w,w,w,w,w,w,w,w,e,w,w,i,w,1.1,!0,w,w,w,w,w,w,w,w),d),D.a4,D.bY,w,D.dA,D.bW)
v.o0(g)
return v},
$4(d,e,f,g){return this.$6$lines$w(d,e,f,g,2,D.u)},
$5$w(d,e,f,g,h){return this.$6$lines$w(d,e,f,g,2,h)},
$S:1783}
A.fzu.prototype={
$1(d){var w=this.a
return A.vE(d,w.c).a7(0,new A.q(w.a,0,w.b))},
$S:z+6}
A.fzv.prototype={
$6$px(d,e,f,g,h,i){var w=new A.fzw(e,d),v=-f/2,u=g/2,t=f/2,s=-g/2
this.a.push(new A.fP(C.a([w.$2(v,u),w.$2(t,u),w.$2(t,s),w.$2(v,s)],x.o),0,h,i,i*g/f,30,this.b,0,!1))},
$5(d,e,f,g,h){return this.$6$px(d,e,f,g,h,260)},
$S:z+73}
A.fzw.prototype={
$2(d,e){return A.vE(new A.q(d,e,0),this.a).a7(0,this.b)},
$S:z+16}
A.fzn.prototype={
$3(d,e,f){return A.bBR(d,e,f,0)},
$S:24}
A.fzo.prototype={
$3(d,e,f){return A.bBR(d,e,f,3)},
$S:24}
A.fzp.prototype={
$3(d,e,f){return A.bBR(d,e,f,8)},
$S:24}
A.fzq.prototype={
$3(d,e,f){return A.bBR(d,e,f,9+this.a)},
$S:24}
A.fzr.prototype={
$3(d,e,f){return A.bBR(d,e,f,12+this.a)},
$S:24}
A.fzs.prototype={
$3(d,e,f){return A.hyL(d,e,f,this.a,this.b)},
$S:24}
A.fzt.prototype={
$3(d,e,f){return A.hyL(d,e,f,this.a,this.b)},
$S:24}
A.flt.prototype={
$4(d,e,f,g){var w=-d,v=this.a
return 0.5*(2*e+(w+f)*v+(2*d-5*e+4*f-g)*v*v+(w+3*e-3*f+g)*v*v*v)},
$S:270}
A.foS.prototype={
$1(d){var w=this.a,v=J.a6(w)
return v.h(w,D.o.E(d,0,v.gL(w)-1))},
$S:z+93}
A.fyb.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n=A.hut(this.a),m=x.n,l=C.a([],m)
for(w=J.a6(n),v=0;v<w.gL(n)-1;v=u){u=v+1
t=w.h(n,u).a
s=w.h(n,v).a
l.push(Math.pow(Math.max(new A.q(t.a-s.a,t.b-s.b,t.c-s.c).guW(),250),0.75))}r=D.d.f4(l,new A.fya())
q=C.a([0],m)
for(m=l.length,p=0;p<l.length;l.length===m||(0,C.L)(l),++p){o=l[p]
q.push(D.d.gak(q)+30*o/r)}return q},
$S:1785}
A.fya.prototype={
$2(d,e){return d+e},
$S:79}
A.fy8.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8=this.a,a9=B.dzv.h(0,a8.a)
if(a9==null){w=C.a([],x.t)
v=a8.w.length
u=v===0
t=0
for(;;){if(!(t<(u?1:v)))break
w.push(t);++t}a9=new C.z(w,0)}s=Math.max(Math.max(a8.gapg(),a8.gbej()),a8.gGP()*1.3)
w=a8.r
r=new A.q(a8.ga4w(0),w+a8.gGP()/2,a8.ga4y())
q=w+a8.gGP()
v=s*0.55
p=C.a([new C.z(new A.q(a8.ga4w(0)+v,q+s*0.5,a8.ga4y()+s*1.15),r)],x.dt)
for(u=a9.a,o=x.o,n=a8.w,m=a8.e,l=a8.f,k=a9.b,v=q+v,j=null,i=0;i<u.length;++i,j=a2){h=n[u[i]]
g=h.e
f=m*g
e=l*g
d=new A.q(h.a,w+h.d+e/2,h.b)
g=h.c
a0=Math.sin(g)
a1=Math.cos(g)
a2=new A.q(a0,0,a1)
a3=new A.fy9(d,a2,f*1.5,new A.q(Math.cos(g),0,-Math.sin(g)),f,e)
a4=D.o.F(k+i,3)
A:{if(0===a4){g=C.a([a3.$3(1.8,0,1.1),a3.$3(1,-0.22,-0.35),a3.$3(0.9,0.3,-0.2)],o)
break A}if(1===a4){g=C.a([a3.$3(0.9,1.5,-0.25),a3.$3(1.05,0,0.05),a3.$3(0.85,-1.3,0.15)],o)
break A}g=C.a([a3.$3(1.3,0.2,-0.45),a3.$3(1.1,0,0.45),a3.$3(1.7,-0.3,1.3)],o)
break A}if(j!=null&&j.a*a0+j.c*a1<0.3){a0=D.d.gak(p).a
a1=D.d.gI(g)
p.push(new C.z(new A.q((a0.a+a1.a)*0.5+j.c*s*0.5,v,(a0.c+a1.c)*0.5-j.a*s*0.5),r))}for(a5=0;a5<3;++a5)p.push(new C.z(g[a5],d))}a6=new A.q(a8.ga4w(0)-s*0.7,q+s*0.6,a8.ga4y()-s)
if(j!=null){a7=D.d.gak(p).a.a7(0,a6).aI(0,0.5)
p.push(new C.z(new A.q(a7.a+j.c*s*0.5,v,a7.c-j.a*s*0.5),r))}p.push(new C.z(a6,r))
return p},
$S:z+103}
A.fy9.prototype={
$3(d,e,f){var w=this
return w.a.a7(0,w.b.aI(0,w.c*d)).a7(0,w.d.aI(0,w.e*e)).a7(0,new A.q(0,w.f*f,0))},
$S:z+24}
A.fzf.prototype={
$1(d){var w=this.b,v=w*d.b,u=d.c,t=this.c
return this.a.a7(0,new A.q(Math.sin(v)*u*t.geg(0)+w*d.e*t.gapg(),d.d*t.gGP(),Math.cos(v)*u*t.geg(0)))},
$S:z+36}
A.fzg.prototype={
$1(d){var w=this.c
return this.a.a7(0,new A.q(this.b*d.f*w.gapg(),d.r*w.gGP(),0))},
$S:z+36}
A.fzh.prototype={
$1(d){var w=this.a
return w[D.o.E(d,0,w.length-1)]},
$S:z+117}
A.c45.prototype={
$1(d){return d.a===this.a.d.a},
$S:z+39}
A.c43.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new A.c42())},
$S:31}
A.c42.prototype={
$0(){},
$S:0}
A.c3R.prototype={
$0(){var w=this.a
w.f=A.h9a(w.gzy(),w.d)
w.abv()},
$S:0}
A.c3X.prototype={
$0(){return this.a.x=this.b},
$S:0}
A.c44.prototype={
$0(){var w=this.a
w.x=0
w.y=!1
w.z=""},
$S:0}
A.c3U.prototype={
$0(){var w=this.a
w.x=-1
w.y=!1
w.z=this.b?"That was the 30 second drone shot. Press it again any time, or change the board and film it again.":""},
$S:0}
A.c3T.prototype={
$0(){var w=this.a
return w.f=A.h9a(w.gzy(),w.d)},
$S:0}
A.c3r.prototype={
$0(){},
$S:0}
A.c3S.prototype={
$0(){return this.a.z="That picture could not be opened."},
$S:0}
A.c3W.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=C.aG(d,k,x.w).w,i=x.p,h=C.a([],i)
for(w=this.a,v=w.d,u=0;u<12;++u){t=B.a3x[u]
s=t.a
r=v.a===s
q=r?D.d7:D.cr
p=new C.aP(16,16)
o=r?F.fA:D.bC
n=new C.ay(o,r?2:1,D.r,-1)
o=C.a([new C.y(t.b,k,D.nJ,k,k,k,k,k,k,k,k,k),D.b2],i)
r=t.w.length
m=r===0
if((m?1:r)>1){l=new C.aP(10,10)
o.push(C.p(k,new C.y(""+(m?1:r)+" boards",k,A5.aTF,k,k,k,k,k,k,k,k,k),D.f,k,k,new C.o(D.dY,k,k,new C.bh(l,l,l,l),k,k,D.n),k,k,k,k,D.yv,k,k,k))}if(v.a===s)o.push(B.ema)
h.push(C.aA(k,C.p(k,C.x(C.a([new C.cd(D.aM,D.e,D.i,D.m,k,D.p,k,0,o,k),D.am,new C.y(t.c,k,D.j4,k,k,k,k,D.a1,k,2,k,k),D.cS,new C.bA(1,D.bd,new C.y(t.d,k,B.fjR,k,k,k,k,D.UD,k,k,k,k),k)],i),D.E,k,D.e,D.i,0,D.p),D.f,k,k,new C.o(q,k,new C.bH(n,n,n,n),new C.bh(p,p,p,p),k,k,D.n),k,k,k,k,B.byj,k,k,k),D.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new A.c3V(w,d,t),k,k,k,k,k,k,!1,D.a3))}return C.bm(!0,new C.D(B.bzJ,C.x(C.a([B.fVI,D.au,B.fOD,D.ae,new C.cT(new C.aZ(0,1/0,0,j.a.b*0.66),C.kP(1.05,h,2,10,10,k,k,!0),k)],i),D.E,k,D.e,D.O,0,D.p),k),!0,!1,D.af,!0,!0)},
$S:27}
A.c3V.prototype={
$0(){C.a4(this.b,!1).O(null)
this.a.cvC(this.c.a)},
$S:0}
A.c3Q.prototype={
$0(){var w=this,v=w.b.d.b[w.a.a]
w.c.saY(0,v.b)
w.d.saY(0,v.c)
w.e.saY(0,v.d)},
$S:0}
A.c3P.prototype={
$1(d){var w=this
return new C.e0(new A.c3M(w.a,w.b,w.c,w.d,w.e,w.f),null)},
$S:21}
A.c3M.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=this,o=null,n=p.b,m=p.a,l=n.d.b[m.a],k=new A.c3N(m,n),j=new A.c3O(e),i=C.aG(d,o,x.w).w,h=x.p,g=C.a([B.fBD,D.au,C.d(l.a?"Now it shows the NGMY logo, words and ads. Change anything and it becomes yours.":"This sign is your own.",o,o,o,o,o,o,I.tf,o,o,o)],h),f=n.gzy().w.length
if((f===0?1:f)>1){f=C.a([],h)
w=p.c
v=0
for(;;){u=n.gzy().w.length
if(!(v<(u===0?1:u)))break
u=m.a===v
t=u?D.d7:D.cr
s=new C.aP(18,18)
r=new C.ay(u?F.fA:D.aX,2,D.r,-1)
q=v+1
f.push(C.aA(o,C.p(o,new C.y("Sign "+q,o,D.lp,o,o,o,o,o,o,o,o,o),D.f,o,o,new C.o(t,o,new C.bH(r,r,r,r),new C.bh(s,s,s,s),o,o,D.n),o,o,o,o,D.lF,o,o,o),D.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new A.c3w(m,v,w,e),o,o,o,o,o,o,!1,D.a3))
v=q}D.d.v(g,C.a([D.W,B.fVN,D.am,C.bX(D.bG,f,D.bq,o,8,8)],h))}g.push(D.ae)
g.push(k.$3("Big words",p.d,new A.c3x(l)))
g.push(k.$3("Smaller words",p.e,new A.c3y(l)))
g.push(k.$3("Bottom line (web address)",p.f,new A.c3z(l)))
f=l.f!=null
w=f?"Your logo is on (change)":"Put your own logo (default: NGMY logo)"
g.push(j.$4(w,f,new A.c3A(m,n),new A.c3B(m,n,l)))
f=l.r!=null
w=f?"Your picture is on (change)":"Put your own picture"
g.push(j.$4(w,f,new A.c3C(m,n),new A.c3D(m,n,l)))
g.push(D.au)
g.push(B.fPL)
g.push(D.am)
f=C.a([],h)
for(w=x.O,v=0;v<6;++v){u=B.a5l[v]
u=C.a([u.b,u.c],w)
t=new C.aP(10,10)
r=new C.ay(l.e===v&&!l.a?F.fA:D.aX,2,D.r,-1)
s=B.a5l[v]
f.push(C.aA(o,C.p(o,new C.ce(D.A,o,o,new C.y(s.a,o,new C.F(!0,s.d,o,o,o,o,11,D.H,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),o,o,o,o,o,o,o,o,o),o),D.f,o,o,new C.o(o,o,new C.bH(r,r,r,r),new C.bh(t,t,t,t),o,new C.a9(D.a5,D.a8,D.x,u,o,o),D.n),o,o,o,o,D.hw,o,o,74),D.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new A.c3E(m,n,l,v,e),o,o,o,o,o,o,!1,D.a3))}g.push(C.bX(D.bG,f,D.bq,o,8,8))
g.push(D.aA)
m=n.gzy().w.length
g.push(C.B(C.a([C.E(C.ex(B.bWO,C.d((m===0?1:m)>1?"All signs back to the NGMY default":"Back to the NGMY default",o,o,o,o,o,o,B.fwc,o,o,o),new A.c3F(n,l,p.c,e),o),1),D.as,C.bI(D.x5,o,new A.c3G(d),o)],h),D.m,o,D.e,D.i,0,o,o))
return new C.D(new C.Q(16,16,16,i.f.d+16),C.ch(C.x(g,D.E,o,D.e,D.O,0,D.p),D.t,o,D.y,o,o,o,o,D.ah),o)},
$S:102}
A.c3N.prototype={
$3(d,e,f){var w=null
return new C.D(D.d0,C.aM(w,D.Y,!1,w,!0,D.t,w,C.aN(),e,w,w,w,w,w,2,C.br(w,new C.b5(4,C.n(12),D.a0),w,w,w,w,w,w,!0,w,w,w,w,w,w,D.cr,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,D.UZ,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w),D.y,!0,w,!0,w,!1,w,D.aj,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,new A.c3H(this.a,this.b,f),w,w,w,!1,w,w,!1,w,!0,w,D.aa,w,w,w,w,w,w,w,w,w,w,w,D.df,!0,D.a4,w,D.an,w,w,w,w),w)},
$S:1786}
A.c3H.prototype={
$1(d){this.c.$1(d)
this.b.ZK(this.a.a)},
$S:2}
A.c3O.prototype={
$4(d,e,f,g){var w=null,v=this.a,u=e?D.ed:D.uk
u=C.a([C.E(C.ex(C.X(u,e?D.bf:D.ac,w,w,w,w),C.d(d,w,w,w,w,w,w,D.df,w,w,w),new A.c3K(f,v),w),1)],x.p)
if(e)u.push(C.aH(w,w,w,w,D.rJ,w,w,w,new A.c3L(g,v),w,w,w,w,w,w))
return new C.D(D.cu,C.B(u,D.m,w,D.e,D.i,0,w,w),w)},
$S:1787}
A.c3K.prototype={
$0(){var w=0,v=C.j(x.H),u=this
var $async$$0=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:u.a.$0()
w=2
return C.b(C.bP(D.no,null,x.H),$async$$0)
case 2:u.b.$1(new A.c3J())
return C.h(null,v)}})
return C.i($async$$0,v)},
$S:1}
A.c3J.prototype={
$0(){},
$S:0}
A.c3L.prototype={
$0(){this.a.$0()
this.b.$1(new A.c3I())},
$S:0}
A.c3I.prototype={
$0(){},
$S:0}
A.c3w.prototype={
$0(){var w=this
w.a.a=w.b
w.c.$0()
w.d.$1(new A.c3v())},
$S:0}
A.c3v.prototype={
$0(){},
$S:0}
A.c3x.prototype={
$1(d){return this.a.b=d},
$S:2}
A.c3y.prototype={
$1(d){return this.a.c=d},
$S:2}
A.c3z.prototype={
$1(d){return this.a.d=d},
$S:2}
A.c3A.prototype={
$0(){return this.b.IV(this.a.a,!0)},
$S:0}
A.c3B.prototype={
$0(){var w=this.c
w.w=w.f=null
this.b.ZK(this.a.a)},
$S:0}
A.c3C.prototype={
$0(){return this.b.IV(this.a.a,!1)},
$S:0}
A.c3D.prototype={
$0(){var w=this.c
w.x=w.r=null
this.b.ZK(this.a.a)},
$S:0}
A.c3E.prototype={
$0(){var w=this
w.c.e=w.d
w.b.ZK(w.a.a)
w.e.$1(new A.c3u())},
$S:0}
A.c3u.prototype={
$0(){},
$S:0}
A.c3F.prototype={
$0(){var w=this,v=w.a,u=v.gzy().w.length
if((u===0?1:u)>1)v.d.cYp()
else w.b.bjD()
w.c.$0()
v.m(new A.c3s())
v.IW()
w.d.$1(new A.c3t())},
$S:0}
A.c3s.prototype={
$0(){},
$S:0}
A.c3t.prototype={
$0(){},
$S:0}
A.c3G.prototype={
$0(){C.a4(this.a,!1).O(null)
return null},
$S:0}
A.c4_.prototype={
$0(){return C.a4(this.a,!1).ih()},
$S:0}
A.c40.prototype={
$0(){var w=this.a
return w.m(new A.c3Z(w))},
$S:0}
A.c3Z.prototype={
$0(){return this.a.y=!1},
$S:0}
A.c41.prototype={
$0(){var w=this.a
return w.m(new A.c3Y(w))},
$S:0}
A.c3Y.prototype={
$0(){return this.a.y=!0},
$S:0}
A.fBM.prototype={
$1(d){return d.a===this.a},
$S:z+44}
A.fBN.prototype={
$0(){return D.d.gI(B.Re)},
$S:z+52}
A.bMt.prototype={
$1(d){return d.d.t(0,this.a.b)},
$S:z+44}
A.bMv.prototype={
$2(d,e){var w=this.a,v=this.b
return D.k.aL(w.aau(d.c,d.d,new C.z(v.c,v.d)),w.aau(e.c,e.d,new C.z(v.c,v.d)))},
$S:z+17}
A.bMw.prototype={
$1(d){return d.f==null},
$S:z+70}
A.bMs.prototype={
$2(d,e){var w,v=d.w
if(v!==e.w)return v?-1:1
v=this.a
w=this.b
return D.k.aL(v.aZZ(w,A.yO(d.c)),v.aZZ(w,A.yO(e.c)))},
$S:z+38}
A.bMx.prototype={
$2(d,e){var w=D.o.aL(e.b,d.b)
return w!==0?w:D.o.aL(e.c,d.c)},
$S:1788}
A.bMu.prototype={
$2(d,e){var w,v,u=d.w
if(u!==e.w)return u?-1:1
u=this.a
w=this.b
v=this.c
return D.k.aL(u.aau(w,v,A.yO(d.c)),u.aau(w,v,A.yO(e.c)))},
$S:z+38}
A.bKy.prototype={
$2(d,e){return(d^D.k.V(e.c)*31+D.k.V(e.d))>>>0},
$S:z+83}
A.c1H.prototype={
$2(d,e){var w,v,u,t,s=null,r=this.a,q=r.c,p=q.d>0
if(p)w=0
else{w=q.c
w=w>0?(1-w/180)*0.5:q.a}v=r.e
if(p)p="\ud83d\udc1b"
else p=q.c>0?"\ud83d\ude34":"\u26a1"
u=x.p
w=C.a([A.h2h(v,p,w)],u)
p=q.e
if(p<0.3||q.f){t=q.f
if(t)p=0.2
t=t?"\ud83e\udd12":"\ud83d\udca7"
D.d.v(w,C.a([new C.a5(s,v/4,s,s),A.h2h(v*0.7,t,p)],u))}if(r.d)D.d.v(w,C.a([new C.a5(s,v/3,s,s),A.h2h(v,"\u26fd",q.b)],u))
return C.x(w,D.m,s,D.e,D.O,0,D.p)},
$S:411}
A.fFc.prototype={
$4(d,e,f,g){var w=f+g/100
return new C.cy([d+100*Math.cos(w),e+100*Math.sin(w),-Math.sin(w),Math.cos(w)])},
$S:1789}
A.fiF.prototype={
$1(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this.b,h=A.Le(i,a0).a,g=h[0],f=h[1],e=h[2],d=h[3]
for(h=this.a,w=h.a,v=h.b,u=h.c,h=h.d,t=0;t<5;++t){s=B.cYf[t]
for(r=d*s,q=e*s,p=0;p<3;++p){o=B.dbX[p]
n=i.a==="bus"
m=n?120:95.94999999999999
l=n?33.54:31.45
k=g+q*m-d*o*l
m=n?120:95.94999999999999
n=n?33.54:31.45
j=f+r*m+e*o*n
if(k>w&&k<v&&j>u&&j<h)return!0}}return!1},
$S:115}
A.bKA.prototype={
$1(d){return d<=0?0:Math.sqrt(220*d)},
$S:5}
A.fZZ.prototype={
$7(d,e,f,g,h,i,j){return new A.fP(C.a([d,e,f,g],x.o),0,new A.h__(h),i,j,6,2,0,!1)},
$S:z+112}
A.h__.prototype={
$3(d,e,f){return A.nj(d,e,f,this.a+D.k.bf(f/7))},
$S:24}
A.fZX.prototype={
$3(d,e,f){var w=this.a,v=w.b
w=w.a
return A.vE(new A.q(d,e,f),this.b).a7(0,new A.q(v,0,w))},
$S:z+24}
A.fZY.prototype={
$2(d,e){var w=this
return A.vE(new A.q(d,e,0),w.a).a7(0,new A.q(w.b,w.c,w.d))},
$S:z+16}
A.fBk.prototype={
$8(d,e,f,g,h,i,j,k){var w=-g,v=new A.fBl(d+f*h+w*i,f,w,e+g*h+f*i,g,f),u=-j/2,t=-k/2,s=j/2,r=k/2
this.a.Cn(v.$2(u,t),v.$2(s,t),v.$2(s,r),v.$2(u,r),D.bO,B.ea)},
$S:1790}
A.fBl.prototype={
$2(d,e){var w=this
return new A.q(w.a+w.b*d+w.c*e,0.95,w.d+w.e*d+w.f*e)},
$S:z+16}
A.cB0.prototype={
$1(d){return d.d===this.a},
$S:z+31}
A.cB1.prototype={
$1(d){return d.r},
$S:z+122}
A.cB_.prototype={
$2(d,e){return D.k.aL(d.x,e.x)},
$S:z+113}
A.bKm.prototype={
$1(d){var w
if(d.r<0)w=d.e||d.c<60
else w=!1
return w},
$S:z+18}
A.bKt.prototype={
$3(d,e,f){var w=this.a
return A.nj(d,e,f,w.b.a+w.f+D.k.bf(f/7))},
$S:24}
A.bKu.prototype={
$3(d,e,f){var w=this.a
return A.nj(d,e,f,w.b.a+w.f+3+D.k.bf(f/7))},
$S:24}
A.bKv.prototype={
$3(d,e,f){var w=this.a
return A.nj(d,e,f,w.b.a+w.f+7+D.k.bf(f/7))},
$S:24}
A.bKw.prototype={
$3(d,e,f){return A.nj(d,e,f,this.a.b.a+2+D.k.bf(f/7))},
$S:24}
A.bKn.prototype={
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
r=C.bs(u.cq(-6),D.k2)
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
j.r=((t&1)===0?D.b8:D.eN).gp(0)
d.aH(q,j)
j=i===1?"L":""+i
l=C.fx(k,k,k,k,C.cS(k,k,k,k,k,k,k,k,k,C.l(k,k,D.bu,k,k,k,k,k,k,k,k,v*0.78,k,k,D.u,k,k,!0,k,k,k,k,k,k,k,k),j),D.a4,D.bY,k,D.dA,D.bW)
l.ek()
j=l.b
i=j.c
j=j.a.c
l.a3(d,new C.t(w*0.62-i/2,v/2-j.gbb(j)/2))
return k},
$S:24}
A.bKo.prototype={
$3(d,e,f){return A.nj(d,e,f,1+D.k.bf(f/7))},
$S:24}
A.bKp.prototype={
$3(d,e,f){return A.nj(d,e,f,4+D.k.bf(f/7))},
$S:24}
A.bKq.prototype={
$2(d,e){var w=this.a,v=C.T(d),u=new C.cQ(new C.Z(d,new A.bKr(w),v.k("Z<1>")),new A.bKs(w),v.k("cQ<1,G>")).cI(0,0,D.xA)
if(u===2)w="works but is NOT wired safely: open it and check every wire"
else w=u===1?"started: finish the wiring":e
return w},
$S:1791}
A.bKr.prototype={
$1(d){return!this.a.d[d]},
$S:34}
A.bKs.prototype={
$1(d){return this.a.e[d]},
$S:78}
A.bLa.prototype={
$1(d){return!d.f},
$S:z+18}
A.bL7.prototype={
$1(d){return d.b===this.a.a.a},
$S:z+19}
A.bL8.prototype={
$1(d){return d.b===this.a&&d.c===this.b},
$S:z+19}
A.bL9.prototype={
$1(d){return d.a<0},
$S:z+33}
A.bLe.prototype={
$1(d){var w,v,u,t
for(w=this.a.x,v=w.length,u=0;u<v;++u){t=w[u]
if(t.b===d)return t}return null},
$S:z+99}
A.bLc.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n=this,m=new A.bLd()
switch(d.a.a){case 0:w=n.a.$1("hospital")
if(w!=null)return new C.e5([w.c-34,w.d+52.5+26,3.141592653589793,"duty","\ud83e\ude7a On duty at the hospital"])
break
case 1:v=n.a
u=v.$1("cow")
t=u==null?v.$1("sheep"):u
if(t==null)t=v.$1("horse")
if(t!=null){v=t.c
u=v+34
s=t.d
r=s+22
return new C.e5([u,r,m.$4(u,r,v,s),"feed","\ud83c\udf3e Feeding the animals"])}break
case 2:q=n.a.$1("school")
if(q!=null)return new C.e5([q.c-24,q.d+52.5+26,3.141592653589793,"teach","\ud83d\udcda Teaching"])
break
case 3:t=n.a.$1("car")
if(t!=null)return new C.e5([t.c,t.d+34,3.141592653589793,"wash","\ud83e\uddfd Washing the car"])
break
case 4:q=n.a.$1("shop")
if(q!=null)return new C.e5([q.c+62,q.d+56,2.356194490192345,"cook","\ud83c\udf73 Cooking"])
break
case 5:p=n.a.$1("bench")
if(p!=null)return new C.e5([p.c,p.d+26,3.141592653589793,"rest","\ud83e\ude91 Resting"])
break
case 6:o=n.a.$1("flowers")
if(o!=null){v=o.c
u=v+30
s=o.d
r=s+28
return new C.e5([u,r,m.$4(u,r,v,s),"water","\ud83d\udca7 Watering the flowers"])}break}return new C.e5([-270+e*90,205,0,"",""])},
$S:z+82}
A.bLd.prototype={
$4(d,e,f,g){return Math.atan2(f-d,g-e)},
$S:270}
A.bLb.prototype={
$1(d){return d.b===this.a.a.a},
$S:z+19}
A.bLf.prototype={
$1(d){var w=d.c
return w==="bathroom"||w==="kitchen"},
$S:z+5}
A.dSv.prototype={
$0(){return this.b.d=this.a.a},
$S:0}
A.dSw.prototype={
$1(d){return this.a.c8d()},
$S:11}
A.dSI.prototype={
$0(){},
$S:0}
A.dSC.prototype={
$0(){return this.a.w=this.b},
$S:0}
A.dSD.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.dSB(w))},
$S:0}
A.dSB.prototype={
$0(){return this.a.w=null},
$S:0}
A.dSr.prototype={
$1(d){return B.aIu},
$S:z+34}
A.dSs.prototype={
$0(){},
$S:0}
A.dSL.prototype={
$1(d){return B.aIu},
$S:z+34}
A.dSM.prototype={
$0(){},
$S:0}
A.dSK.prototype={
$0(){var w=this.a
return w.m(new A.dSJ(w,this.b))},
$S:0}
A.dSJ.prototype={
$0(){return this.a.r=this.b},
$S:0}
A.dSq.prototype={
$0(){return this.a.abW(this.b)},
$S:0}
A.dSx.prototype={
$0(){return this.a.J5(this.b.bf3(this.c))},
$S:0}
A.dSy.prototype={
$0(){return this.a.J5(this.b.aL1(this.c))},
$S:0}
A.dSz.prototype={
$0(){return this.a.J5(this.b.aDC(this.c))},
$S:0}
A.dSA.prototype={
$0(){return this.a.akc(this.b)},
$S:0}
A.dSu.prototype={
$1(d){var w,v,u=null,t=this.b,s=this.c,r=t.e[s],q=t.c
q===$&&C.c()
q=q[r.a].a
w=this.a
v=x.p
s=C.B(C.a([new A.acN(q.e,44,u),D.as,C.E(C.d("Bed "+(s+1)+": "+q.b,u,u,u,u,u,u,D.hr,u,u,u),1),w.PS("\ud83d\udc89 Treat",new A.dSt(w,t,s),D.c6)],v),D.m,u,D.e,D.i,0,u,u)
t=r.b
return C.x(C.a([s,D.P,w.WE("Care",t,t<30?D.ax:D.aJ),w.WE("Getting better",r.c,D.bf)],v),D.E,u,D.e,D.i,0,D.p)},
$S:279}
A.dSt.prototype={
$0(){return this.a.J5(this.b.bkd(this.c))},
$S:0}
A.dSF.prototype={
$0(){return this.a.J5(this.b.aE7("food"))},
$S:0}
A.dSG.prototype={
$0(){return this.a.J5(this.b.aE7("medicine"))},
$S:0}
A.dSH.prototype={
$0(){var w=0,v=C.j(x.H),u,t=this,s,r
var $async$$0=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:w=3
return C.b(A.aU5(),$async$$0)
case 3:$.Ec=null
s=t.a
if(s.c==null){w=1
break}r=s.f
if(r!=null)r.a4(0)
$.a4i=null
s.m(new A.dSE(s))
s.a_3()
case 1:return C.h(u,v)}})
return C.i($async$$0,v)},
$S:1}
A.dSE.prototype={
$0(){return this.a.d=null},
$S:0}
A.dSN.prototype={
$0(){return C.a4(this.a,!1).ih()},
$S:0}
A.dSO.prototype={
$1(d){return d.a>=0},
$S:z+33}
A.fDm.prototype={
$2(d,e){var w
A:{if("black"===d){w=e.a===25?"The black wire carries the power (hot). It never goes on the green ground screw. Hot goes to a BRASS screw.":"The black (hot) wire goes on a BRASS screw, not on the silver one. Silver is for white (neutral)."
break A}if("white"===d){w=e.a===25?"The white wire is the neutral. The green screw is only for the ground wire. Neutral goes to a SILVER screw.":"The white (neutral) wire goes on a SILVER screw, not on brass. Brass is for the black (hot) wire."
break A}w="The bare copper ground wire only goes on the GREEN screw. It keeps you safe if something goes wrong."
break A}return w},
$S:z+2}
A.fDn.prototype={
$2(d,e){return d==="ground"?y.t:"A black (hot) wire never goes on the green ground screw. The two black wires go on the two BRASS screws."},
$S:z+2}
A.fDo.prototype={
$2(d,e){var w
if(e.e)w="Those are the LOAD screws. They are covered with tape because power must come in on the LINE side. If you wire the LOAD side the GFCI will not protect you."
else A:{if("black"===d){w="The black (hot) wire goes on the BRASS LINE screw."
break A}if("white"===d){w="The white (neutral) wire goes on the SILVER LINE screw."
break A}w=y.t
break A}return w},
$S:z+2}
A.fDp.prototype={
$2(d,e){var w
A:{if("black"===d){w="The black (hot) wire joins the fixture BLACK wire. Not the white one, and never the green ground."
break A}if("white"===d){w="The white (neutral) wire joins the fixture WHITE wire. Not the black one, and never the green ground."
break A}w="The bare copper ground wire joins the fixture GREEN ground wire only."
break A}return w},
$S:z+2}
A.fDq.prototype={
$2(d,e){var w
A:{if("black"===d){w="The black (hot) wire joins the fan BLACK wire. Not the white one, and never the green ground."
break A}if("white"===d){w="The white (neutral) wire joins the fan WHITE wire. Not the black one, and never the green ground."
break A}w="The bare copper ground wire joins the fan GREEN ground wire only."
break A}return w},
$S:z+2}
A.fBW.prototype={
$1(d){return d.a===this.a},
$S:z+42}
A.h_z.prototype={
$1(d){return d.a},
$S:z+59}
A.fB7.prototype={
$1(d){var w
A:{if("hot"===d){w=B.VI
break A}if("neutral"===d){w=B.VJ
break A}if("ground"===d){w=B.VK
break A}w=B.aYc
break A}return w},
$S:z+57}
A.fB8.prototype={
$1(d){var w
A:{if("hot"===d){w=B.K_
break A}if("neutral"===d){w=B.K0
break A}if("ground"===d){w=B.K1
break A}w=B.aSH
break A}return w},
$S:z+48}
A.fB5.prototype={
$1(d){return d.a===this.a.a},
$S:z+12}
A.fB6.prototype={
$1(d){return d.a===this.a.b},
$S:z+7}
A.fRR.prototype={
$1(d){return d.e==="hot"},
$S:z+7}
A.fRS.prototype={
$1(d){return d.e==="neutral"},
$S:z+7}
A.fC8.prototype={
$1(d){return D.d.b3(this.a.b,new A.fC9(d))},
$S:3}
A.fC9.prototype={
$1(d){return d.a===this.a},
$S:z+45}
A.fC5.prototype={
$2(d,e){return A.avw(e.b)>A.avw(d.b)?e:d},
$S:z+49}
A.fC6.prototype={
$1(d){return d.a===this.a.a},
$S:z+12}
A.fC7.prototype={
$1(d){return d.a===this.a.b},
$S:z+7}
A.fzl.prototype={
$5(d,e,f,g,h){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=j.a
i.b=d
w=j.b
v=w.b
u=C.a7(v).k("cI<1,2>")
t=u.k("Z<M.E>")
s=C.C(new C.Z(new C.cI(v,u),new A.fzm(g),t),t.k("M.E"))
r=g==="ground"
q=r?B.tU:h
p=r?0.6:0.3
if(w.c>0){o=e.a7(0,B.hab)
i.j8(A.ai9(C.a([e,e.a7(0,B.h86),o],x.o),4),0.12,q,!1,p,8)
return}if(s.length!==0){n=A.aQ4(j.c,D.d.gI(s).a,w)
w=A.o7(e,n,0.5)
v=n.a>0
m=w.a7(0,new A.q(v?0.5:-0.5,0.2,0.9))
w=e.a7(0,B.hew)
if(j.d)v=0
else v=v?0.06:-0.06
l=A.ai9(C.a([e,w,m,n.a7(0,new A.q(v,0,0.08)),n],x.o),5)
k=D.d.ds(l,0,D.k.bf(l.length*0.8))
i.j8(k,0.12,q,!1,p,8)
if(!r)i.j8(D.d.fL(l,k.length-1),0.08639999999999999,B.tU,!1,0.6,8)}else{l=A.ai9(C.a([e,e.a7(0,B.h4d),A.o7(e,f,0.6),f],x.o),5)
k=r?l:D.d.ds(l,0,D.k.bf(l.length*0.86))
i.j8(k,0.12,q,!1,p,8)
if(!r)i.j8(D.d.fL(l,k.length-1),0.08639999999999999,B.tU,!1,0.6,8)}},
$S:z+50}
A.fzm.prototype={
$1(d){return d.b===this.a},
$S:712}
A.fkq.prototype={
$2(d,e){var w,v=this.a
v.b=d
w=A.Dj(e,0.9,6)
if(this.b)v.j8(w,0.2,B.Yv,!1,0.35,10)
this.c.push(D.d.gak(w))},
$S:z+51}
A.h_y.prototype={
$1(d){return d.a===this.a},
$S:z+42}
A.flK.prototype={
$6$taped(d,e,f,g,h,i){var w,v,u,t=this.a
t.e=0.9
t.b=d
w=this.b
v=w.a+e*0.75
u=w.b+f
w=w.c-0.45
t.aV(new A.q(v,u,w),B.hg1,h,0.7)
t.dR(new A.q(v,u,w),new A.q(v+e*0.22,u,w),0.17,g,0.9,12)
t.aJ(new A.q(v+e*0.23,u,w),B.hco,B.xP)
if(i)t.aV(new A.q(v+e*0.05,u,w),B.hce,D.bu,0.2)},
$5(d,e,f,g,h){return this.$6$taped(d,e,f,g,h,!1)},
$S:1793}
A.frh.prototype={
$5(d,e,f,g,h){var w=new A.fri(this.a,d,Math.cos(h),Math.sin(h),e),v=-f/2,u=-g/2,t=f/2,s=g/2
this.b.Cn(w.$2(v,u),w.$2(t,u),w.$2(t,s),w.$2(v,s),B.ahL,B.ig)},
$4(d,e,f,g){return this.$5(d,e,f,g,0)},
$S:1794}
A.fri.prototype={
$2(d,e){var w=this,v=w.a,u=w.c,t=w.d
return new A.q(v.a+w.b+d*u-e*t,v.b+w.e+d*t+e*u,v.c+0.5+0.012)},
$S:z+16}
A.frg.prototype={
$2(d,e){var w=this.b
return this.a.dE(w.a7(0,new A.q(d,e,0.5)),w.a7(0,new A.q(d,e,0.512)),0.065,B.ahL,12)},
$S:199}
A.frf.prototype={
$2(d,e){var w=this.a
w.$4(d,e,0.075,0.3)
w.$4(d+0.09,e-0.115,0.2,0.075)},
$S:199}
A.fy2.prototype={
$5(d,e,f,g,h){var w,v,u,t=this.a
t.e=0.9
t.b=d
w=this.b
v=w.a+e
u=w.b+f
w=w.c
t.dR(new A.q(v,u,w+0.43),new A.q(v,u,w+0.78),0.3,g,0.9,14)
w+=0.79
t.aJ(new A.q(v,u,w),B.h76,B.xP)
t.aJ(new A.q(v,u,w),B.haF,B.xP)},
$S:1795}
A.fDr.prototype={
$2(d,e){var w
if(d==="ground")w=y.t
else w=e.a===25?y.T:"A double-pole switch has two LINE screws on top (power in) and two LOAD screws on the bottom (power out to the heater). Each leg goes straight down the same side: left leg on the left screws, right leg on the right ones."
return w},
$S:z+2}
A.fDs.prototype={
$2(d,e){var w
if(d==="ground")w=y.t
else if(e.a===25)w=y.T
else w=d==="common"?"The COMMON wire does not go on a traveler screw. It goes on the odd-coloured COMMON screw.":"The travelers go on the two brass TRAVELER screws. The COMMON screw is for the black power wire only."
return w},
$S:z+2}
A.fDt.prototype={
$2(d,e){var w
if(d==="ground")w=y.t
else w=e.a===25?"A traveler never goes on the green ground screw.":"A four-way has a pair of screws for the travelers coming IN (top) and a pair for the travelers going OUT (bottom). Do not mix the two pairs."
return w},
$S:z+2}
A.fDu.prototype={
$2(d,e){var w
A:{if("ground"===d){w=y.t
break A}if("neutral"===d){w="The white neutral wire goes on the silver NEUTRAL screw only."
break A}if(e.a===25)w=y.T
else w=d==="line"?"The wire from the panel is the LINE: it goes on the LINE screw.":"The wire to the light is the LOAD: it goes on the LOAD screw."
break A}return w},
$S:z+2}
A.fDv.prototype={
$2(d,e){var w
if(d==="ground")w=y.t
else if(e.a===25)w=y.T
else w=d==="feed"?"The feed goes on the FEED screw, where the two switches are joined.":"The wires to the lights go on the separate screws, one for each switch."
return w},
$S:z+2}
A.fDw.prototype={
$2(d,e){var w,v=y.T
A:{if("ground"===d){w=y.t
break A}if("neutral"===d){w="The white neutral wire goes on a SILVER screw."
break A}if("always"===d){w=e.a===25?v:"The always-hot wire goes on the BOTTOM brass screw. The top one is for the switched wire."
break A}w=e.a===25?v:"The switched hot wire (red) goes on the TOP brass screw."
break A}return w},
$S:z+2}
A.fDx.prototype={
$2(d,e){var w
A:{if("ground"===d){w=y.t
break A}if("neutral"===d){w=y.I
break A}w=e.a===25?y.T:y.S
break A}return w},
$S:z+2}
A.fDy.prototype={
$2(d,e){return d==="neutral"?y.I:"The black and red hot wires go on the two brass screws, X and Y."},
$S:z+2}
A.fDz.prototype={
$2(d,e){var w
if(d==="ground")w=y.t
else w=e.a===25?y.T:"Both hot wires go on the two brass screws."
return w},
$S:z+2}
A.fDA.prototype={
$2(d,e){var w
A:{if("isoground"===d){w="The isolated ground wire only goes on the green screw with the orange triangle."
break A}if("neutral"===d){w=y._
break A}w=e.a===25?"A hot wire never goes on the ground screw.":y.u
break A}return w},
$S:z+2}
A.fDf.prototype={
$2(d,e){return A.fkc(d,e,!0)},
$S:z+2}
A.fDg.prototype={
$2(d,e){return A.fkc(d,e,!1)},
$S:z+2}
A.fDh.prototype={
$2(d,e){return A.fkc(d,e,!0)},
$S:z+2}
A.fDi.prototype={
$2(d,e){return A.fkc(d,e,!1)},
$S:z+2}
A.fDj.prototype={
$2(d,e){var w
A:{if("ground"===d){w=y.t
break A}if("neutral"===d){w=y._
break A}w=e.a===25?y.T:y.u
break A}return w},
$S:z+2}
A.fDk.prototype={
$2(d,e){var w
A:{if("neutral"===d){w="The white neutral wire goes on the MIDDLE terminal, the one with the ground strap."
break A}if("hot1"===d){w=y.J
break A}w="The red wire goes on the RIGHT terminal."
break A}return w},
$S:z+2}
A.fDl.prototype={
$2(d,e){var w
A:{if("ground"===d){w="The green ground wire goes on the frame screw, where the strap was."
break A}if("neutral"===d){w="The white neutral wire goes on the MIDDLE terminal."
break A}if("hot1"===d){w=y.J
break A}w="The red wire goes on the RIGHT terminal."
break A}return w},
$S:z+2}
A.fz7.prototype={
$1(d){return d.a===this.a},
$S:z+26}
A.fz8.prototype={
$0(){return B.amy},
$S:z+53}
A.h_v.prototype={
$1(d){var w=d>60?62:99
return Math.min(d*0.5625,w)},
$S:5}
A.h_s.prototype={
$1(d){return d>40?30+d/2:58},
$S:5}
A.h_t.prototype={
$2(d,e){return D.k.aL(d.a,e.a)},
$S:1796}
A.h_u.prototype={
$2(d,e){var w=this.a
if(e-d>w.a-w.b){w.b=d
w.a=e}},
$S:199}
A.bUu.prototype={
$1(d){return d},
$S:116}
A.bUt.prototype={
$1(d){return B.f4P.t(0,d.b)},
$S:z+4}
A.bV4.prototype={
$1(d){return d.a==="Jobs"},
$S:z+55}
A.bV5.prototype={
$1(d){return new A.oq(!1,"back",d,5)},
$S:z+56}
A.bV6.prototype={
$4(d,e,f,g){return!D.d.b3(this.a.x,new A.bV7(d,f,e,g))},
$2(d,e){return this.$4(d,e,135,115)},
$3(d,e,f){return this.$4(d,e,f,115)},
$S:1797}
A.bV7.prototype={
$1(d){var w=this,v=d.b
return!D.d.t(B.a5f,v)&&!D.d.t(B.I4,v)&&Math.abs(d.c-w.a)<w.b&&Math.abs(d.d-w.c)<w.d},
$S:z+4}
A.bV8.prototype={
$4(d,e,f,g){var w,v,u,t,s,r,q,p,o,n
for(w=this.a,v=w.length,u=f/2+90,t=g/2+20,s=0;s<v;++s){r=w[s]
if(Math.abs(r.c-d)<u){q=r.d
p=q>e?70:30
p=Math.abs(q-e)<t+p
q=p}else q=!1
if(q)return!1}for(w=this.b.x,v=w.length,s=0;s<w.length;w.length===v||(0,C.L)(w),++s){o=w[s]
u=o.b
if(D.d.t(B.RT,u)||u==="roundabout"||u==="rug"||u==="flowers")continue
n=B.hC.h(0,u)
if(Math.abs(o.c-d)<(f+n.c)/2+130){u=o.d
t=n.d
q=u>e?150:110
q=Math.abs(u-e)<(g+t)/2+q
u=q}else u=!1
if(u)return!1}return!0},
$S:713}
A.bVc.prototype={
$4(d,e,f,g){var w,v,u,t,s,r,q,p,o,n,m,l,k,j
if(Math.abs(d)>1150||e<-600||e>1450)return!1
for(w=this.a.x,v=w.length,u=f/2+40,t=g/2+40,s=0;s<w.length;w.length===v||(0,C.L)(w),++s){r=w[s]
q=r.b
if(q==="rug"||q==="flowers"||q==="pond")continue
p=B.hC.h(0,q)
p.toString
o=(r.e&1)===1
n=o?p.d:p.c
m=o?p.c:p.d
if(Math.abs(r.c-d)<(f+n)/2+34&&Math.abs(r.d-e)<(g+m)/2+34)return!1
if(B.f51.t(0,q)){l=r.e*3.141592653589793/2
q=r.c
o=Math.sin(l)
p=p.d/2+30
k=r.d
j=Math.cos(l)
if(Math.abs(q+o*p-d)<u&&Math.abs(k+j*p-e)<t)return!1}}return!0},
$S:713}
A.bV9.prototype={
$3(d,e,f){var w,v,u,t,s,r,q,p,o,n={},m=B.hC.h(0,d)
m.toString
w=n.a=0
v=this.a
u=new A.bVb(n,v,d)
for(t=f.length,s=this.b,r=m.c,m=m.d;w<t;++w){q=f[w]
p=q.a
o=q.b
if(n.a>=e)return
if(s.$4(p,o,r,m))u.$2(p,o)}v=v.x
o=-500
for(;;){if(!(o<1400&&n.a<e))break
p=-1100
for(;;){if(!(p<=1100&&n.a<e))break
A:{if(D.d.b3(v,new A.bVa(d,p,o)))break A
if(s.$4(p,o,r,m))u.$2(p,o)}p+=110}o+=100}},
$S:1799}
A.bVb.prototype={
$2(d,e){var w=this.b,v=this.c
w.dz(0,v,d,e)
if(v==="ubstation")w.dz(0,"car",d+96,e+6);++this.a.a},
$S:199}
A.bVa.prototype={
$1(d){return d.b===this.a&&Math.abs(d.c-this.b)<420&&Math.abs(d.d-this.c)<420},
$S:z+4}
A.bVg.prototype={
$1(d){return d.gkO()},
$S:z+5}
A.bVf.prototype={
$1(d){var w=d.c
return(w==="bathroom"||w==="kitchen")&&d.gjR()},
$S:z+5}
A.bVe.prototype={
$1(d){var w=d.c
return w==="bathroom"||w==="kitchen"},
$S:z+5}
A.bVd.prototype={
$1(d){return d.gkO()&&d.gjR()},
$S:z+5}
A.eed.prototype={
$1(d){return!(d.gkO()&&d.gjR())},
$S:z+5}
A.eea.prototype={
$1(d){var w,v=this.a.a.f
A:{if("wiring"===v){w=!d.gkO()
break A}if("plumbing"===v){w=!d.gjR()
break A}w=!(d.gkO()&&d.gjR())
break A}return w},
$S:z+5}
A.eeb.prototype={
$1(d){var w,v,u,t,s,r,q=this.a,p=q.ghD()
if(Date.now()<0){if(q.c!=null)q.m(new A.ee9())
return}if(p==null||q.c==null||q.cx!=null||q.bZ>0)return
w=q.d
w===$&&C.c()
v=w.d
v===$&&C.c()
u=p.bfe(w,v[w.e].a)
w=C.a([],x.s)
for(v=u.length,t=0;t<u.length;u.length===v||(0,C.L)(u),++t){s=u[t]
w.push(""+s.a+":"+D.k.V(s.c)+":"+D.k.V(s.d)+":"+s.x+":"+s.Q)}r=D.d.aG(w,"|")
if(q.aK==null&&r!==q.du){q.du=r
q.m(q.giY())}w=p.f
if(w.length!==0&&D.d.gI(w)!==q.fy){w=D.d.gI(w)
q.fy=w
q.iJ(w)}},
$S:11}
A.ee9.prototype={
$0(){},
$S:0}
A.eec.prototype={
$1(d){var w,v=this.a
if(v.c==null)return
w=v.d
w===$&&C.c()
if(w.a.length!==0)v.iJ(v.c26())
else{w=v.a.f
if(w.length!==0){A:{if("wiring"===w){w="This room needs wiring: press the Wiring button, or tap the red outlet or the light."
break A}if("plumbing"===w){w="This room needs plumbing: press the Plumbing button, or tap the toilet or the sink."
break A}w="Walk through the house and fix what the signs say is wrong."
break A}v.iJ(w)}}},
$S:8}
A.ecX.prototype={
$0(){var w=this.a
w.ax=this.b
w.ay=this.c},
$S:0}
A.ecY.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.ecW(w))},
$S:0}
A.ecW.prototype={
$0(){return this.a.ax=null},
$S:0}
A.ecZ.prototype={
$0(){var w=this.a
w.r=this.b
w.Q=0
w.as=-1
w.at=0
w.iI()},
$S:0}
A.ebu.prototype={
$0(){var w=this.a,v=w.d
v===$&&C.c()
v.e=this.b
w.Q=0
w.as=-1
w.at=0
w.ax=null
w.iI()},
$S:0}
A.edq.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.d
w===$&&C.c()
u=w[u.e]
u.fy=!u.fy
v.iI()},
$S:0}
A.ecr.prototype={
$0(){return this.a.k3=!0},
$S:0}
A.ecs.prototype={
$0(){var w=this.a,v=this.b
w.Q=v-100
w.at=v
w.iI()},
$S:0}
A.ect.prototype={
$0(){var w=this.a,v=this.b
w.as=v-300
w.at=v},
$S:0}
A.ecu.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&C.c()
w=t.d
w===$&&C.c()
v=this.b
if(!w[t.e].at.W(0,v)){t=u.d
w=t.d
w===$&&C.c()
w[t.e].at.M(0,v)}u.iI()},
$S:0}
A.ecv.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.d
w===$&&C.c()
w[u.e].p2=!0
v.iI()},
$S:0}
A.eaY.prototype={
$1(d){var w,v,u,t,s,r=this,q=null,p=C.d("Door to "+r.b,q,q,q,q,q,q,D.dd,q,q,q),o=r.a,n=o.d
n===$&&C.c()
w=n.d
w===$&&C.c()
v=r.c
u=C.d(w[n.e].at.t(0,v)?"The door is open.":"The door is closed.",q,q,q,q,q,q,D.lR,q,q,q)
n=o.d
w=n.d
w===$&&C.c()
t=C.X(w[n.e].at.t(0,v)?B.bL8:B.bLk,q,q,q,q,q)
n=o.d
w=n.d
w===$&&C.c()
s=x.p
return C.bm(!0,new C.D(D.bQ,C.x(C.a([p,D.au,u,D.ae,C.bX(D.bG,C.a([C.dl(t,C.d(w[n.e].at.t(0,v)?"Close the door":"Open the door",q,q,q,q,q,q,q,q,q,q),new A.eaW(o,d,v),q),C.ex(D.apR,B.fF6,new A.eaX(o,d,v,r.d),q)],s),D.bq,q,10,10)],s),D.E,q,D.e,D.O,0,D.p),q),!0,!1,D.af,!0,!0)},
$S:27}
A.eaW.prototype={
$0(){var w,v,u
C.a4(this.b,!1).O(null)
w=this.a
v=this.c
w.m(new A.eaV(w,v))
w=w.d
w===$&&C.c()
u=w.d
u===$&&C.c()
A.fR(u[w.e].at.t(0,v)?700:450,70,0.25,"tri")},
$S:0}
A.eaV.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&C.c()
w=t.d
w===$&&C.c()
v=this.b
if(!w[t.e].at.W(0,v)){t=u.d
w=t.d
w===$&&C.c()
w[t.e].at.M(0,v)}u.iI()},
$S:0}
A.eaX.prototype={
$0(){var w,v,u=this
C.a4(u.b,!1).O(null)
w=u.a
v=u.c
w.m(new A.eaT(w,v))
A.fR(700,70,0.25,"tri")
C.bP(D.mF,new A.eaU(w,v,u.d),x.P)},
$S:0}
A.eaT.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.d
w===$&&C.c()
w[u.e].at.M(0,this.b)
v.iI()},
$S:0}
A.eaU.prototype={
$0(){var w=this.a
if(w.c==null)return
w.m(new A.eaS(w,this.b))
w.AB(this.c)},
$S:12}
A.eaS.prototype={
$0(){var w,v=this.a.d
v===$&&C.c()
w=v.d
w===$&&C.c()
return w[v.e].at.W(0,this.b)},
$S:0}
A.eb6.prototype={
$0(){return this.a.eu=!0},
$S:0}
A.eb7.prototype={
$0(){var w=this.a
w.f2=!0
w.fB=!1
w.R8=!w.p4},
$S:0}
A.eb8.prototype={
$0(){var w=this.a
w.R8=w.f2=!1},
$S:0}
A.eck.prototype={
$2(d,e){var w=null,v=D.w.j(0.55),u=C.K(D.bU,D.r,1)
return C.aA(w,C.p(w,C.X(d,D.c,w,w,w,22),D.f,w,w,new C.o(v,w,u,w,w,w,D.a6),w,44,w,D.Gg,w,w,w,44),D.y,!1,w,new A.ecm(this.a),w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,e,w,w,w,w,w,w,!1,D.a3)},
$S:448}
A.ecm.prototype={
$0(){var w=this.a
return w.m(new A.ecl(w))},
$S:0}
A.ecl.prototype={
$0(){return this.a.fB=!0},
$S:0}
A.ecn.prototype={
$0(){var w=this.a
return w.m(new A.ecj(w))},
$S:0}
A.ecj.prototype={
$0(){return this.a.fB=!1},
$S:0}
A.eco.prototype={
$0(){var w=this.a
return w.p4?w.a2P():w.m(new A.eci(w))},
$S:0}
A.eci.prototype={
$0(){return this.a.R8=!0},
$S:0}
A.ecp.prototype={
$0(){var w=this.a
return w.m(new A.ech(w))},
$S:0}
A.ech.prototype={
$0(){var w=this.a
return w.ha=!w.ha},
$S:0}
A.ecq.prototype={
$0(){var w=this.a
return w.m(new A.ecg(w))},
$S:0}
A.ecg.prototype={
$0(){return this.a.ai=!0},
$S:0}
A.eay.prototype={
$0(){var w=this.a
return w.m(new A.eaz(w))},
$S:0}
A.eaz.prototype={
$0(){return this.a.ai=!1},
$S:0}
A.ebi.prototype={
$2(d,e){var w=null,v=D.w.j(0.55),u=C.K(D.bU,D.r,1)
return C.aA(w,C.p(w,C.X(d,D.c,w,w,w,20),D.f,w,w,new C.o(v,w,u,w,w,w,D.a6),w,40,w,D.iE,w,w,w,40),D.y,!1,w,new A.ebk(this.a),w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,e,w,w,w,w,w,w,!1,D.a3)},
$S:448}
A.ebk.prototype={
$0(){var w=this.a
return w.m(new A.ebj(w))},
$S:0}
A.ebj.prototype={
$0(){return this.a.fB=!0},
$S:0}
A.ebl.prototype={
$0(){var w=this.a
return w.m(new A.ebh(w))},
$S:0}
A.ebh.prototype={
$0(){return this.a.fB=!1},
$S:0}
A.ebm.prototype={
$0(){var w,v,u=this.a
u.m(new A.ebg(u))
w=u.d
w===$&&C.c()
v=w.d
v===$&&C.c()
if(v[w.e].c!=="outside")u.y0()},
$S:0}
A.ebg.prototype={
$0(){return this.a.eu=!1},
$S:0}
A.ebn.prototype={
$0(){var w=this.a
return w.m(new A.ebf(w))},
$S:0}
A.ebf.prototype={
$0(){var w=this.a
return w.ab=w.ab===1?3:1},
$S:0}
A.ebo.prototype={
$0(){var w=this.a
return w.m(new A.ebe(w))},
$S:0}
A.ebe.prototype={
$0(){var w=this.a
return w.ha=!w.ha},
$S:0}
A.ebp.prototype={
$0(){var w=this.a
return w.m(new A.ebd(w))},
$S:0}
A.ebd.prototype={
$0(){return this.a.ai=!0},
$S:0}
A.ebq.prototype={
$0(){var w=this.a
return w.p4?w.a2P():w.m(new A.ebc(w))},
$S:0}
A.ebc.prototype={
$0(){return this.a.R8=!0},
$S:0}
A.edo.prototype={
$2$mine(d,e){var w=null,v=e?D.a8:D.a5,u=e?D.bl:D.e7,t=C.n(18)
return new C.bM(v,w,w,C.p(w,C.d(d,w,w,w,w,w,w,B.aTG,w,w,w),D.f,w,B.ad9,new C.o(u,w,w,t,w,w,D.n),w,w,w,D.cu,D.iq,w,w,w),w)},
$1(d){return this.$2$mine(d,!1)},
$S:1800}
A.edp.prototype={
$1(d){var w=this,v=null,u=w.b,t=u.b,s=x.p,r=C.B(C.a([C.ha(u.e.c,v,C.d(t[0],v,v,v,v,v,v,D.iu,v,v,v),v,18),D.as,C.d(t,v,v,v,v,v,v,D.k6,v,v,v),D.b2,B.fQN],s),D.m,v,D.e,D.i,0,v,v),q=w.c,p=w.d,o=q.$1("Hi, it's "+t+". "+p.d),n=w.e,m="Please come to "+n,l=w.a
return C.bm(!0,new C.D(Ac.yp,C.x(C.a([r,A8.N6,o,q.$1(p.c==="power"?m+" and fix the wiring. I can't stay in the dark.":m+" and fix the leak before it floods."),q.$1("I'll pay "+p.e+" points. Thank you!"),q.$2$mine("On my way!",!0),D.am,C.bX(D.bG,C.a([C.dl(B.bVS,C.d("Show me where "+t+" is",v,v,v,v,v,v,v,v,v,v),new A.edm(l,d,p,u),v),C.dl(B.bYL,C.d("Go and fix it ("+n+")",v,v,v,v,v,v,v,v,v,v),new A.edn(l,d,w.f,n),v)],s),D.bq,v,8,10)],s),D.E,v,D.e,D.O,0,D.p),v),!0,!1,D.af,!0,!0)},
$S:27}
A.edm.prototype={
$0(){var w,v,u,t,s=this
C.a4(s.b,!1).O(null)
w=s.a
v=w.fr
u=C.T(v).k("Z<1>")
t=C.C(new C.Z(v,new A.edl(s.c),u),u.k("M.E"))
if(t.length!==0){v=w.d
v===$&&C.c()
u=v.d
u===$&&C.c()
v=u[v.e].c==="outside"}else v=!1
if(v){v=w.e
v===$&&C.c()
v.xl(160,new A.q(D.d.gI(t).c,30,D.d.gI(t).d))}w.eh(s.d.b+" is the one with the phone sign.",!0)},
$S:0}
A.edl.prototype={
$1(d){return d.a===this.a.b},
$S:z+14}
A.edn.prototype={
$0(){var w,v=this
C.a4(v.b,!1).O(null)
w=v.a
if(w.aN)w.a2Q()
w.eu=!1
w.AB(v.c)
w.eh("You are in "+v.d+". Fix the problem with the Wiring or Plumbing button.",!0)},
$S:0}
A.ebI.prototype={
$0(){var w=this.a
w.x=!0
w.z=!1
w.r="ceiling"
w.iI()},
$S:0}
A.e9x.prototype={
$1(d){return d.c==="outside"},
$S:z+5}
A.edR.prototype={
$1(d){return d.c==="outside"},
$S:z+5}
A.e9Y.prototype={
$0(){},
$S:0}
A.ebD.prototype={
$0(){var w=this.a
return w.m(new A.ebC(w))},
$S:0}
A.ebC.prototype={
$0(){return this.a.id=!1},
$S:0}
A.ebE.prototype={
$0(){var w=this.a
return w.m(new A.ebB(w))},
$S:0}
A.ebB.prototype={
$0(){return this.a.id=!1},
$S:0}
A.edS.prototype={
$1(d){var w=this.b
return d.d===this.a.aqB(w.f,w.r)},
$S:z+31}
A.edQ.prototype={
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
$S:z+17}
A.ed2.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=d.a==="tank"?A.h9v(l.a.c5.b):d.e,i=l.b
i=i==null?k:i.r
w=(i==null?0:i)>=j
i=l.c
v=i?112:1/0
u=i?8:12
t=i?8:10
s=D.c.j(0.07)
r=C.n(16)
q=C.K(w?D.bu.j(0.5):D.bC,D.r,1)
p=d.b
o=d.c
n=d.d
if(i){i=C.d(p,k,k,k,k,k,k,D.x1,k,k,k)
o=C.d(o,k,1,D.a1,k,k,k,D.Kn,D.K,k,k)
n=C.d(n,k,2,D.a1,k,k,k,B.fmm,D.K,k,k)
p=w?D.bu:D.bC
m=C.n(12)
i=C.x(C.a([i,D.bF,o,n,D.fG,C.p(k,C.d(""+j+" \u2b50",k,k,k,k,k,k,C.l(k,k,w?D.w:D.bU,k,k,k,k,k,k,k,k,13,k,k,D.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),D.f,k,k,new C.o(p,k,k,m,k,k,D.n),k,k,k,k,D.Gj,k,k,k)],x.p),D.m,k,D.e,D.O,0,D.p)}else{i=C.d(p,k,k,k,k,k,k,D.nJ,k,k,k)
p=x.p
n=C.E(C.x(C.a([C.d(o,k,k,k,k,k,k,D.nH,k,k,k),C.d(n,k,k,k,k,k,k,B.aT8,k,k,k)],p),D.E,k,D.e,D.i,0,D.p),1)
o=w?D.bu:D.bC
m=C.n(14)
i=C.B(C.a([i,D.as,n,C.p(k,C.d(""+j+" \u2b50",k,k,k,k,k,k,C.l(k,k,w?D.w:D.bU,k,k,k,k,k,k,k,k,k,k,k,D.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),D.f,k,k,new C.o(o,k,k,m,k,k,D.n),k,k,k,k,D.nr,k,k,k)],p),D.m,k,D.e,D.i,0,k,k)}return C.aA(k,C.p(k,i,D.f,k,k,new C.o(s,k,q,r,k,k,D.n),k,k,k,D.cu,new C.Q(u,t,u,t),k,k,v),D.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new A.ed3(l.a,d),k,k,k,k,k,k,!1,D.a3)},
$S:z+124}
A.ed3.prototype={
$0(){return this.a.aPz(this.b)},
$S:0}
A.ed1.prototype={
$2(d,e){var w,v,u,t=null,s=x.p,r=C.a([new C.D(B.bxU,C.d(d,t,t,t,t,t,t,B.fsF,t,t,t),t)],s)
if(this.a){s=C.a([],s)
for(w=e.length,v=this.b,u=0;u<w;++u)s.push(v.$1(e[u]))
r.push(C.bX(D.bG,s,D.bq,t,0,8))}else for(s=e.length,w=this.b,u=0;u<s;++u)r.push(w.$1(e[u]))
return C.x(r,D.E,t,D.e,D.O,0,D.p)},
$S:z+63}
A.ed0.prototype={
$0(){var w=this.a
return w.m(new A.ed_(w))},
$S:0}
A.ed_.prototype={
$0(){return this.a.k2=!1},
$S:0}
A.ec1.prototype={
$2(d,e){var w=null,v=e.j(0.2),u=C.n(10)
return C.p(w,C.d(d,w,w,w,w,w,w,C.l(w,w,e,w,w,w,w,w,w,w,w,11.5,w,w,D.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),D.f,w,w,new C.o(v,w,w,u,w,w,D.n),w,w,w,w,D.fP,w,w,w)},
$S:1801}
A.ec2.prototype={
$1(d){return B.hC.h(0,d.b).a},
$S:z+64}
A.ebZ.prototype={
$1(d){var w,v,u,t,s=this,r=null,q=d.c,p=A.yO(q),o=D.k.V(Math.sqrt(Math.pow(p.a-s.b,2)+Math.pow(p.b-s.c,2))/10),n=D.c.j(0.07),m=C.n(16),l=C.K(D.bC,D.r,1),k=d.b,j=C.d(A.L9(k).b,r,r,r,r,r,r,D.nJ,r,r,r),i=s.d
k=C.d(d.w?"\ud83d\ude91 "+A.L9(k).c+": "+C.w(i.$1(q))+" \u2192 "+C.w(i.$1(d.d))+" (somebody was run over)":A.L9(k).c+": "+C.w(i.$1(q))+" \u2192 a house",r,r,r,r,r,r,B.aUE,r,r,r)
w=s.e
v=w.$2(""+d.e+" points",D.bu)
u=w.$2(""+o+" m to the shop",D.aJ)
p=A.yO(q)
t=A.yO(d.d)
q=x.p
w=C.E(C.x(C.a([k,D.cS,C.bX(D.bG,C.a([v,u,w.$2(""+D.k.V(Math.sqrt(Math.pow(p.a-t.a,2)+Math.pow(p.b-t.b,2))/10)+" m trip",D.bf)],q),D.bq,r,0,6)],q),D.E,r,D.e,D.i,0,D.p),1)
k=s.f!=null
i=k?r:new A.ec0(s.a,s.r,d,i)
v=k?D.bC:D.bu
u=C.n(14)
return C.p(r,C.B(C.a([j,D.as,w,D.ad,C.aA(r,C.p(r,C.d("Take",r,r,r,r,r,r,C.l(r,r,k?D.bU:D.w,r,r,r,r,r,r,r,r,r,r,r,D.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),D.f,r,r,new C.o(v,r,r,u,r,r,D.n),r,r,r,r,D.iq,r,r,r),D.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,i,r,r,r,r,r,r,!1,D.a3)],q),D.m,r,D.e,D.i,0,r,r),D.f,r,r,new C.o(n,r,l,m,r,r,D.n),r,r,r,D.cu,D.bT,r,r,r)},
$S:z+65}
A.ec0.prototype={
$0(){var w=this,v=w.c,u=w.a
if(w.b.cYU(0,v,u.CW.gir()/1000)){u.m(new A.ec_(u))
if(!u.aN)u.a2M()
u.eh(A.L9(v.b).b+" Order taken: go to the "+w.d.$1(v.c).toLowerCase()+" (follow the yellow line), then to the house.",!0)}},
$S:0}
A.ec_.prototype={
$0(){return this.a.go=!1},
$S:0}
A.ebX.prototype={
$0(){var w=this.a
return w.m(new A.ebW(w))},
$S:0}
A.ebW.prototype={
$0(){return this.a.go=!1},
$S:0}
A.ebY.prototype={
$0(){var w=this.a
return w.m(new A.ebV(w,this.b))},
$S:0}
A.ebV.prototype={
$0(){this.b.a4(0)
this.a.eh("Order given back.",!0)},
$S:0}
A.ebr.prototype={
$0(){return this.a.k3=!1},
$S:0}
A.ebs.prototype={
$0(){return this.a.k3=!1},
$S:0}
A.ecT.prototype={
$0(){return A.fR(1175,220,0.3,"tri")},
$S:0}
A.eb4.prototype={
$0(){var w=this.a
return w.m(new A.eb3(w))},
$S:0}
A.eb3.prototype={
$0(){return this.a.k3=!1},
$S:0}
A.eb5.prototype={
$0(){return this.a.bUb(this.b)},
$S:0}
A.eaR.prototype={
$4(d,e,f,g){var w=-d,v=this.a
return 0.5*(2*e+(w+f)*v+(2*d-5*e+4*f-g)*v*v+(w+3*e-3*f+g)*v*v*v)},
$S:270}
A.ebJ.prototype={
$1(d){return d.c==="outside"},
$S:z+5}
A.ed4.prototype={
$0(){var w=this.a
w.R8=!1
w.y1=null
w.p4=!0
w.rx=this.b
w.ry=-1},
$S:0}
A.eb2.prototype={
$2(d,e){return d[D.o.E(e,0,d.length-1)]},
$S:z+66}
A.edg.prototype={
$0(){var w=this.a
w.p4=!1
w.aK=null
w.iI()},
$S:0}
A.eb0.prototype={
$4(d,e,f,g){var w=null,v=D.c.j(0.07),u=C.n(16),t=C.K(D.bC,D.r,1),s=x.p
return C.aA(w,C.p(w,C.B(C.a([C.d(d,w,w,w,w,w,w,D.nJ,w,w,w),D.bb,C.E(C.x(C.a([C.d(e,w,w,w,w,w,w,D.hr,w,w,w),C.d(f,w,w,w,w,w,w,D.hq,w,w,w)],s),D.E,w,D.e,D.i,0,D.p),1),A3.P8],s),D.m,w,D.e,D.i,0,w,w),D.f,w,w,new C.o(v,w,t,u,w,w,D.n),w,w,w,D.jy,D.bg,w,w,w),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new A.eb1(this.a,g),w,w,w,w,w,w,!1,D.a3)},
$S:1802}
A.eb1.prototype={
$0(){return this.a.cz_(this.b)},
$S:0}
A.eb_.prototype={
$0(){var w=this.a
return w.m(new A.eaZ(w))},
$S:0}
A.eaZ.prototype={
$0(){return this.a.R8=!1},
$S:0}
A.eby.prototype={
$1(d){return d.c==="outside"},
$S:z+5}
A.edf.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&C.c()
w=t[this.b]
v=u.at.h(0,w.a)
if(v==null||!A.h59(w.b,v.a))return 0
return v.b.c<2?1:2},
$S:98}
A.ee4.prototype={
$1(d){return d},
$S:116}
A.eaA.prototype={
$1(d){return d},
$S:116}
A.ebv.prototype={
$0(){var w=A.csM(0,null,!1,this.a.a*13+5+this.b.f,!0)
w.amh()
return w},
$S:z+67}
A.ebw.prototype={
$1(d){return A.cin(!1,!1,this.a,!1)},
$S:z+41}
A.ebx.prototype={
$1(d){return d.length!==0},
$S:3}
A.eba.prototype={
$0(){return new A.CA(C.U(x.S,x.N))},
$S:z+69}
A.ebb.prototype={
$1(d){return new A.E_("light",this.a,null)},
$S:z+27}
A.ebL.prototype={
$1(d){return d.c==="outside"},
$S:z+5}
A.ebM.prototype={
$0(){return this.a.y1=this.b},
$S:0}
A.ea4.prototype={
$1(d){var w=null
return new C.bM(D.a5,w,w,C.p(w,C.d(d,w,w,w,w,w,w,B.aTG,w,w,w),D.f,w,B.ad9,B.b5K,w,w,w,D.cu,D.iq,w,w,w),w)},
$S:137}
A.ea3.prototype={
$5$primary(d,e,f,g,h){var w=null,v=h?f:f.j(0.14),u=C.n(16),t=C.K(f,D.r,1),s=C.X(d,h?D.w:f,w,w,w,21)
return C.aA(w,C.p(w,C.B(C.a([s,D.ad,C.d(e,w,w,w,w,w,w,C.l(w,w,h?D.w:D.c,w,w,w,w,w,w,w,w,14.5,w,w,D.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),D.m,w,D.b9,D.i,0,w,w),D.f,w,w,new C.o(v,w,t,u,w,w,D.n),w,48,w,D.jy,w,w,w,w),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,!1,D.a3)},
$4(d,e,f,g){return this.$5$primary(d,e,f,g,!1)},
$S:1803}
A.ea5.prototype={
$0(){var w=this.a
return w.m(new A.ea2(w))},
$S:0}
A.ea2.prototype={
$0(){return this.a.y1=null},
$S:0}
A.ea6.prototype={
$0(){var w,v,u=this.a
u.m(new A.ea1(u))
if(!u.aN)u.a2M()
w=u.aC
if(w!=null){v=u.e
v===$&&C.c()
v.apY(220,0.5,new A.q(w.f,30,w.r))}u.eh("Follow the yellow line on the ground to get there.",!0)},
$S:0}
A.ea1.prototype={
$0(){return this.a.y1=null},
$S:0}
A.ea7.prototype={
$0(){var w,v=this.a
v.m(new A.ea0(v))
if(v.cJ==null){v.cJ=this.b
v.hO=0}w=this.b
v.Sq(w.a)
w=w.c
if(w==="power")w="You are at the house. Walk in and onto the red mat at the breaker panel."
else w=w==="sick"?"You are at the hospital. Walk in and onto the desk.":y.Y
v.eh(w,!0)},
$S:0}
A.ea0.prototype={
$0(){return this.a.y1=null},
$S:0}
A.ea8.prototype={
$0(){var w=this.a
w.m(new A.ea_(w,this.b))
w.eh("Saved on your waiting list.",!0)},
$S:0}
A.ea_.prototype={
$0(){var w,v=this.a
v.y1=null
w=this.b
if(v.cJ===w)v.cJ=null
v=v.eK
if(!D.d.t(v,w))v.push(w)},
$S:0}
A.ea9.prototype={
$0(){var w=this.a
return w.m(new A.e9Z(w))},
$S:0}
A.e9Z.prototype={
$0(){return this.a.y2=!1},
$S:0}
A.eaw.prototype={
$1(d){var w=null
return C.bx(D.r5,new C.a5(w,C.aG(d,w,x.w).w.a.b*0.82,new A.apL(this.a,w),w),D.ap)},
$S:1804}
A.eax.prototype={
$0(){var w=this.a
w.azV()
w.iI()},
$S:0}
A.ecS.prototype={
$1(d){return new C.e0(new A.ecQ(this.a,this.b,this.c),null)},
$S:21}
A.ecQ.prototype={
$2(d,e){var w,v,u,t,s=null,r=new A.ecR(this.a,e),q=this.b,p=q.a,o=C.d(p.b+" "+q.gaDV(0),s,s,s,s,s,s,R.te,s,s,s)
p=C.d(p.f,s,s,s,s,s,s,D.vp,s,s,s)
w=C.d("Now: "+q.gUp()+"\nFood "+D.k.V(100-q.b)+"%   Health "+D.k.V(q.c)+"%   Home "+D.k.V(q.d)+"%",s,s,s,s,s,s,B.aU8,s,s,s)
v=this.c
u=x.p
t=C.a([r.$2("\ud83c\udf5e Feed",new A.ecN(v,q))],u)
if(q.e)t.push(r.$3$col("\ud83d\udc8a Medicine",new A.ecO(v,q),D.br))
if(q.e||q.c<60)t.push(r.$3$col("\ud83c\udfe5 Hospital",new A.ecP(v,q),D.c6))
return C.bm(!0,new C.D(D.bQ,C.x(C.a([o,p,D.P,w,D.ae,C.bX(D.bG,t,D.bq,s,8,8)],u),D.E,s,D.e,D.O,0,D.p),s),!0,!1,D.af,!0,!0)},
$S:87}
A.ecR.prototype={
$3$col(d,e,f){var w=null,v=f.j(0.22),u=C.n(12),t=C.K(f,D.r,1)
return C.aA(w,C.p(w,C.d(d,w,w,w,w,w,w,C.l(w,w,f,w,w,w,w,w,w,w,w,13,w,w,D.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),D.f,w,w,new C.o(v,w,t,u,w,w,D.n),w,w,w,w,A0.w3,w,w,w),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new A.ecM(this.a,e,this.b),w,w,w,w,w,w,!1,D.a3)},
$2(d,e){return this.$3$col(d,e,D.aB)},
$S:1805}
A.ecM.prototype={
$0(){var w,v=this.b.$0()
this.c.$1(new A.ecL())
w=this.a
w.m(w.giY())
w.iJ(v)},
$S:0}
A.ecL.prototype={
$0(){},
$S:0}
A.ecN.prototype={
$0(){return this.a.bf3(this.b)},
$S:23}
A.ecO.prototype={
$0(){return this.a.aL1(this.b)},
$S:23}
A.ecP.prototype={
$0(){return this.a.aDC(this.b)},
$S:23}
A.ecB.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=x.p,k=C.a([],l)
for(w=D.d.gag(B.a3Q),v=new C.f2(w,new A.ecy()),u=this.a,t=this.b;v.C();){s=w.gS(0)
r=D.c.j(0.08)
q=new C.aP(12,12)
p=u.d
p===$&&C.c()
o=p.d
o===$&&C.c()
n=new C.ay(o[p.e].fx.h(0,t)===s.a?D.aB:D.aX,1,D.r,-1)
k.push(C.aA(m,C.p(m,new C.y(s.c+" "+s.b,m,D.Kn,m,m,m,m,m,m,m,m,m),D.f,m,m,new C.o(r,m,new C.bH(n,n,n,n),new C.bh(q,q,q,q),m,m,D.n),m,m,m,m,D.eB,m,m,m),D.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new A.ecz(u,d,t,s),m,m,m,m,m,m,!1,D.a3))}w=u.d
w===$&&C.c()
v=w.d
v===$&&C.c()
if(v[w.e].fx.h(0,t)!=null)k.push(C.aA(m,C.p(m,B.fO0,D.f,m,m,new C.o(D.ek,m,m,C.n(12),m,m,D.n),m,m,m,m,D.eB,m,m,m),D.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new A.ecA(u,d,t),m,m,m,m,m,m,!1,D.a3))
return C.bm(!0,new C.D(D.bQ,C.x(C.a([B.fK4,D.W,C.bX(D.bG,k,D.bq,m,8,8)],l),D.E,m,D.e,D.O,0,D.p),m),!0,!1,D.af,!0,!0)},
$S:27}
A.ecy.prototype={
$1(d){return!(d.d>70||d.e)},
$S:z+26}
A.ecz.prototype={
$0(){var w,v,u,t=this
C.a4(t.b,!1).O(null)
w=t.a
v=t.d
w.m(new A.ecx(w,t.c,v))
u=v.d>0||v.e
v=v.b
w.iJ(u?v+" is on and playing NGMY ads. Tap it to watch full screen.":v+" is plugged in and running.")
A.fR(820,70,0.25,"tri")},
$S:0}
A.ecx.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.d
w===$&&C.c()
w[u.e].fx.n(0,this.b,this.c.a)
v.iI()},
$S:0}
A.ecA.prototype={
$0(){C.a4(this.b,!1).O(null)
var w=this.a
w.m(new A.ecw(w,this.c))
w.iJ("Unplugged.")},
$S:0}
A.ecw.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.d
w===$&&C.c()
w[u.e].fx.W(0,this.b)
v.iI()},
$S:0}
A.edP.prototype={
$1(d){return new C.e0(new A.edN(this.a),null)},
$S:21}
A.edN.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.a,k=new A.edO(l,e),j=l.d
j===$&&C.c()
w=j.d
w===$&&C.c()
j=C.d("TV in "+w[j.e].b,m,m,m,m,m,m,D.dd,m,m,m)
w=x.p
v=C.a([],w)
for(u=D.d.gag(B.a3Q),t=new C.f2(u,new A.edG());t.C();){s=u.gS(0)
r=s.b
q=l.d
p=q.d
p===$&&C.c()
q=p[q.e].k1===s.a?D.aB:D.eN
v.push(k.$3$color(r,new A.edH(l,s),q))}j=C.a([j,D.W,C.bX(D.bG,v,D.bq,m,8,8)],w)
if(l.d.a.length!==0){v=C.a([],w)
for(o=0;o<3;++o){u={}
t=B.d7a[o]
u.a=null
n=t.a
u.a=n
s=l.d
r=s.d
r===$&&C.c()
s=r[s.e].p1===n?D.aB:D.eN
v.push(k.$3$color(t.b,new A.edI(u,l),s))}D.d.v(j,C.a([B.fx0,D.am,C.bX(D.bG,v,D.bq,m,8,8)],w))}j.push(D.W)
w=C.a([],w)
v=l.d
u=v.d
u===$&&C.c()
v=u[v.e]
if(v.k1!=null){v=v.p2?"\u23fb Turn this TV off":"\u23fb Turn this TV on"
w.push(k.$2(v,new A.edJ(l)))}v=l.d
u=v.d
u===$&&C.c()
if(u[v.e].k1!=null&&v.a.length===0)w.push(k.$3$color("\ud83d\uddd1 Take it down",new A.edK(l),D.ek))
if(l.d.a.length===0)w.push(k.$3$color("\ud83d\udcfa A TV in every room, all on",new A.edL(l),D.cT))
if(l.d.a.length===0)w.push(k.$3$color("\u23fb All TVs off",new A.edM(l),D.bm))
j.push(C.bX(D.bG,w,D.bq,m,8,8))
return C.bm(!0,new C.D(D.bQ,C.x(j,D.E,m,D.e,D.O,0,D.p),m),!0,!1,D.af,!0,!0)},
$S:87}
A.edO.prototype={
$3$color(d,e,f){var w=null,v=f.j(0.4),u=C.n(12),t=C.K(f,D.r,1)
return C.aA(w,C.p(w,C.d(d,w,w,w,w,w,w,U.Aj,w,w,w),D.f,w,w,new C.o(v,w,t,u,w,w,D.n),w,w,w,w,A0.w3,w,w,w),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new A.edF(this.a,e,this.b),w,w,w,w,w,w,!1,D.a3)},
$2(d,e){return this.$3$color(d,e,D.eN)},
$S:1806}
A.edF.prototype={
$0(){this.b.$0()
this.c.$1(new A.edE())
var w=this.a
w.m(w.giY())},
$S:0}
A.edE.prototype={
$0(){},
$S:0}
A.edG.prototype={
$1(d){return d.d>0||d.e},
$S:z+26}
A.edH.prototype={
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
A.edI.prototype={
$0(){var w,v=this.b.d
v===$&&C.c()
w=v.d
w===$&&C.c()
return w[v.e].p1=this.a.a},
$S:0}
A.edJ.prototype={
$0(){var w,v=this.a.d
v===$&&C.c()
w=v.d
w===$&&C.c()
v=w[v.e]
return v.p2=!v.p2},
$S:0}
A.edK.prototype={
$0(){var w,v=this.a.d
v===$&&C.c()
w=v.d
w===$&&C.c()
v=w[v.e]
v.k1=null
v.p2=!1},
$S:0}
A.edL.prototype={
$0(){var w,v,u,t=this.a.d
t===$&&C.c()
t=t.gqT()
w=t.length
v=0
for(;v<w;++v){u=t[v]
if(u.k1==null)u.k1="tv100"
if(u.c==="hall")if(u.k2==null)u.k2="tv100"
u.p2=!0}},
$S:0}
A.edM.prototype={
$0(){var w,v,u=this.a.d
u===$&&C.c()
u=u.gqT()
w=u.length
v=0
for(;v<w;++v)u[v].p2=!1},
$S:0}
A.edB.prototype={
$1(d){return new C.e0(new A.edz(this.a),null)},
$S:21}
A.edz.prototype={
$2(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new A.edA(),e=C.as(C.p(g,g,D.f,g,g,new C.o(D.aX,g,g,C.n(2),g,g,D.n),g,4,g,g,g,g,g,42),g,g,g),d=x.p,a0=C.B(C.a([C.p(g,H.apT,D.f,g,g,new C.o(g,g,g,C.n(16),g,B.c2m,D.n),g,52,g,g,g,g,g,52),D.er,B.bFd],d),D.m,g,D.e,D.i,0,g,g),a1=f.$1("Who walks the house"),a2=C.a([],d)
for(w=B.aHj.gdV(B.aHj),w=w.gag(w),v=x.s,u=x.N,t=x.ec,s=this.a;w.C();){r=w.gS(w)
q=$.ahI
p=r.a
q=q===p?D.aJ.j(0.18):D.c.j(0.06)
o=new C.aP(18,18)
n=$.ahI===p
m=n?D.aJ:D.bC
l=new C.ay(m,n?2:1,D.r,-1)
n=n?D.aJ:D.aX
m=r.b
k=D.d.gI(m.split(" "))
m=C.a(m.split(" "),v)
j=new C.je(m,1,g,t)
j.od(m,1,g,u)
j=j.aG(0," ")
p=$.ahI===p?D.aJ:D.c
a2.push(new C.D(D.Gg,C.aA(g,C.da(g,C.x(C.a([new C.qz(new C.y(k,g,D.pF,g,g,g,g,g,g,g,g,g),n,g,20,g),D.am,new C.y(j,g,new C.F(!0,p,g,g,g,g,12.5,D.H,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g),g,g,g,g,D.a1,g,1,g,g)],d),D.m,g,D.b9,D.i,0,D.p),g,g,D.b7,new C.o(q,g,new C.bH(l,l,l,l),new C.bh(o,o,o,o),g,g,D.n),D.hu,g,g,g,g,D.Gx,g,g,92),D.y,!1,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,new A.edv(s,a4,r),g,g,g,g,g,g,!1,D.a3),g))}a2=C.cl(a2,g,g,g,g,g,D.aM,!1)
w=f.$1("How long")
v=D.c.j(0.06)
u=C.n(16)
t=C.a([],d)
for(i=0;i<5;++i){h=B.dsw[i]
r=s.db===h
q=r?D.aB:D.L
p=new C.aP(12,12)
if(h<60)o=""+h+" seconds"
else o=h===60?"1 minute":""+(h/60|0)+" minutes"
r=r?D.w:D.ac
t.push(new C.bA(1,D.bd,C.aA(g,C.da(g,new C.ce(D.A,g,g,new C.y(o,g,new C.F(!0,r,g,g,g,g,12.5,D.u,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g),g,D.K,g,g,g,g,g,g,g),g),g,g,D.b7,new C.o(q,g,g,new C.bh(p,p,p,p),g,g,D.n),D.hu,g,g,g,g,D.u7,g,g,g),D.y,!1,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,new A.edw(s,a4,h),g,g,g,g,g,g,!1,D.a3),g))}v=C.p(g,C.B(t,D.m,g,D.e,D.i,0,g,g),D.f,g,g,new C.o(v,g,g,u,g,g,D.n),g,g,g,g,D.ev,g,g,g)
u=C.aA(g,C.p(g,B.f3d,D.f,g,g,new C.o(g,g,g,C.n(18),C.a([new C.ac(0,D.G,D.ax.j(0.35),D.cy,16)],x.V),B.c3k,D.n),g,56,g,g,g,g,g,g),D.y,!1,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,new A.edx(s,a3),g,g,g,g,g,g,!1,D.a3)
t=D.c.j(0.06)
r=C.n(18)
return C.p(g,C.bm(!0,C.ch(C.x(C.a([e,D.aQ,a0,a1,new C.a5(g,96,a2,g),w,v,D.dT,u,D.ae,C.aA(g,C.p(g,B.f37,D.f,g,g,new C.o(t,g,C.K(D.bC,D.r,1),r,g,g,D.n),g,g,g,g,D.bE,g,g,g),D.y,!1,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,new A.edy(s,a3),g,g,g,g,g,g,!1,D.a3)],d),D.E,g,D.e,D.O,0,D.p),D.t,g,D.y,g,D.al6,g,g,D.ah),!0,!1,D.af,!0,!0),D.f,g,g,B.b4O,g,g,g,g,g,g,g,g)},
$S:162}
A.edA.prototype={
$1(d){var w=null
return new C.D(H.ajQ,C.d(d.toUpperCase(),w,w,w,w,w,w,Q.th,w,w,w),w)},
$S:137}
A.edv.prototype={
$0(){var w=this.c
this.b.$1(new A.edt(w))
A.bTX(w.a)
this.a.m(new A.edu())},
$S:0}
A.edt.prototype={
$0(){return $.ahI=this.a.a},
$S:0}
A.edu.prototype={
$0(){},
$S:0}
A.edw.prototype={
$0(){return this.b.$1(new A.eds(this.a,this.c))},
$S:0}
A.eds.prototype={
$0(){return this.a.db=this.b},
$S:0}
A.edx.prototype={
$0(){C.a4(this.b,!1).O(null)
var w=this.a
w.czk(w.db)},
$S:0}
A.edy.prototype={
$0(){C.a4(this.b,!1).O(null)
this.a.b7M(45,!0)},
$S:0}
A.edc.prototype={
$0(){var w=this.a,v=w.d
v===$&&C.c()
v.e=this.b
w.ax=null
w.iI()},
$S:0}
A.edd.prototype={
$1(d){return this.a.cDx()},
$S:11}
A.ede.prototype={
$0(){},
$S:0}
A.edC.prototype={
$0(){return this.a.dy=this.b.as},
$S:0}
A.edr.prototype={
$0(){var w=this.b
w.iI()
w.aB=this.a.a;++w.aF},
$S:0}
A.edj.prototype={
$0(){var w=this.a
w.cx=null
w.dy=""},
$S:0}
A.edk.prototype={
$0(){},
$S:0}
A.edb.prototype={
$0(){},
$S:0}
A.edi.prototype={
$0(){},
$S:0}
A.ee_.prototype={
$0(){return this.a.id=!0},
$S:0}
A.ee0.prototype={
$0(){return this.a.k2=!0},
$S:0}
A.ee1.prototype={
$0(){return this.a.k3=!0},
$S:0}
A.ee2.prototype={
$1(d){return B.aQS.t(0,d.b)},
$S:z+4}
A.edT.prototype={
$1(d){var w
if(d.b==="gasstation"){w=this.a
w=Math.sqrt(Math.pow(w.f-d.c,2)+Math.pow(w.r-d.d,2))<135}else w=!1
return w},
$S:z+4}
A.edU.prototype={
$0(){return this.a.aPz(B.aR8)},
$S:0}
A.edV.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.d
w===$&&C.c()
D.d.W(w[u.e].x,this.b)
v.al="crate"
v.m(v.giY())
v.eh("You picked up a crate. Carry it to the shop and walk onto the green mat by the counter to sell it at the market.",!0)
A.fR(700,60,0.25,"tri")
return null},
$S:0}
A.edW.prototype={
$0(){return this.a.abn(this.b)},
$S:0}
A.edX.prototype={
$0(){return this.a.bQP(this.b)},
$S:0}
A.edY.prototype={
$0(){return this.a.bTs(this.b)},
$S:0}
A.edZ.prototype={
$0(){return this.b.cL=this.a.a},
$S:0}
A.eb9.prototype={
$0(){},
$S:0}
A.ecI.prototype={
$1(d){var w=this.a,v=this.b
return w===0?v.$1(d):new A.aJZ(w,v.$1(d),null)},
$S:39}
A.ebQ.prototype={
$0(){var w=this.a
w.y1=null
w.y2=!0},
$S:0}
A.ebN.prototype={
$1(d){return d.c==="outside"},
$S:z+5}
A.ebO.prototype={
$1(d){return d.b==="hospital"},
$S:z+4}
A.ebP.prototype={
$1(d){return!d.e&&d.r<0},
$S:z+18}
A.ebz.prototype={
$1(d){return d.c==="outside"},
$S:z+5}
A.ebA.prototype={
$1(d){return d.a.b===this.a.d},
$S:z+18}
A.ed5.prototype={
$0(){},
$S:0}
A.ebt.prototype={
$0(){return this.a.k3=!0},
$S:0}
A.ecU.prototype={
$1(d){return d.b==="hospital"},
$S:z+4}
A.ecV.prototype={
$0(){return this.a.go=!1},
$S:0}
A.ed6.prototype={
$1(d){var w
if(d>0&&this.a.c!=null){w=this.a.ghD()
if(w!=null)w.r+=d}},
$S:1807}
A.ed7.prototype={
$0(){var w=this.a
w.iI()
w.aet(!0)},
$S:0}
A.ed8.prototype={
$1(d){return this.a.c8i()},
$S:11}
A.ebG.prototype={
$1(d){return!D.d.b3(this.a.d,new A.ebF(d))},
$S:34}
A.ebF.prototype={
$1(d){return d.a===this.a},
$S:z+19}
A.ebH.prototype={
$1(d){return d.a===this.a.a},
$S:z+19}
A.ed9.prototype={
$1(d){var w,v,u=this.a
if(u.c==null)return
w=++u.T
if(w>36){v=u.bE
u.B5()
if(v!=null)u.aBZ("Nobody answered the phone")
return}if(w%8<4){A.fR((w&1)===0?1046:1318,160,0.3,"sine")
if(D.o.F(u.T,8)===0)C.Tu()}},
$S:11}
A.eda.prototype={
$0(){},
$S:0}
A.edh.prototype={
$0(){var w=this.a
w.bE=w.bD=null},
$S:0}
A.ec4.prototype={
$4$col$on(d,e,f,g){var w=null,v=g?f.j(0.45):D.w.j(0.62),u=C.n(18),t=C.K(f,D.r,1.8)
return C.aA(w,C.p(w,C.d(d,w,w,w,w,w,w,D.j4,w,w,w),D.f,w,w,new C.o(v,w,t,u,w,w,D.n),w,w,w,D.a_P,B.bEt,w,w,w),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new A.ec5(e),w,w,w,w,!1,D.a3)},
$2(d,e){return this.$4$col$on(d,e,D.bf,!1)},
$3$col(d,e,f){return this.$4$col$on(d,e,f,!1)},
$3$on(d,e,f){return this.$4$col$on(d,e,D.bf,f)},
$S:1808}
A.ec5.prototype={
$1(d){return this.a.$0()},
$S:22}
A.ecd.prototype={
$7$about$avatar$glow$onAnswer$onDecline$onLater$who(d,e,f,g,h,i,j){var w=null,v=new A.ece(),u=Math.min(this.a-28,340),t=C.n(30),s=C.K(D.aX,D.r,2),r=C.a([new C.ac(0,D.G,f.j(0.35),D.I,24)],x.V),q=x.p,p=C.B(C.a([e,D.er,C.E(C.x(C.a([B.fLw,D.bF,C.d(j,w,1,D.a1,w,w,w,D.a9J,w,w,w),D.bF,C.d(d,w,2,D.a1,w,w,w,M.aaf,w,w,w)],q),D.E,w,D.e,D.O,0,D.p),1)],q),D.m,w,D.e,D.i,0,w,w),o=C.a([v.$4(B.bM4,"Decline",D.ax,h)],q)
if(i!=null)o.push(v.$4(D.jV,"Later",D.aB,i))
o.push(v.$5$big(D.iH,"Answer",D.be,g,!0))
return C.p(w,C.x(C.a([p,D.aA,C.B(o,D.E,w,D.e,D.i,0,w,w)],q),D.ak,w,D.e,D.O,0,D.p),D.f,w,w,new C.o(w,w,s,t,r,B.zj,D.n),w,w,w,D.d0,Ai.a_v,w,w,u)},
$6$about$avatar$glow$onAnswer$onDecline$who(d,e,f,g,h,i){return this.$7$about$avatar$glow$onAnswer$onDecline$onLater$who(d,e,f,g,h,null,i)},
$S:1809}
A.ece.prototype={
$5$big(d,e,f,g,h){var w=null,v=h?58:50,u=h?58:50
return C.E(C.aA(w,C.x(C.a([C.p(w,C.X(d,D.c,w,w,w,h?30:26),D.f,w,w,new C.o(f,w,w,w,w,w,D.a6),w,u,w,w,w,w,w,v),D.fG,C.d(e,w,w,w,w,w,w,N.An,w,w,w)],x.p),D.m,w,D.e,D.O,0,D.p),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new A.ecf(g),w,w,w,w,!1,D.a3),1)},
$4(d,e,f,g){return this.$5$big(d,e,f,g,!1)},
$S:1810}
A.ecf.prototype={
$1(d){return this.a.$0()},
$S:22}
A.ec7.prototype={
$0(){var w=this.a
w.B5()
w.aBZ("You turned the call down")},
$S:0}
A.ec8.prototype={
$0(){var w=this.a
w.B5()
w.eK.push(this.b)
w.eh("Saved on your waiting list. You will be taken there when you are free.",!0)},
$S:0}
A.ec6.prototype={
$0(){var w=this.b,v=this.a
v.B5()
v.cJ=w
v.hO=0
v.axb(w)},
$S:0}
A.ec9.prototype={
$0(){var w=this.a
w.B5()
w.cBS(this.b)},
$S:0}
A.ecc.prototype={
$2(d,e){var w=this.a
w.b2=d
w.be=e},
$S:199}
A.eca.prototype={
$0(){var w=this.a
return w.m(new A.ec3(w))},
$S:0}
A.ec3.prototype={
$0(){var w=this.a
return w.bi=!w.bi},
$S:0}
A.ecb.prototype={
$0(){var w=this.a,v=w.aK
if(v==null)v=null
else{v=v.at
v===$&&C.c()}w=v==null?w.aC:v
if(w!=null)if(w.Q<=0.01)w.as=160
return null},
$S:0}
A.ebR.prototype={
$1(d){var w=this.a,v=w.p4
w=w.RG
return v==="ptrap"?new A.a9H(w,null):new A.a58(w,null)},
$S:1811}
A.ebS.prototype={
$1(d){var w=this.a
return new A.E_(w.p4,w.R8,null)},
$S:z+27}
A.ee3.prototype={
$1(d){var w=this.a
return new A.E_(w.a,w.c,null)},
$S:z+27}
A.ebU.prototype={
$1(d){return A.cin(!1,!1,this.a.CW,!1)},
$S:z+41}
A.ebT.prototype={
$1(d){return new A.Wf(!1,this.a.fr,null)},
$S:z+71}
A.e9w.prototype={
$1(d){var w,v,u,t,s,r,q,p=null,o=this.a,n=o.d
n===$&&C.c()
w=n.d
w===$&&C.c()
n=C.d("Add to "+w[n.e].b,p,p,p,p,p,p,D.dd,p,p,p)
w=x.p
v=C.a([],w)
for(u=0;u<10;++u){t={}
s=B.d22[u]
t.a=null
t.a=s.a
r=new C.aP(12,12)
q=new C.ay(D.b_,1,D.r,-1)
v.push(C.aA(p,C.p(p,new C.y(s.b,p,D.tj,p,p,p,p,p,p,p,p,p),D.f,p,p,new C.o(D.eN.j(0.4),p,new C.bH(q,q,q,q),new C.bh(r,r,r,r),p,p,D.n),p,p,p,p,A0.w3,p,p,p),D.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new A.e9v(t,o,d),p,p,p,p,p,p,!1,D.a3))}return C.bm(!0,new C.D(D.bQ,C.x(C.a([n,D.au,B.fSy,D.ae,C.bX(D.bG,v,D.bq,p,8,8)],w),D.E,p,D.e,D.O,0,D.p),p),!0,!1,D.af,!0,!0)},
$S:27}
A.e9v.prototype={
$0(){C.a4(this.c,!1).O(null)
this.b.bBq(this.a.a)},
$S:0}
A.e9q.prototype={
$1(d){return d.b==="back"},
$S:z+21}
A.e9r.prototype={
$1(d){return d.b==="back"},
$S:z+21}
A.e9s.prototype={
$1(d){return Math.abs(d-this.a)>13},
$S:115}
A.e9t.prototype={
$0(){var w=this
w.b.id.push(new A.aWs(w.c,w.d,new A.CA(C.U(x.S,x.N))))
w.a.iI()},
$S:0}
A.ebK.prototype={
$0(){var w,v=this,u=v.b,t=u.c,s=v.c,r=v.d
u.c=t+(s?D.o.gVV(r)*40:r)
t=u.d
r=v.e
u.d=t+(s?D.o.gVV(r)*40:r)
t=v.a
r=t.d
r===$&&C.c()
w=r.d
w===$&&C.c()
w[r.e].a47(0,u)
t.iI()},
$S:0}
A.edD.prototype={
$0(){var w,v,u,t=this.b
t.e=D.o.F(t.e+1,4)
w=this.a
v=w.d
v===$&&C.c()
u=v.d
u===$&&C.c()
u[v.e].a47(0,t)
w.iI()},
$S:0}
A.ecJ.prototype={
$0(){var w=this.b
w.f=(w.f+1)%6
this.a.iI()},
$S:0}
A.ecK.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.d
w===$&&C.c()
D.d.W(w[u.e].x,this.b)
v.at=v.Q=0
v.iI()},
$S:0}
A.e9u.prototype={
$0(){var w=this.a,v=this.b.a
w.Q=v
w.at=100+v
w.iI()},
$S:0}
A.eaG.prototype={
$0(){return this.a.aeu(-6,0)},
$S:0}
A.eaH.prototype={
$0(){return this.a.aeu(6,0)},
$S:0}
A.eaI.prototype={
$0(){return this.a.aeu(0,-6)},
$S:0}
A.eaJ.prototype={
$0(){return this.a.aeu(0,6)},
$S:0}
A.eaK.prototype={
$0(){return this.a.bBt(this.b.a)},
$S:0}
A.eaL.prototype={
$0(){var w=this.a
return w.m(new A.eaF(w))},
$S:0}
A.eaF.prototype={
$0(){return this.a.as=-1},
$S:0}
A.eaM.prototype={
$0(){var w=this.a
w.m(new A.eaE(w,this.b))},
$S:0}
A.eaE.prototype={
$0(){var w,v=this.a,u=v.as,t=this.b,s=v.d
if(u<0){s===$&&C.c()
u=s.d
u===$&&C.c()
D.d.ht(u[s.e].z,0,3,t)}else{s===$&&C.c()
w=s.d
w===$&&C.c()
w[s.e].z[u]=t}v.iI()},
$S:0}
A.eaN.prototype={
$0(){var w=this.a
w.m(new A.eaD(w,this.b))},
$S:0}
A.eaD.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.d
w===$&&C.c()
w[u.e].Q=this.b
v.iI()},
$S:0}
A.eaO.prototype={
$0(){var w=this.a
w.m(new A.eaC(w))},
$S:0}
A.eaC.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.d
w===$&&C.c()
u=w[u.e]
u.go=u.go==="fan"?"light":"fan"
v.iI()},
$S:0}
A.eaP.prototype={
$0(){var w=this.a
w.m(new A.eaB(w,this.b))},
$S:0}
A.eaB.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.d
w===$&&C.c()
w[u.e].as=this.b
v.iI()},
$S:0}
A.eaQ.prototype={
$0(){return this.a.AB(this.b.d)},
$S:0}
A.ee6.prototype={
$0(){return C.a4(this.a,!1).ih()},
$S:0}
A.ee8.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.ee5(w))},
$S:0}
A.ee5.prototype={
$0(){return this.a.aB=null},
$S:0}
A.ee7.prototype={
$3(d,e,f){var w=null
return C.db(C.cpl(D.A,w,w,w,w,D.ci,D.vE,w,this.a.aB,!1,!1,!1,w,D.pn,1,w),e)},
$S:101}
A.eai.prototype={
$0(){return this.a.A4("calls")},
$S:0}
A.eaj.prototype={
$0(){return this.a.A4("hospital")},
$S:0}
A.eak.prototype={
$0(){return this.a.A4("shop")},
$S:0}
A.eao.prototype={
$0(){return this.a.A4("people")},
$S:0}
A.eap.prototype={
$0(){return this.a.AB(10)},
$S:0}
A.eaq.prototype={
$0(){var w=this.a
return w.m(new A.eah(w))},
$S:0}
A.eah.prototype={
$0(){return this.a.k2=!0},
$S:0}
A.ear.prototype={
$0(){var w=this.a
return w.m(new A.eag(w))},
$S:0}
A.eag.prototype={
$0(){return this.a.k3=!0},
$S:0}
A.eas.prototype={
$0(){var w=this.a
return w.m(new A.eaf(w))},
$S:0}
A.eaf.prototype={
$0(){var w=this.a
return w.y1=w.cJ},
$S:0}
A.eat.prototype={
$0(){var w=this.a,v=w.eK.length,u=v===1?"":"s"
return w.eh(""+v+" job"+u+" waiting. You are taken to the next one when you finish this one.",!0)},
$S:0}
A.eau.prototype={
$0(){var w=this.a
return w.m(new A.eae(w))},
$S:0}
A.eae.prototype={
$0(){return this.a.go=!0},
$S:0}
A.eav.prototype={
$0(){var w=this.a
return w.p4?w.a2P():w.m(new A.ead(w))},
$S:0}
A.ead.prototype={
$0(){return this.a.R8=!0},
$S:0}
A.eal.prototype={
$0(){var w=this.a
return w.m(new A.eac(w))},
$S:0}
A.eac.prototype={
$0(){var w=this.a
return w.ha=!w.ha},
$S:0}
A.eam.prototype={
$0(){var w=this.a
return w.m(new A.eab(w))},
$S:0}
A.eab.prototype={
$0(){return this.a.ai=!0},
$S:0}
A.ean.prototype={
$0(){var w=this.a
return w.m(new A.eaa(w))},
$S:0}
A.eaa.prototype={
$0(){var w=this.a
return w.y=!w.y},
$S:0}
A.e9D.prototype={
$0(){var w=this.a.ghD()
w=w==null?null:w.r
return w==null?0:w},
$S:98}
A.e9R.prototype={
$0(){return this.a.y0()},
$S:0}
A.e9Q.prototype={
$1(d){return d<=5},
$S:34}
A.e9E.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n=null,m=this.a,l=m.aK,k=m.CW
if(l!=null){m=k.gir()
k=B.aHk.h(0,$.ahI)
if(k==null)k=B.a7P
k=l.cOn(m/1000,k)
m=k}else{l=m.d
l===$&&C.c()
w=l.d
w===$&&C.c()
l=w[l.e]
w=k.gir()
v=m.cmb()
u=B.aHk.h(0,$.ahI)
if(u==null)u=B.a7P
t=m.fr
s=m.r
r=m.bOE()
if(m.al==null){q=m.gpn()
if(q==null)q=n
else{q=q.x
q=(q==null?n:q.r)===!0}q=q===!0}else q=!0
p=m.d
o=p.d
o===$&&C.c()
if(o[p.e].c!=="outside")k=B.Id
else{p=m.gpn()
p=p==null?n:p.amt(k.gir()/1000)
if(p==null)p=B.Id
p=C.C(p,x.hg)
o=m.gKx()
k=o==null?n:o.amt(k.gir()/1000)
D.d.v(p,k==null?B.Id:k)
k=p}l=C.C(A.ibl(l,w/1000,q,k,r,s,v,u,t),x.fX)
k=m.d
w=k.d
w===$&&C.c()
if(w[k.e].c==="outside")D.d.v(l,m.cDF())
k=!0
if(m.cJ==null){w=m.gpn()
if((w==null?n:w.x)==null){k=m.gKx()
k=(k==null?n:k.f)!=null}}D.d.v(l,k?m.csw():B.Ie)
m=l}return m},
$S:z+10}
A.e9F.prototype={
$1(d){var w,v,u=this.a
if(u.aK==null){w=u.d
w===$&&C.c()
v=w.d
v===$&&C.c()
w=v[w.e].c==="outside"}else w=!1
return w?A.imb(u.CW.gir()/1000):B.wE},
$S:z+74}
A.e9S.prototype={
$3(d,e,f){var w=null,v=D.dG.j(0.82),u=C.n(18),t=C.K(D.b8,D.r,2)
return C.p(w,C.d(e,w,w,w,w,w,w,B.fv6,w,w,w),D.f,w,w,new C.o(v,w,t,u,w,w,D.n),w,w,w,w,B.bCG,w,w,w)},
$S:1812}
A.e9I.prototype={
$0(){var w=this.a,v=w.d
v===$&&C.c()
return v.a.length!==0?w.Ep():w.cnr(this.b)},
$S:0}
A.e9T.prototype={
$0(){var w=this.a
w.m(new A.e9C(w))
w.y0()},
$S:0}
A.e9C.prototype={
$0(){var w=this.a
w.x=!w.x
w.iI()},
$S:0}
A.e9U.prototype={
$0(){var w=this.a
return w.cx!=null?w.Sc():w.cDw()},
$S:0}
A.e9V.prototype={
$0(){var w=this.a
w.m(new A.e9B(w))
w.y0()
if(w.z)w.iJ("Drag to turn all the way round. Double tap a spot on the floor to walk there.")},
$S:0}
A.e9B.prototype={
$0(){var w=this.a,v=!w.z
w.z=v
if(v&&w.cx!=null)w.Sc()
w.iI()},
$S:0}
A.e9W.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.d
w===$&&C.c()
return v.AB(w[u.e].c!=="outside"?11:10)},
$S:0}
A.e9X.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.d
w===$&&C.c()
if(w[u.e].c!=="outside")v.AB(11)
v.A4("calls")},
$S:0}
A.e9G.prototype={
$0(){var w=this.a
return w.m(new A.e9A(w))},
$S:0}
A.e9A.prototype={
$0(){var w=this.a,v=!w.w
w.w=v
if(v)w.iJ("Voltage tester in your hand: tap an outlet, a switch or the light.")},
$S:0}
A.e9H.prototype={
$0(){var w=this.a
return w.m(new A.e9z(w))},
$S:0}
A.e9z.prototype={
$0(){var w=this.a
return w.y=!w.y},
$S:0}
A.e9J.prototype={
$0(){return this.a.PU("look")},
$S:0}
A.e9K.prototype={
$0(){return this.a.PU("furniture")},
$S:0}
A.e9L.prototype={
$0(){return this.a.PU("walls")},
$S:0}
A.e9M.prototype={
$0(){return this.a.PU("floor")},
$S:0}
A.e9N.prototype={
$0(){return this.a.PU("ceiling")},
$S:0}
A.e9O.prototype={
$0(){return this.a.PU("doors")},
$S:0}
A.e9P.prototype={
$0(){return C.a4(this.a,!1).cc(C.eh(new A.e9y(),!1,null,x.H))},
$S:0}
A.e9y.prototype={
$1(d){return B.aIk},
$S:z+75}
A.ecH.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=C.aG(d,m,x.w).w,k=this.a,j=k.d
j===$&&C.c()
w=x.p
j=C.a([B.fGF,D.au,C.d("Wiring "+j.gd_1()+"/"+k.d.gqT().length+" \xb7 Plumbing "+k.d.gcWF()+"/"+k.d.gcWE(),m,m,m,m,m,m,B.Ka,m,m,m),D.W],w)
for(v=k.d.gqT(),u=v.length,t=0;t<v.length;v.length===u||(0,C.L)(v),++t){s=v[t]
r=D.c.j(0.05)
q=new C.aP(12,12)
p=new C.ay(s.gkO()&&s.gjR()?D.bf.j(0.5):D.bC,1,D.r,-1)
if(s.gkO()&&s.gjR())o="\u2705 finished"
else{o=s.gkO()?"":"\u26a1 wiring  "
o+=s.gjR()?"":"\ud83d\udeb0 plumbing"}n=s.gkO()&&s.gjR()?D.es:D.ac
j.push(C.aA(m,C.p(m,new C.cd(D.aM,D.e,D.i,D.m,m,D.p,m,0,C.a([new C.bA(1,D.bd,new C.y(s.b,m,B.aUE,m,m,m,m,m,m,m,m,m),m),new C.y(o,m,new C.F(!0,n,m,m,m,m,12,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m,m,m,m,m,m,m)],w),m),D.f,m,m,new C.o(r,m,new C.bH(p,p,p,p),new C.bh(q,q,q,q),m,m,D.n),m,m,m,D.eH,D.bT,m,m,m),D.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new A.ecE(k,d,s),m,m,m,m,m,m,!1,D.a3))}j.push(D.P)
j.push(C.dT(B.fDB,new A.ecF(k,d),m))
j.push(D.P)
j.push(C.bI(B.fzJ,m,new A.ecG(k,d),m))
return C.bm(!0,new C.cT(new C.aZ(0,1/0,0,l.a.b*0.75),C.cl(j,m,m,D.bQ,m,m,D.ah,!0),m),!0,!1,D.af,!0,!0)},
$S:27}
A.ecE.prototype={
$0(){C.a4(this.b,!1).O(null)
this.a.AB(this.c.a)},
$S:0}
A.ecF.prototype={
$0(){C.a4(this.b,!1).O(null)
var w=this.a
w.m(new A.ecD(w))
w.iJ("Every room needs its wiring and plumbing again. Wire the whole house from the start.")},
$S:0}
A.ecD.prototype={
$0(){var w=this.a,v=w.d
v===$&&C.c()
v.cTg()
w.iI()},
$S:0}
A.ecG.prototype={
$0(){C.a4(this.b,!1).O(null)
$.Ec=A.aWy(D.o.F(Date.now(),1e5))
var w=this.a
w.m(new A.ecC(w))
w.aet(!0)},
$S:0}
A.ecC.prototype={
$0(){var w=this.a,v=$.Ec
v.toString
w.d=v
w.r="look"
w.Q=0
w.as=-1
w.at=0
w.iI()},
$S:0}
A.dvc.prototype={
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
$S:22}
A.f7f.prototype={
$0(){return this.b.d=this.a.a},
$S:0}
A.f7e.prototype={
$0(){return this.a.d=null},
$S:0}
A.f7h.prototype={
$1(d){return this.a.b_d(d.geZ())},
$S:71}
A.f7i.prototype={
$1(d){return this.a.b_d(d.geZ())},
$S:192}
A.f7j.prototype={
$1(d){return this.a.b_c()},
$S:111}
A.f7g.prototype={
$1(d){return this.a.b_c()},
$S:141}
A.fzG.prototype={
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
A.fzN.prototype={
$3$note(d,e,f){var w=this.a
w.a.push(d)
w.b.push(e)
if(f!=null)w.c.push(f)},
$2(d,e){return this.$3$note(d,e,null)},
$S:z+76}
A.fzI.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m,l,k
for(w=this.a.x,v=w.length,u=d.a,t=d.c,s=d.b,r=0;r<v;++r){q=w[r]
p=q.b
if(p!=="billboard"&&p!=="cornersign"&&p!=="townsign"&&p!=="adboard")continue
A:{if("townsign"===p){p=B.a8i
break A}if("cornersign"===p){p=B.a8k
break A}if("adboard"===p){p=B.a8h
break A}p=B.a8j
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
A.fzO.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
for(w=this.a.x,v=w.length,u=0;u<=1;u+=0.02){t=A.o7(d,e,u)
for(s=t.a,r=t.c,q=t.b,p=0;p<v;++p){o=w[p]
n=o.b
if(n!=="billboard"&&n!=="cornersign"&&n!=="townsign"&&n!=="adboard")continue
A:{if("townsign"===n){n=B.a8i
break A}if("cornersign"===n){n=B.a8k
break A}if("adboard"===n){n=B.a8h
break A}n=B.a8j
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
A.fzH.prototype={
$2(d,e){return this.a.$2(d,e)!=null},
$S:z+78}
A.fzE.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this.a.$2(d,e)
if(i==null)return null
w=i.b
A:{if("townsign"===w){v=B.a8i
break A}if("cornersign"===w){v=B.a8k
break A}if("adboard"===w){v=B.a8h
break A}v=B.a8j
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
n=new A.fzF(d,e)
o=this.b
k=!o.$1(m)
j=!o.$1(l)
if(k&&j)return n.$1(m)<=n.$1(l)?m:l
if(k)v=m
else v=j?l:null
return v},
$S:z+79}
A.fzF.prototype={
$1(d){return d.aE(0,this.a).guW()+this.b.aE(0,d).guW()},
$S:z+80}
A.fzy.prototype={
$3(d,e,f){var w,v,u,t=this
if(!t.a.$2(d,e))return B.rN
w=f>=3?null:t.b.$2(d,e)
if(w==null)return C.a([new A.q((d.a+e.a)/2,430,(d.c+e.c)/2)],x.o)
v=f+1
u=C.C(t.$3(d,w,v),x.Q)
u.push(w)
D.d.v(u,t.$3(w,e,v))
return u},
$2(d,e){return this.$3(d,e,0)},
$S:z+81}
A.fzK.prototype={
$7$note(a2,a3,a4,a5,a6,a7,a8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=A.hva(a2),a1=new A.q(a2.c,a4,a2.d)
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
g=u.$1(A.o7(h,i,f))
f+=0.02}if(g)for(m=r.$2(h,i),l=m.length,e=0;e<m.length;m.length===l||(0,C.L)(m),++e)w.$2(m[e],D.d.gak(v.b))}w.$3$note(i,a1,k?a8:q)
q=null}},
$6(d,e,f,g,h,i){return this.$7$note(d,e,f,g,h,i,null)},
$S:z+104}
A.fzM.prototype={
$1(d){var w=d.b,v=this.a
switch(w){case"townsign":v.$7$note(d,255,250,430,520,60,"The biggest billboard in the city: NGMY Town")
break
case"cornersign":v.$7$note(d,115,120,210,260,50,"A corner billboard: NGMY Town")
break
case"adboard":v.$7$note(d,160,142,330,410,55,"A big NGMY ad billboard")
break
case"tower":v.$7$note(d,430,(w==="hq"?278:A.huu(B.zm[d.f]))+40,150,210,20,"A tower with NGMY ad boards")
break
case"hq":v.$7$note(d,440,312,190,250,20,"The NGMY company building")
break
default:v.$7$note(d,75,48,130,175,45,"An NGMY billboard")}},
$S:z+29}
A.fzL.prototype={
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
D.d.c6(p.b,v,A.o7(s,r,q/(w.gL(u)+1)))}}}},
$S:z+29}
A.fzJ.prototype={
$1(d){var w
this.b.$0()
w=x.o
this.c.push(new A.Mn(C.a([B.hcX,B.fZb,B.h0d],w),C.a([B.hdt,B.h_s,B.h2P],w),55,8,"Inside the "+B.hC.h(0,d.b).a.toLowerCase(),d,!1,null,null))
this.a.d=!0},
$S:z+29}
A.fzz.prototype={
$1(d){return d.b==="townsign"},
$S:z+4}
A.fzA.prototype={
$2(d,e){var w=this.a
return D.k.aL(Math.pow(d.c-w.a.a,2)+Math.pow(d.d-w.a.c,2),Math.pow(e.c-w.a.a,2)+Math.pow(e.d-w.a.c,2))},
$S:z+17}
A.fzx.prototype={
$1(d){return Math.atan2(d.d-1000,d.c)},
$S:z+84}
A.fzB.prototype={
$2(d,e){var w=this.a
return J.Dn(w.$1(d),w.$1(e))},
$S:z+17}
A.fzC.prototype={
$1(d){return d.b==="bighouse"},
$S:z+4}
A.fzD.prototype={
$1(d){return d.b===this.a},
$S:z+4}
A.fcY.prototype={
$0(){var w=this.a
return w.m(new A.fcX(w))},
$S:0}
A.fcX.prototype={
$0(){var w=this.a
return w.d=!w.d},
$S:0}
A.cgv.prototype={
$0(){var w=0,v=C.j(x.P),u=1,t=[],s,r,q,p,o,n
var $async$$0=C.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
w=6
return C.b($.ra().ji(0,"assets/images/ngmy_logo.png"),$async$$0)
case 6:s=e
w=7
return C.b(C.fDb(J.eS(J.vI(s)),null),$async$$0)
case 7:r=e
o=$
n=J
w=8
return C.b(r.lM(),$async$$0)
case 8:o.W9=n.a3f(e)
u=1
w=5
break
case 3:u=2
p=t.pop()
$.W9=null
w=5
break
case 2:w=1
break
case 5:return C.h(null,v)
case 1:return C.f(t.at(-1),v)}})
return C.i($async$$0,v)},
$S:51}
A.fR8.prototype={
$4(d,e,f,g){var w,v,u=null,t=e*0.05,s=C.fx(u,u,1,u,C.cS(u,u,u,u,u,u,u,u,u,C.l(u,u,f,u,u,u,u,u,u,u,u,e,u,u,D.u,u,u,!0,u,t,u,u,u,u,u,u),d),D.a4,D.bY,u,D.dA,D.bW)
s.ek()
w=s.b.c
v=this.a
if(w>v){s=C.fx(u,u,1,u,C.cS(u,u,u,u,u,u,u,u,u,C.l(u,u,f,u,u,u,u,u,u,u,u,e*v/w,u,u,D.u,u,u,!0,u,t,u,u,u,u,u,u),d),D.a4,D.bY,u,D.dA,D.bW)
s.ek()}s.a3(this.b,new C.t(this.c+v/2-s.b.c/2,g))},
$S:1814}
A.fR6.prototype={
$1(d){var w,v,u,t,s,r=null,q=this.a,p=this.b,o=d.d-d.b
if(q!=null){w=q.c
v=q.d
u=Math.min((d.c-d.a)/w,o/v)
o=C.bK(d.gbL(),v*u,w*u)
$.S()
t=C.I()
t.Q=D.ci
p.oD(q,new C.a3(0,0,w,v),o,t)}else{s=C.fx(r,r,r,r,C.cS(r,r,r,r,r,r,r,r,r,C.l(r,r,this.c,r,r,r,r,r,r,r,r,o*0.6,r,r,D.u,r,r,!0,r,r,r,r,r,r,r,r),"NGMY"),D.a4,D.bY,r,D.dA,D.bW)
s.ek()
q=d.gbL()
o=s.b
w=o.c
o=o.a.c
s.a3(p,q.aE(0,new C.t(w/2,o.gbb(o)/2)))}},
$S:1815}
A.fR5.prototype={
$4$w(d,e,f,g){var w=null,v=C.fx(w,w,w,w,C.cS(w,w,w,w,w,w,w,w,w,C.l(w,w,this.a,w,w,w,w,w,w,w,w,f,w,w,g,w,w,!0,w,f*0.08,w,w,w,w,w,w),d),D.a4,D.bY,w,D.dA,D.bW)
v.o0(this.b.a*0.9)
v.a3(this.c,e.aE(0,new C.t(v.b.c/2,0)))},
$3(d,e,f){return this.$4$w(d,e,f,D.u)},
$S:1816}
A.fR7.prototype={
$1(d){var w=null,v=this.a.b*0.16
v=C.fx(w,w,w,w,C.cS(w,w,w,w,w,w,w,w,w,C.l(w,w,w,w,w,w,w,w,w,w,w,v,w,w,D.u,w,w,!0,w,v*0.08,w,w,w,w,w,w),d),D.a4,D.bY,w,D.dA,D.bW)
v.ek()
return v.b.c},
$S:714}
A.fA4.prototype={
$2(d,e){return this.a===d?e:0},
$S:715}
A.fzR.prototype={
$1(d){return d.b==="right"},
$S:z+21}
A.fA1.prototype={
$0(){var w=C.a([],x.z),v=new A.fm(w)
v.f=1
v.x=$.dS=$.dS+1
v.aJ(B.hfQ,B.h2W,B.Bk)
v.aV(B.fZ_,B.h9a,B.i1,0.5)
v.aJ(B.aWE,B.haP,B.Bk)
v.aJ(B.aWE,B.h6I,B.Bk)
return w},
$S:z+85}
A.fA2.prototype={
$1(d){var w=this,v=w.a,u=v.b
A:{if("left"===u){v=A.nE(d,0,1.5707963267948966,new A.q(-w.b/2,0,v.c+w.c/2-40))
break A}if("right"===u){v=A.nE(d,0,-1.5707963267948966,new A.q(w.b/2,0,v.c+w.c/2-40))
break A}v=A.nE(d,0,0,new A.q(v.c,0,0))
break A}return v},
$S:z+86}
A.fzS.prototype={
$1(d){return d.b==="back"},
$S:z+21}
A.fzT.prototype={
$1(d){return d.c},
$S:z+87}
A.fzU.prototype={
$2(d,e){return e},
$S:79}
A.fzV.prototype={
$3(d,e,f){return K.RY(d,e,0,f+this.a)},
$S:24}
A.fzX.prototype={
$2(a8,a9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this
if(a8==null)return
w=A.aPT(a8)
v=a7.a
u=A.hc8(v,w,a9)
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
n.aV(new A.q(h+g*1.4,r,f),new A.q(2.6,s+3,t+3),B.M_,0.5)
n.aV(new A.q(h+g*2.8,r,f),new A.q(0.2,s,t),F.ng,0.7)
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
k.push(new A.fP(C.a([new A.q(e,a1,d),new A.q(e,a1,a0),new A.q(e,j,a0),new A.q(e,j,d)],a2),m,new A.fzY(o,v,a9),320,a3,9,1,l,!1))
a4=h+g*0.05
k.push(new A.fP(C.a([new A.q(a4,a1,a0),new A.q(a4,a1,d),new A.q(a4,j,d),new A.q(a4,j,a0)],a2),m,new A.fzZ(o,v,a9),320,a3,9,1,l,!1))}}else{h=u.c
n.aV(new A.q(h,r,1.4),new A.q(t+3,s+3,2.6),B.M_,0.5)
n.aV(new A.q(h,r,2.8),new A.q(t,s,0.2),F.ng,0.7)
if(v.p2){k=a7.d
j=q/2
a1=h-j
a2=p/2
a3=r+a2
j=h+j
a2=r-a2
a5=x.o
a6=320*p/q
k.push(new A.fP(C.a([new A.q(a1,a3,2.95),new A.q(j,a3,2.95),new A.q(j,a2,2.95),new A.q(a1,a2,2.95)],a5),m,new A.fA_(o,v,a9),320,a6,9,1,l,!1))
k.push(new A.fP(C.a([new A.q(j,a3,0.05),new A.q(a1,a3,0.05),new A.q(a1,a2,0.05),new A.q(j,a2,0.05)],a5),m,new A.fA0(o,v,a9),320,a6,9,1,l,!1))}}n.e=n.x=0
v=v.p2?"It is on and playing "+E.ko[D.o.F(o,8)].a+". Tap it to watch full screen with the remote.":"The TV is off. Tap it to turn it on."
a7.e.n(0,m,new A.cV(w.b,v,new A.q(0,r,4),110))},
$S:1819}
A.fzY.prototype={
$3(d,e,f){return K.RY(d,e,this.a,f+this.b.a+this.c*3)},
$S:24}
A.fzZ.prototype={
$3(d,e,f){return K.RY(d,e,this.a,f+this.b.a+this.c*3)},
$S:24}
A.fA_.prototype={
$3(d,e,f){return K.RY(d,e,this.a,f+this.b.a+this.c*3)},
$S:24}
A.fA0.prototype={
$3(d,e,f){return K.RY(d,e,this.a,f+this.b.a+this.c*3)},
$S:24}
A.fA3.prototype={
$2(d,e){var w=this.a,v=w.f,u=w.r
w.f=1
w.r=!1
w.b=0
w.dR(new A.q(d,e,0),new A.q(d,e,2.2),0.7,B.LQ,0.7,10)
w.f=v
w.r=u},
$S:199}
A.fzW.prototype={
$1(d){return d.b===this.a.a},
$S:z+14}
A.fsZ.prototype={
$2(d,e){return this.a===d?e:0},
$S:715}
A.ft_.prototype={
$5(d,e,f,g,h){var w=d.a7(0,e.aI(0,g)).a7(0,new A.q(0,h,0)),v=this.a
A.kI(v,w.a7(0,f.aI(0,0.1)),e,B.ea,26,30,B.kF,f,0)
A.kI(v,w.a7(0,f.aI(0,0.2)),e,B.ea,22,26,B.i1,f,0.6)
A.kI(v,w.a7(0,f.aI(0,0.3)),e,B.ea,22,1.2,B.kF,f,0)
A.kI(v,w.a7(0,f.aI(0,0.3)),e,B.ea,1.2,26,B.kF,f,0)},
$S:z+88}
A.fsV.prototype={
$5(d,e,f,g,h){var w=d.a7(0,e.aI(0,g)),v=this.a,u=v.b
A.kI(v,w.a7(0,new A.q(0,42,0)).a7(0,f.aI(0,0.1)),e,B.ea,34,84,B.kF,f,0)
v.b=h
A.kI(v,w.a7(0,new A.q(0,41,0)).a7(0,f.aI(0,0.2)),e,B.ea,28,80,B.vI,f,0.2)
v.b=0
A.kI(v,w.a7(0,new A.q(0,58,0)).a7(0,f.aI(0,0.3)),e,B.ea,20,26,B.MP,f,0)
A.kI(v,w.a7(0,new A.q(0,22,0)).a7(0,f.aI(0,0.3)),e,B.ea,20,26,B.MP,f,0)
v.aV(w.a7(0,e.aI(0,9)).a7(0,new A.q(0,40,0)).a7(0,f.aI(0,1)),new A.q(2.6,2.6,2.6),B.F8,0.8)
v.b=u},
$S:z+123}
A.fsW.prototype={
$5$poster(d,e,f,g,h){var w=C.a([d,e,f,g],x.o),v=h<0?A.hbB():new A.fsX(h),u=h===0,t=u?1000:256
u=u?424:256
return this.a.push(new A.fP(w,0,v,t,u,1,2,this.b,!1))},
$4(d,e,f,g){return this.$5$poster(d,e,f,g,-1)},
$S:z+90}
A.fsX.prototype={
$3(d,e,f){return A.fR4(d,e,f,this.a)},
$S:24}
A.fsm.prototype={
$1(d){var w=d.b
return w==="pole"||w==="lamppost"},
$S:z+4}
A.fsn.prototype={
$2(d,e){return D.k.aL(d.c,e.c)},
$S:z+17}
A.fso.prototype={
$1(d){return this.a.cy.aj(0,d.a)},
$S:z+4}
A.fsz.prototype={
$1(d){return this.a.k4.t(0,d.a)},
$S:z+4}
A.fsK.prototype={
$1(d){return B.f54.t(0,d.b)},
$S:z+4}
A.fsY.prototype={
$3(d,e,f){var w=this.b
return A.vE(new A.q(d,e,f),this.a).a7(0,new A.q(w.c,0,w.d))},
$S:z+24}
A.fsP.prototype={
$3(d,e,f){return A.nj(d,e,f,this.a.a+D.k.bf(f/7))},
$S:24}
A.fsQ.prototype={
$3(d,e,f){return A.nj(d,e,f,this.a.a+D.k.bf(f/7))},
$S:24}
A.fsR.prototype={
$3(d,e,f){return A.H7(d,e,f,"NGMY TOWN",this.a)},
$S:24}
A.fsS.prototype={
$3(d,e,f){return A.H7(d,e,f,"NGMY TOWN",this.a)},
$S:24}
A.fsT.prototype={
$3(d,e,f){return A.nj(d,e,f,this.a.a+D.k.bf(f/7))},
$S:24}
A.fsU.prototype={
$3(d,e,f){return A.nj(d,e,f,this.a.a+4+D.k.bf(f/7))},
$S:24}
A.fsp.prototype={
$3(d,e,f){return A.nj(d,e,f,this.a.a+D.k.bf(f/7))},
$S:24}
A.fsq.prototype={
$3(d,e,f){return A.nj(d,e,f,this.a.a+7+D.k.bf(f/7))},
$S:24}
A.fsr.prototype={
$3(d,e,f){return A.nj(d,e,f,this.a.a+3+D.k.bf(f/7))},
$S:24}
A.fss.prototype={
$3(d,e,f){return A.nj(d,e,f,this.a.a+5+D.k.bf(f/7))},
$S:24}
A.fst.prototype={
$3(d,e,f){return A.nj(d,e,f,this.a.a+1+D.k.bf(f/7))},
$S:24}
A.fsu.prototype={
$3(d,e,f){return A.nj(d,e,f,this.a.a+2+D.k.bf(f/7))},
$S:24}
A.fsv.prototype={
$3(d,e,f){return A.H7(d,e,f,"NGMY COMPANY","Building the movement")},
$S:24}
A.fsw.prototype={
$3(d,e,f){return A.H7(d,e,f,"NGMY","New Global Movement for Youth")},
$S:24}
A.fsx.prototype={
$3(d,e,f){return A.H7(d,e,f,"NGMY COMPANY","Building the movement")},
$S:24}
A.fsy.prototype={
$3(d,e,f){return A.H7(d,e,f,"NGMY","New Global Movement for Youth")},
$S:24}
A.fsA.prototype={
$3(d,e,f){return A.nj(d,e,f,this.a.a+4+D.k.bf(f/7))},
$S:24}
A.fsB.prototype={
$3(d,e,f){return A.nj(d,e,f,this.a.a+6+D.k.bf(f/7))},
$S:24}
A.fsC.prototype={
$3(d,e,f){return A.nj(d,e,f,this.a.a+2+D.k.bf(f/7))},
$S:24}
A.fsD.prototype={
$3(d,e,f){return A.nj(d,e,f,this.a.a+3+D.k.bf(f/7))},
$S:24}
A.fsE.prototype={
$3(d,e,f){return A.H7(d,e,f,"NGMY STORE","Everything you need")},
$S:24}
A.fsF.prototype={
$3(d,e,f){return A.H7(d,e,f,"NGMY UBER","Rides home")},
$S:24}
A.fsG.prototype={
$3(d,e,f){return A.H7(d,e,f,"NGMY UBER","Rides home")},
$S:24}
A.fsH.prototype={
$3(d,e,f){return A.H7(d,e,f,"NGMY LICENCE","Get your Uber licence")},
$S:24}
A.fsI.prototype={
$3(d,e,f){return A.H7(d,e,f,"NGMY GAS","Open 24 hours")},
$S:24}
A.fsJ.prototype={
$3(d,e,f){return A.nj(d,e,f,this.a.a*2+this.b+1)},
$S:24}
A.fsL.prototype={
$1(d){return d.b===this.a.a&&!d.x&&d.Q.length!==0},
$S:z+14}
A.fsM.prototype={
$1(d){return d.b===this.a.a&&d.x},
$S:z+14}
A.fsN.prototype={
$3(d,e,f){return A.fR4(d,e,f,0)},
$S:24}
A.fsO.prototype={
$3(d,e,f){return A.fR4(d,e,f,0)},
$S:24}
A.fD3.prototype={
$2(d,e){var w,v=this.a
if(v!=null){w=v.b-d
v=v.c-e
v=w*w+v*v<1e4}else v=!0
return v},
$S:1820}
A.fD0.prototype={
$1(d){return D.d.t(B.I4,d.b)},
$S:z+4}
A.fD1.prototype={
$1(d){return d.b===this.a.a},
$S:z+14}
A.fD2.prototype={
$1(d){return d.b===this.a.a},
$S:z+14}
A.fja.prototype={
$5(d,e,f,g,h){var w,v,u,t,s,r,q,p,o,n,m,l,k,j
for(w=d.length,v=x.z,u=this.a,t=-f/2,s=u.a,r=this.b,q=0,p=0;p<w;++p){o=d[p]
n=o.a
m=C.a([],v)
l=new A.fm(m)
l.b=u.b
l.f=u.f
l.r=!0
l.aJ(new A.q(0,t,0),new A.q(g,f,g),h)
k=(q&1)===0?1:-1
j=n>0?1:-1
D.d.v(s,A.nE(m,r*k*j,0,new A.q(n,e,o.b)));++q}},
$S:1821}
A.fj0.prototype={
$3(d,e,f){var w=this.a,v=this.b,u=this.c
return new A.q(w.c+v*d+u*f,e,w.d+u*d-v*f)},
$2(d,e){return this.$3(d,e,0)},
$S:z+43}
A.ftQ.prototype={
$3(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k=x.z,j=C.a([],k),i=new A.fm(j)
i.b=this.a
i.r=!0
d.$1(i)
k=C.a([],k)
for(j=A.bCy(j,e,B.dX),w=j.length,v=f.a,u=f.b,t=f.c,s=x.o,r=0;r<j.length;j.length===w||(0,C.L)(j),++r){q=j[r]
p=C.a([],s)
for(o=q.a,n=o.length,m=0;m<o.length;o.length===n||(0,C.L)(o),++m){l=o[m]
p.push(new A.q(l.a+v,l.b+u,l.c+t))}k.push(new A.kp(p,q.b,q.c,q.d,q.e,q.f,q.r,q.w,q.x,q.y,q.z))}D.d.v(this.b.a,k)},
$S:z+91}
A.ftn.prototype={
$6$joint(d,e,f,g,h,i){var w=this.a
w.Tj(d,e,f,h,!1,g,this.b)
if(this.c&&i)w.ed(e,g*1.04,h,3,6)},
$5(d,e,f,g,h){return this.$6$joint(d,e,f,g,h,!0)},
$S:z+92}
A.fto.prototype={
$1(d){return d.fO(B.dX,2.6,B.Yz,this.a,this.b,0.15)},
$S:z+1}
A.ftp.prototype={
$1(d){return d.ed(B.dX,2.6,D.bO,3,this.a)},
$S:z+1}
A.ftq.prototype={
$1(d){return d.ed(B.dX,5.2,this.a,this.b,this.c+2)},
$S:z+1}
A.ftB.prototype={
$1(d){var w=this,v=w.d?12:8
return d.Tj(B.dX,B.aaR,w.a,w.b,!1,w.c,v)},
$S:z+1}
A.ftJ.prototype={
$1(d){return d.L8(B.dX,B.h88,5.1,B.bg0,!1,12)},
$S:z+1}
A.ftK.prototype={
$1(d){return d.ed(B.dX,2.7,this.a,this.b,this.c)},
$S:z+1}
A.ftL.prototype={
$1(d){var w=this,v=w.a?6.2:6.7,u=w.c
if(u<4)u=4
return d.ed(B.dX,v,w.b,u,w.d)},
$S:z+1}
A.ftM.prototype={
$1(d){var w=this.b,v=w?6:4
w=w?12:8
return d.ed(B.dX,4.7,this.a,v,w)},
$S:z+1}
A.ftN.prototype={
$1(d){return d.ed(B.dX,3,this.a,this.b,this.c)},
$S:z+1}
A.ftO.prototype={
$1(d){return d.ed(B.dX,1.25,this.a,3,6)},
$S:z+1}
A.ftP.prototype={
$1(d){return d.ed(B.dX,1,D.c,3,6)},
$S:z+1}
A.ftr.prototype={
$1(d){return d.ed(B.dX,1.15,this.a,2,6)},
$S:z+1}
A.fts.prototype={
$1(d){return d.ed(B.dX,1,this.a,3,6)},
$S:z+1}
A.ftt.prototype={
$1(d){return d.ed(B.dX,1,this.a,2,6)},
$S:z+1}
A.ftu.prototype={
$1(d){var w=C.ar(this.a,D.c,0.1)
w.toString
return d.ed(B.dX,1,w,2,6)},
$S:z+1}
A.ftv.prototype={
$1(d){var w=this.b,v=w?4:3
w=w?9:6
return d.ed(B.dX,5,this.a,v,w)},
$S:z+1}
A.ftw.prototype={
$1(d){return d.ed(B.dX,3.6,this.a,3,this.b)},
$S:z+1}
A.ftx.prototype={
$1(d){return d.ed(B.dX,4.8,this.a,this.b,this.c)},
$S:z+1}
A.fty.prototype={
$1(d){var w=this.b,v=w?4:3
w=w?9:6
return d.ed(B.dX,6.2,this.a,v,w)},
$S:z+1}
A.ftz.prototype={
$1(d){return d.ed(B.dX,4.2,this.a,3,this.b)},
$S:z+1}
A.ftA.prototype={
$1(d){var w=this.b,v=w?4:3
w=w?9:6
return d.ed(B.dX,5.1,this.a,v,w)},
$S:z+1}
A.ftC.prototype={
$1(d){return d.ed(B.dX,3.4,this.a,3,this.b)},
$S:z+1}
A.ftD.prototype={
$1(d){var w=C.ar(this.a,D.c,Math.abs(0.08))
w.toString
return d.ed(B.dX,2.6,w,this.b,this.c)},
$S:z+1}
A.ftE.prototype={
$1(d){return d.ed(B.dX,4.9,this.a,this.b,this.c)},
$S:z+1}
A.ftF.prototype={
$1(d){return d.ed(B.dX,3,this.a,3,this.b)},
$S:z+1}
A.ftG.prototype={
$1(d){var w=this.b,v=w?4:3
w=w?9:6
return d.ed(B.dX,5,this.a,v,w)},
$S:z+1}
A.ftH.prototype={
$1(d){return d.ed(B.dX,3.6,this.a,3,this.b)},
$S:z+1}
A.ftI.prototype={
$1(d){return d.ed(B.dX,2.3,this.a,3,6)},
$S:z+1}
A.fn0.prototype={
$4(d,e,f,g){var w,v,u,t,s,r,q,p
for(w=this.a,v=e/2+0.2,u=d-8,t=-e/2-0.2,s=d/2+0.2,r=e-8,q=-d/2-0.2,p=f;p<g;p+=22){A.kI(w,new A.q(0,p,v),B.hI,B.ea,u,9,B.i1,B.ig,0.6)
A.kI(w,new A.q(0,p,t),B.qW,B.ea,u,9,B.i1,B.tm,0.6)
A.kI(w,new A.q(s,p,0),B.tm,B.ea,r,9,B.i1,B.hI,0.6)
A.kI(w,new A.q(q,p,0),B.ig,B.ea,r,9,B.i1,B.qW,0.6)}},
$S:1822}
A.fA9.prototype={
$4$alongX(d,e,f,g){var w,v,u,t,s,r,q,p,o,n
for(w=this.a,v=0;v<=f;++v){u=A.o7(d,e,v/f)
w.aE0(new A.q(u.a,4,u.c),B.hgt,B.Ym,!1,0.05)}t=A.o7(d,e,0.5)
for(s=e.aE(0,d).guW()+0.15,r=t.a,q=t.c,p=0;p<2;++p){o=B.dfX[p]
n=g?new A.q(s,0.16,0.3):new A.q(0.3,0.16,s)
w.aV(new A.q(r,o,q),n,B.Ym,0.05)}},
$3(d,e,f){return this.$4$alongX(d,e,f,!0)},
$S:z+94}
A.fA6.prototype={
$2(d,e){return this.a.j8(A.Dj(d,0.35,3),0.06,e,!1,0.4,6)},
$S:z+95}
A.fA5.prototype={
$1(d){return this.a.j8(A.Dj(d,0.5,3),0.14,B.pZ,!1,0.3,8)},
$S:z+96}
A.fA8.prototype={
$2$col(d,e){return this.a.j8(A.Dj(d,0.4,3),0.055,e,!1,0.35,6)},
$1(d){return this.$2$col(d,B.Yv)},
$S:z+97}
A.fA7.prototype={
$5$h$w(d,e,f,g,h){var w=this.a
w.b=d
w.aV(e,new A.q(h,g,0.06),f,0.3)},
$3(d,e,f){return this.$5$h$w(d,e,f,0.7,0.45)},
$4$w(d,e,f,g){return this.$5$h$w(d,e,f,0.7,g)},
$S:z+98}
A.fB4.prototype={
$0(){return A.fR(1320,120,0.25,"tri")},
$S:0}
A.dSU.prototype={
$1(d){return this.a},
$S:39}
A.dSX.prototype={
$0(){return C.a4(this.a,!1).ih()},
$S:0}
A.dSY.prototype={
$0(){return this.a.rD(A.b0Z("","",!0))},
$S:0}
A.dSZ.prototype={
$0(){return this.a.rD(B.dDJ)},
$S:0}
A.dT1.prototype={
$0(){return this.a.rD(A.b0Z("wiring","",!0))},
$S:0}
A.dT2.prototype={
$0(){return this.a.rD(A.b0Z("plumbing","",!0))},
$S:0}
A.dT3.prototype={
$0(){return this.a.rD(A.b0Z("fix","",!0))},
$S:0}
A.dT4.prototype={
$0(){return this.a.rD(A.cin(!0,!0,null,!1))},
$S:0}
A.dT5.prototype={
$0(){return this.a.rD(A.cin(!0,!0,null,!0))},
$S:0}
A.dT6.prototype={
$0(){return this.a.rD(B.e8v)},
$S:0}
A.dT7.prototype={
$0(){return this.a.rD(new A.as1(!0,null))},
$S:0}
A.dT8.prototype={
$0(){return this.a.rD(B.dNN)},
$S:0}
A.dT_.prototype={
$0(){var w=this.a
return w.m(new A.dSW(w))},
$S:0}
A.dSW.prototype={
$0(){var w=this.a,v=w.e
w.e=!v
if(v)w.f=""},
$S:0}
A.dT0.prototype={
$1(d){var w=this.a
return w.m(new A.dSV(w,d))},
$S:2}
A.dSV.prototype={
$0(){return this.a.f=this.b},
$S:0}
A.dSP.prototype={
$0(){var w=this.b.a
w=w==="house"?B.hkS:A.b0Z("",w,!1)
return this.a.rD(w)},
$S:0}
A.dSQ.prototype={
$0(){return this.a.rD(B.dKu)},
$S:0}
A.dSR.prototype={
$0(){return this.a.rD(B.aIk)},
$S:0}
A.dSS.prototype={
$1(d){return d.length!==0},
$S:3}
A.dST.prototype={
$1(d){var w=this.a.a
return D.a.t((w[4]+" "+w[0]+" "+w[5]).toLowerCase(),d)},
$S:3}
A.f75.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new A.f74())},
$S:11}
A.f74.prototype={
$0(){},
$S:0}
A.cxp.prototype={
$0(){$.ajp=!$.ajp
A.heC()
A.fR($.ajp?520:420,60,0.25,"tri")},
$S:0}
A.cxq.prototype={
$0(){$.ajo=!$.ajo
A.heC()
A.fR($.ajo?520:420,60,0.25,"tri")},
$S:0}
A.fSk.prototype={
$1(d){var w,v,u,t,s,r,q,p,o=null,n=C.aG(d,o,x.w).w,m=this.b,l=this.c,k=l.length,j=x.p,i=C.a([C.d(this.a,o,o,o,o,o,o,D.dd,o,o,o),D.au,C.d(""+new C.Z(m,new A.fSj(),C.T(m).k("Z<1>")).gL(0)+" of "+k+" steps done",o,o,o,o,o,o,B.Ka,o,o,o),D.W],j)
for(w=0;w<k;++w){v=D.c.j(0.05)
u=new C.aP(14,14)
t=new C.ay(m[w]?D.bf.j(0.6):D.bC,1,D.r,-1)
s=m[w]
r=s?"\u2705":""+(w+1)+"."
q=s?D.c:D.aB
p=l[w]
s=s?D.aC:D.c
i.push(C.p(o,new C.cd(D.aM,D.e,D.i,D.E,o,D.p,o,0,C.a([new C.y(r,o,new C.F(!0,q,o,o,o,o,14,D.u,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),o,o,o,o,o,o,o,o,o),D.as,new C.bA(1,D.bd,new C.y(p,o,new C.F(!0,s,o,o,o,o,13,o,o,o,o,o,1.4,o,o,o,o,o,o,o,o,o,o,o,o,o),o,o,o,o,o,o,o,o,o),o)],j),o),D.f,o,o,new C.o(v,o,new C.bH(t,t,t,t),new C.bh(u,u,u,u),o,o,D.n),o,o,o,D.cu,D.bg,o,o,o))}return C.bm(!0,new C.cT(new C.aZ(0,1/0,0,n.a.b*0.75),C.cl(i,o,o,D.bQ,o,o,D.ah,!0),o),!0,!1,D.af,!0,!0)},
$S:27}
A.fSj.prototype={
$1(d){return d},
$S:116}
A.bXp.prototype={
$0(){return C.a4(this.a,!1).ih()},
$S:0}
A.db_.prototype={
$0(){var w=this.a,v=w.gem(0),u=this.b
v.w=u==="practice"
u=u==="test"
v.z=u
if(u)v.f=v.e=!1
w.pv()},
$S:0}
A.daY.prototype={
$0(){var w=this.a
w.y=this.b
w.z=this.c},
$S:0}
A.daZ.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.daX(w))},
$S:0}
A.daX.prototype={
$0(){return this.a.y=null},
$S:0}
A.daK.prototype={
$0(){return this.a.x=0},
$S:0}
A.daL.prototype={
$0(){return this.a.x=0},
$S:0}
A.daJ.prototype={
$1(d){var w=this.a.gem(0).b
return new C.bd(w,C.a7(w).k("bd<2>")).t(0,d)},
$S:3}
A.daM.prototype={
$0(){var w=this.a
w.gem(0).r=!1
w.pv()},
$S:0}
A.daN.prototype={
$1(d){return d.a===this.a},
$S:z+12}
A.daO.prototype={
$2(d,e){return e===this.a},
$S:405}
A.daP.prototype={
$0(){var w=this.a
w.w=""
w.pv()},
$S:0}
A.daQ.prototype={
$1(d){return d.a===this.a},
$S:z+7}
A.daR.prototype={
$0(){var w=this.a,v=this.b
if(w.w===v)v=""
w.w=v
w.x=v.length===0?0:this.c},
$S:0}
A.daS.prototype={
$1(d){return d.a===this.a},
$S:z+7}
A.daT.prototype={
$0(){var w=this.a
w.pv()
w.x=this.b},
$S:0}
A.daU.prototype={
$0(){var w=this.a
w.pv()
w.x=this.b},
$S:0}
A.daV.prototype={
$0(){return this.a.x=this.b},
$S:0}
A.daW.prototype={
$0(){var w=this.a,v=w.gem(0),u=v.a
v.a=!u
if(u)v.d=!1
w.pv()},
$S:0}
A.db0.prototype={
$0(){var w,v=this.a,u=v.gem(0)
u.a=!0
u.d=!1
w=this.b
if(w.e)u.x=!0
u.Q=w.r
v.ax=v.at.gir()/1000
v.pv()},
$S:0}
A.db1.prototype={
$0(){var w=this.a,v=w.gem(0)
v.d=v.a=!0
w.pv()},
$S:0}
A.dba.prototype={
$1(d){return!d},
$S:116}
A.dbj.prototype={
$0(){var w=this.a.gwX()
return A.fSi(this.b,w.b,w.d,this.c)},
$S:0}
A.dbq.prototype={
$1(d){var w,v,u,t,s=C.a([],x.z),r=this.a,q=r.gem(0),p=q.Q
if(p.length!==0){p=r.at.gir()
w=r.ax
v=q.Q
u=v==="fire"?7:4.5
t=p/1000-w<u
p=v}else t=!1
if(!t)q=q.x&&p.length!==0
else q=!0
if(q){q=t?p:"smolder"
A.hvf(new A.fm(s),q,new A.db7(),0.32,r.at.gir()/1000)}return s},
$S:z+10}
A.db7.prototype={
$1(d){return new A.q(d.a*0.32,-0.2+d.b*0.32,0.8+d.c*0.32)},
$S:z+6}
A.dbb.prototype={
$0(){return this.a.aB2("learn")},
$S:0}
A.dbc.prototype={
$0(){return this.a.aB2("practice")},
$S:0}
A.dbk.prototype={
$0(){return this.a.aB2("test")},
$S:0}
A.dbl.prototype={
$0(){var w=this.a
return w.m(new A.db9(w))},
$S:0}
A.db9.prototype={
$0(){var w=this.a,v=w.gem(0)
v.e=!v.e
w.pv()},
$S:0}
A.dbm.prototype={
$0(){var w=this.a
return w.m(new A.db8(w))},
$S:0}
A.db8.prototype={
$0(){var w=this.a,v=w.gem(0)
v.f=!v.f
w.pv()},
$S:0}
A.dbn.prototype={
$0(){return A.hbZ(this.a)},
$S:0}
A.dbo.prototype={
$0(){var w=this.a,v=w.gip()
return v.hT(10,0.2,new A.q(0.6,0,w.gem(0).c===0?4.2:0.4),-0.95)},
$S:0}
A.dbp.prototype={
$0(){var w=this.a,v=w.gip()
return v.hT(10,0.2,new A.q(-0.6,0,w.gem(0).c===0?4.2:0.4),0.95)},
$S:0}
A.dbr.prototype={
$1(d){return!this.a.gem(0).b.iq(0,d.a)},
$S:z+7}
A.dbd.prototype={
$0(){var w=this.a,v=this.b,u=v.a
if(w.gem(0).b.iq(0,u)){w.mF("That wire is already fastened. Tap the wire in the 3D view to take it off if you want to move it.")
return}w.m(new A.db6(w,v))
if(w.w.length!==0){w.aY4(u)
w.iK(v.b+": now tap the screw it belongs on.",!0)}},
$S:0}
A.db6.prototype={
$0(){var w=this.a,v=this.b.a
return w.w=w.w===v?"":v},
$S:0}
A.dbe.prototype={
$0(){var w=this.a,v=w.gwX(),u=v.b,t=A.fRQ(v)
w=w.gem(0)
w=C.a([new A.aba(u,t,A.h9l(v,w),w.y)],x.fJ)
v=B.aH5.h(0,v.a)
if(v==null)v=B.aAi
return A.hzC(this.b,w,v,u)},
$S:0}
A.dbf.prototype={
$0(){var w=this.a
w.m(new A.db5(w))
A.wW()
w.iK("The wires are folded back and the device is pushed into the box. Now put the cover plate on.",!0)
w.ol()},
$S:0}
A.db5.prototype={
$0(){var w=this.a
w.gem(0).c=1
w.pv()},
$S:0}
A.dbg.prototype={
$0(){var w=this.a
w.m(new A.db4(w))
w.ol()},
$S:0}
A.db4.prototype={
$0(){var w=this.a
w.gem(0).c=0
w.pv()},
$S:0}
A.dbh.prototype={
$0(){var w=this.a
w.m(new A.db3(w))
A.wW()
w.iK("Cover plate on. Now turn the power on and test.",!0)},
$S:0}
A.db3.prototype={
$0(){var w=this.a
w.gem(0).c=2
w.pv()},
$S:0}
A.dbi.prototype={
$0(){var w=this.a
w.m(new A.db2(w))
w.ol()},
$S:0}
A.db2.prototype={
$0(){var w=this.a,v=w.gem(0)
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
A.eXi.prototype={
$0(){var w=this.a
w.x=this.b
w.y=this.c},
$S:0}
A.eXj.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.eXh(w))},
$S:0}
A.eXh.prototype={
$0(){return this.a.x=null},
$S:0}
A.eXb.prototype={
$0(){return this.a.w=0},
$S:0}
A.eXc.prototype={
$0(){var w=this.a,v=w.gem(0)
v.a.M(0,this.b)
v.c=!1
v.d=""
w.f=A.bCS(v)
w.r=""},
$S:0}
A.eXd.prototype={
$0(){var w=this.a,v=w.gem(0)
v.b.n(0,this.b,!0)
v.d=""
w.f=A.bCS(v)},
$S:0}
A.eXe.prototype={
$0(){return this.a.w=this.b},
$S:0}
A.eXf.prototype={
$1(d){return this.a.gem(0).b.h(0,d)!==!0},
$S:3}
A.eXg.prototype={
$0(){var w,v=this.a,u=v.gem(0)
u.c=!0
w=this.b
u.d=w.length===0?"":D.d.gI(w)
v.f=A.bCS(u)},
$S:0}
A.eXn.prototype={
$1(d){return!d},
$S:116}
A.eXr.prototype={
$0(){return A.fSi(this.a,"Sink drain (P-trap)",B.diA,this.b)},
$S:0}
A.eXo.prototype={
$1(d){return A.ika(this.a.gem(0),d)},
$S:z+10}
A.eXp.prototype={
$0(){var w=this.a
return w.m(new A.eXm(w,this.b))},
$S:0}
A.eXm.prototype={
$0(){var w=this.a,v=this.b
return w.r=w.r===v?"":v},
$S:0}
A.eXq.prototype={
$0(){var w=this.a
w.m(new A.eXl(w))
w.ol()},
$S:0}
A.eXl.prototype={
$0(){var w,v=this.a,u=v.gem(0)
u.a.aa(0)
w=u.b
w.aJI(w,new A.eXk())
u.c=!1
v.r=u.d=""
v.w=0
v.f=A.bCS(u)},
$S:0}
A.eXk.prototype={
$2(d,e){return!1},
$S:1824}
A.de1.prototype={
$0(){var w=this.a
w.x=this.b
w.y=this.c},
$S:0}
A.de2.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.de0(w))},
$S:0}
A.de0.prototype={
$0(){return this.a.x=null},
$S:0}
A.ddU.prototype={
$0(){return this.a.w=0},
$S:0}
A.ddX.prototype={
$1(d){return d.a===this.a},
$S:z+37}
A.ddY.prototype={
$0(){var w=this.a,v=w.gem(0)
v.f=!1
w.f=A.aPW(v)
w.w=this.b},
$S:0}
A.ddZ.prototype={
$0(){var w=this.a,v=w.gem(0),u=v.e
u.bs(u,new A.ddW(this.b))
v.f=!1
w.f=A.aPW(v)},
$S:0}
A.ddW.prototype={
$2(d,e){return e===this.a},
$S:405}
A.de_.prototype={
$0(){return this.a.w=this.b},
$S:0}
A.ddV.prototype={
$0(){var w=this.a,v=w.gem(0)
v.f=!v.f
w.f=A.aPW(v)},
$S:0}
A.de6.prototype={
$1(d){return!d},
$S:116}
A.dec.prototype={
$0(){return A.fSi(this.a,"Faucet supply lines",B.dvr,this.b)},
$S:0}
A.de7.prototype={
$1(d){return A.iaU(this.a.gem(0),d)},
$S:z+10}
A.de8.prototype={
$0(){var w=this.a
return w.m(new A.de5(w))},
$S:0}
A.de5.prototype={
$0(){var w=this.a,v=w.gem(0)
v.r=!v.r
w.f=A.aPW(v)},
$S:0}
A.dea.prototype={
$0(){var w=this.b
return w.m(new A.de4(this.a,w))},
$S:0}
A.de4.prototype={
$0(){var w=this.b,v=w.r,u=this.a.a
return w.r=v===u?"":u},
$S:0}
A.de9.prototype={
$1(d){return d===this.a.a},
$S:3}
A.deb.prototype={
$0(){var w=this.a
w.m(new A.de3(w))
w.ol()},
$S:0}
A.de3.prototype={
$0(){var w=this.a,v=w.gem(0)
v.e.aa(0)
v.f=!1
w.r=""
w.w=0
w.f=A.aPW(v)},
$S:0}
A.dl5.prototype={
$0(){var w=this.a
w.x=this.b
w.y=this.c},
$S:0}
A.dl6.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.dl4(w))},
$S:0}
A.dl4.prototype={
$0(){return this.a.x=null},
$S:0}
A.dl_.prototype={
$0(){return this.a.r=0},
$S:0}
A.dl1.prototype={
$0(){var w=this.a,v=w.d
v.d.W(0,72)
w.f=A.agK(v)
w.r=this.b},
$S:0}
A.dl2.prototype={
$0(){var w=this.a,v=w.d
v.c=!0
v.b=!1
w.f=A.agK(v)
w.r=this.b},
$S:0}
A.dl3.prototype={
$0(){return this.a.r=this.b},
$S:0}
A.dl0.prototype={
$1(d){return this.a},
$S:39}
A.dle.prototype={
$0(){return A.fSi(this.a,"Fix the house",B.cqJ,this.b)},
$S:0}
A.dl9.prototype={
$0(){return this.a.cgq(this.b)},
$S:0}
A.dlb.prototype={
$1(d){return d<=this.a.d.a},
$S:34}
A.dla.prototype={
$1(d){return A.hvx(this.a.d,d)},
$S:z+10}
A.dlc.prototype={
$0(){var w=this.a
return w.m(new A.dl8(w))},
$S:0}
A.dl8.prototype={
$0(){var w=this.a
return w.w=w.w==="wrench"?"":"wrench"},
$S:0}
A.dld.prototype={
$1(d){var w=this.a
return w.m(new A.dl7(w,d))},
$S:6}
A.dl7.prototype={
$0(){var w=this.a,v=w.d,u=D.k.V(this.b)
v.a=u
if(u<5)w.r=0
w.f=A.agK(v)},
$S:0}
A.fiJ.prototype={
$0(){return this.a.e=!1},
$S:0}
A.fiH.prototype={
$0(){return this.a.e=!0},
$S:0}
A.fiI.prototype={
$0(){var w=this.a
w.d=C.dh(B.bx2,new A.fiG(w))},
$S:0}
A.fiG.prototype={
$1(d){var w=this.a.a,v=w.e
return v.apy(w.f?1.06:0.94)},
$S:11}
A.fiL.prototype={
$1(d){return this.a.c8y(0)},
$S:71}
A.fiM.prototype={
$1(d){return this.a.b7U()},
$S:111}
A.fiK.prototype={
$1(d){return this.a.b7U()},
$S:141}
A.cbQ.prototype={
$0(){return C.a4(this.a,!1).ih()},
$S:0}
A.fAL.prototype={
$5(d,e,f,g,h){var w=this.a.a.t(0,h),v=this.b
v.b=d
if(w)v.apf(e,0.66,f,!1,!0,!0,g,14)
else{v.d=0.3
v.aJF(e,0.74,D.b_,!1,!0,0,8)
v.d=1}},
$S:z+100}
A.fAK.prototype={
$6(d,e,f,g,h,i){var w,v
if(!i)return
w=this.a.b.h(0,e)
v=w===!0?f:f.a7(0,h)
w=this.b
w.e=0.5
w.b=d
w.dR(v.aE(0,g.aI(0,0.6)),v.a7(0,g.aI(0,0.6)),1.12,B.pZ,0.35,8)
w.zs(v.aE(0,g.aI(0,0.62)),v.aE(0,g.aI(0,0.5)),1.2,0.5,B.XM,0.2,8)
w.b=0
w.zs(f.aE(0,g.aI(0,0.05)),f.a7(0,g.aI(0,0.08)),0.82,0.55,B.bpt,0.1,12)
w.e=0},
$S:z+101}
A.fAJ.prototype={
$1(d){return d.b<-0.6},
$S:z+22}
A.fzQ.prototype={
$1(d){return this.a.e.h(0,d)===this.b},
$S:34}
A.fCr.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=A.agW(d)
for(w=this.a*1.6,v=this.b,u=p.a,t=p.b,s=p.c,r=0;r<7;++r){q=D.k.F(w+r/7,1)
v.fO(new A.q(u+Math.sin(r*2.1)*q*1.4,t+(q*2.4-q*q*6.5),s+(1+q*2.5)),0.2,e,3,6,0.9)}},
$S:1825}
A.fCq.prototype={
$1(d){return this.a.e.h(0,d.a)!=null},
$S:z+37}
A.cnU.prototype={
$1(d){return d.a===this.a},
$S:z+102}
A.cnV.prototype={
$1(d){return d.a===this.a},
$S:z+3}
A.cnR.prototype={
$1(d){return this.a.vo(0,d).c.toLowerCase()},
$S:14}
A.cnW.prototype={
$1(d){var w
if(!this.a.e.t(0,d.a)){w=d.b
w=w==="valve"||D.a.a0(w,"hose")}else w=!1
return w},
$S:z+3}
A.cnX.prototype={
$1(d){var w=this.a,v=d.a
return w.e.t(0,v)&&w.aHw(v)>0},
$S:z+3}
A.cnY.prototype={
$1(d){return d.a},
$S:z+23}
A.cnZ.prototype={
$1(d){return d.a},
$S:z+23}
A.cnS.prototype={
$1(d){return this.a.e.t(0,d.a)},
$S:z+3}
A.cnT.prototype={
$1(d){var w=this.a,v=d.a
return w.aHw(v)<=0||!w.e.t(0,v)},
$S:z+3}
A.fAI.prototype={
$1(d){var w=this.a
w.b=0
w.dR(new A.q(d,8,0),new A.q(d,8,1.6),0.5,B.LQ,0.7,10)},
$S:6}
A.fAG.prototype={
$1(d){var w,v,u,t,s,r,q=C.a([],x.o)
for(w=d.length,v=this.a,u=v.a,t=v.b,v=v.c,s=0;s<d.length;d.length===w||(0,C.L)(d),++s){r=d[s]
q.push(new A.q(r.a+u,r.b+t,r.c+v))}return q},
$S:z+105}
A.fAA.prototype={
$3$r(d,e,f){var w=this.a,v=this.b.c
v===$&&C.c()
w.b=9100+D.d.bh(v.c,new A.fAD(d))
w.d=0.32
w.aJF(e,f,D.b_,!1,!0,0,8)
w.d=1},
$2(d,e){return this.$3$r(d,e,1.2)},
$S:z+106}
A.fAD.prototype={
$1(d){return d.a===this.a},
$S:z+3}
A.fAB.prototype={
$3(d,e,f){var w=this.a,v=this.b.c
v===$&&C.c()
w.b=9100+D.d.bh(v.c,new A.fAC(d))
w.d=0.32
w.aJ(e,f,D.b_)
w.d=1},
$S:z+107}
A.fAC.prototype={
$1(d){return d.a===this.a},
$S:z+3}
A.fAH.prototype={
$3(d,e,f){var w,v,u,t=this,s=t.a,r=s.c
r===$&&C.c()
w=D.d.cu(r.c,d)
r=d.c
v=s.e
u=d.a
if(v.t(0,u))s="Fitted."
else{s=s.b?"":d.e
s="A spot for the "+r.toLowerCase()+". "+s}t.b.n(0,9100+w,new A.cV(r,s,e,26))
if(t.c&&!v.t(0,u)&&t.d.length!==0)t.e.push(new A.hh(e.a7(0,B.h_P),f,D.eN,0))},
$S:z+108}
A.fAw.prototype={
$0(){return this.a.$3(this.b.a,new A.q(this.c-10,9,2.4),B.aaY)},
$S:0}
A.fAx.prototype={
$0(){return this.a.$3(this.b.a,new A.q(this.c-8,9,2.4),B.aaY)},
$S:0}
A.fAy.prototype={
$0(){return this.a.$3(this.b.a,new A.q(this.c+8,9,2.4),B.aaY)},
$S:0}
A.fAE.prototype={
$4(d,e,f,g){var w,v,u,t,s=this
if(D.d.bh(s.a,new A.fAF(d))<0||!s.b.e.t(0,d))return
w=s.b.f.h(0,d)
v=(w==null?0:w)>=1
w=s.c
u=9260+g
w.b=u
t=v?e:e.a7(0,f.aI(0,1.7))
w.dR(t.aE(0,f.aI(0,0.6)),t.a7(0,f.aI(0,0.6)),1.12,B.pZ,0.35,8)
w.zs(t.aE(0,f.aI(0,0.62)),t.aE(0,f.aI(0,0.5)),1.2,0.5,B.XM,0.2,8)
w=v?"Tight.":"Loose. Tap it with the wrench to tighten it."
s.d.n(0,u,new A.cV("Slip nut",w,e,10))},
$S:z+109}
A.fAF.prototype={
$1(d){return d.a===this.a},
$S:z+3}
A.fAz.prototype={
$1(d){return d.a===this.a},
$S:z+3}
A.fRs.prototype={
$1(d){return d.a===this.a},
$S:z+3}
A.er2.prototype={
$0(){var w=this.a
w.z=this.b
w.Q=this.c},
$S:0}
A.er3.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.er1(w))},
$S:0}
A.er1.prototype={
$0(){return this.a.z=null},
$S:0}
A.eqY.prototype={
$0(){return this.a.y=0},
$S:0}
A.er7.prototype={
$1(d){return d.a===this.a},
$S:z+3}
A.eqN.prototype={
$0(){return this.a.y=this.b},
$S:0}
A.eqO.prototype={
$0(){var w=this.a
w.aev()
w.y=this.b},
$S:0}
A.eqP.prototype={
$1(d){return this.a.c8z()},
$S:8}
A.eqU.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.e
s===$&&C.c()
w=s.c
w===$&&C.c()
v=this.b
v=v>0?"\n\nYou are paid "+v+" stars! \u2b50":""
s=C.d("The "+w.b.toLowerCase()+" is finished and nothing leaks."+v+"\n\nMistakes: "+s.w+"\n\nThe next job is different.",u,u,u,u,u,u,B.a9P,u,u,u)
return C.ep(C.a([C.bN(!1,B.aVf,u,u,!0,u,u,u,new A.eqS(d),u,u),C.bI(B.fGR,u,new A.eqT(t,d),u)],x.p),u,u,G.nj,s,u,u,u,u,B.fIt,u)},
$S:19}
A.eqS.prototype={
$0(){C.a4(this.a,!1).O(null)
return null},
$S:0}
A.eqT.prototype={
$0(){C.a4(this.b,!1).O(null)
this.a.aZ6()},
$S:0}
A.er0.prototype={
$0(){var w,v,u=this.a
u.d=D.o.F(Date.now(),1e5)
w=u.gCY(0)
v=u.e
v===$&&C.c()
u.e=A.h4I(v.b,w,null)
u.x=""
u.as=!1
u.z=null
u.y=0
u.aev()},
$S:0}
A.er8.prototype={
$1(d){return d.b===this.a},
$S:z+3}
A.eqV.prototype={
$1(d){var w=this.a.e
w===$&&C.c()
return w.x.t(0,d.a)},
$S:z+3}
A.eqW.prototype={
$1(d){return d.c.toLowerCase()},
$S:z+23}
A.eqX.prototype={
$1(d){var w=this.a.e
w===$&&C.c()
return w.aHw(d.a)>0},
$S:z+3}
A.er4.prototype={
$0(){var w=this.b
w.x=this.a.b
w.aev()},
$S:0}
A.er5.prototype={
$1(d){return d.a===this.a.a},
$S:z+3}
A.er6.prototype={
$0(){return this.a.y=this.b},
$S:0}
A.eqR.prototype={
$0(){var w=this.a
return w.m(new A.eqQ(w,this.b,this.c))},
$S:0}
A.eqQ.prototype={
$0(){var w=this.a
w.x=this.b?"":this.c
w.aev()},
$S:0}
A.er9.prototype={
$1(d){var w=this.a.e
w===$&&C.c()
return w.e.t(0,d.a)},
$S:z+3}
A.erd.prototype={
$0(){return this.a.c2q(this.b)},
$S:0}
A.erb.prototype={
$1(d){return d<=5},
$S:34}
A.era.prototype={
$1(d){var w=this.a,v=w.e
v===$&&C.c()
return A.ik2(v,w.w.gir()/1000)},
$S:z+10}
A.erc.prototype={
$0(){return this.b.cyK(this.a.a)},
$S:0}
A.er_.prototype={
$1(d){var w,v,u,t,s,r,q=null,p=this.a,o=p.e
o===$&&C.c()
o=C.a([B.fUr,D.au,C.d("Mistakes "+o.w,q,q,q,q,q,q,B.Ka,q,q,q),D.W],x.p)
w=p.e.c
w===$&&C.c()
w=w.c
v=w.length
u=0
for(;u<v;++u){t=w[u]
s=D.c.j(0.05)
r=new C.aP(12,12)
o.push(C.p(q,new C.y((p.e.e.t(0,t.a)?"\u2705":"\ud83d\udd27")+" "+t.c,q,B.fhh,q,q,q,q,q,q,q,q,q),D.f,q,q,new C.o(s,q,q,new C.bh(r,r,r,r),q,q,D.n),q,q,q,D.eH,D.bT,q,q,q))}o.push(D.am)
o.push(B.fyh)
o.push(D.P)
o.push(C.bI(B.aVh,q,new A.eqZ(p,d),q))
return C.bm(!0,C.cl(o,q,q,D.bQ,q,q,D.ah,!0),!0,!1,D.af,!0,!0)},
$S:27}
A.eqZ.prototype={
$0(){C.a4(this.b,!1).O(null)
this.a.aZ6()},
$S:0}
A.fZP.prototype={
$1(d){return d.a===this.a},
$S:z+40}
A.csR.prototype={
$1(d){return D.d.t(B.jE,d.b)},
$S:z+8}
A.csY.prototype={
$1(d){return!this.a.y.t(0,d)},
$S:34}
A.csZ.prototype={
$1(d){var w=this.a
return w.x.aj(0,d)&&w.z.t(0,d)},
$S:34}
A.ct_.prototype={
$1(d){var w=$.Hf()[this.b],v=!1
if(w>=d)if(w<=d+48){w=this.a.Q.h(0,d)
w=(w==null?null:w.a)===!0}else w=v
else w=v
return w},
$S:34}
A.ct0.prototype={
$1(d){return this.a.Q.h(0,d).c.t(0,this.b)},
$S:34}
A.ct2.prototype={
$1(d){var w,v=J.e_(6,x.S)
for(w=0;w<6;++w)v[w]=w
return D.d.d0(v,new A.ct1(this.a,d))},
$S:34}
A.ct1.prototype={
$1(d){return this.a.c.t(0,this.b*10+d)},
$S:34}
A.csQ.prototype={
$1(d){var w=this.a.Q.h(0,d)
return(w==null?null:w.a)===!0},
$S:34}
A.csO.prototype={
$1(d){return!A.j5(d).c},
$S:34}
A.csP.prototype={
$1(d){var w=this.a.aqk(A.j5(d).d.a)
return(w==null?null:w.b.t(0,d))===!0},
$S:34}
A.csW.prototype={
$1(d){return d.c},
$S:z+11}
A.csX.prototype={
$1(d){return d.d},
$S:z+11}
A.csS.prototype={
$1(d){return d.d},
$S:z+11}
A.csT.prototype={
$1(d){var w=this.a.Q.h(0,d)
return(w==null?null:w.e)===!0},
$S:34}
A.csU.prototype={
$1(d){return d.a===this.a},
$S:z+12}
A.ct3.prototype={
$2(d,e){return e===this.a},
$S:405}
A.csV.prototype={
$1(d){return d.c===this.a},
$S:z+8}
A.evD.prototype={
$0(){var w=this.a
w.ay=this.b
w.ch=this.c},
$S:0}
A.evE.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.evC(w))},
$S:0}
A.evC.prototype={
$0(){return this.a.ay=null},
$S:0}
A.euJ.prototype={
$0(){return this.a.cx=!0},
$S:0}
A.euK.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.euI(w))},
$S:12}
A.euI.prototype={
$0(){return this.a.cx=!1},
$S:0}
A.euL.prototype={
$0(){return this.a.cx=!0},
$S:0}
A.euM.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.euH(w))},
$S:12}
A.euH.prototype={
$0(){return this.a.cx=!1},
$S:0}
A.euN.prototype={
$1(d){return this.a.bQO()},
$S:8}
A.euO.prototype={
$1(d){return this.a.c8E()},
$S:8}
A.euY.prototype={
$0(){return this.a.as=-1},
$S:0}
A.ev_.prototype={
$0(){return this.a.as=-1},
$S:0}
A.euP.prototype={
$1(d){return d.b==="tv"},
$S:712}
A.euQ.prototype={
$0(){return this.a.as=-1},
$S:0}
A.euR.prototype={
$0(){return this.a.as=-1},
$S:0}
A.evg.prototype={
$0(){var w=this.a
w.as=this.b
w.Q=-1
w.z=w.ax=""
w.CW=!1},
$S:0}
A.euZ.prototype={
$0(){var w=this.a
w.as=-1
w.ax=""},
$S:0}
A.evz.prototype={
$0(){return this.a.at=0},
$S:0}
A.evA.prototype={
$0(){return this.a.z=""},
$S:0}
A.evB.prototype={
$0(){return this.a.at=this.b},
$S:0}
A.evw.prototype={
$0(){return this.a.z=""},
$S:0}
A.evx.prototype={
$0(){var w=this.a,v=this.b
return w.Q=w.Q===v?-1:v},
$S:0}
A.evy.prototype={
$0(){return this.a.at=2000+this.b},
$S:0}
A.evv.prototype={
$0(){return this.a.z=""},
$S:0}
A.evn.prototype={
$1(d){return d.a===this.a},
$S:z+12}
A.evo.prototype={
$0(){return this.a.ax=""},
$S:0}
A.evp.prototype={
$1(d){return d.a===this.a},
$S:z+7}
A.evq.prototype={
$0(){var w=this,v=w.a,u=w.b
if(v.ax===u)u=""
v.ax=u
v.at=u.length===0?0:5000+w.c*100+w.d},
$S:0}
A.evr.prototype={
$1(d){return d.a===this.a},
$S:z+7}
A.evs.prototype={
$0(){return this.a.at=5000+this.b*100+this.c},
$S:0}
A.evt.prototype={
$0(){var w=this.a
w.ax=""
w.at=0},
$S:0}
A.evu.prototype={
$0(){return this.a.at=5000+this.b*100+this.c},
$S:0}
A.evH.prototype={
$0(){var w=this.b,v=D.d.t(B.Ih,w.z),u=this.a.a
if(v)w.b2G(u)
else w.azm(u)},
$S:0}
A.euX.prototype={
$1(d){var w=null
return C.ep(C.a([C.bN(!1,B.fKu,w,w,!0,w,w,w,new A.euV(d),w,w),C.bI(D.Em,w,new A.euW(this.a,d),w)],x.p),w,w,G.nj,B.fzs,w,w,w,w,B.fHg,w)},
$S:19}
A.euV.prototype={
$0(){C.a4(this.a,!1).O(null)
return null},
$S:0}
A.euW.prototype={
$0(){C.a4(this.b,!1).O(null)
this.a.axQ(!0)},
$S:0}
A.euU.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.d
s===$&&C.c()
w=s.c
w===$&&C.c()
v=this.b
v=v>0?"\n\nYou are paid "+v+" stars! \u2b50":""
s=C.d("The "+w.toLowerCase()+" is built, wired, painted and tested."+v+"\n\nMistakes: "+s.f+"\nShocks: "+s.r+"\nLives left: "+s.e+"\n\nEvery job is a little different. Ready for another one?",u,u,u,u,u,u,B.a9P,u,u,u)
return C.ep(C.a([C.bN(!1,B.fVl,u,u,!0,u,u,u,new A.euS(d),u,u),C.bI(B.fH9,u,new A.euT(t,d),u)],x.p),u,u,G.nj,s,u,u,u,u,B.fPe,u)},
$S:19}
A.euS.prototype={
$0(){C.a4(this.a,!1).O(null)
return null},
$S:0}
A.euT.prototype={
$0(){C.a4(this.b,!1).O(null)
this.a.b_j()},
$S:0}
A.ev0.prototype={
$0(){if(!this.b)this.a.e=D.o.F(Date.now(),1e5)
var w=this.a
w.d=A.csM(null,null,!0,w.gCY(0),!0)
w.y=0
w.z=""
w.as=-1
w.ax=""
w.at=0
w.cy=!1
w.x.aa(0)
w.ay=null
w.r=A.wV(w.d,new A.rO(w.z,w.as,!1))},
$S:0}
A.evI.prototype={
$1(d){var w=this.a
if(w.c)w=d==="light"||d==="fan"
else w=w.e==="switch"?D.d.t(B.jE,d):D.d.t(B.lh,d)
return w},
$S:3}
A.evK.prototype={
$0(){var w=this.a,v=w.d
v===$&&C.c()
return w.ia(v.aIQ(w.as))},
$S:0}
A.evL.prototype={
$0(){var w=this.a,v=w.d
v===$&&C.c()
return w.ia(v.aoo(w.as))},
$S:0}
A.evM.prototype={
$0(){var w=this.a,v=w.d
v===$&&C.c()
return w.ia(v.aF8(w.as))},
$S:0}
A.evN.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.aoI(v.as)
v.ia(w)
if(w.a)v.PV()},
$S:0}
A.evO.prototype={
$0(){var w=this.a,v=w.d
v===$&&C.c()
return w.ia(v.aoo(w.as))},
$S:0}
A.evP.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.aoI(v.as)
v.ia(w)
if(w.a){v.PV()
v.om("The "+A.a2k(this.b.a)+" is out and the box is empty. Pick the kind you want from the tray, then tap the box.",!0)}},
$S:0}
A.evQ.prototype={
$1(d){return!this.a.b.b.iq(0,d.a)},
$S:z+7}
A.evR.prototype={
$0(){var w=this.a
return w.m(new A.evJ(w,this.b))},
$S:0}
A.evJ.prototype={
$0(){var w=this.a,v=this.b,u=v.a
if(w.ax===u)u=""
w.ax=u
if(u.length!==0)w.om(v.b+": now tap the screw it belongs on.",!0)},
$S:0}
A.evF.prototype={
$1(d){return!this.a.b.b.aj(0,d.a)},
$S:z+12}
A.evG.prototype={
$0(){var w=this.a
return w.azj(w.as,this.b.a)},
$S:0}
A.eve.prototype={
$1(d){return new C.N(d,new A.evf(),d.$ti.k("N<ak.E,m>")).aG(0,", ")},
$S:1826}
A.evf.prototype={
$1(d){return A.j5(d).b},
$S:74}
A.ev1.prototype={
$1(d){var w=this.a.d
w===$&&C.c()
return!w.x.aj(0,d.a)},
$S:z+8}
A.ev2.prototype={
$1(d){var w=this.a.d
w===$&&C.c()
return!w.z.t(0,d.a)},
$S:z+8}
A.ev3.prototype={
$1(d){var w=this.a.d
w===$&&C.c()
return!w.y.t(0,d)},
$S:34}
A.ev6.prototype={
$1(d){return!d.a},
$S:z+11}
A.ev7.prototype={
$1(d){return d.b<3},
$S:z+11}
A.ev8.prototype={
$1(d){return!d.c},
$S:z+11}
A.ev9.prototype={
$1(d){return!d.d},
$S:z+11}
A.eva.prototype={
$1(d){return!d.c},
$S:z+11}
A.evb.prototype={
$1(d){var w=this.a.d
w===$&&C.c()
w=w.at.h(0,d.a)
w=w==null?null:w.a
return w!==d.b},
$S:z+8}
A.evc.prototype={
$1(d){return d.a},
$S:z+114}
A.evd.prototype={
$1(d){var w=this.a.d
w===$&&C.c()
w=w.at.h(0,d.a)
w=w==null?null:w.b.c
return(w==null?0:w)<2},
$S:z+8}
A.ev4.prototype={
$1(d){var w
if(D.d.t(B.lh,d.b)){w=this.a.d
w===$&&C.c()
w=w.at.h(0,d.a)
w=(w==null?null:w.c)!==!0}else w=!1
return w},
$S:z+8}
A.ev5.prototype={
$1(d){return d.b==="fan"},
$S:z+8}
A.ewg.prototype={
$0(){return this.a.chs(this.b)},
$S:0}
A.ewh.prototype={
$0(){var w=this.a
if(w.as>=0)w.PV()
else{w.m(new A.ew_(w))
w.b4W()}},
$S:0}
A.ew_.prototype={
$0(){return this.a.at=0},
$S:0}
A.ewf.prototype={
$1(d){var w,v,u,t=this.a,s=t.d
s===$&&C.c()
w=t.w.gir()
v=t.Q
u=t.y===2&&t.as<0&&t.d.gt5()
return A.ikj(s,w/1000,t.x,u,v)},
$S:z+10}
A.ew2.prototype={
$0(){var w=this.a,v=w.d
v===$&&C.c()
return w.ia(v.aJx())},
$S:0}
A.ew3.prototype={
$0(){var w=this.a
return w.m(new A.ew1(w,this.b))},
$S:0}
A.ew1.prototype={
$0(){var w,v=this.b.b
v.f=!v.f
v=this.a
w=v.d
w===$&&C.c()
v.r=A.wV(w,new A.rO(v.z,v.as,!1))},
$S:0}
A.ew4.prototype={
$0(){var w=this.a
return w.m(new A.ew0(w,this.b))},
$S:0}
A.ew0.prototype={
$0(){var w,v=this.b.b
v.e=!v.e
v=this.a
w=v.d
w===$&&C.c()
v.r=A.wV(w,new A.rO(v.z,v.as,!1))},
$S:0}
A.ewi.prototype={
$0(){var w=this.a
return w.m(new A.evZ(w,this.b))},
$S:0}
A.evZ.prototype={
$0(){var w,v=this.a
v.y=this.b
v.Q=-1
v.z=""
w=v.d
w===$&&C.c()
v.r=A.wV(w,new A.rO("",v.as,!1))},
$S:0}
A.ewj.prototype={
$0(){var w=this.a
return w.m(new A.evY(w))},
$S:0}
A.evY.prototype={
$0(){var w,v=this.a
v.y=(v.y+1)%3
v.Q=-1
v.z=""
w=v.d
w===$&&C.c()
v.r=A.wV(w,new A.rO("",v.as,!1))},
$S:0}
A.ewk.prototype={
$0(){var w=this.a
return w.m(new A.evX(w))},
$S:0}
A.evX.prototype={
$0(){var w=this.a,v=w.d
v===$&&C.c()
v.amh()
w.y=2
w.z=""
w.r=A.wV(w.d,new A.rO("",w.as,!1))
w.om("The boxes, the cable and the walls are done. Now the wiring: pick an Outlet or a Switch from the tray, then tap its box on the wall.",!0)},
$S:0}
A.ewl.prototype={
$0(){var w=this.a
return w.m(new A.evW(w))},
$S:0}
A.evW.prototype={
$0(){return this.a.Q=-1},
$S:0}
A.ewm.prototype={
$0(){var w=this.a,v=w.Q
if(v>=0&&w.y===2){w.m(new A.evT(w,this.b))
w.azm(v)
if(w.c!=null&&w.as<0)w.m(new A.evU(w))
return}w.m(new A.evV(w,this.b))},
$S:0}
A.evT.prototype={
$0(){return this.a.z=this.b.a},
$S:0}
A.evU.prototype={
$0(){return this.a.z=""},
$S:0}
A.evV.prototype={
$0(){var w,v=this.a,u=this.b.a,t=v.z===u?"":u
v.z=t
v.at=0
w=v.d
w===$&&C.c()
v.r=A.wV(w,new A.rO(t,v.as,!1))
if(v.z.length!==0)v.csk(u)},
$S:0}
A.ewn.prototype={
$0(){var w=this.a,v=w.d
v===$&&C.c()
return w.ia(v.cSH())},
$S:0}
A.ew5.prototype={
$1(d){return!this.a.b.b.iq(0,d.a)},
$S:z+7}
A.ew6.prototype={
$0(){var w=this.a
return w.m(new A.evS(w,this.b,this.c))},
$S:0}
A.evS.prototype={
$0(){var w,v=this,u=v.c,t=u.a
if(v.b.b.b.iq(0,t)){v.a.aew("That wire is already fastened. Tap the wire in the 3D view to take it off.")
return}w=v.a
if(w.ax===t)t=""
w.ax=t
if(t.length!==0)w.om(u.b+": now tap the screw it belongs on, or press the matching button below.",!0)},
$S:0}
A.ew7.prototype={
$1(d){return!this.a.b.b.aj(0,d.a)},
$S:z+12}
A.ew8.prototype={
$0(){var w=this.a
return w.azj(w.as,this.b.a)},
$S:0}
A.ew9.prototype={
$0(){var w=this.a,v=w.d
v===$&&C.c()
return w.ia(v.aIQ(w.as))},
$S:0}
A.ewa.prototype={
$0(){var w=this.a,v=w.d
v===$&&C.c()
return w.ia(v.aoo(w.as))},
$S:0}
A.ewb.prototype={
$0(){var w=this.a,v=w.d
v===$&&C.c()
return w.ia(v.aF8(w.as))},
$S:0}
A.ewc.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.aoI(v.as)
v.ia(w)
if(w.a)v.PV()},
$S:0}
A.ewd.prototype={
$0(){var w=this.a,v=w.d
v===$&&C.c()
return w.ia(v.aoo(w.as))},
$S:0}
A.ewe.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.aoI(v.as)
v.ia(w)
if(w.a){v.PV()
v.om("The "+A.a2k(this.b.a)+" is out and the box is empty. Pick the kind you want from the tray (a different outlet or switch is fine), then tap the box.",!0)}},
$S:0}
A.evm.prototype={
$1(d){return new C.e0(new A.evl(this.a,this.b),null)},
$S:21}
A.evl.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=C.aG(d,k,x.w).w,i=this.a,h=i.d
h===$&&C.c()
w=h.c
w===$&&C.c()
v=x.p
h=C.a([C.d("Job: "+w,k,k,k,k,k,k,D.dd,k,k,k),D.au,C.d("Mistakes "+h.f+" \xb7 Shocks "+h.r+" \xb7 Lives "+h.e,k,k,k,k,k,k,B.Ka,k,k,k),D.W,B.fL3,D.am],v)
w=i.d.d
w===$&&C.c()
u=w.length
t=0
for(;t<w.length;w.length===u||(0,C.L)(w),++t){s=w[t]
r=D.c.j(0.05)
q=new C.aP(12,12)
p=new C.ay(D.bC,1,D.r,-1)
o=s.a
n=i.d.at.h(0,o)
n=(n==null?k:n.b.c)===2?"\u2705":"\u2b1c"
m=s.b
if(m==="gfci")m="A GFCI outlet"
else if(m==="outlet")m="An outlet"
else if(m==="switch")m="A light switch"
else if(m==="light")m="A ceiling light"
else m=m==="fan"?"A ceiling fan":"A "+A.a2k(m).toLowerCase()
o=A.j5(o)
l=s.c
l=l!=null?", turned on by "+A.j5(l).b:""
h.push(C.p(k,new C.y(n+" "+m+" at "+o.b+l,k,D.oM,k,k,k,k,k,k,k,k,k),D.f,k,k,new C.o(r,k,new C.bH(p,p,p,p),new C.bh(q,q,q,q),k,k,D.n),k,k,k,D.eH,D.bT,k,k,k))}h.push(D.W)
h.push(D.am)
w=this.b
h.push(C.B(C.a([C.E(C.dT(B.fIx,new A.evh(w),k),1),D.ad,C.E(C.bI(B.fGr,k,new A.evi(i,d,w),k),1)],v),D.m,k,D.e,D.i,0,k,k))
h.push(D.am)
h.push(D.am)
h.push(C.B(C.a([C.E(C.dT(B.fAC,new A.evj(i,d),k),1),D.ad,C.E(C.bI(B.aVh,k,new A.evk(i,d),k),1)],v),D.m,k,D.e,D.i,0,k,k))
return C.bm(!0,new C.cT(new C.aZ(0,1/0,0,j.a.b*0.8),C.cl(h,k,k,D.bQ,k,k,D.ah,!0),k),!0,!1,D.af,!0,!0)},
$S:87}
A.evh.prototype={
$0(){return A.hbZ(this.a)},
$S:0}
A.evi.prototype={
$0(){var w=0,v=C.j(x.H),u=this,t,s,r
var $async$$0=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:C.a4(u.b,!1).O(null)
t=u.a
s=t.d
s===$&&C.c()
r=s.c
r===$&&C.c()
w=2
return C.b(A.hzC(u.c,s.cYZ(),t.d.cZ_(),r),$async$$0)
case 2:return C.h(null,v)}})
return C.i($async$$0,v)},
$S:1}
A.evj.prototype={
$0(){C.a4(this.b,!1).O(null)
this.a.axQ(!0)},
$S:0}
A.evk.prototype={
$0(){C.a4(this.b,!1).O(null)
this.a.b_j()},
$S:0}
A.ft2.prototype={
$1(d){var w=this.a,v=d.a
return w>v[0]&&w<v[1]},
$S:717}
A.ft3.prototype={
$1(d){var w=this.a,v=d.a
return w>v[2]&&w<v[3]},
$S:717}
A.fAM.prototype={
$1(d){return 5000+this.a.a*100+d},
$S:78}
A.fAN.prototype={
$1(d){return 3000+this.a.a},
$S:78}
A.fAO.prototype={
$1(d){return 2000+this.a.a},
$S:78}
A.fAR.prototype={
$5$col$round(d,e,f,g,h){var w=this.a
w.f=3
w.b=d
w.d=0.5
w.e=0.9
if(h)w.dE(e.aE(0,B.ea),e.a7(0,B.ea),f.a/2,g,14)
else w.aJ(e,f,g)
w.e=0
w.d=1
w.f=2},
$3(d,e,f){return this.$5$col$round(d,e,f,D.b_,!1)},
$4$round(d,e,f,g){return this.$5$col$round(d,e,f,D.b_,g)},
$4$col(d,e,f,g){return this.$5$col$round(d,e,f,g,!1)},
$S:z+115}
A.fAP.prototype={
$3(d,e,f){return K.RY(d,e,0,f+this.a.a*5)},
$S:24}
A.fAQ.prototype={
$0(){var w,v=this.a
if(v.c)w="A place in the ceiling for a "+(v.e==="fan"?"fan (needs a fan-rated box)":"light")+"."
else w="A place on the wall at "+(v.e==="switch"?"switch height, about 48 inches from the floor":"outlet height, about 16 inches from the floor")+"."
return new A.cV(v.b,w,A.ai8(v,B.aaO),26)},
$S:z+116}
A.fRM.prototype={
$1(d){return d.e==="fan"},
$S:z+40}
A.fRN.prototype={
$1(d){return d.b==="light"},
$S:z+8}
A.fRO.prototype={
$1(d){return A.ai8(this.a,d)},
$S:z+6}
A.cwh.prototype={
$1(d){return d.a===this.a&&!d.c},
$S:z+15}
A.cwd.prototype={
$1(d){return d.a===B.a0z},
$S:z+15}
A.cwf.prototype={
$1(d){return d.c},
$S:z+15}
A.cwg.prototype={
$1(d){return d.c},
$S:z+15}
A.cwe.prototype={
$1(d){return B.wI.h(0,d.a).e===this.a&&!d.c},
$S:z+15}
A.exK.prototype={
$0(){var w=this.a
w.z=this.b
w.Q=this.c},
$S:0}
A.exL.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.exJ(w))},
$S:0}
A.exJ.prototype={
$0(){return this.a.z=null},
$S:0}
A.exz.prototype={
$0(){return this.a.y=0},
$S:0}
A.exE.prototype={
$0(){return this.a.as=!0},
$S:0}
A.exF.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.exD(w))},
$S:12}
A.exD.prototype={
$0(){return this.a.as=!1},
$S:0}
A.exG.prototype={
$0(){var w=this.a,v=w.d
v===$&&C.c()
w.r=A.agK(v.d)
w.y=this.b},
$S:0}
A.exH.prototype={
$1(d){return this.a.chA()},
$S:8}
A.exI.prototype={
$1(d){return this.a.c8M()},
$S:8}
A.exC.prototype={
$1(d){var w=null
return C.ep(C.a([C.bI(B.fIo,w,new A.exB(this.a,d),w)],x.p),w,w,G.nj,B.fHw,w,w,w,w,B.fNT,w)},
$S:19}
A.exB.prototype={
$0(){C.a4(this.b,!1).O(null)
this.a.axd()},
$S:0}
A.exy.prototype={
$1(d){var w=null,v=this.a,u=v.d
u===$&&C.c()
u=C.d("Every problem on the customer's list is fixed.\n\nYou are paid "+this.b+" stars! \u2b50\n\nMistakes: "+u.f+"\nShocks: "+u.r+"\nLives left: "+u.e+"\n\nThe next call will have different problems.",w,w,w,w,w,w,B.a9P,w,w,w)
return C.ep(C.a([C.bN(!1,B.aVf,w,w,!0,w,w,w,new A.exw(d),w,w),C.bI(B.fJH,w,new A.exx(v,d),w)],x.p),w,w,G.nj,u,w,w,w,w,B.fQn,w)},
$S:19}
A.exw.prototype={
$0(){C.a4(this.a,!1).O(null)
return null},
$S:0}
A.exx.prototype={
$0(){C.a4(this.b,!1).O(null)
this.a.axd()},
$S:0}
A.exA.prototype={
$0(){var w,v,u=this.a
u.e=D.o.F(Date.now(),1e5)
w=u.gCY(0)
v=u.d
v===$&&C.c()
w=A.hmZ(v.b,w)
u.d=w
u.r=A.agK(w.d)
u.at=!1
u.z=null
u.y=0},
$S:0}
A.exX.prototype={
$0(){return this.a.cCl(this.b)},
$S:0}
A.exT.prototype={
$1(d){return d<=5},
$S:34}
A.exS.prototype={
$1(d){var w=this.a,v=w.d
v===$&&C.c()
return A.hvx(v.d,w.w.gir()/1000)},
$S:z+10}
A.exU.prototype={
$1(d){return!d.c},
$S:z+15}
A.exV.prototype={
$1(d){return B.wI.h(0,d.a).a},
$S:z+118}
A.exW.prototype={
$0(){var w=this.a
return w.m(new A.exR(w,this.b))},
$S:0}
A.exR.prototype={
$0(){return this.a.x=this.b},
$S:0}
A.exQ.prototype={
$1(d){return new C.e0(new A.exP(this.a),null)},
$S:21}
A.exP.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=this.a,j=k.d
j===$&&C.c()
w=x.p
j=C.a([B.fFV,D.au,C.d("Mistakes "+j.f+" \xb7 Shocks "+j.r+" \xb7 Lives "+j.e,l,l,l,l,l,l,B.Ka,l,l,l),D.W],w)
v=k.d.c
v===$&&C.c()
u=v.length
t=0
for(;t<v.length;v.length===u||(0,C.L)(v),++t){s=v[t]
r=D.c.j(0.05)
q=new C.aP(14,14)
p=new C.ay(s.c?D.bf.j(0.6):D.bC,1,D.r,-1)
o=s.c?"\u2705":"\ud83d\udd27"
n=B.wI.h(0,s.a).a
m=s.c?D.aC:D.c
j.push(C.p(l,new C.y(o+" "+n,l,new C.F(!0,m,l,l,l,l,13.5,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l),l,l,l,l,l,l,l,l,l),D.f,l,l,new C.o(r,l,new C.bH(p,p,p,p),new C.bh(q,q,q,q),l,l,D.n),l,l,l,D.cu,D.bg,l,l,l))}j.push(D.am)
j.push(B.fLe)
j.push(D.P)
j.push(C.B(C.a([B.bF0,C.b8e(l,l,l,l,!1,D.y,l,l,l,l,l,l,new A.exN(k,e),l,l,l,l,l,l,l,l,k.d.b)],w),D.m,l,D.e,D.i,0,l,l))
j.push(C.bI(B.fOl,l,new A.exO(k,d),l))
return C.bm(!0,C.cl(j,l,l,D.bQ,l,l,D.ah,!0),!0,!1,D.af,!0,!0)},
$S:87}
A.exN.prototype={
$1(d){var w=this.a.d
w===$&&C.c()
w.b=d
this.b.$1(new A.exM())},
$S:9}
A.exM.prototype={
$0(){},
$S:0}
A.exO.prototype={
$0(){C.a4(this.b,!1).O(null)
this.a.axd()},
$S:0}
A.flL.prototype={
$1(d){return d.d===this.a},
$S:z+21}
A.bVh.prototype={
$1(d){var w,v,u,t,s=this.a,r=s.p1
if(r!=="back"){s=r==="left"?-1.5707963267948966:1.5707963267948966
return new C.z(new C.z(0,d),s)}r=s.k1
w=A.hc8(s,A.aPT(r==null?"tv100":r),0)
s=w.c
r=w.a/2
v=s-r-18
u=this.b
t=-u/2+14
if(v<t)v=s+r+18
v=D.k.E(v,t,u/2-14)
return new C.z(new C.z(v,d),Math.atan2(s-v,-d))},
$S:1828}
A.bVi.prototype={
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
A.d7z.prototype={
$0(){return A.hbZ(this.a)},
$S:0}
A.d7A.prototype={
$1(d){var w=this.a
return w.m(new A.d7y(w,this.b))},
$S:9}
A.d7y.prototype={
$0(){var w=this.a
w.d=this.b
w.f.aa(0)
w.r=null},
$S:0}
A.d7B.prototype={
$1(d){var w=this.a
return w.m(new A.d7x(w))},
$S:9}
A.d7x.prototype={
$0(){var w=this.a
w.e=!1
w.r=null},
$S:0}
A.d7C.prototype={
$1(d){var w=this.a
return w.m(new A.d7w(w))},
$S:9}
A.d7w.prototype={
$0(){var w=this.a
w.e=!0
w.r=null},
$S:0}
A.d7D.prototype={
$1(d){var w=this.a
return w.m(new A.d7v(w,this.b,d))},
$S:35}
A.d7v.prototype={
$0(){var w=this.a,v=this.c
v.toString
w.f.n(0,this.b,v)
w.r=null},
$S:0}
A.d7E.prototype={
$1(d){var w,v,u=null,t=this.a,s=B.zv[t.d],r=this.b,q=s.e.h(0,r)
q.toString
w=x.N
q=C.H([r,q],w,w)
t=t.f.h(0,r)
t.toString
v=A.hvc(s.b,q,C.H([r,t],w,w))
t=v.a
s=t===B.vd
if(s)r="Right: this follows the diagram."
else{r=v.b
r=D.d.gI(r).c+" "+D.d.gI(r).e}if(s)t=D.bf
else t=t===B.TT?D.bu:D.c6
return C.d(r,u,u,u,u,u,u,C.l(u,u,t,u,u,u,u,u,u,u,u,12.5,u,u,u,u,1.3,!0,u,u,u,u,u,u,u,u),u,u,u)},
$S:409}
A.d7F.prototype={
$0(){var w=this.a
return w.m(new A.d7u(w))},
$S:0}
A.d7u.prototype={
$0(){var w=this.a,v=B.zv[w.d]
return w.r=A.hvc(v.b,v.e,w.f)},
$S:0}
A.fCt.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=this
for(w=k.a*1.8,v=k.b,u=k.c,t=k.d,s=0.3*t,t=0.05*t,r=0;r<d;++r){q=w+r*0.173
p=D.k.F(q,1)
o=Math.sin((r*3.1+D.k.bf(q))*12.9898)*43758.5453
n=(o-Math.floor(o))*3.141592653589793*2
o=Math.sin((r+5)*12.9898)*43758.5453
m=e*(0.6+(o-Math.floor(o))*0.8)
q=u.$1(new A.q(Math.cos(n)*p*m,Math.sin(n)*p*m-p*p*6,3+p*3))
l=C.ar(E.Z5,F.MJ,p)
l.toString
v.fO(q,s*(1-p*0.6)+t,l,3,5,0)}},
$S:1830}
A.fCs.prototype={
$3(d,e,f){var w,v,u,t,s,r,q,p,o,n=this,m=n.a
m.d=0.34
for(w=n.b,v=w*0.45,u=n.c,t=n.d,s=1-e,r=0;r<d;++r){q=D.k.F(v+r/d,1)
p=u.$1(new A.q(Math.sin(r*1.7+w)*1.4+q*1.5,q*f-1,3.5+q*4))
o=C.ar(G.Bl,B.bpK,s)
o.toString
o=C.ar(o,B.bco,q)
o.toString
m.fO(p,(1.1+q*3.4)*t,o,3,6,0)}m.d=1},
$S:1831}
A.fBY.prototype={
$5(d,e,f,g,h){return this.a.push(new A.wq(d,e,f,g,h))},
$S:z+119}
A.fC2.prototype={
$2(d,e){var w=this.a
return new C.Z(w,new A.fC3(d,e),C.T(w).k("Z<1>")).gL(0)},
$S:z+120}
A.fC3.prototype={
$1(d){return d.a.c===this.a&&d.b.c===this.b},
$S:z+13}
A.fBZ.prototype={
$1(d){return d.b.c===B.aSH},
$S:z+13}
A.fC_.prototype={
$1(d){return d.a.c===B.aYc},
$S:z+13}
A.fC0.prototype={
$1(d){return!1},
$S:z+13}
A.fC1.prototype={
$1(d){return!1},
$S:z+13}
A.fli.prototype={
$1(d){return D.d.b3(this.a,new A.flj(d))},
$S:3}
A.flj.prototype={
$1(d){return d.a===this.a},
$S:z+45}
A.czf.prototype={
$1(d){return A.hUL(d)},
$S:z+13}
A.czg.prototype={
$2(d,e){return d+e},
$S:67}
A.czh.prototype={
$1(d){return d.b.a===B.vd},
$S:z+35}
A.fC4.prototype={
$2(d,e){var w=this.a.h(0,d)
if(w==null)this.b.push(new A.wq("LEAD_MISSING",B.TT,"The "+d+" lead is not connected.","Every lead on the diagram needs its connection.","Connect the "+d+" lead to "+e+"."))
else if(w!==e)this.b.push(new A.wq("LEAD_WRONG",B.aQg,"The "+d+" lead is connected to "+w+", but the diagram says "+e+".","Connections follow the approved wiring diagram.","Move the "+d+" lead to "+e+"."))},
$S:113}
A.fZM.prototype={
$1(d){var w,v,u,t,s,r=null,q=C.aG(d,r,x.w).w,p=x.p,o=C.a([B.fwO,D.am,B.fQr,D.W],p)
for(w=0;w<5;++w){v=B.dcb[w]
u=D.c.j(0.05)
t=new C.aP(12,12)
s=new C.ay(D.bC,1,D.r,-1)
o.push(C.p(r,C.x(C.a([new C.y(v.a+": "+v.b,r,D.aTY,r,r,r,r,r,r,r,r,r),D.cS,new C.y("Goes to: "+v.c+"\nCircuit: "+v.d,r,G.Ek,r,r,r,r,r,r,r,r,r),D.cS,new C.y(v.e,r,D.aUG,r,r,r,r,r,r,r,r,r),D.cS,new C.y("Exception: "+v.f,r,B.fp4,r,r,r,r,r,r,r,r,r)],p),D.E,r,D.e,D.i,0,D.p),D.f,r,r,new C.o(u,r,new C.bH(s,s,s,s),new C.bh(t,t,t,t),r,r,D.n),r,r,r,D.cu,D.yi,r,r,r))}o.push(D.am)
o.push(B.fy7)
return C.bm(!0,new C.cT(new C.aZ(0,1/0,0,q.a.b*0.85),C.cl(o,r,r,D.bQ,r,r,D.ah,!0),r),!0,!1,D.af,!0,!0)},
$S:27}
A.fZK.prototype={
$1(d){return new A.a1g(this.a,this.b,null)},
$S:z+89}
A.fb3.prototype={
$1(d){var w=this.a,v=w.a.c,u=this.b
d.toString
v.c.n(0,u,d)
w.m(new A.fb2(w,u,d))},
$S:158}
A.fb2.prototype={
$0(){var w=this.c
this.a.d.n(0,this.b,w)
return w},
$S:0}
A.fb4.prototype={
$0(){var w=this.a
w.m(new A.fb1(w,w.a.c.br5(0)))},
$S:0}
A.fb1.prototype={
$0(){return this.a.e=this.b},
$S:0}
A.fb5.prototype={
$1(d){return d.b.a!==B.vd},
$S:z+35}
A.fb6.prototype={
$0(){var w=this.a,v=w.c
v.toString
w=w.e
C.a4(v,!1).O(w)
return null},
$S:0}
A.bSO.prototype={
$1(d){return this.a.a.$0()},
$S:11}
A.bSN.prototype={
$1(d){var w=this.a
if(!w.c)return
w.a.$0()
if(w.c)w.b_H()},
$S:8};(function aliases(){var w=A.aO1.prototype
w.byL=w.q})();(function installTearOffs(){var w=a._instance_0u,v=a._instance_1u,u=a.installStaticTearOff,t=a.installInstanceTearOff,s=a._instance_2u,r=a._instance_0i
var q
w(q=A.aeh.prototype,"gbWB","bWC",0)
v(q,"gLN","a5k",68)
u(A,"iiM",3,null,["$3"],["i4y"],28,0)
w(q=A.aoM.prototype,"gc71","c72",0)
w(q,"gbqZ","br_",0)
t(q,"gczG",0,0,null,["$1$done","$0"],["aBQ","czH"],121,0,0)
w(q,"gcBJ","cBK",0)
w(q,"gbP_","bP0",0)
v(A.aU4.prototype,"gcSl","cSm",18)
s(q=A.aEM.prototype,"gbO2","bO3",30)
w(q,"giY","iI",0)
t(q,"gc8h",0,1,null,["$2$keepTour","$1"],["axM","AB"],58,0,0)
v(q,"gc8l","c8m",9)
w(q,"gbPZ","bQ_",0)
w(q,"gbQ0","bQ1",0)
w(q,"gbQk","bQl",0)
w(q,"gc3f","c3g",0)
w(q,"gbGr","bGs",0)
w(q,"gcEd","cEe",0)
w(q,"gcsc","csd",0)
w(q,"gbOG","bOH",0)
w(q,"gaQW","asM",0)
w(q,"gc8f","c8g",0)
w(q,"gcuP","cuQ",0)
w(q,"gcE7","cE8",20)
w(q,"gczI","Sc",0)
w(q,"gb7J","a2M",0)
w(q,"gb7Y","a2Q",0)
w(q,"gcGd","cGe",0)
w(q,"gbTD","bTE",0)
w(q,"gczF","B5",0)
w(q,"gc8k","Ep",20)
w(q,"gchm","a0u",20)
w(q,"gcgM","a0l",20)
w(q,"gaNJ","bBM",20)
w(q,"gc8p","c8q",0)
w(q,"gcpp","cpq",0)
r(q,"gc8n","c8o",0)
u(A,"hyC",3,null,["$3"],["ijU"],28,0)
u(A,"hbB",3,null,["$3"],["hyQ"],28,0)
w(q=A.aAB.prototype,"gc8u","pv",0)
w(q,"gJ7","ol",0)
v(q,"gJ8","J9",9)
w(q,"gcmo","cmq",0)
w(q,"gcBM","cBN",0)
w(q=A.aGx.prototype,"gJ7","ol",0)
v(q,"gJ8","J9",9)
w(q,"gc8v","c8w",0)
w(q=A.aAV.prototype,"gJ7","ol",0)
v(q,"gJ8","J9",9)
r(q,"gc8s","c8t",0)
w(q=A.aBO.prototype,"gJ7","ol",0)
v(q,"gJ8","J9",9)
w(q=A.aFe.prototype,"gc8A","b_h",0)
v(q,"gc8B","c8C",9)
w(q,"gcx4","cx5",0)
v(A.XK.prototype,"gaql","bq7",111)
s(q=A.aFl.prototype,"gc8F","c8G",30)
w(q,"gbSl","aUn",0)
w(q,"gc3d","c3e",0)
w(q,"gbEj","bEk",0)
w(q,"gbEh","bEi",0)
w(q,"gb_i","PV",0)
v(q,"gc8I","c8J",9)
w(q=A.aFp.prototype,"gc8N","b_l",0)
v(q,"gc8O","c8P",9)})();(function inheritance(){var w=a.mixin,v=a.mixinHard,u=a.inheritMany,t=a.inherit
u(C.lA,[A.f_m,A.rm,A.JH,A.FM,A.FT])
u(C.af,[A.a9O,A.avB,A.aoL,A.apL,A.IW,A.aJ0,A.aJZ,A.NI,A.aww,A.E_,A.a9H,A.a58,A.aBN,A.afN,A.Wf,A.Ok,A.as1,A.aq7,A.a1g])
u(C.ah,[A.aNT,A.aO1,A.aoM,A.bkT,A.aEM,A.bu1,A.bwc,A.bkU,A.btQ,A.aAB,A.aGx,A.aAV,A.aBO,A.bxv,A.aFe,A.aFl,A.aFp,A.bet,A.bv6])
t(A.aeh,A.aNT)
t(A.bpA,O.auw)
u(C.aD,[A.q,A.kp,A.cV,A.hh,A.tU,A.fP,A.fm,A.bV2,A.cDy,A.G4,A.PR,A.cLv,A.bcd,A.bcy,A.bhH,A.dpf,A.MD,A.duN,A.djr,A.lH,A.rd,A.Hq,A.aTa,A.bI3,A.ho,A.FX,A.zc,A.xn,A.aUk,A.a4q,A.ako,A.bMr,A.bKx,A.djU,A.rQ,A.Sz,A.aTF,A.bxs,A.bKz,A.Aj,A.cAZ,A.pE,A.bKl,A.Fq,A.P1,A.I7,A.M0,A.aU4,A.fl,A.CA,A.iP,A.Ms,A.axO,A.mg,A.fp,A.E8,A.pT,A.abL,A.oq,A.aWs,A.a5m,A.aWx,A.f1K,A.Mn,A.Qk,A.bVj,A.m1,A.jS,A.N4,A.co_,A.Ff,A.nw,A.Xg,A.cnQ,A.z7,A.l9,A.XW,A.aw4,A.aUU,A.ey,A.XK,A.i8,A.rO,A.uE,A.Mw,A.cwc,A.y5,A.tO,A.aa2,A.ia,A.csL,A.Az,A.bsn,A.aWz,A.b9U,A.akt,A.czc,A.cCN,A.a4l,A.bMB,A.wq,A.tm,A.b6u,A.aba,A.abb,A.vh,A.b5c,A.b8o,A.cze,A.PM,A.a5h])
u(C.hy,[A.c04,A.c05,A.c03,A.c06,A.c07,A.h_3,A.h_1,A.h_2,A.h_0,A.fZQ,A.bJM,A.bJN,A.bJO,A.bJP,A.bJJ,A.bJR,A.bJQ,A.bJL,A.bJK,A.ctM,A.ctN,A.ctF,A.ctG,A.ctH,A.ctI,A.f2T,A.f2S,A.f2Q,A.f2R,A.f2K,A.f2N,A.f2O,A.f2M,A.f2P,A.bTP,A.bTI,A.bTT,A.bTO,A.bTW,A.bTU,A.bTZ,A.bTK,A.bTM,A.bTL,A.bI5,A.bI4,A.fQY,A.fzu,A.fzv,A.fzn,A.fzo,A.fzp,A.fzq,A.fzr,A.fzs,A.fzt,A.flt,A.foS,A.fy9,A.fzf,A.fzg,A.fzh,A.c45,A.c43,A.c3W,A.c3P,A.c3N,A.c3H,A.c3O,A.c3x,A.c3y,A.c3z,A.fBM,A.bMt,A.bMw,A.fFc,A.fiF,A.bKA,A.fZZ,A.h__,A.fZX,A.fBk,A.cB0,A.cB1,A.bKm,A.bKt,A.bKu,A.bKv,A.bKw,A.bKn,A.bKo,A.bKp,A.bKr,A.bKs,A.bLa,A.bL7,A.bL8,A.bL9,A.bLe,A.bLd,A.bLb,A.bLf,A.dSw,A.dSr,A.dSL,A.dSu,A.dSO,A.fBW,A.h_z,A.fB7,A.fB8,A.fB5,A.fB6,A.fRR,A.fRS,A.fC8,A.fC9,A.fC6,A.fC7,A.fzl,A.fzm,A.h_y,A.flK,A.frh,A.fy2,A.fz7,A.h_v,A.h_s,A.bUu,A.bUt,A.bV4,A.bV5,A.bV6,A.bV7,A.bV8,A.bVc,A.bV9,A.bVa,A.bVg,A.bVf,A.bVe,A.bVd,A.eed,A.eea,A.eeb,A.eec,A.eaY,A.edo,A.edp,A.edl,A.e9x,A.edR,A.edS,A.ed2,A.ec2,A.ebZ,A.eaR,A.ebJ,A.eb0,A.eby,A.ee4,A.eaA,A.ebw,A.ebx,A.ebb,A.ebL,A.ea4,A.ea3,A.eaw,A.ecS,A.ecR,A.ecB,A.ecy,A.edP,A.edO,A.edG,A.edB,A.edA,A.edd,A.ee2,A.edT,A.ecI,A.ebN,A.ebO,A.ebP,A.ebz,A.ebA,A.ecU,A.ed6,A.ed8,A.ebG,A.ebF,A.ebH,A.ed9,A.ec4,A.ec5,A.ecd,A.ece,A.ecf,A.ebR,A.ebS,A.ee3,A.ebU,A.ebT,A.e9w,A.e9q,A.e9r,A.e9s,A.ee7,A.e9Q,A.e9E,A.e9F,A.e9S,A.e9y,A.ecH,A.dvc,A.f7h,A.f7i,A.f7j,A.f7g,A.fzG,A.fzN,A.fzI,A.fzF,A.fzy,A.fzK,A.fzM,A.fzL,A.fzJ,A.fzz,A.fzx,A.fzC,A.fzD,A.fR8,A.fR6,A.fR5,A.fR7,A.fzR,A.fA2,A.fzS,A.fzT,A.fzV,A.fzY,A.fzZ,A.fA_,A.fA0,A.fzW,A.ft_,A.fsV,A.fsW,A.fsX,A.fsm,A.fso,A.fsz,A.fsK,A.fsY,A.fsP,A.fsQ,A.fsR,A.fsS,A.fsT,A.fsU,A.fsp,A.fsq,A.fsr,A.fss,A.fst,A.fsu,A.fsv,A.fsw,A.fsx,A.fsy,A.fsA,A.fsB,A.fsC,A.fsD,A.fsE,A.fsF,A.fsG,A.fsH,A.fsI,A.fsJ,A.fsL,A.fsM,A.fsN,A.fsO,A.fD0,A.fD1,A.fD2,A.fja,A.fj0,A.ftQ,A.ftn,A.fto,A.ftp,A.ftq,A.ftB,A.ftJ,A.ftK,A.ftL,A.ftM,A.ftN,A.ftO,A.ftP,A.ftr,A.fts,A.ftt,A.ftu,A.ftv,A.ftw,A.ftx,A.fty,A.ftz,A.ftA,A.ftC,A.ftD,A.ftE,A.ftF,A.ftG,A.ftH,A.ftI,A.fn0,A.fA9,A.fA5,A.fA8,A.fA7,A.dSU,A.dT0,A.dSS,A.dST,A.f75,A.fSk,A.fSj,A.daJ,A.daN,A.daQ,A.daS,A.dba,A.dbq,A.db7,A.dbr,A.eXf,A.eXn,A.eXo,A.ddX,A.de6,A.de7,A.de9,A.dl0,A.dlb,A.dla,A.dld,A.fiG,A.fiL,A.fiM,A.fiK,A.fAL,A.fAK,A.fAJ,A.fzQ,A.fCq,A.cnU,A.cnV,A.cnR,A.cnW,A.cnX,A.cnY,A.cnZ,A.cnS,A.cnT,A.fAI,A.fAG,A.fAA,A.fAD,A.fAB,A.fAC,A.fAH,A.fAE,A.fAF,A.fAz,A.fRs,A.er7,A.eqP,A.eqU,A.er8,A.eqV,A.eqW,A.eqX,A.er5,A.er9,A.erb,A.era,A.er_,A.fZP,A.csR,A.csY,A.csZ,A.ct_,A.ct0,A.ct2,A.ct1,A.csQ,A.csO,A.csP,A.csW,A.csX,A.csS,A.csT,A.csU,A.csV,A.euN,A.euO,A.euP,A.evn,A.evp,A.evr,A.euX,A.euU,A.evI,A.evQ,A.evF,A.eve,A.evf,A.ev1,A.ev2,A.ev3,A.ev6,A.ev7,A.ev8,A.ev9,A.eva,A.evb,A.evc,A.evd,A.ev4,A.ev5,A.ewf,A.ew5,A.ew7,A.evm,A.ft2,A.ft3,A.fAM,A.fAN,A.fAO,A.fAR,A.fAP,A.fRM,A.fRN,A.fRO,A.cwh,A.cwd,A.cwf,A.cwg,A.cwe,A.exH,A.exI,A.exC,A.exy,A.exT,A.exS,A.exU,A.exV,A.exQ,A.exN,A.flL,A.bVh,A.bVi,A.d7A,A.d7B,A.d7C,A.d7D,A.d7E,A.fCs,A.fBY,A.fC3,A.fBZ,A.fC_,A.fC0,A.fC1,A.fli,A.flj,A.czf,A.czh,A.fZM,A.fZK,A.fb3,A.fb5,A.bSO,A.bSN])
u(C.jv,[A.c02,A.ctL,A.ctE,A.ctJ,A.ctK,A.bTJ,A.bTR,A.bTQ,A.fy5,A.fzw,A.fya,A.c3M,A.bMv,A.bMs,A.bMx,A.bMu,A.bKy,A.c1H,A.fZY,A.fBl,A.cB_,A.bKq,A.bLc,A.fDm,A.fDn,A.fDo,A.fDp,A.fDq,A.fC5,A.fkq,A.fri,A.frg,A.frf,A.fDr,A.fDs,A.fDt,A.fDu,A.fDv,A.fDw,A.fDx,A.fDy,A.fDz,A.fDA,A.fDf,A.fDg,A.fDh,A.fDi,A.fDj,A.fDk,A.fDl,A.h_t,A.h_u,A.bVb,A.eck,A.ebi,A.edQ,A.ed1,A.ec1,A.eb2,A.ecQ,A.edN,A.edz,A.ecc,A.fzO,A.fzH,A.fzE,A.fzA,A.fzB,A.fA4,A.fzU,A.fzX,A.fA3,A.fsZ,A.fsn,A.fD3,A.fA6,A.daO,A.eXk,A.ddW,A.fCr,A.ct3,A.evl,A.exP,A.fCt,A.fC2,A.czg,A.fC4])
u(C.p1,[A.xi,A.aTG])
u(C.mf,[A.b6x,A.bfD,A.bjn])
t(A.bsa,A.aO1)
u(C.iG,[A.f2L,A.fkk,A.bTY,A.bTS,A.bTN,A.bTV,A.fyb,A.fy8,A.c42,A.c3R,A.c3X,A.c44,A.c3U,A.c3T,A.c3r,A.c3S,A.c3V,A.c3Q,A.c3K,A.c3J,A.c3L,A.c3I,A.c3w,A.c3v,A.c3A,A.c3B,A.c3C,A.c3D,A.c3E,A.c3u,A.c3F,A.c3s,A.c3t,A.c3G,A.c4_,A.c40,A.c3Z,A.c41,A.c3Y,A.fBN,A.dSv,A.dSI,A.dSC,A.dSD,A.dSB,A.dSs,A.dSM,A.dSK,A.dSJ,A.dSq,A.dSx,A.dSy,A.dSz,A.dSA,A.dSt,A.dSF,A.dSG,A.dSH,A.dSE,A.dSN,A.fz8,A.ee9,A.ecX,A.ecY,A.ecW,A.ecZ,A.ebu,A.edq,A.ecr,A.ecs,A.ect,A.ecu,A.ecv,A.eaW,A.eaV,A.eaX,A.eaT,A.eaU,A.eaS,A.eb6,A.eb7,A.eb8,A.ecm,A.ecl,A.ecn,A.ecj,A.eco,A.eci,A.ecp,A.ech,A.ecq,A.ecg,A.eay,A.eaz,A.ebk,A.ebj,A.ebl,A.ebh,A.ebm,A.ebg,A.ebn,A.ebf,A.ebo,A.ebe,A.ebp,A.ebd,A.ebq,A.ebc,A.edm,A.edn,A.ebI,A.e9Y,A.ebD,A.ebC,A.ebE,A.ebB,A.ed3,A.ed0,A.ed_,A.ec0,A.ec_,A.ebX,A.ebW,A.ebY,A.ebV,A.ebr,A.ebs,A.ecT,A.eb4,A.eb3,A.eb5,A.ed4,A.edg,A.eb1,A.eb_,A.eaZ,A.edf,A.ebv,A.eba,A.ebM,A.ea5,A.ea2,A.ea6,A.ea1,A.ea7,A.ea0,A.ea8,A.ea_,A.ea9,A.e9Z,A.eax,A.ecM,A.ecL,A.ecN,A.ecO,A.ecP,A.ecz,A.ecx,A.ecA,A.ecw,A.edF,A.edE,A.edH,A.edI,A.edJ,A.edK,A.edL,A.edM,A.edv,A.edt,A.edu,A.edw,A.eds,A.edx,A.edy,A.edc,A.ede,A.edC,A.edr,A.edj,A.edk,A.edb,A.edi,A.ee_,A.ee0,A.ee1,A.edU,A.edV,A.edW,A.edX,A.edY,A.edZ,A.eb9,A.ebQ,A.ed5,A.ebt,A.ecV,A.ed7,A.eda,A.edh,A.ec7,A.ec8,A.ec6,A.ec9,A.eca,A.ec3,A.ecb,A.e9v,A.e9t,A.ebK,A.edD,A.ecJ,A.ecK,A.e9u,A.eaG,A.eaH,A.eaI,A.eaJ,A.eaK,A.eaL,A.eaF,A.eaM,A.eaE,A.eaN,A.eaD,A.eaO,A.eaC,A.eaP,A.eaB,A.eaQ,A.ee6,A.ee8,A.ee5,A.eai,A.eaj,A.eak,A.eao,A.eap,A.eaq,A.eah,A.ear,A.eag,A.eas,A.eaf,A.eat,A.eau,A.eae,A.eav,A.ead,A.eal,A.eac,A.eam,A.eab,A.ean,A.eaa,A.e9D,A.e9R,A.e9I,A.e9T,A.e9C,A.e9U,A.e9V,A.e9B,A.e9W,A.e9X,A.e9G,A.e9A,A.e9H,A.e9z,A.e9J,A.e9K,A.e9L,A.e9M,A.e9N,A.e9O,A.e9P,A.ecE,A.ecF,A.ecD,A.ecG,A.ecC,A.f7f,A.f7e,A.fcY,A.fcX,A.cgv,A.fA1,A.fB4,A.dSX,A.dSY,A.dSZ,A.dT1,A.dT2,A.dT3,A.dT4,A.dT5,A.dT6,A.dT7,A.dT8,A.dT_,A.dSW,A.dSV,A.dSP,A.dSQ,A.dSR,A.f74,A.cxp,A.cxq,A.bXp,A.db_,A.daY,A.daZ,A.daX,A.daK,A.daL,A.daM,A.daP,A.daR,A.daT,A.daU,A.daV,A.daW,A.db0,A.db1,A.dbj,A.dbb,A.dbc,A.dbk,A.dbl,A.db9,A.dbm,A.db8,A.dbn,A.dbo,A.dbp,A.dbd,A.db6,A.dbe,A.dbf,A.db5,A.dbg,A.db4,A.dbh,A.db3,A.dbi,A.db2,A.eXi,A.eXj,A.eXh,A.eXb,A.eXc,A.eXd,A.eXe,A.eXg,A.eXr,A.eXp,A.eXm,A.eXq,A.eXl,A.de1,A.de2,A.de0,A.ddU,A.ddY,A.ddZ,A.de_,A.ddV,A.dec,A.de8,A.de5,A.dea,A.de4,A.deb,A.de3,A.dl5,A.dl6,A.dl4,A.dl_,A.dl1,A.dl2,A.dl3,A.dle,A.dl9,A.dlc,A.dl8,A.dl7,A.fiJ,A.fiH,A.fiI,A.cbQ,A.fAw,A.fAx,A.fAy,A.er2,A.er3,A.er1,A.eqY,A.eqN,A.eqO,A.eqS,A.eqT,A.er0,A.er4,A.er6,A.eqR,A.eqQ,A.erd,A.erc,A.eqZ,A.evD,A.evE,A.evC,A.euJ,A.euK,A.euI,A.euL,A.euM,A.euH,A.euY,A.ev_,A.euQ,A.euR,A.evg,A.euZ,A.evz,A.evA,A.evB,A.evw,A.evx,A.evy,A.evv,A.evo,A.evq,A.evs,A.evt,A.evu,A.evH,A.euV,A.euW,A.euS,A.euT,A.ev0,A.evK,A.evL,A.evM,A.evN,A.evO,A.evP,A.evR,A.evJ,A.evG,A.ewg,A.ewh,A.ew_,A.ew2,A.ew3,A.ew1,A.ew4,A.ew0,A.ewi,A.evZ,A.ewj,A.evY,A.ewk,A.evX,A.ewl,A.evW,A.ewm,A.evT,A.evU,A.evV,A.ewn,A.ew6,A.evS,A.ew8,A.ew9,A.ewa,A.ewb,A.ewc,A.ewd,A.ewe,A.evh,A.evi,A.evj,A.evk,A.fAQ,A.exK,A.exL,A.exJ,A.exz,A.exE,A.exF,A.exD,A.exG,A.exB,A.exw,A.exx,A.exA,A.exX,A.exW,A.exR,A.exM,A.exO,A.d7z,A.d7y,A.d7x,A.d7w,A.d7v,A.d7F,A.d7u,A.fb2,A.fb4,A.fb1,A.fb6])
u(C.aw,[A.aYX,A.Uw,A.acN,A.bjY,A.b7Q,A.aXX,A.a7a])
w(A.aNT,O.auv)
v(A.aO1,C.cg)})()
C.j1(b.typeUniverse,JSON.parse('{"a9O":{"af":[],"v":[]},"aeh":{"ah":["a9O<1>"]},"avB":{"af":[],"v":[]},"xi":{"aC":[]},"b6x":{"aC":[]},"bsa":{"ah":["avB"]},"aoL":{"af":[],"v":[]},"aoM":{"ah":["aoL"]},"aTG":{"aC":[]},"aYX":{"aw":[],"v":[]},"Uw":{"aw":[],"v":[]},"apL":{"af":[],"v":[]},"bkT":{"ah":["apL"]},"acN":{"aw":[],"v":[]},"bfD":{"aC":[]},"IW":{"af":[],"v":[]},"aJ0":{"af":[],"v":[]},"aJZ":{"af":[],"v":[]},"aEM":{"ah":["IW"]},"bjY":{"aw":[],"v":[]},"bjn":{"aC":[]},"bu1":{"ah":["aJ0"]},"bwc":{"ah":["aJZ"]},"aww":{"af":[],"v":[]},"E_":{"af":[],"v":[]},"a9H":{"af":[],"v":[]},"a58":{"af":[],"v":[]},"aBN":{"af":[],"v":[]},"afN":{"af":[],"v":[]},"NI":{"af":[],"v":[]},"bkU":{"ah":["NI"]},"btQ":{"ah":["aww"]},"b7Q":{"aw":[],"v":[]},"aXX":{"aw":[],"v":[]},"aAB":{"ah":["E_"]},"aGx":{"ah":["a9H"]},"aAV":{"ah":["a58"]},"aBO":{"ah":["aBN"]},"bxv":{"ah":["afN"]},"a7a":{"aw":[],"v":[]},"Wf":{"af":[],"v":[]},"aFe":{"ah":["Wf"]},"Ok":{"af":[],"v":[]},"aFl":{"ah":["Ok"]},"as1":{"af":[],"v":[]},"aFp":{"ah":["as1"]},"aq7":{"af":[],"v":[]},"bet":{"ah":["aq7"]},"a1g":{"af":[],"v":[]},"bv6":{"ah":["a1g"]}}'))
C.CU(b.typeUniverse,JSON.parse('{"bpA":1,"aNT":1}'))
var y={T:"A hot wire never goes on the green ground screw.",W:"A shut-off valve goes on the pipe that comes out of the wall.",v:"Both black wires go on brass screws. It does not matter which one.",N:"Brass screws are for the HOT wire (black).",q:"Each switch has its own screw on the other side, and each goes to its own light.",R:"Fasten the bare copper ground to the GREEN screw.",E:"Fasten the black hot to one HOT (X or Y) brass screw.",A:"Fasten the black wire to the LEFT terminal.",k:"Fasten the red hot to the other HOT brass screw.",c:"Fasten the red wire to the RIGHT terminal.",F:"Fasten the white neutral to a SILVER screw.",r:"Fasten the white neutral to the silver NEUTRAL (W) screw.",b:"Fold the wires back and push the device into the box.",P:"LOAD is for feeding other outlets further down the line. It is covered with tape. Power comes in on the LINE screws.",x:"Look at the device and the wires. Learn which wire is which before you touch a screw.",M:"Move it with the arrow buttons, turn it, change its colour or take it out.",G:"Neutral goes on a silver screw. The silver screws stay joined, so one wire feeds both halves.",o:"Pick a paint colour above to change this wall.",n:"Put the cover plate on, turn the power on and test.",Q:"Silver screws are for the NEUTRAL wire (white).",f:"Switch the power on and flip the wall switch.",H:"The bare copper ground goes on the green screw.",t:"The bare copper ground wire only goes on the GREEN screw.",S:"The black and red hot wires go on the two brass screws, X and Y. The silver W screw is for the neutral.",u:"The black hot wire goes on a brass screw.",J:"The black wire goes on the LEFT terminal.",C:"The gold screws are BRASS. They are for the HOT wire (black).",Z:"The green screw is for the bare copper ground wire.",l:"The two hot wires (black and red) go on the two brass screws, X and Y, in either order.",m:"The two hot wires go on the two brass screws, X and Y, in either order.",p:"The two hot wires go on the two brass screws, in either order.",X:"The two traveler wires go on the two brass traveler screws, in either order.",g:"The two travelers coming from the first three-way go on the two top screws.",d:"The two travelers going to the second three-way go on the two bottom screws.",_:"The white neutral wire goes on a silver screw.",I:"The white neutral wire goes on the silver W screw.",B:"The white-silver screws are NICKEL. They are for the NEUTRAL wire (white).",D:"There is no medicine left. Buy some in the shop.",O:"Turn the breaker OFF and test that the wires are dead.",Y:"You are at the street light. Press Fix the street light."}
var x=(function rtii(){var w=C.at
return{dw:w("ma<u?>"),ff:w("aTa"),l:w("bw<m,m>"),gW:w("bw<m,J>"),M:w("dD<m>"),hg:w("a4q"),cD:w("aUU"),e7:w("ez<m>"),eP:w("rm"),gN:w("I1"),eB:w("mg"),fa:w("aB<MN?>"),v:w("dp<G,m>"),fC:w("I7"),m:w("O<lH>"),gQ:w("O<M0>"),V:w("O<ac>"),O:w("O<u>"),bm:w("O<a4l>"),fW:w("O<aUk>"),D:w("O<a4q>"),C:w("O<xn>"),dI:w("O<Mn>"),bP:w("O<ez<m>>"),gw:w("O<Mw>"),dh:w("O<I1>"),_:w("O<mg>"),dY:w("O<oq>"),cX:w("O<aWs>"),F:w("O<a5m>"),ha:w("O<I7>"),r:w("O<fl>"),E:w("O<hh>"),Z:w("O<jS>"),gL:w("O<ai<G>>"),ez:w("O<a8<m,aD>>"),c7:w("O<a8<m,@>>"),f4:w("O<a8<m,ci>>"),T:w("O<ia>"),dN:w("O<t>"),B:w("O<l9>"),fI:w("O<nw>"),g:w("O<h_>"),z:w("O<kp>"),gl:w("O<b5c>"),a6:w("O<+(a95,G)>"),L:w("O<+(m,m)>"),dt:w("O<+(q,q)>"),d6:w("O<+(J,m)>"),f:w("O<+(J,J)>"),ek:w("O<+(G,m)>"),aJ:w("O<+(m,G,G)>"),dV:w("O<+(J,J,u)>"),al:w("O<+(G,J,R)>"),gp:w("O<+(G,G,ai<t>)>"),dQ:w("O<+(G,G,G)>"),eV:w("O<+(J,J,J,J)>"),az:w("O<+(G,G,J,R,m)>"),dz:w("O<+blurb,color,emoji,open,title,words(m,u,m,~(),m,m)>"),fP:w("O<P1>"),e3:w("O<aa2>"),fB:w("O<wq>"),a:w("O<fP>"),gD:w("O<XW>"),y:w("O<rQ>"),s:w("O<m>"),fJ:w("O<aba>"),dH:w("O<abb>"),J:w("O<vh>"),bz:w("O<Aj>"),o:w("O<q>"),p:w("O<v>"),d:w("O<iP>"),f5:w("O<PR>"),gR:w("O<bcd>"),bl:w("O<G4>"),h:w("O<Az>"),b:w("O<i8>"),x:w("O<ho>"),aQ:w("O<Qk>"),fG:w("O<bsn>"),X:w("O<pE>"),u:w("O<R>"),n:w("O<J>"),t:w("O<G>"),dS:w("O<aC?>"),k:w("O<ci>"),eF:w("cw<ah<af>>"),dg:w("ai<J>"),j:w("ai<@>"),c:w("a8<m,@>"),G:w("a8<@,@>"),w:w("iB"),P:w("cu"),q:w("cV"),aU:w("aD"),dx:w("t"),ej:w("Jr"),fX:w("kp"),cE:w("a9O<G>"),I:w("+(J,J)"),c5:w("dw<G>"),cR:w("XK"),K:w("fP"),cH:w("aw4"),N:w("m"),ec:w("je<m>"),dZ:w("b8o"),g6:w("bp<J>"),Q:w("q"),W:w("bR<m>"),ac:w("bR<G>"),cI:w("jX<m>"),am:w("Z<mg>"),fZ:w("Z<Ff>"),cc:w("Z<m>"),dD:w("Z<G>"),c1:w("hn"),gh:w("CA"),gf:w("PR"),bB:w("bcy"),c9:w("bhH"),R:w("R"),i:w("J"),A:w("@"),S:w("G"),e:w("MD?"),eT:w("MN?"),U:w("ai<@>?"),dy:w("a8<m,@>?"),fF:w("a8<@,@>?"),cU:w("qa?"),Y:w("ci"),H:w("~")}})();(function constants(){var w=a.makeConstList
B.aZW=new A.ey(!0,"The water is on and nothing leaks. Perfect job!",!1,"")
B.aZX=new A.ey(!0,"Primer and paint rolled on.",!1,"")
B.aZY=new A.ey(!1,"This call is over. Start a new one.",!1,"")
B.aZZ=new A.ey(!0,"Recorded.",!1,"")
B.b__=new A.ey(!1,"That is not a place for a sheet.",!1,"")
B.b_0=new A.ey(!0,"Sanded smooth. Wear a mask: the dust is bad to breathe.",!1,"")
B.ac5=new A.ey(!1,"There is no device here.",!1,"")
B.b_1=new A.ey(!0,"You look closely. Everything looks fine here.",!1,"")
B.b_2=new A.ey(!1,"ZAP! You were shocked badly and it was your last life. Always turn the breaker OFF and test before you touch wires.",!0,"shock")
B.b_3=new A.ey(!0,"Paper tape pressed into the seam.",!1,"")
B.b_4=new A.ey(!1,"STOP! The breaker is ON, so this box is live (120 volts). Nobody puts a device into a live box. Turn the breaker OFF first, test that the wires are dead, then put the device in.",!1,"")
B.b_5=new A.ey(!0,"Unplugged.",!1,"")
B.b_6=new A.ey(!0,"Breaker OFF. It is safe to work on the wires.",!1,"")
B.b_7=new A.ey(!1,"ZAP! You were shocked badly. That was your last life: the job is over. Lesson: ALWAYS turn the breaker OFF and test the wires before you touch them.",!0,"shock")
B.b_8=new A.ey(!1,"There is nothing there.",!1,"")
B.b_9=new A.ey(!1,"The outlet is burnt. Nothing works. Pull it out and put in a new one.",!0,"")
B.b_a=new A.ey(!0,"The water is on and nothing leaks yet, but the job is not finished.",!1,"")
B.b_b=new A.ey(!0,"Sheet hung. Now screw it to the studs.",!1,"")
B.b_c=new A.ey(!0,"Hole drilled through the middle of the stud, at the cable height. Holes go in the center so a nail cannot reach the cable.",!1,"")
B.b_d=new A.ey(!0,"Plugged in. Nothing happens because the breaker is off. Turn it on to test.",!1,"")
B.b_e=new A.ey(!0,"You flipped the tripped breaker fully OFF. Fix the problem before you turn it on again.",!1,"")
B.b_f=new A.ey(!0,"Click.",!1,"")
B.b_g=new A.ey(!0,"The wires are folded back and the device is in the box. Now put the cover on.",!1,"")
B.b_h=new A.ey(!0,"Breaker OFF. The wires on this circuit are dead now. (Always test them to be sure.)",!1,"")
B.b_i=new A.ey(!1,"Nothing is wet.",!1,"")
B.b_j=new A.ey(!0,"Power is on.",!1,"")
B.b_k=new A.ey(!0,"Water OFF at the main valve. You can cut into the pipes safely now.",!1,"")
B.b_l=new A.ey(!0,"Opening cut around the box with the drywall saw. Keep it tight: the plate has to cover the edge.",!1,"")
B.b_m=new A.ey(!0,"Device pulled out of the box.",!1,"")
B.b_n=new A.ey(!0,"Screw set just below the paper, not through it.",!1,"")
B.b_o=new A.ey(!1,"ZAP! You touched a live wire. In Learn mode you are not hurt, but in real life this can kill. Switch the breaker OFF and test the wires first.",!0,"shock")
B.b_p=new A.ey(!0,"Cover on. Now you can turn the breaker on and test.",!1,"")
B.Wx=new A.ey(!1,"",!1,"")
B.b_q=new A.ey(!0,"Device taken out. You can put it somewhere else, or put in a new one.",!1,"")
B.b_r=new A.ey(!0,"Breaker back ON.",!1,"")
B.b_s=new A.ey(!1,"That is not a stud.",!1,"")
B.b_t=new A.ey(!0,"Off.",!1,"")
B.b_u=new A.ey(!1,"Nothing to flip yet.",!1,"")
B.b_v=new A.ey(!0,"Wire taken off.",!1,"")
B.b_w=new A.ey(!0,"The mud is dry.",!1,"")
B.b_x=new A.ey(!0,"Breaker reset.",!1,"")
B.b_y=new A.ey(!0,"Box mounted. (Careful: this is not a fan-rated box. A fan on it could fall.)",!1,"")
B.fPQ=new C.y("Tap a piece of furniture, or add one:",null,D.Am,null,null,null,null,null,null,null,null,null)
B.ena=new C.D(D.np,B.fPQ,null)
B.b_F=new C.bM(D.a5,null,null,B.ena,null)
B.acy=new A.lH(0,0,0,0,1)
B.ad9=new C.aZ(0,290,0,1/0)
B.b1Q=new C.bh(H.TF,H.TF,D.bH,D.bH)
B.bst=new C.u(1,0.12156862745098039,0.13725490196078433,0.18823529411764706,D.q)
B.bsB=new C.u(1,0.054901960784313725,0.06274509803921569,0.09411764705882353,D.q)
B.d6k=w([B.bst,B.bsB],x.O)
B.c25=new C.a9(D.b0,D.b5,D.x,B.d6k,null,null)
B.b4O=new C.o(null,null,H.acY,B.b1Q,null,B.c25,D.n)
B.FC=new C.u(1,0.08627450980392157,0.10588235294117647,0.1411764705882353,D.q)
B.b3c=new C.bH(D.a0,D.a0,Ae.vC,D.a0)
B.b5E=new C.o(B.FC,null,B.b3c,null,null,null,D.n)
B.b20=new C.bh(D.mW,D.it,D.it,D.it)
B.b5K=new C.o(D.aK,null,null,B.b20,null,null,D.n)
B.fQw=new C.y("\u2600\ufe0f Let it dry",null,U.Aj,null,null,null,null,null,null,null,null,null)
B.b9R=new C.ce(D.A,null,null,B.fQw,null)
B.fQg=new C.y("\u23e9 Skip to the wiring",null,U.Aj,null,null,null,null,null,null,null,null,null)
B.b9Z=new C.ce(D.A,null,null,B.fQg,null)
B.fEy=new C.y("\ud83c\udfd7\ufe0f",null,D.pF,null,null,null,null,null,null,null,null,null)
B.baf=new C.ce(D.A,null,null,B.fEy,null)
B.fEl=new C.y("\ud83c\udfe0",null,D.aUc,null,null,null,null,null,null,null,null,null)
B.baH=new C.ce(D.A,null,null,B.fEl,null)
B.bc6=new C.u(1,0.9294117647058824,0.9098039215686274,0.8627450980392157,D.q)
B.LG=new C.u(1,0.1803921568627451,0.20392156862745098,0.25098039215686274,D.q)
B.aen=new C.u(1,0.16470588235294117,0.10588235294117647,0.07058823529411765,D.q)
B.bci=new C.u(1,0.9725490196078431,0.9647058823529412,0.9333333333333333,D.q)
B.vI=new C.u(1,0.5450980392156862,0.3686274509803922,0.20392156862745098,D.q)
B.bco=new C.u(1,0.5568627450980392,0.5568627450980392,0.5882352941176471,D.q)
B.aeu=new C.u(1,0.611764705882353,0.5568627450980392,0.4588235294117647,D.q)
B.F6=new C.u(1,0.24705882352941178,0.5607843137254902,0.30980392156862746,D.q)
B.bcE=new C.u(1,0.8392156862745098,0.9333333333333333,0.984313725490196,D.q)
B.n7=new C.u(1,0.9450980392156862,0.9450980392156862,0.9176470588235294,D.q)
B.bd3=new C.u(1,0.9098039215686274,0.9254901960784314,0.9372549019607843,D.q)
B.bd5=new C.u(1,0.4823529411764706,0.5098039215686274,0.5450980392156862,D.q)
B.bde=new C.u(1,0.10588235294117647,0.4980392156862745,0.20392156862745098,D.q)
B.aeM=new C.u(1,0.7215686274509804,0.7450980392156863,0.7725490196078432,D.q)
B.vK=new C.u(1,0.8196078431372549,0.29411764705882354,0.22745098039215686,D.q)
B.nU=new C.u(1,0.5450980392156862,0.3686274509803922,0.23529411764705882,D.q)
B.aeO=new C.u(1,0.8509803921568627,0.8274509803921568,0.7725490196078432,D.q)
B.aeS=new C.u(1,0.6549019607843137,0.6784313725490196,0.7098039215686275,D.q)
B.hd=new C.u(1,0.16862745098039217,0.17647058823529413,0.2,D.q)
B.F8=new C.u(1,0.8980392156862745,0.7529411764705882,0.4823529411764706,D.q)
B.LQ=new C.u(1,0.8156862745098039,0.5098039215686274,0.27450980392156865,D.q)
B.Xy=new C.u(1,0.5411764705882353,0.41568627450980394,0.2784313725490196,D.q)
B.aeZ=new C.u(1,0.1843137254901961,0.4196078431372549,0.23529411764705882,D.q)
B.XB=new C.u(1,0.2980392156862745,0.5450980392156862,0.2901960784313726,D.q)
B.xL=new C.u(1,0.788235294117647,0.6274509803921569,0.22745098039215686,D.q)
B.af4=new C.u(1,0.9411764705882353,0.5411764705882353,0.1411764705882353,D.q)
B.Fe=new C.u(1,0.9921568627450981,0.9882352941176471,0.9686274509803922,D.q)
B.XF=new C.u(1,0.5568627450980392,0.5843137254901961,0.6196078431372549,D.q)
B.bf_=new C.u(1,0.47843137254901963,0.35294117647058826,0.22745098039215686,D.q)
B.j9=new C.u(1,0.788235294117647,0.807843137254902,0.8392156862745098,D.q)
B.afe=new C.u(1,0.4196078431372549,0.45098039215686275,0.5019607843137255,D.q)
B.aff=new C.u(1,0.5568627450980392,0.35294117647058826,0.2901960784313726,D.q)
B.B9=new C.u(1,0.9294117647058824,0.9176470588235294,0.8784313725490196,D.q)
B.bfQ=new C.u(1,0.9137254901960784,0.7254901960784313,0.28627450980392155,D.q)
B.bg0=new C.u(1,0.22745098039215686,0.22745098039215686,0.24705882352941178,D.q)
B.bg8=new C.u(1,0.5490196078431373,0.5764705882352941,0.6078431372549019,D.q)
B.xP=new C.u(1,0.22745098039215686,0.24705882352941178,0.2784313725490196,D.q)
B.XM=new C.u(1,0.8980392156862745,0.8980392156862745,0.8666666666666667,D.q)
B.M_=new C.u(1,0.10588235294117647,0.11372549019607843,0.13333333333333333,D.q)
B.bgm=new C.u(1,0.22745098039215686,0.23529411764705882,0.25882352941176473,D.q)
B.XQ=new C.u(1,0.30980392156862746,0.6588235294117647,0.3764705882352941,D.q)
B.aft=new C.u(1,0.8509803921568627,0.803921568627451,0.7215686274509804,D.q)
B.afu=new C.u(1,0.4196078431372549,0.2901960784313726,0.16862745098039217,D.q)
B.Fk=new C.u(1,0.11764705882352941,0.11764705882352941,0.12549019607843137,D.q)
B.bgz=new C.u(1,0.8862745098039215,0.8745098039215686,0.8235294117647058,D.q)
B.afx=new C.u(1,0.9490196078431372,0.7803921568627451,0.611764705882353,D.q)
B.bgD=new C.u(1,0.42745098039215684,0.2901960784313726,1,D.q)
B.bgI=new C.u(1,0.3686274509803922,0.27450980392156865,0.18823529411764706,D.q)
B.bgL=new C.u(1,0.9058823529411765,0.8470588235294118,0.7450980392156863,D.q)
B.bgV=new C.u(1,0.5411764705882353,0.4823529411764706,0.41568627450980394,D.q)
B.bgZ=new C.u(1,0.24705882352941178,0.16470588235294117,0.10980392156862745,D.q)
B.afE=new C.u(1,0.34901960784313724,0.3176470588235294,0.29411764705882354,D.q)
B.bh1=new C.u(1,0.24705882352941178,0.6470588235294118,0.3568627450980392,D.q)
B.bh9=new C.u(1,0.8117647058823529,0.792156862745098,0.7411764705882353,D.q)
B.XV=new C.u(1,0.8117647058823529,0.8901960784313725,0.9176470588235294,D.q)
B.bhe=new C.u(1,0.7215686274509804,0.7450980392156863,0.7843137254901961,D.q)
B.M2=new C.u(1,0.3333333333333333,0.396078431372549,0.4823529411764706,D.q)
B.XW=new C.u(1,0.5529411764705883,0.7843137254901961,1,D.q)
B.XZ=new C.u(1,1,0.9019607843137255,0.5019607843137255,D.q)
B.bhE=new C.u(1,0.5411764705882353,0.1843137254901961,0.22745098039215686,D.q)
B.bhH=new C.u(1,0.9490196078431372,0.7607843137254902,0.10588235294117647,D.q)
B.afT=new C.u(1,0.9490196078431372,0.9411764705882353,0.9019607843137255,D.q)
B.bi_=new C.u(1,0.8509803921568627,0.7725490196078432,0.6392156862745098,D.q)
B.bi3=new C.u(1,0.9686274509803922,0.9607843137254902,0.9333333333333333,D.q)
B.afY=new C.u(1,0.6823529411764706,0.6941176470588235,0.7372549019607844,D.q)
B.o1=new C.u(1,0.1843137254901961,0.49019607843137253,0.8823529411764706,D.q)
B.bie=new C.u(1,0.788235294117647,0.7176470588235294,0.6078431372549019,D.q)
B.Be=new C.u(1,0.8901960784313725,0.6627450980392157,0.10980392156862745,D.q)
B.M8=new C.u(1,0.7137254901960784,0.7372549019607844,0.7686274509803922,D.q)
B.bij=new C.u(1,0.8431372549019608,0.8509803921568627,0.8784313725490196,D.q)
B.ag2=new C.u(1,0.7215686274509804,0.7529411764705882,0.8,D.q)
B.biu=new C.u(1,0.22745098039215686,0.49019607843137253,0.26666666666666666,D.q)
B.vN=new C.u(1,0.9019607843137255,0.8823529411764706,0.8352941176470589,D.q)
B.Y4=new C.u(1,0.3686274509803922,0.17647058823529413,0.13725490196078433,D.q)
B.biI=new C.u(1,0.0196078431372549,0.027450980392156862,0.050980392156862744,D.q)
B.agb=new C.u(1,0.6039215686274509,0.6274509803921569,0.6588235294117647,D.q)
B.Ft=new C.u(1,0.09019607843137255,0.09411764705882353,0.10588235294117647,D.q)
B.Bf=new C.u(1,0.9725490196078431,0.9725490196078431,0.9568627450980393,D.q)
B.biW=new C.u(1,0.2901960784313726,0.12156862745098039,0.15294117647058825,D.q)
B.agg=new C.u(1,0.9450980392156862,0.9568627450980393,0.9725490196078431,D.q)
B.bjc=new C.u(1,0.9019607843137255,0.9019607843137255,0.8784313725490196,D.q)
B.bjm=new C.u(1,0.29411764705882354,0.21176470588235294,0.12941176470588237,D.q)
B.Y8=new C.u(1,0.8941176470588236,0.9058823529411765,0.9176470588235294,D.q)
B.iz=new C.u(1,0.7686274509803922,0.6039215686274509,0.3843137254901961,D.q)
B.bjS=new C.u(1,0.08235294117647059,0.06274509803921569,0.047058823529411764,D.q)
B.agw=new C.u(1,1,0.35294117647058826,0.12156862745098039,D.q)
B.agx=new C.u(1,0.5411764705882353,0.5607843137254902,0.596078431372549,D.q)
B.Md=new C.u(1,0.16470588235294117,0.10196078431372549,0.06274509803921569,D.q)
B.agz=new C.u(1,0.5411764705882353,0.29411764705882354,0.29411764705882354,D.q)
B.Me=new C.u(1,0.9098039215686274,0.8509803921568627,0.7372549019607844,D.q)
B.bk6=new C.u(1,0.48627450980392156,0.3215686274509804,0.18823529411764706,D.q)
B.o5=new C.u(1,1,0.9450980392156862,0.6588235294117647,D.q)
B.bkw=new C.u(1,0.5411764705882353,0.5411764705882353,0.5176470588235295,D.q)
B.bky=new C.u(1,0.9647058823529412,0.9568627450980393,0.9254901960784314,D.q)
B.Mh=new C.u(1,0.47843137254901963,0.23137254901960785,0.1803921568627451,D.q)
B.bkI=new C.u(1,0.3333333333333333,0.6274509803921569,0.3333333333333333,D.q)
B.agJ=new C.u(1,0.7058823529411765,0.3254901960784314,0.3254901960784314,D.q)
B.bkQ=new C.u(1,0.6078431372549019,0.6078431372549019,0.592156862745098,D.q)
B.Bk=new C.u(1,0.9568627450980393,0.9450980392156862,0.9176470588235294,D.q)
B.bkW=new C.u(1,0.6078431372549019,0.23137254901960785,0.2901960784313726,D.q)
B.tO=new C.u(1,0.8862745098039215,0.23137254901960785,0.23137254901960785,D.q)
B.pZ=new C.u(1,0.9490196078431372,0.9490196078431372,0.9254901960784314,D.q)
B.bl0=new C.u(1,0.30980392156862746,0.615686274509804,0.3568627450980392,D.q)
B.agO=new C.u(1,0.788235294117647,0.8117647058823529,0.8392156862745098,D.q)
B.bl5=new C.u(1,0.9294117647058824,0.9215686274509803,0.8941176470588236,D.q)
B.Ym=new C.u(1,0.8392156862745098,0.6823529411764706,0.4470588235294118,D.q)
B.agR=new C.u(1,0.9098039215686274,0.9098039215686274,0.9098039215686274,D.q)
B.Mj=new C.u(1,0.2901960784313726,0.2980392156862745,0.32941176470588235,D.q)
B.Yo=new C.u(1,0.3686274509803922,0.43137254901960786,0.5176470588235295,D.q)
B.blP=new C.u(1,0.20784313725490197,0.47843137254901963,0.26666666666666666,D.q)
B.blS=new C.u(1,0.3568627450980392,0.10196078431372549,0.09019607843137255,D.q)
B.ah1=new C.u(1,0.23137254901960785,0.1843137254901961,0.14901960784313725,D.q)
B.ah2=new C.u(1,0.8509803921568627,0.788235294117647,0.6588235294117647,D.q)
B.kF=new C.u(1,0.9686274509803922,0.9568627450980393,0.9254901960784314,D.q)
B.ah5=new C.u(1,0.13333333333333333,0.1450980392156863,0.16862745098039217,D.q)
B.Ys=new C.u(1,0.4980392156862745,0.7215686274509804,1,D.q)
B.tQ=new C.u(1,0.16470588235294117,0.1450980392156863,0.13725490196078433,D.q)
B.bmb=new C.u(1,0.5411764705882353,0.23137254901960785,0.23137254901960785,D.q)
B.bmc=new C.u(1,0.9450980392156862,0.9294117647058824,0.8784313725490196,D.q)
B.FI=new C.u(1,0.796078431372549,0.8156862745098039,0.8392156862745098,D.q)
B.Yv=new C.u(1,0.8980392156862745,0.7254901960784313,0.11764705882352941,D.q)
B.bmB=new C.u(1,0.7490196078431373,0.8901960784313725,1,D.q)
B.ahj=new C.u(1,0.6039215686274509,0.4196078431372549,0.24705882352941178,D.q)
B.Yz=new C.u(1,0.10588235294117647,0.10588235294117647,0.11372549019607843,D.q)
B.bmX=new C.u(1,0.9529411764705882,0.9058823529411765,0.6313725490196078,D.q)
B.ahq=new C.u(1,0.9490196078431372,0.9490196078431372,0.9333333333333333,D.q)
B.bnl=new C.u(1,0.6274509803921569,0.6509803921568628,0.6823529411764706,D.q)
B.bny=new C.u(0,0.2196078431372549,0.7411764705882353,0.9725490196078431,D.q)
B.bnG=new C.u(1,0.8156862745098039,0.35294117647058826,0.22745098039215686,D.q)
B.bnM=new C.u(1,0.8509803921568627,0.788235294117647,0.6274509803921569,D.q)
B.YE=new C.u(1,0.9490196078431372,0.9176470588235294,0.8274509803921568,D.q)
B.ahK=new C.u(1,0.10588235294117647,0.07058823529411765,0.03529411764705882,D.q)
B.bo7=new C.u(1,0.3607843137254902,0.7019607843137254,0.9098039215686274,D.q)
B.ahL=new C.u(1,0.043137254901960784,0.043137254901960784,0.050980392156862744,D.q)
B.Ms=new C.u(1,0.24705882352941178,0.26666666666666666,0.3137254901960784,D.q)
B.boh=new C.u(1,0.12549019607843137,0.13333333333333333,0.14901960784313725,D.q)
B.Mw=new C.u(1,0.8862745098039215,0.27058823529411763,0.35294117647058826,D.q)
B.box=new C.u(1,0.12156862745098039,0.43529411764705883,0.2627450980392157,D.q)
B.boz=new C.u(0.8509803921568627,0.06666666666666667,0.07450980392156863,0.09411764705882353,D.q)
B.y1=new C.u(1,0.17254901960784313,0.4196078431372549,0.8392156862745098,D.q)
B.tU=new C.u(1,0.7607843137254902,0.4627450980392157,0.22745098039215686,D.q)
B.Mz=new C.u(1,0.7254901960784313,0.7450980392156863,0.7764705882352941,D.q)
B.ahU=new C.u(1,0.611764705882353,0.35294117647058826,0.27058823529411763,D.q)
B.bp0=new C.u(1,0.611764705882353,0.5882352941176471,0.5450980392156862,D.q)
B.ai1=new C.u(1,0.23137254901960785,0.1843137254901961,0.16470588235294117,D.q)
B.ME=new C.u(1,0.9686274509803922,0.9490196078431372,0.9019607843137255,D.q)
B.bpt=new C.u(1,0.2,0.21176470588235294,0.23137254901960785,D.q)
B.bpy=new C.u(1,0.7098039215686275,0.7333333333333333,0.7647058823529411,D.q)
B.bpz=new C.u(1,0.9294117647058824,0.9294117647058824,0.9098039215686274,D.q)
B.bpF=new C.u(1,0.9098039215686274,0.8941176470588236,0.8549019607843137,D.q)
B.bpK=new C.u(1,0.23137254901960785,0.23137254901960785,0.25098039215686274,D.q)
B.bpO=new C.u(1,0.1411764705882353,0.10588235294117647,0.09411764705882353,D.q)
B.FR=new C.u(1,0.7686274509803922,0.5411764705882353,0.11764705882352941,D.q)
B.bpR=new C.u(1,0.43529411764705883,0.7137254901960784,1,D.q)
B.bq0=new C.u(1,0.9450980392156862,0.9019607843137255,0.8156862745098039,D.q)
B.bq2=new C.u(1,0.9137254901960784,0.8980392156862745,0.8549019607843137,D.q)
B.aik=new C.u(1,0.18823529411764706,0.2,0.22745098039215686,D.q)
B.MG=new C.u(1,0.9372549019607843,0.9372549019607843,0.9176470588235294,D.q)
B.aim=new C.u(0.6666666666666666,1,0.16470588235294117,0.10196078431372549,D.q)
B.bqj=new C.u(1,0.9372549019607843,0.9137254901960784,0.8627450980392157,D.q)
B.bqm=new C.u(1,0.9294117647058824,0.9019607843137255,0.8156862745098039,D.q)
B.YV=new C.u(1,0.4196078431372549,0.24705882352941178,0.19215686274509805,D.q)
B.aip=new C.u(1,0.12156862745098039,0.6392156862745098,0.2627450980392157,D.q)
B.bqs=new C.u(1,0.803921568627451,0.6274509803921569,0.2,D.q)
B.YY=new C.u(1,0.3607843137254902,0.7019607843137254,1,D.q)
B.br8=new C.u(1,0.48627450980392156,0.2901960784313726,0.17647058823529413,D.q)
B.YZ=new C.u(1,0.9568627450980393,0.9568627450980393,0.9411764705882353,D.q)
B.bra=new C.u(1,0.8431372549019608,0.8,0.6588235294117647,D.q)
B.brP=new C.u(1,0.9019607843137255,0.8745098039215686,0.796078431372549,D.q)
B.brS=new C.u(1,0.30980392156862746,0.6588235294117647,1,D.q)
B.brY=new C.u(1,1,0.6196078431372549,0.6196078431372549,D.q)
B.aiM=new C.u(1,0.8431372549019608,0.16470588235294117,0.16470588235294117,D.q)
B.MP=new C.u(1,0.47843137254901963,0.30980392156862746,0.1568627450980392,D.q)
B.bsb=new C.u(1,0.9294117647058824,0.9372549019607843,0.9529411764705882,D.q)
B.By=new C.u(1,0.6901960784313725,0.5411764705882353,0.3568627450980392,D.q)
B.i1=new C.u(1,0.6078431372549019,0.8274509803921568,0.9607843137254902,D.q)
B.bsv=new C.u(1,0.48627450980392156,0.2901960784313726,0.22745098039215686,D.q)
B.Z9=new C.u(1,0.7490196078431373,0.8901960784313725,0.9686274509803922,D.q)
B.Za=new C.u(1,0.23137254901960785,0.6078431372549019,1,D.q)
B.aiU=new C.u(1,0.8509803921568627,0.8235294117647058,0.7607843137254902,D.q)
B.q9=new C.u(1,0.4196078431372549,0.2901960784313726,0.19607843137254902,D.q)
B.bsJ=new C.u(1,0.8509803921568627,0.7450980392156863,0.5725490196078431,D.q)
B.Zc=new C.u(1,0.13333333333333333,0.14901960784313725,0.17254901960784313,D.q)
B.bsM=new C.u(1,0.8117647058823529,0.788235294117647,0.7215686274509804,D.q)
B.bsQ=new C.u(1,0.7176470588235294,0.4745098039215686,0.12156862745098039,D.q)
B.bsW=new C.u(1,0.9294117647058824,0.9294117647058824,0.9176470588235294,D.q)
B.bsX=new C.u(1,0.7529411764705882,0.5411764705882353,0.35294117647058826,D.q)
B.bsZ=new C.u(1,0.5450980392156862,0.4196078431372549,0.24705882352941178,D.q)
B.bu1=new A.tm("none","Nothing happens: the device gets no power.",!1,!1,!1)
B.bu2=new A.tm("none","It cannot be judged: the wire functions were not verified.",!1,!1,!1)
B.bu3=new A.tm("smoke","The loose connection overheats: it glows, smokes and chars the device. In a real wall this can start a fire.",!1,!1,!0)
B.bu4=new A.tm("none","It does not work as it should: some part runs wrongly or not at all. That does not tell you what is wrong, so check against the diagram.",!1,!1,!1)
B.bu5=new A.tm("none","It runs. There is nothing to see, and that is the danger: with no ground, a fault would energize the metal parts.",!0,!1,!1)
B.bu6=new A.tm("none","It works as the diagram says.",!0,!1,!1)
B.bu7=new A.tm("none","It works, and every safety rule is met.",!0,!1,!1)
B.bu8=new A.tm("none","Nothing happens: it is dead. But the hot wire is connected, so it can still be live. No sparks, no smoke: that does not make it safe.",!1,!1,!1)
B.bu9=new A.tm("spark","Bare copper touches something it should not: sparks. The circuit is not safe.",!1,!1,!1)
B.bua=new A.tm("none","It looks fine for now. But the support cannot carry the weight, and it can fall later.",!1,!1,!1)
B.bub=new A.tm("fire","BANG. A short circuit: a flash, sparks, smoke and a flame at the device. The breaker trips and the device is ruined. The wires and the device are not safe to use.",!1,!0,!0)
B.buc=new A.tm("arc","Hot and neutral are reversed: the parts that should be dead are live. Blue arcs show the energized metal. The simulator does not let anything run on this: it is unsafe, even if a real appliance might seem to work.",!1,!1,!1)
B.bud=new A.tm("arc","Current flows through the ground wire and the metal parts it joins. Arcs crackle at the box. This is a shock hazard.",!1,!1,!1)
B.bue=new A.tm("spark","The neutral and ground are joined: the protective device trips with a snap of sparks.",!1,!0,!1)
B.bv6=new A.ako("expired","That order took too long and went back on the board.",0)
B.bx2=new C.bb(55e3)
B.bxU=new C.Q(0,2,0,6)
B.byj=new C.Q(10,10,10,8)
B.byp=new C.Q(10,16,10,14)
B.byH=new C.Q(11,7,11,7)
B.a_9=new C.Q(11,9,11,9)
B.bzJ=new C.Q(14,16,14,10)
B.akt=new C.Q(14,8,14,24)
B.bBn=new C.Q(1,0,0,0)
B.bBZ=new C.Q(22,0,22,44)
B.bCG=new C.Q(26,8,26,8)
B.bDi=new C.Q(4,22,4,12)
B.bDv=new C.Q(4,4,8,4)
B.bDx=new C.Q(4,6,12,4)
B.alI=new C.Q(9,0,9,0)
B.bEt=new C.Q(9,12,9,12)
B.bEu=new C.Q(9,6,2,6)
B.bEv=new C.Q(9,6,9,6)
B.fVK=new C.y("Practice mode (no explanations, real shocks)",null,D.aUk,null,null,null,null,null,null,null,null,null)
B.bF0=new C.bA(1,D.bd,B.fVK,null)
B.fy6=new C.y("\ud83c\udfd8 Community",null,R.te,null,null,null,null,null,null,null,null,null)
B.b9L=new C.ce(D.A,null,null,B.fy6,null)
B.bF8=new C.bA(1,D.bd,B.b9L,null)
B.fCJ=new C.y("House tour",null,D.n0,null,null,null,null,null,null,null,null,null)
B.fJg=new C.y("A film of your whole house, with every TV on.",null,D.a9I,null,null,null,null,null,null,null,null,null)
B.dmj=w([B.fCJ,D.bF,B.fJg],x.p)
B.bu_=new C.fj(D.ah,D.e,D.i,D.E,null,D.p,null,0,B.dmj,null)
B.bFd=new C.bA(1,D.bd,B.bu_,null)
B.fIS=new C.y("Construction Lab",null,R.te,null,null,null,null,null,null,null,null,null)
B.fxv=new C.y("Wire it. Plumb it. Fix a house.",null,D.hq,null,null,null,null,null,null,null,null,null)
B.dcJ=w([B.fIS,B.fxv],x.p)
B.btJ=new C.fj(D.ah,D.e,D.i,D.E,null,D.p,null,0,B.dcJ,null)
B.bFm=new C.bA(1,D.bd,B.btJ,null)
B.aTA=new C.F(!0,D.c,null,null,null,null,14,D.H,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fR9=new C.y("5 portions of food\n10 points",null,B.aTA,null,null,null,null,null,null,null,null,null)
B.bFr=new C.bA(1,D.bd,B.fR9,null)
B.fDg=new C.y("3 doses of medicine\n12 points",null,B.aTA,null,null,null,null,null,null,null,null,null)
B.bFH=new C.bA(1,D.bd,B.fDg,null)
B.fON=new C.y("Drone film",null,D.fw,null,null,null,null,null,null,null,null,null)
B.bFM=new C.bA(1,D.bd,B.fON,null)
B.fVk=new C.y("Uber licence",null,D.fw,null,null,null,null,null,null,null,null,null)
B.bGd=new C.bA(1,D.bd,B.fVk,null)
B.bHa=new A.a58(null,null)
B.a0x=new A.rm(0,"tripped")
B.a0y=new A.rm(1,"noHotWater")
B.a0z=new A.rm(10,"wallHole")
B.a0A=new A.rm(11,"clogged")
B.NY=new A.rm(2,"nutLeak")
B.NZ=new A.rm(3,"pexLeak")
B.a0B=new A.rm(5,"flicker")
B.a0C=new A.rm(6,"burntOutlet")
B.a0D=new A.rm(7,"gfciTripped")
B.a0E=new A.rm(8,"runningToilet")
B.a0F=new A.rm(9,"dripFaucet")
B.bIW=new A.oq(!1,"back",0,10)
B.bIX=new A.oq(!1,"back",0,9)
B.bIY=new A.oq(!1,"back",50,0)
B.bIZ=new A.oq(!1,"back",56,11)
B.bJ_=new A.oq(!1,"back",-50,10)
B.bJ0=new A.oq(!1,"left",40,9)
B.bJ1=new A.oq(!1,"right",40,10)
B.a0O=new A.oq(!1,"right",50,5)
B.amy=new A.pT("tv100",'Giant 100"',"\ud83d\udcfa",89,!1)
B.bL8=new C.a0(61419,"MaterialIcons",!1)
B.bLk=new C.a0(61888,"MaterialIcons",!1)
B.bM4=new C.a0(62978,"MaterialIcons",!1)
B.bM9=new C.a0(63015,"MaterialIcons",!1)
B.bMw=new C.a0(63165,"MaterialIcons",!1)
B.OA=new C.a0(63228,"MaterialIcons",!1)
B.aou=new C.a0(63547,"MaterialIcons",!0)
B.bNO=new C.a0(983222,"MaterialIcons",!1)
B.bOc=new C.a0(983510,"MaterialIcons",!1)
B.bOd=new C.a0(983511,"MaterialIcons",!1)
B.bOp=new C.a0(983666,"MaterialIcons",!1)
B.apg=new C.a0(983775,"MaterialIcons",!1)
B.a2n=new C.a0(983894,"MaterialIcons",!1)
B.bRU=new C.ae(D.oi,null,null,null,null,null)
B.bTn=new C.ae(D.cx,26,D.aC,null,null,null)
B.bVS=new C.ae(D.mN,null,null,null,null,null)
B.bWJ=new C.ae(D.Cw,22,D.c,null,null,null)
B.bWO=new C.ae(D.kM,null,F.fA,null,null,null)
B.bYL=new C.ae(D.pe,null,null,null,null,null)
B.c_0=new C.ae(D.f9,null,D.aC,null,null,null)
B.c_c=new C.ae(A1.Hj,null,D.bu,null,null,null)
B.fZ9=new A.q(0,100,20)
B.c15=new A.hh(B.fZ9,"No power in this house",D.bz,0)
B.hdQ=new A.q(-60,40,130)
B.c16=new A.hh(B.hdQ,"\ud83e\uddef Walk here to check the equipment",D.d2,0)
B.h_Q=new A.q(0,62,12)
B.c17=new A.hh(B.h_Q,"\ud83d\uded7 Elevator: walk onto the blue mat or tap",D.jw,19502)
B.h_J=new A.q(0,50,80)
B.c18=new A.hh(B.h_J,"\ud83d\udcda Walk here to teach the class",D.d2,0)
B.h0k=new A.q(105,52,100)
B.c19=new A.hh(B.h0k,"\ud83c\udf06 Balcony: step here to see the city",D.ej,0)
B.he3=new A.q(-80,70,40)
B.c1a=new A.hh(B.he3,"\ud83d\udc69\u200d\u2695\ufe0f Nurse",D.cQ,0)
B.h_N=new A.q(0,52,78)
B.c1b=new A.hh(B.h_N,"\ud83e\udeaa Walk here to get your Uber licence",D.jw,0)
B.he4=new A.q(-84,84,120)
B.c1c=new A.hh(B.he4,"\ud83c\udf5e Food and drinks",D.d2,0)
B.h_w=new A.q(0,40,176)
B.c1d=new A.hh(B.h_w,"\ud83c\udf4e Fresh fruit",D.el,0)
B.aW9=new A.q(0,26,312)
B.c1e=new A.hh(B.aW9,"\u2b07 Walk here to go out",D.ej,0)
B.c1f=new A.hh(B.aW9,"\ud83d\uded7 Take the elevator down to go out",D.jw,0)
B.h5U=new A.q(90,40,56)
B.c1g=new A.hh(B.h5U,"\ud83d\udcd6 Library",D.dF,0)
B.h5s=new A.q(80,40,56)
B.c1h=new A.hh(B.h5s,"\ud83d\udd25 Fire drill",D.bz,0)
B.aW4=new A.q(0,100,36)
B.c1i=new A.hh(B.aW4,"\ud83e\udeaa NGMY Licence office",D.N,0)
B.aWK=new A.q(34,56,18)
B.c1j=new A.hh(B.aWK,"\ud83e\uddd1\u200d\ud83d\udcbc Clerk",D.cQ,0)
B.hcR=new A.q(-0.4,4.2,-2.4)
B.c1k=new A.hh(B.hcR,"LIVE 120 V",D.bz,0)
B.he2=new A.q(-80,52,66)
B.c1l=new A.hh(B.he2,"\ud83c\udfe5 Walk here to admit the sick",D.eN,0)
B.h_K=new A.q(0,50,84)
B.c1m=new A.hh(B.h_K,"\ud83d\udcb0 Counter: walk here to pay or sell",D.ej,0)
B.c1n=new A.hh(B.aWK,"\ud83e\uddd1\u200d\ud83d\udcbc Cashier",D.cQ,0)
B.c2m=new C.a9(D.a5,D.a8,D.x,N.azn,null,null)
B.c3k=new C.a9(D.a5,D.a8,D.x,N.axN,null,null)
B.bpT=new C.u(1,0.2901960784313726,0.20392156862745098,0.0784313725490196,D.q)
B.bmD=new C.u(1,0.12156862745098039,0.10196078431372549,0.07058823529411765,D.q)
B.bff=new C.u(1,0.16470588235294117,0.12156862745098039,0.07058823529411765,D.q)
B.dog=w([B.bpT,B.bmD,B.bff],x.O)
B.c3p=new C.a9(D.ay,D.aE,D.x,B.dog,null,null)
B.bhc=new C.u(1,0.8509803921568627,0.6039215686274509,0.11764705882352941,D.q)
B.daD=w([F.fA,B.bhc],x.O)
B.c3x=new C.a9(D.ay,D.aE,D.x,B.daD,null,null)
B.bp3=new C.u(1,0.0392156862745098,0.058823529411764705,0.1803921568627451,D.q)
B.brR=new C.u(1,0.1411764705882353,0.08235294117647059,0.3215686274509804,D.q)
B.cMj=w([E.afW,B.bp3,B.brR],x.O)
B.c4e=new C.a9(D.b0,D.b5,D.x,B.cMj,null,null)
B.d77=w([E.jL,E.LX,E.jL],x.O)
B.arA=new C.a9(D.a5,D.a8,D.x,B.d77,null,null)
B.bms=new C.u(1,0.8901960784313725,0.9254901960784314,0.9803921568627451,D.q)
B.d5A=w([D.c,B.bms],x.O)
B.c5v=new C.a9(D.b0,D.b5,D.x,B.d5A,null,null)
B.bsN=new C.u(1,0.07058823529411765,0.22745098039215686,0.47843137254901963,D.q)
B.cZO=w([E.jL,B.bsN],x.O)
B.c5G=new C.a9(D.ay,D.aE,D.x,B.cZO,null,null)
B.doY=w([D.cr,D.de],x.O)
B.zj=new C.a9(D.b0,D.b5,D.x,B.doY,null,null)
B.cjr=w([E.jL,E.LX],x.O)
B.c5V=new C.a9(D.a5,D.a8,D.x,B.cjr,null,null)
B.efp={ground:0}
B.Ab=new C.dD(B.efp,1,x.M)
B.uj=new A.fl(25,"Green screw: GROUND",B.Ab,y.H,!1,"ground")
B.efH={lineA:0}
B.f4T=new C.dD(B.efH,1,x.M)
B.bJT=new A.fl(23,"LINE screw 1 (top left)",B.f4T,"Hot leg 1 from the panel goes on the top left screw.",!1,"hot")
B.efI={lineB:0}
B.f4H=new C.dD(B.efI,1,x.M)
B.bJL=new A.fl(21,"LINE screw 2 (top right)",B.f4H,"Hot leg 2 from the panel goes on the top right screw.",!1,"hot")
B.efK={loadA:0}
B.f4S=new C.dD(B.efK,1,x.M)
B.bJr=new A.fl(24,"LOAD screw 1 (bottom left)",B.f4S,"Hot leg 1 to the heater goes on the bottom left screw: it is switched through from the top left one.",!1,"hot")
B.efM={loadB:0}
B.f5s=new C.dD(B.efM,1,x.M)
B.bJE=new A.fl(22,"LOAD screw 2 (bottom right)",B.f5s,"Hot leg 2 to the heater goes on the bottom right screw.",!1,"hot")
B.c6f=w([B.uj,B.bJT,B.bJL,B.bJr,B.bJE],x.r)
B.c6j=w(["flange","wax","toilet","bolts","valve","hosehot","hosecold","faucet","tail","trap","arm"],x.s)
B.a33=w([0,0,0,0],x.t)
B.c6u=w([0,0,0,1],x.k)
B.cfw=w([139,161],x.n)
B.cfD=w([145,158],x.n)
B.cjj=w([Y.qM,A7.TM,S.lo,V.aPv],x.f)
B.cjv=w([1,1,1],x.k)
B.cjw=w([1,1,1,1],x.k)
B.haH=new A.q(-57.8,-32,0)
B.b7e=new A.z7(0,"Outlet spot 1",!1,B.haH,"low")
B.hbs=new A.q(-9.8,-32,0)
B.b7b=new A.z7(1,"Outlet spot 2",!1,B.hbs,"low")
B.hc_=new A.q(38.2,-32,0)
B.b7h=new A.z7(2,"Outlet spot 3",!1,B.hc_,"low")
B.hah=new A.q(-25.8,0,0)
B.b7f=new A.z7(3,"Switch spot 1",!1,B.hah,"switch")
B.hbm=new A.q(22.2,0,0)
B.b7d=new A.z7(4,"Switch spot 2",!1,B.hbm,"switch")
B.hdv=new A.q(-30,48,40)
B.b7g=new A.z7(5,"Ceiling light spot",!0,B.hdv,"light")
B.h2Q=new A.q(30,48,40)
B.b7c=new A.z7(6,"Ceiling fan spot",!0,B.h2Q,"fan")
B.uJ=w([B.b7e,B.b7b,B.b7h,B.b7f,B.b7d,B.b7g,B.b7c],C.at("O<z7>"))
B.eyF=new C.z(4,6)
B.ezb=new C.z(5,7)
B.ezA=new C.z(6,8)
B.cjX=w([S.lo,Am.va,E.TJ,E.TK,B.eyF,B.ezb,B.ezA],C.at("O<+(G,G)>"))
B.ck_=w([2],x.t)
B.cqJ=w(["The living room has no power: find the tripped breaker in the panel and reset it.","The kitchen sink drips: pick the wrench and tighten the slip nut under the sink. (Build the house up to Fixtures to see the problems.)"],x.s)
B.hbH=new A.q(11,4.6,-6)
B.h6f=new A.q(11,5.4,-7.85)
B.hb0=new A.q(3.4,5.4,-7.85)
B.aXc=new A.q(3.4,3.4,-7.85)
B.cqL=w([B.hbH,B.h6f,B.hb0,B.aXc],x.o)
B.crt=w([3],x.t)
B.crD=w([300,800,1300,1800],x.n)
B.ctD=w([32,80],x.n)
B.hmq=new A.ho(0,0.7,2.2,2,0,0,0)
B.hmf=new A.ho(3,0.1,0.95,-0.42,-0.3,-0.2,0.05)
B.hmz=new A.ho(6.5,0,0.9,-0.38,0.3,0.2,0.05)
B.hmI=new A.ho(9.5,-0.9,1.15,0.1,0,0,0)
B.hmF=new A.ho(12.5,-1.7,1.45,1.6,0,0,0)
B.hme=new A.ho(15.5,-2.8,1,-0.35,0,0,0)
B.hmy=new A.ho(18.5,-3.6,0.9,0.05,0,0,0)
B.hmC=new A.ho(21.5,-4.6,1.5,1.5,0,0,0)
B.hmr=new A.ho(24.5,-5.4,0.9,-0.4,0,0,0)
B.hmK=new A.ho(27.5,-6.28,0.75,0.05,0,0,0)
B.hms=new A.ho(30,-6,2.4,1.7,0,0,0)
B.d3Y=w([B.hmq,B.hmf,B.hmz,B.hmI,B.hmF,B.hme,B.hmy,B.hmC,B.hmr,B.hmK,B.hms],x.x)
B.hmi=new A.ho(0,-3.14,1.2,-0.3,0,0,0)
B.hmb=new A.ho(4,-2.2,1.1,0,0,0,0)
B.hmJ=new A.ho(8,-1.2,1,0.4,0,0,0)
B.hmg=new A.ho(12,-0.4,1,0.9,0,0,0)
B.hmj=new A.ho(15,0.1,0.85,1.7,0,0,0)
B.hma=new A.ho(18,0.3,0.8,0,0,0,0)
B.hmh=new A.ho(21,0,0.9,-0.2,0.35,0.25,0)
B.hmn=new A.ho(24,0.6,1.4,0.1,-0.2,0,0)
B.hmo=new A.ho(27,1.4,1.2,0.8,0,0,0)
B.hmm=new A.ho(30,2.4,2.3,1.5,0,0,0)
B.dbh=w([B.hmi,B.hmb,B.hmJ,B.hmg,B.hmj,B.hma,B.hmh,B.hmn,B.hmo,B.hmm],x.x)
B.hmk=new A.ho(0,0.3,2.6,0.5,0,0,0)
B.hmE=new A.ho(3,0.1,1,0,0,0,0)
B.hmH=new A.ho(6,0,0.95,0.05,0.2,0.15,0)
B.hmv=new A.ho(9,-0.8,1.6,0.3,0,0,0)
B.hmA=new A.ho(12,-1.57,1,-0.2,0,0,0)
B.hmt=new A.ho(15,-2.4,1.5,0.9,0,0,0)
B.hmx=new A.ho(18,-3.14,1,0.1,0,0,0)
B.hmp=new A.ho(21,-3.9,1.5,0.6,0,0,0)
B.hmL=new A.ho(24,-4.71,1,-0.3,0,0,0)
B.hmc=new A.ho(27,-5.5,1.3,0.5,0,0,0)
B.hm9=new A.ho(30,-6.28,2.6,0.9,0,0,0)
B.cHm=w([B.hmk,B.hmE,B.hmH,B.hmv,B.hmA,B.hmt,B.hmx,B.hmp,B.hmL,B.hmc,B.hm9],x.x)
B.hmD=new A.ho(0,0,0.5,3.5,0,0,0)
B.hmd=new A.ho(4,0.2,1,-0.3,0,0,0)
B.hmG=new A.ho(8,1,1,0,0,0,0)
B.hm7=new A.ho(12,1.57,1.2,0.3,0,0,0)
B.hmB=new A.ho(16,3.14,1.4,1.2,0,0,0)
B.hm8=new A.ho(20,3.5,0.9,-0.35,0,0,0)
B.hml=new A.ho(24,4.7,1.1,0,0,0,0)
B.hmu=new A.ho(28,6,1,0.3,0,0,0)
B.hmw=new A.ho(30,6.3,2.2,1.4,0,0,0)
B.d3C=w([B.hmD,B.hmd,B.hmG,B.hm7,B.hmB,B.hm8,B.hml,B.hmu,B.hmw],x.x)
B.cvX=w([B.d3Y,B.dbh,B.cHm,B.d3C],C.at("O<ai<ho>>"))
B.cvY=w([380,820,1420,1660],x.n)
B.efT={neutral:0}
B.E3=new C.dD(B.efT,1,x.M)
B.bJK=new A.fl(23,"Silver screw (top): NEUTRAL",B.E3,y.G,!1,"neutral")
B.bJi=new A.fl(24,"Silver screw (bottom): NEUTRAL",B.E3,y.G,!1,"neutral")
B.eg8={switched:0}
B.f5x=new C.dD(B.eg8,1,x.M)
B.bJg=new A.fl(21,"Brass screw (top): SWITCHED hot",B.f5x,"The top half is the switched one: the red wire that comes back from the wall switch goes here.",!1,"hot")
B.ef4={always:0}
B.f4E=new C.dD(B.ef4,1,x.M)
B.bJH=new A.fl(22,"Brass screw (bottom): ALWAYS hot",B.f4E,"The bottom half is always on: the black wire straight from the panel goes here.",!1,"hot")
B.cxa=w([B.uj,B.bJK,B.bJi,B.bJg,B.bJH],x.r)
B.eP7=new C.z(-820,640)
B.eAd=new C.z(820,640)
B.cxf=w([B.eP7,B.eAd],x.f)
B.htX=new A.pE(0,-80,66,24)
B.htY=new A.pE(1,20,48,20)
B.hu5=new A.pE(2,20,98,20)
B.hu6=new A.pE(3,20,148,20)
B.cxF=w([B.htX,B.htY,B.hu5,B.hu6],x.X)
B.D7=w([],x.m)
B.b1i=new A.rd("highway","\ud83d\udee3\ufe0f","Highway board","Huge and wide, on two thick poles, with a walkway under it",420,170,150,B.D7,0,1)
B.b1f=new A.rd("tower","\ud83d\uddfc","Tall tower sign","A big sign high up on one very thick pole",400,210,270,B.D7,0,1)
B.b1l=new A.rd("neon","\ud83c\udf03","Neon board","A big black board with a glowing neon edge",380,190,120,B.D7,0,1)
B.b1k=new A.rd("roof","\ud83c\udfe0","Rooftop board","A tall house with two big TVs, the NGMY carpet on its back, and a huge board on its roof",460,180,308,B.D7,800,1)
B.b1e=new A.rd("screen","\ud83d\udcfa","Big screen","A giant TV screen on a stand",440,250,60,B.D7,0,1)
B.b1m=new A.rd("gate","\ud83d\udeaa","Town gate","A huge arch with the board across it",600,200,200,B.D7,0,1)
B.b10=new A.lH(-420,140,0.35,0,1)
B.b0Z=new A.lH(460,-420,-0.3,160,1.35)
B.d1O=w([B.b10,B.b0Z],x.m)
B.b1d=new A.rd("duo","\ud83e\udea7","Two far apart","Two separate boards: a near one and a taller one far behind it",320,160,140,B.d1O,0,0.7)
B.b0U=new A.lH(-460,0,0,0,1)
B.b11=new A.lH(460,0,0,0,1)
B.dnr=w([B.b0U,B.acy,B.b11],x.m)
B.b1o=new A.rd("line3","\u2194\ufe0f","Three in a row","Three separate boards standing in one straight line",300,150,150,B.dnr,0,0.6)
B.b0S=new A.lH(-950,250,0.5,0,1)
B.b0R=new A.lH(150,-700,-0.2,220,1.55)
B.b0V=new A.lH(1000,60,-0.55,0,0.9)
B.cSK=w([B.b0S,B.b0R,B.b0V],x.m)
B.b1g=new A.rd("far3","\ud83d\udef0\ufe0f","Three scattered far","Three separate boards far from each other, one of them tall and far behind",320,160,140,B.cSK,0,0.6)
B.b16=new A.lH(-360,300,0.15,0,1)
B.b0W=new A.lH(360,300,-0.15,0,1)
B.b13=new A.lH(0,-120,0,100,1.25)
B.b0Y=new A.lH(-160,-640,0.1,260,1.6)
B.c6X=w([B.b16,B.b0W,B.b13,B.b0Y],x.m)
B.b1j=new A.rd("skyline","\ud83c\udf06","Skyline","Four separate boards, the taller ones standing behind the shorter ones",300,150,130,B.c6X,0,0.6)
B.b0Q=new A.lH(-440,160,0,0,1)
B.b14=new A.lH(0,160,0,0,1)
B.b0P=new A.lH(440,160,0,0,1)
B.b15=new A.lH(-440,-420,3.141592653589793,130,1.2)
B.b0T=new A.lH(0,-420,3.141592653589793,130,1.2)
B.b12=new A.lH(440,-420,3.141592653589793,130,1.2)
B.dp6=w([B.b0Q,B.b14,B.b0P,B.b15,B.b0T,B.b12],x.m)
B.b1h=new A.rd("lines6","\ud83d\udee4\ufe0f","Two lines of three","Six separate boards: a straight line of three facing front, and a taller line of three behind it facing back",280,140,140,B.dp6,0,0.6)
B.b1_=new A.lH(0,300,0,0,1)
B.b0N=new A.lH(0,-300,3.141592653589793,0,1)
B.b0X=new A.lH(-560,0,-1.5707963267948966,0,1)
B.b0O=new A.lH(560,0,1.5707963267948966,0,1)
B.duc=w([B.b1_,B.b0N,B.b0X,B.b0O],x.m)
B.b1n=new A.rd("scatter","\ud83c\udf10","Billboard park","Four separate boards: one at the front, one at the back and one on each side, all facing out",320,160,150,B.duc,0,0.6)
B.a3x=w([B.b1i,B.b1f,B.b1l,B.b1k,B.b1e,B.b1m,B.b1d,B.b1o,B.b1g,B.b1j,B.b1h,B.b1n],C.at("O<rd>"))
B.dB9=new A.ia(-134,-36,16,44)
B.dAX=new A.ia(34,118,30,66)
B.dAY=new A.ia(34,118,80,116)
B.dAW=new A.ia(34,118,130,166)
B.dBa=new A.ia(-134,-76,140,160)
B.cxJ=w([B.dB9,B.dAX,B.dAY,B.dAW,B.dBa],x.T)
B.cxM=w([y.O,y.x,y.R,"Fasten the single black feed from the panel to the FEED screw (it powers both switches through a joined tab).","Fasten the black wire to the first light to the screw of switch 1.","Fasten the black wire to the second light to the screw of switch 2.",y.b,y.n],x.s)
B.eOS=new C.z(-600,1250)
B.eOQ=new C.z(-520,1260)
B.eOO=new C.z(-460,1250)
B.eyX=new C.z(520,1280)
B.ezk=new C.z(600,1270)
B.eOC=new C.z(-300,1300)
B.cCE=w([B.eOS,B.eOQ,B.eOO,B.eyX,B.ezk,B.eOC],x.f)
B.cD5=w([460,900,1500,1740],x.n)
B.bii=new C.u(1,0.5411764705882353,0.35294117647058826,0.23529411764705882,D.q)
B.afC=new C.u(1,0.10588235294117647,0.07058823529411765,0.06274509803921569,D.q)
B.bsG=new C.u(1,0.8509803921568627,0.27450980392156865,0.49411764705882355,D.q)
B.aeq=new C.u(1,0.23137254901960785,0.24705882352941178,0.3607843137254902,D.q)
B.eqR=new A.tO(B.bii,B.afC,B.bsG,B.aeq,"xbot",!1,0,1)
B.f2d=new A.Fq(0,"Ama",0,2,B.eqR,"A nurse who works nights.")
B.bkq=new C.u(1,0.4196078431372549,0.27058823529411763,0.18823529411764706,D.q)
B.bhs=new C.u(1,0.08627450980392157,0.06274509803921569,0.06274509803921569,D.q)
B.bq4=new C.u(1,0.1803921568627451,0.5607843137254902,0.3568627450980392,D.q)
B.eqV=new A.tO(B.bkq,B.bhs,B.bq4,B.LG,"soldier",!1,0,1)
B.f2b=new A.Fq(1,"Joseph",1,2,B.eqV,"A student who is always hungry.")
B.bo2=new C.u(1,0.6274509803921569,0.4196078431372549,0.2784313725490196,D.q)
B.biB=new C.u(1,0.2901960784313726,0.24705882352941178,0.4196078431372549,D.q)
B.eqW=new A.tO(B.bo2,B.Md,D.aB,B.biB,"xbot",!1,0,1)
B.f2f=new A.Fq(2,"Grace",3,4,B.eqW,"A teacher who marks papers late.")
B.aeE=new C.u(1,0.8784313725490196,0.6431372549019608,0.48627450980392156,D.q)
B.aiJ=new C.u(1,0.1843137254901961,0.43529411764705883,0.7098039215686275,D.q)
B.eqT=new A.tO(B.aeE,D.agH,B.aiJ,B.LG,"soldier",!1,0,1)
B.f2c=new A.Fq(3,"Daniel",6,8,B.eqT,"A driver who sleeps in the day.")
B.bqH=new C.u(1,0.788235294117647,0.5450980392156862,0.3686274509803922,D.q)
B.biN=new C.u(1,0.16862745098039217,0.17647058823529413,0.22745098039215686,D.q)
B.eqP=new A.tO(B.bqH,B.afC,D.aD,B.biN,"xbot",!1,0,1)
B.f2h=new A.Fq(4,"Fatima",7,8,B.eqP,"A baker who gets up at four.")
B.aiA=new C.u(1,0.47843137254901963,0.29411764705882354,0.18823529411764706,D.q)
B.bpc=new C.u(1,0.24705882352941178,0.22745098039215686,0.2,D.q)
B.eqS=new A.tO(B.aiA,D.e2,D.d2,B.bpc,"soldier",!1,0,1)
B.f2e=new A.Fq(5,"Papa Moses",10,-1,B.eqS,"The oldest in the house. He watches TV all day.")
B.bmR=new C.u(1,0.5490196078431373,0.3568627450980392,0.23137254901960785,D.q)
B.eqU=new A.tO(B.bmR,B.agx,D.ax,B.aeq,"xbot",!1,0,1)
B.f2g=new A.Fq(6,"Mama Rose",9,-1,B.eqU,"Cooks for everybody in the kitchen.")
B.CN=w([B.f2d,B.f2b,B.f2f,B.f2c,B.f2h,B.f2e,B.f2g],C.at("O<Fq>"))
B.cF4=w([50,130],x.n)
B.cF5=w([50,140],x.n)
B.cFS=w([51,52,53],x.t)
B.eEq=new C.z(-9.5,4.6)
B.eGU=new C.z(-5.9,2.3)
B.eN2=new C.z(8.8,4.4)
B.cH8=w([B.eEq,B.eGU,B.eN2],x.f)
B.cHv=w([5,35],x.n)
B.cI5=w([61,63],x.t)
B.cIi=w([62,64],x.t)
B.cJi=w([68,172],x.n)
B.bhy=new C.u(1,0.6039215686274509,0.30980392156862746,0.30980392156862746,D.q)
B.bsP=new C.u(1,0.30980392156862746,0.47843137254901963,0.3686274509803922,D.q)
B.zm=w([B.nU,B.Yo,B.bhy,B.bsP,B.ah2,D.jf],x.O)
B.bpj=new C.u(1,0.23137254901960785,0.07058823529411765,0.07058823529411765,D.q)
B.biM=new C.u(1,0.23137254901960785,0.1843137254901961,0.0392156862745098,D.q)
B.bfP=new C.u(1,0.043137254901960784,0.1803921568627451,0.09019607843137255,D.q)
B.cK9=w([B.bpj,B.biM,B.bfP],x.O)
B.qZ=new A.iP("ground","Bare copper \xb7 ground",B.tU,D.c,"ground")
B.rl=new C.u(1,0.14901960784313725,0.14901960784313725,0.16470588235294117,D.q)
B.hij=new A.iP("feed","Black \xb7 hot feed from the panel",B.rl,D.c,"hot")
B.Mk=new C.u(1,0.22745098039215686,0.1803921568627451,0.1803921568627451,D.q)
B.hie=new A.iP("loadA","Black \xb7 to light 1",B.Mk,D.c,"hot")
B.bf3=new C.u(1,0.16862745098039217,0.16862745098039217,0.2,D.q)
B.hig=new A.iP("loadB","Black \xb7 to light 2",B.bf3,D.c,"hot")
B.cKH=w([B.qZ,B.hij,B.hie,B.hig],x.d)
B.axG=w([72,73,74,75],x.t)
B.eOz=new C.z(-25,-15)
B.ewg=new C.z(25,-15)
B.eOy=new C.z(-25,15)
B.ewf=new C.z(25,15)
B.cOD=w([B.eOz,B.ewg,B.eOy,B.ewf],x.f)
B.h5R=new A.q(-125,292,-114.5)
B.h9p=new A.q(125,292,-114.5)
B.hc4=new A.q(125,208,-114.5)
B.h94=new A.q(-125,208,-114.5)
B.cOU=w([B.h5R,B.h9p,B.hc4,B.h94],x.o)
B.bJ3=new A.pT("wall","Whole-wall TV","\ud83c\udfac",0,!0)
B.bJb=new A.pT("tv200",'Cinema 200"',"\ud83c\udfac",175,!1)
B.bJ6=new A.pT("tv150",'Cinema 150"',"\ud83c\udfac",130,!1)
B.bJ7=new A.pT("bangtv",'Beovision TV 77"',"\ud83d\udcfa",66,!1)
B.bJ2=new A.pT("sonytv",'Sony Bravia 75"',"\ud83d\udcfa",64,!1)
B.bJc=new A.pT("lgtv",'LG OLED 65"',"\ud83d\udcfa",56,!1)
B.bJ5=new A.pT("tv",'Samsung Neo QLED 55"',"\ud83d\udcfa",48,!1)
B.bJa=new A.pT("appletv",'Apple TV 4K 50"',"\ud83d\udcfa",44,!1)
B.bJ9=new A.pT("lamp","Table lamp","\ud83d\udca1",0,!1)
B.bJ8=new A.pT("toaster","Toaster","\ud83c\udf5e",0,!1)
B.bJ4=new A.pT("hairdryer","Hair dryer","\ud83d\udc87",0,!1)
B.a3Q=w([B.bJ3,B.bJb,B.bJ6,B.amy,B.bJ7,B.bJ2,B.bJc,B.bJ5,B.bJa,B.bJ9,B.bJ8,B.bJ4],C.at("O<pT>"))
B.cP4=w([y.O,y.x,y.R,y.r,y.E,y.k,y.b,y.n],x.s)
B.cST=w([y.O,"Look at the face: an L-shaped slot (W, neutral) and two slanted slots (X and Y, hot), and no ground hole. That is a NEMA 10-30, the old 3-wire dryer outlet. The neutral also grounds the dryer, which is only allowed in old houses.",y.r,y.E,y.k,y.b,y.n],x.s)
B.bhY=new C.u(1,0.7764705882352941,0.5254901960784314,0.25882352941176473,D.q)
B.biU=new C.u(1,0.43529411764705883,0.2901960784313726,0.1803921568627451,D.q)
B.bqf=new C.u(1,0.6627450980392157,0.44313725490196076,0.29411764705882354,D.q)
B.axZ=w([F.mD,B.bhY,E.afB,B.biU,B.bqf],x.O)
B.cWt=w([y.O,"Two cables come into the box: one from the breaker panel (LINE) and one going to the light (LOAD).","Twist the two white wires together with a wire nut. A switch does not cut the neutral.",y.R,"Fasten the black wire from the panel to one BRASS screw.","Fasten the black wire that goes to the light to the other BRASS screw.","Push the switch into the box, put the plate on and test with the power on."],x.s)
B.euX=new C.z(0,330)
B.eOp=new C.z(-120,1080)
B.evr=new C.z(120,1080)
B.eOA=new C.z(-300,1000)
B.ewF=new C.z(300,1000)
B.eP1=new C.z(-700,800)
B.ezJ=new C.z(700,800)
B.cWR=w([B.euX,B.eOp,B.evr,B.eOA,B.ewF,B.eP1,B.ezJ],x.f)
B.cWX=w(["Walnut","Blue grey","Brick red","Sage green","Sand","Charcoal"],x.s)
B.jE=w(["switch","switch2p","switch3","switch4","switchsmart","switchcombo"],x.s)
B.h7Q=new A.q(-6.5,7.5,-7.85)
B.h7W=new A.q(-6.5,7.8,-3)
B.cXh=w([B.h7Q,B.h7W],x.o)
B.hiK=new A.FX("NGMY JOBS","Find work. Get hired. Get paid.",D.aB,D.im,D.tJ)
B.hiS=new A.FX("NGMY LOANS","Help when you need it most.",D.cT,D.dY,D.vS)
B.hiN=new A.FX("KISWAHILI SCHOOL","Learn Swahili and English, step by step.",D.bP,D.tG,D.vV)
B.hiP=new A.FX("CIVIC REGISTRY","Your family, your community, registered.",D.d3,D.d7,D.nW)
B.hiJ=new A.FX("CORE PROTOCOL","Studios for curious minds.",D.b6,D.js,D.pX)
B.hiO=new A.FX("BUILD AND FIX","The Construction Lab: wire it, plumb it.",D.fr,D.hM,D.tV)
B.hiD=new A.FX("CREATE WITH NGMY","Videos, slides, bios and books.",D.bD,D.kb,D.pU)
B.cXl=w([B.hiK,B.hiS,B.hiN,B.hiP,B.hiJ,B.hiO,B.hiD],C.at("O<FX>"))
B.htU=new A.pE(0,-100,100,24)
B.hu0=new A.pE(1,90,100,24)
B.cXx=w([B.htU,B.hu0],x.X)
B.ePb=new C.z(-95,160)
B.eOI=new C.z(-35,175)
B.eAx=new C.z(95,170)
B.cXC=w([B.ePb,B.eOI,B.eAx],x.f)
B.bis=new C.u(1,0.9176470588235294,0.9490196078431372,0.9686274509803922,D.q)
B.bo_=new C.u(1,0.9647058823529412,0.9098039215686274,0.9098039215686274,D.q)
B.bmW=new C.u(1,0.9529411764705882,0.9215686274509803,0.7843137254901961,D.q)
B.ayl=w([B.Bk,B.bis,B.bo_,B.bmW],x.O)
B.aY8=new A.iP("neutral","White \xb7 neutral (middle)",B.n7,D.av,"neutral")
B.aYb=new A.iP("hot1","Black \xb7 hot (left)",B.rl,D.c,"hot")
B.aY9=new A.iP("hot2","Red \xb7 hot (right)",B.vK,D.c,"hot")
B.cXI=w([B.aY8,B.aYb,B.aY9],x.d)
B.efd={common:0}
B.f5j=new C.dD(B.efd,1,x.M)
B.bJq=new A.fl(23,"COMMON screw (the odd one)",B.f5j,"The COMMON screw is the one with a different colour. The black wire that brings the power in, or goes to the light, belongs here.",!1,"hot")
B.ega={trav1:0,trav2:1}
B.aR5=new C.dD(B.ega,2,x.M)
B.bJx=new A.fl(21,"Traveler screw (top)",B.aR5,y.X,!1,"hot")
B.bJM=new A.fl(22,"Traveler screw (bottom)",B.aR5,y.X,!1,"hot")
B.cXP=w([B.uj,B.bJq,B.bJx,B.bJM],x.r)
B.dBg=new A.ia(-60,60,28,50)
B.dBc=new A.ia(-150,-100,70,170)
B.dAQ=new A.ia(100,150,70,170)
B.dBh=new A.ia(-60,-20,156,186)
B.dAV=new A.ia(20,60,156,186)
B.cY3=w([B.dBg,B.dBc,B.dAQ,B.dBh,B.dAV],x.T)
B.cY5=w([y.O,"The cable comes in through the top of the box. Strip about 3/4 inch of insulation from each wire.","Fasten the bare copper ground wire to the GREEN screw.","Fasten the white (neutral) wire to a SILVER screw.","Fasten the black (hot) wire to a BRASS screw. Wrap each wire clockwise under its screw.","Fold the wires back and push the outlet into the box.","Put the cover plate on, then turn the power on and test."],x.s)
B.hfj=new A.q(-3.6,7.5,-7.85)
B.h7e=new A.q(-3.6,4.2,-7.85)
B.cYd=w([B.hfj,B.h7e],x.o)
B.cYf=w([-0.5,-0.25,0,0.25,0.5],x.n)
B.eV3=new C.b7(600,400,!0)
B.eUy=new C.b7(1030,400,!0)
B.eUz=new C.b7(1210,400,!0)
B.cYJ=w([B.eV3,B.eUy,B.eUz],C.at("O<+(J,J,R)>"))
B.cYZ=w([0,2,1,3,4,6,7,8],x.t)
B.eVM=new C.b7(-0.1,0,0.5)
B.eXU=new C.b7(0.35,-0.4,0.3)
B.eWK=new C.b7(-0.4,0.55,0.35)
B.cZ4=w([B.eVM,B.eXU,B.eWK],C.at("O<+(J,J,J)>"))
B.eOj=new C.z(-1050,"store")
B.aPJ=new C.z(-840,"tower")
B.eOU=new C.z(-630,"tower")
B.eOK=new C.z(-420,"gasstation")
B.aPI=new C.z(-210,"tower")
B.ev1=new C.z(0,"hq")
B.aPw=new C.z(210,"tower")
B.exd=new C.z(420,"store")
B.ezm=new C.z(630,"tower")
B.aPy=new C.z(840,"tower")
B.evh=new C.z(1050,"gasstation")
B.cZE=w([B.eOj,B.aPJ,B.eOU,B.eOK,B.aPI,B.ev1,B.aPw,B.exd,B.ezm,B.aPy,B.evh],x.d6)
B.a4e=w(["Always switch the breaker OFF and test the wires with a tester before you touch them.","Never use water on an electrical fire: switch the power off at the breaker first.","Reversed hot and neutral can look fine and still be a shock hazard.","A GFCI outlet protects you near water: press TEST every month.","A ceiling fan needs a fan-rated box, because it is heavy and it shakes."],x.s)
B.hca=new A.q(9.8,6,-7.85)
B.h6k=new A.q(9.8,7.5,-7.85)
B.hfH=new A.q(-8,7.5,-7.85)
B.h96=new A.q(-8,1.5,-7.85)
B.cZR=w([B.hca,B.h6k,B.hfH,B.h96],x.o)
B.aXn=new A.q(5,1.8,-7.85)
B.ha5=new A.q(5,-0.1,-7.85)
B.hbb=new A.q(12.5,-0.1,-7.85)
B.d_Y=w([B.aXn,B.ha5,B.hbb],x.o)
B.fZ1=new A.q(3,3.1,-7.1)
B.aXe=new A.q(3,1.7,-7.1)
B.hb6=new A.q(3,1,-7.1)
B.h2s=new A.q(3.65,0.5,-7.1)
B.h4i=new A.q(4.3,1,-7.1)
B.ha2=new A.q(4.3,1.8,-7.1)
B.hfK=new A.q(5,1.8,-7.1)
B.d0r=w([B.fZ1,B.aXe,B.hb6,B.h2s,B.h4i,B.ha2,B.hfK,B.aXn],x.o)
B.O7=new A.fl(23,"Silver screw W: NEUTRAL",B.E3,y.I,!1,"neutral")
B.efs={hot1:0,hot2:1}
B.E1=new C.dD(B.efs,2,x.M)
B.amz=new A.fl(21,"Brass screw X: HOT",B.E1,y.l,!1,"hot")
B.amI=new A.fl(22,"Brass screw Y: HOT",B.E1,y.l,!1,"hot")
B.d0C=w([B.uj,B.O7,B.amz,B.amI],x.r)
B.amH=new A.fl(23,"Silver screw: NEUTRAL",B.E3,y._,!1,"neutral")
B.efu={hot:0}
B.a8Q=new C.dD(B.efu,1,x.M)
B.amD=new A.fl(21,"Brass screw: HOT",B.a8Q,y.u,!1,"hot")
B.d0E=w([B.uj,B.amH,B.amD],x.r)
B.d0Z=w(["My outlet is dead and it is dark in here. Please come and wire it.","The light in my room does not work, and my phone will not charge. Can you fix the wiring?","I have no power in my room at all. Can an electrician come?"],x.s)
B.eZH=new C.cy([-0.35,-0.2,0.42,0.3])
B.eZU=new C.cy([0.3,0.25,0.32,0.38])
B.eYK=new C.cy([0.05,-0.55,0.22,0.14])
B.eZc=new C.cy([-0.5,0.45,0.2,0.16])
B.d1a=w([B.eZH,B.eZU,B.eYK,B.eZc],x.eV)
B.d1b=w([D.ax,D.be,D.aB,D.d3,D.bO,D.f6],x.O)
B.heZ=new A.q(0.6,11,-3.4)
B.h5c=new A.q(0.6,3.2,-3.2)
B.her=new A.q(0.6,2.2,-1.9)
B.h4O=new A.q(0.6,0.7,-1.5)
B.d1A=w([B.heZ,B.h5c,B.her,B.h4O],x.o)
B.d1M=w([0,24,-24,48,-48],x.n)
B.Es=new A.iP("neutral","White \xb7 neutral",B.n7,D.av,"neutral")
B.hi3=new A.iP("line","Black \xb7 hot from the panel (LINE)",B.rl,D.c,"hot")
B.hil=new A.iP("load","Black \xb7 hot to the light (LOAD)",B.Mk,D.c,"hot")
B.d1Z=w([B.qZ,B.Es,B.hi3,B.hil],x.d)
B.eBq=new C.z("outlet","\ud83d\udd0c Outlet")
B.ePR=new C.z("gfci","\ud83d\udee1\ufe0f GFCI outlet")
B.eLm=new C.z("switch","\ud83d\udca1 Light switch")
B.eGV=new C.z("dryer4","\ud83d\udc55 Dryer outlet 4-wire")
B.eQc=new C.z("dryer3","\ud83e\udde6 Dryer outlet 3-wire")
B.eNk=new C.z("range4","\ud83c\udf73 Range outlet 4-wire")
B.eGk=new C.z("range3","\ud83e\udd58 Range outlet 3-wire")
B.ewc=new C.z("washer","\ud83e\uddfa Washer outlet")
B.eNX=new C.z("cord4","\u26a1 Dryer cord 4-wire")
B.eTK=new C.z("cord3","\ud83d\udd0c Dryer cord 3-wire")
B.d22=w([B.eBq,B.ePR,B.eLm,B.eGV,B.eQc,B.eNk,B.eGk,B.ewc,B.eNX,B.eTK],x.L)
B.ayS=w([3,3.6,3.3,2.6],x.n)
B.d2g=w([y.O,y.x,y.R,"Fasten the white NEUTRAL wire to the NEUTRAL (silver) screw. A regular switch never touches the neutral, this one does.","Fasten the black wire from the panel to the LINE screw.","Fasten the black wire that goes to the light to the LOAD screw.",y.b,y.n],x.s)
B.eP0=new C.z(-700,330)
B.ezI=new C.z(700,380)
B.eOl=new C.z(-1100,-420)
B.evn=new C.z(1100,-480)
B.eOr=new C.z(-1300,100)
B.evu=new C.z(1350,30)
B.ev2=new C.z(0,-900)
B.eOs=new C.z(-1500,-300)
B.evv=new C.z(1550,-200)
B.d2j=w([B.eP0,B.ezI,B.eOl,B.evn,B.eOr,B.evu,B.ev2,B.eOs,B.evv],x.f)
B.d2p=w([Y.qM,A7.TM,S.lo],x.f)
B.bJD=new A.fl(25,"FRAME screw: GROUND (green)",B.Ab,"The green ground wire goes on the screw on the frame, where the strap was.",!1,"ground")
B.amC=new A.fl(21,"MIDDLE terminal: NEUTRAL (white)",B.E3,"The white neutral wire goes on the middle terminal.",!1,"neutral")
B.efr={hot1:0}
B.f56=new C.dD(B.efr,1,x.M)
B.amG=new A.fl(23,"LEFT terminal: black",B.f56,"The black wire goes on the left terminal.",!1,"hot")
B.eft={hot2:0}
B.f5d=new C.dD(B.eft,1,x.M)
B.amF=new A.fl(22,"RIGHT terminal: red",B.f5d,"The red wire goes on the right terminal.",!1,"hot")
B.d2s=w([B.bJD,B.amC,B.amG,B.amF],x.r)
B.abt=new A.i8("look","Look",D.f9)
B.hlo=new A.i8("wall","Wall box",Q.ao_)
B.hlm=new A.i8("ceiling","Ceiling box",D.qo)
B.hlD=new A.i8("fanbox","Fan box",P.GU)
B.hlO=new A.i8("drill","Drill",D.yR)
B.hlE=new A.i8("cable","Cable roll",E.anS)
B.diD=w([B.abt,B.hlo,B.hlm,B.hlD,B.hlO,B.hlE],x.b)
B.hlM=new A.i8("sheet","Drywall sheet",D.CA)
B.hlu=new A.i8("knife","Drywall saw",D.H2)
B.hlr=new A.i8("screw","Screw gun",A4.Hc)
B.hlQ=new A.i8("tape","Tape",D.uu)
B.hlJ=new A.i8("mud","Mud",Ah.a1K)
B.hlV=new A.i8("sand","Sander",D.H0)
B.bP0=new C.a0(985109,"MaterialIcons",!1)
B.hly=new A.i8("paint","Roller",B.bP0)
B.deU=w([B.abt,B.hlM,B.hlu,B.hlr,B.hlQ,B.hlJ,B.hlV,B.hly],x.b)
B.OV=new C.a0(983223,"MaterialIcons",!1)
B.hlR=new A.i8("outlet","Outlet",B.OV)
B.hlw=new A.i8("gfci","GFCI",D.uC)
B.hlP=new A.i8("switch","Switch",E.uE)
B.hlq=new A.i8("split","Split outlet",B.OV)
B.hlT=new A.i8("v240four","240 V 4-wire",X.Cg)
B.hln=new A.i8("v240three","240 V 3-wire",X.Cg)
B.hlB=new A.i8("v240only","240 V only",X.Cg)
B.hlt=new A.i8("isolated","Isolated ground",B.OV)
B.ao4=new C.a0(63208,"MaterialIcons",!1)
B.hlK=new A.i8("dryer4","Dryer 4-wire (14-30)",B.ao4)
B.hls=new A.i8("dryer3","Dryer 3-wire (10-30)",B.ao4)
B.aoD=new C.a0(63678,"MaterialIcons",!1)
B.hlp=new A.i8("range4","Range 4-wire (14-50)",B.aoD)
B.hlH=new A.i8("range3","Range 3-wire (10-50)",B.aoD)
B.bNi=new C.a0(63601,"MaterialIcons",!1)
B.hlk=new A.i8("washer","Washer (5-20)",B.bNi)
B.hlL=new A.i8("switch2p","Double-pole",E.uE)
B.hlN=new A.i8("switch3","3-way switch",E.uE)
B.hlC=new A.i8("switch4","4-way switch",E.uE)
B.hlA=new A.i8("switchsmart","Smart switch",E.uE)
B.hll=new A.i8("switchcombo","Double switch",E.uE)
B.hlI=new A.i8("light","Light",D.rD)
B.bOZ=new C.a0(985094,"MaterialIcons",!1)
B.hlz=new A.i8("fan","Fan",B.bOZ)
B.hlG=new A.i8("tv","TV",A_.a2f)
B.bNd=new C.a0(63571,"MaterialIcons",!1)
B.hlx=new A.i8("lamp","Lamp",B.bNd)
B.bM1=new C.a0(62944,"MaterialIcons",!1)
B.hlv=new A.i8("toaster","Toaster",B.bM1)
B.bMB=new C.a0(63209,"MaterialIcons",!1)
B.hlU=new A.i8("hairdryer","Hair dryer",B.bMB)
B.hlS=new A.i8("flip","Flip switch",E.uE)
B.hlF=new A.i8("tester","Voltage tester",D.ur)
B.azA=w([B.abt,B.hlR,B.hlw,B.hlP,B.hlq,B.hlT,B.hln,B.hlB,B.hlt,B.hlK,B.hls,B.hlp,B.hlH,B.hlk,B.hlL,B.hlN,B.hlC,B.hlA,B.hll,B.hlI,B.hlz,B.hlG,B.hlx,B.hlv,B.hlU,B.hlS,B.hlF],x.b)
B.d2H=w([B.diD,B.deU,B.azA],C.at("O<ai<i8>>"))
B.htW=new A.pE(0,-64,120,26)
B.htZ=new A.pE(1,64,120,26)
B.hu3=new A.pE(2,0,84,24)
B.d3_=w([B.htW,B.htZ,B.hu3],x.X)
B.h3m=new A.q(0,8.3,0)
B.aWP=new A.q(0,3.9,0)
B.a4o=w([B.h3m,B.aWP],x.o)
B.d3g=w([y.O,"Make sure the box is rated for a fan. A plain light box cannot carry the weight and the shaking.","Join the house ground wire to the fan ground.","Join the house white wire to the fan white wire with a wire nut.","Join the house black wire to the fan black wire with a wire nut.","Push the wires up into the box and fasten the canopy to the ceiling.",y.f],x.s)
B.eNl=new C.z(-3.5,11)
B.eCL=new C.z(3.5,11)
B.eB_=new C.z(-3.5,-11)
B.eyz=new C.z(3.5,-11)
B.d3z=w([B.eNl,B.eCL,B.eB_,B.eyz],x.f)
B.hcD=new A.q(-0.6,11,-3.4)
B.h6r=new A.q(-0.6,3.2,-3.2)
B.hbz=new A.q(-0.6,2.2,-1.9)
B.hg5=new A.q(-0.6,0.7,-1.5)
B.d3A=w([B.hcD,B.h6r,B.hbz,B.hg5],x.o)
B.I4=w(["dog","cat","cow","sheep","chicken","horse"],x.s)
B.eKj=new C.z(-1.2,0)
B.eTk=new C.z(1.2,0)
B.d4f=w([B.eKj,B.eTk],x.f)
B.d4s=w([-0.58,0.58],x.n)
B.d4J=w([40,70,100,130,160],x.n)
B.bJs=new A.fl(23,"NEUTRAL screw (silver)",B.E3,"The electronics inside need the neutral wire to run. White goes on the silver screw.",!1,"neutral")
B.efJ={line:0}
B.f5r=new C.dD(B.efJ,1,x.M)
B.bJG=new A.fl(21,"LINE screw (brass, hot in)",B.f5r,"The black wire from the breaker panel goes on the LINE screw.",!1,"hot")
B.efN={load:0}
B.f4y=new C.dD(B.efN,1,x.M)
B.bJI=new A.fl(22,"LOAD screw (brass, hot out)",B.f4y,"The black wire that goes to the light goes on the LOAD screw.",!1,"hot")
B.d4T=w([B.uj,B.bJs,B.bJG,B.bJI],x.r)
B.elT=new A.nw("flange","flange","Toilet flange",D.Y,"The flange is fixed to the floor over the drain. Everything else sits on it.",!1,0)
B.dig=w(["flange"],x.s)
B.elR=new A.nw("wax","wax","Wax ring",B.dig,"The wax ring goes on the flange before the toilet. It makes the seal against sewer gas and water.",!1,0)
B.dtt=w(["wax"],x.s)
B.elO=new A.nw("toilet","toilet","Toilet",B.dtt,"The toilet is lowered straight down onto the wax ring. The ring has to be there first.",!1,0)
B.drI=w(["toilet"],x.s)
B.elS=new A.nw("bolts","bolts","Toilet bolts",B.drI,"The two bolts hold the toilet to the flange. Set the toilet first.",!1,2)
B.elP=new A.nw("tvalve","valve","Toilet shut-off valve",D.Y,"The shut-off valve goes on the pipe that comes out of the wall.",!0,0)
B.drP=w(["tvalve","toilet"],x.s)
B.elQ=new A.nw("those","hosecold","Toilet supply hose",B.drP,"The hose joins the valve to the toilet tank, so both must be there first.",!1,2)
B.aKI=new A.nw("faucet","faucet","Faucet",D.Y,"The faucet goes through the hole in the counter.",!1,0)
B.aKL=new A.nw("vhot","valve","Hot shut-off valve (left)",D.Y,y.W,!0,0)
B.aKJ=new A.nw("vcold","valve","Cold shut-off valve (right)",D.Y,y.W,!0,0)
B.dsQ=w(["vhot","faucet"],x.s)
B.aKM=new A.nw("hhot","hosehot","Hot supply hose",B.dsQ,"The hose joins the hot valve to the faucet, so the valve and the faucet must be there first.",!1,2)
B.dsN=w(["vcold","faucet"],x.s)
B.aKK=new A.nw("hcold","hosecold","Cold supply hose",B.dsN,"The hose joins the cold valve to the faucet, so the valve and the faucet must be there first.",!1,2)
B.aKH=new A.nw("tail","tail","Tailpiece",D.Y,"The tailpiece hangs from the sink drain. It is the first piece of the drain.",!1,0)
B.drB=w(["tail"],x.s)
B.aKN=new A.nw("trap","trap","P-trap",B.drB,"The P-trap joins the tailpiece. Build the drain from the top down.",!1,1)
B.drJ=w(["trap"],x.s)
B.aKO=new A.nw("arm","arm","Trap arm",B.drJ,"The trap arm joins the trap and goes into the wall.",!1,1)
B.d_q=w([B.elT,B.elR,B.elO,B.elS,B.elP,B.elQ,B.aKI,B.aKL,B.aKJ,B.aKM,B.aKK,B.aKH,B.aKN,B.aKO],x.fI)
B.esb=new A.Xg("bathroom","Bathroom",B.d_q,"Fit out a bathroom: a toilet and a sink with its faucet, supply hoses and drain.")
B.dkb=w([B.aKI,B.aKL,B.aKJ,B.aKM,B.aKK,B.aKH,B.aKN,B.aKO],x.fI)
B.esc=new A.Xg("kitchen","Kitchen",B.dkb,"Fit out a kitchen sink: the faucet, the hot and cold supplies and the drain.")
B.azc=w([B.esb,B.esc],C.at("O<Xg>"))
B.ePa=new C.z(-900,400)
B.eAt=new C.z(900,400)
B.eP8=new C.z(-900,1000)
B.eAr=new C.z(900,1000)
B.eOB=new C.z(-300,1260)
B.ewG=new C.z(300,1260)
B.eOh=new C.z(-1000,700)
B.eve=new C.z(1000,700)
B.eOV=new C.z(-640,90)
B.ezn=new C.z(640,90)
B.eP9=new C.z(-900,1400)
B.eAs=new C.z(900,1400)
B.d5o=w([B.ePa,B.eAt,B.eP8,B.eAr,B.eOB,B.ewG,B.eOh,B.eve,B.eOV,B.ezn,B.eP9,B.eAs],x.f)
B.d5T=w([B.amC,B.amG,B.amF],x.r)
B.fYZ=new A.q(8.2,0.9,-6.3)
B.hbM=new A.q(8.2,-0.1,-6.3)
B.h1M=new A.q(8.2,-0.1,-7.85)
B.d62=w([B.fYZ,B.hbM,B.h1M],x.o)
B.ezj=new C.z(-4.5,10)
B.eQ0=new C.z(4.5,10)
B.eTi=new C.z(-4.5,-10)
B.ePX=new C.z(4.5,-10)
B.d6e=w([B.ezj,B.eQ0,B.eTi,B.ePX],x.f)
B.d6f=w([-0.28,0.28],x.n)
B.dBj=new A.ia(-70,70,20,44)
B.dB4=new A.ia(-110,-50,80,100)
B.dB_=new A.ia(50,110,80,100)
B.dB3=new A.ia(-110,-50,130,150)
B.dAZ=new A.ia(50,110,130,150)
B.d6s=w([B.dBj,B.dB4,B.dB_,B.dB3,B.dAZ],x.T)
B.d6J=w([D.ax,D.aB,D.be,D.m0,D.d3,D.cd,D.f6],x.O)
B.eIJ=new C.z("back","Back wall")
B.eT3=new C.z("left","Left wall")
B.eKY=new C.z("right","Right wall")
B.d7a=w([B.eIJ,B.eT3,B.eKY],x.L)
B.ef7={black:0}
B.JJ=new C.dD(B.ef7,1,x.M)
B.bJj=new A.fl(51,"Black wire nut: HOT",B.JJ,"The house black wire joins the fixture black wire.",!1,"hot")
B.egg={white:0}
B.JI=new C.dD(B.egg,1,x.M)
B.bJP=new A.fl(52,"White wire nut: NEUTRAL",B.JI,"The house white wire joins the fixture white wire.",!1,"neutral")
B.bJe=new A.fl(53,"Green ground connection",B.Ab,"The bare copper house ground joins the green fixture ground wire.",!1,"ground")
B.d7l=w([B.bJj,B.bJP,B.bJe],x.r)
B.eOH=new C.z(-34,-6)
B.ewI=new C.z(30,10)
B.eOk=new C.z(-10,24)
B.d7q=w([B.eOH,B.ewI,B.eOk],x.f)
B.d7x=w([y.O,y.x,y.R,"Fasten hot leg 1 from the panel (black) to the top LEFT screw.","Fasten hot leg 2 from the panel (red) to the top RIGHT screw.","Fasten hot leg 1 to the heater (black) to the bottom LEFT screw.","Fasten hot leg 2 to the heater (red) to the bottom RIGHT screw.",y.b,y.n],x.s)
B.bHP=new A.E8("Oak",B.By,"wood")
B.bHR=new A.E8("Dark wood",B.q9,"wood")
B.aiB=new C.u(1,0.5529411764705883,0.5647058823529412,0.5882352941176471,D.q)
B.bHT=new A.E8("Grey carpet",B.aiB,"carpet")
B.bqA=new C.u(1,0.3568627450980392,0.4980392156862745,0.6509803921568628,D.q)
B.bHQ=new A.E8("Blue carpet",B.bqA,"carpet")
B.bnZ=new C.u(1,0.8470588235294118,0.803921568627451,0.7058823529411765,D.q)
B.bHN=new A.E8("Cream carpet",B.bnZ,"carpet")
B.bHS=new A.E8("White tile",B.Y8,"tile")
B.bHO=new A.E8("Slate tile",B.afe,"tile")
B.azz=w([B.bHP,B.bHR,B.bHT,B.bHQ,B.bHN,B.bHS,B.bHO],C.at("O<E8>"))
B.abc=new A.iP("hot1","Black \xb7 hot 1",B.rl,D.c,"hot")
B.abd=new A.iP("hot2","Red \xb7 hot 2",B.vK,D.c,"hot")
B.a4t=w([B.Es,B.abc,B.abd],x.d)
B.eVa=new C.b7(-80,100,D.ax)
B.eXj=new C.b7(80,100,D.be)
B.eWi=new C.b7(-80,150,D.aB)
B.d8i=w([B.eVa,B.eXj,B.eWi],x.dV)
B.htS=new A.pE(0,0,78,26)
B.d8q=w([B.htS],x.X)
B.eg7={store:0,gasstation:1}
B.f5t=new C.dD(B.eg7,2,x.M)
B.bv9=new A.zc("food","\ud83c\udf54","Food",B.f5t)
B.eg4={shop:0,store:1}
B.f50=new C.dD(B.eg4,2,x.M)
B.bv8=new A.zc("groceries","\ud83d\uded2","Groceries",B.f50)
B.efq={hospital:0}
B.f4W=new C.dD(B.efq,1,x.M)
B.bvb=new A.zc("medicine","\ud83d\udc8a","Medicine",B.f4W)
B.efv={hq:0,tower:1}
B.f5p=new C.dD(B.efv,2,x.M)
B.bv7=new A.zc("package","\ud83d\udce6","Package",B.f5p)
B.eeB={school:0,firestation:1,hq:2}
B.f4J=new C.dD(B.eeB,3,x.M)
B.bva=new A.zc("letters","\u2709\ufe0f","Letters",B.f4J)
B.Re=w([B.bv9,B.bv8,B.bvb,B.bv7,B.bva],C.at("O<zc>"))
B.d8F=w([y.O,y.x,y.F,"Fasten the black hot to a BRASS screw.","Fasten the green wire with the yellow stripe (the isolated ground, which runs all the way to the panel) to the GREEN screw with the orange triangle. The box itself is grounded with its own bare copper wire.",y.b,y.n],x.s)
B.d8M=w([-1000,-500,0,500,1000],x.n)
B.d9K=w([y.O,y.x,"Take the metal GROUND STRAP off: tap it. On a 4-wire cord the neutral must NOT touch the frame, because the green wire grounds the frame.","Fasten the green ground wire to the GREEN frame screw where the strap was.","Fasten the white neutral to the MIDDLE terminal.",y.A,y.c,y.b,y.n],x.s)
B.hbA=new A.q(3,3.2,-7.85)
B.hg7=new A.q(3,4,-7.85)
B.hfk=new A.q(3,4.2,-7.4)
B.h08=new A.q(3,3.95,-7)
B.d9N=w([B.hbA,B.hg7,B.hfk,B.h08],x.o)
B.d9P=w(["The sink leaks and there is water on the floor. Please fix the plumbing.","The toilet is not connected and the water is running everywhere. Help!","There is no water at my sink and the pipes are open. Can a plumber come?"],x.s)
B.XA=new C.u(1,0.23137254901960785,0.3568627450980392,0.47843137254901963,D.q)
B.da_=w([D.al,B.XA,D.bM,D.bs],x.O)
B.f5Y=new A.rQ("apple","\ud83c\udf4e","Apple","A little energy",3,0.12,0,0.1,!1)
B.f5Z=new A.rQ("water","\ud83d\udca7","Water","Quenches your thirst",2,0,0,0.8,!1)
B.f6_=new A.rQ("juice","\ud83e\udd64","Juice","Some energy and a drink",4,0.18,0,0.5,!1)
B.f64=new A.rQ("sandwich","\ud83e\udd6a","Sandwich","A good bit of energy",6,0.3,0,0,!1)
B.f5X=new A.rQ("meal","\ud83c\udf54","Burger meal","Lots of energy",10,0.55,0,0,!1)
B.da2=w([B.f5Y,B.f5Z,B.f6_,B.f64,B.f5X],x.y)
B.eOW=new C.z(-660,340)
B.eOE=new C.z(-330,340)
B.ewJ=new C.z(330,340)
B.ezp=new C.z(660,340)
B.eOX=new C.z(-660,500)
B.eOF=new C.z(-330,500)
B.ewK=new C.z(330,500)
B.ezq=new C.z(660,500)
B.eOY=new C.z(-660,780)
B.eOG=new C.z(-330,780)
B.ewM=new C.z(330,780)
B.ezr=new C.z(660,780)
B.eOP=new C.z(-500,940)
B.eyU=new C.z(500,940)
B.daF=w([B.eOW,B.eOE,B.ewJ,B.ezp,B.eOX,B.eOF,B.ewK,B.ezq,B.eOY,B.eOG,B.ewM,B.ezr,B.eOP,B.eyU],x.f)
B.lh=w(["outlet","gfci","split","v240four","v240three","v240only","isolated","dryer4","dryer3","range4","range3","washer"],x.s)
B.hcf=new A.q(6,0.2,0)
B.haw=new A.q(6,2.6,0)
B.aXQ=new A.q(8.6,2.6,0)
B.db9=w([B.hcf,B.haw,B.aXQ],x.o)
B.dbF=w([D.c,D.du,D.es,D.eP,D.bN,D.bL],x.O)
B.eP4=new C.z(-7,-7)
B.ezY=new C.z(7,-7)
B.eP3=new C.z(-7,7)
B.ezX=new C.z(7,7)
B.dbU=w([B.eP4,B.ezY,B.eP3,B.ezX],x.f)
B.dbW=w([-2.4,2.4],x.n)
B.dbX=w([-0.5,0,0.5],x.n)
B.amE=new A.fl(21,"Brass screw X: HOT",B.E1,y.p,!1,"hot")
B.amA=new A.fl(22,"Brass screw Y: HOT",B.E1,y.p,!1,"hot")
B.dc7=w([B.uj,B.amE,B.amA],x.r)
B.hiq=new A.PM("Black","Hot (line or switched)","Brass terminal","120 V branch circuit","Carries the power from the breaker. Treat it as live until it is tested dead.","Can be a traveler in a three-way switch, or a switched hot. Verify with a tester.")
B.hio=new A.PM("Red","Hot (second hot or traveler)","Brass or the marked traveler terminal","Switch legs, travelers, fan and light controls","Often the switched wire to a fan or light, or a traveler.","Check the diagram: red can be a traveler or a second circuit.")
B.hin=new A.PM("White","Neutral","Silver terminal","120 V branch circuit","The return path for the current. It can still be live if something is wrong.","In a switch loop a white wire can be re-marked as a hot. A white wire is not always neutral.")
B.him=new A.PM("Bare copper or green","Equipment ground","Green screw or the ground lead","Every grounded device","Not for current in normal use. It is the safety path if a fault happens.","Never use the neutral as a ground. Older homes may have no ground at all: that needs verification.")
B.hip=new A.PM("Gray / blue / others","Depends on the installation","See the device diagram","Low voltage, control wires, other systems","Do not guess what a wire does from its color.","Colors and their meaning are not the same everywhere. REQUIRES VERIFICATION.")
B.dcb=w([B.hiq,B.hio,B.hin,B.him,B.hip],C.at("O<PM>"))
B.Rm=w([-1.6,1.6],x.n)
B.hi1=new A.iP("blackLine","Black \xb7 from the breaker",B.rl,D.c,"hot")
B.hih=new A.iP("blackLoad","Black \xb7 to the light",B.Mk,D.c,"hot")
B.dck=w([B.hi1,B.hih,B.qZ],x.d)
B.dcC=w([0,10,22,36,52],x.n)
B.htV=new A.pE(0,-60,130,26)
B.hu_=new A.pE(1,80,56,22)
B.dcD=w([B.htV,B.hu_],x.X)
B.dd2=w([D.bo,D.bu,D.ax,D.aJ,D.bs],x.O)
B.efA={isoground:0}
B.f4C=new C.dD(B.efA,1,x.M)
B.bJO=new A.fl(25,"Isolated-ground screw (green, orange triangle)",B.f4C,"The dedicated ground wire goes on the green screw with the orange triangle. It does not touch the box or the strap.",!1,"ground")
B.ddd=w([B.bJO,B.amH,B.amD],x.r)
B.beX=new C.u(1,0.9294117647058824,0.9019607843137255,0.8392156862745098,D.q)
B.bcV=new C.u(1,0.9137254901960784,0.8274509803921568,0.8274509803921568,D.q)
B.bc5=new C.u(1,0.8352941176470589,0.8941176470588236,0.8156862745098039,D.q)
B.agM=new C.u(1,0.9529411764705882,0.8901960784313725,0.6549019607843137,D.q)
B.bhK=new C.u(1,0.7254901960784313,0.7647058823529411,0.8666666666666667,D.q)
B.bqJ=new C.u(1,0.5607843137254902,0.6392156862745098,0.6588235294117647,D.q)
B.azR=w([B.beX,B.XV,B.bcV,B.bc5,B.agM,B.bhK,B.agR,B.bqJ],x.O)
B.ef6={blackLine:0,blackLoad:1}
B.aQP=new C.dD(B.ef6,2,x.M)
B.bJt=new A.fl(21,"Brass screw (top)",B.aQP,y.v,!1,"hot")
B.bJf=new A.fl(22,"Brass screw (bottom)",B.aQP,y.v,!1,"hot")
B.amB=new A.fl(25,"Green screw: GROUND",B.Ab,y.Z,!1,"ground")
B.ddP=w([B.bJt,B.bJf,B.amB],x.r)
B.eP6=new C.z(-80,90)
B.eAb=new C.z(80,90)
B.eP5=new C.z(-80,140)
B.eAa=new C.z(80,140)
B.dex=w([B.eP6,B.eAb,B.eP5,B.eAa],x.f)
B.bJQ=new A.fl(51,"Black wire nut: HOT",B.JJ,"The house black wire joins the fan black wire.",!1,"hot")
B.bJd=new A.fl(52,"White wire nut: NEUTRAL",B.JI,"The house white wire joins the fan white wire.",!1,"neutral")
B.bJB=new A.fl(53,"Green ground connection",B.Ab,"The bare copper house ground joins the green fan ground wire.",!1,"ground")
B.deE=w([B.bJQ,B.bJd,B.bJB],x.r)
B.bbR=new A.Sz("bus",-575,-25,0,1)
B.bbT=new A.Sz("police",-575,-25,854,5)
B.bbS=new A.Sz("bus",25,575,850,3)
B.bbU=new A.Sz("police",25,575,1704,6)
B.kp=w([B.bbR,B.bbT,B.bbS,B.bbU],C.at("O<Sz>"))
B.amk=new A.rm(4,"deadOutlet")
B.deM=w([B.a0x,B.a0y,B.NY,B.NZ,B.amk,B.a0B,B.a0C,B.a0D,B.a0E,B.a0F,B.a0z,B.a0A],C.at("O<rm>"))
B.eYD=new C.cy([0,560,240,7])
B.eYE=new C.cy([0,560,300,9])
B.a4F=w([B.eYD,B.eYE],C.at("O<+(J,J,J,G)>"))
B.hn2=new A.m1("outlet","\ud83d\udd0c","Wall outlet","Black to brass, white to silver",D.aB)
B.hmV=new A.m1("switch","\ud83d\udca1","Light switch","Two blacks and a wire nut",D.aJ)
B.hmW=new A.m1("gfci","\ud83d\udee1\ufe0f","GFCI outlet","LINE and LOAD near water",D.bv)
B.hn3=new A.m1("fan","\ud83c\udf00","Ceiling fan","Black, white, green and a fan box",D.b8)
B.hmO=new A.m1("switch2p","\ud83d\udd25","Double-pole switch","240 V: breaks both hot legs",D.hZ)
B.hmX=new A.m1("switch3","\ud83d\udd00","Three-way switch","Common and two travelers",D.aJ)
B.hn8=new A.m1("switch4","\ud83d\udd01","Four-way switch","Between two three-ways",D.co)
B.hn6=new A.m1("switchsmart","\ud83d\udcf6","Smart, motion or timer switch","Needs the neutral wire",D.br)
B.hmY=new A.m1("switchcombo","\ud83c\udf9a\ufe0f","Combination switch","Two switches, one feed",D.hg)
B.hmR=new A.m1("split","\ud83c\udf17","Split (half-switched) outlet","Break the tab: switched and always-on",D.aT)
B.hn4=new A.m1("v240four","\ud83e\uddfa","4-wire 240 V outlet","Dryer, range and EV: two hots, neutral, ground",D.c6)
B.hn5=new A.m1("v240three","\ud83d\udd70\ufe0f","3-wire 240 V outlet","Old dryer or range: no separate ground",D.cL)
B.hmQ=new A.m1("v240only","\u2744\ufe0f","240 V only outlet","Window AC, welder: two hots and ground",D.b8)
B.hn_=new A.m1("isolated","\ud83c\udfed","Isolated-ground outlet","Its own ground wire to the panel",D.bv)
B.hmS=new A.m1("dryer4","\ud83d\udc55","Dryer outlet, 4-wire (14-30)","New houses: X, Y, W and a ground",D.hZ)
B.hn1=new A.m1("dryer3","\ud83e\udde6","Dryer outlet, 3-wire (10-30)","Old houses: the neutral also grounds",D.cL)
B.hmZ=new A.m1("range4","\ud83c\udf73","Range outlet, 4-wire (14-50)","50 amp stove: X, Y, W and a ground",D.c6)
B.hn9=new A.m1("range3","\ud83e\udd58","Range outlet, 3-wire (10-50)","Old 50 amp stove: no separate ground",D.aT)
B.hmN=new A.m1("washer","\ud83e\uddfa","Washing machine outlet (5-20)","Its own 20 amp circuit, near water",D.aJ)
B.hn7=new A.m1("cord3","\ud83d\udd0c","Dryer cord, 3-wire hookup","The ground strap stays on",D.br)
B.hmU=new A.m1("cord4","\u26a1","Dryer cord, 4-wire hookup","Take the ground strap off",D.bv)
B.hn0=new A.m1("ptrap","\ud83e\udea0","Sink drain (P-trap)","Build a drain with a water seal",D.co)
B.hmT=new A.m1("faucet","\ud83d\udeb0","Faucet supply lines","Hot left, cold right",D.c6)
B.hmP=new A.m1("house","\ud83c\udfd7\ufe0f","Build and fix a house","Stage by stage, then repair",D.br)
B.df7=w([B.hn2,B.hmV,B.hmW,B.hn3,B.hmO,B.hmX,B.hn8,B.hn6,B.hmY,B.hmR,B.hn4,B.hn5,B.hmQ,B.hn_,B.hmS,B.hn1,B.hmZ,B.hn9,B.hmN,B.hn7,B.hmU,B.hn0,B.hmT,B.hmP],C.at("O<m1>"))
B.hif=new A.iP("always","Black \xb7 always hot (from the panel)",B.rl,D.c,"hot")
B.hi9=new A.iP("switched","Red \xb7 switched hot (from the wall switch)",B.vK,D.c,"hot")
B.dfd=w([B.qZ,B.Es,B.hif,B.hi9],x.d)
B.dfh=w([y.O,"Find the LINE and LOAD screws. LOAD is covered with yellow tape. Leave it covered unless you feed another outlet.",y.R,"Fasten the white wire to the silver LINE screw.","Fasten the black wire to the brass LINE screw.","Push the GFCI into the box and put the plate on.","Turn the power on, press RESET, then press TEST. It must click off."],x.s)
B.dfk=w([y.O,y.x,y.R,"Fasten the black wire (power in, or to the light) to the COMMON screw: the odd-coloured one.","Fasten the first traveler (red) to a TRAVELER screw.","Fasten the second traveler (white wire taped black) to the other TRAVELER screw.",y.b,y.n],x.s)
B.htT=new A.pE(0,0,80,26)
B.hu1=new A.pE(1,90,56,22)
B.dfD=w([B.htT,B.hu1],x.X)
B.dfN=w(["car","ambulance","firetruck"],x.s)
B.dfO=w([y.O,y.x,"This outlet has its own 20 amp breaker and 12 gauge wire (a yellow cable): the washer must not share its circuit with anything else. The T-shaped slot tells you it takes both 15 and 20 amp plugs. In a laundry area the new code asks for GFCI protection, from a GFCI breaker or a GFCI outlet before it.",y.R,y.F,"Fasten the black hot to a BRASS screw.",y.b,y.n],x.s)
B.dBi=new A.ia(-62,62,6,46)
B.dB5=new A.ia(-117,-73,149,171)
B.dBf=new A.ia(-57,-13,164,186)
B.dB0=new A.ia(73,117,159,181)
B.dAT=new A.ia(120,144,140,160)
B.dAR=new A.ia(108,142,48,60)
B.dfT=w([B.dBi,B.dB5,B.dBf,B.dB0,B.dAT,B.dAR],x.T)
B.dfX=w([0.1,8.05],x.n)
B.h0c=new A.q(1000,900,1500)
B.fZK=new A.q(0,200,0)
B.aPH=new C.z(B.h0c,B.fZK)
B.h2J=new A.q(300,70,1000)
B.h_4=new A.q(0,250,300)
B.eJ0=new C.z(B.h2J,B.h_4)
B.hdi=new A.q(-200,90,780)
B.h_0=new A.q(0,240,300)
B.eEZ=new C.z(B.hdi,B.h_0)
B.hdG=new A.q(-420,520,1000)
B.fZZ=new A.q(0,230,300)
B.eAA=new C.z(B.hdG,B.fZZ)
B.h4U=new A.q(700,330,900)
B.h2H=new A.q(300,230,200)
B.eNP=new C.z(B.h4U,B.h2H)
B.h0v=new A.q(1100,80,300)
B.h41=new A.q(560,250,0)
B.eMN=new C.z(B.h0v,B.h41)
B.h0l=new A.q(1080,100,-250)
B.h40=new A.q(560,240,-100)
B.eQN=new C.z(B.h0l,B.h40)
B.h0b=new A.q(1000,700,-700)
B.h1R=new A.q(200,230,-300)
B.eT_=new C.z(B.h0b,B.h1R)
B.h1S=new A.q(200,90,-860)
B.h_6=new A.q(0,250,-300)
B.ePl=new C.z(B.h1S,B.h_6)
B.hdq=new A.q(-300,110,-820)
B.h_1=new A.q(0,240,-300)
B.eFA=new C.z(B.hdq,B.h_1)
B.hea=new A.q(-900,600,-600)
B.hdr=new A.q(-300,230,-100)
B.eEa=new C.z(B.hea,B.hdr)
B.hd1=new A.q(-1100,90,-200)
B.hdM=new A.q(-560,250,0)
B.eSY=new C.z(B.hd1,B.hdM)
B.hd0=new A.q(-1100,120,250)
B.hdL=new A.q(-560,240,0)
B.eIr=new C.z(B.hd0,B.hdL)
B.hdV=new A.q(-700,520,1000)
B.hcY=new A.q(-100,230,100)
B.eC9=new C.z(B.hdV,B.hcY)
B.h1Q=new A.q(200,170,1300)
B.fZY=new A.q(0,230,150)
B.eSK=new C.z(B.h1Q,B.fZY)
B.dgc=w([B.aPH,B.eJ0,B.eEZ,B.eAA,B.eNP,B.eMN,B.eQN,B.eT_,B.ePl,B.eFA,B.eEa,B.eSY,B.eIr,B.eC9,B.eSK,B.aPH],x.dt)
B.h8o=new A.q(-0.35,11,-3.4)
B.h6B=new A.q(-0.35,3.2,-3.2)
B.haG=new A.q(-0.35,2.2,-1.9)
B.h4H=new A.q(-0.35,0.7,-1.5)
B.dgd=w([B.h8o,B.h6B,B.haG,B.h4H],x.o)
B.hfa=new A.q(5.2,7.5,-7.85)
B.har=new A.q(5.2,4,-7.85)
B.dgj=w([B.hfa,B.har],x.o)
B.bJn=new A.fl(21,"LOAD hot (brass, taped)",D.vg,y.P,!0,"load")
B.bJp=new A.fl(22,"LINE hot (brass)",B.JJ,"The black (hot) wire from the breaker goes on the brass LINE screw.",!1,"hot")
B.bJm=new A.fl(23,"LOAD neutral (silver, taped)",D.vg,y.P,!0,"load")
B.bJy=new A.fl(24,"LINE neutral (silver)",B.JI,"The white (neutral) wire from the breaker goes on the silver LINE screw.",!1,"neutral")
B.dgM=w([B.bJn,B.bJp,B.bJm,B.bJy,B.amB],x.r)
B.hct=new A.q(0,15.5,-3.6)
B.h8G=new A.q(0,20,-3.6)
B.hfP=new A.q(0,22.5,-2)
B.h69=new A.q(0,22.5,1.1999999999999997)
B.h8R=new A.q(0,21.1,1.6)
B.dgS=w([B.hct,B.h8G,B.hfP,B.h69,B.h8R],x.o)
B.dhv=w([],x.bm)
B.Id=w([],x.D)
B.dhu=w([],x.dI)
B.zu=w([],x.E)
B.dhw=w([],x.T)
B.Ie=w([],x.z)
B.aAj=w([],x.e3)
B.wE=w([],x.a)
B.aAi=w([],x.J)
B.rN=w([],x.o)
B.aAl=w([],x.h)
B.aAk=w([],x.f)
B.eEu=new C.z(-1.6,3.5)
B.eE2=new C.z(1.6,3.5)
B.eG2=new C.z(-1.6,-3.5)
B.eCJ=new C.z(1.6,-3.5)
B.dhK=w([B.eEu,B.eE2,B.eG2,B.eCJ],x.f)
B.dhR=w([y.O,"Look at the face: two slanted slots at the top (X and Y, hot) and one straight slot at the bottom (W, neutral), and no ground hole. That is a NEMA 10-50, the old 3-wire range outlet.",y.r,y.E,y.k,y.b,y.n],x.s)
B.dhT=w([y.O,y.x,"Look at the face: a straight slot at the top (W, neutral), two straight slots at the sides (X and Y, hot) and a round hole at the bottom (G, ground). That is a NEMA 14-50, the 4-wire range outlet. It takes 6 gauge wire and a 50 amp double breaker.",y.R,y.r,y.E,y.k,y.b,y.n],x.s)
B.aAs=w([!1,!1,!1,!1],x.u)
B.efz={in1:0,in2:1}
B.aQO=new C.dD(B.efz,2,x.M)
B.bJh=new A.fl(23,"IN screw (top left)",B.aQO,y.g,!1,"hot")
B.bJJ=new A.fl(21,"IN screw (top right)",B.aQO,y.g,!1,"hot")
B.efY={out1:0,out2:1}
B.aQV=new C.dD(B.efY,2,x.M)
B.bJA=new A.fl(24,"OUT screw (bottom left)",B.aQV,y.d,!1,"hot")
B.bJC=new A.fl(22,"OUT screw (bottom right)",B.aQV,y.d,!1,"hot")
B.die=w([B.uj,B.bJh,B.bJJ,B.bJA,B.bJC],x.r)
B.dio=w(["city","billboards","edges","houses","hospital","traffic"],x.s)
B.diA=w(["Look at the pieces: the tailpiece, the P-trap and the trap arm. Pick the tailpiece first and tap its glowing outline under the sink.","Pick the P-trap (the U-shaped bend) and tap its glowing outline. It joins the tailpiece.","Pick the trap arm and tap its outline. It joins the trap to the wall drain.","Slide each slip nut up to its joint and hand tighten it: tap the nuts.","Run the water and look for leaks. The U-bend keeps a plug of water that blocks sewer gas."],x.s)
B.du0=w(["Switch 1 common","Switch 2 common","Traveler terminal (both switches)","Green ground screw","Neutral splice (not on a switch)"],x.s)
B.eeV={"Line (from the breaker)":0,"Load (to the light)":1,"Traveler A":2,"Traveler B":3,Ground:4,Neutral:5}
B.dy7=new C.bw(B.eeV,["Switch 1 common","Switch 2 common","Traveler terminal (both switches)","Traveler terminal (both switches)","Green ground screw","Neutral splice (not on a switch)"],x.l)
B.dnX=w(["Never assume the dark screw is the same on every brand: read the diagram on the switch.","A switch loop or an old house may not follow the colors: verify the wires."],x.s)
B.bw5=new A.akt("Three-way switch (two switches, one light)","Two three-way switches control one light from two places. Each switch has a COMMON terminal (dark screw) and two TRAVELER terminals. Power (line) goes to the common of the first switch, the light (load) to the common of the second, and two travelers join the switches. The ground goes to the green screw. A standard single-pole switch cannot do this job.",B.du0,B.dy7,B.dnX)
B.cYg=w(["Fan (motor) control wire","Light control wire","Neutral","Ground","Fan-rated support"],x.s)
B.efB={"Motor lead (black)":0,"Light lead (blue)":1,"Neutral (white)":2,"Ground (green)":3,Support:4}
B.dyH=new C.bw(B.efB,["Fan (motor) control wire","Light control wire","Neutral","Ground","Fan-rated support"],x.l)
B.d1N=w(["A blue wire is a light-kit lead on many fans, but not on all: read the diagram.","A fan that spins does not prove the installation is safe."],x.s)
B.bw4=new A.akt("Ceiling fan with a light kit","A fan has a motor and often a light kit, and they are not always switched together. Follow the fan maker's diagram: the motor lead goes to the fan control (or switched hot), the light lead to the light control, the white to neutral and the green to the ground. The box must be fan rated.",B.cYg,B.dyH,B.d1N)
B.zv=w([B.bw5,B.bw4],C.at("O<akt>"))
B.fKx=new C.y("\u2728",null,D.a9G,null,null,null,null,null,null,null,null,null)
B.fV1=new C.y("Nobody needs help right now.",null,D.fx,null,D.K,null,null,null,null,null,null,null)
B.fup=new C.F(!0,D.aR,null,null,null,null,13,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fMU=new C.y("Everybody's wiring and plumbing works. Keep an eye on food and health: things break when you least expect it.",null,B.fup,null,D.K,null,null,null,null,null,null,null)
B.dj_=w([B.fKx,D.P,B.fV1,D.au,B.fMU],x.p)
B.dj6=w(["road","roundabout","roadturn","roadtee","roadcross","house2","bighouse","billboard","tower","hq","store","gasstation","dmv","ubstation","townsign","cornersign","adboard","shop","hospital","firestation","school","car","firetruck","ambulance","dog","cat","cow","sheep","chicken","horse","tree","pine","bush","flowers","fence","lamppost","bench","pond","swing","shed","doghouse"],x.s)
B.eOo=new C.z(-1150,80)
B.evq=new C.z(1150,80)
B.eOn=new C.z(-1150,1990)
B.evp=new C.z(1150,1990)
B.djf=w([B.eOo,B.evq,B.eOn,B.evp],x.f)
B.f62=new A.rQ("pills","\ud83e\ude79","Pain pills","Cures a headache or a cold: you walk normally again",8,0,0,0,!0)
B.f61=new A.rQ("bread","\ud83c\udf5e","Food for the town","5 portions for the people who live here",10,0,0,0,!1)
B.f60=new A.rQ("medicine","\ud83d\udc8a","Medicine","3 doses for the sick",12,0,0,0,!1)
B.djj=w([B.f62,B.f61,B.f60],x.y)
B.djm=w([D.ax,D.bu,D.be],x.O)
B.hcM=new A.q(125,292,-121.5)
B.hfG=new A.q(-125,292,-121.5)
B.h09=new A.q(-125,208,-121.5)
B.hcp=new A.q(125,208,-121.5)
B.djq=w([B.hcM,B.hfG,B.h09,B.hcp],x.o)
B.h1d=new A.q(11.4,4.6,-6)
B.h91=new A.q(11.4,5,-7.85)
B.h4I=new A.q(2.6,5,-7.85)
B.h5l=new A.q(2.6,3.4,-7.85)
B.djs=w([B.h1d,B.h91,B.h4I,B.h5l],x.o)
B.djw=w(["hospital","shop","school"],x.s)
B.djx=w(["hot","cold"],x.s)
B.djA=w([D.ax,D.be,D.aB,D.f6,D.bS],x.O)
B.hid=new A.iP("black","Black \xb7 hot",B.rl,D.c,"hot")
B.hi7=new A.iP("white","White \xb7 neutral",B.n7,D.av,"neutral")
B.RL=w([B.hid,B.hi7,B.qZ],x.d)
B.eAY=new C.z(-3.5,4)
B.eI1=new C.z(3.5,4)
B.eDb=new C.z(-3.5,-4)
B.euP=new C.z(3.5,-4)
B.dk0=w([B.eAY,B.eI1,B.eDb,B.euP],x.f)
B.dk5=w(["Ada","Ben","Chidi","Dina","Efe","Farah","Gus","Halima","Ivo","Jamal","Kemi","Lola"],x.s)
B.eT7=new C.z(-2.4,5)
B.eJt=new C.z(2.4,5)
B.eGE=new C.z(-2.4,-5)
B.eFk=new C.z(2.4,-5)
B.dk6=w([B.eT7,B.eJt,B.eGE,B.eFk],x.f)
B.dkz=w([y.O,"Break off the little brass tab between the two brass screws, so the two halves are separate.",y.R,"Fasten the white neutral to a SILVER screw (the silver tab stays joined).","Fasten the always-hot black wire to the bottom BRASS screw.","Fasten the switched hot (red, from the wall switch) to the top BRASS screw.",y.b,y.n],x.s)
B.dkK=w([y.O,y.x,"Look at the face: an L-shaped slot (W, neutral), two straight slots at the sides (X and Y, hot) and a round hole (G, ground). That is a NEMA 14-30, the 4-wire dryer outlet. It takes 10 gauge wire and a 30 amp double breaker.",y.R,y.r,y.E,y.k,y.b,y.n],x.s)
B.bJw=new A.fl(25,"Green screw G: GROUND",B.Ab,y.H,!1,"ground")
B.aAG=w([B.bJw,B.O7,B.amz,B.amI],x.r)
B.eXp=new C.b7(-6,-4,D.c_)
B.eVQ=new C.b7(5,-5,D.bu)
B.eXn=new C.b7(0,1,D.ax)
B.eXW=new C.b7(-5,5,D.br)
B.eUZ=new C.b7(6,4,D.c)
B.dkU=w([B.eXp,B.eVQ,B.eXn,B.eXW,B.eUZ],x.dV)
B.dln=w([Y.qM,S.lo],x.f)
B.dlr=w(["split","v240four","v240three","v240only","isolated"],x.s)
B.efl={feed:0}
B.f57=new C.dD(B.efl,1,x.M)
B.bJl=new A.fl(21,"FEED screw (joined tab)",B.f57,"The one feed wire goes on the side where the brass screws are joined by a tab: it powers both switches.",!1,"hot")
B.efL={loadA:0,loadB:1}
B.aQU=new C.dD(B.efL,2,x.M)
B.bJN=new A.fl(22,"Switch 1 screw \u2192 light 1",B.aQU,y.q,!1,"hot")
B.bJS=new A.fl(24,"Switch 2 screw \u2192 light 2",B.aQU,y.q,!1,"hot")
B.dlE=w([B.uj,B.bJl,B.bJN,B.bJS],x.r)
B.eNR=new C.z("Slab","First the concrete slab (the foundation) is poured and left to cure. Every wall sits on it.")
B.eQR=new C.z("Framing","The carpenters build the wall frames from 2x4 studs, spaced 16 inches apart, with plates on the top and bottom.")
B.eF3=new C.z("Plumbing rough-in","The plumber runs the hot (red) and cold (blue) water lines and the white drain pipes inside the walls and floor before anything is closed up.")
B.eM_=new C.z("Electrical rough-in","The electrician runs the yellow and white cables from the breaker panel to every box, and fixes the boxes to the studs.")
B.eN5=new C.z("Drywall","Drywall covers the frame. Here it is see-through so you can still look at the pipes and wires behind it.")
B.eFv=new C.z("Fixtures","Last come the outlets, switches, light, sink, toilet and water heater. This is where most repairs happen.")
B.eGP=new C.z("Roof","The roof goes on to keep everything dry. It is see-through here so you can keep looking inside.")
B.dlH=w([B.eNR,B.eQR,B.eF3,B.eM_,B.eN5,B.eFv,B.eGP],x.L)
B.dB2=new A.ia(-100,100,24,90)
B.dB7=new A.ia(-134,-110,100,190)
B.dAS=new A.ia(110,134,100,190)
B.dlL=w([B.dB2,B.dB7,B.dAS],x.T)
B.aYa=new A.iP("hot","Black \xb7 hot",B.rl,D.c,"hot")
B.dlR=w([B.qZ,B.Es,B.aYa],x.d)
B.eOu=new C.z(-17,-9)
B.evz=new C.z(17,-9)
B.eOt=new C.z(-17,9)
B.evy=new C.z(17,9)
B.dmm=w([B.eOu,B.evz,B.eOt,B.evy],x.f)
B.dms=w([-100,0,100],x.n)
B.dmt=w([-110,-80,80,110],x.n)
B.a54=w([-14,14],x.n)
B.dmv=w([-150,150],x.n)
B.dmw=w([-178,178],x.n)
B.dmy=w([-18,18],x.n)
B.aAO=w([-20,0,20],x.n)
B.dmA=w([-21,21],x.n)
B.a56=w([-26,26],x.n)
B.dmB=w([-27,27],x.n)
B.f63=new A.rQ("can","\ud83d\udee2","Gas can","Half a tank of gas",8,0,0.5,0,!1)
B.aR8=new A.rQ("tank","\u26fd","Fill the tank","A full tank",12,0,1,0,!1)
B.dmC=w([B.f63,B.aR8],x.y)
B.dmE=w([-30,-10,10,30],x.n)
B.dmF=w([-32,32],x.n)
B.dmG=w([-32,-8,34],x.n)
B.aAP=w([-34,34],x.n)
B.dmH=w([-3,3],x.n)
B.dmI=w([-47,47],x.n)
B.dmJ=w([-48,48],x.n)
B.dmK=w([-52,52],x.n)
B.aAR=w([-55,55],x.n)
B.dmM=w([-600,0,600],x.n)
B.dmN=w([-600,600],x.n)
B.dmP=w([-70,70],x.n)
B.oy=w([-72,-24,24],x.t)
B.aAS=w([-80,80],x.n)
B.dmS=w([-900,-300,300,900],x.n)
B.dmT=w([-90,0,90],x.n)
B.dmU=w([-90,-52,52,90],x.n)
B.aAV=w([-9,9],x.n)
B.dn5=w(["switch2p","switch3","switch4","switchsmart","switchcombo"],x.s)
B.dnd=w(["medicine","food"],x.s)
B.dnq=w([y.O,y.x,y.R,"The first traveler from the FIRST three-way goes on a top screw (IN).","The second traveler from the FIRST three-way goes on the other top screw (IN).","The first traveler to the SECOND three-way goes on a bottom screw (OUT).","The second traveler to the SECOND three-way goes on the other bottom screw (OUT).",y.b,y.n],x.s)
B.h4R=new A.q(8.2,5,-7.85)
B.hav=new A.q(8.2,1.2,-7.85)
B.hcI=new A.q(8.2,1,-7.4)
B.doA=w([B.h4R,B.hav,B.hcI],x.o)
B.hi0=new A.iP("common","Black \xb7 COMMON (power in or to the light)",B.rl,D.c,"hot")
B.hhZ=new A.iP("trav1","Red \xb7 traveler 1",B.vK,D.c,"hot")
B.hia=new A.iP("trav2","White taped black \xb7 traveler 2",B.n7,D.av,"hot")
B.doB=w([B.qZ,B.hi0,B.hhZ,B.hia],x.d)
B.a5f=w(["rug","road","roundabout","roadturn","roadtee","roadcross","pond","flowers"],x.s)
B.doO=w(["human","soldier","michelle","xbot","human"],x.s)
B.eOi=new C.z(-1050,"hospital")
B.eOT=new C.z(-630,"store")
B.eOL=new C.z(-420,"tower")
B.ev3=new C.z(0,"tower")
B.exe=new C.z(420,"tower")
B.ezl=new C.z(630,"store")
B.evi=new C.z(1050,"hospital")
B.doS=w([B.eOi,B.aPJ,B.eOT,B.eOL,B.aPI,B.ev3,B.aPw,B.exe,B.ezl,B.aPy,B.evi],x.d6)
B.es9=new A.Ff(61,"Hot shut-off valve (left)",B.a8Q,"Hot is always on the LEFT. The red hose goes on the left valve.")
B.efc={cold:0}
B.aR4=new C.dD(B.efc,1,x.M)
B.esa=new A.Ff(62,"Cold shut-off valve (right)",B.aR4,"Cold is always on the RIGHT. The blue hose goes on the right valve.")
B.es7=new A.Ff(63,"Hot faucet inlet (left)",B.a8Q,"The left faucet inlet takes the hot (red) hose.")
B.es8=new A.Ff(64,"Cold faucet inlet (right)",B.aR4,"The right faucet inlet takes the cold (blue) hose.")
B.a5g=w([B.es9,B.esa,B.es7,B.es8],C.at("O<Ff>"))
B.bJR=new A.fl(21,"Brass screw X: HOT",B.E1,y.m,!1,"hot")
B.bJk=new A.fl(22,"Brass screw Y: HOT",B.E1,y.m,!1,"hot")
B.aBa=w([B.O7,B.bJR,B.bJk],x.r)
B.a5i=w([-72,-48,-24,0,24],x.t)
B.aBg=w(["1 Rough-in","2 Drywall","3 Devices"],x.s)
B.dq0=w([y.O,y.x,"Look at the terminal block. There is a metal GROUND STRAP from the middle terminal to the frame of the appliance. On a 3-wire cord it stays on: the neutral also grounds the frame.","Fasten the white neutral to the MIDDLE terminal, under the strap.",y.A,y.c,y.b,y.n],x.s)
B.dBl=new A.ia(-90,10,130,160)
B.dBe=new A.ia(-50,50,70,100)
B.dB8=new A.ia(-134,-110,20,70)
B.dqu=w([B.dBl,B.dBe,B.dB8],x.T)
B.RT=w(["road","roadturn","roadtee","roadcross"],x.s)
B.MA=new C.u(1,0.1843137254901961,0.6352941176470588,0.30980392156862746,D.q)
B.hik=new A.iP("ground","Green \xb7 ground (to the frame)",B.MA,D.c,"ground")
B.dqE=w([B.hik,B.aY8,B.aYb,B.aY9],x.d)
B.bJu=new A.fl(21,"Brass screw (top): HOT side",B.JJ,y.N,!1,"hot")
B.bJF=new A.fl(22,"Brass screw (bottom): HOT side",B.JJ,y.N,!1,"hot")
B.bJz=new A.fl(23,"Silver screw (top): NEUTRAL side",B.JI,y.Q,!1,"neutral")
B.bJo=new A.fl(24,"Silver screw (bottom): NEUTRAL side",B.JI,y.Q,!1,"neutral")
B.bJv=new A.fl(25,"Green screw: GROUND",B.Ab,"The green screw is for the bare copper or green GROUND wire.",!1,"ground")
B.dqG=w([B.bJu,B.bJF,B.bJz,B.bJo,B.bJv],x.r)
B.dqM=w([y.O,y.x,y.R,"Fasten the black hot to one HOT brass screw.","Fasten the red hot to the other HOT brass screw. There is no neutral and no silver screw in use.",y.b,y.n],x.s)
B.eP_=new C.z(-700,225)
B.eOq=new C.z(-120,160)
B.evs=new C.z(120,160)
B.ezL=new C.z(720,225)
B.dr1=w([B.eP_,B.eOq,B.evs,B.ezL],x.f)
B.eVq=new C.b7("hot","Hot hose (red)",B.tO)
B.eW9=new C.b7("cold","Cold hose (blue)",B.o1)
B.dr3=w([B.eVq,B.eW9],C.at("O<+(m,m,u)>"))
B.ewO=new C.z(34,40)
B.hkL=new A.Az(B.ewO,3.141592653589793,2.6,"Washing hands at the sink",!1,!1,!1,"")
B.dr5=w([B.hkL],x.h)
B.dra=w(["dryer","range","washer","","dryer","range"],x.s)
B.b17=new A.Hq("NGMY navy",E.jL,E.LX,D.c,F.fA)
B.b1c=new A.Hq("Purple",D.o6,D.dH,D.c,D.bL)
B.b1a=new A.Hq("Green",D.h3,D.bP,D.c,D.m1)
B.b18=new A.Hq("Sunset",D.el,D.aB,D.c,D.hY)
B.b19=new A.Hq("Night",D.N,D.aK,D.b_,D.c_)
B.b1b=new A.Hq("Light",D.c,D.nW,E.jL,D.dZ)
B.a5l=w([B.b17,B.b1c,B.b1a,B.b18,B.b19,B.b1b],C.at("O<Hq>"))
B.ab5=new A.q(15,2.6,0)
B.a5m=w([B.aXQ,B.ab5],x.o)
B.a5n=w([B.qZ,B.Es,B.abc,B.abd],x.d)
B.b6z=new C.ac(0,D.G,D.aS,D.I,24)
B.dro=w([B.b6z],x.V)
B.drC=w(["tail","trap","arm"],x.s)
B.drK=w([!0,!0,!0,!0],x.u)
B.Ih=w(["tv","lamp","toaster","hairdryer"],x.s)
B.ds2=w([B.qZ,B.abc,B.abd],x.d)
B.bsh=new C.u(1,0.1843137254901961,0.30980392156862746,0.30980392156862746,D.q)
B.bpH=new C.u(1,0.3568627450980392,0.4196078431372549,0.5490196078431373,D.q)
B.ds3=w([B.XA,D.bs,B.bsh,B.bpH,D.bm,D.aK],x.O)
B.ds9=w([D.bD,D.bP,D.cf,D.cd,D.vP,D.cw],x.O)
B.dsb=w([-400,400,-900,900,-1400,1400],x.n)
B.dsc=w([D.ax,D.bu,D.be,D.d3],x.O)
B.dsn=w([y.O,"Hold the fixture up to the ceiling box. It has three short wires: black, white and green.","Join the house ground wire to the fixture ground.","Join the house white wire to the fixture white wire with a wire nut.","Join the house black wire to the fixture black wire with a wire nut.","Push the wires into the box and fasten the fixture to the ceiling.",y.f],x.s)
B.dBk=new A.ia(-70,70,28,52)
B.dBb=new A.ia(-134,-96,100,170)
B.dB1=new A.ia(96,134,100,170)
B.dsv=w([B.dBk,B.dBb,B.dB1],x.T)
B.dsw=w([30,60,120,180,300],x.t)
B.eOx=new C.z(-210,60)
B.ewb=new C.z(210,90)
B.eOD=new C.z(-330,120)
B.ewL=new C.z(330,60)
B.eOm=new C.z(-110,330)
B.evo=new C.z(110,330)
B.eOR=new C.z(-560,640)
B.ez1=new C.z(560,640)
B.eOJ=new C.z(-420,1100)
B.exc=new C.z(420,1100)
B.dsF=w([B.eOx,B.ewb,B.eOD,B.ewL,B.eOm,B.evo,B.eOR,B.ez1,B.eOJ,B.exc],x.f)
B.c1H=new A.jS("Breaker off, then test","Before you touch any wire, switch its breaker OFF, then check with a voltage tester that the wire is dead. A switch on the wall is not enough.")
B.c1u=new A.jS("Lock out, tag out","On a real job you put a lock or a note on the panel so nobody switches the power back on while you work.")
B.c1O=new A.jS("Water and power","Water carries electricity. Near sinks, tubs and outdoors the outlets must be GFCI, and wet hands never touch wires.")
B.c1z=new A.jS("Eyes, ears, lungs","Safety glasses for drilling and cutting, ear protection for loud tools, and a mask when you sand drywall dust or cut tile.")
B.c1N=new A.jS("Shut the water off","Before you cut or loosen a pipe, close the main water valve and open a faucet to drain the line.")
B.dl9=w([B.c1H,B.c1u,B.c1O,B.c1z,B.c1N],x.Z)
B.c2_=new A.N4("Safety first","\ud83e\uddba",D.c6,B.dl9)
B.c1P=new A.jS("Wire colours","Black is hot (it carries the power), white is neutral (the way back), bare copper or green is ground (the safety path). Red is a second hot, often used for a switched line.")
B.c1W=new A.jS("Screw colours","On an outlet the brass screw takes the hot wire, the silver screw takes the neutral and the green screw takes the ground.")
B.c1J=new A.jS("Wire size","14 gauge wire is for 15 amp circuits (lights and outlets). 12 gauge is for 20 amp circuits (kitchens). A thinner wire than the breaker allows can overheat and start a fire.")
B.c1D=new A.jS("Breakers","A breaker is a safety switch. It trips when a circuit carries too much current, so the wires never get hot enough to burn.")
B.c1R=new A.jS("Wire nuts","Strip about 3/4 inch, twist the bare ends together clockwise, and screw on the nut until no bare copper shows. Give each wire a gentle tug.")
B.c1X=new A.jS("Switches","A switch cuts the hot wire only. The neutral goes straight through to the light.")
B.c1Y=new A.jS("GFCI","A GFCI outlet watches the current going out and coming back. If a little leaks (through water or a person) it cuts the power in a fraction of a second.")
B.c1w=new A.jS("Ceiling fans","A fan shakes and is heavy. It needs a box that says fan rated, fixed to the joist, not a plain light box.")
B.c1y=new A.jS("Heights","Outlets sit about 16 inches from the floor. Switches sit about 48 inches up, where your hand falls.")
B.ddg=w([B.c1P,B.c1W,B.c1J,B.c1D,B.c1R,B.c1X,B.c1Y,B.c1w,B.c1y],x.Z)
B.c22=new A.N4("Wiring basics","\u26a1",D.bu,B.ddg)
B.c1v=new A.jS("Hot left, cold right","On a faucet, hot is on the left and cold on the right. Hot lines are marked red and cold lines blue.")
B.c1I=new A.jS("The P-trap","The curved pipe under a sink always holds a little water. That water seal stops sewer gas coming up the drain.")
B.c1T=new A.jS("Shut-off valves","Every sink and toilet has its own small valve, so you can stop the water to one fixture without turning off the whole house.")
B.c1B=new A.jS("Slip nuts","Drain joints are sealed by a washer and a slip nut. Tighten by hand and a quarter turn: too much force cracks plastic.")
B.c1A=new A.jS("Wax ring","A toilet sits on a wax ring that seals it to the floor drain. A toilet is lowered straight down once, and cannot be slid around.")
B.c1Q=new A.jS("Drain slope","Drains fall about 1/4 inch per foot so water and waste keep moving. Too flat and it clogs, too steep and the water leaves the solids behind.")
B.c1V=new A.jS("Order of work","Plumbing goes from the top down on the drain (tailpiece, trap, arm) and from the wall out on the supply (valve, hose, fixture).")
B.cjN=w([B.c1v,B.c1I,B.c1T,B.c1B,B.c1A,B.c1Q,B.c1V],x.Z)
B.c20=new A.N4("Plumbing basics","\ud83d\udeb0",D.co,B.cjN)
B.c1x=new A.jS("Studs","Studs are the vertical 2x4 posts inside a wall, 16 inches apart from centre to centre. Everything is fixed to them.")
B.c1L=new A.jS("Drilling studs","Holes for cable go through the middle of the stud, so a nail or screw cannot reach the wire.")
B.c1C=new A.jS("Drywall","A sheet is 4 feet wide, so its edges land on studs 48 inches apart. Screws go into studs only, just under the paper.")
B.c1F=new A.jS("Taping and mud","Seams get paper tape and three thin coats of joint compound, sanded smooth between coats, then primer and paint.")
B.c1U=new A.jS("Order of a build","Frame, run the pipes and wires (rough-in), inspect, hang drywall, finish it, paint, then fit the fixtures and devices.")
B.cYH=w([B.c1x,B.c1L,B.c1C,B.c1F,B.c1U],x.Z)
B.c1Z=new A.N4("Framing and walls","\ud83c\udfe0",D.dZ,B.cYH)
B.c1G=new A.jS("Voltage tester","A pen that glows or beeps near live wires. Test it on a known live outlet first, so you know it works.")
B.c1M=new A.jS("Wire strippers","Strip the plastic off without nicking the copper. A nick weakens the wire.")
B.c1S=new A.jS("Adjustable wrench","For nuts on valves and hoses. Hold the fitting steady with a second wrench so you do not twist the pipe.")
B.c1K=new A.jS("Drill and screw gun","A drill makes holes through studs. A screw gun sets drywall screws to the right depth.")
B.c1E=new A.jS("Level and tape measure","Measure twice, cut once. A level makes sure outlets, shelves and pipes are straight.")
B.dtO=w([B.c1G,B.c1M,B.c1S,B.c1K,B.c1E],x.Z)
B.c21=new A.N4("Tools","\ud83e\uddf0",D.bv,B.dtO)
B.dto=w([B.c2_,B.c22,B.c20,B.c1Z,B.c21],C.at("O<N4>"))
B.dtr=w([y.O,"There is no separate ground wire here: the neutral also grounds the frame of the old appliance. This is only allowed in old installations.",y.r,y.E,y.k,y.b,y.n],x.s)
B.bg4=new C.u(1,0.48627450980392156,0.22745098039215686,0.22745098039215686,D.q)
B.bnR=new C.u(1,0.24705882352941178,0.4196078431372549,0.30980392156862746,D.q)
B.bm9=new C.u(1,0.4196078431372549,0.30980392156862746,0.48627450980392156,D.q)
B.bj3=new C.u(1,0.47843137254901963,0.41568627450980394,0.23137254901960785,D.q)
B.dtv=w([B.XA,B.bg4,B.bnR,B.bm9,B.bj3],x.O)
B.dtH=w(["Cream","Sky","Blush","Mint","Butter","Periwinkle","White","Slate"],x.s)
B.hi2=new A.iP("in1","Red \xb7 traveler in 1 (from the first 3-way)",B.vK,D.c,"hot")
B.hi8=new A.iP("in2","White taped red \xb7 traveler in 2",B.n7,D.av,"hot")
B.aez=new C.u(1,0.6901960784313725,0.22745098039215686,0.16862745098039217,D.q)
B.hi_=new A.iP("out1","Red \xb7 traveler out 1 (to the second 3-way)",B.aez,D.c,"hot")
B.hic=new A.iP("out2","White taped red \xb7 traveler out 2",D.bO,D.av,"hot")
B.dtK=w([B.qZ,B.hi2,B.hi8,B.hi_,B.hic],x.d)
B.eP2=new C.z(-760,330)
B.ezM=new C.z(760,330)
B.eON=new C.z(-450,1080)
B.eyr=new C.z(450,1080)
B.dtN=w([B.eP2,B.ezM,B.eON,B.eyr],x.f)
B.dtV=w([0.72,-0.72],x.n)
B.hi5=new A.iP("isoground","Green with yellow stripe \xb7 isolated ground",B.MA,D.c,"ground")
B.du3=w([B.Es,B.aYa,B.hi5],x.d)
B.duf=w([B.O7,B.amE,B.amA],x.r)
B.duq=w(["inspect","hand","screwdriver","pliers","wrench","crimper","plunger","flapper","newoutlet","patch"],x.s)
B.htR=new A.pE(0,0,70,26)
B.hu2=new A.pE(1,-100,110,24)
B.hu4=new A.pE(2,105,100,26)
B.duY=w([B.htR,B.hu2,B.hu4],x.X)
B.hi6=new A.iP("lineA","Black \xb7 hot leg 1 (from the panel)",B.rl,D.c,"hot")
B.hib=new A.iP("lineB","Red \xb7 hot leg 2 (from the panel)",B.vK,D.c,"hot")
B.hii=new A.iP("loadA","Black \xb7 hot leg 1 (to the heater)",B.Mk,D.c,"hot")
B.hi4=new A.iP("loadB","Red \xb7 hot leg 2 (to the heater)",B.aez,D.c,"hot")
B.dvj=w([B.qZ,B.hi6,B.hib,B.hii,B.hi4],x.d)
B.dvp=w(["Maya","Kofi","Amara","Tunde","Zawadi"],x.s)
B.dvr=w(["Look under the sink. The wall has two shut-off valves: hot on the LEFT (red handle) and cold on the RIGHT (blue handle).","Pick the red hot hose. Tap the left shut-off valve, then the left faucet inlet.","Pick the blue cold hose. Tap the right shut-off valve, then the right faucet inlet.","Open the valves slowly and turn on the faucet. Check every connection for drips."],x.s)
B.efo={flange:0,wax:1,toilet:2,bolts:3,valve:4,hosehot:5,hosecold:6,faucet:7,tail:8,trap:9,arm:10}
B.aGS=new C.bw(B.efo,["Flange","Wax ring","Toilet","Bolts","Shut-off valve","Hot hose","Cold hose","Faucet","Tailpiece","P-trap","Trap arm"],x.l)
B.dxN=new C.dp([25,"ground",23,"lineA",21,"lineB",24,"loadA",22,"loadB"],x.v)
B.dxO=new C.dp([25,"ground",23,"in1",21,"in2",24,"out1",22,"out2"],x.v)
B.eeT={xbot:0,michelle:1,soldier:2}
B.Sf=new C.bw(B.eeT,["assets/avatars/Xbot.glb","assets/avatars/Michelle.glb","assets/avatars/Soldier.glb"],x.l)
B.ee2={highway:0,tower:1,neon:2,roof:3,screen:4,gate:5}
B.aPu=new C.z(0,!1)
B.evU=new C.z(1,!1)
B.ex0=new C.z(3,!1)
B.ewx=new C.z(2,!0)
B.evW=new C.z(1,!0)
B.ex1=new C.z(3,!0)
B.dxZ=new C.bw(B.ee2,[B.aPu,B.evU,B.ex0,B.ewx,B.evW,B.ex1],C.at("bw<m,+(G,R)>"))
B.a5V=new C.dp([25,"ground",23,"neutral",21,"hot1",22,"hot2"],x.v)
B.dy3=new C.dp([25,"ground",23,"common",21,"trav1",22,"trav2"],x.v)
B.dy4=new C.dp([25,"ground",23,"neutral",21,"line",22,"load"],x.v)
B.dy5=new C.dp([25,"ground",23,"neutral",21,"switched",22,"always"],x.v)
B.dya=new C.dp([25,"ground",21,"neutral",23,"hot1",22,"hot2"],x.v)
B.dyj=new C.dp([25,"ground",21,"hot1",22,"hot2"],x.v)
B.dyA=new C.dp([21,"neutral",23,"hot1",22,"hot2"],x.v)
B.eeP={bed:0,nightstand:1,wardrobe:2,desk:3,rug:4,sofa:5,armchair:6,coffee:7,tvstand:8,dining:9,chair:10,plant:11,lamp:12,console:13,shelf:14,tree:15,pine:16,bush:17,flowers:18,fence:19,lamppost:20,bench:21,car:22,road:23,roundabout:24,roadturn:25,roadtee:26,roadcross:27,house2:28,bighouse:29,pole:30,crate:31,billboard:32,tower:33,hq:34,store:35,gasstation:36,dmv:37,ubstation:38,townsign:39,cornersign:40,adboard:41,shop:42,hospital:43,firestation:44,school:45,firetruck:46,ambulance:47,dog:48,cat:49,cow:50,sheep:51,chicken:52,horse:53,pond:54,swing:55,shed:56,doghouse:57}
B.bIs=new A.fp("Bed","\ud83d\udecf\ufe0f",48,64)
B.bIE=new A.fp("Night table","\ud83e\ude91",13,13)
B.bIb=new A.fp("Wardrobe","\ud83d\udeaa",35,16)
B.bIn=new A.fp("Desk","\ud83d\udda5\ufe0f",38,19)
B.bIc=new A.fp("Rug","\ud83d\udfe5",56,40)
B.bI7=new A.fp("Sofa","\ud83d\udecb\ufe0f",64,26)
B.bIw=new A.fp("Armchair","\ud83d\udcba",24,24)
B.bIL=new A.fp("Coffee table","\u2615",32,19)
B.bI9=new A.fp("Media cabinet","\ud83d\uddc4\ufe0f",45,14)
B.bIJ=new A.fp("Dining table","\ud83c\udf7d\ufe0f",45,29)
B.bID=new A.fp("Chair","\ud83e\ude91",14,14)
B.bIK=new A.fp("Plant","\ud83e\udeb4",14,14)
B.bIF=new A.fp("Floor lamp","\ud83d\udca1",10,10)
B.bIt=new A.fp("Console table","\ud83d\uddc4\ufe0f",35,11)
B.bIC=new A.fp("Bookshelf","\ud83d\udcda",29,10)
B.bIP=new A.fp("Tree","\ud83c\udf33",36,36)
B.bIq=new A.fp("Pine tree","\ud83c\udf32",30,30)
B.bI6=new A.fp("Bush","\ud83c\udf3f",18,18)
B.bIz=new A.fp("Flowers","\ud83c\udf37",22,22)
B.bI_=new A.fp("Fence","\ud83d\udea7",64,6)
B.bId=new A.fp("Street lamp","\ud83c\udfee",8,8)
B.bIv=new A.fp("Bench","\ud83e\ude91",44,16)
B.bI0=new A.fp("Car","\ud83d\ude97",84,40)
B.bIm=new A.fp("Road","\ud83d\udee3\ufe0f",40,40)
B.bIQ=new A.fp("Roundabout","\ud83d\udd04",80,80)
B.bI5=new A.fp("Road corner","\u21aa\ufe0f",40,40)
B.bIS=new A.fp("Road T-junction","\u22a4",40,40)
B.bIo=new A.fp("Crossroads","\u271a",40,40)
B.bI8=new A.fp("House","\ud83c\udfe0",108,90)
B.bIr=new A.fp("Big house","\ud83c\udfe2",158,120)
B.bI1=new A.fp("Electric pole","\ud83d\udd0c",10,10)
B.bIl=new A.fp("Crate","\ud83d\udce6",28,28)
B.bIO=new A.fp("Billboard","\ud83e\udea7",72,10)
B.bI4=new A.fp("Office tower","\ud83c\udfe2",100,70)
B.bIg=new A.fp("NGMY company","\ud83c\udfdb\ufe0f",170,90)
B.bIf=new A.fp("NGMY store","\ud83c\udfec",130,80)
B.bIR=new A.fp("NGMY gas station","\u26fd",150,90)
B.bIB=new A.fp("NGMY licence office","\ud83e\udeaa",130,80)
B.bIi=new A.fp("NGMY Uber","\ud83d\ude96",120,60)
B.bI2=new A.fp("NGMY Town sign","\ud83e\udea7",380,14)
B.bIx=new A.fp("NGMY Town billboard","\ud83e\udea7",150,10)
B.bIk=new A.fp("NGMY ad billboard","\ud83d\udcfa",330,14)
B.bIp=new A.fp("Shop","\ud83c\udfea",126,90)
B.bIh=new A.fp("Hospital","\ud83c\udfe5",165,105)
B.bHZ=new A.fp("Fire station","\ud83d\ude92",135,96)
B.bIA=new A.fp("School","\ud83c\udfeb",186,105)
B.bII=new A.fp("Fire truck","\ud83d\ude92",96,40)
B.bIu=new A.fp("Ambulance","\ud83d\ude91",84,40)
B.bIe=new A.fp("Dog","\ud83d\udc15",22,10)
B.bIj=new A.fp("Cat","\ud83d\udc08",16,8)
B.bIG=new A.fp("Cow","\ud83d\udc04",38,16)
B.bIa=new A.fp("Sheep","\ud83d\udc11",26,14)
B.bIH=new A.fp("Chicken","\ud83d\udc14",12,8)
B.bI3=new A.fp("Horse","\ud83d\udc0e",46,16)
B.bIM=new A.fp("Pond","\ud83d\udca7",80,56)
B.bIy=new A.fp("Swing set","\ud83c\udfa0",56,40)
B.bIN=new A.fp("Shed","\ud83d\uded6",50,42)
B.bIT=new A.fp("Dog house","\ud83d\udc15",24,22)
B.hC=new C.bw(B.eeP,[B.bIs,B.bIE,B.bIb,B.bIn,B.bIc,B.bI7,B.bIw,B.bIL,B.bI9,B.bIJ,B.bID,B.bIK,B.bIF,B.bIt,B.bIC,B.bIP,B.bIq,B.bI6,B.bIz,B.bI_,B.bId,B.bIv,B.bI0,B.bIm,B.bIQ,B.bI5,B.bIS,B.bIo,B.bI8,B.bIr,B.bI1,B.bIl,B.bIO,B.bI4,B.bIg,B.bIf,B.bIR,B.bIB,B.bIi,B.bI2,B.bIx,B.bIk,B.bIp,B.bIh,B.bHZ,B.bIA,B.bII,B.bIu,B.bIe,B.bIj,B.bIG,B.bIa,B.bIH,B.bI3,B.bIM,B.bIy,B.bIN,B.bIT],C.at("bw<m,fp>"))
B.dzb=new C.dp([25,"ground",23,"neutral",21,"hot"],x.v)
B.dzc=new C.dp([25,"isoground",23,"neutral",21,"hot"],x.v)
B.eea={outlet:0,switch:1,light:2,fan:3,gfci:4}
B.d8v=w(["Silver","Brass","Green"],x.s)
B.ffK=new A.vh("On a standard receptacle, which terminal does the hot wire go on?",B.d8v,1,"Brass is the hot side. Silver is neutral and green is the ground.")
B.cJY=w(["Yes, it works","No: reversed polarity leaves live parts that should be dead","Yes if there is a ground"],x.s)
B.ffI=new A.vh("The outlet works with hot and neutral swapped. Is it safe?",B.cJY,1,"Working is not the same as safe. Reversed polarity energizes the wrong parts.")
B.d24=w(["Yes","No, never","Only in old houses"],x.s)
B.ffE=new A.vh("May the neutral be used as the equipment ground?",B.d24,1,"The ground is a separate safety path. The neutral carries current in normal use.")
B.ddR=w([B.ffK,B.ffI,B.ffE],x.J)
B.c6s=w(["The hot to the light","The neutral","The ground"],x.s)
B.ffL=new A.vh("A single-pole switch opens and closes which conductor?",B.c6s,0,"The switch breaks the hot conductor to the load.")
B.d_E=w(["Yes","No, never","If the wire is thick"],x.s)
B.ffM=new A.vh("May the ground wire be used to carry current to the light?",B.d_E,1,"The equipment ground is only for safety.")
B.d7s=w(["Yes","No: never assume it does","Only new houses"],x.s)
B.ffF=new A.vh("Does every switch box have a neutral?",B.d7s,1,"Many switch boxes have no neutral. Smart switches need to be chosen for that.")
B.dts=w([B.ffL,B.ffM,B.ffF],x.J)
B.dkX=w(["Yes","No: the wires, the ground and the support must be right","Only with a switch"],x.s)
B.ffJ=new A.vh("Does a light that turns on prove the fixture is wired safely?",B.dkX,1,"A fixture can light up with an unsafe connection.")
B.djZ=w(["Its wires","A box or mount rated for its weight","Tape"],x.s)
B.ffN=new A.vh("A fixture must hang from:",B.djZ,1,"The box carries the weight. The wires never do.")
B.d7S=w([B.ffJ,B.ffN],x.J)
B.d8V=w(["Any ceiling box","Rated for a fan","Plastic only"],x.s)
B.ffH=new A.vh("A ceiling fan needs a box that is:",B.d8V,1,"A fan shakes and is heavy. A plain light box can let it fall.")
B.do1=w(["Yes","No: support, ground and wiring must all be right","Yes if it is quiet"],x.s)
B.ffG=new A.vh("The fan spins. Is the installation safe?",B.do1,1,"A spinning fan says nothing about the box, the ground or the connections.")
B.d8a=w([B.ffH,B.ffG],x.J)
B.d3N=w(["LINE","LOAD","Either"],x.s)
B.ffD=new A.vh("On a GFCI, power from the breaker goes on:",B.d3N,0,"LINE is the supply. LOAD feeds outlets further down the line.")
B.cOG=w([B.ffD],x.J)
B.aH5=new C.bw(B.eea,[B.ddR,B.dts,B.d7S,B.d8a,B.cOG],C.at("bw<m,ai<vh>>"))
B.eeO={house2:0,bighouse:1,shop:2,billboard:3,crate:4,car:5,tree:6,bench:7,tower:8,hq:9,store:10,gasstation:11,cornersign:12}
B.dzf=new C.bw(B.eeO,[40,80,70,15,4,25,5,4,120,200,90,90,30],C.at("bw<m,G>"))
B.bHc=new A.uE("The living room has no power at all.","The living room breaker is sitting in the middle (orange). It has tripped. Flip it fully OFF and ON again, by hand.","hand","Breaker reset. The living room has power again.",72,0,"")
B.bHm=new A.uE("There is no hot water.","The water heater breaker has tripped (orange). Reset it by hand.","hand","Breaker reset. The water heater is heating again.",75,0,"")
B.bHj=new A.uE("Water is dripping under the kitchen sink.","The slip nut on the P-trap is loose and the joint drips. Tighten it with the wrench.","wrench","Slip nut tightened. The drip stopped.",87,0,"")
B.bHb=new A.uE("There is a wet spot on the wall behind the kitchen.","A crimped joint in the hot water line is leaking. A crimp joint is squeezed with a crimping tool, not tightened with a wrench.","crimper","The joint is crimped again and it does not leak.",96,0,"")
B.bHg=new A.uE("The outlet by the sofa does not work, but the lights do.","The tester finds power at the box but the outlet is dead: a screw on the outlet has come loose. Turn the breaker off first, then tighten the screws with the screwdriver.","screwdriver","You tightened the loose screw. The outlet works again.",81,72,"Turn the living room breaker OFF first.")
B.bHd=new A.uE("The living room light flickers.","A wire nut in the light box has worked loose. Turn the breaker off, then twist the wire nut tight with the pliers.","pliers","You twisted the wire nut tight. The light is steady.",83,72,"Turn the living room breaker OFF first.")
B.bHe=new A.uE("The kitchen outlet sparks and smells burnt.","The outlet has burnt. Turn the breaker off and replace it with a new outlet.","newoutlet","New outlet fitted. No more sparks.",84,73,"Turn the kitchen breaker OFF first.")
B.bHk=new A.uE("The kitchen outlets are dead.","The GFCI outlet has tripped. Press its RESET button by hand.","hand","You pressed RESET. The kitchen outlets work.",84,0,"")
B.bHf=new A.uE("The toilet keeps running.","The rubber flapper in the tank no longer seals, so water leaks into the bowl all the time. Replace the flapper.","flapper","New flapper fitted. The toilet stops running.",88,0,"")
B.bHi=new A.uE("The kitchen faucet drips.","The faucet washer is worn. Tighten the packing nut with the wrench, then check.","wrench","The faucet is sealed. No more drips.",85,0,"")
B.bHh=new A.uE("There is a hole in the wall.","A hole in the drywall. Stick a drywall patch over it, then tape, mud, sand and paint it.","patch","Patch fitted. Now it only needs mud, sanding and paint.",95,0,"")
B.bHl=new A.uE("The kitchen sink drains very slowly.","The drain is clogged. Use the plunger.","plunger","The clog is gone. The sink drains fast.",94,0,"")
B.wI=new C.dp([B.a0x,B.bHc,B.a0y,B.bHm,B.NY,B.bHj,B.NZ,B.bHb,B.amk,B.bHg,B.a0B,B.bHd,B.a0C,B.bHe,B.a0D,B.bHk,B.a0E,B.bHf,B.a0F,B.bHi,B.a0z,B.bHh,B.a0A,B.bHl],C.at("dp<rm,uE>"))
B.egl={duo:0,line3:1,far3:2,skyline:3,lines6:4}
B.eF0=new C.z(D.a34,0)
B.eSB=new C.z(A5.arX,1)
B.cqZ=w([2,0,1],x.t)
B.ezO=new C.z(B.cqZ,2)
B.c6w=w([0,1,2,3],x.t)
B.eRA=new C.z(B.c6w,0)
B.dm3=w([0,1,2,5,4,3],x.t)
B.eI9=new C.z(B.dm3,1)
B.dzv=new C.bw(B.egl,[B.eF0,B.eSB,B.ezO,B.eRA,B.eI9],C.at("bw<m,+(ai<G>,G)>"))
B.efQ={michelle:0}
B.dzw=new C.bw(B.efQ,[0.55],x.gW)
B.Sk=new C.bw(D.hT,[],C.at("bw<G,cV>"))
B.IA=new C.bw(D.hT,[],C.at("bw<G,m>"))
B.a61=new C.dp([23,"neutral",21,"hot1",22,"hot2"],x.v)
B.dzN=new C.dp([25,"ground",21,"feed",22,"loadA",24,"loadB"],x.v)
B.efm={tail:0,trap:1,arm:2}
B.dzP=new C.bw(B.efm,["Tailpiece","P-trap","Trap arm"],x.l)
B.aJM={xbot:0,michelle:1,soldier:2,human:3}
B.aHj=new C.bw(B.aJM,["\ud83e\udd16 X Bot","\ud83d\udc83 Dancer","\ud83e\ude96 Soldier","\ud83d\ude42 Person"],x.l)
B.af6=new C.u(1,0.9137254901960784,0.9215686274509803,0.9372549019607843,D.q)
B.blt=new C.u(1,0.8549019607843137,0.8666666666666667,0.8901960784313725,D.q)
B.Tp=new A.tO(B.af6,E.aeA,B.af6,B.blt,"xbot",!1,0,1)
B.bns=new C.u(1,0.0784313725490196,0.047058823529411764,0.03137254901960784,D.q)
B.bdF=new C.u(1,0.9607843137254902,0.7725490196078432,0.09411764705882353,D.q)
B.eqQ=new A.tO(B.aiA,B.bns,D.dt,B.bdF,"michelle",!0,2,1)
B.bsn=new C.u(1,0.8509803921568627,0.6470588235294118,0.48627450980392156,D.q)
B.brh=new C.u(1,0.3568627450980392,0.4196078431372549,0.22745098039215686,D.q)
B.bg5=new C.u(1,0.5411764705882353,0.4823529411764706,0.3333333333333333,D.q)
B.Jo=new A.tO(B.bsn,D.Mm,B.brh,B.bg5,"soldier",!1,0,1.04)
B.a7P=new A.tO(B.aeE,B.Md,B.aiJ,B.LG,"human",!1,0,1)
B.aHk=new C.bw(B.aJM,[B.Tp,B.eqQ,B.Jo,B.a7P],C.at("bw<m,tO>"))
B.eg6={soldier:0}
B.dA7=new C.bw(B.eg6,[3.141592653589793],x.gW)
B.hc9=new A.q(0,0,-1.2)
B.ed3=new A.cV("Electrical box","The box is ready. Pull a cable to it, then wire a device.",B.hc9,9)
B.dAa=new C.dp([3,B.ed3],C.at("dp<G,cV>"))
B.aJF={inspect:0,hand:1,screwdriver:2,pliers:3,wrench:4,crimper:5,plunger:6,flapper:7,newoutlet:8,patch:9}
B.Sm=new C.bw(B.aJF,["Look and test","Hand","Screwdriver","Pliers","Wrench","Crimp tool","Plunger","New flapper","New outlet","Drywall patch"],x.l)
B.bMk=new C.a0(63072,"MaterialIcons",!1)
B.dAe=new C.bw(B.aJF,[D.f9,B.apg,A4.Hc,D.H2,D.pe,B.bMk,Ad.a2g,D.pm,B.OV,W.uo],C.at("bw<m,a0>"))
B.dAU=new A.ia(18,50,0,20)
B.dB6=new A.ia(-126,126,-66,5)
B.dBd=new A.ia(-4,16,0,24)
B.dDJ=new A.aoL(null)
B.aIk=new A.a7a(null)
B.dKu=new A.aq7(null)
B.dNN=new A.IW(!1,"city","",null)
B.aIu=new A.IW(!1,"","",null)
B.e8v=new A.Ok(!0,!0,null,!0,null)
B.hfq=new A.q(16,2.6,0)
B.ecM=new A.cV("Wall drain","The pipe stub that comes out of the wall. The trap arm slides into it.",B.hfq,8)
B.h_q=new A.q(0,3,-6)
B.ecN=new A.cV("Wall","The copper supply pipes come out of the wall here.",B.h_q,24)
B.hbu=new A.q(8.2,1,-7)
B.ecO=new A.cV("Toilet","The tank fills from the cold supply on the wall. The bowl drains into the white pipe in the floor.",B.hbu,7)
B.fZ4=new A.q(0,0,40)
B.ecP=new A.cV("The room","A room to build from bare studs to finished, working electrics. The walls hold the cable, the boxes and the devices.",B.fZ4,190)
B.h8h=new A.q(-2.4,11.5,-3.6)
B.ecQ=new A.cV("Hot faucet inlet","The threaded tail under the faucet where the hot supply hose screws on.",B.h8h,7)
B.h2A=new A.q(-3.6,4,-7.8)
B.ecR=new A.cV("Light switch","Controls the ceiling light. Tap Open lesson to wire one.",B.h2A,4.5)
B.h57=new A.q(0,-0.7,4.8)
B.ecS=new A.cV("Ground strap","A metal strap from the middle (neutral) terminal to the frame of the appliance. On a 3-wire cord it stays: the neutral also grounds the frame. On a 4-wire cord you take it off, because the green wire grounds the frame.",B.h57,7)
B.ha1=new A.q(0,0.5,2)
B.ecT=new A.cV("Voltage tester","A tester that glows when it touches live power.",B.ha1,6)
B.ecU=new A.cV("Pipe joint","A crimped joint in the hot water line.",B.aXc,4)
B.h8J=new A.q(0,-0.2,0.2)
B.ecV=new A.cV("Cover plate","The plate covers the box and the edges of the drywall so nobody touches the wires.",B.h8J,8)
B.hek=new A.q(-4.6,0.5,-3.4)
B.ecW=new A.cV("Hot shut-off valve","The angle stop valve on the hot pipe. Turn the handle to stop the water to the faucet without shutting off the whole house. Hot is always on the left.",B.hek,8)
B.VC=new A.q(0,-0.3,3.2)
B.ecX=new A.cV("White wire nut: NEUTRAL","Twist the house white wire and the fixture white wire together under this cap.",B.VC,6)
B.h9N=new A.q(4.6,0.5,-3.4)
B.ecY=new A.cV("Cold shut-off valve","The angle stop valve on the cold pipe. Cold is always on the right.",B.h9N,8)
B.h1J=new A.q(2.4,11.5,-3.6)
B.ecZ=new A.cV("Cold faucet inlet","The threaded tail under the faucet where the cold supply hose screws on.",B.h1J,7)
B.hgv=new A.q(0.8,-0.8,1.2)
B.ed_=new A.cV("Black wire to the light","This black wire carries power to the light once the switch is on. It goes on the other brass screw.",B.hgv,7)
B.h8c=new A.q(10.05,5.2,-7.5)
B.ed0=new A.cV("Water heater breaker","A big circuit for the water heater. It is ON.",B.h8c,3.5)
B.aWb=new A.q(0,40,0)
B.ed1=new A.cV("Back wall",y.o,B.aWb,140)
B.hbn=new A.q(3,3.8,-7.4)
B.ed2=new A.cV("Kitchen faucet","Hot on the left, cold on the right. Tap Open lesson to connect the supply hoses.",B.hbn,4.5)
B.Av=new A.q(0,6,0)
B.ed4=new A.cV("Tailpiece","The straight pipe that hangs from the sink drain. Its bottom end is smooth so the slip nut can slide on and grip it.",B.Av,10)
B.hdR=new A.q(-60,40,50)
B.ed5=new A.cV("Left wall",y.o,B.hdR,140)
B.h3f=new A.q(3,1,0)
B.ed6=new A.cV("P-trap","The U-shaped bend. It always keeps a little water inside, and that water plug blocks sewer gas from coming back up into the house.",B.h3f,11)
B.fZO=new A.q(0,20,5)
B.ed7=new A.cV("The room","A bare room with the water supply stubs and the drain stub already in the wall and floor.",B.fZO,120)
B.h07=new A.q(0,-8,0)
B.ed8=new A.cV("Cabinet","The cabinet under the sink where the drain is built.",B.h07,22)
B.fZ2=new A.q(0,0,150)
B.ed9=new A.cV("Lawn","The grass. Walls, floors and the sky stay as they are, but you can add things to the garden with the Furniture button.",B.fZ2,400)
B.h_I=new A.q(0,4,-8)
B.eda=new A.cV("Wall framing","2x4 studs 16 inches apart. Pipes and cables run through holes drilled in the middle of the studs, never along the edge where a nail could hit them.",B.h_I,18)
B.aXs=new A.q(0,-0.2,5.1)
B.edb=new A.cV("TEST and RESET buttons","Press TEST to make the GFCI trip. Press RESET to turn it back on. Test it once a month.",B.aXs,5)
B.aW6=new A.q(0,11,0)
B.edc=new A.cV("Sink","The sink bowl and the counter. The drain flange at the bottom is where the tailpiece starts.",B.aW6,16)
B.dX=new A.q(0,0,0)
B.edd=new A.cV("Drywall","The wall surface. A hole is cut in it for the electrical box.",B.dX,22)
B.h4y=new A.q(60,40,50)
B.ede=new A.cV("Right wall",y.o,B.h4y,140)
B.fZw=new A.q(0,14,-3)
B.edf=new A.cV("Counter and sink","The faucet is mounted through a hole in the counter.",B.fZw,20)
B.h6P=new A.q(0,-1.9,5)
B.edg=new A.cV("GREEN screw: GROUND",y.Z,B.h6P,5)
B.h_F=new A.q(0,47,-2)
B.edh=new A.cV("Top and bottom plate","The horizontal 2x4s at the top and the bottom of the wall. The studs stand between them.",B.h_F,70)
B.fZ8=new A.q(0,0,-8)
B.edi=new A.cV("Wall","Behind the wall the drain pipe goes down to the sewer line.",B.fZ8,22)
B.fZI=new A.q(0,19,-3)
B.edj=new A.cV("Faucet","The faucet with hot on the left (red) and cold on the right (blue).",B.fZI,14)
B.h59=new A.q(3.5,2,-7.2)
B.edk=new A.cV("Kitchen counter and cabinet","The cabinet under the sink is where the drain and the shut-off valves live.",B.h59,9)
B.h7j=new A.q(10.05,5.7,-7.5)
B.edl=new A.cV("Kitchen breaker","Protects the kitchen outlets. It is ON.",B.h7j,3.5)
B.h8r=new A.q(4,6,-2.5)
B.edm=new A.cV("Cold supply hose","A braided steel hose with a rubber liner and a blue band.",B.h8r,9)
B.h9X=new A.q(-1,0.6,4.3)
B.edn=new A.cV("SILVER screw: NEUTRAL side",y.B,B.h9X,5)
B.ab0=new A.q(0,3.7,0)
B.edo=new A.cV("Slip nut","A big plastic nut. Slide it on the pipe first, then the washer, then join the pieces and hand tighten. A rubber washer inside makes the seal.",B.ab0,7)
B.VB=new A.q(0,-1,-0.6)
B.edp=new A.cV("Wire nut","A twist-on cap that joins wires safely. The two white wires are joined here because a switch only cuts the hot wire.",B.VB,5)
B.h8A=new A.q(-1.5,-0.3,3.2)
B.edq=new A.cV("Black wire nut: HOT","Twist the house black wire and the fixture black wire together under this cap.",B.h8A,6)
B.h7i=new A.q(-1.9,0,-2)
B.edr=new A.cV("Wood stud","The 2x4 frame inside the wall. The electrical box is nailed or screwed to a stud so it cannot move.",B.h7i,16)
B.hc7=new A.q(-1,-0.8,4.3)
B.eds=new A.cV("SILVER screw: NEUTRAL side",y.B,B.hc7,5)
B.hfO=new A.q(6,3,-7.8)
B.edt=new A.cV("Water and drain pipes","Red is hot water, blue is cold water (PEX tubing). The white pipes are drains. They slope down so the waste flows away.",B.hfO,14)
B.hcd=new A.q(1,0.6,4.3)
B.edu=new A.cV("BRASS screw: HOT side",y.C,B.hcd,5)
B.hcK=new A.q(0,-0.2,4.9)
B.edv=new A.cV("Mounting strap (yoke)","The metal strap with two screw slots. Long screws through the ears hold the device in the box.",B.hcK,7)
B.hgs=new A.q(9.55,4.7,-7.5)
B.edw=new A.cV("Spare breaker","A spare circuit.",B.hgs,3.5)
B.fZP=new A.q(0,20,8)
B.edx=new A.cV("Vanity and counter","The cabinet that holds the sink. The pipes live inside it.",B.fZP,70)
B.hf2=new A.q(-3.2,1.3,-7.8)
B.edy=new A.cV("Living room outlet","A standard outlet. Tap Open lesson to wire one in 3D.",B.hf2,4.5)
B.hcN=new A.q(1.5,-0.3,3.2)
B.edz=new A.cV("Green ground connection","Join the bare copper house ground wire to the green fixture ground wire.",B.hcN,6)
B.h6Y=new A.q(12,2.6,0)
B.edA=new A.cV("Trap arm","The pipe that carries the waste water from the trap into the wall. It must slope down toward the wall, about 1/4 inch per foot.",B.h6Y,9)
B.h9t=new A.q(0,6.5,-7.8)
B.edB=new A.cV("Electrical cables","Cables run from the breaker panel to every outlet, switch and light. Yellow is 12 gauge for 20 amps. White is 14 gauge for 15 amps.",B.h9t,16)
B.haf=new A.q(11.2,2.3,-6)
B.edC=new A.cV("Water heater","Heats the water. The cold line goes in at the top and the hot line comes out at the top.",B.haf,9)
B.haZ=new A.q(9.55,5.2,-7.5)
B.edD=new A.cV("Bathroom breaker","Protects the bathroom. It is ON.",B.haZ,3.5)
B.h7q=new A.q(5.2,3.9,-7.8)
B.edE=new A.cV("Kitchen GFCI outlet","Outlets near water must be GFCI. Tap Open lesson to wire one.",B.h7q,4.5)
B.h_A=new A.q(0,40,-3)
B.edF=new A.cV("Electrical cable","Yellow 12/2 cable with ground: it carries power from the breaker panel through the holes in the studs to each box.",B.h_A,80)
B.h89=new A.q(-8.4,1.2,-6.4)
B.edG=new A.cV("Sofa","Just furniture, to show the size of the room.",B.h89,10)
B.edH=new A.cV("Outlet face","Two outlets. The short slot is hot, the long slot is neutral, and the round hole is ground.",B.aXs,6)
B.h6w=new A.q(0,4,-7.8)
B.edI=new A.cV("Wall","The drywall of the back wall.",B.h6w,16)
B.hf6=new A.q(0,0,0.6)
B.edJ=new A.cV("Canopy","The round cover that hides the box and the wire connections against the ceiling.",B.hf6,8)
B.edK=new A.cV("Concrete slab","The foundation. It carries the whole weight of the house. Plumbing drains are placed before it is poured.",B.dX,30)
B.h_t=new A.q(0,40,12)
B.edL=new A.cV("Front door","Tap the door to go inside the house.",B.h_t,260)
B.ab2=new A.q(8.9,2.6,0)
B.edM=new A.cV("Slip nut","Hand tighten it, then about a quarter turn with pliers. Over-tightening cracks the plastic.",B.ab2,7)
B.haX=new A.q(1,-0.8,4.3)
B.edN=new A.cV("BRASS screw: HOT side",y.C,B.haX,5)
B.h6e=new A.q(0.6,1.5,-1.8)
B.edO=new A.cV("Cable to the light (LOAD)","This cable carries the switched power on to the light. The black wire here only has power when the switch is on.",B.h6e,8)
B.h6K=new A.q(9.8,5,-7.5)
B.edP=new A.cV("Breaker panel","The main electrical panel. Each breaker protects one circuit. A breaker that is in the middle position has TRIPPED. Flip it fully OFF and then ON to reset.",B.h6K,6)
B.h8w=new A.q(-4,6,-2.5)
B.edQ=new A.cV("Hot supply hose","A braided steel hose with a rubber liner and a red band. Hand tighten the nuts, then a quarter turn with a wrench.",B.h8w,9)
B.eiB=new C.t(66,66)
B.bTh=new C.ae(D.ed,20,F.fA,null,null,null)
B.ema=new C.D(D.w8,B.bTh,null)
B.fwo=new C.F(!0,D.mA,null,null,null,null,12.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fD3=new C.y("A circuit that is not CORRECT and safe can never pass, even if the light or fan would have worked.",null,B.fwo,null,null,null,null,null,null,null,null,null)
B.emm=new C.D(D.i4,B.fD3,null)
B.fN4=new C.y("Sick people can stay in a hospital bed. Treat each patient before their care runs out, and they go home better.",null,D.V4,null,D.K,null,null,null,null,null,null,null)
B.ems=new C.D(D.alE,B.fN4,null)
B.bxS=new C.Q(0,26,0,26)
B.fn3=new C.F(!0,D.aC,null,null,null,null,13.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.hgN=new C.bR("lessons-none",x.W)
B.fyo=new C.y("No lesson found. Try another word.",null,B.fn3,null,null,null,null,null,null,null,null,B.hgN)
B.b9D=new C.ce(D.A,null,null,B.fyo,null)
B.emz=new C.D(B.bxS,B.b9D,null)
B.bSs=new C.ae(D.ed,18,D.bf,null,null,null)
B.emK=new C.D(D.fu,B.bSs,null)
B.emM=new C.D(D.fu,H.aqP,null)
B.eqJ=new A.y5(0,0,18,0,!1,!1,!1,!1,!1,0,!1,!1,"","",-1,0,-1,0)
B.eqK=new A.y5(0,100,120,-2.2,!1,!1,!1,!1,!1,0,!1,!1,"","",-1,0,-1,0)
B.eqL=new A.y5(0,40,150,0.5,!1,!1,!1,!1,!1,0,!1,!1,"","",-1,0,-1,0)
B.eqM=new A.y5(0,0,0,0,!1,!1,!1,!1,!1,0,!1,!1,"","",-1,0,-1,0)
B.eqN=new A.y5(0,-80,50,0,!1,!1,!1,!1,!1,0,!1,!1,"","",-1,0,-1,0)
B.eqO=new A.y5(0,0,56,0,!1,!1,!1,!1,!1,0,!1,!1,"","",-1,0,-1,0)
B.etk=new A.a9H(null,null)
B.bjy=new C.u(1,0.30980392156862746,0.7019607843137254,0.9647058823529412,D.q)
B.brX=new C.u(1,0.11372549019607843,0.37254901960784315,0.7686274509803922,D.q)
B.boF=new C.u(1,0.043137254901960784,0.16470588235294117,0.4196078431372549,D.q)
B.d2_=w([B.bjy,B.brX,B.boF],x.O)
B.eu3=new C.c2(Aa.xr,0.5,D.x,null,0,B.d2_,null,null)
B.bsd=new C.u(1,0.8392156862745098,0.9019607843137255,0.9176470588235294,D.q)
B.euM=new C.z(B.bsd,B.Y8)
B.euV=new C.z(0,120)
B.euW=new C.z(0,300)
B.evb=new C.z(B.n7,B.dX)
B.ewQ=new C.z(64,2.4)
B.eyv=new C.z("LOAD (taped)",D.d2)
B.bg3=new C.u(1,0.9450980392156862,0.8901960784313725,0.7764705882352941,D.q)
B.bje=new C.u(1,0.8470588235294118,0.7686274509803922,0.6274509803921569,D.q)
B.ezS=new C.z(B.bg3,B.bje)
B.dk1=w([D.ax,D.cd,D.ax],x.O)
B.eAg=new C.z(-40,B.dk1)
B.eBI=new C.z(63,-2.4)
B.bic=new C.u(1,0.8901960784313725,0.9254901960784314,0.9607843137254902,D.q)
B.bd1=new C.u(1,0.7372549019607844,0.7843137254901961,0.8392156862745098,D.q)
B.eCf=new C.z(B.bic,B.bd1)
B.eCw=new C.z(51,B.af4)
B.bef=new C.u(1,0.9137254901960784,0.8705882352941177,0.7607843137254902,D.q)
B.eFe=new C.z(B.bef,B.By)
B.beD=new C.u(1,0.9137254901960784,0.9372549019607843,0.9490196078431372,D.q)
B.bfd=new C.u(1,0.8509803921568627,0.8941176470588236,0.9098039215686274,D.q)
B.eG3=new C.z(B.beD,B.bfd)
B.bnT=new C.u(1,0.9058823529411765,0.8235294117647058,0.8156862745098039,D.q)
B.bfe=new C.u(1,0.7058823529411765,0.7176470588235294,0.7411764705882353,D.q)
B.eH4=new C.z(B.bnT,B.bfe)
B.bcp=new C.u(1,0.7647058823529411,0.8117647058823529,0.9019607843137255,D.q)
B.eHV=new C.z(B.bcp,B.aiB)
B.bmn=new C.u(1,0.3568627450980392,0.39215686274509803,0.4392156862745098,D.q)
B.eJI=new C.z("SILVER \xb7 NEUTRAL",B.bmn)
B.hfh=new A.q(-1.5,0,0)
B.eJR=new C.z(B.Fk,B.hfh)
B.eLq=new C.z(52,B.vK)
B.biP=new C.u(1,0.12156862745098039,0.47843137254901963,0.22745098039215686,D.q)
B.eMj=new C.z("GREEN \xb7 GROUND",B.biP)
B.br3=new C.u(1,0.9450980392156862,0.9098039215686274,0.8235294117647058,D.q)
B.eN0=new C.z(B.br3,B.By)
B.eNh=new C.z("main","Main water valve")
B.cOs=w([D.vP,D.bu,D.be],x.O)
B.ePC=new C.z(40,B.cOs)
B.hgw=new A.q(1.5,0,0)
B.eRs=new C.z(B.MA,B.hgw)
B.beU=new C.u(1,0.9529411764705882,0.9411764705882353,0.9098039215686274,D.q)
B.blU=new C.u(1,0.4823529411764706,0.5294117647058824,0.5803921568627451,D.q)
B.eS9=new C.z(B.beU,B.blU)
B.eT8=new C.z(B.i1,B.XB)
B.bhS=new C.u(1,0.9529411764705882,0.9019607843137255,0.7843137254901961,D.q)
B.boM=new C.u(1,0.788235294117647,0.7098039215686275,0.5490196078431373,D.q)
B.eTr=new C.z(B.bhS,B.boM)
B.beu=new C.u(1,0.6039215686274509,0.4196078431372549,0.047058823529411764,D.q)
B.eTX=new C.z("BRASS \xb7 HOT",B.beu)
B.eUo=new C.z(53,B.MA)
B.a8h=new C.b7(180,40,215)
B.a8i=new C.b7(215,40,345)
B.a8j=new C.b7(60,60,90)
B.eVd=new C.b7(61,-4.6,B.tO)
B.a8k=new C.b7(95,40,185)
B.eWd=new C.b7("Turn the main water ON to test for leaks: pick Hand and tap the main valve.","hand","main")
B.eXf=new C.b7(62,4.6,B.o1)
B.eXq=new C.b7("The water must be OFF before you cut into the pipes: pick Hand and tap the main valve.","hand","main")
B.eXV=new C.b7("Fit the parts in the order of the job list.","",null)
B.eYl=new C.b7("Looks good. Watch for leaks; if none, the job is done.","",null)
B.eZe=new C.cy([0,17.1,16.4,5.8])
B.eZh=new C.cy([0,-0.1,16.4,4.2])
B.f_k=new C.cy([15.6,9,14.8,22])
B.f_o=new C.cy([-15.6,9,14.8,22])
B.f_x=new C.e5([72,60,44,B.Me,B.Mh])
B.brT=new C.u(1,0.8941176470588236,0.6901960784313725,0.47843137254901963,D.q)
B.f_O=new C.e5([124,70,44,B.brT,B.q9])
B.f_V=new C.e5([90,64,46,B.agJ,D.hj])
B.f0d=new C.e5([110,70,62,D.bN,D.al])
B.f0i=new C.e5([84,60,40,B.agM,B.Mh])
B.fBG=new C.y("\u260e",null,D.pF,null,null,null,null,null,null,null,null,null)
B.bbb=new C.qz(B.fBG,D.ax,null,24,null)
B.fEb=new C.y("City office",null,D.dd,null,null,null,null,null,null,null,null,null)
B.dbe=w([B.bbb,D.bb,B.fEb],x.p)
B.f34=new C.cd(D.aM,D.e,D.i,D.m,null,D.p,null,0,B.dbe,null)
B.bU1=new C.ae(D.OS,26,D.c_,null,null,null)
B.fRs=new C.y("Hallway tour",null,D.hr,null,null,null,null,null,null,null,null,null)
B.fCF=new C.y("Just the hall and its big TVs, 45 seconds",null,D.vp,null,null,null,null,null,null,null,null,null)
B.dtd=w([B.fRs,B.fCF],x.p)
B.btG=new C.fj(D.ah,D.e,D.i,D.E,null,D.p,null,0,B.dtd,null)
B.bFW=new C.bA(1,D.bd,B.btG,null)
B.cYO=w([B.bU1,D.bb,B.bFW,A3.P8],x.p)
B.f37=new C.cd(D.aM,D.e,D.i,D.m,null,D.p,null,0,B.cYO,null)
B.bRG=new C.ae(D.hl,30,D.c,null,null,null)
B.fTt=new C.y("Play the tour",null,D.k6,null,null,null,null,null,null,null,null,null)
B.d6T=w([B.bRG,D.bn,B.fTt],x.p)
B.f3d=new C.cd(D.aM,D.b9,D.i,D.m,null,D.p,null,0,B.d6T,null)
B.vd=new A.JH(0,"correct")
B.aQg=new A.JH(1,"incorrect")
B.t4=new A.JH(2,"unsafe")
B.TT=new A.JH(3,"incomplete")
B.f3r=new A.JH(4,"requiresVerification")
B.eem={hospital:0,shop:1,school:2,firestation:3,house2:4,bighouse:5,store:6,gasstation:7,dmv:8,tower:9,hq:10}
B.aQS=new C.dD(B.eem,11,x.M)
B.ee6={wardrobe:0,shelf:1,lamp:2,console:3}
B.f4P=new C.dD(B.ee6,4,x.M)
B.aQW=new C.jw([1,2,3,4,5],C.at("jw<G>"))
B.edR={house2:0,bighouse:1,shop:2,hospital:3,school:4,firestation:5,store:6,gasstation:7,tower:8,hq:9,dmv:10}
B.f51=new C.dD(B.edR,11,x.M)
B.eg9={billboard:0,bighouse:1,townsign:2,cornersign:3,adboard:4,tower:5,hq:6,store:7,gasstation:8,ubstation:9,dmv:10}
B.f54=new C.dD(B.eg9,11,x.M)
B.aR0=new C.dD(D.hT,0,C.at("dD<G>"))
B.f70=new C.av(0,36)
B.f7a=new C.av(126,84)
B.f88=new C.a5(110,64,null,null)
B.f89=new C.a5(120,70,null,null)
B.f8f=new C.a5(270,64,null,null)
B.f8g=new C.a5(270,70,null,null)
B.K_=new A.FM(0,"hot")
B.K0=new A.FM(1,"neutral")
B.K1=new A.FM(2,"ground")
B.aSH=new A.FM(3,"load")
B.fgE=new C.F(!0,D.c,null,null,null,null,12.5,null,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fhh=new C.F(!0,D.c,null,null,null,null,13.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fhm=new C.F(!0,D.c,null,null,null,null,16,D.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,L.CV,null,null,null)
B.fhq=new C.F(!0,D.b_,null,null,null,null,12.5,D.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fiB=new C.F(!0,D.aC,null,null,null,null,14,D.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.aT8=new C.F(!0,D.aC,null,null,null,null,11.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fj7=new C.F(!0,D.bu,null,null,null,null,12,D.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fjh=new C.F(!0,D.ac,null,null,null,null,13.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fjH=new C.F(!0,D.aB,null,null,null,null,12.5,D.u,null,2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fjR=new C.F(!0,D.aR,null,null,null,null,11.5,null,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fk2=new C.F(!0,D.bu,null,null,null,null,15,D.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.aTn=new C.F(!0,D.ac,null,null,null,null,12,D.U,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fle=new C.F(!0,D.c,null,null,null,null,13,D.U,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.a9P=new C.F(!0,D.ac,null,null,null,null,null,null,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.flH=new C.F(!0,D.bu,null,null,null,null,13,D.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fmm=new C.F(!0,D.aC,null,null,null,null,9.5,null,null,null,null,null,1.15,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fmD=new C.F(!0,D.ac,null,null,null,null,12.5,null,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fmE=new C.F(!0,D.fk,null,null,null,null,12,null,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fng=new C.F(!0,null,null,null,null,null,9,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.Ka=new C.F(!0,D.aB,null,null,null,null,12.5,D.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fnL=new C.F(!0,D.c,null,null,null,null,11.5,D.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.aTG=new C.F(!0,D.c,null,null,null,null,14,null,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fo3=new C.F(!0,D.bL,null,null,null,null,13,D.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fp4=new C.F(!0,D.mA,null,null,null,null,12,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fpa=new C.F(!0,D.ac,null,null,null,null,13.5,null,D.cD,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fpl=new C.F(!0,D.fk,null,null,null,null,11.5,D.U,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fpq=new C.F(!0,D.eG,null,null,null,null,14,D.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fpZ=new C.F(!0,D.bu,null,null,null,null,18,D.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fqw=new C.F(!0,D.aR,null,null,null,null,12,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fr5=new C.F(!0,D.c,null,null,null,null,10.5,D.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.frh=new C.F(!0,D.bu,null,null,null,null,null,D.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.aU8=new C.F(!0,D.ac,null,null,null,null,13.5,null,null,null,null,null,1.5,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fsb=new C.F(!0,D.aB,null,null,null,null,null,D.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fsF=new C.F(!0,D.aC,null,null,null,null,11,D.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fu5=new C.F(!0,D.aB,null,null,null,null,12.5,D.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fv6=new C.F(!0,D.bu,null,null,null,null,44,D.u,null,2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.aUE=new C.F(!0,D.c,null,null,null,null,13.5,D.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fvv=new C.F(!0,D.aR,null,null,null,null,11.5,null,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fwc=new C.F(!0,F.fA,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fwt=new C.F(!0,D.fk,null,null,null,null,12,D.U,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fwO=new C.y("Wire guide (U.S. houses)",null,D.dd,null,null,null,null,null,null,null,null,null)
B.fx0=new C.y("Which wall?",null,D.Vd,null,null,null,null,null,null,null,null,null)
B.fhx=new C.F(!0,D.w,null,null,null,null,12,D.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fxl=new C.y("Open the 3D lesson",null,B.fhx,null,null,null,null,null,null,null,null,null)
B.fy7=new C.y("Never rely on color alone. With the power off, prove what each wire does with a tester and the device diagram. A licensed electrician does real house wiring.",null,M.a9R,null,null,null,null,null,null,null,null,null)
B.fyh=new C.y("Tip: pick a part, then tap its glowing spot. Joints on hoses, bolts and the drain are only loose: pick the Wrench and tap them. Use your Hand on the main water valve: turn the water OFF before you cut into a pipe, and ON to test for leaks.",null,D.UO,null,null,null,null,null,null,null,null,null)
B.fyD=new C.y("Answer, then submit. Nothing is marked until you submit.",null,I.tf,null,null,null,null,null,null,null,null,null)
B.fzs=new C.y("You used all three lives. Electricity does not give second chances, so in real life you turn the breaker OFF and test the wires every single time. Try the job again.",null,D.x4,null,null,null,null,null,null,null,null,null)
B.fzJ=new C.y("A different house",null,null,null,null,null,null,null,null,null,null,null)
B.fAa=new C.y("\ud83c\udf5e",null,D.x2,null,null,null,null,null,null,null,null,null)
B.fAb=new C.y("Show me",null,D.lS,null,null,null,null,null,null,null,null,null)
B.fAr=new C.y("Connect it to...",null,D.lR,null,null,null,null,null,null,null,null,null)
B.fAC=new C.y("Start this job again",null,null,null,null,null,null,null,null,null,null,null)
B.fru=new C.F(!0,D.c6,null,null,null,null,12.5,D.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fAW=new C.y("Give back",null,B.fru,null,null,null,null,null,null,null,null,null)
B.fBD=new C.y("Edit your billboard",null,D.dd,null,null,null,null,null,null,null,null,null)
B.fCM=new C.y("L is the lobby. On every level there is a balcony with a view of the town.",null,I.Ef,null,null,null,null,null,null,null,null,null)
B.fD0=new C.y("Submit the test",null,null,null,null,null,null,null,null,null,null,null)
B.fDo=new C.y("\ud83e\udeaa",null,D.x2,null,null,null,null,null,null,null,null,null)
B.fDB=new C.y("Start from a bare house (wire everything)",null,null,null,null,null,null,null,null,null,null,null)
B.fEj=new C.y("THE RACE",null,Q.th,null,null,null,null,null,null,null,null,null)
B.fEo=new C.y("What should the drone show you?",null,D.a9I,null,null,null,null,null,null,null,null,null)
B.fF2=new C.y("Diagram lessons",null,null,null,null,null,null,null,null,null,null,null)
B.fF6=new C.y("Go through",null,null,null,null,null,null,null,null,null,null,null)
B.fFV=new C.y("The customer says\u2026",null,D.dd,null,null,null,null,null,null,null,null,null)
B.fGr=new C.y("Submit for inspection",null,null,null,null,null,null,null,null,null,null,null)
B.fGF=new C.y("What the house needs",null,D.dd,null,null,null,null,null,null,null,null,null)
B.fGR=new C.y("Next job",null,null,null,null,null,null,null,null,null,null,null)
B.fj2=new C.F(!0,D.w,null,null,null,null,14,D.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fGZ=new C.y("Go in",null,B.fj2,null,null,null,null,null,null,null,null,null)
B.fsy=new C.F(!0,D.aB,null,null,null,null,22,D.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fH2=new C.y("My House",null,B.fsy,null,D.K,null,null,null,null,null,null,null)
B.fH9=new C.y("New job",null,null,null,null,null,null,null,null,null,null,null)
B.aTL=new C.F(!0,D.c6,null,null,null,null,null,D.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fHg=new C.y("Job over",null,B.aTL,null,null,null,null,null,null,null,null,null)
B.fHw=new C.y("Three shocks. In real life you switch the breaker off and test the wires, every time. Try another call.",null,D.x4,null,null,null,null,null,null,null,null,null)
B.fHC=new C.y("Learn the trades",null,R.te,null,null,null,null,null,null,null,null,null)
B.fIo=new C.y("New call",null,null,null,null,null,null,null,null,null,null,null)
B.fIt=new C.y("Job done! \ud83c\udf89",null,M.Kg,null,null,null,null,null,null,null,null,null)
B.fIx=new C.y("Wire guide",null,null,null,null,null,null,null,null,null,null,null)
B.fJH=new C.y("Next call",null,null,null,null,null,null,null,null,null,null,null)
B.fK4=new C.y("Plug in",null,D.dd,null,null,null,null,null,null,null,null,null)
B.fKu=new C.y("Look around",null,null,null,null,null,null,null,null,null,null,null)
B.fKP=new C.y("\ud83d\udef5",null,D.x1,null,null,null,null,null,null,null,null,null)
B.fL3=new C.y("The customer wants:",null,D.V_,null,null,null,null,null,null,null,null,null)
B.fLe=new C.y('Tip: pick "Look and test" and tap things to find out what is wrong. Then pick the right tool. Turn the breaker off (hand) before you touch any wire.',null,D.UO,null,null,null,null,null,null,null,null,null)
B.fo4=new C.F(!0,D.aC,null,null,null,null,11.5,D.H,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fLw=new C.y("INCOMING CALL",null,B.fo4,null,null,null,null,null,null,null,null,null)
B.fLC=new C.y("Elevator",null,D.fw,null,null,null,null,null,null,null,null,null)
B.fMD=new C.y("Deliveries",null,D.fw,null,null,null,null,null,null,null,null,null)
B.fMR=new C.y("Every connection is on the right terminal and every safety check passes.",null,D.ti,null,null,null,null,null,null,null,null,null)
B.fN_=new C.y("Message \xb7 now",null,D.vk,null,null,null,null,null,null,null,null,null)
B.fNT=new C.y("Call over",null,B.aTL,null,null,null,null,null,null,null,null,null)
B.fO_=new C.y("\ud83d\udd12",null,V.V0,null,null,null,null,null,null,null,null,null)
B.fO0=new C.y("\u23cf Unplug",null,U.Aj,null,null,null,null,null,null,null,null,null)
B.fO6=new C.y("The game is closed for now",null,D.n0,null,D.K,null,null,null,null,null,null,null)
B.fiM=new C.F(!0,D.ac,null,null,null,null,14.5,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fOj=new C.y("You missed 3 jobs in a row. The City office needs people who answer the phone and finish the job.",null,B.fiM,null,D.K,null,null,null,null,null,null,null)
B.fOl=new C.y("A different call",null,null,null,null,null,null,null,null,null,null,null)
B.fOD=new C.y("One board on its own, or several boards standing apart.",null,I.tf,null,null,null,null,null,null,null,null,null)
B.fOO=new C.y("\ud83d\udecf\ufe0f",null,D.nJ,null,null,null,null,null,null,null,null,null)
B.fPe=new C.y("Job complete! \ud83c\udf89",null,M.Kg,null,null,null,null,null,null,null,null,null)
B.fPr=new C.y("OPEN ORDERS",null,Q.th,null,null,null,null,null,null,null,null,null)
B.fPL=new C.y("Colours",null,D.Ai,null,null,null,null,null,null,null,null,null)
B.fPP=new C.y("How you are doing",null,D.hr,null,null,null,null,null,null,null,null,null)
B.fQ7=new C.y("Real work: no hints. You will only hear from me when something is wrong.",null,I.Ef,null,null,null,null,null,null,null,null,null)
B.fQ8=new C.y("5 bedrooms, 3 bathrooms and NGMY City outside. Walk in, look all round, fix what is wrong.",null,A9.UJ,null,D.K,null,null,null,null,null,null,null)
B.fQn=new C.y("All fixed! \ud83c\udf89",null,M.Kg,null,null,null,null,null,null,null,null,null)
B.fQr=new C.y("These are the usual U.S. house wiring colors. Colors are a hint, not proof: old work, switch loops and other countries differ. A real installer proves what each wire does with a tester, with the power off, and follows the device diagram.",null,A2.a9Q,null,null,null,null,null,null,null,null,null)
B.fQA=new C.y("Test (marked on submit)",null,null,null,null,null,null,null,null,null,null,null)
B.fQN=new C.y("Messages",null,D.vk,null,null,null,null,null,null,null,null,null)
B.aVf=new C.y("Stay",null,null,null,null,null,null,null,null,null,null,null)
B.fRx=new C.y("\ud83d\ude81",null,D.x1,null,null,null,null,null,null,null,null,null)
B.fRK=new C.y("Choose a level. A red one has an office with no power.",null,D.Ao,null,null,null,null,null,null,null,null,null)
B.aVh=new C.y("A different job",null,null,null,null,null,null,null,null,null,null,null)
B.fSy=new C.y("It goes on the back wall, not wired yet. Tap the red one to wire it yourself.",null,I.tf,null,null,null,null,null,null,null,null,null)
B.fTv=new C.y("\ud83d\uded7",null,D.x1,null,null,null,null,null,null,null,null,null)
B.fTQ=new C.y("\u26a1",null,D.pE,null,null,null,null,null,null,null,null,null)
B.fUm=new C.y("Practice (instant feedback)",null,null,null,null,null,null,null,null,null,null,null)
B.fUr=new C.y("The job",null,D.dd,null,null,null,null,null,null,null,null,null)
B.fVl=new C.y("Stay in the room",null,null,null,null,null,null,null,null,null,null,null)
B.fuu=new C.F(!0,F.fA,null,null,null,null,12,D.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fVC=new C.y("\ud83e\udea7 Billboards",null,B.fuu,null,null,null,null,null,null,null,null,null)
B.fVI=new C.y("Choose a billboard",null,D.dd,null,null,null,null,null,null,null,null,null)
B.fVN=new C.y("Which sign?",null,D.Ai,null,null,null,null,null,null,null,null,null)
B.fVU=new C.y("\ud83d\udc8a",null,D.x2,null,null,null,null,null,null,null,null,null)
B.fYY=new A.q(3.6,2.6,0.6)
B.fZ_=new A.q(0,56,0.9)
B.fZ0=new A.q(-146.4,62,84)
B.ig=new A.q(0,0,1)
B.fZ3=new A.q(0,0,3)
B.aaO=new A.q(0,0,4)
B.fZ5=new A.q(0,0,500)
B.fZ6=new A.q(0,0,640)
B.fZ7=new A.q(0,0,800)
B.tm=new A.q(0,0,-1)
B.aaP=new A.q(0,0,-60)
B.fZa=new A.q(0,101,38)
B.fZb=new A.q(0,105,280)
B.aW5=new A.q(0,10,0)
B.fZc=new A.q(0,10,3)
B.fZd=new A.q(0,110,10)
B.fZe=new A.q(0,110,95)
B.fZf=new A.q(0,112,36)
B.fZg=new A.q(0,116,0)
B.fZh=new A.q(0,11,-15)
B.fZi=new A.q(0,120,0)
B.fZj=new A.q(0,122,0)
B.fZk=new A.q(0,124,0)
B.fZl=new A.q(0,126,4)
B.aW7=new A.q(0,12,0)
B.fZm=new A.q(0,12,3)
B.fZn=new A.q(0,130,-3)
B.aaQ=new A.q(0,13,0)
B.fZo=new A.q(0,13,56)
B.fZp=new A.q(0,13,-8)
B.fZq=new A.q(0,142,0)
B.Vy=new A.q(0,14,0)
B.fZr=new A.q(0,14,11)
B.fZs=new A.q(0,14,150)
B.fZt=new A.q(0,14,2)
B.fZu=new A.q(0,14,32)
B.aW8=new A.q(0,14,40)
B.fZv=new A.q(0,14,5)
B.fZx=new A.q(0,14,-9)
B.fZy=new A.q(0,150,-150)
B.fZz=new A.q(0,159,0)
B.fZA=new A.q(0,165,3)
B.fZB=new A.q(0,165,-63)
B.fZC=new A.q(0,16,0)
B.fZD=new A.q(0,178,-30)
B.aaR=new A.q(0,17,0)
B.fZE=new A.q(0,17,21)
B.fZF=new A.q(0,188,0)
B.fZG=new A.q(0,19,0)
B.fZH=new A.q(0,19,14)
B.fZJ=new A.q(0,19,-30)
B.ea=new A.q(0,1,0)
B.fZL=new A.q(0,202,0)
B.fZM=new A.q(0,20,0)
B.fZN=new A.q(0,20,16)
B.fZQ=new A.q(0,20,-14)
B.fZR=new A.q(0,20,-6)
B.fZS=new A.q(0,210,-150)
B.fZT=new A.q(0,216,-30)
B.fZU=new A.q(0,21,0)
B.fZV=new A.q(0,22,-11)
B.fZW=new A.q(0,22,-12)
B.fZX=new A.q(0,22,-39)
B.h__=new A.q(0,23,0)
B.h_2=new A.q(0,24,0)
B.h_3=new A.q(0,24,13)
B.h_5=new A.q(0,250,640)
B.Au=new A.q(0,250,-118)
B.h_7=new A.q(0,252,0)
B.h_8=new A.q(0,25,-15)
B.h_9=new A.q(0,26,-24)
B.Vz=new A.q(0,28,0)
B.h_a=new A.q(0,28,-8)
B.aWa=new A.q(0,29,40)
B.h_b=new A.q(0,2,14)
B.h_c=new A.q(0,304,-150)
B.aaS=new A.q(0,30,0)
B.h_d=new A.q(0,30,110)
B.h_e=new A.q(0,316,0)
B.h_f=new A.q(0,31,46)
B.h_g=new A.q(0,31,-6)
B.h_h=new A.q(0,330,260)
B.h_i=new A.q(0,34,0)
B.h_j=new A.q(0,36,0)
B.h_k=new A.q(0,36,19)
B.h_l=new A.q(0,36,-3)
B.h_m=new A.q(0,37,22)
B.h_n=new A.q(0,3,0)
B.h_o=new A.q(0,3,150)
B.h_p=new A.q(0,3,-30)
B.h_r=new A.q(0,400,60)
B.h_s=new A.q(0,40,100)
B.h_u=new A.q(0,40,150)
B.h_v=new A.q(0,40,17)
B.h_x=new A.q(0,40,40)
B.h_y=new A.q(0,40,45)
B.h_z=new A.q(0,40,50)
B.h_B=new A.q(0,40,-6)
B.aWc=new A.q(0,44,46)
B.h_C=new A.q(0,44,55)
B.h_D=new A.q(0,46,0)
B.h_E=new A.q(0,47,0)
B.aWd=new A.q(0,48,0)
B.h_G=new A.q(0,48,20)
B.h_H=new A.q(0,48,82)
B.VA=new A.q(0,4,-2)
B.h_L=new A.q(0,520,1450)
B.aWe=new A.q(0,52,0)
B.h_M=new A.q(0,52,52)
B.h_O=new A.q(0,55,0)
B.aaT=new A.q(0,58,0)
B.h_P=new A.q(0,5,4)
B.h_R=new A.q(0,66,0)
B.h_S=new A.q(0,66,1)
B.h_T=new A.q(0,6,-15)
B.h_U=new A.q(0,75,-30)
B.aWf=new A.q(0,76,36)
B.aaU=new A.q(0,7,0)
B.h_V=new A.q(0,7,-5)
B.aWg=new A.q(0,82,0)
B.xc=new A.q(0,8,0)
B.h_W=new A.q(0,8,6)
B.h_X=new A.q(0,8,90)
B.h_Y=new A.q(0,8,-16)
B.h_Z=new A.q(0,8,-19)
B.h0_=new A.q(0,8,-4)
B.h00=new A.q(0,900,1600)
B.h01=new A.q(0,91,80)
B.aWh=new A.q(0,92,1)
B.h02=new A.q(0,94,13)
B.h03=new A.q(0,98,8)
B.h04=new A.q(0,99,38)
B.aaV=new A.q(0,9,0)
B.aWi=new A.q(0,9,-3)
B.aaW=new A.q(0,-2,12)
B.h05=new A.q(0,-4,28)
B.h06=new A.q(0,-4,-20)
B.h0a=new A.q(-100,38,0.7)
B.h0d=new A.q(100,100,320)
B.h0e=new A.q(100,14,36)
B.h0f=new A.q(100,24,36)
B.h0g=new A.q(100,24,8)
B.h0h=new A.q(100,290,-330)
B.h0i=new A.q(100,7,7)
B.h0j=new A.q(101,4,37)
B.h0m=new A.q(10,12,10)
B.h0n=new A.q(10,12,16)
B.h0o=new A.q(10,16,3)
B.h0p=new A.q(10,26,2)
B.h0q=new A.q(10,34,1)
B.h0r=new A.q(10,3,7)
B.h0s=new A.q(10,60,14)
B.h0t=new A.q(10,8,10)
B.h0u=new A.q(10,8,15)
B.h0w=new A.q(110,0,20)
B.h0x=new A.q(110,130,20)
B.h0y=new A.q(110,14,2)
B.h0z=new A.q(110,8,34)
B.h0A=new A.q(110,96,120)
B.aWj=new A.q(112,22,3)
B.h0B=new A.q(112,46,2)
B.h0C=new A.q(11,12,30)
B.aWk=new A.q(11,16,7)
B.h0D=new A.q(11,1,11)
B.h0E=new A.q(120,0,-30)
B.h0F=new A.q(120,28,22)
B.h0G=new A.q(120,40,100)
B.h0H=new A.q(124,2,26)
B.h0I=new A.q(124,4,60)
B.h0J=new A.q(125,8,54)
B.h0K=new A.q(126,2,62)
B.aWl=new A.q(12,3,9)
B.h0L=new A.q(12,4,22)
B.h0M=new A.q(12,86,0)
B.h0N=new A.q(130,18,12)
B.h0O=new A.q(130,28,24)
B.aWm=new A.q(130,4,14)
B.aWn=new A.q(130,56,80)
B.h0P=new A.q(130,5,50)
B.h0Q=new A.q(132,14,150)
B.h0R=new A.q(132,2,52)
B.aWo=new A.q(134,4,84)
B.h0S=new A.q(13,0,0)
B.h0T=new A.q(13,12,13)
B.h0U=new A.q(13,15,2)
B.aWp=new A.q(13,18,8)
B.h0V=new A.q(13,28,3)
B.h0W=new A.q(0,0.52,2.35)
B.h0X=new A.q(140,28,22)
B.h0Y=new A.q(140,9,43)
B.h0Z=new A.q(144,2,26)
B.h1_=new A.q(146,3,40)
B.h10=new A.q(148,60,120)
B.h11=new A.q(14,10,2)
B.aWq=new A.q(14,11,14)
B.h12=new A.q(14,13,28)
B.h13=new A.q(14,14,3)
B.h14=new A.q(14,17,4)
B.h15=new A.q(14,20,-28)
B.h16=new A.q(14,30,14)
B.h17=new A.q(14,36,14)
B.h18=new A.q(14,3,14)
B.h19=new A.q(150,30,42)
B.h1a=new A.q(150,70,5)
B.h1b=new A.q(151,3,43)
B.h1c=new A.q(152,4,7)
B.h1e=new A.q(16,10,10)
B.h1f=new A.q(16,16,16)
B.h1g=new A.q(16,3,11)
B.h1h=new A.q(16,80,60)
B.h1i=new A.q(16,9,2)
B.h1j=new A.q(17,1,0)
B.aWr=new A.q(17,3,17)
B.h1k=new A.q(27,1.4,27)
B.h1l=new A.q(18,18,14)
B.h1m=new A.q(18,20,18)
B.h1n=new A.q(18,22,2)
B.h1o=new A.q(18,28,16)
B.h1p=new A.q(18,2,18)
B.h1q=new A.q(18,3,0)
B.h1r=new A.q(18,6,0)
B.h1s=new A.q(18,80,2)
B.h1t=new A.q(18,90,5)
B.h1u=new A.q(18,9,11)
B.h1v=new A.q(190,20,60)
B.h1w=new A.q(190,320,100)
B.h1x=new A.q(19,13,7)
B.h1y=new A.q(70,0.6,50)
B.h1z=new A.q(0,3,-6.5)
B.aWs=new A.q(1,23.6,18)
B.h1A=new A.q(-4,20.4,0)
B.h1B=new A.q(1,1,0.64)
B.h1C=new A.q(-4.6,1.5,-3.6)
B.h1D=new A.q(0,-13.5,-1.5)
B.h1E=new A.q(4,10,3.5)
B.aWt=new A.q(0.95,1.7,0.85)
B.hI=new A.q(1,0,0)
B.h1F=new A.q(1,16,36)
B.h1G=new A.q(1,18,18)
B.h1H=new A.q(1,26,14)
B.h1I=new A.q(1,28,14)
B.aWu=new A.q(1,2,1)
B.aWv=new A.q(1,3,1)
B.aaX=new A.q(1,3,6)
B.h1K=new A.q(1,0.9,0.06)
B.h1L=new A.q(1.2,44,34)
B.h1N=new A.q(200,0,500)
B.h1O=new A.q(200,0,900)
B.h1P=new A.q(200,140,200)
B.h1T=new A.q(1.6,15,1.6)
B.h1U=new A.q(20,12,14)
B.aWw=new A.q(20,14,7)
B.h1V=new A.q(20,2,2)
B.h1W=new A.q(20,2,8)
B.h1X=new A.q(20,30,26)
B.h1Y=new A.q(20,3,14)
B.h1Z=new A.q(20,4,26)
B.h2_=new A.q(20,92,26)
B.h20=new A.q(216,8,216)
B.h21=new A.q(22,12,34)
B.h22=new A.q(22,14,0)
B.h23=new A.q(22,14,2)
B.h24=new A.q(22,14,3)
B.h25=new A.q(22,16,3)
B.h26=new A.q(22,18,14)
B.h27=new A.q(22,2,28)
B.h28=new A.q(22,3,10)
B.h29=new A.q(22,3,22)
B.h2a=new A.q(22,4,20)
B.h2b=new A.q(230,330,-210)
B.h2c=new A.q(230,-40,100)
B.h2d=new A.q(240,150,60)
B.h2e=new A.q(244,6,64)
B.h2f=new A.q(140,15,3.6)
B.h2g=new A.q(24,12,34)
B.h2h=new A.q(24,14,22)
B.h2i=new A.q(24,38,0)
B.aWx=new A.q(24,6,14)
B.h2j=new A.q(250,92,6)
B.h2k=new A.q(260,300,-160)
B.h2l=new A.q(262,3,5)
B.h2m=new A.q(262,3,56)
B.h2n=new A.q(26,14,26)
B.h2o=new A.q(26,2,26)
B.aWy=new A.q(26,4,22)
B.h2p=new A.q(26,72,26)
B.h2q=new A.q(26,8,18)
B.h2r=new A.q(26,-34,96)
B.h2t=new A.q(7.4,6,10.4)
B.h2u=new A.q(-0.1,0,0)
B.aWz=new A.q(2,100,90)
B.h2v=new A.q(2,10,2)
B.aWA=new A.q(2,12,60)
B.h2w=new A.q(2,13,2)
B.aWB=new A.q(2,23,12)
B.aWC=new A.q(2,28,22)
B.h2x=new A.q(2,5,1)
B.h2y=new A.q(2,700,900)
B.aWD=new A.q(2,8,2)
B.h2z=new A.q(1,0.9,0.8)
B.h2B=new A.q(64,10,-1.4)
B.h2C=new A.q(47,48,3.5)
B.h2D=new A.q(19.6,0,-1.5)
B.aWE=new A.q(0,56,1.3)
B.h2E=new A.q(0,15.5,0)
B.h2F=new A.q(3000,0,3000)
B.h2G=new A.q(3000,0,-3000)
B.h2I=new A.q(300,6,3)
B.h2K=new A.q(30,16,30)
B.aWF=new A.q(30,16,72)
B.h2L=new A.q(30,22,0)
B.h2M=new A.q(30,24,8)
B.h2N=new A.q(30,29,0)
B.h2O=new A.q(30,34,40)
B.h2P=new A.q(30,40,100)
B.h2R=new A.q(30,6,12)
B.h2S=new A.q(324,114,6)
B.aWG=new A.q(324,6,10)
B.h2T=new A.q(33,11,10)
B.h2U=new A.q(34,10,1)
B.h2V=new A.q(34,22,3)
B.aWH=new A.q(34,25,18)
B.h2W=new A.q(34,30,1)
B.aWI=new A.q(34,39,18)
B.aWJ=new A.q(34,42,18)
B.h2X=new A.q(34,4,28)
B.aWL=new A.q(34,8,18)
B.h2Y=new A.q(-1,-1.7,2.3)
B.h2Z=new A.q(366,124,6)
B.aWM=new A.q(366,6,10)
B.h3_=new A.q(36,1,18)
B.h30=new A.q(36,22,0)
B.h31=new A.q(36,30,0)
B.h32=new A.q(36,30,1)
B.h33=new A.q(36,4,3)
B.h34=new A.q(36,60,12)
B.h35=new A.q(0,93,3.5)
B.h36=new A.q(37,16,0)
B.h37=new A.q(37,50,38)
B.h38=new A.q(38,10,24)
B.h39=new A.q(38,20,3)
B.h3a=new A.q(38,2,6)
B.h3b=new A.q(-0.2,-0.3,-0.4)
B.h3c=new A.q(60,62,3.6)
B.h3d=new A.q(0,48.6,55)
B.aWN=new A.q(3,12,12)
B.aWO=new A.q(3,14,18)
B.h3e=new A.q(3,16,3)
B.h3g=new A.q(3,22,2)
B.h3h=new A.q(3,26,3)
B.aaY=new A.q(3,3,3)
B.h3i=new A.q(3,42,70)
B.h3j=new A.q(3,46,90)
B.h3k=new A.q(3,5,3)
B.h3l=new A.q(17.5,1.9,1.5)
B.h3n=new A.q(40,12,2)
B.h3o=new A.q(40,16,18)
B.h3p=new A.q(40,1,14)
B.h3q=new A.q(40,28,1)
B.h3r=new A.q(40,2,104)
B.h3s=new A.q(40,2,24)
B.h3t=new A.q(40,60,40)
B.h3u=new A.q(40,80,3)
B.h3v=new A.q(40,8,104)
B.h3w=new A.q(44,10,2)
B.aWQ=new A.q(44,2,14)
B.h3x=new A.q(44,3,22)
B.h3y=new A.q(44,72,20)
B.h3z=new A.q(0.9,0,4.4)
B.h3A=new A.q(8.2,1.9,-7.55)
B.h3B=new A.q(46,10,34)
B.h3C=new A.q(46,3,10)
B.h3D=new A.q(46,3,3)
B.h3E=new A.q(48,2,24)
B.h3F=new A.q(120.6,140,-52)
B.h3G=new A.q(0,-47.25,-2.25)
B.h3H=new A.q(-147.6,54,45)
B.h3I=new A.q(0.6,68,0.4)
B.h3J=new A.q(64,49,8.4)
B.h3K=new A.q(1.5,28,120)
B.h3L=new A.q(0,1.59,0.14)
B.h3M=new A.q(4,108,0)
B.h3N=new A.q(4,80,104)
B.h3O=new A.q(4,96,0)
B.h3P=new A.q(0,-3.4,1)
B.h3Q=new A.q(25,79,1.4)
B.h3R=new A.q(1,0,-1.2)
B.h3S=new A.q(0.6,4,2.4)
B.h3T=new A.q(50,12,32)
B.h3U=new A.q(50,1,2)
B.h3V=new A.q(50,28,42)
B.h3W=new A.q(50,4,28)
B.h3X=new A.q(51,7,33)
B.h3Y=new A.q(52,10,22)
B.h3Z=new A.q(52,56,1)
B.h4_=new A.q(54,5,18)
B.h42=new A.q(56,18,18)
B.h43=new A.q(56,2,36)
B.h44=new A.q(56,3,32)
B.h45=new A.q(56,3,48)
B.h46=new A.q(1.3,0.4,0.55)
B.h47=new A.q(58,0,30)
B.h48=new A.q(58,14,9)
B.h49=new A.q(58,64,22)
B.h4a=new A.q(58,92,30)
B.h4b=new A.q(58,96,30)
B.h4c=new A.q(58,9,74)
B.h4d=new A.q(0,-0.8,0.9)
B.h4e=new A.q(11.9,0,-8)
B.h4f=new A.q(20,7,34.4)
B.h4g=new A.q(-47,48,3.5)
B.aWR=new A.q(1.6,1.6,0.4)
B.h4h=new A.q(-17.5,1.9,1.5)
B.h4j=new A.q(0.16,0.32,0.07)
B.h4k=new A.q(5,10,5)
B.aWS=new A.q(5,12,26)
B.h4l=new A.q(5,17,2)
B.h4m=new A.q(5,1,2)
B.h4n=new A.q(5,34,24)
B.h4o=new A.q(5,5,5)
B.h4p=new A.q(5,6,10)
B.h4q=new A.q(5,6,3)
B.h4r=new A.q(5,9,8)
B.h4s=new A.q(-120.1,150,0)
B.h4t=new A.q(0,0,3.2)
B.aWT=new A.q(-13,8.6,-9.5)
B.h4u=new A.q(60,12,56)
B.h4v=new A.q(60,12,80)
B.h4w=new A.q(60,16,28)
B.h4x=new A.q(60,30,3)
B.h4z=new A.q(620,300,270)
B.h4A=new A.q(62,11,0)
B.h4B=new A.q(62,18,20)
B.h4C=new A.q(62,22,6)
B.h4D=new A.q(62,5,0)
B.h4E=new A.q(632,10,282)
B.h4F=new A.q(640,8,290)
B.h4G=new A.q(64,10,0)
B.h4J=new A.q(0,-3.45,4)
B.h4K=new A.q(14,9,0.5)
B.aWU=new A.q(6,14,20)
B.aWV=new A.q(6,14,32)
B.h4L=new A.q(6,28,6)
B.h4M=new A.q(6,4,4)
B.h4N=new A.q(6,6,6)
B.h4P=new A.q(-150.6,70,160)
B.h4Q=new A.q(0,-0.2,0.14)
B.h4S=new A.q(120.6,140,-8)
B.h4T=new A.q(0.3,38,2)
B.h4V=new A.q(700,430,1150)
B.h4W=new A.q(70,175,-45)
B.h4X=new A.q(70,194,-45)
B.h4Y=new A.q(70,6,36)
B.h4Z=new A.q(720,100,105)
B.h5_=new A.q(720,360,320)
B.h50=new A.q(72,32,3)
B.h51=new A.q(72,-17,70)
B.h52=new A.q(12,5,0.4)
B.h53=new A.q(74,20,5)
B.h54=new A.q(76,2,90)
B.h55=new A.q(76,8,3)
B.h56=new A.q(34,30,0.6)
B.h58=new A.q(1.6,1.7,3.6)
B.h5a=new A.q(-72.8,0,55)
B.h5b=new A.q(-146.4,15,84)
B.h5d=new A.q(25,79,0.2)
B.h5e=new A.q(7,0,-8)
B.h5f=new A.q(7,18,10)
B.h5g=new A.q(7,27,10)
B.h5h=new A.q(7,2,7)
B.aWW=new A.q(7,3,0)
B.h5i=new A.q(7,6,3)
B.h5j=new A.q(7,8,3)
B.aWX=new A.q(7,96,7)
B.h5k=new A.q(2200,0.4,560)
B.h5m=new A.q(0,11,9.2)
B.h5n=new A.q(-3.2,1.3,-7.82)
B.h5o=new A.q(20,0.8,12)
B.h5p=new A.q(80,16,32)
B.h5q=new A.q(80,26,8)
B.h5r=new A.q(80,38,26)
B.h5t=new A.q(80,4,14)
B.h5u=new A.q(80,6,32)
B.aWY=new A.q(147,1.5,3.5)
B.h5v=new A.q(82,46,3)
B.aWZ=new A.q(-6.5,6.9,-3)
B.h5w=new A.q(84,10,38)
B.h5x=new A.q(84,18,38)
B.h5y=new A.q(84,84,120)
B.h5z=new A.q(84,8,36)
B.h5A=new A.q(0.93,0.92,1)
B.h5B=new A.q(4.6,4.2,9.5)
B.h5C=new A.q(88,24,28)
B.h5D=new A.q(88,84,3)
B.h5E=new A.q(0.4,6,8)
B.h5F=new A.q(0,-48.6,55)
B.h5G=new A.q(2.6,2,2.6)
B.h5H=new A.q(5.5,8.5,3)
B.h5I=new A.q(0,0,0.26)
B.h5J=new A.q(120.6,96,-52)
B.h5K=new A.q(8,18,8)
B.aX_=new A.q(8,2,16)
B.h5L=new A.q(8,2,6)
B.aX0=new A.q(8,2,8)
B.h5M=new A.q(8,6,6)
B.h5N=new A.q(8,8,12)
B.h5O=new A.q(8,9,8)
B.h5P=new A.q(8,9,9)
B.h5Q=new A.q(-140,62,3.6)
B.h5S=new A.q(15,19,0.5)
B.h5T=new A.q(900,2,700)
B.h5V=new A.q(92,2,32)
B.h5W=new A.q(95,26,1)
B.h5X=new A.q(95,50,6)
B.h5Y=new A.q(96,14,38)
B.h5Z=new A.q(0.4,0.38,0.12)
B.h6_=new A.q(0,0,-0.43)
B.aX1=new A.q(11.2,4.5,-6)
B.aX2=new A.q(1.2,96,112)
B.aX3=new A.q(0.08,3.8,2.4)
B.aX4=new A.q(9,1,9)
B.h60=new A.q(9,40,4)
B.h61=new A.q(9,5,9)
B.h62=new A.q(0,70,-0.6)
B.h63=new A.q(-34.6,86,69)
B.h64=new A.q(-3.5,26,15)
B.h65=new A.q(34,6,0.6)
B.h66=new A.q(1.5,1.3,0.6)
B.h67=new A.q(-120.6,96,-8)
B.h68=new A.q(0,1.9,-0.7)
B.h6a=new A.q(0,-1.78,0.27)
B.aX5=new A.q(1.2,9,1.2)
B.h6b=new A.q(0,0.62,0)
B.h6c=new A.q(5.5,1.4,12)
B.h6d=new A.q(-50,0.6,50)
B.h6g=new A.q(20,11.5,0)
B.h6h=new A.q(20,66,1.4)
B.h6i=new A.q(3.2,0.12,-6.7)
B.h6j=new A.q(12,0,-8.1)
B.h6l=new A.q(-34.6,86,7)
B.aX6=new A.q(0,0,3.4)
B.h6m=new A.q(1.25,0.28,0.1)
B.h6n=new A.q(100,38,0.7)
B.h6o=new A.q(0,36,10.2)
B.h6p=new A.q(24,0.08,16)
B.h6q=new A.q(34,1.4,1.4)
B.h6s=new A.q(0,4,-7.9)
B.h6t=new A.q(11.9,0,8)
B.h6u=new A.q(0,41.5,-4.9)
B.h6v=new A.q(-26,146,0.6)
B.aX7=new A.q(0.8,1.7,0.78)
B.h6x=new A.q(21,1.4,8)
B.h6y=new A.q(0.8,0.8,1.6)
B.h6z=new A.q(1.4,1,1)
B.h6A=new A.q(30,36,0.8)
B.h6C=new A.q(71.2,46.6,55)
B.h6D=new A.q(3,3.28,-7.2)
B.h6E=new A.q(4.1,3.4,0.12)
B.h6F=new A.q(1.4,0.3,1)
B.h6G=new A.q(0,42,1.5)
B.h6H=new A.q(-6.1,1.2,-6.4)
B.h6I=new A.q(1.4,26,0.4)
B.h6J=new A.q(76,0.6,4)
B.h6L=new A.q(26,0.3,130)
B.h6M=new A.q(0,-45.5,0.5)
B.h6N=new A.q(1.8,4,1)
B.h6O=new A.q(5,1.6,0.5)
B.h6Q=new A.q(18,10,0.6)
B.h6R=new A.q(0,11,8.5)
B.h6S=new A.q(0.1,-2,2.4)
B.h6T=new A.q(302.4,1.2,322)
B.h6U=new A.q(-1,33.4,-4.9)
B.h6V=new A.q(0,0.2,2.8)
B.h6W=new A.q(6,10,1.4)
B.h6X=new A.q(0.95,0.95,1)
B.h6Z=new A.q(24,32,0.8)
B.h7_=new A.q(0,10,5.2)
B.h70=new A.q(0,-1.2,4.7)
B.h71=new A.q(18.9,2.6,0)
B.h72=new A.q(-2200,0.4,720)
B.h73=new A.q(66,89,3.8)
B.h74=new A.q(-12,0,-8.1)
B.h75=new A.q(3,11,0.5)
B.h76=new A.q(0.42,0.07,0.03)
B.h77=new A.q(0,70,320.6)
B.h78=new A.q(11.8,4,0)
B.h79=new A.q(0.97,0.18,2.25)
B.h7a=new A.q(0,6.6,-0.6)
B.h7b=new A.q(58,96,31.7)
B.h7c=new A.q(14,20,1.2)
B.aX8=new A.q(-71.7,6,55)
B.h7d=new A.q(0,-3.75,4.15)
B.h7f=new A.q(64,57,8.4)
B.h7g=new A.q(5.6,0.3,1.9)
B.h7h=new A.q(0.34,0.05,0.02)
B.h7k=new A.q(52,8,0.4)
B.h7l=new A.q(0,14,51.2)
B.h7m=new A.q(4.6,7.6,3)
B.h7n=new A.q(-1,0,-1.2)
B.h7o=new A.q(0,1.7,0)
B.h7p=new A.q(0,1.8,-0.9)
B.h7r=new A.q(-1,0,1.5)
B.h7s=new A.q(27,19,0.4)
B.h7t=new A.q(90,2,0.5)
B.h7u=new A.q(-17,98,77.2)
B.h7v=new A.q(5,8,0.4)
B.h7w=new A.q(0,98,6.6)
B.h7x=new A.q(5,14,8.5)
B.h7y=new A.q(5,2.2,0.8)
B.h7z=new A.q(-120.6,140,-52)
B.h7A=new A.q(-2200,0.4,560)
B.h7B=new A.q(0.18,0.12,0.08)
B.h7C=new A.q(50,0.6,50)
B.h7D=new A.q(147,3,1.4)
B.h7E=new A.q(20,0.6,50)
B.h7F=new A.q(0,6.6,0)
B.h7G=new A.q(4,16.2,0)
B.h7H=new A.q(60,0.4,12)
B.h7I=new A.q(10,15,0.5)
B.h7J=new A.q(144,5,0.7)
B.h7K=new A.q(1.2,-1.7,2.3)
B.h7L=new A.q(0.42,1.95,0.07)
B.h7M=new A.q(31.5,23,0)
B.h7N=new A.q(0,0.9,0)
B.h7O=new A.q(2.4,2.4,70)
B.h7P=new A.q(-120.6,140,-8)
B.h7R=new A.q(-146.4,15,172)
B.h7S=new A.q(0.82,1.7,0.3)
B.h7T=new A.q(0.55,0.45,0.35)
B.h7U=new A.q(47,7,34.4)
B.h7V=new A.q(-0.12,0,0)
B.h7X=new A.q(3.5,94,0.2)
B.h7Y=new A.q(1.1,2.05,0.04)
B.h7Z=new A.q(25,79,1.2)
B.h8_=new A.q(1.2,3.6,18)
B.aaZ=new A.q(0.7,0.14,0.06)
B.h80=new A.q(10,14,0.5)
B.h81=new A.q(0,138.8,95)
B.h82=new A.q(0,35.5,-4.9)
B.h83=new A.q(5,8,0.5)
B.ab_=new A.q(1.1,0.5,0.7)
B.h84=new A.q(-20,11.5,0)
B.h85=new A.q(0,1.1,0)
B.h86=new A.q(0,-0.5,0.6)
B.h87=new A.q(32,6,0.5)
B.h88=new A.q(0,1.4,0)
B.h8a=new A.q(1,3,0.8)
B.h8b=new A.q(0,3.4,0.8)
B.h8d=new A.q(0.1,0.1,0.1)
B.h8e=new A.q(0,-0.6,38)
B.h8f=new A.q(0,-10.5,1.5)
B.h8g=new A.q(-0.85,4,-3.2)
B.h8i=new A.q(-7.1,19,4)
B.h8j=new A.q(0,58,-14.2)
B.h8k=new A.q(40,7.2,1.2)
B.aX9=new A.q(0.42,0.34,0.12)
B.h8l=new A.q(1.7,0.08,1.2)
B.h8m=new A.q(8.6,0.5,3.4)
B.h8n=new A.q(0,0,0.38)
B.h8p=new A.q(5.2,3.9,-7.76)
B.h8q=new A.q(1.15,0.42,0.7)
B.h8s=new A.q(146.2,52,120)
B.h8t=new A.q(30,22,0.8)
B.h8u=new A.q(2.6,0.45,0.5)
B.h8v=new A.q(0.07,0.3,0.03)
B.h8x=new A.q(0,-0.55,0.36)
B.h8y=new A.q(41.5,11,12)
B.h8z=new A.q(36.2,60,38)
B.h8B=new A.q(20,1.4,8)
B.h8C=new A.q(75.4,24,0)
B.h8D=new A.q(0,-0.2,0.19)
B.h8E=new A.q(-20,0.6,-50)
B.h8F=new A.q(1.3,0.26,0.6)
B.h8H=new A.q(1.2,49,36)
B.h8I=new A.q(0,9.3,0)
B.h8K=new A.q(0,-1.45,0)
B.h8L=new A.q(9,12,0.6)
B.h8M=new A.q(0,-0.6,160)
B.aXa=new A.q(1.4,3,1.6)
B.h8N=new A.q(0,40,0.95)
B.h8O=new A.q(11,3,0.5)
B.h8P=new A.q(34.6,34,7)
B.h8Q=new A.q(190,0.6,90)
B.h8S=new A.q(0,-1.9,-1.2)
B.h8T=new A.q(-3.2,1.15,-7.78)
B.h8U=new A.q(0,-3.4,1.2)
B.h8V=new A.q(64,10,0.2)
B.h8W=new A.q(0,-1.78,0.53)
B.h8X=new A.q(0.8,2.6,0.3)
B.aXb=new A.q(-6.5,7.4,-3)
B.h8Y=new A.q(1,1.05,0.75)
B.h8Z=new A.q(0,76,1.1)
B.h9_=new A.q(1.35,0.32,0.5)
B.h90=new A.q(-4.6,-2,1.2)
B.h92=new A.q(0,40,1.4)
B.aXd=new A.q(0.6,32,34)
B.h93=new A.q(-3,36,10.6)
B.h95=new A.q(0,0.2,0)
B.h97=new A.q(2.5,30,2.5)
B.h98=new A.q(160,1.2,120)
B.h99=new A.q(7,40,2.4)
B.h9a=new A.q(30,26,0.6)
B.h9b=new A.q(3.4,3.25,-7.85)
B.h9c=new A.q(0,-0.2,-0.1)
B.h9d=new A.q(72.8,0,55)
B.h9e=new A.q(0.5,62,30)
B.h9f=new A.q(0,76,37.8)
B.h9g=new A.q(146.4,62,120)
B.h9h=new A.q(34.6,86,7)
B.h9i=new A.q(2.2,1.1,6.4)
B.h9j=new A.q(0,0,0.46)
B.h9k=new A.q(17,98,77.2)
B.h9l=new A.q(3,1.55,-7.1)
B.h9m=new A.q(0.4,3,3)
B.aXf=new A.q(0,-0.1,0.1)
B.h9n=new A.q(-52,96,-60.6)
B.h9o=new A.q(0,0,0.04)
B.h9q=new A.q(0,14,-19.3)
B.h9r=new A.q(2.4,11.6,-3.6)
B.h9s=new A.q(4,11,3.5)
B.h9u=new A.q(5,8.6,-2.25)
B.h9v=new A.q(0,-1.78,0.3)
B.h9w=new A.q(2.2,2.2,1.8)
B.h9x=new A.q(0.1,1.35,0.2)
B.h9y=new A.q(0,1.9,-1.2)
B.h9z=new A.q(0,56,2.1)
B.h9A=new A.q(0.26,0.04,0.02)
B.h9B=new A.q(-2.4,11.6,-3.6)
B.h9C=new A.q(11.25,0,-2.25)
B.h9D=new A.q(0,3.7,1.4)
B.h9E=new A.q(1,-1.8,2.4)
B.h9F=new A.q(-26,43,3.8)
B.h9G=new A.q(-60,15,3.6)
B.h9H=new A.q(20,0.6,-50)
B.h9I=new A.q(-11.8,4,0)
B.h9J=new A.q(1.2,4,7)
B.h9K=new A.q(11.2,4.7,-6)
B.h9L=new A.q(66,43,3.8)
B.aXg=new A.q(0,2.8,0)
B.h9M=new A.q(24,8,0.05)
B.aXh=new A.q(86,52,1.4)
B.h9O=new A.q(0.12,0,0)
B.h9P=new A.q(2.7,0.22,0.45)
B.h9Q=new A.q(1.1,1.1,0.03)
B.h9R=new A.q(-50,0.6,-50)
B.h9S=new A.q(-26,94,0.6)
B.h9T=new A.q(0,32,320.9)
B.h9U=new A.q(0,5,1.1)
B.h9V=new A.q(4.6,5.4,3.2)
B.h9W=new A.q(3.4,3.55,-7.85)
B.h9Y=new A.q(71.6,-22,62)
B.h9Z=new A.q(0,3,1.2)
B.ha_=new A.q(22,18,0.4)
B.ha0=new A.q(-20,0.6,50)
B.aXi=new A.q(1.5,18,3.5)
B.aXj=new A.q(0,1.5,-0.9)
B.ha3=new A.q(-0.28,0.55,-0.8)
B.ha4=new A.q(0,-0.2,0.24000000000000002)
B.ha6=new A.q(0,-3.3,4)
B.ha7=new A.q(46,0.8,46)
B.ha8=new A.q(1,-0.2,0.14)
B.ha9=new A.q(0,137,1.6)
B.aXk=new A.q(84,3,0.5)
B.haa=new A.q(-1.9,0,-2.25)
B.hab=new A.q(0,-0.9,1.1)
B.hac=new A.q(1.1,0.4,0.6)
B.had=new A.q(8.2,1.05,-6.7)
B.hae=new A.q(0,9.6,11.6)
B.hag=new A.q(34.6,34,69)
B.hai=new A.q(-149.3,38,128)
B.haj=new A.q(0.07,0.4,0.03)
B.hak=new A.q(2,3.8,0.08)
B.hal=new A.q(31,83,0.9)
B.ham=new A.q(64,40,-3.2)
B.han=new A.q(0.95,0.62,2.2)
B.aXl=new A.q(1.4,3,112)
B.hao=new A.q(1,33.4,-4.9)
B.hap=new A.q(0,0.3,314)
B.aXm=new A.q(302.4,140,1.2)
B.haq=new A.q(0,46.6,0.8)
B.has=new A.q(6.5,6.4,13)
B.hat=new A.q(0,0,-8.8)
B.hau=new A.q(0,0.7,-1)
B.hax=new A.q(-11.9,0,8)
B.hay=new A.q(7,0,1.5)
B.haz=new A.q(-8.4,0.7,-6.4)
B.haA=new A.q(-3.2,1.45,-7.78)
B.haB=new A.q(34,25,21.6)
B.haC=new A.q(0,41,0.45)
B.haD=new A.q(-6.575,0,-0.25)
B.haE=new A.q(1.7,1,0.6)
B.haF=new A.q(0.07,0.42,0.03)
B.haI=new A.q(3.7,1.35,0.5)
B.aXo=new A.q(0,0,-2.3)
B.ab1=new A.q(-13,12.5,0)
B.haJ=new A.q(0,0,0.62)
B.haK=new A.q(-60,62,3.6)
B.haL=new A.q(0.2,-0.3,-0.4)
B.aXp=new A.q(10.85,18,0.5)
B.haM=new A.q(120.1,174,-30)
B.haN=new A.q(0.6,70,0.6)
B.haO=new A.q(1.4,1.3,0.02)
B.haP=new A.q(30,1.4,0.4)
B.haQ=new A.q(6.3,1.5,-7.2)
B.haR=new A.q(8,14,1.2)
B.haS=new A.q(-120.1,150,-60)
B.haT=new A.q(0,5,11.2)
B.aXq=new A.q(0,0.62,2.85)
B.haU=new A.q(37.5,23,0)
B.aXr=new A.q(0.05,8,16)
B.haV=new A.q(0,-1.2,5)
B.haW=new A.q(0.2,-2,2.6)
B.haY=new A.q(0,-3.15,4.2)
B.hb_=new A.q(11.2,2.4,-5.18)
B.hb1=new A.q(-1,-0.2,0.14)
B.hb2=new A.q(0.97,0.9,1.04)
B.hb3=new A.q(-17,83,77.2)
B.hb4=new A.q(0.5,8,6)
B.hb5=new A.q(1.2,1.2,0.3)
B.aXt=new A.q(2,0.08,2.4)
B.hb7=new A.q(9.5,13.5,1.4)
B.hb8=new A.q(2.2,18,2.2)
B.hb9=new A.q(22,0.2,0.8)
B.hba=new A.q(-0.32,0,0.5)
B.aXu=new A.q(1.3,4,0.8)
B.hbc=new A.q(-26,89,3.8)
B.hbd=new A.q(-120.1,174,-30)
B.hbe=new A.q(0.8,0.55,0.05)
B.hbf=new A.q(0.14,0.35,17)
B.hbg=new A.q(1.4,2.4,0.3)
B.hbh=new A.q(0,11,8.2)
B.hbi=new A.q(52,96,-60.6)
B.hbj=new A.q(26,146,0.6)
B.hbk=new A.q(3.2,5,0.8)
B.hbl=new A.q(0,24,-0.6)
B.hbo=new A.q(150,0.6,90)
B.hbp=new A.q(0,11.5,19.3)
B.hbq=new A.q(0,1.95,0.31)
B.hbr=new A.q(150,1.2,112)
B.aXv=new A.q(0.75,4.5,0.1)
B.hbt=new A.q(0.12,0,0.05)
B.hbv=new A.q(-34.6,34,69)
B.hbw=new A.q(9,1.2,9)
B.hbx=new A.q(120.1,150,-60)
B.hby=new A.q(0,-0.5,0)
B.hbB=new A.q(0,37.5,-4.9)
B.hbC=new A.q(-2.4,14,8)
B.hbD=new A.q(-190,160,-14.2)
B.hbE=new A.q(0,0,3.6)
B.hbF=new A.q(3,14,1.5)
B.hbG=new A.q(5.5,8.5,0.5)
B.aXw=new A.q(0.05,8,9.6)
B.hbI=new A.q(1.5,94,3.5)
B.hbJ=new A.q(0,8.2,0)
B.hbK=new A.q(0,12.6,10.2)
B.hbL=new A.q(-120.6,96,-52)
B.hbN=new A.q(4,94,0.4)
B.aXx=new A.q(1.4,8,1)
B.hbO=new A.q(120.6,96,-8)
B.hbP=new A.q(114,30,0.4)
B.hbQ=new A.q(0,-1.45,0.3)
B.hbR=new A.q(3.7,1.2,-7.1)
B.hbS=new A.q(1.5,1.35,1.5)
B.hbT=new A.q(8.2,0.05,-6.7)
B.hbU=new A.q(0,-0.3,0)
B.hbV=new A.q(6.575,0,-0.25)
B.aXy=new A.q(150.6,70,160)
B.hbW=new A.q(52,140,-60.6)
B.aXz=new A.q(0,1.8,0)
B.hbX=new A.q(100,14,0.6)
B.hbY=new A.q(9,5,0.6)
B.hbZ=new A.q(34,2,0.8)
B.hc0=new A.q(26,94,0.6)
B.hc1=new A.q(9.8,5,-7.75)
B.aXA=new A.q(0,2.4,0)
B.hc2=new A.q(1.5,3.5,112)
B.hc3=new A.q(-8,31.5,6)
B.hc5=new A.q(22,7,34.4)
B.hc6=new A.q(3,1.85,-7.1)
B.hc8=new A.q(40,1.4,60)
B.hcb=new A.q(34,3,0.8)
B.hcc=new A.q(16,0.4,16)
B.ab3=new A.q(13,12.5,0)
B.hce=new A.q(0.34,0.66,0.9)
B.hcg=new A.q(0.9,1.08,0.98)
B.hch=new A.q(12,0.4,6)
B.hci=new A.q(-6.5,7.9,-3)
B.hcj=new A.q(1.5,1.5,0.05)
B.hck=new A.q(-6.5,5,-3)
B.hcl=new A.q(58.4,1.6,50)
B.hcm=new A.q(1.05,0.95,1)
B.hcn=new A.q(16,22,0.6)
B.hco=new A.q(0.02,0.28,0.05)
B.hcq=new A.q(0,0.7,1)
B.hcr=new A.q(26,22,1.4)
B.hcs=new A.q(0,9.5,-7)
B.aXB=new A.q(13,8.6,9.5)
B.hcu=new A.q(-140,15,3.6)
B.hcv=new A.q(1.3,0.95,0.6)
B.hcw=new A.q(5,5,0.8)
B.hcx=new A.q(-3.6,4,-7.76)
B.hcy=new A.q(-1.15,1.18,0.45)
B.hcz=new A.q(0,-8,10.2)
B.hcA=new A.q(0.82,0.9,0.05)
B.hcB=new A.q(0,-5.5,-0.25)
B.hcC=new A.q(0,11,21.2)
B.hcE=new A.q(34.6,86,69)
B.hcF=new A.q(64,50,6.6)
B.hcG=new A.q(-34,40,36.4)
B.hcH=new A.q(2.2,1.8,2)
B.hcJ=new A.q(190,160,-14.2)
B.hcL=new A.q(0,0.6,0)
B.hcO=new A.q(1.9,0,0)
B.hcP=new A.q(0.45,0.72,0.06)
B.hcQ=new A.q(95,26,1.8)
B.hcS=new A.q(14,0.4,7)
B.hcT=new A.q(64,24,-3.2)
B.ab4=new A.q(1.2,140,320)
B.hcU=new A.q(1,4.5,0.8)
B.hcV=new A.q(120.1,150,0)
B.hcW=new A.q(0,0.03,0)
B.hcX=new A.q(-100,100,320)
B.hcZ=new A.q(-100,400,350)
B.hd_=new A.q(-10,22,0)
B.hd2=new A.q(-110,96,120)
B.hd3=new A.q(-112,38,24)
B.hd4=new A.q(-120,0,-30)
B.hd5=new A.q(-120,300,-320)
B.hd6=new A.q(-125,16,30)
B.hd7=new A.q(-13,15,2)
B.hd8=new A.q(-144,82,45)
B.hd9=new A.q(-147,54,45)
B.hda=new A.q(-148,56,120)
B.hdb=new A.q(-14,17,4)
B.hdc=new A.q(-14,20,-28)
B.hdd=new A.q(-18,6,0)
B.qW=new A.q(-1,0,0)
B.hde=new A.q(-1,0,-8)
B.hdf=new A.q(-200,0,500)
B.hdg=new A.q(-200,0,900)
B.hdh=new A.q(-200,100,480)
B.hdj=new A.q(-20,4,26)
B.hdk=new A.q(-20,92,26)
B.hdl=new A.q(-22,14,0)
B.hdm=new A.q(-24,38,0)
B.hdn=new A.q(-260,330,-80)
B.hdo=new A.q(-3000,0,3000)
B.hdp=new A.q(-3000,0,-3000)
B.hds=new A.q(-30,36,38)
B.hdt=new A.q(-30,40,100)
B.hdu=new A.q(-30,44,33)
B.hdw=new A.q(-330,40,760)
B.hdx=new A.q(-34,34,38)
B.hdy=new A.q(-34,40,38)
B.hdz=new A.q(-37,16,0)
B.hdA=new A.q(-37,50,38)
B.hdB=new A.q(-380,470,1300)
B.hdC=new A.q(-390,144,-120)
B.hdD=new A.q(-390,70,-120)
B.hdE=new A.q(-40,12,150)
B.hdF=new A.q(-40,30,164)
B.hdH=new A.q(-42,-34,96)
B.hdI=new A.q(0,-0.6,22)
B.hdJ=new A.q(-4,20,0)
B.hdK=new A.q(-4,22,150)
B.aXC=new A.q(-4,22,8)
B.hdN=new A.q(-5,17,0)
B.hdO=new A.q(0,36.5,0)
B.hdP=new A.q(-60,28,56)
B.hdS=new A.q(-60,50,1)
B.hdT=new A.q(-60,70,6)
B.hdU=new A.q(-700,430,1150)
B.hdW=new A.q(-70,0,34)
B.hdX=new A.q(-70,95,34)
B.hdY=new A.q(-70,96,34)
B.hdZ=new A.q(-720,360,320)
B.he_=new A.q(-72,6,55)
B.he0=new A.q(-80,12,30)
B.he1=new A.q(-80,25,30)
B.he5=new A.q(-8,24,0)
B.he6=new A.q(-8,25,0)
B.he7=new A.q(-8,42,-5)
B.he8=new A.q(-8,-28,104)
B.he9=new A.q(-8,-39,96)
B.heb=new A.q(0,0.35,0.78)
B.hec=new A.q(0.6,6,14)
B.hed=new A.q(-11.9,0,-8)
B.hee=new A.q(32,3,0.5)
B.hef=new A.q(38,1.4,12)
B.heg=new A.q(25,0.5,66)
B.heh=new A.q(-8.4,1.9,-7.2)
B.hei=new A.q(1.6,8,5)
B.hej=new A.q(0.8,1.6,1.4)
B.hel=new A.q(25,6,0.2)
B.hem=new A.q(14,0.3,14)
B.aXD=new A.q(1.25,1,0.1)
B.hen=new A.q(11.2,0,-6)
B.heo=new A.q(-146.4,62,172)
B.hep=new A.q(0.4,7,9)
B.heq=new A.q(1.2,1.1,0.8)
B.hes=new A.q(150,49,1.2)
B.het=new A.q(41.5,11,-12)
B.heu=new A.q(62,0.2,42)
B.hev=new A.q(4.6,1.5,-3.6)
B.hew=new A.q(0,-0.7,0.8)
B.hex=new A.q(0,15.55,-3.6)
B.hey=new A.q(0.6,9,9)
B.hez=new A.q(8.9,1.9,0.9)
B.heA=new A.q(42,84,1.2)
B.heB=new A.q(-34.6,34,7)
B.heC=new A.q(60,15,3.6)
B.aXE=new A.q(1.6,58,66)
B.heD=new A.q(0,-1.55,-0.6)
B.heE=new A.q(36.2,32.2,0.6)
B.heF=new A.q(1.78,4.25,0.08)
B.heG=new A.q(27,0.6,19)
B.heH=new A.q(1.4,52,96)
B.heI=new A.q(0,5.5,-0.25)
B.heJ=new A.q(28,2.5,26)
B.heK=new A.q(0,0.7,0)
B.heL=new A.q(-1.2,-1.6,2.2)
B.heM=new A.q(11,25,0.3)
B.heN=new A.q(17,83,77.2)
B.aXF=new A.q(-12,14,19.4)
B.aXG=new A.q(13,8.6,-9.5)
B.aXH=new A.q(0.05,0.12,0.03)
B.aXI=new A.q(8.2,0.95,-6.7)
B.heO=new A.q(40,1.2,22)
B.heP=new A.q(0.7,1.5,-7.2)
B.heQ=new A.q(0,-1,4.9)
B.heR=new A.q(0,0.35,0.18)
B.heS=new A.q(62,2.4,8)
B.heT=new A.q(-1.6,11,6)
B.heU=new A.q(0.1,0,0)
B.heV=new A.q(0.32,0,0.5)
B.heW=new A.q(2200,0.4,720)
B.heX=new A.q(1.6,11,6)
B.heY=new A.q(-10,0.5,150)
B.hf_=new A.q(-60,50,1.8)
B.hf0=new A.q(-0.9,0,4.4)
B.hf1=new A.q(-6.5,7.2,-3)
B.hf3=new A.q(300,6,1.6)
B.hf4=new A.q(76,64,0.6)
B.hf5=new A.q(7.1,18,-3)
B.hf7=new A.q(0.45,1.3,0.9)
B.hf8=new A.q(74,1.2,90)
B.hf9=new A.q(15.5,2.6,0)
B.hfb=new A.q(-8,-47.8,70)
B.hfc=new A.q(14,1.5,3.5)
B.hfd=new A.q(0,0,0.5)
B.aXJ=new A.q(17,24,0.3)
B.hfe=new A.q(5.2,3.9,-7.82)
B.hff=new A.q(0,0.7,2.4)
B.hfg=new A.q(0,0.3,0)
B.aXK=new A.q(2.3,7,0.5)
B.hfi=new A.q(0,66,1.8)
B.aXL=new A.q(-13,8.6,9.5)
B.hfl=new A.q(0.6,28,52)
B.hfm=new A.q(6.5,6,14)
B.hfn=new A.q(0,4.2,2.4)
B.hfo=new A.q(0,-1.99,0.14)
B.hfp=new A.q(0.4,36,34)
B.hfr=new A.q(4.6,-2,1.2)
B.hfs=new A.q(0,14,19.3)
B.aXM=new A.q(0,0,-2.4)
B.hft=new A.q(1.3,0.8,0.9)
B.hfu=new A.q(-36.2,60,38)
B.hfv=new A.q(110,18,0.6)
B.hfw=new A.q(0,-1.78,0.52)
B.hfx=new A.q(0.12,0.1,0.03)
B.hfy=new A.q(9.8,5,-7.58)
B.hfz=new A.q(14,1.5,5)
B.hfA=new A.q(0.95,2.3,0.5)
B.aXN=new A.q(0.5,1.4,2)
B.hfB=new A.q(3.5,0.15,-7.2)
B.aXO=new A.q(64,2,1.2)
B.hfC=new A.q(1.2,26.4,20)
B.hfD=new A.q(-3.6,4,-7.82)
B.hfE=new A.q(-3,37,-4.9)
B.hfF=new A.q(0.3,2,36)
B.hfI=new A.q(24,0.8,6.5)
B.hfJ=new A.q(-28,76,38.3)
B.hfL=new A.q(22,0.5,5)
B.hfM=new A.q(9,10,0.6)
B.hfN=new A.q(0,22,2.1)
B.hfQ=new A.q(0,56,0.5)
B.hfR=new A.q(150,1.2,70)
B.hfS=new A.q(0,-5.5,-3.4)
B.hfT=new A.q(58,104,31.7)
B.hfU=new A.q(100,52,2.4)
B.hfV=new A.q(2.1,0.4,0.5)
B.aXP=new A.q(0.4,29,31)
B.hfW=new A.q(0,0.8,-1.3)
B.hfX=new A.q(-19.5,-1,-1.5)
B.hfY=new A.q(80,0.5,60)
B.hfZ=new A.q(6.85,4,-3.2)
B.hg_=new A.q(52,58,0.6)
B.hg0=new A.q(0,14.4,0)
B.aXR=new A.q(0.12,3,1.9)
B.hg1=new A.q(0.06,0.62,0.8)
B.hg2=new A.q(0,18.5,0)
B.hg3=new A.q(0,1.18,0.45)
B.hg4=new A.q(50,0.6,-50)
B.hg6=new A.q(9.55,5.7,-7.5)
B.hg8=new A.q(-400,80,-19.2)
B.hg9=new A.q(0.8,2.4,0.3)
B.aXS=new A.q(0,0.7,2)
B.hga=new A.q(3.5,26,15)
B.hgb=new A.q(0.95,0.62,1)
B.aXT=new A.q(0,24,40.2)
B.hgc=new A.q(0.8,1.1,1.2)
B.hgd=new A.q(0,51.5,20)
B.hge=new A.q(0,0.3,4.3)
B.hgf=new A.q(-20,0.5,145)
B.hgg=new A.q(1.15,1.18,0.45)
B.hgh=new A.q(2.4,14,8)
B.hgi=new A.q(0,47.25,-2.25)
B.hgj=new A.q(-8,31.5,-6)
B.hgk=new A.q(0.5,0.5,0.04)
B.hgl=new A.q(12.5,39,0.6)
B.hgm=new A.q(140,62,3.6)
B.hgn=new A.q(0,3,0.9)
B.hgo=new A.q(0,-1.45,0.32)
B.hgp=new A.q(9,0.7,15)
B.hgq=new A.q(3,36,10.6)
B.hgr=new A.q(25,10,0.2)
B.hgt=new A.q(0.14,8,0.3)
B.hgu=new A.q(11,15,0.3)
B.hgx=new A.q(0.6,0.12,0.03)
B.hgy=new A.q(-10.7,1.2,-6.4)
B.hgz=new A.q(-52,140,-60.6)
B.hgA=new A.q(-71.2,46.6,55)
B.hgB=new A.q(5,4.5,3)
B.hgC=new A.q(120,36,1.4)
B.hgD=new A.q(0,3.9,2.5)
B.aXU=new A.q(0,3.7,2.6)
B.hgG=new C.bR("phase-chip",x.W)
B.hgH=new C.bR("room-tray",x.W)
B.hgJ=new C.bR("screw-row",x.W)
B.hgL=new C.bR("lessons-search-field",x.W)
B.hgQ=new C.bR("lessons-search",x.W)
B.hgW=new C.bR("tray-show-all",x.W)
B.hh6=new C.bR("turned-page-rotate",x.W)
B.hhg=new C.bR("work-row",x.W)
B.hhD=new A.axO("bonded","The ground strap is still on the terminal block, so the neutral is joined to the metal frame of the appliance. On a 4-wire cord the strap must come off: the frame is grounded by the green wire, and the neutral carries current.",!0,!1,!1,"none","Take the metal ground strap off the terminal block.")
B.VI=new A.FT(0,"hot")
B.VJ=new A.FT(1,"neutral")
B.VK=new A.FT(2,"ground")
B.aYc=new A.FT(3,"unknown")
B.eOw=new C.z(-20,46)
B.hkJ=new A.Az(B.eOw,0,2.4,"Having the drink",!0,!1,!1,"")
B.ewP=new C.z(34,62)
B.hkK=new A.Az(B.ewP,3.141592653589793,2.2,"Picking up the remote",!1,!0,!1,"")
B.hkS=new A.aBN(null)
B.hvZ=new A.f_m(0,"material")})();(function staticFields(){$.dS=0
$.ajo=!1
$.ajp=!0
$.heB=!1
$.h1M=C.U(x.N,C.at("MD"))
$.h1L=C.U(x.N,C.at("aB<MD?>"))
$.h1K=C.aX(x.N)
$.i8k=C.U(x.N,C.at("ai<+(q,q)>"))
$.i8i=C.U(x.N,x.dg)
$.hup=C.U(x.N,C.at("iN"))
$.a4i=null
$.Ec=null
$.W9=null
$.hkL=null
$.ftl=C.U(x.S,C.at("ai<kp>"))
$.ahI="xbot"})();(function lazyInitializers(){var w=a.lazyFinal
w($,"isF","hCv",()=>C.bPC())
w($,"isR","hcW",()=>C.bPC())
w($,"inz","hA0",()=>new A.aTG($.ax()))
w($,"ive","bFR",()=>{var v,u,t=C.at("O<aTF>"),s=C.a([],t)
for(v=0;v<2;++v){u=v*9
D.d.v(s,C.a([A.h0W(v,175,u),A.h0W(v,612,u+14),A.h0W(v,1013,u+7)],t))}return s})
w($,"iuQ","h06",()=>C.a([A.hpL(-80,80,400,565),A.hpL(-80,80,715,885)],C.at("O<bxs>")))
w($,"inA","aRI",()=>A.hFS())
w($,"ivd","hDV",()=>{var v=C.a([A.oo("Wire a standard 120 volt receptacle: black to brass, white to silver, bare copper to green.",B.RL,B.dqG,"outlet","",!0,B.IA,B.cY5,!1,"Wall outlet",new A.fDm()),A.oo("A single-pole switch breaks the hot wire to the light: two black wires go on the two brass screws.",B.dck,B.ddP,"switch","",!0,B.IA,B.cWt,!1,"Light switch",new A.fDn()),A.oo("A GFCI protects you near water. Power comes in on LINE. The LOAD screws (covered with tape) feed other outlets.",B.RL,B.dgM,"gfci","",!0,B.IA,B.dfh,!1,"GFCI outlet",new A.fDo()),A.oo("Join the house wires to the fixture wires with wire nuts: black to black, white to white, ground to ground.",B.RL,B.d7l,"light","",!0,B.IA,B.dsn,!1,"Ceiling light",new A.fDp()),A.oo("A fan hangs from a strong fan-rated box. Join black, white and ground with wire nuts, then fasten the canopy.",B.RL,B.deE,"fan","",!0,B.IA,B.d3g,!1,"Ceiling fan",new A.fDq())],C.at("O<Ms>"))
D.d.v(v,$.h0c())
return v})
w($,"ivf","h0c",()=>{var v="switch",u="outlet",t=C.a([A.oo("Breaks BOTH hot legs of a 240 volt circuit at once: water heaters and baseboard heat.",B.dvj,B.c6f,"switch2p",v,!0,B.dxN,B.d7x,!0,"Double-pole switch (240 V)",new A.fDr()),A.oo("One light, two switches. One COMMON screw and two TRAVELER screws; it pairs with a second three-way.",B.doB,B.cXP,"switch3",v,!0,B.dy3,B.dfk,!0,"Three-way switch",new A.fDs()),A.oo("Sits in the middle of two three-way switches: two traveler wires in on one side, two out on the other.",B.dtK,B.die,"switch4",v,!0,B.dxO,B.dnq,!0,"Four-way switch",new A.fDt()),A.oo("Needs a NEUTRAL wire in the box as well: hot in, hot out to the light, neutral and ground.",B.d1Z,B.d4T,"switchsmart",v,!0,B.dy4,B.d2g,!0,"Smart, motion or timer switch",new A.fDu()),A.oo("Two switches in one device: one hot feed is split between them, and two separate lights come out.",B.cKH,B.dlE,"switchcombo",v,!0,B.dzN,B.cxM,!0,"Combination (double) switch",new A.fDv()),A.oo("The tab between the brass screws is broken off: the top half is switched, the bottom half is always on.",B.dfd,B.cxa,"split",u,!0,B.dy5,B.dkz,!0,"Split (half-switched) outlet",new A.fDw()),A.oo("Two hots, a neutral and a ground: the dryer 14-30, and the range and car charger 14-50.",B.a5n,B.d0C,"v240four",u,!0,B.a5V,B.cP4,!0,"4-wire 240 V outlet (dryer, range, EV)",new A.fDx()),A.oo("Two hots and a neutral, with no separate ground: the old 10-30 and 10-50, from before 1996.",B.a4t,B.duf,"v240three",u,!1,B.a61,B.dtr,!0,"3-wire 240 V outlet (old dryer or range)",new A.fDy()),A.oo("Two hots and a ground, and no neutral at all: the 6-series outlets.",B.ds2,B.dc7,"v240only",u,!0,B.dyj,B.dqM,!0,"240 V only outlet (window AC, welder)",new A.fDz()),A.oo("Hot and neutral as usual, but the ground goes on its own wire straight back to the panel: shops and offices.",B.du3,B.ddd,"isolated",u,!0,B.dzc,B.d8F,!0,"Isolated-ground outlet",new A.fDA())],C.at("O<Ms>"))
D.d.v(t,$.hDU())
return t})
w($,"iva","hDU",()=>C.a([A.oo("The dryer outlet of every new house: 30 amp, 240 volts. Two hots (X, Y), a neutral (W) and a separate ground (G).",B.a5n,B.aAG,"dryer4","nema1430",!0,B.a5V,B.dkK,!0,"Dryer outlet, 4-wire (NEMA 14-30)",new A.fDf()),A.oo("The dryer outlet of older houses (before 1996): 30 amp, 240 volts. Two hots and a neutral that also grounds the dryer. No separate ground.",B.a4t,B.aBa,"dryer3","nema1030",!1,B.a61,B.cST,!0,"Dryer outlet, 3-wire (NEMA 10-30)",new A.fDg()),A.oo("The electric stove outlet of every new house: 50 amp, 240 volts. Two hots (X, Y), a neutral (W) and a separate ground (G). Also used for car chargers.",B.a5n,B.aAG,"range4","nema1450",!0,B.a5V,B.dhT,!0,"Range outlet, 4-wire (NEMA 14-50)",new A.fDh()),A.oo("The electric stove outlet of older houses (before 1996): 50 amp, 240 volts. Two hots and a neutral that also grounds the range. No separate ground.",B.a4t,B.aBa,"range3","nema1050",!1,B.a61,B.dhR,!0,"Range outlet, 3-wire (NEMA 10-50)",new A.fDi()),A.oo("A dedicated 120 volt, 20 amp outlet for the washer, with a T-shaped neutral slot. Near water, so it needs GFCI protection.",B.dlR,B.d0E,"washer","nema520",!0,B.dzb,B.dfO,!0,"Washing machine outlet (NEMA 5-20)",new A.fDj()),A.oo("At the back of the appliance: black to the left terminal, white (neutral) to the middle one, red to the right one. The ground strap STAYS: it joins the neutral to the frame.",B.cXI,B.d5T,"cord3","terminal3",!1,B.dyA,B.dq0,!0,"Dryer or range cord, 3-wire hookup",new A.fDk()),A.oo("At the back of the appliance: REMOVE the ground strap first, then black left, white (neutral) middle, red right, and the green ground wire to the frame.",B.dqE,B.d2s,"cord4","terminal4",!0,B.dya,B.d9K,!0,"Dryer or range cord, 4-wire hookup",new A.fDl())],C.at("O<Ms>")))
w($,"ivq","Hf",()=>{var v,u=C.a([],x.n)
for(v=0;v<10;++v)u.push(-72+16*v)
return u})})()};
(a=>{a["PpN0aoFCcZzXhDaiIQ8dACVqEGQ="]=a.current})($__dart_deferred_initializers__);