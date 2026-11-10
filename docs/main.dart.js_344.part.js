((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,C,D,A1,A9,Aa,Ab,H,Q,I,A2,Ac,Ad,A3,Ae,R,Af,M,A4,S,Ag,X,Ah,Y,A5,Ai,Z,A_,Aj,Ak,G,Al,T,U,A0,Am,A6,A7,V,A8,An,N,A={f_H:function f_H(d,e){this.a=d
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
_.$ti=e},bpE:function bpE(d){this.a=d},aNW:function aNW(){},
pB(d,e,f){var w=d.a,v=d.b,u=d.c
return new A.q(w+(e.a-w)*f,v+(e.b-v)*f,u+(e.c-u)*f)},
vF(d,e){var w=Math.cos(e),v=Math.sin(e),u=d.a,t=d.c
return new A.q(u*w+t*v,d.b,-u*v+t*w)},
nE(d,e,f,g){var w,v,u,t,s,r,q,p,o=new A.h_n(Math.cos(e),Math.sin(e)),n=new A.h_l(f),m=new A.h_m(n,e,o,g),l=new A.h_k(n,e,o),k=C.a([],x.z)
for(w=d.length,v=x.o,u=0;u<d.length;d.length===w||(0,C.L)(d),++u){t=d[u]
s=C.a([],v)
for(r=t.a,q=r.length,p=0;p<r.length;r.length===q||(0,C.L)(r),++p)s.push(m.$1(r[p]))
k.push(new A.kq(s,l.$1(t.b),t.c,t.d,t.e,t.f,t.r,t.w,t.x,t.y,t.z))}return k},
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
l=Math.min(e,n.guY()*0.5)
k=Math.min(e,m.guY()*0.5)
j=n.gmW(0)
i=new A.q(q-j.a*l,p-j.b*l,o-j.c*l)
j=m.gmW(0)
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
a2=new A.h_9(a0,a1,a1*a0)
w.push(new A.q(a2.$4(t,p,n,m),a2.$4(l,k,j,i),a2.$4(h,g,f,e)))}}w.push(D.d.gak(a3))
return w},
hFZ(){if($.heX)return
$.heX=!0
C.az().bK(new A.bJV(),x.P).eR(new A.bJW())},
heY(){C.az().bK(new A.bJX(),x.P).eR(new A.bJY())},
i_U(d){var w,v,u,t,s,r,q,p,o,n
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
h8Q(a2,a3,a4){var w,v,u,t,s,r,q,p=J.a6(a2),o=p.h(a2,0).a,n=p.h(a2,0).b,m=p.h(a2,1).a,l=p.h(a2,1).b,k=p.h(a2,2).a,j=p.h(a2,2).b,i=p.h(a2,3).a,h=p.h(a2,3).b,g=m-k,f=i-k,e=o-m+k-i,d=l-j,a0=h-j,a1=n-l+j-h
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
i0M(d,e,f,g){var w,v=e.d,u=e.e,t=A.h8Q(f,v,u)
if(t==null)return
w=d.a
J.bl(w.save())
d.aw(0,t.a)
w.clipRect(C.bG(new C.a3(0,0,v,0+u)),$.my()[1],!0)
e.c.$3(d,new C.av(v,u),g)
w.restore()},
i0N(d,e,f,g,h,i){var w,v,u,t,s,r,q,p,o,n,m,l,k=e.d,j=e.e
$.S()
w=new C.p2()
e.c.$3(C.z8(w,null),new C.av(k,j),i)
v=w.nj()
u=k/g
t=j/h
for(s=f.length,r=d.a,q=0+u,p=0+t,o=0;o<f.length;f.length===s||(0,C.L)(f),++o){n=f[o]
m=A.h8Q(n.c,u,t)
if(m==null)continue
J.bl(r.save())
l=m.a
r.concat(C.h_f(C.Hb(l)))
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
h5w(d,e,f,g,h,i,j,k,l,m){return new A.avD(l,e,h,k,i,f,g,d,m,j,null)},
i_7(a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=$.hdh()
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
if(u&&s.h(0,a3)!=null){s.h(0,a3).rY(0,p,q)
continue}for(o=p.a,n=o.length,m=1/0,l=-1/0,k=1/0,j=-1/0,i=1/0,h=-1/0,g=0;g<n;++g){f=o[g]
e=f.a
if(e<m)m=e
if(e>l)l=e
d=f.b
if(d<k)k=d
if(d>j)j=d
a0=f.c
if(a0<i)i=a0
if(a0>h)h=a0}if(l-m>90||j-k>90||h-i>90){v.rY(0,p,q)
continue}a1=t.c3(0,((D.k.bf(m/60)+4096)*8192+(D.k.bf(k/60)+4096))*8192+(D.k.bf(i/60)+4096),new A.fkG())
a1.rY(0,p,q)
if(u)s.n(0,a3,a1)}a3=C.a([v],x.dF)
D.d.v(a3,new C.bd(t,t.$ti.k("bd<2>")))
a2=new A.cLD(a3)
$.hdh().n(0,a4,a2)
return a2},
b7i(d,e,f,g,h,i,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9){var w,v,u,t,s,r,q,p,o,n=(a1-g)/2,m=h-e,l=Math.max(a7*2,m*0.3),k=m-l,j=a6-a5/2
m=a1/2-n/2
d.al2(new A.q(a8-m,j,a9),new A.q(n,a5,h),a0,0.5,4,a4)
d.al2(new A.q(a8+m,j,a9),new A.q(n,a5,h),a0,0.5,8,a4)
m=h/2
w=a9-m
d.al2(new A.q(a8,j,w+k/2),new A.q(g,a5,k),a0,0.5,13,a4)
d.al2(new A.q(a8,j,a9+m-l/2),new A.q(g,a5,l),a0,0.5,14,a4)
m=e/2
v=w+k+m
u=a6-a2/2
w=g/2
t=a7/2
d.aR(new A.q(a8-w+t,u,v),new A.q(a7,a2,e),f,0.7)
d.aR(new A.q(a8+w-t,u,v),new A.q(a7,a2,e),f,0.7)
w=v-m
d.aR(new A.q(a8,u,w+t),new A.q(g,a2,a7),f,0.7)
s=a6-a2
r=C.ar(f,D.dn,0.18)
r.toString
d.aR(new A.q(a8,s+t,v),new A.q(g,a7,e),r,0.6)
d.aR(new A.q(a8,u,v+m-t),new A.q(g,a2,a7),f,0.7)
d.e=0.5
s+=a7
t=Math.min(g,e)
d.dF(new A.q(a8,s,v),new A.q(a8,s+0.05,v),t*0.09,B.he,14)
if(!a3){d.e=0
return}q=w-k*0.38
m=t*0.08
w=t*0.2
d.aR(new A.q(a8,a6+t*0.04,q),new A.q(t*0.65,m,w),i,0.9)
s=a6+t*0.5
r=a6+t*0.62
d.j8(A.Dj(C.a([new A.q(a8,a6+m,q),new A.q(a8,s,q),new A.q(a8,r,q+t*0.12),new A.q(a8,r,q+t*0.38),new A.q(a8,s,q+t*0.42)],x.o),t*0.1,6),t*0.045,i,!0,0.9,8)
for(m=a6+w,w=t*0.035,s=a6+t*0.24,r=t*0.075,p=0;p<2;++p){o=a8+F.hq[p]*t*0.3
d.dq(new A.q(o,a6,q),new A.q(o,m,q),w,i,0.9,8)
d.dq(new A.q(o,m,q),new A.q(o,s,q),r,i,0.9,10)}d.e=0},
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
fk:function fk(d){var _=this
_.a=d
_.c=_.b=0
_.d=1
_.e=0
_.f=2
_.r=!1
_.x=_.w=0},
c0d:function c0d(d,e){this.a=d
this.b=e},
c0e:function c0e(d){this.a=d},
c0c:function c0c(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
c0f:function c0f(d,e,f){this.a=d
this.b=e
this.c=f},
c0b:function c0b(d,e){this.a=d
this.b=e},
c0g:function c0g(d,e,f){this.a=d
this.b=e
this.c=f},
h_n:function h_n(d,e){this.a=d
this.b=e},
h_l:function h_l(d){this.a=d},
h_m:function h_m(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
h_k:function h_k(d,e,f){this.a=d
this.b=e
this.c=f},
h_9:function h_9(d,e,f){this.a=d
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
_.y=1
_.Q=0
_.as=-1.25
_.at=1.35
_.ax=0
_.ay=1.25
_.ch=!1
_.db=_.cy=_.cx=_.CW=null
_.P$=0
_.T$=h
_.by$=_.bJ$=0},
bJV:function bJV(){},
bJW:function bJW(){},
bJX:function bJX(){},
bJY:function bJY(){},
bJS:function bJS(){},
bK_:function bK_(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bJZ:function bJZ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bJU:function bJU(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bJT:function bJT(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bVb:function bVb(d){this.a=d},
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
ctU:function ctU(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ctV:function ctV(d,e){this.a=d
this.b=e},
ctT:function ctT(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0,a1,a2,a3,a4,a5,a6){var _=this
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
ctN:function ctN(){},
ctO:function ctO(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
ctM:function ctM(d){this.a=d},
ctP:function ctP(){},
ctQ:function ctQ(d,e,f){this.a=d
this.b=e
this.c=f},
ctR:function ctR(){},
ctS:function ctS(){},
cDG:function cDG(d,e){this.a=d
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
bse:function bse(d,e,f,g,h,i,j){var _=this
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
f3d:function f3d(d){this.a=d},
f3c:function f3c(d){this.a=d},
f3a:function f3a(d){this.a=d},
f3b:function f3b(d){this.a=d},
f34:function f34(d){this.a=d},
f35:function f35(d,e){this.a=d
this.b=e},
f37:function f37(d){this.a=d},
f38:function f38(d){this.a=d},
f36:function f36(d){this.a=d},
f39:function f39(d){this.a=d},
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
cLD:function cLD(d){this.a=d},
fkG:function fkG(){},
aO4:function aO4(){},
bU5(d){var w,v,u=$.h25.h(0,d)
if(u!=null)return C.f8(u,x.R)
w=B.Sl.h(0,d)
if(w==null)return C.f8(null,x.R)
v=$.h24.h(0,d)
if(v==null){v=new A.bU6(w,d).$0()
$.h24.n(0,d,v)}return v},
aWo(d){var w=0,v=C.j(x.H),u
var $async$aWo=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:w=2
return C.b(A.bU5(d),$async$aWo)
case 2:u=J.aW(B.Sl.gev(B.Sl))
case 3:if(!u.C()){w=4
break}w=5
return C.b(A.bU5(u.gS(u)),$async$aWo)
case 5:w=3
break
case 4:return C.h(null,v)}})
return C.i($async$aWo,v)},
hJ5(d){var w,v,u=new Float64Array(d*16)
for(w=0;w<d;++w){v=w*16
u[v+15]=1
u[v+10]=1
u[v+5]=1
u[v]=1}return u},
hgw(d,e,f){var w,v,u,t
if(d>e){w=d
v=e}else{w=e
v=d}if(w>f){u=w
w=f}else u=f
if(v>w){t=w
w=v
v=t}return(v*65536+w)*65536+u},
hJ6(d,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=d.c,g=d.b===1,f=g?4:3,e=h.length
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
hgx(d,a0,a1,a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
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
i8C(d,e){var w=D.o.aD(d,16)&255,v=D.o.aD(d,8)&255,u=d&255,t=0.35+(0.299*w+0.587*v+0.114*u)/255,s=new A.fyr()
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
dpz:function dpz(d,e,f,g,h,i){var _=this
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
bU6:function bU6(d,e){this.a=d
this.b=e},
bTY:function bTY(){},
bTS:function bTS(d,e){this.a=d
this.b=e},
bTR:function bTR(){},
bU_:function bU_(d,e,f){this.a=d
this.b=e
this.c=f},
bU0:function bU0(d){this.a=d},
bU1:function bU1(d){this.a=d},
bTZ:function bTZ(d,e){this.a=d
this.b=e},
bTW:function bTW(d){this.a=d},
bTX:function bTX(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
bU4:function bU4(d){this.a=d},
bU2:function bU2(){},
bU3:function bU3(d){this.a=d},
bU7:function bU7(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
bTT:function bTT(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
bTV:function bTV(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bTU:function bTU(d,e){this.a=d
this.b=e},
fyr:function fyr(){},
dv6:function dv6(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
djI:function djI(d,e){this.a=d
this.b=e},
hFF(){var w,v=J.e_(6,x.ff)
for(w=0;w<6;++w)v[w]=new A.aTe()
return new A.bIc(v)},
ag_(d){return A.i0l(d)},
i0l(d){var w=0,v=C.j(x.eT),u,t=2,s=[],r,q,p,o,n
var $async$ag_=C.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:if(d==null){u=null
w=1
break}t=4
w=7
return C.b(C.fDw(d,null),$async$ag_)
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
hz9(a5,a6,a7,a8,a9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
if(a8.a){w=a7/8
if(a9===0){v=D.k.bf(w)
A.nj(a5,a6,a7,D.o.F(v,2)===0?0:1+D.o.ao(v,2))}else A.nj(a5,a6,a7,a9+1+D.k.bf(w))
return}u=B.a5r[a8.e]
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
j.clipRRect(C.e6(C.bs(k,new C.aP(o,o))),$.nF(),!0)
o=C.I()
o.Q=D.ci
a5.oD(l,g,k,o)
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
i.r=B.Fj.gp(0)
a5.ad(j,o/2,i)
if(e!=null){j=e.c
i=e.d
v=Math.min(o*0.8/j,(p-m)*0.8/i)
o=C.bK(d.gbL(),i*v,j*v)
h=C.I()
h.Q=D.ci
a5.oD(e,new C.a3(0,0,j,i),o,h)}o=new A.fRi()
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
i9V(d,e){var w,v,u,t,s=d.w
if(s.length===0){s=d.e
w=d.r
return new C.cy([-s/2,s/2,w+d.f,w])}v=s[e]
s=v.e
u=d.e*s
t=d.r+v.d
return new C.cy([-u/2,u/2,t+d.f*s,t])},
bBZ(d,e,f,g){var w,v,u,t,s,r,q,p,o=new C.a3(0,0,0+e.a,0+e.b)
$.S()
w=C.I()
w.r=B.bjc.gp(0)
d.aP(o,w)
v=o.cr(-(e.gdD()*0.06))
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
q.sam(B.c6w.aA(0,new C.a3(0,0,s,r)))
d.aP(new C.a3(0,0,s,r),q)
p=t*0.82
J.bl(w.save())
w.translate((u-p)/2,(t-p)/2)
A.hze(d,new C.av(p,p),f)
w.restore()}else A.nj(d,new C.av(u,t),f,g)
w.restore()},
i4Z(d,e,f){var w,v,u,t,s=e.a,r=e.b
$.S()
w=C.I()
w.r=B.aiU.gp(0)
d.aP(new C.a3(0,0,0+s,0+r),w)
v=C.I()
v.r=L.ahF.gp(0)
w=s*0.12
u=r*0.07
t=w+s*0.76
d.aP(new C.a3(w,u,t,u+r*0.38),v)
u=r*0.52
d.aP(new C.a3(w,u,t,u+r*0.4),v)
u=C.I()
u.r=F.fA.gp(0)
d.ad(new C.t(s*0.82,r*0.5),s*0.05,u)},
h9v(d9,e0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6=x.z,d7=C.a([],d6),d8=new A.fk(d7)
d8.f=0
d8.Cn(B.hen,B.h3z,B.h3y,B.hem,B.ble,B.e8)
d8.f=1
d8.Cn(B.h8v,B.h6d,B.hfW,B.h7X,B.My,B.e8)
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
default:n=F.fA}m=p==="roof"
l=m?3:2
k=q?720:900
j=k*t/u
i=C.a([],x.a)
r=q?r:1
for(h=e0.b,g=x.o,f=-o,e=f-0.8,d=p==="highway",a0=f/2,f=p!=="neon",a1=a0-0.2,a2=p==="screen",a3=s-16,a4=(14+s-7)/2,a5=s-21,a6=s-7,a7=0;a7<r;++a7){a8=q?v[a7]:B.acF
a9=a8.e
b0=u*a9
b1=t*a9
b2=new A.fzQ(a8)
b3=C.a([],d6)
b4=new A.fk(b3)
b4.f=l
b5=C.a([],d6)
b6=new A.fk(b5)
b6.f=l
b7=A.i9V(d9,a7).a
b8=b7[0]
b9=b7[1]
c0=b7[2]
c1=b7[3]
c2=(b8+b9)/2
c3=(c0+c1)/2
b7=b2.$1(new A.q(c2,c3,a1))
c4=!f||a2?D.av:D.cr
c5=a8.c
b4.wt(b7,new A.q(b0+16,b1+16,o),c4,0.2,c5)
c6=7*Math.max(1,a9*0.8)
c4=b0+14
b6.wt(b2.$1(new A.q(c2,c0+3,3)),new A.q(c4,c6,8),n,0.4,c5)
b6.wt(b2.$1(new A.q(c2,c1-3,3)),new A.q(c4,c6,8),n,0.4,c5)
b7=b1+14
b6.wt(b2.$1(new A.q(b8-3,c3,3)),new A.q(c6,b7,8),n,0.4,c5)
b6.wt(b2.$1(new A.q(b9+3,c3,3)),new A.q(c6,b7,8),n,0.4,c5)
D.d.v(d7,b3)
D.d.v(d7,b5)
b5=C.a([],d6)
c7=new A.fk(b5)
c8=Math.max(6,b0*0.018)
c9=new A.fzR(i,l)
switch(q?"sep":p){case"tower":c7.dF(new A.q(0,0,a0),new A.q(0,a6,a0),c8*1.9,D.hk,12)
c7.dF(new A.q(0,0,a0),new A.q(0,14,a0),c8*2.8,D.av,12)
break
case"screen":c7.aJ(new A.q(0,7,-10),new A.q(b0*0.6,14,70),D.av)
c7.aJ(new A.q(0,a4,a0),new A.q(60,a5,14),D.hk)
break
case"roof":c7.mj(B.h_o,B.h5s,B.bhf,0.1,4)
c7.mj(B.h02,B.h5y,D.dn,0.15,4)
c7.ht(B.h_I,B.h5x,D.dn,4)
c7.mj(B.heB,B.h2G,B.biu,0.1,2)
c7.ht(B.heA,B.h2S,D.dn,2)
c7.aJ(B.h33,B.h4m,B.nX)
c7.aJ(B.h_d,B.h1q,D.el)
c9.$6$px(B.hcB,0,210,126,new A.fzJ(),360)
c9.$6$px(B.hdH,0,210,126,new A.fzK(),360)
c9.$6$px(B.h9f,0,72,116,A.ijc(),140)
c9.$6$px(B.hh9,0,130,80,new A.fzL(),300)
for(d0=0;d0<3;++d0){d1=-60-d0*90
c9.$6$px(new A.q(310.8,140,d1),1.5707963267948966,80,64,new A.fzM(d0),240)
c9.$6$px(new A.q(310.8,55,d1),1.5707963267948966,60,60,A.hbW(),200)}for(d0=0;d0<2;++d0){d1=-65-d0*110
c9.$6$px(new A.q(-490.8,95,d1),-1.5707963267948966,90,60,new A.fzN(d0),240)
c9.$6$px(new A.q(-490.8,40,d1),-1.5707963267948966,50,50,A.hbW(),180)}c9.$6$px(new A.q(0,100,-285.8),3.141592653589793,580,170,A.hz0(),900)
break
case"gate":for(b3=b0/2+25,b7=s+b1,c4=b7+26,c5=c8*1.6,d2=0;d2<2;++d2){d3=F.hq[d2]*b3
c7.dF(new A.q(d3,0,a0),new A.q(d3,c4,a0),c5,D.hk,12)}c7.aR(new A.q(0,b7+17,a0),new A.q(b0+80,18,22),D.hk,0.2)
break
default:for(b3=s+a8.d-7,d2=0;d2<2;++d2){b7=F.hq[d2]*b0*0.3
c7.dF(b2.$1(new A.q(b7,0,a0)),b2.$1(new A.q(b7,b3,a0)),c8,D.hk,10)}if(d)c7.aJ(new A.q(0,a3,14),new A.q(c4,3,24),D.hk)}D.d.v(d7,b5)
d4=h[a7]
i.push(new A.fP(C.a([b2.$1(new A.q(b8,c0,0.8)),b2.$1(new A.q(b9,c0,0.8)),b2.$1(new A.q(b9,c1,0.8)),b2.$1(new A.q(b8,c1,0.8))],g),0,new A.fzO(d4,a7),k,j,60,l,0,!1))
i.push(new A.fP(C.a([b2.$1(new A.q(b9,c0,e)),b2.$1(new A.q(b8,c0,e)),b2.$1(new A.q(b8,c1,e)),b2.$1(new A.q(b9,c1,e))],g),0,new A.fzP(d4,a7),k,j,60,l,0,!1))}d6=C.a([],d6)
d5=new A.fk(d6)
for(d2=0;d2<9;++d2){v=B.d2W[d2]
w=v.a
d1=v.b
if(m&&d1>200)continue
d5.dF(new A.q(w,0,d1),new A.q(w,55,d1),7,B.qa,6)
d5.ee(new A.q(w,98,d1),46,E.XD,3,6)}for(d2=0;d2<6;++d2){w=B.dsS[d2]
d5.dF(new A.q(w,0,580),new A.q(w,90,580),3,D.hk,5)
d5.ee(new A.q(w,95,580),8,B.o8,3,6)}D.d.v(d7,d6)
return new A.tU(d7,B.Sq,B.zy,i,null,6000)},
hrq(d){return d*d*(3-2*d)},
flO(d,e,f,g,h){var w=new A.flP(h)
return new A.q(w.$4(d.a,e.a,f.a,g.a),w.$4(d.b,e.b,f.b,g.b),w.$4(d.c,e.c,f.c,g.c))},
hsn(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=D.k.E(e,0,30)
if(f==null){w=C.a([],x.n)
for(v=J.a6(d),u=0;u<v.gL(d);++u)w.push(30*u/(v.gL(d)-1))
t=w}else t=f
w=J.a6(d)
v=J.a6(t)
s=0
for(;;){r=s+2
if(!(r<w.gL(d)&&v.h(t,s+1)<=m))break;++s}w=s+1
q=A.hrq(D.k.E((m-v.h(t,s))/(v.h(t,w)-v.h(t,s)),0,1))
v=new A.fpd(d)
p=s-1
o=A.flO(v.$1(p).a,v.$1(s).a,v.$1(w).a,v.$1(r).a,q)
n=A.flO(v.$1(p).b,v.$1(s).b,v.$1(w).b,v.$1(r).b,q)
r=Math.sin(m*1.3)
v=Math.sin(m*1.9)
w=Math.cos(m*1.1)
return new C.z(new A.q(o.a+r*3,Math.max(o.b+v*2.5,18),o.c+w*3),n)},
i8K(d){return $.i8J.c3(0,d.a,new A.fyx(d))},
huR(d){return $.i8L.c3(0,d.a,new A.fyu(d))},
i9U(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=d.a
if(i==="scatter")return A.hsn(B.dgQ,e,null)
if(d.w.length!==0)return A.hsn(A.huR(d),e,A.i8K(d))
w=B.dyE.h(0,i)
if(w==null)w=B.aPP
v=B.cwz[w.a]
u=w.b?-1:1
t=new A.q(d.ga4x(0),d.r+d.gGP()/2,d.ga4z())
s=new A.fzB(t,u,d)
r=new A.fzC(t,u,d)
q=D.k.E(e,0,30)
i=v.length
p=0
for(;;){o=p+2
if(!(o<i&&v[p+1].a<=q))break;++p}i=v[p].a
n=p+1
m=A.hrq(D.k.E((q-i)/(v[n].a-i),0,1))
i=new A.fzD(v)
l=p-1
k=A.flO(s.$1(i.$1(l)),s.$1(i.$1(p)),s.$1(i.$1(n)),s.$1(i.$1(o)),m)
j=A.flO(r.$1(i.$1(l)),r.$1(i.$1(p)),r.$1(i.$1(n)),r.$1(i.$1(o)),m)
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
bIe:function bIe(d){this.a=d},
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
bIc:function bIc(d){this.a="highway"
this.b=d},
bId:function bId(d){this.a=d},
fRi:function fRi(){},
fzQ:function fzQ(d){this.a=d},
fzR:function fzR(d,e){this.a=d
this.b=e},
fzS:function fzS(d,e){this.a=d
this.b=e},
fzJ:function fzJ(){},
fzK:function fzK(){},
fzL:function fzL(){},
fzM:function fzM(d){this.a=d},
fzN:function fzN(d){this.a=d},
fzO:function fzO(d,e){this.a=d
this.b=e},
fzP:function fzP(d,e){this.a=d
this.b=e},
ho:function ho(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
flP:function flP(d){this.a=d},
fpd:function fpd(d){this.a=d},
fyx:function fyx(d){this.a=d},
fyw:function fyw(){},
fyu:function fyu(d){this.a=d},
fyv:function fyv(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fzB:function fzB(d,e,f){this.a=d
this.b=e
this.c=f},
fzC:function fzC(d,e,f){this.a=d
this.b=e
this.c=f},
fzD:function fzD(d){this.a=d},
aoN:function aoN(d){this.a=d},
aoO:function aoO(d,e){var _=this
_.d=d
_.r=_.f=_.e=$
_.w=e
_.x=-1
_.y=!1
_.z=""
_.c=_.a=null},
c4e:function c4e(d){this.a=d},
c4c:function c4c(d){this.a=d},
c4b:function c4b(){},
c4_:function c4_(d){this.a=d},
c45:function c45(d,e){this.a=d
this.b=e},
c4d:function c4d(d){this.a=d},
c42:function c42(d,e){this.a=d
this.b=e},
c41:function c41(d){this.a=d},
c3A:function c3A(){},
c40:function c40(d){this.a=d},
c44:function c44(d){this.a=d},
c43:function c43(d,e,f){this.a=d
this.b=e
this.c=f},
c3Z:function c3Z(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
c3Y:function c3Y(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
c3V:function c3V(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
c3W:function c3W(d,e){this.a=d
this.b=e},
c3Q:function c3Q(d,e,f){this.a=d
this.b=e
this.c=f},
c3X:function c3X(d){this.a=d},
c3T:function c3T(d,e){this.a=d
this.b=e},
c3S:function c3S(){},
c3U:function c3U(d,e){this.a=d
this.b=e},
c3R:function c3R(){},
c3F:function c3F(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
c3E:function c3E(){},
c3G:function c3G(d){this.a=d},
c3H:function c3H(d){this.a=d},
c3I:function c3I(d){this.a=d},
c3J:function c3J(d,e){this.a=d
this.b=e},
c3K:function c3K(d,e,f){this.a=d
this.b=e
this.c=f},
c3L:function c3L(d,e){this.a=d
this.b=e},
c3M:function c3M(d,e,f){this.a=d
this.b=e
this.c=f},
c3N:function c3N(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
c3D:function c3D(){},
c3O:function c3O(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
c3B:function c3B(){},
c3C:function c3C(){},
c3P:function c3P(d){this.a=d},
c48:function c48(d){this.a=d},
c49:function c49(d){this.a=d},
c47:function c47(d){this.a=d},
c4a:function c4a(d){this.a=d},
c46:function c46(d){this.a=d},
h9l(d,e,f,g){var w,v,u,t=null,s=e.r
s=s==null?t:D.k.V(s)
w=D.k.V(f)
v=e.b
v=v==null?t:v.l()
u=d+"|"+C.w(s)+"|"+w+"|"+C.w(v)
v=$.huN.h(0,u)
if(v==null){s=C.fx(t,t,g,t,C.cS(t,t,t,t,t,t,t,t,t,e,d),D.a4,D.bY,t,D.dA,D.bW)
s.o0(f)
$.huN.n(0,u,s)}else s=v
return s},
nj(a5,a6,a7,a8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4=D.o.F(a8,17)
if(a4===0){A.fRp(a5,a6,a7,0)
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
return}r=B.cXY[a4-1]
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
A.h9l(r.a,C.l(a3,a3,D.c,a3,a3,a3,a3,a3,a3,a3,a3,u*0.22,a3,a3,D.u,a3,a3,!0,a3,u*0.012,a3,a3,a3,a3,a3,a3),w*0.9,1).a3(a5,new C.t(s,u*0.2))
A.h9l(r.b,C.l(a3,a3,m,a3,a3,a3,a3,a3,a3,a3,a3,u*0.1,a3,a3,D.U,a3,a3,!0,a3,a3,a3,a3,a3,a3,a3,a3),w*0.8,2).a3(a5,new C.t(s,u*0.5))
d=$.Wa
m=u*0.76
if(d!=null){t=d.c
n=d.d
a0=Math.min((s+o-s)/t,(m+u*0.16-m)/n)
o=C.I()
o.Q=D.ci
a5.oD(d,new C.a3(0,0,t,n),new C.a3(s,m,s+t*a0,m+n*a0),o)}else{a1=C.fx(a3,a3,a3,a3,C.cS(a3,a3,a3,a3,a3,a3,a3,a3,a3,C.l(a3,a3,D.c,a3,a3,a3,a3,a3,a3,a3,a3,u*0.12,a3,a3,D.u,a3,a3,!0,a3,a3,a3,a3,a3,a3,a3,a3),"NGMY"),D.a4,D.bY,a3,D.dA,D.bW)
a1.el()
a1.a3(a5,new C.t(s,m))}a2=A.h9l("ngmy.org",C.l(a3,a3,D.ac,a3,a3,a3,a3,a3,a3,a3,a3,u*0.08,a3,a3,D.H,a3,a3,!0,a3,a3,a3,a3,a3,a3,a3,a3),400,1)
a2.a3(a5,new C.t(w-a2.b.c-w*0.05,u*0.82))},
FX:function FX(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
L9(d){return D.d.dN(B.Rj,new A.fC7(d),new A.fC8())},
yO(d){var w=B.hE.h(0,d.b),v=d.e*3.141592653589793/2,u=w.d/2+30
return new C.z(d.c+Math.sin(v)*u,d.d+Math.cos(v)*u)},
hH9(d){var w=C.a([],x.C),v=C.a([],x.fW),u=new C.e4()
u.cY(7)
w=new A.bMA(d,u,w,v)
w.bzG(d,7)
return w},
zc:function zc(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fC7:function fC7(d){this.a=d},
fC8:function fC8(){},
xn:function xn(d,e,f,g){var _=this
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
bMA:function bMA(d,e,f,g){var _=this
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
bMC:function bMC(d){this.a=d},
bME:function bME(d,e){this.a=d
this.b=e},
bMF:function bMF(){},
bMB:function bMB(d,e){this.a=d
this.b=e},
bMG:function bMG(){},
bMD:function bMD(d,e,f){this.a=d
this.b=e
this.c=f},
hf2(d){var w=d.x
return C.bw(w.length,D.d.cI(w,0,new A.bKH()),D.h,D.h,D.h,D.h,D.h,D.h,D.h,D.h,D.h,D.h,D.h,D.h,D.h,D.h,D.h,D.h,D.h,D.h)},
iko(d){var w,v,u
for(w=0,v=0;u=v+1,u<d.length;v=u)w+=Math.sqrt(Math.pow(d[u].a-d[v].a,2)+Math.pow(d[u].b-d[v].b,2))
return w},
iku(d,e){var w,v,u,t,s,r,q,p,o
for(w=e,v=0;u=v+1,u<d.length;v=u){t=d[u]
s=d[v]
r=t.a-s.a
q=t.b-s.b
p=Math.sqrt(r*r+q*q)
if(p<0.000001)continue
if(w<=p||v+2===d.length){o=D.k.E(w/p,0,1)
t=d[v]
return new C.b7(t.a+r*o,t.b+q*o,Math.atan2(r,q))}w-=p}return new C.b7(D.d.gak(d).a,D.d.gak(d).b,0)},
bKG:function bKG(d){var _=this
_.a=d
_.e=_.d=_.c=_.b=$
_.f=-1},
bKH:function bKH(){},
dkd:function dkd(d,e){this.a=d
this.b=e},
h2B(d,e,f){return new A.aZ0(f,d,e,null)},
h9Q(d){return D.k.dd((1-D.k.E(d,0,1))*12)},
aTK:function aTK(d){var _=this
_.b=_.a=1
_.d=_.c=0
_.e=1
_.f=!1
_.r=0
_.w=!1
_.P$=0
_.T$=d
_.by$=_.bJ$=0},
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
c1Q:function c1Q(d){this.a=d},
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
fqg(d){var w=d.d-d.b-200
return new C.bqK([157.07963267948966,2*w+380+628.3185307179587,w,190])},
Le(d,e){var w,v=A.fqg(d).a,u=v[2],t=v[3],s=v[0]
v=v[1]
w=D.k.F(e,v)
if(w<0)w+=v
v=new A.fFx()
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
h1f(d,e,f){return new A.aTJ(d,e,f)},
ha6(d,e){var w=D.k.F(e+d.c,28)
if(w<12)return 0
if(w<15)return 1
return 2},
hq6(d,e,f,g){var w=x.n
w=new A.bxx(d,e,f,g,C.a([],w),C.a([],w))
w.bAM(d,e,f,g)
return w},
hGg(){var w,v=C.a([],x.n)
for(w=0;w<4;++w)v.push(B.kq[w].r)
return new A.bKI(v,C.bZ(4,0,!1,x.i),B.aAD)},
i7g(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=C.a([],x.z)
for(w=d.length,v=e.a,u=e.b,t=e.c,s=x.o,r=0;r<d.length;d.length===w||(0,C.L)(d),++r){q=d[r]
p=C.a([],s)
for(o=q.a,n=o.length,m=0;m<o.length;o.length===n||(0,C.L)(o),++m){l=o[m]
p.push(new A.q(l.a*v,l.b*u,l.c*t))}k.push(new A.kq(p,q.b,q.c,q.d,q.e,q.f,q.r,q.w,q.x,q.y,q.z))}return k},
i_h(){var w,v,u,t,s=new A.fk(C.a([],x.z))
s.r=!0
s.aR(B.h_C,B.h20,D.d7,0.3)
s.aR(B.heM,B.h1R,D.bN,0.2)
s.aR(B.aaY,B.h1P,B.i1,0.6)
s.aR(B.h9y,B.h2w,B.i1,0.6)
s.aJ(B.h8A,B.h22,D.bt)
for(w=0;w<2;++w)s.aJ(new A.q(75.5,9,B.a5b[w]),B.ab2,B.o8)
for(w=0;w<2;++w){v=B.dnm[w]
for(u=0;u<2;++u){t=B.dnd[u]
s.dF(new A.q(v,7,t-1.5),new A.q(v,7,t+1.5),7.5,D.nk,12)}}return s},
i5P(d,e){var w,v,u,t,s,r=new A.fk(C.a([],x.z))
r.r=!0
r.aR(B.aWs,B.h15,D.bN,0.4)
r.aR(B.hf3,B.h4M,D.bN,0.4)
r.aR(B.hf4,B.h4Q,B.i1,0.6)
r.aJ(B.xf,B.h1a,D.dF)
w=D.k.F(d*5+e,2)<1
r.aR(B.hhk,B.aWG,w?D.ax:D.ek,0.6)
r.aR(B.hd1,B.aWG,w?D.d7:D.d3,0.6)
for(v=0;v<2;++v){u=B.dni[v]
for(t=0;t<2;++t){s=B.dnb[t]
r.dF(new A.q(u,6.5,s-1.5),new A.q(u,6.5,s+1.5),6.5,D.nk,12)}}return r},
imB(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=x.z,a5=C.a([],a4)
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
o=u?A.i_h():A.i5P(a6,w)
u=u?B.aXu:B.aWO
D.d.v(a5,A.nE(A.i7g(o.a,u),0,Math.atan2(q,p)-1.5707963267948966,new A.q(s,0,r)))}for(u=$.bG_(),t=u.length,n=0;n<u.length;u.length===t||(0,C.L)(u),++n)D.d.v(a5,A.i3c(u[n],a6))
for(u=a6*0.9,t=x.o,m=a6*22,l=a6*0.09,w=0;w<2;++w){k=B.a4M[w].a
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
a0.aR(B.dX,B.h4h,D.bB,0.4)
a0.aR(B.h2a,B.h1e,B.i1,0.7)
a0.dF(B.h2h,B.h5w,2.6,D.bB,8)
a0.aJ(B.h5t,B.hcD,D.bN)
a0.dF(B.xf,B.aaW,1.2,B.he,8)
for(a1=0;a1<2;++a1)a0.aE5(new A.q(0,13.4,0),B.h7E,B.he,m+a1*3.141592653589793/2)
for(n=0;n<2;++n){a2=E.aBc[n]
a0.aJ(new A.q(0,-11,a2),B.h7k,B.he)
a0.aJ(new A.q(-10,-6,a2),B.aXs,B.he)
a0.aJ(new A.q(10,-6,a2),B.aXs,B.he)}for(n=0;n<2;++n){a3=B.aB7[n]
a0.j8(C.a([new A.q(a3*0.45,-10,0),new A.q(a3,-22,0)],t),0.3,B.he,!1,0,4)}D.d.v(a5,A.nE(d,0,e-1.5707963267948966,new A.q(j+520*k,h+Math.sin(u+w)*5,i+520*f)))}return a5},
imC(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=C.a([],x.a),f=new A.h_i()
for(w=0;w<4;++w){v={}
u=B.kq[w]
v.a=v.b=null
t=$.aRM()
s=D.d.cp(B.kq,u)
t.FH(0,d)
s=A.Le(B.kq[s],t.a[s]).a
v.b=s[0]
v.a=s[1]
s=new A.h_g(v,Math.atan2(s[2],s[3])-1.5707963267948966)
v=u.a==="bus"
r=v?B.aXu:B.aWO
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
g.push(f.$7(s.$3(q,o,p),s.$3(v,o,p),s.$3(v,n,p),s.$3(q,n,p),t+5,1200,220))}for(v=d*0.09,t=d*0.9,w=0;w<2;++w){s=B.a4M[w].a
l=s[0]
k=s[1]
j=s[2]
i=s[3]
h=v+w*3.141592653589793
s=Math.cos(h)
p=Math.sin(h)
p=new A.h_h(Math.atan2(-Math.sin(h),Math.cos(h))-1.5707963267948966,l+520*s,j+Math.sin(t+w)*5,k+520*p)
g.push(f.$7(p.$2(-42,-22),p.$2(42,-22),p.$2(42,-44),p.$2(-42,-44),i,900,230))
g.push(f.$7(p.$2(42,-22.3),p.$2(-42,-22.3),p.$2(-42,-44.3),p.$2(42,-44.3),i,900,230))}return g},
i3c(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k=B.kq[d.a*2],j=d.b,i=A.Le(k,j).a,h=i[0],g=i[1],f=i[2],e=i[3]
j=A.Le(k,j+22).a
j=[j[0],j[1],f,e,h+-e*56,g+f*56]
w=A.ha6(d,a0)
v=D.k.F(a0+d.c,28)
u=v>=17&&v<26
i=C.a([],x.z)
t=new A.fk(i)
t.r=!0
t.dF(B.dX,B.aWB,1.7,D.hk,6)
t.aR(B.h0H,B.h69,D.av,0.3)
for(s=w===2,r=w===1,q=w===0,p=0;p<3;++p){o=!0
if(!(p===0&&s))if(!(p===1&&r)){n=p===2&&q
o=n}n=o?B.dk_[p]:B.cKM[p]
m=o?0.9:0.1
t.fP(new A.q(-3.9,74-p*8,0),3.3,n,4,7,m)}t.aR(B.h0b,B.h1f,D.av,0.3)
if(u){t.ee(B.h7o,1.6,D.bf,4,6)
t.aJ(B.hcz,B.hch,D.bf)
t.aJ(B.h7P,B.aXS,D.bf)
t.aJ(B.hbk,B.aXS,D.bf)}else{t.aJ(B.h8Z,B.hdu,D.ax)
for(l=-2;l<=1;++l)t.aJ(new A.q(l*1.25+0.6,40,-4.9),B.hdS,D.ax)
t.aJ(B.hgE,B.h96,D.ax)}return A.nE(i,0,Math.atan2(j[2],j[3])-1.5707963267948966,new A.q(j[4],0,j[5]))},
iaQ(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=C.a([],x.z),i=new A.fk(j)
i.f=1
i.e=90
w=new A.fBG(i)
for(v=$.bG_(),u=v.length,t=0;t<v.length;v.length===u||(0,C.L)(v),++t){s=v[t]
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
fFx:function fFx(){},
aTJ:function aTJ(d,e,f){this.a=d
this.b=e
this.c=f},
bxx:function bxx(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=-1},
fj0:function fj0(d,e){this.a=d
this.b=e},
bKI:function bKI(d,e,f){var _=this
_.a=d
_.b=e
_.c=0
_.d=f},
bKJ:function bKJ(){},
h_i:function h_i(){},
h_j:function h_j(d){this.a=d},
h_g:function h_g(d,e){this.a=d
this.b=e},
h_h:function h_h(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fBG:function fBG(d){this.a=d},
fBH:function fBH(d,e,f,g,h,i){var _=this
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
cB6:function cB6(d,e,f){var _=this
_.a=d
_.b=e
_.d=_.c=$
_.e=f
_.f=null
_.w=_.r=0
_.x=1
_.y=0},
cB8:function cB8(d){this.a=d},
cB9:function cB9(){},
cB7:function cB7(){},
hA8(d){return d.b==="hq"?12:D.o.E(D.k.bf((210+D.o.F(B.zp[d.f].l(),5)*24)/22),8,14)},
h1e(d,e,f){var w=new A.bKu(d,e,f,B.aAL,B.a3b,C.a([],x.a),C.aX(x.S))
w.at=new A.b9Y(null,-138,138,12,316,0,296,3.141592653589793,w.ccx())
w.ax=w.cHv()
return w},
pG:function pG(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bKu:function bKu(d,e,f,g,h,i,j){var _=this
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
bKv:function bKv(){},
bKC:function bKC(d){this.a=d},
bKD:function bKD(d){this.a=d},
bKE:function bKE(d){this.a=d},
bKF:function bKF(d){this.a=d},
bKw:function bKw(d){this.a=d},
bKx:function bKx(){},
bKy:function bKy(){},
bKz:function bKz(d){this.a=d},
bKA:function bKA(d){this.a=d},
bKB:function bKB(d){this.a=d},
h1l(d,e){var w=C.a([],x.ha),v=C.a([new A.M0(),new A.M0(),new A.M0()],x.gQ),u=C.a([],x.s),t=new C.e4()
t.cY(e)
w=new A.aU8(d,t,w,v,u)
w.bzE(d,e)
return w},
hff(d,e){var w,v,u,t,s,r,q,p,o=J.a6(e),n=x.fF,m=n.a(o.h(e,"wired"))
if(m==null)m=D.uS
w=n.a(o.h(e,"plumbed"))
if(w==null)w=D.uS
for(o=d.gqT(),n=o.length,v=J.a6(w),u=J.a6(m),t=0;t<o.length;o.length===n||(0,C.L)(o),++t){s=o[t]
r=""+s.a
q=u.h(m,r)
if(C.r5(q)){s.ay=!q
s.CW=null}p=v.h(w,r)
if(C.r5(p)){r=s.c
r=r==="bathroom"||r==="kitchen"}else r=!1
if(r){s.ch=!p
s.fr=null}}},
h1m(d){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=J.a6(d),j=C.aK(k.h(d,"seed"))
j=j==null?l:D.k.N(j)
if(j==null)j=1
w=C.aK(k.h(d,"clock"))
w=w==null?l:D.k.N(w)
v=A.h1l(j,(w==null?0:w)+7)
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
r=new A.I7(D.k.N(C.e8(w.h(m,"id"))),D.k.N(C.e8(w.h(m,"res"))),C.cQ(w.h(m,"kind")),C.cQ(w.h(m,"msg")),D.k.N(C.e8(w.h(m,"reward"))))
r.f=C.e8(w.h(m,"age"))
j.push(r)}return v},
ak0(d){return A.hGv(d)},
hGv(d){var w=0,v=C.j(x.H),u,t=2,s=[],r,q,p,o,n
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
return C.b(r.au("Int","ngmy_construction_bonus_stars",p+d),$async$ak0)
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
hfg(d,e,f){return Math.max(6,12+4*f-2*d-5*e)},
aUa(){var w=0,v=C.j(x.dy),u,t=2,s=[],r,q,p,o,n
var $async$aUa=C.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return C.b(C.az(),$async$aUa)
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
bLj:function bLj(){},
bLg:function bLg(d){this.a=d},
bLh:function bLh(d,e){this.a=d
this.b=e},
bLi:function bLi(){},
bLn:function bLn(d){this.a=d},
bLl:function bLl(d){this.a=d},
bLm:function bLm(){},
bLk:function bLk(d){this.a=d},
bLo:function bLo(){},
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
dSP:function dSP(d,e){this.a=d
this.b=e},
dSQ:function dSQ(d){this.a=d},
dT1:function dT1(){},
dSW:function dSW(d,e){this.a=d
this.b=e},
dSX:function dSX(d){this.a=d},
dSV:function dSV(d){this.a=d},
dSL:function dSL(){},
dSM:function dSM(){},
dT4:function dT4(){},
dT5:function dT5(){},
dT3:function dT3(d,e){this.a=d
this.b=e},
dT2:function dT2(d,e){this.a=d
this.b=e},
dSK:function dSK(d,e){this.a=d
this.b=e},
dSR:function dSR(d,e,f){this.a=d
this.b=e
this.c=f},
dSS:function dSS(d,e,f){this.a=d
this.b=e
this.c=f},
dST:function dST(d,e,f){this.a=d
this.b=e
this.c=f},
dSU:function dSU(d,e){this.a=d
this.b=e},
dSO:function dSO(d,e,f){this.a=d
this.b=e
this.c=f},
dSN:function dSN(d,e,f){this.a=d
this.b=e
this.c=f},
dSZ:function dSZ(d,e){this.a=d
this.b=e},
dT_:function dT_(d,e){this.a=d
this.b=e},
dT0:function dT0(d){this.a=d},
dSY:function dSY(d){this.a=d},
dT6:function dT6(d){this.a=d},
dT7:function dT7(){},
acO:function acO(d,e,f){this.c=d
this.d=e
this.a=f},
bfH:function bfH(d,e){this.b=d
this.a=e},
oo(d,e,f,g,h,i,j,k,l,m,n){return new A.Ms(g,m,d,k,e,f,n,h,l,i,j)},
t7(d){return D.d.fY($.hEj(),new A.fCh(d))},
aih(d,e){var w,v,u=d.e,t=new C.N(u,new A.h_T(),C.T(u).k("N<1,n>")).fJ(0)
u=e.b
w=C.a7(u).k("bd<2>")
v=C.df(new C.bd(u,w),w.k("M.E"))
if(d.a==="cord4"&&e.r)return!1
return t.d0(0,v.gkU(v))},
hAa(d,e,f,g,h){var w,v
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
h9G(d,e){var w,v,u,t,s,r,q=new A.fBt(),p=new A.fBu(),o=C.a([],x.bm)
for(w=e.b,w=new C.cD(w,C.a7(w).k("cD<1,2>")).gaf(0),v=d.f,u=d.e;w.C();){t=w.d
t.toString
s=D.d.fY(v,new A.fBr(t))
r=D.d.fY(u,new A.fBs(t))
o.push(new A.a4l(new A.cCV(r.a,q.$1(r.e)),new A.czk(p.$1(s.f))))}return o},
fS9(d){var w=d.e,v=C.T(w).k("Z<1>")
return new A.bMK(new C.Z(w,new A.fSa(),v).gL(0),new C.Z(w,new A.fSb(),v).gL(0),d.y)},
La(d,e){var w,v,u,t,s,r,q,p,o,n,m
if(d.a==="cord4"&&e.r)return B.hiF
w=A.hvz(A.fS9(d),A.h9G(d,e),e.y)
v=w.c
u=new A.fCu(w)
t=w.b
s=t.length===0?null:D.d.f4(t,new A.fCr())
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
n=D.d.fY(p,new A.fCs(o))
if(!n.c.t(0,o.b)){t=n.d
return new A.axQ("dead","The "+D.d.fY(d.e,new A.fCt(o)).b+" is on the wrong terminal ("+n.b+"). "+t,!1,!1,!1,"none",t)}}m=t?"Wired correctly. Hot, neutral and ground are all in the right place, and every safety check passes.":s.c+" "+v.c
t=s==null?null:s.e
if(t==null)t=""
return new A.axQ(r,m,v.d,v.e,v.f,v.b,t)},
ha7(d){var w,v,u,t
for(w=$.h0w(),v=w.length,u=0;u<v;++u){t=w[u]
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
bD_(b7,b8,b9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1="nema",b2="terminal",b3=C.a([],x.z),b4=new A.fk(b3),b5=A.ha7(b7.a),b6=b5==="light"||b5==="fan"
if(b9){b4.b=1
b4.ht(B.hbz,B.aXN,B.vP,3)
b4.ht(B.hcT,B.aXN,B.vP,3)
b4.ht(B.hfG,B.aY8,B.vP,2)
b4.ht(B.hdz,B.aY8,B.vP,2)
b4.b=2
b4.mj(B.hb6,B.aXG,B.iz,0.05,3)
b4.mj(B.hay,B.aXG,B.iz,0.05,3)
b4.mj(B.haq,B.hgc,B.iz,0.05,2)}w=b7.w.length===0
v=A.hqE(b4,w?b5:"outlet",!0)
u=new A.fzH(b4,b8,b5,b6)
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
u.$5(10,t.a7(0,B.h3n),B.hfJ,"blackLine",B.Fo)
u.$5(13,f.a7(0,B.hfU),B.h8F,"blackLoad",B.Fo)
u.$5(12,t.a7(0,B.hcq),B.h7N,"ground",B.tY)
b4.b=6
r=x.o
b4.j8(C.a([t.a7(0,B.aXD),B.h44,B.VF],r),0.075,B.mx,!1,0.3,8)
b4.j8(C.a([f.a7(0,B.aXD),B.hbH,B.VF],r),0.075,B.mx,!1,0.3,8)
b4.BF(B.VF,B.hfB,0.28,B.aff,0.18,0.3,10)}else{u.$5(10,t.a7(0,B.h8Q),B.h3R,"black",B.Fo)
u.$5(11,t.a7(0,B.hak),B.hbS,"white",B.mx)
u.$5(12,t.a7(0,B.haK),B.haA,"ground",B.tY)}if(b6)A.hrG(b4,b5,b8)
else A.hrj(b4,b5,A.aOQ(b5,b8),b8.x,!1,s,b8.r)
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
b4.fP(new A.q(a0.a+o,a0.b+0,a0.c+n),0.36,a1,4,8,0.1)}b4.d=1}if(b8.c>=2&&!b6)A.htM(b4,b8.x)
r=!1
if(b8.c>=2)if(b8.d)r=b5==="outlet"||b5==="gfci"||D.a.a0(b5,b1)
if(r)A.i8z(b4,b8.a&&!b8.x)
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
a5=C.H([1,B.edU,2,B.ee7,3,new A.cV(r,"A box that holds the wire connections. Every connection must be inside a box, never loose in the wall or the ceiling."+o,new A.q(0,0,-1.2),9),4,new A.cV(m,"The yellow jacket holds three wires: black (hot), white (neutral) and bare copper (ground). Yellow means 12 gauge wire for a 20 amp circuit. White jackets are 14 gauge for 15 amps.",new A.q(-0.4,1.5,-1.8),8),5,B.eeu,10,new A.cV("Black wire: hot","The hot wire brings the power from the breaker. It is the dangerous one. "+l,new A.q(-0.8,-0.8,1.2),7),13,B.edG,11,new A.cV("White wire: neutral","The neutral wire carries the power back to the panel. "+h,new A.q(0,-0.8,1.2),7),12,new A.cV("Bare copper wire: ground","The ground wire is a safety path. If a wire touches metal, the current runs down the ground instead of through you. "+g,new A.q(0.5,-0.8,1.2),7),6,B.ee5,20,new A.cV(a2,n,new A.q(0,-0.2,a3),9),40,B.edy,21,B.eea,22,B.eet,23,B.ee3,24,B.ee8,25,B.edX,26,B.eeb,27,B.een,28,B.edS,30,B.edB,31,B.edz,51,B.ee6,52,B.edD,53,B.eef,54,new A.cV(a4,p,new A.q(0,0,6.4),9),55,B.eep],x.S,x.q)
if(s){a5.n(0,20,new A.cV(b7.b,b7.c,new A.q(0,-0.2,A.aOQ(b5,b8)),9))
for(s=b7.e,r=s.length,k=0;k<r;++k)a5.n(0,60+k,new A.cV(s[k].b,"Pick this wire up, then tap the screw it belongs on. Tap it again on the screw to take it off.",new A.q(-0.8+k*0.5,-0.8,1.2),7))
for(s=b7.f,r=s.length,e=0;e<r;++e){a6=s[e]
p=a6.a
a5.n(0,p,new A.cV(a6.b,a6.d,A.aQ8(b5,p,b8),5))}}a7=C.a([],x.E)
if(b8.f&&b8.c===0)for(s=b7.f,r=s.length,e=0;e<r;++e){d=s[e]
a0=A.aQ8(b5,d.a,b8)
a8=d.f
A:{p="hot"===a8
if(p){o=B.eUH
break A}if("neutral"===a8){o=B.eKs
break A}if("ground"===a8){o=B.eN3
break A}o=B.ezf
break A}a9=o.a
if(b6){B:{if(p){n="BLACK NUT \xb7 HOT"
break B}if("neutral"===a8){n="WHITE NUT \xb7 NEUTRAL"
break B}n="GROUND"
break B}i=n}else i=w?a9:d.b
if(b6){C:{if(p){p=B.h9X
break C}if("neutral"===a8){p=B.h9Q
break C}p=B.hgr
break C}b0=p}else{p=a0.a
if(p>0.4)n=3.8
else n=p<-0.4?-4.2:0
b0=new A.q(n,Math.abs(p)<0.4?-3:-0.4,1)}a7.push(new A.hh(new A.q(a0.a+b0.a,a0.b+b0.b,a0.c+b0.c),i,o.b,0))}if(b8.a&&b8.c===0)a7.push(B.c1W)
return new A.tU(b3,a5,a7,B.wG,null,0)},
hqE(d,e,f){var w,v,u=e==="light"||e==="fan"
d.b=3
if(u){d.dq(B.aYa,B.aXM,2.2,B.y5,0.3,18)
d.a4y(B.aXM,B.dX,2.2,B.y5,!1,!0,0.3,18)}else{d.aR(B.aYa,B.hbg,B.y5,0.3)
d.aR(B.h8h,B.aXq,B.y5,0.3)
d.aR(B.h4K,B.aXq,B.y5,0.3)
d.aR(B.hau,B.aXR,B.y5,0.3)
d.aR(B.h9O,B.aXR,B.y5,0.3)}w=C.a([],x.o)
v=new A.fkM(d,f,w)
if(e==="switch"){v.$2(4,B.d4c)
v.$2(5,B.d2c)}else v.$2(4,B.dgR)
return w},
hAf(d,e){var w,v=$.h0w(),u=new C.Z(v,new A.h_S(d),C.T(v).k("Z<1>"))
if(!u.gan(0)){w=e-60
return w>=0&&w<u.gI(0).e.length?u.gI(0).e[w].a:null}return A.i39(d,e)},
i39(d,e){var w
A:{if(10===e){w=d==="switch"?"blackLine":"black"
break A}if(13===e){w="blackLoad"
break A}if(11===e){w="white"
break A}if(12===e){w="ground"
break A}w=null
break A}return w},
hrj(d,e,f,g,h,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
if(D.a.a0(e,"terminal")){A.i8y(d,e,f,g,a1)
return}w=new A.q(0,-0.2,f)
v=e==="switch"
u=e==="gfci"
if(g)t=B.tU
else t=v?B.bl4:B.YH
s=u?3.1:2.95
d.e=0
d.b=20
if(!h){d.aR(w.a7(0,B.h6U),new A.q(1.5,s,1.3),t,0.25)
d.e=0.15
d.b=26
r=w.a7(0,B.h6B)
d.aR(r,B.hfD,g?B.afQ:B.Bs,0.8)
d.aJ(w.a7(0,B.hcn),B.hhz,B.xS)}d.e=0.3
d.b=27
r=w.a7(0,B.h9j)
d.aR(r,new A.q(1.3,u?2.85:2.7,0.16),t,0.3)
if(v){d.e=0.7
d.b=28
r=w.a7(0,B.hbF)
d.aR(r,B.h8N,g?B.tU:H.YR,0.35)
r=w.a7(0,B.hf9)
d.aR(r,B.hdy,g?B.tU:B.ag5,0.35)}else{d.e=0.6
if(D.a.a0(e,"nema"))A.i41(d,w,e,g)
else{r=u?G.avV:B.duB
q=r.length
p=f+0.47
o=f+0.46
n=f+0.5
m=0
for(;m<q;++m){l=r[m]
d.b=27
k=-0.2+(l+0.04)
d.aJ(new A.q(-0.28,k,p),B.hbf,B.Fx)
d.aJ(new A.q(0.28,k,p),B.h9r,B.Fx)
k=-0.2+(l-0.32)
d.dF(new A.q(0,k,o),new A.q(0,k,n),0.11,B.Fx,10)}if(u){d.e=0.7
d.b=28
d.aR(w.a7(0,B.hc7),B.aXx,B.boP,0.3)
d.aR(w.a7(0,B.hfV),B.aXx,B.aj5,0.3)}}}if(h){d.e=0
return}j=u?0.95:0.85
i=u?-0.75:-0.55
r=new A.fm5(d,w)
if(!v||a0){r.$6$taped(23,-1,j,B.agu,B.ah1,u)
r.$5(24,-1,i,B.agu,B.ah1)}r.$6$taped(21,1,j,B.Bh,B.FW,u)
r.$5(22,1,i,B.Bh,B.FW)
d.e=0.9
d.b=25
d.dq(w.a7(0,B.har),w.a7(0,B.hgw),0.18,B.aiH,0.7,12)
d.aJ(w.a7(0,B.h9S),B.haw,D.dY)
d.aR(w.a7(0,B.h74),B.hcb,B.bdH,0.6)
d.e=0},
hrG(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=e==="fan",i=A.aOQ(e,f)
d.e=0
d.b=55
w=i-0.3
v=i+0.3
u=j?3.3:3.5
t=f.x?B.tU:B.blC
d.dq(new A.q(0,0,w),new A.q(0,0,v),u,t,0.45,20)
d.b=54
if(j){u=i+4.2
d.dq(new A.q(0,0,v),new A.q(0,0,u),0.45,B.bhp,0.5,10)
v=i+7.4
d.dq(new A.q(0,0,u),new A.q(0,0,v),3.6,B.XC,0.5,18)
d.dq(new A.q(0,0,v),new A.q(0,0,i+8.6),1.6,B.bqc,0.7,14)}else{d.d=0.92
v=f.x?B.tU:B.biy
d.fP(new A.q(0,0,i+1.2),3.6,v,6,14,0.7)
d.d=1}v=d.b=54
s=[B.eKB,B.evW,B.eSc]
for(u=x.o,r=i-3.2,q=0,p=0;p<3;++p){t=s[p]
o=f.c===0
d.b=o?B.cGu[q]:v;++q
n=o?r:i
o=t.b.a
d.j8(C.a([new A.q(o,-0.3,w),new A.q(o,-0.3,n+0.4)],u),0.07,t.a,!1,0.3,6)}if(f.c===0)for(w=[B.eDg,B.eMa,B.eV8],v=f.b,p=0;p<3;++p){m=w[p]
u=m.a
l=A.aQ8(e,u,f)
d.b=u
d.e=0.8
t=l.a+0
o=l.b+0
k=l.c
d.dq(new A.q(t,o,k+-0.2),new A.q(t,o,k+0.3),0.09,B.tY,0.6,6)
if(v.aj(0,u))d.BF(new A.q(t,o,k+-0.5),new A.q(t,o,k+0.9),0.4,m.b,0.26,0.4,8)
d.e=0}},
htM(d,e){var w
d.e=0.4
d.b=30
w=e?B.tU:B.bcK
d.aR(B.hbY,B.aXT,w,0.3)
d.aR(B.hb4,B.aXT,w,0.3)
d.aR(B.h4E,B.aY1,w,0.3)
d.aR(B.h5J,B.h7g,w,0.3)
d.aR(B.hgo,B.aY1,w,0.3)
d.dq(B.h9z,B.hb0,0.1,B.Bs,0.8,10)
d.e=0},
i8z(d,e){var w,v
d.b=31
for(w=0;w<2;++w){v=B.d6T[w]
d.dq(new A.q(v,0.52,0.2),new A.q(v,0.52,1.9),0.04,B.Bs,0.8,6)}d.aR(B.h1N,B.hfo,B.bib,0.35)
d.bcm(B.aXO,0.2,e?D.Y5:B.bmo,0.9)
if(e){d.d=0.35
d.fP(B.aXO,0.5,D.Y5,4,8,0)
d.d=1}},
i41(d,e,f,g){var w,v,u,t,s
d.b=27
d.e=0.62
w=e.a7(0,B.haf)
v=e.a7(0,B.hgd)
d.dq(w,v,0.64,g?B.tU:B.aii,0.35,28)
d.e=0.7
u=new A.frD(e,d)
t=new A.frC(d,e)
s=new A.frB(u)
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
i8y(d,e,f,g,h){var w,v,u=new A.q(0,-0.2,f)
d.e=0
d.b=26
w=u.a7(0,B.ha8)
d.aR(w,B.h7y,g?B.afQ:B.Bs,0.8)
d.e=0.2
d.b=20
w=u.a7(0,B.hfR)
d.aR(w,B.hbE,g?B.tU:B.aii,0.25)
d.e=0.3
for(w=f+0.5,v=0;v<2;++v)d.aJ(new A.q(0+B.d55[v],0.14999999999999997,w),B.hat,B.bql)
d.b=27
d.e=0.4
d.aJ(u.a7(0,B.hdw),B.ab4,B.Fo)
d.aJ(u.a7(0,B.hh4),B.ab4,B.mx)
d.aJ(u.a7(0,B.hhh),B.ab4,B.vL)
w=new A.fyo(d,u)
w.$5(23,-1.15,0.35,B.Bh,B.FW)
w.$5(21,0,0.35,B.Bh,B.FW)
w.$5(22,1.15,0.35,B.Bh,B.FW)
d.e=0.9
d.b=25
d.dq(u.a7(0,B.h9G),u.a7(0,B.hcO),0.26,B.aiH,0.7,12)
d.aJ(u.a7(0,B.hhp),B.h8b,D.dY)
if(h){d.e=0.8
d.b=40
d.aR(u.a7(0,B.h9t),B.h8G,B.tY,0.7)}d.e=0},
fm:function fm(d,e,f,g,h,i){var _=this
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
fDH:function fDH(){},
fDI:function fDI(){},
fDJ:function fDJ(){},
fDK:function fDK(){},
fDL:function fDL(){},
fCh:function fCh(d){this.a=d},
h_T:function h_T(){},
axQ:function axQ(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.r=i
_.w=j},
fBt:function fBt(){},
fBu:function fBu(){},
fBr:function fBr(d){this.a=d},
fBs:function fBs(d){this.a=d},
fSa:function fSa(){},
fSb:function fSb(){},
fCu:function fCu(d){this.a=d},
fCv:function fCv(d){this.a=d},
fCr:function fCr(){},
fCs:function fCs(d){this.a=d},
fCt:function fCt(d){this.a=d},
fzH:function fzH(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fzI:function fzI(d){this.a=d},
fkM:function fkM(d,e,f){this.a=d
this.b=e
this.c=f},
h_S:function h_S(d){this.a=d},
fm5:function fm5(d,e){this.a=d
this.b=e},
frD:function frD(d,e){this.a=d
this.b=e},
frE:function frE(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
frC:function frC(d,e){this.a=d
this.b=e},
frB:function frB(d){this.a=d},
fyo:function fyo(d,e){this.a=d
this.b=e},
a2l(d){var w
A:{if("outlet"===d){w="Outlet"
break A}if("gfci"===d){w="GFCI outlet"
break A}if("switch"===d){w="Light switch"
break A}if("light"===d){w="Ceiling light"
break A}if("fan"===d){w="Ceiling fan"
break A}w=A.t7(d).b
break A}return w},
fky(d,e,f){var w
A:{if("ground"===d){w=y.t
break A}if("neutral"===d){w=y.I
break A}w=e.a===25?y.T:y.S
break A}return w},
fDM:function fDM(){},
fDN:function fDN(){},
fDO:function fDO(){},
fDP:function fDP(){},
fDQ:function fDQ(){},
fDR:function fDR(){},
fDS:function fDS(){},
fDT:function fDT(){},
fDU:function fDU(){},
fDV:function fDV(){},
fDA:function fDA(){},
fDB:function fDB(){},
fDC:function fDC(){},
fDD:function fDD(){},
fDE:function fDE(){},
fDF:function fDF(){},
fDG:function fDG(){},
aPW(d){return D.d.dN(B.a45,new A.fzt(d),new A.fzu())},
hcu(d,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i={},h=new A.h_P(),g=new A.h_M(),f=d.c,e=f==="hall"
if(!e&&d.p1!=="back"){w=a0.e?d.gh_(0)-14:Math.min(a0.d,d.gh_(0)-14)
v=h.$1(w)
return new A.abM(w,v,d.gh_(0)/2,g.$1(v))}if(e&&a1<2){w=a0.e?d.gh_(0)-14:Math.min(a0.d,d.gh_(0)-14)
v=h.$1(w)
return new A.abM(w,v,d.gh_(0)/2,g.$1(v))}if(e){f=C.a([],x.n)
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
f.push(new C.z(n-19,n+19))}}D.d.aZ(f,new A.h_N())
m=i.a=i.b=-e/2+6
l=new A.h_O(i)
for(e=f.length,t=0;t<f.length;f.length===e||(0,C.L)(f),++t){u=f[t]
k=u.a
if(k>m)l.$2(m,Math.min(k,q))
m=Math.max(m,u.b)}if(m<q)l.$2(m,q)
j=Math.max(30,i.a-i.b-4)
w=a0.e?j:Math.min(a0.d,j)
v=h.$1(w)
return new A.abM(w,v,(i.b+i.a)/2,g.$1(v))},
zj(d,e,f,g,h,i,j,k){var w=x.S
return new A.a5n(d,e,f,g,h,i,j,k,C.a([],x._),C.a([0,0,0],x.t),C.aX(w),C.U(w,x.i),C.U(w,x.cR),C.U(w,w),C.U(w,x.gh),C.U(w,x.N),C.a([],x.cX),C.aX(w),C.aX(w))},
aWC(d){var w=new A.aWB(d)
w.c8q()
return w},
hJk(d){var w=new A.aWB(7)
w.bzR(d)
return w},
ins(d){var w,v=d.c
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
nO:function nO(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fzt:function fzt(d){this.a=d},
fzu:function fzu(){},
abM:function abM(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
h_P:function h_P(){},
h_M:function h_M(){},
h_N:function h_N(){},
h_O:function h_O(d){this.a=d},
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
bUD:function bUD(){},
bUC:function bUC(){},
aWB:function aWB(d){var _=this
_.a=""
_.b=d
_.c=!1
_.d=$
_.e=0},
bVd:function bVd(){},
bVe:function bVe(){},
bVf:function bVf(d){this.a=d},
bVg:function bVg(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bVh:function bVh(d,e){this.a=d
this.b=e},
bVl:function bVl(d){this.a=d},
bVi:function bVi(d,e){this.a=d
this.b=e},
bVk:function bVk(d,e,f){this.a=d
this.b=e
this.c=f},
bVj:function bVj(d,e,f){this.a=d
this.b=e
this.c=f},
bVp:function bVp(){},
bVo:function bVo(){},
bVn:function bVn(){},
bVm:function bVm(){},
b12(d,e,f){return new A.IW(f,d,e,null)},
hvy(d){var w=A.vF(B.ig,d.e*3.141592653589793/2)
return new C.z(w.a,w.c)},
ia0(b3,b4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8=null,a9="A helicopter with its billboard",b0={},b1=C.a([],x.dI),b2=x.o
b0.a=C.a([],b2)
b0.b=C.a([],b2)
b0.c=C.a([],x.s)
b0.d=!1
w=new A.fA1(b0,b1)
v=new A.fA8(b0)
u=new A.fA3(b3)
t=new A.fA9(b3)
s=new A.fzU(new A.fA2(t),new A.fA_(t,u))
r=new A.fA5(b0,u,s,v)
q=new A.fA6(b0,new A.fA7(r),s)
p=new A.fA4(b0,w,b1)
b2=D.d.t(B.dj1,b4)
o=!b2
n=x._
m=C.a([],n)
for(l=b3.x,k=l.length,j=0;j<l.length;l.length===k||(0,C.L)(l),++j){i=l[j]
h=i.b
if(h==="billboard"||h==="cornersign"||h==="adboard"||h==="tower"||h==="hq")m.push(i)}k=C.T(l).k("Z<1>")
g=new C.Z(l,new A.fzV(),k)
h=C.a([],n)
for(f=l.length,j=0;j<l.length;l.length===f||(0,C.L)(l),++j){i=l[j]
e=i.b
if(e==="house2"||e==="bighouse")h.push(i)}v.$3$note(B.h0R,B.h_W,"Welcome to NGMY Town")
if(!g.gan(0))q.$1(g.gI(0))
if(b4==="city"||o){v.$2(B.heS,B.hee)
v.$2(B.heX,B.hed)
v.$2(B.h0h,B.fZW)
v.$2(B.h5T,B.h2E)
v.$2(B.h5O,B.h2F)
v.$2(B.h0B,B.fZY)
w.$1$speed(200)}if(b4==="billboards"||o){d={}
v.$2(B.hez,B.heu)
v.$3$note(B.h07,B.Ax,"The big NGMY logo board: New Global Movement for Youth")
v.$2(B.h2n,B.Ax)
v.$2(B.h3c,B.Ax)
v.$2(B.h18,B.Ax)
v.$2(B.he3,B.Ax)
v.$2(B.hel,B.Ax)
v.$2(B.hdX,B.hef)
d.a=!g.gaf(0).C()?B.fZX:new A.q(g.gI(0).c,0,g.gI(0).d)
a0=C.C(m,x.eB)
a1=0
for(;;){if(a0.length!==0)m=a1<(o?8:80)
else m=!1
if(!m)break
D.d.aZ(a0,new A.fzW(d))
i=D.d.cz(a0,0)
q.$1(i)
d.a=new A.q(i.c,0,i.d);++a1}w.$1$speed(105)
for(a2=0;a2<2;++a2)b1.push(new A.Mn(B.nC,B.nC,130,6,a9,a8,!1,a8,a2))}if(b4==="edges"){n=C.a([],n)
for(m=l.length,j=0;j<l.length;l.length===m||(0,C.L)(l),++j){i=l[j]
f=i.b
if(f==="adboard"||f==="cornersign")n.push(i)}D.d.aZ(n,new A.fzX(new A.fzT()))
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
r.$7$note(i,150,50,270,330,70,i.b==="bighouse"?"A big house with TV windows":"A house");++a2}a4=new C.Z(h,new A.fzY(),x.am)
if(!a4.gan(0)){i=a4.gI(0)
a5=A.hvy(i)
n=i.c
m=i.d
v.$2(new A.q(n+a5.a*220,110,m+a5.b*220),new A.q(n,45,m))
p.$1(i)}}if(b4==="hospital"||o)for(j=0;j<3;++j){a6=B.dk9[j]
i=new C.Z(l,new A.fzZ(a6),k)
if(!i.gaf(0).C())continue
a7=i.gaf(0)
if(!a7.C())C.b9(C.fr())
r.$7$note(a7.gS(0),160,50,300,360,60,"The "+a6)
a7=i.gaf(0)
if(!a7.C())C.b9(C.fr())
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
_.f2=_.eu=_.ek=!1
_.ab=1
_.ez=400
_.ai=_.fB=!1
_.bE=_.al=null
_.bZ=0
_.dv=""
_.cJ=null
_.eK=p
_.hP=_.hO=0
_.jh=-1
_.it=q
_.ha=!1
_.mO=_.lg=-1e5
_.lB=0
_.c=_.a=_.qS=_.ta=null},
eex:function eex(){},
eeu:function eeu(d){this.a=d},
eev:function eev(d){this.a=d},
eet:function eet(){},
eew:function eew(d){this.a=d},
edg:function edg(d,e,f){this.a=d
this.b=e
this.c=f},
edh:function edh(d){this.a=d},
edf:function edf(d){this.a=d},
edi:function edi(d,e){this.a=d
this.b=e},
ebO:function ebO(d,e){this.a=d
this.b=e},
edK:function edK(d){this.a=d},
ecL:function ecL(d){this.a=d},
ecM:function ecM(d,e){this.a=d
this.b=e},
ecN:function ecN(d,e){this.a=d
this.b=e},
ecO:function ecO(d,e){this.a=d
this.b=e},
ecP:function ecP(d){this.a=d},
ebh:function ebh(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ebf:function ebf(d,e,f){this.a=d
this.b=e
this.c=f},
ebe:function ebe(d,e){this.a=d
this.b=e},
ebg:function ebg(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ebc:function ebc(d,e){this.a=d
this.b=e},
ebd:function ebd(d,e,f){this.a=d
this.b=e
this.c=f},
ebb:function ebb(d,e){this.a=d
this.b=e},
ebq:function ebq(d){this.a=d},
ebr:function ebr(d){this.a=d},
ebs:function ebs(d){this.a=d},
ecE:function ecE(d){this.a=d},
ecG:function ecG(d){this.a=d},
ecF:function ecF(d){this.a=d},
ecH:function ecH(d){this.a=d},
ecD:function ecD(d){this.a=d},
ecI:function ecI(d){this.a=d},
ecC:function ecC(d){this.a=d},
ecJ:function ecJ(d){this.a=d},
ecB:function ecB(d){this.a=d},
ecK:function ecK(d){this.a=d},
ecA:function ecA(d){this.a=d},
eaS:function eaS(d){this.a=d},
eaT:function eaT(d){this.a=d},
ebC:function ebC(d){this.a=d},
ebE:function ebE(d){this.a=d},
ebD:function ebD(d){this.a=d},
ebF:function ebF(d){this.a=d},
ebB:function ebB(d){this.a=d},
ebG:function ebG(d){this.a=d},
ebA:function ebA(d){this.a=d},
ebH:function ebH(d){this.a=d},
ebz:function ebz(d){this.a=d},
ebI:function ebI(d){this.a=d},
eby:function eby(d){this.a=d},
ebJ:function ebJ(d){this.a=d},
ebx:function ebx(d){this.a=d},
ebK:function ebK(d){this.a=d},
ebw:function ebw(d){this.a=d},
edI:function edI(){},
edJ:function edJ(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
edG:function edG(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
edF:function edF(d){this.a=d},
edH:function edH(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ec1:function ec1(d){this.a=d},
e9R:function e9R(){},
eea:function eea(){},
eah:function eah(){},
ebX:function ebX(d){this.a=d},
ebW:function ebW(d){this.a=d},
ebY:function ebY(d){this.a=d},
ebV:function ebV(d){this.a=d},
eeb:function eeb(d,e){this.a=d
this.b=e},
ee9:function ee9(d){this.a=d},
edm:function edm(d,e,f){this.a=d
this.b=e
this.c=f},
edn:function edn(d,e){this.a=d
this.b=e},
edl:function edl(d,e){this.a=d
this.b=e},
edk:function edk(d){this.a=d},
edj:function edj(d){this.a=d},
ecl:function ecl(){},
ecm:function ecm(){},
eci:function eci(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
eck:function eck(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ecj:function ecj(d){this.a=d},
ecg:function ecg(d){this.a=d},
ecf:function ecf(d){this.a=d},
ech:function ech(d,e){this.a=d
this.b=e},
ece:function ece(d,e){this.a=d
this.b=e},
ebL:function ebL(d){this.a=d},
ebM:function ebM(d){this.a=d},
edc:function edc(){},
ebo:function ebo(d){this.a=d},
ebn:function ebn(d){this.a=d},
ebp:function ebp(d,e){this.a=d
this.b=e},
eba:function eba(d){this.a=d},
ec2:function ec2(){},
edo:function edo(d,e){this.a=d
this.b=e},
ebm:function ebm(){},
edA:function edA(d){this.a=d},
ebk:function ebk(d){this.a=d},
ebl:function ebl(d,e){this.a=d
this.b=e},
ebj:function ebj(d){this.a=d},
ebi:function ebi(d){this.a=d},
ebS:function ebS(){},
edz:function edz(d,e){this.a=d
this.b=e},
eeo:function eeo(){},
eaU:function eaU(){},
ebP:function ebP(d,e){this.a=d
this.b=e},
ebQ:function ebQ(d){this.a=d},
ebR:function ebR(){},
ebu:function ebu(){},
ebv:function ebv(d){this.a=d},
ec4:function ec4(){},
ec5:function ec5(d,e){this.a=d
this.b=e},
eao:function eao(){},
ean:function ean(){},
eap:function eap(d){this.a=d},
eam:function eam(d){this.a=d},
eaq:function eaq(d){this.a=d},
eal:function eal(d){this.a=d},
ear:function ear(d,e){this.a=d
this.b=e},
eak:function eak(d){this.a=d},
eas:function eas(d,e){this.a=d
this.b=e},
eaj:function eaj(d,e){this.a=d
this.b=e},
eat:function eat(d){this.a=d},
eai:function eai(d){this.a=d},
eaQ:function eaQ(d){this.a=d},
eaR:function eaR(d){this.a=d},
edb:function edb(d,e,f){this.a=d
this.b=e
this.c=f},
ed9:function ed9(d,e,f){this.a=d
this.b=e
this.c=f},
eda:function eda(d,e){this.a=d
this.b=e},
ed5:function ed5(d,e,f){this.a=d
this.b=e
this.c=f},
ed4:function ed4(){},
ed6:function ed6(d,e){this.a=d
this.b=e},
ed7:function ed7(d,e){this.a=d
this.b=e},
ed8:function ed8(d,e){this.a=d
this.b=e},
ecV:function ecV(d,e){this.a=d
this.b=e},
ecS:function ecS(){},
ecT:function ecT(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ecR:function ecR(d,e,f){this.a=d
this.b=e
this.c=f},
ecU:function ecU(d,e,f){this.a=d
this.b=e
this.c=f},
ecQ:function ecQ(d,e){this.a=d
this.b=e},
ee8:function ee8(d){this.a=d},
ee6:function ee6(d){this.a=d},
ee7:function ee7(d,e){this.a=d
this.b=e},
edZ:function edZ(d,e,f){this.a=d
this.b=e
this.c=f},
edY:function edY(){},
ee_:function ee_(){},
ee0:function ee0(d,e){this.a=d
this.b=e},
ee1:function ee1(d,e){this.a=d
this.b=e},
ee2:function ee2(d){this.a=d},
ee3:function ee3(d){this.a=d},
ee4:function ee4(d){this.a=d},
ee5:function ee5(d){this.a=d},
edV:function edV(d){this.a=d},
edT:function edT(d){this.a=d},
edU:function edU(){},
edP:function edP(d,e,f){this.a=d
this.b=e
this.c=f},
edN:function edN(d){this.a=d},
edO:function edO(){},
edQ:function edQ(d,e,f){this.a=d
this.b=e
this.c=f},
edM:function edM(d,e){this.a=d
this.b=e},
edR:function edR(d,e){this.a=d
this.b=e},
edS:function edS(d,e){this.a=d
this.b=e},
edw:function edw(d,e){this.a=d
this.b=e},
edx:function edx(d){this.a=d},
edy:function edy(){},
edW:function edW(d,e){this.a=d
this.b=e},
edL:function edL(d,e){this.a=d
this.b=e},
edD:function edD(d){this.a=d},
edE:function edE(){},
edv:function edv(){},
edC:function edC(){},
eej:function eej(d){this.a=d},
eek:function eek(d){this.a=d},
eel:function eel(d){this.a=d},
eem:function eem(){},
eec:function eec(d){this.a=d},
eed:function eed(d){this.a=d},
eee:function eee(d,e){this.a=d
this.b=e},
eef:function eef(d,e){this.a=d
this.b=e},
eeg:function eeg(d,e){this.a=d
this.b=e},
eeh:function eeh(d,e){this.a=d
this.b=e},
eei:function eei(d,e){this.a=d
this.b=e},
ebt:function ebt(){},
ed1:function ed1(d,e){this.a=d
this.b=e},
ec9:function ec9(d){this.a=d},
ec6:function ec6(){},
ec7:function ec7(){},
ec8:function ec8(){},
ebT:function ebT(){},
ebU:function ebU(d){this.a=d},
edp:function edp(){},
ebN:function ebN(d){this.a=d},
edd:function edd(){},
ede:function ede(d){this.a=d},
edq:function edq(d){this.a=d},
edr:function edr(d){this.a=d},
eds:function eds(d){this.a=d},
ec_:function ec_(d){this.a=d},
ebZ:function ebZ(d){this.a=d},
ec0:function ec0(d){this.a=d},
edt:function edt(d){this.a=d},
edu:function edu(){},
edB:function edB(d){this.a=d},
eco:function eco(){},
ecp:function ecp(d){this.a=d},
ecx:function ecx(d){this.a=d},
ecy:function ecy(){},
ecz:function ecz(d){this.a=d},
ecr:function ecr(d){this.a=d},
ecs:function ecs(d,e){this.a=d
this.b=e},
ecq:function ecq(d,e){this.a=d
this.b=e},
ect:function ect(d,e){this.a=d
this.b=e},
ecw:function ecw(d){this.a=d},
ecu:function ecu(d){this.a=d},
ecn:function ecn(d){this.a=d},
ecv:function ecv(d){this.a=d},
eca:function eca(d){this.a=d},
ecb:function ecb(d){this.a=d},
een:function een(d){this.a=d},
ecd:function ecd(d){this.a=d},
ecc:function ecc(d){this.a=d},
e9Q:function e9Q(d){this.a=d},
e9P:function e9P(d,e,f){this.a=d
this.b=e
this.c=f},
e9K:function e9K(){},
e9L:function e9L(){},
e9M:function e9M(d){this.a=d},
e9N:function e9N(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ec3:function ec3(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
edX:function edX(d,e){this.a=d
this.b=e},
ed2:function ed2(d,e){this.a=d
this.b=e},
ed3:function ed3(d,e){this.a=d
this.b=e},
e9O:function e9O(d,e){this.a=d
this.b=e},
eb_:function eb_(d){this.a=d},
eb0:function eb0(d){this.a=d},
eb1:function eb1(d){this.a=d},
eb2:function eb2(d){this.a=d},
eb3:function eb3(d,e){this.a=d
this.b=e},
eb4:function eb4(d){this.a=d},
eaZ:function eaZ(d){this.a=d},
eb5:function eb5(d,e){this.a=d
this.b=e},
eaY:function eaY(d,e){this.a=d
this.b=e},
eb6:function eb6(d,e){this.a=d
this.b=e},
eaX:function eaX(d,e){this.a=d
this.b=e},
eb7:function eb7(d){this.a=d},
eaW:function eaW(d){this.a=d},
eb8:function eb8(d,e){this.a=d
this.b=e},
eaV:function eaV(d,e){this.a=d
this.b=e},
eb9:function eb9(d,e){this.a=d
this.b=e},
eeq:function eeq(d){this.a=d},
ees:function ees(d){this.a=d},
eep:function eep(d){this.a=d},
eer:function eer(d){this.a=d},
eaC:function eaC(d){this.a=d},
eaD:function eaD(d){this.a=d},
eaE:function eaE(d){this.a=d},
eaI:function eaI(d){this.a=d},
eaJ:function eaJ(d){this.a=d},
eaK:function eaK(d){this.a=d},
eaB:function eaB(d){this.a=d},
eaL:function eaL(d){this.a=d},
eaA:function eaA(d){this.a=d},
eaM:function eaM(d){this.a=d},
eaz:function eaz(d){this.a=d},
eaN:function eaN(d){this.a=d},
eaO:function eaO(d){this.a=d},
eay:function eay(d){this.a=d},
eaP:function eaP(d){this.a=d},
eax:function eax(d){this.a=d},
eaF:function eaF(d){this.a=d},
eaw:function eaw(d){this.a=d},
eaG:function eaG(d){this.a=d},
eav:function eav(d){this.a=d},
eaH:function eaH(d){this.a=d},
eau:function eau(d){this.a=d},
e9X:function e9X(d){this.a=d},
eaa:function eaa(d){this.a=d},
ea9:function ea9(){},
e9Y:function e9Y(d){this.a=d},
e9Z:function e9Z(d){this.a=d},
eab:function eab(){},
ea1:function ea1(d,e){this.a=d
this.b=e},
eac:function eac(d){this.a=d},
e9W:function e9W(d){this.a=d},
ead:function ead(d){this.a=d},
eae:function eae(d){this.a=d},
e9V:function e9V(d){this.a=d},
eaf:function eaf(d){this.a=d},
eag:function eag(d){this.a=d},
ea_:function ea_(d){this.a=d},
e9U:function e9U(d){this.a=d},
ea0:function ea0(d){this.a=d},
e9T:function e9T(d){this.a=d},
ea2:function ea2(d){this.a=d},
ea3:function ea3(d){this.a=d},
ea4:function ea4(d){this.a=d},
ea5:function ea5(d){this.a=d},
ea6:function ea6(d){this.a=d},
ea7:function ea7(d){this.a=d},
ea8:function ea8(d){this.a=d},
e9S:function e9S(){},
ed0:function ed0(d){this.a=d},
ecY:function ecY(d,e,f){this.a=d
this.b=e
this.c=f},
ecZ:function ecZ(d,e){this.a=d
this.b=e},
ecX:function ecX(d){this.a=d},
ed_:function ed_(d,e){this.a=d
this.b=e},
ecW:function ecW(d){this.a=d},
bk1:function bk1(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
dvw:function dvw(d,e){this.a=d
this.b=e},
bjr:function bjr(d,e){this.b=d
this.a=e},
aJ2:function aJ2(d,e){this.c=d
this.a=e},
bu5:function bu5(){this.c=this.a=this.d=null},
f7A:function f7A(d,e){this.a=d
this.b=e},
f7z:function f7z(d){this.a=d},
f7C:function f7C(d){this.a=d},
f7D:function f7D(d){this.a=d},
f7E:function f7E(d){this.a=d},
f7B:function f7B(d){this.a=d},
f24:function f24(d,e,f){var _=this
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
fA1:function fA1(d,e){this.a=d
this.b=e},
fA8:function fA8(d){this.a=d},
fA3:function fA3(d){this.a=d},
fA9:function fA9(d){this.a=d},
fA2:function fA2(d){this.a=d},
fA_:function fA_(d,e){this.a=d
this.b=e},
fA0:function fA0(d,e){this.a=d
this.b=e},
fzU:function fzU(d,e){this.a=d
this.b=e},
fA5:function fA5(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fA7:function fA7(d){this.a=d},
fA6:function fA6(d,e,f){this.a=d
this.b=e
this.c=f},
fA4:function fA4(d,e,f){this.a=d
this.b=e
this.c=f},
fzV:function fzV(){},
fzW:function fzW(d){this.a=d},
fzT:function fzT(){},
fzX:function fzX(d){this.a=d},
fzY:function fzY(){},
fzZ:function fzZ(d){this.a=d},
aK0:function aK0(d,e,f){this.c=d
this.d=e
this.a=f},
bwg:function bwg(){this.d=!1
this.c=this.a=null},
fdi:function fdi(d){this.a=d},
fdh:function fdh(d){this.a=d},
hl7(){var w=$.hl6
return w==null?$.hl6=new A.cgE().$0():w},
ikk(d,e,f){var w,v,u,t,s,r,q,p,o,n=null,m=e.a,l=e.b,k=new C.a3(0,0,0+m,0+l),j=C.bs(k,D.it)
$.S()
w=C.I()
w.sam(B.c6h.aA(0,k))
d.az(j,w)
v=C.I()
v.b=D.a9
v.r=F.fA.gp(0)
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
l.r=H.ahn.gp(0)
d.ad(u,t*1.1,l)
l=C.I()
l.r=F.fA.gp(0)
d.ad(u,t,l)
l=C.I()
l.r=B.Fj.gp(0)
d.ad(u,t*0.9,l)
l=C.I()
l.b=D.a9
l.r=E.jN.gp(0)
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
d.oD(s,new C.a3(0,0,m,l),p,j)}else{o=C.fx(n,n,n,n,C.cS(n,n,n,n,n,n,n,n,n,C.l(n,n,E.jN,n,n,n,n,n,n,n,n,t*0.6,n,n,D.u,n,n,!0,n,n,n,n,n,n,n,n),"NGMY"),D.a4,D.bY,n,D.dA,D.bW)
o.el()
m=o.b
l=m.c
m=m.a.c
o.a3(d,u.aE(0,new C.t(l/2,m.gbb(m)/2)))}},
hze(d,e,f){var w,v,u,t,s,r,q,p,o=null,n=e.ej(D.I),m=e.gdD()/2
$.S()
w=C.I()
w.r=F.fA.gp(0)
d.ad(n,m,w)
w=C.I()
w.r=B.Fj.gp(0)
d.ad(n,m*0.9,w)
w=C.I()
w.b=D.a9
w.r=E.jN.gp(0)
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
d.oD(v,new C.a3(0,0,w,t),r,q)}else{p=C.fx(o,o,o,o,C.cS(o,o,o,o,o,o,o,o,o,C.l(o,o,E.jN,o,o,o,o,o,o,o,o,m*0.6,o,o,D.u,o,o,!0,o,o,o,o,o,o,o,o),"NGMY"),D.a4,D.bY,o,D.dA,D.bW)
p.el()
w=p.b
t=w.c
w=w.a.c
p.a3(d,n.aE(0,new C.t(t/2,w.gbb(w)/2)))}},
H7(d,e,f,g,h){var w,v,u,t,s,r,q,p,o,n,m=null,l=e.a,k=e.b,j=new C.a3(0,0,0+l,0+k),i=e.gdD()*0.08
i=C.bs(j,new C.aP(i,i))
$.S()
w=C.I()
w.sam(B.arR.aA(0,j))
d.az(i,w)
w=j.cr(-(e.gdD()*0.045))
i=e.gdD()*0.06
i=C.bs(w,new C.aP(i,i))
w=C.I()
w.b=D.a9
w.r=F.fA.gp(0)
w.c=e.gdD()*0.035
d.az(i,w)
v=k*0.33
u=new C.t(k*0.6,k*0.5)
w=C.I()
w.r=F.fA.gp(0)
d.ad(u,v,w)
w=C.I()
w.r=B.Fj.gp(0)
d.ad(u,v*0.88,w)
t=$.Wa
s=C.bK(u,v*1.15,v*1.4)
if(t!=null){i=t.c
w=t.d
r=Math.min((s.c-s.a)/i,(s.d-s.b)/w)
q=C.bK(s.gbL(),w*r,i*r)
p=C.I()
p.Q=D.ci
d.oD(t,new C.a3(0,0,i,w),q,p)}else{o=C.fx(m,m,m,m,C.cS(m,m,m,m,m,m,m,m,m,C.l(m,m,E.jN,m,m,m,m,m,m,m,m,v*0.55,m,m,D.u,m,m,!0,m,m,m,m,m,m,m,m),"NGMY"),D.a4,D.bY,m,D.dA,D.bW)
o.el()
i=o.b
w=i.c
i=i.a.c
o.a3(d,u.aE(0,new C.t(w/2,i.gbb(i)/2)))}n=k*1.08
l=new A.fRt(l-n-k*0.2,d,n)
l.$4(g,k*0.36,D.c,k*0.16)
l.$4(h,k*0.14,F.fA,k*0.62)},
huS(d){return 210+D.o.F(d.l(),5)*24},
fRp(d,e,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k="NEW GLOBAL",j="MOVEMENT",i="FOR YOUTH",h=e.a,g=e.b,f=new C.a3(0,0,0+h,0+g)
A:{if(0===a1){w=B.arR
break A}if(1===a1){w=B.c66
break A}w=B.c48
break A}v=e.gdD()*0.06
v=C.bs(f,new C.aP(v,v))
$.S()
u=C.I()
u.sam(w.aA(0,f))
d.az(v,u)
t=C.I()
t.b=D.a9
w=a1===2
t.r=(w?E.jN:F.fA).gp(0)
t.c=e.gdD()*0.04
v=f.cr(-(e.gdD()*0.05))
u=e.gdD()*0.05
d.az(C.bs(v,new C.aP(u,u)),t)
u=f.cr(-(e.gdD()*0.1))
v=e.gdD()*0.03
v=C.bs(u,new C.aP(v,v))
t.c=e.gdD()*0.012
d.az(v,t)
if(a1===1)s=E.jN
else s=w?E.jN:D.c
w=new A.fRr($.Wa,d,s)
v=new A.fRq(s,e,d)
u=g*0.4
r=g*0.12
if(a1===0){q=g*0.5
p=new C.t(g*0.62,q)
o=C.I()
o.r=F.fA.gp(0)
d.ad(p,g*0.34,o)
o=C.I()
o.r=B.Fj.gp(0)
d.ad(p,g*0.3,o)
w.$1(C.bK(p,u,q))
n=g*1.04
m=h-r
r=new A.fRs(e)
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
hv9(f9,g0,g1,g2,g3,g4,g5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1,e2,e3,e4,e5,e6,e7,e8,e9,f0,f1,f2,f3,f4="walls",f5="GFCI outlet",f6="Wall outlet",f7="\ud83d\udeb0 Needs plumbing",f8=f9.c
if(f8==="outside")return A.i4X(f9,g3,g2,g5,g4,g1)
f9.cJz()
w=x.z
v=C.a([],w)
u=new A.fk(v)
t=C.U(x.S,x.q)
s=C.a([],x.E)
r=C.a([],x.a)
q=f9.geb(0)
p=f9.gh_(0)
o=C.a([],x.O)
for(n=f9.z,m=n.length,l=0;l<n.length;n.length===m||(0,C.L)(n),++l)o.push(B.aA9[n[l]])
k=B.azS[f9.Q]
j=new A.fAq(g2)
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
u.mj(new A.q(0,-0.6,n),new A.q(m,1.2,h),g,d,3)
t.n(0,310,new A.cV("Floor","The "+k.a.toLowerCase()+" floor.",new A.q(0,0,n),140))
u.b=0
if(f==="wood")for(f=-q/2,a0=1;a0<8;++a0){e=C.ar(g,D.w,0.25)
e.toString
u.aJ(new A.q(f+a0*q/8,0.05,n),new A.q(0.3,0.2,p),e)}else if(e)for(g=-q/2,a0=1;a0<6;++a0){u.aJ(new A.q(g+a0*q/6,0.05,n),new A.q(0.3,0.2,p),B.aeU)
u.aJ(new A.q(0,0.05,a0*p/6),new A.q(q,0.2,0.3),B.aeU)}u.x=0
g=f8==="hall"
if(g){a1=Math.min(q*0.5,p*1.5)
a2=p-14
f=-a1/2
e=a1/2
r.push(new A.fP(C.a([new A.q(f,0.5,14),new A.q(e,0.5,14),new A.q(e,0.5,a2),new A.q(f,0.5,a2)],x.o),0,A.hz0(),900,900*(a2-14)/a1,60,-1,i,!1))}u.f=0
u.b=j.$2(f4,300)
a3=u.x=$.dS=$.dS+1
u.ht(new A.q(0,65,-0.6),new A.q(m,130,1.2),o[0],3)
u.x=0
u.b=j.$2(f4,301)
a4=u.x=$.dS=$.dS+1
f=-q
e=f/2
u.ht(new A.q(e-0.6,65,n),new A.q(1.2,130,p),o[1],3)
u.x=0
u.b=j.$2(f4,302)
a5=u.x=$.dS=$.dS+1
d=q/2
u.ht(new A.q(d+0.6,65,n),new A.q(1.2,130,p),o[2],3)
u.x=0
t.n(0,300,B.edI)
t.n(0,301,B.edM)
t.n(0,302,B.edV)
if(g0){u.b=0
u.ht(new A.q(0,65,p+0.6),new A.q(m,130,1.2),o[0],3)}u.f=u.b=0
u.x=a3
u.aR(new A.q(0,2.5,0.4),new A.q(q,5,0.8),B.kG,0.1)
u.x=a4
u.aR(new A.q(e+0.4,2.5,n),new A.q(0.8,5,p),B.kG,0.1)
u.x=a5
u.aR(new A.q(d-0.4,2.5,n),new A.q(0.8,5,p),B.kG,0.1)
u.x=0
u.f=g0?0:3
u.b=j.$2("ceiling",320)
if(g0)o=1
else o=g2==="ceiling"?0.6:0.4
u.d=o
u.ht(new A.q(0,130.6,n),new A.q(m,1.2,h),B.ayD[f9.as],2)
u.d=1
u.b=u.f=0
u.x=a3
u.aR(new A.q(0,128,1),new A.q(q,3,1.4),D.c,0.2)
u.x=a4
u.aR(new A.q(e+1,128,n),new A.q(1.4,3,p),D.c,0.2)
u.x=a5
u.aR(new A.q(d-1,128,n),new A.q(1.4,3,p),D.c,0.2)
u.x=0
t.n(0,320,new A.cV("Ceiling","Pick a colour above to paint the ceiling.",new A.q(0,130,n),140))
h=f9.w
a6=D.d.b3(h,new A.fAc())?"left":"right"
if(!g){o=new A.fAn()
a7=p*0.55
if(g0)D.d.v(v,A.nE(o.$0(),0,3.141592653589793,new A.q(0,0,p+0.2)))
D.d.v(v,a6==="right"?A.nE(o.$0(),0,-1.5707963267948966,new A.q(d,0,a7)):A.nE(o.$0(),0,1.5707963267948966,new A.q(e,0,a7)))}for(o=f9.ax,m=f9.at,a0=0;a0<h.length;++a0){a8=h[a0]
if(a8.a)continue
a9=o.h(0,a0)
if(a9==null)a9=m.t(0,a0)?1.25:0
b0=C.a([],w)
b1=new A.fk(b0)
b1.f=1
b1.x=$.dS=$.dS+1
b2=b1.b=600+a0
b1.aJ(B.hby,B.hbh,B.kG)
b3=C.a([],w)
b4=new A.fk(b3)
b4.r=!0
b4.b=b2
if(a9>0.04){b1.b=0
b5=A.i1W(a8.d)
b6=b5.a
b1.aJ(B.h9J,B.h66,b6)
b1.aJ(B.haQ,B.hhs,b5.b)
b7=C.ar(b6,D.w,0.25)
b7.toString
b1.aJ(B.h9V,B.hfj,b7)
b8=-a9
b7=A.vF(B.hhm,b8)
b4.wt(new A.q(-12.5+b7.a,0+b7.b,1.2+b7.c),B.h4J,B.vJ,0.15,b8)}else{b1.aR(B.h9Z,B.h8V,B.vJ,0.15)
b1.aR(B.ha5,B.has,B.Fd,0.8)
b1.aJ(B.hav,B.aY7,B.MT)
b1.aJ(B.hgN,B.aY7,B.MT)}b7=new A.fAo(a8,q,p)
D.d.v(v,b7.$1(b0))
D.d.v(v,b7.$1(b3))
t.n(0,b2,new A.cV("Door","Tap the door to go through it.",B.aWw,90))}for(o=f9.x,m=o.length,l=0;l<o.length;o.length===m||(0,C.L)(o),++l){b9=o[l]
b0=b9.b
b2=B.hE.h(0,b0)
b2.toString
b3=C.a([],w)
c0=new A.fk(b3)
c0.r=!0
c0.f=b0==="rug"?1:2
b7=100+b9.a
c0.b=j.$2("furniture",b7)
A.h7G(c0,b0,B.zp[b9.f])
D.d.v(v,A.nE(A.i7R(b3,0.8),0,b9.e*3.141592653589793/2,new A.q(b9.c,0,b9.d)))
t.n(0,b7,new A.cV(b2.a,y.M,new A.q(b9.c,12,b9.d),90))}u.f=2
u.r=!0
c1=p*0.5
w=C.T(h)
o=d-10
c2=D.k.E(new C.cO(new C.Z(h,new A.fAd(),w.k("Z<1>")),new A.fAe(),w.k("cO<1,K>")).cI(0,e+30,new A.fAf())+24,e+10,o)
c3=f9.go==="fan"
c4=f9.ga6e()
c5=c4&&f9.gMi()&&f9.fy
u.b=703
if(c3){u.dF(new A.q(0,129.5,c1),new A.q(0,120,c1),1,B.he,8)
u.dq(new A.q(0,120,c1),new A.q(0,113,c1),6,D.jf,0.5,14)
w=c5?B.o8:D.dn
u.dq(new A.q(0,113,c1),new A.q(0,110,c1),3.6,w,0.6,12)}else{w=c5?B.o8:D.dn
u.dq(new A.q(0,129.5,c1),new A.q(0,127,c1),7,w,0.6,16)}if(c5&&!c3){u.b=0
u.f=3
u.d=0.2
u.L8(new A.q(0,127,c1),new A.q(0,0.5,c1),36,B.o8,!1,14)
u.d=1
u.f=2}c6=c3?"Ceiling fan":"Ceiling light"
if(!c4)c7="It has no power yet. "+(f9.p4.length!==0?"Tap it to wire it.":"The room still needs wiring: use the Wiring button.")
else if(!f9.gMi())c7="It is ready: wire the wall switch to turn it on."
else{w=f9.fy?"It is on. Tap the wall switch (or tap this) to turn it off.":"It is off. Tap the wall switch (or tap this) to turn it on."
c7=w}t.n(0,703,new A.cV(c6,c7,new A.q(0,122,c1),80))
w=f8==="bathroom"
m=!w
c8=!m||f8==="kitchen"||f9.p4==="gfci"
h=f9.ganK()
b0=c8?f5:f6
b2=f9.p4.length!==0||f9.Ip(1)
b3=c8?f5:f6
b3=C.a([new C.e5([0,700,f/4,h,b0]),new C.e5([1,701,q/4,b2,b3])],x.az)
for(h=f9.id,a0=0;a0<h.length;++a0){f=h[a0]
b0=f.a
if(b0!=="switch"){b2=f.c
b0=b2.c>=2&&A.La(A.t7(b0),b2).a==="ok"
b2=h[a0].a==="gfci"?"Added GFCI outlet":"Added outlet"
b3.push(new C.e5([2+a0,800+a0,f.b,b0,b2]))}}u.f=1
u.r=!1
for(f=b3.length,b0=f9.fx,l=0;l<b3.length;b3.length===f||(0,C.L)(b3),++l){b2=b3[l].a
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
if(!d1)if(a0<2){b2=f9.p4
if(b2.length!==0)b2=d3
else{b2=f9.CW
if(b2!=null)b2=b2.biF(a0)
else b2=f9.ay?0:2}d3=b2}else d3=0
if(d1)b2=D.bf
else b2=d3===1?D.aA:D.ax
u.aJ(new A.q(d0,14,0.25),B.h6M,b2)
u.d=1
u.e=0
b2=d1?B.MH:D.jf
u.aR(new A.q(d0,14,0.9),B.hc3,b2,0.25)
u.b=0
for(d4=0;d4<2;++d4)for(b2=14+F.hq[d4]*2.8,d5=0;d5<2;++d5)u.aJ(new A.q(d0+B.Rr[d5],b2,1.7),B.hha,B.ahk)
u.aJ(new A.q(d0,14,1.7),B.hc1,D.dn)
u.x=0
if(!d1)b2="This one is not wired yet. Tap it to wire it."
else b2=b0.h(0,a0)==null?"Tap it to plug something in.":"Tap it to plug something else in, or to unplug."
t.n(0,c9,new A.cV(d2,b2,new A.q(d0,14,2),60))}f=C.a([new C.b7(702,c2,f9.gMi())],x.al)
for(a0=0;a0<h.length;++a0){b2=h[a0]
b7=b2.a
if(b7==="switch"){d6=b2.c
b7=d6.c>=2&&A.La(A.t7(b7),d6).a==="ok"
f.push(new C.b7(800+a0,b2.b,b7))}}for(h=f.length,l=0;l<f.length;f.length===h||(0,C.L)(f),++l){b2=f[l]
d0=b2.b
d1=b2.c
u.x=$.dS=$.dS+1
c9=u.b=b2.a
u.e=0.4
u.d=0.55
d7=2
if(!d1)if(c9===702){b2=f9.p4
if(b2.length!==0)b2=d7
else{b2=f9.CW
if(b2!=null)b2=b2.biF(3)
else b2=f9.ay?0:2}d7=b2}else d7=0
if(d1)b2=D.bf
else b2=d7===1?D.aA:D.ax
u.aJ(new A.q(d0,48,0.25),B.h8D,b2)
u.d=1
u.e=0
b2=d1?B.MH:D.jf
u.aR(new A.q(d0,48,0.9),B.h7R,b2,0.25)
u.aJ(new A.q(d0,f9.fy&&d1?49.2:46.8,1.9),B.h7I,B.ajd)
u.x=0
if(!d1)b2="Not wired yet. Tap it to wire it."
else if(f9.fy)b2="On. Tap to turn the "+(c3?"fan":"light")+" off."
else b2="Off. Tap to turn the "+(c3?"fan":"light")+" on."
t.n(0,c9,new A.cV("Light switch",b2,new A.q(d0,48,2),60))}if(f9.p4.length===0&&!f9.gkO()){if(f9.p4.length===0)h=f9.gkO()
else h=!0
if(h)d8=D.Y
else{h=C.a([],x.s)
if(!f9.ganK())h.push("outlet 1")
if(!(f9.p4.length!==0||f9.Ip(1)))h.push("outlet 2")
if(!f9.ga6e())h.push(f9.go==="fan"?"ceiling fan":"ceiling light")
if(!f9.gMi())h.push("switch")
d8=h}h=d8.length===0?"\u26a1 No power: needs wiring":"\u26a1 Still to wire: "+D.d.aG(d8,", ")
s.push(new A.hh(new A.q(0,104,c1),h,D.bB,0))}h=!1
if(f9.p4.length!==0)if(!f9.gz9()){h=f9.p4
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
u.j8(C.a([new A.q(d0,12,1.8),new A.q(d0,6,3),new A.q(d0,2,11)],f),0.3,B.YC,!1,0.2,6)
d6=e0.d
e1=d6<=0
if(!e1||e0.e){b8=d6*0.56
e2=$.dS+1
u.x=$.dS=e2
u.aR(new A.q(d0,2,15),new A.q(d6*0.45,4,14),B.he,0.3)
u.aR(new A.q(d0,8,15),B.h6c,B.he,0.3)
e3=12+b8/2
u.aR(new A.q(d0,e3,15),new A.q(d6,b8,3),E.FB,0.5)
d6=(d6-3.5)/2
e4=d0-d6
e5=(b8-3.5)/2
e6=e3+e5
d6=d0+d6
e5=e3-e5
r.push(new A.fP(C.a([new A.q(e4,e6,16.6),new A.q(d6,e6,16.6),new A.q(d6,e5,16.6),new A.q(e4,e5,16.6)],f),b7,new A.fAg(a0*7+b2),320,180,9,2,e2,!0))
u.x=0}else{d6=e0.a
if(d6==="lamp"){u.dq(new A.q(d0,0,14),new A.q(d0,1,14),6,B.XC,0.4,14)
u.dq(new A.q(d0,1,14),new A.q(d0,22,14),1,B.BC,0.5,8)
d6=f9.fy?B.o8:L.YJ
u.yU(new A.q(d0,20,14),new A.q(d0,32,14),9,d6,!1,!0,5.5,0.2,16)}else{e3=d6==="washer"
if(e3||d6==="dryer"){d6=e3?B.ahU:B.aiQ
u.aR(new A.q(d0,15,20),B.aWU,d6,0.4)
u.aR(new A.q(d0,28,31.2),B.h3k,B.aeW,0.3)
u.dq(new A.q(d0,14,31),new A.q(d0,14,31.8),8.5,B.aex,0.8,20)
d6=e3?B.af8:B.aiC
u.dq(new A.q(d0,14,31.7),new A.q(d0,14,32.2),6.5,d6,0.9,20)}else if(d6==="range"){u.aR(new A.q(d0,15,20),B.aWU,B.Bv,0.7)
u.aR(new A.q(d0,13,31.2),B.h6D,D.xP,0.9)
u.aR(new A.q(d0,22,32.2),B.h2Z,B.agq,0.9)
u.aR(new A.q(d0,30.3,20),B.h9K,B.afR,0.5)
for(d4=0;d4<2;++d4)for(d6=d0+B.dnr[d4],d5=0;d5<2;++d5){e7=B.cib[d5]
u.dq(new A.q(d6,30.8,e7),new A.q(d6,31.1,e7),3.6,B.ahj,0.3,14)}}else{u.aR(new A.q(d0,9,15),B.h2c,B.nX,0.1)
if(d6==="toaster"){u.aR(new A.q(d0,23,15),B.h25,B.j9,0.8)
u.aJ(new A.q(d0,28.2,15),B.hdf,B.aiB)}else{u.BF(new A.q(d0-7,21,15),new A.q(d0+7,21,15),3.6,B.FQ,3,0.6,12)
u.aR(new A.q(d0-8,14.5,15),B.hao,B.FQ,0.6)}}}}d6=!e1||e0.e?"It is playing NGMY ads. Tap it to watch full screen with the remote.":"It is plugged in and running. Tap the outlet to unplug it or plug in something else."
t.n(0,b7,new A.cV(e0.b,d6,new A.q(d0,16,14),90))}u.f=1
u.r=!1
e8=new A.fAi(f9,u,q,r,t)
e8.$2(f9.k1,0)
if(g){e8.$2(f9.k2,1)
e8.$2(f9.k1,2)
h=f9.k2
e8.$2(h==null?f9.k1:h,3)}if(g)for(e9=p-14,h=d-14,a0=0;a0<4;++a0){f0=(D.o.F(a0,2)===0?-1:1)*h
f1=a0<2?14:e9
f2=Math.atan2(-f0,-(n-f1)*-1)
u.f=2
u.r=!1
u.x=$.dS=$.dS+1
g=19e3+a0
u.b=g
u.aJ(new A.q(f0,125,f1),B.h5d,D.jf)
u.wt(new A.q(f0,118,f1),B.h1l,D.bO,0.4,f2)
u.wt(new A.q(f0+Math.sin(f2)*8.5,118,f1+Math.cos(f2)*8.5),B.h6b,D.av,0.6,f2)
u.ee(new A.q(f0-Math.sin(f2)*5+Math.cos(f2)*3,122,f1-Math.cos(f2)*5-Math.sin(f2)*3),1.4,D.ax,3,5)
u.b=u.x=0
t.n(0,g,new A.cV("Hall camera","Tap it and you look from here, like your eyes.",new A.q(f0,118,f1),60))}u.f=2
u.r=!0
if(!m||f8==="kitchen"){f8=f9.p4
f8=f8.length===0||f8==="ptrap"||f8==="faucet"}else f8=!1
if(f8){d1=f9.gjR()
f8=new A.fAp(u)
if(w){f3=e+17
if(d1){u.b=710
u.BF(new A.q(6,0.5,14),new A.q(6,15,14),8,B.Bi,5.6,0.8,18)
u.dq(new A.q(6,15,14),new A.q(6,16,14),9,B.MJ,0.8,18)
u.aR(new A.q(6,21,5),B.h2o,B.Bi,0.8)
u.aR(new A.q(6,28,5),B.h9x,B.MJ,0.8)}else{u.b=710
u.d=0.3
u.f=3
u.aJ(new A.q(6,14,9),B.h2f,D.b_)
u.d=1
u.f=2
f8.$2(-4,8)}u.b=711
A.hs6(u,new A.q(34,14,10),30,28,18,B.nX)
A.b7i(u,11,D.c,18,20,B.j9,B.Yb,32,7,d1,1,2,30,0.6,34,10)
w=!d1
if(w){f8.$2(28,18)
f8.$2(40,18)}u.b=712
if(d1){u.aR(new A.q(f3,8,38),B.aX0,B.Z1,0.7)
u.aR(new A.q(f3,16.2,38),B.hfe,B.XY,0.8)
u.dq(new A.q(f3,30,3),new A.q(f3,52,3),0.7,B.j9,0.9,8)
u.dq(new A.q(f3,52,3),new A.q(f3,52,10),0.7,B.j9,0.9,8)}else{u.d=0.3
u.f=3
u.aJ(new A.q(f3,8,38),B.aX0,D.b_)
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
u.aR(new A.q(e+15,36,14),B.h3h,B.ah4,0.6)
u.aJ(new A.q(e+28.5,36,14.4),B.hbJ,D.dn)
u.aR(new A.q(o,15,14),B.h2O,B.afp,0.1)
u.aR(new A.q(o,31,14),B.h3_,B.he,0.5)
u.aR(new A.q(d-15,32.4,14),B.aXr,D.i2,0.3)
u.aR(new A.q(d-5,32.4,14),B.aXr,D.i2,0.3)
u.b=713
A.hs6(u,new A.q(30,15,14),40,30,26,B.nX)
A.b7i(u,17,D.e2,28,28,B.j9,B.Mp,42,8.5,d1,1,2,32,0.6,30,14)
w=!d1
if(w){f8.$2(22,18)
f8.$2(38,18)}f8=d1?"The faucet, the hoses and the drain are fitted.":"The kitchen sink is not plumbed yet. Use the Plumbing button."
t.n(0,713,new A.cV("Kitchen sink",f8,new A.q(30,30,14),70))
if(w)s.push(new A.hh(new A.q(30,48,14),f7,D.bl,0))}}for(f8=D.d.gaf(g4),w=new C.f2(f8,new A.fAh(f9));w.C();){o=f8.gS(0)
t.n(0,900+o.a,new A.cV(o.r,"Tap to see how they are, feed them or give medicine.",new A.q(o.c,36,o.d),90))}return new A.tU(v,t,s,r,new C.cy([e,d,0,p]),0)},
kI(d,e,f,g,h,i,j,k,l){var w=-h/2,v=i/2,u=h/2,t=-i/2
d.cXs(e.a7(0,f.aI(0,w)).a7(0,g.aI(0,v)),e.a7(0,f.aI(0,u)).a7(0,g.aI(0,v)),e.a7(0,f.aI(0,u)).a7(0,g.aI(0,t)),e.a7(0,f.aI(0,w)).a7(0,g.aI(0,t)),j,k,l)},
i4X(d6,d7,d8,d9,e0,e1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5=-158,c6=1000,c7=x.z,c8=C.a([],c7),c9=new A.fk(c8),d0=x.S,d1=C.U(d0,x.q),d2=C.a([],x.E),d3=d6.geb(0),d4=d6.gh_(0),d5=new A.ftk(d8)
c9.f=0
c9.b=d5.$2("floor",310)
c9.ht(new A.q(0,-0.6,d4/2-60),new A.q(d3*2.5,1.2,d4*2.5),B.XF,5)
d1.n(0,310,B.edQ)
c9.b=0
c9.f=1
c9.aJ(new A.q(0,0.15,60),B.h7G,E.Fg)
for(w=0;w<6;++w)c9.aJ(new A.q(0,0.35,8+w*22),B.hc6,B.bpy)
c9.f=2
v=$.dS+1
c9.x=$.dS=v
c9.ht(B.h0K,B.h35,B.Mk,3)
c9.aJ(B.h0f,B.h36,B.aeC)
u=new A.ftl(c9)
t=new A.ftg(c9)
for(s=0;s<4;++s){r=B.dnz[s]
u.$5(B.dX,B.hu,B.ig,r,62)
u.$5(B.dX,B.hu,B.ig,r,122)}t.$5(B.dX,B.hu,B.ig,0,600)
for(s=0;s<2;++s){r=B.aBb[s]
u.$5(B.aaV,B.r0,B.tr,r,62)
u.$5(B.aaV,B.r0,B.tr,r,122)}t.$5(B.aaV,B.r0,B.tr,0,0)
for(s=0;s<2;++s){q=B.a5b[s]
u.$5(B.h1v,B.tr,B.hu,q,62)
u.$5(B.he2,B.ig,B.r0,-q,62)}p=C.a([],c7)
new A.fk(p).mj(B.dX,B.h3e,B.Mn,0.1,2)
c9.a7d(B.hdT,B.hcv,B.hbI,B.Mk,B.hu,!1)
c9.a7d(B.hbO,B.h5l,B.hca,B.Mk,B.r0,!1)
c9.x=0
c9.r=!0
D.d.v(c8,A.nE(p,0.5,0,B.h_q))
D.d.v(c8,A.nE(p,-0.5,0,B.h_r))
c9.aJ(B.h_t,B.h3d,B.Y7)
c9.aJ(B.h5P,B.h1Z,B.aia)
c9.aJ(B.h5Q,B.aWM,B.qa)
c9.aJ(B.h01,B.h4P,E.Fg)
c9.dF(B.heh,B.hei,2.2,B.kG,8)
c9.dF(B.h2Q,B.h2R,2.2,B.kG,8)
c9.aR(B.h0T,B.h4Y,B.Mn,0.1)
d1.n(0,600,B.eer)
p=x.a
o=C.a([],p)
n=new A.fth(o,v)
n.$4(B.h7p,B.hcg,B.hcZ,B.haO)
n.$5$poster(B.h5L,B.h4y,B.h6C,B.hcM,1)
n.$5$poster(B.h8u,B.h8K,B.h71,B.hcJ,2)
n.$5$poster(B.hcU,B.hhB,B.haj,B.hcf,0)
c9.r=!0
m=C.U(d0,d0)
for(d0=d6.x,l=d0.length,s=0;s<d0.length;d0.length===l||(0,C.L)(d0),++s){k=d0[s]
j=k.a
i=100+j
if(e1.t(0,i))continue
h=k.b
if(D.d.t(B.I8,h)){d1.n(0,i,new A.cV(B.hE.h(0,h).a,"It wanders about. Move it with the arrow buttons or take it out.",new A.q(k.c,12,k.d),140))
continue}g=B.hE.h(0,h)
g.toString
f=C.a([],c7)
e=new A.fk(f)
d=e.r=!0
e.f=D.d.t(B.a5m,h)?1:2
a0=h==="hospital"
e.b=(!a0?h==="shop":d)?i:d5.$2("furniture",i)
A.h7G(e,h,B.zp[k.f])
if(f.length!==0)m.n(0,j,D.d.gI(f).z)
D.d.v(c8,A.nE(f,0,k.e*3.141592653589793/2,new A.q(k.c,0,k.d)))
if(a0)j="The hospital: tap it to see the beds and treat the patients."
else j=h==="shop"?"The shop: tap it to buy food and medicine.":y.M
d1.n(0,i,new A.cV(g.a,j,new A.q(k.c,12,k.d),140))}a1=C.a([],x._)
for(l=D.d.gaf(d0),j=new C.f2(l,new A.fsI()),i=d6.k3;j.C();){h=l.gS(0)
g=h.a
a2=i.t(0,g)
f=h.b==="pole"
d=h.c
a0=h.d
a3=f?new A.q(d+20,86,a0):new A.q(d,55,a0)
d=C.a([],c7)
a4=new A.fk(d)
a0=f?4.6:4.2
a5=a2?D.e9:B.o8
a4.fP(a3,a0,a5,3,6,a2?0.1:0)
if(!a2){a4.d=0.2
a4.fP(a3,10,B.o8,2,6,0)
a4.d=1}D.d.v(c8,d)
if(a2)d2.push(new A.hh(new A.q(a3.a+0,a3.b+14,a3.c+0),"\u26a1 Light out: tap to go and fix it",D.bB,2e4+g))
if(f)a1.push(h)}D.d.aZ(a1,new A.fsJ())
for(l=x.o,w=0;a6=w+1,a6<a1.length;w=a6){a7=a1[w]
a8=a1[a6]
if(Math.abs(a7.d-a8.d)>1||Math.abs(a8.c-a7.c)>170)continue
j=C.a([],c7)
a9=new A.fk(j)
for(s=0;s<3;++s){b0=B.aB6[s]
i=a7.c
h=a7.d
g=a8.c
a9.j8(C.a([new A.q(i+b0,121,h),new A.q((i+g)/2+b0,117,h),new A.q(g+b0,121,h)],l),0.35,D.av,!1,0,4)}D.d.v(c8,j)}for(j=D.d.gaf(d0),i=new C.f2(j,new A.fsK(d6)),h=d6.cy;i.C();){g=j.gS(0)
f=g.c
d=g.b==="hq"?190:130
a0=g.d
g=g.a
d2.push(new A.hh(new A.q(f,d,a0+40),"\u26a1 Level "+C.w(h.h(0,g))+" has no power: tap to go and fix it",D.bB,2e4+g))}for(j=D.d.gaf(d0),i=new C.f2(j,new A.fsV(d6));i.C();){h=j.gS(0)
g=h.b
f=B.hE.h(0,g)
f.toString
d=h.c
g=g==="bighouse"?120:82
d2.push(new A.hh(new A.q(d,g,h.d),"\u26a1 No power: tap to go in and fix it",D.bB,2e4+h.a))
g=C.a([],c7)
b1=new A.fk(g)
b1.d=0.45
d=h.c
b1.aJ(new A.q(d,30,h.d),new A.q(f.c+2,60,f.d+2),D.dd)
b1.d=1
D.d.v(c8,g)}if(d6.c==="outside")D.d.v(c8,A.iaQ())
b2=C.a([],p)
for(c7=D.d.gaf(d0),d0=new C.f2(c7,new A.ft5());d0.C();){p=c7.gS(0)
d3=new A.ftj(p.e*3.141592653589793/2,p)
b3=m.h(0,p.a)
if(b3==null)b3=0
j=p.b
if(j==="billboard"){b2.push(new A.fP(C.a([d3.$3(-33,62.5,2),d3.$3(33,62.5,2),d3.$3(33,31.5,2),d3.$3(-33,31.5,2)],l),0,new A.fta(p),960,450,4,2,b3,!1))
b2.push(new A.fP(C.a([d3.$3(33,62.5,-2),d3.$3(-33,62.5,-2),d3.$3(-33,31.5,-2),d3.$3(33,31.5,-2)],l),0,new A.ftb(p),960,450,4,2,b3,!1))}else{i=j==="townsign"
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
b2.push(new A.fP(C.a([d3.$3(p,j,b7),d3.$3(b4,j,b7),d3.$3(b4,i,b7),d3.$3(p,i,b7)],l),0,new A.ftc(b8),b9,c0,4,2,b3,!1))
h=-b7
b2.push(new A.fP(C.a([d3.$3(b4,j,h),d3.$3(p,j,h),d3.$3(p,i,h),d3.$3(b4,i,h)],l),0,new A.ftd(b8),b9,c0,4,2,b3,!1))}else if(j==="adboard"){b2.push(new A.fP(C.a([d3.$3(c5,195,3.6),d3.$3(158,195,3.6),d3.$3(158,90,3.6),d3.$3(c5,90,3.6)],l),0,new A.fte(p),1280,424,4,2,b3,!1))
b2.push(new A.fP(C.a([d3.$3(158,195,-3.6),d3.$3(c5,195,-3.6),d3.$3(c5,90,-3.6),d3.$3(158,90,-3.6)],l),0,new A.ftf(p),1280,424,4,2,b3,!1))}else if(j==="tower"){c1=210+D.o.F(B.zp[p.f].l(),5)*24
j=c1-8
i=c1-54
b2.push(new A.fP(C.a([d3.$3(-40,j,35.9),d3.$3(40,j,35.9),d3.$3(40,i,35.9),d3.$3(-40,i,35.9)],l),0,new A.fsL(p),800,460,8,2,b3,!1))
b2.push(new A.fP(C.a([d3.$3(40,j,-35.9),d3.$3(-40,j,-35.9),d3.$3(-40,i,-35.9),d3.$3(40,i,-35.9)],l),0,new A.fsM(p),800,460,8,2,b3,!1))
b2.push(new A.fP(C.a([d3.$3(50.9,j,28),d3.$3(50.9,j,-28),d3.$3(50.9,i,-28),d3.$3(50.9,i,28)],l),0,new A.fsN(p),640,460,8,2,b3,!1))
b2.push(new A.fP(C.a([d3.$3(-50.9,j,-28),d3.$3(-50.9,j,28),d3.$3(-50.9,i,28),d3.$3(-50.9,i,-28)],l),0,new A.fsO(p),640,460,8,2,b3,!1))
i=c1+58
j=c1+22
b2.push(new A.fP(C.a([d3.$3(-40,i,1.7),d3.$3(40,i,1.7),d3.$3(40,j,1.7),d3.$3(-40,j,1.7)],l),0,new A.fsP(p),960,400,8,2,b3,!1))
b2.push(new A.fP(C.a([d3.$3(40,i,-1.7),d3.$3(-40,i,-1.7),d3.$3(-40,j,-1.7),d3.$3(40,j,-1.7)],l),0,new A.fsQ(p),960,400,8,2,b3,!1))}else if(j==="hq"){b2.push(new A.fP(C.a([d3.$3(-70,108,45.9),d3.$3(70,108,45.9),d3.$3(70,52,45.9),d3.$3(-70,52,45.9)],l),0,new A.fsR(),c6,400,8,2,b3,!1))
b2.push(new A.fP(C.a([d3.$3(-48,215,30.2),d3.$3(48,215,30.2),d3.$3(48,175,30.2),d3.$3(-48,175,30.2)],l),0,new A.fsS(),900,380,8,2,b3,!1))
b2.push(new A.fP(C.a([d3.$3(70,108,-45.9),d3.$3(-70,108,-45.9),d3.$3(-70,52,-45.9),d3.$3(70,52,-45.9)],l),0,new A.fsT(),c6,400,8,2,b3,!1))
b2.push(new A.fP(C.a([d3.$3(48,215,-30.2),d3.$3(-48,215,-30.2),d3.$3(-48,175,-30.2),d3.$3(48,175,-30.2)],l),0,new A.fsU(),900,380,8,2,b3,!1))
b2.push(new A.fP(C.a([d3.$3(-54,328,1.7),d3.$3(54,328,1.7),d3.$3(54,294,1.7),d3.$3(-54,294,1.7)],l),0,new A.fsW(p),c6,360,8,2,b3,!1))
b2.push(new A.fP(C.a([d3.$3(54,328,-1.7),d3.$3(-54,328,-1.7),d3.$3(-54,294,-1.7),d3.$3(54,294,-1.7)],l),0,new A.fsX(p),c6,360,8,2,b3,!1))
b2.push(new A.fP(C.a([d3.$3(85.9,118,36),d3.$3(85.9,118,-36),d3.$3(85.9,62,-36),d3.$3(85.9,62,36)],l),0,new A.fsY(p),720,560,8,2,b3,!1))
b2.push(new A.fP(C.a([d3.$3(-85.9,118,-36),d3.$3(-85.9,118,36),d3.$3(-85.9,62,36),d3.$3(-85.9,62,-36)],l),0,new A.fsZ(p),720,560,8,2,b3,!1))}else if(j==="store")b2.push(new A.fP(C.a([d3.$3(-54,85,37.7),d3.$3(54,85,37.7),d3.$3(54,67,37.7),d3.$3(-54,67,37.7)],l),0,new A.ft_(),900,150,6,2,b3,!1))
else if(j==="ubstation"){b2.push(new A.fP(C.a([d3.$3(40,106,31.9),d3.$3(76,106,31.9),d3.$3(76,86,31.9),d3.$3(40,86,31.9)],l),0,new A.ft0(),480,270,8,2,b3,!1))
b2.push(new A.fP(C.a([d3.$3(76,106,28.1),d3.$3(40,106,28.1),d3.$3(40,86,28.1),d3.$3(76,86,28.1)],l),0,new A.ft1(),480,270,8,2,b3,!1))}else if(j==="dmv")b2.push(new A.fP(C.a([d3.$3(-50,85,38.6),d3.$3(50,85,38.6),d3.$3(50,67,38.6),d3.$3(-50,67,38.6)],l),0,new A.ft2(),900,160,8,2,b3,!1))
else if(j==="gasstation")b2.push(new A.fP(C.a([d3.$3(-86,107,35.7),d3.$3(-54,107,35.7),d3.$3(-54,85,35.7),d3.$3(-86,85,35.7)],l),0,new A.ft3(),480,330,6,2,b3,!1))
else for(c2=0;c2<2;++c2){c3=c2===0?-40:40
j=c3-26
i=c3+26
b2.push(new A.fP(C.a([d3.$3(j,70,60.7),d3.$3(i,70,60.7),d3.$3(i,40,60.7),d3.$3(j,40,60.7)],l),0,new A.ft4(p,c2),720,520,9,2,b3,!1))}}}for(c7=D.d.gaf(e0),d0=new C.f2(c7,new A.ft6(d6));d0.C();){p=c7.gS(0)
d2.push(new A.hh(new A.q(p.c,82,p.d),p.Q,D.cQ,0))}for(c7=D.d.gaf(e0),d0=new C.f2(c7,new A.ft7(d6));d0.C();){p=c7.gS(0)
d2.push(new A.hh(new A.q(p.c,80,p.d),"\ud83d\udcde Help!",D.bB,0))}c7=d7===0
d0=c7?"\u2705 The house is finished":"\ud83c\udfe0 "+d7+" rooms still need work"
d2.push(new A.hh(B.h_J,d0,c7?D.cT:D.dZ,0))
c4=c9.x=$.dS=$.dS+1
for(s=0;s<2;++s){r=B.aBb[s]
c9.dF(new A.q(r,0,-118),new A.q(r,215,-118),3,D.jf,8)}c9.aR(B.Ax,B.h3b,D.av,0.3)
c9.x=0
o.push(new A.fP(B.cPw,0,new A.ft8(),c6,336,4,2,c4,!1))
o.push(new A.fP(B.dk3,0,new A.ft9(),c6,336,4,2,c4,!1))
c7=C.C(o,x.K)
D.d.v(c7,b2)
return new A.tU(c8,d1,d2,c7,null,4000)},
ibM(a5,a6,a7,a8,a9,b0,b1,b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=x.z,a3=C.a([],a2),a4=new A.fk(a3)
a4.r=!0
if(a5.c==="outside"){w=new A.fDo(b1)
v=b1!=null
if(v&&b1.a===a5.a)A.wP(a4,b1,a6,b2,!0,0,null)
if(a7&&v&&b1.a===a5.a){v=C.a([],a2)
u=b1.b
t=b1.d
new A.fk(v).aJ(new A.q(u+Math.sin(t)*9,46+b1.y,b1.c+Math.cos(t)*9),B.aWL,B.iz)
D.d.v(a3,v)}if(a9!=null){v=C.a([],a2)
s=new A.fk(v)
s.r=!0
u=a9.a
A.h7G(s,u[0],B.zp[u[4]])
D.d.v(a3,A.nE(v,0,u[3]-1.5707963267948966,new A.q(u[1],0,u[2])))}for(v=D.d.gaf(a5.x),u=new C.f2(v,new A.fDl()),t=a6*6,r=b0==="furniture";u.C();){q=v.gS(0)
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
A.hqb(h,q.b,B.zp[q.f],Math.sin(t+p)*0.5)
D.d.v(a3,A.nE(i,0,j,new A.q(n+m*10,0,l+k*10)))}for(v=D.d.gaf(b3),u=new C.f2(v,new A.fDm(a5)),t=a5.a;u.C();){r=v.gS(0)
q=r.c
p=r.d
n=r.e
m=r.f
l=r.a
A.wP(a4,new A.y5(t,q,p,n,!1,!1,!1,!1,!1,0,!1,!1,"","",-1,0,-1,0),a6,m,w.$2(q,p),900+l,m.c)
A.hZF(a4,r,a6)}for(v=a8.length,g=0;g<a8.length;a8.length===v||(0,C.L)(a8),++g){f=a8[g]
u=f.b
r=f.c
q=f.d
A.wP(a4,new A.y5(t,u,r,q,f.f,!1,!1,!1,!1,0,!1,!1,"","",-1,0,-1,f.e),a6,f.w,w.$2(u,r),0,f.x)
if(f.r){p=C.a([],a2)
new A.fk(p).aJ(new A.q(u+Math.sin(q)*9,46,r+Math.cos(q)*9),B.h1K,F.fA)
D.d.v(a3,p)}}return a3}if(b1!=null&&b1.a===a5.a)A.wP(a4,b1,a6,b2,!0,0,null)
for(a2=D.d.gaf(b3),v=new C.f2(a2,new A.fDn(a5)),u=a5.a,t=a6*0.5;v.C();){r=a2.gS(0)
q=r.y
p=q>0
e=p?Math.sin(t+r.a)*q:0
q=r.c
n=r.d
if(p)m=Math.cos(t+r.a)>=0?1.5707963267948966:-1.5707963267948966
else m=r.x?0.5:r.e
A.wP(a4,new A.y5(u,q+e,n,m,p,!1,!1,!1,r.x,0,!1,!1,"","",-1,0,-1,0),a6,r.f,!0,900+r.a,null)}d=a5.gh_(0)
if(a5.go==="fan"){a0=a5.ga6e()&&a5.gMi()&&a5.fy?a6*7:0
a4.b=703
for(a2=d*0.5,a1=0;a1<4;++a1){o=a0+a1*3.141592653589793/2
a4.wt(new A.q(Math.cos(o)*15,115,a2+Math.sin(o)*15),B.hgI,B.nX,0.1,-o)}}return a3},
i1W(d){var w
A:{if(5===d){w=B.eNL
break A}if(9===d){w=B.eSU
break A}if(10===d){w=B.eFZ
break A}if(11===d){w=B.eTT
break A}if(2===d||4===d||8===d){w=B.evw
break A}w=B.eIF
break A}return w},
fzg(b0,b1,b2,b3,b4,b5,b6,b7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9
for(w=b2.a,v=b2.b,u=b2.c,t=b1.a,s=b1.b,r=b1.c,q=b3.a,p=q*0.1,o=b3.b,n=o*0.1,m=b3.c,l=m*0.1,k=q*0.2,j=o*0.2,i=m*0.2,q*=0.3,o*=0.3,m*=0.3,h=-b4/2,g=b5-1,f=b5===1,e=0;e<b5;++e){d=f?0:h+b4*e/g
for(a0=b6.length,a1=s+v*d,a2=t+w*d+0,a3=r+u*d+0,a4=a2+p,a5=a3+l,a6=a2+k,a7=a3+i,a2+=q,a3+=m,a8=0;a8<b6.length;b6.length===a0||(0,C.L)(b6),++a8){a9=a1+b6[a8]
A.kI(b0,new A.q(a4,a9+n,a5),b2,B.e8,14,17,B.kG,b3,0)
A.kI(b0,new A.q(a6,a9+j,a7),b2,B.e8,11,14,b7,b3,0.6)
A.kI(b0,new A.q(a2,a9+o,a3),b2,B.e8,11,0.9,B.kG,b3,0)}}},
hqG(a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0
A:{if("shop"===a2){w=B.f12
break A}if("hospital"===a2){w=B.f0Y
break A}if("firestation"===a2){w=B.f0F
break A}if("school"===a2){w=B.f0y
break A}w=B.f0h
break A}w=w.a
v=w[0]
u=w[1]
t=w[2]
s=w[3]
r=w[4]
q=u/2
p=v/2
a1.x=$.dS=$.dS+1
a1.ht(new A.q(0,t/2,0),new A.q(v,t,u),s,2)
a1.aJ(new A.q(0,2.5,0),new A.q(v+3,5,u+3),B.aeC)
w=a2==="hospital"
if(w)o=C.a([14,30,46],x.n)
else if(a2==="school"){n=C.a([14,32],x.n)
o=n}else{n=x.n
n=a2==="house2"?C.a([26],n):C.a([22],n)
o=n}m=D.o.E(D.k.bf(v/24),2,5)
n=a2==="firestation"
l=n?C.a([34],x.n):o
k=v-30
A.fzg(a1,new A.q(0,0,q).a7(0,B.dX),B.hu,B.ig,k,m,l,B.i1)
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
A.fzg(a1,new A.q(0,0,j),B.r0,B.tr,k,m,l,B.i1)
A.kI(a1,new A.q(0,13,j-0.4),B.r0,B.e8,14,26,B.vJ,B.tr,0)
f=D.o.E(D.k.bf(u/24),1,3)
k=u-26
A.fzg(a1,new A.q(p,0,0),B.tr,B.hu,k,f,l,B.i1)
i=-p
A.fzg(a1,new A.q(i,0,0),B.ig,B.r0,k,f,l,B.i1)
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
d.aR(B.dX,new A.q(v+6,2.5,u*0.58),r,0.1)
n=a1.a
k=t+5
D.d.v(n,A.nE(w,0.42,0,new A.q(0,k,u*0.25)))
a0=-u
D.d.v(n,A.nE(w,-0.42,0,new A.q(0,k,a0*0.25)))
k=p+0.2
w=t+12
a1.a7d(new A.q(k,t,q),new A.q(k,t,j),new A.q(k,w,0),s,B.hu,!1)
i-=0.2
a1.a7d(new A.q(i,t,j),new A.q(i,t,q),new A.q(i,w,0),s,B.r0,!1)
if(a2==="school"){w=q-10
e.aJ(new A.q(0,t+18,w),B.h2d,D.agt)
e.aJ(new A.q(0,t+30,w),B.h31,r)
e.dF(new A.q(0,t+31,w),new A.q(0,t+46,w),0.6,D.dn,6)
e.aJ(new A.q(5,t+44,w),B.hcW,D.ax)}else e.aJ(new A.q(v*0.28,t+14,a0*0.1),B.h6E,B.aia)}else{k=v+2
e.aR(new A.q(0,t+1.5,0),new A.q(k,3,u+2),r,0.05)
e.aJ(new A.q(0,t+4,q+0.5),new A.q(k,4,1.4),a3)
if(w){w=v*0.25
k=-u*0.15
e.aJ(new A.q(w,t+5,k),B.h3g,D.bs)
e.aJ(new A.q(w,t+6.2,k),B.hda,D.c)}if(n){w=p-10
n=-u*0.2
e.aJ(new A.q(w,t+16,n),B.h1Y,B.agX)
e.aJ(new A.q(w,t+32,n),B.aWM,r)}}D.d.v(a1.a,g)},
i6U(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=d.f,f=d.e
d.f=1
d.e=0
if(e==="road"){d.Cn(B.h9A,B.haD,B.h8z,B.haX,B.My,B.e8)
d.e=90
for(w=0;w<2;++w){v=B.Rr[w]
u=v-0.7
t=v+0.7
d.Cn(new A.q(-20,0.9,u),new A.q(20,0.9,u),new A.q(20,0.9,t),new A.q(-20,0.9,t),L.Mc,B.e8)}for(w=0;w<2;++w){v=B.dnl[w]
u=v-0.8
t=v+0.8
d.Cn(new A.q(-20,0.9,u),new A.q(20,0.9,u),new A.q(20,0.9,t),new A.q(-20,0.9,t),D.bO,B.e8)}d.f=g
d.e=f
return}d.Cn(B.haN,B.hh5,B.h8x,B.h77,B.My,B.e8)
d.e=90
A:{if("roadturn"===e){u=B.dm0
break A}if("roadtee"===e){u=B.d31
break A}u=B.cjW
break A}for(t=u.length,w=0;w<t;++w){s=u[w]
r=s.a
q=s.b
for(s=q!==0,p=r!==0,o=30*r,n=30*q,m=0;m<2;++m){l=B.Rr[m]
k=p?o:l
j=s?n:l
i=p?36:1.4
h=s?36:1.4
d.aJ(new A.q(k,0.95,j),new A.q(i,0.1,h),L.Mc)}}d.f=g
d.e=f},
hqb(d,e,f,g){var w=new A.fjw(d,g)
switch(e){case"dog":d.aR(B.xf,B.hgm,f,0.05)
d.ee(B.h7M,3.4,f,4,8)
d.aJ(B.hba,B.h6z,D.Ms)
d.aJ(B.hcA,B.aXy,B.he)
d.aJ(B.hhi,B.aXy,B.he)
d.dF(B.hdq,B.h_n,0.8,f,5)
w.$5(B.dkK,6,6,1.7,f)
break
case"cat":d.aR(B.Ay,B.h6u,f,0.05)
d.ee(B.h0M,2.7,f,4,8)
d.aJ(B.hfT,B.aWP,f)
d.aJ(B.hfX,B.aWP,f)
d.dF(B.h0L,B.h_f,0.7,f,5)
w.$5(B.din,4,4,1.2,f)
break
case"cow":d.aR(B.aaX,B.h1U,D.bN,0.05)
d.aJ(B.hg5,B.hfn,B.he)
d.aJ(B.h9e,B.h6x,B.he)
d.aJ(B.h_D,B.h6J,D.bN)
d.aJ(B.h_u,B.hhD,D.nW)
d.aJ(B.h6Z,B.aWQ,D.bO)
d.aJ(B.hhb,B.aWQ,D.bO)
d.dF(B.h_G,B.h0O,0.7,B.he,5)
w.$5(B.d6S,11,11,3.2,D.bO)
break
case"sheep":d.ee(B.aaW,8.5,D.q2,4,8)
d.ee(B.h_l,7,D.q2,4,8)
d.ee(B.h_h,3.4,B.he,4,8)
w.$5(B.dkE,8,8,1.8,B.he)
break
case"chicken":d.ee(B.Ay,4,f,4,8)
d.ee(B.h_2,2.2,f,3,6)
d.aJ(B.h_c,B.hfh,D.bB)
d.aJ(B.h7U,B.h7s,D.aA)
d.aJ(B.h0Q,B.h4L,f)
w.$5(B.d4T,3,3,0.8,D.aA)
break
case"horse":d.aR(B.h_K,B.h1t,f,0.1)
d.L9(B.h_U,B.h0a,4.2,f,3,8)
d.aJ(B.h0c,B.h5i,f)
d.aJ(B.h0l,B.hfg,B.he)
d.dF(B.h_Z,B.h0P,1.8,B.he,6)
w.$5(B.d4b,16,16,2.6,f)
break
default:d.aJ(B.Ay,B.h6H,f)}},
bCG(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=C.a([],x.z)
for(w=d.length,v=e.a,u=e.b,t=e.c,s=f.a,r=f.b,q=f.c,p=x.o,o=0;o<d.length;d.length===w||(0,C.L)(d),++o){n=d[o]
m=C.a([],p)
for(l=n.a,k=l.length,j=0;j<l.length;l.length===k||(0,C.L)(l),++j){i=l[j]
m.push(new A.q(s+(i.a-s)*v,r+(i.b-r)*u,q+(i.c-q)*t))}l=n.b
h.push(new A.kq(m,new A.q(l.a/v,l.b/u,l.c/t).gmW(0),n.c,n.d,n.e,n.f,n.r,n.w,n.x,n.y,n.z))}return h},
hZF(d,e,f){var w,v,u,t,s,r=e.z
if(r.length===0)return
w=e.e
v=new A.fjm(e,Math.sin(w),Math.cos(w))
u=d.b
d.b=0
switch(r){case"feed":d.L9(v.$3(14,0,8),v.$3(14,9,8),4.5,B.nX,5.5,10)
for(r=f*0.9,t=0;t<9;++t){s=D.k.F(r+t/9,1)
d.fP(v.$3(10+s*26,26-s*22,Math.sin(t*2.1)*4),0.9,D.lZ,3,5,0)}break
case"cook":d.aR(v.$2(18,9),B.h2Y,D.jf,0.2)
d.aJ(v.$2(18,18.4),B.h6h,D.fr)
d.d=0.3
for(r=f*0.5,t=0;t<6;++t){s=D.k.F(r+t/6,1)
d.fP(v.$2(18+Math.sin(t*1.9)*3,22+s*22),2+s*4,D.Fk,3,6,0)}d.d=1
break
case"wash":d.L9(v.$3(20,0,-10),v.$3(20,8,-10),4,D.aJ,5,10)
for(r=f*1.4,t=0;t<12;++t){s=D.k.F(r+t/12,1)
d.fP(v.$3(8+s*24,30-s*s*26,6),0.8,D.hj,3,5,0.3)}break
case"water":d.aR(v.$3(12,22,7),B.h6G,D.ej,0.2)
for(r=f*1.2,t=0;t<10;++t){s=D.k.F(r+t/10,1)
d.fP(v.$3(18+s*8,22-s*22,7),0.7,D.hj,3,5,0.3)}break
case"teach":d.aR(v.$2(22,26),B.hdp,D.dY,0.1)
d.aJ(v.$2(22.8,26),B.haW,D.bN)
break
case"duty":d.aJ(v.$3(0,74,0),B.h99,D.L)
break}d.b=u},
wP(d,e,f,g,h,i,j){var w,v,u,t,s,r
if(e.Q){w=C.a([],x.z)
A.wP(new A.fk(w),A.atV(!1,0,-1,"",!1,0,"",-1,e.CW*0.5,!1,!1,!1,e.a,!1,e.e,0,0,0),f,g,h,i,j)
D.d.v(d.a,A.nE(w,1.5707963267948966,e.d,new A.q(e.b,9,e.c)))
return}w=g.e
v=$.h25.h(0,w)
if(v==null){if(B.Sl.aj(0,w)&&!$.h23.t(0,w)){A.bU5(w)
return}A.i5H(d,e,f,h,i,g)
return}w=e.e
u=e.z
t=w&&!u&&e.CW>0?e.CW*12:null
s=j==null
r=s?null:g.a
s=s?null:g.d
D.d.v(d.a,v.cWW(h,i,e.y,s,u,r,f,j,t,w,e.b,e.d,e.c))},
i5H(e6,e7,e8,e9,f0,f1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2=e7.e,d3=d2?D.k.V(e7.CW*24):-1,d4=f1.a,d5=f1.b,d6=f1.c,d7=f1.d,d8=f1.f,d9=f1.r,e0=f1.w,e1=e7.f,e2=e7.r,e3=e7.w,e4=C.bw(d4.l(),d5.l(),d6.l(),d7.l(),d8,d9,e0,e9,d3,e1,e2,e3,f0,D.h,D.h,D.h,D.h,D.h,D.h,D.h),e5=$.ftH.h(0,e4)
if(e5!=null){D.d.v(e6.a,A.nE(e5,0,e7.d,new A.q(e7.b,e7.y,e7.c)))
return}w=C.a([],x.z)
v=new A.fk(w)
v.b=f0
v.r=!0
u=C.ar(d4,D.w,0.16)
u.toString
t=C.ar(d4,B.bls,0.55)
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
e=new A.fub(f0,v)
d=new A.ftJ(v,r,e9)
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
e.$3(new A.ftK(q,p),B.hbj,new A.q(a1,a2+-1.6,i))
if(e9)e.$3(new A.ftL(p),B.h83,new A.q(a1,a2+-2.9,i))
if(e9){i=C.ar(d7,D.c,m)
i.toString
v.ee(new A.q(a1,a2+1.2,a3+0),2.1,i,3,p)}}m=d8?1.22:1.12
e.$3(new A.ftM(d7,q,p),new A.q(m,0.78,0.76),new A.q(0,f+1.2,0))
if(d8){d7=C.ar(d7,D.c,Math.abs(0.05))
d7.toString
m=e9?12:8
v.Tk(new A.q(0,f+3.4,0),new A.q(0,f-9.5,0),5.9,d7,!1,7.8,m)}a6=d8?5.8:6.5
a7=d8?4.2:4.9
d7=d8?0.66:0.62
e.$3(new A.ftX(a7,d6,a6,e9),new A.q(1,1,d7),new A.q(0,f+2.5,0))
if(!d8)e.$3(new A.fu4(),B.h2s,new A.q(0,f+2.4,0))
if(d8&&e9)for(d7=f+14.3,k=0;k<2;++k)e.$3(new A.fu5(d6,q,p),B.h3s,new A.q(F.hq[k]*2.7,d7,2.7))
d7=d8?1.1:1.2
e.$3(new A.fu6(d8,d6,o,n),new A.q(d7,0.5,0.62),new A.q(0,f+19.6,0))
d7=d8?1.8:2.1
v.dF(new A.q(0,f+20.5,0.2),new A.q(0,f+24.2,0.5),d7,d4,8)
if(e9){d7=C.ar(d6,D.c,Math.abs(0.12))
d7.toString
v.Tk(new A.q(0,f+20,0.1),new A.q(0,f+21.4,0.2),3.1,d7,!1,2.5,10)}d7=f+29
a8=new A.q(0,d7,0.6)
e.$3(new A.fu7(d4,e9),B.hde,a8)
m=d8?0.95:1.05
e.$3(new A.fu8(d4,q,p),new A.q(m,0.8,0.95),a8.a7(0,B.h4I))
if(e9)for(m=d7+-0.3,k=0;k<2;++k)e.$3(new A.fu9(d4),B.hg7,new A.q(0+F.hq[k]*4.35,m,0.7))
else for(m=d7+-0.2,k=0;k<2;++k)v.ee(new A.q(0+F.hq[k]*4.2,m,0.6),1,d4,2,5)
for(m=d7+1.9,l=d7+0.4,j=d7+2.05,i=d7+0.7,a1=d7+1.25,a2=d7+0.95,k=0;k<2;++k){a0=F.hq[k]
a3=a0*1.8
a9=0+a3
if(e9){e.$3(new A.fua(),B.hdt,new A.q(a9,l,4.75))
v.ee(new A.q(a9,l,5.1),0.55,B.aeu,2,5)}else v.aJ(new A.q(a9,l,5),B.hbA,B.aeu)
a3=0+a3
if(e9){v.ee(new A.q(0+a0*1.6,i,5.55),0.18,D.c,2,4)
e.$3(new A.ftN(u),B.h9B,new A.q(a3,a1,4.8))
a9=d8?0.28:0.18
v.aJ(new A.q(a3,a2,5.22),new A.q(2.3,a9,0.2),D.nk)
a9=d8?0.34:0.5
v.aJ(new A.q(a3,j,4.75),new A.q(2.4,a9,0.55),d5)}else v.aJ(new A.q(a3,m,4.8),B.hgV,d5)}e.$3(new A.ftO(u),B.hhd,a8.a7(0,B.h7V))
if(e9){v.L8(a8.a7(0,B.hhf),a8.a7(0,B.hfQ),0.55,d4,!1,5)
for(m=d7+-1.8,k=0;k<2;++k)v.aJ(new A.q(0+F.hq[k]*0.55,m,5.1),B.h8O,u)}if(e9){v.aJ(a8.a7(0,B.h5C),B.haL,B.bjq)
e.$3(new A.ftP(t),B.h9W,a8.a7(0,B.hbU))
e.$3(new A.ftQ(t),B.h5_,a8.a7(0,B.h87))}else v.aJ(a8.a7(0,B.hb2),B.h9q,B.bmI)
switch(d9){case 1:e.$3(new A.ftR(d5,e9),B.h7S,a8.a7(0,B.aXH))
e.$3(new A.ftS(d5,p),B.ab5,a8.a7(0,B.aYi))
e.$3(new A.ftT(d5,q,p),B.hgA,a8.a7(0,B.hgS))
for(d9=d7+1.5,d7+=-7.2,k=0;k<2;++k){a0=F.hq[k]
v.L8(new A.q(0+a0*4.4,d9,1),new A.q(0+a0*4.3,d7,1),1.2,d5,!1,6)}break
case 2:e.$3(new A.ftU(d5,e9),B.hdk,a8.a7(0,B.h8j))
e.$3(new A.ftV(d5,p),B.h9m,a8.a7(0,B.hgn))
break
case 3:d5=C.ar(d6,D.c,Math.abs(0.18))
d5.toString
e.$3(new A.ftW(d5,e9),B.hbZ,a8.a7(0,B.h72))
e.$3(new A.ftY(d5,p),B.ab5,a8.a7(0,B.hhF))
e.$3(new A.ftZ(d5,q,p),B.hgt,a8.a7(0,B.h84))
break
case 4:e.$3(new A.fu_(d5,q,p),B.hhc,a8.a7(0,B.hgW))
e.$3(new A.fu0(d5,p),B.hb8,a8.a7(0,B.haz))
break
default:e.$3(new A.fu1(d5,e9),B.h6t,a8.a7(0,B.aXH))
e.$3(new A.fu2(d5,p),B.ab5,a8.a7(0,B.aYi))}b0=d8?6.2:7
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
e.$3(new A.fu3(d4),B.h9U,new A.q(t,i,a1))
if(e9){a2=d9<0?-1:1
a3=0*a2
a9=-j*a2
a2=d9*a2
for(b4=t+0,b5=i+d9*1.5+0,b6=a1+j*1.5+0,b7=a3*0.25,b8=a9*0.25,b9=a2*0.25,c0=0+a3*0.8,c1=d9*0.6+a9*0.8,c2=j*0.6+a2*0.8,c3=0;c3<4;++c3){c4=u?1:-1
c4=b4+(-1.5+c3)*c4
c5=B.az9[c3]
c6=c4+0*c5*0.55+b7
c7=b5+d9*c5*0.55+b8
c5=b6+j*c5*0.55+b9
c8=new A.q(c6,c7,c5)
c9=new A.q(c0,c1,c2).gmW(0)
d0=B.az9[c3]
v.Tk(new A.q(c4,b5,b6),c8,0.62,d4,!1,0.58,4)
v.Tk(c8,new A.q(c6+c9.a*d0*0.45,c7+c9.b*d0*0.45,c5+c9.c*d0*0.45),0.56,d4,!1,0.48,4)}b5=-a0
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
v.dq(new A.q(t,m+-2.6,d9),new A.q(t,m+2.6,d9),1.7,D.aJ,0.5,8)}if(u&&e2){v.aR(new A.q(t,m+-0.4,l+2.6),B.hae,D.nk,0.3)
v.aJ(new A.q(t,m+0.2,l+3.8),B.h7z,D.ax)}}if(e0!==1)w=A.bCG(w,new A.q(e0,e0,e0),B.dX)
if($.ftH.a>900)$.ftH.aa(0)
$.ftH.n(0,e4,w)
D.d.v(e6.a,A.nE(w,0,e7.d,new A.q(e7.b,e7.y,e7.c)))},
i7R(d,e){var w,v,u,t,s,r,q,p,o,n=C.a([],x.z)
for(w=d.length,v=x.o,u=0;u<d.length;d.length===w||(0,C.L)(d),++u){t=d[u]
s=C.a([],v)
for(r=t.a,q=r.length,p=0;p<r.length;r.length===q||(0,C.L)(r),++p){o=r[p]
s.push(new A.q(o.a*e,o.b*e,o.c*e))}n.push(new A.kq(s,t.b,t.c,t.d,t.e,t.f,t.r,t.w,t.x,t.y,t.z))}return n},
h7G(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=C.ar(f,D.w,Math.abs(-0.25))
h.toString
w=C.ar(f,D.c,Math.abs(0.2))
w.toString
A:{if("bed"===e){d.aR(B.Ay,B.h5o,B.qa,0.1)
d.aR(B.h_j,B.h55,f,0.05)
d.aJ(B.hea,B.aWS,B.ahG)
d.aJ(B.h1X,B.aWS,B.ahG)
d.aR(B.h_N,B.h5q,B.qa,0.1)
d.aJ(B.h_x,B.hdj,w)
break A}if("nightstand"===e){d.aR(B.xf,B.h26,f,0.1)
d.aJ(B.hce,B.h5W,h)
d.aJ(B.hh3,B.h4d,B.ahg)
d.aJ(B.h_Q,B.h6W,B.o8)
break A}if("wardrobe"===e){d.aR(B.h09,B.h4r,f,0.1)
d.aJ(B.h7i,B.h4B,h)
d.aR(B.ha_,B.aXV,B.Fd,0.8)
d.aR(B.hhr,B.aXV,B.Fd,0.8)
break A}if("desk"===e){d.aR(B.VD,B.h4x,f,0.1)
d.aJ(B.hej,B.aWY,h)
d.aJ(B.h2U,B.aWY,h)
d.aR(B.h0r,B.h2V,B.M5,0.5)
d.aJ(B.h06,B.h5F,D.jf)
break A}if("rug"===e){d.ht(B.hgg,B.h2p,f,2)
d.aJ(B.h75,B.hfs,w)
break A}if("sofa"===e){d.aR(B.xf,B.h6i,f,0.05)
d.aR(B.h_M,B.h6j,h,0.05)
d.aR(B.hex,B.aXh,h,0.05)
d.aR(B.h4_,B.aXh,h,0.05)
d.aJ(B.he9,B.aWT,w)
d.aJ(B.h1W,B.aWT,w)
break A}if("armchair"===e){d.aR(B.xf,B.h3D,f,0.05)
d.aR(B.h_L,B.h3F,h,0.05)
d.aJ(B.he5,B.aXe,h)
d.aJ(B.h1L,B.aXe,h)
break A}if("coffee"===e){d.aR(B.VC,B.h4l,f,0.2)
for(v=0;v<4;++v){w=B.dn_[v]
d.aJ(new A.q(w.a,6.5,w.b),B.h3p,h)}d.aR(B.h8B,B.h6F,D.bO,0.5)
break A}if("tvstand"===e){d.aR(B.ab0,B.h4W,f,0.1)
d.aJ(B.h6f,B.h8e,h)
d.aJ(B.h_w,B.h2N,B.he)
break A}if("dining"===e){d.aR(B.VD,B.h4X,f,0.2)
for(v=0;v<4;++v){w=B.cPf[v]
d.aJ(new A.q(w.a,13,w.b),B.h4a,h)}break A}if("chair"===e){d.aR(B.h_s,B.h2g,f,0.1)
d.aR(B.h00,B.h2e,f,0.1)
for(v=0;v<4;++v){w=B.dcx[v]
d.aJ(new A.q(w.a,7.5,w.b),B.h2K,h)}break A}if("plant"===e){d.dF(B.dX,B.ab0,5,D.d0,10)
d.ee(B.aaX,8,B.Fb,5,8)
d.ee(B.h49,5,B.XT,4,8)
break A}if("lamp"===e){d.dF(B.dX,B.e8,4.5,B.he,10)
d.dF(B.e8,B.aWy,0.7,B.he,6)
d.L9(B.h0t,B.aaZ,6,B.o8,3.5,12)
break A}if("console"===e){d.aR(B.h_T,B.aXc,f,0.15)
d.aJ(B.h90,B.aWX,h)
d.aJ(B.h7a,B.aWX,h)
d.aJ(B.xf,B.hfd,h)
break A}if("shelf"===e){d.aR(B.aaY,B.h3Y,f,0.1)
for(u=0;u<4;++u){h=10+u*15
d.aJ(new A.q(0,h,1),B.h3M,B.he)
w=D.o.F(u,2)
d.aJ(new A.q(-8+w*6,h,2),B.h5k,[D.el,D.dF,D.ej,D.dZ][u])
d.aJ(new A.q(4+w*4,h,2),B.h6I,[D.dZ,D.ej,D.el,D.dF][u])}break A}if("tree"===e){d.L9(B.dX,B.h08,4.2,B.qa,3,8)
d.ee(B.aWy,17,B.Fb,5,9)
d.ee(B.h6V,11,B.XT,4,8)
d.ee(B.hf5,12,B.bml,4,8)
break A}if("pine"===e){d.dF(B.dX,B.aWq,3,B.qa,8)
for(u=0;u<3;++u){h=u*14
d.L9(new A.q(0,8+h,0),new A.q(0,26+h,0),14-u*3.5,B.af9,1.5,10)}break A}if("bush"===e){d.ee(B.xf,9,B.biZ,4,8)
d.ee(B.h5j,6.5,B.XT,4,8)
break A}if("flowers"===e){for(v=0;v<5;++v){h=B.dlx[v]
t=h.a
s=h.b
d.dF(new A.q(t,0,s),new A.q(t,7,s),0.4,B.af9,5)
d.ee(new A.q(t,8,s),2.2,h.c,3,6)}break A}if("fence"===e){for(v=0;v<4;++v)d.aR(new A.q(B.dnh[v],9,0),B.hc5,f,0.05)
d.aJ(B.Ay,B.aYc,h)
d.aJ(B.aaW,B.aYc,h)
break A}if("lamppost"===e){d.dF(B.dX,B.aWz,1.3,B.he,5)
d.dF(B.dX,B.h0d,3.5,B.he,6)
break A}if("bench"===e){d.aR(B.aWs,B.aXc,f,0.1)
d.aR(B.h_H,B.h4p,f,0.1)
d.aJ(B.heb,B.aX9,B.he)
d.aJ(B.h2i,B.aX9,B.he)
break A}if("car"===e){d.aR(B.aWq,B.h6p,f,0.4)
d.aR(B.heH,B.h4u,f,0.4)
d.aR(B.h2r,B.h8P,B.i1,0.6)
d.aJ(B.hfr,B.ab2,B.o8)
d.aJ(B.h9u,B.ab2,B.o8)
for(v=0;v<2;++v){t=B.a5d[v]
d.dF(new A.q(t,5,-18),new A.q(t,5,-21),5.5,D.nk,12)
d.dF(new A.q(t,5,18),new A.q(t,5,21),5.5,D.nk,12)}break A}if("road"===e||"roadturn"===e||"roadtee"===e||"roadcross"===e){A.i6U(d,e)
break A}if("roundabout"===e){d.dF(B.dX,B.h8I,72,B.My,16)
d.dF(B.h91,B.aXY,17,D.bn,10)
d.dF(B.aXY,B.aXE,15,B.blx,10)
d.ee(B.ab0,6,E.XD,3,6)
d.dF(B.aXE,B.ab_,0.9,B.qa,5)
break A}if("house2"===e||"shop"===e||"hospital"===e||"firestation"===e||"school"===e){h=C.a([],x.z)
r=new A.fk(h)
r.b=d.b
r.r=!0
r.f=d.f
A.hqG(r,e,f)
D.d.v(d.a,A.bCG(h,B.hcQ,B.dX))
break A}if("bighouse"===e){h=C.a([],x.z)
q=new A.fk(h)
q.b=d.b
q.r=!0
q.f=d.f
A.hqG(q,"house2",f)
D.d.v(d.a,A.bCG(h,B.hdF,B.dX))
break A}if("pole"===e){d.L9(B.dX,B.h_a,2.6,B.qa,2,5)
d.aJ(B.h_6,B.h4w,B.bhc)
for(v=0;v<3;++v){t=B.aB6[v]
d.dF(new A.q(t,116,0),new A.q(t,121,0),1.1,D.bN,4)}d.dF(B.h4H,B.h4F,5.5,D.bn,6)
d.aJ(B.h1D,B.h2M,D.jf)
break A}if("crate"===e){d.aR(B.ab_,B.h3f,B.iz,0.05)
d.aJ(B.hh1,B.h2b,B.vJ)
d.fP(B.heL,3.4,D.ax,3,5,0.3)
d.fP(B.h5e,3.4,D.aA,3,5,0.3)
break A}if("billboard"===e){d.x=$.dS=$.dS+1
for(v=0;v<2;++v){t=B.a5d[v]
d.dF(new A.q(t,0,-1),new A.q(t,40,-1),1.6,D.jf,8)}d.aR(B.h0u,B.h5U,D.cr,0.3)
d.x=0
break A}if("tower"===e||"hq"===e){d.x=$.dS=$.dS+1
p=e==="hq"
o=p?170:100
n=p?90:70
m=p?150:A.huS(f)
l=p?D.bO:B.dsK[D.o.F(f.l()>>>4,6)]
k=new A.fnm(d)
d.aR(new A.q(0,m/2,0),new A.q(o,m,n),l,0.25)
k.$4(o,n,20,m-8)
if(p){h=o*0.66
w=n*0.66
d.aR(new A.q(0,m+60,0),new A.q(h,120,w),D.bN,0.25)
k.$4(h,w,m+16,m+112)
d.aR(new A.q(0,m+124,0),new A.q(o*0.7,8,n*0.7),F.fA,0.4)}else{d.aJ(new A.q(0,m+3,0),new A.q(o+4,6,n+4),D.cr)
d.aJ(new A.q(o*0.2,m+12,0),new A.q(o*0.3,12,n*0.3),D.dn)}j=p?m+128:m+6
for(h=o*0.3,h=[-h,h],w=j+8,v=0;v<2;++v)d.aJ(new A.q(h[v],w,0),B.h47,D.jf)
h=p?112:84
d.aR(new A.q(0,j+34,0),new A.q(h,38,3),E.jN,0.3)
h=n/2
A.kI(d,new A.q(0,17,h+0.6),B.hu,B.e8,34,34,D.cr,B.ig,0.5)
A.kI(d,new A.q(0,17,h+0.7),B.e8.FY(B.ig),B.e8,1.2,34,B.i1,B.ig,0.6)
d.aR(new A.q(0,38,h+5),B.h4v,F.fA,0.3)
d.x=0
break A}if("store"===e){d.x=$.dS=$.dS+1
d.aR(B.VD,B.aWI,f,0.2)
d.aJ(B.aaZ,B.aWJ,D.cr)
A.kI(d,B.aYh,B.hu,B.e8,112,30,B.i1,B.ig,0.6)
d.aJ(B.aWx,B.aWH,D.bB)
d.aJ(B.aWA,B.aWE,D.av)
d.x=0
break A}if("dmv"===e){d.x=$.dS=$.dS+1
d.aR(B.VD,B.aWI,D.aN,0.2)
d.aJ(B.aaZ,B.aWJ,D.d7)
A.kI(d,B.aYh,B.hu,B.e8,112,30,B.i1,B.ig,0.6)
d.aJ(B.aWx,B.aWH,D.bl)
d.aJ(B.aWA,B.aWE,D.d7)
d.aJ(B.hab,B.hcV,D.bt)
d.aJ(B.hgJ,B.h5D,D.d7)
d.x=0
break A}if("ubstation"===e){d.x=$.dS=$.dS+1
for(v=0;v<2;++v){t=B.dnn[v]
for(i=0;i<2;++i){s=E.RV[i]
d.dF(new A.q(t,0,s),new A.q(t,50,s),2.2,D.aK,6)}}d.aR(B.aWz,B.h1z,D.av,0.3)
d.aJ(B.h0E,B.h1B,D.bt)
d.aR(B.h0_,B.h1s,D.du,0.6)
d.aJ(B.h_7,B.h6m,D.bs)
d.aJ(B.h0J,B.h5Z,D.aK)
d.dF(B.h50,B.h53,2,D.jf,6)
d.aJ(B.h54,B.h42,D.av)
d.aJ(B.h85,B.h93,D.bt)
d.aJ(B.hgT,B.hfc,D.c)
d.x=0
break A}if("gasstation"===e){d.x=$.dS=$.dS+1
for(v=0;v<2;++v){t=B.aB9[v]
for(i=0;i<2;++i){s=B.cI7[i]
d.dF(new A.q(t,0,s),new A.q(t,46,s),2.4,D.bO,6)}}d.aR(B.h0w,B.h1G,D.bB,0.3)
d.aJ(B.hhe,B.h1I,F.fA)
for(v=0;v<2;++v){t=E.RV[v]
d.aR(new A.q(t,9,20),B.h68,D.iy,0.3)
d.aJ(new A.q(t,15,20.2),B.h3m,D.bB)}d.aR(B.h_z,B.h6k,f,0.2)
d.dF(B.heU,B.heV,2.2,D.jf,6)
d.aJ(B.heW,B.h3O,D.av)
d.x=0
break A}if("townsign"===e){d.x=$.dS=$.dS+1
for(v=0;v<2;++v){t=B.dn9[v]
d.dF(new A.q(t,0,0),new A.q(t,316,0),5.5,D.jf,6)}d.aR(B.h_Y,B.h3S,E.jN,0.3)
d.aJ(B.h04,B.aX8,F.fA)
d.aJ(B.h_v,B.aX8,F.fA)
d.x=0
break A}if("adboard"===e){d.x=$.dS=$.dS+1
for(v=0;v<2;++v){t=B.dn8[v]
d.dF(new A.q(t,0,0),new A.q(t,205,0),4.5,D.jf,6)}d.aR(B.h_g,B.h3L,E.jN,0.3)
d.aJ(B.h_B,B.aX1,F.fA)
d.aJ(B.aWB,B.aX1,F.fA)
d.x=0
break A}if("cornersign"===e){d.x=$.dS=$.dS+1
for(v=0;v<2;++v){t=B.aB9[v]
d.dF(new A.q(t,0,0),new A.q(t,125,0),3,D.jf,6)}d.aR(B.h_9,B.h21,E.jN,0.3)
d.aJ(B.h_p,B.h23,F.fA)
d.x=0
break A}if("firetruck"===e){d.aR(B.aWr,B.h6S,D.bB,0.3)
d.aR(B.h3U,B.h2T,D.bB,0.3)
d.aR(B.hbQ,B.h58,B.i1,0.6)
d.aJ(B.hdY,B.hfS,D.dn)
for(u=0;u<6;++u)d.aJ(new A.q(-34+u*11,24,0),B.haF,D.dn)
d.aJ(B.h3V,B.aXm,D.d3)
d.aJ(B.hcm,B.h8o,B.bnt)
for(v=0;v<3;++v){t=B.dnj[v]
d.dF(new A.q(t,6,-19),new A.q(t,6,-22.5),6,D.nk,12)
d.dF(new A.q(t,6,19),new A.q(t,6,22.5),6,D.nk,12)}break A}if("ambulance"===e){d.aR(B.VC,B.h6q,D.c,0.4)
d.aR(B.h3E,B.h38,D.c,0.4)
d.aR(B.h8H,B.hd3,B.i1,0.6)
d.aJ(B.hgs,B.aXI,D.bB)
d.aJ(B.ham,B.aXI,D.bB)
d.aJ(B.aY3,B.h9L,D.bB)
d.aJ(B.aY3,B.h8_,D.bB)
d.aJ(B.h3G,B.aXm,D.ax)
for(v=0;v<2;++v){t=B.a5d[v]
d.dF(new A.q(t,6,-19),new A.q(t,6,-22.5),6,D.nk,12)
d.dF(new A.q(t,6,19),new A.q(t,6,22.5),6,D.nk,12)}break A}if("dog"===e||"cat"===e||"cow"===e||"sheep"===e||"chicken"===e||"horse"===e){A.hqb(d,e,f,0)
break A}if("pond"===e){h=C.a([],x.z)
q=new A.fk(h)
q.b=d.b
q.f=d.f
q.r=!0
q.dq(B.dX,B.hdJ,28,B.boF,0.8,22)
D.d.v(d.a,A.bCG(h,B.h7t,B.dX))
for(v=0;v<3;++v){h=B.d83[v]
d.ee(new A.q(h.a,1.2,h.b),2.6,B.agL,3,6)}break A}if("swing"===e){d.dF(B.hek,B.h3a,1.6,D.d0,8)
for(v=0;v<2;++v){t=E.a5c[v]
d.dF(new A.q(t,38,0),new A.q(t,0,14),1.4,D.d0,6)
d.dF(new A.q(t,38,0),new A.q(t,0,-14),1.4,D.d0,6)}for(v=0;v<2;++v){t=E.a5e[v]
d.dF(new A.q(t,38,0),new A.q(t,15,0),0.3,B.he,4)}d.aJ(B.VC,B.hgz,f)
break A}if("shed"===e){d.aR(B.VC,B.h4O,f,0.05)
d.aJ(B.aaY,B.h4Z,B.Y7)
d.aJ(B.hdA,B.hdl,h)
break A}if("doghouse"===e){d.aR(B.ab_,B.h39,f,0.05)
d.aJ(B.h3x,B.hfH,B.Y7)
d.aJ(B.hbP,B.hgM,B.M5)
break A}d.aJ(B.Ay,B.h1d,f)}},
hs6(d,e,f,g,h,i){var w=e.a,v=e.b,u=e.c,t=h/2
d.aR(new A.q(w,v,u+t-0.5),new A.q(f,g,1),i,0.1)
d.aR(new A.q(w,v,u-t+0.5),new A.q(f,g,1),i,0.1)
t=f/2
d.aR(new A.q(w-t+0.5,v,u),new A.q(1,g,h),i,0.1)
d.aR(new A.q(w+t-0.5,v,u),new A.q(1,g,h),i,0.1)
d.aR(new A.q(w,v-g/2+0.5,u),new A.q(f,1,h),i,0.1)},
cgE:function cgE(){},
fRt:function fRt(d,e,f){this.a=d
this.b=e
this.c=f},
fRr:function fRr(d,e,f){this.a=d
this.b=e
this.c=f},
fRq:function fRq(d,e,f){this.a=d
this.b=e
this.c=f},
fRs:function fRs(d){this.a=d},
fAq:function fAq(d){this.a=d},
fAc:function fAc(){},
fAn:function fAn(){},
fAo:function fAo(d,e,f){this.a=d
this.b=e
this.c=f},
fAd:function fAd(){},
fAe:function fAe(){},
fAf:function fAf(){},
fAg:function fAg(d){this.a=d},
fAi:function fAi(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fAj:function fAj(d,e,f){this.a=d
this.b=e
this.c=f},
fAk:function fAk(d,e,f){this.a=d
this.b=e
this.c=f},
fAl:function fAl(d,e,f){this.a=d
this.b=e
this.c=f},
fAm:function fAm(d,e,f){this.a=d
this.b=e
this.c=f},
fAp:function fAp(d){this.a=d},
fAh:function fAh(d){this.a=d},
ftk:function ftk(d){this.a=d},
ftl:function ftl(d){this.a=d},
ftg:function ftg(d){this.a=d},
fth:function fth(d,e){this.a=d
this.b=e},
fti:function fti(d){this.a=d},
fsI:function fsI(){},
fsJ:function fsJ(){},
fsK:function fsK(d){this.a=d},
fsV:function fsV(d){this.a=d},
ft5:function ft5(){},
ftj:function ftj(d,e){this.a=d
this.b=e},
fta:function fta(d){this.a=d},
ftb:function ftb(d){this.a=d},
ftc:function ftc(d){this.a=d},
ftd:function ftd(d){this.a=d},
fte:function fte(d){this.a=d},
ftf:function ftf(d){this.a=d},
fsL:function fsL(d){this.a=d},
fsM:function fsM(d){this.a=d},
fsN:function fsN(d){this.a=d},
fsO:function fsO(d){this.a=d},
fsP:function fsP(d){this.a=d},
fsQ:function fsQ(d){this.a=d},
fsR:function fsR(){},
fsS:function fsS(){},
fsT:function fsT(){},
fsU:function fsU(){},
fsW:function fsW(d){this.a=d},
fsX:function fsX(d){this.a=d},
fsY:function fsY(d){this.a=d},
fsZ:function fsZ(d){this.a=d},
ft_:function ft_(){},
ft0:function ft0(){},
ft1:function ft1(){},
ft2:function ft2(){},
ft3:function ft3(){},
ft4:function ft4(d,e){this.a=d
this.b=e},
ft6:function ft6(d){this.a=d},
ft7:function ft7(d){this.a=d},
ft8:function ft8(){},
ft9:function ft9(){},
fDo:function fDo(d){this.a=d},
fDl:function fDl(){},
fDm:function fDm(d){this.a=d},
fDn:function fDn(d){this.a=d},
fjw:function fjw(d,e){this.a=d
this.b=e},
fjm:function fjm(d,e,f){this.a=d
this.b=e
this.c=f},
fub:function fub(d,e){this.a=d
this.b=e},
ftJ:function ftJ(d,e,f){this.a=d
this.b=e
this.c=f},
ftK:function ftK(d,e){this.a=d
this.b=e},
ftL:function ftL(d){this.a=d},
ftM:function ftM(d,e,f){this.a=d
this.b=e
this.c=f},
ftX:function ftX(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fu4:function fu4(){},
fu5:function fu5(d,e,f){this.a=d
this.b=e
this.c=f},
fu6:function fu6(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fu7:function fu7(d,e){this.a=d
this.b=e},
fu8:function fu8(d,e,f){this.a=d
this.b=e
this.c=f},
fu9:function fu9(d){this.a=d},
fua:function fua(){},
ftN:function ftN(d){this.a=d},
ftO:function ftO(d){this.a=d},
ftP:function ftP(d){this.a=d},
ftQ:function ftQ(d){this.a=d},
ftR:function ftR(d,e){this.a=d
this.b=e},
ftS:function ftS(d,e){this.a=d
this.b=e},
ftT:function ftT(d,e,f){this.a=d
this.b=e
this.c=f},
ftU:function ftU(d,e){this.a=d
this.b=e},
ftV:function ftV(d,e){this.a=d
this.b=e},
ftW:function ftW(d,e){this.a=d
this.b=e},
ftY:function ftY(d,e){this.a=d
this.b=e},
ftZ:function ftZ(d,e,f){this.a=d
this.b=e
this.c=f},
fu_:function fu_(d,e,f){this.a=d
this.b=e
this.c=f},
fu0:function fu0(d,e){this.a=d
this.b=e},
fu1:function fu1(d,e){this.a=d
this.b=e},
fu2:function fu2(d,e){this.a=d
this.b=e},
fu3:function fu3(d){this.a=d},
fnm:function fnm(d){this.a=d},
hgH(){var w=x.S
return new A.bVs(C.eD([72],w),C.aX(w),C.aX(w),C.aX(w))},
ibN(d){var w
A:{if(81===d){w="outlet"
break A}if(82===d){w="switch"
break A}if(84===d){w="gfci"
break A}if(86===d||87===d){w="ptrap"
break A}if(85===d){w="faucet"
break A}w=null
break A}return w},
agN(a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=C.a([],x.z),a0=new A.fk(d)
a0.b=70
a0.ht(B.hcS,B.hfE,B.blm,4)
a0.c=1
a0.b=91
w=new A.fAv(a0)
w.$3(B.h7Z,B.h7d,15)
w.$4$alongX(B.hfb,B.hbt,11,!1)
w.$4$alongX(B.h57,B.h7n,11,!1)
w.$4$alongX(B.hec,B.h8l,6,!1)
w.$4$alongX(B.h67,B.hbu,6,!1)
for(v=0;v<=12;++v)a0.aE6(new A.q(-12+v*2,8.4,0),B.hcc,B.Yq,!1,0.05)
a0.c=2
a0.b=92
u=new A.fAs(a0)
u.$2(B.crn,B.rm)
u.$2(B.dk5,B.nd)
u.$2(B.dpg,B.nd)
t=new A.fAr(a0)
t.$1(B.d0A)
t.$1(B.d6G)
a0.c=3
a0.b=93
s=new A.fAu(a0)
s.$1(B.d_t)
s.$2$col(B.cYQ,B.mx)
s.$2$col(B.cXU,B.mx)
s.$1(B.dgX)
a0.c=4
a0.b=0
a0.d=0.22
a0.ht(B.h7m,B.haI,B.Bc,4)
a0.ht(B.haE,B.aXP,B.Bc,4)
a0.ht(B.h82,B.aXP,B.Bc,4)
a0.ht(B.h9c,B.aXU,B.Bc,3)
a0.ht(B.hh_,B.aXU,B.Bc,3)
a0.d=1
a0.c=5
a0.e=0.3
a0.b=0
a0.mj(B.hdU,B.h7j,B.biJ,0.1,4)
a0.b=71
a0.aR(B.hd_,B.hcd,B.XJ,0.5)
a0.aJ(B.hgy,B.h8T,B.xS)
r=[72,73,74,75,76]
for(q=a1.d,p=a1.e,v=0;v<5;++v){o=D.o.F(v,2)
n=D.o.ao(v,2)
m=r[v]
l=q.t(0,m)
k=p.t(0,m)
a0.b=m
m=9.55+o*0.5
j=5.7-n*0.5
a0.aR(new A.q(m,j,-7.5),B.h6T,B.Zh,0.3)
if(l)i=0
else i=k?-0.07:0.07
if(l)h=D.cd
else h=k?D.bn:D.bO
a0.aR(new A.q(m+0,j+i,-7.42),B.h8w,h,0.4)}a0.b=90
a0.aR(B.hbv,B.h5f,B.bsZ,0.1)
a0.aR(B.hff,B.h7J,B.YY,0.1)
a0.aR(B.hhA,B.aYb,B.YY,0.1)
a0.aR(B.h7C,B.aYb,B.YY,0.1)
g=new A.fAt(a0)
g.$3(81,B.h6g,a1.x?B.tU:B.YH)
a0.b=81
a0.aJ(B.hbw,B.aY5,B.Fx)
a0.aJ(B.h9P,B.aY5,B.Fx)
g.$5$h$w(82,B.hgD,H.YR,0.65,0.4)
a0.b=82
a0.aR(B.hdv,B.h5c,B.ag5,0.4)
f=!q.t(0,72)
a0.b=83
a0.dq(B.hdg,B.aXz,0.5,B.bqA,0.4,14)
a0.bcm(B.hg1,0.3,f?Al.FS:B.bl2,0.7)
if(f){a0.b=0
a0.d=0.22
a0.fP(B.aXl,1.5,B.Y0,4,10,0)
a0.d=1}a0.b=94
a0.aR(B.hfP,B.aYf,B.iz,0.1)
a0.aR(B.hbM,B.aYf,B.iz,0.1)
a0.aR(B.hgB,B.h8a,B.iz,0.1)
A.b7i(a0,1.35,B.Me,2.5,2.1,B.j9,B.Mp,6,0.55,!1,1,0.18,3.19,0.06,3,-7.15)
a0.b=85
a0.j8(A.Dj(B.daq,0.2,6),0.055,B.j9,!1,0.9,8)
a0.b=84
a0.aR(B.hge,B.hdN,B.YH,0.3)
a0.aJ(B.h9l,B.hgx,a1.y?B.agK:B.aj5)
a0.b=86
a0.j8(A.Dj(B.d13,0.35,3),0.11,B.q_,!1,0.3,8)
a0.b=87
a0.dq(B.hah,B.hd4,0.19,a1.c?B.XP:B.boi,0.3,8)
a0.b=88
a0.aR(B.h4t,B.h70,B.Bi,0.7)
a0.BF(B.hcR,B.aY6,0.72,B.Bi,0.55,0.7,16)
a0.dq(B.aY6,B.hb9,0.78,B.bq6,0.7,16)
a0.b=89
a0.dq(B.hfl,B.aXo,0.85,B.bdv,0.6,18)
a0.dq(B.aXo,B.haG,0.5,B.bdx,0.5,12)
a0.aJ(B.hbW,B.hhl,B.boc)
a0.b=95
for(p=a1.f,m=a1.r,v=0;v<3;++v){e=B.cHL[v]
if(m.t(0,v)){j=e.a
i=e.b
a0.aJ(new A.q(j,i,-7.82),B.hdh,B.Bc)
a0.aJ(new A.q(j,i,-7.79),B.haM,B.bh3)}else if(p.t(0,v)){j=e.a
i=e.b
a0.aJ(new A.q(j,i,-7.82),B.h2B,B.ai0)
a0.aJ(new A.q(j,i,-7.8),B.hbK,B.btf)}}if(a1.w){a0.b=96
a0.dq(B.haS,B.ha7,0.1,D.d0,0.7,8)}a0.e=0
a0.c=6
a0.b=0
a0.d=0.4
a0.bjf(B.aXf,B.aY4,B.aba,B.ab8,B.afq,B.hbq,!0)
a0.bjf(B.aXZ,B.aY9,B.ab8,B.aba,B.afq,B.hdo,!0)
a0.bko(B.aXf,B.aY9,B.ab8,B.afF)
a0.bko(B.aY4,B.aXZ,B.aba,B.afF)
a0.d=1
p=q.t(0,72)?"This breaker has TRIPPED (it is in the middle, orange). The living room has no power. Tap it to flip it off and on again.":"This breaker is ON. The living room has power."
q=q.t(0,72)?"The light is off because the living room breaker has tripped.":"The ceiling light is on."
m=a1.b
j=m&&!a1.c?"Water is dripping from the slip nut here. Pick the wrench, then tap the nut to tighten it.":"The P-trap holds a water seal that blocks sewer gas. Tap Open lesson to build one."
m=m&&!a1.c?"This slip nut is loose and the trap is dripping. Pick the wrench and tap here to tighten it.":"The slip nut is tight."
return new A.tU(d,C.H([70,B.eeq,91,B.edR,92,B.ee9,93,B.eeh,71,B.eev,72,new A.cV("Living room breaker",p,B.hh7,3.5),73,B.ee1,74,B.eej,75,B.edH,76,B.eec,81,B.eee,82,B.edx,83,new A.cV("Ceiling light",q,B.aXz,7),84,B.eek,85,B.edJ,86,new A.cV("P-trap under the sink",j,B.hcP,4.5),87,new A.cV("Slip nut (leaking?)",m,B.aXC,3.5),88,B.edu,89,B.eei,90,B.eem,94,B.ee0,95,B.eeo,96,B.edA],x.S,x.q),B.zy,B.wG,null,0)},
hvW(d,e){var w,v,u,t,s,r,q,p=C.a([],x.z),o=new A.fk(p)
o.c=5
o.e=0.8
if(d.w)for(w=e*1.5,v=0;v<6;++v){u=D.k.F(w+v/6,1)
o.fP(new A.q(3.4+Math.sin(v*2)*0.12,3.3-u*u*2.8,-7.7),0.05,D.afC,3,6,0.9)}if(d.as){u=D.k.F(e*1.1,1)
o.fP(new A.q(3,3.9-u*u*0.7,-6.95),0.05,B.afY,3,6,0.9)}if(d.Q)for(w=e*1.6,v=0;v<6;++v){u=D.k.F(w+v/6,1)
o.fP(new A.q(8.2+Math.sin(v*1.7)*0.15,2.2-u*1.5,-7.2),0.05,B.afY,3,6,0.9)}if(d.at){o.d=0.55
o.aR(B.h7x,B.h9h,B.bqo,0.8)
o.d=1}if(d.x)for(w=e*2,t=e*6,v=0;v<8;++v){u=D.k.F(w+v*0.13,1)
s=v*2.4+t
r=Math.cos(s)
s=Math.sin(s)
q=C.ar(F.MM,E.Z8,1-u)
q.toString
o.fP(new A.q(-3.2+r*u*0.7,1.3+s*u*0.7,-7.6+u*0.3),0.05,q,3,5,0)}if(d.z&&!d.d.t(0,72)){o.b=0
o.d=D.k.E((Math.sin(e*17)+Math.sin(e*29)+2)/4*0.5,0,0.6)
o.fP(B.aXl,1.5,B.Y0,4,10,0)
o.d=1}if(d.b&&!d.c){for(w=e*1.3,v=0;v<5;++v){u=D.k.F(w+v*0.2,1)
o.fP(new A.q(3.05,1.45-u*u*1.4,-6.95),0.05,B.Z0,3,6,0.9)}o.d=0.5
o.aR(B.h7c,new A.q(0.7+0.3*Math.sin(e),0.02,0.5),B.Z0,0.9)
o.d=1}return p},
bVs:function bVs(d,e,f,g){var _=this
_.a=5
_.b=!0
_.c=!1
_.d=d
_.e=e
_.f=f
_.r=g
_.at=_.as=_.Q=_.z=_.y=_.x=_.w=!1},
fAv:function fAv(d){this.a=d},
fAs:function fAs(d){this.a=d},
fAr:function fAr(d){this.a=d},
fAu:function fAu(d){this.a=d},
fAt:function fAt(d){this.a=d},
fQ(d,e,f,g){var w
try{Ak.dF(d,"",e,0,f,g)}catch(w){}},
uk(){A.fQ(880,80,0.25,"tri")
C.bP(A_.ak_,new A.fBq(),x.H)},
hO5(){return new A.NI(null)},
Ya(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w){return new A.b7U(t,d,u,s,f,r,q,j,g,h,m,n,i,k,v,w,l,o,p,e,null)},
wX(d,e,f,g,h){var w=null,v=g?e.j(0.25):D.w.j(0.5),u=C.m(18),t=C.J(g?e:D.aX,D.r,1),s=x.p,r=C.a([],s)
D.d.v(r,C.a([C.X(f,g?e:D.ac,w,w,w,16),D.eg],s))
r.push(C.d(d,w,w,w,w,w,w,C.l(w,w,g?e:D.ac,w,w,w,w,w,w,w,w,12,w,w,D.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w))
return C.aA(w,C.p(w,C.B(r,D.m,w,D.e,D.P,0,w,w),D.f,w,w,new C.o(v,w,t,u,w,w,D.n),w,w,w,w,D.h7,w,w,w),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,h,w,w,w,w,w,w,!1,D.a3)},
uj(d,e,f,g){var w=null,v=f==null,u=v?D.dr:g.j(0.9),t=C.m(14),s=C.X(e,v?D.bU:D.w,w,w,w,18)
return C.E(C.aA(w,C.p(w,C.B(C.a([s,D.bm,new C.dr(1,D.cn,C.d(d,w,w,w,w,w,w,C.l(w,w,v?D.bU:D.w,w,w,w,w,w,w,w,w,12.5,w,w,D.u,w,w,!0,w,w,w,w,w,w,w,w),D.K,w,w),w)],x.p),D.m,w,D.b9,D.i,0,w,w),D.f,w,w,new C.o(u,w,w,t,w,w,D.n),w,w,w,w,D.rC,w,w,w),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,!1,D.a3),1)},
fSC(d,e,f,g){return C.bV(E.mC,null,new A.fSE(e,g,f),d,!0,!0,!0,D.k5,!1,!1,x.H)},
U2(d,e,f,g,h,i,j){return new A.aY0(i,d,g,f,e,h,j,null)},
fBq:function fBq(){},
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
dTd:function dTd(d){this.a=d},
dTg:function dTg(d){this.a=d},
dTh:function dTh(d){this.a=d},
dTi:function dTi(d){this.a=d},
dTl:function dTl(d){this.a=d},
dTm:function dTm(d){this.a=d},
dTn:function dTn(d){this.a=d},
dTo:function dTo(d){this.a=d},
dTp:function dTp(d){this.a=d},
dTq:function dTq(d){this.a=d},
dTr:function dTr(d){this.a=d},
dTs:function dTs(d){this.a=d},
dTj:function dTj(d){this.a=d},
dTf:function dTf(d){this.a=d},
dTk:function dTk(d){this.a=d},
dTe:function dTe(d,e){this.a=d
this.b=e},
dT8:function dT8(d,e){this.a=d
this.b=e},
dT9:function dT9(d){this.a=d},
dTa:function dTa(d){this.a=d},
dTb:function dTb(){},
dTc:function dTc(d){this.a=d},
awy:function awy(d,e){this.c=d
this.a=e},
btU:function btU(){this.c=this.a=this.d=null},
f7q:function f7q(d){this.a=d},
f7p:function f7p(){},
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
cxx:function cxx(){},
cxy:function cxy(){},
fSE:function fSE(d,e,f){this.a=d
this.b=e
this.c=f},
fSD:function fSD(){},
aY0:function aY0(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
bXy:function bXy(d){this.a=d},
ad5:function ad5(){},
djQ:function djQ(d,e){this.a=d
this.b=e},
djR:function djR(d){this.a=d},
djP:function djP(d){this.a=d},
E_:function E_(d,e,f){this.c=d
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
_.LI$=e
_.a5d$=f
_.amx$=g
_.amy$=h
_.c=_.a=null},
dbf:function dbf(d,e){this.a=d
this.b=e},
dbd:function dbd(d,e,f){this.a=d
this.b=e
this.c=f},
dbe:function dbe(d){this.a=d},
dbc:function dbc(d){this.a=d},
daY:function daY(d){this.a=d},
daZ:function daZ(d){this.a=d},
db_:function db_(d){this.a=d},
db0:function db0(){},
daX:function daX(d){this.a=d},
db1:function db1(d){this.a=d},
db2:function db2(d){this.a=d},
db3:function db3(d){this.a=d},
db4:function db4(d){this.a=d},
db5:function db5(d){this.a=d},
db6:function db6(d,e,f){this.a=d
this.b=e
this.c=f},
db7:function db7(d){this.a=d},
db8:function db8(d,e){this.a=d
this.b=e},
db9:function db9(d,e){this.a=d
this.b=e},
dba:function dba(d,e){this.a=d
this.b=e},
dbb:function dbb(d){this.a=d},
dbg:function dbg(d,e){this.a=d
this.b=e},
dbh:function dbh(d){this.a=d},
dbq:function dbq(){},
dbz:function dbz(d,e,f){this.a=d
this.b=e
this.c=f},
dbG:function dbG(d){this.a=d},
dbn:function dbn(){},
dbr:function dbr(d){this.a=d},
dbs:function dbs(d){this.a=d},
dbA:function dbA(d){this.a=d},
dbB:function dbB(d){this.a=d},
dbp:function dbp(d){this.a=d},
dbC:function dbC(d){this.a=d},
dbo:function dbo(d){this.a=d},
dbD:function dbD(d){this.a=d},
dbE:function dbE(d){this.a=d},
dbF:function dbF(d){this.a=d},
dbH:function dbH(d){this.a=d},
dbt:function dbt(d,e){this.a=d
this.b=e},
dbm:function dbm(d,e,f){this.a=d
this.b=e
this.c=f},
dbu:function dbu(d,e){this.a=d
this.b=e},
dbv:function dbv(d){this.a=d},
dbl:function dbl(d){this.a=d},
dbw:function dbw(d){this.a=d},
dbk:function dbk(d){this.a=d},
dbx:function dbx(d){this.a=d},
dbj:function dbj(d){this.a=d},
dby:function dby(d){this.a=d},
dbi:function dbi(d){this.a=d},
a9I:function a9I(d,e){this.c=d
this.a=e},
aGz:function aGz(d,e,f,g){var _=this
_.f=_.e=_.d=$
_.r=""
_.w=0
_.x=null
_.y=!1
_.z=null
_.LI$=d
_.a5d$=e
_.amx$=f
_.amy$=g
_.c=_.a=null},
eXD:function eXD(d,e,f){this.a=d
this.b=e
this.c=f},
eXE:function eXE(d){this.a=d},
eXC:function eXC(d){this.a=d},
eXv:function eXv(d){this.a=d},
eXw:function eXw(d,e){this.a=d
this.b=e},
eXx:function eXx(d,e){this.a=d
this.b=e},
eXy:function eXy(d){this.a=d},
eXz:function eXz(d,e){this.a=d
this.b=e},
eXA:function eXA(d){this.a=d},
eXB:function eXB(d,e){this.a=d
this.b=e},
eXI:function eXI(){},
eXM:function eXM(d,e){this.a=d
this.b=e},
eXJ:function eXJ(d){this.a=d},
eXK:function eXK(d,e){this.a=d
this.b=e},
eXH:function eXH(d,e,f){this.a=d
this.b=e
this.c=f},
eXL:function eXL(d){this.a=d},
eXG:function eXG(d){this.a=d},
eXF:function eXF(){},
a59:function a59(d,e){this.c=d
this.a=e},
aAX:function aAX(d,e,f,g){var _=this
_.f=_.e=_.d=$
_.r=""
_.w=0
_.x=null
_.y=!1
_.z=null
_.LI$=d
_.a5d$=e
_.amx$=f
_.amy$=g
_.c=_.a=null},
deh:function deh(d,e,f){this.a=d
this.b=e
this.c=f},
dei:function dei(d){this.a=d},
deg:function deg(d){this.a=d},
de9:function de9(d){this.a=d},
dec:function dec(d){this.a=d},
ded:function ded(d,e){this.a=d
this.b=e},
dee:function dee(d,e){this.a=d
this.b=e},
deb:function deb(d){this.a=d},
def:function def(d,e){this.a=d
this.b=e},
dej:function dej(d,e,f){this.a=d
this.b=e
this.c=f},
dea:function dea(d){this.a=d},
den:function den(){},
det:function det(d,e){this.a=d
this.b=e},
deo:function deo(d){this.a=d},
dep:function dep(d){this.a=d},
dem:function dem(d){this.a=d},
der:function der(d,e){this.a=d
this.b=e},
del:function del(d,e,f){this.a=d
this.b=e
this.c=f},
deq:function deq(d){this.a=d},
des:function des(d){this.a=d},
dek:function dek(d){this.a=d},
aBP:function aBP(d){this.a=d},
aBQ:function aBQ(d){var _=this
_.d=d
_.f=_.e=$
_.r=0
_.w=""
_.x=null
_.y=!1
_.c=_.a=_.z=null},
dlp:function dlp(d,e,f){this.a=d
this.b=e
this.c=f},
dlq:function dlq(d){this.a=d},
dlo:function dlo(d){this.a=d},
dlj:function dlj(d){this.a=d},
dll:function dll(d,e){this.a=d
this.b=e},
dlm:function dlm(d,e){this.a=d
this.b=e},
dln:function dln(d,e){this.a=d
this.b=e},
dlk:function dlk(d){this.a=d},
dly:function dly(d,e){this.a=d
this.b=e},
dlt:function dlt(d,e){this.a=d
this.b=e},
dlv:function dlv(d){this.a=d},
dlu:function dlu(d){this.a=d},
dlw:function dlw(d){this.a=d},
dls:function dls(d){this.a=d},
dlx:function dlx(d){this.a=d},
dlr:function dlr(d,e){this.a=d
this.b=e},
afP:function afP(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bxA:function bxA(){var _=this
_.d=null
_.e=!1
_.c=_.a=null},
fj4:function fj4(d){this.a=d},
fj2:function fj2(d){this.a=d},
fj3:function fj3(d){this.a=d},
fj1:function fj1(d){this.a=d},
fj6:function fj6(d){this.a=d},
fj7:function fj7(d){this.a=d},
fj5:function fj5(d){this.a=d},
byb:function byb(){},
byg:function byg(){},
bzw:function bzw(){},
jS:function jS(d,e){this.a=d
this.b=e},
N4:function N4(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a7b:function a7b(d){this.a=d},
cbZ:function cbZ(d){this.a=d},
h52(){var w=x.N
return new A.co8(C.aX(w),C.H(["n1",!1,"n2",!1],w,x.Q),C.U(x.S,w))},
imG(d,e,f){var w,v
if(!f.c.t(0,e)){w=f.d
return e==="hot"?"The red (hot) hose goes on the LEFT side only. "+w:"The blue (cold) hose goes on the RIGHT side only. "+w}w=d.e
v=f.a
if(w.h(0,v)!=null)return"That connection already has a hose."
w.n(0,v,e)
return null},
hc4(){var w,v,u=C.a([B.aXb,B.ha1],x.o)
for(w=1;w<=12;++w){v=3.141592653589793+3.141592653589793*w/12
u.push(new A.q(3+3*Math.cos(v),0.2+3*Math.sin(v),0))}D.d.v(u,A.Dj(B.dbN,1,6))
return u},
aQ_(d){var w,v,u,t,s="trap",r=C.a([],x.z),q=new A.fk(r)
q.b=49
q.mj(B.h2u,B.h4i,B.iz,0.1,2)
q.mj(B.hgX,B.h2y,B.iz,0.1,2)
q.b=47
q.ht(B.hbp,B.h4j,B.vP,3)
q.ht(B.h3w,B.h2z,B.vP,3)
q.b=46
A.b7i(q,9,B.Me,14,15,B.j9,B.Mp,40,5.9,!0,2,1.8,15.1,0.6,0,-1.2)
q.dq(B.hcH,B.h9E,1.5,B.j9,0.85,14)
q.b=48
q.a4y(B.abc,B.h7W,0.92,B.q_,!1,!0,0.3,14)
q.cYX(B.abc,B.hg9,1,0.72,B.q_,0.3)
w=new A.fB6(d,q)
w.$5(41,B.aze,B.j9,0.85,"tail")
w.$5(42,A.hc4(),B.q_,0.3,s)
w.$5(43,B.aBK,B.q_,0.3,"arm")
w=new A.fB5(d,q)
v=d.a
w.$6(44,"n1",B.ab7,B.e8,B.h8i,v.t(0,"tail")&&v.t(0,s))
w.$6(45,"n2",B.ab9,B.hu,B.hdM,v.t(0,s)&&v.t(0,"arm"))
if(v.t(0,s)){q.b=0
q.d=0.55
q.e=0.4
u=A.hc4()
w=C.T(u).k("Z<1>")
t=C.C(new C.Z(u,new A.fB4(),w),w.k("M.E"))
if(t.length>1)q.a7e(t,0.4092,B.Ze,!1,!0,0.6,8)
q.d=1
q.e=0}return new A.tU(r,C.H([41,B.edL,42,B.edN,43,B.eeg,44,B.ee4,45,B.ees,46,B.edT,47,B.edZ,48,B.eds,49,B.edP],x.S,x.q),B.zy,B.wG,null,0)},
h75(d,e){var w=D.k.E(e,0,1)*(d.length-1),v=D.o.E(D.k.bf(w),0,d.length-2)
return A.pB(d[v],d[v+1],w-v)},
h7D(d,e,f,g,h,i){var w,v,u,t,s
d.b=0
d.e=0.3
d.d=0.55
d.a7e(e,h,g,!1,!0,0.9,8)
d.d=0.95
for(w=f*i,v=x.o,u=h*0.5,t=0;t<5;++t){s=D.k.F(w+t/5,1)
d.a7e(C.a([A.h75(e,s),A.h75(e,Math.min(1,s+0.09))],v),u,B.MN,!1,!1,1,6)}d.d=1
d.e=0},
huv(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k
d.b=0
d.e=0.4
for(w=f*1.3,v=e.a,u=v+0,t=e.b,s=t+0.05,r=e.c,q=r+0,p=t+0.12,o=0;o<3;++o){n=D.k.F(w+o/3,1)
m=0.5+n*3
d.d=0.7*(1-n)
d.r5(new A.q(u,s,q),new A.q(u,p,q),m,Math.max(0.1,m-0.3),B.MN,0.6,16)}d.d=0.9
for(w=f*1.8,l=0;l<6;++l){n=D.k.F(w+l/6,1)
k=l*1.05
d.fP(new A.q(v+Math.cos(k)*n*1.4,t+4*n*(1-n),r+Math.sin(k)*n*1.4),0.16,B.MN,3,6,1)}d.d=1
d.e=0},
h9X(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=C.a([],x.z),k=new A.fk(l)
k.e=0.9
w=0.5+0.5*Math.sin(e*7)
for(v=d.length,u=0.25+0.25*w,t=1.5+0.7*w,s=0.9*w,r=2.3+s,s=1.9+s,q=0;q<d.length;d.length===v||(0,C.L)(d),++q){p=d[q]
k.d=u
k.fP(p,t,G.Za,5,10,0)
k.d=0.8
o=p.a+0
n=p.b+0
m=p.c
k.r5(new A.q(o,n,m+0.6),new A.q(o,n,m+0.9),r,s,G.Za,0.2,20)}k.d=1
k.e=0
return l},
ikB(d,e){var w,v,u,t,s,r,q,p,o=C.a([],x.z),n=new A.fk(o),m=d.d
if(m.length!==0){w=m==="n1"?B.hho:B.hfx
for(m=e*1.4,v=w.a+0,u=w.b,t=w.c+0,s=0;s<5;++s){r=D.k.F(m+s*0.2,1)
n.d=0.85
n.fP(new A.q(v,u+(-r*6*r-r*1.5),t),0.24*(1-r*0.3),B.Z0,3,6,0.9)}n.d=1}if(d.c){A.h7D(n,C.a([B.aY_,B.aY_.a7(0,B.h0W),new A.q(0,11,-2.3)],x.o),e,B.bgW,0.42,1.4)
n.b=0
n.d=0.5
n.e=0.2
n.aR(B.hgZ,new A.q(12.6,1.0999999999999996,7.6),B.ahs,0.7)
n.d=1
n.e=0
A.huv(n,new A.q(0,11.05,-2.3),e)
n.b=0
n.e=0.4
for(m=e*0.9,q=0;q<2;++q){p=2.2*(1-D.k.F(m+q/2,1))
n.d=0.7
n.r5(new A.q(0,11.06,0),new A.q(0,11.12,0),p+0.25,p,B.MN,0.5,14)}n.d=1
n.e=0}return o},
Rs(d){switch(d){case 61:return B.h2t
case 62:return B.hft
case 63:return B.hax
default:return B.han}},
hvU(d){var w=d==="hot",v=A.Rs(w?61:62),u=A.Rs(w?63:64),t=w?-1:1
return A.aib(C.a([v,v.a7(0,new A.q(t*0.6,2.2,1.2)),A.pB(v,u,0.5).a7(0,new A.q(t*1.4,0,2.6)),u.a7(0,new A.q(-t*0.2,-2,1)),u],x.o),6)},
agM(a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=C.a([],x.z),a3=new A.fk(a2)
a3.b=67
a3.ht(B.h2q,B.h3W,B.vP,3)
a3.b=66
A.b7i(a3,7,B.Z1,14,18,B.j9,B.Mp,36,7,!1,2,1.6,15.3,0.6,0,1.5)
a3.mj(B.h5a,B.aWN,B.iz,0.1,2)
a3.mj(B.h4e,B.aWN,B.iz,0.1,2)
a3.mj(B.h9b,B.h3T,B.iz,0.1,3)
a3.mj(B.hdx,B.hd9,B.iz,0.1,2)
a3.mj(B.hcI,B.hcX,B.iz,0.1,2)
a3.b=65
a3.e=0.5
a3.aR(B.hfv,B.h9i,B.j9,0.9)
a3.j8(A.Dj(B.dhv,1.4,6),0.5,B.j9,!0,0.9,12)
for(w=0;w<2;++w){v=B.dcz[w]
u=v*1.2
a3.dq(new A.q(u,15.5,-3.6),new A.q(u,17.7,-3.6),0.38,B.j9,0.9,10)
t=v<0?B.rm:B.nd
a3.dq(new A.q(u,17.7,-3.6),new A.q(u,18.6,-3.6),0.6,t,0.6,12)}a3.e=0
for(u=[B.eCs,B.exA],w=0;w<2;++w){t=u[w]
v=t.b
a3.b=t.a
a3.dq(new A.q(v,15.3,-3.6),new A.q(v,11.4,-3.6),0.45,B.j9,0.9,10)
a3.dq(new A.q(v,11.4,-3.6),new A.q(v,10.7,-3.6),0.3,B.bnS,0.6,8)
a3.r5(new A.q(v,11.3,-3.6),new A.q(v,11.9,-3.6),0.78,0.48,B.bq5,0.7,8)}for(u=[B.eVY,B.eY_],w=0;w<2;++w){t=u[w]
s=t.a
v=t.b
r=t.c
a3.b=s
a3.dq(new A.q(v,-1.5,-6),new A.q(v,-1.5,-3.6),0.4,B.LW,0.7,12)
a3.dq(new A.q(v,-1.5,-4.4),new A.q(v,0.7,-4.4),1,B.j9,0.9,14)
a3.dq(new A.q(v,0.7,-4.4),new A.q(v,1.5,-3.6),0.45,B.j9,0.9,10)
a3.dq(new A.q(v,-0.2,-4.4),new A.q(v,-0.2,-3.1),0.2,B.af0,0.7,8)
q=(s===61?a4.f:a4.r)?B.e8:B.hu
a3.dq(new A.q(v,-0.2,-3.1),new A.q(v,-0.2,-2.2),1,r,0.5,12)
t=q.a*1.9
p=q.b*1.9
o=q.c*1.9
n=v-t
m=-0.2-p
l=-2.6-o
t=v+t
p=-0.2+p
o=-2.6+o
a3.dq(new A.q(n,m,l),new A.q(t,p,o),0.5,r,0.5,8)
a3.fP(new A.q(n,m,l),0.75,r,4,8,0.5)
a3.fP(new A.q(t,p,o),0.75,r,4,8,0.5)
a3.r5(new A.q(v,1.2,-3.6),new A.q(v,1.9,-3.6),0.78,0.4,B.vM,0.8,8)}for(u=x.o,w=0;w<2;++w){k=B.dka[w]
t=k==="hot"
j=t?B.cII:B.cIV
p=C.T(j).k("Z<1>")
i=C.C(new C.Z(j,new A.fAb(a4,k),p),p.k("M.E"))
a3.b=t?68:69
h=t?B.rm:B.nd
t=i.length
if(t===2){g=A.hvU(k)
a3.j8(g,0.34,B.Bv,!1,0.7,8)
f=g.length/2|0
a3.j8(C.a([g[f-1],g[f],g[f+1]],u),0.4,h,!1,0.4,8)
for(t=j.length,e=0;e<t;++e){d=A.Rs(j[e])
p=d.a+0
o=d.b
n=d.c+0
a3.r5(new A.q(p,o+-0.2,n),new A.q(p,o+0.6,n),0.62,0.3,B.vM,0.8,8)}}else if(t===1){d=A.Rs(D.d.gI(i))
a0=D.d.gI(i)===D.d.gI(j)?1:-1
t=d.a+0
p=d.b
o=d.c
a3.j8(C.a([d,new A.q(t,p+a0*1.4,o+1),new A.q(t,p+a0*3,o+2.4)],u),0.34,B.Bv,!1,0.7,8)
o+=0
a3.r5(new A.q(t,p+-0.2,o),new A.q(t,p+0.6,o),0.62,0.3,B.vM,0.8,8)}}if(a4.w){a3.b=0
a3.d=0.5
for(u=a4.e,w=0;w<4;++w){a1=B.RX[w]
t=a1.a
if(u.h(0,t)!=null)continue
t=A.Rs(t)
p=a1.c.t(0,"hot")?B.rm:B.nd
a3.fP(new A.q(t.a+0,t.b+0,t.c+0.9),0.65,p,4,8,0.1)}a3.d=1}return new A.tU(a2,C.H([61,B.edC,62,B.edE,63,B.edw,64,B.edF,65,B.ee_,66,B.edW,67,B.edt,68,B.eew,69,B.ee2],x.S,x.q),B.zy,B.wG,null,0)},
ibk(d,e){var w,v,u,t,s,r,q,p,o,n=C.a([],x.z),m=new A.fk(n),l=new A.fCM(m,e)
if(d.f){w=d.e
v=w.h(0,61)==="hot"&&w.h(0,63)==="hot"}else v=!1
if(d.r){w=d.e
u=w.h(0,62)==="cold"&&w.h(0,64)==="cold"}else u=!1
if(d.f&&!v)l.$3(61,B.Zg,-1)
if(d.r&&!u)l.$3(62,B.Yo,1)
for(w=[new C.b7(v,"hot",B.Zg),new C.b7(u,"cold",B.Yo)],t=e*0.6,s=0;s<2;++s){r=w[s]
q=r.c
if(!r.a)continue
p=A.hvU(r.b)
m.b=0
m.e=0.3
m.d=0.9
for(o=0;o<4;++o){r=A.h75(p,D.k.F(t+o/4,1))
m.fP(new A.q(r.a+0,r.b+0,r.c+0.32),0.2,q,3,6,0.9)}m.d=1
m.e=0}if(v||u){if(v&&u)q=B.bdE
else q=v?B.Zg:B.Yo
A.h7D(m,C.a([B.ab6,B.ab6.a7(0,B.hfM),new A.q(0,10.6,1.6)],x.o),e,q,0.42,1.4)
m.b=0
m.d=0.5
m.e=0.2
m.aR(new A.q(0,10.05,3.7),new A.q(12.8,1.0999999999999996,5.8),B.ahs,0.7)
m.d=1
m.e=0
A.huv(m,new A.q(0,10.65,1.6),e)}return n},
bDd(d){return D.d.d0(B.RX,new A.fCL(d))},
co8:function co8(d,e,f){var _=this
_.a=d
_.b=e
_.c=!1
_.d=""
_.e=f
_.w=_.r=_.f=!1},
Ff:function Ff(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fB6:function fB6(d,e){this.a=d
this.b=e},
fB5:function fB5(d,e){this.a=d
this.b=e},
fB4:function fB4(){},
fAb:function fAb(d,e){this.a=d
this.b=e},
fCM:function fCM(d,e){this.a=d
this.b=e},
fCL:function fCL(d){this.a=d},
h51(d,e,f){var w=x.N
w=new A.cnZ(e,d,C.aX(w),C.U(w,x.S),C.aX(w))
w.bAg(d,e,f)
return w},
hvb(c0,c1,c2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5=C.a([],x.z),b6=new A.fk(b5),b7=C.U(x.S,x.q),b8=C.a([],x.E),b9=c0.c
b9===$&&C.c()
w=b9.a==="bathroom"
v=w?28:0
b6.b=9199
b6.ht(B.heG,B.hgR,B.bgC,4)
b6.ht(B.hci,B.hfq,B.XY,4)
b6.ht(new A.q(v+19.8+0.6,24,16),B.h9D,B.vP,2)
b7.n(0,9199,B.edO)
b6.b=9198
b6.aR(new A.q(v,0.6,10),B.hfN,B.iz,0.1)
b6.aR(new A.q(v,29.4,18.6),B.h9g,B.iz,0.1)
b6.aR(new A.q(v-19.4,13.6,10.5),B.hgC,B.iz,0.1)
for(u=[B.f08,B.f04,B.f_1,B.eZZ],t=0;t<4;++t){s=u[t].a
b6.aR(new A.q(v+s[0],33,s[1]),new A.q(s[2],2.4,s[3]),B.btp,0.6)}b6.a4y(new A.q(v,27,8),new A.q(v,34.3,8),10.5,B.Z1,!1,!0,0.7,24)
b6.dq(new A.q(v,27,8),new A.q(v,27.2,8),10.5,B.bjH,0.5,24)
if(w){b6.aR(new A.q(v,46,0.6),B.h9p,D.bO,0.3)
b6.aR(new A.q(v,46,1.1),B.h8m,B.i1,0.9)}b6.dF(new A.q(v,27.1,8),new A.q(v,27.3,8),1.4,B.he,12)
b6.a4y(new A.q(v+15,23.6,8),new A.q(v+19.4,23.6,8),0.92,B.q_,!1,!0,0.3,12)
b7.n(0,9198,B.eed)
b6.b=9400
b6.dq(new A.q(-56,18,0),new A.q(-56,18,6),1.5,B.vM,0.8,12)
u=c0.r?B.nd:D.bn
b6.dq(new A.q(-57,18,6),new A.q(-55,18,6.5),4,u,0.5,14)
b6.dq(new A.q(-56,16,0),new A.q(-56,20,0),1,B.LW,0.7,10)
u=c0.r?"The water is ON. Turn it OFF with your hand before you cut into any pipe, and turn it ON to test your work.":"The water is OFF. Turn it ON to test your work."
b7.n(0,9400,new A.cV("Main water valve",u,new A.q(-56,18,4),22))
u=c0.r
s=u?"MAIN WATER: ON":"MAIN WATER: OFF"
u=u?D.dF:D.bn
b8.push(new A.hh(new A.q(-56,24,6),s,u,0))
r=new A.fB3(b6)
u=v-8
r.$1(u)
s=v+8
r.$1(s)
if(w)r.$1(-40)
q=new A.q(v,21,8)
p=new A.fB1(q)
o=new A.fAW(b6,c0)
n=new A.fAX(b6,c0)
m=new A.fB2(c0,b7,c2,c1,b8)
l=b9.c
for(k=l.length,j=c0.x,i=c0.e,h=c0.f,g=x.o,t=0;t<k;++t){f=l[t]
e=f.a
d=i.t(0,e)
if(d){a0=c0.vq(0,e)
a1=h.h(0,e)
if(a1==null)a1=0
a2=a0.r-a1>0}else a2=!1
a3=D.d.cp(l,f)
a4=9100+a3
j.t(0,e)
switch(e){case"flange":a5=new A.q(-30,0.3,14)
if(d){b6.b=a4
b6.dq(a5,new A.q(-30,0.8999999999999999,14),5.5,B.q_,0.4,18)
b6.r5(new A.q(-30,0.8,14),new A.q(-30,1.2,14),5.5,3.2,B.vM,0.8,18)}else n.$3(e,new A.q(-30,0.8,14),B.h1u)
m.$3(f,a5,"Flange spot")
break
case"wax":a5=new A.q(-30,1.2,14)
if(d){b6.b=a4
b6.r5(a5,new A.q(-30,2.3,14),4.2,2.4,B.bts,0.2,18)}else n.$3(e,new A.q(-30,1.7,14),B.hcu)
m.$3(f,a5,"Wax ring spot")
break
case"toilet":if(d){b6.b=a4
b6.BF(new A.q(-30,0.5,14),new A.q(-30,16,14),8.5,B.Bi,6,0.8,20)
b6.dq(new A.q(-30,16,14),new A.q(-30,17,14),9.5,B.MJ,0.8,20)
b6.aR(new A.q(-30,22,4.5),B.aWR,B.Bi,0.8)
b6.aR(new A.q(-30,29.2,4.5),B.h7r,B.MJ,0.8)}else{b6.b=a4
b6.d=0.32
b6.dF(new A.q(-30,0.5,14),new A.q(-30,17,14),8.5,D.b_,16)
b6.aJ(new A.q(-30,22,4.5),B.aWR,D.b_)
b6.d=1}m.$3(f,new A.q(-30,12,12),"Toilet spot")
break
case"bolts":if(d){for(e=9200+a3*2,a6=0;a6<2;++a6){a7=B.aBe[a6]
b6.b=e+(a7<0?0:1)
a0=-30+a7
b6.dq(new A.q(a0,0.5,17),new A.q(a0,3.6,17),0.45,B.Me,0.8,8)
a1=a2?D.cL:B.Me
b6.dq(new A.q(a0,3.4,17),new A.q(a0,4.6,17),1.2,a1,0.8,6)}e=a2?"The nuts are loose. Tighten them with the wrench, a little at a time so the porcelain does not crack.":"The toilet is bolted down."
b7.n(0,a4,new A.cV(f.c,e,new A.q(-30,3,17),20))}else for(a6=0;a6<2;++a6){a7=B.aBe[a6]
b6.b=a4
b6.d=0.4
e=-30+a7
b6.dF(new A.q(e,0.5,17),new A.q(e,4.6,17),1.2,D.b_,8)
b6.d=1}m.$3(f,new A.q(-30,3,17),"Bolts")
break
case"tvalve":A.h9o(b6,a4,new A.q(-40,8,1.6),d,B.nd,new A.fAS(n,f,-30))
m.$3(f,new A.q(-40,8,2),"Valve")
break
case"those":if(d){b6.b=a4
b6.j8(A.aib(C.a([new A.q(-40,10,1.6),new A.q(-42,14,3.5),new A.q(-36,17,3.6),new A.q(-32,21,2.5)],g),6),0.55,B.Bv,!1,0.7,8)
b6.j8(C.a([new A.q(-36.8,15.5,3.6),new A.q(-35,16.4,3.6)],g),0.62,B.nd,!1,0.4,8)
if(a2)b6.dF(new A.q(-40,10,1.6),new A.q(-40,11.2,1.6),0.9,D.cL,8)}else o.$3$r(e,A.aib(C.a([new A.q(-40,10,1.6),new A.q(-42,14,3.5),new A.q(-36,17,3.6),new A.q(-32,21,2.5)],g),6),0.9)
m.$3(f,new A.q(-36,15,3),"Toilet hose")
break
case"faucet":if(d){b6.b=a4
b6.dq(new A.q(v,34.2,8),new A.q(v,34.6,8),3.6,B.j9,0.9,20)
b6.j8(A.Dj(C.a([new A.q(v,34.6,8),new A.q(v,40,8),new A.q(v,43,10),new A.q(v,43,14),new A.q(v,41.2,14.6)],g),1.4,6),0.5,B.j9,!0,0.9,10)
for(a6=0;a6<2;++a6){a7=E.a5e[a6]
e=v+a7
b6.dq(new A.q(e,34.6,8),new A.q(e,36.6,8),0.5,B.j9,0.9,8)
a0=a7<0?B.rm:B.nd
b6.dq(new A.q(e,36.6,8),new A.q(e,37.6,8),0.8,a0,0.6,10)}for(a6=0;a6<2;++a6){e=v+B.dnk[a6]
b6.dq(new A.q(e,34,8),new A.q(e,28.4,8),0.45,B.j9,0.9,8)}}else n.$3(e,new A.q(v,38,9),B.h1k)
m.$3(f,new A.q(v,38,8),"Faucet spot")
break
case"vhot":A.h9o(b6,a4,new A.q(u,8,1.6),d,B.rm,new A.fAT(n,f,v))
m.$3(f,new A.q(u,8,2),"Hot valve")
break
case"vcold":A.h9o(b6,a4,new A.q(s,8,1.6),d,B.nd,new A.fAU(n,f,v))
m.$3(f,new A.q(s,8,2),"Cold valve")
break
case"hhot":case"hcold":a8=e==="hhot"
a9=a8?-1:1
a0=v+a9*3
b0=A.aib(C.a([new A.q(v+a9*8,10.5,1.8),new A.q(v+a9*9,16,3.5),new A.q(v+a9*6,22,4.2),new A.q(a0,27.5,6),new A.q(a0,28.6,8)],g),6)
if(d){b6.b=a4
b6.j8(b0,0.5,B.Bv,!1,0.7,8)
b1=b0.length/2|0
e=C.a([b0[b1-1],b0[b1],b0[b1+1]],g)
b6.j8(e,0.58,a8?B.rm:B.nd,!1,0.4,8)
if(a2){e=D.d.gI(b0)
a0=D.d.gI(b0)
b6.dF(e,new A.q(a0.a+0,a0.b+1.4,a0.c+0),0.9,D.cL,8)
a0=D.d.gak(b0)
b6.dF(new A.q(a0.a,a0.b-1.4,a0.c),D.d.gak(b0),0.9,D.cL,8)}}else o.$3$r(e,b0,0.9)
e=b0[b0.length/2|0]
m.$3(f,e,a8?"Hot hose":"Cold hose")
break
case"tail":case"trap":case"arm":a0=e==="tail"
if(a0)a1=B.aze
else a1=e==="trap"?A.hc4():B.aBK
b2=p.$1(a1)
if(d){b6.b=a4
a1=a0?B.j9:B.q_
b6.apl(b2,0.66,a1,!1,!0,!0,a0?0.85:0.3,12)}else o.$3$r(e,b2,0.78)
a1=J.a6(b2)
a1=a1.h(b2,a1.gL(b2)/2|0)
if(a0)e="Tailpiece"
else e=e==="trap"?"P-trap":"Trap arm"
m.$3(f,a1,e)
break}}b3=new A.fB_(l,c0,b6,b7)
b3.$4("trap",q.a7(0,B.ab7),B.e8,0)
b3.$4("arm",q.a7(0,B.ab9),B.hu,1)
for(u=C.en(j,j.r,C.a7(j).c),s=u.$ti.c;u.C();){k=u.d
if(k==null)k=s.a(k)
b4=D.d.fY(b9.c,new A.fAV(k))
k=A.hzm(c0,k)
b8.push(new A.hh(new A.q(k.a+0,k.b+6,k.c+4),"\ud83d\udca7 LEAK: "+b4.c,D.bB,0))}return new A.tU(b5,b7,b8,B.wG,null,0)},
h9o(d,e,f,g,h,i){if(!g){i.$0()
return}d.b=e
d.dq(f.a7(0,B.hcw),f.a7(0,B.aXX),0.9,B.vM,0.8,12)
d.dq(f.a7(0,B.aXX),f.a7(0,B.h97),0.45,B.vM,0.8,10)
d.dq(f.a7(0,B.hfI),f.a7(0,B.aYg),0.3,B.af0,0.7,8)
d.dq(f.a7(0,B.aYg),f.a7(0,B.hgf),1.2,h,0.5,12)},
hzm(d,e){var w,v=d.c
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
ikt(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=C.a([],x.z),f=new A.fk(g),e=d.x
if(e.a===0)return g
for(e=C.en(e,e.r,C.a7(e).c),w=a0*2,v=e.$ti.c,u=d.e;e.C();){t=e.d
if(t==null)t=v.a(t)
s=A.hzm(d,t)
r=d.c
r===$&&C.c()
q=D.d.fY(r.c,new A.fRN(t)).b==="valve"||!u.t(0,t)
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
f.fP(new A.q(t+m*l*n,r+(l*k-l*l*j),p+(1.5+l*i)),h,B.Ze,3,6,0.5);++o}f.d=0.55
f.dq(new A.q(t,0.3,11),new A.q(t,0.5,11),7+2*Math.sin(w),B.Ze,0.6,18)
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
cnZ:function cnZ(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.d=_.c=$
_.e=f
_.f=g
_.r=!0
_.w=0
_.x=h
_.y=!1},
co2:function co2(d){this.a=d},
co3:function co3(d){this.a=d},
co_:function co_(d){this.a=d},
co4:function co4(d){this.a=d},
co5:function co5(d){this.a=d},
co6:function co6(){},
co7:function co7(){},
co0:function co0(d){this.a=d},
co1:function co1(d){this.a=d},
fB3:function fB3(d){this.a=d},
fB1:function fB1(d){this.a=d},
fAW:function fAW(d,e){this.a=d
this.b=e},
fAZ:function fAZ(d){this.a=d},
fAX:function fAX(d,e){this.a=d
this.b=e},
fAY:function fAY(d){this.a=d},
fB2:function fB2(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fAS:function fAS(d,e,f){this.a=d
this.b=e
this.c=f},
fAT:function fAT(d,e,f){this.a=d
this.b=e
this.c=f},
fAU:function fAU(d,e,f){this.a=d
this.b=e
this.c=f},
fB_:function fB_(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fB0:function fB0(d){this.a=d},
fAV:function fAV(d){this.a=d},
fRN:function fRN(d){this.a=d},
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
erm:function erm(d,e,f){this.a=d
this.b=e
this.c=f},
ern:function ern(d){this.a=d},
erl:function erl(d){this.a=d},
erh:function erh(d){this.a=d},
err:function err(d){this.a=d},
er6:function er6(d,e){this.a=d
this.b=e},
er7:function er7(d,e){this.a=d
this.b=e},
er8:function er8(d){this.a=d},
erd:function erd(d,e){this.a=d
this.b=e},
erb:function erb(d){this.a=d},
erc:function erc(d,e){this.a=d
this.b=e},
erk:function erk(d){this.a=d},
ers:function ers(d){this.a=d},
ere:function ere(d){this.a=d},
erf:function erf(){},
erg:function erg(d){this.a=d},
ero:function ero(d,e){this.a=d
this.b=e},
erp:function erp(d){this.a=d},
erq:function erq(d,e){this.a=d
this.b=e},
era:function era(d,e,f){this.a=d
this.b=e
this.c=f},
er9:function er9(d,e,f){this.a=d
this.b=e
this.c=f},
ert:function ert(d){this.a=d},
erx:function erx(d,e){this.a=d
this.b=e},
erv:function erv(){},
eru:function eru(d){this.a=d},
erw:function erw(d,e){this.a=d
this.b=e},
erj:function erj(d){this.a=d},
eri:function eri(d,e){this.a=d
this.b=e},
j4(d){return D.d.fY(B.uM,new A.h_8(d))},
aPX(d){var w
A:{if("tv"===d){w="The TV"
break A}if("lamp"===d){w="The lamp"
break A}if("toaster"===d){w="The toaster"
break A}if("washerM"===d){w="The washing machine"
break A}if("dryerM"===d){w="The dryer"
break A}if("rangeM"===d){w="The range"
break A}w="The hair dryer"
break A}return w},
csV(d,e,f,g,h){var w=x.S,v=x.N
v=new A.XL(g,f,C.U(w,v),C.aX(w),C.aX(w),C.U(w,x.cH),C.a([new A.XX(),new A.XX()],x.gD),C.U(w,x.cD),C.aX(w),C.U(w,v),C.aX(w),C.a([],x.s),C.U(w,v))
v.cm1(d,e,h)
return v},
h5t(d,e){var w=!0
if(d!==e)if(!(D.d.t(B.lj,d)&&D.d.t(B.lj,e)))if(!(D.d.t(B.jF,d)&&D.d.t(B.jF,e)))if(d==="light"||d==="fan")w=e==="light"||e==="fan"
else w=!1
return w},
z7:function z7(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
h_8:function h_8(d){this.a=d},
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
csZ:function csZ(){},
ct5:function ct5(d){this.a=d},
ct6:function ct6(d){this.a=d},
ct7:function ct7(d,e){this.a=d
this.b=e},
ct8:function ct8(d,e){this.a=d
this.b=e},
cta:function cta(d){this.a=d},
ct9:function ct9(d,e){this.a=d
this.b=e},
csY:function csY(d){this.a=d},
csW:function csW(){},
csX:function csX(d){this.a=d},
ct3:function ct3(){},
ct4:function ct4(){},
ct_:function ct_(){},
ct0:function ct0(d){this.a=d},
ct1:function ct1(d){this.a=d},
ctb:function ctb(d){this.a=d},
ct2:function ct2(d){this.a=d},
ciw(d,e,f,g){return new A.Ok(d,!1,f,g,null)},
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
evX:function evX(d,e,f){this.a=d
this.b=e
this.c=f},
evY:function evY(d){this.a=d},
evW:function evW(d){this.a=d},
ev2:function ev2(d){this.a=d},
ev3:function ev3(d){this.a=d},
ev1:function ev1(d){this.a=d},
ev4:function ev4(d){this.a=d},
ev5:function ev5(d){this.a=d},
ev0:function ev0(d){this.a=d},
ev6:function ev6(d){this.a=d},
ev7:function ev7(d){this.a=d},
evh:function evh(d){this.a=d},
evj:function evj(d){this.a=d},
ev8:function ev8(){},
ev9:function ev9(d){this.a=d},
eva:function eva(d){this.a=d},
evA:function evA(d,e){this.a=d
this.b=e},
evi:function evi(d){this.a=d},
evT:function evT(d){this.a=d},
evU:function evU(d){this.a=d},
evV:function evV(d,e){this.a=d
this.b=e},
evQ:function evQ(d){this.a=d},
evR:function evR(d,e){this.a=d
this.b=e},
evS:function evS(d,e){this.a=d
this.b=e},
evP:function evP(d){this.a=d},
evH:function evH(d){this.a=d},
evI:function evI(d){this.a=d},
evJ:function evJ(d){this.a=d},
evK:function evK(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
evL:function evL(d){this.a=d},
evM:function evM(d,e,f){this.a=d
this.b=e
this.c=f},
evN:function evN(d){this.a=d},
evO:function evO(d,e,f){this.a=d
this.b=e
this.c=f},
ew0:function ew0(d,e){this.a=d
this.b=e},
evg:function evg(d){this.a=d},
eve:function eve(d){this.a=d},
evf:function evf(d,e){this.a=d
this.b=e},
evd:function evd(d,e){this.a=d
this.b=e},
evb:function evb(d){this.a=d},
evc:function evc(d,e){this.a=d
this.b=e},
evk:function evk(d,e){this.a=d
this.b=e},
ew1:function ew1(d){this.a=d},
ew3:function ew3(d){this.a=d},
ew4:function ew4(d){this.a=d},
ew5:function ew5(d){this.a=d},
ew6:function ew6(d){this.a=d},
ew7:function ew7(d){this.a=d},
ew8:function ew8(d,e){this.a=d
this.b=e},
ew9:function ew9(d){this.a=d},
ewa:function ewa(d,e){this.a=d
this.b=e},
ew2:function ew2(d,e){this.a=d
this.b=e},
evZ:function evZ(d){this.a=d},
ew_:function ew_(d,e){this.a=d
this.b=e},
evy:function evy(){},
evz:function evz(){},
evl:function evl(d){this.a=d},
evm:function evm(d){this.a=d},
evn:function evn(d){this.a=d},
evq:function evq(){},
evr:function evr(){},
evs:function evs(){},
evt:function evt(){},
evu:function evu(){},
evv:function evv(d){this.a=d},
evw:function evw(){},
evx:function evx(d){this.a=d},
evo:function evo(d){this.a=d},
evp:function evp(){},
ewA:function ewA(d,e){this.a=d
this.b=e},
ewB:function ewB(d){this.a=d},
ewj:function ewj(d){this.a=d},
ewz:function ewz(d){this.a=d},
ewm:function ewm(d){this.a=d},
ewn:function ewn(d,e){this.a=d
this.b=e},
ewl:function ewl(d,e){this.a=d
this.b=e},
ewo:function ewo(d,e){this.a=d
this.b=e},
ewk:function ewk(d,e){this.a=d
this.b=e},
ewC:function ewC(d,e){this.a=d
this.b=e},
ewi:function ewi(d,e){this.a=d
this.b=e},
ewD:function ewD(d){this.a=d},
ewh:function ewh(d){this.a=d},
ewE:function ewE(d){this.a=d},
ewg:function ewg(d){this.a=d},
ewF:function ewF(d){this.a=d},
ewf:function ewf(d){this.a=d},
ewG:function ewG(d,e){this.a=d
this.b=e},
ewc:function ewc(d,e){this.a=d
this.b=e},
ewd:function ewd(d){this.a=d},
ewe:function ewe(d,e){this.a=d
this.b=e},
ewH:function ewH(d){this.a=d},
ewp:function ewp(d){this.a=d},
ewq:function ewq(d,e,f){this.a=d
this.b=e
this.c=f},
ewb:function ewb(d,e,f){this.a=d
this.b=e
this.c=f},
ewr:function ewr(d){this.a=d},
ews:function ews(d,e){this.a=d
this.b=e},
ewt:function ewt(d){this.a=d},
ewu:function ewu(d){this.a=d},
ewv:function ewv(d){this.a=d},
eww:function eww(d){this.a=d},
ewx:function ewx(d){this.a=d},
ewy:function ewy(d,e){this.a=d
this.b=e},
evG:function evG(d,e){this.a=d
this.b=e},
evF:function evF(d,e){this.a=d
this.b=e},
evB:function evB(d){this.a=d},
evC:function evC(d,e,f){this.a=d
this.b=e
this.c=f},
evD:function evD(d,e){this.a=d
this.b=e},
evE:function evE(d,e){this.a=d
this.b=e},
aia(d,e){var w=d.d,v=e.a,u=e.c,t=e.b,s=w.a,r=w.b
w=w.c
return d.c?new A.q(s+v,r-u,w+t):new A.q(s+v,r+t,w+u)},
h8E(d,e,f,g){var w,v,u,t,s,r=d.a,q=e.d,p=e.c?A.nE(r,1.5707963267948966,0,q):A.nE(r,0,0,q)
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
i50(a3,a4,a5,a6,a7,a8,a9,b0,b1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=x.i,a2=C.eD([a4,a5],a1)
for(w=b1.length,v=0;v<b1.length;b1.length===w||(0,C.L)(b1),++v){u=b1[v].a
a2.M(0,D.k.E(u[0],a4,a5))
a2.M(0,D.k.E(u[1],a4,a5))}t=C.C(a2,a2.$ti.k("cs.E"))
D.d.ff(t)
for(w=C.T(b1).k("Z<1>"),u=w.k("M.E"),s=0;r=s+1,r<t.length;s=r){q=t[s]
p=t[r]
o=p-q
if(o<0.01)continue
n=(q+p)/2
m=C.C(new C.Z(b1,new A.fto(n),w),u)
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
if(D.d.b3(m,new A.ftp(d)))continue
a0=!k||j>60?2:1
a3.ht(new A.q(n,d,a8),new A.q(o,j,a9),b0,a0)}}},
wW(d3,d4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3=null,c4=x.z,c5=C.a([],c4),c6=new A.fk(c5),c7=C.a([],x.a),c8=x.E,c9=C.a([],c8),d0=x.S,d1=C.U(d0,x.q),d2=$.dS=$.dS+1
c6.f=-1
c6.b=8001
c6.mj(B.h6y,B.ha4,B.BC,0.15,4)
c6.f=0
c6.ht(B.h63,B.aXp,B.aeX,3)
c6.aR(B.heY,B.hgp,B.i1,0.5)
c6.aJ(B.aXw,B.h5M,B.Bn)
c6.aJ(B.aXw,B.hgF,B.Bn)
c6.ht(B.ha9,B.aXp,B.aeX,3)
c6.aR(B.h5V,B.haa,B.vJ,0.15)
c6.aR(B.haU,B.hai,B.Fd,0.8)
c6.b=0
c6.f=3
c6.d=d3.gt6()?0.42:0.1
c6.ht(B.h46,B.hco,d3.gt6()?B.kG:B.bcy,3)
c6.d=1
c6.f=2
c6.b=8001
if(!d3.gt6())for(w=0;w<10;++w)c6.aE6(new A.q(-72+w*16,51.3,55),B.hd0,B.iz,!1,0.05)
else{c6.x=d2
c6.aR(B.hbm,B.h8y,D.c,0.2)
c6.aR(B.hhC,B.aXJ,D.c,0.2)
c6.aR(B.h7w,B.aXJ,D.c,0.2)}if(d3.gt6()){c6.x=d2
c6.aR(B.h7H,B.h8E,B.kG,0.2)}c6.x=0
c6.b=8001
c6.r=!0
c6.ht(B.hgb,B.hgY,B.agN,2)
c6.aR(B.hf7,B.h5u,B.Ys,0.1)
c6.aR(B.hf6,B.h5v,B.M8,0.1)
c6.aR(B.heF,B.aXg,B.M8,0.1)
c6.aR(B.h3j,B.aXg,B.M8,0.1)
c6.r=!1
d1.n(0,8001,B.edv)
c6.x=d2
c6.b=8002
c6.mj(B.hhj,B.aXk,B.iz,0.05,3)
c6.mj(B.h4z,B.aXk,B.iz,0.05,3)
d1.n(0,8002,B.edY)
for(v=d3.y,w=0;u=$.Hf(),w<u.length;++w){t=1000+w
c6.b=t
c6.cIV(new A.q(u[w],0,-2.25),B.hcG,B.iz,!1,0.05,2)
s=v.t(0,w)?"This one has a hole for the cable.":"Tap it with the drill to put a hole through it."
d1.n(0,t,new A.cV("Wall stud","A 2x4 stud, one of the vertical posts in the wall. They stand 16 inches apart. "+s,new A.q(u[w],20,-2),60))
if(v.t(0,w)){c6.b=0
c6.e=0.6
c6.aJ(new A.q(u[w],40,-2.25),B.h61,B.ai0)
c6.e=0}}c6.b=8000
c6.aR(B.h3u,B.h1M,B.XJ,0.5)
c6.e=0.4
c6.aJ(B.h9R,B.hfK,B.xS)
for(r=0;r<6;++r)for(v=19.5-r*3.6,q=0;q<2;++q)c6.aR(new A.q(61.6+q*4.8,v,0.5),B.fZO,B.Zh,0.3)
p=d3.ax&&!d3.ay
v=p?0.6:0
if(d3.ay)u=D.cd
else u=p?D.bB:D.hk
c6.aR(new A.q(64,-2.5+v,0.9),B.h8t,u,0.4)
c6.e=0
if(d3.ay)v="The main breaker has TRIPPED (orange). Tap it to flip it fully OFF, fix the problem, then turn it ON."
else v=d3.ax?"The power is ON. Tap to turn it OFF. Always turn it OFF before you touch any wire.":"The power is OFF. Tap to turn it ON."
d1.n(0,8000,new A.cV("Breaker panel",v,B.h5z,60))
c6.b=8003
for(v=d3.z,u=C.en(v,v.r,C.a7(v).c),t=x.o,s=u.$ti.c;u.C();){o=u.d
n=A.j4(o==null?s.a(o):o)
o=n.d
m=o.a-0.35
l=C.a([B.hdR,B.hbi,new A.q(m,40,-3.2)],t)
if(n.c)D.d.v(l,C.a([new A.q(m,51.4,-3.2),new A.q(m,51.4,o.c+11)],t))
else l.push(new A.q(m,o.b+11,-3.4))
c6.j8(A.Dj(l,3,6),0.2,B.Yy,!1,0.35,6)}d1.n(0,8003,B.eel)
for(u=x.eV,s=d3.Q,k=0;k<3;++k){j=B.oC[k]
i=s.h(0,j)
if(i==null||!i.a)continue
if(i.e)h=B.bqR
else h=i.d?B.bsl:B.brH
o=C.a([],u)
for(m=i.b,l=C.a7(m),g=new C.mr(m,m.r,l.k("mr<1>")),g.c=m.e,l=l.c;g.C();){m=g.d
if(m==null)m=l.a(m)
o.push(new C.cy([A.j4(m).d.a-1.15,A.j4(m).d.a+1.15,A.j4(m).d.b-2,A.j4(m).d.b+2]))}m=6100+k
c6.b=m
A.i50(c6,j,j+48,-47,47,-0.25,0.5,h,o)
o=i.e?"Painted and finished.":"A 4 by 8 foot sheet of drywall (gypsum between two layers of paper). It is screwed to the studs."
d1.n(0,m,new A.cV("Drywall sheet",o,new A.q(j+24,0,0),90))
c6.b=0
c6.e=0.3
for(o=i.c,m=C.a7(o),l=new C.mr(o,o.r,m.k("mr<1>")),l.c=o.e,m=m.c;l.C();){o=l.d
if(o==null)o=m.a(o)
f=D.o.ao(o,10)
e=D.o.F(o,10)
c6.fP(new A.q($.Hf()[f],-40+e*16,0.1),0.34,B.xS,3,5,0.3)}c6.e=0}for(u=d4.a,o=u!=="tape",m=d3.as,l=u!=="mud",g=u==="sand",w=0;w<2;w=a1){d=-24+48*w
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
if(a2===0)h=B.bqU
else h=a3.c?B.bmJ:B.bhE
c6.e=0.5
c6.aJ(new A.q(d,0,0.08+0.02*a2),new A.q(2.2+a2*1.4,94,0.12),h)
c6.e=0}else if(!o||!l||g){c6.d=0.45
c6.e=0.6
c6.aJ(new A.q(d,0,0.12),B.h8S,D.b_)
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
b1=A.bD_(b0,a0,!1)
b2=A.h8E(b1,n,new A.fB7(n),d2)
D.d.v(c5,b2.a)
d1.v(0,b2.b)
if(a0.f&&a0.c===0){a0=C.a([],c8)
for(a2=b1.c,a4=a2.length,b3=0;b3<a2.length;a2.length===a4||(0,C.L)(a2),++b3){b4=a2[b3]
a0.push(new A.hh(A.aia(n,b4.a),b4.b,b4.c,0))}D.d.v(c9,a0)}}else if(a7!=null&&a7.b.c>=2){a4=a7.a
b5=a7.b
b6=b5.x
b7=C.a([],c4)
b8=new A.fk(b7)
b9=new A.CA(C.U(d0,g))
b9.c=2
b9.x=b6
if(a4==="light"||a4==="fan")A.hrG(b8,a4,b9)
else{A.hrj(b8,A.ha7(a4),-0.25,b6,!0,!1,!0)
A.htM(b8,b6)}D.d.v(c5,A.h8E(new A.tU(b7,B.Sq,B.zy,B.wG,c3,0),n,new A.fB8(n),d2).a)
if(!a2){c6.f=3
c6.b=3000+a0
c6.e=0.4
c6.d=0.55
a2=n.d
b5=b5.x?D.ax:D.b8
c6.aJ(new A.q(a2.a,a2.b,a2.c+0.2),B.h8X,b5)
c6.d=1
c6.f=2
c6.e=0}d1.n(0,3000+a0,new A.cV(A.i0E(a4),A.i0D(d3,a0),A.aia(n,B.aaU),22))}else{a4=C.a([],c4)
b5=A.ha7(a9)===a9?a9:"outlet"
A.hqE(new A.fk(a4),b5,!1)
D.d.v(c5,A.h8E(new A.tU(a4,B.dAQ,B.zy,B.wG,c3,0),n,new A.fB9(n),d2).a)
a2=a2?"Ceiling box":"Electrical box"
a4=v.t(0,a0)?"The box is mounted and the cable is in. A device can be wired here.":"The box is mounted. Pull the cable to it."
d1.n(0,2000+a0,new A.cV(a2,a4,A.aia(n,B.aaU),24))}}c6.x=0
c0=new A.fBc(c6)
if(u==="wall"||u==="ceiling"||u==="fanbox")for(a5=0;a5<7;++a5){n=B.uM[a5]
c4=n.a
if(m.aj(0,c4))continue
c8=n.c
d0=n.d
s=d0.a
o=d0.b
a0=c8?new A.q(s,o-1,d0.c):new A.q(s,o,1.5)
a2=c8?B.h6a:B.h8g
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
s=c8?B.aXn:B.h6A
c0.$5$col$round(2000+c4,d0,s,D.bt,c8)}else if(u==="knife")for(a5=0;a5<7;++a5){n=B.uM[a5]
if(n.c||!m.aj(0,n.a))continue
c4=n.d
c8=c4.a
i=d3.aqq(c8)
if(i==null||i.b.t(0,n.a))continue
c0.$4$col(2000+n.a,new A.q(c8,c4.b,0.5),B.h8q,D.cL)}else if(u==="sheet")for(w=0;w<5;){j=B.a5o[w]
c0.$3(6000+w,new A.q(j,0,0.3),B.hcL);++w
c9.push(new A.hh(new A.q(j,50,1),"edge "+w,D.eP,0))}else if(u==="screw")for(a5=0;a5<3;++a5){j=B.oC[a5]
i=s.h(0,j)
if(i==null||!i.a)continue
for(c4=d3.aqL(j),c8=c4.length,d0=i.c,o=j+48,b3=0;b3<c4.length;c4.length===c8||(0,C.L)(c4),++b3){f=c4[b3]
for(a0=f*10,a2=7000+a0,r=0;r<6;++r){if(d0.t(0,a0+r))continue
c0.$3(a2+r,new A.q($.Hf()[f],-40+r*16,0.5),B.aXd)}a2=$.Hf()
if(f+1<a2.length&&a2[f]+16<=o)for(a0=7500+a0,r=0;r<6;r+=2)c0.$4$col(a0+r,new A.q(a2[f]+8,-40+r*16+8,0.5),B.aXd,D.du)}}if(!C.eD(["wall","ceiling","fanbox","cable","knife","sheet","screw",""],g).t(0,u))c4=D.d.t(B.zs,u)||C.eD(["outlet","gfci","switch","light","fan"],g).t(0,u)||D.d.t(B.lj,u)||D.d.t(B.jF,u)
else c4=!1
if(c4)for(c4=d3.CW,a5=0;a5<7;++a5){n=B.uM[a5]
if(D.d.t(B.zs,u)){c8=n.a
a7=l.h(0,c8)
if(a7!=null&&D.d.t(B.lj,a7.a)&&a7.b.c>=2&&!c4.aj(0,c8)){d0=n.d
c0.$4$col(3000+c8,new A.q(d0.a,d0.b,1.2),B.h9_,D.be)}}else{c8=n.a
if(m.aj(0,c8)&&v.t(0,c8)&&!l.aj(0,c8)){d0=n.c
s=n.d
o=s.a
g=s.b
s=d0?new A.q(o,g-1,s.c):new A.q(o,g,1.2)
o=d0?B.aXn:B.hcE
c0.$4$round(2000+c8,s,o,d0)}}}c6.r=!0
for(c4=d3.CW,c8=new C.cD(c4,C.a7(c4).k("cD<1,2>")).gaf(0);c8.C();){j=c8.d
d0=j.a
n=A.j4(d0)
v=n.d
d=v.a
c6.b=8200+d0
v=v.b
c6.j8(A.Dj(C.a([new A.q(d,v,2.5),new A.q(d,-46,3.5),new A.q(d,-46,22)],t),4,6),0.55,B.YC,!1,0.2,6)
c6.aR(new A.q(d,v,1.8),B.haR,B.bgQ,0.3)
v=c6.b=8100+d0
u=j.b
switch(u){case"tv":c6.aR(new A.q(d,-45,24),B.h4T,B.ahf,0.2)
c6.aR(new A.q(d,-19,24),B.h6o,E.FB,0.4)
if(c4.aj(0,d0))d0=d3.ax&&!d3.ay&&d3.a4L(d0)
else d0=!1
if(d0){d0=d-38.5
s=d+38.5
c7.push(new A.fP(C.a([new A.q(d0,1.5,25.7),new A.q(s,1.5,25.7),new A.q(s,-39.5,25.7),new A.q(d0,-39.5,25.7)],t),v,new A.fBa(j),320,180,9,2,0,!1))}break
case"lamp":c6.dq(new A.q(d,-47.5,24),new A.q(d,-46.5,24),6,B.XC,0.4,14)
c6.dq(new A.q(d,-46.5,24),new A.q(d,-22,24),1,B.BC,0.5,8)
c6.yU(new A.q(d,-26,24),new A.q(d,-12,24),9,L.YJ,!1,!0,5.5,0.2,16)
break
case"toaster":c6.aR(new A.q(d,-42.5,24),B.h2l,B.j9,0.8)
c6.aJ(new A.q(d,-38,24),B.hdQ,B.aiB)
break
case"washerM":case"dryerM":c1=u==="washerM"
d0=c1?B.ahU:B.aiQ
c6.aR(new A.q(d,-30,22),B.aX2,d0,0.4)
c6.aR(new A.q(d,-15.5,35.2),B.h8n,B.aeW,0.3)
c6.dq(new A.q(d,-29,35),new A.q(d,-29,36.2),10.5,B.aex,0.8,20)
d0=c1?B.af8:B.aiC
c6.dq(new A.q(d,-29,36.1),new A.q(d,-29,36.6),8.2,d0,0.9,20)
break
case"rangeM":c6.aR(new A.q(d,-30,22),B.aX2,B.Bv,0.7)
c6.aR(new A.q(d,-28,35.3),B.hc4,D.xP,0.9)
c6.aR(new A.q(d,-19.5,36.4),B.hfO,B.agq,0.9)
c6.aR(new A.q(d,-12.2,22),B.h8U,B.afR,0.5)
for(a5=0;a5<2;++a5)for(d0=d+B.aBa[a5],b3=0;b3<2;++b3){c2=B.avD[b3]
c6.dq(new A.q(d0,-11.6,c2),new A.q(d0,-11.2,c2),4.2,B.ahj,0.3,14)}break
default:c6.aR(new A.q(d,-43.5,24),B.h30,B.ahf,0.2)
c6.BF(new A.q(d-6,-38,24),new A.q(d+8,-38,24),3.4,B.FQ,3,0.6,12)
c6.wt(new A.q(d-8,-43,24),B.h2v,B.FQ,0.6,0)}d0=A.hZN(u)
s="Plugged into "+n.b
u=u==="tv"?s+". To unplug it, go behind it (the Behind the TV button) and tap the plug on the wall.":s+". Tap it to unplug."
d1.n(0,v,new A.cV(d0,u,new A.q(d,-35,20),60))}c6.r=!1
for(a5=0;a5<7;++a5){n=B.uM[a5]
d1.c3(0,2000+n.a,new A.fBb(n))}return new A.tU(c5,d1,c9,c7,c3,0)},
i0E(d){var w
A:{if("gfci"===d){w="GFCI outlet"
break A}if("switch"===d){w="Light switch"
break A}if("light"===d){w="Ceiling light"
break A}if("fan"===d){w="Ceiling fan"
break A}if("outlet"===d){w="Outlet"
break A}w=A.a2l(d)
break A}return w},
hZN(d){var w
A:{if("tv"===d){w="TV"
break A}if("lamp"===d){w="Lamp"
break A}if("toaster"===d){w="Toaster"
break A}if("washerM"===d){w="Washing machine"
break A}if("dryerM"===d){w="Dryer"
break A}if("rangeM"===d){w="Kitchen range"
break A}w="Hair dryer"
break A}return w},
i0D(d,e){var w,v=d.at.h(0,e)
if(v==null)return""
if(v.b.x)return"BURNT. It was wired wrong and it burnt out. Pull it out and put in a new one."
w=v.a
if(D.d.t(B.jF,w))return d.ch.t(0,e)?"The switch is ON. Tap to turn it off.":"The switch is OFF. Tap to flip it on."
if(w==="light"||w==="fan")return d.anu(e)?"It is running.":"It is off. Flip its switch (breaker on)."
w=d.CW.h(0,e)
return"Tap with a TV, lamp, toaster, hair dryer, washing machine, dryer or range in your hand to plug it in. Plugged: "+(w==null?"nothing":w)+"."},
ikK(b3,b4,b5,b6,b7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=C.a([],x.z),b2=new A.fk(b1)
for(w=D.d.gaf(B.uM),v=new C.f2(w,new A.fS5()),u=b3.at,t=b4*7;v.C();){s=w.gS(0)
r=s.a
q=u.h(0,r)
if(q==null||q.b.c<1)continue
p=b3.anu(r)?t:0.4
b2.b=3000+r
s=s.d
r=s.a
o=s.b-6.6
s=s.c
for(n=0;n<4;++n){m=p+n*3.141592653589793/2
l=A.vF(B.h1J,m)
b2.wt(new A.q(r+l.a,o+l.b,s+l.c),B.hgL,B.bft,0.3,m)}}w=b3.d
w===$&&C.c()
v=D.d.gaf(w)
s=new C.f2(v,new A.fS6())
r=b4*5
while(s.C()){o=v.gS(0).a
if(b3.anu(o)){k=A.j4(o)
b2.b=0
b2.d=0.25+0.05*Math.sin(r)
o=k.d
b2.fP(new A.q(o.a,o.b-5,o.c),11,B.Y0,4,10,0)
b2.d=1}}for(v=b3.CW,s=new C.cD(v,C.a7(v).k("cD<1,2>")).gaf(0),o=b4*1.6,l=b4*6;s.C();){j=s.d
i=j.a
if(v.aj(0,i))h=b3.ax&&!b3.ay&&b3.a4L(i)
else h=!1
if(!h)continue
g=A.j4(i).d.a
b2.b=8100+i
i=j.b
switch(i){case"tv":break
case"lamp":b2.b=0
b2.d=0.3+0.05*Math.sin(l)
b2.fP(new A.q(g,-19,24),11,I.xM,4,10,0)
b2.d=1
break
case"toaster":b2.e=0.8
i=C.ar(B.agK,A2.FU,(Math.sin(l)+1)/2)
i.toString
b2.aJ(new A.q(g,-38.2,24),new A.q(13,0.3,6),i)
b2.e=0
break
case"washerM":case"dryerM":f=i==="washerM"
b2.e=0.8
for(e=0;e<3;++e){m=b4*(f?5:7)+e*2.1
i=Math.cos(m)
h=Math.sin(m)
if(f)d=(e&1)===0?B.bed:B.FQ
else d=(e&1)===0?A2.FU:D.aA
b2.fP(new A.q(g+i*4.5,-29+h*4.5,36.8),1.9,d,3,6,0.2)}b2.e=0
break
case"rangeM":b2.e=0.8
for(a0=0;a0<2;++a0){a1=B.aBa[a0]
for(i=g+a1,h=r+a1,a2=0;a2<2;++a2){a3=B.avD[a2]
d=C.ar(E.Y2,B.bk_,(Math.sin(h)+1)/2)
d.toString
b2.r5(new A.q(i,-11.1,a3),new A.q(i,-10.9,a3),3.8,1.8,d,0,12)}}b2.e=0
break
default:for(i=g+9,e=0;e<6;++e)b2.fP(new A.q(i+D.k.F(o+e/6,1)*22,-38+Math.sin(e*2)*2,24),0.6,B.bn7,3,5,0.2)}}for(v=b3.db,v=new C.cD(v,C.a7(v).k("cD<1,2>")).gaf(0),s=b3.cx;v.C();){j=v.d
r=j.a
k=A.j4(r)
a4=b5.h(0,r)
a5=b4<=(a4==null?0:a4)
a6=s.t(0,r)
if(!a5&&!a6)continue
r=a5?j.b:"smolder"
A.hvD(b2,r,new A.fS7(k),1,b4)}if(b6){a7=(D.k.bf(b4*2.4)&1)===0
for(e=0;e<w.length;++e){k=A.j4(w[e].a)
a8=b3.r1(e)
v=k.a
b2.b=2000+v
b2.f=3
b2.e=0.9
b2.d=0.02
if(!u.aj(0,v)){s=k.d
r=s.a
o=s.b
if(k.c)b2.aJ(new A.q(r,o-1.5,s.c),B.hfk,D.c)
else b2.aJ(new A.q(r,o,2.2),B.hhw,D.c)}b2.d=1
if(a7){a9=a8?D.bf:D.ax
s=k.d
r=s.a
o=s.b
b0=k.c?new A.q(r,o-3.5,s.c):new A.q(r,o+7.4,2)
b2.fP(b0,v===b7?1.15:0.8,a9,4,8,0.2)}b2.e=0
b2.f=2}}return b1},
rP:function rP(d,e,f){this.a=d
this.b=e
this.c=f},
fto:function fto(d){this.a=d},
ftp:function ftp(d){this.a=d},
fB7:function fB7(d){this.a=d},
fB8:function fB8(d){this.a=d},
fB9:function fB9(d){this.a=d},
fBc:function fBc(d){this.a=d},
fBa:function fBa(d){this.a=d},
fBb:function fBb(d){this.a=d},
fS5:function fS5(){},
fS6:function fS6(){},
fS7:function fS7(d){this.a=d},
hnk(d,e){var w=new A.cwk(e,d,A.hgH())
w.bAt(4,d,e)
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
cwk:function cwk(d,e,f){var _=this
_.a=d
_.b=e
_.c=$
_.d=f
_.e=3
_.r=_.f=0
_.w=!1},
cwp:function cwp(d){this.a=d},
cwl:function cwl(){},
cwn:function cwn(){},
cwo:function cwo(){},
cwm:function cwm(d){this.a=d},
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
ey3:function ey3(d,e,f){this.a=d
this.b=e
this.c=f},
ey4:function ey4(d){this.a=d},
ey2:function ey2(d){this.a=d},
exT:function exT(d){this.a=d},
exY:function exY(d){this.a=d},
exZ:function exZ(d){this.a=d},
exX:function exX(d){this.a=d},
ey_:function ey_(d,e){this.a=d
this.b=e},
ey0:function ey0(d){this.a=d},
ey1:function ey1(d){this.a=d},
exW:function exW(d){this.a=d},
exV:function exV(d,e){this.a=d
this.b=e},
exS:function exS(d,e){this.a=d
this.b=e},
exQ:function exQ(d){this.a=d},
exR:function exR(d,e){this.a=d
this.b=e},
exU:function exU(d){this.a=d},
eyg:function eyg(d,e){this.a=d
this.b=e},
eyc:function eyc(){},
eyb:function eyb(d){this.a=d},
eyd:function eyd(){},
eye:function eye(){},
eyf:function eyf(d,e){this.a=d
this.b=e},
eya:function eya(d,e){this.a=d
this.b=e},
ey9:function ey9(d){this.a=d},
ey8:function ey8(d){this.a=d},
ey6:function ey6(d,e){this.a=d
this.b=e},
ey5:function ey5(){},
ey7:function ey7(d,e){this.a=d
this.b=e},
atV(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){return new A.y5(p,s,u,t,r,h,o,n,m,i,q,d,j,g,k,e,f,l)},
ikb(d){var w,v,u,t,s,r,q,p,o,n,m=d.geb(0),l=C.a([],x.T)
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
case"bathroom":l.push(B.dBU)
l.push(B.dBA)
w=-m/2
l.push(new A.ia(w,w+33,0,75))
break}return l},
bss(d,e,f,g,h,i,j,k,l,m,n,o){var w=new A.bsr(d,i,m,o,n,l,g,f,k,j,e,h,C.a([],x.n))
w.bAJ(d,e,f,g,h,i,j,k,l,m,n,o)
return w},
hrm(d,e){var w,v,u,t=d.w,s=D.d.bh(t,new A.fm6(e))
if(s<0)s=0
w=t[s]
v=d.geb(0)
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
csU:function csU(d,e){var _=this
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
bsr:function bsr(d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
fm6:function fm6(d){this.a=d},
aWD:function aWD(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=$},
bVq:function bVq(d,e){this.a=d
this.b=e},
bVr:function bVr(d){this.a=d},
hz6(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=C.a([B.dBN],x.T)
for(w=d.x,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u){t=w[u]
if(t.a===e)continue
s=t.b
if(D.d.t(B.a5m,s)||D.d.t(B.I8,s)||s==="bush")continue
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
hox(d,e,f){var w=new A.b9Y(d,-d.geb(0)/2+10,d.geb(0)/2-10,-760,d.gh_(0)-10,e,f,0,B.di9)
w.MD(0)
return w},
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
hsz(d){var w=d.toLowerCase()
if(D.a.t(w,"blue"))return B.nd
if(D.a.t(w,"ground")||D.a.t(w,"green"))return B.af5
if(D.a.t(w,"neutral")||D.a.t(w,"white"))return B.mx
if(D.a.t(w,"traveler a"))return B.rm
if(D.a.t(w,"traveler b"))return D.aA
if(D.a.t(w,"load"))return B.aiU
if(D.a.t(w,"support"))return D.dn
return B.boj},
i4Y(d){var w=d.toLowerCase()
if(D.a.t(w,"ground"))return B.af5
if(D.a.t(w,"common"))return D.M3
if(D.a.t(w,"traveler"))return B.vM
if(D.a.t(w,"neutral"))return B.Bs
if(D.a.t(w,"support"))return D.dn
return D.aA},
i37(d){var w=d.toLowerCase()
if(D.a.t(w,"ground"))return G.a2k
if(D.a.t(w,"neutral"))return D.wt
if(D.a.t(w,"support"))return Am.a1v
if(D.a.t(w,"light")||D.a.t(w,"load"))return D.qx
if(D.a.t(w,"motor"))return O.Cg
if(D.a.t(w,"traveler"))return D.jE
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
d7G:function d7G(d,e){this.a=d
this.b=e},
d7H:function d7H(d,e){this.a=d
this.b=e},
d7I:function d7I(d){this.a=d},
d7J:function d7J(d,e,f){this.a=d
this.b=e
this.c=f},
d7C:function d7C(d,e){this.a=d
this.b=e},
d7F:function d7F(d,e){this.a=d
this.b=e},
d7E:function d7E(d,e){this.a=d
this.b=e},
d7D:function d7D(d,e){this.a=d
this.b=e},
d7O:function d7O(d){this.a=d},
d7P:function d7P(d,e){this.a=d
this.b=e},
d7Q:function d7Q(d){this.a=d},
d7N:function d7N(d){this.a=d},
d7R:function d7R(d){this.a=d},
d7M:function d7M(d){this.a=d},
d7S:function d7S(d,e){this.a=d
this.b=e},
d7L:function d7L(d,e){this.a=d
this.b=e},
d7T:function d7T(d){this.a=d},
d7K:function d7K(d){this.a=d},
bxh:function bxh(d,e,f,g,h,i,j){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.a=j},
fhM:function fhM(){},
aLr:function aLr(){},
hvD(d,e,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
if(e==="none"||e.length===0)return
d.b=0
w=new A.fCO(a2,d,a0,a1)
v=new A.fCN(d,a2,a0,a1)
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
d.j8(m,t,o,!1,0,4)}d.d=0.16+0.1*Math.sin(a2*31)
d.fP(a0.$1(B.hcC),3.2*a1,D.du,4,8,0)
d.d=1
break
case"spark":w.$2(22,7)
d.d=0.2+0.1*Math.sin(a2*26)
d.fP(a0.$1(B.aXt),2.4*a1,I.xM,4,8,0)
d.d=1
break
case"smoke":d.d=0.3+0.08*Math.sin(a2*7)
d.fP(a0.$1(B.h5m),2.6*a1,D.ax,4,8,0)
d.d=1
v.$3(9,0.8,11)
w.$2(5,3)
break
case"fire":d.d=0.3+0.12*Math.sin(a2*20)
d.fP(a0.$1(B.aXt),4.4*a1,D.cL,4,8,0)
d.d=1
h=D.k.bf(a2*11)
for(t=0.85*a1,s=0.05*a1,r=0.5*a1,o=0.04*a1,k=0;k<6;++k){p=-2.2+k*0.88
g=Math.sin((h+k*5)*12.9898)*43758.5453
f=2.4+(g-Math.floor(g))*3.6
l=a0.$1(new A.q(p,-2.2,3))
g=Math.sin((h+k)*12.9898)*43758.5453
d.BF(l,a0.$1(new A.q(p+(g-Math.floor(g)-0.5)*1.2,-2.2+f,3.4)),t,D.fr,s,0,6)
d.BF(a0.$1(new A.q(p,-2.2,3.1)),a0.$1(new A.q(p,-2.2+f*0.62,3.5)),r,D.bt,o,0,6)}w.$2(16,6)
v.$3(10,1,13)
break
case"smolder":v.$3(4,0.9,9)
break}},
fCO:function fCO(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fCN:function fCN(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
h5v(d){var w
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
hvz(d,e,a0){var w,v,u,t,s=C.a([],x.fB),r=new A.fCj(s),q=new A.fCo(e),p=q.$2(B.VM,B.K3),o=q.$2(B.VM,B.K4),n=q.$2(B.VM,B.K5),m=q.$2(B.VN,B.K4),l=q.$2(B.VN,B.K3),k=q.$2(B.VN,B.K5),j=q.$2(B.VO,B.K5),i=q.$2(B.VO,B.K3),h=q.$2(B.VO,B.K4),g=new C.Z(e,new A.fCk(),C.T(e).k("Z<1>")).gL(0),f=D.d.b3(e,new A.fCl())
if(f)r.$5("UNVERIFIED",B.f4c,"A conductor is in use whose function was never verified. A wire color alone does not prove what a wire does.","Verify every conductor with a tester before you connect it.","Identify each wire with a tester and the device diagram, then connect it.")
if(D.d.b3(e,new A.fCm()))r.$5("LOOSE",B.t9,"A connection is loose. A loose connection heats up and can arc.","Every conductor must be fastened tightly under its screw or connector.","Tighten the connection.")
if(D.d.b3(e,new A.fCn()))r.$5("EXPOSED",B.t9,"Bare copper is showing outside the terminal. An exposed energized conductor can shock or short.","No conductor may be left exposed.","Trim the wire so only the part under the screw is bare.")
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
if(g>0&&p<d.b)r.$5("LOAD_SIDE",B.aQB,"The wires are on the LOAD screws. Power must come in on LINE; on LOAD the device would not protect or feed anything.","Supply (line) conductors go to the LINE terminals.","Move the wires to the LINE screws.")
f=d.b
if(p<f&&g===0&&o===0&&l===0&&n===0)r.$5("MISSING_HOT",B.JH,"The hot wire is not on the hot terminal, so the device gets no power.","The device needs its hot connection.","Connect the black (hot) wire to the brass terminal.")
if(p>=f){f=d.c
f=m<f&&f>0&&l===0&&k===0}else f=!1
if(f)r.$5("OPEN_NEUTRAL",B.t9,"The neutral is not connected, but the hot wire is. The device will not run, and parts of it can still be live. There may be nothing to see.","The neutral return conductor must be connected.","Connect the white (neutral) wire to the silver terminal.")
if(d.d&&j===0)r.$5("MISSING_GROUND",B.t9,"There is no equipment ground. It may seem to work, but nothing protects you if a fault happens.","A required equipment ground must be connected to the ground terminal.","Connect the bare copper (ground) wire to the green screw.")
for(f=s.length,v=B.qR,u=0;u<f;++u){t=s[u].b
if(A.avy(t)>A.avy(v))v=t}return new A.b6y(v,s,A.i0a(s,e))},
i0a(d,e){var w=new A.flE(d)
if(w.$1("SHORT")||w.$1("HOT_TO_GROUND"))return B.buF
if(w.$1("LOOSE"))return B.bux
if(w.$1("EXPOSED"))return B.buD
if(w.$1("GROUND_AS_CURRENT"))return B.buH
if(w.$1("REVERSED"))return B.buG
if(w.$1("NEUTRAL_GROUND"))return B.buI
if(w.$1("SUPPORT"))return B.buE
if(w.$1("OPEN_NEUTRAL"))return B.buC
if(w.$1("LOAD_SIDE")||w.$1("MISSING_HOT"))return B.buv
if(w.$1("UNVERIFIED"))return B.buw
if(w.$1("MISSING_GROUND"))return B.buz
return B.buB},
hV9(d){var w
switch(d.a.c.a){case 0:w=d.b.c===B.K3
break
case 1:w=d.b.c===B.K4
break
case 2:w=d.b.c===B.K5
break
case 3:w=!1
break
default:w=null}return w},
hvA(d,e,f){var w,v,u,t,s=C.a([],x.fB)
e.bQ(0,new A.fCq(f,s))
for(w=s.length,v=B.qR,u=0;u<w;++u){t=s[u].b
if(A.avy(t)>A.avy(v))v=t}return new A.b6y(v,s,v===B.qR?B.buA:B.buy)},
JH:function JH(d,e){this.a=d
this.b=e},
FM:function FM(d,e){this.a=d
this.b=e},
FT:function FT(d,e){this.a=d
this.b=e},
czk:function czk(d){this.c=d},
cCV:function cCV(d,e){this.a=d
this.c=e},
a4l:function a4l(d,e){this.a=d
this.b=e},
bMK:function bMK(d,e,f){this.b=d
this.c=e
this.d=f},
wr:function wr(d,e,f,g,h){var _=this
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
fCj:function fCj(d){this.a=d},
fCo:function fCo(d){this.a=d},
fCp:function fCp(d,e){this.a=d
this.b=e},
fCk:function fCk(){},
fCl:function fCl(){},
fCm:function fCm(){},
fCn:function fCn(){},
flE:function flE(d){this.a=d},
flF:function flF(d){this.a=d},
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
czm:function czm(d,e,f){this.a=d
this.b=e
this.c=f},
czn:function czn(){},
czo:function czo(){},
czp:function czp(){},
PM:function PM(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fCq:function fCq(d,e){this.a=d
this.b=e},
h9a(d){var w
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
hck(d){return C.bV(E.mC,null,new A.h_5(),d,!0,!0,!0,D.k5,!1,!1,x.H)},
hA0(d,e,f,g){var w=x.S
return C.bV(E.mC,null,new A.h_3(new A.czm(e,f,C.U(w,w)),g),d,!0,!0,!0,D.k5,!1,!1,x.dZ)},
h_5:function h_5(){},
h_3:function h_3(d,e){this.a=d
this.b=e},
a1h:function a1h(d,e,f){this.c=d
this.d=e
this.a=f},
bva:function bva(d){var _=this
_.d=d
_.c=_.a=_.e=null},
fbo:function fbo(d,e){this.a=d
this.b=e},
fbn:function fbn(d,e,f){this.a=d
this.b=e
this.c=f},
fbp:function fbp(d){this.a=d},
fbm:function fbm(d,e){this.a=d
this.b=e},
fbq:function fbq(){},
fbr:function fbr(d){this.a=d},
a5i:function a5i(d,e){var _=this
_.a=d
_.b=e
_.c=!1
_.d=null},
bSX:function bSX(d){this.a=d},
bSW:function bSW(d){this.a=d}},B,K,E,Ao,F,P,L,Ap,W,O,Aq
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
A.f_H.prototype={
a6(){return"_RadioType."+this.b}}
A.a9P.prototype={
R(){return new A.aej(null,this.$ti.k("aej<1>"))}}
A.aej.prototype={
gcoM(){var w=this.e
return w===$?this.e=new A.bpE(this):w},
gamb(){var w=this.Gd$
w=w==null?null:w.gaq6()
return w==null?this.a.d:w},
gazS(){this.a.toString
return!0},
bWN(){var w=this,v=w.a.c,u=w.gamb()
if(v===u)return
w.a5m(v===w.gamb()?null:v)},
a5m(d){var w=this.Gd$
if(w!=null)w.glH().$1(d)
this.a.e.$1(d)},
d5(){var w,v=this
v.eG()
w=v.c
w.toString
v.sa6Q(P.h5j(w,v.$ti.c))},
q(){this.sa6Q(null)
var w=this.d
if(w!=null)w.q()
this.a1()},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.a
m.toString
switch(0){case 0:w=o.gcoM()
v=w.a.gamb()
o.a.toString
u=new C.HR(!0,P.hTk(n,!1,n,o.gazS(),n,w,v,n,n,D.kr,n,n,n,n,n,!1,m.c,o.$ti.c),n)
break}C.an6(d)
o.a.toString
A:{m=new C.z(u,n)
break A}t=C.Q(d)
s=P.h5k(d)
o.a.toString
w=s.b
w=w==null?n:w.aU(C.aX(x.c1))
r=w
if(r==null)r=t.ax.y
w=o.a.at
v=o.gazS()
q=o.gazS()?o.gbWM():n
p=o.d
if(p==null){p=C.k4(!0,n,!0,!0,n,n,!1)
o.d=p}return new C.zw(C.dG(!1,n,!0,n,v,p,n,n,!1,n,n,m.a,n,n,n,n,q,!1,r,n,n,n,n,n,n,w,n,m.b,n),n)}}
A.bpE.prototype={
gaq6(){return this.a.gamb()},
glH(){return this.a.gLO()},
bjq(d){},
bkw(d){},
gdc(d){return this.a}}
A.aNW.prototype={}
A.q.prototype={
a7(d,e){return new A.q(this.a+e.a,this.b+e.b,this.c+e.c)},
aE(d,e){return new A.q(this.a-e.a,this.b-e.b,this.c-e.c)},
aI(d,e){return new A.q(this.a*e,this.b*e,this.c*e)},
FY(d){var w=this.b,v=d.c,u=this.c,t=d.b,s=d.a,r=this.a
return new A.q(w*v-u*t,u*s-r*v,r*t-w*s)},
guY(){var w=this.a,v=this.b,u=this.c
return Math.sqrt(w*w+v*v+u*u)},
gmW(d){var w=this,v=w.guY()
return v<1e-9?w:new A.q(w.a/v,w.b/v,w.c/v)}}
A.kq.prototype={}
A.cV.prototype={}
A.hh.prototype={}
A.tU.prototype={}
A.fP.prototype={}
A.fk.prototype={
WH(){var w=this.x
if(!(w!==0))if(this.r){w=$.dS+1
$.dS=w}else w=0
this.w=w},
aJ0(d,e,f,g,h,i,j,k){var w=this,v=i.gmW(0)
w.a.push(new A.kq(C.a([d,e,f,g],x.o),v,h,w.b,j,w.d,k,w.c,w.e,w.f,w.w))},
bjf(d,e,f,g,h,i,j){return this.aJ0(d,e,f,g,h,i,0,j)},
Cn(d,e,f,g,h,i){return this.aJ0(d,e,f,g,h,i,0,!1)},
cXs(d,e,f,g,h,i,j){return this.aJ0(d,e,f,g,h,i,j,!1)},
a7d(d,e,f,g,h,i){var w=this,v=(h==null?e.aE(0,d).FY(f.aE(0,d)):h).gmW(0)
w.a.push(new A.kq(C.a([d,e,f],x.o),v,g,w.b,0,w.d,i,w.c,w.e,w.f,w.w))},
bko(d,e,f,g){return this.a7d(d,e,f,g,null,!0)},
Bs(d,e,f,g,h,i,j,k){var w,v,u,t,s,r
this.WH()
w=e.a/2
v=e.b/2
u=e.c/2
t=new A.c0c(this,j,new A.c0d(k,d),new A.c0e(k),f,h)
if((i&1)===0)t.$4(new A.q(0,0,1),new A.q(-w,-v,u),new A.q(2*w,0,0),new A.q(0,2*v,0))
if((i&2)===0)t.$4(new A.q(0,0,-1),new A.q(w,-v,-u),new A.q(-2*w,0,0),new A.q(0,2*v,0))
if((i&4)===0)t.$4(new A.q(1,0,0),new A.q(w,-v,u),new A.q(0,0,-2*u),new A.q(0,2*v,0))
if((i&8)===0)t.$4(new A.q(-1,0,0),new A.q(-w,-v,-u),new A.q(0,0,2*u),new A.q(0,2*v,0))
if(g){s=-w
r=2*w
t.$4(new A.q(0,1,0),new A.q(s,v,u),new A.q(r,0,0),new A.q(0,0,-2*u))
t.$4(new A.q(0,-1,0),new A.q(s,-v,-u),new A.q(r,0,0),new A.q(0,0,2*u))}},
ht(d,e,f,g){return this.Bs(d,e,f,!0,0,0,g,0)},
aE6(d,e,f,g,h){return this.Bs(d,e,f,g,h,0,1,0)},
mj(d,e,f,g,h){return this.Bs(d,e,f,!0,g,0,h,0)},
aR(d,e,f,g){return this.Bs(d,e,f,!0,g,0,1,0)},
aJ(d,e,f){return this.Bs(d,e,f,!0,0,0,1,0)},
al2(d,e,f,g,h,i){return this.Bs(d,e,f,!0,g,h,i,0)},
wt(d,e,f,g,h){return this.Bs(d,e,f,!0,g,0,1,h)},
cIV(d,e,f,g,h,i){return this.Bs(d,e,f,g,h,0,i,0)},
aE5(d,e,f,g){return this.Bs(d,e,f,!0,0,0,1,g)},
yU(b3,b4,b5,b6,b7,b8,b9,c0,c1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this
b2.WH()
w=b4.aE(0,b3).gmW(0)
v=w.b
u=w.FY(Math.abs(v)<0.9?B.e8:B.hu).gmW(0)
t=w.FY(u).gmW(0)
s=b9<0?b5:b9
r=new A.c0f(u,c1,t)
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
q.push(new A.kq(C.a([new A.q(a6,a7,a8),new A.q(a9,b0,b1),new A.q(a0,a2,a4),new A.q(d,a1,a3)],j),a5,b6,b2.b,c0,b2.d,b8,b2.c,b2.e,b2.f,b2.w))
if(b7){q.push(new A.kq(C.a([b3,new A.q(a9,b0,b1),new A.q(a6,a7,a8)],j),new A.q(i,v,h),b6,b2.b,c0,b2.d,!1,b2.c,b2.e,b2.f,b2.w))
q.push(new A.kq(C.a([b4,new A.q(d,a1,a3),new A.q(a0,a2,a4)],j),w,b6,b2.b,c0,b2.d,!1,b2.c,b2.e,b2.f,b2.w))}}},
dq(d,e,f,g,h,i){return this.yU(d,e,f,g,!0,!1,-1,h,i)},
BF(d,e,f,g,h,i,j){return this.yU(d,e,f,g,!0,!1,h,i,j)},
a4y(d,e,f,g,h,i,j,k){return this.yU(d,e,f,g,h,i,-1,j,k)},
dF(d,e,f,g,h){return this.yU(d,e,f,g,!0,!1,-1,0,h)},
cNs(d,e,f,g,h,i,j){return this.yU(d,e,f,g,h,!1,-1,i,j)},
L8(d,e,f,g,h,i){return this.yU(d,e,f,g,h,!1,-1,0,i)},
L9(d,e,f,g,h,i){return this.yU(d,e,f,g,!0,!1,h,0,i)},
Tk(d,e,f,g,h,i,j){return this.yU(d,e,f,g,h,!1,i,0,j)},
fP(a7,a8,a9,b0,b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6=this
a6.WH()
w=new A.c0b(b0,b1)
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
v.push(new A.kq(C.a([new A.q(u+i*a8,t+h*a8,s+g*a8),new A.q(u+f*a8,t+e*a8,s+d*a8),new A.q(u+a0*a8,t+a1*a8,s+a2*a8),new A.q(u+a3*a8,t+a4*a8,s+a5*a8)],r),new A.q(i+f+a0+a3,h+e+a1+a4,g+d+a2+a5).gmW(0),a9,a6.b,b2,a6.d,!1,a6.c,a6.e,a6.f,a6.w))}},
bcm(d,e,f,g){return this.fP(d,e,f,6,10,g)},
ee(d,e,f,g,h){return this.fP(d,e,f,g,h,0.4)},
apl(d,e,f,g,h,i,j,k){var w,v,u,t,s
this.WH()
for(w=0;v=w+1,v<d.length;w=v){u=d[v]
t=d[w]
if(new A.q(u.a-t.a,u.b-t.b,u.c-t.c).guY()<0.000001)continue
u=d[w]
t=d[v]
if(g)s=w===0||w===d.length-2
else s=!1
this.a4y(u,t,e,f,s,h,j,k)}if(i)for(u=e*0.98,w=1;v=w+1,v<d.length;w=v)this.fP(d[w],u,f,4,k,j)},
j8(d,e,f,g,h,i){return this.apl(d,e,f,!0,!1,g,h,i)},
a7e(d,e,f,g,h,i,j){return this.apl(d,e,f,g,!1,h,i,j)},
r5(a4,a5,a6,a7,a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=this
a3.WH()
a3.cNs(a4,a5,a6,a8,!1,a9,b0)
w=a5.aE(0,a4).gmW(0)
v=w.FY(Math.abs(w.b)<0.9?B.e8:B.hu).gmW(0)
u=new A.c0g(v,b0,w.FY(v).gmW(0))
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
s.push(new A.kq(C.a([new A.q(p+i*a7,m+h*a7,l+j*a7),new A.q(p+f*a6,m+e*a6,l+g*a6),new A.q(p+a0*a6,m+a1*a6,l+d*a6),new A.q(p+a2.a*a7,m+a2.b*a7,l+a2.c*a7)],r),n,a8,a3.b,a9,a3.d,!1,a3.c,a3.e,a3.f,a3.w))}}},
cYX(d,e,f,g,h,i){return this.r5(d,e,f,g,h,i,16)}}
A.xi.prototype={
aZs(d){var w,v,u,t,s,r,q,p,o,n,m,l=this
if(d&&l.c!==l.x)l.w=l.c
w=D.k.E(l.w,l.e,l.f)
l.y=1
v=l.r
if(v!=null){u=Math.cos(l.b)
t=Math.sin(l.a)
s=Math.sin(l.b)
r=Math.cos(l.a)
q=new A.bJS()
p=l.d
o=v.a
p=q.$4(-u*t,p.a,o[0]+5,o[1]-5)
r=q.$4(u*r,l.d.c,o[2]+5,o[3]-5)
n=Math.min(Math.min(C.je(p),C.je(r)),C.je(q.$4(s,l.d.b,4,o[4]-5)))
m=Math.min(w,Math.max(l.e,n))
if(w>m)l.y=D.k.E(Math.sqrt(m/w),0.5,1)}else m=w
l.x=l.c=m},
axo(){return this.aZs(!0)},
ra(d){var w,v,u,t=this
t.ch=d
if(!d){w=t.a
v=t.ax
u=t.ay
t.a=D.k.E(w,v-u,v+u)}t.aW()},
hU(d,e,f,g){var w=this
w.CW=f
w.cx=d
w.cy=g
w.db=e
w.aW()},
xm(d,e){return this.hU(d,null,e,null)},
boh(d){return this.hU(d,null,null,null)},
aq2(d){return this.hU(null,null,d,null)},
aq3(d,e,f){return this.hU(d,e,f,null)},
Nq(d,e,f,g){var w=this
w.db=w.cy=w.cx=w.CW=null
w.d=f
w.c=d
w.a=g
w.b=e
w.axo()
w.aW()},
a71(d){var w,v,u,t=this
if(!(t.CW!=null||t.cx!=null||t.cy!=null||t.db!=null))return
w=1-Math.exp(-d*7)
if(t.cx!=null&&t.c!==t.x)t.w=t.c
v=t.CW
if(v!=null){u=A.pB(t.d,v,w)
t.d=u
if(u.aE(0,v).guY()<0.02){v=t.CW
v.toString
t.d=v
t.CW=null}}v=t.cx
if(v!=null){u=t.c
u+=(v-u)*w
t.c=u
if(Math.abs(u-v)<0.05){t.c=v
t.cx=null}}v=t.cy
if(v!=null){u=t.a
u+=(v-u)*w
t.a=u
if(Math.abs(u-v)<0.003){t.a=v
t.cy=null}}v=t.db
if(v!=null){u=t.b
u+=(v-u)*w
t.b=u
if(Math.abs(u-v)<0.003){t.b=v
t.db=null}}t.axo()
t.aW()},
d_d(d,e){var w,v,u,t,s=this,r=e.a,q=e.b,p=Math.min(r,q)*1.15*s.y,o=Math.cos(s.a),n=Math.sin(s.a)
q=new A.bJZ(s,new A.bK_(Math.cos(s.b),Math.sin(s.b),o,n),(d.a-r/2)/p,-(d.b-q/2)/p)
w=q.$1(0)
r=q.$1(1).c
v=w.c
u=r-v
if(Math.abs(u)<1e-9)return null
t=(0-v)/u
if(t<=0)return null
return q.$1(t)},
bfz(d,e,f){var w,v,u,t,s=this,r=e.a,q=e.b,p=Math.min(r,q)*1.15*s.y,o=Math.cos(s.a),n=Math.sin(s.a)
q=new A.bJT(s,new A.bJU(Math.cos(s.b),Math.sin(s.b),o,n),(d.a-r/2)/p,-(d.b-q/2)/p)
w=q.$1(0)
r=q.$1(1).b
v=w.b
u=r-v
if(Math.abs(u)<1e-9)return null
t=(f-v)/u
if(t<=0)return null
return q.$1(t)},
cPJ(d,e){return this.bfz(d,e,0)},
apE(d){var w,v=this
v.cx=null
w=v.c
if(w!==v.x)v.w=w
v.w=D.k.E(Math.max(v.w,w)*d,v.e,v.f)
v.aZs(!1)
v.aW()}}
A.bVb.prototype={
cWG(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this.a,f=g.length-1,e=a0.a,d=a0.b
for(;;){if(!(f>=0)){w=0
v=null
break}if(g[f].a.gbu().a.contains(e,d)){u=g[f]
w=u.b
u=u.a.gbu().a.getBounds()
v=new C.a3(u[0],u[1],u[2],u[3])
break}--f}if(w!==0&&v.gdD()<16)return w
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
gGR(d){var w=this.r.a
return w==null?0:w},
ciM(b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=null,a8=b2.a,a9=b2.b,b0=new C.a3(0,0,0+a8,0+a9)
$.S()
w=C.I()
w.sam(B.c4Q.aA(0,b0))
b1.aP(b0,w)
v=this.c.a*90
w=b1.a
J.bl(w.save())
w.translate(a8*0.45-v,a9*0.3)
b1.il(0,-0.45)
for(u=x.O,t=0;t<3;++t){s=C.bK(D.I,a9*(0.2-t*0.05),a8*(1.9-t*0.4))
r=[B.bh7,D.aJ,D.rp][t]
q=new C.ao(D.O,D.M,D.S,D.T,D.R)
q.sam(new C.c_(D.A,0.5,D.x,a7,0,C.a([r.j(0.3-t*0.07),r.j(0)],u),a7,a7).aA(0,s))
p=q.G()
w.drawOval(C.bG(s),p)
p.delete()}w.restore()
o=new C.e4()
o.cY(11)
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
e.sam(new C.c_(D.A,0.5,D.x,a7,0,C.a([D.aJ.j(0.28),B.bo4],u),a7,a7).aA(0,C.bX(i,g)))
b1.ad(i,g,e)
J.bl(w.save())
f=new C.aF(f.r,D.ag,a7,a7,C.a([],x.g))
f.D(new C.jL(C.bX(i,h)))
b1.mK(0,f)
f=C.I()
f.sam(B.euP.aA(0,C.bX(i,h)))
b1.ad(i,h,f)
d=C.I()
d.r=B.bhw.gp(0)
for(a0=0;a0<4;++a0){u=B.d1N[a0].a
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
for(u=h*0.16,a0=0;a0<3;++a0){q=B.cZH[a0]
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
w.r=B.biO.gp(0)
b1.ad(a6,h*0.28,w)
w=h*0.05
q=a6.a7(0,new C.t(h*0.08,w))
u=C.I()
u.r=B.aga.gp(0)
b1.ad(q,h*0.07,u)
u=-h
u=a6.a7(0,new C.t(u*0.1,u*0.09))
q=C.I()
q.r=B.aga.gp(0)
b1.ad(u,w,q)},
a3(j3,j4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1,e2,e3,e4,e5,e6,e7,e8,e9,f0,f1,f2,f3,f4,f5,f6,f7,f8,f9,g0,g1,g2,g3,g4,g5,g6,g7,g8,g9,h0,h1,h2,h3,h4,h5,h6,h7,h8,h9,i0,i1,i2,i3,i4,i5,i6,i7,i8,i9,j0=this,j1=null,j2={}
if(j0.z)j0.ciM(j3,j4)
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
i=new A.ctU(m,l,k,j)
h=new A.ctV(j0,i)
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
b0=Math.max(Math.max(w.c*2.4+450,a9),w.Q)
b1=C.U(t,s)
b2=C.U(t,t)
b3=B.hb_.gmW(0)
b4=b3.a7(0,B.tr).gmW(0)
b5=C.a([],x.bl)
u=j0.w
b6=u==null?B.Ii:u.$1(j0.gGR(0))
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
c1=new A.ctT(j2,j0,b7,b8,b9,m,l,k,j,c0,o,p,n,a0,a1,b0,r,q,b1,b2,b3.a,b3.b,b3.c,b4.a,b4.b,b4.c,b5)
c2=v.a
c3=c2.length>1500?A.i_7(v):j1
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
if(D.d.d0(c8,new A.ctN())){c9=C.a([],e)
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
b5.push(new A.G4(f1.r,f1.w,new A.ctO(j2,j0,f0<e9,h1,e8,f1,c9,h0),h0,D.L,f6-f1.f,f1.b,!1,!1))
continue}h2=new A.ctM(c8)
h3=C.a([],a5)
c8=$.S()
c9=C.a([],a8)
h0=new C.aF(c8.r,D.ag,j1,j1,c9)
for(h4=0;h4<6;h4=h5)for(c8=h4/6,h5=h4+1,f2=h5/6,c4=0;c4<8;c4=h6){f3=c4/8
h6=c4+1
f4=h6/8
h7=C.a([h2.$2(f3,c8),h2.$2(f4,c8),h2.$2(f4,f2),h2.$2(f3,f2)],a4)
if(D.d.b3(h7,new A.ctP()))continue
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
b5.push(new A.G4(f1.r,f1.w,new A.ctQ(j0,f1,h3),h0,D.L,f6-f1.f,f1.b,!1,!1))}D.d.aZ(e7,new A.ctR())
e8[0]=e7.length>6?e7[5]:0
h8=C.dN(b1,t,s)
h9=C.dN(b2,t,t)
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
i2.d=w}D.d.aZ(b5,new A.ctS())
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
g7.r=D.c.j(0.35+0.25*Math.sin(j0.gGR(0)*6)).gp(0)
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
t.drawRRect(C.e6(i9),i6)
i6.delete()
a4=new C.ao(D.O,D.M,D.S,D.T,D.R)
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
A.cDG.prototype={}
A.G4.prototype={}
A.avD.prototype={
R(){return new A.bse(new A.bVb(C.a([],x.a6)),new C.eC(0,$.ax()),D.bC,D.I,D.bC,null,null)}}
A.bse.prototype={
Z(){var w,v=this
v.a2()
A.hFZ()
w=v.pS(new A.f3d(v))
w.h7(0)
v.d!==$&&C.aQ()
v.d=w},
q(){var w=this.d
w===$&&C.c()
w.q()
w=this.f
w.T$=$.ax()
w.P$=0
this.byW()},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.a,l=m.as==null,k=l?n:new A.f34(o)
l=l?n:new A.f35(o,d)
w=m.c
v=m.d
u=m.e
t=m.r
s=o.f
r=m.w
m=m.x
q=C.a([v,s],x.dS)
p=o.a
q=C.a([C.jj(C.mH(D.iF,new C.er(C.b4(n,n,n,new A.b6B(w,v,o.e,u,t,s,r,m,p.y,p.Q,new C.h8(q)),D.fF),n),n,new A.f36(o),new A.f37(o),n,new A.f38(o),n,n,new A.f39(o)),D.t,n)],x.p)
o.a.toString
return C.mH(D.iF,C.aA(D.c6,new C.an(D.a_,n,D.b3,D.t,q,n),D.y,!1,n,l,k,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new A.f3a(o),new A.f3b(o),n,n,n,n,n,n,n,n,n,n,n,!1,D.a3),n,n,n,n,n,n,new A.f3c(o),n)}}
A.PR.prototype={
rY(d,e,f){var w,v,u,t,s,r=this
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
A.cLD.prototype={}
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
A.dpz.prototype={}
A.MD.prototype={
PB(d){return this.cp3(d)},
cp3(e4){var w=0,v=C.j(x.H),u=this,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1,e2,e3
var $async$PB=C.e(function(e6,e7){if(e6===1)return C.f(e7,v)
for(;;)switch(w){case 0:if(e4.getUint32(0,!0)!==1179937895)throw C.W("not a glb file")
for(n=x.c,m=12,l=null,k=null;m+8<=e4.byteLength;){j=e4.getUint32(m,!0)
i=e4.getUint32(m+4,!0)
h=J.eH(D.dK.gaS(e4),e4.byteOffset+m+8,j)
if(i===1313821514)l=n.a(D.X.aM(0,new C.Gq(!1).DK(h,0,null,!0),null))
if(i===5130562)k=h
m+=8+j}if(l==null||k==null)throw C.W("empty glb")
g=new A.djI(l,k)
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
a8=C.aT(J.r(a8==null?a7.a(a8):a8,"name"))
if(a8==null)a8=""
a3.push(a8.toLowerCase())}u.c=a3
u.d=D.d.bh(a3,new A.bTY())
a3=x.gL
a6=C.a([],a3)
for(a5=new C.bT(d,d.gL(0),a5),a8=x.U,a9=x.t;a5.C();){b0=a5.d
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
if(b5==null)b5=H.asc
a7=a8.a(a6.h(b4,"rotation"))
b6=a7==null?null:J.kK(a7,a5)
if(b6==null)b6=B.c75
a6=a8.a(a6.h(b4,"scale"))
b7=a6==null?null:J.kK(a6,a5)
if(b7==null)b7=B.ck7
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
a3.push(c1==null?A.hJ5(a0.length):c1)}n=a8.a(f.h(l,"animations"))
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
a9=J.kX(d2)
if(a9.A(d2,"CUBICSPLINE")){b1=d0.length
d4=new Float64Array(b1*d3)
for(b2=0;b2<b1;++b2)for(b9=b2*d3,c0=(b2*3+1)*d3,b8=0;b8<d3;++b8)d4[b9+b8]=d1[c0+b8]
d1=d4}if(!D.oE.gan(d0)){b1=d0.length
if(b1===0)C.b9(C.fr())
c5=Math.max(c5,d0[b1-1])}c3.push(new A.bch(c8,b0,d0,d1,a9.A(d2,"STEP")))}d5=C.aT(a5.h(c2,"name"))
if(d5==null)d5="clip"+a0.a
a0.n(0,d5,new A.bcC(c5,c3))}t=C.U(a2,x.c9)
s=0
n=x.H
e="Could not read a picture of "+u.a+": "
case 2:a0=s
a2=a8.a(f.h(l,"images"))
a2=a2==null?null:J.ad(a2)
if(!(a0<(a2==null?0:a2))){w=3
break}r=g.cRL(s)
if(r==null){w=4
break}try{a0=r
d6=C.h9S(a0)
q=d6==null?null:d6.pT(0,a0,null)
if(q!=null){p=q.cKg(D.c9,4)
a0=s
a2=p.a
a2=a2==null?null:a2.a
if(a2==null)a2=0
a3=p.a
a3=a3==null?null:a3.b
if(a3==null)a3=0
d7=p
a4=d7.gr_()
d8=4!==a4?d7.cKf(null,4):d7
a4=d8.a
a4=a4==null?null:a4.bnq(d8!==d7,D.LE)
if(a4==null){a4=d7.a
a4=a4==null?null:J.eS(a4.gaS(a4))
if(a4==null){a4=d7.a
a4=a4==null?null:a4.gaS(a4)
if(a4==null)a4=D.aG.gaS(new Uint8Array(0))
a4=J.eS(a4)}}J.aJ(t,a0,new A.bhL(a2,a3,new Uint8Array(C.cn(a4))))}}catch(e5){o=C.ab(e5)
$.am.$1(e+C.w(o))}w=5
return C.b(C.bP(D.bC,null,n),$async$PB)
case 5:case 4:++s
w=2
break
case 3:e0=u.bSO(l,g,d,t)
w=6
return C.b(C.bP(D.bC,null,n),$async$PB)
case 6:u.at=u.b96(e0,5000)
w=7
return C.b(C.bP(D.bC,null,n),$async$PB)
case 7:u.ax=u.b96(e0,1800)
n=u.at
n.r=u.b4j(n)
n=u.ax
n.r=u.b4j(n)
e1=u.azE(null,0)
e2=u.b7b(u.at,e1)
for(n=e2.length,e3=1/0,s=1;s<n;s+=3)e3=Math.min(e3,e2[s])
u.ay=isFinite(e3)?e3:0
return C.h(null,v)}})
return C.i($async$PB,v)},
cqt(d){var w,v,u
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
b4j(d){var w,v,u,t,s,r,q,p,o,n,m=d.a.length/3|0,l=new Uint8Array(m)
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
l[t]=o<n.length?this.cqt(n[o]):5}return l},
bSO(e9,f0,f1,f2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1,e2=null,e3="POSITION",e4="JOINTS_0",e5="WEIGHTS_0",e6=J.a6(e9),e7=x.U,e8=e7.a(e6.h(e9,"materials"))
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
for(a9=J.kK(e8.a(J.r(j.a(k.h(l,b1)),"primitives")),w),b0=a9.$ti,a9=new C.bT(a9,a9.gL(0),b0.k("bT<c2.E>")),b3=b2==null,b0=b0.k("c2.E");a9.C();){b4=a9.d
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
c1=g.a(J.r(c2!=null?a1.a(a0.h(d,c2)):D.cB,"pbrMetallicRoughness"))
c3=c1==null?e2:J.Dm(c1,i,h)
if(c3==null)c3=D.cB
c1=e7.a(c3.h(0,"baseColorFactor"))
c4=c1==null?e2:J.kK(c1,f)
if(c4==null)c4=B.ck8
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
m.push(this.bQU(d1,c9,d9,e0,e1,c4))}if(b3)a5.push(new C.b7(d2,b8,a7))}}return new A.dv6(new Float64Array(C.cn(s)),new Uint16Array(C.cn(q)),new Float64Array(C.cn(p)),new Uint8Array(C.cn(o)),new Int32Array(C.cn(n)),new Int32Array(C.cn(m)))},
bQU(d,e,f,g,h,i){var w,v,u,t,s,r,q,p=J.a6(i),o=p.h(i,0),n=p.h(i,1),m=p.h(i,2)
if(d!=null&&e!=null){w={}
p=f*2
v=g*2
u=h*2
t=(e[p]+e[v]+e[u])/3
s=(e[p+1]+e[v+1]+e[u+1])/3
r=w.a=w.b=w.c=0
q=new A.bTS(w,d)
q.$2(t,s)
for(p=[f,g,h];r<3;++r){v=p[r]*2
q.$2((t+e[v])/2,(s+e[v+1])/2)}o*=w.c/4/255
n*=w.b/4/255
m*=w.a/4/255}p=new A.bTR()
return(p.$1(o)<<16|p.$1(n)<<8|p.$1(m)|4278190080)>>>0},
b96(d7,d8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4={},d5=d7.a,d6=d5.length/3|0
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
f=new A.bU_(d4,d6,d7)
e=new A.bU1(d7)
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
c4=A.hgw(c2,c3,b1)
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
b9.bQ(0,new A.bTZ(c7,c0))
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
d0[p]=s[d3]}d1[b1]=u[d2]}return new A.dpz(c8,c9,d0,d1,new Int32Array(C.cn(b8)),c7)},
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
A.hJ6(o,r,n)}}m=d.CW.c3(0,"world",new A.bTW(a0.length))
l=new A.bTX(d,v,u,t,new Float64Array(16),m)
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
A.hgx(m,w*16,q[h],f*16,j,i)
i+=16}}for(w=a0.length,p=0;p<a0.length;a0.length===w||(0,C.L)(a0),++p,i=e){e=i+16
D.oE.eo(j,i,e,m,a0[p].c*16)}return j},
b7b(b8,b9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=b8.a,b4=b3.length/3|0,b5=new Float64Array(b4*3),b6=C.a([],x.t),b7=this.Q
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
cJF(d,e){var w,v,u=new A.bU4(this)
if(d){w=u.$1("run")
v=w==null?u.$1("walk"):w}else if(e){w=u.$1("walk")
v=w}else{w=u.$1("idle")
if(w==null)w=u.$1("samba")
v=w}if(v!=null)return v
u=u.$1("samba")
if(u==null){u=this.z
u=new C.cx(u,C.a7(u).k("cx<1>")).dN(0,new A.bU2(),new A.bU3(this))}return u},
cWW(b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=this,b4="world",b5={}
if(b6){w=b3.at
w===$&&C.c()
v=w}else{w=b3.ax
w===$&&C.c()
v=w}u=b3.cJF(c0,c5)
w=b3.z.h(0,u)
t=w==null?null:w.b
if(t==null)t=1
if(c5&&c4!=null&&D.a.t(u.toLowerCase(),"walk"))s=c4/50*t
else{w=B.dAb.h(0,b3.a)
s=c2*(w==null?1:w)}w=b3.e
r=w.h(0,u)
if(r==null){b3.azE(u,0)
if(b3.d>=0){q=b3.CW
r=new C.z(q.h(0,b4)[b3.d*16+12],q.h(0,b4)[b3.d*16+14])}else r=D.A5
w.n(0,u,r)}p=b3.azE(u,s)
b5.a=b5.b=0
if(b3.d>=0){w=b3.CW
b5.b=w.h(0,b4)[b3.d*16+12]-r.a
b5.a=w.h(0,b4)[b3.d*16+14]-r.b}o=b3.b7b(v,p)
w=b3.a
q=B.dAN.h(0,w)
n=c7+(q==null?0:q)
m=C.iq(v.a.length/3|0,new A.bU7(b5,b3,o,36,b8,Math.cos(n),Math.sin(n),c6,c8),!0,x.cv)
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
a5=b2==null?C.b1(h[D.o.ao(a0,3)]):A.i8C(h[D.o.ao(a0,3)],b2)
j.push(new A.kq(a4,a9,a5,b7,0.08,1,!1,0,0,2,q[b0]))}if(e&&f&&w!=="michelle")D.d.v(j,b3.bQV(v,m,n,c1,b7,q[0]))
return j},
bQV(a6,a7,a8,a9,b0,b1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5={}
for(w=a6.a.length/3|0,v=a6.r,u=-1e9,t=1e9,s=0;s<w;++s){v===$&&C.c()
if(v[s]!==0)continue
r=a7[s].b
if(r>u)u=r
if(r<t)t=r}if(u<t)return B.Ii
q=Math.cos(a8)
p=Math.sin(a8)
o=new A.q(p,0,q)
v=-p
n=Math.max(t,u-(u-t)*0.75)
for(m=a6.r,l=0,k=0,j=0,s=0;s<w;++s){m===$&&C.c()
if(m[s]!==0||a7[s].b<n)continue
i=a7[s]
l+=i.a
k+=i.c;++j}if(j===0)return B.Ii
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
d=new A.bTT(a5,new A.q(m,(u+n)/2,i),o,new A.q(q,0,v),e,new A.q(0,1,0))
w=C.ar(a9,B.bkn,0.88)
w.toString
v=C.ar(a9,D.w,0.25)
v.toString
m=C.ar(a9,B.bi8,0.6)
m.toString
a0=C.a([],x.z)
a1=new A.bTV(a0,o,b0,b1)
a2=new A.bTU(a1,d)
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
A.dv6.prototype={}
A.djI.prototype={
cRL(d){var w,v,u=this.a,t=J.a6(u),s=x.j,r=x.G,q=C.aK(J.r(r.a(J.r(s.a(t.h(u,"images")),d)),"bufferView")),p=q==null?null:D.k.N(q)
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
return new C.cy([-a0/2,a0/2,-12,0])}for(w=this.e,v=-w,u=d,t=e,s=u,r=t,q=0;q<a1;++q){p=a0[q]
for(o=p.e,o=[v*o/2,w*o/2],n=p.c,m=p.a,l=p.b,k=0;k<2;++k){j=o[k]
for(i=[-12,0],h=0;h<2;++h){g=A.vF(new A.q(j,0,i[h]),n)
f=g.a+m
r=Math.min(r,f)
s=Math.max(s,f)
f=g.c+l
t=Math.min(t,f)
u=Math.max(u,f)}}}return new C.cy([r,s,t,u])},
gapm(){return this.gDt().a[1]-this.gDt().a[0]},
gGP(){var w=this.w
return w.length===0?this.f:new C.N(w,new A.bIe(this),C.T(w).k("N<1,K>")).f4(0,D.pO)},
gbet(){return this.gDt().a[3]-this.gDt().a[2]},
ga4x(d){return this.w.length===0?0:(this.gDt().a[0]+this.gDt().a[1])/2},
ga4z(){return this.w.length===0?0:(this.gDt().a[2]+this.gDt().a[3])/2},
geh(d){var w=this
return Math.max(Math.max(w.gapm(),w.gbet()),Math.max(w.gGP()*1.3,w.x))*w.y}}
A.Hq.prototype={}
A.aTe.prototype={
bjN(){var w=this
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
TY(d){var w,v=this,u=J.a6(d)
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
v.f=typeof u.h(d,"logo")=="string"?D.cF.aO(C.cQ(u.h(d,"logo"))):null
v.r=typeof u.h(d,"pic")=="string"?D.cF.aO(C.cQ(u.h(d,"pic"))):null}}
A.bIc.prototype={
cYF(){var w,v,u
for(w=this.b,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)w[u].bjN()},
ah(){var w,v,u,t=this.a,s=C.a([],x.c7)
for(w=this.b,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u)s.push(w[u].ah())
return C.H(["template",t,"signs",s],x.N,x.A)},
TY(d){var w,v,u,t,s,r,q
this.a=D.d.b3(B.a3F,new A.bId(d))?C.cQ(J.r(d,"template")):"highway"
w=J.r(d,"signs")
if(x.j.b(w)){v=J.a6(w)
u=x.G
t=this.b
s=x.N
r=x.A
q=0
for(;;){if(!(q<6&&q<v.gL(w)))break
if(u.b(v.h(w,q)))t[q].TY(C.a2(u.a(v.h(w,q)),s,r));++q}}else this.b[0].TY(d)}}
A.ho.prototype={}
A.aoN.prototype={
R(){var w=A.hFF()
$.yY()
return new A.aoO(w,new C.ye())}}
A.aoO.prototype={
gir(){var w,v=this.e
if(v===$){w=new A.xi(0.5,0.25,420,B.h_8,$.ax())
w.e=30
w.f=5000
w.as=0.02
w.at=1.4
w.ra(!0)
this.e!==$&&C.bF()
this.e=w
v=w}return v},
gaxE(){var w=this.r
return w===$?this.r=new A.a5i(this.gc7d(),Z.BJ):w},
gzy(){return D.d.fY(B.a3F,new A.c4e(this))},
Z(){var w=this
w.a2()
w.f=A.h9v(w.gzy(),w.d)
w.abz()
A.hl7().bK(new A.c4c(w),x.P)
w.PF()},
q(){this.gaxE().bR(0)
var w=this.gir()
w.T$=$.ax()
w.P$=0
this.a1()},
abz(){var w=this.gzy(),v=this.gir(),u=w.ga4x(0),t=w.gGP(),s=w.ga4z()
v.Nq(w.geh(0)*1.9,0.22,new A.q(u,w.r+t/2,s),0.45)},
PF(){var w=0,v=C.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i
var $async$PF=C.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return C.b(C.az(),$async$PF)
case 7:q=e
p=C.aT(J.r(q.a,"ngmy_billboard_studio_v1"))
if(p==null){w=1
break}n=r.d
n.TY(x.c.a(D.X.aM(0,p,null)))
n=n.b,m=n.length,l=0
case 8:if(!(l<n.length)){w=10
break}o=n[l]
i=o
w=11
return C.b(A.ag_(o.f),$async$PF)
case 11:i.w=e
i=o
w=12
return C.b(A.ag_(o.r),$async$PF)
case 12:i.x=e
case 9:n.length===m||(0,C.L)(n),++l
w=8
break
case 10:if(r.c==null){w=1
break}r.m(new A.c4_(r))
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
return C.i($async$PF,v)},
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
c7e(){var w,v,u,t,s,r,q,p=this
if(!(p.x>=0)||p.c==null)return
w=p.w.gig()/1000
if(w>=30){p.aBW(!0)
return}v=A.i9U(p.gzy(),w)
u=v.b
t=u.aE(0,v.a)
s=Math.max(8,t.guY())
r=p.gir()
q=Math.atan2(t.a,-t.c)
r.Nq(s,Math.asin(D.k.E(-t.b/s,-1,1)),u,q)
p.m(new A.c45(p,w))},
br9(){var w,v=this
v.gir().as=-1.4
w=v.w
w.kK(0)
w.h7(0)
v.m(new A.c4d(v))
v.gaxE().h7(0)},
aBW(d){var w,v=this
v.gaxE().bR(0)
w=v.w
if(w.b==null)w.b=$.a9D.$0()
v.gir().as=0.02
v.m(new A.c42(v,d))
v.abz()},
czU(){return this.aBW(!1)},
cvP(d){var w=this
w.d.a=d
w.m(new A.c41(w))
w.abz()
w.IW()},
ZL(d){this.d.b[d].a=!1
this.m(new A.c3A())
this.IW()},
IV(d,e){return this.clu(d,e)},
clu(d,e){var w=0,v=C.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k
var $async$IV=C.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
m=e?400:900
w=7
return C.b(new C.hX().l2(85,m,D.eL),$async$IV)
case 7:q=g
if(q==null){w=1
break}w=8
return C.b(q.fl(),$async$IV)
case 8:p=g
w=9
return C.b(A.ag_(p),$async$IV)
case 9:o=g
if(o==null){w=1
break}n=r.d.b[d]
if(e){n.f=p
n.w=o}else{n.r=p
n.x=o}r.ZL(d)
t=2
w=6
break
case 4:t=3
k=s.pop()
if(r.c!=null)r.m(new A.c40(r))
w=6
break
case 3:w=2
break
case 6:case 1:return C.h(u,v)
case 2:return C.f(s.at(-1),v)}})
return C.i($async$IV,v)},
cBZ(){var w=this.c
w.toString
C.bV(D.av,null,new A.c44(this),w,!0,!0,!0,D.k5,!1,!1,x.H)},
bPb(){var w,v,u,t,s,r,q=this,p={}
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
C.bV(D.av,null,new A.c3Y(p,q,new A.c3Z(p,q,t,s,r),t,s,r),w,!0,!0,!0,D.k5,!1,!1,x.H)},
axG(d,e,f,g){var w=null,v=g?f.j(0.3):D.w.j(0.6),u=C.m(20),t=C.J(f,D.r,1)
return C.aA(w,C.p(w,C.d(d,w,w,w,w,w,w,C.l(w,w,f,w,w,w,w,w,w,w,w,13,w,w,D.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),D.f,w,w,new C.o(v,w,t,u,w,w,D.n),w,w,w,w,D.iq,w,w,w),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,e,w,w,w,w,w,w,!1,D.a3)},
axF(d,e,f){return this.axG(d,e,f,!1)},
c7c(d,e,f){return this.axG(d,e,D.aJ,f)},
B(d){var w,v,u,t,s,r=this,q=null,p=C.aG(d,q,x.w).w.r,o=r.f
o===$&&C.c()
w=x.p
o=C.a([C.bS(0,A.h5w(E.y0,r.gir(),q,q,0,q,q,q,o,!0),0,0,0)],w)
if(!(r.x>=0))o.push(C.ap(q,C.B(C.a([C.aA(q,C.p(q,D.a2C,D.f,q,q,new C.o(D.w.j(0.55),q,C.J(D.bU,D.r,1),q,q,q,D.a6),q,40,q,q,q,q,q,40),D.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new A.c48(d),q,q,q,q,q,q,!1,D.a3),D.as,C.E(C.d("Billboard studio \xb7 "+r.gzy().c,q,q,q,q,q,q,B.fib,q,q,q),1)],w),D.m,q,D.e,D.i,0,q,q),q,q,8,8,p.b+8,q))
if(r.x>=0&&r.y)o.push(C.bS(0,C.aA(D.c6,q,D.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new A.c49(r),q,q,q,q,q,q,!1,D.a3),0,0,0))
if(!(r.x>=0&&r.y)){v=C.a([],w)
if(r.z.length!==0&&!(r.x>=0)){u=D.dY.j(0.95)
t=C.m(12)
s=C.J(D.be,D.r,1)
v.push(C.p(q,C.d(r.z,q,q,q,q,q,q,D.UT,q,q,q),D.f,q,q,new C.o(u,q,s,t,q,q,D.n),q,q,q,D.ct,D.bT,q,q,q))}w=C.a([],w)
if(!(r.x>=0))w.push(r.axF("\ud83e\udea7 Choose billboard",r.gcBY(),F.fA))
if(!(r.x>=0))w.push(r.axF("\u270f\ufe0f Edit",r.gbPa(),D.be))
if(r.x>=0)w.push(r.axG("\u23f9 Stop the drone",r.gczT(),D.c0,!0))
if(r.x>=0)w.push(r.axF("\ud83d\udc41 Hide everything",new A.c4a(r),D.aN))
if(!(r.x>=0))w.push(r.c7c("\ud83c\udfac 30 second drone shot",r.gbr8(),!0))
v.push(C.bY(D.fI,w,D.br,q,8,8))
o.push(C.ap(p.d+12,C.x(v,D.m,q,D.e,D.P,0,D.p),q,q,10,10,q,q))}return C.c6(q,D.w,new C.an(D.a_,q,D.ab,D.t,o,q),q,!1,!1,q,q)}}
A.FX.prototype={}
A.zc.prototype={}
A.xn.prototype={}
A.aUo.prototype={}
A.a4q.prototype={}
A.akq.prototype={}
A.bMA.prototype={
bzG(d,e){var w,v,u,t,s,r,q,p=this,o=x._,n=C.a([],o)
for(w=p.a.x,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u){t=w[u]
s=t.b
if(s==="house2"||s==="bighouse")n.push(t)}p.b!==$&&C.aQ()
p.b=n
o=C.a([],o)
for(n=w.length,u=0;u<w.length;w.length===n||(0,C.L)(w),++u){t=w[u]
if(D.d.b3(B.Rj,new A.bMC(t)))o.push(t)}p.c!==$&&C.aQ()
p.c=o
for(o=p.f,r=0;r<5;++r){q=p.coO()
n=B.dw5[r]
w=B.dkd[r]
o.push(new A.aUo(n,w,new A.tO(B.ayg[r],B.Mj,w,B.LM,B.dpu[r],!1,0,1),58+r*7.5,q.a,q.b,B.aAD))}p.UM(0)},
coO(){var w,v=this.c
v===$&&C.c()
w=v.length
if(w===0)return B.evG
return A.yO(v[this.d.ap(w)])},
cX7(d){var w,v,u,t,s,r,q,p=this,o=C.a([],x._),n=p.c
n===$&&C.c()
w=n.length
v=0
for(;v<n.length;n.length===w||(0,C.L)(n),++v){u=n[v]
t=u.b
if(t==="store"||t==="shop"||t==="gasstation")o.push(u)}if(o.length===0)return
D.d.aZ(o,new A.bME(p,d))
for(n=p.e,s=0,v=0;v<2;++v){r=B.dnT[v]
q=o[D.o.F(s,o.length)];++s;++p.r
w=new A.xn(r,q,d,r==="medicine"?30:24)
w.w=!0
D.d.c6(n,0,w)}},
UM(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=j.d,h=j.e,g=x._,f=C.T(h).k("Z<1>"),e=0
for(;;){if(new C.Z(h,new A.bMF(),f).gL(0)<7){w=e+1
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
m=A.yO(o)
l=A.yO(n)
k=Math.sqrt(Math.pow(m.a-l.a,2)+Math.pow(m.b-l.b,2));++j.r
h.push(new A.xn(u.a,o,n,6+D.o.E(D.k.V(k/70),0,22)))}},
cZ9(d,e,f){if(this.x!=null||e.f!=null||!D.d.t(this.e,e))return!1
e.f=-1
e.x=f
this.x=e
return!0},
a4(d){var w=this.x
if(w==null)return
w.f=null
w.r=!1
this.x=null},
ga7_(d){var w=this.x
if(w==null)return null
return A.yO(w.r?w.d:w.c)},
bkI(d,e,f){var w,v,u,t,s,r,q,p=this,o=p.x
if(o==null)return null
if(f-o.x>360){p.a4(0)
return B.bvA}w=p.ga7_(0)
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
p.UM(f)
r=A.L9(o.b).b+" Delivered! +"+u+" points."
if(p.y>=8){p.Q+=40
r+=" You won the race with 8 deliveries: +40 points!"
p.aZi()
q=40}else q=0
v=q>0?"won":"delivered"
return new A.akq(v,r,u+q)},
aZi(){var w,v,u;++this.as
this.y=0
for(w=this.f,v=w.length,u=0;u<v;++u)w[u].r=0},
FH(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
for(w=j.f,v=w.length,u=j.e,t=e+2,s=j.d,r=x.C,q=null,p=0;p<w.length;w.length===v||(0,C.L)(w),++p){o=w[p]
n=o.ch
if(n===0){if(e<o.CW)continue
n=C.a([],r)
for(m=u.length,l=0;l<u.length;u.length===m||(0,C.L)(u),++l){k=u[l]
if(k.f==null)n.push(k)}if(n.length===0)continue
D.d.aZ(n,new A.bMB(j,o))
k=n[Math.min(n.length-1,s.ap(3))]
k.f=D.d.cp(w,o)
o.y=k
j.b7J(o,e,1,k.c)}else if(e>=o.Q){if(!o.db){o.e=o.ax
o.f=o.ay
o.db=!0
o.dx=e+(n===1?1.6:1.3)
continue}if(e<o.dx)continue
o.db=!1
m=o.y
m.toString
if(n===1)j.b7J(o,e,2,m.d)
else{D.d.W(u,m)
o.y=null
o.ch=0;++o.w;++o.r
o.x=o.x+m.e
o.CW=t+s.ag()*5
j.UM(e)
if(o.r>=8){q=o.a+" won the race with 8 deliveries! A new round starts."
j.aZi()}}}}return q},
b_6(d,e){return Math.sqrt(Math.pow(e.a-d.e,2)+Math.pow(e.b-d.f,2))},
b7J(d,e,f,g){var w,v,u,t=this,s=A.yO(g),r=B.hE.h(0,g.b),q=g.e*3.141592653589793/2,p=r.d/2-2,o=g.c+Math.sin(q)*p,n=g.d+Math.cos(q)*p
d.ch=f
d.ax=o
d.ay=n
w=t.w
if(w===$){v=new A.bKG(t.a)
v.b_7()
t.w!==$&&C.bF()
t.w=v
w=v}u=C.C(w.ap1(new C.z(d.e,d.f),s),x.I)
u.push(new C.z(o,n))
d.cx=u
o=A.iko(u)
d.cy=o
d.z=e
d.Q=e+Math.max(1,o/d.d)},
amz(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=C.a([],x.D)
for(w=this.f,v=w.length,u=d*2.2,t=0;t<w.length;w.length===v||(0,C.L)(w),++t){s=w[t]
r=s.e
q=s.f
if(s.db)continue
if(s.ch!==0&&d>=s.z&&s.cx.length>1){p=s.z
o=D.k.E((d-p)/Math.max(0.01,s.Q-p),0,1)
n=A.iku(s.cx,s.cy*o)
r=n.a
q=n.b
m=n.c
l=o<1}else{m=0
l=!1}k.push(new A.a4q(r,q,m,u+s.d,l,s.ch===2,s.c,s.b))}return k},
cZ7(){var w,v,u,t,s=C.a([new C.b7("You",this.y,this.Q)],x.aJ)
for(w=this.f,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u){t=w[u]
s.push(new C.b7(t.a,t.r,t.x))}D.d.aZ(s,new A.bMG())
return s},
r0(d,e,f){var w,v,u,t,s=C.a([],x.C)
for(w=this.e,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u){t=w[u]
if(t.f==null)s.push(t)}D.d.aZ(s,new A.bMD(this,e,f))
return s},
aax(d,e,f){return Math.sqrt(Math.pow(f.a-d,2)+Math.pow(f.b-e,2))}}
A.bKG.prototype={
b_a(d){return-this.a.geb(0)/2+8+d*24},
b_7(){var w,v,u,t,s=this,r=s.a
s.d=A.hz6(r,null)
s.b=D.k.dd((r.geb(0)-16)/24)+1
w=D.k.dd((r.gh_(0)-10- -750)/24)+1
s.c=w
s.e=C.bZ(s.b*w,!1,!1,x.Q)
for(v=0;v<s.b;++v)for(w=v*24,u=0;t=s.c,u<t;++u)s.e[v*t+u]=s.acr(-r.geb(0)/2+8+w,-750+u*24)
s.f=A.hf2(r)},
acr(d,e){var w,v,u=this.a
if(d<-u.geb(0)/2+12||d>u.geb(0)/2-12||e<-756||e>u.gh_(0)-14)return!0
u=this.d
u===$&&C.c()
w=u.length
v=0
for(;v<w;++v)if(u[v].aGX(d,e,14))return!0
return!1},
b_8(d,e,f){var w,v,u=e.a,t=f.a-u,s=e.b,r=f.b-s,q=Math.max(1,D.k.dd(Math.sqrt(Math.pow(t,2)+Math.pow(r,2))/8))
for(w=0;w<=q;++w){v=w/q
if(this.acr(u+t*v,s+r*v))return!1}return!0},
b_9(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=d.a,h=j.a,g=D.k.V((i+h.geb(0)/2-8)/24),f=j.b
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
ap1(d,e){var w,v,u,t,s,r,q,p,o,n,m=this
if(A.hf2(m.a)!==m.f)m.b_7()
w=m.b_9(d)
v=m.b_9(e)
if(w==null||v==null)return C.a([d,e],x.f)
u=new C.z(m.b_a(w.a),-750+w.b*24)
t=new C.z(m.b_a(v.a),-750+v.b*24)
s=x.f
r=m.acr(d.a,d.b)?C.a([d],s):C.a([],s)
q=m.acr(e.a,e.b)?C.a([e],s):C.a([],s)
p=C.a([],s)
o=r.length===0?d:u
n=q.length===0?e:t
if(m.b_8(0,o,n))D.d.v(p,C.a([o,n],s))
else D.d.v(p,m.cuC(w,v,o,n))
s=C.C(r,x.I)
D.d.v(s,p)
D.d.v(s,q)
return s},
cuC(a9,b0,b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this,a3=x.t,a4=C.a([],a3),a5=new A.dkd(a4,C.a([],x.n)),a6=x.S,a7=C.U(a6,a6),a8=C.U(a6,x.i)
a6=a9.a
w=a2.c
w===$&&C.c()
v=a9.b
u=a6*w+v
t=b0.a
s=b0.b
r=t*w+s
a8.n(0,u,0)
a5.aov(u,a2.c7J(a6,v,b0))
p=0
for(;;){if(a4.length!==0){o=p+1
a6=p<4e4
p=o}else a6=!1
if(!a6){q=!1
break}n=a5.eM()
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
a5.aov(e,d+Math.sqrt(Math.pow(v,2)+Math.pow(h-s,2)))}}}if(!q)return C.a([b1,b2],x.f)
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
for(;;){if(!(h>a3&&!a2.b_8(0,a4[j],a4[h])))break;--h}a1.push(a4[h])}return a1},
c7J(d,e,f){return Math.sqrt(Math.pow(d-f.a,2)+Math.pow(e-f.b,2))}}
A.dkd.prototype={
gcm(d){return this.a.length!==0},
aov(d,e){var w,v,u,t=this.a
t.push(d)
w=this.b
w.push(e)
v=t.length-1
for(;v>0;v=u){u=D.o.ao(v-1,2)
if(w[u]<=w[v])break
this.b8p(v,u)}},
eM(){var w,v,u,t,s,r=this.a,q=D.d.gI(r),p=r.pop(),o=this.b,n=o.pop()
if(r.length!==0){r[0]=p
o[0]=n
for(w=0;;w=s){v=2*w+1
u=v+1
t=r.length
s=v<t&&o[v]<o[w]?v:w
if(u<t&&o[u]<o[s])s=u
if(s===w)break
this.b8p(w,s)}}return q},
b8p(d,e){var w,v=this.a,u=v[d]
v[d]=v[e]
v[e]=u
v=this.b
w=v[d]
v[d]=v[e]
v[e]=w}}
A.aTK.prototype={
bk9(d,e,f){var w,v,u,t,s=this,r=null,q=s.d
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
a71(d){return this.bk9(d,!1,!1)}}
A.aZ0.prototype={
B(d){var w,v,u,t,s,r=null,q=D.k.E(this.c,0,1)
if(q>0.5)w=D.bf
else w=q>0.25?D.bt:D.ax
v=C.a([],x.p)
u=this.d
v.push(new C.D(D.qi,C.d(this.e,r,r,r,r,r,r,C.l(r,r,r,r,r,r,r,r,r,r,r,u,r,r,r,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),r))
t=C.m(u/3)
s=C.J(D.ac,D.r,1.5)
v.push(C.E(C.p(r,new C.bM(D.a5,r,r,C.Bx(D.A,C.c4(r,new C.o(w,r,r,C.m(u/4),r,r,D.n),D.bh),1,q),r),D.f,r,r,new C.o(D.aS,r,s,t,r,r,D.n),r,u,r,r,D.nv,r,r,r),1))
v.push(C.p(r,r,D.f,r,r,new C.o(D.ac,r,r,C.m(1),r,r,D.n),r,u*0.45,r,B.bBU,r,r,r,3))
return C.B(v,D.m,r,D.e,D.P,0,r,r)}}
A.Ux.prototype={
B(d){return new C.ty(new A.c1Q(this),null,this.c,null)}}
A.rR.prototype={}
A.SB.prototype={
gL(d){return this.a==="bus"?120:95.94999999999999}}
A.aTJ.prototype={}
A.bxx.prototype={
bAM(d,e,f,g){var w,v,u,t,s,r,q,p,o,n,m
for(w=this.e,v=this.f,u=0;u<4;++u){t=B.kq[u]
s=A.fqg(t).a[1]
r=new A.fj0(this,t)
q=0
for(;;){if(!(r.$1(q)&&q<s))break;++q}for(p=-1,o=0,n=0;n<s;++n){m=D.o.F(q+n,s)
if(r.$1(m)){if(p<0)p=m;++o}else if(p>=0)break}w.push(p)
v.push(o)}}}
A.bKI.prototype={
kK(d){var w,v,u,t
for(w=this.a,v=this.b,u=0;u<4;++u){w[u]=B.kq[u].r
v[u]=0}t=this.c=0
for(w=$.h0q();t<2;++t)w[t].r=-1},
FH(d,e){var w,v,u,t=this
if(e<t.c-0.0001)t.kK(0)
w=t.c
if(e-w>90){w=e-2
t.c=w}for(v=e-1e-9;w<v;){u=Math.min(0.05,e-w)
t.czJ(u)
w=t.c+=u}},
czJ(b8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7=this
for(w=$.h0q(),v=b7.a,u=0;u<2;++u){t=w[u]
s=t.r
if(s<0)continue
r=A.fqg(B.kq[s]).a[1]
q=D.k.F(v[s]-t.e[s],r)
if(q<0)q+=r
if(q>=t.f[s]&&q<r/2)t.r=-1}for(w=b7.b,p=110*b8,o=40*b8,n=0;n<4;++n){m=B.kq[n]
r=A.fqg(m).a[1]
l=m.a==="bus"
k=(l?120:95.94999999999999)/2
j=new A.bKJ()
for(i=34,h=0;h<4;++h){if(h===n||D.o.ao(n,2)!==D.o.ao(h,2))continue
g=D.k.F(v[h]-v[n],r)
if(g<0)g+=r
g-=k+(B.kq[h].a==="bus"?120:95.94999999999999)/2
if(g<400)i=Math.min(i,C.je(j.$1(g-18)))}for(f=$.bG_(),e=f.length,d=r-30,u=0;u<f.length;f.length===e||(0,C.L)(f),++u){a0=f[u]
if(a0.a!==D.o.ao(n,2))continue
a1=A.ha6(a0,b7.c)
if(a1===0)continue
a2=D.k.F(a0.b-(v[n]+k),r)
if(a2<0)a2+=r
if(a2>d)continue
if(a2<260)a3=!(a1===1&&a2<w[n]*1.2)
else a3=!1
if(a3)i=Math.min(i,C.je(j.$1(a2-4)))}for(f=$.h0q(),u=0;u<2;++u){t=f[u]
a4=t.e[n]
if(a4<0)continue
e=v[n]
a2=D.k.F(a4-e,r)
if(a2<0)a2+=r
if(D.k.F(e-a4,r)<t.f[n]){if(t.r<0)t.r=n
continue}if(t.r===n)continue
e=w[n]
for(d=$.bG_(),a3=d.length,a5=b7.c,a6=!1,a7=0;a7<a3;++a7){a0=d[a7]
if(a0.a!==D.o.ao(n,2)||A.ha6(a0,a5)===0)continue
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
cX0(d,e,f){this.FH(0,f)
return A.Le(B.kq[e],this.a[e])},
cRD(d,e){var w,v,u,t,s,r,q,p,o,n,m,l
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
A.Aj.prototype={
ga8s(){var w=this.d,v=w.e*3.141592653589793/2,u=Math.sin(v),t=Math.cos(v),s=this.r-1
return new C.z(w.c+u*42-t*s*24,w.d+t*42+u*s*24)}}
A.cB6.prototype={
bAB(d,e){var w,v,u,t,s=this,r=x._,q=C.a([],r)
for(w=s.a.x,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u){t=w[u]
if(t.b==="ubstation")q.push(t)}s.c!==$&&C.aQ()
s.c=q
r=C.a([],r)
for(q=w.length,u=0;u<w.length;w.length===q||(0,C.L)(w),++u){t=w[u]
v=t.b
if(v==="house2"||v==="bighouse")r.push(t)}s.d!==$&&C.aQ()
s.d=r
s.UM(0)},
UM(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.d
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
n.v(0,new C.cO(new C.Z(t,new A.cB8(o),r),new A.cB9(),s))
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
l=new A.Aj(l,B.dkJ[u.ap(12)],new A.tO(B.ayg[u.ap(5)],B.Mj,B.dsQ[u.ap(6)],D.aK,"human",!1,0,1),o,j,6+D.o.E(D.k.V(h/45),0,30),m)
l.x=d
t.push(l)}}},
aqH(d,e){var w,v,u,t=this.c
t===$&&C.c()
w=t.length
v=0
for(;v<t.length;t.length===w||(0,C.L)(t),++v){u=t[v]
if(Math.sqrt(Math.pow(u.c-d,2)+Math.pow(u.d-e,2))<150)return u}return null},
cWM(d,e){var w,v,u,t,s,r,q=this
if(q.f!=null)return null
w=q.aqH(d,e)
if(w==null)return null
v=C.a([],x.bz)
for(u=q.e,t=u.length,s=0;s<u.length;u.length===t||(0,C.L)(u),++s){r=u[s]
if(r.d===w)v.push(r)}if(v.length===0)return null
D.d.aZ(v,new A.cB7())
r=D.d.gI(v)
D.d.W(u,r)
return q.f=r},
ga7_(d){var w=this.f
return w==null?null:A.yO(w.e)},
cOz(d,e,f){var w,v,u=this,t=u.f,s=u.ga7_(0)
if(t==null||s==null)return 0
if(Math.sqrt(Math.pow(s.a-d,2)+Math.pow(s.b-e,2))>70)return 0
u.f=null;++u.r
w=u.w
v=t.f
u.w=w+v
u.y=f+4
u.UM(f)
return v},
amz(d){var w,v,u,t,s,r,q,p
if(d<this.y)return B.Ih
w=C.a([],x.D)
for(v=this.e,u=v.length,t=d*1.4,s=0;s<v.length;v.length===u||(0,C.L)(v),++s){r=v[s]
q=r.d
p=r.c
w.push(new A.a4q(r.ga8s().a,r.ga8s().b,Math.atan2(q.c-r.ga8s().a,q.d-r.ga8s().b)+3.141592653589793,t+r.a,!1,!1,p,p.c))}return w}}
A.pG.prototype={}
A.bKu.prototype={
gM8(){var w,v=this,u=v.r
if(u===$){w=A.hA8(v.b)
v.r!==$&&C.bF()
v.r=w
u=w}return u},
ccx(){var w,v=this.a
A:{if("hospital"===v){w=B.cyl
break A}if("dmv"===v){w=B.dtb
break A}if("shop"===v){w=B.cYG
break A}if("school"===v){w=B.d75
break A}if("firestation"===v){w=B.dmo
break A}if("tower"===v){w=B.dgw
break A}w=B.dra
break A}return w},
cHv(){var w,v=this.a
A:{if("hospital"===v){w=B.cyh
break A}if("dmv"===v){w=B.d93
break A}if("shop"===v){w=B.d3C
break A}if("school"===v){w=B.dgg
break A}if("firestation"===v){w=B.ddg
break A}if("tower"===v){w=B.dvE
break A}w=B.cY9
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
t=p.c8k(q,e)}if(t!=null)p.B(e)
return t},
c8k(d,e){var w,v,u,t,s,r=this,q="The city is still loading.",p="The breaker panel on level "
switch(r.a){case"hospital":if(e==null)return q
if(d===0){w=e.gC7()
v=C.T(w).k("Z<1>")
u=C.C(new C.Z(w,new A.bKv(),v),v.k("M.E"))
if(u.length===0)return"The desk: nobody needs the hospital right now. "+e.x+" doses of medicine in stock."
return e.aDI(D.d.gI(u))}t=d-1
if(e.e[t].a<0)return"This bed is empty. Admit someone at the desk first."
return e.bkn(t)
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
return"You taught the class a lesson. +3 points. "+B.a4m[D.o.F(w==null?0:w,5)]}w=e==null?null:e.r
return"The library: "+B.a4m[D.o.F(w==null?1:w,5)]
case"firestation":if(d===0){if(e!=null)e.r+=2
return"You checked the equipment with the firefighters. +2 points. Keep the extinguishers charged."}w=e==null?null:e.r
return"Fire drill: "+B.a4m[D.o.F((w==null?0:w)+1,5)]
case"tower":if(d===0){r.w=!0
return"The elevator: choose your level (you are on level "+r.f+" of "+r.gM8()+")."}if(d===2){r.x=!0
return"The balcony on level "+r.f+": the whole town is below you."}if(r.c){r.cy=!0
return p+r.f+". This office has no power. Let us find the wiring fault."}return p+r.f+": every breaker is on and the office has power."
default:if(d===0){if(r.c){r.cy=!0
return"The breaker panel. This house has no power. Let us find the wiring fault."}return"The breaker panel: every breaker is on and the house has power."}return r.c?"The outlet is dead: there is no power in this house.":"The outlet works. Everything here is wired right."}},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this
g.ch=d
w=g.a
if(w==="cabin"){g.bFk()
return}v=C.a([],x.z)
u=new A.fk(v)
t=C.a([],x.E)
A:{if("hospital"===w){s=B.eGO
break A}if("shop"===w){s=B.eAC
break A}if("dmv"===w){s=B.eD_
break A}if("school"===w){s=B.eUb
break A}if("firestation"===w){s=B.eHP
break A}if("tower"===w){s=new C.z(g.c?B.ago:B.bsF,B.bhJ)
break A}s=new C.z(g.c?B.ago:B.bqy,B.iz)
break A}r=s.a
u.f=-1
u.mj(B.h9I,B.h7O,s.b,0.2,3)
u.f=0
u.x=$.dS=$.dS+1
u.ht(B.h6X,B.aXK,r,3)
u.x=0
u.x=$.dS=$.dS+1
u.ht(B.h5I,B.abb,r,3)
u.x=0
s=w==="tower"
if(s){u.f=3
u.d=0.18
u.aJ(B.aXW,B.abb,B.Zd)
u.d=1
u.f=0}else{u.x=$.dS=$.dS+1
u.ht(B.aXW,B.abb,r,3)
u.x=0}u.f=0
q=s&&g.f>1
p=$.dS+1
if(q){u.x=$.dS=p
u.ht(B.h81,B.aXK,r,3)
u.x=0}else{u.x=$.dS=p
u.ht(new A.q(-94,70,320.6),new A.q(113.2,140,1.2),r,2)
u.x=0
u.x=$.dS=$.dS+1
u.ht(new A.q(94,70,320.6),new A.q(113.2,140,1.2),r,2)
u.x=0
u.x=$.dS=$.dS+1
u.aJ(new A.q(0,102,320.6),new A.q(76,76,1.2),r)
u.x=0
u.x=$.dS=$.dS+1
u.aR(B.haP,B.hg4,B.bd5,0.5)
u.x=0}u.f=1
for(o=0;o<3;++o){n=B.dn5[o]
u.aJ(new A.q(n,78,0.6),B.hfC,B.kG)
u.aR(new A.q(n,78,0.8),B.h6_,B.i1,0.6)}for(q=!s,o=0;o<2;++o){m=B.cFH[o]
u.aJ(new A.q(-149.6,78,m),B.aXB,B.kG)
u.aR(new A.q(-149.2,78,m),B.aYd,B.i1,0.6)
if(q){u.aJ(new A.q(149.6,78,m),B.aXB,B.kG)
u.aR(new A.q(149.2,78,m),B.aYd,B.i1,0.6)}}u.aJ(B.haV,B.hg3,B.kG)
u.aJ(B.hb5,B.h3B,D.bO)
u.f=2
u.r=!0
for(q=w!=="house2",p=w==="bighouse",o=0;o<3;++o){n=B.dny[o]
for(l=0;l<2;++l){m=B.cFI[l]
u.dF(new A.q(n,138,m),new A.q(n,122,m),0.5,D.jf,4)
k=(!q||p||s)&&g.c?D.hk:B.o8
u.ee(new A.q(n,120,m),5,k,3,6)}}switch(w){case"hospital":g.c_S(u,t,d)
break
case"shop":g.cwr(u,t)
break
case"dmv":g.bO_(u,t)
break
case"school":g.cu7(u,t)
break
case"firestation":g.czF(u,t)
break
case"tower":g.cDN(u,t)
break
default:u.f=1
u.aJ(B.hhg,B.hcl,g.c?B.qa:B.agN)
u.f=2
u.aR(B.heC,B.h16,B.Ys,0.1)
u.aR(B.heD,B.h17,B.M8,0.1)
u.aR(B.h0N,B.h5p,B.nX,0.2)
u.aR(B.h7b,B.hgU,E.FB,0.4)
u.aJ(B.h1x,B.h28,B.ahz)
u.ee(B.he4,10,B.Fb,3,6)
g.bbf(u,t)}u.f=1
if(s&&g.f>1)t.push(B.c1R)
else{u.aJ(B.hbl,B.h8C,D.cT)
t.push(B.c1Q)}if(d!=null){w=d.r
k=d.w
j=d.x
i=g.cx!=null?"   \ud83d\udce6 carrying":""
t.push(new A.hh(B.h_b,"\u2b50 "+w+"   \ud83c\udf5e "+k+"   \ud83d\udc8a "+j+i,D.N,0))}h=C.a([],x.a)
if(s){u.f=2
u.e=0
u.aR(B.h11,B.aXF,D.av,0.3)
u.aR(B.h7h,B.aXF,D.av,0.3)
u.aR(B.hbe,B.hfF,D.av,0.3)
w=x.o
h.push(new A.fP(C.a([B.h6K,B.hbG,B.haC,B.hds],w),0,new A.bKC(g),960,560,60,2,0,!1))
h.push(new A.fP(C.a([B.h45,B.hhn,B.h37,B.hfA],w),0,new A.bKD(g),960,560,60,2,0,!1))
h.push(new A.fP(C.a([B.hfm,B.fZR,B.h64,B.h8M],w),0,new A.bKE(g),960,560,60,2,0,!1))}if((!q||p)&&!g.c)h.push(new A.fP(C.a([B.hc9,B.h7Y,B.haH,B.haB],x.o),0,new A.bKF(g),960,480,60,2,0,!1))
g.ay=new A.tU(v,B.Sq,t,h,null,0)},
rA(d,e,f,g,h){var w=d.f
d.f=1
d.dF(new A.q(e,0.2,f),new A.q(e,0.6,f),g,h,20)
d.f=w},
c_S(d,e,f){var w,v,u,t,s,r,q,p,o
d.f=1
d.aJ(B.aWC,B.h3N,D.bB)
d.aJ(B.aWC,B.h1h,D.bB)
d.f=2
d.aR(B.heZ,B.h6v,B.nX,0.15)
d.aR(B.hf_,B.h6P,D.bN,0.3)
d.aJ(B.he1,B.h5E,D.aJ)
this.rA(d,-80,66,22,D.cp)
e.push(B.c1X)
e.push(B.c1M)
for(w=0;w<2;++w)d.aJ(new A.q(-105,8,B.cge[w]),B.h51,D.bs)
d.ee(B.h1E,9,B.Fb,3,6)
for(v=f!=null,u=0;u<3;++u){t=48+u*50
d.aJ(new A.q(76,8,t),B.h6s,D.cq)
d.aJ(new A.q(76,14,t),B.h6n,D.aP)
d.aJ(new A.q(108,18,t),B.h1C,D.c)
s=v&&u<f.e.length?f.e[u]:null
if(s!=null&&s.a>=0){r=f.c
r===$&&C.c()
q=r[s.a]
r=s.b>70?D.be:D.c0
d.aJ(new A.q(54,24,t),B.h3Q,r)
r=s.b>70
p=r?"cared for":"needs treatment"
r=r?D.ej:D.bB
e.push(new A.hh(new A.q(76,40,t),q.a.b+"  "+p,r,0))}else e.push(new A.hh(new A.q(76,30,t),"Free bed "+(u+1),D.bs,0))
r=t-2
o=d.f
d.f=1
d.dF(new A.q(20,0.2,r),new A.q(20,0.6,r),16,D.aA,20)
d.f=o}},
bO_(d,e){var w,v,u,t,s
d.f=2
d.r=!0
d.x=$.dS=$.dS+1
d.aR(B.aWt,B.h1O,D.bs,0.15)
d.aR(B.aWv,B.h1Q,D.bN,0.3)
d.aR(B.hew,B.h2W,D.av,0.3)
d.aR(B.hdE,B.h7L,D.b8,0.5)
d.aJ(B.hev,B.h5G,D.aK)
d.aJ(B.h3H,B.h27,D.bt)
d.x=0
d.x=$.dS=$.dS+1
d.aJ(B.aX7,B.aWF,D.cr)
d.aJ(B.aX3,B.aWK,D.bl)
d.ee(B.aX4,5.5,B.afJ,5,8)
d.ee(B.aX5,5.7,D.av,3,8)
d.x=0
d.x=$.dS=$.dS+1
d.aJ(B.he8,B.h4c,D.aP)
for(w=0;w<3;++w){v=90+w*30
d.aE5(new A.q(-146,62,v),B.h2x,[D.bB,D.bt,D.bl][w],0)
d.aJ(new A.q(-145.6,62,v),B.hfw,D.c)}d.aJ(B.h1S,B.h4b,D.fU)
d.aJ(B.hac,B.hgl,D.c)
d.aJ(B.h9o,B.hfa,D.bB)
d.x=0
for(u=0;u<4;++u){t=B.dn6[u]
d.x=$.dS=$.dS+1
d.aJ(new A.q(t,9,150),B.h32,D.bl)
d.aJ(new A.q(t,17,160),B.h2X,D.bl)
d.aJ(new A.q(t-8,4,150),B.aWZ,D.aK)
d.aJ(new A.q(t+8,4,150),B.aWZ,D.aK)
d.x=0}d.x=$.dS=$.dS+1
d.aJ(B.h0e,B.h5R,D.bM)
d.aR(B.h_i,B.h4R,D.ax,0.4)
d.aR(B.heI,B.h3i,D.du,0.5)
for(u=0;u<2;++u){t=E.aB5[u]
for(s=0;s<2;++s){v=B.cg7[s]
d.dF(new A.q(t,9,v-1.5),new A.q(t,9,v+1.5),5,D.av,8)}}d.x=0
this.rA(d,0,78,24,D.aJ)
e.push(B.c1U)
e.push(B.c1N)
e.push(B.c1V)},
aVx(a5,a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=a6*128
A:{if(1===a7){w=B.dci
break A}if(2===a7){w=B.ddG
break A}w=B.d7m
break A}a5.x=$.dS=$.dS+1
a5.aJ(new A.q(a6*148,40,120),B.h4G,B.afG)
for(v=0;v<2;++v)a5.aJ(new A.q(a4,40,B.cJV[v]),B.h4n,B.afG)
a5.aJ(new A.q(a4,4,120),B.h4o,B.bjR)
for(u=0;u<4;++u)a5.aR(new A.q(a4,11+u*18,120),B.h4k,B.btc,0.1)
for(t=a7===0,s=w.length,r=a6*2.7,u=0;u<4;++u){q=12+u*18
for(p=q+6.6,o=q+3.2,n=u*7,m=q+10,l=q+12.5,k=q+7,j=q+8,i=q+2.5,h=q+5.5,g=0;g<9;++g){f=76+g*11
for(e=n+g*3,d=u+g+a7,a0=0;a0<2;++a0){a1=a6*(114+a0*14)
a2=w[D.o.F(e+a0*5+a7,s)]
switch(D.o.F(d+a0,4)){case 0:a5.dq(new A.q(a1,q,f),new A.q(a1,j,f),3.2,a2,0.3,8)
a5.L8(new A.q(a1,i,f),new A.q(a1,h,f),3.3,D.c,!1,8)
break
case 1:a5.aR(new A.q(a1,k,f),B.h8s,a2,0.1)
a5.aJ(new A.q(a1-r,j,f),B.hc0,D.c)
break
case 2:a5.dq(new A.q(a1,q,f),new A.q(a1,m,f),2.4,a2,0.45,8)
a5.dF(new A.q(a1,m,f),new A.q(a1,l,f),1.2,D.c,6)
break
default:a3=t?B.btj:a2
a5.aR(new A.q(a1,o,f),B.hbo,a3,0.05)
a3=t?B.bgj:D.c
a5.aJ(new A.q(a1,p,f),B.h76,a3)}}}}a5.x=0},
aUu(d,e){var w,v,u,t,s,r,q,p
d.x=$.dS=$.dS+1
d.aR(new A.q(e,32,11),B.h52,D.bO,0.3)
d.aJ(new A.q(e,33,22.4),B.h4S,D.bo)
for(w=e-21,v=0;v<3;++v){u=v*17
d.aJ(new A.q(e,15+u,21),B.h4N,D.bM)
for(t=16+u,u=27+u,s=v*2,r=0;r<7;++r){q=w+r*7
d.dq(new A.q(q,t,21.6),new A.q(q,u,21.6),2.2,B.d1O[D.o.F(r+s,6)],0.5,6)}}d.x=0
p=d.f
d.f=3
d.d=0.2
d.aJ(new A.q(e,33,23.2),B.hh0,B.Zd)
d.d=1
d.f=p},
cwr(d,e){var w,v,u,t,s,r,q,p,o,n=this,m=n.b.b==="gasstation"
d.f=2
d.r=!0
d.x=$.dS=$.dS+1
d.aR(B.aWt,B.h1w,B.nX,0.15)
d.aR(B.aWv,B.h1y,D.bN,0.3)
d.aJ(B.h8f,B.hgv,B.btq)
d.aR(B.heq,B.h2L,D.e9,0.3)
d.aR(B.hes,B.h29,D.b8,0.5)
d.aJ(B.h05,B.h1i,D.av)
for(w=0;w<6;++w)d.aJ(new A.q(14+w*7.5,33,47),B.h5h,B.dsT[D.o.F(w,4)])
d.x=0
d.x=$.dS=$.dS+1
d.aJ(B.aX7,B.aWF,D.cr)
d.aJ(B.aX3,B.aWK,D.cT)
d.aJ(B.hbx,B.h9H,D.vU)
d.ee(B.aX4,5.5,B.afJ,5,8)
d.ee(B.aX5,5.7,B.bht,3,8)
d.x=0
n.aVx(d,-1,0)
n.aVx(d,1,m?2:1)
n.aUu(d,-104)
n.aUu(d,104)
for(v=[B.eB0,B.eQm],u=0;u<2;++u){t=v[u]
s=t.a
r=t.b
d.x=$.dS=$.dS+1
d.aJ(new A.q(s,5,170),B.h41,B.ahz)
d.aJ(new A.q(s,11,160),B.h43,B.bkD)
for(t=s-13.5,q=J.a6(r),w=0;w<4;++w)for(p=t+w*9,o=0;o<3;++o)d.ee(new A.q(p,12.5,163+o*7.5),4.2,q.h(r,D.o.F(w+o,3)),4,6)
d.x=0}d.x=$.dS=$.dS+1
d.aJ(B.aWp,B.h1p,m?D.bB:D.cT)
d.aJ(B.he0,B.aWW,D.aA)
d.aJ(B.h1r,B.aWW,m?D.bo:D.aJ)
d.x=0
n.rA(d,-64,120,24,D.bt)
n.rA(d,64,120,24,D.bq)
n.rA(d,0,84,22,D.bf)
e.push(new A.hh(B.h_5,m?"\u26fd NGMY Gas shop":"\ud83d\uded2 NGMY Mart",D.N,0))
e.push(B.c1O)
e.push(new A.hh(B.h6r,m?"\ud83d\udee2 For the car":"\ud83d\udc8a Medicine and health",D.iT,0))
e.push(B.c1Y)
e.push(B.c1P)
e.push(B.c1Z)},
cu7(d,e){var w,v,u,t,s
d.aR(B.h0I,B.hhE,D.dY,0.1)
d.aJ(B.hgi,B.hcN,B.bp4)
d.aR(B.h_k,B.h1F,B.nX,0.15)
for(w=0;w<4;++w){v=B.dfa[w]
u=v.a
t=v.b
for(s=0;s<2;++s){v=u+B.a5b[s]
d.aJ(new A.q(v,10,t),B.h2P,B.iz)
d.aJ(new A.q(v,5,t),B.h3o,D.bn)}}this.rA(d,0,80,24,D.bt)
this.rA(d,90,56,20,D.cp)
e.push(B.c1K)
e.push(B.c1S)},
czF(d,e){var w,v,u,t,s
d.aR(B.h_e,B.h2m,D.bB,0.3)
d.aR(B.heN,B.h5n,D.bB,0.3)
for(w=0;w<2;++w){v=B.dnt[w]
for(u=0;u<2;++u){t=B.cuf[u]
d.dF(new A.q(v,6,t-1.5),new A.q(v,6,t+1.5),8,D.nk,10)}}for(s=0;s<5;++s)d.aJ(new A.q(-142,30,110+s*18),B.h1j,D.al)
d.dF(B.h1n,B.h1o,2,D.bt,6)
this.rA(d,-60,130,24,D.aA)
this.rA(d,80,56,20,D.cp)
e.push(B.c1I)
e.push(B.c1T)},
cDN(d,e){var w,v,u,t,s,r,q,p,o,n=this
d.f=1
d.aJ(B.hfY,B.h9N,B.dub[D.o.F(n.f,5)])
d.f=2
d.b=19502
d.aJ(B.h7B,B.h6w,D.N)
d.aR(B.h59,B.aXj,D.bs,0.5)
d.aR(B.h3v,B.aXj,D.bs,0.5)
d.aR(B.h3Z,B.h19,D.bs,0.5)
d.e=16
d.aR(B.h0U,B.h7_,D.b8,0.4)
d.aJ(B.h8r,B.h4g,D.av)
d.aJ(B.hdD,B.h1g,D.e9)
d.ee(B.h89,2,D.bt,3,5)
d.ee(B.h4C,2,D.bf,3,5)
d.b=d.e=0
n.rA(d,0,70,26,D.aJ)
for(w=0;w<3;++w){v=B.cYe[w]
u=v.a
t=v.b
d.aR(new A.q(u,15,t),B.h4q,B.nX,0.2)
d.aJ(new A.q(u-19,7,t),B.aXa,D.jf)
d.aJ(new A.q(u+19,7,t),B.aXa,D.jf)
d.aR(new A.q(u,24,t-4),B.h1T,E.FB,0.5)
d.aJ(new A.q(u,9,t+18),B.h2_,D.cr)
d.aJ(new A.q(u,16,t+25),B.h1V,D.cr)}n.rA(d,105,100,26,D.bf)
d.d=0.3
d.f=3
d.aJ(new A.q(144,14,100),B.h4D,B.Zd)
d.d=1
d.f=2
for(w=0;w<5;++w)d.aR(new A.q(144,14,B.d5m[w]),B.ha3,D.dn,0.5)
d.ee(B.h1H,10,B.Fb,3,6)
d.aJ(B.h1A,B.h3K,B.nX)
s=-(n.f*22)
d.f=-1
d.aJ(new A.q(520,s-1,105),B.h6N,B.XF)
d.aJ(B.h5S,B.h3r,B.i1)
d.f=1
for(v=n.b.a,r=v*7,q=0;q<15;++q){p=30+D.o.F(r+q*13,90)
o=B.daD[D.o.F(v+q,4)]
d.aJ(new A.q(215+D.o.F(q,5)*80,s+p/2,-60+D.o.ao(q,5)*135),new A.q(38,p,38),o)}e.push(new A.hh(B.h_3,"\ud83c\udfe2 LEVEL "+n.f+" of "+n.gM8(),D.dF,19502))
e.push(B.c1J)
e.push(B.c1L)
n.bbf(d,e)},
bFk(){var w,v,u,t=C.a([],x.z),s=new A.fk(t)
s.f=-1
s.aR(B.h9a,B.hg8,D.bs,0.3)
s.f=0
s.x=$.dS=$.dS+1
s.aR(B.hey,B.aWV,B.agf,0.4)
s.x=0
s.x=$.dS=$.dS+1
s.aR(B.h40,B.aWV,B.agf,0.4)
s.x=0
s.f=1
s.aJ(B.h_0,B.h5Y,D.aN)
s.f=2
s.r=!0
for(w=0;w<2;++w)s.aR(new A.q(B.aB7[w],40,38),B.h8J,D.bM,0.7)
s.aR(B.h0V,B.hd6,D.xY,0.2)
for(w=0;w<2;++w)s.aR(new A.q(B.dne[w],45,80),B.h2k,D.aK,0.3)
s.aR(B.h0S,B.h5X,D.aK,0.3)
s.aJ(B.h0x,B.h3X,D.al)
s.aR(B.hgu,B.aY2,D.av,0.3)
s.aR(B.h9v,B.aY2,D.av,0.3)
v=this.as
D.d.aa(v)
u=x.o
v.push(new A.fP(C.a([B.hag,B.h8p,B.hc_,B.hfL],u),0,new A.bKw(this),520,230,6,2,0,!1))
v.push(new A.fP(C.a([B.h6Y,B.h7f,B.hfz,B.hct],u),0,new A.bKx(),720,600,30,2,0,!1))
v.push(new A.fP(C.a([B.had,B.hdC,B.hbc,B.h9M],u),0,new A.bKy(),720,600,30,2,0,!1))
v=C.C(v,x.K)
this.ay=new A.tU(t,B.Sq,B.zy,v,null,0)},
bbf(d,e){var w,v,u,t,s,r,q,p,o=this,n="dead, tap to fix it"
d.b=19500
d.aR(B.he7,B.h5g,B.XJ,0.5)
for(w=0;w<4;++w){v=o.c&&w===0?D.cd:B.Zh
d.aJ(new A.q(-144.2,62-w*6,45),B.h8W,v)}d.b=0
o.rA(d,-100,100,22,o.c?D.ax:D.bf)
o.rA(d,90,100,22,D.cp)
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
d.aJ(B.h4A,B.h2C,o.c?D.ax:D.bf)
d.b=19501
d.aJ(B.h6Q,B.h7u,t?D.bf:D.ax)
d.aJ(B.heQ,B.h7T,s?D.bf:D.ax)
d.aJ(B.h8Y,B.hb3,r?D.bf:D.ax)
d.d=1
d.aR(B.hdO,B.h86,B.MH,0.25)
for(q=0;q<2;++q)for(u=26+F.hq[q]*3.4,p=0;p<2;++p)d.aJ(new A.q(95+B.Rr[p],u,2.6),B.h9T,B.ahk)
d.aR(B.hg_,B.hbN,B.MH,0.25)
d.aJ(new A.q(-60,s?52:48,2.8),B.h3q,B.ajd)
d.b=0
d.f=2
if(o.c)v=v.length===0?"\u26a1 Breaker panel: tap to switch the power on":"\u26a1 Breaker panel: still to fix: "+D.d.aG(v,", ")
else v="\u26a1 Breaker panel: all fine"
e.push(new A.hh(B.he6,v,o.c?D.bB:D.ej,19500))
v=new A.bKz(o)
u=t?"\ud83d\udd0c Outlets: fixed":"\ud83d\udd0c Outlet: "+C.w(v.$2(D.a3c,n))
e.push(new A.hh(B.h6R,u,t?D.ej:D.bB,19501))
u=s?"\ud83d\udca1 Switch: fixed":"\ud83d\udca1 Switch: "+C.w(v.$2(B.cs5,"no power, tap to fix it"))
e.push(new A.hh(B.heR,u,s?D.ej:D.bB,19501))
v=r?"\ud83d\udca1 Ceiling light: fixed":"\ud83d\udca1 Ceiling light: "+C.w(v.$2(B.ckC,n))
e.push(new A.hh(B.h_4,v,r?D.ej:D.bB,19501))
if(o.c)e.push(B.c1H)},
cOD(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=x.z,i=C.a([],j),h=new A.fk(i),g=k.a,f=g==="tower"
if(f||g==="cabin"){w=C.a([],j)
v=new A.fk(w)
if(f){v.e=16
for(u=0;u<2;++u)v.aR(new A.q(F.hq[u]*(24+21*k.y),42,6.6),B.hfy,D.aP,0.7)}else{v.e=16
for(u=0;u<2;++u)v.aR(new A.q(F.hq[u]*(9+18*k.y),40,78.6),B.h2j,D.aN,0.7)}D.d.v(i,w)}switch(g){case"shop":A.wP(h,B.eru,d,B.Jr,!1,0,D.b7)
break
case"hospital":A.wP(h,B.ery,d,B.Tv,!1,0,D.bP)
t=D.k.F(d*12,220)
g=t<110
f=g?t:220-t
g=g?0:3.141592653589793
A.wP(h,A.atV(!1,0,-1,"",!1,0,"",-1,t/12,!1,!1,!1,0,!1,!0,6,g,40+f),d,B.Jr,!1,0,D.bO)
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
A.wP(new A.fk(f),B.erx,d,p,!1,0,p.c)
D.d.v(i,A.nE(f,-1.5707963267948966,-1.5707963267948966,new A.q(46,27,48+r*50)))}++r}}break
case"school":A.wP(h,B.erz,d,B.Tv,!1,0,D.bl)
for(u=0;u<3;++u){g=B.d8W[u]
A.wP(h,new A.y5(0,g.a,g.b,3.141592653589793,!1,!1,!1,!1,!1,0,!1,!1,"","",-1,0,-1,0),d,B.Jr,!1,0,g.c)}break
case"firestation":A.wP(h,B.erv,d,B.Jr,!1,0,D.bB)
A.wP(h,B.erw,d,B.Tv,!1,0,D.aA)
break
default:break}g=k.at
g===$&&C.c()
f=g.f
w=g.r
o=g.w
n=g.x
m=g.y
l=g.z&&n
A.wP(h,A.atV(!1,0,-1,"",!1,g.Q,"",-1,m,!1,!1,!1,0,l,n,f,o,w),d,e,!0,0,null)
if(k.cx!=null){j=C.a([],j)
new A.fk(j).aJ(new A.q(g.f+Math.sin(g.w)*9,48+g.Q,g.r+Math.cos(g.w)*9),B.aWL,B.iz)
D.d.v(i,j)}return i},
gdc(d){return this.e}}
A.Fq.prototype={}
A.P1.prototype={
gUq(){var w,v=this
if(!v.f)return"has died"
if(v.r>=0)return"in hospital"
if(v.c<30)return"in danger"
if(v.e)return"sick"
w=v.b
if(w>80)return"starving"
if(w>55)return"hungry"
if(v.d<40)return"unhappy at home"
return"fine"},
gaE0(d){var w,v=this.gUq()
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
bzE(d,e){var w,v=C.a([],x.fP)
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
gcNy(){var w=this.c
w===$&&C.c()
return new C.Z(w,new A.bLj(),C.T(w).k("Z<1>")).gL(0)},
PS(d){var w=this.f
D.d.c6(w,0,d)
if(w.length>12)w.pop()},
aDJ(a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this
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
m.c=l}}if(l<=0)a1.aSy(m)}}for(w=a1.e,v=1.2*a3,u=2.2*a3,d=0;d<w.length;++d){a0=w[d]
t=a0.a
if(t<0)continue
s=a1.c
s===$&&C.c()
m=s[t]
if(!m.f){a0.a=-1
continue}t=a0.b=Math.max(0,a0.b-a3)
if(t>30)a0.c=Math.min(100,a0.c+u)
else if(t<=0)if((m.c-=v)<=0){a1.aSy(m)
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
a1.NF(a4)
if((a1.at-=a3)<=0){a1.at=60+r.ag()*50
a1.cIX(a4)}},
aSy(d){var w
d.f=!1
d.c=0
w=d.r
if(w>=0)this.e[w].a=-1
d.r=-1
D.d.bs(this.d,new A.bLg(d))
this.PS(d.a.b+" has died. Keep up with everybody's needs: food, medicine and a home that works.")},
aWl(d,e){return D.d.b3(this.d,new A.bLh(d,e))},
NF(d){var w,v,u,t,s,r,q,p,o,n=this,m=n.d,l=C.C(m,x.fC),k=l.length,j=n.f,i=0
for(;i<l.length;l.length===k||(0,C.L)(l),++i){w=l[i]
v=B.CS[w.b]
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
if(!p.gkO()&&!n.aWl(r.a,"power")){m.push(new A.I7(n.Q++,r.a,"power",B.d1B[u.ap(3)],15))
D.d.c6(j,0,r.b+" is calling for help: no power.")
if(j.length>12)j.pop()}t=r.d
o=t>=0?d.d[t]:p
t=o.c
if((t==="bathroom"||t==="kitchen")&&!o.gjR()&&!n.aWl(r.a,"leak")&&m.length<4){m.push(new A.I7(n.Q++,r.a,"leak",B.das[u.ap(3)],15))
D.d.c6(j,0,r.b+" is calling for help: a leak.")
if(j.length>12)j.pop()}}},
cIX(d){var w,v,u,t,s,r,q=this
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
q.NF(d)},
bfd(d){var w,v,u,t=this
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
t.PS(u)
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
u.PS(v)
return v},
aDI(d){var w,v,u,t
if(!d.f)return d.a.b+" has died."
if(d.r>=0)return d.a.b+" is already in hospital."
if(!d.e&&d.c>60)return d.a.b+" is not ill enough for the hospital."
w=this.e
v=D.d.bh(w,new A.bLi())
if(v<0)return"The hospital is full. Treat the patients first, they go home when they are better."
w=w[v]
u=d.a
w.a=u.a
w.b=100
w.c=0
d.r=v
t=u.b+" is in bed "+(v+1)+" of the hospital. Keep up with their care."
this.PS(t)
return t},
bkn(d){var w,v,u=this,t=u.e[d],s=t.a
if(s<0)return"This bed is empty."
if(t.b>70)return"The patient is cared for already."
w=u.x
if(w<=0)return y.D
u.x=w-1
t.b=100;++u.r
w=u.c
w===$&&C.c()
v=w[s].a.b+" was treated. +1 point."
u.PS(v)
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
cSC(d){return d.r<0},
bfo(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=C.a([],x.e3),e=d.d
e===$&&C.c()
w=e[a0]
if(w.c!=="outside")return f
v=new A.bLl(new A.bLn(w))
for(e=D.d.gaf(this.gC7()),u=new C.f2(e,this.gcSB()),t=this.d,s=0;u.C();){r=e.gS(0)
q=D.d.b3(t,new A.bLk(r))
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
r.gUq()
r=q?"":l
g=q?"":k
f.push(new A.aa3(p.a,a0,o,n,j,p.e,i+p.b+" "+h,q,0,r,g));++s}return f},
cZu(a2){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.r,j=l.w,i=l.x,h=l.y,g=l.z,f=l.as,e=l.Q,d=x.ez,a0=C.a([],d),a1=l.c
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
d.push(C.H(["id",o.a,"res",o.b,"kind",o.c,"msg",o.d,"reward",o.e,"age",o.f],v,u))}w=x.Q
u=C.U(v,w)
for(r=a2.gqT(),q=r.length,t=0;t<r.length;r.length===q||(0,C.L)(r),++t){n=r[t]
u.n(0,""+n.a,n.gkO())}w=C.U(v,w)
for(r=D.d.gaf(a2.gqT()),q=new C.f2(r,new A.bLo());q.C();){m=r.gS(0)
w.n(0,""+m.a,m.gjR())}return C.H(["v",1,"seed",l.a,"points",k,"food",j,"medicine",i,"served",h,"saved",g,"clock",f,"nextCall",e,"res",a0,"beds",a1,"calls",d,"wired",u,"plumbed",w],v,x.A)},
CX(d,e){return this.bov(0,e)},
bov(d,e){var w=0,v=C.j(x.H),u=1,t=[],s=this,r,q,p,o
var $async$CX=C.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return C.b(C.az(),$async$CX)
case 6:r=g
q=C.dN(s.cZu(e),x.N,x.A)
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
A.apN.prototype={
R(){return new A.bkX()}}
A.bkX.prototype={
gbk7(){var w=this.r
return w===$?this.r=this.a.c:w},
Z(){this.a2()
this.a_4()},
a_4(){return this.c2P()},
c2P(){var w=0,v=C.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$a_4=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:m={}
w=3
return C.b(A.aUa(),$async$a_4)
case 3:l=e
if(t.c==null){w=1
break}m.a=null
if(l!=null){s=J.a6(l)
r=C.aK(s.h(l,"seed"))
q=r==null?null:D.k.N(r)
if(q==null)q=1
r=$.Ec
if((r==null?null:r.b)===q){r.toString
t.e=r}else{r=A.aWC(q)
t.e=$.Ec=r
A.hff(r,l)}m.a=A.h1m(l)
r=Date.now()
s=C.aK(s.h(l,"at"))
s=s==null?null:D.k.N(s)
p=D.k.E((r-(s==null?Date.now():s))/1000*0.15,0,90)
while(p>0){o=p>5?5:p
s=m.a
r=t.e
r===$&&C.c()
s.aDJ(0,o,r)
p-=o}}else{s=$.Ec
if(s==null)s=$.Ec=A.aWC(D.o.F(Date.now(),1e5))
t.e=s
s=s.b
n=A.h1l(s,s)
m.a=n
n.NF(t.e)}$.a4i=m.a
t.m(new A.dSP(m,t))
t.f=C.dh(D.fB,new A.dSQ(t))
case 1:return C.h(u,v)}})
return C.i($async$a_4,v)},
c8p(){var w,v,u,t=this,s=t.d
if(s==null||t.c==null)return
w=s.f
v=w.length===0?"":D.d.gI(w)
u=t.e
u===$&&C.c()
s.aDJ(0,1,u)
if(w.length!==0&&D.d.gI(w)!==v)t.J5(D.d.gI(w))
if(++t.y%8===0)s.CX(0,t.e)
t.m(new A.dT1())},
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
w.m(new A.dSW(w,d))
w.x=C.cG(D.ua,new A.dSX(w))},
ac_(d){return this.bUl(d)},
bUl(d){var w=0,v=C.j(x.H),u,t=this,s,r,q
var $async$ac_=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:q=B.CS[d.b]
if(d.c==="power")s=q.c
else{r=q.d
s=r>=0?r:q.c}r=t.e
r===$&&C.c()
r.e=s
r=t.c
r.toString
w=3
return C.b(C.a5(r,!1).cc(C.eh(new A.dSL(),!1,null,x.H)),$async$ac_)
case 3:if(t.c==null){w=1
break}r=t.d
if(r!=null)r.NF(t.e)
r=t.d
if(r!=null)r.CX(0,t.e)
t.m(new A.dSM())
case 1:return C.h(u,v)}})
return C.i($async$ac_,v)},
akg(d){return this.cGn(d)},
cGn(d){var w=0,v=C.j(x.H),u,t=this,s
var $async$akg=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:s=t.e
s===$&&C.c()
s.e=d.a.c
s=t.c
s.toString
w=3
return C.b(C.a5(s,!1).cc(C.eh(new A.dT4(),!1,null,x.H)),$async$akg)
case 3:if(t.c==null){w=1
break}s=t.d
if(s!=null)s.NF(t.e)
t.m(new A.dT5())
case 1:return C.h(u,v)}})
return C.i($async$akg,v)},
a_5(d,e){var w=null,v=e.j(0.18),u=C.m(14),t=C.J(e.j(0.7),D.r,1)
return C.p(w,C.d(d,w,w,w,w,w,w,C.l(w,w,e,w,w,w,w,w,w,w,w,12.5,w,w,D.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),D.f,w,w,new C.o(v,w,t,u,w,w,D.n),w,w,w,w,N.akk,w,w,w)},
WF(d,e,f){var w=null
return new C.D(D.nr,C.B(C.a([new C.a4(62,w,C.d(d,w,w,w,w,w,w,A7.aa2,w,w,w),w),C.E(C.bx(C.m(6),C.kj(D.bz,w,w,8,w,D.k.E(e/100,0,1),new C.lH(f,x.dw)),D.ap),1)],x.p),D.m,w,D.e,D.i,0,w,w),w)},
PT(d,e,f){var w=null,v=e==null,u=v?D.dr:f.j(0.22),t=C.m(12),s=C.J(v?D.aX:f,D.r,1)
return C.aA(w,C.p(w,C.d(d,w,w,w,w,w,w,C.l(w,w,v?D.bU:f,w,w,w,w,w,w,w,w,12.5,w,w,D.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),D.f,w,w,new C.o(u,w,s,t,w,w,D.n),w,w,w,w,D.nt,w,w,w),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,e,w,w,w,w,w,w,!1,D.a3)},
aew(d,e){return this.PT(d,e,D.aA)},
PU(d,e){var w=null,v=C.a([e.j(0.1),B.FG],x.O),u=C.m(18)
return C.p(w,d,D.f,w,w,new C.o(w,w,C.J(e.j(0.5),D.r,1),u,w,new C.a9(D.b0,D.b6,D.x,v,w,w),D.n),w,w,w,D.d1,D.bg,w,w,w)},
c8l(d){return this.PU(d,D.aX)},
b_j(d,e,f){var w,v=null,u=this.gbk7()===d,t=u?D.aA.j(0.22):D.c.j(0.06),s=C.m(14),r=u?D.aA:D.aX
r=C.J(r,D.r,u?2:1)
w=f>0?e+" ("+f+")":e
return C.E(C.aA(v,C.p(v,C.as(C.d(w,v,v,v,v,v,v,C.l(v,v,u?D.aA:D.ac,v,v,v,v,v,v,v,v,12.5,v,v,D.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,v),D.f,v,v,new C.o(t,v,r,s,v,v,D.n),v,v,v,D.jz,D.jU,v,v,v),D.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new A.dT3(this,d),v,v,v,v,v,v,!1,D.a3),1)},
axR(d,e){return this.b_j(d,e,0)},
bH_(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=d.d
if(l.length===0)return new C.D(D.eu,C.x(B.djD,D.m,m,D.e,D.i,0,D.p),m)
w=x.p
v=C.a([],w)
for(u=l.length,t=0;t<l.length;l.length===u||(0,C.L)(l),++t){s=l[t]
r=s.c==="power"
q=r?D.bt:D.cp
p=B.CS[s.b]
o=r?"\u26a1 Power":"\ud83d\udeb0 Leak"
r=r?D.bt:D.cp
v.push(n.PU(C.x(C.a([new C.ca(D.aM,D.e,D.i,D.m,m,D.p,m,0,C.a([new A.acO(p.e,44,m),D.as,new C.by(1,D.ba,new C.y(p.b,m,D.ht,m,m,m,m,m,m,m,m,m),m),n.a_5(o+"  +"+s.e,r)],w),m),D.Q,new C.y('"'+s.d+'"',m,B.fq1,m,m,m,m,m,m,m,m,m),D.W,new C.bM(D.a8,m,m,n.aew("\ud83d\udd27 Go and fix it",new A.dSK(n,s)),m)],w),D.E,m,D.e,D.i,0,D.p),q))}return C.x(v,D.m,m,D.e,D.i,0,D.p)},
c8n(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=x.p,k=C.a([],l),j=d.c
j===$&&C.c()
w=j.length
v=0
for(;v<j.length;j.length===w||(0,C.L)(j),++v){u=j[v]
t=u.f
if(!t)s=D.aX
else s=u.gUq()==="fine"?D.be:D.c0
t=t?1:0.5
r=u.a
q=u.gaE0(0)
p=u.gUq()
o=u.gUq()==="fine"?D.ep:D.eO
r=C.a([new C.ca(D.aM,D.e,D.i,D.m,m,D.p,m,0,C.a([new A.acO(r.e,50,m),D.as,new C.by(1,D.ba,C.x(C.a([new C.y(r.b+"  "+q,m,D.ht,m,m,m,m,m,m,m,m,m),new C.y(r.f,m,B.aTu,m,m,m,m,m,m,m,m,m),new C.y("Now: "+p,m,new C.F(!0,o,m,m,m,m,12.5,D.H,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m,m,m,m,m,m,m)],l),D.E,m,D.e,D.i,0,D.p),m)],l),m),D.Q,n.WF("Food",100-u.b,D.cL),n.WF("Health",u.c,D.be),n.WF("Home",u.d,D.cp)],l)
if(u.f){q=n.aew("\ud83c\udf5e Feed",new A.dSR(n,d,u))
p=n.PT("\ud83d\udc8a Medicine",u.e?new A.dSS(n,d,u):m,D.bq)
D.d.v(r,C.a([D.am,new C.CB(D.bG,8,8,D.br,C.a([q,p,n.PT("\ud83c\udfe5 Hospital",u.r>=0?m:new A.dST(n,d,u),D.c0),n.PT("\ud83c\udfe0 Visit",new A.dSU(n,u),D.b_)],l),m)],l))}k.push(n.PU(new C.kB(t,C.x(r,D.E,m,D.e,D.i,0,D.p),m),s))}return C.x(k,D.m,m,D.e,D.i,0,D.p)},
c8m(d){var w,v,u,t,s=null,r=x.p,q=C.a([B.enc],r)
for(w=d.e,v=0;v<w.length;++v){u=w[v].a<0
t=u?D.aX:D.c0
q.push(this.PU(u?new C.ca(D.aM,D.e,D.i,D.m,s,D.p,s,0,C.a([B.fPE,D.as,new C.y("Bed "+(v+1)+": empty",s,B.fjr,s,s,s,s,s,s,s,s,s)],r),s):new C.ff(new A.dSO(this,d,v),s),t))}return C.x(q,D.m,s,D.e,D.i,0,D.p)},
c8o(d){var w=this,v=null,u=x.p,t=w.PU(C.B(C.a([B.fB1,D.as,B.bFZ,w.aew("Buy",new A.dSZ(w,d))],u),D.m,v,D.e,D.i,0,v,v),D.cL),s=w.PU(C.B(C.a([B.fWK,D.as,B.bGe,w.PT("Buy",new A.dT_(w,d),D.bq)],u),D.m,v,D.e,D.i,0,v,v),D.bq),r=C.a([B.fQF,D.am,C.d("Calls answered: "+d.y+"\nPatients sent home better: "+d.z+"\nPeople lost: "+d.gcNy(),v,v,v,v,v,v,B.aUu,v,v,v)],u)
if(d.gC7().length===0)D.d.v(r,C.a([D.W,w.aew("Start a new community",new A.dT0(w))],u))
return C.x(C.a([t,s,w.c8l(C.x(r,D.E,v,D.e,D.i,0,D.p))],u),D.m,v,D.e,D.i,0,D.p)},
B(d){var w,v,u,t,s,r,q=this,p=null,o=q.d
if(o==null)w=D.lY
else{w=x.p
v=C.B(C.a([C.aH(p,p,p,p,T.nz,p,p,p,new A.dT6(d),p,p,p,p,p,p),B.bFF,q.a_5("\u2b50 "+o.r,D.aA)],w),D.m,p,D.e,D.i,0,p,p)
u=q.a_5("\ud83c\udf5e "+o.w,D.cL)
t=q.a_5("\ud83d\udc8a "+o.x,D.bq)
s=o.e
s=C.B(C.a([u,D.ad,t,D.ad,q.a_5("\ud83c\udfe5 "+new C.Z(s,new A.dT7(),C.T(s).k("Z<1>")).gL(0)+"/"+s.length,D.c0)],w),D.m,p,D.b9,D.i,0,p,p)
t=C.B(C.a([q.b_j("calls","\ud83d\udcde Calls",o.d.length),q.axR("people","\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc67 People"),q.axR("hospital","\ud83c\udfe5 Hospital"),q.axR("shop","\ud83d\uded2 Shop")],w),D.m,p,D.e,D.i,0,p,p)
r=q.gbk7()
A:{if("people"===r){u=q.c8n(o)
break A}if("hospital"===r){u=q.c8m(o)
break A}if("shop"===r){u=q.c8o(o)
break A}u=q.bH_(o)
break A}w=C.a([new C.D(B.bE3,v,p),new C.D(D.BR,s,p),new C.D(B.am1,t,p),D.Q,C.E(C.cl(C.a([u],w),p,p,D.Gm,p,p,D.ah,!1),1)],w)
if(q.w!=null){v=D.dY.j(0.96)
u=C.m(14)
t=C.J(D.be,D.r,1)
s=q.w
s.toString
w.push(C.p(p,C.d(s,p,p,p,p,p,p,B.fm4,p,p,p),D.f,p,p,new C.o(v,p,t,u,p,p,D.n),p,p,p,H.akn,D.bg,p,p,1/0))}w=C.x(w,D.m,p,D.e,D.i,0,D.p)}return C.c6(p,D.c2,C.bn(!0,w,!0,!1,D.af,!0,!0),p,!1,!1,p,p)}}
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
A.CA.prototype={}
A.iP.prototype={}
A.Ms.prototype={}
A.axQ.prototype={
gjP(){return this.a==="ok"}}
A.mg.prototype={}
A.fp.prototype={}
A.E8.prototype={}
A.nO.prototype={}
A.abM.prototype={}
A.oq.prototype={}
A.aWw.prototype={
gwI(){var w=this.c
return w.c>=2&&A.La(A.t7(this.a),w).a==="ok"},
gdc(d){return this.c}}
A.a5n.prototype={
gz9(){var w,v,u=this.p4,t=u==="ptrap"
if(t||u==="faucet"){w=this.RG
if(w==null)return!1
if(t)if(w.a.a===3){u=w.b
u=new C.bd(u,C.a7(u).k("bd<2>")).d0(0,new A.bUD())&&w.c}else u=!1
else u=A.bDd(w)&&w.f&&w.r
return u}v=this.R8
return v!=null&&v.c>=2&&A.La(A.t7(u),v).a==="ok"},
Ip(d){var w
if(this.c!=="outside"){w=this.CW
w=w!=null?w.r1(d):!this.ay}else w=!0
return w},
ga6e(){var w=this.p4
if(w.length===0)w=this.Ip(2)
else w=w!=="fan"||this.gz9()
return w},
gMi(){var w=this.p4
if(w.length===0)w=this.Ip(3)
else w=!D.d.t(B.jF,w)||this.gz9()
return w},
ganK(){var w=this.p4
if(w.length===0)w=this.Ip(0)
else w=!D.d.t(B.lj,w)||this.gz9()
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
if(w.length!==0)w=w==="ptrap"||w==="faucet"||v.gz9()
else{w=v.CW
w=w==null?null:w.gbkU()
if(w==null)w=!v.ay}}else w=!0
return w},
gjR(){var w=this,v=w.c
if(v==="bathroom"||v==="kitchen"){v=w.p4
if(v.length!==0)v=!(v==="ptrap"||v==="faucet")||w.gz9()
else{v=w.fr
v=v==null?null:v.gwI()
if(v==null)v=!w.ch}}else v=!0
return v},
BV(d){var w,v,u,t
for(w=this.x,v=w.length,u=0;u<v;++u){t=w[u]
if(t.a===d)return t}return null},
dA(d,e,f,g){var w=this,v=w.y++,u=f==null?0:f,t=new A.mg(v,e,u,g==null?w.gh_(0)*0.6:g)
w.x.push(t)
w.a48(0,t)
return t},
M(d,e){return this.dA(0,e,null,null)},
cJz(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=d.k1
if(a0!=null){w=d.c
w=w==="outside"||w==="hall"}else w=!0
if(w)return
v=A.hcu(d,A.aPW(a0),0)
w=v.c
u=v.a/2
t=w-u-6
s=w+u+6
for(w=D.d.gaf(d.x),u=new C.f2(w,new A.bUC());u.C();){r=w.gS(0)
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
if(f<=d.gh_(0)-m-1)r.d=f
else if(e>=m+1)r.d=e
else r.c=q?h+52+l+1:h-52-l-1}}},
a48(d,e){var w,v,u,t,s,r=this,q=e.b,p=B.hE.h(0,q)
p.toString
w=(e.e&1)===1
v=w?p.d:p.c
u=w?p.c:p.d
p=v/2
e.c=D.k.E(e.c,-r.geb(0)/2+p+1,r.geb(0)/2-p-1)
p=e.d
t=u/2
s=r.c==="outside"?-760+t:t+1
e.d=D.k.E(p,s,r.gh_(0)-t-1)
if(D.d.t(B.RZ,q)){e.c=D.k.V(e.c/40)*40
e.d=D.k.V(e.d/40)*40}}}
A.aWB.prototype={
bzR(d){var w,v,u
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
u.p3=Math.max(0,D.d.bh(E.kp,new A.bVd()))
this.d=C.a([u],x.F)},
cTw(){var w,v,u,t,s,r
for(w=this.gqT(),v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u){t=w[u]
t.fr=t.CW=null
s=t.ay=!0
r=t.c
t.ch=r!=="bathroom"?r==="kitchen":s
t.fy=!1
t.fx.aa(0)
D.d.aa(t.id)}},
c8q(){var w,v,u,t,s,r,q,p=this,o="back",n="bedroom",m="bathroom",l=new C.e4()
l.cY(p.b)
w=new A.bVe()
v=x.dY
u=C.a([B.bJy,B.bJv,B.bJw],v)
for(t=0;t<7;++t){s=B.ckz[t]
u.push(new A.oq(!0,o,-150+s.a*50,s.b))}r=p.d=C.a([A.zj(0,"Bedroom 1",n,0,0,2,2,C.a([w.$1(-48)],v)),A.zj(1,"Bedroom 2",n,2,0,2,2,C.a([w.$1(-48)],v)),A.zj(2,"Bathroom 1",m,4,0,1,2,C.a([B.a0T],v)),A.zj(3,"Bedroom 3",n,5,0,2,2,C.a([w.$1(-48)],v)),A.zj(4,"Bathroom 2",m,7,0,2,2,C.a([B.a0T],v)),A.zj(5,"Hall","hall",0,2,9,1,u),A.zj(6,"Bedroom 4",n,0,3,2,2,C.a([w.$1(-48)],v)),A.zj(7,"Bedroom 5",n,2,3,2,2,C.a([w.$1(-48)],v)),A.zj(8,"Bathroom 3",m,4,3,1,2,C.a([B.a0T],v)),A.zj(9,"Kitchen","kitchen",5,3,2,2,C.a([new A.oq(!1,o,-26,5),B.bJA],v)),A.zj(10,"Living room","living",7,3,2,2,C.a([new A.oq(!1,o,-70,5),B.bJz,B.bJx],v)),A.zj(11,"NGMY City","outside",0,5,9,1,C.a([B.bJu],v))],x.F)
for(v=r.length,t=0;t<r.length;r.length===v||(0,C.L)(r),++t){q=r[t]
u=q.c
if(u==="outside"){p.aUw(q)
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
p.aUw(q)}v=p.d
u=v[5]
u.k2=u.k1="tv100"
u.p2=!0
v[3].ay=!0
v[2].ch=!0},
aUw(b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4="plant",a5="roadcross",a6="road",a7="roundabout",a8="house2",a9="bighouse",b0="adboard",b1="flowers",b2=b3.geb(0)/2
switch(b3.c){case"bedroom":b3.dA(0,"rug",0,b3.gh_(0)*0.55)
b3.dA(0,"bed",24,46)
b3.dA(0,"nightstand",-8,14)
b3.dA(0,"wardrobe",-b2+12,70).e=1
b3.dA(0,"desk",b2-14,100).e=3
break
case"living":b3.dA(0,"rug",0,70)
b3.dA(0,"sofa",0,100)
b3.dA(0,"coffee",0,68)
b3.dA(0,"armchair",66,70)
b3.dA(0,a4,76,14)
b3.dA(0,"lamp",-76,14)
break
case"kitchen":b3.dA(0,"dining",0,78)
b3.dA(0,"chair",-24,78).e=1
b3.dA(0,"chair",24,78).e=3
b3.dA(0,a4,58,20)
break
case"bathroom":b3.dA(0,"rug",0,62).e=0
b3.dA(0,a4,b3.geb(0)/2-12,b3.gh_(0)-12)
break
case"outside":for(w=-780;w<=780;w+=40){v=Math.abs(w)<1
b3.dA(0,v?a5:a6,w,420)
b3.dA(0,v?a5:a6,w,860)}for(u=200;u<=820;u+=40){if(Math.abs(u-420)<1||Math.abs(u-860)<1)continue
b3.dA(0,a6,0,u).e=1}for(t=0;t<2;++t){s=B.dnq[t]
for(u=460;u<859;u+=40)b3.dA(0,a6,s,u).e=1}for(t=0;t<3;++t){s=B.dnp[t]
b3.dA(0,a7,s,420)
b3.dA(0,a7,s,860)}r=new A.bVf(b3)
b3.dA(0,"shop",-250,225)
b3.dA(0,"hospital",250,215)
b3.dA(0,"firestation",-480,225)
b3.dA(0,"school",520,210)
for(t=0;t<14;++t){v=B.dbi[t]
w=v.a
u=v.b
if(r.$4(w,u,60,40))b3.dA(0,"billboard",w,u)}for(t=0;t<4;++t){v=B.drI[t]
w=v.a
u=v.b
if(r.$2(w,u))b3.dA(0,a8,w,u)}for(t=0;t<3;++t){v=B.cZl[t]
u=v.a
q=v.b
p=v.c
for(v=u<900,w=-800;w<=800;w+=q){o=Math.abs(w)
if(o<100)continue
if(v&&o>400)continue
if(r.$2(w,u))b3.dA(0,p&&D.o.F(D.k.ec(w,q),2)===0?a9:a8,w,u)}}for(t=0;t<2;++t){v=B.cxS[t]
w=v.a
u=v.b
if(r.$2(w,u))b3.dA(0,a9,w,u)}for(w=-1220;w<=1220;w+=40){if(Math.abs(w)>780){b3.dA(0,a6,w,420)
b3.dA(0,a6,w,860)}b3.dA(0,a6,w,1460)
b3.dA(0,a6,w,1700)}for(u=900;u<1459;u+=40)b3.dA(0,a6,0,u).e=1
v=C.a([],x._)
for(o=b3.x,n=o.length,t=0;t<o.length;o.length===n||(0,C.L)(o),++t){m=o[t]
l=m.b
if(D.d.t(B.RZ,l)||l==="roundabout")v.push(m)}k=new A.bVh(v,b3)
j=new A.bVi(b3,new A.bVl(b3))
j.$3("gasstation",6,B.d61)
j.$3("dmv",1,B.dut)
j.$3("ubstation",3,B.cXt)
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
e=B.hE.h(0,f)
if(k.$4(w,u,e.c,e.d)){b3.dA(0,f,w,u);++i}}++g}++h}for(d=0,t=0;t<11;++t,d=a0){v=B.d_g[t]
a0=d+1
b3.dA(0,v.b,v.a,1560).f=D.o.F(d,6)}for(t=0;t<11;++t,d=a0){v=B.dpy[t]
a0=d+1
b3.dA(0,v.b,v.a,1860).f=D.o.F(d,6)}b3.dA(0,"townsign",0,640)
for(t=0;t<4;++t){v=B.djT[t]
b3.dA(0,"cornersign",v.a,v.b)}for(t=0;t<5;++t)b3.dA(0,b0,B.d9p[t],2045)
for(t=0;t<4;++t)b3.dA(0,b0,B.dnx[t],-690)
for(t=0;t<4;++t){u=B.csf[t]
a1=b3.dA(0,b0,-1245,u)
a1.e=1
a1.c=-1245
b3.a48(0,a1)
a2=b3.dA(0,b0,1245,u)
a2.e=3
a2.c=1245
b3.a48(0,a2)}for(w=-1200;w<=1200;w+=480){for(t=0;t<4;++t)b3.dA(0,"pole",w,B.cwA[t])
for(v=Math.abs(w)<1100,o=w+240,t=0;t<4;++t){u=B.cDI[t]
if(v)b3.dA(0,"lamppost",o,u)}}b3.dA(0,"car",-300,490).e=2
b3.dA(0,"ambulance",110,345)
b3.dA(0,"firetruck",-385,345)
for(t=0;t<10;++t){v=B.dtl[t]
w=v.a
u=v.b
b3.dA(0,Math.abs(w)>400||u>1000?"pine":"tree",w,u)}b3.dA(0,"bush",-70,20)
b3.dA(0,"bush",70,20)
b3.dA(0,b1,-30,24)
b3.dA(0,b1,30,24)
b3.dA(0,b1,90,205)
b3.dA(0,"bench",-60,195)
b3.dA(0,"bench",150,300)
b3.dA(0,"pond",-160,1340)
b3.dA(0,"dog",60,60)
b3.dA(0,"cat",-50,80)
b3.dA(0,"cow",-640,1280)
b3.dA(0,"cow",-570,1330)
b3.dA(0,"sheep",-500,1300)
b3.dA(0,"horse",560,1330)
b3.dA(0,"chicken",-440,1340)
for(a3=0;a3<4;++a3)b3.dA(0,"fence",-680+a3*64,1220)
for(t=0;t<6;++t){v=B.cDg[t]
b3.dA(0,"crate",v.a,v.b)}break
case"hall":default:}},
gqT(){var w,v,u,t=C.a([],x.F),s=this.d
s===$&&C.c()
w=s.length
v=0
for(;v<s.length;s.length===w||(0,C.L)(s),++v){u=s[v]
if(u.c!=="outside")t.push(u)}return t},
gd_h(){var w=this.gqT()
return new C.Z(w,new A.bVp(),C.T(w).k("Z<1>")).gL(0)},
gcWV(){var w=this.d
w===$&&C.c()
return new C.Z(w,new A.bVo(),C.T(w).k("Z<1>")).gL(0)},
gcWU(){var w=this.d
w===$&&C.c()
return new C.Z(w,new A.bVn(),C.T(w).k("Z<1>")).gL(0)},
gcPB(){var w=this.gqT()
return new C.Z(w,new A.bVm(),C.T(w).k("Z<1>")).gL(0)}}
A.IW.prototype={
R(){var w,v,u,t,s=new C.ye()
$.yY()
s.h7(0)
w=$.ax()
v=$.hAp()
u=x.S
t=C.a([],x.aQ)
return new A.aEO(s,B.aAC,new C.eC("",w),B.di7,B.nC,B.nC,D.D9,C.aX(x.N),new C.cw(null,x.eF),v,C.U(u,x.i),C.aX(u),t,D.cK)}}
A.aEO.prototype={
ghE(){var w,v,u=$.a4i
if(u!=null){w=u.a
v=this.d
v===$&&C.c()
v=w===v.b
w=v}else w=!1
return w?u:null},
aA0(){var w,v,u=this.ghE()
if(u==null)u=null
else{w=this.d
w===$&&C.c()
v=w.d
v===$&&C.c()
w=u.bfo(w,v[w.e].a)
u=w}this.fr=u==null?B.aAC:u},
gbj7(){var w=this.d
w===$&&C.c()
w=w.gqT()
return new C.Z(w,new A.eex(),C.T(w).k("Z<1>")).gL(0)},
Z(){var w,v,u,t,s,r=this
r.a2()
w=r.a.r
if(w.length!==0)w=r.d=A.hJk(w)
else{w=$.Ec==null
if(w){w=D.o.F(Date.now(),1e5)
$.Ec=A.aWC(w)
r.ek=!0}w=$.Ec
w.toString
w=r.d=w}v=r.a
if(v.r.length===0)u=!0
else u=v.d||w.c
w.c=u
u=new A.xi(-0.05,0.1,120,B.h0n,$.ax())
u.f=560
r.e=u
v=v.f
if(v==="city")w.e=11
if(v.length!==0){w=w.gqT()
t=new C.Z(w,new A.eeu(r),C.T(w).k("Z<1>"))
if(!t.gan(0)){w=r.d
w===$&&C.c()
w.e=t.gI(0).a}}A.aWo($.ahK)
A.hl7()
r.aj7()
r.aA0()
w=r.d
w===$&&C.c()
v=w.d
v===$&&C.c()
w=v[w.e]
v=r.gbj7()
u=r.d
s=u.d
s===$&&C.c()
r.f=A.hv9(w,s[u.e].c!=="outside",B.aRl,"look",v,r.fr,0)
r.aex(!0)
r.Z7()
r.fx=C.dh(D.fY,new A.eev(r))
$.aV.x1$.push(new A.eew(r))},
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
c2i(){var w,v=this.d
v===$&&C.c()
w=v.a
A:{if("switch"===w){v="The ceiling light is already in. Tap the red switch on the wall and wire it. Then flip it to see the light work."
break A}if("outlet"===w){v="Tap the red outlet on the wall and wire it. Then plug in a lamp or a TV to test it."
break A}if("gfci"===w){v="Tap the red GFCI outlet and wire it. Then plug in a hair dryer to test it."
break A}if("fan"===w){v="Tap the ceiling fan and wire it. Then flip the wall switch and watch it spin."
break A}if("ptrap"===w){v="The sink has no drain yet. Tap the sink and build the drain under it."
break A}v="The faucet is not connected yet. Tap the sink and connect the hoses."
break A}return v},
aex(d){var w,v,u,t,s,r,q=this,p=q.d
p===$&&C.c()
w=p.d
w===$&&C.c()
v=w[p.e]
if(q.z){u=new A.q(0,40,v.gh_(0)*0.5)
t=Math.max(v.geb(0),v.gh_(0))*0.6
p=q.e
p===$&&C.c()
p.e=20
p.f=Math.max(Math.max(v.geb(0),v.gh_(0))*2,380)
p.r=new C.e5([-v.geb(0)/2,v.geb(0)/2,0,v.gh_(0),130])
p.as=-1.2
p.at=1.2
p.ra(!0)
s=0.12
r=-0.05}else if(v.c==="outside"){p=q.e
p===$&&C.c()
p.e=30
p.f=2400
p.r=null
p.as=0.03
p.at=1.35
p.ra(!0)
u=B.h0k
t=540
s=0.35
r=-0.25}else if(q.x){u=new A.q(0,46,v.gh_(0)*0.1)
t=v.gh_(0)*0.74
p=q.e
p===$&&C.c()
p.e=6
p.f=Math.max(Math.max(v.geb(0),v.gh_(0))*2,380)
p.r=new C.e5([-v.geb(0)/2,v.geb(0)/2,0,v.gh_(0),130])
p.as=0.02
p.at=1.35
p.ra(!0)
s=0.05
r=0}else{u=new A.q(0,30,v.gh_(0)*0.45)
t=(v.geb(0)*1.2>v.gh_(0)*1.4?v.geb(0)*1.2:v.gh_(0)*1.4)+30
p=q.e
p===$&&C.c()
p.e=6
p.f=560
p.r=null
p.as=0.1
p.at=1.35
p.ra(!0)
s=0.5
r=-0.12}p=q.e
if(d){p===$&&C.c()
p.d=u
p.c=t
p.y=1
p.a=r
p.b=s}else{p===$&&C.c()
p.hU(t,s,u,r)}},
y3(){return this.aex(!1)},
bOe(d,e){var w,v,u,t,s,r,q,p,o=this,n=o.e
n===$&&C.c()
w=n.cPJ(d,e)
if(w==null)return
n=o.d
n===$&&C.c()
v=n.d
v===$&&C.c()
u=v[n.e]
t=o.aK
if(t!=null){n=t.at
n===$&&C.c()
n.at=new C.z(D.k.E(w.a,-138,138),D.k.E(w.c,12,316))}else if(o.z){s=D.k.E(w.a,-u.geb(0)/2+10,u.geb(0)/2-10)
r=D.k.E(w.c,10,u.gh_(0)-10)
o.e.aq2(new A.q(s,48,r))}else{n=u.c==="outside"
if(n&&o.aN&&o.aC!=null){n=o.aC
n.toString
n.at=new C.z(D.k.E(w.a,-u.geb(0)/2+12,u.geb(0)/2-12),D.k.E(w.c,-290,u.gh_(0)-12))}else{v=o.e
q=w.a
p=w.c
if(n)v.aq3(Math.max(70,v.c*0.4),0.32,new A.q(q,30,p))
else{n=D.k.E(q,-u.geb(0)/2+8,u.geb(0)/2-8)
p=D.k.E(p,8,u.gh_(0)-8)
v.aq3(Math.max(36,o.e.c*0.35),0.2,new A.q(n,40,p))}}}A.fQ(560,50,0.25,"tri")},
iK(){var w,v,u,t,s,r,q,p,o=this
o.aA0()
w=o.aK
if(w!=null){v=w.ay
v===$&&C.c()}else{v=o.d
v===$&&C.c()
u=v.d
u===$&&C.c()
v=u[v.e]
u=o.r
t=o.Q
s=o.gbj7()
if(!o.z)if(o.x){r=o.d
q=r.d
q===$&&C.c()
r=q[r.e].c!=="outside"&&o.cx==null}else r=!1
else r=!0
q=o.fr
p=o.bG
v=A.hv9(v,r,p!=null?C.eD([100+p.a],x.S):B.aRl,u,s,q,t)}o.f=v},
ei(d,e){var w=this,v=w.ch
if(v!=null)v.a4(0)
w.m(new A.edg(w,d,e))
w.ch=C.cG(D.eq,new A.edh(w))},
iL(d){return this.ei(d,!0)},
PV(d){this.m(new A.edi(this,d))
A.fQ(660,50,0.25,"tri")},
axS(d,e){var w,v=this,u=v.d
u===$&&C.c()
if(d!==u.e){u=u.d
u===$&&C.c()
u=d>=u.length}else u=!0
if(u)return
if(v.aN&&d!==11)v.a2R()
v.cL=v.bG=v.aK=null
if(!e&&v.cx!=null)v.Sd()
v.m(new A.ebO(v,d))
u=v.d
w=u.d
w===$&&C.c()
u=w[u.e]
if(u.c==="outside")v.aC=A.hox(u,0,24)
v.y3()
A.fQ(520,60,0.25,"tri")},
AB(d){return this.axS(d,!1)},
aY1(d){var w,v,u,t=this
if(d===700){w=t.d
w===$&&C.c()
v=w.d
v===$&&C.c()
return v[w.e].ganK()}if(d===701){w=t.d
w===$&&C.c()
v=w.d
v===$&&C.c()
w=v[w.e]
return w.p4.length!==0||w.Ip(1)}if(d===702){w=t.d
w===$&&C.c()
v=w.d
v===$&&C.c()
return v[w.e].gMi()}if(d===703){w=t.d
w===$&&C.c()
v=w.d
v===$&&C.c()
return v[w.e].ga6e()}if(d>=800&&d<820){u=d-800
w=t.d
w===$&&C.c()
v=w.d
v===$&&C.c()
w=v[w.e].id
return u<w.length&&w[u].gwI()}if(d===720){w=t.d
w===$&&C.c()
v=w.d
v===$&&C.c()
return v[w.e].ganK()}if(d===721){w=t.d
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
return u<w.length&&w[u].gwI()}w=t.d
w===$&&C.c()
v=w.d
v===$&&C.c()
return v[w.e].gkO()},
b9j(){var w,v,u=this,t=u.d
t===$&&C.c()
w=t.d
w===$&&C.c()
v=w[t.e].go==="fan"
u.m(new A.edK(u))
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
c8z(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this
if(a0===0)return
if(a0>=19e3&&a0<19004){w=a0-19e3
v=d.d
v===$&&C.c()
u=v.d
u===$&&C.c()
t=u[v.e]
v=D.o.F(w,2)===0?-1:1
s=v*(t.geb(0)/2-14)
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
n.hU(26,0.12,new A.q(s+26*w*v,106-26*u,r-26*p*o),q)
d.ei("You are looking from the camera in the corner. Drag to look round, or tap a camera for another corner.",!0)
A.fQ(700,70,0.25,"tri")
return}if(a0>=2e4&&a0<23e3){w=d.d
w===$&&C.c()
v=w.d
v===$&&C.c()
m=v[w.e].BV(a0-2e4)
if(m!=null)d.bUn(m)
return}if(a0===19502){w=d.aK
if((w==null?null:w.a==="tower")===!0)d.m(new A.ecL(d))
return}if(a0===19500||a0===19501){l=d.aK
if(l!=null)if(l.c)d.YG(l)
else d.ei("This one works: the house has power.",!0)
return}if(a0>=900&&a0<920){d.crG(a0-900)
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
d.m(new A.ecM(d,a0))
w=d.d
v=w.d
v===$&&C.c()
m=v[w.e].BV(d.Q)
if(m!=null)d.iL(B.hE.h(0,m.b).a+": move it with the arrows.")
return}if(a0===300||a0===301||a0===302){if(d.r!=="walls")return
d.m(new A.ecN(d,a0))
d.iL("Wall picked. Choose a paint colour.")
return}if(a0>=600&&a0<620){j=a0-600
w=d.d
w===$&&C.c()
v=w.d
v===$&&C.c()
if(j>=v[w.e].w.length)return
if(d.r==="doors"){d.m(new A.ecO(d,j))
w=d.d
v=w.d
v===$&&C.c()
A.fQ(v[w.e].at.t(0,j)?700:450,70,0.25,"tri")
return}d.bO7(j)
return}w=a0===700
v=!w
i=!0
if(v)if(a0!==701){if(a0!==702)if(a0!==703)if(!(a0>=800&&a0<820))u=a0>=720&&a0<728
else u=i
else u=i
else u=i
i=u}if(d.w&&i){h=d.aY1(a0)
A.fQ(h?1400:500,160,0.25,"tri")
w=h?"The tester glows and beeps: LIVE, 120 volts. Never touch a live wire. Switch the breaker off first.":"The tester stays dark: no power here. It still needs wiring."
d.ei(w,!h)
return}if(!v||a0===701){if(d.aY1(a0))d.azC(w?0:1)
else d.aUc()
return}if(a0>=800&&a0<820){j=a0-800
w=d.d
w===$&&C.c()
v=w.d
v===$&&C.c()
w=v[w.e].id
if(j>=w.length)return
g=w[j]
if(!g.gwI())d.ako(j)
else if(g.a==="switch")d.b9j()
else d.azC(2+j)
return}if(a0===702||a0===703){w=d.d
w===$&&C.c()
v=w.d
v===$&&C.c()
if(v[w.e].gMi()){w=d.d
v=w.d
v===$&&C.c()
w=!v[w.e].ga6e()}else w=!0
if(w)d.aUc()
else d.b9j()
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
if(!w[u].p2){d.m(new A.ecP(d))
w=d.d
v=w.d
v===$&&C.c()
d.iL("The TV is on and playing "+E.kp[v[w.e].p3].a+".")}else{e=A.aPW(f)
w=d.c
w.toString
K.hcj(w,0,e.a,!0,D.yh,e.b)}return}if(a0>=720&&a0<728){w=d.d
w===$&&C.c()
v=w.d
v===$&&C.c()
u=a0-720
f=v[w.e].fx.h(0,u)
if(f==null)return
e=A.aPW(f)
if(e.d>0||e.e){w=d.c
w.toString
K.hcj(w,0,e.a,!0,D.yh,e.b)}else d.azC(u)
return}if(a0===710||a0===711||a0===712||a0===713){w=d.d
w===$&&C.c()
v=w.d
v===$&&C.c()
if(!v[w.e].gjR())if(d.d.a.length!==0)d.Ep()
else d.a0m()
else{w=d.f
w===$&&C.c()
j=w.b.h(0,a0)
if(j!=null)d.iL(j.a+": "+j.b)}}},
bO7(d){var w,v,u,t=this.d
t===$&&C.c()
w=t.d
w===$&&C.c()
v=w[t.e].w[d].d
u=v<w.length?w[v].b:"the next room"
t=this.c
t.toString
return C.bV(E.mC,null,new A.ebh(this,u,d,v),t,!0,!0,!1,D.k5,!1,!1,x.H)},
bQa(){var w,v,u=this
u.m(new A.ebq(u))
if(!u.aN){w=u.d
w===$&&C.c()
v=w.d
v===$&&C.c()
w=v[w.e].c==="outside"}else w=!1
if(w)u.a2N()
w=u.d
w===$&&C.c()
v=w.d
v===$&&C.c()
if(v[w.e].c!=="outside")u.y3()},
bQc(){this.m(new A.ebr(this))
this.ei("Phone view: the city fills your phone standing up. Pick a drone film and start filming.",!0)},
bQw(){var w=this
if(w.p4)w.a2Q()
w.m(new A.ebs(w))},
cl3(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.c
n.toString
w=C.aG(n,o,x.w).w
n=new A.ecE(p)
v=x.p
u=C.a([C.bS(0,d,0,0,0)],v)
t=w.r.b
if(p.fB)u.push(C.ap(o,C.aA(D.iG,B.f8Y,D.y,!1,o,new A.ecH(p),o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!1,D.a3),o,o,0,o,t,o))
else{s=n.$2(D.cx,p.gbQv())
r=p.p4?D.z4:D.Co
r=n.$2(r,new A.ecI(p))
q=p.ha?B.aoM:O.Cr
u.push(C.ap(o,C.B(C.a([s,r,n.$2(q,new A.ecJ(p)),n.$2(D.uI,new A.ecK(p))],v),D.m,o,D.e,D.i,0,o,o),o,o,10,o,t+8,o))}return C.c6(o,D.w,new C.an(D.a_,o,D.ab,D.t,u,o),o,!1,!1,o,o)},
bIw(d){var w,v,u,t,s,r,q=this,p=null,o=q.c
o.toString
w=C.aG(o,p,x.w).w
o=new A.eaS(q)
if(q.eu){v=w.a
u=v.b
v=v.a
t=q.ab
s=w.alE(D.af,new C.av(u,v),D.af)
return C.c6(p,D.w,C.as(new C.wq(t,C.q0(new C.a4(u,v,new C.an(D.a_,p,D.ab,D.t,C.a([C.bS(0,d,0,0,0),C.ap(p,C.aA(D.iG,B.f93,D.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,o,p,p,p,p,p,p,!1,D.a3),p,p,0,p,0,p)],x.p),p),p),s),p),p,p,p),p,!1,!1,p,p)}r=q.f2?w.r.b:0
return C.c6(p,D.w,new C.an(D.a_,p,D.ab,D.t,C.a([C.bS(0,d,0,0,0),C.ap(p,C.aA(D.iG,B.f94,D.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,o,p,p,p,p,p,p,!1,D.a3),p,p,0,p,r,p)],x.p),p),p,!1,!1,p,p)},
bSA(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.c
k.toString
w=C.aG(k,l,x.w).w
k=w.a
v=k.b
k=k.a
u=new A.ebC(m)
t=m.ab
s=w.alE(D.af,new C.av(v,k),D.af)
r=x.p
q=C.a([C.bS(0,d,0,0,0)],r)
if(m.fB)q.push(C.ap(l,C.aA(D.iG,B.f8X,D.y,!1,l,new A.ebF(m),l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,!1,D.a3),l,l,0,l,0,l))
else{p=u.$2(Aj.a1T,new A.ebG(m))
o=u.$2(D.a2h,new A.ebH(m))
n=m.ha?B.aoM:O.Cr
r=C.a([p,o,u.$2(n,new A.ebI(m)),u.$2(D.uI,new A.ebJ(m))],r)
p=m.d
p===$&&C.c()
o=p.d
o===$&&C.c()
if(o[p.e].c==="outside"){p=m.p4?D.z4:D.Co
r.push(u.$2(p,new A.ebK(m)))}if(m.gakp())r.push(C.aA(l,C.p(l,B.bXk,D.f,l,l,new C.o(D.cT,l,C.J(D.c,D.r,1),l,l,l,D.a6),l,40,l,D.iE,l,l,l,40),D.y,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,m.gaR3(),l,l,l,l,l,l,!1,D.a3))
q.push(C.ap(l,C.B(r,D.m,l,D.e,D.i,0,l,l),l,l,10,l,10,l))}return C.c6(l,D.w,C.as(new C.wq(t,C.q0(new C.a4(v,k,new C.an(D.a_,l,D.ab,D.t,q,l),l),s),l),l,l,l),l,!1,!1,l,l)},
cC6(d){var w,v,u,t=B.CS[d.b]
if(d.c==="power")w=t.c
else{v=t.d
w=v>=0?v:t.c}v=this.d
v===$&&C.c()
v=v.d
v===$&&C.c()
u=w<v.length?v[w].b:"the house"
v=this.c
v.toString
return C.bV(D.av,null,new A.edJ(this,t,new A.edI(),d,u,w),v,!0,!0,!0,L.a8z,!1,!1,x.H)},
c3s(){var w,v,u=this,t=u.d
t===$&&C.c()
w=t.d
w===$&&C.c()
v=w[t.e]
if(v.c==="outside")return
u.m(new A.ec1(u))
t=u.e
t===$&&C.c()
t.e=20
t.f=300
t.as=-0.95
t.at=1.35
t.ra(!0)
t=u.e
w=v.gh_(0)
t.hU(Math.max(v.geb(0),v.gh_(0))*0.75,-0.5,new A.q(0,118,w*0.5),-0.05)
u.ei("Looking up at the ceiling from the floor. Drag to look round.",!0)},
gpn(){var w,v,u=this.d
u===$&&C.c()
u=u.d
u===$&&C.c()
w=new C.Z(u,new A.e9R(),C.T(u).k("Z<1>"))
if(!w.gaf(0).C())return null
v=w.gI(0)
u=v.dx
return u==null?v.dx=A.hH9(v):u},
aSk(d){var w,v,u=this
if(d==null)return
w=d.c
if(w>0){v=u.ghE()
if(v!=null)v.r+=w}w=d.a
A.fQ(w==="pickup"?700:940,120,0.25,"tri")
u.ei(d.b,w!=="expired")
u.m(u.giZ())},
gKx(){var w,v,u,t=this.d
t===$&&C.c()
t=t.d
t===$&&C.c()
w=new C.Z(t,new A.eea(),C.T(t).k("Z<1>"))
if(!w.gaf(0).C())return null
v=w.gI(0)
t=v.dy
if(t==null){t=C.a([],x.bz)
u=new C.e4()
u.cY(11)
t=new A.cB6(v,u,t)
t.bAB(v,11)
v.dy=t}return t},
bGD(){var w,v,u=this,t=u.ghE()
if(t==null)return
w=u.c5
if(w.w)u.ei("You already have your Uber licence.",!0)
else{v=t.r
if(v<40)u.ei("The licence costs 40 points. You have "+v+". Earn more with jobs and deliveries.",!1)
else{t.r=v-40
w.w=!0
A.fQ(880,140,0.25,"tri")
u.ei("You passed! Here is your Uber licence. Drive a car to an Uber station and the people waiting will get in.",!0)}}u.m(new A.eah())
w=u.aK
if(w!=null)w.B(u.ghE())},
c2n(){var w,v,u,t,s=this,r=null,q=s.ghE(),p=s.c5.w,o=D.w.j(0.55),n=C.m(28),m=C.J(D.aX,D.r,1),l=x.p,k=C.B(C.a([B.fEe,D.as,B.bGL,C.aA(r,D.rP,D.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new A.ebX(s),r,r,r,r,r,r,!1,D.a3)],l),D.m,r,D.e,D.i,0,r,r),j=C.d(p?"You are a licensed Uber driver. Drive a car to an Uber station (the yellow and black shelter): the people waiting get in, and you take them to their house. The fare is paid when you get there.":"With the Uber licence you can take the people waiting at the Uber stations home and be paid for every ride. The car needs gas, so watch the gas bar.",r,r,r,r,r,r,B.fk7,r,r,r),i=q==null,h=i?r:q.r
h=C.d("You have "+(h==null?0:h)+" \u2b50",r,r,r,r,r,r,B.fs8,r,r,r)
w=p?new A.ebY(s):s.gbGC()
if(p)v=D.bf
else{v=i?r:q.r
v=(v==null?0:v)>=40?D.bt:D.bz}u=C.m(16)
t=p?"\u2713 Licensed":"Get the licence \xb7 40 \u2b50"
if(!p){i=i?r:q.r
i=(i==null?0:i)>=40}else i=!0
return C.p(D.A,C.p(r,C.x(C.a([k,D.W,j,D.W,h,D.W,C.aA(r,C.p(D.A,C.d(t,r,r,r,r,r,r,C.l(r,r,i?D.w:D.bU,r,r,r,r,r,r,r,r,16,r,r,D.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),D.f,r,r,new C.o(v,r,r,u,r,r,D.n),r,50,r,r,r,r,r,r),D.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,w,r,r,r,r,r,r,!1,D.a3)],l),D.ak,r,D.e,D.P,0,D.p),D.f,r,r,new C.o(r,r,m,n,r,B.zm,D.n),r,r,r,D.bD,D.bQ,r,r,330),D.f,o,r,r,r,r,r,r,r,r,r,r)},
cEv(d){var w,v,u,t=this,s=t.gKx()
if(s!=null){w=s.c
w===$&&C.c()
w=w.length===0}else w=!0
if(w)return
v=s.cOz(d.f,d.r,t.CW.gig()/1000)
if(v>0){w=t.ghE()
if(w!=null)w.r+=v
A.fQ(940,140,0.25,"tri")
t.ei("\ud83d\ude96 You dropped the passenger at the house. Fare: +"+v+" points. Thank you!",!0)
t.m(t.giZ())
return}if(s.f==null&&s.aqH(d.f,d.r)!=null&&D.d.b3(s.e,new A.eeb(s,d))){w=t.c5
if(!w.w){if(Date.now()-t.k1>2e4){t.k1=Date.now()
t.ei("People are waiting for a ride, but you need an Uber licence first. Get it at the licence office.",!1)}return}if(w.b<=0)return
u=s.cWM(d.f,d.r)
if(u!=null){A.fQ(700,100,0.25,"tri")
t.ei("\ud83d\ude96 "+u.b+" got in. Take them to their house (follow the yellow line): "+u.f+" points.",!0)
t.m(t.giZ())}}},
cEu(){var w,v,u,t,s,r,q,p=this,o=p.gKx()
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
return}p.Sr(D.d.gI(v))
p.ei("You are at the licence office. Walk in through the door and onto the blue mat to get your Uber licence.",!0)
return}v=o.c
v===$&&C.c()
if(v.length===0){p.ei("There is no Uber station in this town yet.",!1)
return}q=p.aC
v=C.C(v,x.eB)
D.d.aZ(v,new A.ee9(q))
p.Sr(D.d.gI(v))
p.ei("You are at an Uber station. Get in the car parked next to it and drive up to the people waiting. They get in by themselves.",!0)},
aPH(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=" points for the ",i=k.ghE()
if(i==null)return
w=d.a
v=w==="bread"
if(v||w==="medicine"){u=i.aEd(v?"food":"medicine")
t=!D.a.a0(u,"You need")}else{v=d.r
t=!1
if(v>0){w=w==="tank"
s=w?A.h9Q(k.c5.b):d.e
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
w=k.aK
if(w!=null)w.B(k.ghE())
k.m(k.giZ())},
cws(){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.ghE(),i=l.aK
i=i==null?k:i.b.b==="gasstation"
w=i===!0
i=l.c
i.toString
v=C.aG(i,k,x.w).w.a
i=v.a
u=i>v.b*1.15
t=new A.edl(u,new A.edm(l,j,u))
s=C.d(w?"\u26fd":"\ud83d\uded2",k,k,k,k,k,k,D.x3,k,k,k)
r=C.d(w?"NGMY Gas shop":"NGMY Mart",k,k,k,k,k,k,D.fw,k,k,k)
q=j==null?k:j.r
p=x.p
q=C.a([s,D.as,C.E(C.x(C.a([r,C.d("You have "+(q==null?0:q)+" \u2b50",k,k,k,k,k,k,B.fmx,k,k,k)],p),D.E,k,D.e,D.i,0,D.p),1)],p)
if(u)q.push(new C.a4(190,k,new A.Ux(l.c5,w,14,k),k))
q.push(D.bc)
q.push(C.aA(k,B.bTZ,D.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new A.edk(l),k,k,k,k,k,k,!1,D.a3))
o=C.B(q,D.m,k,D.e,D.i,0,k,k)
n=t.$2("FOOD AND DRINKS (energy)",B.daG)
s=w?"GAS":"HEALTH AND THE TOWN"
m=t.$2(s,w?B.dnf:B.djX)
t=D.w.j(0.55)
i=u?Math.min(i-24,820):340
s=C.m(28)
r=C.J(D.aX,D.r,1)
q=C.a([o,D.W],p)
if(!u)D.d.v(q,C.a([new A.Ux(l.c5,w,14,k),D.Q],p))
if(u)q.push(C.B(C.a([C.E(n,5),D.es,C.E(m,3)],p),D.E,k,D.e,D.i,0,k,k))
else D.d.v(q,C.a([n,m],p))
return C.p(D.A,C.eO(D.A,C.p(k,C.x(q,D.ak,k,D.e,D.P,0,D.p),D.f,k,k,new C.o(k,k,r,s,k,B.zm,D.n),k,k,k,D.bg,D.bQ,k,k,i),D.f,D.e3),D.f,t,k,k,k,k,k,k,k,k,k,k)},
chG(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=this,a1=null,a2=a0.gpn()
a2.toString
w=a0.aC
v=w==null
u=v?a1:w.f
if(u==null)u=0
t=v?a1:w.r
if(t==null)t=300
s=a2.x
r=new A.ecm()
q=new A.eci(a0,u,t,r,new A.ecl(),s,a2)
p=a2.cZ7()
o=["\ud83e\udd47","\ud83e\udd48","\ud83e\udd49","4","5","6"]
v=D.w.j(0.55)
n=C.m(28)
m=C.J(D.aX,D.r,1)
l=x.p
k=C.a([C.B(C.a([B.fLF,D.as,C.E(C.x(C.a([B.fNt,C.d("Race "+a2.as+": first to 8 wins +40",a1,a1,a1,a1,a1,a1,I.tk,a1,a1,a1)],l),D.E,a1,D.e,D.i,0,D.p),1),C.aA(a1,D.rP,D.y,!1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,new A.ecg(a0),a1,a1,a1,a1,a1,a1,!1,D.a3)],l),D.m,a1,D.e,D.i,0,a1,a1),D.ae],l)
if(s!=null){j=D.bt.j(0.14)
i=C.m(16)
h=C.J(D.bt,D.r,1)
g=s.b
f=C.d(A.L9(g).b,a1,a1,a1,a1,a1,a1,D.Kk,a1,a1,a1)
k.push(C.p(a1,C.B(C.a([f,D.as,C.E(C.d(s.r?"You have the "+A.L9(g).c.toLowerCase()+". Take it to the house (follow the yellow line).":"Go to the "+r.$1(s.c).toLowerCase()+" to pick up the "+A.L9(g).c.toLowerCase()+".",a1,a1,a1,a1,a1,a1,D.pE,a1,a1,a1),1),C.aA(a1,B.fBM,D.y,!1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,new A.ech(a0,a2),a1,a1,a1,a1,a1,a1,!1,D.a3)],l),D.m,a1,D.e,D.i,0,a1,a1),D.f,a1,a1,new C.o(j,a1,h,i,a1,a1,D.n),a1,a1,a1,D.d1,D.bg,a1,a1,a1))}else{j=C.a([B.fQh,D.Q],l)
for(a2=a2.r0(0,u,t),a2=C.d5(a2,0,C.dC(6,"count",x.S),C.T(a2).c),i=a2.$ti,a2=new C.bT(a2,a2.gL(0),i.k("bT<ak.E>")),i=i.k("ak.E");a2.C();){h=a2.d
j.push(q.$1(h==null?i.a(h):h))}D.d.v(k,j)}k.push(D.am)
k.push(B.fF9)
k.push(D.Q)
for(e=0;e<p.length;++e){a2=p[e].a==="You"?D.aJ.j(0.18):D.c.j(0.05)
j=new C.aP(12,12)
i=p[e]
h=i.a
g=h==="You"
d=new C.ay(g?D.aJ:D.dr,1,D.r,-1)
f=o[e]
g=g?D.u:D.U
k.push(C.p(a1,new C.ca(D.aM,D.e,D.i,D.m,a1,D.p,a1,0,C.a([new C.a4(26,a1,new C.y(f,a1,D.aTj,a1,a1,a1,a1,a1,a1,a1,a1,a1),a1),new C.by(1,D.ba,new C.y(h,a1,new C.F(!0,D.c,a1,a1,a1,a1,a1,g,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1,a1,a1,a1,a1,a1,a1),a1),new C.y(""+i.b+"/8",a1,M.Km,a1,a1,a1,a1,a1,a1,a1,a1,a1),D.as,new C.y(""+i.c+" pts",a1,B.fjY,a1,a1,a1,a1,a1,a1,a1,a1,a1)],l),a1),D.f,a1,a1,new C.o(a2,a1,new C.bH(d,d,d,d),new C.bh(j,j,j,j),a1,a1,D.n),a1,a1,a1,D.eI,D.l9,a1,a1,a1))}return C.p(D.A,C.eO(D.A,C.p(a1,C.x(k,D.ak,a1,D.e,D.P,0,D.p),D.f,a1,a1,new C.o(a1,a1,m,n,a1,B.zm,D.n),a1,a1,a1,D.bD,D.bQ,a1,a1,340),D.f,D.e3),D.f,v,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1)},
bUm(d){var w,v,u=this,t=u.aK
if(t==null||t.a!=="tower"||u.ok!=null)return
w=t.f
if(d===w){u.m(new A.ebL(u))
return}u.p2=t
w=new A.f24(w,d,Date.now())
v=t.at
v===$&&C.c()
w.r=v.f
w.w=v.r
u.ok=w
t.y=u.be=u.b2=0
u.m(new A.ebM(u))
w=u.e
w===$&&C.c()
w.hU(175,0.28,B.h0o,0)
u.ei("Going to level "+d+": walking to the elevator.",!0)
w=u.p1
if(w!=null)w.bR(0)
w=new A.a5i(u.gcsq(),Z.BJ)
w.h7(0)
u.p1=w},
DR(d){var w=D.k.E(d,0,1)
return w*w*(3-2*w)},
csr(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d="tri",a0=e.ok,a1=e.p2
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
m=A.h1e("cabin",a1.b,!1)
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
e.m(e.giZ())
w=e.e
w===$&&C.c()
w.Nq(54,0.1,B.h0C,3.141592653589793)
A.fQ(520,70,0.25,d)}break
case 1:m=e.aK
if(m==null||m.a!=="cabin")return
l=a0.f
if(u<0.9)r=1-e.DR(u/0.9)
else{r=l-0.9
r=u>r?e.DR((u-r)/0.9):0}m.y=r
k=u>0.9&&u<l-0.9
if(k){j=D.o.E(t+D.k.V((w-t)*e.DR((u-0.9)/(l-1.8))),1,m.gM8())
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
t.Nq(54+p*1.2,0.1+Math.sin(u*6.1)*0.007*i,new A.q(0,52+r*0.5*i,52),3.141592653589793+o*0.5+n*0.01*i)
if(u>l-0.9&&!a0.x){a0.x=!0
m.z=w
e.p3.sp(0,C.w(w===1?"L":w))
A.fQ(880,140,0.3,d)
C.bP(D.fO,new A.edc(),x.H)}if(u>=l){a0.d=2
a0.c=v
h=a1.b.a
t=e.d
t===$&&C.c()
r=t.d
r===$&&C.c()
t=r[t.e].cy.h(0,h)
g=e.gIA().h(0,h*100+w)
a1.f=D.o.E(w,1,a1.gM8())
a1.c=t===w
w=a1.at
w===$&&C.c()
w.f=0
w.r=112
w.w=3.141592653589793
a1.x=!1
a1.CW.aa(0)
a1.B(a1.ch)
e.ajq(a1,g)
a1.B(e.ghE())
w.f=0
w.r=16
w.w=0
w.x=!1
a1.y=1
e.aK=a1
e.m(e.giZ())
e.e.Nq(175,0.28,B.h0p,0)}break
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
t.aq2(new A.q(0,40,w.r*0.7+14))
if(u>=2.2){f=a1.c
t=e.p1
if(t!=null)t.bR(0)
e.ok=null
w.x=!1
a1.y=0
e.m(e.giZ())
e.e.hU(170,0.4,B.h03,0)
A.fQ(660,80,0.25,d)
w=""+a1.f
e.ei(f?"Level "+w+". This office has no power: walk onto the red mat at the breaker panel, or tap the red frames.":"Level "+w+" of "+a1.gM8()+".",!0)}}},
bPB(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.aK
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
r=g.gM8()
q=x.p
s=C.B(C.a([B.fUm,D.as,C.E(C.x(C.a([B.fMs,C.d("You are on level "+s+" of "+r,h,h,h,h,h,h,I.tk,h,h,h)],q),D.E,h,D.e,D.i,0,D.p),1),C.aA(h,D.rP,D.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new A.ebo(i),h,h,h,h,h,h,!1,D.a3)],q),D.m,h,D.e,D.i,0,h,h)
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
if(m)l.push(B.fUH)
p.push(C.aA(h,C.p(D.A,C.x(l,D.m,h,D.b9,D.i,0,D.p),D.f,h,h,new C.o(o,h,new C.bH(j,j,j,j),new C.bh(n,n,n,n),h,h,D.n),h,52,h,h,h,h,h,58),D.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new A.ebp(i,r),h,h,h,h,h,h,!1,D.a3))}return C.p(D.A,C.eO(D.A,C.p(h,C.x(C.a([s,D.ae,B.fSB,D.W,C.bY(D.bG,p,D.br,h,8,8),D.am,B.fDC],q),D.ak,h,D.e,D.P,0,D.p),D.f,h,h,new C.o(h,h,t,v,h,B.zm,D.n),h,h,h,D.bD,D.bQ,h,h,330),D.f,D.e3),D.f,w,h,h,h,h,h,h,h,h,h,h)},
aug(){var w,v,u,t,s,r,q=this,p=q.e
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
aRE(d,e,f,g,h){var w=new A.eba(h)
return new A.q(w.$4(d.a,e.a,f.a,g.a),w.$4(d.b,e.b,f.b,g.b),w.$4(d.c,e.c,f.c,g.c))},
c4_(d){var w=this.d
w===$&&C.c()
w=w.d
w===$&&C.c()
return A.ia0(D.d.fY(w,new A.ec2()),d)},
czc(d){var w,v,u=this
u.B5()
u.Sd()
if(u.aN)u.a2R()
u.aK=null
w=u.c4_(d)
if(w.length===0)return
u.m(new A.edo(u,w))
v=u.e
v===$&&C.c()
v.Q=4800
v.e=6
v.f=2600
v.as=-1.2
v.at=1.4
v.ra(!0)
u.adT()
v=u.RG
if(v!=null)v.bR(0)
v=new A.a5i(u.gbOR(),Z.BJ)
v.h7(0)
u.RG=v},
adT(){var w,v,u,t,s,r,q,p=this,o=++p.ry,n=p.rx
if(o>=n.length){p.a2Q()
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
u=A.h1e(v,o,u.k4.t(0,t))
u.B(p.ghE())
p.aK=u
p.ajq(u,p.gIA().h(0,t))
t=p.aK
t.toString
t.B(p.ghE())
p.m(p.giZ())}s=w.r
if(s&&p.aK!=null){p.aK=null
p.m(p.giZ())}if(w.w==null&&w.x==null){s=!n||s
r=p.aug()
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
D.d.M(o,n+Math.max(1,new A.q(u.a-v.a,u.b-v.b,u.c-v.c).guY()))}}o=w.e
if(o!=null)p.ei("\ud83d\ude81 "+o,!0)},
bOS(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this
if(!a2.p4||a2.c==null)return
w=a2.rx[a2.ry]
v=(Date.now()-a2.to)/1000
u=w.x
if(u!=null){t=a2.CW.gig()/1000
s=B.a4M[u].a
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
h=a2.aug()
k=A.pB(h.a,k,i)
m=A.pB(h.b,m,i)}if(v>=w.d){a2.adT()
return}}else{u=w.w
if(u!=null){u=B.kq[u]
t=a2.CW.gig()
t=$.aRM().cX0(0,D.d.cp(B.kq,u),t/1000).a
u=t[0]
m=new A.q(u,26,t[1])
l=v*0.6+0.8
k=new A.q(u+Math.sin(l)*190,85,t[1]+Math.cos(l)*190)
if(v<2.5){j=v/2.5
i=j*j*(3-2*j)
g=a2.aug()
k=A.pB(g.a,k,i)
m=A.pB(g.b,m,i)}if(v>=w.d){a2.adT()
return}}else{f=v*w.c
if(a2.x1.length<2||f>=D.d.gak(a2.xr)){a2.adT()
return}u=a2.xr
t=u.length
e=0
for(;;){s=e+2
if(!(s<t&&u[e+1]<=f))break;++e}t=u[e]
n=e+1
d=D.k.E((f-t)/(u[n]-t),0,1)
t=new A.ebm()
u=e-1
k=a2.aRE(t.$2(a2.x1,u),t.$2(a2.x1,e),t.$2(a2.x1,n),t.$2(a2.x1,s),d)
m=a2.aRE(t.$2(a2.x2,u),t.$2(a2.x2,e),t.$2(a2.x2,n),t.$2(a2.x2,s),d)}}a0=m.aE(0,k)
a1=Math.max(8,a0.guY())
u=a2.e
u===$&&C.c()
t=Math.atan2(a0.a,-a0.c)
u.Nq(a1,Math.asin(D.k.E(-a0.b/a1,-1,1)),m,t)},
a2Q(){var w=this,v=w.e
v===$&&C.c()
v.Q=0
v=w.RG
if(v!=null)v.bR(0)
w.RG=null
if(w.c==null)return
w.m(new A.edA(w))
w.y3()
w.ei("The drone has landed.",!0)},
bOQ(){var w=null,v=new A.ebk(this),u=D.w.j(0.55),t=C.m(28),s=C.J(D.aX,D.r,1),r=x.p
return C.p(D.A,C.eO(D.A,C.p(w,C.x(C.a([C.B(C.a([B.fSo,D.as,B.bGj,C.aA(w,D.rP,D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new A.ebj(this),w,w,w,w,w,w,!1,D.a3)],r),D.m,w,D.e,D.i,0,w,w),B.fFe,v.$4("\ud83c\udf06","The whole city","High flights over every street","city"),v.$4("\ud83e\udea7","Billboards and NGMY logos","Close to every ad, and the big logo board","billboards"),v.$4("\ud83c\udfc1","Edge billboards only","A tour round the big boards at the edges of the city","edges"),v.$4("\ud83c\udfe0","Houses","Fly by the houses, then go inside a big one","houses"),v.$4("\ud83c\udfe5","Hospital, shop and school","Fly in and look round inside each","hospital"),v.$4("\ud83d\ude8c","Traffic","Follow the self-driving buses and police cars","traffic"),v.$4("\ud83c\udfac","Everything","A little of all of it","all")],r),D.ak,w,D.e,D.P,0,D.p),D.f,w,w,new C.o(w,w,s,t,w,B.zm,D.n),w,w,w,D.bD,D.bQ,w,w,330),D.f,D.e3),D.f,u,w,w,w,w,w,w,w,w,w,w)},
gIA(){var w=this.d
w===$&&C.c()
w=w.d
w===$&&C.c()
return D.d.fY(w,new A.ebS()).cx},
aus(d){var w,v=C.a([],x.u)
for(w=0;w<4;++w)v.push(d.r1(w))
return v},
czB(d){var w,v,u=C.a([],x.t)
for(w=0;w<4;++w){if(!d.r1(w)){v=d.d
v===$&&C.c()
v=w>=v.length}else v=!0
u.push(v?0:new A.edz(d,w).$0())}return u},
cGM(d,e){var w,v,u,t,s,r=d.d
r===$&&C.c()
if(e>=r.length)return""
w=r[e]
r=w.a
v=d.at.h(0,r)
u=v==null
t=u?null:v.a
s=A.a2l(t==null?w.b:t).toLowerCase()
if(u||!A.h5t(w.b,v.a))return"nothing put in yet at "+A.j4(r).b
if(v.b.c<2)return"the "+s+" at "+A.j4(r).b+" is not finished: fasten every wire and close it"
return"the "+s+" at "+A.j4(r).b+" works but is NOT wired safely: "+d.apA(r).b},
ajq(d,e){var w=e==null
d.d=w?B.aAL:this.aus(e)
d.e=w?B.a3b:this.czB(e)},
gbbi(){var w,v,u=this.aK
if(u==null||!u.c)return null
w=u.a
v=u.b.a
return w==="tower"?v*100+u.f:v},
gakp(){var w,v=this.gbbi(),u=v==null?null:this.gIA().h(0,v)
if(u!=null)w=u.gbkU()||D.d.d0(this.aus(u),new A.eeo())
else w=!1
return w},
asS(){var w,v,u,t,s,r=this,q=r.aK,p=r.gbbi(),o=p==null,n=o?null:r.gIA().h(0,p)
if(q==null||o||n==null)return
if(!D.d.d0(r.aus(n),new A.eaU())){r.ei("Not quite done: the wiring is not right yet. Open the wiring bench again (tap the panel) and check every wire.",!1)
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
s=10+r.it.ap(26)
v=r.ghE()
if(v!=null)v.r+=s
r.lg=Date.now()
r.lB=0
q.d=B.dsq
q.e=B.a3b
q.B(r.ghE())
r.m(r.giZ())
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
YG(d){return this.c_U(d)},
c_U(d){var w=0,v=C.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k
var $async$YG=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:l=d.b
k=l.a
if(d.a==="tower")k=k*100+d.f
s=t.gIA().c3(0,k,new A.ebP(l,d))
w=3
return C.b(t.yh(new A.ebQ(s)),$async$YG)
case 3:if(t.c==null){w=1
break}t.ajq(d,s)
if(t.gakp())t.asS()
else{d.B(t.ghE())
t.m(t.giZ())
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
for(o=0;o<4;++o)if(!s.r1(o))r.push(t.cGM(s,o))
n=x.cc
m=C.C(new C.Z(r,new A.ebR(),n),n.k("M.E"))
r=q.length===0?"Nothing is fixed yet":"Fixed so far: "+D.d.aG(q,", ")
p=D.d.aG(p,", ")
q=m.length===0?"":"Why: "+C.d5(m,0,C.dC(2,"count",x.S),C.T(m).c).aG(0,"; ")+". "
t.ei(r+". Still to do: "+p+". "+q+"Tap the red frames to carry on.",!1)}case 1:return C.h(u,v)}})
return C.i($async$YG,v)},
abr(d){return this.bRJ(d)},
bRJ(d){var w=0,v=C.j(x.H),u,t=this,s,r,q,p,o
var $async$abr=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:o=t.d
o===$&&C.c()
s=o.d
s===$&&C.c()
r=d.a
q=s[o.e].db.c3(0,r,new A.ebu())
w=3
return C.b(t.yh(new A.ebv(q)),$async$abr)
case 3:if(t.c==null){w=1
break}if(q.c>=2&&A.La(A.t7("light"),q).a==="ok"){o=t.d
s=o.d
s===$&&C.c()
s[o.e].db.W(0,r)
o=t.d
s=o.d
s===$&&C.c()
s[o.e].k3.W(0,r)
p=10+t.it.ap(26)
r=t.ghE()
if(r!=null)r.r+=p
t.m(t.giZ())
t.ei("The street light is on again. You wired it correctly: black to black, white to white, ground to ground. +"+p+" stars.",!0)}else t.ei("The light is still out: finish the wiring and fit the cover, then it comes on.",!1)
case 1:return C.h(u,v)}})
return C.i($async$abr,v)},
c8s(){var w,v,u=this,t=u.aC
if(t==null)return
w=u.d
w===$&&C.c()
v=w.d
v===$&&C.c()
v[w.e].dA(0,"crate",t.f+Math.sin(t.w)*34,t.r+Math.cos(t.w)*34)
u.al=null
u.m(u.giZ())
u.ei("You put the crate down.",!0)},
c5U(){var w,v,u,t,s,r,q,p,o=this,n=o.d
n===$&&C.c()
n=n.d
n===$&&C.c()
w=D.d.fY(n,new A.ec4())
if(o.gaXn())return
n=x._
v=C.a([],n)
for(u=w.x,t=u.length,s=w.k4,r=0;r<u.length;u.length===t||(0,C.L)(u),++r){q=u[r]
p=q.b
if(p==="house2"||p==="bighouse"){p=q.a
p=!s.t(0,p)&&p!==o.jh}else p=!1
if(p)v.push(q)}if(s.a<2&&v.length!==0&&o.bD==null&&o.bE==null){q=v[o.it.ap(v.length)]
v=q.a
s.M(0,v)
o.jh=v
v=q.b==="bighouse"?"the big house":"the house"
o.b52(new A.Qk(q,v,"power","",o.aOu(),0))}n=C.a([],n)
for(v=u.length,t=w.k3,r=0;r<u.length;u.length===v||(0,C.L)(u),++r){q=u[r]
s=q.b
if((s==="pole"||s==="lamppost")&&!t.t(0,q.a))n.push(q)}if(t.a<3&&n.length!==0&&D.o.F(o.bX,90)===0){t.M(0,n[D.o.F(o.bX*5,n.length)].a)
o.ei("\u26a1 A street light went out in the town. Find it (it is dark, with a red sign) and fix it.",!1)}n=o.d
v=n.d
v===$&&C.c()
if(v[n.e].c==="outside"&&o.aK==null)o.m(o.giZ())},
axh(d){return this.c5V(d)},
c5V(d){var w=0,v=C.j(x.H),u=this
var $async$axh=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:u.m(new A.ec5(u,d))
return C.h(null,v)}})
return C.i($async$axh,v)},
aXy(){var w,v=this.cJ,u=v==null?null:v.a
if(u==null)return null
w=A.vF(new A.q(0,0,B.hE.h(0,u.b).d/2+60),u.e*3.141592653589793/2)
return new C.z(u.c+w.a,u.d+w.c)},
awp(){var w=this.aC,v=this.aXy()
if(w==null||v==null)return null
return D.k.V(Math.sqrt(Math.pow(v.a-w.f,2)+Math.pow(v.b-w.r,2))/10)},
csJ(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.aC,g=j.gKx()
g=g==null?i:g.ga7_(0)
if(g==null){g=j.gpn()
g=g==null?i:g.ga7_(0)
w=g}else w=g
if(w==null)w=j.aXy()
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
if(g)return B.Ii
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
u.aE5(new A.q(h.f+o*k,1.4,h.r+n*k),B.hhq,D.bt,p)
k+=26;++l}}u.f=3
u.d=0.4
u.dF(new A.q(v,0,s),new A.q(v,170,s),4,D.bt,8)
u.dF(new A.q(v,0,s),new A.q(v,1.6,s),24,D.bt,14)
return g},
bHf(){var w,v,u,t,s,r,q,p=this,o=null,n=p.y1,m=new A.eao(),l=new A.ean(),k=x.p
if(n!=null){w=p.awp()
v=C.a([C.B(C.a([C.ha(D.aA,o,C.d(n.gbf0(),o,o,o,o,o,o,D.pG,o,o,o),o,24),D.bc,C.E(C.x(C.a([C.d(n.gaEf(),o,o,o,o,o,o,D.de,o,o,o),B.fNQ],k),D.E,o,D.e,D.i,0,D.p),1),C.aA(o,D.rP,D.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new A.eap(p),o,o,o,o,o,o,!1,D.a3)],k),D.m,o,D.e,D.i,0,o,o),D.ae],k)
for(u=n.gaHy(0),t=0;t<3;++t)v.push(m.$1(u[t]))
u=D.bt.j(0.12)
s=C.m(14)
r=C.J(D.bt.j(0.5),D.r,1)
v.push(C.p(o,C.B(C.a([B.c_O,D.as,C.E(C.d(w==null?"A yellow line on the ground will show you the way.":"Follow the yellow line on the ground. It is about "+C.w(w)+" metres away.",o,o,o,o,o,o,D.pE,o,o,o),1)],k),D.m,o,D.e,D.i,0,o,o),D.f,o,o,new C.o(u,o,r,s,o,o,D.n),o,o,o,D.l7,D.bT,o,o,o))
v.push(l.$5$primary(A1.Hn,"Show me the way",D.bt,new A.eaq(p),!0))
v.push(l.$4(B.bN7,"Take me there",D.be,new A.ear(p,n)))
v.push(l.$4(D.jY,"Later",D.aA,new A.eas(p,n)))
q=C.x(v,D.ak,o,D.e,D.P,0,D.p)}else q=C.x(C.a([B.f3Q,D.ae,m.$1("Hello, this is the City office. A few calls were missed."),m.$1("Please answer the phone, so you can keep working."),m.$1("Every call is a person who needs help. Thank you for answering!"),l.$5$primary(D.hA,"OK, I will answer",D.be,new A.eat(p),!0)],k),D.ak,o,D.e,D.P,0,D.p)
k=D.w.j(0.55)
v=C.m(28)
return C.p(D.A,C.eO(D.A,C.p(o,q,D.f,o,o,new C.o(o,o,C.J(D.aX,D.r,1),v,B.ds4,B.zm,D.n),o,o,o,D.bD,D.bQ,o,o,330),D.f,D.e3),D.f,k,o,o,o,o,o,o,o,o,o,o)},
cv2(){var w,v,u,t,s=this,r=s.d
r===$&&C.c()
w=r.d
w===$&&C.c()
v=w[r.e].BV(s.Q)
if(v==null)return
u=B.dzV.h(0,v.b)
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
w=s.ghE()
if(w!=null)w.r+=u
s.m(s.giZ())
s.ei("Sold for "+C.w(u)+" points.",!0)},
A4(d){return this.bIk(d)},
bIk(d){var w=0,v=C.j(x.H),u,t=this,s
var $async$A4=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return C.b(C.bV(D.L,null,new A.eaQ(d),s,!0,!0,!0,null,!1,!1,x.H),$async$A4)
case 3:if(t.c==null){w=1
break}t.m(new A.eaR(t))
case 1:return C.h(u,v)}})
return C.i($async$A4,v)},
crG(d){var w,v,u=this.ghE()
if(u!=null){w=u.c
w===$&&C.c()
w=d>=w.length}else w=!0
if(w)return C.f8(null,x.H)
w=u.c
w===$&&C.c()
v=w[d]
w=this.c
w.toString
return C.bV(E.mC,null,new A.edb(this,v,u),w,!0,!0,!0,D.k5,!1,!1,x.H)},
azC(d){var w=this.c
w.toString
return C.bV(E.mC,null,new A.ecV(this,d),w,!0,!0,!1,D.k5,!1,!1,x.H)},
cEo(){var w=this.c
w.toString
return C.bV(E.mC,null,new A.ee8(this),w,!0,!0,!0,D.k5,!1,!1,x.H)},
cDL(){var w=this.c
w.toString
return C.bV(D.L,null,new A.edV(this),w,!0,!0,!0,null,!1,!1,x.H)},
b7W(d,e){var w,v,u,t=this,s=t.dx
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
if(e){s=new A.aWD(!0,w,d,C.a([],s))
s.b_v()}else{s=new A.aWD(!1,w,d,C.a([],s))
s.b_v()}t.cx=s
t.cy=t.CW.gig()/1000
t.x=!0
t.r="look"
t.w=!1
s=D.d.gI(t.cx.d)
t.bj.aa(0)
t.b8=!1
t.m(new A.edw(t,s.a))
t.y3()
t.dx=C.dh(D.jg,new A.edx(t))
t.m(new A.edy())},
czx(d){return this.b7W(d,!1)},
bO8(d,e){var w,v=d.w[e],u=v.b
A:{if("left"===u){w=new A.q(-d.geb(0)/2,40,v.c+d.gh_(0)/2-40)
break A}if("right"===u){w=new A.q(d.geb(0)/2,40,v.c+d.gh_(0)/2-40)
break A}w=new A.q(v.c,40,0)
break A}return w},
cDM(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=i.cx
if(h==null||i.c==null)return
w=i.CW.gig()/1000-i.cy
v=h.e
v===$&&C.c()
if(w>=v){i.Sd()
i.iL("The tour is over. Press Tour to walk the house again.")
return}if(i.b8)return
u=h.bch(w)
v=i.d
v===$&&C.c()
t=v.e
if(u.a!==t){i.ajO(u)
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
p=!0}if(p)i.m(i.giZ())
m=Math.max(s.geb(0)*0.95,s.gh_(0)*1.15)+20
t=t&&v<s.w.length
q=u.b
if(t){l=i.bO8(s,v)
k=D.dw.aw(0,D.k.E(u.ay,0,1))
j=s.w[v].b
v=i.e
v===$&&C.c()
t=j==="back"?14:0
if(j==="left")n=0.55*k
else n=j==="right"?-0.55*k:-0.03
v.hU(m+(70-m)*k,0.2-0.07*k,new A.q(l.a*0.9+q*0.1,36,l.c+t),n)}else{v=i.e
v===$&&C.c()
v.hU(m,0.24,new A.q(q*0.7,30,u.c*0.6+8),-0.05-q/(s.geb(0)/2)*0.2)}if(u.as!==i.dy)i.m(new A.edW(i,u))},
ajO(d){return this.cDK(d)},
cDK(d){var w=0,v=C.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j
var $async$ajO=C.e(function(e,f){if(e===1){s.push(f)
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
return C.b(x.fa.b(p)?p:C.dV(p,x.eT),$async$ajO)
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
r.m(new A.edL(l,r))
l=r.e
l===$&&C.c()
l.d=new A.q(d.b,36,d.c+4)
l.c=70
l.a=-0.03
l.b=0.15
r.b8=!1
case 1:return C.h(u,v)
case 2:return C.f(s.at(-1),v)}})
return C.i($async$ajO,v)},
Sd(){var w,v,u,t=this,s=t.dx
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
t.m(new A.edD(t))
t.y3()},
cmo(){var w,v,u,t,s,r,q,p,o,n=this,m=n.cx
if(m!=null)return m.bch(n.CW.gig()/1000-n.cy)
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
b8F(){var w,v=this,u=v.c5,t=u.r
if(t<=0)return
u.r=0
w=v.ghE()
if(w!=null)w.r=Math.max(0,w.r-t)
if(v.c!=null)v.m(new A.edE())},
a2N(){var w,v=this,u=v.d
u===$&&C.c()
w=u.d
w===$&&C.c()
u=w[u.e]
if(u.c!=="outside")return
w=v.aC;(w==null?v.aC=A.hox(u,0,24):w).MD(0)
v.aN=!0
v.bM=Date.now()
u=v.b4
if(u!=null)u.bR(0)
u=new A.a5i(v.gcGt(),D.ZU)
u.h7(0)
v.b4=u
v.m(new A.edv())
v.iL("Slide the round stick to walk. Walk up to a door to go in: the house, the hospital or the shop. Double tap a spot to go there.")},
a2R(){var w,v=this
v.aN=!1
v.be=v.b2=0
v.bi=!1
w=v.b4
if(w!=null)w.bR(0)
v.b4=null
w=v.aC
if(w!=null)w.x=!1
v.m(new A.edC())},
cGu(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.aK,e=f==null
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
w.MD(0)
w.z=g.bi&&g.bG==null
if(g.bG==null)w.aJP()
w.cPj(s)
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
g.ei(p?"You are too tired to walk. Rest a little, or buy some food in a shop.":"The car has no gas. Get out, walk to a gas station and buy gas.",!1)}w.at=null
m=!1}else if(u!==0||v!==0){w.at=null
m=w.aM5(0,r*v+q*u,-q*v+r*u,s)}else m=w.FH(0,s)
v=!m
if(v)w.x=!1
if(g.bZ===0){u=g.d
u===$&&C.c()
p=u.d
p===$&&C.c()
l=p[u.e].c==="outside"}else l=!1
if(l){u=m&&g.bG==null
k=o.bk9(s,m&&g.bG!=null,u)}else k=null
if(k!=null)g.ei(k,!1)
g.b8F()
if(!v||w.Q>0){v=g.e
u=w.f
p=w.r
v.CW=null
v.d=new A.q(u,30,p)
v.aW()}if(!e){f.cx=g.al
j=f.fw(0,g.ghE())
g.al=f.cx
if(j!=null){g.iL(j)
g.m(g.giZ())}if(f.cy){f.cy=!1
g.YG(f)}if(f.dx){f.dx=!1
if(!g.id)g.m(new A.eej(g))}if(f.db){f.db=!1
if(!g.k2)g.m(new A.eek(g))}if(f.w){f.w=!1
if(!g.k3)g.m(new A.eel(g))}e=f.x
if(e!==g.k4){g.k4=e
v=g.e
if(e)v.hU(330,0.35,B.h34,1.35)
else v.hU(170,0.4,new A.q(0,30,110),0)}e=f.at
e===$&&C.c()
v=!1
if(e.r>308)if(Math.abs(e.f)<36)e=!(f.a==="tower"&&f.f>1)
else e=v
else e=v
if(e)g.aXQ()
if(!g.k4&&g.ok==null)g.c1H()
return}e=!1
if(g.bG==null){e=g.gpn()
e=(e==null?null:e.x)!=null}if(e){e=g.gpn()
e.toString
g.aSk(e.bkI(w.f,w.r,g.CW.gig()/1000))}e=!1
if(g.bG==null){e=g.d
e===$&&C.c()
v=e.d
v===$&&C.c()
e=v[e.e].c==="outside"&&g.ok==null&&g.bZ===0}if(e){e=$.aRM()
e.FH(0,g.CW.gig()/1000)
i=e.cRD(w.f,w.r)
if(i>=0)g.csv(i)}e=g.bG
if(e!=null)g.cEv(w)
if(m&&g.bG==null){if(Math.abs(w.f)<24){e=w.r
e=e>-2&&e<14}else e=!1
if(e)if(!(Math.abs(w.w)>2.2)){e=w.at
e=e!=null&&e.b<4}else e=!0
else e=!1
if(e){g.a2R()
g.AB(10)
g.iL("You are inside the living room. Use Go outside to come back out.")
return}e=g.d
e===$&&C.c()
v=e.d
v===$&&C.c()
e=D.d.gaf(v[e.e].x)
v=new C.f2(e,new A.eem())
while(v.C()){u=e.gS(0)
h=A.vF(new A.q(0,0,B.hE.h(0,u.b).d/2+10),u.e*3.141592653589793/2)
if(Math.abs(w.f-(u.c+h.a))<22&&Math.abs(w.r-(u.d+h.c))<16){g.aba(u)
return}}}g.cEO(w)},
c1H(){var w,v,u,t,s,r,q,p,o,n,m=this,l=m.e
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
if(s!==w)l.boh(s)},
aba(d){var w,v,u,t,s,r,q=this
q.be=q.b2=0
w=d.b
if(w==="store"||w==="gasstation")w="shop"
else if(w==="hq")w="tower"
v=q.d
v===$&&C.c()
u=v.d
u===$&&C.c()
t=d.a
s=A.h1e(w,d,u[v.e].k4.t(0,t))
s.cx=q.al
s.B(q.ghE())
q.ajq(s,q.gIA().h(0,t))
s.B(q.ghE())
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
v.as=0.15
v.at=1.35
v.ra(!0)
q.e.hU(170,0.4,new A.q(0,30,110),0)
q.m(q.giZ())
A:{if("hospital"===w){w="The hospital. Walk onto the blue mat to admit the sick, and up to a bed to treat the patient. Walk to the green mat to go out."
break A}if("dmv"===w){w="The licence office. Walk onto the blue mat at the desk to get your Uber licence. Walk to the green mat to go out."
break A}if("tower"===w){w="The lobby of an office tower. Walk onto the blue mat (or tap the elevator) to choose a level. Walk to the green mat to go out."
break A}if("house2"===w||"bighouse"===w){w="The house. Walk onto the red or green mat at the breaker panel. Walk to the green mat to go out."
break A}if("school"===w){w="The school. Walk onto the mats to teach the class or read in the library. Walk to the green mat to go out."
break A}if("firestation"===w){w="The fire station. Walk onto the mats to check the equipment. Walk to the green mat to go out."
break A}w="The shop. Walk onto the yellow mat for food and the purple mat for medicine. Walk to the green mat to go out."
break A}q.iL(w)
A.fQ(660,80,0.25,"tri")},
aXQ(){var w,v,u,t=this,s=t.aK,r=t.aC
if(s==null||r==null)return
w=s.b
v=B.hE.h(0,w.b)
v.toString
t.al=s.cx
t.aK=null
t.be=t.b2=0
u=A.vF(new A.q(0,0,v.d/2+30),w.e*3.141592653589793/2)
r.f=w.c+u.a
r.r=w.d+u.c
r.w=0
r.at=null
r.MD(0)
t.m(t.giZ())
t.y3()
v=t.e
v===$&&C.c()
v.aq2(new A.q(r.f,30,r.r))
t.iL("You are back in the city.")},
cEO(d){var w,v,u,t,s,r,q,p,o,n,m=this,l={}
l.a=null
w=m.bG==null
v=!1
if(!w||m.al==null){u=m.c5.b
if(u<(!w?0.7:0.99)){u=m.d
u===$&&C.c()
t=u.d
t===$&&C.c()
u=D.d.b3(t[u.e].x,new A.eec(d))
v=u}}if(v)l.a=new C.Gi(new A.eed(m),"\u26fd Buy gas ("+A.h9Q(m.c5.b)+" \u2b50)")
else if(!w)l.a=new C.Gi(m.gbTO(),"\ud83d\udeaa Get out")
else{if(m.al!=null)l.a=new C.Gi(m.gc8r(),"\u2b07 Put the crate down")
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
if(t==="crate"&&q<46){l.a=new C.Gi(new A.eee(m,r),"\ud83d\udce6 Pick up the crate")
break}if(t==="pole"||t==="lamppost"){o=m.d
n=o.d
n===$&&C.c()
o=n[o.e].k3.t(0,r.a)&&q<60}else o=!1
if(o){l.a=new C.Gi(new A.eef(m,r),"\ud83d\udd27 Fix the street light")
break}if(D.d.t(B.I8,t)&&q<36){l.a=new C.Gi(new A.eeg(m,r),"\ud83c\udf4e Feed the "+p)
break}if(D.d.t(B.dgq,t)&&q<60){l.a=new C.Gi(new A.eeh(m,r),"\ud83d\ude97 Get in the "+p)
break}}}w=l.a
w=w==null?null:w.b
u=m.cL
if(w!=(u==null?null:u.b))m.m(new A.eei(l,m))},
bR_(d){var w,v=this,u=v.cl,t=d.a,s=u.h(0,t),r=B.hE.h(0,d.b).a
if(s!=null&&v.CW.gig()/1000-s<30){v.ei("The "+r.toLowerCase()+" has just eaten. Come back in a little while.",!1)
return}u.n(0,t,v.CW.gig()/1000)
u=v.ghE()
if(u==null)w=null
else{++u.r
w="You fed the "+r.toLowerCase()+". +1 point."
u.PS(w)}if(w==null)w="You fed the "+r.toLowerCase()+"."
A.fQ(880,90,0.25,"tri")
v.m(new A.ebt())
v.iL(w)},
bTD(d){var w=this,v=w.aC
if(v==null)return
w.bG=d
v.CW=d.a
v.ay=22
v.ch=2.4
v.f=d.c
v.r=d.d
v.w=Math.atan2(Math.cos(d.e*3.141592653589793/2),-Math.sin(d.e*3.141592653589793/2))
v.at=null
v.MD(0)
w.m(w.giZ())
w.iL("You are driving the "+B.hE.h(0,d.b).a.toLowerCase()+". Slide the stick to drive. Press Get out to stop.")
A.fQ(300,120,0.25,"tri")},
bTP(){var w,v,u,t,s,r,q=this,p=q.bG,o=q.aC
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
o.MD(0)
for(w=[46,62,80],u=0;u<3;++u){t=w[u]
s=o.f+Math.sin(v)*t
r=o.r+Math.cos(v)*t
if(!o.KP(s,r)){o.f=s
o.r=r
break}}o.aJP()
q.m(q.giZ())
q.iL("You got out.")},
bOP(){var w=this.bG,v=this.aC
if(w==null||v==null)return null
return new C.e5([w.b,v.f,v.r,v.w,w.f])},
yh(d){return this.cou(d)},
cou(d){var w=0,v=C.j(x.H),u=1,t=[],s=[],r=this,q,p
var $async$yh=C.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:++r.bZ
q=r.eu?r.ab:0
u=2
p=r.c
p.toString
w=5
return C.b(C.a5(p,!1).cc(C.eh(new A.ed1(q,d),!1,null,x.H)),$async$yh)
case 5:s.push(4)
w=3
break
case 2:s=[1]
case 3:u=1;--r.bZ
w=s.pop()
break
case 4:return C.h(null,v)
case 1:return C.f(t.at(-1),v)}})
return C.i($async$yh,v)},
Z7(){var w=0,v=C.j(x.H),u=1,t=[],s,r,q
var $async$Z7=C.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
w=6
return C.b(C.az(),$async$Z7)
case 6:s=e
w=C.ev(J.r(s.a,"ngmy_city_locked_until"))!=null?7:8
break
case 7:w=9
return C.b(J.hu(s,"ngmy_city_locked_until"),$async$Z7)
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
return C.i($async$Z7,v)},
aC4(d){var w=this,v=++w.hO
if(v>=3){w.hO=0
w.B5()
w.b11()}else if(v===2){w.ei(d+". That is two in a row.",!1)
w.b11()}else w.ei(d+". Answer the phone and finish the job, or you lose your place.",!1)},
b11(){A.fQ(1046,160,0.3,"sine")
this.m(new A.ec9(this))},
gaXn(){return this.bZ>0||this.cJ!=null||Date.now()<0||this.p4},
aOu(){var w,v,u=B.drR[this.it.ap(6)]
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
c8v(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this,a2=a1.d
a2===$&&C.c()
a2=a2.d
a2===$&&C.c()
w=D.d.fY(a2,new A.ec6())
v=a1.ghE()
a2=x._
u=C.a([],a2)
for(t=w.x,s=t.length,r=w.k4,q=0;q<t.length;t.length===s||(0,C.L)(t),++q){p=t[q]
o=p.b
if(o==="house2"||o==="bighouse"){o=p.a
o=!r.t(0,o)&&o!==a1.jh}else o=!1
if(o)u.push(p)}s=C.a([],a2)
for(o=t.length,n=w.k3,q=0;q<t.length;t.length===o||(0,C.L)(t),++q){p=t[q]
m=p.b
if((m==="pole"||m==="lamppost")&&!n.t(0,p.a))s.push(p)}l=new C.Z(t,new A.ec7(),C.T(t).k("Z<1>"))
k=C.a([0,1,2,3],x.t)
o=a1.it
D.d.e_(k,o)
a2=C.a([],a2)
for(m=t.length,j=w.cy,q=0;q<t.length;t.length===m||(0,C.L)(t),++q){p=t[q]
i=p.b
if((i==="tower"||i==="hq")&&!j.aj(0,p.a))a2.push(p)}for(t=k.length,m=v!=null,q=0;q<k.length;k.length===t||(0,C.L)(k),++q){h=k[q]
if(h===0&&u.length!==0&&r.a<4){p=u[o.ap(u.length)]
a2=p.a
r.M(0,a2)
a1.jh=a2
a2=p.b==="bighouse"?"the big house":"the house"
return new A.Qk(p,a2,"power","",a1.aOu(),0)}if(h===1&&m&&!l.gan(0)){i=v.gC7()
g=C.T(i).k("Z<1>")
f=C.C(new C.Z(i,new A.ec8(),g),g.k("M.E"))
i=f.length
if(i!==0){e=f[o.ap(i)]
e.e=!0
e.c=Math.min(e.c,70)
d=l.gaf(0)
if(!d.C())C.b9(C.fr())
return new A.Qk(d.gS(0),"the hospital","sick",e.a.b,"",0)}}if(h===3&&a2.length!==0&&j.a<3){p=a2[o.ap(a2.length)]
a0=2+o.ap(A.hA8(p)-1)
j.n(0,p.a,a0)
return new A.Qk(p,p.b==="hq"?"the NGMY company building":"the office tower","office","","",a0)}if(h===2&&s.length!==0&&n.a<4){p=s[o.ap(s.length)]
n.M(0,p.a)
return new A.Qk(p,"the street","light","","",0)}}return null},
aXx(d){var w,v,u,t=this.d
t===$&&C.c()
t=t.d
t===$&&C.c()
w=D.d.fY(t,new A.ebT())
switch(d.c){case"power":return!w.k4.t(0,d.a.a)
case"light":return!w.k3.t(0,d.a.a)
case"office":return!w.cy.aj(0,d.a.a)
default:v=this.ghE()
if(v==null)return!1
t=v.c
t===$&&C.c()
u=new C.Z(t,new A.ebU(d),C.T(t).k("Z<1>"))
if(!u.gaf(0).C())return!0
return u.gI(0).r>=0||!u.gI(0).e||!u.gI(0).f}},
Sr(d){var w,v,u,t=this,s=t.aC
if(s!=null){w=t.d
w===$&&C.c()
v=w.d
v===$&&C.c()
w=v[w.e].c!=="outside"}else w=!0
if(w)return
if(t.aK!=null)t.aXQ()
s.at=null
s.MD(0)
u=t.bSx(d,s)
s.f=u.a
s.r=u.b
s.aJP()
w=t.e
w===$&&C.c()
w.xm(170,new A.q(s.f,30,s.r))
if(!t.aN)t.a2N()},
bSx(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=d.b,i=B.hE.h(0,j)
i.toString
w=B.aRc.t(0,j)
v=w?i.d/2+32:34
u=A.vF(new A.q(0,0,1),d.e*3.141592653589793/2)
j=u.c
i=u.a
t=-i
s=C.a([],x.f)
if(w)for(r=0;r<5;++r)for(q=v+B.ddf[r],p=i*q,q=j*q,o=0;o<5;++o){n=B.d2o[o]
s.push(new C.z(d.c+p+j*n,d.d+q+t*n))}else for(m=0;m<12;++m){l=m*3.141592653589793/6
s.push(new C.z(d.c+Math.cos(l)*v,d.d+Math.sin(l)*v))}for(j=s.length,r=0;r<s.length;s.length===j||(0,C.L)(s),++r){k=s[r]
if(!e.KP(k.a,k.b))return k}return D.d.gI(s)},
czk(d){var w,v,u=this
u.cJ=d
u.hP=0
u.Sr(d.a)
w=d.c
A:{if("sick"===w){v="New job: "+d.d+" is sick. Go into the hospital and onto the desk."
break A}if("light"===w){v="New job: a street light is out. Tap the dark light to fix it."
break A}v="New job: a house has no power. Walk in and fix it at the panel."
break A}u.ei(v,!0)
u.m(new A.edp())},
bUn(d){var w,v=this,u=v.d
u===$&&C.c()
w=u.d
w===$&&C.c()
if(w[u.e].c!=="outside")return
v.Sr(d)
u=d.b
if(u==="house2"||u==="bighouse")v.aba(d)
else if(u==="tower"||u==="hq"){v.aba(d)
v.m(new A.ebN(v))}else v.ei(y.Y,!0)},
cDU(){var w,v,u,t=$.aRM(),s=C.a([],x.f),r=this.gpn()
r=r==null?null:r.amz(this.CW.gig()/1000)
if(r==null)r=B.Ih
w=r.length
v=0
for(;v<r.length;r.length===w||(0,C.L)(r),++v){u=r[v]
s.push(new C.z(u.b,u.c))}t.d=s
return A.imB(this.CW.gig()/1000)},
csv(d){var w,v,u,t,s,r=this,q=Date.now()
if(q-r.mO<1e4)return
r.mO=q
w=r.aC
if(w==null)return
A.fQ(110,600,0.5,"noise")
C.fM()
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
s=C.C(new C.Z(v,new A.edd(),t),t.k("M.E"))
if(s.length===0){r.ei("A "+u+" ran you over! Always cross at the zebra crossing when the green walking person shows.",!1)
return}v=r.gpn()
if(v!=null)v.cX7(D.d.gI(s))
r.Sr(D.d.gI(s))
r.aba(D.d.gI(s))
r.ei("\ud83d\ude91 A "+u+" ran you over! An ambulance brought you to the hospital. Medicine and food are being ordered for you: they are on the Orders board. Cross at the zebra crossing when the green walking person shows.",!1)
r.m(new A.ede(r))},
aj7(){var w=0,v=C.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g
var $async$aj7=C.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:h=r.d
h===$&&C.c()
if(h.a.length!==0){w=1
break}q=null
p=$.a4i
w=p==null||p.a!==h.b?3:4
break
case 3:t=6
w=9
return C.b(A.aUa(),$async$aj7)
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
if(h)m=A.h1m(q)
else if(q!=null&&r.ek){h=C.aK(J.r(q,"seed"))
l=h==null?null:D.k.N(h)
h=A.aWC(l==null?r.d.b:l)
r.d=$.Ec=h
A.hff(h,q)
m=A.h1m(q)}else{h=r.d.b
m=A.h1l(h,h)
m.NF(r.d)}}$.a4i=m
A.aUb().bK(new A.edq(r),x.P)
for(h=m.d,k=h.length,j=r.bJ,i=0;i<h.length;h.length===k||(0,C.L)(h),++i)j.M(0,h[i].a)
r.m(new A.edr(r))
r.by=C.dh(D.fB,new A.eds(r))
case 1:return C.h(u,v)
case 2:return C.f(s.at(-1),v)}})
return C.i($async$aj7,v)},
c8u(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=i.ghE()
if(h==null||i.c==null)return
if(i.cx==null){w=i.d
w===$&&C.c()
h.aDJ(0,1,w)}if(++i.bX%8===0){w=i.d
w===$&&C.c()
h.CX(0,w)}if(i.aK!=null&&i.gakp())i.asS()
w=!1
if(!i.aN)if(i.bZ===0){v=i.d
v===$&&C.c()
u=v.d
u===$&&C.c()
if(u[v.e].c==="outside"){w=i.c5
w=w.c>0||w.d>0}}if(w){t=i.c5.a71(1)
if(t!=null)i.ei(t,!1)
i.b8F()}if(i.aN){w=i.d
w===$&&C.c()
v=w.d
v===$&&C.c()
w=v[w.e].c==="outside"&&!i.c5.f&&i.it.ap(240)===0}else w=!1
if(w){w=i.c5
w.f=!0
w.aW()
i.ei("You feel unwell: a headache. You tire faster until you take pills from a shop.",!1)}if(Date.now()<0||i.bZ>0)return
w=!1
if(D.o.F(i.bX,45)===20){v=i.d
v===$&&C.c()
if(v.a.length===0){w=v.d
w===$&&C.c()
v=w[v.e].c==="outside"
w=v}}if(w)i.c5U()
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
w=(w==null?null:w.x)!=null&&i.aK==null}else w=!1
if(w){w=i.gpn()
w.toString
i.aSk(w.bkI(r.f,r.r,i.CW.gig()/1000))}q=i.cJ
if(q!=null){++i.hP
if(i.aXx(q)){i.hO=0
i.lg=Date.now()
i.lB=0
i.cJ=null
i.hP=0
if(q.c==="sick"){p=10+i.it.ap(26)
w=i.ghE()
if(w!=null)w.r+=p
i.ei("The sick person is at the hospital. +"+p+" stars. Well done.",!0)}if(i.c!=null)i.m(i.giZ())}else if(i.hP>=240){i.cJ=null
i.hP=0
i.aC4("The job was not finished in time")}}else{w=i.eK
if(w.length!==0&&i.aK==null&&i.bD==null&&i.bE==null&&Date.now()-i.lg>1e4){o=D.d.cz(w,0)
if(!i.aXx(o))i.czk(o)}else if(i.bD==null&&i.bE==null&&++i.lB>=45)i.cvn()}}else{v=w.d
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
i.b7P()}}u.pq(new A.ec_(h),!0)
j=i.bD
if(j!=null&&!D.d.b3(w,new A.ec0(j)))i.B5()},
cvn(){var w,v,u=this
u.lB=0
w=u.c8v()
if(w==null)return
if(u.gaXn()){v=u.eK
if(v.length<3)v.push(w)
return}u.b52(w)},
b52(d){var w=this
w.lB=0
w.bD=null
w.bE=d
w.b7P()},
b7P(){var w,v=this
v.T=0
w=v.P
if(w!=null)w.a4(0)
v.P=C.dh(D.rA,new A.edt(v))
v.m(new A.edu())},
B5(){var w=this,v=w.P
if(v!=null)v.a4(0)
w.P=null
if(w.c==null)return
w.m(new A.edB(w))},
c8x(){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null
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
w=new A.eco()
v=new A.ecx(r)
q=x.p
p=C.a([],q)
if(s!=null){o=C.ha(D.aA,k,C.d(s.gbf0(),k,k,k,k,k,k,D.n2,k,k,k),k,28)
n=s.gaEf()
p.push(v.$7$about$avatar$glow$onAnswer$onDecline$onLater$who(s.gbrh(),o,D.bt,new A.ecq(l,s),new A.ecr(l),new A.ecs(l,s),n))}if(t!=null){o=B.CS[t.b]
n=o.b
p.push(v.$6$about$avatar$glow$onAnswer$onDecline$who("NGMY City \xb7 mobile",C.ha(o.e.c,k,C.d(n[0],k,k,k,k,k,k,D.Kb,k,k,k),k,28),D.be,new A.ect(l,t),l.gczS(),n))}if(u){v=C.a([],q)
o=l.cL
if(o!=null)v.push(w.$3$col("\u270b "+o.b,o.a,D.bt))
o=C.a([],q)
if(l.bG==null){n=l.bi
m=n?"\ud83c\udfc3 Run: on":"\ud83c\udfc3 Run"
o.push(w.$3$on(m,new A.ecu(l),n))}if(l.bG==null)o.push(w.$3$col("\u2b06 Jump",new A.ecv(l),D.cp))
v.push(C.B(o,D.m,k,D.e,D.P,0,k,k))
w=l.bG==null
o=w?206:140
v.push(new C.D(D.a_U,new C.a4(o,k,new A.Ux(l.c5,!w,12,k),k),k))
p.push(new C.D(B.bCv,C.B(C.a([new A.aJ2(new A.ecw(l),k),C.x(v,D.dI,k,D.e,D.P,0,D.p)],q),D.dI,k,D.iK,D.i,0,k,k),k))}return new C.a4(r,k,C.x(p,D.m,k,D.e,D.P,0,D.p),k)},
aUc(){var w=this.d
w===$&&C.c()
if(w.a.length!==0)this.Ep()
else this.a0v()},
Ep(){var w=0,v=C.j(x.H),u,t=this,s,r,q,p
var $async$Ep=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:p=t.d
p===$&&C.c()
s=p.d
s===$&&C.c()
r=s[p.e]
if(r.gz9()){t.iL("This lesson is done. Try everything: it all works.")
w=1
break}p=r.p4
w=p==="ptrap"||p==="faucet"?3:5
break
case 3:if(r.RG==null)r.RG=A.h52()
w=6
return C.b(t.yh(new A.eca(r)),$async$Ep)
case 6:w=4
break
case 5:if(r.R8==null)r.R8=new A.CA(C.U(x.S,x.N))
w=7
return C.b(t.yh(new A.ecb(r)),$async$Ep)
case 7:case 4:if(t.c==null){w=1
break}t.m(t.giZ())
if(r.gz9()){p=t.ghE()
if(p!=null)p.r+=10
q=r.p4
A:{p="Done! Tap the outlet and plug something in."
if("switch"===q){p="Done! Tap the switch on the wall: the light comes on."
break A}if("fan"===q){p="Done! Tap the wall switch and the fan spins."
break A}if("outlet"===q||"gfci"===q)break A
s=D.d.t(B.jF,q)
if(s){p="Done! Tap the switch on the wall: it works."
break A}s=D.d.t(B.lj,r.p4)
if(s)break A
p="Done! The sink works."
break A}t.iL(p)}case 1:return C.h(u,v)}})
return C.i($async$Ep,v)},
ako(d){return this.cGV(d)},
cGV(d){var w=0,v=C.j(x.H),u,t=this,s,r,q,p
var $async$ako=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:p=t.d
p===$&&C.c()
s=p.d
s===$&&C.c()
r=s[p.e].id[d]
q=r.gwI()
w=3
return C.b(t.yh(new A.een(r)),$async$ako)
case 3:if(t.c==null){w=1
break}t.m(t.giZ())
if(r.gwI()&&!q){p=t.ghE()
if(p!=null)p.r+=8}if(r.gwI()){p=q?"":"You are paid 8 stars. "
s=r.a==="switch"?"Tap it to turn the light on and off.":"Tap it to plug something in."
t.iL("Wired! "+p+s)}case 1:return C.h(u,v)}})
return C.i($async$ako,v)},
a0v(){var w=0,v=C.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$a0v=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:m=t.d
m===$&&C.c()
s=m.d
s===$&&C.c()
r=s[m.e]
s=r.c
if(s==="outside"){w=1
break}q=r.CW
if(q==null){q=A.ins(r)
s=s==="hall"?"Hall laundry corner":r.b
p=A.csV(q,s,!1,m.b*37+r.a,!1)
p.aml()
if(!r.ay)p.cK_()
r.CW=p
m=p}else m=q
m.b=t.d.c
o=r.gkO()
w=3
return C.b(t.yh(new A.ecd(r)),$async$a0v)
case 3:if(t.c==null){w=1
break}t.m(t.giZ())
if(r.gkO()&&!o){n=10+t.it.ap(26)
m=t.ghE()
if(m!=null)m.r+=n
m=r.gjR()?"":" The room still needs its plumbing, so it stays red until the pipes are done too."
t.ei(r.b+": the wiring is finished and the light has power. You are paid "+n+" stars!"+m,!0)}else if(r.gkO()){m=r.gjR()?"":" The room still needs its plumbing."
t.iL(r.b+": the wiring is finished. The light has power."+m)}case 1:return C.h(u,v)}})
return C.i($async$a0v,v)},
a0m(){var w=0,v=C.j(x.H),u,t=this,s,r,q,p,o,n
var $async$a0m=C.e(function(d,e){if(d===1)return C.f(e,v)
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
s=r.fr=A.h51(!1,n.b*41+r.a,s)
n=s}else n=q
if(!r.ch&&!n.ga3N())r.fr.cJZ()
r.fr.b=t.d.c
p=r.gjR()
w=3
return C.b(t.yh(new A.ecc(r)),$async$a0m)
case 3:if(t.c==null){w=1
break}t.m(t.giZ())
if(r.gjR()&&!p){o=10+t.it.ap(26)
n=t.ghE()
if(n!=null)n.r+=o
t.ei(r.b+": the plumbing is finished and nothing leaks. You are paid "+o+" stars!",!0)}else if(r.gjR())t.iL(r.b+": the plumbing is finished and nothing leaks.")
case 1:return C.h(u,v)}})
return C.i($async$a0m,v)},
bBX(){var w=this.c
w.toString
return C.bV(E.mC,null,new A.e9Q(this),w,!0,!0,!1,D.k5,!1,!1,x.H)},
bBB(d){var w,v,u,t,s,r,q,p,o=this,n=o.d
n===$&&C.c()
w=n.d
w===$&&C.c()
v=w[n.e]
n=v.c
if(n==="outside"||n==="hall"){o.ei("Add devices in a room, not in the hall or in NGMY City.",!1)
return}n=v.id
if(n.length>=4){o.ei("This room already has four added devices.",!1)
return}w=C.a([-v.geb(0)/4,v.geb(0)/4],x.n)
for(u=v.w,t=D.d.gaf(u),s=new C.f2(t,new A.e9K());s.C();)w.push(t.gS(0).c)
for(u=D.d.gaf(u),t=new C.f2(u,new A.e9L());t.C();)w.push(u.gS(0).c+24)
for(u=n.length,r=0;r<n.length;n.length===u||(0,C.L)(n),++r)w.push(n[r].b)
p=-v.geb(0)/2+14
for(;;){if(!(p<=v.geb(0)/2-14)){q=null
break}if(D.d.d0(w,new A.e9M(p))){q=p
break}p+=6}if(q==null){o.ei("There is no free place left on the back wall.",!1)
return}o.m(new A.e9N(o,v,d,q))
o.iL("Added. It is red because it is not wired: tap it to wire it.")},
aey(d,e){var w,v,u=this,t=u.d
t===$&&C.c()
w=t.d
w===$&&C.c()
v=w[t.e].BV(u.Q)
if(v==null)return
u.m(new A.ec3(u,v,D.d.t(B.RZ,v.b),d,e))},
c8D(){var w,v,u=this,t=u.d
t===$&&C.c()
w=t.d
w===$&&C.c()
v=w[t.e].BV(u.Q)
if(v==null)return
u.m(new A.edX(u,v))},
cpD(){var w,v,u=this,t=u.d
t===$&&C.c()
w=t.d
w===$&&C.c()
v=w[t.e].BV(u.Q)
if(v==null)return
u.m(new A.ed2(u,v))
u.iL(B.hE.h(0,v.b).a+": "+B.cXz[v.f]+".")},
c8B(d){var w,v,u=this,t=u.d
t===$&&C.c()
w=t.d
w===$&&C.c()
v=w[t.e].BV(u.Q)
if(v==null)return
u.m(new A.ed3(u,v))},
bBE(d){var w,v=this,u=v.d
u===$&&C.c()
w=u.d
w===$&&C.c()
v.m(new A.e9O(v,w[u.e].M(0,d)))
v.iL(B.hE.h(0,d).a+" added. Move it with the arrows.")},
AA(d,e,f,g,h){var w=null,v=e?g.j(0.25):D.c.j(0.07),u=C.m(14),t=e?g:D.aX
t=C.J(t,D.r,e?2:1)
v=C.a([C.p(w,C.d(d,w,w,w,w,w,w,C.l(w,w,e?g:D.c,w,w,w,w,w,w,w,w,11,w,w,D.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),D.f,w,w,new C.o(v,w,t,u,w,w,D.n),w,w,w,w,D.eJ,w,w,w)],x.p)
if(h)v.push(C.ap(w,C.p(w,w,D.f,w,w,new C.o(D.ax,w,C.J(B.FG,D.r,2),w,w,w,D.a6),w,11,w,w,w,w,w,11),w,w,w,-2,-3,w))
return new C.D(D.fu,C.aA(w,new C.an(D.a_,w,D.ab,D.f,v,w),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,!1,D.a3),w)},
ip(d,e,f,g){return this.AA(d,e,f,g,!1)},
J6(d,e,f){return this.AA(d,e,f,D.aA,!1)},
aCb(d,e,f,g){var w=null,v=g==null,u=v?34:w,t=v?w:D.kk,s=C.m(10),r=e?D.c:D.aX
r=C.J(r,D.r,e?3:1)
if(v)v=w
else v=C.as(C.d(g,w,w,w,w,w,w,C.l(w,w,d.iQ()>0.5?D.w:D.c,w,w,w,w,w,w,w,w,12,w,w,D.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,w,w)
return new C.D(G.og,C.aA(w,C.p(w,v,D.f,w,w,new C.o(d,w,r,s,w,w,D.n),w,34,w,w,t,w,w,u),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,!1,D.a3),w)},
cAL(d,e,f){return this.aCb(d,e,f,null)},
Dq(d,e){var w=null,v=D.c.j(0.1),u=C.m(10),t=C.J(D.aX,D.r,1)
return new C.D(D.fu,C.aA(w,C.p(w,C.X(d,D.c,w,w,w,20),D.f,w,w,new C.o(v,w,t,u,w,w,D.n),w,36,w,w,w,w,w,40),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,e,w,w,w,w,w,w,!1,D.a3),w)},
bK3(){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null
if(k.cx!=null){w=k.dy
return C.B(C.a([C.E(C.d("\ud83c\udfac "+(w.length===0?"Walking in":w),j,1,D.a1,j,j,j,B.foV,j,j,j),1),k.ip("\u23f9 Stop the tour",!0,k.gczV(),D.c0)],x.p),D.m,j,D.e,D.i,0,j,j)}switch(k.r){case"furniture":w=k.d
w===$&&C.c()
v=w.d
v===$&&C.c()
u=v[w.e].BV(k.Q)
w=x.p
v=C.a([],w)
if(u!=null){t=C.a([k.Dq(D.km,new A.eb_(k)),k.Dq(D.jA,new A.eb0(k)),k.Dq(D.rH,new A.eb1(k)),k.Dq(D.qr,new A.eb2(k)),k.Dq(H.apE,k.gc8C()),k.Dq(D.ma,k.gcpC())],w)
s=k.d
r=s.d
r===$&&C.c()
if(r[s.e].c==="outside")t.push(k.Dq(D.P2,k.gcv1()))
t.push(k.Dq(D.eb,k.gc8A(k)))
v.push(new C.a4(j,30,C.cl(t,j,j,j,j,j,D.aM,!1),j))}else v.push(B.b03)
w=C.a([],w)
for(t=B.hE.gdW(B.hE),t=t.gaf(t);t.C();){s=t.gS(t)
r=D.d.t(B.djK,s.a)
q=k.d
p=q.d
p===$&&C.c()
if(r===(p[q.e].c==="outside")){r=s.b
w.push(k.ip(r.b+" "+r.a,!1,new A.eb3(k,s),D.b_))}}v.push(new C.a4(j,30,C.cl(w,j,j,j,j,j,D.aM,!1),j))
return C.x(v,D.m,j,D.e,D.P,0,D.p)
case"walls":w=k.as
v=w<0
w=v?"All walls":"Wall "+(w+1)+": tap Look to reset"
v=C.a([k.J6(w,v,new A.eb4(k))],x.p)
for(o=0;o<8;++o)v.push(k.aCb(B.aA9[o],!1,new A.eb5(k,o),B.dun[o]))
return new C.a4(j,30,C.cl(v,j,j,j,j,j,D.aM,!1),j)
case"floor":w=C.a([],x.p)
for(o=0;o<7;++o){v=B.azS[o]
t=k.d
t===$&&C.c()
s=t.d
s===$&&C.c()
w.push(k.aCb(v.b,s[t.e].Q===o,new A.eb6(k,o),v.a))}return new C.a4(j,30,C.cl(w,j,j,j,j,j,D.aM,!1),j)
case"ceiling":w=k.d
w===$&&C.c()
v=w.d
v===$&&C.c()
w=v[w.e].go==="fan"?"\ud83c\udf00 Fan (tap for light)":"\ud83d\udca1 Light (tap for fan)"
w=C.a([k.ip(w,!1,new A.eb7(k),D.b8)],x.p)
for(o=0;o<4;++o){v=B.ayD[o]
t=k.d
s=t.d
s===$&&C.c()
w.push(k.cAL(v,s[t.e].as===o,new A.eb8(k,o)))}return new C.a4(j,30,C.cl(w,j,j,j,j,j,D.aM,!1),j)
default:n=C.aX(x.S)
w=C.a([k.ip("\u26f6 Full screen",!1,k.gbQ9(),D.aJ)],x.p)
v=k.d
v===$&&C.c()
t=v.d
t===$&&C.c()
if(t[v.e].c==="outside")w.push(k.ip("\ud83d\udcf1 Phone",!1,k.gbQb(),D.c_))
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
w.push(k.AA("\ud83d\udeaa "+s.b,!1,new A.eb9(k,l),D.b_,!r))}}return new C.a4(j,30,C.cl(w,j,j,j,j,j,D.aM,!1),j)}},
B(d){var w,v=this,u=null
if(Date.now()<0){w=C.dy(0,0,0,0-Date.now(),0,0).a
return C.c6(u,F.ni,C.bn(!0,C.as(new C.D(D.ql,C.x(C.a([B.fOQ,D.ae,B.fOX,D.W,B.fP9,D.aB,C.d("It opens again in "+D.o.ao(w,36e8)+"h "+D.o.F(D.o.ao(w,6e7),60)+"m",u,u,u,u,u,u,B.fqQ,u,u,u),D.dT,C.bI(D.aV4,u,new A.eeq(d),u)],x.p),D.m,u,D.e,D.P,0,D.p),u),u,u,u),!0,!1,D.af,!0,!0),u,!1,!1,u,u)}w=C.a([C.bS(0,new C.er(v.bG1(d),v.a_),0,0,0)],x.p)
if(v.aB!=null)w.push(C.bS(0,C.dZ(C.lx(new A.eer(v),u,D.dw,D.hy,new C.bR(v.aF,x.ac),new A.ees(v),new C.bq(1,0,x.e7),x.i),!0,u),0,0,0))
return new C.an(D.a_,u,D.ab,D.t,w,u)},
bIj(){var w,v,u=this,t=null,s=C.a([],x.p)
if(u.gakp())s.push(u.ip("\u2705 Complete work",!0,u.gaR3(),D.bf))
w=u.aN
v=w?"\u23f9 Stop walking":"\ud83d\udeb6 Walk the city"
s.push(u.ip(v,w,w?u.gb87():u.gb7T(),D.be))
s.push(u.ip("\ud83c\udfd7 Build",!1,u.gaNR(),D.be))
w=u.ghE()
w=w==null?t:w.d.length
if(w==null)w=0
s.push(u.AA("\ud83d\udcde Calls",!1,new A.eaC(u),D.c_,w>0))
s.push(u.ip("\ud83c\udfe5 Hospital",!1,new A.eaD(u),D.c0))
s.push(u.ip("\ud83d\uded2 Shop",!1,new A.eaE(u),D.cL))
s.push(u.ip("\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc67 People",!1,new A.eaI(u),D.cp))
s.push(u.ip("\ud83c\udfe0 Go inside",!1,new A.eaJ(u),D.be))
w=u.aK
if((w==null?t:w.a==="shop")===!0)s.push(u.ip("\ud83d\uded2 Buy things",u.k2,new A.eaK(u),D.bt))
w=u.aK
if((w==null?t:w.a==="tower")===!0)s.push(u.ip("\ud83c\udfe2 Level "+w.f+" of "+w.gM8(),!1,new A.eaL(u),D.cp))
if(u.cJ!=null)s.push(u.ip("\ud83d\udccb My job"+(u.awp()==null?"":" \xb7 "+C.w(u.awp())+" m"),!1,new A.eaM(u),D.bt))
w=u.eK.length
if(w!==0)s.push(u.ip("\u23f3 Waiting: "+w,!1,new A.eaN(u),D.aA))
s.push(u.AA("\ud83d\udef5 Orders",u.gpn().x!=null,new A.eaO(u),D.bt,u.gpn().x==null))
w=u.p4
v=w?"\u23f9 Stop drone":"\ud83d\ude81 Drone"
s.push(u.ip(v,w,new A.eaP(u),D.aJ))
w=u.ha
v=w?"\ud83c\udff7 Show tags":"\ud83c\udff7 Hide tags"
s.push(u.ip(v,w,new A.eaF(u),D.c0))
s.push(u.ip("\ud83d\udc41 Hide all",!1,new A.eaG(u),D.bM))
w=u.gKx()
s.push(u.ip("\ud83d\ude96 Uber",(w==null?t:w.f)!=null,u.gcEt(),D.bt))
s.push(u.ip("\ud83d\uddfa Map",u.y,new A.eaH(u),D.bq))
return s},
gcy0(){var w,v,u,t,s,r,q,p,o=this
if(!o.ha){w=o.f
w===$&&C.c()
return w}w=o.ta
v=o.f
v===$&&C.c()
if(w===v&&o.qS!=null){w=o.qS
w.toString
return w}o.ta=v
w=C.a([],x.E)
for(u=o.f.c,t=u.length,s=0;s<u.length;u.length===t||(0,C.L)(u),++s){r=u[s]
q=!1
if(r.d===0)if(!r.c.A(0,D.bB)){p=r.b
if(!C.cU(p,"rooms still need work",0))q=!C.cU(p,"house is finished",0)}if(q)w.push(r)}u=o.f
return o.qS=new A.tU(v.a,v.b,w,u.d,u.e,0)},
bG1(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d=f.d
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
w=w.a.length!==0?e:new A.e9X(f)
s=f.gcy0()
r=f.e
r===$&&C.c()
q=f.at
p=f.ax
o=f.ay
n=f.ai
if(f.eu)d=62
else if(f.f2)d=C.aG(a0,e,d).w.r.b+66
else d=f.y&&f.d.a.length===0?104:10
m=f.c8x()
l=x.p
k=C.a([],l)
if(f.y&&f.d.a.length===0&&!f.eu)k.push(new A.bk1(f.d,f.gc8t(),Math.min(138,u*0.36),e))
j=A.Ya(n,m,r,new A.e9Y(f),new A.e9Z(f),o,q,e,e,new A.ea9(),p,d,f.gbOd(),new A.eaa(f),f.gc8y(),s,t,w,k,e)
i=f.y1!=null||f.y2||f.R8||f.k3||f.go||f.k2||f.id
d=f.ok
h=(d==null?e:d.d)===1
if((i||h)&&!f.ai){d=C.a([j],l)
if(i){if(f.id)w=f.c2n()
else if(f.k2)w=f.cws()
else if(f.go)w=f.chG()
else if(f.k3)w=f.bPB()
else w=f.R8?f.bOQ():f.bHf()
d.push(C.bS(0,w,0,0,0))}if(h)d.push(C.ap(e,C.dZ(C.as(new C.jX(f.p3,new A.eab(),e,e,x.cI),e,e,e),!0,e),e,e,0,0,74,e))
g=new C.an(D.a_,e,D.b3,D.t,d,e)}else g=j
if(f.ai)return f.bIw(g)
if(f.eu)return f.bSA(g)
if(f.f2)return f.cl3(g)
d=f.d
if(d.a.length!==0)d=v.gz9()?"Done \u2713":"To do"
else d=""+d.gcPB()+"/"+f.d.gqT().length+" done"
w=f.d
t=w.d
t===$&&C.c()
w=t[w.e].c==="outside"
t=!w?e:new A.Ux(f.c5,f.bG!=null,12,e)
if(w)w=f.bIj()
else{w=f.x?"\ud83d\udd2d See the whole room":"\ud83c\udfe0 Be inside"
w=C.a([f.ip(w,!1,new A.eac(f),D.b_)],l)
if(f.d.a.length===0){s=f.cx!=null
r=s?"\u23f9 Stop tour":"\ud83c\udfac Tour"
w.push(f.ip(r,s,new A.ead(f),D.c_))}w.push(f.ip("\u2b06 Look up at the ceiling",!1,f.gc3r(),D.b_))
s=f.z
r=s?"\ud83d\udeb6 Stop looking round":"\ud83d\udd04 Look all round (360)"
w.push(f.ip(r,s,new A.eae(f),D.cL))
w.push(f.ip("\ud83d\udcfa TV",!1,f.gcEn(),D.cp))
s=f.d
if(s.a.length===0){r=s.d
r===$&&C.c()
s=r[s.e].c!=="outside"?"\ud83c\udf33 Go outside":"\ud83c\udfe0 Go inside"
w.push(f.ip(s,!1,new A.eaf(f),D.be))}s=f.d
r=s.d
r===$&&C.c()
if(r[s.e].c==="outside"){s=f.aN
r=s?"\u23f9 Stop walking":"\ud83d\udeb6 Walk about"
w.push(f.ip(r,s,s?f.gb87():f.gb7T(),D.be))}if(f.d.a.length===0)w.push(f.ip("\u2795 Add",!1,f.gaNR(),D.be))
if(f.d.a.length===0){s=f.ghE()
s=s==null?e:s.d.length
if(s==null)s=0
w.push(f.AA("\ud83c\udfd8 Community",!1,new A.eag(f),D.c_,s>0))}w.push(f.ip("\ud83d\udd26 Tester",f.w,new A.ea_(f),D.cL))
if(f.d.a.length!==0)w.push(f.AA("\ud83d\udd27 Do the lesson",!1,f.gc8w(),D.bt,!v.gz9()))
else{s=f.AA("\u26a1 Wiring",!1,f.gchz(),D.bt,!v.gkO())
r=v.c
r=(r==="bathroom"||r==="kitchen")&&!v.gjR()
D.d.v(w,C.a([s,f.AA("\ud83d\udeb0 Plumbing",!1,f.gcgZ(),D.cp,r),f.ip("\ud83d\uddfa Map",f.y,new A.ea0(f),D.bq)],l))}}return A.U2(D.aA,new A.ea1(f,a0),C.x(C.a([new C.a4(e,30,C.cl(w,e,e,e,e,e,D.aM,!1),e),D.au,new C.a4(e,30,C.cl(C.a([f.J6("\ud83d\udc41 Look",f.r==="look",new A.ea2(f)),f.J6("\ud83d\udecb Furniture",f.r==="furniture",new A.ea3(f)),f.J6("\ud83e\uddf1 Walls",f.r==="walls",new A.ea4(f)),f.J6("\ud83d\udfeb Floor",f.r==="floor",new A.ea5(f)),f.J6("\u2b1c Ceiling",f.r==="ceiling",new A.ea6(f)),f.J6("\ud83d\udeaa Doors",f.r==="doors",new A.ea7(f)),f.ip("\ud83d\udcd8 Learn",!1,new A.ea8(a0),D.bq)],l),e,e,e,e,e,D.aM,!1),e),D.au,f.bK3()],l),D.E,e,D.e,D.P,0,D.p),g,d,v.b,t)},
cnE(d){return C.bV(E.mC,null,new A.ed0(this),d,!0,!0,!0,D.k5,!1,!1,x.H)}}
A.bk1.prototype={
B(d){var w=null,v=D.k.E((this.e-10)/126,0.5,1),u=D.w.j(0.6),t=C.m(12),s=C.J(D.aX,D.r,1)
return C.p(w,new C.a4(126*v,84*v,C.aA(w,C.eO(D.A,C.b4(w,w,w,new A.bjr(this.c,w),B.f7Z),D.f,D.vF),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new A.dvw(this,v),w,w,w,w,!1,D.a3),w),D.f,w,w,new C.o(u,w,s,t,w,w,D.n),w,w,w,w,D.m8,w,w,w)}}
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
if(t.gkO()&&t.gjR())m=D.bf
else m=!t.gkO()?D.ax:D.d3
l=C.bs(o,D.hG)
$.S()
k=new C.ao(D.O,D.M,D.S,D.T,D.R)
k.r=m.j(t.gkO()&&t.gjR()?0.35:0.5).gp(0)
j=k.G()
v.drawRRect(C.e6(l),j)
j.delete()
l=C.bs(o,D.hG)
k=new C.ao(D.O,D.M,D.S,D.T,D.R)
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
break A}h=new C.iN(new C.eu(l,g,g,D.cN,g,g,g,g,g,g,B.fo6),D.a4,D.bY,new C.jr(1),g,g,g,g,D.bW,g)
h.el()
l=h.b
k=l.c
l=l.a.c
h.a3(d,new C.t(s+(q-s)/2-k/2,r+(p-r)/2-l.gbb(l)/2))}},
av(d){return!0}}
A.aJ2.prototype={
R(){return new A.bu5()},
bir(d,e){return this.c.$2(d,e)}}
A.bu5.prototype={
b_l(d){var w,v,u={},t=u.a=d.aE(0,B.ejl),s=t.gcC()>46?u.a=t.eV(0,t.gcC()).aI(0,46):t,r=s.a/46,q=-s.b/46,p=Math.sqrt(r*r+q*q)
s=this.a
s.toString
w=p<0.15
v=w?0:r
s.bir(v,w?0:q)
this.m(new A.f7A(u,this))},
b_k(){this.a.bir(0,0)
this.m(new A.f7z(this))},
B(d){var w=this,v=null,u=C.p(v,v,D.f,v,v,new C.o(D.w.j(0.42),v,C.J(D.be.j(0.9),D.r,2.4),v,v,v,D.a6),v,132,v,v,v,v,v,132),t=C.p(v,v,D.f,v,v,new C.o(v,v,C.J(D.be.j(0.25),D.r,1.5),v,v,v,D.a6),v,66,v,v,v,v,v,66),s=w.d,r=s==null
if(r)s=D.I
return C.mH(D.c6,new C.a4(132,132,new C.an(D.A,v,D.ab,D.t,C.a([u,t,C.dQ(C.p(v,v,D.f,v,v,new C.o(D.be.j(r?0.55:0.9),v,C.J(D.c,D.r,2),v,v,v,D.a6),v,56,v,v,v,v,v,56),s)],x.p),v),v),v,new A.f7B(w),new A.f7C(w),v,new A.f7D(w),v,v,new A.f7E(w))}}
A.f24.prototype={}
A.Mn.prototype={}
A.Qk.prototype={
gbf0(){var w,v,u=this.c
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
gbrh(){var w,v,u=this.c
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
R(){return new A.bwg()}}
A.bwg.prototype={
B(d){var w,v,u=this,t=null,s=C.aG(d,t,x.w).w,r=D.w.j(0.55),q=C.J(D.bU,D.r,1),p=u.d,o=C.ap(0,C.as(C.aA(t,C.p(t,C.X(p?B.bOO:B.bOP,D.c,t,t,t,20),D.f,t,t,new C.o(r,t,q,t,t,t,D.a6),t,38,t,t,t,t,t,38),D.y,!1,B.hi8,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new A.fdi(u),t,t,t,t,t,t,!1,D.a3),t,t,t),t,t,t,6,0,t)
if(p)return C.c6(t,D.w,new C.an(D.a_,t,D.ab,D.t,C.a([C.bS(0,u.a.d,0,0,0),o],x.p),t),t,!1,!1,t,t)
r=s.a
q=r.b
r=r.a
p=u.a
w=p.c
v=s.alE(D.af,new C.av(q,r),D.af)
return C.c6(t,D.w,C.as(new C.wq(w,C.q0(new C.a4(q,r,new C.an(D.a_,t,D.ab,D.t,C.a([C.bS(0,p.d,0,0,0),o],x.p),t),t),v),t),t,t,t),t,!1,!1,t,t)}}
A.bVs.prototype={}
A.m2.prototype={}
A.NI.prototype={
R(){return new A.bkY()}}
A.bkY.prototype={
rE(d){var w=this.c
w.toString
return C.a5(w,!1).cc(C.eh(new A.dTd(d),!1,null,x.H))},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null
$.asH="tech"
w=C.aH(m,m,m,m,T.nz,m,m,m,new A.dTg(d),m,m,m,m,m,m)
v=D.aA.j(0.16)
u=C.m(13)
t=x.p
u=C.B(C.a([w,C.p(m,B.baH,D.f,m,m,new C.o(v,m,C.J(D.aA.j(0.6),D.r,1),u,m,m,D.n),m,40,m,m,m,m,m,40),D.as,B.bFU],t),D.m,m,D.e,D.i,0,m,m)
v=C.m(26)
w=C.J(D.aA,D.r,1.8)
s=x.V
r=C.a([new C.ac(0,D.G,D.aA.j(0.28),D.ds,26)],s)
r=C.aA(m,C.p(m,C.x(C.a([C.p(m,B.bb8,D.f,m,m,new C.o(D.aA.j(0.2),m,C.J(D.aA,D.r,2),m,C.a([new C.ac(0,D.G,D.aA.j(0.5),D.I,22)],s),m,D.a6),m,78,m,m,m,m,m,78),D.ae,B.fHS,D.au,B.fQZ,D.aB,C.p(m,B.fHO,D.f,m,m,new C.o(D.aA,m,m,C.m(20),m,m,D.n),m,m,m,m,V.alx,m,m,m)],t),D.m,m,D.e,D.i,0,D.p),D.f,m,m,new C.o(m,m,w,v,r,B.c40,D.n),m,m,m,m,D.w8,m,m,m),D.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new A.dTh(n),m,m,m,m,m,m,!1,D.a3)
v=D.w.j(0.6)
w=C.m(16)
w=C.a([r,C.ap(m,C.aA(m,C.p(m,B.fWs,D.f,m,m,new C.o(v,m,C.J(F.fA,D.r,1.4),w,m,m,D.n),m,m,m,m,B.bzb,m,m,m),D.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new A.dTi(n),m,m,m,m,m,m,!1,D.a3),m,m,m,10,10,m)],t)
v=n.c8J("JOBS")
r=n.b_m(C.a([n.AC("\ud83d\udd0c","Wire a room","Go to a room that needs wiring",D.bf,new A.dTl(n)),n.AC("\ud83d\udebd","Plumb a room","Go to a bathroom or kitchen",D.aJ,new A.dTm(n)),n.AC("\ud83d\udd27","Fix a house","Walk the house and fix every sign",D.aA,new A.dTn(n)),n.AC("\ud83e\uddf1","Build a room","Frame, drywall, then wire",D.be,new A.dTo(n)),n.AC("\u26a1","Wiring bench","Just the wiring, one room",D.bt,new A.dTp(n)),n.AC("\ud83e\uddea","Safety inspection","A test job: marked when you submit",D.bq,new A.dTq(n)),n.AC("\ud83d\udcde","Service calls","A customer rings with problems",D.hZ,new A.dTr(n)),n.AC("\ud83c\udfd8","Neighbourhood jobs","Fix lights and wiring around the city",D.aJ,new A.dTs(n))],t))
s=n.e?D.aA.j(0.25):D.c.j(0.07)
q=n.e
p=C.J(q?D.aA:D.aX,D.r,1)
o=q?D.cx:D.f9
w=C.a([u,D.ae,new C.an(D.a_,m,D.ab,D.t,w,m),v,r,n.b_o("LESSONS",C.aA(m,C.p(m,C.X(o,q?D.aA:D.ac,m,m,m,19),D.f,m,m,new C.o(s,m,p,m,m,m,D.a6),m,34,m,m,m,m,m,34),D.y,!1,B.hhS,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new A.dTj(n),m,m,m,m,m,m,!1,D.a3))],t)
if(n.e){v=D.c.j(0.07)
w.push(new C.D(D.d1,C.aM(m,D.Y,!0,m,!0,D.t,m,C.aN(),m,m,m,m,m,m,2,C.br(m,new C.b5(4,C.m(16),D.a0),m,m,m,m,m,m,!0,m,m,m,m,m,m,v,!0,m,m,m,m,m,m,m,m,m,m,m,m,m,A3.Eg,"Search the lessons: outlet, switch, dryer, sink...",m,m,m,m,m,!0,m,m,m,!0,!0,!1,m,B.c_C,m,m,m,m,m,m,m,m,m,m,m,m),D.y,!0,m,!0,m,!1,m,D.aj,m,m,m,B.hhN,m,m,m,m,m,1,m,m,!1,"\u2022",m,new A.dTk(n),m,m,m,!1,m,m,!1,m,!0,m,D.aa,m,m,m,m,m,m,m,m,m,m,m,D.Ku,!0,D.a4,m,D.an,m,m,m,m),m))}D.d.v(w,n.c2j())
return C.c6(m,D.c2,C.bn(!0,C.cl(w,m,m,B.akN,m,m,D.ah,!1),!0,!1,D.af,!0,!0),m,!1,!1,m,m)},
c2j(){var w,v,u,t,s,r,q,p=this,o=x.dz,n=C.a([],o)
for(w=0;w<24;++w){v=B.dfL[w]
n.push(new C.aeL([v.d,v.e,v.b,new A.dT8(p,v),v.c,v.a]))}n.push(new C.aeL(["Three-way switch, fan with light",D.bq,"\ud83e\udde0",new A.dT9(p),"Diagram lessons","diagram wiring picture"]))
n.push(new C.aeL(["Short cards for beginners",D.bq,"\ud83d\udcd8",new A.dTa(p),"Learn the trades","cards beginner trade"]))
u=D.a.fq(p.f.toLowerCase(),C.ag("\\s+",!0,!1,!1,!1))
t=C.T(u).k("Z<1>")
s=C.C(new C.Z(u,new A.dTb(),t),t.k("M.E"))
o=C.a([],o)
for(u=n.length,w=0;w<n.length;n.length===u||(0,C.L)(n),++w){r=n[w]
if(D.d.d0(s,new A.dTc(r)))o.push(r)}if(o.length===0)return C.a([B.enj],x.p)
n=x.p
u=C.a([],n)
for(t=o.length,w=0;w<o.length;o.length===t||(0,C.L)(o),++w){q=o[w].a
u.push(p.AC(q[2],q[4],q[0],q[1],q[3]))}return C.a([p.b_m(u)],n)},
b_o(d,e){var w=null,v=x.p,u=C.a([],v),t=e!=null
if(t)u.push(V.aS9)
u.push(C.E(C.p(w,w,D.f,D.aA.j(0.35),w,w,w,1,w,w,w,w,w,w),1))
u.push(new C.D(D.eY,C.d(d,w,w,w,w,w,w,B.fkx,w,w,w),w))
u.push(C.E(C.p(w,w,D.f,D.aA.j(0.35),w,w,w,1,w,w,w,w,w,w),1))
if(t)D.d.v(u,C.a([D.as,new C.a4(34,w,e,w)],v))
return new C.D(B.bDP,C.B(u,D.m,w,D.e,D.i,0,w,w),w)},
c8J(d){return this.b_o(d,null)},
b_m(d){var w,v,u,t,s=null,r=x.p,q=C.a([],r)
for(w=0;v=d.length,w<v;w+=2){u=d[w]
t=w+1
v=t<v?d[t]:D.bJ
q.push(new C.D(D.ct,new C.El(new C.ca(D.aM,D.e,D.i,D.ak,s,D.p,s,0,C.a([new C.by(1,D.ba,u,s),D.ad,new C.by(1,D.ba,v,s)],r),s),s),s))}return C.x(q,D.m,s,D.e,D.i,0,D.p)},
AC(d,e,f,g,h){var w=null,v=C.a([g.j(0.2),B.FG],x.O),u=C.m(22),t=C.J(g.j(0.55),D.r,1.4),s=x.V,r=C.a([new C.ac(0,D.G,g.j(0.18),D.cy,16)],s),q=g.j(0.22),p=C.J(g.j(0.7),D.r,1.5)
s=C.a([new C.ac(0,D.G,g.j(0.35),D.I,14)],s)
return C.aA(w,C.p(w,C.x(C.a([C.p(w,C.as(C.d(d,w,w,w,w,w,w,D.x3,w,w,w),w,w,w),D.f,w,w,new C.o(q,w,p,w,s,w,D.a6),w,56,w,w,w,w,w,56),D.W,C.d(e,w,w,w,w,w,w,D.j4,D.K,w,w),D.cS,C.d(f,w,2,D.a1,w,w,w,B.fwm,D.K,w,w)],x.p),D.m,w,D.b9,D.i,0,D.p),D.f,w,w,new C.o(w,w,t,u,r,new C.a9(D.b0,D.b6,D.x,v,w,w),D.n),w,w,w,w,B.byU,w,w,w),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,h,w,w,w,w,w,w,!1,D.a3)}}
A.awy.prototype={
R(){return new A.btU()},
bqX(){return this.c.$0()}}
A.btU.prototype={
Z(){this.a2()
this.d=C.dh(D.nq,new A.f7q(this))},
q(){var w=this.d
if(w!=null)w.a4(0)
this.a1()},
B(d){var w=null,v=D.w.j(0.6),u=C.m(18),t=C.J(D.bt,D.r,1.5)
return C.p(w,C.d("\u2b50 "+C.w(this.a.bqX()),w,w,w,w,w,w,B.fkT,w,w,w),D.f,w,w,new C.o(v,w,t,u,w,w,D.n),w,w,w,D.iE,D.qj,w,w,w)}}
A.b7U.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=x.w,e=C.aG(d,g,f).w.a.a>C.aG(d,g,f).w.a.b
if(h.d)return A.h5w(E.y0,h.r,h.z,h.Q,h.y,h.as,h.db,h.w,h.f,h.c)
w=h.r
v=x.p
u=C.a([C.bS(0,A.h5w(E.y0,w,h.z,h.Q,h.y,h.as,h.db,h.w,h.f,h.c),0,0,0)],v)
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
t.push(new A.afP(D.wt,"Zoom out",w,!0,g))
w=h.x
t.push(h.axT(B.bML,"Back to the whole view",w))
t.push(h.axT(Ap.CA,"Flip up and down swiping",new A.cxx()))
t.push(h.axT(D.jE,"Flip left and right swiping",new A.cxy()))
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
o=e?B.bF1:D.nt
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
q=e?B.bF0:E.aky
p=e?B.bp6:E.aeA
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
m=e?D.ado:g
l=e?D.af:D.ck
u.push(C.ap(8,new C.cT(new C.aZ(0,f,0,1/0),C.p(g,C.B(C.a([t,C.aH(g,m,g,g,C.X(D.cx,D.aC,g,g,g,e?16:20),g,g,g,w,l,g,g,g,g,D.cc)],v),D.E,g,D.e,D.i,0,g,g),D.f,g,g,new C.o(p,g,n,o,g,g,D.n),g,g,g,g,q,g,g,g),g),g,g,s,r,g,g))}return new C.an(D.a_,g,D.ab,D.t,u,g)},
axT(d,e,f){var w=null,v=D.w.j(0.55),u=C.J(D.aX,D.r,1)
return new C.D(D.eI,C.he(C.aA(w,C.p(w,C.X(d,D.c,w,w,w,20),D.f,w,w,new C.o(v,w,u,w,w,w,D.a6),w,38,w,w,w,w,w,38),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,!1,D.a3),w,e,w,w),w)}}
A.aY0.prototype={
B(d){var w,v=this,u=null,t=x.p,s=C.a([C.aH(u,u,u,u,T.nz,u,u,u,new A.bXy(d),u,u,u,u,u,u)],t),r=v.x,q=v.c,p=v.d
if(r==null)s.push(C.E(C.d(q,u,u,u,u,u,u,C.l(u,u,p,u,u,u,u,u,u,u,u,16,u,u,D.u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),1))
else D.d.v(s,C.a([C.d(q,u,u,u,u,u,u,C.l(u,u,p,u,u,u,u,u,u,u,u,16,u,u,D.u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),D.as,C.E(r,1),D.as],t))
r=p.j(0.15)
q=C.m(16)
w=C.J(p.j(0.6),D.r,1)
s.push(C.aA(u,C.p(u,C.B(C.a([C.X(Aq.aob,p,u,u,u,17),D.eg,C.d(v.w,u,u,u,u,u,u,C.l(u,u,p,u,u,u,u,u,u,u,u,12,u,u,D.u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],t),D.m,u,D.e,D.P,0,u,u),D.f,u,u,new C.o(r,u,w,q,u,u,D.n),u,u,u,u,D.qj,u,u,u),D.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,v.r,u,u,u,u,u,u,!1,D.a3))
s=C.B(s,D.m,u,D.e,D.i,0,u,u)
q=C.aG(d,u,x.w).w
return C.c6(u,D.c2,C.bn(!0,C.x(C.a([new C.D(B.bE1,s,u),C.p(u,C.ch(v.f,D.t,u,D.y,u,u,u,u,D.ah),D.f,u,new C.aZ(0,1/0,0,q.a.b*0.34),B.b65,u,u,u,u,E.a_b,u,u,1/0),C.E(C.bx(Ao.acK,v.e,D.ap),1)],t),D.m,u,D.e,D.i,0,D.p),!0,!1,D.af,!0,!0),u,!1,!1,u,u)}}
A.ad5.prototype={
aEq(d){var w=this,v=new C.V(Date.now(),0,!1),u=w.amx$===d&&D.o.ao(v.bF(w.amy$).a,1000)<2500
w.amx$=u?"":d
w.amy$=v
return u},
aHx(d){var w,v=this
if(d.length===0)return
w=v.a5d$
if(w!=null)w.a4(0)
v.m(new A.djQ(v,d))
v.a5d$=C.cG(D.jT,new A.djR(v))},
aFK(){var w=this.a5d$
return w==null?null:w.a4(0)}}
A.E_.prototype={
R(){var w=new C.ye()
$.yY()
w.h7(0)
return new A.aAD(w,B.nC,null,"",C.c3(2000,1,1,0,0,0,0,0))},
gdc(d){return this.d}}
A.aAD.prototype={
gti(){var w,v=this,u=v.d
if(u===$){w=A.t7(v.a.c)
v.d!==$&&C.bF()
v.d=w
u=w}return u},
gdI(d){var w,v=this.e
if(v===$){w=this.a.d
v=this.e=w==null?new A.CA(C.U(x.S,x.N)):w}return v},
gash(){var w=this.gti().a
return w==="light"||w==="fan"},
gir(){var w,v=this,u=v.f
if(u===$){w=v.gash()?new A.xi(1.15,0.12,11,B.VG,$.ax()):new A.xi(0.42,0.26,12,B.h7Q,$.ax())
v.f!==$&&C.bF()
u=v.f=w}return u},
gpa(){var w=this,v=w.r
return v===$?w.r=A.bD_(w.gti(),w.gdI(0),!0):v},
aB8(d){var w
this.m(new A.dbf(this,d))
A:{if("practice"===d){w="Practice: you can put a wire anywhere. The mistake shows when the power goes on."
break A}if("test"===d){w="Test: put every wire where you think it goes. Nothing is marked until you submit."
break A}w="Learn: a wrong wire is refused and explained."
break A}this.hr(w,!0)},
q(){var w=this.as
if(w!=null)w.a4(0)
this.aFK()
this.a1()},
hr(d,e){var w=this,v=w.as
if(v!=null)v.a4(0)
w.m(new A.dbd(w,d,e))
w.as=C.cG(D.lE,new A.dbe(w))},
md(d){return this.hr(d,!1)},
pv(){var w=this.gdI(0)
w.d=w.d&&w.a&&w.c>=2
this.r=A.bD_(this.gti(),w,!0)},
ol(){var w,v,u,t=this
if(t.gash()&&t.gdI(0).c===0){t.gir().hU(11,0.12,B.VG,1.15)
t.m(new A.daY(t))
return}w=t.gir()
v=t.gdI(0).c===0
u=v?2.8:0.4
v=v?12:10
w.hU(v,0.26,new A.q(0,0.1,u),0.42)
t.m(new A.daZ(t))},
aYc(d){var w,v,u,t=this
if(t.gash()){t.gir().hU(9,0.12,B.VG,1.15)
return}w=t.gti().e
v=C.T(w)
u=C.p7(new C.cO(new C.Z(w,new A.db_(d),v.k("Z<1>")),new A.db0(),v.k("cO<1,n>")))
if(u==null)u=""
if(d==="ground"||u==="ground")t.gir().hU(8,0.55,B.hbR,0.15)
else if(d==="white"||u==="neutral")t.gir().hU(8.5,0.2,B.hg0,0.95)
else t.gir().hU(8.5,0.2,B.h4s,-0.95)},
c8E(){var w,v,u,t="ground",s=this.gdI(0),r=!s.a||s.c>0,q=new A.daX(this),p=this.gti(),o=p.a
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
return}if(B.aRg.t(0,d))return
if(d===40){w=n.gdI(0)
if(w.a){A.fQ(180,220,0.25,m)
n.md("STOP! The power is still on. Turn the breaker OFF before you touch the strap.")}else if(n.gti().a==="cord3")n.hr("Leave the ground strap on. On a 3-wire cord it joins the neutral to the frame of the appliance. That is what grounds it.",!0)
else if(w.c!==0)n.md("The device is already in the box. Pull it out again to change it.")
else{n.m(new A.db1(n))
A.uk()
n.hr("Ground strap removed. Now the frame will be grounded by the green wire, and the neutral stays clear of it.",!0)}return}w=n.gti()
v=w.f
u=C.T(v).k("Z<1>")
t=C.C(new C.Z(v,new A.db2(d),u),u.k("M.E"))
v=w.a
s=A.hAf(v,d)
u=s!=null
if(u){r=n.gdI(0)
r=r.c===0&&r.b.is(0,s)}else r=!1
if(r){w=n.gdI(0)
if(w.a){A.fQ(180,220,0.25,m)
n.md(l)
return}w=w.b
w.bs(w,new A.db3(s))
n.m(n.gc8H())
n.hr("Wire taken off the screw.",!0)
return}r=!1
if(t.length!==0){q=n.gdI(0)
if(q.c===0){q=q.b
if(q.aj(0,d))r=n.w.length===0||q.h(0,d)===n.w}}if(r){w=n.gdI(0)
if(w.a){A.fQ(180,220,0.25,m)
n.md(l)
return}w.b.W(0,d)
n.m(new A.db4(n))
n.hr(w.z?k:"Wire taken off.",!0)
return}if(u){u=n.gdI(0)
u=u.c===0&&!u.b.is(0,s)&&D.d.b3(w.e,new A.db5(s))}else u=!1
if(u){n.m(new A.db6(n,s,d))
if(n.w.length!==0){n.aYc(s)
n.hr(D.d.fY(w.e,new A.db7(s)).b+": picked up. Now tap the screw, nut or wire it joins.",!0)}return}if(t.length!==0&&n.w.length!==0&&n.gdI(0).c===0){u=n.gdI(0)
p=A.hAa(w,u,n.w,D.d.gI(t),!1)
if(p!=null){++n.Q
A.fQ(180,220,0.25,m)
n.md(p)}else if(u.z){A.fQ(520,60,0.25,"tri")
n.m(new A.db8(n,d))
n.hr(k,!0)
n.w=""}else{A.uk()
n.m(new A.db9(n,d))
if(u.w)n.hr(D.d.gI(t).b+": fastened.",!0)
else if(A.aih(w,u))n.hr("Every wire is on the right screw. Now push the device into the box.",!0)
else n.hr(D.d.gI(t).b+": fastened correctly.",!0)
n.gir().xm(7,A.aQ8(v,d,u))
n.w=""}return}o=n.gpa().b.h(0,d)
if(o!=null){n.m(new A.dba(n,d))
w=n.gir()
v=o.c
w.xm(o.d,v)}},
cmD(){var w,v=this
v.m(new A.dbb(v))
w=v.gdI(0)
if(w.a){A.fQ(120,200,0.25,"saw")
if(w.c===0)v.md("The breaker is ON. The wires are LIVE at 120 volts. Turn it OFF before you touch anything.")}else{A.fQ(600,100,0.25,"tri")
v.hr("Breaker OFF. It is safe to work on the wires. (In real life, always test them with a tester first.)",!0)}},
cC1(){var w,v,u=this,t="The tester glows: this outlet has 120 volts and is wired correctly. The lesson is complete! Mistakes: ",s=" is wired correctly: every wire is on the terminal that belongs to it. The lesson is complete! Mistakes: ",r=u.gti(),q=u.gdI(0),p=A.La(r,q)
if(p.a!=="ok"){u.m(new A.dbg(u,p));++u.Q
A.fQ(180,220,0.25,"square")
C.fM()
r=p.r==="arc"
w=r?95:150
A.fQ(w,450,0.5,r?"saw":"noise")
if(q.z)r=p.d?"The breaker tripped.":"Power is on."
else r=p.b+"\nHow to fix it: "+p.w
u.md(r)
return}u.m(new A.dbh(u))
A.uk()
v=r.a
A:{if("switch"===v){r="Power on. Flip the switch and the light turns on: both black wires are on brass screws, so the switch opens and closes the hot wire. The lesson is complete! Mistakes: "+u.Q+"."
break A}if("gfci"===v){r="Power on. Press RESET (it clicks), then TEST: it must shut the outlet off. Wired on LINE, it protects the whole circuit. The lesson is complete! Mistakes: "+u.Q+"."
break A}if("outlet"===v){r=t+u.Q+"."
break A}q=D.d.t(B.jF,v)
if(q){r="Power on. "+r.b+(s+u.Q+".")
break A}if(v!=="light"&&v!=="fan"){r="Power on. The "+r.b.toLowerCase()+(s+u.Q+".")
break A}r=t+u.Q+"."
break A}u.hr(r,!0)},
B(a1){var w,v=this,u=null,t=v.c8E(),s=D.d.bh(t,new A.dbq()),r=s<0?"All done":"Step "+(s+1)+"/"+v.gti().d.length,q=v.gti(),p=v.gdI(0),o=A.aih(q,p)&&!p.a,n=v.gpa(),m=v.gir(),l=v.x,k=v.y,j=v.z,i=l!==0?v.gpa().b.h(0,v.x):u,h=(p.a?D.ek:D.dY).j(0.95),g=C.m(18),f=p.a,e=C.J(f?D.c0:D.be,D.r,1.5),d=C.X(f?D.hm:B.bOp,D.c,u,u,u,18),a0=x.p
g=C.a([C.aA(u,C.p(u,C.B(C.a([d,D.eg,C.d(f?"Breaker ON (live)":"Breaker OFF (safe)",u,u,u,u,u,u,D.nN,u,u,u)],a0),D.m,u,D.e,D.P,0,u,u),D.f,u,u,new C.o(h,u,e,g,u,u,D.n),u,u,u,u,D.h7,u,u,u),D.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,v.gcmC(),u,u,u,u,u,u,!1,D.a3)],a0)
h=!p.w&&!p.z
h=C.a([A.wX("Learn",D.be,D.uE,h,new A.dbr(v)),D.am,A.wX("Practice",D.c0,D.ok,p.w,new A.dbs(v)),D.am,A.wX("Test",D.bq,D.qv,p.z,new A.dbA(v)),D.am],a0)
if(!p.z)D.d.v(h,C.a([A.wX("Hints",D.aA,D.qx,p.e,new A.dbB(v)),D.am,A.wX("Labels",D.aJ,O.Cr,p.f,new A.dbC(v)),D.am,A.wX("Wire guide",D.mB,D.om,!1,new A.dbD(a1)),D.am],a0))
h.push(A.wX("Brass side",B.br_,E.ap7,!1,new A.dbE(v)))
h.push(D.am)
h.push(A.wX("Silver side",B.Bs,D.P0,!1,new A.dbF(v)))
h.push(D.Q)
n=A.Ya(!1,u,m,new A.dbG(v),u,j,l,i,u,u,k,u,u,v.gJ7(),v.gJ8(),n,!1,u,g,h)
m=C.a([],a0)
l=p.c
if(l===0){l=C.a([],a0)
for(k=D.d.gaf(q.e),j=new C.f2(k,new A.dbH(v));j.C();){i=k.gS(0)
h=i.c
g=new C.aP(14,14)
f=v.w
e=i.a
f=f===e
d=f?D.b_:D.aX
w=new C.ay(d,f?3:1,D.r,-1)
d=C.a([],a0)
if(p.b.is(0,e))d.push(new C.D(D.fu,C.X(D.e6,i.d,u,u,u,18),u))
f=i.b
e=i.d
d.push(new C.y(f,u,new C.F(!0,e,u,u,u,u,13,D.u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u),u,u,u,u,u,u,u,u,u))
l.push(new C.D(D.iE,C.aA(u,C.p(u,new C.ca(D.aM,D.e,D.i,D.m,u,D.p,u,0,d,u),D.f,u,u,new C.o(h,u,new C.bH(w,w,w,w),new C.bh(g,g,g,g),u,u,D.n),u,u,u,u,D.hO,u,u,u),D.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new A.dbt(v,i),u,u,u,u,u,u,!1,D.a3),u))}l=C.a([C.bY(D.bG,l,D.br,u,6,8)],a0)
if(p.z)D.d.v(l,C.a([C.B(C.a([A.uj("Submit the test",D.qv,new A.dbu(v,a1),D.bq)],a0),D.m,u,D.e,D.i,0,u,u),D.Q],a0))
l.push(D.Q)
if(o)p="Push it into the box"
else p=p.a?"Turn the breaker OFF first":"Fasten every wire first"
l.push(C.B(C.a([A.uj(p,B.a2w,o?new A.dbv(v):u,D.aA)],a0),D.m,u,D.e,D.i,0,u,u))
D.d.v(m,l)}else if(l===1)D.d.v(m,C.a([C.B(C.a([A.uj("Pull it back out",D.pi,new A.dbw(v),D.ac),D.ad,A.uj("Put the cover plate on",W.us,new A.dbx(v),D.aA)],a0),D.m,u,D.e,D.i,0,u,u)],a0))
else{l=A.uj("Start over",D.kN,new A.dby(v),D.ac)
p=p.d
k=p?"Tested \u2713":"Power on and test"
D.d.v(m,C.a([C.B(C.a([l,D.ad,A.uj(k,D.hm,p?u:v.gcC0(),D.aA)],a0),D.m,u,D.e,D.i,0,u,u)],a0))}return A.U2(D.aA,new A.dbz(v,a1,t),C.x(m,D.m,u,D.e,D.P,0,D.p),n,r,q.b,u)}}
A.a9I.prototype={
R(){return new A.aGz(B.nC,null,"",C.c3(2000,1,1,0,0,0,0,0))},
gdc(d){return this.c}}
A.aGz.prototype={
gdI(d){var w,v=this.d
if(v===$){w=this.a.c
v=this.d=w==null?A.h52():w}return v},
gir(){var w=this.e
return w===$?this.e=new A.xi(-0.3,0.18,40,B.aXi,$.ax()):w},
gpa(){var w=this.f
return w===$?this.f=A.aQ_(this.gdI(0)):w},
q(){var w=this.z
if(w!=null)w.a4(0)
this.aFK()
this.a1()},
hr(d,e){var w=this,v=w.z
if(v!=null)v.a4(0)
w.m(new A.eXD(w,d,e))
w.z=C.cG(D.lE,new A.eXE(w))},
md(d){return this.hr(d,!1)},
ol(){this.gir().hU(40,0.18,B.aXi,-0.3)
this.m(new A.eXv(this))},
J9(d){var w,v,u,t,s,r,q=this,p="square"
if(d===0){q.ol()
return}w=C.H([41,"tail",42,"trap",43,"arm"],x.S,x.N).h(0,d)
if(w!=null&&!q.gdI(0).a.t(0,w)){v=q.r
if(v.length===0){if(w==="tail")v="tailpiece"
else v=w==="trap"?"P-trap":"trap arm"
q.md("Pick the "+v+" from the buttons below first, then tap its glowing outline.")
return}if(v!==w){A.fQ(180,220,0.25,p)
u=q.r
A:{if("tail"===u){v="The tailpiece is the straight pipe that hangs from the sink. It goes at the very top, under the drain."
break A}if("trap"===u){v="The P-trap is the U-shaped bend. It goes right under the tailpiece, in the middle."
break A}v="The trap arm is the long straight pipe that goes into the wall. It goes last, on the right."
break A}q.md(v)
return}if(w==="trap"&&!q.gdI(0).a.t(0,"tail")){A.fQ(180,220,0.25,p)
q.md("Start from the top: put the tailpiece on first, then the trap under it.")
return}if(w==="arm"&&!q.gdI(0).a.t(0,"trap")){A.fQ(180,220,0.25,p)
q.md("The trap arm joins the trap. Put the P-trap on first.")
return}q.m(new A.eXw(q,w))
A.uk()
q.hr("Piece in place. "+(q.gdI(0).a.a===3?"Now tighten the two slip nuts: tap each nut.":"Pick the next piece."),!0)
return}v=d===44
if(v||d===45){t=v?"n1":"n2"
if(q.gdI(0).b.h(0,t)!==!0){q.m(new A.eXx(q,t))
A.uk()
q.hr("Slip nut hand tightened. In real life give it a quarter turn more with pliers, but never over-tighten plastic.",!0)
return}}if(d===46&&q.gdI(0).a.a===3&&q.r.length===0){if(q.gdI(0).c){q.m(new A.eXy(q))
q.hr("Water turned off.",!0)}else q.b_n()
return}s=q.gpa().b.h(0,d)
if(s!=null){q.m(new A.eXz(q,d))
v=q.gir()
r=s.c
v.xm(s.d,r)}},
b_n(){var w=this,v=x.cc,u=C.C(new C.Z(C.a(["n1","n2"],x.s),new A.eXA(w),v),v.k("M.E"))
w.m(new A.eXB(w,u))
if(u.length!==0){A.fQ(180,220,0.25,"square")
w.md("It is dripping from a loose slip nut! Tap the nut and tighten it, then run the water again.")}else{A.uk()
w.hr("No leaks. The water flows through the trap and into the wall. The little pool in the U-bend stays there and blocks sewer gas. The lesson is complete!",!0)}},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.gdI(0),i=j.a,h=i.t(0,"tail"),g=i.t(0,"trap"),f=i.t(0,"arm"),e=j.b
e=e.h(0,"n1")===!0&&e.h(0,"n2")===!0
w=C.a([h,g,f,e,j.c&&j.d.length===0],x.u)
v=D.d.bh(w,new A.eXI())
u=i.a===3
j=v<0?"All done":"Step "+(v+1)+"/5"
h=l.gpa()
g=l.gir()
f=l.w
e=l.x
t=l.y
s=f!==0?l.gpa().b.h(0,l.w):k
h=A.Ya(!1,k,g,new A.eXJ(l),k,t,f,s,k,k,e,k,k,l.gJ7(),l.gJ8(),h,!1,k,k,k)
e=x.p
s=C.a([],e)
for(r=0;r<3;++r){q=B.dsi[r]
g=i.t(0,q)?k:new A.eXK(l,q)
f=i.t(0,q)?D.dr:D.fN
t=new C.aP(14,14)
p=l.r===q
o=p?D.b_:D.aX
n=new C.ay(o,p?3:1,D.r,-1)
o=C.a([],e)
if(i.t(0,q))o.push(B.enu)
p=B.dAu.h(0,q)
p.toString
m=i.t(0,q)?D.bU:D.c
o.push(new C.y(p,k,new C.F(!0,m,k,k,k,k,13,D.u,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k),k,k,k,k,k,k,k,k,k))
s.push(new C.D(D.iE,C.aA(k,C.p(k,new C.ca(D.aM,D.e,D.i,D.m,k,D.p,k,0,o,k),D.f,k,k,new C.o(f,k,new C.bH(n,n,n,n),new C.bh(t,t,t,t),k,k,D.n),k,k,k,k,D.hO,k,k,k),D.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,g,k,k,k,k,k,k,!1,D.a3),k))}i=C.bY(D.bG,s,D.br,k,6,8)
g=A.uj("Start over",D.kN,new A.eXL(l),D.ac)
f=u?"Run the water":"Build the drain first"
return A.U2(D.cp,new A.eXM(d,w),C.x(C.a([i,D.Q,C.B(C.a([g,D.ad,A.uj(f,D.pm,u?l.gc8I():k,D.cp)],e),D.m,k,D.e,D.i,0,k,k)],e),D.m,k,D.e,D.P,0,D.p),h,j,"Sink drain (P-trap)",k)}}
A.a59.prototype={
R(){return new A.aAX(B.nC,null,"",C.c3(2000,1,1,0,0,0,0,0))},
gdc(d){return this.c}}
A.aAX.prototype={
gdI(d){var w,v=this.d
if(v===$){w=this.a.c
v=this.d=w==null?A.h52():w}return v},
gir(){var w=this.e
return w===$?this.e=new A.xi(-0.25,0.2,36,B.aWD,$.ax()):w},
gpa(){var w=this.f
return w===$?this.f=A.agM(this.gdI(0)):w},
q(){var w=this.z
if(w!=null)w.a4(0)
this.aFK()
this.a1()},
hr(d,e){var w=this,v=w.z
if(v!=null)v.a4(0)
w.m(new A.deh(w,d,e))
w.z=C.cG(D.lE,new A.dei(w))},
md(d){return this.hr(d,!1)},
ol(){this.gir().hU(36,0.2,B.aWD,-0.25)
this.m(new A.de9(this))},
J9(d){var w,v,u,t,s,r,q=this
if(d===0){q.ol()
return}w=x.fZ
v=C.C(new C.Z(B.RX,new A.dec(d),w),w.k("M.E"))
if(v.length!==0&&q.r.length!==0){w=q.gdI(0)
u=A.imG(w,q.r,D.d.gI(v))
if(u!=null){A.fQ(180,220,0.25,"square")
q.md(u)}else{A.uk()
q.m(new A.ded(q,d))
q.gir().xm(12,A.Rs(d))
q.hr(A.bDd(w)?"All four ends are connected. Now open the valves.":D.d.gI(v).b+": connected.",!0)}return}if((d===61||d===62)&&q.r.length===0){q.cEm(d)
return}w=d===68
if(w||d===69){t=w?"hot":"cold"
if(q.gdI(0).e.is(0,t)){q.m(new A.dee(q,t))
q.hr("Hose taken off.",!0)
return}}s=q.gpa().b.h(0,d)
if(s!=null){q.m(new A.def(q,d))
w=q.gir()
r=s.c
w.xm(s.d,r)}},
cEm(d){var w,v,u,t=this,s=d===61,r=s?"hot":"cold"
t.m(new A.dej(t,s,d))
if(!(s?t.gdI(0).f:t.gdI(0).r)){t.hr("The "+r+" valve is turned off.",!0)
return}w=t.gdI(0)
v=w.e
if(v.h(0,d)===r)u=v.h(0,s?63:64)===r
else u=!1
if(!u){A.fQ(180,220,0.25,"square")
t.md(v.h(0,d)==null?"Water is spraying out of the "+r+" valve: it has no hose! Turn it off and connect the hose first.":"Water is leaking: the "+r+" hose is only fastened at one end. Turn the valve off and finish the connection.")}else if(w.f&&w.r&&A.bDd(w)){A.uk()
t.hr(y.W,!0)}else{A.uk()
w=s?"cold":"hot"
t.hr("The "+r+" water is flowing. Now turn the "+w+" valve too: tap its handle.",!0)}},
c8G(d){var w,v=this
v.m(new A.dea(v))
w=v.gdI(0)
if(!(w.f&&w.r)){v.hr("Valves closed.",!0)
return}if(A.bDd(w)){A.uk()
v.hr(y.W,!0)}else{A.fQ(180,220,0.25,"square")
v.md("Water is spraying out of a valve that has no hose! Close the valves and finish connecting the hoses first.")}},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=n.gdI(0),k=l.w||l.e.a!==0,j=l.e,i=j.h(0,61)==="hot"&&j.h(0,63)==="hot",h=j.h(0,62)==="cold"&&j.h(0,64)==="cold",g=C.a([k,i,h,l.f&&l.r&&A.bDd(l)],x.u),f=D.d.bh(g,new A.den())
k=f<0?"All done":"Step "+(f+1)+"/4"
i=n.gpa()
h=n.gir()
w=n.w
v=n.x
u=n.y
t=w!==0?n.gpa().b.h(0,n.w):m
s=x.p
i=A.Ya(!1,m,h,new A.deo(n),m,u,w,t,m,m,v,m,m,n.gJ7(),n.gJ8(),i,!1,m,m,C.a([A.wX("Hints",D.aA,D.qx,l.w,new A.dep(n)),D.Q],s))
v=C.a([],s)
for(r=0;r<2;++r){h={}
w=B.drK[r]
h.a=null
q=w.a
h.a=q
u=new C.aP(14,14)
t=n.r===q
p=t?D.b_:D.aX
o=new C.ay(p,t?3:1,D.r,-1)
p=C.a([],s)
t=C.a7(j).k("bd<2>")
if(new C.Z(new C.bd(j,t),new A.deq(h),t.k("Z<M.E>")).gL(0)===2)p.push(B.enw)
p.push(new C.y(w.b,m,D.to,m,m,m,m,m,m,m,m,m))
v.push(new C.D(D.iE,C.aA(m,C.p(m,new C.ca(D.aM,D.e,D.i,D.m,m,D.p,m,0,p,m),D.f,m,m,new C.o(w.c,m,new C.bH(o,o,o,o),new C.bh(u,u,u,u),m,m,D.n),m,m,m,m,D.hO,m,m,m),D.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new A.der(h,n),m,m,m,m,m,m,!1,D.a3),m))}j=C.bY(D.bG,v,D.br,m,6,8)
h=A.uj("Start over",D.kN,new A.des(n),D.ac)
l=l.f&&l.r?"Close the valves":"Open the valves"
return A.U2(D.c0,new A.det(d,g),C.x(C.a([j,D.Q,C.B(C.a([h,D.ad,A.uj(l,D.pm,n.gc8F(n),D.c0)],s),D.m,m,D.e,D.i,0,m,m)],s),D.m,m,D.e,D.P,0,D.p),i,k,"Faucet supply lines",m)}}
A.aBP.prototype={
R(){return new A.aBQ(A.hgH())}}
A.aBQ.prototype={
gir(){var w,v=this.e
if(v===$){w=new A.xi(-0.3,0.48,46,B.VE,$.ax())
w.f=80
this.e=w
v=w}return v},
gpa(){var w=this.f
return w===$?this.f=A.agN(this.d):w},
q(){var w=this.z
if(w!=null)w.a4(0)
this.a1()},
hr(d,e){var w=this,v=w.z
if(v!=null)v.a4(0)
w.m(new A.dlp(w,d,e))
w.z=C.cG(D.lE,new A.dlq(w))},
md(d){return this.hr(d,!1)},
ol(){this.gir().hU(46,0.48,B.VE,-0.3)
this.m(new A.dlj(this))},
J9(d){var w,v,u,t=this
if(d===0){t.ol()
return}if(d===72){w=t.d
w=w.d.t(0,72)&&w.a>=5}else w=!1
if(w){t.m(new A.dll(t,d))
A.uk()
t.hr("You flipped the breaker fully OFF and then ON. The living room light is back on. A breaker trips when a circuit is overloaded: find out why before it trips again.",!0)
t.gir().xm(22,B.hdi)
return}w=d===87
if(w||d===86){v=t.d
v=v.b&&!v.c&&v.a>=5}else v=!1
if(v){if(t.w==="wrench"&&w){t.m(new A.dlm(t,d))
A.uk()
t.hr("You tightened the slip nut with the wrench. The drip has stopped.",!0)
return}A.fQ(180,220,0.25,"square")
t.md(w?"Hand tightening is not enough here. Pick the wrench first, then tap the nut.":"The water is dripping from the slip nut on the trap. Pick the wrench, then tap the nut.")}u=t.gpa().b.h(0,d)
if(u!=null){t.m(new A.dln(t,d))
w=t.gir()
v=u.c
w.xm(u.d,v)}},
cgD(d){var w,v
A:{if("ptrap"===d){w=B.eu5
break A}if("faucet"===d){w=B.bHJ
break A}w=new A.E_(d,null,null)
break A}v=this.c
v.toString
C.a5(v,!1).cc(C.eh(new A.dlk(w),!1,null,x.H))},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.d,l=B.dmk[m.a],k=o.r,j=k===0?n:A.ibN(k)
k=m.d.t(0,72)
w=!m.b||m.c
v=C.a([!k,w],x.u)
w=m.a
k=o.gpa()
u=o.gir()
t=o.r
s=o.x
r=o.y
q=t!==0?o.gpa().b.h(0,o.r):n
p=j==null?n:C.aA(n,C.p(n,B.fyc,D.f,n,n,new C.o(D.aA,n,n,C.m(12),n,n,D.n),n,n,n,n,D.qj,n,n,n),D.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new A.dlt(o,j),n,n,n,n,n,n,!1,D.a3)
k=A.Ya(!1,n,u,new A.dlu(o),n,r,t,q,p,new A.dlv(o),s,n,n,o.gJ7(),o.gJ8(),k,!1,n,n,n)
s=l.a
p=x.p
q=C.B(C.a([C.E(C.d(""+(m.a+1)+". "+s,n,n,n,n,n,n,B.fqh,n,n,n),1),A.wX("Wrench",D.aJ,D.ok,o.w==="wrench",new A.dlw(o))],p),D.m,n,D.e,D.i,0,n,n)
t=C.d(l.b,n,3,D.a1,n,n,n,B.frn,n,n,n)
m=C.kR(D.bq,6,s,6,0,new A.dlx(o),m.a)
u=v[0]
s=u?"\u2705 Living room power fixed":"\u26a0 Living room has no power"
s=C.E(C.d(s,n,n,n,n,n,n,C.l(n,n,u?D.ep:D.eO,n,n,n,n,n,n,n,n,11.5,n,n,D.H,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),1)
u=v[1]
r=u?"\u2705 Sink leak fixed":"\u26a0 Kitchen sink drips"
return A.U2(D.bq,new A.dly(d,v),C.x(C.a([q,D.bF,t,m,C.B(C.a([s,C.E(C.d(r,n,n,n,n,n,n,C.l(n,n,u?D.ep:D.eO,n,n,n,n,n,n,n,n,11.5,n,n,D.H,n,n,!0,n,n,n,n,n,n,n,n),D.dV,n,n),1)],p),D.m,n,D.e,D.i,0,n,n)],p),D.m,n,D.e,D.P,0,D.p),k,"Stage "+(w+1)+"/7","Build and fix a house",n)}}
A.afP.prototype={
R(){return new A.bxA()}}
A.bxA.prototype={
b83(){var w=this,v=w.d
if(v!=null)v.a4(0)
w.d=null
if(w.e&&w.c!=null)w.m(new A.fj4(w))},
c8K(d){var w,v,u=this
u.m(new A.fj2(u))
w=u.a
v=w.e
v.apE(w.f?1.45:0.69)
v=u.d
if(v!=null)v.a4(0)
u.d=C.cG(D.kJ,new A.fj3(u))},
q(){var w=this.d
if(w!=null)w.a4(0)
this.a1()},
B(d){var w=this,v=null,u=w.a.d,t=D.w.j(w.e?0.8:0.55),s=w.e,r=s?D.bt:D.aX
r=C.J(r,D.r,s?2:1)
return new C.D(D.eI,C.he(C.mH(D.c6,C.p(v,C.X(w.a.c,D.c,v,v,v,22),D.f,v,v,new C.o(t,v,r,v,v,v,D.a6),v,44,v,v,v,v,v,44),v,new A.fj5(w),new A.fj6(w),v,v,v,v,new A.fj7(w)),v,u,v,v),v)}}
A.byb.prototype={}
A.byg.prototype={}
A.bzw.prototype={}
A.jS.prototype={}
A.N4.prototype={}
A.a7b.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=x.p,k=C.a([C.B(C.a([C.aH(m,m,m,m,T.nz,m,m,m,new A.cbZ(d),m,m,m,m,m,m),B.fIr],l),D.m,m,D.e,D.i,0,m,m)],l)
for(w=0;w<5;++w){v=B.du4[w]
u=v.c
t=C.a([new C.D(D.alM,new C.y(v.b+"  "+v.a.toUpperCase(),m,new C.F(!0,u,m,m,m,m,12,D.u,m,1.1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m,m,m,m,m,m,m),m)],l)
for(s=v.d,r=s.length,q=0;q<r;++q){p=s[q]
o=new C.aP(14,14)
n=new C.ay(u.j(0.35),1,D.r,-1)
t.push(C.p(m,C.x(C.a([new C.y(p.a,m,D.j4,m,m,m,m,m,m,m,m,m),D.cS,new C.y(p.b,m,E.aa8,m,m,m,m,m,m,m,m,m)],l),D.E,m,D.e,D.i,0,D.p),D.f,m,m,new C.o(B.FG,m,new C.bH(n,n,n,n),new C.bh(o,o,o,o),m,m,D.n),m,m,m,D.ct,D.bg,m,m,m))}D.d.v(k,t)}return C.c6(m,D.c2,C.bn(!0,C.cl(k,m,m,B.akN,m,m,D.ah,!1),!0,!1,D.af,!0,!0),m,!1,!1,m,m)}}
A.co8.prototype={}
A.Ff.prototype={}
A.nw.prototype={}
A.Xh.prototype={}
A.cnZ.prototype={
bAg(d,e,f){var w,v=this
if(f!=null)w=D.d.fY(B.azv,new A.co2(f))
else{w=new C.e4()
w.cY(v.a)
w=B.azv[w.ap(2)]}v.c!==$&&C.aQ()
v.c=w
w=new C.e4()
w.cY(v.a+7)
w=w.h5()
v.d!==$&&C.aQ()
v.d=w},
vq(d,e){var w=this.c
w===$&&C.c()
return D.d.fY(w.c,new A.co3(e))},
Ps(d){++this.w
return new A.ey(!1,d,!1,"")},
c5T(d){var w=d.d
return new C.N(w,new A.co_(this),C.T(w).k("N<1,n>")).aG(0," and ")},
biT(d,e){var w,v,u,t,s=this,r=s.vq(0,e),q=s.e
if(q.t(0,e))return s.Ps("The "+r.c.toLowerCase()+" is already there.")
if(d!==r.b)return s.Ps(s.b?"That does not go here.":"That does not go here. This spot is for the "+r.c.toLowerCase()+".")
for(w=r.d,v=w.length,u=0;u<v;++u)if(!q.t(0,w[u])){q=s.b?"Not yet: something has to go in first.":"Not yet. "+r.e+" Put in the "+s.c5T(r)+" first.";++s.w
return new A.ey(!1,q,!1,"")}if(r.f&&s.r)return s.Ps(s.b?"The water is still on!":"Stop! The water is still on. Cutting into a pipe with the water on floods the room. Turn the water off at the main valve first (pick the hand and tap the main valve).")
q.M(0,e)
s.y=!1
s.x.aa(0)
if(r.r>0)t=s.b?"":" It is only loose. Pick the wrench and tap it to tighten the joints."
else t=""
return new A.ey(!0,r.c+" fitted."+t,!1,"")},
bka(d){var w,v,u,t,s=this,r=s.vq(0,d)
if(!s.e.t(0,d))return s.Ps(s.b?"Nothing to tighten yet.":"There is nothing to tighten yet: the "+r.c.toLowerCase()+" is not fitted.")
w=r.r
if(w===0)return s.Ps(s.b?"That does not need tightening.":"The "+r.c.toLowerCase()+" does not have joints to tighten. It just sits in place.")
v=s.f
u=v.h(0,d)
if(u==null)u=0
if(u>=w)return s.Ps("Already tight. More force would crack it.")
t=u+1
v.n(0,d,t)
s.x.aa(0)
s.y=!1
v=r.c
return new A.ey(!0,t>=w?v+": every joint is tight now.":v+": one joint tightened, one to go.",!1,"")},
aHF(d){var w=this.vq(0,d),v=this.f.h(0,d)
if(v==null)v=0
return w.r-v},
aJI(){var w,v,u,t,s,r,q=this
q.r=!q.r
w=q.x
w.aa(0)
if(!q.r)return B.b_J
v=q.c
v===$&&C.c()
u=v.c
t=C.T(u).k("Z<1>")
s=C.C(new C.Z(u,new A.co4(q),t),t.k("M.E"))
v=v.c
u=C.T(v).k("Z<1>")
r=C.C(new C.Z(v,new A.co5(q),u),u.k("M.E"))
q.y=!0
if(s.length!==0){w.v(0,new C.N(s,new A.co6(),C.T(s).k("N<1,n>")));++q.w
return new A.ey(!1,"Water is spraying from an open pipe where the "+D.d.gI(s).c.toLowerCase()+" should be! Turn the water off and finish the job.",!0,"")}if(r.length!==0){w.v(0,new C.N(r,new A.co7(),C.T(r).k("N<1,n>")));++q.w
return new A.ey(!1,"The "+D.d.gI(r).c.toLowerCase()+" is leaking from a loose joint. Turn the water off, tighten it with the wrench, then test again.",!0,"")}if(!q.ga3N())return B.b_z
return B.b_k},
cJZ(){var w,v,u,t,s,r,q,p=this
p.r=!0
p.aJI()
w=p.c
w===$&&C.c()
v=w.c
u=v.length
t=0
for(;t<u;++t){s=v[t]
p.biT(s.b,s.a)}for(w=w.c,v=w.length,t=0;t<v;++t){s=w[t]
for(u=s.r,r=s.a,q=0;q<u;++q)p.bka(r)}p.aJI()
p.w=0},
ga3N(){var w=this.c
w===$&&C.c()
return D.d.d0(w.c,new A.co0(this))},
gcI9(){var w=this.c
w===$&&C.c()
return D.d.d0(w.c,new A.co1(this))},
gwI(){var w=this
return w.ga3N()&&w.gcI9()&&w.r&&w.y&&w.x.a===0}}
A.Wg.prototype={
R(){var w,v=new A.xi(-0.25,0.4,135,B.aY0,$.ax())
v.f=200
w=new C.ye()
$.yY()
w.h7(0)
return new A.aFg(v,w)}}
A.aFg.prototype={
gCY(d){var w=this.d
if(w===$){this.a.toString
w=D.o.F(Date.now(),1e5)
this.d=w}return w},
Z(){var w,v=this
v.a2()
w=v.a.e
if(w==null)w=A.h51(!0,v.gCY(0),null)
v.e=w
v.r=A.hvb(w,v.x,!w.b)},
q(){var w=this.at
if(w!=null)w.a4(0)
this.a1()},
aez(){var w=this.e
w===$&&C.c()
return this.r=A.hvb(w,this.x,!w.b)},
axV(d,e){var w=this,v=w.at
if(v!=null)v.a4(0)
w.m(new A.erm(w,d,e))
w.at=C.cG(D.jR,new A.ern(w))},
b_q(){this.f.hU(135,0.4,B.aY0,-0.25)
this.m(new A.erh(this))},
czI(d){var w,v,u=this.e
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
c8O(d){return this.b_p(d)},
cyX(d){var w
A:{if("main"===d){w=9400
break A}w=this.e
w===$&&C.c()
w=w.c
w===$&&C.c()
w=9100+D.d.bh(w.c,new A.err(d))
break A}this.b_p(w)},
b7z(){var w,v,u,t,s,r,q,p=this,o=p.x
if(o==="hand")return C.a([B.eO1],x.L)
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
q=r.vq(0,s)
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
b_p(d){var w,v,u,t,s,r=this
if(d===0)return
w=r.r
w===$&&C.c()
v=w.b.h(0,d)
if(r.x.length===0){r.m(new A.er6(r,d))
if(v!=null)r.axV(v.a+": "+v.b,!0)
return}u=r.czI(d)
w=r.x
if(w==="hand")if(d===9400){w=r.e
w===$&&C.c()
t=w.aJI()}else{w=r.e
w===$&&C.c()
t=r.ayM(w.b?"Your hand is only for the main water valve.":"Your hand is for the main water valve. Parts are placed by picking them from the tray.")}else if(w==="wrench")if(u==null){w=r.e
w===$&&C.c()
t=r.ayM(w.b?"Nothing to tighten.":"There is nothing to tighten there.")}else{w=r.e
w===$&&C.c()
t=w.bka(u)}else if(u==null){w=r.e
w===$&&C.c()
t=r.ayM(w.b?"Not there.":"That does not go there. Tap one of the glowing spots.")}else{s=r.e
s===$&&C.c()
t=s.biT(w,u)}w=t.a
if(w)A.uk()
else A.fQ(180,220,0.25,"square")
r.m(new A.er7(r,d))
w=w&&!t.c
r.axV(t.b,w)
w=r.e
w===$&&C.c()
if(w.gwI()&&!r.as){r.as=!0
$.aV.x1$.push(new A.er8(r))}},
c8L(){var w,v=null
this.a.toString
w=this.c
w.toString
C.ck(v,v,!0,v,new A.erd(this,0),w,v,!0,!0,x.H)},
aZe(){this.m(new A.erk(this))
this.b_q()},
gcE6(){var w,v,u,t=C.a([],x.s)
for(w=0;w<11;++w){v=B.c6V[w]
u=this.e
u===$&&C.c()
u=u.c
u===$&&C.c()
if(D.d.b3(u.c,new A.ers(v)))t.push(v)}return t},
c6g(){var w,v,u,t,s=this.e
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
aVB(){var w,v,u,t=this,s=t.e
s===$&&C.c()
if(s.x.a!==0){s=s.c
s===$&&C.c()
s=s.c
w=C.T(s)
v=new C.cO(new C.Z(s,new A.ere(t),w.k("Z<1>")),new A.erf(),w.k("cO<1,n>")).aG(0,", ")
s=t.e
if(s.r)return new C.b7("\ud83d\udca7 Water is leaking at: "+v+". First turn the main water OFF: pick Hand and tap the main valve.","hand","main")
return new C.b7("\ud83d\udca7 It leaked at: "+v+". Pick the Wrench and tap it to tighten the joint. Then turn the water ON again to test.","wrench",s.x.gI(0))}if(!s.ga3N()){u=t.c6g()
if(u==null)return B.eYF
if(u.f&&t.e.r)return B.eYa
s=u.b
w=B.aHc.h(0,s)
if(w==null)w=s
return new C.b7("Next: pick "+w+" from the tray, then tap "+u.c.toLowerCase()+" (the glowing spot). "+u.e,s,u.a)}s=t.e.c
s===$&&C.c()
s=s.c
w=C.T(s).k("Z<1>")
v=C.C(new C.Z(s,new A.erg(t),w),w.k("M.E"))
if(v.length!==0)return new C.b7("Everything is fitted. Now tighten each joint: pick the Wrench and tap "+D.d.gI(v).c.toLowerCase()+".","wrench",D.d.gI(v).a)
if(!t.e.r)return B.eWY
return B.eZ5},
cxi(){var w,v,u,t,s=this,r={}
r.a=r.b=null
w=s.aVB()
r.b=w.b
r.a=w.c
s.m(new A.ero(r,s))
v=r.a
if(v!=null){if(v==="main")u=9400
else{v=s.e
v===$&&C.c()
v=v.c
v===$&&C.c()
u=9100+D.d.bh(v.c,new A.erp(r))}r=s.r
r===$&&C.c()
t=r.b.h(0,u)
if(t!=null)s.f.hU(70,0.3,t.c,-0.2)
s.m(new A.erq(s,u))}s.axV(w.a,!0)},
axU(d,e,f){var w,v=null,u=this.x===d,t=u?D.aA.j(0.25):D.c.j(0.07),s=C.m(14),r=u?D.aA:D.aX
r=C.J(r,D.r,u?2:1)
w=C.X(f,u?D.aA:D.ac,v,v,v,19)
return new C.D(G.og,C.aA(v,C.p(v,C.B(C.a([w,D.bm,C.d(e,v,v,v,v,v,v,C.l(v,v,u?D.aA:D.c,v,v,v,v,v,v,v,v,12.5,v,v,D.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),D.m,v,D.e,D.i,0,v,v),D.f,v,v,new C.o(t,v,r,s,v,v,D.n),v,v,v,v,D.eY,v,v,v),D.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new A.era(this,u,d),v,v,v,v,v,v,!1,D.a3),v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.e
h===$&&C.c()
h=h.c
h===$&&C.c()
h=h.c
w=new C.Z(h,new A.ert(j),C.T(h).k("Z<1>")).gL(0)
h=j.e.c
h===$&&C.c()
v=j.r
v===$&&C.c()
u=j.y
t=j.z
s=j.Q
r=u!==0?v.b.h(0,u):i
v=A.Ya(!1,i,j.f,new A.eru(j),i,s,u,r,i,new A.erv(),t,i,i,j.gc8M(),j.gc8N(),v,!1,i,i,i)
t=x.p
r=C.a([],t)
if(!j.e.b){u=D.aJ.j(0.12)
s=C.m(12)
q=C.J(D.aJ.j(0.6),D.r,1)
r.push(C.p(i,C.B(C.a([C.E(C.d("\ud83d\udc49 "+j.aVB().a,i,4,D.a1,i,i,i,B.fxk,i,i,i),1),D.bm,C.bI(B.fB2,i,j.gcxh(),C.bo(i,i,i,i,i,B.f7P,D.kk,i,i,i,i,i))],t),D.m,i,D.e,D.i,0,i,i),D.f,i,i,new C.o(u,i,q,s,i,i,D.n),i,i,i,D.eI,D.a_d,i,i,1/0))}if(j.x.length!==0&&j.b7z().length!==0){u=C.a([],t)
for(s=j.b7z(),q=s.length,p=0;p<s.length;s.length===q||(0,C.L)(s),++p){o={}
n=s[p]
o.a=null
o.a=n.a
m=new C.aP(12,12)
l=new C.ay(D.b_,1,D.r,-1)
u.push(C.aA(i,C.p(i,new C.y("\ud83d\udccd "+n.b,i,D.oN,i,i,i,i,i,i,i,i,i),D.f,i,i,new C.o(D.eP.j(0.35),i,new C.bH(l,l,l,l),new C.bh(m,m,m,m),i,i,D.n),i,i,i,i,B.a_e,i,i,i),D.y,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new A.erw(o,j),i,i,i,i,i,i,!1,D.a3))}r.push(new C.D(D.eI,C.bY(D.bG,u,D.br,i,6,6),i))}u=j.e
if(u.b)u="Real work: no hints. Build it in the right order."
else if(u.ga3N())u="Everything is fitted. Tighten every joint, then turn the main water on to test."
else{u=j.e.c
u===$&&C.c()
u="Job: "+u.d}r.push(new C.bM(D.a5,i,i,C.d(u,i,2,D.a1,i,i,i,B.aTJ,i,i,i),i))
r.push(D.Q)
t=C.a([j.axU("hand","Hand",B.apx),j.axU("wrench","Wrench",D.ok)],t)
for(u=j.gcE6(),s=u.length,p=0;p<u.length;u.length===s||(0,C.L)(u),++p){k=u[p]
q=B.aHc.h(0,k)
q.toString
t.push(j.axU(k,q,Ag.ap1))}r.push(new C.a4(i,52,C.cl(t,i,i,i,i,i,D.aM,!1),i))
return A.U2(D.aJ,new A.erx(j,d),C.x(r,D.m,i,D.e,D.P,0,D.p),v,""+w+"/"+h.c.length+" fitted","Plumbing job: "+h.b,i)},
c2C(d){return C.bV(E.mC,null,new A.erj(this),d,!0,!0,!0,D.k5,!1,!1,x.H)}}
A.z7.prototype={}
A.l9.prototype={}
A.XX.prototype={}
A.aw6.prototype={}
A.aUY.prototype={}
A.ey.prototype={
gjP(){return this.a}}
A.XL.prototype={
cm1(d,e,f){var w,v,u,t,s,r,q=this,p=null,o="outlet",n="light",m="switch",l="gfci",k=q.a,j=new C.e4()
j.cY(k)
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
k=s}if(f&&v<3){k[1]=new A.l9(k[1].a,B.dm4[j.ap(5)],p)
k=q.d
k===$&&C.c()
k[3]=new A.l9(k[3].a,B.dnL[j.ap(5)],p)}},
ganH(){var w,v,u=C.aX(x.S),t=this.d
t===$&&C.c()
w=t.length
v=0
for(;v<t.length;t.length===w||(0,C.L)(t),++v)u.M(0,t[v].a)
return u},
cWa(d){var w,v,u,t=this.d
t===$&&C.c()
w=t.length
v=0
for(;v<w;++v){u=t[v]
if(u.a===d)return u}return null},
fM(d){++this.f
return new A.ey(!1,d,!1,"")},
aml(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.d
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
h.z.v(0,h.ganH())
for(g=h.Q,w=x.S,u=0;u<3;++u){p=B.oC[u]
v=C.aX(w)
t=C.aX(w)
o=new A.aw6(v,t)
o.d=o.e=o.a=!0
for(r=h.aqL(p),n=r.length,m=0;m<r.length;r.length===n||(0,C.L)(r),++m)for(l=r[m]*10,k=0;k<6;++k)t.M(0,l+k)
for(t=h.ganH(),r=C.a7(t),n=new C.mr(t,t.r,r.k("mr<1>")),n.c=t.e,r=r.c,t=p+48;n.C();){l=n.d
if(l==null)l=r.a(l)
s=A.j4(l)
if(!s.c){j=s.d.a
j=j>=p&&j<=t}else j=!1
if(j)v.M(0,l)}g.n(0,p,o)}for(g=h.as,u=0;u<2;++u){i=g[u]
i.a=!0
i.b=3
i.d=i.c=!0}},
cK_(){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=k.d
j===$&&C.c()
w=j.length
v=0
for(;v<j.length;j.length===w||(0,C.L)(j),++v){u=j[v]
k.bgR(u.a,u.b)}for(w=j.length,t=x.S,s=x.N,r=k.at,v=0;v<j.length;j.length===w||(0,C.L)(j),++v){q=j[v].a
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
k.bfc(q,l.b,l.a)}k.aIZ(q)
k.aFf(q)}if(!k.ax)k.aJG()
for(w=j.length,v=0;v<j.length;j.length===w||(0,C.L)(j),++v){u=j[v]
if(D.d.t(B.lj,u.b)){t=u.a
k.biV(t,"lamp")
k.bku(t)}}for(j=D.d.gaf(j),w=new C.f2(j,new A.csZ());w.C();){t=j.gS(0).a
k.aGh(t)
k.aGh(t)}},
aM8(d){var w,v,u=A.j4(d).d.a,t=C.a([],x.t)
for(w=0;v=$.Hf(),w<v.length;++w){v=v[w]
if(v>u&&v<64)t.push(w)}return t},
cU2(d,e){var w,v,u=this,t=u.x
if(t.aj(0,d))return u.fM("There is already a box at "+A.j4(d).b+".")
w=A.j4(d)
v=w.c
if(!v&&e!=="wall")return u.fM("That is a ceiling box. On the wall you use a plain wall box (the blue one with ears).")
if(v&&e==="wall")return u.fM("A wall box cannot go in the ceiling. Use a round ceiling box.")
if(w.e==="fan"&&e!=="fan"){if(!u.b)return u.fM('A fan is heavy and it shakes. It needs a box that says "fan rated". A plain ceiling box can let the fan fall.')
t.n(0,d,e);++u.f
return B.b_X}t.n(0,d,e)
t=v?"ceiling joist":"side of the stud"
return new A.ey(!0,w.b+": box fixed to the "+t+".",!1,"")},
cOv(d){var w,v=this
if(d<0||d>=$.Hf().length)return B.b_R
w=v.y
if(w.t(0,d))return v.fM("That stud already has a hole.")
if(v.x.a===0)return v.fM("Mount the boxes first. Then you know where the cable has to go and which studs need a hole.")
w.M(0,d)
return B.b_B},
cXf(d){var w,v,u,t,s=this,r=A.j4(d)
if(!s.x.aj(0,d))return s.fM("There is no box at "+r.b+". Mount the box first, then pull the cable to it.")
w=s.z
if(w.t(0,d))return s.fM("The cable is already there.")
v=s.aM8(d)
u=C.T(v).k("Z<1>")
t=C.C(new C.Z(v,new A.ct5(s),u),u.k("M.E"))
if(t.length!==0){w=D.o.V($.Hf()[D.d.gI(t)])
v=t.length
u=v===1?"it":"the studs"
return s.fM("The cable is stuck: the stud at "+w+" inches has no hole. Drill "+u+" first ("+v+" left on the way).")}w.M(0,d)
return new A.ey(!0,"Cable pulled from the panel to "+r.b+", through the studs and along the ceiling.",!1,"")},
gap0(){return this.ganH().d0(0,new A.ct6(this))},
aqq(d){var w,v,u,t
for(w=this.Q,w=new C.cD(w,C.a7(w).k("cD<1,2>")).gaf(0);w.C();){v=w.d
u=v.b
if(u.a){t=v.a
t=d>=t&&d<=t+48}else t=!1
if(t)return u}return null},
cRj(d){var w,v,u=this
if(!u.gap0())return u.fM("Finish the rough-in first. The cable and the boxes must be in before the drywall hides the studs.")
if(!D.d.t(B.a5o,d))return B.b_o
if(!D.d.t(B.oC,d))return u.fM("The edge of the sheet would land between two studs. The sheet needs a stud under every edge, so there is nothing to screw it to. Start at the left corner (a stud) and move one sheet width (48 inches) at a time.")
w=u.Q
v=w.h(0,d)
if((v==null?null:v.a)===!0)return u.fM("There is already a sheet there.")
v=w.h(0,d)
if(v==null){v=x.S
v=new A.aw6(C.aX(v),C.aX(v))}v.a=!0
w.n(0,d,v)
return B.b_A},
aqL(d){var w,v,u,t=C.a([],x.t)
for(w=d+48,v=0;u=$.Hf(),v<u.length;++v){u=u[v]
if(u>=d&&u<=w)t.push(v)}return t},
cNp(d){var w,v,u=this,t=A.j4(d)
if(t.c)return u.fM("Ceiling fixtures do not need an opening in the wall.")
if(!u.x.aj(0,d))return u.fM("There is no box at "+t.b+".")
w=u.aqq(t.d.a)
if(w==null)return u.fM("There is no sheet over this box yet. Hang the sheet first, then cut the opening.")
v=w.b
if(v.t(0,d))return u.fM("The opening is already cut.")
v.M(0,d)
return B.b_K},
aLn(d,e,f){var w,v,u,t,s,r=this
if(f)return r.fM("Missed the stud! There is only air behind the sheet here. The screw would pull through the paper. Screw only where a stud is behind the sheet (every 16 inches).")
w=x.dD
v=C.C(new C.Z(B.oC,new A.ct7(r,d),w),w.k("M.E"))
if(v.length===0)return r.fM("There is no sheet here yet.")
u=d*10+e
if(D.d.d0(v,new A.ct8(r,u)))return r.fM("There is already a screw there.")
for(w=v.length,t=r.Q,s=0;s<v.length;v.length===w||(0,C.L)(v),++s)t.h(0,v[s]).c.M(0,u)
return B.b_M},
boE(d,e){return this.aLn(d,e,!1)},
bqh(d){var w=this.Q.h(0,d)
if(w==null||!w.a)return!1
return D.d.d0(this.aqL(d),new A.cta(w))},
gaDL(){return D.d.d0(B.oC,new A.csY(this))},
gaDK(){var w=this.ganH()
return new C.Z(w,new A.csW(),C.a7(w).k("Z<cs.E>")).d0(0,new A.csX(this))},
cZd(d){var w,v=this
if(!v.gaDL())return v.fM("Hang all the sheets first.")
if(!D.d.d0(B.oC,v.gaqr()))return v.fM("Finish screwing every sheet to the studs first. Tape goes on a solid wall.")
w=v.as[d]
if(w.a)return v.fM("This seam already has tape.")
w.c=w.a=!0
return B.b_s},
cU5(d){var w,v=this,u=v.as[d]
if(!u.a)return v.fM("Tape first. The mud goes over the tape.")
if(!u.c)return v.fM("The last coat is still wet. Let it dry before the next coat.")
w=u.b
if(w>=3)return v.fM("Three coats are enough. Now sand it.");++w
u.b=w
u.c=!1
return new A.ey(!0,"Coat "+w+" of joint compound spread. Let it dry.",!1,"")},
cSX(){var w,v=this.as
if(D.d.d0(v,new A.ct3()))return B.b_H
for(w=0;w<2;++w)v[w].c=!0
return B.b_V},
boq(d){var w=this,v=w.as[d]
if(v.b<3)return w.fM("Put on all three coats of mud first. Sanding now would just rub off the tape.")
if(!v.c)return w.fM("The mud is still wet. Let it dry first.")
if(v.d)return w.fM("Already sanded.")
v.d=!0
return B.b_p},
cWp(d){var w=this,v=w.Q.h(0,d)
if(v==null||!v.a)return w.fM("There is no sheet there.")
if(!w.gaDK())return w.fM("Cut the openings for the boxes before you paint. Otherwise the paint covers the boxes.")
if(!D.d.d0(w.as,new A.ct4()))return w.fM("Sand the seams first. Paint shows every bump.")
if(v.e)return w.fM("This sheet is already painted.")
v.e=!0
return B.b_l},
gt6(){var w=this
return w.gaDL()&&D.d.d0(B.oC,w.gaqr())&&w.gaDK()&&D.d.d0(w.as,new A.ct_())&&D.d.d0(B.oC,new A.ct0(w))},
NG(){var w,v
for(w=this.at,w=new C.du(w,w.r,w.e);w.C();){v=w.d.b
v.a=this.ax&&!this.ay}},
c1P(d,e){if(d.c)return e==="light"||e==="fan"?"":"A ceiling box holds a light or a fan, not an outlet or a switch."
return D.d.t(B.lj,e)||D.d.t(B.jF,e)?"":"A light or a fan hangs from the ceiling. A wall box holds an outlet, a GFCI or a switch."},
bgR(d,e){var w,v,u,t,s,r=this,q=A.j4(d)
if(!r.gt6())return r.fM("Finish the drywall first. Devices go in after the walls are painted.")
w=r.x
if(!w.aj(0,d)||!r.z.t(0,d))return r.fM("There is no box with cable at "+q.b+".")
v=r.at
if(v.aj(0,d))return r.fM("There is already a device there. Pull it out first if you want to move it.")
if(r.ax&&!r.ay){++r.f
return B.b_t}u=r.c1P(q,e)
if(u.length!==0)return r.fM(u)
if(!(D.d.t(B.jF,e)&&q.e==="low"))t=!D.d.t(B.jF,e)&&!q.c&&q.e==="switch"
else t=!0
if(t){if(!r.b)return r.fM(D.d.t(B.jF,e)?"A switch goes about 48 inches from the floor, where a hand falls naturally. This box is down at outlet height.":"Outlets go low, about 16 inches from the floor. This box is up at switch height.");++r.f
r.cy.push("Wrong height at "+q.b+".")}t=e==="fan"
if(t&&w.h(0,d)!=="fan")if(!r.b)return r.fM("This box is not fan rated. A fan on it can fall. Take the box out and put in a fan-rated one.")
s=new A.CA(C.U(x.S,x.N))
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
aoO(d){var w=this,v=w.at,u=v.h(0,d)
if(u==null)return B.b_x
if(w.ax&&!w.ay&&!u.b.x){if(w.b)return w.a2t()
return w.a2I()}v.W(0,d)
w.CW.W(0,d)
w.cx.W(0,d)
w.ch.W(0,d)
return B.b_P},
a2I(){++this.r;++this.f
return B.b_N},
a2t(){var w,v,u=this;++u.r;--u.e
u.ax=!1
u.NG()
w=u.e
if(w<=0){u.w=!0
return B.b_w}v=w===1?"life":"lives"
return new A.ey(!1,"ZAP! You touched a live wire and got a shock. The breaker is now off. "+w+" "+v+" left. Always turn the breaker OFF and test the wires first.",!0,"shock")},
bfc(d,e,f){var w,v,u,t,s=this,r=s.at.h(0,d)
if(r==null)return B.acc
s.NG()
w=A.t7(r.a)
v=D.d.fY(w.f,new A.ct1(f))
u=A.hAa(w,r.b,e,v,!0)
t=u==null
if(t&&s.dx)return B.b_n
if(t){if(!s.b&&!v.c.t(0,e)){++s.f
return new A.ey(!0,v.b+": fastened. Careful: "+C.w(w.r.$2(e,v))+" It will burn or trip the breaker when the power comes on.",!0,"")}return new A.ey(!0,v.b+": wire fastened.",!1,"")}if(D.a.a0(u,"SHOCK"))return s.a2t()
if(D.a.a0(u,"STOP"))return s.a2I();++s.f
return new A.ey(!1,u,!1,"")},
bkr(d,e){var w,v=this,u=v.at.h(0,d)
if(u==null)return B.WB
v.NG()
w=u.b
if(w.a&&w.c===0){if(v.b)return v.a2t()
return v.a2I()}w=w.b
w.bs(w,new A.ctb(e))
return B.b_U},
aIZ(d){var w,v,u=this,t=u.at.h(0,d)
if(t==null)return B.acc
w=A.t7(t.a)
v=t.b
if(!A.aih(w,v))return u.fM("Every wire must be fastened first.")
if(u.ax&&!u.ay){if(u.b)return u.a2t()
return u.a2I()}v.c=1
return B.b_F},
aou(d){var w,v=this,u=v.at.h(0,d)
if(u==null)return B.WB
if(v.ax&&!v.ay){if(v.b)return v.a2t()
return v.a2I()}w=u.b
w.c=0
w.d=!1
return B.b_L},
aFf(d){var w=this.at.h(0,d)
if(w==null||w.b.c!==1)return this.fM("Push the device into the box first.")
w.b.c=2
return B.b_O},
cZe(){var w,v,u,t,s,r,q,p,o,n=C.a([],x.fJ),m=this.d
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
if(r==null||r.a!==q){n.push(new A.abb(o,A.fS9(p),B.di8,!0))
continue}s=A.fS9(p)
q=r.b
n.push(new A.abb(o,s,A.h9G(p,q),q.y))}return n},
cZf(){var w,v,u,t,s,r=C.aX(x.N),q=this.d
q===$&&C.c()
w=q.length
v=0
for(;v<q.length;q.length===w||(0,C.L)(q),++v)r.M(0,q[v].b)
q=C.a([],x.J)
for(r=C.en(r,r.r,r.$ti.c),w=r.$ti.c;r.C();){u=r.d
u=B.aHq.h(0,u==null?w.a(u):u)
if(u==null)u=B.aAB
t=C.T(u)
s=new C.jd(u,0,2,t.k("jd<1>"))
s.od(u,0,2,t.c)
D.d.v(q,s)}return q},
apA(d){var w=this.at
return A.La(A.t7(w.h(0,d).a),w.h(0,d).b)},
aJG(){var w=this
if(w.ay){w.ax=w.ay=!1
w.NG()
return B.b_D}w.ax=!w.ax
w.NG()
if(!w.ax)return B.b_v
return w.c8P()},
c8P(){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=C.a([],x.s),i=k.db
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
k.NG()
l=s?"BANG! Sparks, smoke and flames. ":"Snap! "
i=k.dx?"The breaker tripped.":l+" The breaker tripped. "+D.d.aG(j," ")+" Fix it, then flip the breaker OFF and ON again."
return new A.ey(!1,i,!0,s?"burn":"trip")}if(r)return new A.ey(!1,k.dx?"Power is on.":"Power is on, and something is wrong. "+D.d.aG(j," "),!0,"arc")
if(j.length!==0)return new A.ey(!0,"Power is on. "+D.d.aG(j," "),!0,"")
return B.b_I},
aGh(d){var w,v,u,t,s,r,q=this,p=q.at,o=p.h(0,d)
if(o==null||!D.d.t(B.jF,o.a)||o.b.c<2)return B.b_T
w=q.ch
if(w.t(0,d))w.W(0,d)
else w.M(0,d)
v=q.d
v===$&&C.c()
u=C.T(v).k("Z<1>")
t=C.C(new C.Z(v,new A.ct2(d),u),u.k("M.E"))
if(t.length===0)return B.b_E
s=D.d.gI(t)
v=s.a
r=q.anu(v)
if(w.t(0,d)&&r){p=p.h(0,v)
if(p!=null)p.c=!0
return new A.ey(!0,(s.b==="fan"?"The fan spins":"The light turns on")+". The switch works.",!1,"")}if(w.t(0,d)){p=s.b
return new A.ey(!1,(p==="fan"?"The fan":"The light")+" did not come on. Check the breaker and the wires on the switch and on the "+p+".",!1,"")}return B.b_S},
a4L(d){var w,v=this.at.h(0,d)
if(v!=null){w=v.b
w=w.c<2||w.x}else w=!0
if(w)return!1
return this.apA(d).c},
anu(d){var w=this,v=w.cWa(d),u=v==null,t=u?null:v.c,s=!0
if(!u)if(t!=null)u=!(w.ax&&!w.ay)||!w.a4L(d)||!w.a4L(t)
else u=s
else u=s
if(u)return!1
return w.ch.t(0,t)},
biV(d,e){var w,v,u,t,s=this,r="Nothing happens.",q=s.at.h(0,d)
if(q==null||!D.d.t(B.lj,q.a)||q.b.c<2)return s.fM("There is no finished outlet there to plug into.")
w=s.CW
if(w.aj(0,d))return s.fM("Something is already plugged in.")
v=B.dAV.h(0,e)
if(v!=null&&!v.t(0,q.a)){w=A.aPX(e)
if(e==="washerM")u="the washer outlet (5-20)."
else u=e==="dryerM"?"a dryer outlet (14-30 or 10-30).":"a range outlet (14-50 or 10-50)."
return s.fM("The plug does not fit. "+w+" has a big plug made for its own outlet: "+u)}w.n(0,d,e)
w=q.b
if(w.x)return B.b_y
t=s.apA(d)
if(s.ax&&!s.ay&&s.a4L(d)){q.c=!0
if(t.a!=="ok"){w=s.dx
u=w?A.aPX(e)+" runs.":A.aPX(e)+" runs, but this outlet is NOT safe. "+t.b
return new A.ey(!0,u,!w,"")}return new A.ey(!0,A.aPX(e)+" runs. The outlet works.",!1,"")}if(!(s.ax&&!s.ay))return B.b_C
u=t.r
if(u!=="none"){s.db.n(0,d,u)
w.Q=u
w=s.dx?r:A.aPX(e)+" does not run. "+t.b
return new A.ey(!1,w,!0,u==="fire"?"burn":"arc")}return new A.ey(!1,s.dx?r:"Nothing happens. "+t.b,!0,"")},
bku(d){if(this.CW.W(0,d)==null)return B.WB
return B.b_u},
biF(d){var w,v=this
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
if(u==null||!A.h5t(v.b,u.a)||u.b.c<2)return!1
return t.apA(w).a==="ok"},
gbkU(){var w,v,u,t,s,r,q,p,o,n=this.d
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
if(q!==p)if(!(D.d.t(B.lj,q)&&D.d.t(B.lj,p)))if(!(D.d.t(B.jF,q)&&D.d.t(B.jF,p)))if(q==="light"||q==="fan")q=p==="light"||p==="fan"
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
if(q!==p)if(!(D.d.t(B.lj,q)&&D.d.t(B.lj,p)))if(!(D.d.t(B.jF,q)&&D.d.t(B.jF,p)))if(q==="light"||q==="fan")q=p==="light"||p==="fan"
else q=!1
else q=o
else q=o
else q=o
q=!q||r.b.c<2}else q=!0
if(q)return!1
if(A.La(A.t7(v.h(0,s).a),v.h(0,s).b).a!=="ok")return!1
s=t.b
if(D.d.t(B.lj,s)){if(!r.c)return!1}else if(!D.d.t(B.jF,s)&&!r.c)return!1}return!0}}
A.hM.prototype={}
A.Ok.prototype={
R(){var w,v=new A.xi(-0.12,0.14,130,B.ab1,$.ax())
v.f=300
v.ay=0.7
v.as=0.05
w=new C.ye()
$.yY()
w.h7(0)
return new A.aFn(v,w,C.U(x.S,x.i))}}
A.aFn.prototype={
gCY(d){var w=this.e
if(w===$){this.a.toString
w=D.o.F(Date.now(),1e5)
this.e=w}return w},
Z(){var w,v,u=this
u.a2()
w=u.a.f
if(w==null)w=A.csV(null,null,!0,u.gCY(0),!0)
u.d=w
v=u.a
if(v.d)w.dx=!0
if(v.f!=null&&w.gt6())u.y=2
if(u.a.r){u.d.aml()
u.y=2}u.r=A.wW(u.d,new A.rP(u.z,u.as,!1))
w=u.f
w.ax=0
w.ay=1.1},
q(){var w=this.db
if(w!=null)w.a4(0)
this.a1()},
om(d,e){var w,v,u,t=this,s=t.db
if(s!=null)s.a4(0)
t.m(new A.evX(t,d,e))
s=t.c
if(s!=null){w=x.w
s=C.aG(s,null,w).w
v=t.c
v.toString
u=s.a.a>C.aG(v,null,w).w.a.b}else u=!1
t.db=C.cG(C.dy(0,0,0,0,0,u?6:10),new A.evY(t))},
aeA(d){return this.om(d,!1)},
ib(d){var w,v,u,t,s,r,q,p,o=this,n=d.a
if(n)A.uk()
else A.fQ(180,220,0.25,"square")
w=d.d
if(w==="shock"){C.fM()
o.m(new A.ev2(o))
C.bP(D.m5,new A.ev3(o),x.P)}v=w==="burn"
if(v||w==="trip"||w==="arc"){u=o.d
u===$&&C.c()
u=u.db
u=new C.hF(u,u.r,u.e)
t=o.x
s=o.w
while(u.C()){r=u.d
q=s.gig()
p=o.d.db.h(0,r)==="fire"?7:4.5
t.n(0,r,q/1000+p)}C.fM()
w=w==="arc"
u=w?95:150
t=w?500:300
A.fQ(u,t,0.5,w?"saw":"noise")
if(v){o.m(new A.ev4(o))
C.bP(D.eR,new A.ev5(o),x.P)}}w=o.d
w===$&&C.c()
o.r=A.wW(w,new A.rP(o.z,o.as,!1))
n=n&&!d.c
o.om(d.b,n)
if(o.d.w&&o.c!=null)$.aV.x1$.push(new A.ev6(o))
if(o.d.gaFx()&&!o.cy){o.cy=!0
$.aV.x1$.push(new A.ev7(o))}},
b55(){var w=this.CW,v=w?B.h0X:B.ab1,u=w?205:130,t=w?3.141592653589793:-0.12
w=w?0.4:0.14
this.f.hU(u,w,v,t)},
c8S(d,e){var w,v,u,t,s
if(this.as>=0)return
w=this.f
v=w.d_d(d,e)
if(v==null||Math.abs(v.a)>78||Math.abs(v.b)>52)v=w.bfz(d,e,-47)
if(v==null)return
u=D.k.E(v.a,-70,70)
t=D.k.E(v.b,-46,48)
s=D.k.E(v.c,-6,100)
w.xm(Math.max(34,w.c*0.45),new A.q(u,t,s))
A.fQ(560,50,0.25,"tri")},
aUv(){var w,v,u=this
u.CW=!1
w=u.f
w.as=0.05
w.ay=0.7
w.ra(!1)
w.ax=0
u.m(new A.evh(u))
v=u.d
v===$&&C.c()
u.r=A.wW(v,new A.rP(u.z,u.as,!1))
w.hU(130,0.14,B.ab1,-0.12)},
c3q(){var w,v,u=this
u.CW=!1
w=u.f
w.ra(!1)
w.as=-0.95
w.ax=0
w.ay=1
u.m(new A.evj(u))
v=u.d
v===$&&C.c()
u.r=A.wW(v,new A.rP(u.z,u.as,!1))
w.hU(82,-0.55,B.h0s,-0.12)},
bEv(){var w,v,u,t,s=this,r=s.d
r===$&&C.c()
r=r.CW
w=C.a7(r).k("cD<1,2>")
v=w.k("Z<M.E>")
u=C.C(new C.Z(new C.cD(r,w),new A.ev8(),v),v.k("M.E"))
if(u.length===0){s.aeA("Plug a TV into an outlet first. Then you can look behind it.")
return}t=A.j4(D.d.gI(u).a).d.a
s.CW=!1
r=s.f
r.ra(!1)
r.as=0.02
r.ax=0
r.ay=1.7
s.m(new A.ev9(s))
s.r=A.wW(s.d,new A.rP(s.z,s.as,!1))
w=t<0?-1.4:1.4
r.hU(60,0.12,new A.q(t,-30,14),w)
s.om("This is the back of the TV. Tap the TV or its plug to pull the plug.",!0)},
bEt(){var w,v,u=this
u.CW=!0
w=u.f
w.ra(!0)
u.m(new A.eva(u))
v=u.d
v===$&&C.c()
u.r=A.wW(v,new A.rP(u.z,u.as,!1))
w.hU(190,0.3,B.h0Y,3.141592653589793)},
a_6(d,e){var w,v,u,t,s=this,r=A.j4(e),q=s.f
q.ra(!1)
q.ax=0
s.m(new A.evA(s,e))
w=s.d
w===$&&C.c()
s.r=A.wW(w,new A.rP(s.z,s.as,!1))
v=A.aia(r,B.fZU)
w=r.c
u=w?20:15
t=w?1.2:0.3
q.hU(u,w?-0.12:0.26,v,t)},
PW(){var w,v=this
v.m(new A.evi(v))
w=v.d
w===$&&C.c()
v.r=A.wW(w,new A.rP(v.z,v.as,!1))
v.b55()},
c8V(d){var w,v,u,t,s,r,q=this
if(d===0){if(q.as<0)q.m(new A.evT(q))
return}w=q.as
if(w>=0)v=!(d>=5000&&d<5700)
else v=!1
if(v)return
if(d>=5000&&d<5700){v=d-5000
u=D.o.ao(v,100)
if(w!==u){if(q.z==="tester")q.aCr(u)
else{q.m(new A.evU(q))
q.a_6(0,u)}return}q.azp(u,D.o.F(v,100))
return}if(d>=1000&&d<1010)if(q.z==="drill"){w=q.d
w===$&&C.c()
q.ib(w.cOv(d-1000))
return}if(d>=2000&&d<2007){q.azs(d-2000)
return}if(d>=3000&&d<3007){q.b2Q(d-3000)
return}if(d>=6000&&d<6005){if(q.z==="sheet"){w=q.d
w===$&&C.c()
q.ib(w.cRj(B.a5o[d-6000]))}return}if(d>=6100&&d<6103){t=B.oC[d-6100]
if(q.z==="paint"){w=q.d
w===$&&C.c()
q.ib(w.cWp(t))
return}}if(d>=6200&&d<6202){s=d-6200
switch(q.z){case"tape":w=q.d
w===$&&C.c()
q.ib(w.cZd(s))
return
case"mud":w=q.d
w===$&&C.c()
q.ib(w.cU5(s))
return
case"sand":w=q.d
w===$&&C.c()
q.ib(w.boq(s))
return}}if(d>=7000&&d<7100){if(q.z==="screw"){w=q.d
w===$&&C.c()
v=d-7000
q.ib(w.boE(D.o.ao(v,10),D.o.F(v,10)))}return}if(d>=7500&&d<7600){if(q.z==="screw"){w=q.d
w===$&&C.c()
v=d-7500
q.ib(w.aLn(D.o.ao(v,10),D.o.F(v,10),!0))}return}if(d===8000){w=q.d
w===$&&C.c()
q.ib(w.aJG())
return}if(d>=8200&&d<8207){w=q.d
w===$&&C.c()
q.ib(w.bku(d-8200))
return}if(d>=8100&&d<8107){w=q.d
w===$&&C.c()
w=w.CW.h(0,d-8100)
q.om(A.aPX(w==null?"":w)+" is plugged in. To pull the plug, go behind it (the Behind the TV button) and tap the plug on the wall.",!0)
return}if(q.z==="look"){w=q.r
w===$&&C.c()
r=w.b.h(0,d)
if(r!=null){q.m(new A.evV(q,d))
q.om(r.a+": "+r.b,!0)}}},
azs(d){var w,v,u,t,s=this,r=s.d
r===$&&C.c()
if(r.at.aj(0,d)){r=s.z
r=r!=="tester"&&r!=="look"&&!D.d.t(B.zs,r)}else r=!1
if(r){s.m(new A.evQ(s))
s.a_6(0,d)
return}r=s.z
switch(r){case"wall":case"ceiling":case"fanbox":w=s.d
s.ib(w.cU2(d,r==="fanbox"?"fan":r))
return
case"cable":s.ib(s.d.cXf(d))
return
case"knife":s.ib(s.d.cNp(d))
return
case"outlet":case"gfci":case"switch":case"split":case"v240four":case"v240three":case"v240only":case"isolated":case"dryer4":case"dryer3":case"range4":case"range3":case"washer":case"switch2p":case"switch3":case"switch4":case"switchsmart":case"switchcombo":case"light":case"fan":v=s.d.bgR(d,r)
s.ib(v)
if(v.a){r=s.d.at.h(0,d).b
w=s.d
r.f=!w.b&&!w.dx
s.z=""
s.a_6(0,d)}return
case"tester":s.aCr(d)
return}if(s.d.at.aj(0,d)){s.a_6(0,d)
return}if(s.d.gt6()&&s.d.x.aj(0,d)&&!s.d.at.aj(0,d)){u=A.j4(d)
s.m(new A.evR(s,d))
if(s.Q===d){if(u.c)r="a light or a fan"
else r=u.e==="switch"?"a switch":"an outlet"
r=u.b+": only what fits this box is in the tray now ("+r+"). Pick one."}else r="Box let go: the tray shows everything again."
s.om(r,!0)
return}r=s.r
r===$&&C.c()
t=r.b.h(0,2000+d)
if(t!=null){s.m(new A.evS(s,d))
s.om(t.a+": "+t.b,!0)}},
aCr(d){var w,v=this.d
v===$&&C.c()
w=v.ax&&!v.ay&&v.x.aj(0,d)&&this.d.z.t(0,d)
v=w?"The tester glows: this box is LIVE (120 volts). Turn the breaker OFF before you touch any wire.":"The tester stays dark: no power here. It is safe to work. (Test again after you turn the breaker off, every time.)"
this.om(v,!w)
A.fQ(w?1400:500,120,0.25,"tri")},
b2Q(d){var w,v=this,u=v.d
u===$&&C.c()
w=u.at.h(0,d)
if(w==null)return
if(D.d.t(B.zs,v.z)){v.ib(v.d.biV(d,v.z))
return}u=v.z
if(u==="tester"){v.aCr(d)
return}if(u==="flip"){if(D.d.t(B.jF,w.a)&&w.b.c>=2)v.ib(v.d.aGh(d))
else v.aeA("Only a finished switch can be flipped.")
return}v.m(new A.evP(v))
v.a_6(0,d)},
azp(d,e){var w,v,u,t,s,r,q,p,o=this,n=o.d
n===$&&C.c()
w=n.at.h(0,d)
if(w==null)return
if(B.aRg.t(0,e))return
n=w.a
v=A.t7(n)
u=v.f
t=C.T(u).k("Z<1>")
s=C.C(new C.Z(u,new A.evH(e),t),t.k("M.E"))
r=A.hAf(n,e)
n=r!=null
if(n){u=w.b
u=u.b.is(0,r)&&u.c===0}else u=!1
if(u){o.ib(o.d.bkr(d,r))
return}u=!1
if(s.length!==0){t=w.b
if(t.c===0){t=t.b
if(t.h(0,e)!=null)u=o.ax.length===0||t.h(0,e)===o.ax}}if(u){n=o.d
u=w.b.b.h(0,e)
u.toString
o.ib(n.bkr(d,u))
o.m(new A.evI(o))
return}if(n){n=w.b
n=n.c===0&&!n.b.is(0,r)&&D.d.b3(v.e,new A.evJ(r))}else n=!1
if(n){o.m(new A.evK(o,r,d,e))
if(o.ax.length!==0)o.om(D.d.fY(v.e,new A.evL(r)).b+": picked up. Now tap where it joins.",!0)
return}if(s.length!==0&&w.b.c===0){n=o.ax
if(n.length===0){o.aeA("Pick a wire below first, then tap "+D.d.gI(s).b+".")
o.m(new A.evM(o,d,e))
return}q=o.d.bfc(d,n,e)
o.ib(q)
if(q.a)o.m(new A.evN(o))
return}n=o.r
n===$&&C.c()
p=n.b.h(0,5000+d*100+e)
if(p!=null){o.m(new A.evO(o,d,e))
o.om(p.a+": "+p.b,!0)}},
c8W(){var w,v,u,t,s,r,q=this,p=C.a([],x.ek)
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
break A}u=D.d.t(B.lj,r)||D.d.t(B.jF,q.z)
if(u){u=!v.c&&q.d.x.aj(0,t)&&!s
break A}if("light"===r||"fan"===r){u=v.c&&q.d.x.aj(0,t)&&!s
break A}u=D.d.t(B.zs,q.z)
if(u){u=s&&D.d.t(B.lj,q.d.at.h(0,t).a)
break A}if("tester"===r){u=q.d.x.aj(0,t)
break A}u=!1
break A}if(u)p.push(new C.z(t,v.b))}return p},
cyY(){var w,v,u,t,s,r,q,p=null,o=this.c8W()
if(o.length===0)return D.bJ
w=C.a([],x.p)
for(v=o.length,u=0;u<o.length;o.length===v||(0,C.L)(o),++u){t={}
s=o[u]
t.a=null
t.a=s.a
r=new C.aP(12,12)
q=new C.ay(D.b_,1,D.r,-1)
w.push(C.aA(p,C.p(p,new C.y("\ud83d\udccd "+s.b,p,D.oN,p,p,p,p,p,p,p,p,p),D.f,p,p,new C.o(D.eP.j(0.35),p,new C.bH(q,q,q,q),new C.bh(r,r,r,r),p,p,D.n),p,p,p,p,B.a_e,p,p,p),D.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new A.ew0(t,this),p,p,p,p,p,p,!1,D.a3))}return new C.D(D.i4,C.bY(D.bG,w,D.br,p,6,6),p)},
bQZ(){var w=null,v=this.c
v.toString
C.ck(w,w,!1,w,new A.evg(this),v,w,!0,!0,x.H)},
c8Q(){var w,v,u,t=this,s=null
if(t.a.c){w=t.d
w===$&&C.c()
v=w.d
v===$&&C.c()
v=v.length
u=A.hfg(w.f,w.r,v)}else u=0
if(u>0)A.ak0(u)
w=t.c
w.toString
C.ck(s,s,!0,s,new A.evd(t,u),w,s,!0,!0,x.H)},
axW(d){this.m(new A.evk(this,d))
this.aUv()},
b_s(){return this.axW(!1)},
cE7(d){var w,v,u=new A.ew1(A.j4(d)),t=C.a([],x.b)
for(w=0;w<30;++w){v=B.azV[w]
if(u.$1(v.a))t.push(v)}return t},
SJ(d,e,f,g){var w=null,v=f==null,u=v?D.dr:g.j(0.9),t=C.m(14),s=C.X(d,v?D.bU:D.w,w,w,w,17)
return new C.D(G.og,C.aA(w,C.p(w,C.B(C.a([s,D.eg,C.d(e,w,1,w,w,w,w,C.l(w,w,v?D.bU:D.w,w,w,w,w,w,w,w,w,10.5,w,w,D.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),D.m,w,D.e,D.P,0,w,w),D.f,w,w,new C.o(u,w,w,t,w,w,D.n),w,44,w,w,D.kk,w,w,w),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,!1,D.a3),w)},
bbh(d,e,f){return this.SJ(d,e,f,D.aA)},
cH3(d,e){var w,v,u,t,s,r,q,p=this,o=null,n=x.p,m=C.a([p.SJ(D.km,"Back to the room",p.gb_r(),D.ac)],n),l=d.b
if(l.c===0){w=A.aih(e,l)?"Push into the box":"Fasten every wire"
m.push(p.bbh(B.a2w,w,A.aih(e,l)?new A.ew3(p):o))}if(l.c===1)D.d.v(m,C.a([p.SJ(D.pi,"Pull it out",new A.ew4(p),D.ac),p.bbh(W.us,"Cover on",new A.ew5(p))],n))
n=l.c>=2
if(n&&l.x)m.push(p.SJ(B.OE,"Take out the burnt one",new A.ew6(p),D.c0))
else if(n)m.push(p.SJ(B.OE,"Pull it out of the wall",new A.ew7(p),D.ac))
if(!l.x)m.push(p.SJ(D.jE,"Take it out, put in another",new A.ew8(p,d),D.aJ))
if(l.c===0)for(n=D.d.gaf(e.e),l=new C.f2(n,new A.ew9(d));l.C();){w=n.gS(0)
v=w.c
u=new C.aP(14,14)
t=p.ax===w.a
s=t?D.b_:D.aX
r=new C.ay(s,t?3:1,D.r,-1)
s=w.b
q=w.d
m.push(new C.D(G.og,C.aA(o,C.p(o,new C.cf(D.A,o,o,new C.y(s,o,new C.F(!0,q,o,o,o,o,12,D.u,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),o,o,o,o,o,o,o,o,o),o),D.f,o,o,new C.o(v,o,new C.bH(r,r,r,r),new C.bh(u,u,u,u),o,o,D.n),o,44,o,o,D.eY,o,o,o),D.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new A.ewa(p,w),o,o,o,o,o,o,!1,D.a3),o))}return m},
cud(d,e){var w,v,u,t,s,r,q=null,p=C.a([],x.p)
for(w=D.d.gaf(e.f),v=new C.f2(w,new A.evZ(d));v.C();){u=w.gS(0)
t=D.eP.j(0.35)
s=new C.aP(10,10)
r=new C.ay(D.b_,1,D.r,-1)
p.push(new C.D(D.fu,C.aA(q,C.p(q,new C.cf(D.A,q,q,new C.y("\u279c "+u.b,q,B.frX,q,q,q,q,q,q,q,q,q),q),D.f,q,q,new C.o(t,q,new C.bH(r,r,r,r),new C.bh(s,s,s,s),q,q,D.n),q,32,q,q,B.am1,q,q,q),D.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new A.ew_(this,u),q,q,q,q,q,q,!1,D.a3),q))}return p},
c8T(){var w,v,u,t,s,r,q,p,o,n=this,m=n.d
m===$&&C.c()
if(m.w)return"The job is over."
switch(n.y){case 0:m=m.d
m===$&&C.c()
w=C.T(m).k("Z<1>")
v=C.C(new C.Z(m,new A.evl(n),w),w.k("M.E"))
if(v.length!==0){u=D.d.gI(v)
t=A.j4(u.a)
m=A.a2l(u.b)
if(t.c)w=t.e==="fan"?"fan box":"ceiling box"
else w="wall box"
return"Mount a box at "+t.b+" ("+m.toLowerCase()+" goes here): pick a "+w+", then tap the glowing spot."}m=n.d.d
m===$&&C.c()
w=C.T(m).k("Z<1>")
s=C.C(new C.Z(m,new A.evm(n),w),w.k("M.E"))
if(s.length!==0){t=D.d.gI(s).a
m=n.d.aM8(t)
r=new C.Z(m,new A.evn(n),C.T(m).k("Z<1>")).gL(0)
return r>0?"The cable comes from the panel on the right. Pick the drill and tap each stud on the way to "+A.j4(t).b+" ("+r+" left).":"Pick the cable roll and tap "+A.j4(t).b+"."}return"Rough-in done! Open 2 Drywall."
case 1:if(!m.gap0())return"Finish the rough-in first (tab 1). Drywall hides the wires."
if(!n.d.gaDL())return"Pick a drywall sheet and tap a stud edge to hang it. Three sheets cover the wall."
if(!n.d.gaDK())return"Pick the drywall saw and tap each box to cut its opening."
if(!D.d.d0(B.oC,n.d.gaqr()))return"Pick the screw gun and put a screw in every glowing spot on the studs."
if(D.d.b3(n.d.as,new A.evq()))return"Pick the tape and tap each seam between two sheets."
if(D.d.b3(n.d.as,new A.evr()))return D.d.b3(n.d.as,new A.evs())?'The mud is wet. Press "Let it dry", then the next coat.':"Pick the mud and tap each seam. It needs three coats, with drying in between."
if(D.d.b3(n.d.as,new A.evt()))return D.d.b3(n.d.as,new A.evu())?'Press "Let it dry", then sand.':"Pick the sander and tap each seam."
if(!n.d.gt6())return"Pick the roller and paint each sheet."
return"Drywall done! Open 3 Devices."
default:if(!m.gt6())return"Finish the drywall first (tab 2)."
m=n.d.d
m===$&&C.c()
w=C.T(m).k("Z<1>")
q=C.C(new C.Z(m,new A.evv(n),w),w.k("M.E"))
if(q.length!==0){u=D.d.gI(q)
return"The breaker being on is not the end: the job is done only when every device is in and wired. Tap the box at "+A.j4(u.a).b+" (small red frame, blinking red dot): the tray then shows only what fits it. Put in the "+A.a2l(u.b).toLowerCase()+". ("+C.w(new A.evy().$1(new C.N(q,new A.evw(),C.T(q).k("N<1,G>"))))+" still need a device.)"}m=n.d.d
m===$&&C.c()
w=C.T(m).k("Z<1>")
p=C.C(new C.Z(m,new A.evx(n),w),w.k("M.E"))
if(p.length!==0)return"Tap "+A.j4(D.d.gI(p).a).b+" to work on it: breaker OFF, wires, push in, cover on."
m=n.d
if(!m.ax)return"Turn the breaker ON (tap the panel or the breaker button) and test."
m=m.d
m===$&&C.c()
w=C.T(m).k("Z<1>")
o=C.C(new C.Z(m,new A.evo(n),w),w.k("M.E"))
if(o.length!==0)return"Pick the TV or the lamp and plug it into "+A.j4(D.d.gI(o).a).b+" to test it."
m=n.d.d
m===$&&C.c()
return"Flip the wall switch to test the "+(D.d.b3(m,new A.evp())?"fan":"light")+"."}},
B(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this,a3=null,a4=a2.Q,a5=a4>=0&&a2.y===2?a2.cE7(a4):B.d4G[a2.y]
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
h=h?"Breaker ON":"Breaker OFF"}l.push(C.aA(a3,C.p(a3,C.d(h,a3,a3,a3,a3,a3,a3,B.foC,a3,a3,a3),D.f,a3,a3,new C.o(j,a3,f,i,a3,a3,D.n),a3,a3,a3,a3,D.rD,a3,a3,a3),D.y,!1,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,new A.ewm(a2),a3,a3,a3,a3,a3,a3,!1,D.a3))
l=C.a([C.B(l,D.m,a3,D.e,D.P,0,a3,a3)],m)
j=a2.CW
i=j?"In front":"Behind the wall"
h=j?H.aow:H.aov
j=C.a([A.wX(i,D.bq,h,j,j?a2.gbSw():a2.gbEs()),D.am,A.wX("Look up",D.b_,B.bP0,!1,a2.gc3p()),D.am,A.wX("Behind the TV",D.cL,A_.a2o,!1,a2.gbEu()),D.am],m)
if(!a4){i=u.b
D.d.v(j,C.a([A.wX("Labels",D.aJ,O.Cr,i.f,new A.ewn(a2,u)),D.am,A.wX("Hints",D.aA,D.qx,i.e,new A.ewo(a2,u)),D.Q],m))}r=A.Ya(!1,a3,a2.f,new A.ewz(a2),a3,o,q,n,a3,a3,p,a3,a2.gc8R(),new A.ewB(a2),a2.gc8U(),r,!1,a3,l,j)
q=C.a([],m)
if(a4){a4=C.a([],m)
if(!w){p=C.a([],m)
for(k=0;k<3;++k){o=k<2?6:0
n=a2.y===k?D.aA.j(0.2):D.dr
l=new C.aP(12,12)
e=new C.ay(a2.y===k?D.aA:D.bz,1,D.r,-1)
if(k===0)j=a2.d.gap0()
else{j=a2.d
j=k===1?j.gt6():j.gaFx()}j=j?"\u2705 ":""
i=B.aBA[k]
h=a2.y===k?D.aA:D.ac
p.push(new C.by(1,D.ba,C.aA(a3,C.p(a3,new C.cf(D.A,a3,a3,new C.y(j+i,a3,new C.F(!0,h,a3,a3,a3,a3,12,D.u,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3),a3,a3,a3,a3,a3,a3,a3,a3,a3),a3),D.f,a3,a3,new C.o(n,a3,new C.bH(e,e,e,e),new C.bh(l,l,l,l),a3,a3,D.n),a3,a3,a3,new C.P(0,0,o,0),A7.Np,a3,a3,a3),D.y,!1,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,new A.ewC(a2,k),a3,a3,a3,a3,a3,a3,!1,D.a3),a3))}p=C.a([C.B(p,D.m,a3,D.e,D.i,0,a3,a3),D.am],m)
if(!a2.d.b){o=D.aJ.j(0.1)
n=C.m(10)
l=C.J(D.aJ.j(0.4),D.r,1)
p.push(C.p(a3,C.d("\ud83d\udc49 "+a2.c8T(),a3,2,D.a1,a3,a3,a3,B.fqc,a3,a3,a3),D.f,a3,a3,new C.o(o,a3,l,n,a3,a3,D.n),a3,a3,a3,a3,D.ck,a3,a3,1/0))}else p.push(B.fQY)
p.push(D.am)
D.d.v(a4,p)
w=!1}p=C.a([],m)
if(w){o=D.aA.j(0.2)
n=C.m(14)
l=C.J(D.aA,D.r,1)
j=a2.y
if(j===0)j=a2.d.gap0()
else{i=a2.d
j=j===1?i.gt6():i.gaFx()}j=j?"\u2705 ":""
p.push(new C.D(G.og,C.aA(a3,C.p(a3,C.as(C.d(j+B.aBA[a2.y],a3,a3,a3,a3,a3,a3,B.fuX,a3,a3,a3),a3,a3,a3),D.f,a3,a3,new C.o(o,a3,l,n,a3,a3,D.n),a3,a3,a3,a3,D.eY,a3,a3,a3),D.y,!1,B.hhI,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,new A.ewD(a2),a3,a3,a3,a3,a3,a3,!1,D.a3),a3))}if(a2.y<2&&!a2.d.gt6())p.push(new C.D(G.og,C.aA(a3,C.p(a3,B.baq,D.f,a3,a3,new C.o(D.dF,a3,a3,C.m(14),a3,a3,D.n),a3,a3,a3,a3,D.eY,a3,a3,a3),D.y,!1,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,new A.ewE(a2),a3,a3,a3,a3,a3,a3,!1,D.a3),a3))
if(a2.Q>=0&&a2.y===2){o=D.b_.j(0.18)
n=C.m(14)
l=C.J(D.b_,D.r,1)
p.push(new C.D(G.og,C.aA(a3,C.p(a3,C.as(C.d("\u2715 "+A.j4(a2.Q).b,a3,a3,a3,a3,a3,a3,B.fif,a3,a3,a3),a3,a3,a3),D.f,a3,a3,new C.o(o,a3,l,n,a3,a3,D.n),a3,a3,a3,a3,D.eY,a3,a3,a3),D.y,!1,B.hhY,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,new A.ewF(a2),a3,a3,a3,a3,a3,a3,!1,D.a3),a3))}for(o=a5.length,d=0;d<a5.length;a5.length===o||(0,C.L)(a5),++d){a0=a5[d]
n=a0.a
l=a2.z===n?D.aA.j(0.25):D.c.j(0.07)
j=new C.aP(14,14)
n=a2.z===n
i=n?D.aA:D.aX
e=new C.ay(i,n?2:1,D.r,-1)
i=n?D.aA:D.ac
i=C.X(a0.c,i,a3,a3,a3,19)
n=n?D.aA:D.c
p.push(new C.D(G.og,C.aA(a3,C.p(a3,new C.ca(D.aM,D.e,D.i,D.m,a3,D.p,a3,0,C.a([i,D.bm,new C.y(a0.b,a3,new C.F(!0,n,a3,a3,a3,a3,12.5,D.H,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3),a3,a3,a3,a3,a3,a3,a3,a3,a3)],m),a3),D.f,a3,a3,new C.o(l,a3,new C.bH(e,e,e,e),new C.bh(j,j,j,j),a3,a3,D.n),a3,a3,a3,a3,D.eY,a3,a3,a3),D.y,!1,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,new A.ewG(a2,a0),a3,a3,a3,a3,a3,a3,!1,D.a3),a3))}if(a2.y===1)p.push(new C.D(G.og,C.aA(a3,C.p(a3,B.bai,D.f,a3,a3,new C.o(D.dY,a3,a3,C.m(14),a3,a3,D.n),a3,a3,a3,a3,D.eY,a3,a3,a3),D.y,!1,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,new A.ewH(a2),a3,a3,a3,a3,a3,a3,!1,D.a3),a3))
a4.push(new C.a4(a3,52,C.cl(p,a3,B.hhJ,a3,a3,a3,D.aM,!1),a3))
if(a2.z.length!==0)a4.push(a2.cyY())
D.d.v(q,a4)}else if(w){t.toString
a4=C.a([new C.a4(a3,44,C.cl(a2.cH3(u,t),a3,a3,a3,a3,a3,D.aM,!1),B.hii)],m)
if(u.b.c===0&&a2.ax.length!==0)D.d.v(a4,C.a([D.am,new C.a4(a3,32,C.cl(a2.cud(u,t),a3,a3,a3,a3,a3,D.aM,!1),B.hhL)],m))
D.d.v(q,a4)}else{a4=C.a([],m)
p=u.b
if(p.c===0)for(o=D.d.gaf(t.e),n=new C.f2(o,new A.ewp(u)),l=p.b;n.C();){j=o.gS(0)
i=j.c
h=new C.aP(14,14)
g=a2.ax
f=j.a
g=g===f
a1=g?D.b_:D.aX
e=new C.ay(a1,g?3:1,D.r,-1)
a1=C.a([],m)
if(l.is(0,f))a1.push(new C.D(D.Nn,C.X(D.e6,j.d,a3,a3,a3,17),a3))
g=j.b
f=j.d
a1.push(new C.y(g,a3,new C.F(!0,f,a3,a3,a3,a3,12.5,D.u,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3),a3,a3,a3,a3,a3,a3,a3,a3,a3))
a4.push(C.aA(a3,C.p(a3,new C.ca(D.aM,D.e,D.P,D.m,a3,D.p,a3,0,a1,a3),D.f,a3,a3,new C.o(i,a3,new C.bH(e,e,e,e),new C.bh(h,h,h,h),a3,a3,D.n),a3,a3,a3,a3,D.yo,a3,a3,a3),D.y,!1,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,new A.ewq(a2,u,j),a3,a3,a3,a3,a3,a3,!1,D.a3))}a4=C.a([C.bY(D.bG,a4,D.br,a3,6,8)],m)
if(p.c===0&&a2.ax.length!==0){o=C.a([],m)
for(n=D.d.gaf(t.f),l=new C.f2(n,new A.ewr(u));l.C();){j=n.gS(0)
i=D.eP.j(0.35)
h=new C.aP(12,12)
e=new C.ay(D.b_,1,D.r,-1)
o.push(C.aA(a3,C.p(a3,new C.y("\u279c "+j.b,a3,D.oN,a3,a3,a3,a3,a3,a3,a3,a3,a3),D.f,a3,a3,new C.o(i,a3,new C.bH(e,e,e,e),new C.bh(h,h,h,h),a3,a3,D.n),a3,a3,a3,a3,B.a_e,a3,a3,a3),D.y,!1,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,new A.ews(a2,j),a3,a3,a3,a3,a3,a3,!1,D.a3))}a4.push(new C.D(D.jy,C.bY(D.bG,o,D.br,a3,6,6),a3))}a4.push(D.Q)
o=C.a([A.uj("Back to the room",D.km,a2.gb_r(),D.ac),D.ad],m)
if(p.c===0){t.toString
n=A.aih(t,p)?"Push it into the box":"Fasten every wire"
o.push(A.uj(n,B.a2w,A.aih(t,p)?new A.ewt(a2):a3,D.aA))}if(p.c===1)D.d.v(o,C.a([A.uj("Pull it out",D.pi,new A.ewu(a2),D.ac),D.ad,A.uj("Cover on",W.us,new A.ewv(a2),D.aA)],m))
n=p.c>=2
if(n&&p.x)o.push(A.uj("Take out the burnt one",B.OE,new A.eww(a2),D.c0))
else if(n)o.push(A.uj("Pull it out of the wall",B.OE,new A.ewx(a2),D.ac))
a4.push(C.B(o,D.m,a3,D.e,D.i,0,a3,a3))
if(!p.x)D.d.v(a4,C.a([D.Q,C.B(C.a([A.uj("Take it out and put in a different "+(D.d.t(B.jF,u.a)?"switch":"one"),D.jE,new A.ewy(a2,u),D.aJ)],m),D.m,a3,D.e,D.i,0,a3,a3)],m))
D.d.v(q,a4)}a4=C.a([A.U2(D.aA,new A.ewA(a2,a6),C.x(q,D.m,a3,D.e,D.P,0,D.p),r,"Phase "+(v+1)+"/3",s+" job",a3)],m)
if(a2.cx)a4.push(C.bS(0,C.dZ(C.p(a3,a3,D.f,B.aiE,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3),!0,a3),0,0,0))
return new C.an(D.a_,a3,D.ab,D.t,a4,a3)},
csy(d){var w=this.d
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
break A}this.om(w,!0)},
chF(d){return C.bV(E.mC,null,new A.evG(this,d),d,!0,!0,!0,D.k5,!1,!1,x.H)}}
A.rP.prototype={}
A.rn.prototype={
a6(){return"FaultKind."+this.b}}
A.uF.prototype={}
A.Mw.prototype={}
A.cwk.prototype={
bAt(d,e,f){var w,v,u,t,s,r,q,p=this,o=new C.e4()
o.cY(p.a)
w=C.C(B.dfp,x.eP)
D.d.e_(w,o)
v=C.aX(x.S)
u=C.a([],x.gw)
for(t=w.length,s=0;s<w.length;w.length===t||(0,C.L)(w),++s){r=w[s]
q=B.wK.h(0,r).e
if(v.t(0,q))continue
v.M(0,q)
u.push(new A.Mw(r,o.ap(3)))
if(u.length>=d)break}p.c!==$&&C.aQ()
p.c=u
p.axX()},
q1(d,e){var w=this.c
w===$&&C.c()
return D.d.b3(w,new A.cwp(e))},
axX(){var w,v,u,t,s=this,r=s.d,q=r.d
q.aa(0)
if(s.q1(0,B.a0C))q.M(0,72)
if(s.q1(0,B.a0D))q.M(0,75)
q=s.q1(0,B.O1)
r.b=q
r.c=!q
r.w=s.q1(0,B.O2)
r.x=s.q1(0,B.a0H)
r.y=s.q1(0,B.a0I)
r.z=s.q1(0,B.a0G)
r.Q=s.q1(0,B.a0J)
r.as=s.q1(0,B.a0K)
r.at=s.q1(0,B.a0F)
q=r.f
q.aa(0)
r=r.r
r.aa(0)
w=s.c
w===$&&C.c()
w=D.d.gaf(w)
v=new C.f2(w,new A.cwl())
while(v.C()){u=w.gS(0)
t=u.c
u=u.b
if(t)r.M(0,u)
else q.M(0,u)}},
gcI7(){var w=this.c
w===$&&C.c()
return D.d.d0(w,new A.cwn())},
gcPG(){var w=this.c
w===$&&C.c()
return new C.Z(w,new A.cwo(),C.T(w).k("Z<1>")).gL(0)},
cPk(d){var w,v,u,t,s,r,q,p=this.c
p===$&&C.c()
w=p.length
v=d===86
u=d===92
t=0
for(;t<p.length;p.length===w||(0,C.L)(p),++t){s=p[t]
r=s.a
q=!0
if(B.wK.h(0,r).e!==d)if(!(r===B.O1&&v))r=r===B.O2&&u
else r=q
else r=q
if(r)return s}return null},
b_t(d){++this.f
return new A.ey(!1,d,!1,"")},
c8X(){var w,v,u,t,s=this;++s.r;--s.e
for(w=s.d,v=w.d,w=w.e,u=0;u<4;++u){t=B.axY[u]
if(!v.t(0,t))w.M(0,t)}w=s.e
if(w<=0){s.w=!0
return B.b_r}v=w===1?"life":"lives"
return new A.ey(!1,"ZAP! You touched a live wire and got a shock. All the breakers were knocked off. "+w+" "+v+" left. Turn the breaker OFF first.",!0,"shock")},
d_2(d,e){var w,v,u,t,s=this
if(s.w)return B.b_m
if(D.d.t(B.axY,e))return s.bEZ(d,e)
w=s.cPk(e)
if(d==="inspect"){if(w==null||w.c)return B.b_q
return new A.ey(!0,"You look and test: "+B.wK.h(0,w.a).b,!1,"")}if(w==null||w.c)return new A.ey(!1,s.b?"Nothing needs fixing there.":"There is nothing wrong with this, so the "+C.w(B.Ss.h(0,d))+' is not needed. Use "Look and test" on things to find the problem.',!1,"")
v=B.wK.h(0,w.a)
if(d!==v.c){++s.f
return new A.ey(!1,s.b?"That is not the right tool for this problem.":"The "+C.w(B.Ss.h(0,d))+" does not fix this. "+v.b,!1,"")}u=v.f
if(u!==0){t=s.d
u=!t.d.t(0,u)&&!t.e.t(0,u)}else u=!1
if(u){if(s.b)return s.c8X()
return s.b_t("STOP! "+v.r+" The wires here are live (120 volts). Tap the breaker in the panel (with your hand) to switch it off.")}w.c=!0
s.axX()
return new A.ey(!0,v.d,!1,"")},
bEZ(d,e){var w,v,u,t,s=this
if(d==="inspect"){w=s.d
if(w.d.t(0,e))w="This breaker has tripped: it sits in the middle (orange)."
else w=w.e.t(0,e)?"This breaker is switched OFF.":"This breaker is ON."
return new A.ey(!0,w,!1,"")}if(d!=="hand")return s.b_t(s.b?"Use your hand on a breaker.":"A breaker is switched with your hand, not with a "+C.w(B.Ss.h(0,d))+".")
w=s.d
v=w.d
if(v.t(0,e)){w=s.c
w===$&&C.c()
u=C.T(w).k("Z<1>")
t=C.C(new C.Z(w,new A.cwm(e),u),u.k("M.E"))
if(t.length!==0){D.d.gI(t).c=!0
s.axX()
return new A.ey(!0,B.wK.h(0,D.d.gI(t).a).d,!1,"")}v.W(0,e)
return B.b_W}w=w.e
if(w.t(0,e)){w.W(0,e)
return B.b_Q}w.M(0,e)
return B.b_G}}
A.as3.prototype={
R(){var w,v=new A.xi(-0.3,0.48,46,B.VE,$.ax())
v.f=80
w=new C.ye()
$.yY()
w.h7(0)
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
w=A.hnk(!0,w)
v.d=w
v.r=A.agN(w.d)},
q(){var w=this.ax
if(w!=null)w.a4(0)
this.a1()},
c91(d,e){var w=this,v=w.ax
if(v!=null)v.a4(0)
w.m(new A.ey3(w,d,e))
w.ax=C.cG(D.jR,new A.ey4(w))},
b_u(){this.f.hU(46,0.48,B.VE,-0.3)
this.m(new A.exT(this))},
c90(d){var w,v,u=this
if(d===0)return
w=u.d
w===$&&C.c()
v=w.d_2(u.x,d)
w=v.a
if(w)A.uk()
else A.fQ(180,220,0.25,"square")
if(v.d==="shock"){C.fM()
u.m(new A.exY(u))
C.bP(D.m5,new A.exZ(u),x.P)}u.m(new A.ey_(u,d))
w=w&&!v.c
u.c91(v.b,w)
w=u.d
if(w.w)$.aV.x1$.push(new A.ey0(u))
else if(w.gcI7()&&!u.at){u.at=!0
$.aV.x1$.push(new A.ey1(u))}},
chN(){var w=null,v=this.c
v.toString
C.ck(w,w,!1,w,new A.exW(this),v,w,!0,!0,x.H)},
c8Y(){var w,v,u=null,t=this.d
t===$&&C.c()
w=t.c
w===$&&C.c()
w=w.length
v=A.hfg(t.f,t.r,w)
A.ak0(v)
w=this.c
w.toString
C.ck(u,u,!0,u,new A.exS(this,v),w,u,!0,!0,x.H)},
axj(){this.m(new A.exU(this))
this.b_u()},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.d
g===$&&C.c()
g=g.gcPG()
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
v=A.Ya(!1,h,i.f,new A.eyb(i),h,s,u,r,h,new A.eyc(),t,h,h,i.gc8Z(),i.gc9_(),v,!1,h,C.a([C.B(p,D.m,h,D.e,D.P,0,h,h)],q),h)
u=i.d.c
u===$&&C.c()
t=C.T(u)
t=new C.cO(new C.Z(u,new A.eyd(),t.k("Z<1>")),new A.eye(),t.k("cO<1,n>")).aG(0,"  \xb7  ")
u=C.d("Customer: "+(t.length===0?"All fixed!":t),h,2,D.a1,h,h,h,B.aTJ,h,h,h)
t=C.a([],q)
for(n=0;n<10;++n){m=B.dv6[n]
s=i.x===m?D.aA.j(0.25):D.c.j(0.07)
r=new C.aP(14,14)
p=i.x===m
l=p?D.aA:D.aX
k=new C.ay(l,p?2:1,D.r,-1)
l=B.dAU.h(0,m)
p=C.X(l,i.x===m?D.aA:D.ac,h,h,h,19)
l=B.Ss.h(0,m)
l.toString
j=i.x===m?D.aA:D.c
t.push(new C.D(G.og,C.aA(h,C.p(h,new C.ca(D.aM,D.e,D.i,D.m,h,D.p,h,0,C.a([p,D.bm,new C.y(l,h,new C.F(!0,j,h,h,h,h,12.5,D.H,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h),h,h,h,h,h,h,h,h,h)],q),h),D.f,h,h,new C.o(s,h,new C.bH(k,k,k,k),new C.bh(r,r,r,r),h,h,D.n),h,h,h,h,D.eY,h,h,h),D.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new A.eyf(i,m),h,h,h,h,h,h,!1,D.a3),h))}g=C.a([A.U2(D.aJ,new A.eyg(i,d),C.x(C.a([new C.bM(D.a5,h,h,u,h),D.Q,new C.a4(h,52,C.cl(t,h,h,h,h,h,D.aM,!1),h)],q),D.m,h,D.e,D.P,0,D.p),v,""+g+"/"+w+" fixed","Service call",h)],q)
if(i.as)g.push(C.bS(0,C.dZ(C.p(h,h,D.f,B.aiE,h,h,h,h,h,h,h,h,h,h),!0,h),0,0,0))
return new C.an(D.a_,h,D.ab,D.t,g,h)},
cCA(d){return C.bV(E.mC,null,new A.ey9(this),d,!0,!0,!0,D.k5,!1,!1,x.H)},
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
giT(d){return this.x}}
A.tO.prototype={}
A.aa3.prototype={}
A.ia.prototype={
aGX(d,e,f){var w=this
return d>w.a-f&&d<w.b+f&&e>w.c-f&&e<w.d+f}}
A.csU.prototype={
c92(d){return-this.a.geb(0)/2+d*4},
a5l(d,e){var w,v,u=this.a
if(d<-u.geb(0)/2+6||d>u.geb(0)/2-6||e<6||e>u.gh_(0)-6)return!1
for(u=this.b,w=u.length,v=0;v<w;++v)if(u[v].aGX(d,e,9))return!1
return!0},
b_w(d,e,f){var w,v,u=e.a,t=f.a-u,s=e.b,r=f.b-s,q=Math.max(1,D.k.dd(Math.sqrt(Math.pow(t,2)+Math.pow(r,2))/2))
for(w=0;w<=q;++w){v=w/q
if(!this.a5l(u+t*v,s+r*v))return!1}return!0},
aZ5(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=a0.a,f=h.a,e=D.k.V((g+f.geb(0)/2)/4),d=h.c
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
if(!h.a5l(-f.geb(0)/2+k,j))continue
i=Math.pow(-f.geb(0)/2+k-g,2)+Math.pow(j-e,2)
if(i<o){p=new C.z(n,l)
o=i}}if(p!=null)return p}return null},
ap1(b9,c0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5=this,b6=1e9,b7=b5.aZ5(b9),b8=b5.aZ5(c0)
if(b7==null||b8==null)return C.a([b9,c0],x.f)
w=b8.a
v=b5.c92(w)
u=b8.b
t=new C.z(v,u*4)
if(b5.b_w(0,b9,t))return C.a([b9,t],x.f)
v=b7.a
s=b5.d
s===$&&C.c()
r=b7.b
q=x.S
p=C.eD([v*s+r],q)
o=C.U(q,q)
n=x.i
m=C.H([v*s+r,0],q,n)
l=C.H([v*s+r,b5.bUE(v,r,b8)],q,n)
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
b0=a5>=b0||a9>=s||!b5.a5l(-v.geb(0)/2+a6,a9*4)}if(b0)continue
b0=!1
if(a4)if(a8!==0)b0=!b5.a5l(-v.geb(0)/2+a6,n)||!b5.a5l(-v.geb(0)/2+e,a9*4)
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
for(;;){if(!(a9>w&&!b5.b_w(0,u[a5],u[a9])))break;--a9}b4.push(u[a9])}return b4},
bUE(d,e,f){return Math.sqrt(Math.pow(d-f.a,2)+Math.pow(e-f.b,2))}}
A.Az.prototype={}
A.bsr.prototype={
bAJ(d,e,f,g,h,i,j,k,l,m,n,o){var w,v,u,t,s=this.b
if(s!=null)for(w=this.as,v=1;v<s.length;++v){u=v-1
t=Math.sqrt(Math.pow(s[v].a-s[u].a,2)+Math.pow(s[v].b-s[u].b,2))
w.push(t)
this.at+=t}}}
A.aWD.prototype={
avc(d){var w,v,u=d.geb(0),t=new A.bVq(d,u)
switch(d.c){case"living":w=t.$1(46)
return C.a([B.hlM,new A.Az(w.a,w.b,4,"Switching the ad on the big TV",!1,!0,!0,"ad")],x.h)
case"kitchen":return C.a([new A.Az(new C.z(-u/2+40,42),3.141592653589793,2.8,"Getting a drink from the fridge",!0,!1,!1,""),B.hlL],x.h)
case"bathroom":return B.drM
case"bedroom":v=t.$1(44)
return C.a([new A.Az(v.a,v.b,3.4,"Switching the ad on the TV",!1,!0,!0,"ad")],x.h)
case"hall":if(!this.a)return B.aAE
return C.a([new A.Az(new C.z(-d.geb(0)/2+80,90),3.141592653589793,3,"Looking at the left video wall",!1,!1,!0,""),new A.Az(B.evF,0,2.4,"Looking over the lounge and the logo carpet",!1,!1,!1,""),new A.Az(new C.z(d.geb(0)/2-80,90),3.141592653589793,3,"Looking at the right video wall",!1,!1,!0,"")],x.h)
default:return B.aAE}},
acU(a0,a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=e.b.d
d===$&&C.c()
w=d[a0]
v=new A.csU(w,A.ikb(w))
v.c=D.k.dd(w.geb(0)/4)+1
v.d=D.k.dd(w.gh_(0)/4)+1
u=A.hrm(w,a1)
t=u.a
s=u.c
d=e.d
r=d.length
q=a3.length===0?"Walking in":a3
d.push(A.bss(a0,"",!1,q,-1,null,!1,!1,0.5,t.a,u.b,t.b))
for(q=e.avc(w),p=q.length,o=t,n=0;n<q.length;q.length===p||(0,C.L)(q),++n){m=q[n]
l=v.ap1(o,m.a)
k=m.e
if(k)j=C.cU(m.d,"Having",0)
else j=!1
d.push(A.bss(a0,"",j,"Walking",-1,l,!1,!1,0,0,0,0))
o=D.d.gak(l)
d.push(A.bss(a0,m.w,k,m.d,-1,null,m.r,m.f,m.c,o.a,m.b,o.b))}if(a2!=null){i=A.hrm(w,a2)
h=i.c
l=v.ap1(o,i.a)
g=e.avc(w).length!==0&&D.d.gak(e.avc(w)).e
d.push(A.bss(a0,"",g,"Walking to the next room",-1,l,!1,!1,0,0,0,0))
o=D.d.gak(l)
d.push(A.bss(a0,"",g,"Opening the door",h,null,!1,!1,1.8,o.a,e.bO9(w,h),o.b))}for(f=r;f<d.length;++f)d[f].ay=s},
aXS(d,e,f){return this.acU(d,e,f,"")},
bO9(d,e){var w,v=d.w[e].b
A:{if("left"===v){w=-1.5707963267948966
break A}if("right"===v){w=1.5707963267948966
break A}w=3.141592653589793
break A}return w},
b_v(){var w,v,u=this
if(u.a){u.acU(5,10,9,"Walking into the hall")
u.b_x()
return}u.acU(10,11,9,"Coming in through the front door")
u.aXS(9,10,5)
u.acU(5,9,0,"Walking down the hall")
for(w=0;w<8;++w){v=B.cZB[w]
u.aXS(v,5,w===7?null:5)}u.b_x()},
b_x(){var w,v,u,t,s,r,q,p,o=this,n=o.c,m=Math.min(1,n/120)
for(w=o.d,v=w.length,u=0,t=0,s=0;s<v;++s){r=w[s]
if(r.b==null)u+=r.f*=m
else t+=r.at}q=t/Math.max(4,n-u)
for(n=q<=0,p=0,s=0;s<v;++s){r=w[s]
if(r.b!=null)r.f=n?0.1:Math.max(0.05,r.at/q)
r.ax=p
p+=r.f}o.e!==$&&C.aQ()
o.e=p},
bch(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g={},f=this.e
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
return A.atV(!1,n,f.ay,p,f.w,0,f.r,o,0,!1,s,f.x,v,!1,!1,f.c,f.e,f.d)}v=new A.bVr(g)
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
MD(d){var w=this.a
if(w!=null)this.ax=A.hz6(w,this.CW)},
aJP(){var w,v,u,t,s,r,q=this
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
for(w=s.ax,v=w.length,u=s.ay,t=0;t<v;++t)if(w[t].aGX(d,e,u))return!0
return!1},
aM5(d,e,f,g){var w,v,u,t,s,r,q,p,o=this,n=Math.sqrt(e*e+f*f)
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
cPj(d){var w,v=this,u=v.Q
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
return t.x=!1}u=t.aM5(0,w,v,e)
if(!u){t.at=null
t.x=!1}return u}}
A.akv.prototype={}
A.aq9.prototype={
R(){var w=x.N
return new A.bex(C.U(w,w),null,null)}}
A.bex.prototype={
gaaU(){var w,v=this,u=v.Q
if(u===$){w=C.bm(null,D.m5,null,1,null,v)
v.Q!==$&&C.bF()
v.Q=w
u=w}return u},
q(){this.gaaU().q()
this.bw6()},
c9z(d){return this.m(new A.d7G(this,d))},
cBF(d){return this.m(new A.d7H(this,d))},
cBQ(d){var w=this,v=w.w
if(v==null){w.m(new A.d7I(w))
return}w.m(new A.d7J(w,v,d))
w.gaaU().iv(0,0)
C.eY()},
b_J(d,e,f,g){var w,v=null,u=e?D.aA.j(0.2):D.c.j(0.05),t=C.m(14),s=e?D.aA:D.bz
s=C.J(s,D.r,e?2:1)
w=C.X(f,e?D.aA:D.aC,v,v,v,17)
return C.E(C.aA(v,C.cY(v,C.B(C.a([w,D.bm,new C.dr(1,D.cn,C.d(d,v,v,v,v,v,v,C.l(v,v,e?D.aA:D.ac,v,v,v,v,v,v,v,v,12.5,v,v,D.H,v,v,!0,v,v,v,v,v,v,v,v),D.K,v,v),v)],x.p),D.m,v,D.b9,D.i,0,v,v),v,v,D.b5,new C.o(u,v,s,t,v,v,D.n),D.eH,v,v,v,v,D.rC,v,v,v),D.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,g,v,v,v,v,v,v,!1,D.a3),1)},
c26(d){var w,v=null,u=A.hsz(d),t=this.w===d,s=this.f.h(0,d),r=u.iQ()>0.5?D.av:D.c,q=t?D.b_:D.aX
q=C.J(q,D.r,t?3:1)
w=C.a([],x.V)
if(t)w.push(new C.ac(0,D.G,D.b_.j(0.5),D.I,14))
return C.aA(v,C.cY(v,C.B(C.a([C.X(s!=null?D.e6:A.i37(d),r,v,v,v,20),Ae.Ec,C.E(C.d(d,v,2,D.a1,v,v,v,C.l(v,v,r,v,v,v,v,v,v,v,v,12.5,v,v,D.u,v,1.15,!0,v,v,v,v,v,v,v,v),v,v,v),1)],x.p),D.m,v,D.e,D.i,0,v,v),v,v,D.b5,new C.o(u,v,q,B.b2b,w,v,D.n),D.h4,v,58,v,D.ct,B.byI,v,v,v),D.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new A.d7C(this,d),v,v,v,v,v,v,!1,D.a3)},
chT(d){var w,v,u,t,s,r=this,q=null,p=A.i4Y(d),o=C.a([],x.s)
for(w=r.f,w=new C.cD(w,C.a7(w).k("cD<1,2>")).gaf(0);w.C();){v=w.d
if(v.b===d)o.push(v.a)}w=r.w==null
if(!w)u=D.b_.j(0.7)
else u=o.length!==0?p:D.bz
u=C.J(u,D.r,!w||o.length!==0?2:1)
t=C.a([D.c.j(0.9),p],x.O)
s=C.J(D.hx,D.r,1)
t=C.a([C.p(q,C.as(C.p(q,q,D.f,D.aS,q,q,q,2.5,q,q,q,q,q,10),q,q,q),D.f,q,q,new C.o(q,q,s,q,q,new C.c_(D.A,0.5,D.x,q,0,t,q,q),D.a6),q,22,q,q,q,q,q,22),D.ad,C.E(C.d(d,q,3,D.a1,q,q,q,B.fpe,q,q,q),1)],x.p)
if(o.length!==0)t.push(C.aA(q,B.enO,D.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new A.d7E(r,o),q,q,q,q,q,q,!1,D.a3))
return C.aA(q,C.cY(q,C.B(t,D.m,q,D.e,D.i,0,q,q),q,q,D.b5,new C.o(B.bkB,q,u,B.b2u,q,q,D.n),D.h4,q,58,q,D.ct,B.bAu,q,q,q),D.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new A.d7F(r,d),q,q,q,q,q,q,!1,D.a3)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=B.qD[i.d].e,f=Math.max(g.gL(g),5),e=i.f.a
g=x.p
w=C.eI(C.a([C.aH(h,h,h,h,B.bSv,h,h,h,new A.d7O(d),h,h,h,h,"Wire guide",h)],g),h,h,!0,!0,E.y0,h,1,h,h,h,!1,h,!1,h,h,h,h,!0,h,h,h,h,h,B.fRQ,h,h,h,1,h,!0)
v=C.a([],g)
for(u=x.O,t=0;t<2;++t){s=C.a([],g)
if(t>0)s.push(D.as)
r=i.d===t?B.doE:C.a([D.c.j(0.06),D.c.j(0.03)],u)
q=new C.aP(18,18)
p=new C.ay(i.d===t?D.o_:D.bz,1,D.r,-1)
o=B.qD[t]
n=o.a==="threeway"?"\ud83d\udd00":"\ud83c\udf00"
o=D.d.gI(o.b.split(" ("))
m=i.d===t?D.c:D.ac
s.push(new C.by(1,D.ba,C.aA(h,C.cY(h,new C.ca(D.aM,D.e,D.i,D.m,h,D.p,h,0,C.a([new C.y(n,h,D.n2,h,h,h,h,h,h,h,h,h),D.ad,new C.by(1,D.ba,new C.y(o,h,new C.F(!0,m,h,h,h,h,13,D.u,h,h,h,h,1.15,h,h,h,h,h,h,h,h,h,h,h,h,h),h,h,h,h,D.a1,h,3,h,h),h)],g),h),h,h,D.b5,new C.o(h,h,new C.bH(p,p,p,p),new C.bh(q,q,q,q),h,new C.a9(D.a5,D.a8,D.x,r,h,h),D.n),D.a2,h,h,h,h,D.bg,h,h,h),D.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new A.d7P(i,t),h,h,h,h,h,h,!1,D.a3),h))
D.d.v(v,s)}v=C.B(v,D.m,h,D.e,D.i,0,h,h)
u=C.B(C.a([i.b_J("Practice (instant feedback)",!i.e,D.ok,new A.d7Q(i)),D.as,i.b_J("Test (marked on submit)",i.e,D.qv,new A.d7R(i))],g),D.m,h,D.e,D.i,0,h,h)
s=D.c.j(0.05)
r=C.m(18)
q=C.J(D.bz,D.r,1)
o=B.qD[i.d]
n=C.d(o.b,h,h,h,h,h,h,L.aai,h,h,h)
m=C.d(o.c,h,h,h,h,h,h,B.ftG,h,h,h)
o=o.e
o=C.bx(C.m(6),C.kj(D.bz,h,h,8,h,e/o.gL(o),B.b0D),D.ap)
l=B.qD[i.d].e
r=C.a([new C.a4(h,78,v,h),D.ae,u,D.aB,C.p(h,C.x(C.a([n,D.am,m,D.W,o,D.au,C.d(""+e+" of "+l.gL(l)+" wires connected",h,h,h,h,h,h,B.fis,h,h,h)],g),D.E,h,D.e,D.i,0,D.p),D.f,h,h,new C.o(s,h,q,r,h,h,D.n),h,h,h,h,D.bD,h,h,h),D.aB,B.f3D,D.am,C.cu(new A.d7S(i,f*66)),D.Q],g)
if(i.y!=null&&!i.e){v=(i.z?D.be:D.c0).j(0.12)
u=C.m(14)
s=C.J((i.z?D.be:D.c0).j(0.6),D.r,1)
q=i.z
o=q?D.e6:B.bNe
o=C.X(o,q?D.be:D.c0,h,h,h,20)
n=i.y
n.toString
r.push(C.cY(h,C.B(C.a([o,D.ad,C.E(C.d(n,h,h,h,h,h,h,C.l(h,h,q?D.ep:D.eO,h,h,h,h,h,h,h,h,12.8,h,h,D.U,h,1.4,!0,h,h,h,h,h,h,h,h),h,h,h),1)],g),D.E,h,D.e,D.i,0,h,h),h,h,D.b5,new C.o(v,h,s,u,h,h,D.n),D.a2,h,h,h,h,D.bg,h,h,h))}r.push(D.ae)
v=C.bo(D.aA,h,h,h,D.w,h,h,h,new C.b8(C.m(16),D.a0),h,h,h)
u=i.e
s=C.X(u?D.qv:D.le,h,h,h,h,h)
r.push(new C.a4(h,52,C.di(s,C.d(u?"Submit the test":"Check my wiring",h,h,h,h,h,h,D.nM,h,h,h),new A.d7T(i),v),h))
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
n=o?"CORRECT: every lead follows the diagram.":A.h5v(q)+": not passed"
if(o)q=D.be
else q=q===B.JH?D.bt:D.c0
q=C.a([C.d(n,h,h,h,h,h,h,C.l(h,h,q,h,h,h,h,h,h,h,h,15,h,h,D.u,h,h,!0,h,h,h,h,h,h,h,h),h,h,h),D.Q],g)
for(o=i.r.b,n=o.length,k=0;k<o.length;o.length===n||(0,C.L)(o),++k){j=o[k]
q.push(new C.y(j.c+"\nRule: "+j.d+"\nFix: "+j.e+"\n",h,B.fnt,h,h,h,h,h,h,h,h,h))}for(o=B.qD[i.d].f,k=0;k<2;++k)q.push(new C.y("\u2022 "+o[k],h,D.Kc,h,h,h,h,h,h,h,h,h))
D.d.v(r,C.a([D.ae,C.p(h,C.x(q,D.E,h,D.e,D.i,0,D.p),D.f,h,h,new C.o(v,h,s,u,h,h,D.n),h,h,h,h,D.bD,h,h,h)],g))}return C.c6(w,E.y0,C.cl(r,h,h,B.bAk,h,h,D.ah,!1),h,!1,!1,h,h)}}
A.bxh.prototype={
a3(b3,b4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8=this,a9=null,b0=new A.fhM(),b1=a8.e,b2=b4.a-b1
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
if(!a5.C())C.b9(C.fr())
a6=a5.gS(0)
a1=a6.a
a1.ie()
a2=a1.e[a6.b].b
a2===$&&C.c()
a2=a2.a.length()
a1=a1.a
a3=new C.aF(a1.a,a1.b,a9,new C.cy([a6,0,a2*m,!0]),C.a([],o))}a7=A.hsz(g)
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
A.FM.prototype={
a6(){return"TerminalRole."+this.b}}
A.FT.prototype={
a6(){return"WireFunction."+this.b}}
A.czk.prototype={}
A.cCV.prototype={}
A.a4l.prototype={}
A.bMK.prototype={}
A.wr.prototype={}
A.tn.prototype={}
A.b6y.prototype={}
A.abb.prototype={}
A.abc.prototype={}
A.vi.prototype={}
A.b5g.prototype={}
A.b8s.prototype={}
A.czm.prototype={
brf(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=C.a([],x.dH)
for(w=this.a,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u){t=w[u]
s=t.b
r=t.c
q=A.hvz(s,r,t.d)
p=new C.Z(r,new A.czn(),C.T(r).k("Z<1>")).gL(0)
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
v.push(k.b===k.a.c?100:0)}j=v.length===0?0:D.k.V(D.d.f4(v,new A.czo())/v.length)
return new A.b8s(i,w,j,D.d.d0(i,new A.czp())&&j>=80)}}
A.PM.prototype={}
A.a1h.prototype={
R(){var w=x.S
return new A.bva(C.U(w,w))}}
A.bva.prototype={
B(d){var w=null,v=this.e,u=C.aG(d,w,x.w).w
return C.bn(!0,new C.cT(new C.aZ(0,1/0,0,u.a.b*0.9),C.cl(v==null?this.coI():this.cs6(v),w,w,D.bQ,w,w,D.ah,!0),w),!0,!1,D.af,!0,!0)},
coI(){var w,v,u,t,s,r,q=this,p=null,o=q.a,n=o.c.b,m=x.p
o=C.a([C.d("Test: "+o.d,p,p,p,p,p,p,D.de,p,p,p),D.au,B.fzu,D.W],m)
for(w=q.d,v=x.cE,u=0;u<n.length;u=t){t=u+1
s=C.a([new C.y(""+t+". "+n[u].a,p,D.nK,p,p,p,p,p,p,p,p,p)],m)
for(r=0;r<3;++r)s.push(new A.a9P(r,w.h(0,u),new A.fbo(q,u),new C.y(n[u].b[r],p,D.Ar,p,p,p,p,p,p,p,p,p),!0,p,v))
s.push(D.au)
D.d.v(o,s)}o.push(D.Q)
o.push(C.bI(B.fDR,p,new A.fbp(q),p))
return o},
cs6(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=d.d,g=h?D.be:D.c0
h=h?"Passed":"Not passed"
w=x.p
h=C.a([C.d(h,i,i,i,i,i,i,C.l(i,i,g,i,i,i,i,i,i,i,i,22,i,i,D.u,i,i,!0,i,i,i,i,i,i,i,i),i,i,i),C.d("Score "+d.c+"%  (pass mark 80%)",i,i,i,i,i,i,D.V3,i,i,i)],w)
v=d.a
if(D.d.b3(v,new A.fbq()))h.push(B.en6)
h.push(D.W)
for(u=v.length,t=0;t<v.length;v.length===u||(0,C.L)(v),++t){s=v[t]
r=s.b
q=r.a
p=A.h9a(q).j(0.1)
o=new C.aP(12,12)
n=new C.ay(A.h9a(q).j(0.6),1,D.r,-1)
m=A.h5v(q)
q=A.h9a(q)
q=C.a([new C.y(s.a+": "+m+" ("+s.c+"%)",i,new C.F(!0,q,i,i,i,i,13.5,D.u,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i),i,i,i,i,i,i,i,i,i)],w)
r=r.b
if(r.length===0)q.push(B.fNH)
for(m=r.length,l=0;l<r.length;r.length===m||(0,C.L)(r),++l){k=r[l]
D.d.v(q,C.a([D.au,new C.y(A.h5v(k.b)+": "+k.c,i,B.fht,i,i,i,i,i,i,i,i,i),new C.y("Rule: "+k.d,i,N.aaj,i,i,i,i,i,i,i,i,i),new C.y("Fix: "+k.e,i,B.fnu,i,i,i,i,i,i,i,i,i)],w))}h.push(C.p(i,C.x(q,D.E,i,D.e,D.i,0,D.p),D.f,i,i,new C.o(p,i,new C.bH(n,n,n,n),new C.bh(o,o,o,o),i,i,D.n),i,i,i,D.ct,D.ym,i,i,i))}for(v=d.b,u=v.length,t=0;t<v.length;v.length===u||(0,C.L)(v),++t){j=v[t]
r=D.c.j(0.05)
q=new C.aP(12,12)
p=j.a
o=p.c
m=j.b===o
n=new C.ay(m?D.be:D.c0,1,D.r,-1)
m=m?"\u2705":"\u274c"
h.push(C.p(i,C.x(C.a([new C.y(m+" "+p.a,i,D.lq,i,i,i,i,i,i,i,i,i),new C.y("Correct answer: "+p.b[o],i,D.tn,i,i,i,i,i,i,i,i,i),new C.y(p.d,i,N.aaj,i,i,i,i,i,i,i,i,i)],w),D.E,i,D.e,D.i,0,D.p),D.f,i,i,new C.o(r,i,new C.bH(n,n,n,n),new C.bh(q,q,q,q),i,i,D.n),i,i,i,D.ct,D.ym,i,i,i))}h.push(D.au)
h.push(C.bI(D.pI,i,new A.fbr(this),i))
return h}}
A.a5i.prototype={
h7(d){var w,v=this
if(v.c)return
v.c=!0
w=$.aV
w.toString
if(D.a.t(C.vz(C.b0(w).a,null),"Test"))v.d=C.dh(v.b,new A.bSX(v))
else v.b_R()},
b_R(){$.eX.Hd(new A.bSW(this))},
bR(d){var w
this.c=!1
w=this.d
if(w!=null)w.a4(0)
this.d=null}}
var z=a.updateTypes(["~()","~(fk)","n(n,fm)","R(nw)","R(mg)","R(a5n)","q(q)","R(iP)","R(l9)","~(G)","ai<kq>(K)","R(XX)","R(fm)","R(a4l)","R(aa3)","R(Mw)","q(K,K)","G(mg,mg)","R(P1)","R(I7)","aB<~>()","R(oq)","R(q)","n(nw)","q(K,K,K)","q(G)","R(nO)","E_(Y)","~(xj,av,K)","~(mg)","~(t,av)","R(Aj)","q(K)","R(M0)","IW(Y)","n(iP)","q(ho)","R(Ff)","G(xn,xn)","R(rd)","R(z7)","Ok(Y)","R(Ms)","R(abc)","q(K,K[K])","R(zc)","R(wr)","PR()","G(G4,G4)","wr(wr,wr)","~(G,q,q,n,u)","~(G,ai<q>)","zc()","nO()","aB<MD?>()","R(w7)","oq(K)","FM(n)","~(G{keepTour:R})","FT(n)","~(q,q,q,q,u,K)","K(lI)","~(q,q,q,q)","v(n,ai<rR>)","n(mg)","v(xn)","q(ai<q>,G)","XL()","~(aD?)","CA()","R(xn)","Wg(Y)","~(kq,G)","~(q,K,K,K,~(xj,av,K){px:K})","ai<fP>(K)","a7b(Y)","~(q,q{note:n?})","mg?(q,q)","R(q,q)","q?(q,q)","K(q)","ai<q>(q,q[G])","+(K,K,K,n,n)(P1,G)","G(G,mg)","K(mg)","ai<kq>()","ai<kq>(ai<kq>)","K(oq)","~(q,q,q,K,K)","a1h(Y)","~(q,q,q,q{poster:G})","~(~(fk),q,q)","~(q,q,K,K,u{joint:R})","+(q,q)(G)","~(q,q,G{alongX:R})","~(ai<q>,u)","~(ai<q>)","~(ai<q>{col:u})","~(G,q,u{h:K,w:K})","mg?(n)","~(G,ai<q>,u,K,n)","~(G,n,q,q,q,R)","R(Xh)","ai<+(q,q)>()","~(mg,K,K,K,K,K{note:n?})","ai<q>(ai<q>)","~(n,ai<q>{r:K})","~(n,q,q)","~(nw,q,n)","~(n,q,q,G)","q(G,G)","R(G)","fP(q,q,q,q,G,K,K)","G(Aj,Aj)","G(l9)","~(G,q,q{col:u,round:R})","cV()","ho(G)","n(Mw)","~(n,JH,n,n,n)","G(FT,FM)","~({done:R})","G(Aj)","~(q,q,q,K,G)","v(rR)"])
A.c0d.prototype={
$1(d){var w=this.a
w=w===0?d:A.vF(d,w)
return w.a7(0,this.b)},
$S:z+6}
A.c0e.prototype={
$1(d){var w=this.a
return w===0?d:A.vF(d,w)},
$S:z+6}
A.c0c.prototype={
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
A.c0f.prototype={
$1(d){var w=d*2*3.141592653589793/this.b
return this.a.aI(0,Math.cos(w)).a7(0,this.c.aI(0,Math.sin(w)))},
$S:z+25}
A.c0b.prototype={
$2(d,e){var w=3.141592653589793*d/this.a,v=6.283185307179586*e/this.b
return new A.q(Math.sin(w)*Math.cos(v),Math.cos(w),Math.sin(w)*Math.sin(v))},
$S:z+110}
A.c0g.prototype={
$1(d){var w=d*2*3.141592653589793/this.b
return this.a.aI(0,Math.cos(w)).a7(0,this.c.aI(0,Math.sin(w)))},
$S:z+25}
A.h_n.prototype={
$1(d){var w=d.b,v=this.a,u=d.c,t=this.b
return new A.q(d.a,w*v-u*t,w*t+u*v)},
$S:z+6}
A.h_l.prototype={
$1(d){var w=this.a
return w===0?d:A.vF(d,w)},
$S:z+6}
A.h_m.prototype={
$1(d){var w=this,v=w.b===0?d:w.c.$1(d)
return J.h0A(w.a.$1(v),w.d)},
$S:z+6}
A.h_k.prototype={
$1(d){var w=this.b===0?d:this.c.$1(d)
return this.a.$1(w)},
$S:z+6}
A.h_9.prototype={
$4(d,e,f,g){var w=-d
return 0.5*(2*e+(w+f)*this.a+(2*d-5*e+4*f-g)*this.b+(w+3*e-3*f+g)*this.c)},
$S:269}
A.bJV.prototype={
$1(d){var w=d.a,v=J.a6(w),u=C.jY(v.h(w,"ngmy_swipe_x3"))
$.ajq=u===!0
w=C.jY(v.h(w,"ngmy_swipe_y3"))
$.ajr=w!==!1},
$S:305}
A.bJW.prototype={
$1(d){},
$S:28}
A.bJX.prototype={
$1(d){d.au("Bool","ngmy_swipe_x3",$.ajq)
d.au("Bool","ngmy_swipe_y3",$.ajr)},
$S:305}
A.bJY.prototype={
$1(d){},
$S:28}
A.bJS.prototype={
$4(d,e,f,g){var w
if(d>0.000001)w=(g-e)/d
else w=d<-0.000001?(f-e)/d:1/0
return w},
$S:269}
A.bK_.prototype={
$1(d){var w=this,v=-d.c,u=d.b,t=w.a,s=w.b,r=v*t-u*s,q=d.a,p=w.c,o=w.d
return new A.q(q*p-r*o,u*t+v*s,q*o+r*p)},
$S:z+6}
A.bJZ.prototype={
$1(d){var w=this,v=w.a
return v.d.a7(0,w.b.$1(new A.q(w.c*d,w.d*d,d-v.c)))},
$S:z+32}
A.bJU.prototype={
$1(d){var w=this,v=-d.c,u=d.b,t=w.a,s=w.b,r=v*t-u*s,q=d.a,p=w.c,o=w.d
return new A.q(q*p-r*o,u*t+v*s,q*o+r*p)},
$S:z+6}
A.bJT.prototype={
$1(d){var w=this,v=w.a
return v.d.a7(0,w.b.$1(new A.q(w.c*d,w.d*d,d-v.c)))},
$S:z+32}
A.ctU.prototype={
$1(d){var w=this,v=d.a,u=w.a,t=d.c,s=w.b,r=-v*s+t*u,q=d.b,p=w.c,o=w.d
return new A.q(v*u+t*s,q*p-r*o,-(q*o+r*p))},
$S:z+6}
A.ctV.prototype={
$1(d){var w=this.a.c,v=this.b.$1(d.aE(0,w.d))
return new A.q(v.a,v.b,v.c+w.c)},
$S:z+6}
A.ctT.prototype={
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
b0=A.i_U(u)
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
if(r!=null)d2.bx(r)
d2=c9.e
if(d2!=null)d2.a.delete()
c9.e=null}c9.D(new C.bt())
d2=d4.f
d3=C.h1h(c6,c7,c8,d2)
s=d4.d
u=s===u&&t
d0=new A.G4(d4.y,d4.z,null,c9,d3,c0-d4.x,s,d2<0.99,u)
d0.e=c1<2&&c2<2
d1.go.push(d0)
d0.c=d5},
$S:z+72}
A.ctN.prototype={
$1(d){return d.c>=1},
$S:z+22}
A.ctO.prototype={
$1(d){var w,v,u,t,s,r,q,p,o=this,n=!o.c||o.d>=o.e[0],m=o.f,l=o.b
if(n)A.i0M(d,m,o.r,l.gGR(0))
else{n=$.hCU()
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
n.n(0,m,new A.cDG(u,r.nj()))
n=o.a
if(t)++n.x
else ++n.w}C.E3(m)
n=w.get(m)
q=n==null?null:n.b
if(q!=null){n=m.d
m=m.e
p=A.h8Q(o.r,n,m)
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
A.ctM.prototype={
$2(d,e){var w=this.a
return A.pB(A.pB(w[0],w[1],d),A.pB(w[3],w[2],d),e)},
$S:z+16}
A.ctP.prototype={
$1(d){return d.c<1},
$S:z+22}
A.ctQ.prototype={
$1(d){return A.i0N(d,this.b,this.c,8,6,this.a.gGR(0))},
$S:710}
A.ctR.prototype={
$2(d,e){return D.k.aL(e,d)},
$S:1775}
A.ctS.prototype={
$2(d,e){var w,v=D.o.aL(d.a,e.a)
if(v!==0)return v
w=D.k.aL(e.d,d.d)
return w!==0?w:D.o.aL(d.c,e.c)},
$S:z+48}
A.f3d.prototype={
$1(d){var w=this.a,v=w.r,u=d.a
w.r=d
w.a.d.a71(D.k.E((u-v.a)/1e6,0,0.1))
w.f.sp(0,u/1e6)},
$S:8}
A.f3c.prototype={
$1(d){if(x.ej.b(d))this.a.a.d.apE(1+d.gtE().b*0.0012)},
$S:244}
A.f3a.prototype={
$1(d){var w=this.a
w.w=1
w.x=d.c},
$S:255}
A.f3b.prototype={
$1(d){var w,v,u,t,s,r=d.w,q=this.a
if(r!==q.x){q.x=r
q.w=d.d}if(r>=2){r=d.d
w=q.w/r
q.w=r
if(isFinite(w)&&w>0)q.a.d.apE(w)}else{r=q.a.d
q=d.a
v=$.ajq?-1:1
v=q.a*0.009*v
u=$.ajr?-1:1
r.db=r.cy=null
v=r.a+=v
if(!r.ch){t=r.ax
s=r.ay
r.a=D.k.E(v,t-s,t+s)}r.b=D.k.E(r.b+-q.b*0.009*u,r.as,r.at)
r.axo()
r.aW()}},
$S:218}
A.f34.prototype={
$1(d){return this.a.y=d.b},
$S:22}
A.f35.prototype={
$0(){var w,v=this.a,u=v.a.as
u.toString
v=v.y
w=this.b.gY(0)
return u.$2(v,w==null?D.aw:w)},
$S:0}
A.f37.prototype={
$1(d){var w=this.a
if(++w.at===1){w.z=d.geZ()
w.Q=d.glo(d)
w.as=!1}else w.as=!0},
$S:68}
A.f38.prototype={
$1(d){var w=this.a,v=w.z
if(v!=null&&d.geZ().aE(0,v).gcC()>14)w.as=!0},
$S:192}
A.f36.prototype={
$1(d){var w=this.a
w.at=Math.max(0,w.at-1)
w.as=!0},
$S:134}
A.f39.prototype={
$1(d){var w,v=this.a,u=v.at
v.at=Math.max(0,u-1)
w=v.z
if(u===1&&!v.as&&w!=null&&D.o.ao(d.glo(d).a-v.Q.a,1000)<450){u=v.a.f
if(u!=null)u.$1(v.e.cWG(d.geZ()))}if(v.at===0)v.z=null},
$S:110}
A.fkG.prototype={
$0(){return new A.PR(!1,C.a([],x.z),C.a([],x.t))},
$S:z+47}
A.bU6.prototype={
$0(){var w=0,v=C.j(x.R),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j
var $async$$0=C.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return C.b($.ra().ji(0,q.a),$async$$0)
case 7:p=e
m=q.b
l=x.N
o=new A.MD(m,C.U(l,x.I),C.U(l,x.bB),C.a([],x.dQ),C.U(l,x.gN))
w=8
return C.b(o.PB(p),$async$$0)
case 8:$.h25.n(0,m,o)
$.h23.W(0,m)
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
$.h23.M(0,m)
u=null
r=[1]
w=5
break
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
$.h24.W(0,q.b)
w=r.pop()
break
case 6:case 1:return C.h(u,v)
case 2:return C.f(s.at(-1),v)}})
return C.i($async$$0,v)},
$S:z+54}
A.bTY.prototype={
$1(d){return D.a.t(d,"hips")},
$S:3}
A.bTS.prototype={
$2(d,e){var w,v=Math.floor(d),u=Math.floor(e),t=this.b,s=t.a,r=Math.min(s-1,D.k.bf((d-v)*s))
v=t.b
w=(Math.min(v-1,D.k.bf((e-u)*v))*s+r)*4
s=this.a
t=t.c
s.c=s.c+t[w]
s.b=s.b+t[w+1]
s.a=s.a+t[w+2]},
$S:199}
A.bTR.prototype={
$1(d){return D.k.V(D.k.E(d,0,1)*255)},
$S:257}
A.bU_.prototype={
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
w[s]=g.c3(0,((k*1024+j)*1024+i)*2+r,new A.bU0(g))}e[0]=g.a
return w},
$S:1777}
A.bU0.prototype={
$0(){return this.a.a},
$S:93}
A.bU1.prototype={
$1(d){var w,v,u,t,s,r,q=C.aX(x.S)
for(w=this.a.e,v=w.length,u=0;u<v;u+=3){t=d[w[u]]
s=d[w[u+1]]
r=d[w[u+2]]
if(t===s||s===r||t===r)continue
q.M(0,A.hgw(t,s,r))}return q.a},
$S:1778}
A.bTZ.prototype={
$2(d,e){var w,v,u,t=this.a,s=this.b.h(0,d)
s.toString
w=J.a6(e)
v=D.k.V(w.h(e,0)/w.h(e,3))
u=D.k.V(w.h(e,1)/w.h(e,3))
w=D.k.V(w.h(e,2)/w.h(e,3))
t.$flags&2&&C.aj(t)
t[s]=(v<<16|u<<8|w|4278190080)>>>0},
$S:1779}
A.bTW.prototype={
$0(){return new Float64Array(this.a*16)},
$S:711}
A.bTX.prototype={
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
else A.hgx(k,n*16,h,0,k,j)
k=u.f
k===$&&C.c()
k=k[a1]
j=k.length
m=0
for(;m<k.length;k.length===j||(0,C.L)(k),++m)l.$1(k[m])},
$S:30}
A.bU4.prototype={
$1(d){var w,v,u
for(w=this.a.z,w=new C.hF(w,w.r,w.e);w.C();){v=w.d
u=v.toLowerCase()
if(C.cU(u,d,0))return v}return null},
$S:338}
A.bU2.prototype={
$1(d){return!D.a.t(d.toLowerCase(),"pose")},
$S:3}
A.bU3.prototype={
$0(){var w=this.a.z
return new C.cx(w,C.a7(w).k("cx<1>")).gI(0)},
$S:23}
A.bU7.prototype={
$1(d){var w=this,v=w.c,u=d*3,t=w.a,s=w.d,r=(v[u]-t.b)*s,q=v[u+1],p=w.b.ay,o=(v[u+2]-t.a)*s
t=w.f
u=w.r
return new A.q(r*t+o*u+w.w,(q-p)*s+w.e,-r*u+o*t+w.x)},
$S:z+25}
A.bTT.prototype={
$3(d,e,f){var w=this,v=w.e
return w.b.a7(0,w.c.aI(0,w.a.a*f+0.25)).a7(0,w.d.aI(0,d*v)).a7(0,w.f.aI(0,e*v))},
$2(d,e){return this.$3(d,e,1)},
$S:z+44}
A.bTV.prototype={
$6(d,e,f,g,h,i){var w=this
return w.a.push(new A.kq(C.a([d,e,f,g],x.o),w.b,h,w.c,0,1,!1,0,i,2,w.d))},
$S:z+60}
A.bTU.prototype={
$6(d,e,f,g,h,i){var w=this.b
return this.a.$6(w.$2(d-f,e),w.$2(d,e-g),w.$2(d+f,e),w.$2(d,e+g),h,i)},
$S:1781}
A.fyr.prototype={
$2(d,e){return D.k.V(d+(D.k.E(e,0,255)-d)*0.8)},
$S:1782}
A.bIe.prototype={
$1(d){return d.d+this.a.f*d.e},
$S:z+61}
A.bId.prototype={
$1(d){return d.a===J.r(this.a,"template")},
$S:z+39}
A.fRi.prototype={
$6$lines$w(d,e,f,g,h,i){var w=null,v=C.fx("\u2026",w,h,w,C.cS(w,w,w,w,w,w,w,w,w,C.l(w,w,f,w,w,w,w,w,w,w,w,e,w,w,i,w,1.1,!0,w,w,w,w,w,w,w,w),d),D.a4,D.bY,w,D.dA,D.bW)
v.o0(g)
return v},
$4(d,e,f,g){return this.$6$lines$w(d,e,f,g,2,D.u)},
$5$w(d,e,f,g,h){return this.$6$lines$w(d,e,f,g,2,h)},
$S:1783}
A.fzQ.prototype={
$1(d){var w=this.a
return A.vF(d,w.c).a7(0,new A.q(w.a,0,w.b))},
$S:z+6}
A.fzR.prototype={
$6$px(d,e,f,g,h,i){var w=new A.fzS(e,d),v=-f/2,u=g/2,t=f/2,s=-g/2
this.a.push(new A.fP(C.a([w.$2(v,u),w.$2(t,u),w.$2(t,s),w.$2(v,s)],x.o),0,h,i,i*g/f,30,this.b,0,!1))},
$5(d,e,f,g,h){return this.$6$px(d,e,f,g,h,260)},
$S:z+73}
A.fzS.prototype={
$2(d,e){return A.vF(new A.q(d,e,0),this.a).a7(0,this.b)},
$S:z+16}
A.fzJ.prototype={
$3(d,e,f){return A.bBZ(d,e,f,0)},
$S:24}
A.fzK.prototype={
$3(d,e,f){return A.bBZ(d,e,f,3)},
$S:24}
A.fzL.prototype={
$3(d,e,f){return A.bBZ(d,e,f,8)},
$S:24}
A.fzM.prototype={
$3(d,e,f){return A.bBZ(d,e,f,9+this.a)},
$S:24}
A.fzN.prototype={
$3(d,e,f){return A.bBZ(d,e,f,12+this.a)},
$S:24}
A.fzO.prototype={
$3(d,e,f){return A.hz9(d,e,f,this.a,this.b)},
$S:24}
A.fzP.prototype={
$3(d,e,f){return A.hz9(d,e,f,this.a,this.b)},
$S:24}
A.flP.prototype={
$4(d,e,f,g){var w=-d,v=this.a
return 0.5*(2*e+(w+f)*v+(2*d-5*e+4*f-g)*v*v+(w+3*e-3*f+g)*v*v*v)},
$S:269}
A.fpd.prototype={
$1(d){var w=this.a,v=J.a6(w)
return v.h(w,D.o.E(d,0,v.gL(w)-1))},
$S:z+93}
A.fyx.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n=A.huR(this.a),m=x.n,l=C.a([],m)
for(w=J.a6(n),v=0;v<w.gL(n)-1;v=u){u=v+1
t=w.h(n,u).a
s=w.h(n,v).a
l.push(Math.pow(Math.max(new A.q(t.a-s.a,t.b-s.b,t.c-s.c).guY(),250),0.75))}r=D.d.f4(l,new A.fyw())
q=C.a([0],m)
for(m=l.length,p=0;p<l.length;l.length===m||(0,C.L)(l),++p){o=l[p]
q.push(D.d.gak(q)+30*o/r)}return q},
$S:1785}
A.fyw.prototype={
$2(d,e){return d+e},
$S:80}
A.fyu.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8=this.a,a9=B.dAa.h(0,a8.a)
if(a9==null){w=C.a([],x.t)
v=a8.w.length
u=v===0
t=0
for(;;){if(!(t<(u?1:v)))break
w.push(t);++t}a9=new C.z(w,0)}s=Math.max(Math.max(a8.gapm(),a8.gbet()),a8.gGP()*1.3)
w=a8.r
r=new A.q(a8.ga4x(0),w+a8.gGP()/2,a8.ga4z())
q=w+a8.gGP()
v=s*0.55
p=C.a([new C.z(new A.q(a8.ga4x(0)+v,q+s*0.5,a8.ga4z()+s*1.15),r)],x.dt)
for(u=a9.a,o=x.o,n=a8.w,m=a8.e,l=a8.f,k=a9.b,v=q+v,j=null,i=0;i<u.length;++i,j=a2){h=n[u[i]]
g=h.e
f=m*g
e=l*g
d=new A.q(h.a,w+h.d+e/2,h.b)
g=h.c
a0=Math.sin(g)
a1=Math.cos(g)
a2=new A.q(a0,0,a1)
a3=new A.fyv(d,a2,f*1.5,new A.q(Math.cos(g),0,-Math.sin(g)),f,e)
a4=D.o.F(k+i,3)
A:{if(0===a4){g=C.a([a3.$3(1.8,0,1.1),a3.$3(1,-0.22,-0.35),a3.$3(0.9,0.3,-0.2)],o)
break A}if(1===a4){g=C.a([a3.$3(0.9,1.5,-0.25),a3.$3(1.05,0,0.05),a3.$3(0.85,-1.3,0.15)],o)
break A}g=C.a([a3.$3(1.3,0.2,-0.45),a3.$3(1.1,0,0.45),a3.$3(1.7,-0.3,1.3)],o)
break A}if(j!=null&&j.a*a0+j.c*a1<0.3){a0=D.d.gak(p).a
a1=D.d.gI(g)
p.push(new C.z(new A.q((a0.a+a1.a)*0.5+j.c*s*0.5,v,(a0.c+a1.c)*0.5-j.a*s*0.5),r))}for(a5=0;a5<3;++a5)p.push(new C.z(g[a5],d))}a6=new A.q(a8.ga4x(0)-s*0.7,q+s*0.6,a8.ga4z()-s)
if(j!=null){a7=D.d.gak(p).a.a7(0,a6).aI(0,0.5)
p.push(new C.z(new A.q(a7.a+j.c*s*0.5,v,a7.c-j.a*s*0.5),r))}p.push(new C.z(a6,r))
return p},
$S:z+103}
A.fyv.prototype={
$3(d,e,f){var w=this
return w.a.a7(0,w.b.aI(0,w.c*d)).a7(0,w.d.aI(0,w.e*e)).a7(0,new A.q(0,w.f*f,0))},
$S:z+24}
A.fzB.prototype={
$1(d){var w=this.b,v=w*d.b,u=d.c,t=this.c
return this.a.a7(0,new A.q(Math.sin(v)*u*t.geh(0)+w*d.e*t.gapm(),d.d*t.gGP(),Math.cos(v)*u*t.geh(0)))},
$S:z+36}
A.fzC.prototype={
$1(d){var w=this.c
return this.a.a7(0,new A.q(this.b*d.f*w.gapm(),d.r*w.gGP(),0))},
$S:z+36}
A.fzD.prototype={
$1(d){var w=this.a
return w[D.o.E(d,0,w.length-1)]},
$S:z+117}
A.c4e.prototype={
$1(d){return d.a===this.a.d.a},
$S:z+39}
A.c4c.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new A.c4b())},
$S:31}
A.c4b.prototype={
$0(){},
$S:0}
A.c4_.prototype={
$0(){var w=this.a
w.f=A.h9v(w.gzy(),w.d)
w.abz()},
$S:0}
A.c45.prototype={
$0(){return this.a.x=this.b},
$S:0}
A.c4d.prototype={
$0(){var w=this.a
w.x=0
w.y=!1
w.z=""},
$S:0}
A.c42.prototype={
$0(){var w=this.a
w.x=-1
w.y=!1
w.z=this.b?"That was the 30 second drone shot. Press it again any time, or change the board and film it again.":""},
$S:0}
A.c41.prototype={
$0(){var w=this.a
return w.f=A.h9v(w.gzy(),w.d)},
$S:0}
A.c3A.prototype={
$0(){},
$S:0}
A.c40.prototype={
$0(){return this.a.z="That picture could not be opened."},
$S:0}
A.c44.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=C.aG(d,k,x.w).w,i=x.p,h=C.a([],i)
for(w=this.a,v=w.d,u=0;u<12;++u){t=B.a3F[u]
s=t.a
r=v.a===s
q=r?D.d7:D.cr
p=new C.aP(16,16)
o=r?F.fA:D.bz
n=new C.ay(o,r?2:1,D.r,-1)
o=C.a([new C.y(t.b,k,D.n2,k,k,k,k,k,k,k,k,k),D.b2],i)
r=t.w.length
m=r===0
if((m?1:r)>1){l=new C.aP(10,10)
o.push(C.p(k,new C.y(""+(m?1:r)+" boards",k,A6.aU0,k,k,k,k,k,k,k,k,k),D.f,k,k,new C.o(D.dY,k,k,new C.bh(l,l,l,l),k,k,D.n),k,k,k,k,D.yz,k,k,k))}if(v.a===s)o.push(B.emV)
h.push(C.aA(k,C.p(k,C.x(C.a([new C.ca(D.aM,D.e,D.i,D.m,k,D.p,k,0,o,k),D.am,new C.y(t.c,k,D.j4,k,k,k,k,D.a1,k,2,k,k),D.cS,new C.by(1,D.ba,new C.y(t.d,k,B.fkH,k,k,k,k,D.UI,k,k,k,k),k)],i),D.E,k,D.e,D.i,0,D.p),D.f,k,k,new C.o(q,k,new C.bH(n,n,n,n),new C.bh(p,p,p,p),k,k,D.n),k,k,k,k,B.byO,k,k,k),D.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new A.c43(w,d,t),k,k,k,k,k,k,!1,D.a3))}return C.bn(!0,new C.D(B.bAd,C.x(C.a([B.fWy,D.au,B.fPt,D.ae,new C.cT(new C.aZ(0,1/0,0,j.a.b*0.66),C.kQ(1.05,h,2,10,10,k,k,!0),k)],i),D.E,k,D.e,D.P,0,D.p),k),!0,!1,D.af,!0,!0)},
$S:27}
A.c43.prototype={
$0(){C.a5(this.b,!1).O(null)
this.a.cvP(this.c.a)},
$S:0}
A.c3Z.prototype={
$0(){var w=this,v=w.b.d.b[w.a.a]
w.c.saY(0,v.b)
w.d.saY(0,v.c)
w.e.saY(0,v.d)},
$S:0}
A.c3Y.prototype={
$1(d){var w=this
return new C.e1(new A.c3V(w.a,w.b,w.c,w.d,w.e,w.f),null)},
$S:21}
A.c3V.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=this,o=null,n=p.b,m=p.a,l=n.d.b[m.a],k=new A.c3W(m,n),j=new A.c3X(e),i=C.aG(d,o,x.w).w,h=x.p,g=C.a([B.fCt,D.au,C.d(l.a?"Now it shows the NGMY logo, words and ads. Change anything and it becomes yours.":"This sign is your own.",o,o,o,o,o,o,I.tk,o,o,o)],h),f=n.gzy().w.length
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
f.push(C.aA(o,C.p(o,new C.y("Sign "+q,o,D.lq,o,o,o,o,o,o,o,o,o),D.f,o,o,new C.o(t,o,new C.bH(r,r,r,r),new C.bh(s,s,s,s),o,o,D.n),o,o,o,o,D.lF,o,o,o),D.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new A.c3F(m,v,w,e),o,o,o,o,o,o,!1,D.a3))
v=q}D.d.v(g,C.a([D.W,B.fWD,D.am,C.bY(D.bG,f,D.br,o,8,8)],h))}g.push(D.ae)
g.push(k.$3("Big words",p.d,new A.c3G(l)))
g.push(k.$3("Smaller words",p.e,new A.c3H(l)))
g.push(k.$3("Bottom line (web address)",p.f,new A.c3I(l)))
f=l.f!=null
w=f?"Your logo is on (change)":"Put your own logo (default: NGMY logo)"
g.push(j.$4(w,f,new A.c3J(m,n),new A.c3K(m,n,l)))
f=l.r!=null
w=f?"Your picture is on (change)":"Put your own picture"
g.push(j.$4(w,f,new A.c3L(m,n),new A.c3M(m,n,l)))
g.push(D.au)
g.push(B.fQB)
g.push(D.am)
f=C.a([],h)
for(w=x.O,v=0;v<6;++v){u=B.a5r[v]
u=C.a([u.b,u.c],w)
t=new C.aP(10,10)
r=new C.ay(l.e===v&&!l.a?F.fA:D.aX,2,D.r,-1)
s=B.a5r[v]
f.push(C.aA(o,C.p(o,new C.cf(D.A,o,o,new C.y(s.a,o,new C.F(!0,s.d,o,o,o,o,11,D.H,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),o,o,o,o,o,o,o,o,o),o),D.f,o,o,new C.o(o,o,new C.bH(r,r,r,r),new C.bh(t,t,t,t),o,new C.a9(D.a5,D.a8,D.x,u,o,o),D.n),o,o,o,o,D.hz,o,o,74),D.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new A.c3N(m,n,l,v,e),o,o,o,o,o,o,!1,D.a3))}g.push(C.bY(D.bG,f,D.br,o,8,8))
g.push(D.aB)
m=n.gzy().w.length
g.push(C.B(C.a([C.E(C.ex(B.bXp,C.d((m===0?1:m)>1?"All signs back to the NGMY default":"Back to the NGMY default",o,o,o,o,o,o,B.fx3,o,o,o),new A.c3O(n,l,p.c,e),o),1),D.as,C.bI(D.x8,o,new A.c3P(d),o)],h),D.m,o,D.e,D.i,0,o,o))
return new C.D(new C.P(16,16,16,i.f.d+16),C.ch(C.x(g,D.E,o,D.e,D.P,0,D.p),D.t,o,D.y,o,o,o,o,D.ah),o)},
$S:102}
A.c3W.prototype={
$3(d,e,f){var w=null
return new C.D(D.d1,C.aM(w,D.Y,!1,w,!0,D.t,w,C.aN(),e,w,w,w,w,w,2,C.br(w,new C.b5(4,C.m(12),D.a0),w,w,w,w,w,w,!0,w,w,w,w,w,w,D.cr,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,D.V2,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w),D.y,!0,w,!0,w,!1,w,D.aj,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,new A.c3Q(this.a,this.b,f),w,w,w,!1,w,w,!1,w,!0,w,D.aa,w,w,w,w,w,w,w,w,w,w,w,D.df,!0,D.a4,w,D.an,w,w,w,w),w)},
$S:1786}
A.c3Q.prototype={
$1(d){this.c.$1(d)
this.b.ZL(this.a.a)},
$S:2}
A.c3X.prototype={
$4(d,e,f,g){var w=null,v=this.a,u=e?D.e6:D.uo
u=C.a([C.E(C.ex(C.X(u,e?D.be:D.ac,w,w,w,w),C.d(d,w,w,w,w,w,w,D.df,w,w,w),new A.c3T(f,v),w),1)],x.p)
if(e)u.push(C.aH(w,w,w,w,D.rP,w,w,w,new A.c3U(g,v),w,w,w,w,w,w))
return new C.D(D.ct,C.B(u,D.m,w,D.e,D.i,0,w,w),w)},
$S:1787}
A.c3T.prototype={
$0(){var w=0,v=C.j(x.H),u=this
var $async$$0=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:u.a.$0()
w=2
return C.b(C.bP(D.nq,null,x.H),$async$$0)
case 2:u.b.$1(new A.c3S())
return C.h(null,v)}})
return C.i($async$$0,v)},
$S:1}
A.c3S.prototype={
$0(){},
$S:0}
A.c3U.prototype={
$0(){this.a.$0()
this.b.$1(new A.c3R())},
$S:0}
A.c3R.prototype={
$0(){},
$S:0}
A.c3F.prototype={
$0(){var w=this
w.a.a=w.b
w.c.$0()
w.d.$1(new A.c3E())},
$S:0}
A.c3E.prototype={
$0(){},
$S:0}
A.c3G.prototype={
$1(d){return this.a.b=d},
$S:2}
A.c3H.prototype={
$1(d){return this.a.c=d},
$S:2}
A.c3I.prototype={
$1(d){return this.a.d=d},
$S:2}
A.c3J.prototype={
$0(){return this.b.IV(this.a.a,!0)},
$S:0}
A.c3K.prototype={
$0(){var w=this.c
w.w=w.f=null
this.b.ZL(this.a.a)},
$S:0}
A.c3L.prototype={
$0(){return this.b.IV(this.a.a,!1)},
$S:0}
A.c3M.prototype={
$0(){var w=this.c
w.x=w.r=null
this.b.ZL(this.a.a)},
$S:0}
A.c3N.prototype={
$0(){var w=this
w.c.e=w.d
w.b.ZL(w.a.a)
w.e.$1(new A.c3D())},
$S:0}
A.c3D.prototype={
$0(){},
$S:0}
A.c3O.prototype={
$0(){var w=this,v=w.a,u=v.gzy().w.length
if((u===0?1:u)>1)v.d.cYF()
else w.b.bjN()
w.c.$0()
v.m(new A.c3B())
v.IW()
w.d.$1(new A.c3C())},
$S:0}
A.c3B.prototype={
$0(){},
$S:0}
A.c3C.prototype={
$0(){},
$S:0}
A.c3P.prototype={
$0(){C.a5(this.a,!1).O(null)
return null},
$S:0}
A.c48.prototype={
$0(){return C.a5(this.a,!1).ik()},
$S:0}
A.c49.prototype={
$0(){var w=this.a
return w.m(new A.c47(w))},
$S:0}
A.c47.prototype={
$0(){return this.a.y=!1},
$S:0}
A.c4a.prototype={
$0(){var w=this.a
return w.m(new A.c46(w))},
$S:0}
A.c46.prototype={
$0(){return this.a.y=!0},
$S:0}
A.fC7.prototype={
$1(d){return d.a===this.a},
$S:z+45}
A.fC8.prototype={
$0(){return D.d.gI(B.Rj)},
$S:z+52}
A.bMC.prototype={
$1(d){return d.d.t(0,this.a.b)},
$S:z+45}
A.bME.prototype={
$2(d,e){var w=this.a,v=this.b
return D.k.aL(w.aax(d.c,d.d,new C.z(v.c,v.d)),w.aax(e.c,e.d,new C.z(v.c,v.d)))},
$S:z+17}
A.bMF.prototype={
$1(d){return d.f==null},
$S:z+70}
A.bMB.prototype={
$2(d,e){var w,v=d.w
if(v!==e.w)return v?-1:1
v=this.a
w=this.b
return D.k.aL(v.b_6(w,A.yO(d.c)),v.b_6(w,A.yO(e.c)))},
$S:z+38}
A.bMG.prototype={
$2(d,e){var w=D.o.aL(e.b,d.b)
return w!==0?w:D.o.aL(e.c,d.c)},
$S:1788}
A.bMD.prototype={
$2(d,e){var w,v,u=d.w
if(u!==e.w)return u?-1:1
u=this.a
w=this.b
v=this.c
return D.k.aL(u.aax(w,v,A.yO(d.c)),u.aax(w,v,A.yO(e.c)))},
$S:z+38}
A.bKH.prototype={
$2(d,e){return(d^D.k.V(e.c)*31+D.k.V(e.d))>>>0},
$S:z+83}
A.c1Q.prototype={
$2(d,e){var w,v,u,t,s=null,r=this.a,q=r.c,p=q.d>0
if(p)w=0
else{w=q.c
w=w>0?(1-w/180)*0.5:q.a}v=r.e
if(p)p="\ud83d\udc1b"
else p=q.c>0?"\ud83d\ude34":"\u26a1"
u=x.p
w=C.a([A.h2B(v,p,w)],u)
p=q.e
if(p<0.3||q.f){t=q.f
if(t)p=0.2
t=t?"\ud83e\udd12":"\ud83d\udca7"
D.d.v(w,C.a([new C.a4(s,v/4,s,s),A.h2B(v*0.7,t,p)],u))}if(r.d)D.d.v(w,C.a([new C.a4(s,v/3,s,s),A.h2B(v,"\u26fd",q.b)],u))
return C.x(w,D.m,s,D.e,D.P,0,D.p)},
$S:410}
A.fFx.prototype={
$4(d,e,f,g){var w=f+g/100
return new C.cy([d+100*Math.cos(w),e+100*Math.sin(w),-Math.sin(w),Math.cos(w)])},
$S:1789}
A.fj0.prototype={
$1(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this.b,h=A.Le(i,a0).a,g=h[0],f=h[1],e=h[2],d=h[3]
for(h=this.a,w=h.a,v=h.b,u=h.c,h=h.d,t=0;t<5;++t){s=B.cYS[t]
for(r=d*s,q=e*s,p=0;p<3;++p){o=B.dcA[p]
n=i.a==="bus"
m=n?120:95.94999999999999
l=n?33.54:31.45
k=g+q*m-d*o*l
m=n?120:95.94999999999999
n=n?33.54:31.45
j=f+r*m+e*o*n
if(k>w&&k<v&&j>u&&j<h)return!0}}return!1},
$S:120}
A.bKJ.prototype={
$1(d){return d<=0?0:Math.sqrt(220*d)},
$S:5}
A.h_i.prototype={
$7(d,e,f,g,h,i,j){return new A.fP(C.a([d,e,f,g],x.o),0,new A.h_j(h),i,j,6,2,0,!1)},
$S:z+112}
A.h_j.prototype={
$3(d,e,f){return A.nj(d,e,f,this.a+D.k.bf(f/7))},
$S:24}
A.h_g.prototype={
$3(d,e,f){var w=this.a,v=w.b
w=w.a
return A.vF(new A.q(d,e,f),this.b).a7(0,new A.q(v,0,w))},
$S:z+24}
A.h_h.prototype={
$2(d,e){var w=this
return A.vF(new A.q(d,e,0),w.a).a7(0,new A.q(w.b,w.c,w.d))},
$S:z+16}
A.fBG.prototype={
$8(d,e,f,g,h,i,j,k){var w=-g,v=new A.fBH(d+f*h+w*i,f,w,e+g*h+f*i,g,f),u=-j/2,t=-k/2,s=j/2,r=k/2
this.a.Cn(v.$2(u,t),v.$2(s,t),v.$2(s,r),v.$2(u,r),D.bO,B.e8)},
$S:1790}
A.fBH.prototype={
$2(d,e){var w=this
return new A.q(w.a+w.b*d+w.c*e,0.95,w.d+w.e*d+w.f*e)},
$S:z+16}
A.cB8.prototype={
$1(d){return d.d===this.a},
$S:z+31}
A.cB9.prototype={
$1(d){return d.r},
$S:z+122}
A.cB7.prototype={
$2(d,e){return D.k.aL(d.x,e.x)},
$S:z+113}
A.bKv.prototype={
$1(d){var w
if(d.r<0)w=d.e||d.c<60
else w=!1
return w},
$S:z+18}
A.bKC.prototype={
$3(d,e,f){var w=this.a
return A.nj(d,e,f,w.b.a+w.f+D.k.bf(f/7))},
$S:24}
A.bKD.prototype={
$3(d,e,f){var w=this.a
return A.nj(d,e,f,w.b.a+w.f+3+D.k.bf(f/7))},
$S:24}
A.bKE.prototype={
$3(d,e,f){var w=this.a
return A.nj(d,e,f,w.b.a+w.f+7+D.k.bf(f/7))},
$S:24}
A.bKF.prototype={
$3(d,e,f){return A.nj(d,e,f,this.a.b.a+2+D.k.bf(f/7))},
$S:24}
A.bKw.prototype={
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
d.aH(q,j)
j=i===1?"L":""+i
l=C.fx(k,k,k,k,C.cS(k,k,k,k,k,k,k,k,k,C.l(k,k,D.bt,k,k,k,k,k,k,k,k,v*0.78,k,k,D.u,k,k,!0,k,k,k,k,k,k,k,k),j),D.a4,D.bY,k,D.dA,D.bW)
l.el()
j=l.b
i=j.c
j=j.a.c
l.a3(d,new C.t(w*0.62-i/2,v/2-j.gbb(j)/2))
return k},
$S:24}
A.bKx.prototype={
$3(d,e,f){return A.nj(d,e,f,1+D.k.bf(f/7))},
$S:24}
A.bKy.prototype={
$3(d,e,f){return A.nj(d,e,f,4+D.k.bf(f/7))},
$S:24}
A.bKz.prototype={
$2(d,e){var w=this.a,v=C.T(d),u=new C.cO(new C.Z(d,new A.bKA(w),v.k("Z<1>")),new A.bKB(w),v.k("cO<1,G>")).cI(0,0,D.xD)
if(u===2)w="works but is NOT wired safely: open it and check every wire"
else w=u===1?"started: finish the wiring":e
return w},
$S:1791}
A.bKA.prototype={
$1(d){return!this.a.d[d]},
$S:34}
A.bKB.prototype={
$1(d){return this.a.e[d]},
$S:78}
A.bLj.prototype={
$1(d){return!d.f},
$S:z+18}
A.bLg.prototype={
$1(d){return d.b===this.a.a.a},
$S:z+19}
A.bLh.prototype={
$1(d){return d.b===this.a&&d.c===this.b},
$S:z+19}
A.bLi.prototype={
$1(d){return d.a<0},
$S:z+33}
A.bLn.prototype={
$1(d){var w,v,u,t
for(w=this.a.x,v=w.length,u=0;u<v;++u){t=w[u]
if(t.b===d)return t}return null},
$S:z+99}
A.bLl.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n=this,m=new A.bLm()
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
A.bLm.prototype={
$4(d,e,f,g){return Math.atan2(f-d,g-e)},
$S:269}
A.bLk.prototype={
$1(d){return d.b===this.a.a.a},
$S:z+19}
A.bLo.prototype={
$1(d){var w=d.c
return w==="bathroom"||w==="kitchen"},
$S:z+5}
A.dSP.prototype={
$0(){return this.b.d=this.a.a},
$S:0}
A.dSQ.prototype={
$1(d){return this.a.c8p()},
$S:11}
A.dT1.prototype={
$0(){},
$S:0}
A.dSW.prototype={
$0(){return this.a.w=this.b},
$S:0}
A.dSX.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.dSV(w))},
$S:0}
A.dSV.prototype={
$0(){return this.a.w=null},
$S:0}
A.dSL.prototype={
$1(d){return B.aIP},
$S:z+34}
A.dSM.prototype={
$0(){},
$S:0}
A.dT4.prototype={
$1(d){return B.aIP},
$S:z+34}
A.dT5.prototype={
$0(){},
$S:0}
A.dT3.prototype={
$0(){var w=this.a
return w.m(new A.dT2(w,this.b))},
$S:0}
A.dT2.prototype={
$0(){return this.a.r=this.b},
$S:0}
A.dSK.prototype={
$0(){return this.a.ac_(this.b)},
$S:0}
A.dSR.prototype={
$0(){return this.a.J5(this.b.bfd(this.c))},
$S:0}
A.dSS.prototype={
$0(){return this.a.J5(this.b.aL9(this.c))},
$S:0}
A.dST.prototype={
$0(){return this.a.J5(this.b.aDI(this.c))},
$S:0}
A.dSU.prototype={
$0(){return this.a.akg(this.b)},
$S:0}
A.dSO.prototype={
$1(d){var w,v,u=null,t=this.b,s=this.c,r=t.e[s],q=t.c
q===$&&C.c()
q=q[r.a].a
w=this.a
v=x.p
s=C.B(C.a([new A.acO(q.e,44,u),D.as,C.E(C.d("Bed "+(s+1)+": "+q.b,u,u,u,u,u,u,D.ht,u,u,u),1),w.PT("\ud83d\udc89 Treat",new A.dSN(w,t,s),D.c0)],v),D.m,u,D.e,D.i,0,u,u)
t=r.b
return C.x(C.a([s,D.Q,w.WF("Care",t,t<30?D.ax:D.aJ),w.WF("Getting better",r.c,D.be)],v),D.E,u,D.e,D.i,0,D.p)},
$S:313}
A.dSN.prototype={
$0(){return this.a.J5(this.b.bkn(this.c))},
$S:0}
A.dSZ.prototype={
$0(){return this.a.J5(this.b.aEd("food"))},
$S:0}
A.dT_.prototype={
$0(){return this.a.J5(this.b.aEd("medicine"))},
$S:0}
A.dT0.prototype={
$0(){var w=0,v=C.j(x.H),u,t=this,s,r
var $async$$0=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:w=3
return C.b(A.aU9(),$async$$0)
case 3:$.Ec=null
s=t.a
if(s.c==null){w=1
break}r=s.f
if(r!=null)r.a4(0)
$.a4i=null
s.m(new A.dSY(s))
s.a_4()
case 1:return C.h(u,v)}})
return C.i($async$$0,v)},
$S:1}
A.dSY.prototype={
$0(){return this.a.d=null},
$S:0}
A.dT6.prototype={
$0(){return C.a5(this.a,!1).ik()},
$S:0}
A.dT7.prototype={
$1(d){return d.a>=0},
$S:z+33}
A.fDH.prototype={
$2(d,e){var w
A:{if("black"===d){w=e.a===25?"The black wire carries the power (hot). It never goes on the green ground screw. Hot goes to a BRASS screw.":"The black (hot) wire goes on a BRASS screw, not on the silver one. Silver is for white (neutral)."
break A}if("white"===d){w=e.a===25?"The white wire is the neutral. The green screw is only for the ground wire. Neutral goes to a SILVER screw.":"The white (neutral) wire goes on a SILVER screw, not on brass. Brass is for the black (hot) wire."
break A}w="The bare copper ground wire only goes on the GREEN screw. It keeps you safe if something goes wrong."
break A}return w},
$S:z+2}
A.fDI.prototype={
$2(d,e){return d==="ground"?y.t:"A black (hot) wire never goes on the green ground screw. The two black wires go on the two BRASS screws."},
$S:z+2}
A.fDJ.prototype={
$2(d,e){var w
if(e.e)w="Those are the LOAD screws. They are covered with tape because power must come in on the LINE side. If you wire the LOAD side the GFCI will not protect you."
else A:{if("black"===d){w="The black (hot) wire goes on the BRASS LINE screw."
break A}if("white"===d){w="The white (neutral) wire goes on the SILVER LINE screw."
break A}w=y.t
break A}return w},
$S:z+2}
A.fDK.prototype={
$2(d,e){var w
A:{if("black"===d){w="The black (hot) wire joins the fixture BLACK wire. Not the white one, and never the green ground."
break A}if("white"===d){w="The white (neutral) wire joins the fixture WHITE wire. Not the black one, and never the green ground."
break A}w="The bare copper ground wire joins the fixture GREEN ground wire only."
break A}return w},
$S:z+2}
A.fDL.prototype={
$2(d,e){var w
A:{if("black"===d){w="The black (hot) wire joins the fan BLACK wire. Not the white one, and never the green ground."
break A}if("white"===d){w="The white (neutral) wire joins the fan WHITE wire. Not the black one, and never the green ground."
break A}w="The bare copper ground wire joins the fan GREEN ground wire only."
break A}return w},
$S:z+2}
A.fCh.prototype={
$1(d){return d.a===this.a},
$S:z+42}
A.h_T.prototype={
$1(d){return d.a},
$S:z+35}
A.fBt.prototype={
$1(d){var w
A:{if("hot"===d){w=B.VM
break A}if("neutral"===d){w=B.VN
break A}if("ground"===d){w=B.VO
break A}w=B.aYB
break A}return w},
$S:z+59}
A.fBu.prototype={
$1(d){var w
A:{if("hot"===d){w=B.K3
break A}if("neutral"===d){w=B.K4
break A}if("ground"===d){w=B.K5
break A}w=B.aT1
break A}return w},
$S:z+57}
A.fBr.prototype={
$1(d){return d.a===this.a.a},
$S:z+12}
A.fBs.prototype={
$1(d){return d.a===this.a.b},
$S:z+7}
A.fSa.prototype={
$1(d){return d.e==="hot"},
$S:z+7}
A.fSb.prototype={
$1(d){return d.e==="neutral"},
$S:z+7}
A.fCu.prototype={
$1(d){return D.d.b3(this.a.b,new A.fCv(d))},
$S:3}
A.fCv.prototype={
$1(d){return d.a===this.a},
$S:z+46}
A.fCr.prototype={
$2(d,e){return A.avy(e.b)>A.avy(d.b)?e:d},
$S:z+49}
A.fCs.prototype={
$1(d){return d.a===this.a.a},
$S:z+12}
A.fCt.prototype={
$1(d){return d.a===this.a.b},
$S:z+7}
A.fzH.prototype={
$5(d,e,f,g,h){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=j.a
i.b=d
w=j.b
v=w.b
u=C.a7(v).k("cD<1,2>")
t=u.k("Z<M.E>")
s=C.C(new C.Z(new C.cD(v,u),new A.fzI(g),t),t.k("M.E"))
r=g==="ground"
q=r?B.tY:h
p=r?0.6:0.3
if(w.c>0){o=e.a7(0,B.hb7)
i.j8(A.aib(C.a([e,e.a7(0,B.h92),o],x.o),4),0.12,q,!1,p,8)
return}if(s.length!==0){n=A.aQ8(j.c,D.d.gI(s).a,w)
w=A.pB(e,n,0.5)
v=n.a>0
m=w.a7(0,new A.q(v?0.5:-0.5,0.2,0.9))
w=e.a7(0,B.hfu)
if(j.d)v=0
else v=v?0.06:-0.06
l=A.aib(C.a([e,w,m,n.a7(0,new A.q(v,0,0.08)),n],x.o),5)
k=D.d.dt(l,0,D.k.bf(l.length*0.8))
i.j8(k,0.12,q,!1,p,8)
if(!r)i.j8(D.d.fL(l,k.length-1),0.08639999999999999,B.tY,!1,0.6,8)}else{l=A.aib(C.a([e,e.a7(0,B.h56),A.pB(e,f,0.6),f],x.o),5)
k=r?l:D.d.dt(l,0,D.k.bf(l.length*0.86))
i.j8(k,0.12,q,!1,p,8)
if(!r)i.j8(D.d.fL(l,k.length-1),0.08639999999999999,B.tY,!1,0.6,8)}},
$S:z+50}
A.fzI.prototype={
$1(d){return d.b===this.a},
$S:712}
A.fkM.prototype={
$2(d,e){var w,v=this.a
v.b=d
w=A.Dj(e,0.9,6)
if(this.b)v.j8(w,0.2,B.Yy,!1,0.35,10)
this.c.push(D.d.gak(w))},
$S:z+51}
A.h_S.prototype={
$1(d){return d.a===this.a},
$S:z+42}
A.fm5.prototype={
$6$taped(d,e,f,g,h,i){var w,v,u,t=this.a
t.e=0.9
t.b=d
w=this.b
v=w.a+e*0.75
u=w.b+f
w=w.c-0.45
t.aR(new A.q(v,u,w),B.hh2,h,0.7)
t.dq(new A.q(v,u,w),new A.q(v+e*0.22,u,w),0.17,g,0.9,12)
t.aJ(new A.q(v+e*0.23,u,w),B.hdm,B.xS)
if(i)t.aR(new A.q(v+e*0.05,u,w),B.hdc,D.bt,0.2)},
$5(d,e,f,g,h){return this.$6$taped(d,e,f,g,h,!1)},
$S:1793}
A.frD.prototype={
$5(d,e,f,g,h){var w=new A.frE(this.a,d,Math.cos(h),Math.sin(h),e),v=-f/2,u=-g/2,t=f/2,s=g/2
this.b.Cn(w.$2(v,u),w.$2(t,u),w.$2(t,s),w.$2(v,s),B.ai1,B.ig)},
$4(d,e,f,g){return this.$5(d,e,f,g,0)},
$S:1794}
A.frE.prototype={
$2(d,e){var w=this,v=w.a,u=w.c,t=w.d
return new A.q(v.a+w.b+d*u-e*t,v.b+w.e+d*t+e*u,v.c+0.5+0.012)},
$S:z+16}
A.frC.prototype={
$2(d,e){var w=this.b
return this.a.dF(w.a7(0,new A.q(d,e,0.5)),w.a7(0,new A.q(d,e,0.512)),0.065,B.ai1,12)},
$S:199}
A.frB.prototype={
$2(d,e){var w=this.a
w.$4(d,e,0.075,0.3)
w.$4(d+0.09,e-0.115,0.2,0.075)},
$S:199}
A.fyo.prototype={
$5(d,e,f,g,h){var w,v,u,t=this.a
t.e=0.9
t.b=d
w=this.b
v=w.a+e
u=w.b+f
w=w.c
t.dq(new A.q(v,u,w+0.43),new A.q(v,u,w+0.78),0.3,g,0.9,14)
w+=0.79
t.aJ(new A.q(v,u,w),B.h80,B.xS)
t.aJ(new A.q(v,u,w),B.hbB,B.xS)},
$S:1795}
A.fDM.prototype={
$2(d,e){var w
if(d==="ground")w=y.t
else w=e.a===25?y.T:"A double-pole switch has two LINE screws on top (power in) and two LOAD screws on the bottom (power out to the heater). Each leg goes straight down the same side: left leg on the left screws, right leg on the right ones."
return w},
$S:z+2}
A.fDN.prototype={
$2(d,e){var w
if(d==="ground")w=y.t
else if(e.a===25)w=y.T
else w=d==="common"?"The COMMON wire does not go on a traveler screw. It goes on the odd-coloured COMMON screw.":"The travelers go on the two brass TRAVELER screws. The COMMON screw is for the black power wire only."
return w},
$S:z+2}
A.fDO.prototype={
$2(d,e){var w
if(d==="ground")w=y.t
else w=e.a===25?"A traveler never goes on the green ground screw.":"A four-way has a pair of screws for the travelers coming IN (top) and a pair for the travelers going OUT (bottom). Do not mix the two pairs."
return w},
$S:z+2}
A.fDP.prototype={
$2(d,e){var w
A:{if("ground"===d){w=y.t
break A}if("neutral"===d){w="The white neutral wire goes on the silver NEUTRAL screw only."
break A}if(e.a===25)w=y.T
else w=d==="line"?"The wire from the panel is the LINE: it goes on the LINE screw.":"The wire to the light is the LOAD: it goes on the LOAD screw."
break A}return w},
$S:z+2}
A.fDQ.prototype={
$2(d,e){var w
if(d==="ground")w=y.t
else if(e.a===25)w=y.T
else w=d==="feed"?"The feed goes on the FEED screw, where the two switches are joined.":"The wires to the lights go on the separate screws, one for each switch."
return w},
$S:z+2}
A.fDR.prototype={
$2(d,e){var w,v=y.T
A:{if("ground"===d){w=y.t
break A}if("neutral"===d){w="The white neutral wire goes on a SILVER screw."
break A}if("always"===d){w=e.a===25?v:"The always-hot wire goes on the BOTTOM brass screw. The top one is for the switched wire."
break A}w=e.a===25?v:"The switched hot wire (red) goes on the TOP brass screw."
break A}return w},
$S:z+2}
A.fDS.prototype={
$2(d,e){var w
A:{if("ground"===d){w=y.t
break A}if("neutral"===d){w=y.I
break A}w=e.a===25?y.T:y.S
break A}return w},
$S:z+2}
A.fDT.prototype={
$2(d,e){return d==="neutral"?y.I:"The black and red hot wires go on the two brass screws, X and Y."},
$S:z+2}
A.fDU.prototype={
$2(d,e){var w
if(d==="ground")w=y.t
else w=e.a===25?y.T:"Both hot wires go on the two brass screws."
return w},
$S:z+2}
A.fDV.prototype={
$2(d,e){var w
A:{if("isoground"===d){w="The isolated ground wire only goes on the green screw with the orange triangle."
break A}if("neutral"===d){w=y._
break A}w=e.a===25?"A hot wire never goes on the ground screw.":y.u
break A}return w},
$S:z+2}
A.fDA.prototype={
$2(d,e){return A.fky(d,e,!0)},
$S:z+2}
A.fDB.prototype={
$2(d,e){return A.fky(d,e,!1)},
$S:z+2}
A.fDC.prototype={
$2(d,e){return A.fky(d,e,!0)},
$S:z+2}
A.fDD.prototype={
$2(d,e){return A.fky(d,e,!1)},
$S:z+2}
A.fDE.prototype={
$2(d,e){var w
A:{if("ground"===d){w=y.t
break A}if("neutral"===d){w=y._
break A}w=e.a===25?y.T:y.u
break A}return w},
$S:z+2}
A.fDF.prototype={
$2(d,e){var w
A:{if("neutral"===d){w="The white neutral wire goes on the MIDDLE terminal, the one with the ground strap."
break A}if("hot1"===d){w=y.J
break A}w="The red wire goes on the RIGHT terminal."
break A}return w},
$S:z+2}
A.fDG.prototype={
$2(d,e){var w
A:{if("ground"===d){w="The green ground wire goes on the frame screw, where the strap was."
break A}if("neutral"===d){w="The white neutral wire goes on the MIDDLE terminal."
break A}if("hot1"===d){w=y.J
break A}w="The red wire goes on the RIGHT terminal."
break A}return w},
$S:z+2}
A.fzt.prototype={
$1(d){return d.a===this.a},
$S:z+26}
A.fzu.prototype={
$0(){return B.amS},
$S:z+53}
A.h_P.prototype={
$1(d){var w=d>60?62:99
return Math.min(d*0.5625,w)},
$S:5}
A.h_M.prototype={
$1(d){return d>40?30+d/2:58},
$S:5}
A.h_N.prototype={
$2(d,e){return D.k.aL(d.a,e.a)},
$S:1796}
A.h_O.prototype={
$2(d,e){var w=this.a
if(e-d>w.a-w.b){w.b=d
w.a=e}},
$S:199}
A.bUD.prototype={
$1(d){return d},
$S:117}
A.bUC.prototype={
$1(d){return B.f5A.t(0,d.b)},
$S:z+4}
A.bVd.prototype={
$1(d){return d.a==="Jobs"},
$S:z+55}
A.bVe.prototype={
$1(d){return new A.oq(!1,"back",d,5)},
$S:z+56}
A.bVf.prototype={
$4(d,e,f,g){return!D.d.b3(this.a.x,new A.bVg(d,f,e,g))},
$2(d,e){return this.$4(d,e,135,115)},
$3(d,e,f){return this.$4(d,e,f,115)},
$S:1797}
A.bVg.prototype={
$1(d){var w=this,v=d.b
return!D.d.t(B.a5m,v)&&!D.d.t(B.I8,v)&&Math.abs(d.c-w.a)<w.b&&Math.abs(d.d-w.c)<w.d},
$S:z+4}
A.bVh.prototype={
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
if(Math.abs(o.c-d)<(f+n.c)/2+130){u=o.d
t=n.d
q=u>e?150:110
q=Math.abs(u-e)<(g+t)/2+q
u=q}else u=!1
if(u)return!1}return!0},
$S:713}
A.bVl.prototype={
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
if(B.f5O.t(0,q)){l=r.e*3.141592653589793/2
q=r.c
o=Math.sin(l)
p=p.d/2+30
k=r.d
j=Math.cos(l)
if(Math.abs(q+o*p-d)<u&&Math.abs(k+j*p-e)<t)return!1}}return!0},
$S:713}
A.bVi.prototype={
$3(d,e,f){var w,v,u,t,s,r,q,p,o,n={},m=B.hE.h(0,d)
m.toString
w=n.a=0
v=this.a
u=new A.bVk(n,v,d)
for(t=f.length,s=this.b,r=m.c,m=m.d;w<t;++w){q=f[w]
p=q.a
o=q.b
if(n.a>=e)return
if(s.$4(p,o,r,m))u.$2(p,o)}v=v.x
o=-500
for(;;){if(!(o<1400&&n.a<e))break
p=-1100
for(;;){if(!(p<=1100&&n.a<e))break
A:{if(D.d.b3(v,new A.bVj(d,p,o)))break A
if(s.$4(p,o,r,m))u.$2(p,o)}p+=110}o+=100}},
$S:1799}
A.bVk.prototype={
$2(d,e){var w=this.b,v=this.c
w.dA(0,v,d,e)
if(v==="ubstation")w.dA(0,"car",d+96,e+6);++this.a.a},
$S:199}
A.bVj.prototype={
$1(d){return d.b===this.a&&Math.abs(d.c-this.b)<420&&Math.abs(d.d-this.c)<420},
$S:z+4}
A.bVp.prototype={
$1(d){return d.gkO()},
$S:z+5}
A.bVo.prototype={
$1(d){var w=d.c
return(w==="bathroom"||w==="kitchen")&&d.gjR()},
$S:z+5}
A.bVn.prototype={
$1(d){var w=d.c
return w==="bathroom"||w==="kitchen"},
$S:z+5}
A.bVm.prototype={
$1(d){return d.gkO()&&d.gjR()},
$S:z+5}
A.eex.prototype={
$1(d){return!(d.gkO()&&d.gjR())},
$S:z+5}
A.eeu.prototype={
$1(d){var w,v=this.a.a.f
A:{if("wiring"===v){w=!d.gkO()
break A}if("plumbing"===v){w=!d.gjR()
break A}w=!(d.gkO()&&d.gjR())
break A}return w},
$S:z+5}
A.eev.prototype={
$1(d){var w,v,u,t,s,r,q=this.a,p=q.ghE()
if(Date.now()<0){if(q.c!=null)q.m(new A.eet())
return}if(p==null||q.c==null||q.cx!=null||q.bZ>0)return
w=q.d
w===$&&C.c()
v=w.d
v===$&&C.c()
u=p.bfo(w,v[w.e].a)
w=C.a([],x.s)
for(v=u.length,t=0;t<u.length;u.length===v||(0,C.L)(u),++t){s=u[t]
w.push(""+s.a+":"+D.k.V(s.c)+":"+D.k.V(s.d)+":"+s.x+":"+s.Q)}r=D.d.aG(w,"|")
if(q.aK==null&&r!==q.dv){q.dv=r
q.m(q.giZ())}w=p.f
if(w.length!==0&&D.d.gI(w)!==q.fy){w=D.d.gI(w)
q.fy=w
q.iL(w)}},
$S:11}
A.eet.prototype={
$0(){},
$S:0}
A.eew.prototype={
$1(d){var w,v=this.a
if(v.c==null)return
w=v.d
w===$&&C.c()
if(w.a.length!==0)v.iL(v.c2i())
else{w=v.a.f
if(w.length!==0){A:{if("wiring"===w){w="This room needs wiring: press the Wiring button, or tap the red outlet or the light."
break A}if("plumbing"===w){w="This room needs plumbing: press the Plumbing button, or tap the toilet or the sink."
break A}w="Walk through the house and fix what the signs say is wrong."
break A}v.iL(w)}}},
$S:8}
A.edg.prototype={
$0(){var w=this.a
w.ax=this.b
w.ay=this.c},
$S:0}
A.edh.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.edf(w))},
$S:0}
A.edf.prototype={
$0(){return this.a.ax=null},
$S:0}
A.edi.prototype={
$0(){var w=this.a
w.r=this.b
w.Q=0
w.as=-1
w.at=0
w.iK()},
$S:0}
A.ebO.prototype={
$0(){var w=this.a,v=w.d
v===$&&C.c()
v.e=this.b
w.Q=0
w.as=-1
w.at=0
w.ax=null
w.iK()},
$S:0}
A.edK.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.d
w===$&&C.c()
u=w[u.e]
u.fy=!u.fy
v.iK()},
$S:0}
A.ecL.prototype={
$0(){return this.a.k3=!0},
$S:0}
A.ecM.prototype={
$0(){var w=this.a,v=this.b
w.Q=v-100
w.at=v
w.iK()},
$S:0}
A.ecN.prototype={
$0(){var w=this.a,v=this.b
w.as=v-300
w.at=v},
$S:0}
A.ecO.prototype={
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
A.ecP.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.d
w===$&&C.c()
w[u.e].p2=!0
v.iK()},
$S:0}
A.ebh.prototype={
$1(d){var w,v,u,t,s,r=this,q=null,p=C.d("Door to "+r.b,q,q,q,q,q,q,D.de,q,q,q),o=r.a,n=o.d
n===$&&C.c()
w=n.d
w===$&&C.c()
v=r.c
u=C.d(w[n.e].at.t(0,v)?"The door is open.":"The door is closed.",q,q,q,q,q,q,D.mp,q,q,q)
n=o.d
w=n.d
w===$&&C.c()
t=C.X(w[n.e].at.t(0,v)?B.bLK:B.bLW,q,q,q,q,q)
n=o.d
w=n.d
w===$&&C.c()
s=x.p
return C.bn(!0,new C.D(D.bQ,C.x(C.a([p,D.au,u,D.ae,C.bY(D.bG,C.a([C.di(t,C.d(w[n.e].at.t(0,v)?"Close the door":"Open the door",q,q,q,q,q,q,q,q,q,q),new A.ebf(o,d,v),q),C.ex(D.aq7,B.fFW,new A.ebg(o,d,v,r.d),q)],s),D.br,q,10,10)],s),D.E,q,D.e,D.P,0,D.p),q),!0,!1,D.af,!0,!0)},
$S:27}
A.ebf.prototype={
$0(){var w,v,u
C.a5(this.b,!1).O(null)
w=this.a
v=this.c
w.m(new A.ebe(w,v))
w=w.d
w===$&&C.c()
u=w.d
u===$&&C.c()
A.fQ(u[w.e].at.t(0,v)?700:450,70,0.25,"tri")},
$S:0}
A.ebe.prototype={
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
A.ebg.prototype={
$0(){var w,v,u=this
C.a5(u.b,!1).O(null)
w=u.a
v=u.c
w.m(new A.ebc(w,v))
A.fQ(700,70,0.25,"tri")
C.bP(D.m5,new A.ebd(w,v,u.d),x.P)},
$S:0}
A.ebc.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.d
w===$&&C.c()
w[u.e].at.M(0,this.b)
v.iK()},
$S:0}
A.ebd.prototype={
$0(){var w=this.a
if(w.c==null)return
w.m(new A.ebb(w,this.b))
w.AB(this.c)},
$S:12}
A.ebb.prototype={
$0(){var w,v=this.a.d
v===$&&C.c()
w=v.d
w===$&&C.c()
return w[v.e].at.W(0,this.b)},
$S:0}
A.ebq.prototype={
$0(){return this.a.eu=!0},
$S:0}
A.ebr.prototype={
$0(){var w=this.a
w.f2=!0
w.fB=!1
w.R8=!w.p4},
$S:0}
A.ebs.prototype={
$0(){var w=this.a
w.R8=w.f2=!1},
$S:0}
A.ecE.prototype={
$2(d,e){var w=null,v=D.w.j(0.55),u=C.J(D.bU,D.r,1)
return C.aA(w,C.p(w,C.X(d,D.c,w,w,w,22),D.f,w,w,new C.o(v,w,u,w,w,w,D.a6),w,44,w,D.Gl,w,w,w,44),D.y,!1,w,new A.ecG(this.a),w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,e,w,w,w,w,w,w,!1,D.a3)},
$S:446}
A.ecG.prototype={
$0(){var w=this.a
return w.m(new A.ecF(w))},
$S:0}
A.ecF.prototype={
$0(){return this.a.fB=!0},
$S:0}
A.ecH.prototype={
$0(){var w=this.a
return w.m(new A.ecD(w))},
$S:0}
A.ecD.prototype={
$0(){return this.a.fB=!1},
$S:0}
A.ecI.prototype={
$0(){var w=this.a
return w.p4?w.a2Q():w.m(new A.ecC(w))},
$S:0}
A.ecC.prototype={
$0(){return this.a.R8=!0},
$S:0}
A.ecJ.prototype={
$0(){var w=this.a
return w.m(new A.ecB(w))},
$S:0}
A.ecB.prototype={
$0(){var w=this.a
return w.ha=!w.ha},
$S:0}
A.ecK.prototype={
$0(){var w=this.a
return w.m(new A.ecA(w))},
$S:0}
A.ecA.prototype={
$0(){return this.a.ai=!0},
$S:0}
A.eaS.prototype={
$0(){var w=this.a
return w.m(new A.eaT(w))},
$S:0}
A.eaT.prototype={
$0(){return this.a.ai=!1},
$S:0}
A.ebC.prototype={
$2(d,e){var w=null,v=D.w.j(0.55),u=C.J(D.bU,D.r,1)
return C.aA(w,C.p(w,C.X(d,D.c,w,w,w,20),D.f,w,w,new C.o(v,w,u,w,w,w,D.a6),w,40,w,D.iE,w,w,w,40),D.y,!1,w,new A.ebE(this.a),w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,e,w,w,w,w,w,w,!1,D.a3)},
$S:446}
A.ebE.prototype={
$0(){var w=this.a
return w.m(new A.ebD(w))},
$S:0}
A.ebD.prototype={
$0(){return this.a.fB=!0},
$S:0}
A.ebF.prototype={
$0(){var w=this.a
return w.m(new A.ebB(w))},
$S:0}
A.ebB.prototype={
$0(){return this.a.fB=!1},
$S:0}
A.ebG.prototype={
$0(){var w,v,u=this.a
u.m(new A.ebA(u))
w=u.d
w===$&&C.c()
v=w.d
v===$&&C.c()
if(v[w.e].c!=="outside")u.y3()},
$S:0}
A.ebA.prototype={
$0(){return this.a.eu=!1},
$S:0}
A.ebH.prototype={
$0(){var w=this.a
return w.m(new A.ebz(w))},
$S:0}
A.ebz.prototype={
$0(){var w=this.a
return w.ab=w.ab===1?3:1},
$S:0}
A.ebI.prototype={
$0(){var w=this.a
return w.m(new A.eby(w))},
$S:0}
A.eby.prototype={
$0(){var w=this.a
return w.ha=!w.ha},
$S:0}
A.ebJ.prototype={
$0(){var w=this.a
return w.m(new A.ebx(w))},
$S:0}
A.ebx.prototype={
$0(){return this.a.ai=!0},
$S:0}
A.ebK.prototype={
$0(){var w=this.a
return w.p4?w.a2Q():w.m(new A.ebw(w))},
$S:0}
A.ebw.prototype={
$0(){return this.a.R8=!0},
$S:0}
A.edI.prototype={
$2$mine(d,e){var w=null,v=e?D.a8:D.a5,u=e?D.bl:D.e9,t=C.m(18)
return new C.bM(v,w,w,C.p(w,C.d(d,w,w,w,w,w,w,B.aU1,w,w,w),D.f,w,B.adg,new C.o(u,w,w,t,w,w,D.n),w,w,w,D.ct,D.iq,w,w,w),w)},
$1(d){return this.$2$mine(d,!1)},
$S:1800}
A.edJ.prototype={
$1(d){var w=this,v=null,u=w.b,t=u.b,s=x.p,r=C.B(C.a([C.ha(u.e.c,v,C.d(t[0],v,v,v,v,v,v,D.iu,v,v,v),v,18),D.as,C.d(t,v,v,v,v,v,v,D.k8,v,v,v),D.b2,B.fRD],s),D.m,v,D.e,D.i,0,v,v),q=w.c,p=w.d,o=q.$1("Hi, it's "+t+". "+p.d),n=w.e,m="Please come to "+n,l=w.a
return C.bn(!0,new C.D(Ac.yt,C.x(C.a([r,A9.Na,o,q.$1(p.c==="power"?m+" and fix the wiring. I can't stay in the dark.":m+" and fix the leak before it floods."),q.$1("I'll pay "+p.e+" points. Thank you!"),q.$2$mine("On my way!",!0),D.am,C.bY(D.bG,C.a([C.di(B.bWt,C.d("Show me where "+t+" is",v,v,v,v,v,v,v,v,v,v),new A.edG(l,d,p,u),v),C.di(B.bZm,C.d("Go and fix it ("+n+")",v,v,v,v,v,v,v,v,v,v),new A.edH(l,d,w.f,n),v)],s),D.br,v,8,10)],s),D.E,v,D.e,D.P,0,D.p),v),!0,!1,D.af,!0,!0)},
$S:27}
A.edG.prototype={
$0(){var w,v,u,t,s=this
C.a5(s.b,!1).O(null)
w=s.a
v=w.fr
u=C.T(v).k("Z<1>")
t=C.C(new C.Z(v,new A.edF(s.c),u),u.k("M.E"))
if(t.length!==0){v=w.d
v===$&&C.c()
u=v.d
u===$&&C.c()
v=u[v.e].c==="outside"}else v=!1
if(v){v=w.e
v===$&&C.c()
v.xm(160,new A.q(D.d.gI(t).c,30,D.d.gI(t).d))}w.ei(s.d.b+" is the one with the phone sign.",!0)},
$S:0}
A.edF.prototype={
$1(d){return d.a===this.a.b},
$S:z+14}
A.edH.prototype={
$0(){var w,v=this
C.a5(v.b,!1).O(null)
w=v.a
if(w.aN)w.a2R()
w.eu=!1
w.AB(v.c)
w.ei("You are in "+v.d+". Fix the problem with the Wiring or Plumbing button.",!0)},
$S:0}
A.ec1.prototype={
$0(){var w=this.a
w.x=!0
w.z=!1
w.r="ceiling"
w.iK()},
$S:0}
A.e9R.prototype={
$1(d){return d.c==="outside"},
$S:z+5}
A.eea.prototype={
$1(d){return d.c==="outside"},
$S:z+5}
A.eah.prototype={
$0(){},
$S:0}
A.ebX.prototype={
$0(){var w=this.a
return w.m(new A.ebW(w))},
$S:0}
A.ebW.prototype={
$0(){return this.a.id=!1},
$S:0}
A.ebY.prototype={
$0(){var w=this.a
return w.m(new A.ebV(w))},
$S:0}
A.ebV.prototype={
$0(){return this.a.id=!1},
$S:0}
A.eeb.prototype={
$1(d){var w=this.b
return d.d===this.a.aqH(w.f,w.r)},
$S:z+31}
A.ee9.prototype={
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
A.edm.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=d.a==="tank"?A.h9Q(l.a.c5.b):d.e,i=l.b
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
if(i){i=C.d(p,k,k,k,k,k,k,D.x3,k,k,k)
o=C.d(o,k,1,D.a1,k,k,k,D.Kt,D.K,k,k)
n=C.d(n,k,2,D.a1,k,k,k,B.fnc,D.K,k,k)
p=w?D.bt:D.bz
m=C.m(12)
i=C.x(C.a([i,D.bF,o,n,D.fG,C.p(k,C.d(""+j+" \u2b50",k,k,k,k,k,k,C.l(k,k,w?D.w:D.bU,k,k,k,k,k,k,k,k,13,k,k,D.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),D.f,k,k,new C.o(p,k,k,m,k,k,D.n),k,k,k,k,D.Go,k,k,k)],x.p),D.m,k,D.e,D.P,0,D.p)}else{i=C.d(p,k,k,k,k,k,k,D.n2,k,k,k)
p=x.p
n=C.E(C.x(C.a([C.d(o,k,k,k,k,k,k,D.nK,k,k,k),C.d(n,k,k,k,k,k,k,B.aTu,k,k,k)],p),D.E,k,D.e,D.i,0,D.p),1)
o=w?D.bt:D.bz
m=C.m(14)
i=C.B(C.a([i,D.as,n,C.p(k,C.d(""+j+" \u2b50",k,k,k,k,k,k,C.l(k,k,w?D.w:D.bU,k,k,k,k,k,k,k,k,k,k,k,D.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),D.f,k,k,new C.o(o,k,k,m,k,k,D.n),k,k,k,k,D.nt,k,k,k)],p),D.m,k,D.e,D.i,0,k,k)}return C.aA(k,C.p(k,i,D.f,k,k,new C.o(s,k,q,r,k,k,D.n),k,k,k,D.ct,new C.P(u,t,u,t),k,k,v),D.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new A.edn(l.a,d),k,k,k,k,k,k,!1,D.a3)},
$S:z+124}
A.edn.prototype={
$0(){return this.a.aPH(this.b)},
$S:0}
A.edl.prototype={
$2(d,e){var w,v,u,t=null,s=x.p,r=C.a([new C.D(B.byn,C.d(d,t,t,t,t,t,t,B.ftv,t,t,t),t)],s)
if(this.a){s=C.a([],s)
for(w=e.length,v=this.b,u=0;u<w;++u)s.push(v.$1(e[u]))
r.push(C.bY(D.bG,s,D.br,t,0,8))}else for(s=e.length,w=this.b,u=0;u<s;++u)r.push(w.$1(e[u]))
return C.x(r,D.E,t,D.e,D.P,0,D.p)},
$S:z+63}
A.edk.prototype={
$0(){var w=this.a
return w.m(new A.edj(w))},
$S:0}
A.edj.prototype={
$0(){return this.a.k2=!1},
$S:0}
A.ecl.prototype={
$2(d,e){var w=null,v=e.j(0.2),u=C.m(10)
return C.p(w,C.d(d,w,w,w,w,w,w,C.l(w,w,e,w,w,w,w,w,w,w,w,11.5,w,w,D.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),D.f,w,w,new C.o(v,w,w,u,w,w,D.n),w,w,w,w,D.fP,w,w,w)},
$S:1801}
A.ecm.prototype={
$1(d){return B.hE.h(0,d.b).a},
$S:z+64}
A.eci.prototype={
$1(d){var w,v,u,t,s=this,r=null,q=d.c,p=A.yO(q),o=D.k.V(Math.sqrt(Math.pow(p.a-s.b,2)+Math.pow(p.b-s.c,2))/10),n=D.c.j(0.07),m=C.m(16),l=C.J(D.bz,D.r,1),k=d.b,j=C.d(A.L9(k).b,r,r,r,r,r,r,D.n2,r,r,r),i=s.d
k=C.d(d.w?"\ud83d\ude91 "+A.L9(k).c+": "+C.w(i.$1(q))+" \u2192 "+C.w(i.$1(d.d))+" (somebody was run over)":A.L9(k).c+": "+C.w(i.$1(q))+" \u2192 a house",r,r,r,r,r,r,B.aUZ,r,r,r)
w=s.e
v=w.$2(""+d.e+" points",D.bt)
u=w.$2(""+o+" m to the shop",D.aJ)
p=A.yO(q)
t=A.yO(d.d)
q=x.p
w=C.E(C.x(C.a([k,D.cS,C.bY(D.bG,C.a([v,u,w.$2(""+D.k.V(Math.sqrt(Math.pow(p.a-t.a,2)+Math.pow(p.b-t.b,2))/10)+" m trip",D.be)],q),D.br,r,0,6)],q),D.E,r,D.e,D.i,0,D.p),1)
k=s.f!=null
i=k?r:new A.eck(s.a,s.r,d,i)
v=k?D.bz:D.bt
u=C.m(14)
return C.p(r,C.B(C.a([j,D.as,w,D.ad,C.aA(r,C.p(r,C.d("Take",r,r,r,r,r,r,C.l(r,r,k?D.bU:D.w,r,r,r,r,r,r,r,r,r,r,r,D.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),D.f,r,r,new C.o(v,r,r,u,r,r,D.n),r,r,r,r,D.iq,r,r,r),D.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,i,r,r,r,r,r,r,!1,D.a3)],q),D.m,r,D.e,D.i,0,r,r),D.f,r,r,new C.o(n,r,l,m,r,r,D.n),r,r,r,D.ct,D.bT,r,r,r)},
$S:z+65}
A.eck.prototype={
$0(){var w=this,v=w.c,u=w.a
if(w.b.cZ9(0,v,u.CW.gig()/1000)){u.m(new A.ecj(u))
if(!u.aN)u.a2N()
u.ei(A.L9(v.b).b+" Order taken: go to the "+w.d.$1(v.c).toLowerCase()+" (follow the yellow line), then to the house.",!0)}},
$S:0}
A.ecj.prototype={
$0(){return this.a.go=!1},
$S:0}
A.ecg.prototype={
$0(){var w=this.a
return w.m(new A.ecf(w))},
$S:0}
A.ecf.prototype={
$0(){return this.a.go=!1},
$S:0}
A.ech.prototype={
$0(){var w=this.a
return w.m(new A.ece(w,this.b))},
$S:0}
A.ece.prototype={
$0(){this.b.a4(0)
this.a.ei("Order given back.",!0)},
$S:0}
A.ebL.prototype={
$0(){return this.a.k3=!1},
$S:0}
A.ebM.prototype={
$0(){return this.a.k3=!1},
$S:0}
A.edc.prototype={
$0(){return A.fQ(1175,220,0.3,"tri")},
$S:0}
A.ebo.prototype={
$0(){var w=this.a
return w.m(new A.ebn(w))},
$S:0}
A.ebn.prototype={
$0(){return this.a.k3=!1},
$S:0}
A.ebp.prototype={
$0(){return this.a.bUm(this.b)},
$S:0}
A.eba.prototype={
$4(d,e,f,g){var w=-d,v=this.a
return 0.5*(2*e+(w+f)*v+(2*d-5*e+4*f-g)*v*v+(w+3*e-3*f+g)*v*v*v)},
$S:269}
A.ec2.prototype={
$1(d){return d.c==="outside"},
$S:z+5}
A.edo.prototype={
$0(){var w=this.a
w.R8=!1
w.y1=null
w.p4=!0
w.rx=this.b
w.ry=-1},
$S:0}
A.ebm.prototype={
$2(d,e){return d[D.o.E(e,0,d.length-1)]},
$S:z+66}
A.edA.prototype={
$0(){var w=this.a
w.p4=!1
w.aK=null
w.iK()},
$S:0}
A.ebk.prototype={
$4(d,e,f,g){var w=null,v=D.c.j(0.07),u=C.m(16),t=C.J(D.bz,D.r,1),s=x.p
return C.aA(w,C.p(w,C.B(C.a([C.d(d,w,w,w,w,w,w,D.n2,w,w,w),D.bc,C.E(C.x(C.a([C.d(e,w,w,w,w,w,w,D.ht,w,w,w),C.d(f,w,w,w,w,w,w,D.hs,w,w,w)],s),D.E,w,D.e,D.i,0,D.p),1),A4.Pc],s),D.m,w,D.e,D.i,0,w,w),D.f,w,w,new C.o(v,w,t,u,w,w,D.n),w,w,w,D.jy,D.bg,w,w,w),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new A.ebl(this.a,g),w,w,w,w,w,w,!1,D.a3)},
$S:1802}
A.ebl.prototype={
$0(){return this.a.czc(this.b)},
$S:0}
A.ebj.prototype={
$0(){var w=this.a
return w.m(new A.ebi(w))},
$S:0}
A.ebi.prototype={
$0(){return this.a.R8=!1},
$S:0}
A.ebS.prototype={
$1(d){return d.c==="outside"},
$S:z+5}
A.edz.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&C.c()
w=t[this.b]
v=u.at.h(0,w.a)
if(v==null||!A.h5t(w.b,v.a))return 0
return v.b.c<2?1:2},
$S:93}
A.eeo.prototype={
$1(d){return d},
$S:117}
A.eaU.prototype={
$1(d){return d},
$S:117}
A.ebP.prototype={
$0(){var w=A.csV(0,null,!1,this.a.a*13+5+this.b.f,!0)
w.aml()
return w},
$S:z+67}
A.ebQ.prototype={
$1(d){return A.ciw(!1,!1,this.a,!1)},
$S:z+41}
A.ebR.prototype={
$1(d){return d.length!==0},
$S:3}
A.ebu.prototype={
$0(){return new A.CA(C.U(x.S,x.N))},
$S:z+69}
A.ebv.prototype={
$1(d){return new A.E_("light",this.a,null)},
$S:z+27}
A.ec4.prototype={
$1(d){return d.c==="outside"},
$S:z+5}
A.ec5.prototype={
$0(){return this.a.y1=this.b},
$S:0}
A.eao.prototype={
$1(d){var w=null
return new C.bM(D.a5,w,w,C.p(w,C.d(d,w,w,w,w,w,w,B.aU1,w,w,w),D.f,w,B.adg,B.b6b,w,w,w,D.ct,D.iq,w,w,w),w)},
$S:136}
A.ean.prototype={
$5$primary(d,e,f,g,h){var w=null,v=h?f:f.j(0.14),u=C.m(16),t=C.J(f,D.r,1),s=C.X(d,h?D.w:f,w,w,w,21)
return C.aA(w,C.p(w,C.B(C.a([s,D.ad,C.d(e,w,w,w,w,w,w,C.l(w,w,h?D.w:D.c,w,w,w,w,w,w,w,w,14.5,w,w,D.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),D.m,w,D.b9,D.i,0,w,w),D.f,w,w,new C.o(v,w,t,u,w,w,D.n),w,48,w,D.jy,w,w,w,w),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,!1,D.a3)},
$4(d,e,f,g){return this.$5$primary(d,e,f,g,!1)},
$S:1803}
A.eap.prototype={
$0(){var w=this.a
return w.m(new A.eam(w))},
$S:0}
A.eam.prototype={
$0(){return this.a.y1=null},
$S:0}
A.eaq.prototype={
$0(){var w,v,u=this.a
u.m(new A.eal(u))
if(!u.aN)u.a2N()
w=u.aC
if(w!=null){v=u.e
v===$&&C.c()
v.aq3(220,0.5,new A.q(w.f,30,w.r))}u.ei("Follow the yellow line on the ground to get there.",!0)},
$S:0}
A.eal.prototype={
$0(){return this.a.y1=null},
$S:0}
A.ear.prototype={
$0(){var w,v=this.a
v.m(new A.eak(v))
if(v.cJ==null){v.cJ=this.b
v.hP=0}w=this.b
v.Sr(w.a)
w=w.c
if(w==="power")w="You are at the house. Walk in and onto the red mat at the breaker panel."
else w=w==="sick"?"You are at the hospital. Walk in and onto the desk.":y.Y
v.ei(w,!0)},
$S:0}
A.eak.prototype={
$0(){return this.a.y1=null},
$S:0}
A.eas.prototype={
$0(){var w=this.a
w.m(new A.eaj(w,this.b))
w.ei("Saved on your waiting list.",!0)},
$S:0}
A.eaj.prototype={
$0(){var w,v=this.a
v.y1=null
w=this.b
if(v.cJ===w)v.cJ=null
v=v.eK
if(!D.d.t(v,w))v.push(w)},
$S:0}
A.eat.prototype={
$0(){var w=this.a
return w.m(new A.eai(w))},
$S:0}
A.eai.prototype={
$0(){return this.a.y2=!1},
$S:0}
A.eaQ.prototype={
$1(d){var w=null
return C.bx(D.ra,new C.a4(w,C.aG(d,w,x.w).w.a.b*0.82,new A.apN(this.a,w),w),D.ap)},
$S:1804}
A.eaR.prototype={
$0(){var w=this.a
w.aA0()
w.iK()},
$S:0}
A.edb.prototype={
$1(d){return new C.e1(new A.ed9(this.a,this.b,this.c),null)},
$S:21}
A.ed9.prototype={
$2(d,e){var w,v,u,t,s=null,r=new A.eda(this.a,e),q=this.b,p=q.a,o=C.d(p.b+" "+q.gaE0(0),s,s,s,s,s,s,R.tj,s,s,s)
p=C.d(p.f,s,s,s,s,s,s,D.x4,s,s,s)
w=C.d("Now: "+q.gUq()+"\nFood "+D.k.V(100-q.b)+"%   Health "+D.k.V(q.c)+"%   Home "+D.k.V(q.d)+"%",s,s,s,s,s,s,B.aUu,s,s,s)
v=this.c
u=x.p
t=C.a([r.$2("\ud83c\udf5e Feed",new A.ed6(v,q))],u)
if(q.e)t.push(r.$3$col("\ud83d\udc8a Medicine",new A.ed7(v,q),D.bq))
if(q.e||q.c<60)t.push(r.$3$col("\ud83c\udfe5 Hospital",new A.ed8(v,q),D.c0))
return C.bn(!0,new C.D(D.bQ,C.x(C.a([o,p,D.Q,w,D.ae,C.bY(D.bG,t,D.br,s,8,8)],u),D.E,s,D.e,D.P,0,D.p),s),!0,!1,D.af,!0,!0)},
$S:86}
A.eda.prototype={
$3$col(d,e,f){var w=null,v=f.j(0.22),u=C.m(12),t=C.J(f,D.r,1)
return C.aA(w,C.p(w,C.d(d,w,w,w,w,w,w,C.l(w,w,f,w,w,w,w,w,w,w,w,13,w,w,D.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),D.f,w,w,new C.o(v,w,t,u,w,w,D.n),w,w,w,w,A0.w5,w,w,w),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new A.ed5(this.a,e,this.b),w,w,w,w,w,w,!1,D.a3)},
$2(d,e){return this.$3$col(d,e,D.aA)},
$S:1805}
A.ed5.prototype={
$0(){var w,v=this.b.$0()
this.c.$1(new A.ed4())
w=this.a
w.m(w.giZ())
w.iL(v)},
$S:0}
A.ed4.prototype={
$0(){},
$S:0}
A.ed6.prototype={
$0(){return this.a.bfd(this.b)},
$S:23}
A.ed7.prototype={
$0(){return this.a.aL9(this.b)},
$S:23}
A.ed8.prototype={
$0(){return this.a.aDI(this.b)},
$S:23}
A.ecV.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=x.p,k=C.a([],l)
for(w=D.d.gaf(B.a45),v=new C.f2(w,new A.ecS()),u=this.a,t=this.b;v.C();){s=w.gS(0)
r=D.c.j(0.08)
q=new C.aP(12,12)
p=u.d
p===$&&C.c()
o=p.d
o===$&&C.c()
n=new C.ay(o[p.e].fx.h(0,t)===s.a?D.aA:D.aX,1,D.r,-1)
k.push(C.aA(m,C.p(m,new C.y(s.c+" "+s.b,m,D.Kt,m,m,m,m,m,m,m,m,m),D.f,m,m,new C.o(r,m,new C.bH(n,n,n,n),new C.bh(q,q,q,q),m,m,D.n),m,m,m,m,D.eB,m,m,m),D.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new A.ecT(u,d,t,s),m,m,m,m,m,m,!1,D.a3))}w=u.d
w===$&&C.c()
v=w.d
v===$&&C.c()
if(v[w.e].fx.h(0,t)!=null)k.push(C.aA(m,C.p(m,B.fOR,D.f,m,m,new C.o(D.ek,m,m,C.m(12),m,m,D.n),m,m,m,m,D.eB,m,m,m),D.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new A.ecU(u,d,t),m,m,m,m,m,m,!1,D.a3))
return C.bn(!0,new C.D(D.bQ,C.x(C.a([B.fKU,D.W,C.bY(D.bG,k,D.br,m,8,8)],l),D.E,m,D.e,D.P,0,D.p),m),!0,!1,D.af,!0,!0)},
$S:27}
A.ecS.prototype={
$1(d){return!(d.d>70||d.e)},
$S:z+26}
A.ecT.prototype={
$0(){var w,v,u,t=this
C.a5(t.b,!1).O(null)
w=t.a
v=t.d
w.m(new A.ecR(w,t.c,v))
u=v.d>0||v.e
v=v.b
w.iL(u?v+" is on and playing NGMY ads. Tap it to watch full screen.":v+" is plugged in and running.")
A.fQ(820,70,0.25,"tri")},
$S:0}
A.ecR.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.d
w===$&&C.c()
w[u.e].fx.n(0,this.b,this.c.a)
v.iK()},
$S:0}
A.ecU.prototype={
$0(){C.a5(this.b,!1).O(null)
var w=this.a
w.m(new A.ecQ(w,this.c))
w.iL("Unplugged.")},
$S:0}
A.ecQ.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.d
w===$&&C.c()
w[u.e].fx.W(0,this.b)
v.iK()},
$S:0}
A.ee8.prototype={
$1(d){return new C.e1(new A.ee6(this.a),null)},
$S:21}
A.ee6.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.a,k=new A.ee7(l,e),j=l.d
j===$&&C.c()
w=j.d
w===$&&C.c()
j=C.d("TV in "+w[j.e].b,m,m,m,m,m,m,D.de,m,m,m)
w=x.p
v=C.a([],w)
for(u=D.d.gaf(B.a45),t=new C.f2(u,new A.ee_());t.C();){s=u.gS(0)
r=s.b
q=l.d
p=q.d
p===$&&C.c()
q=p[q.e].k1===s.a?D.aA:D.eP
v.push(k.$3$color(r,new A.ee0(l,s),q))}j=C.a([j,D.W,C.bY(D.bG,v,D.br,m,8,8)],w)
if(l.d.a.length!==0){v=C.a([],w)
for(o=0;o<3;++o){u={}
t=B.d7O[o]
u.a=null
n=t.a
u.a=n
s=l.d
r=s.d
r===$&&C.c()
s=r[s.e].p1===n?D.aA:D.eP
v.push(k.$3$color(t.b,new A.ee1(u,l),s))}D.d.v(j,C.a([B.fxS,D.am,C.bY(D.bG,v,D.br,m,8,8)],w))}j.push(D.W)
w=C.a([],w)
v=l.d
u=v.d
u===$&&C.c()
v=u[v.e]
if(v.k1!=null){v=v.p2?"\u23fb Turn this TV off":"\u23fb Turn this TV on"
w.push(k.$2(v,new A.ee2(l)))}v=l.d
u=v.d
u===$&&C.c()
if(u[v.e].k1!=null&&v.a.length===0)w.push(k.$3$color("\ud83d\uddd1 Take it down",new A.ee3(l),D.ek))
if(l.d.a.length===0)w.push(k.$3$color("\ud83d\udcfa A TV in every room, all on",new A.ee4(l),D.cT))
if(l.d.a.length===0)w.push(k.$3$color("\u23fb All TVs off",new A.ee5(l),D.bn))
j.push(C.bY(D.bG,w,D.br,m,8,8))
return C.bn(!0,new C.D(D.bQ,C.x(j,D.E,m,D.e,D.P,0,D.p),m),!0,!1,D.af,!0,!0)},
$S:86}
A.ee7.prototype={
$3$color(d,e,f){var w=null,v=f.j(0.4),u=C.m(12),t=C.J(f,D.r,1)
return C.aA(w,C.p(w,C.d(d,w,w,w,w,w,w,U.Am,w,w,w),D.f,w,w,new C.o(v,w,t,u,w,w,D.n),w,w,w,w,A0.w5,w,w,w),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new A.edZ(this.a,e,this.b),w,w,w,w,w,w,!1,D.a3)},
$2(d,e){return this.$3$color(d,e,D.eP)},
$S:1806}
A.edZ.prototype={
$0(){this.b.$0()
this.c.$1(new A.edY())
var w=this.a
w.m(w.giZ())},
$S:0}
A.edY.prototype={
$0(){},
$S:0}
A.ee_.prototype={
$1(d){return d.d>0||d.e},
$S:z+26}
A.ee0.prototype={
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
A.ee1.prototype={
$0(){var w,v=this.b.d
v===$&&C.c()
w=v.d
w===$&&C.c()
return w[v.e].p1=this.a.a},
$S:0}
A.ee2.prototype={
$0(){var w,v=this.a.d
v===$&&C.c()
w=v.d
w===$&&C.c()
v=w[v.e]
return v.p2=!v.p2},
$S:0}
A.ee3.prototype={
$0(){var w,v=this.a.d
v===$&&C.c()
w=v.d
w===$&&C.c()
v=w[v.e]
v.k1=null
v.p2=!1},
$S:0}
A.ee4.prototype={
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
A.ee5.prototype={
$0(){var w,v,u=this.a.d
u===$&&C.c()
u=u.gqT()
w=u.length
v=0
for(;v<w;++v)u[v].p2=!1},
$S:0}
A.edV.prototype={
$1(d){return new C.e1(new A.edT(this.a),null)},
$S:21}
A.edT.prototype={
$2(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new A.edU(),e=C.as(C.p(g,g,D.f,g,g,new C.o(D.aX,g,g,C.m(2),g,g,D.n),g,4,g,g,g,g,g,42),g,g,g),d=x.p,a0=C.B(C.a([C.p(g,H.aq9,D.f,g,g,new C.o(g,g,g,C.m(16),g,B.c2Y,D.n),g,52,g,g,g,g,g,52),D.es,B.bFK],d),D.m,g,D.e,D.i,0,g,g),a1=f.$1("Who walks the house"),a2=C.a([],d)
for(w=B.aHE.gdW(B.aHE),w=w.gaf(w),v=x.s,u=x.N,t=x.ec,s=this.a;w.C();){r=w.gS(w)
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
j.od(m,1,g,u)
j=j.aG(0," ")
p=$.ahK===p?D.aJ:D.c
a2.push(new C.D(D.Gl,C.aA(g,C.cY(g,C.x(C.a([new C.qz(new C.y(k,g,D.pG,g,g,g,g,g,g,g,g,g),n,g,20,g),D.am,new C.y(j,g,new C.F(!0,p,g,g,g,g,12.5,D.H,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g),g,g,g,g,D.a1,g,1,g,g)],d),D.m,g,D.b9,D.i,0,D.p),g,g,D.b5,new C.o(q,g,new C.bH(l,l,l,l),new C.bh(o,o,o,o),g,g,D.n),D.h4,g,g,g,g,D.GC,g,g,92),D.y,!1,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,new A.edP(s,a4,r),g,g,g,g,g,g,!1,D.a3),g))}a2=C.cl(a2,g,g,g,g,g,D.aM,!1)
w=f.$1("How long")
v=D.c.j(0.06)
u=C.m(16)
t=C.a([],d)
for(i=0;i<5;++i){h=B.dtc[i]
r=s.db===h
q=r?D.aA:D.L
p=new C.aP(12,12)
if(h<60)o=""+h+" seconds"
else o=h===60?"1 minute":""+(h/60|0)+" minutes"
r=r?D.w:D.ac
t.push(new C.by(1,D.ba,C.aA(g,C.cY(g,new C.cf(D.A,g,g,new C.y(o,g,new C.F(!0,r,g,g,g,g,12.5,D.u,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g),g,D.K,g,g,g,g,g,g,g),g),g,g,D.b5,new C.o(q,g,g,new C.bh(p,p,p,p),g,g,D.n),D.h4,g,g,g,g,D.rC,g,g,g),D.y,!1,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,new A.edQ(s,a4,h),g,g,g,g,g,g,!1,D.a3),g))}v=C.p(g,C.B(t,D.m,g,D.e,D.i,0,g,g),D.f,g,g,new C.o(v,g,g,u,g,g,D.n),g,g,g,g,D.ev,g,g,g)
u=C.aA(g,C.p(g,B.f3Z,D.f,g,g,new C.o(g,g,g,C.m(18),C.a([new C.ac(0,D.G,D.ax.j(0.35),D.cy,16)],x.V),B.c3W,D.n),g,56,g,g,g,g,g,g),D.y,!1,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,new A.edR(s,a3),g,g,g,g,g,g,!1,D.a3)
t=D.c.j(0.06)
r=C.m(18)
return C.p(g,C.bn(!0,C.ch(C.x(C.a([e,D.aQ,a0,a1,new C.a4(g,96,a2,g),w,v,D.dT,u,D.ae,C.aA(g,C.p(g,B.f3T,D.f,g,g,new C.o(t,g,C.J(D.bz,D.r,1),r,g,g,D.n),g,g,g,g,D.bD,g,g,g),D.y,!1,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,new A.edS(s,a3),g,g,g,g,g,g,!1,D.a3)],d),D.E,g,D.e,D.P,0,D.p),D.t,g,D.y,g,D.alq,g,g,D.ah),!0,!1,D.af,!0,!0),D.f,g,g,B.b5f,g,g,g,g,g,g,g,g)},
$S:164}
A.edU.prototype={
$1(d){var w=null
return new C.D(H.ak9,C.d(d.toUpperCase(),w,w,w,w,w,w,Q.tm,w,w,w),w)},
$S:136}
A.edP.prototype={
$0(){var w=this.c
this.b.$1(new A.edN(w))
A.bU5(w.a)
this.a.m(new A.edO())},
$S:0}
A.edN.prototype={
$0(){return $.ahK=this.a.a},
$S:0}
A.edO.prototype={
$0(){},
$S:0}
A.edQ.prototype={
$0(){return this.b.$1(new A.edM(this.a,this.c))},
$S:0}
A.edM.prototype={
$0(){return this.a.db=this.b},
$S:0}
A.edR.prototype={
$0(){C.a5(this.b,!1).O(null)
var w=this.a
w.czx(w.db)},
$S:0}
A.edS.prototype={
$0(){C.a5(this.b,!1).O(null)
this.a.b7W(45,!0)},
$S:0}
A.edw.prototype={
$0(){var w=this.a,v=w.d
v===$&&C.c()
v.e=this.b
w.ax=null
w.iK()},
$S:0}
A.edx.prototype={
$1(d){return this.a.cDM()},
$S:11}
A.edy.prototype={
$0(){},
$S:0}
A.edW.prototype={
$0(){return this.a.dy=this.b.as},
$S:0}
A.edL.prototype={
$0(){var w=this.b
w.iK()
w.aB=this.a.a;++w.aF},
$S:0}
A.edD.prototype={
$0(){var w=this.a
w.cx=null
w.dy=""},
$S:0}
A.edE.prototype={
$0(){},
$S:0}
A.edv.prototype={
$0(){},
$S:0}
A.edC.prototype={
$0(){},
$S:0}
A.eej.prototype={
$0(){return this.a.id=!0},
$S:0}
A.eek.prototype={
$0(){return this.a.k2=!0},
$S:0}
A.eel.prototype={
$0(){return this.a.k3=!0},
$S:0}
A.eem.prototype={
$1(d){return B.aRc.t(0,d.b)},
$S:z+4}
A.eec.prototype={
$1(d){var w
if(d.b==="gasstation"){w=this.a
w=Math.sqrt(Math.pow(w.f-d.c,2)+Math.pow(w.r-d.d,2))<135}else w=!1
return w},
$S:z+4}
A.eed.prototype={
$0(){return this.a.aPH(B.aRt)},
$S:0}
A.eee.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.d
w===$&&C.c()
D.d.W(w[u.e].x,this.b)
v.al="crate"
v.m(v.giZ())
v.ei("You picked up a crate. Carry it to the shop and walk onto the green mat by the counter to sell it at the market.",!0)
A.fQ(700,60,0.25,"tri")
return null},
$S:0}
A.eef.prototype={
$0(){return this.a.abr(this.b)},
$S:0}
A.eeg.prototype={
$0(){return this.a.bR_(this.b)},
$S:0}
A.eeh.prototype={
$0(){return this.a.bTD(this.b)},
$S:0}
A.eei.prototype={
$0(){return this.b.cL=this.a.a},
$S:0}
A.ebt.prototype={
$0(){},
$S:0}
A.ed1.prototype={
$1(d){var w=this.a,v=this.b
return w===0?v.$1(d):new A.aK0(w,v.$1(d),null)},
$S:39}
A.ec9.prototype={
$0(){var w=this.a
w.y1=null
w.y2=!0},
$S:0}
A.ec6.prototype={
$1(d){return d.c==="outside"},
$S:z+5}
A.ec7.prototype={
$1(d){return d.b==="hospital"},
$S:z+4}
A.ec8.prototype={
$1(d){return!d.e&&d.r<0},
$S:z+18}
A.ebT.prototype={
$1(d){return d.c==="outside"},
$S:z+5}
A.ebU.prototype={
$1(d){return d.a.b===this.a.d},
$S:z+18}
A.edp.prototype={
$0(){},
$S:0}
A.ebN.prototype={
$0(){return this.a.k3=!0},
$S:0}
A.edd.prototype={
$1(d){return d.b==="hospital"},
$S:z+4}
A.ede.prototype={
$0(){return this.a.go=!1},
$S:0}
A.edq.prototype={
$1(d){var w
if(d>0&&this.a.c!=null){w=this.a.ghE()
if(w!=null)w.r+=d}},
$S:1807}
A.edr.prototype={
$0(){var w=this.a
w.iK()
w.aex(!0)},
$S:0}
A.eds.prototype={
$1(d){return this.a.c8u()},
$S:11}
A.ec_.prototype={
$1(d){return!D.d.b3(this.a.d,new A.ebZ(d))},
$S:34}
A.ebZ.prototype={
$1(d){return d.a===this.a},
$S:z+19}
A.ec0.prototype={
$1(d){return d.a===this.a.a},
$S:z+19}
A.edt.prototype={
$1(d){var w,v,u=this.a
if(u.c==null)return
w=++u.T
if(w>36){v=u.bE
u.B5()
if(v!=null)u.aC4("Nobody answered the phone")
return}if(w%8<4){A.fQ((w&1)===0?1046:1318,160,0.3,"sine")
if(D.o.F(u.T,8)===0)C.Tv()}},
$S:11}
A.edu.prototype={
$0(){},
$S:0}
A.edB.prototype={
$0(){var w=this.a
w.bE=w.bD=null},
$S:0}
A.eco.prototype={
$4$col$on(d,e,f,g){var w=null,v=g?f.j(0.45):D.w.j(0.62),u=C.m(18),t=C.J(f,D.r,1.8)
return C.aA(w,C.p(w,C.d(d,w,w,w,w,w,w,D.j4,w,w,w),D.f,w,w,new C.o(v,w,t,u,w,w,D.n),w,w,w,D.a_U,B.bF_,w,w,w),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new A.ecp(e),w,w,w,w,!1,D.a3)},
$2(d,e){return this.$4$col$on(d,e,D.be,!1)},
$3$col(d,e,f){return this.$4$col$on(d,e,f,!1)},
$3$on(d,e,f){return this.$4$col$on(d,e,D.be,f)},
$S:1808}
A.ecp.prototype={
$1(d){return this.a.$0()},
$S:22}
A.ecx.prototype={
$7$about$avatar$glow$onAnswer$onDecline$onLater$who(d,e,f,g,h,i,j){var w=null,v=new A.ecy(),u=Math.min(this.a-28,340),t=C.m(30),s=C.J(D.aX,D.r,2),r=C.a([new C.ac(0,D.G,f.j(0.35),D.I,24)],x.V),q=x.p,p=C.B(C.a([e,D.es,C.E(C.x(C.a([B.fMm,D.bF,C.d(j,w,1,D.a1,w,w,w,D.a9O,w,w,w),D.bF,C.d(d,w,2,D.a1,w,w,w,M.aal,w,w,w)],q),D.E,w,D.e,D.P,0,D.p),1)],q),D.m,w,D.e,D.i,0,w,w),o=C.a([v.$4(B.bMG,"Decline",D.ax,h)],q)
if(i!=null)o.push(v.$4(D.jY,"Later",D.aA,i))
o.push(v.$5$big(D.iH,"Answer",D.bf,g,!0))
return C.p(w,C.x(C.a([p,D.aB,C.B(o,D.E,w,D.e,D.i,0,w,w)],q),D.ak,w,D.e,D.P,0,D.p),D.f,w,w,new C.o(w,w,s,t,r,B.zm,D.n),w,w,w,D.d1,Ai.a_A,w,w,u)},
$6$about$avatar$glow$onAnswer$onDecline$who(d,e,f,g,h,i){return this.$7$about$avatar$glow$onAnswer$onDecline$onLater$who(d,e,f,g,h,null,i)},
$S:1809}
A.ecy.prototype={
$5$big(d,e,f,g,h){var w=null,v=h?58:50,u=h?58:50
return C.E(C.aA(w,C.x(C.a([C.p(w,C.X(d,D.c,w,w,w,h?30:26),D.f,w,w,new C.o(f,w,w,w,w,w,D.a6),w,u,w,w,w,w,w,v),D.fG,C.d(e,w,w,w,w,w,w,N.Aq,w,w,w)],x.p),D.m,w,D.e,D.P,0,D.p),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new A.ecz(g),w,w,w,w,!1,D.a3),1)},
$4(d,e,f,g){return this.$5$big(d,e,f,g,!1)},
$S:1810}
A.ecz.prototype={
$1(d){return this.a.$0()},
$S:22}
A.ecr.prototype={
$0(){var w=this.a
w.B5()
w.aC4("You turned the call down")},
$S:0}
A.ecs.prototype={
$0(){var w=this.a
w.B5()
w.eK.push(this.b)
w.ei("Saved on your waiting list. You will be taken there when you are free.",!0)},
$S:0}
A.ecq.prototype={
$0(){var w=this.b,v=this.a
v.B5()
v.cJ=w
v.hP=0
v.axh(w)},
$S:0}
A.ect.prototype={
$0(){var w=this.a
w.B5()
w.cC6(this.b)},
$S:0}
A.ecw.prototype={
$2(d,e){var w=this.a
w.b2=d
w.be=e},
$S:199}
A.ecu.prototype={
$0(){var w=this.a
return w.m(new A.ecn(w))},
$S:0}
A.ecn.prototype={
$0(){var w=this.a
return w.bi=!w.bi},
$S:0}
A.ecv.prototype={
$0(){var w=this.a,v=w.aK
if(v==null)v=null
else{v=v.at
v===$&&C.c()}w=v==null?w.aC:v
if(w!=null)if(w.Q<=0.01)w.as=160
return null},
$S:0}
A.eca.prototype={
$1(d){var w=this.a,v=w.p4
w=w.RG
return v==="ptrap"?new A.a9I(w,null):new A.a59(w,null)},
$S:1811}
A.ecb.prototype={
$1(d){var w=this.a
return new A.E_(w.p4,w.R8,null)},
$S:z+27}
A.een.prototype={
$1(d){var w=this.a
return new A.E_(w.a,w.c,null)},
$S:z+27}
A.ecd.prototype={
$1(d){return A.ciw(!1,!1,this.a.CW,!1)},
$S:z+41}
A.ecc.prototype={
$1(d){return new A.Wg(!1,this.a.fr,null)},
$S:z+71}
A.e9Q.prototype={
$1(d){var w,v,u,t,s,r,q,p=null,o=this.a,n=o.d
n===$&&C.c()
w=n.d
w===$&&C.c()
n=C.d("Add to "+w[n.e].b,p,p,p,p,p,p,D.de,p,p,p)
w=x.p
v=C.a([],w)
for(u=0;u<10;++u){t={}
s=B.d2F[u]
t.a=null
t.a=s.a
r=new C.aP(12,12)
q=new C.ay(D.b_,1,D.r,-1)
v.push(C.aA(p,C.p(p,new C.y(s.b,p,D.to,p,p,p,p,p,p,p,p,p),D.f,p,p,new C.o(D.eP.j(0.4),p,new C.bH(q,q,q,q),new C.bh(r,r,r,r),p,p,D.n),p,p,p,p,A0.w5,p,p,p),D.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new A.e9P(t,o,d),p,p,p,p,p,p,!1,D.a3))}return C.bn(!0,new C.D(D.bQ,C.x(C.a([n,D.au,B.fTp,D.ae,C.bY(D.bG,v,D.br,p,8,8)],w),D.E,p,D.e,D.P,0,D.p),p),!0,!1,D.af,!0,!0)},
$S:27}
A.e9P.prototype={
$0(){C.a5(this.c,!1).O(null)
this.b.bBB(this.a.a)},
$S:0}
A.e9K.prototype={
$1(d){return d.b==="back"},
$S:z+21}
A.e9L.prototype={
$1(d){return d.b==="back"},
$S:z+21}
A.e9M.prototype={
$1(d){return Math.abs(d-this.a)>13},
$S:120}
A.e9N.prototype={
$0(){var w=this
w.b.id.push(new A.aWw(w.c,w.d,new A.CA(C.U(x.S,x.N))))
w.a.iK()},
$S:0}
A.ec3.prototype={
$0(){var w,v=this,u=v.b,t=u.c,s=v.c,r=v.d
u.c=t+(s?D.o.gVW(r)*40:r)
t=u.d
r=v.e
u.d=t+(s?D.o.gVW(r)*40:r)
t=v.a
r=t.d
r===$&&C.c()
w=r.d
w===$&&C.c()
w[r.e].a48(0,u)
t.iK()},
$S:0}
A.edX.prototype={
$0(){var w,v,u,t=this.b
t.e=D.o.F(t.e+1,4)
w=this.a
v=w.d
v===$&&C.c()
u=v.d
u===$&&C.c()
u[v.e].a48(0,t)
w.iK()},
$S:0}
A.ed2.prototype={
$0(){var w=this.b
w.f=(w.f+1)%6
this.a.iK()},
$S:0}
A.ed3.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.d
w===$&&C.c()
D.d.W(w[u.e].x,this.b)
v.at=v.Q=0
v.iK()},
$S:0}
A.e9O.prototype={
$0(){var w=this.a,v=this.b.a
w.Q=v
w.at=100+v
w.iK()},
$S:0}
A.eb_.prototype={
$0(){return this.a.aey(-6,0)},
$S:0}
A.eb0.prototype={
$0(){return this.a.aey(6,0)},
$S:0}
A.eb1.prototype={
$0(){return this.a.aey(0,-6)},
$S:0}
A.eb2.prototype={
$0(){return this.a.aey(0,6)},
$S:0}
A.eb3.prototype={
$0(){return this.a.bBE(this.b.a)},
$S:0}
A.eb4.prototype={
$0(){var w=this.a
return w.m(new A.eaZ(w))},
$S:0}
A.eaZ.prototype={
$0(){return this.a.as=-1},
$S:0}
A.eb5.prototype={
$0(){var w=this.a
w.m(new A.eaY(w,this.b))},
$S:0}
A.eaY.prototype={
$0(){var w,v=this.a,u=v.as,t=this.b,s=v.d
if(u<0){s===$&&C.c()
u=s.d
u===$&&C.c()
D.d.hu(u[s.e].z,0,3,t)}else{s===$&&C.c()
w=s.d
w===$&&C.c()
w[s.e].z[u]=t}v.iK()},
$S:0}
A.eb6.prototype={
$0(){var w=this.a
w.m(new A.eaX(w,this.b))},
$S:0}
A.eaX.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.d
w===$&&C.c()
w[u.e].Q=this.b
v.iK()},
$S:0}
A.eb7.prototype={
$0(){var w=this.a
w.m(new A.eaW(w))},
$S:0}
A.eaW.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.d
w===$&&C.c()
u=w[u.e]
u.go=u.go==="fan"?"light":"fan"
v.iK()},
$S:0}
A.eb8.prototype={
$0(){var w=this.a
w.m(new A.eaV(w,this.b))},
$S:0}
A.eaV.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.d
w===$&&C.c()
w[u.e].as=this.b
v.iK()},
$S:0}
A.eb9.prototype={
$0(){return this.a.AB(this.b.d)},
$S:0}
A.eeq.prototype={
$0(){return C.a5(this.a,!1).ik()},
$S:0}
A.ees.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.eep(w))},
$S:0}
A.eep.prototype={
$0(){return this.a.aB=null},
$S:0}
A.eer.prototype={
$3(d,e,f){var w=null
return C.db(C.cpu(D.A,w,w,w,w,D.ci,D.vF,w,this.a.aB,!1,!1,!1,w,D.pn,1,w),e)},
$S:100}
A.eaC.prototype={
$0(){return this.a.A4("calls")},
$S:0}
A.eaD.prototype={
$0(){return this.a.A4("hospital")},
$S:0}
A.eaE.prototype={
$0(){return this.a.A4("shop")},
$S:0}
A.eaI.prototype={
$0(){return this.a.A4("people")},
$S:0}
A.eaJ.prototype={
$0(){return this.a.AB(10)},
$S:0}
A.eaK.prototype={
$0(){var w=this.a
return w.m(new A.eaB(w))},
$S:0}
A.eaB.prototype={
$0(){return this.a.k2=!0},
$S:0}
A.eaL.prototype={
$0(){var w=this.a
return w.m(new A.eaA(w))},
$S:0}
A.eaA.prototype={
$0(){return this.a.k3=!0},
$S:0}
A.eaM.prototype={
$0(){var w=this.a
return w.m(new A.eaz(w))},
$S:0}
A.eaz.prototype={
$0(){var w=this.a
return w.y1=w.cJ},
$S:0}
A.eaN.prototype={
$0(){var w=this.a,v=w.eK.length,u=v===1?"":"s"
return w.ei(""+v+" job"+u+" waiting. You are taken to the next one when you finish this one.",!0)},
$S:0}
A.eaO.prototype={
$0(){var w=this.a
return w.m(new A.eay(w))},
$S:0}
A.eay.prototype={
$0(){return this.a.go=!0},
$S:0}
A.eaP.prototype={
$0(){var w=this.a
return w.p4?w.a2Q():w.m(new A.eax(w))},
$S:0}
A.eax.prototype={
$0(){return this.a.R8=!0},
$S:0}
A.eaF.prototype={
$0(){var w=this.a
return w.m(new A.eaw(w))},
$S:0}
A.eaw.prototype={
$0(){var w=this.a
return w.ha=!w.ha},
$S:0}
A.eaG.prototype={
$0(){var w=this.a
return w.m(new A.eav(w))},
$S:0}
A.eav.prototype={
$0(){return this.a.ai=!0},
$S:0}
A.eaH.prototype={
$0(){var w=this.a
return w.m(new A.eau(w))},
$S:0}
A.eau.prototype={
$0(){var w=this.a
return w.y=!w.y},
$S:0}
A.e9X.prototype={
$0(){var w=this.a.ghE()
w=w==null?null:w.r
return w==null?0:w},
$S:93}
A.eaa.prototype={
$0(){return this.a.y3()},
$S:0}
A.ea9.prototype={
$1(d){return d<=5},
$S:34}
A.e9Y.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n=null,m=this.a,l=m.aK,k=m.CW
if(l!=null){m=k.gig()
k=B.aHF.h(0,$.ahK)
if(k==null)k=B.a7U
k=l.cOD(m/1000,k)
m=k}else{l=m.d
l===$&&C.c()
w=l.d
w===$&&C.c()
l=w[l.e]
w=k.gig()
v=m.cmo()
u=B.aHF.h(0,$.ahK)
if(u==null)u=B.a7U
t=m.fr
s=m.r
r=m.bOP()
if(m.al==null){q=m.gpn()
if(q==null)q=n
else{q=q.x
q=(q==null?n:q.r)===!0}q=q===!0}else q=!0
p=m.d
o=p.d
o===$&&C.c()
if(o[p.e].c!=="outside")k=B.Ih
else{p=m.gpn()
p=p==null?n:p.amz(k.gig()/1000)
if(p==null)p=B.Ih
p=C.C(p,x.hg)
o=m.gKx()
k=o==null?n:o.amz(k.gig()/1000)
D.d.v(p,k==null?B.Ih:k)
k=p}l=C.C(A.ibM(l,w/1000,q,k,r,s,v,u,t),x.e)
k=m.d
w=k.d
w===$&&C.c()
if(w[k.e].c==="outside")D.d.v(l,m.cDU())
k=!0
if(m.cJ==null){w=m.gpn()
if((w==null?n:w.x)==null){k=m.gKx()
k=(k==null?n:k.f)!=null}}D.d.v(l,k?m.csJ():B.Ii)
m=l}return m},
$S:z+10}
A.e9Z.prototype={
$1(d){var w,v,u=this.a
if(u.aK==null){w=u.d
w===$&&C.c()
v=w.d
v===$&&C.c()
w=v[w.e].c==="outside"}else w=!1
return w?A.imC(u.CW.gig()/1000):B.wG},
$S:z+74}
A.eab.prototype={
$3(d,e,f){var w=null,v=D.dG.j(0.82),u=C.m(18),t=C.J(D.b8,D.r,2)
return C.p(w,C.d(e,w,w,w,w,w,w,B.fvY,w,w,w),D.f,w,w,new C.o(v,w,t,u,w,w,D.n),w,w,w,w,B.bDc,w,w,w)},
$S:1812}
A.ea1.prototype={
$0(){var w=this.a,v=w.d
v===$&&C.c()
return v.a.length!==0?w.Ep():w.cnE(this.b)},
$S:0}
A.eac.prototype={
$0(){var w=this.a
w.m(new A.e9W(w))
w.y3()},
$S:0}
A.e9W.prototype={
$0(){var w=this.a
w.x=!w.x
w.iK()},
$S:0}
A.ead.prototype={
$0(){var w=this.a
return w.cx!=null?w.Sd():w.cDL()},
$S:0}
A.eae.prototype={
$0(){var w=this.a
w.m(new A.e9V(w))
w.y3()
if(w.z)w.iL("Drag to turn all the way round. Double tap a spot on the floor to walk there.")},
$S:0}
A.e9V.prototype={
$0(){var w=this.a,v=!w.z
w.z=v
if(v&&w.cx!=null)w.Sd()
w.iK()},
$S:0}
A.eaf.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.d
w===$&&C.c()
return v.AB(w[u.e].c!=="outside"?11:10)},
$S:0}
A.eag.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.d
w===$&&C.c()
if(w[u.e].c!=="outside")v.AB(11)
v.A4("calls")},
$S:0}
A.ea_.prototype={
$0(){var w=this.a
return w.m(new A.e9U(w))},
$S:0}
A.e9U.prototype={
$0(){var w=this.a,v=!w.w
w.w=v
if(v)w.iL("Voltage tester in your hand: tap an outlet, a switch or the light.")},
$S:0}
A.ea0.prototype={
$0(){var w=this.a
return w.m(new A.e9T(w))},
$S:0}
A.e9T.prototype={
$0(){var w=this.a
return w.y=!w.y},
$S:0}
A.ea2.prototype={
$0(){return this.a.PV("look")},
$S:0}
A.ea3.prototype={
$0(){return this.a.PV("furniture")},
$S:0}
A.ea4.prototype={
$0(){return this.a.PV("walls")},
$S:0}
A.ea5.prototype={
$0(){return this.a.PV("floor")},
$S:0}
A.ea6.prototype={
$0(){return this.a.PV("ceiling")},
$S:0}
A.ea7.prototype={
$0(){return this.a.PV("doors")},
$S:0}
A.ea8.prototype={
$0(){return C.a5(this.a,!1).cc(C.eh(new A.e9S(),!1,null,x.H))},
$S:0}
A.e9S.prototype={
$1(d){return B.aIF},
$S:z+75}
A.ed0.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=C.aG(d,m,x.w).w,k=this.a,j=k.d
j===$&&C.c()
w=x.p
j=C.a([B.fHu,D.au,C.d("Wiring "+j.gd_h()+"/"+k.d.gqT().length+" \xb7 Plumbing "+k.d.gcWV()+"/"+k.d.gcWU(),m,m,m,m,m,m,B.Kf,m,m,m),D.W],w)
for(v=k.d.gqT(),u=v.length,t=0;t<v.length;v.length===u||(0,C.L)(v),++t){s=v[t]
r=D.c.j(0.05)
q=new C.aP(12,12)
p=new C.ay(s.gkO()&&s.gjR()?D.be.j(0.5):D.bz,1,D.r,-1)
if(s.gkO()&&s.gjR())o="\u2705 finished"
else{o=s.gkO()?"":"\u26a1 wiring  "
o+=s.gjR()?"":"\ud83d\udeb0 plumbing"}n=s.gkO()&&s.gjR()?D.ep:D.ac
j.push(C.aA(m,C.p(m,new C.ca(D.aM,D.e,D.i,D.m,m,D.p,m,0,C.a([new C.by(1,D.ba,new C.y(s.b,m,B.aUZ,m,m,m,m,m,m,m,m,m),m),new C.y(o,m,new C.F(!0,n,m,m,m,m,12,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m,m,m,m,m,m,m)],w),m),D.f,m,m,new C.o(r,m,new C.bH(p,p,p,p),new C.bh(q,q,q,q),m,m,D.n),m,m,m,D.eI,D.bT,m,m,m),D.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new A.ecY(k,d,s),m,m,m,m,m,m,!1,D.a3))}j.push(D.Q)
j.push(C.dT(B.fEr,new A.ecZ(k,d),m))
j.push(D.Q)
j.push(C.bI(B.fAA,m,new A.ed_(k,d),m))
return C.bn(!0,new C.cT(new C.aZ(0,1/0,0,l.a.b*0.75),C.cl(j,m,m,D.bQ,m,m,D.ah,!0),m),!0,!1,D.af,!0,!0)},
$S:27}
A.ecY.prototype={
$0(){C.a5(this.b,!1).O(null)
this.a.AB(this.c.a)},
$S:0}
A.ecZ.prototype={
$0(){C.a5(this.b,!1).O(null)
var w=this.a
w.m(new A.ecX(w))
w.iL("Every room needs its wiring and plumbing again. Wire the whole house from the start.")},
$S:0}
A.ecX.prototype={
$0(){var w=this.a,v=w.d
v===$&&C.c()
v.cTw()
w.iK()},
$S:0}
A.ed_.prototype={
$0(){C.a5(this.b,!1).O(null)
$.Ec=A.aWC(D.o.F(Date.now(),1e5))
var w=this.a
w.m(new A.ecW(w))
w.aex(!0)},
$S:0}
A.ecW.prototype={
$0(){var w=this.a,v=$.Ec
v.toString
w.d=v
w.r="look"
w.Q=0
w.as=-1
w.at=0
w.iK()},
$S:0}
A.dvw.prototype={
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
A.f7A.prototype={
$0(){return this.b.d=this.a.a},
$S:0}
A.f7z.prototype={
$0(){return this.a.d=null},
$S:0}
A.f7C.prototype={
$1(d){return this.a.b_l(d.geZ())},
$S:68}
A.f7D.prototype={
$1(d){return this.a.b_l(d.geZ())},
$S:192}
A.f7E.prototype={
$1(d){return this.a.b_k()},
$S:110}
A.f7B.prototype={
$1(d){return this.a.b_k()},
$S:134}
A.fA1.prototype={
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
A.fA8.prototype={
$3$note(d,e,f){var w=this.a
w.a.push(d)
w.b.push(e)
if(f!=null)w.c.push(f)},
$2(d,e){return this.$3$note(d,e,null)},
$S:z+76}
A.fA3.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m,l,k
for(w=this.a.x,v=w.length,u=d.a,t=d.c,s=d.b,r=0;r<v;++r){q=w[r]
p=q.b
if(p!=="billboard"&&p!=="cornersign"&&p!=="townsign"&&p!=="adboard")continue
A:{if("townsign"===p){p=B.a8n
break A}if("cornersign"===p){p=B.a8p
break A}if("adboard"===p){p=B.a8m
break A}p=B.a8o
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
A.fA9.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
for(w=this.a.x,v=w.length,u=0;u<=1;u+=0.02){t=A.pB(d,e,u)
for(s=t.a,r=t.c,q=t.b,p=0;p<v;++p){o=w[p]
n=o.b
if(n!=="billboard"&&n!=="cornersign"&&n!=="townsign"&&n!=="adboard")continue
A:{if("townsign"===n){n=B.a8n
break A}if("cornersign"===n){n=B.a8p
break A}if("adboard"===n){n=B.a8m
break A}n=B.a8o
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
A.fA2.prototype={
$2(d,e){return this.a.$2(d,e)!=null},
$S:z+78}
A.fA_.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this.a.$2(d,e)
if(i==null)return null
w=i.b
A:{if("townsign"===w){v=B.a8n
break A}if("cornersign"===w){v=B.a8p
break A}if("adboard"===w){v=B.a8m
break A}v=B.a8o
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
n=new A.fA0(d,e)
o=this.b
k=!o.$1(m)
j=!o.$1(l)
if(k&&j)return n.$1(m)<=n.$1(l)?m:l
if(k)v=m
else v=j?l:null
return v},
$S:z+79}
A.fA0.prototype={
$1(d){return d.aE(0,this.a).guY()+this.b.aE(0,d).guY()},
$S:z+80}
A.fzU.prototype={
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
A.fA5.prototype={
$7$note(a2,a3,a4,a5,a6,a7,a8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=A.hvy(a2),a1=new A.q(a2.c,a4,a2.d)
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
A.fA7.prototype={
$1(d){var w=d.b,v=this.a
switch(w){case"townsign":v.$7$note(d,255,250,430,520,60,"The biggest billboard in the city: NGMY Town")
break
case"cornersign":v.$7$note(d,115,120,210,260,50,"A corner billboard: NGMY Town")
break
case"adboard":v.$7$note(d,160,142,330,410,55,"A big NGMY ad billboard")
break
case"tower":v.$7$note(d,430,(w==="hq"?278:A.huS(B.zp[d.f]))+40,150,210,20,"A tower with NGMY ad boards")
break
case"hq":v.$7$note(d,440,312,190,250,20,"The NGMY company building")
break
default:v.$7$note(d,75,48,130,175,45,"An NGMY billboard")}},
$S:z+29}
A.fA6.prototype={
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
A.fA4.prototype={
$1(d){var w
this.b.$0()
w=x.o
this.c.push(new A.Mn(C.a([B.hdV,B.h_1,B.h14],w),C.a([B.her,B.h0i,B.h3I],w),55,8,"Inside the "+B.hE.h(0,d.b).a.toLowerCase(),d,!1,null,null))
this.a.d=!0},
$S:z+29}
A.fzV.prototype={
$1(d){return d.b==="townsign"},
$S:z+4}
A.fzW.prototype={
$2(d,e){var w=this.a
return D.k.aL(Math.pow(d.c-w.a.a,2)+Math.pow(d.d-w.a.c,2),Math.pow(e.c-w.a.a,2)+Math.pow(e.d-w.a.c,2))},
$S:z+17}
A.fzT.prototype={
$1(d){return Math.atan2(d.d-1000,d.c)},
$S:z+84}
A.fzX.prototype={
$2(d,e){var w=this.a
return J.Dn(w.$1(d),w.$1(e))},
$S:z+17}
A.fzY.prototype={
$1(d){return d.b==="bighouse"},
$S:z+4}
A.fzZ.prototype={
$1(d){return d.b===this.a},
$S:z+4}
A.fdi.prototype={
$0(){var w=this.a
return w.m(new A.fdh(w))},
$S:0}
A.fdh.prototype={
$0(){var w=this.a
return w.d=!w.d},
$S:0}
A.cgE.prototype={
$0(){var w=0,v=C.j(x.P),u=1,t=[],s,r,q,p,o,n
var $async$$0=C.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
w=6
return C.b($.ra().ji(0,"assets/images/ngmy_logo.png"),$async$$0)
case 6:s=e
w=7
return C.b(C.fDw(J.eS(J.vJ(s)),null),$async$$0)
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
A.fRt.prototype={
$4(d,e,f,g){var w,v,u=null,t=e*0.05,s=C.fx(u,u,1,u,C.cS(u,u,u,u,u,u,u,u,u,C.l(u,u,f,u,u,u,u,u,u,u,u,e,u,u,D.u,u,u,!0,u,t,u,u,u,u,u,u),d),D.a4,D.bY,u,D.dA,D.bW)
s.el()
w=s.b.c
v=this.a
if(w>v){s=C.fx(u,u,1,u,C.cS(u,u,u,u,u,u,u,u,u,C.l(u,u,f,u,u,u,u,u,u,u,u,e*v/w,u,u,D.u,u,u,!0,u,t,u,u,u,u,u,u),d),D.a4,D.bY,u,D.dA,D.bW)
s.el()}s.a3(this.b,new C.t(this.c+v/2-s.b.c/2,g))},
$S:1814}
A.fRr.prototype={
$1(d){var w,v,u,t,s,r=null,q=this.a,p=this.b,o=d.d-d.b
if(q!=null){w=q.c
v=q.d
u=Math.min((d.c-d.a)/w,o/v)
o=C.bK(d.gbL(),v*u,w*u)
$.S()
t=C.I()
t.Q=D.ci
p.oD(q,new C.a3(0,0,w,v),o,t)}else{s=C.fx(r,r,r,r,C.cS(r,r,r,r,r,r,r,r,r,C.l(r,r,this.c,r,r,r,r,r,r,r,r,o*0.6,r,r,D.u,r,r,!0,r,r,r,r,r,r,r,r),"NGMY"),D.a4,D.bY,r,D.dA,D.bW)
s.el()
q=d.gbL()
o=s.b
w=o.c
o=o.a.c
s.a3(p,q.aE(0,new C.t(w/2,o.gbb(o)/2)))}},
$S:1815}
A.fRq.prototype={
$4$w(d,e,f,g){var w=null,v=C.fx(w,w,w,w,C.cS(w,w,w,w,w,w,w,w,w,C.l(w,w,this.a,w,w,w,w,w,w,w,w,f,w,w,g,w,w,!0,w,f*0.08,w,w,w,w,w,w),d),D.a4,D.bY,w,D.dA,D.bW)
v.o0(this.b.a*0.9)
v.a3(this.c,e.aE(0,new C.t(v.b.c/2,0)))},
$3(d,e,f){return this.$4$w(d,e,f,D.u)},
$S:1816}
A.fRs.prototype={
$1(d){var w=null,v=this.a.b*0.16
v=C.fx(w,w,w,w,C.cS(w,w,w,w,w,w,w,w,w,C.l(w,w,w,w,w,w,w,w,w,w,w,v,w,w,D.u,w,w,!0,w,v*0.08,w,w,w,w,w,w),d),D.a4,D.bY,w,D.dA,D.bW)
v.el()
return v.b.c},
$S:714}
A.fAq.prototype={
$2(d,e){return this.a===d?e:0},
$S:715}
A.fAc.prototype={
$1(d){return d.b==="right"},
$S:z+21}
A.fAn.prototype={
$0(){var w=C.a([],x.z),v=new A.fk(w)
v.f=1
v.x=$.dS=$.dS+1
v.aJ(B.hgQ,B.h3P,B.Bn)
v.aR(B.fZQ,B.ha6,B.i1,0.5)
v.aJ(B.aX_,B.hbL,B.Bn)
v.aJ(B.aX_,B.h7D,B.Bn)
return w},
$S:z+85}
A.fAo.prototype={
$1(d){var w=this,v=w.a,u=v.b
A:{if("left"===u){v=A.nE(d,0,1.5707963267948966,new A.q(-w.b/2,0,v.c+w.c/2-40))
break A}if("right"===u){v=A.nE(d,0,-1.5707963267948966,new A.q(w.b/2,0,v.c+w.c/2-40))
break A}v=A.nE(d,0,0,new A.q(v.c,0,0))
break A}return v},
$S:z+86}
A.fAd.prototype={
$1(d){return d.b==="back"},
$S:z+21}
A.fAe.prototype={
$1(d){return d.c},
$S:z+87}
A.fAf.prototype={
$2(d,e){return e},
$S:80}
A.fAg.prototype={
$3(d,e,f){return K.RZ(d,e,0,f+this.a)},
$S:24}
A.fAi.prototype={
$2(a8,a9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this
if(a8==null)return
w=A.aPW(a8)
v=a7.a
u=A.hcu(v,w,a9)
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
n.aR(new A.q(h+g*1.4,r,f),new A.q(2.6,s+3,t+3),B.M5,0.5)
n.aR(new A.q(h+g*2.8,r,f),new A.q(0.2,s,t),F.ni,0.7)
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
k.push(new A.fP(C.a([new A.q(e,a1,d),new A.q(e,a1,a0),new A.q(e,j,a0),new A.q(e,j,d)],a2),m,new A.fAj(o,v,a9),320,a3,9,1,l,!1))
a4=h+g*0.05
k.push(new A.fP(C.a([new A.q(a4,a1,a0),new A.q(a4,a1,d),new A.q(a4,j,d),new A.q(a4,j,a0)],a2),m,new A.fAk(o,v,a9),320,a3,9,1,l,!1))}}else{h=u.c
n.aR(new A.q(h,r,1.4),new A.q(t+3,s+3,2.6),B.M5,0.5)
n.aR(new A.q(h,r,2.8),new A.q(t,s,0.2),F.ni,0.7)
if(v.p2){k=a7.d
j=q/2
a1=h-j
a2=p/2
a3=r+a2
j=h+j
a2=r-a2
a5=x.o
a6=320*p/q
k.push(new A.fP(C.a([new A.q(a1,a3,2.95),new A.q(j,a3,2.95),new A.q(j,a2,2.95),new A.q(a1,a2,2.95)],a5),m,new A.fAl(o,v,a9),320,a6,9,1,l,!1))
k.push(new A.fP(C.a([new A.q(j,a3,0.05),new A.q(a1,a3,0.05),new A.q(a1,a2,0.05),new A.q(j,a2,0.05)],a5),m,new A.fAm(o,v,a9),320,a6,9,1,l,!1))}}n.e=n.x=0
v=v.p2?"It is on and playing "+E.kp[D.o.F(o,8)].a+". Tap it to watch full screen with the remote.":"The TV is off. Tap it to turn it on."
a7.e.n(0,m,new A.cV(w.b,v,new A.q(0,r,4),110))},
$S:1819}
A.fAj.prototype={
$3(d,e,f){return K.RZ(d,e,this.a,f+this.b.a+this.c*3)},
$S:24}
A.fAk.prototype={
$3(d,e,f){return K.RZ(d,e,this.a,f+this.b.a+this.c*3)},
$S:24}
A.fAl.prototype={
$3(d,e,f){return K.RZ(d,e,this.a,f+this.b.a+this.c*3)},
$S:24}
A.fAm.prototype={
$3(d,e,f){return K.RZ(d,e,this.a,f+this.b.a+this.c*3)},
$S:24}
A.fAp.prototype={
$2(d,e){var w=this.a,v=w.f,u=w.r
w.f=1
w.r=!1
w.b=0
w.dq(new A.q(d,e,0),new A.q(d,e,2.2),0.7,B.LW,0.7,10)
w.f=v
w.r=u},
$S:199}
A.fAh.prototype={
$1(d){return d.b===this.a.a},
$S:z+14}
A.ftk.prototype={
$2(d,e){return this.a===d?e:0},
$S:715}
A.ftl.prototype={
$5(d,e,f,g,h){var w=d.a7(0,e.aI(0,g)).a7(0,new A.q(0,h,0)),v=this.a
A.kI(v,w.a7(0,f.aI(0,0.1)),e,B.e8,26,30,B.kG,f,0)
A.kI(v,w.a7(0,f.aI(0,0.2)),e,B.e8,22,26,B.i1,f,0.6)
A.kI(v,w.a7(0,f.aI(0,0.3)),e,B.e8,22,1.2,B.kG,f,0)
A.kI(v,w.a7(0,f.aI(0,0.3)),e,B.e8,1.2,26,B.kG,f,0)},
$S:z+88}
A.ftg.prototype={
$5(d,e,f,g,h){var w=d.a7(0,e.aI(0,g)),v=this.a,u=v.b
A.kI(v,w.a7(0,new A.q(0,42,0)).a7(0,f.aI(0,0.1)),e,B.e8,34,84,B.kG,f,0)
v.b=h
A.kI(v,w.a7(0,new A.q(0,41,0)).a7(0,f.aI(0,0.2)),e,B.e8,28,80,B.vJ,f,0.2)
v.b=0
A.kI(v,w.a7(0,new A.q(0,58,0)).a7(0,f.aI(0,0.3)),e,B.e8,20,26,B.MT,f,0)
A.kI(v,w.a7(0,new A.q(0,22,0)).a7(0,f.aI(0,0.3)),e,B.e8,20,26,B.MT,f,0)
v.aR(w.a7(0,e.aI(0,9)).a7(0,new A.q(0,40,0)).a7(0,f.aI(0,1)),new A.q(2.6,2.6,2.6),B.Fd,0.8)
v.b=u},
$S:z+123}
A.fth.prototype={
$5$poster(d,e,f,g,h){var w=C.a([d,e,f,g],x.o),v=h<0?A.hbW():new A.fti(h),u=h===0,t=u?1000:256
u=u?424:256
return this.a.push(new A.fP(w,0,v,t,u,1,2,this.b,!1))},
$4(d,e,f,g){return this.$5$poster(d,e,f,g,-1)},
$S:z+90}
A.fti.prototype={
$3(d,e,f){return A.fRp(d,e,f,this.a)},
$S:24}
A.fsI.prototype={
$1(d){var w=d.b
return w==="pole"||w==="lamppost"},
$S:z+4}
A.fsJ.prototype={
$2(d,e){return D.k.aL(d.c,e.c)},
$S:z+17}
A.fsK.prototype={
$1(d){return this.a.cy.aj(0,d.a)},
$S:z+4}
A.fsV.prototype={
$1(d){return this.a.k4.t(0,d.a)},
$S:z+4}
A.ft5.prototype={
$1(d){return B.f5R.t(0,d.b)},
$S:z+4}
A.ftj.prototype={
$3(d,e,f){var w=this.b
return A.vF(new A.q(d,e,f),this.a).a7(0,new A.q(w.c,0,w.d))},
$S:z+24}
A.fta.prototype={
$3(d,e,f){return A.nj(d,e,f,this.a.a+D.k.bf(f/7))},
$S:24}
A.ftb.prototype={
$3(d,e,f){return A.nj(d,e,f,this.a.a+D.k.bf(f/7))},
$S:24}
A.ftc.prototype={
$3(d,e,f){return A.H7(d,e,f,"NGMY TOWN",this.a)},
$S:24}
A.ftd.prototype={
$3(d,e,f){return A.H7(d,e,f,"NGMY TOWN",this.a)},
$S:24}
A.fte.prototype={
$3(d,e,f){return A.nj(d,e,f,this.a.a+D.k.bf(f/7))},
$S:24}
A.ftf.prototype={
$3(d,e,f){return A.nj(d,e,f,this.a.a+4+D.k.bf(f/7))},
$S:24}
A.fsL.prototype={
$3(d,e,f){return A.nj(d,e,f,this.a.a+D.k.bf(f/7))},
$S:24}
A.fsM.prototype={
$3(d,e,f){return A.nj(d,e,f,this.a.a+7+D.k.bf(f/7))},
$S:24}
A.fsN.prototype={
$3(d,e,f){return A.nj(d,e,f,this.a.a+3+D.k.bf(f/7))},
$S:24}
A.fsO.prototype={
$3(d,e,f){return A.nj(d,e,f,this.a.a+5+D.k.bf(f/7))},
$S:24}
A.fsP.prototype={
$3(d,e,f){return A.nj(d,e,f,this.a.a+1+D.k.bf(f/7))},
$S:24}
A.fsQ.prototype={
$3(d,e,f){return A.nj(d,e,f,this.a.a+2+D.k.bf(f/7))},
$S:24}
A.fsR.prototype={
$3(d,e,f){return A.H7(d,e,f,"NGMY COMPANY","Building the movement")},
$S:24}
A.fsS.prototype={
$3(d,e,f){return A.H7(d,e,f,"NGMY","New Global Movement for Youth")},
$S:24}
A.fsT.prototype={
$3(d,e,f){return A.H7(d,e,f,"NGMY COMPANY","Building the movement")},
$S:24}
A.fsU.prototype={
$3(d,e,f){return A.H7(d,e,f,"NGMY","New Global Movement for Youth")},
$S:24}
A.fsW.prototype={
$3(d,e,f){return A.nj(d,e,f,this.a.a+4+D.k.bf(f/7))},
$S:24}
A.fsX.prototype={
$3(d,e,f){return A.nj(d,e,f,this.a.a+6+D.k.bf(f/7))},
$S:24}
A.fsY.prototype={
$3(d,e,f){return A.nj(d,e,f,this.a.a+2+D.k.bf(f/7))},
$S:24}
A.fsZ.prototype={
$3(d,e,f){return A.nj(d,e,f,this.a.a+3+D.k.bf(f/7))},
$S:24}
A.ft_.prototype={
$3(d,e,f){return A.H7(d,e,f,"NGMY STORE","Everything you need")},
$S:24}
A.ft0.prototype={
$3(d,e,f){return A.H7(d,e,f,"NGMY UBER","Rides home")},
$S:24}
A.ft1.prototype={
$3(d,e,f){return A.H7(d,e,f,"NGMY UBER","Rides home")},
$S:24}
A.ft2.prototype={
$3(d,e,f){return A.H7(d,e,f,"NGMY LICENCE","Get your Uber licence")},
$S:24}
A.ft3.prototype={
$3(d,e,f){return A.H7(d,e,f,"NGMY GAS","Open 24 hours")},
$S:24}
A.ft4.prototype={
$3(d,e,f){return A.nj(d,e,f,this.a.a*2+this.b+1)},
$S:24}
A.ft6.prototype={
$1(d){return d.b===this.a.a&&!d.x&&d.Q.length!==0},
$S:z+14}
A.ft7.prototype={
$1(d){return d.b===this.a.a&&d.x},
$S:z+14}
A.ft8.prototype={
$3(d,e,f){return A.fRp(d,e,f,0)},
$S:24}
A.ft9.prototype={
$3(d,e,f){return A.fRp(d,e,f,0)},
$S:24}
A.fDo.prototype={
$2(d,e){var w,v=this.a
if(v!=null){w=v.b-d
v=v.c-e
v=w*w+v*v<1e4}else v=!0
return v},
$S:1820}
A.fDl.prototype={
$1(d){return D.d.t(B.I8,d.b)},
$S:z+4}
A.fDm.prototype={
$1(d){return d.b===this.a.a},
$S:z+14}
A.fDn.prototype={
$1(d){return d.b===this.a.a},
$S:z+14}
A.fjw.prototype={
$5(d,e,f,g,h){var w,v,u,t,s,r,q,p,o,n,m,l,k,j
for(w=d.length,v=x.z,u=this.a,t=-f/2,s=u.a,r=this.b,q=0,p=0;p<w;++p){o=d[p]
n=o.a
m=C.a([],v)
l=new A.fk(m)
l.b=u.b
l.f=u.f
l.r=!0
l.aJ(new A.q(0,t,0),new A.q(g,f,g),h)
k=(q&1)===0?1:-1
j=n>0?1:-1
D.d.v(s,A.nE(m,r*k*j,0,new A.q(n,e,o.b)));++q}},
$S:1821}
A.fjm.prototype={
$3(d,e,f){var w=this.a,v=this.b,u=this.c
return new A.q(w.c+v*d+u*f,e,w.d+u*d-v*f)},
$2(d,e){return this.$3(d,e,0)},
$S:z+44}
A.fub.prototype={
$3(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k=x.z,j=C.a([],k),i=new A.fk(j)
i.b=this.a
i.r=!0
d.$1(i)
k=C.a([],k)
for(j=A.bCG(j,e,B.dX),w=j.length,v=f.a,u=f.b,t=f.c,s=x.o,r=0;r<j.length;j.length===w||(0,C.L)(j),++r){q=j[r]
p=C.a([],s)
for(o=q.a,n=o.length,m=0;m<o.length;o.length===n||(0,C.L)(o),++m){l=o[m]
p.push(new A.q(l.a+v,l.b+u,l.c+t))}k.push(new A.kq(p,q.b,q.c,q.d,q.e,q.f,q.r,q.w,q.x,q.y,q.z))}D.d.v(this.b.a,k)},
$S:z+91}
A.ftJ.prototype={
$6$joint(d,e,f,g,h,i){var w=this.a
w.Tk(d,e,f,h,!1,g,this.b)
if(this.c&&i)w.ee(e,g*1.04,h,3,6)},
$5(d,e,f,g,h){return this.$6$joint(d,e,f,g,h,!0)},
$S:z+92}
A.ftK.prototype={
$1(d){return d.fP(B.dX,2.6,B.YC,this.a,this.b,0.15)},
$S:z+1}
A.ftL.prototype={
$1(d){return d.ee(B.dX,2.6,D.bO,3,this.a)},
$S:z+1}
A.ftM.prototype={
$1(d){return d.ee(B.dX,5.2,this.a,this.b,this.c+2)},
$S:z+1}
A.ftX.prototype={
$1(d){var w=this,v=w.d?12:8
return d.Tk(B.dX,B.aaX,w.a,w.b,!1,w.c,v)},
$S:z+1}
A.fu4.prototype={
$1(d){return d.L8(B.dX,B.h94,5.1,B.bgu,!1,12)},
$S:z+1}
A.fu5.prototype={
$1(d){return d.ee(B.dX,2.7,this.a,this.b,this.c)},
$S:z+1}
A.fu6.prototype={
$1(d){var w=this,v=w.a?6.2:6.7,u=w.c
if(u<4)u=4
return d.ee(B.dX,v,w.b,u,w.d)},
$S:z+1}
A.fu7.prototype={
$1(d){var w=this.b,v=w?6:4
w=w?12:8
return d.ee(B.dX,4.7,this.a,v,w)},
$S:z+1}
A.fu8.prototype={
$1(d){return d.ee(B.dX,3,this.a,this.b,this.c)},
$S:z+1}
A.fu9.prototype={
$1(d){return d.ee(B.dX,1.25,this.a,3,6)},
$S:z+1}
A.fua.prototype={
$1(d){return d.ee(B.dX,1,D.c,3,6)},
$S:z+1}
A.ftN.prototype={
$1(d){return d.ee(B.dX,1.15,this.a,2,6)},
$S:z+1}
A.ftO.prototype={
$1(d){return d.ee(B.dX,1,this.a,3,6)},
$S:z+1}
A.ftP.prototype={
$1(d){return d.ee(B.dX,1,this.a,2,6)},
$S:z+1}
A.ftQ.prototype={
$1(d){var w=C.ar(this.a,D.c,0.1)
w.toString
return d.ee(B.dX,1,w,2,6)},
$S:z+1}
A.ftR.prototype={
$1(d){var w=this.b,v=w?4:3
w=w?9:6
return d.ee(B.dX,5,this.a,v,w)},
$S:z+1}
A.ftS.prototype={
$1(d){return d.ee(B.dX,3.6,this.a,3,this.b)},
$S:z+1}
A.ftT.prototype={
$1(d){return d.ee(B.dX,4.8,this.a,this.b,this.c)},
$S:z+1}
A.ftU.prototype={
$1(d){var w=this.b,v=w?4:3
w=w?9:6
return d.ee(B.dX,6.2,this.a,v,w)},
$S:z+1}
A.ftV.prototype={
$1(d){return d.ee(B.dX,4.2,this.a,3,this.b)},
$S:z+1}
A.ftW.prototype={
$1(d){var w=this.b,v=w?4:3
w=w?9:6
return d.ee(B.dX,5.1,this.a,v,w)},
$S:z+1}
A.ftY.prototype={
$1(d){return d.ee(B.dX,3.4,this.a,3,this.b)},
$S:z+1}
A.ftZ.prototype={
$1(d){var w=C.ar(this.a,D.c,Math.abs(0.08))
w.toString
return d.ee(B.dX,2.6,w,this.b,this.c)},
$S:z+1}
A.fu_.prototype={
$1(d){return d.ee(B.dX,4.9,this.a,this.b,this.c)},
$S:z+1}
A.fu0.prototype={
$1(d){return d.ee(B.dX,3,this.a,3,this.b)},
$S:z+1}
A.fu1.prototype={
$1(d){var w=this.b,v=w?4:3
w=w?9:6
return d.ee(B.dX,5,this.a,v,w)},
$S:z+1}
A.fu2.prototype={
$1(d){return d.ee(B.dX,3.6,this.a,3,this.b)},
$S:z+1}
A.fu3.prototype={
$1(d){return d.ee(B.dX,2.3,this.a,3,6)},
$S:z+1}
A.fnm.prototype={
$4(d,e,f,g){var w,v,u,t,s,r,q,p
for(w=this.a,v=e/2+0.2,u=d-8,t=-e/2-0.2,s=d/2+0.2,r=e-8,q=-d/2-0.2,p=f;p<g;p+=22){A.kI(w,new A.q(0,p,v),B.hu,B.e8,u,9,B.i1,B.ig,0.6)
A.kI(w,new A.q(0,p,t),B.r0,B.e8,u,9,B.i1,B.tr,0.6)
A.kI(w,new A.q(s,p,0),B.tr,B.e8,r,9,B.i1,B.hu,0.6)
A.kI(w,new A.q(q,p,0),B.ig,B.e8,r,9,B.i1,B.r0,0.6)}},
$S:1822}
A.fAv.prototype={
$4$alongX(d,e,f,g){var w,v,u,t,s,r,q,p,o,n
for(w=this.a,v=0;v<=f;++v){u=A.pB(d,e,v/f)
w.aE6(new A.q(u.a,4,u.c),B.hhu,B.Yq,!1,0.05)}t=A.pB(d,e,0.5)
for(s=e.aE(0,d).guY()+0.15,r=t.a,q=t.c,p=0;p<2;++p){o=B.dgA[p]
n=g?new A.q(s,0.16,0.3):new A.q(0.3,0.16,s)
w.aR(new A.q(r,o,q),n,B.Yq,0.05)}},
$3(d,e,f){return this.$4$alongX(d,e,f,!0)},
$S:z+94}
A.fAs.prototype={
$2(d,e){return this.a.j8(A.Dj(d,0.35,3),0.06,e,!1,0.4,6)},
$S:z+95}
A.fAr.prototype={
$1(d){return this.a.j8(A.Dj(d,0.5,3),0.14,B.q_,!1,0.3,8)},
$S:z+96}
A.fAu.prototype={
$2$col(d,e){return this.a.j8(A.Dj(d,0.4,3),0.055,e,!1,0.35,6)},
$1(d){return this.$2$col(d,B.Yy)},
$S:z+97}
A.fAt.prototype={
$5$h$w(d,e,f,g,h){var w=this.a
w.b=d
w.aR(e,new A.q(h,g,0.06),f,0.3)},
$3(d,e,f){return this.$5$h$w(d,e,f,0.7,0.45)},
$4$w(d,e,f,g){return this.$5$h$w(d,e,f,0.7,g)},
$S:z+98}
A.fBq.prototype={
$0(){return A.fQ(1320,120,0.25,"tri")},
$S:0}
A.dTd.prototype={
$1(d){return this.a},
$S:39}
A.dTg.prototype={
$0(){return C.a5(this.a,!1).ik()},
$S:0}
A.dTh.prototype={
$0(){return this.a.rE(A.b12("","",!0))},
$S:0}
A.dTi.prototype={
$0(){return this.a.rE(B.dEp)},
$S:0}
A.dTl.prototype={
$0(){return this.a.rE(A.b12("wiring","",!0))},
$S:0}
A.dTm.prototype={
$0(){return this.a.rE(A.b12("plumbing","",!0))},
$S:0}
A.dTn.prototype={
$0(){return this.a.rE(A.b12("fix","",!0))},
$S:0}
A.dTo.prototype={
$0(){return this.a.rE(A.ciw(!0,!0,null,!1))},
$S:0}
A.dTp.prototype={
$0(){return this.a.rE(A.ciw(!0,!0,null,!0))},
$S:0}
A.dTq.prototype={
$0(){return this.a.rE(B.e9b)},
$S:0}
A.dTr.prototype={
$0(){return this.a.rE(new A.as3(!0,null))},
$S:0}
A.dTs.prototype={
$0(){return this.a.rE(B.dOt)},
$S:0}
A.dTj.prototype={
$0(){var w=this.a
return w.m(new A.dTf(w))},
$S:0}
A.dTf.prototype={
$0(){var w=this.a,v=w.e
w.e=!v
if(v)w.f=""},
$S:0}
A.dTk.prototype={
$1(d){var w=this.a
return w.m(new A.dTe(w,d))},
$S:2}
A.dTe.prototype={
$0(){return this.a.f=this.b},
$S:0}
A.dT8.prototype={
$0(){var w=this.b.a
w=w==="house"?B.hlU:A.b12("",w,!1)
return this.a.rE(w)},
$S:0}
A.dT9.prototype={
$0(){return this.a.rE(B.dLa)},
$S:0}
A.dTa.prototype={
$0(){return this.a.rE(B.aIF)},
$S:0}
A.dTb.prototype={
$1(d){return d.length!==0},
$S:3}
A.dTc.prototype={
$1(d){var w=this.a.a
return D.a.t((w[4]+" "+w[0]+" "+w[5]).toLowerCase(),d)},
$S:3}
A.f7q.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new A.f7p())},
$S:11}
A.f7p.prototype={
$0(){},
$S:0}
A.cxx.prototype={
$0(){$.ajr=!$.ajr
A.heY()
A.fQ($.ajr?520:420,60,0.25,"tri")},
$S:0}
A.cxy.prototype={
$0(){$.ajq=!$.ajq
A.heY()
A.fQ($.ajq?520:420,60,0.25,"tri")},
$S:0}
A.fSE.prototype={
$1(d){var w,v,u,t,s,r,q,p,o=null,n=C.aG(d,o,x.w).w,m=this.b,l=this.c,k=l.length,j=x.p,i=C.a([C.d(this.a,o,o,o,o,o,o,D.de,o,o,o),D.au,C.d(""+new C.Z(m,new A.fSD(),C.T(m).k("Z<1>")).gL(0)+" of "+k+" steps done",o,o,o,o,o,o,B.Kf,o,o,o),D.W],j)
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
A.fSD.prototype={
$1(d){return d},
$S:117}
A.bXy.prototype={
$0(){return C.a5(this.a,!1).ik()},
$S:0}
A.djQ.prototype={
$0(){return this.a.LI$=this.b},
$S:0}
A.djR.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.djP(w))},
$S:0}
A.djP.prototype={
$0(){return this.a.LI$=B.nC},
$S:0}
A.dbf.prototype={
$0(){var w=this.a,v=w.gdI(0),u=this.b
v.w=u==="practice"
u=u==="test"
v.z=u
if(u)v.f=v.e=!1
w.pv()},
$S:0}
A.dbd.prototype={
$0(){var w=this.a
w.y=this.b
w.z=this.c},
$S:0}
A.dbe.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.dbc(w))},
$S:0}
A.dbc.prototype={
$0(){return this.a.y=null},
$S:0}
A.daY.prototype={
$0(){return this.a.x=0},
$S:0}
A.daZ.prototype={
$0(){return this.a.x=0},
$S:0}
A.db_.prototype={
$1(d){return d.a===this.a},
$S:z+7}
A.db0.prototype={
$1(d){return d.e},
$S:z+35}
A.daX.prototype={
$1(d){var w=this.a.gdI(0).b
return new C.bd(w,C.a7(w).k("bd<2>")).t(0,d)},
$S:3}
A.db1.prototype={
$0(){var w=this.a
w.gdI(0).r=!1
w.pv()},
$S:0}
A.db2.prototype={
$1(d){return d.a===this.a},
$S:z+12}
A.db3.prototype={
$2(d,e){return e===this.a},
$S:405}
A.db4.prototype={
$0(){var w=this.a
w.w=""
w.pv()},
$S:0}
A.db5.prototype={
$1(d){return d.a===this.a},
$S:z+7}
A.db6.prototype={
$0(){var w=this.a,v=this.b
if(w.w===v)v=""
w.w=v
w.x=v.length===0?0:this.c},
$S:0}
A.db7.prototype={
$1(d){return d.a===this.a},
$S:z+7}
A.db8.prototype={
$0(){var w=this.a
w.pv()
w.x=this.b},
$S:0}
A.db9.prototype={
$0(){var w=this.a
w.pv()
w.x=this.b},
$S:0}
A.dba.prototype={
$0(){return this.a.x=this.b},
$S:0}
A.dbb.prototype={
$0(){var w=this.a,v=w.gdI(0),u=v.a
v.a=!u
if(u)v.d=!1
w.pv()},
$S:0}
A.dbg.prototype={
$0(){var w,v=this.a,u=v.gdI(0)
u.a=!0
u.d=!1
w=this.b
if(w.e)u.x=!0
u.Q=w.r
v.ax=v.at.gig()/1000
v.pv()},
$S:0}
A.dbh.prototype={
$0(){var w=this.a,v=w.gdI(0)
v.d=v.a=!0
w.pv()},
$S:0}
A.dbq.prototype={
$1(d){return!d},
$S:117}
A.dbz.prototype={
$0(){var w=this.a.gti()
return A.fSC(this.b,w.b,w.d,this.c)},
$S:0}
A.dbG.prototype={
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
A.hvD(new A.fk(s),q,new A.dbn(),0.32,r.at.gig()/1000)}s=C.C(s,x.e)
q=r.LI$
if(q.length!==0)D.d.v(s,A.h9X(q,r.at.gig()/1000))
return s},
$S:z+10}
A.dbn.prototype={
$1(d){return new A.q(d.a*0.32,-0.2+d.b*0.32,0.8+d.c*0.32)},
$S:z+6}
A.dbr.prototype={
$0(){return this.a.aB8("learn")},
$S:0}
A.dbs.prototype={
$0(){return this.a.aB8("practice")},
$S:0}
A.dbA.prototype={
$0(){return this.a.aB8("test")},
$S:0}
A.dbB.prototype={
$0(){var w=this.a
return w.m(new A.dbp(w))},
$S:0}
A.dbp.prototype={
$0(){var w=this.a,v=w.gdI(0)
v.e=!v.e
w.pv()},
$S:0}
A.dbC.prototype={
$0(){var w=this.a
return w.m(new A.dbo(w))},
$S:0}
A.dbo.prototype={
$0(){var w=this.a,v=w.gdI(0)
v.f=!v.f
w.pv()},
$S:0}
A.dbD.prototype={
$0(){return A.hck(this.a)},
$S:0}
A.dbE.prototype={
$0(){var w=this.a,v=w.gir()
return v.hU(10,0.2,new A.q(0.6,0,w.gdI(0).c===0?4.2:0.4),-0.95)},
$S:0}
A.dbF.prototype={
$0(){var w=this.a,v=w.gir()
return v.hU(10,0.2,new A.q(-0.6,0,w.gdI(0).c===0?4.2:0.4),0.95)},
$S:0}
A.dbH.prototype={
$1(d){return!this.a.gdI(0).b.is(0,d.a)},
$S:z+7}
A.dbt.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m=this.a,l=m.gdI(0),k=l.b,j=this.b,i=j.a
if(k.is(0,i)){m.md("That wire is already fastened. Tap the wire in the 3D view to take it off if you want to move it.")
return}w=m.aEq(i)
m.m(new A.dbm(m,w,j))
if(m.w.length!==0){m.aYc(i)
if(w){v=C.a([],x.o)
for(u=m.gti(),t=u.f,s=t.length,r=0;r<s;++r){q=t[r]
p=!1
if(q.c.t(0,i)){o=q.a
if(k.h(0,o)==null){n=m.r
p=(n===$?m.r=A.bD_(u,l,!0):n).b.h(0,o)!=null}}if(p){n=m.r
v.push((n===$?m.r=A.bD_(u,l,!0):n).b.h(0,q.a).c)}}m.aHx(v)
m.hr(j.b+": the glowing place is where it goes.",!0)}else m.hr(j.b+": now tap the screw it belongs on. Tap its name again to light up where it goes.",!0)}},
$S:0}
A.dbm.prototype={
$0(){var w,v=this,u=v.a
if(v.b)w=v.c.a
else{w=v.c.a
if(u.w===w)w=""}return u.w=w},
$S:0}
A.dbu.prototype={
$0(){var w=this.a,v=w.gti(),u=v.b,t=A.fS9(v)
w=w.gdI(0)
w=C.a([new A.abb(u,t,A.h9G(v,w),w.y)],x.fJ)
v=B.aHq.h(0,v.a)
if(v==null)v=B.aAB
return A.hA0(this.b,w,v,u)},
$S:0}
A.dbv.prototype={
$0(){var w=this.a
w.m(new A.dbl(w))
A.uk()
w.hr("The wires are folded back and the device is pushed into the box. Now put the cover plate on.",!0)
w.ol()},
$S:0}
A.dbl.prototype={
$0(){var w=this.a
w.gdI(0).c=1
w.pv()},
$S:0}
A.dbw.prototype={
$0(){var w=this.a
w.m(new A.dbk(w))
w.ol()},
$S:0}
A.dbk.prototype={
$0(){var w=this.a
w.gdI(0).c=0
w.pv()},
$S:0}
A.dbx.prototype={
$0(){var w=this.a
w.m(new A.dbj(w))
A.uk()
w.hr("Cover plate on. Now turn the power on and test.",!0)},
$S:0}
A.dbj.prototype={
$0(){var w=this.a
w.gdI(0).c=2
w.pv()},
$S:0}
A.dby.prototype={
$0(){var w=this.a
w.m(new A.dbi(w))
w.ol()},
$S:0}
A.dbi.prototype={
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
A.eXD.prototype={
$0(){var w=this.a
w.x=this.b
w.y=this.c},
$S:0}
A.eXE.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.eXC(w))},
$S:0}
A.eXC.prototype={
$0(){return this.a.x=null},
$S:0}
A.eXv.prototype={
$0(){return this.a.w=0},
$S:0}
A.eXw.prototype={
$0(){var w=this.a,v=w.gdI(0)
v.a.M(0,this.b)
v.c=!1
v.d=""
w.f=A.aQ_(v)
w.r=""},
$S:0}
A.eXx.prototype={
$0(){var w=this.a,v=w.gdI(0)
v.b.n(0,this.b,!0)
v.d=""
w.f=A.aQ_(v)},
$S:0}
A.eXy.prototype={
$0(){var w=this.a,v=w.gdI(0)
v.c=!1
v.d=""
w.f=A.aQ_(v)},
$S:0}
A.eXz.prototype={
$0(){return this.a.w=this.b},
$S:0}
A.eXA.prototype={
$1(d){return this.a.gdI(0).b.h(0,d)!==!0},
$S:3}
A.eXB.prototype={
$0(){var w,v=this.a,u=v.gdI(0)
u.c=!0
w=this.b
u.d=w.length===0?"":D.d.gI(w)
v.f=A.aQ_(u)},
$S:0}
A.eXI.prototype={
$1(d){return!d},
$S:117}
A.eXM.prototype={
$0(){return A.fSC(this.a,"Sink drain (P-trap)",B.djd,this.b)},
$S:0}
A.eXJ.prototype={
$1(d){var w=this.a,v=C.C(A.ikB(w.gdI(0),d),x.e)
w=w.LI$
if(w.length!==0)D.d.v(v,A.h9X(w,d))
return v},
$S:z+10}
A.eXK.prototype={
$0(){var w,v=this.a,u=this.b,t=v.aEq(u)
v.m(new A.eXH(v,t,u))
if(t){A:{if("tail"===u){w=B.hcs
break A}if("trap"===u){w=B.hhv
break A}w=B.aXv
break A}v.aHx(C.a([w],x.o))
if(u==="tail")u="Tailpiece"
else u=u==="trap"?"P-trap":"Trap arm"
v.hr(u+": the glowing place is where it goes. Tap it.",!0)}},
$S:0}
A.eXH.prototype={
$0(){var w,v=this,u=v.a
if(v.b)w=v.c
else{w=v.c
if(u.r===w)w=""}return u.r=w},
$S:0}
A.eXL.prototype={
$0(){var w=this.a
w.m(new A.eXG(w))
w.ol()},
$S:0}
A.eXG.prototype={
$0(){var w,v=this.a,u=v.gdI(0)
u.a.aa(0)
w=u.b
w.aJQ(w,new A.eXF())
u.c=!1
v.r=u.d=""
v.w=0
v.f=A.aQ_(u)},
$S:0}
A.eXF.prototype={
$2(d,e){return!1},
$S:1824}
A.deh.prototype={
$0(){var w=this.a
w.x=this.b
w.y=this.c},
$S:0}
A.dei.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.deg(w))},
$S:0}
A.deg.prototype={
$0(){return this.a.x=null},
$S:0}
A.de9.prototype={
$0(){return this.a.w=0},
$S:0}
A.dec.prototype={
$1(d){return d.a===this.a},
$S:z+37}
A.ded.prototype={
$0(){var w=this.a,v=w.gdI(0)
v.r=v.f=!1
w.f=A.agM(v)
w.w=this.b},
$S:0}
A.dee.prototype={
$0(){var w=this.a,v=w.gdI(0),u=v.e
u.bs(u,new A.deb(this.b))
v.r=v.f=!1
w.f=A.agM(v)},
$S:0}
A.deb.prototype={
$2(d,e){return e===this.a},
$S:405}
A.def.prototype={
$0(){return this.a.w=this.b},
$S:0}
A.dej.prototype={
$0(){var w,v=this.a
if(this.b){w=v.gdI(0)
w.f=!w.f}else{w=v.gdI(0)
w.r=!w.r}v.f=A.agM(v.gdI(0))
v.w=this.c},
$S:0}
A.dea.prototype={
$0(){var w=this.a,v=w.gdI(0)
v.r=v.f=!(v.f&&v.r)
w.f=A.agM(v)},
$S:0}
A.den.prototype={
$1(d){return!d},
$S:117}
A.det.prototype={
$0(){return A.fSC(this.a,"Faucet supply lines",B.dnv,this.b)},
$S:0}
A.deo.prototype={
$1(d){var w=this.a,v=C.C(A.ibk(w.gdI(0),d),x.e)
w=w.LI$
if(w.length!==0)D.d.v(v,A.h9X(w,d))
return v},
$S:z+10}
A.dep.prototype={
$0(){var w=this.a
return w.m(new A.dem(w))},
$S:0}
A.dem.prototype={
$0(){var w=this.a,v=w.gdI(0)
v.w=!v.w
w.f=A.agM(v)},
$S:0}
A.der.prototype={
$0(){var w,v,u,t,s,r,q=this.b,p=this.a,o=q.aEq(p.a)
q.m(new A.del(p,q,o))
if(o){w=p.a==="hot"
v=x.o
u=C.a([],v)
for(t=0;t<4;++t){s=B.RX[t]
if(s.c.t(0,p.a)&&q.gdI(0).e.h(0,s.a)==null){r=A.Rs(s.a)
u.push(new A.q(r.a+0,r.b+0,r.c+1.2))}}if(u.length!==0)p=u
else p=C.a([A.Rs(w?61:62).a7(0,B.h7A)],v)
q.aHx(p)
if(u.length!==0)p=(w?"Hot":"Cold")+" hose: the glowing places are where its two ends go."
else p=(w?"Hot":"Cold")+" hose is on. Now turn its valve: tap the handle."
q.hr(p,!0)}},
$S:0}
A.del.prototype={
$0(){var w,v,u=this,t=u.b
if(u.c)w=u.a.a
else{w=t.r
v=u.a.a
w=w===v?"":v}return t.r=w},
$S:0}
A.deq.prototype={
$1(d){return d===this.a.a},
$S:3}
A.des.prototype={
$0(){var w=this.a
w.m(new A.dek(w))
w.ol()},
$S:0}
A.dek.prototype={
$0(){var w=this.a,v=w.gdI(0)
v.e.aa(0)
v.r=v.f=!1
w.r=""
w.w=0
w.f=A.agM(v)},
$S:0}
A.dlp.prototype={
$0(){var w=this.a
w.x=this.b
w.y=this.c},
$S:0}
A.dlq.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.dlo(w))},
$S:0}
A.dlo.prototype={
$0(){return this.a.x=null},
$S:0}
A.dlj.prototype={
$0(){return this.a.r=0},
$S:0}
A.dll.prototype={
$0(){var w=this.a,v=w.d
v.d.W(0,72)
w.f=A.agN(v)
w.r=this.b},
$S:0}
A.dlm.prototype={
$0(){var w=this.a,v=w.d
v.c=!0
v.b=!1
w.f=A.agN(v)
w.r=this.b},
$S:0}
A.dln.prototype={
$0(){return this.a.r=this.b},
$S:0}
A.dlk.prototype={
$1(d){return this.a},
$S:39}
A.dly.prototype={
$0(){return A.fSC(this.a,"Fix the house",B.crl,this.b)},
$S:0}
A.dlt.prototype={
$0(){return this.a.cgD(this.b)},
$S:0}
A.dlv.prototype={
$1(d){return d<=this.a.d.a},
$S:34}
A.dlu.prototype={
$1(d){return A.hvW(this.a.d,d)},
$S:z+10}
A.dlw.prototype={
$0(){var w=this.a
return w.m(new A.dls(w))},
$S:0}
A.dls.prototype={
$0(){var w=this.a
return w.w=w.w==="wrench"?"":"wrench"},
$S:0}
A.dlx.prototype={
$1(d){var w=this.a
return w.m(new A.dlr(w,d))},
$S:6}
A.dlr.prototype={
$0(){var w=this.a,v=w.d,u=D.k.V(this.b)
v.a=u
if(u<5)w.r=0
w.f=A.agN(v)},
$S:0}
A.fj4.prototype={
$0(){return this.a.e=!1},
$S:0}
A.fj2.prototype={
$0(){return this.a.e=!0},
$S:0}
A.fj3.prototype={
$0(){var w=this.a
w.d=C.dh(B.bxw,new A.fj1(w))},
$S:0}
A.fj1.prototype={
$1(d){var w=this.a.a,v=w.e
return v.apE(w.f?1.06:0.94)},
$S:11}
A.fj6.prototype={
$1(d){return this.a.c8K(0)},
$S:68}
A.fj7.prototype={
$1(d){return this.a.b83()},
$S:110}
A.fj5.prototype={
$1(d){return this.a.b83()},
$S:134}
A.cbZ.prototype={
$0(){return C.a5(this.a,!1).ik()},
$S:0}
A.fB6.prototype={
$5(d,e,f,g,h){var w=this.a.a.t(0,h),v=this.b
v.b=d
if(w)v.apl(e,0.66,f,!1,!0,!0,g,14)
else{v.d=0.3
v.a7e(e,0.74,D.b_,!1,!0,0,8)
v.d=1}},
$S:z+100}
A.fB5.prototype={
$6(d,e,f,g,h,i){var w,v
if(!i)return
w=this.a.b.h(0,e)
v=w===!0?f:f.a7(0,h)
w=this.b
w.e=0.5
w.b=d
w.dq(v.aE(0,g.aI(0,0.6)),v.a7(0,g.aI(0,0.6)),1.12,B.q_,0.35,8)
w.r5(v.aE(0,g.aI(0,0.62)),v.aE(0,g.aI(0,0.5)),1.2,0.5,B.XP,0.2,8)
w.b=0
w.r5(f.aE(0,g.aI(0,0.05)),f.a7(0,g.aI(0,0.08)),0.82,0.55,B.bq0,0.1,12)
w.e=0},
$S:z+101}
A.fB4.prototype={
$1(d){return d.b<-0.6},
$S:z+22}
A.fAb.prototype={
$1(d){return this.a.e.h(0,d)===this.b},
$S:34}
A.fCM.prototype={
$3(d,e,f){var w,v,u,t,s=A.Rs(d),r=C.a([],x.o)
for(w=s.a,v=s.b,u=s.c,t=0;t<=8;++t)r.push(new A.q(w+f*t/8*2,v+(2.4*t/8-9*Math.pow(t/8,2)),u+(1+3.5*t/8)))
A.h7D(this.a,r,this.b,e,0.28,1.2)},
$S:1825}
A.fCL.prototype={
$1(d){return this.a.e.h(0,d.a)!=null},
$S:z+37}
A.co2.prototype={
$1(d){return d.a===this.a},
$S:z+102}
A.co3.prototype={
$1(d){return d.a===this.a},
$S:z+3}
A.co_.prototype={
$1(d){return this.a.vq(0,d).c.toLowerCase()},
$S:14}
A.co4.prototype={
$1(d){var w
if(!this.a.e.t(0,d.a)){w=d.b
w=w==="valve"||D.a.a0(w,"hose")}else w=!1
return w},
$S:z+3}
A.co5.prototype={
$1(d){var w=this.a,v=d.a
return w.e.t(0,v)&&w.aHF(v)>0},
$S:z+3}
A.co6.prototype={
$1(d){return d.a},
$S:z+23}
A.co7.prototype={
$1(d){return d.a},
$S:z+23}
A.co0.prototype={
$1(d){return this.a.e.t(0,d.a)},
$S:z+3}
A.co1.prototype={
$1(d){var w=this.a,v=d.a
return w.aHF(v)<=0||!w.e.t(0,v)},
$S:z+3}
A.fB3.prototype={
$1(d){var w=this.a
w.b=0
w.dq(new A.q(d,8,0),new A.q(d,8,1.6),0.5,B.LW,0.7,10)},
$S:6}
A.fB1.prototype={
$1(d){var w,v,u,t,s,r,q=C.a([],x.o)
for(w=d.length,v=this.a,u=v.a,t=v.b,v=v.c,s=0;s<d.length;d.length===w||(0,C.L)(d),++s){r=d[s]
q.push(new A.q(r.a+u,r.b+t,r.c+v))}return q},
$S:z+105}
A.fAW.prototype={
$3$r(d,e,f){var w=this.a,v=this.b.c
v===$&&C.c()
w.b=9100+D.d.bh(v.c,new A.fAZ(d))
w.d=0.32
w.a7e(e,f,D.b_,!1,!0,0,8)
w.d=1},
$2(d,e){return this.$3$r(d,e,1.2)},
$S:z+106}
A.fAZ.prototype={
$1(d){return d.a===this.a},
$S:z+3}
A.fAX.prototype={
$3(d,e,f){var w=this.a,v=this.b.c
v===$&&C.c()
w.b=9100+D.d.bh(v.c,new A.fAY(d))
w.d=0.32
w.aJ(e,f,D.b_)
w.d=1},
$S:z+107}
A.fAY.prototype={
$1(d){return d.a===this.a},
$S:z+3}
A.fB2.prototype={
$3(d,e,f){var w,v,u,t=this,s=t.a,r=s.c
r===$&&C.c()
w=D.d.cp(r.c,d)
r=d.c
v=s.e
u=d.a
if(v.t(0,u))s="Fitted."
else{s=s.b?"":d.e
s="A spot for the "+r.toLowerCase()+". "+s}t.b.n(0,9100+w,new A.cV(r,s,e,26))
if(t.c&&!v.t(0,u)&&t.d.length!==0)t.e.push(new A.hh(e.a7(0,B.h0F),f,D.eP,0))},
$S:z+108}
A.fAS.prototype={
$0(){return this.a.$3(this.b.a,new A.q(this.c-10,9,2.4),B.ab3)},
$S:0}
A.fAT.prototype={
$0(){return this.a.$3(this.b.a,new A.q(this.c-8,9,2.4),B.ab3)},
$S:0}
A.fAU.prototype={
$0(){return this.a.$3(this.b.a,new A.q(this.c+8,9,2.4),B.ab3)},
$S:0}
A.fB_.prototype={
$4(d,e,f,g){var w,v,u,t,s=this
if(D.d.bh(s.a,new A.fB0(d))<0||!s.b.e.t(0,d))return
w=s.b.f.h(0,d)
v=(w==null?0:w)>=1
w=s.c
u=9260+g
w.b=u
t=v?e:e.a7(0,f.aI(0,1.7))
w.dq(t.aE(0,f.aI(0,0.6)),t.a7(0,f.aI(0,0.6)),1.12,B.q_,0.35,8)
w.r5(t.aE(0,f.aI(0,0.62)),t.aE(0,f.aI(0,0.5)),1.2,0.5,B.XP,0.2,8)
w=v?"Tight.":"Loose. Tap it with the wrench to tighten it."
s.d.n(0,u,new A.cV("Slip nut",w,e,10))},
$S:z+109}
A.fB0.prototype={
$1(d){return d.a===this.a},
$S:z+3}
A.fAV.prototype={
$1(d){return d.a===this.a},
$S:z+3}
A.fRN.prototype={
$1(d){return d.a===this.a},
$S:z+3}
A.erm.prototype={
$0(){var w=this.a
w.z=this.b
w.Q=this.c},
$S:0}
A.ern.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.erl(w))},
$S:0}
A.erl.prototype={
$0(){return this.a.z=null},
$S:0}
A.erh.prototype={
$0(){return this.a.y=0},
$S:0}
A.err.prototype={
$1(d){return d.a===this.a},
$S:z+3}
A.er6.prototype={
$0(){return this.a.y=this.b},
$S:0}
A.er7.prototype={
$0(){var w=this.a
w.aez()
w.y=this.b},
$S:0}
A.er8.prototype={
$1(d){return this.a.c8L()},
$S:8}
A.erd.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.e
s===$&&C.c()
w=s.c
w===$&&C.c()
v=this.b
v=v>0?"\n\nYou are paid "+v+" stars! \u2b50":""
s=C.d("The "+w.b.toLowerCase()+" is finished and nothing leaks."+v+"\n\nMistakes: "+s.w+"\n\nThe next job is different.",u,u,u,u,u,u,B.a9U,u,u,u)
return C.ep(C.a([C.bN(!1,B.aVA,u,u,!0,u,u,u,new A.erb(d),u,u),C.bI(B.fHG,u,new A.erc(t,d),u)],x.p),u,u,G.nl,s,u,u,u,u,B.fJi,u)},
$S:19}
A.erb.prototype={
$0(){C.a5(this.a,!1).O(null)
return null},
$S:0}
A.erc.prototype={
$0(){C.a5(this.b,!1).O(null)
this.a.aZe()},
$S:0}
A.erk.prototype={
$0(){var w,v,u=this.a
u.d=D.o.F(Date.now(),1e5)
w=u.gCY(0)
v=u.e
v===$&&C.c()
u.e=A.h51(v.b,w,null)
u.x=""
u.as=!1
u.z=null
u.y=0
u.aez()},
$S:0}
A.ers.prototype={
$1(d){return d.b===this.a},
$S:z+3}
A.ere.prototype={
$1(d){var w=this.a.e
w===$&&C.c()
return w.x.t(0,d.a)},
$S:z+3}
A.erf.prototype={
$1(d){return d.c.toLowerCase()},
$S:z+23}
A.erg.prototype={
$1(d){var w=this.a.e
w===$&&C.c()
return w.aHF(d.a)>0},
$S:z+3}
A.ero.prototype={
$0(){var w=this.b
w.x=this.a.b
w.aez()},
$S:0}
A.erp.prototype={
$1(d){return d.a===this.a.a},
$S:z+3}
A.erq.prototype={
$0(){return this.a.y=this.b},
$S:0}
A.era.prototype={
$0(){var w=this.a
return w.m(new A.er9(w,this.b,this.c))},
$S:0}
A.er9.prototype={
$0(){var w=this.a
w.x=this.b?"":this.c
w.aez()},
$S:0}
A.ert.prototype={
$1(d){var w=this.a.e
w===$&&C.c()
return w.e.t(0,d.a)},
$S:z+3}
A.erx.prototype={
$0(){return this.a.c2C(this.b)},
$S:0}
A.erv.prototype={
$1(d){return d<=5},
$S:34}
A.eru.prototype={
$1(d){var w=this.a,v=w.e
v===$&&C.c()
return A.ikt(v,w.w.gig()/1000)},
$S:z+10}
A.erw.prototype={
$0(){return this.b.cyX(this.a.a)},
$S:0}
A.erj.prototype={
$1(d){var w,v,u,t,s,r,q=null,p=this.a,o=p.e
o===$&&C.c()
o=C.a([B.fVh,D.au,C.d("Mistakes "+o.w,q,q,q,q,q,q,B.Kf,q,q,q),D.W],x.p)
w=p.e.c
w===$&&C.c()
w=w.c
v=w.length
u=0
for(;u<v;++u){t=w[u]
s=D.c.j(0.05)
r=new C.aP(12,12)
o.push(C.p(q,new C.y((p.e.e.t(0,t.a)?"\u2705":"\ud83d\udd27")+" "+t.c,q,B.fi6,q,q,q,q,q,q,q,q,q),D.f,q,q,new C.o(s,q,q,new C.bh(r,r,r,r),q,q,D.n),q,q,q,D.eI,D.bT,q,q,q))}o.push(D.am)
o.push(B.fz8)
o.push(D.Q)
o.push(C.bI(B.aVC,q,new A.eri(p,d),q))
return C.bn(!0,C.cl(o,q,q,D.bQ,q,q,D.ah,!0),!0,!1,D.af,!0,!0)},
$S:27}
A.eri.prototype={
$0(){C.a5(this.b,!1).O(null)
this.a.aZe()},
$S:0}
A.h_8.prototype={
$1(d){return d.a===this.a},
$S:z+40}
A.csZ.prototype={
$1(d){return D.d.t(B.jF,d.b)},
$S:z+8}
A.ct5.prototype={
$1(d){return!this.a.y.t(0,d)},
$S:34}
A.ct6.prototype={
$1(d){var w=this.a
return w.x.aj(0,d)&&w.z.t(0,d)},
$S:34}
A.ct7.prototype={
$1(d){var w=$.Hf()[this.b],v=!1
if(w>=d)if(w<=d+48){w=this.a.Q.h(0,d)
w=(w==null?null:w.a)===!0}else w=v
else w=v
return w},
$S:34}
A.ct8.prototype={
$1(d){return this.a.Q.h(0,d).c.t(0,this.b)},
$S:34}
A.cta.prototype={
$1(d){var w,v=J.e_(6,x.S)
for(w=0;w<6;++w)v[w]=w
return D.d.d0(v,new A.ct9(this.a,d))},
$S:34}
A.ct9.prototype={
$1(d){return this.a.c.t(0,this.b*10+d)},
$S:34}
A.csY.prototype={
$1(d){var w=this.a.Q.h(0,d)
return(w==null?null:w.a)===!0},
$S:34}
A.csW.prototype={
$1(d){return!A.j4(d).c},
$S:34}
A.csX.prototype={
$1(d){var w=this.a.aqq(A.j4(d).d.a)
return(w==null?null:w.b.t(0,d))===!0},
$S:34}
A.ct3.prototype={
$1(d){return d.c},
$S:z+11}
A.ct4.prototype={
$1(d){return d.d},
$S:z+11}
A.ct_.prototype={
$1(d){return d.d},
$S:z+11}
A.ct0.prototype={
$1(d){var w=this.a.Q.h(0,d)
return(w==null?null:w.e)===!0},
$S:34}
A.ct1.prototype={
$1(d){return d.a===this.a},
$S:z+12}
A.ctb.prototype={
$2(d,e){return e===this.a},
$S:405}
A.ct2.prototype={
$1(d){return d.c===this.a},
$S:z+8}
A.evX.prototype={
$0(){var w=this.a
w.ay=this.b
w.ch=this.c},
$S:0}
A.evY.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.evW(w))},
$S:0}
A.evW.prototype={
$0(){return this.a.ay=null},
$S:0}
A.ev2.prototype={
$0(){return this.a.cx=!0},
$S:0}
A.ev3.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.ev1(w))},
$S:12}
A.ev1.prototype={
$0(){return this.a.cx=!1},
$S:0}
A.ev4.prototype={
$0(){return this.a.cx=!0},
$S:0}
A.ev5.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.ev0(w))},
$S:12}
A.ev0.prototype={
$0(){return this.a.cx=!1},
$S:0}
A.ev6.prototype={
$1(d){return this.a.bQZ()},
$S:8}
A.ev7.prototype={
$1(d){return this.a.c8Q()},
$S:8}
A.evh.prototype={
$0(){return this.a.as=-1},
$S:0}
A.evj.prototype={
$0(){return this.a.as=-1},
$S:0}
A.ev8.prototype={
$1(d){return d.b==="tv"},
$S:712}
A.ev9.prototype={
$0(){return this.a.as=-1},
$S:0}
A.eva.prototype={
$0(){return this.a.as=-1},
$S:0}
A.evA.prototype={
$0(){var w=this.a
w.as=this.b
w.Q=-1
w.z=w.ax=""
w.CW=!1},
$S:0}
A.evi.prototype={
$0(){var w=this.a
w.as=-1
w.ax=""},
$S:0}
A.evT.prototype={
$0(){return this.a.at=0},
$S:0}
A.evU.prototype={
$0(){return this.a.z=""},
$S:0}
A.evV.prototype={
$0(){return this.a.at=this.b},
$S:0}
A.evQ.prototype={
$0(){return this.a.z=""},
$S:0}
A.evR.prototype={
$0(){var w=this.a,v=this.b
return w.Q=w.Q===v?-1:v},
$S:0}
A.evS.prototype={
$0(){return this.a.at=2000+this.b},
$S:0}
A.evP.prototype={
$0(){return this.a.z=""},
$S:0}
A.evH.prototype={
$1(d){return d.a===this.a},
$S:z+12}
A.evI.prototype={
$0(){return this.a.ax=""},
$S:0}
A.evJ.prototype={
$1(d){return d.a===this.a},
$S:z+7}
A.evK.prototype={
$0(){var w=this,v=w.a,u=w.b
if(v.ax===u)u=""
v.ax=u
v.at=u.length===0?0:5000+w.c*100+w.d},
$S:0}
A.evL.prototype={
$1(d){return d.a===this.a},
$S:z+7}
A.evM.prototype={
$0(){return this.a.at=5000+this.b*100+this.c},
$S:0}
A.evN.prototype={
$0(){var w=this.a
w.ax=""
w.at=0},
$S:0}
A.evO.prototype={
$0(){return this.a.at=5000+this.b*100+this.c},
$S:0}
A.ew0.prototype={
$0(){var w=this.b,v=D.d.t(B.zs,w.z),u=this.a.a
if(v)w.b2Q(u)
else w.azs(u)},
$S:0}
A.evg.prototype={
$1(d){var w=null
return C.ep(C.a([C.bN(!1,B.fLj,w,w,!0,w,w,w,new A.eve(d),w,w),C.bI(D.Er,w,new A.evf(this.a,d),w)],x.p),w,w,G.nl,B.fAj,w,w,w,w,B.fI5,w)},
$S:19}
A.eve.prototype={
$0(){C.a5(this.a,!1).O(null)
return null},
$S:0}
A.evf.prototype={
$0(){C.a5(this.b,!1).O(null)
this.a.axW(!0)},
$S:0}
A.evd.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.d
s===$&&C.c()
w=s.c
w===$&&C.c()
v=this.b
v=v>0?"\n\nYou are paid "+v+" stars! \u2b50":""
s=C.d("The "+w.toLowerCase()+" is built, wired, painted and tested."+v+"\n\nMistakes: "+s.f+"\nShocks: "+s.r+"\nLives left: "+s.e+"\n\nEvery job is a little different. Ready for another one?",u,u,u,u,u,u,B.a9U,u,u,u)
return C.ep(C.a([C.bN(!1,B.fWb,u,u,!0,u,u,u,new A.evb(d),u,u),C.bI(B.fHZ,u,new A.evc(t,d),u)],x.p),u,u,G.nl,s,u,u,u,u,B.fQ4,u)},
$S:19}
A.evb.prototype={
$0(){C.a5(this.a,!1).O(null)
return null},
$S:0}
A.evc.prototype={
$0(){C.a5(this.b,!1).O(null)
this.a.b_s()},
$S:0}
A.evk.prototype={
$0(){if(!this.b)this.a.e=D.o.F(Date.now(),1e5)
var w=this.a
w.d=A.csV(null,null,!0,w.gCY(0),!0)
w.y=0
w.z=""
w.as=-1
w.ax=""
w.at=0
w.cy=!1
w.x.aa(0)
w.ay=null
w.r=A.wW(w.d,new A.rP(w.z,w.as,!1))},
$S:0}
A.ew1.prototype={
$1(d){var w=this.a
if(w.c)w=d==="light"||d==="fan"
else w=w.e==="switch"?D.d.t(B.jF,d):D.d.t(B.lj,d)
return w},
$S:3}
A.ew3.prototype={
$0(){var w=this.a,v=w.d
v===$&&C.c()
return w.ib(v.aIZ(w.as))},
$S:0}
A.ew4.prototype={
$0(){var w=this.a,v=w.d
v===$&&C.c()
return w.ib(v.aou(w.as))},
$S:0}
A.ew5.prototype={
$0(){var w=this.a,v=w.d
v===$&&C.c()
return w.ib(v.aFf(w.as))},
$S:0}
A.ew6.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.aoO(v.as)
v.ib(w)
if(w.a)v.PW()},
$S:0}
A.ew7.prototype={
$0(){var w=this.a,v=w.d
v===$&&C.c()
return w.ib(v.aou(w.as))},
$S:0}
A.ew8.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.aoO(v.as)
v.ib(w)
if(w.a){v.PW()
v.om("The "+A.a2l(this.b.a)+" is out and the box is empty. Pick the kind you want from the tray, then tap the box.",!0)}},
$S:0}
A.ew9.prototype={
$1(d){return!this.a.b.b.is(0,d.a)},
$S:z+7}
A.ewa.prototype={
$0(){var w=this.a
return w.m(new A.ew2(w,this.b))},
$S:0}
A.ew2.prototype={
$0(){var w=this.a,v=this.b,u=v.a
if(w.ax===u)u=""
w.ax=u
if(u.length!==0)w.om(v.b+": now tap the screw it belongs on.",!0)},
$S:0}
A.evZ.prototype={
$1(d){return!this.a.b.b.aj(0,d.a)},
$S:z+12}
A.ew_.prototype={
$0(){var w=this.a
return w.azp(w.as,this.b.a)},
$S:0}
A.evy.prototype={
$1(d){return new C.N(d,new A.evz(),d.$ti.k("N<ak.E,n>")).aG(0,", ")},
$S:1826}
A.evz.prototype={
$1(d){return A.j4(d).b},
$S:72}
A.evl.prototype={
$1(d){var w=this.a.d
w===$&&C.c()
return!w.x.aj(0,d.a)},
$S:z+8}
A.evm.prototype={
$1(d){var w=this.a.d
w===$&&C.c()
return!w.z.t(0,d.a)},
$S:z+8}
A.evn.prototype={
$1(d){var w=this.a.d
w===$&&C.c()
return!w.y.t(0,d)},
$S:34}
A.evq.prototype={
$1(d){return!d.a},
$S:z+11}
A.evr.prototype={
$1(d){return d.b<3},
$S:z+11}
A.evs.prototype={
$1(d){return!d.c},
$S:z+11}
A.evt.prototype={
$1(d){return!d.d},
$S:z+11}
A.evu.prototype={
$1(d){return!d.c},
$S:z+11}
A.evv.prototype={
$1(d){var w=this.a.d
w===$&&C.c()
w=w.at.h(0,d.a)
w=w==null?null:w.a
return w!==d.b},
$S:z+8}
A.evw.prototype={
$1(d){return d.a},
$S:z+114}
A.evx.prototype={
$1(d){var w=this.a.d
w===$&&C.c()
w=w.at.h(0,d.a)
w=w==null?null:w.b.c
return(w==null?0:w)<2},
$S:z+8}
A.evo.prototype={
$1(d){var w
if(D.d.t(B.lj,d.b)){w=this.a.d
w===$&&C.c()
w=w.at.h(0,d.a)
w=(w==null?null:w.c)!==!0}else w=!1
return w},
$S:z+8}
A.evp.prototype={
$1(d){return d.b==="fan"},
$S:z+8}
A.ewA.prototype={
$0(){return this.a.chF(this.b)},
$S:0}
A.ewB.prototype={
$0(){var w=this.a
if(w.as>=0)w.PW()
else{w.m(new A.ewj(w))
w.b55()}},
$S:0}
A.ewj.prototype={
$0(){return this.a.at=0},
$S:0}
A.ewz.prototype={
$1(d){var w,v,u,t=this.a,s=t.d
s===$&&C.c()
w=t.w.gig()
v=t.Q
u=t.y===2&&t.as<0&&t.d.gt6()
return A.ikK(s,w/1000,t.x,u,v)},
$S:z+10}
A.ewm.prototype={
$0(){var w=this.a,v=w.d
v===$&&C.c()
return w.ib(v.aJG())},
$S:0}
A.ewn.prototype={
$0(){var w=this.a
return w.m(new A.ewl(w,this.b))},
$S:0}
A.ewl.prototype={
$0(){var w,v=this.b.b
v.f=!v.f
v=this.a
w=v.d
w===$&&C.c()
v.r=A.wW(w,new A.rP(v.z,v.as,!1))},
$S:0}
A.ewo.prototype={
$0(){var w=this.a
return w.m(new A.ewk(w,this.b))},
$S:0}
A.ewk.prototype={
$0(){var w,v=this.b.b
v.e=!v.e
v=this.a
w=v.d
w===$&&C.c()
v.r=A.wW(w,new A.rP(v.z,v.as,!1))},
$S:0}
A.ewC.prototype={
$0(){var w=this.a
return w.m(new A.ewi(w,this.b))},
$S:0}
A.ewi.prototype={
$0(){var w,v=this.a
v.y=this.b
v.Q=-1
v.z=""
w=v.d
w===$&&C.c()
v.r=A.wW(w,new A.rP("",v.as,!1))},
$S:0}
A.ewD.prototype={
$0(){var w=this.a
return w.m(new A.ewh(w))},
$S:0}
A.ewh.prototype={
$0(){var w,v=this.a
v.y=(v.y+1)%3
v.Q=-1
v.z=""
w=v.d
w===$&&C.c()
v.r=A.wW(w,new A.rP("",v.as,!1))},
$S:0}
A.ewE.prototype={
$0(){var w=this.a
return w.m(new A.ewg(w))},
$S:0}
A.ewg.prototype={
$0(){var w=this.a,v=w.d
v===$&&C.c()
v.aml()
w.y=2
w.z=""
w.r=A.wW(w.d,new A.rP("",w.as,!1))
w.om("The boxes, the cable and the walls are done. Now the wiring: pick an Outlet or a Switch from the tray, then tap its box on the wall.",!0)},
$S:0}
A.ewF.prototype={
$0(){var w=this.a
return w.m(new A.ewf(w))},
$S:0}
A.ewf.prototype={
$0(){return this.a.Q=-1},
$S:0}
A.ewG.prototype={
$0(){var w=this.a,v=w.Q
if(v>=0&&w.y===2){w.m(new A.ewc(w,this.b))
w.azs(v)
if(w.c!=null&&w.as<0)w.m(new A.ewd(w))
return}w.m(new A.ewe(w,this.b))},
$S:0}
A.ewc.prototype={
$0(){return this.a.z=this.b.a},
$S:0}
A.ewd.prototype={
$0(){return this.a.z=""},
$S:0}
A.ewe.prototype={
$0(){var w,v=this.a,u=this.b.a,t=v.z===u?"":u
v.z=t
v.at=0
w=v.d
w===$&&C.c()
v.r=A.wW(w,new A.rP(t,v.as,!1))
if(v.z.length!==0)v.csy(u)},
$S:0}
A.ewH.prototype={
$0(){var w=this.a,v=w.d
v===$&&C.c()
return w.ib(v.cSX())},
$S:0}
A.ewp.prototype={
$1(d){return!this.a.b.b.is(0,d.a)},
$S:z+7}
A.ewq.prototype={
$0(){var w=this.a
return w.m(new A.ewb(w,this.b,this.c))},
$S:0}
A.ewb.prototype={
$0(){var w,v=this,u=v.c,t=u.a
if(v.b.b.b.is(0,t)){v.a.aeA("That wire is already fastened. Tap the wire in the 3D view to take it off.")
return}w=v.a
if(w.ax===t)t=""
w.ax=t
if(t.length!==0)w.om(u.b+": now tap the screw it belongs on, or press the matching button below.",!0)},
$S:0}
A.ewr.prototype={
$1(d){return!this.a.b.b.aj(0,d.a)},
$S:z+12}
A.ews.prototype={
$0(){var w=this.a
return w.azp(w.as,this.b.a)},
$S:0}
A.ewt.prototype={
$0(){var w=this.a,v=w.d
v===$&&C.c()
return w.ib(v.aIZ(w.as))},
$S:0}
A.ewu.prototype={
$0(){var w=this.a,v=w.d
v===$&&C.c()
return w.ib(v.aou(w.as))},
$S:0}
A.ewv.prototype={
$0(){var w=this.a,v=w.d
v===$&&C.c()
return w.ib(v.aFf(w.as))},
$S:0}
A.eww.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.aoO(v.as)
v.ib(w)
if(w.a)v.PW()},
$S:0}
A.ewx.prototype={
$0(){var w=this.a,v=w.d
v===$&&C.c()
return w.ib(v.aou(w.as))},
$S:0}
A.ewy.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.aoO(v.as)
v.ib(w)
if(w.a){v.PW()
v.om("The "+A.a2l(this.b.a)+" is out and the box is empty. Pick the kind you want from the tray (a different outlet or switch is fine), then tap the box.",!0)}},
$S:0}
A.evG.prototype={
$1(d){return new C.e1(new A.evF(this.a,this.b),null)},
$S:21}
A.evF.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=C.aG(d,k,x.w).w,i=this.a,h=i.d
h===$&&C.c()
w=h.c
w===$&&C.c()
v=x.p
h=C.a([C.d("Job: "+w,k,k,k,k,k,k,D.de,k,k,k),D.au,C.d("Mistakes "+h.f+" \xb7 Shocks "+h.r+" \xb7 Lives "+h.e,k,k,k,k,k,k,B.Kf,k,k,k),D.W,B.fLU,D.am],v)
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
h.push(C.B(C.a([C.E(C.dT(B.fJm,new A.evB(w),k),1),D.ad,C.E(C.bI(B.fHg,k,new A.evC(i,d,w),k),1)],v),D.m,k,D.e,D.i,0,k,k))
h.push(D.am)
h.push(D.am)
h.push(C.B(C.a([C.E(C.dT(B.fBs,new A.evD(i,d),k),1),D.ad,C.E(C.bI(B.aVC,k,new A.evE(i,d),k),1)],v),D.m,k,D.e,D.i,0,k,k))
return C.bn(!0,new C.cT(new C.aZ(0,1/0,0,j.a.b*0.8),C.cl(h,k,k,D.bQ,k,k,D.ah,!0),k),!0,!1,D.af,!0,!0)},
$S:86}
A.evB.prototype={
$0(){return A.hck(this.a)},
$S:0}
A.evC.prototype={
$0(){var w=0,v=C.j(x.H),u=this,t,s,r
var $async$$0=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:C.a5(u.b,!1).O(null)
t=u.a
s=t.d
s===$&&C.c()
r=s.c
r===$&&C.c()
w=2
return C.b(A.hA0(u.c,s.cZe(),t.d.cZf(),r),$async$$0)
case 2:return C.h(null,v)}})
return C.i($async$$0,v)},
$S:1}
A.evD.prototype={
$0(){C.a5(this.b,!1).O(null)
this.a.axW(!0)},
$S:0}
A.evE.prototype={
$0(){C.a5(this.b,!1).O(null)
this.a.b_s()},
$S:0}
A.fto.prototype={
$1(d){var w=this.a,v=d.a
return w>v[0]&&w<v[1]},
$S:717}
A.ftp.prototype={
$1(d){var w=this.a,v=d.a
return w>v[2]&&w<v[3]},
$S:717}
A.fB7.prototype={
$1(d){return 5000+this.a.a*100+d},
$S:78}
A.fB8.prototype={
$1(d){return 3000+this.a.a},
$S:78}
A.fB9.prototype={
$1(d){return 2000+this.a.a},
$S:78}
A.fBc.prototype={
$5$col$round(d,e,f,g,h){var w=this.a
w.f=3
w.b=d
w.d=0.5
w.e=0.9
if(h)w.dF(e.aE(0,B.e8),e.a7(0,B.e8),f.a/2,g,14)
else w.aJ(e,f,g)
w.e=0
w.d=1
w.f=2},
$3(d,e,f){return this.$5$col$round(d,e,f,D.b_,!1)},
$4$round(d,e,f,g){return this.$5$col$round(d,e,f,D.b_,g)},
$4$col(d,e,f,g){return this.$5$col$round(d,e,f,g,!1)},
$S:z+115}
A.fBa.prototype={
$3(d,e,f){return K.RZ(d,e,0,f+this.a.a*5)},
$S:24}
A.fBb.prototype={
$0(){var w,v=this.a
if(v.c)w="A place in the ceiling for a "+(v.e==="fan"?"fan (needs a fan-rated box)":"light")+"."
else w="A place on the wall at "+(v.e==="switch"?"switch height, about 48 inches from the floor":"outlet height, about 16 inches from the floor")+"."
return new A.cV(v.b,w,A.aia(v,B.aaU),26)},
$S:z+116}
A.fS5.prototype={
$1(d){return d.e==="fan"},
$S:z+40}
A.fS6.prototype={
$1(d){return d.b==="light"},
$S:z+8}
A.fS7.prototype={
$1(d){return A.aia(this.a,d)},
$S:z+6}
A.cwp.prototype={
$1(d){return d.a===this.a&&!d.c},
$S:z+15}
A.cwl.prototype={
$1(d){return d.a===B.a0E},
$S:z+15}
A.cwn.prototype={
$1(d){return d.c},
$S:z+15}
A.cwo.prototype={
$1(d){return d.c},
$S:z+15}
A.cwm.prototype={
$1(d){return B.wK.h(0,d.a).e===this.a&&!d.c},
$S:z+15}
A.ey3.prototype={
$0(){var w=this.a
w.z=this.b
w.Q=this.c},
$S:0}
A.ey4.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.ey2(w))},
$S:0}
A.ey2.prototype={
$0(){return this.a.z=null},
$S:0}
A.exT.prototype={
$0(){return this.a.y=0},
$S:0}
A.exY.prototype={
$0(){return this.a.as=!0},
$S:0}
A.exZ.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.exX(w))},
$S:12}
A.exX.prototype={
$0(){return this.a.as=!1},
$S:0}
A.ey_.prototype={
$0(){var w=this.a,v=w.d
v===$&&C.c()
w.r=A.agN(v.d)
w.y=this.b},
$S:0}
A.ey0.prototype={
$1(d){return this.a.chN()},
$S:8}
A.ey1.prototype={
$1(d){return this.a.c8Y()},
$S:8}
A.exW.prototype={
$1(d){var w=null
return C.ep(C.a([C.bI(B.fJd,w,new A.exV(this.a,d),w)],x.p),w,w,G.nl,B.fIl,w,w,w,w,B.fOJ,w)},
$S:19}
A.exV.prototype={
$0(){C.a5(this.b,!1).O(null)
this.a.axj()},
$S:0}
A.exS.prototype={
$1(d){var w=null,v=this.a,u=v.d
u===$&&C.c()
u=C.d("Every problem on the customer's list is fixed.\n\nYou are paid "+this.b+" stars! \u2b50\n\nMistakes: "+u.f+"\nShocks: "+u.r+"\nLives left: "+u.e+"\n\nThe next call will have different problems.",w,w,w,w,w,w,B.a9U,w,w,w)
return C.ep(C.a([C.bN(!1,B.aVA,w,w,!0,w,w,w,new A.exQ(d),w,w),C.bI(B.fKw,w,new A.exR(v,d),w)],x.p),w,w,G.nl,u,w,w,w,w,B.fRd,w)},
$S:19}
A.exQ.prototype={
$0(){C.a5(this.a,!1).O(null)
return null},
$S:0}
A.exR.prototype={
$0(){C.a5(this.b,!1).O(null)
this.a.axj()},
$S:0}
A.exU.prototype={
$0(){var w,v,u=this.a
u.e=D.o.F(Date.now(),1e5)
w=u.gCY(0)
v=u.d
v===$&&C.c()
w=A.hnk(v.b,w)
u.d=w
u.r=A.agN(w.d)
u.at=!1
u.z=null
u.y=0},
$S:0}
A.eyg.prototype={
$0(){return this.a.cCA(this.b)},
$S:0}
A.eyc.prototype={
$1(d){return d<=5},
$S:34}
A.eyb.prototype={
$1(d){var w=this.a,v=w.d
v===$&&C.c()
return A.hvW(v.d,w.w.gig()/1000)},
$S:z+10}
A.eyd.prototype={
$1(d){return!d.c},
$S:z+15}
A.eye.prototype={
$1(d){return B.wK.h(0,d.a).a},
$S:z+118}
A.eyf.prototype={
$0(){var w=this.a
return w.m(new A.eya(w,this.b))},
$S:0}
A.eya.prototype={
$0(){return this.a.x=this.b},
$S:0}
A.ey9.prototype={
$1(d){return new C.e1(new A.ey8(this.a),null)},
$S:21}
A.ey8.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=this.a,j=k.d
j===$&&C.c()
w=x.p
j=C.a([B.fGK,D.au,C.d("Mistakes "+j.f+" \xb7 Shocks "+j.r+" \xb7 Lives "+j.e,l,l,l,l,l,l,B.Kf,l,l,l),D.W],w)
v=k.d.c
v===$&&C.c()
u=v.length
t=0
for(;t<v.length;v.length===u||(0,C.L)(v),++t){s=v[t]
r=D.c.j(0.05)
q=new C.aP(14,14)
p=new C.ay(s.c?D.be.j(0.6):D.bz,1,D.r,-1)
o=s.c?"\u2705":"\ud83d\udd27"
n=B.wK.h(0,s.a).a
m=s.c?D.aC:D.c
j.push(C.p(l,new C.y(o+" "+n,l,new C.F(!0,m,l,l,l,l,13.5,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l),l,l,l,l,l,l,l,l,l),D.f,l,l,new C.o(r,l,new C.bH(p,p,p,p),new C.bh(q,q,q,q),l,l,D.n),l,l,l,D.ct,D.bg,l,l,l))}j.push(D.am)
j.push(B.fM4)
j.push(D.Q)
j.push(C.B(C.a([B.bFx,C.b8i(l,l,l,l,!1,D.y,l,l,l,l,l,l,new A.ey6(k,e),l,l,l,l,l,l,l,l,k.d.b)],w),D.m,l,D.e,D.i,0,l,l))
j.push(C.bI(B.fPb,l,new A.ey7(k,d),l))
return C.bn(!0,C.cl(j,l,l,D.bQ,l,l,D.ah,!0),!0,!1,D.af,!0,!0)},
$S:86}
A.ey6.prototype={
$1(d){var w=this.a.d
w===$&&C.c()
w.b=d
this.b.$1(new A.ey5())},
$S:9}
A.ey5.prototype={
$0(){},
$S:0}
A.ey7.prototype={
$0(){C.a5(this.b,!1).O(null)
this.a.axj()},
$S:0}
A.fm6.prototype={
$1(d){return d.d===this.a},
$S:z+21}
A.bVq.prototype={
$1(d){var w,v,u,t,s=this.a,r=s.p1
if(r!=="back"){s=r==="left"?-1.5707963267948966:1.5707963267948966
return new C.z(new C.z(0,d),s)}r=s.k1
w=A.hcu(s,A.aPW(r==null?"tv100":r),0)
s=w.c
r=w.a/2
v=s-r-18
u=this.b
t=-u/2+14
if(v<t)v=s+r+18
v=D.k.E(v,t,u/2-14)
return new C.z(new C.z(v,d),Math.atan2(s-v,-d))},
$S:1828}
A.bVr.prototype={
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
A.d7G.prototype={
$0(){var w=this.a
w.d=this.b
w.f.aa(0)
w.y=w.x=w.w=w.r=null},
$S:0}
A.d7H.prototype={
$0(){var w=this.a,v=this.b,u=w.w===v?null:v
w.w=u
if(u!=null){w.y='Now tap the place on the diagram where "'+v+'" goes.'
w.z=!0}},
$S:0}
A.d7I.prototype={
$0(){var w=this.a
w.y="Pick a wire on the left first, then tap the place it goes."
w.z=!1},
$S:0}
A.d7J.prototype={
$0(){var w,v,u,t,s=this.a,r=this.b,q=this.c
s.f.n(0,r,q)
s.x=r
s.w=s.r=null
if(!s.e){w=B.qD[s.d]
v=w.e.h(0,r)
v.toString
u=x.N
t=A.hvA(w.b,C.H([r,v],u,u),C.H([r,q],u,u))
u=t.a===B.qR
s.z=u
if(u)r="Right: this follows the diagram."
else{r=t.b
r=D.d.gI(r).c+" "+D.d.gI(r).e}s.y=r}else s.y=null},
$S:0}
A.d7C.prototype={
$0(){return this.a.cBF(this.b)},
$S:0}
A.d7F.prototype={
$0(){return this.a.cBQ(this.b)},
$S:0}
A.d7E.prototype={
$0(){var w=this.a
return w.m(new A.d7D(w,this.b))},
$S:0}
A.d7D.prototype={
$0(){var w,v,u,t,s
for(w=this.b,v=w.length,u=this.a,t=u.f,s=0;s<w.length;w.length===v||(0,C.L)(w),++s)t.W(0,w[s])
u.r=null},
$S:0}
A.d7O.prototype={
$0(){return A.hck(this.a)},
$S:0}
A.d7P.prototype={
$0(){return this.a.c9z(this.b)},
$S:0}
A.d7Q.prototype={
$0(){var w=this.a
return w.m(new A.d7N(w))},
$S:0}
A.d7N.prototype={
$0(){var w=this.a
w.e=!1
w.y=w.r=null},
$S:0}
A.d7R.prototype={
$0(){var w=this.a
return w.m(new A.d7M(w))},
$S:0}
A.d7M.prototype={
$0(){var w=this.a
w.e=!0
w.y=w.r=null},
$S:0}
A.d7S.prototype={
$2(d,e){var w,v,u,t=null,s=(e.b-56)/2,r=this.a,q=C.bS(0,C.cb(r.gaaU(),new A.d7L(r,s),t),0,0,0),p=x.p,o=C.a([],p)
for(w=B.qD[r.d].e,w=J.aW(w.gev(w));w.C();)o.push(r.c26(w.gS(w)))
o=C.ap(t,C.x(o,D.m,t,D.e,D.i,0,D.p),t,t,0,t,0,s)
w=C.a([],p)
for(v=B.qD[r.d].d,u=0;u<5;++u)w.push(r.chT(v[u]))
return new C.a4(t,this.b,new C.an(D.a_,t,D.ab,D.t,C.a([q,o,C.ap(t,C.x(w,D.m,t,D.e,D.i,0,D.p),t,t,t,0,0,s)],p),t),t)},
$S:154}
A.d7L.prototype={
$2(d,e){var w,v,u,t=null,s=this.a,r=B.qD[s.d].e
r=J.pP(r.gev(r))
w=B.qD[s.d]
v=x.N
v=C.dN(s.f,v,v)
u=s.x
s=s.gaaU().x
s===$&&C.c()
return C.b4(t,t,t,new A.bxh(r,w.d,v,this.b,u,s,t),D.aw)},
$S:59}
A.d7T.prototype={
$0(){var w=this.a
return w.m(new A.d7K(w))},
$S:0}
A.d7K.prototype={
$0(){var w=this.a,v=B.qD[w.d]
return w.r=A.hvA(v.b,v.e,w.f)},
$S:0}
A.fhM.prototype={
$1(d){return d*66+29},
$S:236}
A.fCO.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=this
for(w=k.a*1.8,v=k.b,u=k.c,t=k.d,s=0.3*t,t=0.05*t,r=0;r<d;++r){q=w+r*0.173
p=D.k.F(q,1)
o=Math.sin((r*3.1+D.k.bf(q))*12.9898)*43758.5453
n=(o-Math.floor(o))*3.141592653589793*2
o=Math.sin((r+5)*12.9898)*43758.5453
m=e*(0.6+(o-Math.floor(o))*0.8)
q=u.$1(new A.q(Math.cos(n)*p*m,Math.sin(n)*p*m-p*p*6,3+p*3))
l=C.ar(E.Z8,F.MM,p)
l.toString
v.fP(q,s*(1-p*0.6)+t,l,3,5,0)}},
$S:1830}
A.fCN.prototype={
$3(d,e,f){var w,v,u,t,s,r,q,p,o,n=this,m=n.a
m.d=0.34
for(w=n.b,v=w*0.45,u=n.c,t=n.d,s=1-e,r=0;r<d;++r){q=D.k.F(v+r/d,1)
p=u.$1(new A.q(Math.sin(r*1.7+w)*1.4+q*1.5,q*f-1,3.5+q*4))
o=C.ar(G.Bo,B.bqh,s)
o.toString
o=C.ar(o,B.bcQ,q)
o.toString
m.fP(p,(1.1+q*3.4)*t,o,3,6,0)}m.d=1},
$S:1831}
A.fCj.prototype={
$5(d,e,f,g,h){return this.a.push(new A.wr(d,e,f,g,h))},
$S:z+119}
A.fCo.prototype={
$2(d,e){var w=this.a
return new C.Z(w,new A.fCp(d,e),C.T(w).k("Z<1>")).gL(0)},
$S:z+120}
A.fCp.prototype={
$1(d){return d.a.c===this.a&&d.b.c===this.b},
$S:z+13}
A.fCk.prototype={
$1(d){return d.b.c===B.aT1},
$S:z+13}
A.fCl.prototype={
$1(d){return d.a.c===B.aYB},
$S:z+13}
A.fCm.prototype={
$1(d){return!1},
$S:z+13}
A.fCn.prototype={
$1(d){return!1},
$S:z+13}
A.flE.prototype={
$1(d){return D.d.b3(this.a,new A.flF(d))},
$S:3}
A.flF.prototype={
$1(d){return d.a===this.a},
$S:z+46}
A.czn.prototype={
$1(d){return A.hV9(d)},
$S:z+13}
A.czo.prototype={
$2(d,e){return d+e},
$S:67}
A.czp.prototype={
$1(d){return d.b.a===B.qR},
$S:z+43}
A.fCq.prototype={
$2(d,e){var w=this.a.h(0,d)
if(w==null)this.b.push(new A.wr("LEAD_MISSING",B.JH,"The "+d+" lead is not connected.","Every lead on the diagram needs its connection.","Connect the "+d+" lead to "+e+"."))
else if(w!==e)this.b.push(new A.wr("LEAD_WRONG",B.aQB,"The "+d+" lead is connected to "+w+", but the diagram says "+e+".","Connections follow the approved wiring diagram.","Move the "+d+" lead to "+e+"."))},
$S:115}
A.h_5.prototype={
$1(d){var w,v,u,t,s,r=null,q=C.aG(d,r,x.w).w,p=x.p,o=C.a([B.fxF,D.am,B.fRh,D.W],p)
for(w=0;w<5;++w){v=B.dcP[w]
u=D.c.j(0.05)
t=new C.aP(12,12)
s=new C.ay(D.bz,1,D.r,-1)
o.push(C.p(r,C.x(C.a([new C.y(v.a+": "+v.b,r,D.aUj,r,r,r,r,r,r,r,r,r),D.cS,new C.y("Goes to: "+v.c+"\nCircuit: "+v.d,r,G.Ep,r,r,r,r,r,r,r,r,r),D.cS,new C.y(v.e,r,D.aV0,r,r,r,r,r,r,r,r,r),D.cS,new C.y("Exception: "+v.f,r,B.fpW,r,r,r,r,r,r,r,r,r)],p),D.E,r,D.e,D.i,0,D.p),D.f,r,r,new C.o(u,r,new C.bH(s,s,s,s),new C.bh(t,t,t,t),r,r,D.n),r,r,r,D.ct,D.ym,r,r,r))}o.push(D.am)
o.push(B.fyZ)
return C.bn(!0,new C.cT(new C.aZ(0,1/0,0,q.a.b*0.85),C.cl(o,r,r,D.bQ,r,r,D.ah,!0),r),!0,!1,D.af,!0,!0)},
$S:27}
A.h_3.prototype={
$1(d){return new A.a1h(this.a,this.b,null)},
$S:z+89}
A.fbo.prototype={
$1(d){var w=this.a,v=w.a.c,u=this.b
d.toString
v.c.n(0,u,d)
w.m(new A.fbn(w,u,d))},
$S:159}
A.fbn.prototype={
$0(){var w=this.c
this.a.d.n(0,this.b,w)
return w},
$S:0}
A.fbp.prototype={
$0(){var w=this.a
w.m(new A.fbm(w,w.a.c.brf(0)))},
$S:0}
A.fbm.prototype={
$0(){return this.a.e=this.b},
$S:0}
A.fbq.prototype={
$1(d){return d.b.a!==B.qR},
$S:z+43}
A.fbr.prototype={
$0(){var w=this.a,v=w.c
v.toString
w=w.e
C.a5(v,!1).O(w)
return null},
$S:0}
A.bSX.prototype={
$1(d){return this.a.a.$0()},
$S:11}
A.bSW.prototype={
$1(d){var w=this.a
if(!w.c)return
w.a.$0()
if(w.c)w.b_R()},
$S:8};(function aliases(){var w=A.aO4.prototype
w.byW=w.q
w=A.aLr.prototype
w.bw6=w.q})();(function installTearOffs(){var w=a._instance_0u,v=a._instance_1u,u=a.installStaticTearOff,t=a.installInstanceTearOff,s=a._instance_2u,r=a._instance_0i
var q
w(q=A.aej.prototype,"gbWM","bWN",0)
v(q,"gLO","a5m",68)
u(A,"ijc",3,null,["$3"],["i4Z"],28,0)
w(q=A.aoO.prototype,"gc7d","c7e",0)
w(q,"gbr8","br9",0)
t(q,"gczT",0,0,null,["$1$done","$0"],["aBW","czU"],121,0,0)
w(q,"gcBY","cBZ",0)
w(q,"gbPa","bPb",0)
v(A.aU8.prototype,"gcSB","cSC",18)
s(q=A.aEO.prototype,"gbOd","bOe",30)
w(q,"giZ","iK",0)
t(q,"gc8t",0,1,null,["$2$keepTour","$1"],["axS","AB"],58,0,0)
v(q,"gc8y","c8z",9)
w(q,"gbQ9","bQa",0)
w(q,"gbQb","bQc",0)
w(q,"gbQv","bQw",0)
w(q,"gc3r","c3s",0)
w(q,"gbGC","bGD",0)
w(q,"gcEt","cEu",0)
w(q,"gcsq","csr",0)
w(q,"gbOR","bOS",0)
w(q,"gaR3","asS",0)
w(q,"gc8r","c8s",0)
w(q,"gcv1","cv2",0)
w(q,"gcEn","cEo",20)
w(q,"gczV","Sd",0)
w(q,"gb7T","a2N",0)
w(q,"gb87","a2R",0)
w(q,"gcGt","cGu",0)
w(q,"gbTO","bTP",0)
w(q,"gczS","B5",0)
w(q,"gc8w","Ep",20)
w(q,"gchz","a0v",20)
w(q,"gcgZ","a0m",20)
w(q,"gaNR","bBX",20)
w(q,"gc8C","c8D",0)
w(q,"gcpC","cpD",0)
r(q,"gc8A","c8B",0)
u(A,"hz0",3,null,["$3"],["ikk"],28,0)
u(A,"hbW",3,null,["$3"],["hze"],28,0)
w(q=A.aAD.prototype,"gc8H","pv",0)
w(q,"gJ7","ol",0)
v(q,"gJ8","J9",9)
w(q,"gcmC","cmD",0)
w(q,"gcC0","cC1",0)
w(q=A.aGz.prototype,"gJ7","ol",0)
v(q,"gJ8","J9",9)
w(q,"gc8I","b_n",0)
w(q=A.aAX.prototype,"gJ7","ol",0)
v(q,"gJ8","J9",9)
r(q,"gc8F","c8G",0)
w(q=A.aBQ.prototype,"gJ7","ol",0)
v(q,"gJ8","J9",9)
w(q=A.aFg.prototype,"gc8M","b_q",0)
v(q,"gc8N","c8O",9)
w(q,"gcxh","cxi",0)
v(A.XL.prototype,"gaqr","bqh",111)
s(q=A.aFn.prototype,"gc8R","c8S",30)
w(q,"gbSw","aUv",0)
w(q,"gc3p","c3q",0)
w(q,"gbEu","bEv",0)
w(q,"gbEs","bEt",0)
w(q,"gb_r","PW",0)
v(q,"gc8U","c8V",9)
w(q=A.aFr.prototype,"gc8Z","b_u",0)
v(q,"gc9_","c90",9)})();(function inheritance(){var w=a.mixin,v=a.mixinHard,u=a.inheritMany,t=a.inherit
u(C.lA,[A.f_H,A.rn,A.JH,A.FM,A.FT])
u(C.af,[A.a9P,A.avD,A.aoN,A.apN,A.IW,A.aJ2,A.aK0,A.NI,A.awy,A.E_,A.a9I,A.a59,A.aBP,A.afP,A.Wg,A.Ok,A.as3,A.aq9,A.a1h])
u(C.ah,[A.aNW,A.aO4,A.aoO,A.bkX,A.aEO,A.bu5,A.bwg,A.bkY,A.btU,A.byb,A.bzw,A.byg,A.aBQ,A.bxA,A.aFg,A.aFn,A.aFr,A.aLr,A.bva])
t(A.aej,A.aNW)
t(A.bpE,P.auy)
u(C.aD,[A.q,A.kq,A.cV,A.hh,A.tU,A.fP,A.fk,A.bVb,A.cDG,A.G4,A.PR,A.cLD,A.bch,A.bcC,A.bhL,A.dpz,A.MD,A.dv6,A.djI,A.lI,A.rd,A.Hq,A.aTe,A.bIc,A.ho,A.FX,A.zc,A.xn,A.aUo,A.a4q,A.akq,A.bMA,A.bKG,A.dkd,A.rR,A.SB,A.aTJ,A.bxx,A.bKI,A.Aj,A.cB6,A.pG,A.bKu,A.Fq,A.P1,A.I7,A.M0,A.aU8,A.fm,A.CA,A.iP,A.Ms,A.axQ,A.mg,A.fp,A.E8,A.nO,A.abM,A.oq,A.aWw,A.a5n,A.aWB,A.f24,A.Mn,A.Qk,A.bVs,A.m2,A.ad5,A.jS,A.N4,A.co8,A.Ff,A.nw,A.Xh,A.cnZ,A.z7,A.l9,A.XX,A.aw6,A.aUY,A.ey,A.XL,A.hM,A.rP,A.uF,A.Mw,A.cwk,A.y5,A.tO,A.aa3,A.ia,A.csU,A.Az,A.bsr,A.aWD,A.b9Y,A.akv,A.czk,A.cCV,A.a4l,A.bMK,A.wr,A.tn,A.b6y,A.abb,A.abc,A.vi,A.b5g,A.b8s,A.czm,A.PM,A.a5i])
u(C.hy,[A.c0d,A.c0e,A.c0c,A.c0f,A.c0g,A.h_n,A.h_l,A.h_m,A.h_k,A.h_9,A.bJV,A.bJW,A.bJX,A.bJY,A.bJS,A.bK_,A.bJZ,A.bJU,A.bJT,A.ctU,A.ctV,A.ctN,A.ctO,A.ctP,A.ctQ,A.f3d,A.f3c,A.f3a,A.f3b,A.f34,A.f37,A.f38,A.f36,A.f39,A.bTY,A.bTR,A.bU1,A.bTX,A.bU4,A.bU2,A.bU7,A.bTT,A.bTV,A.bTU,A.bIe,A.bId,A.fRi,A.fzQ,A.fzR,A.fzJ,A.fzK,A.fzL,A.fzM,A.fzN,A.fzO,A.fzP,A.flP,A.fpd,A.fyv,A.fzB,A.fzC,A.fzD,A.c4e,A.c4c,A.c44,A.c3Y,A.c3W,A.c3Q,A.c3X,A.c3G,A.c3H,A.c3I,A.fC7,A.bMC,A.bMF,A.fFx,A.fj0,A.bKJ,A.h_i,A.h_j,A.h_g,A.fBG,A.cB8,A.cB9,A.bKv,A.bKC,A.bKD,A.bKE,A.bKF,A.bKw,A.bKx,A.bKy,A.bKA,A.bKB,A.bLj,A.bLg,A.bLh,A.bLi,A.bLn,A.bLm,A.bLk,A.bLo,A.dSQ,A.dSL,A.dT4,A.dSO,A.dT7,A.fCh,A.h_T,A.fBt,A.fBu,A.fBr,A.fBs,A.fSa,A.fSb,A.fCu,A.fCv,A.fCs,A.fCt,A.fzH,A.fzI,A.h_S,A.fm5,A.frD,A.fyo,A.fzt,A.h_P,A.h_M,A.bUD,A.bUC,A.bVd,A.bVe,A.bVf,A.bVg,A.bVh,A.bVl,A.bVi,A.bVj,A.bVp,A.bVo,A.bVn,A.bVm,A.eex,A.eeu,A.eev,A.eew,A.ebh,A.edI,A.edJ,A.edF,A.e9R,A.eea,A.eeb,A.edm,A.ecm,A.eci,A.eba,A.ec2,A.ebk,A.ebS,A.eeo,A.eaU,A.ebQ,A.ebR,A.ebv,A.ec4,A.eao,A.ean,A.eaQ,A.edb,A.eda,A.ecV,A.ecS,A.ee8,A.ee7,A.ee_,A.edV,A.edU,A.edx,A.eem,A.eec,A.ed1,A.ec6,A.ec7,A.ec8,A.ebT,A.ebU,A.edd,A.edq,A.eds,A.ec_,A.ebZ,A.ec0,A.edt,A.eco,A.ecp,A.ecx,A.ecy,A.ecz,A.eca,A.ecb,A.een,A.ecd,A.ecc,A.e9Q,A.e9K,A.e9L,A.e9M,A.eer,A.ea9,A.e9Y,A.e9Z,A.eab,A.e9S,A.ed0,A.dvw,A.f7C,A.f7D,A.f7E,A.f7B,A.fA1,A.fA8,A.fA3,A.fA0,A.fzU,A.fA5,A.fA7,A.fA6,A.fA4,A.fzV,A.fzT,A.fzY,A.fzZ,A.fRt,A.fRr,A.fRq,A.fRs,A.fAc,A.fAo,A.fAd,A.fAe,A.fAg,A.fAj,A.fAk,A.fAl,A.fAm,A.fAh,A.ftl,A.ftg,A.fth,A.fti,A.fsI,A.fsK,A.fsV,A.ft5,A.ftj,A.fta,A.ftb,A.ftc,A.ftd,A.fte,A.ftf,A.fsL,A.fsM,A.fsN,A.fsO,A.fsP,A.fsQ,A.fsR,A.fsS,A.fsT,A.fsU,A.fsW,A.fsX,A.fsY,A.fsZ,A.ft_,A.ft0,A.ft1,A.ft2,A.ft3,A.ft4,A.ft6,A.ft7,A.ft8,A.ft9,A.fDl,A.fDm,A.fDn,A.fjw,A.fjm,A.fub,A.ftJ,A.ftK,A.ftL,A.ftM,A.ftX,A.fu4,A.fu5,A.fu6,A.fu7,A.fu8,A.fu9,A.fua,A.ftN,A.ftO,A.ftP,A.ftQ,A.ftR,A.ftS,A.ftT,A.ftU,A.ftV,A.ftW,A.ftY,A.ftZ,A.fu_,A.fu0,A.fu1,A.fu2,A.fu3,A.fnm,A.fAv,A.fAr,A.fAu,A.fAt,A.dTd,A.dTk,A.dTb,A.dTc,A.f7q,A.fSE,A.fSD,A.db_,A.db0,A.daX,A.db2,A.db5,A.db7,A.dbq,A.dbG,A.dbn,A.dbH,A.eXA,A.eXI,A.eXJ,A.dec,A.den,A.deo,A.deq,A.dlk,A.dlv,A.dlu,A.dlx,A.fj1,A.fj6,A.fj7,A.fj5,A.fB6,A.fB5,A.fB4,A.fAb,A.fCM,A.fCL,A.co2,A.co3,A.co_,A.co4,A.co5,A.co6,A.co7,A.co0,A.co1,A.fB3,A.fB1,A.fAW,A.fAZ,A.fAX,A.fAY,A.fB2,A.fB_,A.fB0,A.fAV,A.fRN,A.err,A.er8,A.erd,A.ers,A.ere,A.erf,A.erg,A.erp,A.ert,A.erv,A.eru,A.erj,A.h_8,A.csZ,A.ct5,A.ct6,A.ct7,A.ct8,A.cta,A.ct9,A.csY,A.csW,A.csX,A.ct3,A.ct4,A.ct_,A.ct0,A.ct1,A.ct2,A.ev6,A.ev7,A.ev8,A.evH,A.evJ,A.evL,A.evg,A.evd,A.ew1,A.ew9,A.evZ,A.evy,A.evz,A.evl,A.evm,A.evn,A.evq,A.evr,A.evs,A.evt,A.evu,A.evv,A.evw,A.evx,A.evo,A.evp,A.ewz,A.ewp,A.ewr,A.evG,A.fto,A.ftp,A.fB7,A.fB8,A.fB9,A.fBc,A.fBa,A.fS5,A.fS6,A.fS7,A.cwp,A.cwl,A.cwn,A.cwo,A.cwm,A.ey0,A.ey1,A.exW,A.exS,A.eyc,A.eyb,A.eyd,A.eye,A.ey9,A.ey6,A.fm6,A.bVq,A.bVr,A.fhM,A.fCN,A.fCj,A.fCp,A.fCk,A.fCl,A.fCm,A.fCn,A.flE,A.flF,A.czn,A.czp,A.h_5,A.h_3,A.fbo,A.fbq,A.bSX,A.bSW])
u(C.jv,[A.c0b,A.ctT,A.ctM,A.ctR,A.ctS,A.bTS,A.bU_,A.bTZ,A.fyr,A.fzS,A.fyw,A.c3V,A.bME,A.bMB,A.bMG,A.bMD,A.bKH,A.c1Q,A.h_h,A.fBH,A.cB7,A.bKz,A.bLl,A.fDH,A.fDI,A.fDJ,A.fDK,A.fDL,A.fCr,A.fkM,A.frE,A.frC,A.frB,A.fDM,A.fDN,A.fDO,A.fDP,A.fDQ,A.fDR,A.fDS,A.fDT,A.fDU,A.fDV,A.fDA,A.fDB,A.fDC,A.fDD,A.fDE,A.fDF,A.fDG,A.h_N,A.h_O,A.bVk,A.ecE,A.ebC,A.ee9,A.edl,A.ecl,A.ebm,A.ed9,A.ee6,A.edT,A.ecw,A.fA9,A.fA2,A.fA_,A.fzW,A.fzX,A.fAq,A.fAf,A.fAi,A.fAp,A.ftk,A.fsJ,A.fDo,A.fAs,A.db3,A.eXF,A.deb,A.ctb,A.evF,A.ey8,A.d7S,A.d7L,A.fCO,A.fCo,A.czo,A.fCq])
u(C.p1,[A.xi,A.aTK])
u(C.mf,[A.b6B,A.bfH,A.bjr,A.bxh])
t(A.bse,A.aO4)
u(C.iG,[A.f35,A.fkG,A.bU6,A.bU0,A.bTW,A.bU3,A.fyx,A.fyu,A.c4b,A.c4_,A.c45,A.c4d,A.c42,A.c41,A.c3A,A.c40,A.c43,A.c3Z,A.c3T,A.c3S,A.c3U,A.c3R,A.c3F,A.c3E,A.c3J,A.c3K,A.c3L,A.c3M,A.c3N,A.c3D,A.c3O,A.c3B,A.c3C,A.c3P,A.c48,A.c49,A.c47,A.c4a,A.c46,A.fC8,A.dSP,A.dT1,A.dSW,A.dSX,A.dSV,A.dSM,A.dT5,A.dT3,A.dT2,A.dSK,A.dSR,A.dSS,A.dST,A.dSU,A.dSN,A.dSZ,A.dT_,A.dT0,A.dSY,A.dT6,A.fzu,A.eet,A.edg,A.edh,A.edf,A.edi,A.ebO,A.edK,A.ecL,A.ecM,A.ecN,A.ecO,A.ecP,A.ebf,A.ebe,A.ebg,A.ebc,A.ebd,A.ebb,A.ebq,A.ebr,A.ebs,A.ecG,A.ecF,A.ecH,A.ecD,A.ecI,A.ecC,A.ecJ,A.ecB,A.ecK,A.ecA,A.eaS,A.eaT,A.ebE,A.ebD,A.ebF,A.ebB,A.ebG,A.ebA,A.ebH,A.ebz,A.ebI,A.eby,A.ebJ,A.ebx,A.ebK,A.ebw,A.edG,A.edH,A.ec1,A.eah,A.ebX,A.ebW,A.ebY,A.ebV,A.edn,A.edk,A.edj,A.eck,A.ecj,A.ecg,A.ecf,A.ech,A.ece,A.ebL,A.ebM,A.edc,A.ebo,A.ebn,A.ebp,A.edo,A.edA,A.ebl,A.ebj,A.ebi,A.edz,A.ebP,A.ebu,A.ec5,A.eap,A.eam,A.eaq,A.eal,A.ear,A.eak,A.eas,A.eaj,A.eat,A.eai,A.eaR,A.ed5,A.ed4,A.ed6,A.ed7,A.ed8,A.ecT,A.ecR,A.ecU,A.ecQ,A.edZ,A.edY,A.ee0,A.ee1,A.ee2,A.ee3,A.ee4,A.ee5,A.edP,A.edN,A.edO,A.edQ,A.edM,A.edR,A.edS,A.edw,A.edy,A.edW,A.edL,A.edD,A.edE,A.edv,A.edC,A.eej,A.eek,A.eel,A.eed,A.eee,A.eef,A.eeg,A.eeh,A.eei,A.ebt,A.ec9,A.edp,A.ebN,A.ede,A.edr,A.edu,A.edB,A.ecr,A.ecs,A.ecq,A.ect,A.ecu,A.ecn,A.ecv,A.e9P,A.e9N,A.ec3,A.edX,A.ed2,A.ed3,A.e9O,A.eb_,A.eb0,A.eb1,A.eb2,A.eb3,A.eb4,A.eaZ,A.eb5,A.eaY,A.eb6,A.eaX,A.eb7,A.eaW,A.eb8,A.eaV,A.eb9,A.eeq,A.ees,A.eep,A.eaC,A.eaD,A.eaE,A.eaI,A.eaJ,A.eaK,A.eaB,A.eaL,A.eaA,A.eaM,A.eaz,A.eaN,A.eaO,A.eay,A.eaP,A.eax,A.eaF,A.eaw,A.eaG,A.eav,A.eaH,A.eau,A.e9X,A.eaa,A.ea1,A.eac,A.e9W,A.ead,A.eae,A.e9V,A.eaf,A.eag,A.ea_,A.e9U,A.ea0,A.e9T,A.ea2,A.ea3,A.ea4,A.ea5,A.ea6,A.ea7,A.ea8,A.ecY,A.ecZ,A.ecX,A.ed_,A.ecW,A.f7A,A.f7z,A.fdi,A.fdh,A.cgE,A.fAn,A.fBq,A.dTg,A.dTh,A.dTi,A.dTl,A.dTm,A.dTn,A.dTo,A.dTp,A.dTq,A.dTr,A.dTs,A.dTj,A.dTf,A.dTe,A.dT8,A.dT9,A.dTa,A.f7p,A.cxx,A.cxy,A.bXy,A.djQ,A.djR,A.djP,A.dbf,A.dbd,A.dbe,A.dbc,A.daY,A.daZ,A.db1,A.db4,A.db6,A.db8,A.db9,A.dba,A.dbb,A.dbg,A.dbh,A.dbz,A.dbr,A.dbs,A.dbA,A.dbB,A.dbp,A.dbC,A.dbo,A.dbD,A.dbE,A.dbF,A.dbt,A.dbm,A.dbu,A.dbv,A.dbl,A.dbw,A.dbk,A.dbx,A.dbj,A.dby,A.dbi,A.eXD,A.eXE,A.eXC,A.eXv,A.eXw,A.eXx,A.eXy,A.eXz,A.eXB,A.eXM,A.eXK,A.eXH,A.eXL,A.eXG,A.deh,A.dei,A.deg,A.de9,A.ded,A.dee,A.def,A.dej,A.dea,A.det,A.dep,A.dem,A.der,A.del,A.des,A.dek,A.dlp,A.dlq,A.dlo,A.dlj,A.dll,A.dlm,A.dln,A.dly,A.dlt,A.dlw,A.dls,A.dlr,A.fj4,A.fj2,A.fj3,A.cbZ,A.fAS,A.fAT,A.fAU,A.erm,A.ern,A.erl,A.erh,A.er6,A.er7,A.erb,A.erc,A.erk,A.ero,A.erq,A.era,A.er9,A.erx,A.erw,A.eri,A.evX,A.evY,A.evW,A.ev2,A.ev3,A.ev1,A.ev4,A.ev5,A.ev0,A.evh,A.evj,A.ev9,A.eva,A.evA,A.evi,A.evT,A.evU,A.evV,A.evQ,A.evR,A.evS,A.evP,A.evI,A.evK,A.evM,A.evN,A.evO,A.ew0,A.eve,A.evf,A.evb,A.evc,A.evk,A.ew3,A.ew4,A.ew5,A.ew6,A.ew7,A.ew8,A.ewa,A.ew2,A.ew_,A.ewA,A.ewB,A.ewj,A.ewm,A.ewn,A.ewl,A.ewo,A.ewk,A.ewC,A.ewi,A.ewD,A.ewh,A.ewE,A.ewg,A.ewF,A.ewf,A.ewG,A.ewc,A.ewd,A.ewe,A.ewH,A.ewq,A.ewb,A.ews,A.ewt,A.ewu,A.ewv,A.eww,A.ewx,A.ewy,A.evB,A.evC,A.evD,A.evE,A.fBb,A.ey3,A.ey4,A.ey2,A.exT,A.exY,A.exZ,A.exX,A.ey_,A.exV,A.exQ,A.exR,A.exU,A.eyg,A.eyf,A.eya,A.ey5,A.ey7,A.d7G,A.d7H,A.d7I,A.d7J,A.d7C,A.d7F,A.d7E,A.d7D,A.d7O,A.d7P,A.d7Q,A.d7N,A.d7R,A.d7M,A.d7T,A.d7K,A.fbn,A.fbp,A.fbm,A.fbr])
u(C.aw,[A.aZ0,A.Ux,A.acO,A.bk1,A.b7U,A.aY0,A.a7b])
t(A.aAD,A.byb)
t(A.aGz,A.bzw)
t(A.aAX,A.byg)
t(A.bex,A.aLr)
w(A.aNW,P.aux)
v(A.aO4,C.cg)
w(A.byb,A.ad5)
w(A.byg,A.ad5)
w(A.bzw,A.ad5)
v(A.aLr,C.cg)})()
C.j0(b.typeUniverse,JSON.parse('{"a9P":{"af":[],"v":[]},"aej":{"ah":["a9P<1>"]},"avD":{"af":[],"v":[]},"xi":{"aC":[]},"b6B":{"aC":[]},"bse":{"ah":["avD"]},"aoN":{"af":[],"v":[]},"aoO":{"ah":["aoN"]},"aTK":{"aC":[]},"aZ0":{"aw":[],"v":[]},"Ux":{"aw":[],"v":[]},"apN":{"af":[],"v":[]},"bkX":{"ah":["apN"]},"acO":{"aw":[],"v":[]},"bfH":{"aC":[]},"IW":{"af":[],"v":[]},"aJ2":{"af":[],"v":[]},"aK0":{"af":[],"v":[]},"aEO":{"ah":["IW"]},"bk1":{"aw":[],"v":[]},"bjr":{"aC":[]},"bu5":{"ah":["aJ2"]},"bwg":{"ah":["aK0"]},"awy":{"af":[],"v":[]},"E_":{"af":[],"v":[]},"a9I":{"af":[],"v":[]},"a59":{"af":[],"v":[]},"aBP":{"af":[],"v":[]},"afP":{"af":[],"v":[]},"NI":{"af":[],"v":[]},"bkY":{"ah":["NI"]},"btU":{"ah":["awy"]},"b7U":{"aw":[],"v":[]},"aY0":{"aw":[],"v":[]},"aAD":{"ah":["E_"]},"aGz":{"ah":["a9I"]},"aAX":{"ah":["a59"]},"aBQ":{"ah":["aBP"]},"bxA":{"ah":["afP"]},"a7b":{"aw":[],"v":[]},"Wg":{"af":[],"v":[]},"aFg":{"ah":["Wg"]},"Ok":{"af":[],"v":[]},"aFn":{"ah":["Ok"]},"as3":{"af":[],"v":[]},"aFr":{"ah":["as3"]},"aq9":{"af":[],"v":[]},"bex":{"ah":["aq9"]},"bxh":{"aC":[]},"a1h":{"af":[],"v":[]},"bva":{"ah":["a1h"]}}'))
C.CU(b.typeUniverse,JSON.parse('{"bpE":1,"aNW":1,"ad5":1}'))
var y={T:"A hot wire never goes on the green ground screw.",X:"A shut-off valve goes on the pipe that comes out of the wall.",v:"Both black wires go on brass screws. It does not matter which one.",N:"Brass screws are for the HOT wire (black).",q:"Each switch has its own screw on the other side, and each goes to its own light.",R:"Fasten the bare copper ground to the GREEN screw.",E:"Fasten the black hot to one HOT (X or Y) brass screw.",A:"Fasten the black wire to the LEFT terminal.",k:"Fasten the red hot to the other HOT brass screw.",c:"Fasten the red wire to the RIGHT terminal.",F:"Fasten the white neutral to a SILVER screw.",r:"Fasten the white neutral to the silver NEUTRAL (W) screw.",b:"Fold the wires back and push the device into the box.",W:"Hot and cold flow through the hoses and out of the faucet. No leaks. The lesson is complete!",P:"LOAD is for feeding other outlets further down the line. It is covered with tape. Power comes in on the LINE screws.",x:"Look at the device and the wires. Learn which wire is which before you touch a screw.",M:"Move it with the arrow buttons, turn it, change its colour or take it out.",G:"Neutral goes on a silver screw. The silver screws stay joined, so one wire feeds both halves.",o:"Pick a paint colour above to change this wall.",n:"Put the cover plate on, turn the power on and test.",Q:"Silver screws are for the NEUTRAL wire (white).",f:"Switch the power on and flip the wall switch.",H:"The bare copper ground goes on the green screw.",t:"The bare copper ground wire only goes on the GREEN screw.",S:"The black and red hot wires go on the two brass screws, X and Y. The silver W screw is for the neutral.",u:"The black hot wire goes on a brass screw.",J:"The black wire goes on the LEFT terminal.",C:"The gold screws are BRASS. They are for the HOT wire (black).",Z:"The green screw is for the bare copper ground wire.",l:"The two hot wires (black and red) go on the two brass screws, X and Y, in either order.",m:"The two hot wires go on the two brass screws, X and Y, in either order.",p:"The two hot wires go on the two brass screws, in either order.",a:"The two traveler wires go on the two brass traveler screws, in either order.",g:"The two travelers coming from the first three-way go on the two top screws.",d:"The two travelers going to the second three-way go on the two bottom screws.",_:"The white neutral wire goes on a silver screw.",I:"The white neutral wire goes on the silver W screw.",B:"The white-silver screws are NICKEL. They are for the NEUTRAL wire (white).",D:"There is no medicine left. Buy some in the shop.",O:"Turn the breaker OFF and test that the wires are dead.",Y:"You are at the street light. Press Fix the street light."}
var x=(function rtii(){var w=C.at
return{dw:w("lH<u?>"),ff:w("aTe"),l:w("bu<n,n>"),gW:w("bu<n,K>"),M:w("dw<n>"),hg:w("a4q"),cD:w("aUY"),eP:w("rn"),gN:w("I1"),eB:w("mg"),fa:w("aB<MN?>"),v:w("dp<G,n>"),fC:w("I7"),f5:w("O<Sl>"),m:w("O<lI>"),gQ:w("O<M0>"),V:w("O<ac>"),O:w("O<u>"),bm:w("O<a4l>"),fW:w("O<aUo>"),D:w("O<a4q>"),C:w("O<xn>"),dI:w("O<Mn>"),gw:w("O<Mw>"),dh:w("O<I1>"),_:w("O<mg>"),dY:w("O<oq>"),cX:w("O<aWw>"),F:w("O<a5n>"),ha:w("O<I7>"),r:w("O<fm>"),E:w("O<hh>"),Z:w("O<jS>"),gL:w("O<ai<G>>"),ez:w("O<a8<n,aD>>"),c7:w("O<a8<n,@>>"),f4:w("O<a8<n,ci>>"),T:w("O<ia>"),dN:w("O<t>"),B:w("O<l9>"),fI:w("O<nw>"),g:w("O<fV>"),z:w("O<kq>"),gl:w("O<b5g>"),a6:w("O<+(a96,G)>"),L:w("O<+(n,n)>"),dt:w("O<+(q,q)>"),d6:w("O<+(K,n)>"),f:w("O<+(K,K)>"),ek:w("O<+(G,n)>"),aJ:w("O<+(n,G,G)>"),dV:w("O<+(K,K,u)>"),al:w("O<+(G,K,R)>"),gp:w("O<+(G,G,ai<t>)>"),dQ:w("O<+(G,G,G)>"),eV:w("O<+(K,K,K,K)>"),az:w("O<+(G,G,K,R,n)>"),dz:w("O<+blurb,color,emoji,open,title,words(n,u,n,~(),n,n)>"),fP:w("O<P1>"),e3:w("O<aa3>"),fB:w("O<wr>"),a:w("O<fP>"),gD:w("O<XX>"),y:w("O<rR>"),s:w("O<n>"),fJ:w("O<abb>"),dH:w("O<abc>"),J:w("O<vi>"),bz:w("O<Aj>"),o:w("O<q>"),p:w("O<v>"),d:w("O<iP>"),dF:w("O<PR>"),gR:w("O<bch>"),bl:w("O<G4>"),h:w("O<Az>"),b:w("O<hM>"),x:w("O<ho>"),aQ:w("O<Qk>"),fG:w("O<bsr>"),X:w("O<pG>"),u:w("O<R>"),n:w("O<K>"),t:w("O<G>"),dS:w("O<aC?>"),k:w("O<ci>"),eF:w("cw<ah<af>>"),dg:w("ai<K>"),j:w("ai<@>"),c:w("a8<n,@>"),G:w("a8<@,@>"),w:w("iB"),P:w("cv"),q:w("cV"),aU:w("aD"),dx:w("t"),dc:w("fV"),ej:w("Jr"),e:w("kq"),cE:w("a9P<G>"),I:w("+(K,K)"),c5:w("dx<G>"),cR:w("XL"),K:w("fP"),cH:w("aw6"),N:w("n"),ec:w("jd<n>"),dZ:w("b8s"),e7:w("bq<K>"),cv:w("q"),W:w("bR<n>"),ac:w("bR<G>"),cI:w("jX<n>"),am:w("Z<mg>"),fZ:w("Z<Ff>"),cc:w("Z<n>"),dD:w("Z<G>"),c1:w("hn"),gh:w("CA"),gf:w("PR"),bB:w("bcC"),c9:w("bhL"),Q:w("R"),i:w("K"),A:w("@"),S:w("G"),R:w("MD?"),eT:w("MN?"),U:w("ai<@>?"),dy:w("a8<n,@>?"),fF:w("a8<@,@>?"),cU:w("qb?"),Y:w("ci"),H:w("~")}})();(function constants(){var w=a.makeConstList
B.b_k=new A.ey(!0,"The water is on and nothing leaks. Perfect job!",!1,"")
B.b_l=new A.ey(!0,"Primer and paint rolled on.",!1,"")
B.b_m=new A.ey(!1,"This call is over. Start a new one.",!1,"")
B.b_n=new A.ey(!0,"Recorded.",!1,"")
B.b_o=new A.ey(!1,"That is not a place for a sheet.",!1,"")
B.b_p=new A.ey(!0,"Sanded smooth. Wear a mask: the dust is bad to breathe.",!1,"")
B.acc=new A.ey(!1,"There is no device here.",!1,"")
B.b_q=new A.ey(!0,"You look closely. Everything looks fine here.",!1,"")
B.b_r=new A.ey(!1,"ZAP! You were shocked badly and it was your last life. Always turn the breaker OFF and test before you touch wires.",!0,"shock")
B.b_s=new A.ey(!0,"Paper tape pressed into the seam.",!1,"")
B.b_t=new A.ey(!1,"STOP! The breaker is ON, so this box is live (120 volts). Nobody puts a device into a live box. Turn the breaker OFF first, test that the wires are dead, then put the device in.",!1,"")
B.b_u=new A.ey(!0,"Unplugged.",!1,"")
B.b_v=new A.ey(!0,"Breaker OFF. It is safe to work on the wires.",!1,"")
B.b_w=new A.ey(!1,"ZAP! You were shocked badly. That was your last life: the job is over. Lesson: ALWAYS turn the breaker OFF and test the wires before you touch them.",!0,"shock")
B.b_x=new A.ey(!1,"There is nothing there.",!1,"")
B.b_y=new A.ey(!1,"The outlet is burnt. Nothing works. Pull it out and put in a new one.",!0,"")
B.b_z=new A.ey(!0,"The water is on and nothing leaks yet, but the job is not finished.",!1,"")
B.b_A=new A.ey(!0,"Sheet hung. Now screw it to the studs.",!1,"")
B.b_B=new A.ey(!0,"Hole drilled through the middle of the stud, at the cable height. Holes go in the center so a nail cannot reach the cable.",!1,"")
B.b_C=new A.ey(!0,"Plugged in. Nothing happens because the breaker is off. Turn it on to test.",!1,"")
B.b_D=new A.ey(!0,"You flipped the tripped breaker fully OFF. Fix the problem before you turn it on again.",!1,"")
B.b_E=new A.ey(!0,"Click.",!1,"")
B.b_F=new A.ey(!0,"The wires are folded back and the device is in the box. Now put the cover on.",!1,"")
B.b_G=new A.ey(!0,"Breaker OFF. The wires on this circuit are dead now. (Always test them to be sure.)",!1,"")
B.b_H=new A.ey(!1,"Nothing is wet.",!1,"")
B.b_I=new A.ey(!0,"Power is on.",!1,"")
B.b_J=new A.ey(!0,"Water OFF at the main valve. You can cut into the pipes safely now.",!1,"")
B.b_K=new A.ey(!0,"Opening cut around the box with the drywall saw. Keep it tight: the plate has to cover the edge.",!1,"")
B.b_L=new A.ey(!0,"Device pulled out of the box.",!1,"")
B.b_M=new A.ey(!0,"Screw set just below the paper, not through it.",!1,"")
B.b_N=new A.ey(!1,"ZAP! You touched a live wire. In Learn mode you are not hurt, but in real life this can kill. Switch the breaker OFF and test the wires first.",!0,"shock")
B.b_O=new A.ey(!0,"Cover on. Now you can turn the breaker on and test.",!1,"")
B.WB=new A.ey(!1,"",!1,"")
B.b_P=new A.ey(!0,"Device taken out. You can put it somewhere else, or put in a new one.",!1,"")
B.b_Q=new A.ey(!0,"Breaker back ON.",!1,"")
B.b_R=new A.ey(!1,"That is not a stud.",!1,"")
B.b_S=new A.ey(!0,"Off.",!1,"")
B.b_T=new A.ey(!1,"Nothing to flip yet.",!1,"")
B.b_U=new A.ey(!0,"Wire taken off.",!1,"")
B.b_V=new A.ey(!0,"The mud is dry.",!1,"")
B.b_W=new A.ey(!0,"Breaker reset.",!1,"")
B.b_X=new A.ey(!0,"Box mounted. (Careful: this is not a fan-rated box. A fan on it could fall.)",!1,"")
B.fQG=new C.y("Tap a piece of furniture, or add one:",null,D.Ap,null,null,null,null,null,null,null,null,null)
B.enW=new C.D(D.nr,B.fQG,null)
B.b03=new C.bM(D.a5,null,null,B.enW,null)
B.b0D=new C.lH(D.aA,x.dw)
B.acF=new A.lI(0,0,0,0,1)
B.b2b=new C.bh(D.jG,D.JB,D.jG,D.JB)
B.b2u=new C.bh(D.JB,D.jG,D.JB,D.jG)
B.adg=new C.aZ(0,290,0,1/0)
B.b2g=new C.bh(H.TL,H.TL,D.bH,D.bH)
B.bsX=new C.u(1,0.12156862745098039,0.13725490196078433,0.18823529411764706,D.q)
B.bt4=new C.u(1,0.054901960784313725,0.06274509803921569,0.09411764705882353,D.q)
B.d6Y=w([B.bsX,B.bt4],x.O)
B.c2H=new C.a9(D.b0,D.b6,D.x,B.d6Y,null,null)
B.b5f=new C.o(null,null,H.ad4,B.b2g,null,B.c2H,D.n)
B.FG=new C.u(1,0.08627450980392157,0.10588235294117647,0.1411764705882353,D.q)
B.b3E=new C.bH(D.a0,D.a0,Af.vD,D.a0)
B.b65=new C.o(B.FG,null,B.b3E,null,null,null,D.n)
B.b2r=new C.bh(D.mX,D.it,D.it,D.it)
B.b6b=new C.o(D.aK,null,null,B.b2r,null,null,D.n)
B.fRm=new C.y("\u2600\ufe0f Let it dry",null,U.Am,null,null,null,null,null,null,null,null,null)
B.bai=new C.cf(D.A,null,null,B.fRm,null)
B.fR6=new C.y("\u23e9 Skip to the wiring",null,U.Am,null,null,null,null,null,null,null,null,null)
B.baq=new C.cf(D.A,null,null,B.fR6,null)
B.fFo=new C.y("\ud83c\udfd7\ufe0f",null,D.pG,null,null,null,null,null,null,null,null,null)
B.baH=new C.cf(D.A,null,null,B.fFo,null)
B.fFb=new C.y("\ud83c\udfe0",null,D.aUy,null,null,null,null,null,null,null,null,null)
B.bb8=new C.cf(D.A,null,null,B.fFb,null)
B.bcy=new C.u(1,0.9294117647058824,0.9098039215686274,0.8627450980392157,D.q)
B.LM=new C.u(1,0.1803921568627451,0.20392156862745098,0.25098039215686274,D.q)
B.aeu=new C.u(1,0.16470588235294117,0.10588235294117647,0.07058823529411765,D.q)
B.aex=new C.u(1,0.7215686274509804,0.7450980392156863,0.7764705882352941,D.q)
B.bcK=new C.u(1,0.9725490196078431,0.9647058823529412,0.9333333333333333,D.q)
B.vJ=new C.u(1,0.5450980392156862,0.3686274509803922,0.20392156862745098,D.q)
B.bcQ=new C.u(1,0.5568627450980392,0.5568627450980392,0.5882352941176471,D.q)
B.aeC=new C.u(1,0.611764705882353,0.5568627450980392,0.4588235294117647,D.q)
B.Fb=new C.u(1,0.24705882352941178,0.5607843137254902,0.30980392156862746,D.q)
B.bd5=new C.u(1,0.8392156862745098,0.9333333333333333,0.984313725490196,D.q)
B.mx=new C.u(1,0.9450980392156862,0.9450980392156862,0.9176470588235294,D.q)
B.bdv=new C.u(1,0.9098039215686274,0.9254901960784314,0.9372549019607843,D.q)
B.bdx=new C.u(1,0.4823529411764706,0.5098039215686274,0.5450980392156862,D.q)
B.bdE=new C.u(1,0.7098039215686275,0.8470588235294118,1,D.q)
B.bdH=new C.u(1,0.10588235294117647,0.4980392156862745,0.20392156862745098,D.q)
B.aeU=new C.u(1,0.7215686274509804,0.7450980392156863,0.7725490196078432,D.q)
B.vL=new C.u(1,0.8196078431372549,0.29411764705882354,0.22745098039215686,D.q)
B.nX=new C.u(1,0.5450980392156862,0.3686274509803922,0.23529411764705882,D.q)
B.aeW=new C.u(1,0.1803921568627451,0.2,0.23137254901960785,D.q)
B.aeX=new C.u(1,0.8509803921568627,0.8274509803921568,0.7725490196078432,D.q)
B.af0=new C.u(1,0.6549019607843137,0.6784313725490196,0.7098039215686275,D.q)
B.he=new C.u(1,0.16862745098039217,0.17647058823529413,0.2,D.q)
B.bed=new C.u(1,0.9490196078431372,0.9490196078431372,0.9490196078431372,D.q)
B.af5=new C.u(1,0.13333333333333333,0.6274509803921569,0.4196078431372549,D.q)
B.Fd=new C.u(1,0.8980392156862745,0.7529411764705882,0.4823529411764706,D.q)
B.LW=new C.u(1,0.8156862745098039,0.5098039215686274,0.27450980392156865,D.q)
B.XC=new C.u(1,0.5411764705882353,0.41568627450980394,0.2784313725490196,D.q)
B.af8=new C.u(1,0.4980392156862745,0.7137254901960784,0.9098039215686274,D.q)
B.af9=new C.u(1,0.1843137254901961,0.4196078431372549,0.23529411764705882,D.q)
B.XF=new C.u(1,0.2980392156862745,0.5450980392156862,0.2901960784313726,D.q)
B.vM=new C.u(1,0.788235294117647,0.6274509803921569,0.22745098039215686,D.q)
B.aff=new C.u(1,0.9411764705882353,0.5411764705882353,0.1411764705882353,D.q)
B.Fj=new C.u(1,0.9921568627450981,0.9882352941176471,0.9686274509803922,D.q)
B.XJ=new C.u(1,0.5568627450980392,0.5843137254901961,0.6196078431372549,D.q)
B.bft=new C.u(1,0.47843137254901963,0.35294117647058826,0.22745098039215686,D.q)
B.j9=new C.u(1,0.788235294117647,0.807843137254902,0.8392156862745098,D.q)
B.afp=new C.u(1,0.4196078431372549,0.45098039215686275,0.5019607843137255,D.q)
B.afq=new C.u(1,0.5568627450980392,0.35294117647058826,0.2901960784313726,D.q)
B.Bc=new C.u(1,0.9294117647058824,0.9176470588235294,0.8784313725490196,D.q)
B.bgj=new C.u(1,0.9137254901960784,0.7254901960784313,0.28627450980392155,D.q)
B.bgu=new C.u(1,0.22745098039215686,0.22745098039215686,0.24705882352941178,D.q)
B.bgC=new C.u(1,0.5490196078431373,0.5764705882352941,0.6078431372549019,D.q)
B.xS=new C.u(1,0.22745098039215686,0.24705882352941178,0.2784313725490196,D.q)
B.XP=new C.u(1,0.8980392156862745,0.8980392156862745,0.8666666666666667,D.q)
B.M5=new C.u(1,0.10588235294117647,0.11372549019607843,0.13333333333333333,D.q)
B.bgQ=new C.u(1,0.22745098039215686,0.23529411764705882,0.25882352941176473,D.q)
B.XT=new C.u(1,0.30980392156862746,0.6588235294117647,0.3764705882352941,D.q)
B.bgW=new C.u(1,0.48627450980392156,0.7686274509803922,1,D.q)
B.afF=new C.u(1,0.8509803921568627,0.803921568627451,0.7215686274509804,D.q)
B.afG=new C.u(1,0.4196078431372549,0.2901960784313726,0.16862745098039217,D.q)
B.Fo=new C.u(1,0.11764705882352941,0.11764705882352941,0.12549019607843137,D.q)
B.bh3=new C.u(1,0.8862745098039215,0.8745098039215686,0.8235294117647058,D.q)
B.afJ=new C.u(1,0.9490196078431372,0.7803921568627451,0.611764705882353,D.q)
B.bh7=new C.u(1,0.42745098039215684,0.2901960784313726,1,D.q)
B.bhc=new C.u(1,0.3686274509803922,0.27450980392156865,0.18823529411764706,D.q)
B.bhf=new C.u(1,0.9058823529411765,0.8470588235294118,0.7450980392156863,D.q)
B.bhp=new C.u(1,0.5411764705882353,0.4823529411764706,0.41568627450980394,D.q)
B.bht=new C.u(1,0.24705882352941178,0.16470588235294117,0.10980392156862745,D.q)
B.afQ=new C.u(1,0.34901960784313724,0.3176470588235294,0.29411764705882354,D.q)
B.bhw=new C.u(1,0.24705882352941178,0.6470588235294118,0.3568627450980392,D.q)
B.afR=new C.u(1,0.13725490196078433,0.14901960784313725,0.16862745098039217,D.q)
B.bhE=new C.u(1,0.8117647058823529,0.792156862745098,0.7411764705882353,D.q)
B.XY=new C.u(1,0.8117647058823529,0.8901960784313725,0.9176470588235294,D.q)
B.bhJ=new C.u(1,0.7215686274509804,0.7450980392156863,0.7843137254901961,D.q)
B.M8=new C.u(1,0.3333333333333333,0.396078431372549,0.4823529411764706,D.q)
B.afY=new C.u(1,0.5529411764705883,0.7843137254901961,1,D.q)
B.Y0=new C.u(1,1,0.9019607843137255,0.5019607843137255,D.q)
B.bi8=new C.u(1,0.5411764705882353,0.1843137254901961,0.22745098039215686,D.q)
B.bib=new C.u(1,0.9490196078431372,0.7607843137254902,0.10588235294117647,D.q)
B.ag5=new C.u(1,0.9490196078431372,0.9411764705882353,0.9019607843137255,D.q)
B.biu=new C.u(1,0.8509803921568627,0.7725490196078432,0.6392156862745098,D.q)
B.biy=new C.u(1,0.9686274509803922,0.9607843137254902,0.9333333333333333,D.q)
B.aga=new C.u(1,0.6823529411764706,0.6941176470588235,0.7372549019607844,D.q)
B.nd=new C.u(1,0.1843137254901961,0.49019607843137253,0.8823529411764706,D.q)
B.biJ=new C.u(1,0.788235294117647,0.7176470588235294,0.6078431372549019,D.q)
B.Bh=new C.u(1,0.8901960784313725,0.6627450980392157,0.10980392156862745,D.q)
B.Me=new C.u(1,0.7137254901960784,0.7372549019607844,0.7686274509803922,D.q)
B.biO=new C.u(1,0.8431372549019608,0.8509803921568627,0.8784313725490196,D.q)
B.agf=new C.u(1,0.7215686274509804,0.7529411764705882,0.8,D.q)
B.biZ=new C.u(1,0.22745098039215686,0.49019607843137253,0.26666666666666666,D.q)
B.vP=new C.u(1,0.9019607843137255,0.8823529411764706,0.8352941176470589,D.q)
B.Y7=new C.u(1,0.3686274509803922,0.17647058823529413,0.13725490196078433,D.q)
B.bjc=new C.u(1,0.0196078431372549,0.027450980392156862,0.050980392156862744,D.q)
B.ago=new C.u(1,0.6039215686274509,0.6274509803921569,0.6588235294117647,D.q)
B.Fx=new C.u(1,0.09019607843137255,0.09411764705882353,0.10588235294117647,D.q)
B.Bi=new C.u(1,0.9725490196078431,0.9725490196078431,0.9568627450980393,D.q)
B.agq=new C.u(1,0.5411764705882353,0.5647058823529412,0.6,D.q)
B.bjq=new C.u(1,0.2901960784313726,0.12156862745098039,0.15294117647058825,D.q)
B.agu=new C.u(1,0.9450980392156862,0.9568627450980393,0.9725490196078431,D.q)
B.bjH=new C.u(1,0.9019607843137255,0.9019607843137255,0.8784313725490196,D.q)
B.bjR=new C.u(1,0.29411764705882354,0.21176470588235294,0.12941176470588237,D.q)
B.bk_=new C.u(1,1,0.6392156862745098,0.2784313725490196,D.q)
B.Yb=new C.u(1,0.8941176470588236,0.9058823529411765,0.9176470588235294,D.q)
B.iz=new C.u(1,0.7686274509803922,0.6039215686274509,0.3843137254901961,D.q)
B.bkn=new C.u(1,0.08235294117647059,0.06274509803921569,0.047058823529411764,D.q)
B.agK=new C.u(1,1,0.35294117647058826,0.12156862745098039,D.q)
B.agL=new C.u(1,0.5411764705882353,0.5607843137254902,0.596078431372549,D.q)
B.Mj=new C.u(1,0.16470588235294117,0.10196078431372549,0.06274509803921569,D.q)
B.agN=new C.u(1,0.5411764705882353,0.29411764705882354,0.29411764705882354,D.q)
B.bkB=new C.u(1,0.10588235294117647,0.13333333333333333,0.17254901960784313,D.q)
B.Mk=new C.u(1,0.9098039215686274,0.8509803921568627,0.7372549019607844,D.q)
B.bkD=new C.u(1,0.48627450980392156,0.3215686274509804,0.18823529411764706,D.q)
B.o8=new C.u(1,1,0.9450980392156862,0.6588235294117647,D.q)
B.bl2=new C.u(1,0.5411764705882353,0.5411764705882353,0.5176470588235295,D.q)
B.bl4=new C.u(1,0.9647058823529412,0.9568627450980393,0.9254901960784314,D.q)
B.Mn=new C.u(1,0.47843137254901963,0.23137254901960785,0.1803921568627451,D.q)
B.ble=new C.u(1,0.3333333333333333,0.6274509803921569,0.3333333333333333,D.q)
B.agX=new C.u(1,0.7058823529411765,0.3254901960784314,0.3254901960784314,D.q)
B.blm=new C.u(1,0.6078431372549019,0.6078431372549019,0.592156862745098,D.q)
B.Bn=new C.u(1,0.9568627450980393,0.9450980392156862,0.9176470588235294,D.q)
B.bls=new C.u(1,0.6078431372549019,0.23137254901960785,0.2901960784313726,D.q)
B.rm=new C.u(1,0.8862745098039215,0.23137254901960785,0.23137254901960785,D.q)
B.q_=new C.u(1,0.9490196078431372,0.9490196078431372,0.9254901960784314,D.q)
B.blx=new C.u(1,0.30980392156862746,0.615686274509804,0.3568627450980392,D.q)
B.ah1=new C.u(1,0.788235294117647,0.8117647058823529,0.8392156862745098,D.q)
B.Yo=new C.u(1,0.611764705882353,0.796078431372549,1,D.q)
B.blC=new C.u(1,0.9294117647058824,0.9215686274509803,0.8941176470588236,D.q)
B.Yq=new C.u(1,0.8392156862745098,0.6823529411764706,0.4470588235294118,D.q)
B.ah4=new C.u(1,0.9098039215686274,0.9098039215686274,0.9098039215686274,D.q)
B.Mp=new C.u(1,0.2901960784313726,0.2980392156862745,0.32941176470588235,D.q)
B.Ys=new C.u(1,0.3686274509803922,0.43137254901960786,0.5176470588235295,D.q)
B.bml=new C.u(1,0.20784313725490197,0.47843137254901963,0.26666666666666666,D.q)
B.bmo=new C.u(1,0.3568627450980392,0.10196078431372549,0.09019607843137255,D.q)
B.ahf=new C.u(1,0.23137254901960785,0.1843137254901961,0.14901960784313725,D.q)
B.ahg=new C.u(1,0.8509803921568627,0.788235294117647,0.6588235294117647,D.q)
B.kG=new C.u(1,0.9686274509803922,0.9568627450980393,0.9254901960784314,D.q)
B.ahj=new C.u(1,0.22745098039215686,0.23921568627450981,0.26666666666666666,D.q)
B.ahk=new C.u(1,0.13333333333333333,0.1450980392156863,0.16862745098039217,D.q)
B.tU=new C.u(1,0.16470588235294117,0.1450980392156863,0.13725490196078433,D.q)
B.bmI=new C.u(1,0.5411764705882353,0.23137254901960785,0.23137254901960785,D.q)
B.bmJ=new C.u(1,0.9450980392156862,0.9294117647058824,0.8784313725490196,D.q)
B.Bs=new C.u(1,0.796078431372549,0.8156862745098039,0.8392156862745098,D.q)
B.Yy=new C.u(1,0.8980392156862745,0.7254901960784313,0.11764705882352941,D.q)
B.ahs=new C.u(1,0.5607843137254902,0.8156862745098039,1,D.q)
B.bn7=new C.u(1,0.7490196078431373,0.8901960784313725,1,D.q)
B.ahz=new C.u(1,0.6039215686274509,0.4196078431372549,0.24705882352941178,D.q)
B.YC=new C.u(1,0.10588235294117647,0.10588235294117647,0.11372549019607843,D.q)
B.bnt=new C.u(1,0.9529411764705882,0.9058823529411765,0.6313725490196078,D.q)
B.ahG=new C.u(1,0.9490196078431372,0.9490196078431372,0.9333333333333333,D.q)
B.bnS=new C.u(1,0.6274509803921569,0.6509803921568628,0.6823529411764706,D.q)
B.bo4=new C.u(0,0.2196078431372549,0.7411764705882353,0.9725490196078431,D.q)
B.boc=new C.u(1,0.8156862745098039,0.35294117647058826,0.22745098039215686,D.q)
B.boi=new C.u(1,0.8509803921568627,0.788235294117647,0.6274509803921569,D.q)
B.boj=new C.u(1,0.16470588235294117,0.16470588235294117,0.18823529411764706,D.q)
B.ahU=new C.u(1,0.9294117647058824,0.9372549019607843,0.9490196078431372,D.q)
B.YH=new C.u(1,0.9490196078431372,0.9176470588235294,0.8274509803921568,D.q)
B.ai0=new C.u(1,0.10588235294117647,0.07058823529411765,0.03529411764705882,D.q)
B.boF=new C.u(1,0.3607843137254902,0.7019607843137254,0.9098039215686274,D.q)
B.ai1=new C.u(1,0.043137254901960784,0.043137254901960784,0.050980392156862744,D.q)
B.My=new C.u(1,0.24705882352941178,0.26666666666666666,0.3137254901960784,D.q)
B.boP=new C.u(1,0.12549019607843137,0.13333333333333333,0.14901960784313725,D.q)
B.FQ=new C.u(1,0.8862745098039215,0.27058823529411763,0.35294117647058826,D.q)
B.bp4=new C.u(1,0.12156862745098039,0.43529411764705883,0.2627450980392157,D.q)
B.bp6=new C.u(0.8509803921568627,0.06666666666666667,0.07450980392156863,0.09411764705882353,D.q)
B.y5=new C.u(1,0.17254901960784313,0.4196078431372549,0.8392156862745098,D.q)
B.tY=new C.u(1,0.7607843137254902,0.4627450980392157,0.22745098039215686,D.q)
B.Bv=new C.u(1,0.7254901960784313,0.7450980392156863,0.7764705882352941,D.q)
B.aia=new C.u(1,0.611764705882353,0.35294117647058826,0.27058823529411763,D.q)
B.bpy=new C.u(1,0.611764705882353,0.5882352941176471,0.5450980392156862,D.q)
B.aii=new C.u(1,0.23137254901960785,0.1843137254901961,0.16470588235294117,D.q)
B.MH=new C.u(1,0.9686274509803922,0.9490196078431372,0.9019607843137255,D.q)
B.bq0=new C.u(1,0.2,0.21176470588235294,0.23137254901960785,D.q)
B.bq5=new C.u(1,0.7098039215686275,0.7333333333333333,0.7647058823529411,D.q)
B.bq6=new C.u(1,0.9294117647058824,0.9294117647058824,0.9098039215686274,D.q)
B.bqc=new C.u(1,0.9098039215686274,0.8941176470588236,0.8549019607843137,D.q)
B.bqh=new C.u(1,0.23137254901960785,0.23137254901960785,0.25098039215686274,D.q)
B.bql=new C.u(1,0.1411764705882353,0.10588235294117647,0.09411764705882353,D.q)
B.FW=new C.u(1,0.7686274509803922,0.5411764705882353,0.11764705882352941,D.q)
B.bqo=new C.u(1,0.43529411764705883,0.7137254901960784,1,D.q)
B.bqy=new C.u(1,0.9450980392156862,0.9019607843137255,0.8156862745098039,D.q)
B.bqA=new C.u(1,0.9137254901960784,0.8980392156862745,0.8549019607843137,D.q)
B.aiB=new C.u(1,0.18823529411764706,0.2,0.22745098039215686,D.q)
B.aiC=new C.u(1,0.6235294117647059,0.6588235294117647,0.7019607843137254,D.q)
B.MJ=new C.u(1,0.9372549019607843,0.9372549019607843,0.9176470588235294,D.q)
B.aiE=new C.u(0.6666666666666666,1,0.16470588235294117,0.10196078431372549,D.q)
B.bqR=new C.u(1,0.9372549019607843,0.9137254901960784,0.8627450980392157,D.q)
B.bqU=new C.u(1,0.9294117647058824,0.9019607843137255,0.8156862745098039,D.q)
B.YY=new C.u(1,0.4196078431372549,0.24705882352941178,0.19215686274509805,D.q)
B.aiH=new C.u(1,0.12156862745098039,0.6392156862745098,0.2627450980392157,D.q)
B.br_=new C.u(1,0.803921568627451,0.6274509803921569,0.2,D.q)
B.aiQ=new C.u(1,0.8901960784313725,0.8627450980392157,0.8117647058823529,D.q)
B.Z0=new C.u(1,0.3607843137254902,0.7019607843137254,1,D.q)
B.aiU=new C.u(1,0.48627450980392156,0.2901960784313726,0.17647058823529413,D.q)
B.Z1=new C.u(1,0.9568627450980393,0.9568627450980393,0.9411764705882353,D.q)
B.brH=new C.u(1,0.8431372549019608,0.8,0.6588235294117647,D.q)
B.MN=new C.u(1,0.9176470588235294,0.9647058823529412,1,D.q)
B.bsl=new C.u(1,0.9019607843137255,0.8745098039215686,0.796078431372549,D.q)
B.aj5=new C.u(1,0.8431372549019608,0.16470588235294117,0.16470588235294117,D.q)
B.MT=new C.u(1,0.47843137254901963,0.30980392156862746,0.1568627450980392,D.q)
B.bsF=new C.u(1,0.9294117647058824,0.9372549019607843,0.9529411764705882,D.q)
B.BC=new C.u(1,0.6901960784313725,0.5411764705882353,0.3568627450980392,D.q)
B.i1=new C.u(1,0.6078431372549019,0.8274509803921568,0.9607843137254902,D.q)
B.bsZ=new C.u(1,0.48627450980392156,0.2901960784313726,0.22745098039215686,D.q)
B.Zd=new C.u(1,0.7490196078431373,0.8901960784313725,0.9686274509803922,D.q)
B.Ze=new C.u(1,0.23137254901960785,0.6078431372549019,1,D.q)
B.ajd=new C.u(1,0.8509803921568627,0.8235294117647058,0.7607843137254902,D.q)
B.Zg=new C.u(1,1,0.6901960784313725,0.6588235294117647,D.q)
B.qa=new C.u(1,0.4196078431372549,0.2901960784313726,0.19607843137254902,D.q)
B.btc=new C.u(1,0.8509803921568627,0.7450980392156863,0.5725490196078431,D.q)
B.Zh=new C.u(1,0.13333333333333333,0.14901960784313725,0.17254901960784313,D.q)
B.btf=new C.u(1,0.8117647058823529,0.788235294117647,0.7215686274509804,D.q)
B.btj=new C.u(1,0.7176470588235294,0.4745098039215686,0.12156862745098039,D.q)
B.btp=new C.u(1,0.9294117647058824,0.9294117647058824,0.9176470588235294,D.q)
B.btq=new C.u(1,0.7529411764705882,0.5411764705882353,0.35294117647058826,D.q)
B.bts=new C.u(1,0.5450980392156862,0.4196078431372549,0.24705882352941178,D.q)
B.buv=new A.tn("none","Nothing happens: the device gets no power.",!1,!1,!1)
B.buw=new A.tn("none","It cannot be judged: the wire functions were not verified.",!1,!1,!1)
B.bux=new A.tn("smoke","The loose connection overheats: it glows, smokes and chars the device. In a real wall this can start a fire.",!1,!1,!0)
B.buy=new A.tn("none","It does not work as it should: some part runs wrongly or not at all. That does not tell you what is wrong, so check against the diagram.",!1,!1,!1)
B.buz=new A.tn("none","It runs. There is nothing to see, and that is the danger: with no ground, a fault would energize the metal parts.",!0,!1,!1)
B.buA=new A.tn("none","It works as the diagram says.",!0,!1,!1)
B.buB=new A.tn("none","It works, and every safety rule is met.",!0,!1,!1)
B.buC=new A.tn("none","Nothing happens: it is dead. But the hot wire is connected, so it can still be live. No sparks, no smoke: that does not make it safe.",!1,!1,!1)
B.buD=new A.tn("spark","Bare copper touches something it should not: sparks. The circuit is not safe.",!1,!1,!1)
B.buE=new A.tn("none","It looks fine for now. But the support cannot carry the weight, and it can fall later.",!1,!1,!1)
B.buF=new A.tn("fire","BANG. A short circuit: a flash, sparks, smoke and a flame at the device. The breaker trips and the device is ruined. The wires and the device are not safe to use.",!1,!0,!0)
B.buG=new A.tn("arc","Hot and neutral are reversed: the parts that should be dead are live. Blue arcs show the energized metal. The simulator does not let anything run on this: it is unsafe, even if a real appliance might seem to work.",!1,!1,!1)
B.buH=new A.tn("arc","Current flows through the ground wire and the metal parts it joins. Arcs crackle at the box. This is a shock hazard.",!1,!1,!1)
B.buI=new A.tn("spark","The neutral and ground are joined: the protective device trips with a snap of sparks.",!1,!0,!1)
B.bvA=new A.akq("expired","That order took too long and went back on the board.",0)
B.bxw=new C.bb(55e3)
B.byn=new C.P(0,2,0,6)
B.byI=new C.P(10,0,16,0)
B.byO=new C.P(10,10,10,8)
B.byU=new C.P(10,16,10,14)
B.bzb=new C.P(11,7,11,7)
B.a_e=new C.P(11,9,11,9)
B.bAd=new C.P(14,16,14,10)
B.bAk=new C.P(14,4,14,28)
B.akN=new C.P(14,8,14,24)
B.bAu=new C.P(16,0,10,0)
B.bBU=new C.P(1,0,0,0)
B.bCv=new C.P(22,0,22,44)
B.bDc=new C.P(26,8,26,8)
B.bDP=new C.P(4,22,4,12)
B.bE1=new C.P(4,4,8,4)
B.bE3=new C.P(4,6,12,4)
B.am1=new C.P(9,0,9,0)
B.bF_=new C.P(9,12,9,12)
B.bF0=new C.P(9,6,2,6)
B.bF1=new C.P(9,6,9,6)
B.fWA=new C.y("Practice mode (no explanations, real shocks)",null,D.aUG,null,null,null,null,null,null,null,null,null)
B.bFx=new C.by(1,D.ba,B.fWA,null)
B.fyY=new C.y("\ud83c\udfd8 Community",null,R.tj,null,null,null,null,null,null,null,null,null)
B.bac=new C.cf(D.A,null,null,B.fyY,null)
B.bFF=new C.by(1,D.ba,B.bac,null)
B.fDz=new C.y("House tour",null,D.n1,null,null,null,null,null,null,null,null,null)
B.fK5=new C.y("A film of your whole house, with every TV on.",null,D.a9N,null,null,null,null,null,null,null,null,null)
B.dmX=w([B.fDz,D.bF,B.fK5],x.p)
B.but=new C.fj(D.ah,D.e,D.i,D.E,null,D.p,null,0,B.dmX,null)
B.bFK=new C.by(1,D.ba,B.but,null)
B.fJH=new C.y("Construction Lab",null,R.tj,null,null,null,null,null,null,null,null,null)
B.fym=new C.y("Wire it. Plumb it. Fix a house.",null,D.hs,null,null,null,null,null,null,null,null,null)
B.ddm=w([B.fJH,B.fym],x.p)
B.buc=new C.fj(D.ah,D.e,D.i,D.E,null,D.p,null,0,B.ddm,null)
B.bFU=new C.by(1,D.ba,B.buc,null)
B.aTW=new C.F(!0,D.c,null,null,null,null,14,D.H,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fS0=new C.y("5 portions of food\n10 points",null,B.aTW,null,null,null,null,null,null,null,null,null)
B.bFZ=new C.by(1,D.ba,B.fS0,null)
B.fE6=new C.y("3 doses of medicine\n12 points",null,B.aTW,null,null,null,null,null,null,null,null,null)
B.bGe=new C.by(1,D.ba,B.fE6,null)
B.fPD=new C.y("Drone film",null,D.fw,null,null,null,null,null,null,null,null,null)
B.bGj=new C.by(1,D.ba,B.fPD,null)
B.fWa=new C.y("Uber licence",null,D.fw,null,null,null,null,null,null,null,null,null)
B.bGL=new C.by(1,D.ba,B.fWa,null)
B.bHJ=new A.a59(null,null)
B.a0C=new A.rn(0,"tripped")
B.a0D=new A.rn(1,"noHotWater")
B.a0E=new A.rn(10,"wallHole")
B.a0F=new A.rn(11,"clogged")
B.O1=new A.rn(2,"nutLeak")
B.O2=new A.rn(3,"pexLeak")
B.a0G=new A.rn(5,"flicker")
B.a0H=new A.rn(6,"burntOutlet")
B.a0I=new A.rn(7,"gfciTripped")
B.a0J=new A.rn(8,"runningToilet")
B.a0K=new A.rn(9,"dripFaucet")
B.bJu=new A.oq(!1,"back",0,10)
B.bJv=new A.oq(!1,"back",0,9)
B.bJw=new A.oq(!1,"back",50,0)
B.bJx=new A.oq(!1,"back",56,11)
B.bJy=new A.oq(!1,"back",-50,10)
B.bJz=new A.oq(!1,"left",40,9)
B.bJA=new A.oq(!1,"right",40,10)
B.a0T=new A.oq(!1,"right",50,5)
B.amS=new A.nO("tv100",'Giant 100"',"\ud83d\udcfa",89,!1)
B.bLK=new C.a0(61419,"MaterialIcons",!1)
B.bLW=new C.a0(61888,"MaterialIcons",!1)
B.bMG=new C.a0(62978,"MaterialIcons",!1)
B.bML=new C.a0(63015,"MaterialIcons",!1)
B.bN7=new C.a0(63165,"MaterialIcons",!1)
B.OE=new C.a0(63228,"MaterialIcons",!1)
B.bNe=new C.a0(63251,"MaterialIcons",!1)
B.aoM=new C.a0(63547,"MaterialIcons",!0)
B.bOp=new C.a0(983222,"MaterialIcons",!1)
B.bOO=new C.a0(983510,"MaterialIcons",!1)
B.bOP=new C.a0(983511,"MaterialIcons",!1)
B.bP0=new C.a0(983666,"MaterialIcons",!1)
B.apx=new C.a0(983775,"MaterialIcons",!1)
B.a2w=new C.a0(983894,"MaterialIcons",!1)
B.bSv=new C.ae(D.om,null,null,null,null,null)
B.bTZ=new C.ae(D.cx,26,D.aC,null,null,null)
B.bWt=new C.ae(D.mO,null,null,null,null,null)
B.bXk=new C.ae(D.CB,22,D.c,null,null,null)
B.bXp=new C.ae(D.kN,null,F.fA,null,null,null)
B.bZm=new C.ae(D.ok,null,null,null,null,null)
B.c_C=new C.ae(D.f9,null,D.aC,null,null,null)
B.c_O=new C.ae(A1.Hn,null,D.bt,null,null,null)
B.h__=new A.q(0,100,20)
B.c1H=new A.hh(B.h__,"No power in this house",D.bB,0)
B.heO=new A.q(-60,40,130)
B.c1I=new A.hh(B.heO,"\ud83e\uddef Walk here to check the equipment",D.d0,0)
B.h0G=new A.q(0,62,12)
B.c1J=new A.hh(B.h0G,"\ud83d\uded7 Elevator: walk onto the blue mat or tap",D.jw,19502)
B.h0z=new A.q(0,50,80)
B.c1K=new A.hh(B.h0z,"\ud83d\udcda Walk here to teach the class",D.d0,0)
B.h1b=new A.q(105,52,100)
B.c1L=new A.hh(B.h1b,"\ud83c\udf06 Balcony: step here to see the city",D.ej,0)
B.hf1=new A.q(-80,70,40)
B.c1M=new A.hh(B.hf1,"\ud83d\udc69\u200d\u2695\ufe0f Nurse",D.cQ,0)
B.h0D=new A.q(0,52,78)
B.c1N=new A.hh(B.h0D,"\ud83e\udeaa Walk here to get your Uber licence",D.jw,0)
B.hf2=new A.q(-84,84,120)
B.c1O=new A.hh(B.hf2,"\ud83c\udf5e Food and drinks",D.d0,0)
B.h0m=new A.q(0,40,176)
B.c1P=new A.hh(B.h0m,"\ud83c\udf4e Fresh fruit",D.el,0)
B.aWu=new A.q(0,26,312)
B.c1Q=new A.hh(B.aWu,"\u2b07 Walk here to go out",D.ej,0)
B.c1R=new A.hh(B.aWu,"\ud83d\uded7 Take the elevator down to go out",D.jw,0)
B.h6O=new A.q(90,40,56)
B.c1S=new A.hh(B.h6O,"\ud83d\udcd6 Library",D.dF,0)
B.h6l=new A.q(80,40,56)
B.c1T=new A.hh(B.h6l,"\ud83d\udd25 Fire drill",D.bB,0)
B.aWp=new A.q(0,100,36)
B.c1U=new A.hh(B.aWp,"\ud83e\udeaa NGMY Licence office",D.N,0)
B.aX6=new A.q(34,56,18)
B.c1V=new A.hh(B.aX6,"\ud83e\uddd1\u200d\ud83d\udcbc Clerk",D.cQ,0)
B.hdP=new A.q(-0.4,4.2,-2.4)
B.c1W=new A.hh(B.hdP,"LIVE 120 V",D.bB,0)
B.hf0=new A.q(-80,52,66)
B.c1X=new A.hh(B.hf0,"\ud83c\udfe5 Walk here to admit the sick",D.eP,0)
B.h0A=new A.q(0,50,84)
B.c1Y=new A.hh(B.h0A,"\ud83d\udcb0 Counter: walk here to pay or sell",D.ej,0)
B.c1Z=new A.hh(B.aX6,"\ud83e\uddd1\u200d\ud83d\udcbc Cashier",D.cQ,0)
B.c2Y=new C.a9(D.a5,D.a8,D.x,N.azG,null,null)
B.c3W=new C.a9(D.a5,D.a8,D.x,N.ay4,null,null)
B.bqq=new C.u(1,0.2901960784313726,0.20392156862745098,0.0784313725490196,D.q)
B.bn9=new C.u(1,0.12156862745098039,0.10196078431372549,0.07058823529411765,D.q)
B.bfJ=new C.u(1,0.16470588235294117,0.12156862745098039,0.07058823529411765,D.q)
B.doX=w([B.bqq,B.bn9,B.bfJ],x.O)
B.c40=new C.a9(D.ay,D.aE,D.x,B.doX,null,null)
B.bhH=new C.u(1,0.8509803921568627,0.6039215686274509,0.11764705882352941,D.q)
B.dbg=w([F.fA,B.bhH],x.O)
B.c48=new C.a9(D.ay,D.aE,D.x,B.dbg,null,null)
B.bpB=new C.u(1,0.0392156862745098,0.058823529411764705,0.1803921568627451,D.q)
B.bsn=new C.u(1,0.1411764705882353,0.08235294117647059,0.3215686274509804,D.q)
B.cMW=w([E.ag8,B.bpB,B.bsn],x.O)
B.c4Q=new C.a9(D.b0,D.b6,D.x,B.cMW,null,null)
B.d7L=w([E.jN,E.M2,E.jN],x.O)
B.arR=new C.a9(D.a5,D.a8,D.x,B.d7L,null,null)
B.bmZ=new C.u(1,0.8901960784313725,0.9254901960784314,0.9803921568627451,D.q)
B.d6d=w([D.c,B.bmZ],x.O)
B.c66=new C.a9(D.b0,D.b6,D.x,B.d6d,null,null)
B.btg=new C.u(1,0.07058823529411765,0.22745098039215686,0.47843137254901963,D.q)
B.d_q=w([E.jN,B.btg],x.O)
B.c6h=new C.a9(D.ay,D.aE,D.x,B.d_q,null,null)
B.dpE=w([D.cr,D.dd],x.O)
B.zm=new C.a9(D.b0,D.b6,D.x,B.dpE,null,null)
B.ck3=w([E.jN,E.M2],x.O)
B.c6w=new C.a9(D.a5,D.a8,D.x,B.ck3,null,null)
B.eg7={ground:0}
B.Ae=new C.dw(B.eg7,1,x.M)
B.un=new A.fm(25,"Green screw: GROUND",B.Ae,y.H,!1,"ground")
B.egp={lineA:0}
B.f5E=new C.dw(B.egp,1,x.M)
B.bKu=new A.fm(23,"LINE screw 1 (top left)",B.f5E,"Hot leg 1 from the panel goes on the top left screw.",!1,"hot")
B.egq={lineB:0}
B.f5s=new C.dw(B.egq,1,x.M)
B.bKm=new A.fm(21,"LINE screw 2 (top right)",B.f5s,"Hot leg 2 from the panel goes on the top right screw.",!1,"hot")
B.egs={loadA:0}
B.f5D=new C.dw(B.egs,1,x.M)
B.bK2=new A.fm(24,"LOAD screw 1 (bottom left)",B.f5D,"Hot leg 1 to the heater goes on the bottom left screw: it is switched through from the top left one.",!1,"hot")
B.egu={loadB:0}
B.f6f=new C.dw(B.egu,1,x.M)
B.bKf=new A.fm(22,"LOAD screw 2 (bottom right)",B.f6f,"Hot leg 2 to the heater goes on the bottom right screw.",!1,"hot")
B.c6R=w([B.un,B.bKu,B.bKm,B.bK2,B.bKf],x.r)
B.c6V=w(["flange","wax","toilet","bolts","valve","hosehot","hosecold","faucet","tail","trap","arm"],x.s)
B.a3b=w([0,0,0,0],x.t)
B.c75=w([0,0,0,1],x.k)
B.cg7=w([139,161],x.n)
B.cge=w([145,158],x.n)
B.cib=w([15,25],x.n)
B.avD=w([16,28],x.n)
B.cjW=w([Y.qQ,A8.TS,S.lp,V.aPQ],x.f)
B.ck7=w([1,1,1],x.k)
B.ck8=w([1,1,1,1],x.k)
B.hbD=new A.q(-57.8,-32,0)
B.b7G=new A.z7(0,"Outlet spot 1",!1,B.hbD,"low")
B.hcp=new A.q(-9.8,-32,0)
B.b7D=new A.z7(1,"Outlet spot 2",!1,B.hcp,"low")
B.hcY=new A.q(38.2,-32,0)
B.b7J=new A.z7(2,"Outlet spot 3",!1,B.hcY,"low")
B.hbd=new A.q(-25.8,0,0)
B.b7H=new A.z7(3,"Switch spot 1",!1,B.hbd,"switch")
B.hcj=new A.q(22.2,0,0)
B.b7F=new A.z7(4,"Switch spot 2",!1,B.hcj,"switch")
B.het=new A.q(-30,48,40)
B.b7I=new A.z7(5,"Ceiling light spot",!0,B.het,"light")
B.h3J=new A.q(30,48,40)
B.b7E=new A.z7(6,"Ceiling fan spot",!0,B.h3J,"fan")
B.uM=w([B.b7G,B.b7D,B.b7J,B.b7H,B.b7F,B.b7I,B.b7E],C.at("O<z7>"))
B.ezp=new C.z(4,6)
B.ezW=new C.z(5,7)
B.eAk=new C.z(6,8)
B.ckz=w([S.lp,An.vd,E.TP,E.TQ,B.ezp,B.ezW,B.eAk],C.at("O<+(G,G)>"))
B.ckC=w([2],x.t)
B.crl=w(["The living room has no power: find the tripped breaker in the panel and reset it.","The kitchen sink drips: pick the wrench and tighten the slip nut under the sink. (Build the house up to Fixtures to see the problems.)"],x.s)
B.hcF=new A.q(11,4.6,-6)
B.h79=new A.q(11,5.4,-7.85)
B.hbX=new A.q(3.4,5.4,-7.85)
B.aXA=new A.q(3.4,3.4,-7.85)
B.crn=w([B.hcF,B.h79,B.hbX,B.aXA],x.o)
B.cs5=w([3],x.t)
B.csf=w([300,800,1300,1800],x.n)
B.cuf=w([32,80],x.n)
B.hnv=new A.ho(0,0.7,2.2,2,0,0,0)
B.hnk=new A.ho(3,0.1,0.95,-0.42,-0.3,-0.2,0.05)
B.hnE=new A.ho(6.5,0,0.9,-0.38,0.3,0.2,0.05)
B.hnN=new A.ho(9.5,-0.9,1.15,0.1,0,0,0)
B.hnK=new A.ho(12.5,-1.7,1.45,1.6,0,0,0)
B.hnj=new A.ho(15.5,-2.8,1,-0.35,0,0,0)
B.hnD=new A.ho(18.5,-3.6,0.9,0.05,0,0,0)
B.hnH=new A.ho(21.5,-4.6,1.5,1.5,0,0,0)
B.hnw=new A.ho(24.5,-5.4,0.9,-0.4,0,0,0)
B.hnP=new A.ho(27.5,-6.28,0.75,0.05,0,0,0)
B.hnx=new A.ho(30,-6,2.4,1.7,0,0,0)
B.d4A=w([B.hnv,B.hnk,B.hnE,B.hnN,B.hnK,B.hnj,B.hnD,B.hnH,B.hnw,B.hnP,B.hnx],x.x)
B.hnn=new A.ho(0,-3.14,1.2,-0.3,0,0,0)
B.hng=new A.ho(4,-2.2,1.1,0,0,0,0)
B.hnO=new A.ho(8,-1.2,1,0.4,0,0,0)
B.hnl=new A.ho(12,-0.4,1,0.9,0,0,0)
B.hno=new A.ho(15,0.1,0.85,1.7,0,0,0)
B.hnf=new A.ho(18,0.3,0.8,0,0,0,0)
B.hnm=new A.ho(21,0,0.9,-0.2,0.35,0.25,0)
B.hns=new A.ho(24,0.6,1.4,0.1,-0.2,0,0)
B.hnt=new A.ho(27,1.4,1.2,0.8,0,0,0)
B.hnr=new A.ho(30,2.4,2.3,1.5,0,0,0)
B.dbV=w([B.hnn,B.hng,B.hnO,B.hnl,B.hno,B.hnf,B.hnm,B.hns,B.hnt,B.hnr],x.x)
B.hnp=new A.ho(0,0.3,2.6,0.5,0,0,0)
B.hnJ=new A.ho(3,0.1,1,0,0,0,0)
B.hnM=new A.ho(6,0,0.95,0.05,0.2,0.15,0)
B.hnA=new A.ho(9,-0.8,1.6,0.3,0,0,0)
B.hnF=new A.ho(12,-1.57,1,-0.2,0,0,0)
B.hny=new A.ho(15,-2.4,1.5,0.9,0,0,0)
B.hnC=new A.ho(18,-3.14,1,0.1,0,0,0)
B.hnu=new A.ho(21,-3.9,1.5,0.6,0,0,0)
B.hnQ=new A.ho(24,-4.71,1,-0.3,0,0,0)
B.hnh=new A.ho(27,-5.5,1.3,0.5,0,0,0)
B.hne=new A.ho(30,-6.28,2.6,0.9,0,0,0)
B.cHZ=w([B.hnp,B.hnJ,B.hnM,B.hnA,B.hnF,B.hny,B.hnC,B.hnu,B.hnQ,B.hnh,B.hne],x.x)
B.hnI=new A.ho(0,0,0.5,3.5,0,0,0)
B.hni=new A.ho(4,0.2,1,-0.3,0,0,0)
B.hnL=new A.ho(8,1,1,0,0,0,0)
B.hnc=new A.ho(12,1.57,1.2,0.3,0,0,0)
B.hnG=new A.ho(16,3.14,1.4,1.2,0,0,0)
B.hnd=new A.ho(20,3.5,0.9,-0.35,0,0,0)
B.hnq=new A.ho(24,4.7,1.1,0,0,0,0)
B.hnz=new A.ho(28,6,1,0.3,0,0,0)
B.hnB=new A.ho(30,6.3,2.2,1.4,0,0,0)
B.d4e=w([B.hnI,B.hni,B.hnL,B.hnc,B.hnG,B.hnd,B.hnq,B.hnz,B.hnB],x.x)
B.cwz=w([B.d4A,B.dbV,B.cHZ,B.d4e],C.at("O<ai<ho>>"))
B.cwA=w([380,820,1420,1660],x.n)
B.egB={neutral:0}
B.E8=new C.dw(B.egB,1,x.M)
B.bKl=new A.fm(23,"Silver screw (top): NEUTRAL",B.E8,y.G,!1,"neutral")
B.bJU=new A.fm(24,"Silver screw (bottom): NEUTRAL",B.E8,y.G,!1,"neutral")
B.egS={switched:0}
B.f6l=new C.dw(B.egS,1,x.M)
B.bJS=new A.fm(21,"Brass screw (top): SWITCHED hot",B.f6l,"The top half is the switched one: the red wire that comes back from the wall switch goes here.",!1,"hot")
B.efM={always:0}
B.f5p=new C.dw(B.efM,1,x.M)
B.bKi=new A.fm(22,"Brass screw (bottom): ALWAYS hot",B.f5p,"The bottom half is always on: the black wire straight from the panel goes here.",!1,"hot")
B.cxN=w([B.un,B.bKl,B.bJU,B.bJS,B.bKi],x.r)
B.ePS=new C.z(-820,640)
B.eAY=new C.z(820,640)
B.cxS=w([B.ePS,B.eAY],x.f)
B.hv1=new A.pG(0,-80,66,24)
B.hv2=new A.pG(1,20,48,20)
B.hva=new A.pG(2,20,98,20)
B.hvb=new A.pG(3,20,148,20)
B.cyh=w([B.hv1,B.hv2,B.hva,B.hvb],x.X)
B.Dc=w([],x.m)
B.b1I=new A.rd("highway","\ud83d\udee3\ufe0f","Highway board","Huge and wide, on two thick poles, with a walkway under it",420,170,150,B.Dc,0,1)
B.b1F=new A.rd("tower","\ud83d\uddfc","Tall tower sign","A big sign high up on one very thick pole",400,210,270,B.Dc,0,1)
B.b1L=new A.rd("neon","\ud83c\udf03","Neon board","A big black board with a glowing neon edge",380,190,120,B.Dc,0,1)
B.b1K=new A.rd("roof","\ud83c\udfe0","Rooftop board","A tall house with two big TVs, the NGMY carpet on its back, and a huge board on its roof",460,180,308,B.Dc,800,1)
B.b1E=new A.rd("screen","\ud83d\udcfa","Big screen","A giant TV screen on a stand",440,250,60,B.Dc,0,1)
B.b1M=new A.rd("gate","\ud83d\udeaa","Town gate","A huge arch with the board across it",600,200,200,B.Dc,0,1)
B.b1q=new A.lI(-420,140,0.35,0,1)
B.b1o=new A.lI(460,-420,-0.3,160,1.35)
B.d2q=w([B.b1q,B.b1o],x.m)
B.b1D=new A.rd("duo","\ud83e\udea7","Two far apart","Two separate boards: a near one and a taller one far behind it",320,160,140,B.d2q,0,0.7)
B.b1j=new A.lI(-460,0,0,0,1)
B.b1r=new A.lI(460,0,0,0,1)
B.do6=w([B.b1j,B.acF,B.b1r],x.m)
B.b1O=new A.rd("line3","\u2194\ufe0f","Three in a row","Three separate boards standing in one straight line",300,150,150,B.do6,0,0.6)
B.b1h=new A.lI(-950,250,0.5,0,1)
B.b1g=new A.lI(150,-700,-0.2,220,1.55)
B.b1k=new A.lI(1000,60,-0.55,0,0.9)
B.cTm=w([B.b1h,B.b1g,B.b1k],x.m)
B.b1G=new A.rd("far3","\ud83d\udef0\ufe0f","Three scattered far","Three separate boards far from each other, one of them tall and far behind",320,160,140,B.cTm,0,0.6)
B.b1w=new A.lI(-360,300,0.15,0,1)
B.b1l=new A.lI(360,300,-0.15,0,1)
B.b1t=new A.lI(0,-120,0,100,1.25)
B.b1n=new A.lI(-160,-640,0.1,260,1.6)
B.c7y=w([B.b1w,B.b1l,B.b1t,B.b1n],x.m)
B.b1J=new A.rd("skyline","\ud83c\udf06","Skyline","Four separate boards, the taller ones standing behind the shorter ones",300,150,130,B.c7y,0,0.6)
B.b1f=new A.lI(-440,160,0,0,1)
B.b1u=new A.lI(0,160,0,0,1)
B.b1e=new A.lI(440,160,0,0,1)
B.b1v=new A.lI(-440,-420,3.141592653589793,130,1.2)
B.b1i=new A.lI(0,-420,3.141592653589793,130,1.2)
B.b1s=new A.lI(440,-420,3.141592653589793,130,1.2)
B.dpN=w([B.b1f,B.b1u,B.b1e,B.b1v,B.b1i,B.b1s],x.m)
B.b1H=new A.rd("lines6","\ud83d\udee4\ufe0f","Two lines of three","Six separate boards: a straight line of three facing front, and a taller line of three behind it facing back",280,140,140,B.dpN,0,0.6)
B.b1p=new A.lI(0,300,0,0,1)
B.b1c=new A.lI(0,-300,3.141592653589793,0,1)
B.b1m=new A.lI(-560,0,-1.5707963267948966,0,1)
B.b1d=new A.lI(560,0,1.5707963267948966,0,1)
B.duT=w([B.b1p,B.b1c,B.b1m,B.b1d],x.m)
B.b1N=new A.rd("scatter","\ud83c\udf10","Billboard park","Four separate boards: one at the front, one at the back and one on each side, all facing out",320,160,150,B.duT,0,0.6)
B.a3F=w([B.b1I,B.b1F,B.b1L,B.b1K,B.b1E,B.b1M,B.b1D,B.b1O,B.b1G,B.b1J,B.b1H,B.b1N],C.at("O<rd>"))
B.dBQ=new A.ia(-134,-36,16,44)
B.dBD=new A.ia(34,118,30,66)
B.dBE=new A.ia(34,118,80,116)
B.dBC=new A.ia(34,118,130,166)
B.dBR=new A.ia(-134,-76,140,160)
B.cyl=w([B.dBQ,B.dBD,B.dBE,B.dBC,B.dBR],x.T)
B.cyo=w([y.O,y.x,y.R,"Fasten the single black feed from the panel to the FEED screw (it powers both switches through a joined tab).","Fasten the black wire to the first light to the screw of switch 1.","Fasten the black wire to the second light to the screw of switch 2.",y.b,y.n],x.s)
B.ePC=new C.z(-600,1250)
B.ePA=new C.z(-520,1260)
B.ePy=new C.z(-460,1250)
B.ezH=new C.z(520,1280)
B.eA4=new C.z(600,1270)
B.ePm=new C.z(-300,1300)
B.cDg=w([B.ePC,B.ePA,B.ePy,B.ezH,B.eA4,B.ePm],x.f)
B.cDI=w([460,900,1500,1740],x.n)
B.biN=new C.u(1,0.5411764705882353,0.35294117647058826,0.23529411764705882,D.q)
B.afO=new C.u(1,0.10588235294117647,0.07058823529411765,0.06274509803921569,D.q)
B.bt9=new C.u(1,0.8509803921568627,0.27450980392156865,0.49411764705882355,D.q)
B.aey=new C.u(1,0.23137254901960785,0.24705882352941178,0.3607843137254902,D.q)
B.erC=new A.tO(B.biN,B.afO,B.bt9,B.aey,"xbot",!1,0,1)
B.f2Y=new A.Fq(0,"Ama",0,2,B.erC,"A nurse who works nights.")
B.bkX=new C.u(1,0.4196078431372549,0.27058823529411763,0.18823529411764706,D.q)
B.bhX=new C.u(1,0.08627450980392157,0.06274509803921569,0.06274509803921569,D.q)
B.bqC=new C.u(1,0.1803921568627451,0.5607843137254902,0.3568627450980392,D.q)
B.erG=new A.tO(B.bkX,B.bhX,B.bqC,B.LM,"soldier",!1,0,1)
B.f2W=new A.Fq(1,"Joseph",1,2,B.erG,"A student who is always hungry.")
B.boA=new C.u(1,0.6274509803921569,0.4196078431372549,0.2784313725490196,D.q)
B.bj5=new C.u(1,0.2901960784313726,0.24705882352941178,0.4196078431372549,D.q)
B.erH=new A.tO(B.boA,B.Mj,D.aA,B.bj5,"xbot",!1,0,1)
B.f3_=new A.Fq(2,"Grace",3,4,B.erH,"A teacher who marks papers late.")
B.aeM=new C.u(1,0.8784313725490196,0.6431372549019608,0.48627450980392156,D.q)
B.aj2=new C.u(1,0.1843137254901961,0.43529411764705883,0.7098039215686275,D.q)
B.erE=new A.tO(B.aeM,D.agV,B.aj2,B.LM,"soldier",!1,0,1)
B.f2X=new A.Fq(3,"Daniel",6,8,B.erE,"A driver who sleeps in the day.")
B.bre=new C.u(1,0.788235294117647,0.5450980392156862,0.3686274509803922,D.q)
B.bjh=new C.u(1,0.16862745098039217,0.17647058823529413,0.22745098039215686,D.q)
B.erA=new A.tO(B.bre,B.afO,D.aD,B.bjh,"xbot",!1,0,1)
B.f31=new A.Fq(4,"Fatima",7,8,B.erA,"A baker who gets up at four.")
B.aiT=new C.u(1,0.47843137254901963,0.29411764705882354,0.18823529411764706,D.q)
B.bpK=new C.u(1,0.24705882352941178,0.22745098039215686,0.2,D.q)
B.erD=new A.tO(B.aiT,D.e2,D.d0,B.bpK,"soldier",!1,0,1)
B.f2Z=new A.Fq(5,"Papa Moses",10,-1,B.erD,"The oldest in the house. He watches TV all day.")
B.bnn=new C.u(1,0.5490196078431373,0.3568627450980392,0.23137254901960785,D.q)
B.erF=new A.tO(B.bnn,B.agL,D.ax,B.aey,"xbot",!1,0,1)
B.f30=new A.Fq(6,"Mama Rose",9,-1,B.erF,"Cooks for everybody in the kitchen.")
B.CS=w([B.f2Y,B.f2W,B.f3_,B.f2X,B.f31,B.f2Z,B.f30],C.at("O<Fq>"))
B.cFH=w([50,130],x.n)
B.cFI=w([50,140],x.n)
B.cGu=w([51,52,53],x.t)
B.eFa=new C.z(-9.5,4.6)
B.eHE=new C.z(-5.9,2.3)
B.eNN=new C.z(8.8,4.4)
B.cHL=w([B.eFa,B.eHE,B.eNN],x.f)
B.cI7=w([5,35],x.n)
B.cII=w([61,63],x.t)
B.cIV=w([62,64],x.t)
B.cJV=w([68,172],x.n)
B.bi2=new C.u(1,0.6039215686274509,0.30980392156862746,0.30980392156862746,D.q)
B.bti=new C.u(1,0.30980392156862746,0.47843137254901963,0.3686274509803922,D.q)
B.zp=w([B.nX,B.Ys,B.bi2,B.bti,B.ahg,D.jf],x.O)
B.bpR=new C.u(1,0.23137254901960785,0.07058823529411765,0.07058823529411765,D.q)
B.bjg=new C.u(1,0.23137254901960785,0.1843137254901961,0.0392156862745098,D.q)
B.bgi=new C.u(1,0.043137254901960784,0.1803921568627451,0.09019607843137255,D.q)
B.cKM=w([B.bpR,B.bjg,B.bgi],x.O)
B.r3=new A.iP("ground","Bare copper \xb7 ground",B.tY,D.c,"ground")
B.rr=new C.u(1,0.14901960784313725,0.14901960784313725,0.16470588235294117,D.q)
B.hjl=new A.iP("feed","Black \xb7 hot feed from the panel",B.rr,D.c,"hot")
B.Mq=new C.u(1,0.22745098039215686,0.1803921568627451,0.1803921568627451,D.q)
B.hjg=new A.iP("loadA","Black \xb7 to light 1",B.Mq,D.c,"hot")
B.bfx=new C.u(1,0.16862745098039217,0.16862745098039217,0.2,D.q)
B.hji=new A.iP("loadB","Black \xb7 to light 2",B.bfx,D.c,"hot")
B.cLj=w([B.r3,B.hjl,B.hjg,B.hji],x.d)
B.axY=w([72,73,74,75],x.t)
B.ePj=new C.z(-25,-15)
B.ex0=new C.z(25,-15)
B.ePi=new C.z(-25,15)
B.ex_=new C.z(25,15)
B.cPf=w([B.ePj,B.ex0,B.ePi,B.ex_],x.f)
B.h6L=new A.q(-125,292,-114.5)
B.hal=new A.q(125,292,-114.5)
B.hd2=new A.q(125,208,-114.5)
B.ha0=new A.q(-125,208,-114.5)
B.cPw=w([B.h6L,B.hal,B.hd2,B.ha0],x.o)
B.cPH=w([y.O,y.x,y.R,y.r,y.E,y.k,y.b,y.n],x.s)
B.cTv=w([y.O,"Look at the face: an L-shaped slot (W, neutral) and two slanted slots (X and Y, hot), and no ground hole. That is a NEMA 10-30, the old 3-wire dryer outlet. The neutral also grounds the dryer, which is only allowed in old houses.",y.r,y.E,y.k,y.b,y.n],x.s)
B.bJC=new A.nO("wall","Whole-wall TV","\ud83c\udfac",0,!0)
B.bJN=new A.nO("tv200",'Cinema 200"',"\ud83c\udfac",175,!1)
B.bJF=new A.nO("tv150",'Cinema 150"',"\ud83c\udfac",130,!1)
B.bJH=new A.nO("bangtv",'Beovision TV 77"',"\ud83d\udcfa",66,!1)
B.bJB=new A.nO("sonytv",'Sony Bravia 75"',"\ud83d\udcfa",64,!1)
B.bJO=new A.nO("lgtv",'LG OLED 65"',"\ud83d\udcfa",56,!1)
B.bJE=new A.nO("tv",'Samsung Neo QLED 55"',"\ud83d\udcfa",48,!1)
B.bJM=new A.nO("appletv",'Apple TV 4K 50"',"\ud83d\udcfa",44,!1)
B.bJL=new A.nO("lamp","Table lamp","\ud83d\udca1",0,!1)
B.bJK=new A.nO("toaster","Toaster","\ud83c\udf5e",0,!1)
B.bJD=new A.nO("hairdryer","Hair dryer","\ud83d\udc87",0,!1)
B.bJG=new A.nO("washer","Washing machine","\ud83e\uddfa",0,!1)
B.bJI=new A.nO("dryer","Clothes dryer","\ud83c\udf00",0,!1)
B.bJJ=new A.nO("range","Kitchen range","\ud83c\udf73",0,!1)
B.a45=w([B.bJC,B.bJN,B.bJF,B.amS,B.bJH,B.bJB,B.bJO,B.bJE,B.bJM,B.bJL,B.bJK,B.bJD,B.bJG,B.bJI,B.bJJ],C.at("O<nO>"))
B.bis=new C.u(1,0.7764705882352941,0.5254901960784314,0.25882352941176473,D.q)
B.bjo=new C.u(1,0.43529411764705883,0.2901960784313726,0.1803921568627451,D.q)
B.bqN=new C.u(1,0.6627450980392157,0.44313725490196076,0.29411764705882354,D.q)
B.ayg=w([F.mF,B.bis,E.afN,B.bjo,B.bqN],x.O)
B.cX5=w([y.O,"Two cables come into the box: one from the breaker panel (LINE) and one going to the light (LOAD).","Twist the two white wires together with a wire nut. A switch does not cut the neutral.",y.R,"Fasten the black wire from the panel to one BRASS screw.","Fasten the black wire that goes to the light to the other BRASS screw.","Push the switch into the box, put the plate on and test with the power on."],x.s)
B.evH=new C.z(0,330)
B.eP9=new C.z(-120,1080)
B.ewb=new C.z(120,1080)
B.ePk=new C.z(-300,1000)
B.exp=new C.z(300,1000)
B.ePM=new C.z(-700,800)
B.eAt=new C.z(700,800)
B.cXt=w([B.evH,B.eP9,B.ewb,B.ePk,B.exp,B.ePM,B.eAt],x.f)
B.cXz=w(["Walnut","Blue grey","Brick red","Sage green","Sand","Charcoal"],x.s)
B.jF=w(["switch","switch2p","switch3","switch4","switchsmart","switchcombo"],x.s)
B.h8L=new A.q(-6.5,7.5,-7.85)
B.h8R=new A.q(-6.5,7.8,-3)
B.cXU=w([B.h8L,B.h8R],x.o)
B.hjM=new A.FX("NGMY JOBS","Find work. Get hired. Get paid.",D.aA,D.im,D.tO)
B.hjU=new A.FX("NGMY LOANS","Help when you need it most.",D.cT,D.dY,D.vU)
B.hjP=new A.FX("KISWAHILI SCHOOL","Learn Swahili and English, step by step.",D.bP,D.tL,D.vX)
B.hjR=new A.FX("CIVIC REGISTRY","Your family, your community, registered.",D.d3,D.d7,D.nZ)
B.hjL=new A.FX("CORE PROTOCOL","Studios for curious minds.",D.b7,D.js,D.pY)
B.hjQ=new A.FX("BUILD AND FIX","The Construction Lab: wire it, plumb it.",D.fr,D.hN,D.tZ)
B.hjF=new A.FX("CREATE WITH NGMY","Videos, slides, bios and books.",D.bE,D.kd,D.pV)
B.cXY=w([B.hjM,B.hjU,B.hjP,B.hjR,B.hjL,B.hjQ,B.hjF],C.at("O<FX>"))
B.duH=w(["Switch 1 common","Switch 2 common","Traveler terminal (both switches)","Green ground screw","Neutral splice (not on a switch)"],x.s)
B.efC={"Line (from the breaker)":0,"Load (to the light)":1,"Traveler A":2,"Traveler B":3,Ground:4,Neutral:5}
B.dyN=new C.bu(B.efC,["Switch 1 common","Switch 2 common","Traveler terminal (both switches)","Traveler terminal (both switches)","Green ground screw","Neutral splice (not on a switch)"],x.l)
B.doC=w(["Never assume the dark screw is the same on every brand: read the diagram on the switch.","A switch loop or an old house may not follow the colors: verify the wires."],x.s)
B.bwy=new A.akv("threeway","Three-way switch (two switches, one light)","Two three-way switches control one light from two places. Each switch has a COMMON terminal (dark screw) and two TRAVELER terminals. Power (line) goes to the common of the first switch, the light (load) to the common of the second, and two travelers join the switches. The ground goes to the green screw. A standard single-pole switch cannot do this job.",B.duH,B.dyN,B.doC)
B.cYT=w(["Fan (motor) control wire","Light control wire","Neutral","Ground","Fan-rated support"],x.s)
B.egj={"Motor lead (black)":0,"Light lead (blue)":1,"Neutral (white)":2,"Ground (green)":3,Support:4}
B.dzm=new C.bu(B.egj,["Fan (motor) control wire","Light control wire","Neutral","Ground","Fan-rated support"],x.l)
B.d2p=w(["A blue wire is a light-kit lead on many fans, but not on all: read the diagram.","A fan that spins does not prove the installation is safe."],x.s)
B.bwz=new A.akv("fanlight","Ceiling fan with a light kit","A fan has a motor and often a light kit, and they are not always switched together. Follow the fan maker's diagram: the motor lead goes to the fan control (or switched hot), the light lead to the light control, the white to neutral and the green to the ground. The box must be fan rated.",B.cYT,B.dzm,B.d2p)
B.qD=w([B.bwy,B.bwz],C.at("O<akv>"))
B.huZ=new A.pG(0,-100,100,24)
B.hv5=new A.pG(1,90,100,24)
B.cY9=w([B.huZ,B.hv5],x.X)
B.ePW=new C.z(-95,160)
B.ePs=new C.z(-35,175)
B.eBh=new C.z(95,170)
B.cYe=w([B.ePW,B.ePs,B.eBh],x.f)
B.biX=new C.u(1,0.9176470588235294,0.9490196078431372,0.9686274509803922,D.q)
B.box=new C.u(1,0.9647058823529412,0.9098039215686274,0.9098039215686274,D.q)
B.bns=new C.u(1,0.9529411764705882,0.9215686274509803,0.7843137254901961,D.q)
B.ayD=w([B.Bn,B.biX,B.box,B.bns],x.O)
B.aYx=new A.iP("neutral","White \xb7 neutral (middle)",B.mx,D.av,"neutral")
B.aYA=new A.iP("hot1","Black \xb7 hot (left)",B.rr,D.c,"hot")
B.aYy=new A.iP("hot2","Red \xb7 hot (right)",B.vL,D.c,"hot")
B.cYk=w([B.aYx,B.aYA,B.aYy],x.d)
B.efV={common:0}
B.f66=new C.dw(B.efV,1,x.M)
B.bK1=new A.fm(23,"COMMON screw (the odd one)",B.f66,"The COMMON screw is the one with a different colour. The black wire that brings the power in, or goes to the light, belongs here.",!1,"hot")
B.egU={trav1:0,trav2:1}
B.aRq=new C.dw(B.egU,2,x.M)
B.bK8=new A.fm(21,"Traveler screw (top)",B.aRq,y.a,!1,"hot")
B.bKn=new A.fm(22,"Traveler screw (bottom)",B.aRq,y.a,!1,"hot")
B.cYr=w([B.un,B.bK1,B.bK8,B.bKn],x.r)
B.dBX=new A.ia(-60,60,28,50)
B.dBT=new A.ia(-150,-100,70,170)
B.dBw=new A.ia(100,150,70,170)
B.dBY=new A.ia(-60,-20,156,186)
B.dBB=new A.ia(20,60,156,186)
B.cYG=w([B.dBX,B.dBT,B.dBw,B.dBY,B.dBB],x.T)
B.cYI=w([y.O,"The cable comes in through the top of the box. Strip about 3/4 inch of insulation from each wire.","Fasten the bare copper ground wire to the GREEN screw.","Fasten the white (neutral) wire to a SILVER screw.","Fasten the black (hot) wire to a BRASS screw. Wrap each wire clockwise under its screw.","Fold the wires back and push the outlet into the box.","Put the cover plate on, then turn the power on and test."],x.s)
B.hgj=new A.q(-3.6,7.5,-7.85)
B.h88=new A.q(-3.6,4.2,-7.85)
B.cYQ=w([B.hgj,B.h88],x.o)
B.cYS=w([-0.5,-0.25,0,0.25,0.5],x.n)
B.eVO=new C.b7(600,400,!0)
B.eVi=new C.b7(1030,400,!0)
B.eVj=new C.b7(1210,400,!0)
B.cZl=w([B.eVO,B.eVi,B.eVj],C.at("O<+(K,K,R)>"))
B.cZB=w([0,2,1,3,4,6,7,8],x.t)
B.eWw=new C.b7(-0.1,0,0.5)
B.eYE=new C.b7(0.35,-0.4,0.3)
B.eXu=new C.b7(-0.4,0.55,0.35)
B.cZH=w([B.eWw,B.eYE,B.eXu],C.at("O<+(K,K,K)>"))
B.eP3=new C.z(-1050,"store")
B.aQ3=new C.z(-840,"tower")
B.ePE=new C.z(-630,"tower")
B.ePu=new C.z(-420,"gasstation")
B.aQ2=new C.z(-210,"tower")
B.evM=new C.z(0,"hq")
B.aPR=new C.z(210,"tower")
B.exY=new C.z(420,"store")
B.eA6=new C.z(630,"tower")
B.aPT=new C.z(840,"tower")
B.ew1=new C.z(1050,"gasstation")
B.d_g=w([B.eP3,B.aQ3,B.ePE,B.ePu,B.aQ2,B.evM,B.aPR,B.exY,B.eA6,B.aPT,B.ew1],x.d6)
B.a4m=w(["Always switch the breaker OFF and test the wires with a tester before you touch them.","Never use water on an electrical fire: switch the power off at the breaker first.","Reversed hot and neutral can look fine and still be a shock hazard.","A GFCI outlet protects you near water: press TEST every month.","A ceiling fan needs a fan-rated box, because it is heavy and it shakes."],x.s)
B.hd8=new A.q(9.8,6,-7.85)
B.h7e=new A.q(9.8,7.5,-7.85)
B.hgH=new A.q(-8,7.5,-7.85)
B.ha2=new A.q(-8,1.5,-7.85)
B.d_t=w([B.hd8,B.h7e,B.hgH,B.ha2],x.o)
B.aXL=new A.q(5,1.8,-7.85)
B.hb1=new A.q(5,-0.1,-7.85)
B.hc8=new A.q(12.5,-0.1,-7.85)
B.d0A=w([B.aXL,B.hb1,B.hc8],x.o)
B.fZS=new A.q(3,3.1,-7.1)
B.aXC=new A.q(3,1.7,-7.1)
B.hc2=new A.q(3,1,-7.1)
B.h3l=new A.q(3.65,0.5,-7.1)
B.h5b=new A.q(4.3,1,-7.1)
B.haZ=new A.q(4.3,1.8,-7.1)
B.hgK=new A.q(5,1.8,-7.1)
B.d13=w([B.fZS,B.aXC,B.hc2,B.h3l,B.h5b,B.haZ,B.hgK,B.aXL],x.o)
B.zs=w(["tv","lamp","toaster","hairdryer","washerM","dryerM","rangeM"],x.s)
B.Ob=new A.fm(23,"Silver screw W: NEUTRAL",B.E8,y.I,!1,"neutral")
B.ega={hot1:0,hot2:1}
B.E6=new C.dw(B.ega,2,x.M)
B.amT=new A.fm(21,"Brass screw X: HOT",B.E6,y.l,!1,"hot")
B.an1=new A.fm(22,"Brass screw Y: HOT",B.E6,y.l,!1,"hot")
B.d1e=w([B.un,B.Ob,B.amT,B.an1],x.r)
B.an0=new A.fm(23,"Silver screw: NEUTRAL",B.E8,y._,!1,"neutral")
B.egc={hot:0}
B.a8V=new C.dw(B.egc,1,x.M)
B.amX=new A.fm(21,"Brass screw: HOT",B.a8V,y.u,!1,"hot")
B.d1g=w([B.un,B.an0,B.amX],x.r)
B.d1B=w(["My outlet is dead and it is dark in here. Please come and wire it.","The light in my room does not work, and my phone will not charge. Can you fix the wiring?","I have no power in my room at all. Can an electrician come?"],x.s)
B.f_r=new C.cy([-0.35,-0.2,0.42,0.3])
B.f_E=new C.cy([0.3,0.25,0.32,0.38])
B.eZu=new C.cy([0.05,-0.55,0.22,0.14])
B.eZX=new C.cy([-0.5,0.45,0.2,0.16])
B.d1N=w([B.f_r,B.f_E,B.eZu,B.eZX],x.eV)
B.d1O=w([D.ax,D.bf,D.aA,D.d3,D.bO,D.f6],x.O)
B.hfZ=new A.q(0.6,11,-3.4)
B.h65=new A.q(0.6,3.2,-3.2)
B.hfp=new A.q(0.6,2.2,-1.9)
B.h5H=new A.q(0.6,0.7,-1.5)
B.d2c=w([B.hfZ,B.h65,B.hfp,B.h5H],x.o)
B.d2o=w([0,24,-24,48,-48],x.n)
B.Ex=new A.iP("neutral","White \xb7 neutral",B.mx,D.av,"neutral")
B.hj5=new A.iP("line","Black \xb7 hot from the panel (LINE)",B.rr,D.c,"hot")
B.hjn=new A.iP("load","Black \xb7 hot to the light (LOAD)",B.Mq,D.c,"hot")
B.d2B=w([B.r3,B.Ex,B.hj5,B.hjn],x.d)
B.eCa=new C.z("outlet","\ud83d\udd0c Outlet")
B.eQB=new C.z("gfci","\ud83d\udee1\ufe0f GFCI outlet")
B.eM6=new C.z("switch","\ud83d\udca1 Light switch")
B.eHF=new C.z("dryer4","\ud83d\udc55 Dryer outlet 4-wire")
B.eQX=new C.z("dryer3","\ud83e\udde6 Dryer outlet 3-wire")
B.eO4=new C.z("range4","\ud83c\udf73 Range outlet 4-wire")
B.eH4=new C.z("range3","\ud83e\udd58 Range outlet 3-wire")
B.ewX=new C.z("washer","\ud83e\uddfa Washer outlet")
B.eOH=new C.z("cord4","\u26a1 Dryer cord 4-wire")
B.eUu=new C.z("cord3","\ud83d\udd0c Dryer cord 3-wire")
B.d2F=w([B.eCa,B.eQB,B.eM6,B.eHF,B.eQX,B.eO4,B.eH4,B.ewX,B.eOH,B.eUu],x.L)
B.az9=w([3,3.6,3.3,2.6],x.n)
B.d2T=w([y.O,y.x,y.R,"Fasten the white NEUTRAL wire to the NEUTRAL (silver) screw. A regular switch never touches the neutral, this one does.","Fasten the black wire from the panel to the LINE screw.","Fasten the black wire that goes to the light to the LOAD screw.",y.b,y.n],x.s)
B.ePL=new C.z(-700,330)
B.eAs=new C.z(700,380)
B.eP5=new C.z(-1100,-420)
B.ew7=new C.z(1100,-480)
B.ePb=new C.z(-1300,100)
B.ewe=new C.z(1350,30)
B.evN=new C.z(0,-900)
B.ePc=new C.z(-1500,-300)
B.ewf=new C.z(1550,-200)
B.d2W=w([B.ePL,B.eAs,B.eP5,B.ew7,B.ePb,B.ewe,B.evN,B.ePc,B.ewf],x.f)
B.d31=w([Y.qQ,A8.TS,S.lp],x.f)
B.bKe=new A.fm(25,"FRAME screw: GROUND (green)",B.Ae,"The green ground wire goes on the screw on the frame, where the strap was.",!1,"ground")
B.amW=new A.fm(21,"MIDDLE terminal: NEUTRAL (white)",B.E8,"The white neutral wire goes on the middle terminal.",!1,"neutral")
B.eg9={hot1:0}
B.f5T=new C.dw(B.eg9,1,x.M)
B.an_=new A.fm(23,"LEFT terminal: black",B.f5T,"The black wire goes on the left terminal.",!1,"hot")
B.egb={hot2:0}
B.f6_=new C.dw(B.egb,1,x.M)
B.amZ=new A.fm(22,"RIGHT terminal: red",B.f6_,"The red wire goes on the right terminal.",!1,"hot")
B.d34=w([B.bKe,B.amW,B.an_,B.amZ],x.r)
B.hv0=new A.pG(0,-64,120,26)
B.hv3=new A.pG(1,64,120,26)
B.hv8=new A.pG(2,0,84,24)
B.d3C=w([B.hv0,B.hv3,B.hv8],x.X)
B.h4f=new A.q(0,8.3,0)
B.aXb=new A.q(0,3.9,0)
B.aze=w([B.h4f,B.aXb],x.o)
B.d3T=w([y.O,"Make sure the box is rated for a fan. A plain light box cannot carry the weight and the shaking.","Join the house ground wire to the fan ground.","Join the house white wire to the fan white wire with a wire nut.","Join the house black wire to the fan black wire with a wire nut.","Push the wires up into the box and fasten the canopy to the ceiling.",y.f],x.s)
B.eO5=new C.z(-3.5,11)
B.eDv=new C.z(3.5,11)
B.eBK=new C.z(-3.5,-11)
B.ezj=new C.z(3.5,-11)
B.d4b=w([B.eO5,B.eDv,B.eBK,B.ezj],x.f)
B.hdB=new A.q(-0.6,11,-3.4)
B.h7l=new A.q(-0.6,3.2,-3.2)
B.hcx=new A.q(-0.6,2.2,-1.9)
B.hh6=new A.q(-0.6,0.7,-1.5)
B.d4c=w([B.hdB,B.h7l,B.hcx,B.hh6],x.o)
B.I8=w(["dog","cat","cow","sheep","chicken","horse"],x.s)
B.abA=new A.hM("look","Look",D.f9)
B.hmr=new A.hM("wall","Wall box",Q.aoi)
B.hmo=new A.hM("ceiling","Ceiling box",D.qp)
B.hmH=new A.hM("fanbox","Fan box",O.Cg)
B.hmT=new A.hM("drill","Drill",D.yV)
B.hmI=new A.hM("cable","Cable roll",E.aoa)
B.djg=w([B.abA,B.hmr,B.hmo,B.hmH,B.hmT,B.hmI],x.b)
B.hmQ=new A.hM("sheet","Drywall sheet",D.CF)
B.hmy=new A.hM("knife","Drywall saw",D.H6)
B.hmu=new A.hM("screw","Screw gun",A5.Hg)
B.hmV=new A.hM("tape","Tape",D.ux)
B.hmN=new A.hM("mud","Mud",Ah.a1R)
B.hn_=new A.hM("sand","Sander",D.H4)
B.bPC=new C.a0(985109,"MaterialIcons",!1)
B.hmC=new A.hM("paint","Roller",B.bPC)
B.dfx=w([B.abA,B.hmQ,B.hmy,B.hmu,B.hmV,B.hmN,B.hn_,B.hmC],x.b)
B.OZ=new C.a0(983223,"MaterialIcons",!1)
B.hmW=new A.hM("outlet","Outlet",B.OZ)
B.hmA=new A.hM("gfci","GFCI",D.uF)
B.hmU=new A.hM("switch","Switch",E.uH)
B.hmt=new A.hM("split","Split outlet",B.OZ)
B.hmY=new A.hM("v240four","240 V 4-wire",X.Cl)
B.hmp=new A.hM("v240three","240 V 3-wire",X.Cl)
B.hmF=new A.hM("v240only","240 V only",X.Cl)
B.hmx=new A.hM("isolated","Isolated ground",B.OZ)
B.a1I=new C.a0(63208,"MaterialIcons",!1)
B.hmO=new A.hM("dryer4","Dryer 4-wire (14-30)",B.a1I)
B.hmw=new A.hM("dryer3","Dryer 3-wire (10-30)",B.a1I)
B.a21=new C.a0(63678,"MaterialIcons",!1)
B.hms=new A.hM("range4","Range 4-wire (14-50)",B.a21)
B.hmL=new A.hM("range3","Range 3-wire (10-50)",B.a21)
B.aoQ=new C.a0(63601,"MaterialIcons",!1)
B.hmm=new A.hM("washer","Washer (5-20)",B.aoQ)
B.hmP=new A.hM("switch2p","Double-pole",E.uH)
B.hmR=new A.hM("switch3","3-way switch",E.uH)
B.hmG=new A.hM("switch4","4-way switch",E.uH)
B.hmE=new A.hM("switchsmart","Smart switch",E.uH)
B.hmn=new A.hM("switchcombo","Double switch",E.uH)
B.hmM=new A.hM("light","Light",D.qx)
B.bPA=new C.a0(985094,"MaterialIcons",!1)
B.hmD=new A.hM("fan","Fan",B.bPA)
B.hmK=new A.hM("tv","TV",A_.a2o)
B.bNQ=new C.a0(63571,"MaterialIcons",!1)
B.hmB=new A.hM("lamp","Lamp",B.bNQ)
B.bMD=new C.a0(62944,"MaterialIcons",!1)
B.hmz=new A.hM("toaster","Toaster",B.bMD)
B.bNc=new C.a0(63209,"MaterialIcons",!1)
B.hmZ=new A.hM("hairdryer","Hair dryer",B.bNc)
B.hmq=new A.hM("washerM","Washing machine",B.aoQ)
B.hmv=new A.hM("dryerM","Dryer",B.a1I)
B.hmS=new A.hM("rangeM","Kitchen range",B.a21)
B.hmX=new A.hM("flip","Flip switch",E.uH)
B.hmJ=new A.hM("tester","Voltage tester",D.uu)
B.azV=w([B.abA,B.hmW,B.hmA,B.hmU,B.hmt,B.hmY,B.hmp,B.hmF,B.hmx,B.hmO,B.hmw,B.hms,B.hmL,B.hmm,B.hmP,B.hmR,B.hmG,B.hmE,B.hmn,B.hmM,B.hmD,B.hmK,B.hmB,B.hmz,B.hmZ,B.hmq,B.hmv,B.hmS,B.hmX,B.hmJ],x.b)
B.d4G=w([B.djg,B.dfx,B.azV],C.at("O<ai<hM>>"))
B.eL3=new C.z(-1.2,0)
B.eU4=new C.z(1.2,0)
B.d4T=w([B.eL3,B.eU4],x.f)
B.d55=w([-0.58,0.58],x.n)
B.d5m=w([40,70,100,130,160],x.n)
B.bK3=new A.fm(23,"NEUTRAL screw (silver)",B.E8,"The electronics inside need the neutral wire to run. White goes on the silver screw.",!1,"neutral")
B.egr={line:0}
B.f6e=new C.dw(B.egr,1,x.M)
B.bKh=new A.fm(21,"LINE screw (brass, hot in)",B.f6e,"The black wire from the breaker panel goes on the LINE screw.",!1,"hot")
B.egv={load:0}
B.f5j=new C.dw(B.egv,1,x.M)
B.bKj=new A.fm(22,"LOAD screw (brass, hot out)",B.f5j,"The black wire that goes to the light goes on the LOAD screw.",!1,"hot")
B.d5w=w([B.un,B.bK3,B.bKh,B.bKj],x.r)
B.emD=new A.nw("flange","flange","Toilet flange",D.Y,"The flange is fixed to the floor over the drain. Everything else sits on it.",!1,0)
B.diU=w(["flange"],x.s)
B.emB=new A.nw("wax","wax","Wax ring",B.diU,"The wax ring goes on the flange before the toilet. It makes the seal against sewer gas and water.",!1,0)
B.du9=w(["wax"],x.s)
B.emy=new A.nw("toilet","toilet","Toilet",B.du9,"The toilet is lowered straight down onto the wax ring. The ring has to be there first.",!1,0)
B.dso=w(["toilet"],x.s)
B.emC=new A.nw("bolts","bolts","Toilet bolts",B.dso,"The two bolts hold the toilet to the flange. Set the toilet first.",!1,2)
B.emz=new A.nw("tvalve","valve","Toilet shut-off valve",D.Y,"The shut-off valve goes on the pipe that comes out of the wall.",!0,0)
B.dsv=w(["tvalve","toilet"],x.s)
B.emA=new A.nw("those","hosecold","Toilet supply hose",B.dsv,"The hose joins the valve to the toilet tank, so both must be there first.",!1,2)
B.aL2=new A.nw("faucet","faucet","Faucet",D.Y,"The faucet goes through the hole in the counter.",!1,0)
B.aL5=new A.nw("vhot","valve","Hot shut-off valve (left)",D.Y,y.X,!0,0)
B.aL3=new A.nw("vcold","valve","Cold shut-off valve (right)",D.Y,y.X,!0,0)
B.dtw=w(["vhot","faucet"],x.s)
B.aL6=new A.nw("hhot","hosehot","Hot supply hose",B.dtw,"The hose joins the hot valve to the faucet, so the valve and the faucet must be there first.",!1,2)
B.dtt=w(["vcold","faucet"],x.s)
B.aL4=new A.nw("hcold","hosecold","Cold supply hose",B.dtt,"The hose joins the cold valve to the faucet, so the valve and the faucet must be there first.",!1,2)
B.aL1=new A.nw("tail","tail","Tailpiece",D.Y,"The tailpiece hangs from the sink drain. It is the first piece of the drain.",!1,0)
B.dsh=w(["tail"],x.s)
B.aL7=new A.nw("trap","trap","P-trap",B.dsh,"The P-trap joins the tailpiece. Build the drain from the top down.",!1,1)
B.dsp=w(["trap"],x.s)
B.aL8=new A.nw("arm","arm","Trap arm",B.dsp,"The trap arm joins the trap and goes into the wall.",!1,1)
B.d02=w([B.emD,B.emB,B.emy,B.emC,B.emz,B.emA,B.aL2,B.aL5,B.aL3,B.aL6,B.aL4,B.aL1,B.aL7,B.aL8],x.fI)
B.esX=new A.Xh("bathroom","Bathroom",B.d02,"Fit out a bathroom: a toilet and a sink with its faucet, supply hoses and drain.")
B.dkP=w([B.aL2,B.aL5,B.aL3,B.aL6,B.aL4,B.aL1,B.aL7,B.aL8],x.fI)
B.esY=new A.Xh("kitchen","Kitchen",B.dkP,"Fit out a kitchen sink: the faucet, the hot and cold supplies and the drain.")
B.azv=w([B.esX,B.esY],C.at("O<Xh>"))
B.ePV=new C.z(-900,400)
B.eBd=new C.z(900,400)
B.ePT=new C.z(-900,1000)
B.eBb=new C.z(900,1000)
B.ePl=new C.z(-300,1260)
B.exq=new C.z(300,1260)
B.eP1=new C.z(-1000,700)
B.evZ=new C.z(1000,700)
B.ePF=new C.z(-640,90)
B.eA7=new C.z(640,90)
B.ePU=new C.z(-900,1400)
B.eBc=new C.z(900,1400)
B.d61=w([B.ePV,B.eBd,B.ePT,B.eBb,B.ePl,B.exq,B.eP1,B.evZ,B.ePF,B.eA7,B.ePU,B.eBc],x.f)
B.d6w=w([B.amW,B.an_,B.amZ],x.r)
B.fZP=new A.q(8.2,0.9,-6.3)
B.hcK=new A.q(8.2,-0.1,-6.3)
B.h2D=new A.q(8.2,-0.1,-7.85)
B.d6G=w([B.fZP,B.hcK,B.h2D],x.o)
B.eA3=new C.z(-4.5,10)
B.eQL=new C.z(4.5,10)
B.eU2=new C.z(-4.5,-10)
B.eQH=new C.z(4.5,-10)
B.d6S=w([B.eA3,B.eQL,B.eU2,B.eQH],x.f)
B.d6T=w([-0.28,0.28],x.n)
B.dC_=new A.ia(-70,70,20,44)
B.dBL=new A.ia(-110,-50,80,100)
B.dBG=new A.ia(50,110,80,100)
B.dBK=new A.ia(-110,-50,130,150)
B.dBF=new A.ia(50,110,130,150)
B.d75=w([B.dC_,B.dBL,B.dBG,B.dBK,B.dBF],x.T)
B.d7m=w([D.ax,D.aA,D.bf,D.lZ,D.d3,D.cd,D.f6],x.O)
B.eJt=new C.z("back","Back wall")
B.eTO=new C.z("left","Left wall")
B.eLI=new C.z("right","Right wall")
B.d7O=w([B.eJt,B.eTO,B.eLI],x.L)
B.efP={black:0}
B.JO=new C.dw(B.efP,1,x.M)
B.bJV=new A.fm(51,"Black wire nut: HOT",B.JO,"The house black wire joins the fixture black wire.",!1,"hot")
B.eh0={white:0}
B.JN=new C.dw(B.eh0,1,x.M)
B.bKq=new A.fm(52,"White wire nut: NEUTRAL",B.JN,"The house white wire joins the fixture white wire.",!1,"neutral")
B.bJQ=new A.fm(53,"Green ground connection",B.Ae,"The bare copper house ground joins the green fixture ground wire.",!1,"ground")
B.d7Z=w([B.bJV,B.bKq,B.bJQ],x.r)
B.ePr=new C.z(-34,-6)
B.exs=new C.z(30,10)
B.eP4=new C.z(-10,24)
B.d83=w([B.ePr,B.exs,B.eP4],x.f)
B.d8a=w([y.O,y.x,y.R,"Fasten hot leg 1 from the panel (black) to the top LEFT screw.","Fasten hot leg 2 from the panel (red) to the top RIGHT screw.","Fasten hot leg 1 to the heater (black) to the bottom LEFT screw.","Fasten hot leg 2 to the heater (red) to the bottom RIGHT screw.",y.b,y.n],x.s)
B.bIn=new A.E8("Oak",B.BC,"wood")
B.bIp=new A.E8("Dark wood",B.qa,"wood")
B.aiV=new C.u(1,0.5529411764705883,0.5647058823529412,0.5882352941176471,D.q)
B.bIr=new A.E8("Grey carpet",B.aiV,"carpet")
B.br7=new C.u(1,0.3568627450980392,0.4980392156862745,0.6509803921568628,D.q)
B.bIo=new A.E8("Blue carpet",B.br7,"carpet")
B.bow=new C.u(1,0.8470588235294118,0.803921568627451,0.7058823529411765,D.q)
B.bIl=new A.E8("Cream carpet",B.bow,"carpet")
B.bIq=new A.E8("White tile",B.Yb,"tile")
B.bIm=new A.E8("Slate tile",B.afp,"tile")
B.azS=w([B.bIn,B.bIp,B.bIr,B.bIo,B.bIl,B.bIq,B.bIm],C.at("O<E8>"))
B.abj=new A.iP("hot1","Black \xb7 hot 1",B.rr,D.c,"hot")
B.abk=new A.iP("hot2","Red \xb7 hot 2",B.vL,D.c,"hot")
B.a4A=w([B.Ex,B.abj,B.abk],x.d)
B.eVV=new C.b7(-80,100,D.ax)
B.eY3=new C.b7(80,100,D.bf)
B.eX2=new C.b7(-80,150,D.aA)
B.d8W=w([B.eVV,B.eY3,B.eX2],x.dV)
B.huX=new A.pG(0,0,78,26)
B.d93=w([B.huX],x.X)
B.egR={store:0,gasstation:1}
B.f6g=new C.dw(B.egR,2,x.M)
B.bvD=new A.zc("food","\ud83c\udf54","Food",B.f6g)
B.egO={shop:0,store:1}
B.f5M=new C.dw(B.egO,2,x.M)
B.bvC=new A.zc("groceries","\ud83d\uded2","Groceries",B.f5M)
B.eg8={hospital:0}
B.f5H=new C.dw(B.eg8,1,x.M)
B.bvF=new A.zc("medicine","\ud83d\udc8a","Medicine",B.f5H)
B.egd={hq:0,tower:1}
B.f6c=new C.dw(B.egd,2,x.M)
B.bvB=new A.zc("package","\ud83d\udce6","Package",B.f6c)
B.efi={school:0,firestation:1,hq:2}
B.f5u=new C.dw(B.efi,3,x.M)
B.bvE=new A.zc("letters","\u2709\ufe0f","Letters",B.f5u)
B.Rj=w([B.bvD,B.bvC,B.bvF,B.bvB,B.bvE],C.at("O<zc>"))
B.d9i=w([y.O,y.x,y.F,"Fasten the black hot to a BRASS screw.","Fasten the green wire with the yellow stripe (the isolated ground, which runs all the way to the panel) to the GREEN screw with the orange triangle. The box itself is grounded with its own bare copper wire.",y.b,y.n],x.s)
B.d9p=w([-1000,-500,0,500,1000],x.n)
B.dan=w([y.O,y.x,"Take the metal GROUND STRAP off: tap it. On a 4-wire cord the neutral must NOT touch the frame, because the green wire grounds the frame.","Fasten the green ground wire to the GREEN frame screw where the strap was.","Fasten the white neutral to the MIDDLE terminal.",y.A,y.c,y.b,y.n],x.s)
B.hcy=new A.q(3,3.2,-7.85)
B.hh8=new A.q(3,4,-7.85)
B.hgk=new A.q(3,4.2,-7.4)
B.h1_=new A.q(3,3.95,-7)
B.daq=w([B.hcy,B.hh8,B.hgk,B.h1_],x.o)
B.das=w(["The sink leaks and there is water on the floor. Please fix the plumbing.","The toilet is not connected and the water is running everywhere. Help!","There is no water at my sink and the pipes are open. Can a plumber come?"],x.s)
B.XE=new C.u(1,0.23137254901960785,0.3568627450980392,0.47843137254901963,D.q)
B.daD=w([D.al,B.XE,D.bM,D.bs],x.O)
B.f6M=new A.rR("apple","\ud83c\udf4e","Apple","A little energy",3,0.12,0,0.1,!1)
B.f6N=new A.rR("water","\ud83d\udca7","Water","Quenches your thirst",2,0,0,0.8,!1)
B.f6O=new A.rR("juice","\ud83e\udd64","Juice","Some energy and a drink",4,0.18,0,0.5,!1)
B.f6T=new A.rR("sandwich","\ud83e\udd6a","Sandwich","A good bit of energy",6,0.3,0,0,!1)
B.f6L=new A.rR("meal","\ud83c\udf54","Burger meal","Lots of energy",10,0.55,0,0,!1)
B.daG=w([B.f6M,B.f6N,B.f6O,B.f6T,B.f6L],x.y)
B.ePG=new C.z(-660,340)
B.ePo=new C.z(-330,340)
B.ext=new C.z(330,340)
B.eA9=new C.z(660,340)
B.ePH=new C.z(-660,500)
B.ePp=new C.z(-330,500)
B.exu=new C.z(330,500)
B.eAa=new C.z(660,500)
B.ePI=new C.z(-660,780)
B.ePq=new C.z(-330,780)
B.exw=new C.z(330,780)
B.eAb=new C.z(660,780)
B.ePz=new C.z(-500,940)
B.ezE=new C.z(500,940)
B.dbi=w([B.ePG,B.ePo,B.ext,B.eA9,B.ePH,B.ePp,B.exu,B.eAa,B.ePI,B.ePq,B.exw,B.eAb,B.ePz,B.ezE],x.f)
B.lj=w(["outlet","gfci","split","v240four","v240three","v240only","isolated","dryer4","dryer3","range4","range3","washer"],x.s)
B.hdd=new A.q(6,0.2,0)
B.hbs=new A.q(6,2.6,0)
B.aYe=new A.q(8.6,2.6,0)
B.dbN=w([B.hdd,B.hbs,B.aYe],x.o)
B.dci=w([D.c,D.du,D.ep,D.eO,D.bN,D.bL],x.O)
B.ePP=new C.z(-7,-7)
B.eAI=new C.z(7,-7)
B.ePO=new C.z(-7,7)
B.eAH=new C.z(7,7)
B.dcx=w([B.ePP,B.eAI,B.ePO,B.eAH],x.f)
B.dcz=w([-2.4,2.4],x.n)
B.dcA=w([-0.5,0,0.5],x.n)
B.amY=new A.fm(21,"Brass screw X: HOT",B.E6,y.p,!1,"hot")
B.amU=new A.fm(22,"Brass screw Y: HOT",B.E6,y.p,!1,"hot")
B.dcL=w([B.un,B.amY,B.amU],x.r)
B.hjs=new A.PM("Black","Hot (line or switched)","Brass terminal","120 V branch circuit","Carries the power from the breaker. Treat it as live until it is tested dead.","Can be a traveler in a three-way switch, or a switched hot. Verify with a tester.")
B.hjq=new A.PM("Red","Hot (second hot or traveler)","Brass or the marked traveler terminal","Switch legs, travelers, fan and light controls","Often the switched wire to a fan or light, or a traveler.","Check the diagram: red can be a traveler or a second circuit.")
B.hjp=new A.PM("White","Neutral","Silver terminal","120 V branch circuit","The return path for the current. It can still be live if something is wrong.","In a switch loop a white wire can be re-marked as a hot. A white wire is not always neutral.")
B.hjo=new A.PM("Bare copper or green","Equipment ground","Green screw or the ground lead","Every grounded device","Not for current in normal use. It is the safety path if a fault happens.","Never use the neutral as a ground. Older homes may have no ground at all: that needs verification.")
B.hjr=new A.PM("Gray / blue / others","Depends on the installation","See the device diagram","Low voltage, control wires, other systems","Do not guess what a wire does from its color.","Colors and their meaning are not the same everywhere. REQUIRES VERIFICATION.")
B.dcP=w([B.hjs,B.hjq,B.hjp,B.hjo,B.hjr],C.at("O<PM>"))
B.Rr=w([-1.6,1.6],x.n)
B.hj3=new A.iP("blackLine","Black \xb7 from the breaker",B.rr,D.c,"hot")
B.hjj=new A.iP("blackLoad","Black \xb7 to the light",B.Mq,D.c,"hot")
B.dcY=w([B.hj3,B.hjj,B.r3],x.d)
B.ddf=w([0,10,22,36,52],x.n)
B.hv_=new A.pG(0,-60,130,26)
B.hv4=new A.pG(1,80,56,22)
B.ddg=w([B.hv_,B.hv4],x.X)
B.ddG=w([D.bo,D.bt,D.ax,D.aJ,D.bs],x.O)
B.egi={isoground:0}
B.f5n=new C.dw(B.egi,1,x.M)
B.bKp=new A.fm(25,"Isolated-ground screw (green, orange triangle)",B.f5n,"The dedicated ground wire goes on the green screw with the orange triangle. It does not touch the box or the strap.",!1,"ground")
B.ddR=w([B.bKp,B.an0,B.amX],x.r)
B.bfq=new C.u(1,0.9294117647058824,0.9019607843137255,0.8392156862745098,D.q)
B.bdm=new C.u(1,0.9137254901960784,0.8274509803921568,0.8274509803921568,D.q)
B.bcx=new C.u(1,0.8352941176470589,0.8941176470588236,0.8156862745098039,D.q)
B.ah_=new C.u(1,0.9529411764705882,0.8901960784313725,0.6549019607843137,D.q)
B.bie=new C.u(1,0.7254901960784313,0.7647058823529411,0.8666666666666667,D.q)
B.brg=new C.u(1,0.5607843137254902,0.6392156862745098,0.6588235294117647,D.q)
B.aA9=w([B.bfq,B.XY,B.bdm,B.bcx,B.ah_,B.bie,B.ah4,B.brg],x.O)
B.efO={blackLine:0,blackLoad:1}
B.aR9=new C.dw(B.efO,2,x.M)
B.bK4=new A.fm(21,"Brass screw (top)",B.aR9,y.v,!1,"hot")
B.bJR=new A.fm(22,"Brass screw (bottom)",B.aR9,y.v,!1,"hot")
B.amV=new A.fm(25,"Green screw: GROUND",B.Ae,y.Z,!1,"ground")
B.des=w([B.bK4,B.bJR,B.amV],x.r)
B.ePR=new C.z(-80,90)
B.eAW=new C.z(80,90)
B.ePQ=new C.z(-80,140)
B.eAV=new C.z(80,140)
B.dfa=w([B.ePR,B.eAW,B.ePQ,B.eAV],x.f)
B.bKr=new A.fm(51,"Black wire nut: HOT",B.JO,"The house black wire joins the fan black wire.",!1,"hot")
B.bJP=new A.fm(52,"White wire nut: NEUTRAL",B.JN,"The house white wire joins the fan white wire.",!1,"neutral")
B.bKc=new A.fm(53,"Green ground connection",B.Ae,"The bare copper house ground joins the green fan ground wire.",!1,"ground")
B.dfh=w([B.bKr,B.bJP,B.bKc],x.r)
B.bci=new A.SB("bus",-575,-25,0,1)
B.bck=new A.SB("police",-575,-25,854,5)
B.bcj=new A.SB("bus",25,575,850,3)
B.bcl=new A.SB("police",25,575,1704,6)
B.kq=w([B.bci,B.bck,B.bcj,B.bcl],C.at("O<SB>"))
B.amE=new A.rn(4,"deadOutlet")
B.dfp=w([B.a0C,B.a0D,B.O1,B.O2,B.amE,B.a0G,B.a0H,B.a0I,B.a0J,B.a0K,B.a0E,B.a0F],C.at("O<rn>"))
B.eZn=new C.cy([0,560,240,7])
B.eZo=new C.cy([0,560,300,9])
B.a4M=w([B.eZn,B.eZo],C.at("O<+(K,K,K,G)>"))
B.ho7=new A.m2("outlet","\ud83d\udd0c","Wall outlet","Black to brass, white to silver",D.aA)
B.ho_=new A.m2("switch","\ud83d\udca1","Light switch","Two blacks and a wire nut",D.aJ)
B.ho0=new A.m2("gfci","\ud83d\udee1\ufe0f","GFCI outlet","LINE and LOAD near water",D.bv)
B.ho8=new A.m2("fan","\ud83c\udf00","Ceiling fan","Black, white, green and a fan box",D.b8)
B.hnT=new A.m2("switch2p","\ud83d\udd25","Double-pole switch","240 V: breaks both hot legs",D.hZ)
B.ho1=new A.m2("switch3","\ud83d\udd00","Three-way switch","Common and two travelers",D.aJ)
B.hod=new A.m2("switch4","\ud83d\udd01","Four-way switch","Between two three-ways",D.cp)
B.hob=new A.m2("switchsmart","\ud83d\udcf6","Smart, motion or timer switch","Needs the neutral wire",D.bq)
B.ho2=new A.m2("switchcombo","\ud83c\udf9a\ufe0f","Combination switch","Two switches, one feed",D.hh)
B.hnW=new A.m2("split","\ud83c\udf17","Split (half-switched) outlet","Break the tab: switched and always-on",D.aT)
B.ho9=new A.m2("v240four","\ud83e\uddfa","4-wire 240 V outlet","Dryer, range and EV: two hots, neutral, ground",D.c0)
B.hoa=new A.m2("v240three","\ud83d\udd70\ufe0f","3-wire 240 V outlet","Old dryer or range: no separate ground",D.cL)
B.hnV=new A.m2("v240only","\u2744\ufe0f","240 V only outlet","Window AC, welder: two hots and ground",D.b8)
B.ho4=new A.m2("isolated","\ud83c\udfed","Isolated-ground outlet","Its own ground wire to the panel",D.bv)
B.hnX=new A.m2("dryer4","\ud83d\udc55","Dryer outlet, 4-wire (14-30)","New houses: X, Y, W and a ground",D.hZ)
B.ho6=new A.m2("dryer3","\ud83e\udde6","Dryer outlet, 3-wire (10-30)","Old houses: the neutral also grounds",D.cL)
B.ho3=new A.m2("range4","\ud83c\udf73","Range outlet, 4-wire (14-50)","50 amp stove: X, Y, W and a ground",D.c0)
B.hoe=new A.m2("range3","\ud83e\udd58","Range outlet, 3-wire (10-50)","Old 50 amp stove: no separate ground",D.aT)
B.hnS=new A.m2("washer","\ud83e\uddfa","Washing machine outlet (5-20)","Its own 20 amp circuit, near water",D.aJ)
B.hoc=new A.m2("cord3","\ud83d\udd0c","Dryer cord, 3-wire hookup","The ground strap stays on",D.bq)
B.hnZ=new A.m2("cord4","\u26a1","Dryer cord, 4-wire hookup","Take the ground strap off",D.bv)
B.ho5=new A.m2("ptrap","\ud83e\udea0","Sink drain (P-trap)","Build a drain with a water seal",D.cp)
B.hnY=new A.m2("faucet","\ud83d\udeb0","Faucet supply lines","Hot left, cold right",D.c0)
B.hnU=new A.m2("house","\ud83c\udfd7\ufe0f","Build and fix a house","Stage by stage, then repair",D.bq)
B.dfL=w([B.ho7,B.ho_,B.ho0,B.ho8,B.hnT,B.ho1,B.hod,B.hob,B.ho2,B.hnW,B.ho9,B.hoa,B.hnV,B.ho4,B.hnX,B.ho6,B.ho3,B.hoe,B.hnS,B.hoc,B.hnZ,B.ho5,B.hnY,B.hnU],C.at("O<m2>"))
B.hjh=new A.iP("always","Black \xb7 always hot (from the panel)",B.rr,D.c,"hot")
B.hjb=new A.iP("switched","Red \xb7 switched hot (from the wall switch)",B.vL,D.c,"hot")
B.dfR=w([B.r3,B.Ex,B.hjh,B.hjb],x.d)
B.dfV=w([y.O,"Find the LINE and LOAD screws. LOAD is covered with yellow tape. Leave it covered unless you feed another outlet.",y.R,"Fasten the white wire to the silver LINE screw.","Fasten the black wire to the brass LINE screw.","Push the GFCI into the box and put the plate on.","Turn the power on, press RESET, then press TEST. It must click off."],x.s)
B.dfY=w([y.O,y.x,y.R,"Fasten the black wire (power in, or to the light) to the COMMON screw: the odd-coloured one.","Fasten the first traveler (red) to a TRAVELER screw.","Fasten the second traveler (white wire taped black) to the other TRAVELER screw.",y.b,y.n],x.s)
B.huY=new A.pG(0,0,80,26)
B.hv6=new A.pG(1,90,56,22)
B.dgg=w([B.huY,B.hv6],x.X)
B.dgq=w(["car","ambulance","firetruck"],x.s)
B.dgr=w([y.O,y.x,"This outlet has its own 20 amp breaker and 12 gauge wire (a yellow cable): the washer must not share its circuit with anything else. The T-shaped slot tells you it takes both 15 and 20 amp plugs. In a laundry area the new code asks for GFCI protection, from a GFCI breaker or a GFCI outlet before it.",y.R,y.F,"Fasten the black hot to a BRASS screw.",y.b,y.n],x.s)
B.dBZ=new A.ia(-62,62,6,46)
B.dBM=new A.ia(-117,-73,149,171)
B.dBW=new A.ia(-57,-13,164,186)
B.dBH=new A.ia(73,117,159,181)
B.dBz=new A.ia(120,144,140,160)
B.dBx=new A.ia(108,142,48,60)
B.dgw=w([B.dBZ,B.dBM,B.dBW,B.dBH,B.dBz,B.dBx],x.T)
B.dgA=w([0.1,8.05],x.n)
B.h13=new A.q(1000,900,1500)
B.h_A=new A.q(0,200,0)
B.aQ1=new C.z(B.h13,B.h_A)
B.h3C=new A.q(300,70,1000)
B.h_V=new A.q(0,250,300)
B.eJL=new C.z(B.h3C,B.h_V)
B.heg=new A.q(-200,90,780)
B.h_R=new A.q(0,240,300)
B.eFJ=new C.z(B.heg,B.h_R)
B.heE=new A.q(-420,520,1000)
B.h_P=new A.q(0,230,300)
B.eBk=new C.z(B.heE,B.h_P)
B.h5N=new A.q(700,330,900)
B.h3A=new A.q(300,230,200)
B.eOz=new C.z(B.h5N,B.h3A)
B.h1m=new A.q(1100,80,300)
B.h4V=new A.q(560,250,0)
B.eNx=new C.z(B.h1m,B.h4V)
B.h1c=new A.q(1080,100,-250)
B.h4U=new A.q(560,240,-100)
B.eRx=new C.z(B.h1c,B.h4U)
B.h12=new A.q(1000,700,-700)
B.h2I=new A.q(200,230,-300)
B.eTK=new C.z(B.h12,B.h2I)
B.h2J=new A.q(200,90,-860)
B.h_X=new A.q(0,250,-300)
B.eQ5=new C.z(B.h2J,B.h_X)
B.heo=new A.q(-300,110,-820)
B.h_S=new A.q(0,240,-300)
B.eGk=new C.z(B.heo,B.h_S)
B.hf8=new A.q(-900,600,-600)
B.hep=new A.q(-300,230,-100)
B.eEV=new C.z(B.hf8,B.hep)
B.he_=new A.q(-1100,90,-200)
B.heK=new A.q(-560,250,0)
B.eTI=new C.z(B.he_,B.heK)
B.hdZ=new A.q(-1100,120,250)
B.heJ=new A.q(-560,240,0)
B.eJb=new C.z(B.hdZ,B.heJ)
B.heT=new A.q(-700,520,1000)
B.hdW=new A.q(-100,230,100)
B.eCU=new C.z(B.heT,B.hdW)
B.h2H=new A.q(200,170,1300)
B.h_O=new A.q(0,230,150)
B.eTu=new C.z(B.h2H,B.h_O)
B.dgQ=w([B.aQ1,B.eJL,B.eFJ,B.eBk,B.eOz,B.eNx,B.eRx,B.eTK,B.eQ5,B.eGk,B.eEV,B.eTI,B.eJb,B.eCU,B.eTu,B.aQ1],x.dt)
B.h9k=new A.q(-0.35,11,-3.4)
B.h7v=new A.q(-0.35,3.2,-3.2)
B.hbC=new A.q(-0.35,2.2,-1.9)
B.h5A=new A.q(-0.35,0.7,-1.5)
B.dgR=w([B.h9k,B.h7v,B.hbC,B.h5A],x.o)
B.hga=new A.q(5.2,7.5,-7.85)
B.hbn=new A.q(5.2,4,-7.85)
B.dgX=w([B.hga,B.hbn],x.o)
B.bJZ=new A.fm(21,"LOAD hot (brass, taped)",D.vi,y.P,!0,"load")
B.bK0=new A.fm(22,"LINE hot (brass)",B.JO,"The black (hot) wire from the breaker goes on the brass LINE screw.",!1,"hot")
B.bJY=new A.fm(23,"LOAD neutral (silver, taped)",D.vi,y.P,!0,"load")
B.bK9=new A.fm(24,"LINE neutral (silver)",B.JN,"The white (neutral) wire from the breaker goes on the silver LINE screw.",!1,"neutral")
B.dhp=w([B.bJZ,B.bK0,B.bJY,B.bK9,B.amV],x.r)
B.hdr=new A.q(0,15.5,-3.6)
B.h9C=new A.q(0,20,-3.6)
B.hgP=new A.q(0,22.5,-2)
B.h73=new A.q(0,22.5,1.1999999999999997)
B.ab6=new A.q(0,21.1,1.6)
B.dhv=w([B.hdr,B.h9C,B.hgP,B.h73,B.ab6],x.o)
B.di8=w([],x.bm)
B.Ih=w([],x.D)
B.di7=w([],x.dI)
B.zy=w([],x.E)
B.di9=w([],x.T)
B.Ii=w([],x.z)
B.aAC=w([],x.e3)
B.wG=w([],x.a)
B.aAB=w([],x.J)
B.nC=w([],x.o)
B.aAE=w([],x.h)
B.aAD=w([],x.f)
B.eFe=new C.z(-1.6,3.5)
B.eEN=new C.z(1.6,3.5)
B.eGN=new C.z(-1.6,-3.5)
B.eDt=new C.z(1.6,-3.5)
B.din=w([B.eFe,B.eEN,B.eGN,B.eDt],x.f)
B.diu=w([y.O,"Look at the face: two slanted slots at the top (X and Y, hot) and one straight slot at the bottom (W, neutral), and no ground hole. That is a NEMA 10-50, the old 3-wire range outlet.",y.r,y.E,y.k,y.b,y.n],x.s)
B.diw=w([y.O,y.x,"Look at the face: a straight slot at the top (W, neutral), two straight slots at the sides (X and Y, hot) and a round hole at the bottom (G, ground). That is a NEMA 14-50, the 4-wire range outlet. It takes 6 gauge wire and a 50 amp double breaker.",y.R,y.r,y.E,y.k,y.b,y.n],x.s)
B.aAL=w([!1,!1,!1,!1],x.u)
B.egh={in1:0,in2:1}
B.aR8=new C.dw(B.egh,2,x.M)
B.bJT=new A.fm(23,"IN screw (top left)",B.aR8,y.g,!1,"hot")
B.bKk=new A.fm(21,"IN screw (top right)",B.aR8,y.g,!1,"hot")
B.egG={out1:0,out2:1}
B.aRf=new C.dw(B.egG,2,x.M)
B.bKb=new A.fm(24,"OUT screw (bottom left)",B.aRf,y.d,!1,"hot")
B.bKd=new A.fm(22,"OUT screw (bottom right)",B.aRf,y.d,!1,"hot")
B.diS=w([B.un,B.bJT,B.bKk,B.bKb,B.bKd],x.r)
B.dj1=w(["city","billboards","edges","houses","hospital","traffic"],x.s)
B.djd=w(["Look at the pieces: the tailpiece, the P-trap and the trap arm. Pick the tailpiece first and tap its glowing outline under the sink.","Pick the P-trap (the U-shaped bend) and tap its glowing outline. It joins the tailpiece.","Pick the trap arm and tap its outline. It joins the trap to the wall drain.","Slide each slip nut up to its joint and hand tighten it: tap the nuts.","Run the water and look for leaks. The U-bend keeps a plug of water that blocks sewer gas."],x.s)
B.fLm=new C.y("\u2728",null,D.a9L,null,null,null,null,null,null,null,null,null)
B.fVS=new C.y("Nobody needs help right now.",null,D.fx,null,D.K,null,null,null,null,null,null,null)
B.fvg=new C.F(!0,D.aR,null,null,null,null,13,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fNK=new C.y("Everybody's wiring and plumbing works. Keep an eye on food and health: things break when you least expect it.",null,B.fvg,null,D.K,null,null,null,null,null,null,null)
B.djD=w([B.fLm,D.Q,B.fVS,D.au,B.fNK],x.p)
B.djK=w(["road","roundabout","roadturn","roadtee","roadcross","house2","bighouse","billboard","tower","hq","store","gasstation","dmv","ubstation","townsign","cornersign","adboard","shop","hospital","firestation","school","car","firetruck","ambulance","dog","cat","cow","sheep","chicken","horse","tree","pine","bush","flowers","fence","lamppost","bench","pond","swing","shed","doghouse"],x.s)
B.eP8=new C.z(-1150,80)
B.ewa=new C.z(1150,80)
B.eP7=new C.z(-1150,1990)
B.ew9=new C.z(1150,1990)
B.djT=w([B.eP8,B.ewa,B.eP7,B.ew9],x.f)
B.f6R=new A.rR("pills","\ud83e\ude79","Pain pills","Cures a headache or a cold: you walk normally again",8,0,0,0,!0)
B.f6Q=new A.rR("bread","\ud83c\udf5e","Food for the town","5 portions for the people who live here",10,0,0,0,!1)
B.f6P=new A.rR("medicine","\ud83d\udc8a","Medicine","3 doses for the sick",12,0,0,0,!1)
B.djX=w([B.f6R,B.f6Q,B.f6P],x.y)
B.dk_=w([D.ax,D.bt,D.bf],x.O)
B.hdK=new A.q(125,292,-121.5)
B.hgG=new A.q(-125,292,-121.5)
B.h10=new A.q(-125,208,-121.5)
B.hdn=new A.q(125,208,-121.5)
B.dk3=w([B.hdK,B.hgG,B.h10,B.hdn],x.o)
B.h24=new A.q(11.4,4.6,-6)
B.h9Y=new A.q(11.4,5,-7.85)
B.h5B=new A.q(2.6,5,-7.85)
B.h6e=new A.q(2.6,3.4,-7.85)
B.dk5=w([B.h24,B.h9Y,B.h5B,B.h6e],x.o)
B.dk9=w(["hospital","shop","school"],x.s)
B.dka=w(["hot","cold"],x.s)
B.dkd=w([D.ax,D.bf,D.aA,D.f6,D.bS],x.O)
B.hjf=new A.iP("black","Black \xb7 hot",B.rr,D.c,"hot")
B.hj9=new A.iP("white","White \xb7 neutral",B.mx,D.av,"neutral")
B.RQ=w([B.hjf,B.hj9,B.r3],x.d)
B.eBI=new C.z(-3.5,4)
B.eIM=new C.z(3.5,4)
B.eDW=new C.z(-3.5,-4)
B.evz=new C.z(3.5,-4)
B.dkE=w([B.eBI,B.eIM,B.eDW,B.evz],x.f)
B.dkJ=w(["Ada","Ben","Chidi","Dina","Efe","Farah","Gus","Halima","Ivo","Jamal","Kemi","Lola"],x.s)
B.eTS=new C.z(-2.4,5)
B.eKd=new C.z(2.4,5)
B.eHo=new C.z(-2.4,-5)
B.eG4=new C.z(2.4,-5)
B.dkK=w([B.eTS,B.eKd,B.eHo,B.eG4],x.f)
B.dlc=w([y.O,"Break off the little brass tab between the two brass screws, so the two halves are separate.",y.R,"Fasten the white neutral to a SILVER screw (the silver tab stays joined).","Fasten the always-hot black wire to the bottom BRASS screw.","Fasten the switched hot (red, from the wall switch) to the top BRASS screw.",y.b,y.n],x.s)
B.dln=w([y.O,y.x,"Look at the face: an L-shaped slot (W, neutral), two straight slots at the sides (X and Y, hot) and a round hole (G, ground). That is a NEMA 14-30, the 4-wire dryer outlet. It takes 10 gauge wire and a 30 amp double breaker.",y.R,y.r,y.E,y.k,y.b,y.n],x.s)
B.bK7=new A.fm(25,"Green screw G: GROUND",B.Ae,y.H,!1,"ground")
B.aAZ=w([B.bK7,B.Ob,B.amT,B.an1],x.r)
B.eY9=new C.b7(-6,-4,D.c_)
B.eWA=new C.b7(5,-5,D.bt)
B.eY7=new C.b7(0,1,D.ax)
B.eYG=new C.b7(-5,5,D.bq)
B.eVJ=new C.b7(6,4,D.c)
B.dlx=w([B.eY9,B.eWA,B.eY7,B.eYG,B.eVJ],x.dV)
B.dm0=w([Y.qQ,S.lp],x.f)
B.dm4=w(["split","v240four","v240three","v240only","isolated"],x.s)
B.eg3={feed:0}
B.f5U=new C.dw(B.eg3,1,x.M)
B.bJX=new A.fm(21,"FEED screw (joined tab)",B.f5U,"The one feed wire goes on the side where the brass screws are joined by a tab: it powers both switches.",!1,"hot")
B.egt={loadA:0,loadB:1}
B.aRe=new C.dw(B.egt,2,x.M)
B.bKo=new A.fm(22,"Switch 1 screw \u2192 light 1",B.aRe,y.q,!1,"hot")
B.bKt=new A.fm(24,"Switch 2 screw \u2192 light 2",B.aRe,y.q,!1,"hot")
B.dmh=w([B.un,B.bJX,B.bKo,B.bKt],x.r)
B.eOB=new C.z("Slab","First the concrete slab (the foundation) is poured and left to cure. Every wall sits on it.")
B.eRB=new C.z("Framing","The carpenters build the wall frames from 2x4 studs, spaced 16 inches apart, with plates on the top and bottom.")
B.eFO=new C.z("Plumbing rough-in","The plumber runs the hot (red) and cold (blue) water lines and the white drain pipes inside the walls and floor before anything is closed up.")
B.eMK=new C.z("Electrical rough-in","The electrician runs the yellow and white cables from the breaker panel to every box, and fixes the boxes to the studs.")
B.eNQ=new C.z("Drywall","Drywall covers the frame. Here it is see-through so you can still look at the pipes and wires behind it.")
B.eGf=new C.z("Fixtures","Last come the outlets, switches, light, sink, toilet and water heater. This is where most repairs happen.")
B.eHz=new C.z("Roof","The roof goes on to keep everything dry. It is see-through here so you can keep looking inside.")
B.dmk=w([B.eOB,B.eRB,B.eFO,B.eMK,B.eNQ,B.eGf,B.eHz],x.L)
B.dBJ=new A.ia(-100,100,24,90)
B.dBO=new A.ia(-134,-110,100,190)
B.dBy=new A.ia(110,134,100,190)
B.dmo=w([B.dBJ,B.dBO,B.dBy],x.T)
B.aYz=new A.iP("hot","Black \xb7 hot",B.rr,D.c,"hot")
B.dmu=w([B.r3,B.Ex,B.aYz],x.d)
B.ePe=new C.z(-17,-9)
B.ewj=new C.z(17,-9)
B.ePd=new C.z(-17,9)
B.ewi=new C.z(17,9)
B.dn_=w([B.ePe,B.ewj,B.ePd,B.ewi],x.f)
B.dn5=w([-100,0,100],x.n)
B.dn6=w([-110,-80,80,110],x.n)
B.a5b=w([-14,14],x.n)
B.dn8=w([-150,150],x.n)
B.dn9=w([-178,178],x.n)
B.dnb=w([-18,18],x.n)
B.aB6=w([-20,0,20],x.n)
B.dnd=w([-21,21],x.n)
B.a5d=w([-26,26],x.n)
B.dne=w([-27,27],x.n)
B.f6S=new A.rR("can","\ud83d\udee2","Gas can","Half a tank of gas",8,0,0.5,0,!1)
B.aRt=new A.rR("tank","\u26fd","Fill the tank","A full tank",12,0,1,0,!1)
B.dnf=w([B.f6S,B.aRt],x.y)
B.dnh=w([-30,-10,10,30],x.n)
B.dni=w([-32,32],x.n)
B.dnj=w([-32,-8,34],x.n)
B.aB7=w([-34,34],x.n)
B.dnk=w([-3,3],x.n)
B.dnl=w([-47,47],x.n)
B.dnm=w([-48,48],x.n)
B.dnn=w([-52,52],x.n)
B.aB9=w([-55,55],x.n)
B.dnp=w([-600,0,600],x.n)
B.dnq=w([-600,600],x.n)
B.dnr=w([-6,6],x.n)
B.dnt=w([-70,70],x.n)
B.oC=w([-72,-24,24],x.t)
B.dnv=w(["Look under the sink. The wall has two shut-off valves: hot on the LEFT (red handle) and cold on the RIGHT (blue handle).","Pick the red hot hose. Tap the left shut-off valve, then the left faucet inlet.","Pick the blue cold hose. Tap the right shut-off valve, then the right faucet inlet.","Turn each valve handle (tap it) to let the water in. Check every connection for drips."],x.s)
B.aBa=w([-7,7],x.n)
B.aBb=w([-80,80],x.n)
B.dnx=w([-900,-300,300,900],x.n)
B.dny=w([-90,0,90],x.n)
B.dnz=w([-90,-52,52,90],x.n)
B.aBe=w([-9,9],x.n)
B.dnL=w(["switch2p","switch3","switch4","switchsmart","switchcombo"],x.s)
B.dnT=w(["medicine","food"],x.s)
B.do5=w([y.O,y.x,y.R,"The first traveler from the FIRST three-way goes on a top screw (IN).","The second traveler from the FIRST three-way goes on the other top screw (IN).","The first traveler to the SECOND three-way goes on a bottom screw (OUT).","The second traveler to the SECOND three-way goes on the other bottom screw (OUT).",y.b,y.n],x.s)
B.doE=w([D.d0,D.aA],x.O)
B.h5K=new A.q(8.2,5,-7.85)
B.hbr=new A.q(8.2,1.2,-7.85)
B.hdG=new A.q(8.2,1,-7.4)
B.dpg=w([B.h5K,B.hbr,B.hdG],x.o)
B.hj2=new A.iP("common","Black \xb7 COMMON (power in or to the light)",B.rr,D.c,"hot")
B.hj0=new A.iP("trav1","Red \xb7 traveler 1",B.vL,D.c,"hot")
B.hjc=new A.iP("trav2","White taped black \xb7 traveler 2",B.mx,D.av,"hot")
B.dph=w([B.r3,B.hj2,B.hj0,B.hjc],x.d)
B.a5m=w(["rug","road","roundabout","roadturn","roadtee","roadcross","pond","flowers"],x.s)
B.dpu=w(["human","soldier","michelle","xbot","human"],x.s)
B.eP2=new C.z(-1050,"hospital")
B.ePD=new C.z(-630,"store")
B.ePv=new C.z(-420,"tower")
B.evO=new C.z(0,"tower")
B.exZ=new C.z(420,"tower")
B.eA5=new C.z(630,"store")
B.ew2=new C.z(1050,"hospital")
B.dpy=w([B.eP2,B.aQ3,B.ePD,B.ePv,B.aQ2,B.evO,B.aPR,B.exZ,B.eA5,B.aPT,B.ew2],x.d6)
B.esV=new A.Ff(61,"Hot shut-off valve (left)",B.a8V,"Hot is always on the LEFT. The red hose goes on the left valve.")
B.efU={cold:0}
B.aRp=new C.dw(B.efU,1,x.M)
B.esW=new A.Ff(62,"Cold shut-off valve (right)",B.aRp,"Cold is always on the RIGHT. The blue hose goes on the right valve.")
B.esT=new A.Ff(63,"Hot faucet inlet (left)",B.a8V,"The left faucet inlet takes the hot (red) hose.")
B.esU=new A.Ff(64,"Cold faucet inlet (right)",B.aRp,"The right faucet inlet takes the cold (blue) hose.")
B.RX=w([B.esV,B.esW,B.esT,B.esU],C.at("O<Ff>"))
B.bKs=new A.fm(21,"Brass screw X: HOT",B.E6,y.m,!1,"hot")
B.bJW=new A.fm(22,"Brass screw Y: HOT",B.E6,y.m,!1,"hot")
B.aBu=w([B.Ob,B.bKs,B.bJW],x.r)
B.a5o=w([-72,-48,-24,0,24],x.t)
B.aBA=w(["1 Rough-in","2 Drywall","3 Devices"],x.s)
B.dqH=w([y.O,y.x,"Look at the terminal block. There is a metal GROUND STRAP from the middle terminal to the frame of the appliance. On a 3-wire cord it stays on: the neutral also grounds the frame.","Fasten the white neutral to the MIDDLE terminal, under the strap.",y.A,y.c,y.b,y.n],x.s)
B.dC1=new A.ia(-90,10,130,160)
B.dBV=new A.ia(-50,50,70,100)
B.dBP=new A.ia(-134,-110,20,70)
B.dra=w([B.dC1,B.dBV,B.dBP],x.T)
B.RZ=w(["road","roadturn","roadtee","roadcross"],x.s)
B.ME=new C.u(1,0.1843137254901961,0.6352941176470588,0.30980392156862746,D.q)
B.hjm=new A.iP("ground","Green \xb7 ground (to the frame)",B.ME,D.c,"ground")
B.drk=w([B.hjm,B.aYx,B.aYA,B.aYy],x.d)
B.bK5=new A.fm(21,"Brass screw (top): HOT side",B.JO,y.N,!1,"hot")
B.bKg=new A.fm(22,"Brass screw (bottom): HOT side",B.JO,y.N,!1,"hot")
B.bKa=new A.fm(23,"Silver screw (top): NEUTRAL side",B.JN,y.Q,!1,"neutral")
B.bK_=new A.fm(24,"Silver screw (bottom): NEUTRAL side",B.JN,y.Q,!1,"neutral")
B.bK6=new A.fm(25,"Green screw: GROUND",B.Ae,"The green screw is for the bare copper or green GROUND wire.",!1,"ground")
B.drm=w([B.bK5,B.bKg,B.bKa,B.bK_,B.bK6],x.r)
B.drs=w([y.O,y.x,y.R,"Fasten the black hot to one HOT brass screw.","Fasten the red hot to the other HOT brass screw. There is no neutral and no silver screw in use.",y.b,y.n],x.s)
B.ePK=new C.z(-700,225)
B.ePa=new C.z(-120,160)
B.ewc=new C.z(120,160)
B.eAv=new C.z(720,225)
B.drI=w([B.ePK,B.ePa,B.ewc,B.eAv],x.f)
B.eWa=new C.b7("hot","Hot hose (red)",B.rm)
B.eWU=new C.b7("cold","Cold hose (blue)",B.nd)
B.drK=w([B.eWa,B.eWU],C.at("O<+(n,n,u)>"))
B.exy=new C.z(34,40)
B.hlN=new A.Az(B.exy,3.141592653589793,2.6,"Washing hands at the sink",!1,!1,!1,"")
B.drM=w([B.hlN],x.h)
B.drR=w(["dryer","range","washer","","dryer","range"],x.s)
B.b1x=new A.Hq("NGMY navy",E.jN,E.M2,D.c,F.fA)
B.b1C=new A.Hq("Purple",D.o9,D.dH,D.c,D.bL)
B.b1A=new A.Hq("Green",D.h3,D.bP,D.c,D.m_)
B.b1y=new A.Hq("Sunset",D.el,D.aA,D.c,D.hY)
B.b1z=new A.Hq("Night",D.N,D.aK,D.b_,D.c_)
B.b1B=new A.Hq("Light",D.c,D.nZ,E.jN,D.dZ)
B.a5r=w([B.b1x,B.b1C,B.b1A,B.b1y,B.b1z,B.b1B],C.at("O<Hq>"))
B.abc=new A.q(15,2.6,0)
B.aBK=w([B.aYe,B.abc],x.o)
B.a5s=w([B.r3,B.Ex,B.abj,B.abk],x.d)
B.b70=new C.ac(0,D.G,D.aS,D.I,24)
B.ds4=w([B.b70],x.V)
B.dsi=w(["tail","trap","arm"],x.s)
B.dsq=w([!0,!0,!0,!0],x.u)
B.dsJ=w([B.r3,B.abj,B.abk],x.d)
B.bsL=new C.u(1,0.1843137254901961,0.30980392156862746,0.30980392156862746,D.q)
B.bqe=new C.u(1,0.3568627450980392,0.4196078431372549,0.5490196078431373,D.q)
B.dsK=w([B.XE,D.bs,B.bsL,B.bqe,D.bn,D.aK],x.O)
B.dsQ=w([D.bE,D.bP,D.cf,D.cd,D.vR,D.cw],x.O)
B.dsS=w([-400,400,-900,900,-1400,1400],x.n)
B.dsT=w([D.ax,D.bt,D.bf,D.d3],x.O)
B.dt3=w([y.O,"Hold the fixture up to the ceiling box. It has three short wires: black, white and green.","Join the house ground wire to the fixture ground.","Join the house white wire to the fixture white wire with a wire nut.","Join the house black wire to the fixture black wire with a wire nut.","Push the wires into the box and fasten the fixture to the ceiling.",y.f],x.s)
B.dC0=new A.ia(-70,70,28,52)
B.dBS=new A.ia(-134,-96,100,170)
B.dBI=new A.ia(96,134,100,170)
B.dtb=w([B.dC0,B.dBS,B.dBI],x.T)
B.dtc=w([30,60,120,180,300],x.t)
B.ePh=new C.z(-210,60)
B.ewW=new C.z(210,90)
B.ePn=new C.z(-330,120)
B.exv=new C.z(330,60)
B.eP6=new C.z(-110,330)
B.ew8=new C.z(110,330)
B.ePB=new C.z(-560,640)
B.ezM=new C.z(560,640)
B.ePt=new C.z(-420,1100)
B.exX=new C.z(420,1100)
B.dtl=w([B.ePh,B.ewW,B.ePn,B.exv,B.eP6,B.ew8,B.ePB,B.ezM,B.ePt,B.exX],x.f)
B.c2i=new A.jS("Breaker off, then test","Before you touch any wire, switch its breaker OFF, then check with a voltage tester that the wire is dead. A switch on the wall is not enough.")
B.c25=new A.jS("Lock out, tag out","On a real job you put a lock or a note on the panel so nobody switches the power back on while you work.")
B.c2p=new A.jS("Water and power","Water carries electricity. Near sinks, tubs and outdoors the outlets must be GFCI, and wet hands never touch wires.")
B.c2a=new A.jS("Eyes, ears, lungs","Safety glasses for drilling and cutting, ear protection for loud tools, and a mask when you sand drywall dust or cut tile.")
B.c2o=new A.jS("Shut the water off","Before you cut or loosen a pipe, close the main water valve and open a faucet to drain the line.")
B.dlN=w([B.c2i,B.c25,B.c2p,B.c2a,B.c2o],x.Z)
B.c2B=new A.N4("Safety first","\ud83e\uddba",D.c0,B.dlN)
B.c2q=new A.jS("Wire colours","Black is hot (it carries the power), white is neutral (the way back), bare copper or green is ground (the safety path). Red is a second hot, often used for a switched line.")
B.c2x=new A.jS("Screw colours","On an outlet the brass screw takes the hot wire, the silver screw takes the neutral and the green screw takes the ground.")
B.c2k=new A.jS("Wire size","14 gauge wire is for 15 amp circuits (lights and outlets). 12 gauge is for 20 amp circuits (kitchens). A thinner wire than the breaker allows can overheat and start a fire.")
B.c2e=new A.jS("Breakers","A breaker is a safety switch. It trips when a circuit carries too much current, so the wires never get hot enough to burn.")
B.c2s=new A.jS("Wire nuts","Strip about 3/4 inch, twist the bare ends together clockwise, and screw on the nut until no bare copper shows. Give each wire a gentle tug.")
B.c2y=new A.jS("Switches","A switch cuts the hot wire only. The neutral goes straight through to the light.")
B.c2z=new A.jS("GFCI","A GFCI outlet watches the current going out and coming back. If a little leaks (through water or a person) it cuts the power in a fraction of a second.")
B.c27=new A.jS("Ceiling fans","A fan shakes and is heavy. It needs a box that says fan rated, fixed to the joist, not a plain light box.")
B.c29=new A.jS("Heights","Outlets sit about 16 inches from the floor. Switches sit about 48 inches up, where your hand falls.")
B.ddU=w([B.c2q,B.c2x,B.c2k,B.c2e,B.c2s,B.c2y,B.c2z,B.c27,B.c29],x.Z)
B.c2E=new A.N4("Wiring basics","\u26a1",D.bt,B.ddU)
B.c26=new A.jS("Hot left, cold right","On a faucet, hot is on the left and cold on the right. Hot lines are marked red and cold lines blue.")
B.c2j=new A.jS("The P-trap","The curved pipe under a sink always holds a little water. That water seal stops sewer gas coming up the drain.")
B.c2u=new A.jS("Shut-off valves","Every sink and toilet has its own small valve, so you can stop the water to one fixture without turning off the whole house.")
B.c2c=new A.jS("Slip nuts","Drain joints are sealed by a washer and a slip nut. Tighten by hand and a quarter turn: too much force cracks plastic.")
B.c2b=new A.jS("Wax ring","A toilet sits on a wax ring that seals it to the floor drain. A toilet is lowered straight down once, and cannot be slid around.")
B.c2r=new A.jS("Drain slope","Drains fall about 1/4 inch per foot so water and waste keep moving. Too flat and it clogs, too steep and the water leaves the solids behind.")
B.c2w=new A.jS("Order of work","Plumbing goes from the top down on the drain (tailpiece, trap, arm) and from the wall out on the supply (valve, hose, fixture).")
B.ckp=w([B.c26,B.c2j,B.c2u,B.c2c,B.c2b,B.c2r,B.c2w],x.Z)
B.c2C=new A.N4("Plumbing basics","\ud83d\udeb0",D.cp,B.ckp)
B.c28=new A.jS("Studs","Studs are the vertical 2x4 posts inside a wall, 16 inches apart from centre to centre. Everything is fixed to them.")
B.c2m=new A.jS("Drilling studs","Holes for cable go through the middle of the stud, so a nail or screw cannot reach the wire.")
B.c2d=new A.jS("Drywall","A sheet is 4 feet wide, so its edges land on studs 48 inches apart. Screws go into studs only, just under the paper.")
B.c2g=new A.jS("Taping and mud","Seams get paper tape and three thin coats of joint compound, sanded smooth between coats, then primer and paint.")
B.c2v=new A.jS("Order of a build","Frame, run the pipes and wires (rough-in), inspect, hang drywall, finish it, paint, then fit the fixtures and devices.")
B.cZj=w([B.c28,B.c2m,B.c2d,B.c2g,B.c2v],x.Z)
B.c2A=new A.N4("Framing and walls","\ud83c\udfe0",D.dZ,B.cZj)
B.c2h=new A.jS("Voltage tester","A pen that glows or beeps near live wires. Test it on a known live outlet first, so you know it works.")
B.c2n=new A.jS("Wire strippers","Strip the plastic off without nicking the copper. A nick weakens the wire.")
B.c2t=new A.jS("Adjustable wrench","For nuts on valves and hoses. Hold the fitting steady with a second wrench so you do not twist the pipe.")
B.c2l=new A.jS("Drill and screw gun","A drill makes holes through studs. A screw gun sets drywall screws to the right depth.")
B.c2f=new A.jS("Level and tape measure","Measure twice, cut once. A level makes sure outlets, shelves and pipes are straight.")
B.duu=w([B.c2h,B.c2n,B.c2t,B.c2l,B.c2f],x.Z)
B.c2D=new A.N4("Tools","\ud83e\uddf0",D.bv,B.duu)
B.du4=w([B.c2B,B.c2E,B.c2C,B.c2A,B.c2D],C.at("O<N4>"))
B.du7=w([y.O,"There is no separate ground wire here: the neutral also grounds the frame of the old appliance. This is only allowed in old installations.",y.r,y.E,y.k,y.b,y.n],x.s)
B.bgy=new C.u(1,0.48627450980392156,0.22745098039215686,0.22745098039215686,D.q)
B.boo=new C.u(1,0.24705882352941178,0.4196078431372549,0.30980392156862746,D.q)
B.bmG=new C.u(1,0.4196078431372549,0.30980392156862746,0.48627450980392156,D.q)
B.bjy=new C.u(1,0.47843137254901963,0.41568627450980394,0.23137254901960785,D.q)
B.dub=w([B.XE,B.bgy,B.boo,B.bmG,B.bjy],x.O)
B.dun=w(["Cream","Sky","Blush","Mint","Butter","Periwinkle","White","Slate"],x.s)
B.hj4=new A.iP("in1","Red \xb7 traveler in 1 (from the first 3-way)",B.vL,D.c,"hot")
B.hja=new A.iP("in2","White taped red \xb7 traveler in 2",B.mx,D.av,"hot")
B.aeH=new C.u(1,0.6901960784313725,0.22745098039215686,0.16862745098039217,D.q)
B.hj1=new A.iP("out1","Red \xb7 traveler out 1 (to the second 3-way)",B.aeH,D.c,"hot")
B.hje=new A.iP("out2","White taped red \xb7 traveler out 2",D.bO,D.av,"hot")
B.duq=w([B.r3,B.hj4,B.hja,B.hj1,B.hje],x.d)
B.ePN=new C.z(-760,330)
B.eAw=new C.z(760,330)
B.ePx=new C.z(-450,1080)
B.ezb=new C.z(450,1080)
B.dut=w([B.ePN,B.eAw,B.ePx,B.ezb],x.f)
B.duB=w([0.72,-0.72],x.n)
B.hj7=new A.iP("isoground","Green with yellow stripe \xb7 isolated ground",B.ME,D.c,"ground")
B.duK=w([B.Ex,B.aYz,B.hj7],x.d)
B.duW=w([B.Ob,B.amY,B.amU],x.r)
B.dv6=w(["inspect","hand","screwdriver","pliers","wrench","crimper","plunger","flapper","newoutlet","patch"],x.s)
B.huW=new A.pG(0,0,70,26)
B.hv7=new A.pG(1,-100,110,24)
B.hv9=new A.pG(2,105,100,26)
B.dvE=w([B.huW,B.hv7,B.hv9],x.X)
B.hj8=new A.iP("lineA","Black \xb7 hot leg 1 (from the panel)",B.rr,D.c,"hot")
B.hjd=new A.iP("lineB","Red \xb7 hot leg 2 (from the panel)",B.vL,D.c,"hot")
B.hjk=new A.iP("loadA","Black \xb7 hot leg 1 (to the heater)",B.Mq,D.c,"hot")
B.hj6=new A.iP("loadB","Red \xb7 hot leg 2 (to the heater)",B.aeH,D.c,"hot")
B.dw_=w([B.r3,B.hj8,B.hjd,B.hjk,B.hj6],x.d)
B.dw5=w(["Maya","Kofi","Amara","Tunde","Zawadi"],x.s)
B.eg6={flange:0,wax:1,toilet:2,bolts:3,valve:4,hosehot:5,hosecold:6,faucet:7,tail:8,trap:9,arm:10}
B.aHc=new C.bu(B.eg6,["Flange","Wax ring","Toilet","Bolts","Shut-off valve","Hot hose","Cold hose","Faucet","Tailpiece","P-trap","Trap arm"],x.l)
B.dys=new C.dp([25,"ground",23,"lineA",21,"lineB",24,"loadA",22,"loadB"],x.v)
B.dyt=new C.dp([25,"ground",23,"in1",21,"in2",24,"out1",22,"out2"],x.v)
B.efA={xbot:0,michelle:1,soldier:2}
B.Sl=new C.bu(B.efA,["assets/avatars/Xbot.glb","assets/avatars/Michelle.glb","assets/avatars/Soldier.glb"],x.l)
B.eeJ={highway:0,tower:1,neon:2,roof:3,screen:4,gate:5}
B.aPP=new C.z(0,!1)
B.ewE=new C.z(1,!1)
B.exL=new C.z(3,!1)
B.exh=new C.z(2,!0)
B.ewG=new C.z(1,!0)
B.exM=new C.z(3,!0)
B.dyE=new C.bu(B.eeJ,[B.aPP,B.ewE,B.exL,B.exh,B.ewG,B.exM],C.at("bu<n,+(G,R)>"))
B.a6_=new C.dp([25,"ground",23,"neutral",21,"hot1",22,"hot2"],x.v)
B.dyJ=new C.dp([25,"ground",23,"common",21,"trav1",22,"trav2"],x.v)
B.dyK=new C.dp([25,"ground",23,"neutral",21,"line",22,"load"],x.v)
B.dyL=new C.dp([25,"ground",23,"neutral",21,"switched",22,"always"],x.v)
B.dyQ=new C.dp([25,"ground",21,"neutral",23,"hot1",22,"hot2"],x.v)
B.dyZ=new C.dp([25,"ground",21,"hot1",22,"hot2"],x.v)
B.dzf=new C.dp([21,"neutral",23,"hot1",22,"hot2"],x.v)
B.efw={bed:0,nightstand:1,wardrobe:2,desk:3,rug:4,sofa:5,armchair:6,coffee:7,tvstand:8,dining:9,chair:10,plant:11,lamp:12,console:13,shelf:14,tree:15,pine:16,bush:17,flowers:18,fence:19,lamppost:20,bench:21,car:22,road:23,roundabout:24,roadturn:25,roadtee:26,roadcross:27,house2:28,bighouse:29,pole:30,crate:31,billboard:32,tower:33,hq:34,store:35,gasstation:36,dmv:37,ubstation:38,townsign:39,cornersign:40,adboard:41,shop:42,hospital:43,firestation:44,school:45,firetruck:46,ambulance:47,dog:48,cat:49,cow:50,sheep:51,chicken:52,horse:53,pond:54,swing:55,shed:56,doghouse:57}
B.bJ0=new A.fp("Bed","\ud83d\udecf\ufe0f",48,64)
B.bJc=new A.fp("Night table","\ud83e\ude91",13,13)
B.bIK=new A.fp("Wardrobe","\ud83d\udeaa",35,16)
B.bIW=new A.fp("Desk","\ud83d\udda5\ufe0f",38,19)
B.bIL=new A.fp("Rug","\ud83d\udfe5",56,40)
B.bIG=new A.fp("Sofa","\ud83d\udecb\ufe0f",64,26)
B.bJ4=new A.fp("Armchair","\ud83d\udcba",24,24)
B.bJj=new A.fp("Coffee table","\u2615",32,19)
B.bII=new A.fp("Media cabinet","\ud83d\uddc4\ufe0f",45,14)
B.bJh=new A.fp("Dining table","\ud83c\udf7d\ufe0f",45,29)
B.bJb=new A.fp("Chair","\ud83e\ude91",14,14)
B.bJi=new A.fp("Plant","\ud83e\udeb4",14,14)
B.bJd=new A.fp("Floor lamp","\ud83d\udca1",10,10)
B.bJ1=new A.fp("Console table","\ud83d\uddc4\ufe0f",35,11)
B.bJa=new A.fp("Bookshelf","\ud83d\udcda",29,10)
B.bJn=new A.fp("Tree","\ud83c\udf33",36,36)
B.bIZ=new A.fp("Pine tree","\ud83c\udf32",30,30)
B.bIF=new A.fp("Bush","\ud83c\udf3f",18,18)
B.bJ7=new A.fp("Flowers","\ud83c\udf37",22,22)
B.bIy=new A.fp("Fence","\ud83d\udea7",64,6)
B.bIM=new A.fp("Street lamp","\ud83c\udfee",8,8)
B.bJ3=new A.fp("Bench","\ud83e\ude91",44,16)
B.bIz=new A.fp("Car","\ud83d\ude97",84,40)
B.bIV=new A.fp("Road","\ud83d\udee3\ufe0f",40,40)
B.bJo=new A.fp("Roundabout","\ud83d\udd04",80,80)
B.bIE=new A.fp("Road corner","\u21aa\ufe0f",40,40)
B.bJq=new A.fp("Road T-junction","\u22a4",40,40)
B.bIX=new A.fp("Crossroads","\u271a",40,40)
B.bIH=new A.fp("House","\ud83c\udfe0",108,90)
B.bJ_=new A.fp("Big house","\ud83c\udfe2",158,120)
B.bIA=new A.fp("Electric pole","\ud83d\udd0c",10,10)
B.bIU=new A.fp("Crate","\ud83d\udce6",28,28)
B.bJm=new A.fp("Billboard","\ud83e\udea7",72,10)
B.bID=new A.fp("Office tower","\ud83c\udfe2",100,70)
B.bIP=new A.fp("NGMY company","\ud83c\udfdb\ufe0f",170,90)
B.bIO=new A.fp("NGMY store","\ud83c\udfec",130,80)
B.bJp=new A.fp("NGMY gas station","\u26fd",150,90)
B.bJ9=new A.fp("NGMY licence office","\ud83e\udeaa",130,80)
B.bIR=new A.fp("NGMY Uber","\ud83d\ude96",120,60)
B.bIB=new A.fp("NGMY Town sign","\ud83e\udea7",380,14)
B.bJ5=new A.fp("NGMY Town billboard","\ud83e\udea7",150,10)
B.bIT=new A.fp("NGMY ad billboard","\ud83d\udcfa",330,14)
B.bIY=new A.fp("Shop","\ud83c\udfea",126,90)
B.bIQ=new A.fp("Hospital","\ud83c\udfe5",165,105)
B.bIx=new A.fp("Fire station","\ud83d\ude92",135,96)
B.bJ8=new A.fp("School","\ud83c\udfeb",186,105)
B.bJg=new A.fp("Fire truck","\ud83d\ude92",96,40)
B.bJ2=new A.fp("Ambulance","\ud83d\ude91",84,40)
B.bIN=new A.fp("Dog","\ud83d\udc15",22,10)
B.bIS=new A.fp("Cat","\ud83d\udc08",16,8)
B.bJe=new A.fp("Cow","\ud83d\udc04",38,16)
B.bIJ=new A.fp("Sheep","\ud83d\udc11",26,14)
B.bJf=new A.fp("Chicken","\ud83d\udc14",12,8)
B.bIC=new A.fp("Horse","\ud83d\udc0e",46,16)
B.bJk=new A.fp("Pond","\ud83d\udca7",80,56)
B.bJ6=new A.fp("Swing set","\ud83c\udfa0",56,40)
B.bJl=new A.fp("Shed","\ud83d\uded6",50,42)
B.bJr=new A.fp("Dog house","\ud83d\udc15",24,22)
B.hE=new C.bu(B.efw,[B.bJ0,B.bJc,B.bIK,B.bIW,B.bIL,B.bIG,B.bJ4,B.bJj,B.bII,B.bJh,B.bJb,B.bJi,B.bJd,B.bJ1,B.bJa,B.bJn,B.bIZ,B.bIF,B.bJ7,B.bIy,B.bIM,B.bJ3,B.bIz,B.bIV,B.bJo,B.bIE,B.bJq,B.bIX,B.bIH,B.bJ_,B.bIA,B.bIU,B.bJm,B.bID,B.bIP,B.bIO,B.bJp,B.bJ9,B.bIR,B.bIB,B.bJ5,B.bIT,B.bIY,B.bIQ,B.bIx,B.bJ8,B.bJg,B.bJ2,B.bIN,B.bIS,B.bJe,B.bIJ,B.bJf,B.bIC,B.bJk,B.bJ6,B.bJl,B.bJr],C.at("bu<n,fp>"))
B.dzR=new C.dp([25,"ground",23,"neutral",21,"hot"],x.v)
B.dzS=new C.dp([25,"isoground",23,"neutral",21,"hot"],x.v)
B.eeS={outlet:0,switch:1,light:2,fan:3,gfci:4}
B.d98=w(["Silver","Brass","Green"],x.s)
B.fgz=new A.vi("On a standard receptacle, which terminal does the hot wire go on?",B.d98,1,"Brass is the hot side. Silver is neutral and green is the ground.")
B.cKA=w(["Yes, it works","No: reversed polarity leaves live parts that should be dead","Yes if there is a ground"],x.s)
B.fgx=new A.vi("The outlet works with hot and neutral swapped. Is it safe?",B.cKA,1,"Working is not the same as safe. Reversed polarity energizes the wrong parts.")
B.d2H=w(["Yes","No, never","Only in old houses"],x.s)
B.fgt=new A.vi("May the neutral be used as the equipment ground?",B.d2H,1,"The ground is a separate safety path. The neutral carries current in normal use.")
B.deu=w([B.fgz,B.fgx,B.fgt],x.J)
B.c73=w(["The hot to the light","The neutral","The ground"],x.s)
B.fgA=new A.vi("A single-pole switch opens and closes which conductor?",B.c73,0,"The switch breaks the hot conductor to the load.")
B.d0g=w(["Yes","No, never","If the wire is thick"],x.s)
B.fgB=new A.vi("May the ground wire be used to carry current to the light?",B.d0g,1,"The equipment ground is only for safety.")
B.d85=w(["Yes","No: never assume it does","Only new houses"],x.s)
B.fgu=new A.vi("Does every switch box have a neutral?",B.d85,1,"Many switch boxes have no neutral. Smart switches need to be chosen for that.")
B.du8=w([B.fgA,B.fgB,B.fgu],x.J)
B.dlA=w(["Yes","No: the wires, the ground and the support must be right","Only with a switch"],x.s)
B.fgy=new A.vi("Does a light that turns on prove the fixture is wired safely?",B.dlA,1,"A fixture can light up with an unsafe connection.")
B.dkC=w(["Its wires","A box or mount rated for its weight","Tape"],x.s)
B.fgC=new A.vi("A fixture must hang from:",B.dkC,1,"The box carries the weight. The wires never do.")
B.d8v=w([B.fgy,B.fgC],x.J)
B.d9y=w(["Any ceiling box","Rated for a fan","Plastic only"],x.s)
B.fgw=new A.vi("A ceiling fan needs a box that is:",B.d9y,1,"A fan shakes and is heavy. A plain light box can let it fall.")
B.doI=w(["Yes","No: support, ground and wiring must all be right","Yes if it is quiet"],x.s)
B.fgv=new A.vi("The fan spins. Is the installation safe?",B.doI,1,"A spinning fan says nothing about the box, the ground or the connections.")
B.d8O=w([B.fgw,B.fgv],x.J)
B.d4p=w(["LINE","LOAD","Either"],x.s)
B.fgs=new A.vi("On a GFCI, power from the breaker goes on:",B.d4p,0,"LINE is the supply. LOAD feeds outlets further down the line.")
B.cPi=w([B.fgs],x.J)
B.aHq=new C.bu(B.eeS,[B.deu,B.du8,B.d8v,B.d8O,B.cPi],C.at("bu<n,ai<vi>>"))
B.efv={house2:0,bighouse:1,shop:2,billboard:3,crate:4,car:5,tree:6,bench:7,tower:8,hq:9,store:10,gasstation:11,cornersign:12}
B.dzV=new C.bu(B.efv,[40,80,70,15,4,25,5,4,120,200,90,90,30],C.at("bu<n,G>"))
B.bHL=new A.uF("The living room has no power at all.","The living room breaker is sitting in the middle (orange). It has tripped. Flip it fully OFF and ON again, by hand.","hand","Breaker reset. The living room has power again.",72,0,"")
B.bHV=new A.uF("There is no hot water.","The water heater breaker has tripped (orange). Reset it by hand.","hand","Breaker reset. The water heater is heating again.",75,0,"")
B.bHS=new A.uF("Water is dripping under the kitchen sink.","The slip nut on the P-trap is loose and the joint drips. Tighten it with the wrench.","wrench","Slip nut tightened. The drip stopped.",87,0,"")
B.bHK=new A.uF("There is a wet spot on the wall behind the kitchen.","A crimped joint in the hot water line is leaking. A crimp joint is squeezed with a crimping tool, not tightened with a wrench.","crimper","The joint is crimped again and it does not leak.",96,0,"")
B.bHP=new A.uF("The outlet by the sofa does not work, but the lights do.","The tester finds power at the box but the outlet is dead: a screw on the outlet has come loose. Turn the breaker off first, then tighten the screws with the screwdriver.","screwdriver","You tightened the loose screw. The outlet works again.",81,72,"Turn the living room breaker OFF first.")
B.bHM=new A.uF("The living room light flickers.","A wire nut in the light box has worked loose. Turn the breaker off, then twist the wire nut tight with the pliers.","pliers","You twisted the wire nut tight. The light is steady.",83,72,"Turn the living room breaker OFF first.")
B.bHN=new A.uF("The kitchen outlet sparks and smells burnt.","The outlet has burnt. Turn the breaker off and replace it with a new outlet.","newoutlet","New outlet fitted. No more sparks.",84,73,"Turn the kitchen breaker OFF first.")
B.bHT=new A.uF("The kitchen outlets are dead.","The GFCI outlet has tripped. Press its RESET button by hand.","hand","You pressed RESET. The kitchen outlets work.",84,0,"")
B.bHO=new A.uF("The toilet keeps running.","The rubber flapper in the tank no longer seals, so water leaks into the bowl all the time. Replace the flapper.","flapper","New flapper fitted. The toilet stops running.",88,0,"")
B.bHR=new A.uF("The kitchen faucet drips.","The faucet washer is worn. Tighten the packing nut with the wrench, then check.","wrench","The faucet is sealed. No more drips.",85,0,"")
B.bHQ=new A.uF("There is a hole in the wall.","A hole in the drywall. Stick a drywall patch over it, then tape, mud, sand and paint it.","patch","Patch fitted. Now it only needs mud, sanding and paint.",95,0,"")
B.bHU=new A.uF("The kitchen sink drains very slowly.","The drain is clogged. Use the plunger.","plunger","The clog is gone. The sink drains fast.",94,0,"")
B.wK=new C.dp([B.a0C,B.bHL,B.a0D,B.bHV,B.O1,B.bHS,B.O2,B.bHK,B.amE,B.bHP,B.a0G,B.bHM,B.a0H,B.bHN,B.a0I,B.bHT,B.a0J,B.bHO,B.a0K,B.bHR,B.a0E,B.bHQ,B.a0F,B.bHU],C.at("dp<rn,uF>"))
B.eh5={duo:0,line3:1,far3:2,skyline:3,lines6:4}
B.eFL=new C.z(D.a3c,0)
B.eTl=new C.z(A6.asd,1)
B.crB=w([2,0,1],x.t)
B.eAy=new C.z(B.crB,2)
B.c77=w([0,1,2,3],x.t)
B.eSk=new C.z(B.c77,0)
B.dmH=w([0,1,2,5,4,3],x.t)
B.eIU=new C.z(B.dmH,1)
B.dAa=new C.bu(B.eh5,[B.eFL,B.eTl,B.eAy,B.eSk,B.eIU],C.at("bu<n,+(ai<G>,G)>"))
B.egy={michelle:0}
B.dAb=new C.bu(B.egy,[0.55],x.gW)
B.Sq=new C.bu(D.hT,[],C.at("bu<G,cV>"))
B.ID=new C.bu(D.hT,[],C.at("bu<G,n>"))
B.a66=new C.dp([23,"neutral",21,"hot1",22,"hot2"],x.v)
B.dAs=new C.dp([25,"ground",21,"feed",22,"loadA",24,"loadB"],x.v)
B.eg4={tail:0,trap:1,arm:2}
B.dAu=new C.bu(B.eg4,["Tailpiece","P-trap","Trap arm"],x.l)
B.aK6={xbot:0,michelle:1,soldier:2,human:3}
B.aHE=new C.bu(B.aK6,["\ud83e\udd16 X Bot","\ud83d\udc83 Dancer","\ud83e\ude96 Soldier","\ud83d\ude42 Person"],x.l)
B.afh=new C.u(1,0.9137254901960784,0.9215686274509803,0.9372549019607843,D.q)
B.bm_=new C.u(1,0.8549019607843137,0.8666666666666667,0.8901960784313725,D.q)
B.Tv=new A.tO(B.afh,E.aeI,B.afh,B.bm_,"xbot",!1,0,1)
B.bnZ=new C.u(1,0.0784313725490196,0.047058823529411764,0.03137254901960784,D.q)
B.be7=new C.u(1,0.9607843137254902,0.7725490196078432,0.09411764705882353,D.q)
B.erB=new A.tO(B.aiT,B.bnZ,D.dn,B.be7,"michelle",!0,2,1)
B.bsR=new C.u(1,0.8509803921568627,0.6470588235294118,0.48627450980392156,D.q)
B.brO=new C.u(1,0.3568627450980392,0.4196078431372549,0.22745098039215686,D.q)
B.bgz=new C.u(1,0.5411764705882353,0.4823529411764706,0.3333333333333333,D.q)
B.Jr=new A.tO(B.bsR,D.Ms,B.brO,B.bgz,"soldier",!1,0,1.04)
B.a7U=new A.tO(B.aeM,B.Mj,B.aj2,B.LM,"human",!1,0,1)
B.aHF=new C.bu(B.aK6,[B.Tv,B.erB,B.Jr,B.a7U],C.at("bu<n,tO>"))
B.egQ={soldier:0}
B.dAN=new C.bu(B.egQ,[3.141592653589793],x.gW)
B.hd7=new A.q(0,0,-1.2)
B.edK=new A.cV("Electrical box","The box is ready. Pull a cable to it, then wire a device.",B.hd7,9)
B.dAQ=new C.dp([3,B.edK],C.at("dp<G,cV>"))
B.aK_={inspect:0,hand:1,screwdriver:2,pliers:3,wrench:4,crimper:5,plunger:6,flapper:7,newoutlet:8,patch:9}
B.Ss=new C.bu(B.aK_,["Look and test","Hand","Screwdriver","Pliers","Wrench","Crimp tool","Plunger","New flapper","New outlet","Drywall patch"],x.l)
B.bMW=new C.a0(63072,"MaterialIcons",!1)
B.dAU=new C.bu(B.aK_,[D.f9,B.apx,A5.Hg,D.H6,D.ok,B.bMW,Ad.a2p,D.pm,B.OZ,W.us],C.at("bu<n,a0>"))
B.eeL={washerM:0,dryerM:1,rangeM:2}
B.eh_={washer:0}
B.f60=new C.dw(B.eh_,1,x.M)
B.eg_={dryer4:0,dryer3:1}
B.f5N=new C.dw(B.eg_,2,x.M)
B.egK={range4:0,range3:1}
B.f6j=new C.dw(B.egK,2,x.M)
B.dAV=new C.bu(B.eeL,[B.f60,B.f5N,B.f6j],C.at("bu<n,e0<n>>"))
B.dBA=new A.ia(18,50,0,20)
B.dBN=new A.ia(-126,126,-66,5)
B.dBU=new A.ia(-4,16,0,24)
B.dEp=new A.aoN(null)
B.aIF=new A.a7b(null)
B.dLa=new A.aq9(null)
B.dOt=new A.IW(!1,"city","",null)
B.aIP=new A.IW(!1,"","",null)
B.e9b=new A.Ok(!0,!0,null,!0,null)
B.hgq=new A.q(16,2.6,0)
B.eds=new A.cV("Wall drain","The pipe stub that comes out of the wall. The trap arm slides into it.",B.hgq,8)
B.h0g=new A.q(0,3,-6)
B.edt=new A.cV("Wall","The copper supply pipes come out of the wall here.",B.h0g,24)
B.hcr=new A.q(8.2,1,-7)
B.edu=new A.cV("Toilet","The tank fills from the cold supply on the wall. The bowl drains into the white pipe in the floor.",B.hcr,7)
B.fZV=new A.q(0,0,40)
B.edv=new A.cV("The room","A room to build from bare studs to finished, working electrics. The walls hold the cable, the boxes and the devices.",B.fZV,190)
B.h9d=new A.q(-2.4,11.5,-3.6)
B.edw=new A.cV("Hot faucet inlet","The threaded tail under the faucet where the hot supply hose screws on.",B.h9d,7)
B.h3t=new A.q(-3.6,4,-7.8)
B.edx=new A.cV("Light switch","Controls the ceiling light. Tap Open lesson to wire one.",B.h3t,4.5)
B.h60=new A.q(0,-0.7,4.8)
B.edy=new A.cV("Ground strap","A metal strap from the middle (neutral) terminal to the frame of the appliance. On a 3-wire cord it stays: the neutral also grounds the frame. On a 4-wire cord you take it off, because the green wire grounds the frame.",B.h60,7)
B.haY=new A.q(0,0.5,2)
B.edz=new A.cV("Voltage tester","A tester that glows when it touches live power.",B.haY,6)
B.edA=new A.cV("Pipe joint","A crimped joint in the hot water line.",B.aXA,4)
B.h9F=new A.q(0,-0.2,0.2)
B.edB=new A.cV("Cover plate","The plate covers the box and the edges of the drywall so nobody touches the wires.",B.h9F,8)
B.hfi=new A.q(-4.6,0.5,-3.4)
B.edC=new A.cV("Hot shut-off valve","The angle stop valve on the hot pipe. Turn the handle to stop the water to the faucet without shutting off the whole house. Hot is always on the left.",B.hfi,8)
B.VG=new A.q(0,-0.3,3.2)
B.edD=new A.cV("White wire nut: NEUTRAL","Twist the house white wire and the fixture white wire together under this cap.",B.VG,6)
B.haJ=new A.q(4.6,0.5,-3.4)
B.edE=new A.cV("Cold shut-off valve","The angle stop valve on the cold pipe. Cold is always on the right.",B.haJ,8)
B.h2A=new A.q(2.4,11.5,-3.6)
B.edF=new A.cV("Cold faucet inlet","The threaded tail under the faucet where the cold supply hose screws on.",B.h2A,7)
B.hhx=new A.q(0.8,-0.8,1.2)
B.edG=new A.cV("Black wire to the light","This black wire carries power to the light once the switch is on. It goes on the other brass screw.",B.hhx,7)
B.h98=new A.q(10.05,5.2,-7.5)
B.edH=new A.cV("Water heater breaker","A big circuit for the water heater. It is ON.",B.h98,3.5)
B.aWw=new A.q(0,40,0)
B.edI=new A.cV("Back wall",y.o,B.aWw,140)
B.hck=new A.q(3,3.8,-7.4)
B.edJ=new A.cV("Kitchen faucet","Hot on the left, cold on the right. Tap Open lesson to connect the supply hoses.",B.hck,4.5)
B.Ay=new A.q(0,6,0)
B.edL=new A.cV("Tailpiece","The straight pipe that hangs from the sink drain. Its bottom end is smooth so the slip nut can slide on and grip it.",B.Ay,10)
B.heP=new A.q(-60,40,50)
B.edM=new A.cV("Left wall",y.o,B.heP,140)
B.h48=new A.q(3,1,0)
B.edN=new A.cV("P-trap","The U-shaped bend. It always keeps a little water inside, and that water plug blocks sewer gas from coming back up into the house.",B.h48,11)
B.h_E=new A.q(0,20,5)
B.edO=new A.cV("The room","A bare room with the water supply stubs and the drain stub already in the wall and floor.",B.h_E,120)
B.h0Z=new A.q(0,-8,0)
B.edP=new A.cV("Cabinet","The cabinet under the sink where the drain is built.",B.h0Z,22)
B.fZT=new A.q(0,0,150)
B.edQ=new A.cV("Lawn","The grass. Walls, floors and the sky stay as they are, but you can add things to the garden with the Furniture button.",B.fZT,400)
B.h0y=new A.q(0,4,-8)
B.edR=new A.cV("Wall framing","2x4 studs 16 inches apart. Pipes and cables run through holes drilled in the middle of the studs, never along the edge where a nail could hit them.",B.h0y,18)
B.aXQ=new A.q(0,-0.2,5.1)
B.edS=new A.cV("TEST and RESET buttons","Press TEST to make the GFCI trip. Press RESET to turn it back on. Test it once a month.",B.aXQ,5)
B.aWr=new A.q(0,11,0)
B.edT=new A.cV("Sink","The sink bowl and the counter. The drain flange at the bottom is where the tailpiece starts.",B.aWr,16)
B.dX=new A.q(0,0,0)
B.edU=new A.cV("Drywall","The wall surface. A hole is cut in it for the electrical box.",B.dX,22)
B.h5r=new A.q(60,40,50)
B.edV=new A.cV("Right wall",y.o,B.h5r,140)
B.h_m=new A.q(0,14,-3)
B.edW=new A.cV("Counter and sink","The faucet is mounted through a hole in the counter.",B.h_m,20)
B.h7K=new A.q(0,-1.9,5)
B.edX=new A.cV("GREEN screw: GROUND",y.Z,B.h7K,5)
B.h0v=new A.q(0,47,-2)
B.edY=new A.cV("Top and bottom plate","The horizontal 2x4s at the top and the bottom of the wall. The studs stand between them.",B.h0v,70)
B.fZZ=new A.q(0,0,-8)
B.edZ=new A.cV("Wall","Behind the wall the drain pipe goes down to the sewer line.",B.fZZ,22)
B.h_y=new A.q(0,19,-3)
B.ee_=new A.cV("Faucet","The faucet with hot on the left (red) and cold on the right (blue).",B.h_y,14)
B.h62=new A.q(3.5,2,-7.2)
B.ee0=new A.cV("Kitchen counter and cabinet","The cabinet under the sink is where the drain and the shut-off valves live.",B.h62,9)
B.h8d=new A.q(10.05,5.7,-7.5)
B.ee1=new A.cV("Kitchen breaker","Protects the kitchen outlets. It is ON.",B.h8d,3.5)
B.h9n=new A.q(4,6,-2.5)
B.ee2=new A.cV("Cold supply hose","A braided steel hose with a rubber liner and a blue band.",B.h9n,9)
B.haT=new A.q(-1,0.6,4.3)
B.ee3=new A.cV("SILVER screw: NEUTRAL side",y.B,B.haT,5)
B.ab7=new A.q(0,3.7,0)
B.ee4=new A.cV("Slip nut","A big plastic nut. Slide it on the pipe first, then the washer, then join the pieces and hand tighten. A rubber washer inside makes the seal.",B.ab7,7)
B.VF=new A.q(0,-1,-0.6)
B.ee5=new A.cV("Wire nut","A twist-on cap that joins wires safely. The two white wires are joined here because a switch only cuts the hot wire.",B.VF,5)
B.h9w=new A.q(-1.5,-0.3,3.2)
B.ee6=new A.cV("Black wire nut: HOT","Twist the house black wire and the fixture black wire together under this cap.",B.h9w,6)
B.h8c=new A.q(-1.9,0,-2)
B.ee7=new A.cV("Wood stud","The 2x4 frame inside the wall. The electrical box is nailed or screwed to a stud so it cannot move.",B.h8c,16)
B.hd5=new A.q(-1,-0.8,4.3)
B.ee8=new A.cV("SILVER screw: NEUTRAL side",y.B,B.hd5,5)
B.hgO=new A.q(6,3,-7.8)
B.ee9=new A.cV("Water and drain pipes","Red is hot water, blue is cold water (PEX tubing). The white pipes are drains. They slope down so the waste flows away.",B.hgO,14)
B.hdb=new A.q(1,0.6,4.3)
B.eea=new A.cV("BRASS screw: HOT side",y.C,B.hdb,5)
B.hdI=new A.q(0,-0.2,4.9)
B.eeb=new A.cV("Mounting strap (yoke)","The metal strap with two screw slots. Long screws through the ears hold the device in the box.",B.hdI,7)
B.hht=new A.q(9.55,4.7,-7.5)
B.eec=new A.cV("Spare breaker","A spare circuit.",B.hht,3.5)
B.h_F=new A.q(0,20,8)
B.eed=new A.cV("Vanity and counter","The cabinet that holds the sink. The pipes live inside it.",B.h_F,70)
B.hg2=new A.q(-3.2,1.3,-7.8)
B.eee=new A.cV("Living room outlet","A standard outlet. Tap Open lesson to wire one in 3D.",B.hg2,4.5)
B.hdL=new A.q(1.5,-0.3,3.2)
B.eef=new A.cV("Green ground connection","Join the bare copper house ground wire to the green fixture ground wire.",B.hdL,6)
B.aXv=new A.q(12,2.6,0)
B.eeg=new A.cV("Trap arm","The pipe that carries the waste water from the trap into the wall. It must slope down toward the wall, about 1/4 inch per foot.",B.aXv,9)
B.hap=new A.q(0,6.5,-7.8)
B.eeh=new A.cV("Electrical cables","Cables run from the breaker panel to every outlet, switch and light. Yellow is 12 gauge for 20 amps. White is 14 gauge for 15 amps.",B.hap,16)
B.hbb=new A.q(11.2,2.3,-6)
B.eei=new A.cV("Water heater","Heats the water. The cold line goes in at the top and the hot line comes out at the top.",B.hbb,9)
B.hbV=new A.q(9.55,5.2,-7.5)
B.eej=new A.cV("Bathroom breaker","Protects the bathroom. It is ON.",B.hbV,3.5)
B.h8k=new A.q(5.2,3.9,-7.8)
B.eek=new A.cV("Kitchen GFCI outlet","Outlets near water must be GFCI. Tap Open lesson to wire one.",B.h8k,4.5)
B.h0q=new A.q(0,40,-3)
B.eel=new A.cV("Electrical cable","Yellow 12/2 cable with ground: it carries power from the breaker panel through the holes in the studs to each box.",B.h0q,80)
B.h95=new A.q(-8.4,1.2,-6.4)
B.eem=new A.cV("Sofa","Just furniture, to show the size of the room.",B.h95,10)
B.een=new A.cV("Outlet face","Two outlets. The short slot is hot, the long slot is neutral, and the round hole is ground.",B.aXQ,6)
B.h7q=new A.q(0,4,-7.8)
B.eeo=new A.cV("Wall","The drywall of the back wall.",B.h7q,16)
B.hg6=new A.q(0,0,0.6)
B.eep=new A.cV("Canopy","The round cover that hides the box and the wire connections against the ceiling.",B.hg6,8)
B.eeq=new A.cV("Concrete slab","The foundation. It carries the whole weight of the house. Plumbing drains are placed before it is poured.",B.dX,30)
B.h0j=new A.q(0,40,12)
B.eer=new A.cV("Front door","Tap the door to go inside the house.",B.h0j,260)
B.ab9=new A.q(8.9,2.6,0)
B.ees=new A.cV("Slip nut","Hand tighten it, then about a quarter turn with pliers. Over-tightening cracks the plastic.",B.ab9,7)
B.hbT=new A.q(1,-0.8,4.3)
B.eet=new A.cV("BRASS screw: HOT side",y.C,B.hbT,5)
B.h78=new A.q(0.6,1.5,-1.8)
B.eeu=new A.cV("Cable to the light (LOAD)","This cable carries the switched power on to the light. The black wire here only has power when the switch is on.",B.h78,8)
B.h7F=new A.q(9.8,5,-7.5)
B.eev=new A.cV("Breaker panel","The main electrical panel. Each breaker protects one circuit. A breaker that is in the middle position has TRIPPED. Flip it fully OFF and then ON to reset.",B.h7F,6)
B.h9s=new A.q(-4,6,-2.5)
B.eew=new A.cV("Hot supply hose","A braided steel hose with a rubber liner and a red band. Hand tighten the nuts, then a quarter turn with a wrench.",B.h9s,9)
B.ejl=new C.t(66,66)
B.bTT=new C.ae(D.e6,20,F.fA,null,null,null)
B.emV=new C.D(D.uj,B.bTT,null)
B.fxf=new C.F(!0,D.mB,null,null,null,null,12.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fDU=new C.y("A circuit that is not CORRECT and safe can never pass, even if the light or fan would have worked.",null,B.fxf,null,null,null,null,null,null,null,null,null)
B.en6=new C.D(D.i4,B.fDU,null)
B.fNV=new C.y("Sick people can stay in a hospital bed. Treat each patient before their care runs out, and they go home better.",null,D.V8,null,D.K,null,null,null,null,null,null,null)
B.enc=new C.D(D.alY,B.fNV,null)
B.byl=new C.P(0,26,0,26)
B.fnU=new C.F(!0,D.aC,null,null,null,null,13.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.hhP=new C.bR("lessons-none",x.W)
B.fzf=new C.y("No lesson found. Try another word.",null,B.fnU,null,null,null,null,null,null,null,null,B.hhP)
B.ba4=new C.cf(D.A,null,null,B.fzf,null)
B.enj=new C.D(B.byl,B.ba4,null)
B.bT3=new C.ae(D.e6,18,D.be,null,null,null)
B.enu=new C.D(D.fu,B.bT3,null)
B.enw=new C.D(D.fu,H.ar5,null)
B.enO=new C.D(D.uj,H.Pj,null)
B.eru=new A.y5(0,0,18,0,!1,!1,!1,!1,!1,0,!1,!1,"","",-1,0,-1,0)
B.erv=new A.y5(0,100,120,-2.2,!1,!1,!1,!1,!1,0,!1,!1,"","",-1,0,-1,0)
B.erw=new A.y5(0,40,150,0.5,!1,!1,!1,!1,!1,0,!1,!1,"","",-1,0,-1,0)
B.erx=new A.y5(0,0,0,0,!1,!1,!1,!1,!1,0,!1,!1,"","",-1,0,-1,0)
B.ery=new A.y5(0,-80,50,0,!1,!1,!1,!1,!1,0,!1,!1,"","",-1,0,-1,0)
B.erz=new A.y5(0,0,56,0,!1,!1,!1,!1,!1,0,!1,!1,"","",-1,0,-1,0)
B.eu5=new A.a9I(null,null)
B.bk3=new C.u(1,0.30980392156862746,0.7019607843137254,0.9647058823529412,D.q)
B.bss=new C.u(1,0.11372549019607843,0.37254901960784315,0.7686274509803922,D.q)
B.bpc=new C.u(1,0.043137254901960784,0.16470588235294117,0.4196078431372549,D.q)
B.d2C=w([B.bk3,B.bss,B.bpc],x.O)
B.euP=new C.c_(Ab.xu,0.5,D.x,null,0,B.d2C,null,null)
B.bsH=new C.u(1,0.8392156862745098,0.9019607843137255,0.9176470588235294,D.q)
B.evw=new C.z(B.bsH,B.Yb)
B.evF=new C.z(0,120)
B.evG=new C.z(0,300)
B.evW=new C.z(B.mx,B.dX)
B.exA=new C.z(64,2.4)
B.ezf=new C.z("LOAD (taped)",D.d0)
B.bgx=new C.u(1,0.9450980392156862,0.8901960784313725,0.7764705882352941,D.q)
B.bjJ=new C.u(1,0.8470588235294118,0.7686274509803922,0.6274509803921569,D.q)
B.eAC=new C.z(B.bgx,B.bjJ)
B.dkF=w([D.ax,D.cd,D.ax],x.O)
B.eB0=new C.z(-40,B.dkF)
B.eCs=new C.z(63,-2.4)
B.biH=new C.u(1,0.8901960784313725,0.9254901960784314,0.9607843137254902,D.q)
B.bdt=new C.u(1,0.7372549019607844,0.7843137254901961,0.8392156862745098,D.q)
B.eD_=new C.z(B.biH,B.bdt)
B.eDg=new C.z(51,B.aff)
B.beJ=new C.u(1,0.9137254901960784,0.8705882352941177,0.7607843137254902,D.q)
B.eFZ=new C.z(B.beJ,B.BC)
B.bf6=new C.u(1,0.9137254901960784,0.9372549019607843,0.9490196078431372,D.q)
B.bfH=new C.u(1,0.8509803921568627,0.8941176470588236,0.9098039215686274,D.q)
B.eGO=new C.z(B.bf6,B.bfH)
B.boq=new C.u(1,0.9058823529411765,0.8235294117647058,0.8156862745098039,D.q)
B.bfI=new C.u(1,0.7058823529411765,0.7176470588235294,0.7411764705882353,D.q)
B.eHP=new C.z(B.boq,B.bfI)
B.bcR=new C.u(1,0.7647058823529411,0.8117647058823529,0.9019607843137255,D.q)
B.eIF=new C.z(B.bcR,B.aiV)
B.bmU=new C.u(1,0.3568627450980392,0.39215686274509803,0.4392156862745098,D.q)
B.eKs=new C.z("SILVER \xb7 NEUTRAL",B.bmU)
B.hgh=new A.q(-1.5,0,0)
B.eKB=new C.z(B.Fo,B.hgh)
B.eMa=new C.z(52,B.vL)
B.bjj=new C.u(1,0.12156862745098039,0.47843137254901963,0.22745098039215686,D.q)
B.eN3=new C.z("GREEN \xb7 GROUND",B.bjj)
B.brB=new C.u(1,0.9450980392156862,0.9098039215686274,0.8235294117647058,D.q)
B.eNL=new C.z(B.brB,B.BC)
B.eO1=new C.z("main","Main water valve")
B.cP4=w([D.vR,D.bt,D.bf],x.O)
B.eQm=new C.z(40,B.cP4)
B.hhy=new A.q(1.5,0,0)
B.eSc=new C.z(B.ME,B.hhy)
B.bfn=new C.u(1,0.9529411764705882,0.9411764705882353,0.9098039215686274,D.q)
B.bmq=new C.u(1,0.4823529411764706,0.5294117647058824,0.5803921568627451,D.q)
B.eSU=new C.z(B.bfn,B.bmq)
B.eTT=new C.z(B.i1,B.XF)
B.bim=new C.u(1,0.9529411764705882,0.9019607843137255,0.7843137254901961,D.q)
B.bpj=new C.u(1,0.788235294117647,0.7098039215686275,0.5490196078431373,D.q)
B.eUb=new C.z(B.bim,B.bpj)
B.beY=new C.u(1,0.6039215686274509,0.4196078431372549,0.047058823529411764,D.q)
B.eUH=new C.z("BRASS \xb7 HOT",B.beY)
B.eV8=new C.z(53,B.ME)
B.a8m=new C.b7(180,40,215)
B.a8n=new C.b7(215,40,345)
B.a8o=new C.b7(60,60,90)
B.eVY=new C.b7(61,-4.6,B.rm)
B.a8p=new C.b7(95,40,185)
B.eWY=new C.b7("Turn the main water ON to test for leaks: pick Hand and tap the main valve.","hand","main")
B.eY_=new C.b7(62,4.6,B.nd)
B.eYa=new C.b7("The water must be OFF before you cut into the pipes: pick Hand and tap the main valve.","hand","main")
B.eYF=new C.b7("Fit the parts in the order of the job list.","",null)
B.eZ5=new C.b7("Looks good. Watch for leaks; if none, the job is done.","",null)
B.eZZ=new C.cy([0,17.1,16.4,5.8])
B.f_1=new C.cy([0,-0.1,16.4,4.2])
B.f04=new C.cy([15.6,9,14.8,22])
B.f08=new C.cy([-15.6,9,14.8,22])
B.f0h=new C.e5([72,60,44,B.Mk,B.Mn])
B.bso=new C.u(1,0.8941176470588236,0.6901960784313725,0.47843137254901963,D.q)
B.f0y=new C.e5([124,70,44,B.bso,B.qa])
B.f0F=new C.e5([90,64,46,B.agX,D.hk])
B.f0Y=new C.e5([110,70,62,D.bN,D.al])
B.f12=new C.e5([84,60,40,B.ah_,B.Mn])
B.aTl=new C.F(!0,D.bU,null,null,null,null,11,D.u,null,2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fRn=new C.y("WIRES",null,B.aTl,null,D.K,null,null,null,null,null,null,null)
B.bFT=new C.by(1,D.ba,B.fRn,null)
B.f9d=new C.a4(56,null,null,null)
B.fLC=new C.y("DIAGRAM",null,B.aTl,null,D.K,null,null,null,null,null,null,null)
B.bGN=new C.by(1,D.ba,B.fLC,null)
B.dmg=w([B.bFT,B.f9d,B.bGN],x.p)
B.f3D=new C.ca(D.aM,D.e,D.i,D.m,null,D.p,null,0,B.dmg,null)
B.fCw=new C.y("\u260e",null,D.pG,null,null,null,null,null,null,null,null,null)
B.bbD=new C.qz(B.fCw,D.ax,null,24,null)
B.fF1=new C.y("City office",null,D.de,null,null,null,null,null,null,null,null,null)
B.dbS=w([B.bbD,D.bc,B.fF1],x.p)
B.f3Q=new C.ca(D.aM,D.e,D.i,D.m,null,D.p,null,0,B.dbS,null)
B.bUD=new C.ae(D.OW,26,D.c_,null,null,null)
B.fSj=new C.y("Hallway tour",null,D.ht,null,null,null,null,null,null,null,null,null)
B.fDv=new C.y("Just the hall and its big TVs, 45 seconds",null,D.x4,null,null,null,null,null,null,null,null,null)
B.dtU=w([B.fSj,B.fDv],x.p)
B.bu9=new C.fj(D.ah,D.e,D.i,D.E,null,D.p,null,0,B.dtU,null)
B.bGt=new C.by(1,D.ba,B.bu9,null)
B.cZq=w([B.bUD,D.bc,B.bGt,A4.Pc],x.p)
B.f3T=new C.ca(D.aM,D.e,D.i,D.m,null,D.p,null,0,B.cZq,null)
B.bSh=new C.ae(D.hn,30,D.c,null,null,null)
B.fUk=new C.y("Play the tour",null,D.k8,null,null,null,null,null,null,null,null,null)
B.d7w=w([B.bSh,D.bm,B.fUk],x.p)
B.f3Z=new C.ca(D.aM,D.b9,D.i,D.m,null,D.p,null,0,B.d7w,null)
B.qR=new A.JH(0,"correct")
B.aQB=new A.JH(1,"incorrect")
B.t9=new A.JH(2,"unsafe")
B.JH=new A.JH(3,"incomplete")
B.f4c=new A.JH(4,"requiresVerification")
B.ef3={hospital:0,shop:1,school:2,firestation:3,house2:4,bighouse:5,store:6,gasstation:7,dmv:8,tower:9,hq:10}
B.aRc=new C.dw(B.ef3,11,x.M)
B.eeO={wardrobe:0,shelf:1,lamp:2,console:3}
B.f5A=new C.dw(B.eeO,4,x.M)
B.aRg=new C.jw([1,2,3,4,5],C.at("jw<G>"))
B.eex={house2:0,bighouse:1,shop:2,hospital:3,school:4,firestation:5,store:6,gasstation:7,tower:8,hq:9,dmv:10}
B.f5O=new C.dw(B.eex,11,x.M)
B.egT={billboard:0,bighouse:1,townsign:2,cornersign:3,adboard:4,tower:5,hq:6,store:7,gasstation:8,ubstation:9,dmv:10}
B.f5R=new C.dw(B.egT,11,x.M)
B.aRl=new C.dw(D.hT,0,C.at("dw<G>"))
B.f7P=new C.av(0,36)
B.f7Z=new C.av(126,84)
B.f8X=new C.a4(110,64,null,null)
B.f8Y=new C.a4(120,70,null,null)
B.f93=new C.a4(270,64,null,null)
B.f94=new C.a4(270,70,null,null)
B.K3=new A.FM(0,"hot")
B.K4=new A.FM(1,"neutral")
B.K5=new A.FM(2,"ground")
B.aT1=new A.FM(3,"load")
B.fht=new C.F(!0,D.c,null,null,null,null,12.5,null,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fi6=new C.F(!0,D.c,null,null,null,null,13.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fib=new C.F(!0,D.c,null,null,null,null,16,D.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,L.D_,null,null,null)
B.fif=new C.F(!0,D.b_,null,null,null,null,12.5,D.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fis=new C.F(!0,D.aC,null,null,null,null,11.5,D.U,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fjr=new C.F(!0,D.aC,null,null,null,null,14,D.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.aTu=new C.F(!0,D.aC,null,null,null,null,11.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fjY=new C.F(!0,D.bt,null,null,null,null,12,D.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fk7=new C.F(!0,D.ac,null,null,null,null,13.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fkx=new C.F(!0,D.aA,null,null,null,null,12.5,D.u,null,2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fkH=new C.F(!0,D.aR,null,null,null,null,11.5,null,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fkT=new C.F(!0,D.bt,null,null,null,null,15,D.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.aTJ=new C.F(!0,D.ac,null,null,null,null,12,D.U,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fm4=new C.F(!0,D.c,null,null,null,null,13,D.U,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.a9U=new C.F(!0,D.ac,null,null,null,null,null,null,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fmx=new C.F(!0,D.bt,null,null,null,null,13,D.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fnc=new C.F(!0,D.aC,null,null,null,null,9.5,null,null,null,null,null,1.15,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fnt=new C.F(!0,D.ac,null,null,null,null,12.5,null,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fnu=new C.F(!0,D.fk,null,null,null,null,12,null,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fo6=new C.F(!0,null,null,null,null,null,9,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.Kf=new C.F(!0,D.aA,null,null,null,null,12.5,D.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.foC=new C.F(!0,D.c,null,null,null,null,11.5,D.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.aU1=new C.F(!0,D.c,null,null,null,null,14,null,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.foV=new C.F(!0,D.bL,null,null,null,null,13,D.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fpe=new C.F(!0,D.c,null,null,null,null,12,D.H,null,null,null,null,1.15,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fpW=new C.F(!0,D.mB,null,null,null,null,12,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fq1=new C.F(!0,D.ac,null,null,null,null,13.5,null,D.cD,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fqc=new C.F(!0,D.fk,null,null,null,null,11.5,D.U,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fqh=new C.F(!0,D.eG,null,null,null,null,14,D.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fqQ=new C.F(!0,D.bt,null,null,null,null,18,D.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.frn=new C.F(!0,D.aR,null,null,null,null,12,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.frX=new C.F(!0,D.c,null,null,null,null,10.5,D.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fs8=new C.F(!0,D.bt,null,null,null,null,null,D.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.aUu=new C.F(!0,D.ac,null,null,null,null,13.5,null,null,null,null,null,1.5,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.ftv=new C.F(!0,D.aC,null,null,null,null,11,D.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.ftG=new C.F(!0,D.ac,null,null,null,null,12.8,null,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fuX=new C.F(!0,D.aA,null,null,null,null,12.5,D.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fvY=new C.F(!0,D.bt,null,null,null,null,44,D.u,null,2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.aUZ=new C.F(!0,D.c,null,null,null,null,13.5,D.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fwm=new C.F(!0,D.aR,null,null,null,null,11.5,null,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fx3=new C.F(!0,F.fA,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fxk=new C.F(!0,D.fk,null,null,null,null,12,D.U,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fxF=new C.y("Wire guide (U.S. houses)",null,D.de,null,null,null,null,null,null,null,null,null)
B.fxS=new C.y("Which wall?",null,D.Vh,null,null,null,null,null,null,null,null,null)
B.fim=new C.F(!0,D.w,null,null,null,null,12,D.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fyc=new C.y("Open the 3D lesson",null,B.fim,null,null,null,null,null,null,null,null,null)
B.fyZ=new C.y("Never rely on color alone. With the power off, prove what each wire does with a tester and the device diagram. A licensed electrician does real house wiring.",null,M.a9W,null,null,null,null,null,null,null,null,null)
B.fz8=new C.y("Tip: pick a part, then tap its glowing spot. Joints on hoses, bolts and the drain are only loose: pick the Wrench and tap them. Use your Hand on the main water valve: turn the water OFF before you cut into a pipe, and ON to test for leaks.",null,D.Kc,null,null,null,null,null,null,null,null,null)
B.fzu=new C.y("Answer, then submit. Nothing is marked until you submit.",null,I.tk,null,null,null,null,null,null,null,null,null)
B.fAj=new C.y("You used all three lives. Electricity does not give second chances, so in real life you turn the breaker OFF and test the wires every single time. Try the job again.",null,D.x7,null,null,null,null,null,null,null,null,null)
B.fAA=new C.y("A different house",null,null,null,null,null,null,null,null,null,null,null)
B.fB1=new C.y("\ud83c\udf5e",null,D.x5,null,null,null,null,null,null,null,null,null)
B.fB2=new C.y("Show me",null,D.lQ,null,null,null,null,null,null,null,null,null)
B.fBs=new C.y("Start this job again",null,null,null,null,null,null,null,null,null,null,null)
B.fsl=new C.F(!0,D.c0,null,null,null,null,12.5,D.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fBM=new C.y("Give back",null,B.fsl,null,null,null,null,null,null,null,null,null)
B.fCt=new C.y("Edit your billboard",null,D.de,null,null,null,null,null,null,null,null,null)
B.fDC=new C.y("L is the lobby. On every level there is a balcony with a view of the town.",null,I.El,null,null,null,null,null,null,null,null,null)
B.fDR=new C.y("Submit the test",null,null,null,null,null,null,null,null,null,null,null)
B.fEe=new C.y("\ud83e\udeaa",null,D.x5,null,null,null,null,null,null,null,null,null)
B.fEr=new C.y("Start from a bare house (wire everything)",null,null,null,null,null,null,null,null,null,null,null)
B.fF9=new C.y("THE RACE",null,Q.tm,null,null,null,null,null,null,null,null,null)
B.fFe=new C.y("What should the drone show you?",null,D.a9N,null,null,null,null,null,null,null,null,null)
B.fFW=new C.y("Go through",null,null,null,null,null,null,null,null,null,null,null)
B.fGK=new C.y("The customer says\u2026",null,D.de,null,null,null,null,null,null,null,null,null)
B.fHg=new C.y("Submit for inspection",null,null,null,null,null,null,null,null,null,null,null)
B.fHu=new C.y("What the house needs",null,D.de,null,null,null,null,null,null,null,null,null)
B.fHG=new C.y("Next job",null,null,null,null,null,null,null,null,null,null,null)
B.fjT=new C.F(!0,D.w,null,null,null,null,14,D.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fHO=new C.y("Go in",null,B.fjT,null,null,null,null,null,null,null,null,null)
B.fto=new C.F(!0,D.aA,null,null,null,null,22,D.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fHS=new C.y("My House",null,B.fto,null,D.K,null,null,null,null,null,null,null)
B.fHZ=new C.y("New job",null,null,null,null,null,null,null,null,null,null,null)
B.aU6=new C.F(!0,D.c0,null,null,null,null,null,D.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fI5=new C.y("Job over",null,B.aU6,null,null,null,null,null,null,null,null,null)
B.fIl=new C.y("Three shocks. In real life you switch the breaker off and test the wires, every time. Try another call.",null,D.x7,null,null,null,null,null,null,null,null,null)
B.fIr=new C.y("Learn the trades",null,R.tj,null,null,null,null,null,null,null,null,null)
B.fJd=new C.y("New call",null,null,null,null,null,null,null,null,null,null,null)
B.fJi=new C.y("Job done! \ud83c\udf89",null,M.Km,null,null,null,null,null,null,null,null,null)
B.fJm=new C.y("Wire guide",null,null,null,null,null,null,null,null,null,null,null)
B.fKw=new C.y("Next call",null,null,null,null,null,null,null,null,null,null,null)
B.fKU=new C.y("Plug in",null,D.de,null,null,null,null,null,null,null,null,null)
B.fLj=new C.y("Look around",null,null,null,null,null,null,null,null,null,null,null)
B.fLF=new C.y("\ud83d\udef5",null,D.x3,null,null,null,null,null,null,null,null,null)
B.fLU=new C.y("The customer wants:",null,D.V3,null,null,null,null,null,null,null,null,null)
B.fM4=new C.y('Tip: pick "Look and test" and tap things to find out what is wrong. Then pick the right tool. Turn the breaker off (hand) before you touch any wire.',null,D.Kc,null,null,null,null,null,null,null,null,null)
B.foW=new C.F(!0,D.aC,null,null,null,null,11.5,D.H,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fMm=new C.y("INCOMING CALL",null,B.foW,null,null,null,null,null,null,null,null,null)
B.fMs=new C.y("Elevator",null,D.fw,null,null,null,null,null,null,null,null,null)
B.fNt=new C.y("Deliveries",null,D.fw,null,null,null,null,null,null,null,null,null)
B.fNH=new C.y("Every connection is on the right terminal and every safety check passes.",null,D.tn,null,null,null,null,null,null,null,null,null)
B.fNQ=new C.y("Message \xb7 now",null,D.vm,null,null,null,null,null,null,null,null,null)
B.fOJ=new C.y("Call over",null,B.aU6,null,null,null,null,null,null,null,null,null)
B.fOQ=new C.y("\ud83d\udd12",null,V.V4,null,null,null,null,null,null,null,null,null)
B.fOR=new C.y("\u23cf Unplug",null,U.Am,null,null,null,null,null,null,null,null,null)
B.fOX=new C.y("The game is closed for now",null,D.n1,null,D.K,null,null,null,null,null,null,null)
B.fjC=new C.F(!0,D.ac,null,null,null,null,14.5,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fP9=new C.y("You missed 3 jobs in a row. The City office needs people who answer the phone and finish the job.",null,B.fjC,null,D.K,null,null,null,null,null,null,null)
B.fPb=new C.y("A different call",null,null,null,null,null,null,null,null,null,null,null)
B.fPt=new C.y("One board on its own, or several boards standing apart.",null,I.tk,null,null,null,null,null,null,null,null,null)
B.fPE=new C.y("\ud83d\udecf\ufe0f",null,D.n2,null,null,null,null,null,null,null,null,null)
B.fQ4=new C.y("Job complete! \ud83c\udf89",null,M.Km,null,null,null,null,null,null,null,null,null)
B.fQh=new C.y("OPEN ORDERS",null,Q.tm,null,null,null,null,null,null,null,null,null)
B.fQB=new C.y("Colours",null,D.Al,null,null,null,null,null,null,null,null,null)
B.fQF=new C.y("How you are doing",null,D.ht,null,null,null,null,null,null,null,null,null)
B.fQY=new C.y("Real work: no hints. You will only hear from me when something is wrong.",null,I.El,null,null,null,null,null,null,null,null,null)
B.fQZ=new C.y("5 bedrooms, 3 bathrooms and NGMY City outside. Walk in, look all round, fix what is wrong.",null,Aa.UO,null,D.K,null,null,null,null,null,null,null)
B.fRd=new C.y("All fixed! \ud83c\udf89",null,M.Km,null,null,null,null,null,null,null,null,null)
B.fRh=new C.y("These are the usual U.S. house wiring colors. Colors are a hint, not proof: old work, switch loops and other countries differ. A real installer proves what each wire does with a tester, with the power off, and follows the device diagram.",null,A3.a9V,null,null,null,null,null,null,null,null,null)
B.fRD=new C.y("Messages",null,D.vm,null,null,null,null,null,null,null,null,null)
B.fRQ=new C.y("Diagram lessons",null,D.cz,null,null,null,null,null,null,null,null,null)
B.aVA=new C.y("Stay",null,null,null,null,null,null,null,null,null,null,null)
B.fSo=new C.y("\ud83d\ude81",null,D.x3,null,null,null,null,null,null,null,null,null)
B.fSB=new C.y("Choose a level. A red one has an office with no power.",null,D.Ar,null,null,null,null,null,null,null,null,null)
B.aVC=new C.y("A different job",null,null,null,null,null,null,null,null,null,null,null)
B.fTp=new C.y("It goes on the back wall, not wired yet. Tap the red one to wire it yourself.",null,I.tk,null,null,null,null,null,null,null,null,null)
B.fUm=new C.y("\ud83d\uded7",null,D.x3,null,null,null,null,null,null,null,null,null)
B.fUH=new C.y("\u26a1",null,D.pF,null,null,null,null,null,null,null,null,null)
B.fVh=new C.y("The job",null,D.de,null,null,null,null,null,null,null,null,null)
B.fWb=new C.y("Stay in the room",null,null,null,null,null,null,null,null,null,null,null)
B.fvl=new C.F(!0,F.fA,null,null,null,null,12,D.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fWs=new C.y("\ud83e\udea7 Billboards",null,B.fvl,null,null,null,null,null,null,null,null,null)
B.fWy=new C.y("Choose a billboard",null,D.de,null,null,null,null,null,null,null,null,null)
B.fWD=new C.y("Which sign?",null,D.Al,null,null,null,null,null,null,null,null,null)
B.fWK=new C.y("\ud83d\udc8a",null,D.x5,null,null,null,null,null,null,null,null,null)
B.fZO=new A.q(3.6,2.6,0.6)
B.fZQ=new A.q(0,56,0.9)
B.fZR=new A.q(-146.4,62,84)
B.ig=new A.q(0,0,1)
B.fZU=new A.q(0,0,3)
B.aaU=new A.q(0,0,4)
B.fZW=new A.q(0,0,500)
B.fZX=new A.q(0,0,640)
B.fZY=new A.q(0,0,800)
B.tr=new A.q(0,0,-1)
B.aaV=new A.q(0,0,-60)
B.h_0=new A.q(0,101,38)
B.h_1=new A.q(0,105,280)
B.aWq=new A.q(0,10,0)
B.h_2=new A.q(0,10,3)
B.h_3=new A.q(0,110,10)
B.h_4=new A.q(0,110,95)
B.h_5=new A.q(0,112,36)
B.h_6=new A.q(0,116,0)
B.h_7=new A.q(0,11,-15)
B.h_8=new A.q(0,120,0)
B.h_9=new A.q(0,122,0)
B.h_a=new A.q(0,124,0)
B.h_b=new A.q(0,126,4)
B.aWs=new A.q(0,12,0)
B.h_c=new A.q(0,12,3)
B.h_d=new A.q(0,130,-3)
B.aaW=new A.q(0,13,0)
B.h_e=new A.q(0,13,56)
B.h_f=new A.q(0,13,-8)
B.h_g=new A.q(0,142,0)
B.VC=new A.q(0,14,0)
B.h_h=new A.q(0,14,11)
B.h_i=new A.q(0,14,150)
B.h_j=new A.q(0,14,2)
B.h_k=new A.q(0,14,32)
B.aWt=new A.q(0,14,40)
B.h_l=new A.q(0,14,5)
B.h_n=new A.q(0,14,-9)
B.h_o=new A.q(0,150,-150)
B.h_p=new A.q(0,159,0)
B.h_q=new A.q(0,165,3)
B.h_r=new A.q(0,165,-63)
B.h_s=new A.q(0,16,0)
B.h_t=new A.q(0,178,-30)
B.aaX=new A.q(0,17,0)
B.h_u=new A.q(0,17,21)
B.h_v=new A.q(0,188,0)
B.h_w=new A.q(0,19,0)
B.h_x=new A.q(0,19,14)
B.h_z=new A.q(0,19,-30)
B.e8=new A.q(0,1,0)
B.h_B=new A.q(0,202,0)
B.h_C=new A.q(0,20,0)
B.h_D=new A.q(0,20,16)
B.h_G=new A.q(0,20,-14)
B.h_H=new A.q(0,20,-6)
B.h_I=new A.q(0,210,-150)
B.h_J=new A.q(0,216,-30)
B.h_K=new A.q(0,21,0)
B.h_L=new A.q(0,22,-11)
B.h_M=new A.q(0,22,-12)
B.h_N=new A.q(0,22,-39)
B.h_Q=new A.q(0,23,0)
B.h_T=new A.q(0,24,0)
B.h_U=new A.q(0,24,13)
B.h_W=new A.q(0,250,640)
B.Ax=new A.q(0,250,-118)
B.h_Y=new A.q(0,252,0)
B.h_Z=new A.q(0,25,-15)
B.h0_=new A.q(0,26,-24)
B.VD=new A.q(0,28,0)
B.h00=new A.q(0,28,-8)
B.aWv=new A.q(0,29,40)
B.h01=new A.q(0,2,14)
B.h02=new A.q(0,304,-150)
B.aaY=new A.q(0,30,0)
B.h03=new A.q(0,30,110)
B.h04=new A.q(0,316,0)
B.h05=new A.q(0,31,46)
B.h06=new A.q(0,31,-6)
B.h07=new A.q(0,330,260)
B.h08=new A.q(0,34,0)
B.h09=new A.q(0,36,0)
B.h0a=new A.q(0,36,19)
B.h0b=new A.q(0,36,-3)
B.h0c=new A.q(0,37,22)
B.h0d=new A.q(0,3,0)
B.h0e=new A.q(0,3,150)
B.h0f=new A.q(0,3,-30)
B.h0h=new A.q(0,400,60)
B.h0i=new A.q(0,40,100)
B.h0k=new A.q(0,40,150)
B.h0l=new A.q(0,40,17)
B.h0n=new A.q(0,40,40)
B.h0o=new A.q(0,40,45)
B.h0p=new A.q(0,40,50)
B.h0r=new A.q(0,40,-6)
B.aWx=new A.q(0,44,46)
B.h0s=new A.q(0,44,55)
B.h0t=new A.q(0,46,0)
B.h0u=new A.q(0,47,0)
B.aWy=new A.q(0,48,0)
B.h0w=new A.q(0,48,20)
B.h0x=new A.q(0,48,82)
B.VE=new A.q(0,4,-2)
B.h0B=new A.q(0,520,1450)
B.aWz=new A.q(0,52,0)
B.h0C=new A.q(0,52,52)
B.h0E=new A.q(0,55,0)
B.aaZ=new A.q(0,58,0)
B.h0F=new A.q(0,5,4)
B.h0H=new A.q(0,66,0)
B.h0I=new A.q(0,66,1)
B.h0J=new A.q(0,6,-15)
B.h0K=new A.q(0,75,-30)
B.aWA=new A.q(0,76,36)
B.ab_=new A.q(0,7,0)
B.h0L=new A.q(0,7,-5)
B.aWB=new A.q(0,82,0)
B.xf=new A.q(0,8,0)
B.h0M=new A.q(0,8,6)
B.h0N=new A.q(0,8,90)
B.h0O=new A.q(0,8,-16)
B.h0P=new A.q(0,8,-19)
B.h0Q=new A.q(0,8,-4)
B.h0R=new A.q(0,900,1600)
B.h0S=new A.q(0,91,80)
B.aWC=new A.q(0,92,1)
B.h0T=new A.q(0,94,13)
B.h0U=new A.q(0,98,8)
B.h0V=new A.q(0,99,38)
B.ab0=new A.q(0,9,0)
B.aWD=new A.q(0,9,-3)
B.h0W=new A.q(0,-2,0)
B.ab1=new A.q(0,-2,12)
B.h0X=new A.q(0,-4,28)
B.h0Y=new A.q(0,-4,-20)
B.h11=new A.q(-100,38,0.7)
B.h14=new A.q(100,100,320)
B.h15=new A.q(100,14,36)
B.h16=new A.q(100,24,36)
B.h17=new A.q(100,24,8)
B.h18=new A.q(100,290,-330)
B.h19=new A.q(100,7,7)
B.h1a=new A.q(101,4,37)
B.h1d=new A.q(10,12,10)
B.h1e=new A.q(10,12,16)
B.h1f=new A.q(10,16,3)
B.h1g=new A.q(10,26,2)
B.h1h=new A.q(10,34,1)
B.h1i=new A.q(10,3,7)
B.h1j=new A.q(10,60,14)
B.h1k=new A.q(10,8,10)
B.h1l=new A.q(10,8,15)
B.h1n=new A.q(110,0,20)
B.h1o=new A.q(110,130,20)
B.h1p=new A.q(110,14,2)
B.h1q=new A.q(110,8,34)
B.h1r=new A.q(110,96,120)
B.aWE=new A.q(112,22,3)
B.h1s=new A.q(112,46,2)
B.h1t=new A.q(11,12,30)
B.aWF=new A.q(11,16,7)
B.h1u=new A.q(11,1,11)
B.h1v=new A.q(120,0,-30)
B.h1w=new A.q(120,28,22)
B.h1x=new A.q(120,40,100)
B.h1y=new A.q(124,2,26)
B.h1z=new A.q(124,4,60)
B.h1A=new A.q(125,8,54)
B.h1B=new A.q(126,2,62)
B.aWG=new A.q(12,3,9)
B.h1C=new A.q(12,4,22)
B.h1D=new A.q(12,86,0)
B.h1E=new A.q(130,18,12)
B.h1F=new A.q(130,28,24)
B.aWH=new A.q(130,4,14)
B.aWI=new A.q(130,56,80)
B.h1G=new A.q(130,5,50)
B.h1H=new A.q(132,14,150)
B.h1I=new A.q(132,2,52)
B.aWJ=new A.q(134,4,84)
B.h1J=new A.q(13,0,0)
B.h1K=new A.q(13,12,13)
B.h1L=new A.q(13,15,2)
B.aWK=new A.q(13,18,8)
B.h1M=new A.q(13,28,3)
B.h1N=new A.q(0,0.52,2.35)
B.h1O=new A.q(140,28,22)
B.h1P=new A.q(140,9,43)
B.h1Q=new A.q(144,2,26)
B.h1R=new A.q(146,3,40)
B.h1S=new A.q(148,60,120)
B.h1T=new A.q(14,10,2)
B.aWL=new A.q(14,11,14)
B.h1U=new A.q(14,13,28)
B.h1V=new A.q(14,14,3)
B.h1W=new A.q(14,17,4)
B.h1X=new A.q(14,20,-28)
B.h1Y=new A.q(14,30,14)
B.h1Z=new A.q(14,36,14)
B.h2_=new A.q(14,3,14)
B.h20=new A.q(150,30,42)
B.h21=new A.q(150,70,5)
B.h22=new A.q(151,3,43)
B.h23=new A.q(152,4,7)
B.h25=new A.q(16,10,10)
B.h26=new A.q(16,16,16)
B.h27=new A.q(16,3,11)
B.h28=new A.q(16,80,60)
B.h29=new A.q(16,9,2)
B.h2a=new A.q(17,1,0)
B.aWM=new A.q(17,3,17)
B.h2b=new A.q(27,1.4,27)
B.h2c=new A.q(18,18,14)
B.h2d=new A.q(18,20,18)
B.h2e=new A.q(18,22,2)
B.h2f=new A.q(18,28,16)
B.h2g=new A.q(18,2,18)
B.h2h=new A.q(18,3,0)
B.h2i=new A.q(18,6,0)
B.h2j=new A.q(18,80,2)
B.h2k=new A.q(18,90,5)
B.h2l=new A.q(18,9,11)
B.h2m=new A.q(190,20,60)
B.h2n=new A.q(190,320,100)
B.h2o=new A.q(19,13,7)
B.h2p=new A.q(70,0.6,50)
B.h2q=new A.q(0,3,-6.5)
B.aWN=new A.q(1,23.6,18)
B.h2r=new A.q(-4,20.4,0)
B.h2s=new A.q(1,1,0.64)
B.h2t=new A.q(-4.6,1.5,-3.6)
B.h2u=new A.q(0,-13.5,-1.5)
B.h2v=new A.q(4,10,3.5)
B.aWO=new A.q(0.95,1.7,0.85)
B.hu=new A.q(1,0,0)
B.h2w=new A.q(1,16,36)
B.h2x=new A.q(1,18,18)
B.h2y=new A.q(1,26,14)
B.h2z=new A.q(1,28,14)
B.aWP=new A.q(1,2,1)
B.aWQ=new A.q(1,3,1)
B.ab2=new A.q(1,3,6)
B.h2B=new A.q(1,0.9,0.06)
B.h2C=new A.q(1.2,44,34)
B.h2E=new A.q(200,0,500)
B.h2F=new A.q(200,0,900)
B.h2G=new A.q(200,140,200)
B.h2K=new A.q(1.6,15,1.6)
B.h2L=new A.q(20,12,14)
B.aWR=new A.q(20,14,7)
B.h2M=new A.q(20,2,2)
B.h2N=new A.q(20,2,8)
B.h2O=new A.q(20,30,26)
B.h2P=new A.q(20,3,14)
B.h2Q=new A.q(20,4,26)
B.h2R=new A.q(20,92,26)
B.h2S=new A.q(216,8,216)
B.h2T=new A.q(22,12,34)
B.h2U=new A.q(22,14,0)
B.h2V=new A.q(22,14,2)
B.h2W=new A.q(22,14,3)
B.h2X=new A.q(22,16,3)
B.h2Y=new A.q(22,18,14)
B.h2Z=new A.q(22,1,1)
B.h3_=new A.q(22,2,28)
B.h30=new A.q(22,3,10)
B.h31=new A.q(22,3,22)
B.h32=new A.q(22,4,20)
B.h33=new A.q(230,330,-210)
B.h34=new A.q(230,-40,100)
B.h35=new A.q(240,150,60)
B.h36=new A.q(244,6,64)
B.h37=new A.q(140,15,3.6)
B.h38=new A.q(24,12,34)
B.h39=new A.q(24,14,22)
B.h3a=new A.q(24,38,0)
B.aWS=new A.q(24,6,14)
B.h3b=new A.q(250,92,6)
B.h3c=new A.q(260,300,-160)
B.h3d=new A.q(262,3,5)
B.h3e=new A.q(262,3,56)
B.h3f=new A.q(26,14,26)
B.h3g=new A.q(26,2,26)
B.aWT=new A.q(26,4,22)
B.h3h=new A.q(26,72,26)
B.h3i=new A.q(26,8,18)
B.h3j=new A.q(26,-34,96)
B.aWU=new A.q(28,30,22)
B.h3k=new A.q(28,4,1)
B.h3m=new A.q(7.4,6,10.4)
B.h3n=new A.q(-0.1,0,0)
B.aWV=new A.q(2,100,90)
B.h3o=new A.q(2,10,2)
B.aWW=new A.q(2,12,60)
B.h3p=new A.q(2,13,2)
B.aWX=new A.q(2,23,12)
B.aWY=new A.q(2,28,22)
B.h3q=new A.q(2,5,1)
B.h3r=new A.q(2,700,900)
B.aWZ=new A.q(2,8,2)
B.h3s=new A.q(1,0.9,0.8)
B.h3u=new A.q(64,10,-1.4)
B.h3v=new A.q(47,48,3.5)
B.h3w=new A.q(19.6,0,-1.5)
B.aX_=new A.q(0,56,1.3)
B.h3x=new A.q(0,15.5,0)
B.h3y=new A.q(3000,0,3000)
B.h3z=new A.q(3000,0,-3000)
B.h3B=new A.q(300,6,3)
B.h3D=new A.q(30,16,30)
B.aX0=new A.q(30,16,72)
B.h3E=new A.q(30,22,0)
B.h3F=new A.q(30,24,8)
B.h3G=new A.q(30,29,0)
B.h3H=new A.q(30,34,40)
B.h3I=new A.q(30,40,100)
B.h3K=new A.q(30,6,12)
B.h3L=new A.q(324,114,6)
B.aX1=new A.q(324,6,10)
B.aX2=new A.q(32,35,26)
B.h3M=new A.q(33,11,10)
B.h3N=new A.q(34,10,1)
B.h3O=new A.q(34,22,3)
B.aX3=new A.q(34,25,18)
B.h3P=new A.q(34,30,1)
B.aX4=new A.q(34,39,18)
B.aX5=new A.q(34,42,18)
B.h3Q=new A.q(34,4,28)
B.aX7=new A.q(34,8,18)
B.h3R=new A.q(-1,-1.7,2.3)
B.h3S=new A.q(366,124,6)
B.aX8=new A.q(366,6,10)
B.h3T=new A.q(36,1,18)
B.h3U=new A.q(36,22,0)
B.h3V=new A.q(36,30,0)
B.h3W=new A.q(36,30,1)
B.h3X=new A.q(36,4,3)
B.h3Y=new A.q(36,60,12)
B.h3Z=new A.q(0,93,3.5)
B.h4_=new A.q(37,16,0)
B.h40=new A.q(37,50,38)
B.h41=new A.q(38,10,24)
B.h42=new A.q(38,20,3)
B.h43=new A.q(38,2,6)
B.h44=new A.q(-0.2,-0.3,-0.4)
B.h45=new A.q(60,62,3.6)
B.h46=new A.q(0,48.6,55)
B.aX9=new A.q(3,12,12)
B.aXa=new A.q(3,14,18)
B.h47=new A.q(3,16,3)
B.h49=new A.q(3,22,2)
B.h4a=new A.q(3,26,3)
B.ab3=new A.q(3,3,3)
B.h4b=new A.q(3,42,70)
B.h4c=new A.q(3,46,90)
B.h4d=new A.q(3,5,3)
B.h4e=new A.q(17.5,1.9,1.5)
B.h4g=new A.q(40,12,2)
B.h4h=new A.q(40,16,18)
B.h4i=new A.q(40,1,14)
B.h4j=new A.q(40,28,1)
B.h4k=new A.q(40,2,104)
B.h4l=new A.q(40,2,24)
B.h4m=new A.q(40,60,40)
B.h4n=new A.q(40,80,3)
B.h4o=new A.q(40,8,104)
B.h4p=new A.q(44,10,2)
B.aXc=new A.q(44,2,14)
B.h4q=new A.q(44,3,22)
B.h4r=new A.q(44,72,20)
B.h4s=new A.q(0.9,0,4.4)
B.h4t=new A.q(8.2,1.9,-7.55)
B.h4u=new A.q(46,10,34)
B.h4v=new A.q(46,3,10)
B.h4w=new A.q(46,3,3)
B.h4x=new A.q(48,2,24)
B.h4y=new A.q(120.6,140,-52)
B.h4z=new A.q(0,-47.25,-2.25)
B.h4A=new A.q(-147.6,54,45)
B.h4B=new A.q(0.6,68,0.4)
B.h4C=new A.q(64,49,8.4)
B.h4D=new A.q(1.5,28,120)
B.h4E=new A.q(0,1.59,0.14)
B.h4F=new A.q(4,108,0)
B.h4G=new A.q(4,80,104)
B.h4H=new A.q(4,96,0)
B.h4I=new A.q(0,-3.4,1)
B.h4J=new A.q(25,79,1.4)
B.h4K=new A.q(1,0,-1.2)
B.h4L=new A.q(0.6,4,2.4)
B.h4M=new A.q(50,12,32)
B.h4N=new A.q(50,1,2)
B.h4O=new A.q(50,28,42)
B.h4P=new A.q(50,4,28)
B.h4Q=new A.q(51,7,33)
B.h4R=new A.q(52,10,22)
B.h4S=new A.q(52,56,1)
B.h4T=new A.q(54,5,18)
B.h4W=new A.q(56,18,18)
B.h4X=new A.q(56,2,36)
B.h4Y=new A.q(56,3,32)
B.h4Z=new A.q(56,3,48)
B.h5_=new A.q(1.3,0.4,0.55)
B.h50=new A.q(58,0,30)
B.h51=new A.q(58,14,9)
B.h52=new A.q(58,64,22)
B.h53=new A.q(58,92,30)
B.h54=new A.q(58,96,30)
B.h55=new A.q(58,9,74)
B.h56=new A.q(0,-0.8,0.9)
B.h57=new A.q(11.9,0,-8)
B.h58=new A.q(20,7,34.4)
B.h59=new A.q(-47,48,3.5)
B.aXd=new A.q(1.6,1.6,0.4)
B.h5a=new A.q(-17.5,1.9,1.5)
B.h5c=new A.q(0.16,0.32,0.07)
B.h5d=new A.q(5,10,5)
B.aXe=new A.q(5,12,26)
B.h5e=new A.q(5,17,2)
B.h5f=new A.q(5,1,2)
B.h5g=new A.q(5,34,24)
B.h5h=new A.q(5,5,5)
B.h5i=new A.q(5,6,10)
B.h5j=new A.q(5,6,3)
B.h5k=new A.q(5,9,8)
B.h5l=new A.q(-120.1,150,0)
B.h5m=new A.q(0,0,3.2)
B.aXf=new A.q(-13,8.6,-9.5)
B.h5n=new A.q(60,12,56)
B.h5o=new A.q(60,12,80)
B.h5p=new A.q(60,16,28)
B.h5q=new A.q(60,30,3)
B.h5s=new A.q(620,300,270)
B.h5t=new A.q(62,11,0)
B.h5u=new A.q(62,18,20)
B.h5v=new A.q(62,22,6)
B.h5w=new A.q(62,5,0)
B.h5x=new A.q(632,10,282)
B.h5y=new A.q(640,8,290)
B.h5z=new A.q(64,10,0)
B.h5C=new A.q(0,-3.45,4)
B.h5D=new A.q(14,9,0.5)
B.aXg=new A.q(6,14,20)
B.aXh=new A.q(6,14,32)
B.h5E=new A.q(6,28,6)
B.h5F=new A.q(6,4,4)
B.h5G=new A.q(6,6,6)
B.h5I=new A.q(-150.6,70,160)
B.h5J=new A.q(0,-0.2,0.14)
B.h5L=new A.q(120.6,140,-8)
B.h5M=new A.q(0.3,38,2)
B.h5O=new A.q(700,430,1150)
B.h5P=new A.q(70,175,-45)
B.h5Q=new A.q(70,194,-45)
B.h5R=new A.q(70,6,36)
B.h5S=new A.q(720,100,105)
B.h5T=new A.q(720,360,320)
B.h5U=new A.q(72,32,3)
B.h5V=new A.q(72,-17,70)
B.h5W=new A.q(12,5,0.4)
B.h5X=new A.q(74,20,5)
B.h5Y=new A.q(76,2,90)
B.h5Z=new A.q(76,8,3)
B.h6_=new A.q(34,30,0.6)
B.h61=new A.q(1.6,1.7,3.6)
B.h63=new A.q(-72.8,0,55)
B.h64=new A.q(-146.4,15,84)
B.h66=new A.q(25,79,0.2)
B.h67=new A.q(7,0,-8)
B.h68=new A.q(7,18,10)
B.h69=new A.q(7,27,10)
B.h6a=new A.q(7,2,7)
B.aXi=new A.q(7,3,0)
B.h6b=new A.q(7,6,3)
B.h6c=new A.q(7,8,3)
B.aXj=new A.q(7,96,7)
B.h6d=new A.q(2200,0.4,560)
B.h6f=new A.q(0,11,9.2)
B.h6g=new A.q(-3.2,1.3,-7.82)
B.h6h=new A.q(20,0.8,12)
B.h6i=new A.q(80,16,32)
B.h6j=new A.q(80,26,8)
B.h6k=new A.q(80,38,26)
B.h6m=new A.q(80,4,14)
B.h6n=new A.q(80,6,32)
B.aXk=new A.q(147,1.5,3.5)
B.h6o=new A.q(82,46,3)
B.aXl=new A.q(-6.5,6.9,-3)
B.h6p=new A.q(84,10,38)
B.h6q=new A.q(84,18,38)
B.h6r=new A.q(84,84,120)
B.h6s=new A.q(84,8,36)
B.h6t=new A.q(0.93,0.92,1)
B.h6u=new A.q(4.6,4.2,9.5)
B.h6v=new A.q(88,24,28)
B.h6w=new A.q(88,84,3)
B.h6x=new A.q(0.4,6,8)
B.h6y=new A.q(0,-48.6,55)
B.h6z=new A.q(2.6,2,2.6)
B.h6A=new A.q(5.5,8.5,3)
B.h6B=new A.q(0,0,0.26)
B.h6C=new A.q(120.6,96,-52)
B.h6D=new A.q(20,11,0.7)
B.h6E=new A.q(8,18,8)
B.aXm=new A.q(8,2,16)
B.h6F=new A.q(8,2,6)
B.aXn=new A.q(8,2,8)
B.h6G=new A.q(8,6,6)
B.h6H=new A.q(8,8,12)
B.h6I=new A.q(8,9,8)
B.h6J=new A.q(8,9,9)
B.h6K=new A.q(-140,62,3.6)
B.h6M=new A.q(15,19,0.5)
B.h6N=new A.q(900,2,700)
B.h6P=new A.q(92,2,32)
B.h6Q=new A.q(95,26,1)
B.h6R=new A.q(95,50,6)
B.h6S=new A.q(96,14,38)
B.h6T=new A.q(0.4,0.38,0.12)
B.h6U=new A.q(0,0,-0.43)
B.aXo=new A.q(11.2,4.5,-6)
B.aXp=new A.q(1.2,96,112)
B.aXq=new A.q(0.08,3.8,2.4)
B.aXr=new A.q(9,1,9)
B.h6V=new A.q(9,40,4)
B.h6W=new A.q(9,5,9)
B.h6X=new A.q(0,70,-0.6)
B.h6Y=new A.q(-34.6,86,69)
B.h6Z=new A.q(-3.5,26,15)
B.h7_=new A.q(34,6,0.6)
B.h70=new A.q(1.5,1.3,0.6)
B.h71=new A.q(-120.6,96,-8)
B.h72=new A.q(0,1.9,-0.7)
B.h74=new A.q(0,-1.78,0.27)
B.aXs=new A.q(1.2,9,1.2)
B.h75=new A.q(0,0.62,0)
B.h76=new A.q(5.5,1.4,12)
B.h77=new A.q(-50,0.6,50)
B.h7a=new A.q(20,11.5,0)
B.h7b=new A.q(20,66,1.4)
B.h7c=new A.q(3.2,0.12,-6.7)
B.h7d=new A.q(12,0,-8.1)
B.h7f=new A.q(-34.6,86,7)
B.aXt=new A.q(0,0,3.4)
B.h7g=new A.q(1.25,0.28,0.1)
B.h7h=new A.q(100,38,0.7)
B.h7i=new A.q(0,36,10.2)
B.h7j=new A.q(24,0.08,16)
B.h7k=new A.q(34,1.4,1.4)
B.h7m=new A.q(0,4,-7.9)
B.h7n=new A.q(11.9,0,8)
B.h7o=new A.q(0,41.5,-4.9)
B.h7p=new A.q(-26,146,0.6)
B.aXu=new A.q(0.8,1.7,0.78)
B.h7r=new A.q(21,1.4,8)
B.h7s=new A.q(0.8,0.8,1.6)
B.h7t=new A.q(1.4,1,1)
B.h7u=new A.q(30,36,0.8)
B.h7w=new A.q(71.2,46.6,55)
B.h7x=new A.q(3,3.28,-7.2)
B.h7y=new A.q(4.1,3.4,0.12)
B.h7z=new A.q(1.4,0.3,1)
B.h7A=new A.q(0,-1.7,1.6)
B.h7B=new A.q(0,42,1.5)
B.h7C=new A.q(-6.1,1.2,-6.4)
B.h7D=new A.q(1.4,26,0.4)
B.h7E=new A.q(76,0.6,4)
B.h7G=new A.q(26,0.3,130)
B.h7H=new A.q(0,-45.5,0.5)
B.h7I=new A.q(1.8,4,1)
B.h7J=new A.q(5,1.6,0.5)
B.h7L=new A.q(18,10,0.6)
B.h7M=new A.q(0,11,8.5)
B.h7N=new A.q(0.1,-2,2.4)
B.h7O=new A.q(302.4,1.2,322)
B.h7P=new A.q(-1,33.4,-4.9)
B.h7Q=new A.q(0,0.2,2.8)
B.h7R=new A.q(6,10,1.4)
B.h7S=new A.q(0.95,0.95,1)
B.h7T=new A.q(24,32,0.8)
B.h7U=new A.q(0,10,5.2)
B.h7V=new A.q(0,-1.2,4.7)
B.h7W=new A.q(18.9,2.6,0)
B.h7X=new A.q(-2200,0.4,720)
B.h7Y=new A.q(66,89,3.8)
B.h7Z=new A.q(-12,0,-8.1)
B.h8_=new A.q(3,11,0.5)
B.h80=new A.q(0.42,0.07,0.03)
B.h81=new A.q(0,70,320.6)
B.h82=new A.q(11.8,4,0)
B.h83=new A.q(0.97,0.18,2.25)
B.h84=new A.q(0,6.6,-0.6)
B.h85=new A.q(58,96,31.7)
B.h86=new A.q(14,20,1.2)
B.aXw=new A.q(-71.7,6,55)
B.h87=new A.q(0,-3.75,4.15)
B.h89=new A.q(64,57,8.4)
B.h8a=new A.q(5.6,0.3,1.9)
B.h8b=new A.q(0.34,0.05,0.02)
B.h8e=new A.q(52,8,0.4)
B.h8f=new A.q(0,14,51.2)
B.h8g=new A.q(4.6,7.6,3)
B.h8h=new A.q(-1,0,-1.2)
B.h8i=new A.q(0,1.7,0)
B.h8j=new A.q(0,1.8,-0.9)
B.h8l=new A.q(-1,0,1.5)
B.h8m=new A.q(27,19,0.4)
B.h8n=new A.q(32,6,1.2)
B.h8o=new A.q(90,2,0.5)
B.h8p=new A.q(-17,98,77.2)
B.h8q=new A.q(5,8,0.4)
B.h8r=new A.q(0,98,6.6)
B.h8s=new A.q(5,14,8.5)
B.h8t=new A.q(5,2.2,0.8)
B.h8u=new A.q(-120.6,140,-52)
B.h8v=new A.q(-2200,0.4,560)
B.h8w=new A.q(0.18,0.12,0.08)
B.h8x=new A.q(50,0.6,50)
B.h8y=new A.q(147,3,1.4)
B.h8z=new A.q(20,0.6,50)
B.h8A=new A.q(0,6.6,0)
B.h8B=new A.q(4,16.2,0)
B.h8C=new A.q(60,0.4,12)
B.h8D=new A.q(10,15,0.5)
B.h8E=new A.q(144,5,0.7)
B.h8F=new A.q(1.2,-1.7,2.3)
B.h8G=new A.q(0.42,1.95,0.07)
B.h8H=new A.q(31.5,23,0)
B.h8I=new A.q(0,0.9,0)
B.h8J=new A.q(2.4,2.4,70)
B.h8K=new A.q(-120.6,140,-8)
B.h8M=new A.q(-146.4,15,172)
B.h8N=new A.q(0.82,1.7,0.3)
B.h8O=new A.q(0.55,0.45,0.35)
B.h8P=new A.q(47,7,34.4)
B.h8Q=new A.q(-0.12,0,0)
B.h8S=new A.q(3.5,94,0.2)
B.h8T=new A.q(1.1,2.05,0.04)
B.h8U=new A.q(32,0.8,26)
B.h8V=new A.q(25,79,1.2)
B.h8W=new A.q(1.2,3.6,18)
B.ab4=new A.q(0.7,0.14,0.06)
B.h8X=new A.q(10,14,0.5)
B.h8Y=new A.q(0,138.8,95)
B.h8Z=new A.q(0,35.5,-4.9)
B.h9_=new A.q(5,8,0.5)
B.ab5=new A.q(1.1,0.5,0.7)
B.h90=new A.q(-20,11.5,0)
B.h91=new A.q(0,1.1,0)
B.h92=new A.q(0,-0.5,0.6)
B.h93=new A.q(32,6,0.5)
B.h94=new A.q(0,1.4,0)
B.h96=new A.q(1,3,0.8)
B.h97=new A.q(0,3.4,0.8)
B.h99=new A.q(0.1,0.1,0.1)
B.h9a=new A.q(0,-0.6,38)
B.h9b=new A.q(0,-10.5,1.5)
B.h9c=new A.q(-0.85,4,-3.2)
B.h9e=new A.q(-7.1,19,4)
B.h9f=new A.q(0,58,-14.2)
B.h9g=new A.q(40,7.2,1.2)
B.aXx=new A.q(0.42,0.34,0.12)
B.h9h=new A.q(1.7,0.08,1.2)
B.h9i=new A.q(8.6,0.5,3.4)
B.h9j=new A.q(0,0,0.38)
B.h9l=new A.q(5.2,3.9,-7.76)
B.h9m=new A.q(1.15,0.42,0.7)
B.h9o=new A.q(146.2,52,120)
B.h9p=new A.q(30,22,0.8)
B.h9q=new A.q(2.6,0.45,0.5)
B.h9r=new A.q(0.07,0.3,0.03)
B.h9t=new A.q(0,-0.55,0.36)
B.h9u=new A.q(41.5,11,12)
B.h9v=new A.q(36.2,60,38)
B.h9x=new A.q(20,1.4,8)
B.h9y=new A.q(75.4,24,0)
B.h9z=new A.q(0,-0.2,0.19)
B.h9A=new A.q(-20,0.6,-50)
B.h9B=new A.q(1.3,0.26,0.6)
B.h9D=new A.q(1.2,49,36)
B.h9E=new A.q(0,9.3,0)
B.h9G=new A.q(0,-1.45,0)
B.h9H=new A.q(9,12,0.6)
B.h9I=new A.q(0,-0.6,160)
B.aXy=new A.q(1.4,3,1.6)
B.h9J=new A.q(0,40,0.95)
B.h9K=new A.q(28,0.8,22)
B.h9L=new A.q(11,3,0.5)
B.h9M=new A.q(34.6,34,7)
B.h9N=new A.q(190,0.6,90)
B.h9O=new A.q(0,-1.9,-1.2)
B.h9P=new A.q(-3.2,1.15,-7.78)
B.h9Q=new A.q(0,-3.4,1.2)
B.h9R=new A.q(64,10,0.2)
B.h9S=new A.q(0,-1.78,0.53)
B.h9T=new A.q(0.8,2.6,0.3)
B.aXz=new A.q(-6.5,7.4,-3)
B.h9U=new A.q(1,1.05,0.75)
B.h9V=new A.q(0,76,1.1)
B.h9W=new A.q(1.35,0.32,0.5)
B.h9X=new A.q(-4.6,-2,1.2)
B.h9Z=new A.q(0,40,1.4)
B.aXB=new A.q(0.6,32,34)
B.ha_=new A.q(-3,36,10.6)
B.ha1=new A.q(0,0.2,0)
B.ha3=new A.q(2.5,30,2.5)
B.ha4=new A.q(160,1.2,120)
B.ha5=new A.q(7,40,2.4)
B.ha6=new A.q(30,26,0.6)
B.ha7=new A.q(3.4,3.25,-7.85)
B.ha8=new A.q(0,-0.2,-0.1)
B.ha9=new A.q(72.8,0,55)
B.haa=new A.q(0.5,62,30)
B.hab=new A.q(0,76,37.8)
B.hac=new A.q(146.4,62,120)
B.had=new A.q(34.6,86,7)
B.hae=new A.q(2.2,1.1,6.4)
B.haf=new A.q(0,0,0.46)
B.hag=new A.q(17,98,77.2)
B.hah=new A.q(3,1.55,-7.1)
B.hai=new A.q(0.4,3,3)
B.aXD=new A.q(0,-0.1,0.1)
B.haj=new A.q(-52,96,-60.6)
B.hak=new A.q(0,0,0.04)
B.ham=new A.q(0,14,-19.3)
B.han=new A.q(2.4,11.6,-3.6)
B.hao=new A.q(4,11,3.5)
B.haq=new A.q(5,8.6,-2.25)
B.har=new A.q(0,-1.78,0.3)
B.has=new A.q(2.2,2.2,1.8)
B.hat=new A.q(0.1,1.35,0.2)
B.hau=new A.q(0,1.9,-1.2)
B.hav=new A.q(0,56,2.1)
B.haw=new A.q(0.26,0.04,0.02)
B.hax=new A.q(-2.4,11.6,-3.6)
B.hay=new A.q(11.25,0,-2.25)
B.haz=new A.q(0,3.7,1.4)
B.haA=new A.q(1,-1.8,2.4)
B.haB=new A.q(-26,43,3.8)
B.haC=new A.q(-60,15,3.6)
B.haD=new A.q(20,0.6,-50)
B.haE=new A.q(-11.8,4,0)
B.haF=new A.q(1.2,4,7)
B.haG=new A.q(11.2,4.7,-6)
B.haH=new A.q(66,43,3.8)
B.aXE=new A.q(0,2.8,0)
B.haI=new A.q(24,8,0.05)
B.aXF=new A.q(86,52,1.4)
B.haK=new A.q(0.12,0,0)
B.haL=new A.q(2.7,0.22,0.45)
B.haM=new A.q(1.1,1.1,0.03)
B.haN=new A.q(-50,0.6,-50)
B.haO=new A.q(-26,94,0.6)
B.haP=new A.q(0,32,320.9)
B.haQ=new A.q(0,5,1.1)
B.haR=new A.q(4.6,5.4,3.2)
B.haS=new A.q(3.4,3.55,-7.85)
B.haU=new A.q(71.6,-22,62)
B.haV=new A.q(0,3,1.2)
B.haW=new A.q(22,18,0.4)
B.haX=new A.q(-20,0.6,50)
B.aXG=new A.q(1.5,18,3.5)
B.aXH=new A.q(0,1.5,-0.9)
B.hb_=new A.q(-0.28,0.55,-0.8)
B.hb0=new A.q(0,-0.2,0.24000000000000002)
B.hb2=new A.q(0,-3.3,4)
B.hb3=new A.q(46,0.8,46)
B.hb4=new A.q(1,-0.2,0.14)
B.hb5=new A.q(0,137,1.6)
B.aXI=new A.q(84,3,0.5)
B.hb6=new A.q(-1.9,0,-2.25)
B.hb7=new A.q(0,-0.9,1.1)
B.hb8=new A.q(1.1,0.4,0.6)
B.hb9=new A.q(8.2,1.05,-6.7)
B.hba=new A.q(0,9.6,11.6)
B.hbc=new A.q(34.6,34,69)
B.hbe=new A.q(-149.3,38,128)
B.hbf=new A.q(0.07,0.4,0.03)
B.hbg=new A.q(2,3.8,0.08)
B.hbh=new A.q(31,83,0.9)
B.hbi=new A.q(64,40,-3.2)
B.hbj=new A.q(0.95,0.62,2.2)
B.aXJ=new A.q(1.4,3,112)
B.hbk=new A.q(1,33.4,-4.9)
B.hbl=new A.q(0,0.3,314)
B.aXK=new A.q(302.4,140,1.2)
B.hbm=new A.q(0,46.6,0.8)
B.hbo=new A.q(6.5,6.4,13)
B.hbp=new A.q(0,0,-8.8)
B.hbq=new A.q(0,0.7,-1)
B.hbt=new A.q(-11.9,0,8)
B.hbu=new A.q(7,0,1.5)
B.hbv=new A.q(-8.4,0.7,-6.4)
B.hbw=new A.q(-3.2,1.45,-7.78)
B.hbx=new A.q(34,25,21.6)
B.hby=new A.q(0,41,0.45)
B.hbz=new A.q(-6.575,0,-0.25)
B.hbA=new A.q(1.7,1,0.6)
B.hbB=new A.q(0.07,0.42,0.03)
B.hbE=new A.q(3.7,1.35,0.5)
B.aXM=new A.q(0,0,-2.3)
B.ab8=new A.q(-13,12.5,0)
B.hbF=new A.q(0,0,0.62)
B.hbG=new A.q(-60,62,3.6)
B.hbH=new A.q(0.2,-0.3,-0.4)
B.aXN=new A.q(10.85,18,0.5)
B.hbI=new A.q(120.1,174,-30)
B.hbJ=new A.q(0.6,70,0.6)
B.hbK=new A.q(1.4,1.3,0.02)
B.hbL=new A.q(30,1.4,0.4)
B.hbM=new A.q(6.3,1.5,-7.2)
B.hbN=new A.q(8,14,1.2)
B.hbO=new A.q(-120.1,150,-60)
B.hbP=new A.q(0,5,11.2)
B.aXO=new A.q(0,0.62,2.85)
B.hbQ=new A.q(37.5,23,0)
B.aXP=new A.q(0.05,8,16)
B.hbR=new A.q(0,-1.2,5)
B.hbS=new A.q(0.2,-2,2.6)
B.hbU=new A.q(0,-3.15,4.2)
B.hbW=new A.q(11.2,2.4,-5.18)
B.hbY=new A.q(-1,-0.2,0.14)
B.hbZ=new A.q(0.97,0.9,1.04)
B.hc_=new A.q(-17,83,77.2)
B.hc0=new A.q(0.5,8,6)
B.hc1=new A.q(1.2,1.2,0.3)
B.aXR=new A.q(2,0.08,2.4)
B.hc3=new A.q(9.5,13.5,1.4)
B.hc4=new A.q(24,14,0.8)
B.hc5=new A.q(2.2,18,2.2)
B.hc6=new A.q(22,0.2,0.8)
B.hc7=new A.q(-0.32,0,0.5)
B.aXS=new A.q(1.3,4,0.8)
B.hc9=new A.q(-26,89,3.8)
B.hca=new A.q(-120.1,174,-30)
B.hcb=new A.q(0.8,0.55,0.05)
B.hcc=new A.q(0.14,0.35,17)
B.hcd=new A.q(1.4,2.4,0.3)
B.hce=new A.q(0,11,8.2)
B.hcf=new A.q(52,96,-60.6)
B.hcg=new A.q(26,146,0.6)
B.hch=new A.q(3.2,5,0.8)
B.hci=new A.q(0,24,-0.6)
B.hcl=new A.q(150,0.6,90)
B.hcm=new A.q(0,11.5,19.3)
B.hcn=new A.q(0,1.95,0.31)
B.hco=new A.q(150,1.2,112)
B.aXT=new A.q(0.75,4.5,0.1)
B.hcq=new A.q(0.12,0,0.05)
B.hcs=new A.q(0,6.2,0)
B.hct=new A.q(-34.6,34,69)
B.hcu=new A.q(9,1.2,9)
B.hcv=new A.q(120.1,150,-60)
B.hcw=new A.q(0,-0.5,0)
B.hcz=new A.q(0,37.5,-4.9)
B.hcA=new A.q(-2.4,14,8)
B.hcB=new A.q(-190,160,-14.2)
B.hcC=new A.q(0,0,3.6)
B.hcD=new A.q(3,14,1.5)
B.hcE=new A.q(5.5,8.5,0.5)
B.aXU=new A.q(0.05,8,9.6)
B.hcG=new A.q(1.5,94,3.5)
B.hcH=new A.q(0,8.2,0)
B.hcI=new A.q(0,12.6,10.2)
B.hcJ=new A.q(-120.6,96,-52)
B.hcL=new A.q(4,94,0.4)
B.aXV=new A.q(1.4,8,1)
B.hcM=new A.q(120.6,96,-8)
B.hcN=new A.q(114,30,0.4)
B.hcO=new A.q(0,-1.45,0.3)
B.hcP=new A.q(3.7,1.2,-7.1)
B.hcQ=new A.q(1.5,1.35,1.5)
B.hcR=new A.q(8.2,0.05,-6.7)
B.hcS=new A.q(0,-0.3,0)
B.hcT=new A.q(6.575,0,-0.25)
B.aXW=new A.q(150.6,70,160)
B.hcU=new A.q(52,140,-60.6)
B.aXX=new A.q(0,1.8,0)
B.hcV=new A.q(100,14,0.6)
B.hcW=new A.q(9,5,0.6)
B.hcX=new A.q(34,2,0.8)
B.hcZ=new A.q(26,94,0.6)
B.hd_=new A.q(9.8,5,-7.75)
B.aXY=new A.q(0,2.4,0)
B.hd0=new A.q(1.5,3.5,112)
B.hd1=new A.q(-8,31.5,6)
B.hd3=new A.q(22,7,34.4)
B.hd4=new A.q(3,1.85,-7.1)
B.hd6=new A.q(40,1.4,60)
B.hd9=new A.q(34,3,0.8)
B.hda=new A.q(16,0.4,16)
B.aba=new A.q(13,12.5,0)
B.hdc=new A.q(0.34,0.66,0.9)
B.hde=new A.q(0.9,1.08,0.98)
B.hdf=new A.q(12,0.4,6)
B.hdg=new A.q(-6.5,7.9,-3)
B.hdh=new A.q(1.5,1.5,0.05)
B.hdi=new A.q(-6.5,5,-3)
B.hdj=new A.q(58.4,1.6,50)
B.hdk=new A.q(1.05,0.95,1)
B.hdl=new A.q(16,22,0.6)
B.hdm=new A.q(0.02,0.28,0.05)
B.hdo=new A.q(0,0.7,1)
B.hdp=new A.q(26,22,1.4)
B.hdq=new A.q(0,9.5,-7)
B.aXZ=new A.q(13,8.6,9.5)
B.hds=new A.q(-140,15,3.6)
B.hdt=new A.q(1.3,0.95,0.6)
B.hdu=new A.q(5,5,0.8)
B.hdv=new A.q(-3.6,4,-7.76)
B.hdw=new A.q(-1.15,1.18,0.45)
B.hdx=new A.q(0,-8,10.2)
B.hdy=new A.q(0.82,0.9,0.05)
B.hdz=new A.q(0,-5.5,-0.25)
B.hdA=new A.q(0,11,21.2)
B.aY_=new A.q(0,19.2,-2.3)
B.hdC=new A.q(34.6,86,69)
B.hdD=new A.q(64,50,6.6)
B.hdE=new A.q(-34,40,36.4)
B.hdF=new A.q(2.2,1.8,2)
B.hdH=new A.q(190,160,-14.2)
B.hdJ=new A.q(0,0.6,0)
B.hdM=new A.q(1.9,0,0)
B.hdN=new A.q(0.45,0.72,0.06)
B.hdO=new A.q(95,26,1.8)
B.hdQ=new A.q(14,0.4,7)
B.hdR=new A.q(64,24,-3.2)
B.abb=new A.q(1.2,140,320)
B.hdS=new A.q(1,4.5,0.8)
B.hdT=new A.q(120.1,150,0)
B.hdU=new A.q(0,0.03,0)
B.hdV=new A.q(-100,100,320)
B.hdX=new A.q(-100,400,350)
B.hdY=new A.q(-10,22,0)
B.he0=new A.q(-110,96,120)
B.he1=new A.q(-112,38,24)
B.he2=new A.q(-120,0,-30)
B.he3=new A.q(-120,300,-320)
B.he4=new A.q(-125,16,30)
B.he5=new A.q(-13,15,2)
B.he6=new A.q(-144,82,45)
B.he7=new A.q(-147,54,45)
B.he8=new A.q(-148,56,120)
B.he9=new A.q(-14,17,4)
B.hea=new A.q(-14,20,-28)
B.heb=new A.q(-18,6,0)
B.r0=new A.q(-1,0,0)
B.hec=new A.q(-1,0,-8)
B.hed=new A.q(-200,0,500)
B.hee=new A.q(-200,0,900)
B.hef=new A.q(-200,100,480)
B.heh=new A.q(-20,4,26)
B.hei=new A.q(-20,92,26)
B.hej=new A.q(-22,14,0)
B.hek=new A.q(-24,38,0)
B.hel=new A.q(-260,330,-80)
B.hem=new A.q(-3000,0,3000)
B.hen=new A.q(-3000,0,-3000)
B.heq=new A.q(-30,36,38)
B.her=new A.q(-30,40,100)
B.hes=new A.q(-30,44,33)
B.heu=new A.q(-330,40,760)
B.hev=new A.q(-34,34,38)
B.hew=new A.q(-34,40,38)
B.hex=new A.q(-37,16,0)
B.hey=new A.q(-37,50,38)
B.hez=new A.q(-380,470,1300)
B.heA=new A.q(-390,144,-120)
B.heB=new A.q(-390,70,-120)
B.heC=new A.q(-40,12,150)
B.heD=new A.q(-40,30,164)
B.heF=new A.q(-42,-34,96)
B.heG=new A.q(0,-0.6,22)
B.heH=new A.q(-4,20,0)
B.heI=new A.q(-4,22,150)
B.aY0=new A.q(-4,22,8)
B.heL=new A.q(-5,17,0)
B.heM=new A.q(0,36.5,0)
B.heN=new A.q(-60,28,56)
B.heQ=new A.q(-60,50,1)
B.heR=new A.q(-60,70,6)
B.heS=new A.q(-700,430,1150)
B.heU=new A.q(-70,0,34)
B.heV=new A.q(-70,95,34)
B.heW=new A.q(-70,96,34)
B.heX=new A.q(-720,360,320)
B.heY=new A.q(-72,6,55)
B.heZ=new A.q(-80,12,30)
B.hf_=new A.q(-80,25,30)
B.hf3=new A.q(-8,24,0)
B.hf4=new A.q(-8,25,0)
B.hf5=new A.q(-8,42,-5)
B.hf6=new A.q(-8,-28,104)
B.hf7=new A.q(-8,-39,96)
B.hf9=new A.q(0,0.35,0.78)
B.hfa=new A.q(0.6,6,14)
B.hfb=new A.q(-11.9,0,-8)
B.hfc=new A.q(32,3,0.5)
B.hfd=new A.q(38,1.4,12)
B.hfe=new A.q(25,0.5,66)
B.hff=new A.q(-8.4,1.9,-7.2)
B.hfg=new A.q(1.6,8,5)
B.hfh=new A.q(0.8,1.6,1.4)
B.hfj=new A.q(25,6,0.2)
B.hfk=new A.q(14,0.3,14)
B.aY1=new A.q(1.25,1,0.1)
B.hfl=new A.q(11.2,0,-6)
B.hfm=new A.q(-146.4,62,172)
B.hfn=new A.q(0.4,7,9)
B.hfo=new A.q(1.2,1.1,0.8)
B.hfq=new A.q(150,49,1.2)
B.hfr=new A.q(41.5,11,-12)
B.hfs=new A.q(62,0.2,42)
B.hft=new A.q(4.6,1.5,-3.6)
B.hfu=new A.q(0,-0.7,0.8)
B.hfv=new A.q(0,15.55,-3.6)
B.hfw=new A.q(0.6,9,9)
B.hfx=new A.q(8.9,1.9,0.9)
B.hfy=new A.q(42,84,1.2)
B.hfz=new A.q(-34.6,34,7)
B.hfA=new A.q(60,15,3.6)
B.aY2=new A.q(1.6,58,66)
B.hfB=new A.q(0,-1.55,-0.6)
B.hfC=new A.q(36.2,32.2,0.6)
B.hfD=new A.q(1.78,4.25,0.08)
B.hfE=new A.q(27,0.6,19)
B.hfF=new A.q(1.4,52,96)
B.hfG=new A.q(0,5.5,-0.25)
B.hfH=new A.q(28,2.5,26)
B.hfI=new A.q(0,0.7,0)
B.hfJ=new A.q(-1.2,-1.6,2.2)
B.hfK=new A.q(11,25,0.3)
B.hfL=new A.q(17,83,77.2)
B.aY3=new A.q(-12,14,19.4)
B.aY4=new A.q(13,8.6,-9.5)
B.aY5=new A.q(0.05,0.12,0.03)
B.aY6=new A.q(8.2,0.95,-6.7)
B.hfM=new A.q(0,-2.5,0)
B.hfN=new A.q(40,1.2,22)
B.hfO=new A.q(26,1.2,1.2)
B.hfP=new A.q(0.7,1.5,-7.2)
B.hfQ=new A.q(0,-1,4.9)
B.hfR=new A.q(0,0.35,0.18)
B.hfS=new A.q(62,2.4,8)
B.hfT=new A.q(-1.6,11,6)
B.hfU=new A.q(0.1,0,0)
B.hfV=new A.q(0.32,0,0.5)
B.hfW=new A.q(2200,0.4,720)
B.hfX=new A.q(1.6,11,6)
B.hfY=new A.q(-10,0.5,150)
B.hg_=new A.q(-60,50,1.8)
B.hg0=new A.q(-0.9,0,4.4)
B.hg1=new A.q(-6.5,7.2,-3)
B.hg3=new A.q(300,6,1.6)
B.hg4=new A.q(76,64,0.6)
B.hg5=new A.q(7.1,18,-3)
B.hg7=new A.q(0.45,1.3,0.9)
B.hg8=new A.q(74,1.2,90)
B.hg9=new A.q(15.5,2.6,0)
B.hgb=new A.q(-8,-47.8,70)
B.hgc=new A.q(14,1.5,3.5)
B.hgd=new A.q(0,0,0.5)
B.aY7=new A.q(17,24,0.3)
B.hge=new A.q(5.2,3.9,-7.82)
B.hgf=new A.q(0,0.7,2.4)
B.hgg=new A.q(0,0.3,0)
B.aY8=new A.q(2.3,7,0.5)
B.hgi=new A.q(0,66,1.8)
B.aY9=new A.q(-13,8.6,9.5)
B.hgl=new A.q(0.6,28,52)
B.hgm=new A.q(6.5,6,14)
B.hgn=new A.q(0,4.2,2.4)
B.hgo=new A.q(0,-1.99,0.14)
B.hgp=new A.q(0.4,36,34)
B.hgr=new A.q(4.6,-2,1.2)
B.hgs=new A.q(0,14,19.3)
B.aYa=new A.q(0,0,-2.4)
B.hgt=new A.q(1.3,0.8,0.9)
B.hgu=new A.q(-36.2,60,38)
B.hgv=new A.q(110,18,0.6)
B.hgw=new A.q(0,-1.78,0.52)
B.hgx=new A.q(0.12,0.1,0.03)
B.hgy=new A.q(9.8,5,-7.58)
B.hgz=new A.q(14,1.5,5)
B.hgA=new A.q(0.95,2.3,0.5)
B.aYb=new A.q(0.5,1.4,2)
B.hgB=new A.q(3.5,0.15,-7.2)
B.aYc=new A.q(64,2,1.2)
B.hgC=new A.q(1.2,26.4,20)
B.hgD=new A.q(-3.6,4,-7.82)
B.hgE=new A.q(-3,37,-4.9)
B.hgF=new A.q(0.3,2,36)
B.hgI=new A.q(24,0.8,6.5)
B.hgJ=new A.q(-28,76,38.3)
B.hgL=new A.q(22,0.5,5)
B.hgM=new A.q(9,10,0.6)
B.hgN=new A.q(0,22,2.1)
B.hgQ=new A.q(0,56,0.5)
B.hgR=new A.q(150,1.2,70)
B.hgS=new A.q(0,-5.5,-3.4)
B.hgT=new A.q(58,104,31.7)
B.hgU=new A.q(100,52,2.4)
B.hgV=new A.q(2.1,0.4,0.5)
B.aYd=new A.q(0.4,29,31)
B.hgW=new A.q(0,0.8,-1.3)
B.hgX=new A.q(-19.5,-1,-1.5)
B.hgY=new A.q(80,0.5,60)
B.hgZ=new A.q(0,10.45,0)
B.hh_=new A.q(6.85,4,-3.2)
B.hh0=new A.q(52,58,0.6)
B.hh1=new A.q(0,14.4,0)
B.aYf=new A.q(0.12,3,1.9)
B.hh2=new A.q(0.06,0.62,0.8)
B.hh3=new A.q(0,18.5,0)
B.hh4=new A.q(0,1.18,0.45)
B.hh5=new A.q(50,0.6,-50)
B.hh7=new A.q(9.55,5.7,-7.5)
B.hh9=new A.q(-400,80,-19.2)
B.hha=new A.q(0.8,2.4,0.3)
B.aYg=new A.q(0,0.7,2)
B.hhb=new A.q(3.5,26,15)
B.hhc=new A.q(0.95,0.62,1)
B.aYh=new A.q(0,24,40.2)
B.hhd=new A.q(0.8,1.1,1.2)
B.hhe=new A.q(0,51.5,20)
B.hhf=new A.q(0,0.3,4.3)
B.hhg=new A.q(-20,0.5,145)
B.hhh=new A.q(1.15,1.18,0.45)
B.hhi=new A.q(2.4,14,8)
B.hhj=new A.q(0,47.25,-2.25)
B.hhk=new A.q(-8,31.5,-6)
B.hhl=new A.q(0.5,0.5,0.04)
B.hhm=new A.q(12.5,39,0.6)
B.hhn=new A.q(140,62,3.6)
B.hho=new A.q(0,3,0.9)
B.hhp=new A.q(0,-1.45,0.32)
B.hhq=new A.q(9,0.7,15)
B.hhr=new A.q(3,36,10.6)
B.hhs=new A.q(25,10,0.2)
B.hhu=new A.q(0.14,8,0.3)
B.hhv=new A.q(3,0.6,0)
B.hhw=new A.q(11,15,0.3)
B.hhz=new A.q(0.6,0.12,0.03)
B.hhA=new A.q(-10.7,1.2,-6.4)
B.hhB=new A.q(-52,140,-60.6)
B.hhC=new A.q(-71.2,46.6,55)
B.hhD=new A.q(5,4.5,3)
B.hhE=new A.q(120,36,1.4)
B.hhF=new A.q(0,3.9,2.5)
B.aYi=new A.q(0,3.7,2.6)
B.hhI=new C.bR("phase-chip",x.W)
B.hhJ=new C.bR("room-tray",x.W)
B.hhL=new C.bR("screw-row",x.W)
B.hhN=new C.bR("lessons-search-field",x.W)
B.hhS=new C.bR("lessons-search",x.W)
B.hhY=new C.bR("tray-show-all",x.W)
B.hi8=new C.bR("turned-page-rotate",x.W)
B.hii=new C.bR("work-row",x.W)
B.hiF=new A.axQ("bonded","The ground strap is still on the terminal block, so the neutral is joined to the metal frame of the appliance. On a 4-wire cord the strap must come off: the frame is grounded by the green wire, and the neutral carries current.",!0,!1,!1,"none","Take the metal ground strap off the terminal block.")
B.VM=new A.FT(0,"hot")
B.VN=new A.FT(1,"neutral")
B.VO=new A.FT(2,"ground")
B.aYB=new A.FT(3,"unknown")
B.ePg=new C.z(-20,46)
B.hlL=new A.Az(B.ePg,0,2.4,"Having the drink",!0,!1,!1,"")
B.exz=new C.z(34,62)
B.hlM=new A.Az(B.exz,3.141592653589793,2.2,"Picking up the remote",!1,!0,!1,"")
B.hlU=new A.aBP(null)
B.hx3=new A.f_H(0,"material")})();(function staticFields(){$.dS=0
$.ajq=!1
$.ajr=!0
$.heX=!1
$.h25=C.U(x.N,C.at("MD"))
$.h24=C.U(x.N,C.at("aB<MD?>"))
$.h23=C.aX(x.N)
$.i8L=C.U(x.N,C.at("ai<+(q,q)>"))
$.i8J=C.U(x.N,x.dg)
$.huN=C.U(x.N,C.at("iN"))
$.a4i=null
$.Ec=null
$.Wa=null
$.hl6=null
$.ftH=C.U(x.S,C.at("ai<kq>"))
$.ahK="xbot"})();(function lazyInitializers(){var w=a.lazyFinal
w($,"it5","hCU",()=>C.bPL())
w($,"ith","hdh",()=>C.bPL())
w($,"io_","hAp",()=>new A.aTK($.ax()))
w($,"ivF","bG_",()=>{var v,u,t=C.at("O<aTJ>"),s=C.a([],t)
for(v=0;v<2;++v){u=v*9
D.d.v(s,C.a([A.h1f(v,175,u),A.h1f(v,612,u+14),A.h1f(v,1013,u+7)],t))}return s})
w($,"ivg","h0q",()=>C.a([A.hq6(-80,80,400,565),A.hq6(-80,80,715,885)],C.at("O<bxx>")))
w($,"io0","aRM",()=>A.hGg())
w($,"ivE","hEj",()=>{var v=C.a([A.oo("Wire a standard 120 volt receptacle: black to brass, white to silver, bare copper to green.",B.RQ,B.drm,"outlet","",!0,B.ID,B.cYI,!1,"Wall outlet",new A.fDH()),A.oo("A single-pole switch breaks the hot wire to the light: two black wires go on the two brass screws.",B.dcY,B.des,"switch","",!0,B.ID,B.cX5,!1,"Light switch",new A.fDI()),A.oo("A GFCI protects you near water. Power comes in on LINE. The LOAD screws (covered with tape) feed other outlets.",B.RQ,B.dhp,"gfci","",!0,B.ID,B.dfV,!1,"GFCI outlet",new A.fDJ()),A.oo("Join the house wires to the fixture wires with wire nuts: black to black, white to white, ground to ground.",B.RQ,B.d7Z,"light","",!0,B.ID,B.dt3,!1,"Ceiling light",new A.fDK()),A.oo("A fan hangs from a strong fan-rated box. Join black, white and ground with wire nuts, then fasten the canopy.",B.RQ,B.dfh,"fan","",!0,B.ID,B.d3T,!1,"Ceiling fan",new A.fDL())],C.at("O<Ms>"))
D.d.v(v,$.h0w())
return v})
w($,"ivG","h0w",()=>{var v="switch",u="outlet",t=C.a([A.oo("Breaks BOTH hot legs of a 240 volt circuit at once: water heaters and baseboard heat.",B.dw_,B.c6R,"switch2p",v,!0,B.dys,B.d8a,!0,"Double-pole switch (240 V)",new A.fDM()),A.oo("One light, two switches. One COMMON screw and two TRAVELER screws; it pairs with a second three-way.",B.dph,B.cYr,"switch3",v,!0,B.dyJ,B.dfY,!0,"Three-way switch",new A.fDN()),A.oo("Sits in the middle of two three-way switches: two traveler wires in on one side, two out on the other.",B.duq,B.diS,"switch4",v,!0,B.dyt,B.do5,!0,"Four-way switch",new A.fDO()),A.oo("Needs a NEUTRAL wire in the box as well: hot in, hot out to the light, neutral and ground.",B.d2B,B.d5w,"switchsmart",v,!0,B.dyK,B.d2T,!0,"Smart, motion or timer switch",new A.fDP()),A.oo("Two switches in one device: one hot feed is split between them, and two separate lights come out.",B.cLj,B.dmh,"switchcombo",v,!0,B.dAs,B.cyo,!0,"Combination (double) switch",new A.fDQ()),A.oo("The tab between the brass screws is broken off: the top half is switched, the bottom half is always on.",B.dfR,B.cxN,"split",u,!0,B.dyL,B.dlc,!0,"Split (half-switched) outlet",new A.fDR()),A.oo("Two hots, a neutral and a ground: the dryer 14-30, and the range and car charger 14-50.",B.a5s,B.d1e,"v240four",u,!0,B.a6_,B.cPH,!0,"4-wire 240 V outlet (dryer, range, EV)",new A.fDS()),A.oo("Two hots and a neutral, with no separate ground: the old 10-30 and 10-50, from before 1996.",B.a4A,B.duW,"v240three",u,!1,B.a66,B.du7,!0,"3-wire 240 V outlet (old dryer or range)",new A.fDT()),A.oo("Two hots and a ground, and no neutral at all: the 6-series outlets.",B.dsJ,B.dcL,"v240only",u,!0,B.dyZ,B.drs,!0,"240 V only outlet (window AC, welder)",new A.fDU()),A.oo("Hot and neutral as usual, but the ground goes on its own wire straight back to the panel: shops and offices.",B.duK,B.ddR,"isolated",u,!0,B.dzS,B.d9i,!0,"Isolated-ground outlet",new A.fDV())],C.at("O<Ms>"))
D.d.v(t,$.hEi())
return t})
w($,"ivB","hEi",()=>C.a([A.oo("The dryer outlet of every new house: 30 amp, 240 volts. Two hots (X, Y), a neutral (W) and a separate ground (G).",B.a5s,B.aAZ,"dryer4","nema1430",!0,B.a6_,B.dln,!0,"Dryer outlet, 4-wire (NEMA 14-30)",new A.fDA()),A.oo("The dryer outlet of older houses (before 1996): 30 amp, 240 volts. Two hots and a neutral that also grounds the dryer. No separate ground.",B.a4A,B.aBu,"dryer3","nema1030",!1,B.a66,B.cTv,!0,"Dryer outlet, 3-wire (NEMA 10-30)",new A.fDB()),A.oo("The electric stove outlet of every new house: 50 amp, 240 volts. Two hots (X, Y), a neutral (W) and a separate ground (G). Also used for car chargers.",B.a5s,B.aAZ,"range4","nema1450",!0,B.a6_,B.diw,!0,"Range outlet, 4-wire (NEMA 14-50)",new A.fDC()),A.oo("The electric stove outlet of older houses (before 1996): 50 amp, 240 volts. Two hots and a neutral that also grounds the range. No separate ground.",B.a4A,B.aBu,"range3","nema1050",!1,B.a66,B.diu,!0,"Range outlet, 3-wire (NEMA 10-50)",new A.fDD()),A.oo("A dedicated 120 volt, 20 amp outlet for the washer, with a T-shaped neutral slot. Near water, so it needs GFCI protection.",B.dmu,B.d1g,"washer","nema520",!0,B.dzR,B.dgr,!0,"Washing machine outlet (NEMA 5-20)",new A.fDE()),A.oo("At the back of the appliance: black to the left terminal, white (neutral) to the middle one, red to the right one. The ground strap STAYS: it joins the neutral to the frame.",B.cYk,B.d6w,"cord3","terminal3",!1,B.dzf,B.dqH,!0,"Dryer or range cord, 3-wire hookup",new A.fDF()),A.oo("At the back of the appliance: REMOVE the ground strap first, then black left, white (neutral) middle, red right, and the green ground wire to the frame.",B.drk,B.d34,"cord4","terminal4",!0,B.dyQ,B.dan,!0,"Dryer or range cord, 4-wire hookup",new A.fDG())],C.at("O<Ms>")))
w($,"ivR","Hf",()=>{var v,u=C.a([],x.n)
for(v=0;v<10;++v)u.push(-72+16*v)
return u})})()};
(a=>{a["7DAzDmK8UUjQG9qlxvRCmXKZps4="]=a.current})($__dart_deferred_initializers__);