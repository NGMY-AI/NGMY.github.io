((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,C,D,A4,A5,G,P,H,A6,A7,Q,A8,A9,Aa,L,R,A_,Ab,T,Ac,U,A0,Ad,V,W,Ae,X,Af,A1,Y,A2,Ag,Ah,M,S,A={eYN:function eYN(d,e){this.a=d
this.b=e},a9S:function a9S(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.at=g
_.CW=h
_.a=i
_.$ti=j},aej:function aej(d,e){var _=this
_.d=null
_.e=$
_.Gc$=d
_.c=_.a=null
_.$ti=e},bpu:function bpu(d){this.a=d},aNR:function aNR(){},
o3(d,e,f){var w=d.a,v=d.b,u=d.c
return new A.q(w+(e.a-w)*f,v+(e.b-v)*f,u+(e.c-u)*f)},
vy(d,e){var w=Math.cos(e),v=Math.sin(e),u=d.a,t=d.c
return new A.q(u*w+t*v,d.b,-u*v+t*w)},
ny(d,e,f,g){var w,v,u,t,s,r,q,p,o=new A.fYa(Math.cos(e),Math.sin(e)),n=new A.fY8(f),m=new A.fY9(n,e,o,g),l=new A.fY7(n,e,o),k=C.a([],x.z)
for(w=d.length,v=x.o,u=0;u<d.length;d.length===w||(0,C.M)(d),++u){t=d[u]
s=C.a([],v)
for(r=t.a,q=r.length,p=0;p<r.length;r.length===q||(0,C.M)(r),++p)s.push(m.$1(r[p]))
k.push(new A.ko(s,l.$1(t.b),t.c,t.d,t.e,t.f,t.r,t.w,t.x,t.y,t.z))}return k},
Ha(d,e,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
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
l=Math.min(e,n.guU()*0.5)
k=Math.min(e,m.guU()*0.5)
j=n.gmR(0)
i=new A.q(q-j.a*l,p-j.b*l,o-j.c*l)
j=m.gmR(0)
h=new A.q(q+j.a*k,p+j.b*k,o+j.c*k)
for(g=0;g<=a0;++g){f=g/a0
w.push(A.o3(A.o3(i,s,f),A.o3(s,h,f),f))}}w.push(D.d.gak(d))
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
a2=new A.fXX(a0,a1,a1*a0)
w.push(new A.q(a2.$4(t,p,n,m),a2.$4(l,k,j,i),a2.$4(h,g,f,e)))}}w.push(D.d.gak(a3))
return w},
hDA(){if($.hcH)return
$.hcH=!0
C.az().bN(new A.bJz(),x.P).eQ(new A.bJA())},
hcI(){C.az().bN(new A.bJB(),x.P).eQ(new A.bJC())},
hYs(d){var w,v,u,t,s,r,q,p,o,n
for(w=d.length,v=!0,u=!0,t=0;t<w;++t)if(d[t].c>=0.5)u=!1
else v=!1
if(v)return d
if(u)return B.rH
s=C.a([],x.o)
for(r=0;w=d.length,r<w;){q=d[r];++r
p=d[r%w]
w=q.c
o=w>=0.5
n=p.c
if(o)s.push(q)
if(o!==n>=0.5)s.push(A.o3(q,p,(0.5-w)/(n-w)))}return s},
h6A(a2,a3,a4){var w,v,u,t,s,r,q,p=J.a5(a2),o=p.h(a2,0).a,n=p.h(a2,0).b,m=p.h(a2,1).a,l=p.h(a2,1).b,k=p.h(a2,2).a,j=p.h(a2,2).b,i=p.h(a2,3).a,h=p.h(a2,3).b,g=m-k,f=i-k,e=o-m+k-i,d=l-j,a0=h-j,a1=n-l+j-h
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
hZk(d,e,f,g){var w,v=e.d,u=e.e,t=A.h6A(f,v,u)
if(t==null)return
w=d.a
J.bm(w.save())
d.av(0,t.a)
w.clipRect(C.bH(new C.a3(0,0,v,0+u)),$.ms()[1],!0)
e.c.$3(d,new C.av(v,u),g)
w.restore()},
hZl(d,e,f,g,h,i){var w,v,u,t,s,r,q,p,o,n,m,l,k=e.d,j=e.e
$.S()
w=new C.p0()
e.c.$3(C.z9(w,null),new C.av(k,j),i)
v=w.nf()
u=k/g
t=j/h
for(s=f.length,r=d.a,q=0+u,p=0+t,o=0;o<f.length;f.length===s||(0,C.M)(f),++o){n=f[o]
m=A.h6A(n.c,u,t)
if(m==null)continue
J.bm(r.save())
l=m.a
r.concat(C.fY2(C.He(l)))
r.clipRect(C.bH(new C.a3(0,0,q,p)),$.ms()[1],!0)
r.translate(-n.a*u,-n.b*t)
n=v.b
n===$&&C.c()
n=n.a
n===$&&C.c()
n=n.a
n.toString
r.drawPicture(n)
r.restore()}v.q()},
h3k(d,e,f,g,h,i,j,k,l,m){return new A.avC(l,e,h,k,i,f,g,d,m,j,null)},
hXG(a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=$.hb1()
C.E6(a4)
w=a3.a.get(a4)
if(w!=null)return w
v=new A.PX(!0,C.a([],x.z),C.a([],x.t))
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
continue}a1=t.c4(0,((D.k.bh(m/60)+4096)*8192+(D.k.bh(k/60)+4096))*8192+(D.k.bh(i/60)+4096),new A.fiF())
a1.rX(0,p,q)
if(u)s.n(0,a3,a1)}a3=C.a([v],x.f5)
D.d.v(a3,new C.bc(t,t.$ti.k("bc<2>")))
a2=new A.cLt(a3)
$.hb1().n(0,a4,a2)
return a2},
q:function q(d,e,f){this.a=d
this.b=e
this.c=f},
ko:function ko(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
tP:function tP(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fQ:function fQ(d,e,f,g,h,i,j,k,l){var _=this
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
c_S:function c_S(d,e){this.a=d
this.b=e},
c_T:function c_T(d){this.a=d},
c_R:function c_R(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
c_U:function c_U(d,e,f){this.a=d
this.b=e
this.c=f},
c_Q:function c_Q(d,e){this.a=d
this.b=e},
c_V:function c_V(d,e,f){this.a=d
this.b=e
this.c=f},
fYa:function fYa(d,e){this.a=d
this.b=e},
fY8:function fY8(d){this.a=d},
fY9:function fY9(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fY7:function fY7(d,e,f){this.a=d
this.b=e
this.c=f},
fXX:function fXX(d,e,f){this.a=d
this.b=e
this.c=f},
xh:function xh(d,e,f,g,h){var _=this
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
bJz:function bJz(){},
bJA:function bJA(){},
bJB:function bJB(){},
bJC:function bJC(){},
bJE:function bJE(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bJD:function bJD(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bJy:function bJy(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bJx:function bJx(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bUQ:function bUQ(d){this.a=d},
b6w:function b6w(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
ctF:function ctF(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ctG:function ctG(d,e){this.a=d
this.b=e},
ctE:function ctE(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0,a1,a2,a3,a4,a5,a6){var _=this
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
cty:function cty(){},
ctz:function ctz(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
ctx:function ctx(d){this.a=d},
ctA:function ctA(){},
ctB:function ctB(d,e,f){this.a=d
this.b=e
this.c=f},
ctC:function ctC(){},
ctD:function ctD(){},
cDw:function cDw(d,e){this.a=d
this.b=e},
G6:function G6(d,e,f,g,h,i,j,k,l){var _=this
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
avC:function avC(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
bs3:function bs3(d,e,f,g,h,i){var _=this
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
f1g:function f1g(d){this.a=d},
f1f:function f1f(d){this.a=d},
f1c:function f1c(d){this.a=d},
f1d:function f1d(d){this.a=d},
f1e:function f1e(d){this.a=d},
f1a:function f1a(d){this.a=d},
f1b:function f1b(d,e){this.a=d
this.b=e},
PX:function PX(d,e,f){var _=this
_.a=d
_.b=e
_.c=f
_.d=1/0
_.e=-1/0
_.f=1/0
_.r=-1/0
_.w=1/0
_.x=-1/0},
cLt:function cLt(d){this.a=d},
fiF:function fiF(){},
aO_:function aO_(){},
bTK(d){var w,v,u=$.h_T.h(0,d)
if(u!=null)return C.f8(u,x.c)
w=B.S4.h(0,d)
if(w==null)return C.f8(null,x.c)
v=$.h_S.h(0,d)
if(v==null){v=new A.bTL(w,d).$0()
$.h_S.n(0,d,v)}return v},
aWh(d){var w=0,v=C.j(x.H),u
var $async$aWh=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:w=2
return C.b(A.bTK(d),$async$aWh)
case 2:u=J.aW(B.S4.gev(B.S4))
case 3:if(!u.C()){w=4
break}w=5
return C.b(A.bTK(u.gT(u)),$async$aWh)
case 5:w=3
break
case 4:return C.h(null,v)}})
return C.i($async$aWh,v)},
hGG(d){var w,v,u=new Float64Array(d*16)
for(w=0;w<d;++w){v=w*16
u[v+15]=1
u[v+10]=1
u[v+5]=1
u[v]=1}return u},
hef(d,e,f){var w,v,u,t
if(d>e){w=d
v=e}else{w=e
v=d}if(w>f){u=w
w=f}else u=f
if(v>w){t=w
w=v
v=t}return(v*65536+w)*65536+u},
hGH(d,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=d.c,g=d.b===1,f=g?4:3,e=h.length
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
heg(d,a0,a1,a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
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
i66(d,e){var w=D.o.aD(d,16)&255,v=D.o.aD(d,8)&255,u=d&255,t=0.35+(0.299*w+0.587*v+0.114*u)/255,s=new A.fwj()
return C.a_(255,s.$2(w,e.gb3(e)*255*t),s.$2(v,e.gbc()*255*t),s.$2(u,e.gb9(e)*255*t))},
bce:function bce(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
bcz:function bcz(d,e){this.b=d
this.c=e},
bhG:function bhG(d,e,f){this.a=d
this.b=e
this.c=f},
dps:function dps(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=$},
MH:function MH(d,e,f,g,h){var _=this
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
bTL:function bTL(d,e){this.a=d
this.b=e},
bTC:function bTC(){},
bTw:function bTw(d,e){this.a=d
this.b=e},
bTv:function bTv(){},
bTE:function bTE(d,e,f){this.a=d
this.b=e
this.c=f},
bTF:function bTF(d){this.a=d},
bTG:function bTG(d){this.a=d},
bTD:function bTD(d,e){this.a=d
this.b=e},
bTA:function bTA(d){this.a=d},
bTB:function bTB(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
bTJ:function bTJ(d){this.a=d},
bTH:function bTH(){},
bTI:function bTI(d){this.a=d},
bTM:function bTM(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
bTx:function bTx(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
bTz:function bTz(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bTy:function bTy(d,e){this.a=d
this.b=e},
fwj:function fwj(){},
dv_:function dv_(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
djE:function djE(d,e){this.a=d
this.b=e},
hDg(){var w,v=J.dY(6,x.ff)
for(w=0;w<6;++w)v[w]=new A.aT8()
return new A.bHS(v)},
afZ(d){return A.hYU(d)},
hYU(d){var w=0,v=C.j(x.eT),u,t=2,s=[],r,q,p,o,n
var $async$afZ=C.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:if(d==null){u=null
w=1
break}t=4
w=7
return C.b(C.fBo(d,null),$async$afZ)
case 7:r=f
n=J
w=8
return C.b(r.lL(),$async$afZ)
case 8:q=n.a3k(f)
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
return C.i($async$afZ,v)},
hwN(a5,a6,a7,a8,a9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
if(a8.a){w=a7/8
if(a9===0){v=D.k.bh(w)
A.nf(a5,a6,a7,D.o.F(v,2)===0?0:1+D.o.ao(v,2))}else A.nf(a5,a6,a7,a9+1+D.k.bh(w))
return}u=B.a5j[a8.e]
w=a6.a
t=a6.b
s=0+t
r=new C.a3(0,0,0+w,s)
$.S()
q=C.I()
q.sam(new C.a9(D.a5,D.a8,D.x,C.a([u.b,u.c],x.O),null,null).aB(0,r))
a5.aP(r,q)
q=t*0.04
p=r.cr(-q)
o=C.I()
o.b=D.ab
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
g=C.bL(new C.t(i/2,h/2),o/v,j/v)
j=a5.a
J.bm(j.save())
o=t*0.05
j.clipRRect(C.el(C.bu(k,new C.aP(o,o))),$.nz(),!0)
o=C.I()
o.Q=D.cc
a5.oz(l,g,k,o)
j.restore()
f=p+m*0.8}else f=m
e=a8.w
if(e==null)e=$.Wh
p=t*0.3
o=f+p
p=m+p
d=new C.a3(f,m,o,p)
j=d.gbL()
o-=f
i=C.I()
i.r=B.F4.gp(0)
a5.ad(j,o/2,i)
if(e!=null){j=e.c
i=e.d
v=Math.min(o*0.8/j,(p-m)*0.8/i)
o=C.bL(d.gbL(),i*v,j*v)
h=C.I()
h.Q=D.cc
a5.oz(e,new C.a3(0,0,j,i),o,h)}o=new A.fP3()
a0=w-f-m
j=u.d
a1=o.$4(a8.b,t*0.17,j,a0)
a1.a3(a5,new C.t(f,p+q))
a2=o.$5$w(a8.c,t*0.09,n,a0,D.Q)
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
j.clipRect(C.bH(r),$.ms()[1],!0)
t=C.I()
t.r=D.c.j(0.1).gp(0)
a5.aP(new C.a3(a4,0,a4+w*0.1,s),t)
j.restore()},
i7p(d,e){var w,v,u,t,s=d.w
if(s.length===0){s=d.e
w=d.r
return new C.cw([-s/2,s/2,w+d.f,w])}v=s[e]
s=v.e
u=d.e*s
t=d.r+v.d
return new C.cw([-u/2,u/2,t+d.f*s,t])},
bBE(d,e,f,g){var w,v,u,t,s,r,q,p,o=new C.a3(0,0,0+e.a,0+e.b)
$.S()
w=C.I()
w.r=B.bib.gp(0)
d.aP(o,w)
v=o.cr(-(e.gdC()*0.06))
w=d.a
J.bm(w.save())
w.clipRect(C.bH(v),$.ms()[1],!0)
u=v.a
t=v.b
w.translate(u,t)
u=v.c-u
t=v.d-t
if((g&1)===0){s=0+u
r=0+t
q=C.I()
q.sam(B.c5n.aB(0,new C.a3(0,0,s,r)))
d.aP(new C.a3(0,0,s,r),q)
p=t*0.82
J.bm(w.save())
w.translate((u-p)/2,(t-p)/2)
A.hwS(d,new C.av(p,p),f)
w.restore()}else A.nf(d,new C.av(u,t),f,g)
w.restore()},
i2u(d,e,f){var w,v,u,t,s=e.a,r=e.b
$.S()
w=C.I()
w.r=B.bqz.gp(0)
d.aP(new C.a3(0,0,0+s,0+r),w)
v=C.I()
v.r=K.ahf.gp(0)
w=s*0.12
u=r*0.07
t=w+s*0.76
d.aP(new C.a3(w,u,t,u+r*0.38),v)
u=r*0.52
d.aP(new C.a3(w,u,t,u+r*0.4),v)
u=C.I()
u.r=F.fz.gp(0)
d.ad(new C.t(s*0.82,r*0.5),s*0.05,u)},
h7g(d9,e0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6=x.z,d7=C.a([],d6),d8=new A.fk(d7)
d8.f=0
d8.GD(B.hbE,B.h14,B.h13,B.hbD,B.bka,B.eb)
d8.f=1
d8.GD(B.h5Y,B.h3L,B.hd8,B.h5s,B.Mm,B.eb)
for(w=-2100;w<2100;w+=90){v=w+45
d8.GD(new A.q(w,0.8,637),new A.q(v,0.8,637),new A.q(v,0.8,643),new A.q(w,0.8,643),K.M0,B.eb)}d8.f=2
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
for(h=e0.b,g=x.o,f=-o,e=f-0.8,d=p==="highway",a0=f/2,f=p!=="neon",a1=a0-0.2,a2=p==="screen",a3=s-16,a4=(14+s-7)/2,a5=s-21,a6=s-7,a7=0;a7<r;++a7){a8=q?v[a7]:B.acq
a9=a8.e
b0=u*a9
b1=t*a9
b2=new A.fxI(a8)
b3=C.a([],d6)
b4=new A.fk(b3)
b4.f=l
b5=C.a([],d6)
b6=new A.fk(b5)
b6.f=l
b7=A.i7p(d9,a7).a
b8=b7[0]
b9=b7[1]
c0=b7[2]
c1=b7[3]
c2=(b8+b9)/2
c3=(c0+c1)/2
b7=b2.$1(new A.q(c2,c3,a1))
c4=!f||a2?D.av:D.cq
c5=a8.c
b4.wp(b7,new A.q(b0+16,b1+16,o),c4,0.2,c5)
c6=7*Math.max(1,a9*0.8)
c4=b0+14
b6.wp(b2.$1(new A.q(c2,c0+3,3)),new A.q(c4,c6,8),n,0.4,c5)
b6.wp(b2.$1(new A.q(c2,c1-3,3)),new A.q(c4,c6,8),n,0.4,c5)
b7=b1+14
b6.wp(b2.$1(new A.q(b8-3,c3,3)),new A.q(c6,b7,8),n,0.4,c5)
b6.wp(b2.$1(new A.q(b9+3,c3,3)),new A.q(c6,b7,8),n,0.4,c5)
D.d.v(d7,b3)
D.d.v(d7,b5)
b5=C.a([],d6)
c7=new A.fk(b5)
c8=Math.max(6,b0*0.018)
c9=new A.fxJ(i,l)
switch(q?"sep":p){case"tower":c7.dN(new A.q(0,0,a0),new A.q(0,a6,a0),c8*1.9,D.hg,12)
c7.dN(new A.q(0,0,a0),new A.q(0,14,a0),c8*2.8,D.av,12)
break
case"screen":c7.aO(new A.q(0,7,-10),new A.q(b0*0.6,14,70),D.av)
c7.aO(new A.q(0,a4,a0),new A.q(60,a5,14),D.hg)
break
case"roof":c7.n9(B.fXY,B.h30,B.bgd,0.1,4)
c7.n9(B.fYC,B.h36,D.dv,0.15,4)
c7.hp(B.fYh,B.h35,D.dv,4)
c7.n9(B.hbS,B.h0d,B.bht,0.1,2)
c7.hp(B.hbR,B.h0p,D.dv,2)
c7.aO(B.h0A,B.h1U,B.nV)
c7.aO(B.fXN,B.fZY,D.e7)
c9.$6$px(B.h9W,0,210,126,new A.fxB(),360)
c9.$6$px(B.haX,0,210,126,new A.fxC(),360)
c9.$6$px(B.h6G,0,72,116,A.igH(),140)
c9.$6$px(B.hen,0,130,80,new A.fxD(),300)
for(d0=0;d0<3;++d0){d1=-60-d0*90
c9.$6$px(new A.q(310.8,140,d1),1.5707963267948966,80,64,new A.fxE(d0),240)
c9.$6$px(new A.q(310.8,55,d1),1.5707963267948966,60,60,A.h9H(),200)}for(d0=0;d0<2;++d0){d1=-65-d0*110
c9.$6$px(new A.q(-490.8,95,d1),-1.5707963267948966,90,60,new A.fxF(d0),240)
c9.$6$px(new A.q(-490.8,40,d1),-1.5707963267948966,50,50,A.h9H(),180)}c9.$6$px(new A.q(0,100,-285.8),3.141592653589793,580,170,A.hwE(),900)
break
case"gate":for(b3=b0/2+25,b7=s+b1,c4=b7+26,c5=c8*1.6,d2=0;d2<2;++d2){d3=F.hy[d2]*b3
c7.dN(new A.q(d3,0,a0),new A.q(d3,c4,a0),c5,D.hg,12)}c7.aZ(new A.q(0,b7+17,a0),new A.q(b0+80,18,22),D.hg,0.2)
break
default:for(b3=s+a8.d-7,d2=0;d2<2;++d2){b7=F.hy[d2]*b0*0.3
c7.dN(b2.$1(new A.q(b7,0,a0)),b2.$1(new A.q(b7,b3,a0)),c8,D.hg,10)}if(d)c7.aO(new A.q(0,a3,14),new A.q(c4,3,24),D.hg)}D.d.v(d7,b5)
d4=h[a7]
i.push(new A.fQ(C.a([b2.$1(new A.q(b8,c0,0.8)),b2.$1(new A.q(b9,c0,0.8)),b2.$1(new A.q(b9,c1,0.8)),b2.$1(new A.q(b8,c1,0.8))],g),0,new A.fxG(d4,a7),k,j,60,l,0,!1))
i.push(new A.fQ(C.a([b2.$1(new A.q(b9,c0,e)),b2.$1(new A.q(b8,c0,e)),b2.$1(new A.q(b8,c1,e)),b2.$1(new A.q(b9,c1,e))],g),0,new A.fxH(d4,a7),k,j,60,l,0,!1))}d6=C.a([],d6)
d5=new A.fk(d6)
for(d2=0;d2<9;++d2){v=B.d1G[d2]
w=v.a
d1=v.b
if(m&&d1>200)continue
d5.dN(new A.q(w,0,d1),new A.q(w,55,d1),7,B.q4,6)
d5.ed(new A.q(w,98,d1),46,E.Xu,3,6)}for(d2=0;d2<6;++d2){w=B.drk[d2]
d5.dN(new A.q(w,0,580),new A.q(w,90,580),3,D.hg,5)
d5.ed(new A.q(w,95,580),8,B.o6,3,6)}D.d.v(d7,d6)
return new A.tP(d7,B.S9,B.zo,i,null,6000)},
hp9(d){return d*d*(3-2*d)},
fjN(d,e,f,g,h){var w=new A.fjO(h)
return new A.q(w.$4(d.a,e.a,f.a,g.a),w.$4(d.b,e.b,f.b,g.b),w.$4(d.c,e.c,f.c,g.c))},
hq4(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=D.k.E(e,0,30)
if(f==null){w=C.a([],x.n)
for(v=J.a5(d),u=0;u<v.gL(d);++u)w.push(30*u/(v.gL(d)-1))
t=w}else t=f
w=J.a5(d)
v=J.a5(t)
s=0
for(;;){r=s+2
if(!(r<w.gL(d)&&v.h(t,s+1)<=m))break;++s}w=s+1
q=A.hp9(D.k.E((m-v.h(t,s))/(v.h(t,w)-v.h(t,s)),0,1))
v=new A.fnb(d)
p=s-1
o=A.fjN(v.$1(p).a,v.$1(s).a,v.$1(w).a,v.$1(r).a,q)
n=A.fjN(v.$1(p).b,v.$1(s).b,v.$1(w).b,v.$1(r).b,q)
r=Math.sin(m*1.3)
v=Math.sin(m*1.9)
w=Math.cos(m*1.1)
return new C.z(new A.q(o.a+r*3,Math.max(o.b+v*2.5,18),o.c+w*3),n)},
i6e(d){return $.i6d.c4(0,d.a,new A.fwp(d))},
hsw(d){return $.i6f.c4(0,d.a,new A.fwm(d))},
i7o(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=d.a
if(i==="scatter")return A.hq4(B.dfr,e,null)
if(d.w.length!==0)return A.hq4(A.hsw(d),e,A.i6e(d))
w=B.dx6.h(0,i)
if(w==null)w=B.aP_
v=B.cvr[w.a]
u=w.b?-1:1
t=new A.q(d.ga4q(0),d.r+d.gGP()/2,d.ga4r())
s=new A.fxt(t,u,d)
r=new A.fxu(t,u,d)
q=D.k.E(e,0,30)
i=v.length
p=0
for(;;){o=p+2
if(!(o<i&&v[p+1].a<=q))break;++p}i=v[p].a
n=p+1
m=A.hp9(D.k.E((q-i)/(v[n].a-i),0,1))
i=new A.fxv(v)
l=p-1
k=A.fjN(s.$1(i.$1(l)),s.$1(i.$1(p)),s.$1(i.$1(n)),s.$1(i.$1(o)),m)
j=A.fjN(r.$1(i.$1(l)),r.$1(i.$1(p)),r.$1(i.$1(n)),r.$1(i.$1(o)),m)
return new C.z(new A.q(k.a,Math.max(k.b,18),k.c),j)},
lD:function lD(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
r9:function r9(d,e,f,g,h,i,j,k,l,m){var _=this
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
bHU:function bHU(d){this.a=d},
Ht:function Ht(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
aT8:function aT8(){var _=this
_.a=!0
_.b="NEW GLOBAL MOVEMENT FOR YOUTH"
_.c="Videos, slides, blogs and books."
_.d="ngmy.org"
_.e=0
_.x=_.w=_.r=_.f=null},
bHS:function bHS(d){this.a="highway"
this.b=d},
bHT:function bHT(d){this.a=d},
fP3:function fP3(){},
fxI:function fxI(d){this.a=d},
fxJ:function fxJ(d,e){this.a=d
this.b=e},
fxK:function fxK(d,e){this.a=d
this.b=e},
fxB:function fxB(){},
fxC:function fxC(){},
fxD:function fxD(){},
fxE:function fxE(d){this.a=d},
fxF:function fxF(d){this.a=d},
fxG:function fxG(d,e){this.a=d
this.b=e},
fxH:function fxH(d,e){this.a=d
this.b=e},
hn:function hn(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
fjO:function fjO(d){this.a=d},
fnb:function fnb(d){this.a=d},
fwp:function fwp(d){this.a=d},
fwo:function fwo(){},
fwm:function fwm(d){this.a=d},
fwn:function fwn(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fxt:function fxt(d,e,f){this.a=d
this.b=e
this.c=f},
fxu:function fxu(d,e,f){this.a=d
this.b=e
this.c=f},
fxv:function fxv(d){this.a=d},
aoK:function aoK(d){this.a=d},
aoL:function aoL(d,e){var _=this
_.d=d
_.r=_.f=_.e=$
_.w=e
_.x=-1
_.y=!1
_.z=""
_.c=_.a=null},
c3T:function c3T(d){this.a=d},
c3R:function c3R(d){this.a=d},
c3Q:function c3Q(){},
c3E:function c3E(d){this.a=d},
c3K:function c3K(d,e){this.a=d
this.b=e},
c3S:function c3S(d){this.a=d},
c3H:function c3H(d,e){this.a=d
this.b=e},
c3G:function c3G(d){this.a=d},
c3e:function c3e(){},
c3F:function c3F(d){this.a=d},
c3J:function c3J(d){this.a=d},
c3I:function c3I(d,e,f){this.a=d
this.b=e
this.c=f},
c3D:function c3D(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
c3C:function c3C(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
c3z:function c3z(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
c3A:function c3A(d,e){this.a=d
this.b=e},
c3u:function c3u(d,e,f){this.a=d
this.b=e
this.c=f},
c3B:function c3B(d){this.a=d},
c3x:function c3x(d,e){this.a=d
this.b=e},
c3w:function c3w(){},
c3y:function c3y(d,e){this.a=d
this.b=e},
c3v:function c3v(){},
c3j:function c3j(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
c3i:function c3i(){},
c3k:function c3k(d){this.a=d},
c3l:function c3l(d){this.a=d},
c3m:function c3m(d){this.a=d},
c3n:function c3n(d,e){this.a=d
this.b=e},
c3o:function c3o(d,e,f){this.a=d
this.b=e
this.c=f},
c3p:function c3p(d,e){this.a=d
this.b=e},
c3q:function c3q(d,e,f){this.a=d
this.b=e
this.c=f},
c3r:function c3r(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
c3h:function c3h(){},
c3s:function c3s(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
c3f:function c3f(){},
c3g:function c3g(){},
c3t:function c3t(d){this.a=d},
c3N:function c3N(d){this.a=d},
c3O:function c3O(d){this.a=d},
c3M:function c3M(d){this.a=d},
c3P:function c3P(d){this.a=d},
c3L:function c3L(d){this.a=d},
h75(d,e,f,g){var w,v,u,t=null,s=e.r
s=s==null?t:D.k.V(s)
w=D.k.V(f)
v=e.b
v=v==null?t:v.l()
u=d+"|"+C.w(s)+"|"+w+"|"+C.w(v)
v=$.hss.h(0,u)
if(v==null){s=C.fv(t,t,g,t,C.cS(t,t,t,t,t,t,t,t,t,e,d),D.a3,D.bZ,t,D.dA,D.bW)
s.nZ(f)
$.hss.n(0,u,s)}else s=v
return s},
nf(a5,a6,a7,a8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4=D.o.F(a8,17)
if(a4===0){A.fPa(a5,a6,a7,0)
w=a6.a
v=(D.k.F(a7*0.35,1.6)-0.3)*w
u=a5.a
J.bm(u.save())
t=0+a6.b
u.clipRect(C.bH(new C.a3(0,0,0+w,t)),$.ms()[1],!0)
$.S()
s=C.I()
s.r=D.c.j(0.12).gp(0)
a5.aP(new C.a3(v,0,v+w*0.12,t),s)
u.restore()
return}if(a4>=8){I.S4(a5,a6,a4-8,a7)
return}r=B.cWN[a4-1]
w=a6.a
u=a6.b
q=new C.a3(0,0,0+w,0+u)
t=$.S()
s=C.I()
s.sam(new C.a9(D.ay,D.aE,D.x,C.a([r.c,r.d],x.O),a3,a3).aB(0,q))
a5.aP(q,s)
s=a5.a
J.bm(s.save())
s.clipRect(C.bH(q),$.ms()[1],!0)
p=C.I()
p.r=D.c.j(0.07).gp(0)
for(o=u*0.4,n=w*0.07,m=a7*w*0.05,l=w*2,k=w*0.4,j=x.g,t=t.r,i=-4;i<14;++i){v=D.k.F(i*w/7+m,l)-k
h=C.a([],j)
g=new C.aG(t,D.ah,a3,a3,h)
h.push(new C.aY(v,0))
h.push(new C.aq(v+n,0))
f=v-o
h.push(new C.aq(f+n,u))
h.push(new C.aq(f,u))
h.push(new C.bt())
e=p.G()
h=g.gbw().a.snapshot()
s.drawPath((g.e=new C.cm(h)).a,e)
e.delete()}t=Math.sin(a7*2)
n=C.I()
m=r.e
n.r=m.j(0.18).gp(0)
a5.ad(new C.t(w*0.88,u*0.3),u*(0.22+0.03*t),n)
s.restore()
s=w*0.06
A.h75(r.a,C.l(a3,a3,D.c,a3,a3,a3,a3,a3,a3,a3,a3,u*0.22,a3,a3,D.u,a3,a3,!0,a3,u*0.012,a3,a3,a3,a3,a3,a3),w*0.9,1).a3(a5,new C.t(s,u*0.2))
A.h75(r.b,C.l(a3,a3,m,a3,a3,a3,a3,a3,a3,a3,a3,u*0.1,a3,a3,D.Q,a3,a3,!0,a3,a3,a3,a3,a3,a3,a3,a3),w*0.8,2).a3(a5,new C.t(s,u*0.5))
d=$.Wh
m=u*0.76
if(d!=null){t=d.c
n=d.d
a0=Math.min((s+o-s)/t,(m+u*0.16-m)/n)
o=C.I()
o.Q=D.cc
a5.oz(d,new C.a3(0,0,t,n),new C.a3(s,m,s+t*a0,m+n*a0),o)}else{a1=C.fv(a3,a3,a3,a3,C.cS(a3,a3,a3,a3,a3,a3,a3,a3,a3,C.l(a3,a3,D.c,a3,a3,a3,a3,a3,a3,a3,a3,u*0.12,a3,a3,D.u,a3,a3,!0,a3,a3,a3,a3,a3,a3,a3,a3),"NGMY"),D.a3,D.bZ,a3,D.dA,D.bW)
a1.el()
a1.a3(a5,new C.t(s,m))}a2=A.h75("ngmy.org",C.l(a3,a3,D.ae,a3,a3,a3,a3,a3,a3,a3,a3,u*0.08,a3,a3,D.H,a3,a3,!0,a3,a3,a3,a3,a3,a3,a3,a3),400,1)
a2.a3(a5,new C.t(w-a2.b.c-w*0.05,u*0.82))},
FZ:function FZ(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
Le(d){return D.d.dK(B.R3,new A.fzZ(d),new A.fA_())},
yP(d){var w=B.hz.h(0,d.b),v=d.e*3.141592653589793/2,u=w.d/2+30
return new C.z(d.c+Math.sin(v)*u,d.d+Math.cos(v)*u)},
hEK(d){var w=C.a([],x.C),v=C.a([],x.fW),u=new C.e9()
u.d4(7)
w=new A.bMe(d,u,w,v)
w.bzc(d,7)
return w},
zd:function zd(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fzZ:function fzZ(d){this.a=d},
fA_:function fA_(){},
xm:function xm(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=null
_.w=_.r=!1
_.x=0},
aUh:function aUh(d,e,f,g,h,i,j){var _=this
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
a4u:function a4u(d,e,f,g,h,i,j,k){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.w=j
_.x=k},
akp:function akp(d,e,f){this.a=d
this.b=e
this.c=f},
bMe:function bMe(d,e,f,g){var _=this
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
bMg:function bMg(d){this.a=d},
bMi:function bMi(d,e){this.a=d
this.b=e},
bMj:function bMj(){},
bMf:function bMf(d,e){this.a=d
this.b=e},
bMk:function bMk(){},
bMh:function bMh(d,e,f){this.a=d
this.b=e
this.c=f},
hcN(d){var w=d.x
return C.bv(w.length,D.d.cH(w,0,new A.bKl()),D.h,D.h,D.h,D.h,D.h,D.h,D.h,D.h,D.h,D.h,D.h,D.h,D.h,D.h,D.h,D.h,D.h,D.h)},
ihT(d){var w,v,u
for(w=0,v=0;u=v+1,u<d.length;v=u)w+=Math.sqrt(Math.pow(d[u].a-d[v].a,2)+Math.pow(d[u].b-d[v].b,2))
return w},
ihZ(d,e){var w,v,u,t,s,r,q,p,o
for(w=e,v=0;u=v+1,u<d.length;v=u){t=d[u]
s=d[v]
r=t.a-s.a
q=t.b-s.b
p=Math.sqrt(r*r+q*q)
if(p<0.000001)continue
if(w<=p||v+2===d.length){o=D.k.E(w/p,0,1)
t=d[v]
return new C.bk(t.a+r*o,t.b+q*o,Math.atan2(r,q))}w-=p}return new C.bk(D.d.gak(d).a,D.d.gak(d).b,0)},
bKk:function bKk(d){var _=this
_.a=d
_.e=_.d=_.c=_.b=$
_.f=-1},
bKl:function bKl(){},
dk6:function dk6(d,e){this.a=d
this.b=e},
h0o(d,e,f){return new A.aYV(f,d,e,null)},
h7B(d){return D.k.dd((1-D.k.E(d,0,1))*12)},
aTE:function aTE(d){var _=this
_.b=_.a=1
_.d=_.c=0
_.e=1
_.f=!1
_.r=0
_.w=!1
_.P$=0
_.S$=d
_.bv$=_.bJ$=0},
aYV:function aYV(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
UE:function UE(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
c1u:function c1u(d){this.a=d},
rM:function rM(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
foe(d){var w=d.d-d.b-200
return new C.bqA([157.07963267948966,2*w+380+628.3185307179587,w,190])},
Lj(d,e){var w,v=A.foe(d).a,u=v[2],t=v[3],s=v[0]
v=v[1]
w=D.k.F(e,v)
if(w<0)w+=v
v=new A.fDi()
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
h_2(d,e,f){return new A.aTD(d,e,f)},
h7S(d,e){var w=D.k.F(e+d.c,28)
if(w<12)return 0
if(w<15)return 1
return 2},
hnQ(d,e,f,g){var w=x.n
w=new A.bxk(d,e,f,g,C.a([],w),C.a([],w))
w.bAi(d,e,f,g)
return w},
hDS(){var w,v=C.a([],x.n)
for(w=0;w<4;++w)v.push(B.km[w].r)
return new A.bKm(v,C.c1(4,0,!1,x.i),B.azU)},
i4M(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=C.a([],x.z)
for(w=d.length,v=e.a,u=e.b,t=e.c,s=x.o,r=0;r<d.length;d.length===w||(0,C.M)(d),++r){q=d[r]
p=C.a([],s)
for(o=q.a,n=o.length,m=0;m<o.length;o.length===n||(0,C.M)(o),++m){l=o[m]
p.push(new A.q(l.a*v,l.b*u,l.c*t))}k.push(new A.ko(p,q.b,q.c,q.d,q.e,q.f,q.r,q.w,q.x,q.y,q.z))}return k},
hXQ(){var w,v,u,t,s=new A.fk(C.a([],x.z))
s.r=!0
s.aZ(B.fYb,B.h_y,D.d7,0.3)
s.aZ(B.hc2,B.h_o,D.bN,0.2)
s.aZ(B.aaL,B.h_m,B.hW,0.6)
s.aZ(B.h6X,B.h03,B.hW,0.6)
s.aO(B.h62,B.h_A,D.bG)
for(w=0;w<2;++w)s.aO(new A.q(75.5,9,B.a52[w]),B.aaQ,B.o6)
for(w=0;w<2;++w){v=B.dlU[w]
for(u=0;u<2;++u){t=B.dlL[u]
s.dN(new A.q(v,7,t-1.5),new A.q(v,7,t+1.5),7.5,D.nh,12)}}return s},
i3k(d,e){var w,v,u,t,s,r=new A.fk(C.a([],x.z))
r.r=!0
r.aZ(B.aVB,B.fZD,D.bN,0.4)
r.aZ(B.hck,B.h2k,D.bN,0.4)
r.aZ(B.hcl,B.h2o,B.hW,0.6)
r.aO(B.x7,B.fZI,D.dF)
w=D.k.F(d*5+e,2)<1
r.aZ(B.hex,B.aVP,w?D.aw:D.ek,0.6)
r.aZ(B.hak,B.aVP,w?D.d7:D.d3,0.6)
for(v=0;v<2;++v){u=B.dlQ[v]
for(t=0;t<2;++t){s=B.dlJ[t]
r.dN(new A.q(u,6.5,s-1.5),new A.q(u,6.5,s+1.5),6.5,D.nh,12)}}return r},
ik5(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=x.z,a5=C.a([],a4)
for(w=0;w<4;++w){v=B.km[w]
u=$.aRG()
t=D.d.cv(B.km,v)
u.FF(0,a6)
t=A.Lj(B.km[t],u.a[t]).a
s=t[0]
r=t[1]
q=t[2]
p=t[3]
u=v.a==="bus"
o=u?A.hXQ():A.i3k(a6,w)
u=u?B.aWC:B.aVW
D.d.v(a5,A.ny(A.i4M(o.a,u),0,Math.atan2(q,p)-1.5707963267948966,new A.q(s,0,r)))}for(u=$.bFF(),t=u.length,n=0;n<u.length;u.length===t||(0,C.M)(u),++n)D.d.v(a5,A.i0K(u[n],a6))
for(u=a6*0.9,t=x.o,m=a6*22,l=a6*0.09,w=0;w<2;++w){k=B.a4B[w].a
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
a0.aZ(B.dX,B.h1O,D.bx,0.4)
a0.aZ(B.h_I,B.fZM,B.hW,0.7)
a0.dN(B.h_P,B.h34,2.6,D.bx,8)
a0.aO(B.h31,B.h9Y,D.bN)
a0.dN(B.x7,B.aaJ,1.2,B.hq,8)
for(a1=0;a1<2;++a1)a0.aDK(new A.q(0,13.4,0),B.h58,B.hq,m+a1*3.141592653589793/2)
for(n=0;n<2;++n){a2=E.aAs[n]
a0.aO(new A.q(0,-11,a2),B.h4R,B.hq)
a0.aO(new A.q(-10,-6,a2),B.aWA,B.hq)
a0.aO(new A.q(10,-6,a2),B.aWA,B.hq)}for(n=0;n<2;++n){a3=B.aAo[n]
a0.ji(C.a([new A.q(a3*0.45,-10,0),new A.q(a3,-22,0)],t),0.3,B.hq,!1,0,4)}D.d.v(a5,A.ny(d,0,e-1.5707963267948966,new A.q(j+520*k,h+Math.sin(u+w)*5,i+520*f)))}return a5},
ik6(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=C.a([],x.a),f=new A.fY5()
for(w=0;w<4;++w){v={}
u=B.km[w]
v.a=v.b=null
t=$.aRG()
s=D.d.cv(B.km,u)
t.FF(0,d)
s=A.Lj(B.km[s],t.a[s]).a
v.b=s[0]
v.a=s[1]
s=new A.fY3(v,Math.atan2(s[2],s[3])-1.5707963267948966)
v=u.a==="bus"
r=v?B.aWC:B.aVW
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
g.push(f.$7(s.$3(q,o,p),s.$3(v,o,p),s.$3(v,n,p),s.$3(q,n,p),t+5,1200,220))}for(v=d*0.09,t=d*0.9,w=0;w<2;++w){s=B.a4B[w].a
l=s[0]
k=s[1]
j=s[2]
i=s[3]
h=v+w*3.141592653589793
s=Math.cos(h)
p=Math.sin(h)
p=new A.fY4(Math.atan2(-Math.sin(h),Math.cos(h))-1.5707963267948966,l+520*s,j+Math.sin(t+w)*5,k+520*p)
g.push(f.$7(p.$2(-42,-22),p.$2(42,-22),p.$2(42,-44),p.$2(-42,-44),i,900,230))
g.push(f.$7(p.$2(42,-22.3),p.$2(-42,-22.3),p.$2(-42,-44.3),p.$2(42,-44.3),i,900,230))}return g},
i0K(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k=B.km[d.a*2],j=d.b,i=A.Lj(k,j).a,h=i[0],g=i[1],f=i[2],e=i[3]
j=A.Lj(k,j+22).a
j=[j[0],j[1],f,e,h+-e*56,g+f*56]
w=A.h7S(d,a0)
v=D.k.F(a0+d.c,28)
u=v>=17&&v<26
i=C.a([],x.z)
t=new A.fk(i)
t.r=!0
t.dN(B.dX,B.aVK,1.7,D.hg,6)
t.aZ(B.fZg,B.h3H,D.av,0.3)
for(s=w===2,r=w===1,q=w===0,p=0;p<3;++p){o=!0
if(!(p===0&&s))if(!(p===1&&r)){n=p===2&&q
o=n}n=o?B.diA[p]:B.cJC[p]
m=o?0.9:0.1
t.fV(new A.q(-3.9,74-p*8,0),3.3,n,4,7,m)}t.aZ(B.fYL,B.fZN,D.av,0.3)
if(u){t.ed(B.h4V,1.6,D.be,4,6)
t.aO(B.h9U,B.h9B,D.be)
t.aO(B.h5j,B.aWZ,D.be)
t.aO(B.h8H,B.aWZ,D.be)}else{t.aO(B.h6p,B.haM,D.aw)
for(l=-2;l<=1;++l)t.aO(new A.q(l*1.25+0.6,40,-4.9),B.hb7,D.aw)
t.aO(B.hdT,B.h6y,D.aw)}return A.ny(i,0,Math.atan2(j[2],j[3])-1.5707963267948966,new A.q(j[4],0,j[5]))},
i8j(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=C.a([],x.z),i=new A.fk(j)
i.f=1
i.e=90
w=new A.fzx(i)
for(v=$.bFF(),u=v.length,t=0;t<v.length;v.length===u||(0,C.M)(v),++t){s=v[t]
r=B.km[s.a*2]
q=s.b
p=A.Lj(r,q+22).a
o=p[0]
n=p[1]
m=p[2]
l=p[3]
for(k=-4;k<=4;++k)w.$8(o,n,m,l,0,-25+k*11,18,5)
q=A.Lj(r,q-6).a
w.$8(q[0],q[1],m,l,0,0,2.2,46)}return j},
SG:function SG(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.d=f
_.r=g
_.w=h},
fDi:function fDi(){},
aTD:function aTD(d,e,f){this.a=d
this.b=e
this.c=f},
bxk:function bxk(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=-1},
fh0:function fh0(d,e){this.a=d
this.b=e},
bKm:function bKm(d,e,f){var _=this
_.a=d
_.b=e
_.c=0
_.d=f},
bKn:function bKn(){},
fY5:function fY5(){},
fY6:function fY6(d){this.a=d},
fY3:function fY3(d,e){this.a=d
this.b=e},
fY4:function fY4(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fzx:function fzx(d){this.a=d},
fzy:function fzy(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
Al:function Al(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.x=0},
cAX:function cAX(d,e,f){var _=this
_.a=d
_.b=e
_.d=_.c=$
_.e=f
_.f=null
_.w=_.r=0
_.x=1
_.y=0},
cAZ:function cAZ(d){this.a=d},
cB_:function cB_(){},
cAY:function cAY(){},
hxL(d){return d.b==="hq"?12:D.o.E(D.k.bh((210+D.o.F(B.zg[d.f].l(),5)*24)/22),8,14)},
h_1(d,e,f){var w=new A.bK8(d,e,f,B.aA1,B.a32,C.a([],x.a),C.aX(x.S))
w.at=new A.b9T(null,-138,138,12,316,0,296,3.141592653589793,w.cc1())
w.ax=w.cGS()
return w},
pB:function pB(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bK8:function bK8(d,e,f,g,h,i,j){var _=this
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
bK9:function bK9(){},
bKg:function bKg(d){this.a=d},
bKh:function bKh(d){this.a=d},
bKi:function bKi(d){this.a=d},
bKj:function bKj(d){this.a=d},
bKa:function bKa(d){this.a=d},
bKb:function bKb(){},
bKc:function bKc(){},
bKd:function bKd(d){this.a=d},
bKe:function bKe(d){this.a=d},
bKf:function bKf(d){this.a=d},
h_8(d,e){var w=C.a([],x.ha),v=C.a([new A.M5(),new A.M5(),new A.M5()],x.gQ),u=C.a([],x.s),t=new C.e9()
t.d4(e)
w=new A.aU2(d,t,w,v,u)
w.bza(d,e)
return w},
hd_(d,e){var w,v,u,t,s,r,q,p,o=J.a5(e),n=x.fF,m=n.a(o.h(e,"wired"))
if(m==null)m=D.uJ
w=n.a(o.h(e,"plumbed"))
if(w==null)w=D.uJ
for(o=d.gqT(),n=o.length,v=J.a5(w),u=J.a5(m),t=0;t<o.length;o.length===n||(0,C.M)(o),++t){s=o[t]
r=""+s.a
q=u.h(m,r)
if(C.r1(q)){s.ay=!q
s.CW=null}p=v.h(w,r)
if(C.r1(p)){r=s.c
r=r==="bathroom"||r==="kitchen"}else r=!1
if(r){s.ch=!p
s.fr=null}}},
h_9(d){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=J.a5(d),j=C.aK(k.h(d,"seed"))
j=j==null?l:D.k.N(j)
if(j==null)j=1
w=C.aK(k.h(d,"clock"))
w=w==null?l:D.k.N(w)
v=A.h_8(j,(w==null?0:w)+7)
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
if(u==null)u=D.co
w=J.a5(u)
t=x.G
s=0
for(;;){r=v.c
r===$&&C.c()
if(!(s<r.length&&s<w.gL(u)))break
q=t.a(w.h(u,s))
r=v.c[s]
p=J.a5(q)
r.b=C.e1(p.h(q,"hunger"))
r.c=C.e1(p.h(q,"health"))
r.d=C.e1(p.h(q,"comfort"))
r.e=J.A(p.h(q,"sick"),!0)
r.f=!J.A(p.h(q,"alive"),!1)
p=C.aK(p.h(q,"bed"))
p=p==null?l:D.k.N(p)
r.r=p==null?-1:p;++s}o=j.a(k.h(d,"beds"))
if(o==null)o=D.co
w=J.a5(o)
r=v.e
s=0
for(;;){if(!(s<r.length&&s<w.gL(o)))break
q=t.a(w.h(o,s))
p=r[s]
n=J.a5(q)
p.a=D.k.N(C.e1(n.h(q,"res")))
p.b=C.e1(n.h(q,"care"))
p.c=C.e1(n.h(q,"heal"));++s}k=j.a(k.h(d,"calls"))
k=J.aW(k==null?D.co:k)
j=v.d
while(k.C()){m=t.a(k.gT(k))
w=J.a5(m)
r=new A.Ia(D.k.N(C.e1(w.h(m,"id"))),D.k.N(C.e1(w.h(m,"res"))),C.cP(w.h(m,"kind")),C.cP(w.h(m,"msg")),D.k.N(C.e1(w.h(m,"reward"))))
r.f=C.e1(w.h(m,"age"))
j.push(r)}return v},
aU4(){var w=0,v=C.j(x.dy),u,t=2,s=[],r,q,p,o,n
var $async$aU4=C.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return C.b(C.az(),$async$aU4)
case 7:r=e
q=C.aS(J.r(r.a,"ngmy_community_v1"))
if(q==null){u=null
w=1
break}p=x.b.a(D.X.aM(0,q,null))
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
return C.i($async$aU4,v)},
aU3(){var w=0,v=C.j(x.H),u=1,t=[],s,r,q
var $async$aU3=C.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
w=6
return C.b(C.az(),$async$aU3)
case 6:s=e
w=7
return C.b(J.hz(s,"ngmy_community_v1"),$async$aU3)
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
return C.i($async$aU3,v)},
Ft:function Ft(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
P5:function P5(d){var _=this
_.a=d
_.b=25
_.d=_.c=100
_.e=!1
_.f=!0
_.r=-1},
Ia:function Ia(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=0},
M5:function M5(){this.a=-1
this.b=100
this.c=0},
aU2:function aU2(d,e,f,g,h){var _=this
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
bKY:function bKY(){},
bKV:function bKV(d){this.a=d},
bKW:function bKW(d,e){this.a=d
this.b=e},
bKX:function bKX(){},
bL1:function bL1(d){this.a=d},
bL_:function bL_(d){this.a=d},
bL0:function bL0(){},
bKZ:function bKZ(d){this.a=d},
bL2:function bL2(){},
apK:function apK(d,e){this.c=d
this.a=e},
bkM:function bkM(){var _=this
_.d=null
_.e=$
_.f=null
_.r=$
_.x=_.w=null
_.y=0
_.c=_.a=null},
dSp:function dSp(d,e){this.a=d
this.b=e},
dSq:function dSq(d){this.a=d},
dSC:function dSC(){},
dSw:function dSw(d,e){this.a=d
this.b=e},
dSx:function dSx(d){this.a=d},
dSv:function dSv(d){this.a=d},
dSl:function dSl(){},
dSm:function dSm(){},
dSF:function dSF(){},
dSG:function dSG(){},
dSE:function dSE(d,e){this.a=d
this.b=e},
dSD:function dSD(d,e){this.a=d
this.b=e},
dSk:function dSk(d,e){this.a=d
this.b=e},
dSr:function dSr(d,e,f){this.a=d
this.b=e
this.c=f},
dSs:function dSs(d,e,f){this.a=d
this.b=e
this.c=f},
dSt:function dSt(d,e,f){this.a=d
this.b=e
this.c=f},
dSu:function dSu(d,e){this.a=d
this.b=e},
dSo:function dSo(d,e,f){this.a=d
this.b=e
this.c=f},
dSn:function dSn(d,e,f){this.a=d
this.b=e
this.c=f},
dSz:function dSz(d,e){this.a=d
this.b=e},
dSA:function dSA(d,e){this.a=d
this.b=e},
dSB:function dSB(d){this.a=d},
dSy:function dSy(d){this.a=d},
dSH:function dSH(d){this.a=d},
dSI:function dSI(){},
acP:function acP(d,e,f){this.c=d
this.d=e
this.a=f},
bfF:function bfF(d,e){this.b=d
this.a=e},
vO(d,e,f,g,h,i,j,k,l,m,n){return new A.Tb(g,m,d,k,e,f,n,h,l,i,j)},
t2(d){return D.d.fP($.hBV(),new A.fA8(d))},
bFf(d,e){var w,v,u=d.e,t=new C.N(u,new A.fYG(),C.T(u).k("N<1,n>")).fI(0)
u=e.b
w=C.a7(u).k("bc<2>")
v=C.dg(new C.bc(u,w),w.k("L.E"))
return t.d_(0,v.gkT(v))},
hxN(d,e,f,g,h){var w,v
if(e.a&&e.c===0){if(e.r)return"SHOCK! The breaker was still ON and you touched a live wire. Always turn the power OFF and test the wires first."
return"STOP! The breaker is still ON, so these wires are live (120 volts). Turn the breaker OFF first. This can shock you badly."}if(e.c!==0)return"The device is already in the box. Pull it out again to change the wires."
if(!e.r&&!e.y&&!h&&!g.c.t(0,f))return d.r.$2(f,g)
w=e.b
v=g.a
if(w.h(0,v)!=null)return"That place already has a wire. Tap the wire to take it off first."
if(new C.bc(w,C.a7(w).k("bc<2>")).t(0,f))return"That wire is already fastened. Tap it to take it off if you want to move it."
w.n(0,v,f)
return null},
h7r(d,e){var w,v,u,t,s,r,q=new A.fzk(),p=new A.fzl(),o=C.a([],x.bm)
for(w=e.b,w=new C.cH(w,C.a7(w).k("cH<1,2>")).gaf(0),v=d.f,u=d.e;w.C();){t=w.d
t.toString
s=D.d.fP(v,new A.fzi(t))
r=D.d.fP(u,new A.fzj(t))
o.push(new A.a4p(new A.cCL(r.a,q.$1(r.e)),new A.cz5(p.$1(s.f))))}return o},
fPX(d){var w=d.e,v=C.T(w).k("Z<1>")
return new A.bMo(new C.Z(w,new A.fPY(),v).gL(0),new C.Z(w,new A.fPZ(),v).gL(0),d.y)},
Lf(d,e){var w,v,u,t,s,r,q=A.hte(A.fPX(d),A.h7r(d,e),e.x),p=q.c,o=new A.fAl(q),n=q.b,m=n.length===0?null:D.d.fb(n,new A.fAi())
n=q.a===B.v8
if(n)w="ok"
else if(o.$1("SHORT")||o.$1("HOT_TO_GROUND"))w="short"
else{if(o.$1("REVERSED"))v="reversed"
else if(o.$1("NEUTRAL_GROUND"))v="bonded"
else if(o.$1("GROUND_AS_CURRENT"))v="groundWire"
else if(o.$1("OPEN_NEUTRAL"))v="openNeutral"
else if(o.$1("UNVERIFIED"))v="unverified"
else v=o.$1("MISSING_GROUND")?"noGround":"dead"
w=v}if(d.x&&!e.y)for(v=e.b,v=new C.cH(v,C.a7(v).k("cH<1,2>")).gaf(0),u=d.f;v.C();){t=v.d
t.toString
s=D.d.fP(u,new A.fAj(t))
if(!s.c.t(0,t.b)){n=s.d
return new A.b9p("dead","The "+D.d.fP(d.e,new A.fAk(t)).b+" is on the wrong terminal ("+s.b+"). "+n,!1,!1,!1,"none",n)}}r=n?"Wired correctly. Hot, neutral and ground are all in the right place, and every safety check passes.":m.c+" "+p.c
n=m==null?null:m.e
if(n==null)n=""
return new A.b9p(w,r,p.d,p.e,p.f,p.b,n)},
h7T(d){var w,v,u
for(w=$.fZj(),v=0;v<10;++v){u=w[v]
if(u.a===d)return u.w}return d},
aOL(d,e){var w
if(d==="light"||d==="fan")w=e.c===0?6.4:0.6
else w=e.c===0?4.7:-0.25
return w},
aQ2(d,e,f){var w,v
if(d==="light"||d==="fan"){w=A.aOL(d,f)
v=f.c===0?w-3.2:w
switch(e){case 51:return new A.q(-1.5,-0.3,v)
case 52:return new A.q(0,-0.3,v)
default:return new A.q(1.5,-0.3,v)}}w=A.aOL(d,f)
switch(e){case 21:return new A.q(0.98,-0.2+(d==="gfci"?0.95:0.85),w-0.45)
case 22:return new A.q(0.98,-0.2+(d==="gfci"?-0.75:-0.55),w-0.45)
case 23:return new A.q(-0.98,-0.2+(d==="gfci"?0.95:0.85),w-0.45)
case 24:return new A.q(-0.98,-0.2+(d==="gfci"?-0.75:-0.55),w-0.45)
default:return new A.q(0,-1.98,w+0.52)}},
h7f(b5,b6,b7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=C.a([],x.z),b2=new A.fk(b1),b3=A.h7T(b5.a),b4=b3==="light"||b3==="fan"
if(b7){b2.b=1
b2.hp(B.h8W,B.aWU,B.vH,3)
b2.hp(B.hab,B.aWU,B.vH,3)
b2.hp(B.hcV,B.aXf,B.vH,2)
b2.hp(B.haP,B.aXf,B.vH,2)
b2.b=2
b2.n9(B.h8t,B.aWN,B.ju,0.05,3)
b2.n9(B.h7U,B.aWN,B.ju,0.05,3)
b2.n9(B.h7N,B.hdr,B.ju,0.05,2)}w=b5.w.length===0
v=A.hon(b2,w?b3:"outlet",!0)
u=new A.fxz(b2,b6,b3,b4)
t=D.d.gI(v)
s=!w
if(s){r=b5.e
q=r.length
for(p=t.a,o=t.b+0,n=t.c,m=q-1,l=q===1,k=0;k<q;++k){j=r[k]
i=l?0:k/m-0.5
h=D.o.F(k,2)
if(j.e==="ground")g=B.vN
else{g=j.c
if(g.A(0,B.oT))g=B.oT}u.$5(60+k,new A.q(p+i*0.5,o,n+0.04*k),new A.q(i*3.6,-1.7-0.12*h,2.3+0.15*k),j.a,g)}}else if(b3==="switch"){f=D.d.gak(v)
u.$5(10,t.a9(0,B.h0T),B.hcY,"blackLine",B.LV)
u.$5(13,f.a9(0,B.hd6),B.h67,"blackLoad",B.LV)
u.$5(12,t.a9(0,B.h9L),B.h5h,"ground",B.vN)
b2.b=6
r=x.o
b2.ji(C.a([t.a9(0,B.aWK),B.h1B,B.Vv],r),0.075,B.oT,!1,0.3,8)
b2.ji(C.a([f.a9(0,B.aWK),B.h91,B.Vv],r),0.075,B.oT,!1,0.3,8)
b2.BE(B.Vv,B.hcQ,0.28,B.aeW,0.18,0.3,10)}else{u.$5(10,t.a9(0,B.h6h),B.h1o,"black",B.LV)
u.$5(11,t.a9(0,B.h7H),B.h9c,"white",B.oT)
u.$5(12,t.a9(0,B.h85),B.h7W,"ground",B.vN)}if(b4)A.hpo(b2,b3,b6)
else A.hp2(b2,b3,A.aOL(b3,b6),b6.w,!1,s)
if(b6.e&&b6.c===0){b2.b=0
b2.d=0.5
for(r=b5.f,p=r.length,e=0;e<p;++e){d=r[e]
a0=A.aQ2(b3,d.a,b6)
if(d.e)a1=D.bG
else{o=d.f
if(o==="ground")a1=D.be
else{o=o==="neutral"?D.c:B.XX
a1=o}}if(b4)o=0
else{o=a0.a
if(o>0.4)o=0.12
else o=o<-0.4?-0.12:0}if(b4)n=0.6
else n=Math.abs(a0.a)<0.4?0.2:0
b2.fV(new A.q(a0.a+o,a0.b+0,a0.c+n),0.36,a1,4,8,0.1)}b2.d=1}if(b6.c>=2&&!b4)A.hrs(b2,b6.w)
r=!1
if(b6.c>=2)if(b6.d)r=b3==="outlet"||b3==="gfci"
if(r)A.i63(b2,b6.a&&!b6.w)
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
a2=A.aOL(b3,b6)
a4=p?"Ceiling fan":"Ceiling light"
p=p?"The motor housing with blades. It has three wires: black (motor), white (neutral) and green (ground).":"The light fixture with a frosted dome. It has three wires: black, white and green."
a5=C.G([1,B.ec4,2,B.eci,3,new A.cW(r,"A box that holds the wire connections. Every connection must be inside a box, never loose in the wall or the ceiling."+o,new A.q(0,0,-1.2),9),4,new A.cW(m,"The yellow jacket holds three wires: black (hot), white (neutral) and bare copper (ground). Yellow means 12 gauge wire for a 20 amp circuit. White jackets are 14 gauge for 15 amps.",new A.q(-0.4,1.5,-1.8),8),5,B.ecF,10,new A.cW("Black wire: hot","The hot wire brings the power from the breaker. It is the dangerous one. "+l,new A.q(-0.8,-0.8,1.2),7),13,B.ebR,11,new A.cW("White wire: neutral","The neutral wire carries the power back to the panel. "+h,new A.q(0,-0.8,1.2),7),12,new A.cW("Bare copper wire: ground","The ground wire is a safety path. If a wire touches metal, the current runs down the ground instead of through you. "+g,new A.q(0.5,-0.8,1.2),7),6,B.ecg,20,new A.cW(a3,n,new A.q(0,-0.2,a2),9),21,B.ecl,22,B.ecE,23,B.ece,24,B.ecj,25,B.ec7,26,B.ecm,27,B.ecy,28,B.ec2,30,B.ebM,31,B.ebK,51,B.ech,52,B.ebO,53,B.ecq,54,new A.cW(a4,p,new A.q(0,0,6.4),9),55,B.ecA],x.S,x.q)
if(s){a5.n(0,20,new A.cW(b5.b,b5.c,new A.q(0,-0.2,A.aOL(b3,b6)),9))
for(s=b5.e,r=s.length,k=0;k<r;++k)a5.n(0,60+k,new A.cW(s[k].b,"Pick this wire up, then tap the screw it belongs on. Tap it again on the screw to take it off.",new A.q(-0.8+k*0.5,-0.8,1.2),7))
for(s=b5.f,r=s.length,e=0;e<r;++e){a6=s[e]
p=a6.a
a5.n(0,p,new A.cW(a6.b,a6.d,A.aQ2(b3,p,b6),5))}}a7=C.a([],x.E)
if(b6.f&&b6.c===0)for(s=b5.f,r=s.length,e=0;e<r;++e){d=s[e]
a0=A.aQ2(b3,d.a,b6)
a8=d.f
A:{p="hot"===a8
if(p){o=B.eSA
break A}if("neutral"===a8){o=B.eIx
break A}if("ground"===a8){o=B.eL4
break A}o=B.exn
break A}a9=o.a
if(b4){B:{if(p){n="BLACK NUT \xb7 HOT"
break B}if("neutral"===a8){n="WHITE NUT \xb7 NEUTRAL"
break B}n="GROUND"
break B}i=n}else i=w?a9:d.b
if(b4){C:{if(p){p=B.h7k
break C}if("neutral"===a8){p=B.h7d
break C}p=B.hdF
break C}b0=p}else{p=a0.a
if(p>0.4)n=3.8
else n=p<-0.4?-4.2:0
b0=new A.q(n,Math.abs(p)<0.4?-3:-0.4,1)}a7.push(new A.hf(new A.q(a0.a+b0.a,a0.b+b0.b,a0.c+b0.c),i,o.b,0))}if(b6.a&&b6.c===0)a7.push(B.c0P)
return new A.tP(b1,a5,a7,B.wz,null,0)},
hon(d,e,f){var w,v,u=e==="light"||e==="fan"
d.b=3
if(u){d.dR(B.aXh,B.aWT,2.2,B.xW,0.3,18)
d.Tg(B.aWT,B.dX,2.2,B.xW,!1,!0,0.3,18)}else{d.aZ(B.aXh,B.h8D,B.xW,0.3)
d.aZ(B.h5L,B.aWy,B.xW,0.3)
d.aZ(B.h2i,B.aWy,B.xW,0.3)
d.aZ(B.h7Q,B.aWY,B.xW,0.3)
d.aZ(B.h7b,B.aWY,B.xW,0.3)}w=C.a([],x.o)
v=new A.fiL(d,f,w)
if(e==="switch"){v.$2(4,B.d2W)
v.$2(5,B.d0Y)}else v.$2(4,B.dfs)
return w},
hxS(d,e){var w,v=$.fZj(),u=new C.Z(v,new A.fYF(d),C.T(v).k("Z<1>"))
if(!u.gan(0)){w=e-60
return w>=0&&w<u.gI(0).e.length?u.gI(0).e[w].a:null}return A.i0H(d,e)},
i0H(d,e){var w
A:{if(10===e){w=d==="switch"?"blackLine":"black"
break A}if(13===e){w="blackLoad"
break A}if(11===e){w="white"
break A}if(12===e){w="ground"
break A}w=null
break A}return w},
hp2(d,e,f,g,h,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k=new A.q(0,-0.2,f),j=e==="switch",i=e==="gfci"
if(g)w=B.xR
else w=j?B.bk0:B.YB
v=i?3.1:2.95
d.e=0
d.b=20
if(!h){d.aZ(k.a9(0,B.h4q),new A.q(1.5,v,1.3),w,0.25)
d.e=0.15
d.b=26
u=k.a9(0,B.h48)
d.aZ(u,B.hcS,g?B.bgt:B.Mf,0.8)
d.aO(k.a9(0,B.h9I),B.heK,B.F8)}d.e=0.3
d.b=27
u=k.a9(0,B.h6J)
d.aZ(u,new A.q(1.3,i?2.85:2.7,0.16),w,0.3)
if(j){d.e=0.7
d.b=28
u=k.a9(0,B.h9_)
d.aZ(u,B.h6e,g?B.xR:G.YM,0.35)
u=k.a9(0,B.hcq)
d.aZ(u,B.haO,g?B.xR:B.afJ,0.35)}else{d.e=0.6
u=i?E.avf:B.dt0
t=u.length
s=f+0.47
r=f+0.46
q=f+0.5
p=0
for(;p<t;++p){o=u[p]
d.b=27
n=-0.2+(o+0.04)
d.aO(new A.q(-0.28,n,s),B.h8C,B.Fk)
d.aO(new A.q(0.28,n,s),B.h6R,B.Fk)
n=-0.2+(o-0.32)
d.dN(new A.q(0,n,r),new A.q(0,n,q),0.11,B.Fk,10)}if(i){d.e=0.7
d.b=28
d.aZ(k.a9(0,B.h9r),B.aWE,B.bnJ,0.3)
d.aZ(k.a9(0,B.hd7),B.aWE,B.aiA,0.3)}}if(h){d.e=0
return}m=i?0.95:0.85
l=i?-0.75:-0.55
u=new A.fk4(d,k)
if(!j||a0){u.$6$taped(23,-1,m,B.ag5,B.agE,i)
u.$5(24,-1,l,B.ag5,B.agE)}u.$6$taped(21,1,m,B.XX,B.ai1,i)
u.$5(22,1,l,B.XX,B.ai1)
d.e=0.9
d.b=25
d.dR(k.a9(0,B.h7O),k.a9(0,B.hdL),0.18,B.bpR,0.7,12)
d.aO(k.a9(0,B.h7f),B.h7S,D.e_)
d.aZ(k.a9(0,B.h4B),B.h9v,B.bcI,0.6)
d.e=0},
hpo(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=e==="fan",i=A.aOL(e,f)
d.e=0
d.b=55
w=i-0.3
v=i+0.3
u=j?3.3:3.5
t=f.w?B.xR:B.bky
d.dR(new A.q(0,0,w),new A.q(0,0,v),u,t,0.45,20)
d.b=54
if(j){u=i+4.2
d.dR(new A.q(0,0,v),new A.q(0,0,u),0.45,B.bgn,0.5,10)
v=i+7.4
d.dR(new A.q(0,0,u),new A.q(0,0,v),3.6,B.Xt,0.5,18)
d.dR(new A.q(0,0,v),new A.q(0,0,i+8.6),1.6,B.bp5,0.7,14)}else{d.d=0.92
v=f.w?B.xR:B.bhx
d.fV(new A.q(0,0,i+1.2),3.6,v,6,14,0.7)
d.d=1}v=d.b=54
s=[B.eIG,B.eu6,B.eQ7]
for(u=x.o,r=i-3.2,q=0,p=0;p<3;++p){t=s[p]
o=f.c===0
d.b=o?B.cFk[q]:v;++q
n=o?r:i
o=t.b.a
d.ji(C.a([new A.q(o,-0.3,w),new A.q(o,-0.3,n+0.4)],u),0.07,t.a,!1,0.3,6)}if(f.c===0)for(w=[B.eBo,B.eKc,B.eT1],v=f.b,p=0;p<3;++p){m=w[p]
u=m.a
l=A.aQ2(e,u,f)
d.b=u
d.e=0.8
t=l.a+0
o=l.b+0
k=l.c
d.dR(new A.q(t,o,k+-0.2),new A.q(t,o,k+0.3),0.09,B.vN,0.6,6)
if(v.aj(0,u))d.BE(new A.q(t,o,k+-0.5),new A.q(t,o,k+0.9),0.4,m.b,0.26,0.4,8)
d.e=0}},
hrs(d,e){var w
d.e=0.4
d.b=30
w=e?B.xR:B.bbM
d.aZ(B.h9i,B.aX_,w,0.3)
d.aZ(B.h8r,B.aX_,w,0.3)
d.aZ(B.h2c,B.aX8,w,0.3)
d.aZ(B.h3h,B.h4N,w,0.3)
d.aZ(B.hdC,B.aX8,w,0.3)
d.dR(B.h6Y,B.h8n,0.1,B.Mf,0.8,10)
d.e=0},
i63(d,e){var w,v
d.b=31
for(w=0;w<2;++w){v=B.d5z[w]
d.dR(new A.q(v,0.52,0.2),new A.q(v,0.52,1.9),0.04,B.Mf,0.8,6)}d.aZ(B.h_k,B.hcE,B.bha,0.35)
d.bbS(B.aWV,0.2,e?D.XZ:B.blj,0.9)
if(e){d.d=0.35
d.fV(B.aWV,0.5,D.XZ,4,8,0)
d.d=1}},
fM:function fM(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
CE:function CE(d){var _=this
_.a=!0
_.b=d
_.c=0
_.w=_.r=_.f=_.e=_.d=!1
_.x=!0
_.y=!1
_.z=""},
jA:function jA(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
Tb:function Tb(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
fBs:function fBs(){},
fBt:function fBt(){},
fBu:function fBu(){},
fBv:function fBv(){},
fBw:function fBw(){},
fA8:function fA8(d){this.a=d},
fYG:function fYG(){},
b9p:function b9p(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.r=i
_.w=j},
fzk:function fzk(){},
fzl:function fzl(){},
fzi:function fzi(d){this.a=d},
fzj:function fzj(d){this.a=d},
fPY:function fPY(){},
fPZ:function fPZ(){},
fAl:function fAl(d){this.a=d},
fAm:function fAm(d){this.a=d},
fAi:function fAi(){},
fAj:function fAj(d){this.a=d},
fAk:function fAk(d){this.a=d},
fxz:function fxz(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fxA:function fxA(d){this.a=d},
fiL:function fiL(d,e,f){this.a=d
this.b=e
this.c=f},
fYF:function fYF(d){this.a=d},
fk4:function fk4(d,e){this.a=d
this.b=e},
agU(d){var w
A:{if("outlet"===d){w="Outlet"
break A}if("gfci"===d){w="GFCI outlet"
break A}if("switch"===d){w="Light switch"
break A}if("light"===d){w="Ceiling light"
break A}if("fan"===d){w="Ceiling fan"
break A}w=A.t2(d).b
break A}return w},
fBx:function fBx(){},
fBy:function fBy(){},
fBz:function fBz(){},
fBA:function fBA(){},
fBB:function fBB(){},
fBC:function fBC(){},
fBD:function fBD(){},
fBE:function fBE(){},
fBF:function fBF(){},
fBG:function fBG(){},
aPR(d){return D.d.dK(B.a3P,new A.fxl(d),new A.fxm())},
hae(d,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i={},h=new A.fYC(),g=new A.fYz(),f=d.c,e=f==="hall"
if(!e&&d.p1!=="back"){w=a0.e?d.ghq(0)-14:Math.min(a0.d,d.ghq(0)-14)
v=h.$1(w)
return new A.abO(w,v,d.ghq(0)/2,g.$1(v))}if(e&&a1<2){w=a0.e?d.ghq(0)-14:Math.min(a0.d,d.ghq(0)-14)
v=h.$1(w)
return new A.abO(w,v,d.ghq(0)/2,g.$1(v))}if(e){f=C.a([],x.n)
for(e=d.w,u=e.length,t=0;t<e.length;e.length===u||(0,C.M)(e),++t){s=e[t]
if(s.b==="back"&&!s.a)f.push(s.c)}r=f.length===0?-40:D.d.fb(f,D.vB)-19-8
q=f.length===0?40:D.d.fb(f,D.pI)+19+8
p=d.gex(0)/2-8
f=a1===2?(-p+r)/2:(q+p)/2
return new A.abO(p-q,106,f,61)}e=d.gex(0)
q=d.gex(0)/2-6
if(f==="bathroom"&&!d.ok)q=14
f=C.a([],x.f)
for(u=d.w,o=u.length,t=0;t<u.length;u.length===o||(0,C.M)(u),++t){s=u[t]
if(s.b==="back"&&!s.a){n=s.c
f.push(new C.z(n-19,n+19))}}D.d.aW(f,new A.fYA())
m=i.a=i.b=-e/2+6
l=new A.fYB(i)
for(e=f.length,t=0;t<f.length;f.length===e||(0,C.M)(f),++t){u=f[t]
k=u.a
if(k>m)l.$2(m,Math.min(k,q))
m=Math.max(m,u.b)}if(m<q)l.$2(m,q)
j=Math.max(30,i.a-i.b-4)
w=a0.e?j:Math.min(a0.d,j)
v=h.$1(w)
return new A.abO(w,v,(i.b+i.a)/2,g.$1(v))},
zk(d,e,f,g,h,i,j,k){var w=x.S
return new A.a5q(d,e,f,g,h,i,j,k,C.a([],x._),C.a([0,0,0],x.t),C.aX(w),C.U(w,x.i),C.U(w,x.cR),C.U(w,w),C.U(w,x.gh),C.U(w,x.N),C.a([],x.cX),C.aX(w),C.aX(w))},
aWw(d){var w=new A.aWv(d)
w.c7T()
return w},
hGV(d){var w=new A.aWv(7)
w.bzn(d)
return w},
ikX(d){var w,v=d.c
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
Eb:function Eb(d,e,f){this.a=d
this.b=e
this.c=f},
pR:function pR(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fxl:function fxl(d){this.a=d},
fxm:function fxm(){},
abO:function abO(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fYC:function fYC(){},
fYz:function fYz(){},
fYA:function fYA(){},
fYB:function fYB(d){this.a=d},
om:function om(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aWp:function aWp(d,e,f){this.a=d
this.b=e
this.c=f},
a5q:function a5q(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v){var _=this
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
bUh:function bUh(){},
bUg:function bUg(){},
aWv:function aWv(d){var _=this
_.a=""
_.b=d
_.c=!1
_.d=$
_.e=0},
bUS:function bUS(){},
bUT:function bUT(){},
bUU:function bUU(d){this.a=d},
bUV:function bUV(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bUW:function bUW(d,e){this.a=d
this.b=e},
bV_:function bV_(d){this.a=d},
bUX:function bUX(d,e){this.a=d
this.b=e},
bUZ:function bUZ(d,e,f){this.a=d
this.b=e
this.c=f},
bUY:function bUY(d,e,f){this.a=d
this.b=e
this.c=f},
bV3:function bV3(){},
bV2:function bV2(){},
bV1:function bV1(){},
bV0:function bV0(){},
b0X(d,e,f){return new A.IZ(!1,d,e,null)},
htd(d){var w=A.vy(B.iq,d.e*3.141592653589793/2)
return new C.z(w.a,w.c)},
i7v(b3,b4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8=null,a9="A helicopter with its billboard",b0={},b1=C.a([],x.dI),b2=x.o
b0.a=C.a([],b2)
b0.b=C.a([],b2)
b0.c=C.a([],x.s)
b0.d=!1
w=new A.fxU(b0,b1)
v=new A.fy0(b0)
u=new A.fxW(b3)
t=new A.fy1(b3)
s=new A.fxM(new A.fxV(t),new A.fxS(t,u))
r=new A.fxY(b0,u,s,v)
q=new A.fxZ(b0,new A.fy_(r),s)
p=new A.fxX(b0,w,b1)
b2=D.d.t(B.dhC,b4)
o=!b2
n=x._
m=C.a([],n)
for(l=b3.x,k=l.length,j=0;j<l.length;l.length===k||(0,C.M)(l),++j){i=l[j]
h=i.b
if(h==="billboard"||h==="cornersign"||h==="adboard"||h==="tower"||h==="hq")m.push(i)}k=C.T(l).k("Z<1>")
g=new C.Z(l,new A.fxN(),k)
h=C.a([],n)
for(f=l.length,j=0;j<l.length;l.length===f||(0,C.M)(l),++j){i=l[j]
e=i.b
if(e==="house2"||e==="bighouse")h.push(i)}v.$3$note(B.fZq,B.fYv,"Welcome to NGMY Town")
if(!g.gan(0))q.$1(g.gI(0))
if(b4==="city"||o){v.$2(B.hc8,B.hbv)
v.$2(B.hcd,B.hbu)
v.$2(B.fYR,B.fXv)
v.$2(B.h3r,B.h0b)
v.$2(B.h3m,B.h0c)
v.$2(B.fZa,B.fXx)
w.$1$speed(200)}if(b4==="billboards"||o){d={}
v.$2(B.hbQ,B.hbL)
v.$3$note(B.fYH,B.Ap,"The big NGMY logo board: New Global Movement for Youth")
v.$2(B.h_V,B.Ap)
v.$2(B.h0J,B.Ap)
v.$2(B.fZG,B.Ap)
v.$2(B.hbk,B.Ap)
v.$2(B.hbC,B.Ap)
v.$2(B.hbd,B.hbw)
d.a=!g.gaf(0).C()?B.fXw:new A.q(g.gI(0).c,0,g.gI(0).d)
a0=C.C(m,x.eB)
a1=0
for(;;){if(a0.length!==0)m=a1<(o?8:80)
else m=!1
if(!m)break
D.d.aW(a0,new A.fxO(d))
i=D.d.cA(a0,0)
q.$1(i)
d.a=new A.q(i.c,0,i.d);++a1}w.$1$speed(105)
for(a2=0;a2<2;++a2)b1.push(new A.Ms(B.rH,B.rH,130,6,a9,a8,!1,a8,a2))}if(b4==="edges"){n=C.a([],n)
for(m=l.length,j=0;j<l.length;l.length===m||(0,C.M)(l),++j){i=l[j]
f=i.b
if(f==="adboard"||f==="cornersign")n.push(i)}D.d.aW(n,new A.fxP(new A.fxL()))
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
r.$7$note(i,150,50,270,330,70,i.b==="bighouse"?"A big house with TV windows":"A house");++a2}a4=new C.Z(h,new A.fxQ(),x.am)
if(!a4.gan(0)){i=a4.gI(0)
a5=A.htd(i)
n=i.c
m=i.d
v.$2(new A.q(n+a5.a*220,110,m+a5.b*220),new A.q(n,45,m))
p.$1(i)}}if(b4==="hospital"||o)for(j=0;j<3;++j){a6=B.diK[j]
i=new C.Z(l,new A.fxR(a6),k)
if(!i.gaf(0).C())continue
a7=i.gaf(0)
if(!a7.C())C.b8(C.fs())
r.$7$note(a7.gT(0),160,50,300,360,60,"The "+a6)
a7=i.gaf(0)
if(!a7.C())C.b8(C.fs())
p.$1(a7.gT(0))}w.$0()
if(b4==="traffic"||o){if(b2){for(a2=0;a2<2;++a2)b1.push(new A.Ms(B.rH,B.rH,130,6,a9,a8,!1,a8,a2))
o=!1}a2=0
for(;;){if(a2<4)b2=a2<(o?2:4)
else b2=!1
if(!b2)break
b1.push(new A.Ms(B.rH,B.rH,130,6,B.km[a2].a==="bus"?"A self-driving bus with its billboards":"A self-driving police car",a8,!1,a2,a8));++a2}}return b1},
IZ:function IZ(d,e,f,g){var _=this
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
_.aA=null
_.aE=0
_.aN=!1
_.b1=_.aC=null
_.bM=_.be=_.b0=0
_.aJ=null
_.bi=!1
_.bG=null
_.c9=0
_.c6=m
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
_.eL=p
_.hM=_.hL=0
_.je=-1
_.iN=q
_.h5=!1
_.mJ=_.lf=-1e5
_.lz=0
_.c=_.a=_.qS=_.t6=null},
ed6:function ed6(){},
ed3:function ed3(d){this.a=d},
ed4:function ed4(d){this.a=d},
ed2:function ed2(){},
ed5:function ed5(d){this.a=d},
ebR:function ebR(d,e,f){this.a=d
this.b=e
this.c=f},
ebS:function ebS(d){this.a=d},
ebQ:function ebQ(d){this.a=d},
ebT:function ebT(d,e){this.a=d
this.b=e},
eap:function eap(d,e){this.a=d
this.b=e},
ecj:function ecj(d){this.a=d},
ebm:function ebm(d){this.a=d},
ebn:function ebn(d,e){this.a=d
this.b=e},
ebo:function ebo(d,e){this.a=d
this.b=e},
ebp:function ebp(d,e){this.a=d
this.b=e},
ebq:function ebq(d){this.a=d},
e9T:function e9T(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e9R:function e9R(d,e,f){this.a=d
this.b=e
this.c=f},
e9Q:function e9Q(d,e){this.a=d
this.b=e},
e9S:function e9S(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e9O:function e9O(d,e){this.a=d
this.b=e},
e9P:function e9P(d,e,f){this.a=d
this.b=e
this.c=f},
e9N:function e9N(d,e){this.a=d
this.b=e},
ea1:function ea1(d){this.a=d},
ea2:function ea2(d){this.a=d},
ea3:function ea3(d){this.a=d},
ebf:function ebf(d){this.a=d},
ebh:function ebh(d){this.a=d},
ebg:function ebg(d){this.a=d},
ebi:function ebi(d){this.a=d},
ebe:function ebe(d){this.a=d},
ebj:function ebj(d){this.a=d},
ebd:function ebd(d){this.a=d},
ebk:function ebk(d){this.a=d},
ebc:function ebc(d){this.a=d},
ebl:function ebl(d){this.a=d},
ebb:function ebb(d){this.a=d},
e9t:function e9t(d){this.a=d},
e9u:function e9u(d){this.a=d},
ead:function ead(d){this.a=d},
eaf:function eaf(d){this.a=d},
eae:function eae(d){this.a=d},
eag:function eag(d){this.a=d},
eac:function eac(d){this.a=d},
eah:function eah(d){this.a=d},
eab:function eab(d){this.a=d},
eai:function eai(d){this.a=d},
eaa:function eaa(d){this.a=d},
eaj:function eaj(d){this.a=d},
ea9:function ea9(d){this.a=d},
eak:function eak(d){this.a=d},
ea8:function ea8(d){this.a=d},
eal:function eal(d){this.a=d},
ea7:function ea7(d){this.a=d},
ech:function ech(){},
eci:function eci(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
ecf:function ecf(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ece:function ece(d){this.a=d},
ecg:function ecg(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eaD:function eaD(d){this.a=d},
e8s:function e8s(){},
ecK:function ecK(){},
e8T:function e8T(){},
eay:function eay(d){this.a=d},
eax:function eax(d){this.a=d},
eaz:function eaz(d){this.a=d},
eaw:function eaw(d){this.a=d},
ecL:function ecL(d,e){this.a=d
this.b=e},
ecJ:function ecJ(d){this.a=d},
ebX:function ebX(d,e,f){this.a=d
this.b=e
this.c=f},
ebY:function ebY(d,e){this.a=d
this.b=e},
ebW:function ebW(d,e){this.a=d
this.b=e},
ebV:function ebV(d){this.a=d},
ebU:function ebU(d){this.a=d},
eaX:function eaX(){},
eaY:function eaY(){},
eaU:function eaU(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
eaW:function eaW(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eaV:function eaV(d){this.a=d},
eaS:function eaS(d){this.a=d},
eaR:function eaR(d){this.a=d},
eaT:function eaT(d,e){this.a=d
this.b=e},
eaQ:function eaQ(d,e){this.a=d
this.b=e},
eam:function eam(d){this.a=d},
ean:function ean(d){this.a=d},
ebN:function ebN(){},
ea_:function ea_(d){this.a=d},
e9Z:function e9Z(d){this.a=d},
ea0:function ea0(d,e){this.a=d
this.b=e},
e9M:function e9M(d){this.a=d},
eaE:function eaE(){},
ebZ:function ebZ(d,e){this.a=d
this.b=e},
e9Y:function e9Y(){},
ec9:function ec9(d){this.a=d},
e9W:function e9W(d){this.a=d},
e9X:function e9X(d,e){this.a=d
this.b=e},
e9V:function e9V(d){this.a=d},
e9U:function e9U(d){this.a=d},
eat:function eat(){},
ec8:function ec8(d,e){this.a=d
this.b=e},
ecY:function ecY(){},
e9v:function e9v(){},
eaq:function eaq(d,e){this.a=d
this.b=e},
ear:function ear(d){this.a=d},
eas:function eas(){},
ea5:function ea5(){},
ea6:function ea6(d){this.a=d},
eaG:function eaG(){},
eaH:function eaH(d,e){this.a=d
this.b=e},
e9_:function e9_(){},
e8Z:function e8Z(){},
e90:function e90(d){this.a=d},
e8Y:function e8Y(d){this.a=d},
e91:function e91(d){this.a=d},
e8X:function e8X(d){this.a=d},
e92:function e92(d,e){this.a=d
this.b=e},
e8W:function e8W(d){this.a=d},
e93:function e93(d,e){this.a=d
this.b=e},
e8V:function e8V(d,e){this.a=d
this.b=e},
e94:function e94(d){this.a=d},
e8U:function e8U(d){this.a=d},
e9r:function e9r(d){this.a=d},
e9s:function e9s(d){this.a=d},
ebM:function ebM(d,e,f){this.a=d
this.b=e
this.c=f},
ebK:function ebK(d,e,f){this.a=d
this.b=e
this.c=f},
ebL:function ebL(d,e){this.a=d
this.b=e},
ebG:function ebG(d,e,f){this.a=d
this.b=e
this.c=f},
ebF:function ebF(){},
ebH:function ebH(d,e){this.a=d
this.b=e},
ebI:function ebI(d,e){this.a=d
this.b=e},
ebJ:function ebJ(d,e){this.a=d
this.b=e},
ebw:function ebw(d,e){this.a=d
this.b=e},
ebt:function ebt(){},
ebu:function ebu(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ebs:function ebs(d,e,f){this.a=d
this.b=e
this.c=f},
ebv:function ebv(d,e,f){this.a=d
this.b=e
this.c=f},
ebr:function ebr(d,e){this.a=d
this.b=e},
ecI:function ecI(d){this.a=d},
ecG:function ecG(d){this.a=d},
ecH:function ecH(d,e){this.a=d
this.b=e},
ecy:function ecy(d,e,f){this.a=d
this.b=e
this.c=f},
ecx:function ecx(){},
ecz:function ecz(){},
ecA:function ecA(d,e){this.a=d
this.b=e},
ecB:function ecB(d,e){this.a=d
this.b=e},
ecC:function ecC(d){this.a=d},
ecD:function ecD(d){this.a=d},
ecE:function ecE(d){this.a=d},
ecF:function ecF(d){this.a=d},
ecu:function ecu(d){this.a=d},
ecs:function ecs(d){this.a=d},
ect:function ect(){},
eco:function eco(d,e,f){this.a=d
this.b=e
this.c=f},
ecm:function ecm(d){this.a=d},
ecn:function ecn(){},
ecp:function ecp(d,e,f){this.a=d
this.b=e
this.c=f},
ecl:function ecl(d,e){this.a=d
this.b=e},
ecq:function ecq(d,e){this.a=d
this.b=e},
ecr:function ecr(d,e){this.a=d
this.b=e},
ec5:function ec5(d,e){this.a=d
this.b=e},
ec6:function ec6(d){this.a=d},
ec7:function ec7(){},
ecv:function ecv(d,e){this.a=d
this.b=e},
eck:function eck(d,e){this.a=d
this.b=e},
ecc:function ecc(d){this.a=d},
ecd:function ecd(){},
ec4:function ec4(){},
ecb:function ecb(){},
ecT:function ecT(d){this.a=d},
ecU:function ecU(d){this.a=d},
ecV:function ecV(d){this.a=d},
ecW:function ecW(){},
ecM:function ecM(d){this.a=d},
ecN:function ecN(d){this.a=d},
ecO:function ecO(d,e){this.a=d
this.b=e},
ecP:function ecP(d,e){this.a=d
this.b=e},
ecQ:function ecQ(d,e){this.a=d
this.b=e},
ecR:function ecR(d,e){this.a=d
this.b=e},
ecS:function ecS(d,e){this.a=d
this.b=e},
ea4:function ea4(){},
eaL:function eaL(d){this.a=d},
eaI:function eaI(){},
eaJ:function eaJ(){},
eaK:function eaK(){},
eau:function eau(){},
eav:function eav(d){this.a=d},
ec_:function ec_(){},
eao:function eao(d){this.a=d},
ebO:function ebO(){},
ebP:function ebP(d){this.a=d},
ec0:function ec0(d){this.a=d},
ec1:function ec1(d){this.a=d},
eaB:function eaB(d){this.a=d},
eaA:function eaA(d){this.a=d},
eaC:function eaC(d){this.a=d},
ec2:function ec2(d){this.a=d},
ec3:function ec3(){},
eca:function eca(d){this.a=d},
eb_:function eb_(){},
eb0:function eb0(d){this.a=d},
eb8:function eb8(d){this.a=d},
eb9:function eb9(){},
eba:function eba(d){this.a=d},
eb2:function eb2(d){this.a=d},
eb3:function eb3(d,e){this.a=d
this.b=e},
eb1:function eb1(d,e){this.a=d
this.b=e},
eb4:function eb4(d,e){this.a=d
this.b=e},
eb7:function eb7(d){this.a=d},
eb5:function eb5(d){this.a=d},
eaZ:function eaZ(d){this.a=d},
eb6:function eb6(d){this.a=d},
eaM:function eaM(d){this.a=d},
eaN:function eaN(d){this.a=d},
ecX:function ecX(d){this.a=d},
eaP:function eaP(d){this.a=d},
eaO:function eaO(d){this.a=d},
e8r:function e8r(d){this.a=d},
e8q:function e8q(d,e,f){this.a=d
this.b=e
this.c=f},
e8l:function e8l(){},
e8m:function e8m(){},
e8n:function e8n(d){this.a=d},
e8o:function e8o(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eaF:function eaF(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
ecw:function ecw(d,e){this.a=d
this.b=e},
ebD:function ebD(d,e){this.a=d
this.b=e},
ebE:function ebE(d,e){this.a=d
this.b=e},
e8p:function e8p(d,e){this.a=d
this.b=e},
e9B:function e9B(d){this.a=d},
e9C:function e9C(d){this.a=d},
e9D:function e9D(d){this.a=d},
e9E:function e9E(d){this.a=d},
e9F:function e9F(d,e){this.a=d
this.b=e},
e9G:function e9G(d){this.a=d},
e9A:function e9A(d){this.a=d},
e9H:function e9H(d,e){this.a=d
this.b=e},
e9z:function e9z(d,e){this.a=d
this.b=e},
e9I:function e9I(d,e){this.a=d
this.b=e},
e9y:function e9y(d,e){this.a=d
this.b=e},
e9J:function e9J(d){this.a=d},
e9x:function e9x(d){this.a=d},
e9K:function e9K(d,e){this.a=d
this.b=e},
e9w:function e9w(d,e){this.a=d
this.b=e},
e9L:function e9L(d,e){this.a=d
this.b=e},
ed_:function ed_(d){this.a=d},
ed1:function ed1(d){this.a=d},
ecZ:function ecZ(d){this.a=d},
ed0:function ed0(d){this.a=d},
e9d:function e9d(d){this.a=d},
e9e:function e9e(d){this.a=d},
e9f:function e9f(d){this.a=d},
e9j:function e9j(d){this.a=d},
e9k:function e9k(d){this.a=d},
e9l:function e9l(d){this.a=d},
e9c:function e9c(d){this.a=d},
e9m:function e9m(d){this.a=d},
e9b:function e9b(d){this.a=d},
e9n:function e9n(d){this.a=d},
e9a:function e9a(d){this.a=d},
e9o:function e9o(d){this.a=d},
e9p:function e9p(d){this.a=d},
e99:function e99(d){this.a=d},
e9q:function e9q(d){this.a=d},
e98:function e98(d){this.a=d},
e9g:function e9g(d){this.a=d},
e97:function e97(d){this.a=d},
e9h:function e9h(d){this.a=d},
e96:function e96(d){this.a=d},
e9i:function e9i(d){this.a=d},
e95:function e95(d){this.a=d},
e8y:function e8y(d){this.a=d},
e8M:function e8M(d){this.a=d},
e8L:function e8L(){},
e8z:function e8z(d){this.a=d},
e8A:function e8A(d){this.a=d},
e8N:function e8N(){},
e8D:function e8D(d,e){this.a=d
this.b=e},
e8O:function e8O(d){this.a=d},
e8x:function e8x(d){this.a=d},
e8P:function e8P(d){this.a=d},
e8Q:function e8Q(d){this.a=d},
e8w:function e8w(d){this.a=d},
e8R:function e8R(d){this.a=d},
e8S:function e8S(d){this.a=d},
e8B:function e8B(d){this.a=d},
e8v:function e8v(d){this.a=d},
e8C:function e8C(d){this.a=d},
e8u:function e8u(d){this.a=d},
e8E:function e8E(d){this.a=d},
e8F:function e8F(d){this.a=d},
e8G:function e8G(d){this.a=d},
e8H:function e8H(d){this.a=d},
e8I:function e8I(d){this.a=d},
e8J:function e8J(d){this.a=d},
e8K:function e8K(d){this.a=d},
e8t:function e8t(){},
ebC:function ebC(d){this.a=d},
ebz:function ebz(d,e,f){this.a=d
this.b=e
this.c=f},
ebA:function ebA(d,e){this.a=d
this.b=e},
eby:function eby(d){this.a=d},
ebB:function ebB(d,e){this.a=d
this.b=e},
ebx:function ebx(d){this.a=d},
bjT:function bjT(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
dvp:function dvp(d,e){this.a=d
this.b=e},
bji:function bji(d,e){this.b=d
this.a=e},
aJ5:function aJ5(d,e){this.c=d
this.a=e},
btV:function btV(){this.c=this.a=this.d=null},
f5D:function f5D(d,e){this.a=d
this.b=e},
f5C:function f5C(d){this.a=d},
f5F:function f5F(d){this.a=d},
f5G:function f5G(d){this.a=d},
f5H:function f5H(d){this.a=d},
f5E:function f5E(d){this.a=d},
f0a:function f0a(d,e,f){var _=this
_.a=d
_.b=e
_.c=f
_.d=0
_.e=1
_.f=3
_.r=0
_.w=112
_.x=!1},
Ms:function Ms(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
Qq:function Qq(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fxU:function fxU(d,e){this.a=d
this.b=e},
fy0:function fy0(d){this.a=d},
fxW:function fxW(d){this.a=d},
fy1:function fy1(d){this.a=d},
fxV:function fxV(d){this.a=d},
fxS:function fxS(d,e){this.a=d
this.b=e},
fxT:function fxT(d,e){this.a=d
this.b=e},
fxM:function fxM(d,e){this.a=d
this.b=e},
fxY:function fxY(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fy_:function fy_(d){this.a=d},
fxZ:function fxZ(d,e,f){this.a=d
this.b=e
this.c=f},
fxX:function fxX(d,e,f){this.a=d
this.b=e
this.c=f},
fxN:function fxN(){},
fxO:function fxO(d){this.a=d},
fxL:function fxL(){},
fxP:function fxP(d){this.a=d},
fxQ:function fxQ(){},
fxR:function fxR(d){this.a=d},
hiR(){var w=$.hiQ
return w==null?$.hiQ=new A.cgi().$0():w},
ihP(d,e,f){var w,v,u,t,s,r,q,p,o,n=null,m=e.a,l=e.b,k=new C.a3(0,0,0+m,0+l),j=C.bu(k,D.ip)
$.S()
w=C.I()
w.sam(B.c58.aB(0,k))
d.az(j,w)
v=C.I()
v.b=D.ab
v.r=F.fz.gp(0)
v.c=l*0.025
w=l*0.05
j=l*0.08
d.az(C.bu(k.cr(-w),new C.aP(j,j)),v)
w=C.bu(k.cr(-(l*0.1)),new C.aP(w,w))
v.c=l*0.01
d.az(w,v)
u=new C.t(m/2,l/2)
t=l*0.36
l=C.I()
l.r=G.agZ.gp(0)
d.ad(u,t*1.1,l)
l=C.I()
l.r=F.fz.gp(0)
d.ad(u,t,l)
l=C.I()
l.r=B.F4.gp(0)
d.ad(u,t*0.9,l)
l=C.I()
l.b=D.ab
l.r=E.jL.gp(0)
l.c=t*0.04
d.ad(u,t*0.95,l)
s=$.Wh
r=C.bL(u,t*1.2,t*1.5)
if(s!=null){m=s.c
l=s.d
q=Math.min((r.c-r.a)/m,(r.d-r.b)/l)
p=C.bL(r.gbL(),l*q,m*q)
j=C.I()
j.Q=D.cc
d.oz(s,new C.a3(0,0,m,l),p,j)}else{o=C.fv(n,n,n,n,C.cS(n,n,n,n,n,n,n,n,n,C.l(n,n,E.jL,n,n,n,n,n,n,n,n,t*0.6,n,n,D.u,n,n,!0,n,n,n,n,n,n,n,n),"NGMY"),D.a3,D.bZ,n,D.dA,D.bW)
o.el()
m=o.b
l=m.c
m=m.a.c
o.a3(d,u.aF(0,new C.t(l/2,m.gbb(m)/2)))}},
hwS(d,e,f){var w,v,u,t,s,r,q,p,o=null,n=e.ei(D.I),m=e.gdC()/2
$.S()
w=C.I()
w.r=F.fz.gp(0)
d.ad(n,m,w)
w=C.I()
w.r=B.F4.gp(0)
d.ad(n,m*0.9,w)
w=C.I()
w.b=D.ab
w.r=E.jL.gp(0)
w.c=m*0.04
d.ad(n,m*0.93,w)
v=$.Wh
u=C.bL(n,m*1.2,m*1.5)
if(v!=null){w=v.c
t=v.d
s=Math.min((u.c-u.a)/w,(u.d-u.b)/t)
r=C.bL(u.gbL(),t*s,w*s)
q=C.I()
q.Q=D.cc
d.oz(v,new C.a3(0,0,w,t),r,q)}else{p=C.fv(o,o,o,o,C.cS(o,o,o,o,o,o,o,o,o,C.l(o,o,E.jL,o,o,o,o,o,o,o,o,m*0.6,o,o,D.u,o,o,!0,o,o,o,o,o,o,o,o),"NGMY"),D.a3,D.bZ,o,D.dA,D.bW)
p.el()
w=p.b
t=w.c
w=w.a.c
p.a3(d,n.aF(0,new C.t(t/2,w.gbb(w)/2)))}},
H9(d,e,f,g,h){var w,v,u,t,s,r,q,p,o,n,m=null,l=e.a,k=e.b,j=new C.a3(0,0,0+l,0+k),i=e.gdC()*0.08
i=C.bu(j,new C.aP(i,i))
$.S()
w=C.I()
w.sam(B.arc.aB(0,j))
d.az(i,w)
w=j.cr(-(e.gdC()*0.045))
i=e.gdC()*0.06
i=C.bu(w,new C.aP(i,i))
w=C.I()
w.b=D.ab
w.r=F.fz.gp(0)
w.c=e.gdC()*0.035
d.az(i,w)
v=k*0.33
u=new C.t(k*0.6,k*0.5)
w=C.I()
w.r=F.fz.gp(0)
d.ad(u,v,w)
w=C.I()
w.r=B.F4.gp(0)
d.ad(u,v*0.88,w)
t=$.Wh
s=C.bL(u,v*1.15,v*1.4)
if(t!=null){i=t.c
w=t.d
r=Math.min((s.c-s.a)/i,(s.d-s.b)/w)
q=C.bL(s.gbL(),w*r,i*r)
p=C.I()
p.Q=D.cc
d.oz(t,new C.a3(0,0,i,w),q,p)}else{o=C.fv(m,m,m,m,C.cS(m,m,m,m,m,m,m,m,m,C.l(m,m,E.jL,m,m,m,m,m,m,m,m,v*0.55,m,m,D.u,m,m,!0,m,m,m,m,m,m,m,m),"NGMY"),D.a3,D.bZ,m,D.dA,D.bW)
o.el()
i=o.b
w=i.c
i=i.a.c
o.a3(d,u.aF(0,new C.t(w/2,i.gbb(i)/2)))}n=k*1.08
l=new A.fPe(l-n-k*0.2,d,n)
l.$4(g,k*0.36,D.c,k*0.16)
l.$4(h,k*0.14,F.fz,k*0.62)},
hsx(d){return 210+D.o.F(d.l(),5)*24},
fPa(d,e,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k="NEW GLOBAL",j="MOVEMENT",i="FOR YOUTH",h=e.a,g=e.b,f=new C.a3(0,0,0+h,0+g)
A:{if(0===a1){w=B.arc
break A}if(1===a1){w=B.c4Y
break A}w=B.c30
break A}v=e.gdC()*0.06
v=C.bu(f,new C.aP(v,v))
$.S()
u=C.I()
u.sam(w.aB(0,f))
d.az(v,u)
t=C.I()
t.b=D.ab
w=a1===2
t.r=(w?E.jL:F.fz).gp(0)
t.c=e.gdC()*0.04
v=f.cr(-(e.gdC()*0.05))
u=e.gdC()*0.05
d.az(C.bu(v,new C.aP(u,u)),t)
u=f.cr(-(e.gdC()*0.1))
v=e.gdC()*0.03
v=C.bu(u,new C.aP(v,v))
t.c=e.gdC()*0.012
d.az(v,t)
if(a1===1)s=E.jL
else s=w?E.jL:D.c
w=new A.fPc($.Wh,d,s)
v=new A.fPb(s,e,d)
u=g*0.4
r=g*0.12
if(a1===0){q=g*0.5
p=new C.t(g*0.62,q)
o=C.I()
o.r=F.fz.gp(0)
d.ad(p,g*0.34,o)
o=C.I()
o.r=B.F4.gp(0)
d.ad(p,g*0.3,o)
w.$1(C.bL(p,u,q))
n=g*1.04
m=h-r
r=new A.fPd(e)
h=r.$1(k)
q=r.$1(j)
r=r.$1(i)
r=Math.max(C.jV(q),C.jV(r))
l=(n+m)/2
r=g*0.16*Math.min(1,(m-n)/Math.max(C.jV(h),r))
v.$3(k,new C.t(l,g*0.2),r)
v.$3(j,new C.t(l,u),r)
v.$3(i,new C.t(l,g*0.6),r)}else{q=h/2
w.$1(C.bL(new C.t(q,g*0.42),u,h*0.6))
v.$3("NGMY",new C.t(q,g*0.68),r)
v.$4$w(i,new C.t(q,g*0.82),g*0.06,D.Q)}},
hsP(f8,f9,g0,g1,g2,g3,g4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1,e2,e3,e4,e5,e6,e7,e8,e9,f0,f1,f2,f3="walls",f4="GFCI outlet",f5="Wall outlet",f6="\ud83d\udeb0 Needs plumbing",f7=f8.c
if(f7==="outside")return A.i2t(f8,g2,g1,g4,g3,g0)
f8.cIW()
w=x.z
v=C.a([],w)
u=new A.fk(v)
t=C.U(x.S,x.q)
s=C.a([],x.E)
r=C.a([],x.a)
q=f8.gex(0)
p=f8.ghq(0)
o=C.a([],x.O)
for(n=f8.z,m=n.length,l=0;l<n.length;n.length===m||(0,C.M)(n),++l)o.push(B.azq[n[l]])
k=B.az9[f8.Q]
j=new A.fyh(g1)
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
u.n9(new A.q(0,-0.6,n),new A.q(m,1.2,h),g,d,3)
t.n(0,310,new A.cW("Floor","The "+k.a.toLowerCase()+" floor.",new A.q(0,0,n),140))
u.b=0
if(f==="wood")for(f=-q/2,a0=1;a0<8;++a0){e=C.ar(g,D.w,0.25)
e.toString
u.aO(new A.q(f+a0*q/8,0.05,n),new A.q(0.3,0.2,p),e)}else if(e)for(g=-q/2,a0=1;a0<6;++a0){u.aO(new A.q(g+a0*q/6,0.05,n),new A.q(0.3,0.2,p),B.aeD)
u.aO(new A.q(0,0.05,a0*p/6),new A.q(q,0.2,0.3),B.aeD)}u.x=0
g=f7==="hall"
if(g){a1=Math.min(q*0.5,p*1.5)
a2=p-14
f=-a1/2
e=a1/2
r.push(new A.fQ(C.a([new A.q(f,0.5,14),new A.q(e,0.5,14),new A.q(e,0.5,a2),new A.q(f,0.5,a2)],x.o),0,A.hwE(),900,900*(a2-14)/a1,60,-1,i,!1))}u.f=0
u.b=j.$2(f3,300)
a3=u.x=$.dS=$.dS+1
u.hp(new A.q(0,65,-0.6),new A.q(m,130,1.2),o[0],3)
u.x=0
u.b=j.$2(f3,301)
a4=u.x=$.dS=$.dS+1
f=-q
e=f/2
u.hp(new A.q(e-0.6,65,n),new A.q(1.2,130,p),o[1],3)
u.x=0
u.b=j.$2(f3,302)
a5=u.x=$.dS=$.dS+1
d=q/2
u.hp(new A.q(d+0.6,65,n),new A.q(1.2,130,p),o[2],3)
u.x=0
t.n(0,300,B.ebT)
t.n(0,301,B.ebX)
t.n(0,302,B.ec5)
if(f9){u.b=0
u.hp(new A.q(0,65,p+0.6),new A.q(m,130,1.2),o[0],3)}u.f=u.b=0
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
u.hp(new A.q(0,130.6,n),new A.q(m,1.2,h),B.axW[f8.as],2)
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
a6=D.d.b2(h,new A.fy3())?"left":"right"
if(!g){o=new A.fye()
a7=p*0.55
if(f9)D.d.v(v,A.ny(o.$0(),0,3.141592653589793,new A.q(0,0,p+0.2)))
D.d.v(v,a6==="right"?A.ny(o.$0(),0,-1.5707963267948966,new A.q(d,0,a7)):A.ny(o.$0(),0,1.5707963267948966,new A.q(e,0,a7)))}for(o=f8.ax,m=f8.at,a0=0;a0<h.length;++a0){a8=h[a0]
if(a8.a)continue
a9=o.h(0,a0)
if(a9==null)a9=m.t(0,a0)?1.25:0
b0=C.a([],w)
b1=new A.fk(b0)
b1.f=1
b1.x=$.dS=$.dS+1
b2=b1.b=600+a0
b1.aO(B.h8V,B.h8E,B.kA)
b3=C.a([],w)
b4=new A.fk(b3)
b4.r=!0
b4.b=b2
if(a9>0.04){b1.b=0
b5=A.i_u(a8.d)
b6=b5.a
b1.aO(B.h76,B.h3E,b6)
b1.aO(B.h8b,B.heE,b5.b)
b7=C.ar(b6,D.w,0.25)
b7.toString
b1.aO(B.h7i,B.hcA,b7)
b8=-a9
b7=A.vy(B.hez,b8)
b4.wp(new A.q(-12.5+b7.a,0+b7.b,1.2+b7.c),B.h2h,B.vD,0.15,b8)}else{b1.aZ(B.h7m,B.h6l,B.vD,0.15)
b1.aZ(B.h7u,B.h7P,B.EZ,0.8)
b1.aO(B.h7R,B.aXe,B.MI)
b1.aO(B.he1,B.aXe,B.MI)}b7=new A.fyf(a8,q,p)
D.d.v(v,b7.$1(b0))
D.d.v(v,b7.$1(b3))
t.n(0,b2,new A.cW("Door","Tap the door to go through it.",B.aVF,90))}for(o=f8.x,m=o.length,l=0;l<o.length;o.length===m||(0,C.M)(o),++l){b9=o[l]
b0=b9.b
b2=B.hz.h(0,b0)
b2.toString
b3=C.a([],w)
c0=new A.fk(b3)
c0.r=!0
c0.f=b0==="rug"?1:2
b7=100+b9.a
c0.b=j.$2("furniture",b7)
A.h5r(c0,b0,B.zg[b9.f])
D.d.v(v,A.ny(A.i5m(b3,0.8),0,b9.e*3.141592653589793/2,new A.q(b9.c,0,b9.d)))
t.n(0,b7,new A.cW(b2.a,y.M,new A.q(b9.c,12,b9.d),90))}u.f=2
u.r=!0
c1=p*0.5
w=C.T(h)
o=d-10
c2=D.k.E(new C.cQ(new C.Z(h,new A.fy4(),w.k("Z<1>")),new A.fy5(),w.k("cQ<1,K>")).cH(0,e+30,new A.fy6())+24,e+10,o)
c3=f8.go==="fan"
c4=f8.ga66()
c5=c4&&f8.gMf()&&f8.fy
u.b=703
if(c3){u.dN(new A.q(0,129.5,c1),new A.q(0,120,c1),1,B.hq,8)
u.dR(new A.q(0,120,c1),new A.q(0,113,c1),6,D.je,0.5,14)
w=c5?B.o6:D.dv
u.dR(new A.q(0,113,c1),new A.q(0,110,c1),3.6,w,0.6,12)}else{w=c5?B.o6:D.dv
u.dR(new A.q(0,129.5,c1),new A.q(0,127,c1),7,w,0.6,16)}if(c5&&!c3){u.b=0
u.f=3
u.d=0.2
u.L6(new A.q(0,127,c1),new A.q(0,0.5,c1),36,B.o6,!1,14)
u.d=1
u.f=2}c6=c3?"Ceiling fan":"Ceiling light"
if(!c4)c7="It has no power yet. "+(f8.p4.length!==0?"Tap it to wire it.":"The room still needs wiring: use the Wiring button.")
else if(!f8.gMf())c7="It is ready: wire the wall switch to turn it on."
else{w=f8.fy?"It is on. Tap the wall switch (or tap this) to turn it off.":"It is off. Tap the wall switch (or tap this) to turn it on."
c7=w}t.n(0,703,new A.cW(c6,c7,new A.q(0,122,c1),80))
w=f7==="bathroom"
m=!w
c8=!m||f7==="kitchen"||f8.p4==="gfci"
h=f8.ganw()
b0=c8?f4:f5
b2=f8.p4.length!==0||f8.Io(1)
b3=c8?f4:f5
b3=C.a([new C.ea([0,700,f/4,h,b0]),new C.ea([1,701,q/4,b2,b3])],x.az)
for(h=f8.id,a0=0;a0<h.length;++a0){f=h[a0]
b0=f.a
if(b0!=="switch"){b2=f.c
b0=b2.c>=2&&A.Lf(A.t2(b0),b2).a==="ok"
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
if(b2!=null)b2=b2.bid(a0)
else b2=f8.ay?0:2}d3=b2}else d3=0
if(d1)b2=D.be
else b2=d3===1?D.aC:D.aw
u.aO(new A.q(d0,14,0.25),B.h4i,b2)
u.d=1
u.e=0
b2=d1?B.Mx:D.je
u.aZ(new A.q(d0,14,0.9),B.h9o,b2,0.25)
u.b=0
for(d4=0;d4<2;++d4)for(b2=14+F.hy[d4]*2.8,d5=0;d5<2;++d5)u.aO(new A.q(d0+B.Rb[d5],b2,1.7),B.heo,B.agW)
u.aO(new A.q(d0,14,1.7),B.h9m,D.dv)
u.x=0
if(!d1)b2="This one is not wired yet. Tap it to wire it."
else b2=b0.h(0,a0)==null?"Tap it to plug something in.":"Tap it to plug something else in, or to unplug."
t.n(0,c9,new A.cW(d2,b2,new A.q(d0,14,2),60))}f=C.a([new C.bk(702,c2,f8.gMf())],x.al)
for(a0=0;a0<h.length;++a0){b2=h[a0]
b7=b2.a
if(b7==="switch"){d6=b2.c
b7=d6.c>=2&&A.Lf(A.t2(b7),d6).a==="ok"
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
if(b2!=null)b2=b2.bid(3)
else b2=f8.ay?0:2}d7=b2}else d7=0
if(d1)b2=D.be
else b2=d7===1?D.aC:D.aw
u.aO(new A.q(d0,48,0.25),B.h65,b2)
u.d=1
u.e=0
b2=d1?B.Mx:D.je
u.aZ(new A.q(d0,48,0.9),B.h5l,b2,0.25)
u.aO(new A.q(d0,f8.fy&&d1?49.2:46.8,1.9),B.h5c,B.aiI)
u.x=0
if(!d1)b2="Not wired yet. Tap it to wire it."
else if(f8.fy)b2="On. Tap to turn the "+(c3?"fan":"light")+" off."
else b2="Off. Tap to turn the "+(c3?"fan":"light")+" on."
t.n(0,c9,new A.cW("Light switch",b2,new A.q(d0,48,2),60))}if(f8.p4.length===0&&!f8.gkN()){if(f8.p4.length===0)h=f8.gkN()
else h=!0
if(h)d8=D.Y
else{h=C.a([],x.s)
if(!f8.ganw())h.push("outlet 1")
if(!(f8.p4.length!==0||f8.Io(1)))h.push("outlet 2")
if(!f8.ga66())h.push(f8.go==="fan"?"ceiling fan":"ceiling light")
if(!f8.gMf())h.push("switch")
d8=h}h=d8.length===0?"\u26a1 No power: needs wiring":"\u26a1 Still to wire: "+D.d.aH(d8,", ")
s.push(new A.hf(new A.q(0,104,c1),h,D.bx,0))}h=!1
if(f8.p4.length!==0)if(!f8.gz6()){h=f8.p4
h=!(h==="ptrap"||h==="faucet")}if(h)s.push(new A.hf(new A.q(0,40,14),"\ud83d\udc46 Tap the red one to wire it",D.bx,0))
u.f=2
u.r=!0
for(h=b3.length,f=x.o,b2=f8.a,l=0;l<b3.length;b3.length===h||(0,C.M)(b3),++l){b7=b3[l].a
a0=b7[0]
d0=b7[2]
d1=b7[3]
d9=b0.h(0,a0)
if(d9==null||!d1)continue
e0=A.aPR(d9)
b7=u.b=720+a0
u.ji(C.a([new A.q(d0,12,1.8),new A.q(d0,6,3),new A.q(d0,2,11)],f),0.3,B.Yv,!1,0.2,6)
d6=e0.d
e1=d6<=0
if(!e1||e0.e){b8=d6*0.56
e2=$.dS+1
u.x=$.dS=e2
u.aZ(new A.q(d0,2,15),new A.q(d6*0.45,4,14),B.hq,0.3)
u.aZ(new A.q(d0,8,15),B.h3K,B.hq,0.3)
e3=12+b8/2
u.aZ(new A.q(d0,e3,15),new A.q(d6,b8,3),E.Fo,0.5)
d6=(d6-3.5)/2
e4=d0-d6
e5=(b8-3.5)/2
e6=e3+e5
d6=d0+d6
e5=e3-e5
r.push(new A.fQ(C.a([new A.q(e4,e6,16.6),new A.q(d6,e6,16.6),new A.q(d6,e5,16.6),new A.q(e4,e5,16.6)],f),b7,new A.fy7(a0*7+b2),320,180,9,2,e2,!0))
u.x=0}else{d6=e0.a
if(d6==="lamp"){u.dR(new A.q(d0,0,14),new A.q(d0,1,14),6,B.Xt,0.4,14)
u.dR(new A.q(d0,1,14),new A.q(d0,22,14),1,B.Bu,0.5,8)
d6=f8.fy?B.o6:K.YD
u.yQ(new A.q(d0,20,14),new A.q(d0,32,14),9,d6,!1,!0,5.5,0.2,16)}else{u.aZ(new A.q(d0,9,15),B.h_K,B.nV,0.1)
if(d6==="toaster"){u.aZ(new A.q(d0,23,15),B.h_D,B.jI,0.8)
u.aO(new A.q(d0,28.2,15),B.hay,B.ai9)}else{u.BE(new A.q(d0-7,21,15),new A.q(d0+7,21,15),3.6,B.Mq,3,0.6,12)
u.aZ(new A.q(d0-8,14.5,15),B.h7L,B.Mq,0.6)}}}d6=!e1||e0.e?"It is playing NGMY ads. Tap it to watch full screen with the remote.":"It is plugged in and running. Tap the outlet to unplug it or plug in something else."
t.n(0,b7,new A.cW(e0.b,d6,new A.q(d0,16,14),90))}u.f=1
u.r=!1
e7=new A.fy9(f8,u,q,r,t)
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
u.aO(new A.q(e9,125,f0),B.h2L,D.je)
u.wp(new A.q(e9,118,f0),B.fZT,D.bO,0.4,f1)
u.wp(new A.q(e9+Math.sin(f1)*8.5,118,f0+Math.cos(f1)*8.5),B.h3J,D.av,0.6,f1)
u.ed(new A.q(e9-Math.sin(f1)*5+Math.cos(f1)*3,122,f0-Math.cos(f1)*5-Math.sin(f1)*3),1.4,D.aw,3,5)
u.b=u.x=0
t.n(0,g,new A.cW("Hall camera","Tap it and you look from here, like your eyes.",new A.q(e9,118,f0),60))}u.f=2
u.r=!0
if(!m||f7==="kitchen"){f7=f8.p4
f7=f7.length===0||f7==="ptrap"||f7==="faucet"}else f7=!1
if(f7){d1=f8.gjQ()
f7=new A.fyg(u)
if(w){f2=e+17
if(d1){u.b=710
u.BE(new A.q(6,0.5,14),new A.q(6,15,14),8,B.Bb,5.6,0.8,18)
u.dR(new A.q(6,15,14),new A.q(6,16,14),9,B.Mz,0.8,18)
u.aZ(new A.q(6,21,5),B.h_W,B.Bb,0.8)
u.aZ(new A.q(6,28,5),B.h6W,B.Mz,0.8)}else{u.b=710
u.d=0.3
u.f=3
u.aO(new A.q(6,14,9),B.h_N,D.b3)
u.d=1
u.f=2
f7.$2(-4,8)}u.b=711
u.aZ(new A.q(34,14,10),B.h1b,B.nV,0.1)
u.aZ(new A.q(34,29,10),B.h1i,B.Y4,0.4)
if(d1){u.dR(new A.q(34,29.3,10),new A.q(34,30.1,10),6.5,D.c,0.6,18)
u.bk3(C.a([new A.q(34,30,4),new A.q(34,36,4),new A.q(34,38,7)],f),0.6,B.jI,0.9,8)}else{f7.$2(28,18)
f7.$2(40,18)}u.b=712
if(d1){u.aZ(new A.q(f2,8,38),B.aW9,B.YX,0.7)
u.aZ(new A.q(f2,16.2,38),B.hcv,B.XQ,0.8)
u.dR(new A.q(f2,30,3),new A.q(f2,52,3),0.7,B.jI,0.9,8)
u.dR(new A.q(f2,52,3),new A.q(f2,52,10),0.7,B.jI,0.9,8)}else{u.d=0.3
u.f=3
u.aO(new A.q(f2,8,38),B.aW9,D.b3)
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
u.aZ(new A.q(e+15,36,14),B.h0O,B.agH,0.6)
u.aO(new A.q(e+28.5,36,14.4),B.h93,D.dv)
u.aZ(new A.q(o,15,14),B.h0l,B.af5,0.1)
u.aZ(new A.q(o,31,14),B.h0w,B.hq,0.5)
u.aZ(new A.q(d-15,32.4,14),B.aWz,D.hX,0.3)
u.aZ(new A.q(d-5,32.4,14),B.aWz,D.hX,0.3)
u.b=713
u.aZ(new A.q(30,15,14),B.h1T,B.nV,0.1)
u.aZ(new A.q(30,31,14),B.h1X,B.Mc,0.5)
if(d1){u.dR(new A.q(30,32.1,14),new A.q(30,32.7,14),8,B.Fi,0.8,18)
u.bk3(C.a([new A.q(30,32,5),new A.q(30,42,5),new A.q(30,44,9),new A.q(30,44,13)],f),0.7,B.jI,0.9,8)}else{f7.$2(22,18)
f7.$2(38,18)}f7=d1?"The faucet, the hoses and the drain are fitted.":"The kitchen sink is not plumbed yet. Use the Plumbing button."
t.n(0,713,new A.cW("Kitchen sink",f7,new A.q(30,30,14),70))
if(!d1)s.push(new A.hf(new A.q(30,48,14),f6,D.bk,0))}}for(f7=D.d.gaf(g3),w=new C.f5(f7,new A.fy8(f8));w.C();){o=f7.gT(0)
t.n(0,900+o.a,new A.cW(o.r,"Tap to see how they are, feed them or give medicine.",new A.q(o.c,36,o.d),90))}return new A.tP(v,t,s,r,new C.cw([e,d,0,p]),0)},
kI(d,e,f,g,h,i,j,k,l){var w=-h/2,v=i/2,u=h/2,t=-i/2
d.cWQ(e.a9(0,f.aI(0,w)).a9(0,g.aI(0,v)),e.a9(0,f.aI(0,u)).a9(0,g.aI(0,v)),e.a9(0,f.aI(0,u)).a9(0,g.aI(0,t)),e.a9(0,f.aI(0,w)).a9(0,g.aI(0,t)),j,k,l)},
i2t(d6,d7,d8,d9,e0,e1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5=-158,c6=1000,c7=x.z,c8=C.a([],c7),c9=new A.fk(c8),d0=x.S,d1=C.U(d0,x.q),d2=C.a([],x.E),d3=d6.gex(0),d4=d6.ghq(0),d5=new A.frf(d8)
c9.f=0
c9.b=d5.$2("floor",310)
c9.hp(new A.q(0,-0.6,d4/2-60),new A.q(d3*2.5,1.2,d4*2.5),B.Xw,5)
d1.n(0,310,B.ec0)
c9.b=0
c9.f=1
c9.aO(new A.q(0,0.15,60),B.h5a,E.F1)
for(w=0;w<6;++w)c9.aO(new A.q(0,0.35,8+w*22),B.h9q,B.bor)
c9.f=2
v=$.dS+1
c9.x=$.dS=v
c9.hp(B.fZj,B.h0C,B.M7,3)
c9.aO(B.fYP,B.h0D,B.ael)
u=new A.frg(c9)
t=new A.frb(c9)
for(s=0;s<4;++s){r=B.dm4[s]
u.$5(B.dX,B.hF,B.iq,r,62)
u.$5(B.dX,B.hF,B.iq,r,122)}t.$5(B.dX,B.hF,B.iq,0,600)
for(s=0;s<2;++s){r=B.aAr[s]
u.$5(B.aaI,B.qQ,B.te,r,62)
u.$5(B.aaI,B.qQ,B.te,r,122)}t.$5(B.aaI,B.qQ,B.te,0,0)
for(s=0;s<2;++s){q=B.a52[s]
u.$5(B.h_2,B.te,B.hF,q,62)
u.$5(B.hbj,B.iq,B.qQ,-q,62)}p=C.a([],c7)
new A.fk(p).n9(B.dX,B.h0L,B.Ma,0.1,2)
c9.a74(B.hb9,B.h9Q,B.h92,B.M7,B.hF,!1)
c9.a74(B.h98,B.h2T,B.h9u,B.M7,B.qQ,!1)
c9.x=0
c9.r=!0
D.d.v(c8,A.ny(p,0.5,0,B.fY_))
D.d.v(c8,A.ny(p,-0.5,0,B.fY0))
c9.aO(B.fY2,B.h0K,B.Y0)
c9.aO(B.h3n,B.h_w,B.ahJ)
c9.aO(B.h3o,B.aVV,B.q4)
c9.aO(B.fYB,B.h2n,E.F1)
c9.dN(B.hby,B.hbz,2.2,B.kA,8)
c9.dN(B.h0n,B.h0o,2.2,B.kA,8)
c9.aZ(B.fZs,B.h2w,B.Ma,0.1)
d1.n(0,600,B.ecC)
p=x.a
o=C.a([],p)
n=new A.frc(o,v)
n.$4(B.h4W,B.h9A,B.hah,B.h89)
n.$5$poster(B.h3j,B.h26,B.h49,B.ha5,1)
n.$5$poster(B.h5X,B.h6b,B.h4y,B.ha2,2)
n.$5$poster(B.hac,B.heM,B.h7G,B.h9z,0)
c9.r=!0
m=C.U(d0,d0)
for(d0=d6.x,l=d0.length,s=0;s<d0.length;d0.length===l||(0,C.M)(d0),++s){k=d0[s]
j=k.a
i=100+j
if(e1.t(0,i))continue
h=k.b
if(D.d.t(B.HV,h)){d1.n(0,i,new A.cW(B.hz.h(0,h).a,"It wanders about. Move it with the arrow buttons or take it out.",new A.q(k.c,12,k.d),140))
continue}g=B.hz.h(0,h)
g.toString
f=C.a([],c7)
e=new A.fk(f)
d=e.r=!0
e.f=D.d.t(B.a5d,h)?1:2
a0=h==="hospital"
e.b=(!a0?h==="shop":d)?i:d5.$2("furniture",i)
A.h5r(e,h,B.zg[k.f])
if(f.length!==0)m.n(0,j,D.d.gI(f).z)
D.d.v(c8,A.ny(f,0,k.e*3.141592653589793/2,new A.q(k.c,0,k.d)))
if(a0)j="The hospital: tap it to see the beds and treat the patients."
else j=h==="shop"?"The shop: tap it to buy food and medicine.":y.M
d1.n(0,i,new A.cW(g.a,j,new A.q(k.c,12,k.d),140))}a1=C.a([],x._)
for(l=D.d.gaf(d0),j=new C.f5(l,new A.fqD()),i=d6.k3;j.C();){h=l.gT(0)
g=h.a
a2=i.t(0,g)
f=h.b==="pole"
d=h.c
a0=h.d
a3=f?new A.q(d+20,86,a0):new A.q(d,55,a0)
d=C.a([],c7)
a4=new A.fk(d)
a0=f?4.6:4.2
a5=a2?D.e8:B.o6
a4.fV(a3,a0,a5,3,6,a2?0.1:0)
if(!a2){a4.d=0.2
a4.fV(a3,10,B.o6,2,6,0)
a4.d=1}D.d.v(c8,d)
if(a2)d2.push(new A.hf(new A.q(a3.a+0,a3.b+14,a3.c+0),"\u26a1 Light out: tap to go and fix it",D.bx,2e4+g))
if(f)a1.push(h)}D.d.aW(a1,new A.fqE())
for(l=x.o,w=0;a6=w+1,a6<a1.length;w=a6){a7=a1[w]
a8=a1[a6]
if(Math.abs(a7.d-a8.d)>1||Math.abs(a8.c-a7.c)>170)continue
j=C.a([],c7)
a9=new A.fk(j)
for(s=0;s<3;++s){b0=B.aAn[s]
i=a7.c
h=a7.d
g=a8.c
a9.ji(C.a([new A.q(i+b0,121,h),new A.q((i+g)/2+b0,117,h),new A.q(g+b0,121,h)],l),0.35,D.av,!1,0,4)}D.d.v(c8,j)}for(j=D.d.gaf(d0),i=new C.f5(j,new A.fqF(d6)),h=d6.cy;i.C();){g=j.gT(0)
f=g.c
d=g.b==="hq"?190:130
a0=g.d
g=g.a
d2.push(new A.hf(new A.q(f,d,a0+40),"\u26a1 Level "+C.w(h.h(0,g))+" has no power: tap to go and fix it",D.bx,2e4+g))}for(j=D.d.gaf(d0),i=new C.f5(j,new A.fqQ(d6));i.C();){h=j.gT(0)
g=h.b
f=B.hz.h(0,g)
f.toString
d=h.c
g=g==="bighouse"?120:82
d2.push(new A.hf(new A.q(d,g,h.d),"\u26a1 No power: tap to go in and fix it",D.bx,2e4+h.a))
g=C.a([],c7)
b1=new A.fk(g)
b1.d=0.45
d=h.c
b1.aO(new A.q(d,30,h.d),new A.q(f.c+2,60,f.d+2),D.df)
b1.d=1
D.d.v(c8,g)}if(d6.c==="outside")D.d.v(c8,A.i8j())
b2=C.a([],p)
for(c7=D.d.gaf(d0),d0=new C.f5(c7,new A.fr0());d0.C();){p=c7.gT(0)
d3=new A.fre(p.e*3.141592653589793/2,p)
b3=m.h(0,p.a)
if(b3==null)b3=0
j=p.b
if(j==="billboard"){b2.push(new A.fQ(C.a([d3.$3(-33,62.5,2),d3.$3(33,62.5,2),d3.$3(33,31.5,2),d3.$3(-33,31.5,2)],l),0,new A.fr5(p),960,450,4,2,b3,!1))
b2.push(new A.fQ(C.a([d3.$3(33,62.5,-2),d3.$3(-33,62.5,-2),d3.$3(-33,31.5,-2),d3.$3(33,31.5,-2)],l),0,new A.fr6(p),960,450,4,2,b3,!1))}else{i=j==="townsign"
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
b2.push(new A.fQ(C.a([d3.$3(p,j,b7),d3.$3(b4,j,b7),d3.$3(b4,i,b7),d3.$3(p,i,b7)],l),0,new A.fr7(b8),b9,c0,4,2,b3,!1))
h=-b7
b2.push(new A.fQ(C.a([d3.$3(b4,j,h),d3.$3(p,j,h),d3.$3(p,i,h),d3.$3(b4,i,h)],l),0,new A.fr8(b8),b9,c0,4,2,b3,!1))}else if(j==="adboard"){b2.push(new A.fQ(C.a([d3.$3(c5,195,3.6),d3.$3(158,195,3.6),d3.$3(158,90,3.6),d3.$3(c5,90,3.6)],l),0,new A.fr9(p),1280,424,4,2,b3,!1))
b2.push(new A.fQ(C.a([d3.$3(158,195,-3.6),d3.$3(c5,195,-3.6),d3.$3(c5,90,-3.6),d3.$3(158,90,-3.6)],l),0,new A.fra(p),1280,424,4,2,b3,!1))}else if(j==="tower"){c1=210+D.o.F(B.zg[p.f].l(),5)*24
j=c1-8
i=c1-54
b2.push(new A.fQ(C.a([d3.$3(-40,j,35.9),d3.$3(40,j,35.9),d3.$3(40,i,35.9),d3.$3(-40,i,35.9)],l),0,new A.fqG(p),800,460,8,2,b3,!1))
b2.push(new A.fQ(C.a([d3.$3(40,j,-35.9),d3.$3(-40,j,-35.9),d3.$3(-40,i,-35.9),d3.$3(40,i,-35.9)],l),0,new A.fqH(p),800,460,8,2,b3,!1))
b2.push(new A.fQ(C.a([d3.$3(50.9,j,28),d3.$3(50.9,j,-28),d3.$3(50.9,i,-28),d3.$3(50.9,i,28)],l),0,new A.fqI(p),640,460,8,2,b3,!1))
b2.push(new A.fQ(C.a([d3.$3(-50.9,j,-28),d3.$3(-50.9,j,28),d3.$3(-50.9,i,28),d3.$3(-50.9,i,-28)],l),0,new A.fqJ(p),640,460,8,2,b3,!1))
i=c1+58
j=c1+22
b2.push(new A.fQ(C.a([d3.$3(-40,i,1.7),d3.$3(40,i,1.7),d3.$3(40,j,1.7),d3.$3(-40,j,1.7)],l),0,new A.fqK(p),960,400,8,2,b3,!1))
b2.push(new A.fQ(C.a([d3.$3(40,i,-1.7),d3.$3(-40,i,-1.7),d3.$3(-40,j,-1.7),d3.$3(40,j,-1.7)],l),0,new A.fqL(p),960,400,8,2,b3,!1))}else if(j==="hq"){b2.push(new A.fQ(C.a([d3.$3(-70,108,45.9),d3.$3(70,108,45.9),d3.$3(70,52,45.9),d3.$3(-70,52,45.9)],l),0,new A.fqM(),c6,400,8,2,b3,!1))
b2.push(new A.fQ(C.a([d3.$3(-48,215,30.2),d3.$3(48,215,30.2),d3.$3(48,175,30.2),d3.$3(-48,175,30.2)],l),0,new A.fqN(),900,380,8,2,b3,!1))
b2.push(new A.fQ(C.a([d3.$3(70,108,-45.9),d3.$3(-70,108,-45.9),d3.$3(-70,52,-45.9),d3.$3(70,52,-45.9)],l),0,new A.fqO(),c6,400,8,2,b3,!1))
b2.push(new A.fQ(C.a([d3.$3(48,215,-30.2),d3.$3(-48,215,-30.2),d3.$3(-48,175,-30.2),d3.$3(48,175,-30.2)],l),0,new A.fqP(),900,380,8,2,b3,!1))
b2.push(new A.fQ(C.a([d3.$3(-54,328,1.7),d3.$3(54,328,1.7),d3.$3(54,294,1.7),d3.$3(-54,294,1.7)],l),0,new A.fqR(p),c6,360,8,2,b3,!1))
b2.push(new A.fQ(C.a([d3.$3(54,328,-1.7),d3.$3(-54,328,-1.7),d3.$3(-54,294,-1.7),d3.$3(54,294,-1.7)],l),0,new A.fqS(p),c6,360,8,2,b3,!1))
b2.push(new A.fQ(C.a([d3.$3(85.9,118,36),d3.$3(85.9,118,-36),d3.$3(85.9,62,-36),d3.$3(85.9,62,36)],l),0,new A.fqT(p),720,560,8,2,b3,!1))
b2.push(new A.fQ(C.a([d3.$3(-85.9,118,-36),d3.$3(-85.9,118,36),d3.$3(-85.9,62,36),d3.$3(-85.9,62,-36)],l),0,new A.fqU(p),720,560,8,2,b3,!1))}else if(j==="store")b2.push(new A.fQ(C.a([d3.$3(-54,85,37.7),d3.$3(54,85,37.7),d3.$3(54,67,37.7),d3.$3(-54,67,37.7)],l),0,new A.fqV(),900,150,6,2,b3,!1))
else if(j==="ubstation"){b2.push(new A.fQ(C.a([d3.$3(40,106,31.9),d3.$3(76,106,31.9),d3.$3(76,86,31.9),d3.$3(40,86,31.9)],l),0,new A.fqW(),480,270,8,2,b3,!1))
b2.push(new A.fQ(C.a([d3.$3(76,106,28.1),d3.$3(40,106,28.1),d3.$3(40,86,28.1),d3.$3(76,86,28.1)],l),0,new A.fqX(),480,270,8,2,b3,!1))}else if(j==="dmv")b2.push(new A.fQ(C.a([d3.$3(-50,85,38.6),d3.$3(50,85,38.6),d3.$3(50,67,38.6),d3.$3(-50,67,38.6)],l),0,new A.fqY(),900,160,8,2,b3,!1))
else if(j==="gasstation")b2.push(new A.fQ(C.a([d3.$3(-86,107,35.7),d3.$3(-54,107,35.7),d3.$3(-54,85,35.7),d3.$3(-86,85,35.7)],l),0,new A.fqZ(),480,330,6,2,b3,!1))
else for(c2=0;c2<2;++c2){c3=c2===0?-40:40
j=c3-26
i=c3+26
b2.push(new A.fQ(C.a([d3.$3(j,70,60.7),d3.$3(i,70,60.7),d3.$3(i,40,60.7),d3.$3(j,40,60.7)],l),0,new A.fr_(p,c2),720,520,9,2,b3,!1))}}}for(c7=D.d.gaf(e0),d0=new C.f5(c7,new A.fr1(d6));d0.C();){p=c7.gT(0)
d2.push(new A.hf(new A.q(p.c,82,p.d),p.Q,D.cO,0))}for(c7=D.d.gaf(e0),d0=new C.f5(c7,new A.fr2(d6));d0.C();){p=c7.gT(0)
d2.push(new A.hf(new A.q(p.c,80,p.d),"\ud83d\udcde Help!",D.bx,0))}c7=d7===0
d0=c7?"\u2705 The house is finished":"\ud83c\udfe0 "+d7+" rooms still need work"
d2.push(new A.hf(B.fYi,d0,c7?D.cV:D.dY,0))
c4=c9.x=$.dS=$.dS+1
for(s=0;s<2;++s){r=B.aAr[s]
c9.dN(new A.q(r,0,-118),new A.q(r,215,-118),3,D.je,8)}c9.aZ(B.Ap,B.h0I,D.av,0.3)
c9.x=0
o.push(new A.fQ(B.cOm,0,new A.fr3(),c6,336,4,2,c4,!1))
o.push(new A.fQ(B.diE,0,new A.fr4(),c6,336,4,2,c4,!1))
c7=C.C(o,x.K)
D.d.v(c7,b2)
return new A.tP(c8,d1,d2,c7,null,4000)},
i9f(a5,a6,a7,a8,a9,b0,b1,b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=x.z,a3=C.a([],a2),a4=new A.fk(a3)
a4.r=!0
if(a5.c==="outside"){w=new A.fBg(b1)
v=b1!=null
if(v&&b1.a===a5.a)A.wO(a4,b1,a6,b2,!0,0,null)
if(a7&&v&&b1.a===a5.a){v=C.a([],a2)
u=b1.b
t=b1.d
new A.fk(v).aO(new A.q(u+Math.sin(t)*9,46+b1.y,b1.c+Math.cos(t)*9),B.aVU,B.ju)
D.d.v(a3,v)}if(a9!=null){v=C.a([],a2)
s=new A.fk(v)
s.r=!0
u=a9.a
A.h5r(s,u[0],B.zg[u[4]])
D.d.v(a3,A.ny(v,0,u[3]-1.5707963267948966,new A.q(u[1],0,u[2])))}for(v=D.d.gaf(a5.x),u=new C.f5(v,new A.fBd()),t=a6*6,r=b0==="furniture";u.C();){q=v.gT(0)
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
A.hnV(h,q.b,B.zg[q.f],Math.sin(t+p)*0.5)
D.d.v(a3,A.ny(i,0,j,new A.q(n+m*10,0,l+k*10)))}for(v=D.d.gaf(b3),u=new C.f5(v,new A.fBe(a5)),t=a5.a;u.C();){r=v.gT(0)
q=r.c
p=r.d
n=r.e
m=r.f
l=r.a
A.wO(a4,new A.y4(t,q,p,n,!1,!1,!1,!1,!1,0,!1,!1,"","",-1,0,-1,0),a6,m,w.$2(q,p),900+l,m.c)
A.hXd(a4,r,a6)}for(v=a8.length,g=0;g<a8.length;a8.length===v||(0,C.M)(a8),++g){f=a8[g]
u=f.b
r=f.c
q=f.d
A.wO(a4,new A.y4(t,u,r,q,f.f,!1,!1,!1,!1,0,!1,!1,"","",-1,0,-1,f.e),a6,f.w,w.$2(u,r),0,f.x)
if(f.r){p=C.a([],a2)
new A.fk(p).aO(new A.q(u+Math.sin(q)*9,46,r+Math.cos(q)*9),B.h_h,F.fz)
D.d.v(a3,p)}}return a3}if(b1!=null&&b1.a===a5.a)A.wO(a4,b1,a6,b2,!0,0,null)
for(a2=D.d.gaf(b3),v=new C.f5(a2,new A.fBf(a5)),u=a5.a,t=a6*0.5;v.C();){r=a2.gT(0)
q=r.y
p=q>0
e=p?Math.sin(t+r.a)*q:0
q=r.c
n=r.d
if(p)m=Math.cos(t+r.a)>=0?1.5707963267948966:-1.5707963267948966
else m=r.x?0.5:r.e
A.wO(a4,new A.y4(u,q+e,n,m,p,!1,!1,!1,r.x,0,!1,!1,"","",-1,0,-1,0),a6,r.f,!0,900+r.a,null)}d=a5.ghq(0)
if(a5.go==="fan"){a0=a5.ga66()&&a5.gMf()&&a5.fy?a6*7:0
a4.b=703
for(a2=d*0.5,a1=0;a1<4;++a1){o=a0+a1*3.141592653589793/2
a4.wp(new A.q(Math.cos(o)*15,115,a2+Math.sin(o)*15),B.hdX,B.nV,0.1,-o)}}return a3},
i_u(d){var w
A:{if(5===d){w=B.eLM
break A}if(9===d){w=B.eQP
break A}if(10===d){w=B.eE5
break A}if(11===d){w=B.eRN
break A}if(2===d||4===d||8===d){w=B.etI
break A}w=B.eGK
break A}return w},
fx8(b0,b1,b2,b3,b4,b5,b6,b7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9
for(w=b2.a,v=b2.b,u=b2.c,t=b1.a,s=b1.b,r=b1.c,q=b3.a,p=q*0.1,o=b3.b,n=o*0.1,m=b3.c,l=m*0.1,k=q*0.2,j=o*0.2,i=m*0.2,q*=0.3,o*=0.3,m*=0.3,h=-b4/2,g=b5-1,f=b5===1,e=0;e<b5;++e){d=f?0:h+b4*e/g
for(a0=b6.length,a1=s+v*d,a2=t+w*d+0,a3=r+u*d+0,a4=a2+p,a5=a3+l,a6=a2+k,a7=a3+i,a2+=q,a3+=m,a8=0;a8<b6.length;b6.length===a0||(0,C.M)(b6),++a8){a9=a1+b6[a8]
A.kI(b0,new A.q(a4,a9+n,a5),b2,B.eb,14,17,B.kA,b3,0)
A.kI(b0,new A.q(a6,a9+j,a7),b2,B.eb,11,14,b7,b3,0.6)
A.kI(b0,new A.q(a2,a9+o,a3),b2,B.eb,11,0.9,B.kA,b3,0)}}},
hop(a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0
A:{if("shop"===a2){w=B.eZs
break A}if("hospital"===a2){w=B.eZn
break A}if("firestation"===a2){w=B.eZ4
break A}if("school"===a2){w=B.eYY
break A}w=B.eYH
break A}w=w.a
v=w[0]
u=w[1]
t=w[2]
s=w[3]
r=w[4]
q=u/2
p=v/2
a1.x=$.dS=$.dS+1
a1.hp(new A.q(0,t/2,0),new A.q(v,t,u),s,2)
a1.aO(new A.q(0,2.5,0),new A.q(v+3,5,u+3),B.ael)
w=a2==="hospital"
if(w)o=C.a([14,30,46],x.n)
else if(a2==="school"){n=C.a([14,32],x.n)
o=n}else{n=x.n
n=a2==="house2"?C.a([26],n):C.a([22],n)
o=n}m=D.o.E(D.k.bh(v/24),2,5)
n=a2==="firestation"
l=n?C.a([34],x.n):o
k=v-30
A.fx8(a1,new A.q(0,0,q).a9(0,B.dX),B.hF,B.iq,k,m,l,B.hW)
j=q+0.4
if(n){A.kI(a1,new A.q(-14,17,j),B.hF,B.eb,34,34,D.hg,B.iq,0.2)
for(i=q+0.5,h=0;h<6;++h)A.kI(a1,new A.q(-14,4+h*6,i),B.hF,B.eb,33,0.8,D.dv,B.iq,0)
A.kI(a1,new A.q(24,15,j),B.hF,B.eb,14,30,B.vD,B.iq,0)}else{A.kI(a1,new A.q(0,14,q+0.3),B.hF,B.eb,18,28,B.kA,B.iq,0)
A.kI(a1,new A.q(0,13,j),B.hF,B.eb,14,26,B.vD,B.iq,0.2)}switch(a2){case"hospital":i=t-8
A.kI(a1,new A.q(0,i,j),B.hF,B.eb,30,9,D.bx,B.iq,0)
j=q+0.5
A.kI(a1,new A.q(0,i,j),B.hF,B.eb,24,2.6,D.c,B.iq,0)
A.kI(a1,new A.q(0,i,j),B.hF,B.eb,2.6,7,D.c,B.iq,0)
break
case"shop":for(i=q+3,h=0;h<6;++h){g=(h&1)===0?D.aw:D.c
A.kI(a1,new A.q(-30+h*12,33,i),B.hF,B.eb,6,6,g,B.iq,0)}A.kI(a1,new A.q(0,t-4,j),B.hF,B.eb,36,6,a3,B.iq,0)
break
case"firestation":A.kI(a1,new A.q(0,t-5,j),B.hF,B.eb,40,7,D.bG,B.iq,0)
break
case"school":A.kI(a1,new A.q(0,t-5,j),B.hF,B.eb,40,7,D.bk,B.iq,0)
break}j=-q
A.fx8(a1,new A.q(0,0,j),B.qQ,B.te,k,m,l,B.hW)
A.kI(a1,new A.q(0,13,j-0.4),B.qQ,B.eb,14,26,B.vD,B.te,0)
f=D.o.E(D.k.bh(u/24),1,3)
k=u-26
A.fx8(a1,new A.q(p,0,0),B.te,B.hF,k,f,l,B.hW)
i=-p
A.fx8(a1,new A.q(i,0,0),B.iq,B.qQ,k,f,l,B.hW)
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
D.d.v(n,A.ny(w,0.42,0,new A.q(0,k,u*0.25)))
a0=-u
D.d.v(n,A.ny(w,-0.42,0,new A.q(0,k,a0*0.25)))
k=p+0.2
w=t+12
a1.a74(new A.q(k,t,q),new A.q(k,t,j),new A.q(k,w,0),s,B.hF,!1)
i-=0.2
a1.a74(new A.q(i,t,j),new A.q(i,t,q),new A.q(i,w,0),s,B.qQ,!1)
if(a2==="school"){w=q-10
e.aO(new A.q(0,t+18,w),B.h_L,D.ag4)
e.aO(new A.q(0,t+30,w),B.h0y,r)
e.dN(new A.q(0,t+31,w),new A.q(0,t+46,w),0.6,D.dv,6)
e.aO(new A.q(5,t+44,w),B.haf,D.aw)}else e.aO(new A.q(v*0.28,t+14,a0*0.1),B.h4a,B.ahJ)}else{k=v+2
e.aZ(new A.q(0,t+1.5,0),new A.q(k,3,u+2),r,0.05)
e.aO(new A.q(0,t+4,q+0.5),new A.q(k,4,1.4),a3)
if(w){w=v*0.25
k=-u*0.15
e.aO(new A.q(w,t+5,k),B.h0N,D.br)
e.aO(new A.q(w,t+6.2,k),B.hat,D.c)}if(n){w=p-10
n=-u*0.2
e.aO(new A.q(w,t+16,n),B.h_v,B.agz)
e.aO(new A.q(w,t+32,n),B.aVV,r)}}D.d.v(a1.a,g)},
i4p(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=d.f,f=d.e
d.f=1
d.e=0
if(e==="road"){d.GD(B.h6Z,B.h7Z,B.h61,B.h8i,B.Mm,B.eb)
d.e=90
for(w=0;w<2;++w){v=B.Rb[w]
u=v-0.7
t=v+0.7
d.GD(new A.q(-20,0.9,u),new A.q(20,0.9,u),new A.q(20,0.9,t),new A.q(-20,0.9,t),K.M0,B.eb)}for(w=0;w<2;++w){v=B.dlT[w]
u=v-0.8
t=v+0.8
d.GD(new A.q(-20,0.9,u),new A.q(20,0.9,u),new A.q(20,0.9,t),new A.q(-20,0.9,t),D.bO,B.eb)}d.f=g
d.e=f
return}d.GD(B.h88,B.hej,B.h6_,B.h4E,B.Mm,B.eb)
d.e=90
A:{if("roadturn"===e){u=B.dkB
break A}if("roadtee"===e){u=B.d1M
break A}u=B.ciM
break A}for(t=u.length,w=0;w<t;++w){s=u[w]
r=s.a
q=s.b
for(s=q!==0,p=r!==0,o=30*r,n=30*q,m=0;m<2;++m){l=B.Rb[m]
k=p?o:l
j=s?n:l
i=p?36:1.4
h=s?36:1.4
d.aO(new A.q(k,0.95,j),new A.q(i,0.1,h),K.M0)}}d.f=g
d.e=f},
hnV(d,e,f,g){var w=new A.fhw(d,g)
switch(e){case"dog":d.aZ(B.x7,B.hdA,f,0.05)
d.ed(B.h5g,3.4,f,4,8)
d.aO(B.h8x,B.h46,D.Mg)
d.aO(B.h9V,B.aWF,B.hq)
d.aO(B.hev,B.aWF,B.hq)
d.dN(B.haJ,B.fXX,0.8,f,5)
w.$5(B.djl,6,6,1.7,f)
break
case"cat":d.aZ(B.Aq,B.h41,f,0.05)
d.ed(B.fZl,2.7,f,4,8)
d.aO(B.hd5,B.aVY,f)
d.aO(B.hd9,B.aVY,f)
d.dN(B.fZk,B.fXP,0.7,f,5)
w.$5(B.dh_,4,4,1.2,f)
break
case"cow":d.aZ(B.aaK,B.h_r,D.bN,0.05)
d.aO(B.hdj,B.hcD,B.hq)
d.aO(B.h6F,B.h44,B.hq)
d.aO(B.fYc,B.h4f,D.bN)
d.aO(B.fY3,B.heO,D.nU)
d.aO(B.h4v,B.aVZ,D.bO)
d.aO(B.hep,B.aVZ,D.bO)
d.dN(B.fYf,B.fZn,0.7,B.hq,5)
w.$5(B.d5y,11,11,3.2,D.bO)
break
case"sheep":d.ed(B.aaJ,8.5,D.pX,4,8)
d.ed(B.fXV,7,D.pX,4,8)
d.ed(B.fXR,3.4,B.hq,4,8)
w.$5(B.djf,8,8,1.8,B.hq)
break
case"chicken":d.ed(B.Aq,4,f,4,8)
d.ed(B.fXC,2.2,f,3,6)
d.aO(B.fXM,B.hcy,D.bx)
d.aO(B.h5p,B.h4Z,D.aC)
d.aO(B.fZp,B.h2j,f)
w.$5(B.d3A,3,3,0.8,D.aC)
break
case"horse":d.aZ(B.fYj,B.h_0,f,0.1)
d.L7(B.fYt,B.fYK,4.2,f,3,8)
d.aO(B.fYM,B.h2Q,f)
d.aO(B.fYV,B.hcx,B.hq)
d.dN(B.fYy,B.fZo,1.8,B.hq,6)
w.$5(B.d2V,16,16,2.6,f)
break
default:d.aO(B.Aq,B.h4d,f)}},
bCl(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=C.a([],x.z)
for(w=d.length,v=e.a,u=e.b,t=e.c,s=f.a,r=f.b,q=f.c,p=x.o,o=0;o<d.length;d.length===w||(0,C.M)(d),++o){n=d[o]
m=C.a([],p)
for(l=n.a,k=l.length,j=0;j<l.length;l.length===k||(0,C.M)(l),++j){i=l[j]
m.push(new A.q(s+(i.a-s)*v,r+(i.b-r)*u,q+(i.c-q)*t))}l=n.b
h.push(new A.ko(m,new A.q(l.a/v,l.b/u,l.c/t).gmR(0),n.c,n.d,n.e,n.f,n.r,n.w,n.x,n.y,n.z))}return h},
hXd(d,e,f){var w,v,u,t,s,r=e.z
if(r.length===0)return
w=e.e
v=new A.fhm(e,Math.sin(w),Math.cos(w))
u=d.b
d.b=0
switch(r){case"feed":d.L7(v.$3(14,0,8),v.$3(14,9,8),4.5,B.nV,5.5,10)
for(r=f*0.9,t=0;t<9;++t){s=D.k.F(r+t/9,1)
d.fV(v.$3(10+s*26,26-s*22,Math.sin(t*2.1)*4),0.9,D.mv,3,5,0)}break
case"cook":d.aZ(v.$2(18,9),B.h0v,D.je,0.2)
d.aO(v.$2(18,18.4),B.h3P,D.fr)
d.d=0.3
for(r=f*0.5,t=0;t<6;++t){s=D.k.F(r+t/6,1)
d.fV(v.$2(18+Math.sin(t*1.9)*3,22+s*22),2+s*4,D.F5,3,6,0)}d.d=1
break
case"wash":d.L7(v.$3(20,0,-10),v.$3(20,8,-10),4,D.aQ,5,10)
for(r=f*1.4,t=0;t<12;++t){s=D.k.F(r+t/12,1)
d.fV(v.$3(8+s*24,30-s*s*26,6),0.8,D.hf,3,5,0.3)}break
case"water":d.aZ(v.$3(12,22,7),B.h4c,D.ed,0.2)
for(r=f*1.2,t=0;t<10;++t){s=D.k.F(r+t/10,1)
d.fV(v.$3(18+s*8,22-s*22,7),0.7,D.hf,3,5,0.3)}break
case"teach":d.aZ(v.$2(22,26),B.haI,D.e_,0.1)
d.aO(v.$2(22.8,26),B.h8h,D.bN)
break
case"duty":d.aO(v.$3(0,74,0),B.h6B,D.L)
break}d.b=u},
wO(d,e,f,g,h,i,j){var w,v,u,t,s,r
if(e.Q){w=C.a([],x.z)
A.wO(new A.fk(w),A.atM(!1,0,-1,"",!1,0,"",-1,e.CW*0.5,!1,!1,!1,e.a,!1,e.e,0,0,0),f,g,h,i,j)
D.d.v(d.a,A.ny(w,1.5707963267948966,e.d,new A.q(e.b,9,e.c)))
return}w=g.e
v=$.h_T.h(0,w)
if(v==null){if(B.S4.aj(0,w)&&!$.h_R.t(0,w)){A.bTK(w)
return}A.i3c(d,e,f,h,i,g)
return}w=e.e
u=e.z
t=w&&!u&&e.CW>0?e.CW*12:null
s=j==null
r=s?null:g.a
s=s?null:g.d
D.d.v(d.a,v.cWi(h,i,e.y,s,u,r,f,j,t,w,e.b,e.d,e.c))},
i3c(e6,e7,e8,e9,f0,f1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2=e7.e,d3=d2?D.k.V(e7.CW*24):-1,d4=f1.a,d5=f1.b,d6=f1.c,d7=f1.d,d8=f1.f,d9=f1.r,e0=f1.w,e1=e7.f,e2=e7.r,e3=e7.w,e4=C.bv(d4.l(),d5.l(),d6.l(),d7.l(),d8,d9,e0,e9,d3,e1,e2,e3,f0,D.h,D.h,D.h,D.h,D.h,D.h,D.h),e5=$.frA.h(0,e4)
if(e5!=null){D.d.v(e6.a,A.ny(e5,0,e7.d,new A.q(e7.b,e7.y,e7.c)))
return}w=C.a([],x.z)
v=new A.fk(w)
v.b=f0
v.r=!0
u=C.ar(d4,D.w,0.16)
u.toString
t=C.ar(d4,B.bko,0.55)
t.toString
s=d2?Math.sin(e7.CW*3.141592653589793):0
r=e9?8:6
q=e9?4:3
p=e9?8:6
o=e9?4:3
n=e9?9:6
m=x.n
l=C.a([],m)
for(k=0;k<2;++k)l.push(s*F.hy[k]*0.6)
j=C.a([],m)
for(i=l.length,k=0;k<l.length;l.length===i||(0,C.M)(l),++k){h=l[k]
j.push(d2?Math.max(0,-h)*1.5+0.1:0.04)}m=C.a([],m)
for(g=0;g<2;++g)m.push(16*Math.cos(l[g])+15.5*Math.cos(l[g]+j[g]))
f=Math.max(m[0],m[1])+3.3
e=new A.fs4(f0,v)
d=new A.frC(v,r,e9)
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
e.$3(new A.frD(q,p),B.h8G,new A.q(a1,a2+-1.6,i))
if(e9)e.$3(new A.frE(p),B.h5y,new A.q(a1,a2+-2.9,i))
if(e9){i=C.ar(d7,D.c,m)
i.toString
v.ed(new A.q(a1,a2+1.2,a3+0),2.1,i,3,p)}}m=d8?1.22:1.12
e.$3(new A.frF(d7,q,p),new A.q(m,0.78,0.76),new A.q(0,f+1.2,0))
if(d8){d7=C.ar(d7,D.c,Math.abs(0.05))
d7.toString
m=e9?12:8
v.Tf(new A.q(0,f+3.4,0),new A.q(0,f-9.5,0),5.9,d7,!1,7.8,m)}a6=d8?5.8:6.5
a7=d8?4.2:4.9
d7=d8?0.66:0.62
e.$3(new A.frQ(a7,d6,a6,e9),new A.q(1,1,d7),new A.q(0,f+2.5,0))
if(!d8)e.$3(new A.frY(),B.h0_,new A.q(0,f+2.4,0))
if(d8&&e9)for(d7=f+14.3,k=0;k<2;++k)e.$3(new A.frZ(d6,q,p),B.h0Y,new A.q(F.hy[k]*2.7,d7,2.7))
d7=d8?1.1:1.2
e.$3(new A.fs_(d8,d6,o,n),new A.q(d7,0.5,0.62),new A.q(0,f+19.6,0))
d7=d8?1.8:2.1
v.dN(new A.q(0,f+20.5,0.2),new A.q(0,f+24.2,0.5),d7,d4,8)
if(e9){d7=C.ar(d6,D.c,Math.abs(0.12))
d7.toString
v.Tf(new A.q(0,f+20,0.1),new A.q(0,f+21.4,0.2),3.1,d7,!1,2.5,10)}d7=f+29
a8=new A.q(0,d7,0.6)
e.$3(new A.fs0(d4,e9),B.hax,a8)
m=d8?0.95:1.05
e.$3(new A.fs1(d4,q,p),new A.q(m,0.8,0.95),a8.a9(0,B.h2g))
if(e9)for(m=d7+-0.3,k=0;k<2;++k)e.$3(new A.fs2(d4),B.hdl,new A.q(0+F.hy[k]*4.35,m,0.7))
else for(m=d7+-0.2,k=0;k<2;++k)v.ed(new A.q(0+F.hy[k]*4.2,m,0.6),1,d4,2,5)
for(m=d7+1.9,l=d7+0.4,j=d7+2.05,i=d7+0.7,a1=d7+1.25,a2=d7+0.95,k=0;k<2;++k){a0=F.hy[k]
a3=a0*1.8
a9=0+a3
if(e9){e.$3(new A.fs3(),B.haL,new A.q(a9,l,4.75))
v.ed(new A.q(a9,l,5.1),0.55,B.aee,2,5)}else v.aO(new A.q(a9,l,5),B.h8X,B.aee)
a3=0+a3
if(e9){v.ed(new A.q(0+a0*1.6,i,5.55),0.18,D.c,2,4)
e.$3(new A.frG(u),B.h7_,new A.q(a3,a1,4.8))
a9=d8?0.28:0.18
v.aO(new A.q(a3,a2,5.22),new A.q(2.3,a9,0.2),D.nh)
a9=d8?0.34:0.5
v.aO(new A.q(a3,j,4.75),new A.q(2.4,a9,0.55),d5)}else v.aO(new A.q(a3,m,4.8),B.he9,d5)}e.$3(new A.frH(u),B.her,a8.a9(0,B.h5q))
if(e9){v.L6(a8.a9(0,B.het),a8.a9(0,B.hd3),0.55,d4,!1,5)
for(m=d7+-1.8,k=0;k<2;++k)v.aO(new A.q(0+F.hy[k]*0.55,m,5.1),B.h6f,u)}if(e9){v.aO(a8.a9(0,B.h3a),B.h86,B.bip)
e.$3(new A.frI(t),B.h7j,a8.a9(0,B.h9e))
e.$3(new A.frJ(t),B.h2y,a8.a9(0,B.h5C))}else v.aO(a8.a9(0,B.h8p),B.h6Q,B.blD)
switch(d9){case 1:e.$3(new A.frK(d5,e9),B.h5m,a8.a9(0,B.aWO))
e.$3(new A.frL(d5,p),B.aaS,a8.a9(0,B.aXp))
e.$3(new A.frM(d5,q,p),B.hdP,a8.a9(0,B.he6))
for(d9=d7+1.5,d7+=-7.2,k=0;k<2;++k){a0=F.hy[k]
v.L6(new A.q(0+a0*4.4,d9,1),new A.q(0+a0*4.3,d7,1),1.2,d5,!1,6)}break
case 2:e.$3(new A.frN(d5,e9),B.haD,a8.a9(0,B.h5N))
e.$3(new A.frO(d5,p),B.h6M,a8.a9(0,B.hdB))
break
case 3:d5=C.ar(d6,D.c,Math.abs(0.18))
d5.toString
e.$3(new A.frP(d5,e9),B.h9j,a8.a9(0,B.h4z))
e.$3(new A.frR(d5,p),B.aaS,a8.a9(0,B.heQ))
e.$3(new A.frS(d5,q,p),B.hdI,a8.a9(0,B.h5z))
break
case 4:e.$3(new A.frT(d5,q,p),B.heq,a8.a9(0,B.heb))
e.$3(new A.frU(d5,p),B.h8v,a8.a9(0,B.h7V))
break
default:e.$3(new A.frV(d5,e9),B.h40,a8.a9(0,B.aWO))
e.$3(new A.frW(d5,p),B.aaS,a8.a9(0,B.aXp))}b0=d8?6.2:7
for(d5=f+19.3,d7=-s,k=0;k<2;++k){a0=F.hy[k]
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
e.$3(new A.frX(d4),B.h7h,new A.q(t,i,a1))
if(e9){a2=d9<0?-1:1
a3=0*a2
a9=-j*a2
a2=d9*a2
for(b4=t+0,b5=i+d9*1.5+0,b6=a1+j*1.5+0,b7=a3*0.25,b8=a9*0.25,b9=a2*0.25,c0=0+a3*0.8,c1=d9*0.6+a9*0.8,c2=j*0.6+a2*0.8,c3=0;c3<4;++c3){c4=u?1:-1
c4=b4+(-1.5+c3)*c4
c5=B.ays[c3]
c6=c4+0*c5*0.55+b7
c7=b5+d9*c5*0.55+b8
c5=b6+j*c5*0.55+b9
c8=new A.q(c6,c7,c5)
c9=new A.q(c0,c1,c2).gmR(0)
d0=B.ays[c3]
v.Tf(new A.q(c4,b5,b6),c8,0.62,d4,!1,0.58,4)
v.Tf(c8,new A.q(c6+c9.a*d0*0.45,c7+c9.b*d0*0.45,c5+c9.c*d0*0.45),0.56,d4,!1,0.48,4)}b5=-a0
b4+=b5*2
i=i+d9*0.4+0
a1=a1+j*0.4+0.5
b5=new A.q(0+b5*0.5,d9*0.7+0,j*0.7+0.5).gmR(0)
b6=b4+b5.a*1.7
b7=i+b5.b*1.7
b5=a1+b5.c*1.7
d1=new A.q(b6,b7,b5)
a2=new A.q(0+a3*0.4,d9*0.8+a9*0.4,j*0.8+a2*0.4).gmR(0)
v.L6(new A.q(b4,i,a1),d1,0.7,d4,!1,4)
v.L6(d1,new A.q(b6+a2.a*1.4,b7+a2.b*1.4,b5+a2.c*1.4),0.6,d4,!1,4)}if(u&&e1){d9=l+0
v.dR(new A.q(t,m+-2.6,d9),new A.q(t,m+2.6,d9),1.7,D.aQ,0.5,8)}if(u&&e2){v.aZ(new A.q(t,m+-0.4,l+2.6),B.h7C,D.nh,0.3)
v.aO(new A.q(t,m+0.2,l+3.8),B.h54,D.aw)}}if(e0!==1)w=A.bCl(w,new A.q(e0,e0,e0),B.dX)
if($.frA.a>900)$.frA.a7(0)
$.frA.n(0,e4,w)
D.d.v(e6.a,A.ny(w,0,e7.d,new A.q(e7.b,e7.y,e7.c)))},
i5m(d,e){var w,v,u,t,s,r,q,p,o,n=C.a([],x.z)
for(w=d.length,v=x.o,u=0;u<d.length;d.length===w||(0,C.M)(d),++u){t=d[u]
s=C.a([],v)
for(r=t.a,q=r.length,p=0;p<r.length;r.length===q||(0,C.M)(r),++p){o=r[p]
s.push(new A.q(o.a*e,o.b*e,o.c*e))}n.push(new A.ko(s,t.b,t.c,t.d,t.e,t.f,t.r,t.w,t.x,t.y,t.z))}return n},
h5r(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=C.ar(f,D.w,Math.abs(-0.25))
h.toString
w=C.ar(f,D.c,Math.abs(0.2))
w.toString
A:{if("bed"===e){d.aZ(B.Aq,B.h2X,B.q4,0.1)
d.aZ(B.fXT,B.h2E,f,0.05)
d.aO(B.hbr,B.aW0,B.ahg)
d.aO(B.h_u,B.aW0,B.ahg)
d.aZ(B.fYm,B.h2Z,B.q4,0.1)
d.aO(B.fY6,B.haC,w)
break A}if("nightstand"===e){d.aZ(B.x7,B.h_E,f,0.1)
d.aO(B.h9y,B.h3u,h)
d.aO(B.hei,B.h1L,B.agT)
d.aO(B.fYp,B.h4s,B.o6)
break A}if("wardrobe"===e){d.aZ(B.fYJ,B.h2_,f,0.1)
d.aO(B.h4P,B.h29,h)
d.aZ(B.h7n,B.aX1,B.EZ,0.8)
d.aZ(B.heD,B.aX1,B.EZ,0.8)
break A}if("desk"===e){d.aZ(B.Vt,B.h25,f,0.1)
d.aO(B.hbA,B.aW5,h)
d.aO(B.h0r,B.aW5,h)
d.aZ(B.fZ0,B.h0s,B.LT,0.5)
d.aO(B.fYG,B.h3d,D.je)
break A}if("rug"===e){d.hp(B.hdu,B.h_X,f,2)
d.aO(B.h4C,B.hcI,w)
break A}if("sofa"===e){d.aZ(B.x7,B.h3Q,f,0.05)
d.aZ(B.fYl,B.h3R,h,0.05)
d.aZ(B.hbO,B.aWp,h,0.05)
d.aZ(B.h1w,B.aWp,h,0.05)
d.aO(B.hbq,B.aW1,w)
d.aO(B.h_t,B.aW1,w)
break A}if("armchair"===e){d.aZ(B.x7,B.h18,f,0.05)
d.aZ(B.fYk,B.h1a,h,0.05)
d.aO(B.hbm,B.aWm,h)
d.aO(B.h_i,B.aWm,h)
break A}if("coffee"===e){d.aZ(B.Kv,B.h1S,f,0.2)
for(v=0;v<4;++v){w=B.dlx[v]
d.aO(new A.q(w.a,6.5,w.b),B.h0V,h)}d.aZ(B.h63,B.h4b,D.bO,0.5)
break A}if("tvstand"===e){d.aZ(B.aaO,B.h2u,f,0.1)
d.aO(B.h3N,B.h5I,h)
d.aO(B.fY5,B.h0k,B.hq)
break A}if("dining"===e){d.aZ(B.Vt,B.h2v,f,0.2)
for(v=0;v<4;++v){w=B.cO5[v]
d.aO(new A.q(w.a,13,w.b),B.h1I,h)}break A}if("chair"===e){d.aZ(B.fY1,B.h_O,f,0.1)
d.aZ(B.fYA,B.h_M,f,0.1)
for(v=0;v<4;++v){w=B.dbc[v]
d.aO(new A.q(w.a,7.5,w.b),B.h0h,h)}break A}if("plant"===e){d.dN(B.dX,B.aaO,5,D.d1,10)
d.ed(B.aaK,8,B.EX,5,8)
d.ed(B.h1H,5,B.XL,4,8)
break A}if("lamp"===e){d.dN(B.dX,B.eb,4.5,B.hq,10)
d.dN(B.eb,B.aVH,0.7,B.hq,6)
d.L7(B.fZ2,B.aaM,6,B.o6,3.5,12)
break A}if("console"===e){d.aZ(B.fYs,B.aWk,f,0.15)
d.aO(B.h6r,B.aW4,h)
d.aO(B.h4H,B.aW4,h)
d.aO(B.x7,B.hcu,h)
break A}if("shelf"===e){d.aZ(B.aaL,B.h1u,f,0.1)
for(u=0;u<4;++u){h=10+u*15
d.aO(new A.q(0,h,1),B.h1j,B.hq)
w=D.o.F(u,2)
d.aO(new A.q(-8+w*6,h,2),B.h2S,[D.e7,D.dF,D.ed,D.dY][u])
d.aO(new A.q(4+w*4,h,2),B.h4e,[D.dY,D.ed,D.e7,D.dF][u])}break A}if("tree"===e){d.L7(B.dX,B.fYI,4.2,B.q4,3,8)
d.ed(B.aVH,17,B.EX,5,9)
d.ed(B.h4r,11,B.XL,4,8)
d.ed(B.hcm,12,B.blg,4,8)
break A}if("pine"===e){d.dN(B.dX,B.aVz,3,B.q4,8)
for(u=0;u<3;++u){h=u*14
d.L7(new A.q(0,8+h,0),new A.q(0,26+h,0),14-u*3.5,B.aeQ,1.5,10)}break A}if("bush"===e){d.ed(B.x7,9,B.bhY,4,8)
d.ed(B.h2R,6.5,B.XL,4,8)
break A}if("flowers"===e){for(v=0;v<5;++v){h=B.dk7[v]
t=h.a
s=h.b
d.dN(new A.q(t,0,s),new A.q(t,7,s),0.4,B.aeQ,5)
d.ed(new A.q(t,8,s),2.2,h.c,3,6)}break A}if("fence"===e){for(v=0;v<4;++v)d.aZ(new A.q(B.dlP[v],9,0),B.h9p,f,0.05)
d.aO(B.Aq,B.aXj,h)
d.aO(B.aaJ,B.aXj,h)
break A}if("lamppost"===e){d.dN(B.dX,B.aVI,1.3,B.hq,5)
d.dN(B.dX,B.fYN,3.5,B.hq,6)
break A}if("bench"===e){d.aZ(B.aVB,B.aWk,f,0.1)
d.aZ(B.fYg,B.h1Y,f,0.1)
d.aO(B.hbs,B.aWh,B.hq)
d.aO(B.h_Q,B.aWh,B.hq)
break A}if("car"===e){d.aZ(B.aVz,B.h3X,f,0.4)
d.aZ(B.hbY,B.h22,f,0.4)
d.aZ(B.h_Z,B.h6g,B.hW,0.6)
d.aO(B.hcH,B.aaQ,B.o6)
d.aO(B.h6T,B.aaQ,B.o6)
for(v=0;v<2;++v){t=B.a54[v]
d.dN(new A.q(t,5,-18),new A.q(t,5,-21),5.5,D.nh,12)
d.dN(new A.q(t,5,18),new A.q(t,5,21),5.5,D.nh,12)}break A}if("road"===e||"roadturn"===e||"roadtee"===e||"roadcross"===e){A.i4p(d,e)
break A}if("roundabout"===e){d.dN(B.dX,B.h69,72,B.Mm,16)
d.dN(B.h6s,B.aX4,17,D.bn,10)
d.dN(B.aX4,B.aWL,15,B.bkt,10)
d.ed(B.aaO,6,E.Xu,3,6)
d.dN(B.aWL,B.aaN,0.9,B.q4,5)
break A}if("house2"===e||"shop"===e||"hospital"===e||"firestation"===e||"school"===e){h=C.a([],x.z)
r=new A.fk(h)
r.b=d.b
r.r=!0
r.f=d.f
A.hop(r,e,f)
D.d.v(d.a,A.bCl(h,B.ha8,B.dX))
break A}if("bighouse"===e){h=C.a([],x.z)
q=new A.fk(h)
q.b=d.b
q.r=!0
q.f=d.f
A.hop(q,"house2",f)
D.d.v(d.a,A.bCl(h,B.haV,B.dX))
break A}if("pole"===e){d.L7(B.dX,B.fXK,2.6,B.q4,2,5)
d.aO(B.fXG,B.h24,B.bga)
for(v=0;v<3;++v){t=B.aAn[v]
d.dN(new A.q(t,116,0),new A.q(t,121,0),1.1,D.bN,4)}d.dN(B.h2f,B.h2d,5.5,D.bn,6)
d.aO(B.h_a,B.h0j,D.je)
break A}if("crate"===e){d.aZ(B.aaN,B.h0M,B.ju,0.05)
d.aO(B.heg,B.h_J,B.vD)
d.fV(B.hc1,3.4,D.aw,3,5,0.3)
d.fV(B.h2M,3.4,D.aC,3,5,0.3)
break A}if("billboard"===e){d.x=$.dS=$.dS+1
for(v=0;v<2;++v){t=B.a54[v]
d.dN(new A.q(t,0,-1),new A.q(t,40,-1),1.6,D.je,8)}d.aZ(B.fZ3,B.h3s,D.cq,0.3)
d.x=0
break A}if("tower"===e||"hq"===e){d.x=$.dS=$.dS+1
p=e==="hq"
o=p?170:100
n=p?90:70
m=p?150:A.hsx(f)
l=p?D.bO:B.drc[D.o.F(f.l()>>>4,6)]
k=new A.fll(d)
d.aZ(new A.q(0,m/2,0),new A.q(o,m,n),l,0.25)
k.$4(o,n,20,m-8)
if(p){h=o*0.66
w=n*0.66
d.aZ(new A.q(0,m+60,0),new A.q(h,120,w),D.bN,0.25)
k.$4(h,w,m+16,m+112)
d.aZ(new A.q(0,m+124,0),new A.q(o*0.7,8,n*0.7),F.fz,0.4)}else{d.aO(new A.q(0,m+3,0),new A.q(o+4,6,n+4),D.cq)
d.aO(new A.q(o*0.2,m+12,0),new A.q(o*0.3,12,n*0.3),D.dv)}j=p?m+128:m+6
for(h=o*0.3,h=[-h,h],w=j+8,v=0;v<2;++v)d.aO(new A.q(h[v],w,0),B.h1F,D.je)
h=p?112:84
d.aZ(new A.q(0,j+34,0),new A.q(h,38,3),E.jL,0.3)
h=n/2
A.kI(d,new A.q(0,17,h+0.6),B.hF,B.eb,34,34,D.cq,B.iq,0.5)
A.kI(d,new A.q(0,17,h+0.7),B.eb.FX(B.iq),B.eb,1.2,34,B.hW,B.iq,0.6)
d.aZ(new A.q(0,38,h+5),B.h23,F.fz,0.3)
d.x=0
break A}if("store"===e){d.x=$.dS=$.dS+1
d.aZ(B.Vt,B.aVR,f,0.2)
d.aO(B.aaM,B.aVS,D.cq)
A.kI(d,B.aXo,B.hF,B.eb,112,30,B.hW,B.iq,0.6)
d.aO(B.aVG,B.aVQ,D.bx)
d.aO(B.aVJ,B.aVN,D.av)
d.x=0
break A}if("dmv"===e){d.x=$.dS=$.dS+1
d.aZ(B.Vt,B.aVR,D.aL,0.2)
d.aO(B.aaM,B.aVS,D.d7)
A.kI(d,B.aXo,B.hF,B.eb,112,30,B.hW,B.iq,0.6)
d.aO(B.aVG,B.aVQ,D.bk)
d.aO(B.aVJ,B.aVN,D.d7)
d.aO(B.h7z,B.hae,D.bG)
d.aO(B.hdY,B.h3b,D.d7)
d.x=0
break A}if("ubstation"===e){d.x=$.dS=$.dS+1
for(v=0;v<2;++v){t=B.dlV[v]
for(i=0;i<2;++i){s=E.RE[i]
d.dN(new A.q(t,0,s),new A.q(t,50,s),2.2,D.aJ,6)}}d.aZ(B.aVI,B.h_6,D.av,0.3)
d.aO(B.fZd,B.h_8,D.bG)
d.aZ(B.fYz,B.h__,D.dt,0.6)
d.aO(B.fXH,B.h3U,D.br)
d.aO(B.fZi,B.h3x,D.aJ)
d.dN(B.h2z,B.h2C,2,D.je,6)
d.aO(B.h2D,B.h1z,D.av)
d.aO(B.h5A,B.h6u,D.bG)
d.aO(B.he7,B.hct,D.c)
d.x=0
break A}if("gasstation"===e){d.x=$.dS=$.dS+1
for(v=0;v<2;++v){t=B.aAq[v]
for(i=0;i<2;++i){s=B.cGY[i]
d.dN(new A.q(t,0,s),new A.q(t,46,s),2.4,D.bO,6)}}d.aZ(B.fZ5,B.h_d,D.bx,0.3)
d.aO(B.hes,B.h_f,F.fz)
for(v=0;v<2;++v){t=E.RE[v]
d.aZ(new A.q(t,9,20),B.h3G,D.iu,0.3)
d.aO(new A.q(t,15,20.2),B.h0S,D.bx)}d.aZ(B.fY8,B.h3S,f,0.2)
d.dN(B.hca,B.hcb,2.2,D.je,6)
d.aO(B.hcc,B.h1l,D.av)
d.x=0
break A}if("townsign"===e){d.x=$.dS=$.dS+1
for(v=0;v<2;++v){t=B.dlH[v]
d.dN(new A.q(t,0,0),new A.q(t,316,0),5.5,D.je,6)}d.aZ(B.fYx,B.h1p,E.jL,0.3)
d.aO(B.fYE,B.aWg,F.fz)
d.aO(B.fY4,B.aWg,F.fz)
d.x=0
break A}if("adboard"===e){d.x=$.dS=$.dS+1
for(v=0;v<2;++v){t=B.dlG[v]
d.dN(new A.q(t,0,0),new A.q(t,205,0),4.5,D.je,6)}d.aZ(B.fXQ,B.h1h,E.jL,0.3)
d.aO(B.fYa,B.aWa,F.fz)
d.aO(B.aVK,B.aWa,F.fz)
d.x=0
break A}if("cornersign"===e){d.x=$.dS=$.dS+1
for(v=0;v<2;++v){t=B.aAq[v]
d.dN(new A.q(t,0,0),new A.q(t,125,0),3,D.je,6)}d.aZ(B.fXJ,B.h_z,E.jL,0.3)
d.aO(B.fXZ,B.h_B,F.fz)
d.x=0
break A}if("firetruck"===e){d.aZ(B.aVA,B.h4o,D.bx,0.3)
d.aZ(B.h1q,B.h0q,D.bx,0.3)
d.aZ(B.h9a,B.h2H,B.hW,0.6)
d.aO(B.hbe,B.hd4,D.dv)
for(u=0;u<6;++u)d.aO(new A.q(-34+u*11,24,0),B.h80,D.dv)
d.aO(B.h1r,B.aWu,D.d3)
d.aO(B.h9H,B.h5R,B.bmo)
for(v=0;v<3;++v){t=B.dlR[v]
d.dN(new A.q(t,6,-19),new A.q(t,6,-22.5),6,D.nh,12)
d.dN(new A.q(t,6,19),new A.q(t,6,22.5),6,D.nh,12)}break A}if("ambulance"===e){d.aZ(B.Kv,B.h3Y,D.c,0.4)
d.aZ(B.h19,B.h0F,D.c,0.4)
d.aZ(B.h68,B.ham,B.hW,0.6)
d.aO(B.hdH,B.aWP,D.bx)
d.aO(B.h7J,B.aWP,D.bx)
d.aO(B.aXa,B.h77,D.bx)
d.aO(B.aXa,B.h5v,D.bx)
d.aO(B.h1c,B.aWu,D.aw)
for(v=0;v<2;++v){t=B.a54[v]
d.dN(new A.q(t,6,-19),new A.q(t,6,-22.5),6,D.nh,12)
d.dN(new A.q(t,6,19),new A.q(t,6,22.5),6,D.nh,12)}break A}if("dog"===e||"cat"===e||"cow"===e||"sheep"===e||"chicken"===e||"horse"===e){A.hnV(d,e,f,0)
break A}if("pond"===e){h=C.a([],x.z)
q=new A.fk(h)
q.b=d.b
q.f=d.f
q.r=!0
q.dR(B.dX,B.haZ,28,B.bnz,0.8,22)
D.d.v(d.a,A.bCl(h,B.h5_,B.dX))
for(v=0;v<3;++v){h=B.d6K[v]
d.ed(new A.q(h.a,1.2,h.b),2.6,B.agn,3,6)}break A}if("swing"===e){d.dN(B.hbB,B.h0H,1.6,D.d1,8)
for(v=0;v<2;++v){t=E.a53[v]
d.dN(new A.q(t,38,0),new A.q(t,0,14),1.4,D.d1,6)
d.dN(new A.q(t,38,0),new A.q(t,0,-14),1.4,D.d1,6)}for(v=0;v<2;++v){t=E.a55[v]
d.dN(new A.q(t,38,0),new A.q(t,15,0),0.3,B.hq,4)}d.aO(B.Kv,B.hdO,f)
break A}if("shed"===e){d.aZ(B.Kv,B.h2m,f,0.05)
d.aO(B.aaL,B.h2x,B.Y0)
d.aO(B.haQ,B.haE,h)
break A}if("doghouse"===e){d.aZ(B.aaN,B.h0G,f,0.05)
d.aO(B.h12,B.hcW,B.Y0)
d.aO(B.h99,B.he0,B.LT)
break A}d.aO(B.Aq,B.fZL,f)}},
cgi:function cgi(){},
fPe:function fPe(d,e,f){this.a=d
this.b=e
this.c=f},
fPc:function fPc(d,e,f){this.a=d
this.b=e
this.c=f},
fPb:function fPb(d,e,f){this.a=d
this.b=e
this.c=f},
fPd:function fPd(d){this.a=d},
fyh:function fyh(d){this.a=d},
fy3:function fy3(){},
fye:function fye(){},
fyf:function fyf(d,e,f){this.a=d
this.b=e
this.c=f},
fy4:function fy4(){},
fy5:function fy5(){},
fy6:function fy6(){},
fy7:function fy7(d){this.a=d},
fy9:function fy9(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fya:function fya(d,e,f){this.a=d
this.b=e
this.c=f},
fyb:function fyb(d,e,f){this.a=d
this.b=e
this.c=f},
fyc:function fyc(d,e,f){this.a=d
this.b=e
this.c=f},
fyd:function fyd(d,e,f){this.a=d
this.b=e
this.c=f},
fyg:function fyg(d){this.a=d},
fy8:function fy8(d){this.a=d},
frf:function frf(d){this.a=d},
frg:function frg(d){this.a=d},
frb:function frb(d){this.a=d},
frc:function frc(d,e){this.a=d
this.b=e},
frd:function frd(d){this.a=d},
fqD:function fqD(){},
fqE:function fqE(){},
fqF:function fqF(d){this.a=d},
fqQ:function fqQ(d){this.a=d},
fr0:function fr0(){},
fre:function fre(d,e){this.a=d
this.b=e},
fr5:function fr5(d){this.a=d},
fr6:function fr6(d){this.a=d},
fr7:function fr7(d){this.a=d},
fr8:function fr8(d){this.a=d},
fr9:function fr9(d){this.a=d},
fra:function fra(d){this.a=d},
fqG:function fqG(d){this.a=d},
fqH:function fqH(d){this.a=d},
fqI:function fqI(d){this.a=d},
fqJ:function fqJ(d){this.a=d},
fqK:function fqK(d){this.a=d},
fqL:function fqL(d){this.a=d},
fqM:function fqM(){},
fqN:function fqN(){},
fqO:function fqO(){},
fqP:function fqP(){},
fqR:function fqR(d){this.a=d},
fqS:function fqS(d){this.a=d},
fqT:function fqT(d){this.a=d},
fqU:function fqU(d){this.a=d},
fqV:function fqV(){},
fqW:function fqW(){},
fqX:function fqX(){},
fqY:function fqY(){},
fqZ:function fqZ(){},
fr_:function fr_(d,e){this.a=d
this.b=e},
fr1:function fr1(d){this.a=d},
fr2:function fr2(d){this.a=d},
fr3:function fr3(){},
fr4:function fr4(){},
fBg:function fBg(d){this.a=d},
fBd:function fBd(){},
fBe:function fBe(d){this.a=d},
fBf:function fBf(d){this.a=d},
fhw:function fhw(d,e){this.a=d
this.b=e},
fhm:function fhm(d,e,f){this.a=d
this.b=e
this.c=f},
fs4:function fs4(d,e){this.a=d
this.b=e},
frC:function frC(d,e,f){this.a=d
this.b=e
this.c=f},
frD:function frD(d,e){this.a=d
this.b=e},
frE:function frE(d){this.a=d},
frF:function frF(d,e,f){this.a=d
this.b=e
this.c=f},
frQ:function frQ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
frY:function frY(){},
frZ:function frZ(d,e,f){this.a=d
this.b=e
this.c=f},
fs_:function fs_(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fs0:function fs0(d,e){this.a=d
this.b=e},
fs1:function fs1(d,e,f){this.a=d
this.b=e
this.c=f},
fs2:function fs2(d){this.a=d},
fs3:function fs3(){},
frG:function frG(d){this.a=d},
frH:function frH(d){this.a=d},
frI:function frI(d){this.a=d},
frJ:function frJ(d){this.a=d},
frK:function frK(d,e){this.a=d
this.b=e},
frL:function frL(d,e){this.a=d
this.b=e},
frM:function frM(d,e,f){this.a=d
this.b=e
this.c=f},
frN:function frN(d,e){this.a=d
this.b=e},
frO:function frO(d,e){this.a=d
this.b=e},
frP:function frP(d,e){this.a=d
this.b=e},
frR:function frR(d,e){this.a=d
this.b=e},
frS:function frS(d,e,f){this.a=d
this.b=e
this.c=f},
frT:function frT(d,e,f){this.a=d
this.b=e
this.c=f},
frU:function frU(d,e){this.a=d
this.b=e},
frV:function frV(d,e){this.a=d
this.b=e},
frW:function frW(d,e){this.a=d
this.b=e},
frX:function frX(d){this.a=d},
fll:function fll(d){this.a=d},
heq(){var w=x.S
return new A.bV6(C.eD([72],w),C.aX(w),C.aX(w),C.aX(w))},
i9g(d){var w
A:{if(81===d){w="outlet"
break A}if(82===d){w="switch"
break A}if(84===d){w="gfci"
break A}if(86===d||87===d){w="ptrap"
break A}if(85===d){w="faucet"
break A}w=null
break A}return w},
agL(a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=C.a([],x.z),a0=new A.fk(d)
a0.b=70
a0.hp(B.haa,B.hcT,B.bki,4)
a0.c=1
a0.b=91
w=new A.fym(a0)
w.$3(B.h5u,B.h4K,15)
w.$4$alongX(B.hcs,B.h8Q,11,!1)
w.$4$alongX(B.h2G,B.h4U,11,!1)
w.$4$alongX(B.hbt,B.h5P,6,!1)
w.$4$alongX(B.h3F,B.h8R,6,!1)
for(v=0;v<=12;++v)a0.aDL(new A.q(-12+v*2,8.4,0),B.h9w,B.Yi,!1,0.05)
a0.c=2
a0.b=92
u=new A.fyj(a0)
u.$2(B.cqe,B.tH)
u.$2(B.diG,B.o2)
u.$2(B.dnJ,B.o2)
t=new A.fyi(a0)
t.$1(B.d_m)
t.$1(B.d5m)
a0.c=3
a0.b=93
s=new A.fyl(a0)
s.$1(B.cZg)
s.$2$col(B.cXE,B.oT)
s.$2$col(B.cWJ,B.oT)
s.$1(B.dfy)
a0.c=4
a0.b=0
a0.d=0.22
a0.hp(B.h4T,B.h83,B.B6,4)
a0.hp(B.h8_,B.aWW,B.B6,4)
a0.hp(B.h5x,B.aWW,B.B6,4)
a0.hp(B.h6D,B.aX0,B.B6,3)
a0.hp(B.hee,B.aX0,B.B6,3)
a0.d=1
a0.c=5
a0.e=0.3
a0.b=0
a0.n9(B.hba,B.h4Q,B.bhI,0.1,4)
a0.b=71
a0.aZ(B.hai,B.h9x,B.XA,0.5)
a0.aO(B.hdN,B.h6k,B.F8)
r=[72,73,74,75,76]
for(q=a1.d,p=a1.e,v=0;v<5;++v){o=D.o.F(v,2)
n=D.o.ao(v,2)
m=r[v]
l=q.t(0,m)
k=p.t(0,m)
a0.b=m
m=9.55+o*0.5
j=5.7-n*0.5
a0.aZ(new A.q(m,j,-7.5),B.h4p,B.Za,0.3)
if(l)i=0
else i=k?-0.07:0.07
if(l)h=D.ce
else h=k?D.bn:D.bO
a0.aZ(new A.q(m+0,j+i,-7.42),B.h5Z,h,0.4)}a0.b=90
a0.aZ(B.h8S,B.h2N,B.brW,0.1)
a0.aZ(B.hcw,B.h5d,B.YT,0.1)
a0.aZ(B.heL,B.aXi,B.YT,0.1)
a0.aZ(B.h56,B.aXi,B.YT,0.1)
g=new A.fyk(a0)
g.$3(81,B.h3O,a1.x?B.xR:B.YB)
a0.b=81
a0.aO(B.h8T,B.aXc,B.Fk)
a0.aO(B.h7c,B.aXc,B.Fk)
g.$5$h$w(82,B.hdS,G.YM,0.65,0.4)
a0.b=82
a0.aZ(B.haN,B.h2K,B.afJ,0.4)
f=!q.t(0,72)
a0.b=83
a0.dR(B.haz,B.aWG,0.5,B.bps,0.4,14)
a0.bbS(B.hde,0.3,f?Ah.FD:B.bjZ,0.7)
if(f){a0.b=0
a0.d=0.22
a0.fV(B.aWt,1.5,B.XU,4,10,0)
a0.d=1}a0.b=94
a0.aZ(B.hd1,B.aXm,B.ju,0.1)
a0.aZ(B.h96,B.aXm,B.ju,0.1)
a0.aZ(B.hdQ,B.h5F,B.ju,0.1)
a0.n9(B.h8l,B.hdh,B.Mc,0.5,2)
a0.aZ(B.had,B.heH,B.Fi,0.7)
a0.b=85
a0.ji(A.Ha(B.d95,0.2,6),0.055,B.jI,!1,0.9,8)
a0.b=84
a0.aZ(B.hds,B.hb2,B.YB,0.3)
a0.aO(B.h6L,B.hdM,a1.y?B.agm:B.aiA)
a0.b=86
a0.ji(A.Ha(B.d_Q,0.35,3),0.11,B.pU,!1,0.3,8)
a0.b=87
a0.dR(B.h7E,B.hao,0.19,a1.c?B.XH:B.bnd,0.3,8)
a0.b=88
a0.aZ(B.h21,B.h4x,B.Bb,0.7)
a0.BE(B.ha9,B.aXd,0.72,B.Bb,0.55,0.7,16)
a0.dR(B.aXd,B.h8w,0.78,B.bp_,0.7,16)
a0.b=89
a0.dR(B.hcB,B.aWw,0.85,B.bcx,0.6,18)
a0.dR(B.aWw,B.h81,0.5,B.bcz,0.5,12)
a0.aO(B.h9g,B.hey,B.bn7)
a0.b=95
for(p=a1.f,m=a1.r,v=0;v<3;++v){e=B.cGB[v]
if(m.t(0,v)){j=e.a
i=e.b
a0.aO(new A.q(j,i,-7.82),B.haA,B.B6)
a0.aO(new A.q(j,i,-7.79),B.h87,B.bg1)}else if(p.t(0,v)){j=e.a
i=e.b
a0.aO(new A.q(j,i,-7.82),B.h08,B.ahA)
a0.aO(new A.q(j,i,-7.8),B.h94,B.bsc)}}if(a1.w){a0.b=96
a0.dR(B.h8d,B.h7w,0.1,D.d1,0.7,8)}a0.e=0
a0.c=6
a0.b=0
a0.d=0.4
a0.biR(B.aWn,B.aXb,B.aaW,B.aaU,B.af6,B.h8N,!0)
a0.biR(B.aX6,B.aXg,B.aaU,B.aaW,B.af6,B.haH,!0)
a0.bk1(B.aWn,B.aXg,B.aaU,B.afk)
a0.bk1(B.aXb,B.aX6,B.aaW,B.afk)
a0.d=1
p=q.t(0,72)?"This breaker has TRIPPED (it is in the middle, orange). The living room has no power. Tap it to flip it off and on again.":"This breaker is ON. The living room has power."
q=q.t(0,72)?"The light is off because the living room breaker has tripped.":"The ceiling light is on."
m=a1.b
j=m&&!a1.c?"Water is dripping from the slip nut here. Pick the wrench, then tap the nut to tighten it.":"The P-trap holds a water seal that blocks sewer gas. Tap Open lesson to build one."
m=m&&!a1.c?"This slip nut is loose and the trap is dripping. Pick the wrench and tap here to tighten it.":"The slip nut is tight."
return new A.tP(d,C.G([70,B.ecB,91,B.ec1,92,B.eck,93,B.ecs,71,B.ecG,72,new A.cW("Living room breaker",p,B.hel,3.5),73,B.ecc,74,B.ecu,75,B.ebS,76,B.ecn,81,B.ecp,82,B.ebJ,83,new A.cW("Ceiling light",q,B.aWG,7),84,B.ecv,85,B.ebU,86,new A.cW("P-trap under the sink",j,B.ha7,4.5),87,new A.cW("Slip nut (leaking?)",m,B.aWJ,3.5),88,B.ebG,89,B.ect,90,B.ecx,94,B.ecb,95,B.ecz,96,B.ebL],x.S,x.q),B.zo,B.wz,null,0)},
htA(d,e){var w,v,u,t,s,r,q,p=C.a([],x.z),o=new A.fk(p)
o.c=5
o.e=0.8
if(d.w)for(w=e*1.5,v=0;v<6;++v){u=D.k.F(w+v/6,1)
o.fV(new A.q(3.4+Math.sin(v*2)*0.12,3.3-u*u*2.8,-7.7),0.05,D.LS,3,6,0.9)}if(d.as){u=D.k.F(e*1.1,1)
o.fV(new A.q(3,3.9-u*u*0.7,-6.95),0.05,B.XR,3,6,0.9)}if(d.Q)for(w=e*1.6,v=0;v<6;++v){u=D.k.F(w+v/6,1)
o.fV(new A.q(8.2+Math.sin(v*1.7)*0.15,2.2-u*1.5,-7.2),0.05,B.XR,3,6,0.9)}if(d.at){o.d=0.55
o.aZ(B.h53,B.h6I,B.bpg,0.8)
o.d=1}if(d.x)for(w=e*2,t=e*6,v=0;v<8;++v){u=D.k.F(w+v*0.13,1)
s=v*2.4+t
r=Math.cos(s)
s=Math.sin(s)
q=C.ar(F.MC,E.Z3,1-u)
q.toString
o.fV(new A.q(-3.2+r*u*0.7,1.3+s*u*0.7,-7.6+u*0.3),0.05,q,3,5,0)}if(d.z&&!d.d.t(0,72)){o.b=0
o.d=D.k.E((Math.sin(e*17)+Math.sin(e*29)+2)/4*0.5,0,0.6)
o.fV(B.aWt,1.5,B.XU,4,10,0)
o.d=1}if(d.b&&!d.c){for(w=e*1.3,v=0;v<5;++v){u=D.k.F(w+v*0.2,1)
o.fV(new A.q(3.05,1.45-u*u*1.4,-6.95),0.05,B.YW,3,6,0.9)}o.d=0.5
o.aZ(B.h4J,new A.q(0.7+0.3*Math.sin(e),0.02,0.5),B.YW,0.9)
o.d=1}return p},
bV6:function bV6(d,e,f,g){var _=this
_.a=5
_.b=!0
_.c=!1
_.d=d
_.e=e
_.f=f
_.r=g
_.at=_.as=_.Q=_.z=_.y=_.x=_.w=!1},
fym:function fym(d){this.a=d},
fyj:function fyj(d){this.a=d},
fyi:function fyi(d){this.a=d},
fyl:function fyl(d){this.a=d},
fyk:function fyk(d){this.a=d},
fW(d,e,f,g){var w
try{I.e_(d,"",e,0,f,g)}catch(w){}},
yN(){A.fW(880,80,0.25,"tri")
C.bQ(W.aju,new A.fzh(),x.H)},
hLG(){return new A.NL(null)},
Yg(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w){return new A.b7O(t,d,u,s,f,r,q,j,g,h,m,n,i,k,v,w,l,o,p,e,null)},
wW(d,e,f,g,h){var w=null,v=g?e.j(0.25):D.w.j(0.5),u=C.m(18),t=C.J(g?e:D.aZ,D.r,1),s=x.p,r=C.a([],s)
D.d.v(r,C.a([C.X(f,g?e:D.ae,w,w,w,16),D.en],s))
r.push(C.d(d,w,w,w,w,w,w,C.l(w,w,g?e:D.ae,w,w,w,w,w,w,w,w,12,w,w,D.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w))
return C.aB(w,C.p(w,C.B(r,D.m,w,D.e,D.P,0,w,w),D.f,w,w,new C.o(v,w,t,u,w,w,D.n),w,w,w,w,D.h6,w,w,w),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,h,w,w,w,w,w,w,!1,D.a4)},
ud(d,e,f,g){var w=null,v=f==null,u=v?D.dq:g.j(0.9),t=C.m(14),s=C.X(e,v?D.bY:D.w,w,w,w,18)
return C.E(C.aB(w,C.p(w,C.B(C.a([s,D.bm,new C.ds(1,D.cn,C.d(d,w,w,w,w,w,w,C.l(w,w,v?D.bY:D.w,w,w,w,w,w,w,w,w,12.5,w,w,D.u,w,w,!0,w,w,w,w,w,w,w,w),D.K,w,w),w)],x.p),D.m,w,D.b8,D.i,0,w,w),D.f,w,w,new C.o(u,w,w,t,w,w,D.n),w,w,w,w,D.u0,w,w,w),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,!1,D.a4),1)},
fQp(d,e,f,g){return C.bV(E.lA,null,new A.fQr(e,g,f),d,!0,!0,!0,D.k2,!1,!1,x.H)},
U9(d,e,f,g,h,i,j){return new A.aXV(i,d,g,f,e,h,j,null)},
fzh:function fzh(){},
py:function py(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
NL:function NL(d){this.a=d},
bkN:function bkN(){this.c=this.a=null},
dSJ:function dSJ(d){this.a=d},
dSK:function dSK(d){this.a=d},
dSL:function dSL(d){this.a=d},
dSM:function dSM(d){this.a=d},
dSQ:function dSQ(d){this.a=d},
dSR:function dSR(d){this.a=d},
dSS:function dSS(d){this.a=d},
dST:function dST(d){this.a=d},
dSU:function dSU(d){this.a=d},
dSV:function dSV(d){this.a=d},
dSW:function dSW(d){this.a=d},
dSX:function dSX(d){this.a=d},
dSN:function dSN(d,e){this.a=d
this.b=e},
dSO:function dSO(d){this.a=d},
dSP:function dSP(d){this.a=d},
awx:function awx(d,e){this.c=d
this.a=e},
btJ:function btJ(){this.c=this.a=this.d=null},
f5t:function f5t(d){this.a=d},
f5s:function f5s(){},
b7O:function b7O(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0){var _=this
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
cxi:function cxi(){},
cxj:function cxj(){},
fQr:function fQr(d,e,f){this.a=d
this.b=e
this.c=f},
fQq:function fQq(){},
aXV:function aXV(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
bXc:function bXc(d){this.a=d},
E2:function E2(d,e,f){this.c=d
this.d=e
this.a=f},
aAD:function aAD(d){var _=this
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
dbc:function dbc(d,e){this.a=d
this.b=e},
dba:function dba(d,e,f){this.a=d
this.b=e
this.c=f},
dbb:function dbb(d){this.a=d},
db9:function db9(d){this.a=d},
daY:function daY(d){this.a=d},
daZ:function daZ(d){this.a=d},
daX:function daX(d){this.a=d},
db_:function db_(d){this.a=d},
db0:function db0(d){this.a=d},
db1:function db1(d){this.a=d},
db2:function db2(d){this.a=d},
db3:function db3(d,e,f){this.a=d
this.b=e
this.c=f},
db4:function db4(d){this.a=d},
db5:function db5(d,e){this.a=d
this.b=e},
db6:function db6(d,e){this.a=d
this.b=e},
db7:function db7(d,e){this.a=d
this.b=e},
db8:function db8(d){this.a=d},
dbd:function dbd(d,e){this.a=d
this.b=e},
dbe:function dbe(d){this.a=d},
dbn:function dbn(){},
dbw:function dbw(d,e,f){this.a=d
this.b=e
this.c=f},
dbD:function dbD(d){this.a=d},
dbk:function dbk(){},
dbo:function dbo(d){this.a=d},
dbp:function dbp(d){this.a=d},
dbx:function dbx(d){this.a=d},
dby:function dby(d){this.a=d},
dbm:function dbm(d){this.a=d},
dbz:function dbz(d){this.a=d},
dbl:function dbl(d){this.a=d},
dbA:function dbA(d){this.a=d},
dbB:function dbB(d){this.a=d},
dbC:function dbC(d){this.a=d},
dbE:function dbE(d){this.a=d},
dbq:function dbq(d,e){this.a=d
this.b=e},
dbj:function dbj(d,e){this.a=d
this.b=e},
dbr:function dbr(d,e){this.a=d
this.b=e},
dbs:function dbs(d){this.a=d},
dbi:function dbi(d){this.a=d},
dbt:function dbt(d){this.a=d},
dbh:function dbh(d){this.a=d},
dbu:function dbu(d){this.a=d},
dbg:function dbg(d){this.a=d},
dbv:function dbv(d){this.a=d},
dbf:function dbf(d){this.a=d},
a9L:function a9L(d,e){this.c=d
this.a=e},
aGC:function aGC(){var _=this
_.f=_.e=_.d=$
_.r=""
_.w=0
_.x=null
_.y=!1
_.c=_.a=_.z=null},
eVJ:function eVJ(d,e,f){this.a=d
this.b=e
this.c=f},
eVK:function eVK(d){this.a=d},
eVI:function eVI(d){this.a=d},
eVC:function eVC(d){this.a=d},
eVD:function eVD(d,e){this.a=d
this.b=e},
eVE:function eVE(d,e){this.a=d
this.b=e},
eVF:function eVF(d,e){this.a=d
this.b=e},
eVG:function eVG(d){this.a=d},
eVH:function eVH(d,e){this.a=d
this.b=e},
eVO:function eVO(){},
eVS:function eVS(d,e){this.a=d
this.b=e},
eVP:function eVP(d){this.a=d},
eVQ:function eVQ(d,e){this.a=d
this.b=e},
eVN:function eVN(d,e){this.a=d
this.b=e},
eVR:function eVR(d){this.a=d},
eVM:function eVM(d){this.a=d},
eVL:function eVL(){},
a5c:function a5c(d,e){this.c=d
this.a=e},
aAX:function aAX(){var _=this
_.f=_.e=_.d=$
_.r=""
_.w=0
_.x=null
_.y=!1
_.c=_.a=_.z=null},
dee:function dee(d,e,f){this.a=d
this.b=e
this.c=f},
def:function def(d){this.a=d},
ded:function ded(d){this.a=d},
de6:function de6(d){this.a=d},
de9:function de9(d){this.a=d},
dea:function dea(d,e){this.a=d
this.b=e},
deb:function deb(d,e){this.a=d
this.b=e},
de8:function de8(d){this.a=d},
dec:function dec(d,e){this.a=d
this.b=e},
de7:function de7(d){this.a=d},
dej:function dej(){},
dep:function dep(d,e){this.a=d
this.b=e},
dek:function dek(d){this.a=d},
del:function del(d){this.a=d},
dei:function dei(d){this.a=d},
den:function den(d,e){this.a=d
this.b=e},
deh:function deh(d,e){this.a=d
this.b=e},
dem:function dem(d){this.a=d},
deo:function deo(d){this.a=d},
deg:function deg(d){this.a=d},
aBP:function aBP(d){this.a=d},
aBQ:function aBQ(d){var _=this
_.d=d
_.f=_.e=$
_.r=0
_.w=""
_.x=null
_.y=!1
_.c=_.a=_.z=null},
dli:function dli(d,e,f){this.a=d
this.b=e
this.c=f},
dlj:function dlj(d){this.a=d},
dlh:function dlh(d){this.a=d},
dlc:function dlc(d){this.a=d},
dle:function dle(d,e){this.a=d
this.b=e},
dlf:function dlf(d,e){this.a=d
this.b=e},
dlg:function dlg(d,e){this.a=d
this.b=e},
dld:function dld(d){this.a=d},
dlr:function dlr(d,e){this.a=d
this.b=e},
dlm:function dlm(d,e){this.a=d
this.b=e},
dlo:function dlo(d){this.a=d},
dln:function dln(d){this.a=d},
dlp:function dlp(d){this.a=d},
dll:function dll(d){this.a=d},
dlq:function dlq(d){this.a=d},
dlk:function dlk(d,e){this.a=d
this.b=e},
afO:function afO(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bxn:function bxn(){var _=this
_.d=null
_.e=!1
_.c=_.a=null},
fh4:function fh4(d){this.a=d},
fh2:function fh2(d){this.a=d},
fh3:function fh3(d){this.a=d},
fh1:function fh1(d){this.a=d},
fh6:function fh6(d){this.a=d},
fh7:function fh7(d){this.a=d},
fh5:function fh5(d){this.a=d},
jL:function jL(d,e){this.a=d
this.b=e},
N8:function N8(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a7e:function a7e(d){this.a=d},
cbD:function cbD(d){this.a=d},
h2R(){var w=x.N
return new A.cnT(C.aX(w),C.G(["n1",!1,"n2",!1],w,x.R),C.U(x.S,w))},
ika(d,e,f){var w,v
if(!f.c.t(0,e)){w=f.d
return e==="hot"?"The red (hot) hose goes on the LEFT side only. "+w:"The blue (cold) hose goes on the RIGHT side only. "+w}w=d.e
v=f.a
if(w.h(0,v)!=null)return"That connection already has a hose."
w.n(0,v,e)
return null},
fPK(){var w,v,u=C.a([B.aWj,B.h7q],x.o)
for(w=1;w<=12;++w){v=3.141592653589793+3.141592653589793*w/12
u.push(new A.q(3+3*Math.cos(v),0.2+3*Math.sin(v),0))}D.d.v(u,A.Ha(B.das,1,6))
return u},
bCF(d){var w,v,u,t,s="trap",r=C.a([],x.z),q=new A.fk(r)
q.b=49
q.n9(B.h01,B.h1P,B.ju,0.1,2)
q.n9(B.hec,B.h05,B.ju,0.1,2)
q.b=47
q.hp(B.h8M,B.h1Q,B.vH,3)
q.hp(B.h11,B.h06,B.vH,3)
q.b=46
q.n9(B.h2U,B.h9D,B.Mc,0.5,3)
q.bdO(B.hb8,B.Kv,6.5,B.Fi,!0,0.7,20)
q.dR(B.ha1,B.h72,1.5,B.jI,0.85,14)
q.b=48
q.Tg(B.aaY,B.h5r,0.92,B.pU,!1,!0,0.3,14)
q.cYk(B.aaY,B.hdo,1,0.72,B.pU,0.3)
w=new A.fyY(d,q)
w.$5(41,B.a4m,B.jI,0.85,"tail")
w.$5(42,A.fPK(),B.pU,0.3,s)
w.$5(43,B.a5k,B.pU,0.3,"arm")
w=new A.fyX(d,q)
v=d.a
w.$6(44,"n1",B.aaT,B.eb,B.h5M,v.t(0,"tail")&&v.t(0,s))
w.$6(45,"n2",B.aaV,B.hF,B.hb1,v.t(0,s)&&v.t(0,"arm"))
if(v.t(0,s)){q.b=0
q.d=0.55
q.e=0.4
u=A.fPK()
w=C.T(u).k("Z<1>")
t=C.C(new C.Z(u,new A.fyW(),w),w.k("L.E"))
if(t.length>1)q.aJn(t,0.4092,B.Z8,!1,!0,0.6,8)
q.d=1
q.e=0}return new A.tP(r,C.G([41,B.ebW,42,B.ebY,43,B.ecr,44,B.ecf,45,B.ecD,46,B.ec3,47,B.ec9,48,B.ebE,49,B.ec_],x.S,x.q),B.zo,B.wz,null,0)},
ii5(d,e){var w,v,u,t,s,r,q,p=C.a([],x.z),o=new A.fk(p),n=d.d
if(n.length!==0){w=n==="n1"?B.heB:B.hcM
for(n=e*1.4,v=w.a+0,u=w.b,t=w.c+0,s=0;s<5;++s){r=D.k.F(n+s*0.2,1)
o.fV(new A.q(v,u+(-r*6*r-r*1.5),t),0.22*(1-r*0.3),B.YW,3,6,0.9)}}else if(d.c){n=x.Q
v=C.C(B.a4m,n)
u=A.fPK()
D.d.v(v,C.d1(u,1,null,C.T(u).c))
D.d.v(v,C.d1(B.a5k,1,null,n))
for(n=e*0.45,s=0;s<18;++s){r=D.k.F(n+s/18,1)
q=D.o.E(D.k.bh(r*(v.length-1)),0,v.length-2)
u=v.length
o.fV(A.o3(v[q],v[q+1],r*(u-1)-q),0.38,B.bri,3,6,0.9)}for(n=e*2.2,s=0;s<6;++s)o.fV(new A.q(0,14-D.k.F(n+s/6,1)*5.4,0),0.3,B.XR,3,6,0.9)}return p},
agY(d){switch(d){case 61:return B.h00
case 62:return B.hcJ
case 63:return B.h7T
default:return B.h7K}},
h7J(d){var w=d==="hot",v=A.agY(w?61:62),u=A.agY(w?63:64),t=w?-1:1
return A.aib(C.a([v,v.a9(0,new A.q(t*0.6,2.2,1.2)),A.o3(v,u,0.5).a9(0,new A.q(t*1.4,0,2.6)),u.a9(0,new A.q(-t*0.2,-2,1)),u],x.o),6)},
aPU(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=C.a([],x.z),e=new A.fk(f)
e.b=67
e.hp(B.h_Y,B.h1s,B.vH,3)
e.b=66
e.n9(B.h7o,B.hdn,B.Mc,0.5,3)
e.Tg(B.aW7,B.hea,7.6,B.YX,!1,!0,0.7,28)
e.dR(B.aW7,B.han,7.6,B.ag7,0.5,28)
e.dR(B.h1D,B.h6v,1.2,B.jI,0.9,14)
e.aZ(B.h9O,B.aVX,B.ju,0.1)
e.aZ(B.hdG,B.aVX,B.ju,0.1)
e.b=65
e.dR(B.hd2,B.aX5,3.4,B.jI,0.9,20)
e.ji(A.Ha(B.dg6,1.4,6),0.5,B.jI,!0,0.9,12)
for(w=0;w<2;++w){v=B.dbe[w]
u=v*1.2
e.dR(new A.q(u,15.5,-3.6),new A.q(u,17.7,-3.6),0.38,B.jI,0.9,10)
t=v<0?B.tH:B.o2
e.dR(new A.q(u,17.7,-3.6),new A.q(u,18.6,-3.6),0.6,t,0.6,12)}for(u=[B.eAA,B.evI],w=0;w<2;++w){t=u[w]
v=t.b
e.b=t.a
e.dR(new A.q(v,15.3,-3.6),new A.q(v,11.4,-3.6),0.45,B.jI,0.9,10)
e.dR(new A.q(v,11.4,-3.6),new A.q(v,10.7,-3.6),0.3,B.bmN,0.6,8)
e.zs(new A.q(v,11.3,-3.6),new A.q(v,11.9,-3.6),0.78,0.48,B.boZ,0.7,8)}for(u=[B.eTM,B.eVy],w=0;w<2;++w){t=u[w]
v=t.b
e.b=t.a
e.dR(new A.q(v,-1.5,-6),new A.q(v,-1.5,-3.6),0.4,B.LJ,0.7,12)
e.dR(new A.q(v,-1.5,-4.4),new A.q(v,0.7,-4.4),1,B.jI,0.9,14)
e.dR(new A.q(v,0.7,-4.4),new A.q(v,1.5,-3.6),0.45,B.jI,0.9,10)
e.dR(new A.q(v,-0.2,-4.4),new A.q(v,-0.2,-3.1),0.2,B.aeJ,0.7,8)
e.dR(new A.q(v,-0.2,-3.1),new A.q(v,-0.2,-2.4000000000000004),1.45,t.c,0.5,14)
e.zs(new A.q(v,1.2,-3.6),new A.q(v,1.9,-3.6),0.78,0.4,B.xF,0.8,8)}for(u=x.o,w=0;w<2;++w){s=B.diL[w]
t=s==="hot"
r=t?B.cHy:B.cHL
q=C.T(r).k("Z<1>")
p=C.C(new C.Z(r,new A.fy2(d,s),q),q.k("L.E"))
e.b=t?68:69
o=t?B.tH:B.o2
t=p.length
if(t===2){n=A.h7J(s)
e.ji(n,0.34,B.Mt,!1,0.7,8)
m=n.length/2|0
e.ji(C.a([n[m-1],n[m],n[m+1]],u),0.4,o,!1,0.4,8)
for(t=r.length,l=0;l<t;++l){k=A.agY(r[l])
q=k.a+0
j=k.b
i=k.c+0
e.zs(new A.q(q,j+-0.2,i),new A.q(q,j+0.6,i),0.62,0.3,B.xF,0.8,8)}}else if(t===1){k=A.agY(D.d.gI(p))
h=D.d.gI(p)===D.d.gI(r)?1:-1
t=k.a+0
q=k.b
j=k.c
e.ji(C.a([k,new A.q(t,q+h*1.4,j+1),new A.q(t,q+h*3,j+2.4)],u),0.34,B.Mt,!1,0.7,8)
j+=0
e.zs(new A.q(t,q+-0.2,j),new A.q(t,q+0.6,j),0.62,0.3,B.xF,0.8,8)}}if(d.r){e.b=0
e.d=0.5
for(u=d.e,w=0;w<4;++w){g=B.a5e[w]
t=g.a
if(u.h(0,t)!=null)continue
t=A.agY(t)
q=g.c.t(0,"hot")?B.tH:B.o2
e.fV(new A.q(t.a+0,t.b+0,t.c+0.9),0.65,q,4,8,0.1)}e.d=1}return new A.tP(f,C.G([61,B.ebN,62,B.ebP,63,B.ebI,64,B.ebQ,65,B.eca,66,B.ec6,67,B.ebF,68,B.ecH,69,B.ecd],x.S,x.q),B.zo,B.wz,null,0)},
i8O(d,e){var w,v,u,t,s,r,q,p,o,n=C.a([],x.z),m=new A.fk(n)
if(!d.f)return n
w=d.e
v=w.h(0,61)==="hot"&&w.h(0,63)==="hot"
u=w.h(0,62)==="cold"&&w.h(0,64)==="cold"
t=new A.fAE(e,m)
if(v){s=A.h7J("hot")
for(r=e*0.5,q=0;q<10;++q){p=D.k.F(r+q/10,1)
o=D.o.E(D.k.bh(p*(s.length-1)),0,s.length-2)
m.fV(A.o3(s[o],s[o+1],p*(s.length-1)-o),0.2,D.LS,3,6,0.9)}}else if(w.h(0,61)==null)t.$2(61,D.LS)
if(u){s=A.h7J("cold")
for(w=e*0.5,q=0;q<10;++q){p=D.k.F(w+q/10,1)
o=D.o.E(D.k.bh(p*(s.length-1)),0,s.length-2)
m.fV(A.o3(s[o],s[o+1],p*(s.length-1)-o),0.2,B.Yo,3,6,0.9)}}else if(w.h(0,62)==null)t.$2(62,B.Yo)
if(v&&u)for(w=e*2,q=0;q<8;++q){p=D.k.F(w+q/8,1)
r=C.ar(B.bro,B.Yo,0.5)
r.toString
m.fV(new A.q(0,21-p*6.5,1.6),0.26,r,3,6,0.9)}return n},
fAC(d){return D.d.d_(B.a5e,new A.fAD(d))},
cnT:function cnT(d,e,f){var _=this
_.a=d
_.b=e
_.c=!1
_.d=""
_.e=f
_.r=_.f=!1},
Fj:function Fj(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fyY:function fyY(d,e){this.a=d
this.b=e},
fyX:function fyX(d,e){this.a=d
this.b=e},
fyW:function fyW(){},
fy2:function fy2(d,e){this.a=d
this.b=e},
fAE:function fAE(d,e){this.a=d
this.b=e},
fAD:function fAD(d){this.a=d},
h2Q(d,e,f){var w=x.N
w=new A.cnJ(e,d,C.aX(w),C.U(w,x.S),C.aX(w))
w.bzN(d,e,f)
return w},
hsR(c0,c1,c2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5=C.a([],x.z),b6=new A.fk(b5),b7=C.U(x.S,x.q),b8=C.a([],x.E),b9=c0.c
b9===$&&C.c()
w=b9.a==="bathroom"
v=w?28:0
b6.b=9199
b6.hp(B.hbX,B.he5,B.bfB,4)
b6.hp(B.h9C,B.hcG,B.XQ,4)
b6.hp(new A.q(v+19.8+0.6,24,16),B.h71,B.vH,2)
b7.n(0,9199,B.ebZ)
b6.b=9198
b6.aZ(new A.q(v,0.6,10),B.hd0,B.ju,0.1)
b6.aZ(new A.q(v,29.4,18.6),B.h6H,B.ju,0.1)
b6.aZ(new A.q(v-19.4,13.6,10.5),B.hdR,B.ju,0.1)
for(u=[B.eYy,B.eYu,B.eXr,B.eXo],t=0;t<4;++t){s=u[t].a
b6.aZ(new A.q(v+s[0],33,s[1]),new A.q(s[2],2.4,s[3]),B.bsm,0.6)}b6.Tg(new A.q(v,27,8),new A.q(v,34.3,8),10.5,B.YX,!1,!0,0.7,24)
b6.dR(new A.q(v,27,8),new A.q(v,27.2,8),10.5,B.ag7,0.5,24)
if(w){b6.aZ(new A.q(v,46,0.6),B.h6P,D.bO,0.3)
b6.aZ(new A.q(v,46,1.1),B.h5Q,B.hW,0.9)}b6.dN(new A.q(v,27.1,8),new A.q(v,27.3,8),1.4,B.hq,12)
b6.Tg(new A.q(v+15,23.6,8),new A.q(v+19.4,23.6,8),0.92,B.pU,!1,!0,0.3,12)
b7.n(0,9198,B.eco)
b6.b=9400
b6.dR(new A.q(-56,18,0),new A.q(-56,18,6),1.5,B.xF,0.8,12)
u=c0.r?B.o2:D.bn
b6.dR(new A.q(-57,18,6),new A.q(-55,18,6.5),4,u,0.5,14)
b6.dR(new A.q(-56,16,0),new A.q(-56,20,0),1,B.LJ,0.7,10)
u=c0.r?"The water is ON. Turn it OFF with your hand before you cut into any pipe, and turn it ON to test your work.":"The water is OFF. Turn it ON to test your work."
b7.n(0,9400,new A.cW("Main water valve",u,new A.q(-56,18,4),22))
u=c0.r
s=u?"MAIN WATER: ON":"MAIN WATER: OFF"
u=u?D.dF:D.bn
b8.push(new A.hf(new A.q(-56,24,6),s,u,0))
r=new A.fyV(b6)
u=v-8
r.$1(u)
s=v+8
r.$1(s)
if(w)r.$1(-40)
q=new A.q(v,21,8)
p=new A.fyT(q)
o=new A.fyN(b6,c0)
n=new A.fyO(b6,c0)
m=new A.fyU(c0,b7,c2,c1,b8)
l=b9.c
for(k=l.length,j=c0.x,i=c0.e,h=c0.f,g=x.o,t=0;t<k;++t){f=l[t]
e=f.a
d=i.t(0,e)
if(d){a0=c0.vl(0,e)
a1=h.h(0,e)
if(a1==null)a1=0
a2=a0.r-a1>0}else a2=!1
a3=D.d.cv(l,f)
a4=9100+a3
j.t(0,e)
switch(e){case"flange":a5=new A.q(-30,0.3,14)
if(d){b6.b=a4
b6.dR(a5,new A.q(-30,0.8999999999999999,14),5.5,B.pU,0.4,18)
b6.zs(new A.q(-30,0.8,14),new A.q(-30,1.2,14),5.5,3.2,B.xF,0.8,18)}else n.$3(e,new A.q(-30,0.8,14),B.h_1)
m.$3(f,a5,"Flange spot")
break
case"wax":a5=new A.q(-30,1.2,14)
if(d){b6.b=a4
b6.zs(a5,new A.q(-30,2.3,14),4.2,2.4,B.bsp,0.2,18)}else n.$3(e,new A.q(-30,1.7,14),B.h9P)
m.$3(f,a5,"Wax ring spot")
break
case"toilet":if(d){b6.b=a4
b6.BE(new A.q(-30,0.5,14),new A.q(-30,16,14),8.5,B.Bb,6,0.8,20)
b6.dR(new A.q(-30,16,14),new A.q(-30,17,14),9.5,B.Mz,0.8,20)
b6.aZ(new A.q(-30,22,4.5),B.aW_,B.Bb,0.8)
b6.aZ(new A.q(-30,29.2,4.5),B.h4Y,B.Mz,0.8)}else{b6.b=a4
b6.d=0.32
b6.dN(new A.q(-30,0.5,14),new A.q(-30,17,14),8.5,D.b3,16)
b6.aO(new A.q(-30,22,4.5),B.aW_,D.b3)
b6.d=1}m.$3(f,new A.q(-30,12,12),"Toilet spot")
break
case"bolts":if(d){for(e=9200+a3*2,a6=0;a6<2;++a6){a7=B.aAu[a6]
b6.b=e+(a7<0?0:1)
a0=-30+a7
b6.dR(new A.q(a0,0.5,17),new A.q(a0,3.6,17),0.45,B.Fi,0.8,8)
a1=a2?D.cS:B.Fi
b6.dR(new A.q(a0,3.4,17),new A.q(a0,4.6,17),1.2,a1,0.8,6)}e=a2?"The nuts are loose. Tighten them with the wrench, a little at a time so the porcelain does not crack.":"The toilet is bolted down."
b7.n(0,a4,new A.cW(f.c,e,new A.q(-30,3,17),20))}else for(a6=0;a6<2;++a6){a7=B.aAu[a6]
b6.b=a4
b6.d=0.4
e=-30+a7
b6.dN(new A.q(e,0.5,17),new A.q(e,4.6,17),1.2,D.b3,8)
b6.d=1}m.$3(f,new A.q(-30,3,17),"Bolts")
break
case"tvalve":A.h78(b6,a4,new A.q(-40,8,1.6),d,B.o2,new A.fyJ(n,f,-30))
m.$3(f,new A.q(-40,8,2),"Valve")
break
case"those":if(d){b6.b=a4
b6.ji(A.aib(C.a([new A.q(-40,10,1.6),new A.q(-42,14,3.5),new A.q(-36,17,3.6),new A.q(-32,21,2.5)],g),6),0.55,B.Mt,!1,0.7,8)
b6.ji(C.a([new A.q(-36.8,15.5,3.6),new A.q(-35,16.4,3.6)],g),0.62,B.o2,!1,0.4,8)
if(a2)b6.dN(new A.q(-40,10,1.6),new A.q(-40,11.2,1.6),0.9,D.cS,8)}else o.$3$r(e,A.aib(C.a([new A.q(-40,10,1.6),new A.q(-42,14,3.5),new A.q(-36,17,3.6),new A.q(-32,21,2.5)],g),6),0.9)
m.$3(f,new A.q(-36,15,3),"Toilet hose")
break
case"faucet":if(d){b6.b=a4
b6.dR(new A.q(v,34.2,8),new A.q(v,34.6,8),3.6,B.jI,0.9,20)
b6.ji(A.Ha(C.a([new A.q(v,34.6,8),new A.q(v,40,8),new A.q(v,43,10),new A.q(v,43,14),new A.q(v,41.2,14.6)],g),1.4,6),0.5,B.jI,!0,0.9,10)
for(a6=0;a6<2;++a6){a7=E.a55[a6]
e=v+a7
b6.dR(new A.q(e,34.6,8),new A.q(e,36.6,8),0.5,B.jI,0.9,8)
a0=a7<0?B.tH:B.o2
b6.dR(new A.q(e,36.6,8),new A.q(e,37.6,8),0.8,a0,0.6,10)}for(a6=0;a6<2;++a6){e=v+B.dlS[a6]
b6.dR(new A.q(e,34,8),new A.q(e,28.4,8),0.45,B.jI,0.9,8)}}else n.$3(e,new A.q(v,38,9),B.fZS)
m.$3(f,new A.q(v,38,8),"Faucet spot")
break
case"vhot":A.h78(b6,a4,new A.q(u,8,1.6),d,B.tH,new A.fyK(n,f,v))
m.$3(f,new A.q(u,8,2),"Hot valve")
break
case"vcold":A.h78(b6,a4,new A.q(s,8,1.6),d,B.o2,new A.fyL(n,f,v))
m.$3(f,new A.q(s,8,2),"Cold valve")
break
case"hhot":case"hcold":a8=e==="hhot"
a9=a8?-1:1
a0=v+a9*3
b0=A.aib(C.a([new A.q(v+a9*8,10.5,1.8),new A.q(v+a9*9,16,3.5),new A.q(v+a9*6,22,4.2),new A.q(a0,27.5,6),new A.q(a0,28.6,8)],g),6)
if(d){b6.b=a4
b6.ji(b0,0.5,B.Mt,!1,0.7,8)
b1=b0.length/2|0
e=C.a([b0[b1-1],b0[b1],b0[b1+1]],g)
b6.ji(e,0.58,a8?B.tH:B.o2,!1,0.4,8)
if(a2){e=D.d.gI(b0)
a0=D.d.gI(b0)
b6.dN(e,new A.q(a0.a+0,a0.b+1.4,a0.c+0),0.9,D.cS,8)
a0=D.d.gak(b0)
b6.dN(new A.q(a0.a,a0.b-1.4,a0.c),D.d.gak(b0),0.9,D.cS,8)}}else o.$3$r(e,b0,0.9)
e=b0[b0.length/2|0]
m.$3(f,e,a8?"Hot hose":"Cold hose")
break
case"tail":case"trap":case"arm":a0=e==="tail"
if(a0)a1=B.a4m
else a1=e==="trap"?A.fPK():B.a5k
b2=p.$1(a1)
if(d){b6.b=a4
a1=a0?B.jI:B.pU
b6.a75(b2,0.66,a1,!1,!0,!0,a0?0.85:0.3,12)}else o.$3$r(e,b2,0.78)
a1=J.a5(b2)
a1=a1.h(b2,a1.gL(b2)/2|0)
if(a0)e="Tailpiece"
else e=e==="trap"?"P-trap":"Trap arm"
m.$3(f,a1,e)
break}}b3=new A.fyR(l,c0,b6,b7)
b3.$4("trap",q.a9(0,B.aaT),B.eb,0)
b3.$4("arm",q.a9(0,B.aaV),B.hF,1)
for(u=C.eo(j,j.r,C.a7(j).c),s=u.$ti.c;u.C();){k=u.d
if(k==null)k=s.a(k)
b4=D.d.fP(b9.c,new A.fyM(k))
k=A.hwZ(c0,k)
b8.push(new A.hf(new A.q(k.a+0,k.b+6,k.c+4),"\ud83d\udca7 LEAK: "+b4.c,D.bx,0))}return new A.tP(b5,b7,b8,B.wz,null,0)},
h78(d,e,f,g,h,i){if(!g){i.$0()
return}d.b=e
d.dR(f.a9(0,B.h9R),f.a9(0,B.aX3),0.9,B.xF,0.8,12)
d.dR(f.a9(0,B.aX3),f.a9(0,B.h6z),0.45,B.xF,0.8,10)
d.dR(f.a9(0,B.hcX),f.a9(0,B.aXn),0.3,B.aeJ,0.7,8)
d.dR(f.a9(0,B.aXn),f.a9(0,B.hdt),1.2,h,0.5,12)},
hwZ(d,e){var w,v=d.c
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
ihY(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=C.a([],x.z),f=new A.fk(g),e=d.x
if(e.a===0)return g
for(e=C.eo(e,e.r,C.a7(e).c),w=a0*2,v=e.$ti.c,u=d.e;e.C();){t=e.d
if(t==null)t=v.a(t)
s=A.hwZ(d,t)
r=d.c
r===$&&C.c()
q=D.d.fP(r.c,new A.fPz(t)).b==="valve"||!u.t(0,t)
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
f.fV(new A.q(t+m*l*n,r+(l*k-l*l*j),p+(1.5+l*i)),h,B.Z8,3,6,0.5);++o}f.d=0.55
f.dR(new A.q(t,0.3,11),new A.q(t,0.5,11),7+2*Math.sin(w),B.Z8,0.6,18)
f.d=1}return g},
nr:function nr(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
Xn:function Xn(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cnJ:function cnJ(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.d=_.c=$
_.e=f
_.f=g
_.r=!0
_.w=0
_.x=h
_.y=!1},
cnN:function cnN(d){this.a=d},
cnO:function cnO(d){this.a=d},
cnK:function cnK(d){this.a=d},
cnP:function cnP(d){this.a=d},
cnQ:function cnQ(d){this.a=d},
cnR:function cnR(){},
cnS:function cnS(){},
cnL:function cnL(d){this.a=d},
cnM:function cnM(d){this.a=d},
fyV:function fyV(d){this.a=d},
fyT:function fyT(d){this.a=d},
fyN:function fyN(d,e){this.a=d
this.b=e},
fyQ:function fyQ(d){this.a=d},
fyO:function fyO(d,e){this.a=d
this.b=e},
fyP:function fyP(d){this.a=d},
fyU:function fyU(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fyJ:function fyJ(d,e,f){this.a=d
this.b=e
this.c=f},
fyK:function fyK(d,e,f){this.a=d
this.b=e
this.c=f},
fyL:function fyL(d,e,f){this.a=d
this.b=e
this.c=f},
fyR:function fyR(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fyS:function fyS(d){this.a=d},
fyM:function fyM(d){this.a=d},
fPz:function fPz(d){this.a=d},
Wn:function Wn(d,e){this.d=d
this.a=e},
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
eoT:function eoT(d,e,f){this.a=d
this.b=e
this.c=f},
eoU:function eoU(d){this.a=d},
eoS:function eoS(d){this.a=d},
eoM:function eoM(d){this.a=d},
eoY:function eoY(d){this.a=d},
eoB:function eoB(d,e){this.a=d
this.b=e},
eoC:function eoC(d,e){this.a=d
this.b=e},
eoD:function eoD(d){this.a=d},
eoI:function eoI(d){this.a=d},
eoG:function eoG(d){this.a=d},
eoH:function eoH(d,e){this.a=d
this.b=e},
eoR:function eoR(d){this.a=d},
eoZ:function eoZ(d){this.a=d},
eoJ:function eoJ(d){this.a=d},
eoK:function eoK(){},
eoL:function eoL(d){this.a=d},
eoV:function eoV(d,e){this.a=d
this.b=e},
eoW:function eoW(d){this.a=d},
eoX:function eoX(d,e){this.a=d
this.b=e},
eoF:function eoF(d,e,f){this.a=d
this.b=e
this.c=f},
eoE:function eoE(d,e,f){this.a=d
this.b=e
this.c=f},
ep_:function ep_(d){this.a=d},
ep3:function ep3(d,e){this.a=d
this.b=e},
ep1:function ep1(){},
ep0:function ep0(d){this.a=d},
ep2:function ep2(d,e){this.a=d
this.b=e},
eoQ:function eoQ(d){this.a=d},
eoO:function eoO(d,e){this.a=d
this.b=e},
eoN:function eoN(d,e){this.a=d
this.b=e},
eoP:function eoP(d,e){this.a=d
this.b=e},
jY(d){return D.d.fP(B.uD,new A.fXW(d))},
csF(d,e,f,g,h){var w=x.S,v=x.N
v=new A.XR(g,f,C.U(w,v),C.aX(w),C.aX(w),C.U(w,x.cH),C.a([new A.Y2(),new A.Y2()],x.gD),C.U(w,x.cD),C.aX(w),C.U(w,v),C.aX(w),C.a([],x.s),C.U(w,v))
v.clw(d,e,h)
return v},
csG(d){var w
A:{if("tv"===d){w="The TV"
break A}if("lamp"===d){w="The lamp"
break A}if("toaster"===d){w="The toaster"
break A}w="The hair dryer"
break A}return w},
h3h(d,e){var w=!0
if(d!==e)if(!(D.d.t(B.lJ,d)&&D.d.t(B.lJ,e)))if(!(D.d.t(B.jW,d)&&D.d.t(B.jW,e)))if(d==="light"||d==="fan")w=e==="light"||e==="fan"
else w=!1
return w},
z8:function z8(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fXW:function fXW(d){this.a=d},
ox:function ox(d,e,f){this.a=d
this.b=e
this.c=f},
Y2:function Y2(){var _=this
_.a=!1
_.b=0
_.c=!0
_.d=!1},
aw5:function aw5(d,e){var _=this
_.a=!1
_.b=d
_.c=e
_.e=_.d=!1},
aUR:function aUR(d,e){this.a=d
this.b=e
this.c=!1},
eC:function eC(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
XR:function XR(d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
csK:function csK(){},
csR:function csR(d){this.a=d},
csS:function csS(d){this.a=d},
csT:function csT(d,e){this.a=d
this.b=e},
csU:function csU(d,e){this.a=d
this.b=e},
csW:function csW(d){this.a=d},
csV:function csV(d,e){this.a=d
this.b=e},
csJ:function csJ(d){this.a=d},
csH:function csH(){},
csI:function csI(d){this.a=d},
csP:function csP(){},
csQ:function csQ(){},
csL:function csL(){},
csM:function csM(d){this.a=d},
csN:function csN(d){this.a=d},
csX:function csX(d){this.a=d},
csO:function csO(d){this.a=d},
cib(d,e,f){return new A.On(!1,e,f,!1,null)},
iW:function iW(d,e,f){this.a=d
this.b=e
this.c=f},
On:function On(d,e,f,g,h){var _=this
_.c=d
_.e=e
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
_.Q=-1
_.as=0
_.at=""
_.ax=null
_.cx=_.CW=_.ch=_.ay=!1
_.c=_.a=_.cy=null},
etx:function etx(d,e,f){this.a=d
this.b=e
this.c=f},
ety:function ety(d){this.a=d},
etw:function etw(d){this.a=d},
esz:function esz(d){this.a=d},
esA:function esA(d){this.a=d},
esy:function esy(d){this.a=d},
esB:function esB(d){this.a=d},
esC:function esC(d){this.a=d},
esx:function esx(d){this.a=d},
esD:function esD(d){this.a=d},
esE:function esE(d){this.a=d},
esO:function esO(d){this.a=d},
esQ:function esQ(d){this.a=d},
esF:function esF(){},
esG:function esG(d){this.a=d},
esH:function esH(d){this.a=d},
et6:function et6(d,e){this.a=d
this.b=e},
esP:function esP(d){this.a=d},
ett:function ett(d){this.a=d},
etu:function etu(d){this.a=d},
etv:function etv(d,e){this.a=d
this.b=e},
etr:function etr(d){this.a=d},
ets:function ets(d,e){this.a=d
this.b=e},
etq:function etq(d){this.a=d},
eti:function eti(d){this.a=d},
etj:function etj(d){this.a=d},
etk:function etk(d){this.a=d},
etl:function etl(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
etm:function etm(d){this.a=d},
etn:function etn(d,e,f){this.a=d
this.b=e
this.c=f},
eto:function eto(d){this.a=d},
etp:function etp(d,e,f){this.a=d
this.b=e
this.c=f},
etz:function etz(d,e){this.a=d
this.b=e},
esN:function esN(d){this.a=d},
esL:function esL(d){this.a=d},
esM:function esM(d,e){this.a=d
this.b=e},
esK:function esK(d){this.a=d},
esI:function esI(d){this.a=d},
esJ:function esJ(d,e){this.a=d
this.b=e},
esR:function esR(d,e){this.a=d
this.b=e},
et4:function et4(){},
et5:function et5(){},
esS:function esS(d){this.a=d},
esT:function esT(d){this.a=d},
esU:function esU(d){this.a=d},
esX:function esX(){},
esY:function esY(){},
esZ:function esZ(){},
et_:function et_(){},
et0:function et0(){},
et1:function et1(d){this.a=d},
et2:function et2(){},
et3:function et3(d){this.a=d},
esV:function esV(d){this.a=d},
esW:function esW(){},
etS:function etS(d,e){this.a=d
this.b=e},
etU:function etU(d){this.a=d},
etE:function etE(d){this.a=d},
etT:function etT(d){this.a=d},
etH:function etH(d){this.a=d},
etI:function etI(d,e){this.a=d
this.b=e},
etG:function etG(d,e){this.a=d
this.b=e},
etJ:function etJ(d,e){this.a=d
this.b=e},
etF:function etF(d,e){this.a=d
this.b=e},
etV:function etV(d,e){this.a=d
this.b=e},
etD:function etD(d,e){this.a=d
this.b=e},
etW:function etW(d){this.a=d},
etC:function etC(d){this.a=d},
etX:function etX(d,e){this.a=d
this.b=e},
etB:function etB(d,e){this.a=d
this.b=e},
etY:function etY(d){this.a=d},
etZ:function etZ(d){this.a=d},
eu_:function eu_(d,e,f){this.a=d
this.b=e
this.c=f},
etA:function etA(d,e,f){this.a=d
this.b=e
this.c=f},
etK:function etK(d){this.a=d},
etL:function etL(d,e){this.a=d
this.b=e},
etM:function etM(d){this.a=d},
etN:function etN(d){this.a=d},
etO:function etO(d){this.a=d},
etP:function etP(d){this.a=d},
etQ:function etQ(d){this.a=d},
etR:function etR(d,e){this.a=d
this.b=e},
eth:function eth(d,e){this.a=d
this.b=e},
etg:function etg(d,e){this.a=d
this.b=e},
eta:function eta(d,e){this.a=d
this.b=e},
et8:function et8(){},
et9:function et9(){},
etb:function etb(d,e){this.a=d
this.b=e},
et7:function et7(){},
etc:function etc(d){this.a=d},
etd:function etd(d,e,f){this.a=d
this.b=e
this.c=f},
ete:function ete(d,e){this.a=d
this.b=e},
etf:function etf(d,e){this.a=d
this.b=e},
aia(d,e){var w=d.d,v=e.a,u=e.c,t=e.b,s=w.a,r=w.b
w=w.c
return d.c?new A.q(s+v,r-u,w+t):new A.q(s+v,r+t,w+u)},
h6o(d,e,f,g){var w,v,u,t,s,r=d.a,q=e.d,p=e.c?A.ny(r,1.5707963267948966,0,q):A.ny(r,0,0,q)
r=C.a([],x.z)
for(q=p.length,w=0;w<p.length;p.length===q||(0,C.M)(p),++w){v=p[w]
u=v.d
u=u===0?0:f.$1(u)
t=v.f
s=t<0.99?3:2
r.push(new A.ko(v.a,v.b,v.c,u,v.e,t,v.r,v.w,v.x,s,g))}q=C.U(x.S,x.q)
for(u=d.b,u=u.gdS(u),u=u.gaf(u);u.C();){t=u.gT(u)
s=f.$1(t.a)
t=t.b
q.n(0,s,new A.cW(t.a,t.b,A.aia(e,t.c),t.d))}return new C.z(r,q)},
i2w(a3,a4,a5,a6,a7,a8,a9,b0,b1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=x.i,a2=C.eD([a4,a5],a1)
for(w=b1.length,v=0;v<b1.length;b1.length===w||(0,C.M)(b1),++v){u=b1[v].a
a2.M(0,D.k.E(u[0],a4,a5))
a2.M(0,D.k.E(u[1],a4,a5))}t=C.C(a2,a2.$ti.k("cs.E"))
D.d.fd(t)
for(w=C.T(b1).k("Z<1>"),u=w.k("L.E"),s=0;r=s+1,r<t.length;s=r){q=t[s]
p=t[r]
o=p-q
if(o<0.01)continue
n=(q+p)/2
m=C.C(new C.Z(b1,new A.frj(n),w),u)
l=C.eD([a6,a7],a1)
for(k=m.length,v=0;v<m.length;m.length===k||(0,C.M)(m),++v){j=m[v].a
l.M(0,D.k.E(j[2],a6,a7))
l.M(0,D.k.E(j[3],a6,a7))}i=C.C(l,l.$ti.k("cs.E"))
D.d.fd(i)
for(k=!(o>30),h=0;g=h+1,g<i.length;h=g){f=i[h]
e=i[g]
j=e-f
if(j<0.01)continue
d=(f+e)/2
if(D.d.b2(m,new A.frk(d)))continue
a0=!k||j>60?2:1
a3.hp(new A.q(n,d,a8),new A.q(o,j,a9),b0,a0)}}},
wV(d1,d2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1=null,c2=x.z,c3=C.a([],c2),c4=new A.fk(c3),c5=C.a([],x.a),c6=x.E,c7=C.a([],c6),c8=x.S,c9=C.U(c8,x.q),d0=$.dS=$.dS+1
c4.f=-1
c4.b=8001
c4.n9(B.h45,B.h7t,B.Bu,0.15,4)
c4.f=0
c4.hp(B.h3B,B.aWx,B.aeF,3)
c4.aZ(B.hce,B.hdD,B.hW,0.5)
c4.aO(B.aWD,B.h3k,B.Bf)
c4.aO(B.aWD,B.hdU,B.Bf)
c4.hp(B.h7x,B.aWx,B.aeF,3)
c4.aZ(B.h3t,B.h7y,B.vD,0.15)
c4.aZ(B.h8f,B.h7F,B.EZ,0.8)
c4.b=0
c4.f=3
c4.d=d1.gwG()?0.42:0.1
c4.hp(B.h1E,B.h9J,d1.gwG()?B.kA:B.bbA,3)
c4.d=1
c4.f=2
c4.b=8001
if(!d1.gwG())for(w=0;w<10;++w)c4.aDL(new A.q(-72+w*16,51.3,55),B.haj,B.ju,!1,0.05)
else{c4.x=d0
c4.aZ(B.h8J,B.h60,D.c,0.2)
c4.aZ(B.heN,B.aWQ,D.c,0.2)
c4.aZ(B.h52,B.aWQ,D.c,0.2)}if(d1.gwG()){c4.x=d0
c4.aZ(B.h5b,B.h66,B.kA,0.2)}c4.x=0
c4.b=8001
c4.r=!0
c4.hp(B.hdq,B.hed,B.agp,2)
c4.aZ(B.hco,B.h32,B.Yk,0.1)
c4.aZ(B.hcn,B.h33,B.LX,0.1)
c4.aZ(B.hbW,B.aWo,B.LX,0.1)
c4.aZ(B.h0Q,B.aWo,B.LX,0.1)
c4.r=!1
c9.n(0,8001,B.ebH)
c4.x=d0
c4.b=8002
c4.n9(B.hew,B.aWs,B.ju,0.05,3)
c4.n9(B.h27,B.aWs,B.ju,0.05,3)
c9.n(0,8002,B.ec8)
for(v=d1.y,w=0;u=$.Hi(),w<u.length;++w){t=1000+w
c4.b=t
c4.cIh(new A.q(u[w],0,-2.25),B.ha0,B.ju,!1,0.05,2)
s=v.t(0,w)?"This one has a hole for the cable.":"Tap it with the drill to put a hole through it."
c9.n(0,t,new A.cW("Wall stud","A 2x4 stud, one of the vertical posts in the wall. They stand 16 inches apart. "+s,new A.q(u[w],20,-2),60))
if(v.t(0,w)){c4.b=0
c4.e=0.6
c4.aO(new A.q(u[w],40,-2.25),B.h3z,B.ahA)
c4.e=0}}c4.b=8000
c4.aZ(B.h1_,B.h_j,B.XA,0.5)
c4.e=0.4
c4.aO(B.h7e,B.hcZ,B.F8)
for(r=0;r<6;++r)for(v=19.5-r*3.6,q=0;q<2;++q)c4.aZ(new A.q(61.6+q*4.8,v,0.5),B.fXn,B.Za,0.3)
p=d1.ax&&!d1.ay
v=p?0.6:0
if(d1.ay)u=D.ce
else u=p?D.bx:D.hg
c4.aZ(new A.q(64,-2.5+v,0.9),B.h5W,u,0.4)
c4.e=0
if(d1.ay)v="The main breaker has TRIPPED (orange). Tap it to flip it fully OFF, fix the problem, then turn it ON."
else v=d1.ax?"The power is ON. Tap to turn it OFF. Always turn it OFF before you touch any wire.":"The power is OFF. Tap to turn it ON."
c9.n(0,8000,new A.cW("Breaker panel",v,B.h37,60))
c4.b=8003
for(v=d1.z,u=C.eo(v,v.r,C.a7(v).c),t=x.o,s=u.$ti.c;u.C();){o=u.d
n=A.jY(o==null?s.a(o):o)
o=n.d
m=o.a-0.35
l=C.a([B.hb6,B.h8F,new A.q(m,40,-3.2)],t)
if(n.c)D.d.v(l,C.a([new A.q(m,51.4,-3.2),new A.q(m,51.4,o.c+11)],t))
else l.push(new A.q(m,o.b+11,-3.4))
c4.ji(A.Ha(l,3,6),0.2,B.Yr,!1,0.35,6)}c9.n(0,8003,B.ecw)
for(u=x.eV,s=d1.Q,k=0;k<3;++k){j=B.ov[k]
i=s.h(0,j)
if(i==null||!i.a)continue
if(i.e)h=B.bpJ
else h=i.d?B.brf:B.bqB
o=C.a([],u)
for(m=i.b,l=C.a7(m),g=new C.ml(m,m.r,l.k("ml<1>")),g.c=m.e,l=l.c;g.C();){m=g.d
if(m==null)m=l.a(m)
o.push(new C.cw([A.jY(m).d.a-1.15,A.jY(m).d.a+1.15,A.jY(m).d.b-2,A.jY(m).d.b+2]))}m=6100+k
c4.b=m
A.i2w(c4,j,j+48,-47,47,-0.25,0.5,h,o)
o=i.e?"Painted and finished.":"A 4 by 8 foot sheet of drywall (gypsum between two layers of paper). It is screwed to the studs."
c9.n(0,m,new A.cW("Drywall sheet",o,new A.q(j+24,0,0),90))
c4.b=0
c4.e=0.3
for(o=i.c,m=C.a7(o),l=new C.ml(o,o.r,m.k("ml<1>")),l.c=o.e,m=m.c;l.C();){o=l.d
if(o==null)o=m.a(o)
f=D.o.ao(o,10)
e=D.o.F(o,10)
c4.fV(new A.q($.Hi()[f],-40+e*16,0.1),0.34,B.F8,3,5,0.3)}c4.e=0}for(u=d2.a,o=u!=="tape",m=d1.as,l=u!=="mud",g=u==="sand",w=0;w<2;w=a1){d=-24+48*w
a0=s.h(0,B.ov[w])
a0=a0==null?c1:a0.a
a1=w+1
a2=s.h(0,B.ov[a1])
a2=a2==null?c1:a2.a
if(a0!==!0||a2!==!0)continue
a3=m[w]
a0=6200+w
c4.b=a0
if(a3.a&&!a3.d){a2=a3.b
if(a2===0)h=B.bpM
else h=a3.c?B.blE:B.bgD
c4.e=0.5
c4.aO(new A.q(d,0,0.08+0.02*a2),new A.q(2.2+a2*1.4,94,0.12),h)
c4.e=0}else if(!o||!l||g){c4.d=0.45
c4.e=0.6
c4.aO(new A.q(d,0,0.12),B.h6j,D.b3)
c4.e=0
c4.d=1}if(a3.d)a2="Smooth and ready for paint."
else if(!a3.a)a2="The joint between two sheets. It needs tape and three coats of joint compound."
else{a2=a3.b
a4=a2===1?"":"s"
a4="Taped, with "+a2+" coat"+a4+" of mud."
a2=a4}c9.n(0,a0,new A.cW("Seam",a2,new A.q(d,0,0),70))}for(o=d2.b,m=d1.x,l=d1.at,g=x.N,a5=0;a5<7;++a5){n=B.uD[a5]
a0=n.a
a6=m.aj(0,a0)
a7=l.h(0,a0)
a8=o===a0&&a7!=null
if(!a6)continue
a2=n.c
if(a2)a9=n.e==="fan"?"fan":"light"
else{a4=a7==null?c1:a7.a
a9=a4==null?"outlet":a4}if(a8){b0=A.t2(a7.a)
a0=a7.b
b1=A.h7f(b0,a0,!1)
b2=A.h6o(b1,n,new A.fyZ(n),d0)
D.d.v(c3,b2.a)
c9.v(0,b2.b)
if(a0.f&&a0.c===0){a0=C.a([],c6)
for(a2=b1.c,a4=a2.length,b3=0;b3<a2.length;a2.length===a4||(0,C.M)(a2),++b3){b4=a2[b3]
a0.push(new A.hf(A.aia(n,b4.a),b4.b,b4.c,0))}D.d.v(c7,a0)}}else if(a7!=null&&a7.b.c>=2){a4=a7.a
b5=a7.b
b6=b5.w
b7=C.a([],c2)
b8=new A.fk(b7)
b9=new A.CE(C.U(c8,g))
b9.c=2
b9.w=b6
if(a4==="light"||a4==="fan")A.hpo(b8,a4,b9)
else{A.hp2(b8,A.h7T(a4),-0.25,b6,!0,!1)
A.hrs(b8,b6)}D.d.v(c3,A.h6o(new A.tP(b7,B.S9,B.zo,B.wz,c1,0),n,new A.fz_(n),d0).a)
if(!a2){c4.f=3
c4.b=3000+a0
c4.e=0.4
c4.d=0.55
a2=n.d
b5=b5.w?D.aw:D.b9
c4.aO(new A.q(a2.a,a2.b,a2.c+0.2),B.h6n,b5)
c4.d=1
c4.f=2
c4.e=0}c9.n(0,3000+a0,new A.cW(A.hZc(a4),A.hZb(d1,a0),A.aia(n,B.aaH),22))}else{a4=C.a([],c2)
b5=A.h7T(a9)===a9?a9:"outlet"
A.hon(new A.fk(a4),b5,!1)
D.d.v(c3,A.h6o(new A.tP(a4,B.dzg,B.zo,B.wz,c1,0),n,new A.fz0(n),d0).a)
a2=a2?"Ceiling box":"Electrical box"
a4=v.t(0,a0)?"The box is mounted and the cable is in. A device can be wired here.":"The box is mounted. Pull the cable to it."
c9.n(0,2000+a0,new A.cW(a2,a4,A.aia(n,B.aaH),24))}}c4.x=0
c0=new A.fz3(c4)
if(u==="wall"||u==="ceiling"||u==="fanbox")for(a5=0;a5<7;++a5){n=B.uD[a5]
c2=n.a
if(m.aj(0,c2))continue
c6=n.c
c8=n.d
s=c8.a
o=c8.b
a0=c6?new A.q(s,o-1,c8.c):new A.q(s,o,1.5)
a2=c6?B.h3I:B.h5K
c0.$4$round(2000+c2,a0,a2,c6)
c2=c6?new A.q(s,o-8,c8.c):new A.q(s,o+7,3)
c7.push(new A.hf(c2,n.b,D.eR,0))}else if(u==="cable")for(a5=0;a5<7;++a5){n=B.uD[a5]
c2=n.a
if(!m.aj(0,c2)||v.t(0,c2))continue
c6=n.c
c8=n.d
s=c8.a
o=c8.b
c8=c6?new A.q(s,o-1,c8.c):new A.q(s,o,1.5)
s=c6?B.aWv:B.h47
c0.$5$col$round(2000+c2,c8,s,D.bG,c6)}else if(u==="knife")for(a5=0;a5<7;++a5){n=B.uD[a5]
if(n.c||!m.aj(0,n.a))continue
c2=n.d
c6=c2.a
i=d1.aqa(c6)
if(i==null||i.b.t(0,n.a))continue
c0.$4$col(2000+n.a,new A.q(c6,c2.b,0.5),B.h5T,D.cS)}else if(u==="sheet")for(w=0;w<5;){j=B.a5g[w]
c0.$3(6000+w,new A.q(j,0,0.3),B.ha4);++w
c7.push(new A.hf(new A.q(j,50,1),"edge "+w,D.eR,0))}else if(u==="screw")for(a5=0;a5<3;++a5){j=B.ov[a5]
i=s.h(0,j)
if(i==null||!i.a)continue
for(c2=d1.aqv(j),c6=c2.length,c8=i.c,o=j+48,b3=0;b3<c2.length;c2.length===c6||(0,C.M)(c2),++b3){f=c2[b3]
for(a0=f*10,a2=7000+a0,r=0;r<6;++r){if(c8.t(0,a0+r))continue
c0.$3(a2+r,new A.q($.Hi()[f],-40+r*16,0.5),B.aWl)}a2=$.Hi()
if(f+1<a2.length&&a2[f]+16<=o)for(a0=7500+a0,r=0;r<6;r+=2)c0.$4$col(a0+r,new A.q(a2[f]+8,-40+r*16+8,0.5),B.aWl,D.dt)}}if(!C.eD(["wall","ceiling","fanbox","cable","knife","sheet","screw",""],g).t(0,u))c2=D.d.t(B.I7,u)||C.eD(["outlet","gfci","switch","light","fan"],g).t(0,u)||D.d.t(B.lJ,u)||D.d.t(B.jW,u)
else c2=!1
if(c2)for(c2=d1.CW,a5=0;a5<7;++a5){n=B.uD[a5]
if(D.d.t(B.I7,u)){c6=n.a
a7=l.h(0,c6)
if(a7!=null&&D.d.t(B.lJ,a7.a)&&a7.b.c>=2&&!c2.aj(0,c6)){c8=n.d
c0.$4$col(3000+c6,new A.q(c8.a,c8.b,1.2),B.h6q,D.bj)}}else{c6=n.a
if(m.aj(0,c6)&&v.t(0,c6)&&!l.aj(0,c6)){c8=n.c
s=n.d
o=s.a
g=s.b
s=c8?new A.q(o,g-1,s.c):new A.q(o,g,1.2)
o=c8?B.aWv:B.h9Z
c0.$4$round(2000+c6,s,o,c8)}}}c4.r=!0
for(c2=d1.CW,c6=new C.cH(c2,C.a7(c2).k("cH<1,2>")).gaf(0);c6.C();){j=c6.d
c8=j.a
n=A.jY(c8)
v=n.d
d=v.a
c4.b=8200+c8
v=v.b
c4.ji(A.Ha(C.a([new A.q(d,v,2.5),new A.q(d,-46,3.5),new A.q(d,-46,22)],t),4,6),0.55,B.Yv,!1,0.2,6)
c4.aZ(new A.q(d,v,1.8),B.h8c,B.bfP,0.3)
v=c4.b=8100+c8
u=j.b
switch(u){case"tv":c4.aZ(new A.q(d,-45,24),B.h2r,B.agS,0.2)
c4.aZ(new A.q(d,-19,24),B.h3W,E.Fo,0.4)
if(c2.aj(0,c8))c8=d1.ax&&!d1.ay&&d1.a4D(c8)
else c8=!1
if(c8){c8=d-38.5
s=d+38.5
c5.push(new A.fQ(C.a([new A.q(c8,1.5,25.7),new A.q(s,1.5,25.7),new A.q(s,-39.5,25.7),new A.q(c8,-39.5,25.7)],t),v,new A.fz1(j),320,180,9,2,0,!1))}break
case"lamp":c4.dR(new A.q(d,-47.5,24),new A.q(d,-46.5,24),6,B.Xt,0.4,14)
c4.dR(new A.q(d,-46.5,24),new A.q(d,-22,24),1,B.Bu,0.5,8)
c4.yQ(new A.q(d,-26,24),new A.q(d,-12,24),9,K.YD,!1,!0,5.5,0.2,16)
break
case"toaster":c4.aZ(new A.q(d,-42.5,24),B.h_T,B.jI,0.8)
c4.aO(new A.q(d,-38,24),B.hb5,B.ai9)
break
default:c4.aZ(new A.q(d,-43.5,24),B.h0x,B.agS,0.2)
c4.BE(new A.q(d-6,-38,24),new A.q(d+8,-38,24),3.4,B.Mq,3,0.6,12)
c4.wp(new A.q(d-8,-43,24),B.h02,B.Mq,0.6,0)}c8=A.hXl(u)
s="Plugged into "+n.b
u=u==="tv"?s+". To unplug it, go behind it (the Behind the TV button) and tap the plug on the wall.":s+". Tap it to unplug."
c9.n(0,v,new A.cW(c8,u,new A.q(d,-35,20),60))}c4.r=!1
for(a5=0;a5<7;++a5){n=B.uD[a5]
c9.c4(0,2000+n.a,new A.fz2(n))}return new A.tP(c3,c9,c7,c5,c1,0)},
hZc(d){var w
A:{if("gfci"===d){w="GFCI outlet"
break A}if("switch"===d){w="Light switch"
break A}if("light"===d){w="Ceiling light"
break A}if("fan"===d){w="Ceiling fan"
break A}if("outlet"===d){w="Outlet"
break A}w=A.agU(d)
break A}return w},
hXl(d){var w
A:{if("tv"===d){w="TV"
break A}if("lamp"===d){w="Lamp"
break A}if("toaster"===d){w="Toaster"
break A}w="Hair dryer"
break A}return w},
hZb(d,e){var w,v=d.at.h(0,e)
if(v==null)return""
if(v.b.w)return"BURNT. It was wired wrong and it burnt out. Pull it out and put in a new one."
w=v.a
if(D.d.t(B.jW,w))return d.ch.t(0,e)?"The switch is ON. Tap to turn it off.":"The switch is OFF. Tap to flip it on."
if(w==="light"||w==="fan")return d.ang(e)?"It is running.":"It is off. Flip its switch (breaker on)."
w=d.CW.h(0,e)
return"Tap with a TV, lamp, toaster or hair dryer in your hand to plug it in. Plugged: "+(w==null?"nothing":w)+"."},
iie(a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=C.a([],x.z),a0=new A.fk(d)
for(w=D.d.gaf(B.uD),v=new C.f5(w,new A.fPT()),u=a1.at,t=a2*7;v.C();){s=w.gT(0)
r=s.a
q=u.h(0,r)
if(q==null||q.b.c<1)continue
p=a1.ang(r)?t:0.4
a0.b=3000+r
s=s.d
r=s.a
o=s.b-6.6
s=s.c
for(n=0;n<4;++n){m=p+n*3.141592653589793/2
l=A.vy(B.h_g,m)
a0.wp(new A.q(r+l.a,o+l.b,s+l.c),B.he_,B.bes,0.3,m)}}w=a1.d
w===$&&C.c()
w=D.d.gaf(w)
v=new C.f5(w,new A.fPU())
u=a2*5
while(v.C()){s=w.gT(0).a
if(a1.ang(s)){k=A.jY(s)
a0.b=0
a0.d=0.25+0.05*Math.sin(u)
s=k.d
a0.fV(new A.q(s.a,s.b-5,s.c),11,B.XU,4,10,0)
a0.d=1}}for(w=a1.CW,v=new C.cH(w,C.a7(w).k("cH<1,2>")).gaf(0),u=a2*1.6,s=a2*6;v.C();){j=v.d
r=j.a
if(w.aj(0,r))o=a1.ax&&!a1.ay&&a1.a4D(r)
else o=!1
if(!o)continue
i=A.jY(r).d.a
a0.b=8100+r
switch(j.b){case"tv":break
case"lamp":a0.b=0
a0.d=0.3+0.05*Math.sin(s)
a0.fV(new A.q(i,-19,24),11,H.xD,4,10,0)
a0.d=1
break
case"toaster":a0.e=0.8
r=C.ar(B.agm,H.Mv,(Math.sin(s)+1)/2)
r.toString
a0.aO(new A.q(i,-38.2,24),new A.q(13,0.3,6),r)
a0.e=0
break
default:for(r=i+9,h=0;h<6;++h)a0.fV(new A.q(r+D.k.F(u+h/6,1)*22,-38+Math.sin(h*2)*2,24),0.6,B.bm2,3,5,0.2)}}for(w=a1.db,w=new C.cH(w,C.a7(w).k("cH<1,2>")).gaf(0),v=a1.cx;w.C();){j=w.d
u=j.a
k=A.jY(u)
g=a3.h(0,u)
f=a2<=(g==null?0:g)
e=v.t(0,u)
if(!f&&!e)continue
u=f?j.b:"smolder"
A.hti(a0,u,new A.fPV(k),1,a2)}return d},
rK:function rK(d,e,f){this.a=d
this.b=e
this.c=f},
frj:function frj(d){this.a=d},
frk:function frk(d){this.a=d},
fyZ:function fyZ(d){this.a=d},
fz_:function fz_(d){this.a=d},
fz0:function fz0(d){this.a=d},
fz3:function fz3(d){this.a=d},
fz1:function fz1(d){this.a=d},
fz2:function fz2(d){this.a=d},
fPT:function fPT(){},
fPU:function fPU(){},
fPV:function fPV(d){this.a=d},
hl3(d,e){var w=new A.cw5(e,d,A.heq())
w.bA_(4,d,e)
return w},
ri:function ri(d,e){this.a=d
this.b=e},
uy:function uy(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
MA:function MA(d,e){this.a=d
this.b=e
this.c=!1},
cw5:function cw5(d,e,f){var _=this
_.a=d
_.b=e
_.c=$
_.d=f
_.e=3
_.r=_.f=0
_.w=!1},
cwa:function cwa(d){this.a=d},
cw6:function cw6(){},
cw8:function cw8(){},
cw9:function cw9(){},
cw7:function cw7(d){this.a=d},
arV:function arV(d,e){this.d=d
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
evm:function evm(d,e,f){this.a=d
this.b=e
this.c=f},
evn:function evn(d){this.a=d},
evl:function evl(d){this.a=d},
evb:function evb(d){this.a=d},
evg:function evg(d){this.a=d},
evh:function evh(d){this.a=d},
evf:function evf(d){this.a=d},
evi:function evi(d,e){this.a=d
this.b=e},
evj:function evj(d){this.a=d},
evk:function evk(d){this.a=d},
eve:function eve(d){this.a=d},
evd:function evd(d,e){this.a=d
this.b=e},
eva:function eva(d){this.a=d},
ev8:function ev8(d){this.a=d},
ev9:function ev9(d,e){this.a=d
this.b=e},
evc:function evc(d){this.a=d},
evz:function evz(d,e){this.a=d
this.b=e},
evv:function evv(){},
evu:function evu(d){this.a=d},
evw:function evw(){},
evx:function evx(){},
evy:function evy(d,e){this.a=d
this.b=e},
evt:function evt(d,e){this.a=d
this.b=e},
evs:function evs(d){this.a=d},
evr:function evr(d){this.a=d},
evp:function evp(d,e){this.a=d
this.b=e},
evo:function evo(){},
evq:function evq(d,e){this.a=d
this.b=e},
atM(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){return new A.y4(p,s,u,t,r,h,o,n,m,i,q,d,j,g,k,e,f,l)},
ihG(d){var w,v,u,t,s,r,q,p,o,n,m=d.gex(0),l=C.a([],x.T)
for(w=d.x,v=w.length,u=0;u<w.length;w.length===v||(0,C.M)(w),++u){t=w[u]
s=t.b
if(s==="rug")continue
s=B.hz.h(0,s)
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
case"bathroom":l.push(B.dAj)
l.push(B.dA_)
w=-m/2
l.push(new A.i8(w,w+33,0,75))
break}return l},
bsh(d,e,f,g,h,i,j,k,l,m,n,o){var w=new A.bsg(d,i,m,o,n,l,g,f,k,j,e,h,C.a([],x.n))
w.bAf(d,e,f,g,h,i,j,k,l,m,n,o)
return w},
hp5(d,e){var w,v,u,t=d.w,s=D.d.bg(t,new A.fk5(e))
if(s<0)s=0
w=t[s]
v=d.gex(0)
u=d.ghq(0)
t=w.c
switch(w.b){case"left":return new C.bk(new C.z(-v/2+18,D.k.E(t+u/2-40,10,u-10)),1.5707963267948966,s)
case"right":return new C.bk(new C.z(v/2-18,D.k.E(t+u/2-40,10,u-10)),-1.5707963267948966,s)
default:return new C.bk(new C.z(D.o.E(t,-v/2+12,v/2-12),18),0,s)}},
y4:function y4(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){var _=this
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
tK:function tK(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
aa6:function aa6(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
csE:function csE(d,e){var _=this
_.a=d
_.b=e
_.d=_.c=$},
AB:function AB(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
bsg:function bsg(d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
fk5:function fk5(d){this.a=d},
aWx:function aWx(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=$},
bV4:function bV4(d,e){this.a=d
this.b=e},
bV5:function bV5(d){this.a=d},
hwK(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=C.a([B.dAc],x.T)
for(w=d.x,v=w.length,u=0;u<w.length;w.length===v||(0,C.M)(w),++u){t=w[u]
if(t.a===e)continue
s=t.b
if(D.d.t(B.a5d,s)||D.d.t(B.HV,s)||s==="bush")continue
r=s==="townsign"
if(r||s==="adboard"){q=r?178:150
for(s=[-q,q],p=0;p<2;++p){o=s[p]
n=t.e*3.141592653589793/2
r=Math.cos(n)
m=Math.sin(n)
r=t.c+o*r
m=t.d+-o*m
i.push(new A.i8(r-8,r+8,m-8,m+8))}continue}r=B.hz.h(0,s)
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
hmg(d,e,f){var w=new A.b9T(d,-d.gex(0)/2+10,d.gex(0)/2-10,-760,d.ghq(0)-10,e,f,0,B.dgK)
w.MA(0)
return w},
b9T:function b9T(d,e,f,g,h,i,j,k,l){var _=this
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
aku:function aku(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h},
aq5:function aq5(d){this.a=d},
bev:function bev(d){var _=this
_.d=0
_.e=!1
_.f=d
_.c=_.a=_.r=null},
d7N:function d7N(d){this.a=d},
d7O:function d7O(d,e){this.a=d
this.b=e},
d7M:function d7M(d,e){this.a=d
this.b=e},
d7P:function d7P(d){this.a=d},
d7L:function d7L(d){this.a=d},
d7Q:function d7Q(d){this.a=d},
d7K:function d7K(d){this.a=d},
d7R:function d7R(d,e){this.a=d
this.b=e},
d7J:function d7J(d,e,f){this.a=d
this.b=e
this.c=f},
d7S:function d7S(d,e){this.a=d
this.b=e},
d7T:function d7T(d){this.a=d},
d7I:function d7I(d){this.a=d},
hti(d,e,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
if(e==="none"||e.length===0)return
d.b=0
w=new A.fAG(a2,d,a0,a1)
v=new A.fAF(d,a2,a0,a1)
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
o=C.ar(D.c,D.cp,p-Math.floor(p))
o.toString
d.ji(m,t,o,!1,0,4)}d.d=0.16+0.1*Math.sin(a2*31)
d.fV(a0.$1(B.h9X),3.2*a1,D.dt,4,8,0)
d.d=1
break
case"spark":w.$2(22,7)
d.d=0.2+0.1*Math.sin(a2*26)
d.fV(a0.$1(B.aWB),2.4*a1,H.xD,4,8,0)
d.d=1
break
case"smoke":d.d=0.3+0.08*Math.sin(a2*7)
d.fV(a0.$1(B.h2V),2.6*a1,D.aw,4,8,0)
d.d=1
v.$3(9,0.8,11)
w.$2(5,3)
break
case"fire":d.d=0.3+0.12*Math.sin(a2*20)
d.fV(a0.$1(B.aWB),4.4*a1,D.cS,4,8,0)
d.d=1
h=D.k.bh(a2*11)
for(t=0.85*a1,s=0.05*a1,r=0.5*a1,o=0.04*a1,k=0;k<6;++k){p=-2.2+k*0.88
g=Math.sin((h+k*5)*12.9898)*43758.5453
f=2.4+(g-Math.floor(g))*3.6
l=a0.$1(new A.q(p,-2.2,3))
g=Math.sin((h+k)*12.9898)*43758.5453
d.BE(l,a0.$1(new A.q(p+(g-Math.floor(g)-0.5)*1.2,-2.2+f,3.4)),t,D.fr,s,0,6)
d.BE(a0.$1(new A.q(p,-2.2,3.1)),a0.$1(new A.q(p,-2.2+f*0.62,3.5)),r,D.bG,o,0,6)}w.$2(16,6)
v.$3(10,1,13)
break
case"smolder":v.$3(4,0.9,9)
break}},
fAG:function fAG(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fAF:function fAF(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
h3j(d){var w
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
avx(d){var w
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
hte(d,e,a0){var w,v,u,t,s=C.a([],x.fB),r=new A.fAa(s),q=new A.fAf(e),p=q.$2(B.VD,B.JR),o=q.$2(B.VD,B.JS),n=q.$2(B.VD,B.JT),m=q.$2(B.VE,B.JS),l=q.$2(B.VE,B.JR),k=q.$2(B.VE,B.JT),j=q.$2(B.VF,B.JT),i=q.$2(B.VF,B.JR),h=q.$2(B.VF,B.JS),g=new C.Z(e,new A.fAb(),C.T(e).k("Z<1>")).gL(0),f=D.d.b2(e,new A.fAc())
if(f)r.$5("UNVERIFIED",B.f1B,"A conductor is in use whose function was never verified. A wire color alone does not prove what a wire does.","Verify every conductor with a tester before you connect it.","Identify each wire with a tester and the device diagram, then connect it.")
if(D.d.b2(e,new A.fAd()))r.$5("LOOSE",B.rZ,"A connection is loose. A loose connection heats up and can arc.","Every conductor must be fastened tightly under its screw or connector.","Tighten the connection.")
if(D.d.b2(e,new A.fAe()))r.$5("EXPOSED",B.rZ,"Bare copper is showing outside the terminal. An exposed energized conductor can shock or short.","No conductor may be left exposed.","Trim the wire so only the part under the screw is bare.")
if(!a0)r.$5("SUPPORT",B.rZ,"The box or support is not rated for this device. It can fall.","A fixture or fan must hang from a box or bracket rated for its weight.","Use a box rated for this fixture (a fan-rated box for a fan).")
if(n>0||i>0)r.$5("HOT_TO_GROUND",B.rZ,"The hot wire is connected to the ground. That is a short circuit to ground: a very large current.","The equipment ground never carries current in normal use, and the hot wire never touches it.","Hot goes on the hot terminal (brass). Ground goes only on the green screw.")
f=o>0
if(!(f&&m>0))w=l>0&&p>0
else w=!0
if(w)r.$5("SHORT",B.rZ,"The hot and the neutral are connected together. That is a short circuit.","Hot and neutral must never touch each other.","Put each wire on its own terminal.")
else if(f||l>0)r.$5("REVERSED",B.rZ,"Hot and neutral are reversed (reversed polarity). The device may still seem to work, but the parts that should be dead are live. This is a shock hazard.","Hot goes to the brass (hot) terminal and neutral to the silver (neutral) terminal.","Swap them: black (hot) to brass, white (neutral) to silver.")
if(k>0||h>0)r.$5("NEUTRAL_GROUND",B.rZ,"The neutral and the equipment ground are joined at the device. Current can flow on the ground path and trip protective devices.","The neutral is never used as the equipment ground, and the two are not joined at the device.","Neutral to the silver terminal only. Ground to the green screw only.")
if(!(i>0&&n===0))f=h>0&&k===0
else f=!0
if(f)r.$5("GROUND_AS_CURRENT",B.rZ,"The equipment ground was fastened to a terminal that carries current. The ground must never be used as a normal conductor.","The equipment ground goes only to the ground terminal.","Move the bare copper (ground) wire to the green screw.")
if(g>0&&p<d.b)r.$5("LOAD_SIDE",B.aPL,"The wires are on the LOAD screws. Power must come in on LINE; on LOAD the device would not protect or feed anything.","Supply (line) conductors go to the LINE terminals.","Move the wires to the LINE screws.")
f=d.b
if(p<f&&g===0&&o===0&&l===0&&n===0)r.$5("MISSING_HOT",B.TJ,"The hot wire is not on the hot terminal, so the device gets no power.","The device needs its hot connection.","Connect the black (hot) wire to the brass terminal.")
if(p>=f){f=d.c
f=m<f&&f>0&&l===0&&k===0}else f=!1
if(f)r.$5("OPEN_NEUTRAL",B.rZ,"The neutral is not connected, but the hot wire is. The device will not run, and parts of it can still be live. There may be nothing to see.","The neutral return conductor must be connected.","Connect the white (neutral) wire to the silver terminal.")
if(d.d&&j===0)r.$5("MISSING_GROUND",B.rZ,"There is no equipment ground. It may seem to work, but nothing protects you if a fault happens.","A required equipment ground must be connected to the ground terminal.","Connect the bare copper (ground) wire to the green screw.")
for(f=s.length,v=B.v8,u=0;u<f;++u){t=s[u].b
if(A.avx(t)>A.avx(v))v=t}return new A.b6t(v,s,A.hYJ(s,e))},
hYJ(d,e){var w=new A.fjD(d)
if(w.$1("SHORT")||w.$1("HOT_TO_GROUND"))return B.btD
if(w.$1("LOOSE"))return B.btv
if(w.$1("EXPOSED"))return B.btB
if(w.$1("GROUND_AS_CURRENT"))return B.btF
if(w.$1("REVERSED"))return B.btE
if(w.$1("NEUTRAL_GROUND"))return B.btG
if(w.$1("SUPPORT"))return B.btC
if(w.$1("OPEN_NEUTRAL"))return B.btA
if(w.$1("LOAD_SIDE")||w.$1("MISSING_HOT"))return B.btt
if(w.$1("UNVERIFIED"))return B.btu
if(w.$1("MISSING_GROUND"))return B.btx
return B.btz},
hSJ(d){var w
switch(d.a.c.a){case 0:w=d.b.c===B.JR
break
case 1:w=d.b.c===B.JS
break
case 2:w=d.b.c===B.JT
break
case 3:w=!1
break
default:w=null}return w},
htf(d,e,f){var w,v,u,t,s=C.a([],x.fB)
e.bQ(0,new A.fAh(f,s))
for(w=s.length,v=B.v8,u=0;u<w;++u){t=s[u].b
if(A.avx(t)>A.avx(v))v=t}return new A.b6t(v,s,v===B.v8?B.bty:B.btw)},
JK:function JK(d,e){this.a=d
this.b=e},
FO:function FO(d,e){this.a=d
this.b=e},
FV:function FV(d,e){this.a=d
this.b=e},
cz5:function cz5(d){this.c=d},
cCL:function cCL(d,e){this.a=d
this.c=e},
a4p:function a4p(d,e){this.a=d
this.b=e},
bMo:function bMo(d,e,f){this.b=d
this.c=e
this.d=f},
wo:function wo(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
ti:function ti(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h},
b6t:function b6t(d,e,f){this.a=d
this.b=e
this.c=f},
fAa:function fAa(d){this.a=d},
fAf:function fAf(d){this.a=d},
fAg:function fAg(d,e){this.a=d
this.b=e},
fAb:function fAb(){},
fAc:function fAc(){},
fAd:function fAd(){},
fAe:function fAe(){},
fjD:function fjD(d){this.a=d},
fjE:function fjE(d){this.a=d},
abd:function abd(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
abe:function abe(d,e,f){this.a=d
this.b=e
this.c=f},
vc:function vc(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
b5b:function b5b(d,e){this.a=d
this.b=e},
b8l:function b8l(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cz7:function cz7(d,e,f){this.a=d
this.b=e
this.c=f},
cz8:function cz8(){},
cz9:function cz9(){},
cza:function cza(){},
PS:function PS(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fAh:function fAh(d,e){this.a=d
this.b=e},
h6V(d){var w
switch(d.a){case 0:w=D.bj
break
case 1:w=D.cS
break
case 2:w=D.ct
break
case 3:w=D.bG
break
case 4:w=D.bw
break
default:w=null}return w},
ha4(d){return C.bV(E.lA,null,new A.fXT(),d,!0,!0,!0,D.k2,!1,!1,x.H)},
hxD(d,e,f,g){var w=x.S
return C.bV(E.lA,null,new A.fXR(new A.cz7(e,f,C.U(w,w)),g),d,!0,!0,!0,D.k2,!1,!1,x.dZ)},
fXT:function fXT(){},
fXR:function fXR(d,e){this.a=d
this.b=e},
a1m:function a1m(d,e,f){this.c=d
this.d=e
this.a=f},
bv_:function bv_(d){var _=this
_.d=d
_.c=_.a=_.e=null},
f9r:function f9r(d,e){this.a=d
this.b=e},
f9q:function f9q(d,e,f){this.a=d
this.b=e
this.c=f},
f9s:function f9s(d){this.a=d},
f9p:function f9p(d,e){this.a=d
this.b=e},
f9t:function f9t(){},
f9u:function f9u(d){this.a=d},
a5l:function a5l(d,e){var _=this
_.a=d
_.b=e
_.c=!1
_.d=null},
bSB:function bSB(d){this.a=d},
bSA:function bSA(d){this.a=d}},B,I,E,Ai,F,O,K,Aj,Z,N,Ak,A3
J=c[1]
C=c[0]
D=c[2]
A4=c[85]
A5=c[127]
G=c[94]
P=c[116]
H=c[104]
A6=c[113]
A7=c[126]
Q=c[114]
A8=c[92]
A9=c[118]
Aa=c[91]
L=c[89]
R=c[121]
A_=c[82]
Ab=c[110]
T=c[125]
Ac=c[124]
U=c[119]
A0=c[123]
Ad=c[117]
V=c[96]
W=c[111]
Ae=c[102]
X=c[115]
Af=c[112]
A1=c[99]
Y=c[106]
A2=c[120]
Ag=c[122]
Ah=c[128]
M=c[98]
S=c[100]
A=a.updateHolder(c[25],A)
B=c[93]
I=c[27]
E=c[97]
Ai=c[66]
F=c[95]
O=c[31]
K=c[103]
Aj=c[107]
Z=c[109]
N=c[101]
Ak=c[108]
A3=c[105]
A.eYN.prototype={
a5(){return"_RadioType."+this.b}}
A.a9S.prototype={
R(){return new A.aej(null,this.$ti.k("aej<1>"))}}
A.aej.prototype={
gcog(){var w=this.e
return w===$?this.e=new A.bpu(this):w},
gam_(){var w=this.Gc$
w=w==null?null:w.gapR()
return w==null?this.a.d:w},
gazy(){this.a.toString
return!0},
bWg(){var w=this,v=w.a.c,u=w.gam_()
if(v===u)return
w.a5d(v===w.gam_()?null:v)},
a5d(d){var w=this.Gc$
if(w!=null)w.glF().$1(d)
this.a.e.$1(d)},
d5(){var w,v=this
v.eH()
w=v.c
w.toString
v.sa6H(O.h37(w,v.$ti.c))},
q(){this.sa6H(null)
var w=this.d
if(w!=null)w.q()
this.a1()},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.a
m.toString
switch(0){case 0:w=o.gcog()
v=w.a.gam_()
o.a.toString
u=new C.HU(!0,O.hQU(n,!1,n,o.gazy(),n,w,v,n,n,D.kn,n,n,n,n,n,!1,m.c,o.$ti.c),n)
break}C.an5(d)
o.a.toString
A:{m=new C.z(u,n)
break A}t=C.P(d)
s=O.h38(d)
o.a.toString
w=s.b
w=w==null?n:w.aU(C.aX(x.c1))
r=w
if(r==null)r=t.ax.y
w=o.a.at
v=o.gazy()
q=o.gazy()?o.gbWf():n
p=o.d
if(p==null){p=C.k2(!0,n,!0,!0,n,n,!1)
o.d=p}return new C.zw(C.dy(!1,n,!0,n,v,p,n,n,!1,n,n,m.a,n,n,n,n,q,!1,r,n,n,n,n,n,n,w,n,m.b,n),n)}}
A.bpu.prototype={
gapR(){return this.a.gam_()},
glF(){return this.a.gLL()},
bj1(d){},
bka(d){},
gdc(d){return this.a}}
A.aNR.prototype={}
A.q.prototype={
a9(d,e){return new A.q(this.a+e.a,this.b+e.b,this.c+e.c)},
aF(d,e){return new A.q(this.a-e.a,this.b-e.b,this.c-e.c)},
aI(d,e){return new A.q(this.a*e,this.b*e,this.c*e)},
FX(d){var w=this.b,v=d.c,u=this.c,t=d.b,s=d.a,r=this.a
return new A.q(w*v-u*t,u*s-r*v,r*t-w*s)},
guU(){var w=this.a,v=this.b,u=this.c
return Math.sqrt(w*w+v*v+u*u)},
gmR(d){var w=this,v=w.guU()
return v<1e-9?w:new A.q(w.a/v,w.b/v,w.c/v)}}
A.ko.prototype={}
A.cW.prototype={}
A.hf.prototype={}
A.tP.prototype={}
A.fQ.prototype={}
A.fk.prototype={
WA(){var w=this.x
if(!(w!==0))if(this.r){w=$.dS+1
$.dS=w}else w=0
this.w=w},
aIz(d,e,f,g,h,i,j,k){var w=this,v=i.gmR(0)
w.a.push(new A.ko(C.a([d,e,f,g],x.o),v,h,w.b,j,w.d,k,w.c,w.e,w.f,w.w))},
biR(d,e,f,g,h,i,j){return this.aIz(d,e,f,g,h,i,0,j)},
cWQ(d,e,f,g,h,i,j){return this.aIz(d,e,f,g,h,i,j,!1)},
GD(d,e,f,g,h,i){return this.aIz(d,e,f,g,h,i,0,!1)},
a74(d,e,f,g,h,i){var w=this,v=(h==null?e.aF(0,d).FX(f.aF(0,d)):h).gmR(0)
w.a.push(new A.ko(C.a([d,e,f],x.o),v,g,w.b,0,w.d,i,w.c,w.e,w.f,w.w))},
bk1(d,e,f,g){return this.a74(d,e,f,g,null,!0)},
FK(d,e,f,g,h,i,j){var w,v,u,t,s,r,q,p,o,n,m
this.WA()
w=e.a/2
v=e.b/2
u=e.c/2
t=new A.c_R(this,i,new A.c_S(j,d),new A.c_T(j),f,h)
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
hp(d,e,f,g){return this.FK(d,e,f,!0,0,g,0)},
aDL(d,e,f,g,h){return this.FK(d,e,f,g,h,1,0)},
n9(d,e,f,g,h){return this.FK(d,e,f,!0,g,h,0)},
aZ(d,e,f,g){return this.FK(d,e,f,!0,g,1,0)},
aO(d,e,f){return this.FK(d,e,f,!0,0,1,0)},
wp(d,e,f,g,h){return this.FK(d,e,f,!0,g,1,h)},
cIh(d,e,f,g,h,i){return this.FK(d,e,f,g,h,i,0)},
aDK(d,e,f,g){return this.FK(d,e,f,!0,0,1,g)},
yQ(b3,b4,b5,b6,b7,b8,b9,c0,c1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this
b2.WA()
w=b4.aF(0,b3).gmR(0)
v=w.b
u=w.FX(Math.abs(v)<0.9?B.eb:B.hF).gmR(0)
t=w.FX(u).gmR(0)
s=b9<0?b5:b9
r=new A.c_U(u,c1,t)
for(q=b2.a,p=b3.a,o=b3.b,n=b3.c,m=b4.a,l=b4.b,k=b4.c,j=x.o,i=w.a*-1,v*=-1,h=w.c*-1,g=0;g<c1;){f=r.$1(g);++g
e=r.$1(g)
d=f.a
a0=e.a
a1=f.b
a2=e.b
a3=f.c
a4=e.c
a5=new A.q(d+a0,a1+a2,a3+a4).gmR(0)
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
q.push(new A.ko(C.a([new A.q(a6,a7,a8),new A.q(a9,b0,b1),new A.q(a0,a2,a4),new A.q(d,a1,a3)],j),a5,b6,b2.b,c0,b2.d,b8,b2.c,b2.e,b2.f,b2.w))
if(b7){q.push(new A.ko(C.a([b3,new A.q(a9,b0,b1),new A.q(a6,a7,a8)],j),new A.q(i,v,h),b6,b2.b,c0,b2.d,!1,b2.c,b2.e,b2.f,b2.w))
q.push(new A.ko(C.a([b4,new A.q(d,a1,a3),new A.q(a0,a2,a4)],j),w,b6,b2.b,c0,b2.d,!1,b2.c,b2.e,b2.f,b2.w))}}},
dR(d,e,f,g,h,i){return this.yQ(d,e,f,g,!0,!1,-1,h,i)},
BE(d,e,f,g,h,i,j){return this.yQ(d,e,f,g,!0,!1,h,i,j)},
Tg(d,e,f,g,h,i,j,k){return this.yQ(d,e,f,g,h,i,-1,j,k)},
bdO(d,e,f,g,h,i,j){return this.yQ(d,e,f,g,h,!1,-1,i,j)},
dN(d,e,f,g,h){return this.yQ(d,e,f,g,!0,!1,-1,0,h)},
L6(d,e,f,g,h,i){return this.yQ(d,e,f,g,h,!1,-1,0,i)},
L7(d,e,f,g,h,i){return this.yQ(d,e,f,g,!0,!1,h,0,i)},
Tf(d,e,f,g,h,i,j){return this.yQ(d,e,f,g,h,!1,i,0,j)},
fV(a7,a8,a9,b0,b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6=this
a6.WA()
w=new A.c_Q(b0,b1)
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
v.push(new A.ko(C.a([new A.q(u+i*a8,t+h*a8,s+g*a8),new A.q(u+f*a8,t+e*a8,s+d*a8),new A.q(u+a0*a8,t+a1*a8,s+a2*a8),new A.q(u+a3*a8,t+a4*a8,s+a5*a8)],r),new A.q(i+f+a0+a3,h+e+a1+a4,g+d+a2+a5).gmR(0),a9,a6.b,b2,a6.d,!1,a6.c,a6.e,a6.f,a6.w))}},
bbS(d,e,f,g){return this.fV(d,e,f,6,10,g)},
ed(d,e,f,g,h){return this.fV(d,e,f,g,h,0.4)},
a75(d,e,f,g,h,i,j,k){var w,v,u,t,s
this.WA()
for(w=0;v=w+1,v<d.length;w=v){u=d[v]
t=d[w]
if(new A.q(u.a-t.a,u.b-t.b,u.c-t.c).guU()<0.000001)continue
u=d[w]
t=d[v]
if(g)s=w===0||w===d.length-2
else s=!1
this.Tg(u,t,e,f,s,h,j,k)}if(i)for(u=e*0.98,w=1;v=w+1,v<d.length;w=v)this.fV(d[w],u,f,4,k,j)},
ji(d,e,f,g,h,i){return this.a75(d,e,f,!0,!1,g,h,i)},
aJn(d,e,f,g,h,i,j){return this.a75(d,e,f,g,!1,h,i,j)},
bk3(d,e,f,g,h){return this.a75(d,e,f,!0,!1,!0,g,h)},
zs(a4,a5,a6,a7,a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=this
a3.WA()
a3.bdO(a4,a5,a6,a8,!1,a9,b0)
w=a5.aF(0,a4).gmR(0)
v=w.FX(Math.abs(w.b)<0.9?B.eb:B.hF).gmR(0)
u=new A.c_V(v,b0,w.FX(v).gmR(0))
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
s.push(new A.ko(C.a([new A.q(p+i*a7,m+h*a7,l+j*a7),new A.q(p+f*a6,m+e*a6,l+g*a6),new A.q(p+a0*a6,m+a1*a6,l+d*a6),new A.q(p+a2.a*a7,m+a2.b*a7,l+a2.c*a7)],r),n,a8,a3.b,a9,a3.d,!1,a3.c,a3.e,a3.f,a3.w))}}},
cYk(d,e,f,g,h,i){return this.zs(d,e,f,g,h,i,16)}}
A.xh.prototype={
r9(d){var w,v,u,t=this
t.Q=d
if(!d){w=t.a
v=t.y
u=t.z
t.a=D.k.E(w,v-u,v+u)}t.aV()},
hR(d,e,f,g){var w=this
w.as=f
w.at=d
w.ax=g
w.ay=e
w.aV()},
xi(d,e){return this.hR(d,null,e,null)},
bnW(d){return this.hR(d,null,null,null)},
apN(d){return this.hR(null,null,d,null)},
apO(d,e,f){return this.hR(d,e,f,null)},
Nn(d,e,f,g){var w=this
w.ay=w.ax=w.at=w.as=null
w.d=f
w.c=d
w.a=g
w.b=e
w.aV()},
a6T(d){var w,v,u,t=this
if(!(t.as!=null||t.at!=null||t.ax!=null||t.ay!=null))return
w=1-Math.exp(-d*7)
v=t.as
if(v!=null){u=A.o3(t.d,v,w)
t.d=u
if(u.aF(0,v).guU()<0.02){v=t.as
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
cZA(d,e){var w,v,u,t,s=this,r=e.a,q=e.b,p=Math.min(r,q)*1.15,o=Math.cos(s.a),n=Math.sin(s.a)
q=new A.bJD(s,new A.bJE(Math.cos(s.b),Math.sin(s.b),o,n),(d.a-r/2)/p,-(d.b-q/2)/p)
w=q.$1(0)
r=q.$1(1).c
v=w.c
u=r-v
if(Math.abs(u)<1e-9)return null
t=(0-v)/u
if(t<=0)return null
return q.$1(t)},
bf8(d,e,f){var w,v,u,t,s=this,r=e.a,q=e.b,p=Math.min(r,q)*1.15,o=Math.cos(s.a),n=Math.sin(s.a)
q=new A.bJx(s,new A.bJy(Math.cos(s.b),Math.sin(s.b),o,n),(d.a-r/2)/p,-(d.b-q/2)/p)
w=q.$1(0)
r=q.$1(1).b
v=w.b
u=r-v
if(Math.abs(u)<1e-9)return null
t=(f-v)/u
if(t<=0)return null
return q.$1(t)},
cP5(d,e){return this.bf8(d,e,0)},
apo(d){var w=this
w.at=null
w.c=D.k.E(w.c*d,w.e,w.f)
w.aV()}}
A.bUQ.prototype={
cW2(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this.a,f=g.length-1,e=a0.a,d=a0.b
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
A.b6w.prototype={
gGR(d){var w=this.r.a
return w==null?0:w},
cig(b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=null,a8=b2.a,a9=b2.b,b0=new C.a3(0,0,0+a8,0+a9)
$.S()
w=C.I()
w.sam(B.c3I.aB(0,b0))
b1.aP(b0,w)
v=this.c.a*90
w=b1.a
J.bm(w.save())
w.translate(a8*0.45-v,a9*0.3)
b1.ig(0,-0.45)
for(u=x.O,t=0;t<3;++t){s=C.bL(D.I,a9*(0.2-t*0.05),a8*(1.9-t*0.4))
r=[B.bg5,D.aQ,D.rd][t]
q=new C.ap(D.R,D.N,D.U,D.V,D.S)
q.sam(new C.c2(D.A,0.5,D.x,a7,0,C.a([r.j(0.3-t*0.07),r.j(0)],u),a7,a7).aB(0,s))
p=q.G()
w.drawOval(C.bH(s),p)
p.delete()}w.restore()
o=new C.e9()
o.d4(11)
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
e.sam(new C.c2(D.A,0.5,D.x,a7,0,C.a([D.aQ.j(0.28),B.bn_],u),a7,a7).aB(0,C.bY(i,g)))
b1.ad(i,g,e)
J.bm(w.save())
f=new C.aG(f.r,D.ah,a7,a7,C.a([],x.g))
f.D(new C.jF(C.bY(i,h)))
b1.mF(0,f)
f=C.I()
f.sam(B.et0.aB(0,C.bY(i,h)))
b1.ad(i,h,f)
d=C.I()
d.r=B.bgv.gp(0)
for(a0=0;a0<4;++a0){u=B.d0y[a0].a
a1=u[0]
a2=u[1]
a3=u[2]
a4=u[3]
u=q.a
u=C.bL(new C.t(l+(a1*h+Math.sin((u==null?0:u)*0.05)*h*0.08),j+a2*h),a4*h*2,a3*h*2)
p=d.G()
w.drawOval(C.bH(u),p)
p.delete()}$.S()
a5=C.I()
a5.r=D.c.j(0.55).gp(0)
for(u=h*0.16,a0=0;a0<3;++a0){q=B.cYu[a0]
q=C.bL(new C.t(l+q.a*h,j+q.b*h),u,q.c*h*2)
p=a5.G()
w.drawOval(C.bH(q),p)
p.delete()}u=i.a9(0,new C.t(h*0.45,h*0.35))
$.S()
q=C.I()
q.r=D.w.j(0.38).gp(0)
b1.ad(u,h,q)
w.restore()
a6=new C.t(a8*0.18-v*0.2,a9*0.12)
w=C.I()
w.r=B.bhN.gp(0)
b1.ad(a6,h*0.28,w)
w=h*0.05
q=a6.a9(0,new C.t(h*0.08,w))
u=C.I()
u.r=B.afN.gp(0)
b1.ad(q,h*0.07,u)
u=-h
u=a6.a9(0,new C.t(u*0.1,u*0.09))
q=C.I()
q.r=B.afN.gp(0)
b1.ad(u,w,q)},
a3(j3,j4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1,e2,e3,e4,e5,e6,e7,e8,e9,f0,f1,f2,f3,f4,f5,f6,f7,f8,f9,g0,g1,g2,g3,g4,g5,g6,g7,g8,g9,h0,h1,h2,h3,h4,h5,h6,h7,h8,h9,i0,i1,i2,i3,i4,i5,i6,i7,i8,i9,j0=this,j1=null,j2={}
if(j0.z)j0.cig(j3,j4)
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
i=new A.ctF(m,l,k,j)
h=new A.ctG(j0,i)
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
b3=B.h8m.gmR(0)
b4=b3.a9(0,B.te).gmR(0)
b5=C.a([],x.bl)
u=j0.w
b6=u==null?B.I4:u.$1(j0.gGR(0))
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
c1=new A.ctE(j2,j0,b7,b8,b9,m,l,k,j,c0,o,p,n,a0,a1,b0,r,q,b1,b2,b3.a,b3.b,b3.c,b4.a,b4.b,b4.c,b5)
c2=v.a
c3=c2.length>1500?A.hXG(v):j1
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
g1=i.$1(new A.q(f7.a-f9,f7.b-g0,f7.c-f8).FX(new A.q(c9.a-f9,c9.b-g0,c9.c-f8)))
if(g1.a*((f2.a+f3.a+f4.a+f5.a)*0.25)+g1.b*((f2.b+f3.b+f4.b+f5.b)*0.25)+g1.c*f6>0&&!f1.x)continue
if(f6>b0)continue
if(D.d.d_(c8,new A.cty())){c9=C.a([],e)
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
h0=new C.aG(c8.r,D.ah,j1,j1,f2)
c8=C.C(c9,u)
f2.push(new C.LS(c8,!0))
c8=h0.gbw().a.getBounds()
f2=c8[0]
f3=c8[1]
h1=(c8[2]-f2)*(c8[3]-f3)
e7.push(h1)
b5.push(new A.G6(f1.r,f1.w,new A.ctz(j2,j0,f0<e9,h1,e8,f1,c9,h0),h0,D.L,f6-f1.f,f1.b,!1,!1))
continue}h2=new A.ctx(c8)
h3=C.a([],a5)
c8=$.S()
c9=C.a([],a8)
h0=new C.aG(c8.r,D.ah,j1,j1,c9)
for(h4=0;h4<6;h4=h5)for(c8=h4/6,h5=h4+1,f2=h5/6,c4=0;c4<8;c4=h6){f3=c4/8
h6=c4+1
f4=h6/8
h7=C.a([h2.$2(f3,c8),h2.$2(f4,c8),h2.$2(f4,f2),h2.$2(f3,f2)],a4)
if(D.d.b2(h7,new A.ctA()))continue
f3=C.a([],e)
for(a2=0;a2<4;++a2){g2=h7[a2]
f4=g2.c
f3.push(new C.t(o+g2.a*p/f4,n-g2.b*p/f4))}h3.push(new C.bk(c4,h4,f3))
f3=C.C(f3,u)
f3=new C.LS(f3,!0)
c9.push(f3)
f4=h0.f
if(f4!=null)f3.by(f4)
f3=h0.e
if(f3!=null)f3.a.delete()
h0.e=null}if(h3.length===0)continue
b5.push(new A.G6(f1.r,f1.w,new A.ctB(j0,f1,h3),h0,D.L,f6-f1.f,f1.b,!1,!1))}D.d.aW(e7,new A.ctC())
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
i2.d=w}D.d.aW(b5,new A.ctD())
w=j0.d.a
D.d.a7(w)
$.S()
i4=C.I()
i4.b=D.N
i5=C.I()
i5.b=D.ab
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
t.drawPath((a4==null?e.e=new C.cm(e.gbw().a.snapshot()):a4).a,i6)
i6.delete()
if(!i2.z&&!i2.e){i5.r=s.gp(0)
i6=i5.G()
s=e.e
t.drawPath((s==null?e.e=new C.cm(e.gbw().a.snapshot()):s).a,i6)
i6.delete()}s=i2.y
if(s!==0)w.push(new C.z(e,s))}if(j0.e!==0){$.S()
g7=C.I()
g7.b=D.ab
g7.c=1.4
g7.r=D.c.j(0.35+0.25*Math.sin(j0.gGR(0)*6)).gp(0)
for(u=b5.length,a2=0;a2<b5.length;b5.length===u||(0,C.M)(b5),++a2){i2=b5[a2]
if(i2.Q){s=i2.r
i6=g7.G()
e=s.e
t.drawPath((e==null?s.e=new C.cm(s.gbw().a.snapshot()):e).a,i6)
i6.delete()}}}for(v=v.c,u=v.length,a2=0;a2<v.length;v.length===u||(0,C.M)(v),++a2){i7=v[a2]
g2=h.$1(i7.a)
s=g2.c
if(s<1)continue
e=o+g2.a*p/s
s=n-g2.b*p/s
i8=new C.jR(new C.eu(i7.b,j1,j1,D.cQ,j1,j1,j1,j1,j1,j1,new C.F(!0,D.c,j1,j1,j1,j1,11,D.u,j1,j1,j1,j1,j1,j1,j1,j1,j1,j1,j1,j1,j1,j1,j1,j1,j1,j1)),D.a3,D.bZ,new C.jB(1),j1,j1,j1,j1,D.bW,j1)
i8.el()
a4=i8.b
a5=a4.c
a4=a4.a.c
i9=C.bu(C.bL(new C.t(e,s),a4.gbb(a4)+8,a5+14),D.i8)
a5=$.S()
a4=new C.ap(D.R,D.N,D.U,D.V,D.S)
a4.r=i7.c.j(0.92).gp(0)
i6=a4.G()
t.drawRRect(C.el(i9),i6)
i6.delete()
a4=new C.ap(D.R,D.N,D.U,D.V,D.S)
a4.b=D.ab
a4.c=1
a4.r=D.ae.gp(0)
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
w.push(new C.z(new C.aG(a5.r,D.ah,j1,j1,e),s))}}},
aw(d){return!0}}
A.cDw.prototype={}
A.G6.prototype={}
A.avC.prototype={
R(){return new A.bs3(new A.bUQ(C.a([],x.a6)),new C.eA(0,$.au()),D.bF,D.I,null,null)}}
A.bs3.prototype={
Z(){var w,v=this
v.a2()
A.hDA()
w=v.qQ(new A.f1g(v))
w.h2(0)
v.d!==$&&C.aQ()
v.d=w},
q(){var w=this.d
w===$&&C.c()
w.q()
w=this.f
w.S$=$.au()
w.P$=0
this.bys()},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.a,l=m.as==null,k=l?n:new A.f1a(o)
l=l?n:new A.f1b(o,d)
w=m.c
v=m.d
u=m.e
t=m.r
s=o.f
r=m.w
m=m.x
q=C.a([v,s],x.dS)
p=o.a
q=C.a([C.jo(new C.ey(C.b4(n,n,n,new A.b6w(w,v,o.e,u,t,s,r,m,p.y,p.Q,new C.h5(q)),D.fF),n),D.t,n)],x.p)
o.a.toString
return C.nK(D.jB,C.aB(D.c9,new C.an(D.a_,n,D.b0,D.t,q,n),D.y,!1,n,l,k,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new A.f1c(o),new A.f1d(o),n,n,n,n,n,n,n,new A.f1e(o),n,n,n,!1,D.a4),n,n,n,n,n,n,new A.f1f(o),n)}}
A.PX.prototype={
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
A.cLt.prototype={}
A.aO_.prototype={
q(){var w=this,v=w.aa$
if(v!=null)v.a6(0,w.gbE())
w.aa$=null
w.a1()},
aY(){this.b6()
this.b4()
this.bF()}}
A.bce.prototype={}
A.bcz.prototype={}
A.bhG.prototype={}
A.dps.prototype={}
A.MH.prototype={
Pz(d){return this.coy(d)},
coy(e4){var w=0,v=C.j(x.H),u=this,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1,e2,e3
var $async$Pz=C.e(function(e6,e7){if(e6===1)return C.f(e7,v)
for(;;)switch(w){case 0:if(e4.getUint32(0,!0)!==1179937895)throw C.W("not a glb file")
for(n=x.b,m=12,l=null,k=null;m+8<=e4.byteLength;){j=e4.getUint32(m,!0)
i=e4.getUint32(m+4,!0)
h=J.eH(D.dJ.gaR(e4),e4.byteOffset+m+8,j)
if(i===1313821514)l=n.a(D.X.aM(0,new C.Gs(!1).DI(h,0,null,!0),null))
if(i===5130562)k=h
m+=8+j}if(l==null||k==null)throw C.W("empty glb")
g=new A.djE(l,k)
f=J.a5(l)
e=x.j
d=J.kK(e.a(f.h(l,"nodes")),n)
n=d.a
a0=J.a5(n)
a1=a0.gL(n)
a2=x.S
u.b=C.c1(a1,-1,!1,a2)
a3=C.a([],x.s)
for(a4=d.$ti,a5=a4.k("bS<c0.E>"),a6=new C.bS(d,d.gL(0),a5),a7=a4.k("c0.E");a6.C();){a8=a6.d
a8=C.aS(J.r(a8==null?a7.a(a8):a8,"name"))
if(a8==null)a8=""
a3.push(a8.toLowerCase())}u.c=a3
u.d=D.d.bg(a3,new A.bTC())
a3=x.gL
a6=C.a([],a3)
for(a5=new C.bS(d,d.gL(0),a5),a8=x.U,a9=x.t;a5.C();){b0=a5.d
if(b0==null)b0=a7.a(b0)
b1=C.a([],a9)
b0=a8.a(J.r(b0,"children"))
b0=J.aW(b0==null?D.co:b0)
while(b0.C())b1.push(D.k.N(C.e1(b0.gT(b0))))
a6.push(b1)}u.f=a6
for(a5=u.b,b2=0;b2<a1;++b2)for(a7=a6[b2],b0=a7.length,b3=0;b3<b0;++b3)a5[a7[b3]]=b2
a5=C.a([],a9)
a6=e.a(f.h(l,"scenes"))
a7=C.aK(f.h(l,"scene"))
a7=a7==null?null:D.k.N(a7)
a6=J.aW(e.a(J.r(J.r(a6,a7==null?0:a7),"nodes")))
while(a6.C())a5.push(D.k.N(C.e1(a6.gT(a6))))
u.r=a5
a5=a1*3
u.w=new Float64Array(a5)
u.x=new Float64Array(a1*4)
u.y=new Float64Array(a5)
for(a5=x.Y,a4=a4.y[1],b2=0;b2<a1;++b2){b4=a4.a(a0.h(n,b2))
a6=J.a5(b4)
a7=a8.a(a6.h(b4,"translation"))
b5=a7==null?null:J.kK(a7,a5)
if(b5==null)b5=G.ary
a7=a8.a(a6.h(b4,"rotation"))
b6=a7==null?null:J.kK(a7,a5)
if(b6==null)b6=B.c5X
a6=a8.a(a6.h(b4,"scale"))
b7=a6==null?null:J.kK(a6,a5)
if(b7==null)b7=B.ciY
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
n=J.aW(n==null?D.co:n)
while(n.C()){b7=n.gT(n)
a0=C.a([],a9)
for(a3=J.a5(b7),a4=J.aW(e.a(a3.h(b7,"joints")));a4.C();)a0.push(D.k.N(C.e1(a4.gT(a4))))
u.Q.push(a0)
c1=a3.h(b7,"inverseBindMatrices")!=null?g.Fz(D.k.N(C.e1(a3.h(b7,"inverseBindMatrices")))).a:null
a3=u.as
a3.push(c1==null?A.hGG(a0.length):c1)}n=a8.a(f.h(l,"animations"))
n=J.aW(n==null?D.co:n)
a0=u.z
a3=x.G
a4=x.gR
while(n.C()){c2=n.gT(n)
c3=C.a([],a4)
a5=J.a5(c2)
c4=e.a(a5.h(c2,"samplers"))
for(a6=J.aW(e.a(a5.h(c2,"channels"))),a7=J.a5(c4),c5=0;a6.C();){c6=a6.gT(a6)
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
b7=a3.a(a7.h(c4,D.k.N(C.e1(a9.h(c6,"sampler")))))
a9=J.a5(b7)
d0=g.Fz(D.k.N(C.e1(a9.h(b7,"input")))).a
d1=g.Fz(D.k.N(C.e1(a9.h(b7,"output")))).a
d2=a9.h(b7,"interpolation")
if(d2==null)d2="LINEAR"
d3=b0===1?4:3
a9=J.kV(d2)
if(a9.A(d2,"CUBICSPLINE")){b1=d0.length
d4=new Float64Array(b1*d3)
for(b2=0;b2<b1;++b2)for(b9=b2*d3,c0=(b2*3+1)*d3,b8=0;b8<d3;++b8)d4[b9+b8]=d1[c0+b8]
d1=d4}if(!D.ow.gan(d0)){b1=d0.length
if(b1===0)C.b8(C.fs())
c5=Math.max(c5,d0[b1-1])}c3.push(new A.bce(c8,b0,d0,d1,a9.A(d2,"STEP")))}d5=C.aS(a5.h(c2,"name"))
if(d5==null)d5="clip"+a0.a
a0.n(0,d5,new A.bcz(c5,c3))}t=C.U(a2,x.c9)
s=0
n=x.H
e="Could not read a picture of "+u.a+": "
case 2:a0=s
a2=a8.a(f.h(l,"images"))
a2=a2==null?null:J.ad(a2)
if(!(a0<(a2==null?0:a2))){w=3
break}r=g.cR7(s)
if(r==null){w=4
break}try{a0=r
d6=C.h7D(a0)
q=d6==null?null:d6.pP(0,a0,null)
if(q!=null){p=q.cJD(D.c8,4)
a0=s
a2=p.a
a2=a2==null?null:a2.a
if(a2==null)a2=0
a3=p.a
a3=a3==null?null:a3.b
if(a3==null)a3=0
d7=p
a4=d7.gr_()
d8=4!==a4?d7.cJC(null,4):d7
a4=d8.a
a4=a4==null?null:a4.bn4(d8!==d7,D.Lr)
if(a4==null){a4=d7.a
a4=a4==null?null:J.eR(a4.gaR(a4))
if(a4==null){a4=d7.a
a4=a4==null?null:a4.gaR(a4)
if(a4==null)a4=D.aG.gaR(new Uint8Array(0))
a4=J.eR(a4)}}J.aI(t,a0,new A.bhG(a2,a3,new Uint8Array(C.cl(a4))))}}catch(e5){o=C.ab(e5)
$.am.$1(e+C.w(o))}w=5
return C.b(C.bQ(D.bF,null,n),$async$Pz)
case 5:case 4:++s
w=2
break
case 3:e0=u.bSh(l,g,d,t)
w=6
return C.b(C.bQ(D.bF,null,n),$async$Pz)
case 6:u.at=u.b8C(e0,5000)
w=7
return C.b(C.bQ(D.bF,null,n),$async$Pz)
case 7:u.ax=u.b8C(e0,1800)
n=u.at
n.r=u.b3Q(n)
n=u.ax
n.r=u.b3Q(n)
e1=u.azk(null,0)
e2=u.b6I(u.at,e1)
for(n=e2.length,e3=1/0,s=1;s<n;s+=3)e3=Math.min(e3,e2[s])
u.ay=isFinite(e3)?e3:0
return C.h(null,v)}})
return C.i($async$Pz,v)},
cpY(d){var w,v,u
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
b3Q(d){var w,v,u,t,s,r,q,p,o,n,m=d.a.length/3|0,l=new Uint8Array(m)
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
l[t]=o<n.length?this.cpY(n[o]):5}return l},
bSh(e9,f0,f1,f2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1,e2=null,e3="POSITION",e4="JOINTS_0",e5="WEIGHTS_0",e6=J.a5(e9),e7=x.U,e8=e7.a(e6.h(e9,"materials"))
if(e8==null)e8=D.co
w=x.b
v=J.kK(e8,w)
e8=e7.a(e6.h(e9,"textures"))
u=J.kK(e8==null?D.co:e8,w)
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
for(e6=f1.a,r=J.a5(e6),l=t.a,k=J.a5(l),j=t.$ti.y[1],i=x.N,h=x.A,g=x.fF,f=x.Y,e=x.G,d=v.a,a0=J.a5(d),a1=v.$ti.y[1],a2=u.a,a3=J.a5(a2),a4=u.$ti.y[1],a5=this.ch,a6=f1.$ti.y[1],a7=0;a7<r.gL(e6);++a7){a8=a6.a(r.h(e6,a7))
a9=J.a5(a8)
b0=C.aK(a9.h(a8,"mesh"))
b1=b0==null?e2:D.k.N(b0)
if(b1==null)continue
a9=C.aK(a9.h(a8,"skin"))
b2=a9==null?e2:D.k.N(a9)
for(a9=J.kK(e8.a(J.r(j.a(k.h(l,b1)),"primitives")),w),b0=a9.$ti,a9=new C.bS(a9,a9.gL(0),b0.k("bS<c0.E>")),b3=b2==null,b0=b0.k("c0.E");a9.C();){b4=a9.d
if(b4==null)b4=b0.a(b4)
b5=J.a5(b4)
b6=J.Be(e.a(b5.h(b4,"attributes")),i,h)
if(b6.h(0,e3)==null||b5.h(b4,"indices")==null)continue
b7=f0.Fz(D.k.N(C.e1(b6.h(0,e3)))).a
b8=b7.length/3|0
b9=b6.h(0,e4)!=null?f0.Fz(D.k.N(C.e1(b6.h(0,e4)))).a:e2
c0=b6.h(0,e5)!=null?f0.Fz(D.k.N(C.e1(b6.h(0,e5)))).a:e2
c1=C.aK(b5.h(b4,"material"))
c2=c1==null?e2:D.k.N(c1)
c1=g.a(J.r(c2!=null?a1.a(a0.h(d,c2)):D.cA,"pbrMetallicRoughness"))
c3=c1==null?e2:J.Be(c1,i,h)
if(c3==null)c3=D.cA
c1=e7.a(c3.h(0,"baseColorFactor"))
c4=c1==null?e2:J.kK(c1,f)
if(c4==null)c4=B.ciZ
c1=g.a(c3.h(0,"baseColorTexture"))
c5=c1==null?e2:J.Be(c1,i,h)
c1=c5==null
c6=C.aK(c1?e2:c5.h(0,"texCoord"))
c7=c6==null?e2:D.k.N(c6)
c8=b6.h(0,"TEXCOORD_"+(c7==null?0:c7))
c9=c8!=null?f0.Fz(D.k.N(C.e1(c8))).a:e2
if(!c1){c1=C.aK(J.r(a4.a(a3.h(a2,D.k.N(C.e1(c5.h(0,"index"))))),"source"))
d0=c1==null?e2:D.k.N(c1)
d1=d0!=null?f2.h(0,d0):e2}else d1=e2
d2=s.length/3|0
D.d.v(s,b7)
for(c1=c0!=null,c6=b9!=null,d3=0;d3<b8;++d3){o.push(b3?255:b2)
for(d4=d3*4,d5=0;d5<4;++d5){q.push(c6?D.k.N(b9[d4+d5]):0)
if(c1)d6=c0[d4+d5]
else d6=d5===0?1:0
p.push(d6)}}d7=f0.Fz(D.k.N(C.e1(b5.h(b4,"indices")))).a
for(b4=d7.length,d8=0;b5=d8+2,b5<b4;d8+=3){d9=D.k.N(d7[d8])
e0=D.k.N(d7[d8+1])
e1=D.k.N(d7[b5])
n.push(d2+d9)
n.push(d2+e0)
n.push(d2+e1)
m.push(this.bQo(d1,c9,d9,e0,e1,c4))}if(b3)a5.push(new C.bk(d2,b8,a7))}}return new A.dv_(new Float64Array(C.cl(s)),new Uint16Array(C.cl(q)),new Float64Array(C.cl(p)),new Uint8Array(C.cl(o)),new Int32Array(C.cl(n)),new Int32Array(C.cl(m)))},
bQo(d,e,f,g,h,i){var w,v,u,t,s,r,q,p=J.a5(i),o=p.h(i,0),n=p.h(i,1),m=p.h(i,2)
if(d!=null&&e!=null){w={}
p=f*2
v=g*2
u=h*2
t=(e[p]+e[v]+e[u])/3
s=(e[p+1]+e[v+1]+e[u+1])/3
r=w.a=w.b=w.c=0
q=new A.bTw(w,d)
q.$2(t,s)
for(p=[f,g,h];r<3;++r){v=p[r]*2
q.$2((t+e[v])/2,(s+e[v+1])/2)}o*=w.c/4/255
n*=w.b/4/255
m*=w.a/4/255}p=new A.bTv()
return(p.$1(o)<<16|p.$1(n)<<8|p.$1(m)|4278190080)>>>0},
b8C(d7,d8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4={},d5=d7.a,d6=d5.length/3|0
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
f=new A.bTE(d4,d6,d7)
e=new A.bTG(d7)
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
D.jY.hx(b2,0,a5,-1)
b3=new Float64Array(a5)
D.ow.hx(b3,0,a5,1/0)
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
c4=A.hef(c2,c3,b1)
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
b9.bQ(0,new A.bTD(c7,c0))
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
d0[p]=s[d3]}d1[b1]=u[d2]}return new A.dps(c8,c9,d0,d1,new Int32Array(C.cl(b8)),c7)},
azk(a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=d.b
a0===$&&C.c()
w=d.w
w===$&&C.c()
v=new Float64Array(C.cl(w))
w=d.x
w===$&&C.c()
u=new Float64Array(C.cl(w))
w=d.y
w===$&&C.c()
t=new Float64Array(C.cl(w))
s=a1==null?null:d.z.h(0,a1)
if(s!=null&&s.b>0){w=s.b
r=a2-Math.floor(a2/w)*w
for(w=s.c,q=w.length,p=0;p<w.length;w.length===q||(0,C.M)(w),++p){o=w[p]
n=o.b
if(n===0)n=v
else n=n===1?u:t
A.hGH(o,r,n)}}m=d.CW.c4(0,"world",new A.bTA(a0.length))
l=new A.bTB(d,v,u,t,new Float64Array(16),m)
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
A.heg(m,w*16,q[h],f*16,j,i)
i+=16}}for(w=a0.length,p=0;p<a0.length;a0.length===w||(0,C.M)(a0),++p,i=e){e=i+16
D.ow.em(j,i,e,m,a0[p].c*16)}return j},
b6I(b8,b9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=b8.a,b4=b3.length/3|0,b5=new Float64Array(b4*3),b6=C.a([],x.t),b7=this.Q
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
cJ1(d,e){var w,v,u=new A.bTJ(this)
if(d){w=u.$1("run")
v=w==null?u.$1("walk"):w}else if(e){w=u.$1("walk")
v=w}else{w=u.$1("idle")
if(w==null)w=u.$1("samba")
v=w}if(v!=null)return v
u=u.$1("samba")
if(u==null){u=this.z
u=new C.cv(u,C.a7(u).k("cv<1>")).dK(0,new A.bTH(),new A.bTI(this))}return u},
cWi(b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=this,b4="world",b5={}
if(b6){w=b3.at
w===$&&C.c()
v=w}else{w=b3.ax
w===$&&C.c()
v=w}u=b3.cJ1(c0,c5)
w=b3.z.h(0,u)
t=w==null?null:w.b
if(t==null)t=1
if(c5&&c4!=null&&D.a.t(u.toLowerCase(),"walk"))s=c4/50*t
else{w=B.dyC.h(0,b3.a)
s=c2*(w==null?1:w)}w=b3.e
r=w.h(0,u)
if(r==null){b3.azk(u,0)
if(b3.d>=0){q=b3.CW
r=new C.z(q.h(0,b4)[b3.d*16+12],q.h(0,b4)[b3.d*16+14])}else r=D.zX
w.n(0,u,r)}p=b3.azk(u,s)
b5.a=b5.b=0
if(b3.d>=0){w=b3.CW
b5.b=w.h(0,b4)[b3.d*16+12]-r.a
b5.a=w.h(0,b4)[b3.d*16+14]-r.b}o=b3.b6I(v,p)
w=b3.a
q=B.dzd.h(0,w)
n=c7+(q==null?0:q)
m=C.im(v.a.length/3|0,new A.bTM(b5,b3,o,36,b8,Math.cos(n),Math.sin(n),c6,c8),!0,x.Q)
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
a9=new A.q(a2.a-a4,a5-a6,a2.c-a7).FX(new A.q(a3.a-a4,a8-a6,a3.c-a7)).gmR(0)
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
a5=b2==null?C.b1(h[D.o.ao(a0,3)]):A.i66(h[D.o.ao(a0,3)],b2)
j.push(new A.ko(a4,a9,a5,b7,0.08,1,!1,0,0,2,q[b0]))}if(e&&f&&w!=="michelle")D.d.v(j,b3.bQp(v,m,n,c1,b7,q[0]))
return j},
bQp(a6,a7,a8,a9,b0,b1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5={}
for(w=a6.a.length/3|0,v=a6.r,u=-1e9,t=1e9,s=0;s<w;++s){v===$&&C.c()
if(v[s]!==0)continue
r=a7[s].b
if(r>u)u=r
if(r<t)t=r}if(u<t)return B.I4
q=Math.cos(a8)
p=Math.sin(a8)
o=new A.q(p,0,q)
v=-p
n=Math.max(t,u-(u-t)*0.75)
for(m=a6.r,l=0,k=0,j=0,s=0;s<w;++s){m===$&&C.c()
if(m[s]!==0||a7[s].b<n)continue
i=a7[s]
l+=i.a
k+=i.c;++j}if(j===0)return B.I4
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
d=new A.bTx(a5,new A.q(m,(u+n)/2,i),o,new A.q(q,0,v),e,new A.q(0,1,0))
w=C.ar(a9,B.bjk,0.88)
w.toString
v=C.ar(a9,D.w,0.25)
v.toString
m=C.ar(a9,B.bh7,0.6)
m.toString
a0=C.a([],x.z)
a1=new A.bTz(a0,o,b0,b1)
a2=new A.bTy(a1,d)
for(a3=0;a3<2;++a3){a4=F.hy[a3]
i=a4*0.34
a2.$6(i,0.08,0.2,0.11,D.c,1.2)
a2.$6(i,0.08,0.085,0.085,w,1.6)
g=i-0.22
i+=0.22
f=0.04*a4
a1.$6(d.$2(g,0.33),d.$2(i,0.31+f),d.$2(i,0.25+f),d.$2(g,0.27),w,1.2)}a0.push(new A.ko(C.a([d.$2(0,0.12),d.$2(-0.1,-0.22),d.$2(0.1,-0.22)],x.o),o,v,b0,0,1,!1,0,1.2,2,b1))
a1.$6(d.$2(-0.2,-0.46),d.$2(0.2,-0.46),d.$2(0.17,-0.53),d.$2(-0.17,-0.53),m,1.2)
a1.$6(d.$2(-0.2,-0.46),d.$2(0.2,-0.46),d.$2(0.2,-0.485),d.$2(-0.2,-0.485),w,1.5)
return a0}}
A.dv_.prototype={}
A.djE.prototype={
cR7(d){var w,v,u=this.a,t=J.a5(u),s=x.j,r=x.G,q=C.aK(J.r(r.a(J.r(s.a(t.h(u,"images")),d)),"bufferView")),p=q==null?null:D.k.N(q)
if(p==null)return null
w=r.a(J.r(s.a(t.h(u,"bufferViews")),p))
u=J.a5(w)
t=C.aK(u.h(w,"byteOffset"))
v=t==null?null:D.k.N(t)
if(v==null)v=0
return C.ym(this.b,v,v+D.k.N(C.e1(u.h(w,"byteLength"))))},
Fz(a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=null,g="byteOffset",f=this.a,e=J.a5(f),d=x.j,a0=x.G,a1=a0.a(J.r(d.a(e.h(f,"accessors")),a5)),a2=J.a5(a1),a3=D.k.N(C.e1(a2.h(a1,"count"))),a4=a2.h(a1,"type")
A:{w=1
if("SCALAR"===a4)break A
if("VEC2"===a4){w=2
break A}if("VEC3"===a4){w=3
break A}if("VEC4"===a4){w=4
break A}if("MAT2"===a4){w=4
break A}if("MAT3"===a4){w=9
break A}if("MAT4"===a4){w=16
break A}break A}v=D.k.N(C.e1(a2.h(a1,"componentType")))
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
m=C.aTr(this.b)
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
A.r9.prototype={
gDr(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=1e9,d=-1e9,a0=this.w,a1=a0.length
if(a1===0){a0=this.e
return new C.cw([-a0/2,a0/2,-12,0])}for(w=this.e,v=-w,u=d,t=e,s=u,r=t,q=0;q<a1;++q){p=a0[q]
for(o=p.e,o=[v*o/2,w*o/2],n=p.c,m=p.a,l=p.b,k=0;k<2;++k){j=o[k]
for(i=[-12,0],h=0;h<2;++h){g=A.vy(new A.q(j,0,i[h]),n)
f=g.a+m
r=Math.min(r,f)
s=Math.max(s,f)
f=g.c+l
t=Math.min(t,f)
u=Math.max(u,f)}}}return new C.cw([r,s,t,u])},
gap5(){return this.gDr().a[1]-this.gDr().a[0]},
gGP(){var w=this.w
return w.length===0?this.f:new C.N(w,new A.bHU(this),C.T(w).k("N<1,K>")).fb(0,D.pI)},
gbe1(){return this.gDr().a[3]-this.gDr().a[2]},
ga4q(d){return this.w.length===0?0:(this.gDr().a[0]+this.gDr().a[1])/2},
ga4r(){return this.w.length===0?0:(this.gDr().a[2]+this.gDr().a[3])/2},
geg(d){var w=this
return Math.max(Math.max(w.gap5(),w.gbe1()),Math.max(w.gGP()*1.3,w.x))*w.y}}
A.Ht.prototype={}
A.aT8.prototype={
bjp(){var w=this
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
if(w!=null)u.n(0,"logo",D.cI.gcp().aL(w))
w=v.r
if(w!=null)u.n(0,"pic",D.cI.gcp().aL(w))
return u},
TU(d){var w,v=this,u=J.a5(d)
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
v.f=typeof u.h(d,"logo")=="string"?D.cD.aL(C.cP(u.h(d,"logo"))):null
v.r=typeof u.h(d,"pic")=="string"?D.cD.aL(C.cP(u.h(d,"pic"))):null}}
A.bHS.prototype={
cY2(){var w,v,u
for(w=this.b,v=w.length,u=0;u<w.length;w.length===v||(0,C.M)(w),++u)w[u].bjp()},
ag(){var w,v,u,t=this.a,s=C.a([],x.c7)
for(w=this.b,v=w.length,u=0;u<w.length;w.length===v||(0,C.M)(w),++u)s.push(w[u].ag())
return C.G(["template",t,"signs",s],x.N,x.A)},
TU(d){var w,v,u,t,s,r,q
this.a=D.d.b2(B.a3w,new A.bHT(d))?C.cP(J.r(d,"template")):"highway"
w=J.r(d,"signs")
if(x.j.b(w)){v=J.a5(w)
u=x.G
t=this.b
s=x.N
r=x.A
q=0
for(;;){if(!(q<6&&q<v.gL(w)))break
if(u.b(v.h(w,q)))t[q].TU(C.a2(u.a(v.h(w,q)),s,r));++q}}else this.b[0].TU(d)}}
A.hn.prototype={}
A.aoK.prototype={
R(){var w=A.hDg()
$.x5()
return new A.aoL(w,new C.wt())}}
A.aoL.prototype={
gim(){var w,v=this.e
if(v===$){w=new A.xh(0.5,0.25,420,B.fXI,$.au())
w.e=30
w.f=5000
w.w=0.02
w.x=1.4
w.r9(!0)
this.e!==$&&C.bI()
this.e=w
v=w}return v},
gaxn(){var w=this.r
return w===$?this.r=new A.a5l(this.gc6G(),V.BC):w},
gzy(){return D.d.fP(B.a3w,new A.c3T(this))},
Z(){var w=this
w.a2()
w.f=A.h7g(w.gzy(),w.d)
w.abq()
A.hiR().bN(new A.c3R(w),x.P)
w.PD()},
q(){this.gaxn().bR(0)
var w=this.gim()
w.S$=$.au()
w.P$=0
this.a1()},
abq(){var w=this.gzy(),v=this.gim(),u=w.ga4q(0),t=w.gGP(),s=w.ga4r()
v.Nn(w.geg(0)*1.9,0.22,new A.q(u,w.r+t/2,s),0.45)},
PD(){var w=0,v=C.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i
var $async$PD=C.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return C.b(C.az(),$async$PD)
case 7:q=e
p=C.aS(J.r(q.a,"ngmy_billboard_studio_v1"))
if(p==null){w=1
break}n=r.d
n.TU(x.b.a(D.X.aM(0,p,null)))
n=n.b,m=n.length,l=0
case 8:if(!(l<n.length)){w=10
break}o=n[l]
i=o
w=11
return C.b(A.afZ(o.f),$async$PD)
case 11:i.w=e
i=o
w=12
return C.b(A.afZ(o.r),$async$PD)
case 12:i.x=e
case 9:n.length===m||(0,C.M)(n),++l
w=8
break
case 10:if(r.c==null){w=1
break}r.m(new A.c3E(r))
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
return C.i($async$PD,v)},
IU(){var w=0,v=C.j(x.H),u=1,t=[],s=this,r,q,p
var $async$IU=C.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
w=6
return C.b(C.az(),$async$IU)
case 6:r=e
w=7
return C.b(r.au("String","ngmy_billboard_studio_v1",D.X.ap(s.d.ag(),null)),$async$IU)
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
return C.i($async$IU,v)},
c6H(){var w,v,u,t,s,r,q,p=this
if(!(p.x>=0)||p.c==null)return
w=p.w.gi9()/1000
if(w>=30){p.aBA(!0)
return}v=A.i7o(p.gzy(),w)
u=v.b
t=u.aF(0,v.a)
s=Math.max(8,t.guU())
r=p.gim()
q=Math.atan2(t.a,-t.c)
r.Nn(s,Math.asin(D.k.E(-t.b/s,-1,1)),u,q)
p.m(new A.c3K(p,w))},
bqN(){var w,v=this
v.gim().w=-1.4
w=v.w
w.kf(0)
w.h2(0)
v.m(new A.c3S(v))
v.gaxn().h2(0)},
aBA(d){var w,v=this
v.gaxn().bR(0)
w=v.w
if(w.b==null)w.b=$.OR.$0()
v.gim().w=0.02
v.m(new A.c3H(v,d))
v.abq()},
czl(){return this.aBA(!1)},
cvi(d){var w=this
w.d.a=d
w.m(new A.c3G(w))
w.abq()
w.IU()},
ZE(d){this.d.b[d].a=!1
this.m(new A.c3e())
this.IU()},
IT(d,e){return this.ckZ(d,e)},
ckZ(d,e){var w=0,v=C.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k
var $async$IT=C.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
m=e?400:900
w=7
return C.b(new C.hV().l1(85,m,D.eL),$async$IT)
case 7:q=g
if(q==null){w=1
break}w=8
return C.b(q.fk(),$async$IT)
case 8:p=g
w=9
return C.b(A.afZ(p),$async$IT)
case 9:o=g
if(o==null){w=1
break}n=r.d.b[d]
if(e){n.f=p
n.w=o}else{n.r=p
n.x=o}r.ZE(d)
t=2
w=6
break
case 4:t=3
k=s.pop()
if(r.c!=null)r.m(new A.c3F(r))
w=6
break
case 3:w=2
break
case 6:case 1:return C.h(u,v)
case 2:return C.f(s.at(-1),v)}})
return C.i($async$IT,v)},
cBo(){var w=this.c
w.toString
C.bV(D.av,null,new A.c3J(this),w,!0,!0,!0,D.k2,!1,!1,x.H)},
bOH(){var w,v,u,t,s,r,q=this,p={}
p.a=0
w=q.d.b[0]
v=w.b
u=$.au()
t=new C.as(new C.b9(v,D.b2,D.aO),u)
v=w.c
s=new C.as(new C.b9(v,D.b2,D.aO),u)
w=w.d
r=new C.as(new C.b9(w,D.b2,D.aO),u)
w=q.c
w.toString
C.bV(D.av,null,new A.c3C(p,q,new A.c3D(p,q,t,s,r),t,s,r),w,!0,!0,!0,D.k2,!1,!1,x.H)},
axp(d,e,f,g){var w=null,v=g?f.j(0.3):D.w.j(0.6),u=C.m(20),t=C.J(f,D.r,1)
return C.aB(w,C.p(w,C.d(d,w,w,w,w,w,w,C.l(w,w,f,w,w,w,w,w,w,w,w,13,w,w,D.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),D.f,w,w,new C.o(v,w,t,u,w,w,D.n),w,w,w,w,D.iB,w,w,w),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,e,w,w,w,w,w,w,!1,D.a4)},
axo(d,e,f){return this.axp(d,e,f,!1)},
c6F(d,e,f){return this.axp(d,e,D.aQ,f)},
B(d){var w,v,u,t,s,r=this,q=null,p=C.aJ(d,q,x.w).w.r,o=r.f
o===$&&C.c()
w=x.p
o=C.a([C.bT(0,A.h3k(E.Bi,r.gim(),q,q,0,q,q,q,o,!0),0,0,0)],w)
if(!(r.x>=0))o.push(C.ao(q,C.B(C.a([C.aB(q,C.p(q,D.a2s,D.f,q,q,new C.o(D.w.j(0.55),q,C.J(D.bY,D.r,1),q,q,q,D.a6),q,40,q,q,q,q,q,40),D.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new A.c3N(d),q,q,q,q,q,q,!1,D.a4),D.at,C.E(C.d("Billboard studio \xb7 "+r.gzy().c,q,q,q,q,q,q,B.ffA,q,q,q),1)],w),D.m,q,D.e,D.i,0,q,q),q,q,8,8,p.b+8,q))
if(r.x>=0&&r.y)o.push(C.bT(0,C.aB(D.c9,q,D.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new A.c3O(r),q,q,q,q,q,q,!1,D.a4),0,0,0))
if(!(r.x>=0&&r.y)){v=C.a([],w)
if(r.z.length!==0&&!(r.x>=0)){u=D.e_.j(0.95)
t=C.m(12)
s=C.J(D.bj,D.r,1)
v.push(C.p(q,C.d(r.z,q,q,q,q,q,q,D.UH,q,q,q),D.f,q,q,new C.o(u,q,s,t,q,q,D.n),q,q,q,D.cv,D.bS,q,q,q))}w=C.a([],w)
if(!(r.x>=0))w.push(r.axo("\ud83e\udea7 Choose billboard",r.gcBn(),F.fz))
if(!(r.x>=0))w.push(r.axo("\u270f\ufe0f Edit",r.gbOG(),D.bj))
if(r.x>=0)w.push(r.axp("\u23f9 Stop the drone",r.gczk(),D.ct,!0))
if(r.x>=0)w.push(r.axo("\ud83d\udc41 Hide everything",new A.c3P(r),D.aL))
if(!(r.x>=0))w.push(r.c6F("\ud83c\udfac 30 second drone shot",r.gbqM(),!0))
v.push(C.bX(D.fI,w,D.bq,q,8,8))
o.push(C.ao(p.d+12,C.x(v,D.m,q,D.e,D.P,0,D.p),q,q,10,10,q,q))}return C.c7(q,D.w,new C.an(D.a_,q,D.aa,D.t,o,q),q,!1,!1,q,q)}}
A.FZ.prototype={}
A.zd.prototype={}
A.xm.prototype={}
A.aUh.prototype={}
A.a4u.prototype={}
A.akp.prototype={}
A.bMe.prototype={
bzc(d,e){var w,v,u,t,s,r,q,p=this,o=x._,n=C.a([],o)
for(w=p.a.x,v=w.length,u=0;u<w.length;w.length===v||(0,C.M)(w),++u){t=w[u]
s=t.b
if(s==="house2"||s==="bighouse")n.push(t)}p.b!==$&&C.aQ()
p.b=n
o=C.a([],o)
for(n=w.length,u=0;u<w.length;w.length===n||(0,C.M)(w),++u){t=w[u]
if(D.d.b2(B.R3,new A.bMg(t)))o.push(t)}p.c!==$&&C.aQ()
p.c=o
for(o=p.f,r=0;r<5;++r){q=p.coi()
n=B.dux[r]
w=B.diO[r]
o.push(new A.aUh(n,w,new A.tK(B.axz[r],B.M6,w,B.Lz,B.dnX[r],!1,0,1),58+r*7.5,q.a,q.b,B.azU))}p.UH(0)},
coi(){var w,v=this.c
v===$&&C.c()
w=v.length
if(w===0)return B.etS
return A.yP(v[this.d.aq(w)])},
cWu(d){var w,v,u,t,s,r,q,p=this,o=C.a([],x._),n=p.c
n===$&&C.c()
w=n.length
v=0
for(;v<n.length;n.length===w||(0,C.M)(n),++v){u=n[v]
t=u.b
if(t==="store"||t==="shop"||t==="gasstation")o.push(u)}if(o.length===0)return
D.d.aW(o,new A.bMi(p,d))
for(n=p.e,s=0,v=0;v<2;++v){r=B.dmm[v]
q=o[D.o.F(s,o.length)];++s;++p.r
w=new A.xm(r,q,d,r==="medicine"?30:24)
w.w=!0
D.d.c3(n,0,w)}},
UH(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=j.d,h=j.e,g=x._,f=C.T(h).k("Z<1>"),e=0
for(;;){if(new C.Z(h,new A.bMj(),f).gL(0)<7){w=e+1
v=e<30
e=w}else v=!1
if(!v)break
u=B.R3[i.aq(5)]
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
o=v[i.aq(t)]
v=j.b
v===$&&C.c()
n=v[i.aq(v.length)]
m=A.yP(o)
l=A.yP(n)
k=Math.sqrt(Math.pow(m.a-l.a,2)+Math.pow(m.b-l.b,2));++j.r
h.push(new A.xm(u.a,o,n,6+D.o.E(D.k.V(k/70),0,22)))}},
cYx(d,e,f){if(this.x!=null||e.f!=null||!D.d.t(this.e,e))return!1
e.f=-1
e.x=f
this.x=e
return!0},
a4(d){var w=this.x
if(w==null)return
w.f=null
w.r=!1
this.x=null},
ga6R(d){var w=this.x
if(w==null)return null
return A.yP(w.r?w.d:w.c)},
bkm(d,e,f){var w,v,u,t,s,r,q,p=this,o=p.x
if(o==null)return null
if(f-o.x>360){p.a4(0)
return B.buy}w=p.ga6R(0)
if(Math.sqrt(Math.pow(w.a-d,2)+Math.pow(w.b-e,2))>58)return null
if(!o.r){o.r=!0
v=o.b
u=A.Le(v)
v=A.Le(v)
t=B.hz.h(0,o.c.b).a
s=o.w?"hospital":"house"
return new A.akp("pickup",u.b+" You picked up the "+v.c.toLowerCase()+" at the "+t.toLowerCase()+". Now take it to the "+s+".",0)}D.d.W(p.e,o)
p.x=null;++p.z;++p.y
v=p.Q
u=o.e
p.Q=v+u
p.UH(f)
r=A.Le(o.b).b+" Delivered! +"+u+" points."
if(p.y>=8){p.Q+=40
r+=" You won the race with 8 deliveries: +40 points!"
p.aYU()
q=40}else q=0
v=q>0?"won":"delivered"
return new A.akp(v,r,u+q)},
aYU(){var w,v,u;++this.as
this.y=0
for(w=this.f,v=w.length,u=0;u<v;++u)w[u].r=0},
FF(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
for(w=j.f,v=w.length,u=j.e,t=e+2,s=j.d,r=x.C,q=null,p=0;p<w.length;w.length===v||(0,C.M)(w),++p){o=w[p]
n=o.ch
if(n===0){if(e<o.CW)continue
n=C.a([],r)
for(m=u.length,l=0;l<u.length;u.length===m||(0,C.M)(u),++l){k=u[l]
if(k.f==null)n.push(k)}if(n.length===0)continue
D.d.aW(n,new A.bMf(j,o))
k=n[Math.min(n.length-1,s.aq(3))]
k.f=D.d.cv(w,o)
o.y=k
j.b7f(o,e,1,k.c)}else if(e>=o.Q){if(!o.db){o.e=o.ax
o.f=o.ay
o.db=!0
o.dx=e+(n===1?1.6:1.3)
continue}if(e<o.dx)continue
o.db=!1
m=o.y
m.toString
if(n===1)j.b7f(o,e,2,m.d)
else{D.d.W(u,m)
o.y=null
o.ch=0;++o.w;++o.r
o.x=o.x+m.e
o.CW=t+s.ah()*5
j.UH(e)
if(o.r>=8){q=o.a+" won the race with 8 deliveries! A new round starts."
j.aYU()}}}}return q},
aZH(d,e){return Math.sqrt(Math.pow(e.a-d.e,2)+Math.pow(e.b-d.f,2))},
b7f(d,e,f,g){var w,v,u,t=this,s=A.yP(g),r=B.hz.h(0,g.b),q=g.e*3.141592653589793/2,p=r.d/2-2,o=g.c+Math.sin(q)*p,n=g.d+Math.cos(q)*p
d.ch=f
d.ax=o
d.ay=n
w=t.w
if(w===$){v=new A.bKk(t.a)
v.aZI()
t.w!==$&&C.bI()
t.w=v
w=v}u=C.C(w.aoM(new C.z(d.e,d.f),s),x.J)
u.push(new C.z(o,n))
d.cx=u
o=A.ihT(u)
d.cy=o
d.z=e
d.Q=e+Math.max(1,o/d.d)},
aml(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=C.a([],x.B)
for(w=this.f,v=w.length,u=d*2.2,t=0;t<w.length;w.length===v||(0,C.M)(w),++t){s=w[t]
r=s.e
q=s.f
if(s.db)continue
if(s.ch!==0&&d>=s.z&&s.cx.length>1){p=s.z
o=D.k.E((d-p)/Math.max(0.01,s.Q-p),0,1)
n=A.ihZ(s.cx,s.cy*o)
r=n.a
q=n.b
m=n.c
l=o<1}else{m=0
l=!1}k.push(new A.a4u(r,q,m,u+s.d,l,s.ch===2,s.c,s.b))}return k},
cYv(){var w,v,u,t,s=C.a([new C.bk("You",this.y,this.Q)],x.aJ)
for(w=this.f,v=w.length,u=0;u<w.length;w.length===v||(0,C.M)(w),++u){t=w[u]
s.push(new C.bk(t.a,t.r,t.x))}D.d.aW(s,new A.bMk())
return s},
r0(d,e,f){var w,v,u,t,s=C.a([],x.C)
for(w=this.e,v=w.length,u=0;u<w.length;w.length===v||(0,C.M)(w),++u){t=w[u]
if(t.f==null)s.push(t)}D.d.aW(s,new A.bMh(this,e,f))
return s},
aap(d,e,f){return Math.sqrt(Math.pow(f.a-d,2)+Math.pow(f.b-e,2))}}
A.bKk.prototype={
aZL(d){return-this.a.gex(0)/2+8+d*24},
aZI(){var w,v,u,t,s=this,r=s.a
s.d=A.hwK(r,null)
s.b=D.k.dd((r.gex(0)-16)/24)+1
w=D.k.dd((r.ghq(0)-10- -750)/24)+1
s.c=w
s.e=C.c1(s.b*w,!1,!1,x.R)
for(v=0;v<s.b;++v)for(w=v*24,u=0;t=s.c,u<t;++u)s.e[v*t+u]=s.ach(-r.gex(0)/2+8+w,-750+u*24)
s.f=A.hcN(r)},
ach(d,e){var w,v,u=this.a
if(d<-u.gex(0)/2+12||d>u.gex(0)/2-12||e<-756||e>u.ghq(0)-14)return!0
u=this.d
u===$&&C.c()
w=u.length
v=0
for(;v<w;++v)if(u[v].aGx(d,e,14))return!0
return!1},
aZJ(d,e,f){var w,v,u=e.a,t=f.a-u,s=e.b,r=f.b-s,q=Math.max(1,D.k.dd(Math.sqrt(Math.pow(t,2)+Math.pow(r,2))/8))
for(w=0;w<=q;++w){v=w/q
if(this.ach(u+t*v,s+r*v))return!1}return!0},
aZK(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=d.a,h=j.a,g=D.k.V((i+h.gex(0)/2-8)/24),f=j.b
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
aoM(d,e){var w,v,u,t,s,r,q,p,o,n,m=this
if(A.hcN(m.a)!==m.f)m.aZI()
w=m.aZK(d)
v=m.aZK(e)
if(w==null||v==null)return C.a([d,e],x.f)
u=new C.z(m.aZL(w.a),-750+w.b*24)
t=new C.z(m.aZL(v.a),-750+v.b*24)
s=x.f
r=m.ach(d.a,d.b)?C.a([d],s):C.a([],s)
q=m.ach(e.a,e.b)?C.a([e],s):C.a([],s)
p=C.a([],s)
o=r.length===0?d:u
n=q.length===0?e:t
if(m.aZJ(0,o,n))D.d.v(p,C.a([o,n],s))
else D.d.v(p,m.cu5(w,v,o,n))
s=C.C(r,x.J)
D.d.v(s,p)
D.d.v(s,q)
return s},
cu5(a9,b0,b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this,a3=x.t,a4=C.a([],a3),a5=new A.dk6(a4,C.a([],x.n)),a6=x.S,a7=C.U(a6,a6),a8=C.U(a6,x.i)
a6=a9.a
w=a2.c
w===$&&C.c()
v=a9.b
u=a6*w+v
t=b0.a
s=b0.b
r=t*w+s
a8.n(0,u,0)
a5.aog(u,a2.c7b(a6,v,b0))
p=0
for(;;){if(a4.length!==0){o=p+1
a6=p<4e4
p=o}else a6=!1
if(!a6){q=!1
break}n=a5.eN()
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
a5.aog(e,d+Math.sqrt(Math.pow(v,2)+Math.pow(h-s,2)))}}}if(!q)return C.a([b1,b2],x.f)
a0=C.a([r],a3)
while(a7.aj(0,D.d.gak(a0))){a3=a7.h(0,D.d.gak(a0))
a3.toString
a0.push(a3)}a3=x.f
a4=C.a([b1],a3)
for(a6=x.c5,w=new C.dw(a0,a6),w=new C.bS(w,w.gL(0),a6.k("bS<ak.E>")),v=a2.a,a6=a6.k("ak.E");w.C();){t=w.d
if(t==null)t=a6.a(t)
s=a2.c
g=D.o.eb(t,s)
a4.push(new C.z(-v.gex(0)/2+8+g*24,-750+D.o.F(t,s)*24))}a4.push(b2)
a1=C.a([D.d.gI(a4)],a3)
for(j=0;h=a4.length-1,j<h;j=h){a3=j+1
for(;;){if(!(h>a3&&!a2.aZJ(0,a4[j],a4[h])))break;--h}a1.push(a4[h])}return a1},
c7b(d,e,f){return Math.sqrt(Math.pow(d-f.a,2)+Math.pow(e-f.b,2))}}
A.dk6.prototype={
gcm(d){return this.a.length!==0},
aog(d,e){var w,v,u,t=this.a
t.push(d)
w=this.b
w.push(e)
v=t.length-1
for(;v>0;v=u){u=D.o.ao(v-1,2)
if(w[u]<=w[v])break
this.b7V(v,u)}},
eN(){var w,v,u,t,s,r=this.a,q=D.d.gI(r),p=r.pop(),o=this.b,n=o.pop()
if(r.length!==0){r[0]=p
o[0]=n
for(w=0;;w=s){v=2*w+1
u=v+1
t=r.length
s=v<t&&o[v]<o[w]?v:w
if(u<t&&o[u]<o[s])s=u
if(s===w)break
this.b7V(w,s)}}return q},
b7V(d,e){var w,v=this.a,u=v[d]
v[d]=v[e]
v[e]=u
v=this.b
w=v[d]
v[d]=v[e]
v[e]=w}}
A.aTE.prototype={
bjM(d,e,f){var w,v,u,t,s=this,r=null,q=s.d
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
a6T(d){return this.bjM(d,!1,!1)}}
A.aYV.prototype={
B(d){var w,v,u,t,s,r=null,q=D.k.E(this.c,0,1)
if(q>0.5)w=D.be
else w=q>0.25?D.bG:D.aw
v=C.a([],x.p)
u=this.d
v.push(new C.D(D.qc,C.d(this.e,r,r,r,r,r,r,C.l(r,r,r,r,r,r,r,r,r,r,r,u,r,r,r,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),r))
t=C.m(u/3)
s=C.J(D.ae,D.r,1.5)
v.push(C.E(C.p(r,new C.bO(D.a5,r,r,C.BA(D.A,C.c4(r,new C.o(w,r,r,C.m(u/4),r,r,D.n),D.bg),1,q),r),D.f,r,r,new C.o(D.aS,r,s,t,r,r,D.n),r,u,r,r,D.ns,r,r,r),1))
v.push(C.p(r,r,D.f,r,r,new C.o(D.ae,r,r,C.m(1),r,r,D.n),r,u*0.45,r,B.bAO,r,r,r,3))
return C.B(v,D.m,r,D.e,D.P,0,r,r)}}
A.UE.prototype={
B(d){return new C.tv(new A.c1u(this),null,this.c,null)}}
A.rM.prototype={}
A.SG.prototype={
gL(d){return this.a==="bus"?120:95.94999999999999}}
A.aTD.prototype={}
A.bxk.prototype={
bAi(d,e,f,g){var w,v,u,t,s,r,q,p,o,n,m
for(w=this.e,v=this.f,u=0;u<4;++u){t=B.km[u]
s=A.foe(t).a[1]
r=new A.fh0(this,t)
q=0
for(;;){if(!(r.$1(q)&&q<s))break;++q}for(p=-1,o=0,n=0;n<s;++n){m=D.o.F(q+n,s)
if(r.$1(m)){if(p<0)p=m;++o}else if(p>=0)break}w.push(p)
v.push(o)}}}
A.bKm.prototype={
kf(d){var w,v,u,t
for(w=this.a,v=this.b,u=0;u<4;++u){w[u]=B.km[u].r
v[u]=0}t=this.c=0
for(w=$.fZd();t<2;++t)w[t].r=-1},
FF(d,e){var w,v,u,t=this
if(e<t.c-0.0001)t.kf(0)
w=t.c
if(e-w>90){w=e-2
t.c=w}for(v=e-1e-9;w<v;){u=Math.min(0.05,e-w)
t.cza(u)
w=t.c+=u}},
cza(b8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7=this
for(w=$.fZd(),v=b7.a,u=0;u<2;++u){t=w[u]
s=t.r
if(s<0)continue
r=A.foe(B.km[s]).a[1]
q=D.k.F(v[s]-t.e[s],r)
if(q<0)q+=r
if(q>=t.f[s]&&q<r/2)t.r=-1}for(w=b7.b,p=110*b8,o=40*b8,n=0;n<4;++n){m=B.km[n]
r=A.foe(m).a[1]
l=m.a==="bus"
k=(l?120:95.94999999999999)/2
j=new A.bKn()
for(i=34,h=0;h<4;++h){if(h===n||D.o.ao(n,2)!==D.o.ao(h,2))continue
g=D.k.F(v[h]-v[n],r)
if(g<0)g+=r
g-=k+(B.km[h].a==="bus"?120:95.94999999999999)/2
if(g<400)i=Math.min(i,C.jV(j.$1(g-18)))}for(f=$.bFF(),e=f.length,d=r-30,u=0;u<f.length;f.length===e||(0,C.M)(f),++u){a0=f[u]
if(a0.a!==D.o.ao(n,2))continue
a1=A.h7S(a0,b7.c)
if(a1===0)continue
a2=D.k.F(a0.b-(v[n]+k),r)
if(a2<0)a2+=r
if(a2>d)continue
if(a2<260)a3=!(a1===1&&a2<w[n]*1.2)
else a3=!1
if(a3)i=Math.min(i,C.jV(j.$1(a2-4)))}for(f=$.fZd(),u=0;u<2;++u){t=f[u]
a4=t.e[n]
if(a4<0)continue
e=v[n]
a2=D.k.F(a4-e,r)
if(a2<0)a2+=r
if(D.k.F(e-a4,r)<t.f[n]){if(t.r<0)t.r=n
continue}if(t.r===n)continue
e=w[n]
for(d=$.bFF(),a3=d.length,a5=b7.c,a6=!1,a7=0;a7<a3;++a7){a0=d[a7]
if(a0.a!==D.o.ao(n,2)||A.h7S(a0,a5)===0)continue
a8=D.k.F(a0.b-(v[n]+k),r)
if((a8<0?a8+r:a8)<a2)a6=!0}if(t.r<0&&a2<40+e*e/220+20&&!a6){t.r=n
continue}if(a2<400)i=Math.min(i,C.jV(j.$1(a2-10)))}f=A.Lj(m,v[n]).a
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
cWn(d,e,f){this.FF(0,f)
return A.Lj(B.km[e],this.a[e])},
cR_(d,e){var w,v,u,t,s,r,q,p,o,n,m,l
for(w=this.a,v=this.b,u=0;u<4;++u){if(v[u]<4)continue
t=B.km[u]
s=A.Lj(t,w[u]).a
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
A.Al.prototype={
ga8k(){var w=this.d,v=w.e*3.141592653589793/2,u=Math.sin(v),t=Math.cos(v),s=this.r-1
return new C.z(w.c+u*42-t*s*24,w.d+t*42+u*s*24)}}
A.cAX.prototype={
bA7(d,e){var w,v,u,t,s=this,r=x._,q=C.a([],r)
for(w=s.a.x,v=w.length,u=0;u<w.length;w.length===v||(0,C.M)(w),++u){t=w[u]
if(t.b==="ubstation")q.push(t)}s.c!==$&&C.aQ()
s.c=q
r=C.a([],r)
for(q=w.length,u=0;u<w.length;w.length===q||(0,C.M)(w),++u){t=w[u]
v=t.b
if(v==="house2"||v==="bighouse")r.push(t)}s.d!==$&&C.aQ()
s.d=r
s.UH(0)},
UH(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.d
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
n=C.pW(q)
n.v(0,new C.cQ(new C.Z(t,new A.cAZ(o),r),new A.cB_(),s))
for(m=0;m<3;++m){if(n.t(0,m))continue
l=g.f
k=l==null
if((k?null:l.d)===o)l=(k?null:l.r)===m
else l=!1
if(l)continue
l=g.x++
j=f[u.aq(f.length)]
i=A.yP(j)
h=Math.sqrt(Math.pow(o.c-i.a,2)+Math.pow(o.d-i.b,2))
l=new A.Al(l,B.djk[u.aq(12)],new A.tK(B.axz[u.aq(5)],B.M6,B.dri[u.aq(6)],D.aJ,"human",!1,0,1),o,j,6+D.o.E(D.k.V(h/45),0,30),m)
l.x=d
t.push(l)}}},
aqr(d,e){var w,v,u,t=this.c
t===$&&C.c()
w=t.length
v=0
for(;v<t.length;t.length===w||(0,C.M)(t),++v){u=t[v]
if(Math.sqrt(Math.pow(u.c-d,2)+Math.pow(u.d-e,2))<150)return u}return null},
cW8(d,e){var w,v,u,t,s,r,q=this
if(q.f!=null)return null
w=q.aqr(d,e)
if(w==null)return null
v=C.a([],x.bz)
for(u=q.e,t=u.length,s=0;s<u.length;u.length===t||(0,C.M)(u),++s){r=u[s]
if(r.d===w)v.push(r)}if(v.length===0)return null
D.d.aW(v,new A.cAY())
r=D.d.gI(v)
D.d.W(u,r)
return q.f=r},
ga6R(d){var w=this.f
return w==null?null:A.yP(w.e)},
cNW(d,e,f){var w,v,u=this,t=u.f,s=u.ga6R(0)
if(t==null||s==null)return 0
if(Math.sqrt(Math.pow(s.a-d,2)+Math.pow(s.b-e,2))>70)return 0
u.f=null;++u.r
w=u.w
v=t.f
u.w=w+v
u.y=f+4
u.UH(f)
return v},
aml(d){var w,v,u,t,s,r,q,p
if(d<this.y)return B.I3
w=C.a([],x.B)
for(v=this.e,u=v.length,t=d*1.4,s=0;s<v.length;v.length===u||(0,C.M)(v),++s){r=v[s]
q=r.d
p=r.c
w.push(new A.a4u(r.ga8k().a,r.ga8k().b,Math.atan2(q.c-r.ga8k().a,q.d-r.ga8k().b)+3.141592653589793,t+r.a,!1,!1,p,p.c))}return w}}
A.pB.prototype={}
A.bK8.prototype={
gM5(){var w,v=this,u=v.r
if(u===$){w=A.hxL(v.b)
v.r!==$&&C.bI()
v.r=w
u=w}return u},
cc1(){var w,v=this.a
A:{if("hospital"===v){w=B.cxd
break A}if("dmv"===v){w=B.drD
break A}if("shop"===v){w=B.cXt
break A}if("school"===v){w=B.d5M
break A}if("firestation"===v){w=B.dkZ
break A}if("tower"===v){w=B.df8
break A}w=B.dpD
break A}return w},
cGS(){var w,v=this.a
A:{if("hospital"===v){w=B.cx9
break A}if("dmv"===v){w=B.d7L
break A}if("shop"===v){w=B.d2k
break A}if("school"===v){w=B.deU
break A}if("firestation"===v){w=B.dbW
break A}if("tower"===v){w=B.du5
break A}w=B.cWZ
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
t=p.c7N(q,e)}if(t!=null)p.B(e)
return t},
c7N(d,e){var w,v,u,t,s,r=this,q="The city is still loading.",p="The breaker panel on level "
switch(r.a){case"hospital":if(e==null)return q
if(d===0){w=e.gC6()
v=C.T(w).k("Z<1>")
u=C.C(new C.Z(w,new A.bK9(),v),v.k("L.E"))
if(u.length===0)return"The desk: nobody needs the hospital right now. "+e.x+" doses of medicine in stock."
return e.aDm(D.d.gI(u))}t=d-1
if(e.e[t].a<0)return"This bed is empty. Admit someone at the desk first."
return e.bk0(t)
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
return"You taught the class a lesson. +3 points. "+B.a4c[D.o.F(w==null?0:w,5)]}w=e==null?null:e.r
return"The library: "+B.a4c[D.o.F(w==null?1:w,5)]
case"firestation":if(d===0){if(e!=null)e.r+=2
return"You checked the equipment with the firefighters. +2 points. Keep the extinguishers charged."}w=e==null?null:e.r
return"Fire drill: "+B.a4c[D.o.F((w==null?0:w)+1,5)]
case"tower":if(d===0){r.w=!0
return"The elevator: choose your level (you are on level "+r.f+" of "+r.gM5()+")."}if(d===2){r.x=!0
return"The balcony on level "+r.f+": the whole town is below you."}if(r.c){r.cy=!0
return p+r.f+". This office has no power. Let us find the wiring fault."}return p+r.f+": every breaker is on and the office has power."
default:if(d===0){if(r.c){r.cy=!0
return"The breaker panel. This house has no power. Let us find the wiring fault."}return"The breaker panel: every breaker is on and the house has power."}return r.c?"The outlet is dead: there is no power in this house.":"The outlet works. Everything here is wired right."}},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this
g.ch=d
w=g.a
if(w==="cabin"){g.bER()
return}v=C.a([],x.z)
u=new A.fk(v)
t=C.a([],x.E)
A:{if("hospital"===w){s=B.eEV
break A}if("shop"===w){s=B.eyK
break A}if("dmv"===w){s=B.eB7
break A}if("school"===w){s=B.eS5
break A}if("firestation"===w){s=B.eFU
break A}if("tower"===w){s=new C.z(g.c?B.ag0:B.brC,B.bgI)
break A}s=new C.z(g.c?B.ag0:B.bpq,B.ju)
break A}r=s.a
u.f=-1
u.n9(B.h75,B.h5i,s.b,0.2,3)
u.f=0
u.x=$.dS=$.dS+1
u.hp(B.h4t,B.aWR,r,3)
u.x=0
u.x=$.dS=$.dS+1
u.hp(B.h3g,B.aaX,r,3)
u.x=0
s=w==="tower"
if(s){u.f=3
u.d=0.18
u.aO(B.aX2,B.aaX,B.Z7)
u.d=1
u.f=0}else{u.x=$.dS=$.dS+1
u.hp(B.aX2,B.aaX,r,3)
u.x=0}u.f=0
q=s&&g.f>1
p=$.dS+1
if(q){u.x=$.dS=p
u.hp(B.h5w,B.aWR,r,3)
u.x=0}else{u.x=$.dS=p
u.hp(new A.q(-94,70,320.6),new A.q(113.2,140,1.2),r,2)
u.x=0
u.x=$.dS=$.dS+1
u.hp(new A.q(94,70,320.6),new A.q(113.2,140,1.2),r,2)
u.x=0
u.x=$.dS=$.dS+1
u.aO(new A.q(0,102,320.6),new A.q(76,76,1.2),r)
u.x=0
u.x=$.dS=$.dS+1
u.aZ(B.h8a,B.hdi,B.bc7,0.5)
u.x=0}u.f=1
for(o=0;o<3;++o){n=B.dlD[o]
u.aO(new A.q(n,78,0.6),B.hcR,B.kA)
u.aZ(new A.q(n,78,0.8),B.h3y,B.hW,0.6)}for(q=!s,o=0;o<2;++o){m=B.cEx[o]
u.aO(new A.q(-149.6,78,m),B.aWI,B.kA)
u.aZ(new A.q(-149.2,78,m),B.aXk,B.hW,0.6)
if(q){u.aO(new A.q(149.6,78,m),B.aWI,B.kA)
u.aZ(new A.q(149.2,78,m),B.aXk,B.hW,0.6)}}u.aO(B.h8g,B.hdg,B.kA)
u.aO(B.h8s,B.h16,D.bO)
u.f=2
u.r=!0
for(q=w!=="house2",p=w==="bighouse",o=0;o<3;++o){n=B.dm3[o]
for(l=0;l<2;++l){m=B.cEy[l]
u.dN(new A.q(n,138,m),new A.q(n,122,m),0.5,D.je,4)
k=(!q||p||s)&&g.c?D.hg:B.o6
u.ed(new A.q(n,120,m),5,k,3,6)}}switch(w){case"hospital":g.c_l(u,t,d)
break
case"shop":g.cvV(u,t)
break
case"dmv":g.bNv(u,t)
break
case"school":g.ctC(u,t)
break
case"firestation":g.cz6(u,t)
break
case"tower":g.cDc(u,t)
break
default:u.f=1
u.aO(B.heu,B.h9G,g.c?B.q4:B.agp)
u.f=2
u.aZ(B.hbT,B.fZE,B.Yk,0.1)
u.aZ(B.hbU,B.fZF,B.LX,0.1)
u.aZ(B.fZm,B.h2Y,B.nV,0.2)
u.aZ(B.h4I,B.he8,E.Fo,0.4)
u.aO(B.h_4,B.h_G,B.ah9)
u.ed(B.hbl,10,B.EX,3,6)
g.baM(u,t)}u.f=1
if(s&&g.f>1)t.push(B.c0K)
else{u.aO(B.h8I,B.h64,D.cV)
t.push(B.c0J)}if(d!=null){w=d.r
k=d.w
j=d.x
i=g.cx!=null?"   \ud83d\udce6 carrying":""
t.push(new A.hf(B.fXL,"\u2b50 "+w+"   \ud83c\udf5e "+k+"   \ud83d\udc8a "+j+i,D.M,0))}h=C.a([],x.a)
if(s){u.f=2
u.e=0
u.aZ(B.fZz,B.aWM,D.av,0.3)
u.aZ(B.h4O,B.aWM,D.av,0.3)
u.aZ(B.h8B,B.hcU,D.av,0.3)
w=x.o
h.push(new A.fQ(C.a([B.h4g,B.h90,B.h7Y,B.haK],w),0,new A.bKg(g),960,560,60,2,0,!1))
h.push(new A.fQ(C.a([B.h1C,B.heA,B.h0E,B.hcP],w),0,new A.bKh(g),960,560,60,2,0,!1))
h.push(new A.fQ(C.a([B.hcC,B.fXq,B.h3C,B.h6d],w),0,new A.bKi(g),960,560,60,2,0,!1))}if((!q||p)&&!g.c)h.push(new A.fQ(C.a([B.h9t,B.h5t,B.h82,B.h7X],x.o),0,new A.bKj(g),960,480,60,2,0,!1))
g.ay=new A.tP(v,B.S9,t,h,null,0)},
rz(d,e,f,g,h){var w=d.f
d.f=1
d.dN(new A.q(e,0.2,f),new A.q(e,0.6,f),g,h,20)
d.f=w},
c_l(d,e,f){var w,v,u,t,s,r,q,p,o
d.f=1
d.aO(B.aVL,B.h1k,D.bx)
d.aO(B.aVL,B.fZP,D.bx)
d.f=2
d.aZ(B.hcf,B.h42,B.nV,0.15)
d.aZ(B.hcg,B.h4l,D.bN,0.3)
d.aO(B.hbi,B.h3c,D.aQ)
this.rz(d,-80,66,22,D.cp)
e.push(B.c0Q)
e.push(B.c0F)
for(w=0;w<2;++w)d.aO(new A.q(-105,8,B.cf5[w]),B.h2A,D.br)
d.ed(B.h_b,9,B.EX,3,6)
for(v=f!=null,u=0;u<3;++u){t=48+u*50
d.aO(new A.q(76,8,t),B.h4_,D.cs)
d.aO(new A.q(76,14,t),B.h3V,D.aP)
d.aO(new A.q(108,18,t),B.h_9,D.c)
s=v&&u<f.e.length?f.e[u]:null
if(s!=null&&s.a>=0){r=f.c
r===$&&C.c()
q=r[s.a]
r=s.b>70?D.bj:D.ct
d.aO(new A.q(54,24,t),B.h1n,r)
r=s.b>70
p=r?"cared for":"needs treatment"
r=r?D.ed:D.bx
e.push(new A.hf(new A.q(76,40,t),q.a.b+"  "+p,r,0))}else e.push(new A.hf(new A.q(76,30,t),"Free bed "+(u+1),D.br,0))
r=t-2
o=d.f
d.f=1
d.dN(new A.q(20,0.2,r),new A.q(20,0.6,r),16,D.aC,20)
d.f=o}},
bNv(d,e){var w,v,u,t,s
d.f=2
d.r=!0
d.x=$.dS=$.dS+1
d.aZ(B.aVC,B.h_l,D.br,0.15)
d.aZ(B.aVE,B.h_n,D.bN,0.3)
d.aZ(B.hbN,B.h0t,D.av,0.3)
d.aZ(B.haU,B.h5f,D.b9,0.5)
d.aO(B.hbM,B.h3e,D.aJ)
d.aO(B.h1d,B.h_F,D.bG)
d.x=0
d.x=$.dS=$.dS+1
d.aO(B.aWf,B.aVO,D.cq)
d.aO(B.aWb,B.aVT,D.bk)
d.ed(B.aWc,5.5,B.afo,5,8)
d.ed(B.aWd,5.7,D.av,3,8)
d.x=0
d.x=$.dS=$.dS+1
d.aO(B.hbp,B.h1K,D.aP)
for(w=0;w<3;++w){v=90+w*30
d.aDK(new A.q(-146,62,v),B.h04,[D.bx,D.bG,D.bk][w],0)
d.aO(new A.q(-145.6,62,v),B.hcL,D.c)}d.aO(B.h_p,B.h1J,D.fO)
d.aO(B.h7A,B.hdz,D.c)
d.aO(B.h6O,B.hcr,D.bx)
d.x=0
for(u=0;u<4;++u){t=B.dlE[u]
d.x=$.dS=$.dS+1
d.aO(new A.q(t,9,150),B.h0z,D.bk)
d.aO(new A.q(t,17,160),B.h0u,D.bk)
d.aO(new A.q(t-8,4,150),B.aW6,D.aJ)
d.aO(new A.q(t+8,4,150),B.aW6,D.aJ)
d.x=0}d.x=$.dS=$.dS+1
d.aO(B.fYO,B.h3p,D.bM)
d.aZ(B.fXS,B.h2p,D.aw,0.4)
d.aZ(B.hbZ,B.h0P,D.dt,0.5)
for(u=0;u<2;++u){t=E.aAm[u]
for(s=0;s<2;++s){v=B.ceZ[s]
d.dN(new A.q(t,9,v-1.5),new A.q(t,9,v+1.5),5,D.av,8)}}d.x=0
this.rz(d,0,78,24,D.aQ)
e.push(B.c0N)
e.push(B.c0G)
e.push(B.c0O)},
aV9(a5,a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=a6*128
A:{if(1===a7){w=B.daY
break A}if(2===a7){w=B.dcl
break A}w=B.d62
break A}a5.x=$.dS=$.dS+1
a5.aO(new A.q(a6*148,40,120),B.h2e,B.afl)
for(v=0;v<2;++v)a5.aO(new A.q(a4,40,B.cIL[v]),B.h1V,B.afl)
a5.aO(new A.q(a4,4,120),B.h1W,B.biP)
for(u=0;u<4;++u)a5.aZ(new A.q(a4,11+u*18,120),B.h1R,B.bs9,0.1)
for(t=a7===0,s=w.length,r=a6*2.7,u=0;u<4;++u){q=12+u*18
for(p=q+6.6,o=q+3.2,n=u*7,m=q+10,l=q+12.5,k=q+7,j=q+8,i=q+2.5,h=q+5.5,g=0;g<9;++g){f=76+g*11
for(e=n+g*3,d=u+g+a7,a0=0;a0<2;++a0){a1=a6*(114+a0*14)
a2=w[D.o.F(e+a0*5+a7,s)]
switch(D.o.F(d+a0,4)){case 0:a5.dR(new A.q(a1,q,f),new A.q(a1,j,f),3.2,a2,0.3,8)
a5.L6(new A.q(a1,i,f),new A.q(a1,h,f),3.3,D.c,!1,8)
break
case 1:a5.aZ(new A.q(a1,k,f),B.h5V,a2,0.1)
a5.aO(new A.q(a1-r,j,f),B.h9l,D.c)
break
case 2:a5.dR(new A.q(a1,q,f),new A.q(a1,m,f),2.4,a2,0.45,8)
a5.dN(new A.q(a1,m,f),new A.q(a1,l,f),1.2,D.c,6)
break
default:a3=t?B.bsg:a2
a5.aZ(new A.q(a1,o,f),B.h8L,a3,0.05)
a3=t?B.bfi:D.c
a5.aO(new A.q(a1,p,f),B.h4D,a3)}}}}a5.x=0},
aU6(d,e){var w,v,u,t,s,r,q,p
d.x=$.dS=$.dS+1
d.aZ(new A.q(e,32,11),B.h2B,D.bO,0.3)
d.aO(new A.q(e,33,22.4),B.h2q,D.bo)
for(w=e-21,v=0;v<3;++v){u=v*17
d.aO(new A.q(e,15+u,21),B.h2l,D.bM)
for(t=16+u,u=27+u,s=v*2,r=0;r<7;++r){q=w+r*7
d.dR(new A.q(q,t,21.6),new A.q(q,u,21.6),2.2,B.d0z[D.o.F(r+s,6)],0.5,6)}}d.x=0
p=d.f
d.f=3
d.d=0.2
d.aO(new A.q(e,33,23.2),B.hef,B.Z7)
d.d=1
d.f=p},
cvV(d,e){var w,v,u,t,s,r,q,p,o,n=this,m=n.b.b==="gasstation"
d.f=2
d.r=!0
d.x=$.dS=$.dS+1
d.aZ(B.aVC,B.h_3,B.nV,0.15)
d.aZ(B.aVE,B.h_5,D.bN,0.3)
d.aO(B.h5J,B.hdK,B.bsn)
d.aZ(B.hbH,B.h0i,D.e8,0.3)
d.aZ(B.hbJ,B.h_H,D.b9,0.5)
d.aO(B.fYF,B.fZQ,D.av)
for(w=0;w<6;++w)d.aO(new A.q(14+w*7.5,33,47),B.h2P,B.drl[D.o.F(w,4)])
d.x=0
d.x=$.dS=$.dS+1
d.aO(B.aWf,B.aVO,D.cq)
d.aO(B.aWb,B.aVT,D.cV)
d.aO(B.h8U,B.h74,D.vM)
d.ed(B.aWc,5.5,B.afo,5,8)
d.ed(B.aWd,5.7,B.bgr,3,8)
d.x=0
n.aV9(d,-1,0)
n.aV9(d,1,m?2:1)
n.aU6(d,-104)
n.aU6(d,104)
for(v=[B.ez8,B.eOl],u=0;u<2;++u){t=v[u]
s=t.a
r=t.b
d.x=$.dS=$.dS+1
d.aO(new A.q(s,5,170),B.h1y,B.ah9)
d.aO(new A.q(s,11,160),B.h1A,B.bjz)
for(t=s-13.5,q=J.a5(r),w=0;w<4;++w)for(p=t+w*9,o=0;o<3;++o)d.ed(new A.q(p,12.5,163+o*7.5),4.2,q.h(r,D.o.F(w+o,3)),4,6)
d.x=0}d.x=$.dS=$.dS+1
d.aO(B.aVy,B.fZX,m?D.bx:D.cV)
d.aO(B.hbh,B.aW3,D.aC)
d.aO(B.fZZ,B.aW3,m?D.bo:D.aQ)
d.x=0
n.rz(d,-64,120,24,D.bG)
n.rz(d,64,120,24,D.bw)
n.rz(d,0,84,22,D.be)
e.push(new A.hf(B.fXF,m?"\u26fd NGMY Gas shop":"\ud83d\uded2 NGMY Mart",D.M,0))
e.push(B.c0H)
e.push(new A.hf(B.h3Z,m?"\ud83d\udee2 For the car":"\ud83d\udc8a Medicine and health",D.iR,0))
e.push(B.c0R)
e.push(B.c0I)
e.push(B.c0S)},
ctC(d,e){var w,v,u,t,s
d.aZ(B.fZh,B.heP,D.e_,0.1)
d.aO(B.hdw,B.ha6,B.bnZ)
d.aZ(B.fXU,B.h_c,B.nV,0.15)
for(w=0;w<4;++w){v=B.ddP[w]
u=v.a
t=v.b
for(s=0;s<2;++s){v=u+B.a52[s]
d.aO(new A.q(v,10,t),B.h0m,B.ju)
d.aO(new A.q(v,5,t),B.h0U,D.bn)}}this.rz(d,0,80,24,D.bG)
this.rz(d,90,56,20,D.cp)
e.push(B.c0D)
e.push(B.c0L)},
cz6(d,e){var w,v,u,t,s
d.aZ(B.fXO,B.h_U,D.bx,0.3)
d.aZ(B.hc3,B.h2W,D.bx,0.3)
for(w=0;w<2;++w){v=B.dm_[w]
for(u=0;u<2;++u){t=B.ct6[u]
d.dN(new A.q(v,6,t-1.5),new A.q(v,6,t+1.5),8,D.nh,10)}}for(s=0;s<5;++s)d.aO(new A.q(-142,30,110+s*18),B.fZR,D.al)
d.dN(B.fZV,B.fZW,2,D.bG,6)
this.rz(d,-60,130,24,D.aC)
this.rz(d,80,56,20,D.cp)
e.push(B.c0B)
e.push(B.c0M)},
cDc(d,e){var w,v,u,t,s,r,q,p,o,n=this
d.f=1
d.aO(B.hda,B.h79,B.dsB[D.o.F(n.f,5)])
d.f=2
d.b=19502
d.aO(B.h55,B.h43,D.M)
d.aZ(B.h2I,B.aWr,D.br,0.5)
d.aZ(B.h10,B.aWr,D.br,0.5)
d.aZ(B.h1v,B.fZH,D.br,0.5)
d.e=16
d.aZ(B.fZt,B.h4w,D.b9,0.4)
d.aO(B.h5U,B.h1N,D.av)
d.aO(B.haT,B.fZO,D.e8)
d.ed(B.h5E,2,D.bG,3,5)
d.ed(B.h2a,2,D.be,3,5)
d.b=d.e=0
n.rz(d,0,70,26,D.aQ)
for(w=0;w<3;++w){v=B.cX2[w]
u=v.a
t=v.b
d.aZ(new A.q(u,15,t),B.h1Z,B.nV,0.2)
d.aO(new A.q(u-19,7,t),B.aWi,D.je)
d.aO(new A.q(u+19,7,t),B.aWi,D.je)
d.aZ(new A.q(u,24,t-4),B.h_q,E.Fo,0.5)
d.aO(new A.q(u,9,t+18),B.h_x,D.cq)
d.aO(new A.q(u,16,t+25),B.h_s,D.cq)}n.rz(d,105,100,26,D.be)
d.d=0.3
d.f=3
d.aO(new A.q(144,14,100),B.h2b,B.Z7)
d.d=1
d.f=2
for(w=0;w<5;++w)d.aZ(new A.q(144,14,B.d42[w]),B.h7s,D.dv,0.5)
d.ed(B.h_e,10,B.EX,3,6)
d.aO(B.h_7,B.h1g,B.nV)
s=-(n.f*22)
d.f=-1
d.aO(new A.q(520,s-1,105),B.h4j,B.Xw)
d.aO(B.h3q,B.h0X,B.hW)
d.f=1
for(v=n.b.a,r=v*7,q=0;q<15;++q){p=30+D.o.F(r+q*13,90)
o=B.d9i[D.o.F(v+q,4)]
d.aO(new A.q(215+D.o.F(q,5)*80,s+p/2,-60+D.o.ao(q,5)*135),new A.q(38,p,38),o)}e.push(new A.hf(B.fXD,"\ud83c\udfe2 LEVEL "+n.f+" of "+n.gM5(),D.dF,19502))
e.push(B.c0C)
e.push(B.c0E)
n.baM(d,e)},
bER(){var w,v,u,t=C.a([],x.z),s=new A.fk(t)
s.f=-1
s.aZ(B.h6C,B.hdm,D.br,0.3)
s.f=0
s.x=$.dS=$.dS+1
s.aZ(B.hbP,B.aW2,B.afS,0.4)
s.x=0
s.x=$.dS=$.dS+1
s.aZ(B.h1x,B.aW2,B.afS,0.4)
s.x=0
s.f=1
s.aO(B.fXA,B.h3w,D.aL)
s.f=2
s.r=!0
for(w=0;w<2;++w)s.aZ(new A.q(B.aAo[w],40,38),B.h6a,D.bM,0.7)
s.aZ(B.fZu,B.haq,D.xO,0.2)
for(w=0;w<2;++w)s.aZ(new A.q(B.dlM[w],45,80),B.h_S,D.aJ,0.3)
s.aZ(B.fZr,B.h3v,D.aJ,0.3)
s.aO(B.fZ6,B.h1t,D.al)
s.aZ(B.hdJ,B.aX9,D.av,0.3)
s.aZ(B.h6U,B.aX9,D.av,0.3)
v=this.as
D.d.a7(v)
u=x.o
v.push(new A.fQ(C.a([B.h7D,B.h5S,B.h9k,B.hd_],u),0,new A.bKa(this),520,230,6,2,0,!1))
v.push(new A.fQ(C.a([B.h4u,B.h4M,B.hcO,B.h9N],u),0,new A.bKb(),720,600,30,2,0,!1))
v.push(new A.fQ(C.a([B.h7B,B.haS,B.h8z,B.h78],u),0,new A.bKc(),720,600,30,2,0,!1))
v=C.C(v,x.K)
this.ay=new A.tP(t,B.S9,B.zo,v,null,0)},
baM(d,e){var w,v,u,t,s,r,q,p,o=this,n="dead, tap to fix it"
d.b=19500
d.aZ(B.hbo,B.h2O,B.XA,0.5)
for(w=0;w<4;++w){v=o.c&&w===0?D.ce:B.Za
d.aO(new A.q(-144.2,62-w*6,45),B.h6m,v)}d.b=0
o.rz(d,-100,100,22,o.c?D.aw:D.be)
o.rz(d,90,100,22,D.cp)
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
d.aO(B.h28,B.h09,o.c?D.aw:D.be)
d.b=19501
d.aO(B.h4m,B.h50,t?D.be:D.aw)
d.aO(B.hc6,B.h5o,s?D.be:D.aw)
d.aO(B.h6o,B.h8q,r?D.be:D.aw)
d.d=1
d.aZ(B.hb3,B.h5B,B.Mx,0.25)
for(q=0;q<2;++q)for(u=26+F.hy[q]*3.4,p=0;p<2;++p)d.aO(new A.q(95+B.Rb[p],u,2.6),B.h7g,B.agW)
d.aZ(B.hdc,B.h97,B.Mx,0.25)
d.aO(new A.q(-60,s?52:48,2.8),B.h0W,B.aiI)
d.b=0
d.f=2
if(o.c)v=v.length===0?"\u26a1 Breaker panel: tap to switch the power on":"\u26a1 Breaker panel: still to fix: "+D.d.aH(v,", ")
else v="\u26a1 Breaker panel: all fine"
e.push(new A.hf(B.hbn,v,o.c?D.bx:D.ed,19500))
v=new A.bKd(o)
u=t?"\ud83d\udd0c Outlets: fixed":"\ud83d\udd0c Outlet: "+C.w(v.$2(D.a33,n))
e.push(new A.hf(B.h4n,u,t?D.ed:D.bx,19501))
u=s?"\ud83d\udca1 Switch: fixed":"\ud83d\udca1 Switch: "+C.w(v.$2(B.cqX,"no power, tap to fix it"))
e.push(new A.hf(B.hc7,u,s?D.ed:D.bx,19501))
v=r?"\ud83d\udca1 Ceiling light: fixed":"\ud83d\udca1 Ceiling light: "+C.w(v.$2(B.cjs,n))
e.push(new A.hf(B.fXE,v,r?D.ed:D.bx,19501))
if(o.c)e.push(B.c0A)},
cO_(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=x.z,i=C.a([],j),h=new A.fk(i),g=k.a,f=g==="tower"
if(f||g==="cabin"){w=C.a([],j)
v=new A.fk(w)
if(f){v.e=16
for(u=0;u<2;++u)v.aZ(new A.q(F.hy[u]*(24+21*k.y),42,6.6),B.hcN,D.aP,0.7)}else{v.e=16
for(u=0;u<2;++u)v.aZ(new A.q(F.hy[u]*(9+18*k.y),40,78.6),B.h_R,D.aL,0.7)}D.d.v(i,w)}switch(g){case"shop":A.wO(h,B.epC,d,B.Jd,!1,0,D.b6)
break
case"hospital":A.wO(h,B.epG,d,B.Tf,!1,0,D.bP)
t=D.k.F(d*12,220)
g=t<110
f=g?t:220-t
g=g?0:3.141592653589793
A.wO(h,A.atM(!1,0,-1,"",!1,0,"",-1,t/12,!1,!1,!1,0,!1,!0,6,g,40+f),d,B.Jd,!1,0,D.bO)
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
A.wO(new A.fk(f),B.epF,d,p,!1,0,p.c)
D.d.v(i,A.ny(f,-1.5707963267948966,-1.5707963267948966,new A.q(46,27,48+r*50)))}++r}}break
case"school":A.wO(h,B.epH,d,B.Tf,!1,0,D.bk)
for(u=0;u<3;++u){g=B.d7D[u]
A.wO(h,new A.y4(0,g.a,g.b,3.141592653589793,!1,!1,!1,!1,!1,0,!1,!1,"","",-1,0,-1,0),d,B.Jd,!1,0,g.c)}break
case"firestation":A.wO(h,B.epD,d,B.Jd,!1,0,D.bx)
A.wO(h,B.epE,d,B.Tf,!1,0,D.aC)
break
default:break}g=k.at
g===$&&C.c()
f=g.f
w=g.r
o=g.w
n=g.x
m=g.y
l=g.z&&n
A.wO(h,A.atM(!1,0,-1,"",!1,g.Q,"",-1,m,!1,!1,!1,0,l,n,f,o,w),d,e,!0,0,null)
if(k.cx!=null){j=C.a([],j)
new A.fk(j).aO(new A.q(g.f+Math.sin(g.w)*9,48+g.Q,g.r+Math.cos(g.w)*9),B.aVU,B.ju)
D.d.v(i,j)}return i},
gdc(d){return this.e}}
A.Ft.prototype={}
A.P5.prototype={
gUl(){var w,v=this
if(!v.f)return"has died"
if(v.r>=0)return"in hospital"
if(v.c<30)return"in danger"
if(v.e)return"sick"
w=v.b
if(w>80)return"starving"
if(w>55)return"hungry"
if(v.d<40)return"unhappy at home"
return"fine"},
gaDF(d){var w,v=this.gUl()
A:{if("has died"===v){w="\ud83d\udd6f"
break A}if("in hospital"===v){w="\ud83c\udfe5"
break A}if("in danger"===v){w="\ud83c\udd98"
break A}if("sick"===v){w="\ud83e\udd12"
break A}if("starving"===v||"hungry"===v){w="\ud83c\udf7d"
break A}if("unhappy at home"===v){w="\ud83d\ude1f"
break A}w="\ud83d\ude42"
break A}return w}}
A.Ia.prototype={}
A.M5.prototype={}
A.aU2.prototype={
bza(d,e){var w,v=C.a([],x.fP)
for(w=0;w<7;++w)v.push(new A.P5(B.CK[w]))
this.c=v
v[1].b=55
v[4].b=40},
gC6(){var w,v,u,t=C.a([],x.fP),s=this.c
s===$&&C.c()
w=s.length
v=0
for(;v<s.length;s.length===w||(0,C.M)(s),++v){u=s[v]
if(u.f)t.push(u)}return t},
gcMV(){var w=this.c
w===$&&C.c()
return new C.Z(w,new A.bKY(),C.T(w).k("Z<1>")).gL(0)},
PQ(d){var w=this.f
D.d.c3(w,0,d)
if(w.length>12)w.pop()},
aDn(a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this
a1.as+=a3
for(w=a1.gC6(),v=w.length,u=-0.6*a3,t=0.8*a3,s=0.2*a3,r=a1.b,q=0.012*a3,p=a1.f,o=0.15*a3,n=0;n<w.length;w.length===v||(0,C.M)(w),++n){m=w[n]
l=a4.d
l===$&&C.c()
k=m.a
j=l[k.c]
i=j.gkN()
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
D.d.c3(p,0,k.b+" has fallen sick. Give medicine, or send them to the hospital.")
if(p.length>12)p.pop()}e=m.b>=95?0.9:0
if(m.e)e+=0.55
if(m.d<15)e+=0.4
if(e>0)l=m.c=m.c-e*a3
else{l=m.c
if(l<100){l=Math.min(100,l+o)
m.c=l}}if(l<=0)a1.aSa(m)}}for(w=a1.e,v=1.2*a3,u=2.2*a3,d=0;d<w.length;++d){a0=w[d]
t=a0.a
if(t<0)continue
s=a1.c
s===$&&C.c()
m=s[t]
if(!m.f){a0.a=-1
continue}t=a0.b=Math.max(0,a0.b-a3)
if(t>30)a0.c=Math.min(100,a0.c+u)
else if(t<=0)if((m.c-=v)<=0){a1.aSa(m)
a0.a=-1
continue}if(a0.c>=100){m.e=!1
m.r=-1
m.c=Math.max(m.c,80)
m.b=Math.min(m.b,30)
a0.a=-1
a0.c=0
a0.b=100
a1.r+=8;++a1.z
D.d.c3(p,0,m.a.b+" is better and went home. +8 points.")
if(p.length>12)p.pop()}}for(w=a1.d,v=w.length,n=0;n<v;++n)w[n].f+=a3
a1.ND(a4)
if((a1.at-=a3)<=0){a1.at=60+r.ah()*50
a1.cIj(a4)}},
aSa(d){var w
d.f=!1
d.c=0
w=d.r
if(w>=0)this.e[w].a=-1
d.r=-1
D.d.bs(this.d,new A.bKV(d))
this.PQ(d.a.b+" has died. Keep up with everybody's needs: food, medicine and a home that works.")},
aVY(d,e){return D.d.b2(this.d,new A.bKW(d,e))},
ND(d){var w,v,u,t,s,r,q,p,o,n=this,m=n.d,l=C.C(m,x.fC),k=l.length,j=n.f,i=0
for(;i<l.length;l.length===k||(0,C.M)(l),++i){w=l[i]
v=B.CK[w.b]
u=w.c==="power"
if(u){t=d.d
t===$&&C.c()
s=t[v.c].gkN()}else{t=v.d
r=d.d
if(t>=0){r===$&&C.c()
t=r[t].gjQ()
s=t}else{r===$&&C.c()
t=r[v.c].gjQ()
s=t}}if(s){D.d.W(m,w)
t=w.e
n.r=n.r+t;++n.y
u=u?"power is back":"leak is fixed"
D.d.c3(j,0,v.b+"'s "+u+". +"+t+" points. Thank you!")
if(j.length>12)j.pop()}}for(l=n.gC6(),k=l.length,u=n.b,i=0;i<l.length;l.length===k||(0,C.M)(l),++i){q=l[i]
if(m.length>=4)break
t=d.d
t===$&&C.c()
r=q.a
p=t[r.c]
if(!p.gkN()&&!n.aVY(r.a,"power")){m.push(new A.Ia(n.Q++,r.a,"power",B.d0m[u.aq(3)],15))
D.d.c3(j,0,r.b+" is calling for help: no power.")
if(j.length>12)j.pop()}t=r.d
o=t>=0?d.d[t]:p
t=o.c
if((t==="bathroom"||t==="kitchen")&&!o.gjQ()&&!n.aVY(r.a,"leak")&&m.length<4){m.push(new A.Ia(n.Q++,r.a,"leak",B.d97[u.aq(3)],15))
D.d.c3(j,0,r.b+" is calling for help: a leak.")
if(j.length>12)j.pop()}}},
cIj(d){var w,v,u,t,s,r,q=this
if(q.d.length>=3||q.gC6().length===0)return
w=q.b
v=q.gC6()[w.aq(q.gC6().length)]
u=d.d
u===$&&C.c()
t=v.a
s=u[t.c]
t=t.d
r=t>=0?u[t]:s
u=r.c
if((u==="bathroom"||u==="kitchen")&&r.gjQ()&&w.hj()){r.ch=!0
r.fr=null}else if(s.gkN()){s.ay=!0
s.CW=null
s.fy=!1
s.fx.a7(0)}else return
q.ND(d)},
beN(d){var w,v,u,t=this
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
t.PQ(u)
return u},
aKL(d){var w,v,u=this
if(!d.f)return d.a.b+" has died."
if(!d.e)return d.a.b+" is not sick."
w=u.x
if(w<=0)return y.D
u.x=w-1
d.e=!1
d.c=Math.min(100,d.c+20)
u.r+=3
v=d.a.b+" took the medicine and is better. +3 points."
u.PQ(v)
return v},
aDm(d){var w,v,u,t
if(!d.f)return d.a.b+" has died."
if(d.r>=0)return d.a.b+" is already in hospital."
if(!d.e&&d.c>60)return d.a.b+" is not ill enough for the hospital."
w=this.e
v=D.d.bg(w,new A.bKX())
if(v<0)return"The hospital is full. Treat the patients first, they go home when they are better."
w=w[v]
u=d.a
w.a=u.a
w.b=100
w.c=0
d.r=v
t=u.b+" is in bed "+(v+1)+" of the hospital. Keep up with their care."
this.PQ(t)
return t},
bk0(d){var w,v,u=this,t=u.e[d],s=t.a
if(s<0)return"This bed is empty."
if(t.b>70)return"The patient is cared for already."
w=u.x
if(w<=0)return y.D
u.x=w-1
t.b=100;++u.r
w=u.c
w===$&&C.c()
v=w[s].a.b+" was treated. +1 point."
u.PQ(v)
return v},
aDS(d){var w,v=this
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
cRZ(d){return d.r<0},
beY(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=C.a([],x.e3),e=d.d
e===$&&C.c()
w=e[a0]
if(w.c!=="outside")return f
v=new A.bL_(new A.bL1(w))
for(e=D.d.gaf(this.gC6()),u=new C.f5(e,this.gcRY()),t=this.d,s=0;u.C();){r=e.gT(0)
q=D.d.b2(t,new A.bKZ(r))
p=v.$2(r,s).a
o=p[0]
n=p[1]
m=p[2]
l=p[3]
k=p[4]
p=r.a
j=q?0.4:m
i=q?"\ud83d\udcde ":""
h=r.gaDF(0)
r.gUl()
r=q?"":l
g=q?"":k
f.push(new A.aa6(p.a,a0,o,n,j,p.e,i+p.b+" "+h,q,0,r,g));++s}return f},
cYS(a2){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.r,j=l.w,i=l.x,h=l.y,g=l.z,f=l.as,e=l.Q,d=x.ez,a0=C.a([],d),a1=l.c
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
for(r=a2.gqT(),q=r.length,t=0;t<r.length;r.length===q||(0,C.M)(r),++t){n=r[t]
u.n(0,""+n.a,n.gkN())}w=C.U(v,w)
for(r=D.d.gaf(a2.gqT()),q=new C.f5(r,new A.bL2());q.C();){m=r.gT(0)
w.n(0,""+m.a,m.gjQ())}return C.G(["v",1,"seed",l.a,"points",k,"food",j,"medicine",i,"served",h,"saved",g,"clock",f,"nextCall",e,"res",a0,"beds",a1,"calls",d,"wired",u,"plumbed",w],v,x.A)},
CU(d,e){return this.bo8(0,e)},
bo8(d,e){var w=0,v=C.j(x.H),u=1,t=[],s=this,r,q,p,o
var $async$CU=C.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return C.b(C.az(),$async$CU)
case 6:r=g
q=C.dR(s.cYS(e),x.N,x.A)
J.aI(q,"at",Date.now())
w=7
return C.b(r.au("String","ngmy_community_v1",D.X.ap(q,null)),$async$CU)
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
return C.i($async$CU,v)}}
A.apK.prototype={
R(){return new A.bkM()}}
A.bkM.prototype={
gbjK(){var w=this.r
return w===$?this.r=this.a.c:w},
Z(){this.a2()
this.ZY()},
ZY(){return this.c2g()},
c2g(){var w=0,v=C.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$ZY=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:m={}
w=3
return C.b(A.aU4(),$async$ZY)
case 3:l=e
if(t.c==null){w=1
break}m.a=null
if(l!=null){s=J.a5(l)
r=C.aK(s.h(l,"seed"))
q=r==null?null:D.k.N(r)
if(q==null)q=1
r=$.Ef
if((r==null?null:r.b)===q){r.toString
t.e=r}else{r=A.aWw(q)
t.e=$.Ef=r
A.hd_(r,l)}m.a=A.h_9(l)
r=Date.now()
s=C.aK(s.h(l,"at"))
s=s==null?null:D.k.N(s)
p=D.k.E((r-(s==null?Date.now():s))/1000*0.15,0,90)
while(p>0){o=p>5?5:p
s=m.a
r=t.e
r===$&&C.c()
s.aDn(0,o,r)
p-=o}}else{s=$.Ef
if(s==null)s=$.Ef=A.aWw(D.o.F(Date.now(),1e5))
t.e=s
s=s.b
n=A.h_8(s,s)
m.a=n
n.ND(t.e)}$.ak_=m.a
t.m(new A.dSp(m,t))
t.f=C.df(D.fA,new A.dSq(t))
case 1:return C.h(u,v)}})
return C.i($async$ZY,v)},
c7S(){var w,v,u,t=this,s=t.d
if(s==null||t.c==null)return
w=s.f
v=w.length===0?"":D.d.gI(w)
u=t.e
u===$&&C.c()
s.aDn(0,1,u)
if(w.length!==0&&D.d.gI(w)!==v)t.J3(D.d.gI(w))
if(++t.y%8===0)s.CU(0,t.e)
t.m(new A.dSC())},
q(){var w,v=this,u=v.f
if(u!=null)u.a4(0)
u=v.x
if(u!=null)u.a4(0)
u=v.d
if(u!=null){w=v.e
w===$&&C.c()
u.CU(0,w)}v.a1()},
J3(d){var w=this,v=w.x
if(v!=null)v.a4(0)
w.m(new A.dSw(w,d))
w.x=C.cI(D.tZ,new A.dSx(w))},
abR(d){return this.bTP(d)},
bTP(d){var w=0,v=C.j(x.H),u,t=this,s,r,q
var $async$abR=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:q=B.CK[d.b]
if(d.c==="power")s=q.c
else{r=q.d
s=r>=0?r:q.c}r=t.e
r===$&&C.c()
r.e=s
r=t.c
r.toString
w=3
return C.b(C.a4(r,!1).cd(C.dZ(new A.dSl(),!1,null,x.H)),$async$abR)
case 3:if(t.c==null){w=1
break}r=t.d
if(r!=null)r.ND(t.e)
r=t.d
if(r!=null)r.CU(0,t.e)
t.m(new A.dSm())
case 1:return C.h(u,v)}})
return C.i($async$abR,v)},
ak5(d){return this.cFL(d)},
cFL(d){var w=0,v=C.j(x.H),u,t=this,s
var $async$ak5=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:s=t.e
s===$&&C.c()
s.e=d.a.c
s=t.c
s.toString
w=3
return C.b(C.a4(s,!1).cd(C.dZ(new A.dSF(),!1,null,x.H)),$async$ak5)
case 3:if(t.c==null){w=1
break}s=t.d
if(s!=null)s.ND(t.e)
t.m(new A.dSG())
case 1:return C.h(u,v)}})
return C.i($async$ak5,v)},
ZZ(d,e){var w=null,v=e.j(0.18),u=C.m(14),t=C.J(e.j(0.7),D.r,1)
return C.p(w,C.d(d,w,w,w,w,w,w,C.l(w,w,e,w,w,w,w,w,w,w,w,12.5,w,w,D.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),D.f,w,w,new C.o(v,w,t,u,w,w,D.n),w,w,w,w,M.ajP,w,w,w)},
Wy(d,e,f){var w=null
return new C.D(D.no,C.B(C.a([new C.a6(62,w,C.d(d,w,w,w,w,w,w,A1.a9S,w,w,w),w),C.E(C.bx(C.m(6),C.kx(D.bz,w,w,8,w,D.k.E(e/100,0,1),new C.m6(f,x.dw)),D.ap),1)],x.p),D.m,w,D.e,D.i,0,w,w),w)},
PR(d,e,f){var w=null,v=e==null,u=v?D.dq:f.j(0.22),t=C.m(12),s=C.J(v?D.aZ:f,D.r,1)
return C.aB(w,C.p(w,C.d(d,w,w,w,w,w,w,C.l(w,w,v?D.bY:f,w,w,w,w,w,w,w,w,12.5,w,w,D.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),D.f,w,w,new C.o(u,w,s,t,w,w,D.n),w,w,w,w,D.nq,w,w,w),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,e,w,w,w,w,w,w,!1,D.a4)},
ael(d,e){return this.PR(d,e,D.aC)},
PS(d,e){var w=null,v=C.a([e.j(0.1),B.Fu],x.O),u=C.m(18)
return C.p(w,d,D.f,w,w,new C.o(w,w,C.J(e.j(0.5),D.r,1),u,w,new C.a9(D.b4,D.b7,D.x,v,w,w),D.n),w,w,w,D.d2,D.bf,w,w,w)},
c7O(d){return this.PS(d,D.aZ)},
aZU(d,e,f){var w,v=null,u=this.gbjK()===d,t=u?D.aC.j(0.22):D.c.j(0.06),s=C.m(14),r=u?D.aC:D.aZ
r=C.J(r,D.r,u?2:1)
w=f>0?e+" ("+f+")":e
return C.E(C.aB(v,C.p(v,C.at(C.d(w,v,v,v,v,v,v,C.l(v,v,u?D.aC:D.ae,v,v,v,v,v,v,v,v,12.5,v,v,D.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,v),D.f,v,v,new C.o(t,v,r,s,v,v,D.n),v,v,v,D.jA,D.jQ,v,v,v),D.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new A.dSE(this,d),v,v,v,v,v,v,!1,D.a4),1)},
axA(d,e){return this.aZU(d,e,0)},
bGw(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=d.d
if(l.length===0)return new C.D(D.em,C.x(B.did,D.m,m,D.e,D.i,0,D.p),m)
w=x.p
v=C.a([],w)
for(u=l.length,t=0;t<l.length;l.length===u||(0,C.M)(l),++t){s=l[t]
r=s.c==="power"
q=r?D.bG:D.cp
p=B.CK[s.b]
o=r?"\u26a1 Power":"\ud83d\udeb0 Leak"
r=r?D.bG:D.cp
v.push(n.PS(C.x(C.a([new C.ce(D.aM,D.e,D.i,D.m,m,D.p,m,0,C.a([new A.acP(p.e,44,m),D.at,new C.bz(1,D.bb,new C.y(p.b,m,D.hE,m,m,m,m,m,m,m,m,m),m),n.ZZ(o+"  +"+s.e,r)],w),m),D.O,new C.y('"'+s.d+'"',m,B.fno,m,m,m,m,m,m,m,m,m),D.W,new C.bO(D.a8,m,m,n.ael("\ud83d\udd27 Go and fix it",new A.dSk(n,s)),m)],w),D.E,m,D.e,D.i,0,D.p),q))}return C.x(v,D.m,m,D.e,D.i,0,D.p)},
c7Q(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=x.p,k=C.a([],l),j=d.c
j===$&&C.c()
w=j.length
v=0
for(;v<j.length;j.length===w||(0,C.M)(j),++v){u=j[v]
t=u.f
if(!t)s=D.aZ
else s=u.gUl()==="fine"?D.bj:D.ct
t=t?1:0.5
r=u.a
q=u.gaDF(0)
p=u.gUl()
o=u.gUl()==="fine"?D.et:D.eP
r=C.a([new C.ce(D.aM,D.e,D.i,D.m,m,D.p,m,0,C.a([new A.acP(r.e,50,m),D.at,new C.bz(1,D.bb,C.x(C.a([new C.y(r.b+"  "+q,m,D.hE,m,m,m,m,m,m,m,m,m),new C.y(r.f,m,B.aSC,m,m,m,m,m,m,m,m,m),new C.y("Now: "+p,m,new C.F(!0,o,m,m,m,m,12.5,D.H,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m,m,m,m,m,m,m)],l),D.E,m,D.e,D.i,0,D.p),m)],l),m),D.O,n.Wy("Food",100-u.b,D.cS),n.Wy("Health",u.c,D.bj),n.Wy("Home",u.d,D.cp)],l)
if(u.f){q=n.ael("\ud83c\udf5e Feed",new A.dSr(n,d,u))
p=n.PR("\ud83d\udc8a Medicine",u.e?new A.dSs(n,d,u):m,D.bw)
D.d.v(r,C.a([D.am,new C.CF(D.bC,8,8,D.bq,C.a([q,p,n.PR("\ud83c\udfe5 Hospital",u.r>=0?m:new A.dSt(n,d,u),D.ct),n.PR("\ud83c\udfe0 Visit",new A.dSu(n,u),D.b3)],l),m)],l))}k.push(n.PS(new C.kB(t,C.x(r,D.E,m,D.e,D.i,0,D.p),m),s))}return C.x(k,D.m,m,D.e,D.i,0,D.p)},
c7P(d){var w,v,u,t,s=null,r=x.p,q=C.a([B.eli],r)
for(w=d.e,v=0;v<w.length;++v){u=w[v].a<0
t=u?D.aZ:D.ct
q.push(this.PS(u?new C.ce(D.aM,D.e,D.i,D.m,s,D.p,s,0,C.a([B.fN9,D.at,new C.y("Bed "+(v+1)+": empty",s,B.fgO,s,s,s,s,s,s,s,s,s)],r),s):new C.fe(new A.dSo(this,d,v),s),t))}return C.x(q,D.m,s,D.e,D.i,0,D.p)},
c7R(d){var w=this,v=null,u=x.p,t=w.PS(C.B(C.a([B.fyq,D.at,B.bET,w.ael("Buy",new A.dSz(w,d))],u),D.m,v,D.e,D.i,0,v,v),D.cS),s=w.PS(C.B(C.a([B.fUk,D.at,B.bF8,w.PR("Buy",new A.dSA(w,d),D.bw)],u),D.m,v,D.e,D.i,0,v,v),D.bw),r=C.a([B.fOb,D.am,C.d("Calls answered: "+d.y+"\nPatients sent home better: "+d.z+"\nPeople lost: "+d.gcMV(),v,v,v,v,v,v,B.aTD,v,v,v)],u)
if(d.gC6().length===0)D.d.v(r,C.a([D.W,w.ael("Start a new community",new A.dSB(w))],u))
return C.x(C.a([t,s,w.c7O(C.x(r,D.E,v,D.e,D.i,0,D.p))],u),D.m,v,D.e,D.i,0,D.p)},
B(d){var w,v,u,t,s,r,q=this,p=null,o=q.d
if(o==null)w=D.lZ
else{w=x.p
v=C.B(C.a([C.aF(p,p,p,p,S.ny,p,p,p,new A.dSH(d),p,p,p,p,p,p),B.bEz,q.ZZ("\u2b50 "+o.r,D.aC)],w),D.m,p,D.e,D.i,0,p,p)
u=q.ZZ("\ud83c\udf5e "+o.w,D.cS)
t=q.ZZ("\ud83d\udc8a "+o.x,D.bw)
s=o.e
s=C.B(C.a([u,D.ac,t,D.ac,q.ZZ("\ud83c\udfe5 "+new C.Z(s,new A.dSI(),C.T(s).k("Z<1>")).gL(0)+"/"+s.length,D.ct)],w),D.m,p,D.b8,D.i,0,p,p)
t=C.B(C.a([q.aZU("calls","\ud83d\udcde Calls",o.d.length),q.axA("people","\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc67 People"),q.axA("hospital","\ud83c\udfe5 Hospital"),q.axA("shop","\ud83d\uded2 Shop")],w),D.m,p,D.e,D.i,0,p,p)
r=q.gbjK()
A:{if("people"===r){u=q.c7Q(o)
break A}if("hospital"===r){u=q.c7P(o)
break A}if("shop"===r){u=q.c7R(o)
break A}u=q.bGw(o)
break A}w=C.a([new C.D(B.bCY,v,p),new C.D(D.BK,s,p),new C.D(B.bDU,t,p),D.O,C.E(C.cf(C.a([u],w),p,D.G4,p,p,D.ag,!1),1)],w)
if(q.w!=null){v=D.e_.j(0.96)
u=C.m(14)
t=C.J(D.bj,D.r,1)
s=q.w
s.toString
w.push(C.p(p,C.d(s,p,p,p,p,p,p,B.fjs,p,p,p),D.f,p,p,new C.o(v,p,t,u,p,p,D.n),p,p,p,G.ajS,D.bf,p,p,1/0))}w=C.x(w,D.m,p,D.e,D.i,0,D.p)}return C.c7(p,D.c0,C.bl(!0,w,!0,!1,D.af,!0,!0),p,!1,!1,p,p)}}
A.acP.prototype={
B(d){var w=null,v=this.d
return new C.a6(v,v,C.b4(w,w,w,new A.bfF(this.c,w),D.ax),w)},
gY(d){return this.d}}
A.bfF.prototype={
a3(d,e){var w,v,u,t,s=e.a,r=s/2,q=$.S(),p=C.I()
p.r=D.dq.gp(0)
d.ad(new C.t(r,r),r,p)
p=d.a
J.bm(p.save())
q=new C.aG(q.r,D.ah,null,null,C.a([],x.g))
r=0+s
q.D(new C.jF(new C.a3(0,0,r,r)))
d.mF(0,q)
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
t.r=D.nh.gp(0)
d.ad(new C.t(s*0.42,r),q,t)
t=C.I()
t.r=D.nh.gp(0)
d.ad(new C.t(s*0.58,r),q,t)
t=s*0.4
q=C.I()
q.b=D.ab
q.c=1.4
q.r=D.ek.gp(0)
d.e3(new C.a3(t,w,t+s*0.2,w+s*0.12),0.2,2.7,!1,q)
p.restore()},
aw(d){return!1}}
A.fM.prototype={}
A.CE.prototype={}
A.jA.prototype={}
A.Tb.prototype={}
A.b9p.prototype={
gjO(){return this.a==="ok"}}
A.mb.prototype={}
A.fn.prototype={}
A.Eb.prototype={}
A.pR.prototype={}
A.abO.prototype={}
A.om.prototype={}
A.aWp.prototype={
gwE(){var w=this.c
return w.c>=2&&A.Lf(A.t2(this.a),w).a==="ok"},
gdc(d){return this.c}}
A.a5q.prototype={
gz6(){var w,v,u=this.p4,t=u==="ptrap"
if(t||u==="faucet"){w=this.RG
if(w==null)return!1
if(t)if(w.a.a===3){u=w.b
u=new C.bc(u,C.a7(u).k("bc<2>")).d_(0,new A.bUh())&&w.c}else u=!1
else u=A.fAC(w)&&w.f
return u}v=this.R8
return v!=null&&v.c>=2&&A.Lf(A.t2(u),v).a==="ok"},
Io(d){var w
if(this.c!=="outside"){w=this.CW
w=w!=null?w.th(d):!this.ay}else w=!0
return w},
ga66(){var w=this.p4
if(w.length===0)w=this.Io(2)
else w=w!=="fan"||this.gz6()
return w},
gMf(){var w=this.p4
if(w.length===0)w=this.Io(3)
else w=!D.d.t(B.jW,w)||this.gz6()
return w},
ganw(){var w=this.p4
if(w.length===0)w=this.Io(0)
else w=!D.d.t(B.lJ,w)||this.gz6()
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
ghq(d){var w,v=180
if(!this.ok){w=this.c
A:{if("bathroom"===w){v=100
break A}if("kitchen"===w){v=110
break A}if("living"===w){v=120
break A}if("hall"===w)break A
if("outside"===w){v=2100
break A}v=112
break A}}return v},
gkN(){var w,v=this
if(v.c!=="outside"){w=v.p4
if(w.length!==0)w=w==="ptrap"||w==="faucet"||v.gz6()
else{w=v.CW
w=w==null?null:w.gbky()
if(w==null)w=!v.ay}}else w=!0
return w},
gjQ(){var w=this,v=w.c
if(v==="bathroom"||v==="kitchen"){v=w.p4
if(v.length!==0)v=!(v==="ptrap"||v==="faucet")||w.gz6()
else{v=w.fr
v=v==null?null:v.gwE()
if(v==null)v=!w.ch}}else v=!0
return v},
BU(d){var w,v,u,t
for(w=this.x,v=w.length,u=0;u<v;++u){t=w[u]
if(t.a===d)return t}return null},
dz(d,e,f,g){var w=this,v=w.y++,u=f==null?0:f,t=new A.mb(v,e,u,g==null?w.ghq(0)*0.6:g)
w.x.push(t)
w.a41(0,t)
return t},
M(d,e){return this.dz(0,e,null,null)},
cIW(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=d.k1
if(a0!=null){w=d.c
w=w==="outside"||w==="hall"}else w=!0
if(w)return
v=A.hae(d,A.aPR(a0),0)
w=v.c
u=v.a/2
t=w-u-6
s=w+u+6
for(w=D.d.gaf(d.x),u=new C.f5(w,new A.bUg());u.C();){r=w.gT(0)
q=B.hz.h(0,r.b)
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
if(f<=d.ghq(0)-m-1)r.d=f
else if(e>=m+1)r.d=e
else r.c=q?h+52+l+1:h-52-l-1}}},
a41(d,e){var w,v,u,t,s,r=this,q=e.b,p=B.hz.h(0,q)
p.toString
w=(e.e&1)===1
v=w?p.d:p.c
u=w?p.c:p.d
p=v/2
e.c=D.k.E(e.c,-r.gex(0)/2+p+1,r.gex(0)/2-p-1)
p=e.d
t=u/2
s=r.c==="outside"?-760+t:t+1
e.d=D.k.E(p,s,r.ghq(0)-t-1)
if(D.d.t(B.RH,q)){e.c=D.k.V(e.c/40)*40
e.d=D.k.V(e.d/40)*40}}}
A.aWv.prototype={
bzn(d){var w,v,u
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
u.p3=Math.max(0,D.d.bg(E.kl,new A.bUS()))
this.d=C.a([u],x.D)},
cST(){var w,v,u,t,s,r
for(w=this.gqT(),v=w.length,u=0;u<w.length;w.length===v||(0,C.M)(w),++u){t=w[u]
t.fr=t.CW=null
s=t.ay=!0
r=t.c
t.ch=r!=="bathroom"?r==="kitchen":s
t.fy=!1
t.fx.a7(0)
D.d.a7(t.id)}},
c7T(){var w,v,u,t,s,r,q,p=this,o="back",n="bedroom",m="bathroom",l=new C.e9()
l.d4(p.b)
w=new A.bUT()
v=x.dY
u=C.a([B.bIs,B.bIp,B.bIq],v)
for(t=0;t<7;++t){s=B.cjp[t]
u.push(new A.om(!0,o,-150+s.a*50,s.b))}r=p.d=C.a([A.zk(0,"Bedroom 1",n,0,0,2,2,C.a([w.$1(-48)],v)),A.zk(1,"Bedroom 2",n,2,0,2,2,C.a([w.$1(-48)],v)),A.zk(2,"Bathroom 1",m,4,0,1,2,C.a([B.a0K],v)),A.zk(3,"Bedroom 3",n,5,0,2,2,C.a([w.$1(-48)],v)),A.zk(4,"Bathroom 2",m,7,0,2,2,C.a([B.a0K],v)),A.zk(5,"Hall","hall",0,2,9,1,u),A.zk(6,"Bedroom 4",n,0,3,2,2,C.a([w.$1(-48)],v)),A.zk(7,"Bedroom 5",n,2,3,2,2,C.a([w.$1(-48)],v)),A.zk(8,"Bathroom 3",m,4,3,1,2,C.a([B.a0K],v)),A.zk(9,"Kitchen","kitchen",5,3,2,2,C.a([new A.om(!1,o,-26,5),B.bIu],v)),A.zk(10,"Living room","living",7,3,2,2,C.a([new A.om(!1,o,-70,5),B.bIt,B.bIr],v)),A.zk(11,"Garden","outside",0,5,9,1,C.a([B.bIo],v))],x.D)
for(v=r.length,t=0;t<r.length;r.length===v||(0,C.M)(r),++t){q=r[t]
u=q.c
if(u==="outside"){p.aU8(q)
continue}q.go=u==="bedroom"?"fan":"light"
q.ay=l.ah()<0.6
q.ch=(u==="bathroom"||u==="kitchen")&&l.ah()<0.7
D.d.hx(q.z,0,3,l.aq(8))
A:{if("bathroom"===u){u=5+l.aq(2)
break A}if("kitchen"===u){u=5+l.aq(2)
break A}if("bedroom"===u){u=2+l.aq(3)
break A}if("living"===u){u=l.aq(2)
break A}u=l.aq(2)
break A}q.Q=u
q.as=l.aq(4)
p.aU8(q)}v=p.d
u=v[5]
u.k2=u.k1="tv100"
u.p2=!0
v[3].ay=!0
v[2].ch=!0},
aU8(b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4="plant",a5="roadcross",a6="road",a7="roundabout",a8="house2",a9="bighouse",b0="adboard",b1="flowers",b2=b3.gex(0)/2
switch(b3.c){case"bedroom":b3.dz(0,"rug",0,b3.ghq(0)*0.55)
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
b3.dz(0,a4,b3.gex(0)/2-12,b3.ghq(0)-12)
break
case"outside":for(w=-780;w<=780;w+=40){v=Math.abs(w)<1
b3.dz(0,v?a5:a6,w,420)
b3.dz(0,v?a5:a6,w,860)}for(u=200;u<=820;u+=40){if(Math.abs(u-420)<1||Math.abs(u-860)<1)continue
b3.dz(0,a6,0,u).e=1}for(t=0;t<2;++t){s=B.dlY[t]
for(u=460;u<859;u+=40)b3.dz(0,a6,s,u).e=1}for(t=0;t<3;++t){s=B.dlX[t]
b3.dz(0,a7,s,420)
b3.dz(0,a7,s,860)}r=new A.bUU(b3)
b3.dz(0,"shop",-250,225)
b3.dz(0,"hospital",250,215)
b3.dz(0,"firestation",-480,225)
b3.dz(0,"school",520,210)
for(t=0;t<14;++t){v=B.d9Y[t]
w=v.a
u=v.b
if(r.$4(w,u,60,40))b3.dz(0,"billboard",w,u)}for(t=0;t<4;++t){v=B.dq9[t]
w=v.a
u=v.b
if(r.$2(w,u))b3.dz(0,a8,w,u)}for(t=0;t<3;++t){v=B.cY9[t]
u=v.a
q=v.b
p=v.c
for(v=u<900,w=-800;w<=800;w+=q){o=Math.abs(w)
if(o<100)continue
if(v&&o>400)continue
if(r.$2(w,u))b3.dz(0,p&&D.o.F(D.k.eb(w,q),2)===0?a9:a8,w,u)}}for(t=0;t<2;++t){v=B.cwK[t]
w=v.a
u=v.b
if(r.$2(w,u))b3.dz(0,a9,w,u)}for(w=-1220;w<=1220;w+=40){if(Math.abs(w)>780){b3.dz(0,a6,w,420)
b3.dz(0,a6,w,860)}b3.dz(0,a6,w,1460)
b3.dz(0,a6,w,1700)}for(u=900;u<1459;u+=40)b3.dz(0,a6,0,u).e=1
v=C.a([],x._)
for(o=b3.x,n=o.length,t=0;t<o.length;o.length===n||(0,C.M)(o),++t){m=o[t]
l=m.b
if(D.d.t(B.RH,l)||l==="roundabout")v.push(m)}k=new A.bUW(v,b3)
j=new A.bUX(b3,new A.bV_(b3))
j.$3("gasstation",6,B.d4H)
j.$3("dmv",1,B.dsT)
j.$3("ubstation",3,B.cWi)
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
e=B.hz.h(0,f)
if(k.$4(w,u,e.c,e.d)){b3.dz(0,f,w,u);++i}}++g}++h}for(d=0,t=0;t<11;++t,d=a0){v=B.cZ3[t]
a0=d+1
b3.dz(0,v.b,v.a,1560).f=D.o.F(d,6)}for(t=0;t<11;++t,d=a0){v=B.do0[t]
a0=d+1
b3.dz(0,v.b,v.a,1860).f=D.o.F(d,6)}b3.dz(0,"townsign",0,640)
for(t=0;t<4;++t){v=B.dit[t]
b3.dz(0,"cornersign",v.a,v.b)}for(t=0;t<5;++t)b3.dz(0,b0,B.d86[t],2045)
for(t=0;t<4;++t)b3.dz(0,b0,B.dm2[t],-690)
for(t=0;t<4;++t){u=B.cr6[t]
a1=b3.dz(0,b0,-1245,u)
a1.e=1
a1.c=-1245
b3.a41(0,a1)
a2=b3.dz(0,b0,1245,u)
a2.e=3
a2.c=1245
b3.a41(0,a2)}for(w=-1200;w<=1200;w+=480){for(t=0;t<4;++t)b3.dz(0,"pole",w,B.cvs[t])
for(v=Math.abs(w)<1100,o=w+240,t=0;t<4;++t){u=B.cCA[t]
if(v)b3.dz(0,"lamppost",o,u)}}b3.dz(0,"car",-300,490).e=2
b3.dz(0,"ambulance",110,345)
b3.dz(0,"firetruck",-385,345)
for(t=0;t<10;++t){v=B.drM[t]
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
for(t=0;t<6;++t){v=B.cC8[t]
b3.dz(0,"crate",v.a,v.b)}break
case"hall":default:}},
gqT(){var w,v,u,t=C.a([],x.D),s=this.d
s===$&&C.c()
w=s.length
v=0
for(;v<s.length;s.length===w||(0,C.M)(s),++v){u=s[v]
if(u.c!=="outside")t.push(u)}return t},
gcZE(){var w=this.gqT()
return new C.Z(w,new A.bV3(),C.T(w).k("Z<1>")).gL(0)},
gcWh(){var w=this.d
w===$&&C.c()
return new C.Z(w,new A.bV2(),C.T(w).k("Z<1>")).gL(0)},
gcWg(){var w=this.d
w===$&&C.c()
return new C.Z(w,new A.bV1(),C.T(w).k("Z<1>")).gL(0)},
gcOY(){var w=this.gqT()
return new C.Z(w,new A.bV0(),C.T(w).k("Z<1>")).gL(0)}}
A.IZ.prototype={
R(){var w,v,u,t,s=new C.wt()
$.x5()
s.h2(0)
w=$.au()
v=$.hy1()
u=x.S
t=C.a([],x.aQ)
return new A.aEO(s,B.azS,new C.eA("",w),B.dgI,B.rH,B.rH,D.D_,C.aX(x.N),new C.cB(null,x.eF),v,C.U(u,x.i),C.aX(u),t,D.cR)}}
A.aEO.prototype={
ghJ(){var w,v,u=$.ak_
if(u!=null){w=u.a
v=this.d
v===$&&C.c()
v=w===v.b
w=v}else w=!1
return w?u:null},
azH(){var w,v,u=this.ghJ()
if(u==null)u=null
else{w=this.d
w===$&&C.c()
v=w.d
v===$&&C.c()
w=u.beY(w,v[w.e].a)
u=w}this.fr=u==null?B.azS:u},
gbiH(){var w=this.d
w===$&&C.c()
w=w.gqT()
return new C.Z(w,new A.ed6(),C.T(w).k("Z<1>")).gL(0)},
Z(){var w,v,u,t,s,r=this
r.a2()
w=r.a.r
if(w.length!==0)w=r.d=A.hGV(w)
else{w=$.Ef==null
if(w){w=D.o.F(Date.now(),1e5)
$.Ef=A.aWw(w)
r.ej=!0}w=$.Ef
w.toString
w=r.d=w}v=r.a
v.toString
u=w.c
w.c=u
u=new A.xh(-0.05,0.1,120,B.fYX,$.au())
u.f=560
r.e=u
v=v.f
if(v==="city")w.e=11
if(v.length!==0){w=w.gqT()
t=new C.Z(w,new A.ed3(r),C.T(w).k("Z<1>"))
if(!t.gan(0)){w=r.d
w===$&&C.c()
w.e=t.gI(0).a}}A.aWh($.ahK)
A.hiR()
r.aiX()
r.azH()
w=r.d
w===$&&C.c()
v=w.d
v===$&&C.c()
w=v[w.e]
v=r.gbiH()
u=r.d
s=u.d
s===$&&C.c()
r.f=A.hsP(w,s[u.e].c!=="outside",B.aQv,"look",v,r.fr,0)
r.aem(!0)
r.Z0()
r.fx=C.df(D.fY,new A.ed4(r))
$.aV.x1$.push(new A.ed5(r))},
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
c1L(){var w,v=this.d
v===$&&C.c()
w=v.a
A:{if("switch"===w){v="The ceiling light is already in. Tap the red switch on the wall and wire it. Then flip it to see the light work."
break A}if("outlet"===w){v="Tap the red outlet on the wall and wire it. Then plug in a lamp or a TV to test it."
break A}if("gfci"===w){v="Tap the red GFCI outlet and wire it. Then plug in a hair dryer to test it."
break A}if("fan"===w){v="Tap the ceiling fan and wire it. Then flip the wall switch and watch it spin."
break A}if("ptrap"===w){v="The sink has no drain yet. Tap the sink and build the drain under it."
break A}v="The faucet is not connected yet. Tap the sink and connect the hoses."
break A}return v},
aem(d){var w,v,u,t,s,r,q=this,p=q.d
p===$&&C.c()
w=p.d
w===$&&C.c()
v=w[p.e]
if(q.z){u=new A.q(0,40,v.ghq(0)*0.5)
t=Math.max(v.gex(0),v.ghq(0))*0.6
p=q.e
p===$&&C.c()
p.e=20
p.f=260
p.w=-1.2
p.x=1.2
p.r9(!0)
s=0.12
r=-0.05}else if(v.c==="outside"){p=q.e
p===$&&C.c()
p.e=30
p.f=2400
p.w=0.03
p.x=1.35
p.r9(!0)
u=B.fYU
t=540
s=0.35
r=-0.25}else if(q.x){u=new A.q(0,46,v.ghq(0)*0.1)
t=v.ghq(0)*0.74
p=q.e
p===$&&C.c()
p.e=6
p.f=v.ghq(0)*0.78
p.w=0.02
p.x=1.35
p.r9(!0)
s=0.05
r=0}else{u=new A.q(0,30,v.ghq(0)*0.45)
t=(v.gex(0)*1.2>v.ghq(0)*1.4?v.gex(0)*1.2:v.ghq(0)*1.4)+30
p=q.e
p===$&&C.c()
p.e=6
p.f=560
p.w=0.1
p.x=1.35
p.r9(!0)
s=0.5
r=-0.12}p=q.e
if(d){p===$&&C.c()
p.d=u
p.c=t
p.a=r
p.b=s}else{p===$&&C.c()
p.hR(t,s,u,r)}},
xY(){return this.aem(!1)},
bNK(d,e){var w,v,u,t,s,r,q,p,o=this,n=o.e
n===$&&C.c()
w=n.cP5(d,e)
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
r=D.k.E(w.c,10,u.ghq(0)-10)
o.e.apN(new A.q(s,48,r))}else{n=u.c==="outside"
if(n&&o.aN&&o.aC!=null){n=o.aC
n.toString
n.at=new C.z(D.k.E(w.a,-u.gex(0)/2+12,u.gex(0)/2-12),D.k.E(w.c,-290,u.ghq(0)-12))}else{v=o.e
q=w.a
p=w.c
if(n)v.apO(Math.max(70,v.c*0.4),0.32,new A.q(q,30,p))
else{n=D.k.E(q,-u.gex(0)/2+8,u.gex(0)/2-8)
p=D.k.E(p,8,u.ghq(0)-8)
v.apO(Math.max(36,o.e.c*0.35),0.2,new A.q(n,40,p))}}}A.fW(560,50,0.25,"tri")},
iD(){var w,v,u,t,s,r,q,p,o=this
o.azH()
w=o.aJ
if(w!=null){v=w.ay
v===$&&C.c()}else{v=o.d
v===$&&C.c()
u=v.d
u===$&&C.c()
v=u[v.e]
u=o.r
t=o.Q
s=o.gbiH()
if(!o.z)if(o.x){r=o.d
q=r.d
q===$&&C.c()
r=q[r.e].c!=="outside"&&o.cx==null}else r=!1
else r=!0
q=o.fr
p=o.bG
v=A.hsP(v,r,p!=null?C.eD([100+p.a],x.S):B.aQv,u,s,q,t)}o.f=v},
eh(d,e){var w=this,v=w.ch
if(v!=null)v.a4(0)
w.m(new A.ebR(w,d,e))
w.ch=C.cI(D.ep,new A.ebS(w))},
iE(d){return this.eh(d,!0)},
PT(d){this.m(new A.ebT(this,d))
A.fW(660,50,0.25,"tri")},
axB(d,e){var w,v=this,u=v.d
u===$&&C.c()
if(d!==u.e){u=u.d
u===$&&C.c()
u=d>=u.length}else u=!0
if(u)return
if(v.aN&&d!==11)v.a2L()
v.cL=v.bG=v.aJ=null
if(!e&&v.cx!=null)v.S9()
v.m(new A.eap(v,d))
u=v.d
w=u.d
w===$&&C.c()
u=w[u.e]
if(u.c==="outside")v.aC=A.hmg(u,0,24)
v.xY()
A.fW(520,60,0.25,"tri")},
AB(d){return this.axB(d,!1)},
aXD(d){var w,v,u,t=this
if(d===700){w=t.d
w===$&&C.c()
v=w.d
v===$&&C.c()
return v[w.e].ganw()}if(d===701){w=t.d
w===$&&C.c()
v=w.d
v===$&&C.c()
w=v[w.e]
return w.p4.length!==0||w.Io(1)}if(d===702){w=t.d
w===$&&C.c()
v=w.d
v===$&&C.c()
return v[w.e].gMf()}if(d===703){w=t.d
w===$&&C.c()
v=w.d
v===$&&C.c()
return v[w.e].ga66()}if(d>=800&&d<820){u=d-800
w=t.d
w===$&&C.c()
v=w.d
v===$&&C.c()
w=v[w.e].id
return u<w.length&&w[u].gwE()}if(d===720){w=t.d
w===$&&C.c()
v=w.d
v===$&&C.c()
return v[w.e].ganw()}if(d===721){w=t.d
w===$&&C.c()
v=w.d
v===$&&C.c()
w=v[w.e]
return w.p4.length!==0||w.Io(1)}if(d>=722&&d<728){u=d-720-2
w=t.d
w===$&&C.c()
v=w.d
v===$&&C.c()
w=v[w.e].id
return u<w.length&&w[u].gwE()}w=t.d
w===$&&C.c()
v=w.d
v===$&&C.c()
return v[w.e].gkN()},
b8Q(){var w,v,u=this,t=u.d
t===$&&C.c()
w=t.d
w===$&&C.c()
v=w[t.e].go==="fan"
u.m(new A.ecj(u))
t=u.d
w=t.d
w===$&&C.c()
if(w[t.e].fy)t=v?"The fan spins.":"The light is on."
else t=v?"The fan stops.":"The light is off."
u.iE(t)
t=u.d
w=t.d
w===$&&C.c()
A.fW(w[t.e].fy?900:500,60,0.25,"tri")},
c80(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this
if(a0===0)return
if(a0>=19e3&&a0<19004){w=a0-19e3
v=d.d
v===$&&C.c()
u=v.d
u===$&&C.c()
t=u[v.e]
v=D.o.F(w,2)===0?-1:1
s=v*(t.gex(0)/2-14)
r=w<2?14:t.ghq(0)-14
q=Math.atan2(-s,-(t.ghq(0)/2-r))
w=Math.cos(0.12)
v=Math.sin(q)
u=Math.sin(0.12)
p=Math.cos(0.12)
o=Math.cos(q)
n=d.e
n===$&&C.c()
n.e=6
n.hR(26,0.12,new A.q(s+26*w*v,106-26*u,r-26*p*o),q)
d.eh("You are looking from the camera in the corner. Drag to look round, or tap a camera for another corner.",!0)
A.fW(700,70,0.25,"tri")
return}if(a0>=2e4&&a0<23e3){w=d.d
w===$&&C.c()
v=w.d
v===$&&C.c()
m=v[w.e].BU(a0-2e4)
if(m!=null)d.bTR(m)
return}if(a0===19502){w=d.aJ
if((w==null?null:w.a==="tower")===!0)d.m(new A.ebm(d))
return}if(a0===19500||a0===19501){l=d.aJ
if(l!=null)if(l.c)d.Yz(l)
else d.eh("This one works: the house has power.",!0)
return}if(a0>=900&&a0<920){d.cra(a0-900)
return}if(a0>=100&&a0<200){w=d.d
w===$&&C.c()
v=w.d
v===$&&C.c()
k=v[w.e].BU(a0-100)
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
d.m(new A.ebn(d,a0))
w=d.d
v=w.d
v===$&&C.c()
m=v[w.e].BU(d.Q)
if(m!=null)d.iE(B.hz.h(0,m.b).a+": move it with the arrows.")
return}if(a0===300||a0===301||a0===302){if(d.r!=="walls")return
d.m(new A.ebo(d,a0))
d.iE("Wall picked. Choose a paint colour.")
return}if(a0>=600&&a0<620){j=a0-600
w=d.d
w===$&&C.c()
v=w.d
v===$&&C.c()
if(j>=v[w.e].w.length)return
if(d.r==="doors"){d.m(new A.ebp(d,j))
w=d.d
v=w.d
v===$&&C.c()
A.fW(v[w.e].at.t(0,j)?700:450,70,0.25,"tri")
return}d.bND(j)
return}w=a0===700
v=!w
i=!0
if(v)if(a0!==701){if(a0!==702)if(a0!==703)if(!(a0>=800&&a0<820))u=a0>=720&&a0<728
else u=i
else u=i
else u=i
i=u}if(d.w&&i){h=d.aXD(a0)
A.fW(h?1400:500,160,0.25,"tri")
w=h?"The tester glows and beeps: LIVE, 120 volts. Never touch a live wire. Switch the breaker off first.":"The tester stays dark: no power here. It still needs wiring."
d.eh(w,!h)
return}if(!v||a0===701){if(d.aXD(a0))d.azi(w?0:1)
else d.aTP()
return}if(a0>=800&&a0<820){j=a0-800
w=d.d
w===$&&C.c()
v=w.d
v===$&&C.c()
w=v[w.e].id
if(j>=w.length)return
g=w[j]
if(!g.gwE())d.akd(j)
else if(g.a==="switch")d.b8Q()
else d.azi(2+j)
return}if(a0===702||a0===703){w=d.d
w===$&&C.c()
v=w.d
v===$&&C.c()
if(v[w.e].gMf()){w=d.d
v=w.d
v===$&&C.c()
w=!v[w.e].ga66()}else w=!0
if(w)d.aTP()
else d.b8Q()
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
if(!w[u].p2){d.m(new A.ebq(d))
w=d.d
v=w.d
v===$&&C.c()
d.iE("The TV is on and playing "+E.kl[v[w.e].p3].a+".")}else{e=A.aPR(f)
w=d.c
w.toString
I.ha3(w,0,e.a,!0,D.y6,e.b)}return}if(a0>=720&&a0<728){w=d.d
w===$&&C.c()
v=w.d
v===$&&C.c()
u=a0-720
f=v[w.e].fx.h(0,u)
if(f==null)return
e=A.aPR(f)
if(e.d>0||e.e){w=d.c
w.toString
I.ha3(w,0,e.a,!0,D.y6,e.b)}else d.azi(u)
return}if(a0===710||a0===711||a0===712||a0===713){w=d.d
w===$&&C.c()
v=w.d
v===$&&C.c()
if(!v[w.e].gjQ())if(d.d.a.length!==0)d.En()
else d.a0h()
else{w=d.f
w===$&&C.c()
j=w.b.h(0,a0)
if(j!=null)d.iE(j.a+": "+j.b)}}},
bND(d){var w,v,u,t=this.d
t===$&&C.c()
w=t.d
w===$&&C.c()
v=w[t.e].w[d].d
u=v<w.length?w[v].b:"the next room"
t=this.c
t.toString
return C.bV(E.lA,null,new A.e9T(this,u,d,v),t,!0,!0,!1,D.k2,!1,!1,x.H)},
bPG(){var w,v,u=this
u.m(new A.ea1(u))
if(!u.aN){w=u.d
w===$&&C.c()
v=w.d
v===$&&C.c()
w=v[w.e].c==="outside"}else w=!1
if(w)u.a2H()
w=u.d
w===$&&C.c()
v=w.d
v===$&&C.c()
if(v[w.e].c!=="outside")u.xY()},
bPI(){this.m(new A.ea2(this))
this.eh("Phone view: the city fills your phone standing up. Pick a drone film and start filming.",!0)},
bQ1(){var w=this
if(w.p4)w.a2K()
w.m(new A.ea3(w))},
cky(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.c
n.toString
w=C.aJ(n,o,x.w).w
n=new A.ebf(p)
v=x.p
u=C.a([C.bT(0,d,0,0,0)],v)
t=w.r.b
if(p.fw)u.push(C.ao(o,C.aB(D.iC,B.f6g,D.y,!1,o,new A.ebi(p),o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!1,D.a4),o,o,0,o,t,o))
else{s=n.$2(D.cz,p.gbQ0())
r=p.p4?D.He:D.Cg
r=n.$2(r,new A.ebj(p))
q=p.h5?B.ao7:N.Cj
u.push(C.ao(o,C.B(C.a([s,r,n.$2(q,new A.ebk(p)),n.$2(D.uy,new A.ebl(p))],v),D.m,o,D.e,D.i,0,o,o),o,o,10,o,t+8,o))}return C.c7(o,D.w,new C.an(D.a_,o,D.aa,D.t,u,o),o,!1,!1,o,o)},
bI2(d){var w,v,u,t,s,r,q=this,p=null,o=q.c
o.toString
w=C.aJ(o,p,x.w).w
o=new A.e9t(q)
if(q.eu){v=w.a
u=v.b
v=v.a
t=q.ab
s=w.bdv(D.af,new C.av(u,v),D.af)
return C.c7(p,D.w,C.at(new C.ya(t,C.rt(new C.a6(u,v,new C.an(D.a_,p,D.aa,D.t,C.a([C.bT(0,d,0,0,0),C.ao(p,C.aB(D.iC,B.f6m,D.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,o,p,p,p,p,p,p,!1,D.a4),p,p,0,p,0,p)],x.p),p),p),s),p),p,p,p),p,!1,!1,p,p)}r=q.f1?w.r.b:0
return C.c7(p,D.w,new C.an(D.a_,p,D.aa,D.t,C.a([C.bT(0,d,0,0,0),C.ao(p,C.aB(D.iC,B.f6n,D.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,o,p,p,p,p,p,p,!1,D.a4),p,p,0,p,r,p)],x.p),p),p,!1,!1,p,p)},
bS4(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.c
k.toString
w=C.aJ(k,l,x.w).w
k=w.a
v=k.b
k=k.a
u=new A.ead(m)
t=m.ab
s=w.bdv(D.af,new C.av(v,k),D.af)
r=x.p
q=C.a([C.bT(0,d,0,0,0)],r)
if(m.fw)q.push(C.ao(l,C.aB(D.iC,B.f6f,D.y,!1,l,new A.eag(m),l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,!1,D.a4),l,l,0,l,0,l))
else{p=u.$2(Ae.a1J,new A.eah(m))
o=u.$2(D.a29,new A.eai(m))
n=m.h5?B.ao7:N.Cj
r=C.a([p,o,u.$2(n,new A.eaj(m)),u.$2(D.uy,new A.eak(m))],r)
p=m.d
p===$&&C.c()
o=p.d
o===$&&C.c()
if(o[p.e].c==="outside"){p=m.p4?D.He:D.Cg
r.push(u.$2(p,new A.eal(m)))}if(m.gake())r.push(C.aB(l,C.p(l,B.bWe,D.f,l,l,new C.o(D.cV,l,C.J(D.c,D.r,1),l,l,l,D.a6),l,40,l,D.iA,l,l,l,40),D.y,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,m.gaQG(),l,l,l,l,l,l,!1,D.a4))
q.push(C.ao(l,C.B(r,D.m,l,D.e,D.i,0,l,l),l,l,10,l,10,l))}return C.c7(l,D.w,C.at(new C.ya(t,C.rt(new C.a6(v,k,new C.an(D.a_,l,D.aa,D.t,q,l),l),s),l),l,l,l),l,!1,!1,l,l)},
cBw(d){var w,v,u,t=B.CK[d.b]
if(d.c==="power")w=t.c
else{v=t.d
w=v>=0?v:t.c}v=this.d
v===$&&C.c()
v=v.d
v===$&&C.c()
u=w<v.length?v[w].b:"the house"
v=this.c
v.toString
return C.bV(D.av,null,new A.eci(this,t,new A.ech(),d,u,w),v,!0,!0,!0,K.a8o,!1,!1,x.H)},
c2U(){var w,v,u=this,t=u.d
t===$&&C.c()
w=t.d
w===$&&C.c()
v=w[t.e]
if(v.c==="outside")return
u.m(new A.eaD(u))
t=u.e
t===$&&C.c()
t.e=20
t.f=300
t.w=-0.95
t.x=1.35
t.r9(!0)
t=u.e
w=v.ghq(0)
t.hR(Math.max(v.gex(0),v.ghq(0))*0.75,-0.5,new A.q(0,118,w*0.5),-0.05)
u.eh("Looking up at the ceiling from the floor. Drag to look round.",!0)},
gpm(){var w,v,u=this.d
u===$&&C.c()
u=u.d
u===$&&C.c()
w=new C.Z(u,new A.e8s(),C.T(u).k("Z<1>"))
if(!w.gaf(0).C())return null
v=w.gI(0)
u=v.dx
return u==null?v.dx=A.hEK(v):u},
aRX(d){var w,v,u=this
if(d==null)return
w=d.c
if(w>0){v=u.ghJ()
if(v!=null)v.r+=w}w=d.a
A.fW(w==="pickup"?700:940,120,0.25,"tri")
u.eh(d.b,w!=="expired")
u.m(u.giV())},
gKv(){var w,v,u,t=this.d
t===$&&C.c()
t=t.d
t===$&&C.c()
w=new C.Z(t,new A.ecK(),C.T(t).k("Z<1>"))
if(!w.gaf(0).C())return null
v=w.gI(0)
t=v.dy
if(t==null){t=C.a([],x.bz)
u=new C.e9()
u.d4(11)
t=new A.cAX(v,u,t)
t.bA7(v,11)
v.dy=t}return t},
bG9(){var w,v,u=this,t=u.ghJ()
if(t==null)return
w=u.c6
if(w.w)u.eh("You already have your Uber licence.",!0)
else{v=t.r
if(v<40)u.eh("The licence costs 40 points. You have "+v+". Earn more with jobs and deliveries.",!1)
else{t.r=v-40
w.w=!0
A.fW(880,140,0.25,"tri")
u.eh("You passed! Here is your Uber licence. Drive a car to an Uber station and the people waiting will get in.",!0)}}u.m(new A.e8T())
w=u.aJ
if(w!=null)w.B(u.ghJ())},
c1P(){var w,v,u,t,s=this,r=null,q=s.ghJ(),p=s.c6.w,o=D.w.j(0.55),n=C.m(28),m=C.J(D.aZ,D.r,1),l=x.p,k=C.B(C.a([B.fBH,D.at,B.bFG,C.aB(r,D.qu,D.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new A.eay(s),r,r,r,r,r,r,!1,D.a4)],l),D.m,r,D.e,D.i,0,r,r),j=C.d(p?"You are a licensed Uber driver. Drive a car to an Uber station (the yellow and black shelter): the people waiting get in, and you take them to their house. The fare is paid when you get there.":"With the Uber licence you can take the people waiting at the Uber stations home and be paid for every ride. The car needs gas, so watch the gas bar.",r,r,r,r,r,r,B.fhu,r,r,r),i=q==null,h=i?r:q.r
h=C.d("You have "+(h==null?0:h)+" \u2b50",r,r,r,r,r,r,B.fpv,r,r,r)
w=p?new A.eaz(s):s.gbG8()
if(p)v=D.be
else{v=i?r:q.r
v=(v==null?0:v)>=40?D.bG:D.bz}u=C.m(16)
t=p?"\u2713 Licensed":"Get the licence \xb7 40 \u2b50"
if(!p){i=i?r:q.r
i=(i==null?0:i)>=40}else i=!0
return C.p(D.A,C.p(r,C.x(C.a([k,D.W,j,D.W,h,D.W,C.aB(r,C.p(D.A,C.d(t,r,r,r,r,r,r,C.l(r,r,i?D.w:D.bY,r,r,r,r,r,r,r,r,16,r,r,D.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),D.f,r,r,new C.o(v,r,r,u,r,r,D.n),r,50,r,r,r,r,r,r),D.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,w,r,r,r,r,r,r,!1,D.a4)],l),D.ak,r,D.e,D.P,0,D.p),D.f,r,r,new C.o(r,r,m,n,r,B.zd,D.n),r,r,r,D.bA,D.bQ,r,r,330),D.f,o,r,r,r,r,r,r,r,r,r,r)},
cDT(d){var w,v,u,t=this,s=t.gKv()
if(s!=null){w=s.c
w===$&&C.c()
w=w.length===0}else w=!0
if(w)return
v=s.cNW(d.f,d.r,t.CW.gi9()/1000)
if(v>0){w=t.ghJ()
if(w!=null)w.r+=v
A.fW(940,140,0.25,"tri")
t.eh("\ud83d\ude96 You dropped the passenger at the house. Fare: +"+v+" points. Thank you!",!0)
t.m(t.giV())
return}if(s.f==null&&s.aqr(d.f,d.r)!=null&&D.d.b2(s.e,new A.ecL(s,d))){w=t.c6
if(!w.w){if(Date.now()-t.k1>2e4){t.k1=Date.now()
t.eh("People are waiting for a ride, but you need an Uber licence first. Get it at the licence office.",!1)}return}if(w.b<=0)return
u=s.cW8(d.f,d.r)
if(u!=null){A.fW(700,100,0.25,"tri")
t.eh("\ud83d\ude96 "+u.b+" got in. Take them to their house (follow the yellow line): "+u.f+" points.",!0)
t.m(t.giV())}}},
cDS(){var w,v,u,t,s,r,q,p=this,o=p.gKv()
if(o==null)return
w=o.f
if(w!=null){p.eh("\ud83d\ude96 "+w.b+" is in the car and wants to go home: "+w.f+" points. Follow the yellow line to the house.",!0)
return}if(!p.c6.w){v=C.a([],x._)
u=p.d
u===$&&C.c()
t=u.d
t===$&&C.c()
u=t[u.e].x
t=u.length
s=0
for(;s<u.length;u.length===t||(0,C.M)(u),++s){r=u[s]
if(r.b==="dmv")v.push(r)}if(v.length===0){p.eh("There is no licence office in this town yet.",!1)
return}p.Sn(D.d.gI(v))
p.eh("You are at the licence office. Walk in through the door and onto the blue mat to get your Uber licence.",!0)
return}v=o.c
v===$&&C.c()
if(v.length===0){p.eh("There is no Uber station in this town yet.",!1)
return}q=p.aC
v=C.C(v,x.eB)
D.d.aW(v,new A.ecJ(q))
p.Sn(D.d.gI(v))
p.eh("You are at an Uber station. Get in the car parked next to it and drive up to the people waiting. They get in by themselves.",!0)},
aPj(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=" points for the ",i=k.ghJ()
if(i==null)return
w=d.a
v=w==="bread"
if(v||w==="medicine"){u=i.aDS(v?"food":"medicine")
t=!D.a.a0(u,"You need")}else{v=d.r
t=!1
if(v>0){w=w==="tank"
s=w?A.h7B(k.c6.b):d.e
r=k.c6
q=r.b
if(q>=0.99)u="The tank is already full."
else{p=i.r
o=p<s
if(o)u="You need "+s+" points for that. Earn more with jobs and deliveries."
else{i.r=p-s
r.b=D.k.E(q+v,0,1)
r.aV()
v=""+s
u=w?"You filled the tank for "+v+" points.":"You put gas in the car. -"+v+" points."}t=!o}}else if(d.x){w=k.c6
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
w=D.k.E(v.a+w,0,1)
v.a=w
if(w>=0.3)v.d=v.c=0
v.aV()}if(q){w=k.c6
w.e=D.k.E(w.e+r,0,1)
w.aV()}w=k.c6
w=w.d>0||w.c>0?"Still too tired: eat more.":"You feel stronger."
u="You had the "+d.c.toLowerCase()+". "+w}t=!l}}}A.fW(t?880:300,90,0.25,"tri")
k.eh(u,t)
w=k.aJ
if(w!=null)w.B(k.ghJ())
k.m(k.giV())},
cvW(){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.ghJ(),i=l.aJ
i=i==null?k:i.b.b==="gasstation"
w=i===!0
i=l.c
i.toString
v=C.aJ(i,k,x.w).w.a
i=v.a
u=i>v.b*1.15
t=new A.ebW(u,new A.ebX(l,j,u))
s=C.d(w?"\u26fd":"\ud83d\uded2",k,k,k,k,k,k,D.wX,k,k,k)
r=C.d(w?"NGMY Gas shop":"NGMY Mart",k,k,k,k,k,k,D.fw,k,k,k)
q=j==null?k:j.r
p=x.p
q=C.a([s,D.at,C.E(C.x(C.a([r,C.d("You have "+(q==null?0:q)+" \u2b50",k,k,k,k,k,k,B.fjW,k,k,k)],p),D.E,k,D.e,D.i,0,D.p),1)],p)
if(u)q.push(new C.a6(190,k,new A.UE(l.c6,w,14,k),k))
q.push(D.bd)
q.push(C.aB(k,B.bSR,D.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new A.ebV(l),k,k,k,k,k,k,!1,D.a4))
o=C.B(q,D.m,k,D.e,D.i,0,k,k)
n=t.$2("FOOD AND DRINKS (energy)",B.d9l)
s=w?"GAS":"HEALTH AND THE TOWN"
m=t.$2(s,w?B.dlN:B.dix)
t=D.w.j(0.55)
i=u?Math.min(i-24,820):340
s=C.m(28)
r=C.J(D.aZ,D.r,1)
q=C.a([o,D.W],p)
if(!u)D.d.v(q,C.a([new A.UE(l.c6,w,14,k),D.O],p))
if(u)q.push(C.B(C.a([C.E(n,5),D.es,C.E(m,3)],p),D.E,k,D.e,D.i,0,k,k))
else D.d.v(q,C.a([n,m],p))
return C.p(D.A,C.eN(D.A,C.p(k,C.x(q,D.ak,k,D.e,D.P,0,D.p),D.f,k,k,new C.o(k,k,r,s,k,B.zd,D.n),k,k,k,D.bf,D.bQ,k,k,i),D.f,D.e2),D.f,t,k,k,k,k,k,k,k,k,k,k)},
cha(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=this,a1=null,a2=a0.gpm()
a2.toString
w=a0.aC
v=w==null
u=v?a1:w.f
if(u==null)u=0
t=v?a1:w.r
if(t==null)t=300
s=a2.x
r=new A.eaY()
q=new A.eaU(a0,u,t,r,new A.eaX(),s,a2)
p=a2.cYv()
o=["\ud83e\udd47","\ud83e\udd48","\ud83e\udd49","4","5","6"]
v=D.w.j(0.55)
n=C.m(28)
m=C.J(D.aZ,D.r,1)
l=x.p
k=C.a([C.B(C.a([B.fJa,D.at,C.E(C.x(C.a([B.fKY,C.d("Race "+a2.as+": first to 8 wins +40",a1,a1,a1,a1,a1,a1,H.vg,a1,a1,a1)],l),D.E,a1,D.e,D.i,0,D.p),1),C.aB(a1,D.qu,D.y,!1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,new A.eaS(a0),a1,a1,a1,a1,a1,a1,!1,D.a4)],l),D.m,a1,D.e,D.i,0,a1,a1),D.ad],l)
if(s!=null){j=D.bG.j(0.14)
i=C.m(16)
h=C.J(D.bG,D.r,1)
g=s.b
f=C.d(A.Le(g).b,a1,a1,a1,a1,a1,a1,D.K5,a1,a1,a1)
k.push(C.p(a1,C.B(C.a([f,D.at,C.E(C.d(s.r?"You have the "+A.Le(g).c.toLowerCase()+". Take it to the house (follow the yellow line).":"Go to the "+r.$1(s.c).toLowerCase()+" to pick up the "+A.Le(g).c.toLowerCase()+".",a1,a1,a1,a1,a1,a1,D.oI,a1,a1,a1),1),C.aB(a1,B.fze,D.y,!1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,new A.eaT(a0,a2),a1,a1,a1,a1,a1,a1,!1,D.a4)],l),D.m,a1,D.e,D.i,0,a1,a1),D.f,a1,a1,new C.o(j,a1,h,i,a1,a1,D.n),a1,a1,a1,D.d2,D.bf,a1,a1,a1))}else{j=C.a([B.fNO,D.O],l)
for(a2=a2.r0(0,u,t),a2=C.d1(a2,0,C.dB(6,"count",x.S),C.T(a2).c),i=a2.$ti,a2=new C.bS(a2,a2.gL(0),i.k("bS<ak.E>")),i=i.k("ak.E");a2.C();){h=a2.d
j.push(q.$1(h==null?i.a(h):h))}D.d.v(k,j)}k.push(D.am)
k.push(B.fCD)
k.push(D.O)
for(e=0;e<p.length;++e){a2=p[e].a==="You"?D.aQ.j(0.18):D.c.j(0.05)
j=new C.aP(12,12)
i=p[e]
h=i.a
g=h==="You"
d=new C.ay(g?D.aQ:D.dq,1,D.r,-1)
f=o[e]
g=g?D.u:D.Q
k.push(C.p(a1,new C.ce(D.aM,D.e,D.i,D.m,a1,D.p,a1,0,C.a([new C.a6(26,a1,new C.y(f,a1,D.aSs,a1,a1,a1,a1,a1,a1,a1,a1,a1),a1),new C.bz(1,D.bb,new C.y(h,a1,new C.F(!0,D.c,a1,a1,a1,a1,a1,g,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1,a1,a1,a1,a1,a1,a1),a1),new C.y(""+i.b+"/8",a1,L.K7,a1,a1,a1,a1,a1,a1,a1,a1,a1),D.at,new C.y(""+i.c+" pts",a1,B.fhk,a1,a1,a1,a1,a1,a1,a1,a1,a1)],l),a1),D.f,a1,a1,new C.o(a2,a1,new C.bK(d,d,d,d),new C.bg(j,j,j,j),a1,a1,D.n),a1,a1,a1,D.eI,D.l8,a1,a1,a1))}return C.p(D.A,C.eN(D.A,C.p(a1,C.x(k,D.ak,a1,D.e,D.P,0,D.p),D.f,a1,a1,new C.o(a1,a1,m,n,a1,B.zd,D.n),a1,a1,a1,D.bA,D.bQ,a1,a1,340),D.f,D.e2),D.f,v,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1)},
bTQ(d){var w,v,u=this,t=u.aJ
if(t==null||t.a!=="tower"||u.ok!=null)return
w=t.f
if(d===w){u.m(new A.eam(u))
return}u.p2=t
w=new A.f0a(w,d,Date.now())
v=t.at
v===$&&C.c()
w.r=v.f
w.w=v.r
u.ok=w
t.y=u.be=u.b0=0
u.m(new A.ean(u))
w=u.e
w===$&&C.c()
w.hR(175,0.28,B.fYY,0)
u.eh("Going to level "+d+": walking to the elevator.",!0)
w=u.p1
if(w!=null)w.bR(0)
w=new A.a5l(u.gcrU(),V.BC)
w.h2(0)
u.p1=w},
DP(d){var w=D.k.E(d,0,1)
return w*w*(3-2*w)},
crV(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d="tri",a0=e.ok,a1=e.p2
if(a0==null||a1==null||e.c==null){w=e.p1
if(w!=null)w.bR(0)
return}v=Date.now()
u=(v-a0.c)/1000
w=a0.b
t=a0.a
s=w>t
switch(a0.d){case 0:r=a1.at
r===$&&C.c()
if(u<1){q=e.DP(u/1)
p=a0.r
r.f=p*(1-q)
o=a0.w
n=62-o
r.r=o+n*q
r.w=Math.atan2(-p,n)
r.x=!0}else if(u<1.8){r.f=0
r.r=62
r.w=3.141592653589793
r.x=!1}else if(u<2.5){r.r=62-44*e.DP((u-1.8)/0.7)
r.w=3.141592653589793
r.x=!0}else r.x=!1
r.y+=0.3
a1.y=e.DP((u-0.8)/0.8)
if(u>=2.6){a0.d=1
a0.c=v
a0.f=3+D.o.E(Math.abs(w-t)-1,0,99)*1.1
a0.e=t
m=A.h_1("cabin",a1.b,!1)
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
w.Nn(54,0.1,B.fZb,3.141592653589793)
A.fW(520,70,0.25,d)}break
case 1:m=e.aJ
if(m==null||m.a!=="cabin")return
l=a0.f
if(u<0.9)r=1-e.DP(u/0.9)
else{r=l-0.9
r=u>r?e.DP((u-r)/0.9):0}m.y=r
k=u>0.9&&u<l-0.9
if(k){j=D.o.E(t+D.k.V((w-t)*e.DP((u-0.9)/(l-1.8))),1,m.gM5())
if(j!==a0.e){m.z=a0.e=j
t=s?"\u25b2":"\u25bc"
e.p3.sp(0,t+"  "+C.w(j===1?"L":j))
A.fW(500+j*22,45,0.2,d)}}i=k?1:0.25
t=e.e
t===$&&C.c()
r=Math.sin(u*5.3)
p=Math.sin(u*2.1)
o=Math.sin(u*0.9)
n=Math.sin(u*8)
t.Nn(54+p*1.2,0.1+Math.sin(u*6.1)*0.007*i,new A.q(0,52+r*0.5*i,52),3.141592653589793+o*0.5+n*0.01*i)
if(u>l-0.9&&!a0.x){a0.x=!0
m.z=w
e.p3.sp(0,C.w(w===1?"L":w))
A.fW(880,140,0.3,d)
C.bQ(D.fP,new A.ebN(),x.H)}if(u>=l){a0.d=2
a0.c=v
h=a1.b.a
t=e.d
t===$&&C.c()
r=t.d
r===$&&C.c()
t=r[t.e].cy.h(0,h)
g=e.gIz().h(0,h*100+w)
a1.f=D.o.E(w,1,a1.gM5())
a1.c=t===w
w=a1.at
w===$&&C.c()
w.f=0
w.r=112
w.w=3.141592653589793
a1.x=!1
a1.CW.a7(0)
a1.B(a1.ch)
e.ajf(a1,g)
a1.B(e.ghJ())
w.f=0
w.r=16
w.w=0
w.x=!1
a1.y=1
e.aJ=a1
e.m(e.giV())
e.e.Nn(175,0.28,B.fYZ,0)}break
default:w=a1.at
w===$&&C.c()
q=e.DP(u/1.6)
w.f=0
w.r=16+96*q
w.w=0
w.x=u<1.6
w.y+=0.3
a1.y=1-e.DP((u-1.3)/0.8)
t=e.e
t===$&&C.c()
t.apN(new A.q(0,40,w.r*0.7+14))
if(u>=2.2){f=a1.c
t=e.p1
if(t!=null)t.bR(0)
e.ok=null
w.x=!1
a1.y=0
e.m(e.giV())
e.e.hR(170,0.4,B.fYD,0)
A.fW(660,80,0.25,d)
w=""+a1.f
e.eh(f?"Level "+w+". This office has no power: walk onto the red mat at the breaker panel, or tap the red frames.":"Level "+w+" of "+a1.gM5()+".",!0)}}},
bP6(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.aJ
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
r=g.gM5()
q=x.p
s=C.B(C.a([B.fRT,D.at,C.E(C.x(C.a([B.fJX,C.d("You are on level "+s+" of "+r,h,h,h,h,h,h,H.vg,h,h,h)],q),D.E,h,D.e,D.i,0,D.p),1),C.aB(h,D.qu,D.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new A.ea_(i),h,h,h,h,h,h,!1,D.a4)],q),D.m,h,D.e,D.i,0,h,h)
p=C.a([],q)
for(;r>=1;--r){if(r===g.f)o=D.aQ
else o=r===u?D.bx.j(0.35):D.c.j(0.08)
n=new C.aP(14,14)
m=r===u
if(m)l=D.aw
else l=r===g.f?D.c:D.aZ
k=r===g.f
j=new C.ay(l,k||m?2:1,D.r,-1)
l=r===1?"L":""+r
k=k?D.w:D.c
l=C.a([new C.y(l,h,new C.F(!0,k,h,h,h,h,19,D.u,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h),h,h,h,h,h,h,h,h,h)],q)
if(m)l.push(B.fSd)
p.push(C.aB(h,C.p(D.A,C.x(l,D.m,h,D.b8,D.i,0,D.p),D.f,h,h,new C.o(o,h,new C.bK(j,j,j,j),new C.bg(n,n,n,n),h,h,D.n),h,52,h,h,h,h,h,58),D.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new A.ea0(i,r),h,h,h,h,h,h,!1,D.a4))}return C.p(D.A,C.eN(D.A,C.p(h,C.x(C.a([s,D.ad,B.fQ7,D.W,C.bX(D.bC,p,D.bq,h,8,8),D.am,B.fB4],q),D.ak,h,D.e,D.P,0,D.p),D.f,h,h,new C.o(h,h,t,v,h,B.zd,D.n),h,h,h,D.bA,D.bQ,h,h,330),D.f,D.e2),D.f,w,h,h,h,h,h,h,h,h,h,h)},
au0(){var w,v,u,t,s,r,q=this,p=q.e
p===$&&C.c()
w=Math.cos(p.b)
v=Math.sin(q.e.b)
p=q.e
u=p.d
t=p.c
p=Math.sin(p.a)
s=q.e
r=s.c
return new C.z(u.a9(0,new A.q(-t*w*p,r*v,r*w*Math.cos(s.a))),q.e.d)},
aRg(d,e,f,g,h){var w=new A.e9M(h)
return new A.q(w.$4(d.a,e.a,f.a,g.a),w.$4(d.b,e.b,f.b,g.b),w.$4(d.c,e.c,f.c,g.c))},
c3r(d){var w=this.d
w===$&&C.c()
w=w.d
w===$&&C.c()
return A.i7v(D.d.fP(w,new A.eaE()),d)},
cyG(d){var w,v,u=this
u.B4()
u.S9()
if(u.aN)u.a2L()
u.aJ=null
w=u.c3r(d)
if(w.length===0)return
u.m(new A.ebZ(u,w))
v=u.e
v===$&&C.c()
v.r=4800
v.e=6
v.f=2600
v.w=-1.2
v.x=1.4
v.r9(!0)
u.adJ()
v=u.RG
if(v!=null)v.bR(0)
v=new A.a5l(u.gbOm(),V.BC)
v.h2(0)
u.RG=v},
adJ(){var w,v,u,t,s,r,q,p=this,o=++p.ry,n=p.rx
if(o>=n.length){p.a2K()
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
u=A.h_1(v,o,u.k4.t(0,t))
u.B(p.ghJ())
p.aJ=u
p.ajf(u,p.gIz().h(0,t))
t=p.aJ
t.toString
t.B(p.ghJ())
p.m(p.giV())}s=w.r
if(s&&p.aJ!=null){p.aJ=null
p.m(p.giV())}if(w.w==null&&w.x==null){s=!n||s
r=p.au0()
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
D.d.M(o,n+Math.max(1,new A.q(u.a-v.a,u.b-v.b,u.c-v.c).guU()))}}o=w.e
if(o!=null)p.eh("\ud83d\ude81 "+o,!0)},
bOn(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this
if(!a2.p4||a2.c==null)return
w=a2.rx[a2.ry]
v=(Date.now()-a2.to)/1000
u=w.x
if(u!=null){t=a2.CW.gi9()/1000
s=B.a4B[u].a
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
h=a2.au0()
k=A.o3(h.a,k,i)
m=A.o3(h.b,m,i)}if(v>=w.d){a2.adJ()
return}}else{u=w.w
if(u!=null){u=B.km[u]
t=a2.CW.gi9()
t=$.aRG().cWn(0,D.d.cv(B.km,u),t/1000).a
u=t[0]
m=new A.q(u,26,t[1])
l=v*0.6+0.8
k=new A.q(u+Math.sin(l)*190,85,t[1]+Math.cos(l)*190)
if(v<2.5){j=v/2.5
i=j*j*(3-2*j)
g=a2.au0()
k=A.o3(g.a,k,i)
m=A.o3(g.b,m,i)}if(v>=w.d){a2.adJ()
return}}else{f=v*w.c
if(a2.x1.length<2||f>=D.d.gak(a2.xr)){a2.adJ()
return}u=a2.xr
t=u.length
e=0
for(;;){s=e+2
if(!(s<t&&u[e+1]<=f))break;++e}t=u[e]
n=e+1
d=D.k.E((f-t)/(u[n]-t),0,1)
t=new A.e9Y()
u=e-1
k=a2.aRg(t.$2(a2.x1,u),t.$2(a2.x1,e),t.$2(a2.x1,n),t.$2(a2.x1,s),d)
m=a2.aRg(t.$2(a2.x2,u),t.$2(a2.x2,e),t.$2(a2.x2,n),t.$2(a2.x2,s),d)}}a0=m.aF(0,k)
a1=Math.max(8,a0.guU())
u=a2.e
u===$&&C.c()
t=Math.atan2(a0.a,-a0.c)
u.Nn(a1,Math.asin(D.k.E(-a0.b/a1,-1,1)),m,t)},
a2K(){var w=this,v=w.e
v===$&&C.c()
v.r=0
v=w.RG
if(v!=null)v.bR(0)
w.RG=null
if(w.c==null)return
w.m(new A.ec9(w))
w.xY()
w.eh("The drone has landed.",!0)},
bOl(){var w=null,v=new A.e9W(this),u=D.w.j(0.55),t=C.m(28),s=C.J(D.aZ,D.r,1),r=x.p
return C.p(D.A,C.eN(D.A,C.p(w,C.x(C.a([C.B(C.a([B.fPV,D.at,B.bFd,C.aB(w,D.qu,D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new A.e9V(this),w,w,w,w,w,w,!1,D.a4)],r),D.m,w,D.e,D.i,0,w,w),B.fCI,v.$4("\ud83c\udf06","The whole city","High flights over every street","city"),v.$4("\ud83e\udea7","Billboards and NGMY logos","Close to every ad, and the big logo board","billboards"),v.$4("\ud83c\udfc1","Edge billboards only","A tour round the big boards at the edges of the city","edges"),v.$4("\ud83c\udfe0","Houses","Fly by the houses, then go inside a big one","houses"),v.$4("\ud83c\udfe5","Hospital, shop and school","Fly in and look round inside each","hospital"),v.$4("\ud83d\ude8c","Traffic","Follow the self-driving buses and police cars","traffic"),v.$4("\ud83c\udfac","Everything","A little of all of it","all")],r),D.ak,w,D.e,D.P,0,D.p),D.f,w,w,new C.o(w,w,s,t,w,B.zd,D.n),w,w,w,D.bA,D.bQ,w,w,330),D.f,D.e2),D.f,u,w,w,w,w,w,w,w,w,w,w)},
gIz(){var w=this.d
w===$&&C.c()
w=w.d
w===$&&C.c()
return D.d.fP(w,new A.eat()).cx},
auc(d){var w,v=C.a([],x.u)
for(w=0;w<4;++w)v.push(d.th(w))
return v},
cz2(d){var w,v,u=C.a([],x.t)
for(w=0;w<4;++w){if(!d.th(w)){v=d.d
v===$&&C.c()
v=w>=v.length}else v=!0
u.push(v?0:new A.ec8(d,w).$0())}return u},
cG9(d,e){var w,v,u,t,s,r=d.d
r===$&&C.c()
if(e>=r.length)return""
w=r[e]
r=w.a
v=d.at.h(0,r)
u=v==null
t=u?null:v.a
s=A.agU(t==null?w.b:t).toLowerCase()
if(u||!A.h3h(w.b,v.a))return"nothing put in yet at "+A.jY(r).b
if(v.b.c<2)return"the "+s+" at "+A.jY(r).b+" is not finished: fasten every wire and close it"
return"the "+s+" at "+A.jY(r).b+" works but is NOT wired safely: "+d.apk(r).b},
ajf(d,e){var w=e==null
d.d=w?B.aA1:this.auc(e)
d.e=w?B.a32:this.cz2(e)},
gbaO(){var w,v,u=this.aJ
if(u==null||!u.c)return null
w=u.a
v=u.b.a
return w==="tower"?v*100+u.f:v},
gake(){var w,v=this.gbaO(),u=v==null?null:this.gIz().h(0,v)
if(u!=null)w=u.gbky()||D.d.d_(this.auc(u),new A.ecY())
else w=!1
return w},
asC(){var w,v,u,t,s,r=this,q=r.aJ,p=r.gbaO(),o=p==null,n=o?null:r.gIz().h(0,p)
if(q==null||o||n==null)return
if(!D.d.d_(r.auc(n),new A.e9v())){r.eh("Not quite done: the wiring is not right yet. Open the wiring bench again (tap the panel) and check every wire.",!1)
return}w=q.b
r.gIz().W(0,p)
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
s=10+r.iN.aq(26)
v=r.ghJ()
if(v!=null)v.r+=s
r.lf=Date.now()
r.lz=0
q.d=B.dqS
q.e=B.a32
q.B(r.ghJ())
r.m(r.giV())
A.fW(880,120,0.3,"tri")
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
Yz(d){return this.c_n(d)},
c_n(d){var w=0,v=C.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k
var $async$Yz=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:l=d.b
k=l.a
if(d.a==="tower")k=k*100+d.f
s=t.gIz().c4(0,k,new A.eaq(l,d))
w=3
return C.b(t.yd(C.dZ(new A.ear(s),!1,null,x.H)),$async$Yz)
case 3:if(t.c==null){w=1
break}t.ajf(d,s)
if(t.gake())t.asC()
else{d.B(t.ghJ())
t.m(t.giV())
r=x.s
q=C.a([],r)
if(s.th(0))q.push("outlet 1")
if(s.th(1))q.push("outlet 2")
if(s.th(2))q.push("the ceiling light")
if(s.th(3))q.push("the switch")
p=C.a([],r)
if(!s.th(0))p.push("outlet 1")
if(!s.th(1))p.push("outlet 2")
if(!s.th(2))p.push("the ceiling light")
if(!s.th(3))p.push("the switch")
r=C.a([],r)
for(o=0;o<4;++o)if(!s.th(o))r.push(t.cG9(s,o))
n=x.cc
m=C.C(new C.Z(r,new A.eas(),n),n.k("L.E"))
r=q.length===0?"Nothing is fixed yet":"Fixed so far: "+D.d.aH(q,", ")
p=D.d.aH(p,", ")
q=m.length===0?"":"Why: "+C.d1(m,0,C.dB(2,"count",x.S),C.T(m).c).aH(0,"; ")+". "
t.eh(r+". Still to do: "+p+". "+q+"Tap the red frames to carry on.",!1)}case 1:return C.h(u,v)}})
return C.i($async$Yz,v)},
abi(d){return this.bRd(d)},
bRd(d){var w=0,v=C.j(x.H),u,t=this,s,r,q,p,o
var $async$abi=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:o=t.d
o===$&&C.c()
s=o.d
s===$&&C.c()
r=d.a
q=s[o.e].db.c4(0,r,new A.ea5())
w=3
return C.b(t.yd(C.dZ(new A.ea6(q),!1,null,x.H)),$async$abi)
case 3:if(t.c==null){w=1
break}if(q.c>=2&&A.Lf(A.t2("light"),q).a==="ok"){o=t.d
s=o.d
s===$&&C.c()
s[o.e].db.W(0,r)
o=t.d
s=o.d
s===$&&C.c()
s[o.e].k3.W(0,r)
p=10+t.iN.aq(26)
r=t.ghJ()
if(r!=null)r.r+=p
t.m(t.giV())
t.eh("The street light is on again. You wired it correctly: black to black, white to white, ground to ground. +"+p+" stars.",!0)}else t.eh("The light is still out: finish the wiring and fit the cover, then it comes on.",!1)
case 1:return C.h(u,v)}})
return C.i($async$abi,v)},
c7V(){var w,v,u=this,t=u.aC
if(t==null)return
w=u.d
w===$&&C.c()
v=w.d
v===$&&C.c()
v[w.e].dz(0,"crate",t.f+Math.sin(t.w)*34,t.r+Math.cos(t.w)*34)
u.al=null
u.m(u.giV())
u.eh("You put the crate down.",!0)},
c5m(){var w,v,u,t,s,r,q,p,o=this,n=o.d
n===$&&C.c()
n=n.d
n===$&&C.c()
w=D.d.fP(n,new A.eaG())
if(o.gaX_())return
n=x._
v=C.a([],n)
for(u=w.x,t=u.length,s=w.k4,r=0;r<u.length;u.length===t||(0,C.M)(u),++r){q=u[r]
p=q.b
if(p==="house2"||p==="bighouse"){p=q.a
p=!s.t(0,p)&&p!==o.je}else p=!1
if(p)v.push(q)}if(s.a<2&&v.length!==0&&o.bB==null&&o.bC==null){q=v[o.iN.aq(v.length)]
v=q.a
s.M(0,v)
o.je=v
o.b4z(new A.Qq(q,q.b==="bighouse"?"the big house":"the house","power","",0))}n=C.a([],n)
for(v=u.length,t=w.k3,r=0;r<u.length;u.length===v||(0,C.M)(u),++r){q=u[r]
s=q.b
if((s==="pole"||s==="lamppost")&&!t.t(0,q.a))n.push(q)}if(t.a<3&&n.length!==0&&D.o.F(o.bX,90)===0){t.M(0,n[D.o.F(o.bX*5,n.length)].a)
o.eh("\u26a1 A street light went out in the town. Find it (it is dark, with a red sign) and fix it.",!1)}n=o.d
v=n.d
v===$&&C.c()
if(v[n.e].c==="outside"&&o.aJ==null)o.m(o.giV())},
ax1(d){return this.c5n(d)},
c5n(d){var w=0,v=C.j(x.H),u=this
var $async$ax1=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:u.m(new A.eaH(u,d))
return C.h(null,v)}})
return C.i($async$ax1,v)},
aXa(){var w,v=this.cJ,u=v==null?null:v.a
if(u==null)return null
w=A.vy(new A.q(0,0,B.hz.h(0,u.b).d/2+60),u.e*3.141592653589793/2)
return new C.z(u.c+w.a,u.d+w.c)},
aw9(){var w=this.aC,v=this.aXa()
if(w==null||v==null)return null
return D.k.V(Math.sqrt(Math.pow(v.a-w.f,2)+Math.pow(v.b-w.r,2))/10)},
csc(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.aC,g=j.gKv()
g=g==null?i:g.ga6R(0)
if(g==null){g=j.gpm()
g=g==null?i:g.ga6R(0)
w=g}else w=g
if(w==null)w=j.aXa()
g=!1
if(j.cJ==null){v=j.gpm()
if((v==null?i:v.x)==null){g=j.gKv()
g=(g==null?i:g.f)==null}}v=!0
if(!g)if(h!=null)if(w!=null){g=j.d
g===$&&C.c()
v=g.d
v===$&&C.c()
g=v[g.e].c!=="outside"||j.aJ!=null}else g=v
else g=v
else g=v
if(g)return B.I4
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
u.aDK(new A.q(h.f+o*k,1.4,h.r+n*k),B.heC,D.bG,p)
k+=26;++l}}u.f=3
u.d=0.4
u.dN(new A.q(v,0,s),new A.q(v,170,s),4,D.bG,8)
u.dN(new A.q(v,0,s),new A.q(v,1.6,s),24,D.bG,14)
return g},
bGM(){var w,v,u,t,s,r,q,p=this,o=null,n=p.y1,m=new A.e9_(),l=new A.e8Z(),k=x.p
if(n!=null){w=p.aw9()
v=C.a([C.B(C.a([C.h7(D.aC,o,C.d(n.gbeA(),o,o,o,o,o,o,D.pA,o,o,o),o,24),D.bd,C.E(C.x(C.a([C.d(n.gaDU(),o,o,o,o,o,o,D.de,o,o,o),B.fLk],k),D.E,o,D.e,D.i,0,D.p),1),C.aB(o,D.qu,D.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new A.e90(p),o,o,o,o,o,o,!1,D.a4)],k),D.m,o,D.e,D.i,0,o,o),D.ad],k)
for(u=n.gaH7(0),t=0;t<3;++t)v.push(m.$1(u[t]))
u=D.bG.j(0.12)
s=C.m(14)
r=C.J(D.bG.j(0.5),D.r,1)
v.push(C.p(o,C.B(C.a([B.bZH,D.at,C.E(C.d(w==null?"A yellow line on the ground will show you the way.":"Follow the yellow line on the ground. It is about "+C.w(w)+" metres away.",o,o,o,o,o,o,D.oI,o,o,o),1)],k),D.m,o,D.e,D.i,0,o,o),D.f,o,o,new C.o(u,o,r,s,o,o,D.n),o,o,o,D.l6,D.bS,o,o,o))
v.push(l.$5$primary(A3.H5,"Show me the way",D.bG,new A.e91(p),!0))
v.push(l.$4(B.bM_,"Take me there",D.bj,new A.e92(p,n)))
v.push(l.$4(D.jV,"Later",D.aC,new A.e93(p,n)))
q=C.x(v,D.ak,o,D.e,D.P,0,D.p)}else q=C.x(C.a([B.f1e,D.ad,m.$1("Hello, this is the City office. A few calls were missed."),m.$1("Please answer the phone, so you can keep working."),m.$1("Every call is a person who needs help. Thank you for answering!"),l.$5$primary(D.hw,"OK, I will answer",D.bj,new A.e94(p),!0)],k),D.ak,o,D.e,D.P,0,D.p)
k=D.w.j(0.55)
v=C.m(28)
return C.p(D.A,C.eN(D.A,C.p(o,q,D.f,o,o,new C.o(o,o,C.J(D.aZ,D.r,1),v,B.dqw,B.zd,D.n),o,o,o,D.bA,D.bQ,o,o,330),D.f,D.e2),D.f,k,o,o,o,o,o,o,o,o,o,o)},
cuw(){var w,v,u,t,s=this,r=s.d
r===$&&C.c()
w=r.d
w===$&&C.c()
v=w[r.e].BU(s.Q)
if(v==null)return
u=B.dyl.h(0,v.b)
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
w=s.ghJ()
if(w!=null)w.r+=u
s.m(s.giV())
s.eh("Sold for "+C.w(u)+" points.",!0)},
A4(d){return this.bHR(d)},
bHR(d){var w=0,v=C.j(x.H),u,t=this,s
var $async$A4=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return C.b(C.bV(D.L,null,new A.e9r(d),s,!0,!0,!0,null,!1,!1,x.H),$async$A4)
case 3:if(t.c==null){w=1
break}t.m(new A.e9s(t))
case 1:return C.h(u,v)}})
return C.i($async$A4,v)},
cra(d){var w,v,u=this.ghJ()
if(u!=null){w=u.c
w===$&&C.c()
w=d>=w.length}else w=!0
if(w)return C.f8(null,x.H)
w=u.c
w===$&&C.c()
v=w[d]
w=this.c
w.toString
return C.bV(E.lA,null,new A.ebM(this,v,u),w,!0,!0,!0,D.k2,!1,!1,x.H)},
azi(d){var w=this.c
w.toString
return C.bV(E.lA,null,new A.ebw(this,d),w,!0,!0,!1,D.k2,!1,!1,x.H)},
cDM(){var w=this.c
w.toString
return C.bV(E.lA,null,new A.ecI(this),w,!0,!0,!0,D.k2,!1,!1,x.H)},
cDa(){var w=this.c
w.toString
return C.bV(D.L,null,new A.ecu(this),w,!0,!0,!0,null,!1,!1,x.H)},
b7r(d,e){var w,v,u,t=this,s=t.dx
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
if(e){s=new A.aWx(!0,w,d,C.a([],s))
s.b_3()}else{s=new A.aWx(!1,w,d,C.a([],s))
s.b_3()}t.cx=s
t.cy=t.CW.gi9()/1000
t.x=!0
t.r="look"
t.w=!1
s=D.d.gI(t.cx.d)
t.bj.a7(0)
t.b8=!1
t.m(new A.ec5(t,s.a))
t.xY()
t.dx=C.df(D.jf,new A.ec6(t))
t.m(new A.ec7())},
cyZ(d){return this.b7r(d,!1)},
bNE(d,e){var w,v=d.w[e],u=v.b
A:{if("left"===u){w=new A.q(-d.gex(0)/2,40,v.c+d.ghq(0)/2-40)
break A}if("right"===u){w=new A.q(d.gex(0)/2,40,v.c+d.ghq(0)/2-40)
break A}w=new A.q(v.c,40,0)
break A}return w},
cDb(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=i.cx
if(h==null||i.c==null)return
w=i.CW.gi9()/1000-i.cy
v=h.e
v===$&&C.c()
if(w>=v){i.S9()
i.iE("The tour is over. Press Tour to walk the house again.")
return}if(i.b8)return
u=h.bbN(w)
v=i.d
v===$&&C.c()
t=v.e
if(u.a!==t){i.ajD(u)
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
if(t&&v<s.w.length){o=1.25*D.dV.av(0,D.k.E(u.ay,0,1))
q=s.ax
n=q.h(0,v)
if((n==null?0:n)!==o){q.n(0,v,o)
p=!0}}q=u.at
if(D.a.a0(q,"ad")&&i.bj.M(0,q)){s.p3=D.o.F(s.p3+1,8)
A.fW(1000,50,0.25,"tri")
p=!0}if(p)i.m(i.giV())
m=Math.max(s.gex(0)*0.95,s.ghq(0)*1.15)+20
t=t&&v<s.w.length
q=u.b
if(t){l=i.bNE(s,v)
k=D.dx.av(0,D.k.E(u.ay,0,1))
j=s.w[v].b
v=i.e
v===$&&C.c()
t=j==="back"?14:0
if(j==="left")n=0.55*k
else n=j==="right"?-0.55*k:-0.03
v.hR(m+(70-m)*k,0.2-0.07*k,new A.q(l.a*0.9+q*0.1,36,l.c+t),n)}else{v=i.e
v===$&&C.c()
v.hR(m,0.24,new A.q(q*0.7,30,u.c*0.6+8),-0.05-q/(s.gex(0)/2)*0.2)}if(u.as!==i.dy)i.m(new A.ecv(i,u))},
ajD(d){return this.cD9(d)},
cD9(d){var w=0,v=C.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j
var $async$ajD=C.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:l={}
r.b8=!0
l.a=null
t=4
p=$.aV.al$.x.h(0,r.a_)
p=p==null?null:p.gbd()
q=x.cU.a(p)
p=q
p=p==null?null:p.m5(0.6).d7(0,D.iU)
j=l
w=7
return C.b(x.fa.b(p)?p:C.dU(p,x.eT),$async$ajD)
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
n[p.e].ax.a7(0)
r.axB(d.a,!0)
p=r.d
n=p.d
n===$&&C.c()
m=n[p.e]
p=d.ch
if(p>=0&&p<m.w.length)m.ax.n(0,p,1.25)
r.m(new A.eck(l,r))
l=r.e
l===$&&C.c()
l.d=new A.q(d.b,36,d.c+4)
l.c=70
l.a=-0.03
l.b=0.15
r.b8=!1
case 1:return C.h(u,v)
case 2:return C.f(s.at(-1),v)}})
return C.i($async$ajD,v)},
S9(){var w,v,u,t=this,s=t.dx
if(s!=null)s.a4(0)
t.dx=null
s=t.d
s===$&&C.c()
s=s.d
s===$&&C.c()
w=s.length
v=0
for(;v<s.length;s.length===w||(0,C.M)(s),++v){u=s[v]
u.at.a7(0)
u.ax.a7(0)}t.aA=null
t.b8=!1
t.m(new A.ecc(t))
t.xY()},
clT(){var w,v,u,t,s,r,q,p,o,n=this,m=n.cx
if(m!=null)return m.bbN(n.CW.gi9()/1000-n.cy)
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
return A.atM(n.c6.d>0,0,-1,"",!1,o,"",-1,q,!1,!1,!1,v.a,p,r,u,s,t)}return null},
b8a(){var w,v=this,u=v.c6,t=u.r
if(t<=0)return
u.r=0
w=v.ghJ()
if(w!=null)w.r=Math.max(0,w.r-t)
if(v.c!=null)v.m(new A.ecd())},
a2H(){var w,v=this,u=v.d
u===$&&C.c()
w=u.d
w===$&&C.c()
u=w[u.e]
if(u.c!=="outside")return
w=v.aC;(w==null?v.aC=A.hmg(u,0,24):w).MA(0)
v.aN=!0
v.bM=Date.now()
u=v.b1
if(u!=null)u.bR(0)
u=new A.a5l(v.gcFR(),D.ZN)
u.h2(0)
v.b1=u
v.m(new A.ec4())
v.iE("Slide the round stick to walk. Walk up to a door to go in: the house, the hospital or the shop. Double tap a spot to go there.")},
a2L(){var w,v=this
v.aN=!1
v.be=v.b0=0
v.bi=!1
w=v.b1
if(w!=null)w.bR(0)
v.b1=null
w=v.aC
if(w!=null)w.x=!1
v.m(new A.ecb())},
cFS(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.aJ,e=f==null
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
w.MA(0)
w.z=g.bi&&g.bG==null
if(g.bG==null)w.aJp()
w.cOG(s)
v=g.e
v===$&&C.c()
r=Math.sin(v.a)
q=Math.cos(g.e.a)
v=g.be
u=g.b0
p=g.bG==null
o=g.c6
n=p?o.c>0:o.b<=0
if(p)w.ch=o.d>0?0.28:1
if(n){if((u!==0||v!==0||w.at!=null)&&t-g.c9>6000){g.c9=t
g.eh(p?"You are too tired to walk. Rest a little, or buy some food in a shop.":"The car has no gas. Get out, walk to a gas station and buy gas.",!1)}w.at=null
m=!1}else if(u!==0||v!==0){w.at=null
m=w.aLJ(0,r*v+q*u,-q*v+r*u,s)}else m=w.FF(0,s)
v=!m
if(v)w.x=!1
if(g.bZ===0){u=g.d
u===$&&C.c()
p=u.d
p===$&&C.c()
l=p[u.e].c==="outside"}else l=!1
if(l){u=m&&g.bG==null
k=o.bjM(s,m&&g.bG!=null,u)}else k=null
if(k!=null)g.eh(k,!1)
g.b8a()
if(!v||w.Q>0){v=g.e
u=w.f
p=w.r
v.as=null
v.d=new A.q(u,30,p)
v.aV()}if(!e){f.cx=g.al
j=f.ft(0,g.ghJ())
g.al=f.cx
if(j!=null){g.iE(j)
g.m(g.giV())}if(f.cy){f.cy=!1
g.Yz(f)}if(f.dx){f.dx=!1
if(!g.id)g.m(new A.ecT(g))}if(f.db){f.db=!1
if(!g.k2)g.m(new A.ecU(g))}if(f.w){f.w=!1
if(!g.k3)g.m(new A.ecV(g))}e=f.x
if(e!==g.k4){g.k4=e
v=g.e
if(e)v.hR(330,0.35,B.h0B,1.35)
else v.hR(170,0.4,new A.q(0,30,110),0)}e=f.at
e===$&&C.c()
v=!1
if(e.r>308)if(Math.abs(e.f)<36)e=!(f.a==="tower"&&f.f>1)
else e=v
else e=v
if(e)g.aXr()
if(!g.k4&&g.ok==null)g.c1a()
return}e=!1
if(g.bG==null){e=g.gpm()
e=(e==null?null:e.x)!=null}if(e){e=g.gpm()
e.toString
g.aRX(e.bkm(w.f,w.r,g.CW.gi9()/1000))}e=!1
if(g.bG==null){e=g.d
e===$&&C.c()
v=e.d
v===$&&C.c()
e=v[e.e].c==="outside"&&g.ok==null&&g.bZ===0}if(e){e=$.aRG()
e.FF(0,g.CW.gi9()/1000)
i=e.cR_(w.f,w.r)
if(i>=0)g.crZ(i)}e=g.bG
if(e!=null)g.cDT(w)
if(m&&g.bG==null){if(Math.abs(w.f)<24){e=w.r
e=e>-2&&e<14}else e=!1
if(e)if(!(Math.abs(w.w)>2.2)){e=w.at
e=e!=null&&e.b<4}else e=!0
else e=!1
if(e){g.a2L()
g.AB(10)
g.iE("You are inside the living room. Use Go outside to come back out.")
return}e=g.d
e===$&&C.c()
v=e.d
v===$&&C.c()
e=D.d.gaf(v[e.e].x)
v=new C.f5(e,new A.ecW())
while(v.C()){u=e.gT(0)
h=A.vy(new A.q(0,0,B.hz.h(0,u.b).d/2+10),u.e*3.141592653589793/2)
if(Math.abs(w.f-(u.c+h.a))<22&&Math.abs(w.r-(u.d+h.c))<16){g.ab1(u)
return}}}g.cEb(w)},
c1a(){var w,v,u,t,s,r,q,p,o,n,m=this,l=m.e
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
if(s!==w)l.bnW(s)},
ab1(d){var w,v,u,t,s,r,q=this
q.be=q.b0=0
w=d.b
if(w==="store"||w==="gasstation")w="shop"
else if(w==="hq")w="tower"
v=q.d
v===$&&C.c()
u=v.d
u===$&&C.c()
t=d.a
s=A.h_1(w,d,u[v.e].k4.t(0,t))
s.cx=q.al
s.B(q.ghJ())
q.ajf(s,q.gIz().h(0,t))
s.B(q.ghJ())
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
v.r9(!0)
q.e.hR(170,0.4,new A.q(0,30,110),0)
q.m(q.giV())
A:{if("hospital"===w){w="The hospital. Walk onto the blue mat to admit the sick, and up to a bed to treat the patient. Walk to the green mat to go out."
break A}if("dmv"===w){w="The licence office. Walk onto the blue mat at the desk to get your Uber licence. Walk to the green mat to go out."
break A}if("tower"===w){w="The lobby of an office tower. Walk onto the blue mat (or tap the elevator) to choose a level. Walk to the green mat to go out."
break A}if("house2"===w||"bighouse"===w){w="The house. Walk onto the red or green mat at the breaker panel. Walk to the green mat to go out."
break A}if("school"===w){w="The school. Walk onto the mats to teach the class or read in the library. Walk to the green mat to go out."
break A}if("firestation"===w){w="The fire station. Walk onto the mats to check the equipment. Walk to the green mat to go out."
break A}w="The shop. Walk onto the yellow mat for food and the purple mat for medicine. Walk to the green mat to go out."
break A}q.iE(w)
A.fW(660,80,0.25,"tri")},
aXr(){var w,v,u,t=this,s=t.aJ,r=t.aC
if(s==null||r==null)return
w=s.b
v=B.hz.h(0,w.b)
v.toString
t.al=s.cx
t.aJ=null
t.be=t.b0=0
u=A.vy(new A.q(0,0,v.d/2+30),w.e*3.141592653589793/2)
r.f=w.c+u.a
r.r=w.d+u.c
r.w=0
r.at=null
r.MA(0)
t.m(t.giV())
t.xY()
v=t.e
v===$&&C.c()
v.apN(new A.q(r.f,30,r.r))
t.iE("You are back in the city.")},
cEb(d){var w,v,u,t,s,r,q,p,o,n,m=this,l={}
l.a=null
w=m.bG==null
v=!1
if(!w||m.al==null){u=m.c6.b
if(u<(!w?0.7:0.99)){u=m.d
u===$&&C.c()
t=u.d
t===$&&C.c()
u=D.d.b2(t[u.e].x,new A.ecM(d))
v=u}}if(v)l.a=new C.Gk(new A.ecN(m),"\u26fd Buy gas ("+A.h7B(m.c6.b)+" \u2b50)")
else if(!w)l.a=new C.Gk(m.gbTh(),"\ud83d\udeaa Get out")
else{if(m.al!=null)l.a=new C.Gk(m.gc7U(),"\u2b07 Put the crate down")
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
p=B.hz.h(0,t).a.toLowerCase()
if(l.a!=null)break
if(t==="crate"&&q<46){l.a=new C.Gk(new A.ecO(m,r),"\ud83d\udce6 Pick up the crate")
break}if(t==="pole"||t==="lamppost"){o=m.d
n=o.d
n===$&&C.c()
o=n[o.e].k3.t(0,r.a)&&q<60}else o=!1
if(o){l.a=new C.Gk(new A.ecP(m,r),"\ud83d\udd27 Fix the street light")
break}if(D.d.t(B.HV,t)&&q<36){l.a=new C.Gk(new A.ecQ(m,r),"\ud83c\udf4e Feed the "+p)
break}if(D.d.t(B.df3,t)&&q<60){l.a=new C.Gk(new A.ecR(m,r),"\ud83d\ude97 Get in the "+p)
break}}}w=l.a
w=w==null?null:w.b
u=m.cL
if(w!=(u==null?null:u.b))m.m(new A.ecS(l,m))},
bQu(d){var w,v=this,u=v.cl,t=d.a,s=u.h(0,t),r=B.hz.h(0,d.b).a
if(s!=null&&v.CW.gi9()/1000-s<30){v.eh("The "+r.toLowerCase()+" has just eaten. Come back in a little while.",!1)
return}u.n(0,t,v.CW.gi9()/1000)
u=v.ghJ()
if(u==null)w=null
else{++u.r
w="You fed the "+r.toLowerCase()+". +1 point."
u.PQ(w)}if(w==null)w="You fed the "+r.toLowerCase()+"."
A.fW(880,90,0.25,"tri")
v.m(new A.ea4())
v.iE(w)},
bT6(d){var w=this,v=w.aC
if(v==null)return
w.bG=d
v.CW=d.a
v.ay=22
v.ch=2.4
v.f=d.c
v.r=d.d
v.w=Math.atan2(Math.cos(d.e*3.141592653589793/2),-Math.sin(d.e*3.141592653589793/2))
v.at=null
v.MA(0)
w.m(w.giV())
w.iE("You are driving the "+B.hz.h(0,d.b).a.toLowerCase()+". Slide the stick to drive. Press Get out to stop.")
A.fW(300,120,0.25,"tri")},
bTi(){var w,v,u,t,s,r,q=this,p=q.bG,o=q.aC
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
o.MA(0)
for(w=[46,62,80],u=0;u<3;++u){t=w[u]
s=o.f+Math.sin(v)*t
r=o.r+Math.cos(v)*t
if(!o.KN(s,r)){o.f=s
o.r=r
break}}o.aJp()
q.m(q.giV())
q.iE("You got out.")},
bOk(){var w=this.bG,v=this.aC
if(w==null||v==null)return null
return new C.ea([w.b,v.f,v.r,v.w,w.f])},
yd(d){return this.cnZ(d)},
cnZ(d){var w=0,v=C.j(x.H),u=1,t=[],s=[],r=this,q
var $async$yd=C.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:++r.bZ
u=2
q=r.c
q.toString
w=5
return C.b(C.a4(q,!1).cd(d),$async$yd)
case 5:s.push(4)
w=3
break
case 2:s=[1]
case 3:u=1;--r.bZ
w=s.pop()
break
case 4:return C.h(null,v)
case 1:return C.f(t.at(-1),v)}})
return C.i($async$yd,v)},
Z0(){var w=0,v=C.j(x.H),u=1,t=[],s,r,q
var $async$Z0=C.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
w=6
return C.b(C.az(),$async$Z0)
case 6:s=e
w=C.eB(J.r(s.a,"ngmy_city_locked_until"))!=null?7:8
break
case 7:w=9
return C.b(J.hz(s,"ngmy_city_locked_until"),$async$Z0)
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
return C.i($async$Z0,v)},
aBJ(d){var w=this,v=++w.hL
if(v>=3){w.hL=0
w.B4()
w.b0x()}else if(v===2){w.eh(d+". That is two in a row.",!1)
w.b0x()}else w.eh(d+". Answer the phone and finish the job, or you lose your place.",!1)},
b0x(){A.fW(1046,160,0.3,"sine")
this.m(new A.eaL(this))},
gaX_(){return this.bZ>0||this.cJ!=null||Date.now()<0||this.p4},
c7Y(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this,a2=a1.d
a2===$&&C.c()
a2=a2.d
a2===$&&C.c()
w=D.d.fP(a2,new A.eaI())
v=a1.ghJ()
a2=x._
u=C.a([],a2)
for(t=w.x,s=t.length,r=w.k4,q=0;q<t.length;t.length===s||(0,C.M)(t),++q){p=t[q]
o=p.b
if(o==="house2"||o==="bighouse"){o=p.a
o=!r.t(0,o)&&o!==a1.je}else o=!1
if(o)u.push(p)}s=C.a([],a2)
for(o=t.length,n=w.k3,q=0;q<t.length;t.length===o||(0,C.M)(t),++q){p=t[q]
m=p.b
if((m==="pole"||m==="lamppost")&&!n.t(0,p.a))s.push(p)}l=new C.Z(t,new A.eaJ(),C.T(t).k("Z<1>"))
k=C.a([0,1,2,3],x.t)
o=a1.iN
D.d.dZ(k,o)
a2=C.a([],a2)
for(m=t.length,j=w.cy,q=0;q<t.length;t.length===m||(0,C.M)(t),++q){p=t[q]
i=p.b
if((i==="tower"||i==="hq")&&!j.aj(0,p.a))a2.push(p)}for(t=k.length,m=v!=null,q=0;q<k.length;k.length===t||(0,C.M)(k),++q){h=k[q]
if(h===0&&u.length!==0&&r.a<4){p=u[o.aq(u.length)]
a2=p.a
r.M(0,a2)
a1.je=a2
return new A.Qq(p,p.b==="bighouse"?"the big house":"the house","power","",0)}if(h===1&&m&&!l.gan(0)){i=v.gC6()
g=C.T(i).k("Z<1>")
f=C.C(new C.Z(i,new A.eaK(),g),g.k("L.E"))
i=f.length
if(i!==0){e=f[o.aq(i)]
e.e=!0
e.c=Math.min(e.c,70)
d=l.gaf(0)
if(!d.C())C.b8(C.fs())
return new A.Qq(d.gT(0),"the hospital","sick",e.a.b,0)}}if(h===3&&a2.length!==0&&j.a<3){p=a2[o.aq(a2.length)]
a0=2+o.aq(A.hxL(p)-1)
j.n(0,p.a,a0)
return new A.Qq(p,p.b==="hq"?"the NGMY company building":"the office tower","office","",a0)}if(h===2&&s.length!==0&&n.a<4){p=s[o.aq(s.length)]
n.M(0,p.a)
return new A.Qq(p,"the street","light","",0)}}return null},
aX9(d){var w,v,u,t=this.d
t===$&&C.c()
t=t.d
t===$&&C.c()
w=D.d.fP(t,new A.eau())
switch(d.c){case"power":return!w.k4.t(0,d.a.a)
case"light":return!w.k3.t(0,d.a.a)
case"office":return!w.cy.aj(0,d.a.a)
default:v=this.ghJ()
if(v==null)return!1
t=v.c
t===$&&C.c()
u=new C.Z(t,new A.eav(d),C.T(t).k("Z<1>"))
if(!u.gaf(0).C())return!0
return u.gI(0).r>=0||!u.gI(0).e||!u.gI(0).f}},
Sn(d){var w,v,u,t=this,s=t.aC
if(s!=null){w=t.d
w===$&&C.c()
v=w.d
v===$&&C.c()
w=v[w.e].c!=="outside"}else w=!0
if(w)return
if(t.aJ!=null)t.aXr()
s.at=null
s.MA(0)
u=t.bS1(d,s)
s.f=u.a
s.r=u.b
s.aJp()
w=t.e
w===$&&C.c()
w.xi(170,new A.q(s.f,30,s.r))
if(!t.aN)t.a2H()},
bS1(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=d.b,i=B.hz.h(0,j)
i.toString
w=B.aQm.t(0,j)
v=w?i.d/2+32:34
u=A.vy(new A.q(0,0,1),d.e*3.141592653589793/2)
j=u.c
i=u.a
t=-i
s=C.a([],x.f)
if(w)for(r=0;r<5;++r)for(q=v+B.dbV[r],p=i*q,q=j*q,o=0;o<5;++o){n=B.d19[o]
s.push(new C.z(d.c+p+j*n,d.d+q+t*n))}else for(m=0;m<12;++m){l=m*3.141592653589793/6
s.push(new C.z(d.c+Math.cos(l)*v,d.d+Math.sin(l)*v))}for(j=s.length,r=0;r<s.length;s.length===j||(0,C.M)(s),++r){k=s[r]
if(!e.KN(k.a,k.b))return k}return D.d.gI(s)},
cyO(d){var w,v,u=this
u.cJ=d
u.hM=0
u.Sn(d.a)
w=d.c
A:{if("sick"===w){v="New job: "+d.d+" is sick. Go into the hospital and onto the desk."
break A}if("light"===w){v="New job: a street light is out. Tap the dark light to fix it."
break A}v="New job: a house has no power. Walk in and fix it at the panel."
break A}u.eh(v,!0)
u.m(new A.ec_())},
bTR(d){var w,v=this,u=v.d
u===$&&C.c()
w=u.d
w===$&&C.c()
if(w[u.e].c!=="outside")return
v.Sn(d)
u=d.b
if(u==="house2"||u==="bighouse")v.ab1(d)
else if(u==="tower"||u==="hq"){v.ab1(d)
v.m(new A.eao(v))}else v.eh(y.Y,!0)},
cDj(){var w,v,u,t=$.aRG(),s=C.a([],x.f),r=this.gpm()
r=r==null?null:r.aml(this.CW.gi9()/1000)
if(r==null)r=B.I3
w=r.length
v=0
for(;v<r.length;r.length===w||(0,C.M)(r),++v){u=r[v]
s.push(new C.z(u.b,u.c))}t.d=s
return A.ik5(this.CW.gi9()/1000)},
crZ(d){var w,v,u,t,s,r=this,q=Date.now()
if(q-r.mJ<1e4)return
r.mJ=q
w=r.aC
if(w==null)return
A.fW(110,600,0.5,"noise")
C.fL()
r.be=r.b0=0
w.at=null
v=r.c6
v.a=Math.min(v.a,0.2)
v.c=v.d=0
u=B.km[d].a==="bus"?"bus":"police car"
v=r.d
v===$&&C.c()
t=v.d
t===$&&C.c()
v=t[v.e].x
t=C.T(v).k("Z<1>")
s=C.C(new C.Z(v,new A.ebO(),t),t.k("L.E"))
if(s.length===0){r.eh("A "+u+" ran you over! Always cross at the zebra crossing when the green walking person shows.",!1)
return}v=r.gpm()
if(v!=null)v.cWu(D.d.gI(s))
r.Sn(D.d.gI(s))
r.ab1(D.d.gI(s))
r.eh("\ud83d\ude91 A "+u+" ran you over! An ambulance brought you to the hospital. Medicine and food are being ordered for you: they are on the Orders board. Cross at the zebra crossing when the green walking person shows.",!1)
r.m(new A.ebP(r))},
aiX(){var w=0,v=C.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g
var $async$aiX=C.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:h=r.d
h===$&&C.c()
if(h.a.length!==0){w=1
break}q=null
p=$.ak_
w=p==null||p.a!==h.b?3:4
break
case 3:t=6
w=9
return C.b(A.aU4(),$async$aiX)
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
break}n=$.ak_
if(n!=null&&n.a===r.d.b)m=n
else{if(q!=null){h=C.aK(J.r(q,"seed"))
h=h==null?null:D.k.N(h)
if(h==null)h=-1
h=h===r.d.b}else h=!1
if(h)m=A.h_9(q)
else if(q!=null&&r.ej){h=C.aK(J.r(q,"seed"))
l=h==null?null:D.k.N(h)
h=A.aWw(l==null?r.d.b:l)
r.d=$.Ef=h
A.hd_(h,q)
m=A.h_9(q)}else{h=r.d.b
m=A.h_8(h,h)
m.ND(r.d)}}$.ak_=m
for(h=m.d,k=h.length,j=r.bJ,i=0;i<h.length;h.length===k||(0,C.M)(h),++i)j.M(0,h[i].a)
r.m(new A.ec0(r))
r.bv=C.df(D.fA,new A.ec1(r))
case 1:return C.h(u,v)
case 2:return C.f(s.at(-1),v)}})
return C.i($async$aiX,v)},
c7X(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=i.ghJ()
if(h==null||i.c==null)return
if(i.cx==null){w=i.d
w===$&&C.c()
h.aDn(0,1,w)}if(++i.bX%8===0){w=i.d
w===$&&C.c()
h.CU(0,w)}if(i.aJ!=null&&i.gake())i.asC()
w=!1
if(!i.aN)if(i.bZ===0){v=i.d
v===$&&C.c()
u=v.d
u===$&&C.c()
if(u[v.e].c==="outside"){w=i.c6
w=w.c>0||w.d>0}}if(w){t=i.c6.a6T(1)
if(t!=null)i.eh(t,!1)
i.b8a()}if(i.aN){w=i.d
w===$&&C.c()
v=w.d
v===$&&C.c()
w=v[w.e].c==="outside"&&!i.c6.f&&i.iN.aq(240)===0}else w=!1
if(w){w=i.c6
w.f=!0
w.aV()
i.eh("You feel unwell: a headache. You tire faster until you take pills from a shop.",!1)}if(Date.now()<0||i.bZ>0)return
w=!1
if(D.o.F(i.bX,45)===20){v=i.d
v===$&&C.c()
if(v.a.length===0){w=v.d
w===$&&C.c()
v=w[v.e].c==="outside"
w=v}}if(w)i.c5m()
w=i.d
w===$&&C.c()
if(w.a.length===0){v=w.d
v===$&&C.c()
v=v[w.e].c==="outside"}else v=!1
if(v){w=i.gpm()
s=w==null?null:w.FF(0,i.CW.gi9()/1000)
if(s!=null)i.eh("\ud83c\udfc1 "+s,!0)
r=i.aC
if(r!=null){w=i.gpm()
w=(w==null?null:w.x)!=null&&i.aJ==null}else w=!1
if(w){w=i.gpm()
w.toString
i.aRX(w.bkm(r.f,r.r,i.CW.gi9()/1000))}q=i.cJ
if(q!=null){++i.hM
if(i.aX9(q)){i.hL=0
i.lf=Date.now()
i.lz=0
i.cJ=null
i.hM=0
if(q.c==="sick"){p=10+i.iN.aq(26)
w=i.ghJ()
if(w!=null)w.r+=p
i.eh("The sick person is at the hospital. +"+p+" stars. Well done.",!0)}if(i.c!=null)i.m(i.giV())}else if(i.hM>=240){i.cJ=null
i.hM=0
i.aBJ("The job was not finished in time")}}else{w=i.eL
if(w.length!==0&&i.aJ==null&&i.bB==null&&i.bC==null&&Date.now()-i.lf>1e4){o=D.d.cA(w,0)
if(!i.aX9(o))i.cyO(o)}else if(i.bB==null&&i.bC==null&&++i.lz>=45)i.cuR()}}else{v=w.d
v===$&&C.c()
if(v[w.e].c!=="outside")i.lz=0}for(w=h.d,v=w.length,u=i.bJ,n=0;n<w.length;w.length===v||(0,C.M)(w),++n){m=w[n]
l=i.d
k=l.d
k===$&&C.c()
if(k[l.e].c!=="outside")continue
if((i.bZ>0||i.cJ!=null||Date.now()<0||i.p4)&&!u.t(0,m.a))continue
if(u.M(0,m.a)){i.lz=0
i.bB=m
i.bC=null
i.b7k()}}u.pp(new A.eaB(h),!0)
j=i.bB
if(j!=null&&!D.d.b2(w,new A.eaC(j)))i.B4()},
cuR(){var w,v,u=this
u.lz=0
w=u.c7Y()
if(w==null)return
if(u.gaX_()){v=u.eL
if(v.length<3)v.push(w)
return}u.b4z(w)},
b4z(d){var w=this
w.lz=0
w.bB=null
w.bC=d
w.b7k()},
b7k(){var w,v=this
v.S=0
w=v.P
if(w!=null)w.a4(0)
v.P=C.df(D.rn,new A.ec2(v))
v.m(new A.ec3())},
B4(){var w=this,v=w.P
if(v!=null)v.a4(0)
w.P=null
if(w.c==null)return
w.m(new A.eca(w))},
chn(){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null
if(l.ok!=null)return k
if(l.aN){w=l.d
w===$&&C.c()
v=w.d
v===$&&C.c()
u=v[w.e].c==="outside"}else u=!1
t=l.bB
s=l.bC
if(!u&&t==null&&s==null)return k
r=l.ez
w=new A.eb_()
v=new A.eb8(r)
q=x.p
p=C.a([],q)
if(s!=null){o=C.h7(D.aC,k,C.d(s.gbeA(),k,k,k,k,k,k,D.nK,k,k,k),k,28)
n=s.gaDU()
p.push(v.$7$about$avatar$glow$onAnswer$onDecline$onLater$who(s.gbqV(),o,D.bG,new A.eb1(l,s),new A.eb2(l),new A.eb3(l,s),n))}if(t!=null){o=B.CK[t.b]
n=o.b
p.push(v.$6$about$avatar$glow$onAnswer$onDecline$who("NGMY City \xb7 mobile",C.h7(o.e.c,k,C.d(n[0],k,k,k,k,k,k,D.K_,k,k,k),k,28),D.bj,new A.eb4(l,t),l.gczj(),n))}if(u){v=C.a([],q)
o=l.cL
if(o!=null)v.push(w.$3$col("\u270b "+o.b,o.a,D.bG))
o=C.a([],q)
if(l.bG==null){n=l.bi
m=n?"\ud83c\udfc3 Run: on":"\ud83c\udfc3 Run"
o.push(w.$3$on(m,new A.eb5(l),n))}if(l.bG==null)o.push(w.$3$col("\u2b06 Jump",new A.eb6(l),D.cp))
v.push(C.B(o,D.m,k,D.e,D.P,0,k,k))
w=l.bG==null
o=w?206:140
v.push(new C.D(D.a_M,new C.a6(o,k,new A.UE(l.c6,!w,12,k),k),k))
p.push(new C.D(B.bBp,C.B(C.a([new A.aJ5(new A.eb7(l),k),C.x(v,D.dH,k,D.e,D.P,0,D.p)],q),D.dH,k,D.iG,D.i,0,k,k),k))}return new C.a6(r,k,C.x(p,D.m,k,D.e,D.P,0,D.p),k)},
aTP(){var w=this.d
w===$&&C.c()
if(w.a.length!==0)this.En()
else this.a0q()},
En(){var w=0,v=C.j(x.H),u,t=this,s,r,q,p
var $async$En=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:p=t.d
p===$&&C.c()
s=p.d
s===$&&C.c()
r=s[p.e]
if(r.gz6()){t.iE("This lesson is done. Try everything: it all works.")
w=1
break}p=r.p4
w=p==="ptrap"||p==="faucet"?3:5
break
case 3:if(r.RG==null)r.RG=A.h2R()
w=6
return C.b(t.yd(C.dZ(new A.eaM(r),!1,null,x.H)),$async$En)
case 6:w=4
break
case 5:if(r.R8==null)r.R8=new A.CE(C.U(x.S,x.N))
w=7
return C.b(t.yd(C.dZ(new A.eaN(r),!1,null,x.H)),$async$En)
case 7:case 4:if(t.c==null){w=1
break}t.m(t.giV())
if(r.gz6()){p=t.ghJ()
if(p!=null)p.r+=10
q=r.p4
A:{p="Done! Tap the outlet and plug something in."
if("switch"===q){p="Done! Tap the switch on the wall: the light comes on."
break A}if("fan"===q){p="Done! Tap the wall switch and the fan spins."
break A}if("outlet"===q||"gfci"===q)break A
s=D.d.t(B.jW,q)
if(s){p="Done! Tap the switch on the wall: it works."
break A}s=D.d.t(B.lJ,r.p4)
if(s)break A
p="Done! The sink works."
break A}t.iE(p)}case 1:return C.h(u,v)}})
return C.i($async$En,v)},
akd(d){return this.cGi(d)},
cGi(d){var w=0,v=C.j(x.H),u,t=this,s,r,q,p
var $async$akd=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:p=t.d
p===$&&C.c()
s=p.d
s===$&&C.c()
r=s[p.e].id[d]
q=r.gwE()
w=3
return C.b(t.yd(C.dZ(new A.ecX(r),!1,null,x.H)),$async$akd)
case 3:if(t.c==null){w=1
break}t.m(t.giV())
if(r.gwE()&&!q){p=t.ghJ()
if(p!=null)p.r+=8}if(r.gwE()){p=q?"":"You are paid 8 stars. "
s=r.a==="switch"?"Tap it to turn the light on and off.":"Tap it to plug something in."
t.iE("Wired! "+p+s)}case 1:return C.h(u,v)}})
return C.i($async$akd,v)},
a0q(){var w=0,v=C.j(x.H),u,t=this,s,r,q,p,o,n
var $async$a0q=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:n=t.d
n===$&&C.c()
s=n.d
s===$&&C.c()
r=s[n.e]
if(r.c==="outside"){w=1
break}s=r.CW
if(s==null){q=A.csF(A.ikX(r),r.b,!1,n.b*37+r.a,!1)
q.am9()
if(!r.ay)q.cJm()
r.CW=q
n=q}else n=s
n.b=t.d.c
p=r.gkN()
w=3
return C.b(t.yd(C.dZ(new A.eaP(r),!1,null,x.H)),$async$a0q)
case 3:if(t.c==null){w=1
break}t.m(t.giV())
if(r.gkN()&&!p){o=10+t.iN.aq(26)
n=t.ghJ()
if(n!=null)n.r+=o
n=r.gjQ()?"":" The room still needs its plumbing, so it stays red until the pipes are done too."
t.eh(r.b+": the wiring is finished and the light has power. You are paid "+o+" stars!"+n,!0)}else if(r.gkN()){n=r.gjQ()?"":" The room still needs its plumbing."
t.iE(r.b+": the wiring is finished. The light has power."+n)}case 1:return C.h(u,v)}})
return C.i($async$a0q,v)},
a0h(){var w=0,v=C.j(x.H),u,t=this,s,r,q,p,o,n
var $async$a0h=C.e(function(d,e){if(d===1)return C.f(e,v)
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
s=r.fr=A.h2Q(!1,n.b*41+r.a,s)
n=s}else n=q
if(!r.ch&&!n.ga3H())r.fr.cJl()
r.fr.b=t.d.c
p=r.gjQ()
w=3
return C.b(t.yd(C.dZ(new A.eaO(r),!1,null,x.H)),$async$a0h)
case 3:if(t.c==null){w=1
break}t.m(t.giV())
if(r.gjQ()&&!p){o=10+t.iN.aq(26)
n=t.ghJ()
if(n!=null)n.r+=o
t.eh(r.b+": the plumbing is finished and nothing leaks. You are paid "+o+" stars!",!0)}else if(r.gjQ())t.iE(r.b+": the plumbing is finished and nothing leaks.")
case 1:return C.h(u,v)}})
return C.i($async$a0h,v)},
bBt(){var w=this.c
w.toString
return C.bV(E.lA,null,new A.e8r(this),w,!0,!0,!1,D.k2,!1,!1,x.H)},
bB7(d){var w,v,u,t,s,r,q,p,o=this,n=o.d
n===$&&C.c()
w=n.d
w===$&&C.c()
v=w[n.e]
n=v.c
if(n==="outside"||n==="hall"){o.eh("Add devices in a room, not in the hall or the garden.",!1)
return}n=v.id
if(n.length>=4){o.eh("This room already has four added devices.",!1)
return}w=C.a([-v.gex(0)/4,v.gex(0)/4],x.n)
for(u=v.w,t=D.d.gaf(u),s=new C.f5(t,new A.e8l());s.C();)w.push(t.gT(0).c)
for(u=D.d.gaf(u),t=new C.f5(u,new A.e8m());t.C();)w.push(u.gT(0).c+24)
for(u=n.length,r=0;r<n.length;n.length===u||(0,C.M)(n),++r)w.push(n[r].b)
p=-v.gex(0)/2+14
for(;;){if(!(p<=v.gex(0)/2-14)){q=null
break}if(D.d.d_(w,new A.e8n(p))){q=p
break}p+=6}if(q==null){o.eh("There is no free place left on the back wall.",!1)
return}o.m(new A.e8o(o,v,d,q))
o.iE("Added. It is red because it is not wired: tap it to wire it.")},
aen(d,e){var w,v,u=this,t=u.d
t===$&&C.c()
w=t.d
w===$&&C.c()
v=w[t.e].BU(u.Q)
if(v==null)return
u.m(new A.eaF(u,v,D.d.t(B.RH,v.b),d,e))},
c84(){var w,v,u=this,t=u.d
t===$&&C.c()
w=t.d
w===$&&C.c()
v=w[t.e].BU(u.Q)
if(v==null)return
u.m(new A.ecw(u,v))},
cp7(){var w,v,u=this,t=u.d
t===$&&C.c()
w=t.d
w===$&&C.c()
v=w[t.e].BU(u.Q)
if(v==null)return
u.m(new A.ebD(u,v))
u.iE(B.hz.h(0,v.b).a+": "+B.cWo[v.f]+".")},
c82(d){var w,v,u=this,t=u.d
t===$&&C.c()
w=t.d
w===$&&C.c()
v=w[t.e].BU(u.Q)
if(v==null)return
u.m(new A.ebE(u,v))},
bBa(d){var w,v=this,u=v.d
u===$&&C.c()
w=u.d
w===$&&C.c()
v.m(new A.e8p(v,w[u.e].M(0,d)))
v.iE(B.hz.h(0,d).a+" added. Move it with the arrows.")},
AA(d,e,f,g,h){var w=null,v=e?g.j(0.25):D.c.j(0.07),u=C.m(14),t=e?g:D.aZ
t=C.J(t,D.r,e?2:1)
v=C.a([C.p(w,C.d(d,w,w,w,w,w,w,C.l(w,w,e?g:D.c,w,w,w,w,w,w,w,w,11,w,w,D.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),D.f,w,w,new C.o(v,w,t,u,w,w,D.n),w,w,w,w,D.eJ,w,w,w)],x.p)
if(h)v.push(C.ao(w,C.p(w,w,D.f,w,w,new C.o(D.aw,w,C.J(B.Fu,D.r,2),w,w,w,D.a6),w,11,w,w,w,w,w,11),w,w,w,-2,-3,w))
return new C.D(D.fB,C.aB(w,new C.an(D.a_,w,D.aa,D.f,v,w),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,!1,D.a4),w)},
ij(d,e,f,g){return this.AA(d,e,f,g,!1)},
J4(d,e,f){return this.AA(d,e,f,D.aC,!1)},
aBQ(d,e,f,g){var w=null,v=g==null,u=v?34:w,t=v?w:D.kG,s=C.m(10),r=e?D.c:D.aZ
r=C.J(r,D.r,e?3:1)
if(v)v=w
else v=C.at(C.d(g,w,w,w,w,w,w,C.l(w,w,d.jt()>0.5?D.w:D.c,w,w,w,w,w,w,w,w,12,w,w,D.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,w,w)
return new C.D(E.u_,C.aB(w,C.p(w,v,D.f,w,w,new C.o(d,w,r,s,w,w,D.n),w,34,w,w,t,w,w,u),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,!1,D.a4),w)},
cAc(d,e,f){return this.aBQ(d,e,f,null)},
Do(d,e){var w=null,v=D.c.j(0.1),u=C.m(10),t=C.J(D.aZ,D.r,1)
return new C.D(D.fB,C.aB(w,C.p(w,C.X(d,D.c,w,w,w,20),D.f,w,w,new C.o(v,w,t,u,w,w,D.n),w,36,w,w,w,w,w,40),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,e,w,w,w,w,w,w,!1,D.a4),w)},
bJA(){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null
if(k.cx!=null){w=k.dy
return C.B(C.a([C.E(C.d("\ud83c\udfac "+(w.length===0?"Walking in":w),j,1,D.a1,j,j,j,B.fmh,j,j,j),1),k.ij("\u23f9 Stop the tour",!0,k.gczm(),D.ct)],x.p),D.m,j,D.e,D.i,0,j,j)}switch(k.r){case"furniture":w=k.d
w===$&&C.c()
v=w.d
v===$&&C.c()
u=v[w.e].BU(k.Q)
w=x.p
v=C.a([],w)
if(u!=null){t=C.a([k.Do(D.l9,new A.e9B(k)),k.Do(D.jT,new A.e9C(k)),k.Do(D.wc,new A.e9D(k)),k.Do(D.ug,new A.e9E(k)),k.Do(G.aoZ,k.gc83()),k.Do(D.nu,k.gcp6())],w)
s=k.d
r=s.d
r===$&&C.c()
if(r[s.e].c==="outside")t.push(k.Do(D.OQ,k.gcuv()))
t.push(k.Do(D.ea,k.gc81(k)))
v.push(new C.a6(j,30,C.cf(t,j,j,j,j,D.aM,!1),j))}else v.push(B.b_4)
w=C.a([],w)
for(t=B.hz.gdS(B.hz),t=t.gaf(t);t.C();){s=t.gT(t)
r=D.d.t(B.dik,s.a)
q=k.d
p=q.d
p===$&&C.c()
if(r===(p[q.e].c==="outside")){r=s.b
w.push(k.ij(r.b+" "+r.a,!1,new A.e9F(k,s),D.b3))}}v.push(new C.a6(j,30,C.cf(w,j,j,j,j,D.aM,!1),j))
return C.x(v,D.m,j,D.e,D.P,0,D.p)
case"walls":w=k.as
v=w<0
w=v?"All walls":"Wall "+(w+1)+": tap Look to reset"
v=C.a([k.J4(w,v,new A.e9G(k))],x.p)
for(o=0;o<8;++o)v.push(k.aBQ(B.azq[o],!1,new A.e9H(k,o),B.dsN[o]))
return new C.a6(j,30,C.cf(v,j,j,j,j,D.aM,!1),j)
case"floor":w=C.a([],x.p)
for(o=0;o<7;++o){v=B.az9[o]
t=k.d
t===$&&C.c()
s=t.d
s===$&&C.c()
w.push(k.aBQ(v.b,s[t.e].Q===o,new A.e9I(k,o),v.a))}return new C.a6(j,30,C.cf(w,j,j,j,j,D.aM,!1),j)
case"ceiling":w=k.d
w===$&&C.c()
v=w.d
v===$&&C.c()
w=v[w.e].go==="fan"?"\ud83c\udf00 Fan (tap for light)":"\ud83d\udca1 Light (tap for fan)"
w=C.a([k.ij(w,!1,new A.e9J(k),D.b9)],x.p)
for(o=0;o<4;++o){v=B.axW[o]
t=k.d
s=t.d
s===$&&C.c()
w.push(k.cAc(v,s[t.e].as===o,new A.e9K(k,o)))}return new C.a6(j,30,C.cf(w,j,j,j,j,D.aM,!1),j)
default:n=C.aX(x.S)
w=C.a([k.ij("\u26f6 Full screen",!1,k.gbPF(),D.aQ)],x.p)
v=k.d
v===$&&C.c()
t=v.d
t===$&&C.c()
if(t[v.e].c==="outside")w.push(k.ij("\ud83d\udcf1 Phone",!1,k.gbPH(),D.c2))
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
r=s.gkN()&&s.gjQ()
w.push(k.AA("\ud83d\udeaa "+s.b,!1,new A.e9L(k,l),D.b3,!r))}}return new C.a6(j,30,C.cf(w,j,j,j,j,D.aM,!1),j)}},
B(d){var w,v=this,u=null
if(Date.now()<0){w=C.dD(0,0,0,0-Date.now(),0,0).a
return C.c7(u,F.nf,C.bl(!0,C.at(new C.D(D.qe,C.x(C.a([B.fMl,D.ad,B.fMs,D.W,B.fMF,D.aA,C.d("It opens again in "+D.o.ao(w,36e8)+"h "+D.o.F(D.o.ao(w,6e7),60)+"m",u,u,u,u,u,u,B.fob,u,u,u),D.dS,C.bE(D.aUe,u,new A.ed_(d),u)],x.p),D.m,u,D.e,D.P,0,D.p),u),u,u,u),!0,!1,D.af,!0,!0),u,!1,!1,u,u)}w=C.a([C.bT(0,new C.ey(v.bFy(d),v.a_),0,0,0)],x.p)
if(v.aA!=null)w.push(C.bT(0,C.dX(C.ls(new A.ed0(v),u,D.dx,D.hs,new C.bG(v.aE,x.ac),new A.ed1(v),new C.bp(1,0,x.g6),x.i),!0,u),0,0,0))
return new C.an(D.a_,u,D.aa,D.t,w,u)},
bHQ(){var w,v,u=this,t=null,s=C.a([],x.p)
if(u.gake())s.push(u.ij("\u2705 Complete work",!0,u.gaQG(),D.be))
w=u.aN
v=w?"\u23f9 Stop walking":"\ud83d\udeb6 Walk the city"
s.push(u.ij(v,w,w?u.gb7D():u.gb7o(),D.bj))
s.push(u.ij("\ud83c\udfd7 Build",!1,u.gaNu(),D.bj))
w=u.ghJ()
w=w==null?t:w.d.length
if(w==null)w=0
s.push(u.AA("\ud83d\udcde Calls",!1,new A.e9d(u),D.c2,w>0))
s.push(u.ij("\ud83c\udfe5 Hospital",!1,new A.e9e(u),D.ct))
s.push(u.ij("\ud83d\uded2 Shop",!1,new A.e9f(u),D.cS))
s.push(u.ij("\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc67 People",!1,new A.e9j(u),D.cp))
s.push(u.ij("\ud83c\udfe0 Go inside",!1,new A.e9k(u),D.bj))
w=u.aJ
if((w==null?t:w.a==="shop")===!0)s.push(u.ij("\ud83d\uded2 Buy things",u.k2,new A.e9l(u),D.bG))
w=u.aJ
if((w==null?t:w.a==="tower")===!0)s.push(u.ij("\ud83c\udfe2 Level "+w.f+" of "+w.gM5(),!1,new A.e9m(u),D.cp))
if(u.cJ!=null)s.push(u.ij("\ud83d\udccb My job"+(u.aw9()==null?"":" \xb7 "+C.w(u.aw9())+" m"),!1,new A.e9n(u),D.bG))
w=u.eL.length
if(w!==0)s.push(u.ij("\u23f3 Waiting: "+w,!1,new A.e9o(u),D.aC))
s.push(u.AA("\ud83d\udef5 Orders",u.gpm().x!=null,new A.e9p(u),D.bG,u.gpm().x==null))
w=u.p4
v=w?"\u23f9 Stop drone":"\ud83d\ude81 Drone"
s.push(u.ij(v,w,new A.e9q(u),D.aQ))
w=u.h5
v=w?"\ud83c\udff7 Show tags":"\ud83c\udff7 Hide tags"
s.push(u.ij(v,w,new A.e9g(u),D.ct))
s.push(u.ij("\ud83d\udc41 Hide all",!1,new A.e9h(u),D.bM))
w=u.gKv()
s.push(u.ij("\ud83d\ude96 Uber",(w==null?t:w.f)!=null,u.gcDR(),D.bG))
s.push(u.ij("\ud83d\uddfa Map",u.y,new A.e9i(u),D.bw))
return s},
gcxu(){var w,v,u,t,s,r,q,p,o=this
if(!o.h5){w=o.f
w===$&&C.c()
return w}w=o.t6
v=o.f
v===$&&C.c()
if(w===v&&o.qS!=null){w=o.qS
w.toString
return w}o.t6=v
w=C.a([],x.E)
for(u=o.f.c,t=u.length,s=0;s<u.length;u.length===t||(0,C.M)(u),++s){r=u[s]
q=!1
if(r.d===0)if(!r.c.A(0,D.bx)){p=r.b
if(!C.cT(p,"rooms still need work",0))q=!C.cT(p,"house is finished",0)}if(q)w.push(r)}u=o.f
return o.qS=new A.tP(v.a,v.b,w,u.d,u.e,0)},
bFy(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d=f.d
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
w=w.a.length!==0?e:new A.e8y(f)
s=f.gcxu()
r=f.e
r===$&&C.c()
q=f.at
p=f.ax
o=f.ay
n=f.ai
if(f.eu)d=62
else if(f.f1)d=C.aJ(a0,e,d).w.r.b+66
else d=f.y&&f.d.a.length===0?104:10
m=f.chn()
l=x.p
k=C.a([],l)
if(f.y&&f.d.a.length===0&&!f.eu)k.push(new A.bjT(f.d,f.gc7W(),Math.min(138,u*0.36),e))
j=A.Yg(n,m,r,new A.e8z(f),new A.e8A(f),o,q,e,e,new A.e8L(),p,d,f.gbNJ(),new A.e8M(f),f.gc8_(),s,t,w,k,e)
i=f.y1!=null||f.y2||f.R8||f.k3||f.go||f.k2||f.id
d=f.ok
h=(d==null?e:d.d)===1
if((i||h)&&!f.ai){d=C.a([j],l)
if(i){if(f.id)w=f.c1P()
else if(f.k2)w=f.cvW()
else if(f.go)w=f.cha()
else if(f.k3)w=f.bP6()
else w=f.R8?f.bOl():f.bGM()
d.push(C.bT(0,w,0,0,0))}if(h)d.push(C.ao(e,C.dX(C.at(new C.jS(f.p3,new A.e8N(),e,e,x.cI),e,e,e),!0,e),e,e,0,0,74,e))
g=new C.an(D.a_,e,D.b0,D.t,d,e)}else g=j
if(f.ai)return f.bI2(g)
if(f.eu)return f.bS4(g)
if(f.f1)return f.cky(g)
d=f.d
if(d.a.length!==0)d=v.gz6()?"Done \u2713":"To do"
else d=""+d.gcOY()+"/"+f.d.gqT().length+" done"
w=f.d
t=w.d
t===$&&C.c()
w=t[w.e].c==="outside"
t=!w?e:new A.UE(f.c6,f.bG!=null,12,e)
if(w)w=f.bHQ()
else{w=f.x?"\ud83d\udd2d See the whole room":"\ud83c\udfe0 Be inside"
w=C.a([f.ij(w,!1,new A.e8O(f),D.b3)],l)
if(f.d.a.length===0){s=f.cx!=null
r=s?"\u23f9 Stop tour":"\ud83c\udfac Tour"
w.push(f.ij(r,s,new A.e8P(f),D.c2))}w.push(f.ij("\u2b06 Look up at the ceiling",!1,f.gc2T(),D.b3))
s=f.z
r=s?"\ud83d\udeb6 Stop looking round":"\ud83d\udd04 Look all round (360)"
w.push(f.ij(r,s,new A.e8Q(f),D.cS))
w.push(f.ij("\ud83d\udcfa TV",!1,f.gcDL(),D.cp))
s=f.d
if(s.a.length===0){r=s.d
r===$&&C.c()
s=r[s.e].c!=="outside"?"\ud83c\udf33 Go outside":"\ud83c\udfe0 Go inside"
w.push(f.ij(s,!1,new A.e8R(f),D.bj))}s=f.d
r=s.d
r===$&&C.c()
if(r[s.e].c==="outside"){s=f.aN
r=s?"\u23f9 Stop walking":"\ud83d\udeb6 Walk about"
w.push(f.ij(r,s,s?f.gb7D():f.gb7o(),D.bj))}if(f.d.a.length===0)w.push(f.ij("\u2795 Add",!1,f.gaNu(),D.bj))
if(f.d.a.length===0){s=f.ghJ()
s=s==null?e:s.d.length
if(s==null)s=0
w.push(f.AA("\ud83c\udfd8 Community",!1,new A.e8S(f),D.c2,s>0))}w.push(f.ij("\ud83d\udd26 Tester",f.w,new A.e8B(f),D.cS))
if(f.d.a.length!==0)w.push(f.AA("\ud83d\udd27 Do the lesson",!1,f.gc7Z(),D.bG,!v.gz6()))
else{s=f.AA("\u26a1 Wiring",!1,f.gch3(),D.bG,!v.gkN())
r=v.c
r=(r==="bathroom"||r==="kitchen")&&!v.gjQ()
D.d.v(w,C.a([s,f.AA("\ud83d\udeb0 Plumbing",!1,f.gcgt(),D.cp,r),f.ij("\ud83d\uddfa Map",f.y,new A.e8C(f),D.bw)],l))}}return A.U9(D.aC,new A.e8D(f,a0),C.x(C.a([new C.a6(e,30,C.cf(w,e,e,e,e,D.aM,!1),e),D.au,new C.a6(e,30,C.cf(C.a([f.J4("\ud83d\udc41 Look",f.r==="look",new A.e8E(f)),f.J4("\ud83d\udecb Furniture",f.r==="furniture",new A.e8F(f)),f.J4("\ud83e\uddf1 Walls",f.r==="walls",new A.e8G(f)),f.J4("\ud83d\udfeb Floor",f.r==="floor",new A.e8H(f)),f.J4("\u2b1c Ceiling",f.r==="ceiling",new A.e8I(f)),f.J4("\ud83d\udeaa Doors",f.r==="doors",new A.e8J(f)),f.ij("\ud83d\udcd8 Learn",!1,new A.e8K(a0),D.bw)],l),e,e,e,e,D.aM,!1),e),D.au,f.bJA()],l),D.E,e,D.e,D.P,0,D.p),g,d,v.b,t)},
cn8(d){return C.bV(E.lA,null,new A.ebC(this),d,!0,!0,!0,D.k2,!1,!1,x.H)}}
A.bjT.prototype={
B(d){var w=null,v=D.k.E((this.e-10)/126,0.5,1),u=D.w.j(0.6),t=C.m(12),s=C.J(D.aZ,D.r,1)
return C.p(w,new C.a6(126*v,84*v,C.aB(w,C.eN(D.A,C.b4(w,w,w,new A.bji(this.c,w),B.f5i),D.f,D.xs),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new A.dvp(this,v),w,w,w,w,!1,D.a4),w),D.f,w,w,new C.o(u,w,s,t,w,w,D.n),w,w,w,w,D.m7,w,w,w)}}
A.bji.prototype={
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
if(t.gkN()&&t.gjQ())m=D.be
else m=!t.gkN()?D.aw:D.d3
l=C.bu(o,D.hA)
$.S()
k=new C.ap(D.R,D.N,D.U,D.V,D.S)
k.r=m.j(t.gkN()&&t.gjQ()?0.35:0.5).gp(0)
j=k.G()
v.drawRRect(C.el(l),j)
j.delete()
l=C.bu(o,D.hA)
k=new C.ap(D.R,D.N,D.U,D.V,D.S)
k.b=D.ab
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
break A}h=new C.jR(new C.eu(l,g,g,D.cQ,g,g,g,g,g,g,B.flu),D.a3,D.bZ,new C.jB(1),g,g,g,g,D.bW,g)
h.el()
l=h.b
k=l.c
l=l.a.c
h.a3(d,new C.t(s+(q-s)/2-k/2,r+(p-r)/2-l.gbb(l)/2))}},
aw(d){return!0}}
A.aJ5.prototype={
R(){return new A.btV()},
bi_(d,e){return this.c.$2(d,e)}}
A.btV.prototype={
aZW(d){var w,v,u={},t=u.a=d.aF(0,B.ehq),s=t.gcI()>46?u.a=t.eU(0,t.gcI()).aI(0,46):t,r=s.a/46,q=-s.b/46,p=Math.sqrt(r*r+q*q)
s=this.a
s.toString
w=p<0.15
v=w?0:r
s.bi_(v,w?0:q)
this.m(new A.f5D(u,this))},
aZV(){this.a.bi_(0,0)
this.m(new A.f5C(this))},
B(d){var w=this,v=null,u=C.p(v,v,D.f,v,v,new C.o(D.w.j(0.42),v,C.J(D.bj.j(0.9),D.r,2.4),v,v,v,D.a6),v,132,v,v,v,v,v,132),t=C.p(v,v,D.f,v,v,new C.o(v,v,C.J(D.bj.j(0.25),D.r,1.5),v,v,v,D.a6),v,66,v,v,v,v,v,66),s=w.d,r=s==null
if(r)s=D.I
return C.nK(D.c9,new C.a6(132,132,new C.an(D.A,v,D.aa,D.t,C.a([u,t,C.dP(C.p(v,v,D.f,v,v,new C.o(D.bj.j(r?0.55:0.9),v,C.J(D.c,D.r,2),v,v,v,D.a6),v,56,v,v,v,v,v,56),s)],x.p),v),v),v,new A.f5E(w),new A.f5F(w),v,new A.f5G(w),v,v,new A.f5H(w))}}
A.f0a.prototype={}
A.Ms.prototype={}
A.Qq.prototype={
gbeA(){var w,v=this.c
A:{if("sick"===v){w="\ud83e\udd12"
break A}if("light"===v){w="\ud83d\udca1"
break A}if("office"===v){w="\ud83c\udfe2"
break A}w="\u26a1"
break A}return w},
gaDU(){var w,v=this.c
A:{if("sick"===v){w=this.d
if(w.length===0)w="A neighbour"
break A}if("light"===v){w="City lights office"
break A}if("office"===v){w="Office manager"
break A}w="Your neighbour"
break A}return w},
gbqV(){var w,v=this.c
A:{if("sick"===v){w="Needs a doctor"
break A}if("light"===v){w="A street light is out"
break A}if("office"===v){w="No power in an office"
break A}w="No power at a house"
break A}return w},
gaH7(d){var w,v=this,u="I will pay you between 10 and 35 stars. Thank you!",t=v.c
A:{if("sick"===t){w=C.a(["Hello! "+v.gaDU()+" is very sick and cannot get up.","Please take them to the hospital: walk into the hospital and onto the desk to admit them.",u],x.s)
break A}if("office"===t){w=""+v.e
w=C.a(["Hello, this is the office manager. The office on level "+w+" of "+v.b+" has lost its power and nobody can work.","Please take the elevator up to level "+w+", and fix the wiring at the breaker panel there.",u],x.s)
break A}if("light"===t){w=C.a(["Hello! A street light is out and the street is dark.","It is the dark one with the red sign. Could you fix its wiring?",u],x.s)
break A}w=C.a(["Hello! All the lights went out in "+v.b+". The power is off in the whole house.","Could you check the breaker panel inside and fix the wiring? Switch the power off before you touch anything.",u],x.s)
break A}return w}}
A.bV6.prototype={}
A.py.prototype={}
A.NL.prototype={
R(){return new A.bkN()}}
A.bkN.prototype={
rD(d){var w=this.c
w.toString
return C.a4(w,!1).cd(C.dZ(new A.dSJ(d),!1,null,x.H))},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null
$.asy="tech"
w=C.aF(m,m,m,m,S.ny,m,m,m,new A.dSK(d),m,m,m,m,m,m)
v=D.aC.j(0.16)
u=C.m(13)
t=x.p
u=C.B(C.a([w,C.p(m,B.b9G,D.f,m,m,new C.o(v,m,C.J(D.aC.j(0.6),D.r,1),u,m,m,D.n),m,40,m,m,m,m,m,40),D.at,B.bEN],t),D.m,m,D.e,D.i,0,m,m)
v=C.m(26)
w=C.J(D.aC,D.r,1.8)
s=x.V
r=C.a([new C.ac(0,D.G,D.aC.j(0.28),D.dr,26)],s)
r=C.aB(m,C.p(m,C.x(C.a([C.p(m,B.ba9,D.f,m,m,new C.o(D.aC.j(0.2),m,C.J(D.aC,D.r,2),m,C.a([new C.ac(0,D.G,D.aC.j(0.5),D.I,22)],s),m,D.a6),m,78,m,m,m,m,m,78),D.ad,B.fFm,D.au,B.fM9,D.aA,C.p(m,B.fFi,D.f,m,m,new C.o(D.aC,m,m,C.m(20),m,m,D.n),m,m,m,m,Y.al3,m,m,m)],t),D.m,m,D.e,D.i,0,D.p),D.f,m,m,new C.o(m,m,w,v,r,B.c2T,D.n),m,m,m,m,D.w_,m,m,m),D.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new A.dSL(n),m,m,m,m,m,m,!1,D.a4)
v=D.w.j(0.6)
w=C.m(16)
w=C.a([r,C.ao(m,C.aB(m,C.p(m,B.fU0,D.f,m,m,new C.o(v,m,C.J(F.fz,D.r,1.4),w,m,m,D.n),m,m,m,m,B.by7,m,m,m),D.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new A.dSM(n),m,m,m,m,m,m,!1,D.a4),m,m,m,10,10,m)],t)
v=n.aZY("JOBS")
r=n.aZX(C.a([n.vM("\ud83d\udd0c","Wire a room","Go to a room that needs wiring",D.be,new A.dSQ(n)),n.vM("\ud83d\udebd","Plumb a room","Go to a bathroom or kitchen",D.aQ,new A.dSR(n)),n.vM("\ud83d\udd27","Fix a house","Walk the house and fix every sign",D.aC,new A.dSS(n)),n.vM("\ud83e\uddf1","Build a room","Frame, drywall, then wire",D.bj,new A.dST(n)),n.vM("\u26a1","Wiring bench","Just the wiring, one room",D.bG,new A.dSU(n)),n.vM("\ud83e\uddea","Safety inspection","A test job: marked when you submit",D.bw,new A.dSV(n)),n.vM("\ud83d\udcde","Service calls","A customer rings with problems",D.ih,new A.dSW(n)),n.vM("\ud83c\udfd8","Neighbourhood jobs","Fix lights and wiring around the city",D.aQ,new A.dSX(n))],t))
s=n.aZY("LESSONS")
q=C.a([],t)
for(p=0;p<17;++p){o=B.dgZ[p]
q.push(n.vM(o.b,o.c,o.d,o.e,new A.dSN(n,o)))}q.push(n.vM("\ud83e\udde0","Diagram lessons","Three-way switch, fan with light",D.bw,new A.dSO(n)))
q.push(n.vM("\ud83d\udcd8","Learn the trades","Short cards for beginners",D.bw,new A.dSP(n)))
return C.c7(m,D.c0,C.bl(!0,C.cf(C.a([u,D.ad,new C.an(D.a_,m,D.aa,D.t,w,m),v,r,s,n.aZX(q)],t),m,B.akj,m,m,D.ag,!1),!0,!1,D.af,!0,!0),m,!1,!1,m,m)},
aZY(d){var w=null
return new C.D(B.bCJ,C.B(C.a([C.E(C.p(w,w,D.f,D.aC.j(0.35),w,w,w,1,w,w,w,w,w,w),1),new C.D(D.eZ,C.d(d,w,w,w,w,w,w,B.fhV,w,w,w),w),C.E(C.p(w,w,D.f,D.aC.j(0.35),w,w,w,1,w,w,w,w,w,w),1)],x.p),D.m,w,D.e,D.i,0,w,w),w)},
aZX(d){var w,v,u,t,s=null,r=x.p,q=C.a([],r)
for(w=0;v=d.length,w<v;w+=2){u=d[w]
t=w+1
v=t<v?d[t]:D.bJ
q.push(new C.D(D.cv,new C.Eo(new C.ce(D.aM,D.e,D.i,D.ak,s,D.p,s,0,C.a([new C.bz(1,D.bb,u,s),D.ac,new C.bz(1,D.bb,v,s)],r),s),s),s))}return C.x(q,D.m,s,D.e,D.i,0,D.p)},
vM(d,e,f,g,h){var w=null,v=C.a([g.j(0.2),B.Fu],x.O),u=C.m(22),t=C.J(g.j(0.55),D.r,1.4),s=x.V,r=C.a([new C.ac(0,D.G,g.j(0.18),D.cx,16)],s),q=g.j(0.22),p=C.J(g.j(0.7),D.r,1.5)
s=C.a([new C.ac(0,D.G,g.j(0.35),D.I,14)],s)
return C.aB(w,C.p(w,C.x(C.a([C.p(w,C.at(C.d(d,w,w,w,w,w,w,D.wX,w,w,w),w,w,w),D.f,w,w,new C.o(q,w,p,w,s,w,D.a6),w,56,w,w,w,w,w,56),D.W,C.d(e,w,w,w,w,w,w,D.j3,D.K,w,w),D.cL,C.d(f,w,2,D.a1,w,w,w,B.ftI,D.K,w,w)],x.p),D.m,w,D.b8,D.i,0,D.p),D.f,w,w,new C.o(w,w,t,u,r,new C.a9(D.b4,D.b7,D.x,v,w,w),D.n),w,w,w,w,B.bxQ,w,w,w),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,h,w,w,w,w,w,w,!1,D.a4)}}
A.awx.prototype={
R(){return new A.btJ()},
bqA(){return this.c.$0()}}
A.btJ.prototype={
Z(){this.a2()
this.d=C.df(D.nn,new A.f5t(this))},
q(){var w=this.d
if(w!=null)w.a4(0)
this.a1()},
B(d){var w=null,v=D.w.j(0.6),u=C.m(18),t=C.J(D.bG,D.r,1.5)
return C.p(w,C.d("\u2b50 "+C.w(this.a.bqA()),w,w,w,w,w,w,B.fig,w,w,w),D.f,w,w,new C.o(v,w,t,u,w,w,D.n),w,w,w,D.iA,D.rq,w,w,w)}}
A.b7O.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null
if(n.d)return A.h3k(E.Bi,n.r,n.z,n.Q,n.y,n.as,n.db,n.w,n.f,n.c)
w=n.r
v=x.p
u=C.a([C.bT(0,A.h3k(E.Bi,w,n.z,n.Q,n.y,n.as,n.db,n.w,n.f,n.c),0,0,0)],v)
t=n.ch
s=t!=null
if(s)u.push(C.ao(m,C.x(t,D.E,m,D.e,D.i,0,D.p),m,m,8,m,8,m))
t=C.a([],v)
r=n.CW
if(r!=null)D.d.v(t,r)
r=C.a([],v)
q=n.e
if(q!=null)r.push(new A.awx(q,m))
r.push(new A.afO(D.hM,"Zoom in",w,!1,m))
t.push(C.B(r,D.m,m,D.e,D.P,0,m,m))
t.push(new A.afO(D.yV,"Zoom out",w,!0,m))
w=n.x
t.push(n.axC(B.bLD,"Back to the whole view",w))
t.push(n.axC(Aj.Cr,"Flip up and down swiping",new A.cxi()))
t.push(n.axC(D.kj,"Flip left and right swiping",new A.cxj()))
u.push(C.ao(m,C.x(t,D.dH,m,D.e,D.i,0,D.p),m,m,m,8,8,m))
t=n.dx
if(t!=null)u.push(C.ao(14,C.at(t,m,m,m),m,m,0,0,m,m))
t=n.at
if(t!=null){r=n.cy
if(r==null)s=s?60:10
else s=r
r=n.ax
q=(r?D.e_:D.ek).j(0.95)
p=C.m(14)
o=C.J(r?D.bj:D.ct,D.r,1)
u.push(C.ao(m,C.p(m,C.d(t,m,m,m,m,m,m,B.fix,m,m,m),D.f,m,m,new C.o(q,m,o,p,m,m,D.n),m,m,m,m,D.nq,m,m,m),m,m,10,62,s,m))}t=n.ay
if(t!=null){s=C.m(16)
r=C.J(D.aZ,D.r,1)
t=C.a([C.d(t.a,m,m,m,m,m,m,B.fuf,m,m,m),D.cL,C.d(t.b,m,m,m,m,m,m,E.UW,m,m,m)],v)
q=n.cx
if(q!=null)D.d.v(t,C.a([D.am,q],v))
u.push(C.ao(8,C.p(m,C.B(C.a([C.E(C.x(t,D.E,m,D.e,D.i,0,D.p),1),C.aF(m,m,m,m,D.Hp,m,m,m,w,m,m,m,m,m,D.cb)],v),D.E,m,D.e,D.i,0,m,m),D.f,m,m,new C.o(E.aej,m,r,s,m,m,D.n),m,m,m,m,E.ak3,m,m,m),m,m,10,10,m,m))}return new C.an(D.a_,m,D.aa,D.t,u,m)},
axC(d,e,f){var w=null,v=D.w.j(0.55),u=C.J(D.aZ,D.r,1)
return new C.D(D.eI,C.hc(C.aB(w,C.p(w,C.X(d,D.c,w,w,w,20),D.f,w,w,new C.o(v,w,u,w,w,w,D.a6),w,38,w,w,w,w,w,38),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,!1,D.a4),w,e,w,w),w)}}
A.aXV.prototype={
B(d){var w,v=this,u=null,t=x.p,s=C.a([C.aF(u,u,u,u,S.ny,u,u,u,new A.bXc(d),u,u,u,u,u,u)],t),r=v.x,q=v.c,p=v.d
if(r==null)s.push(C.E(C.d(q,u,u,u,u,u,u,C.l(u,u,p,u,u,u,u,u,u,u,u,16,u,u,D.u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),1))
else D.d.v(s,C.a([C.d(q,u,u,u,u,u,u,C.l(u,u,p,u,u,u,u,u,u,u,u,16,u,u,D.u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),D.at,C.E(r,1),D.at],t))
r=p.j(0.15)
q=C.m(16)
w=C.J(p.j(0.6),D.r,1)
s.push(C.aB(u,C.p(u,C.B(C.a([C.X(Ak.any,p,u,u,u,17),D.en,C.d(v.w,u,u,u,u,u,u,C.l(u,u,p,u,u,u,u,u,u,u,u,12,u,u,D.u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],t),D.m,u,D.e,D.P,0,u,u),D.f,u,u,new C.o(r,u,w,q,u,u,D.n),u,u,u,u,D.rq,u,u,u),D.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,v.r,u,u,u,u,u,u,!1,D.a4))
s=C.B(s,D.m,u,D.e,D.i,0,u,u)
q=C.aJ(d,u,x.w).w
return C.c7(u,D.c0,C.bl(!0,C.x(C.a([new C.D(B.bCW,s,u),C.p(u,C.cg(v.f,D.t,u,D.y,u,u,u,u,D.ag),D.f,u,new C.aZ(0,1/0,0,q.a.b*0.34),B.b53,u,u,u,u,E.a_4,u,u,1/0),C.E(C.bx(Ai.acv,v.e,D.ap),1)],t),D.m,u,D.e,D.i,0,D.p),!0,!1,D.af,!0,!0),u,!1,!1,u,u)}}
A.E2.prototype={
R(){var w=new C.wt()
$.x5()
w.h2(0)
return new A.aAD(w)},
gdc(d){return this.d}}
A.aAD.prototype={
gz5(){var w,v=this,u=v.d
if(u===$){w=A.t2(v.a.c)
v.d!==$&&C.bI()
v.d=w
u=w}return u},
ger(d){var w,v=this.e
if(v===$){w=this.a.d
v=this.e=w==null?new A.CE(C.U(x.S,x.N)):w}return v},
gas1(){var w=this.gz5().a
return w==="light"||w==="fan"},
gim(){var w,v=this,u=v.f
if(u===$){w=v.gas1()?new A.xh(1.15,0.12,11,B.Vw,$.au()):new A.xh(0.42,0.26,12,B.h5k,$.au())
v.f!==$&&C.bI()
u=v.f=w}return u},
gp7(){var w=this,v=w.r
return v===$?w.r=A.h7f(w.gz5(),w.ger(0),!0):v},
aAN(d){var w
this.m(new A.dbc(this,d))
A:{if("practice"===d){w="Practice: you can put a wire anywhere. The mistake shows when the power goes on."
break A}if("test"===d){w="Test: put every wire where you think it goes. Nothing is marked until you submit."
break A}w="Learn: a wrong wire is refused and explained."
break A}this.jb(w,!0)},
q(){var w=this.as
if(w!=null)w.a4(0)
this.a1()},
jb(d,e){var w=this,v=w.as
if(v!=null)v.a4(0)
w.m(new A.dba(w,d,e))
w.as=C.cI(D.lC,new A.dbb(w))},
nB(d){return this.jb(d,!1)},
qB(){var w=this.ger(0)
w.d=w.d&&w.a&&w.c>=2
this.r=A.h7f(this.gz5(),w,!0)},
oh(){var w,v,u,t=this
if(t.gas1()&&t.ger(0).c===0){t.gim().hR(11,0.12,B.Vw,1.15)
t.m(new A.daY(t))
return}w=t.gim()
v=t.ger(0).c===0
u=v?2.8:0.4
v=v?12:10
w.hR(v,0.26,new A.q(0,0.1,u),0.42)
t.m(new A.daZ(t))},
aXO(d){var w=this
if(w.gas1()){w.gim().hR(9,0.12,B.Vw,1.15)
return}if(d==="ground")w.gim().hR(8,0.55,B.h9b,0.15)
else if(d==="white")w.gim().hR(8.5,0.2,B.hdd,0.95)
else w.gim().hR(8.5,0.2,B.h20,-0.95)},
c85(){var w,v,u,t,s="ground",r=this.ger(0),q=!r.a||r.c>0,p=new A.daX(this),o=this.gz5()
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
J7(d){var w,v,u,t,s,r,q,p,o,n=this,m="square",l="STOP! The power is still on. Turn the breaker OFF before you touch any wire.",k="Recorded."
if(d===0){n.oh()
return}if(B.aQq.t(0,d))return
w=n.gz5()
v=w.f
u=C.T(v).k("Z<1>")
t=C.C(new C.Z(v,new A.db_(d),u),u.k("L.E"))
v=w.a
s=A.hxS(v,d)
u=s!=null
if(u){r=n.ger(0)
r=r.c===0&&r.b.iJ(0,s)}else r=!1
if(r){w=n.ger(0)
if(w.a){A.fW(180,220,0.25,m)
n.nB(l)
return}w=w.b
w.bs(w,new A.db0(s))
n.m(n.gc88())
n.jb("Wire taken off the screw.",!0)
return}r=!1
if(t.length!==0){q=n.ger(0)
if(q.c===0){q=q.b
if(q.aj(0,d))r=n.w.length===0||q.h(0,d)===n.w}}if(r){w=n.ger(0)
if(w.a){A.fW(180,220,0.25,m)
n.nB(l)
return}w.b.W(0,d)
n.m(new A.db1(n))
n.jb(w.y?k:"Wire taken off.",!0)
return}if(u){u=n.ger(0)
u=u.c===0&&!u.b.iJ(0,s)&&D.d.b2(w.e,new A.db2(s))}else u=!1
if(u){n.m(new A.db3(n,s,d))
if(n.w.length!==0){n.aXO(s)
n.jb(D.d.fP(w.e,new A.db4(s)).b+": picked up. Now tap the screw, nut or wire it joins.",!0)}return}if(t.length!==0&&n.w.length!==0&&n.ger(0).c===0){u=n.ger(0)
p=A.hxN(w,u,n.w,D.d.gI(t),!1)
if(p!=null){++n.Q
A.fW(180,220,0.25,m)
n.nB(p)}else if(u.y){A.fW(520,60,0.25,"tri")
n.m(new A.db5(n,d))
n.jb(k,!0)
n.w=""}else{A.yN()
n.m(new A.db6(n,d))
if(u.r)n.jb(D.d.gI(t).b+": fastened.",!0)
else if(A.bFf(w,u))n.jb("Every wire is on the right screw. Now push the device into the box.",!0)
else n.jb(D.d.gI(t).b+": fastened correctly.",!0)
n.gim().xi(7,A.aQ2(v,d,u))
n.w=""}return}o=n.gp7().b.h(0,d)
if(o!=null){n.m(new A.db7(n,d))
w=n.gim()
v=o.c
w.xi(o.d,v)}},
cm6(){var w,v=this
v.m(new A.db8(v))
w=v.ger(0)
if(w.a){A.fW(120,200,0.25,"saw")
if(w.c===0)v.nB("The breaker is ON. The wires are LIVE at 120 volts. Turn it OFF before you touch anything.")}else{A.fW(600,100,0.25,"tri")
v.jb("Breaker OFF. It is safe to work on the wires. (In real life, always test them with a tester first.)",!0)}},
cBr(){var w,v,u=this,t="The tester glows: this outlet has 120 volts and is wired correctly. The lesson is complete! Mistakes: ",s=" is wired correctly: every wire is on the terminal that belongs to it. The lesson is complete! Mistakes: ",r=u.gz5(),q=u.ger(0),p=A.Lf(r,q)
if(p.a!=="ok"){u.m(new A.dbd(u,p));++u.Q
A.fW(180,220,0.25,"square")
C.fL()
r=p.r==="arc"
w=r?95:150
A.fW(w,450,0.5,r?"saw":"noise")
if(q.y)r=p.d?"The breaker tripped.":"Power is on."
else r=p.b+"\nHow to fix it: "+p.w
u.nB(r)
return}u.m(new A.dbe(u))
A.yN()
v=r.a
A:{if("switch"===v){r="Power on. Flip the switch and the light turns on: both black wires are on brass screws, so the switch opens and closes the hot wire. The lesson is complete! Mistakes: "+u.Q+"."
break A}if("gfci"===v){r="Power on. Press RESET (it clicks), then TEST: it must shut the outlet off. Wired on LINE, it protects the whole circuit. The lesson is complete! Mistakes: "+u.Q+"."
break A}if("outlet"===v){r=t+u.Q+"."
break A}q=D.d.t(B.jW,v)
if(q){r="Power on. "+r.b+(s+u.Q+".")
break A}if(v!=="light"&&v!=="fan"){r="Power on. The "+r.b.toLowerCase()+(s+u.Q+".")
break A}r=t+u.Q+"."
break A}u.jb(r,!0)},
B(a1){var w,v=this,u=null,t=v.c85(),s=D.d.bg(t,new A.dbn()),r=s<0?"All done":"Step "+(s+1)+"/"+v.gz5().d.length,q=v.gz5(),p=v.ger(0),o=A.bFf(q,p)&&!p.a,n=v.gp7(),m=v.gim(),l=v.x,k=v.y,j=v.z,i=l!==0?v.gp7().b.h(0,v.x):u,h=(p.a?D.ek:D.e_).j(0.95),g=C.m(18),f=p.a,e=C.J(f?D.ct:D.bj,D.r,1.5),d=C.X(f?D.hv:B.bNj,D.c,u,u,u,18),a0=x.p
g=C.a([C.aB(u,C.p(u,C.B(C.a([d,D.en,C.d(f?"Breaker ON (live)":"Breaker OFF (safe)",u,u,u,u,u,u,D.nL,u,u,u)],a0),D.m,u,D.e,D.P,0,u,u),D.f,u,u,new C.o(h,u,e,g,u,u,D.n),u,u,u,u,D.h6,u,u,u),D.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,v.gcm5(),u,u,u,u,u,u,!1,D.a4)],a0)
h=!p.r&&!p.y
h=C.a([A.wW("Learn",D.bj,D.wo,h,new A.dbo(v)),D.am,A.wW("Practice",D.ct,D.p9,p.r,new A.dbp(v)),D.am,A.wW("Test",D.bw,D.uk,p.y,new A.dbx(v)),D.am],a0)
if(!p.y)D.d.v(h,C.a([A.wW("Hints",D.aC,D.rx,p.e,new A.dby(v)),D.am,A.wW("Labels",D.aQ,N.Cj,p.f,new A.dbz(v)),D.am,A.wW("Wire guide",D.mz,D.oj,!1,new A.dbA(a1)),D.am],a0))
h.push(A.wW("Brass side",B.bpT,E.aor,!1,new A.dbB(v)))
h.push(D.am)
h.push(A.wW("Silver side",B.Mf,D.OO,!1,new A.dbC(v)))
h.push(D.O)
n=A.Yg(!1,u,m,new A.dbD(v),u,j,l,i,u,u,k,u,u,v.gJ5(),v.gJ6(),n,!1,u,g,h)
m=C.a([],a0)
l=p.c
if(l===0){l=C.a([],a0)
for(k=D.d.gaf(q.e),j=new C.f5(k,new A.dbE(v));j.C();){i=k.gT(0)
h=i.c
g=new C.aP(14,14)
f=v.w
e=i.a
f=f===e
d=f?D.b3:D.aZ
w=new C.ay(d,f?3:1,D.r,-1)
d=C.a([],a0)
if(p.b.iJ(0,e))d.push(new C.D(D.fB,C.X(D.ef,i.d,u,u,u,18),u))
f=i.b
e=i.d
d.push(new C.y(f,u,new C.F(!0,e,u,u,u,u,13,D.u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u),u,u,u,u,u,u,u,u,u))
l.push(new C.D(D.iA,C.aB(u,C.p(u,new C.ce(D.aM,D.e,D.i,D.m,u,D.p,u,0,d,u),D.f,u,u,new C.o(h,u,new C.bK(w,w,w,w),new C.bg(g,g,g,g),u,u,D.n),u,u,u,u,D.hL,u,u,u),D.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new A.dbq(v,i),u,u,u,u,u,u,!1,D.a4),u))}l=C.a([C.bX(D.bC,l,D.bq,u,6,8)],a0)
if(p.y)D.d.v(l,C.a([C.B(C.a([A.ud("Submit the test",D.uk,new A.dbr(v,a1),D.bw)],a0),D.m,u,D.e,D.i,0,u,u),D.O],a0))
l.push(D.O)
if(o)p="Push it into the box"
else p=p.a?"Turn the breaker OFF first":"Fasten every wire first"
l.push(C.B(C.a([A.ud(p,B.aoX,o?new A.dbs(v):u,D.aC)],a0),D.m,u,D.e,D.i,0,u,u))
D.d.v(m,l)}else if(l===1)D.d.v(m,C.a([C.B(C.a([A.ud("Pull it back out",D.rB,new A.dbt(v),D.ae),D.ac,A.ud("Put the cover plate on",Z.wd,new A.dbu(v),D.aC)],a0),D.m,u,D.e,D.i,0,u,u)],a0))
else{l=A.ud("Start over",D.kJ,new A.dbv(v),D.ae)
p=p.d
k=p?"Tested \u2713":"Power on and test"
D.d.v(m,C.a([C.B(C.a([l,D.ac,A.ud(k,D.hv,p?u:v.gcBq(),D.aC)],a0),D.m,u,D.e,D.i,0,u,u)],a0))}return A.U9(D.aC,new A.dbw(v,a1,t),C.x(m,D.m,u,D.e,D.P,0,D.p),n,r,q.b,u)}}
A.a9L.prototype={
R(){return new A.aGC()},
gdc(d){return this.c}}
A.aGC.prototype={
ger(d){var w,v=this.d
if(v===$){w=this.a.c
v=this.d=w==null?A.h2R():w}return v},
gim(){var w=this.e
return w===$?this.e=new A.xh(-0.3,0.18,40,B.aWq,$.au()):w},
gp7(){var w=this.f
return w===$?this.f=A.bCF(this.ger(0)):w},
q(){var w=this.z
if(w!=null)w.a4(0)
this.a1()},
jb(d,e){var w=this,v=w.z
if(v!=null)v.a4(0)
w.m(new A.eVJ(w,d,e))
w.z=C.cI(D.lC,new A.eVK(w))},
nB(d){return this.jb(d,!1)},
oh(){this.gim().hR(40,0.18,B.aWq,-0.3)
this.m(new A.eVC(this))},
J7(d){var w,v,u,t,s,r,q=this,p="square"
if(d===0){q.oh()
return}w=C.G([41,"tail",42,"trap",43,"arm"],x.S,x.N).h(0,d)
if(w!=null&&!q.ger(0).a.t(0,w)){v=q.r
if(v.length===0){if(w==="tail")v="tailpiece"
else v=w==="trap"?"P-trap":"trap arm"
q.nB("Pick the "+v+" from the buttons below first, then tap its glowing outline.")
return}if(v!==w){A.fW(180,220,0.25,p)
u=q.r
A:{if("tail"===u){v="The tailpiece is the straight pipe that hangs from the sink. It goes at the very top, under the drain."
break A}if("trap"===u){v="The P-trap is the U-shaped bend. It goes right under the tailpiece, in the middle."
break A}v="The trap arm is the long straight pipe that goes into the wall. It goes last, on the right."
break A}q.nB(v)
return}if(w==="trap"&&!q.ger(0).a.t(0,"tail")){A.fW(180,220,0.25,p)
q.nB("Start from the top: put the tailpiece on first, then the trap under it.")
return}if(w==="arm"&&!q.ger(0).a.t(0,"trap")){A.fW(180,220,0.25,p)
q.nB("The trap arm joins the trap. Put the P-trap on first.")
return}q.m(new A.eVD(q,w))
A.yN()
q.jb("Piece in place. "+(q.ger(0).a.a===3?"Now tighten the two slip nuts: tap each nut.":"Pick the next piece."),!0)
return}v=d===44
if(v||d===45){t=v?"n1":"n2"
if(q.ger(0).b.h(0,t)!==!0){q.m(new A.eVE(q,t))
A.yN()
q.jb("Slip nut hand tightened. In real life give it a quarter turn more with pliers, but never over-tighten plastic.",!0)
return}}s=q.gp7().b.h(0,d)
if(s!=null){q.m(new A.eVF(q,d))
v=q.gim()
r=s.c
v.xi(s.d,r)}},
c8a(){var w=this,v=x.cc,u=C.C(new C.Z(C.a(["n1","n2"],x.s),new A.eVG(w),v),v.k("L.E"))
w.m(new A.eVH(w,u))
if(u.length!==0){A.fW(180,220,0.25,"square")
w.nB("It is dripping from a loose slip nut! Tap the nut and tighten it, then run the water again.")}else{A.yN()
w.jb("No leaks. The water flows through the trap and into the wall. The little pool in the U-bend stays there and blocks sewer gas. The lesson is complete!",!0)}},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.ger(0),i=j.a,h=i.t(0,"tail"),g=i.t(0,"trap"),f=i.t(0,"arm"),e=j.b
e=e.h(0,"n1")===!0&&e.h(0,"n2")===!0
w=C.a([h,g,f,e,j.c&&j.d.length===0],x.u)
v=D.d.bg(w,new A.eVO())
u=i.a===3
j=v<0?"All done":"Step "+(v+1)+"/5"
h=l.gp7()
g=l.gim()
f=l.w
e=l.x
t=l.y
s=f!==0?l.gp7().b.h(0,l.w):k
h=A.Yg(!1,k,g,new A.eVP(l),k,t,f,s,k,k,e,k,k,l.gJ5(),l.gJ6(),h,!1,k,k,k)
e=x.p
s=C.a([],e)
for(r=0;r<3;++r){q=B.dqK[r]
g=i.t(0,q)?k:new A.eVQ(l,q)
f=i.t(0,q)?D.dq:D.fN
t=new C.aP(14,14)
p=l.r===q
o=p?D.b3:D.aZ
n=new C.ay(o,p?3:1,D.r,-1)
o=C.a([],e)
if(i.t(0,q))o.push(B.elA)
p=B.dyW.h(0,q)
p.toString
m=i.t(0,q)?D.bY:D.c
o.push(new C.y(p,k,new C.F(!0,m,k,k,k,k,13,D.u,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k),k,k,k,k,k,k,k,k,k))
s.push(new C.D(D.iA,C.aB(k,C.p(k,new C.ce(D.aM,D.e,D.i,D.m,k,D.p,k,0,o,k),D.f,k,k,new C.o(f,k,new C.bK(n,n,n,n),new C.bg(t,t,t,t),k,k,D.n),k,k,k,k,D.hL,k,k,k),D.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,g,k,k,k,k,k,k,!1,D.a4),k))}i=C.bX(D.bC,s,D.bq,k,6,8)
g=A.ud("Start over",D.kJ,new A.eVR(l),D.ae)
f=u?"Run the water":"Build the drain first"
return A.U9(D.cp,new A.eVS(d,w),C.x(C.a([i,D.O,C.B(C.a([g,D.ac,A.ud(f,D.qt,u?l.gc89():k,D.cp)],e),D.m,k,D.e,D.i,0,k,k)],e),D.m,k,D.e,D.P,0,D.p),h,j,"Sink drain (P-trap)",k)}}
A.a5c.prototype={
R(){return new A.aAX()},
gdc(d){return this.c}}
A.aAX.prototype={
ger(d){var w,v=this.d
if(v===$){w=this.a.c
v=this.d=w==null?A.h2R():w}return v},
gim(){var w=this.e
return w===$?this.e=new A.xh(-0.25,0.2,36,B.aVM,$.au()):w},
gp7(){var w=this.f
return w===$?this.f=A.aPU(this.ger(0)):w},
q(){var w=this.z
if(w!=null)w.a4(0)
this.a1()},
jb(d,e){var w=this,v=w.z
if(v!=null)v.a4(0)
w.m(new A.dee(w,d,e))
w.z=C.cI(D.lC,new A.def(w))},
nB(d){return this.jb(d,!1)},
oh(){this.gim().hR(36,0.2,B.aVM,-0.25)
this.m(new A.de6(this))},
J7(d){var w,v,u,t,s,r,q=this
if(d===0){q.oh()
return}w=x.fZ
v=C.C(new C.Z(B.a5e,new A.de9(d),w),w.k("L.E"))
if(v.length!==0&&q.r.length!==0){w=q.ger(0)
u=A.ika(w,q.r,D.d.gI(v))
if(u!=null){A.fW(180,220,0.25,"square")
q.nB(u)}else{A.yN()
q.m(new A.dea(q,d))
q.gim().xi(12,A.agY(d))
q.jb(A.fAC(w)?"All four ends are connected. Now open the valves.":D.d.gI(v).b+": connected.",!0)}return}w=d===68
if(w||d===69){t=w?"hot":"cold"
if(q.ger(0).e.iJ(0,t)){q.m(new A.deb(q,t))
q.jb("Hose taken off.",!0)
return}}s=q.gp7().b.h(0,d)
if(s!=null){q.m(new A.dec(q,d))
w=q.gim()
r=s.c
w.xi(s.d,r)}},
c87(d){var w,v=this
v.m(new A.de7(v))
w=v.ger(0)
if(!w.f){v.jb("Valves closed.",!0)
return}if(A.fAC(w)){A.yN()
v.jb("Hot and cold flow through the hoses and out of the faucet. No leaks. The lesson is complete!",!0)}else{A.fW(180,220,0.25,"square")
v.nB("Water is spraying out of a valve that has no hose! Close the valves and finish connecting the hoses first.")}},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=n.ger(0),k=l.r||l.e.a!==0,j=l.e,i=j.h(0,61)==="hot"&&j.h(0,63)==="hot",h=j.h(0,62)==="cold"&&j.h(0,64)==="cold",g=C.a([k,i,h,l.f&&A.fAC(l)],x.u),f=D.d.bg(g,new A.dej())
k=f<0?"All done":"Step "+(f+1)+"/4"
i=n.gp7()
h=n.gim()
w=n.w
v=n.x
u=n.y
t=w!==0?n.gp7().b.h(0,n.w):m
s=x.p
i=A.Yg(!1,m,h,new A.dek(n),m,u,w,t,m,m,v,m,m,n.gJ5(),n.gJ6(),i,!1,m,m,C.a([A.wW("Hints",D.aC,D.rx,l.r,new A.del(n)),D.O],s))
v=C.a([],s)
for(r=0;r<2;++r){h={}
w=B.dqb[r]
h.a=null
q=w.a
h.a=q
u=new C.aP(14,14)
t=n.r===q
p=t?D.b3:D.aZ
o=new C.ay(p,t?3:1,D.r,-1)
p=C.a([],s)
t=C.a7(j).k("bc<2>")
if(new C.Z(new C.bc(j,t),new A.dem(h),t.k("Z<L.E>")).gL(0)===2)p.push(B.elD)
p.push(new C.y(w.b,m,D.tb,m,m,m,m,m,m,m,m,m))
v.push(new C.D(D.iA,C.aB(m,C.p(m,new C.ce(D.aM,D.e,D.i,D.m,m,D.p,m,0,p,m),D.f,m,m,new C.o(w.c,m,new C.bK(o,o,o,o),new C.bg(u,u,u,u),m,m,D.n),m,m,m,m,D.hL,m,m,m),D.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new A.den(h,n),m,m,m,m,m,m,!1,D.a4),m))}j=C.bX(D.bC,v,D.bq,m,6,8)
h=A.ud("Start over",D.kJ,new A.deo(n),D.ae)
l=l.f?"Close the valves":"Open the valves"
return A.U9(D.ct,new A.dep(d,g),C.x(C.a([j,D.O,C.B(C.a([h,D.ac,A.ud(l,D.qt,n.gc86(n),D.ct)],s),D.m,m,D.e,D.i,0,m,m)],s),D.m,m,D.e,D.P,0,D.p),i,k,"Faucet supply lines",m)}}
A.aBP.prototype={
R(){return new A.aBQ(A.heq())}}
A.aBQ.prototype={
gim(){var w,v=this.e
if(v===$){w=new A.xh(-0.3,0.48,46,B.Vu,$.au())
w.f=80
this.e=w
v=w}return v},
gp7(){var w=this.f
return w===$?this.f=A.agL(this.d):w},
q(){var w=this.z
if(w!=null)w.a4(0)
this.a1()},
jb(d,e){var w=this,v=w.z
if(v!=null)v.a4(0)
w.m(new A.dli(w,d,e))
w.z=C.cI(D.lC,new A.dlj(w))},
nB(d){return this.jb(d,!1)},
oh(){this.gim().hR(46,0.48,B.Vu,-0.3)
this.m(new A.dlc(this))},
J7(d){var w,v,u,t=this
if(d===0){t.oh()
return}if(d===72){w=t.d
w=w.d.t(0,72)&&w.a>=5}else w=!1
if(w){t.m(new A.dle(t,d))
A.yN()
t.jb("You flipped the breaker fully OFF and then ON. The living room light is back on. A breaker trips when a circuit is overloaded: find out why before it trips again.",!0)
t.gim().xi(22,B.haB)
return}w=d===87
if(w||d===86){v=t.d
v=v.b&&!v.c&&v.a>=5}else v=!1
if(v){if(t.w==="wrench"&&w){t.m(new A.dlf(t,d))
A.yN()
t.jb("You tightened the slip nut with the wrench. The drip has stopped.",!0)
return}A.fW(180,220,0.25,"square")
t.nB(w?"Hand tightening is not enough here. Pick the wrench first, then tap the nut.":"The water is dripping from the slip nut on the trap. Pick the wrench, then tap the nut.")}u=t.gp7().b.h(0,d)
if(u!=null){t.m(new A.dlg(t,d))
w=t.gim()
v=u.c
w.xi(u.d,v)}},
cg7(d){var w,v
A:{if("ptrap"===d){w=B.esh
break A}if("faucet"===d){w=B.bGD
break A}w=new A.E2(d,null,null)
break A}v=this.c
v.toString
C.a4(v,!1).cd(C.dZ(new A.dld(w),!1,null,x.H))},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.d,l=B.dkV[m.a],k=o.r,j=k===0?n:A.i9g(k)
k=m.d.t(0,72)
w=!m.b||m.c
v=C.a([!k,w],x.u)
w=m.a
k=o.gp7()
u=o.gim()
t=o.r
s=o.x
r=o.y
q=t!==0?o.gp7().b.h(0,o.r):n
p=j==null?n:C.aB(n,C.p(n,B.fvz,D.f,n,n,new C.o(D.aC,n,n,C.m(12),n,n,D.n),n,n,n,n,D.rq,n,n,n),D.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new A.dlm(o,j),n,n,n,n,n,n,!1,D.a4)
k=A.Yg(!1,n,u,new A.dln(o),n,r,t,q,p,new A.dlo(o),s,n,n,o.gJ5(),o.gJ6(),k,!1,n,n,n)
s=l.a
p=x.p
q=C.B(C.a([C.E(C.d(""+(m.a+1)+". "+s,n,n,n,n,n,n,B.fnE,n,n,n),1),A.wW("Wrench",D.aQ,D.p9,o.w==="wrench",new A.dlp(o))],p),D.m,n,D.e,D.i,0,n,n)
t=C.d(l.b,n,3,D.a1,n,n,n,B.foK,n,n,n)
m=C.kP(D.bw,6,s,6,0,new A.dlq(o),m.a)
u=v[0]
s=u?"\u2705 Living room power fixed":"\u26a0 Living room has no power"
s=C.E(C.d(s,n,n,n,n,n,n,C.l(n,n,u?D.et:D.eP,n,n,n,n,n,n,n,n,11.5,n,n,D.H,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),1)
u=v[1]
r=u?"\u2705 Sink leak fixed":"\u26a0 Kitchen sink drips"
return A.U9(D.bw,new A.dlr(d,v),C.x(C.a([q,D.bD,t,m,C.B(C.a([s,C.E(C.d(r,n,n,n,n,n,n,C.l(n,n,u?D.et:D.eP,n,n,n,n,n,n,n,n,11.5,n,n,D.H,n,n,!0,n,n,n,n,n,n,n,n),D.dW,n,n),1)],p),D.m,n,D.e,D.i,0,n,n)],p),D.m,n,D.e,D.P,0,D.p),k,"Stage "+(w+1)+"/7","Build and fix a house",n)}}
A.afO.prototype={
R(){return new A.bxn()}}
A.bxn.prototype={
b7z(){var w=this,v=w.d
if(v!=null)v.a4(0)
w.d=null
if(w.e&&w.c!=null)w.m(new A.fh4(w))},
c8b(d){var w,v,u=this
u.m(new A.fh2(u))
w=u.a
v=w.e
v.apo(w.f?1.45:0.69)
v=u.d
if(v!=null)v.a4(0)
u.d=C.cI(D.kD,new A.fh3(u))},
q(){var w=this.d
if(w!=null)w.a4(0)
this.a1()},
B(d){var w=this,v=null,u=w.a.d,t=D.w.j(w.e?0.8:0.55),s=w.e,r=s?D.bG:D.aZ
r=C.J(r,D.r,s?2:1)
return new C.D(D.eI,C.hc(C.nK(D.c9,C.p(v,C.X(w.a.c,D.c,v,v,v,22),D.f,v,v,new C.o(t,v,r,v,v,v,D.a6),v,44,v,v,v,v,v,44),v,new A.fh5(w),new A.fh6(w),v,v,v,v,new A.fh7(w)),v,u,v,v),v)}}
A.jL.prototype={}
A.N8.prototype={}
A.a7e.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=x.p,k=C.a([C.B(C.a([C.aF(m,m,m,m,S.ny,m,m,m,new A.cbD(d),m,m,m,m,m,m),B.fFX],l),D.m,m,D.e,D.i,0,m,m)],l)
for(w=0;w<5;++w){v=B.dsu[w]
u=v.c
t=C.a([new C.D(D.ali,new C.y(v.b+"  "+v.a.toUpperCase(),m,new C.F(!0,u,m,m,m,m,12,D.u,m,1.1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m,m,m,m,m,m,m),m)],l)
for(s=v.d,r=s.length,q=0;q<r;++q){p=s[q]
o=new C.aP(14,14)
n=new C.ay(u.j(0.35),1,D.r,-1)
t.push(C.p(m,C.x(C.a([new C.y(p.a,m,D.j3,m,m,m,m,m,m,m,m,m),D.cL,new C.y(p.b,m,E.UW,m,m,m,m,m,m,m,m,m)],l),D.E,m,D.e,D.i,0,D.p),D.f,m,m,new C.o(B.Fu,m,new C.bK(n,n,n,n),new C.bg(o,o,o,o),m,m,D.n),m,m,m,D.cv,D.bf,m,m,m))}D.d.v(k,t)}return C.c7(m,D.c0,C.bl(!0,C.cf(k,m,B.akj,m,m,D.ag,!1),!0,!1,D.af,!0,!0),m,!1,!1,m,m)}}
A.cnT.prototype={}
A.Fj.prototype={}
A.nr.prototype={}
A.Xn.prototype={}
A.cnJ.prototype={
bzN(d,e,f){var w,v=this
if(f!=null)w=D.d.fP(B.ayO,new A.cnN(f))
else{w=new C.e9()
w.d4(v.a)
w=B.ayO[w.aq(2)]}v.c!==$&&C.aQ()
v.c=w
w=new C.e9()
w.d4(v.a+7)
w=w.hj()
v.d!==$&&C.aQ()
v.d=w},
vl(d,e){var w=this.c
w===$&&C.c()
return D.d.fP(w.c,new A.cnO(e))},
Pq(d){++this.w
return new A.eC(!1,d,!1,"")},
c5l(d){var w=d.d
return new C.N(w,new A.cnK(this),C.T(w).k("N<1,n>")).aH(0," and ")},
bis(d,e){var w,v,u,t,s=this,r=s.vl(0,e),q=s.e
if(q.t(0,e))return s.Pq("The "+r.c.toLowerCase()+" is already there.")
if(d!==r.b)return s.Pq(s.b?"That does not go here.":"That does not go here. This spot is for the "+r.c.toLowerCase()+".")
for(w=r.d,v=w.length,u=0;u<v;++u)if(!q.t(0,w[u])){q=s.b?"Not yet: something has to go in first.":"Not yet. "+r.e+" Put in the "+s.c5l(r)+" first.";++s.w
return new A.eC(!1,q,!1,"")}if(r.f&&s.r)return s.Pq(s.b?"The water is still on!":"Stop! The water is still on. Cutting into a pipe with the water on floods the room. Turn the water off at the main valve first (pick the hand and tap the main valve).")
q.M(0,e)
s.y=!1
s.x.a7(0)
if(r.r>0)t=s.b?"":" It is only loose. Pick the wrench and tap it to tighten the joints."
else t=""
return new A.eC(!0,r.c+" fitted."+t,!1,"")},
bjN(d){var w,v,u,t,s=this,r=s.vl(0,d)
if(!s.e.t(0,d))return s.Pq(s.b?"Nothing to tighten yet.":"There is nothing to tighten yet: the "+r.c.toLowerCase()+" is not fitted.")
w=r.r
if(w===0)return s.Pq(s.b?"That does not need tightening.":"The "+r.c.toLowerCase()+" does not have joints to tighten. It just sits in place.")
v=s.f
u=v.h(0,d)
if(u==null)u=0
if(u>=w)return s.Pq("Already tight. More force would crack it.")
t=u+1
v.n(0,d,t)
s.x.a7(0)
s.y=!1
v=r.c
return new A.eC(!0,t>=w?v+": every joint is tight now.":v+": one joint tightened, one to go.",!1,"")},
aHe(d){var w=this.vl(0,d),v=this.f.h(0,d)
if(v==null)v=0
return w.r-v},
aJh(){var w,v,u,t,s,r,q=this
q.r=!q.r
w=q.x
w.a7(0)
if(!q.r)return B.aZK
v=q.c
v===$&&C.c()
u=v.c
t=C.T(u).k("Z<1>")
s=C.C(new C.Z(u,new A.cnP(q),t),t.k("L.E"))
v=v.c
u=C.T(v).k("Z<1>")
r=C.C(new C.Z(v,new A.cnQ(q),u),u.k("L.E"))
q.y=!0
if(s.length!==0){w.v(0,new C.N(s,new A.cnR(),C.T(s).k("N<1,n>")));++q.w
return new A.eC(!1,"Water is spraying from an open pipe where the "+D.d.gI(s).c.toLowerCase()+" should be! Turn the water off and finish the job.",!0,"")}if(r.length!==0){w.v(0,new C.N(r,new A.cnS(),C.T(r).k("N<1,n>")));++q.w
return new A.eC(!1,"The "+D.d.gI(r).c.toLowerCase()+" is leaking from a loose joint. Turn the water off, tighten it with the wrench, then test again.",!0,"")}if(!q.ga3H())return B.aZA
return B.aZm},
cJl(){var w,v,u,t,s,r,q,p=this
p.r=!0
p.aJh()
w=p.c
w===$&&C.c()
v=w.c
u=v.length
t=0
for(;t<u;++t){s=v[t]
p.bis(s.b,s.a)}for(w=w.c,v=w.length,t=0;t<v;++t){s=w[t]
for(u=s.r,r=s.a,q=0;q<u;++q)p.bjN(r)}p.aJh()
p.w=0},
ga3H(){var w=this.c
w===$&&C.c()
return D.d.d_(w.c,new A.cnL(this))},
gcHw(){var w=this.c
w===$&&C.c()
return D.d.d_(w.c,new A.cnM(this))},
gwE(){var w=this
return w.ga3H()&&w.gcHw()&&w.r&&w.y&&w.x.a===0}}
A.Wn.prototype={
R(){var w,v=new A.xh(-0.25,0.4,135,B.aX7,$.au())
v.f=200
w=new C.wt()
$.x5()
w.h2(0)
return new A.aFe(v,w)}}
A.aFe.prototype={
gCV(d){var w=this.d
if(w===$){this.a.toString
w=D.o.F(Date.now(),1e5)
this.d=w}return w},
Z(){var w,v=this
v.a2()
w=v.a.d
if(w==null){w=v.gCV(0)
v.a.toString
w=A.h2Q(!1,w,null)}v.e=w
v.r=A.hsR(w,v.x,!w.b)},
q(){var w=this.at
if(w!=null)w.a4(0)
this.a1()},
a__(){var w=this.e
w===$&&C.c()
return this.r=A.hsR(w,this.x,!w.b)},
axE(d,e){var w=this,v=w.at
if(v!=null)v.a4(0)
w.m(new A.eoT(w,d,e))
w.at=C.cI(D.jy,new A.eoU(w))},
b__(){this.f.hR(135,0.4,B.aX7,-0.25)
this.m(new A.eoM(this))},
cz9(d){var w,v,u=this.e
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
ayv(d){var w=this.e
w===$&&C.c();++w.w
return new A.eC(!1,d,!1,"")},
c8f(d){return this.aZZ(d)},
cyq(d){var w
A:{if("main"===d){w=9400
break A}w=this.e
w===$&&C.c()
w=w.c
w===$&&C.c()
w=9100+D.d.bg(w.c,new A.eoY(d))
break A}this.aZZ(w)},
b75(){var w,v,u,t,s,r,q,p=this,o=p.x
if(o==="hand")return C.a([B.eM2],x.L)
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
q=r.vl(0,s)
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
aZZ(d){var w,v,u,t,s,r=this
if(d===0)return
w=r.r
w===$&&C.c()
v=w.b.h(0,d)
if(r.x.length===0){r.m(new A.eoB(r,d))
if(v!=null)r.axE(v.a+": "+v.b,!0)
return}u=r.cz9(d)
w=r.x
if(w==="hand")if(d===9400){w=r.e
w===$&&C.c()
t=w.aJh()}else{w=r.e
w===$&&C.c()
t=r.ayv(w.b?"Your hand is only for the main water valve.":"Your hand is for the main water valve. Parts are placed by picking them from the tray.")}else if(w==="wrench")if(u==null){w=r.e
w===$&&C.c()
t=r.ayv(w.b?"Nothing to tighten.":"There is nothing to tighten there.")}else{w=r.e
w===$&&C.c()
t=w.bjN(u)}else if(u==null){w=r.e
w===$&&C.c()
t=r.ayv(w.b?"Not there.":"That does not go there. Tap one of the glowing spots.")}else{s=r.e
s===$&&C.c()
t=s.bis(w,u)}w=t.a
if(w)A.yN()
else A.fW(180,220,0.25,"square")
r.m(new A.eoC(r,d))
w=w&&!t.c
r.axE(t.b,w)
w=r.e
w===$&&C.c()
if(w.gwE()&&!r.as){r.as=!0
$.aV.x1$.push(new A.eoD(r))}},
c8c(){var w=null,v=this.c
v.toString
C.cj(w,w,!0,w,new A.eoI(this),v,w,!0,!0,x.H)},
aYQ(){this.m(new A.eoR(this))
this.b__()},
gcDw(){var w,v,u,t=C.a([],x.s)
for(w=0;w<11;++w){v=B.c5M[w]
u=this.e
u===$&&C.c()
u=u.c
u===$&&C.c()
if(D.d.b2(u.c,new A.eoZ(v)))t.push(v)}return t},
c5J(){var w,v,u,t,s=this.e
s===$&&C.c()
s=s.c
s===$&&C.c()
s=s.c
w=s.length
v=0
for(;v<w;++v){u=s[v]
if(!this.e.e.t(0,u.a)){t=this.e.e
t=D.d.d_(u.d,t.gkT(t))}else t=!1
if(t)return u}return null},
aVd(){var w,v,u,t=this,s=t.e
s===$&&C.c()
if(s.x.a!==0){s=s.c
s===$&&C.c()
s=s.c
w=C.T(s)
v=new C.cQ(new C.Z(s,new A.eoJ(t),w.k("Z<1>")),new A.eoK(),w.k("cQ<1,n>")).aH(0,", ")
s=t.e
if(s.r)return new C.bk("\ud83d\udca7 Water is leaking at: "+v+". First turn the main water OFF: pick Hand and tap the main valve.","hand","main")
return new C.bk("\ud83d\udca7 It leaked at: "+v+". Pick the Wrench and tap it to tighten the joint. Then turn the water ON again to test.","wrench",s.x.gI(0))}if(!s.ga3H()){u=t.c5J()
if(u==null)return B.eW9
if(u.f&&t.e.r)return B.eVI
s=u.b
w=B.aGp.h(0,s)
if(w==null)w=s
return new C.bk("Next: pick "+w+" from the tray, then tap "+u.c.toLowerCase()+" (the glowing spot). "+u.e,s,u.a)}s=t.e.c
s===$&&C.c()
s=s.c
w=C.T(s).k("Z<1>")
v=C.C(new C.Z(s,new A.eoL(t),w),w.k("L.E"))
if(v.length!==0)return new C.bk("Everything is fitted. Now tighten each joint: pick the Wrench and tap "+D.d.gI(v).c.toLowerCase()+".","wrench",D.d.gI(v).a)
if(!t.e.r)return B.eUG
return B.eWy},
cwM(){var w,v,u,t,s=this,r={}
r.a=r.b=null
w=s.aVd()
r.b=w.b
r.a=w.c
s.m(new A.eoV(r,s))
v=r.a
if(v!=null){if(v==="main")u=9400
else{v=s.e
v===$&&C.c()
v=v.c
v===$&&C.c()
u=9100+D.d.bg(v.c,new A.eoW(r))}r=s.r
r===$&&C.c()
t=r.b.h(0,u)
if(t!=null)s.f.hR(70,0.3,t.c,-0.2)
s.m(new A.eoX(s,u))}s.axE(w.a,!0)},
axD(d,e,f){var w,v=null,u=this.x===d,t=u?D.aC.j(0.25):D.c.j(0.07),s=C.m(14),r=u?D.aC:D.aZ
r=C.J(r,D.r,u?2:1)
w=C.X(f,u?D.aC:D.ae,v,v,v,19)
return new C.D(E.u_,C.aB(v,C.p(v,C.B(C.a([w,D.bm,C.d(e,v,v,v,v,v,v,C.l(v,v,u?D.aC:D.c,v,v,v,v,v,v,v,v,12.5,v,v,D.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),D.m,v,D.e,D.i,0,v,v),D.f,v,v,new C.o(t,v,r,s,v,v,D.n),v,v,v,v,D.eZ,v,v,v),D.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new A.eoF(this,u,d),v,v,v,v,v,v,!1,D.a4),v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.e
h===$&&C.c()
h=h.c
h===$&&C.c()
h=h.c
w=new C.Z(h,new A.ep_(j),C.T(h).k("Z<1>")).gL(0)
h=j.e.c
h===$&&C.c()
v=j.r
v===$&&C.c()
u=j.y
t=j.z
s=j.Q
r=u!==0?v.b.h(0,u):i
v=A.Yg(!1,i,j.f,new A.ep0(j),i,s,u,r,i,new A.ep1(),t,i,i,j.gc8d(),j.gc8e(),v,!1,i,i,i)
t=x.p
r=C.a([],t)
if(!j.e.b){u=D.aQ.j(0.12)
s=C.m(12)
q=C.J(D.aQ.j(0.6),D.r,1)
r.push(C.p(i,C.B(C.a([C.E(C.d("\ud83d\udc49 "+j.aVd().a,i,4,D.a1,i,i,i,B.fuH,i,i,i),1),D.bm,C.bE(B.fyr,i,j.gcwL(),C.bo(i,i,i,i,i,B.f58,D.kG,i,i,i,i,i))],t),D.m,i,D.e,D.i,0,i,i),D.f,i,i,new C.o(u,i,q,s,i,i,D.n),i,i,i,D.eI,D.a_6,i,i,1/0))}if(j.x.length!==0&&j.b75().length!==0){u=C.a([],t)
for(s=j.b75(),q=s.length,p=0;p<s.length;s.length===q||(0,C.M)(s),++p){o={}
n=s[p]
o.a=null
o.a=n.a
m=new C.aP(12,12)
l=new C.ay(D.b3,1,D.r,-1)
u.push(C.aB(i,C.p(i,new C.y("\ud83d\udccd "+n.b,i,D.oF,i,i,i,i,i,i,i,i,i),D.f,i,i,new C.o(D.eR.j(0.35),i,new C.bK(l,l,l,l),new C.bg(m,m,m,m),i,i,D.n),i,i,i,i,B.a_7,i,i,i),D.y,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new A.ep2(o,j),i,i,i,i,i,i,!1,D.a4))}r.push(new C.D(D.eI,C.bX(D.bC,u,D.bq,i,6,6),i))}u=j.e
if(u.b)u="Practice mode: no hints. Build it in the right order."
else if(u.ga3H())u="Everything is fitted. Tighten every joint, then turn the main water on to test."
else{u=j.e.c
u===$&&C.c()
u="Job: "+u.d}r.push(new C.bO(D.a5,i,i,C.d(u,i,2,D.a1,i,i,i,B.aSQ,i,i,i),i))
r.push(D.O)
t=C.a([j.axD("hand","Hand",B.aoR),j.axD("wrench","Wrench",D.p9)],t)
for(u=j.gcDw(),s=u.length,p=0;p<u.length;u.length===s||(0,C.M)(u),++p){k=u[p]
q=B.aGp.h(0,k)
q.toString
t.push(j.axD(k,q,Ab.aol))}r.push(new C.a6(i,52,C.cf(t,i,i,i,i,D.aM,!1),i))
return A.U9(D.aQ,new A.ep3(j,d),C.x(r,D.m,i,D.e,D.P,0,D.p),v,""+w+"/"+h.c.length+" fitted","Plumbing job: "+h.b,i)},
c23(d){return C.bV(E.lA,null,new A.eoQ(this),d,!0,!0,!0,D.k2,!1,!1,x.H)}}
A.z8.prototype={}
A.ox.prototype={}
A.Y2.prototype={}
A.aw5.prototype={}
A.aUR.prototype={}
A.eC.prototype={
gjO(){return this.a}}
A.XR.prototype={
clw(d,e,f){var w,v,u,t,s=this,r=null,q="outlet",p="switch",o=new C.e9()
o.d4(s.a)
w=d==null?o.aq(3):d
v=C.a([0,1,2],x.t)
D.d.dZ(v,o)
u=3+o.aq(2)
switch(w){case 0:t=e==null?"Living room":e
s.c!==$&&C.aQ()
s.c=t
t=C.a([new A.ox(v[0],q,r),new A.ox(v[1],q,r),new A.ox(5,"light",u),new A.ox(u,p,r)],x.F)
s.d!==$&&C.aQ()
s.d=t
break
case 1:t=e==null?"Bedroom":e
s.c!==$&&C.aQ()
s.c=t
t=C.a([new A.ox(v[0],q,r),new A.ox(v[1],q,r),new A.ox(6,"fan",u),new A.ox(u,p,r)],x.F)
s.d!==$&&C.aQ()
s.d=t
break
default:t=e==null?"Kitchen":e
s.c!==$&&C.aQ()
s.c=t
t=C.a([new A.ox(v[0],"gfci",r),new A.ox(v[1],"gfci",r),new A.ox(5,"light",u),new A.ox(u,p,r)],x.F)
s.d!==$&&C.aQ()
s.d=t}if(f){t[1]=new A.ox(t[1].a,B.dkF[o.aq(5)],r)
t=s.d
t===$&&C.c()
t[3]=new A.ox(t[3].a,B.dmg[o.aq(5)],r)}},
gant(){var w,v,u=C.aX(x.S),t=this.d
t===$&&C.c()
w=t.length
v=0
for(;v<t.length;t.length===w||(0,C.M)(t),++v)u.M(0,t[v].a)
return u},
cVx(d){var w,v,u,t=this.d
t===$&&C.c()
w=t.length
v=0
for(;v<w;++v){u=t[v]
if(u.a===d)return u}return null},
fU(d){++this.f
return new A.eC(!1,d,!1,"")},
am9(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.d
g===$&&C.c()
w=g.length
v=h.x
u=0
for(;u<g.length;g.length===w||(0,C.M)(g),++u){t=g[u].a
s=A.jY(t)
if(s.e==="fan")r="fan"
else r=s.c?"ceiling":"wall"
v.n(0,t,r)}g=C.a([],x.t)
for(q=0;q<$.Hi().length;++q)g.push(q)
h.y.v(0,g)
h.z.v(0,h.gant())
for(g=h.Q,w=x.S,u=0;u<3;++u){p=B.ov[u]
v=C.aX(w)
t=C.aX(w)
o=new A.aw5(v,t)
o.d=o.e=o.a=!0
for(r=h.aqv(p),n=r.length,m=0;m<r.length;r.length===n||(0,C.M)(r),++m)for(l=r[m]*10,k=0;k<6;++k)t.M(0,l+k)
for(t=h.gant(),r=C.a7(t),n=new C.ml(t,t.r,r.k("ml<1>")),n.c=t.e,r=r.c,t=p+48;n.C();){l=n.d
if(l==null)l=r.a(l)
s=A.jY(l)
if(!s.c){j=s.d.a
j=j>=p&&j<=t}else j=!1
if(j)v.M(0,l)}g.n(0,p,o)}for(g=h.as,u=0;u<2;++u){i=g[u]
i.a=!0
i.b=3
i.d=i.c=!0}},
cJm(){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=k.d
j===$&&C.c()
w=j.length
v=0
for(;v<j.length;j.length===w||(0,C.M)(j),++v){u=j[v]
k.bgq(u.a,u.b)}for(w=j.length,t=x.S,s=x.N,r=k.at,v=0;v<j.length;j.length===w||(0,C.M)(j),++v){q=j[v].a
p=r.h(0,q)
if(p==null)continue
o=p.a
n=A.t2(o)
if(n.w.length!==0)m=n.z
else{A:{if("outlet"===o){o=C.G([25,"ground",23,"white",21,"black"],t,s)
break A}if("gfci"===o){o=C.G([25,"ground",24,"white",22,"black"],t,s)
break A}if("switch"===o){o=C.G([25,"ground",21,"blackLine",22,"blackLoad"],t,s)
break A}o=C.G([53,"ground",52,"white",51,"black"],t,s)
break A}m=o}for(o=m.gdS(m),o=o.gaf(o);o.C();){l=o.gT(o)
k.beM(q,l.b,l.a)}k.biM(q)
k.bdB(q)}if(!k.ax)k.aJf()
for(w=j.length,v=0;v<j.length;j.length===w||(0,C.M)(j),++v){u=j[v]
if(D.d.t(B.lJ,u.b)){t=u.a
k.biu(t,"lamp")
k.bk8(t)}}for(j=D.d.gaf(j),w=new C.f5(j,new A.csK());w.C();){t=j.gT(0).a
k.aFR(t)
k.aFR(t)}},
aLM(d){var w,v,u=A.jY(d).d.a,t=C.a([],x.t)
for(w=0;v=$.Hi(),w<v.length;++w){v=v[w]
if(v>u&&v<64)t.push(w)}return t},
cTp(d,e){var w,v,u=this,t=u.x
if(t.aj(0,d))return u.fU("There is already a box at "+A.jY(d).b+".")
w=A.jY(d)
v=w.c
if(!v&&e!=="wall")return u.fU("That is a ceiling box. On the wall you use a plain wall box (the blue one with ears).")
if(v&&e==="wall")return u.fU("A wall box cannot go in the ceiling. Use a round ceiling box.")
if(w.e==="fan"&&e!=="fan"){if(!u.b)return u.fU('A fan is heavy and it shakes. It needs a box that says "fan rated". A plain ceiling box can let the fan fall.')
t.n(0,d,e);++u.f
return B.aZY}t.n(0,d,e)
t=v?"ceiling joist":"side of the stud"
return new A.eC(!0,w.b+": box fixed to the "+t+".",!1,"")},
cNS(d){var w,v=this
if(d<0||d>=$.Hi().length)return B.aZS
w=v.y
if(w.t(0,d))return v.fU("That stud already has a hole.")
if(v.x.a===0)return v.fU("Mount the boxes first. Then you know where the cable has to go and which studs need a hole.")
w.M(0,d)
return B.aZC},
cWD(d){var w,v,u,t,s=this,r=A.jY(d)
if(!s.x.aj(0,d))return s.fU("There is no box at "+r.b+". Mount the box first, then pull the cable to it.")
w=s.z
if(w.t(0,d))return s.fU("The cable is already there.")
v=s.aLM(d)
u=C.T(v).k("Z<1>")
t=C.C(new C.Z(v,new A.csR(s),u),u.k("L.E"))
if(t.length!==0){w=D.o.V($.Hi()[D.d.gI(t)])
v=t.length
u=v===1?"it":"the studs"
return s.fU("The cable is stuck: the stud at "+w+" inches has no hole. Drill "+u+" first ("+v+" left on the way).")}w.M(0,d)
return new A.eC(!0,"Cable pulled from the panel to "+r.b+", through the studs and along the ceiling.",!1,"")},
gaJ6(){return this.gant().d_(0,new A.csS(this))},
aqa(d){var w,v,u,t
for(w=this.Q,w=new C.cH(w,C.a7(w).k("cH<1,2>")).gaf(0);w.C();){v=w.d
u=v.b
if(u.a){t=v.a
t=d>=t&&d<=t+48}else t=!1
if(t)return u}return null},
cQG(d){var w,v,u=this
if(!u.gaJ6())return u.fU("Finish the rough-in first. The cable and the boxes must be in before the drywall hides the studs.")
if(!D.d.t(B.a5g,d))return B.aZq
if(!D.d.t(B.ov,d))return u.fU("The edge of the sheet would land between two studs. The sheet needs a stud under every edge, so there is nothing to screw it to. Start at the left corner (a stud) and move one sheet width (48 inches) at a time.")
w=u.Q
v=w.h(0,d)
if((v==null?null:v.a)===!0)return u.fU("There is already a sheet there.")
v=w.h(0,d)
if(v==null){v=x.S
v=new A.aw5(C.aX(v),C.aX(v))}v.a=!0
w.n(0,d,v)
return B.aZB},
aqv(d){var w,v,u,t=C.a([],x.t)
for(w=d+48,v=0;u=$.Hi(),v<u.length;++v){u=u[v]
if(u>=d&&u<=w)t.push(v)}return t},
cMN(d){var w,v,u=this,t=A.jY(d)
if(t.c)return u.fU("Ceiling fixtures do not need an opening in the wall.")
if(!u.x.aj(0,d))return u.fU("There is no box at "+t.b+".")
w=u.aqa(t.d.a)
if(w==null)return u.fU("There is no sheet over this box yet. Hang the sheet first, then cut the opening.")
v=w.b
if(v.t(0,d))return u.fU("The opening is already cut.")
v.M(0,d)
return B.aZL},
aL_(d,e,f){var w,v,u,t,s,r=this
if(f)return r.fU("Missed the stud! There is only air behind the sheet here. The screw would pull through the paper. Screw only where a stud is behind the sheet (every 16 inches).")
w=x.dD
v=C.C(new C.Z(B.ov,new A.csT(r,d),w),w.k("L.E"))
if(v.length===0)return r.fU("There is no sheet here yet.")
u=d*10+e
if(D.d.d_(v,new A.csU(r,u)))return r.fU("There is already a screw there.")
for(w=v.length,t=r.Q,s=0;s<v.length;v.length===w||(0,C.M)(v),++s)t.h(0,v[s]).c.M(0,u)
return B.aZN},
boh(d,e){return this.aL_(d,e,!1)},
bpV(d){var w=this.Q.h(0,d)
if(w==null||!w.a)return!1
return D.d.d_(this.aqv(d),new A.csW(w))},
gaDp(){return D.d.d_(B.ov,new A.csJ(this))},
gaDo(){var w=this.gant()
return new C.Z(w,new A.csH(),C.a7(w).k("Z<cs.E>")).d_(0,new A.csI(this))},
cYB(d){var w,v=this
if(!v.gaDp())return v.fU("Hang all the sheets first.")
if(!D.d.d_(B.ov,v.gaqb()))return v.fU("Finish screwing every sheet to the studs first. Tape goes on a solid wall.")
w=v.as[d]
if(w.a)return v.fU("This seam already has tape.")
w.c=w.a=!0
return B.aZu},
cTs(d){var w,v=this,u=v.as[d]
if(!u.a)return v.fU("Tape first. The mud goes over the tape.")
if(!u.c)return v.fU("The last coat is still wet. Let it dry before the next coat.")
w=u.b
if(w>=3)return v.fU("Three coats are enough. Now sand it.");++w
u.b=w
u.c=!1
return new A.eC(!0,"Coat "+w+" of joint compound spread. Let it dry.",!1,"")},
cSj(){var w,v=this.as
if(D.d.d_(v,new A.csP()))return B.aZI
for(w=0;w<2;++w)v[w].c=!0
return B.aZW},
bo3(d){var w=this,v=w.as[d]
if(v.b<3)return w.fU("Put on all three coats of mud first. Sanding now would just rub off the tape.")
if(!v.c)return w.fU("The mud is still wet. Let it dry first.")
if(v.d)return w.fU("Already sanded.")
v.d=!0
return B.aZr},
cVM(d){var w=this,v=w.Q.h(0,d)
if(v==null||!v.a)return w.fU("There is no sheet there.")
if(!w.gaDo())return w.fU("Cut the openings for the boxes before you paint. Otherwise the paint covers the boxes.")
if(!D.d.d_(w.as,new A.csQ()))return w.fU("Sand the seams first. Paint shows every bump.")
if(v.e)return w.fU("This sheet is already painted.")
v.e=!0
return B.aZn},
gwG(){var w=this
return w.gaDp()&&D.d.d_(B.ov,w.gaqb())&&w.gaDo()&&D.d.d_(w.as,new A.csL())&&D.d.d_(B.ov,new A.csM(w))},
NE(){var w,v
for(w=this.at,w=new C.dq(w,w.r,w.e);w.C();){v=w.d.b
v.a=this.ax&&!this.ay}},
c1i(d,e){if(d.c)return e==="light"||e==="fan"?"":"A ceiling box holds a light or a fan, not an outlet or a switch."
return D.d.t(B.lJ,e)||D.d.t(B.jW,e)?"":"A light or a fan hangs from the ceiling. A wall box holds an outlet, a GFCI or a switch."},
bgq(d,e){var w,v,u,t,s,r=this,q=A.jY(d)
if(!r.gwG())return r.fU("Finish the drywall first. Devices go in after the walls are painted.")
w=r.x
if(!w.aj(0,d)||!r.z.t(0,d))return r.fU("There is no box with cable at "+q.b+".")
v=r.at
if(v.aj(0,d))return r.fU("There is already a device there. Pull it out first if you want to move it.")
u=r.c1i(q,e)
if(u.length!==0)return r.fU(u)
if(!(D.d.t(B.jW,e)&&q.e==="low"))t=!D.d.t(B.jW,e)&&!q.c&&q.e==="switch"
else t=!0
if(t){if(!r.b)return r.fU(D.d.t(B.jW,e)?"A switch goes about 48 inches from the floor, where a hand falls naturally. This box is down at outlet height.":"Outlets go low, about 16 inches from the floor. This box is up at switch height.");++r.f
r.cy.push("Wrong height at "+q.b+".")}t=e==="fan"
if(t&&w.h(0,d)!=="fan")if(!r.b)return r.fU("This box is not fan rated. A fan on it can fall. Take the box out and put in a fan-rated one.")
s=new A.CE(C.U(x.S,x.N))
s.r=r.b
s.y=r.dx
s.x=!(t&&w.h(0,d)!=="fan")
s.a=r.ax&&!r.ay
v.n(0,d,new A.aUR(e,s))
if(e==="light")w="Light fixture"
else if(t)w="Ceiling fan"
else if(e==="gfci")w="GFCI outlet"
else w=e==="switch"?"Switch":A.agU(e)
return new A.eC(!0,w+" is held up to "+q.b+". Turn the breaker OFF, then wire it.",!1,"")},
bj6(d){var w=this,v=w.at,u=v.h(0,d)
if(u==null)return B.aZy
if(w.ax&&!w.ay&&!u.b.w){if(w.b)return w.a2n()
return w.a2C()}v.W(0,d)
w.CW.W(0,d)
w.cx.W(0,d)
w.ch.W(0,d)
return B.aZQ},
a2C(){++this.r;++this.f
return B.aZO},
a2n(){var w,v,u=this;++u.r;--u.e
u.ax=!1
u.NE()
w=u.e
if(w<=0){u.w=!0
return B.aZx}v=w===1?"life":"lives"
return new A.eC(!1,"ZAP! You touched a live wire and got a shock. The breaker is now off. "+w+" "+v+" left. Always turn the breaker OFF and test the wires first.",!0,"shock")},
beM(d,e,f){var w,v,u,t,s=this,r=s.at.h(0,d)
if(r==null)return B.abY
s.NE()
w=A.t2(r.a)
v=D.d.fP(w.f,new A.csN(f))
u=A.hxN(w,r.b,e,v,!0)
t=u==null
if(t&&s.dx)return B.aZp
if(t){if(!s.b&&!v.c.t(0,e)){++s.f
return new A.eC(!0,v.b+": fastened. Careful: "+C.w(w.r.$2(e,v))+" It will burn or trip the breaker when the power comes on.",!0,"")}return new A.eC(!0,v.b+": wire fastened.",!1,"")}if(D.a.a0(u,"SHOCK"))return s.a2n()
if(D.a.a0(u,"STOP"))return s.a2C();++s.f
return new A.eC(!1,u,!1,"")},
bk5(d,e){var w,v=this,u=v.at.h(0,d)
if(u==null)return B.Ws
v.NE()
w=u.b
if(w.a&&w.c===0){if(v.b)return v.a2n()
return v.a2C()}w=w.b
w.bs(w,new A.csX(e))
return B.aZV},
biM(d){var w,v,u=this,t=u.at.h(0,d)
if(t==null)return B.abY
w=A.t2(t.a)
v=t.b
if(!A.bFf(w,v))return u.fU("Every wire must be fastened first.")
if(u.ax&&!u.ay){if(u.b)return u.a2n()
return u.a2C()}v.c=1
return B.aZG},
biK(d){var w,v=this,u=v.at.h(0,d)
if(u==null)return B.Ws
if(v.ax&&!v.ay){if(v.b)return v.a2n()
return v.a2C()}w=u.b
w.c=0
w.d=!1
return B.aZM},
bdB(d){var w=this.at.h(0,d)
if(w==null||w.b.c!==1)return this.fU("Push the device into the box first.")
w.b.c=2
return B.aZP},
cYC(){var w,v,u,t,s,r,q,p,o,n=C.a([],x.fJ),m=this.d
m===$&&C.c()
w=m.length
v=this.at
u=0
for(;u<m.length;m.length===w||(0,C.M)(m),++u){t=m[u]
s=t.a
r=v.h(0,s)
q=t.b
p=A.t2(q)
o=A.jY(s).b+": "+p.b
if(r==null||r.a!==q){n.push(new A.abd(o,A.fPX(p),B.dgJ,!0))
continue}s=A.fPX(p)
q=r.b
n.push(new A.abd(o,s,A.h7r(p,q),q.x))}return n},
cYD(){var w,v,u,t,s,r=C.aX(x.N),q=this.d
q===$&&C.c()
w=q.length
v=0
for(;v<q.length;q.length===w||(0,C.M)(q),++v)r.M(0,q[v].b)
q=C.a([],x.W)
for(r=C.eo(r,r.r,r.$ti.c),w=r.$ti.c;r.C();){u=r.d
u=B.aGE.h(0,u==null?w.a(u):u)
if(u==null)u=B.azR
t=C.T(u)
s=new C.jy(u,0,2,t.k("jy<1>"))
s.pg(u,0,2,t.c)
D.d.v(q,s)}return q},
apk(d){var w=this.at
return A.Lf(A.t2(w.h(0,d).a),w.h(0,d).b)},
aJf(){var w=this
if(w.ay){w.ax=w.ay=!1
w.NE()
return B.aZE}w.ax=!w.ax
w.NE()
if(!w.ax)return B.aZw
return w.c8g()},
c8g(){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=C.a([],x.s),i=k.db
i.a7(0)
for(w=k.at,v=new C.cH(w,C.a7(w).k("cH<1,2>")).gaf(0),u=k.cx,t=!1,s=!1,r=!1;v.C();){q=v.d
p=q.b.b
if(p.c===0)continue
o=q.a
n=A.Lf(A.t2(w.h(0,o).a),w.h(0,o).b)
p.d=p.c>=2
m=n.r
if(m!=="none"){i.n(0,o,m)
p.z=m
r=!0}if(n.d)t=!0
if(n.e){p.w=!0
u.M(0,o)
s=!0}if(n.a!=="ok"&&!k.dx)j.push(A.jY(o).b+": "+n.b)}if(t){k.ay=!0
k.NE()
l=s?"BANG! Sparks, smoke and flames. ":"Snap! "
i=k.dx?"The breaker tripped.":l+" The breaker tripped. "+D.d.aH(j," ")+" Fix it, then flip the breaker OFF and ON again."
return new A.eC(!1,i,!0,s?"burn":"trip")}if(r)return new A.eC(!1,k.dx?"Power is on.":"Power is on, and something is wrong. "+D.d.aH(j," "),!0,"arc")
if(j.length!==0)return new A.eC(!0,"Power is on. "+D.d.aH(j," "),!0,"")
return B.aZJ},
aFR(d){var w,v,u,t,s,r,q=this,p=q.at,o=p.h(0,d)
if(o==null||!D.d.t(B.jW,o.a)||o.b.c<2)return B.aZU
w=q.ch
if(w.t(0,d))w.W(0,d)
else w.M(0,d)
v=q.d
v===$&&C.c()
u=C.T(v).k("Z<1>")
t=C.C(new C.Z(v,new A.csO(d),u),u.k("L.E"))
if(t.length===0)return B.aZF
s=D.d.gI(t)
v=s.a
r=q.ang(v)
if(w.t(0,d)&&r){p=p.h(0,v)
if(p!=null)p.c=!0
return new A.eC(!0,(s.b==="fan"?"The fan spins":"The light turns on")+". The switch works.",!1,"")}if(w.t(0,d)){p=s.b
return new A.eC(!1,(p==="fan"?"The fan":"The light")+" did not come on. Check the breaker and the wires on the switch and on the "+p+".",!1,"")}return B.aZT},
a4D(d){var w,v=this.at.h(0,d)
if(v!=null){w=v.b
w=w.c<2||w.w}else w=!0
if(w)return!1
return this.apk(d).c},
ang(d){var w=this,v=w.cVx(d),u=v==null,t=u?null:v.c,s=!0
if(!u)if(t!=null)u=!(w.ax&&!w.ay)||!w.a4D(d)||!w.a4D(t)
else u=s
else u=s
if(u)return!1
return w.ch.t(0,t)},
biu(d,e){var w,v,u,t=this,s="Nothing happens.",r=t.at.h(0,d)
if(r==null||!D.d.t(B.lJ,r.a)||r.b.c<2)return t.fU("There is no finished outlet there to plug into.")
w=t.CW
if(w.aj(0,d))return t.fU("Something is already plugged in.")
w.n(0,d,e)
w=r.b
if(w.w)return B.aZz
v=t.apk(d)
if(t.ax&&!t.ay&&t.a4D(d)){r.c=!0
if(v.a!=="ok"){w=t.dx
u=w?A.csG(e)+" runs.":A.csG(e)+" runs, but this outlet is NOT safe. "+v.b
return new A.eC(!0,u,!w,"")}return new A.eC(!0,A.csG(e)+" runs. The outlet works.",!1,"")}if(!(t.ax&&!t.ay))return B.aZD
u=v.r
if(u!=="none"){t.db.n(0,d,u)
w.z=u
w=t.dx?s:A.csG(e)+" does not run. "+v.b
return new A.eC(!1,w,!0,u==="fire"?"burn":"arc")}return new A.eC(!1,t.dx?s:"Nothing happens. "+v.b,!0,"")},
bk8(d){if(this.CW.W(0,d)==null)return B.Ws
return B.aZv},
bid(d){var w,v=this
if(d>=0){w=v.d
w===$&&C.c()
w=d>=w.length}else w=!0
if(w)return 2
if(v.th(d))return 2
w=v.d
w===$&&C.c()
return v.at.h(0,w[d].a)==null?0:1},
th(d){var w,v,u,t=this
if(d>=0){w=t.d
w===$&&C.c()
w=d>=w.length}else w=!0
if(w)return!0
w=t.d
w===$&&C.c()
v=w[d]
w=v.a
u=t.at.h(0,w)
if(u==null||!A.h3h(v.b,u.a)||u.b.c<2)return!1
return t.apk(w).a==="ok"},
gbky(){var w,v,u,t,s,r,q,p,o,n=this.d
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
if(q!==p)if(!(D.d.t(B.lJ,q)&&D.d.t(B.lJ,p)))if(!(D.d.t(B.jW,q)&&D.d.t(B.jW,p)))if(q==="light"||q==="fan")q=p==="light"||p==="fan"
else q=!1
else q=o
else q=o
else q=o
q=!q||r.b.c<2}else q=!0
if(q)return!1
if(A.Lf(A.t2(v.h(0,s).a),v.h(0,s).b).a!=="ok")return!1}return!0},
gbe4(){var w,v,u,t,s,r,q,p,o,n=this.d
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
if(q!==p)if(!(D.d.t(B.lJ,q)&&D.d.t(B.lJ,p)))if(!(D.d.t(B.jW,q)&&D.d.t(B.jW,p)))if(q==="light"||q==="fan")q=p==="light"||p==="fan"
else q=!1
else q=o
else q=o
else q=o
q=!q||r.b.c<2}else q=!0
if(q)return!1
if(A.Lf(A.t2(v.h(0,s).a),v.h(0,s).b).a!=="ok")return!1
s=t.b
if(D.d.t(B.lJ,s)){if(!r.c)return!1}else if(!D.d.t(B.jW,s)&&!r.c)return!1}return!0}}
A.iW.prototype={}
A.On.prototype={
R(){var w,v=new A.xh(-0.12,0.4,205,B.aaP,$.au())
v.f=300
v.z=0.7
v.w=0.05
w=new C.wt()
$.x5()
w.h2(0)
return new A.aFl(v,w,C.U(x.S,x.i))}}
A.aFl.prototype={
gCV(d){var w=this.e
if(w===$){this.a.toString
w=D.o.F(Date.now(),1e5)
this.e=w}return w},
Z(){var w,v,u=this
u.a2()
w=u.a.e
if(w==null){w=u.gCV(0)
u.a.toString
w=A.csF(null,null,!1,w,!0)}u.d=w
v=u.a
if(v.c)w.dx=!0
if(v.e!=null&&w.gwG())u.y=2
if(u.a.f){u.d.am9()
u.y=2}u.r=A.wV(u.d,new A.rK(u.z,u.Q,!1))
w=u.f
w.y=0
w.z=1.1},
q(){var w=this.cy
if(w!=null)w.a4(0)
this.a1()},
c8p(){var w=this,v=w.d
v===$&&C.c()
w.r=A.wV(v,new A.rK(w.z,w.Q,!1))},
qC(d,e){var w=this,v=w.cy
if(v!=null)v.a4(0)
w.m(new A.etx(w,d,e))
w.cy=C.cI(D.jy,new A.ety(w))},
aep(d){return this.qC(d,!1)},
jD(d){var w,v,u,t,s,r,q,p,o=this,n=d.a
if(n)A.yN()
else A.fW(180,220,0.25,"square")
w=d.d
if(w==="shock"){C.fL()
o.m(new A.esz(o))
C.bQ(D.mE,new A.esA(o),x.P)}v=w==="burn"
if(v||w==="trip"||w==="arc"){u=o.d
u===$&&C.c()
u=u.db
u=new C.hD(u,u.r,u.e)
t=o.x
s=o.w
while(u.C()){r=u.d
q=s.gi9()
p=o.d.db.h(0,r)==="fire"?7:4.5
t.n(0,r,q/1000+p)}C.fL()
w=w==="arc"
u=w?95:150
t=w?500:300
A.fW(u,t,0.5,w?"saw":"noise")
if(v){o.m(new A.esB(o))
C.bQ(D.eS,new A.esC(o),x.P)}}w=o.d
w===$&&C.c()
o.r=A.wV(w,new A.rK(o.z,o.Q,!1))
n=n&&!d.c
o.qC(d.b,n)
if(o.d.w&&o.c!=null)$.aV.x1$.push(new A.esD(o))
if(o.d.gbe4()&&!o.cx){o.cx=!0
$.aV.x1$.push(new A.esE(o))}},
b4C(){var w=this.ch?3.141592653589793:-0.12
this.f.hR(205,0.4,B.aaP,w)},
c8j(d,e){var w,v,u,t,s
if(this.Q>=0)return
w=this.f
v=w.cZA(d,e)
if(v==null||Math.abs(v.a)>78||Math.abs(v.b)>52)v=w.bf8(d,e,-47)
if(v==null)return
u=D.k.E(v.a,-70,70)
t=D.k.E(v.b,-46,48)
s=D.k.E(v.c,-6,100)
w.xi(Math.max(34,w.c*0.45),new A.q(u,t,s))
A.fW(560,50,0.25,"tri")},
aU7(){var w,v,u=this
u.ch=!1
w=u.f
w.w=0.05
w.z=0.7
w.r9(!1)
w.y=0
u.m(new A.esO(u))
v=u.d
v===$&&C.c()
u.r=A.wV(v,new A.rK(u.z,u.Q,!1))
w.hR(205,0.4,B.aaP,-0.12)},
c2S(){var w,v,u=this
u.ch=!1
w=u.f
w.r9(!1)
w.w=-0.95
w.y=0
w.z=1
u.m(new A.esQ(u))
v=u.d
v===$&&C.c()
u.r=A.wV(v,new A.rK(u.z,u.Q,!1))
w.hR(82,-0.55,B.fZ1,-0.12)},
bE1(){var w,v,u,t,s=this,r=s.d
r===$&&C.c()
r=r.CW
w=C.a7(r).k("cH<1,2>")
v=w.k("Z<L.E>")
u=C.C(new C.Z(new C.cH(r,w),new A.esF(),v),v.k("L.E"))
if(u.length===0){s.aep("Plug a TV into an outlet first. Then you can look behind it.")
return}t=A.jY(D.d.gI(u).a).d.a
s.ch=!1
r=s.f
r.r9(!1)
r.w=0.02
r.y=0
r.z=1.7
s.m(new A.esG(s))
s.r=A.wV(s.d,new A.rK(s.z,s.Q,!1))
w=t<0?-1.4:1.4
r.hR(60,0.12,new A.q(t,-30,14),w)
s.qC("This is the back of the TV. Tap the TV or its plug to pull the plug.",!0)},
bE_(){var w,v,u=this
u.ch=!0
w=u.f
w.r9(!0)
u.m(new A.esH(u))
v=u.d
v===$&&C.c()
u.r=A.wV(v,new A.rK(u.z,u.Q,!1))
w.hR(190,0.3,B.fZv,3.141592653589793)},
a_0(d,e){var w,v,u,t,s=this,r=A.jY(e),q=s.f
q.r9(!1)
q.y=0
s.m(new A.et6(s,e))
w=s.d
w===$&&C.c()
s.r=A.wV(w,new A.rK(s.z,s.Q,!1))
v=A.aia(r,B.fXt)
w=r.c
u=w?20:15
t=w?1.2:0.3
q.hR(u,w?-0.12:0.26,v,t)},
aeo(){var w,v=this
v.m(new A.esP(v))
w=v.d
w===$&&C.c()
v.r=A.wV(w,new A.rK(v.z,v.Q,!1))
v.b4C()},
c8n(d){var w,v,u,t,s,r,q,p=this
if(d===0){if(p.Q<0)p.m(new A.ett(p))
return}w=p.Q
if(w>=0)v=!(d>=5000&&d<5700)
else v=!1
if(v)return
if(d>=5000&&d<5700){v=d-5000
u=D.o.ao(v,100)
if(w!==u){if(p.z==="tester")p.aC5(u)
else{p.m(new A.etu(p))
p.a_0(0,u)}return}p.b2l(u,D.o.F(v,100))
return}if(d>=1000&&d<1010)if(p.z==="drill"){w=p.d
w===$&&C.c()
p.jD(w.cNS(d-1000))
return}if(d>=2000&&d<2007){p.b2n(d-2000)
return}if(d>=3000&&d<3007){p.b2m(d-3000)
return}if(d>=6000&&d<6005){if(p.z==="sheet"){w=p.d
w===$&&C.c()
p.jD(w.cQG(B.a5g[d-6000]))}return}if(d>=6100&&d<6103){t=B.ov[d-6100]
if(p.z==="paint"){w=p.d
w===$&&C.c()
p.jD(w.cVM(t))
return}}if(d>=6200&&d<6202){s=d-6200
switch(p.z){case"tape":w=p.d
w===$&&C.c()
p.jD(w.cYB(s))
return
case"mud":w=p.d
w===$&&C.c()
p.jD(w.cTs(s))
return
case"sand":w=p.d
w===$&&C.c()
p.jD(w.bo3(s))
return}}if(d>=7000&&d<7100){if(p.z==="screw"){w=p.d
w===$&&C.c()
v=d-7000
p.jD(w.boh(D.o.ao(v,10),D.o.F(v,10)))}return}if(d>=7500&&d<7600){if(p.z==="screw"){w=p.d
w===$&&C.c()
v=d-7500
p.jD(w.aL_(D.o.ao(v,10),D.o.F(v,10),!0))}return}if(d===8000){w=p.d
w===$&&C.c()
p.jD(w.aJf())
return}if(d>=8200&&d<8207){w=p.d
w===$&&C.c()
p.jD(w.bk8(d-8200))
return}if(d>=8100&&d<8107){w=p.d
w===$&&C.c()
r=w.CW.h(0,d-8100)
A:{if("tv"===r){w="The TV"
break A}if("lamp"===r){w="The lamp"
break A}if("toaster"===r){w="The toaster"
break A}w="The hair dryer"
break A}p.qC(w+" is plugged in. To pull the plug, go behind it (the Behind the TV button) and tap the plug on the wall.",!0)
return}if(p.z==="look"){w=p.r
w===$&&C.c()
q=w.b.h(0,d)
if(q!=null){p.m(new A.etv(p,d))
p.qC(q.a+": "+q.b,!0)}}},
b2n(d){var w,v,u,t=this,s=t.d
s===$&&C.c()
if(s.at.aj(0,d)){s=t.z
s=s!=="tester"&&s!=="look"&&!D.d.t(B.I7,s)}else s=!1
if(s){t.m(new A.etr(t))
t.a_0(0,d)
return}s=t.z
switch(s){case"wall":case"ceiling":case"fanbox":w=t.d
t.jD(w.cTp(d,s==="fanbox"?"fan":s))
return
case"cable":t.jD(t.d.cWD(d))
return
case"knife":t.jD(t.d.cMN(d))
return
case"outlet":case"gfci":case"switch":case"split":case"v240four":case"v240three":case"v240only":case"isolated":case"switch2p":case"switch3":case"switch4":case"switchsmart":case"switchcombo":case"light":case"fan":v=t.d.bgq(d,s)
t.jD(v)
if(v.a){s=t.d.at.h(0,d).b
w=t.d
s.f=!w.b&&!w.dx
t.z=""
t.a_0(0,d)}return
case"tester":t.aC5(d)
return}if(t.d.at.aj(0,d)){t.a_0(0,d)
return}if(t.d.gwG()&&t.d.x.aj(0,d)&&!t.d.at.aj(0,d)){t.qC("This box is empty. Pick what you want to put in (an outlet, a switch, a light or a fan) from the tray, then tap the box.",!0)
return}s=t.r
s===$&&C.c()
u=s.b.h(0,2000+d)
if(u!=null){t.m(new A.ets(t,d))
t.qC(u.a+": "+u.b,!0)}},
aC5(d){var w,v=this.d
v===$&&C.c()
w=v.ax&&!v.ay&&v.x.aj(0,d)&&this.d.z.t(0,d)
v=w?"The tester glows: this box is LIVE (120 volts). Turn the breaker OFF before you touch any wire.":"The tester stays dark: no power here. It is safe to work. (Test again after you turn the breaker off, every time.)"
this.qC(v,!w)
A.fW(w?1400:500,120,0.25,"tri")},
b2m(d){var w,v=this,u=v.d
u===$&&C.c()
w=u.at.h(0,d)
if(w==null)return
if(D.d.t(B.I7,v.z)){v.jD(v.d.biu(d,v.z))
return}u=v.z
if(u==="tester"){v.aC5(d)
return}if(u==="flip"){if(D.d.t(B.jW,w.a)&&w.b.c>=2)v.jD(v.d.aFR(d))
else v.aep("Only a finished switch can be flipped.")
return}v.m(new A.etq(v))
v.a_0(0,d)},
b2l(d,e){var w,v,u,t,s,r,q,p,o=this,n=o.d
n===$&&C.c()
w=n.at.h(0,d)
if(w==null)return
if(B.aQq.t(0,e))return
n=w.a
v=A.t2(n)
u=v.f
t=C.T(u).k("Z<1>")
s=C.C(new C.Z(u,new A.eti(e),t),t.k("L.E"))
r=A.hxS(n,e)
n=r!=null
if(n){u=w.b
u=u.b.iJ(0,r)&&u.c===0}else u=!1
if(u){o.jD(o.d.bk5(d,r))
return}u=!1
if(s.length!==0){t=w.b
if(t.c===0){t=t.b
if(t.h(0,e)!=null)u=o.at.length===0||t.h(0,e)===o.at}}if(u){n=o.d
u=w.b.b.h(0,e)
u.toString
o.jD(n.bk5(d,u))
o.m(new A.etj(o))
return}if(n){n=w.b
n=n.c===0&&!n.b.iJ(0,r)&&D.d.b2(v.e,new A.etk(r))}else n=!1
if(n){o.m(new A.etl(o,r,d,e))
if(o.at.length!==0)o.qC(D.d.fP(v.e,new A.etm(r)).b+": picked up. Now tap where it joins.",!0)
return}if(s.length!==0&&w.b.c===0){n=o.at
if(n.length===0){o.aep("Pick a wire below first, then tap "+D.d.gI(s).b+".")
o.m(new A.etn(o,d,e))
return}q=o.d.beM(d,n,e)
o.jD(q)
if(q.a)o.m(new A.eto(o))
return}n=o.r
n===$&&C.c()
p=n.b.h(0,5000+d*100+e)
if(p!=null){o.m(new A.etp(o,d,e))
o.qC(p.a+": "+p.b,!0)}},
c8q(){var w,v,u,t,s,r,q=this,p=C.a([],x.ek)
for(w=0;w<7;++w){v=B.uD[w]
u=q.d
u===$&&C.c()
t=v.a
s=u.at.aj(0,t)
r=q.z
A:{if("wall"===r){u=!v.c&&!q.d.x.aj(0,t)
break A}if("ceiling"===r||"fanbox"===r){u=v.c&&!q.d.x.aj(0,t)
break A}if("cable"===r){u=q.d.x.aj(0,t)&&!q.d.z.t(0,t)
break A}if("knife"===r){u=!v.c&&q.d.x.aj(0,t)
break A}u=D.d.t(B.lJ,r)||D.d.t(B.jW,q.z)
if(u){u=!v.c&&q.d.x.aj(0,t)&&!s
break A}if("light"===r||"fan"===r){u=v.c&&q.d.x.aj(0,t)&&!s
break A}if("tv"===r||"lamp"===r||"toaster"===r||"hairdryer"===r){u=s&&D.d.t(B.lJ,q.d.at.h(0,t).a)
break A}if("tester"===r){u=q.d.x.aj(0,t)
break A}u=!1
break A}if(u)p.push(new C.z(t,v.b))}return p},
cyr(){var w,v,u,t,s,r,q,p=null,o=this.c8q()
if(o.length===0)return D.bJ
w=C.a([],x.p)
for(v=o.length,u=0;u<o.length;o.length===v||(0,C.M)(o),++u){t={}
s=o[u]
t.a=null
t.a=s.a
r=new C.aP(12,12)
q=new C.ay(D.b3,1,D.r,-1)
w.push(C.aB(p,C.p(p,new C.y("\ud83d\udccd "+s.b,p,D.oF,p,p,p,p,p,p,p,p,p),D.f,p,p,new C.o(D.eR.j(0.35),p,new C.bK(q,q,q,q),new C.bg(r,r,r,r),p,p,D.n),p,p,p,p,B.a_7,p,p,p),D.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new A.etz(t,this),p,p,p,p,p,p,!1,D.a4))}return new C.D(D.hZ,C.bX(D.bC,w,D.bq,p,6,6),p)},
bQt(){var w=null,v=this.c
v.toString
C.cj(w,w,!1,w,new A.esN(this),v,w,!0,!0,x.H)},
c8h(){var w=null,v=this.c
v.toString
C.cj(w,w,!0,w,new A.esK(this),v,w,!0,!0,x.H)},
axF(d){this.m(new A.esR(this,d))
this.aU7()},
b_0(){return this.axF(!1)},
c8l(){var w,v,u,t,s,r,q,p,o,n=this,m=n.d
m===$&&C.c()
if(m.w)return"The job is over."
switch(n.y){case 0:m=m.d
m===$&&C.c()
w=C.T(m).k("Z<1>")
v=C.C(new C.Z(m,new A.esS(n),w),w.k("L.E"))
if(v.length!==0){u=D.d.gI(v)
t=A.jY(u.a)
m=A.agU(u.b)
if(t.c)w=t.e==="fan"?"fan box":"ceiling box"
else w="wall box"
return"Mount a box at "+t.b+" ("+m.toLowerCase()+" goes here): pick a "+w+", then tap the glowing spot."}m=n.d.d
m===$&&C.c()
w=C.T(m).k("Z<1>")
s=C.C(new C.Z(m,new A.esT(n),w),w.k("L.E"))
if(s.length!==0){t=D.d.gI(s).a
m=n.d.aLM(t)
r=new C.Z(m,new A.esU(n),C.T(m).k("Z<1>")).gL(0)
return r>0?"The cable comes from the panel on the right. Pick the drill and tap each stud on the way to "+A.jY(t).b+" ("+r+" left).":"Pick the cable roll and tap "+A.jY(t).b+"."}return"Rough-in done! Open 2 Drywall."
case 1:if(!m.gaJ6())return"Finish the rough-in first (tab 1). Drywall hides the wires."
if(!n.d.gaDp())return"Pick a drywall sheet and tap a stud edge to hang it. Three sheets cover the wall."
if(!n.d.gaDo())return"Pick the drywall saw and tap each box to cut its opening."
if(!D.d.d_(B.ov,n.d.gaqb()))return"Pick the screw gun and put a screw in every glowing spot on the studs."
if(D.d.b2(n.d.as,new A.esX()))return"Pick the tape and tap each seam between two sheets."
if(D.d.b2(n.d.as,new A.esY()))return D.d.b2(n.d.as,new A.esZ())?'The mud is wet. Press "Let it dry", then the next coat.':"Pick the mud and tap each seam. It needs three coats, with drying in between."
if(D.d.b2(n.d.as,new A.et_()))return D.d.b2(n.d.as,new A.et0())?'Press "Let it dry", then sand.':"Pick the sander and tap each seam."
if(!n.d.gwG())return"Pick the roller and paint each sheet."
return"Drywall done! Open 3 Devices."
default:if(!m.gwG())return"Finish the drywall first (tab 2)."
m=n.d.d
m===$&&C.c()
w=C.T(m).k("Z<1>")
q=C.C(new C.Z(m,new A.et1(n),w),w.k("L.E"))
if(q.length!==0){u=D.d.gI(q)
return"The breaker being on is not the end: the job is done only when every device is in and wired. Tap the blue square at "+A.jY(u.a).b+" to put in the "+A.agU(u.b).toLowerCase()+". ("+C.w(new A.et4().$1(new C.N(q,new A.et2(),C.T(q).k("N<1,H>"))))+" still need a device.)"}m=n.d.d
m===$&&C.c()
w=C.T(m).k("Z<1>")
p=C.C(new C.Z(m,new A.et3(n),w),w.k("L.E"))
if(p.length!==0)return"Tap "+A.jY(D.d.gI(p).a).b+" to work on it: breaker OFF, wires, push in, cover on."
m=n.d
if(!m.ax)return"Turn the breaker ON (tap the panel or the breaker button) and test."
m=m.d
m===$&&C.c()
w=C.T(m).k("Z<1>")
o=C.C(new C.Z(m,new A.esV(n),w),w.k("L.E"))
if(o.length!==0)return"Pick the TV or the lamp and plug it into "+A.jY(D.d.gI(o).a).b+" to test it."
m=n.d.d
m===$&&C.c()
return"Flip the wall switch to test the "+(D.d.b2(m,new A.esW())?"fan":"light")+"."}},
B(a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this,a2=null,a3=B.dqY[a1.y],a4=a1.Q
if(a4>=0){w=a1.d
w===$&&C.c()
v=w.at.h(0,a4)}else v=a2
a4=v==null
u=a4?a2:A.t2(v.a)
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
for(l=0;l<3;++l)m.push(new C.D(D.Nc,new C.y(l<a1.d.e?"\u2764\ufe0f":"\ud83d\udda4",a2,D.Aj,a2,a2,a2,a2,a2,a2,a2,a2,a2),a2))
m.push(D.bm)
k=a1.d
if(k.ay)k=D.ke
else{k=k.ax
k=k?D.ek:D.e_}k=k.j(0.95)
j=C.m(16)
i=a1.d
h=i.ay
if(h)g=D.cS
else{g=i.ax
g=g?D.ct:D.bj}g=C.J(g,D.r,1.4)
if(h)i="TRIPPED: tap to reset"
else{i=i.ax
i=i?"Breaker ON":"Breaker OFF"}m.push(C.aB(a2,C.p(a2,C.d(i,a2,a2,a2,a2,a2,a2,B.flZ,a2,a2,a2),D.f,a2,a2,new C.o(k,a2,g,j,a2,a2,D.n),a2,a2,a2,a2,D.rp,a2,a2,a2),D.y,!1,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,new A.etH(a1),a2,a2,a2,a2,a2,a2,!1,D.a4))
m=C.a([C.B(m,D.m,a2,D.e,D.P,0,a2,a2)],n)
k=a1.ch
j=k?"In front":"Behind the wall"
i=k?G.anT:G.anS
k=C.a([A.wW(j,D.bw,i,k,k?a1.gbS0():a1.gbDZ()),D.am,A.wW("Look up",D.b3,B.bNT,!1,a1.gc2R()),D.am,A.wW("Behind the TV",D.cS,W.a2f,!1,a1.gbE0()),D.am],n)
if(!a4){j=v.b
D.d.v(k,C.a([A.wW("Labels",D.aQ,N.Cj,j.f,new A.etI(a1,v)),D.am,A.wW("Hints",D.aC,D.rx,j.e,new A.etJ(a1,v)),D.O],n))}s=A.Yg(!1,a2,a1.f,new A.etT(a1),a2,p,r,o,a2,a2,q,a2,a1.gc8i(),new A.etU(a1),a1.gc8m(),s,!1,a2,m,k)
r=C.a([],n)
if(a4){a4=C.a([],n)
for(l=0;l<3;++l){q=l<2?6:0
p=a1.y===l?D.aC.j(0.2):D.dq
o=new C.aP(12,12)
f=new C.ay(a1.y===l?D.aC:D.bz,1,D.r,-1)
if(l===0)m=a1.d.gaJ6()
else{m=a1.d
m=l===1?m.gwG():m.gbe4()}m=m?"\u2705 ":""
k=B.dp9[l]
j=a1.y===l?D.aC:D.ae
a4.push(new C.bz(1,D.bb,C.aB(a2,C.p(a2,new C.ca(D.A,a2,a2,new C.y(m+k,a2,new C.F(!0,j,a2,a2,a2,a2,12,D.u,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2),a2,a2,a2,a2,a2,a2,a2,a2,a2),a2),D.f,a2,a2,new C.o(p,a2,new C.bK(f,f,f,f),new C.bg(o,o,o,o),a2,a2,D.n),a2,a2,a2,new C.Q(0,0,q,0),A1.Nf,a2,a2,a2),D.y,!1,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,new A.etV(a1,l),a2,a2,a2,a2,a2,a2,!1,D.a4),a2))}a4=C.a([C.B(a4,D.m,a2,D.e,D.i,0,a2,a2),D.am],n)
if(!a1.d.b){q=D.aQ.j(0.1)
p=C.m(10)
o=C.J(D.aQ.j(0.4),D.r,1)
a4.push(C.p(a2,C.d("\ud83d\udc49 "+a1.c8l(),a2,2,D.a1,a2,a2,a2,B.fnz,a2,a2,a2),D.f,a2,a2,new C.o(q,a2,o,p,a2,a2,D.n),a2,a2,a2,a2,D.cj,a2,a2,1/0))}else a4.push(B.fGx)
a4.push(D.am)
q=C.a([],n)
if(a1.y<2&&!a1.d.gwG())q.push(new C.D(E.u_,C.aB(a2,C.p(a2,B.b9o,D.f,a2,a2,new C.o(D.dF,a2,a2,C.m(14),a2,a2,D.n),a2,a2,a2,a2,D.eZ,a2,a2,a2),D.y,!1,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,new A.etW(a1),a2,a2,a2,a2,a2,a2,!1,D.a4),a2))
for(p=a3.length,e=0;e<p;++e){d=a3[e]
o=d.a
m=a1.z===o?D.aC.j(0.25):D.c.j(0.07)
k=new C.aP(14,14)
o=a1.z===o
j=o?D.aC:D.aZ
f=new C.ay(j,o?2:1,D.r,-1)
j=o?D.aC:D.ae
j=C.X(d.c,j,a2,a2,a2,19)
o=o?D.aC:D.c
q.push(new C.D(E.u_,C.aB(a2,C.p(a2,new C.ce(D.aM,D.e,D.i,D.m,a2,D.p,a2,0,C.a([j,D.bm,new C.y(d.b,a2,new C.F(!0,o,a2,a2,a2,a2,12.5,D.H,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2),a2,a2,a2,a2,a2,a2,a2,a2,a2)],n),a2),D.f,a2,a2,new C.o(m,a2,new C.bK(f,f,f,f),new C.bg(k,k,k,k),a2,a2,D.n),a2,a2,a2,a2,D.eZ,a2,a2,a2),D.y,!1,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,new A.etX(a1,d),a2,a2,a2,a2,a2,a2,!1,D.a4),a2))}if(a1.y===1)q.push(new C.D(E.u_,C.aB(a2,C.p(a2,B.b9f,D.f,a2,a2,new C.o(D.e_,a2,a2,C.m(14),a2,a2,D.n),a2,a2,a2,a2,D.eZ,a2,a2,a2),D.y,!1,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,new A.etY(a1),a2,a2,a2,a2,a2,a2,!1,D.a4),a2))
a4.push(new C.a6(a2,52,C.cf(q,a2,a2,a2,a2,D.aM,!1),a2))
if(a1.z.length!==0)a4.push(a1.cyr())
D.d.v(r,a4)}else{a4=C.a([],n)
q=v.b
if(q.c===0)for(p=D.d.gaf(u.e),o=new C.f5(p,new A.etZ(v)),m=q.b;o.C();){k=p.gT(0)
j=k.c
i=new C.aP(14,14)
h=a1.at
g=k.a
h=h===g
a0=h?D.b3:D.aZ
f=new C.ay(a0,h?3:1,D.r,-1)
a0=C.a([],n)
if(m.iJ(0,g))a0.push(new C.D(D.Nd,C.X(D.ef,k.d,a2,a2,a2,17),a2))
h=k.b
g=k.d
a0.push(new C.y(h,a2,new C.F(!0,g,a2,a2,a2,a2,12.5,D.u,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2),a2,a2,a2,a2,a2,a2,a2,a2,a2))
a4.push(C.aB(a2,C.p(a2,new C.ce(D.aM,D.e,D.P,D.m,a2,D.p,a2,0,a0,a2),D.f,a2,a2,new C.o(j,a2,new C.bK(f,f,f,f),new C.bg(i,i,i,i),a2,a2,D.n),a2,a2,a2,a2,D.yd,a2,a2,a2),D.y,!1,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,new A.eu_(a1,v,k),a2,a2,a2,a2,a2,a2,!1,D.a4))}a4=C.a([C.bX(D.bC,a4,D.bq,a2,6,8)],n)
if(q.c===0&&a1.at.length!==0){p=C.a([],n)
for(o=D.d.gaf(u.f),m=new C.f5(o,new A.etK(v));m.C();){k=o.gT(0)
j=D.eR.j(0.35)
i=new C.aP(12,12)
f=new C.ay(D.b3,1,D.r,-1)
p.push(C.aB(a2,C.p(a2,new C.y("\u279c "+k.b,a2,D.oF,a2,a2,a2,a2,a2,a2,a2,a2,a2),D.f,a2,a2,new C.o(j,a2,new C.bK(f,f,f,f),new C.bg(i,i,i,i),a2,a2,D.n),a2,a2,a2,a2,B.a_7,a2,a2,a2),D.y,!1,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,new A.etL(a1,k),a2,a2,a2,a2,a2,a2,!1,D.a4))}a4.push(new C.D(D.jg,C.bX(D.bC,p,D.bq,a2,6,6),a2))}a4.push(D.O)
p=C.a([A.ud("Back to the room",D.l9,a1.gc8k(),D.ae),D.ac],n)
if(q.c===0){u.toString
o=A.bFf(u,q)?"Push it into the box":"Fasten every wire"
p.push(A.ud(o,B.aoX,A.bFf(u,q)?new A.etM(a1):a2,D.aC))}if(q.c===1)D.d.v(p,C.a([A.ud("Pull it out",D.rB,new A.etN(a1),D.ae),D.ac,A.ud("Cover on",Z.wd,new A.etO(a1),D.aC)],n))
o=q.c>=2
if(o&&q.w)p.push(A.ud("Take out the burnt one",B.anL,new A.etP(a1),D.ct))
else if(o)p.push(A.ud("Pull it out of the wall",B.anL,new A.etQ(a1),D.ae))
a4.push(C.B(p,D.m,a2,D.e,D.i,0,a2,a2))
if(!q.w)D.d.v(a4,C.a([D.O,C.B(C.a([A.ud("Take it out and put in a different "+(D.d.t(B.jW,v.a)?"switch":"one"),D.kj,new A.etR(a1,v),D.aQ)],n),D.m,a2,D.e,D.i,0,a2,a2)],n))
D.d.v(r,a4)}a4=C.a([A.U9(D.aC,new A.etS(a1,a5),C.x(r,D.m,a2,D.e,D.P,0,D.p),s,"Phase "+(w+1)+"/3",t+" job",a2)],n)
if(a1.CW)a4.push(C.bT(0,C.dX(C.p(a2,a2,D.f,B.aib,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2),!0,a2),0,0,0))
return new C.an(D.a_,a2,D.aa,D.t,a4,a2)},
cs1(d){var w=this.d
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
break A}this.qC(w,!0)},
ch9(d){return C.bV(E.lA,null,new A.eth(this,d),d,!0,!0,!0,D.k2,!1,!1,x.H)}}
A.rK.prototype={}
A.ri.prototype={
a5(){return"FaultKind."+this.b}}
A.uy.prototype={}
A.MA.prototype={}
A.cw5.prototype={
bA_(d,e,f){var w,v,u,t,s,r,q,p=this,o=new C.e9()
o.d4(p.a)
w=C.C(B.de3,x.eP)
D.d.dZ(w,o)
v=C.aX(x.S)
u=C.a([],x.gw)
for(t=w.length,s=0;s<w.length;w.length===t||(0,C.M)(w),++s){r=w[s]
q=B.wD.h(0,r).e
if(v.t(0,q))continue
v.M(0,q)
u.push(new A.MA(r,o.aq(3)))
if(u.length>=d)break}p.c!==$&&C.aQ()
p.c=u
p.axG()},
pY(d,e){var w=this.c
w===$&&C.c()
return D.d.b2(w,new A.cwa(e))},
axG(){var w,v,u,t,s=this,r=s.d,q=r.d
q.a7(0)
if(s.pY(0,B.a0u))q.M(0,72)
if(s.pY(0,B.a0v))q.M(0,75)
q=s.pY(0,B.NS)
r.b=q
r.c=!q
r.w=s.pY(0,B.NT)
r.x=s.pY(0,B.a0z)
r.y=s.pY(0,B.a0A)
r.z=s.pY(0,B.a0y)
r.Q=s.pY(0,B.a0B)
r.as=s.pY(0,B.a0C)
r.at=s.pY(0,B.a0x)
q=r.f
q.a7(0)
r=r.r
r.a7(0)
w=s.c
w===$&&C.c()
w=D.d.gaf(w)
v=new C.f5(w,new A.cw6())
while(v.C()){u=w.gT(0)
t=u.c
u=u.b
if(t)r.M(0,u)
else q.M(0,u)}},
gcHu(){var w=this.c
w===$&&C.c()
return D.d.d_(w,new A.cw8())},
gcP2(){var w=this.c
w===$&&C.c()
return new C.Z(w,new A.cw9(),C.T(w).k("Z<1>")).gL(0)},
cOH(d){var w,v,u,t,s,r,q,p=this.c
p===$&&C.c()
w=p.length
v=d===86
u=d===92
t=0
for(;t<p.length;p.length===w||(0,C.M)(p),++t){s=p[t]
r=s.a
q=!0
if(B.wD.h(0,r).e!==d)if(!(r===B.NS&&v))r=r===B.NT&&u
else r=q
else r=q
if(r)return s}return null},
b_1(d){++this.f
return new A.eC(!1,d,!1,"")},
c8r(){var w,v,u,t,s=this;++s.r;--s.e
for(w=s.d,v=w.d,w=w.e,u=0;u<4;++u){t=B.axh[u]
if(!v.t(0,t))w.M(0,t)}w=s.e
if(w<=0){s.w=!0
return B.aZt}v=w===1?"life":"lives"
return new A.eC(!1,"ZAP! You touched a live wire and got a shock. All the breakers were knocked off. "+w+" "+v+" left. Turn the breaker OFF first.",!0,"shock")},
cZp(d,e){var w,v,u,t,s=this
if(s.w)return B.aZo
if(D.d.t(B.axh,e))return s.bEv(d,e)
w=s.cOH(e)
if(d==="inspect"){if(w==null||w.c)return B.aZs
return new A.eC(!0,"You look and test: "+B.wD.h(0,w.a).b,!1,"")}if(w==null||w.c)return new A.eC(!1,s.b?"Nothing needs fixing there.":"There is nothing wrong with this, so the "+C.w(B.Sb.h(0,d))+' is not needed. Use "Look and test" on things to find the problem.',!1,"")
v=B.wD.h(0,w.a)
if(d!==v.c){++s.f
return new A.eC(!1,s.b?"That is not the right tool for this problem.":"The "+C.w(B.Sb.h(0,d))+" does not fix this. "+v.b,!1,"")}u=v.f
if(u!==0){t=s.d
u=!t.d.t(0,u)&&!t.e.t(0,u)}else u=!1
if(u){if(s.b)return s.c8r()
return s.b_1("STOP! "+v.r+" The wires here are live (120 volts). Tap the breaker in the panel (with your hand) to switch it off.")}w.c=!0
s.axG()
return new A.eC(!0,v.d,!1,"")},
bEv(d,e){var w,v,u,t,s=this
if(d==="inspect"){w=s.d
if(w.d.t(0,e))w="This breaker has tripped: it sits in the middle (orange)."
else w=w.e.t(0,e)?"This breaker is switched OFF.":"This breaker is ON."
return new A.eC(!0,w,!1,"")}if(d!=="hand")return s.b_1(s.b?"Use your hand on a breaker.":"A breaker is switched with your hand, not with a "+C.w(B.Sb.h(0,d))+".")
w=s.d
v=w.d
if(v.t(0,e)){w=s.c
w===$&&C.c()
u=C.T(w).k("Z<1>")
t=C.C(new C.Z(w,new A.cw7(e),u),u.k("L.E"))
if(t.length!==0){D.d.gI(t).c=!0
s.axG()
return new A.eC(!0,B.wD.h(0,D.d.gI(t).a).d,!1,"")}v.W(0,e)
return B.aZX}w=w.e
if(w.t(0,e)){w.W(0,e)
return B.aZR}w.M(0,e)
return B.aZH}}
A.arV.prototype={
R(){var w,v=new A.xh(-0.3,0.48,46,B.Vu,$.au())
v.f=80
w=new C.wt()
$.x5()
w.h2(0)
return new A.aFp(v,w)}}
A.aFp.prototype={
gJ(){var w=this.d
w===$&&C.c()
return w},
gCV(d){var w=this.e
if(w===$){this.a.toString
w=D.o.F(Date.now(),1e5)
this.e=w}return w},
Z(){var w,v=this
v.a2()
w=v.gCV(0)
v.a.toString
w=A.hl3(!1,w)
v.d=w
v.r=A.agL(w.d)},
q(){var w=this.ax
if(w!=null)w.a4(0)
this.a1()},
c8w(d,e){var w=this,v=w.ax
if(v!=null)v.a4(0)
w.m(new A.evm(w,d,e))
w.ax=C.cI(D.jy,new A.evn(w))},
b_2(){this.f.hR(46,0.48,B.Vu,-0.3)
this.m(new A.evb(this))},
c8v(d){var w,v,u=this
if(d===0)return
w=u.d
w===$&&C.c()
v=w.cZp(u.x,d)
w=v.a
if(w)A.yN()
else A.fW(180,220,0.25,"square")
if(v.d==="shock"){C.fL()
u.m(new A.evg(u))
C.bQ(D.mE,new A.evh(u),x.P)}u.m(new A.evi(u,d))
w=w&&!v.c
u.c8w(v.b,w)
w=u.d
if(w.w)$.aV.x1$.push(new A.evj(u))
else if(w.gcHu()&&!u.at){u.at=!0
$.aV.x1$.push(new A.evk(u))}},
chh(){var w=null,v=this.c
v.toString
C.cj(w,w,!1,w,new A.eve(this),v,w,!0,!0,x.H)},
c8s(){var w=null,v=this.c
v.toString
C.cj(w,w,!0,w,new A.eva(this),v,w,!0,!0,x.H)},
ax3(){this.m(new A.evc(this))
this.b_2()},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.d
g===$&&C.c()
g=g.gcP2()
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
for(o=0;o<3;++o)p.push(new C.D(D.Nc,new C.y(o<i.d.e?"\u2764\ufe0f":"\ud83d\udda4",h,D.Aj,h,h,h,h,h,h,h,h,h),h))
v=A.Yg(!1,h,i.f,new A.evu(i),h,s,u,r,h,new A.evv(),t,h,h,i.gc8t(),i.gc8u(),v,!1,h,C.a([C.B(p,D.m,h,D.e,D.P,0,h,h)],q),h)
u=i.d.c
u===$&&C.c()
t=C.T(u)
t=new C.cQ(new C.Z(u,new A.evw(),t.k("Z<1>")),new A.evx(),t.k("cQ<1,n>")).aH(0,"  \xb7  ")
u=C.d("Customer: "+(t.length===0?"All fixed!":t),h,2,D.a1,h,h,h,B.aSQ,h,h,h)
t=C.a([],q)
for(n=0;n<10;++n){m=B.dtx[n]
s=i.x===m?D.aC.j(0.25):D.c.j(0.07)
r=new C.aP(14,14)
p=i.x===m
l=p?D.aC:D.aZ
k=new C.ay(l,p?2:1,D.r,-1)
l=B.dzk.h(0,m)
p=C.X(l,i.x===m?D.aC:D.ae,h,h,h,19)
l=B.Sb.h(0,m)
l.toString
j=i.x===m?D.aC:D.c
t.push(new C.D(E.u_,C.aB(h,C.p(h,new C.ce(D.aM,D.e,D.i,D.m,h,D.p,h,0,C.a([p,D.bm,new C.y(l,h,new C.F(!0,j,h,h,h,h,12.5,D.H,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h),h,h,h,h,h,h,h,h,h)],q),h),D.f,h,h,new C.o(s,h,new C.bK(k,k,k,k),new C.bg(r,r,r,r),h,h,D.n),h,h,h,h,D.eZ,h,h,h),D.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new A.evy(i,m),h,h,h,h,h,h,!1,D.a4),h))}g=C.a([A.U9(D.aQ,new A.evz(i,d),C.x(C.a([new C.bO(D.a5,h,h,u,h),D.O,new C.a6(h,52,C.cf(t,h,h,h,h,D.aM,!1),h)],q),D.m,h,D.e,D.P,0,D.p),v,""+g+"/"+w+" fixed","Service call",h)],q)
if(i.as)g.push(C.bT(0,C.dX(C.p(h,h,D.f,B.aib,h,h,h,h,h,h,h,h,h,h),!0,h),0,0,0))
return new C.an(D.a_,h,D.aa,D.t,g,h)},
cC_(d){return C.bV(E.lA,null,new A.evs(this),d,!0,!0,!0,D.k2,!1,!1,x.H)},
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
$2$fillColor$hintStyle(d,e){return this.gJ().$2$fillColor$hintStyle(d,e)},
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
A.y4.prototype={
gh9(d){return this.x}}
A.tK.prototype={}
A.aa6.prototype={}
A.i8.prototype={
aGx(d,e,f){var w=this
return d>w.a-f&&d<w.b+f&&e>w.c-f&&e<w.d+f}}
A.csE.prototype={
c8x(d){return-this.a.gex(0)/2+d*4},
a5c(d,e){var w,v,u=this.a
if(d<-u.gex(0)/2+6||d>u.gex(0)/2-6||e<6||e>u.ghq(0)-6)return!1
for(u=this.b,w=u.length,v=0;v<w;++v)if(u[v].aGx(d,e,9))return!1
return!0},
b_4(d,e,f){var w,v,u=e.a,t=f.a-u,s=e.b,r=f.b-s,q=Math.max(1,D.k.dd(Math.sqrt(Math.pow(t,2)+Math.pow(r,2))/2))
for(w=0;w<=q;++w){v=w/q
if(!this.a5c(u+t*v,s+r*v))return!1}return!0},
aYH(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=a0.a,f=h.a,e=D.k.V((g+f.gex(0)/2)/4),d=h.c
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
if(!h.a5c(-f.gex(0)/2+k,j))continue
i=Math.pow(-f.gex(0)/2+k-g,2)+Math.pow(j-e,2)
if(i<o){p=new C.z(n,l)
o=i}}if(p!=null)return p}return null},
aoM(b9,c0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5=this,b6=1e9,b7=b5.aYH(b9),b8=b5.aYH(c0)
if(b7==null||b8==null)return C.a([b9,c0],x.f)
w=b8.a
v=b5.c8x(w)
u=b8.b
t=new C.z(v,u*4)
if(b5.b_4(0,b9,t))return C.a([b9,t],x.f)
v=b7.a
s=b5.d
s===$&&C.c()
r=b7.b
q=x.S
p=C.eD([v*s+r],q)
o=C.U(q,q)
n=x.i
m=C.G([v*s+r,0],q,n)
l=C.G([v*s+r,b5.bU7(v,r,b8)],q,n)
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
b0=a5>=b0||a9>=s||!b5.a5c(-v.gex(0)/2+a6,a9*4)}if(b0)continue
b0=!1
if(a4)if(a8!==0)b0=!b5.a5c(-v.gex(0)/2+a6,n)||!b5.a5c(-v.gex(0)/2+e,a9*4)
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
u.push(new C.z(-v.gex(0)/2+e*4,D.o.F(n,s)*4))}b4=C.a([D.d.gI(u)],w)
for(a5=0;a9=u.length-1,a5<a9;a5=a9){w=a5+1
for(;;){if(!(a9>w&&!b5.b_4(0,u[a5],u[a9])))break;--a9}b4.push(u[a9])}return b4},
bU7(d,e,f){return Math.sqrt(Math.pow(d-f.a,2)+Math.pow(e-f.b,2))}}
A.AB.prototype={}
A.bsg.prototype={
bAf(d,e,f,g,h,i,j,k,l,m,n,o){var w,v,u,t,s=this.b
if(s!=null)for(w=this.as,v=1;v<s.length;++v){u=v-1
t=Math.sqrt(Math.pow(s[v].a-s[u].a,2)+Math.pow(s[v].b-s[u].b,2))
w.push(t)
this.at+=t}}}
A.aWx.prototype={
auX(d){var w,v,u=d.gex(0),t=new A.bV4(d,u)
switch(d.c){case"living":w=t.$1(46)
return C.a([B.hja,new A.AB(w.a,w.b,4,"Switching the ad on the big TV",!1,!0,!0,"ad")],x.h)
case"kitchen":return C.a([new A.AB(new C.z(-u/2+40,42),3.141592653589793,2.8,"Getting a drink from the fridge",!0,!1,!1,""),B.hj9],x.h)
case"bathroom":return B.dqd
case"bedroom":v=t.$1(44)
return C.a([new A.AB(v.a,v.b,3.4,"Switching the ad on the TV",!1,!0,!0,"ad")],x.h)
case"hall":if(!this.a)return B.azV
return C.a([new A.AB(new C.z(-d.gex(0)/2+80,90),3.141592653589793,3,"Looking at the left video wall",!1,!1,!0,""),new A.AB(B.etR,0,2.4,"Looking over the lounge and the logo carpet",!1,!1,!1,""),new A.AB(new C.z(d.gex(0)/2-80,90),3.141592653589793,3,"Looking at the right video wall",!1,!1,!0,"")],x.h)
default:return B.azV}},
acK(a0,a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=e.b.d
d===$&&C.c()
w=d[a0]
v=new A.csE(w,A.ihG(w))
v.c=D.k.dd(w.gex(0)/4)+1
v.d=D.k.dd(w.ghq(0)/4)+1
u=A.hp5(w,a1)
t=u.a
s=u.c
d=e.d
r=d.length
q=a3.length===0?"Walking in":a3
d.push(A.bsh(a0,"",!1,q,-1,null,!1,!1,0.5,t.a,u.b,t.b))
for(q=e.auX(w),p=q.length,o=t,n=0;n<q.length;q.length===p||(0,C.M)(q),++n){m=q[n]
l=v.aoM(o,m.a)
k=m.e
if(k)j=C.cT(m.d,"Having",0)
else j=!1
d.push(A.bsh(a0,"",j,"Walking",-1,l,!1,!1,0,0,0,0))
o=D.d.gak(l)
d.push(A.bsh(a0,m.w,k,m.d,-1,null,m.r,m.f,m.c,o.a,m.b,o.b))}if(a2!=null){i=A.hp5(w,a2)
h=i.c
l=v.aoM(o,i.a)
g=e.auX(w).length!==0&&D.d.gak(e.auX(w)).e
d.push(A.bsh(a0,"",g,"Walking to the next room",-1,l,!1,!1,0,0,0,0))
o=D.d.gak(l)
d.push(A.bsh(a0,"",g,"Opening the door",h,null,!1,!1,1.8,o.a,e.bNF(w,h),o.b))}for(f=r;f<d.length;++f)d[f].ay=s},
aXt(d,e,f){return this.acK(d,e,f,"")},
bNF(d,e){var w,v=d.w[e].b
A:{if("left"===v){w=-1.5707963267948966
break A}if("right"===v){w=1.5707963267948966
break A}w=3.141592653589793
break A}return w},
b_3(){var w,v,u=this
if(u.a){u.acK(5,10,9,"Walking into the hall")
u.b_5()
return}u.acK(10,11,9,"Coming in through the front door")
u.aXt(9,10,5)
u.acK(5,9,0,"Walking down the hall")
for(w=0;w<8;++w){v=B.cYo[w]
u.aXt(v,5,w===7?null:5)}u.b_5()},
b_5(){var w,v,u,t,s,r,q,p,o=this,n=o.c,m=Math.min(1,n/120)
for(w=o.d,v=w.length,u=0,t=0,s=0;s<v;++s){r=w[s]
if(r.b==null)u+=r.f*=m
else t+=r.at}q=t/Math.max(4,n-u)
for(n=q<=0,p=0,s=0;s<v;++s){r=w[s]
if(r.b!=null)r.f=n?0.1:Math.max(0.05,r.at/q)
r.ax=p
p+=r.f}o.e!==$&&C.aQ()
o.e=p},
bbN(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g={},f=this.e
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
return A.atM(!1,n,f.ay,p,f.w,0,f.r,o,0,!1,s,f.x,v,!1,!1,f.c,f.e,f.d)}v=new A.bV5(g)
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
return A.atM(!1,0,o.ay,"",o.w,0,o.r,-1,m/12,!1,!1,!1,f.a,!1,!0,v,p,s)}}
A.b9T.prototype={
MA(d){var w=this.a
if(w!=null)this.ax=A.hwK(w,this.CW)},
aJp(){var w,v,u,t,s,r,q=this
if(!q.KN(q.f,q.r))return!1
for(w=6;w<=320;w+=6){v=Math.max(8,D.k.V(w/6)*3)
for(u=0;u<v;++u){t=u*2*3.141592653589793/v
s=q.f+Math.cos(t)*w
r=q.r+Math.sin(t)*w
if(!q.KN(s,r)){q.f=s
q.r=r
q.at=null
return!0}}}return!1},
KN(d,e){var w,v,u,t,s=this
if(d<s.b||d>s.c||e<s.d||e>s.e)return!0
for(w=s.ax,v=w.length,u=s.ay,t=0;t<v;++t)if(w[t].aGx(d,e,u))return!0
return!1},
aLJ(d,e,f,g){var w,v,u,t,s,r,q,p,o=this,n=Math.sqrt(e*e+f*f)
if(n<0.000001)return o.x=!1
w=e/n
v=f/n
u=o.ch
t=o.z?1.9:1
s=115*u*t*Math.min(1,n)*g
r=o.f+w*s
q=o.r+v*s
p=!0
if(o.KN(r,q))if(!o.KN(r,o.r))q=o.r
else{p=!o.KN(o.f,q)
if(p)r=o.f}if(p){o.f=r
o.r=q
o.w=Math.atan2(w,v)
o.y=o.y+s/12}return o.x=p},
cOG(d){var w,v=this,u=v.Q
if(u<=0&&v.as<=0)return
w=v.as
u+=w*d
v.Q=u
v.as=w-560*d
if(u<=0)v.as=v.Q=0},
FF(d,e){var w,v,u,t=this,s=t.at
if(s==null)return!1
w=s.a-t.f
v=s.b-t.r
if(Math.sqrt(w*w+v*v)<4){t.at=null
return t.x=!1}u=t.aLJ(0,w,v,e)
if(!u){t.at=null
t.x=!1}return u}}
A.aku.prototype={}
A.aq5.prototype={
R(){var w=x.N
return new A.bev(C.U(w,w))}}
A.bev.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=x.p,g=C.eI(C.a([C.aF(i,i,i,i,B.bRn,i,i,i,new A.d7N(d),i,i,i,i,i,i)],h),i,i,!0,!0,E.lA,i,1,i,i,i,!1,i,!1,i,i,i,i,!0,i,i,i,i,i,B.fDl,i,i,i,1,i,!0),f=C.a([],h)
for(w=0;w<2;++w)f.push(C.iO(i,i,i,new C.y(D.d.gI(B.zp[w].b.split(" (")),i,i,i,i,i,i,i,i,i,i,i),i,new A.d7O(j,w),j.d===w,i,i,i,i))
f=C.bX(D.bC,f,D.bq,i,0,8)
v=j.e
v=C.bX(D.bC,C.a([C.iO(i,i,i,B.fSK,i,new A.d7P(j),!v,i,i,i,i),C.iO(i,i,i,B.fOW,i,new A.d7Q(j),v,i,i,i,i)],h),D.bq,i,0,8)
u=B.zp[j.d]
u=C.a([f,D.O,v,D.W,C.d(u.b,i,i,i,i,i,i,D.de,i,i,i),D.au,C.d(u.c,i,i,i,i,i,i,Aa.E8,i,i,i),D.W],h)
for(f=B.zp[j.d].e,f=J.aW(f.gev(f)),v=x.N,t=x.e7,s=j.f,r=x.bP;f.C();){q=f.gT(f)
p=s.h(0,q)
o=C.a([],r)
for(n=B.zp[j.d].d,m=0;m<5;++m){l=n[m]
o.push(new C.ev(l,new C.y(l,i,D.oI,i,i,i,i,i,i,i,i,i),D.eY,i,t))}p=C.a([new C.y(q,i,B.fqp,i,i,i,i,i,i,i,i,i),C.T9(i,E.lA,B.fyJ,i,!1,!0,o,new A.d7R(j,q),i,i,p,v)],h)
if(!j.e&&s.h(0,q)!=null)p.push(new C.fe(new A.d7S(j,q),i))
p.push(D.am)
D.d.v(u,p)}u.push(C.bE(C.d(j.e?"Submit the test":"Check my wiring",i,i,i,i,i,i,i,i,i,i),i,new A.d7T(j),i))
f=j.r
if(f!=null){f=f.a
v=f===B.v8
t=v?"CORRECT: every lead follows the diagram.":A.h3j(f)+": not passed"
if(v)f=D.bj
else f=f===B.TJ?D.bG:D.ct
h=C.a([D.W,C.d(t,i,i,i,i,i,i,C.l(i,i,f,i,i,i,i,i,i,i,i,16,i,i,D.u,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)],h)
for(f=j.r.b,v=f.length,m=0;m<f.length;f.length===v||(0,C.M)(f),++m){k=f[m]
h.push(new C.y(k.c+"\nRule: "+k.d+"\nFix: "+k.e+"\n",i,B.fkS,i,i,i,i,i,i,i,i,i))}for(f=B.zp[j.d].f,m=0;m<2;++m)h.push(new C.y("\u2022 "+f[m],i,D.vl,i,i,i,i,i,i,i,i,i))
D.d.v(u,h)}return C.c7(g,E.Bi,C.cf(u,i,D.bA,i,i,D.ag,!1),i,!1,!1,i,i)}}
A.JK.prototype={
a5(){return"SafetyStatus."+this.b}}
A.FO.prototype={
a5(){return"TerminalRole."+this.b}}
A.FV.prototype={
a5(){return"WireFunction."+this.b}}
A.cz5.prototype={}
A.cCL.prototype={}
A.a4p.prototype={}
A.bMo.prototype={}
A.wo.prototype={}
A.ti.prototype={}
A.b6t.prototype={}
A.abd.prototype={}
A.abe.prototype={}
A.vc.prototype={}
A.b5b.prototype={}
A.b8l.prototype={}
A.cz7.prototype={
bqT(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=C.a([],x.dH)
for(w=this.a,v=w.length,u=0;u<w.length;w.length===v||(0,C.M)(w),++u){t=w[u]
s=t.b
r=t.c
q=A.hte(s,r,t.d)
p=new C.Z(r,new A.cz8(),C.T(r).k("Z<1>")).gL(0)
r=s.d?1:0
o=s.b+s.c+r
n=o===0?0:D.o.E(D.k.V(p*100/o),0,100)
if(q.a!==B.v8)n=D.o.E(n,0,79)
i.push(new A.abe(t.a,q,n))}w=C.a([],x.gl)
for(v=this.b,s=this.c,m=0;m<v.length;++m){r=v[m]
l=s.h(0,m)
w.push(new A.b5b(r,l==null?-1:l))}v=C.a([],x.t)
for(s=i.length,u=0;u<i.length;i.length===s||(0,C.M)(i),++u)v.push(i[u].c)
for(s=w.length,u=0;u<w.length;w.length===s||(0,C.M)(w),++u){k=w[u]
v.push(k.b===k.a.c?100:0)}j=v.length===0?0:D.k.V(D.d.fb(v,new A.cz9())/v.length)
return new A.b8l(i,w,j,D.d.d_(i,new A.cza())&&j>=80)}}
A.PS.prototype={}
A.a1m.prototype={
R(){var w=x.S
return new A.bv_(C.U(w,w))}}
A.bv_.prototype={
B(d){var w=null,v=this.e,u=C.aJ(d,w,x.w).w
return C.bl(!0,new C.cU(new C.aZ(0,1/0,0,u.a.b*0.9),C.cf(v==null?this.coc():this.crB(v),w,D.bQ,w,w,D.ag,!0),w),!0,!1,D.af,!0,!0)},
coc(){var w,v,u,t,s,r,q=this,p=null,o=q.a,n=o.c.b,m=x.p
o=C.a([C.d("Test: "+o.d,p,p,p,p,p,p,D.de,p,p,p),D.au,B.fwR,D.W],m)
for(w=q.d,v=x.cE,u=0;u<n.length;u=t){t=u+1
s=C.a([new C.y(""+t+". "+n[u].a,p,D.nI,p,p,p,p,p,p,p,p,p)],m)
for(r=0;r<3;++r)s.push(new A.a9S(r,w.h(0,u),new A.f9r(q,u),new C.y(n[u].b[r],p,D.Ai,p,p,p,p,p,p,p,p,p),!0,p,v))
s.push(D.au)
D.d.v(o,s)}o.push(D.O)
o.push(C.bE(B.fBj,p,new A.f9s(q),p))
return o},
crB(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=d.d,g=h?D.bj:D.ct
h=h?"Passed":"Not passed"
w=x.p
h=C.a([C.d(h,i,i,i,i,i,i,C.l(i,i,g,i,i,i,i,i,i,i,i,22,i,i,D.u,i,i,!0,i,i,i,i,i,i,i,i),i,i,i),C.d("Score "+d.c+"%  (pass mark 80%)",i,i,i,i,i,i,D.US,i,i,i)],w)
v=d.a
if(D.d.b2(v,new A.f9t()))h.push(B.elc)
h.push(D.W)
for(u=v.length,t=0;t<v.length;v.length===u||(0,C.M)(v),++t){s=v[t]
r=s.b
q=r.a
p=A.h6V(q).j(0.1)
o=new C.aP(12,12)
n=new C.ay(A.h6V(q).j(0.6),1,D.r,-1)
m=A.h3j(q)
q=A.h6V(q)
q=C.a([new C.y(s.a+": "+m+" ("+s.c+"%)",i,new C.F(!0,q,i,i,i,i,13.5,D.u,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i),i,i,i,i,i,i,i,i,i)],w)
r=r.b
if(r.length===0)q.push(B.fLb)
for(m=r.length,l=0;l<r.length;r.length===m||(0,C.M)(r),++l){k=r[l]
D.d.v(q,C.a([D.au,new C.y(A.h3j(k.b)+": "+k.c,i,B.feS,i,i,i,i,i,i,i,i,i),new C.y("Rule: "+k.d,i,M.aa6,i,i,i,i,i,i,i,i,i),new C.y("Fix: "+k.e,i,B.fkT,i,i,i,i,i,i,i,i,i)],w))}h.push(C.p(i,C.x(q,D.E,i,D.e,D.i,0,D.p),D.f,i,i,new C.o(p,i,new C.bK(n,n,n,n),new C.bg(o,o,o,o),i,i,D.n),i,i,i,D.cv,D.yb,i,i,i))}for(v=d.b,u=v.length,t=0;t<v.length;v.length===u||(0,C.M)(v),++t){j=v[t]
r=D.c.j(0.05)
q=new C.aP(12,12)
p=j.a
o=p.c
m=j.b===o
n=new C.ay(m?D.bj:D.ct,1,D.r,-1)
m=m?"\u2705":"\u274c"
h.push(C.p(i,C.x(C.a([new C.y(m+" "+p.a,i,D.lp,i,i,i,i,i,i,i,i,i),new C.y("Correct answer: "+p.b[o],i,D.ta,i,i,i,i,i,i,i,i,i),new C.y(p.d,i,M.aa6,i,i,i,i,i,i,i,i,i)],w),D.E,i,D.e,D.i,0,D.p),D.f,i,i,new C.o(r,i,new C.bK(n,n,n,n),new C.bg(q,q,q,q),i,i,D.n),i,i,i,D.cv,D.yb,i,i,i))}h.push(D.au)
h.push(C.bE(D.pC,i,new A.f9u(this),i))
return h}}
A.a5l.prototype={
h2(d){var w,v=this
if(v.c)return
v.c=!0
w=$.aV
w.toString
if(D.a.t(C.vt(C.b0(w).a,null),"Test"))v.d=C.df(v.b,new A.bSB(v))
else v.b_l()},
b_l(){$.eW.Hc(new A.bSA(this))},
bR(d){var w
this.c=!1
w=this.d
if(w!=null)w.a4(0)
this.d=null}}
var z=a.updateTypes(["~()","~(fk)","R(nr)","n(n,fM)","R(mb)","R(a5q)","q(q)","R(jA)","R(ox)","~(H)","ai<ko>(K)","R(Y2)","R(a4p)","R(fM)","R(aa6)","R(MA)","H(mb,mb)","R(P5)","R(Ia)","aA<~>()","R(om)","R(q)","q(K,K)","n(nr)","q(K,K,K)","q(H)","R(pR)","E2(Y)","~(xi,av,K)","~(mb)","~(t,av)","R(Al)","q(K)","R(M5)","IZ(Y)","R(abe)","q(hn)","R(Fj)","H(xm,xm)","R(r9)","R(z8)","On(Y)","R(Tb)","q(K,K[K])","R(zd)","R(wo)","H(G6,G6)","PX()","FO(n)","wo(wo,wo)","~(H,q,q,n,u)","~(H,ai<q>)","zd()","pR()","aA<MH?>()","R(w3)","om(K)","FV(n)","~(H{keepTour:R})","n(jA)","~(q,q,q,q,u,K)","K(lD)","~(q,q,q,q)","v(n,ai<rM>)","n(mb)","v(xm)","q(ai<q>,H)","XR()","~(aD?)","CE()","R(xm)","Wn(Y)","~(ko,H)","~(q,K,K,K,~(xi,av,K){px:K})","ai<fQ>(K)","a7e(Y)","~(q,q{note:n?})","mb?(q,q)","R(q,q)","q?(q,q)","K(q)","ai<q>(q,q[H])","+(K,K,K,n,n)(P5,H)","H(H,mb)","K(mb)","ai<ko>()","ai<ko>(ai<ko>)","K(om)","~(q,q,q,K,K)","a1m(Y)","~(q,q,q,q{poster:H})","~(~(fk),q,q)","~(q,q,K,K,u{joint:R})","+(q,q)(H)","~(q,q,H{alongX:R})","~(ai<q>,u)","~(ai<q>)","~(ai<q>{col:u})","~(H,q,u{h:K,w:K})","mb?(n)","~(H,ai<q>,u,K,n)","~(H,n,q,q,q,R)","R(Xn)","ai<+(q,q)>()","~(mb,K,K,K,K,K{note:n?})","ai<q>(ai<q>)","~(n,ai<q>{r:K})","~(n,q,q)","~(nr,q,n)","~(n,q,q,H)","q(H,H)","R(H)","fQ(q,q,q,q,H,K,K)","H(Al,Al)","H(ox)","~(H,q,q{col:u,round:R})","cW()","hn(H)","n(MA)","~(n,JK,n,n,n)","H(FV,FO)","~({done:R})","H(Al)","~(q,q,q,K,H)","v(rM)"])
A.c_S.prototype={
$1(d){var w=this.a
w=w===0?d:A.vy(d,w)
return w.a9(0,this.b)},
$S:z+6}
A.c_T.prototype={
$1(d){var w=this.a
return w===0?d:A.vy(d,w)},
$S:z+6}
A.c_R.prototype={
$4(b5,b6,b7,b8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=this
for(w=b4.b,v=b7.a,u=b7.b,t=b7.c,s=b6.a,r=b6.b,q=b6.c,p=b8.a,o=b8.b,n=b8.c,m=1/w,l=v*m,k=u*m,j=t*m,i=p*m,h=o*m,m=n*m,g=b4.a,f=g.a,e=b4.c,d=x.o,a0=b4.d,a1=b4.e,a2=b4.f,a3=0;a3<w;++a3)for(a4=a3/w,a5=s+v*a4,a6=r+u*a4,a4=q+t*a4,a7=0;a7<w;++a7){a8=a7/w
a9=a5+p*a8
b0=a6+o*a8
a8=a4+n*a8
b1=a9+l
b2=b0+k
b3=a8+j
f.push(new A.ko(C.a([e.$1(new A.q(a9,b0,a8)),e.$1(new A.q(b1,b2,b3)),e.$1(new A.q(b1+i,b2+h,b3+m)),e.$1(new A.q(a9+i,b0+h,a8+m))],d),a0.$1(b5),a1,g.b,a2,g.d,!1,g.c,g.e,g.f,g.w))}},
$S:z+62}
A.c_U.prototype={
$1(d){var w=d*2*3.141592653589793/this.b
return this.a.aI(0,Math.cos(w)).a9(0,this.c.aI(0,Math.sin(w)))},
$S:z+25}
A.c_Q.prototype={
$2(d,e){var w=3.141592653589793*d/this.a,v=6.283185307179586*e/this.b
return new A.q(Math.sin(w)*Math.cos(v),Math.cos(w),Math.sin(w)*Math.sin(v))},
$S:z+110}
A.c_V.prototype={
$1(d){var w=d*2*3.141592653589793/this.b
return this.a.aI(0,Math.cos(w)).a9(0,this.c.aI(0,Math.sin(w)))},
$S:z+25}
A.fYa.prototype={
$1(d){var w=d.b,v=this.a,u=d.c,t=this.b
return new A.q(d.a,w*v-u*t,w*t+u*v)},
$S:z+6}
A.fY8.prototype={
$1(d){var w=this.a
return w===0?d:A.vy(d,w)},
$S:z+6}
A.fY9.prototype={
$1(d){var w=this,v=w.b===0?d:w.c.$1(d)
return J.fZn(w.a.$1(v),w.d)},
$S:z+6}
A.fY7.prototype={
$1(d){var w=this.b===0?d:this.c.$1(d)
return this.a.$1(w)},
$S:z+6}
A.fXX.prototype={
$4(d,e,f,g){var w=-d
return 0.5*(2*e+(w+f)*this.a+(2*d-5*e+4*f-g)*this.b+(w+3*e-3*f+g)*this.c)},
$S:327}
A.bJz.prototype={
$1(d){var w=d.a,v=J.a5(w),u=C.jT(v.h(w,"ngmy_swipe_x3"))
$.ajp=u===!0
w=C.jT(v.h(w,"ngmy_swipe_y3"))
$.ajq=w!==!1},
$S:313}
A.bJA.prototype={
$1(d){},
$S:33}
A.bJB.prototype={
$1(d){d.au("Bool","ngmy_swipe_x3",$.ajp)
d.au("Bool","ngmy_swipe_y3",$.ajq)},
$S:313}
A.bJC.prototype={
$1(d){},
$S:33}
A.bJE.prototype={
$1(d){var w=this,v=-d.c,u=d.b,t=w.a,s=w.b,r=v*t-u*s,q=d.a,p=w.c,o=w.d
return new A.q(q*p-r*o,u*t+v*s,q*o+r*p)},
$S:z+6}
A.bJD.prototype={
$1(d){var w=this,v=w.a
return v.d.a9(0,w.b.$1(new A.q(w.c*d,w.d*d,d-v.c)))},
$S:z+32}
A.bJy.prototype={
$1(d){var w=this,v=-d.c,u=d.b,t=w.a,s=w.b,r=v*t-u*s,q=d.a,p=w.c,o=w.d
return new A.q(q*p-r*o,u*t+v*s,q*o+r*p)},
$S:z+6}
A.bJx.prototype={
$1(d){var w=this,v=w.a
return v.d.a9(0,w.b.$1(new A.q(w.c*d,w.d*d,d-v.c)))},
$S:z+32}
A.ctF.prototype={
$1(d){var w=this,v=d.a,u=w.a,t=d.c,s=w.b,r=-v*s+t*u,q=d.b,p=w.c,o=w.d
return new A.q(v*u+t*s,q*p-r*o,-(q*o+r*p))},
$S:z+6}
A.ctG.prototype={
$1(d){var w=this.a.c,v=this.b.$1(d.aF(0,w.d))
return new A.q(v.a,v.b,v.c+w.c)},
$S:z+6}
A.ctE.prototype={
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
b0=A.hYs(u)
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
if(t&&d4.d===u){d2=C.ar(c5,D.b3,0.28+0.14*Math.sin(d2.gGR(0)*6))
d2.toString
c3+=0.12
c5=d2}d2=255*c4*0.55
c6=D.k.V(D.k.E(c5.gb3(c5)*255*c3+d2,0,255))
c7=D.k.V(D.k.E(c5.gbc()*255*c3+d2,0,255))
c8=D.k.V(D.k.E(c5.gb9(c5)*255*c3+d2,0,255))
d2=$.S()
s=C.a([],x.g)
c9=new C.aG(d2.r,D.ah,null,null,s)
c9.D(new C.aY(d3.f[0],d3.r[0]))
for(f=1;f<v;++f){d2=new C.aq(d3.f[f],d3.r[f])
s.push(d2)
r=c9.f
if(r!=null)d2.by(r)
d2=c9.e
if(d2!=null)d2.a.delete()
c9.e=null}c9.D(new C.bt())
d2=d4.f
d3=C.h_4(c6,c7,c8,d2)
s=d4.d
u=s===u&&t
d0=new A.G6(d4.y,d4.z,null,c9,d3,c0-d4.x,s,d2<0.99,u)
d0.e=c1<2&&c2<2
d1.go.push(d0)
d0.c=d5},
$S:z+72}
A.cty.prototype={
$1(d){return d.c>=1},
$S:z+21}
A.ctz.prototype={
$1(d){var w,v,u,t,s,r,q,p,o=this,n=!o.c||o.d>=o.e[0],m=o.f,l=o.b
if(n)A.hZk(d,m,o.r,l.gGR(0))
else{n=$.hAw()
C.E6(m)
w=n.a
v=w.get(m)
u=D.k.bh(l.gGR(0)*5)
t=v==null
if(t)s=o.a.x<10
else s=v.a!==u&&o.a.w<3
if(s){$.S()
r=new C.p0()
m.c.$3(C.z9(r,null),new C.av(m.d,m.e),l.gGR(0))
if(!t)v.b.q()
n.n(0,m,new A.cDw(u,r.nf()))
n=o.a
if(t)++n.x
else ++n.w}C.E6(m)
n=w.get(m)
q=n==null?null:n.b
if(q!=null){n=m.d
m=m.e
p=A.h6A(o.r,n,m)
if(p!=null){l=d.a
J.bm(l.save())
d.av(0,p.a)
l.clipRect(C.bH(new C.a3(0,0,n,0+m)),$.ms()[1],!0)
m=q.b
m===$&&C.c()
m=m.a
m===$&&C.c()
m=m.a
m.toString
l.drawPicture(m)
l.restore()}}else{$.S()
n=C.I()
n.r=D.cq.gp(0)
d.aG(o.w,n)}}},
$S:585}
A.ctx.prototype={
$2(d,e){var w=this.a
return A.o3(A.o3(w[0],w[1],d),A.o3(w[3],w[2],d),e)},
$S:z+22}
A.ctA.prototype={
$1(d){return d.c<1},
$S:z+21}
A.ctB.prototype={
$1(d){return A.hZl(d,this.b,this.c,8,6,this.a.gGR(0))},
$S:585}
A.ctC.prototype={
$2(d,e){return D.k.aK(e,d)},
$S:1784}
A.ctD.prototype={
$2(d,e){var w,v=D.o.aK(d.a,e.a)
if(v!==0)return v
w=D.k.aK(e.d,d.d)
return w!==0?w:D.o.aK(d.c,e.c)},
$S:z+46}
A.f1g.prototype={
$1(d){var w=this.a,v=w.r,u=d.a
w.r=d
w.a.d.a6T(D.k.E((u-v.a)/1e6,0,0.1))
w.f.sp(0,u/1e6)},
$S:9}
A.f1f.prototype={
$1(d){if(x.ej.b(d))this.a.a.d.apo(1+d.gtA().b*0.0012)},
$S:257}
A.f1c.prototype={
$1(d){var w=this.a
w.w=1
w.x=d.c},
$S:256}
A.f1d.prototype={
$1(d){var w,v,u,t,s,r=d.w,q=this.a
if(r!==q.x){q.x=r
q.w=d.d}if(r>=2){r=d.d
w=q.w/r
q.w=r
if(isFinite(w)&&w>0)q.a.d.apo(w)}else{r=q.a.d
q=d.a
v=$.ajp?-1:1
v=q.a*0.009*v
u=$.ajq?-1:1
r.ay=r.ax=null
v=r.a+=v
if(!r.Q){t=r.y
s=r.z
r.a=D.k.E(v,t-s,t+s)}r.b=D.k.E(r.b+-q.b*0.009*u,r.w,r.x)
r.aV()}},
$S:236}
A.f1e.prototype={
$1(d){var w=this.a,v=w.a.f
return v==null?null:v.$1(w.e.cW2(d.b))},
$S:69}
A.f1a.prototype={
$1(d){return this.a.y=d.b},
$S:23}
A.f1b.prototype={
$0(){var w,v=this.a,u=v.a.as
u.toString
v=v.y
w=this.b.gY(0)
return u.$2(v,w==null?D.ax:w)},
$S:0}
A.fiF.prototype={
$0(){return new A.PX(!1,C.a([],x.z),C.a([],x.t))},
$S:z+47}
A.bTL.prototype={
$0(){var w=0,v=C.j(x.c),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j
var $async$$0=C.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return C.b($.r6().jf(0,q.a),$async$$0)
case 7:p=e
m=q.b
l=x.N
o=new A.MH(m,C.U(l,x.J),C.U(l,x.bB),C.a([],x.dQ),C.U(l,x.gN))
w=8
return C.b(o.Pz(p),$async$$0)
case 8:$.h_T.n(0,m,o)
$.h_R.W(0,m)
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
$.h_R.M(0,m)
u=null
r=[1]
w=5
break
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
$.h_S.W(0,q.b)
w=r.pop()
break
case 6:case 1:return C.h(u,v)
case 2:return C.f(s.at(-1),v)}})
return C.i($async$$0,v)},
$S:z+54}
A.bTC.prototype={
$1(d){return D.a.t(d,"hips")},
$S:3}
A.bTw.prototype={
$2(d,e){var w,v=Math.floor(d),u=Math.floor(e),t=this.b,s=t.a,r=Math.min(s-1,D.k.bh((d-v)*s))
v=t.b
w=(Math.min(v-1,D.k.bh((e-u)*v))*s+r)*4
s=this.a
t=t.c
s.c=s.c+t[w]
s.b=s.b+t[w+1]
s.a=s.a+t[w+2]},
$S:271}
A.bTv.prototype={
$1(d){return D.k.V(D.k.E(d,0,1)*255)},
$S:252}
A.bTE.prototype={
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
w[s]=g.c4(0,((k*1024+j)*1024+i)*2+r,new A.bTF(g))}e[0]=g.a
return w},
$S:1786}
A.bTF.prototype={
$0(){return this.a.a},
$S:97}
A.bTG.prototype={
$1(d){var w,v,u,t,s,r,q=C.aX(x.S)
for(w=this.a.e,v=w.length,u=0;u<v;u+=3){t=d[w[u]]
s=d[w[u+1]]
r=d[w[u+2]]
if(t===s||s===r||t===r)continue
q.M(0,A.hef(t,s,r))}return q.a},
$S:1787}
A.bTD.prototype={
$2(d,e){var w,v,u,t=this.a,s=this.b.h(0,d)
s.toString
w=J.a5(e)
v=D.k.V(w.h(e,0)/w.h(e,3))
u=D.k.V(w.h(e,1)/w.h(e,3))
w=D.k.V(w.h(e,2)/w.h(e,3))
t.$flags&2&&C.aj(t)
t[s]=(v<<16|u<<8|w|4278190080)>>>0},
$S:1788}
A.bTA.prototype={
$0(){return new Float64Array(this.a*16)},
$S:580}
A.bTB.prototype={
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
if(n<0)D.ow.ha(k,j,j+16,h)
else A.heg(k,n*16,h,0,k,j)
k=u.f
k===$&&C.c()
k=k[a1]
j=k.length
m=0
for(;m<k.length;k.length===j||(0,C.M)(k),++m)l.$1(k[m])},
$S:30}
A.bTJ.prototype={
$1(d){var w,v,u
for(w=this.a.z,w=new C.hD(w,w.r,w.e);w.C();){v=w.d
u=v.toLowerCase()
if(C.cT(u,d,0))return v}return null},
$S:278}
A.bTH.prototype={
$1(d){return!D.a.t(d.toLowerCase(),"pose")},
$S:3}
A.bTI.prototype={
$0(){var w=this.a.z
return new C.cv(w,C.a7(w).k("cv<1>")).gI(0)},
$S:22}
A.bTM.prototype={
$1(d){var w=this,v=w.c,u=d*3,t=w.a,s=w.d,r=(v[u]-t.b)*s,q=v[u+1],p=w.b.ay,o=(v[u+2]-t.a)*s
t=w.f
u=w.r
return new A.q(r*t+o*u+w.w,(q-p)*s+w.e,-r*u+o*t+w.x)},
$S:z+25}
A.bTx.prototype={
$3(d,e,f){var w=this,v=w.e
return w.b.a9(0,w.c.aI(0,w.a.a*f+0.25)).a9(0,w.d.aI(0,d*v)).a9(0,w.f.aI(0,e*v))},
$2(d,e){return this.$3(d,e,1)},
$S:z+43}
A.bTz.prototype={
$6(d,e,f,g,h,i){var w=this
return w.a.push(new A.ko(C.a([d,e,f,g],x.o),w.b,h,w.c,0,1,!1,0,i,2,w.d))},
$S:z+60}
A.bTy.prototype={
$6(d,e,f,g,h,i){var w=this.b
return this.a.$6(w.$2(d-f,e),w.$2(d,e-g),w.$2(d+f,e),w.$2(d,e+g),h,i)},
$S:1790}
A.fwj.prototype={
$2(d,e){return D.k.V(d+(D.k.E(e,0,255)-d)*0.8)},
$S:1791}
A.bHU.prototype={
$1(d){return d.d+this.a.f*d.e},
$S:z+61}
A.bHT.prototype={
$1(d){return d.a===J.r(this.a,"template")},
$S:z+39}
A.fP3.prototype={
$6$lines$w(d,e,f,g,h,i){var w=null,v=C.fv("\u2026",w,h,w,C.cS(w,w,w,w,w,w,w,w,w,C.l(w,w,f,w,w,w,w,w,w,w,w,e,w,w,i,w,1.1,!0,w,w,w,w,w,w,w,w),d),D.a3,D.bZ,w,D.dA,D.bW)
v.nZ(g)
return v},
$4(d,e,f,g){return this.$6$lines$w(d,e,f,g,2,D.u)},
$5$w(d,e,f,g,h){return this.$6$lines$w(d,e,f,g,2,h)},
$S:1792}
A.fxI.prototype={
$1(d){var w=this.a
return A.vy(d,w.c).a9(0,new A.q(w.a,0,w.b))},
$S:z+6}
A.fxJ.prototype={
$6$px(d,e,f,g,h,i){var w=new A.fxK(e,d),v=-f/2,u=g/2,t=f/2,s=-g/2
this.a.push(new A.fQ(C.a([w.$2(v,u),w.$2(t,u),w.$2(t,s),w.$2(v,s)],x.o),0,h,i,i*g/f,30,this.b,0,!1))},
$5(d,e,f,g,h){return this.$6$px(d,e,f,g,h,260)},
$S:z+73}
A.fxK.prototype={
$2(d,e){return A.vy(new A.q(d,e,0),this.a).a9(0,this.b)},
$S:z+22}
A.fxB.prototype={
$3(d,e,f){return A.bBE(d,e,f,0)},
$S:24}
A.fxC.prototype={
$3(d,e,f){return A.bBE(d,e,f,3)},
$S:24}
A.fxD.prototype={
$3(d,e,f){return A.bBE(d,e,f,8)},
$S:24}
A.fxE.prototype={
$3(d,e,f){return A.bBE(d,e,f,9+this.a)},
$S:24}
A.fxF.prototype={
$3(d,e,f){return A.bBE(d,e,f,12+this.a)},
$S:24}
A.fxG.prototype={
$3(d,e,f){return A.hwN(d,e,f,this.a,this.b)},
$S:24}
A.fxH.prototype={
$3(d,e,f){return A.hwN(d,e,f,this.a,this.b)},
$S:24}
A.fjO.prototype={
$4(d,e,f,g){var w=-d,v=this.a
return 0.5*(2*e+(w+f)*v+(2*d-5*e+4*f-g)*v*v+(w+3*e-3*f+g)*v*v*v)},
$S:327}
A.fnb.prototype={
$1(d){var w=this.a,v=J.a5(w)
return v.h(w,D.o.E(d,0,v.gL(w)-1))},
$S:z+93}
A.fwp.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n=A.hsw(this.a),m=x.n,l=C.a([],m)
for(w=J.a5(n),v=0;v<w.gL(n)-1;v=u){u=v+1
t=w.h(n,u).a
s=w.h(n,v).a
l.push(Math.pow(Math.max(new A.q(t.a-s.a,t.b-s.b,t.c-s.c).guU(),250),0.75))}r=D.d.fb(l,new A.fwo())
q=C.a([0],m)
for(m=l.length,p=0;p<l.length;l.length===m||(0,C.M)(l),++p){o=l[p]
q.push(D.d.gak(q)+30*o/r)}return q},
$S:1794}
A.fwo.prototype={
$2(d,e){return d+e},
$S:80}
A.fwm.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8=this.a,a9=B.dyB.h(0,a8.a)
if(a9==null){w=C.a([],x.t)
v=a8.w.length
u=v===0
t=0
for(;;){if(!(t<(u?1:v)))break
w.push(t);++t}a9=new C.z(w,0)}s=Math.max(Math.max(a8.gap5(),a8.gbe1()),a8.gGP()*1.3)
w=a8.r
r=new A.q(a8.ga4q(0),w+a8.gGP()/2,a8.ga4r())
q=w+a8.gGP()
v=s*0.55
p=C.a([new C.z(new A.q(a8.ga4q(0)+v,q+s*0.5,a8.ga4r()+s*1.15),r)],x.dt)
for(u=a9.a,o=x.o,n=a8.w,m=a8.e,l=a8.f,k=a9.b,v=q+v,j=null,i=0;i<u.length;++i,j=a2){h=n[u[i]]
g=h.e
f=m*g
e=l*g
d=new A.q(h.a,w+h.d+e/2,h.b)
g=h.c
a0=Math.sin(g)
a1=Math.cos(g)
a2=new A.q(a0,0,a1)
a3=new A.fwn(d,a2,f*1.5,new A.q(Math.cos(g),0,-Math.sin(g)),f,e)
a4=D.o.F(k+i,3)
A:{if(0===a4){g=C.a([a3.$3(1.8,0,1.1),a3.$3(1,-0.22,-0.35),a3.$3(0.9,0.3,-0.2)],o)
break A}if(1===a4){g=C.a([a3.$3(0.9,1.5,-0.25),a3.$3(1.05,0,0.05),a3.$3(0.85,-1.3,0.15)],o)
break A}g=C.a([a3.$3(1.3,0.2,-0.45),a3.$3(1.1,0,0.45),a3.$3(1.7,-0.3,1.3)],o)
break A}if(j!=null&&j.a*a0+j.c*a1<0.3){a0=D.d.gak(p).a
a1=D.d.gI(g)
p.push(new C.z(new A.q((a0.a+a1.a)*0.5+j.c*s*0.5,v,(a0.c+a1.c)*0.5-j.a*s*0.5),r))}for(a5=0;a5<3;++a5)p.push(new C.z(g[a5],d))}a6=new A.q(a8.ga4q(0)-s*0.7,q+s*0.6,a8.ga4r()-s)
if(j!=null){a7=D.d.gak(p).a.a9(0,a6).aI(0,0.5)
p.push(new C.z(new A.q(a7.a+j.c*s*0.5,v,a7.c-j.a*s*0.5),r))}p.push(new C.z(a6,r))
return p},
$S:z+103}
A.fwn.prototype={
$3(d,e,f){var w=this
return w.a.a9(0,w.b.aI(0,w.c*d)).a9(0,w.d.aI(0,w.e*e)).a9(0,new A.q(0,w.f*f,0))},
$S:z+24}
A.fxt.prototype={
$1(d){var w=this.b,v=w*d.b,u=d.c,t=this.c
return this.a.a9(0,new A.q(Math.sin(v)*u*t.geg(0)+w*d.e*t.gap5(),d.d*t.gGP(),Math.cos(v)*u*t.geg(0)))},
$S:z+36}
A.fxu.prototype={
$1(d){var w=this.c
return this.a.a9(0,new A.q(this.b*d.f*w.gap5(),d.r*w.gGP(),0))},
$S:z+36}
A.fxv.prototype={
$1(d){var w=this.a
return w[D.o.E(d,0,w.length-1)]},
$S:z+117}
A.c3T.prototype={
$1(d){return d.a===this.a.d.a},
$S:z+39}
A.c3R.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new A.c3Q())},
$S:28}
A.c3Q.prototype={
$0(){},
$S:0}
A.c3E.prototype={
$0(){var w=this.a
w.f=A.h7g(w.gzy(),w.d)
w.abq()},
$S:0}
A.c3K.prototype={
$0(){return this.a.x=this.b},
$S:0}
A.c3S.prototype={
$0(){var w=this.a
w.x=0
w.y=!1
w.z=""},
$S:0}
A.c3H.prototype={
$0(){var w=this.a
w.x=-1
w.y=!1
w.z=this.b?"That was the 30 second drone shot. Press it again any time, or change the board and film it again.":""},
$S:0}
A.c3G.prototype={
$0(){var w=this.a
return w.f=A.h7g(w.gzy(),w.d)},
$S:0}
A.c3e.prototype={
$0(){},
$S:0}
A.c3F.prototype={
$0(){return this.a.z="That picture could not be opened."},
$S:0}
A.c3J.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=C.aJ(d,k,x.w).w,i=x.p,h=C.a([],i)
for(w=this.a,v=w.d,u=0;u<12;++u){t=B.a3w[u]
s=t.a
r=v.a===s
q=r?D.d7:D.cq
p=new C.aP(16,16)
o=r?F.fz:D.bz
n=new C.ay(o,r?2:1,D.r,-1)
o=C.a([new C.y(t.b,k,D.nK,k,k,k,k,k,k,k,k,k),D.b1],i)
r=t.w.length
m=r===0
if((m?1:r)>1){l=new C.aP(10,10)
o.push(C.p(k,new C.y(""+(m?1:r)+" boards",k,Af.aT9,k,k,k,k,k,k,k,k,k),D.f,k,k,new C.o(D.e_,k,k,new C.bg(l,l,l,l),k,k,D.n),k,k,k,k,D.yo,k,k,k))}if(v.a===s)o.push(B.el1)
h.push(C.aB(k,C.p(k,C.x(C.a([new C.ce(D.aM,D.e,D.i,D.m,k,D.p,k,0,o,k),D.am,new C.y(t.c,k,D.j3,k,k,k,k,D.a1,k,2,k,k),D.cL,new C.bz(1,D.bb,new C.y(t.d,k,B.fi4,k,k,k,k,D.Uv,k,k,k,k),k)],i),D.E,k,D.e,D.i,0,D.p),D.f,k,k,new C.o(q,k,new C.bK(n,n,n,n),new C.bg(p,p,p,p),k,k,D.n),k,k,k,k,B.bxK,k,k,k),D.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new A.c3I(w,d,t),k,k,k,k,k,k,!1,D.a4))}return C.bl(!0,new C.D(B.bz9,C.x(C.a([B.fU6,D.au,B.fMZ,D.ad,new C.cU(new C.aZ(0,1/0,0,j.a.b*0.66),C.ki(1.05,h,2,10,10,k,k,!0),k)],i),D.E,k,D.e,D.P,0,D.p),k),!0,!1,D.af,!0,!0)},
$S:27}
A.c3I.prototype={
$0(){C.a4(this.b,!1).O(null)
this.a.cvi(this.c.a)},
$S:0}
A.c3D.prototype={
$0(){var w=this,v=w.b.d.b[w.a.a]
w.c.saX(0,v.b)
w.d.saX(0,v.c)
w.e.saX(0,v.d)},
$S:0}
A.c3C.prototype={
$1(d){var w=this
return new C.e0(new A.c3z(w.a,w.b,w.c,w.d,w.e,w.f),null)},
$S:19}
A.c3z.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=this,o=null,n=p.b,m=p.a,l=n.d.b[m.a],k=new A.c3A(m,n),j=new A.c3B(e),i=C.aJ(d,o,x.w).w,h=x.p,g=C.a([B.fzW,D.au,C.d(l.a?"Now it shows the NGMY logo, words and ads. Change anything and it becomes yours.":"This sign is your own.",o,o,o,o,o,o,H.vg,o,o,o)],h),f=n.gzy().w.length
if((f===0?1:f)>1){f=C.a([],h)
w=p.c
v=0
for(;;){u=n.gzy().w.length
if(!(v<(u===0?1:u)))break
u=m.a===v
t=u?D.d7:D.cq
s=new C.aP(18,18)
r=new C.ay(u?F.fz:D.aZ,2,D.r,-1)
q=v+1
f.push(C.aB(o,C.p(o,new C.y("Sign "+q,o,D.lp,o,o,o,o,o,o,o,o,o),D.f,o,o,new C.o(t,o,new C.bK(r,r,r,r),new C.bg(s,s,s,s),o,o,D.n),o,o,o,o,D.lD,o,o,o),D.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new A.c3j(m,v,w,e),o,o,o,o,o,o,!1,D.a4))
v=q}D.d.v(g,C.a([D.W,B.fUc,D.am,C.bX(D.bC,f,D.bq,o,8,8)],h))}g.push(D.ad)
g.push(k.$3("Big words",p.d,new A.c3k(l)))
g.push(k.$3("Smaller words",p.e,new A.c3l(l)))
g.push(k.$3("Bottom line (web address)",p.f,new A.c3m(l)))
f=l.f!=null
w=f?"Your logo is on (change)":"Put your own logo (default: NGMY logo)"
g.push(j.$4(w,f,new A.c3n(m,n),new A.c3o(m,n,l)))
f=l.r!=null
w=f?"Your picture is on (change)":"Put your own picture"
g.push(j.$4(w,f,new A.c3p(m,n),new A.c3q(m,n,l)))
g.push(D.au)
g.push(B.fO7)
g.push(D.am)
f=C.a([],h)
for(w=x.O,v=0;v<6;++v){u=B.a5j[v]
u=C.a([u.b,u.c],w)
t=new C.aP(10,10)
r=new C.ay(l.e===v&&!l.a?F.fz:D.aZ,2,D.r,-1)
s=B.a5j[v]
f.push(C.aB(o,C.p(o,new C.ca(D.A,o,o,new C.y(s.a,o,new C.F(!0,s.d,o,o,o,o,11,D.H,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),o,o,o,o,o,o,o,o,o),o),D.f,o,o,new C.o(o,o,new C.bK(r,r,r,r),new C.bg(t,t,t,t),o,new C.a9(D.a5,D.a8,D.x,u,o,o),D.n),o,o,o,o,D.ht,o,o,74),D.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new A.c3r(m,n,l,v,e),o,o,o,o,o,o,!1,D.a4))}g.push(C.bX(D.bC,f,D.bq,o,8,8))
g.push(D.aA)
m=n.gzy().w.length
g.push(C.B(C.a([C.E(C.et(B.bWj,C.d((m===0?1:m)>1?"All signs back to the NGMY default":"Back to the NGMY default",o,o,o,o,o,o,B.fuq,o,o,o),new A.c3s(n,l,p.c,e),o),1),D.at,C.bE(D.x0,o,new A.c3t(d),o)],h),D.m,o,D.e,D.i,0,o,o))
return new C.D(new C.Q(16,16,16,i.f.d+16),C.cg(C.x(g,D.E,o,D.e,D.P,0,D.p),D.t,o,D.y,o,o,o,o,D.ag),o)},
$S:108}
A.c3A.prototype={
$3(d,e,f){var w=null
return new C.D(D.d2,C.aL(w,D.Y,!1,w,!0,D.t,w,C.aM(),e,w,w,w,w,w,2,C.br(w,new C.b5(4,C.m(12),D.a0),w,w,w,w,w,w,!0,w,w,w,w,w,w,D.cq,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,D.UR,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w),D.y,!0,w,!0,w,!1,w,D.ai,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,new A.c3u(this.a,this.b,f),w,w,w,!1,w,w,!1,w,!0,w,D.a9,w,w,w,w,w,w,w,w,w,w,w,D.d9,!0,D.a3,w,D.an,w,w,w,w),w)},
$S:1795}
A.c3u.prototype={
$1(d){this.c.$1(d)
this.b.ZE(this.a.a)},
$S:2}
A.c3B.prototype={
$4(d,e,f,g){var w=null,v=this.a,u=e?D.ef:D.ue
u=C.a([C.E(C.et(C.X(u,e?D.bj:D.ae,w,w,w,w),C.d(d,w,w,w,w,w,w,D.d9,w,w,w),new A.c3x(f,v),w),1)],x.p)
if(e)u.push(C.aF(w,w,w,w,D.qu,w,w,w,new A.c3y(g,v),w,w,w,w,w,w))
return new C.D(D.cv,C.B(u,D.m,w,D.e,D.i,0,w,w),w)},
$S:1796}
A.c3x.prototype={
$0(){var w=0,v=C.j(x.H),u=this
var $async$$0=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:u.a.$0()
w=2
return C.b(C.bQ(D.nn,null,x.H),$async$$0)
case 2:u.b.$1(new A.c3w())
return C.h(null,v)}})
return C.i($async$$0,v)},
$S:1}
A.c3w.prototype={
$0(){},
$S:0}
A.c3y.prototype={
$0(){this.a.$0()
this.b.$1(new A.c3v())},
$S:0}
A.c3v.prototype={
$0(){},
$S:0}
A.c3j.prototype={
$0(){var w=this
w.a.a=w.b
w.c.$0()
w.d.$1(new A.c3i())},
$S:0}
A.c3i.prototype={
$0(){},
$S:0}
A.c3k.prototype={
$1(d){return this.a.b=d},
$S:2}
A.c3l.prototype={
$1(d){return this.a.c=d},
$S:2}
A.c3m.prototype={
$1(d){return this.a.d=d},
$S:2}
A.c3n.prototype={
$0(){return this.b.IT(this.a.a,!0)},
$S:0}
A.c3o.prototype={
$0(){var w=this.c
w.w=w.f=null
this.b.ZE(this.a.a)},
$S:0}
A.c3p.prototype={
$0(){return this.b.IT(this.a.a,!1)},
$S:0}
A.c3q.prototype={
$0(){var w=this.c
w.x=w.r=null
this.b.ZE(this.a.a)},
$S:0}
A.c3r.prototype={
$0(){var w=this
w.c.e=w.d
w.b.ZE(w.a.a)
w.e.$1(new A.c3h())},
$S:0}
A.c3h.prototype={
$0(){},
$S:0}
A.c3s.prototype={
$0(){var w=this,v=w.a,u=v.gzy().w.length
if((u===0?1:u)>1)v.d.cY2()
else w.b.bjp()
w.c.$0()
v.m(new A.c3f())
v.IU()
w.d.$1(new A.c3g())},
$S:0}
A.c3f.prototype={
$0(){},
$S:0}
A.c3g.prototype={
$0(){},
$S:0}
A.c3t.prototype={
$0(){C.a4(this.a,!1).O(null)
return null},
$S:0}
A.c3N.prototype={
$0(){return C.a4(this.a,!1).ie()},
$S:0}
A.c3O.prototype={
$0(){var w=this.a
return w.m(new A.c3M(w))},
$S:0}
A.c3M.prototype={
$0(){return this.a.y=!1},
$S:0}
A.c3P.prototype={
$0(){var w=this.a
return w.m(new A.c3L(w))},
$S:0}
A.c3L.prototype={
$0(){return this.a.y=!0},
$S:0}
A.fzZ.prototype={
$1(d){return d.a===this.a},
$S:z+44}
A.fA_.prototype={
$0(){return D.d.gI(B.R3)},
$S:z+52}
A.bMg.prototype={
$1(d){return d.d.t(0,this.a.b)},
$S:z+44}
A.bMi.prototype={
$2(d,e){var w=this.a,v=this.b
return D.k.aK(w.aap(d.c,d.d,new C.z(v.c,v.d)),w.aap(e.c,e.d,new C.z(v.c,v.d)))},
$S:z+16}
A.bMj.prototype={
$1(d){return d.f==null},
$S:z+70}
A.bMf.prototype={
$2(d,e){var w,v=d.w
if(v!==e.w)return v?-1:1
v=this.a
w=this.b
return D.k.aK(v.aZH(w,A.yP(d.c)),v.aZH(w,A.yP(e.c)))},
$S:z+38}
A.bMk.prototype={
$2(d,e){var w=D.o.aK(e.b,d.b)
return w!==0?w:D.o.aK(e.c,d.c)},
$S:1797}
A.bMh.prototype={
$2(d,e){var w,v,u=d.w
if(u!==e.w)return u?-1:1
u=this.a
w=this.b
v=this.c
return D.k.aK(u.aap(w,v,A.yP(d.c)),u.aap(w,v,A.yP(e.c)))},
$S:z+38}
A.bKl.prototype={
$2(d,e){return(d^D.k.V(e.c)*31+D.k.V(e.d))>>>0},
$S:z+83}
A.c1u.prototype={
$2(d,e){var w,v,u,t,s=null,r=this.a,q=r.c,p=q.d>0
if(p)w=0
else{w=q.c
w=w>0?(1-w/180)*0.5:q.a}v=r.e
if(p)p="\ud83d\udc1b"
else p=q.c>0?"\ud83d\ude34":"\u26a1"
u=x.p
w=C.a([A.h0o(v,p,w)],u)
p=q.e
if(p<0.3||q.f){t=q.f
if(t)p=0.2
t=t?"\ud83e\udd12":"\ud83d\udca7"
D.d.v(w,C.a([new C.a6(s,v/4,s,s),A.h0o(v*0.7,t,p)],u))}if(r.d)D.d.v(w,C.a([new C.a6(s,v/3,s,s),A.h0o(v,"\u26fd",q.b)],u))
return C.x(w,D.m,s,D.e,D.P,0,D.p)},
$S:422}
A.fDi.prototype={
$4(d,e,f,g){var w=f+g/100
return new C.cw([d+100*Math.cos(w),e+100*Math.sin(w),-Math.sin(w),Math.cos(w)])},
$S:1798}
A.fh0.prototype={
$1(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this.b,h=A.Lj(i,a0).a,g=h[0],f=h[1],e=h[2],d=h[3]
for(h=this.a,w=h.a,v=h.b,u=h.c,h=h.d,t=0;t<5;++t){s=B.cXG[t]
for(r=d*s,q=e*s,p=0;p<3;++p){o=B.dbf[p]
n=i.a==="bus"
m=n?120:95.94999999999999
l=n?33.54:31.45
k=g+q*m-d*o*l
m=n?120:95.94999999999999
n=n?33.54:31.45
j=f+r*m+e*o*n
if(k>w&&k<v&&j>u&&j<h)return!0}}return!1},
$S:113}
A.bKn.prototype={
$1(d){return d<=0?0:Math.sqrt(220*d)},
$S:5}
A.fY5.prototype={
$7(d,e,f,g,h,i,j){return new A.fQ(C.a([d,e,f,g],x.o),0,new A.fY6(h),i,j,6,2,0,!1)},
$S:z+112}
A.fY6.prototype={
$3(d,e,f){return A.nf(d,e,f,this.a+D.k.bh(f/7))},
$S:24}
A.fY3.prototype={
$3(d,e,f){var w=this.a,v=w.b
w=w.a
return A.vy(new A.q(d,e,f),this.b).a9(0,new A.q(v,0,w))},
$S:z+24}
A.fY4.prototype={
$2(d,e){var w=this
return A.vy(new A.q(d,e,0),w.a).a9(0,new A.q(w.b,w.c,w.d))},
$S:z+22}
A.fzx.prototype={
$8(d,e,f,g,h,i,j,k){var w=-g,v=new A.fzy(d+f*h+w*i,f,w,e+g*h+f*i,g,f),u=-j/2,t=-k/2,s=j/2,r=k/2
this.a.GD(v.$2(u,t),v.$2(s,t),v.$2(s,r),v.$2(u,r),D.bO,B.eb)},
$S:1799}
A.fzy.prototype={
$2(d,e){var w=this
return new A.q(w.a+w.b*d+w.c*e,0.95,w.d+w.e*d+w.f*e)},
$S:z+22}
A.cAZ.prototype={
$1(d){return d.d===this.a},
$S:z+31}
A.cB_.prototype={
$1(d){return d.r},
$S:z+122}
A.cAY.prototype={
$2(d,e){return D.k.aK(d.x,e.x)},
$S:z+113}
A.bK9.prototype={
$1(d){var w
if(d.r<0)w=d.e||d.c<60
else w=!1
return w},
$S:z+17}
A.bKg.prototype={
$3(d,e,f){var w=this.a
return A.nf(d,e,f,w.b.a+w.f+D.k.bh(f/7))},
$S:24}
A.bKh.prototype={
$3(d,e,f){var w=this.a
return A.nf(d,e,f,w.b.a+w.f+3+D.k.bh(f/7))},
$S:24}
A.bKi.prototype={
$3(d,e,f){var w=this.a
return A.nf(d,e,f,w.b.a+w.f+7+D.k.bh(f/7))},
$S:24}
A.bKj.prototype={
$3(d,e,f){return A.nf(d,e,f,this.a.b.a+2+D.k.bh(f/7))},
$S:24}
A.bKa.prototype={
$3(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=this.a,i=j.z
j=j.Q
w=e.a
v=e.b
u=new C.a3(0,0,0+w,0+v)
t=C.bu(u,D.ip)
s=$.S()
r=C.I()
r.r=D.dK.gp(0)
d.az(t,r)
r=C.bu(u.cr(-6),D.kQ)
t=C.I()
t.b=D.ab
t.c=5
t.r=D.b9.gp(0)
d.az(r,t)
t=D.k.bh(f*3)
q=new C.aG(s.r,D.ah,k,k,C.a([],x.g))
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
j.r=((t&1)===0?D.b9:D.eR).gp(0)
d.aG(q,j)
j=i===1?"L":""+i
l=C.fv(k,k,k,k,C.cS(k,k,k,k,k,k,k,k,k,C.l(k,k,D.bG,k,k,k,k,k,k,k,k,v*0.78,k,k,D.u,k,k,!0,k,k,k,k,k,k,k,k),j),D.a3,D.bZ,k,D.dA,D.bW)
l.el()
j=l.b
i=j.c
j=j.a.c
l.a3(d,new C.t(w*0.62-i/2,v/2-j.gbb(j)/2))
return k},
$S:24}
A.bKb.prototype={
$3(d,e,f){return A.nf(d,e,f,1+D.k.bh(f/7))},
$S:24}
A.bKc.prototype={
$3(d,e,f){return A.nf(d,e,f,4+D.k.bh(f/7))},
$S:24}
A.bKd.prototype={
$2(d,e){var w=this.a,v=C.T(d),u=new C.cQ(new C.Z(d,new A.bKe(w),v.k("Z<1>")),new A.bKf(w),v.k("cQ<1,H>")).cH(0,0,D.AQ)
if(u===2)w="works but is NOT wired safely: open it and check every wire"
else w=u===1?"started: finish the wiring":e
return w},
$S:1800}
A.bKe.prototype={
$1(d){return!this.a.d[d]},
$S:32}
A.bKf.prototype={
$1(d){return this.a.e[d]},
$S:75}
A.bKY.prototype={
$1(d){return!d.f},
$S:z+17}
A.bKV.prototype={
$1(d){return d.b===this.a.a.a},
$S:z+18}
A.bKW.prototype={
$1(d){return d.b===this.a&&d.c===this.b},
$S:z+18}
A.bKX.prototype={
$1(d){return d.a<0},
$S:z+33}
A.bL1.prototype={
$1(d){var w,v,u,t
for(w=this.a.x,v=w.length,u=0;u<v;++u){t=w[u]
if(t.b===d)return t}return null},
$S:z+99}
A.bL_.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n=this,m=new A.bL0()
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
A.bL0.prototype={
$4(d,e,f,g){return Math.atan2(f-d,g-e)},
$S:327}
A.bKZ.prototype={
$1(d){return d.b===this.a.a.a},
$S:z+18}
A.bL2.prototype={
$1(d){var w=d.c
return w==="bathroom"||w==="kitchen"},
$S:z+5}
A.dSp.prototype={
$0(){return this.b.d=this.a.a},
$S:0}
A.dSq.prototype={
$1(d){return this.a.c7S()},
$S:11}
A.dSC.prototype={
$0(){},
$S:0}
A.dSw.prototype={
$0(){return this.a.w=this.b},
$S:0}
A.dSx.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.dSv(w))},
$S:0}
A.dSv.prototype={
$0(){return this.a.w=null},
$S:0}
A.dSl.prototype={
$1(d){return B.aI2},
$S:z+34}
A.dSm.prototype={
$0(){},
$S:0}
A.dSF.prototype={
$1(d){return B.aI2},
$S:z+34}
A.dSG.prototype={
$0(){},
$S:0}
A.dSE.prototype={
$0(){var w=this.a
return w.m(new A.dSD(w,this.b))},
$S:0}
A.dSD.prototype={
$0(){return this.a.r=this.b},
$S:0}
A.dSk.prototype={
$0(){return this.a.abR(this.b)},
$S:0}
A.dSr.prototype={
$0(){return this.a.J3(this.b.beN(this.c))},
$S:0}
A.dSs.prototype={
$0(){return this.a.J3(this.b.aKL(this.c))},
$S:0}
A.dSt.prototype={
$0(){return this.a.J3(this.b.aDm(this.c))},
$S:0}
A.dSu.prototype={
$0(){return this.a.ak5(this.b)},
$S:0}
A.dSo.prototype={
$1(d){var w,v,u=null,t=this.b,s=this.c,r=t.e[s],q=t.c
q===$&&C.c()
q=q[r.a].a
w=this.a
v=x.p
s=C.B(C.a([new A.acP(q.e,44,u),D.at,C.E(C.d("Bed "+(s+1)+": "+q.b,u,u,u,u,u,u,D.hE,u,u,u),1),w.PR("\ud83d\udc89 Treat",new A.dSn(w,t,s),D.ct)],v),D.m,u,D.e,D.i,0,u,u)
t=r.b
return C.x(C.a([s,D.O,w.Wy("Care",t,t<30?D.aw:D.aQ),w.Wy("Getting better",r.c,D.bj)],v),D.E,u,D.e,D.i,0,D.p)},
$S:281}
A.dSn.prototype={
$0(){return this.a.J3(this.b.bk0(this.c))},
$S:0}
A.dSz.prototype={
$0(){return this.a.J3(this.b.aDS("food"))},
$S:0}
A.dSA.prototype={
$0(){return this.a.J3(this.b.aDS("medicine"))},
$S:0}
A.dSB.prototype={
$0(){var w=0,v=C.j(x.H),u,t=this,s,r
var $async$$0=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:w=3
return C.b(A.aU3(),$async$$0)
case 3:$.Ef=null
s=t.a
if(s.c==null){w=1
break}r=s.f
if(r!=null)r.a4(0)
$.ak_=null
s.m(new A.dSy(s))
s.ZY()
case 1:return C.h(u,v)}})
return C.i($async$$0,v)},
$S:1}
A.dSy.prototype={
$0(){return this.a.d=null},
$S:0}
A.dSH.prototype={
$0(){return C.a4(this.a,!1).ie()},
$S:0}
A.dSI.prototype={
$1(d){return d.a>=0},
$S:z+33}
A.fBs.prototype={
$2(d,e){var w
A:{if("black"===d){w=e.a===25?"The black wire carries the power (hot). It never goes on the green ground screw. Hot goes to a BRASS screw.":"The black (hot) wire goes on a BRASS screw, not on the silver one. Silver is for white (neutral)."
break A}if("white"===d){w=e.a===25?"The white wire is the neutral. The green screw is only for the ground wire. Neutral goes to a SILVER screw.":"The white (neutral) wire goes on a SILVER screw, not on brass. Brass is for the black (hot) wire."
break A}w="The bare copper ground wire only goes on the GREEN screw. It keeps you safe if something goes wrong."
break A}return w},
$S:z+3}
A.fBt.prototype={
$2(d,e){return d==="ground"?y.t:"A black (hot) wire never goes on the green ground screw. The two black wires go on the two BRASS screws."},
$S:z+3}
A.fBu.prototype={
$2(d,e){var w
if(e.e)w="Those are the LOAD screws. They are covered with tape because power must come in on the LINE side. If you wire the LOAD side the GFCI will not protect you."
else A:{if("black"===d){w="The black (hot) wire goes on the BRASS LINE screw."
break A}if("white"===d){w="The white (neutral) wire goes on the SILVER LINE screw."
break A}w=y.t
break A}return w},
$S:z+3}
A.fBv.prototype={
$2(d,e){var w
A:{if("black"===d){w="The black (hot) wire joins the fixture BLACK wire. Not the white one, and never the green ground."
break A}if("white"===d){w="The white (neutral) wire joins the fixture WHITE wire. Not the black one, and never the green ground."
break A}w="The bare copper ground wire joins the fixture GREEN ground wire only."
break A}return w},
$S:z+3}
A.fBw.prototype={
$2(d,e){var w
A:{if("black"===d){w="The black (hot) wire joins the fan BLACK wire. Not the white one, and never the green ground."
break A}if("white"===d){w="The white (neutral) wire joins the fan WHITE wire. Not the black one, and never the green ground."
break A}w="The bare copper ground wire joins the fan GREEN ground wire only."
break A}return w},
$S:z+3}
A.fA8.prototype={
$1(d){return d.a===this.a},
$S:z+42}
A.fYG.prototype={
$1(d){return d.a},
$S:z+59}
A.fzk.prototype={
$1(d){var w
A:{if("hot"===d){w=B.VD
break A}if("neutral"===d){w=B.VE
break A}if("ground"===d){w=B.VF
break A}w=B.aXD
break A}return w},
$S:z+57}
A.fzl.prototype={
$1(d){var w
A:{if("hot"===d){w=B.JR
break A}if("neutral"===d){w=B.JS
break A}if("ground"===d){w=B.JT
break A}w=B.aSa
break A}return w},
$S:z+48}
A.fzi.prototype={
$1(d){return d.a===this.a.a},
$S:z+13}
A.fzj.prototype={
$1(d){return d.a===this.a.b},
$S:z+7}
A.fPY.prototype={
$1(d){return d.e==="hot"},
$S:z+7}
A.fPZ.prototype={
$1(d){return d.e==="neutral"},
$S:z+7}
A.fAl.prototype={
$1(d){return D.d.b2(this.a.b,new A.fAm(d))},
$S:3}
A.fAm.prototype={
$1(d){return d.a===this.a},
$S:z+45}
A.fAi.prototype={
$2(d,e){return A.avx(e.b)>A.avx(d.b)?e:d},
$S:z+49}
A.fAj.prototype={
$1(d){return d.a===this.a.a},
$S:z+13}
A.fAk.prototype={
$1(d){return d.a===this.a.b},
$S:z+7}
A.fxz.prototype={
$5(d,e,f,g,h){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=j.a
i.b=d
w=j.b
v=w.b
u=C.a7(v).k("cH<1,2>")
t=u.k("Z<L.E>")
s=C.C(new C.Z(new C.cH(v,u),new A.fxA(g),t),t.k("L.E"))
r=g==="ground"
q=r?B.vN:h
p=r?0.6:0.3
if(w.c>0){o=e.a9(0,B.h8u)
i.ji(A.aib(C.a([e,e.a9(0,B.h6t),o],x.o),4),0.12,q,!1,p,8)
return}if(s.length!==0){n=A.aQ2(j.c,D.d.gI(s).a,w)
w=A.o3(e,n,0.5)
v=n.a>0
m=w.a9(0,new A.q(v?0.5:-0.5,0.2,0.9))
w=e.a9(0,B.hcK)
if(j.d)v=0
else v=v?0.06:-0.06
l=A.aib(C.a([e,w,m,n.a9(0,new A.q(v,0,0.08)),n],x.o),5)
k=D.d.ds(l,0,D.k.bh(l.length*0.8))
i.ji(k,0.12,q,!1,p,8)
if(!r)i.ji(D.d.fK(l,k.length-1),0.08639999999999999,B.vN,!1,0.6,8)}else{l=A.aib(C.a([e,e.a9(0,B.h2F),A.o3(e,f,0.6),f],x.o),5)
k=r?l:D.d.ds(l,0,D.k.bh(l.length*0.86))
i.ji(k,0.12,q,!1,p,8)
if(!r)i.ji(D.d.fK(l,k.length-1),0.08639999999999999,B.vN,!1,0.6,8)}},
$S:z+50}
A.fxA.prototype={
$1(d){return d.b===this.a},
$S:566}
A.fiL.prototype={
$2(d,e){var w,v=this.a
v.b=d
w=A.Ha(e,0.9,6)
if(this.b)v.ji(w,0.2,B.Yr,!1,0.35,10)
this.c.push(D.d.gak(w))},
$S:z+51}
A.fYF.prototype={
$1(d){return d.a===this.a},
$S:z+42}
A.fk4.prototype={
$6$taped(d,e,f,g,h,i){var w,v,u,t=this.a
t.e=0.9
t.b=d
w=this.b
v=w.a+e*0.75
u=w.b+f
w=w.c-0.45
t.aZ(new A.q(v,u,w),B.heh,h,0.7)
t.dR(new A.q(v,u,w),new A.q(v+e*0.22,u,w),0.17,g,0.9,12)
t.aO(new A.q(v+e*0.23,u,w),B.haF,B.F8)
if(i)t.aZ(new A.q(v+e*0.05,u,w),B.hav,D.bG,0.2)},
$5(d,e,f,g,h){return this.$6$taped(d,e,f,g,h,!1)},
$S:1802}
A.fBx.prototype={
$2(d,e){var w
if(d==="ground")w=y.t
else w=e.a===25?y.T:"A double-pole switch has two LINE screws on top (power in) and two LOAD screws on the bottom (power out to the heater). Each leg goes straight down the same side: left leg on the left screws, right leg on the right ones."
return w},
$S:z+3}
A.fBy.prototype={
$2(d,e){var w
if(d==="ground")w=y.t
else if(e.a===25)w=y.T
else w=d==="common"?"The COMMON wire does not go on a traveler screw. It goes on the odd-coloured COMMON screw.":"The travelers go on the two brass TRAVELER screws. The COMMON screw is for the black power wire only."
return w},
$S:z+3}
A.fBz.prototype={
$2(d,e){var w
if(d==="ground")w=y.t
else w=e.a===25?"A traveler never goes on the green ground screw.":"A four-way has a pair of screws for the travelers coming IN (top) and a pair for the travelers going OUT (bottom). Do not mix the two pairs."
return w},
$S:z+3}
A.fBA.prototype={
$2(d,e){var w
A:{if("ground"===d){w=y.t
break A}if("neutral"===d){w="The white neutral wire goes on the silver NEUTRAL screw only."
break A}if(e.a===25)w=y.T
else w=d==="line"?"The wire from the panel is the LINE: it goes on the LINE screw.":"The wire to the light is the LOAD: it goes on the LOAD screw."
break A}return w},
$S:z+3}
A.fBB.prototype={
$2(d,e){var w
if(d==="ground")w=y.t
else if(e.a===25)w=y.T
else w=d==="feed"?"The feed goes on the FEED screw, where the two switches are joined.":"The wires to the lights go on the separate screws, one for each switch."
return w},
$S:z+3}
A.fBC.prototype={
$2(d,e){var w,v=y.T
A:{if("ground"===d){w=y.t
break A}if("neutral"===d){w="The white neutral wire goes on a SILVER screw."
break A}if("always"===d){w=e.a===25?v:"The always-hot wire goes on the BOTTOM brass screw. The top one is for the switched wire."
break A}w=e.a===25?v:"The switched hot wire (red) goes on the TOP brass screw."
break A}return w},
$S:z+3}
A.fBD.prototype={
$2(d,e){var w
A:{if("ground"===d){w=y.t
break A}if("neutral"===d){w=y.I
break A}w=e.a===25?y.T:"The black and red hot wires go on the two brass screws, X and Y. The silver W screw is for the neutral."
break A}return w},
$S:z+3}
A.fBE.prototype={
$2(d,e){return d==="neutral"?y.I:"The black and red hot wires go on the two brass screws, X and Y."},
$S:z+3}
A.fBF.prototype={
$2(d,e){var w
if(d==="ground")w=y.t
else w=e.a===25?y.T:"Both hot wires go on the two brass screws."
return w},
$S:z+3}
A.fBG.prototype={
$2(d,e){var w
A:{if("isoground"===d){w="The isolated ground wire only goes on the green screw with the orange triangle."
break A}if("neutral"===d){w=y.c
break A}w=e.a===25?"A hot wire never goes on the ground screw.":y.u
break A}return w},
$S:z+3}
A.fxl.prototype={
$1(d){return d.a===this.a},
$S:z+26}
A.fxm.prototype={
$0(){return B.amn},
$S:z+53}
A.fYC.prototype={
$1(d){var w=d>60?62:99
return Math.min(d*0.5625,w)},
$S:5}
A.fYz.prototype={
$1(d){return d>40?30+d/2:58},
$S:5}
A.fYA.prototype={
$2(d,e){return D.k.aK(d.a,e.a)},
$S:1803}
A.fYB.prototype={
$2(d,e){var w=this.a
if(e-d>w.a-w.b){w.b=d
w.a=e}},
$S:271}
A.bUh.prototype={
$1(d){return d},
$S:117}
A.bUg.prototype={
$1(d){return B.f2Z.t(0,d.b)},
$S:z+4}
A.bUS.prototype={
$1(d){return d.a==="Jobs"},
$S:z+55}
A.bUT.prototype={
$1(d){return new A.om(!1,"back",d,5)},
$S:z+56}
A.bUU.prototype={
$4(d,e,f,g){return!D.d.b2(this.a.x,new A.bUV(d,f,e,g))},
$2(d,e){return this.$4(d,e,135,115)},
$3(d,e,f){return this.$4(d,e,f,115)},
$S:1804}
A.bUV.prototype={
$1(d){var w=this,v=d.b
return!D.d.t(B.a5d,v)&&!D.d.t(B.HV,v)&&Math.abs(d.c-w.a)<w.b&&Math.abs(d.d-w.c)<w.d},
$S:z+4}
A.bUW.prototype={
$4(d,e,f,g){var w,v,u,t,s,r,q,p,o,n
for(w=this.a,v=w.length,u=f/2+90,t=g/2+20,s=0;s<v;++s){r=w[s]
if(Math.abs(r.c-d)<u){q=r.d
p=q>e?70:30
p=Math.abs(q-e)<t+p
q=p}else q=!1
if(q)return!1}for(w=this.b.x,v=w.length,s=0;s<w.length;w.length===v||(0,C.M)(w),++s){o=w[s]
u=o.b
if(D.d.t(B.RH,u)||u==="roundabout"||u==="rug"||u==="flowers")continue
n=B.hz.h(0,u)
if(Math.abs(o.c-d)<(f+n.c)/2+130){u=o.d
t=n.d
q=u>e?150:110
q=Math.abs(u-e)<(g+t)/2+q
u=q}else u=!1
if(u)return!1}return!0},
$S:563}
A.bV_.prototype={
$4(d,e,f,g){var w,v,u,t,s,r,q,p,o,n,m,l,k,j
if(Math.abs(d)>1150||e<-600||e>1450)return!1
for(w=this.a.x,v=w.length,u=f/2+40,t=g/2+40,s=0;s<w.length;w.length===v||(0,C.M)(w),++s){r=w[s]
q=r.b
if(q==="rug"||q==="flowers"||q==="pond")continue
p=B.hz.h(0,q)
p.toString
o=(r.e&1)===1
n=o?p.d:p.c
m=o?p.c:p.d
if(Math.abs(r.c-d)<(f+n)/2+34&&Math.abs(r.d-e)<(g+m)/2+34)return!1
if(B.f3b.t(0,q)){l=r.e*3.141592653589793/2
q=r.c
o=Math.sin(l)
p=p.d/2+30
k=r.d
j=Math.cos(l)
if(Math.abs(q+o*p-d)<u&&Math.abs(k+j*p-e)<t)return!1}}return!0},
$S:563}
A.bUX.prototype={
$3(d,e,f){var w,v,u,t,s,r,q,p,o,n={},m=B.hz.h(0,d)
m.toString
w=n.a=0
v=this.a
u=new A.bUZ(n,v,d)
for(t=f.length,s=this.b,r=m.c,m=m.d;w<t;++w){q=f[w]
p=q.a
o=q.b
if(n.a>=e)return
if(s.$4(p,o,r,m))u.$2(p,o)}v=v.x
o=-500
for(;;){if(!(o<1400&&n.a<e))break
p=-1100
for(;;){if(!(p<=1100&&n.a<e))break
A:{if(D.d.b2(v,new A.bUY(d,p,o)))break A
if(s.$4(p,o,r,m))u.$2(p,o)}p+=110}o+=100}},
$S:1806}
A.bUZ.prototype={
$2(d,e){var w=this.b,v=this.c
w.dz(0,v,d,e)
if(v==="ubstation")w.dz(0,"car",d+96,e+6);++this.a.a},
$S:271}
A.bUY.prototype={
$1(d){return d.b===this.a&&Math.abs(d.c-this.b)<420&&Math.abs(d.d-this.c)<420},
$S:z+4}
A.bV3.prototype={
$1(d){return d.gkN()},
$S:z+5}
A.bV2.prototype={
$1(d){var w=d.c
return(w==="bathroom"||w==="kitchen")&&d.gjQ()},
$S:z+5}
A.bV1.prototype={
$1(d){var w=d.c
return w==="bathroom"||w==="kitchen"},
$S:z+5}
A.bV0.prototype={
$1(d){return d.gkN()&&d.gjQ()},
$S:z+5}
A.ed6.prototype={
$1(d){return!(d.gkN()&&d.gjQ())},
$S:z+5}
A.ed3.prototype={
$1(d){var w,v=this.a.a.f
A:{if("wiring"===v){w=!d.gkN()
break A}if("plumbing"===v){w=!d.gjQ()
break A}w=!(d.gkN()&&d.gjQ())
break A}return w},
$S:z+5}
A.ed4.prototype={
$1(d){var w,v,u,t,s,r,q=this.a,p=q.ghJ()
if(Date.now()<0){if(q.c!=null)q.m(new A.ed2())
return}if(p==null||q.c==null||q.cx!=null||q.bZ>0)return
w=q.d
w===$&&C.c()
v=w.d
v===$&&C.c()
u=p.beY(w,v[w.e].a)
w=C.a([],x.s)
for(v=u.length,t=0;t<u.length;u.length===v||(0,C.M)(u),++t){s=u[t]
w.push(""+s.a+":"+D.k.V(s.c)+":"+D.k.V(s.d)+":"+s.x+":"+s.Q)}r=D.d.aH(w,"|")
if(q.aJ==null&&r!==q.du){q.du=r
q.m(q.giV())}w=p.f
if(w.length!==0&&D.d.gI(w)!==q.fy){w=D.d.gI(w)
q.fy=w
q.iE(w)}},
$S:11}
A.ed2.prototype={
$0(){},
$S:0}
A.ed5.prototype={
$1(d){var w,v=this.a
if(v.c==null)return
w=v.d
w===$&&C.c()
if(w.a.length!==0)v.iE(v.c1L())
else{w=v.a.f
if(w.length!==0){A:{if("wiring"===w){w="This room needs wiring: press the Wiring button, or tap the red outlet or the light."
break A}if("plumbing"===w){w="This room needs plumbing: press the Plumbing button, or tap the toilet or the sink."
break A}w="Walk through the house and fix what the signs say is wrong."
break A}v.iE(w)}}},
$S:9}
A.ebR.prototype={
$0(){var w=this.a
w.ax=this.b
w.ay=this.c},
$S:0}
A.ebS.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.ebQ(w))},
$S:0}
A.ebQ.prototype={
$0(){return this.a.ax=null},
$S:0}
A.ebT.prototype={
$0(){var w=this.a
w.r=this.b
w.Q=0
w.as=-1
w.at=0
w.iD()},
$S:0}
A.eap.prototype={
$0(){var w=this.a,v=w.d
v===$&&C.c()
v.e=this.b
w.Q=0
w.as=-1
w.at=0
w.ax=null
w.iD()},
$S:0}
A.ecj.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.d
w===$&&C.c()
u=w[u.e]
u.fy=!u.fy
v.iD()},
$S:0}
A.ebm.prototype={
$0(){return this.a.k3=!0},
$S:0}
A.ebn.prototype={
$0(){var w=this.a,v=this.b
w.Q=v-100
w.at=v
w.iD()},
$S:0}
A.ebo.prototype={
$0(){var w=this.a,v=this.b
w.as=v-300
w.at=v},
$S:0}
A.ebp.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&C.c()
w=t.d
w===$&&C.c()
v=this.b
if(!w[t.e].at.W(0,v)){t=u.d
w=t.d
w===$&&C.c()
w[t.e].at.M(0,v)}u.iD()},
$S:0}
A.ebq.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.d
w===$&&C.c()
w[u.e].p2=!0
v.iD()},
$S:0}
A.e9T.prototype={
$1(d){var w,v,u,t,s,r=this,q=null,p=C.d("Door to "+r.b,q,q,q,q,q,q,D.de,q,q,q),o=r.a,n=o.d
n===$&&C.c()
w=n.d
w===$&&C.c()
v=r.c
u=C.d(w[n.e].at.t(0,v)?"The door is open.":"The door is closed.",q,q,q,q,q,q,D.lP,q,q,q)
n=o.d
w=n.d
w===$&&C.c()
t=C.X(w[n.e].at.t(0,v)?B.bKB:B.bKN,q,q,q,q,q)
n=o.d
w=n.d
w===$&&C.c()
s=x.p
return C.bl(!0,new C.D(D.bQ,C.x(C.a([p,D.au,u,D.ad,C.bX(D.bC,C.a([C.dl(t,C.d(w[n.e].at.t(0,v)?"Close the door":"Open the door",q,q,q,q,q,q,q,q,q,q),new A.e9R(o,d,v),q),C.et(D.aps,B.fDp,new A.e9S(o,d,v,r.d),q)],s),D.bq,q,10,10)],s),D.E,q,D.e,D.P,0,D.p),q),!0,!1,D.af,!0,!0)},
$S:27}
A.e9R.prototype={
$0(){var w,v,u
C.a4(this.b,!1).O(null)
w=this.a
v=this.c
w.m(new A.e9Q(w,v))
w=w.d
w===$&&C.c()
u=w.d
u===$&&C.c()
A.fW(u[w.e].at.t(0,v)?700:450,70,0.25,"tri")},
$S:0}
A.e9Q.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&C.c()
w=t.d
w===$&&C.c()
v=this.b
if(!w[t.e].at.W(0,v)){t=u.d
w=t.d
w===$&&C.c()
w[t.e].at.M(0,v)}u.iD()},
$S:0}
A.e9S.prototype={
$0(){var w,v,u=this
C.a4(u.b,!1).O(null)
w=u.a
v=u.c
w.m(new A.e9O(w,v))
A.fW(700,70,0.25,"tri")
C.bQ(D.mE,new A.e9P(w,v,u.d),x.P)},
$S:0}
A.e9O.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.d
w===$&&C.c()
w[u.e].at.M(0,this.b)
v.iD()},
$S:0}
A.e9P.prototype={
$0(){var w=this.a
if(w.c==null)return
w.m(new A.e9N(w,this.b))
w.AB(this.c)},
$S:12}
A.e9N.prototype={
$0(){var w,v=this.a.d
v===$&&C.c()
w=v.d
w===$&&C.c()
return w[v.e].at.W(0,this.b)},
$S:0}
A.ea1.prototype={
$0(){return this.a.eu=!0},
$S:0}
A.ea2.prototype={
$0(){var w=this.a
w.f1=!0
w.fw=!1
w.R8=!w.p4},
$S:0}
A.ea3.prototype={
$0(){var w=this.a
w.R8=w.f1=!1},
$S:0}
A.ebf.prototype={
$2(d,e){var w=null,v=D.w.j(0.55),u=C.J(D.bY,D.r,1)
return C.aB(w,C.p(w,C.X(d,D.c,w,w,w,22),D.f,w,w,new C.o(v,w,u,w,w,w,D.a6),w,44,w,D.Na,w,w,w,44),D.y,!1,w,new A.ebh(this.a),w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,e,w,w,w,w,w,w,!1,D.a4)},
$S:452}
A.ebh.prototype={
$0(){var w=this.a
return w.m(new A.ebg(w))},
$S:0}
A.ebg.prototype={
$0(){return this.a.fw=!0},
$S:0}
A.ebi.prototype={
$0(){var w=this.a
return w.m(new A.ebe(w))},
$S:0}
A.ebe.prototype={
$0(){return this.a.fw=!1},
$S:0}
A.ebj.prototype={
$0(){var w=this.a
return w.p4?w.a2K():w.m(new A.ebd(w))},
$S:0}
A.ebd.prototype={
$0(){return this.a.R8=!0},
$S:0}
A.ebk.prototype={
$0(){var w=this.a
return w.m(new A.ebc(w))},
$S:0}
A.ebc.prototype={
$0(){var w=this.a
return w.h5=!w.h5},
$S:0}
A.ebl.prototype={
$0(){var w=this.a
return w.m(new A.ebb(w))},
$S:0}
A.ebb.prototype={
$0(){return this.a.ai=!0},
$S:0}
A.e9t.prototype={
$0(){var w=this.a
return w.m(new A.e9u(w))},
$S:0}
A.e9u.prototype={
$0(){return this.a.ai=!1},
$S:0}
A.ead.prototype={
$2(d,e){var w=null,v=D.w.j(0.55),u=C.J(D.bY,D.r,1)
return C.aB(w,C.p(w,C.X(d,D.c,w,w,w,20),D.f,w,w,new C.o(v,w,u,w,w,w,D.a6),w,40,w,D.iA,w,w,w,40),D.y,!1,w,new A.eaf(this.a),w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,e,w,w,w,w,w,w,!1,D.a4)},
$S:452}
A.eaf.prototype={
$0(){var w=this.a
return w.m(new A.eae(w))},
$S:0}
A.eae.prototype={
$0(){return this.a.fw=!0},
$S:0}
A.eag.prototype={
$0(){var w=this.a
return w.m(new A.eac(w))},
$S:0}
A.eac.prototype={
$0(){return this.a.fw=!1},
$S:0}
A.eah.prototype={
$0(){var w,v,u=this.a
u.m(new A.eab(u))
w=u.d
w===$&&C.c()
v=w.d
v===$&&C.c()
if(v[w.e].c!=="outside")u.xY()},
$S:0}
A.eab.prototype={
$0(){return this.a.eu=!1},
$S:0}
A.eai.prototype={
$0(){var w=this.a
return w.m(new A.eaa(w))},
$S:0}
A.eaa.prototype={
$0(){var w=this.a
return w.ab=w.ab===1?3:1},
$S:0}
A.eaj.prototype={
$0(){var w=this.a
return w.m(new A.ea9(w))},
$S:0}
A.ea9.prototype={
$0(){var w=this.a
return w.h5=!w.h5},
$S:0}
A.eak.prototype={
$0(){var w=this.a
return w.m(new A.ea8(w))},
$S:0}
A.ea8.prototype={
$0(){return this.a.ai=!0},
$S:0}
A.eal.prototype={
$0(){var w=this.a
return w.p4?w.a2K():w.m(new A.ea7(w))},
$S:0}
A.ea7.prototype={
$0(){return this.a.R8=!0},
$S:0}
A.ech.prototype={
$2$mine(d,e){var w=null,v=e?D.a8:D.a5,u=e?D.bk:D.e8,t=C.m(18)
return new C.bO(v,w,w,C.p(w,C.d(d,w,w,w,w,w,w,B.aTa,w,w,w),D.f,w,B.ad1,new C.o(u,w,w,t,w,w,D.n),w,w,w,D.cv,D.iB,w,w,w),w)},
$1(d){return this.$2$mine(d,!1)},
$S:1807}
A.eci.prototype={
$1(d){var w=this,v=null,u=w.b,t=u.b,s=x.p,r=C.B(C.a([C.h7(u.e.c,v,C.d(t[0],v,v,v,v,v,v,D.iK,v,v,v),v,18),D.at,C.d(t,v,v,v,v,v,v,D.k5,v,v,v),D.b1,B.fP8],s),D.m,v,D.e,D.i,0,v,v),q=w.c,p=w.d,o=q.$1("Hi, it's "+t+". "+p.d),n=w.e,m="Please come to "+n,l=w.a
return C.bl(!0,new C.D(A6.yi,C.x(C.a([r,N.N_,o,q.$1(p.c==="power"?m+" and fix the wiring. I can't stay in the dark.":m+" and fix the leak before it floods."),q.$1("I'll pay "+p.e+" points. Thank you!"),q.$2$mine("On my way!",!0),D.am,C.bX(D.bC,C.a([C.dl(B.bVn,C.d("Show me where "+t+" is",v,v,v,v,v,v,v,v,v,v),new A.ecf(l,d,p,u),v),C.dl(B.bYg,C.d("Go and fix it ("+n+")",v,v,v,v,v,v,v,v,v,v),new A.ecg(l,d,w.f,n),v)],s),D.bq,v,8,10)],s),D.E,v,D.e,D.P,0,D.p),v),!0,!1,D.af,!0,!0)},
$S:27}
A.ecf.prototype={
$0(){var w,v,u,t,s=this
C.a4(s.b,!1).O(null)
w=s.a
v=w.fr
u=C.T(v).k("Z<1>")
t=C.C(new C.Z(v,new A.ece(s.c),u),u.k("L.E"))
if(t.length!==0){v=w.d
v===$&&C.c()
u=v.d
u===$&&C.c()
v=u[v.e].c==="outside"}else v=!1
if(v){v=w.e
v===$&&C.c()
v.xi(160,new A.q(D.d.gI(t).c,30,D.d.gI(t).d))}w.eh(s.d.b+" is the one with the phone sign.",!0)},
$S:0}
A.ece.prototype={
$1(d){return d.a===this.a.b},
$S:z+14}
A.ecg.prototype={
$0(){var w,v=this
C.a4(v.b,!1).O(null)
w=v.a
if(w.aN)w.a2L()
w.eu=!1
w.AB(v.c)
w.eh("You are in "+v.d+". Fix the problem with the Wiring or Plumbing button.",!0)},
$S:0}
A.eaD.prototype={
$0(){var w=this.a
w.x=!0
w.z=!1
w.r="ceiling"
w.iD()},
$S:0}
A.e8s.prototype={
$1(d){return d.c==="outside"},
$S:z+5}
A.ecK.prototype={
$1(d){return d.c==="outside"},
$S:z+5}
A.e8T.prototype={
$0(){},
$S:0}
A.eay.prototype={
$0(){var w=this.a
return w.m(new A.eax(w))},
$S:0}
A.eax.prototype={
$0(){return this.a.id=!1},
$S:0}
A.eaz.prototype={
$0(){var w=this.a
return w.m(new A.eaw(w))},
$S:0}
A.eaw.prototype={
$0(){return this.a.id=!1},
$S:0}
A.ecL.prototype={
$1(d){var w=this.b
return d.d===this.a.aqr(w.f,w.r)},
$S:z+31}
A.ecJ.prototype={
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
A.ebX.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=d.a==="tank"?A.h7B(l.a.c6.b):d.e,i=l.b
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
if(i){i=C.d(p,k,k,k,k,k,k,D.wX,k,k,k)
o=C.d(o,k,1,D.a1,k,k,k,D.Kf,D.K,k,k)
n=C.d(n,k,2,D.a1,k,k,k,B.fkB,D.K,k,k)
p=w?D.bG:D.bz
m=C.m(12)
i=C.x(C.a([i,D.bD,o,n,D.fG,C.p(k,C.d(""+j+" \u2b50",k,k,k,k,k,k,C.l(k,k,w?D.w:D.bY,k,k,k,k,k,k,k,k,13,k,k,D.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),D.f,k,k,new C.o(p,k,k,m,k,k,D.n),k,k,k,k,D.G6,k,k,k)],x.p),D.m,k,D.e,D.P,0,D.p)}else{i=C.d(p,k,k,k,k,k,k,D.nK,k,k,k)
p=x.p
n=C.E(C.x(C.a([C.d(o,k,k,k,k,k,k,D.nI,k,k,k),C.d(n,k,k,k,k,k,k,B.aSC,k,k,k)],p),D.E,k,D.e,D.i,0,D.p),1)
o=w?D.bG:D.bz
m=C.m(14)
i=C.B(C.a([i,D.at,n,C.p(k,C.d(""+j+" \u2b50",k,k,k,k,k,k,C.l(k,k,w?D.w:D.bY,k,k,k,k,k,k,k,k,k,k,k,D.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),D.f,k,k,new C.o(o,k,k,m,k,k,D.n),k,k,k,k,D.nq,k,k,k)],p),D.m,k,D.e,D.i,0,k,k)}return C.aB(k,C.p(k,i,D.f,k,k,new C.o(s,k,q,r,k,k,D.n),k,k,k,D.cv,new C.Q(u,t,u,t),k,k,v),D.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new A.ebY(l.a,d),k,k,k,k,k,k,!1,D.a4)},
$S:z+124}
A.ebY.prototype={
$0(){return this.a.aPj(this.b)},
$S:0}
A.ebW.prototype={
$2(d,e){var w,v,u,t=null,s=x.p,r=C.a([new C.D(B.bxk,C.d(d,t,t,t,t,t,t,B.fqT,t,t,t),t)],s)
if(this.a){s=C.a([],s)
for(w=e.length,v=this.b,u=0;u<w;++u)s.push(v.$1(e[u]))
r.push(C.bX(D.bC,s,D.bq,t,0,8))}else for(s=e.length,w=this.b,u=0;u<s;++u)r.push(w.$1(e[u]))
return C.x(r,D.E,t,D.e,D.P,0,D.p)},
$S:z+63}
A.ebV.prototype={
$0(){var w=this.a
return w.m(new A.ebU(w))},
$S:0}
A.ebU.prototype={
$0(){return this.a.k2=!1},
$S:0}
A.eaX.prototype={
$2(d,e){var w=null,v=e.j(0.2),u=C.m(10)
return C.p(w,C.d(d,w,w,w,w,w,w,C.l(w,w,e,w,w,w,w,w,w,w,w,11.5,w,w,D.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),D.f,w,w,new C.o(v,w,w,u,w,w,D.n),w,w,w,w,D.fQ,w,w,w)},
$S:1808}
A.eaY.prototype={
$1(d){return B.hz.h(0,d.b).a},
$S:z+64}
A.eaU.prototype={
$1(d){var w,v,u,t,s=this,r=null,q=d.c,p=A.yP(q),o=D.k.V(Math.sqrt(Math.pow(p.a-s.b,2)+Math.pow(p.b-s.c,2))/10),n=D.c.j(0.07),m=C.m(16),l=C.J(D.bz,D.r,1),k=d.b,j=C.d(A.Le(k).b,r,r,r,r,r,r,D.nK,r,r,r),i=s.d
k=C.d(d.w?"\ud83d\ude91 "+A.Le(k).c+": "+C.w(i.$1(q))+" \u2192 "+C.w(i.$1(d.d))+" (somebody was run over)":A.Le(k).c+": "+C.w(i.$1(q))+" \u2192 a house",r,r,r,r,r,r,B.aU8,r,r,r)
w=s.e
v=w.$2(""+d.e+" points",D.bG)
u=w.$2(""+o+" m to the shop",D.aQ)
p=A.yP(q)
t=A.yP(d.d)
q=x.p
w=C.E(C.x(C.a([k,D.cL,C.bX(D.bC,C.a([v,u,w.$2(""+D.k.V(Math.sqrt(Math.pow(p.a-t.a,2)+Math.pow(p.b-t.b,2))/10)+" m trip",D.bj)],q),D.bq,r,0,6)],q),D.E,r,D.e,D.i,0,D.p),1)
k=s.f!=null
i=k?r:new A.eaW(s.a,s.r,d,i)
v=k?D.bz:D.bG
u=C.m(14)
return C.p(r,C.B(C.a([j,D.at,w,D.ac,C.aB(r,C.p(r,C.d("Take",r,r,r,r,r,r,C.l(r,r,k?D.bY:D.w,r,r,r,r,r,r,r,r,r,r,r,D.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),D.f,r,r,new C.o(v,r,r,u,r,r,D.n),r,r,r,r,D.iB,r,r,r),D.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,i,r,r,r,r,r,r,!1,D.a4)],q),D.m,r,D.e,D.i,0,r,r),D.f,r,r,new C.o(n,r,l,m,r,r,D.n),r,r,r,D.cv,D.bS,r,r,r)},
$S:z+65}
A.eaW.prototype={
$0(){var w=this,v=w.c,u=w.a
if(w.b.cYx(0,v,u.CW.gi9()/1000)){u.m(new A.eaV(u))
if(!u.aN)u.a2H()
u.eh(A.Le(v.b).b+" Order taken: go to the "+w.d.$1(v.c).toLowerCase()+" (follow the yellow line), then to the house.",!0)}},
$S:0}
A.eaV.prototype={
$0(){return this.a.go=!1},
$S:0}
A.eaS.prototype={
$0(){var w=this.a
return w.m(new A.eaR(w))},
$S:0}
A.eaR.prototype={
$0(){return this.a.go=!1},
$S:0}
A.eaT.prototype={
$0(){var w=this.a
return w.m(new A.eaQ(w,this.b))},
$S:0}
A.eaQ.prototype={
$0(){this.b.a4(0)
this.a.eh("Order given back.",!0)},
$S:0}
A.eam.prototype={
$0(){return this.a.k3=!1},
$S:0}
A.ean.prototype={
$0(){return this.a.k3=!1},
$S:0}
A.ebN.prototype={
$0(){return A.fW(1175,220,0.3,"tri")},
$S:0}
A.ea_.prototype={
$0(){var w=this.a
return w.m(new A.e9Z(w))},
$S:0}
A.e9Z.prototype={
$0(){return this.a.k3=!1},
$S:0}
A.ea0.prototype={
$0(){return this.a.bTQ(this.b)},
$S:0}
A.e9M.prototype={
$4(d,e,f,g){var w=-d,v=this.a
return 0.5*(2*e+(w+f)*v+(2*d-5*e+4*f-g)*v*v+(w+3*e-3*f+g)*v*v*v)},
$S:327}
A.eaE.prototype={
$1(d){return d.c==="outside"},
$S:z+5}
A.ebZ.prototype={
$0(){var w=this.a
w.R8=!1
w.y1=null
w.p4=!0
w.rx=this.b
w.ry=-1},
$S:0}
A.e9Y.prototype={
$2(d,e){return d[D.o.E(e,0,d.length-1)]},
$S:z+66}
A.ec9.prototype={
$0(){var w=this.a
w.p4=!1
w.aJ=null
w.iD()},
$S:0}
A.e9W.prototype={
$4(d,e,f,g){var w=null,v=D.c.j(0.07),u=C.m(16),t=C.J(D.bz,D.r,1),s=x.p
return C.aB(w,C.p(w,C.B(C.a([C.d(d,w,w,w,w,w,w,D.nK,w,w,w),D.bd,C.E(C.x(C.a([C.d(e,w,w,w,w,w,w,D.hE,w,w,w),C.d(f,w,w,w,w,w,w,D.hn,w,w,w)],s),D.E,w,D.e,D.i,0,D.p),1),A_.OZ],s),D.m,w,D.e,D.i,0,w,w),D.f,w,w,new C.o(v,w,t,u,w,w,D.n),w,w,w,D.jg,D.bf,w,w,w),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new A.e9X(this.a,g),w,w,w,w,w,w,!1,D.a4)},
$S:1809}
A.e9X.prototype={
$0(){return this.a.cyG(this.b)},
$S:0}
A.e9V.prototype={
$0(){var w=this.a
return w.m(new A.e9U(w))},
$S:0}
A.e9U.prototype={
$0(){return this.a.R8=!1},
$S:0}
A.eat.prototype={
$1(d){return d.c==="outside"},
$S:z+5}
A.ec8.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&C.c()
w=t[this.b]
v=u.at.h(0,w.a)
if(v==null||!A.h3h(w.b,v.a))return 0
return v.b.c<2?1:2},
$S:97}
A.ecY.prototype={
$1(d){return d},
$S:117}
A.e9v.prototype={
$1(d){return d},
$S:117}
A.eaq.prototype={
$0(){var w=A.csF(0,null,!1,this.a.a*13+5+this.b.f,!0)
w.am9()
return w},
$S:z+67}
A.ear.prototype={
$1(d){return A.cib(!1,this.a,!1)},
$S:z+41}
A.eas.prototype={
$1(d){return d.length!==0},
$S:3}
A.ea5.prototype={
$0(){return new A.CE(C.U(x.S,x.N))},
$S:z+69}
A.ea6.prototype={
$1(d){return new A.E2("light",this.a,null)},
$S:z+27}
A.eaG.prototype={
$1(d){return d.c==="outside"},
$S:z+5}
A.eaH.prototype={
$0(){return this.a.y1=this.b},
$S:0}
A.e9_.prototype={
$1(d){var w=null
return new C.bO(D.a5,w,w,C.p(w,C.d(d,w,w,w,w,w,w,B.aTa,w,w,w),D.f,w,B.ad1,B.b59,w,w,w,D.cv,D.iB,w,w,w),w)},
$S:138}
A.e8Z.prototype={
$5$primary(d,e,f,g,h){var w=null,v=h?f:f.j(0.14),u=C.m(16),t=C.J(f,D.r,1),s=C.X(d,h?D.w:f,w,w,w,21)
return C.aB(w,C.p(w,C.B(C.a([s,D.ac,C.d(e,w,w,w,w,w,w,C.l(w,w,h?D.w:D.c,w,w,w,w,w,w,w,w,14.5,w,w,D.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),D.m,w,D.b8,D.i,0,w,w),D.f,w,w,new C.o(v,w,t,u,w,w,D.n),w,48,w,D.jg,w,w,w,w),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,!1,D.a4)},
$4(d,e,f,g){return this.$5$primary(d,e,f,g,!1)},
$S:1810}
A.e90.prototype={
$0(){var w=this.a
return w.m(new A.e8Y(w))},
$S:0}
A.e8Y.prototype={
$0(){return this.a.y1=null},
$S:0}
A.e91.prototype={
$0(){var w,v,u=this.a
u.m(new A.e8X(u))
if(!u.aN)u.a2H()
w=u.aC
if(w!=null){v=u.e
v===$&&C.c()
v.apO(220,0.5,new A.q(w.f,30,w.r))}u.eh("Follow the yellow line on the ground to get there.",!0)},
$S:0}
A.e8X.prototype={
$0(){return this.a.y1=null},
$S:0}
A.e92.prototype={
$0(){var w,v=this.a
v.m(new A.e8W(v))
if(v.cJ==null){v.cJ=this.b
v.hM=0}w=this.b
v.Sn(w.a)
w=w.c
if(w==="power")w="You are at the house. Walk in and onto the red mat at the breaker panel."
else w=w==="sick"?"You are at the hospital. Walk in and onto the desk.":y.Y
v.eh(w,!0)},
$S:0}
A.e8W.prototype={
$0(){return this.a.y1=null},
$S:0}
A.e93.prototype={
$0(){var w=this.a
w.m(new A.e8V(w,this.b))
w.eh("Saved on your waiting list.",!0)},
$S:0}
A.e8V.prototype={
$0(){var w,v=this.a
v.y1=null
w=this.b
if(v.cJ===w)v.cJ=null
v=v.eL
if(!D.d.t(v,w))v.push(w)},
$S:0}
A.e94.prototype={
$0(){var w=this.a
return w.m(new A.e8U(w))},
$S:0}
A.e8U.prototype={
$0(){return this.a.y2=!1},
$S:0}
A.e9r.prototype={
$1(d){var w=null
return C.bx(D.r_,new C.a6(w,C.aJ(d,w,x.w).w.a.b*0.82,new A.apK(this.a,w),w),D.ap)},
$S:1811}
A.e9s.prototype={
$0(){var w=this.a
w.azH()
w.iD()},
$S:0}
A.ebM.prototype={
$1(d){return new C.e0(new A.ebK(this.a,this.b,this.c),null)},
$S:19}
A.ebK.prototype={
$2(d,e){var w,v,u,t,s=null,r=new A.ebL(this.a,e),q=this.b,p=q.a,o=C.d(p.b+" "+q.gaDF(0),s,s,s,s,s,s,Q.t7,s,s,s)
p=C.d(p.f,s,s,s,s,s,s,D.vl,s,s,s)
w=C.d("Now: "+q.gUl()+"\nFood "+D.k.V(100-q.b)+"%   Health "+D.k.V(q.c)+"%   Home "+D.k.V(q.d)+"%",s,s,s,s,s,s,B.aTD,s,s,s)
v=this.c
u=x.p
t=C.a([r.$2("\ud83c\udf5e Feed",new A.ebH(v,q))],u)
if(q.e)t.push(r.$3$col("\ud83d\udc8a Medicine",new A.ebI(v,q),D.bw))
if(q.e||q.c<60)t.push(r.$3$col("\ud83c\udfe5 Hospital",new A.ebJ(v,q),D.ct))
return C.bl(!0,new C.D(D.bQ,C.x(C.a([o,p,D.O,w,D.ad,C.bX(D.bC,t,D.bq,s,8,8)],u),D.E,s,D.e,D.P,0,D.p),s),!0,!1,D.af,!0,!0)},
$S:85}
A.ebL.prototype={
$3$col(d,e,f){var w=null,v=f.j(0.22),u=C.m(12),t=C.J(f,D.r,1)
return C.aB(w,C.p(w,C.d(d,w,w,w,w,w,w,C.l(w,w,f,w,w,w,w,w,w,w,w,13,w,w,D.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),D.f,w,w,new C.o(v,w,t,u,w,w,D.n),w,w,w,w,X.vX,w,w,w),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new A.ebG(this.a,e,this.b),w,w,w,w,w,w,!1,D.a4)},
$2(d,e){return this.$3$col(d,e,D.aC)},
$S:1812}
A.ebG.prototype={
$0(){var w,v=this.b.$0()
this.c.$1(new A.ebF())
w=this.a
w.m(w.giV())
w.iE(v)},
$S:0}
A.ebF.prototype={
$0(){},
$S:0}
A.ebH.prototype={
$0(){return this.a.beN(this.b)},
$S:22}
A.ebI.prototype={
$0(){return this.a.aKL(this.b)},
$S:22}
A.ebJ.prototype={
$0(){return this.a.aDm(this.b)},
$S:22}
A.ebw.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=x.p,k=C.a([],l)
for(w=D.d.gaf(B.a3P),v=new C.f5(w,new A.ebt()),u=this.a,t=this.b;v.C();){s=w.gT(0)
r=D.c.j(0.08)
q=new C.aP(12,12)
p=u.d
p===$&&C.c()
o=p.d
o===$&&C.c()
n=new C.ay(o[p.e].fx.h(0,t)===s.a?D.aC:D.aZ,1,D.r,-1)
k.push(C.aB(m,C.p(m,new C.y(s.c+" "+s.b,m,D.Kf,m,m,m,m,m,m,m,m,m),D.f,m,m,new C.o(r,m,new C.bK(n,n,n,n),new C.bg(q,q,q,q),m,m,D.n),m,m,m,m,D.eB,m,m,m),D.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new A.ebu(u,d,t,s),m,m,m,m,m,m,!1,D.a4))}w=u.d
w===$&&C.c()
v=w.d
v===$&&C.c()
if(v[w.e].fx.h(0,t)!=null)k.push(C.aB(m,C.p(m,B.fMm,D.f,m,m,new C.o(D.ek,m,m,C.m(12),m,m,D.n),m,m,m,m,D.eB,m,m,m),D.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new A.ebv(u,d,t),m,m,m,m,m,m,!1,D.a4))
return C.bl(!0,new C.D(D.bQ,C.x(C.a([B.fIq,D.W,C.bX(D.bC,k,D.bq,m,8,8)],l),D.E,m,D.e,D.P,0,D.p),m),!0,!1,D.af,!0,!0)},
$S:27}
A.ebt.prototype={
$1(d){return!(d.d>70||d.e)},
$S:z+26}
A.ebu.prototype={
$0(){var w,v,u,t=this
C.a4(t.b,!1).O(null)
w=t.a
v=t.d
w.m(new A.ebs(w,t.c,v))
u=v.d>0||v.e
v=v.b
w.iE(u?v+" is on and playing NGMY ads. Tap it to watch full screen.":v+" is plugged in and running.")
A.fW(820,70,0.25,"tri")},
$S:0}
A.ebs.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.d
w===$&&C.c()
w[u.e].fx.n(0,this.b,this.c.a)
v.iD()},
$S:0}
A.ebv.prototype={
$0(){C.a4(this.b,!1).O(null)
var w=this.a
w.m(new A.ebr(w,this.c))
w.iE("Unplugged.")},
$S:0}
A.ebr.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.d
w===$&&C.c()
w[u.e].fx.W(0,this.b)
v.iD()},
$S:0}
A.ecI.prototype={
$1(d){return new C.e0(new A.ecG(this.a),null)},
$S:19}
A.ecG.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.a,k=new A.ecH(l,e),j=l.d
j===$&&C.c()
w=j.d
w===$&&C.c()
j=C.d("TV in "+w[j.e].b,m,m,m,m,m,m,D.de,m,m,m)
w=x.p
v=C.a([],w)
for(u=D.d.gaf(B.a3P),t=new C.f5(u,new A.ecz());t.C();){s=u.gT(0)
r=s.b
q=l.d
p=q.d
p===$&&C.c()
q=p[q.e].k1===s.a?D.aC:D.eR
v.push(k.$3$color(r,new A.ecA(l,s),q))}j=C.a([j,D.W,C.bX(D.bC,v,D.bq,m,8,8)],w)
if(l.d.a.length!==0){v=C.a([],w)
for(o=0;o<3;++o){u={}
t=B.d6u[o]
u.a=null
n=t.a
u.a=n
s=l.d
r=s.d
r===$&&C.c()
s=r[s.e].p1===n?D.aC:D.eR
v.push(k.$3$color(t.b,new A.ecB(u,l),s))}D.d.v(j,C.a([B.fve,D.am,C.bX(D.bC,v,D.bq,m,8,8)],w))}j.push(D.W)
w=C.a([],w)
v=l.d
u=v.d
u===$&&C.c()
v=u[v.e]
if(v.k1!=null){v=v.p2?"\u23fb Turn this TV off":"\u23fb Turn this TV on"
w.push(k.$2(v,new A.ecC(l)))}v=l.d
u=v.d
u===$&&C.c()
if(u[v.e].k1!=null&&v.a.length===0)w.push(k.$3$color("\ud83d\uddd1 Take it down",new A.ecD(l),D.ek))
if(l.d.a.length===0)w.push(k.$3$color("\ud83d\udcfa A TV in every room, all on",new A.ecE(l),D.cV))
if(l.d.a.length===0)w.push(k.$3$color("\u23fb All TVs off",new A.ecF(l),D.bn))
j.push(C.bX(D.bC,w,D.bq,m,8,8))
return C.bl(!0,new C.D(D.bQ,C.x(j,D.E,m,D.e,D.P,0,D.p),m),!0,!1,D.af,!0,!0)},
$S:85}
A.ecH.prototype={
$3$color(d,e,f){var w=null,v=f.j(0.4),u=C.m(12),t=C.J(f,D.r,1)
return C.aB(w,C.p(w,C.d(d,w,w,w,w,w,w,F.Ac,w,w,w),D.f,w,w,new C.o(v,w,t,u,w,w,D.n),w,w,w,w,X.vX,w,w,w),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new A.ecy(this.a,e,this.b),w,w,w,w,w,w,!1,D.a4)},
$2(d,e){return this.$3$color(d,e,D.eR)},
$S:1813}
A.ecy.prototype={
$0(){this.b.$0()
this.c.$1(new A.ecx())
var w=this.a
w.m(w.giV())},
$S:0}
A.ecx.prototype={
$0(){},
$S:0}
A.ecz.prototype={
$1(d){return d.d>0||d.e},
$S:z+26}
A.ecA.prototype={
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
A.ecB.prototype={
$0(){var w,v=this.b.d
v===$&&C.c()
w=v.d
w===$&&C.c()
return w[v.e].p1=this.a.a},
$S:0}
A.ecC.prototype={
$0(){var w,v=this.a.d
v===$&&C.c()
w=v.d
w===$&&C.c()
v=w[v.e]
return v.p2=!v.p2},
$S:0}
A.ecD.prototype={
$0(){var w,v=this.a.d
v===$&&C.c()
w=v.d
w===$&&C.c()
v=w[v.e]
v.k1=null
v.p2=!1},
$S:0}
A.ecE.prototype={
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
A.ecF.prototype={
$0(){var w,v,u=this.a.d
u===$&&C.c()
u=u.gqT()
w=u.length
v=0
for(;v<w;++v)u[v].p2=!1},
$S:0}
A.ecu.prototype={
$1(d){return new C.e0(new A.ecs(this.a),null)},
$S:19}
A.ecs.prototype={
$2(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new A.ect(),e=C.at(C.p(g,g,D.f,g,g,new C.o(D.aZ,g,g,C.m(2),g,g,D.n),g,4,g,g,g,g,g,42),g,g,g),d=x.p,a0=C.B(C.a([C.p(g,G.apu,D.f,g,g,new C.o(g,g,g,C.m(16),g,B.c1Q,D.n),g,52,g,g,g,g,g,52),D.es,B.bEE],d),D.m,g,D.e,D.i,0,g,g),a1=f.$1("Who walks the house"),a2=C.a([],d)
for(w=B.aGS.gdS(B.aGS),w=w.gaf(w),v=x.s,u=x.N,t=x.ec,s=this.a;w.C();){r=w.gT(w)
q=$.ahK
p=r.a
q=q===p?D.aQ.j(0.18):D.c.j(0.06)
o=new C.aP(18,18)
n=$.ahK===p
m=n?D.aQ:D.bz
l=new C.ay(m,n?2:1,D.r,-1)
n=n?D.aQ:D.aZ
m=r.b
k=D.d.gI(m.split(" "))
m=C.a(m.split(" "),v)
j=new C.jy(m,1,g,t)
j.pg(m,1,g,u)
j=j.aH(0," ")
p=$.ahK===p?D.aQ:D.c
a2.push(new C.D(D.Na,C.aB(g,C.dd(g,C.x(C.a([new C.p_(new C.y(k,g,D.pA,g,g,g,g,g,g,g,g,g),n,g,20,g),D.am,new C.y(j,g,new C.F(!0,p,g,g,g,g,12.5,D.H,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g),g,g,g,g,D.a1,g,1,g,g)],d),D.m,g,D.b8,D.i,0,D.p),g,g,D.b5,new C.o(q,g,new C.bK(l,l,l,l),new C.bg(o,o,o,o),g,g,D.n),D.hr,g,g,g,D.Gk,g,g,92),D.y,!1,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,new A.eco(s,a4,r),g,g,g,g,g,g,!1,D.a4),g))}a2=C.cf(a2,g,g,g,g,D.aM,!1)
w=f.$1("How long")
v=D.c.j(0.06)
u=C.m(16)
t=C.a([],d)
for(i=0;i<5;++i){h=B.drE[i]
r=s.db===h
q=r?D.aC:D.L
p=new C.aP(12,12)
if(h<60)o=""+h+" seconds"
else o=h===60?"1 minute":""+(h/60|0)+" minutes"
r=r?D.w:D.ae
t.push(new C.bz(1,D.bb,C.aB(g,C.dd(g,new C.ca(D.A,g,g,new C.y(o,g,new C.F(!0,r,g,g,g,g,12.5,D.u,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g),g,D.K,g,g,g,g,g,g,g),g),g,g,D.b5,new C.o(q,g,g,new C.bg(p,p,p,p),g,g,D.n),D.hr,g,g,g,D.u0,g,g,g),D.y,!1,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,new A.ecp(s,a4,h),g,g,g,g,g,g,!1,D.a4),g))}v=C.p(g,C.B(t,D.m,g,D.e,D.i,0,g,g),D.f,g,g,new C.o(v,g,g,u,g,g,D.n),g,g,g,g,D.ev,g,g,g)
u=C.aB(g,C.p(g,B.f1n,D.f,g,g,new C.o(g,g,g,C.m(18),C.a([new C.ac(0,D.G,D.aw.j(0.35),D.cx,16)],x.V),B.c2O,D.n),g,56,g,g,g,g,g,g),D.y,!1,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,new A.ecq(s,a3),g,g,g,g,g,g,!1,D.a4)
t=D.c.j(0.06)
r=C.m(18)
return C.p(g,C.bl(!0,C.cg(C.x(C.a([e,D.aN,a0,a1,new C.a6(g,96,a2,g),w,v,D.dS,u,D.ad,C.aB(g,C.p(g,B.f1h,D.f,g,g,new C.o(t,g,C.J(D.bz,D.r,1),r,g,g,D.n),g,g,g,g,D.bA,g,g,g),D.y,!1,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,new A.ecr(s,a3),g,g,g,g,g,g,!1,D.a4)],d),D.E,g,D.e,D.P,0,D.p),D.t,g,D.y,g,D.akX,g,g,D.ag),!0,!1,D.af,!0,!0),D.f,g,g,B.b4d,g,g,g,g,g,g,g,g)},
$S:162}
A.ect.prototype={
$1(d){var w=null
return new C.D(G.ajE,C.d(d.toUpperCase(),w,w,w,w,w,w,P.t9,w,w,w),w)},
$S:138}
A.eco.prototype={
$0(){var w=this.c
this.b.$1(new A.ecm(w))
A.bTK(w.a)
this.a.m(new A.ecn())},
$S:0}
A.ecm.prototype={
$0(){return $.ahK=this.a.a},
$S:0}
A.ecn.prototype={
$0(){},
$S:0}
A.ecp.prototype={
$0(){return this.b.$1(new A.ecl(this.a,this.c))},
$S:0}
A.ecl.prototype={
$0(){return this.a.db=this.b},
$S:0}
A.ecq.prototype={
$0(){C.a4(this.b,!1).O(null)
var w=this.a
w.cyZ(w.db)},
$S:0}
A.ecr.prototype={
$0(){C.a4(this.b,!1).O(null)
this.a.b7r(45,!0)},
$S:0}
A.ec5.prototype={
$0(){var w=this.a,v=w.d
v===$&&C.c()
v.e=this.b
w.ax=null
w.iD()},
$S:0}
A.ec6.prototype={
$1(d){return this.a.cDb()},
$S:11}
A.ec7.prototype={
$0(){},
$S:0}
A.ecv.prototype={
$0(){return this.a.dy=this.b.as},
$S:0}
A.eck.prototype={
$0(){var w=this.b
w.iD()
w.aA=this.a.a;++w.aE},
$S:0}
A.ecc.prototype={
$0(){var w=this.a
w.cx=null
w.dy=""},
$S:0}
A.ecd.prototype={
$0(){},
$S:0}
A.ec4.prototype={
$0(){},
$S:0}
A.ecb.prototype={
$0(){},
$S:0}
A.ecT.prototype={
$0(){return this.a.id=!0},
$S:0}
A.ecU.prototype={
$0(){return this.a.k2=!0},
$S:0}
A.ecV.prototype={
$0(){return this.a.k3=!0},
$S:0}
A.ecW.prototype={
$1(d){return B.aQm.t(0,d.b)},
$S:z+4}
A.ecM.prototype={
$1(d){var w
if(d.b==="gasstation"){w=this.a
w=Math.sqrt(Math.pow(w.f-d.c,2)+Math.pow(w.r-d.d,2))<135}else w=!1
return w},
$S:z+4}
A.ecN.prototype={
$0(){return this.a.aPj(B.aQD)},
$S:0}
A.ecO.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.d
w===$&&C.c()
D.d.W(w[u.e].x,this.b)
v.al="crate"
v.m(v.giV())
v.eh("You picked up a crate. Carry it to the shop and walk onto the green mat by the counter to sell it at the market.",!0)
A.fW(700,60,0.25,"tri")
return null},
$S:0}
A.ecP.prototype={
$0(){return this.a.abi(this.b)},
$S:0}
A.ecQ.prototype={
$0(){return this.a.bQu(this.b)},
$S:0}
A.ecR.prototype={
$0(){return this.a.bT6(this.b)},
$S:0}
A.ecS.prototype={
$0(){return this.b.cL=this.a.a},
$S:0}
A.ea4.prototype={
$0(){},
$S:0}
A.eaL.prototype={
$0(){var w=this.a
w.y1=null
w.y2=!0},
$S:0}
A.eaI.prototype={
$1(d){return d.c==="outside"},
$S:z+5}
A.eaJ.prototype={
$1(d){return d.b==="hospital"},
$S:z+4}
A.eaK.prototype={
$1(d){return!d.e&&d.r<0},
$S:z+17}
A.eau.prototype={
$1(d){return d.c==="outside"},
$S:z+5}
A.eav.prototype={
$1(d){return d.a.b===this.a.d},
$S:z+17}
A.ec_.prototype={
$0(){},
$S:0}
A.eao.prototype={
$0(){return this.a.k3=!0},
$S:0}
A.ebO.prototype={
$1(d){return d.b==="hospital"},
$S:z+4}
A.ebP.prototype={
$0(){return this.a.go=!1},
$S:0}
A.ec0.prototype={
$0(){var w=this.a
w.iD()
w.aem(!0)},
$S:0}
A.ec1.prototype={
$1(d){return this.a.c7X()},
$S:11}
A.eaB.prototype={
$1(d){return!D.d.b2(this.a.d,new A.eaA(d))},
$S:32}
A.eaA.prototype={
$1(d){return d.a===this.a},
$S:z+18}
A.eaC.prototype={
$1(d){return d.a===this.a.a},
$S:z+18}
A.ec2.prototype={
$1(d){var w,v,u=this.a
if(u.c==null)return
w=++u.S
if(w>36){v=u.bC
u.B4()
if(v!=null)u.aBJ("Nobody answered the phone")
return}if(w%8<4){A.fW((w&1)===0?1046:1318,160,0.3,"sine")
if(D.o.F(u.S,8)===0)C.TC()}},
$S:11}
A.ec3.prototype={
$0(){},
$S:0}
A.eca.prototype={
$0(){var w=this.a
w.bC=w.bB=null},
$S:0}
A.eb_.prototype={
$4$col$on(d,e,f,g){var w=null,v=g?f.j(0.45):D.w.j(0.62),u=C.m(18),t=C.J(f,D.r,1.8)
return C.aB(w,C.p(w,C.d(d,w,w,w,w,w,w,D.j3,w,w,w),D.f,w,w,new C.o(v,w,t,u,w,w,D.n),w,w,w,D.a_M,B.bDV,w,w,w),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new A.eb0(e),w,w,w,w,!1,D.a4)},
$2(d,e){return this.$4$col$on(d,e,D.bj,!1)},
$3$col(d,e,f){return this.$4$col$on(d,e,f,!1)},
$3$on(d,e,f){return this.$4$col$on(d,e,D.bj,f)},
$S:1814}
A.eb0.prototype={
$1(d){return this.a.$0()},
$S:23}
A.eb8.prototype={
$7$about$avatar$glow$onAnswer$onDecline$onLater$who(d,e,f,g,h,i,j){var w=null,v=new A.eb9(),u=Math.min(this.a-28,340),t=C.m(30),s=C.J(D.aZ,D.r,2),r=C.a([new C.ac(0,D.G,f.j(0.35),D.I,24)],x.V),q=x.p,p=C.B(C.a([e,D.es,C.E(C.x(C.a([B.fJR,D.bD,C.d(j,w,1,D.a1,w,w,w,D.a9D,w,w,w),D.bD,C.d(d,w,2,D.a1,w,w,w,L.aa8,w,w,w)],q),D.E,w,D.e,D.P,0,D.p),1)],q),D.m,w,D.e,D.i,0,w,w),o=C.a([v.$4(B.bLy,"Decline",D.aw,h)],q)
if(i!=null)o.push(v.$4(D.jV,"Later",D.aC,i))
o.push(v.$5$big(D.iD,"Answer",D.be,g,!0))
return C.p(w,C.x(C.a([p,D.aA,C.B(o,D.E,w,D.e,D.i,0,w,w)],q),D.ak,w,D.e,D.P,0,D.p),D.f,w,w,new C.o(w,w,s,t,r,B.zd,D.n),w,w,w,D.d2,Ad.a_s,w,w,u)},
$6$about$avatar$glow$onAnswer$onDecline$who(d,e,f,g,h,i){return this.$7$about$avatar$glow$onAnswer$onDecline$onLater$who(d,e,f,g,h,null,i)},
$S:1815}
A.eb9.prototype={
$5$big(d,e,f,g,h){var w=null,v=h?58:50,u=h?58:50
return C.E(C.aB(w,C.x(C.a([C.p(w,C.X(d,D.c,w,w,w,h?30:26),D.f,w,w,new C.o(f,w,w,w,w,w,D.a6),w,u,w,w,w,w,w,v),D.fG,C.d(e,w,w,w,w,w,w,M.Ah,w,w,w)],x.p),D.m,w,D.e,D.P,0,D.p),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new A.eba(g),w,w,w,w,!1,D.a4),1)},
$4(d,e,f,g){return this.$5$big(d,e,f,g,!1)},
$S:1816}
A.eba.prototype={
$1(d){return this.a.$0()},
$S:23}
A.eb2.prototype={
$0(){var w=this.a
w.B4()
w.aBJ("You turned the call down")},
$S:0}
A.eb3.prototype={
$0(){var w=this.a
w.B4()
w.eL.push(this.b)
w.eh("Saved on your waiting list. You will be taken there when you are free.",!0)},
$S:0}
A.eb1.prototype={
$0(){var w=this.b,v=this.a
v.B4()
v.cJ=w
v.hM=0
v.ax1(w)},
$S:0}
A.eb4.prototype={
$0(){var w=this.a
w.B4()
w.cBw(this.b)},
$S:0}
A.eb7.prototype={
$2(d,e){var w=this.a
w.b0=d
w.be=e},
$S:271}
A.eb5.prototype={
$0(){var w=this.a
return w.m(new A.eaZ(w))},
$S:0}
A.eaZ.prototype={
$0(){var w=this.a
return w.bi=!w.bi},
$S:0}
A.eb6.prototype={
$0(){var w=this.a,v=w.aJ
if(v==null)v=null
else{v=v.at
v===$&&C.c()}w=v==null?w.aC:v
if(w!=null)if(w.Q<=0.01)w.as=160
return null},
$S:0}
A.eaM.prototype={
$1(d){var w=this.a,v=w.p4
w=w.RG
return v==="ptrap"?new A.a9L(w,null):new A.a5c(w,null)},
$S:1817}
A.eaN.prototype={
$1(d){var w=this.a
return new A.E2(w.p4,w.R8,null)},
$S:z+27}
A.ecX.prototype={
$1(d){var w=this.a
return new A.E2(w.a,w.c,null)},
$S:z+27}
A.eaP.prototype={
$1(d){return A.cib(!1,this.a.CW,!1)},
$S:z+41}
A.eaO.prototype={
$1(d){return new A.Wn(this.a.fr,null)},
$S:z+71}
A.e8r.prototype={
$1(d){var w,v,u,t,s,r,q,p=null,o=this.a,n=o.d
n===$&&C.c()
w=n.d
w===$&&C.c()
n=C.d("Add to "+w[n.e].b,p,p,p,p,p,p,D.de,p,p,p)
w=x.p
v=C.a([],w)
for(u=0;u<3;++u){t={}
s=B.dtm[u]
t.a=null
t.a=s.a
r=new C.aP(12,12)
q=new C.ay(D.b3,1,D.r,-1)
v.push(C.aB(p,C.p(p,new C.y(s.b,p,D.tb,p,p,p,p,p,p,p,p,p),D.f,p,p,new C.o(D.eR.j(0.4),p,new C.bK(q,q,q,q),new C.bg(r,r,r,r),p,p,D.n),p,p,p,p,X.vX,p,p,p),D.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new A.e8q(t,o,d),p,p,p,p,p,p,!1,D.a4))}return C.bl(!0,new C.D(D.bQ,C.x(C.a([n,D.au,B.fQW,D.ad,C.bX(D.bC,v,D.bq,p,8,8)],w),D.E,p,D.e,D.P,0,D.p),p),!0,!1,D.af,!0,!0)},
$S:27}
A.e8q.prototype={
$0(){C.a4(this.c,!1).O(null)
this.b.bB7(this.a.a)},
$S:0}
A.e8l.prototype={
$1(d){return d.b==="back"},
$S:z+20}
A.e8m.prototype={
$1(d){return d.b==="back"},
$S:z+20}
A.e8n.prototype={
$1(d){return Math.abs(d-this.a)>13},
$S:113}
A.e8o.prototype={
$0(){var w=this
w.b.id.push(new A.aWp(w.c,w.d,new A.CE(C.U(x.S,x.N))))
w.a.iD()},
$S:0}
A.eaF.prototype={
$0(){var w,v=this,u=v.b,t=u.c,s=v.c,r=v.d
u.c=t+(s?D.o.gVP(r)*40:r)
t=u.d
r=v.e
u.d=t+(s?D.o.gVP(r)*40:r)
t=v.a
r=t.d
r===$&&C.c()
w=r.d
w===$&&C.c()
w[r.e].a41(0,u)
t.iD()},
$S:0}
A.ecw.prototype={
$0(){var w,v,u,t=this.b
t.e=D.o.F(t.e+1,4)
w=this.a
v=w.d
v===$&&C.c()
u=v.d
u===$&&C.c()
u[v.e].a41(0,t)
w.iD()},
$S:0}
A.ebD.prototype={
$0(){var w=this.b
w.f=(w.f+1)%6
this.a.iD()},
$S:0}
A.ebE.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.d
w===$&&C.c()
D.d.W(w[u.e].x,this.b)
v.at=v.Q=0
v.iD()},
$S:0}
A.e8p.prototype={
$0(){var w=this.a,v=this.b.a
w.Q=v
w.at=100+v
w.iD()},
$S:0}
A.e9B.prototype={
$0(){return this.a.aen(-6,0)},
$S:0}
A.e9C.prototype={
$0(){return this.a.aen(6,0)},
$S:0}
A.e9D.prototype={
$0(){return this.a.aen(0,-6)},
$S:0}
A.e9E.prototype={
$0(){return this.a.aen(0,6)},
$S:0}
A.e9F.prototype={
$0(){return this.a.bBa(this.b.a)},
$S:0}
A.e9G.prototype={
$0(){var w=this.a
return w.m(new A.e9A(w))},
$S:0}
A.e9A.prototype={
$0(){return this.a.as=-1},
$S:0}
A.e9H.prototype={
$0(){var w=this.a
w.m(new A.e9z(w,this.b))},
$S:0}
A.e9z.prototype={
$0(){var w,v=this.a,u=v.as,t=this.b,s=v.d
if(u<0){s===$&&C.c()
u=s.d
u===$&&C.c()
D.d.hx(u[s.e].z,0,3,t)}else{s===$&&C.c()
w=s.d
w===$&&C.c()
w[s.e].z[u]=t}v.iD()},
$S:0}
A.e9I.prototype={
$0(){var w=this.a
w.m(new A.e9y(w,this.b))},
$S:0}
A.e9y.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.d
w===$&&C.c()
w[u.e].Q=this.b
v.iD()},
$S:0}
A.e9J.prototype={
$0(){var w=this.a
w.m(new A.e9x(w))},
$S:0}
A.e9x.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.d
w===$&&C.c()
u=w[u.e]
u.go=u.go==="fan"?"light":"fan"
v.iD()},
$S:0}
A.e9K.prototype={
$0(){var w=this.a
w.m(new A.e9w(w,this.b))},
$S:0}
A.e9w.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.d
w===$&&C.c()
w[u.e].as=this.b
v.iD()},
$S:0}
A.e9L.prototype={
$0(){return this.a.AB(this.b.d)},
$S:0}
A.ed_.prototype={
$0(){return C.a4(this.a,!1).ie()},
$S:0}
A.ed1.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.ecZ(w))},
$S:0}
A.ecZ.prototype={
$0(){return this.a.aA=null},
$S:0}
A.ed0.prototype={
$3(d,e,f){var w=null
return C.d9(C.cpe(D.A,w,w,w,w,D.cc,D.xs,w,this.a.aA,!1,!1,!1,w,D.pg,1,w),e)},
$S:101}
A.e9d.prototype={
$0(){return this.a.A4("calls")},
$S:0}
A.e9e.prototype={
$0(){return this.a.A4("hospital")},
$S:0}
A.e9f.prototype={
$0(){return this.a.A4("shop")},
$S:0}
A.e9j.prototype={
$0(){return this.a.A4("people")},
$S:0}
A.e9k.prototype={
$0(){return this.a.AB(10)},
$S:0}
A.e9l.prototype={
$0(){var w=this.a
return w.m(new A.e9c(w))},
$S:0}
A.e9c.prototype={
$0(){return this.a.k2=!0},
$S:0}
A.e9m.prototype={
$0(){var w=this.a
return w.m(new A.e9b(w))},
$S:0}
A.e9b.prototype={
$0(){return this.a.k3=!0},
$S:0}
A.e9n.prototype={
$0(){var w=this.a
return w.m(new A.e9a(w))},
$S:0}
A.e9a.prototype={
$0(){var w=this.a
return w.y1=w.cJ},
$S:0}
A.e9o.prototype={
$0(){var w=this.a,v=w.eL.length,u=v===1?"":"s"
return w.eh(""+v+" job"+u+" waiting. You are taken to the next one when you finish this one.",!0)},
$S:0}
A.e9p.prototype={
$0(){var w=this.a
return w.m(new A.e99(w))},
$S:0}
A.e99.prototype={
$0(){return this.a.go=!0},
$S:0}
A.e9q.prototype={
$0(){var w=this.a
return w.p4?w.a2K():w.m(new A.e98(w))},
$S:0}
A.e98.prototype={
$0(){return this.a.R8=!0},
$S:0}
A.e9g.prototype={
$0(){var w=this.a
return w.m(new A.e97(w))},
$S:0}
A.e97.prototype={
$0(){var w=this.a
return w.h5=!w.h5},
$S:0}
A.e9h.prototype={
$0(){var w=this.a
return w.m(new A.e96(w))},
$S:0}
A.e96.prototype={
$0(){return this.a.ai=!0},
$S:0}
A.e9i.prototype={
$0(){var w=this.a
return w.m(new A.e95(w))},
$S:0}
A.e95.prototype={
$0(){var w=this.a
return w.y=!w.y},
$S:0}
A.e8y.prototype={
$0(){var w=this.a.ghJ()
w=w==null?null:w.r
return w==null?0:w},
$S:97}
A.e8M.prototype={
$0(){return this.a.xY()},
$S:0}
A.e8L.prototype={
$1(d){return d<=5},
$S:32}
A.e8z.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n=null,m=this.a,l=m.aJ,k=m.CW
if(l!=null){m=k.gi9()
k=B.aGT.h(0,$.ahK)
if(k==null)k=B.a7J
k=l.cO_(m/1000,k)
m=k}else{l=m.d
l===$&&C.c()
w=l.d
w===$&&C.c()
l=w[l.e]
w=k.gi9()
v=m.clT()
u=B.aGT.h(0,$.ahK)
if(u==null)u=B.a7J
t=m.fr
s=m.r
r=m.bOk()
if(m.al==null){q=m.gpm()
if(q==null)q=n
else{q=q.x
q=(q==null?n:q.r)===!0}q=q===!0}else q=!0
p=m.d
o=p.d
o===$&&C.c()
if(o[p.e].c!=="outside")k=B.I3
else{p=m.gpm()
p=p==null?n:p.aml(k.gi9()/1000)
if(p==null)p=B.I3
p=C.C(p,x.hg)
o=m.gKv()
k=o==null?n:o.aml(k.gi9()/1000)
D.d.v(p,k==null?B.I3:k)
k=p}l=C.C(A.i9f(l,w/1000,q,k,r,s,v,u,t),x.fX)
k=m.d
w=k.d
w===$&&C.c()
if(w[k.e].c==="outside")D.d.v(l,m.cDj())
k=!0
if(m.cJ==null){w=m.gpm()
if((w==null?n:w.x)==null){k=m.gKv()
k=(k==null?n:k.f)!=null}}D.d.v(l,k?m.csc():B.I4)
m=l}return m},
$S:z+10}
A.e8A.prototype={
$1(d){var w,v,u=this.a
if(u.aJ==null){w=u.d
w===$&&C.c()
v=w.d
v===$&&C.c()
w=v[w.e].c==="outside"}else w=!1
return w?A.ik6(u.CW.gi9()/1000):B.wz},
$S:z+74}
A.e8N.prototype={
$3(d,e,f){var w=null,v=D.dK.j(0.82),u=C.m(18),t=C.J(D.b9,D.r,2)
return C.p(w,C.d(e,w,w,w,w,w,w,B.fti,w,w,w),D.f,w,w,new C.o(v,w,t,u,w,w,D.n),w,w,w,w,B.bC6,w,w,w)},
$S:1818}
A.e8D.prototype={
$0(){var w=this.a,v=w.d
v===$&&C.c()
return v.a.length!==0?w.En():w.cn8(this.b)},
$S:0}
A.e8O.prototype={
$0(){var w=this.a
w.m(new A.e8x(w))
w.xY()},
$S:0}
A.e8x.prototype={
$0(){var w=this.a
w.x=!w.x
w.iD()},
$S:0}
A.e8P.prototype={
$0(){var w=this.a
return w.cx!=null?w.S9():w.cDa()},
$S:0}
A.e8Q.prototype={
$0(){var w=this.a
w.m(new A.e8w(w))
w.xY()
if(w.z)w.iE("Drag to turn all the way round. Double tap a spot on the floor to walk there.")},
$S:0}
A.e8w.prototype={
$0(){var w=this.a,v=!w.z
w.z=v
if(v&&w.cx!=null)w.S9()
w.iD()},
$S:0}
A.e8R.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.d
w===$&&C.c()
return v.AB(w[u.e].c!=="outside"?11:10)},
$S:0}
A.e8S.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.d
w===$&&C.c()
if(w[u.e].c!=="outside")v.AB(11)
v.A4("calls")},
$S:0}
A.e8B.prototype={
$0(){var w=this.a
return w.m(new A.e8v(w))},
$S:0}
A.e8v.prototype={
$0(){var w=this.a,v=!w.w
w.w=v
if(v)w.iE("Voltage tester in your hand: tap an outlet, a switch or the light.")},
$S:0}
A.e8C.prototype={
$0(){var w=this.a
return w.m(new A.e8u(w))},
$S:0}
A.e8u.prototype={
$0(){var w=this.a
return w.y=!w.y},
$S:0}
A.e8E.prototype={
$0(){return this.a.PT("look")},
$S:0}
A.e8F.prototype={
$0(){return this.a.PT("furniture")},
$S:0}
A.e8G.prototype={
$0(){return this.a.PT("walls")},
$S:0}
A.e8H.prototype={
$0(){return this.a.PT("floor")},
$S:0}
A.e8I.prototype={
$0(){return this.a.PT("ceiling")},
$S:0}
A.e8J.prototype={
$0(){return this.a.PT("doors")},
$S:0}
A.e8K.prototype={
$0(){return C.a4(this.a,!1).cd(C.dZ(new A.e8t(),!1,null,x.H))},
$S:0}
A.e8t.prototype={
$1(d){return B.aHT},
$S:z+75}
A.ebC.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=C.aJ(d,m,x.w).w,k=this.a,j=k.d
j===$&&C.c()
w=x.p
j=C.a([B.fEZ,D.au,C.d("Wiring "+j.gcZE()+"/"+k.d.gqT().length+" \xb7 Plumbing "+k.d.gcWh()+"/"+k.d.gcWg(),m,m,m,m,m,m,B.K1,m,m,m),D.W],w)
for(v=k.d.gqT(),u=v.length,t=0;t<v.length;v.length===u||(0,C.M)(v),++t){s=v[t]
r=D.c.j(0.05)
q=new C.aP(12,12)
p=new C.ay(s.gkN()&&s.gjQ()?D.bj.j(0.5):D.bz,1,D.r,-1)
if(s.gkN()&&s.gjQ())o="\u2705 finished"
else{o=s.gkN()?"":"\u26a1 wiring  "
o+=s.gjQ()?"":"\ud83d\udeb0 plumbing"}n=s.gkN()&&s.gjQ()?D.et:D.ae
j.push(C.aB(m,C.p(m,new C.ce(D.aM,D.e,D.i,D.m,m,D.p,m,0,C.a([new C.bz(1,D.bb,new C.y(s.b,m,B.aU8,m,m,m,m,m,m,m,m,m),m),new C.y(o,m,new C.F(!0,n,m,m,m,m,12,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m,m,m,m,m,m,m)],w),m),D.f,m,m,new C.o(r,m,new C.bK(p,p,p,p),new C.bg(q,q,q,q),m,m,D.n),m,m,m,D.eI,D.bS,m,m,m),D.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new A.ebz(k,d,s),m,m,m,m,m,m,!1,D.a4))}j.push(D.O)
j.push(C.dI(B.fBU,new A.ebA(k,d),m))
j.push(D.O)
j.push(C.bE(B.fxZ,m,new A.ebB(k,d),m))
return C.bl(!0,new C.cU(new C.aZ(0,1/0,0,l.a.b*0.75),C.cf(j,m,D.bQ,m,m,D.ag,!0),m),!0,!1,D.af,!0,!0)},
$S:27}
A.ebz.prototype={
$0(){C.a4(this.b,!1).O(null)
this.a.AB(this.c.a)},
$S:0}
A.ebA.prototype={
$0(){C.a4(this.b,!1).O(null)
var w=this.a
w.m(new A.eby(w))
w.iE("Every room needs its wiring and plumbing again. Wire the whole house from the start.")},
$S:0}
A.eby.prototype={
$0(){var w=this.a,v=w.d
v===$&&C.c()
v.cST()
w.iD()},
$S:0}
A.ebB.prototype={
$0(){C.a4(this.b,!1).O(null)
$.Ef=A.aWw(D.o.F(Date.now(),1e5))
var w=this.a
w.m(new A.ebx(w))
w.aem(!0)},
$S:0}
A.ebx.prototype={
$0(){var w=this.a,v=$.Ef
v.toString
w.d=v
w.r="look"
w.Q=0
w.as=-1
w.at=0
w.iD()},
$S:0}
A.dvp.prototype={
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
A.f5D.prototype={
$0(){return this.b.d=this.a.a},
$S:0}
A.f5C.prototype={
$0(){return this.a.d=null},
$S:0}
A.f5F.prototype={
$1(d){return this.a.aZW(d.gfi())},
$S:81}
A.f5G.prototype={
$1(d){return this.a.aZW(d.gfi())},
$S:258}
A.f5H.prototype={
$1(d){return this.a.aZV()},
$S:121}
A.f5E.prototype={
$1(d){return this.a.aZV()},
$S:168}
A.fxU.prototype={
$1$speed(d){var w,v,u,t=null,s=this.a,r=s.a
if(r.length===0)return
w=s.b
v=s.d
u=s.c
u=u.length===0?t:D.d.gI(u)
this.b.push(new A.Ms(r,w,d,8,u,t,v,t,t))
v=x.o
s.a=C.a([],v)
s.b=C.a([],v)
s.c=C.a([],x.s)
s.d=!1},
$0(){return this.$1$speed(130)},
$S:1819}
A.fy0.prototype={
$3$note(d,e,f){var w=this.a
w.a.push(d)
w.b.push(e)
if(f!=null)w.c.push(f)},
$2(d,e){return this.$3$note(d,e,null)},
$S:z+76}
A.fxW.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m,l,k
for(w=this.a.x,v=w.length,u=d.a,t=d.c,s=d.b,r=0;r<v;++r){q=w[r]
p=q.b
if(p!=="billboard"&&p!=="cornersign"&&p!=="townsign"&&p!=="adboard")continue
A:{if("townsign"===p){p=B.a8c
break A}if("cornersign"===p){p=B.a8e
break A}if("adboard"===p){p=B.a8b
break A}p=B.a8d
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
A.fy1.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
for(w=this.a.x,v=w.length,u=0;u<=1;u+=0.02){t=A.o3(d,e,u)
for(s=t.a,r=t.c,q=t.b,p=0;p<v;++p){o=w[p]
n=o.b
if(n!=="billboard"&&n!=="cornersign"&&n!=="townsign"&&n!=="adboard")continue
A:{if("townsign"===n){n=B.a8c
break A}if("cornersign"===n){n=B.a8e
break A}if("adboard"===n){n=B.a8b
break A}n=B.a8d
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
A.fxV.prototype={
$2(d,e){return this.a.$2(d,e)!=null},
$S:z+78}
A.fxS.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this.a.$2(d,e)
if(i==null)return null
w=i.b
A:{if("townsign"===w){v=B.a8c
break A}if("cornersign"===w){v=B.a8e
break A}if("adboard"===w){v=B.a8b
break A}v=B.a8d
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
n=new A.fxT(d,e)
o=this.b
k=!o.$1(m)
j=!o.$1(l)
if(k&&j)return n.$1(m)<=n.$1(l)?m:l
if(k)v=m
else v=j?l:null
return v},
$S:z+79}
A.fxT.prototype={
$1(d){return d.aF(0,this.a).guU()+this.b.aF(0,d).guU()},
$S:z+80}
A.fxM.prototype={
$3(d,e,f){var w,v,u,t=this
if(!t.a.$2(d,e))return B.rH
w=f>=3?null:t.b.$2(d,e)
if(w==null)return C.a([new A.q((d.a+e.a)/2,430,(d.c+e.c)/2)],x.o)
v=f+1
u=C.C(t.$3(d,w,v),x.Q)
u.push(w)
D.d.v(u,t.$3(w,e,v))
return u},
$2(d,e){return this.$3(d,e,0)},
$S:z+81}
A.fxY.prototype={
$7$note(a2,a3,a4,a5,a6,a7,a8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=A.htd(a2),a1=new A.q(a2.c,a4,a2.d)
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
g=u.$1(A.o3(h,i,f))
f+=0.02}if(g)for(m=r.$2(h,i),l=m.length,e=0;e<m.length;m.length===l||(0,C.M)(m),++e)w.$2(m[e],D.d.gak(v.b))}w.$3$note(i,a1,k?a8:q)
q=null}},
$6(d,e,f,g,h,i){return this.$7$note(d,e,f,g,h,i,null)},
$S:z+104}
A.fy_.prototype={
$1(d){var w=d.b,v=this.a
switch(w){case"townsign":v.$7$note(d,255,250,430,520,60,"The biggest billboard in the city: NGMY Town")
break
case"cornersign":v.$7$note(d,115,120,210,260,50,"A corner billboard: NGMY Town")
break
case"adboard":v.$7$note(d,160,142,330,410,55,"A big NGMY ad billboard")
break
case"tower":v.$7$note(d,430,(w==="hq"?278:A.hsx(B.zg[d.f]))+40,150,210,20,"A tower with NGMY ad boards")
break
case"hq":v.$7$note(d,440,312,190,250,20,"The NGMY company building")
break
default:v.$7$note(d,75,48,130,175,45,"An NGMY billboard")}},
$S:z+29}
A.fxZ.prototype={
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
D.d.c3(p.a,v,w.h(u,q));++q
D.d.c3(p.b,v,A.o3(s,r,q/(w.gL(u)+1)))}}}},
$S:z+29}
A.fxX.prototype={
$1(d){var w
this.b.$0()
w=x.o
this.c.push(new A.Ms(C.a([B.hbb,B.fXB,B.fZC],w),C.a([B.hbI,B.fYS,B.h1e],w),55,8,"Inside the "+B.hz.h(0,d.b).a.toLowerCase(),d,!1,null,null))
this.a.d=!0},
$S:z+29}
A.fxN.prototype={
$1(d){return d.b==="townsign"},
$S:z+4}
A.fxO.prototype={
$2(d,e){var w=this.a
return D.k.aK(Math.pow(d.c-w.a.a,2)+Math.pow(d.d-w.a.c,2),Math.pow(e.c-w.a.a,2)+Math.pow(e.d-w.a.c,2))},
$S:z+16}
A.fxL.prototype={
$1(d){return Math.atan2(d.d-1000,d.c)},
$S:z+84}
A.fxP.prototype={
$2(d,e){var w=this.a
return J.Dq(w.$1(d),w.$1(e))},
$S:z+16}
A.fxQ.prototype={
$1(d){return d.b==="bighouse"},
$S:z+4}
A.fxR.prototype={
$1(d){return d.b===this.a},
$S:z+4}
A.cgi.prototype={
$0(){var w=0,v=C.j(x.P),u=1,t=[],s,r,q,p,o,n
var $async$$0=C.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
w=6
return C.b($.r6().jf(0,"assets/images/ngmy_logo.png"),$async$$0)
case 6:s=e
w=7
return C.b(C.fBo(J.eR(J.vD(s)),null),$async$$0)
case 7:r=e
o=$
n=J
w=8
return C.b(r.lL(),$async$$0)
case 8:o.Wh=n.a3k(e)
u=1
w=5
break
case 3:u=2
p=t.pop()
$.Wh=null
w=5
break
case 2:w=1
break
case 5:return C.h(null,v)
case 1:return C.f(t.at(-1),v)}})
return C.i($async$$0,v)},
$S:49}
A.fPe.prototype={
$4(d,e,f,g){var w,v,u=null,t=e*0.05,s=C.fv(u,u,1,u,C.cS(u,u,u,u,u,u,u,u,u,C.l(u,u,f,u,u,u,u,u,u,u,u,e,u,u,D.u,u,u,!0,u,t,u,u,u,u,u,u),d),D.a3,D.bZ,u,D.dA,D.bW)
s.el()
w=s.b.c
v=this.a
if(w>v){s=C.fv(u,u,1,u,C.cS(u,u,u,u,u,u,u,u,u,C.l(u,u,f,u,u,u,u,u,u,u,u,e*v/w,u,u,D.u,u,u,!0,u,t,u,u,u,u,u,u),d),D.a3,D.bZ,u,D.dA,D.bW)
s.el()}s.a3(this.b,new C.t(this.c+v/2-s.b.c/2,g))},
$S:1820}
A.fPc.prototype={
$1(d){var w,v,u,t,s,r=null,q=this.a,p=this.b,o=d.d-d.b
if(q!=null){w=q.c
v=q.d
u=Math.min((d.c-d.a)/w,o/v)
o=C.bL(d.gbL(),v*u,w*u)
$.S()
t=C.I()
t.Q=D.cc
p.oz(q,new C.a3(0,0,w,v),o,t)}else{s=C.fv(r,r,r,r,C.cS(r,r,r,r,r,r,r,r,r,C.l(r,r,this.c,r,r,r,r,r,r,r,r,o*0.6,r,r,D.u,r,r,!0,r,r,r,r,r,r,r,r),"NGMY"),D.a3,D.bZ,r,D.dA,D.bW)
s.el()
q=d.gbL()
o=s.b
w=o.c
o=o.a.c
s.a3(p,q.aF(0,new C.t(w/2,o.gbb(o)/2)))}},
$S:1821}
A.fPb.prototype={
$4$w(d,e,f,g){var w=null,v=C.fv(w,w,w,w,C.cS(w,w,w,w,w,w,w,w,w,C.l(w,w,this.a,w,w,w,w,w,w,w,w,f,w,w,g,w,w,!0,w,f*0.08,w,w,w,w,w,w),d),D.a3,D.bZ,w,D.dA,D.bW)
v.nZ(this.b.a*0.9)
v.a3(this.c,e.aF(0,new C.t(v.b.c/2,0)))},
$3(d,e,f){return this.$4$w(d,e,f,D.u)},
$S:1822}
A.fPd.prototype={
$1(d){var w=null,v=this.a.b*0.16
v=C.fv(w,w,w,w,C.cS(w,w,w,w,w,w,w,w,w,C.l(w,w,w,w,w,w,w,w,w,w,w,v,w,w,D.u,w,w,!0,w,v*0.08,w,w,w,w,w,w),d),D.a3,D.bZ,w,D.dA,D.bW)
v.el()
return v.b.c},
$S:555}
A.fyh.prototype={
$2(d,e){return this.a===d?e:0},
$S:552}
A.fy3.prototype={
$1(d){return d.b==="right"},
$S:z+20}
A.fye.prototype={
$0(){var w=C.a([],x.z),v=new A.fk(w)
v.f=1
v.x=$.dS=$.dS+1
v.aO(B.he4,B.h1m,B.Bf)
v.aZ(B.fXp,B.h7v,B.hW,0.5)
v.aO(B.aW8,B.h95,B.Bf)
v.aO(B.aW8,B.h57,B.Bf)
return w},
$S:z+85}
A.fyf.prototype={
$1(d){var w=this,v=w.a,u=v.b
A:{if("left"===u){v=A.ny(d,0,1.5707963267948966,new A.q(-w.b/2,0,v.c+w.c/2-40))
break A}if("right"===u){v=A.ny(d,0,-1.5707963267948966,new A.q(w.b/2,0,v.c+w.c/2-40))
break A}v=A.ny(d,0,0,new A.q(v.c,0,0))
break A}return v},
$S:z+86}
A.fy4.prototype={
$1(d){return d.b==="back"},
$S:z+20}
A.fy5.prototype={
$1(d){return d.c},
$S:z+87}
A.fy6.prototype={
$2(d,e){return e},
$S:80}
A.fy7.prototype={
$3(d,e,f){return I.S4(d,e,0,f+this.a)},
$S:24}
A.fy9.prototype={
$2(a8,a9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this
if(a8==null)return
w=A.aPR(a8)
v=a7.a
u=A.hae(v,w,a9)
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
n.aZ(new A.q(h+g*1.4,r,f),new A.q(2.6,s+3,t+3),B.LT,0.5)
n.aZ(new A.q(h+g*2.8,r,f),new A.q(0.2,s,t),F.nf,0.7)
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
k.push(new A.fQ(C.a([new A.q(e,a1,d),new A.q(e,a1,a0),new A.q(e,j,a0),new A.q(e,j,d)],a2),m,new A.fya(o,v,a9),320,a3,9,1,l,!1))
a4=h+g*0.05
k.push(new A.fQ(C.a([new A.q(a4,a1,a0),new A.q(a4,a1,d),new A.q(a4,j,d),new A.q(a4,j,a0)],a2),m,new A.fyb(o,v,a9),320,a3,9,1,l,!1))}}else{h=u.c
n.aZ(new A.q(h,r,1.4),new A.q(t+3,s+3,2.6),B.LT,0.5)
n.aZ(new A.q(h,r,2.8),new A.q(t,s,0.2),F.nf,0.7)
if(v.p2){k=a7.d
j=q/2
a1=h-j
a2=p/2
a3=r+a2
j=h+j
a2=r-a2
a5=x.o
a6=320*p/q
k.push(new A.fQ(C.a([new A.q(a1,a3,2.95),new A.q(j,a3,2.95),new A.q(j,a2,2.95),new A.q(a1,a2,2.95)],a5),m,new A.fyc(o,v,a9),320,a6,9,1,l,!1))
k.push(new A.fQ(C.a([new A.q(j,a3,0.05),new A.q(a1,a3,0.05),new A.q(a1,a2,0.05),new A.q(j,a2,0.05)],a5),m,new A.fyd(o,v,a9),320,a6,9,1,l,!1))}}n.e=n.x=0
v=v.p2?"It is on and playing "+E.kl[D.o.F(o,8)].a+". Tap it to watch full screen with the remote.":"The TV is off. Tap it to turn it on."
a7.e.n(0,m,new A.cW(w.b,v,new A.q(0,r,4),110))},
$S:1825}
A.fya.prototype={
$3(d,e,f){return I.S4(d,e,this.a,f+this.b.a+this.c*3)},
$S:24}
A.fyb.prototype={
$3(d,e,f){return I.S4(d,e,this.a,f+this.b.a+this.c*3)},
$S:24}
A.fyc.prototype={
$3(d,e,f){return I.S4(d,e,this.a,f+this.b.a+this.c*3)},
$S:24}
A.fyd.prototype={
$3(d,e,f){return I.S4(d,e,this.a,f+this.b.a+this.c*3)},
$S:24}
A.fyg.prototype={
$2(d,e){var w=this.a,v=w.f,u=w.r
w.f=1
w.r=!1
w.b=0
w.dR(new A.q(d,e,0),new A.q(d,e,2.2),0.7,B.LJ,0.7,10)
w.f=v
w.r=u},
$S:271}
A.fy8.prototype={
$1(d){return d.b===this.a.a},
$S:z+14}
A.frf.prototype={
$2(d,e){return this.a===d?e:0},
$S:552}
A.frg.prototype={
$5(d,e,f,g,h){var w=d.a9(0,e.aI(0,g)).a9(0,new A.q(0,h,0)),v=this.a
A.kI(v,w.a9(0,f.aI(0,0.1)),e,B.eb,26,30,B.kA,f,0)
A.kI(v,w.a9(0,f.aI(0,0.2)),e,B.eb,22,26,B.hW,f,0.6)
A.kI(v,w.a9(0,f.aI(0,0.3)),e,B.eb,22,1.2,B.kA,f,0)
A.kI(v,w.a9(0,f.aI(0,0.3)),e,B.eb,1.2,26,B.kA,f,0)},
$S:z+88}
A.frb.prototype={
$5(d,e,f,g,h){var w=d.a9(0,e.aI(0,g)),v=this.a,u=v.b
A.kI(v,w.a9(0,new A.q(0,42,0)).a9(0,f.aI(0,0.1)),e,B.eb,34,84,B.kA,f,0)
v.b=h
A.kI(v,w.a9(0,new A.q(0,41,0)).a9(0,f.aI(0,0.2)),e,B.eb,28,80,B.vD,f,0.2)
v.b=0
A.kI(v,w.a9(0,new A.q(0,58,0)).a9(0,f.aI(0,0.3)),e,B.eb,20,26,B.MI,f,0)
A.kI(v,w.a9(0,new A.q(0,22,0)).a9(0,f.aI(0,0.3)),e,B.eb,20,26,B.MI,f,0)
v.aZ(w.a9(0,e.aI(0,9)).a9(0,new A.q(0,40,0)).a9(0,f.aI(0,1)),new A.q(2.6,2.6,2.6),B.EZ,0.8)
v.b=u},
$S:z+123}
A.frc.prototype={
$5$poster(d,e,f,g,h){var w=C.a([d,e,f,g],x.o),v=h<0?A.h9H():new A.frd(h),u=h===0,t=u?1000:256
u=u?424:256
return this.a.push(new A.fQ(w,0,v,t,u,1,2,this.b,!1))},
$4(d,e,f,g){return this.$5$poster(d,e,f,g,-1)},
$S:z+90}
A.frd.prototype={
$3(d,e,f){return A.fPa(d,e,f,this.a)},
$S:24}
A.fqD.prototype={
$1(d){var w=d.b
return w==="pole"||w==="lamppost"},
$S:z+4}
A.fqE.prototype={
$2(d,e){return D.k.aK(d.c,e.c)},
$S:z+16}
A.fqF.prototype={
$1(d){return this.a.cy.aj(0,d.a)},
$S:z+4}
A.fqQ.prototype={
$1(d){return this.a.k4.t(0,d.a)},
$S:z+4}
A.fr0.prototype={
$1(d){return B.f3e.t(0,d.b)},
$S:z+4}
A.fre.prototype={
$3(d,e,f){var w=this.b
return A.vy(new A.q(d,e,f),this.a).a9(0,new A.q(w.c,0,w.d))},
$S:z+24}
A.fr5.prototype={
$3(d,e,f){return A.nf(d,e,f,this.a.a+D.k.bh(f/7))},
$S:24}
A.fr6.prototype={
$3(d,e,f){return A.nf(d,e,f,this.a.a+D.k.bh(f/7))},
$S:24}
A.fr7.prototype={
$3(d,e,f){return A.H9(d,e,f,"NGMY TOWN",this.a)},
$S:24}
A.fr8.prototype={
$3(d,e,f){return A.H9(d,e,f,"NGMY TOWN",this.a)},
$S:24}
A.fr9.prototype={
$3(d,e,f){return A.nf(d,e,f,this.a.a+D.k.bh(f/7))},
$S:24}
A.fra.prototype={
$3(d,e,f){return A.nf(d,e,f,this.a.a+4+D.k.bh(f/7))},
$S:24}
A.fqG.prototype={
$3(d,e,f){return A.nf(d,e,f,this.a.a+D.k.bh(f/7))},
$S:24}
A.fqH.prototype={
$3(d,e,f){return A.nf(d,e,f,this.a.a+7+D.k.bh(f/7))},
$S:24}
A.fqI.prototype={
$3(d,e,f){return A.nf(d,e,f,this.a.a+3+D.k.bh(f/7))},
$S:24}
A.fqJ.prototype={
$3(d,e,f){return A.nf(d,e,f,this.a.a+5+D.k.bh(f/7))},
$S:24}
A.fqK.prototype={
$3(d,e,f){return A.nf(d,e,f,this.a.a+1+D.k.bh(f/7))},
$S:24}
A.fqL.prototype={
$3(d,e,f){return A.nf(d,e,f,this.a.a+2+D.k.bh(f/7))},
$S:24}
A.fqM.prototype={
$3(d,e,f){return A.H9(d,e,f,"NGMY COMPANY","Building the movement")},
$S:24}
A.fqN.prototype={
$3(d,e,f){return A.H9(d,e,f,"NGMY","New Global Movement for Youth")},
$S:24}
A.fqO.prototype={
$3(d,e,f){return A.H9(d,e,f,"NGMY COMPANY","Building the movement")},
$S:24}
A.fqP.prototype={
$3(d,e,f){return A.H9(d,e,f,"NGMY","New Global Movement for Youth")},
$S:24}
A.fqR.prototype={
$3(d,e,f){return A.nf(d,e,f,this.a.a+4+D.k.bh(f/7))},
$S:24}
A.fqS.prototype={
$3(d,e,f){return A.nf(d,e,f,this.a.a+6+D.k.bh(f/7))},
$S:24}
A.fqT.prototype={
$3(d,e,f){return A.nf(d,e,f,this.a.a+2+D.k.bh(f/7))},
$S:24}
A.fqU.prototype={
$3(d,e,f){return A.nf(d,e,f,this.a.a+3+D.k.bh(f/7))},
$S:24}
A.fqV.prototype={
$3(d,e,f){return A.H9(d,e,f,"NGMY STORE","Everything you need")},
$S:24}
A.fqW.prototype={
$3(d,e,f){return A.H9(d,e,f,"NGMY UBER","Rides home")},
$S:24}
A.fqX.prototype={
$3(d,e,f){return A.H9(d,e,f,"NGMY UBER","Rides home")},
$S:24}
A.fqY.prototype={
$3(d,e,f){return A.H9(d,e,f,"NGMY LICENCE","Get your Uber licence")},
$S:24}
A.fqZ.prototype={
$3(d,e,f){return A.H9(d,e,f,"NGMY GAS","Open 24 hours")},
$S:24}
A.fr_.prototype={
$3(d,e,f){return A.nf(d,e,f,this.a.a*2+this.b+1)},
$S:24}
A.fr1.prototype={
$1(d){return d.b===this.a.a&&!d.x&&d.Q.length!==0},
$S:z+14}
A.fr2.prototype={
$1(d){return d.b===this.a.a&&d.x},
$S:z+14}
A.fr3.prototype={
$3(d,e,f){return A.fPa(d,e,f,0)},
$S:24}
A.fr4.prototype={
$3(d,e,f){return A.fPa(d,e,f,0)},
$S:24}
A.fBg.prototype={
$2(d,e){var w,v=this.a
if(v!=null){w=v.b-d
v=v.c-e
v=w*w+v*v<1e4}else v=!0
return v},
$S:1826}
A.fBd.prototype={
$1(d){return D.d.t(B.HV,d.b)},
$S:z+4}
A.fBe.prototype={
$1(d){return d.b===this.a.a},
$S:z+14}
A.fBf.prototype={
$1(d){return d.b===this.a.a},
$S:z+14}
A.fhw.prototype={
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
D.d.v(s,A.ny(m,r*k*j,0,new A.q(n,e,o.b)));++q}},
$S:1827}
A.fhm.prototype={
$3(d,e,f){var w=this.a,v=this.b,u=this.c
return new A.q(w.c+v*d+u*f,e,w.d+u*d-v*f)},
$2(d,e){return this.$3(d,e,0)},
$S:z+43}
A.fs4.prototype={
$3(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k=x.z,j=C.a([],k),i=new A.fk(j)
i.b=this.a
i.r=!0
d.$1(i)
k=C.a([],k)
for(j=A.bCl(j,e,B.dX),w=j.length,v=f.a,u=f.b,t=f.c,s=x.o,r=0;r<j.length;j.length===w||(0,C.M)(j),++r){q=j[r]
p=C.a([],s)
for(o=q.a,n=o.length,m=0;m<o.length;o.length===n||(0,C.M)(o),++m){l=o[m]
p.push(new A.q(l.a+v,l.b+u,l.c+t))}k.push(new A.ko(p,q.b,q.c,q.d,q.e,q.f,q.r,q.w,q.x,q.y,q.z))}D.d.v(this.b.a,k)},
$S:z+91}
A.frC.prototype={
$6$joint(d,e,f,g,h,i){var w=this.a
w.Tf(d,e,f,h,!1,g,this.b)
if(this.c&&i)w.ed(e,g*1.04,h,3,6)},
$5(d,e,f,g,h){return this.$6$joint(d,e,f,g,h,!0)},
$S:z+92}
A.frD.prototype={
$1(d){return d.fV(B.dX,2.6,B.Yv,this.a,this.b,0.15)},
$S:z+1}
A.frE.prototype={
$1(d){return d.ed(B.dX,2.6,D.bO,3,this.a)},
$S:z+1}
A.frF.prototype={
$1(d){return d.ed(B.dX,5.2,this.a,this.b,this.c+2)},
$S:z+1}
A.frQ.prototype={
$1(d){var w=this,v=w.d?12:8
return d.Tf(B.dX,B.aaK,w.a,w.b,!1,w.c,v)},
$S:z+1}
A.frY.prototype={
$1(d){return d.L6(B.dX,B.h6w,5.1,B.bft,!1,12)},
$S:z+1}
A.frZ.prototype={
$1(d){return d.ed(B.dX,2.7,this.a,this.b,this.c)},
$S:z+1}
A.fs_.prototype={
$1(d){var w=this,v=w.a?6.2:6.7,u=w.c
if(u<4)u=4
return d.ed(B.dX,v,w.b,u,w.d)},
$S:z+1}
A.fs0.prototype={
$1(d){var w=this.b,v=w?6:4
w=w?12:8
return d.ed(B.dX,4.7,this.a,v,w)},
$S:z+1}
A.fs1.prototype={
$1(d){return d.ed(B.dX,3,this.a,this.b,this.c)},
$S:z+1}
A.fs2.prototype={
$1(d){return d.ed(B.dX,1.25,this.a,3,6)},
$S:z+1}
A.fs3.prototype={
$1(d){return d.ed(B.dX,1,D.c,3,6)},
$S:z+1}
A.frG.prototype={
$1(d){return d.ed(B.dX,1.15,this.a,2,6)},
$S:z+1}
A.frH.prototype={
$1(d){return d.ed(B.dX,1,this.a,3,6)},
$S:z+1}
A.frI.prototype={
$1(d){return d.ed(B.dX,1,this.a,2,6)},
$S:z+1}
A.frJ.prototype={
$1(d){var w=C.ar(this.a,D.c,0.1)
w.toString
return d.ed(B.dX,1,w,2,6)},
$S:z+1}
A.frK.prototype={
$1(d){var w=this.b,v=w?4:3
w=w?9:6
return d.ed(B.dX,5,this.a,v,w)},
$S:z+1}
A.frL.prototype={
$1(d){return d.ed(B.dX,3.6,this.a,3,this.b)},
$S:z+1}
A.frM.prototype={
$1(d){return d.ed(B.dX,4.8,this.a,this.b,this.c)},
$S:z+1}
A.frN.prototype={
$1(d){var w=this.b,v=w?4:3
w=w?9:6
return d.ed(B.dX,6.2,this.a,v,w)},
$S:z+1}
A.frO.prototype={
$1(d){return d.ed(B.dX,4.2,this.a,3,this.b)},
$S:z+1}
A.frP.prototype={
$1(d){var w=this.b,v=w?4:3
w=w?9:6
return d.ed(B.dX,5.1,this.a,v,w)},
$S:z+1}
A.frR.prototype={
$1(d){return d.ed(B.dX,3.4,this.a,3,this.b)},
$S:z+1}
A.frS.prototype={
$1(d){var w=C.ar(this.a,D.c,Math.abs(0.08))
w.toString
return d.ed(B.dX,2.6,w,this.b,this.c)},
$S:z+1}
A.frT.prototype={
$1(d){return d.ed(B.dX,4.9,this.a,this.b,this.c)},
$S:z+1}
A.frU.prototype={
$1(d){return d.ed(B.dX,3,this.a,3,this.b)},
$S:z+1}
A.frV.prototype={
$1(d){var w=this.b,v=w?4:3
w=w?9:6
return d.ed(B.dX,5,this.a,v,w)},
$S:z+1}
A.frW.prototype={
$1(d){return d.ed(B.dX,3.6,this.a,3,this.b)},
$S:z+1}
A.frX.prototype={
$1(d){return d.ed(B.dX,2.3,this.a,3,6)},
$S:z+1}
A.fll.prototype={
$4(d,e,f,g){var w,v,u,t,s,r,q,p
for(w=this.a,v=e/2+0.2,u=d-8,t=-e/2-0.2,s=d/2+0.2,r=e-8,q=-d/2-0.2,p=f;p<g;p+=22){A.kI(w,new A.q(0,p,v),B.hF,B.eb,u,9,B.hW,B.iq,0.6)
A.kI(w,new A.q(0,p,t),B.qQ,B.eb,u,9,B.hW,B.te,0.6)
A.kI(w,new A.q(s,p,0),B.te,B.eb,r,9,B.hW,B.hF,0.6)
A.kI(w,new A.q(q,p,0),B.iq,B.eb,r,9,B.hW,B.qQ,0.6)}},
$S:1828}
A.fym.prototype={
$4$alongX(d,e,f,g){var w,v,u,t,s,r,q,p,o,n
for(w=this.a,v=0;v<=f;++v){u=A.o3(d,e,v/f)
w.aDL(new A.q(u.a,4,u.c),B.heG,B.Yi,!1,0.05)}t=A.o3(d,e,0.5)
for(s=e.aF(0,d).guU()+0.15,r=t.a,q=t.c,p=0;p<2;++p){o=B.dfc[p]
n=g?new A.q(s,0.16,0.3):new A.q(0.3,0.16,s)
w.aZ(new A.q(r,o,q),n,B.Yi,0.05)}},
$3(d,e,f){return this.$4$alongX(d,e,f,!0)},
$S:z+94}
A.fyj.prototype={
$2(d,e){return this.a.ji(A.Ha(d,0.35,3),0.06,e,!1,0.4,6)},
$S:z+95}
A.fyi.prototype={
$1(d){return this.a.ji(A.Ha(d,0.5,3),0.14,B.pU,!1,0.3,8)},
$S:z+96}
A.fyl.prototype={
$2$col(d,e){return this.a.ji(A.Ha(d,0.4,3),0.055,e,!1,0.35,6)},
$1(d){return this.$2$col(d,B.Yr)},
$S:z+97}
A.fyk.prototype={
$5$h$w(d,e,f,g,h){var w=this.a
w.b=d
w.aZ(e,new A.q(h,g,0.06),f,0.3)},
$3(d,e,f){return this.$5$h$w(d,e,f,0.7,0.45)},
$4$w(d,e,f,g){return this.$5$h$w(d,e,f,0.7,g)},
$S:z+98}
A.fzh.prototype={
$0(){return A.fW(1320,120,0.25,"tri")},
$S:0}
A.dSJ.prototype={
$1(d){return this.a},
$S:40}
A.dSK.prototype={
$0(){return C.a4(this.a,!1).ie()},
$S:0}
A.dSL.prototype={
$0(){return this.a.rD(A.b0X("","",!1))},
$S:0}
A.dSM.prototype={
$0(){return this.a.rD(B.dCE)},
$S:0}
A.dSQ.prototype={
$0(){return this.a.rD(A.b0X("wiring","",!1))},
$S:0}
A.dSR.prototype={
$0(){return this.a.rD(A.b0X("plumbing","",!1))},
$S:0}
A.dSS.prototype={
$0(){return this.a.rD(A.b0X("fix","",!1))},
$S:0}
A.dST.prototype={
$0(){return this.a.rD(A.cib(!1,null,!1))},
$S:0}
A.dSU.prototype={
$0(){return this.a.rD(A.cib(!1,null,!0))},
$S:0}
A.dSV.prototype={
$0(){return this.a.rD(B.e7k)},
$S:0}
A.dSW.prototype={
$0(){return this.a.rD(new A.arV(!1,null))},
$S:0}
A.dSX.prototype={
$0(){return this.a.rD(B.dMF)},
$S:0}
A.dSN.prototype={
$0(){var w=this.b.a
w=w==="house"?B.hji:A.b0X("",w,!1)
return this.a.rD(w)},
$S:0}
A.dSO.prototype={
$0(){return this.a.rD(B.dJo)},
$S:0}
A.dSP.prototype={
$0(){return this.a.rD(B.aHT)},
$S:0}
A.f5t.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new A.f5s())},
$S:11}
A.f5s.prototype={
$0(){},
$S:0}
A.cxi.prototype={
$0(){$.ajq=!$.ajq
A.hcI()
A.fW($.ajq?520:420,60,0.25,"tri")},
$S:0}
A.cxj.prototype={
$0(){$.ajp=!$.ajp
A.hcI()
A.fW($.ajp?520:420,60,0.25,"tri")},
$S:0}
A.fQr.prototype={
$1(d){var w,v,u,t,s,r,q,p,o=null,n=C.aJ(d,o,x.w).w,m=this.b,l=this.c,k=l.length,j=x.p,i=C.a([C.d(this.a,o,o,o,o,o,o,D.de,o,o,o),D.au,C.d(""+new C.Z(m,new A.fQq(),C.T(m).k("Z<1>")).gL(0)+" of "+k+" steps done",o,o,o,o,o,o,B.K1,o,o,o),D.W],j)
for(w=0;w<k;++w){v=D.c.j(0.05)
u=new C.aP(14,14)
t=new C.ay(m[w]?D.bj.j(0.6):D.bz,1,D.r,-1)
s=m[w]
r=s?"\u2705":""+(w+1)+"."
q=s?D.c:D.aC
p=l[w]
s=s?D.aB:D.c
i.push(C.p(o,new C.ce(D.aM,D.e,D.i,D.E,o,D.p,o,0,C.a([new C.y(r,o,new C.F(!0,q,o,o,o,o,14,D.u,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),o,o,o,o,o,o,o,o,o),D.at,new C.bz(1,D.bb,new C.y(p,o,new C.F(!0,s,o,o,o,o,13,o,o,o,o,o,1.4,o,o,o,o,o,o,o,o,o,o,o,o,o),o,o,o,o,o,o,o,o,o),o)],j),o),D.f,o,o,new C.o(v,o,new C.bK(t,t,t,t),new C.bg(u,u,u,u),o,o,D.n),o,o,o,D.cv,D.bf,o,o,o))}return C.bl(!0,new C.cU(new C.aZ(0,1/0,0,n.a.b*0.75),C.cf(i,o,D.bQ,o,o,D.ag,!0),o),!0,!1,D.af,!0,!0)},
$S:27}
A.fQq.prototype={
$1(d){return d},
$S:117}
A.bXc.prototype={
$0(){return C.a4(this.a,!1).ie()},
$S:0}
A.dbc.prototype={
$0(){var w=this.a,v=w.ger(0),u=this.b
v.r=u==="practice"
u=u==="test"
v.y=u
if(u)v.f=v.e=!1
w.qB()},
$S:0}
A.dba.prototype={
$0(){var w=this.a
w.y=this.b
w.z=this.c},
$S:0}
A.dbb.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.db9(w))},
$S:0}
A.db9.prototype={
$0(){return this.a.y=null},
$S:0}
A.daY.prototype={
$0(){return this.a.x=0},
$S:0}
A.daZ.prototype={
$0(){return this.a.x=0},
$S:0}
A.daX.prototype={
$1(d){var w=this.a.ger(0).b
return new C.bc(w,C.a7(w).k("bc<2>")).t(0,d)},
$S:3}
A.db_.prototype={
$1(d){return d.a===this.a},
$S:z+13}
A.db0.prototype={
$2(d,e){return e===this.a},
$S:388}
A.db1.prototype={
$0(){var w=this.a
w.w=""
w.qB()},
$S:0}
A.db2.prototype={
$1(d){return d.a===this.a},
$S:z+7}
A.db3.prototype={
$0(){var w=this.a,v=this.b
if(w.w===v)v=""
w.w=v
w.x=v.length===0?0:this.c},
$S:0}
A.db4.prototype={
$1(d){return d.a===this.a},
$S:z+7}
A.db5.prototype={
$0(){var w=this.a
w.qB()
w.x=this.b},
$S:0}
A.db6.prototype={
$0(){var w=this.a
w.qB()
w.x=this.b},
$S:0}
A.db7.prototype={
$0(){return this.a.x=this.b},
$S:0}
A.db8.prototype={
$0(){var w=this.a,v=w.ger(0),u=v.a
v.a=!u
if(u)v.d=!1
w.qB()},
$S:0}
A.dbd.prototype={
$0(){var w,v=this.a,u=v.ger(0)
u.a=!0
u.d=!1
w=this.b
if(w.e)u.w=!0
u.z=w.r
v.ax=v.at.gi9()/1000
v.qB()},
$S:0}
A.dbe.prototype={
$0(){var w=this.a,v=w.ger(0)
v.d=v.a=!0
w.qB()},
$S:0}
A.dbn.prototype={
$1(d){return!d},
$S:117}
A.dbw.prototype={
$0(){var w=this.a.gz5()
return A.fQp(this.b,w.b,w.d,this.c)},
$S:0}
A.dbD.prototype={
$1(d){var w,v,u,t,s=C.a([],x.z),r=this.a,q=r.ger(0),p=q.z
if(p.length!==0){p=r.at.gi9()
w=r.ax
v=q.z
u=v==="fire"?7:4.5
t=p/1000-w<u
p=v}else t=!1
if(!t)q=q.w&&p.length!==0
else q=!0
if(q){q=t?p:"smolder"
A.hti(new A.fk(s),q,new A.dbk(),0.32,r.at.gi9()/1000)}return s},
$S:z+10}
A.dbk.prototype={
$1(d){return new A.q(d.a*0.32,-0.2+d.b*0.32,0.8+d.c*0.32)},
$S:z+6}
A.dbo.prototype={
$0(){return this.a.aAN("learn")},
$S:0}
A.dbp.prototype={
$0(){return this.a.aAN("practice")},
$S:0}
A.dbx.prototype={
$0(){return this.a.aAN("test")},
$S:0}
A.dby.prototype={
$0(){var w=this.a
return w.m(new A.dbm(w))},
$S:0}
A.dbm.prototype={
$0(){var w=this.a,v=w.ger(0)
v.e=!v.e
w.qB()},
$S:0}
A.dbz.prototype={
$0(){var w=this.a
return w.m(new A.dbl(w))},
$S:0}
A.dbl.prototype={
$0(){var w=this.a,v=w.ger(0)
v.f=!v.f
w.qB()},
$S:0}
A.dbA.prototype={
$0(){return A.ha4(this.a)},
$S:0}
A.dbB.prototype={
$0(){var w=this.a,v=w.gim()
return v.hR(10,0.2,new A.q(0.6,0,w.ger(0).c===0?4.2:0.4),-0.95)},
$S:0}
A.dbC.prototype={
$0(){var w=this.a,v=w.gim()
return v.hR(10,0.2,new A.q(-0.6,0,w.ger(0).c===0?4.2:0.4),0.95)},
$S:0}
A.dbE.prototype={
$1(d){return!this.a.ger(0).b.iJ(0,d.a)},
$S:z+7}
A.dbq.prototype={
$0(){var w=this.a,v=this.b,u=v.a
if(w.ger(0).b.iJ(0,u)){w.nB("That wire is already fastened. Tap the wire in the 3D view to take it off if you want to move it.")
return}w.m(new A.dbj(w,v))
if(w.w.length!==0){w.aXO(u)
w.jb(v.b+": now tap the screw it belongs on.",!0)}},
$S:0}
A.dbj.prototype={
$0(){var w=this.a,v=this.b.a
return w.w=w.w===v?"":v},
$S:0}
A.dbr.prototype={
$0(){var w=this.a,v=w.gz5(),u=v.b,t=A.fPX(v)
w=w.ger(0)
w=C.a([new A.abd(u,t,A.h7r(v,w),w.x)],x.fJ)
v=B.aGE.h(0,v.a)
if(v==null)v=B.azR
return A.hxD(this.b,w,v,u)},
$S:0}
A.dbs.prototype={
$0(){var w=this.a
w.m(new A.dbi(w))
A.yN()
w.jb("The wires are folded back and the device is pushed into the box. Now put the cover plate on.",!0)
w.oh()},
$S:0}
A.dbi.prototype={
$0(){var w=this.a
w.ger(0).c=1
w.qB()},
$S:0}
A.dbt.prototype={
$0(){var w=this.a
w.m(new A.dbh(w))
w.oh()},
$S:0}
A.dbh.prototype={
$0(){var w=this.a
w.ger(0).c=0
w.qB()},
$S:0}
A.dbu.prototype={
$0(){var w=this.a
w.m(new A.dbg(w))
A.yN()
w.jb("Cover plate on. Now turn the power on and test.",!0)},
$S:0}
A.dbg.prototype={
$0(){var w=this.a
w.ger(0).c=2
w.qB()},
$S:0}
A.dbv.prototype={
$0(){var w=this.a
w.m(new A.dbf(w))
w.oh()},
$S:0}
A.dbf.prototype={
$0(){var w=this.a,v=w.ger(0)
v.c=0
v.b.a7(0)
v.a=!0
v.w=v.d=!1
v.z=""
w.Q=0
w.w=""
w.x=0
w.qB()},
$S:0}
A.eVJ.prototype={
$0(){var w=this.a
w.x=this.b
w.y=this.c},
$S:0}
A.eVK.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.eVI(w))},
$S:0}
A.eVI.prototype={
$0(){return this.a.x=null},
$S:0}
A.eVC.prototype={
$0(){return this.a.w=0},
$S:0}
A.eVD.prototype={
$0(){var w=this.a,v=w.ger(0)
v.a.M(0,this.b)
v.c=!1
v.d=""
w.f=A.bCF(v)
w.r=""},
$S:0}
A.eVE.prototype={
$0(){var w=this.a,v=w.ger(0)
v.b.n(0,this.b,!0)
v.d=""
w.f=A.bCF(v)},
$S:0}
A.eVF.prototype={
$0(){return this.a.w=this.b},
$S:0}
A.eVG.prototype={
$1(d){return this.a.ger(0).b.h(0,d)!==!0},
$S:3}
A.eVH.prototype={
$0(){var w,v=this.a,u=v.ger(0)
u.c=!0
w=this.b
u.d=w.length===0?"":D.d.gI(w)
v.f=A.bCF(u)},
$S:0}
A.eVO.prototype={
$1(d){return!d},
$S:117}
A.eVS.prototype={
$0(){return A.fQp(this.a,"Sink drain (P-trap)",B.dhO,this.b)},
$S:0}
A.eVP.prototype={
$1(d){return A.ii5(this.a.ger(0),d)},
$S:z+10}
A.eVQ.prototype={
$0(){var w=this.a
return w.m(new A.eVN(w,this.b))},
$S:0}
A.eVN.prototype={
$0(){var w=this.a,v=this.b
return w.r=w.r===v?"":v},
$S:0}
A.eVR.prototype={
$0(){var w=this.a
w.m(new A.eVM(w))
w.oh()},
$S:0}
A.eVM.prototype={
$0(){var w,v=this.a,u=v.ger(0)
u.a.a7(0)
w=u.b
w.aJq(w,new A.eVL())
u.c=!1
v.r=u.d=""
v.w=0
v.f=A.bCF(u)},
$S:0}
A.eVL.prototype={
$2(d,e){return!1},
$S:1830}
A.dee.prototype={
$0(){var w=this.a
w.x=this.b
w.y=this.c},
$S:0}
A.def.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.ded(w))},
$S:0}
A.ded.prototype={
$0(){return this.a.x=null},
$S:0}
A.de6.prototype={
$0(){return this.a.w=0},
$S:0}
A.de9.prototype={
$1(d){return d.a===this.a},
$S:z+37}
A.dea.prototype={
$0(){var w=this.a,v=w.ger(0)
v.f=!1
w.f=A.aPU(v)
w.w=this.b},
$S:0}
A.deb.prototype={
$0(){var w=this.a,v=w.ger(0),u=v.e
u.bs(u,new A.de8(this.b))
v.f=!1
w.f=A.aPU(v)},
$S:0}
A.de8.prototype={
$2(d,e){return e===this.a},
$S:388}
A.dec.prototype={
$0(){return this.a.w=this.b},
$S:0}
A.de7.prototype={
$0(){var w=this.a,v=w.ger(0)
v.f=!v.f
w.f=A.aPU(v)},
$S:0}
A.dej.prototype={
$1(d){return!d},
$S:117}
A.dep.prototype={
$0(){return A.fQp(this.a,"Faucet supply lines",B.duz,this.b)},
$S:0}
A.dek.prototype={
$1(d){return A.i8O(this.a.ger(0),d)},
$S:z+10}
A.del.prototype={
$0(){var w=this.a
return w.m(new A.dei(w))},
$S:0}
A.dei.prototype={
$0(){var w=this.a,v=w.ger(0)
v.r=!v.r
w.f=A.aPU(v)},
$S:0}
A.den.prototype={
$0(){var w=this.b
return w.m(new A.deh(this.a,w))},
$S:0}
A.deh.prototype={
$0(){var w=this.b,v=w.r,u=this.a.a
return w.r=v===u?"":u},
$S:0}
A.dem.prototype={
$1(d){return d===this.a.a},
$S:3}
A.deo.prototype={
$0(){var w=this.a
w.m(new A.deg(w))
w.oh()},
$S:0}
A.deg.prototype={
$0(){var w=this.a,v=w.ger(0)
v.e.a7(0)
v.f=!1
w.r=""
w.w=0
w.f=A.aPU(v)},
$S:0}
A.dli.prototype={
$0(){var w=this.a
w.x=this.b
w.y=this.c},
$S:0}
A.dlj.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.dlh(w))},
$S:0}
A.dlh.prototype={
$0(){return this.a.x=null},
$S:0}
A.dlc.prototype={
$0(){return this.a.r=0},
$S:0}
A.dle.prototype={
$0(){var w=this.a,v=w.d
v.d.W(0,72)
w.f=A.agL(v)
w.r=this.b},
$S:0}
A.dlf.prototype={
$0(){var w=this.a,v=w.d
v.c=!0
v.b=!1
w.f=A.agL(v)
w.r=this.b},
$S:0}
A.dlg.prototype={
$0(){return this.a.r=this.b},
$S:0}
A.dld.prototype={
$1(d){return this.a},
$S:40}
A.dlr.prototype={
$0(){return A.fQp(this.a,"Fix the house",B.cqc,this.b)},
$S:0}
A.dlm.prototype={
$0(){return this.a.cg7(this.b)},
$S:0}
A.dlo.prototype={
$1(d){return d<=this.a.d.a},
$S:32}
A.dln.prototype={
$1(d){return A.htA(this.a.d,d)},
$S:z+10}
A.dlp.prototype={
$0(){var w=this.a
return w.m(new A.dll(w))},
$S:0}
A.dll.prototype={
$0(){var w=this.a
return w.w=w.w==="wrench"?"":"wrench"},
$S:0}
A.dlq.prototype={
$1(d){var w=this.a
return w.m(new A.dlk(w,d))},
$S:6}
A.dlk.prototype={
$0(){var w=this.a,v=w.d,u=D.k.V(this.b)
v.a=u
if(u<5)w.r=0
w.f=A.agL(v)},
$S:0}
A.fh4.prototype={
$0(){return this.a.e=!1},
$S:0}
A.fh2.prototype={
$0(){return this.a.e=!0},
$S:0}
A.fh3.prototype={
$0(){var w=this.a
w.d=C.df(B.bwu,new A.fh1(w))},
$S:0}
A.fh1.prototype={
$1(d){var w=this.a.a,v=w.e
return v.apo(w.f?1.06:0.94)},
$S:11}
A.fh6.prototype={
$1(d){return this.a.c8b(0)},
$S:81}
A.fh7.prototype={
$1(d){return this.a.b7z()},
$S:121}
A.fh5.prototype={
$1(d){return this.a.b7z()},
$S:168}
A.cbD.prototype={
$0(){return C.a4(this.a,!1).ie()},
$S:0}
A.fyY.prototype={
$5(d,e,f,g,h){var w=this.a.a.t(0,h),v=this.b
v.b=d
if(w)v.a75(e,0.66,f,!1,!0,!0,g,14)
else{v.d=0.3
v.aJn(e,0.74,D.b3,!1,!0,0,8)
v.d=1}},
$S:z+100}
A.fyX.prototype={
$6(d,e,f,g,h,i){var w,v
if(!i)return
w=this.a.b.h(0,e)
v=w===!0?f:f.a9(0,h)
w=this.b
w.e=0.5
w.b=d
w.dR(v.aF(0,g.aI(0,0.6)),v.a9(0,g.aI(0,0.6)),1.12,B.pU,0.35,8)
w.zs(v.aF(0,g.aI(0,0.62)),v.aF(0,g.aI(0,0.5)),1.2,0.5,B.XH,0.2,8)
w.b=0
w.zs(f.aF(0,g.aI(0,0.05)),f.a9(0,g.aI(0,0.08)),0.82,0.55,B.boU,0.1,12)
w.e=0},
$S:z+101}
A.fyW.prototype={
$1(d){return d.b<-0.6},
$S:z+21}
A.fy2.prototype={
$1(d){return this.a.e.h(0,d)===this.b},
$S:32}
A.fAE.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=A.agY(d)
for(w=this.a*1.6,v=this.b,u=p.a,t=p.b,s=p.c,r=0;r<7;++r){q=D.k.F(w+r/7,1)
v.fV(new A.q(u+Math.sin(r*2.1)*q*1.4,t+(q*2.4-q*q*6.5),s+(1+q*2.5)),0.2,e,3,6,0.9)}},
$S:1831}
A.fAD.prototype={
$1(d){return this.a.e.h(0,d.a)!=null},
$S:z+37}
A.cnN.prototype={
$1(d){return d.a===this.a},
$S:z+102}
A.cnO.prototype={
$1(d){return d.a===this.a},
$S:z+2}
A.cnK.prototype={
$1(d){return this.a.vl(0,d).c.toLowerCase()},
$S:14}
A.cnP.prototype={
$1(d){var w
if(!this.a.e.t(0,d.a)){w=d.b
w=w==="valve"||D.a.a0(w,"hose")}else w=!1
return w},
$S:z+2}
A.cnQ.prototype={
$1(d){var w=this.a,v=d.a
return w.e.t(0,v)&&w.aHe(v)>0},
$S:z+2}
A.cnR.prototype={
$1(d){return d.a},
$S:z+23}
A.cnS.prototype={
$1(d){return d.a},
$S:z+23}
A.cnL.prototype={
$1(d){return this.a.e.t(0,d.a)},
$S:z+2}
A.cnM.prototype={
$1(d){var w=this.a,v=d.a
return w.aHe(v)<=0||!w.e.t(0,v)},
$S:z+2}
A.fyV.prototype={
$1(d){var w=this.a
w.b=0
w.dR(new A.q(d,8,0),new A.q(d,8,1.6),0.5,B.LJ,0.7,10)},
$S:6}
A.fyT.prototype={
$1(d){var w,v,u,t,s,r,q=C.a([],x.o)
for(w=d.length,v=this.a,u=v.a,t=v.b,v=v.c,s=0;s<d.length;d.length===w||(0,C.M)(d),++s){r=d[s]
q.push(new A.q(r.a+u,r.b+t,r.c+v))}return q},
$S:z+105}
A.fyN.prototype={
$3$r(d,e,f){var w=this.a,v=this.b.c
v===$&&C.c()
w.b=9100+D.d.bg(v.c,new A.fyQ(d))
w.d=0.32
w.aJn(e,f,D.b3,!1,!0,0,8)
w.d=1},
$2(d,e){return this.$3$r(d,e,1.2)},
$S:z+106}
A.fyQ.prototype={
$1(d){return d.a===this.a},
$S:z+2}
A.fyO.prototype={
$3(d,e,f){var w=this.a,v=this.b.c
v===$&&C.c()
w.b=9100+D.d.bg(v.c,new A.fyP(d))
w.d=0.32
w.aO(e,f,D.b3)
w.d=1},
$S:z+107}
A.fyP.prototype={
$1(d){return d.a===this.a},
$S:z+2}
A.fyU.prototype={
$3(d,e,f){var w,v,u,t=this,s=t.a,r=s.c
r===$&&C.c()
w=D.d.cv(r.c,d)
r=d.c
v=s.e
u=d.a
if(v.t(0,u))s="Fitted."
else{s=s.b?"":d.e
s="A spot for the "+r.toLowerCase()+". "+s}t.b.n(0,9100+w,new A.cW(r,s,e,26))
if(t.c&&!v.t(0,u)&&t.d.length!==0)t.e.push(new A.hf(e.a9(0,B.fZe),f,D.eR,0))},
$S:z+108}
A.fyJ.prototype={
$0(){return this.a.$3(this.b.a,new A.q(this.c-10,9,2.4),B.aaR)},
$S:0}
A.fyK.prototype={
$0(){return this.a.$3(this.b.a,new A.q(this.c-8,9,2.4),B.aaR)},
$S:0}
A.fyL.prototype={
$0(){return this.a.$3(this.b.a,new A.q(this.c+8,9,2.4),B.aaR)},
$S:0}
A.fyR.prototype={
$4(d,e,f,g){var w,v,u,t,s=this
if(D.d.bg(s.a,new A.fyS(d))<0||!s.b.e.t(0,d))return
w=s.b.f.h(0,d)
v=(w==null?0:w)>=1
w=s.c
u=9260+g
w.b=u
t=v?e:e.a9(0,f.aI(0,1.7))
w.dR(t.aF(0,f.aI(0,0.6)),t.a9(0,f.aI(0,0.6)),1.12,B.pU,0.35,8)
w.zs(t.aF(0,f.aI(0,0.62)),t.aF(0,f.aI(0,0.5)),1.2,0.5,B.XH,0.2,8)
w=v?"Tight.":"Loose. Tap it with the wrench to tighten it."
s.d.n(0,u,new A.cW("Slip nut",w,e,10))},
$S:z+109}
A.fyS.prototype={
$1(d){return d.a===this.a},
$S:z+2}
A.fyM.prototype={
$1(d){return d.a===this.a},
$S:z+2}
A.fPz.prototype={
$1(d){return d.a===this.a},
$S:z+2}
A.eoT.prototype={
$0(){var w=this.a
w.z=this.b
w.Q=this.c},
$S:0}
A.eoU.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.eoS(w))},
$S:0}
A.eoS.prototype={
$0(){return this.a.z=null},
$S:0}
A.eoM.prototype={
$0(){return this.a.y=0},
$S:0}
A.eoY.prototype={
$1(d){return d.a===this.a},
$S:z+2}
A.eoB.prototype={
$0(){return this.a.y=this.b},
$S:0}
A.eoC.prototype={
$0(){var w=this.a
w.a__()
w.y=this.b},
$S:0}
A.eoD.prototype={
$1(d){return this.a.c8c()},
$S:9}
A.eoI.prototype={
$1(d){var w,v=null,u=this.a,t=u.e
t===$&&C.c()
w=t.c
w===$&&C.c()
t=C.d("The "+w.b.toLowerCase()+" is finished and nothing leaks.\n\nMistakes: "+t.w+"\n\nThe next job is different.",v,v,v,v,v,v,B.a9J,v,v,v)
return C.en(C.a([C.bN(!1,B.aUJ,v,v,!0,v,v,v,new A.eoG(d),v,v),C.bE(B.fFa,v,new A.eoH(u,d),v)],x.p),v,v,E.ni,t,v,v,v,v,B.fGQ,v)},
$S:18}
A.eoG.prototype={
$0(){C.a4(this.a,!1).O(null)
return null},
$S:0}
A.eoH.prototype={
$0(){C.a4(this.b,!1).O(null)
this.a.aYQ()},
$S:0}
A.eoR.prototype={
$0(){var w,v,u=this.a
u.d=D.o.F(Date.now(),1e5)
w=u.gCV(0)
v=u.e
v===$&&C.c()
u.e=A.h2Q(v.b,w,null)
u.x=""
u.as=!1
u.z=null
u.y=0
u.a__()},
$S:0}
A.eoZ.prototype={
$1(d){return d.b===this.a},
$S:z+2}
A.eoJ.prototype={
$1(d){var w=this.a.e
w===$&&C.c()
return w.x.t(0,d.a)},
$S:z+2}
A.eoK.prototype={
$1(d){return d.c.toLowerCase()},
$S:z+23}
A.eoL.prototype={
$1(d){var w=this.a.e
w===$&&C.c()
return w.aHe(d.a)>0},
$S:z+2}
A.eoV.prototype={
$0(){var w=this.b
w.x=this.a.b
w.a__()},
$S:0}
A.eoW.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
A.eoX.prototype={
$0(){return this.a.y=this.b},
$S:0}
A.eoF.prototype={
$0(){var w=this.a
return w.m(new A.eoE(w,this.b,this.c))},
$S:0}
A.eoE.prototype={
$0(){var w=this.a
w.x=this.b?"":this.c
w.a__()},
$S:0}
A.ep_.prototype={
$1(d){var w=this.a.e
w===$&&C.c()
return w.e.t(0,d.a)},
$S:z+2}
A.ep3.prototype={
$0(){return this.a.c23(this.b)},
$S:0}
A.ep1.prototype={
$1(d){return d<=5},
$S:32}
A.ep0.prototype={
$1(d){var w=this.a,v=w.e
v===$&&C.c()
return A.ihY(v,w.w.gi9()/1000)},
$S:z+10}
A.ep2.prototype={
$0(){return this.b.cyq(this.a.a)},
$S:0}
A.eoQ.prototype={
$1(d){var w,v,u,t,s,r,q,p=null,o=this.a,n=o.e
n===$&&C.c()
w=x.p
n=C.a([B.fSP,D.au,C.d("Mistakes "+n.w,p,p,p,p,p,p,B.K1,p,p,p),D.W],w)
v=o.e.c
v===$&&C.c()
v=v.c
u=v.length
t=0
for(;t<u;++t){s=v[t]
r=D.c.j(0.05)
q=new C.aP(12,12)
n.push(C.p(p,new C.y((o.e.e.t(0,s.a)?"\u2705":"\ud83d\udd27")+" "+s.c,p,B.ffv,p,p,p,p,p,p,p,p,p),D.f,p,p,new C.o(r,p,p,new C.bg(q,q,q,q),p,p,D.n),p,p,p,D.eI,D.bS,p,p,p))}n.push(D.am)
n.push(B.fww)
n.push(D.O)
n.push(C.B(C.a([B.bEs,C.Yk(p,p,p,p,!1,D.y,p,p,p,p,p,p,new A.eoO(o,d),p,p,p,p,p,p,p,p,o.e.b)],w),D.m,p,D.e,D.i,0,p,p))
n.push(C.bE(B.aUL,p,new A.eoP(o,d),p))
return C.bl(!0,C.cf(n,p,D.bQ,p,p,D.ag,!0),!0,!1,D.af,!0,!0)},
$S:27}
A.eoO.prototype={
$1(d){var w=this.a
w.m(new A.eoN(w,d))
C.a4(this.b,!1).O(null)},
$S:8}
A.eoN.prototype={
$0(){var w=this.a,v=w.e
v===$&&C.c()
v.b=this.b
w.a__()},
$S:0}
A.eoP.prototype={
$0(){C.a4(this.b,!1).O(null)
this.a.aYQ()},
$S:0}
A.fXW.prototype={
$1(d){return d.a===this.a},
$S:z+40}
A.csK.prototype={
$1(d){return D.d.t(B.jW,d.b)},
$S:z+8}
A.csR.prototype={
$1(d){return!this.a.y.t(0,d)},
$S:32}
A.csS.prototype={
$1(d){var w=this.a
return w.x.aj(0,d)&&w.z.t(0,d)},
$S:32}
A.csT.prototype={
$1(d){var w=$.Hi()[this.b],v=!1
if(w>=d)if(w<=d+48){w=this.a.Q.h(0,d)
w=(w==null?null:w.a)===!0}else w=v
else w=v
return w},
$S:32}
A.csU.prototype={
$1(d){return this.a.Q.h(0,d).c.t(0,this.b)},
$S:32}
A.csW.prototype={
$1(d){var w,v=J.dY(6,x.S)
for(w=0;w<6;++w)v[w]=w
return D.d.d_(v,new A.csV(this.a,d))},
$S:32}
A.csV.prototype={
$1(d){return this.a.c.t(0,this.b*10+d)},
$S:32}
A.csJ.prototype={
$1(d){var w=this.a.Q.h(0,d)
return(w==null?null:w.a)===!0},
$S:32}
A.csH.prototype={
$1(d){return!A.jY(d).c},
$S:32}
A.csI.prototype={
$1(d){var w=this.a.aqa(A.jY(d).d.a)
return(w==null?null:w.b.t(0,d))===!0},
$S:32}
A.csP.prototype={
$1(d){return d.c},
$S:z+11}
A.csQ.prototype={
$1(d){return d.d},
$S:z+11}
A.csL.prototype={
$1(d){return d.d},
$S:z+11}
A.csM.prototype={
$1(d){var w=this.a.Q.h(0,d)
return(w==null?null:w.e)===!0},
$S:32}
A.csN.prototype={
$1(d){return d.a===this.a},
$S:z+13}
A.csX.prototype={
$2(d,e){return e===this.a},
$S:388}
A.csO.prototype={
$1(d){return d.c===this.a},
$S:z+8}
A.etx.prototype={
$0(){var w=this.a
w.ax=this.b
w.ay=this.c},
$S:0}
A.ety.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.etw(w))},
$S:0}
A.etw.prototype={
$0(){return this.a.ax=null},
$S:0}
A.esz.prototype={
$0(){return this.a.CW=!0},
$S:0}
A.esA.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.esy(w))},
$S:12}
A.esy.prototype={
$0(){return this.a.CW=!1},
$S:0}
A.esB.prototype={
$0(){return this.a.CW=!0},
$S:0}
A.esC.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.esx(w))},
$S:12}
A.esx.prototype={
$0(){return this.a.CW=!1},
$S:0}
A.esD.prototype={
$1(d){return this.a.bQt()},
$S:9}
A.esE.prototype={
$1(d){return this.a.c8h()},
$S:9}
A.esO.prototype={
$0(){return this.a.Q=-1},
$S:0}
A.esQ.prototype={
$0(){return this.a.Q=-1},
$S:0}
A.esF.prototype={
$1(d){return d.b==="tv"},
$S:566}
A.esG.prototype={
$0(){return this.a.Q=-1},
$S:0}
A.esH.prototype={
$0(){return this.a.Q=-1},
$S:0}
A.et6.prototype={
$0(){var w=this.a
w.Q=this.b
w.z=w.at=""
w.ch=!1},
$S:0}
A.esP.prototype={
$0(){var w=this.a
w.Q=-1
w.at=""},
$S:0}
A.ett.prototype={
$0(){return this.a.as=0},
$S:0}
A.etu.prototype={
$0(){return this.a.z=""},
$S:0}
A.etv.prototype={
$0(){return this.a.as=this.b},
$S:0}
A.etr.prototype={
$0(){return this.a.z=""},
$S:0}
A.ets.prototype={
$0(){return this.a.as=2000+this.b},
$S:0}
A.etq.prototype={
$0(){return this.a.z=""},
$S:0}
A.eti.prototype={
$1(d){return d.a===this.a},
$S:z+13}
A.etj.prototype={
$0(){return this.a.at=""},
$S:0}
A.etk.prototype={
$1(d){return d.a===this.a},
$S:z+7}
A.etl.prototype={
$0(){var w=this,v=w.a,u=w.b
if(v.at===u)u=""
v.at=u
v.as=u.length===0?0:5000+w.c*100+w.d},
$S:0}
A.etm.prototype={
$1(d){return d.a===this.a},
$S:z+7}
A.etn.prototype={
$0(){return this.a.as=5000+this.b*100+this.c},
$S:0}
A.eto.prototype={
$0(){var w=this.a
w.at=""
w.as=0},
$S:0}
A.etp.prototype={
$0(){return this.a.as=5000+this.b*100+this.c},
$S:0}
A.etz.prototype={
$0(){var w=this.b,v=D.d.t(B.I7,w.z),u=this.a.a
if(v)w.b2m(u)
else w.b2n(u)},
$S:0}
A.esN.prototype={
$1(d){var w=null
return C.en(C.a([C.bN(!1,B.fIQ,w,w,!0,w,w,w,new A.esL(d),w,w),C.bE(D.Ee,w,new A.esM(this.a,d),w)],x.p),w,w,E.ni,B.fxI,w,w,w,w,B.fFA,w)},
$S:18}
A.esL.prototype={
$0(){C.a4(this.a,!1).O(null)
return null},
$S:0}
A.esM.prototype={
$0(){C.a4(this.b,!1).O(null)
this.a.axF(!0)},
$S:0}
A.esK.prototype={
$1(d){var w,v=null,u=this.a,t=u.d
t===$&&C.c()
w=t.c
w===$&&C.c()
t=C.d("The "+w.toLowerCase()+" is built, wired, painted and tested.\n\nMistakes: "+t.f+"\nShocks: "+t.r+"\nLives left: "+t.e+"\n\nEvery job is a little different. Ready for another one?",v,v,v,v,v,v,B.a9J,v,v,v)
return C.en(C.a([C.bN(!1,B.fTK,v,v,!0,v,v,v,new A.esI(d),v,v),C.bE(B.fFt,v,new A.esJ(u,d),v)],x.p),v,v,E.ni,t,v,v,v,v,B.fNB,v)},
$S:18}
A.esI.prototype={
$0(){C.a4(this.a,!1).O(null)
return null},
$S:0}
A.esJ.prototype={
$0(){C.a4(this.b,!1).O(null)
this.a.b_0()},
$S:0}
A.esR.prototype={
$0(){var w,v,u
if(!this.b)this.a.e=D.o.F(Date.now(),1e5)
w=this.a
v=w.gCV(0)
u=w.d
u===$&&C.c()
w.d=A.csF(null,null,u.b,v,!0)
w.y=0
w.z=""
w.Q=-1
w.at=""
w.as=0
w.cx=!1
w.x.a7(0)
w.ax=null
w.r=A.wV(w.d,new A.rK(w.z,w.Q,!1))},
$S:0}
A.et4.prototype={
$1(d){return new C.N(d,new A.et5(),d.$ti.k("N<ak.E,n>")).aH(0,", ")},
$S:1832}
A.et5.prototype={
$1(d){return A.jY(d).b},
$S:72}
A.esS.prototype={
$1(d){var w=this.a.d
w===$&&C.c()
return!w.x.aj(0,d.a)},
$S:z+8}
A.esT.prototype={
$1(d){var w=this.a.d
w===$&&C.c()
return!w.z.t(0,d.a)},
$S:z+8}
A.esU.prototype={
$1(d){var w=this.a.d
w===$&&C.c()
return!w.y.t(0,d)},
$S:32}
A.esX.prototype={
$1(d){return!d.a},
$S:z+11}
A.esY.prototype={
$1(d){return d.b<3},
$S:z+11}
A.esZ.prototype={
$1(d){return!d.c},
$S:z+11}
A.et_.prototype={
$1(d){return!d.d},
$S:z+11}
A.et0.prototype={
$1(d){return!d.c},
$S:z+11}
A.et1.prototype={
$1(d){var w=this.a.d
w===$&&C.c()
w=w.at.h(0,d.a)
w=w==null?null:w.a
return w!==d.b},
$S:z+8}
A.et2.prototype={
$1(d){return d.a},
$S:z+114}
A.et3.prototype={
$1(d){var w=this.a.d
w===$&&C.c()
w=w.at.h(0,d.a)
w=w==null?null:w.b.c
return(w==null?0:w)<2},
$S:z+8}
A.esV.prototype={
$1(d){var w
if(D.d.t(B.lJ,d.b)){w=this.a.d
w===$&&C.c()
w=w.at.h(0,d.a)
w=(w==null?null:w.c)!==!0}else w=!1
return w},
$S:z+8}
A.esW.prototype={
$1(d){return d.b==="fan"},
$S:z+8}
A.etS.prototype={
$0(){return this.a.ch9(this.b)},
$S:0}
A.etU.prototype={
$0(){var w=this.a
if(w.Q>=0)w.aeo()
else{w.m(new A.etE(w))
w.b4C()}},
$S:0}
A.etE.prototype={
$0(){return this.a.as=0},
$S:0}
A.etT.prototype={
$1(d){var w=this.a,v=w.d
v===$&&C.c()
return A.iie(v,w.w.gi9()/1000,w.x)},
$S:z+10}
A.etH.prototype={
$0(){var w=this.a,v=w.d
v===$&&C.c()
return w.jD(v.aJf())},
$S:0}
A.etI.prototype={
$0(){var w=this.a
return w.m(new A.etG(w,this.b))},
$S:0}
A.etG.prototype={
$0(){var w,v=this.b.b
v.f=!v.f
v=this.a
w=v.d
w===$&&C.c()
v.r=A.wV(w,new A.rK(v.z,v.Q,!1))},
$S:0}
A.etJ.prototype={
$0(){var w=this.a
return w.m(new A.etF(w,this.b))},
$S:0}
A.etF.prototype={
$0(){var w,v=this.b.b
v.e=!v.e
v=this.a
w=v.d
w===$&&C.c()
v.r=A.wV(w,new A.rK(v.z,v.Q,!1))},
$S:0}
A.etV.prototype={
$0(){var w=this.a
return w.m(new A.etD(w,this.b))},
$S:0}
A.etD.prototype={
$0(){var w,v=this.a
v.y=this.b
v.z=""
w=v.d
w===$&&C.c()
v.r=A.wV(w,new A.rK("",v.Q,!1))},
$S:0}
A.etW.prototype={
$0(){var w=this.a
return w.m(new A.etC(w))},
$S:0}
A.etC.prototype={
$0(){var w=this.a,v=w.d
v===$&&C.c()
v.am9()
w.y=2
w.z=""
w.r=A.wV(w.d,new A.rK("",w.Q,!1))
w.qC("The boxes, the cable and the walls are done. Now the wiring: pick an Outlet or a Switch from the tray, then tap its box on the wall.",!0)},
$S:0}
A.etX.prototype={
$0(){var w=this.a
return w.m(new A.etB(w,this.b))},
$S:0}
A.etB.prototype={
$0(){var w,v=this.a,u=this.b.a,t=v.z===u?"":u
v.z=t
v.as=0
w=v.d
w===$&&C.c()
v.r=A.wV(w,new A.rK(t,v.Q,!1))
if(v.z.length!==0)v.cs1(u)},
$S:0}
A.etY.prototype={
$0(){var w=this.a,v=w.d
v===$&&C.c()
return w.jD(v.cSj())},
$S:0}
A.etZ.prototype={
$1(d){return!this.a.b.b.iJ(0,d.a)},
$S:z+7}
A.eu_.prototype={
$0(){var w=this.a
return w.m(new A.etA(w,this.b,this.c))},
$S:0}
A.etA.prototype={
$0(){var w,v=this,u=v.c,t=u.a
if(v.b.b.b.iJ(0,t)){v.a.aep("That wire is already fastened. Tap the wire in the 3D view to take it off.")
return}w=v.a
if(w.at===t)t=""
w.at=t
if(t.length!==0)w.qC(u.b+": now tap the screw it belongs on, or press the matching button below.",!0)},
$S:0}
A.etK.prototype={
$1(d){return!this.a.b.b.aj(0,d.a)},
$S:z+13}
A.etL.prototype={
$0(){var w=this.a
return w.b2l(w.Q,this.b.a)},
$S:0}
A.etM.prototype={
$0(){var w=this.a,v=w.d
v===$&&C.c()
return w.jD(v.biM(w.Q))},
$S:0}
A.etN.prototype={
$0(){var w=this.a,v=w.d
v===$&&C.c()
return w.jD(v.biK(w.Q))},
$S:0}
A.etO.prototype={
$0(){var w=this.a,v=w.d
v===$&&C.c()
return w.jD(v.bdB(w.Q))},
$S:0}
A.etP.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.bj6(v.Q)
v.jD(w)
if(w.a)v.aeo()},
$S:0}
A.etQ.prototype={
$0(){var w=this.a,v=w.d
v===$&&C.c()
return w.jD(v.biK(w.Q))},
$S:0}
A.etR.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.bj6(v.Q)
v.jD(w)
if(w.a){v.aeo()
v.qC("The "+A.agU(this.b.a)+" is out and the box is empty. Pick the kind you want from the tray (a different outlet or switch is fine), then tap the box.",!0)}},
$S:0}
A.eth.prototype={
$1(d){return new C.e0(new A.etg(this.a,this.b),null)},
$S:19}
A.etg.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=C.aJ(d,k,x.w).w,i=this.a,h=i.d
h===$&&C.c()
w=h.c
w===$&&C.c()
v=x.p
h=C.a([C.d("Job: "+w,k,k,k,k,k,k,D.de,k,k,k),D.au,C.d("Mistakes "+h.f+" \xb7 Shocks "+h.r+" \xb7 Lives "+h.e,k,k,k,k,k,k,B.K1,k,k,k),D.W,B.fJp,D.am],v)
w=i.d.d
w===$&&C.c()
u=w.length
t=0
for(;t<w.length;w.length===u||(0,C.M)(w),++t){s=w[t]
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
else m=m==="fan"?"A ceiling fan":"A "+A.agU(m).toLowerCase()
o=A.jY(o)
l=s.c
l=l!=null?", turned on by "+A.jY(l).b:""
h.push(C.p(k,new C.y(n+" "+m+" at "+o.b+l,k,D.oI,k,k,k,k,k,k,k,k,k),D.f,k,k,new C.o(r,k,new C.bK(p,p,p,p),new C.bg(q,q,q,q),k,k,D.n),k,k,k,D.eI,D.bS,k,k,k))}h.push(D.W)
h.push(C.B(C.a([B.bFz,C.Yk(k,k,k,k,!1,D.y,k,k,k,k,k,k,new A.eta(i,e),k,k,k,k,k,k,k,k,i.d.b)],v),D.m,k,D.e,D.i,0,k,k))
h.push(C.B(C.a([B.bEP,C.Yk(k,k,k,k,!1,D.y,k,k,k,k,k,k,new A.etb(i,e),k,k,k,k,k,k,k,k,i.d.dx)],v),D.m,k,D.e,D.i,0,k,k))
h.push(D.am)
w=this.b
h.push(C.B(C.a([C.E(C.dI(B.fGU,new A.etc(w),k),1),D.ac,C.E(C.bE(B.fEL,k,new A.etd(i,d,w),k),1)],v),D.m,k,D.e,D.i,0,k,k))
h.push(D.am)
h.push(D.am)
h.push(C.B(C.a([C.E(C.dI(B.fyV,new A.ete(i,d),k),1),D.ac,C.E(C.bE(B.aUL,k,new A.etf(i,d),k),1)],v),D.m,k,D.e,D.i,0,k,k))
return C.bl(!0,new C.cU(new C.aZ(0,1/0,0,j.a.b*0.8),C.cf(h,k,D.bQ,k,k,D.ag,!0),k),!0,!1,D.af,!0,!0)},
$S:85}
A.eta.prototype={
$1(d){var w=this.a,v=w.d
v===$&&C.c()
v.b=d
for(v=v.at,v=new C.dq(v,v.r,v.e);v.C();)v.d.b.r=d
this.b.$1(new A.et8())
w.m(new A.et9())},
$S:8}
A.et8.prototype={
$0(){},
$S:0}
A.et9.prototype={
$0(){},
$S:0}
A.etb.prototype={
$1(d){var w,v=this.a,u=v.d
u===$&&C.c()
u.dx=d
for(u=u.at,u=new C.dq(u,u.r,u.e);u.C();){w=u.d.b
w.y=d
if(d)w.f=!1}this.b.$1(new A.et7())
v.m(v.gc8o())},
$S:8}
A.et7.prototype={
$0(){},
$S:0}
A.etc.prototype={
$0(){return A.ha4(this.a)},
$S:0}
A.etd.prototype={
$0(){var w=0,v=C.j(x.H),u=this,t,s,r
var $async$$0=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:C.a4(u.b,!1).O(null)
t=u.a
s=t.d
s===$&&C.c()
r=s.c
r===$&&C.c()
w=2
return C.b(A.hxD(u.c,s.cYC(),t.d.cYD(),r),$async$$0)
case 2:return C.h(null,v)}})
return C.i($async$$0,v)},
$S:1}
A.ete.prototype={
$0(){C.a4(this.b,!1).O(null)
this.a.axF(!0)},
$S:0}
A.etf.prototype={
$0(){C.a4(this.b,!1).O(null)
this.a.b_0()},
$S:0}
A.frj.prototype={
$1(d){var w=this.a,v=d.a
return w>v[0]&&w<v[1]},
$S:540}
A.frk.prototype={
$1(d){var w=this.a,v=d.a
return w>v[2]&&w<v[3]},
$S:540}
A.fyZ.prototype={
$1(d){return 5000+this.a.a*100+d},
$S:75}
A.fz_.prototype={
$1(d){return 3000+this.a.a},
$S:75}
A.fz0.prototype={
$1(d){return 2000+this.a.a},
$S:75}
A.fz3.prototype={
$5$col$round(d,e,f,g,h){var w=this.a
w.f=3
w.b=d
w.d=0.5
w.e=0.9
if(h)w.dN(e.aF(0,B.eb),e.a9(0,B.eb),f.a/2,g,14)
else w.aO(e,f,g)
w.e=0
w.d=1
w.f=2},
$3(d,e,f){return this.$5$col$round(d,e,f,D.b3,!1)},
$4$round(d,e,f,g){return this.$5$col$round(d,e,f,D.b3,g)},
$4$col(d,e,f,g){return this.$5$col$round(d,e,f,g,!1)},
$S:z+115}
A.fz1.prototype={
$3(d,e,f){return I.S4(d,e,0,f+this.a.a*5)},
$S:24}
A.fz2.prototype={
$0(){var w,v=this.a
if(v.c)w="A place in the ceiling for a "+(v.e==="fan"?"fan (needs a fan-rated box)":"light")+"."
else w="A place on the wall at "+(v.e==="switch"?"switch height, about 48 inches from the floor":"outlet height, about 16 inches from the floor")+"."
return new A.cW(v.b,w,A.aia(v,B.aaH),26)},
$S:z+116}
A.fPT.prototype={
$1(d){return d.e==="fan"},
$S:z+40}
A.fPU.prototype={
$1(d){return d.b==="light"},
$S:z+8}
A.fPV.prototype={
$1(d){return A.aia(this.a,d)},
$S:z+6}
A.cwa.prototype={
$1(d){return d.a===this.a&&!d.c},
$S:z+15}
A.cw6.prototype={
$1(d){return d.a===B.a0w},
$S:z+15}
A.cw8.prototype={
$1(d){return d.c},
$S:z+15}
A.cw9.prototype={
$1(d){return d.c},
$S:z+15}
A.cw7.prototype={
$1(d){return B.wD.h(0,d.a).e===this.a&&!d.c},
$S:z+15}
A.evm.prototype={
$0(){var w=this.a
w.z=this.b
w.Q=this.c},
$S:0}
A.evn.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.evl(w))},
$S:0}
A.evl.prototype={
$0(){return this.a.z=null},
$S:0}
A.evb.prototype={
$0(){return this.a.y=0},
$S:0}
A.evg.prototype={
$0(){return this.a.as=!0},
$S:0}
A.evh.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.evf(w))},
$S:12}
A.evf.prototype={
$0(){return this.a.as=!1},
$S:0}
A.evi.prototype={
$0(){var w=this.a,v=w.d
v===$&&C.c()
w.r=A.agL(v.d)
w.y=this.b},
$S:0}
A.evj.prototype={
$1(d){return this.a.chh()},
$S:9}
A.evk.prototype={
$1(d){return this.a.c8s()},
$S:9}
A.eve.prototype={
$1(d){var w=null
return C.en(C.a([C.bE(B.fGL,w,new A.evd(this.a,d),w)],x.p),w,w,E.ni,B.fFQ,w,w,w,w,B.fMe,w)},
$S:18}
A.evd.prototype={
$0(){C.a4(this.b,!1).O(null)
this.a.ax3()},
$S:0}
A.eva.prototype={
$1(d){var w=null,v=this.a,u=v.d
u===$&&C.c()
u=C.d("Every problem on the customer's list is fixed.\n\nMistakes: "+u.f+"\nShocks: "+u.r+"\nLives left: "+u.e+"\n\nThe next call will have different problems.",w,w,w,w,w,w,B.a9J,w,w,w)
return C.en(C.a([C.bN(!1,B.aUJ,w,w,!0,w,w,w,new A.ev8(d),w,w),C.bE(B.fI2,w,new A.ev9(v,d),w)],x.p),w,w,E.ni,u,w,w,w,w,B.fOJ,w)},
$S:18}
A.ev8.prototype={
$0(){C.a4(this.a,!1).O(null)
return null},
$S:0}
A.ev9.prototype={
$0(){C.a4(this.b,!1).O(null)
this.a.ax3()},
$S:0}
A.evc.prototype={
$0(){var w,v,u=this.a
u.e=D.o.F(Date.now(),1e5)
w=u.gCV(0)
v=u.d
v===$&&C.c()
w=A.hl3(v.b,w)
u.d=w
u.r=A.agL(w.d)
u.at=!1
u.z=null
u.y=0},
$S:0}
A.evz.prototype={
$0(){return this.a.cC_(this.b)},
$S:0}
A.evv.prototype={
$1(d){return d<=5},
$S:32}
A.evu.prototype={
$1(d){var w=this.a,v=w.d
v===$&&C.c()
return A.htA(v.d,w.w.gi9()/1000)},
$S:z+10}
A.evw.prototype={
$1(d){return!d.c},
$S:z+15}
A.evx.prototype={
$1(d){return B.wD.h(0,d.a).a},
$S:z+118}
A.evy.prototype={
$0(){var w=this.a
return w.m(new A.evt(w,this.b))},
$S:0}
A.evt.prototype={
$0(){return this.a.x=this.b},
$S:0}
A.evs.prototype={
$1(d){return new C.e0(new A.evr(this.a),null)},
$S:19}
A.evr.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=this.a,j=k.d
j===$&&C.c()
w=x.p
j=C.a([B.fEd,D.au,C.d("Mistakes "+j.f+" \xb7 Shocks "+j.r+" \xb7 Lives "+j.e,l,l,l,l,l,l,B.K1,l,l,l),D.W],w)
v=k.d.c
v===$&&C.c()
u=v.length
t=0
for(;t<v.length;v.length===u||(0,C.M)(v),++t){s=v[t]
r=D.c.j(0.05)
q=new C.aP(14,14)
p=new C.ay(s.c?D.bj.j(0.6):D.bz,1,D.r,-1)
o=s.c?"\u2705":"\ud83d\udd27"
n=B.wD.h(0,s.a).a
m=s.c?D.aB:D.c
j.push(C.p(l,new C.y(o+" "+n,l,new C.F(!0,m,l,l,l,l,13.5,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l),l,l,l,l,l,l,l,l,l),D.f,l,l,new C.o(r,l,new C.bK(p,p,p,p),new C.bg(q,q,q,q),l,l,D.n),l,l,l,D.cv,D.bf,l,l,l))}j.push(D.am)
j.push(B.fJA)
j.push(D.O)
j.push(C.B(C.a([B.bEq,C.Yk(l,l,l,l,!1,D.y,l,l,l,l,l,l,new A.evp(k,e),l,l,l,l,l,l,l,l,k.d.b)],w),D.m,l,D.e,D.i,0,l,l))
j.push(C.bE(B.fMH,l,new A.evq(k,d),l))
return C.bl(!0,C.cf(j,l,D.bQ,l,l,D.ag,!0),!0,!1,D.af,!0,!0)},
$S:85}
A.evp.prototype={
$1(d){var w=this.a.d
w===$&&C.c()
w.b=d
this.b.$1(new A.evo())},
$S:8}
A.evo.prototype={
$0(){},
$S:0}
A.evq.prototype={
$0(){C.a4(this.b,!1).O(null)
this.a.ax3()},
$S:0}
A.fk5.prototype={
$1(d){return d.d===this.a},
$S:z+20}
A.bV4.prototype={
$1(d){var w,v,u,t,s=this.a,r=s.p1
if(r!=="back"){s=r==="left"?-1.5707963267948966:1.5707963267948966
return new C.z(new C.z(0,d),s)}r=s.k1
w=A.hae(s,A.aPR(r==null?"tv100":r),0)
s=w.c
r=w.a/2
v=s-r-18
u=this.b
t=-u/2+14
if(v<t)v=s+r+18
v=D.k.E(v,t,u/2-14)
return new C.z(new C.z(v,d),Math.atan2(s-v,-d))},
$S:1834}
A.bV5.prototype={
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
$S:1835}
A.d7N.prototype={
$0(){return A.ha4(this.a)},
$S:0}
A.d7O.prototype={
$1(d){var w=this.a
return w.m(new A.d7M(w,this.b))},
$S:8}
A.d7M.prototype={
$0(){var w=this.a
w.d=this.b
w.f.a7(0)
w.r=null},
$S:0}
A.d7P.prototype={
$1(d){var w=this.a
return w.m(new A.d7L(w))},
$S:8}
A.d7L.prototype={
$0(){var w=this.a
w.e=!1
w.r=null},
$S:0}
A.d7Q.prototype={
$1(d){var w=this.a
return w.m(new A.d7K(w))},
$S:8}
A.d7K.prototype={
$0(){var w=this.a
w.e=!0
w.r=null},
$S:0}
A.d7R.prototype={
$1(d){var w=this.a
return w.m(new A.d7J(w,this.b,d))},
$S:35}
A.d7J.prototype={
$0(){var w=this.a,v=this.c
v.toString
w.f.n(0,this.b,v)
w.r=null},
$S:0}
A.d7S.prototype={
$1(d){var w,v,u=null,t=this.a,s=B.zp[t.d],r=this.b,q=s.e.h(0,r)
q.toString
w=x.N
q=C.G([r,q],w,w)
t=t.f.h(0,r)
t.toString
v=A.htf(s.b,q,C.G([r,t],w,w))
t=v.a
s=t===B.v8
if(s)r="Right: this follows the diagram."
else{r=v.b
r=D.d.gI(r).c+" "+D.d.gI(r).e}if(s)t=D.bj
else t=t===B.TJ?D.bG:D.ct
return C.d(r,u,u,u,u,u,u,C.l(u,u,t,u,u,u,u,u,u,u,u,12.5,u,u,u,u,1.3,!0,u,u,u,u,u,u,u,u),u,u,u)},
$S:420}
A.d7T.prototype={
$0(){var w=this.a
return w.m(new A.d7I(w))},
$S:0}
A.d7I.prototype={
$0(){var w=this.a,v=B.zp[w.d]
return w.r=A.htf(v.b,v.e,w.f)},
$S:0}
A.fAG.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=this
for(w=k.a*1.8,v=k.b,u=k.c,t=k.d,s=0.3*t,t=0.05*t,r=0;r<d;++r){q=w+r*0.173
p=D.k.F(q,1)
o=Math.sin((r*3.1+D.k.bh(q))*12.9898)*43758.5453
n=(o-Math.floor(o))*3.141592653589793*2
o=Math.sin((r+5)*12.9898)*43758.5453
m=e*(0.6+(o-Math.floor(o))*0.8)
q=u.$1(new A.q(Math.cos(n)*p*m,Math.sin(n)*p*m-p*p*6,3+p*3))
l=C.ar(E.Z3,F.MC,p)
l.toString
v.fV(q,s*(1-p*0.6)+t,l,3,5,0)}},
$S:1836}
A.fAF.prototype={
$3(d,e,f){var w,v,u,t,s,r,q,p,o,n=this,m=n.a
m.d=0.34
for(w=n.b,v=w*0.45,u=n.c,t=n.d,s=1-e,r=0;r<d;++r){q=D.k.F(v+r/d,1)
p=u.$1(new A.q(Math.sin(r*1.7+w)*1.4+q*1.5,q*f-1,3.5+q*4))
o=C.ar(E.Bg,B.bpa,s)
o.toString
o=C.ar(o,B.bbS,q)
o.toString
m.fV(p,(1.1+q*3.4)*t,o,3,6,0)}m.d=1},
$S:1837}
A.fAa.prototype={
$5(d,e,f,g,h){return this.a.push(new A.wo(d,e,f,g,h))},
$S:z+119}
A.fAf.prototype={
$2(d,e){var w=this.a
return new C.Z(w,new A.fAg(d,e),C.T(w).k("Z<1>")).gL(0)},
$S:z+120}
A.fAg.prototype={
$1(d){return d.a.c===this.a&&d.b.c===this.b},
$S:z+12}
A.fAb.prototype={
$1(d){return d.b.c===B.aSa},
$S:z+12}
A.fAc.prototype={
$1(d){return d.a.c===B.aXD},
$S:z+12}
A.fAd.prototype={
$1(d){return!1},
$S:z+12}
A.fAe.prototype={
$1(d){return!1},
$S:z+12}
A.fjD.prototype={
$1(d){return D.d.b2(this.a,new A.fjE(d))},
$S:3}
A.fjE.prototype={
$1(d){return d.a===this.a},
$S:z+45}
A.cz8.prototype={
$1(d){return A.hSJ(d)},
$S:z+12}
A.cz9.prototype={
$2(d,e){return d+e},
$S:67}
A.cza.prototype={
$1(d){return d.b.a===B.v8},
$S:z+35}
A.fAh.prototype={
$2(d,e){var w=this.a.h(0,d)
if(w==null)this.b.push(new A.wo("LEAD_MISSING",B.TJ,"The "+d+" lead is not connected.","Every lead on the diagram needs its connection.","Connect the "+d+" lead to "+e+"."))
else if(w!==e)this.b.push(new A.wo("LEAD_WRONG",B.aPL,"The "+d+" lead is connected to "+w+", but the diagram says "+e+".","Connections follow the approved wiring diagram.","Move the "+d+" lead to "+e+"."))},
$S:116}
A.fXT.prototype={
$1(d){var w,v,u,t,s,r=null,q=C.aJ(d,r,x.w).w,p=x.p,o=C.a([B.fv1,D.am,B.fON,D.W],p)
for(w=0;w<5;++w){v=B.dbu[w]
u=D.c.j(0.05)
t=new C.aP(12,12)
s=new C.ay(D.bz,1,D.r,-1)
o.push(C.p(r,C.x(C.a([new C.y(v.a+": "+v.b,r,D.aTs,r,r,r,r,r,r,r,r,r),D.cL,new C.y("Goes to: "+v.c+"\nCircuit: "+v.d,r,E.Ec,r,r,r,r,r,r,r,r,r),D.cL,new C.y(v.e,r,D.aUa,r,r,r,r,r,r,r,r,r),D.cL,new C.y("Exception: "+v.f,r,B.fni,r,r,r,r,r,r,r,r,r)],p),D.E,r,D.e,D.i,0,D.p),D.f,r,r,new C.o(u,r,new C.bK(s,s,s,s),new C.bg(t,t,t,t),r,r,D.n),r,r,r,D.cv,D.yb,r,r,r))}o.push(D.am)
o.push(B.fwm)
return C.bl(!0,new C.cU(new C.aZ(0,1/0,0,q.a.b*0.85),C.cf(o,r,D.bQ,r,r,D.ag,!0),r),!0,!1,D.af,!0,!0)},
$S:27}
A.fXR.prototype={
$1(d){return new A.a1m(this.a,this.b,null)},
$S:z+89}
A.f9r.prototype={
$1(d){var w=this.a,v=w.a.c,u=this.b
d.toString
v.c.n(0,u,d)
w.m(new A.f9q(w,u,d))},
$S:171}
A.f9q.prototype={
$0(){var w=this.c
this.a.d.n(0,this.b,w)
return w},
$S:0}
A.f9s.prototype={
$0(){var w=this.a
w.m(new A.f9p(w,w.a.c.bqT(0)))},
$S:0}
A.f9p.prototype={
$0(){return this.a.e=this.b},
$S:0}
A.f9t.prototype={
$1(d){return d.b.a!==B.v8},
$S:z+35}
A.f9u.prototype={
$0(){var w=this.a,v=w.c
v.toString
w=w.e
C.a4(v,!1).O(w)
return null},
$S:0}
A.bSB.prototype={
$1(d){return this.a.a.$0()},
$S:11}
A.bSA.prototype={
$1(d){var w=this.a
if(!w.c)return
w.a.$0()
if(w.c)w.b_l()},
$S:9};(function aliases(){var w=A.aO_.prototype
w.bys=w.q})();(function installTearOffs(){var w=a._instance_0u,v=a._instance_1u,u=a.installStaticTearOff,t=a.installInstanceTearOff,s=a._instance_2u,r=a._instance_0i
var q
w(q=A.aej.prototype,"gbWf","bWg",0)
v(q,"gLL","a5d",68)
u(A,"igH",3,null,["$3"],["i2u"],28,0)
w(q=A.aoL.prototype,"gc6G","c6H",0)
w(q,"gbqM","bqN",0)
t(q,"gczk",0,0,null,["$1$done","$0"],["aBA","czl"],121,0,0)
w(q,"gcBn","cBo",0)
w(q,"gbOG","bOH",0)
v(A.aU2.prototype,"gcRY","cRZ",17)
s(q=A.aEO.prototype,"gbNJ","bNK",30)
w(q,"giV","iD",0)
t(q,"gc7W",0,1,null,["$2$keepTour","$1"],["axB","AB"],58,0,0)
v(q,"gc8_","c80",9)
w(q,"gbPF","bPG",0)
w(q,"gbPH","bPI",0)
w(q,"gbQ0","bQ1",0)
w(q,"gc2T","c2U",0)
w(q,"gbG8","bG9",0)
w(q,"gcDR","cDS",0)
w(q,"gcrU","crV",0)
w(q,"gbOm","bOn",0)
w(q,"gaQG","asC",0)
w(q,"gc7U","c7V",0)
w(q,"gcuv","cuw",0)
w(q,"gcDL","cDM",19)
w(q,"gczm","S9",0)
w(q,"gb7o","a2H",0)
w(q,"gb7D","a2L",0)
w(q,"gcFR","cFS",0)
w(q,"gbTh","bTi",0)
w(q,"gczj","B4",0)
w(q,"gc7Z","En",19)
w(q,"gch3","a0q",19)
w(q,"gcgt","a0h",19)
w(q,"gaNu","bBt",19)
w(q,"gc83","c84",0)
w(q,"gcp6","cp7",0)
r(q,"gc81","c82",0)
u(A,"hwE",3,null,["$3"],["ihP"],28,0)
u(A,"h9H",3,null,["$3"],["hwS"],28,0)
w(q=A.aAD.prototype,"gc88","qB",0)
w(q,"gJ5","oh",0)
v(q,"gJ6","J7",9)
w(q,"gcm5","cm6",0)
w(q,"gcBq","cBr",0)
w(q=A.aGC.prototype,"gJ5","oh",0)
v(q,"gJ6","J7",9)
w(q,"gc89","c8a",0)
w(q=A.aAX.prototype,"gJ5","oh",0)
v(q,"gJ6","J7",9)
r(q,"gc86","c87",0)
w(q=A.aBQ.prototype,"gJ5","oh",0)
v(q,"gJ6","J7",9)
w(q=A.aFe.prototype,"gc8d","b__",0)
v(q,"gc8e","c8f",9)
w(q,"gcwL","cwM",0)
v(A.XR.prototype,"gaqb","bpV",111)
w(q=A.aFl.prototype,"gc8o","c8p",0)
s(q,"gc8i","c8j",30)
w(q,"gbS0","aU7",0)
w(q,"gc2R","c2S",0)
w(q,"gbE0","bE1",0)
w(q,"gbDZ","bE_",0)
w(q,"gc8k","aeo",0)
v(q,"gc8m","c8n",9)
w(q=A.aFp.prototype,"gc8t","b_2",0)
v(q,"gc8u","c8v",9)})();(function inheritance(){var w=a.mixin,v=a.mixinHard,u=a.inheritMany,t=a.inherit
u(C.lZ,[A.eYN,A.ri,A.JK,A.FO,A.FV])
u(C.ag,[A.a9S,A.avC,A.aoK,A.apK,A.IZ,A.aJ5,A.NL,A.awx,A.E2,A.a9L,A.a5c,A.aBP,A.afO,A.Wn,A.On,A.arV,A.aq5,A.a1m])
u(C.ah,[A.aNR,A.aO_,A.aoL,A.bkM,A.aEO,A.btV,A.bkN,A.btJ,A.aAD,A.aGC,A.aAX,A.aBQ,A.bxn,A.aFe,A.aFl,A.aFp,A.bev,A.bv_])
t(A.aej,A.aNR)
t(A.bpu,O.aux)
u(C.aD,[A.q,A.ko,A.cW,A.hf,A.tP,A.fQ,A.fk,A.bUQ,A.cDw,A.G6,A.PX,A.cLt,A.bce,A.bcz,A.bhG,A.dps,A.MH,A.dv_,A.djE,A.lD,A.r9,A.Ht,A.aT8,A.bHS,A.hn,A.FZ,A.zd,A.xm,A.aUh,A.a4u,A.akp,A.bMe,A.bKk,A.dk6,A.rM,A.SG,A.aTD,A.bxk,A.bKm,A.Al,A.cAX,A.pB,A.bK8,A.Ft,A.P5,A.Ia,A.M5,A.aU2,A.fM,A.CE,A.jA,A.Tb,A.b9p,A.mb,A.fn,A.Eb,A.pR,A.abO,A.om,A.aWp,A.a5q,A.aWv,A.f0a,A.Ms,A.Qq,A.bV6,A.py,A.jL,A.N8,A.cnT,A.Fj,A.nr,A.Xn,A.cnJ,A.z8,A.ox,A.Y2,A.aw5,A.aUR,A.eC,A.XR,A.iW,A.rK,A.uy,A.MA,A.cw5,A.y4,A.tK,A.aa6,A.i8,A.csE,A.AB,A.bsg,A.aWx,A.b9T,A.aku,A.cz5,A.cCL,A.a4p,A.bMo,A.wo,A.ti,A.b6t,A.abd,A.abe,A.vc,A.b5b,A.b8l,A.cz7,A.PS,A.a5l])
u(C.hM,[A.c_S,A.c_T,A.c_R,A.c_U,A.c_V,A.fYa,A.fY8,A.fY9,A.fY7,A.fXX,A.bJz,A.bJA,A.bJB,A.bJC,A.bJE,A.bJD,A.bJy,A.bJx,A.ctF,A.ctG,A.cty,A.ctz,A.ctA,A.ctB,A.f1g,A.f1f,A.f1c,A.f1d,A.f1e,A.f1a,A.bTC,A.bTv,A.bTG,A.bTB,A.bTJ,A.bTH,A.bTM,A.bTx,A.bTz,A.bTy,A.bHU,A.bHT,A.fP3,A.fxI,A.fxJ,A.fxB,A.fxC,A.fxD,A.fxE,A.fxF,A.fxG,A.fxH,A.fjO,A.fnb,A.fwn,A.fxt,A.fxu,A.fxv,A.c3T,A.c3R,A.c3J,A.c3C,A.c3A,A.c3u,A.c3B,A.c3k,A.c3l,A.c3m,A.fzZ,A.bMg,A.bMj,A.fDi,A.fh0,A.bKn,A.fY5,A.fY6,A.fY3,A.fzx,A.cAZ,A.cB_,A.bK9,A.bKg,A.bKh,A.bKi,A.bKj,A.bKa,A.bKb,A.bKc,A.bKe,A.bKf,A.bKY,A.bKV,A.bKW,A.bKX,A.bL1,A.bL0,A.bKZ,A.bL2,A.dSq,A.dSl,A.dSF,A.dSo,A.dSI,A.fA8,A.fYG,A.fzk,A.fzl,A.fzi,A.fzj,A.fPY,A.fPZ,A.fAl,A.fAm,A.fAj,A.fAk,A.fxz,A.fxA,A.fYF,A.fk4,A.fxl,A.fYC,A.fYz,A.bUh,A.bUg,A.bUS,A.bUT,A.bUU,A.bUV,A.bUW,A.bV_,A.bUX,A.bUY,A.bV3,A.bV2,A.bV1,A.bV0,A.ed6,A.ed3,A.ed4,A.ed5,A.e9T,A.ech,A.eci,A.ece,A.e8s,A.ecK,A.ecL,A.ebX,A.eaY,A.eaU,A.e9M,A.eaE,A.e9W,A.eat,A.ecY,A.e9v,A.ear,A.eas,A.ea6,A.eaG,A.e9_,A.e8Z,A.e9r,A.ebM,A.ebL,A.ebw,A.ebt,A.ecI,A.ecH,A.ecz,A.ecu,A.ect,A.ec6,A.ecW,A.ecM,A.eaI,A.eaJ,A.eaK,A.eau,A.eav,A.ebO,A.ec1,A.eaB,A.eaA,A.eaC,A.ec2,A.eb_,A.eb0,A.eb8,A.eb9,A.eba,A.eaM,A.eaN,A.ecX,A.eaP,A.eaO,A.e8r,A.e8l,A.e8m,A.e8n,A.ed0,A.e8L,A.e8z,A.e8A,A.e8N,A.e8t,A.ebC,A.dvp,A.f5F,A.f5G,A.f5H,A.f5E,A.fxU,A.fy0,A.fxW,A.fxT,A.fxM,A.fxY,A.fy_,A.fxZ,A.fxX,A.fxN,A.fxL,A.fxQ,A.fxR,A.fPe,A.fPc,A.fPb,A.fPd,A.fy3,A.fyf,A.fy4,A.fy5,A.fy7,A.fya,A.fyb,A.fyc,A.fyd,A.fy8,A.frg,A.frb,A.frc,A.frd,A.fqD,A.fqF,A.fqQ,A.fr0,A.fre,A.fr5,A.fr6,A.fr7,A.fr8,A.fr9,A.fra,A.fqG,A.fqH,A.fqI,A.fqJ,A.fqK,A.fqL,A.fqM,A.fqN,A.fqO,A.fqP,A.fqR,A.fqS,A.fqT,A.fqU,A.fqV,A.fqW,A.fqX,A.fqY,A.fqZ,A.fr_,A.fr1,A.fr2,A.fr3,A.fr4,A.fBd,A.fBe,A.fBf,A.fhw,A.fhm,A.fs4,A.frC,A.frD,A.frE,A.frF,A.frQ,A.frY,A.frZ,A.fs_,A.fs0,A.fs1,A.fs2,A.fs3,A.frG,A.frH,A.frI,A.frJ,A.frK,A.frL,A.frM,A.frN,A.frO,A.frP,A.frR,A.frS,A.frT,A.frU,A.frV,A.frW,A.frX,A.fll,A.fym,A.fyi,A.fyl,A.fyk,A.dSJ,A.f5t,A.fQr,A.fQq,A.daX,A.db_,A.db2,A.db4,A.dbn,A.dbD,A.dbk,A.dbE,A.eVG,A.eVO,A.eVP,A.de9,A.dej,A.dek,A.dem,A.dld,A.dlo,A.dln,A.dlq,A.fh1,A.fh6,A.fh7,A.fh5,A.fyY,A.fyX,A.fyW,A.fy2,A.fAD,A.cnN,A.cnO,A.cnK,A.cnP,A.cnQ,A.cnR,A.cnS,A.cnL,A.cnM,A.fyV,A.fyT,A.fyN,A.fyQ,A.fyO,A.fyP,A.fyU,A.fyR,A.fyS,A.fyM,A.fPz,A.eoY,A.eoD,A.eoI,A.eoZ,A.eoJ,A.eoK,A.eoL,A.eoW,A.ep_,A.ep1,A.ep0,A.eoQ,A.eoO,A.fXW,A.csK,A.csR,A.csS,A.csT,A.csU,A.csW,A.csV,A.csJ,A.csH,A.csI,A.csP,A.csQ,A.csL,A.csM,A.csN,A.csO,A.esD,A.esE,A.esF,A.eti,A.etk,A.etm,A.esN,A.esK,A.et4,A.et5,A.esS,A.esT,A.esU,A.esX,A.esY,A.esZ,A.et_,A.et0,A.et1,A.et2,A.et3,A.esV,A.esW,A.etT,A.etZ,A.etK,A.eth,A.eta,A.etb,A.frj,A.frk,A.fyZ,A.fz_,A.fz0,A.fz3,A.fz1,A.fPT,A.fPU,A.fPV,A.cwa,A.cw6,A.cw8,A.cw9,A.cw7,A.evj,A.evk,A.eve,A.eva,A.evv,A.evu,A.evw,A.evx,A.evs,A.evp,A.fk5,A.bV4,A.bV5,A.d7O,A.d7P,A.d7Q,A.d7R,A.d7S,A.fAF,A.fAa,A.fAg,A.fAb,A.fAc,A.fAd,A.fAe,A.fjD,A.fjE,A.cz8,A.cza,A.fXT,A.fXR,A.f9r,A.f9t,A.bSB,A.bSA])
u(C.ke,[A.c_Q,A.ctE,A.ctx,A.ctC,A.ctD,A.bTw,A.bTE,A.bTD,A.fwj,A.fxK,A.fwo,A.c3z,A.bMi,A.bMf,A.bMk,A.bMh,A.bKl,A.c1u,A.fY4,A.fzy,A.cAY,A.bKd,A.bL_,A.fBs,A.fBt,A.fBu,A.fBv,A.fBw,A.fAi,A.fiL,A.fBx,A.fBy,A.fBz,A.fBA,A.fBB,A.fBC,A.fBD,A.fBE,A.fBF,A.fBG,A.fYA,A.fYB,A.bUZ,A.ebf,A.ead,A.ecJ,A.ebW,A.eaX,A.e9Y,A.ebK,A.ecG,A.ecs,A.eb7,A.fy1,A.fxV,A.fxS,A.fxO,A.fxP,A.fyh,A.fy6,A.fy9,A.fyg,A.frf,A.fqE,A.fBg,A.fyj,A.db0,A.eVL,A.de8,A.fAE,A.csX,A.etg,A.evr,A.fAG,A.fAf,A.cz9,A.fAh])
u(C.oZ,[A.xh,A.aTE])
u(C.mX,[A.b6w,A.bfF,A.bji])
t(A.bs3,A.aO_)
u(C.jc,[A.f1b,A.fiF,A.bTL,A.bTF,A.bTA,A.bTI,A.fwp,A.fwm,A.c3Q,A.c3E,A.c3K,A.c3S,A.c3H,A.c3G,A.c3e,A.c3F,A.c3I,A.c3D,A.c3x,A.c3w,A.c3y,A.c3v,A.c3j,A.c3i,A.c3n,A.c3o,A.c3p,A.c3q,A.c3r,A.c3h,A.c3s,A.c3f,A.c3g,A.c3t,A.c3N,A.c3O,A.c3M,A.c3P,A.c3L,A.fA_,A.dSp,A.dSC,A.dSw,A.dSx,A.dSv,A.dSm,A.dSG,A.dSE,A.dSD,A.dSk,A.dSr,A.dSs,A.dSt,A.dSu,A.dSn,A.dSz,A.dSA,A.dSB,A.dSy,A.dSH,A.fxm,A.ed2,A.ebR,A.ebS,A.ebQ,A.ebT,A.eap,A.ecj,A.ebm,A.ebn,A.ebo,A.ebp,A.ebq,A.e9R,A.e9Q,A.e9S,A.e9O,A.e9P,A.e9N,A.ea1,A.ea2,A.ea3,A.ebh,A.ebg,A.ebi,A.ebe,A.ebj,A.ebd,A.ebk,A.ebc,A.ebl,A.ebb,A.e9t,A.e9u,A.eaf,A.eae,A.eag,A.eac,A.eah,A.eab,A.eai,A.eaa,A.eaj,A.ea9,A.eak,A.ea8,A.eal,A.ea7,A.ecf,A.ecg,A.eaD,A.e8T,A.eay,A.eax,A.eaz,A.eaw,A.ebY,A.ebV,A.ebU,A.eaW,A.eaV,A.eaS,A.eaR,A.eaT,A.eaQ,A.eam,A.ean,A.ebN,A.ea_,A.e9Z,A.ea0,A.ebZ,A.ec9,A.e9X,A.e9V,A.e9U,A.ec8,A.eaq,A.ea5,A.eaH,A.e90,A.e8Y,A.e91,A.e8X,A.e92,A.e8W,A.e93,A.e8V,A.e94,A.e8U,A.e9s,A.ebG,A.ebF,A.ebH,A.ebI,A.ebJ,A.ebu,A.ebs,A.ebv,A.ebr,A.ecy,A.ecx,A.ecA,A.ecB,A.ecC,A.ecD,A.ecE,A.ecF,A.eco,A.ecm,A.ecn,A.ecp,A.ecl,A.ecq,A.ecr,A.ec5,A.ec7,A.ecv,A.eck,A.ecc,A.ecd,A.ec4,A.ecb,A.ecT,A.ecU,A.ecV,A.ecN,A.ecO,A.ecP,A.ecQ,A.ecR,A.ecS,A.ea4,A.eaL,A.ec_,A.eao,A.ebP,A.ec0,A.ec3,A.eca,A.eb2,A.eb3,A.eb1,A.eb4,A.eb5,A.eaZ,A.eb6,A.e8q,A.e8o,A.eaF,A.ecw,A.ebD,A.ebE,A.e8p,A.e9B,A.e9C,A.e9D,A.e9E,A.e9F,A.e9G,A.e9A,A.e9H,A.e9z,A.e9I,A.e9y,A.e9J,A.e9x,A.e9K,A.e9w,A.e9L,A.ed_,A.ed1,A.ecZ,A.e9d,A.e9e,A.e9f,A.e9j,A.e9k,A.e9l,A.e9c,A.e9m,A.e9b,A.e9n,A.e9a,A.e9o,A.e9p,A.e99,A.e9q,A.e98,A.e9g,A.e97,A.e9h,A.e96,A.e9i,A.e95,A.e8y,A.e8M,A.e8D,A.e8O,A.e8x,A.e8P,A.e8Q,A.e8w,A.e8R,A.e8S,A.e8B,A.e8v,A.e8C,A.e8u,A.e8E,A.e8F,A.e8G,A.e8H,A.e8I,A.e8J,A.e8K,A.ebz,A.ebA,A.eby,A.ebB,A.ebx,A.f5D,A.f5C,A.cgi,A.fye,A.fzh,A.dSK,A.dSL,A.dSM,A.dSQ,A.dSR,A.dSS,A.dST,A.dSU,A.dSV,A.dSW,A.dSX,A.dSN,A.dSO,A.dSP,A.f5s,A.cxi,A.cxj,A.bXc,A.dbc,A.dba,A.dbb,A.db9,A.daY,A.daZ,A.db1,A.db3,A.db5,A.db6,A.db7,A.db8,A.dbd,A.dbe,A.dbw,A.dbo,A.dbp,A.dbx,A.dby,A.dbm,A.dbz,A.dbl,A.dbA,A.dbB,A.dbC,A.dbq,A.dbj,A.dbr,A.dbs,A.dbi,A.dbt,A.dbh,A.dbu,A.dbg,A.dbv,A.dbf,A.eVJ,A.eVK,A.eVI,A.eVC,A.eVD,A.eVE,A.eVF,A.eVH,A.eVS,A.eVQ,A.eVN,A.eVR,A.eVM,A.dee,A.def,A.ded,A.de6,A.dea,A.deb,A.dec,A.de7,A.dep,A.del,A.dei,A.den,A.deh,A.deo,A.deg,A.dli,A.dlj,A.dlh,A.dlc,A.dle,A.dlf,A.dlg,A.dlr,A.dlm,A.dlp,A.dll,A.dlk,A.fh4,A.fh2,A.fh3,A.cbD,A.fyJ,A.fyK,A.fyL,A.eoT,A.eoU,A.eoS,A.eoM,A.eoB,A.eoC,A.eoG,A.eoH,A.eoR,A.eoV,A.eoX,A.eoF,A.eoE,A.ep3,A.ep2,A.eoN,A.eoP,A.etx,A.ety,A.etw,A.esz,A.esA,A.esy,A.esB,A.esC,A.esx,A.esO,A.esQ,A.esG,A.esH,A.et6,A.esP,A.ett,A.etu,A.etv,A.etr,A.ets,A.etq,A.etj,A.etl,A.etn,A.eto,A.etp,A.etz,A.esL,A.esM,A.esI,A.esJ,A.esR,A.etS,A.etU,A.etE,A.etH,A.etI,A.etG,A.etJ,A.etF,A.etV,A.etD,A.etW,A.etC,A.etX,A.etB,A.etY,A.eu_,A.etA,A.etL,A.etM,A.etN,A.etO,A.etP,A.etQ,A.etR,A.et8,A.et9,A.et7,A.etc,A.etd,A.ete,A.etf,A.fz2,A.evm,A.evn,A.evl,A.evb,A.evg,A.evh,A.evf,A.evi,A.evd,A.ev8,A.ev9,A.evc,A.evz,A.evy,A.evt,A.evo,A.evq,A.d7N,A.d7M,A.d7L,A.d7K,A.d7J,A.d7T,A.d7I,A.f9q,A.f9s,A.f9p,A.f9u])
u(C.ax,[A.aYV,A.UE,A.acP,A.bjT,A.b7O,A.aXV,A.a7e])
w(A.aNR,O.auw)
v(A.aO_,C.cq)})()
C.jl(b.typeUniverse,JSON.parse('{"a9S":{"ag":[],"v":[]},"aej":{"ah":["a9S<1>"]},"avC":{"ag":[],"v":[]},"xh":{"aC":[]},"b6w":{"aC":[]},"bs3":{"ah":["avC"]},"aoK":{"ag":[],"v":[]},"aoL":{"ah":["aoK"]},"aTE":{"aC":[]},"aYV":{"ax":[],"v":[]},"UE":{"ax":[],"v":[]},"apK":{"ag":[],"v":[]},"bkM":{"ah":["apK"]},"acP":{"ax":[],"v":[]},"bfF":{"aC":[]},"IZ":{"ag":[],"v":[]},"aJ5":{"ag":[],"v":[]},"aEO":{"ah":["IZ"]},"bjT":{"ax":[],"v":[]},"bji":{"aC":[]},"btV":{"ah":["aJ5"]},"awx":{"ag":[],"v":[]},"E2":{"ag":[],"v":[]},"a9L":{"ag":[],"v":[]},"a5c":{"ag":[],"v":[]},"aBP":{"ag":[],"v":[]},"afO":{"ag":[],"v":[]},"NL":{"ag":[],"v":[]},"bkN":{"ah":["NL"]},"btJ":{"ah":["awx"]},"b7O":{"ax":[],"v":[]},"aXV":{"ax":[],"v":[]},"aAD":{"ah":["E2"]},"aGC":{"ah":["a9L"]},"aAX":{"ah":["a5c"]},"aBQ":{"ah":["aBP"]},"bxn":{"ah":["afO"]},"a7e":{"ax":[],"v":[]},"Wn":{"ag":[],"v":[]},"aFe":{"ah":["Wn"]},"On":{"ag":[],"v":[]},"aFl":{"ah":["On"]},"arV":{"ag":[],"v":[]},"aFp":{"ah":["arV"]},"aq5":{"ag":[],"v":[]},"bev":{"ah":["aq5"]},"a1m":{"ag":[],"v":[]},"bv_":{"ah":["a1m"]}}'))
C.CY(b.typeUniverse,JSON.parse('{"bpu":1,"aNR":1}'))
var y={T:"A hot wire never goes on the green ground screw.",W:"A shut-off valve goes on the pipe that comes out of the wall.",v:"Both black wires go on brass screws. It does not matter which one.",r:"Brass screws are for the HOT wire (black).",q:"Each switch has its own screw on the other side, and each goes to its own light.",R:"Fasten the bare copper ground to the GREEN screw.",E:"Fasten the black hot to one HOT (X or Y) brass screw.",k:"Fasten the red hot to the other HOT brass screw.",N:"Fasten the white neutral to the silver NEUTRAL (W) screw.",b:"Fold the wires back and push the device into the box.",P:"LOAD is for feeding other outlets further down the line. It is covered with tape. Power comes in on the LINE screws.",x:"Look at the device and the wires. Learn which wire is which before you touch a screw.",M:"Move it with the arrow buttons, turn it, change its colour or take it out.",G:"Neutral goes on a silver screw. The silver screws stay joined, so one wire feeds both halves.",o:"Pick a paint colour above to change this wall.",n:"Put the cover plate on, turn the power on and test.",Q:"Silver screws are for the NEUTRAL wire (white).",f:"Switch the power on and flip the wall switch.",t:"The bare copper ground wire only goes on the GREEN screw.",u:"The black hot wire goes on a brass screw.",C:"The gold screws are BRASS. They are for the HOT wire (black).",Z:"The green screw is for the bare copper ground wire.",l:"The two hot wires (black and red) go on the two brass screws, X and Y, in either order.",p:"The two hot wires go on the two brass screws, in either order.",X:"The two traveler wires go on the two brass traveler screws, in either order.",g:"The two travelers coming from the first three-way go on the two top screws.",_:"The two travelers going to the second three-way go on the two bottom screws.",c:"The white neutral wire goes on a silver screw.",I:"The white neutral wire goes on the silver W screw.",B:"The white-silver screws are NICKEL. They are for the NEUTRAL wire (white).",D:"There is no medicine left. Buy some in the shop.",O:"Turn the breaker OFF and test that the wires are dead.",Y:"You are at the street light. Press Fix the street light."}
var x=(function rtii(){var w=C.aw
return{dw:w("m6<u?>"),ff:w("aT8"),l:w("bw<n,n>"),e:w("bw<n,K>"),M:w("dF<n>"),hg:w("a4u"),cD:w("aUR"),e7:w("ev<n>"),eP:w("ri"),gN:w("I4"),eB:w("mb"),fa:w("aA<MR?>"),v:w("du<H,n>"),fC:w("Ia"),m:w("O<lD>"),gQ:w("O<M5>"),V:w("O<ac>"),O:w("O<u>"),bm:w("O<a4p>"),fW:w("O<aUh>"),B:w("O<a4u>"),C:w("O<xm>"),dI:w("O<Ms>"),bP:w("O<ev<n>>"),gw:w("O<MA>"),dh:w("O<I4>"),_:w("O<mb>"),dY:w("O<om>"),cX:w("O<aWp>"),D:w("O<a5q>"),ha:w("O<Ia>"),r:w("O<fM>"),E:w("O<hf>"),Z:w("O<jL>"),gL:w("O<ai<H>>"),ez:w("O<a8<n,aD>>"),c7:w("O<a8<n,@>>"),f4:w("O<a8<n,ch>>"),T:w("O<i8>"),dN:w("O<t>"),F:w("O<ox>"),fI:w("O<nr>"),g:w("O<h9>"),z:w("O<ko>"),gl:w("O<b5b>"),a6:w("O<+(a9a,H)>"),L:w("O<+(n,n)>"),dt:w("O<+(q,q)>"),d6:w("O<+(K,n)>"),f:w("O<+(K,K)>"),ek:w("O<+(H,n)>"),aJ:w("O<+(n,H,H)>"),dV:w("O<+(K,K,u)>"),al:w("O<+(H,K,R)>"),gp:w("O<+(H,H,ai<t>)>"),dQ:w("O<+(H,H,H)>"),eV:w("O<+(K,K,K,K)>"),az:w("O<+(H,H,K,R,n)>"),fP:w("O<P5>"),e3:w("O<aa6>"),fB:w("O<wo>"),a:w("O<fQ>"),gD:w("O<Y2>"),y:w("O<rM>"),s:w("O<n>"),fJ:w("O<abd>"),dH:w("O<abe>"),W:w("O<vc>"),bz:w("O<Al>"),o:w("O<q>"),p:w("O<v>"),d:w("O<jA>"),f5:w("O<PX>"),gR:w("O<bce>"),bl:w("O<G6>"),h:w("O<AB>"),I:w("O<iW>"),x:w("O<hn>"),aQ:w("O<Qq>"),fG:w("O<bsg>"),X:w("O<pB>"),u:w("O<R>"),n:w("O<K>"),t:w("O<H>"),dS:w("O<aC?>"),k:w("O<ch>"),eF:w("cB<ah<ag>>"),dg:w("ai<K>"),j:w("ai<@>"),b:w("a8<n,@>"),G:w("a8<@,@>"),w:w("iF"),P:w("cu"),q:w("cW"),aU:w("aD"),dx:w("t"),ej:w("Ju"),fX:w("ko"),cE:w("a9S<H>"),J:w("+(K,K)"),c5:w("dw<H>"),cR:w("XR"),K:w("fQ"),cH:w("aw5"),N:w("n"),ec:w("jy<n>"),dZ:w("b8l"),g6:w("bp<K>"),Q:w("q"),ac:w("bG<H>"),cI:w("jS<n>"),am:w("Z<mb>"),fZ:w("Z<Fj>"),cc:w("Z<n>"),dD:w("Z<H>"),c1:w("hm"),gh:w("CE"),gf:w("PX"),bB:w("bcz"),c9:w("bhG"),R:w("R"),i:w("K"),A:w("@"),S:w("H"),c:w("MH?"),eT:w("MR?"),U:w("ai<@>?"),dy:w("a8<n,@>?"),fF:w("a8<@,@>?"),cU:w("q8?"),Y:w("ch"),H:w("~")}})();(function constants(){var w=a.makeConstList
B.aZm=new A.eC(!0,"The water is on and nothing leaks. Perfect job!",!1,"")
B.aZn=new A.eC(!0,"Primer and paint rolled on.",!1,"")
B.aZo=new A.eC(!1,"This call is over. Start a new one.",!1,"")
B.aZp=new A.eC(!0,"Recorded.",!1,"")
B.aZq=new A.eC(!1,"That is not a place for a sheet.",!1,"")
B.aZr=new A.eC(!0,"Sanded smooth. Wear a mask: the dust is bad to breathe.",!1,"")
B.abY=new A.eC(!1,"There is no device here.",!1,"")
B.aZs=new A.eC(!0,"You look closely. Everything looks fine here.",!1,"")
B.aZt=new A.eC(!1,"ZAP! You were shocked badly and it was your last life. Always turn the breaker OFF and test before you touch wires.",!0,"shock")
B.aZu=new A.eC(!0,"Paper tape pressed into the seam.",!1,"")
B.aZv=new A.eC(!0,"Unplugged.",!1,"")
B.aZw=new A.eC(!0,"Breaker OFF. It is safe to work on the wires.",!1,"")
B.aZx=new A.eC(!1,"ZAP! You were shocked badly. That was your last life: the job is over. Lesson: ALWAYS turn the breaker OFF and test the wires before you touch them.",!0,"shock")
B.aZy=new A.eC(!1,"There is nothing there.",!1,"")
B.aZz=new A.eC(!1,"The outlet is burnt. Nothing works. Pull it out and put in a new one.",!0,"")
B.aZA=new A.eC(!0,"The water is on and nothing leaks yet, but the job is not finished.",!1,"")
B.aZB=new A.eC(!0,"Sheet hung. Now screw it to the studs.",!1,"")
B.aZC=new A.eC(!0,"Hole drilled through the middle of the stud, at the cable height. Holes go in the center so a nail cannot reach the cable.",!1,"")
B.aZD=new A.eC(!0,"Plugged in. Nothing happens because the breaker is off. Turn it on to test.",!1,"")
B.aZE=new A.eC(!0,"You flipped the tripped breaker fully OFF. Fix the problem before you turn it on again.",!1,"")
B.aZF=new A.eC(!0,"Click.",!1,"")
B.aZG=new A.eC(!0,"The wires are folded back and the device is in the box. Now put the cover on.",!1,"")
B.aZH=new A.eC(!0,"Breaker OFF. The wires on this circuit are dead now. (Always test them to be sure.)",!1,"")
B.aZI=new A.eC(!1,"Nothing is wet.",!1,"")
B.aZJ=new A.eC(!0,"Power is on.",!1,"")
B.aZK=new A.eC(!0,"Water OFF at the main valve. You can cut into the pipes safely now.",!1,"")
B.aZL=new A.eC(!0,"Opening cut around the box with the drywall saw. Keep it tight: the plate has to cover the edge.",!1,"")
B.aZM=new A.eC(!0,"Device pulled out of the box.",!1,"")
B.aZN=new A.eC(!0,"Screw set just below the paper, not through it.",!1,"")
B.aZO=new A.eC(!1,"ZAP! You touched a live wire. In Learn mode you are not hurt, but in real life this can kill. Switch the breaker OFF and test the wires first.",!0,"shock")
B.aZP=new A.eC(!0,"Cover on. Now you can turn the breaker on and test.",!1,"")
B.Ws=new A.eC(!1,"",!1,"")
B.aZQ=new A.eC(!0,"Device taken out. You can put it somewhere else, or put in a new one.",!1,"")
B.aZR=new A.eC(!0,"Breaker back ON.",!1,"")
B.aZS=new A.eC(!1,"That is not a stud.",!1,"")
B.aZT=new A.eC(!0,"Off.",!1,"")
B.aZU=new A.eC(!1,"Nothing to flip yet.",!1,"")
B.aZV=new A.eC(!0,"Wire taken off.",!1,"")
B.aZW=new A.eC(!0,"The mud is dry.",!1,"")
B.aZX=new A.eC(!0,"Breaker reset.",!1,"")
B.aZY=new A.eC(!0,"Box mounted. (Careful: this is not a fan-rated box. A fan on it could fall.)",!1,"")
B.fOc=new C.y("Tap a piece of furniture, or add one:",null,D.Af,null,null,null,null,null,null,null,null,null)
B.em2=new C.D(D.no,B.fOc,null)
B.b_4=new C.bO(D.a5,null,null,B.em2,null)
B.acq=new A.lD(0,0,0,0,1)
B.ad1=new C.aZ(0,290,0,1/0)
B.b1e=new C.bg(G.Tv,G.Tv,D.bI,D.bI)
B.brU=new C.u(1,0.12156862745098039,0.13725490196078433,0.18823529411764706,D.q)
B.bs1=new C.u(1,0.054901960784313725,0.06274509803921569,0.09411764705882353,D.q)
B.d5E=w([B.brU,B.bs1],x.O)
B.c1A=new C.a9(D.b4,D.b7,D.x,B.d5E,null,null)
B.b4d=new C.o(null,null,G.acQ,B.b1e,null,B.c1A,D.n)
B.Fu=new C.u(1,0.08627450980392157,0.10588235294117647,0.1411764705882353,D.q)
B.b2B=new C.bK(D.a0,D.a0,A9.vy,D.a0)
B.b53=new C.o(B.Fu,null,B.b2B,null,null,null,D.n)
B.b1p=new C.bg(D.mV,D.ip,D.ip,D.ip)
B.b59=new C.o(D.aJ,null,null,B.b1p,null,null,D.n)
B.fOS=new C.y("\u2600\ufe0f Let it dry",null,F.Ac,null,null,null,null,null,null,null,null,null)
B.b9f=new C.ca(D.A,null,null,B.fOS,null)
B.fOC=new C.y("\u23e9 Skip to the wiring",null,F.Ac,null,null,null,null,null,null,null,null,null)
B.b9o=new C.ca(D.A,null,null,B.fOC,null)
B.fCS=new C.y("\ud83c\udfd7\ufe0f",null,D.pA,null,null,null,null,null,null,null,null,null)
B.b9G=new C.ca(D.A,null,null,B.fCS,null)
B.fCF=new C.y("\ud83c\udfe0",null,D.aTH,null,null,null,null,null,null,null,null,null)
B.ba9=new C.ca(D.A,null,null,B.fCF,null)
B.bbA=new C.u(1,0.9294117647058824,0.9098039215686274,0.8627450980392157,D.q)
B.Lz=new C.u(1,0.1803921568627451,0.20392156862745098,0.25098039215686274,D.q)
B.aee=new C.u(1,0.16470588235294117,0.10588235294117647,0.07058823529411765,D.q)
B.bbM=new C.u(1,0.9725490196078431,0.9647058823529412,0.9333333333333333,D.q)
B.vD=new C.u(1,0.5450980392156862,0.3686274509803922,0.20392156862745098,D.q)
B.bbS=new C.u(1,0.5568627450980392,0.5568627450980392,0.5882352941176471,D.q)
B.ael=new C.u(1,0.611764705882353,0.5568627450980392,0.4588235294117647,D.q)
B.EX=new C.u(1,0.24705882352941178,0.5607843137254902,0.30980392156862746,D.q)
B.bc7=new C.u(1,0.8392156862745098,0.9333333333333333,0.984313725490196,D.q)
B.oT=new C.u(1,0.9450980392156862,0.9450980392156862,0.9176470588235294,D.q)
B.bcx=new C.u(1,0.9098039215686274,0.9254901960784314,0.9372549019607843,D.q)
B.bcz=new C.u(1,0.4823529411764706,0.5098039215686274,0.5450980392156862,D.q)
B.bcI=new C.u(1,0.10588235294117647,0.4980392156862745,0.20392156862745098,D.q)
B.aeD=new C.u(1,0.7215686274509804,0.7450980392156863,0.7725490196078432,D.q)
B.nV=new C.u(1,0.5450980392156862,0.3686274509803922,0.23529411764705882,D.q)
B.aeF=new C.u(1,0.8509803921568627,0.8274509803921568,0.7725490196078432,D.q)
B.aeJ=new C.u(1,0.6549019607843137,0.6784313725490196,0.7098039215686275,D.q)
B.hq=new C.u(1,0.16862745098039217,0.17647058823529413,0.2,D.q)
B.EZ=new C.u(1,0.8980392156862745,0.7529411764705882,0.4823529411764706,D.q)
B.LJ=new C.u(1,0.8156862745098039,0.5098039215686274,0.27450980392156865,D.q)
B.Xt=new C.u(1,0.5411764705882353,0.41568627450980394,0.2784313725490196,D.q)
B.aeQ=new C.u(1,0.1843137254901961,0.4196078431372549,0.23529411764705882,D.q)
B.Xw=new C.u(1,0.2980392156862745,0.5450980392156862,0.2901960784313726,D.q)
B.xF=new C.u(1,0.788235294117647,0.6274509803921569,0.22745098039215686,D.q)
B.aeW=new C.u(1,0.9411764705882353,0.5411764705882353,0.1411764705882353,D.q)
B.F4=new C.u(1,0.9921568627450981,0.9882352941176471,0.9686274509803922,D.q)
B.XA=new C.u(1,0.5568627450980392,0.5843137254901961,0.6196078431372549,D.q)
B.bes=new C.u(1,0.47843137254901963,0.35294117647058826,0.22745098039215686,D.q)
B.jI=new C.u(1,0.788235294117647,0.807843137254902,0.8392156862745098,D.q)
B.af5=new C.u(1,0.4196078431372549,0.45098039215686275,0.5019607843137255,D.q)
B.af6=new C.u(1,0.5568627450980392,0.35294117647058826,0.2901960784313726,D.q)
B.B6=new C.u(1,0.9294117647058824,0.9176470588235294,0.8784313725490196,D.q)
B.bfi=new C.u(1,0.9137254901960784,0.7254901960784313,0.28627450980392155,D.q)
B.bft=new C.u(1,0.22745098039215686,0.22745098039215686,0.24705882352941178,D.q)
B.bfB=new C.u(1,0.5490196078431373,0.5764705882352941,0.6078431372549019,D.q)
B.F8=new C.u(1,0.22745098039215686,0.24705882352941178,0.2784313725490196,D.q)
B.XH=new C.u(1,0.8980392156862745,0.8980392156862745,0.8666666666666667,D.q)
B.LT=new C.u(1,0.10588235294117647,0.11372549019607843,0.13333333333333333,D.q)
B.bfP=new C.u(1,0.22745098039215686,0.23529411764705882,0.25882352941176473,D.q)
B.XL=new C.u(1,0.30980392156862746,0.6588235294117647,0.3764705882352941,D.q)
B.afk=new C.u(1,0.8509803921568627,0.803921568627451,0.7215686274509804,D.q)
B.afl=new C.u(1,0.4196078431372549,0.2901960784313726,0.16862745098039217,D.q)
B.LV=new C.u(1,0.11764705882352941,0.11764705882352941,0.12549019607843137,D.q)
B.bg1=new C.u(1,0.8862745098039215,0.8745098039215686,0.8235294117647058,D.q)
B.afo=new C.u(1,0.9490196078431372,0.7803921568627451,0.611764705882353,D.q)
B.bg5=new C.u(1,0.42745098039215684,0.2901960784313726,1,D.q)
B.bga=new C.u(1,0.3686274509803922,0.27450980392156865,0.18823529411764706,D.q)
B.bgd=new C.u(1,0.9058823529411765,0.8470588235294118,0.7450980392156863,D.q)
B.bgn=new C.u(1,0.5411764705882353,0.4823529411764706,0.41568627450980394,D.q)
B.bgr=new C.u(1,0.24705882352941178,0.16470588235294117,0.10980392156862745,D.q)
B.bgt=new C.u(1,0.34901960784313724,0.3176470588235294,0.29411764705882354,D.q)
B.bgv=new C.u(1,0.24705882352941178,0.6470588235294118,0.3568627450980392,D.q)
B.bgD=new C.u(1,0.8117647058823529,0.792156862745098,0.7411764705882353,D.q)
B.XQ=new C.u(1,0.8117647058823529,0.8901960784313725,0.9176470588235294,D.q)
B.bgI=new C.u(1,0.7215686274509804,0.7450980392156863,0.7843137254901961,D.q)
B.LX=new C.u(1,0.3333333333333333,0.396078431372549,0.4823529411764706,D.q)
B.XR=new C.u(1,0.5529411764705883,0.7843137254901961,1,D.q)
B.XU=new C.u(1,1,0.9019607843137255,0.5019607843137255,D.q)
B.bh7=new C.u(1,0.5411764705882353,0.1843137254901961,0.22745098039215686,D.q)
B.bha=new C.u(1,0.9490196078431372,0.7607843137254902,0.10588235294117647,D.q)
B.afJ=new C.u(1,0.9490196078431372,0.9411764705882353,0.9019607843137255,D.q)
B.bht=new C.u(1,0.8509803921568627,0.7725490196078432,0.6392156862745098,D.q)
B.bhx=new C.u(1,0.9686274509803922,0.9607843137254902,0.9333333333333333,D.q)
B.afN=new C.u(1,0.6823529411764706,0.6941176470588235,0.7372549019607844,D.q)
B.o2=new C.u(1,0.1843137254901961,0.49019607843137253,0.8823529411764706,D.q)
B.bhI=new C.u(1,0.788235294117647,0.7176470588235294,0.6078431372549019,D.q)
B.XX=new C.u(1,0.8901960784313725,0.6627450980392157,0.10980392156862745,D.q)
B.Fi=new C.u(1,0.7137254901960784,0.7372549019607844,0.7686274509803922,D.q)
B.bhN=new C.u(1,0.8431372549019608,0.8509803921568627,0.8784313725490196,D.q)
B.afS=new C.u(1,0.7215686274509804,0.7529411764705882,0.8,D.q)
B.bhY=new C.u(1,0.22745098039215686,0.49019607843137253,0.26666666666666666,D.q)
B.vH=new C.u(1,0.9019607843137255,0.8823529411764706,0.8352941176470589,D.q)
B.Y0=new C.u(1,0.3686274509803922,0.17647058823529413,0.13725490196078433,D.q)
B.bib=new C.u(1,0.0196078431372549,0.027450980392156862,0.050980392156862744,D.q)
B.ag0=new C.u(1,0.6039215686274509,0.6274509803921569,0.6588235294117647,D.q)
B.Fk=new C.u(1,0.09019607843137255,0.09411764705882353,0.10588235294117647,D.q)
B.Bb=new C.u(1,0.9725490196078431,0.9725490196078431,0.9568627450980393,D.q)
B.bip=new C.u(1,0.2901960784313726,0.12156862745098039,0.15294117647058825,D.q)
B.ag5=new C.u(1,0.9450980392156862,0.9568627450980393,0.9725490196078431,D.q)
B.ag7=new C.u(1,0.9019607843137255,0.9019607843137255,0.8784313725490196,D.q)
B.biP=new C.u(1,0.29411764705882354,0.21176470588235294,0.12941176470588237,D.q)
B.Y4=new C.u(1,0.8941176470588236,0.9058823529411765,0.9176470588235294,D.q)
B.ju=new C.u(1,0.7686274509803922,0.6039215686274509,0.3843137254901961,D.q)
B.bjk=new C.u(1,0.08235294117647059,0.06274509803921569,0.047058823529411764,D.q)
B.agm=new C.u(1,1,0.35294117647058826,0.12156862745098039,D.q)
B.agn=new C.u(1,0.5411764705882353,0.5607843137254902,0.596078431372549,D.q)
B.M6=new C.u(1,0.16470588235294117,0.10196078431372549,0.06274509803921569,D.q)
B.agp=new C.u(1,0.5411764705882353,0.29411764705882354,0.29411764705882354,D.q)
B.M7=new C.u(1,0.9098039215686274,0.8509803921568627,0.7372549019607844,D.q)
B.bjz=new C.u(1,0.48627450980392156,0.3215686274509804,0.18823529411764706,D.q)
B.o6=new C.u(1,1,0.9450980392156862,0.6588235294117647,D.q)
B.bjZ=new C.u(1,0.5411764705882353,0.5411764705882353,0.5176470588235295,D.q)
B.bk0=new C.u(1,0.9647058823529412,0.9568627450980393,0.9254901960784314,D.q)
B.Ma=new C.u(1,0.47843137254901963,0.23137254901960785,0.1803921568627451,D.q)
B.bka=new C.u(1,0.3333333333333333,0.6274509803921569,0.3333333333333333,D.q)
B.agz=new C.u(1,0.7058823529411765,0.3254901960784314,0.3254901960784314,D.q)
B.bki=new C.u(1,0.6078431372549019,0.6078431372549019,0.592156862745098,D.q)
B.Bf=new C.u(1,0.9568627450980393,0.9450980392156862,0.9176470588235294,D.q)
B.bko=new C.u(1,0.6078431372549019,0.23137254901960785,0.2901960784313726,D.q)
B.tH=new C.u(1,0.8862745098039215,0.23137254901960785,0.23137254901960785,D.q)
B.pU=new C.u(1,0.9490196078431372,0.9490196078431372,0.9254901960784314,D.q)
B.bkt=new C.u(1,0.30980392156862746,0.615686274509804,0.3568627450980392,D.q)
B.agE=new C.u(1,0.788235294117647,0.8117647058823529,0.8392156862745098,D.q)
B.bky=new C.u(1,0.9294117647058824,0.9215686274509803,0.8941176470588236,D.q)
B.Yi=new C.u(1,0.8392156862745098,0.6823529411764706,0.4470588235294118,D.q)
B.agH=new C.u(1,0.9098039215686274,0.9098039215686274,0.9098039215686274,D.q)
B.Mc=new C.u(1,0.2901960784313726,0.2980392156862745,0.32941176470588235,D.q)
B.Yk=new C.u(1,0.3686274509803922,0.43137254901960786,0.5176470588235295,D.q)
B.blg=new C.u(1,0.20784313725490197,0.47843137254901963,0.26666666666666666,D.q)
B.blj=new C.u(1,0.3568627450980392,0.10196078431372549,0.09019607843137255,D.q)
B.agS=new C.u(1,0.23137254901960785,0.1843137254901961,0.14901960784313725,D.q)
B.agT=new C.u(1,0.8509803921568627,0.788235294117647,0.6588235294117647,D.q)
B.kA=new C.u(1,0.9686274509803922,0.9568627450980393,0.9254901960784314,D.q)
B.agW=new C.u(1,0.13333333333333333,0.1450980392156863,0.16862745098039217,D.q)
B.Yo=new C.u(1,0.4980392156862745,0.7215686274509804,1,D.q)
B.xR=new C.u(1,0.16470588235294117,0.1450980392156863,0.13725490196078433,D.q)
B.blD=new C.u(1,0.5411764705882353,0.23137254901960785,0.23137254901960785,D.q)
B.blE=new C.u(1,0.9450980392156862,0.9294117647058824,0.8784313725490196,D.q)
B.Mf=new C.u(1,0.796078431372549,0.8156862745098039,0.8392156862745098,D.q)
B.Yr=new C.u(1,0.8980392156862745,0.7254901960784313,0.11764705882352941,D.q)
B.bm2=new C.u(1,0.7490196078431373,0.8901960784313725,1,D.q)
B.ah9=new C.u(1,0.6039215686274509,0.4196078431372549,0.24705882352941178,D.q)
B.Yv=new C.u(1,0.10588235294117647,0.10588235294117647,0.11372549019607843,D.q)
B.bmo=new C.u(1,0.9529411764705882,0.9058823529411765,0.6313725490196078,D.q)
B.ahg=new C.u(1,0.9490196078431372,0.9490196078431372,0.9333333333333333,D.q)
B.bmN=new C.u(1,0.6274509803921569,0.6509803921568628,0.6823529411764706,D.q)
B.bn_=new C.u(0,0.2196078431372549,0.7411764705882353,0.9725490196078431,D.q)
B.bn7=new C.u(1,0.8156862745098039,0.35294117647058826,0.22745098039215686,D.q)
B.bnd=new C.u(1,0.8509803921568627,0.788235294117647,0.6274509803921569,D.q)
B.YB=new C.u(1,0.9490196078431372,0.9176470588235294,0.8274509803921568,D.q)
B.ahA=new C.u(1,0.10588235294117647,0.07058823529411765,0.03529411764705882,D.q)
B.bnz=new C.u(1,0.3607843137254902,0.7019607843137254,0.9098039215686274,D.q)
B.Mm=new C.u(1,0.24705882352941178,0.26666666666666666,0.3137254901960784,D.q)
B.bnJ=new C.u(1,0.12549019607843137,0.13333333333333333,0.14901960784313725,D.q)
B.Mq=new C.u(1,0.8862745098039215,0.27058823529411763,0.35294117647058826,D.q)
B.bnZ=new C.u(1,0.12156862745098039,0.43529411764705883,0.2627450980392157,D.q)
B.xW=new C.u(1,0.17254901960784313,0.4196078431372549,0.8392156862745098,D.q)
B.vN=new C.u(1,0.7607843137254902,0.4627450980392157,0.22745098039215686,D.q)
B.Mt=new C.u(1,0.7254901960784313,0.7450980392156863,0.7764705882352941,D.q)
B.ahJ=new C.u(1,0.611764705882353,0.35294117647058826,0.27058823529411763,D.q)
B.bor=new C.u(1,0.611764705882353,0.5882352941176471,0.5450980392156862,D.q)
B.Mx=new C.u(1,0.9686274509803922,0.9490196078431372,0.9019607843137255,D.q)
B.boU=new C.u(1,0.2,0.21176470588235294,0.23137254901960785,D.q)
B.boZ=new C.u(1,0.7098039215686275,0.7333333333333333,0.7647058823529411,D.q)
B.bp_=new C.u(1,0.9294117647058824,0.9294117647058824,0.9098039215686274,D.q)
B.bp5=new C.u(1,0.9098039215686274,0.8941176470588236,0.8549019607843137,D.q)
B.bpa=new C.u(1,0.23137254901960785,0.23137254901960785,0.25098039215686274,D.q)
B.ai1=new C.u(1,0.7686274509803922,0.5411764705882353,0.11764705882352941,D.q)
B.bpg=new C.u(1,0.43529411764705883,0.7137254901960784,1,D.q)
B.bpq=new C.u(1,0.9450980392156862,0.9019607843137255,0.8156862745098039,D.q)
B.bps=new C.u(1,0.9137254901960784,0.8980392156862745,0.8549019607843137,D.q)
B.ai9=new C.u(1,0.18823529411764706,0.2,0.22745098039215686,D.q)
B.Mz=new C.u(1,0.9372549019607843,0.9372549019607843,0.9176470588235294,D.q)
B.aib=new C.u(0.6666666666666666,1,0.16470588235294117,0.10196078431372549,D.q)
B.bpJ=new C.u(1,0.9372549019607843,0.9137254901960784,0.8627450980392157,D.q)
B.bpM=new C.u(1,0.9294117647058824,0.9019607843137255,0.8156862745098039,D.q)
B.YT=new C.u(1,0.4196078431372549,0.24705882352941178,0.19215686274509805,D.q)
B.bpR=new C.u(1,0.12156862745098039,0.6392156862745098,0.2627450980392157,D.q)
B.bpT=new C.u(1,0.803921568627451,0.6274509803921569,0.2,D.q)
B.YW=new C.u(1,0.3607843137254902,0.7019607843137254,1,D.q)
B.bqz=new C.u(1,0.48627450980392156,0.2901960784313726,0.17647058823529413,D.q)
B.YX=new C.u(1,0.9568627450980393,0.9568627450980393,0.9411764705882353,D.q)
B.bqB=new C.u(1,0.8431372549019608,0.8,0.6588235294117647,D.q)
B.brf=new C.u(1,0.9019607843137255,0.8745098039215686,0.796078431372549,D.q)
B.bri=new C.u(1,0.30980392156862746,0.6588235294117647,1,D.q)
B.bro=new C.u(1,1,0.6196078431372549,0.6196078431372549,D.q)
B.aiA=new C.u(1,0.8431372549019608,0.16470588235294117,0.16470588235294117,D.q)
B.MI=new C.u(1,0.47843137254901963,0.30980392156862746,0.1568627450980392,D.q)
B.brC=new C.u(1,0.9294117647058824,0.9372549019607843,0.9529411764705882,D.q)
B.Bu=new C.u(1,0.6901960784313725,0.5411764705882353,0.3568627450980392,D.q)
B.hW=new C.u(1,0.6078431372549019,0.8274509803921568,0.9607843137254902,D.q)
B.brW=new C.u(1,0.48627450980392156,0.2901960784313726,0.22745098039215686,D.q)
B.Z7=new C.u(1,0.7490196078431373,0.8901960784313725,0.9686274509803922,D.q)
B.Z8=new C.u(1,0.23137254901960785,0.6078431372549019,1,D.q)
B.aiI=new C.u(1,0.8509803921568627,0.8235294117647058,0.7607843137254902,D.q)
B.q4=new C.u(1,0.4196078431372549,0.2901960784313726,0.19607843137254902,D.q)
B.bs9=new C.u(1,0.8509803921568627,0.7450980392156863,0.5725490196078431,D.q)
B.Za=new C.u(1,0.13333333333333333,0.14901960784313725,0.17254901960784313,D.q)
B.bsc=new C.u(1,0.8117647058823529,0.788235294117647,0.7215686274509804,D.q)
B.bsg=new C.u(1,0.7176470588235294,0.4745098039215686,0.12156862745098039,D.q)
B.bsm=new C.u(1,0.9294117647058824,0.9294117647058824,0.9176470588235294,D.q)
B.bsn=new C.u(1,0.7529411764705882,0.5411764705882353,0.35294117647058826,D.q)
B.bsp=new C.u(1,0.5450980392156862,0.4196078431372549,0.24705882352941178,D.q)
B.btt=new A.ti("none","Nothing happens: the device gets no power.",!1,!1,!1)
B.btu=new A.ti("none","It cannot be judged: the wire functions were not verified.",!1,!1,!1)
B.btv=new A.ti("smoke","The loose connection overheats: it glows, smokes and chars the device. In a real wall this can start a fire.",!1,!1,!0)
B.btw=new A.ti("none","It does not work as it should: some part runs wrongly or not at all. That does not tell you what is wrong, so check against the diagram.",!1,!1,!1)
B.btx=new A.ti("none","It runs. There is nothing to see, and that is the danger: with no ground, a fault would energize the metal parts.",!0,!1,!1)
B.bty=new A.ti("none","It works as the diagram says.",!0,!1,!1)
B.btz=new A.ti("none","It works, and every safety rule is met.",!0,!1,!1)
B.btA=new A.ti("none","Nothing happens: it is dead. But the hot wire is connected, so it can still be live. No sparks, no smoke: that does not make it safe.",!1,!1,!1)
B.btB=new A.ti("spark","Bare copper touches something it should not: sparks. The circuit is not safe.",!1,!1,!1)
B.btC=new A.ti("none","It looks fine for now. But the support cannot carry the weight, and it can fall later.",!1,!1,!1)
B.btD=new A.ti("fire","BANG. A short circuit: a flash, sparks, smoke and a flame at the device. The breaker trips and the device is ruined. The wires and the device are not safe to use.",!1,!0,!0)
B.btE=new A.ti("arc","Hot and neutral are reversed: the parts that should be dead are live. Blue arcs show the energized metal. The simulator does not let anything run on this: it is unsafe, even if a real appliance might seem to work.",!1,!1,!1)
B.btF=new A.ti("arc","Current flows through the ground wire and the metal parts it joins. Arcs crackle at the box. This is a shock hazard.",!1,!1,!1)
B.btG=new A.ti("spark","The neutral and ground are joined: the protective device trips with a snap of sparks.",!1,!0,!1)
B.buy=new A.akp("expired","That order took too long and went back on the board.",0)
B.bwu=new C.ba(55e3)
B.bxk=new C.Q(0,2,0,6)
B.bxK=new C.Q(10,10,10,8)
B.bxQ=new C.Q(10,16,10,14)
B.by7=new C.Q(11,7,11,7)
B.a_7=new C.Q(11,9,11,9)
B.bz9=new C.Q(14,16,14,10)
B.akj=new C.Q(14,8,14,24)
B.bAO=new C.Q(1,0,0,0)
B.bBp=new C.Q(22,0,22,44)
B.bC6=new C.Q(26,8,26,8)
B.bCJ=new C.Q(4,22,4,12)
B.bCW=new C.Q(4,4,8,4)
B.bCY=new C.Q(4,6,12,4)
B.bDU=new C.Q(9,0,9,0)
B.bDV=new C.Q(9,12,9,12)
B.fU9=new C.y("Practice mode (no explanations, real shocks)",null,D.Kd,null,null,null,null,null,null,null,null,null)
B.bEq=new C.bz(1,D.bb,B.fU9,null)
B.fPF=new C.y("Practice mode (no hints, no labels)",null,D.Kd,null,null,null,null,null,null,null,null,null)
B.bEs=new C.bz(1,D.bb,B.fPF,null)
B.fwl=new C.y("\ud83c\udfd8 Community",null,Q.t7,null,null,null,null,null,null,null,null,null)
B.b99=new C.ca(D.A,null,null,B.fwl,null)
B.bEz=new C.bz(1,D.bb,B.b99,null)
B.fB1=new C.y("House tour",null,D.n_,null,null,null,null,null,null,null,null,null)
B.fHC=new C.y("A film of your whole house, with every TV on.",null,D.a9C,null,null,null,null,null,null,null,null,null)
B.dlu=w([B.fB1,D.bD,B.fHC],x.p)
B.btr=new C.fi(D.ag,D.e,D.i,D.E,null,D.p,null,0,B.dlu,null)
B.bEE=new C.bz(1,D.bb,B.btr,null)
B.fHd=new C.y("Construction Lab",null,Q.t7,null,null,null,null,null,null,null,null,null)
B.fvJ=new C.y("Wire it. Plumb it. Fix a house.",null,D.hn,null,null,null,null,null,null,null,null,null)
B.dc1=w([B.fHd,B.fvJ],x.p)
B.bta=new C.fi(D.ag,D.e,D.i,D.E,null,D.p,null,0,B.dc1,null)
B.bEN=new C.bz(1,D.bb,B.bta,null)
B.fOt=new C.y("Test mode (an inspection: nothing is explained until you submit)",null,D.Kd,null,null,null,null,null,null,null,null,null)
B.bEP=new C.bz(1,D.bb,B.fOt,null)
B.aT4=new C.F(!0,D.c,null,null,null,null,14,D.H,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fPw=new C.y("5 portions of food\n10 points",null,B.aT4,null,null,null,null,null,null,null,null,null)
B.bET=new C.bz(1,D.bb,B.fPw,null)
B.fBz=new C.y("3 doses of medicine\n12 points",null,B.aT4,null,null,null,null,null,null,null,null,null)
B.bF8=new C.bz(1,D.bb,B.fBz,null)
B.fN8=new C.y("Drone film",null,D.fw,null,null,null,null,null,null,null,null,null)
B.bFd=new C.bz(1,D.bb,B.fN8,null)
B.fPi=new C.y("Practice mode (no hints, real shocks and fires)",null,D.Kd,null,null,null,null,null,null,null,null,null)
B.bFz=new C.bz(1,D.bb,B.fPi,null)
B.fTJ=new C.y("Uber licence",null,D.fw,null,null,null,null,null,null,null,null,null)
B.bFG=new C.bz(1,D.bb,B.fTJ,null)
B.bGD=new A.a5c(null,null)
B.a0u=new A.ri(0,"tripped")
B.a0v=new A.ri(1,"noHotWater")
B.a0w=new A.ri(10,"wallHole")
B.a0x=new A.ri(11,"clogged")
B.NS=new A.ri(2,"nutLeak")
B.NT=new A.ri(3,"pexLeak")
B.a0y=new A.ri(5,"flicker")
B.a0z=new A.ri(6,"burntOutlet")
B.a0A=new A.ri(7,"gfciTripped")
B.a0B=new A.ri(8,"runningToilet")
B.a0C=new A.ri(9,"dripFaucet")
B.bIo=new A.om(!1,"back",0,10)
B.bIp=new A.om(!1,"back",0,9)
B.bIq=new A.om(!1,"back",50,0)
B.bIr=new A.om(!1,"back",56,11)
B.bIs=new A.om(!1,"back",-50,10)
B.bIt=new A.om(!1,"left",40,9)
B.bIu=new A.om(!1,"right",40,10)
B.a0K=new A.om(!1,"right",50,5)
B.amn=new A.pR("tv100",'Giant 100"',"\ud83d\udcfa",89,!1)
B.bKB=new C.a0(61419,"MaterialIcons",!1)
B.bKN=new C.a0(61888,"MaterialIcons",!1)
B.bLy=new C.a0(62978,"MaterialIcons",!1)
B.bLD=new C.a0(63015,"MaterialIcons",!1)
B.bM_=new C.a0(63165,"MaterialIcons",!1)
B.anL=new C.a0(63228,"MaterialIcons",!1)
B.ao7=new C.a0(63547,"MaterialIcons",!0)
B.bNj=new C.a0(983222,"MaterialIcons",!1)
B.bNT=new C.a0(983666,"MaterialIcons",!1)
B.aoR=new C.a0(983775,"MaterialIcons",!1)
B.aoX=new C.a0(983894,"MaterialIcons",!1)
B.bRn=new C.ae(D.oj,null,null,null,null,null)
B.bSR=new C.ae(D.cz,26,D.aB,null,null,null)
B.bVn=new C.ae(D.ma,null,null,null,null,null)
B.bWe=new C.ae(D.Cs,22,D.c,null,null,null)
B.bWj=new C.ae(D.kJ,null,F.fz,null,null,null)
B.bYg=new C.ae(D.p9,null,null,null,null,null)
B.bZH=new C.ae(A3.H5,null,D.bG,null,null,null)
B.fXz=new A.q(0,100,20)
B.c0A=new A.hf(B.fXz,"No power in this house",D.bx,0)
B.hc4=new A.q(-60,40,130)
B.c0B=new A.hf(B.hc4,"\ud83e\uddef Walk here to check the equipment",D.d1,0)
B.fZf=new A.q(0,62,12)
B.c0C=new A.hf(B.fZf,"\ud83d\uded7 Elevator: walk onto the blue mat or tap",D.jc,19502)
B.fZ8=new A.q(0,50,80)
B.c0D=new A.hf(B.fZ8,"\ud83d\udcda Walk here to teach the class",D.d1,0)
B.fZJ=new A.q(105,52,100)
B.c0E=new A.hf(B.fZJ,"\ud83c\udf06 Balcony: step here to see the city",D.ed,0)
B.hci=new A.q(-80,70,40)
B.c0F=new A.hf(B.hci,"\ud83d\udc69\u200d\u2695\ufe0f Nurse",D.cO,0)
B.fZc=new A.q(0,52,78)
B.c0G=new A.hf(B.fZc,"\ud83e\udeaa Walk here to get your Uber licence",D.jc,0)
B.hcj=new A.q(-84,84,120)
B.c0H=new A.hf(B.hcj,"\ud83c\udf5e Food and drinks",D.d1,0)
B.fYW=new A.q(0,40,176)
B.c0I=new A.hf(B.fYW,"\ud83c\udf4e Fresh fruit",D.e7,0)
B.aVD=new A.q(0,26,312)
B.c0J=new A.hf(B.aVD,"\u2b07 Walk here to go out",D.ed,0)
B.c0K=new A.hf(B.aVD,"\ud83d\uded7 Take the elevator down to go out",D.jc,0)
B.h4k=new A.q(90,40,56)
B.c0L=new A.hf(B.h4k,"\ud83d\udcd6 Library",D.dF,0)
B.h3T=new A.q(80,40,56)
B.c0M=new A.hf(B.h3T,"\ud83d\udd25 Fire drill",D.bx,0)
B.aVy=new A.q(0,100,36)
B.c0N=new A.hf(B.aVy,"\ud83e\udeaa NGMY Licence office",D.M,0)
B.aWe=new A.q(34,56,18)
B.c0O=new A.hf(B.aWe,"\ud83e\uddd1\u200d\ud83d\udcbc Clerk",D.cO,0)
B.hb4=new A.q(-0.4,4.2,-2.4)
B.c0P=new A.hf(B.hb4,"LIVE 120 V",D.bx,0)
B.hch=new A.q(-80,52,66)
B.c0Q=new A.hf(B.hch,"\ud83c\udfe5 Walk here to admit the sick",D.eR,0)
B.fZ9=new A.q(0,50,84)
B.c0R=new A.hf(B.fZ9,"\ud83d\udcb0 Counter: walk here to pay or sell",D.ed,0)
B.c0S=new A.hf(B.aWe,"\ud83e\uddd1\u200d\ud83d\udcbc Cashier",D.cO,0)
B.c1Q=new C.a9(D.a5,D.a8,D.x,M.ayY,null,null)
B.c2O=new C.a9(D.a5,D.a8,D.x,M.axn,null,null)
B.bpi=new C.u(1,0.2901960784313726,0.20392156862745098,0.0784313725490196,D.q)
B.bm4=new C.u(1,0.12156862745098039,0.10196078431372549,0.07058823529411765,D.q)
B.beI=new C.u(1,0.16470588235294117,0.12156862745098039,0.07058823529411765,D.q)
B.dnp=w([B.bpi,B.bm4,B.beI],x.O)
B.c2T=new C.a9(D.ay,D.aE,D.x,B.dnp,null,null)
B.bgG=new C.u(1,0.8509803921568627,0.6039215686274509,0.11764705882352941,D.q)
B.d9W=w([F.fz,B.bgG],x.O)
B.c30=new C.a9(D.ay,D.aE,D.x,B.d9W,null,null)
B.bou=new C.u(1,0.0392156862745098,0.058823529411764705,0.1803921568627451,D.q)
B.brh=new C.u(1,0.1411764705882353,0.08235294117647059,0.3215686274509804,D.q)
B.cLM=w([E.afM,B.bou,B.brh],x.O)
B.c3I=new C.a9(D.b4,D.b7,D.x,B.cLM,null,null)
B.d6r=w([E.jL,E.LQ,E.jL],x.O)
B.arc=new C.a9(D.a5,D.a8,D.x,B.d6r,null,null)
B.blU=new C.u(1,0.8901960784313725,0.9254901960784314,0.9803921568627451,D.q)
B.d4T=w([D.c,B.blU],x.O)
B.c4Y=new C.a9(D.b4,D.b7,D.x,B.d4T,null,null)
B.bsd=new C.u(1,0.07058823529411765,0.22745098039215686,0.47843137254901963,D.q)
B.cZd=w([E.jL,B.bsd],x.O)
B.c58=new C.a9(D.ay,D.aE,D.x,B.cZd,null,null)
B.do6=w([D.cq,D.df],x.O)
B.zd=new C.a9(D.b4,D.b7,D.x,B.do6,null,null)
B.ciU=w([E.jL,E.LQ],x.O)
B.c5n=new C.a9(D.a5,D.a8,D.x,B.ciU,null,null)
B.eef={ground:0}
B.Jy=new C.dF(B.eef,1,x.M)
B.w7=new A.fM(25,"Green screw: GROUND",B.Jy,"The bare copper ground goes on the green screw.",!1,"ground")
B.eev={lineA:0}
B.f32=new C.dF(B.eev,1,x.M)
B.bJl=new A.fM(23,"LINE screw 1 (top left)",B.f32,"Hot leg 1 from the panel goes on the top left screw.",!1,"hot")
B.eew={lineB:0}
B.f2R=new C.dF(B.eew,1,x.M)
B.bJd=new A.fM(21,"LINE screw 2 (top right)",B.f2R,"Hot leg 2 from the panel goes on the top right screw.",!1,"hot")
B.eey={loadA:0}
B.f31=new C.dF(B.eey,1,x.M)
B.bIV=new A.fM(24,"LOAD screw 1 (bottom left)",B.f31,"Hot leg 1 to the heater goes on the bottom left screw: it is switched through from the top left one.",!1,"hot")
B.eeA={loadB:0}
B.f3A=new C.dF(B.eeA,1,x.M)
B.bJ5=new A.fM(22,"LOAD screw 2 (bottom right)",B.f3A,"Hot leg 2 to the heater goes on the bottom right screw.",!1,"hot")
B.c5I=w([B.w7,B.bJl,B.bJd,B.bIV,B.bJ5],x.r)
B.c5M=w(["flange","wax","toilet","bolts","valve","hosehot","hosecold","faucet","tail","trap","arm"],x.s)
B.a32=w([0,0,0,0],x.t)
B.c5X=w([0,0,0,1],x.k)
B.ceZ=w([139,161],x.n)
B.cf5=w([145,158],x.n)
B.ciM=w([U.qG,A2.TC,R.lo,Y.aP0],x.f)
B.ciY=w([1,1,1],x.k)
B.ciZ=w([1,1,1,1],x.k)
B.h8Z=new A.q(-57.8,-32,0)
B.b6F=new A.z8(0,"Outlet spot 1",!1,B.h8Z,"low")
B.h9K=new A.q(-9.8,-32,0)
B.b6C=new A.z8(1,"Outlet spot 2",!1,B.h9K,"low")
B.hag=new A.q(38.2,-32,0)
B.b6I=new A.z8(2,"Outlet spot 3",!1,B.hag,"low")
B.h8A=new A.q(-25.8,0,0)
B.b6G=new A.z8(3,"Switch spot 1",!1,B.h8A,"switch")
B.h9E=new A.q(22.2,0,0)
B.b6E=new A.z8(4,"Switch spot 2",!1,B.h9E,"switch")
B.hbK=new A.q(-30,48,40)
B.b6H=new A.z8(5,"Ceiling light spot",!0,B.hbK,"light")
B.h1f=new A.q(30,48,40)
B.b6D=new A.z8(6,"Ceiling fan spot",!0,B.h1f,"fan")
B.uD=w([B.b6F,B.b6C,B.b6I,B.b6G,B.b6E,B.b6H,B.b6D],C.aw("O<z8>"))
B.exx=new C.z(4,6)
B.ey3=new C.z(5,7)
B.eys=new C.z(6,8)
B.cjp=w([R.lo,Ag.v5,E.Tz,E.TA,B.exx,B.ey3,B.eys],C.aw("O<+(H,H)>"))
B.cjs=w([2],x.t)
B.cqc=w(["The living room has no power: find the tripped breaker in the panel and reset it.","The kitchen sink drips: pick the wrench and tighten the slip nut under the sink. (Build the house up to Fixtures to see the problems.)"],x.s)
B.ha_=new A.q(11,4.6,-6)
B.h4G=new A.q(11,5.4,-7.85)
B.h9h=new A.q(3.4,5.4,-7.85)
B.aWH=new A.q(3.4,3.4,-7.85)
B.cqe=w([B.ha_,B.h4G,B.h9h,B.aWH],x.o)
B.cqX=w([3],x.t)
B.cr6=w([300,800,1300,1800],x.n)
B.ct6=w([32,80],x.n)
B.hkM=new A.hn(0,0.7,2.2,2,0,0,0)
B.hkB=new A.hn(3,0.1,0.95,-0.42,-0.3,-0.2,0.05)
B.hkV=new A.hn(6.5,0,0.9,-0.38,0.3,0.2,0.05)
B.hl3=new A.hn(9.5,-0.9,1.15,0.1,0,0,0)
B.hl0=new A.hn(12.5,-1.7,1.45,1.6,0,0,0)
B.hkA=new A.hn(15.5,-2.8,1,-0.35,0,0,0)
B.hkU=new A.hn(18.5,-3.6,0.9,0.05,0,0,0)
B.hkY=new A.hn(21.5,-4.6,1.5,1.5,0,0,0)
B.hkN=new A.hn(24.5,-5.4,0.9,-0.4,0,0,0)
B.hl5=new A.hn(27.5,-6.28,0.75,0.05,0,0,0)
B.hkO=new A.hn(30,-6,2.4,1.7,0,0,0)
B.d3j=w([B.hkM,B.hkB,B.hkV,B.hl3,B.hl0,B.hkA,B.hkU,B.hkY,B.hkN,B.hl5,B.hkO],x.x)
B.hkE=new A.hn(0,-3.14,1.2,-0.3,0,0,0)
B.hkx=new A.hn(4,-2.2,1.1,0,0,0,0)
B.hl4=new A.hn(8,-1.2,1,0.4,0,0,0)
B.hkC=new A.hn(12,-0.4,1,0.9,0,0,0)
B.hkF=new A.hn(15,0.1,0.85,1.7,0,0,0)
B.hkw=new A.hn(18,0.3,0.8,0,0,0,0)
B.hkD=new A.hn(21,0,0.9,-0.2,0.35,0.25,0)
B.hkJ=new A.hn(24,0.6,1.4,0.1,-0.2,0,0)
B.hkK=new A.hn(27,1.4,1.2,0.8,0,0,0)
B.hkI=new A.hn(30,2.4,2.3,1.5,0,0,0)
B.daA=w([B.hkE,B.hkx,B.hl4,B.hkC,B.hkF,B.hkw,B.hkD,B.hkJ,B.hkK,B.hkI],x.x)
B.hkG=new A.hn(0,0.3,2.6,0.5,0,0,0)
B.hl_=new A.hn(3,0.1,1,0,0,0,0)
B.hl2=new A.hn(6,0,0.95,0.05,0.2,0.15,0)
B.hkR=new A.hn(9,-0.8,1.6,0.3,0,0,0)
B.hkW=new A.hn(12,-1.57,1,-0.2,0,0,0)
B.hkP=new A.hn(15,-2.4,1.5,0.9,0,0,0)
B.hkT=new A.hn(18,-3.14,1,0.1,0,0,0)
B.hkL=new A.hn(21,-3.9,1.5,0.6,0,0,0)
B.hl6=new A.hn(24,-4.71,1,-0.3,0,0,0)
B.hky=new A.hn(27,-5.5,1.3,0.5,0,0,0)
B.hkv=new A.hn(30,-6.28,2.6,0.9,0,0,0)
B.cGP=w([B.hkG,B.hl_,B.hl2,B.hkR,B.hkW,B.hkP,B.hkT,B.hkL,B.hl6,B.hky,B.hkv],x.x)
B.hkZ=new A.hn(0,0,0.5,3.5,0,0,0)
B.hkz=new A.hn(4,0.2,1,-0.3,0,0,0)
B.hl1=new A.hn(8,1,1,0,0,0,0)
B.hkt=new A.hn(12,1.57,1.2,0.3,0,0,0)
B.hkX=new A.hn(16,3.14,1.4,1.2,0,0,0)
B.hku=new A.hn(20,3.5,0.9,-0.35,0,0,0)
B.hkH=new A.hn(24,4.7,1.1,0,0,0,0)
B.hkQ=new A.hn(28,6,1,0.3,0,0,0)
B.hkS=new A.hn(30,6.3,2.2,1.4,0,0,0)
B.d2Y=w([B.hkZ,B.hkz,B.hl1,B.hkt,B.hkX,B.hku,B.hkH,B.hkQ,B.hkS],x.x)
B.cvr=w([B.d3j,B.daA,B.cGP,B.d2Y],C.aw("O<ai<hn>>"))
B.cvs=w([380,820,1420,1660],x.n)
B.eeI={neutral:0}
B.Jz=new C.dF(B.eeI,1,x.M)
B.bJc=new A.fM(23,"Silver screw (top): NEUTRAL",B.Jz,y.G,!1,"neutral")
B.bIM=new A.fM(24,"Silver screw (bottom): NEUTRAL",B.Jz,y.G,!1,"neutral")
B.eeY={switched:0}
B.f3F=new C.dF(B.eeY,1,x.M)
B.bIK=new A.fM(21,"Brass screw (top): SWITCHED hot",B.f3F,"The top half is the switched one: the red wire that comes back from the wall switch goes here.",!1,"hot")
B.edV={always:0}
B.f2O=new C.dF(B.edV,1,x.M)
B.bJ8=new A.fM(22,"Brass screw (bottom): ALWAYS hot",B.f2O,"The bottom half is always on: the black wire straight from the panel goes here.",!1,"hot")
B.cwF=w([B.w7,B.bJc,B.bIM,B.bIK,B.bJ8],x.r)
B.eNR=new C.z(-820,640)
B.ez5=new C.z(820,640)
B.cwK=w([B.eNR,B.ez5],x.f)
B.hrU=new A.pB(0,-80,66,24)
B.hrV=new A.pB(1,20,48,20)
B.hs2=new A.pB(2,20,98,20)
B.hs3=new A.pB(3,20,148,20)
B.cx9=w([B.hrU,B.hrV,B.hs2,B.hs3],x.X)
B.D2=w([],x.m)
B.b0H=new A.r9("highway","\ud83d\udee3\ufe0f","Highway board","Huge and wide, on two thick poles, with a walkway under it",420,170,150,B.D2,0,1)
B.b0E=new A.r9("tower","\ud83d\uddfc","Tall tower sign","A big sign high up on one very thick pole",400,210,270,B.D2,0,1)
B.b0K=new A.r9("neon","\ud83c\udf03","Neon board","A big black board with a glowing neon edge",380,190,120,B.D2,0,1)
B.b0J=new A.r9("roof","\ud83c\udfe0","Rooftop board","A tall house with two big TVs, the NGMY carpet on its back, and a huge board on its roof",460,180,308,B.D2,800,1)
B.b0D=new A.r9("screen","\ud83d\udcfa","Big screen","A giant TV screen on a stand",440,250,60,B.D2,0,1)
B.b0L=new A.r9("gate","\ud83d\udeaa","Town gate","A huge arch with the board across it",600,200,200,B.D2,0,1)
B.b0p=new A.lD(-420,140,0.35,0,1)
B.b0n=new A.lD(460,-420,-0.3,160,1.35)
B.d1b=w([B.b0p,B.b0n],x.m)
B.b0C=new A.r9("duo","\ud83e\udea7","Two far apart","Two separate boards: a near one and a taller one far behind it",320,160,140,B.d1b,0,0.7)
B.b0i=new A.lD(-460,0,0,0,1)
B.b0q=new A.lD(460,0,0,0,1)
B.dmA=w([B.b0i,B.acq,B.b0q],x.m)
B.b0N=new A.r9("line3","\u2194\ufe0f","Three in a row","Three separate boards standing in one straight line",300,150,150,B.dmA,0,0.6)
B.b0g=new A.lD(-950,250,0.5,0,1)
B.b0f=new A.lD(150,-700,-0.2,220,1.55)
B.b0j=new A.lD(1000,60,-0.55,0,0.9)
B.cSb=w([B.b0g,B.b0f,B.b0j],x.m)
B.b0F=new A.r9("far3","\ud83d\udef0\ufe0f","Three scattered far","Three separate boards far from each other, one of them tall and far behind",320,160,140,B.cSb,0,0.6)
B.b0v=new A.lD(-360,300,0.15,0,1)
B.b0k=new A.lD(360,300,-0.15,0,1)
B.b0s=new A.lD(0,-120,0,100,1.25)
B.b0m=new A.lD(-160,-640,0.1,260,1.6)
B.c6p=w([B.b0v,B.b0k,B.b0s,B.b0m],x.m)
B.b0I=new A.r9("skyline","\ud83c\udf06","Skyline","Four separate boards, the taller ones standing behind the shorter ones",300,150,130,B.c6p,0,0.6)
B.b0e=new A.lD(-440,160,0,0,1)
B.b0t=new A.lD(0,160,0,0,1)
B.b0d=new A.lD(440,160,0,0,1)
B.b0u=new A.lD(-440,-420,3.141592653589793,130,1.2)
B.b0h=new A.lD(0,-420,3.141592653589793,130,1.2)
B.b0r=new A.lD(440,-420,3.141592653589793,130,1.2)
B.dof=w([B.b0e,B.b0t,B.b0d,B.b0u,B.b0h,B.b0r],x.m)
B.b0G=new A.r9("lines6","\ud83d\udee4\ufe0f","Two lines of three","Six separate boards: a straight line of three facing front, and a taller line of three behind it facing back",280,140,140,B.dof,0,0.6)
B.b0o=new A.lD(0,300,0,0,1)
B.b0b=new A.lD(0,-300,3.141592653589793,0,1)
B.b0l=new A.lD(-560,0,-1.5707963267948966,0,1)
B.b0c=new A.lD(560,0,1.5707963267948966,0,1)
B.dti=w([B.b0o,B.b0b,B.b0l,B.b0c],x.m)
B.b0M=new A.r9("scatter","\ud83c\udf10","Billboard park","Four separate boards: one at the front, one at the back and one on each side, all facing out",320,160,150,B.dti,0,0.6)
B.a3w=w([B.b0H,B.b0E,B.b0K,B.b0J,B.b0D,B.b0L,B.b0C,B.b0N,B.b0F,B.b0I,B.b0G,B.b0M],C.aw("O<r9>"))
B.dAf=new A.i8(-134,-36,16,44)
B.dA2=new A.i8(34,118,30,66)
B.dA3=new A.i8(34,118,80,116)
B.dA1=new A.i8(34,118,130,166)
B.dAg=new A.i8(-134,-76,140,160)
B.cxd=w([B.dAf,B.dA2,B.dA3,B.dA1,B.dAg],x.T)
B.cxg=w([y.O,y.x,y.R,"Fasten the single black feed from the panel to the FEED screw (it powers both switches through a joined tab).","Fasten the black wire to the first light to the screw of switch 1.","Fasten the black wire to the second light to the screw of switch 2.",y.b,y.n],x.s)
B.eNB=new C.z(-600,1250)
B.eNz=new C.z(-520,1260)
B.eNx=new C.z(-460,1250)
B.exP=new C.z(520,1280)
B.eyc=new C.z(600,1270)
B.eNl=new C.z(-300,1300)
B.cC8=w([B.eNB,B.eNz,B.eNx,B.exP,B.eyc,B.eNl],x.f)
B.cCA=w([460,900,1500,1740],x.n)
B.bhM=new C.u(1,0.5411764705882353,0.35294117647058826,0.23529411764705882,D.q)
B.aft=new C.u(1,0.10588235294117647,0.07058823529411765,0.06274509803921569,D.q)
B.bs6=new C.u(1,0.8509803921568627,0.27450980392156865,0.49411764705882355,D.q)
B.aeh=new C.u(1,0.23137254901960785,0.24705882352941178,0.3607843137254902,D.q)
B.epK=new A.tK(B.bhM,B.aft,B.bs6,B.aeh,"xbot",!1,0,1)
B.f0n=new A.Ft(0,"Ama",0,2,B.epK,"A nurse who works nights.")
B.bjT=new C.u(1,0.4196078431372549,0.27058823529411763,0.18823529411764706,D.q)
B.bgW=new C.u(1,0.08627450980392157,0.06274509803921569,0.06274509803921569,D.q)
B.bpu=new C.u(1,0.1803921568627451,0.5607843137254902,0.3568627450980392,D.q)
B.epO=new A.tK(B.bjT,B.bgW,B.bpu,B.Lz,"soldier",!1,0,1)
B.f0l=new A.Ft(1,"Joseph",1,2,B.epO,"A student who is always hungry.")
B.bnu=new C.u(1,0.6274509803921569,0.4196078431372549,0.2784313725490196,D.q)
B.bi4=new C.u(1,0.2901960784313726,0.24705882352941178,0.4196078431372549,D.q)
B.epP=new A.tK(B.bnu,B.M6,D.aC,B.bi4,"xbot",!1,0,1)
B.f0p=new A.Ft(2,"Grace",3,4,B.epP,"A teacher who marks papers late.")
B.aev=new C.u(1,0.8784313725490196,0.6431372549019608,0.48627450980392156,D.q)
B.aix=new C.u(1,0.1843137254901961,0.43529411764705883,0.7098039215686275,D.q)
B.epM=new A.tK(B.aev,D.agx,B.aix,B.Lz,"soldier",!1,0,1)
B.f0m=new A.Ft(3,"Daniel",6,8,B.epM,"A driver who sleeps in the day.")
B.bq7=new C.u(1,0.788235294117647,0.5450980392156862,0.3686274509803922,D.q)
B.big=new C.u(1,0.16862745098039217,0.17647058823529413,0.22745098039215686,D.q)
B.epI=new A.tK(B.bq7,B.aft,D.aD,B.big,"xbot",!1,0,1)
B.f0r=new A.Ft(4,"Fatima",7,8,B.epI,"A baker who gets up at four.")
B.aio=new C.u(1,0.47843137254901963,0.29411764705882354,0.18823529411764706,D.q)
B.boD=new C.u(1,0.24705882352941178,0.22745098039215686,0.2,D.q)
B.epL=new A.tK(B.aio,D.e4,D.d1,B.boD,"soldier",!1,0,1)
B.f0o=new A.Ft(5,"Papa Moses",10,-1,B.epL,"The oldest in the house. He watches TV all day.")
B.bmi=new C.u(1,0.5490196078431373,0.3568627450980392,0.23137254901960785,D.q)
B.epN=new A.tK(B.bmi,B.agn,D.aw,B.aeh,"xbot",!1,0,1)
B.f0q=new A.Ft(6,"Mama Rose",9,-1,B.epN,"Cooks for everybody in the kitchen.")
B.CK=w([B.f0n,B.f0l,B.f0p,B.f0m,B.f0r,B.f0o,B.f0q],C.aw("O<Ft>"))
B.cEx=w([50,130],x.n)
B.cEy=w([50,140],x.n)
B.cFk=w([51,52,53],x.t)
B.eDh=new C.z(-9.5,4.6)
B.eFK=new C.z(-5.9,2.3)
B.eLO=new C.z(8.8,4.4)
B.cGB=w([B.eDh,B.eFK,B.eLO],x.f)
B.cGY=w([5,35],x.n)
B.cHy=w([61,63],x.t)
B.cHL=w([62,64],x.t)
B.cIL=w([68,172],x.n)
B.bh1=new C.u(1,0.6039215686274509,0.30980392156862746,0.30980392156862746,D.q)
B.bsf=new C.u(1,0.30980392156862746,0.47843137254901963,0.3686274509803922,D.q)
B.zg=w([B.nV,B.Yk,B.bh1,B.bsf,B.agT,D.je],x.O)
B.boK=new C.u(1,0.23137254901960785,0.07058823529411765,0.07058823529411765,D.q)
B.bif=new C.u(1,0.23137254901960785,0.1843137254901961,0.0392156862745098,D.q)
B.bfh=new C.u(1,0.043137254901960784,0.1803921568627451,0.09019607843137255,D.q)
B.cJC=w([B.boK,B.bif,B.bfh],x.O)
B.th=new A.jA("ground","Bare copper \xb7 ground",B.vN,D.c,"ground")
B.tO=new C.u(1,0.14901960784313725,0.14901960784313725,0.16470588235294117,D.q)
B.hgK=new A.jA("feed","Black \xb7 hot feed from the panel",B.tO,D.c,"hot")
B.Md=new C.u(1,0.22745098039215686,0.1803921568627451,0.1803921568627451,D.q)
B.hgF=new A.jA("loadA","Black \xb7 to light 1",B.Md,D.c,"hot")
B.bew=new C.u(1,0.16862745098039217,0.16862745098039217,0.2,D.q)
B.hgH=new A.jA("loadB","Black \xb7 to light 2",B.bew,D.c,"hot")
B.cK9=w([B.th,B.hgK,B.hgF,B.hgH],x.d)
B.axh=w([72,73,74,75],x.t)
B.eNi=new C.z(-25,-15)
B.ev9=new C.z(25,-15)
B.eNh=new C.z(-25,15)
B.ev8=new C.z(25,15)
B.cO5=w([B.eNi,B.ev9,B.eNh,B.ev8],x.f)
B.h4h=new A.q(-125,292,-114.5)
B.h7I=new A.q(125,292,-114.5)
B.hal=new A.q(125,208,-114.5)
B.h7p=new A.q(-125,208,-114.5)
B.cOm=w([B.h4h,B.h7I,B.hal,B.h7p],x.o)
B.bIw=new A.pR("wall","Whole-wall TV","\ud83c\udfac",0,!0)
B.bIE=new A.pR("tv200",'Cinema 200"',"\ud83c\udfac",175,!1)
B.bIz=new A.pR("tv150",'Cinema 150"',"\ud83c\udfac",130,!1)
B.bIA=new A.pR("bangtv",'Beovision TV 77"',"\ud83d\udcfa",66,!1)
B.bIv=new A.pR("sonytv",'Sony Bravia 75"',"\ud83d\udcfa",64,!1)
B.bIF=new A.pR("lgtv",'LG OLED 65"',"\ud83d\udcfa",56,!1)
B.bIy=new A.pR("tv",'Samsung Neo QLED 55"',"\ud83d\udcfa",48,!1)
B.bID=new A.pR("appletv",'Apple TV 4K 50"',"\ud83d\udcfa",44,!1)
B.bIC=new A.pR("lamp","Table lamp","\ud83d\udca1",0,!1)
B.bIB=new A.pR("toaster","Toaster","\ud83c\udf5e",0,!1)
B.bIx=new A.pR("hairdryer","Hair dryer","\ud83d\udc87",0,!1)
B.a3P=w([B.bIw,B.bIE,B.bIz,B.amn,B.bIA,B.bIv,B.bIF,B.bIy,B.bID,B.bIC,B.bIB,B.bIx],C.aw("O<pR>"))
B.cOx=w([y.O,y.x,y.R,y.N,y.E,y.k,y.b,y.n],x.s)
B.bhr=new C.u(1,0.7764705882352941,0.5254901960784314,0.25882352941176473,D.q)
B.bin=new C.u(1,0.43529411764705883,0.2901960784313726,0.1803921568627451,D.q)
B.bpF=new C.u(1,0.6627450980392157,0.44313725490196076,0.29411764705882354,D.q)
B.axz=w([F.mC,B.bhr,E.afs,B.bin,B.bpF],x.O)
B.cVU=w([y.O,"Two cables come into the box: one from the breaker panel (LINE) and one going to the light (LOAD).","Twist the two white wires together with a wire nut. A switch does not cut the neutral.",y.R,"Fasten the black wire from the panel to one BRASS screw.","Fasten the black wire that goes to the light to the other BRASS screw.","Push the switch into the box, put the plate on and test with the power on."],x.s)
B.etT=new C.z(0,330)
B.eN8=new C.z(-120,1080)
B.eum=new C.z(120,1080)
B.eNj=new C.z(-300,1000)
B.evx=new C.z(300,1000)
B.eNL=new C.z(-700,800)
B.eyB=new C.z(700,800)
B.cWi=w([B.etT,B.eN8,B.eum,B.eNj,B.evx,B.eNL,B.eyB],x.f)
B.cWo=w(["Walnut","Blue grey","Brick red","Sage green","Sand","Charcoal"],x.s)
B.jW=w(["switch","switch2p","switch3","switch4","switchsmart","switchcombo"],x.s)
B.h6c=new A.q(-6.5,7.5,-7.85)
B.h6i=new A.q(-6.5,7.8,-3)
B.cWJ=w([B.h6c,B.h6i],x.o)
B.hh9=new A.FZ("NGMY JOBS","Find work. Get hired. Get paid.",D.aC,D.ij,D.tC)
B.hhh=new A.FZ("NGMY LOANS","Help when you need it most.",D.cV,D.e_,D.vM)
B.hhc=new A.FZ("KISWAHILI SCHOOL","Learn Swahili and English, step by step.",D.bP,D.tz,D.vQ)
B.hhe=new A.FZ("CIVIC REGISTRY","Your family, your community, registered.",D.d3,D.d7,D.nX)
B.hh8=new A.FZ("CORE PROTOCOL","Studios for curious minds.",D.b6,D.jt,D.oY)
B.hhd=new A.FZ("BUILD AND FIX","The Construction Lab: wire it, plumb it.",D.fr,D.hJ,D.tM)
B.hh2=new A.FZ("CREATE WITH NGMY","Videos, slides, bios and books.",D.bB,D.ka,D.pP)
B.cWN=w([B.hh9,B.hhh,B.hhc,B.hhe,B.hh8,B.hhd,B.hh2],C.aw("O<FZ>"))
B.hrR=new A.pB(0,-100,100,24)
B.hrY=new A.pB(1,90,100,24)
B.cWZ=w([B.hrR,B.hrY],x.X)
B.eNV=new C.z(-95,160)
B.eNr=new C.z(-35,175)
B.ezp=new C.z(95,170)
B.cX2=w([B.eNV,B.eNr,B.ezp],x.f)
B.bhW=new C.u(1,0.9176470588235294,0.9490196078431372,0.9686274509803922,D.q)
B.bnr=new C.u(1,0.9647058823529412,0.9098039215686274,0.9098039215686274,D.q)
B.bmn=new C.u(1,0.9529411764705882,0.9215686274509803,0.7843137254901961,D.q)
B.axW=w([B.Bf,B.bhW,B.bnr,B.bmn],x.O)
B.ee3={common:0}
B.f3r=new C.dF(B.ee3,1,x.M)
B.bIU=new A.fM(23,"COMMON screw (the odd one)",B.f3r,"The COMMON screw is the one with a different colour. The black wire that brings the power in, or goes to the light, belongs here.",!1,"hot")
B.ef_={trav1:0,trav2:1}
B.aQA=new C.dF(B.ef_,2,x.M)
B.bJ_=new A.fM(21,"Traveler screw (top)",B.aQA,y.X,!1,"hot")
B.bJe=new A.fM(22,"Traveler screw (bottom)",B.aQA,y.X,!1,"hot")
B.cXe=w([B.w7,B.bIU,B.bJ_,B.bJe],x.r)
B.dAm=new A.i8(-60,60,28,50)
B.dAi=new A.i8(-150,-100,70,170)
B.dzW=new A.i8(100,150,70,170)
B.dAn=new A.i8(-60,-20,156,186)
B.dA0=new A.i8(20,60,156,186)
B.cXt=w([B.dAm,B.dAi,B.dzW,B.dAn,B.dA0],x.T)
B.cXv=w([y.O,"The cable comes in through the top of the box. Strip about 3/4 inch of insulation from each wire.","Fasten the bare copper ground wire to the GREEN screw.","Fasten the white (neutral) wire to a SILVER screw.","Fasten the black (hot) wire to a BRASS screw. Wrap each wire clockwise under its screw.","Fold the wires back and push the outlet into the box.","Put the cover plate on, then turn the power on and test."],x.s)
B.hdx=new A.q(-3.6,7.5,-7.85)
B.h5D=new A.q(-3.6,4.2,-7.85)
B.cXE=w([B.hdx,B.h5D],x.o)
B.cXG=w([-0.5,-0.25,0,0.25,0.5],x.n)
B.eTE=new C.bk(600,400,!0)
B.eTb=new C.bk(1030,400,!0)
B.eTc=new C.bk(1210,400,!0)
B.cY9=w([B.eTE,B.eTb,B.eTc],C.aw("O<+(K,K,R)>"))
B.cYo=w([0,2,1,3,4,6,7,8],x.t)
B.eUh=new C.bk(-0.1,0,0.5)
B.eW8=new C.bk(0.35,-0.4,0.3)
B.eV5=new C.bk(-0.4,0.55,0.35)
B.cYu=w([B.eUh,B.eW8,B.eV5],C.aw("O<+(K,K,K)>"))
B.eN2=new C.z(-1050,"store")
B.aPe=new C.z(-840,"tower")
B.eND=new C.z(-630,"tower")
B.eNt=new C.z(-420,"gasstation")
B.aPd=new C.z(-210,"tower")
B.etX=new C.z(0,"hq")
B.aP1=new C.z(210,"tower")
B.ew5=new C.z(420,"store")
B.eye=new C.z(630,"tower")
B.aP3=new C.z(840,"tower")
B.euc=new C.z(1050,"gasstation")
B.cZ3=w([B.eN2,B.aPe,B.eND,B.eNt,B.aPd,B.etX,B.aP1,B.ew5,B.eye,B.aP3,B.euc],x.d6)
B.a4c=w(["Always switch the breaker OFF and test the wires with a tester before you touch them.","Never use water on an electrical fire: switch the power off at the breaker first.","Reversed hot and neutral can look fine and still be a shock hazard.","A GFCI outlet protects you near water: press TEST every month.","A ceiling fan needs a fan-rated box, because it is heavy and it shakes."],x.s)
B.has=new A.q(9.8,6,-7.85)
B.h4L=new A.q(9.8,7.5,-7.85)
B.hdW=new A.q(-8,7.5,-7.85)
B.h7r=new A.q(-8,1.5,-7.85)
B.cZg=w([B.has,B.h4L,B.hdW,B.h7r],x.o)
B.aWS=new A.q(5,1.8,-7.85)
B.h8o=new A.q(5,-0.1,-7.85)
B.h9s=new A.q(12.5,-0.1,-7.85)
B.d_m=w([B.aWS,B.h8o,B.h9s],x.o)
B.lJ=w(["outlet","gfci","split","v240four","v240three","v240only","isolated"],x.s)
B.fXr=new A.q(3,3.1,-7.1)
B.aWJ=new A.q(3,1.7,-7.1)
B.h9n=new A.q(3,1,-7.1)
B.h0R=new A.q(3.65,0.5,-7.1)
B.h2J=new A.q(4.3,1,-7.1)
B.h8k=new A.q(4.3,1.8,-7.1)
B.hdZ=new A.q(5,1.8,-7.1)
B.d_Q=w([B.fXr,B.aWJ,B.h9n,B.h0R,B.h2J,B.h8k,B.hdZ,B.aWS],x.o)
B.amr=new A.fM(23,"Silver screw W: NEUTRAL",B.Jz,y.I,!1,"neutral")
B.eeh={hot1:0,hot2:1}
B.TZ=new C.dF(B.eeh,2,x.M)
B.bIG=new A.fM(21,"Brass screw X: HOT",B.TZ,y.l,!1,"hot")
B.bJk=new A.fM(22,"Brass screw Y: HOT",B.TZ,y.l,!1,"hot")
B.d00=w([B.w7,B.amr,B.bIG,B.bJk],x.r)
B.d0m=w(["My outlet is dead and it is dark in here. Please come and wire it.","The light in my room does not work, and my phone will not charge. Can you fix the wiring?","I have no power in my room at all. Can an electrician come?"],x.s)
B.eXR=new C.cw([-0.35,-0.2,0.42,0.3])
B.eY3=new C.cw([0.3,0.25,0.32,0.38])
B.eWU=new C.cw([0.05,-0.55,0.22,0.14])
B.eXm=new C.cw([-0.5,0.45,0.2,0.16])
B.d0y=w([B.eXR,B.eY3,B.eWU,B.eXm],x.eV)
B.d0z=w([D.aw,D.be,D.aC,D.d3,D.bO,D.f5],x.O)
B.hdb=new A.q(0.6,11,-3.4)
B.h3D=new A.q(0.6,3.2,-3.2)
B.hcF=new A.q(0.6,2.2,-1.9)
B.h3f=new A.q(0.6,0.7,-1.5)
B.d0Y=w([B.hdb,B.h3D,B.hcF,B.h3f],x.o)
B.d19=w([0,24,-24,48,-48],x.n)
B.KC=new A.jA("neutral","White \xb7 neutral",B.oT,D.av,"neutral")
B.hgt=new A.jA("line","Black \xb7 hot from the panel (LINE)",B.tO,D.c,"hot")
B.hgL=new A.jA("load","Black \xb7 hot to the light (LOAD)",B.Md,D.c,"hot")
B.d1m=w([B.th,B.KC,B.hgt,B.hgL],x.d)
B.ays=w([3,3.6,3.3,2.6],x.n)
B.d1D=w([y.O,y.x,y.R,"Fasten the white NEUTRAL wire to the NEUTRAL (silver) screw. A regular switch never touches the neutral, this one does.","Fasten the black wire from the panel to the LINE screw.","Fasten the black wire that goes to the light to the LOAD screw.",y.b,y.n],x.s)
B.eNK=new C.z(-700,330)
B.eyA=new C.z(700,380)
B.eN4=new C.z(-1100,-420)
B.eui=new C.z(1100,-480)
B.eNa=new C.z(-1300,100)
B.eup=new C.z(1350,30)
B.etY=new C.z(0,-900)
B.eNb=new C.z(-1500,-300)
B.euq=new C.z(1550,-200)
B.d1G=w([B.eNK,B.eyA,B.eN4,B.eui,B.eNa,B.eup,B.etY,B.eNb,B.euq],x.f)
B.d1M=w([U.qG,A2.TC,R.lo],x.f)
B.hrT=new A.pB(0,-64,120,26)
B.hrW=new A.pB(1,64,120,26)
B.hs0=new A.pB(2,0,84,24)
B.d2k=w([B.hrT,B.hrW,B.hs0],x.X)
B.h1M=new A.q(0,8.3,0)
B.aWj=new A.q(0,3.9,0)
B.a4m=w([B.h1M,B.aWj],x.o)
B.d2B=w([y.O,"Make sure the box is rated for a fan. A plain light box cannot carry the weight and the shaking.","Join the house ground wire to the fan ground.","Join the house white wire to the fan white wire with a wire nut.","Join the house black wire to the fan black wire with a wire nut.","Push the wires up into the box and fasten the canopy to the ceiling.",y.f],x.s)
B.eM5=new C.z(-3.5,11)
B.eBD=new C.z(3.5,11)
B.ezS=new C.z(-3.5,-11)
B.exr=new C.z(3.5,-11)
B.d2V=w([B.eM5,B.eBD,B.ezS,B.exr],x.f)
B.haR=new A.q(-0.6,11,-3.4)
B.h4S=new A.q(-0.6,3.2,-3.2)
B.h9S=new A.q(-0.6,2.2,-1.9)
B.hek=new A.q(-0.6,0.7,-1.5)
B.d2W=w([B.haR,B.h4S,B.h9S,B.hek],x.o)
B.HV=w(["dog","cat","cow","sheep","chicken","horse"],x.s)
B.eJ7=new C.z(-1.2,0)
B.eRZ=new C.z(1.2,0)
B.d3A=w([B.eJ7,B.eRZ],x.f)
B.d42=w([40,70,100,130,160],x.n)
B.bIW=new A.fM(23,"NEUTRAL screw (silver)",B.Jz,"The electronics inside need the neutral wire to run. White goes on the silver screw.",!1,"neutral")
B.eex={line:0}
B.f3z=new C.dF(B.eex,1,x.M)
B.bJ7=new A.fM(21,"LINE screw (brass, hot in)",B.f3z,"The black wire from the breaker panel goes on the LINE screw.",!1,"hot")
B.eeB={load:0}
B.f2I=new C.dF(B.eeB,1,x.M)
B.bJa=new A.fM(22,"LOAD screw (brass, hot out)",B.f2I,"The black wire that goes to the light goes on the LOAD screw.",!1,"hot")
B.d4c=w([B.w7,B.bIW,B.bJ7,B.bJa],x.r)
B.ekJ=new A.nr("flange","flange","Toilet flange",D.Y,"The flange is fixed to the floor over the drain. Everything else sits on it.",!1,0)
B.dhu=w(["flange"],x.s)
B.ekH=new A.nr("wax","wax","Wax ring",B.dhu,"The wax ring goes on the flange before the toilet. It makes the seal against sewer gas and water.",!1,0)
B.dsz=w(["wax"],x.s)
B.ekE=new A.nr("toilet","toilet","Toilet",B.dsz,"The toilet is lowered straight down onto the wax ring. The ring has to be there first.",!1,0)
B.dqQ=w(["toilet"],x.s)
B.ekI=new A.nr("bolts","bolts","Toilet bolts",B.dqQ,"The two bolts hold the toilet to the flange. Set the toilet first.",!1,2)
B.ekF=new A.nr("tvalve","valve","Toilet shut-off valve",D.Y,"The shut-off valve goes on the pipe that comes out of the wall.",!0,0)
B.dqX=w(["tvalve","toilet"],x.s)
B.ekG=new A.nr("those","hosecold","Toilet supply hose",B.dqX,"The hose joins the valve to the toilet tank, so both must be there first.",!1,2)
B.aKd=new A.nr("faucet","faucet","Faucet",D.Y,"The faucet goes through the hole in the counter.",!1,0)
B.aKg=new A.nr("vhot","valve","Hot shut-off valve (left)",D.Y,y.W,!0,0)
B.aKe=new A.nr("vcold","valve","Cold shut-off valve (right)",D.Y,y.W,!0,0)
B.drX=w(["vhot","faucet"],x.s)
B.aKh=new A.nr("hhot","hosehot","Hot supply hose",B.drX,"The hose joins the hot valve to the faucet, so the valve and the faucet must be there first.",!1,2)
B.drU=w(["vcold","faucet"],x.s)
B.aKf=new A.nr("hcold","hosecold","Cold supply hose",B.drU,"The hose joins the cold valve to the faucet, so the valve and the faucet must be there first.",!1,2)
B.aKc=new A.nr("tail","tail","Tailpiece",D.Y,"The tailpiece hangs from the sink drain. It is the first piece of the drain.",!1,0)
B.dqJ=w(["tail"],x.s)
B.aKi=new A.nr("trap","trap","P-trap",B.dqJ,"The P-trap joins the tailpiece. Build the drain from the top down.",!1,1)
B.dqR=w(["trap"],x.s)
B.aKj=new A.nr("arm","arm","Trap arm",B.dqR,"The trap arm joins the trap and goes into the wall.",!1,1)
B.cZP=w([B.ekJ,B.ekH,B.ekE,B.ekI,B.ekF,B.ekG,B.aKd,B.aKg,B.aKe,B.aKh,B.aKf,B.aKc,B.aKi,B.aKj],x.fI)
B.er8=new A.Xn("bathroom","Bathroom",B.cZP,"Fit out a bathroom: a toilet and a sink with its faucet, supply hoses and drain.")
B.djq=w([B.aKd,B.aKg,B.aKe,B.aKh,B.aKf,B.aKc,B.aKi,B.aKj],x.fI)
B.er9=new A.Xn("kitchen","Kitchen",B.djq,"Fit out a kitchen sink: the faucet, the hot and cold supplies and the drain.")
B.ayO=w([B.er8,B.er9],C.aw("O<Xn>"))
B.eNU=new C.z(-900,400)
B.ezl=new C.z(900,400)
B.eNS=new C.z(-900,1000)
B.ezj=new C.z(900,1000)
B.eNk=new C.z(-300,1260)
B.evy=new C.z(300,1260)
B.eN0=new C.z(-1000,700)
B.eu9=new C.z(1000,700)
B.eNE=new C.z(-640,90)
B.eyf=new C.z(640,90)
B.eNT=new C.z(-900,1400)
B.ezk=new C.z(900,1400)
B.d4H=w([B.eNU,B.ezl,B.eNS,B.ezj,B.eNk,B.evy,B.eN0,B.eu9,B.eNE,B.eyf,B.eNT,B.ezk],x.f)
B.fXo=new A.q(8.2,0.9,-6.3)
B.ha3=new A.q(8.2,-0.1,-6.3)
B.h0a=new A.q(8.2,-0.1,-7.85)
B.d5m=w([B.fXo,B.ha3,B.h0a],x.o)
B.eyb=new C.z(-4.5,10)
B.eOK=new C.z(4.5,10)
B.eRX=new C.z(-4.5,-10)
B.eOG=new C.z(4.5,-10)
B.d5y=w([B.eyb,B.eOK,B.eRX,B.eOG],x.f)
B.d5z=w([-0.28,0.28],x.n)
B.dAp=new A.i8(-70,70,20,44)
B.dAa=new A.i8(-110,-50,80,100)
B.dA5=new A.i8(50,110,80,100)
B.dA9=new A.i8(-110,-50,130,150)
B.dA4=new A.i8(50,110,130,150)
B.d5M=w([B.dAp,B.dAa,B.dA5,B.dA9,B.dA4],x.T)
B.d62=w([D.aw,D.aC,D.be,D.mv,D.d3,D.ce,D.f5],x.O)
B.eHy=new C.z("back","Back wall")
B.eRI=new C.z("left","Left wall")
B.eJK=new C.z("right","Right wall")
B.d6u=w([B.eHy,B.eRI,B.eJK],x.L)
B.edY={black:0}
B.JA=new C.dF(B.edY,1,x.M)
B.bIN=new A.fM(51,"Black wire nut: HOT",B.JA,"The house black wire joins the fixture black wire.",!1,"hot")
B.ef5={white:0}
B.Jx=new C.dF(B.ef5,1,x.M)
B.bJh=new A.fM(52,"White wire nut: NEUTRAL",B.Jx,"The house white wire joins the fixture white wire.",!1,"neutral")
B.bII=new A.fM(53,"Green ground connection",B.Jy,"The bare copper house ground joins the green fixture ground wire.",!1,"ground")
B.d6F=w([B.bIN,B.bJh,B.bII],x.r)
B.eNq=new C.z(-34,-6)
B.evA=new C.z(30,10)
B.eN3=new C.z(-10,24)
B.d6K=w([B.eNq,B.evA,B.eN3],x.f)
B.d6R=w([y.O,y.x,y.R,"Fasten hot leg 1 from the panel (black) to the top LEFT screw.","Fasten hot leg 2 from the panel (red) to the top RIGHT screw.","Fasten hot leg 1 to the heater (black) to the bottom LEFT screw.","Fasten hot leg 2 to the heater (red) to the bottom RIGHT screw.",y.b,y.n],x.s)
B.bHh=new A.Eb("Oak",B.Bu,"wood")
B.bHj=new A.Eb("Dark wood",B.q4,"wood")
B.aip=new C.u(1,0.5529411764705883,0.5647058823529412,0.5882352941176471,D.q)
B.bHl=new A.Eb("Grey carpet",B.aip,"carpet")
B.bq0=new C.u(1,0.3568627450980392,0.4980392156862745,0.6509803921568628,D.q)
B.bHi=new A.Eb("Blue carpet",B.bq0,"carpet")
B.bnq=new C.u(1,0.8470588235294118,0.803921568627451,0.7058823529411765,D.q)
B.bHf=new A.Eb("Cream carpet",B.bnq,"carpet")
B.bHk=new A.Eb("White tile",B.Y4,"tile")
B.bHg=new A.Eb("Slate tile",B.af5,"tile")
B.az9=w([B.bHh,B.bHj,B.bHl,B.bHi,B.bHf,B.bHk,B.bHg],C.aw("O<Eb>"))
B.ab4=new A.jA("hot1","Black \xb7 hot 1",B.tO,D.c,"hot")
B.B1=new C.u(1,0.8196078431372549,0.29411764705882354,0.22745098039215686,D.q)
B.ab5=new A.jA("hot2","Red \xb7 hot 2",B.B1,D.c,"hot")
B.d7B=w([B.KC,B.ab4,B.ab5],x.d)
B.eTJ=new C.bk(-80,100,D.aw)
B.eVC=new C.bk(80,100,D.be)
B.eUL=new C.bk(-80,150,D.aC)
B.d7D=w([B.eTJ,B.eVC,B.eUL],x.dV)
B.hrP=new A.pB(0,0,78,26)
B.d7L=w([B.hrP],x.X)
B.eeX={store:0,gasstation:1}
B.f3B=new C.dF(B.eeX,2,x.M)
B.buB=new A.zd("food","\ud83c\udf54","Food",B.f3B)
B.eeU={shop:0,store:1}
B.f3a=new C.dF(B.eeU,2,x.M)
B.buA=new A.zd("groceries","\ud83d\uded2","Groceries",B.f3a)
B.eeg={hospital:0}
B.f35=new C.dF(B.eeg,1,x.M)
B.buD=new A.zd("medicine","\ud83d\udc8a","Medicine",B.f35)
B.eej={hq:0,tower:1}
B.f3x=new C.dF(B.eej,2,x.M)
B.buz=new A.zd("package","\ud83d\udce6","Package",B.f3x)
B.eds={school:0,firestation:1,hq:2}
B.f2T=new C.dF(B.eds,3,x.M)
B.buC=new A.zd("letters","\u2709\ufe0f","Letters",B.f2T)
B.R3=w([B.buB,B.buA,B.buD,B.buz,B.buC],C.aw("O<zd>"))
B.d8_=w([y.O,y.x,"Fasten the white neutral to a SILVER screw.","Fasten the black hot to a BRASS screw.","Fasten the green wire with the yellow stripe (the isolated ground, which runs all the way to the panel) to the GREEN screw with the orange triangle. The box itself is grounded with its own bare copper wire.",y.b,y.n],x.s)
B.d86=w([-1000,-500,0,500,1000],x.n)
B.h9T=new A.q(3,3.2,-7.85)
B.hem=new A.q(3,4,-7.85)
B.hdy=new A.q(3,4.2,-7.4)
B.fZx=new A.q(3,3.95,-7)
B.d95=w([B.h9T,B.hem,B.hdy,B.fZx],x.o)
B.d97=w(["The sink leaks and there is water on the floor. Please fix the plumbing.","The toilet is not connected and the water is running everywhere. Help!","There is no water at my sink and the pipes are open. Can a plumber come?"],x.s)
B.Xv=new C.u(1,0.23137254901960785,0.3568627450980392,0.47843137254901963,D.q)
B.d9i=w([D.al,B.Xv,D.bM,D.br],x.O)
B.f45=new A.rM("apple","\ud83c\udf4e","Apple","A little energy",3,0.12,0,0.1,!1)
B.f46=new A.rM("water","\ud83d\udca7","Water","Quenches your thirst",2,0,0,0.8,!1)
B.f47=new A.rM("juice","\ud83e\udd64","Juice","Some energy and a drink",4,0.18,0,0.5,!1)
B.f4c=new A.rM("sandwich","\ud83e\udd6a","Sandwich","A good bit of energy",6,0.3,0,0,!1)
B.f44=new A.rM("meal","\ud83c\udf54","Burger meal","Lots of energy",10,0.55,0,0,!1)
B.d9l=w([B.f45,B.f46,B.f47,B.f4c,B.f44],x.y)
B.eNF=new C.z(-660,340)
B.eNn=new C.z(-330,340)
B.evB=new C.z(330,340)
B.eyh=new C.z(660,340)
B.eNG=new C.z(-660,500)
B.eNo=new C.z(-330,500)
B.evC=new C.z(330,500)
B.eyi=new C.z(660,500)
B.eNH=new C.z(-660,780)
B.eNp=new C.z(-330,780)
B.evE=new C.z(330,780)
B.eyj=new C.z(660,780)
B.eNy=new C.z(-500,940)
B.exM=new C.z(500,940)
B.d9Y=w([B.eNF,B.eNn,B.evB,B.eyh,B.eNG,B.eNo,B.evC,B.eyi,B.eNH,B.eNp,B.evE,B.eyj,B.eNy,B.exM],x.f)
B.haw=new A.q(6,0.2,0)
B.h8P=new A.q(6,2.6,0)
B.aXl=new A.q(8.6,2.6,0)
B.das=w([B.haw,B.h8P,B.aXl],x.o)
B.daY=w([D.c,D.dt,D.et,D.eP,D.bN,D.bL],x.O)
B.eNO=new C.z(-7,-7)
B.eyQ=new C.z(7,-7)
B.eNN=new C.z(-7,7)
B.eyP=new C.z(7,7)
B.dbc=w([B.eNO,B.eyQ,B.eNN,B.eyP],x.f)
B.dbe=w([-2.4,2.4],x.n)
B.dbf=w([-0.5,0,0.5],x.n)
B.amq=new A.fM(21,"Brass screw X: HOT",B.TZ,y.p,!1,"hot")
B.amo=new A.fM(22,"Brass screw Y: HOT",B.TZ,y.p,!1,"hot")
B.dbq=w([B.w7,B.amq,B.amo],x.r)
B.hgQ=new A.PS("Black","Hot (line or switched)","Brass terminal","120 V branch circuit","Carries the power from the breaker. Treat it as live until it is tested dead.","Can be a traveler in a three-way switch, or a switched hot. Verify with a tester.")
B.hgO=new A.PS("Red","Hot (second hot or traveler)","Brass or the marked traveler terminal","Switch legs, travelers, fan and light controls","Often the switched wire to a fan or light, or a traveler.","Check the diagram: red can be a traveler or a second circuit.")
B.hgN=new A.PS("White","Neutral","Silver terminal","120 V branch circuit","The return path for the current. It can still be live if something is wrong.","In a switch loop a white wire can be re-marked as a hot. A white wire is not always neutral.")
B.hgM=new A.PS("Bare copper or green","Equipment ground","Green screw or the ground lead","Every grounded device","Not for current in normal use. It is the safety path if a fault happens.","Never use the neutral as a ground. Older homes may have no ground at all: that needs verification.")
B.hgP=new A.PS("Gray / blue / others","Depends on the installation","See the device diagram","Low voltage, control wires, other systems","Do not guess what a wire does from its color.","Colors and their meaning are not the same everywhere. REQUIRES VERIFICATION.")
B.dbu=w([B.hgQ,B.hgO,B.hgN,B.hgM,B.hgP],C.aw("O<PS>"))
B.Rb=w([-1.6,1.6],x.n)
B.hgr=new A.jA("blackLine","Black \xb7 from the breaker",B.tO,D.c,"hot")
B.hgI=new A.jA("blackLoad","Black \xb7 to the light",B.Md,D.c,"hot")
B.dbD=w([B.hgr,B.hgI,B.th],x.d)
B.dbV=w([0,10,22,36,52],x.n)
B.hrS=new A.pB(0,-60,130,26)
B.hrX=new A.pB(1,80,56,22)
B.dbW=w([B.hrS,B.hrX],x.X)
B.dcl=w([D.bo,D.bG,D.aw,D.aQ,D.br],x.O)
B.eeo={isoground:0}
B.f2M=new C.dF(B.eeo,1,x.M)
B.bJg=new A.fM(25,"Isolated-ground screw (green, orange triangle)",B.f2M,"The dedicated ground wire goes on the green screw with the orange triangle. It does not touch the box or the strap.",!1,"ground")
B.bJ9=new A.fM(23,"Silver screw: NEUTRAL",B.Jz,y.c,!1,"neutral")
B.eei={hot:0}
B.a8K=new C.dF(B.eei,1,x.M)
B.bIR=new A.fM(21,"Brass screw: HOT",B.a8K,y.u,!1,"hot")
B.dcw=w([B.bJg,B.bJ9,B.bIR],x.r)
B.bep=new C.u(1,0.9294117647058824,0.9019607843137255,0.8392156862745098,D.q)
B.bco=new C.u(1,0.9137254901960784,0.8274509803921568,0.8274509803921568,D.q)
B.bbz=new C.u(1,0.8352941176470589,0.8941176470588236,0.8156862745098039,D.q)
B.agC=new C.u(1,0.9529411764705882,0.8901960784313725,0.6549019607843137,D.q)
B.bhd=new C.u(1,0.7254901960784313,0.7647058823529411,0.8666666666666667,D.q)
B.bq9=new C.u(1,0.5607843137254902,0.6392156862745098,0.6588235294117647,D.q)
B.azq=w([B.bep,B.XQ,B.bco,B.bbz,B.agC,B.bhd,B.agH,B.bq9],x.O)
B.edX={blackLine:0,blackLoad:1}
B.aQj=new C.dF(B.edX,2,x.M)
B.bIX=new A.fM(21,"Brass screw (top)",B.aQj,y.v,!1,"hot")
B.bIJ=new A.fM(22,"Brass screw (bottom)",B.aQj,y.v,!1,"hot")
B.amp=new A.fM(25,"Green screw: GROUND",B.Jy,y.Z,!1,"ground")
B.dd6=w([B.bIX,B.bIJ,B.amp],x.r)
B.eNQ=new C.z(-80,90)
B.ez3=new C.z(80,90)
B.eNP=new C.z(-80,140)
B.ez2=new C.z(80,140)
B.ddP=w([B.eNQ,B.ez3,B.eNP,B.ez2],x.f)
B.bJi=new A.fM(51,"Black wire nut: HOT",B.JA,"The house black wire joins the fan black wire.",!1,"hot")
B.bIH=new A.fM(52,"White wire nut: NEUTRAL",B.Jx,"The house white wire joins the fan white wire.",!1,"neutral")
B.bJ3=new A.fM(53,"Green ground connection",B.Jy,"The bare copper house ground joins the green fan ground wire.",!1,"ground")
B.ddW=w([B.bJi,B.bIH,B.bJ3],x.r)
B.bbk=new A.SG("bus",-575,-25,0,1)
B.bbm=new A.SG("police",-575,-25,854,5)
B.bbl=new A.SG("bus",25,575,850,3)
B.bbn=new A.SG("police",25,575,1704,6)
B.km=w([B.bbk,B.bbm,B.bbl,B.bbn],C.aw("O<SG>"))
B.am9=new A.ri(4,"deadOutlet")
B.de3=w([B.a0u,B.a0v,B.NS,B.NT,B.am9,B.a0y,B.a0z,B.a0A,B.a0B,B.a0C,B.a0w,B.a0x],C.aw("O<ri>"))
B.eWN=new C.cw([0,560,240,7])
B.eWO=new C.cw([0,560,300,9])
B.a4B=w([B.eWN,B.eWO],C.aw("O<+(K,K,K,H)>"))
B.hgG=new A.jA("always","Black \xb7 always hot (from the panel)",B.tO,D.c,"hot")
B.hgz=new A.jA("switched","Red \xb7 switched hot (from the wall switch)",B.B1,D.c,"hot")
B.deu=w([B.th,B.KC,B.hgG,B.hgz],x.d)
B.dey=w([y.O,"Find the LINE and LOAD screws. LOAD is covered with yellow tape. Leave it covered unless you feed another outlet.",y.R,"Fasten the white wire to the silver LINE screw.","Fasten the black wire to the brass LINE screw.","Push the GFCI into the box and put the plate on.","Turn the power on, press RESET, then press TEST. It must click off."],x.s)
B.deB=w([y.O,y.x,y.R,"Fasten the black wire (power in, or to the light) to the COMMON screw: the odd-coloured one.","Fasten the first traveler (red) to a TRAVELER screw.","Fasten the second traveler (white wire taped black) to the other TRAVELER screw.",y.b,y.n],x.s)
B.hrQ=new A.pB(0,0,80,26)
B.hrZ=new A.pB(1,90,56,22)
B.deU=w([B.hrQ,B.hrZ],x.X)
B.df3=w(["car","ambulance","firetruck"],x.s)
B.dAo=new A.i8(-62,62,6,46)
B.dAb=new A.i8(-117,-73,149,171)
B.dAl=new A.i8(-57,-13,164,186)
B.dA6=new A.i8(73,117,159,181)
B.dzZ=new A.i8(120,144,140,160)
B.dzX=new A.i8(108,142,48,60)
B.df8=w([B.dAo,B.dAb,B.dAl,B.dA6,B.dzZ,B.dzX],x.T)
B.dfc=w([0.1,8.05],x.n)
B.fZB=new A.q(1000,900,1500)
B.fY9=new A.q(0,200,0)
B.aPc=new C.z(B.fZB,B.fY9)
B.h17=new A.q(300,70,1000)
B.fYu=new A.q(0,250,300)
B.eHQ=new C.z(B.h17,B.fYu)
B.hbx=new A.q(-200,90,780)
B.fYq=new A.q(0,240,300)
B.eDQ=new C.z(B.hbx,B.fYq)
B.hbV=new A.q(-420,520,1000)
B.fYo=new A.q(0,230,300)
B.ezs=new C.z(B.hbV,B.fYo)
B.h3l=new A.q(700,330,900)
B.h15=new A.q(300,230,200)
B.eMz=new C.z(B.h3l,B.h15)
B.fZU=new A.q(1100,80,300)
B.h2t=new A.q(560,250,0)
B.eLy=new C.z(B.fZU,B.h2t)
B.fZK=new A.q(1080,100,-250)
B.h2s=new A.q(560,240,-100)
B.ePs=new C.z(B.fZK,B.h2s)
B.fZA=new A.q(1000,700,-700)
B.h0f=new A.q(200,230,-300)
B.eRE=new C.z(B.fZA,B.h0f)
B.h0g=new A.q(200,90,-860)
B.fYw=new A.q(0,250,-300)
B.eO4=new C.z(B.h0g,B.fYw)
B.hbF=new A.q(-300,110,-820)
B.fYr=new A.q(0,240,-300)
B.eEr=new C.z(B.hbF,B.fYr)
B.hcp=new A.q(-900,600,-600)
B.hbG=new A.q(-300,230,-100)
B.eD1=new C.z(B.hcp,B.hbG)
B.hbg=new A.q(-1100,90,-200)
B.hc0=new A.q(-560,250,0)
B.eRC=new C.z(B.hbg,B.hc0)
B.hbf=new A.q(-1100,120,250)
B.hc_=new A.q(-560,240,0)
B.eHg=new C.z(B.hbf,B.hc_)
B.hc9=new A.q(-700,520,1000)
B.hbc=new A.q(-100,230,100)
B.eB1=new C.z(B.hc9,B.hbc)
B.h0e=new A.q(200,170,1300)
B.fYn=new A.q(0,230,150)
B.eRo=new C.z(B.h0e,B.fYn)
B.dfr=w([B.aPc,B.eHQ,B.eDQ,B.ezs,B.eMz,B.eLy,B.ePs,B.eRE,B.eO4,B.eEr,B.eD1,B.eRC,B.eHg,B.eB1,B.eRo,B.aPc],x.dt)
B.h6K=new A.q(-0.35,11,-3.4)
B.h51=new A.q(-0.35,3.2,-3.2)
B.h8Y=new A.q(-0.35,2.2,-1.9)
B.h38=new A.q(-0.35,0.7,-1.5)
B.dfs=w([B.h6K,B.h51,B.h8Y,B.h38],x.o)
B.hdp=new A.q(5.2,7.5,-7.85)
B.h8K=new A.q(5.2,4,-7.85)
B.dfy=w([B.hdp,B.h8K],x.o)
B.bIQ=new A.fM(21,"LOAD hot (brass, taped)",D.vb,y.P,!0,"load")
B.bIT=new A.fM(22,"LINE hot (brass)",B.JA,"The black (hot) wire from the breaker goes on the brass LINE screw.",!1,"hot")
B.bIP=new A.fM(23,"LOAD neutral (silver, taped)",D.vb,y.P,!0,"load")
B.bJ0=new A.fM(24,"LINE neutral (silver)",B.Jx,"The white (neutral) wire from the breaker goes on the silver LINE screw.",!1,"neutral")
B.dg0=w([B.bIQ,B.bIT,B.bIP,B.bJ0,B.amp],x.r)
B.aX5=new A.q(0,15.5,-3.6)
B.h70=new A.q(0,20,-3.6)
B.he3=new A.q(0,22.5,-2)
B.h4A=new A.q(0,22.5,1.1999999999999997)
B.h7a=new A.q(0,21.1,1.6)
B.dg6=w([B.aX5,B.h70,B.he3,B.h4A,B.h7a],x.o)
B.dgJ=w([],x.bm)
B.I3=w([],x.B)
B.dgI=w([],x.dI)
B.zo=w([],x.E)
B.dgK=w([],x.T)
B.I4=w([],x.z)
B.azS=w([],x.e3)
B.wz=w([],x.a)
B.azR=w([],x.W)
B.rH=w([],x.o)
B.azV=w([],x.h)
B.azU=w([],x.f)
B.hlj=new A.py("outlet","\ud83d\udd0c","Wall outlet","Black to brass, white to silver",D.aC)
B.hld=new A.py("switch","\ud83d\udca1","Light switch","Two blacks and a wire nut",D.aQ)
B.hle=new A.py("gfci","\ud83d\udee1\ufe0f","GFCI outlet","LINE and LOAD near water",D.bt)
B.hlk=new A.py("fan","\ud83c\udf00","Ceiling fan","Black, white, green and a fan box",D.b9)
B.hl8=new A.py("switch2p","\ud83d\udd25","Double-pole switch","240 V: breaks both hot legs",D.ih)
B.hlf=new A.py("switch3","\ud83d\udd00","Three-way switch","Common and two travelers",D.aQ)
B.hlo=new A.py("switch4","\ud83d\udd01","Four-way switch","Between two three-ways",D.cp)
B.hln=new A.py("switchsmart","\ud83d\udcf6","Smart, motion or timer switch","Needs the neutral wire",D.bw)
B.hlg=new A.py("switchcombo","\ud83c\udf9a\ufe0f","Combination switch","Two switches, one feed",D.iQ)
B.hlb=new A.py("split","\ud83c\udf17","Split (half-switched) outlet","Break the tab: switched and always-on",D.aU)
B.hll=new A.py("v240four","\ud83e\uddfa","4-wire 240 V outlet","Dryer, range and EV: two hots, neutral, ground",D.ct)
B.hlm=new A.py("v240three","\ud83d\udd70\ufe0f","3-wire 240 V outlet","Old dryer or range: no separate ground",D.cS)
B.hla=new A.py("v240only","\u2744\ufe0f","240 V only outlet","Window AC, welder: two hots and ground",D.b9)
B.hlh=new A.py("isolated","\ud83c\udfed","Isolated-ground outlet","Its own ground wire to the panel",D.bt)
B.hli=new A.py("ptrap","\ud83e\udea0","Sink drain (P-trap)","Build a drain with a water seal",D.cp)
B.hlc=new A.py("faucet","\ud83d\udeb0","Faucet supply lines","Hot left, cold right",D.ct)
B.hl9=new A.py("house","\ud83c\udfd7\ufe0f","Build and fix a house","Stage by stage, then repair",D.bw)
B.dgZ=w([B.hlj,B.hld,B.hle,B.hlk,B.hl8,B.hlf,B.hlo,B.hln,B.hlg,B.hlb,B.hll,B.hlm,B.hla,B.hlh,B.hli,B.hlc,B.hl9],C.aw("O<py>"))
B.eDl=new C.z(-1.6,3.5)
B.eCU=new C.z(1.6,3.5)
B.eEU=new C.z(-1.6,-3.5)
B.eBB=new C.z(1.6,-3.5)
B.dh_=w([B.eDl,B.eCU,B.eEU,B.eBB],x.f)
B.aA1=w([!1,!1,!1,!1],x.u)
B.een={in1:0,in2:1}
B.aQi=new C.dF(B.een,2,x.M)
B.bIL=new A.fM(23,"IN screw (top left)",B.aQi,y.g,!1,"hot")
B.bJb=new A.fM(21,"IN screw (top right)",B.aQi,y.g,!1,"hot")
B.eeN={out1:0,out2:1}
B.aQp=new C.dF(B.eeN,2,x.M)
B.bJ2=new A.fM(24,"OUT screw (bottom left)",B.aQp,y._,!1,"hot")
B.bJ4=new A.fM(22,"OUT screw (bottom right)",B.aQp,y._,!1,"hot")
B.dhs=w([B.w7,B.bIL,B.bJb,B.bJ2,B.bJ4],x.r)
B.dhC=w(["city","billboards","edges","houses","hospital","traffic"],x.s)
B.dhO=w(["Look at the pieces: the tailpiece, the P-trap and the trap arm. Pick the tailpiece first and tap its glowing outline under the sink.","Pick the P-trap (the U-shaped bend) and tap its glowing outline. It joins the tailpiece.","Pick the trap arm and tap its outline. It joins the trap to the wall drain.","Slide each slip nut up to its joint and hand tighten it: tap the nuts.","Run the water and look for leaks. The U-bend keeps a plug of water that blocks sewer gas."],x.s)
B.dt6=w(["Switch 1 common","Switch 2 common","Traveler terminal (both switches)","Green ground screw","Neutral splice (not on a switch)"],x.s)
B.edL={"Line (from the breaker)":0,"Load (to the light)":1,"Traveler A":2,"Traveler B":3,Ground:4,Neutral:5}
B.dxg=new C.bw(B.edL,["Switch 1 common","Switch 2 common","Traveler terminal (both switches)","Traveler terminal (both switches)","Green ground screw","Neutral splice (not on a switch)"],x.l)
B.dn6=w(["Never assume the dark screw is the same on every brand: read the diagram on the switch.","A switch loop or an old house may not follow the colors: verify the wires."],x.s)
B.bvx=new A.aku("Three-way switch (two switches, one light)","Two three-way switches control one light from two places. Each switch has a COMMON terminal (dark screw) and two TRAVELER terminals. Power (line) goes to the common of the first switch, the light (load) to the common of the second, and two travelers join the switches. The ground goes to the green screw. A standard single-pole switch cannot do this job.",B.dt6,B.dxg,B.dn6)
B.cXH=w(["Fan (motor) control wire","Light control wire","Neutral","Ground","Fan-rated support"],x.s)
B.eep={"Motor lead (black)":0,"Light lead (blue)":1,"Neutral (white)":2,"Ground (green)":3,Support:4}
B.dxO=new C.bw(B.eep,["Fan (motor) control wire","Light control wire","Neutral","Ground","Fan-rated support"],x.l)
B.d1a=w(["A blue wire is a light-kit lead on many fans, but not on all: read the diagram.","A fan that spins does not prove the installation is safe."],x.s)
B.bvw=new A.aku("Ceiling fan with a light kit","A fan has a motor and often a light kit, and they are not always switched together. Follow the fan maker's diagram: the motor lead goes to the fan control (or switched hot), the light lead to the light control, the white to neutral and the green to the ground. The box must be fan rated.",B.cXH,B.dxO,B.d1a)
B.zp=w([B.bvx,B.bvw],C.aw("O<aku>"))
B.fIT=new C.y("\u2728",null,D.a9z,null,null,null,null,null,null,null,null,null)
B.fTq=new C.y("Nobody needs help right now.",null,D.fp,null,D.K,null,null,null,null,null,null,null)
B.fsC=new C.F(!0,D.aR,null,null,null,null,13,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fLe=new C.y("Everybody's wiring and plumbing works. Keep an eye on food and health: things break when you least expect it.",null,B.fsC,null,D.K,null,null,null,null,null,null,null)
B.did=w([B.fIT,D.O,B.fTq,D.au,B.fLe],x.p)
B.dik=w(["road","roundabout","roadturn","roadtee","roadcross","house2","bighouse","billboard","tower","hq","store","gasstation","dmv","ubstation","townsign","cornersign","adboard","shop","hospital","firestation","school","car","firetruck","ambulance","dog","cat","cow","sheep","chicken","horse","tree","pine","bush","flowers","fence","lamppost","bench","pond","swing","shed","doghouse"],x.s)
B.eN7=new C.z(-1150,80)
B.eul=new C.z(1150,80)
B.eN6=new C.z(-1150,1990)
B.euk=new C.z(1150,1990)
B.dit=w([B.eN7,B.eul,B.eN6,B.euk],x.f)
B.f4a=new A.rM("pills","\ud83e\ude79","Pain pills","Cures a headache or a cold: you walk normally again",8,0,0,0,!0)
B.f49=new A.rM("bread","\ud83c\udf5e","Food for the town","5 portions for the people who live here",10,0,0,0,!1)
B.f48=new A.rM("medicine","\ud83d\udc8a","Medicine","3 doses for the sick",12,0,0,0,!1)
B.dix=w([B.f4a,B.f49,B.f48],x.y)
B.diA=w([D.aw,D.bG,D.be],x.O)
B.hb_=new A.q(125,292,-121.5)
B.hdV=new A.q(-125,292,-121.5)
B.fZy=new A.q(-125,208,-121.5)
B.haG=new A.q(125,208,-121.5)
B.diE=w([B.hb_,B.hdV,B.fZy,B.haG],x.o)
B.h_C=new A.q(11.4,4.6,-6)
B.h7l=new A.q(11.4,5,-7.85)
B.h39=new A.q(2.6,5,-7.85)
B.h3M=new A.q(2.6,3.4,-7.85)
B.diG=w([B.h_C,B.h7l,B.h39,B.h3M],x.o)
B.diK=w(["hospital","shop","school"],x.s)
B.diL=w(["hot","cold"],x.s)
B.diO=w([D.aw,D.be,D.aC,D.f5,D.bT],x.O)
B.hgE=new A.jA("black","Black \xb7 hot",B.tO,D.c,"hot")
B.hgx=new A.jA("white","White \xb7 neutral",B.oT,D.av,"neutral")
B.Rz=w([B.hgE,B.hgx,B.th],x.d)
B.ezQ=new C.z(-3.5,4)
B.eGR=new C.z(3.5,4)
B.eC2=new C.z(-3.5,-4)
B.etL=new C.z(3.5,-4)
B.djf=w([B.ezQ,B.eGR,B.eC2,B.etL],x.f)
B.djk=w(["Ada","Ben","Chidi","Dina","Efe","Farah","Gus","Halima","Ivo","Jamal","Kemi","Lola"],x.s)
B.eRM=new C.z(-2.4,5)
B.eIi=new C.z(2.4,5)
B.eFu=new C.z(-2.4,-5)
B.eEb=new C.z(2.4,-5)
B.djl=w([B.eRM,B.eIi,B.eFu,B.eEb],x.f)
B.djO=w([y.O,"Break off the little brass tab between the two brass screws, so the two halves are separate.",y.R,"Fasten the white neutral to a SILVER screw (the silver tab stays joined).","Fasten the always-hot black wire to the bottom BRASS screw.","Fasten the switched hot (red, from the wall switch) to the top BRASS screw.",y.b,y.n],x.s)
B.eVH=new C.bk(-6,-4,D.c2)
B.eUl=new C.bk(5,-5,D.bG)
B.eVG=new C.bk(0,1,D.aw)
B.eWa=new C.bk(-5,5,D.bw)
B.eTA=new C.bk(6,4,D.c)
B.dk7=w([B.eVH,B.eUl,B.eVG,B.eWa,B.eTA],x.dV)
B.dkB=w([U.qG,R.lo],x.f)
B.dkF=w(["split","v240four","v240three","v240only","isolated"],x.s)
B.eeb={feed:0}
B.f3g=new C.dF(B.eeb,1,x.M)
B.bIO=new A.fM(21,"FEED screw (joined tab)",B.f3g,"The one feed wire goes on the side where the brass screws are joined by a tab: it powers both switches.",!1,"hot")
B.eez={loadA:0,loadB:1}
B.aQo=new C.dF(B.eez,2,x.M)
B.bJf=new A.fM(22,"Switch 1 screw \u2192 light 1",B.aQo,y.q,!1,"hot")
B.bJj=new A.fM(24,"Switch 2 screw \u2192 light 2",B.aQo,y.q,!1,"hot")
B.dkS=w([B.w7,B.bIO,B.bJf,B.bJj],x.r)
B.eMB=new C.z("Slab","First the concrete slab (the foundation) is poured and left to cure. Every wall sits on it.")
B.ePw=new C.z("Framing","The carpenters build the wall frames from 2x4 studs, spaced 16 inches apart, with plates on the top and bottom.")
B.eDV=new C.z("Plumbing rough-in","The plumber runs the hot (red) and cold (blue) water lines and the white drain pipes inside the walls and floor before anything is closed up.")
B.eKM=new C.z("Electrical rough-in","The electrician runs the yellow and white cables from the breaker panel to every box, and fixes the boxes to the studs.")
B.eLR=new C.z("Drywall","Drywall covers the frame. Here it is see-through so you can still look at the pipes and wires behind it.")
B.eEm=new C.z("Fixtures","Last come the outlets, switches, light, sink, toilet and water heater. This is where most repairs happen.")
B.eFF=new C.z("Roof","The roof goes on to keep everything dry. It is see-through here so you can keep looking inside.")
B.dkV=w([B.eMB,B.ePw,B.eDV,B.eKM,B.eLR,B.eEm,B.eFF],x.L)
B.dA8=new A.i8(-100,100,24,90)
B.dAd=new A.i8(-134,-110,100,190)
B.dzY=new A.i8(110,134,100,190)
B.dkZ=w([B.dA8,B.dAd,B.dzY],x.T)
B.eNd=new C.z(-17,-9)
B.euu=new C.z(17,-9)
B.eNc=new C.z(-17,9)
B.eut=new C.z(17,9)
B.dlx=w([B.eNd,B.euu,B.eNc,B.eut],x.f)
B.dlD=w([-100,0,100],x.n)
B.dlE=w([-110,-80,80,110],x.n)
B.a52=w([-14,14],x.n)
B.dlG=w([-150,150],x.n)
B.dlH=w([-178,178],x.n)
B.dlJ=w([-18,18],x.n)
B.aAn=w([-20,0,20],x.n)
B.dlL=w([-21,21],x.n)
B.a54=w([-26,26],x.n)
B.dlM=w([-27,27],x.n)
B.f4b=new A.rM("can","\ud83d\udee2","Gas can","Half a tank of gas",8,0,0.5,0,!1)
B.aQD=new A.rM("tank","\u26fd","Fill the tank","A full tank",12,0,1,0,!1)
B.dlN=w([B.f4b,B.aQD],x.y)
B.dlP=w([-30,-10,10,30],x.n)
B.dlQ=w([-32,32],x.n)
B.dlR=w([-32,-8,34],x.n)
B.aAo=w([-34,34],x.n)
B.dlS=w([-3,3],x.n)
B.dlT=w([-47,47],x.n)
B.dlU=w([-48,48],x.n)
B.dlV=w([-52,52],x.n)
B.aAq=w([-55,55],x.n)
B.dlX=w([-600,0,600],x.n)
B.dlY=w([-600,600],x.n)
B.dm_=w([-70,70],x.n)
B.ov=w([-72,-24,24],x.t)
B.aAr=w([-80,80],x.n)
B.dm2=w([-900,-300,300,900],x.n)
B.dm3=w([-90,0,90],x.n)
B.dm4=w([-90,-52,52,90],x.n)
B.aAu=w([-9,9],x.n)
B.dmg=w(["switch2p","switch3","switch4","switchsmart","switchcombo"],x.s)
B.dmm=w(["medicine","food"],x.s)
B.dmz=w([y.O,y.x,y.R,"The first traveler from the FIRST three-way goes on a top screw (IN).","The second traveler from the FIRST three-way goes on the other top screw (IN).","The first traveler to the SECOND three-way goes on a bottom screw (OUT).","The second traveler to the SECOND three-way goes on the other bottom screw (OUT).",y.b,y.n],x.s)
B.h3i=new A.q(8.2,5,-7.85)
B.h8O=new A.q(8.2,1.2,-7.85)
B.haW=new A.q(8.2,1,-7.4)
B.dnJ=w([B.h3i,B.h8O,B.haW],x.o)
B.hgq=new A.jA("common","Black \xb7 COMMON (power in or to the light)",B.tO,D.c,"hot")
B.hgo=new A.jA("trav1","Red \xb7 traveler 1",B.B1,D.c,"hot")
B.hgB=new A.jA("trav2","White taped black \xb7 traveler 2",B.oT,D.av,"hot")
B.dnK=w([B.th,B.hgq,B.hgo,B.hgB],x.d)
B.a5d=w(["rug","road","roundabout","roadturn","roadtee","roadcross","pond","flowers"],x.s)
B.dnX=w(["human","soldier","michelle","xbot","human"],x.s)
B.eN1=new C.z(-1050,"hospital")
B.eNC=new C.z(-630,"store")
B.eNu=new C.z(-420,"tower")
B.etZ=new C.z(0,"tower")
B.ew6=new C.z(420,"tower")
B.eyd=new C.z(630,"store")
B.eud=new C.z(1050,"hospital")
B.do0=w([B.eN1,B.aPe,B.eNC,B.eNu,B.aPd,B.etZ,B.aP1,B.ew6,B.eyd,B.aP3,B.eud],x.d6)
B.er6=new A.Fj(61,"Hot shut-off valve (left)",B.a8K,"Hot is always on the LEFT. The red hose goes on the left valve.")
B.ee2={cold:0}
B.aQz=new C.dF(B.ee2,1,x.M)
B.er7=new A.Fj(62,"Cold shut-off valve (right)",B.aQz,"Cold is always on the RIGHT. The blue hose goes on the right valve.")
B.er4=new A.Fj(63,"Hot faucet inlet (left)",B.a8K,"The left faucet inlet takes the hot (red) hose.")
B.er5=new A.Fj(64,"Cold faucet inlet (right)",B.aQz,"The right faucet inlet takes the cold (blue) hose.")
B.a5e=w([B.er6,B.er7,B.er4,B.er5],C.aw("O<Fj>"))
B.a5g=w([-72,-48,-24,0,24],x.t)
B.dp9=w(["1 Rough-in","2 Drywall","3 Devices"],x.s)
B.dAr=new A.i8(-90,10,130,160)
B.dAk=new A.i8(-50,50,70,100)
B.dAe=new A.i8(-134,-110,20,70)
B.dpD=w([B.dAr,B.dAk,B.dAe],x.T)
B.RH=w(["road","roadturn","roadtee","roadcross"],x.s)
B.bIY=new A.fM(21,"Brass screw (top): HOT side",B.JA,y.r,!1,"hot")
B.bJ6=new A.fM(22,"Brass screw (bottom): HOT side",B.JA,y.r,!1,"hot")
B.bJ1=new A.fM(23,"Silver screw (top): NEUTRAL side",B.Jx,y.Q,!1,"neutral")
B.bIS=new A.fM(24,"Silver screw (bottom): NEUTRAL side",B.Jx,y.Q,!1,"neutral")
B.bIZ=new A.fM(25,"Green screw: GROUND",B.Jy,"The green screw is for the bare copper or green GROUND wire.",!1,"ground")
B.dpO=w([B.bIY,B.bJ6,B.bJ1,B.bIS,B.bIZ],x.r)
B.dpU=w([y.O,y.x,y.R,"Fasten the black hot to one HOT brass screw.","Fasten the red hot to the other HOT brass screw. There is no neutral and no silver screw in use.",y.b,y.n],x.s)
B.eNJ=new C.z(-700,225)
B.eN9=new C.z(-120,160)
B.eun=new C.z(120,160)
B.eyD=new C.z(720,225)
B.dq9=w([B.eNJ,B.eN9,B.eun,B.eyD],x.f)
B.eTW=new C.bk("hot","Hot hose (red)",B.tH)
B.eUC=new C.bk("cold","Cold hose (blue)",B.o2)
B.dqb=w([B.eTW,B.eUC],C.aw("O<+(n,n,u)>"))
B.evG=new C.z(34,40)
B.hjb=new A.AB(B.evG,3.141592653589793,2.6,"Washing hands at the sink",!1,!1,!1,"")
B.dqd=w([B.hjb],x.h)
B.b0w=new A.Ht("NGMY navy",E.jL,E.LQ,D.c,F.fz)
B.b0B=new A.Ht("Purple",D.nb,D.dG,D.c,D.bL)
B.b0z=new A.Ht("Green",D.h3,D.bP,D.c,D.m_)
B.b0x=new A.Ht("Sunset",D.e7,D.aC,D.c,D.ig)
B.b0y=new A.Ht("Night",D.M,D.aJ,D.b3,D.c2)
B.b0A=new A.Ht("Light",D.c,D.nX,E.jL,D.dY)
B.a5j=w([B.b0w,B.b0B,B.b0z,B.b0x,B.b0y,B.b0A],C.aw("O<Ht>"))
B.aaY=new A.q(15,2.6,0)
B.a5k=w([B.aXl,B.aaY],x.o)
B.dqv=w([B.th,B.KC,B.ab4,B.ab5],x.d)
B.b5Z=new C.ac(0,D.G,D.aS,D.I,24)
B.dqw=w([B.b5Z],x.V)
B.dqK=w(["tail","trap","arm"],x.s)
B.dqS=w([!0,!0,!0,!0],x.u)
B.I7=w(["tv","lamp","toaster","hairdryer"],x.s)
B.abl=new A.iW("look","Look",D.fk)
B.hjO=new A.iW("wall","Wall box",P.anF)
B.hjM=new A.iW("ceiling","Ceiling box",D.ru)
B.hk0=new A.iW("fanbox","Fan box",N.Op)
B.hk9=new A.iW("drill","Drill",D.yL)
B.hk1=new A.iW("cable","Cable roll",E.anx)
B.dhR=w([B.abl,B.hjO,B.hjM,B.hk0,B.hk9,B.hk1],x.I)
B.hk7=new A.iW("sheet","Drywall sheet",D.Cw)
B.hjS=new A.iW("knife","Drywall saw",D.GP)
B.hjQ=new A.iW("screw","Screw gun",A0.GZ)
B.hkb=new A.iW("tape","Tape",D.uo)
B.hk5=new A.iW("mud","Mud",Ac.a1H)
B.hkg=new A.iW("sand","Sander",D.GN)
B.bOs=new C.a0(985109,"MaterialIcons",!1)
B.hjW=new A.iW("paint","Roller",B.bOs)
B.deb=w([B.abl,B.hk7,B.hjS,B.hjQ,B.hkb,B.hk5,B.hkg,B.hjW],x.I)
B.OM=new C.a0(983223,"MaterialIcons",!1)
B.hkc=new A.iW("outlet","Outlet",B.OM)
B.hjU=new A.iW("gfci","GFCI",D.uv)
B.hka=new A.iW("switch","Switch",E.ux)
B.hjP=new A.iW("split","Split outlet",B.OM)
B.hke=new A.iW("v240four","240 V 4-wire",T.Ce)
B.hjN=new A.iW("v240three","240 V 3-wire",T.Ce)
B.hjZ=new A.iW("v240only","240 V only",T.Ce)
B.hjR=new A.iW("isolated","Isolated ground",B.OM)
B.hk6=new A.iW("switch2p","Double-pole",E.ux)
B.hk8=new A.iW("switch3","3-way switch",E.ux)
B.hk_=new A.iW("switch4","4-way switch",E.ux)
B.hjY=new A.iW("switchsmart","Smart switch",E.ux)
B.hjL=new A.iW("switchcombo","Double switch",E.ux)
B.hk4=new A.iW("light","Light",D.rx)
B.bOq=new C.a0(985094,"MaterialIcons",!1)
B.hjX=new A.iW("fan","Fan",B.bOq)
B.hk3=new A.iW("tv","TV",W.a2f)
B.bMI=new C.a0(63571,"MaterialIcons",!1)
B.hjV=new A.iW("lamp","Lamp",B.bMI)
B.bLu=new C.a0(62944,"MaterialIcons",!1)
B.hjT=new A.iW("toaster","Toaster",B.bLu)
B.bM4=new C.a0(63209,"MaterialIcons",!1)
B.hkf=new A.iW("hairdryer","Hair dryer",B.bM4)
B.hkd=new A.iW("flip","Flip switch",E.ux)
B.hk2=new A.iW("tester","Voltage tester",D.ul)
B.d7p=w([B.abl,B.hkc,B.hjU,B.hka,B.hjP,B.hke,B.hjN,B.hjZ,B.hjR,B.hk6,B.hk8,B.hk_,B.hjY,B.hjL,B.hk4,B.hjX,B.hk3,B.hjV,B.hjT,B.hkf,B.hkd,B.hk2],x.I)
B.dqY=w([B.dhR,B.deb,B.d7p],C.aw("O<ai<iW>>"))
B.drb=w([B.th,B.ab4,B.ab5],x.d)
B.brI=new C.u(1,0.1843137254901961,0.30980392156862746,0.30980392156862746,D.q)
B.bp7=new C.u(1,0.3568627450980392,0.4196078431372549,0.5490196078431373,D.q)
B.drc=w([B.Xv,D.br,B.brI,B.bp7,D.bn,D.aJ],x.O)
B.dri=w([D.bB,D.bP,D.cg,D.ce,D.vJ,D.cw],x.O)
B.drk=w([-400,400,-900,900,-1400,1400],x.n)
B.drl=w([D.aw,D.bG,D.be,D.d3],x.O)
B.drv=w([y.O,"Hold the fixture up to the ceiling box. It has three short wires: black, white and green.","Join the house ground wire to the fixture ground.","Join the house white wire to the fixture white wire with a wire nut.","Join the house black wire to the fixture black wire with a wire nut.","Push the wires into the box and fasten the fixture to the ceiling.",y.f],x.s)
B.dAq=new A.i8(-70,70,28,52)
B.dAh=new A.i8(-134,-96,100,170)
B.dA7=new A.i8(96,134,100,170)
B.drD=w([B.dAq,B.dAh,B.dA7],x.T)
B.drE=w([30,60,120,180,300],x.t)
B.eNg=new C.z(-210,60)
B.ev5=new C.z(210,90)
B.eNm=new C.z(-330,120)
B.evD=new C.z(330,60)
B.eN5=new C.z(-110,330)
B.euj=new C.z(110,330)
B.eNA=new C.z(-560,640)
B.exU=new C.z(560,640)
B.eNs=new C.z(-420,1100)
B.ew4=new C.z(420,1100)
B.drM=w([B.eNg,B.ev5,B.eNm,B.evD,B.eN5,B.euj,B.eNA,B.exU,B.eNs,B.ew4],x.f)
B.c1b=new A.jL("Breaker off, then test","Before you touch any wire, switch its breaker OFF, then check with a voltage tester that the wire is dead. A switch on the wall is not enough.")
B.c0Z=new A.jL("Lock out, tag out","On a real job you put a lock or a note on the panel so nobody switches the power back on while you work.")
B.c1i=new A.jL("Water and power","Water carries electricity. Near sinks, tubs and outdoors the outlets must be GFCI, and wet hands never touch wires.")
B.c13=new A.jL("Eyes, ears, lungs","Safety glasses for drilling and cutting, ear protection for loud tools, and a mask when you sand drywall dust or cut tile.")
B.c1h=new A.jL("Shut the water off","Before you cut or loosen a pipe, close the main water valve and open a faucet to drain the line.")
B.dkn=w([B.c1b,B.c0Z,B.c1i,B.c13,B.c1h],x.Z)
B.c1u=new A.N8("Safety first","\ud83e\uddba",D.ct,B.dkn)
B.c1j=new A.jL("Wire colours","Black is hot (it carries the power), white is neutral (the way back), bare copper or green is ground (the safety path). Red is a second hot, often used for a switched line.")
B.c1q=new A.jL("Screw colours","On an outlet the brass screw takes the hot wire, the silver screw takes the neutral and the green screw takes the ground.")
B.c1d=new A.jL("Wire size","14 gauge wire is for 15 amp circuits (lights and outlets). 12 gauge is for 20 amp circuits (kitchens). A thinner wire than the breaker allows can overheat and start a fire.")
B.c17=new A.jL("Breakers","A breaker is a safety switch. It trips when a circuit carries too much current, so the wires never get hot enough to burn.")
B.c1l=new A.jL("Wire nuts","Strip about 3/4 inch, twist the bare ends together clockwise, and screw on the nut until no bare copper shows. Give each wire a gentle tug.")
B.c1r=new A.jL("Switches","A switch cuts the hot wire only. The neutral goes straight through to the light.")
B.c1s=new A.jL("GFCI","A GFCI outlet watches the current going out and coming back. If a little leaks (through water or a person) it cuts the power in a fraction of a second.")
B.c10=new A.jL("Ceiling fans","A fan shakes and is heavy. It needs a box that says fan rated, fixed to the joist, not a plain light box.")
B.c12=new A.jL("Heights","Outlets sit about 16 inches from the floor. Switches sit about 48 inches up, where your hand falls.")
B.dcz=w([B.c1j,B.c1q,B.c1d,B.c17,B.c1l,B.c1r,B.c1s,B.c10,B.c12],x.Z)
B.c1x=new A.N8("Wiring basics","\u26a1",D.bG,B.dcz)
B.c1_=new A.jL("Hot left, cold right","On a faucet, hot is on the left and cold on the right. Hot lines are marked red and cold lines blue.")
B.c1c=new A.jL("The P-trap","The curved pipe under a sink always holds a little water. That water seal stops sewer gas coming up the drain.")
B.c1n=new A.jL("Shut-off valves","Every sink and toilet has its own small valve, so you can stop the water to one fixture without turning off the whole house.")
B.c15=new A.jL("Slip nuts","Drain joints are sealed by a washer and a slip nut. Tighten by hand and a quarter turn: too much force cracks plastic.")
B.c14=new A.jL("Wax ring","A toilet sits on a wax ring that seals it to the floor drain. A toilet is lowered straight down once, and cannot be slid around.")
B.c1k=new A.jL("Drain slope","Drains fall about 1/4 inch per foot so water and waste keep moving. Too flat and it clogs, too steep and the water leaves the solids behind.")
B.c1p=new A.jL("Order of work","Plumbing goes from the top down on the drain (tailpiece, trap, arm) and from the wall out on the supply (valve, hose, fixture).")
B.cjf=w([B.c1_,B.c1c,B.c1n,B.c15,B.c14,B.c1k,B.c1p],x.Z)
B.c1v=new A.N8("Plumbing basics","\ud83d\udeb0",D.cp,B.cjf)
B.c11=new A.jL("Studs","Studs are the vertical 2x4 posts inside a wall, 16 inches apart from centre to centre. Everything is fixed to them.")
B.c1f=new A.jL("Drilling studs","Holes for cable go through the middle of the stud, so a nail or screw cannot reach the wire.")
B.c16=new A.jL("Drywall","A sheet is 4 feet wide, so its edges land on studs 48 inches apart. Screws go into studs only, just under the paper.")
B.c19=new A.jL("Taping and mud","Seams get paper tape and three thin coats of joint compound, sanded smooth between coats, then primer and paint.")
B.c1o=new A.jL("Order of a build","Frame, run the pipes and wires (rough-in), inspect, hang drywall, finish it, paint, then fit the fixtures and devices.")
B.cY7=w([B.c11,B.c1f,B.c16,B.c19,B.c1o],x.Z)
B.c1t=new A.N8("Framing and walls","\ud83c\udfe0",D.dY,B.cY7)
B.c1a=new A.jL("Voltage tester","A pen that glows or beeps near live wires. Test it on a known live outlet first, so you know it works.")
B.c1g=new A.jL("Wire strippers","Strip the plastic off without nicking the copper. A nick weakens the wire.")
B.c1m=new A.jL("Adjustable wrench","For nuts on valves and hoses. Hold the fitting steady with a second wrench so you do not twist the pipe.")
B.c1e=new A.jL("Drill and screw gun","A drill makes holes through studs. A screw gun sets drywall screws to the right depth.")
B.c18=new A.jL("Level and tape measure","Measure twice, cut once. A level makes sure outlets, shelves and pipes are straight.")
B.dsU=w([B.c1a,B.c1g,B.c1m,B.c1e,B.c18],x.Z)
B.c1w=new A.N8("Tools","\ud83e\uddf0",D.bt,B.dsU)
B.dsu=w([B.c1u,B.c1x,B.c1v,B.c1t,B.c1w],C.aw("O<N8>"))
B.dsx=w([y.O,"There is no separate ground wire here: the neutral also grounds the frame of the old appliance. This is only allowed in old installations.",y.N,y.E,y.k,y.b,y.n],x.s)
B.bfx=new C.u(1,0.48627450980392156,0.22745098039215686,0.22745098039215686,D.q)
B.bni=new C.u(1,0.24705882352941178,0.4196078431372549,0.30980392156862746,D.q)
B.blB=new C.u(1,0.4196078431372549,0.30980392156862746,0.48627450980392156,D.q)
B.bix=new C.u(1,0.47843137254901963,0.41568627450980394,0.23137254901960785,D.q)
B.dsB=w([B.Xv,B.bfx,B.bni,B.blB,B.bix],x.O)
B.dsN=w(["Cream","Sky","Blush","Mint","Butter","Periwinkle","White","Slate"],x.s)
B.hgs=new A.jA("in1","Red \xb7 traveler in 1 (from the first 3-way)",B.B1,D.c,"hot")
B.hgy=new A.jA("in2","White taped red \xb7 traveler in 2",B.oT,D.av,"hot")
B.aeq=new C.u(1,0.6901960784313725,0.22745098039215686,0.16862745098039217,D.q)
B.hgp=new A.jA("out1","Red \xb7 traveler out 1 (to the second 3-way)",B.aeq,D.c,"hot")
B.hgD=new A.jA("out2","White taped red \xb7 traveler out 2",D.bO,D.av,"hot")
B.dsQ=w([B.th,B.hgs,B.hgy,B.hgp,B.hgD],x.d)
B.eNM=new C.z(-760,330)
B.eyE=new C.z(760,330)
B.eNw=new C.z(-450,1080)
B.exj=new C.z(450,1080)
B.dsT=w([B.eNM,B.eyE,B.eNw,B.exj],x.f)
B.dt0=w([0.72,-0.72],x.n)
B.hgA=new A.jA("hot","Black \xb7 hot",B.tO,D.c,"hot")
B.YF=new C.u(1,0.1843137254901961,0.6352941176470588,0.30980392156862746,D.q)
B.hgv=new A.jA("isoground","Green with yellow stripe \xb7 isolated ground",B.YF,D.c,"ground")
B.dt9=w([B.KC,B.hgA,B.hgv],x.d)
B.dtl=w([B.amr,B.amq,B.amo],x.r)
B.eAi=new C.z("outlet","\ud83d\udd0c Outlet")
B.eOA=new C.z("gfci","\ud83d\udee1\ufe0f GFCI outlet")
B.eK8=new C.z("switch","\ud83d\udca1 Light switch")
B.dtm=w([B.eAi,B.eOA,B.eK8],x.L)
B.dtx=w(["inspect","hand","screwdriver","pliers","wrench","crimper","plunger","flapper","newoutlet","patch"],x.s)
B.hrO=new A.pB(0,0,70,26)
B.hs_=new A.pB(1,-100,110,24)
B.hs1=new A.pB(2,105,100,26)
B.du5=w([B.hrO,B.hs_,B.hs1],x.X)
B.hgw=new A.jA("lineA","Black \xb7 hot leg 1 (from the panel)",B.tO,D.c,"hot")
B.hgC=new A.jA("lineB","Red \xb7 hot leg 2 (from the panel)",B.B1,D.c,"hot")
B.hgJ=new A.jA("loadA","Black \xb7 hot leg 1 (to the heater)",B.Md,D.c,"hot")
B.hgu=new A.jA("loadB","Red \xb7 hot leg 2 (to the heater)",B.aeq,D.c,"hot")
B.dur=w([B.th,B.hgw,B.hgC,B.hgJ,B.hgu],x.d)
B.dux=w(["Maya","Kofi","Amara","Tunde","Zawadi"],x.s)
B.duz=w(["Look under the sink. The wall has two shut-off valves: hot on the LEFT (red handle) and cold on the RIGHT (blue handle).","Pick the red hot hose. Tap the left shut-off valve, then the left faucet inlet.","Pick the blue cold hose. Tap the right shut-off valve, then the right faucet inlet.","Open the valves slowly and turn on the faucet. Check every connection for drips."],x.s)
B.eee={flange:0,wax:1,toilet:2,bolts:3,valve:4,hosehot:5,hosecold:6,faucet:7,tail:8,trap:9,arm:10}
B.aGp=new C.bw(B.eee,["Flange","Wax ring","Toilet","Bolts","Shut-off valve","Hot hose","Cold hose","Faucet","Tailpiece","P-trap","Trap arm"],x.l)
B.dwV=new C.du([25,"ground",23,"lineA",21,"lineB",24,"loadA",22,"loadB"],x.v)
B.dwW=new C.du([25,"ground",23,"in1",21,"in2",24,"out1",22,"out2"],x.v)
B.edJ={xbot:0,michelle:1,soldier:2}
B.S4=new C.bw(B.edJ,["assets/avatars/Xbot.glb","assets/avatars/Michelle.glb","assets/avatars/Soldier.glb"],x.l)
B.ecU={highway:0,tower:1,neon:2,roof:3,screen:4,gate:5}
B.aP_=new C.z(0,!1)
B.euO=new C.z(1,!1)
B.evT=new C.z(3,!1)
B.evp=new C.z(2,!0)
B.euQ=new C.z(1,!0)
B.evU=new C.z(3,!0)
B.dx6=new C.bw(B.ecU,[B.aP_,B.euO,B.evT,B.evp,B.euQ,B.evU],C.aw("bw<n,+(H,R)>"))
B.dxb=new C.du([25,"ground",23,"neutral",21,"hot1",22,"hot2"],x.v)
B.dxc=new C.du([25,"ground",23,"common",21,"trav1",22,"trav2"],x.v)
B.dxd=new C.du([25,"ground",23,"neutral",21,"line",22,"load"],x.v)
B.dxe=new C.du([25,"ground",23,"neutral",21,"switched",22,"always"],x.v)
B.dxr=new C.du([25,"ground",21,"hot1",22,"hot2"],x.v)
B.edF={bed:0,nightstand:1,wardrobe:2,desk:3,rug:4,sofa:5,armchair:6,coffee:7,tvstand:8,dining:9,chair:10,plant:11,lamp:12,console:13,shelf:14,tree:15,pine:16,bush:17,flowers:18,fence:19,lamppost:20,bench:21,car:22,road:23,roundabout:24,roadturn:25,roadtee:26,roadcross:27,house2:28,bighouse:29,pole:30,crate:31,billboard:32,tower:33,hq:34,store:35,gasstation:36,dmv:37,ubstation:38,townsign:39,cornersign:40,adboard:41,shop:42,hospital:43,firestation:44,school:45,firetruck:46,ambulance:47,dog:48,cat:49,cow:50,sheep:51,chicken:52,horse:53,pond:54,swing:55,shed:56,doghouse:57}
B.bHV=new A.fn("Bed","\ud83d\udecf\ufe0f",48,64)
B.bI6=new A.fn("Night table","\ud83e\ude91",13,13)
B.bHE=new A.fn("Wardrobe","\ud83d\udeaa",35,16)
B.bHQ=new A.fn("Desk","\ud83d\udda5\ufe0f",38,19)
B.bHF=new A.fn("Rug","\ud83d\udfe5",56,40)
B.bHA=new A.fn("Sofa","\ud83d\udecb\ufe0f",64,26)
B.bHZ=new A.fn("Armchair","\ud83d\udcba",24,24)
B.bId=new A.fn("Coffee table","\u2615",32,19)
B.bHC=new A.fn("Media cabinet","\ud83d\uddc4\ufe0f",45,14)
B.bIb=new A.fn("Dining table","\ud83c\udf7d\ufe0f",45,29)
B.bI5=new A.fn("Chair","\ud83e\ude91",14,14)
B.bIc=new A.fn("Plant","\ud83e\udeb4",14,14)
B.bI7=new A.fn("Floor lamp","\ud83d\udca1",10,10)
B.bHW=new A.fn("Console table","\ud83d\uddc4\ufe0f",35,11)
B.bI4=new A.fn("Bookshelf","\ud83d\udcda",29,10)
B.bIh=new A.fn("Tree","\ud83c\udf33",36,36)
B.bHT=new A.fn("Pine tree","\ud83c\udf32",30,30)
B.bHz=new A.fn("Bush","\ud83c\udf3f",18,18)
B.bI1=new A.fn("Flowers","\ud83c\udf37",22,22)
B.bHs=new A.fn("Fence","\ud83d\udea7",64,6)
B.bHG=new A.fn("Street lamp","\ud83c\udfee",8,8)
B.bHY=new A.fn("Bench","\ud83e\ude91",44,16)
B.bHt=new A.fn("Car","\ud83d\ude97",84,40)
B.bHP=new A.fn("Road","\ud83d\udee3\ufe0f",40,40)
B.bIi=new A.fn("Roundabout","\ud83d\udd04",80,80)
B.bHy=new A.fn("Road corner","\u21aa\ufe0f",40,40)
B.bIk=new A.fn("Road T-junction","\u22a4",40,40)
B.bHR=new A.fn("Crossroads","\u271a",40,40)
B.bHB=new A.fn("House","\ud83c\udfe0",108,90)
B.bHU=new A.fn("Big house","\ud83c\udfe2",158,120)
B.bHu=new A.fn("Electric pole","\ud83d\udd0c",10,10)
B.bHO=new A.fn("Crate","\ud83d\udce6",28,28)
B.bIg=new A.fn("Billboard","\ud83e\udea7",72,10)
B.bHx=new A.fn("Office tower","\ud83c\udfe2",100,70)
B.bHJ=new A.fn("NGMY company","\ud83c\udfdb\ufe0f",170,90)
B.bHI=new A.fn("NGMY store","\ud83c\udfec",130,80)
B.bIj=new A.fn("NGMY gas station","\u26fd",150,90)
B.bI3=new A.fn("NGMY licence office","\ud83e\udeaa",130,80)
B.bHL=new A.fn("NGMY Uber","\ud83d\ude96",120,60)
B.bHv=new A.fn("NGMY Town sign","\ud83e\udea7",380,14)
B.bI_=new A.fn("NGMY Town billboard","\ud83e\udea7",150,10)
B.bHN=new A.fn("NGMY ad billboard","\ud83d\udcfa",330,14)
B.bHS=new A.fn("Shop","\ud83c\udfea",126,90)
B.bHK=new A.fn("Hospital","\ud83c\udfe5",165,105)
B.bHr=new A.fn("Fire station","\ud83d\ude92",135,96)
B.bI2=new A.fn("School","\ud83c\udfeb",186,105)
B.bIa=new A.fn("Fire truck","\ud83d\ude92",96,40)
B.bHX=new A.fn("Ambulance","\ud83d\ude91",84,40)
B.bHH=new A.fn("Dog","\ud83d\udc15",22,10)
B.bHM=new A.fn("Cat","\ud83d\udc08",16,8)
B.bI8=new A.fn("Cow","\ud83d\udc04",38,16)
B.bHD=new A.fn("Sheep","\ud83d\udc11",26,14)
B.bI9=new A.fn("Chicken","\ud83d\udc14",12,8)
B.bHw=new A.fn("Horse","\ud83d\udc0e",46,16)
B.bIe=new A.fn("Pond","\ud83d\udca7",80,56)
B.bI0=new A.fn("Swing set","\ud83c\udfa0",56,40)
B.bIf=new A.fn("Shed","\ud83d\uded6",50,42)
B.bIl=new A.fn("Dog house","\ud83d\udc15",24,22)
B.hz=new C.bw(B.edF,[B.bHV,B.bI6,B.bHE,B.bHQ,B.bHF,B.bHA,B.bHZ,B.bId,B.bHC,B.bIb,B.bI5,B.bIc,B.bI7,B.bHW,B.bI4,B.bIh,B.bHT,B.bHz,B.bI1,B.bHs,B.bHG,B.bHY,B.bHt,B.bHP,B.bIi,B.bHy,B.bIk,B.bHR,B.bHB,B.bHU,B.bHu,B.bHO,B.bIg,B.bHx,B.bHJ,B.bHI,B.bIj,B.bI3,B.bHL,B.bHv,B.bI_,B.bHN,B.bHS,B.bHK,B.bHr,B.bI2,B.bIa,B.bHX,B.bHH,B.bHM,B.bI8,B.bHD,B.bI9,B.bHw,B.bIe,B.bI0,B.bIf,B.bIl],C.aw("bw<n,fn>"))
B.dyi=new C.du([25,"isoground",23,"neutral",21,"hot"],x.v)
B.ed1={outlet:0,switch:1,light:2,fan:3,gfci:4}
B.d7Q=w(["Silver","Brass","Green"],x.s)
B.fdZ=new A.vc("On a standard receptacle, which terminal does the hot wire go on?",B.d7Q,1,"Brass is the hot side. Silver is neutral and green is the ground.")
B.cJq=w(["Yes, it works","No: reversed polarity leaves live parts that should be dead","Yes if there is a ground"],x.s)
B.fdX=new A.vc("The outlet works with hot and neutral swapped. Is it safe?",B.cJq,1,"Working is not the same as safe. Reversed polarity energizes the wrong parts.")
B.d1r=w(["Yes","No, never","Only in old houses"],x.s)
B.fdT=new A.vc("May the neutral be used as the equipment ground?",B.d1r,1,"The ground is a separate safety path. The neutral carries current in normal use.")
B.dd8=w([B.fdZ,B.fdX,B.fdT],x.W)
B.c5V=w(["The hot to the light","The neutral","The ground"],x.s)
B.fe_=new A.vc("A single-pole switch opens and closes which conductor?",B.c5V,0,"The switch breaks the hot conductor to the load.")
B.d_2=w(["Yes","No, never","If the wire is thick"],x.s)
B.fe0=new A.vc("May the ground wire be used to carry current to the light?",B.d_2,1,"The equipment ground is only for safety.")
B.d6M=w(["Yes","No: never assume it does","Only new houses"],x.s)
B.fdU=new A.vc("Does every switch box have a neutral?",B.d6M,1,"Many switch boxes have no neutral. Smart switches need to be chosen for that.")
B.dsy=w([B.fe_,B.fe0,B.fdU],x.W)
B.dka=w(["Yes","No: the wires, the ground and the support must be right","Only with a switch"],x.s)
B.fdY=new A.vc("Does a light that turns on prove the fixture is wired safely?",B.dka,1,"A fixture can light up with an unsafe connection.")
B.djd=w(["Its wires","A box or mount rated for its weight","Tape"],x.s)
B.fe1=new A.vc("A fixture must hang from:",B.djd,1,"The box carries the weight. The wires never do.")
B.d7b=w([B.fdY,B.fe1],x.W)
B.d8f=w(["Any ceiling box","Rated for a fan","Plastic only"],x.s)
B.fdW=new A.vc("A ceiling fan needs a box that is:",B.d8f,1,"A fan shakes and is heavy. A plain light box can let it fall.")
B.dnb=w(["Yes","No: support, ground and wiring must all be right","Yes if it is quiet"],x.s)
B.fdV=new A.vc("The fan spins. Is the installation safe?",B.dnb,1,"A spinning fan says nothing about the box, the ground or the connections.")
B.d7u=w([B.fdW,B.fdV],x.W)
B.d38=w(["LINE","LOAD","Either"],x.s)
B.fdS=new A.vc("On a GFCI, power from the breaker goes on:",B.d38,0,"LINE is the supply. LOAD feeds outlets further down the line.")
B.cO8=w([B.fdS],x.W)
B.aGE=new C.bw(B.ed1,[B.dd8,B.dsy,B.d7b,B.d7u,B.cO8],C.aw("bw<n,ai<vc>>"))
B.edE={house2:0,bighouse:1,shop:2,billboard:3,crate:4,car:5,tree:6,bench:7,tower:8,hq:9,store:10,gasstation:11,cornersign:12}
B.dyl=new C.bw(B.edE,[40,80,70,15,4,25,5,4,120,200,90,90,30],C.aw("bw<n,H>"))
B.bGF=new A.uy("The living room has no power at all.","The living room breaker is sitting in the middle (orange). It has tripped. Flip it fully OFF and ON again, by hand.","hand","Breaker reset. The living room has power again.",72,0,"")
B.bGP=new A.uy("There is no hot water.","The water heater breaker has tripped (orange). Reset it by hand.","hand","Breaker reset. The water heater is heating again.",75,0,"")
B.bGM=new A.uy("Water is dripping under the kitchen sink.","The slip nut on the P-trap is loose and the joint drips. Tighten it with the wrench.","wrench","Slip nut tightened. The drip stopped.",87,0,"")
B.bGE=new A.uy("There is a wet spot on the wall behind the kitchen.","A crimped joint in the hot water line is leaking. A crimp joint is squeezed with a crimping tool, not tightened with a wrench.","crimper","The joint is crimped again and it does not leak.",96,0,"")
B.bGJ=new A.uy("The outlet by the sofa does not work, but the lights do.","The tester finds power at the box but the outlet is dead: a screw on the outlet has come loose. Turn the breaker off first, then tighten the screws with the screwdriver.","screwdriver","You tightened the loose screw. The outlet works again.",81,72,"Turn the living room breaker OFF first.")
B.bGG=new A.uy("The living room light flickers.","A wire nut in the light box has worked loose. Turn the breaker off, then twist the wire nut tight with the pliers.","pliers","You twisted the wire nut tight. The light is steady.",83,72,"Turn the living room breaker OFF first.")
B.bGH=new A.uy("The kitchen outlet sparks and smells burnt.","The outlet has burnt. Turn the breaker off and replace it with a new outlet.","newoutlet","New outlet fitted. No more sparks.",84,73,"Turn the kitchen breaker OFF first.")
B.bGN=new A.uy("The kitchen outlets are dead.","The GFCI outlet has tripped. Press its RESET button by hand.","hand","You pressed RESET. The kitchen outlets work.",84,0,"")
B.bGI=new A.uy("The toilet keeps running.","The rubber flapper in the tank no longer seals, so water leaks into the bowl all the time. Replace the flapper.","flapper","New flapper fitted. The toilet stops running.",88,0,"")
B.bGL=new A.uy("The kitchen faucet drips.","The faucet washer is worn. Tighten the packing nut with the wrench, then check.","wrench","The faucet is sealed. No more drips.",85,0,"")
B.bGK=new A.uy("There is a hole in the wall.","A hole in the drywall. Stick a drywall patch over it, then tape, mud, sand and paint it.","patch","Patch fitted. Now it only needs mud, sanding and paint.",95,0,"")
B.bGO=new A.uy("The kitchen sink drains very slowly.","The drain is clogged. Use the plunger.","plunger","The clog is gone. The sink drains fast.",94,0,"")
B.wD=new C.du([B.a0u,B.bGF,B.a0v,B.bGP,B.NS,B.bGM,B.NT,B.bGE,B.am9,B.bGJ,B.a0y,B.bGG,B.a0z,B.bGH,B.a0A,B.bGN,B.a0B,B.bGI,B.a0C,B.bGL,B.a0w,B.bGK,B.a0x,B.bGO],C.aw("du<ri,uy>"))
B.efa={duo:0,line3:1,far3:2,skyline:3,lines6:4}
B.eDS=new C.z(D.a33,0)
B.eRf=new C.z(D.arz,1)
B.cqs=w([2,0,1],x.t)
B.eyG=new C.z(B.cqs,2)
B.c5Z=w([0,1,2,3],x.t)
B.eQf=new C.z(B.c5Z,0)
B.dlf=w([0,1,2,5,4,3],x.t)
B.eGZ=new C.z(B.dlf,1)
B.dyB=new C.bw(B.efa,[B.eDS,B.eRf,B.eyG,B.eQf,B.eGZ],C.aw("bw<n,+(ai<H>,H)>"))
B.eeF={michelle:0}
B.dyC=new C.bw(B.eeF,[0.55],x.e)
B.S9=new C.bw(D.hP,[],C.aw("bw<H,cW>"))
B.Iq=new C.bw(D.hP,[],C.aw("bw<H,n>"))
B.dyS=new C.du([23,"neutral",21,"hot1",22,"hot2"],x.v)
B.dyU=new C.du([25,"ground",21,"feed",22,"loadA",24,"loadB"],x.v)
B.eec={tail:0,trap:1,arm:2}
B.dyW=new C.bw(B.eec,["Tailpiece","P-trap","Trap arm"],x.l)
B.aJh={xbot:0,michelle:1,soldier:2,human:3}
B.aGS=new C.bw(B.aJh,["\ud83e\udd16 X Bot","\ud83d\udc83 Dancer","\ud83e\ude96 Soldier","\ud83d\ude42 Person"],x.l)
B.aeY=new C.u(1,0.9137254901960784,0.9215686274509803,0.9372549019607843,D.q)
B.bkW=new C.u(1,0.8549019607843137,0.8666666666666667,0.8901960784313725,D.q)
B.Tf=new A.tK(B.aeY,E.aer,B.aeY,B.bkW,"xbot",!1,0,1)
B.bmU=new C.u(1,0.0784313725490196,0.047058823529411764,0.03137254901960784,D.q)
B.bd7=new C.u(1,0.9607843137254902,0.7725490196078432,0.09411764705882353,D.q)
B.epJ=new A.tK(B.aio,B.bmU,D.dv,B.bd7,"michelle",!0,2,1)
B.brO=new C.u(1,0.8509803921568627,0.6470588235294118,0.48627450980392156,D.q)
B.bqI=new C.u(1,0.3568627450980392,0.4196078431372549,0.22745098039215686,D.q)
B.bfy=new C.u(1,0.5411764705882353,0.4823529411764706,0.3333333333333333,D.q)
B.Jd=new A.tK(B.brO,D.Mg,B.bqI,B.bfy,"soldier",!1,0,1.04)
B.a7J=new A.tK(B.aev,B.M6,B.aix,B.Lz,"human",!1,0,1)
B.aGT=new C.bw(B.aJh,[B.Tf,B.epJ,B.Jd,B.a7J],C.aw("bw<n,tK>"))
B.eeW={soldier:0}
B.dzd=new C.bw(B.eeW,[3.141592653589793],x.e)
B.har=new A.q(0,0,-1.2)
B.ebV=new A.cW("Electrical box","The box is ready. Pull a cable to it, then wire a device.",B.har,9)
B.dzg=new C.du([3,B.ebV],C.aw("du<H,cW>"))
B.aJa={inspect:0,hand:1,screwdriver:2,pliers:3,wrench:4,crimper:5,plunger:6,flapper:7,newoutlet:8,patch:9}
B.Sb=new C.bw(B.aJa,["Look and test","Hand","Screwdriver","Pliers","Wrench","Crimp tool","Plunger","New flapper","New outlet","Drywall patch"],x.l)
B.bLO=new C.a0(63072,"MaterialIcons",!1)
B.dzk=new C.bw(B.aJa,[D.fk,B.aoR,A0.GZ,D.GP,D.p9,B.bLO,A7.a2g,D.qt,B.OM,Z.wd],C.aw("bw<n,a0>"))
B.dA_=new A.i8(18,50,0,20)
B.dAc=new A.i8(-126,126,-66,5)
B.dAj=new A.i8(-4,16,0,24)
B.dCE=new A.aoK(null)
B.aHT=new A.a7e(null)
B.dJo=new A.aq5(null)
B.dMF=new A.IZ(!1,"city","",null)
B.aI2=new A.IZ(!1,"","",null)
B.e7k=new A.On(!0,null,!0,!1,null)
B.hdE=new A.q(16,2.6,0)
B.ebE=new A.cW("Wall drain","The pipe stub that comes out of the wall. The trap arm slides into it.",B.hdE,8)
B.fYQ=new A.q(0,3,-6)
B.ebF=new A.cW("Wall","The copper supply pipes come out of the wall here.",B.fYQ,24)
B.h9M=new A.q(8.2,1,-7)
B.ebG=new A.cW("Toilet","The tank fills from the cold supply on the wall. The bowl drains into the white pipe in the floor.",B.h9M,7)
B.fXu=new A.q(0,0,40)
B.ebH=new A.cW("The room","A room to build from bare studs to finished, working electrics. The walls hold the cable, the boxes and the devices.",B.fXu,190)
B.h6E=new A.q(-2.4,11.5,-3.6)
B.ebI=new A.cW("Hot faucet inlet","The threaded tail under the faucet where the hot supply hose screws on.",B.h6E,7)
B.h0Z=new A.q(-3.6,4,-7.8)
B.ebJ=new A.cW("Light switch","Controls the ceiling light. Tap Open lesson to wire one.",B.h0Z,4.5)
B.h8j=new A.q(0,0.5,2)
B.ebK=new A.cW("Voltage tester","A tester that glows when it touches live power.",B.h8j,6)
B.ebL=new A.cW("Pipe joint","A crimped joint in the hot water line.",B.aWH,4)
B.h73=new A.q(0,-0.2,0.2)
B.ebM=new A.cW("Cover plate","The plate covers the box and the edges of the drywall so nobody touches the wires.",B.h73,8)
B.hcz=new A.q(-4.6,0.5,-3.4)
B.ebN=new A.cW("Hot shut-off valve","The angle stop valve on the hot pipe. Turn the handle to stop the water to the faucet without shutting off the whole house. Hot is always on the left.",B.hcz,8)
B.Vw=new A.q(0,-0.3,3.2)
B.ebO=new A.cW("White wire nut: NEUTRAL","Twist the house white wire and the fixture white wire together under this cap.",B.Vw,6)
B.h84=new A.q(4.6,0.5,-3.4)
B.ebP=new A.cW("Cold shut-off valve","The angle stop valve on the cold pipe. Cold is always on the right.",B.h84,8)
B.h07=new A.q(2.4,11.5,-3.6)
B.ebQ=new A.cW("Cold faucet inlet","The threaded tail under the faucet where the cold supply hose screws on.",B.h07,7)
B.heI=new A.q(0.8,-0.8,1.2)
B.ebR=new A.cW("Black wire to the light","This black wire carries power to the light once the switch is on. It goes on the other brass screw.",B.heI,7)
B.h6A=new A.q(10.05,5.2,-7.5)
B.ebS=new A.cW("Water heater breaker","A big circuit for the water heater. It is ON.",B.h6A,3.5)
B.aVF=new A.q(0,40,0)
B.ebT=new A.cW("Back wall",y.o,B.aVF,140)
B.h9F=new A.q(3,3.8,-7.4)
B.ebU=new A.cW("Kitchen faucet","Hot on the left, cold on the right. Tap Open lesson to connect the supply hoses.",B.h9F,4.5)
B.Aq=new A.q(0,6,0)
B.ebW=new A.cW("Tailpiece","The straight pipe that hangs from the sink drain. Its bottom end is smooth so the slip nut can slide on and grip it.",B.Aq,10)
B.hc5=new A.q(-60,40,50)
B.ebX=new A.cW("Left wall",y.o,B.hc5,140)
B.h1G=new A.q(3,1,0)
B.ebY=new A.cW("P-trap","The U-shaped bend. It always keeps a little water inside, and that water plug blocks sewer gas from coming back up into the house.",B.h1G,11)
B.fYd=new A.q(0,20,5)
B.ebZ=new A.cW("The room","A bare room with the water supply stubs and the drain stub already in the wall and floor.",B.fYd,120)
B.fZw=new A.q(0,-8,0)
B.ec_=new A.cW("Cabinet","The cabinet under the sink where the drain is built.",B.fZw,22)
B.fXs=new A.q(0,0,150)
B.ec0=new A.cW("Lawn","The grass. Walls, floors and the sky stay as they are, but you can add things to the garden with the Furniture button.",B.fXs,400)
B.fZ7=new A.q(0,4,-8)
B.ec1=new A.cW("Wall framing","2x4 studs 16 inches apart. Pipes and cables run through holes drilled in the middle of the studs, never along the edge where a nail could hit them.",B.fZ7,18)
B.aWX=new A.q(0,-0.2,5.1)
B.ec2=new A.cW("TEST and RESET buttons","Press TEST to make the GFCI trip. Press RESET to turn it back on. Test it once a month.",B.aWX,5)
B.aVA=new A.q(0,11,0)
B.ec3=new A.cW("Sink","The sink bowl and the counter. The drain flange at the bottom is where the tailpiece starts.",B.aVA,16)
B.dX=new A.q(0,0,0)
B.ec4=new A.cW("Drywall","The wall surface. A hole is cut in it for the electrical box.",B.dX,22)
B.h3_=new A.q(60,40,50)
B.ec5=new A.cW("Right wall",y.o,B.h3_,140)
B.fXW=new A.q(0,14,-3)
B.ec6=new A.cW("Counter and sink","The faucet is mounted through a hole in the counter.",B.fXW,20)
B.h5e=new A.q(0,-1.9,5)
B.ec7=new A.cW("GREEN screw: GROUND",y.Z,B.h5e,5)
B.fZ4=new A.q(0,47,-2)
B.ec8=new A.cW("Top and bottom plate","The horizontal 2x4s at the top and the bottom of the wall. The studs stand between them.",B.fZ4,70)
B.fXy=new A.q(0,0,-8)
B.ec9=new A.cW("Wall","Behind the wall the drain pipe goes down to the sewer line.",B.fXy,22)
B.fY7=new A.q(0,19,-3)
B.eca=new A.cW("Faucet","The faucet with hot on the left (red) and cold on the right (blue).",B.fY7,14)
B.h3A=new A.q(3.5,2,-7.2)
B.ecb=new A.cW("Kitchen counter and cabinet","The cabinet under the sink is where the drain and the shut-off valves live.",B.h3A,9)
B.h5H=new A.q(10.05,5.7,-7.5)
B.ecc=new A.cW("Kitchen breaker","Protects the kitchen outlets. It is ON.",B.h5H,3.5)
B.h6N=new A.q(4,6,-2.5)
B.ecd=new A.cW("Cold supply hose","A braided steel hose with a rubber liner and a blue band.",B.h6N,9)
B.h8e=new A.q(-1,0.6,4.3)
B.ece=new A.cW("SILVER screw: NEUTRAL side",y.B,B.h8e,5)
B.aaT=new A.q(0,3.7,0)
B.ecf=new A.cW("Slip nut","A big plastic nut. Slide it on the pipe first, then the washer, then join the pieces and hand tighten. A rubber washer inside makes the seal.",B.aaT,7)
B.Vv=new A.q(0,-1,-0.6)
B.ecg=new A.cW("Wire nut","A twist-on cap that joins wires safely. The two white wires are joined here because a switch only cuts the hot wire.",B.Vv,5)
B.h6V=new A.q(-1.5,-0.3,3.2)
B.ech=new A.cW("Black wire nut: HOT","Twist the house black wire and the fixture black wire together under this cap.",B.h6V,6)
B.h5G=new A.q(-1.9,0,-2)
B.eci=new A.cW("Wood stud","The 2x4 frame inside the wall. The electrical box is nailed or screwed to a stud so it cannot move.",B.h5G,16)
B.hap=new A.q(-1,-0.8,4.3)
B.ecj=new A.cW("SILVER screw: NEUTRAL side",y.B,B.hap,5)
B.he2=new A.q(6,3,-7.8)
B.eck=new A.cW("Water and drain pipes","Red is hot water, blue is cold water (PEX tubing). The white pipes are drains. They slope down so the waste flows away.",B.he2,14)
B.hau=new A.q(1,0.6,4.3)
B.ecl=new A.cW("BRASS screw: HOT side",y.C,B.hau,5)
B.haY=new A.q(0,-0.2,4.9)
B.ecm=new A.cW("Mounting strap (yoke)","The metal strap with two screw slots. Long screws through the ears hold the device in the box.",B.haY,7)
B.heF=new A.q(9.55,4.7,-7.5)
B.ecn=new A.cW("Spare breaker","A spare circuit.",B.heF,3.5)
B.fYe=new A.q(0,20,8)
B.eco=new A.cW("Vanity and counter","The cabinet that holds the sink. The pipes live inside it.",B.fYe,70)
B.hdf=new A.q(-3.2,1.3,-7.8)
B.ecp=new A.cW("Living room outlet","A standard outlet. Tap Open lesson to wire one in 3D.",B.hdf,4.5)
B.hb0=new A.q(1.5,-0.3,3.2)
B.ecq=new A.cW("Green ground connection","Join the bare copper house ground wire to the green fixture ground wire.",B.hb0,6)
B.h5n=new A.q(12,2.6,0)
B.ecr=new A.cW("Trap arm","The pipe that carries the waste water from the trap into the wall. It must slope down toward the wall, about 1/4 inch per foot.",B.h5n,9)
B.h7M=new A.q(0,6.5,-7.8)
B.ecs=new A.cW("Electrical cables","Cables run from the breaker panel to every outlet, switch and light. Yellow is 12 gauge for 20 amps. White is 14 gauge for 15 amps.",B.h7M,16)
B.h8y=new A.q(11.2,2.3,-6)
B.ect=new A.cW("Water heater","Heats the water. The cold line goes in at the top and the hot line comes out at the top.",B.h8y,9)
B.h9f=new A.q(9.55,5.2,-7.5)
B.ecu=new A.cW("Bathroom breaker","Protects the bathroom. It is ON.",B.h9f,3.5)
B.h5O=new A.q(5.2,3.9,-7.8)
B.ecv=new A.cW("Kitchen GFCI outlet","Outlets near water must be GFCI. Tap Open lesson to wire one.",B.h5O,4.5)
B.fZ_=new A.q(0,40,-3)
B.ecw=new A.cW("Electrical cable","Yellow 12/2 cable with ground: it carries power from the breaker panel through the holes in the studs to each box.",B.fZ_,80)
B.h6x=new A.q(-8.4,1.2,-6.4)
B.ecx=new A.cW("Sofa","Just furniture, to show the size of the room.",B.h6x,10)
B.ecy=new A.cW("Outlet face","Two outlets. The short slot is hot, the long slot is neutral, and the round hole is ground.",B.aWX,6)
B.h4X=new A.q(0,4,-7.8)
B.ecz=new A.cW("Wall","The drywall of the back wall.",B.h4X,16)
B.hdk=new A.q(0,0,0.6)
B.ecA=new A.cW("Canopy","The round cover that hides the box and the wire connections against the ceiling.",B.hdk,8)
B.ecB=new A.cW("Concrete slab","The foundation. It carries the whole weight of the house. Plumbing drains are placed before it is poured.",B.dX,30)
B.fYT=new A.q(0,40,12)
B.ecC=new A.cW("Front door","Tap the door to go inside the house.",B.fYT,260)
B.aaV=new A.q(8.9,2.6,0)
B.ecD=new A.cW("Slip nut","Hand tighten it, then about a quarter turn with pliers. Over-tightening cracks the plastic.",B.aaV,7)
B.h9d=new A.q(1,-0.8,4.3)
B.ecE=new A.cW("BRASS screw: HOT side",y.C,B.h9d,5)
B.h4F=new A.q(0.6,1.5,-1.8)
B.ecF=new A.cW("Cable to the light (LOAD)","This cable carries the switched power on to the light. The black wire here only has power when the switch is on.",B.h4F,8)
B.h59=new A.q(9.8,5,-7.5)
B.ecG=new A.cW("Breaker panel","The main electrical panel. Each breaker protects one circuit. A breaker that is in the middle position has TRIPPED. Flip it fully OFF and then ON to reset.",B.h59,6)
B.h6S=new A.q(-4,6,-2.5)
B.ecH=new A.cW("Hot supply hose","A braided steel hose with a rubber liner and a red band. Hand tighten the nuts, then a quarter turn with a wrench.",B.h6S,9)
B.ehq=new C.t(66,66)
B.bSL=new C.ae(D.ef,20,F.fz,null,null,null)
B.el1=new C.D(D.w1,B.bSL,null)
B.fuC=new C.F(!0,D.mz,null,null,null,null,12.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fBm=new C.y("A circuit that is not CORRECT and safe can never pass, even if the light or fan would have worked.",null,B.fuC,null,null,null,null,null,null,null,null,null)
B.elc=new C.D(D.hZ,B.fBm,null)
B.fLp=new C.y("Sick people can stay in a hospital bed. Treat each patient before their care runs out, and they go home better.",null,D.UY,null,D.K,null,null,null,null,null,null,null)
B.eli=new C.D(D.alu,B.fLp,null)
B.bRW=new C.ae(D.ef,18,D.bj,null,null,null)
B.elA=new C.D(D.fB,B.bRW,null)
B.elD=new C.D(D.fB,G.aqr,null)
B.epC=new A.y4(0,0,18,0,!1,!1,!1,!1,!1,0,!1,!1,"","",-1,0,-1,0)
B.epD=new A.y4(0,100,120,-2.2,!1,!1,!1,!1,!1,0,!1,!1,"","",-1,0,-1,0)
B.epE=new A.y4(0,40,150,0.5,!1,!1,!1,!1,!1,0,!1,!1,"","",-1,0,-1,0)
B.epF=new A.y4(0,0,0,0,!1,!1,!1,!1,!1,0,!1,!1,"","",-1,0,-1,0)
B.epG=new A.y4(0,-80,50,0,!1,!1,!1,!1,!1,0,!1,!1,"","",-1,0,-1,0)
B.epH=new A.y4(0,0,56,0,!1,!1,!1,!1,!1,0,!1,!1,"","",-1,0,-1,0)
B.esh=new A.a9L(null,null)
B.bj0=new C.u(1,0.30980392156862746,0.7019607843137254,0.9647058823529412,D.q)
B.brn=new C.u(1,0.11372549019607843,0.37254901960784315,0.7686274509803922,D.q)
B.bo5=new C.u(1,0.043137254901960784,0.16470588235294117,0.4196078431372549,D.q)
B.d1n=w([B.bj0,B.brn,B.bo5],x.O)
B.et0=new C.c2(A5.xl,0.5,D.x,null,0,B.d1n,null,null)
B.brE=new C.u(1,0.8392156862745098,0.9019607843137255,0.9176470588235294,D.q)
B.etI=new C.z(B.brE,B.Y4)
B.etR=new C.z(0,120)
B.etS=new C.z(0,300)
B.eu6=new C.z(B.oT,B.dX)
B.evI=new C.z(64,2.4)
B.exn=new C.z("LOAD (taped)",D.d1)
B.bfw=new C.u(1,0.9450980392156862,0.8901960784313725,0.7764705882352941,D.q)
B.biH=new C.u(1,0.8470588235294118,0.7686274509803922,0.6274509803921569,D.q)
B.eyK=new C.z(B.bfw,B.biH)
B.djg=w([D.aw,D.ce,D.aw],x.O)
B.ez8=new C.z(-40,B.djg)
B.eAA=new C.z(63,-2.4)
B.bhG=new C.u(1,0.8901960784313725,0.9254901960784314,0.9607843137254902,D.q)
B.bcv=new C.u(1,0.7372549019607844,0.7843137254901961,0.8392156862745098,D.q)
B.eB7=new C.z(B.bhG,B.bcv)
B.eBo=new C.z(51,B.aeW)
B.bdI=new C.u(1,0.9137254901960784,0.8705882352941177,0.7607843137254902,D.q)
B.eE5=new C.z(B.bdI,B.Bu)
B.be5=new C.u(1,0.9137254901960784,0.9372549019607843,0.9490196078431372,D.q)
B.beG=new C.u(1,0.8509803921568627,0.8941176470588236,0.9098039215686274,D.q)
B.eEV=new C.z(B.be5,B.beG)
B.bnk=new C.u(1,0.9058823529411765,0.8235294117647058,0.8156862745098039,D.q)
B.beH=new C.u(1,0.7058823529411765,0.7176470588235294,0.7411764705882353,D.q)
B.eFU=new C.z(B.bnk,B.beH)
B.bbT=new C.u(1,0.7647058823529411,0.8117647058823529,0.9019607843137255,D.q)
B.eGK=new C.z(B.bbT,B.aip)
B.blP=new C.u(1,0.3568627450980392,0.39215686274509803,0.4392156862745098,D.q)
B.eIx=new C.z("SILVER \xb7 NEUTRAL",B.blP)
B.hdv=new A.q(-1.5,0,0)
B.eIG=new C.z(B.LV,B.hdv)
B.eKc=new C.z(52,B.B1)
B.bii=new C.u(1,0.12156862745098039,0.47843137254901963,0.22745098039215686,D.q)
B.eL4=new C.z("GREEN \xb7 GROUND",B.bii)
B.bqu=new C.u(1,0.9450980392156862,0.9098039215686274,0.8235294117647058,D.q)
B.eLM=new C.z(B.bqu,B.Bu)
B.eM2=new C.z("main","Main water valve")
B.cNV=w([D.vJ,D.bG,D.be],x.O)
B.eOl=new C.z(40,B.cNV)
B.heJ=new A.q(1.5,0,0)
B.eQ7=new C.z(B.YF,B.heJ)
B.bem=new C.u(1,0.9529411764705882,0.9411764705882353,0.9098039215686274,D.q)
B.bll=new C.u(1,0.4823529411764706,0.5294117647058824,0.5803921568627451,D.q)
B.eQP=new C.z(B.bem,B.bll)
B.eRN=new C.z(B.hW,B.Xw)
B.bhl=new C.u(1,0.9529411764705882,0.9019607843137255,0.7843137254901961,D.q)
B.boc=new C.u(1,0.788235294117647,0.7098039215686275,0.5490196078431373,D.q)
B.eS5=new C.z(B.bhl,B.boc)
B.bdX=new C.u(1,0.6039215686274509,0.4196078431372549,0.047058823529411764,D.q)
B.eSA=new C.z("BRASS \xb7 HOT",B.bdX)
B.eT1=new C.z(53,B.YF)
B.a8b=new C.bk(180,40,215)
B.a8c=new C.bk(215,40,345)
B.a8d=new C.bk(60,60,90)
B.eTM=new C.bk(61,-4.6,B.tH)
B.a8e=new C.bk(95,40,185)
B.eUG=new C.bk("Turn the main water ON to test for leaks: pick Hand and tap the main valve.","hand","main")
B.eVy=new C.bk(62,4.6,B.o2)
B.eVI=new C.bk("The water must be OFF before you cut into the pipes: pick Hand and tap the main valve.","hand","main")
B.eW9=new C.bk("Fit the parts in the order of the job list.","",null)
B.eWy=new C.bk("Looks good. Watch for leaks; if none, the job is done.","",null)
B.eXo=new C.cw([0,17.1,16.4,5.8])
B.eXr=new C.cw([0,-0.1,16.4,4.2])
B.eYu=new C.cw([15.6,9,14.8,22])
B.eYy=new C.cw([-15.6,9,14.8,22])
B.eYH=new C.ea([72,60,44,B.M7,B.Ma])
B.brj=new C.u(1,0.8941176470588236,0.6901960784313725,0.47843137254901963,D.q)
B.eYY=new C.ea([124,70,44,B.brj,B.q4])
B.eZ4=new C.ea([90,64,46,B.agz,D.hg])
B.eZn=new C.ea([110,70,62,D.bN,D.al])
B.eZs=new C.ea([84,60,40,B.agC,B.Ma])
B.fzZ=new C.y("\u260e",null,D.pA,null,null,null,null,null,null,null,null,null)
B.baF=new C.p_(B.fzZ,D.aw,null,24,null)
B.fCv=new C.y("City office",null,D.de,null,null,null,null,null,null,null,null,null)
B.dax=w([B.baF,D.bd,B.fCv],x.p)
B.f1e=new C.ce(D.aM,D.e,D.i,D.m,null,D.p,null,0,B.dax,null)
B.bTv=new C.ae(D.OJ,26,D.c2,null,null,null)
B.fPQ=new C.y("Hallway tour",null,D.hE,null,null,null,null,null,null,null,null,null)
B.fAY=new C.y("Just the hall and its big TVs, 45 seconds",null,D.vl,null,null,null,null,null,null,null,null,null)
B.dsj=w([B.fPQ,B.fAY],x.p)
B.bt7=new C.fi(D.ag,D.e,D.i,D.E,null,D.p,null,0,B.dsj,null)
B.bFn=new C.bz(1,D.bb,B.bt7,null)
B.cYe=w([B.bTv,D.bd,B.bFn,A_.OZ],x.p)
B.f1h=new C.ce(D.aM,D.e,D.i,D.m,null,D.p,null,0,B.cYe,null)
B.bR9=new C.ae(D.i2,30,D.c,null,null,null)
B.fRR=new C.y("Play the tour",null,D.k5,null,null,null,null,null,null,null,null,null)
B.d6c=w([B.bR9,D.bm,B.fRR],x.p)
B.f1n=new C.ce(D.aM,D.b8,D.i,D.m,null,D.p,null,0,B.d6c,null)
B.v8=new A.JK(0,"correct")
B.aPL=new A.JK(1,"incorrect")
B.rZ=new A.JK(2,"unsafe")
B.TJ=new A.JK(3,"incomplete")
B.f1B=new A.JK(4,"requiresVerification")
B.edd={hospital:0,shop:1,school:2,firestation:3,house2:4,bighouse:5,store:6,gasstation:7,dmv:8,tower:9,hq:10}
B.aQm=new C.dF(B.edd,11,x.M)
B.ecY={wardrobe:0,shelf:1,lamp:2,console:3}
B.f2Z=new C.dF(B.ecY,4,x.M)
B.aQq=new C.jp([1,2,3,4,5],C.aw("jp<H>"))
B.ecI={house2:0,bighouse:1,shop:2,hospital:3,school:4,firestation:5,store:6,gasstation:7,tower:8,hq:9,dmv:10}
B.f3b=new C.dF(B.ecI,11,x.M)
B.eeZ={billboard:0,bighouse:1,townsign:2,cornersign:3,adboard:4,tower:5,hq:6,store:7,gasstation:8,ubstation:9,dmv:10}
B.f3e=new C.dF(B.eeZ,11,x.M)
B.aQv=new C.dF(D.hP,0,C.aw("dF<H>"))
B.f58=new C.av(0,36)
B.f5i=new C.av(126,84)
B.f6f=new C.a6(110,64,null,null)
B.f6g=new C.a6(120,70,null,null)
B.f6m=new C.a6(270,64,null,null)
B.f6n=new C.a6(270,70,null,null)
B.JR=new A.FO(0,"hot")
B.JS=new A.FO(1,"neutral")
B.JT=new A.FO(2,"ground")
B.aSa=new A.FO(3,"load")
B.feS=new C.F(!0,D.c,null,null,null,null,12.5,null,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.ffv=new C.F(!0,D.c,null,null,null,null,13.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.ffA=new C.F(!0,D.c,null,null,null,null,16,D.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,K.CR,null,null,null)
B.fgO=new C.F(!0,D.aB,null,null,null,null,14,D.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.aSC=new C.F(!0,D.aB,null,null,null,null,11.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fhk=new C.F(!0,D.bG,null,null,null,null,12,D.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fhu=new C.F(!0,D.ae,null,null,null,null,13.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fhV=new C.F(!0,D.aC,null,null,null,null,12.5,D.u,null,2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fi4=new C.F(!0,D.aR,null,null,null,null,11.5,null,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fig=new C.F(!0,D.bG,null,null,null,null,15,D.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fix=new C.F(!0,D.c,null,null,null,null,12.5,D.Q,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.aSQ=new C.F(!0,D.ae,null,null,null,null,12,D.Q,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fjs=new C.F(!0,D.c,null,null,null,null,13,D.Q,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.a9J=new C.F(!0,D.ae,null,null,null,null,null,null,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fjW=new C.F(!0,D.bG,null,null,null,null,13,D.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fkB=new C.F(!0,D.aB,null,null,null,null,9.5,null,null,null,null,null,1.15,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fkS=new C.F(!0,D.ae,null,null,null,null,12.5,null,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fkT=new C.F(!0,D.fi,null,null,null,null,12,null,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.flu=new C.F(!0,null,null,null,null,null,9,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.K1=new C.F(!0,D.aC,null,null,null,null,12.5,D.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.flZ=new C.F(!0,D.c,null,null,null,null,11.5,D.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.aTa=new C.F(!0,D.c,null,null,null,null,14,null,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fmh=new C.F(!0,D.bL,null,null,null,null,13,D.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fni=new C.F(!0,D.mz,null,null,null,null,12,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fno=new C.F(!0,D.ae,null,null,null,null,13.5,null,D.cE,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fnz=new C.F(!0,D.fi,null,null,null,null,11.5,D.Q,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fnE=new C.F(!0,D.eH,null,null,null,null,14,D.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fob=new C.F(!0,D.bG,null,null,null,null,18,D.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.foK=new C.F(!0,D.aR,null,null,null,null,12,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fpv=new C.F(!0,D.bG,null,null,null,null,null,D.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.aTD=new C.F(!0,D.ae,null,null,null,null,13.5,null,null,null,null,null,1.5,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fqp=new C.F(!0,D.aC,null,null,null,null,null,D.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fqT=new C.F(!0,D.aB,null,null,null,null,11,D.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fti=new C.F(!0,D.bG,null,null,null,null,44,D.u,null,2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.aU8=new C.F(!0,D.c,null,null,null,null,13.5,D.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.ftI=new C.F(!0,D.aR,null,null,null,null,11.5,null,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fuf=new C.F(!0,D.b3,null,null,null,null,14.5,D.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fuq=new C.F(!0,F.fz,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fuH=new C.F(!0,D.fi,null,null,null,null,12,D.Q,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fv1=new C.y("Wire guide (U.S. houses)",null,D.de,null,null,null,null,null,null,null,null,null)
B.fve=new C.y("Which wall?",null,D.V6,null,null,null,null,null,null,null,null,null)
B.ffK=new C.F(!0,D.w,null,null,null,null,12,D.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fvz=new C.y("Open the 3D lesson",null,B.ffK,null,null,null,null,null,null,null,null,null)
B.fwm=new C.y("Never rely on color alone. With the power off, prove what each wire does with a tester and the device diagram. A licensed electrician does real house wiring.",null,L.a9L,null,null,null,null,null,null,null,null,null)
B.fww=new C.y("Tip: pick a part, then tap its glowing spot. Joints on hoses, bolts and the drain are only loose: pick the Wrench and tap them. Use your Hand on the main water valve: turn the water OFF before you cut into a pipe, and ON to test for leaks.",null,D.UG,null,null,null,null,null,null,null,null,null)
B.fwR=new C.y("Answer, then submit. Nothing is marked until you submit.",null,H.vg,null,null,null,null,null,null,null,null,null)
B.fxI=new C.y("You used all three lives. Electricity does not give second chances, so in real life you turn the breaker OFF and test the wires every single time. Try the job again.",null,D.x_,null,null,null,null,null,null,null,null,null)
B.fxZ=new C.y("A different house",null,null,null,null,null,null,null,null,null,null,null)
B.fyq=new C.y("\ud83c\udf5e",null,D.wY,null,null,null,null,null,null,null,null,null)
B.fyr=new C.y("Show me",null,D.lQ,null,null,null,null,null,null,null,null,null)
B.fyJ=new C.y("Connect it to...",null,D.lP,null,null,null,null,null,null,null,null,null)
B.fyV=new C.y("Start this job again",null,null,null,null,null,null,null,null,null,null,null)
B.fpI=new C.F(!0,D.ct,null,null,null,null,12.5,D.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fze=new C.y("Give back",null,B.fpI,null,null,null,null,null,null,null,null,null)
B.fzW=new C.y("Edit your billboard",null,D.de,null,null,null,null,null,null,null,null,null)
B.fB4=new C.y("L is the lobby. On every level there is a balcony with a view of the town.",null,H.E7,null,null,null,null,null,null,null,null,null)
B.fBj=new C.y("Submit the test",null,null,null,null,null,null,null,null,null,null,null)
B.fBH=new C.y("\ud83e\udeaa",null,D.wY,null,null,null,null,null,null,null,null,null)
B.fBU=new C.y("Start from a bare house (wire everything)",null,null,null,null,null,null,null,null,null,null,null)
B.fCD=new C.y("THE RACE",null,P.t9,null,null,null,null,null,null,null,null,null)
B.fCI=new C.y("What should the drone show you?",null,D.a9C,null,null,null,null,null,null,null,null,null)
B.fDl=new C.y("Diagram lessons",null,null,null,null,null,null,null,null,null,null,null)
B.fDp=new C.y("Go through",null,null,null,null,null,null,null,null,null,null,null)
B.fEd=new C.y("The customer says\u2026",null,D.de,null,null,null,null,null,null,null,null,null)
B.fEL=new C.y("Submit for inspection",null,null,null,null,null,null,null,null,null,null,null)
B.fEZ=new C.y("What the house needs",null,D.de,null,null,null,null,null,null,null,null,null)
B.fFa=new C.y("Next job",null,null,null,null,null,null,null,null,null,null,null)
B.fhf=new C.F(!0,D.w,null,null,null,null,14,D.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fFi=new C.y("Go in",null,B.fhf,null,null,null,null,null,null,null,null,null)
B.fqM=new C.F(!0,D.aC,null,null,null,null,22,D.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fFm=new C.y("My House",null,B.fqM,null,D.K,null,null,null,null,null,null,null)
B.fFt=new C.y("New job",null,null,null,null,null,null,null,null,null,null,null)
B.aTf=new C.F(!0,D.ct,null,null,null,null,null,D.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fFA=new C.y("Job over",null,B.aTf,null,null,null,null,null,null,null,null,null)
B.fFQ=new C.y("Three shocks. In real life you switch the breaker off and test the wires, every time. Try another call.",null,D.x_,null,null,null,null,null,null,null,null,null)
B.fFX=new C.y("Learn the trades",null,Q.t7,null,null,null,null,null,null,null,null,null)
B.fGx=new C.y("Practice mode: no hints. You will only hear from me when something is wrong.",null,H.E7,null,null,null,null,null,null,null,null,null)
B.fGL=new C.y("New call",null,null,null,null,null,null,null,null,null,null,null)
B.fGQ=new C.y("Job done! \ud83c\udf89",null,L.K7,null,null,null,null,null,null,null,null,null)
B.fGU=new C.y("Wire guide",null,null,null,null,null,null,null,null,null,null,null)
B.fI2=new C.y("Next call",null,null,null,null,null,null,null,null,null,null,null)
B.fIq=new C.y("Plug in",null,D.de,null,null,null,null,null,null,null,null,null)
B.fIQ=new C.y("Look around",null,null,null,null,null,null,null,null,null,null,null)
B.fJa=new C.y("\ud83d\udef5",null,D.wX,null,null,null,null,null,null,null,null,null)
B.fJp=new C.y("The customer wants:",null,D.US,null,null,null,null,null,null,null,null,null)
B.fJA=new C.y('Tip: pick "Look and test" and tap things to find out what is wrong. Then pick the right tool. Turn the breaker off (hand) before you touch any wire.',null,D.UG,null,null,null,null,null,null,null,null,null)
B.fmi=new C.F(!0,D.aB,null,null,null,null,11.5,D.H,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fJR=new C.y("INCOMING CALL",null,B.fmi,null,null,null,null,null,null,null,null,null)
B.fJX=new C.y("Elevator",null,D.fw,null,null,null,null,null,null,null,null,null)
B.fKY=new C.y("Deliveries",null,D.fw,null,null,null,null,null,null,null,null,null)
B.fLb=new C.y("Every connection is on the right terminal and every safety check passes.",null,D.ta,null,null,null,null,null,null,null,null,null)
B.fLk=new C.y("Message \xb7 now",null,D.vf,null,null,null,null,null,null,null,null,null)
B.fM9=new C.y("5 bedrooms, 3 bathrooms and a garden. Walk in, look all round, fix what is wrong.",null,A4.UB,null,D.K,null,null,null,null,null,null,null)
B.fMe=new C.y("Call over",null,B.aTf,null,null,null,null,null,null,null,null,null)
B.fMl=new C.y("\ud83d\udd12",null,Y.UT,null,null,null,null,null,null,null,null,null)
B.fMm=new C.y("\u23cf Unplug",null,F.Ac,null,null,null,null,null,null,null,null,null)
B.fMs=new C.y("The game is closed for now",null,D.n_,null,D.K,null,null,null,null,null,null,null)
B.fgZ=new C.F(!0,D.ae,null,null,null,null,14.5,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fMF=new C.y("You missed 3 jobs in a row. The City office needs people who answer the phone and finish the job.",null,B.fgZ,null,D.K,null,null,null,null,null,null,null)
B.fMH=new C.y("A different call",null,null,null,null,null,null,null,null,null,null,null)
B.fMZ=new C.y("One board on its own, or several boards standing apart.",null,H.vg,null,null,null,null,null,null,null,null,null)
B.fN9=new C.y("\ud83d\udecf\ufe0f",null,D.nK,null,null,null,null,null,null,null,null,null)
B.fNB=new C.y("Job complete! \ud83c\udf89",null,L.K7,null,null,null,null,null,null,null,null,null)
B.fNO=new C.y("OPEN ORDERS",null,P.t9,null,null,null,null,null,null,null,null,null)
B.fO7=new C.y("Colours",null,D.Ab,null,null,null,null,null,null,null,null,null)
B.fOb=new C.y("How you are doing",null,D.hE,null,null,null,null,null,null,null,null,null)
B.fOJ=new C.y("All fixed! \ud83c\udf89",null,L.K7,null,null,null,null,null,null,null,null,null)
B.fON=new C.y("These are the usual U.S. house wiring colors. Colors are a hint, not proof: old work, switch loops and other countries differ. A real installer proves what each wire does with a tester, with the power off, and follows the device diagram.",null,A8.a9K,null,null,null,null,null,null,null,null,null)
B.fOW=new C.y("Test (marked on submit)",null,null,null,null,null,null,null,null,null,null,null)
B.fP8=new C.y("Messages",null,D.vf,null,null,null,null,null,null,null,null,null)
B.aUJ=new C.y("Stay",null,null,null,null,null,null,null,null,null,null,null)
B.fPV=new C.y("\ud83d\ude81",null,D.wX,null,null,null,null,null,null,null,null,null)
B.fQ7=new C.y("Choose a level. A red one has an office with no power.",null,D.Ai,null,null,null,null,null,null,null,null,null)
B.aUL=new C.y("A different job",null,null,null,null,null,null,null,null,null,null,null)
B.fQW=new C.y("It goes on the back wall, not wired yet. Tap the red one to wire it yourself.",null,H.vg,null,null,null,null,null,null,null,null,null)
B.fRT=new C.y("\ud83d\uded7",null,D.wX,null,null,null,null,null,null,null,null,null)
B.fSd=new C.y("\u26a1",null,D.pz,null,null,null,null,null,null,null,null,null)
B.fSK=new C.y("Practice (instant feedback)",null,null,null,null,null,null,null,null,null,null,null)
B.fSP=new C.y("The job",null,D.de,null,null,null,null,null,null,null,null,null)
B.fTK=new C.y("Stay in the room",null,null,null,null,null,null,null,null,null,null,null)
B.fsG=new C.F(!0,F.fz,null,null,null,null,12,D.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fU0=new C.y("\ud83e\udea7 Billboards",null,B.fsG,null,null,null,null,null,null,null,null,null)
B.fU6=new C.y("Choose a billboard",null,D.de,null,null,null,null,null,null,null,null,null)
B.fUc=new C.y("Which sign?",null,D.Ab,null,null,null,null,null,null,null,null,null)
B.fUk=new C.y("\ud83d\udc8a",null,D.wY,null,null,null,null,null,null,null,null,null)
B.fXn=new A.q(3.6,2.6,0.6)
B.fXp=new A.q(0,56,0.9)
B.fXq=new A.q(-146.4,62,84)
B.iq=new A.q(0,0,1)
B.fXt=new A.q(0,0,3)
B.aaH=new A.q(0,0,4)
B.fXv=new A.q(0,0,500)
B.fXw=new A.q(0,0,640)
B.fXx=new A.q(0,0,800)
B.te=new A.q(0,0,-1)
B.aaI=new A.q(0,0,-60)
B.fXA=new A.q(0,101,38)
B.fXB=new A.q(0,105,280)
B.aVz=new A.q(0,10,0)
B.fXC=new A.q(0,10,3)
B.fXD=new A.q(0,110,10)
B.fXE=new A.q(0,110,95)
B.fXF=new A.q(0,112,36)
B.fXG=new A.q(0,116,0)
B.fXH=new A.q(0,11,-15)
B.fXI=new A.q(0,120,0)
B.fXJ=new A.q(0,122,0)
B.fXK=new A.q(0,124,0)
B.fXL=new A.q(0,126,4)
B.aVB=new A.q(0,12,0)
B.fXM=new A.q(0,12,3)
B.fXN=new A.q(0,130,-3)
B.aaJ=new A.q(0,13,0)
B.fXO=new A.q(0,13,56)
B.fXP=new A.q(0,13,-8)
B.fXQ=new A.q(0,142,0)
B.Kv=new A.q(0,14,0)
B.fXR=new A.q(0,14,11)
B.fXS=new A.q(0,14,150)
B.fXT=new A.q(0,14,2)
B.fXU=new A.q(0,14,32)
B.aVC=new A.q(0,14,40)
B.fXV=new A.q(0,14,5)
B.fXX=new A.q(0,14,-9)
B.fXY=new A.q(0,150,-150)
B.fXZ=new A.q(0,159,0)
B.fY_=new A.q(0,165,3)
B.fY0=new A.q(0,165,-63)
B.fY1=new A.q(0,16,0)
B.fY2=new A.q(0,178,-30)
B.aaK=new A.q(0,17,0)
B.fY3=new A.q(0,17,21)
B.fY4=new A.q(0,188,0)
B.fY5=new A.q(0,19,0)
B.fY6=new A.q(0,19,14)
B.fY8=new A.q(0,19,-30)
B.eb=new A.q(0,1,0)
B.fYa=new A.q(0,202,0)
B.fYb=new A.q(0,20,0)
B.fYc=new A.q(0,20,16)
B.fYf=new A.q(0,20,-14)
B.fYg=new A.q(0,20,-6)
B.fYh=new A.q(0,210,-150)
B.fYi=new A.q(0,216,-30)
B.fYj=new A.q(0,21,0)
B.fYk=new A.q(0,22,-11)
B.fYl=new A.q(0,22,-12)
B.fYm=new A.q(0,22,-39)
B.fYp=new A.q(0,23,0)
B.fYs=new A.q(0,24,0)
B.fYt=new A.q(0,24,13)
B.fYv=new A.q(0,250,640)
B.Ap=new A.q(0,250,-118)
B.fYx=new A.q(0,252,0)
B.fYy=new A.q(0,25,-15)
B.fYz=new A.q(0,26,-24)
B.Vt=new A.q(0,28,0)
B.fYA=new A.q(0,28,-8)
B.aVE=new A.q(0,29,40)
B.fYB=new A.q(0,2,14)
B.fYC=new A.q(0,304,-150)
B.aaL=new A.q(0,30,0)
B.fYD=new A.q(0,30,110)
B.fYE=new A.q(0,316,0)
B.fYF=new A.q(0,31,46)
B.fYG=new A.q(0,31,-6)
B.fYH=new A.q(0,330,260)
B.fYI=new A.q(0,34,0)
B.fYJ=new A.q(0,36,0)
B.fYK=new A.q(0,36,19)
B.fYL=new A.q(0,36,-3)
B.fYM=new A.q(0,37,22)
B.fYN=new A.q(0,3,0)
B.fYO=new A.q(0,3,150)
B.fYP=new A.q(0,3,-30)
B.fYR=new A.q(0,400,60)
B.fYS=new A.q(0,40,100)
B.fYU=new A.q(0,40,150)
B.fYV=new A.q(0,40,17)
B.fYX=new A.q(0,40,40)
B.fYY=new A.q(0,40,45)
B.fYZ=new A.q(0,40,50)
B.fZ0=new A.q(0,40,-6)
B.aVG=new A.q(0,44,46)
B.fZ1=new A.q(0,44,55)
B.fZ2=new A.q(0,46,0)
B.fZ3=new A.q(0,47,0)
B.aVH=new A.q(0,48,0)
B.fZ5=new A.q(0,48,20)
B.fZ6=new A.q(0,48,82)
B.Vu=new A.q(0,4,-2)
B.fZa=new A.q(0,520,1450)
B.aVI=new A.q(0,52,0)
B.fZb=new A.q(0,52,52)
B.fZd=new A.q(0,55,0)
B.aaM=new A.q(0,58,0)
B.fZe=new A.q(0,5,4)
B.fZg=new A.q(0,66,0)
B.fZh=new A.q(0,66,1)
B.fZi=new A.q(0,6,-15)
B.fZj=new A.q(0,75,-30)
B.aVJ=new A.q(0,76,36)
B.aaN=new A.q(0,7,0)
B.fZk=new A.q(0,7,-5)
B.aVK=new A.q(0,82,0)
B.x7=new A.q(0,8,0)
B.fZl=new A.q(0,8,6)
B.fZm=new A.q(0,8,90)
B.fZn=new A.q(0,8,-16)
B.fZo=new A.q(0,8,-19)
B.fZp=new A.q(0,8,-4)
B.fZq=new A.q(0,900,1600)
B.fZr=new A.q(0,91,80)
B.aVL=new A.q(0,92,1)
B.fZs=new A.q(0,94,13)
B.fZt=new A.q(0,98,8)
B.fZu=new A.q(0,99,38)
B.aaO=new A.q(0,9,0)
B.aVM=new A.q(0,9,-3)
B.aaP=new A.q(0,-4,28)
B.fZv=new A.q(0,-4,-20)
B.fZz=new A.q(-100,38,0.7)
B.fZC=new A.q(100,100,320)
B.fZD=new A.q(100,14,36)
B.fZE=new A.q(100,24,36)
B.fZF=new A.q(100,24,8)
B.fZG=new A.q(100,290,-330)
B.fZH=new A.q(100,7,7)
B.fZI=new A.q(101,4,37)
B.fZL=new A.q(10,12,10)
B.fZM=new A.q(10,12,16)
B.fZN=new A.q(10,16,3)
B.fZO=new A.q(10,26,2)
B.fZP=new A.q(10,34,1)
B.fZQ=new A.q(10,3,7)
B.fZR=new A.q(10,60,14)
B.fZS=new A.q(10,8,10)
B.fZT=new A.q(10,8,15)
B.fZV=new A.q(110,0,20)
B.fZW=new A.q(110,130,20)
B.fZX=new A.q(110,14,2)
B.fZY=new A.q(110,8,34)
B.fZZ=new A.q(110,96,120)
B.aVN=new A.q(112,22,3)
B.h__=new A.q(112,46,2)
B.h_0=new A.q(11,12,30)
B.aVO=new A.q(11,16,7)
B.h_1=new A.q(11,1,11)
B.h_2=new A.q(120,0,-30)
B.h_3=new A.q(120,28,22)
B.h_4=new A.q(120,40,100)
B.h_5=new A.q(124,2,26)
B.h_6=new A.q(124,4,60)
B.h_7=new A.q(125,8,54)
B.h_8=new A.q(126,2,62)
B.aVP=new A.q(12,3,9)
B.h_9=new A.q(12,4,22)
B.h_a=new A.q(12,86,0)
B.h_b=new A.q(130,18,12)
B.h_c=new A.q(130,28,24)
B.aVQ=new A.q(130,4,14)
B.aVR=new A.q(130,56,80)
B.h_d=new A.q(130,5,50)
B.h_e=new A.q(132,14,150)
B.h_f=new A.q(132,2,52)
B.aVS=new A.q(134,4,84)
B.h_g=new A.q(13,0,0)
B.h_h=new A.q(13,12,13)
B.h_i=new A.q(13,15,2)
B.aVT=new A.q(13,18,8)
B.h_j=new A.q(13,28,3)
B.h_k=new A.q(0,0.52,2.35)
B.h_l=new A.q(140,28,22)
B.h_m=new A.q(140,9,43)
B.h_n=new A.q(144,2,26)
B.h_o=new A.q(146,3,40)
B.h_p=new A.q(148,60,120)
B.h_q=new A.q(14,10,2)
B.aVU=new A.q(14,11,14)
B.h_r=new A.q(14,13,28)
B.h_s=new A.q(14,14,3)
B.h_t=new A.q(14,17,4)
B.h_u=new A.q(14,20,-28)
B.h_v=new A.q(14,30,14)
B.h_w=new A.q(14,36,14)
B.h_x=new A.q(14,3,14)
B.h_y=new A.q(150,30,42)
B.h_z=new A.q(150,70,5)
B.h_A=new A.q(151,3,43)
B.h_B=new A.q(152,4,7)
B.h_D=new A.q(16,10,10)
B.h_E=new A.q(16,16,16)
B.h_F=new A.q(16,3,11)
B.h_G=new A.q(16,80,60)
B.h_H=new A.q(16,9,2)
B.h_I=new A.q(17,1,0)
B.aVV=new A.q(17,3,17)
B.h_J=new A.q(27,1.4,27)
B.h_K=new A.q(18,18,14)
B.h_L=new A.q(18,20,18)
B.h_M=new A.q(18,22,2)
B.h_N=new A.q(18,28,16)
B.h_O=new A.q(18,2,18)
B.h_P=new A.q(18,3,0)
B.h_Q=new A.q(18,6,0)
B.h_R=new A.q(18,80,2)
B.h_S=new A.q(18,90,5)
B.h_T=new A.q(18,9,11)
B.h_U=new A.q(190,20,60)
B.h_V=new A.q(190,320,100)
B.h_W=new A.q(19,13,7)
B.h_X=new A.q(70,0.6,50)
B.h_Y=new A.q(0,3,-6.5)
B.h_Z=new A.q(-4,20.4,0)
B.h0_=new A.q(1,1,0.64)
B.h00=new A.q(-4.6,1.5,-3.6)
B.h01=new A.q(0,-13.5,-1.5)
B.h02=new A.q(4,10,3.5)
B.aVW=new A.q(0.95,1.7,0.85)
B.hF=new A.q(1,0,0)
B.h03=new A.q(1,16,36)
B.h04=new A.q(1,18,18)
B.aVX=new A.q(1,22,11)
B.h05=new A.q(1,26,14)
B.h06=new A.q(1,28,14)
B.aVY=new A.q(1,2,1)
B.aVZ=new A.q(1,3,1)
B.aaQ=new A.q(1,3,6)
B.h08=new A.q(1,0.9,0.06)
B.h09=new A.q(1.2,44,34)
B.h0b=new A.q(200,0,500)
B.h0c=new A.q(200,0,900)
B.h0d=new A.q(200,140,200)
B.h0h=new A.q(1.6,15,1.6)
B.h0i=new A.q(20,12,14)
B.aW_=new A.q(20,14,7)
B.h0j=new A.q(20,2,2)
B.h0k=new A.q(20,2,8)
B.h0l=new A.q(20,30,26)
B.h0m=new A.q(20,3,14)
B.h0n=new A.q(20,4,26)
B.h0o=new A.q(20,92,26)
B.h0p=new A.q(216,8,216)
B.h0q=new A.q(22,12,34)
B.h0r=new A.q(22,14,0)
B.h0s=new A.q(22,14,2)
B.h0t=new A.q(22,14,3)
B.h0u=new A.q(22,16,3)
B.h0v=new A.q(22,18,14)
B.h0w=new A.q(22,2,28)
B.h0x=new A.q(22,3,10)
B.h0y=new A.q(22,3,22)
B.h0z=new A.q(22,4,20)
B.h0A=new A.q(230,330,-210)
B.h0B=new A.q(230,-40,100)
B.h0C=new A.q(240,150,60)
B.h0D=new A.q(244,6,64)
B.h0E=new A.q(140,15,3.6)
B.h0F=new A.q(24,12,34)
B.h0G=new A.q(24,14,22)
B.h0H=new A.q(24,38,0)
B.aW0=new A.q(24,6,14)
B.h0I=new A.q(250,92,6)
B.h0J=new A.q(260,300,-160)
B.h0K=new A.q(262,3,5)
B.h0L=new A.q(262,3,56)
B.h0M=new A.q(26,14,26)
B.h0N=new A.q(26,2,26)
B.aW1=new A.q(26,4,22)
B.h0O=new A.q(26,72,26)
B.h0P=new A.q(26,8,18)
B.h0Q=new A.q(26,-34,96)
B.h0S=new A.q(7.4,6,10.4)
B.h0T=new A.q(-0.1,0,0)
B.aW2=new A.q(2,100,90)
B.h0U=new A.q(2,10,2)
B.aW3=new A.q(2,12,60)
B.h0V=new A.q(2,13,2)
B.aW4=new A.q(2,23,12)
B.aW5=new A.q(2,28,22)
B.h0W=new A.q(2,5,1)
B.h0X=new A.q(2,700,900)
B.aW6=new A.q(2,8,2)
B.h0Y=new A.q(1,0.9,0.8)
B.h1_=new A.q(64,10,-1.4)
B.aW7=new A.q(0,9.4,-1.5)
B.h10=new A.q(47,48,3.5)
B.h11=new A.q(19.6,0,-1.5)
B.aW8=new A.q(0,56,1.3)
B.h12=new A.q(0,15.5,0)
B.h13=new A.q(3000,0,3000)
B.h14=new A.q(3000,0,-3000)
B.h16=new A.q(300,6,3)
B.h18=new A.q(30,16,30)
B.aW9=new A.q(30,16,72)
B.h19=new A.q(30,22,0)
B.h1a=new A.q(30,24,8)
B.h1b=new A.q(30,28,18)
B.h1c=new A.q(30,29,0)
B.h1d=new A.q(30,34,40)
B.h1e=new A.q(30,40,100)
B.h1g=new A.q(30,6,12)
B.h1h=new A.q(324,114,6)
B.aWa=new A.q(324,6,10)
B.h1i=new A.q(32,2,20)
B.h1j=new A.q(33,11,10)
B.h1k=new A.q(34,10,1)
B.h1l=new A.q(34,22,3)
B.aWb=new A.q(34,25,18)
B.h1m=new A.q(34,30,1)
B.aWc=new A.q(34,39,18)
B.aWd=new A.q(34,42,18)
B.h1n=new A.q(34,4,28)
B.aWf=new A.q(34,8,18)
B.h1o=new A.q(-1,-1.7,2.3)
B.h1p=new A.q(366,124,6)
B.aWg=new A.q(366,6,10)
B.h1q=new A.q(36,22,0)
B.h1r=new A.q(36,30,0)
B.h1s=new A.q(36,30,1)
B.h1t=new A.q(36,4,3)
B.h1u=new A.q(36,60,12)
B.h1v=new A.q(0,93,3.5)
B.h1w=new A.q(37,16,0)
B.h1x=new A.q(37,50,38)
B.h1y=new A.q(38,10,24)
B.h1z=new A.q(38,20,3)
B.h1A=new A.q(38,2,6)
B.h1B=new A.q(-0.2,-0.3,-0.4)
B.h1C=new A.q(60,62,3.6)
B.h1D=new A.q(0,9.5,-1.5)
B.h1E=new A.q(0,48.6,55)
B.aWh=new A.q(3,12,12)
B.aWi=new A.q(3,14,18)
B.h1F=new A.q(3,16,3)
B.h1H=new A.q(3,22,2)
B.h1I=new A.q(3,26,3)
B.aaR=new A.q(3,3,3)
B.h1J=new A.q(3,42,70)
B.h1K=new A.q(3,46,90)
B.h1L=new A.q(3,5,3)
B.h1N=new A.q(40,12,2)
B.h1O=new A.q(40,16,18)
B.h1P=new A.q(40,1,14)
B.h1Q=new A.q(40,28,1)
B.h1R=new A.q(40,2,104)
B.h1S=new A.q(40,2,24)
B.h1T=new A.q(40,30,26)
B.h1U=new A.q(40,60,40)
B.h1V=new A.q(40,80,3)
B.h1W=new A.q(40,8,104)
B.h1X=new A.q(42,2,28)
B.h1Y=new A.q(44,10,2)
B.aWk=new A.q(44,2,14)
B.h1Z=new A.q(44,3,22)
B.h2_=new A.q(44,72,20)
B.h20=new A.q(0.9,0,4.4)
B.h21=new A.q(8.2,1.9,-7.55)
B.h22=new A.q(46,10,34)
B.h23=new A.q(46,3,10)
B.h24=new A.q(46,3,3)
B.h25=new A.q(48,2,24)
B.h26=new A.q(120.6,140,-52)
B.h27=new A.q(0,-47.25,-2.25)
B.h28=new A.q(-147.6,54,45)
B.h29=new A.q(0.6,68,0.4)
B.h2a=new A.q(64,49,8.4)
B.h2b=new A.q(1.5,28,120)
B.h2c=new A.q(0,1.59,0.14)
B.h2d=new A.q(4,108,0)
B.h2e=new A.q(4,80,104)
B.h2f=new A.q(4,96,0)
B.h2g=new A.q(0,-3.4,1)
B.h2h=new A.q(25,79,1.4)
B.h2i=new A.q(1,0,-1.2)
B.h2j=new A.q(0.6,4,2.4)
B.h2k=new A.q(50,12,32)
B.h2l=new A.q(50,1,2)
B.h2m=new A.q(50,28,42)
B.h2n=new A.q(50,4,28)
B.h2o=new A.q(51,7,33)
B.h2p=new A.q(52,10,22)
B.h2q=new A.q(52,56,1)
B.h2r=new A.q(54,5,18)
B.h2u=new A.q(56,18,18)
B.h2v=new A.q(56,2,36)
B.h2w=new A.q(56,3,32)
B.h2x=new A.q(56,3,48)
B.h2y=new A.q(1.3,0.4,0.55)
B.h2z=new A.q(58,0,30)
B.h2A=new A.q(58,14,9)
B.h2B=new A.q(58,64,22)
B.h2C=new A.q(58,92,30)
B.h2D=new A.q(58,96,30)
B.h2E=new A.q(58,9,74)
B.h2F=new A.q(0,-0.8,0.9)
B.h2G=new A.q(11.9,0,-8)
B.h2H=new A.q(20,7,34.4)
B.h2I=new A.q(-47,48,3.5)
B.aWl=new A.q(1.6,1.6,0.4)
B.h2K=new A.q(0.16,0.32,0.07)
B.h2L=new A.q(5,10,5)
B.aWm=new A.q(5,12,26)
B.h2M=new A.q(5,17,2)
B.h2N=new A.q(5,1,2)
B.h2O=new A.q(5,34,24)
B.h2P=new A.q(5,5,5)
B.h2Q=new A.q(5,6,10)
B.h2R=new A.q(5,6,3)
B.h2S=new A.q(5,9,8)
B.h2T=new A.q(-120.1,150,0)
B.h2U=new A.q(0,14.3,-1.5)
B.h2V=new A.q(0,0,3.2)
B.aWn=new A.q(-13,8.6,-9.5)
B.h2W=new A.q(60,12,56)
B.h2X=new A.q(60,12,80)
B.h2Y=new A.q(60,16,28)
B.h2Z=new A.q(60,30,3)
B.h30=new A.q(620,300,270)
B.h31=new A.q(62,11,0)
B.h32=new A.q(62,18,20)
B.h33=new A.q(62,22,6)
B.h34=new A.q(62,5,0)
B.h35=new A.q(632,10,282)
B.h36=new A.q(640,8,290)
B.h37=new A.q(64,10,0)
B.h3a=new A.q(0,-3.45,4)
B.h3b=new A.q(14,9,0.5)
B.aWo=new A.q(6,14,20)
B.aWp=new A.q(6,14,32)
B.h3c=new A.q(6,28,6)
B.h3d=new A.q(6,4,4)
B.h3e=new A.q(6,6,6)
B.h3g=new A.q(-150.6,70,160)
B.h3h=new A.q(0,-0.2,0.14)
B.h3j=new A.q(120.6,140,-8)
B.h3k=new A.q(0.3,38,2)
B.h3m=new A.q(700,430,1150)
B.h3n=new A.q(70,175,-45)
B.h3o=new A.q(70,194,-45)
B.h3p=new A.q(70,6,36)
B.h3q=new A.q(720,100,105)
B.h3r=new A.q(720,360,320)
B.h3s=new A.q(72,32,3)
B.h3t=new A.q(72,-17,70)
B.h3u=new A.q(12,5,0.4)
B.h3v=new A.q(74,20,5)
B.h3w=new A.q(76,2,90)
B.h3x=new A.q(76,8,3)
B.h3y=new A.q(34,30,0.6)
B.h3z=new A.q(1.6,1.7,3.6)
B.h3B=new A.q(-72.8,0,55)
B.h3C=new A.q(-146.4,15,84)
B.h3E=new A.q(25,79,0.2)
B.h3F=new A.q(7,0,-8)
B.h3G=new A.q(7,18,10)
B.h3H=new A.q(7,27,10)
B.h3I=new A.q(7,2,7)
B.aWq=new A.q(7,3,0)
B.h3J=new A.q(7,6,3)
B.h3K=new A.q(7,8,3)
B.aWr=new A.q(7,96,7)
B.h3L=new A.q(2200,0.4,560)
B.h3N=new A.q(0,11,9.2)
B.h3O=new A.q(-3.2,1.3,-7.82)
B.h3P=new A.q(20,0.8,12)
B.h3Q=new A.q(80,16,32)
B.h3R=new A.q(80,26,8)
B.h3S=new A.q(80,38,26)
B.h3U=new A.q(80,4,14)
B.h3V=new A.q(80,6,32)
B.aWs=new A.q(147,1.5,3.5)
B.h3W=new A.q(82,46,3)
B.aWt=new A.q(-6.5,6.9,-3)
B.h3X=new A.q(84,10,38)
B.h3Y=new A.q(84,18,38)
B.h3Z=new A.q(84,84,120)
B.h4_=new A.q(84,8,36)
B.h40=new A.q(0.93,0.92,1)
B.h41=new A.q(4.6,4.2,9.5)
B.h42=new A.q(88,24,28)
B.h43=new A.q(88,84,3)
B.h44=new A.q(0.4,6,8)
B.h45=new A.q(0,-48.6,55)
B.h46=new A.q(2.6,2,2.6)
B.h47=new A.q(5.5,8.5,3)
B.h48=new A.q(0,0,0.26)
B.h49=new A.q(120.6,96,-52)
B.h4a=new A.q(8,18,8)
B.aWu=new A.q(8,2,16)
B.h4b=new A.q(8,2,6)
B.aWv=new A.q(8,2,8)
B.h4c=new A.q(8,6,6)
B.h4d=new A.q(8,8,12)
B.h4e=new A.q(8,9,8)
B.h4f=new A.q(8,9,9)
B.h4g=new A.q(-140,62,3.6)
B.h4i=new A.q(15,19,0.5)
B.h4j=new A.q(900,2,700)
B.h4l=new A.q(92,2,32)
B.h4m=new A.q(95,26,1)
B.h4n=new A.q(95,50,6)
B.h4o=new A.q(96,14,38)
B.h4p=new A.q(0.4,0.38,0.12)
B.h4q=new A.q(0,0,-0.43)
B.aWw=new A.q(11.2,4.5,-6)
B.aWx=new A.q(1.2,96,112)
B.aWy=new A.q(0.08,3.8,2.4)
B.aWz=new A.q(9,1,9)
B.h4r=new A.q(9,40,4)
B.h4s=new A.q(9,5,9)
B.h4t=new A.q(0,70,-0.6)
B.h4u=new A.q(-34.6,86,69)
B.h4v=new A.q(-3.5,26,15)
B.h4w=new A.q(34,6,0.6)
B.h4x=new A.q(1.5,1.3,0.6)
B.h4y=new A.q(-120.6,96,-8)
B.h4z=new A.q(0,1.9,-0.7)
B.h4B=new A.q(0,-1.78,0.27)
B.aWA=new A.q(1.2,9,1.2)
B.h4C=new A.q(0,0.62,0)
B.h4D=new A.q(5.5,1.4,12)
B.h4E=new A.q(-50,0.6,50)
B.h4H=new A.q(20,11.5,0)
B.h4I=new A.q(20,66,1.4)
B.h4J=new A.q(3.2,0.12,-6.7)
B.h4K=new A.q(12,0,-8.1)
B.h4M=new A.q(-34.6,86,7)
B.aWB=new A.q(0,0,3.4)
B.h4N=new A.q(1.25,0.28,0.1)
B.h4O=new A.q(100,38,0.7)
B.h4P=new A.q(0,36,10.2)
B.h4Q=new A.q(24,0.08,16)
B.h4R=new A.q(34,1.4,1.4)
B.h4T=new A.q(0,4,-7.9)
B.h4U=new A.q(11.9,0,8)
B.h4V=new A.q(0,41.5,-4.9)
B.h4W=new A.q(-26,146,0.6)
B.aWC=new A.q(0.8,1.7,0.78)
B.h4Y=new A.q(21,1.4,8)
B.h4Z=new A.q(0.8,0.8,1.6)
B.h5_=new A.q(1.4,1,1)
B.h50=new A.q(30,36,0.8)
B.h52=new A.q(71.2,46.6,55)
B.h53=new A.q(3,3.28,-7.2)
B.h54=new A.q(1.4,0.3,1)
B.h55=new A.q(0,42,1.5)
B.h56=new A.q(-6.1,1.2,-6.4)
B.h57=new A.q(1.4,26,0.4)
B.h58=new A.q(76,0.6,4)
B.h5a=new A.q(26,0.3,130)
B.h5b=new A.q(0,-45.5,0.5)
B.h5c=new A.q(1.8,4,1)
B.h5d=new A.q(5,1.6,0.5)
B.h5f=new A.q(18,10,0.6)
B.h5g=new A.q(0,11,8.5)
B.h5h=new A.q(0.1,-2,2.4)
B.h5i=new A.q(302.4,1.2,322)
B.h5j=new A.q(-1,33.4,-4.9)
B.h5k=new A.q(0,0.2,2.8)
B.h5l=new A.q(6,10,1.4)
B.h5m=new A.q(0.95,0.95,1)
B.h5o=new A.q(24,32,0.8)
B.h5p=new A.q(0,10,5.2)
B.h5q=new A.q(0,-1.2,4.7)
B.h5r=new A.q(18.9,2.6,0)
B.h5s=new A.q(-2200,0.4,720)
B.h5t=new A.q(66,89,3.8)
B.h5u=new A.q(-12,0,-8.1)
B.h5v=new A.q(3,11,0.5)
B.h5w=new A.q(0,70,320.6)
B.h5x=new A.q(11.8,4,0)
B.h5y=new A.q(0.97,0.18,2.25)
B.h5z=new A.q(0,6.6,-0.6)
B.h5A=new A.q(58,96,31.7)
B.h5B=new A.q(14,20,1.2)
B.aWD=new A.q(-71.7,6,55)
B.h5C=new A.q(0,-3.75,4.15)
B.h5E=new A.q(64,57,8.4)
B.h5F=new A.q(5.6,0.3,1.9)
B.h5I=new A.q(52,8,0.4)
B.h5J=new A.q(0,14,51.2)
B.h5K=new A.q(4.6,7.6,3)
B.h5L=new A.q(-1,0,-1.2)
B.h5M=new A.q(0,1.7,0)
B.h5N=new A.q(0,1.8,-0.9)
B.h5P=new A.q(-1,0,1.5)
B.h5Q=new A.q(27,19,0.4)
B.h5R=new A.q(90,2,0.5)
B.h5S=new A.q(-17,98,77.2)
B.h5T=new A.q(5,8,0.4)
B.h5U=new A.q(0,98,6.6)
B.h5V=new A.q(5,14,8.5)
B.h5W=new A.q(5,2.2,0.8)
B.h5X=new A.q(-120.6,140,-52)
B.h5Y=new A.q(-2200,0.4,560)
B.h5Z=new A.q(0.18,0.12,0.08)
B.h6_=new A.q(50,0.6,50)
B.h60=new A.q(147,3,1.4)
B.h61=new A.q(20,0.6,50)
B.h62=new A.q(0,6.6,0)
B.h63=new A.q(4,16.2,0)
B.h64=new A.q(60,0.4,12)
B.h65=new A.q(10,15,0.5)
B.h66=new A.q(144,5,0.7)
B.h67=new A.q(1.2,-1.7,2.3)
B.h68=new A.q(31.5,23,0)
B.h69=new A.q(0,0.9,0)
B.h6a=new A.q(2.4,2.4,70)
B.h6b=new A.q(-120.6,140,-8)
B.h6d=new A.q(-146.4,15,172)
B.h6e=new A.q(0.82,1.7,0.3)
B.h6f=new A.q(0.55,0.45,0.35)
B.h6g=new A.q(47,7,34.4)
B.h6h=new A.q(-0.12,0,0)
B.h6j=new A.q(3.5,94,0.2)
B.h6k=new A.q(1.1,2.05,0.04)
B.h6l=new A.q(25,79,1.2)
B.h6m=new A.q(1.2,3.6,18)
B.h6n=new A.q(10,14,0.5)
B.h6o=new A.q(0,138.8,95)
B.h6p=new A.q(0,35.5,-4.9)
B.h6q=new A.q(5,8,0.5)
B.aaS=new A.q(1.1,0.5,0.7)
B.h6r=new A.q(-20,11.5,0)
B.h6s=new A.q(0,1.1,0)
B.h6t=new A.q(0,-0.5,0.6)
B.h6u=new A.q(32,6,0.5)
B.h6v=new A.q(0,9.8,-1.5)
B.h6w=new A.q(0,1.4,0)
B.h6y=new A.q(1,3,0.8)
B.h6z=new A.q(0,3.4,0.8)
B.h6B=new A.q(0.1,0.1,0.1)
B.h6C=new A.q(0,-0.6,38)
B.h6D=new A.q(-0.85,4,-3.2)
B.h6F=new A.q(-7.1,19,4)
B.h6G=new A.q(0,58,-14.2)
B.h6H=new A.q(40,7.2,1.2)
B.aWE=new A.q(0.42,0.34,0.12)
B.h6I=new A.q(1.7,0.08,1.2)
B.h6J=new A.q(0,0,0.38)
B.h6L=new A.q(5.2,3.9,-7.76)
B.h6M=new A.q(1.15,0.42,0.7)
B.h6O=new A.q(146.2,52,120)
B.h6P=new A.q(30,22,0.8)
B.h6Q=new A.q(2.6,0.45,0.5)
B.h6R=new A.q(0.07,0.3,0.03)
B.h6T=new A.q(41.5,11,12)
B.h6U=new A.q(36.2,60,38)
B.h6W=new A.q(20,1.4,8)
B.h6X=new A.q(75.4,24,0)
B.h6Y=new A.q(0,-0.2,0.19)
B.h6Z=new A.q(-20,0.6,-50)
B.h7_=new A.q(1.3,0.26,0.6)
B.h71=new A.q(1.2,49,36)
B.h72=new A.q(0,9.3,0)
B.h74=new A.q(9,12,0.6)
B.h75=new A.q(0,-0.6,160)
B.aWF=new A.q(1.4,3,1.6)
B.h76=new A.q(0,40,0.95)
B.h77=new A.q(11,3,0.5)
B.h78=new A.q(34.6,34,7)
B.h79=new A.q(190,0.6,90)
B.h7b=new A.q(0,-1.9,-1.2)
B.h7c=new A.q(-3.2,1.15,-7.78)
B.h7d=new A.q(0,-3.4,1.2)
B.h7e=new A.q(64,10,0.2)
B.h7f=new A.q(0,-1.78,0.53)
B.h7g=new A.q(0.8,2.6,0.3)
B.aWG=new A.q(-6.5,7.4,-3)
B.h7h=new A.q(1,1.05,0.75)
B.h7i=new A.q(0,76,1.1)
B.h7j=new A.q(1.35,0.32,0.5)
B.h7k=new A.q(-4.6,-2,1.2)
B.h7m=new A.q(0,40,1.4)
B.aWI=new A.q(0.6,32,34)
B.h7n=new A.q(-3,36,10.6)
B.h7o=new A.q(0,14.5,-1.5)
B.h7q=new A.q(0,0.2,0)
B.h7s=new A.q(2.5,30,2.5)
B.h7t=new A.q(160,1.2,120)
B.h7u=new A.q(7,40,2.4)
B.h7v=new A.q(30,26,0.6)
B.h7w=new A.q(3.4,3.25,-7.85)
B.h7x=new A.q(72.8,0,55)
B.h7y=new A.q(0.5,62,30)
B.h7z=new A.q(0,76,37.8)
B.h7A=new A.q(146.4,62,120)
B.h7B=new A.q(34.6,86,7)
B.h7C=new A.q(2.2,1.1,6.4)
B.h7D=new A.q(17,98,77.2)
B.h7E=new A.q(3,1.55,-7.1)
B.h7F=new A.q(0.4,3,3)
B.aWK=new A.q(0,-0.1,0.1)
B.h7G=new A.q(-52,96,-60.6)
B.h7H=new A.q(0,0,0.04)
B.h7J=new A.q(0,14,-19.3)
B.h7K=new A.q(2.4,11.6,-3.6)
B.h7L=new A.q(4,11,3.5)
B.h7N=new A.q(5,8.6,-2.25)
B.h7O=new A.q(0,-1.78,0.3)
B.h7P=new A.q(2.2,2.2,1.8)
B.h7Q=new A.q(0,1.9,-1.2)
B.h7R=new A.q(0,56,2.1)
B.h7S=new A.q(0.26,0.04,0.02)
B.h7T=new A.q(-2.4,11.6,-3.6)
B.h7U=new A.q(11.25,0,-2.25)
B.h7V=new A.q(0,3.7,1.4)
B.h7W=new A.q(1,-1.8,2.4)
B.h7X=new A.q(-26,43,3.8)
B.h7Y=new A.q(-60,15,3.6)
B.h7Z=new A.q(20,0.6,-50)
B.h8_=new A.q(-11.8,4,0)
B.h80=new A.q(1.2,4,7)
B.h81=new A.q(11.2,4.7,-6)
B.h82=new A.q(66,43,3.8)
B.aWL=new A.q(0,2.8,0)
B.h83=new A.q(24,8,0.05)
B.aWM=new A.q(86,52,1.4)
B.h85=new A.q(0.12,0,0)
B.h86=new A.q(2.7,0.22,0.45)
B.h87=new A.q(1.1,1.1,0.03)
B.h88=new A.q(-50,0.6,-50)
B.h89=new A.q(-26,94,0.6)
B.h8a=new A.q(0,32,320.9)
B.h8b=new A.q(0,5,1.1)
B.h8c=new A.q(4.6,5.4,3.2)
B.h8d=new A.q(3.4,3.55,-7.85)
B.h8f=new A.q(71.6,-22,62)
B.h8g=new A.q(0,3,1.2)
B.h8h=new A.q(22,18,0.4)
B.h8i=new A.q(-20,0.6,50)
B.aWN=new A.q(1.5,18,3.5)
B.h8l=new A.q(3.5,3.1,-7.15)
B.aWO=new A.q(0,1.5,-0.9)
B.h8m=new A.q(-0.28,0.55,-0.8)
B.h8n=new A.q(0,-0.2,0.24000000000000002)
B.h8p=new A.q(0,-3.3,4)
B.h8q=new A.q(46,0.8,46)
B.h8r=new A.q(1,-0.2,0.14)
B.h8s=new A.q(0,137,1.6)
B.aWP=new A.q(84,3,0.5)
B.h8t=new A.q(-1.9,0,-2.25)
B.h8u=new A.q(0,-0.9,1.1)
B.h8v=new A.q(1.1,0.4,0.6)
B.h8w=new A.q(8.2,1.05,-6.7)
B.h8x=new A.q(0,9.6,11.6)
B.h8z=new A.q(34.6,34,69)
B.h8B=new A.q(-149.3,38,128)
B.h8C=new A.q(0.07,0.4,0.03)
B.h8D=new A.q(2,3.8,0.08)
B.h8E=new A.q(31,83,0.9)
B.h8F=new A.q(64,40,-3.2)
B.h8G=new A.q(0.95,0.62,2.2)
B.aWQ=new A.q(1.4,3,112)
B.h8H=new A.q(1,33.4,-4.9)
B.h8I=new A.q(0,0.3,314)
B.aWR=new A.q(302.4,140,1.2)
B.h8J=new A.q(0,46.6,0.8)
B.h8L=new A.q(6.5,6.4,13)
B.h8M=new A.q(0,0,-8.8)
B.h8N=new A.q(0,0.7,-1)
B.h8Q=new A.q(-11.9,0,8)
B.h8R=new A.q(7,0,1.5)
B.h8S=new A.q(-8.4,0.7,-6.4)
B.h8T=new A.q(-3.2,1.45,-7.78)
B.h8U=new A.q(34,25,21.6)
B.h8V=new A.q(0,41,0.45)
B.h8W=new A.q(-6.575,0,-0.25)
B.h8X=new A.q(1.7,1,0.6)
B.aWT=new A.q(0,0,-2.3)
B.aaU=new A.q(-13,12.5,0)
B.h9_=new A.q(0,0,0.62)
B.h90=new A.q(-60,62,3.6)
B.h91=new A.q(0.2,-0.3,-0.4)
B.aWU=new A.q(10.85,18,0.5)
B.h92=new A.q(120.1,174,-30)
B.h93=new A.q(0.6,70,0.6)
B.h94=new A.q(1.4,1.3,0.02)
B.h95=new A.q(30,1.4,0.4)
B.h96=new A.q(6.3,1.5,-7.2)
B.h97=new A.q(8,14,1.2)
B.h98=new A.q(-120.1,150,-60)
B.h99=new A.q(0,5,11.2)
B.aWV=new A.q(0,0.62,2.85)
B.h9a=new A.q(37.5,23,0)
B.aWW=new A.q(0.05,8,16)
B.h9b=new A.q(0,-1.2,5)
B.h9c=new A.q(0.2,-2,2.6)
B.h9e=new A.q(0,-3.15,4.2)
B.h9g=new A.q(11.2,2.4,-5.18)
B.h9i=new A.q(-1,-0.2,0.14)
B.h9j=new A.q(0.97,0.9,1.04)
B.h9k=new A.q(-17,83,77.2)
B.h9l=new A.q(0.5,8,6)
B.h9m=new A.q(1.2,1.2,0.3)
B.aWY=new A.q(2,0.08,2.4)
B.h9o=new A.q(9.5,13.5,1.4)
B.h9p=new A.q(2.2,18,2.2)
B.h9q=new A.q(22,0.2,0.8)
B.h9r=new A.q(-0.32,0,0.5)
B.aWZ=new A.q(1.3,4,0.8)
B.h9t=new A.q(-26,89,3.8)
B.h9u=new A.q(-120.1,174,-30)
B.h9v=new A.q(0.8,0.55,0.05)
B.h9w=new A.q(0.14,0.35,17)
B.h9x=new A.q(1.4,2.4,0.3)
B.h9y=new A.q(0,11,8.2)
B.h9z=new A.q(52,96,-60.6)
B.h9A=new A.q(26,146,0.6)
B.h9B=new A.q(3.2,5,0.8)
B.h9C=new A.q(0,24,-0.6)
B.h9D=new A.q(40,1.6,14)
B.h9G=new A.q(150,0.6,90)
B.h9H=new A.q(0,11.5,19.3)
B.h9I=new A.q(0,1.95,0.31)
B.h9J=new A.q(150,1.2,112)
B.aX_=new A.q(0.75,4.5,0.1)
B.h9L=new A.q(0.12,0,0.05)
B.h9N=new A.q(-34.6,34,69)
B.h9O=new A.q(-11.5,4,-1.5)
B.h9P=new A.q(9,1.2,9)
B.h9Q=new A.q(120.1,150,-60)
B.h9R=new A.q(0,-0.5,0)
B.h9U=new A.q(0,37.5,-4.9)
B.h9V=new A.q(-2.4,14,8)
B.h9W=new A.q(-190,160,-14.2)
B.h9X=new A.q(0,0,3.6)
B.h9Y=new A.q(3,14,1.5)
B.h9Z=new A.q(5.5,8.5,0.5)
B.aX0=new A.q(0.05,8,9.6)
B.ha0=new A.q(1.5,94,3.5)
B.ha1=new A.q(0,8.2,0)
B.ha2=new A.q(-120.6,96,-52)
B.ha4=new A.q(4,94,0.4)
B.aX1=new A.q(1.4,8,1)
B.ha5=new A.q(120.6,96,-8)
B.ha6=new A.q(114,30,0.4)
B.ha7=new A.q(3.7,1.2,-7.1)
B.ha8=new A.q(1.5,1.35,1.5)
B.ha9=new A.q(8.2,0.05,-6.7)
B.haa=new A.q(0,-0.3,0)
B.hab=new A.q(6.575,0,-0.25)
B.aX2=new A.q(150.6,70,160)
B.hac=new A.q(52,140,-60.6)
B.aX3=new A.q(0,1.8,0)
B.had=new A.q(3,3.21,-7.2)
B.hae=new A.q(100,14,0.6)
B.haf=new A.q(9,5,0.6)
B.hah=new A.q(26,94,0.6)
B.hai=new A.q(9.8,5,-7.75)
B.aX4=new A.q(0,2.4,0)
B.haj=new A.q(1.5,3.5,112)
B.hak=new A.q(-8,31.5,6)
B.ham=new A.q(22,7,34.4)
B.han=new A.q(0,9.6,-1.5)
B.hao=new A.q(3,1.85,-7.1)
B.haq=new A.q(40,1.4,60)
B.hat=new A.q(16,0.4,16)
B.aaW=new A.q(13,12.5,0)
B.hav=new A.q(0.34,0.66,0.9)
B.hax=new A.q(0.9,1.08,0.98)
B.hay=new A.q(12,0.4,6)
B.haz=new A.q(-6.5,7.9,-3)
B.haA=new A.q(1.5,1.5,0.05)
B.haB=new A.q(-6.5,5,-3)
B.haC=new A.q(58.4,1.6,50)
B.haD=new A.q(1.05,0.95,1)
B.haE=new A.q(16,22,0.6)
B.haF=new A.q(0.02,0.28,0.05)
B.haH=new A.q(0,0.7,1)
B.haI=new A.q(26,22,1.4)
B.haJ=new A.q(0,9.5,-7)
B.aX6=new A.q(13,8.6,9.5)
B.haK=new A.q(-140,15,3.6)
B.haL=new A.q(1.3,0.95,0.6)
B.haM=new A.q(5,5,0.8)
B.haN=new A.q(-3.6,4,-7.76)
B.haO=new A.q(0.82,0.9,0.05)
B.haP=new A.q(0,-5.5,-0.25)
B.haQ=new A.q(0,11,21.2)
B.haS=new A.q(34.6,86,69)
B.haT=new A.q(64,50,6.6)
B.haU=new A.q(-34,40,36.4)
B.haV=new A.q(2.2,1.8,2)
B.haX=new A.q(190,160,-14.2)
B.haZ=new A.q(0,0.6,0)
B.hb1=new A.q(1.9,0,0)
B.hb2=new A.q(0.45,0.72,0.06)
B.hb3=new A.q(95,26,1.8)
B.hb5=new A.q(14,0.4,7)
B.hb6=new A.q(64,24,-3.2)
B.aaX=new A.q(1.2,140,320)
B.hb7=new A.q(1,4.5,0.8)
B.hb8=new A.q(0,9.2,0)
B.hb9=new A.q(120.1,150,0)
B.hba=new A.q(0,0.03,0)
B.hbb=new A.q(-100,100,320)
B.hbd=new A.q(-100,400,350)
B.hbe=new A.q(-10,22,0)
B.hbh=new A.q(-110,96,120)
B.hbi=new A.q(-112,38,24)
B.hbj=new A.q(-120,0,-30)
B.hbk=new A.q(-120,300,-320)
B.hbl=new A.q(-125,16,30)
B.hbm=new A.q(-13,15,2)
B.hbn=new A.q(-144,82,45)
B.hbo=new A.q(-147,54,45)
B.hbp=new A.q(-148,56,120)
B.hbq=new A.q(-14,17,4)
B.hbr=new A.q(-14,20,-28)
B.hbs=new A.q(-18,6,0)
B.qQ=new A.q(-1,0,0)
B.hbt=new A.q(-1,0,-8)
B.hbu=new A.q(-200,0,500)
B.hbv=new A.q(-200,0,900)
B.hbw=new A.q(-200,100,480)
B.hby=new A.q(-20,4,26)
B.hbz=new A.q(-20,92,26)
B.hbA=new A.q(-22,14,0)
B.hbB=new A.q(-24,38,0)
B.hbC=new A.q(-260,330,-80)
B.hbD=new A.q(-3000,0,3000)
B.hbE=new A.q(-3000,0,-3000)
B.hbH=new A.q(-30,36,38)
B.hbI=new A.q(-30,40,100)
B.hbJ=new A.q(-30,44,33)
B.hbL=new A.q(-330,40,760)
B.hbM=new A.q(-34,34,38)
B.hbN=new A.q(-34,40,38)
B.hbO=new A.q(-37,16,0)
B.hbP=new A.q(-37,50,38)
B.hbQ=new A.q(-380,470,1300)
B.hbR=new A.q(-390,144,-120)
B.hbS=new A.q(-390,70,-120)
B.hbT=new A.q(-40,12,150)
B.hbU=new A.q(-40,30,164)
B.hbW=new A.q(-42,-34,96)
B.hbX=new A.q(0,-0.6,22)
B.hbY=new A.q(-4,20,0)
B.hbZ=new A.q(-4,22,150)
B.aX7=new A.q(-4,22,8)
B.hc1=new A.q(-5,17,0)
B.hc2=new A.q(0,36.5,0)
B.hc3=new A.q(-60,28,56)
B.hc6=new A.q(-60,50,1)
B.hc7=new A.q(-60,70,6)
B.hc8=new A.q(-700,430,1150)
B.hca=new A.q(-70,0,34)
B.hcb=new A.q(-70,95,34)
B.hcc=new A.q(-70,96,34)
B.hcd=new A.q(-720,360,320)
B.hce=new A.q(-72,6,55)
B.hcf=new A.q(-80,12,30)
B.hcg=new A.q(-80,25,30)
B.hck=new A.q(-8,24,0)
B.hcl=new A.q(-8,25,0)
B.hcm=new A.q(-8,42,-5)
B.hcn=new A.q(-8,-28,104)
B.hco=new A.q(-8,-39,96)
B.hcq=new A.q(0,0.35,0.78)
B.hcr=new A.q(0.6,6,14)
B.hcs=new A.q(-11.9,0,-8)
B.hct=new A.q(32,3,0.5)
B.hcu=new A.q(38,1.4,12)
B.hcv=new A.q(25,0.5,66)
B.hcw=new A.q(-8.4,1.9,-7.2)
B.hcx=new A.q(1.6,8,5)
B.hcy=new A.q(0.8,1.6,1.4)
B.hcA=new A.q(25,6,0.2)
B.aX8=new A.q(1.25,1,0.1)
B.hcB=new A.q(11.2,0,-6)
B.hcC=new A.q(-146.4,62,172)
B.hcD=new A.q(0.4,7,9)
B.hcE=new A.q(1.2,1.1,0.8)
B.hcG=new A.q(150,49,1.2)
B.hcH=new A.q(41.5,11,-12)
B.hcI=new A.q(62,0.2,42)
B.hcJ=new A.q(4.6,1.5,-3.6)
B.hcK=new A.q(0,-0.7,0.8)
B.hcL=new A.q(0.6,9,9)
B.hcM=new A.q(8.9,1.9,0.9)
B.hcN=new A.q(42,84,1.2)
B.hcO=new A.q(-34.6,34,7)
B.hcP=new A.q(60,15,3.6)
B.aX9=new A.q(1.6,58,66)
B.hcQ=new A.q(0,-1.55,-0.6)
B.hcR=new A.q(36.2,32.2,0.6)
B.hcS=new A.q(1.78,4.25,0.08)
B.hcT=new A.q(27,0.6,19)
B.hcU=new A.q(1.4,52,96)
B.hcV=new A.q(0,5.5,-0.25)
B.hcW=new A.q(28,2.5,26)
B.hcX=new A.q(0,0.7,0)
B.hcY=new A.q(-1.2,-1.6,2.2)
B.hcZ=new A.q(11,25,0.3)
B.hd_=new A.q(17,83,77.2)
B.aXa=new A.q(-12,14,19.4)
B.aXb=new A.q(13,8.6,-9.5)
B.aXc=new A.q(0.05,0.12,0.03)
B.aXd=new A.q(8.2,0.95,-6.7)
B.hd0=new A.q(40,1.2,22)
B.hd1=new A.q(0.7,1.5,-7.2)
B.hd2=new A.q(0,15.3,-3.6)
B.hd3=new A.q(0,-1,4.9)
B.hd4=new A.q(62,2.4,8)
B.hd5=new A.q(-1.6,11,6)
B.hd6=new A.q(0.1,0,0)
B.hd7=new A.q(0.32,0,0.5)
B.hd8=new A.q(2200,0.4,720)
B.hd9=new A.q(1.6,11,6)
B.hda=new A.q(-10,0.5,150)
B.hdc=new A.q(-60,50,1.8)
B.hdd=new A.q(-0.9,0,4.4)
B.hde=new A.q(-6.5,7.2,-3)
B.hdg=new A.q(300,6,1.6)
B.hdh=new A.q(6.2,0.18,2.1)
B.hdi=new A.q(76,64,0.6)
B.hdj=new A.q(7.1,18,-3)
B.hdl=new A.q(0.45,1.3,0.9)
B.hdm=new A.q(74,1.2,90)
B.hdn=new A.q(36,1.6,12)
B.hdo=new A.q(15.5,2.6,0)
B.hdq=new A.q(-8,-47.8,70)
B.hdr=new A.q(14,1.5,3.5)
B.aXe=new A.q(17,24,0.3)
B.hds=new A.q(5.2,3.9,-7.82)
B.hdt=new A.q(0,0.7,2.4)
B.hdu=new A.q(0,0.3,0)
B.aXf=new A.q(2.3,7,0.5)
B.hdw=new A.q(0,66,1.8)
B.aXg=new A.q(-13,8.6,9.5)
B.hdz=new A.q(0.6,28,52)
B.hdA=new A.q(6.5,6,14)
B.hdB=new A.q(0,4.2,2.4)
B.hdC=new A.q(0,-1.99,0.14)
B.hdD=new A.q(0.4,36,34)
B.hdF=new A.q(4.6,-2,1.2)
B.hdG=new A.q(11.5,4,-1.5)
B.hdH=new A.q(0,14,19.3)
B.aXh=new A.q(0,0,-2.4)
B.hdI=new A.q(1.3,0.8,0.9)
B.hdJ=new A.q(-36.2,60,38)
B.hdK=new A.q(110,18,0.6)
B.hdL=new A.q(0,-1.78,0.52)
B.hdM=new A.q(0.12,0.1,0.03)
B.hdN=new A.q(9.8,5,-7.58)
B.hdO=new A.q(14,1.5,5)
B.hdP=new A.q(0.95,2.3,0.5)
B.aXi=new A.q(0.5,1.4,2)
B.hdQ=new A.q(3.5,0.15,-7.2)
B.aXj=new A.q(64,2,1.2)
B.hdR=new A.q(1.2,26.4,20)
B.hdS=new A.q(-3.6,4,-7.82)
B.hdT=new A.q(-3,37,-4.9)
B.hdU=new A.q(0.3,2,36)
B.hdX=new A.q(24,0.8,6.5)
B.hdY=new A.q(-28,76,38.3)
B.he_=new A.q(22,0.5,5)
B.he0=new A.q(9,10,0.6)
B.he1=new A.q(0,22,2.1)
B.he4=new A.q(0,56,0.5)
B.he5=new A.q(150,1.2,70)
B.he6=new A.q(0,-5.5,-3.4)
B.he7=new A.q(58,104,31.7)
B.he8=new A.q(100,52,2.4)
B.he9=new A.q(2.1,0.4,0.5)
B.hea=new A.q(0,14.7,-1.5)
B.aXk=new A.q(0.4,29,31)
B.heb=new A.q(0,0.8,-1.3)
B.hec=new A.q(-19.5,-1,-1.5)
B.hed=new A.q(80,0.5,60)
B.hee=new A.q(6.85,4,-3.2)
B.hef=new A.q(52,58,0.6)
B.heg=new A.q(0,14.4,0)
B.aXm=new A.q(0.12,3,1.9)
B.heh=new A.q(0.06,0.62,0.8)
B.hei=new A.q(0,18.5,0)
B.hej=new A.q(50,0.6,-50)
B.hel=new A.q(9.55,5.7,-7.5)
B.hen=new A.q(-400,80,-19.2)
B.heo=new A.q(0.8,2.4,0.3)
B.aXn=new A.q(0,0.7,2)
B.hep=new A.q(3.5,26,15)
B.heq=new A.q(0.95,0.62,1)
B.aXo=new A.q(0,24,40.2)
B.her=new A.q(0.8,1.1,1.2)
B.hes=new A.q(0,51.5,20)
B.het=new A.q(0,0.3,4.3)
B.heu=new A.q(-20,0.5,145)
B.hev=new A.q(2.4,14,8)
B.hew=new A.q(0,47.25,-2.25)
B.hex=new A.q(-8,31.5,-6)
B.hey=new A.q(0.5,0.5,0.04)
B.hez=new A.q(12.5,39,0.6)
B.heA=new A.q(140,62,3.6)
B.heB=new A.q(0,3,0.9)
B.heC=new A.q(9,0.7,15)
B.heD=new A.q(3,36,10.6)
B.heE=new A.q(25,10,0.2)
B.heG=new A.q(0.14,8,0.3)
B.heH=new A.q(1.9,0.05,1.35)
B.heK=new A.q(0.6,0.12,0.03)
B.heL=new A.q(-10.7,1.2,-6.4)
B.heM=new A.q(-52,140,-60.6)
B.heN=new A.q(-71.2,46.6,55)
B.heO=new A.q(5,4.5,3)
B.heP=new A.q(120,36,1.4)
B.heQ=new A.q(0,3.9,2.5)
B.aXp=new A.q(0,3.7,2.6)
B.VD=new A.FV(0,"hot")
B.VE=new A.FV(1,"neutral")
B.VF=new A.FV(2,"ground")
B.aXD=new A.FV(3,"unknown")
B.eNf=new C.z(-20,46)
B.hj9=new A.AB(B.eNf,0,2.4,"Having the drink",!0,!1,!1,"")
B.evH=new C.z(34,62)
B.hja=new A.AB(B.evH,3.141592653589793,2.2,"Picking up the remote",!1,!0,!1,"")
B.hji=new A.aBP(null)
B.htW=new A.eYN(0,"material")})();(function staticFields(){$.dS=0
$.ajp=!1
$.ajq=!0
$.hcH=!1
$.h_T=C.U(x.N,C.aw("MH"))
$.h_S=C.U(x.N,C.aw("aA<MH?>"))
$.h_R=C.aX(x.N)
$.i6f=C.U(x.N,C.aw("ai<+(q,q)>"))
$.i6d=C.U(x.N,x.dg)
$.hss=C.U(x.N,C.aw("jR"))
$.ak_=null
$.Ef=null
$.Wh=null
$.hiQ=null
$.frA=C.U(x.S,C.aw("ai<ko>"))
$.ahK="xbot"})();(function lazyInitializers(){var w=a.lazyFinal
w($,"iqA","hAw",()=>C.bPp())
w($,"iqM","hb1",()=>C.bPp())
w($,"ilu","hy1",()=>new A.aTE($.au()))
w($,"it8","bFF",()=>{var v,u,t=C.aw("O<aTD>"),s=C.a([],t)
for(v=0;v<2;++v){u=v*9
D.d.v(s,C.a([A.h_2(v,175,u),A.h_2(v,612,u+14),A.h_2(v,1013,u+7)],t))}return s})
w($,"isL","fZd",()=>C.a([A.hnQ(-80,80,400,565),A.hnQ(-80,80,715,885)],C.aw("O<bxk>")))
w($,"ilv","aRG",()=>A.hDS())
w($,"it7","hBV",()=>{var v=C.a([A.vO("Wire a standard 120 volt receptacle: black to brass, white to silver, bare copper to green.",B.Rz,B.dpO,"outlet","",!0,B.Iq,B.cXv,!1,"Wall outlet",new A.fBs()),A.vO("A single-pole switch breaks the hot wire to the light: two black wires go on the two brass screws.",B.dbD,B.dd6,"switch","",!0,B.Iq,B.cVU,!1,"Light switch",new A.fBt()),A.vO("A GFCI protects you near water. Power comes in on LINE. The LOAD screws (covered with tape) feed other outlets.",B.Rz,B.dg0,"gfci","",!0,B.Iq,B.dey,!1,"GFCI outlet",new A.fBu()),A.vO("Join the house wires to the fixture wires with wire nuts: black to black, white to white, ground to ground.",B.Rz,B.d6F,"light","",!0,B.Iq,B.drv,!1,"Ceiling light",new A.fBv()),A.vO("A fan hangs from a strong fan-rated box. Join black, white and ground with wire nuts, then fasten the canopy.",B.Rz,B.ddW,"fan","",!0,B.Iq,B.d2B,!1,"Ceiling fan",new A.fBw())],C.aw("O<Tb>"))
D.d.v(v,$.fZj())
return v})
w($,"it9","fZj",()=>{var v="switch",u="outlet"
return C.a([A.vO("Breaks BOTH hot legs of a 240 volt circuit at once: water heaters and baseboard heat.",B.dur,B.c5I,"switch2p",v,!0,B.dwV,B.d6R,!0,"Double-pole switch (240 V)",new A.fBx()),A.vO("One light, two switches. One COMMON screw and two TRAVELER screws; it pairs with a second three-way.",B.dnK,B.cXe,"switch3",v,!0,B.dxc,B.deB,!0,"Three-way switch",new A.fBy()),A.vO("Sits in the middle of two three-way switches: two traveler wires in on one side, two out on the other.",B.dsQ,B.dhs,"switch4",v,!0,B.dwW,B.dmz,!0,"Four-way switch",new A.fBz()),A.vO("Needs a NEUTRAL wire in the box as well: hot in, hot out to the light, neutral and ground.",B.d1m,B.d4c,"switchsmart",v,!0,B.dxd,B.d1D,!0,"Smart, motion or timer switch",new A.fBA()),A.vO("Two switches in one device: one hot feed is split between them, and two separate lights come out.",B.cK9,B.dkS,"switchcombo",v,!0,B.dyU,B.cxg,!0,"Combination (double) switch",new A.fBB()),A.vO("The tab between the brass screws is broken off: the top half is switched, the bottom half is always on.",B.deu,B.cwF,"split",u,!0,B.dxe,B.djO,!0,"Split (half-switched) outlet",new A.fBC()),A.vO("Two hots, a neutral and a ground: the dryer 14-30, and the range and car charger 14-50.",B.dqv,B.d00,"v240four",u,!0,B.dxb,B.cOx,!0,"4-wire 240 V outlet (dryer, range, EV)",new A.fBD()),A.vO("Two hots and a neutral, with no separate ground: the old 10-30 and 10-50, from before 1996.",B.d7B,B.dtl,"v240three",u,!1,B.dyS,B.dsx,!0,"3-wire 240 V outlet (old dryer or range)",new A.fBE()),A.vO("Two hots and a ground, and no neutral at all: the 6-series outlets.",B.drb,B.dbq,"v240only",u,!0,B.dxr,B.dpU,!0,"240 V only outlet (window AC, welder)",new A.fBF()),A.vO("Hot and neutral as usual, but the ground goes on its own wire straight back to the panel: shops and offices.",B.dt9,B.dcw,"isolated",u,!0,B.dyi,B.d8_,!0,"Isolated-ground outlet",new A.fBG())],C.aw("O<Tb>"))})
w($,"itk","Hi",()=>{var v,u=C.a([],x.n)
for(v=0;v<10;++v)u.push(-72+16*v)
return u})})()};
(a=>{a["ldxPsXIyHxPL2E5ah9IrAVXE0eI="]=a.current})($__dart_deferred_initializers__);