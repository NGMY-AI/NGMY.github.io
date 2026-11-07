((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,C,D,A5,G,A6,N,H,A7,A8,P,A9,Aa,Ab,K,Q,A0,Ac,T,Ad,U,A1,Ae,V,W,Af,X,Y,A2,Z,A3,Ag,L,R,A={eTo:function eTo(d,e){this.a=d
this.b=e},a9l:function a9l(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.at=g
_.CW=h
_.a=i
_.$ti=j},adQ:function adQ(d,e){var _=this
_.d=null
_.e=$
_.G_$=d
_.c=_.a=null
_.$ti=e},bnN:function bnN(d){this.a=d},aMG:function aMG(){},
o_(d,e,f){var w=d.a,v=d.b,u=d.c
return new A.r(w+(e.a-w)*f,v+(e.b-v)*f,u+(e.c-u)*f)},
vp(d,e){var w=Math.cos(e),v=Math.sin(e),u=d.a,t=d.c
return new A.r(u*w+t*v,d.b,-u*v+t*w)},
o8(d,e,f,g){var w,v,u,t,s,r,q,p,o=new A.fRI(Math.cos(e),Math.sin(e)),n=new A.fRG(f),m=new A.fRH(n,e,o,g),l=new A.fRF(n,e,o),k=C.a([],x.z)
for(w=d.length,v=x.o,u=0;u<d.length;d.length===w||(0,C.M)(d),++u){t=d[u]
s=C.a([],v)
for(r=t.a,q=r.length,p=0;p<r.length;r.length===q||(0,C.M)(r),++p)s.push(m.$1(r[p]))
k.push(new A.lN(s,l.$1(t.b),t.c,t.d,t.e,t.f,t.r,t.w,t.x,t.y,t.z))}return k},
GQ(d,e,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
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
l=Math.min(e,n.guI()*0.5)
k=Math.min(e,m.guI()*0.5)
j=n.goP(0)
i=new A.r(q-j.a*l,p-j.b*l,o-j.c*l)
j=m.goP(0)
h=new A.r(q+j.a*k,p+j.b*k,o+j.c*k)
for(g=0;g<=a0;++g){f=g/a0
w.push(A.o_(A.o_(i,s,f),A.o_(s,h,f),f))}}w.push(D.d.gal(d))
return w},
ahG(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
if(a3.length<3)return a3
w=C.a([],x.o)
for(v=0;u=v+1,t=a3.length,u<t;v=u){s=v===0?a3[v]:a3[v-1]
r=a3[v]
q=a3[u]
p=v+2
o=p<t?a3[p]:q
for(t=s.a,p=r.a,n=q.a,m=o.a,l=s.b,k=r.b,j=q.b,i=o.b,h=s.c,g=r.c,f=q.c,e=o.c,d=0;d<a4;++d){a0=d/a4
a1=a0*a0
a2=new A.fRu(a0,a1,a1*a0)
w.push(new A.r(a2.$4(t,p,n,m),a2.$4(l,k,j,i),a2.$4(h,g,f,e)))}}w.push(D.d.gal(a3))
return w},
hwZ(){if($.h6c)return
$.h6c=!0
C.az().bL(new A.bHB(),x.P).eV(new A.bHC())},
h6d(){C.az().bL(new A.bHD(),x.P).eV(new A.bHE())},
hRP(d){var w,v,u,t,s,r,q,p,o,n
for(w=d.length,v=!0,u=!0,t=0;t<w;++t)if(d[t].c>=0.5)u=!1
else v=!1
if(v)return d
if(u)return B.rt
s=C.a([],x.o)
for(r=0;w=d.length,r<w;){q=d[r];++r
p=d[r%w]
w=q.c
o=w>=0.5
n=p.c
if(o)s.push(q)
if(o!==n>=0.5)s.push(A.o_(q,p,(0.5-w)/(n-w)))}return s},
h03(a2,a3,a4){var w,v,u,t,s,r,q,p=J.a4(a2),o=p.h(a2,0).a,n=p.h(a2,0).b,m=p.h(a2,1).a,l=p.h(a2,1).b,k=p.h(a2,2).a,j=p.h(a2,2).b,i=p.h(a2,3).a,h=p.h(a2,3).b,g=m-k,f=i-k,e=o-m+k-i,d=l-j,a0=h-j,a1=n-l+j-h
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
hSG(d,e,f,g){var w,v=e.d,u=e.e,t=A.h03(f,v,u)
if(t==null)return
w=d.a
J.bq(w.save())
d.av(0,t.a)
w.clipRect(C.bQ(new C.a5(0,0,v,0+u)),$.nc()[1],!0)
e.c.$3(d,new C.at(v,u),g)
w.restore()},
hSH(d,e,f,g,h,i){var w,v,u,t,s,r,q,p,o,n,m,l,k=e.d,j=e.e
$.W()
w=new C.pH()
e.c.$3(C.yY(w,null),new C.at(k,j),i)
v=w.nP()
u=k/g
t=j/h
for(s=f.length,r=d.a,q=0+u,p=0+t,o=0;o<f.length;f.length===s||(0,C.M)(f),++o){n=f[o]
m=A.h03(n.c,u,t)
if(m==null)continue
J.bq(r.save())
l=m.a
r.concat(C.fRA(C.GU(l)))
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
fXS(d,e,f,g,h,i,j,k,l,m){return new A.auP(l,e,h,k,i,f,g,d,m,j,null)},
r:function r(d,e,f){this.a=d
this.b=e
this.c=f},
lN:function lN(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
hd:function hd(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
tG:function tG(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fJ:function fJ(d,e,f,g,h,i,j,k,l){var _=this
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
bYG:function bYG(d,e){this.a=d
this.b=e},
bYH:function bYH(d){this.a=d},
bYF:function bYF(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
bYI:function bYI(d,e,f){this.a=d
this.b=e
this.c=f},
bYE:function bYE(d,e){this.a=d
this.b=e},
bYJ:function bYJ(d,e,f){this.a=d
this.b=e
this.c=f},
fRI:function fRI(d,e){this.a=d
this.b=e},
fRG:function fRG(d){this.a=d},
fRH:function fRH(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fRF:function fRF(d,e,f){this.a=d
this.b=e
this.c=f},
fRu:function fRu(d,e,f){this.a=d
this.b=e
this.c=f},
x5:function x5(d,e,f,g,h){var _=this
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
_.bu$=_.bI$=0},
bHB:function bHB(){},
bHC:function bHC(){},
bHD:function bHD(){},
bHE:function bHE(){},
bHG:function bHG(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bHF:function bHF(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bHA:function bHA(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bHz:function bHz(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bSw:function bSw(d){this.a=d},
b5e:function b5e(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
cq_:function cq_(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cq0:function cq0(d,e){this.a=d
this.b=e},
cpT:function cpT(){},
cpU:function cpU(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
cpS:function cpS(d){this.a=d},
cpV:function cpV(){},
cpW:function cpW(d,e,f){this.a=d
this.b=e
this.c=f},
cpX:function cpX(){},
cpZ:function cpZ(d,e){this.a=d
this.b=e},
cpY:function cpY(d){this.a=d},
czw:function czw(d,e){this.a=d
this.b=e},
Ap:function Ap(d,e,f,g,h,i,j,k,l){var _=this
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
auP:function auP(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
bql:function bql(d,e,f,g,h,i){var _=this
_.d=$
_.e=d
_.f=e
_.r=f
_.w=1
_.x=0
_.y=g
_.bx$=h
_.ab$=i
_.c=_.a=null},
eWS:function eWS(d){this.a=d},
eWR:function eWR(d){this.a=d},
eWO:function eWO(d){this.a=d},
eWP:function eWP(d){this.a=d},
eWQ:function eWQ(d){this.a=d},
eWM:function eWM(d){this.a=d},
eWN:function eWN(d,e){this.a=d
this.b=e},
aMP:function aMP(){},
fUp(d){var w,v,u=$.fUo.h(0,d)
if(u!=null)return C.f8(u,x.c)
w=B.a4K.h(0,d)
if(w==null)return C.f8(null,x.c)
v=$.fUn.h(0,d)
if(v==null){v=new A.bRr(w,d).$0()
$.fUn.n(0,d,v)}return v},
aV0(d){var w=0,v=C.j(x.H),u
var $async$aV0=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:w=2
return C.b(A.fUp(d),$async$aV0)
case 2:u=J.aW(B.a4K.ges(B.a4K))
case 3:if(!u.C()){w=4
break}w=5
return C.b(A.fUp(u.gT(u)),$async$aV0)
case 5:w=3
break
case 4:return C.h(null,v)}})
return C.i($async$aV0,v)},
hA4(d){var w,v,u=new Float64Array(d*16)
for(w=0;w<d;++w){v=w*16
u[v+15]=1
u[v+10]=1
u[v+5]=1
u[v]=1}return u},
h7M(d,e,f){var w,v,u,t
if(d>e){w=d
v=e}else{w=e
v=d}if(w>f){u=w
w=f}else u=f
if(v>w){t=w
w=v
v=t}return(v*65536+w)*65536+u},
hA5(d,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=d.c,g=d.b===1,f=g?4:3,e=h.length
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
h7N(d,a0,a1,a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
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
i_n(d,e){var w=D.o.aC(d,16)&255,v=D.o.aC(d,8)&255,u=d&255,t=0.35+(0.299*w+0.587*v+0.114*u)/255,s=new A.fq7()
return C.a_(255,s.$2(w,e.gb7(e)*255*t),s.$2(v,e.gbf()*255*t),s.$2(u,e.gbc(e)*255*t))},
baN:function baN(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
bb7:function bb7(d,e){this.b=d
this.c=e},
bg8:function bg8(d,e,f){this.a=d
this.b=e
this.c=f},
dl0:function dl0(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=$},
Ml:function Ml(d,e,f,g,h){var _=this
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
bRr:function bRr(d,e){this.a=d
this.b=e},
bRj:function bRj(){},
bRg:function bRg(d,e){this.a=d
this.b=e},
bRf:function bRf(){},
bRl:function bRl(d,e,f){this.a=d
this.b=e
this.c=f},
bRm:function bRm(d){this.a=d},
bRn:function bRn(d){this.a=d},
bRk:function bRk(d,e){this.a=d
this.b=e},
bRh:function bRh(d){this.a=d},
bRi:function bRi(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
bRq:function bRq(d){this.a=d},
bRo:function bRo(){},
bRp:function bRp(d){this.a=d},
bRs:function bRs(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
fq7:function fq7(){},
dqy:function dqy(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
dfd:function dfd(d,e){this.a=d
this.b=e},
hwF(){var w,v=J.e4(6,x.ff)
for(w=0;w<6;++w)v[w]=new A.aRU()
return new A.bG3(v)},
afu(d){return A.hSf(d)},
hSf(d){var w=0,v=C.j(x.eT),u,t=2,s=[],r,q,p,o,n
var $async$afu=C.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:if(d==null){u=null
w=1
break}t=4
w=7
return C.b(C.fvc(d,null),$async$afu)
case 7:r=f
n=J
w=8
return C.b(r.lF(),$async$afu)
case 8:q=n.a2J(f)
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
return C.i($async$afu,v)},
hqf(a5,a6,a7,a8,a9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
if(a8.a){w=a7/8
if(a9===0){v=D.k.bm(w)
A.nb(a5,a6,a7,D.o.F(v,2)===0?0:1+D.o.an(v,2))}else A.nb(a5,a6,a7,a9+1+D.k.bm(w))
return}u=B.a4e[a8.e]
w=a6.a
t=a6.b
s=0+t
r=new C.a5(0,0,0+w,s)
$.W()
q=C.K()
q.sar(new C.a9(D.a3,D.a8,D.x,C.a([u.b,u.c],x.O),null,null).aA(0,r))
a5.aX(r,q)
q=t*0.04
p=r.cs(-q)
o=C.K()
o.b=D.ac
o.c=t*0.025
n=u.e
o.r=n.gp(0)
a5.aX(p,o)
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
g=C.bP(new C.t(i/2,h/2),o/v,j/v)
j=a5.a
J.bq(j.save())
o=t*0.05
j.clipRRect(C.eU(C.bz(k,new C.aQ(o,o))),$.oR(),!0)
o=C.K()
o.Q=D.ce
a5.os(l,g,k,o)
j.restore()
f=p+m*0.8}else f=m
e=a8.w
if(e==null)e=$.VL
p=t*0.3
o=f+p
p=m+p
d=new C.a5(f,m,o,p)
j=d.gbN()
o-=f
i=C.K()
i.r=B.EI.gp(0)
a5.ae(j,o/2,i)
if(e!=null){j=e.c
i=e.d
v=Math.min(o*0.8/j,(p-m)*0.8/i)
o=C.bP(d.gbN(),i*v,j*v)
h=C.K()
h.Q=D.ce
a5.os(e,new C.a5(0,0,j,i),o,h)}o=new A.fIM()
a0=w-f-m
j=u.d
a1=o.$4(a8.b,t*0.17,j,a0)
a1.a6(a5,new C.t(f,p+q))
a2=o.$5$w(a8.c,t*0.09,n,a0,D.O)
n=a1.b.a.c
a2.a6(a5,new C.t(f,p+t*0.06+n.gbd(n)))
a3=o.$6$lines$w(a8.d,t*0.08,j.j(0.85),a0,1,D.H)
j=a3.b
o=j.c
j=j.a.c
a3.a6(a5,new C.t(w-m-o,t-m-j.gbd(j)))
a4=(D.k.F(a7*0.35,1.6)-0.3)*w
j=a5.a
J.bq(j.save())
j.clipRect(C.bQ(r),$.nc()[1],!0)
t=C.K()
t.r=D.c.j(0.1).gp(0)
a5.aX(new C.a5(a4,0,a4+w*0.1,s),t)
j.restore()},
i0F(d,e){var w,v,u,t,s=d.w
if(s.length===0){s=d.e
w=d.r
return new C.cx([-s/2,s/2,w+d.f,w])}v=s[e]
s=v.e
u=d.e*s
t=d.r+v.d
return new C.cx([-u/2,u/2,t+d.f*s,t])},
bzT(d,e,f,g){var w,v,u,t,s,r,q,p,o=new C.a5(0,0,0+e.a,0+e.b)
$.W()
w=C.K()
w.r=B.bfM.gp(0)
d.aX(o,w)
v=o.cs(-(e.gdF()*0.06))
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
q.sar(B.c2h.aA(0,new C.a5(0,0,s,r)))
d.aX(new C.a5(0,0,s,r),q)
p=t*0.82
J.bq(w.save())
w.translate((u-p)/2,(t-p)/2)
A.hqk(d,new C.at(p,p),f)
w.restore()}else A.nb(d,new C.at(u,t),f,g)
w.restore()},
hWM(d,e,f){var w,v,u,t,s=e.a,r=e.b
$.W()
w=C.K()
w.r=B.bnW.gp(0)
d.aX(new C.a5(0,0,0+s,0+r),w)
v=C.K()
v.r=B.bjQ.gp(0)
w=s*0.12
u=r*0.07
t=w+s*0.76
d.aX(new C.a5(w,u,t,u+r*0.38),v)
u=r*0.52
d.aX(new C.a5(w,u,t,u+r*0.4),v)
u=C.K()
u.r=F.fu.gp(0)
d.ae(new C.t(s*0.82,r*0.5),s*0.05,u)},
h0K(d9,e0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6=x.z,d7=C.a([],d6),d8=new A.fk(d7)
d8.f=0
d8.Gs(B.h3Q,B.fUu,B.fUt,B.h3P,B.bhI,B.e8)
d8.f=1
d8.Gs(B.fZg,B.fX8,B.h5k,B.fYO,B.LN,B.e8)
for(w=-2100;w<2100;w+=90){v=w+45
d8.Gs(new A.r(w,0.8,637),new A.r(v,0.8,637),new A.r(v,0.8,643),new A.r(w,0.8,643),B.X9,B.e8)}d8.f=2
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
case"neon":n=D.bb
break
case"screen":n=D.av
o=6
break
case"roof":n=D.aw
break
case"gate":n=D.d7
break
case"duo":n=D.bb
break
case"line3":n=D.bo
break
case"far3":n=D.aE
break
case"skyline":n=D.by
break
case"lines6":n=D.aP
break
case"scatter":n=D.bb
break
default:n=F.fu}m=p==="roof"
l=m?3:2
k=q?720:900
j=k*t/u
i=C.a([],x.a)
r=q?r:1
for(h=e0.b,g=x.o,f=-o,e=f-0.8,d=p==="highway",a0=f/2,f=p!=="neon",a1=a0-0.2,a2=p==="screen",a3=s-16,a4=(14+s-7)/2,a5=s-21,a6=s-7,a7=0;a7<r;++a7){a8=q?v[a7]:B.abg
a9=a8.e
b0=u*a9
b1=t*a9
b2=new A.frx(a8)
b3=C.a([],d6)
b4=new A.fk(b3)
b4.f=l
b5=C.a([],d6)
b6=new A.fk(b5)
b6.f=l
b7=A.i0F(d9,a7).a
b8=b7[0]
b9=b7[1]
c0=b7[2]
c1=b7[3]
c2=(b8+b9)/2
c3=(c0+c1)/2
b7=b2.$1(new A.r(c2,c3,a1))
c4=!f||a2?D.av:D.cp
c5=a8.c
b4.wg(b7,new A.r(b0+16,b1+16,o),c4,0.2,c5)
c6=7*Math.max(1,a9*0.8)
c4=b0+14
b6.wg(b2.$1(new A.r(c2,c0+3,3)),new A.r(c4,c6,8),n,0.4,c5)
b6.wg(b2.$1(new A.r(c2,c1-3,3)),new A.r(c4,c6,8),n,0.4,c5)
b7=b1+14
b6.wg(b2.$1(new A.r(b8-3,c3,3)),new A.r(c6,b7,8),n,0.4,c5)
b6.wg(b2.$1(new A.r(b9+3,c3,3)),new A.r(c6,b7,8),n,0.4,c5)
D.d.v(d7,b3)
D.d.v(d7,b5)
b5=C.a([],d6)
c7=new A.fk(b5)
c8=Math.max(6,b0*0.018)
c9=new A.fry(i,l)
switch(q?"sep":p){case"tower":c7.dL(new A.r(0,0,a0),new A.r(0,a6,a0),c8*1.9,D.ha,12)
c7.dL(new A.r(0,0,a0),new A.r(0,14,a0),c8*2.8,D.av,12)
break
case"screen":c7.aO(new A.r(0,7,-10),new A.r(b0*0.6,14,70),D.av)
c7.aO(new A.r(0,a4,a0),new A.r(60,a5,14),D.ha)
break
case"roof":c7.n3(B.fQo,B.fWp,B.be_,0.1,4)
c7.n3(B.fR2,B.fWv,D.dt,0.15,4)
c7.hl(B.fQI,B.fWu,D.dt,4)
c7.n3(B.h43,B.fTE,B.bf7,0.1,2)
c7.hl(B.h42,B.fTQ,D.dt,2)
c7.aO(B.fU0,B.fVj,B.nN)
c7.aO(B.fQd,B.fSo,D.el)
c9.$6$px(B.h29,0,210,126,new A.frq(),360)
c9.$6$px(B.h38,0,210,126,new A.frr(),360)
c9.$6$px(B.h__,0,72,116,A.i9Q(),140)
c9.$6$px(B.h6u,0,130,80,new A.frs(),300)
for(d0=0;d0<3;++d0){d1=-60-d0*90
c9.$6$px(new A.r(310.8,140,d1),1.5707963267948966,80,64,new A.frt(d0),240)
c9.$6$px(new A.r(310.8,55,d1),1.5707963267948966,60,60,A.h3b(),200)}for(d0=0;d0<2;++d0){d1=-65-d0*110
c9.$6$px(new A.r(-490.8,95,d1),-1.5707963267948966,90,60,new A.fru(d0),240)
c9.$6$px(new A.r(-490.8,40,d1),-1.5707963267948966,50,50,A.h3b(),180)}c9.$6$px(new A.r(0,100,-285.8),3.141592653589793,580,170,A.hq6(),900)
break
case"gate":for(b3=b0/2+25,b7=s+b1,c4=b7+26,c5=c8*1.6,d2=0;d2<2;++d2){d3=F.jc[d2]*b3
c7.dL(new A.r(d3,0,a0),new A.r(d3,c4,a0),c5,D.ha,12)}c7.aW(new A.r(0,b7+17,a0),new A.r(b0+80,18,22),D.ha,0.2)
break
default:for(b3=s+a8.d-7,d2=0;d2<2;++d2){b7=F.jc[d2]*b0*0.3
c7.dL(b2.$1(new A.r(b7,0,a0)),b2.$1(new A.r(b7,b3,a0)),c8,D.ha,10)}if(d)c7.aO(new A.r(0,a3,14),new A.r(c4,3,24),D.ha)}D.d.v(d7,b5)
d4=h[a7]
i.push(new A.fJ(C.a([b2.$1(new A.r(b8,c0,0.8)),b2.$1(new A.r(b9,c0,0.8)),b2.$1(new A.r(b9,c1,0.8)),b2.$1(new A.r(b8,c1,0.8))],g),0,new A.frv(d4,a7),k,j,60,l,0,!1))
i.push(new A.fJ(C.a([b2.$1(new A.r(b9,c0,e)),b2.$1(new A.r(b8,c0,e)),b2.$1(new A.r(b8,c1,e)),b2.$1(new A.r(b9,c1,e))],g),0,new A.frw(d4,a7),k,j,60,l,0,!1))}d6=C.a([],d6)
d5=new A.fk(d6)
for(d2=0;d2<9;++d2){v=B.cZ7[d2]
w=v.a
d1=v.b
if(m&&d1>200)continue
d5.dL(new A.r(w,0,d1),new A.r(w,55,d1),7,B.pV,6)
d5.fn(new A.r(w,98,d1),46,E.WI,3,6)}for(d2=0;d2<6;++d2){w=B.dn0[d2]
d5.dL(new A.r(w,0,580),new A.r(w,90,580),3,D.ha,5)
d5.fn(new A.r(w,95,580),8,B.nZ,3,6)}D.d.v(d7,d6)
return new A.tG(d7,B.RD,B.zb,i,null,6000)},
hiG(d){return d*d*(3-2*d)},
fdT(d,e,f,g,h){var w=new A.fdU(h)
return new A.r(w.$4(d.a,e.a,f.a,g.a),w.$4(d.b,e.b,f.b,g.b),w.$4(d.c,e.c,f.c,g.c))},
hjA(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=D.k.E(e,0,30)
if(f==null){w=C.a([],x.n)
for(v=J.a4(d),u=0;u<v.gL(d);++u)w.push(30*u/(v.gL(d)-1))
t=w}else t=f
w=J.a4(d)
v=J.a4(t)
s=0
for(;;){r=s+2
if(!(r<w.gL(d)&&v.h(t,s+1)<=m))break;++s}w=s+1
q=A.hiG(D.k.E((m-v.h(t,s))/(v.h(t,w)-v.h(t,s)),0,1))
v=new A.fhg(d)
p=s-1
o=A.fdT(v.$1(p).a,v.$1(s).a,v.$1(w).a,v.$1(r).a,q)
n=A.fdT(v.$1(p).b,v.$1(s).b,v.$1(w).b,v.$1(r).b,q)
r=Math.sin(m*1.3)
v=Math.sin(m*1.9)
w=Math.cos(m*1.1)
return new C.z(new A.r(o.a+r*3,Math.max(o.b+v*2.5,18),o.c+w*3),n)},
i_v(d){return $.i_u.c4(0,d.a,new A.fqd(d))},
hm_(d){return $.i_w.c4(0,d.a,new A.fqa(d))},
i0E(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=d.a
if(i==="scatter")return A.hjA(B.dbq,e,null)
if(d.w.length!==0)return A.hjA(A.hm_(d),e,A.i_v(d))
w=B.dsI.h(0,i)
if(w==null)w=B.aNm
v=B.csj[w.a]
u=w.b?-1:1
t=new A.r(d.ga3V(0),d.r+d.gGE()/2,d.ga3W())
s=new A.fri(t,u,d)
r=new A.frj(t,u,d)
q=D.k.E(e,0,30)
i=v.length
p=0
for(;;){o=p+2
if(!(o<i&&v[p+1].a<=q))break;++p}i=v[p].a
n=p+1
m=A.hiG(D.k.E((q-i)/(v[n].a-i),0,1))
i=new A.frk(v)
l=p-1
k=A.fdT(s.$1(i.$1(l)),s.$1(i.$1(p)),s.$1(i.$1(n)),s.$1(i.$1(o)),m)
j=A.fdT(r.$1(i.$1(l)),r.$1(i.$1(p)),r.$1(i.$1(n)),r.$1(i.$1(o)),m)
return new C.z(new A.r(k.a,Math.max(k.b,18),k.c),j)},
lx:function lx(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
r2:function r2(d,e,f,g,h,i,j,k,l,m){var _=this
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
bG5:function bG5(d){this.a=d},
H7:function H7(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
aRU:function aRU(){var _=this
_.a=!0
_.b="NEW GLOBAL MOVEMENT FOR YOUTH"
_.c="Videos, slides, blogs and books."
_.d="ngmy.org"
_.e=0
_.x=_.w=_.r=_.f=null},
bG3:function bG3(d){this.a="highway"
this.b=d},
bG4:function bG4(d){this.a=d},
fIM:function fIM(){},
frx:function frx(d){this.a=d},
fry:function fry(d,e){this.a=d
this.b=e},
frz:function frz(d,e){this.a=d
this.b=e},
frq:function frq(){},
frr:function frr(){},
frs:function frs(){},
frt:function frt(d){this.a=d},
fru:function fru(d){this.a=d},
frv:function frv(d,e){this.a=d
this.b=e},
frw:function frw(d,e){this.a=d
this.b=e},
hk:function hk(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
fdU:function fdU(d){this.a=d},
fhg:function fhg(d){this.a=d},
fqd:function fqd(d){this.a=d},
fqc:function fqc(){},
fqa:function fqa(d){this.a=d},
fqb:function fqb(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fri:function fri(d,e,f){this.a=d
this.b=e
this.c=f},
frj:function frj(d,e,f){this.a=d
this.b=e
this.c=f},
frk:function frk(d){this.a=d},
aob:function aob(d){this.a=d},
aoc:function aoc(d,e){var _=this
_.d=d
_.r=_.f=_.e=$
_.w=e
_.x=-1
_.y=!1
_.z=""
_.c=_.a=null},
c1G:function c1G(d){this.a=d},
c1E:function c1E(d){this.a=d},
c1D:function c1D(){},
c1r:function c1r(d){this.a=d},
c1x:function c1x(d,e){this.a=d
this.b=e},
c1F:function c1F(d){this.a=d},
c1u:function c1u(d,e){this.a=d
this.b=e},
c1t:function c1t(d){this.a=d},
c11:function c11(){},
c1s:function c1s(d){this.a=d},
c1w:function c1w(d){this.a=d},
c1v:function c1v(d,e,f){this.a=d
this.b=e
this.c=f},
c1q:function c1q(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
c1p:function c1p(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
c1m:function c1m(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
c1n:function c1n(d,e){this.a=d
this.b=e},
c1h:function c1h(d,e,f){this.a=d
this.b=e
this.c=f},
c1o:function c1o(d){this.a=d},
c1k:function c1k(d,e){this.a=d
this.b=e},
c1j:function c1j(){},
c1l:function c1l(d,e){this.a=d
this.b=e},
c1i:function c1i(){},
c16:function c16(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
c15:function c15(){},
c17:function c17(d){this.a=d},
c18:function c18(d){this.a=d},
c19:function c19(d){this.a=d},
c1a:function c1a(d,e){this.a=d
this.b=e},
c1b:function c1b(d,e,f){this.a=d
this.b=e
this.c=f},
c1c:function c1c(d,e){this.a=d
this.b=e},
c1d:function c1d(d,e,f){this.a=d
this.b=e
this.c=f},
c1e:function c1e(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
c14:function c14(){},
c1f:function c1f(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
c12:function c12(){},
c13:function c13(){},
c1g:function c1g(d){this.a=d},
c1A:function c1A(d){this.a=d},
c1B:function c1B(d){this.a=d},
c1z:function c1z(d){this.a=d},
c1C:function c1C(d){this.a=d},
c1y:function c1y(d){this.a=d},
h0z(d,e,f,g){var w,v,u,t=null,s=e.r
s=s==null?t:D.k.V(s)
w=D.k.V(f)
v=e.b
v=v==null?t:v.l()
u=d+"|"+C.w(s)+"|"+w+"|"+C.w(v)
v=$.hlW.h(0,u)
if(v==null){s=C.fX(t,t,g,t,C.cZ(t,t,t,t,t,t,t,t,t,e,d),D.a5,D.c8,t,D.dQ,D.c6)
s.t0(f)
$.hlW.n(0,u,s)}else s=v
return s},
nb(a5,a6,a7,a8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4=D.o.F(a8,17)
if(a4===0){A.fIS(a5,a6,a7,0)
w=a6.a
v=(D.k.F(a7*0.35,1.6)-0.3)*w
u=a5.a
J.bq(u.save())
t=0+a6.b
u.clipRect(C.bQ(new C.a5(0,0,0+w,t)),$.nc()[1],!0)
$.W()
s=C.K()
s.r=D.c.j(0.12).gp(0)
a5.aX(new C.a5(v,0,v+w*0.12,t),s)
u.restore()
return}if(a4>=8){I.Rz(a5,a6,a4-8,a7)
return}r=B.cTs[a4-1]
w=a6.a
u=a6.b
q=new C.a5(0,0,0+w,0+u)
t=$.W()
s=C.K()
s.sar(new C.a9(D.ax,D.aD,D.x,C.a([r.c,r.d],x.O),a3,a3).aA(0,q))
a5.aX(q,s)
s=a5.a
J.bq(s.save())
s.clipRect(C.bQ(q),$.nc()[1],!0)
p=C.K()
p.r=D.c.j(0.07).gp(0)
for(o=u*0.4,n=w*0.07,m=a7*w*0.05,l=w*2,k=w*0.4,j=x.g,t=t.r,i=-4;i<14;++i){v=D.k.F(i*w/7+m,l)-k
h=C.a([],j)
g=new C.aJ(t,D.ak,a3,a3,h)
h.push(new C.b1(v,0))
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
A.h0z(r.a,C.l(a3,a3,D.c,a3,a3,a3,a3,a3,a3,a3,a3,u*0.22,a3,a3,D.u,a3,a3,!0,a3,u*0.012,a3,a3,a3,a3,a3,a3),w*0.9,1).a6(a5,new C.t(s,u*0.2))
A.h0z(r.b,C.l(a3,a3,m,a3,a3,a3,a3,a3,a3,a3,a3,u*0.1,a3,a3,D.O,a3,a3,!0,a3,a3,a3,a3,a3,a3,a3,a3),w*0.8,2).a6(a5,new C.t(s,u*0.5))
d=$.VL
m=u*0.76
if(d!=null){t=d.c
n=d.d
a0=Math.min((s+o-s)/t,(m+u*0.16-m)/n)
o=C.K()
o.Q=D.ce
a5.os(d,new C.a5(0,0,t,n),new C.a5(s,m,s+t*a0,m+n*a0),o)}else{a1=C.fX(a3,a3,a3,a3,C.cZ(a3,a3,a3,a3,a3,a3,a3,a3,a3,C.l(a3,a3,D.c,a3,a3,a3,a3,a3,a3,a3,a3,u*0.12,a3,a3,D.u,a3,a3,!0,a3,a3,a3,a3,a3,a3,a3,a3),"NGMY"),D.a5,D.c8,a3,D.dQ,D.c6)
a1.eT()
a1.a6(a5,new C.t(s,m))}a2=A.h0z("ngmy.org",C.l(a3,a3,D.ae,a3,a3,a3,a3,a3,a3,a3,a3,u*0.08,a3,a3,D.H,a3,a3,!0,a3,a3,a3,a3,a3,a3,a3,a3),400,1)
a2.a6(a5,new C.t(w-a2.b.c-w*0.05,u*0.82))},
FD:function FD(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
KR(d){return D.d.dM(B.Qy,new A.ftO(d),new A.ftP())},
yC(d){var w=B.hr.h(0,d.b),v=d.e*3.141592653589793/2,u=w.d/2+30
return new C.z(d.c+Math.sin(v)*u,d.d+Math.cos(v)*u)},
hy8(d){var w=C.a([],x.C),v=C.a([],x.fW),u=new C.en()
u.df(7)
w=new A.bKg(d,u,w,v)
w.bxJ(d,7)
return w},
z1:function z1(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ftO:function ftO(d){this.a=d},
ftP:function ftP(){},
xa:function xa(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=null
_.w=_.r=!1
_.x=0},
aT2:function aT2(d,e,f,g,h,i,j){var _=this
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
a3V:function a3V(d,e,f,g,h,i,j,k){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.w=j
_.x=k},
ajR:function ajR(d,e,f){this.a=d
this.b=e
this.c=f},
bKg:function bKg(d,e,f,g){var _=this
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
bKi:function bKi(d){this.a=d},
bKk:function bKk(d,e){this.a=d
this.b=e},
bKl:function bKl(){},
bKh:function bKh(d,e){this.a=d
this.b=e},
bKm:function bKm(){},
bKj:function bKj(d,e,f){this.a=d
this.b=e
this.c=f},
h6i(d){var w=d.x
return C.bt(w.length,D.d.cM(w,0,new A.bIn()),D.h,D.h,D.h,D.h,D.h,D.h,D.h,D.h,D.h,D.h,D.h,D.h,D.h,D.h,D.h,D.h,D.h,D.h)},
ib_(d){var w,v,u
for(w=0,v=0;u=v+1,u<d.length;v=u)w+=Math.sqrt(Math.pow(d[u].a-d[v].a,2)+Math.pow(d[u].b-d[v].b,2))
return w},
ib5(d,e){var w,v,u,t,s,r,q,p,o
for(w=e,v=0;u=v+1,u<d.length;v=u){t=d[u]
s=d[v]
r=t.a-s.a
q=t.b-s.b
p=Math.sqrt(r*r+q*q)
if(p<0.000001)continue
if(w<=p||v+2===d.length){o=D.k.E(w/p,0,1)
t=d[v]
return new C.bj(t.a+r*o,t.b+q*o,Math.atan2(r,q))}w-=p}return new C.bj(D.d.gal(d).a,D.d.gal(d).b,0)},
bIm:function bIm(d){var _=this
_.a=d
_.e=_.d=_.c=_.b=$
_.f=-1},
bIn:function bIn(){},
dfG:function dfG(d,e){this.a=d
this.b=e},
fUY(d,e,f){return new A.aXE(f,d,e,null)},
h14(d){return D.k.dk((1-D.k.E(d,0,1))*12)},
aSp:function aSp(d){var _=this
_.b=_.a=1
_.d=_.c=0
_.e=1
_.f=!1
_.r=0
_.w=!1
_.P$=0
_.S$=d
_.bu$=_.bI$=0},
aXE:function aXE(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
U8:function U8(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
c_h:function c_h(d){this.a=d},
rG:function rG(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
fij(d){var w=d.d-d.b-200
return new C.boS([157.07963267948966,2*w+380+628.3185307179587,w,190])},
KX(d,e){var w,v=A.fij(d).a,u=v[2],t=v[3],s=v[0]
v=v[1]
w=D.k.F(e,v)
if(w<0)w+=v
v=new A.fx6()
if(w<u)return new C.cx([d.b+100+w,445,1,0])
w-=u
if(w<s)return v.$4(d.d-100,545,-1.5707963267948966,w)
w-=s
if(w<t)return new C.cx([d.d,545+w,0,1])
w-=t
if(w<s)return v.$4(d.d-100,735,0,w)
w-=s
if(w<u)return new C.cx([d.d-100-w,835,-1,0])
w-=u
if(w<s)return v.$4(d.b+100,735,1.5707963267948966,w)
w-=s
if(w<t)return new C.cx([d.b,735-w,0,-1])
return v.$4(d.b+100,545,3.141592653589793,w-t)},
fTz(d,e,f){return new A.aSo(d,e,f)},
h1m(d,e){var w=D.k.F(e+d.c,28)
if(w<12)return 0
if(w<15)return 1
return 2},
hhm(d,e,f,g){var w=x.n
w=new A.bvy(d,e,f,g,C.a([],w),C.a([],w))
w.byO(d,e,f,g)
return w},
hxg(){var w,v=C.a([],x.n)
for(w=0;w<4;++w)v.push(B.kh[w].r)
return new A.bIo(v,C.c4(4,0,!1,x.i),B.ayl)},
hZ2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=C.a([],x.z)
for(w=d.length,v=e.a,u=e.b,t=e.c,s=x.o,r=0;r<d.length;d.length===w||(0,C.M)(d),++r){q=d[r]
p=C.a([],s)
for(o=q.a,n=o.length,m=0;m<o.length;o.length===n||(0,C.M)(o),++m){l=o[m]
p.push(new A.r(l.a*v,l.b*u,l.c*t))}k.push(new A.lN(p,q.b,q.c,q.d,q.e,q.f,q.r,q.w,q.x,q.y,q.z))}return k},
hRc(){var w,v,u,t,s=new A.fk(C.a([],x.z))
s.r=!0
s.aW(B.fQC,B.fSZ,D.d7,0.3)
s.aW(B.h4e,B.fSP,D.bN,0.2)
s.aW(B.a9F,B.fSN,B.hO,0.6)
s.aW(B.h_f,B.fTu,B.hO,0.6)
s.aO(B.fZl,B.fT0,D.bI)
for(w=0;w<2;++w)s.aO(new A.r(75.5,9,B.a3Z[w]),B.a9K,B.nZ)
for(w=0;w<2;++w){v=B.dhK[w]
for(u=0;u<2;++u){t=B.dhB[u]
s.dL(new A.r(v,7,t-1.5),new A.r(v,7,t+1.5),7.5,D.n5,12)}}return s},
hXB(d,e){var w,v,u,t,s,r=new A.fk(C.a([],x.z))
r.r=!0
r.aW(B.aTT,B.fS3,D.bN,0.4)
r.aW(B.h4w,B.fVK,D.bN,0.4)
r.aW(B.h4x,B.fVO,B.hO,0.6)
r.aO(B.wW,B.fS8,D.dI)
w=D.k.F(d*5+e,2)<1
r.aW(B.h6C,B.aU6,w?D.aw:D.ev,0.6)
r.aW(B.h2y,B.aU6,w?D.d7:D.d0,0.6)
for(v=0;v<2;++v){u=B.dhG[v]
for(t=0;t<2;++t){s=B.dhz[t]
r.dL(new A.r(u,6.5,s-1.5),new A.r(u,6.5,s+1.5),6.5,D.n5,12)}}return r},
idb(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=x.z,a5=C.a([],a4)
for(w=0;w<4;++w){v=B.kh[w]
u=$.aQr()
t=D.d.cD(B.kh,v)
u.Ft(0,a6)
t=A.KX(B.kh[t],u.a[t]).a
s=t[0]
r=t[1]
q=t[2]
p=t[3]
u=v.a==="bus"
o=u?A.hRc():A.hXB(a6,w)
u=u?B.aUU:B.aUd
D.d.v(a5,A.o8(A.hZ2(o.a,u),0,Math.atan2(q,p)-1.5707963267948966,new A.r(s,0,r)))}for(u=$.bDR(),t=u.length,n=0;n<u.length;u.length===t||(0,C.M)(u),++n)D.d.v(a5,A.hV1(u[n],a6))
for(u=a6*0.9,t=x.o,m=a6*22,l=a6*0.09,w=0;w<2;++w){k=B.a3A[w].a
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
a0.aW(B.f_,B.fVd,D.bx,0.4)
a0.aW(B.fT8,B.fSc,B.hO,0.7)
a0.dL(B.fTf,B.fWt,2.6,D.bx,8)
a0.aO(B.fWq,B.h2b,D.bN)
a0.dL(B.wW,B.a9D,1.2,B.hj,8)
for(a1=0;a1<2;++a1)a0.aD0(new A.r(0,13.4,0),B.fYv,B.hj,m+a1*3.141592653589793/2)
for(n=0;n<2;++n){a2=E.ayW[n]
a0.aO(new A.r(0,-11,a2),B.fYd,B.hj)
a0.aO(new A.r(-10,-6,a2),B.aUS,B.hj)
a0.aO(new A.r(10,-6,a2),B.aUS,B.hj)}for(n=0;n<2;++n){a3=B.ayS[n]
a0.jd(C.a([new A.r(a3*0.45,-10,0),new A.r(a3,-22,0)],t),0.3,B.hj,!1,0,4)}D.d.v(a5,A.o8(d,0,e-1.5707963267948966,new A.r(j+520*k,h+Math.sin(u+w)*5,i+520*f)))}return a5},
idc(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=C.a([],x.a),f=new A.fRD()
for(w=0;w<4;++w){v={}
u=B.kh[w]
v.a=v.b=null
t=$.aQr()
s=D.d.cD(B.kh,u)
t.Ft(0,d)
s=A.KX(B.kh[s],t.a[s]).a
v.b=s[0]
v.a=s[1]
s=new A.fRB(v,Math.atan2(s[2],s[3])-1.5707963267948966)
v=u.a==="bus"
r=v?B.aUU:B.aUd
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
g.push(f.$7(s.$3(q,o,p),s.$3(v,o,p),s.$3(v,n,p),s.$3(q,n,p),t+5,1200,220))}for(v=d*0.09,t=d*0.9,w=0;w<2;++w){s=B.a3A[w].a
l=s[0]
k=s[1]
j=s[2]
i=s[3]
h=v+w*3.141592653589793
s=Math.cos(h)
p=Math.sin(h)
p=new A.fRC(Math.atan2(-Math.sin(h),Math.cos(h))-1.5707963267948966,l+520*s,j+Math.sin(t+w)*5,k+520*p)
g.push(f.$7(p.$2(-42,-22),p.$2(42,-22),p.$2(42,-44),p.$2(-42,-44),i,900,230))
g.push(f.$7(p.$2(42,-22.3),p.$2(-42,-22.3),p.$2(-42,-44.3),p.$2(42,-44.3),i,900,230))}return g},
hV1(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k=B.kh[d.a*2],j=d.b,i=A.KX(k,j).a,h=i[0],g=i[1],f=i[2],e=i[3]
j=A.KX(k,j+22).a
j=[j[0],j[1],f,e,h+-e*56,g+f*56]
w=A.h1m(d,a0)
v=D.k.F(a0+d.c,28)
u=v>=17&&v<26
i=C.a([],x.z)
t=new A.fk(i)
t.r=!0
t.dL(B.f_,B.aU1,1.7,D.ha,6)
t.aW(B.fRH,B.fX4,D.av,0.3)
for(s=w===2,r=w===1,q=w===0,p=0;p<3;++p){o=!0
if(!(p===0&&s))if(!(p===1&&r)){n=p===2&&q
o=n}n=o?B.deu[p]:B.cGp[p]
m=o?0.9:0.1
t.fT(new A.r(-3.9,74-p*8,0),3.3,n,4,7,m)}t.aW(B.fRb,B.fSd,D.av,0.3)
if(u){t.fn(B.fYh,1.6,D.be,4,6)
t.aO(B.h27,B.h1P,D.be)
t.aO(B.fYG,B.aVf,D.be)
t.aO(B.h0X,B.aVf,D.be)}else{t.aO(B.fZI,B.h2Y,D.aw)
for(l=-2;l<=1;++l)t.aO(new A.r(l*1.25+0.6,40,-4.9),B.h3j,D.aw)
t.aO(B.h61,B.fZS,D.aw)}return A.o8(i,0,Math.atan2(j[2],j[3])-1.5707963267948966,new A.r(j[4],0,j[5]))},
i1y(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=C.a([],x.z),i=new A.fk(j)
i.f=1
i.e=90
w=new A.ftm(i)
for(v=$.bDR(),u=v.length,t=0;t<v.length;v.length===u||(0,C.M)(v),++t){s=v[t]
r=B.kh[s.a*2]
q=s.b
p=A.KX(r,q+22).a
o=p[0]
n=p[1]
m=p[2]
l=p[3]
for(k=-4;k<=4;++k)w.$8(o,n,m,l,0,-25+k*11,18,5)
q=A.KX(r,q-6).a
w.$8(q[0],q[1],m,l,0,0,2.2,46)}return j},
Sc:function Sc(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.d=f
_.r=g
_.w=h},
fx6:function fx6(){},
aSo:function aSo(d,e,f){this.a=d
this.b=e
this.c=f},
bvy:function bvy(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=-1},
fb7:function fb7(d,e){this.a=d
this.b=e},
bIo:function bIo(d,e,f){var _=this
_.a=d
_.b=e
_.c=0
_.d=f},
bIp:function bIp(){},
fRD:function fRD(){},
fRE:function fRE(d){this.a=d},
fRB:function fRB(d,e){this.a=d
this.b=e},
fRC:function fRC(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ftm:function ftm(d){this.a=d},
ftn:function ftn(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
A9:function A9(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.x=0},
cxd:function cxd(d,e,f){var _=this
_.a=d
_.b=e
_.d=_.c=$
_.e=f
_.f=null
_.w=_.r=0
_.x=1
_.y=0},
cxf:function cxf(d){this.a=d},
cxg:function cxg(){},
cxe:function cxe(){},
hra(d){return d.b==="hq"?12:D.o.E(D.k.bm((210+D.o.F(B.z4[d.f].l(),5)*24)/22),8,14)},
fTy(d,e,f){var w=new A.bIa(d,e,f,B.ayu,B.a24,C.a([],x.a),C.aY(x.S))
w.at=new A.b8w(null,-138,138,12,316,0,296,3.141592653589793,w.ca3())
w.ax=w.cES()
return w},
pv:function pv(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bIa:function bIa(d,e,f,g,h,i,j){var _=this
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
bIb:function bIb(){},
bIi:function bIi(d){this.a=d},
bIj:function bIj(d){this.a=d},
bIk:function bIk(d){this.a=d},
bIl:function bIl(d){this.a=d},
bIc:function bIc(d){this.a=d},
bId:function bId(){},
bIe:function bIe(){},
bIf:function bIf(d){this.a=d},
bIg:function bIg(d){this.a=d},
bIh:function bIh(d){this.a=d},
fTE(d,e){var w=C.a([],x.ha),v=C.a([new A.LK(),new A.LK(),new A.LK()],x.gQ),u=C.a([],x.s),t=new C.en()
t.df(e)
w=new A.aSO(d,t,w,v,u)
w.bxH(d,e)
return w},
h6w(d,e){var w,v,u,t,s,r,q,p,o=J.a4(e),n=x.fF,m=n.a(o.h(e,"wired"))
if(m==null)m=D.ux
w=n.a(o.h(e,"plumbed"))
if(w==null)w=D.ux
for(o=d.gqH(),n=o.length,v=J.a4(w),u=J.a4(m),t=0;t<o.length;o.length===n||(0,C.M)(o),++t){s=o[t]
r=""+s.a
q=u.h(m,r)
if(C.qV(q)){s.ay=!q
s.CW=null}p=v.h(w,r)
if(C.qV(p)){r=s.c
r=r==="bathroom"||r==="kitchen"}else r=!1
if(r){s.ch=!p
s.fr=null}}},
fTF(d){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=J.a4(d),j=C.aK(k.h(d,"seed"))
j=j==null?l:D.k.O(j)
if(j==null)j=1
w=C.aK(k.h(d,"clock"))
w=w==null?l:D.k.O(w)
v=A.fTE(j,(w==null?0:w)+7)
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
k=J.aW(k==null?D.cy:k)
j=v.d
while(k.C()){m=t.a(k.gT(k))
w=J.a4(m)
r=new A.HQ(D.k.O(C.e5(w.h(m,"id"))),D.k.O(C.e5(w.h(m,"res"))),C.cP(w.h(m,"kind")),C.cP(w.h(m,"msg")),D.k.O(C.e5(w.h(m,"reward"))))
r.f=C.e5(w.h(m,"age"))
j.push(r)}return v},
aSQ(){var w=0,v=C.j(x.dy),u,t=2,s=[],r,q,p,o,n
var $async$aSQ=C.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return C.b(C.az(),$async$aSQ)
case 7:r=e
q=C.aU(J.q(r.a,"ngmy_community_v1"))
if(q==null){u=null
w=1
break}p=x.b.a(D.S.aN(0,q,null))
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
return C.i($async$aSQ,v)},
aSP(){var w=0,v=C.j(x.H),u=1,t=[],s,r,q
var $async$aSP=C.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
w=6
return C.b(C.az(),$async$aSP)
case 6:s=e
w=7
return C.b(J.hy(s,"ngmy_community_v1"),$async$aSP)
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
return C.i($async$aSP,v)},
F7:function F7(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
OI:function OI(d){var _=this
_.a=d
_.b=25
_.d=_.c=100
_.e=!1
_.f=!0
_.r=-1},
HQ:function HQ(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=0},
LK:function LK(){this.a=-1
this.b=100
this.c=0},
aSO:function aSO(d,e,f,g,h){var _=this
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
bJ_:function bJ_(){},
bIX:function bIX(d){this.a=d},
bIY:function bIY(d,e){this.a=d
this.b=e},
bIZ:function bIZ(){},
bJ3:function bJ3(d){this.a=d},
bJ1:function bJ1(d){this.a=d},
bJ2:function bJ2(){},
bJ0:function bJ0(d){this.a=d},
bJ4:function bJ4(){},
apb:function apb(d,e){this.c=d
this.a=e},
bjc:function bjc(){var _=this
_.d=null
_.e=$
_.f=null
_.r=$
_.x=_.w=null
_.y=0
_.c=_.a=null},
dNY:function dNY(d,e){this.a=d
this.b=e},
dNZ:function dNZ(d){this.a=d},
dOa:function dOa(){},
dO4:function dO4(d,e){this.a=d
this.b=e},
dO5:function dO5(d){this.a=d},
dO3:function dO3(d){this.a=d},
dNU:function dNU(){},
dNV:function dNV(){},
dOd:function dOd(){},
dOe:function dOe(){},
dOc:function dOc(d,e){this.a=d
this.b=e},
dOb:function dOb(d,e){this.a=d
this.b=e},
dNT:function dNT(d,e){this.a=d
this.b=e},
dO_:function dO_(d,e,f){this.a=d
this.b=e
this.c=f},
dO0:function dO0(d,e,f){this.a=d
this.b=e
this.c=f},
dO1:function dO1(d,e,f){this.a=d
this.b=e
this.c=f},
dO2:function dO2(d,e){this.a=d
this.b=e},
dNX:function dNX(d,e,f){this.a=d
this.b=e
this.c=f},
dNW:function dNW(d,e,f){this.a=d
this.b=e
this.c=f},
dO7:function dO7(d,e){this.a=d
this.b=e},
dO8:function dO8(d,e){this.a=d
this.b=e},
dO9:function dO9(d){this.a=d},
dO6:function dO6(d){this.a=d},
dOf:function dOf(d){this.a=d},
dOg:function dOg(){},
acj:function acj(d,e,f){this.c=d
this.d=e
this.a=f},
bec:function bec(d,e){this.b=d
this.a=e},
vF(d,e,f,g,h,i,j,k,l,m,n){return new A.SH(g,m,d,k,e,f,n,h,l,i,j)},
rZ(d){return D.d.h_($.hvj(),new A.ftY(d))},
bDr(d,e){var w,v,u=d.e,t=new C.N(u,new A.fSb(),C.S(u).k("N<1,n>")).fF(0)
u=e.b
w=C.a6(u).k("bc<2>")
v=C.de(new C.bc(u,w),w.k("J.E"))
return t.d8(0,v.gkL(v))},
hrc(d,e,f,g,h){var w,v
if(e.a&&e.c===0){if(e.r)return"SHOCK! The breaker was still ON and you touched a live wire. Always turn the power OFF and test the wires first."
return"STOP! The breaker is still ON, so these wires are live (120 volts). Turn the breaker OFF first. This can shock you badly."}if(e.c!==0)return"The device is already in the box. Pull it out again to change the wires."
if(!e.r&&!e.y&&!h&&!g.c.q(0,f))return d.r.$2(f,g)
w=e.b
v=g.a
if(w.h(0,v)!=null)return"That place already has a wire. Tap the wire to take it off first."
if(new C.bc(w,C.a6(w).k("bc<2>")).q(0,f))return"That wire is already fastened. Tap it to take it off if you want to move it."
w.n(0,v,f)
return null},
h0V(d,e){var w,v,u,t,s,r,q=new A.ft9(),p=new A.fta(),o=C.a([],x.bm)
for(w=e.b,w=new C.cJ(w,C.a6(w).k("cJ<1,2>")).gaf(0),v=d.f,u=d.e;w.C();){t=w.d
t.toString
s=D.d.h_(v,new A.ft7(t))
r=D.d.h_(u,new A.ft8(t))
o.push(new A.a3Q(new A.cyM(r.a,q.$1(r.e)),new A.cvr(p.$1(s.f))))}return o},
fJw(d){var w=d.e,v=C.S(w).k("Z<1>")
return new A.bKq(new C.Z(w,new A.fJx(),v).gL(0),new C.Z(w,new A.fJy(),v).gL(0),d.y)},
KS(d,e){var w,v,u,t,s,r,q=A.hmG(A.fJw(d),A.h0V(d,e),e.x),p=q.c,o=new A.fua(q),n=q.b,m=n.length===0?null:D.d.f9(n,new A.fu7())
n=q.a===B.uW
if(n)w="ok"
else if(o.$1("SHORT")||o.$1("HOT_TO_GROUND"))w="short"
else{if(o.$1("REVERSED"))v="reversed"
else if(o.$1("NEUTRAL_GROUND"))v="bonded"
else if(o.$1("GROUND_AS_CURRENT"))v="groundWire"
else if(o.$1("OPEN_NEUTRAL"))v="openNeutral"
else if(o.$1("UNVERIFIED"))v="unverified"
else v=o.$1("MISSING_GROUND")?"noGround":"dead"
w=v}if(d.x&&!e.y)for(v=e.b,v=new C.cJ(v,C.a6(v).k("cJ<1,2>")).gaf(0),u=d.f;v.C();){t=v.d
t.toString
s=D.d.h_(u,new A.fu8(t))
if(!s.c.q(0,t.b)){n=s.d
return new A.b84("dead","The "+D.d.h_(d.e,new A.fu9(t)).b+" is on the wrong terminal ("+s.b+"). "+n,!1,!1,!1,"none",n)}}r=n?"Wired correctly. Hot, neutral and ground are all in the right place, and every safety check passes.":m.c+" "+p.c
n=m==null?null:m.e
if(n==null)n=""
return new A.b84(w,r,p.d,p.e,p.f,p.b,n)},
h1n(d){var w,v,u
for(w=$.fSP(),v=0;v<10;++v){u=w[v]
if(u.a===d)return u.w}return d},
aNA(d,e){var w
if(d==="light"||d==="fan")w=e.c===0?6.4:0.6
else w=e.c===0?4.7:-0.25
return w},
aOR(d,e,f){var w,v
if(d==="light"||d==="fan"){w=A.aNA(d,f)
v=f.c===0?w-3.2:w
switch(e){case 51:return new A.r(-1.5,-0.3,v)
case 52:return new A.r(0,-0.3,v)
default:return new A.r(1.5,-0.3,v)}}w=A.aNA(d,f)
switch(e){case 21:return new A.r(0.98,-0.2+(d==="gfci"?0.95:0.85),w-0.45)
case 22:return new A.r(0.98,-0.2+(d==="gfci"?-0.75:-0.55),w-0.45)
case 23:return new A.r(-0.98,-0.2+(d==="gfci"?0.95:0.85),w-0.45)
case 24:return new A.r(-0.98,-0.2+(d==="gfci"?-0.75:-0.55),w-0.45)
default:return new A.r(0,-1.98,w+0.52)}},
h0J(b5,b6,b7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=C.a([],x.z),b2=new A.fk(b1),b3=A.h1n(b5.a),b4=b3==="light"||b3==="fan"
if(b7){b2.b=1
b2.hl(B.h1b,B.aVa,B.vt,3)
b2.hl(B.h2p,B.aVa,B.vt,3)
b2.hl(B.h57,B.aVw,B.vt,2)
b2.hl(B.h30,B.aVw,B.vt,2)
b2.b=2
b2.n3(B.h0K,B.aV4,B.jn,0.05,3)
b2.n3(B.h0a,B.aV4,B.jn,0.05,3)
b2.n3(B.h03,B.h5D,B.jn,0.05,2)}w=b5.w.length===0
v=A.hhU(b2,w?b3:"outlet",!0)
u=new A.fro(b2,b6,b3,b4)
t=D.d.gI(v)
s=!w
if(s){r=b5.e
q=r.length
for(p=t.a,o=t.b+0,n=t.c,m=q-1,l=q===1,k=0;k<q;++k){j=r[k]
i=l?0:k/m-0.5
h=D.o.F(k,2)
if(j.e==="ground")g=B.vB
else{g=j.c
if(g.A(0,B.oI))g=B.oI}u.$5(60+k,new A.r(p+i*0.5,o,n+0.04*k),new A.r(i*3.6,-1.7-0.12*h,2.3+0.15*k),j.a,g)}}else if(b3==="switch"){f=D.d.gal(v)
u.$5(10,t.aa(0,B.fUj),B.h5a,"blackLine",B.Ll)
u.$5(13,f.aa(0,B.h5i),B.fZq,"blackLoad",B.Ll)
u.$5(12,t.aa(0,B.h1Z),B.fYE,"ground",B.vB)
b2.b=6
r=x.o
b2.jd(C.a([t.aa(0,B.aV1),B.fV0,B.UN],r),0.075,B.oI,!1,0.3,8)
b2.jd(C.a([f.aa(0,B.aV1),B.h1g,B.UN],r),0.075,B.oI,!1,0.3,8)
b2.Bv(B.UN,B.h52,0.28,B.adI,0.18,0.3,10)}else{u.$5(10,t.aa(0,B.fZz),B.fUO,"black",B.Ll)
u.$5(11,t.aa(0,B.h_Y),B.h1r,"white",B.oI)
u.$5(12,t.aa(0,B.h0l),B.h0b,"ground",B.vB)}if(b4)A.hiV(b2,b3,b6)
else A.hiz(b2,b3,A.aNA(b3,b6),b6.w,!1,s)
if(b6.e&&b6.c===0){b2.b=0
b2.d=0.5
for(r=b5.f,p=r.length,e=0;e<p;++e){d=r[e]
a0=A.aOR(b3,d.a,b6)
if(d.e)a1=D.bI
else{o=d.f
if(o==="ground")a1=D.be
else{o=o==="neutral"?D.c:B.Xa
a1=o}}if(b4)o=0
else{o=a0.a
if(o>0.4)o=0.12
else o=o<-0.4?-0.12:0}if(b4)n=0.6
else n=Math.abs(a0.a)<0.4?0.2:0
b2.fT(new A.r(a0.a+o,a0.b+0,a0.c+n),0.36,a1,4,8,0.1)}b2.d=1}if(b6.c>=2&&!b4)A.hkX(b2,b6.w)
r=!1
if(b6.c>=2)if(b6.d)r=b3==="outlet"||b3==="gfci"
if(r)A.i_k(b2,b6.a&&!b6.w)
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
a2=A.aNA(b3,b6)
a4=p?"Ceiling fan":"Ceiling light"
p=p?"The motor housing with blades. It has three wires: black (motor), white (neutral) and green (ground).":"The light fixture with a frosted dome. It has three wires: black, white and green."
a5=C.G([1,B.e7E,2,B.e7S,3,new A.cW(r,"A box that holds the wire connections. Every connection must be inside a box, never loose in the wall or the ceiling."+o,new A.r(0,0,-1.2),9),4,new A.cW(m,"The yellow jacket holds three wires: black (hot), white (neutral) and bare copper (ground). Yellow means 12 gauge wire for a 20 amp circuit. White jackets are 14 gauge for 15 amps.",new A.r(-0.4,1.5,-1.8),8),5,B.e8e,10,new A.cW("Black wire: hot","The hot wire brings the power from the breaker. It is the dangerous one. "+l,new A.r(-0.8,-0.8,1.2),7),13,B.e7q,11,new A.cW("White wire: neutral","The neutral wire carries the power back to the panel. "+h,new A.r(0,-0.8,1.2),7),12,new A.cW("Bare copper wire: ground","The ground wire is a safety path. If a wire touches metal, the current runs down the ground instead of through you. "+g,new A.r(0.5,-0.8,1.2),7),6,B.e7Q,20,new A.cW(a3,n,new A.r(0,-0.2,a2),9),21,B.e7V,22,B.e8d,23,B.e7O,24,B.e7T,25,B.e7H,26,B.e7W,27,B.e87,28,B.e7C,30,B.e7l,31,B.e7j,51,B.e7R,52,B.e7n,53,B.e8_,54,new A.cW(a4,p,new A.r(0,0,6.4),9),55,B.e89],x.S,x.q)
if(s){a5.n(0,20,new A.cW(b5.b,b5.c,new A.r(0,-0.2,A.aNA(b3,b6)),9))
for(s=b5.e,r=s.length,k=0;k<r;++k)a5.n(0,60+k,new A.cW(s[k].b,"Pick this wire up, then tap the screw it belongs on. Tap it again on the screw to take it off.",new A.r(-0.8+k*0.5,-0.8,1.2),7))
for(s=b5.f,r=s.length,e=0;e<r;++e){a6=s[e]
p=a6.a
a5.n(0,p,new A.cW(a6.b,a6.d,A.aOR(b3,p,b6),5))}}a7=C.a([],x.E)
if(b6.f&&b6.c===0)for(s=b5.f,r=s.length,e=0;e<r;++e){d=s[e]
a0=A.aOR(b3,d.a,b6)
a8=d.f
A:{p="hot"===a8
if(p){o=B.eMr
break A}if("neutral"===a8){o=B.eCG
break A}if("ground"===a8){o=B.eFa
break A}o=B.erR
break A}a9=o.a
if(b4){B:{if(p){n="BLACK NUT \xb7 HOT"
break B}if("neutral"===a8){n="WHITE NUT \xb7 NEUTRAL"
break B}n="GROUND"
break B}i=n}else i=w?a9:d.b
if(b4){C:{if(p){p=B.h_A
break C}if("neutral"===a8){p=B.h_v
break C}p=B.h5Q
break C}b0=p}else{p=a0.a
if(p>0.4)n=3.8
else n=p<-0.4?-4.2:0
b0=new A.r(n,Math.abs(p)<0.4?-3:-0.4,1)}a7.push(new A.hd(new A.r(a0.a+b0.a,a0.b+b0.b,a0.c+b0.c),i,o.b,0))}if(b6.a&&b6.c===0)a7.push(B.bYI)
return new A.tG(b1,a5,a7,B.wp,null,0)},
hhU(d,e,f){var w,v,u=e==="light"||e==="fan"
d.b=3
if(u){d.dP(B.aVy,B.aV9,2.2,B.xK,0.3,18)
d.SW(B.aV9,B.f_,2.2,B.xK,!1,!0,0.3,18)}else{d.aW(B.aVy,B.h0T,B.xK,0.3)
d.aW(B.fZ4,B.aUQ,B.xK,0.3)
d.aW(B.fVI,B.aUQ,B.xK,0.3)
d.aW(B.h06,B.aVe,B.xK,0.3)
d.aW(B.h_t,B.aVe,B.xK,0.3)}w=C.a([],x.o)
v=new A.fcR(d,f,w)
if(e==="switch"){v.$2(4,B.d_j)
v.$2(5,B.cYq)}else v.$2(4,B.dbr)
return w},
hrg(d,e){var w,v=$.fSP(),u=new C.Z(v,new A.fSa(d),C.S(v).k("Z<1>"))
if(!u.gam(0)){w=e-60
return w>=0&&w<u.gI(0).e.length?u.gI(0).e[w].a:null}return A.hUZ(d,e)},
hUZ(d,e){var w
A:{if(10===e){w=d==="switch"?"blackLine":"black"
break A}if(13===e){w="blackLoad"
break A}if(11===e){w="white"
break A}if(12===e){w="ground"
break A}w=null
break A}return w},
hiz(d,e,f,g,h,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k=new A.r(0,-0.2,f),j=e==="switch",i=e==="gfci"
if(g)w=B.xE
else w=j?B.bhy:B.XN
v=i?3.1:2.95
d.e=0
d.b=20
if(!h){d.aW(k.aa(0,B.fXO),new A.r(1.5,v,1.3),w,0.25)
d.e=0.15
d.b=26
u=k.aa(0,B.fXw)
d.aW(u,B.h54,g?B.bed:B.LF,0.8)
d.aO(k.aa(0,B.h1W),B.h6P,B.EM)}d.e=0.3
d.b=27
u=k.aa(0,B.h_2)
d.aW(u,new A.r(1.3,i?2.85:2.7,0.16),w,0.3)
if(j){d.e=0.7
d.b=28
u=k.aa(0,B.h1e)
d.aW(u,B.fZx,g?B.xE:G.XZ,0.35)
u=k.aa(0,B.h4C)
d.aW(u,B.h3_,g?B.xE:B.aet,0.35)}else{d.e=0.6
u=i?E.atK:B.doF
t=u.length
s=f+0.47
r=f+0.46
q=f+0.5
p=0
for(;p<t;++p){o=u[p]
d.b=27
n=-0.2+(o+0.04)
d.aO(new A.r(-0.28,n,s),B.h0S,B.EX)
d.aO(new A.r(0.28,n,s),B.h_9,B.EX)
n=-0.2+(o-0.32)
d.dL(new A.r(0,n,r),new A.r(0,n,q),0.11,B.EX,10)}if(i){d.e=0.7
d.b=28
d.aW(k.aa(0,B.h1E),B.aUW,B.bl7,0.3)
d.aW(k.aa(0,B.h5j),B.aUW,B.ah9,0.3)}}if(h){d.e=0
return}m=i?0.95:0.85
l=i?-0.75:-0.55
u=new A.fea(d,k)
if(!j||a0){u.$6$taped(23,-1,m,B.aeR,B.afm,i)
u.$5(24,-1,l,B.aeR,B.afm)}u.$6$taped(21,1,m,B.Xa,B.agE,i)
u.$5(22,1,l,B.Xa,B.agE)
d.e=0.9
d.b=25
d.dP(k.aa(0,B.h04),k.aa(0,B.h5V),0.18,B.bne,0.7,12)
d.aO(k.aa(0,B.h_x),B.h08,D.dX)
d.aW(k.aa(0,B.fXY),B.h1J,B.baD,0.6)
d.e=0},
hiV(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=e==="fan",i=A.aNA(e,f)
d.e=0
d.b=55
w=i-0.3
v=i+0.3
u=j?3.3:3.5
t=f.w?B.xE:B.bi5
d.dP(new A.r(0,0,w),new A.r(0,0,v),u,t,0.45,20)
d.b=54
if(j){u=i+4.2
d.dP(new A.r(0,0,v),new A.r(0,0,u),0.45,B.be7,0.5,10)
v=i+7.4
d.dP(new A.r(0,0,u),new A.r(0,0,v),3.6,B.WH,0.5,18)
d.dP(new A.r(0,0,v),new A.r(0,0,i+8.6),1.6,B.bms,0.7,14)}else{d.d=0.92
v=f.w?B.xE:B.bfa
d.fT(new A.r(0,0,i+1.2),3.6,v,6,14,0.7)
d.d=1}v=d.b=54
s=[B.eCP,B.eoD,B.eK6]
for(u=x.o,r=i-3.2,q=0,p=0;p<3;++p){t=s[p]
o=f.c===0
d.b=o?B.cC8[q]:v;++q
n=o?r:i
o=t.b.a
d.jd(C.a([new A.r(o,-0.3,w),new A.r(o,-0.3,n+0.4)],u),0.07,t.a,!1,0.3,6)}if(f.c===0)for(w=[B.evL,B.eEk,B.eMT],v=f.b,p=0;p<3;++p){m=w[p]
u=m.a
l=A.aOR(e,u,f)
d.b=u
d.e=0.8
t=l.a+0
o=l.b+0
k=l.c
d.dP(new A.r(t,o,k+-0.2),new A.r(t,o,k+0.3),0.09,B.vB,0.6,6)
if(v.ai(0,u))d.Bv(new A.r(t,o,k+-0.5),new A.r(t,o,k+0.9),0.4,m.b,0.26,0.4,8)
d.e=0}},
hkX(d,e){var w
d.e=0.4
d.b=30
w=e?B.xE:B.b9M
d.aW(B.h1w,B.aVg,w,0.3)
d.aW(B.h0I,B.aVg,w,0.3)
d.aW(B.fVC,B.aVp,w,0.3)
d.aW(B.fWF,B.fY9,w,0.3)
d.aW(B.h5N,B.aVp,w,0.3)
d.dP(B.h_g,B.h0E,0.1,B.LF,0.8,10)
d.e=0},
i_k(d,e){var w,v
d.b=31
for(w=0;w<2;++w){v=B.d1T[w]
d.dP(new A.r(v,0.52,0.2),new A.r(v,0.52,1.9),0.04,B.LF,0.8,6)}d.aW(B.fSL,B.h4R,B.beP,0.35)
d.baI(B.aVb,0.2,e?D.Xc:B.biP,0.9)
if(e){d.d=0.35
d.fT(B.aVb,0.5,D.Xc,4,8,0)
d.d=1}},
fG:function fG(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
Ck:function Ck(d){var _=this
_.a=!0
_.b=d
_.c=0
_.w=_.r=_.f=_.e=_.d=!1
_.x=!0
_.y=!1
_.z=""},
ju:function ju(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
SH:function SH(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
fvg:function fvg(){},
fvh:function fvh(){},
fvi:function fvi(){},
fvj:function fvj(){},
fvk:function fvk(){},
ftY:function ftY(d){this.a=d},
fSb:function fSb(){},
b84:function b84(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.r=i
_.w=j},
ft9:function ft9(){},
fta:function fta(){},
ft7:function ft7(d){this.a=d},
ft8:function ft8(d){this.a=d},
fJx:function fJx(){},
fJy:function fJy(){},
fua:function fua(d){this.a=d},
fub:function fub(d){this.a=d},
fu7:function fu7(){},
fu8:function fu8(d){this.a=d},
fu9:function fu9(d){this.a=d},
fro:function fro(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
frp:function frp(d){this.a=d},
fcR:function fcR(d,e,f){this.a=d
this.b=e
this.c=f},
fSa:function fSa(d){this.a=d},
fea:function fea(d,e){this.a=d
this.b=e},
ago(d){var w
A:{if("outlet"===d){w="Outlet"
break A}if("gfci"===d){w="GFCI outlet"
break A}if("switch"===d){w="Light switch"
break A}if("light"===d){w="Ceiling light"
break A}if("fan"===d){w="Ceiling fan"
break A}w=A.rZ(d).b
break A}return w},
fvl:function fvl(){},
fvm:function fvm(){},
fvn:function fvn(){},
fvo:function fvo(){},
fvp:function fvp(){},
fvq:function fvq(){},
fvr:function fvr(){},
fvs:function fvs(){},
fvt:function fvt(){},
fvu:function fvu(){},
aOG(d){return D.d.dM(B.a2O,new A.fr9(d),new A.fra())},
h3L(d,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i={},h=new A.fS9(),g=new A.fS6(),f=d.c,e=f==="hall"
if(!e&&d.p1!=="back"){w=a0.e?d.ghm(0)-14:Math.min(a0.d,d.ghm(0)-14)
v=h.$1(w)
return new A.abi(w,v,d.ghm(0)/2,g.$1(v))}if(e&&a1<2){w=a0.e?d.ghm(0)-14:Math.min(a0.d,d.ghm(0)-14)
v=h.$1(w)
return new A.abi(w,v,d.ghm(0)/2,g.$1(v))}if(e){f=C.a([],x.n)
for(e=d.w,u=e.length,t=0;t<e.length;e.length===u||(0,C.M)(e),++t){s=e[t]
if(s.b==="back"&&!s.a)f.push(s.c)}r=f.length===0?-40:D.d.f9(f,D.vn)-19-8
q=f.length===0?40:D.d.f9(f,D.pz)+19+8
p=d.gev(0)/2-8
f=a1===2?(-p+r)/2:(q+p)/2
return new A.abi(p-q,106,f,61)}e=d.gev(0)
q=d.gev(0)/2-6
if(f==="bathroom"&&!d.ok)q=14
f=C.a([],x.f)
for(u=d.w,o=u.length,t=0;t<u.length;u.length===o||(0,C.M)(u),++t){s=u[t]
if(s.b==="back"&&!s.a){n=s.c
f.push(new C.z(n-19,n+19))}}D.d.aV(f,new A.fS7())
m=i.a=i.b=-e/2+6
l=new A.fS8(i)
for(e=f.length,t=0;t<f.length;f.length===e||(0,C.M)(f),++t){u=f[t]
k=u.a
if(k>m)l.$2(m,Math.min(k,q))
m=Math.max(m,u.b)}if(m<q)l.$2(m,q)
j=Math.max(30,i.a-i.b-4)
w=a0.e?j:Math.min(a0.d,j)
v=h.$1(w)
return new A.abi(w,v,(i.b+i.a)/2,g.$1(v))},
z9(d,e,f,g,h,i,j,k){var w=x.S
return new A.a4S(d,e,f,g,h,i,j,k,C.a([],x._),C.a([0,0,0],x.t),C.aY(w),C.U(w,x.i),C.U(w,x.cR),C.U(w,w),C.U(w,x.gh),C.U(w,x.N),C.a([],x.cX),C.aY(w),C.aY(w))},
aVe(d){var w=new A.aVd(d)
w.c6b()
return w},
hAj(d){var w=new A.aVd(7)
w.bxU(d)
return w},
ie2(d){var w,v=d.c
A:{if("bedroom"===v){w=1
break A}if("kitchen"===v||"bathroom"===v){w=2
break A}w=0
break A}return w},
m8:function m8(d,e,f,g){var _=this
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
DN:function DN(d,e,f){this.a=d
this.b=e
this.c=f},
pN:function pN(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fr9:function fr9(d){this.a=d},
fra:function fra(){},
abi:function abi(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fS9:function fS9(){},
fS6:function fS6(){},
fS7:function fS7(){},
fS8:function fS8(d){this.a=d},
oh:function oh(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aV8:function aV8(d,e,f){this.a=d
this.b=e
this.c=f},
a4S:function a4S(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v){var _=this
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
bRY:function bRY(){},
bRX:function bRX(){},
aVd:function aVd(d){var _=this
_.a=""
_.b=d
_.c=!1
_.d=$
_.e=0},
bSy:function bSy(){},
bSz:function bSz(){},
bSA:function bSA(d){this.a=d},
bSB:function bSB(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bSC:function bSC(d,e){this.a=d
this.b=e},
bSG:function bSG(d){this.a=d},
bSD:function bSD(d,e){this.a=d
this.b=e},
bSF:function bSF(d,e,f){this.a=d
this.b=e
this.c=f},
bSE:function bSE(d,e,f){this.a=d
this.b=e
this.c=f},
bSK:function bSK(){},
bSJ:function bSJ(){},
bSI:function bSI(){},
bSH:function bSH(){},
b_G(d,e,f){return new A.IE(!1,d,e,null)},
hmF(d){var w=A.vp(B.ig,d.e*3.141592653589793/2)
return new C.z(w.a,w.c)},
i0L(b3,b4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8=null,a9="A helicopter with its billboard",b0={},b1=C.a([],x.dI),b2=x.o
b0.a=C.a([],b2)
b0.b=C.a([],b2)
b0.c=C.a([],x.s)
b0.d=!1
w=new A.frJ(b0,b1)
v=new A.frQ(b0)
u=new A.frL(b3)
t=new A.frR(b3)
s=new A.frB(new A.frK(t),new A.frH(t,u))
r=new A.frN(b0,u,s,v)
q=new A.frO(b0,new A.frP(r),s)
p=new A.frM(b0,w,b1)
b2=D.d.q(B.ddy,b4)
o=!b2
n=x._
m=C.a([],n)
for(l=b3.x,k=l.length,j=0;j<l.length;l.length===k||(0,C.M)(l),++j){i=l[j]
h=i.b
if(h==="billboard"||h==="cornersign"||h==="adboard"||h==="tower"||h==="hq")m.push(i)}k=C.S(l).k("Z<1>")
g=new C.Z(l,new A.frC(),k)
h=C.a([],n)
for(f=l.length,j=0;j<l.length;l.length===f||(0,C.M)(l),++j){i=l[j]
e=i.b
if(e==="house2"||e==="bighouse")h.push(i)}v.$3$note(B.fRR,B.fQW,"Welcome to NGMY Town")
if(!g.gam(0))q.$1(g.gI(0))
if(b4==="city"||o){v.$2(B.h4k,B.h3H)
v.$2(B.h4p,B.h3G)
v.$2(B.fRh,B.fPW)
v.$2(B.fWP,B.fTC)
v.$2(B.fWK,B.fTD)
v.$2(B.fRB,B.fPY)
w.$1$speed(200)}if(b4==="billboards"||o){d={}
v.$2(B.h41,B.h3X)
v.$3$note(B.fR7,B.A9,"The big NGMY logo board: New Global Movement for Youth")
v.$2(B.fTl,B.A9)
v.$2(B.fU9,B.A9)
v.$2(B.fS6,B.A9)
v.$2(B.h3w,B.A9)
v.$2(B.h3O,B.A9)
v.$2(B.h3p,B.h3I)
d.a=!g.gaf(0).C()?B.fPX:new A.r(g.gI(0).c,0,g.gI(0).d)
a0=C.C(m,x.eB)
a1=0
for(;;){if(a0.length!==0)m=a1<(o?8:80)
else m=!1
if(!m)break
D.d.aV(a0,new A.frD(d))
i=D.d.cG(a0,0)
q.$1(i)
d.a=new A.r(i.c,0,i.d);++a1}w.$1$speed(105)
for(a2=0;a2<2;++a2)b1.push(new A.M5(B.rt,B.rt,130,6,a9,a8,!1,a8,a2))}if(b4==="edges"){n=C.a([],n)
for(m=l.length,j=0;j<l.length;l.length===m||(0,C.M)(l),++j){i=l[j]
f=i.b
if(f==="adboard"||f==="cornersign")n.push(i)}D.d.aV(n,new A.frE(new A.frA()))
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
r.$7$note(i,150,50,270,330,70,i.b==="bighouse"?"A big house with TV windows":"A house");++a2}a4=new C.Z(h,new A.frF(),x.am)
if(!a4.gam(0)){i=a4.gI(0)
a5=A.hmF(i)
n=i.c
m=i.d
v.$2(new A.r(n+a5.a*220,110,m+a5.b*220),new A.r(n,45,m))
p.$1(i)}}if(b4==="hospital"||o)for(j=0;j<3;++j){a6=B.deE[j]
i=new C.Z(l,new A.frG(a6),k)
if(!i.gaf(0).C())continue
a7=i.gaf(0)
if(!a7.C())C.b8(C.ft())
r.$7$note(a7.gT(0),160,50,300,360,60,"The "+a6)
a7=i.gaf(0)
if(!a7.C())C.b8(C.ft())
p.$1(a7.gT(0))}w.$0()
if(b4==="traffic"||o){if(b2){for(a2=0;a2<2;++a2)b1.push(new A.M5(B.rt,B.rt,130,6,a9,a8,!1,a8,a2))
o=!1}a2=0
for(;;){if(a2<4)b2=a2<(o?2:4)
else b2=!1
if(!b2)break
b1.push(new A.M5(B.rt,B.rt,130,6,B.kh[a2].a==="bus"?"A self-driving bus with its billboards":"A self-driving police car",a8,!1,a2,a8));++a2}}return b1},
IE:function IE(d,e,f,g){var _=this
_.d=d
_.f=e
_.r=f
_.a=g},
aDO:function aDO(d,e,f,g,h,i,j,k,l,m,n,o,p,q){var _=this
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
_.P=_.by=null
_.S=0
_.bI=o
_.bu=null
_.bW=0
_.f_=_.er=_.eg=!1
_.a9=1
_.ex=400
_.ah=_.fu=!1
_.bz=_.ak=null
_.bZ=0
_.dr=""
_.cI=null
_.eF=p
_.hK=_.hJ=0
_.j9=-1
_.iJ=q
_.h3=!1
_.mF=_.l8=-1e5
_.lt=0
_.c=_.a=_.qG=_.rT=null},
e8x:function e8x(){},
e8u:function e8u(d){this.a=d},
e8v:function e8v(d){this.a=d},
e8t:function e8t(){},
e8w:function e8w(d){this.a=d},
e7h:function e7h(d,e,f){this.a=d
this.b=e
this.c=f},
e7i:function e7i(d){this.a=d},
e7g:function e7g(d){this.a=d},
e7j:function e7j(d,e){this.a=d
this.b=e},
e5Q:function e5Q(d,e){this.a=d
this.b=e},
e7K:function e7K(d){this.a=d},
e6N:function e6N(d){this.a=d},
e6O:function e6O(d,e){this.a=d
this.b=e},
e6P:function e6P(d,e){this.a=d
this.b=e},
e6Q:function e6Q(d,e){this.a=d
this.b=e},
e6R:function e6R(d){this.a=d},
e5j:function e5j(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e5h:function e5h(d,e,f){this.a=d
this.b=e
this.c=f},
e5g:function e5g(d,e){this.a=d
this.b=e},
e5i:function e5i(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e5e:function e5e(d,e){this.a=d
this.b=e},
e5f:function e5f(d,e,f){this.a=d
this.b=e
this.c=f},
e5d:function e5d(d,e){this.a=d
this.b=e},
e5s:function e5s(d){this.a=d},
e5t:function e5t(d){this.a=d},
e5u:function e5u(d){this.a=d},
e6G:function e6G(d){this.a=d},
e6I:function e6I(d){this.a=d},
e6H:function e6H(d){this.a=d},
e6J:function e6J(d){this.a=d},
e6F:function e6F(d){this.a=d},
e6K:function e6K(d){this.a=d},
e6E:function e6E(d){this.a=d},
e6L:function e6L(d){this.a=d},
e6D:function e6D(d){this.a=d},
e6M:function e6M(d){this.a=d},
e6C:function e6C(d){this.a=d},
e4U:function e4U(d){this.a=d},
e4V:function e4V(d){this.a=d},
e5E:function e5E(d){this.a=d},
e5G:function e5G(d){this.a=d},
e5F:function e5F(d){this.a=d},
e5H:function e5H(d){this.a=d},
e5D:function e5D(d){this.a=d},
e5I:function e5I(d){this.a=d},
e5C:function e5C(d){this.a=d},
e5J:function e5J(d){this.a=d},
e5B:function e5B(d){this.a=d},
e5K:function e5K(d){this.a=d},
e5A:function e5A(d){this.a=d},
e5L:function e5L(d){this.a=d},
e5z:function e5z(d){this.a=d},
e5M:function e5M(d){this.a=d},
e5y:function e5y(d){this.a=d},
e7I:function e7I(){},
e7J:function e7J(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
e7G:function e7G(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e7F:function e7F(d){this.a=d},
e7H:function e7H(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e63:function e63(d){this.a=d},
e3T:function e3T(){},
e8a:function e8a(){},
e4j:function e4j(){},
e5Z:function e5Z(d){this.a=d},
e5Y:function e5Y(d){this.a=d},
e6_:function e6_(d){this.a=d},
e5X:function e5X(d){this.a=d},
e8b:function e8b(d,e){this.a=d
this.b=e},
e89:function e89(d){this.a=d},
e7n:function e7n(d,e,f){this.a=d
this.b=e
this.c=f},
e7o:function e7o(d,e){this.a=d
this.b=e},
e7m:function e7m(d,e){this.a=d
this.b=e},
e7l:function e7l(d){this.a=d},
e7k:function e7k(d){this.a=d},
e6n:function e6n(){},
e6o:function e6o(){},
e6k:function e6k(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
e6m:function e6m(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e6l:function e6l(d){this.a=d},
e6i:function e6i(d){this.a=d},
e6h:function e6h(d){this.a=d},
e6j:function e6j(d,e){this.a=d
this.b=e},
e6g:function e6g(d,e){this.a=d
this.b=e},
e5N:function e5N(d){this.a=d},
e5O:function e5O(d){this.a=d},
e7d:function e7d(){},
e5q:function e5q(d){this.a=d},
e5p:function e5p(d){this.a=d},
e5r:function e5r(d,e){this.a=d
this.b=e},
e5c:function e5c(d){this.a=d},
e64:function e64(){},
e7p:function e7p(d,e){this.a=d
this.b=e},
e5o:function e5o(){},
e7A:function e7A(d){this.a=d},
e5m:function e5m(d){this.a=d},
e5n:function e5n(d,e){this.a=d
this.b=e},
e5l:function e5l(d){this.a=d},
e5k:function e5k(d){this.a=d},
e5U:function e5U(){},
e7z:function e7z(d,e){this.a=d
this.b=e},
e8o:function e8o(){},
e4W:function e4W(){},
e5R:function e5R(d,e){this.a=d
this.b=e},
e5S:function e5S(d){this.a=d},
e5T:function e5T(){},
e5w:function e5w(){},
e5x:function e5x(d){this.a=d},
e66:function e66(){},
e67:function e67(d,e){this.a=d
this.b=e},
e4q:function e4q(){},
e4p:function e4p(){},
e4r:function e4r(d){this.a=d},
e4o:function e4o(d){this.a=d},
e4s:function e4s(d){this.a=d},
e4n:function e4n(d){this.a=d},
e4t:function e4t(d,e){this.a=d
this.b=e},
e4m:function e4m(d){this.a=d},
e4u:function e4u(d,e){this.a=d
this.b=e},
e4l:function e4l(d,e){this.a=d
this.b=e},
e4v:function e4v(d){this.a=d},
e4k:function e4k(d){this.a=d},
e4S:function e4S(d){this.a=d},
e4T:function e4T(d){this.a=d},
e7c:function e7c(d,e,f){this.a=d
this.b=e
this.c=f},
e7a:function e7a(d,e,f){this.a=d
this.b=e
this.c=f},
e7b:function e7b(d,e){this.a=d
this.b=e},
e76:function e76(d,e,f){this.a=d
this.b=e
this.c=f},
e75:function e75(){},
e77:function e77(d,e){this.a=d
this.b=e},
e78:function e78(d,e){this.a=d
this.b=e},
e79:function e79(d,e){this.a=d
this.b=e},
e6X:function e6X(d,e){this.a=d
this.b=e},
e6U:function e6U(){},
e6V:function e6V(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e6T:function e6T(d,e,f){this.a=d
this.b=e
this.c=f},
e6W:function e6W(d,e,f){this.a=d
this.b=e
this.c=f},
e6S:function e6S(d,e){this.a=d
this.b=e},
e88:function e88(d){this.a=d},
e86:function e86(d){this.a=d},
e87:function e87(d,e){this.a=d
this.b=e},
e7Z:function e7Z(d,e,f){this.a=d
this.b=e
this.c=f},
e7Y:function e7Y(){},
e8_:function e8_(){},
e80:function e80(d,e){this.a=d
this.b=e},
e81:function e81(d,e){this.a=d
this.b=e},
e82:function e82(d){this.a=d},
e83:function e83(d){this.a=d},
e84:function e84(d){this.a=d},
e85:function e85(d){this.a=d},
e7V:function e7V(d){this.a=d},
e7T:function e7T(d){this.a=d},
e7U:function e7U(){},
e7P:function e7P(d,e,f){this.a=d
this.b=e
this.c=f},
e7N:function e7N(d){this.a=d},
e7O:function e7O(){},
e7Q:function e7Q(d,e,f){this.a=d
this.b=e
this.c=f},
e7M:function e7M(d,e){this.a=d
this.b=e},
e7R:function e7R(d,e){this.a=d
this.b=e},
e7S:function e7S(d,e){this.a=d
this.b=e},
e7w:function e7w(d,e){this.a=d
this.b=e},
e7x:function e7x(d){this.a=d},
e7y:function e7y(){},
e7W:function e7W(d,e){this.a=d
this.b=e},
e7L:function e7L(d,e){this.a=d
this.b=e},
e7D:function e7D(d){this.a=d},
e7E:function e7E(){},
e7v:function e7v(){},
e7C:function e7C(){},
e8j:function e8j(d){this.a=d},
e8k:function e8k(d){this.a=d},
e8l:function e8l(d){this.a=d},
e8m:function e8m(){},
e8c:function e8c(d){this.a=d},
e8d:function e8d(d){this.a=d},
e8e:function e8e(d,e){this.a=d
this.b=e},
e8f:function e8f(d,e){this.a=d
this.b=e},
e8g:function e8g(d,e){this.a=d
this.b=e},
e8h:function e8h(d,e){this.a=d
this.b=e},
e8i:function e8i(d,e){this.a=d
this.b=e},
e5v:function e5v(){},
e6b:function e6b(d){this.a=d},
e68:function e68(){},
e69:function e69(){},
e6a:function e6a(){},
e5V:function e5V(){},
e5W:function e5W(d){this.a=d},
e7q:function e7q(){},
e5P:function e5P(d){this.a=d},
e7e:function e7e(){},
e7f:function e7f(d){this.a=d},
e7r:function e7r(d){this.a=d},
e7s:function e7s(d){this.a=d},
e61:function e61(d){this.a=d},
e60:function e60(d){this.a=d},
e62:function e62(d){this.a=d},
e7t:function e7t(d){this.a=d},
e7u:function e7u(){},
e7B:function e7B(d){this.a=d},
e6q:function e6q(){},
e6r:function e6r(d){this.a=d},
e6z:function e6z(d){this.a=d},
e6A:function e6A(){},
e6B:function e6B(d){this.a=d},
e6t:function e6t(d){this.a=d},
e6u:function e6u(d,e){this.a=d
this.b=e},
e6s:function e6s(d,e){this.a=d
this.b=e},
e6v:function e6v(d,e){this.a=d
this.b=e},
e6y:function e6y(d){this.a=d},
e6w:function e6w(d){this.a=d},
e6p:function e6p(d){this.a=d},
e6x:function e6x(d){this.a=d},
e6c:function e6c(d){this.a=d},
e6d:function e6d(d){this.a=d},
e8n:function e8n(d){this.a=d},
e6f:function e6f(d){this.a=d},
e6e:function e6e(d){this.a=d},
e3S:function e3S(d){this.a=d},
e3R:function e3R(d,e,f){this.a=d
this.b=e
this.c=f},
e3M:function e3M(){},
e3N:function e3N(){},
e3O:function e3O(d){this.a=d},
e3P:function e3P(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e65:function e65(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
e7X:function e7X(d,e){this.a=d
this.b=e},
e73:function e73(d,e){this.a=d
this.b=e},
e74:function e74(d,e){this.a=d
this.b=e},
e3Q:function e3Q(d,e){this.a=d
this.b=e},
e51:function e51(d){this.a=d},
e52:function e52(d){this.a=d},
e53:function e53(d){this.a=d},
e54:function e54(d){this.a=d},
e55:function e55(d,e){this.a=d
this.b=e},
e56:function e56(d){this.a=d},
e50:function e50(d){this.a=d},
e57:function e57(d,e){this.a=d
this.b=e},
e5_:function e5_(d,e){this.a=d
this.b=e},
e58:function e58(d,e){this.a=d
this.b=e},
e4Z:function e4Z(d,e){this.a=d
this.b=e},
e59:function e59(d){this.a=d},
e4Y:function e4Y(d){this.a=d},
e5a:function e5a(d,e){this.a=d
this.b=e},
e4X:function e4X(d,e){this.a=d
this.b=e},
e5b:function e5b(d,e){this.a=d
this.b=e},
e8q:function e8q(d){this.a=d},
e8s:function e8s(d){this.a=d},
e8p:function e8p(d){this.a=d},
e8r:function e8r(d){this.a=d},
e4E:function e4E(d){this.a=d},
e4F:function e4F(d){this.a=d},
e4G:function e4G(d){this.a=d},
e4K:function e4K(d){this.a=d},
e4L:function e4L(d){this.a=d},
e4M:function e4M(d){this.a=d},
e4D:function e4D(d){this.a=d},
e4N:function e4N(d){this.a=d},
e4C:function e4C(d){this.a=d},
e4O:function e4O(d){this.a=d},
e4B:function e4B(d){this.a=d},
e4P:function e4P(d){this.a=d},
e4Q:function e4Q(d){this.a=d},
e4A:function e4A(d){this.a=d},
e4R:function e4R(d){this.a=d},
e4z:function e4z(d){this.a=d},
e4H:function e4H(d){this.a=d},
e4y:function e4y(d){this.a=d},
e4I:function e4I(d){this.a=d},
e4x:function e4x(d){this.a=d},
e4J:function e4J(d){this.a=d},
e4w:function e4w(d){this.a=d},
e3Z:function e3Z(d){this.a=d},
e4c:function e4c(d){this.a=d},
e4b:function e4b(){},
e4_:function e4_(d){this.a=d},
e40:function e40(d){this.a=d},
e4d:function e4d(){},
e43:function e43(d,e){this.a=d
this.b=e},
e4e:function e4e(d){this.a=d},
e3Y:function e3Y(d){this.a=d},
e4f:function e4f(d){this.a=d},
e4g:function e4g(d){this.a=d},
e3X:function e3X(d){this.a=d},
e4h:function e4h(d){this.a=d},
e4i:function e4i(d){this.a=d},
e41:function e41(d){this.a=d},
e3W:function e3W(d){this.a=d},
e42:function e42(d){this.a=d},
e3V:function e3V(d){this.a=d},
e44:function e44(d){this.a=d},
e45:function e45(d){this.a=d},
e46:function e46(d){this.a=d},
e47:function e47(d){this.a=d},
e48:function e48(d){this.a=d},
e49:function e49(d){this.a=d},
e4a:function e4a(d){this.a=d},
e3U:function e3U(){},
e72:function e72(d){this.a=d},
e7_:function e7_(d,e,f){this.a=d
this.b=e
this.c=f},
e70:function e70(d,e){this.a=d
this.b=e},
e6Z:function e6Z(d){this.a=d},
e71:function e71(d,e){this.a=d
this.b=e},
e6Y:function e6Y(d){this.a=d},
bij:function bij(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
dqY:function dqY(d,e){this.a=d
this.b=e},
bhJ:function bhJ(d,e){this.b=d
this.a=e},
aHZ:function aHZ(d,e){this.c=d
this.a=e},
bsa:function bsa(){this.c=this.a=this.d=null},
f03:function f03(d,e){this.a=d
this.b=e},
f02:function f02(d){this.a=d},
f05:function f05(d){this.a=d},
f06:function f06(d){this.a=d},
f07:function f07(d){this.a=d},
f04:function f04(d){this.a=d},
eVM:function eVM(d,e,f){var _=this
_.a=d
_.b=e
_.c=f
_.d=0
_.e=1
_.f=3
_.r=0
_.w=112
_.x=!1},
M5:function M5(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
PZ:function PZ(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
frJ:function frJ(d,e){this.a=d
this.b=e},
frQ:function frQ(d){this.a=d},
frL:function frL(d){this.a=d},
frR:function frR(d){this.a=d},
frK:function frK(d){this.a=d},
frH:function frH(d,e){this.a=d
this.b=e},
frI:function frI(d,e){this.a=d
this.b=e},
frB:function frB(d,e){this.a=d
this.b=e},
frN:function frN(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
frP:function frP(d){this.a=d},
frO:function frO(d,e,f){this.a=d
this.b=e
this.c=f},
frM:function frM(d,e,f){this.a=d
this.b=e
this.c=f},
frC:function frC(){},
frD:function frD(d){this.a=d},
frA:function frA(){},
frE:function frE(d){this.a=d},
frF:function frF(){},
frG:function frG(d){this.a=d},
hck(){var w=$.hcj
return w==null?$.hcj=new A.ce5().$0():w},
iaX(d,e,f){var w,v,u,t,s,r,q,p,o,n=null,m=e.a,l=e.b,k=new C.a5(0,0,0+m,0+l),j=C.bz(k,D.iA)
$.W()
w=C.K()
w.sar(B.c22.aA(0,k))
d.aD(j,w)
v=C.K()
v.b=D.ac
v.r=F.fu.gp(0)
v.c=l*0.025
w=l*0.05
j=l*0.08
d.aD(C.bz(k.cs(-w),new C.aQ(j,j)),v)
w=C.bz(k.cs(-(l*0.1)),new C.aQ(w,w))
v.c=l*0.01
d.aD(w,v)
u=new C.t(m/2,l/2)
t=l*0.36
l=C.K()
l.r=G.afG.gp(0)
d.ae(u,t*1.1,l)
l=C.K()
l.r=F.fu.gp(0)
d.ae(u,t,l)
l=C.K()
l.r=B.EI.gp(0)
d.ae(u,t*0.9,l)
l=C.K()
l.b=D.ac
l.r=E.jH.gp(0)
l.c=t*0.04
d.ae(u,t*0.95,l)
s=$.VL
r=C.bP(u,t*1.2,t*1.5)
if(s!=null){m=s.c
l=s.d
q=Math.min((r.c-r.a)/m,(r.d-r.b)/l)
p=C.bP(r.gbN(),l*q,m*q)
j=C.K()
j.Q=D.ce
d.os(s,new C.a5(0,0,m,l),p,j)}else{o=C.fX(n,n,n,n,C.cZ(n,n,n,n,n,n,n,n,n,C.l(n,n,E.jH,n,n,n,n,n,n,n,n,t*0.6,n,n,D.u,n,n,!0,n,n,n,n,n,n,n,n),"NGMY"),D.a5,D.c8,n,D.dQ,D.c6)
o.eT()
m=o.b
l=m.c
m=m.a.c
o.a6(d,u.aF(0,new C.t(l/2,m.gbd(m)/2)))}},
hqk(d,e,f){var w,v,u,t,s,r,q,p,o=null,n=e.eh(D.J),m=e.gdF()/2
$.W()
w=C.K()
w.r=F.fu.gp(0)
d.ae(n,m,w)
w=C.K()
w.r=B.EI.gp(0)
d.ae(n,m*0.9,w)
w=C.K()
w.b=D.ac
w.r=E.jH.gp(0)
w.c=m*0.04
d.ae(n,m*0.93,w)
v=$.VL
u=C.bP(n,m*1.2,m*1.5)
if(v!=null){w=v.c
t=v.d
s=Math.min((u.c-u.a)/w,(u.d-u.b)/t)
r=C.bP(u.gbN(),t*s,w*s)
q=C.K()
q.Q=D.ce
d.os(v,new C.a5(0,0,w,t),r,q)}else{p=C.fX(o,o,o,o,C.cZ(o,o,o,o,o,o,o,o,o,C.l(o,o,E.jH,o,o,o,o,o,o,o,o,m*0.6,o,o,D.u,o,o,!0,o,o,o,o,o,o,o,o),"NGMY"),D.a5,D.c8,o,D.dQ,D.c6)
p.eT()
w=p.b
t=w.c
w=w.a.c
p.a6(d,n.aF(0,new C.t(t/2,w.gbd(w)/2)))}},
GP(d,e,f,g,h){var w,v,u,t,s,r,q,p,o,n,m=null,l=e.a,k=e.b,j=new C.a5(0,0,0+l,0+k),i=e.gdF()*0.08
i=C.bz(j,new C.aQ(i,i))
$.W()
w=C.K()
w.sar(B.apH.aA(0,j))
d.aD(i,w)
w=j.cs(-(e.gdF()*0.045))
i=e.gdF()*0.06
i=C.bz(w,new C.aQ(i,i))
w=C.K()
w.b=D.ac
w.r=F.fu.gp(0)
w.c=e.gdF()*0.035
d.aD(i,w)
v=k*0.33
u=new C.t(k*0.6,k*0.5)
w=C.K()
w.r=F.fu.gp(0)
d.ae(u,v,w)
w=C.K()
w.r=B.EI.gp(0)
d.ae(u,v*0.88,w)
t=$.VL
s=C.bP(u,v*1.15,v*1.4)
if(t!=null){i=t.c
w=t.d
r=Math.min((s.c-s.a)/i,(s.d-s.b)/w)
q=C.bP(s.gbN(),w*r,i*r)
p=C.K()
p.Q=D.ce
d.os(t,new C.a5(0,0,i,w),q,p)}else{o=C.fX(m,m,m,m,C.cZ(m,m,m,m,m,m,m,m,m,C.l(m,m,E.jH,m,m,m,m,m,m,m,m,v*0.55,m,m,D.u,m,m,!0,m,m,m,m,m,m,m,m),"NGMY"),D.a5,D.c8,m,D.dQ,D.c6)
o.eT()
i=o.b
w=i.c
i=i.a.c
o.a6(d,u.aF(0,new C.t(w/2,i.gbd(i)/2)))}n=k*1.08
l=new A.fIW(l-n-k*0.2,d,n)
l.$4(g,k*0.36,D.c,k*0.16)
l.$4(h,k*0.14,F.fu,k*0.62)},
hm0(d){return 210+D.o.F(d.l(),5)*24},
fIS(d,e,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k="NEW GLOBAL",j="MOVEMENT",i="FOR YOUTH",h=e.a,g=e.b,f=new C.a5(0,0,0+h,0+g)
A:{if(0===a1){w=B.apH
break A}if(1===a1){w=B.c1S
break A}w=B.c_V
break A}v=e.gdF()*0.06
v=C.bz(f,new C.aQ(v,v))
$.W()
u=C.K()
u.sar(w.aA(0,f))
d.aD(v,u)
t=C.K()
t.b=D.ac
w=a1===2
t.r=(w?E.jH:F.fu).gp(0)
t.c=e.gdF()*0.04
v=f.cs(-(e.gdF()*0.05))
u=e.gdF()*0.05
d.aD(C.bz(v,new C.aQ(u,u)),t)
u=f.cs(-(e.gdF()*0.1))
v=e.gdF()*0.03
v=C.bz(u,new C.aQ(v,v))
t.c=e.gdF()*0.012
d.aD(v,t)
if(a1===1)s=E.jH
else s=w?E.jH:D.c
w=new A.fIU($.VL,d,s)
v=new A.fIT(s,e,d)
u=g*0.4
r=g*0.12
if(a1===0){q=g*0.5
p=new C.t(g*0.62,q)
o=C.K()
o.r=F.fu.gp(0)
d.ae(p,g*0.34,o)
o=C.K()
o.r=B.EI.gp(0)
d.ae(p,g*0.3,o)
w.$1(C.bP(p,u,q))
n=g*1.04
m=h-r
r=new A.fIV(e)
h=r.$1(k)
q=r.$1(j)
r=r.$1(i)
r=Math.max(C.jN(q),C.jN(r))
l=(n+m)/2
r=g*0.16*Math.min(1,(m-n)/Math.max(C.jN(h),r))
v.$3(k,new C.t(l,g*0.2),r)
v.$3(j,new C.t(l,u),r)
v.$3(i,new C.t(l,g*0.6),r)}else{q=h/2
w.$1(C.bP(new C.t(q,g*0.42),u,h*0.6))
v.$3("NGMY",new C.t(q,g*0.68),r)
v.$4$w(i,new C.t(q,g*0.82),g*0.06,D.O)}},
hmi(f8,f9,g0,g1,g2,g3,g4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1,e2,e3,e4,e5,e6,e7,e8,e9,f0,f1,f2,f3="walls",f4="GFCI outlet",f5="Wall outlet",f6="\ud83d\udeb0 Needs plumbing",f7=f8.c
if(f7==="outside")return A.hWL(f8,g2,g1,g4,g3,g0)
f8.cGS()
w=x.z
v=C.a([],w)
u=new A.fk(v)
t=C.U(x.S,x.q)
s=C.a([],x.E)
r=C.a([],x.a)
q=f8.gev(0)
p=f8.ghm(0)
o=C.a([],x.O)
for(n=f8.z,m=n.length,l=0;l<n.length;n.length===m||(0,C.M)(n),++l)o.push(B.axT[n[l]])
k=B.axC[f8.Q]
j=new A.fs6(g1)
u.f=-1
u.b=j.$2("floor",310)
i=$.dP+1
u.x=$.dP=i
n=p/2
m=q+2.4
h=p+2
g=k.b
f=k.c
e=f==="tile"
if(e)d=0.35
else d=f==="wood"?0.15:0
u.n3(new A.r(0,-0.6,n),new A.r(m,1.2,h),g,d,3)
t.n(0,310,new A.cW("Floor","The "+k.a.toLowerCase()+" floor.",new A.r(0,0,n),140))
u.b=0
if(f==="wood")for(f=-q/2,a0=1;a0<8;++a0){e=C.ar(g,D.w,0.25)
e.toString
u.aO(new A.r(f+a0*q/8,0.05,n),new A.r(0.3,0.2,p),e)}else if(e)for(g=-q/2,a0=1;a0<6;++a0){u.aO(new A.r(g+a0*q/6,0.05,n),new A.r(0.3,0.2,p),B.adp)
u.aO(new A.r(0,0.05,a0*p/6),new A.r(q,0.2,0.3),B.adp)}u.x=0
g=f7==="hall"
if(g){a1=Math.min(q*0.5,p*1.5)
a2=p-14
f=-a1/2
e=a1/2
r.push(new A.fJ(C.a([new A.r(f,0.5,14),new A.r(e,0.5,14),new A.r(e,0.5,a2),new A.r(f,0.5,a2)],x.o),0,A.hq6(),900,900*(a2-14)/a1,60,-1,i,!1))}u.f=0
u.b=j.$2(f3,300)
a3=u.x=$.dP=$.dP+1
u.hl(new A.r(0,65,-0.6),new A.r(m,130,1.2),o[0],3)
u.x=0
u.b=j.$2(f3,301)
a4=u.x=$.dP=$.dP+1
f=-q
e=f/2
u.hl(new A.r(e-0.6,65,n),new A.r(1.2,130,p),o[1],3)
u.x=0
u.b=j.$2(f3,302)
a5=u.x=$.dP=$.dP+1
d=q/2
u.hl(new A.r(d+0.6,65,n),new A.r(1.2,130,p),o[2],3)
u.x=0
t.n(0,300,B.e7s)
t.n(0,301,B.e7w)
t.n(0,302,B.e7F)
if(f9){u.b=0
u.hl(new A.r(0,65,p+0.6),new A.r(m,130,1.2),o[0],3)}u.f=u.b=0
u.x=a3
u.aW(new A.r(0,2.5,0.4),new A.r(q,5,0.8),B.kw,0.1)
u.x=a4
u.aW(new A.r(e+0.4,2.5,n),new A.r(0.8,5,p),B.kw,0.1)
u.x=a5
u.aW(new A.r(d-0.4,2.5,n),new A.r(0.8,5,p),B.kw,0.1)
u.x=0
u.f=f9?0:3
u.b=j.$2("ceiling",320)
if(f9)o=1
else o=g1==="ceiling"?0.6:0.4
u.d=o
u.hl(new A.r(0,130.6,n),new A.r(m,1.2,h),B.awt[f8.as],2)
u.d=1
u.b=u.f=0
u.x=a3
u.aW(new A.r(0,128,1),new A.r(q,3,1.4),D.c,0.2)
u.x=a4
u.aW(new A.r(e+1,128,n),new A.r(1.4,3,p),D.c,0.2)
u.x=a5
u.aW(new A.r(d-1,128,n),new A.r(1.4,3,p),D.c,0.2)
u.x=0
t.n(0,320,new A.cW("Ceiling","Pick a colour above to paint the ceiling.",new A.r(0,130,n),140))
h=f8.w
a6=D.d.b3(h,new A.frT())?"left":"right"
if(!g){o=new A.fs3()
a7=p*0.55
if(f9)D.d.v(v,A.o8(o.$0(),0,3.141592653589793,new A.r(0,0,p+0.2)))
D.d.v(v,a6==="right"?A.o8(o.$0(),0,-1.5707963267948966,new A.r(d,0,a7)):A.o8(o.$0(),0,1.5707963267948966,new A.r(e,0,a7)))}for(o=f8.ax,m=f8.at,a0=0;a0<h.length;++a0){a8=h[a0]
if(a8.a)continue
a9=o.h(0,a0)
if(a9==null)a9=m.q(0,a0)?1.25:0
b0=C.a([],w)
b1=new A.fk(b0)
b1.f=1
b1.x=$.dP=$.dP+1
b2=b1.b=600+a0
b1.aO(B.h1a,B.h0U,B.kw)
b3=C.a([],w)
b4=new A.fk(b3)
b4.r=!0
b4.b=b2
if(a9>0.04){b1.b=0
b5=A.hTO(a8.d)
b6=b5.a
b1.aO(B.h_o,B.fX1,b6)
b1.aO(B.h0q,B.h6J,b5.b)
b7=C.ar(b6,D.w,0.25)
b7.toString
b1.aO(B.h_z,B.h4N,b7)
b8=-a9
b7=A.vp(B.h6E,b8)
b4.wg(new A.r(-12.5+b7.a,0+b7.b,1.2+b7.c),B.fVH,B.vp,0.15,b8)}else{b1.aW(B.h_C,B.fZD,B.vp,0.15)
b1.aW(B.h_K,B.h05,B.EC,0.8)
b1.aO(B.h07,B.aVv,B.M8)
b1.aO(B.h6a,B.aVv,B.M8)}b7=new A.fs4(a8,q,p)
D.d.v(v,b7.$1(b0))
D.d.v(v,b7.$1(b3))
t.n(0,b2,new A.cW("Door","Tap the door to go through it.",B.aTX,90))}for(o=f8.x,m=o.length,l=0;l<o.length;o.length===m||(0,C.M)(o),++l){b9=o[l]
b0=b9.b
b2=B.hr.h(0,b0)
b2.toString
b3=C.a([],w)
c0=new A.fk(b3)
c0.r=!0
c0.f=b0==="rug"?1:2
b7=100+b9.a
c0.b=j.$2("furniture",b7)
A.fZV(c0,b0,B.z4[b9.f])
D.d.v(v,A.o8(A.hZD(b3,0.8),0,b9.e*3.141592653589793/2,new A.r(b9.c,0,b9.d)))
t.n(0,b7,new A.cW(b2.a,y.M,new A.r(b9.c,12,b9.d),90))}u.f=2
u.r=!0
c1=p*0.5
w=C.S(h)
o=d-10
c2=D.k.E(new C.cQ(new C.Z(h,new A.frU(),w.k("Z<1>")),new A.frV(),w.k("cQ<1,L>")).cM(0,e+30,new A.frW())+24,e+10,o)
c3=f8.go==="fan"
c4=f8.ga5C()
c5=c4&&f8.gLY()&&f8.fy
u.b=703
if(c3){u.dL(new A.r(0,129.5,c1),new A.r(0,120,c1),1,B.hj,8)
u.dP(new A.r(0,120,c1),new A.r(0,113,c1),6,D.j7,0.5,14)
w=c5?B.nZ:D.dt
u.dP(new A.r(0,113,c1),new A.r(0,110,c1),3.6,w,0.6,12)}else{w=c5?B.nZ:D.dt
u.dP(new A.r(0,129.5,c1),new A.r(0,127,c1),7,w,0.6,16)}if(c5&&!c3){u.b=0
u.f=3
u.d=0.2
u.aEf(new A.r(0,127,c1),new A.r(0,0.5,c1),36,B.nZ,!1,14)
u.d=1
u.f=2}c6=c3?"Ceiling fan":"Ceiling light"
if(!c4)c7="It has no power yet. "+(f8.p4.length!==0?"Tap it to wire it.":"The room still needs wiring: use the Wiring button.")
else if(!f8.gLY())c7="It is ready: wire the wall switch to turn it on."
else{w=f8.fy?"It is on. Tap the wall switch (or tap this) to turn it off.":"It is off. Tap the wall switch (or tap this) to turn it on."
c7=w}t.n(0,703,new A.cW(c6,c7,new A.r(0,122,c1),80))
w=f7==="bathroom"
m=!w
c8=!m||f7==="kitchen"||f8.p4==="gfci"
h=f8.gamS()
b0=c8?f4:f5
b2=f8.p4.length!==0||f8.Ib(1)
b3=c8?f4:f5
b3=C.a([new C.e9([0,700,f/4,h,b0]),new C.e9([1,701,q/4,b2,b3])],x.az)
for(h=f8.id,a0=0;a0<h.length;++a0){f=h[a0]
b0=f.a
if(b0!=="switch"){b2=f.c
b0=b2.c>=2&&A.KS(A.rZ(b0),b2).a==="ok"
b2=h[a0].a==="gfci"?"Added GFCI outlet":"Added outlet"
b3.push(new C.e9([2+a0,800+a0,f.b,b0,b2]))}}u.f=1
u.r=!1
for(f=b3.length,b0=f8.fx,l=0;l<b3.length;b3.length===f||(0,C.M)(b3),++l){b2=b3[l].a
a0=b2[0]
c9=b2[1]
d0=b2[2]
d1=b2[3]
d2=b2[4]
u.x=$.dP=$.dP+1
u.b=c9
u.e=0.4
u.d=0.55
d3=2
if(!d1)if(a0<2){b2=f8.p4
if(b2.length!==0)b2=d3
else{b2=f8.CW
if(b2!=null)b2=b2.bh5(a0)
else b2=f8.ay?0:2}d3=b2}else d3=0
if(d1)b2=D.be
else b2=d3===1?D.aE:D.aw
u.aO(new A.r(d0,14,0.25),B.fXG,b2)
u.d=1
u.e=0
b2=d1?B.LZ:D.j7
u.aW(new A.r(d0,14,0.9),B.h1B,b2,0.25)
u.b=0
for(d4=0;d4<2;++d4)for(b2=14+F.jc[d4]*2.8,d5=0;d5<2;++d5)u.aO(new A.r(d0+B.QG[d5],b2,1.7),B.h6v,B.afD)
u.aO(new A.r(d0,14,1.7),B.h1z,D.dt)
u.x=0
if(!d1)b2="This one is not wired yet. Tap it to wire it."
else b2=b0.h(0,a0)==null?"Tap it to plug something in.":"Tap it to plug something else in, or to unplug."
t.n(0,c9,new A.cW(d2,b2,new A.r(d0,14,2),60))}f=C.a([new C.bj(702,c2,f8.gLY())],x.al)
for(a0=0;a0<h.length;++a0){b2=h[a0]
b7=b2.a
if(b7==="switch"){d6=b2.c
b7=d6.c>=2&&A.KS(A.rZ(b7),d6).a==="ok"
f.push(new C.bj(800+a0,b2.b,b7))}}for(h=f.length,l=0;l<f.length;f.length===h||(0,C.M)(f),++l){b2=f[l]
d0=b2.b
d1=b2.c
u.x=$.dP=$.dP+1
c9=u.b=b2.a
u.e=0.4
u.d=0.55
d7=2
if(!d1)if(c9===702){b2=f8.p4
if(b2.length!==0)b2=d7
else{b2=f8.CW
if(b2!=null)b2=b2.bh5(3)
else b2=f8.ay?0:2}d7=b2}else d7=0
if(d1)b2=D.be
else b2=d7===1?D.aE:D.aw
u.aO(new A.r(d0,48,0.25),B.fZo,b2)
u.d=1
u.e=0
b2=d1?B.LZ:D.j7
u.aW(new A.r(d0,48,0.9),B.fYI,b2,0.25)
u.aO(new A.r(d0,f8.fy&&d1?49.2:46.8,1.9),B.fYz,B.ahg)
u.x=0
if(!d1)b2="Not wired yet. Tap it to wire it."
else if(f8.fy)b2="On. Tap to turn the "+(c3?"fan":"light")+" off."
else b2="Off. Tap to turn the "+(c3?"fan":"light")+" on."
t.n(0,c9,new A.cW("Light switch",b2,new A.r(d0,48,2),60))}if(f8.p4.length===0&&!f8.gkF()){if(f8.p4.length===0)h=f8.gkF()
else h=!0
if(h)d8=D.V
else{h=C.a([],x.s)
if(!f8.gamS())h.push("outlet 1")
if(!(f8.p4.length!==0||f8.Ib(1)))h.push("outlet 2")
if(!f8.ga5C())h.push(f8.go==="fan"?"ceiling fan":"ceiling light")
if(!f8.gLY())h.push("switch")
d8=h}h=d8.length===0?"\u26a1 No power: needs wiring":"\u26a1 Still to wire: "+D.d.aG(d8,", ")
s.push(new A.hd(new A.r(0,104,c1),h,D.bx,0))}h=!1
if(f8.p4.length!==0)if(!f8.gyW()){h=f8.p4
h=!(h==="ptrap"||h==="faucet")}if(h)s.push(new A.hd(new A.r(0,40,14),"\ud83d\udc46 Tap the red one to wire it",D.bx,0))
u.f=2
u.r=!0
for(h=b3.length,f=x.o,b2=f8.a,l=0;l<b3.length;b3.length===h||(0,C.M)(b3),++l){b7=b3[l].a
a0=b7[0]
d0=b7[2]
d1=b7[3]
d9=b0.h(0,a0)
if(d9==null||!d1)continue
e0=A.aOG(d9)
b7=u.b=720+a0
u.jd(C.a([new A.r(d0,12,1.8),new A.r(d0,6,3),new A.r(d0,2,11)],f),0.3,B.XI,!1,0.2,6)
d6=e0.d
e1=d6<=0
if(!e1||e0.e){b8=d6*0.56
e2=$.dP+1
u.x=$.dP=e2
u.aW(new A.r(d0,2,15),new A.r(d6*0.45,4,14),B.hj,0.3)
u.aW(new A.r(d0,8,15),B.fX7,B.hj,0.3)
e3=12+b8/2
u.aW(new A.r(d0,e3,15),new A.r(d6,b8,3),E.F_,0.5)
d6=(d6-3.5)/2
e4=d0-d6
e5=(b8-3.5)/2
e6=e3+e5
d6=d0+d6
e5=e3-e5
r.push(new A.fJ(C.a([new A.r(e4,e6,16.6),new A.r(d6,e6,16.6),new A.r(d6,e5,16.6),new A.r(e4,e5,16.6)],f),b7,new A.frX(a0*7+b2),320,180,9,2,e2,!0))
u.x=0}else{d6=e0.a
if(d6==="lamp"){u.dP(new A.r(d0,0,14),new A.r(d0,1,14),6,B.WH,0.4,14)
u.dP(new A.r(d0,1,14),new A.r(d0,22,14),1,B.B9,0.5,8)
d6=f8.fy?B.nZ:S.XP
u.yG(new A.r(d0,20,14),new A.r(d0,32,14),9,d6,!1,!0,5.5,0.2,16)}else{u.aW(new A.r(d0,9,15),B.fTa,B.nN,0.1)
if(d6==="toaster"){u.aW(new A.r(d0,23,15),B.fT3,B.jE,0.8)
u.aO(new A.r(d0,28.2,15),B.h2M,B.agL)}else{u.Bv(new A.r(d0-7,21,15),new A.r(d0+7,21,15),3.6,B.LR,3,0.6,12)
u.aW(new A.r(d0-8,14.5,15),B.h01,B.LR,0.6)}}}d6=!e1||e0.e?"It is playing NGMY ads. Tap it to watch full screen with the remote.":"It is plugged in and running. Tap the outlet to unplug it or plug in something else."
t.n(0,b7,new A.cW(e0.b,d6,new A.r(d0,16,14),90))}u.f=1
u.r=!1
e7=new A.frZ(f8,u,q,r,t)
e7.$2(f8.k1,0)
if(g){e7.$2(f8.k2,1)
e7.$2(f8.k1,2)
h=f8.k2
e7.$2(h==null?f8.k1:h,3)}if(g)for(e8=p-14,h=d-14,a0=0;a0<4;++a0){e9=(D.o.F(a0,2)===0?-1:1)*h
f0=a0<2?14:e8
f1=Math.atan2(-e9,-(n-f0)*-1)
u.f=2
u.r=!1
u.x=$.dP=$.dP+1
g=19e3+a0
u.b=g
u.aO(new A.r(e9,125,f0),B.fW9,D.j7)
u.wg(new A.r(e9,118,f0),B.fSj,D.bO,0.4,f1)
u.wg(new A.r(e9+Math.sin(f1)*8.5,118,f0+Math.cos(f1)*8.5),B.fX6,D.av,0.6,f1)
u.fn(new A.r(e9-Math.sin(f1)*5+Math.cos(f1)*3,122,f0-Math.cos(f1)*5-Math.sin(f1)*3),1.4,D.aw,3,5)
u.b=u.x=0
t.n(0,g,new A.cW("Hall camera","Tap it and you look from here, like your eyes.",new A.r(e9,118,f0),60))}u.f=2
u.r=!0
if(!m||f7==="kitchen"){f7=f8.p4
f7=f7.length===0||f7==="ptrap"||f7==="faucet"}else f7=!1
if(f7){d1=f8.gjM()
f7=new A.fs5(u)
if(w){f2=e+17
if(d1){u.b=710
u.Bv(new A.r(6,0.5,14),new A.r(6,15,14),8,B.AU,5.6,0.8,18)
u.dP(new A.r(6,15,14),new A.r(6,16,14),9,B.M0,0.8,18)
u.aW(new A.r(6,21,5),B.fTm,B.AU,0.8)
u.aW(new A.r(6,28,5),B.h_e,B.M0,0.8)}else{u.b=710
u.d=0.3
u.f=3
u.aO(new A.r(6,14,9),B.fTd,D.b1)
u.d=1
u.f=2
f7.$2(-4,8)}u.b=711
u.aW(new A.r(34,14,10),B.fUB,B.nN,0.1)
u.aW(new A.r(34,29,10),B.fUI,B.Xi,0.4)
if(d1){u.dP(new A.r(34,29.3,10),new A.r(34,30.1,10),6.5,D.c,0.6,18)
u.biU(C.a([new A.r(34,30,4),new A.r(34,36,4),new A.r(34,38,7)],f),0.6,B.jE,0.9,8)}else{f7.$2(28,18)
f7.$2(40,18)}u.b=712
if(d1){u.aW(new A.r(f2,8,38),B.aUr,B.Y8,0.7)
u.aW(new A.r(f2,16.2,38),B.h4H,B.X2,0.8)
u.dP(new A.r(f2,30,3),new A.r(f2,52,3),0.7,B.jE,0.9,8)
u.dP(new A.r(f2,52,3),new A.r(f2,52,10),0.7,B.jE,0.9,8)}else{u.d=0.3
u.f=3
u.aO(new A.r(f2,8,38),B.aUr,D.b1)
u.d=1
u.f=2
f7.$2(f2-4,34)
f7.$2(f2+4,34)}f7=d1?"Fitted on its flange with a wax ring, and the supply hose joins the shut-off valve.":"There is no toilet yet: only the flange and the water stub. Use the Plumbing button to fit it."
t.n(0,710,new A.cW("Toilet",f7,new A.r(6,14,10),70))
f7=d1?"The faucet, the hoses and the P-trap are fitted.":"The sink is not plumbed. Use the Plumbing button."
t.n(0,711,new A.cW("Vanity sink",f7,new A.r(34,28,10),70))
f7=d1?"The bath is in and connected.":"The bath is not connected yet."
t.n(0,712,new A.cW("Bath",f7,new A.r(f2,10,38),90))
if(!d1)s.push(new A.hd(new A.r(0,40,14),f6,D.bi,0))}else{u.b=0
u.aW(new A.r(e+15,36,14),B.fUe,B.afp,0.6)
u.aO(new A.r(e+28.5,36,14.4),B.h1i,D.dt)
u.aW(new A.r(o,15,14),B.fTM,B.adR,0.1)
u.aW(new A.r(o,31,14),B.fTX,B.hj,0.5)
u.aW(new A.r(d-15,32.4,14),B.aUR,D.j8,0.3)
u.aW(new A.r(d-5,32.4,14),B.aUR,D.j8,0.3)
u.b=713
u.aW(new A.r(30,15,14),B.fVi,B.nN,0.1)
u.aW(new A.r(30,31,14),B.fVm,B.LC,0.5)
if(d1){u.dP(new A.r(30,32.1,14),new A.r(30,32.7,14),8,B.EV,0.8,18)
u.biU(C.a([new A.r(30,32,5),new A.r(30,42,5),new A.r(30,44,9),new A.r(30,44,13)],f),0.7,B.jE,0.9,8)}else{f7.$2(22,18)
f7.$2(38,18)}f7=d1?"The faucet, the hoses and the drain are fitted.":"The kitchen sink is not plumbed yet. Use the Plumbing button."
t.n(0,713,new A.cW("Kitchen sink",f7,new A.r(30,30,14),70))
if(!d1)s.push(new A.hd(new A.r(30,48,14),f6,D.bi,0))}}for(f7=D.d.gaf(g3),w=new C.f5(f7,new A.frY(f8));w.C();){o=f7.gT(0)
t.n(0,900+o.a,new A.cW(o.r,"Tap to see how they are, feed them or give medicine.",new A.r(o.c,36,o.d),90))}return new A.tG(v,t,s,r,new C.cx([e,d,0,p]),0)},
kz(d,e,f,g,h,i,j,k,l){var w=-h/2,v=i/2,u=h/2,t=-i/2
d.cUz(e.aa(0,f.aI(0,w)).aa(0,g.aI(0,v)),e.aa(0,f.aI(0,u)).aa(0,g.aI(0,v)),e.aa(0,f.aI(0,u)).aa(0,g.aI(0,t)),e.aa(0,f.aI(0,w)).aa(0,g.aI(0,t)),j,k,l)},
hWL(d6,d7,d8,d9,e0,e1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5=-158,c6=1000,c7=x.z,c8=C.a([],c7),c9=new A.fk(c8),d0=x.S,d1=C.U(d0,x.q),d2=C.a([],x.E),d3=d6.gev(0),d4=d6.ghm(0),d5=new A.flj(d8)
c9.f=0
c9.b=d5.$2("floor",310)
c9.hl(new A.r(0,-0.6,d4/2-60),new A.r(d3*2.5,1.2,d4*2.5),B.WK,5)
d1.n(0,310,B.e7A)
c9.b=0
c9.f=1
c9.aO(new A.r(0,0.15,60),B.fYx,E.EF)
for(w=0;w<6;++w)c9.aO(new A.r(0,0.35,8+w*22),B.h1D,B.blQ)
c9.f=2
v=$.dP+1
c9.x=$.dP=v
c9.hl(B.fRK,B.fU2,B.Lx,3)
c9.aO(B.fRf,B.fU3,B.ad9)
u=new A.flk(c9)
t=new A.flf(c9)
for(s=0;s<4;++s){r=B.dhT[s]
u.$5(B.f_,B.hu,B.ig,r,62)
u.$5(B.f_,B.hu,B.ig,r,122)}t.$5(B.f_,B.hu,B.ig,0,600)
for(s=0;s<2;++s){r=B.ayV[s]
u.$5(B.a9C,B.qD,B.t4,r,62)
u.$5(B.a9C,B.qD,B.t4,r,122)}t.$5(B.a9C,B.qD,B.t4,0,0)
for(s=0;s<2;++s){q=B.a3Z[s]
u.$5(B.fSt,B.t4,B.hu,q,62)
u.$5(B.h3v,B.ig,B.qD,-q,62)}p=C.a([],c7)
new A.fk(p).n3(B.f_,B.fUb,B.LA,0.1,2)
c9.a6B(B.h3l,B.h23,B.h1h,B.Lx,B.hu,!1)
c9.a6B(B.h1n,B.fWh,B.h1H,B.Lx,B.qD,!1)
c9.x=0
c9.r=!0
D.d.v(c8,A.o8(p,0.5,0,B.fQq))
D.d.v(c8,A.o8(p,-0.5,0,B.fQr))
c9.aO(B.fQt,B.fUa,B.Xe)
c9.aO(B.fWL,B.fSX,B.agm)
c9.aO(B.fWM,B.aUc,B.pV)
c9.aO(B.fR1,B.fVN,E.EF)
c9.dL(B.h3K,B.h3L,2.2,B.kw,8)
c9.dL(B.fTO,B.fTP,2.2,B.kw,8)
c9.aW(B.fRT,B.fVW,B.LA,0.1)
d1.n(0,600,B.e8b)
p=x.a
o=C.a([],p)
n=new A.flg(o,v)
n.$4(B.fYi,B.h1O,B.h2v,B.h0o)
n.$5$poster(B.fWH,B.fVw,B.fXx,B.h2j,1)
n.$5$poster(B.fZf,B.fZu,B.fXW,B.h2g,2)
n.$5$poster(B.h2q,B.h6R,B.h_X,B.h1N,0)
c9.r=!0
m=C.U(d0,d0)
for(d0=d6.x,l=d0.length,s=0;s<d0.length;d0.length===l||(0,C.M)(d0),++s){k=d0[s]
j=k.a
i=100+j
if(e1.q(0,i))continue
h=k.b
if(D.d.q(B.Hr,h)){d1.n(0,i,new A.cW(B.hr.h(0,h).a,"It wanders about. Move it with the arrow buttons or take it out.",new A.r(k.c,12,k.d),140))
continue}g=B.hr.h(0,h)
g.toString
f=C.a([],c7)
e=new A.fk(f)
d=e.r=!0
e.f=D.d.q(B.a48,h)?1:2
a0=h==="hospital"
e.b=(!a0?h==="shop":d)?i:d5.$2("furniture",i)
A.fZV(e,h,B.z4[k.f])
if(f.length!==0)m.n(0,j,D.d.gI(f).z)
D.d.v(c8,A.o8(f,0,k.e*3.141592653589793/2,new A.r(k.c,0,k.d)))
if(a0)j="The hospital: tap it to see the beds and treat the patients."
else j=h==="shop"?"The shop: tap it to buy food and medicine.":y.M
d1.n(0,i,new A.cW(g.a,j,new A.r(k.c,12,k.d),140))}a1=C.a([],x._)
for(l=D.d.gaf(d0),j=new C.f5(l,new A.fkH()),i=d6.k3;j.C();){h=l.gT(0)
g=h.a
a2=i.q(0,g)
f=h.b==="pole"
d=h.c
a0=h.d
a3=f?new A.r(d+20,86,a0):new A.r(d,55,a0)
d=C.a([],c7)
a4=new A.fk(d)
a0=f?4.6:4.2
a5=a2?D.e5:B.nZ
a4.fT(a3,a0,a5,3,6,a2?0.1:0)
if(!a2){a4.d=0.2
a4.fT(a3,10,B.nZ,2,6,0)
a4.d=1}D.d.v(c8,d)
if(a2)d2.push(new A.hd(new A.r(a3.a+0,a3.b+14,a3.c+0),"\u26a1 Light out: tap to go and fix it",D.bx,2e4+g))
if(f)a1.push(h)}D.d.aV(a1,new A.fkI())
for(l=x.o,w=0;a6=w+1,a6<a1.length;w=a6){a7=a1[w]
a8=a1[a6]
if(Math.abs(a7.d-a8.d)>1||Math.abs(a8.c-a7.c)>170)continue
j=C.a([],c7)
a9=new A.fk(j)
for(s=0;s<3;++s){b0=B.ayR[s]
i=a7.c
h=a7.d
g=a8.c
a9.jd(C.a([new A.r(i+b0,121,h),new A.r((i+g)/2+b0,117,h),new A.r(g+b0,121,h)],l),0.35,D.av,!1,0,4)}D.d.v(c8,j)}for(j=D.d.gaf(d0),i=new C.f5(j,new A.fkJ(d6)),h=d6.cy;i.C();){g=j.gT(0)
f=g.c
d=g.b==="hq"?190:130
a0=g.d
g=g.a
d2.push(new A.hd(new A.r(f,d,a0+40),"\u26a1 Level "+C.w(h.h(0,g))+" has no power: tap to go and fix it",D.bx,2e4+g))}for(j=D.d.gaf(d0),i=new C.f5(j,new A.fkU(d6));i.C();){h=j.gT(0)
g=h.b
f=B.hr.h(0,g)
f.toString
d=h.c
g=g==="bighouse"?120:82
d2.push(new A.hd(new A.r(d,g,h.d),"\u26a1 No power: tap to go in and fix it",D.bx,2e4+h.a))
g=C.a([],c7)
b1=new A.fk(g)
b1.d=0.45
d=h.c
b1.aO(new A.r(d,30,h.d),new A.r(f.c+2,60,f.d+2),D.dc)
b1.d=1
D.d.v(c8,g)}if(d6.c==="outside")D.d.v(c8,A.i1y())
b2=C.a([],p)
for(c7=D.d.gaf(d0),d0=new C.f5(c7,new A.fl4());d0.C();){p=c7.gT(0)
d3=new A.fli(p.e*3.141592653589793/2,p)
b3=m.h(0,p.a)
if(b3==null)b3=0
j=p.b
if(j==="billboard"){b2.push(new A.fJ(C.a([d3.$3(-33,62.5,2),d3.$3(33,62.5,2),d3.$3(33,31.5,2),d3.$3(-33,31.5,2)],l),0,new A.fl9(p),960,450,4,2,b3,!1))
b2.push(new A.fJ(C.a([d3.$3(33,62.5,-2),d3.$3(-33,62.5,-2),d3.$3(-33,31.5,-2),d3.$3(33,31.5,-2)],l),0,new A.fla(p),960,450,4,2,b3,!1))}else{i=j==="townsign"
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
b2.push(new A.fJ(C.a([d3.$3(p,j,b7),d3.$3(b4,j,b7),d3.$3(b4,i,b7),d3.$3(p,i,b7)],l),0,new A.flb(b8),b9,c0,4,2,b3,!1))
h=-b7
b2.push(new A.fJ(C.a([d3.$3(b4,j,h),d3.$3(p,j,h),d3.$3(p,i,h),d3.$3(b4,i,h)],l),0,new A.flc(b8),b9,c0,4,2,b3,!1))}else if(j==="adboard"){b2.push(new A.fJ(C.a([d3.$3(c5,195,3.6),d3.$3(158,195,3.6),d3.$3(158,90,3.6),d3.$3(c5,90,3.6)],l),0,new A.fld(p),1280,424,4,2,b3,!1))
b2.push(new A.fJ(C.a([d3.$3(158,195,-3.6),d3.$3(c5,195,-3.6),d3.$3(c5,90,-3.6),d3.$3(158,90,-3.6)],l),0,new A.fle(p),1280,424,4,2,b3,!1))}else if(j==="tower"){c1=210+D.o.F(B.z4[p.f].l(),5)*24
j=c1-8
i=c1-54
b2.push(new A.fJ(C.a([d3.$3(-40,j,35.9),d3.$3(40,j,35.9),d3.$3(40,i,35.9),d3.$3(-40,i,35.9)],l),0,new A.fkK(p),800,460,8,2,b3,!1))
b2.push(new A.fJ(C.a([d3.$3(40,j,-35.9),d3.$3(-40,j,-35.9),d3.$3(-40,i,-35.9),d3.$3(40,i,-35.9)],l),0,new A.fkL(p),800,460,8,2,b3,!1))
b2.push(new A.fJ(C.a([d3.$3(50.9,j,28),d3.$3(50.9,j,-28),d3.$3(50.9,i,-28),d3.$3(50.9,i,28)],l),0,new A.fkM(p),640,460,8,2,b3,!1))
b2.push(new A.fJ(C.a([d3.$3(-50.9,j,-28),d3.$3(-50.9,j,28),d3.$3(-50.9,i,28),d3.$3(-50.9,i,-28)],l),0,new A.fkN(p),640,460,8,2,b3,!1))
i=c1+58
j=c1+22
b2.push(new A.fJ(C.a([d3.$3(-40,i,1.7),d3.$3(40,i,1.7),d3.$3(40,j,1.7),d3.$3(-40,j,1.7)],l),0,new A.fkO(p),960,400,8,2,b3,!1))
b2.push(new A.fJ(C.a([d3.$3(40,i,-1.7),d3.$3(-40,i,-1.7),d3.$3(-40,j,-1.7),d3.$3(40,j,-1.7)],l),0,new A.fkP(p),960,400,8,2,b3,!1))}else if(j==="hq"){b2.push(new A.fJ(C.a([d3.$3(-70,108,45.9),d3.$3(70,108,45.9),d3.$3(70,52,45.9),d3.$3(-70,52,45.9)],l),0,new A.fkQ(),c6,400,8,2,b3,!1))
b2.push(new A.fJ(C.a([d3.$3(-48,215,30.2),d3.$3(48,215,30.2),d3.$3(48,175,30.2),d3.$3(-48,175,30.2)],l),0,new A.fkR(),900,380,8,2,b3,!1))
b2.push(new A.fJ(C.a([d3.$3(70,108,-45.9),d3.$3(-70,108,-45.9),d3.$3(-70,52,-45.9),d3.$3(70,52,-45.9)],l),0,new A.fkS(),c6,400,8,2,b3,!1))
b2.push(new A.fJ(C.a([d3.$3(48,215,-30.2),d3.$3(-48,215,-30.2),d3.$3(-48,175,-30.2),d3.$3(48,175,-30.2)],l),0,new A.fkT(),900,380,8,2,b3,!1))
b2.push(new A.fJ(C.a([d3.$3(-54,328,1.7),d3.$3(54,328,1.7),d3.$3(54,294,1.7),d3.$3(-54,294,1.7)],l),0,new A.fkV(p),c6,360,8,2,b3,!1))
b2.push(new A.fJ(C.a([d3.$3(54,328,-1.7),d3.$3(-54,328,-1.7),d3.$3(-54,294,-1.7),d3.$3(54,294,-1.7)],l),0,new A.fkW(p),c6,360,8,2,b3,!1))
b2.push(new A.fJ(C.a([d3.$3(85.9,118,36),d3.$3(85.9,118,-36),d3.$3(85.9,62,-36),d3.$3(85.9,62,36)],l),0,new A.fkX(p),720,560,8,2,b3,!1))
b2.push(new A.fJ(C.a([d3.$3(-85.9,118,-36),d3.$3(-85.9,118,36),d3.$3(-85.9,62,36),d3.$3(-85.9,62,-36)],l),0,new A.fkY(p),720,560,8,2,b3,!1))}else if(j==="store")b2.push(new A.fJ(C.a([d3.$3(-54,85,37.7),d3.$3(54,85,37.7),d3.$3(54,67,37.7),d3.$3(-54,67,37.7)],l),0,new A.fkZ(),900,150,6,2,b3,!1))
else if(j==="ubstation"){b2.push(new A.fJ(C.a([d3.$3(40,106,31.9),d3.$3(76,106,31.9),d3.$3(76,86,31.9),d3.$3(40,86,31.9)],l),0,new A.fl_(),480,270,8,2,b3,!1))
b2.push(new A.fJ(C.a([d3.$3(76,106,28.1),d3.$3(40,106,28.1),d3.$3(40,86,28.1),d3.$3(76,86,28.1)],l),0,new A.fl0(),480,270,8,2,b3,!1))}else if(j==="dmv")b2.push(new A.fJ(C.a([d3.$3(-50,85,38.6),d3.$3(50,85,38.6),d3.$3(50,67,38.6),d3.$3(-50,67,38.6)],l),0,new A.fl1(),900,160,8,2,b3,!1))
else if(j==="gasstation")b2.push(new A.fJ(C.a([d3.$3(-86,107,35.7),d3.$3(-54,107,35.7),d3.$3(-54,85,35.7),d3.$3(-86,85,35.7)],l),0,new A.fl2(),480,330,6,2,b3,!1))
else for(c2=0;c2<2;++c2){c3=c2===0?-40:40
j=c3-26
i=c3+26
b2.push(new A.fJ(C.a([d3.$3(j,70,60.7),d3.$3(i,70,60.7),d3.$3(i,40,60.7),d3.$3(j,40,60.7)],l),0,new A.fl3(p,c2),720,520,9,2,b3,!1))}}}for(c7=D.d.gaf(e0),d0=new C.f5(c7,new A.fl5(d6));d0.C();){p=c7.gT(0)
d2.push(new A.hd(new A.r(p.c,82,p.d),p.Q,D.cM,0))}for(c7=D.d.gaf(e0),d0=new C.f5(c7,new A.fl6(d6));d0.C();){p=c7.gT(0)
d2.push(new A.hd(new A.r(p.c,80,p.d),"\ud83d\udcde Help!",D.bx,0))}c7=d7===0
d0=c7?"\u2705 The house is finished":"\ud83c\udfe0 "+d7+" rooms still need work"
d2.push(new A.hd(B.fQJ,d0,c7?D.cS:D.dV,0))
c4=c9.x=$.dP=$.dP+1
for(s=0;s<2;++s){r=B.ayV[s]
c9.dL(new A.r(r,0,-118),new A.r(r,215,-118),3,D.j7,8)}c9.aW(B.A9,B.fU8,D.av,0.3)
c9.x=0
o.push(new A.fJ(B.cL9,0,new A.fl7(),c6,336,4,2,c4,!1))
o.push(new A.fJ(B.dey,0,new A.fl8(),c6,336,4,2,c4,!1))
c7=C.C(o,x.K)
D.d.v(c7,b2)
return new A.tG(c8,d1,d2,c7,null,4000)},
i2v(a4,a5,a6,a7,a8,a9,b0,b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=x.z,a2=C.a([],a1),a3=new A.fk(a2)
a3.r=!0
if(a4.c==="outside"){w=b0!=null
if(w&&b0.a===a4.a)A.wC(a3,b0,a5,b1,!0,0,null)
if(a6&&w&&b0.a===a4.a){w=C.a([],a1)
v=b0.b
u=b0.d
new A.fk(w).aO(new A.r(v+Math.sin(u)*9,46+b0.y,b0.c+Math.cos(u)*9),B.aUb,B.jn)
D.d.v(a2,w)}if(a8!=null){w=C.a([],a1)
t=new A.fk(w)
t.r=!0
v=a8.a
A.fZV(t,v[0],B.z4[v[4]])
D.d.v(a2,A.o8(w,0,v[3]-1.5707963267948966,new A.r(v[1],0,v[2])))}for(w=D.d.gaf(a4.x),v=new C.f5(w,new A.fv2()),u=a5*6,s=a9==="furniture";v.C();){r=w.gT(0)
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
A.hhr(i,r.b,B.z4[r.f],Math.sin(u+q)*0.5)
D.d.v(a2,A.o8(j,0,k,new A.r(o+n*10,0,m+l*10)))}for(w=D.d.gaf(b2),v=new C.f5(w,new A.fv3(a4)),u=a4.a;v.C();){s=w.gT(0)
r=s.c
q=s.d
o=s.e
n=s.f
A.wC(a3,new A.xS(u,r,q,o,!1,!1,!1,!1,!1,0,!1,!1,"","",-1,0,-1,0),a5,n,!1,900+s.a,n.c)
A.hQC(a3,s,a5)}for(w=a7.length,h=0;h<a7.length;a7.length===w||(0,C.M)(a7),++h){g=a7[h]
v=g.b
s=g.c
r=g.d
A.wC(a3,new A.xS(u,v,s,r,g.f,!1,!1,!1,!1,0,!1,!1,"","",-1,0,-1,g.e),a5,g.w,!1,0,g.x)
if(g.r){q=C.a([],a1)
new A.fk(q).aO(new A.r(v+Math.sin(r)*9,46,s+Math.cos(r)*9),B.fSI,F.fu)
D.d.v(a2,q)}}return a2}if(b0!=null&&b0.a===a4.a)A.wC(a3,b0,a5,b1,!0,0,null)
for(a1=D.d.gaf(b2),w=new C.f5(a1,new A.fv4(a4)),v=a4.a,u=a5*0.5;w.C();){s=a1.gT(0)
r=s.y
q=r>0
f=q?Math.sin(u+s.a)*r:0
r=s.c
o=s.d
if(q)n=Math.cos(u+s.a)>=0?1.5707963267948966:-1.5707963267948966
else n=s.x?0.5:s.e
A.wC(a3,new A.xS(v,r+f,o,n,q,!1,!1,!1,s.x,0,!1,!1,"","",-1,0,-1,0),a5,s.f,!1,900+s.a,null)}e=a4.ghm(0)
if(a4.go==="fan"){d=a4.ga5C()&&a4.gLY()&&a4.fy?a5*7:0
a3.b=703
for(a1=e*0.5,a0=0;a0<4;++a0){p=d+a0*3.141592653589793/2
a3.wg(new A.r(Math.cos(p)*15,115,a1+Math.sin(p)*15),B.h65,B.nN,0.1,-p)}}return a2},
hTO(d){var w
A:{if(5===d){w=B.eFR
break A}if(9===d){w=B.eKJ
break A}if(10===d){w=B.eyo
break A}if(11===d){w=B.eLF
break A}if(2===d||4===d||8===d){w=B.eoe
break A}w=B.eAZ
break A}return w},
fqX(b0,b1,b2,b3,b4,b5,b6,b7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9
for(w=b2.a,v=b2.b,u=b2.c,t=b1.a,s=b1.b,r=b1.c,q=b3.a,p=q*0.1,o=b3.b,n=o*0.1,m=b3.c,l=m*0.1,k=q*0.2,j=o*0.2,i=m*0.2,q*=0.3,o*=0.3,m*=0.3,h=-b4/2,g=b5-1,f=b5===1,e=0;e<b5;++e){d=f?0:h+b4*e/g
for(a0=b6.length,a1=s+v*d,a2=t+w*d+0,a3=r+u*d+0,a4=a2+p,a5=a3+l,a6=a2+k,a7=a3+i,a2+=q,a3+=m,a8=0;a8<b6.length;b6.length===a0||(0,C.M)(b6),++a8){a9=a1+b6[a8]
A.kz(b0,new A.r(a4,a9+n,a5),b2,B.e8,14,17,B.kw,b3,0)
A.kz(b0,new A.r(a6,a9+j,a7),b2,B.e8,11,14,b7,b3,0.6)
A.kz(b0,new A.r(a2,a9+o,a3),b2,B.e8,11,0.9,B.kw,b3,0)}}},
hhW(a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0
A:{if("shop"===a2){w=B.eTj
break A}if("hospital"===a2){w=B.eTe
break A}if("firestation"===a2){w=B.eSW
break A}if("school"===a2){w=B.eSP
break A}w=B.eSy
break A}w=w.a
v=w[0]
u=w[1]
t=w[2]
s=w[3]
r=w[4]
q=u/2
p=v/2
a1.x=$.dP=$.dP+1
a1.hl(new A.r(0,t/2,0),new A.r(v,t,u),s,2)
a1.aO(new A.r(0,2.5,0),new A.r(v+3,5,u+3),B.ad9)
w=a2==="hospital"
if(w)o=C.a([14,30,46],x.n)
else if(a2==="school"){n=C.a([14,32],x.n)
o=n}else{n=x.n
n=a2==="house2"?C.a([26],n):C.a([22],n)
o=n}m=D.o.E(D.k.bm(v/24),2,5)
n=a2==="firestation"
l=n?C.a([34],x.n):o
k=v-30
A.fqX(a1,new A.r(0,0,q).aa(0,B.f_),B.hu,B.ig,k,m,l,B.hO)
j=q+0.4
if(n){A.kz(a1,new A.r(-14,17,j),B.hu,B.e8,34,34,D.ha,B.ig,0.2)
for(i=q+0.5,h=0;h<6;++h)A.kz(a1,new A.r(-14,4+h*6,i),B.hu,B.e8,33,0.8,D.dt,B.ig,0)
A.kz(a1,new A.r(24,15,j),B.hu,B.e8,14,30,B.vp,B.ig,0)}else{A.kz(a1,new A.r(0,14,q+0.3),B.hu,B.e8,18,28,B.kw,B.ig,0)
A.kz(a1,new A.r(0,13,j),B.hu,B.e8,14,26,B.vp,B.ig,0.2)}switch(a2){case"hospital":i=t-8
A.kz(a1,new A.r(0,i,j),B.hu,B.e8,30,9,D.bx,B.ig,0)
j=q+0.5
A.kz(a1,new A.r(0,i,j),B.hu,B.e8,24,2.6,D.c,B.ig,0)
A.kz(a1,new A.r(0,i,j),B.hu,B.e8,2.6,7,D.c,B.ig,0)
break
case"shop":for(i=q+3,h=0;h<6;++h){g=(h&1)===0?D.aw:D.c
A.kz(a1,new A.r(-30+h*12,33,i),B.hu,B.e8,6,6,g,B.ig,0)}A.kz(a1,new A.r(0,t-4,j),B.hu,B.e8,36,6,a3,B.ig,0)
break
case"firestation":A.kz(a1,new A.r(0,t-5,j),B.hu,B.e8,40,7,D.bI,B.ig,0)
break
case"school":A.kz(a1,new A.r(0,t-5,j),B.hu,B.e8,40,7,D.bi,B.ig,0)
break}j=-q
A.fqX(a1,new A.r(0,0,j),B.qD,B.t4,k,m,l,B.hO)
A.kz(a1,new A.r(0,13,j-0.4),B.qD,B.e8,14,26,B.vp,B.t4,0)
f=D.o.E(D.k.bm(u/24),1,3)
k=u-26
A.fqX(a1,new A.r(p,0,0),B.t4,B.hu,k,f,l,B.hO)
i=-p
A.fqX(a1,new A.r(i,0,0),B.ig,B.qD,k,f,l,B.hO)
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
d.aW(B.f_,new A.r(v+6,2.5,u*0.58),r,0.1)
n=a1.a
k=t+5
D.d.v(n,A.o8(w,0.42,0,new A.r(0,k,u*0.25)))
a0=-u
D.d.v(n,A.o8(w,-0.42,0,new A.r(0,k,a0*0.25)))
k=p+0.2
w=t+12
a1.a6B(new A.r(k,t,q),new A.r(k,t,j),new A.r(k,w,0),s,B.hu,!1)
i-=0.2
a1.a6B(new A.r(i,t,j),new A.r(i,t,q),new A.r(i,w,0),s,B.qD,!1)
if(a2==="school"){w=q-10
e.aO(new A.r(0,t+18,w),B.fTb,D.aeQ)
e.aO(new A.r(0,t+30,w),B.fTZ,r)
e.dL(new A.r(0,t+31,w),new A.r(0,t+46,w),0.6,D.dt,6)
e.aO(new A.r(5,t+44,w),B.h2t,D.aw)}else e.aO(new A.r(v*0.28,t+14,a0*0.1),B.fXy,B.agm)}else{k=v+2
e.aW(new A.r(0,t+1.5,0),new A.r(k,3,u+2),r,0.05)
e.aO(new A.r(0,t+4,q+0.5),new A.r(k,4,1.4),a3)
if(w){w=v*0.25
k=-u*0.15
e.aO(new A.r(w,t+5,k),B.fUd,D.br)
e.aO(new A.r(w,t+6.2,k),B.h2H,D.c)}if(n){w=p-10
n=-u*0.2
e.aO(new A.r(w,t+16,n),B.fSW,B.afi)
e.aO(new A.r(w,t+32,n),B.aUc,r)}}D.d.v(a1.a,g)},
hYG(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=d.f,f=d.e
d.f=1
d.e=0
if(e==="road"){d.Gs(B.h_h,B.h0e,B.fZk,B.h0x,B.LN,B.e8)
d.e=90
for(w=0;w<2;++w){v=B.QG[w]
u=v-0.7
t=v+0.7
d.Gs(new A.r(-20,0.9,u),new A.r(20,0.9,u),new A.r(20,0.9,t),new A.r(-20,0.9,t),B.X9,B.e8)}for(w=0;w<2;++w){v=B.dhJ[w]
u=v-0.8
t=v+0.8
d.Gs(new A.r(-20,0.9,u),new A.r(20,0.9,u),new A.r(20,0.9,t),new A.r(-20,0.9,t),D.bO,B.e8)}d.f=g
d.e=f
return}d.Gs(B.h0n,B.h6q,B.fZi,B.fY0,B.LN,B.e8)
d.e=90
A:{if("roadturn"===e){u=B.dgt
break A}if("roadtee"===e){u=B.cZd
break A}u=B.cfF
break A}for(t=u.length,w=0;w<t;++w){s=u[w]
r=s.a
q=s.b
for(s=q!==0,p=r!==0,o=30*r,n=30*q,m=0;m<2;++m){l=B.QG[m]
k=p?o:l
j=s?n:l
i=p?36:1.4
h=s?36:1.4
d.aO(new A.r(k,0.95,j),new A.r(i,0.1,h),B.X9)}}d.f=g
d.e=f},
hhr(d,e,f,g){var w=new A.fbD(d,g)
switch(e){case"dog":d.aW(B.wW,B.h5M,f,0.05)
d.fn(B.fYD,3.4,f,4,8)
d.aO(B.h0N,B.fXu,D.LG)
d.aO(B.h28,B.aUX,B.hj)
d.aO(B.h6A,B.aUX,B.hj)
d.dL(B.h2W,B.fQn,0.8,f,5)
w.$5(B.dfd,6,6,1.7,f)
break
case"cat":d.aW(B.Aa,B.fXp,f,0.05)
d.fn(B.fRM,2.7,f,4,8)
d.aO(B.h5h,B.aUf,f)
d.aO(B.h5l,B.aUf,f)
d.dL(B.fRL,B.fQf,0.7,f,5)
w.$5(B.dcW,4,4,1.2,f)
break
case"cow":d.aW(B.a9E,B.fSS,D.bN,0.05)
d.aO(B.h5w,B.h4Q,B.hj)
d.aO(B.fZZ,B.fXs,B.hj)
d.aO(B.fQD,B.fXD,D.bN)
d.aO(B.fQu,B.h6T,D.nM)
d.aO(B.fXT,B.aUg,D.bO)
d.aO(B.h6w,B.aUg,D.bO)
d.dL(B.fQG,B.fRO,0.7,B.hj,5)
w.$5(B.d1S,11,11,3.2,D.bO)
break
case"sheep":d.fn(B.a9D,8.5,D.pN,4,8)
d.fn(B.fQl,7,D.pN,4,8)
d.fn(B.fQh,3.4,B.hj,4,8)
w.$5(B.df7,8,8,1.8,B.hj)
break
case"chicken":d.fn(B.Aa,4,f,4,8)
d.fn(B.fQ2,2.2,f,3,6)
d.aO(B.fQc,B.h4K,D.bx)
d.aO(B.fYL,B.fYl,D.aE)
d.aO(B.fRQ,B.fVJ,f)
w.$5(B.d_Y,3,3,0.8,D.aE)
break
case"horse":d.aW(B.fQK,B.fSr,f,0.1)
d.KT(B.fQU,B.fRa,4.2,f,3,8)
d.aO(B.fRc,B.fWe,f)
d.aO(B.fRl,B.h4J,B.hj)
d.dL(B.fQZ,B.fRP,1.8,B.hj,6)
w.$5(B.d_h,16,16,2.6,f)
break
default:d.aO(B.Aa,B.fXB,f)}},
fpJ(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=C.a([],x.z)
for(w=d.length,v=e.a,u=e.b,t=e.c,s=f.a,r=f.b,q=f.c,p=x.o,o=0;o<d.length;d.length===w||(0,C.M)(d),++o){n=d[o]
m=C.a([],p)
for(l=n.a,k=l.length,j=0;j<l.length;l.length===k||(0,C.M)(l),++j){i=l[j]
m.push(new A.r(s+(i.a-s)*v,r+(i.b-r)*u,q+(i.c-q)*t))}l=n.b
h.push(new A.lN(m,new A.r(l.a/v,l.b/u,l.c/t).goP(0),n.c,n.d,n.e,n.f,n.r,n.w,n.x,n.y,n.z))}return h},
hQC(d,e,f){var w,v,u,t,s,r=e.z
if(r.length===0)return
w=e.e
v=new A.fbt(e,Math.sin(w),Math.cos(w))
u=d.b
d.b=0
switch(r){case"feed":d.KT(v.$3(14,0,8),v.$3(14,9,8),4.5,B.nN,5.5,10)
for(r=f*0.9,t=0;t<9;++t){s=D.k.F(r+t/9,1)
d.fT(v.$3(10+s*26,26-s*22,Math.sin(t*2.1)*4),0.9,D.mZ,3,5,0)}break
case"cook":d.aW(v.$2(18,9),B.fTW,D.j7,0.2)
d.aO(v.$2(18,18.4),B.fXc,D.ft)
d.d=0.3
for(r=f*0.5,t=0;t<6;++t){s=D.k.F(r+t/6,1)
d.fT(v.$2(18+Math.sin(t*1.9)*3,22+s*22),2+s*4,D.EJ,3,6,0)}d.d=1
break
case"wash":d.KT(v.$3(20,0,-10),v.$3(20,8,-10),4,D.aR,5,10)
for(r=f*1.4,t=0;t<12;++t){s=D.k.F(r+t/12,1)
d.fT(v.$3(8+s*24,30-s*s*26,6),0.8,D.hl,3,5,0.3)}break
case"water":d.aW(v.$3(12,22,7),B.fXA,D.eh,0.2)
for(r=f*1.2,t=0;t<10;++t){s=D.k.F(r+t/10,1)
d.fT(v.$3(18+s*8,22-s*22,7),0.7,D.hl,3,5,0.3)}break
case"teach":d.aW(v.$2(22,26),B.h2V,D.dX,0.1)
d.aO(v.$2(22.8,26),B.h0w,D.bN)
break
case"duty":d.aO(v.$3(0,74,0),B.fZV,D.K)
break}d.b=u},
wC(d,e,f,g,h,i,j){var w,v,u,t
if(e.Q){w=C.a([],x.z)
A.wC(new A.fk(w),A.ata(!1,0,-1,"",!1,0,"",-1,e.CW*0.5,!1,!1,!1,e.a,!1,e.e,0,0,0),f,g,h,i,j)
D.d.v(d.a,A.o8(w,1.5707963267948966,e.d,new A.r(e.b,9,e.c)))
return}w=g.e
v=$.fUo.h(0,w)
if(v==null){A.hXt(d,e,f,i,w==="xbot"?B.SM:new A.rC(g.a,g.b,g.c,g.d,"human"))
return}w=e.e
u=e.z
t=w&&!u&&e.CW>0?e.CW*12:null
D.d.v(d.a,v.cU2(h,i,e.y,u,f,j,t,w,e.b,e.d,e.c))},
hXt(b2,b3,b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0=C.a([],x.z),b1=new A.fk(b0)
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
for(n=0;n<2;++n)o.push(q*F.jc[n]*0.6)
m=C.a([],p)
for(l=o.length,n=0;n<o.length;o.length===l||(0,C.M)(o),++n){k=o[n]
m.push(r?Math.max(0,-k)*1.5+0.1:0.04)}p=C.a([],p)
for(j=0;j<2;++j)p.push(16*Math.cos(o[j])+15.5*Math.cos(o[j]+m[j]))
i=Math.max(p[0],p[1])+3.3
h=new A.flR(b5,b1)
g=new A.flD(b1)
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
b1.fn(f,3.6,s,4,8)
g.$5(f,d,3.5,2.7,s)
g.$5(d,new A.r(p,l,e),2.6,1.9,s)
p+=0
e+=2
h.$3(new A.flE(),B.h0W,new A.r(p,l+-1.6,e))
h.$3(new A.flF(),B.fYU,new A.r(p,l+-2.9,e))}h.$3(new A.flG(s),B.fZE,new A.r(0,i+1.2,0))
h.$3(new A.flJ(t),B.h0z,new A.r(0,i+2.5,0))
h.$3(new A.flK(),B.fTq,new A.r(0,i+2.4,0))
h.$3(new A.flL(t),B.h_N,new A.r(0,i+19.6,0))
b1.dL(new A.r(0,i+20.5,0.2),new A.r(0,i+24.2,0.5),2,w,8)
p=i+29
a1=new A.r(0,p,0.6)
h.$3(new A.flM(w),B.h2L,a1)
h.$3(new A.flN(w),B.h1I,a1.aa(0,B.fVG))
h.$3(new A.flO(u),B.fXo,a1.aa(0,B.h0C))
h.$3(new A.flP(u),B.fZK,a1.aa(0,B.h6V))
for(o=p+-0.2,m=p+0.4,p+=1.9,n=0;n<2;++n){a2=F.jc[n]
b1.fn(new A.r(0+a2*4.2,o,0.6),1,w,3,6)
l=0+a2*1.8
h.$3(new A.flQ(),B.h5n,new A.r(l,m,4.75))
b1.fn(new A.r(l,m,5.1),0.5,D.n5,3,6)
b1.aO(new A.r(l,p,4.8),B.h6h,u)}h.$3(new A.flH(v),B.h6x,a1.aa(0,B.fYM))
b1.aO(a1.aa(0,B.h0G),B.h_8,B.bj8)
for(v=i+19.3,p=-q,o=b3.f,m=b3.r,l=b3.w,n=0;n<2;++n){a2=F.jc[n]
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
h.$3(new A.flI(w),B.h4L,new A.r(e,a6+-1.3,a7+0.2))
if(a5&&o){a9=a7+0
b1.dP(new A.r(e,a6+-2.6,a9),new A.r(e,a6+2.6,a9),1.7,D.aR,0.5,8)}if(a5&&m){b1.aW(new A.r(e,a6+-0.4,a7+2.6),B.h_T,D.n5,0.3)
b1.aO(new A.r(e,a6+0.2,a7+3.8),B.fYr,D.aw)}}D.d.v(b2.a,A.o8(b0,0,b3.d,new A.r(b3.b,b3.y,b3.c)))},
hZD(d,e){var w,v,u,t,s,r,q,p,o,n=C.a([],x.z)
for(w=d.length,v=x.o,u=0;u<d.length;d.length===w||(0,C.M)(d),++u){t=d[u]
s=C.a([],v)
for(r=t.a,q=r.length,p=0;p<r.length;r.length===q||(0,C.M)(r),++p){o=r[p]
s.push(new A.r(o.a*e,o.b*e,o.c*e))}n.push(new A.lN(s,t.b,t.c,t.d,t.e,t.f,t.r,t.w,t.x,t.y,t.z))}return n},
fZV(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=C.ar(f,D.w,Math.abs(-0.25))
h.toString
w=C.ar(f,D.c,Math.abs(0.2))
w.toString
A:{if("bed"===e){d.aW(B.Aa,B.fWl,B.pV,0.1)
d.aW(B.fQj,B.fW2,f,0.05)
d.aO(B.h3D,B.aUi,B.afX)
d.aO(B.fSV,B.aUi,B.afX)
d.aW(B.fQN,B.fWn,B.pV,0.1)
d.aO(B.fQx,B.h2Q,w)
break A}if("nightstand"===e){d.aW(B.wW,B.fT4,f,0.1)
d.aO(B.h1M,B.fWS,h)
d.aO(B.h6p,B.fVa,B.afA)
d.aO(B.fQQ,B.fXQ,B.nZ)
break A}if("wardrobe"===e){d.aW(B.fR9,B.fVp,f,0.1)
d.aO(B.fYb,B.fVz,h)
d.aW(B.h_D,B.aVi,B.EC,0.8)
d.aW(B.h6I,B.aVi,B.EC,0.8)
break A}if("desk"===e){d.aW(B.UL,B.fVv,f,0.1)
d.aO(B.h3M,B.aUn,h)
d.aO(B.fTS,B.aUn,h)
d.aW(B.fRr,B.fTT,B.Lj,0.5)
d.aO(B.fR6,B.fWB,D.j7)
break A}if("rug"===e){d.hl(B.h5G,B.fTn,f,2)
d.aO(B.fXZ,B.h4V,w)
break A}if("sofa"===e){d.aW(B.wW,B.fXd,f,0.05)
d.aW(B.fQM,B.fXe,h,0.05)
d.aW(B.h4_,B.aUH,h,0.05)
d.aW(B.fUW,B.aUH,h,0.05)
d.aO(B.h3C,B.aUj,w)
d.aO(B.fSU,B.aUj,w)
break A}if("armchair"===e){d.aW(B.wW,B.fUy,f,0.05)
d.aW(B.fQL,B.fUA,h,0.05)
d.aO(B.h3y,B.aUE,h)
d.aO(B.fSJ,B.aUE,h)
break A}if("coffee"===e){d.aW(B.K1,B.fVh,f,0.2)
for(v=0;v<4;++v){w=B.dhn[v]
d.aO(new A.r(w.a,6.5,w.b),B.fUl,h)}d.aW(B.fZm,B.fXz,D.bO,0.5)
break A}if("tvstand"===e){d.aW(B.a9I,B.fVU,f,0.1)
d.aO(B.fXa,B.fZ1,h)
d.aO(B.fQw,B.fTL,B.hj)
break A}if("dining"===e){d.aW(B.UL,B.fVV,f,0.2)
for(v=0;v<4;++v){w=B.cKT[v]
d.aO(new A.r(w.a,13,w.b),B.fV7,h)}break A}if("chair"===e){d.aW(B.fQs,B.fTe,f,0.1)
d.aW(B.fR0,B.fTc,f,0.1)
for(v=0;v<4;++v){w=B.d7l[v]
d.aO(new A.r(w.a,7.5,w.b),B.fTI,h)}break A}if("plant"===e){d.dL(B.f_,B.a9I,5,D.d8,10)
d.fn(B.a9E,8,B.EA,5,8)
d.fn(B.fV6,5,B.WY,4,8)
break A}if("lamp"===e){d.dL(B.f_,B.e8,4.5,B.hj,10)
d.dL(B.e8,B.aTZ,0.7,B.hj,6)
d.KT(B.fRt,B.a9G,6,B.nZ,3.5,12)
break A}if("console"===e){d.aW(B.fQT,B.aUC,f,0.15)
d.aO(B.fZL,B.aUm,h)
d.aO(B.fY3,B.aUm,h)
d.aO(B.wW,B.h4G,h)
break A}if("shelf"===e){d.aW(B.a9F,B.fUU,f,0.1)
for(u=0;u<4;++u){h=10+u*15
d.aO(new A.r(0,h,1),B.fUJ,B.hj)
w=D.o.F(u,2)
d.aO(new A.r(-8+w*6,h,2),B.fWg,[D.el,D.dI,D.eh,D.dV][u])
d.aO(new A.r(4+w*4,h,2),B.fXC,[D.dV,D.eh,D.el,D.dI][u])}break A}if("tree"===e){d.KT(B.f_,B.fR8,4.2,B.pV,3,8)
d.fn(B.aTZ,17,B.EA,5,9)
d.fn(B.fXP,11,B.WY,4,8)
d.fn(B.h4y,12,B.biM,4,8)
break A}if("pine"===e){d.dL(B.f_,B.aTR,3,B.pV,8)
for(u=0;u<3;++u){h=u*14
d.KT(new A.r(0,8+h,0),new A.r(0,26+h,0),14-u*3.5,B.adC,1.5,10)}break A}if("bush"===e){d.fn(B.wW,9,B.bfz,4,8)
d.fn(B.fWf,6.5,B.WY,4,8)
break A}if("flowers"===e){for(v=0;v<5;++v){h=B.dg_[v]
t=h.a
s=h.b
d.dL(new A.r(t,0,s),new A.r(t,7,s),0.4,B.adC,5)
d.fn(new A.r(t,8,s),2.2,h.c,3,6)}break A}if("fence"===e){for(v=0;v<4;++v)d.aW(new A.r(B.dhF[v],9,0),B.h1C,f,0.05)
d.aO(B.Aa,B.aVA,h)
d.aO(B.a9D,B.aVA,h)
break A}if("lamppost"===e){d.dL(B.f_,B.aU_,1.3,B.hj,5)
d.dL(B.f_,B.fRd,3.5,B.hj,6)
break A}if("bench"===e){d.aW(B.aTT,B.aUC,f,0.1)
d.aW(B.fQH,B.fVn,f,0.1)
d.aO(B.h3E,B.aUz,B.hj)
d.aO(B.fTg,B.aUz,B.hj)
break A}if("car"===e){d.aW(B.aTR,B.fXk,f,0.4)
d.aW(B.h49,B.fVs,f,0.4)
d.aW(B.fTp,B.fZy,B.hO,0.6)
d.aO(B.h4U,B.a9K,B.nZ)
d.aO(B.h_b,B.a9K,B.nZ)
for(v=0;v<2;++v){t=B.a40[v]
d.dL(new A.r(t,5,-18),new A.r(t,5,-21),5.5,D.n5,12)
d.dL(new A.r(t,5,18),new A.r(t,5,21),5.5,D.n5,12)}break A}if("road"===e||"roadturn"===e||"roadtee"===e||"roadcross"===e){A.hYG(d,e)
break A}if("roundabout"===e){d.dL(B.f_,B.fZs,72,B.LN,16)
d.dL(B.fZM,B.aVl,17,D.bl,10)
d.dL(B.aVl,B.aV2,15,B.bi0,10)
d.fn(B.a9I,6,E.WI,3,6)
d.dL(B.aV2,B.a9H,0.9,B.pV,5)
break A}if("house2"===e||"shop"===e||"hospital"===e||"firestation"===e||"school"===e){h=C.a([],x.z)
r=new A.fk(h)
r.b=d.b
r.r=!0
r.f=d.f
A.hhW(r,e,f)
D.d.v(d.a,A.fpJ(h,B.h2m,B.f_))
break A}if("bighouse"===e){h=C.a([],x.z)
q=new A.fk(h)
q.b=d.b
q.r=!0
q.f=d.f
A.hhW(q,"house2",f)
D.d.v(d.a,A.fpJ(h,B.h36,B.f_))
break A}if("pole"===e){d.KT(B.f_,B.fQa,2.6,B.pV,2,5)
d.aO(B.fQ6,B.fVu,B.bdX)
for(v=0;v<3;++v){t=B.ayR[v]
d.dL(new A.r(t,116,0),new A.r(t,121,0),1.1,D.bN,4)}d.dL(B.fVF,B.fVD,5.5,D.bl,6)
d.aO(B.fSB,B.fTK,D.j7)
break A}if("crate"===e){d.aW(B.a9H,B.fUc,B.jn,0.05)
d.aO(B.h6n,B.fT9,B.vp)
d.fT(B.h4d,3.4,D.aw,3,5,0.3)
d.fT(B.fWa,3.4,D.aE,3,5,0.3)
break A}if("billboard"===e){d.x=$.dP=$.dP+1
for(v=0;v<2;++v){t=B.a40[v]
d.dL(new A.r(t,0,-1),new A.r(t,40,-1),1.6,D.j7,8)}d.aW(B.fRu,B.fWQ,D.cp,0.3)
d.x=0
break A}if("tower"===e||"hq"===e){d.x=$.dP=$.dP+1
p=e==="hq"
o=p?170:100
n=p?90:70
m=p?150:A.hm0(f)
l=p?D.bO:B.dmT[D.o.F(f.l()>>>4,6)]
k=new A.ffr(d)
d.aW(new A.r(0,m/2,0),new A.r(o,m,n),l,0.25)
k.$4(o,n,20,m-8)
if(p){h=o*0.66
w=n*0.66
d.aW(new A.r(0,m+60,0),new A.r(h,120,w),D.bN,0.25)
k.$4(h,w,m+16,m+112)
d.aW(new A.r(0,m+124,0),new A.r(o*0.7,8,n*0.7),F.fu,0.4)}else{d.aO(new A.r(0,m+3,0),new A.r(o+4,6,n+4),D.cp)
d.aO(new A.r(o*0.2,m+12,0),new A.r(o*0.3,12,n*0.3),D.dt)}j=p?m+128:m+6
for(h=o*0.3,h=[-h,h],w=j+8,v=0;v<2;++v)d.aO(new A.r(h[v],w,0),B.fV4,D.j7)
h=p?112:84
d.aW(new A.r(0,j+34,0),new A.r(h,38,3),E.jH,0.3)
h=n/2
A.kz(d,new A.r(0,17,h+0.6),B.hu,B.e8,34,34,D.cp,B.ig,0.5)
A.kz(d,new A.r(0,17,h+0.7),B.e8.FK(B.ig),B.e8,1.2,34,B.hO,B.ig,0.6)
d.aW(new A.r(0,38,h+5),B.fVt,F.fu,0.3)
d.x=0
break A}if("store"===e){d.x=$.dP=$.dP+1
d.aW(B.UL,B.aU8,f,0.2)
d.aO(B.a9G,B.aU9,D.cp)
A.kz(d,B.aVF,B.hu,B.e8,112,30,B.hO,B.ig,0.6)
d.aO(B.aTY,B.aU7,D.bx)
d.aO(B.aU0,B.aU4,D.av)
d.x=0
break A}if("dmv"===e){d.x=$.dP=$.dP+1
d.aW(B.UL,B.aU8,D.aL,0.2)
d.aO(B.a9G,B.aU9,D.d7)
A.kz(d,B.aVF,B.hu,B.e8,112,30,B.hO,B.ig,0.6)
d.aO(B.aTY,B.aU7,D.bi)
d.aO(B.aU0,B.aU4,D.d7)
d.aO(B.h_Q,B.h2s,D.bI)
d.aO(B.h66,B.fWz,D.d7)
d.x=0
break A}if("ubstation"===e){d.x=$.dP=$.dP+1
for(v=0;v<2;++v){t=B.dhL[v]
for(i=0;i<2;++i){s=E.R8[i]
d.dL(new A.r(t,0,s),new A.r(t,50,s),2.2,D.aJ,6)}}d.aW(B.aU_,B.fSx,D.av,0.3)
d.aO(B.fRE,B.fSz,D.bI)
d.aW(B.fR_,B.fSq,D.ds,0.6)
d.aO(B.fQ7,B.fXh,D.br)
d.aO(B.fRJ,B.fWV,D.aJ)
d.dL(B.fVY,B.fW0,2,D.j7,6)
d.aO(B.fW1,B.fUZ,D.av)
d.aO(B.fYV,B.fZO,D.bI)
d.aO(B.h6f,B.h4F,D.c)
d.x=0
break A}if("gasstation"===e){d.x=$.dP=$.dP+1
for(v=0;v<2;++v){t=B.ayU[v]
for(i=0;i<2;++i){s=B.cDL[i]
d.dL(new A.r(t,0,s),new A.r(t,46,s),2.4,D.bO,6)}}d.aW(B.fRw,B.fSE,D.bx,0.3)
d.aO(B.h6y,B.fSG,F.fu)
for(v=0;v<2;++v){t=E.R8[v]
d.aW(new A.r(t,9,20),B.fX3,D.il,0.3)
d.aO(new A.r(t,15,20.2),B.fUi,D.bx)}d.aW(B.fQz,B.fXf,f,0.2)
d.dL(B.h4m,B.h4n,2.2,D.j7,6)
d.aO(B.h4o,B.fUL,D.av)
d.x=0
break A}if("townsign"===e){d.x=$.dP=$.dP+1
for(v=0;v<2;++v){t=B.dhx[v]
d.dL(new A.r(t,0,0),new A.r(t,316,0),5.5,D.j7,6)}d.aW(B.fQY,B.fUP,E.jH,0.3)
d.aO(B.fR4,B.aUy,F.fu)
d.aO(B.fQv,B.aUy,F.fu)
d.x=0
break A}if("adboard"===e){d.x=$.dP=$.dP+1
for(v=0;v<2;++v){t=B.dhw[v]
d.dL(new A.r(t,0,0),new A.r(t,205,0),4.5,D.j7,6)}d.aW(B.fQg,B.fUH,E.jH,0.3)
d.aO(B.fQB,B.aUs,F.fu)
d.aO(B.aU1,B.aUs,F.fu)
d.x=0
break A}if("cornersign"===e){d.x=$.dP=$.dP+1
for(v=0;v<2;++v){t=B.ayU[v]
d.dL(new A.r(t,0,0),new A.r(t,125,0),3,D.j7,6)}d.aW(B.fQ9,B.fT_,E.jH,0.3)
d.aO(B.fQp,B.fT1,F.fu)
d.x=0
break A}if("firetruck"===e){d.aW(B.aTS,B.fXM,D.bx,0.3)
d.aW(B.fUQ,B.fTR,D.bx,0.3)
d.aW(B.h1p,B.fW5,B.hO,0.6)
d.aO(B.h3q,B.h5g,D.dt)
for(u=0;u<6;++u)d.aO(new A.r(-34+u*11,24,0),B.h0g,D.dt)
d.aO(B.fUR,B.aUM,D.d0)
d.aO(B.h1V,B.fZ9,B.bjS)
for(v=0;v<3;++v){t=B.dhH[v]
d.dL(new A.r(t,6,-19),new A.r(t,6,-22.5),6,D.n5,12)
d.dL(new A.r(t,6,19),new A.r(t,6,22.5),6,D.n5,12)}break A}if("ambulance"===e){d.aW(B.K1,B.fXl,D.c,0.4)
d.aW(B.fUz,B.fU5,D.c,0.4)
d.aW(B.fZr,B.h2A,B.hO,0.6)
d.aO(B.h5S,B.aV5,D.bx)
d.aO(B.h0_,B.aV5,D.bx)
d.aO(B.aVr,B.h_p,D.bx)
d.aO(B.aVr,B.fYR,D.bx)
d.aO(B.fUC,B.aUM,D.aw)
for(v=0;v<2;++v){t=B.a40[v]
d.dL(new A.r(t,6,-19),new A.r(t,6,-22.5),6,D.n5,12)
d.dL(new A.r(t,6,19),new A.r(t,6,22.5),6,D.n5,12)}break A}if("dog"===e||"cat"===e||"cow"===e||"sheep"===e||"chicken"===e||"horse"===e){A.hhr(d,e,f,0)
break A}if("pond"===e){h=C.a([],x.z)
q=new A.fk(h)
q.b=d.b
q.f=d.f
q.r=!0
q.dP(B.f_,B.h3a,28,B.bkY,0.8,22)
D.d.v(d.a,A.fpJ(h,B.fYm,B.f_))
for(v=0;v<3;++v){h=B.d30[v]
d.fn(new A.r(h.a,1.2,h.b),2.6,B.af7,3,6)}break A}if("swing"===e){d.dL(B.h3N,B.fU7,1.6,D.d8,8)
for(v=0;v<2;++v){t=E.a4_[v]
d.dL(new A.r(t,38,0),new A.r(t,0,14),1.4,D.d8,6)
d.dL(new A.r(t,38,0),new A.r(t,0,-14),1.4,D.d8,6)}for(v=0;v<2;++v){t=E.a41[v]
d.dL(new A.r(t,38,0),new A.r(t,15,0),0.3,B.hj,4)}d.aO(B.K1,B.h5Y,f)
break A}if("shed"===e){d.aW(B.K1,B.fVM,f,0.05)
d.aO(B.a9F,B.fVX,B.Xe)
d.aO(B.h31,B.h2R,h)
break A}if("doghouse"===e){d.aW(B.a9H,B.fU6,f,0.05)
d.aO(B.fUs,B.h58,B.Xe)
d.aO(B.h1o,B.h69,B.Lj)
break A}d.aO(B.Aa,B.fSb,f)}},
ce5:function ce5(){},
fIW:function fIW(d,e,f){this.a=d
this.b=e
this.c=f},
fIU:function fIU(d,e,f){this.a=d
this.b=e
this.c=f},
fIT:function fIT(d,e,f){this.a=d
this.b=e
this.c=f},
fIV:function fIV(d){this.a=d},
fs6:function fs6(d){this.a=d},
frT:function frT(){},
fs3:function fs3(){},
fs4:function fs4(d,e,f){this.a=d
this.b=e
this.c=f},
frU:function frU(){},
frV:function frV(){},
frW:function frW(){},
frX:function frX(d){this.a=d},
frZ:function frZ(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fs_:function fs_(d,e,f){this.a=d
this.b=e
this.c=f},
fs0:function fs0(d,e,f){this.a=d
this.b=e
this.c=f},
fs1:function fs1(d,e,f){this.a=d
this.b=e
this.c=f},
fs2:function fs2(d,e,f){this.a=d
this.b=e
this.c=f},
fs5:function fs5(d){this.a=d},
frY:function frY(d){this.a=d},
flj:function flj(d){this.a=d},
flk:function flk(d){this.a=d},
flf:function flf(d){this.a=d},
flg:function flg(d,e){this.a=d
this.b=e},
flh:function flh(d){this.a=d},
fkH:function fkH(){},
fkI:function fkI(){},
fkJ:function fkJ(d){this.a=d},
fkU:function fkU(d){this.a=d},
fl4:function fl4(){},
fli:function fli(d,e){this.a=d
this.b=e},
fl9:function fl9(d){this.a=d},
fla:function fla(d){this.a=d},
flb:function flb(d){this.a=d},
flc:function flc(d){this.a=d},
fld:function fld(d){this.a=d},
fle:function fle(d){this.a=d},
fkK:function fkK(d){this.a=d},
fkL:function fkL(d){this.a=d},
fkM:function fkM(d){this.a=d},
fkN:function fkN(d){this.a=d},
fkO:function fkO(d){this.a=d},
fkP:function fkP(d){this.a=d},
fkQ:function fkQ(){},
fkR:function fkR(){},
fkS:function fkS(){},
fkT:function fkT(){},
fkV:function fkV(d){this.a=d},
fkW:function fkW(d){this.a=d},
fkX:function fkX(d){this.a=d},
fkY:function fkY(d){this.a=d},
fkZ:function fkZ(){},
fl_:function fl_(){},
fl0:function fl0(){},
fl1:function fl1(){},
fl2:function fl2(){},
fl3:function fl3(d,e){this.a=d
this.b=e},
fl5:function fl5(d){this.a=d},
fl6:function fl6(d){this.a=d},
fl7:function fl7(){},
fl8:function fl8(){},
fv2:function fv2(){},
fv3:function fv3(d){this.a=d},
fv4:function fv4(d){this.a=d},
fbD:function fbD(d,e){this.a=d
this.b=e},
fbt:function fbt(d,e,f){this.a=d
this.b=e
this.c=f},
flR:function flR(d,e){this.a=d
this.b=e},
flD:function flD(d){this.a=d},
flE:function flE(){},
flF:function flF(){},
flG:function flG(d){this.a=d},
flJ:function flJ(d){this.a=d},
flK:function flK(){},
flL:function flL(d){this.a=d},
flM:function flM(d){this.a=d},
flN:function flN(d){this.a=d},
flO:function flO(d){this.a=d},
flP:function flP(d){this.a=d},
flQ:function flQ(){},
flH:function flH(d){this.a=d},
flI:function flI(d){this.a=d},
ffr:function ffr(d){this.a=d},
h7X(){var w=x.S
return new A.bSN(C.ey([72],w),C.aY(w),C.aY(w),C.aY(w))},
i2w(d){var w
A:{if(81===d){w="outlet"
break A}if(82===d){w="switch"
break A}if(84===d){w="gfci"
break A}if(86===d||87===d){w="ptrap"
break A}if(85===d){w="faucet"
break A}w=null
break A}return w},
agf(a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=C.a([],x.z),a0=new A.fk(d)
a0.b=70
a0.hl(B.h2o,B.h55,B.bhQ,4)
a0.c=1
a0.b=91
w=new A.fsb(a0)
w.$3(B.fYQ,B.fY6,15)
w.$4$alongX(B.h4E,B.h15,11,!1)
w.$4$alongX(B.fW4,B.fYg,11,!1)
w.$4$alongX(B.h3F,B.fZ7,6,!1)
w.$4$alongX(B.fX2,B.h16,6,!1)
for(v=0;v<=12;++v)a0.aD1(new A.r(-12+v*2,8.4,0),B.h1K,B.Xw,!1,0.05)
a0.c=2
a0.b=92
u=new A.fs8(a0)
u.$2(B.cn9,B.tz)
u.$2(B.deA,B.nV)
u.$2(B.djv,B.nV)
t=new A.fs7(a0)
t.$1(B.cWX)
t.$1(B.d1H)
a0.c=3
a0.b=93
s=new A.fsa(a0)
s.$1(B.cVV)
s.$2$col(B.cUi,B.oI)
s.$2$col(B.cTo,B.oI)
s.$1(B.dbx)
a0.c=4
a0.b=0
a0.d=0.22
a0.hl(B.fYf,B.h0j,B.AP,4)
a0.hl(B.h0f,B.aVc,B.AP,4)
a0.hl(B.fYT,B.aVc,B.AP,4)
a0.hl(B.fZX,B.aVh,B.AP,3)
a0.hl(B.h6l,B.aVh,B.AP,3)
a0.d=1
a0.c=5
a0.e=0.3
a0.b=0
a0.n3(B.h3m,B.fYc,B.bfk,0.1,4)
a0.b=71
a0.aW(B.h2w,B.h1L,B.WO,0.5)
a0.aO(B.h5X,B.fZC,B.EM)
r=[72,73,74,75,76]
for(q=a1.d,p=a1.e,v=0;v<5;++v){o=D.o.F(v,2)
n=D.o.an(v,2)
m=r[v]
l=q.q(0,m)
k=p.q(0,m)
a0.b=m
m=9.55+o*0.5
j=5.7-n*0.5
a0.aW(new A.r(m,j,-7.5),B.fXN,B.Yk,0.3)
if(l)i=0
else i=k?-0.07:0.07
if(l)h=D.ca
else h=k?D.bl:D.bO
a0.aW(new A.r(m+0,j+i,-7.42),B.fZh,h,0.4)}a0.b=90
a0.aW(B.h17,B.fWb,B.bpe,0.1)
a0.aW(B.h4I,B.fYA,B.Y4,0.1)
a0.aW(B.h6Q,B.aVz,B.Y4,0.1)
a0.aW(B.fYt,B.aVz,B.Y4,0.1)
g=new A.fs9(a0)
g.$3(81,B.fXb,a1.x?B.xE:B.XN)
a0.b=81
a0.aO(B.h18,B.aVt,B.EX)
a0.aO(B.h_u,B.aVt,B.EX)
g.$5$h$w(82,B.h60,G.XZ,0.65,0.4)
a0.b=82
a0.aW(B.h2Z,B.fW8,B.aet,0.4)
f=!q.q(0,72)
a0.b=83
a0.dP(B.h2N,B.aUY,0.5,B.bmR,0.4,14)
a0.baI(B.h5r,0.3,f?Y.XR:B.bhw,0.7)
if(f){a0.b=0
a0.d=0.22
a0.fT(B.aUL,1.5,B.X6,4,10,0)
a0.d=1}a0.b=94
a0.aW(B.h5e,B.aVD,B.jn,0.1)
a0.aW(B.h1l,B.aVD,B.jn,0.1)
a0.aW(B.h5Z,B.fYZ,B.jn,0.1)
a0.n3(B.h0B,B.h5u,B.LC,0.5,2)
a0.aW(B.h2r,B.h6M,B.EV,0.7)
a0.b=85
a0.jd(A.GQ(B.d5k,0.2,6),0.055,B.jE,!1,0.9,8)
a0.b=84
a0.aW(B.h5E,B.h3e,B.XN,0.3)
a0.aO(B.h_4,B.h5W,a1.y?B.af6:B.ah9)
a0.b=86
a0.jd(A.GQ(B.cXp,0.35,3),0.11,B.pK,!1,0.3,8)
a0.b=87
a0.dP(B.h_V,B.h2C,0.19,a1.c?B.WU:B.bkE,0.3,8)
a0.b=88
a0.aW(B.fVr,B.fXV,B.AU,0.7)
a0.Bv(B.h2n,B.aVu,0.72,B.AU,0.55,0.7,16)
a0.dP(B.aVu,B.h0M,0.78,B.bmm,0.7,16)
a0.b=89
a0.dP(B.h4O,B.aUO,0.85,B.bau,0.6,18)
a0.dP(B.aUO,B.h0h,0.5,B.baw,0.5,12)
a0.aO(B.h1u,B.h6D,B.bky)
a0.b=95
for(p=a1.f,m=a1.r,v=0;v<3;++v){e=B.cDp[v]
if(m.q(0,v)){j=e.a
i=e.b
a0.aO(new A.r(j,i,-7.82),B.h2O,B.AP)
a0.aO(new A.r(j,i,-7.79),B.h0m,B.bdO)}else if(p.q(0,v)){j=e.a
i=e.b
a0.aO(new A.r(j,i,-7.82),B.fTz,B.age)
a0.aO(new A.r(j,i,-7.8),B.h1j,B.bpu)}}if(a1.w){a0.b=96
a0.dP(B.h0s,B.h_M,0.1,D.d8,0.7,8)}a0.e=0
a0.c=6
a0.b=0
a0.d=0.4
a0.bhI(B.aUF,B.aVs,B.a9P,B.a9N,B.adS,B.h12,!0)
a0.bhI(B.aVn,B.aVx,B.a9N,B.a9P,B.adS,B.h2U,!0)
a0.biS(B.aUF,B.aVx,B.a9N,B.ae5)
a0.biS(B.aVs,B.aVn,B.a9P,B.ae5)
a0.d=1
p=q.q(0,72)?"This breaker has TRIPPED (it is in the middle, orange). The living room has no power. Tap it to flip it off and on again.":"This breaker is ON. The living room has power."
q=q.q(0,72)?"The light is off because the living room breaker has tripped.":"The ceiling light is on."
m=a1.b
j=m&&!a1.c?"Water is dripping from the slip nut here. Pick the wrench, then tap the nut to tighten it.":"The P-trap holds a water seal that blocks sewer gas. Tap Open lesson to build one."
m=m&&!a1.c?"This slip nut is loose and the trap is dripping. Pick the wrench and tap here to tighten it.":"The slip nut is tight."
return new A.tG(d,C.G([70,B.e8a,91,B.e7B,92,B.e7U,93,B.e81,71,B.e8f,72,new A.cW("Living room breaker",p,B.h6s,3.5),73,B.e7M,74,B.e83,75,B.e7r,76,B.e7X,81,B.e7Z,82,B.e7i,83,new A.cW("Ceiling light",q,B.aUY,7),84,B.e84,85,B.e7t,86,new A.cW("P-trap under the sink",j,B.h2l,4.5),87,new A.cW("Slip nut (leaking?)",m,B.aV0,3.5),88,B.e7f,89,B.e82,90,B.e86,94,B.e7L,95,B.e88,96,B.e7k],x.S,x.q),B.zb,B.wp,null,0)},
hn0(d,e){var w,v,u,t,s,r,q,p=C.a([],x.z),o=new A.fk(p)
o.c=5
o.e=0.8
if(d.w)for(w=e*1.5,v=0;v<6;++v){u=D.k.F(w+v/6,1)
o.fT(new A.r(3.4+Math.sin(v*2)*0.12,3.3-u*u*2.8,-7.7),0.05,D.Li,3,6,0.9)}if(d.as){u=D.k.F(e*1.1,1)
o.fT(new A.r(3,3.9-u*u*0.7,-6.95),0.05,B.X3,3,6,0.9)}if(d.Q)for(w=e*1.6,v=0;v<6;++v){u=D.k.F(w+v/6,1)
o.fT(new A.r(8.2+Math.sin(v*1.7)*0.15,2.2-u*1.5,-7.2),0.05,B.X3,3,6,0.9)}if(d.at){o.d=0.55
o.aW(B.fYq,B.h_1,B.bmD,0.8)
o.d=1}if(d.x)for(w=e*2,t=e*6,v=0;v<8;++v){u=D.k.F(w+v*0.13,1)
s=v*2.4+t
r=Math.cos(s)
s=Math.sin(s)
q=C.ar(F.M3,E.Ye,1-u)
q.toString
o.fT(new A.r(-3.2+r*u*0.7,1.3+s*u*0.7,-7.6+u*0.3),0.05,q,3,5,0)}if(d.z&&!d.d.q(0,72)){o.b=0
o.d=D.k.E((Math.sin(e*17)+Math.sin(e*29)+2)/4*0.5,0,0.6)
o.fT(B.aUL,1.5,B.X6,4,10,0)
o.d=1}if(d.b&&!d.c){for(w=e*1.3,v=0;v<5;++v){u=D.k.F(w+v*0.2,1)
o.fT(new A.r(3.05,1.45-u*u*1.4,-6.95),0.05,B.Y7,3,6,0.9)}o.d=0.5
o.aW(B.fY5,new A.r(0.7+0.3*Math.sin(e),0.02,0.5),B.Y7,0.9)
o.d=1}return p},
bSN:function bSN(d,e,f,g){var _=this
_.a=5
_.b=!0
_.c=!1
_.d=d
_.e=e
_.f=f
_.r=g
_.at=_.as=_.Q=_.z=_.y=_.x=_.w=!1},
fsb:function fsb(d){this.a=d},
fs8:function fs8(d){this.a=d},
fs7:function fs7(d){this.a=d},
fsa:function fsa(d){this.a=d},
fs9:function fs9(d){this.a=d},
fT(d,e,f,g){var w
try{I.dX(d,"",e,0,f,g)}catch(w){}},
yA(){A.fT(880,80,0.25,"tri")
C.bN(V.ai_,new A.ft6(),x.H)},
hF5(){return new A.Nq(null)},
XI(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w){return new A.b6w(t,d,u,s,f,r,q,j,g,h,m,n,i,k,v,w,l,o,p,e,null)},
wK(d,e,f,g,h){var w=null,v=g?e.j(0.25):D.w.j(0.5),u=C.m(18),t=C.I(g?e:D.aZ,D.r,1),s=x.p,r=C.a([],s)
D.d.v(r,C.a([C.X(f,g?e:D.ae,w,w,w,16),D.ej],s))
r.push(C.d(d,w,w,w,w,w,w,C.l(w,w,g?e:D.ae,w,w,w,w,w,w,w,w,12,w,w,D.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w))
return C.aB(w,C.p(w,C.B(r,D.m,w,D.e,D.P,0,w,w),D.f,w,w,new C.o(v,w,t,u,w,w,D.n),w,w,w,w,D.hb,w,w,w),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,h,w,w,w,w,w,w,!1,D.a4)},
u3(d,e,f,g){var w=null,v=f==null,u=v?D.dr:g.j(0.9),t=C.m(14),s=C.X(e,v?D.bX:D.w,w,w,w,18)
return C.E(C.aB(w,C.p(w,C.B(C.a([s,D.bn,new C.dr(1,D.cn,C.d(d,w,w,w,w,w,w,C.l(w,w,v?D.bX:D.w,w,w,w,w,w,w,w,w,12.5,w,w,D.u,w,w,!0,w,w,w,w,w,w,w,w),D.L,w,w),w)],x.p),D.m,w,D.b7,D.j,0,w,w),D.f,w,w,new C.o(u,w,w,t,w,w,D.n),w,w,w,w,D.tT,w,w,w),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,!1,D.a4),1)},
fJZ(d,e,f,g){return C.bT(E.lp,null,new A.fK0(e,g,f),d,!0,!0,!0,D.jW,!1,!1,x.H)},
TE(d,e,f,g,h,i,j){return new A.aWC(i,d,g,f,e,h,j,null)},
ft6:function ft6(){},
ps:function ps(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
Nq:function Nq(d){this.a=d},
bjd:function bjd(){this.c=this.a=null},
dOh:function dOh(d){this.a=d},
dOi:function dOi(d){this.a=d},
dOj:function dOj(d){this.a=d},
dOk:function dOk(d){this.a=d},
dOo:function dOo(d){this.a=d},
dOp:function dOp(d){this.a=d},
dOq:function dOq(d){this.a=d},
dOr:function dOr(d){this.a=d},
dOs:function dOs(d){this.a=d},
dOt:function dOt(d){this.a=d},
dOu:function dOu(d){this.a=d},
dOv:function dOv(d){this.a=d},
dOl:function dOl(d,e){this.a=d
this.b=e},
dOm:function dOm(d){this.a=d},
dOn:function dOn(d){this.a=d},
avJ:function avJ(d,e){this.c=d
this.a=e},
brZ:function brZ(){this.c=this.a=this.d=null},
f_U:function f_U(d){this.a=d},
f_T:function f_T(){},
b6w:function b6w(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0){var _=this
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
ctE:function ctE(){},
ctF:function ctF(){},
fK0:function fK0(d,e,f){this.a=d
this.b=e
this.c=f},
fK_:function fK_(){},
aWC:function aWC(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
bUS:function bUS(d){this.a=d},
DF:function DF(d,e,f){this.c=d
this.d=e
this.a=f},
azH:function azH(d){var _=this
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
d6L:function d6L(d,e){this.a=d
this.b=e},
d6J:function d6J(d,e,f){this.a=d
this.b=e
this.c=f},
d6K:function d6K(d){this.a=d},
d6I:function d6I(d){this.a=d},
d6w:function d6w(d){this.a=d},
d6x:function d6x(d){this.a=d},
d6v:function d6v(d){this.a=d},
d6y:function d6y(d){this.a=d},
d6z:function d6z(d){this.a=d},
d6A:function d6A(d){this.a=d},
d6B:function d6B(d){this.a=d},
d6C:function d6C(d,e,f){this.a=d
this.b=e
this.c=f},
d6D:function d6D(d){this.a=d},
d6E:function d6E(d,e){this.a=d
this.b=e},
d6F:function d6F(d,e){this.a=d
this.b=e},
d6G:function d6G(d,e){this.a=d
this.b=e},
d6H:function d6H(d){this.a=d},
d6M:function d6M(d,e){this.a=d
this.b=e},
d6N:function d6N(d){this.a=d},
d6W:function d6W(){},
d74:function d74(d,e,f){this.a=d
this.b=e
this.c=f},
d7b:function d7b(d){this.a=d},
d6T:function d6T(){},
d6X:function d6X(d){this.a=d},
d6Y:function d6Y(d){this.a=d},
d75:function d75(d){this.a=d},
d76:function d76(d){this.a=d},
d6V:function d6V(d){this.a=d},
d77:function d77(d){this.a=d},
d6U:function d6U(d){this.a=d},
d78:function d78(d){this.a=d},
d79:function d79(d){this.a=d},
d7a:function d7a(d){this.a=d},
d7c:function d7c(d){this.a=d},
d6Z:function d6Z(d,e){this.a=d
this.b=e},
d6S:function d6S(d,e){this.a=d
this.b=e},
d7_:function d7_(d,e){this.a=d
this.b=e},
d70:function d70(d){this.a=d},
d6R:function d6R(d){this.a=d},
d71:function d71(d){this.a=d},
d6Q:function d6Q(d){this.a=d},
d72:function d72(d){this.a=d},
d6P:function d6P(d){this.a=d},
d73:function d73(d){this.a=d},
d6O:function d6O(d){this.a=d},
a9e:function a9e(d,e){this.c=d
this.a=e},
aFw:function aFw(){var _=this
_.f=_.e=_.d=$
_.r=""
_.w=0
_.x=null
_.y=!1
_.c=_.a=_.z=null},
eQk:function eQk(d,e,f){this.a=d
this.b=e
this.c=f},
eQl:function eQl(d){this.a=d},
eQj:function eQj(d){this.a=d},
eQd:function eQd(d){this.a=d},
eQe:function eQe(d,e){this.a=d
this.b=e},
eQf:function eQf(d,e){this.a=d
this.b=e},
eQg:function eQg(d,e){this.a=d
this.b=e},
eQh:function eQh(d){this.a=d},
eQi:function eQi(d,e){this.a=d
this.b=e},
eQp:function eQp(){},
eQt:function eQt(d,e){this.a=d
this.b=e},
eQq:function eQq(d){this.a=d},
eQr:function eQr(d,e){this.a=d
this.b=e},
eQo:function eQo(d,e){this.a=d
this.b=e},
eQs:function eQs(d){this.a=d},
eQn:function eQn(d){this.a=d},
eQm:function eQm(){},
a4E:function a4E(d,e){this.c=d
this.a=e},
azX:function azX(){var _=this
_.f=_.e=_.d=$
_.r=""
_.w=0
_.x=null
_.y=!1
_.c=_.a=_.z=null},
d9N:function d9N(d,e,f){this.a=d
this.b=e
this.c=f},
d9O:function d9O(d){this.a=d},
d9M:function d9M(d){this.a=d},
d9F:function d9F(d){this.a=d},
d9I:function d9I(d){this.a=d},
d9J:function d9J(d,e){this.a=d
this.b=e},
d9K:function d9K(d,e){this.a=d
this.b=e},
d9H:function d9H(d){this.a=d},
d9L:function d9L(d,e){this.a=d
this.b=e},
d9G:function d9G(d){this.a=d},
d9S:function d9S(){},
d9Y:function d9Y(d,e){this.a=d
this.b=e},
d9T:function d9T(d){this.a=d},
d9U:function d9U(d){this.a=d},
d9R:function d9R(d){this.a=d},
d9W:function d9W(d,e){this.a=d
this.b=e},
d9Q:function d9Q(d,e){this.a=d
this.b=e},
d9V:function d9V(d){this.a=d},
d9X:function d9X(d){this.a=d},
d9P:function d9P(d){this.a=d},
aAP:function aAP(d){this.a=d},
aAQ:function aAQ(d){var _=this
_.d=d
_.f=_.e=$
_.r=0
_.w=""
_.x=null
_.y=!1
_.c=_.a=_.z=null},
dgS:function dgS(d,e,f){this.a=d
this.b=e
this.c=f},
dgT:function dgT(d){this.a=d},
dgR:function dgR(d){this.a=d},
dgM:function dgM(d){this.a=d},
dgO:function dgO(d,e){this.a=d
this.b=e},
dgP:function dgP(d,e){this.a=d
this.b=e},
dgQ:function dgQ(d,e){this.a=d
this.b=e},
dgN:function dgN(d){this.a=d},
dh0:function dh0(d,e){this.a=d
this.b=e},
dgW:function dgW(d,e){this.a=d
this.b=e},
dgY:function dgY(d){this.a=d},
dgX:function dgX(d){this.a=d},
dgZ:function dgZ(d){this.a=d},
dgV:function dgV(d){this.a=d},
dh_:function dh_(d){this.a=d},
dgU:function dgU(d,e){this.a=d
this.b=e},
afj:function afj(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bvB:function bvB(){var _=this
_.d=null
_.e=!1
_.c=_.a=null},
fbb:function fbb(d){this.a=d},
fb9:function fb9(d){this.a=d},
fba:function fba(d){this.a=d},
fb8:function fb8(d){this.a=d},
fbd:function fbd(d){this.a=d},
fbe:function fbe(d){this.a=d},
fbc:function fbc(d){this.a=d},
jF:function jF(d,e){this.a=d
this.b=e},
MO:function MO(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a6I:function a6I(d){this.a=d},
c9p:function c9p(d){this.a=d},
fXo(){var w=x.N
return new A.cke(C.aY(w),C.G(["n1",!1,"n2",!1],w,x.R),C.U(x.S,w))},
idg(d,e,f){var w,v
if(!f.c.q(0,e)){w=f.d
return e==="hot"?"The red (hot) hose goes on the LEFT side only. "+w:"The blue (cold) hose goes on the RIGHT side only. "+w}w=d.e
v=f.a
if(w.h(0,v)!=null)return"That connection already has a hose."
w.n(0,v,e)
return null},
fJj(){var w,v,u=C.a([B.aUB,B.h_G],x.o)
for(w=1;w<=12;++w){v=3.141592653589793+3.141592653589793*w/12
u.push(new A.r(3+3*Math.cos(v),0.2+3*Math.sin(v),0))}D.d.v(u,A.GQ(B.d6D,1,6))
return u},
bAT(d){var w,v,u,t,s="trap",r=C.a([],x.z),q=new A.fk(r)
q.b=49
q.n3(B.fTs,B.fVe,B.jn,0.1,2)
q.n3(B.h6j,B.fTw,B.jn,0.1,2)
q.b=47
q.hl(B.h11,B.fVf,B.vt,3)
q.hl(B.fUr,B.fTx,B.vt,3)
q.b=46
q.n3(B.fWi,B.h1R,B.LC,0.5,3)
q.bcH(B.h3k,B.K1,6.5,B.EV,!0,0.7,20)
q.dP(B.h2f,B.h_k,1.5,B.jE,0.85,14)
q.b=48
q.SW(B.a9R,B.fYN,0.92,B.pK,!1,!0,0.3,14)
q.cVZ(B.a9R,B.h5A,1,0.72,B.pK,0.3)
w=new A.fsN(d,q)
w.$5(41,B.a3l,B.jE,0.85,"tail")
w.$5(42,A.fJj(),B.pK,0.3,s)
w.$5(43,B.a4f,B.pK,0.3,"arm")
w=new A.fsM(d,q)
v=d.a
w.$6(44,"n1",B.a9M,B.e8,B.fZ5,v.q(0,"tail")&&v.q(0,s))
w.$6(45,"n2",B.a9O,B.hu,B.h3d,v.q(0,s)&&v.q(0,"arm"))
if(v.q(0,s)){q.b=0
q.d=0.55
q.e=0.4
u=A.fJj()
w=C.S(u).k("Z<1>")
t=C.C(new C.Z(u,new A.fsL(),w),w.k("J.E"))
if(t.length>1)q.aIE(t,0.4092,B.Yi,!1,!0,0.6,8)
q.d=1
q.e=0}return new A.tG(r,C.G([41,B.e7v,42,B.e7x,43,B.e80,44,B.e7P,45,B.e8c,46,B.e7D,47,B.e7J,48,B.e7d,49,B.e7z],x.S,x.q),B.zb,B.wp,null,0)},
ibc(d,e){var w,v,u,t,s,r,q,p=C.a([],x.z),o=new A.fk(p),n=d.d
if(n.length!==0){w=n==="n1"?B.h6G:B.h4Z
for(n=e*1.4,v=w.a+0,u=w.b,t=w.c+0,s=0;s<5;++s){r=D.k.F(n+s*0.2,1)
o.fT(new A.r(v,u+(-r*6*r-r*1.5),t),0.22*(1-r*0.3),B.Y7,3,6,0.9)}}else if(d.c){n=x.Q
v=C.C(B.a3l,n)
u=A.fJj()
D.d.v(v,C.d1(u,1,null,C.S(u).c))
D.d.v(v,C.d1(B.a4f,1,null,n))
for(n=e*0.45,s=0;s<18;++s){r=D.k.F(n+s/18,1)
q=D.o.E(D.k.bm(r*(v.length-1)),0,v.length-2)
u=v.length
o.fT(A.o_(v[q],v[q+1],r*(u-1)-q),0.38,B.boC,3,6,0.9)}for(n=e*2.2,s=0;s<6;++s)o.fT(new A.r(0,14-D.k.F(n+s/6,1)*5.4,0),0.3,B.X3,3,6,0.9)}return p},
ags(d){switch(d){case 61:return B.fTr
case 62:return B.h4W
case 63:return B.h09
default:return B.h00}},
h1d(d){var w=d==="hot",v=A.ags(w?61:62),u=A.ags(w?63:64),t=w?-1:1
return A.ahG(C.a([v,v.aa(0,new A.r(t*0.6,2.2,1.2)),A.o_(v,u,0.5).aa(0,new A.r(t*1.4,0,2.6)),u.aa(0,new A.r(-t*0.2,-2,1)),u],x.o),6)},
aOI(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=C.a([],x.z),e=new A.fk(f)
e.b=67
e.hl(B.fTo,B.fUS,B.vt,3)
e.b=66
e.n3(B.h_E,B.h5z,B.LC,0.5,3)
e.SW(B.aUp,B.h6i,7.6,B.Y8,!1,!0,0.7,28)
e.dP(B.aUp,B.h2B,7.6,B.aeS,0.5,28)
e.dP(B.fV2,B.fZP,1.2,B.jE,0.9,14)
e.aW(B.h21,B.aUe,B.jn,0.1)
e.aW(B.h5R,B.aUe,B.jn,0.1)
e.b=65
e.dP(B.h5f,B.aVm,3.4,B.jE,0.9,20)
e.jd(A.GQ(B.dc4,1.4,6),0.5,B.jE,!0,0.9,12)
for(w=0;w<2;++w){v=B.d7n[w]
u=v*1.2
e.dP(new A.r(u,15.5,-3.6),new A.r(u,17.7,-3.6),0.38,B.jE,0.9,10)
t=v<0?B.tz:B.nV
e.dP(new A.r(u,17.7,-3.6),new A.r(u,18.6,-3.6),0.6,t,0.6,12)}for(u=[B.euZ,B.eqd],w=0;w<2;++w){t=u[w]
v=t.b
e.b=t.a
e.dP(new A.r(v,15.3,-3.6),new A.r(v,11.4,-3.6),0.45,B.jE,0.9,10)
e.dP(new A.r(v,11.4,-3.6),new A.r(v,10.7,-3.6),0.3,B.bke,0.6,8)
e.zg(new A.r(v,11.3,-3.6),new A.r(v,11.9,-3.6),0.78,0.48,B.bml,0.7,8)}for(u=[B.eND,B.ePp],w=0;w<2;++w){t=u[w]
v=t.b
e.b=t.a
e.dP(new A.r(v,-1.5,-6),new A.r(v,-1.5,-3.6),0.4,B.L9,0.7,12)
e.dP(new A.r(v,-1.5,-4.4),new A.r(v,0.7,-4.4),1,B.jE,0.9,14)
e.dP(new A.r(v,0.7,-4.4),new A.r(v,1.5,-3.6),0.45,B.jE,0.9,10)
e.dP(new A.r(v,-0.2,-4.4),new A.r(v,-0.2,-3.1),0.2,B.adv,0.7,8)
e.dP(new A.r(v,-0.2,-3.1),new A.r(v,-0.2,-2.4000000000000004),1.45,t.c,0.5,14)
e.zg(new A.r(v,1.2,-3.6),new A.r(v,1.9,-3.6),0.78,0.4,B.xs,0.8,8)}for(u=x.o,w=0;w<2;++w){s=B.deF[w]
t=s==="hot"
r=t?B.cEl:B.cEy
q=C.S(r).k("Z<1>")
p=C.C(new C.Z(r,new A.frS(d,s),q),q.k("J.E"))
e.b=t?68:69
o=t?B.tz:B.nV
t=p.length
if(t===2){n=A.h1d(s)
e.jd(n,0.34,B.LU,!1,0.7,8)
m=n.length/2|0
e.jd(C.a([n[m-1],n[m],n[m+1]],u),0.4,o,!1,0.4,8)
for(t=r.length,l=0;l<t;++l){k=A.ags(r[l])
q=k.a+0
j=k.b
i=k.c+0
e.zg(new A.r(q,j+-0.2,i),new A.r(q,j+0.6,i),0.62,0.3,B.xs,0.8,8)}}else if(t===1){k=A.ags(D.d.gI(p))
h=D.d.gI(p)===D.d.gI(r)?1:-1
t=k.a+0
q=k.b
j=k.c
e.jd(C.a([k,new A.r(t,q+h*1.4,j+1),new A.r(t,q+h*3,j+2.4)],u),0.34,B.LU,!1,0.7,8)
j+=0
e.zg(new A.r(t,q+-0.2,j),new A.r(t,q+0.6,j),0.62,0.3,B.xs,0.8,8)}}if(d.r){e.b=0
e.d=0.5
for(u=d.e,w=0;w<4;++w){g=B.a49[w]
t=g.a
if(u.h(0,t)!=null)continue
t=A.ags(t)
q=g.c.q(0,"hot")?B.tz:B.nV
e.fT(new A.r(t.a+0,t.b+0,t.c+0.9),0.65,q,4,8,0.1)}e.d=1}return new A.tG(f,C.G([61,B.e7m,62,B.e7o,63,B.e7h,64,B.e7p,65,B.e7K,66,B.e7G,67,B.e7e,68,B.e8g,69,B.e7N],x.S,x.q),B.zb,B.wp,null,0)},
i23(d,e){var w,v,u,t,s,r,q,p,o,n=C.a([],x.z),m=new A.fk(n)
if(!d.f)return n
w=d.e
v=w.h(0,61)==="hot"&&w.h(0,63)==="hot"
u=w.h(0,62)==="cold"&&w.h(0,64)==="cold"
t=new A.fut(e,m)
if(v){s=A.h1d("hot")
for(r=e*0.5,q=0;q<10;++q){p=D.k.F(r+q/10,1)
o=D.o.E(D.k.bm(p*(s.length-1)),0,s.length-2)
m.fT(A.o_(s[o],s[o+1],p*(s.length-1)-o),0.2,D.Li,3,6,0.9)}}else if(w.h(0,61)==null)t.$2(61,D.Li)
if(u){s=A.h1d("cold")
for(w=e*0.5,q=0;q<10;++q){p=D.k.F(w+q/10,1)
o=D.o.E(D.k.bm(p*(s.length-1)),0,s.length-2)
m.fT(A.o_(s[o],s[o+1],p*(s.length-1)-o),0.2,B.XB,3,6,0.9)}}else if(w.h(0,62)==null)t.$2(62,B.XB)
if(v&&u)for(w=e*2,q=0;q<8;++q){p=D.k.F(w+q/8,1)
r=C.ar(B.boI,B.XB,0.5)
r.toString
m.fT(new A.r(0,21-p*6.5,1.6),0.26,r,3,6,0.9)}return n},
fur(d){return D.d.d8(B.a49,new A.fus(d))},
cke:function cke(d,e,f){var _=this
_.a=d
_.b=e
_.c=!1
_.d=""
_.e=f
_.r=_.f=!1},
EW:function EW(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fsN:function fsN(d,e){this.a=d
this.b=e},
fsM:function fsM(d,e){this.a=d
this.b=e},
fsL:function fsL(){},
frS:function frS(d,e){this.a=d
this.b=e},
fut:function fut(d,e){this.a=d
this.b=e},
fus:function fus(d){this.a=d},
fXn(d,e,f){var w=x.N
w=new A.ck4(e,d,C.aY(w),C.U(w,x.S),C.aY(w))
w.byi(d,e,f)
return w},
hmk(c0,c1,c2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5=C.a([],x.z),b6=new A.fk(b5),b7=C.U(x.S,x.q),b8=C.a([],x.E),b9=c0.c
b9===$&&C.c()
w=b9.a==="bathroom"
v=w?28:0
b6.b=9199
b6.hl(B.h48,B.h6e,B.bdo,4)
b6.hl(B.h1Q,B.h4T,B.X2,4)
b6.hl(new A.r(v+19.8+0.6,24,16),B.h_j,B.vt,2)
b7.n(0,9199,B.e7y)
b6.b=9198
b6.aW(new A.r(v,0.6,10),B.h5d,B.jn,0.1)
b6.aW(new A.r(v,29.4,18.6),B.h_0,B.jn,0.1)
b6.aW(new A.r(v-19.4,13.6,10.5),B.h6_,B.jn,0.1)
for(u=[B.eSp,B.eSl,B.eRi,B.eRf],t=0;t<4;++t){s=u[t].a
b6.aW(new A.r(v+s[0],33,s[1]),new A.r(s[2],2.4,s[3]),B.bpD,0.6)}b6.SW(new A.r(v,27,8),new A.r(v,34.3,8),10.5,B.Y8,!1,!0,0.7,24)
b6.dP(new A.r(v,27,8),new A.r(v,27.2,8),10.5,B.aeS,0.5,24)
if(w){b6.aW(new A.r(v,46,0.6),B.h_7,D.bO,0.3)
b6.aW(new A.r(v,46,1.1),B.fZ8,B.hO,0.9)}b6.dL(new A.r(v,27.1,8),new A.r(v,27.3,8),1.4,B.hj,12)
b6.SW(new A.r(v+15,23.6,8),new A.r(v+19.4,23.6,8),0.92,B.pK,!1,!0,0.3,12)
b7.n(0,9198,B.e7Y)
b6.b=9400
b6.dP(new A.r(-56,18,0),new A.r(-56,18,6),1.5,B.xs,0.8,12)
u=c0.r?B.nV:D.bl
b6.dP(new A.r(-57,18,6),new A.r(-55,18,6.5),4,u,0.5,14)
b6.dP(new A.r(-56,16,0),new A.r(-56,20,0),1,B.L9,0.7,10)
u=c0.r?"The water is ON. Turn it OFF with your hand before you cut into any pipe, and turn it ON to test your work.":"The water is OFF. Turn it ON to test your work."
b7.n(0,9400,new A.cW("Main water valve",u,new A.r(-56,18,4),22))
u=c0.r
s=u?"MAIN WATER: ON":"MAIN WATER: OFF"
u=u?D.dI:D.bl
b8.push(new A.hd(new A.r(-56,24,6),s,u,0))
r=new A.fsK(b6)
u=v-8
r.$1(u)
s=v+8
r.$1(s)
if(w)r.$1(-40)
q=new A.r(v,21,8)
p=new A.fsI(q)
o=new A.fsC(b6,c0)
n=new A.fsD(b6,c0)
m=new A.fsJ(c0,b7,c2,c1,b8)
l=b9.c
for(k=l.length,j=c0.x,i=c0.e,h=c0.f,g=x.o,t=0;t<k;++t){f=l[t]
e=f.a
d=i.q(0,e)
if(d){a0=c0.va(0,e)
a1=h.h(0,e)
if(a1==null)a1=0
a2=a0.r-a1>0}else a2=!1
a3=D.d.cD(l,f)
a4=9100+a3
j.q(0,e)
switch(e){case"flange":a5=new A.r(-30,0.3,14)
if(d){b6.b=a4
b6.dP(a5,new A.r(-30,0.8999999999999999,14),5.5,B.pK,0.4,18)
b6.zg(new A.r(-30,0.8,14),new A.r(-30,1.2,14),5.5,3.2,B.xs,0.8,18)}else n.$3(e,new A.r(-30,0.8,14),B.fSs)
m.$3(f,a5,"Flange spot")
break
case"wax":a5=new A.r(-30,1.2,14)
if(d){b6.b=a4
b6.zg(a5,new A.r(-30,2.3,14),4.2,2.4,B.bpG,0.2,18)}else n.$3(e,new A.r(-30,1.7,14),B.h22)
m.$3(f,a5,"Wax ring spot")
break
case"toilet":if(d){b6.b=a4
b6.Bv(new A.r(-30,0.5,14),new A.r(-30,16,14),8.5,B.AU,6,0.8,20)
b6.dP(new A.r(-30,16,14),new A.r(-30,17,14),9.5,B.M0,0.8,20)
b6.aW(new A.r(-30,22,4.5),B.aUh,B.AU,0.8)
b6.aW(new A.r(-30,29.2,4.5),B.fYk,B.M0,0.8)}else{b6.b=a4
b6.d=0.32
b6.dL(new A.r(-30,0.5,14),new A.r(-30,17,14),8.5,D.b1,16)
b6.aO(new A.r(-30,22,4.5),B.aUh,D.b1)
b6.d=1}m.$3(f,new A.r(-30,12,12),"Toilet spot")
break
case"bolts":if(d){for(e=9200+a3*2,a6=0;a6<2;++a6){a7=B.ayY[a6]
b6.b=e+(a7<0?0:1)
a0=-30+a7
b6.dP(new A.r(a0,0.5,17),new A.r(a0,3.6,17),0.45,B.EV,0.8,8)
a1=a2?D.cY:B.EV
b6.dP(new A.r(a0,3.4,17),new A.r(a0,4.6,17),1.2,a1,0.8,6)}e=a2?"The nuts are loose. Tighten them with the wrench, a little at a time so the porcelain does not crack.":"The toilet is bolted down."
b7.n(0,a4,new A.cW(f.c,e,new A.r(-30,3,17),20))}else for(a6=0;a6<2;++a6){a7=B.ayY[a6]
b6.b=a4
b6.d=0.4
e=-30+a7
b6.dL(new A.r(e,0.5,17),new A.r(e,4.6,17),1.2,D.b1,8)
b6.d=1}m.$3(f,new A.r(-30,3,17),"Bolts")
break
case"tvalve":A.h0C(b6,a4,new A.r(-40,8,1.6),d,B.nV,new A.fsy(n,f,-30))
m.$3(f,new A.r(-40,8,2),"Valve")
break
case"those":if(d){b6.b=a4
b6.jd(A.ahG(C.a([new A.r(-40,10,1.6),new A.r(-42,14,3.5),new A.r(-36,17,3.6),new A.r(-32,21,2.5)],g),6),0.55,B.LU,!1,0.7,8)
b6.jd(C.a([new A.r(-36.8,15.5,3.6),new A.r(-35,16.4,3.6)],g),0.62,B.nV,!1,0.4,8)
if(a2)b6.dL(new A.r(-40,10,1.6),new A.r(-40,11.2,1.6),0.9,D.cY,8)}else o.$3$r(e,A.ahG(C.a([new A.r(-40,10,1.6),new A.r(-42,14,3.5),new A.r(-36,17,3.6),new A.r(-32,21,2.5)],g),6),0.9)
m.$3(f,new A.r(-36,15,3),"Toilet hose")
break
case"faucet":if(d){b6.b=a4
b6.dP(new A.r(v,34.2,8),new A.r(v,34.6,8),3.6,B.jE,0.9,20)
b6.jd(A.GQ(C.a([new A.r(v,34.6,8),new A.r(v,40,8),new A.r(v,43,10),new A.r(v,43,14),new A.r(v,41.2,14.6)],g),1.4,6),0.5,B.jE,!0,0.9,10)
for(a6=0;a6<2;++a6){a7=E.a41[a6]
e=v+a7
b6.dP(new A.r(e,34.6,8),new A.r(e,36.6,8),0.5,B.jE,0.9,8)
a0=a7<0?B.tz:B.nV
b6.dP(new A.r(e,36.6,8),new A.r(e,37.6,8),0.8,a0,0.6,10)}for(a6=0;a6<2;++a6){e=v+B.dhI[a6]
b6.dP(new A.r(e,34,8),new A.r(e,28.4,8),0.45,B.jE,0.9,8)}}else n.$3(e,new A.r(v,38,9),B.fSi)
m.$3(f,new A.r(v,38,8),"Faucet spot")
break
case"vhot":A.h0C(b6,a4,new A.r(u,8,1.6),d,B.tz,new A.fsz(n,f,v))
m.$3(f,new A.r(u,8,2),"Hot valve")
break
case"vcold":A.h0C(b6,a4,new A.r(s,8,1.6),d,B.nV,new A.fsA(n,f,v))
m.$3(f,new A.r(s,8,2),"Cold valve")
break
case"hhot":case"hcold":a8=e==="hhot"
a9=a8?-1:1
a0=v+a9*3
b0=A.ahG(C.a([new A.r(v+a9*8,10.5,1.8),new A.r(v+a9*9,16,3.5),new A.r(v+a9*6,22,4.2),new A.r(a0,27.5,6),new A.r(a0,28.6,8)],g),6)
if(d){b6.b=a4
b6.jd(b0,0.5,B.LU,!1,0.7,8)
b1=b0.length/2|0
e=C.a([b0[b1-1],b0[b1],b0[b1+1]],g)
b6.jd(e,0.58,a8?B.tz:B.nV,!1,0.4,8)
if(a2){e=D.d.gI(b0)
a0=D.d.gI(b0)
b6.dL(e,new A.r(a0.a+0,a0.b+1.4,a0.c+0),0.9,D.cY,8)
a0=D.d.gal(b0)
b6.dL(new A.r(a0.a,a0.b-1.4,a0.c),D.d.gal(b0),0.9,D.cY,8)}}else o.$3$r(e,b0,0.9)
e=b0[b0.length/2|0]
m.$3(f,e,a8?"Hot hose":"Cold hose")
break
case"tail":case"trap":case"arm":a0=e==="tail"
if(a0)a1=B.a3l
else a1=e==="trap"?A.fJj():B.a4f
b2=p.$1(a1)
if(d){b6.b=a4
a1=a0?B.jE:B.pK
b6.a6C(b2,0.66,a1,!1,!0,!0,a0?0.85:0.3,12)}else o.$3$r(e,b2,0.78)
a1=J.a4(b2)
a1=a1.h(b2,a1.gL(b2)/2|0)
if(a0)e="Tailpiece"
else e=e==="trap"?"P-trap":"Trap arm"
m.$3(f,a1,e)
break}}b3=new A.fsG(l,c0,b6,b7)
b3.$4("trap",q.aa(0,B.a9M),B.e8,0)
b3.$4("arm",q.aa(0,B.a9O),B.hu,1)
for(u=C.em(j,j.r,C.a6(j).c),s=u.$ti.c;u.C();){k=u.d
if(k==null)k=s.a(k)
b4=D.d.h_(b9.c,new A.fsB(k))
k=A.hqp(c0,k)
b8.push(new A.hd(new A.r(k.a+0,k.b+6,k.c+4),"\ud83d\udca7 LEAK: "+b4.c,D.bx,0))}return new A.tG(b5,b7,b8,B.wp,null,0)},
h0C(d,e,f,g,h,i){if(!g){i.$0()
return}d.b=e
d.dP(f.aa(0,B.h24),f.aa(0,B.aVk),0.9,B.xs,0.8,12)
d.dP(f.aa(0,B.aVk),f.aa(0,B.fZT),0.45,B.xs,0.8,10)
d.dP(f.aa(0,B.h59),f.aa(0,B.aVE),0.3,B.adv,0.7,8)
d.dP(f.aa(0,B.aVE),f.aa(0,B.h5F),1.2,h,0.5,12)},
hqp(d,e){var w,v=d.c
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
ib4(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=C.a([],x.z),f=new A.fk(g),e=d.x
if(e.a===0)return g
for(e=C.em(e,e.r,C.a6(e).c),w=a0*2,v=e.$ti.c,u=d.e;e.C();){t=e.d
if(t==null)t=v.a(t)
s=A.hqp(d,t)
r=d.c
r===$&&C.c()
q=D.d.h_(r.c,new A.fJ8(t)).b==="valve"||!u.q(0,t)
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
f.fT(new A.r(t+m*l*n,r+(l*k-l*l*j),p+(1.5+l*i)),h,B.Yi,3,6,0.5);++o}f.d=0.55
f.dP(new A.r(t,0.3,11),new A.r(t,0.5,11),7+2*Math.sin(w),B.Yi,0.6,18)
f.d=1}return g},
nq:function nq(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
WP:function WP(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ck4:function ck4(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.d=_.c=$
_.e=f
_.f=g
_.r=!0
_.w=0
_.x=h
_.y=!1},
ck8:function ck8(d){this.a=d},
ck9:function ck9(d){this.a=d},
ck5:function ck5(d){this.a=d},
cka:function cka(d){this.a=d},
ckb:function ckb(d){this.a=d},
ckc:function ckc(){},
ckd:function ckd(){},
ck6:function ck6(d){this.a=d},
ck7:function ck7(d){this.a=d},
fsK:function fsK(d){this.a=d},
fsI:function fsI(d){this.a=d},
fsC:function fsC(d,e){this.a=d
this.b=e},
fsF:function fsF(d){this.a=d},
fsD:function fsD(d,e){this.a=d
this.b=e},
fsE:function fsE(d){this.a=d},
fsJ:function fsJ(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fsy:function fsy(d,e,f){this.a=d
this.b=e
this.c=f},
fsz:function fsz(d,e,f){this.a=d
this.b=e
this.c=f},
fsA:function fsA(d,e,f){this.a=d
this.b=e
this.c=f},
fsG:function fsG(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fsH:function fsH(d){this.a=d},
fsB:function fsB(d){this.a=d},
fJ8:function fJ8(d){this.a=d},
VR:function VR(d,e){this.d=d
this.a=e},
aEe:function aEe(d,e){var _=this
_.e=_.d=$
_.f=d
_.r=$
_.w=e
_.x=""
_.y=0
_.z=null
_.as=_.Q=!1
_.c=_.a=_.at=null},
ekj:function ekj(d,e,f){this.a=d
this.b=e
this.c=f},
ekk:function ekk(d){this.a=d},
eki:function eki(d){this.a=d},
ekc:function ekc(d){this.a=d},
eko:function eko(d){this.a=d},
ek1:function ek1(d,e){this.a=d
this.b=e},
ek2:function ek2(d,e){this.a=d
this.b=e},
ek3:function ek3(d){this.a=d},
ek8:function ek8(d){this.a=d},
ek6:function ek6(d){this.a=d},
ek7:function ek7(d,e){this.a=d
this.b=e},
ekh:function ekh(d){this.a=d},
ekp:function ekp(d){this.a=d},
ek9:function ek9(d){this.a=d},
eka:function eka(){},
ekb:function ekb(d){this.a=d},
ekl:function ekl(d,e){this.a=d
this.b=e},
ekm:function ekm(d){this.a=d},
ekn:function ekn(d,e){this.a=d
this.b=e},
ek5:function ek5(d,e,f){this.a=d
this.b=e
this.c=f},
ek4:function ek4(d,e,f){this.a=d
this.b=e
this.c=f},
ekq:function ekq(d){this.a=d},
eku:function eku(d,e){this.a=d
this.b=e},
eks:function eks(){},
ekr:function ekr(d){this.a=d},
ekt:function ekt(d,e){this.a=d
this.b=e},
ekg:function ekg(d){this.a=d},
eke:function eke(d,e){this.a=d
this.b=e},
ekd:function ekd(d,e){this.a=d
this.b=e},
ekf:function ekf(d,e){this.a=d
this.b=e},
jQ(d){return D.d.h_(B.ur,new A.fRt(d))},
cp_(d,e,f,g,h){var w=x.S,v=x.N
v=new A.Xi(g,f,C.U(w,v),C.aY(w),C.aY(w),C.U(w,x.cH),C.a([new A.Xu(),new A.Xu()],x.gD),C.U(w,x.cD),C.aY(w),C.U(w,v),C.aY(w),C.a([],x.s),C.U(w,v))
v.cjy(d,e,h)
return v},
cp0(d){var w
A:{if("tv"===d){w="The TV"
break A}if("lamp"===d){w="The lamp"
break A}if("toaster"===d){w="The toaster"
break A}w="The hair dryer"
break A}return w},
fXP(d,e){var w=!0
if(d!==e)if(!(D.d.q(B.lA,d)&&D.d.q(B.lA,e)))if(!(D.d.q(B.jP,d)&&D.d.q(B.jP,e)))if(d==="light"||d==="fan")w=e==="light"||e==="fan"
else w=!1
return w},
yX:function yX(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fRt:function fRt(d){this.a=d},
os:function os(d,e,f){this.a=d
this.b=e
this.c=f},
Xu:function Xu(){var _=this
_.a=!1
_.b=0
_.c=!0
_.d=!1},
avh:function avh(d,e){var _=this
_.a=!1
_.b=d
_.c=e
_.e=_.d=!1},
aTC:function aTC(d,e){this.a=d
this.b=e
this.c=!1},
ex:function ex(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Xi:function Xi(d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
cp4:function cp4(){},
cpb:function cpb(d){this.a=d},
cpc:function cpc(d){this.a=d},
cpd:function cpd(d,e){this.a=d
this.b=e},
cpe:function cpe(d,e){this.a=d
this.b=e},
cpg:function cpg(d){this.a=d},
cpf:function cpf(d,e){this.a=d
this.b=e},
cp3:function cp3(d){this.a=d},
cp1:function cp1(){},
cp2:function cp2(d){this.a=d},
cp9:function cp9(){},
cpa:function cpa(){},
cp5:function cp5(){},
cp6:function cp6(d){this.a=d},
cp7:function cp7(d){this.a=d},
cph:function cph(d){this.a=d},
cp8:function cp8(d){this.a=d},
cfR(d,e,f){return new A.O0(!1,e,f,!1,null)},
iV:function iV(d,e,f){this.a=d
this.b=e
this.c=f},
O0:function O0(d,e,f,g,h){var _=this
_.c=d
_.e=e
_.f=f
_.r=g
_.a=h},
aEl:function aEl(d,e,f){var _=this
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
eoY:function eoY(d,e,f){this.a=d
this.b=e
this.c=f},
eoZ:function eoZ(d){this.a=d},
eoX:function eoX(d){this.a=d},
eo_:function eo_(d){this.a=d},
eo0:function eo0(d){this.a=d},
enZ:function enZ(d){this.a=d},
eo1:function eo1(d){this.a=d},
eo2:function eo2(d){this.a=d},
enY:function enY(d){this.a=d},
eo3:function eo3(d){this.a=d},
eo4:function eo4(d){this.a=d},
eoe:function eoe(d){this.a=d},
eog:function eog(d){this.a=d},
eo5:function eo5(){},
eo6:function eo6(d){this.a=d},
eo7:function eo7(d){this.a=d},
eox:function eox(d,e){this.a=d
this.b=e},
eof:function eof(d){this.a=d},
eoU:function eoU(d){this.a=d},
eoV:function eoV(d){this.a=d},
eoW:function eoW(d,e){this.a=d
this.b=e},
eoS:function eoS(d){this.a=d},
eoT:function eoT(d,e){this.a=d
this.b=e},
eoR:function eoR(d){this.a=d},
eoJ:function eoJ(d){this.a=d},
eoK:function eoK(d){this.a=d},
eoL:function eoL(d){this.a=d},
eoM:function eoM(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eoN:function eoN(d){this.a=d},
eoO:function eoO(d,e,f){this.a=d
this.b=e
this.c=f},
eoP:function eoP(d){this.a=d},
eoQ:function eoQ(d,e,f){this.a=d
this.b=e
this.c=f},
ep_:function ep_(d,e){this.a=d
this.b=e},
eod:function eod(d){this.a=d},
eob:function eob(d){this.a=d},
eoc:function eoc(d,e){this.a=d
this.b=e},
eoa:function eoa(d){this.a=d},
eo8:function eo8(d){this.a=d},
eo9:function eo9(d,e){this.a=d
this.b=e},
eoh:function eoh(d,e){this.a=d
this.b=e},
eov:function eov(){},
eow:function eow(){},
eoi:function eoi(d){this.a=d},
eoj:function eoj(d){this.a=d},
eok:function eok(d){this.a=d},
eon:function eon(){},
eoo:function eoo(){},
eop:function eop(){},
eoq:function eoq(){},
eor:function eor(){},
eos:function eos(d){this.a=d},
eot:function eot(){},
eou:function eou(d){this.a=d},
eol:function eol(d){this.a=d},
eom:function eom(){},
epi:function epi(d,e){this.a=d
this.b=e},
epk:function epk(d){this.a=d},
ep4:function ep4(d){this.a=d},
epj:function epj(d){this.a=d},
ep7:function ep7(d){this.a=d},
ep8:function ep8(d,e){this.a=d
this.b=e},
ep6:function ep6(d,e){this.a=d
this.b=e},
ep9:function ep9(d,e){this.a=d
this.b=e},
ep5:function ep5(d,e){this.a=d
this.b=e},
epl:function epl(d,e){this.a=d
this.b=e},
ep3:function ep3(d,e){this.a=d
this.b=e},
epm:function epm(d){this.a=d},
ep2:function ep2(d){this.a=d},
epn:function epn(d,e){this.a=d
this.b=e},
ep1:function ep1(d,e){this.a=d
this.b=e},
epo:function epo(d){this.a=d},
epp:function epp(d){this.a=d},
epq:function epq(d,e,f){this.a=d
this.b=e
this.c=f},
ep0:function ep0(d,e,f){this.a=d
this.b=e
this.c=f},
epa:function epa(d){this.a=d},
epb:function epb(d,e){this.a=d
this.b=e},
epc:function epc(d){this.a=d},
epd:function epd(d){this.a=d},
epe:function epe(d){this.a=d},
epf:function epf(d){this.a=d},
epg:function epg(d){this.a=d},
eph:function eph(d,e){this.a=d
this.b=e},
eoI:function eoI(d,e){this.a=d
this.b=e},
eoH:function eoH(d,e){this.a=d
this.b=e},
eoB:function eoB(d,e){this.a=d
this.b=e},
eoz:function eoz(){},
eoA:function eoA(){},
eoC:function eoC(d,e){this.a=d
this.b=e},
eoy:function eoy(){},
eoD:function eoD(d){this.a=d},
eoE:function eoE(d,e,f){this.a=d
this.b=e
this.c=f},
eoF:function eoF(d,e){this.a=d
this.b=e},
eoG:function eoG(d,e){this.a=d
this.b=e},
ahF(d,e){var w=d.d,v=e.a,u=e.c,t=e.b,s=w.a,r=w.b
w=w.c
return d.c?new A.r(s+v,r-u,w+t):new A.r(s+v,r+t,w+u)},
h_S(d,e,f,g){var w,v,u,t,s,r=d.a,q=e.d,p=e.c?A.o8(r,1.5707963267948966,0,q):A.o8(r,0,0,q)
r=C.a([],x.z)
for(q=p.length,w=0;w<p.length;p.length===q||(0,C.M)(p),++w){v=p[w]
u=v.d
u=u===0?0:f.$1(u)
t=v.f
s=t<0.99?3:2
r.push(new A.lN(v.a,v.b,v.c,u,v.e,t,v.r,v.w,v.x,s,g))}q=C.U(x.S,x.q)
for(u=d.b,u=u.gdR(u),u=u.gaf(u);u.C();){t=u.gT(u)
s=f.$1(t.a)
t=t.b
q.n(0,s,new A.cW(t.a,t.b,A.ahF(e,t.c),t.d))}return new C.z(r,q)},
hWN(a3,a4,a5,a6,a7,a8,a9,b0,b1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=x.i,a2=C.ey([a4,a5],a1)
for(w=b1.length,v=0;v<b1.length;b1.length===w||(0,C.M)(b1),++v){u=b1[v].a
a2.M(0,D.k.E(u[0],a4,a5))
a2.M(0,D.k.E(u[1],a4,a5))}t=C.C(a2,a2.$ti.k("cp.E"))
D.d.fc(t)
for(w=C.S(b1).k("Z<1>"),u=w.k("J.E"),s=0;r=s+1,r<t.length;s=r){q=t[s]
p=t[r]
o=p-q
if(o<0.01)continue
n=(q+p)/2
m=C.C(new C.Z(b1,new A.fll(n),w),u)
l=C.ey([a6,a7],a1)
for(k=m.length,v=0;v<m.length;m.length===k||(0,C.M)(m),++v){j=m[v].a
l.M(0,D.k.E(j[2],a6,a7))
l.M(0,D.k.E(j[3],a6,a7))}i=C.C(l,l.$ti.k("cp.E"))
D.d.fc(i)
for(k=!(o>30),h=0;g=h+1,g<i.length;h=g){f=i[h]
e=i[g]
j=e-f
if(j<0.01)continue
d=(f+e)/2
if(D.d.b3(m,new A.flm(d)))continue
a0=!k||j>60?2:1
a3.hl(new A.r(n,d,a8),new A.r(o,j,a9),b0,a0)}}},
wJ(d1,d2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1=null,c2=x.z,c3=C.a([],c2),c4=new A.fk(c3),c5=C.a([],x.a),c6=x.E,c7=C.a([],c6),c8=x.S,c9=C.U(c8,x.q),d0=$.dP=$.dP+1
c4.f=-1
c4.b=8001
c4.n3(B.fXt,B.h_J,B.B9,0.15,4)
c4.f=0
c4.hl(B.fWZ,B.aUP,B.adr,3)
c4.aW(B.h4q,B.h5O,B.hO,0.5)
c4.aO(B.aUV,B.fWI,B.AY)
c4.aO(B.aUV,B.h62,B.AY)
c4.hl(B.h_O,B.aUP,B.adr,3)
c4.aW(B.fWR,B.h_P,B.vp,0.15)
c4.aW(B.h0u,B.h_W,B.EC,0.8)
c4.b=0
c4.f=3
c4.d=d1.gwx()?0.42:0.1
c4.hl(B.fV3,B.h1X,d1.gwx()?B.kw:B.b9A,3)
c4.d=1
c4.f=2
c4.b=8001
if(!d1.gwx())for(w=0;w<10;++w)c4.aD1(new A.r(-72+w*16,51.3,55),B.h2x,B.jn,!1,0.05)
else{c4.x=d0
c4.aW(B.h0Z,B.fZj,D.c,0.2)
c4.aW(B.h6S,B.aV6,D.c,0.2)
c4.aW(B.fYp,B.aV6,D.c,0.2)}if(d1.gwx()){c4.x=d0
c4.aW(B.fYy,B.fZp,B.kw,0.2)}c4.x=0
c4.b=8001
c4.r=!0
c4.hl(B.h5C,B.h6k,B.af9,2)
c4.aW(B.h4A,B.fWr,B.Xy,0.1)
c4.aW(B.h4z,B.fWs,B.Ln,0.1)
c4.aW(B.h47,B.aUG,B.Ln,0.1)
c4.aW(B.fUg,B.aUG,B.Ln,0.1)
c4.r=!1
c9.n(0,8001,B.e7g)
c4.x=d0
c4.b=8002
c4.n3(B.h6B,B.aUK,B.jn,0.05,3)
c4.n3(B.fVx,B.aUK,B.jn,0.05,3)
c9.n(0,8002,B.e7I)
for(v=d1.y,w=0;u=$.GY(),w<u.length;++w){t=1000+w
c4.b=t
c4.cGe(new A.r(u[w],0,-2.25),B.h2e,B.jn,!1,0.05,2)
s=v.q(0,w)?"This one has a hole for the cable.":"Tap it with the drill to put a hole through it."
c9.n(0,t,new A.cW("Wall stud","A 2x4 stud, one of the vertical posts in the wall. They stand 16 inches apart. "+s,new A.r(u[w],20,-2),60))
if(v.q(0,w)){c4.b=0
c4.e=0.6
c4.aO(new A.r(u[w],40,-2.25),B.fWX,B.age)
c4.e=0}}c4.b=8000
c4.aW(B.fUp,B.fSK,B.WO,0.5)
c4.e=0.4
c4.aO(B.h_w,B.h5b,B.EM)
for(r=0;r<6;++r)for(v=19.5-r*3.6,q=0;q<2;++q)c4.aW(new A.r(61.6+q*4.8,v,0.5),B.fPO,B.Yk,0.3)
p=d1.ax&&!d1.ay
v=p?0.6:0
if(d1.ay)u=D.ca
else u=p?D.bx:D.ha
c4.aW(new A.r(64,-2.5+v,0.9),B.fZe,u,0.4)
c4.e=0
if(d1.ay)v="The main breaker has TRIPPED (orange). Tap it to flip it fully OFF, fix the problem, then turn it ON."
else v=d1.ax?"The power is ON. Tap to turn it OFF. Always turn it OFF before you touch any wire.":"The power is OFF. Tap to turn it ON."
c9.n(0,8000,new A.cW("Breaker panel",v,B.fWw,60))
c4.b=8003
for(v=d1.z,u=C.em(v,v.r,C.a6(v).c),t=x.o,s=u.$ti.c;u.C();){o=u.d
n=A.jQ(o==null?s.a(o):o)
o=n.d
m=o.a-0.35
l=C.a([B.h3i,B.h0V,new A.r(m,40,-3.2)],t)
if(n.c)D.d.v(l,C.a([new A.r(m,51.4,-3.2),new A.r(m,51.4,o.c+11)],t))
else l.push(new A.r(m,o.b+11,-3.4))
c4.jd(A.GQ(l,3,6),0.2,B.XE,!1,0.35,6)}c9.n(0,8003,B.e85)
for(u=x.eV,s=d1.Q,k=0;k<3;++k){j=B.oj[k]
i=s.h(0,j)
if(i==null||!i.a)continue
if(i.e)h=B.bn6
else h=i.d?B.boA:B.bnY
o=C.a([],u)
for(m=i.b,l=C.a6(m),g=new C.mi(m,m.r,l.k("mi<1>")),g.c=m.e,l=l.c;g.C();){m=g.d
if(m==null)m=l.a(m)
o.push(new C.cx([A.jQ(m).d.a-1.15,A.jQ(m).d.a+1.15,A.jQ(m).d.b-2,A.jQ(m).d.b+2]))}m=6100+k
c4.b=m
A.hWN(c4,j,j+48,-47,47,-0.25,0.5,h,o)
o=i.e?"Painted and finished.":"A 4 by 8 foot sheet of drywall (gypsum between two layers of paper). It is screwed to the studs."
c9.n(0,m,new A.cW("Drywall sheet",o,new A.r(j+24,0,0),90))
c4.b=0
c4.e=0.3
for(o=i.c,m=C.a6(o),l=new C.mi(o,o.r,m.k("mi<1>")),l.c=o.e,m=m.c;l.C();){o=l.d
if(o==null)o=m.a(o)
f=D.o.an(o,10)
e=D.o.F(o,10)
c4.fT(new A.r($.GY()[f],-40+e*16,0.1),0.34,B.EM,3,5,0.3)}c4.e=0}for(u=d2.a,o=u!=="tape",m=d1.as,l=u!=="mud",g=u==="sand",w=0;w<2;w=a1){d=-24+48*w
a0=s.h(0,B.oj[w])
a0=a0==null?c1:a0.a
a1=w+1
a2=s.h(0,B.oj[a1])
a2=a2==null?c1:a2.a
if(a0!==!0||a2!==!0)continue
a3=m[w]
a0=6200+w
c4.b=a0
if(a3.a&&!a3.d){a2=a3.b
if(a2===0)h=B.bn9
else h=a3.c?B.bj9:B.bem
c4.e=0.5
c4.aO(new A.r(d,0,0.08+0.02*a2),new A.r(2.2+a2*1.4,94,0.12),h)
c4.e=0}else if(!o||!l||g){c4.d=0.45
c4.e=0.6
c4.aO(new A.r(d,0,0.12),B.fZB,D.b1)
c4.e=0
c4.d=1}if(a3.d)a2="Smooth and ready for paint."
else if(!a3.a)a2="The joint between two sheets. It needs tape and three coats of joint compound."
else{a2=a3.b
a4=a2===1?"":"s"
a4="Taped, with "+a2+" coat"+a4+" of mud."
a2=a4}c9.n(0,a0,new A.cW("Seam",a2,new A.r(d,0,0),70))}for(o=d2.b,m=d1.x,l=d1.at,g=x.N,a5=0;a5<7;++a5){n=B.ur[a5]
a0=n.a
a6=m.ai(0,a0)
a7=l.h(0,a0)
a8=o===a0&&a7!=null
if(!a6)continue
a2=n.c
if(a2)a9=n.e==="fan"?"fan":"light"
else{a4=a7==null?c1:a7.a
a9=a4==null?"outlet":a4}if(a8){b0=A.rZ(a7.a)
a0=a7.b
b1=A.h0J(b0,a0,!1)
b2=A.h_S(b1,n,new A.fsO(n),d0)
D.d.v(c3,b2.a)
c9.v(0,b2.b)
if(a0.f&&a0.c===0){a0=C.a([],c6)
for(a2=b1.c,a4=a2.length,b3=0;b3<a2.length;a2.length===a4||(0,C.M)(a2),++b3){b4=a2[b3]
a0.push(new A.hd(A.ahF(n,b4.a),b4.b,b4.c,0))}D.d.v(c7,a0)}}else if(a7!=null&&a7.b.c>=2){a4=a7.a
b5=a7.b
b6=b5.w
b7=C.a([],c2)
b8=new A.fk(b7)
b9=new A.Ck(C.U(c8,g))
b9.c=2
b9.w=b6
if(a4==="light"||a4==="fan")A.hiV(b8,a4,b9)
else{A.hiz(b8,A.h1n(a4),-0.25,b6,!0,!1)
A.hkX(b8,b6)}D.d.v(c3,A.h_S(new A.tG(b7,B.RD,B.zb,B.wp,c1,0),n,new A.fsP(n),d0).a)
if(!a2){c4.f=3
c4.b=3000+a0
c4.e=0.4
c4.d=0.55
a2=n.d
b5=b5.w?D.aw:D.bb
c4.aO(new A.r(a2.a,a2.b,a2.c+0.2),B.fZG,b5)
c4.d=1
c4.f=2
c4.e=0}c9.n(0,3000+a0,new A.cW(A.hSy(a4),A.hSx(d1,a0),A.ahF(n,B.a9B),22))}else{a4=C.a([],c2)
b5=A.h1n(a9)===a9?a9:"outlet"
A.hhU(new A.fk(a4),b5,!1)
D.d.v(c3,A.h_S(new A.tG(a4,B.duQ,B.zb,B.wp,c1,0),n,new A.fsQ(n),d0).a)
a2=a2?"Ceiling box":"Electrical box"
a4=v.q(0,a0)?"The box is mounted and the cable is in. A device can be wired here.":"The box is mounted. Pull the cable to it."
c9.n(0,2000+a0,new A.cW(a2,a4,A.ahF(n,B.a9B),24))}}c4.x=0
c0=new A.fsT(c4)
if(u==="wall"||u==="ceiling"||u==="fanbox")for(a5=0;a5<7;++a5){n=B.ur[a5]
c2=n.a
if(m.ai(0,c2))continue
c6=n.c
c8=n.d
s=c8.a
o=c8.b
a0=c6?new A.r(s,o-1,c8.c):new A.r(s,o,1.5)
a2=c6?B.fX5:B.fZ3
c0.$4$round(2000+c2,a0,a2,c6)
c2=c6?new A.r(s,o-8,c8.c):new A.r(s,o+7,3)
c7.push(new A.hd(c2,n.b,D.f5,0))}else if(u==="cable")for(a5=0;a5<7;++a5){n=B.ur[a5]
c2=n.a
if(!m.ai(0,c2)||v.q(0,c2))continue
c6=n.c
c8=n.d
s=c8.a
o=c8.b
c8=c6?new A.r(s,o-1,c8.c):new A.r(s,o,1.5)
s=c6?B.aUN:B.fXv
c0.$5$col$round(2000+c2,c8,s,D.bI,c6)}else if(u==="knife")for(a5=0;a5<7;++a5){n=B.ur[a5]
if(n.c||!m.ai(0,n.a))continue
c2=n.d
c6=c2.a
i=d1.apt(c6)
if(i==null||i.b.q(0,n.a))continue
c0.$4$col(2000+n.a,new A.r(c6,c2.b,0.5),B.fZb,D.cY)}else if(u==="sheet")for(w=0;w<5;){j=B.a4b[w]
c0.$3(6000+w,new A.r(j,0,0.3),B.h2i);++w
c7.push(new A.hd(new A.r(j,50,1),"edge "+w,D.f5,0))}else if(u==="screw")for(a5=0;a5<3;++a5){j=B.oj[a5]
i=s.h(0,j)
if(i==null||!i.a)continue
for(c2=d1.apN(j),c6=c2.length,c8=i.c,o=j+48,b3=0;b3<c2.length;c2.length===c6||(0,C.M)(c2),++b3){f=c2[b3]
for(a0=f*10,a2=7000+a0,r=0;r<6;++r){if(c8.q(0,a0+r))continue
c0.$3(a2+r,new A.r($.GY()[f],-40+r*16,0.5),B.aUD)}a2=$.GY()
if(f+1<a2.length&&a2[f]+16<=o)for(a0=7500+a0,r=0;r<6;r+=2)c0.$4$col(a0+r,new A.r(a2[f]+8,-40+r*16+8,0.5),B.aUD,D.ds)}}if(!C.ey(["wall","ceiling","fanbox","cable","knife","sheet","screw",""],g).q(0,u))c2=D.d.q(B.HD,u)||C.ey(["outlet","gfci","switch","light","fan"],g).q(0,u)||D.d.q(B.lA,u)||D.d.q(B.jP,u)
else c2=!1
if(c2)for(c2=d1.CW,a5=0;a5<7;++a5){n=B.ur[a5]
if(D.d.q(B.HD,u)){c6=n.a
a7=l.h(0,c6)
if(a7!=null&&D.d.q(B.lA,a7.a)&&a7.b.c>=2&&!c2.ai(0,c6)){c8=n.d
c0.$4$col(3000+c6,new A.r(c8.a,c8.b,1.2),B.fZJ,D.bo)}}else{c6=n.a
if(m.ai(0,c6)&&v.q(0,c6)&&!l.ai(0,c6)){c8=n.c
s=n.d
o=s.a
g=s.b
s=c8?new A.r(o,g-1,s.c):new A.r(o,g,1.2)
o=c8?B.aUN:B.h2c
c0.$4$round(2000+c6,s,o,c8)}}}c4.r=!0
for(c2=d1.CW,c6=new C.cJ(c2,C.a6(c2).k("cJ<1,2>")).gaf(0);c6.C();){j=c6.d
c8=j.a
n=A.jQ(c8)
v=n.d
d=v.a
c4.b=8200+c8
v=v.b
c4.jd(A.GQ(C.a([new A.r(d,v,2.5),new A.r(d,-46,3.5),new A.r(d,-46,22)],t),4,6),0.55,B.XI,!1,0.2,6)
c4.aW(new A.r(d,v,1.8),B.h0r,B.bdB,0.3)
v=c4.b=8100+c8
u=j.b
switch(u){case"tv":c4.aW(new A.r(d,-45,24),B.fVR,B.afz,0.2)
c4.aW(new A.r(d,-19,24),B.fXj,E.F_,0.4)
if(c2.ai(0,c8))c8=d1.ax&&!d1.ay&&d1.a47(c8)
else c8=!1
if(c8){c8=d-38.5
s=d+38.5
c5.push(new A.fJ(C.a([new A.r(c8,1.5,25.7),new A.r(s,1.5,25.7),new A.r(s,-39.5,25.7),new A.r(c8,-39.5,25.7)],t),v,new A.fsR(j),320,180,9,2,0,!1))}break
case"lamp":c4.dP(new A.r(d,-47.5,24),new A.r(d,-46.5,24),6,B.WH,0.4,14)
c4.dP(new A.r(d,-46.5,24),new A.r(d,-22,24),1,B.B9,0.5,8)
c4.yG(new A.r(d,-26,24),new A.r(d,-12,24),9,S.XP,!1,!0,5.5,0.2,16)
break
case"toaster":c4.aW(new A.r(d,-42.5,24),B.fTj,B.jE,0.8)
c4.aO(new A.r(d,-38,24),B.h3h,B.agL)
break
default:c4.aW(new A.r(d,-43.5,24),B.fTY,B.afz,0.2)
c4.Bv(new A.r(d-6,-38,24),new A.r(d+8,-38,24),3.4,B.LR,3,0.6,12)
c4.wg(new A.r(d-8,-43,24),B.fTt,B.LR,0.6,0)}c8=A.hQK(u)
s="Plugged into "+n.b
u=u==="tv"?s+". To unplug it, go behind it (the Behind the TV button) and tap the plug on the wall.":s+". Tap it to unplug."
c9.n(0,v,new A.cW(c8,u,new A.r(d,-35,20),60))}c4.r=!1
for(a5=0;a5<7;++a5){n=B.ur[a5]
c9.c4(0,2000+n.a,new A.fsS(n))}return new A.tG(c3,c9,c7,c5,c1,0)},
hSy(d){var w
A:{if("gfci"===d){w="GFCI outlet"
break A}if("switch"===d){w="Light switch"
break A}if("light"===d){w="Ceiling light"
break A}if("fan"===d){w="Ceiling fan"
break A}if("outlet"===d){w="Outlet"
break A}w=A.ago(d)
break A}return w},
hQK(d){var w
A:{if("tv"===d){w="TV"
break A}if("lamp"===d){w="Lamp"
break A}if("toaster"===d){w="Toaster"
break A}w="Hair dryer"
break A}return w},
hSx(d,e){var w,v=d.at.h(0,e)
if(v==null)return""
if(v.b.w)return"BURNT. It was wired wrong and it burnt out. Pull it out and put in a new one."
w=v.a
if(D.d.q(B.jP,w))return d.ch.q(0,e)?"The switch is ON. Tap to turn it off.":"The switch is OFF. Tap to flip it on."
if(w==="light"||w==="fan")return d.amD(e)?"It is running.":"It is off. Flip its switch (breaker on)."
w=d.CW.h(0,e)
return"Tap with a TV, lamp, toaster or hair dryer in your hand to plug it in. Plugged: "+(w==null?"nothing":w)+"."},
ibl(a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=C.a([],x.z),a0=new A.fk(d)
for(w=D.d.gaf(B.ur),v=new C.f5(w,new A.fJs()),u=a1.at,t=a2*7;v.C();){s=w.gT(0)
r=s.a
q=u.h(0,r)
if(q==null||q.b.c<1)continue
p=a1.amD(r)?t:0.4
a0.b=3000+r
s=s.d
r=s.a
o=s.b-6.6
s=s.c
for(n=0;n<4;++n){m=p+n*3.141592653589793/2
l=A.vp(B.fSH,m)
a0.wg(new A.r(r+l.a,o+l.b,s+l.c),B.h68,B.bch,0.3,m)}}w=a1.d
w===$&&C.c()
w=D.d.gaf(w)
v=new C.f5(w,new A.fJt())
u=a2*5
while(v.C()){s=w.gT(0).a
if(a1.amD(s)){k=A.jQ(s)
a0.b=0
a0.d=0.25+0.05*Math.sin(u)
s=k.d
a0.fT(new A.r(s.a,s.b-5,s.c),11,B.X6,4,10,0)
a0.d=1}}for(w=a1.CW,v=new C.cJ(w,C.a6(w).k("cJ<1,2>")).gaf(0),u=a2*1.6,s=a2*6;v.C();){j=v.d
r=j.a
if(w.ai(0,r))o=a1.ax&&!a1.ay&&a1.a47(r)
else o=!1
if(!o)continue
i=A.jQ(r).d.a
a0.b=8100+r
switch(j.b){case"tv":break
case"lamp":a0.b=0
a0.d=0.3+0.05*Math.sin(s)
a0.fT(new A.r(i,-19,24),11,H.AO,4,10,0)
a0.d=1
break
case"toaster":a0.e=0.8
r=C.ar(B.af6,H.LW,(Math.sin(s)+1)/2)
r.toString
a0.aO(new A.r(i,-38.2,24),new A.r(13,0.3,6),r)
a0.e=0
break
default:for(r=i+9,h=0;h<6;++h)a0.fT(new A.r(r+D.k.F(u+h/6,1)*22,-38+Math.sin(h*2)*2,24),0.6,B.bjw,3,5,0.2)}}for(w=a1.db,w=new C.cJ(w,C.a6(w).k("cJ<1,2>")).gaf(0),v=a1.cx;w.C();){j=w.d
u=j.a
k=A.jQ(u)
g=a3.h(0,u)
f=a2<=(g==null?0:g)
e=v.q(0,u)
if(!f&&!e)continue
u=f?j.b:"smolder"
A.hmK(a0,u,new A.fJu(k),1,a2)}return d},
rE:function rE(d,e,f){this.a=d
this.b=e
this.c=f},
fll:function fll(d){this.a=d},
flm:function flm(d){this.a=d},
fsO:function fsO(d){this.a=d},
fsP:function fsP(d){this.a=d},
fsQ:function fsQ(d){this.a=d},
fsT:function fsT(d){this.a=d},
fsR:function fsR(d){this.a=d},
fsS:function fsS(d){this.a=d},
fJs:function fJs(){},
fJt:function fJt(){},
fJu:function fJu(d){this.a=d},
hex(d,e){var w=new A.csq(e,d,A.h7X())
w.byv(4,d,e)
return w},
rb:function rb(d,e){this.a=d
this.b=e},
um:function um(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
Me:function Me(d,e){this.a=d
this.b=e
this.c=!1},
csq:function csq(d,e,f){var _=this
_.a=d
_.b=e
_.c=$
_.d=f
_.e=3
_.r=_.f=0
_.w=!1},
csv:function csv(d){this.a=d},
csr:function csr(){},
cst:function cst(){},
csu:function csu(){},
css:function css(d){this.a=d},
arl:function arl(d,e){this.d=d
this.a=e},
aEp:function aEp(d,e){var _=this
_.e=_.d=$
_.f=d
_.r=$
_.w=e
_.x="inspect"
_.y=0
_.z=null
_.at=_.as=_.Q=!1
_.c=_.a=_.ax=null},
eqN:function eqN(d,e,f){this.a=d
this.b=e
this.c=f},
eqO:function eqO(d){this.a=d},
eqM:function eqM(d){this.a=d},
eqC:function eqC(d){this.a=d},
eqH:function eqH(d){this.a=d},
eqI:function eqI(d){this.a=d},
eqG:function eqG(d){this.a=d},
eqJ:function eqJ(d,e){this.a=d
this.b=e},
eqK:function eqK(d){this.a=d},
eqL:function eqL(d){this.a=d},
eqF:function eqF(d){this.a=d},
eqE:function eqE(d,e){this.a=d
this.b=e},
eqB:function eqB(d){this.a=d},
eqz:function eqz(d){this.a=d},
eqA:function eqA(d,e){this.a=d
this.b=e},
eqD:function eqD(d){this.a=d},
er_:function er_(d,e){this.a=d
this.b=e},
eqW:function eqW(){},
eqV:function eqV(d){this.a=d},
eqX:function eqX(){},
eqY:function eqY(){},
eqZ:function eqZ(d,e){this.a=d
this.b=e},
eqU:function eqU(d,e){this.a=d
this.b=e},
eqT:function eqT(d){this.a=d},
eqS:function eqS(d){this.a=d},
eqQ:function eqQ(d,e){this.a=d
this.b=e},
eqP:function eqP(){},
eqR:function eqR(d,e){this.a=d
this.b=e},
ata(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){return new A.xS(p,s,u,t,r,h,o,n,m,i,q,d,j,g,k,e,f,l)},
iaO(d){var w,v,u,t,s,r,q,p,o,n,m=d.gev(0),l=C.a([],x.T)
for(w=d.x,v=w.length,u=0;u<w.length;w.length===v||(0,C.M)(w),++u){t=w[u]
s=t.b
if(s==="rug")continue
s=B.hr.h(0,s)
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
case"bathroom":l.push(B.dvU)
l.push(B.dvA)
w=-m/2
l.push(new A.i8(w,w+33,0,75))
break}return l},
bqy(d,e,f,g,h,i,j,k,l,m,n,o){var w=new A.bqx(d,i,m,o,n,l,g,f,k,j,e,h,C.a([],x.n))
w.byL(d,e,f,g,h,i,j,k,l,m,n,o)
return w},
hiC(d,e){var w,v,u,t=d.w,s=D.d.bg(t,new A.feb(e))
if(s<0)s=0
w=t[s]
v=d.gev(0)
u=d.ghm(0)
t=w.c
switch(w.b){case"left":return new C.bj(new C.z(-v/2+18,D.k.E(t+u/2-40,10,u-10)),1.5707963267948966,s)
case"right":return new C.bj(new C.z(v/2-18,D.k.E(t+u/2-40,10,u-10)),-1.5707963267948966,s)
default:return new C.bj(new C.z(D.o.E(t,-v/2+12,v/2-12),18),0,s)}},
xS:function xS(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){var _=this
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
rC:function rC(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a9A:function a9A(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
coZ:function coZ(d,e){var _=this
_.a=d
_.b=e
_.d=_.c=$},
Ar:function Ar(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
bqx:function bqx(d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
feb:function feb(d){this.a=d},
aVf:function aVf(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=$},
bSL:function bSL(d,e){this.a=d
this.b=e},
bSM:function bSM(d){this.a=d},
hqc(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=C.a([B.dvN],x.T)
for(w=d.x,v=w.length,u=0;u<w.length;w.length===v||(0,C.M)(w),++u){t=w[u]
if(t.a===e)continue
s=t.b
if(D.d.q(B.a48,s)||D.d.q(B.Hr,s)||s==="bush")continue
r=s==="townsign"
if(r||s==="adboard"){q=r?178:150
for(s=[-q,q],p=0;p<2;++p){o=s[p]
n=t.e*3.141592653589793/2
r=Math.cos(n)
m=Math.sin(n)
r=t.c+o*r
m=t.d+-o*m
i.push(new A.i8(r-8,r+8,m-8,m+8))}continue}r=B.hr.h(0,s)
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
hfL(d,e,f){var w=new A.b8w(d,-d.gev(0)/2+10,d.gev(0)/2-10,-760,d.ghm(0)-10,e,f,0,B.dcG)
w.Mf(0)
return w},
b8w:function b8w(d,e,f,g,h,i,j,k,l){var _=this
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
ajW:function ajW(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h},
apx:function apx(d){this.a=d},
bd1:function bd1(d){var _=this
_.d=0
_.e=!1
_.f=d
_.c=_.a=_.r=null},
d3l:function d3l(d){this.a=d},
d3m:function d3m(d,e){this.a=d
this.b=e},
d3k:function d3k(d,e){this.a=d
this.b=e},
d3n:function d3n(d){this.a=d},
d3j:function d3j(d){this.a=d},
d3o:function d3o(d){this.a=d},
d3i:function d3i(d){this.a=d},
d3p:function d3p(d,e){this.a=d
this.b=e},
d3h:function d3h(d,e,f){this.a=d
this.b=e
this.c=f},
d3q:function d3q(d,e){this.a=d
this.b=e},
d3r:function d3r(d){this.a=d},
d3g:function d3g(d){this.a=d},
hmK(d,e,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
if(e==="none"||e.length===0)return
d.b=0
w=new A.fuv(a2,d,a0,a1)
v=new A.fuu(d,a2,a0,a1)
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
d.jd(m,t,o,!1,0,4)}d.d=0.16+0.1*Math.sin(a2*31)
d.fT(a0.$1(B.h2a),3.2*a1,D.ds,4,8,0)
d.d=1
break
case"spark":w.$2(22,7)
d.d=0.2+0.1*Math.sin(a2*26)
d.fT(a0.$1(B.aUT),2.4*a1,H.AO,4,8,0)
d.d=1
break
case"smoke":d.d=0.3+0.08*Math.sin(a2*7)
d.fT(a0.$1(B.fWj),2.6*a1,D.aw,4,8,0)
d.d=1
v.$3(9,0.8,11)
w.$2(5,3)
break
case"fire":d.d=0.3+0.12*Math.sin(a2*20)
d.fT(a0.$1(B.aUT),4.4*a1,D.cY,4,8,0)
d.d=1
h=D.k.bm(a2*11)
for(t=0.85*a1,s=0.05*a1,r=0.5*a1,o=0.04*a1,k=0;k<6;++k){p=-2.2+k*0.88
g=Math.sin((h+k*5)*12.9898)*43758.5453
f=2.4+(g-Math.floor(g))*3.6
l=a0.$1(new A.r(p,-2.2,3))
g=Math.sin((h+k)*12.9898)*43758.5453
d.Bv(l,a0.$1(new A.r(p+(g-Math.floor(g)-0.5)*1.2,-2.2+f,3.4)),t,D.ft,s,0,6)
d.Bv(a0.$1(new A.r(p,-2.2,3.1)),a0.$1(new A.r(p,-2.2+f*0.62,3.5)),r,D.bI,o,0,6)}w.$2(16,6)
v.$3(10,1,13)
break
case"smolder":v.$3(4,0.9,9)
break}},
fuv:function fuv(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fuu:function fuu(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fXR(d){var w
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
auK(d){var w
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
hmG(d,e,a0){var w,v,u,t,s=C.a([],x.fB),r=new A.fu_(s),q=new A.fu4(e),p=q.$2(B.UT,B.Jl),o=q.$2(B.UT,B.Jm),n=q.$2(B.UT,B.Jn),m=q.$2(B.UU,B.Jm),l=q.$2(B.UU,B.Jl),k=q.$2(B.UU,B.Jn),j=q.$2(B.UV,B.Jn),i=q.$2(B.UV,B.Jl),h=q.$2(B.UV,B.Jm),g=new C.Z(e,new A.fu0(),C.S(e).k("Z<1>")).gL(0),f=D.d.b3(e,new A.fu1())
if(f)r.$5("UNVERIFIED",B.eWl,"A conductor is in use whose function was never verified. A wire color alone does not prove what a wire does.","Verify every conductor with a tester before you connect it.","Identify each wire with a tester and the device diagram, then connect it.")
if(D.d.b3(e,new A.fu2()))r.$5("LOOSE",B.rN,"A connection is loose. A loose connection heats up and can arc.","Every conductor must be fastened tightly under its screw or connector.","Tighten the connection.")
if(D.d.b3(e,new A.fu3()))r.$5("EXPOSED",B.rN,"Bare copper is showing outside the terminal. An exposed energized conductor can shock or short.","No conductor may be left exposed.","Trim the wire so only the part under the screw is bare.")
if(!a0)r.$5("SUPPORT",B.rN,"The box or support is not rated for this device. It can fall.","A fixture or fan must hang from a box or bracket rated for its weight.","Use a box rated for this fixture (a fan-rated box for a fan).")
if(n>0||i>0)r.$5("HOT_TO_GROUND",B.rN,"The hot wire is connected to the ground. That is a short circuit to ground: a very large current.","The equipment ground never carries current in normal use, and the hot wire never touches it.","Hot goes on the hot terminal (brass). Ground goes only on the green screw.")
f=o>0
if(!(f&&m>0))w=l>0&&p>0
else w=!0
if(w)r.$5("SHORT",B.rN,"The hot and the neutral are connected together. That is a short circuit.","Hot and neutral must never touch each other.","Put each wire on its own terminal.")
else if(f||l>0)r.$5("REVERSED",B.rN,"Hot and neutral are reversed (reversed polarity). The device may still seem to work, but the parts that should be dead are live. This is a shock hazard.","Hot goes to the brass (hot) terminal and neutral to the silver (neutral) terminal.","Swap them: black (hot) to brass, white (neutral) to silver.")
if(k>0||h>0)r.$5("NEUTRAL_GROUND",B.rN,"The neutral and the equipment ground are joined at the device. Current can flow on the ground path and trip protective devices.","The neutral is never used as the equipment ground, and the two are not joined at the device.","Neutral to the silver terminal only. Ground to the green screw only.")
if(!(i>0&&n===0))f=h>0&&k===0
else f=!0
if(f)r.$5("GROUND_AS_CURRENT",B.rN,"The equipment ground was fastened to a terminal that carries current. The ground must never be used as a normal conductor.","The equipment ground goes only to the ground terminal.","Move the bare copper (ground) wire to the green screw.")
if(g>0&&p<d.b)r.$5("LOAD_SIDE",B.aO3,"The wires are on the LOAD screws. Power must come in on LINE; on LOAD the device would not protect or feed anything.","Supply (line) conductors go to the LINE terminals.","Move the wires to the LINE screws.")
f=d.b
if(p<f&&g===0&&o===0&&l===0&&n===0)r.$5("MISSING_HOT",B.Tb,"The hot wire is not on the hot terminal, so the device gets no power.","The device needs its hot connection.","Connect the black (hot) wire to the brass terminal.")
if(p>=f){f=d.c
f=m<f&&f>0&&l===0&&k===0}else f=!1
if(f)r.$5("OPEN_NEUTRAL",B.rN,"The neutral is not connected, but the hot wire is. The device will not run, and parts of it can still be live. There may be nothing to see.","The neutral return conductor must be connected.","Connect the white (neutral) wire to the silver terminal.")
if(d.d&&j===0)r.$5("MISSING_GROUND",B.rN,"There is no equipment ground. It may seem to work, but nothing protects you if a fault happens.","A required equipment ground must be connected to the ground terminal.","Connect the bare copper (ground) wire to the green screw.")
for(f=s.length,v=B.uW,u=0;u<f;++u){t=s[u].b
if(A.auK(t)>A.auK(v))v=t}return new A.b5b(v,s,A.hS5(s,e))},
hS5(d,e){var w=new A.fdJ(d)
if(w.$1("SHORT")||w.$1("HOT_TO_GROUND"))return B.bqT
if(w.$1("LOOSE"))return B.bqL
if(w.$1("EXPOSED"))return B.bqR
if(w.$1("GROUND_AS_CURRENT"))return B.bqV
if(w.$1("REVERSED"))return B.bqU
if(w.$1("NEUTRAL_GROUND"))return B.bqW
if(w.$1("SUPPORT"))return B.bqS
if(w.$1("OPEN_NEUTRAL"))return B.bqQ
if(w.$1("LOAD_SIDE")||w.$1("MISSING_HOT"))return B.bqJ
if(w.$1("UNVERIFIED"))return B.bqK
if(w.$1("MISSING_GROUND"))return B.bqN
return B.bqP},
hM7(d){var w
switch(d.a.c.a){case 0:w=d.b.c===B.Jl
break
case 1:w=d.b.c===B.Jm
break
case 2:w=d.b.c===B.Jn
break
case 3:w=!1
break
default:w=null}return w},
hmH(d,e,f){var w,v,u,t,s=C.a([],x.fB)
e.bQ(0,new A.fu6(f,s))
for(w=s.length,v=B.uW,u=0;u<w;++u){t=s[u].b
if(A.auK(t)>A.auK(v))v=t}return new A.b5b(v,s,v===B.uW?B.bqO:B.bqM)},
Jp:function Jp(d,e){this.a=d
this.b=e},
Fs:function Fs(d,e){this.a=d
this.b=e},
Fz:function Fz(d,e){this.a=d
this.b=e},
cvr:function cvr(d){this.c=d},
cyM:function cyM(d,e){this.a=d
this.c=e},
a3Q:function a3Q(d,e){this.a=d
this.b=e},
bKq:function bKq(d,e,f){this.b=d
this.c=e
this.d=f},
wd:function wd(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
te:function te(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h},
b5b:function b5b(d,e,f){this.a=d
this.b=e
this.c=f},
fu_:function fu_(d){this.a=d},
fu4:function fu4(d){this.a=d},
fu5:function fu5(d,e){this.a=d
this.b=e},
fu0:function fu0(){},
fu1:function fu1(){},
fu2:function fu2(){},
fu3:function fu3(){},
fdJ:function fdJ(d){this.a=d},
fdK:function fdK(d){this.a=d},
aaI:function aaI(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aaJ:function aaJ(d,e,f){this.a=d
this.b=e
this.c=f},
v1:function v1(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
b3U:function b3U(d,e){this.a=d
this.b=e},
b73:function b73(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cvt:function cvt(d,e,f){this.a=d
this.b=e
this.c=f},
cvu:function cvu(){},
cvv:function cvv(){},
cvw:function cvw(){},
Ps:function Ps(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fu6:function fu6(d,e){this.a=d
this.b=e},
h0o(d){var w
switch(d.a){case 0:w=D.bo
break
case 1:w=D.cY
break
case 2:w=D.cs
break
case 3:w=D.bI
break
case 4:w=D.by
break
default:w=null}return w},
h3A(d){return C.bT(E.lp,null,new A.fRq(),d,!0,!0,!0,D.jW,!1,!1,x.H)},
hr2(d,e,f,g){var w=x.S
return C.bT(E.lp,null,new A.fRo(new A.cvt(e,f,C.U(w,w)),g),d,!0,!0,!0,D.jW,!1,!1,x.dZ)},
fRq:function fRq(){},
fRo:function fRo(d,e){this.a=d
this.b=e},
a0K:function a0K(d,e,f){this.c=d
this.d=e
this.a=f},
btf:function btf(d){var _=this
_.d=d
_.c=_.a=_.e=null},
f3S:function f3S(d,e){this.a=d
this.b=e},
f3R:function f3R(d,e,f){this.a=d
this.b=e
this.c=f},
f3T:function f3T(d){this.a=d},
f3Q:function f3Q(d,e){this.a=d
this.b=e},
f3U:function f3U(){},
f3V:function f3V(d){this.a=d},
a4N:function a4N(d,e){var _=this
_.a=d
_.b=e
_.c=!1
_.d=null},
bQn:function bQn(d){this.a=d},
bQm:function bQm(d){this.a=d}},B,I,E,Ah,F,O,S,Ai,A_,M,Aj,A4
J=c[1]
C=c[0]
D=c[2]
A5=c[83]
G=c[93]
A6=c[126]
N=c[115]
H=c[103]
A7=c[112]
A8=c[125]
P=c[113]
A9=c[91]
Aa=c[117]
Ab=c[90]
K=c[88]
Q=c[120]
A0=c[80]
Ac=c[109]
T=c[124]
Ad=c[123]
U=c[118]
A1=c[122]
Ae=c[116]
V=c[110]
W=c[94]
Af=c[101]
X=c[114]
Y=c[111]
A2=c[98]
Z=c[105]
A3=c[119]
Ag=c[121]
L=c[97]
R=c[99]
A=a.updateHolder(c[24],A)
B=c[92]
I=c[26]
E=c[95]
Ah=c[63]
F=c[96]
O=c[30]
S=c[102]
Ai=c[106]
A_=c[108]
M=c[100]
Aj=c[107]
A4=c[104]
A.eTo.prototype={
a3(){return"_RadioType."+this.b}}
A.a9l.prototype={
U(){return new A.adQ(null,this.$ti.k("adQ<1>"))}}
A.adQ.prototype={
gcmh(){var w=this.e
return w===$?this.e=new A.bnN(this):w},
galk(){var w=this.G_$
w=w==null?null:w.gapa()
return w==null?this.a.d:w},
gayP(){this.a.toString
return!0},
bUJ(){var w=this,v=w.a.c,u=w.galk()
if(v===u)return
w.a4I(v===w.galk()?null:v)},
a4I(d){var w=this.G_$
if(w!=null)w.glA().$1(d)
this.a.e.$1(d)},
d2(){var w,v=this
v.eD()
w=v.c
w.toString
v.sa6c(O.fXF(w,v.$ti.c))},
t(){this.sa6c(null)
var w=this.d
if(w!=null)w.t()
this.a2()},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.a
m.toString
switch(0){case 0:w=o.gcmh()
v=w.a.galk()
o.a.toString
u=new C.Hz(!0,O.hKi(n,!1,n,o.gayP(),n,w,v,n,n,D.ki,n,n,n,n,n,!1,m.c,o.$ti.c),n)
break}C.amv(d)
o.a.toString
A:{m=new C.z(u,n)
break A}t=C.P(d)
s=O.fXG(d)
o.a.toString
w=s.b
w=w==null?n:w.aS(C.aY(x.c1))
r=w
if(r==null)r=t.ax.y
w=o.a.at
v=o.gayP()
q=o.gayP()?o.gbUI():n
p=o.d
if(p==null){p=C.jV(!0,n,!0,!0,n,n,!1)
o.d=p}return new C.zm(C.dL(!1,n,!0,n,v,p,n,n,!1,n,m.a,n,n,n,n,q,!1,r,n,n,n,n,n,n,w,n,m.b,n),n)}}
A.bnN.prototype={
gapa(){return this.a.galk()},
glA(){return this.a.gLu()},
bhT(d){},
bj_(d){},
gda(d){return this.a}}
A.aMG.prototype={}
A.r.prototype={
aa(d,e){return new A.r(this.a+e.a,this.b+e.b,this.c+e.c)},
aF(d,e){return new A.r(this.a-e.a,this.b-e.b,this.c-e.c)},
aI(d,e){return new A.r(this.a*e,this.b*e,this.c*e)},
FK(d){var w=this.b,v=d.c,u=this.c,t=d.b,s=d.a,r=this.a
return new A.r(w*v-u*t,u*s-r*v,r*t-w*s)},
guI(){var w=this.a,v=this.b,u=this.c
return Math.sqrt(w*w+v*v+u*u)},
goP(d){var w=this,v=w.guI()
return v<1e-9?w:new A.r(w.a/v,w.b/v,w.c/v)}}
A.lN.prototype={}
A.cW.prototype={}
A.hd.prototype={}
A.tG.prototype={}
A.fJ.prototype={}
A.fk.prototype={
Wc(){var w=this.x
if(!(w!==0))if(this.r){w=$.dP+1
$.dP=w}else w=0
this.w=w},
aHR(d,e,f,g,h,i,j,k){var w=this,v=i.goP(0)
w.a.push(new A.lN(C.a([d,e,f,g],x.o),v,h,w.b,j,w.d,k,w.c,w.e,w.f,w.w))},
bhI(d,e,f,g,h,i,j){return this.aHR(d,e,f,g,h,i,0,j)},
cUz(d,e,f,g,h,i,j){return this.aHR(d,e,f,g,h,i,j,!1)},
Gs(d,e,f,g,h,i){return this.aHR(d,e,f,g,h,i,0,!1)},
a6B(d,e,f,g,h,i){var w=this,v=(h==null?e.aF(0,d).FK(f.aF(0,d)):h).goP(0)
w.a.push(new A.lN(C.a([d,e,f],x.o),v,g,w.b,0,w.d,i,w.c,w.e,w.f,w.w))},
biS(d,e,f,g){return this.a6B(d,e,f,g,null,!0)},
Fy(d,e,f,g,h,i,j){var w,v,u,t,s,r,q,p,o,n,m
this.Wc()
w=e.a/2
v=e.b/2
u=e.c/2
t=new A.bYF(this,i,new A.bYG(j,d),new A.bYH(j),f,h)
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
hl(d,e,f,g){return this.Fy(d,e,f,!0,0,g,0)},
aD1(d,e,f,g,h){return this.Fy(d,e,f,g,h,1,0)},
n3(d,e,f,g,h){return this.Fy(d,e,f,!0,g,h,0)},
aW(d,e,f,g){return this.Fy(d,e,f,!0,g,1,0)},
aO(d,e,f){return this.Fy(d,e,f,!0,0,1,0)},
wg(d,e,f,g,h){return this.Fy(d,e,f,!0,g,1,h)},
cGe(d,e,f,g,h,i){return this.Fy(d,e,f,g,h,i,0)},
aD0(d,e,f,g){return this.Fy(d,e,f,!0,0,1,g)},
yG(b3,b4,b5,b6,b7,b8,b9,c0,c1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this
b2.Wc()
w=b4.aF(0,b3).goP(0)
v=w.b
u=w.FK(Math.abs(v)<0.9?B.e8:B.hu).goP(0)
t=w.FK(u).goP(0)
s=b9<0?b5:b9
r=new A.bYI(u,c1,t)
for(q=b2.a,p=b3.a,o=b3.b,n=b3.c,m=b4.a,l=b4.b,k=b4.c,j=x.o,i=w.a*-1,v*=-1,h=w.c*-1,g=0;g<c1;){f=r.$1(g);++g
e=r.$1(g)
d=f.a
a0=e.a
a1=f.b
a2=e.b
a3=f.c
a4=e.c
a5=new A.r(d+a0,a1+a2,a3+a4).goP(0)
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
q.push(new A.lN(C.a([new A.r(a6,a7,a8),new A.r(a9,b0,b1),new A.r(a0,a2,a4),new A.r(d,a1,a3)],j),a5,b6,b2.b,c0,b2.d,b8,b2.c,b2.e,b2.f,b2.w))
if(b7){q.push(new A.lN(C.a([b3,new A.r(a9,b0,b1),new A.r(a6,a7,a8)],j),new A.r(i,v,h),b6,b2.b,c0,b2.d,!1,b2.c,b2.e,b2.f,b2.w))
q.push(new A.lN(C.a([b4,new A.r(d,a1,a3),new A.r(a0,a2,a4)],j),w,b6,b2.b,c0,b2.d,!1,b2.c,b2.e,b2.f,b2.w))}}},
dP(d,e,f,g,h,i){return this.yG(d,e,f,g,!0,!1,-1,h,i)},
Bv(d,e,f,g,h,i,j){return this.yG(d,e,f,g,!0,!1,h,i,j)},
SW(d,e,f,g,h,i,j,k){return this.yG(d,e,f,g,h,i,-1,j,k)},
bcH(d,e,f,g,h,i,j){return this.yG(d,e,f,g,h,!1,-1,i,j)},
dL(d,e,f,g,h){return this.yG(d,e,f,g,!0,!1,-1,0,h)},
aEf(d,e,f,g,h,i){return this.yG(d,e,f,g,h,!1,-1,0,i)},
KT(d,e,f,g,h,i){return this.yG(d,e,f,g,!0,!1,h,0,i)},
bcG(d,e,f,g,h,i,j){return this.yG(d,e,f,g,h,!1,i,0,j)},
fT(a7,a8,a9,b0,b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6=this
a6.Wc()
w=new A.bYE(b0,b1)
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
v.push(new A.lN(C.a([new A.r(u+i*a8,t+h*a8,s+g*a8),new A.r(u+f*a8,t+e*a8,s+d*a8),new A.r(u+a0*a8,t+a1*a8,s+a2*a8),new A.r(u+a3*a8,t+a4*a8,s+a5*a8)],r),new A.r(i+f+a0+a3,h+e+a1+a4,g+d+a2+a5).goP(0),a9,a6.b,b2,a6.d,!1,a6.c,a6.e,a6.f,a6.w))}},
baI(d,e,f,g){return this.fT(d,e,f,6,10,g)},
fn(d,e,f,g,h){return this.fT(d,e,f,g,h,0.4)},
a6C(d,e,f,g,h,i,j,k){var w,v,u,t,s
this.Wc()
for(w=0;v=w+1,v<d.length;w=v){u=d[v]
t=d[w]
if(new A.r(u.a-t.a,u.b-t.b,u.c-t.c).guI()<0.000001)continue
u=d[w]
t=d[v]
if(g)s=w===0||w===d.length-2
else s=!1
this.SW(u,t,e,f,s,h,j,k)}if(i)for(u=e*0.98,w=1;v=w+1,v<d.length;w=v)this.fT(d[w],u,f,4,k,j)},
jd(d,e,f,g,h,i){return this.a6C(d,e,f,!0,!1,g,h,i)},
aIE(d,e,f,g,h,i,j){return this.a6C(d,e,f,g,!1,h,i,j)},
biU(d,e,f,g,h){return this.a6C(d,e,f,!0,!1,!0,g,h)},
zg(a4,a5,a6,a7,a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=this
a3.Wc()
a3.bcH(a4,a5,a6,a8,!1,a9,b0)
w=a5.aF(0,a4).goP(0)
v=w.FK(Math.abs(w.b)<0.9?B.e8:B.hu).goP(0)
u=new A.bYJ(v,b0,w.FK(v).goP(0))
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
s.push(new A.lN(C.a([new A.r(p+i*a7,m+h*a7,l+j*a7),new A.r(p+f*a6,m+e*a6,l+g*a6),new A.r(p+a0*a6,m+a1*a6,l+d*a6),new A.r(p+a2.a*a7,m+a2.b*a7,l+a2.c*a7)],r),n,a8,a3.b,a9,a3.d,!1,a3.c,a3.e,a3.f,a3.w))}}},
cVZ(d,e,f,g,h,i){return this.zg(d,e,f,g,h,i,16)}}
A.x5.prototype={
qX(d){var w,v,u,t=this
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
x8(d,e){return this.hP(d,null,e,null)},
bmJ(d){return this.hP(d,null,null,null)},
ap6(d){return this.hP(null,null,d,null)},
ap7(d,e,f){return this.hP(d,e,f,null)},
N4(d,e,f,g){var w=this
w.ay=w.ax=w.at=w.as=null
w.d=f
w.c=d
w.a=g
w.b=e
w.aT()},
a6p(d){var w,v,u,t=this
if(!(t.as!=null||t.at!=null||t.ax!=null||t.ay!=null))return
w=1-Math.exp(-d*7)
v=t.as
if(v!=null){u=A.o_(t.d,v,w)
t.d=u
if(u.aF(0,v).guI()<0.02){v=t.as
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
cXd(d,e){var w,v,u,t,s=this,r=e.a,q=e.b,p=Math.min(r,q)*1.15,o=Math.cos(s.a),n=Math.sin(s.a)
q=new A.bHF(s,new A.bHG(Math.cos(s.b),Math.sin(s.b),o,n),(d.a-r/2)/p,-(d.b-q/2)/p)
w=q.$1(0)
r=q.$1(1).c
v=w.c
u=r-v
if(Math.abs(u)<1e-9)return null
t=(0-v)/u
if(t<=0)return null
return q.$1(t)},
be1(d,e,f){var w,v,u,t,s=this,r=e.a,q=e.b,p=Math.min(r,q)*1.15,o=Math.cos(s.a),n=Math.sin(s.a)
q=new A.bHz(s,new A.bHA(Math.cos(s.b),Math.sin(s.b),o,n),(d.a-r/2)/p,-(d.b-q/2)/p)
w=q.$1(0)
r=q.$1(1).b
v=w.b
u=r-v
if(Math.abs(u)<1e-9)return null
t=(f-v)/u
if(t<=0)return null
return q.$1(t)},
cMX(d,e){return this.be1(d,e,0)},
aoI(d){var w=this
w.at=null
w.c=D.k.E(w.c*d,w.e,w.f)
w.aT()}}
A.bSw.prototype={
cTN(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this.a,f=g.length-1,e=a0.a,d=a0.b
for(;;){if(!(f>=0)){w=0
v=null
break}if(g[f].a.gbB().a.contains(e,d)){u=g[f]
w=u.b
u=u.a.gbB().a.getBounds()
v=new C.a5(u[0],u[1],u[2],u[3])
break}--f}if(w!==0&&v.gdF()<16)return w
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
A.b5e.prototype={
gMw(d){var w=this.r.a
return w==null?0:w},
cgi(b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=null,a8=b2.a,a9=b2.b,b0=new C.a5(0,0,0+a8,0+a9)
$.W()
w=C.K()
w.sar(B.c0C.aA(0,b0))
b1.aX(b0,w)
v=this.c.a*90
w=b1.a
J.bq(w.save())
w.translate(a8*0.45-v,a9*0.3)
b1.iZ(0,-0.45)
for(u=x.O,t=0;t<3;++t){s=C.bP(D.J,a9*(0.2-t*0.05),a8*(1.9-t*0.4))
r=[B.bdS,D.aR,D.r0][t]
q=new C.aq(D.W,D.T,D.Y,D.Z,D.X)
q.sar(new C.c0(D.A,0.5,D.x,a7,0,C.a([r.j(0.3-t*0.07),r.j(0)],u),a7,a7).aA(0,s))
p=q.H()
w.drawOval(C.bQ(s),p)
p.delete()}w.restore()
o=new C.en()
o.df(11)
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
f=$.W()
e=C.K()
e.sar(new C.c0(D.A,0.5,D.x,a7,0,C.a([D.aR.j(0.28),B.bkq],u),a7,a7).aA(0,C.bW(i,g)))
b1.ae(i,g,e)
J.bq(w.save())
f=new C.aJ(f.r,D.ak,a7,a7,C.a([],x.g))
f.D(new C.jy(C.bW(i,h)))
b1.mB(0,f)
f=C.K()
f.sar(B.enx.aA(0,C.bW(i,h)))
b1.ae(i,h,f)
d=C.K()
d.r=B.bef.gp(0)
for(a0=0;a0<4;++a0){u=B.cY4[a0].a
a1=u[0]
a2=u[1]
a3=u[2]
a4=u[3]
u=q.a
u=C.bP(new C.t(l+(a1*h+Math.sin((u==null?0:u)*0.05)*h*0.08),j+a2*h),a4*h*2,a3*h*2)
p=d.H()
w.drawOval(C.bQ(u),p)
p.delete()}$.W()
a5=C.K()
a5.r=D.c.j(0.55).gp(0)
for(u=h*0.16,a0=0;a0<3;++a0){q=B.cV8[a0]
q=C.bP(new C.t(l+q.a*h,j+q.b*h),u,q.c*h*2)
p=a5.H()
w.drawOval(C.bQ(q),p)
p.delete()}u=i.aa(0,new C.t(h*0.45,h*0.35))
$.W()
q=C.K()
q.r=D.w.j(0.38).gp(0)
b1.ae(u,h,q)
w.restore()
a6=new C.t(a8*0.18-v*0.2,a9*0.12)
w=C.K()
w.r=B.bfo.gp(0)
b1.ae(a6,h*0.28,w)
w=h*0.05
q=a6.aa(0,new C.t(h*0.08,w))
u=C.K()
u.r=B.aex.gp(0)
b1.ae(q,h*0.07,u)
u=-h
u=a6.aa(0,new C.t(u*0.1,u*0.09))
q=C.K()
q.r=B.aex.gp(0)
b1.ae(u,w,q)},
a6(i9,j0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1,e2,e3,e4,e5,e6,e7,e8,e9,f0,f1,f2,f3,f4,f5,f6,f7,f8,f9,g0,g1,g2,g3,g4,g5,g6,g7,g8,g9,h0,h1,h2,h3,h4,h5,h6,h7,h8,h9,i0,i1,i2,i3,i4,i5,i6=this,i7=null,i8={}
if(i6.z)i6.cgi(i9,j0)
else{w=0+j0.a
v=0+j0.b
$.W()
u=C.K()
t=i6.y
s=C.ar(t,D.c,0.06)
s.toString
u.sar(new C.a9(D.b3,D.b6,D.x,C.a([s,t],x.O),i7,i7).aA(0,new C.a5(0,0,w,v)))
i9.aX(new C.a5(0,0,w,v),u)}r=j0.a
q=j0.b
p=Math.min(r,q)*1.15
o=r/2
n=q/2
w=i6.c
m=Math.cos(w.a)
l=Math.sin(w.a)
k=Math.cos(w.b)
j=new A.cq_(m,l,k,Math.sin(w.b))
i=new A.cq0(i6,j)
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
a0=C.U(u,t)
a1=C.U(u,u)
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
b1=C.U(u,t)
b2=C.U(u,u)
b3=B.h0D.goP(0)
b4=b3.aa(0,B.t4).goP(0)
b5=C.a([],x.bl)
w=i6.w
b6=v.a
if(!(w==null)){s=C.C(b6,x.fX)
D.d.v(s,w.$1(i6.gMw(0)))
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
d6=A.hRP(c9)
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
c8=C.ar(f0,D.b1,0.28+0.14*Math.sin((c8==null?0:c8)*6))
c8.toString
e8+=0.12
f0=c8}c8=255*e9*0.55
f1=D.k.V(D.k.E(f0.gb7(f0)*255*e8+c8,0,255))
f2=D.k.V(D.k.E(f0.gbf()*255*e8+c8,0,255))
f3=D.k.V(D.k.E(f0.gbc(f0)*255*e8+c8,0,255))
c8=$.W()
c9=C.a([],f)
f4=new C.aJ(c8.r,D.ak,i7,i7,c9)
for(f5=0;f5<d6.length;++f5){d9=d6[f5]
c8=d9.c
e6=o+d9.a*p/c8
e7=n-d9.b*p/c8
if(f5===0){c8=new C.b1(e6,e7)
c9.push(c8)
d0=f4.f
if(d0!=null)c8.bA(d0)
c8=f4.e
if(c8!=null)c8.a.delete()
f4.e=null}else{c8=new C.ap(e6,e7)
c9.push(c8)
d0=f4.f
if(d0!=null)c8.bA(d0)
c8=f4.e
if(c8!=null)c8.a.delete()
f4.e=null}}c8=new C.bv()
c9.push(c8)
c9=f4.f
if(c9!=null)c8.bA(c9)
c8=f4.e
if(c8!=null)c8.a.delete()
f4.e=null
c8=a3.f
c9=d6.length
d0=a3.d
d1=d0===s&&a4
b5.push(new A.Ap(a3.y,a3.z,i7,f4,new C.u(c8,(f1&255)/255,(f2&255)/255,(f3&255)/255,D.q),d7/c9-a3.x,d0,c8<0.99,d1))}w=i6.x
f6=v.d
if(w==null)f7=f6
else{s=C.C(f6,x.K)
D.d.v(s,w.$1(i6.gMw(0)))
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
c7=j.$1(new A.r(c6.a-c9,c6.b-d0,c6.c-c8).FK(new A.r(b7.a-c9,b7.b-d0,b7.c-c8)))
if(c7.a*((b9.a+c0.a+c3.a+c4.a)*0.25)+c7.b*((b9.b+c0.b+c3.b+c4.b)*0.25)+c7.c*c5>0&&!g2.x)continue
if(c5>b0)continue
if(D.d.d8(a8,new A.cpT())){b7=C.a([],s)
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
b2.n(0,a8,(b7==null?0:b7)+1)}continue}a8=$.W()
b9=C.a([],f)
f4=new C.aJ(a8.r,D.ak,i7,i7,b9)
a8=C.C(b7,w)
b9.push(new C.Lw(a8,!0))
a8=f4.gbB().a.getBounds()
b9=a8[0]
c0=a8[1]
h0=(a8[2]-b9)*(a8[3]-c0)
f8.push(h0)
b5.push(new A.Ap(g2.r,g2.w,new A.cpU(i8,i6,g1<g0,h0,f9,g2,b7,f4),f4,D.K,c5-g2.f,g2.b,!1,!1))
continue}h1=new A.cpS(a8)
h2=C.a([],a5)
a8=$.W()
b7=C.a([],f)
f4=new C.aJ(a8.r,D.ak,i7,i7,b7)
for(h3=0;h3<6;h3=h4)for(a8=h3/6,h4=h3+1,b9=h4/6,f5=0;f5<8;f5=h5){c0=f5/8
h5=f5+1
c3=h5/8
h6=C.a([h1.$2(c0,a8),h1.$2(c3,a8),h1.$2(c3,b9),h1.$2(c0,b9)],b8)
if(D.d.b3(h6,new A.cpV()))continue
c0=C.a([],s)
for(a2=0;a2<4;++a2){d9=h6[a2]
c3=d9.c
c0.push(new C.t(o+d9.a*p/c3,n-d9.b*p/c3))}h2.push(new C.bj(f5,h3,c0))
c0=C.C(c0,w)
c0=new C.Lw(c0,!0)
b7.push(c0)
c3=f4.f
if(c3!=null)c0.bA(c3)
c0=f4.e
if(c0!=null)c0.a.delete()
f4.e=null}if(h2.length===0)continue
b5.push(new A.Ap(g2.r,g2.w,new A.cpW(i6,g2,h2),f4,D.K,c5-g2.f,g2.b,!1,!1))}D.d.aV(f8,new A.cpX())
f9[0]=f8.length>6?f8[5]:0
h7=C.dO(b1,u,t)
h8=C.dO(b2,u,u)
for(w=b5.length,a2=0;u=b5.length,a2<u;b5.length===w||(0,C.M)(b5),++a2){h9=b5[a2]
u=h9.b
if(u!==0){t=h7.h(0,u)
if(t==null)t=0
h7.n(0,u,t+h9.r)
t=h8.h(0,u)
h8.n(0,u,(t==null?0:t)+1)}}for(f5=0;f5<u;++f5)b5[f5].c=f5
D.d.aV(b5,new A.cpY(new A.cpZ(h7,h8)))
w=i6.d.a
D.d.a8(w)
$.W()
i0=C.K()
i0.b=D.T
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
if(s!==0)w.push(new C.z(a5,s))}if(a4){$.W()
g7=C.K()
g7.b=D.ac
g7.c=1.4
g7.r=D.c.j(0.35+0.25*Math.sin(i6.gMw(0)*6)).gp(0)
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
i5=new C.l3(new C.eS(i4.b,i7,i7,D.d_,i7,i7,i7,i7,i7,i7,new C.F(!0,D.c,i7,i7,i7,i7,11,D.u,i7,i7,i7,i7,i7,i7,i7,i7,i7,i7,i7,i7,i7,i7,i7,i7,i7,i7)),D.a5,D.c8,new C.kK(1),i7,i7,i7,i7,D.c6,i7)
i5.eT()
a5=i5.b
a8=a5.c
a5=a5.a.c
f1=C.bz(C.bP(new C.t(a4,s),a5.gbd(a5)+8,a8+14),D.ie)
a8=$.W()
a5=new C.aq(D.W,D.T,D.Y,D.Z,D.X)
a5.r=i4.c.j(0.92).gp(0)
i3=a5.H()
t.drawRRect(C.eU(f1),i3)
i3.delete()
a5=new C.aq(D.W,D.T,D.Y,D.Z,D.X)
a5.b=D.ac
a5.c=1
a5.r=D.ae.gp(0)
i3=a5.H()
t.drawRRect(C.eU(f1),i3)
i3.delete()
a5=i5.b
b7=a5.c
a5=a5.a.c
i5.a6(i9,new C.t(a4-b7/2,s-a5.gbd(a5)/2))
s=i4.d
if(s!==0){a4=C.a([],f)
a4.push(new C.iN(f1))
w.push(new C.z(new C.aJ(a8.r,D.ak,i7,i7,a4),s))}}},
aw(d){return!0}}
A.czw.prototype={}
A.Ap.prototype={}
A.auP.prototype={
U(){return new A.bql(new A.bSw(C.a([],x.a6)),new C.eI(0,$.aw()),D.bE,D.J,null,null)}}
A.bql.prototype={
a_(){var w,v=this
v.a1()
A.hwZ()
w=v.un(new A.eWS(v))
w.hE(0)
v.d!==$&&C.aP()
v.d=w},
t(){var w=this.d
w===$&&C.c()
w.t()
w=this.f
w.S$=$.aw()
w.P$=0
this.bwZ()},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.a,l=m.as==null,k=l?n:new A.eWM(o)
l=l?n:new A.eWN(o,d)
w=m.c
v=m.d
u=m.e
t=m.r
s=o.f
r=m.w
m=m.x
q=C.a([v,s],x.dS)
p=o.a
q=C.a([C.jz(new C.eG(C.b4(n,n,n,new A.b5e(w,v,o.e,u,t,s,r,m,p.y,p.Q,new C.h9(q)),D.fH),n),D.t,n)],x.p)
o.a.toString
return C.nI(D.jL,C.aB(D.cg,new C.an(D.a_,n,D.b2,D.t,q,n),D.y,!1,n,l,k,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new A.eWO(o),new A.eWP(o),n,n,n,n,n,n,n,new A.eWQ(o),n,n,n,!1,D.a4),n,n,n,n,n,n,new A.eWR(o),n)}}
A.aMP.prototype={
t(){var w=this,v=w.ab$
if(v!=null)v.a5(0,w.gbF())
w.ab$=null
w.a2()},
aY(){this.b6()
this.b5()
this.bG()}}
A.baN.prototype={}
A.bb7.prototype={}
A.bg8.prototype={}
A.dl0.prototype={}
A.Ml.prototype={
Pf(d){return this.cmA(d)},
cmA(e4){var w=0,v=C.j(x.H),u=this,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1,e2,e3
var $async$Pf=C.e(function(e6,e7){if(e6===1)return C.f(e7,v)
for(;;)switch(w){case 0:if(e4.getUint32(0,!0)!==1179937895)throw C.V("not a glb file")
for(n=x.b,m=12,l=null,k=null;m+8<=e4.byteLength;){j=e4.getUint32(m,!0)
i=e4.getUint32(m+4,!0)
h=J.eZ(D.dE.gaQ(e4),e4.byteOffset+m+8,j)
if(i===1313821514)l=n.a(D.S.aN(0,new C.G7(!1).Dx(h,0,null,!0),null))
if(i===5130562)k=h
m+=8+j}if(l==null||k==null)throw C.V("empty glb")
g=new A.dfd(l,k)
f=J.a4(l)
e=x.j
d=J.kB(e.a(f.h(l,"nodes")),n)
n=d.a
a0=J.a4(n)
a1=a0.gL(n)
a2=x.S
u.b=C.c4(a1,-1,!1,a2)
a3=C.a([],x.s)
for(a4=d.$ti,a5=a4.k("bS<c_.E>"),a6=new C.bS(d,d.gL(0),a5),a7=a4.k("c_.E");a6.C();){a8=a6.d
a8=C.aU(J.q(a8==null?a7.a(a8):a8,"name"))
if(a8==null)a8=""
a3.push(a8.toLowerCase())}u.c=a3
u.d=D.d.bg(a3,new A.bRj())
a3=x.gL
a6=C.a([],a3)
for(a5=new C.bS(d,d.gL(0),a5),a8=x.U,a9=x.t;a5.C();){b0=a5.d
if(b0==null)b0=a7.a(b0)
b1=C.a([],a9)
b0=a8.a(J.q(b0,"children"))
b0=J.aW(b0==null?D.cy:b0)
while(b0.C())b1.push(D.k.O(C.e5(b0.gT(b0))))
a6.push(b1)}u.f=a6
for(a5=u.b,b2=0;b2<a1;++b2)for(a7=a6[b2],b0=a7.length,b3=0;b3<b0;++b3)a5[a7[b3]]=b2
a5=C.a([],a9)
a6=e.a(f.h(l,"scenes"))
a7=C.aK(f.h(l,"scene"))
a7=a7==null?null:D.k.O(a7)
a6=J.aW(e.a(J.q(J.q(a6,a7==null?0:a7),"nodes")))
while(a6.C())a5.push(D.k.O(C.e5(a6.gT(a6))))
u.r=a5
a5=a1*3
u.w=new Float64Array(a5)
u.x=new Float64Array(a1*4)
u.y=new Float64Array(a5)
for(a5=x.Y,a4=a4.y[1],b2=0;b2<a1;++b2){b4=a4.a(a0.h(n,b2))
a6=J.a4(b4)
a7=a8.a(a6.h(b4,"translation"))
b5=a7==null?null:J.kB(a7,a5)
if(b5==null)b5=G.aq2
a7=a8.a(a6.h(b4,"rotation"))
b6=a7==null?null:J.kB(a7,a5)
if(b6==null)b6=B.c2R
a6=a8.a(a6.h(b4,"scale"))
b7=a6==null?null:J.kB(a6,a5)
if(b7==null)b7=B.cfT
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
n=J.aW(n==null?D.cy:n)
while(n.C()){b7=n.gT(n)
a0=C.a([],a9)
for(a3=J.a4(b7),a4=J.aW(e.a(a3.h(b7,"joints")));a4.C();)a0.push(D.k.O(C.e5(a4.gT(a4))))
u.Q.push(a0)
c1=a3.h(b7,"inverseBindMatrices")!=null?g.Fn(D.k.O(C.e5(a3.h(b7,"inverseBindMatrices")))).a:null
a3=u.as
a3.push(c1==null?A.hA4(a0.length):c1)}n=a8.a(f.h(l,"animations"))
n=J.aW(n==null?D.cy:n)
a0=u.z
a3=x.G
a4=x.gR
while(n.C()){c2=n.gT(n)
c3=C.a([],a4)
a5=J.a4(c2)
c4=e.a(a5.h(c2,"samplers"))
for(a6=J.aW(e.a(a5.h(c2,"channels"))),a7=J.a4(c4),c5=0;a6.C();){c6=a6.gT(a6)
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
d0=g.Fn(D.k.O(C.e5(a9.h(b7,"input")))).a
d1=g.Fn(D.k.O(C.e5(a9.h(b7,"output")))).a
d2=a9.h(b7,"interpolation")
if(d2==null)d2="LINEAR"
d3=b0===1?4:3
a9=J.l7(d2)
if(a9.A(d2,"CUBICSPLINE")){b1=d0.length
d4=new Float64Array(b1*d3)
for(b2=0;b2<b1;++b2)for(b9=b2*d3,c0=(b2*3+1)*d3,b8=0;b8<d3;++b8)d4[b9+b8]=d1[c0+b8]
d1=d4}if(!D.ok.gam(d0)){b1=d0.length
if(b1===0)C.b8(C.ft())
c5=Math.max(c5,d0[b1-1])}c3.push(new A.baN(c8,b0,d0,d1,a9.A(d2,"STEP")))}d5=C.aU(a5.h(c2,"name"))
if(d5==null)d5="clip"+a0.a
a0.n(0,d5,new A.bb7(c5,c3))}t=C.U(a2,x.c9)
s=0
n=x.H
e="Could not read a picture of "+u.a+": "
case 2:a0=s
a2=a8.a(f.h(l,"images"))
a2=a2==null?null:J.ad(a2)
if(!(a0<(a2==null?0:a2))){w=3
break}r=g.cOZ(s)
if(r==null){w=4
break}try{a0=r
d6=C.h16(a0)
q=d6==null?null:d6.pI(0,a0,null)
if(q!=null){p=q.cHz(D.cb,4)
a0=s
a2=p.a
a2=a2==null?null:a2.a
if(a2==null)a2=0
a3=p.a
a3=a3==null?null:a3.b
if(a3==null)a3=0
d7=p
a4=d7.gqO()
d8=4!==a4?d7.cHy(null,4):d7
a4=d8.a
a4=a4==null?null:a4.blT(d8!==d7,D.b8j)
if(a4==null){a4=d7.a
a4=a4==null?null:J.eV(a4.gaQ(a4))
if(a4==null){a4=d7.a
a4=a4==null?null:a4.gaQ(a4)
if(a4==null)a4=D.aH.gaQ(new Uint8Array(0))
a4=J.eV(a4)}}J.aG(t,a0,new A.bg8(a2,a3,new Uint8Array(C.ch(a4))))}}catch(e5){o=C.ab(e5)
$.am.$1(e+C.w(o))}w=5
return C.b(C.bN(D.bE,null,n),$async$Pf)
case 5:case 4:++s
w=2
break
case 3:e0=u.bQK(l,g,d,t)
w=6
return C.b(C.bN(D.bE,null,n),$async$Pf)
case 6:u.at=u.b7w(e0,5000)
w=7
return C.b(C.bN(D.bE,null,n),$async$Pf)
case 7:u.ax=u.b7w(e0,1100)
n=u.at
n.r=u.b2L(n)
n=u.ax
n.r=u.b2L(n)
e1=u.ayB(null,0)
e2=u.b5F(u.at,e1)
for(n=e2.length,e3=1/0,s=1;s<n;s+=3)e3=Math.min(e3,e2[s])
u.ay=isFinite(e3)?e3:0
return C.h(null,v)}})
return C.i($async$Pf,v)},
co_(d){var w,v,u
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
b2L(d){var w,v,u,t,s,r,q,p,o,n,m=d.a.length/3|0,l=new Uint8Array(m)
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
l[t]=o<n.length?this.co_(n[o]):5}return l},
bQK(e9,f0,f1,f2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1,e2=null,e3="POSITION",e4="JOINTS_0",e5="WEIGHTS_0",e6=J.a4(e9),e7=x.U,e8=e7.a(e6.h(e9,"materials"))
if(e8==null)e8=D.cy
w=x.b
v=J.kB(e8,w)
e8=e7.a(e6.h(e9,"textures"))
u=J.kB(e8==null?D.cy:e8,w)
e8=x.j
t=J.kB(e8.a(e6.h(e9,"meshes")),w)
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
for(a9=J.kB(e8.a(J.q(j.a(k.h(l,b1)),"primitives")),w),b0=a9.$ti,a9=new C.bS(a9,a9.gL(0),b0.k("bS<c_.E>")),b3=b2==null,b0=b0.k("c_.E");a9.C();){b4=a9.d
if(b4==null)b4=b0.a(b4)
b5=J.a4(b4)
b6=J.GZ(e.a(b5.h(b4,"attributes")),i,h)
if(b6.h(0,e3)==null||b5.h(b4,"indices")==null)continue
b7=f0.Fn(D.k.O(C.e5(b6.h(0,e3)))).a
b8=b7.length/3|0
b9=b6.h(0,e4)!=null?f0.Fn(D.k.O(C.e5(b6.h(0,e4)))).a:e2
c0=b6.h(0,e5)!=null?f0.Fn(D.k.O(C.e5(b6.h(0,e5)))).a:e2
c1=C.aK(b5.h(b4,"material"))
c2=c1==null?e2:D.k.O(c1)
c1=g.a(J.q(c2!=null?a1.a(a0.h(d,c2)):D.cz,"pbrMetallicRoughness"))
c3=c1==null?e2:J.GZ(c1,i,h)
if(c3==null)c3=D.cz
c1=e7.a(c3.h(0,"baseColorFactor"))
c4=c1==null?e2:J.kB(c1,f)
if(c4==null)c4=B.cfU
c1=g.a(c3.h(0,"baseColorTexture"))
c5=c1==null?e2:J.GZ(c1,i,h)
c1=c5==null
c6=C.aK(c1?e2:c5.h(0,"texCoord"))
c7=c6==null?e2:D.k.O(c6)
c8=b6.h(0,"TEXCOORD_"+(c7==null?0:c7))
c9=c8!=null?f0.Fn(D.k.O(C.e5(c8))).a:e2
if(!c1){c1=C.aK(J.q(a4.a(a3.h(a2,D.k.O(C.e5(c5.h(0,"index"))))),"source"))
d0=c1==null?e2:D.k.O(c1)
d1=d0!=null?f2.h(0,d0):e2}else d1=e2
d2=s.length/3|0
D.d.v(s,b7)
for(c1=c0!=null,c6=b9!=null,d3=0;d3<b8;++d3){o.push(b3?255:b2)
for(d4=d3*4,d5=0;d5<4;++d5){q.push(c6?D.k.O(b9[d4+d5]):0)
if(c1)d6=c0[d4+d5]
else d6=d5===0?1:0
p.push(d6)}}d7=f0.Fn(D.k.O(C.e5(b5.h(b4,"indices")))).a
for(b4=d7.length,d8=0;b5=d8+2,b5<b4;d8+=3){d9=D.k.O(d7[d8])
e0=D.k.O(d7[d8+1])
e1=D.k.O(d7[b5])
n.push(d2+d9)
n.push(d2+e0)
n.push(d2+e1)
m.push(this.bOS(d1,c9,d9,e0,e1,c4))}if(b3)a5.push(new C.bj(d2,b8,a7))}}return new A.dqy(new Float64Array(C.ch(s)),new Uint16Array(C.ch(q)),new Float64Array(C.ch(p)),new Uint8Array(C.ch(o)),new Int32Array(C.ch(n)),new Int32Array(C.ch(m)))},
bOS(d,e,f,g,h,i){var w,v,u,t,s,r,q,p=J.a4(i),o=p.h(i,0),n=p.h(i,1),m=p.h(i,2)
if(d!=null&&e!=null){w={}
p=f*2
v=g*2
u=h*2
t=(e[p]+e[v]+e[u])/3
s=(e[p+1]+e[v+1]+e[u+1])/3
r=w.a=w.b=w.c=0
q=new A.bRg(w,d)
q.$2(t,s)
for(p=[f,g,h];r<3;++r){v=p[r]*2
q.$2((t+e[v])/2,(s+e[v+1])/2)}o*=w.c/4/255
n*=w.b/4/255
m*=w.a/4/255}p=new A.bRf()
return(p.$1(o)<<16|p.$1(n)<<8|p.$1(m)|4278190080)>>>0},
b7w(d7,d8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4={},d5=d7.a,d6=d5.length/3|0
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
h=new A.bRl(d4,d6,d7)
g=new A.bRn(d7)
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
D.jR.hs(b0,0,a3,-1)
b1=new Float64Array(a3)
D.ok.hs(b1,0,a3,1/0)
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
b8=C.U(s,x.dg)
b9=C.U(s,s)
for(s=d7.e,r=s.length,q=d7.f,p=x.n,c0=0;c0<r;c0+=3){c1=a0[s[c0]]
c2=a0[s[c0+1]]
a9=a0[s[c0+2]]
if(c1===c2||c2===a9||c1===a9)continue
c3=A.h7M(c1,c2,a9)
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
b8.bQ(0,new A.bRk(c6,b9))
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
c9[d2]=q[d3]}d0[a9]=s[d1]}return new A.dl0(c7,c8,c9,d0,new Int32Array(C.ch(b7)),c6)},
ayB(a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=d.b
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
A.hA5(o,r,n)}}m=d.CW.c4(0,"world",new A.bRh(a0.length))
l=new A.bRi(d,v,u,t,new Float64Array(16),m)
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
A.h7N(m,w*16,q[h],f*16,j,i)
i+=16}}for(w=a0.length,p=0;p<a0.length;a0.length===w||(0,C.M)(a0),++p,i=e){e=i+16
D.ok.ek(j,i,e,m,a0[p].c*16)}return j},
b5F(b8,b9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=b8.a,b4=b3.length/3|0,b5=new Float64Array(b4*3),b6=C.a([],x.t),b7=this.Q
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
cGY(d,e){var w,v,u=new A.bRq(this)
if(d){w=u.$1("run")
v=w==null?u.$1("walk"):w}else if(e){w=u.$1("walk")
v=w}else{w=u.$1("idle")
if(w==null)w=u.$1("samba")
v=w}if(v!=null)return v
u=u.$1("samba")
if(u==null){u=this.z
u=new C.cs(u,C.a6(u).k("cs<1>")).dM(0,new A.bRo(),new A.bRp(this))}return u},
cU2(a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=this,a6="world",a7={}
if(a8){w=a5.at
w===$&&C.c()
v=w}else{w=a5.ax
w===$&&C.c()
v=w}u=a5.cGY(b1,b5)
w=a5.z.h(0,u)
t=w==null?null:w.b
if(t==null)t=1
if(b5&&b4!=null&&D.a.q(u.toLowerCase(),"walk"))s=b4/50*t
else{w=B.dud.h(0,a5.a)
s=b2*(w==null?1:w)}w=a5.e
r=w.h(0,u)
if(r==null){a5.ayB(u,0)
if(a5.d>=0){q=a5.CW
r=new C.z(q.h(0,a6)[a5.d*16+12],q.h(0,a6)[a5.d*16+14])}else r=D.zK
w.n(0,u,r)}p=a5.ayB(u,s)
a7.a=a7.b=0
if(a5.d>=0){w=a5.CW
a7.b=w.h(0,a6)[a5.d*16+12]-r.a
a7.a=w.h(0,a6)[a5.d*16+14]-r.b}o=a5.b5F(v,p)
w=B.duO.h(0,a5.a)
n=b7+(w==null?0:w)
m=C.im(v.a.length/3|0,new A.bRs(a7,a5,o,36,b0,Math.cos(n),Math.sin(n),b6,b8),!0,x.Q)
w=C.a([],x.t)
for(l=0;l<6;++l){q=$.dP+1
$.dP=q
w.push(q)}k=C.a([],x.z)
for(q=v.e,j=q.length,i=v.f,h=b3==null,g=x.o,f=0;f<j;f+=3){e=m[q[f]]
d=m[q[f+1]]
a0=m[q[f+2]]
a1=e.a
a2=e.b
a3=e.c
a4=new A.r(d.a-a1,d.b-a2,d.c-a3).FK(new A.r(a0.a-a1,a0.b-a2,a0.c-a3)).goP(0)
a3=C.a([e,d,a0],g)
a1=h?C.b0(i[D.o.an(f,3)]):A.i_n(i[D.o.an(f,3)],b3)
a2=v.r
a2===$&&C.c()
k.push(new A.lN(a3,a4,a1,a9,0.08,1,!1,0,0,2,w[a2[q[f]]]))}return k}}
A.dqy.prototype={}
A.dfd.prototype={
cOZ(d){var w,v,u=this.a,t=J.a4(u),s=x.j,r=x.G,q=C.aK(J.q(r.a(J.q(s.a(t.h(u,"images")),d)),"bufferView")),p=q==null?null:D.k.O(q)
if(p==null)return null
w=r.a(J.q(s.a(t.h(u,"bufferViews")),p))
u=J.a4(w)
t=C.aK(u.h(w,"byteOffset"))
v=t==null?null:D.k.O(t)
if(v==null)v=0
return C.Ab(this.b,v,v+D.k.O(C.e5(u.h(w,"byteLength"))))},
Fn(a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=null,g="byteOffset",f=this.a,e=J.a4(f),d=x.j,a0=x.G,a1=a0.a(J.q(d.a(e.h(f,"accessors")),a5)),a2=J.a4(a1),a3=D.k.O(C.e5(a2.h(a1,"count"))),a4=a2.h(a1,"type")
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
m=C.aSc(this.b)
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
A.lx.prototype={}
A.r2.prototype={
gDg(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=1e9,d=-1e9,a0=this.w,a1=a0.length
if(a1===0){a0=this.e
return new C.cx([-a0/2,a0/2,-12,0])}for(w=this.e,v=-w,u=d,t=e,s=u,r=t,q=0;q<a1;++q){p=a0[q]
for(o=p.e,o=[v*o/2,w*o/2],n=p.c,m=p.a,l=p.b,k=0;k<2;++k){j=o[k]
for(i=[-12,0],h=0;h<2;++h){g=A.vp(new A.r(j,0,i[h]),n)
f=g.a+m
r=Math.min(r,f)
s=Math.max(s,f)
f=g.c+l
t=Math.min(t,f)
u=Math.max(u,f)}}}return new C.cx([r,s,t,u])},
gaoq(){return this.gDg().a[1]-this.gDg().a[0]},
gGE(){var w=this.w
return w.length===0?this.f:new C.N(w,new A.bG5(this),C.S(w).k("N<1,L>")).f9(0,D.pz)},
gbcV(){return this.gDg().a[3]-this.gDg().a[2]},
ga3V(d){return this.w.length===0?0:(this.gDg().a[0]+this.gDg().a[1])/2},
ga3W(){return this.w.length===0?0:(this.gDg().a[2]+this.gDg().a[3])/2},
ged(d){var w=this
return Math.max(Math.max(w.gaoq(),w.gbcV()),Math.max(w.gGE()*1.3,w.x))*w.y}}
A.H7.prototype={}
A.aRU.prototype={
bih(){var w=this
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
Ty(d){var w,v=this,u=J.a4(d)
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
A.bG3.prototype={
cVK(){var w,v,u
for(w=this.b,v=w.length,u=0;u<w.length;w.length===v||(0,C.M)(w),++u)w[u].bih()},
ag(){var w,v,u,t=this.a,s=C.a([],x.c7)
for(w=this.b,v=w.length,u=0;u<w.length;w.length===v||(0,C.M)(w),++u)s.push(w[u].ag())
return C.G(["template",t,"signs",s],x.N,x.A)},
Ty(d){var w,v,u,t,s,r,q
this.a=D.d.b3(B.a2w,new A.bG4(d))?C.cP(J.q(d,"template")):"highway"
w=J.q(d,"signs")
if(x.j.b(w)){v=J.a4(w)
u=x.G
t=this.b
s=x.N
r=x.A
q=0
for(;;){if(!(q<6&&q<v.gL(w)))break
if(u.b(v.h(w,q)))t[q].Ty(C.a2(u.a(v.h(w,q)),s,r));++q}}else this.b[0].Ty(d)}}
A.hk.prototype={}
A.aob.prototype={
U(){var w=A.hwF()
$.yM()
return new A.aoc(w,new C.y2())}}
A.aoc.prototype={
gih(){var w,v=this.e
if(v===$){w=new A.x5(0.5,0.25,420,B.fQ8,$.aw())
w.e=30
w.f=5000
w.w=0.02
w.x=1.4
w.qX(!0)
this.e!==$&&C.bH()
this.e=w
v=w}return v},
gawG(){var w=this.r
return w===$?this.r=new A.a4N(this.gc50(),W.Bh):w},
gzo(){return D.d.h_(B.a2w,new A.c1G(this))},
a_(){var w=this
w.a1()
w.f=A.h0K(w.gzo(),w.d)
w.aaW()
A.hck().bL(new A.c1E(w),x.P)
w.Pj()},
t(){this.gawG().bR(0)
var w=this.gih()
w.S$=$.aw()
w.P$=0
this.a2()},
aaW(){var w=this.gzo(),v=this.gih(),u=w.ga3V(0),t=w.gGE(),s=w.ga3W()
v.N4(w.ged(0)*1.9,0.22,new A.r(u,w.r+t/2,s),0.45)},
Pj(){var w=0,v=C.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i
var $async$Pj=C.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return C.b(C.az(),$async$Pj)
case 7:q=e
p=C.aU(J.q(q.a,"ngmy_billboard_studio_v1"))
if(p==null){w=1
break}n=r.d
n.Ty(x.b.a(D.S.aN(0,p,null)))
n=n.b,m=n.length,l=0
case 8:if(!(l<n.length)){w=10
break}o=n[l]
i=o
w=11
return C.b(A.afu(o.f),$async$Pj)
case 11:i.w=e
i=o
w=12
return C.b(A.afu(o.r),$async$Pj)
case 12:i.x=e
case 9:n.length===m||(0,C.M)(n),++l
w=8
break
case 10:if(r.c==null){w=1
break}r.m(new A.c1r(r))
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
return C.i($async$Pj,v)},
IH(){var w=0,v=C.j(x.H),u=1,t=[],s=this,r,q,p
var $async$IH=C.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
w=6
return C.b(C.az(),$async$IH)
case 6:r=e
w=7
return C.b(r.aq("String","ngmy_billboard_studio_v1",D.S.ao(s.d.ag(),null)),$async$IH)
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
return C.i($async$IH,v)},
c51(){var w,v,u,t,s,r,q,p=this
if(!(p.x>=0)||p.c==null)return
w=p.w.gii()/1000
if(w>=30){p.aAR(!0)
return}v=A.i0E(p.gzo(),w)
u=v.b
t=u.aF(0,v.a)
s=Math.max(8,t.guI())
r=p.gih()
q=Math.atan2(t.a,-t.c)
r.N4(s,Math.asin(D.k.E(-t.b/s,-1,1)),u,q)
p.m(new A.c1x(p,w))},
bpp(){var w,v=this
v.gih().w=-1.4
w=v.w
w.jO(0)
w.hE(0)
v.m(new A.c1F(v))
v.gawG().hE(0)},
aAR(d){var w,v=this
v.gawG().bR(0)
w=v.w
if(w.b==null)w.b=$.a99.$0()
v.gih().w=0.02
v.m(new A.c1u(v,d))
v.aaW()},
cxn(){return this.aAR(!1)},
ctj(d){var w=this
w.d.a=d
w.m(new A.c1t(w))
w.aaW()
w.IH()},
Zc(d){this.d.b[d].a=!1
this.m(new A.c11())
this.IH()},
IG(d,e){return this.cj0(d,e)},
cj0(d,e){var w=0,v=C.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k
var $async$IG=C.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
m=e?400:900
w=7
return C.b(new C.hT().kV(85,m,D.eJ),$async$IG)
case 7:q=g
if(q==null){w=1
break}w=8
return C.b(q.fi(),$async$IG)
case 8:p=g
w=9
return C.b(A.afu(p),$async$IG)
case 9:o=g
if(o==null){w=1
break}n=r.d.b[d]
if(e){n.f=p
n.w=o}else{n.r=p
n.x=o}r.Zc(d)
t=2
w=6
break
case 4:t=3
k=s.pop()
if(r.c!=null)r.m(new A.c1s(r))
w=6
break
case 3:w=2
break
case 6:case 1:return C.h(u,v)
case 2:return C.f(s.at(-1),v)}})
return C.i($async$IG,v)},
czq(){var w=this.c
w.toString
C.bT(D.av,null,new A.c1w(this),w,!0,!0,!0,D.jW,!1,!1,x.H)},
bNd(){var w,v,u,t,s,r,q=this,p={}
p.a=0
w=q.d.b[0]
v=w.b
u=$.aw()
t=new C.as(new C.ba(v,D.b4,D.aN),u)
v=w.c
s=new C.as(new C.ba(v,D.b4,D.aN),u)
w=w.d
r=new C.as(new C.ba(w,D.b4,D.aN),u)
w=q.c
w.toString
C.bT(D.av,null,new A.c1p(p,q,new A.c1q(p,q,t,s,r),t,s,r),w,!0,!0,!0,D.jW,!1,!1,x.H)},
awI(d,e,f,g){var w=null,v=g?f.j(0.3):D.w.j(0.6),u=C.m(20),t=C.I(f,D.r,1)
return C.aB(w,C.p(w,C.d(d,w,w,w,w,w,w,C.l(w,w,f,w,w,w,w,w,w,w,w,13,w,w,D.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),D.f,w,w,new C.o(v,w,t,u,w,w,D.n),w,w,w,w,D.iP,w,w,w),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,e,w,w,w,w,w,w,!1,D.a4)},
awH(d,e,f){return this.awI(d,e,f,!1)},
c5_(d,e,f){return this.awI(d,e,D.aR,f)},
B(d){var w,v,u,t,s,r=this,q=null,p=C.aH(d,q,x.w).w.r,o=r.f
o===$&&C.c()
w=x.p
o=C.a([C.bU(0,A.fXS(E.B0,r.gih(),q,q,0,q,q,q,o,!0),0,0,0)],w)
if(!(r.x>=0))o.push(C.ao(q,C.B(C.a([C.aB(q,C.p(q,D.a1w,D.f,q,q,new C.o(D.w.j(0.55),q,C.I(D.bX,D.r,1),q,q,q,D.a6),q,40,q,q,q,q,q,40),D.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new A.c1A(d),q,q,q,q,q,q,!1,D.a4),D.as,C.E(C.d("Billboard studio \xb7 "+r.gzo().c,q,q,q,q,q,q,B.f97,q,q,q),1)],w),D.m,q,D.e,D.j,0,q,q),q,q,8,8,p.b+8,q))
if(r.x>=0&&r.y)o.push(C.bU(0,C.aB(D.cg,q,D.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new A.c1B(r),q,q,q,q,q,q,!1,D.a4),0,0,0))
if(!(r.x>=0&&r.y)){v=C.a([],w)
if(r.z.length!==0&&!(r.x>=0)){u=D.dX.j(0.95)
t=C.m(12)
s=C.I(D.bo,D.r,1)
v.push(C.p(q,C.d(r.z,q,q,q,q,q,q,D.U4,q,q,q),D.f,q,q,new C.o(u,q,s,t,q,q,D.n),q,q,q,D.cu,D.bU,q,q,q))}w=C.a([],w)
if(!(r.x>=0))w.push(r.awH("\ud83e\udea7 Choose billboard",r.gczp(),F.fu))
if(!(r.x>=0))w.push(r.awH("\u270f\ufe0f Edit",r.gbNc(),D.bo))
if(r.x>=0)w.push(r.awI("\u23f9 Stop the drone",r.gcxm(),D.cs,!0))
if(r.x>=0)w.push(r.awH("\ud83d\udc41 Hide everything",new A.c1C(r),D.aL))
if(!(r.x>=0))w.push(r.c5_("\ud83c\udfac 30 second drone shot",r.gbpo(),!0))
v.push(C.bX(D.fW,w,D.bs,8,8))
o.push(C.ao(p.d+12,C.x(v,D.m,q,D.e,D.P,0,D.p),q,q,10,10,q,q))}return C.c5(q,D.w,new C.an(D.a_,q,D.aa,D.t,o,q),q,!1,!1,q,q)}}
A.FD.prototype={}
A.z1.prototype={}
A.xa.prototype={}
A.aT2.prototype={}
A.a3V.prototype={}
A.ajR.prototype={}
A.bKg.prototype={
bxJ(d,e){var w,v,u,t,s,r,q,p=this,o=x._,n=C.a([],o)
for(w=p.a.x,v=w.length,u=0;u<w.length;w.length===v||(0,C.M)(w),++u){t=w[u]
s=t.b
if(s==="house2"||s==="bighouse")n.push(t)}p.b!==$&&C.aP()
p.b=n
o=C.a([],o)
for(n=w.length,u=0;u<w.length;w.length===n||(0,C.M)(w),++u){t=w[u]
if(D.d.b3(B.Qy,new A.bKi(t)))o.push(t)}p.c!==$&&C.aP()
p.c=o
for(o=p.f,r=0;r<5;++r){q=p.cmj()
n=B.dq8[r]
w=B.deI[r]
o.push(new A.aT2(n,w,new A.rC(B.aw5[r],B.Lw,w,B.L_,B.djJ[r]),58+r*7.5,q.a,q.b,B.ayl))}p.Ul(0)},
cmj(){var w,v=this.c
v===$&&C.c()
w=v.length
if(w===0)return B.eoo
return A.yC(v[this.d.au(w)])},
cUe(d){var w,v,u,t,s,r,q,p=this,o=C.a([],x._),n=p.c
n===$&&C.c()
w=n.length
v=0
for(;v<n.length;n.length===w||(0,C.M)(n),++v){u=n[v]
t=u.b
if(t==="store"||t==="shop"||t==="gasstation")o.push(u)}if(o.length===0)return
D.d.aV(o,new A.bKk(p,d))
for(n=p.e,s=0,v=0;v<2;++v){r=B.dib[v]
q=o[D.o.F(s,o.length)];++s;++p.r
w=new A.xa(r,q,d,r==="medicine"?30:24)
w.w=!0
D.d.c9(n,0,w)}},
Ul(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=j.d,h=j.e,g=x._,f=C.S(h).k("Z<1>"),e=0
for(;;){if(new C.Z(h,new A.bKl(),f).gL(0)<7){w=e+1
v=e<30
e=w}else v=!1
if(!v)break
u=B.Qy[i.au(5)]
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
m=A.yC(o)
l=A.yC(n)
k=Math.sqrt(Math.pow(m.a-l.a,2)+Math.pow(m.b-l.b,2));++j.r
h.push(new A.xa(u.a,o,n,6+D.o.E(D.k.V(k/70),0,22)))}},
cWb(d,e,f){if(this.x!=null||e.f!=null||!D.d.q(this.e,e))return!1
e.f=-1
e.x=f
this.x=e
return!0},
a4(d){var w=this.x
if(w==null)return
w.f=null
w.r=!1
this.x=null},
ga6n(d){var w=this.x
if(w==null)return null
return A.yC(w.r?w.d:w.c)},
bjb(d,e,f){var w,v,u,t,s,r,q,p=this,o=p.x
if(o==null)return null
if(f-o.x>360){p.a4(0)
return B.brO}w=p.ga6n(0)
if(Math.sqrt(Math.pow(w.a-d,2)+Math.pow(w.b-e,2))>58)return null
if(!o.r){o.r=!0
v=o.b
u=A.KR(v)
v=A.KR(v)
t=B.hr.h(0,o.c.b).a
s=o.w?"hospital":"house"
return new A.ajR("pickup",u.b+" You picked up the "+v.c.toLowerCase()+" at the "+t.toLowerCase()+". Now take it to the "+s+".",0)}D.d.W(p.e,o)
p.x=null;++p.z;++p.y
v=p.Q
u=o.e
p.Q=v+u
p.Ul(f)
r=A.KR(o.b).b+" Delivered! +"+u+" points."
if(p.y>=8){p.Q+=40
r+=" You won the race with 8 deliveries: +40 points!"
p.aXW()
q=40}else q=0
v=q>0?"won":"delivered"
return new A.ajR(v,r,u+q)},
aXW(){var w,v,u;++this.as
this.y=0
for(w=this.f,v=w.length,u=0;u<v;++u)w[u].r=0},
Ft(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
for(w=j.f,v=w.length,u=j.e,t=e+2,s=j.d,r=x.C,q=null,p=0;p<w.length;w.length===v||(0,C.M)(w),++p){o=w[p]
n=o.ch
if(n===0){if(e<o.CW)continue
n=C.a([],r)
for(m=u.length,l=0;l<u.length;u.length===m||(0,C.M)(u),++l){k=u[l]
if(k.f==null)n.push(k)}if(n.length===0)continue
D.d.aV(n,new A.bKh(j,o))
k=n[Math.min(n.length-1,s.au(3))]
k.f=D.d.cD(w,o)
o.y=k
j.b6a(o,e,1,k.c)}else if(e>=o.Q){if(!o.db){o.e=o.ax
o.f=o.ay
o.db=!0
o.dx=e+(n===1?1.6:1.3)
continue}if(e<o.dx)continue
o.db=!1
m=o.y
m.toString
if(n===1)j.b6a(o,e,2,m.d)
else{D.d.W(u,m)
o.y=null
o.ch=0;++o.w;++o.r
o.x=o.x+m.e
o.CW=t+s.aj()*5
j.Ul(e)
if(o.r>=8){q=o.a+" won the race with 8 deliveries! A new round starts."
j.aXW()}}}}return q},
aYJ(d,e){return Math.sqrt(Math.pow(e.a-d.e,2)+Math.pow(e.b-d.f,2))},
b6a(d,e,f,g){var w,v,u,t=this,s=A.yC(g),r=B.hr.h(0,g.b),q=g.e*3.141592653589793/2,p=r.d/2-2,o=g.c+Math.sin(q)*p,n=g.d+Math.cos(q)*p
d.ch=f
d.ax=o
d.ay=n
w=t.w
if(w===$){v=new A.bIm(t.a)
v.aYK()
t.w!==$&&C.bH()
t.w=v
w=v}u=C.C(w.ao6(new C.z(d.e,d.f),s),x.J)
u.push(new C.z(o,n))
d.cx=u
o=A.ib_(u)
d.cy=o
d.z=e
d.Q=e+Math.max(1,o/d.d)},
alI(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=C.a([],x.B)
for(w=this.f,v=w.length,u=d*2.2,t=0;t<w.length;w.length===v||(0,C.M)(w),++t){s=w[t]
r=s.e
q=s.f
if(s.db)continue
if(s.ch!==0&&d>=s.z&&s.cx.length>1){p=s.z
o=D.k.E((d-p)/Math.max(0.01,s.Q-p),0,1)
n=A.ib5(s.cx,s.cy*o)
r=n.a
q=n.b
m=n.c
l=o<1}else{m=0
l=!1}k.push(new A.a3V(r,q,m,u+s.d,l,s.ch===2,s.c,s.b))}return k},
cW9(){var w,v,u,t,s=C.a([new C.bj("You",this.y,this.Q)],x.aJ)
for(w=this.f,v=w.length,u=0;u<w.length;w.length===v||(0,C.M)(w),++u){t=w[u]
s.push(new C.bj(t.a,t.r,t.x))}D.d.aV(s,new A.bKm())
return s},
qP(d,e,f){var w,v,u,t,s=C.a([],x.C)
for(w=this.e,v=w.length,u=0;u<w.length;w.length===v||(0,C.M)(w),++u){t=w[u]
if(t.f==null)s.push(t)}D.d.aV(s,new A.bKj(this,e,f))
return s},
a9V(d,e,f){return Math.sqrt(Math.pow(f.a-d,2)+Math.pow(f.b-e,2))}}
A.bIm.prototype={
aYN(d){return-this.a.gev(0)/2+8+d*24},
aYK(){var w,v,u,t,s=this,r=s.a
s.d=A.hqc(r,null)
s.b=D.k.dk((r.gev(0)-16)/24)+1
w=D.k.dk((r.ghm(0)-10- -750)/24)+1
s.c=w
s.e=C.c4(s.b*w,!1,!1,x.R)
for(v=0;v<s.b;++v)for(w=v*24,u=0;t=s.c,u<t;++u)s.e[v*t+u]=s.abN(-r.gev(0)/2+8+w,-750+u*24)
s.f=A.h6i(r)},
abN(d,e){var w,v,u=this.a
if(d<-u.gev(0)/2+12||d>u.gev(0)/2-12||e<-756||e>u.ghm(0)-14)return!0
u=this.d
u===$&&C.c()
w=u.length
v=0
for(;v<w;++v)if(u[v].aFN(d,e,14))return!0
return!1},
aYL(d,e,f){var w,v,u=e.a,t=f.a-u,s=e.b,r=f.b-s,q=Math.max(1,D.k.dk(Math.sqrt(Math.pow(t,2)+Math.pow(r,2))/8))
for(w=0;w<=q;++w){v=w/q
if(this.abN(u+t*v,s+r*v))return!1}return!0},
aYM(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=d.a,h=j.a,g=D.k.V((i+h.gev(0)/2-8)/24),f=j.b
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
ao6(d,e){var w,v,u,t,s,r,q,p,o,n,m=this
if(A.h6i(m.a)!==m.f)m.aYK()
w=m.aYM(d)
v=m.aYM(e)
if(w==null||v==null)return C.a([d,e],x.f)
u=new C.z(m.aYN(w.a),-750+w.b*24)
t=new C.z(m.aYN(v.a),-750+v.b*24)
s=x.f
r=m.abN(d.a,d.b)?C.a([d],s):C.a([],s)
q=m.abN(e.a,e.b)?C.a([e],s):C.a([],s)
p=C.a([],s)
o=r.length===0?d:u
n=q.length===0?e:t
if(m.aYL(0,o,n))D.d.v(p,C.a([o,n],s))
else D.d.v(p,m.cs5(w,v,o,n))
s=C.C(r,x.J)
D.d.v(s,p)
D.d.v(s,q)
return s},
cs5(a9,b0,b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this,a3=x.t,a4=C.a([],a3),a5=new A.dfG(a4,C.a([],x.n)),a6=x.S,a7=C.U(a6,a6),a8=C.U(a6,x.i)
a6=a9.a
w=a2.c
w===$&&C.c()
v=a9.b
u=a6*w+v
t=b0.a
s=b0.b
r=t*w+s
a8.n(0,u,0)
a5.anC(u,a2.c5u(a6,v,b0))
p=0
for(;;){if(a4.length!==0){o=p+1
a6=p<4e4
p=o}else a6=!1
if(!a6){q=!1
break}n=a5.eH()
if(n===r){q=!0
break}a6=a2.c
m=D.o.e8(n,a6)
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
a5.anC(e,d+Math.sqrt(Math.pow(v,2)+Math.pow(h-s,2)))}}}if(!q)return C.a([b1,b2],x.f)
a0=C.a([r],a3)
while(a7.ai(0,D.d.gal(a0))){a3=a7.h(0,D.d.gal(a0))
a3.toString
a0.push(a3)}a3=x.f
a4=C.a([b1],a3)
for(a6=x.c5,w=new C.dx(a0,a6),w=new C.bS(w,w.gL(0),a6.k("bS<ak.E>")),v=a2.a,a6=a6.k("ak.E");w.C();){t=w.d
if(t==null)t=a6.a(t)
s=a2.c
g=D.o.e8(t,s)
a4.push(new C.z(-v.gev(0)/2+8+g*24,-750+D.o.F(t,s)*24))}a4.push(b2)
a1=C.a([D.d.gI(a4)],a3)
for(j=0;h=a4.length-1,j<h;j=h){a3=j+1
for(;;){if(!(h>a3&&!a2.aYL(0,a4[j],a4[h])))break;--h}a1.push(a4[h])}return a1},
c5u(d,e,f){return Math.sqrt(Math.pow(d-f.a,2)+Math.pow(e-f.b,2))}}
A.dfG.prototype={
gcm(d){return this.a.length!==0},
anC(d,e){var w,v,u,t=this.a
t.push(d)
w=this.b
w.push(e)
v=t.length-1
for(;v>0;v=u){u=D.o.an(v-1,2)
if(w[u]<=w[v])break
this.b6P(v,u)}},
eH(){var w,v,u,t,s,r=this.a,q=D.d.gI(r),p=r.pop(),o=this.b,n=o.pop()
if(r.length!==0){r[0]=p
o[0]=n
for(w=0;;w=s){v=2*w+1
u=v+1
t=r.length
s=v<t&&o[v]<o[w]?v:w
if(u<t&&o[u]<o[s])s=u
if(s===w)break
this.b6P(w,s)}}return q},
b6P(d,e){var w,v=this.a,u=v[d]
v[d]=v[e]
v[e]=u
v=this.b
w=v[d]
v[d]=v[e]
v[e]=w}}
A.aSp.prototype={
biD(d,e,f){var w,v,u,t,s=this,r=null,q=s.d
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
a6p(d){return this.biD(d,!1,!1)}}
A.aXE.prototype={
B(d){var w,v,u,t,s,r=null,q=D.k.E(this.c,0,1)
if(q>0.5)w=D.be
else w=q>0.25?D.bI:D.aw
v=C.a([],x.p)
u=this.d
v.push(new C.D(D.q3,C.d(this.e,r,r,r,r,r,r,C.l(r,r,r,r,r,r,r,r,r,r,r,u,r,r,r,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),r))
t=C.m(u/3)
s=C.I(D.ae,D.r,1.5)
v.push(C.E(C.p(r,new C.bK(D.a3,r,r,C.Bk(D.A,C.c1(r,new C.o(w,r,r,C.m(u/4),r,r,D.n),D.bf),1,q),r),D.f,r,r,new C.o(D.aW,r,s,t,r,r,D.n),r,u,r,r,D.nk,r,r,r),1))
v.push(C.p(r,r,D.f,r,r,new C.o(D.ae,r,r,C.m(1),r,r,D.n),r,u*0.45,r,B.by2,r,r,r,3))
return C.B(v,D.m,r,D.e,D.P,0,r,r)}}
A.U8.prototype={
B(d){return new C.tm(new A.c_h(this),null,this.c,null)}}
A.rG.prototype={}
A.Sc.prototype={
gL(d){return this.a==="bus"?120:95.94999999999999}}
A.aSo.prototype={}
A.bvy.prototype={
byO(d,e,f,g){var w,v,u,t,s,r,q,p,o,n,m
for(w=this.e,v=this.f,u=0;u<4;++u){t=B.kh[u]
s=A.fij(t).a[1]
r=new A.fb7(this,t)
q=0
for(;;){if(!(r.$1(q)&&q<s))break;++q}for(p=-1,o=0,n=0;n<s;++n){m=D.o.F(q+n,s)
if(r.$1(m)){if(p<0)p=m;++o}else if(p>=0)break}w.push(p)
v.push(o)}}}
A.bIo.prototype={
jO(d){var w,v,u,t
for(w=this.a,v=this.b,u=0;u<4;++u){w[u]=B.kh[u].r
v[u]=0}t=this.c=0
for(w=$.fSJ();t<2;++t)w[t].r=-1},
Ft(d,e){var w,v,u,t=this
if(e<t.c-0.0001)t.jO(0)
w=t.c
if(e-w>90){w=e-2
t.c=w}for(v=e-1e-9;w<v;){u=Math.min(0.05,e-w)
t.cxc(u)
w=t.c+=u}},
cxc(b8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7=this
for(w=$.fSJ(),v=b7.a,u=0;u<2;++u){t=w[u]
s=t.r
if(s<0)continue
r=A.fij(B.kh[s]).a[1]
q=D.k.F(v[s]-t.e[s],r)
if(q<0)q+=r
if(q>=t.f[s]&&q<r/2)t.r=-1}for(w=b7.b,p=110*b8,o=40*b8,n=0;n<4;++n){m=B.kh[n]
r=A.fij(m).a[1]
l=m.a==="bus"
k=(l?120:95.94999999999999)/2
j=new A.bIp()
for(i=34,h=0;h<4;++h){if(h===n||D.o.an(n,2)!==D.o.an(h,2))continue
g=D.k.F(v[h]-v[n],r)
if(g<0)g+=r
g-=k+(B.kh[h].a==="bus"?120:95.94999999999999)/2
if(g<400)i=Math.min(i,C.jN(j.$1(g-18)))}for(f=$.bDR(),e=f.length,d=r-30,u=0;u<f.length;f.length===e||(0,C.M)(f),++u){a0=f[u]
if(a0.a!==D.o.an(n,2))continue
a1=A.h1m(a0,b7.c)
if(a1===0)continue
a2=D.k.F(a0.b-(v[n]+k),r)
if(a2<0)a2+=r
if(a2>d)continue
if(a2<260)a3=!(a1===1&&a2<w[n]*1.2)
else a3=!1
if(a3)i=Math.min(i,C.jN(j.$1(a2-4)))}for(f=$.fSJ(),u=0;u<2;++u){t=f[u]
a4=t.e[n]
if(a4<0)continue
e=v[n]
a2=D.k.F(a4-e,r)
if(a2<0)a2+=r
if(D.k.F(e-a4,r)<t.f[n]){if(t.r<0)t.r=n
continue}if(t.r===n)continue
e=w[n]
for(d=$.bDR(),a3=d.length,a5=b7.c,a6=!1,a7=0;a7<a3;++a7){a0=d[a7]
if(a0.a!==D.o.an(n,2)||A.h1m(a0,a5)===0)continue
a8=D.k.F(a0.b-(v[n]+k),r)
if((a8<0?a8+r:a8)<a2)a6=!0}if(t.r<0&&a2<40+e*e/220+20&&!a6){t.r=n
continue}if(a2<400)i=Math.min(i,C.jN(j.$1(a2-10)))}f=A.KX(m,v[n]).a
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
a5=Math.abs(-b3*b2+b4*b1)<a5/2+16}if(a5)i=Math.min(i,C.jN(j.$1(b5-k-10)))}b6=w[n]
l=b6<i?Math.min(i,b6+o):Math.max(i,b6-p)
w[n]=l
if(l<0){w[n]=0
l=0}v[n]=v[n]+l*b8}},
cU7(d,e,f){this.Ft(0,f)
return A.KX(B.kh[e],this.a[e])},
cOR(d,e){var w,v,u,t,s,r,q,p,o,n,m,l
for(w=this.a,v=this.b,u=0;u<4;++u){if(v[u]<4)continue
t=B.kh[u]
s=A.KX(t,w[u]).a
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
A.A9.prototype={
ga7R(){var w=this.d,v=w.e*3.141592653589793/2,u=Math.sin(v),t=Math.cos(v),s=this.r-1
return new C.z(w.c+u*42-t*s*24,w.d+t*42+u*s*24)}}
A.cxd.prototype={
byD(d,e){var w,v,u,t,s=this,r=x._,q=C.a([],r)
for(w=s.a.x,v=w.length,u=0;u<w.length;w.length===v||(0,C.M)(w),++u){t=w[u]
if(t.b==="ubstation")q.push(t)}s.c!==$&&C.aP()
s.c=q
r=C.a([],r)
for(q=w.length,u=0;u<w.length;w.length===q||(0,C.M)(w),++u){t=w[u]
v=t.b
if(v==="house2"||v==="bighouse")r.push(t)}s.d!==$&&C.aP()
s.d=r
s.Ul(0)},
Ul(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.d
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
n.v(0,new C.cQ(new C.Z(t,new A.cxf(o),r),new A.cxg(),s))
for(m=0;m<3;++m){if(n.q(0,m))continue
l=g.f
k=l==null
if((k?null:l.d)===o)l=(k?null:l.r)===m
else l=!1
if(l)continue
l=g.x++
j=f[u.au(f.length)]
i=A.yC(j)
h=Math.sqrt(Math.pow(o.c-i.a,2)+Math.pow(o.d-i.b,2))
l=new A.A9(l,B.dfc[u.au(12)],new A.rC(B.aw5[u.au(5)],B.Lw,B.dmZ[u.au(6)],D.aJ,"human"),o,j,6+D.o.E(D.k.V(h/45),0,30),m)
l.x=d
t.push(l)}}},
apJ(d,e){var w,v,u,t=this.c
t===$&&C.c()
w=t.length
v=0
for(;v<t.length;t.length===w||(0,C.M)(t),++v){u=t[v]
if(Math.sqrt(Math.pow(u.c-d,2)+Math.pow(u.d-e,2))<150)return u}return null},
cTT(d,e){var w,v,u,t,s,r,q=this
if(q.f!=null)return null
w=q.apJ(d,e)
if(w==null)return null
v=C.a([],x.bz)
for(u=q.e,t=u.length,s=0;s<u.length;u.length===t||(0,C.M)(u),++s){r=u[s]
if(r.d===w)v.push(r)}if(v.length===0)return null
D.d.aV(v,new A.cxe())
r=D.d.gI(v)
D.d.W(u,r)
return q.f=r},
ga6n(d){var w=this.f
return w==null?null:A.yC(w.e)},
cLO(d,e,f){var w,v,u=this,t=u.f,s=u.ga6n(0)
if(t==null||s==null)return 0
if(Math.sqrt(Math.pow(s.a-d,2)+Math.pow(s.b-e,2))>70)return 0
u.f=null;++u.r
w=u.w
v=t.f
u.w=w+v
u.y=f+4
u.Ul(f)
return v},
alI(d){var w,v,u,t,s,r,q,p
if(d<this.y)return B.HA
w=C.a([],x.B)
for(v=this.e,u=v.length,t=d*1.4,s=0;s<v.length;v.length===u||(0,C.M)(v),++s){r=v[s]
q=r.d
p=r.c
w.push(new A.a3V(r.ga7R().a,r.ga7R().b,Math.atan2(q.c-r.ga7R().a,q.d-r.ga7R().b)+3.141592653589793,t+r.a,!1,!1,p,p.c))}return w}}
A.pv.prototype={}
A.bIa.prototype={
gLP(){var w,v=this,u=v.r
if(u===$){w=A.hra(v.b)
v.r!==$&&C.bH()
v.r=w
u=w}return u},
ca3(){var w,v=this.a
A:{if("hospital"===v){w=B.cu4
break A}if("dmv"===v){w=B.dnk
break A}if("shop"===v){w=B.cU9
break A}if("school"===v){w=B.d24
break A}if("firestation"===v){w=B.dgQ
break A}if("tower"===v){w=B.db7
break A}w=B.dlm
break A}return w},
cES(){var w,v=this.a
A:{if("hospital"===v){w=B.cu0
break A}if("dmv"===v){w=B.d40
break A}if("shop"===v){w=B.cZL
break A}if("school"===v){w=B.daT
break A}if("firestation"===v){w=B.d81
break A}if("tower"===v){w=B.dpH
break A}w=B.cTE
break A}return w},
fG(d,e){var w,v,u,t,s,r,q,p=this,o=p.ax
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
t=p.c65(q,e)}if(t!=null)p.B(e)
return t},
c65(d,e){var w,v,u,t,s,r=this,q="The city is still loading.",p="The breaker panel on level "
switch(r.a){case"hospital":if(e==null)return q
if(d===0){w=e.gBY()
v=C.S(w).k("Z<1>")
u=C.C(new C.Z(w,new A.bIb(),v),v.k("J.E"))
if(u.length===0)return"The desk: nobody needs the hospital right now. "+e.x+" doses of medicine in stock."
return e.aCD(D.d.gI(u))}t=d-1
if(e.e[t].a<0)return"This bed is empty. Admit someone at the desk first."
return e.biR(t)
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
return"You taught the class a lesson. +3 points. "+B.a3b[D.o.F(w==null?0:w,5)]}w=e==null?null:e.r
return"The library: "+B.a3b[D.o.F(w==null?1:w,5)]
case"firestation":if(d===0){if(e!=null)e.r+=2
return"You checked the equipment with the firefighters. +2 points. Keep the extinguishers charged."}w=e==null?null:e.r
return"Fire drill: "+B.a3b[D.o.F((w==null?0:w)+1,5)]
case"tower":if(d===0){r.w=!0
return"The elevator: choose your level (you are on level "+r.f+" of "+r.gLP()+")."}if(d===2){r.x=!0
return"The balcony on level "+r.f+": the whole town is below you."}if(r.c){r.cy=!0
return p+r.f+". This office has no power. Let us find the wiring fault."}return p+r.f+": every breaker is on and the office has power."
default:if(d===0){if(r.c){r.cy=!0
return"The breaker panel. This house has no power. Let us find the wiring fault."}return"The breaker panel: every breaker is on and the house has power."}return r.c?"The outlet is dead: there is no power in this house.":"The outlet works. Everything here is wired right."}},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this
g.ch=d
w=g.a
if(w==="cabin"){g.bDm()
return}v=C.a([],x.z)
u=new A.fk(v)
t=C.a([],x.E)
A:{if("hospital"===w){s=B.ezc
break A}if("shop"===w){s=B.etc
break A}if("dmv"===w){s=B.evu
break A}if("school"===w){s=B.eLX
break A}if("firestation"===w){s=B.eA8
break A}if("tower"===w){s=new C.z(g.c?B.aeL:B.boW,B.beq)
break A}s=new C.z(g.c?B.aeL:B.bmP,B.jn)
break A}r=s.a
u.f=-1
u.n3(B.h_n,B.fYF,s.b,0.2,3)
u.f=0
u.x=$.dP=$.dP+1
u.hl(B.fXR,B.aV7,r,3)
u.x=0
u.x=$.dP=$.dP+1
u.hl(B.fWE,B.a9Q,r,3)
u.x=0
s=w==="tower"
if(s){u.f=3
u.d=0.18
u.aO(B.aVj,B.a9Q,B.Yh)
u.d=1
u.f=0}else{u.x=$.dP=$.dP+1
u.hl(B.aVj,B.a9Q,r,3)
u.x=0}u.f=0
q=s&&g.f>1
p=$.dP+1
if(q){u.x=$.dP=p
u.hl(B.fYS,B.aV7,r,3)
u.x=0}else{u.x=$.dP=p
u.hl(new A.r(-94,70,320.6),new A.r(113.2,140,1.2),r,2)
u.x=0
u.x=$.dP=$.dP+1
u.hl(new A.r(94,70,320.6),new A.r(113.2,140,1.2),r,2)
u.x=0
u.x=$.dP=$.dP+1
u.aO(new A.r(0,102,320.6),new A.r(76,76,1.2),r)
u.x=0
u.x=$.dP=$.dP+1
u.aW(B.h0p,B.h5v,B.ba6,0.5)
u.x=0}u.f=1
for(o=0;o<3;++o){n=B.dht[o]
u.aO(new A.r(n,78,0.6),B.h53,B.kw)
u.aW(new A.r(n,78,0.8),B.fWW,B.hO,0.6)}for(q=!s,o=0;o<2;++o){m=B.cBl[o]
u.aO(new A.r(-149.6,78,m),B.aV_,B.kw)
u.aW(new A.r(-149.2,78,m),B.aVB,B.hO,0.6)
if(q){u.aO(new A.r(149.6,78,m),B.aV_,B.kw)
u.aW(new A.r(149.2,78,m),B.aVB,B.hO,0.6)}}u.aO(B.h0v,B.h5t,B.kw)
u.aO(B.h0J,B.fUw,D.bO)
u.f=2
u.r=!0
for(q=w!=="house2",p=w==="bighouse",o=0;o<3;++o){n=B.dhS[o]
for(l=0;l<2;++l){m=B.cBm[l]
u.dL(new A.r(n,138,m),new A.r(n,122,m),0.5,D.j7,4)
k=(!q||p||s)&&g.c?D.ha:B.nZ
u.fn(new A.r(n,120,m),5,k,3,6)}}switch(w){case"hospital":g.bYM(u,t,d)
break
case"shop":g.ctX(u,t)
break
case"dmv":g.bM0(u,t)
break
case"school":g.crD(u,t)
break
case"firestation":g.cx8(u,t)
break
case"tower":g.cBe(u,t)
break
default:u.f=1
u.aO(B.h6z,B.h1U,g.c?B.pV:B.af9)
u.f=2
u.aW(B.h44,B.fS4,B.Xy,0.1)
u.aW(B.h45,B.fS5,B.Ln,0.1)
u.aW(B.fRN,B.fWm,B.nN,0.2)
u.aW(B.fY4,B.h6g,E.F_,0.4)
u.aO(B.fSv,B.fT6,B.afR)
u.fn(B.h3x,10,B.EA,3,6)
g.b9E(u,t)}u.f=1
if(s&&g.f>1)t.push(B.bYD)
else{u.aO(B.h0Y,B.fZn,D.cS)
t.push(B.bYC)}if(d!=null){w=d.r
k=d.w
j=d.x
i=g.cx!=null?"   \ud83d\udce6 carrying":""
t.push(new A.hd(B.fQb,"\u2b50 "+w+"   \ud83c\udf5e "+k+"   \ud83d\udc8a "+j+i,D.M,0))}h=C.a([],x.a)
if(s){u.f=2
u.e=0
u.aW(B.fS_,B.aV3,D.av,0.3)
u.aW(B.fYa,B.aV3,D.av,0.3)
u.aW(B.h0R,B.h56,D.av,0.3)
w=x.o
h.push(new A.fJ(C.a([B.fXE,B.h1f,B.h0d,B.h2X],w),0,new A.bIi(g),960,560,60,2,0,!1))
h.push(new A.fJ(C.a([B.fV1,B.h6F,B.fU4,B.h51],w),0,new A.bIj(g),960,560,60,2,0,!1))
h.push(new A.fJ(C.a([B.h4P,B.fPR,B.fX_,B.fZw],w),0,new A.bIk(g),960,560,60,2,0,!1))}if((!q||p)&&!g.c)h.push(new A.fJ(C.a([B.h1G,B.fYP,B.h0i,B.h0c],x.o),0,new A.bIl(g),960,480,60,2,0,!1))
g.ay=new A.tG(v,B.RD,t,h,null,0)},
rk(d,e,f,g,h){var w=d.f
d.f=1
d.dL(new A.r(e,0.2,f),new A.r(e,0.6,f),g,h,20)
d.f=w},
bYM(d,e,f){var w,v,u,t,s,r,q,p,o
d.f=1
d.aO(B.aU2,B.fUK,D.bx)
d.aO(B.aU2,B.fSf,D.bx)
d.f=2
d.aW(B.h4r,B.fXq,B.nN,0.15)
d.aW(B.h4s,B.fXJ,D.bN,0.3)
d.aO(B.h3u,B.fWA,D.aR)
this.rk(d,-80,66,22,D.co)
e.push(B.bYJ)
e.push(B.bYy)
for(w=0;w<2;++w)d.aO(new A.r(-105,8,B.cbZ[w]),B.fVZ,D.br)
d.fn(B.fSC,9,B.EA,3,6)
for(v=f!=null,u=0;u<3;++u){t=48+u*50
d.aO(new A.r(76,8,t),B.fXn,D.cr)
d.aO(new A.r(76,14,t),B.fXi,D.aP)
d.aO(new A.r(108,18,t),B.fSA,D.c)
s=v&&u<f.e.length?f.e[u]:null
if(s!=null&&s.a>=0){r=f.c
r===$&&C.c()
q=r[s.a]
r=s.b>70?D.bo:D.cs
d.aO(new A.r(54,24,t),B.fUN,r)
r=s.b>70
p=r?"cared for":"needs treatment"
r=r?D.eh:D.bx
e.push(new A.hd(new A.r(76,40,t),q.a.b+"  "+p,r,0))}else e.push(new A.hd(new A.r(76,30,t),"Free bed "+(u+1),D.br,0))
r=t-2
o=d.f
d.f=1
d.dL(new A.r(20,0.2,r),new A.r(20,0.6,r),16,D.aE,20)
d.f=o}},
bM0(d,e){var w,v,u,t,s
d.f=2
d.r=!0
d.x=$.dP=$.dP+1
d.aW(B.aTU,B.fSM,D.br,0.15)
d.aW(B.aTW,B.fSO,D.bN,0.3)
d.aW(B.h3Z,B.fTU,D.av,0.3)
d.aW(B.h35,B.fYC,D.bb,0.5)
d.aO(B.h3Y,B.fWC,D.aJ)
d.aO(B.fUD,B.fT5,D.bI)
d.x=0
d.x=$.dP=$.dP+1
d.aO(B.aUx,B.aU5,D.cp)
d.aO(B.aUt,B.aUa,D.bi)
d.fn(B.aUu,5.5,B.ae9,5,8)
d.fn(B.aUv,5.7,D.av,3,8)
d.x=0
d.x=$.dP=$.dP+1
d.aO(B.h3B,B.fV9,D.aP)
for(w=0;w<3;++w){v=90+w*30
d.aD0(new A.r(-146,62,v),B.fTv,[D.bx,D.bI,D.bi][w],0)
d.aO(new A.r(-145.6,62,v),B.h4Y,D.c)}d.aO(B.fSQ,B.fV8,D.fZ)
d.aO(B.h_R,B.h5L,D.c)
d.aO(B.h_6,B.h4D,D.bx)
d.x=0
for(u=0;u<4;++u){t=B.dhu[u]
d.x=$.dP=$.dP+1
d.aO(new A.r(t,9,150),B.fU_,D.bi)
d.aO(new A.r(t,17,160),B.fTV,D.bi)
d.aO(new A.r(t-8,4,150),B.aUo,D.aJ)
d.aO(new A.r(t+8,4,150),B.aUo,D.aJ)
d.x=0}d.x=$.dP=$.dP+1
d.aO(B.fRe,B.fWN,D.bL)
d.aW(B.fQi,B.fVP,D.aw,0.4)
d.aW(B.h4a,B.fUf,D.ds,0.5)
for(u=0;u<2;++u){t=E.ayQ[u]
for(s=0;s<2;++s){v=B.cbS[s]
d.dL(new A.r(t,9,v-1.5),new A.r(t,9,v+1.5),5,D.av,8)}}d.x=0
this.rk(d,0,78,24,D.aR)
e.push(B.bYG)
e.push(B.bYz)
e.push(B.bYH)},
aUg(a5,a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=a6*128
A:{if(1===a7){w=B.d76
break A}if(2===a7){w=B.d8o
break A}w=B.d2k
break A}a5.x=$.dP=$.dP+1
a5.aO(new A.r(a6*148,40,120),B.fVE,B.ae6)
for(v=0;v<2;++v)a5.aO(new A.r(a4,40,B.cFy[v]),B.fVk,B.ae6)
a5.aO(new A.r(a4,4,120),B.fVl,B.bgo)
for(u=0;u<4;++u)a5.aW(new A.r(a4,11+u*18,120),B.fVg,B.bps,0.1)
for(t=a7===0,s=w.length,r=a6*2.7,u=0;u<4;++u){q=12+u*18
for(p=q+6.6,o=q+3.2,n=u*7,m=q+10,l=q+12.5,k=q+7,j=q+8,i=q+2.5,h=q+5.5,g=0;g<9;++g){f=76+g*11
for(e=n+g*3,d=u+g+a7,a0=0;a0<2;++a0){a1=a6*(114+a0*14)
a2=w[D.o.F(e+a0*5+a7,s)]
switch(D.o.F(d+a0,4)){case 0:a5.dP(new A.r(a1,q,f),new A.r(a1,j,f),3.2,a2,0.3,8)
a5.aEf(new A.r(a1,i,f),new A.r(a1,h,f),3.3,D.c,!1,8)
break
case 1:a5.aW(new A.r(a1,k,f),B.fZd,a2,0.1)
a5.aO(new A.r(a1-r,j,f),B.h1y,D.c)
break
case 2:a5.dP(new A.r(a1,q,f),new A.r(a1,m,f),2.4,a2,0.45,8)
a5.dL(new A.r(a1,m,f),new A.r(a1,l,f),1.2,D.c,6)
break
default:a3=t?B.bpy:a2
a5.aW(new A.r(a1,o,f),B.h10,a3,0.05)
a3=t?B.bd5:D.c
a5.aO(new A.r(a1,p,f),B.fY_,a3)}}}}a5.x=0},
aTf(d,e){var w,v,u,t,s,r,q,p
d.x=$.dP=$.dP+1
d.aW(new A.r(e,32,11),B.fW_,D.bO,0.3)
d.aO(new A.r(e,33,22.4),B.fVQ,D.bm)
for(w=e-21,v=0;v<3;++v){u=v*17
d.aO(new A.r(e,15+u,21),B.fVL,D.bL)
for(t=16+u,u=27+u,s=v*2,r=0;r<7;++r){q=w+r*7
d.dP(new A.r(q,t,21.6),new A.r(q,u,21.6),2.2,B.cY5[D.o.F(r+s,6)],0.5,6)}}d.x=0
p=d.f
d.f=3
d.d=0.2
d.aO(new A.r(e,33,23.2),B.h6m,B.Yh)
d.d=1
d.f=p},
ctX(d,e){var w,v,u,t,s,r,q,p,o,n=this,m=n.b.b==="gasstation"
d.f=2
d.r=!0
d.x=$.dP=$.dP+1
d.aW(B.aTU,B.fSu,B.nN,0.15)
d.aW(B.aTW,B.fSw,D.bN,0.3)
d.aO(B.fZ2,B.h5U,B.bpE)
d.aW(B.h3T,B.fTJ,D.e5,0.3)
d.aW(B.h3V,B.fT7,D.bb,0.5)
d.aO(B.fR5,B.fSg,D.av)
for(w=0;w<6;++w)d.aO(new A.r(14+w*7.5,33,47),B.fWd,B.dn1[D.o.F(w,4)])
d.x=0
d.x=$.dP=$.dP+1
d.aO(B.aUx,B.aU5,D.cp)
d.aO(B.aUt,B.aUa,D.cS)
d.aO(B.h19,B.h_m,D.vA)
d.fn(B.aUu,5.5,B.ae9,5,8)
d.fn(B.aUv,5.7,B.beb,3,8)
d.x=0
n.aUg(d,-1,0)
n.aUg(d,1,m?2:1)
n.aTf(d,-104)
n.aTf(d,104)
for(v=[B.etB,B.eIm],u=0;u<2;++u){t=v[u]
s=t.a
r=t.b
d.x=$.dP=$.dP+1
d.aO(new A.r(s,5,170),B.fUY,B.afR)
d.aO(new A.r(s,11,160),B.fV_,B.bh6)
for(t=s-13.5,q=J.a4(r),w=0;w<4;++w)for(p=t+w*9,o=0;o<3;++o)d.fn(new A.r(p,12.5,163+o*7.5),4.2,q.h(r,D.o.F(w+o,3)),4,6)
d.x=0}d.x=$.dP=$.dP+1
d.aO(B.aTQ,B.fSn,m?D.bx:D.cS)
d.aO(B.h3t,B.aUl,D.aE)
d.aO(B.fSp,B.aUl,m?D.bm:D.aR)
d.x=0
n.rk(d,-64,120,24,D.bI)
n.rk(d,64,120,24,D.by)
n.rk(d,0,84,22,D.be)
e.push(new A.hd(B.fQ5,m?"\u26fd NGMY Gas shop":"\ud83d\uded2 NGMY Mart",D.M,0))
e.push(B.bYA)
e.push(new A.hd(B.fXm,m?"\ud83d\udee2 For the car":"\ud83d\udc8a Medicine and health",D.j5,0))
e.push(B.bYK)
e.push(B.bYB)
e.push(B.bYL)},
crD(d,e){var w,v,u,t,s
d.aW(B.fRI,B.h6U,D.dX,0.1)
d.aO(B.h5I,B.h2k,B.blo)
d.aW(B.fQk,B.fSD,B.nN,0.15)
for(w=0;w<4;++w){v=B.d9Q[w]
u=v.a
t=v.b
for(s=0;s<2;++s){v=u+B.a3Z[s]
d.aO(new A.r(v,10,t),B.fTN,B.jn)
d.aO(new A.r(v,5,t),B.fUk,D.bl)}}this.rk(d,0,80,24,D.bI)
this.rk(d,90,56,20,D.co)
e.push(B.bYw)
e.push(B.bYE)},
cx8(d,e){var w,v,u,t,s
d.aW(B.fQe,B.fTk,D.bx,0.3)
d.aW(B.h4f,B.fWk,D.bx,0.3)
for(w=0;w<2;++w){v=B.dhP[w]
for(u=0;u<2;++u){t=B.cq_[u]
d.dL(new A.r(v,6,t-1.5),new A.r(v,6,t+1.5),8,D.n5,10)}}for(s=0;s<5;++s)d.aO(new A.r(-142,30,110+s*18),B.fSh,D.al)
d.dL(B.fSl,B.fSm,2,D.bI,6)
this.rk(d,-60,130,24,D.aE)
this.rk(d,80,56,20,D.co)
e.push(B.bYu)
e.push(B.bYF)},
cBe(d,e){var w,v,u,t,s,r,q,p,o,n=this
d.f=1
d.aO(B.h5m,B.h_r,B.dog[D.o.F(n.f,5)])
d.f=2
d.b=19502
d.aO(B.fYs,B.fXr,D.M)
d.aW(B.fW6,B.aUJ,D.br,0.5)
d.aW(B.fUq,B.aUJ,D.br,0.5)
d.aW(B.fUV,B.fS7,D.br,0.5)
d.e=16
d.aW(B.fRU,B.fXU,D.bb,0.4)
d.aO(B.fZc,B.fVc,D.av)
d.aO(B.h34,B.fSe,D.e5)
d.fn(B.fYY,2,D.bI,3,5)
d.fn(B.fVA,2,D.be,3,5)
d.b=d.e=0
n.rk(d,0,70,26,D.aR)
for(w=0;w<3;++w){v=B.cTI[w]
u=v.a
t=v.b
d.aW(new A.r(u,15,t),B.fVo,B.nN,0.2)
d.aO(new A.r(u-19,7,t),B.aUA,D.j7)
d.aO(new A.r(u+19,7,t),B.aUA,D.j7)
d.aW(new A.r(u,24,t-4),B.fSR,E.F_,0.5)
d.aO(new A.r(u,9,t+18),B.fSY,D.cp)
d.aO(new A.r(u,16,t+25),B.fST,D.cp)}n.rk(d,105,100,26,D.be)
d.d=0.3
d.f=3
d.aO(new A.r(144,14,100),B.fVB,B.Yh)
d.d=1
d.f=2
for(w=0;w<5;++w)d.aW(new A.r(144,14,B.d0q[w]),B.h_I,D.dt,0.5)
d.fn(B.fSF,10,B.EA,3,6)
d.aO(B.fSy,B.fUG,B.nN)
s=-(n.f*22)
d.f=-1
d.aO(new A.r(520,s-1,105),B.fXH,B.WK)
d.aO(B.fWO,B.fUn,B.hO)
d.f=1
for(v=n.b.a,r=v*7,q=0;q<15;++q){p=30+D.o.F(r+q*13,90)
o=B.d5x[D.o.F(v+q,4)]
d.aO(new A.r(215+D.o.F(q,5)*80,s+p/2,-60+D.o.an(q,5)*135),new A.r(38,p,38),o)}e.push(new A.hd(B.fQ3,"\ud83c\udfe2 LEVEL "+n.f+" of "+n.gLP(),D.dI,19502))
e.push(B.bYv)
e.push(B.bYx)
n.b9E(d,e)},
bDm(){var w,v,u,t=C.a([],x.z),s=new A.fk(t)
s.f=-1
s.aW(B.fZW,B.h5y,D.br,0.3)
s.f=0
s.x=$.dP=$.dP+1
s.aW(B.h40,B.aUk,B.aeC,0.4)
s.x=0
s.x=$.dP=$.dP+1
s.aW(B.fUX,B.aUk,B.aeC,0.4)
s.x=0
s.f=1
s.aO(B.fQ0,B.fWU,D.aL)
s.f=2
s.r=!0
for(w=0;w<2;++w)s.aW(new A.r(B.ayS[w],40,38),B.fZt,D.bL,0.7)
s.aW(B.fRV,B.h2E,D.xB,0.2)
for(w=0;w<2;++w)s.aW(new A.r(B.dhC[w],45,80),B.fTi,D.aJ,0.3)
s.aW(B.fRS,B.fWT,D.aJ,0.3)
s.aO(B.fRx,B.fUT,D.al)
s.aW(B.h5T,B.aVq,D.av,0.3)
s.aW(B.h_c,B.aVq,D.av,0.3)
v=this.as
D.d.a8(v)
u=x.o
v.push(new A.fJ(C.a([B.h_U,B.fZa,B.h1x,B.h5c],u),0,new A.bIc(this),520,230,6,2,0,!1))
v.push(new A.fJ(C.a([B.fXS,B.fY8,B.h50,B.h20],u),0,new A.bId(),720,600,30,2,0,!1))
v.push(new A.fJ(C.a([B.h_S,B.h33,B.h0P,B.h_q],u),0,new A.bIe(),720,600,30,2,0,!1))
v=C.C(v,x.K)
this.ay=new A.tG(t,B.RD,B.zb,v,null,0)},
b9E(d,e){var w,v,u,t,s,r,q,p,o=this,n="dead, tap to fix it"
d.b=19500
d.aW(B.h3A,B.fWc,B.WO,0.5)
for(w=0;w<4;++w){v=o.c&&w===0?D.ca:B.Yk
d.aO(new A.r(-144.2,62-w*6,45),B.fZF,v)}d.b=0
o.rk(d,-100,100,22,o.c?D.aw:D.be)
o.rk(d,90,100,22,D.co)
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
d.aO(B.fVy,B.fTA,o.c?D.aw:D.be)
d.b=19501
d.aO(B.fXK,B.fYn,t?D.be:D.aw)
d.aO(B.h4i,B.fYK,s?D.be:D.aw)
d.aO(B.fZH,B.h0H,r?D.be:D.aw)
d.d=1
d.aW(B.h3f,B.fYW,B.LZ,0.25)
for(q=0;q<2;++q)for(u=26+F.jc[q]*3.4,p=0;p<2;++p)d.aO(new A.r(95+B.QG[p],u,2.6),B.h_y,B.afD)
d.aW(B.h5p,B.h1m,B.LZ,0.25)
d.aO(new A.r(-60,s?52:48,2.8),B.fUm,B.ahg)
d.b=0
d.f=2
if(o.c)v=v.length===0?"\u26a1 Breaker panel: tap to switch the power on":"\u26a1 Breaker panel: still to fix: "+D.d.aG(v,", ")
else v="\u26a1 Breaker panel: all fine"
e.push(new A.hd(B.h3z,v,o.c?D.bx:D.eh,19500))
v=new A.bIf(o)
u=t?"\ud83d\udd0c Outlets: fixed":"\ud83d\udd0c Outlet: "+C.w(v.$2(D.a25,n))
e.push(new A.hd(B.fXL,u,t?D.eh:D.bx,19501))
u=s?"\ud83d\udca1 Switch: fixed":"\ud83d\udca1 Switch: "+C.w(v.$2(B.cnQ,"no power, tap to fix it"))
e.push(new A.hd(B.h4j,u,s?D.eh:D.bx,19501))
v=r?"\ud83d\udca1 Ceiling light: fixed":"\ud83d\udca1 Ceiling light: "+C.w(v.$2(B.cgn,n))
e.push(new A.hd(B.fQ4,v,r?D.eh:D.bx,19501))
if(o.c)e.push(B.bYt)},
cLS(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=x.z,i=C.a([],j),h=new A.fk(i),g=k.a,f=g==="tower"
if(f||g==="cabin"){w=C.a([],j)
v=new A.fk(w)
if(f){v.e=16
for(u=0;u<2;++u)v.aW(new A.r(F.jc[u]*(24+21*k.y),42,6.6),B.h5_,D.aP,0.7)}else{v.e=16
for(u=0;u<2;++u)v.aW(new A.r(F.jc[u]*(9+18*k.y),40,78.6),B.fTh,D.aL,0.7)}D.d.v(i,w)}switch(g){case"shop":A.wC(h,B.ekG,d,B.IH,!1,0,D.b5)
break
case"hospital":A.wC(h,B.ekK,d,B.SL,!1,0,D.bP)
t=D.k.F(d*12,220)
g=t<110
f=g?t:220-t
g=g?0:3.141592653589793
A.wC(h,A.ata(!1,0,-1,"",!1,0,"",-1,t/12,!1,!1,!1,0,!1,!0,6,g,40+f),d,B.IH,!1,0,D.bO)
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
A.wC(new A.fk(f),B.ekJ,d,p,!1,0,p.c)
D.d.v(i,A.o8(f,-1.5707963267948966,-1.5707963267948966,new A.r(46,27,48+r*50)))}++r}}break
case"school":A.wC(h,B.ekL,d,B.SL,!1,0,D.bi)
for(u=0;u<3;++u){g=B.d3T[u]
A.wC(h,new A.xS(0,g.a,g.b,3.141592653589793,!1,!1,!1,!1,!1,0,!1,!1,"","",-1,0,-1,0),d,B.IH,!1,0,g.c)}break
case"firestation":A.wC(h,B.ekH,d,B.IH,!1,0,D.bx)
A.wC(h,B.ekI,d,B.SL,!1,0,D.aE)
break
default:break}g=k.at
g===$&&C.c()
f=g.f
w=g.r
o=g.w
n=g.x
m=g.y
l=g.z&&n
A.wC(h,A.ata(!1,0,-1,"",!1,g.Q,"",-1,m,!1,!1,!1,0,l,n,f,o,w),d,e,!0,0,null)
if(k.cx!=null){j=C.a([],j)
new A.fk(j).aO(new A.r(g.f+Math.sin(g.w)*9,48+g.Q,g.r+Math.cos(g.w)*9),B.aUb,B.jn)
D.d.v(i,j)}return i},
gda(d){return this.e}}
A.F7.prototype={}
A.OI.prototype={
gTZ(){var w,v=this
if(!v.f)return"has died"
if(v.r>=0)return"in hospital"
if(v.c<30)return"in danger"
if(v.e)return"sick"
w=v.b
if(w>80)return"starving"
if(w>55)return"hungry"
if(v.d<40)return"unhappy at home"
return"fine"},
gaCX(d){var w,v=this.gTZ()
A:{if("has died"===v){w="\ud83d\udd6f"
break A}if("in hospital"===v){w="\ud83c\udfe5"
break A}if("in danger"===v){w="\ud83c\udd98"
break A}if("sick"===v){w="\ud83e\udd12"
break A}if("starving"===v||"hungry"===v){w="\ud83c\udf7d"
break A}if("unhappy at home"===v){w="\ud83d\ude1f"
break A}w="\ud83d\ude42"
break A}return w}}
A.HQ.prototype={}
A.LK.prototype={}
A.aSO.prototype={
bxH(d,e){var w,v=C.a([],x.fP)
for(w=0;w<7;++w)v.push(new A.OI(B.Cz[w]))
this.c=v
v[1].b=55
v[4].b=40},
gBY(){var w,v,u,t=C.a([],x.fP),s=this.c
s===$&&C.c()
w=s.length
v=0
for(;v<s.length;s.length===w||(0,C.M)(s),++v){u=s[v]
if(u.f)t.push(u)}return t},
gcKR(){var w=this.c
w===$&&C.c()
return new C.Z(w,new A.bJ_(),C.S(w).k("Z<1>")).gL(0)},
Pw(d){var w=this.f
D.d.c9(w,0,d)
if(w.length>12)w.pop()},
aCE(a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this
a1.as+=a3
for(w=a1.gBY(),v=w.length,u=-0.6*a3,t=0.8*a3,s=0.2*a3,r=a1.b,q=0.012*a3,p=a1.f,o=0.15*a3,n=0;n<w.length;w.length===v||(0,C.M)(w),++n){m=w[n]
l=a4.d
l===$&&C.c()
k=m.a
j=l[k.c]
i=j.gkF()
l=k.d
if(l>=0)h=!a4.d[l].gjM()
else{l=j.c
h=(l==="bathroom"||l==="kitchen")&&!j.gjM()}if(m.r<0){m.b=Math.min(100,m.b+s)
l=i?0:45
g=h?35:0
f=m.d
f+=D.k.E(100-l-g-f,u,t)
m.d=f
if(!m.e)l=(f<40||m.b>85)&&r.aj()<q
else l=!1
if(l){m.e=!0
D.d.c9(p,0,k.b+" has fallen sick. Give medicine, or send them to the hospital.")
if(p.length>12)p.pop()}e=m.b>=95?0.9:0
if(m.e)e+=0.55
if(m.d<15)e+=0.4
if(e>0)l=m.c=m.c-e*a3
else{l=m.c
if(l<100){l=Math.min(100,l+o)
m.c=l}}if(l<=0)a1.aRk(m)}}for(w=a1.e,v=1.2*a3,u=2.2*a3,d=0;d<w.length;++d){a0=w[d]
t=a0.a
if(t<0)continue
s=a1.c
s===$&&C.c()
m=s[t]
if(!m.f){a0.a=-1
continue}t=a0.b=Math.max(0,a0.b-a3)
if(t>30)a0.c=Math.min(100,a0.c+u)
else if(t<=0)if((m.c-=v)<=0){a1.aRk(m)
a0.a=-1
continue}if(a0.c>=100){m.e=!1
m.r=-1
m.c=Math.max(m.c,80)
m.b=Math.min(m.b,30)
a0.a=-1
a0.c=0
a0.b=100
a1.r+=8;++a1.z
D.d.c9(p,0,m.a.b+" is better and went home. +8 points.")
if(p.length>12)p.pop()}}for(w=a1.d,v=w.length,n=0;n<v;++n)w[n].f+=a3
a1.Nj(a4)
if((a1.at-=a3)<=0){a1.at=60+r.aj()*50
a1.cGg(a4)}},
aRk(d){var w
d.f=!1
d.c=0
w=d.r
if(w>=0)this.e[w].a=-1
d.r=-1
D.d.bt(this.d,new A.bIX(d))
this.Pw(d.a.b+" has died. Keep up with everybody's needs: food, medicine and a home that works.")},
aV4(d,e){return D.d.b3(this.d,new A.bIY(d,e))},
Nj(d){var w,v,u,t,s,r,q,p,o,n=this,m=n.d,l=C.C(m,x.fC),k=l.length,j=n.f,i=0
for(;i<l.length;l.length===k||(0,C.M)(l),++i){w=l[i]
v=B.Cz[w.b]
u=w.c==="power"
if(u){t=d.d
t===$&&C.c()
s=t[v.c].gkF()}else{t=v.d
r=d.d
if(t>=0){r===$&&C.c()
t=r[t].gjM()
s=t}else{r===$&&C.c()
t=r[v.c].gjM()
s=t}}if(s){D.d.W(m,w)
t=w.e
n.r=n.r+t;++n.y
u=u?"power is back":"leak is fixed"
D.d.c9(j,0,v.b+"'s "+u+". +"+t+" points. Thank you!")
if(j.length>12)j.pop()}}for(l=n.gBY(),k=l.length,u=n.b,i=0;i<l.length;l.length===k||(0,C.M)(l),++i){q=l[i]
if(m.length>=4)break
t=d.d
t===$&&C.c()
r=q.a
p=t[r.c]
if(!p.gkF()&&!n.aV4(r.a,"power")){m.push(new A.HQ(n.Q++,r.a,"power",B.cXT[u.au(3)],15))
D.d.c9(j,0,r.b+" is calling for help: no power.")
if(j.length>12)j.pop()}t=r.d
o=t>=0?d.d[t]:p
t=o.c
if((t==="bathroom"||t==="kitchen")&&!o.gjM()&&!n.aV4(r.a,"leak")&&m.length<4){m.push(new A.HQ(n.Q++,r.a,"leak",B.d5m[u.au(3)],15))
D.d.c9(j,0,r.b+" is calling for help: a leak.")
if(j.length>12)j.pop()}}},
cGg(d){var w,v,u,t,s,r,q=this
if(q.d.length>=3||q.gBY().length===0)return
w=q.b
v=q.gBY()[w.au(q.gBY().length)]
u=d.d
u===$&&C.c()
t=v.a
s=u[t.c]
t=t.d
r=t>=0?u[t]:s
u=r.c
if((u==="bathroom"||u==="kitchen")&&r.gjM()&&w.he()){r.ch=!0
r.fr=null}else if(s.gkF()){s.ay=!0
s.CW=null
s.fy=!1
s.fx.a8(0)}else return
q.Nj(d)},
bdG(d){var w,v,u,t=this
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
t.Pw(u)
return u},
aJZ(d){var w,v,u=this
if(!d.f)return d.a.b+" has died."
if(!d.e)return d.a.b+" is not sick."
w=u.x
if(w<=0)return y.D
u.x=w-1
d.e=!1
d.c=Math.min(100,d.c+20)
u.r+=3
v=d.a.b+" took the medicine and is better. +3 points."
u.Pw(v)
return v},
aCD(d){var w,v,u,t
if(!d.f)return d.a.b+" has died."
if(d.r>=0)return d.a.b+" is already in hospital."
if(!d.e&&d.c>60)return d.a.b+" is not ill enough for the hospital."
w=this.e
v=D.d.bg(w,new A.bIZ())
if(v<0)return"The hospital is full. Treat the patients first, they go home when they are better."
w=w[v]
u=d.a
w.a=u.a
w.b=100
w.c=0
d.r=v
t=u.b+" is in bed "+(v+1)+" of the hospital. Keep up with their care."
this.Pw(t)
return t},
biR(d){var w,v,u=this,t=u.e[d],s=t.a
if(s<0)return"This bed is empty."
if(t.b>70)return"The patient is cared for already."
w=u.x
if(w<=0)return y.D
u.x=w-1
t.b=100;++u.r
w=u.c
w===$&&C.c()
v=w[s].a.b+" was treated. +1 point."
u.Pw(v)
return v},
aD8(d){var w,v=this
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
cPP(d){return d.r<0},
bdR(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=C.a([],x.e3),e=d.d
e===$&&C.c()
w=e[a0]
if(w.c!=="outside")return f
v=new A.bJ1(new A.bJ3(w))
for(e=D.d.gaf(this.gBY()),u=new C.f5(e,this.gcPO()),t=this.d,s=0;u.C();){r=e.gT(0)
q=D.d.b3(t,new A.bJ0(r))
p=v.$2(r,s).a
o=p[0]
n=p[1]
m=p[2]
l=p[3]
k=p[4]
p=r.a
j=q?0.4:m
i=q?"\ud83d\udcde ":""
h=r.gaCX(0)
r.gTZ()
r=q?"":l
g=q?"":k
f.push(new A.a9A(p.a,a0,o,n,j,p.e,i+p.b+" "+h,q,0,r,g));++s}return f},
cWw(a2){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.r,j=l.w,i=l.x,h=l.y,g=l.z,f=l.as,e=l.Q,d=x.ez,a0=C.a([],d),a1=l.c
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
for(r=a2.gqH(),q=r.length,t=0;t<r.length;r.length===q||(0,C.M)(r),++t){n=r[t]
u.n(0,""+n.a,n.gkF())}w=C.U(v,w)
for(r=D.d.gaf(a2.gqH()),q=new C.f5(r,new A.bJ4());q.C();){m=r.gT(0)
w.n(0,""+m.a,m.gjM())}return C.G(["v",1,"seed",l.a,"points",k,"food",j,"medicine",i,"served",h,"saved",g,"clock",f,"nextCall",e,"res",a0,"beds",a1,"calls",d,"wired",u,"plumbed",w],v,x.A)},
CK(d,e){return this.bmT(0,e)},
bmT(d,e){var w=0,v=C.j(x.H),u=1,t=[],s=this,r,q,p,o
var $async$CK=C.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return C.b(C.az(),$async$CK)
case 6:r=g
q=C.dO(s.cWw(e),x.N,x.A)
J.aG(q,"at",Date.now())
w=7
return C.b(r.aq("String","ngmy_community_v1",D.S.ao(q,null)),$async$CK)
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
return C.i($async$CK,v)}}
A.apb.prototype={
U(){return new A.bjc()}}
A.bjc.prototype={
gbiC(){var w=this.r
return w===$?this.r=this.a.c:w},
a_(){this.a1()
this.Zv()},
Zv(){return this.c0G()},
c0G(){var w=0,v=C.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$Zv=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:m={}
w=3
return C.b(A.aSQ(),$async$Zv)
case 3:l=e
if(t.c==null){w=1
break}m.a=null
if(l!=null){s=J.a4(l)
r=C.aK(s.h(l,"seed"))
q=r==null?null:D.k.O(r)
if(q==null)q=1
r=$.DS
if((r==null?null:r.b)===q){r.toString
t.e=r}else{r=A.aVe(q)
t.e=$.DS=r
A.h6w(r,l)}m.a=A.fTF(l)
r=Date.now()
s=C.aK(s.h(l,"at"))
s=s==null?null:D.k.O(s)
p=D.k.E((r-(s==null?Date.now():s))/1000*0.15,0,90)
while(p>0){o=p>5?5:p
s=m.a
r=t.e
r===$&&C.c()
s.aCE(0,o,r)
p-=o}}else{s=$.DS
if(s==null)s=$.DS=A.aVe(D.o.F(Date.now(),1e5))
t.e=s
s=s.b
n=A.fTE(s,s)
m.a=n
n.Nj(t.e)}$.ajr=m.a
t.m(new A.dNY(m,t))
t.f=C.dq(D.fO,new A.dNZ(t))
case 1:return C.h(u,v)}})
return C.i($async$Zv,v)},
c6a(){var w,v,u,t=this,s=t.d
if(s==null||t.c==null)return
w=s.f
v=w.length===0?"":D.d.gI(w)
u=t.e
u===$&&C.c()
s.aCE(0,1,u)
if(w.length!==0&&D.d.gI(w)!==v)t.IR(D.d.gI(w))
if(++t.y%8===0)s.CK(0,t.e)
t.m(new A.dOa())},
t(){var w,v=this,u=v.f
if(u!=null)u.a4(0)
u=v.x
if(u!=null)u.a4(0)
u=v.d
if(u!=null){w=v.e
w===$&&C.c()
u.CK(0,w)}v.a2()},
IR(d){var w=this,v=w.x
if(v!=null)v.a4(0)
w.m(new A.dO4(w,d))
w.x=C.cM(D.tR,new A.dO5(w))},
abm(d){return this.bSh(d)},
bSh(d){var w=0,v=C.j(x.H),u,t=this,s,r,q
var $async$abm=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:q=B.Cz[d.b]
if(d.c==="power")s=q.c
else{r=q.d
s=r>=0?r:q.c}r=t.e
r===$&&C.c()
r.e=s
r=t.c
r.toString
w=3
return C.b(C.a3(r,!1).cg(C.e_(new A.dNU(),!1,null,x.H)),$async$abm)
case 3:if(t.c==null){w=1
break}r=t.d
if(r!=null)r.Nj(t.e)
r=t.d
if(r!=null)r.CK(0,t.e)
t.m(new A.dNV())
case 1:return C.h(u,v)}})
return C.i($async$abm,v)},
aju(d){return this.cDN(d)},
cDN(d){var w=0,v=C.j(x.H),u,t=this,s
var $async$aju=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:s=t.e
s===$&&C.c()
s.e=d.a.c
s=t.c
s.toString
w=3
return C.b(C.a3(s,!1).cg(C.e_(new A.dOd(),!1,null,x.H)),$async$aju)
case 3:if(t.c==null){w=1
break}s=t.d
if(s!=null)s.Nj(t.e)
t.m(new A.dOe())
case 1:return C.h(u,v)}})
return C.i($async$aju,v)},
Zw(d,e){var w=null,v=e.j(0.18),u=C.m(14),t=C.I(e.j(0.7),D.r,1)
return C.p(w,C.d(d,w,w,w,w,w,w,C.l(w,w,e,w,w,w,w,w,w,w,w,12.5,w,w,D.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),D.f,w,w,new C.o(v,w,t,u,w,w,D.n),w,w,w,w,L.aik,w,w,w)},
Wa(d,e,f){var w=null
return new C.D(D.ng,C.B(C.a([new C.a8(62,w,C.d(d,w,w,w,w,w,w,A2.a8K,w,w,w),w),C.E(C.bx(C.m(6),C.li(D.bz,w,w,8,w,D.k.E(e/100,0,1),new C.m4(f,x.dw)),D.aq),1)],x.p),D.m,w,D.e,D.j,0,w,w),w)},
Px(d,e,f){var w=null,v=e==null,u=v?D.dr:f.j(0.22),t=C.m(12),s=C.I(v?D.aZ:f,D.r,1)
return C.aB(w,C.p(w,C.d(d,w,w,w,w,w,w,C.l(w,w,v?D.bX:f,w,w,w,w,w,w,w,w,12.5,w,w,D.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),D.f,w,w,new C.o(u,w,s,t,w,w,D.n),w,w,w,w,D.ni,w,w,w),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,e,w,w,w,w,w,w,!1,D.a4)},
adO(d,e){return this.Px(d,e,D.aE)},
Py(d,e){var w=null,v=C.a([e.j(0.1),B.F4],x.O),u=C.m(18)
return C.p(w,d,D.f,w,w,new C.o(w,w,C.I(e.j(0.5),D.r,1),u,w,new C.a9(D.b3,D.b6,D.x,v,w,w),D.n),w,w,w,D.d3,D.bj,w,w,w)},
c66(d){return this.Py(d,D.aZ)},
aYW(d,e,f){var w,v=null,u=this.gbiC()===d,t=u?D.aE.j(0.22):D.c.j(0.06),s=C.m(14),r=u?D.aE:D.aZ
r=C.I(r,D.r,u?2:1)
w=f>0?e+" ("+f+")":e
return C.E(C.aB(v,C.p(v,C.au(C.d(w,v,v,v,v,v,v,C.l(v,v,u?D.aE:D.ae,v,v,v,v,v,v,v,v,12.5,v,v,D.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,v),D.f,v,v,new C.o(t,v,r,s,v,v,D.n),v,v,v,D.jx,D.jJ,v,v,v),D.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new A.dOc(this,d),v,v,v,v,v,v,!1,D.a4),1)},
awT(d,e){return this.aYW(d,e,0)},
bF1(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=d.d
if(l.length===0)return new C.D(D.eC,C.x(B.de8,D.m,m,D.e,D.j,0,D.p),m)
w=x.p
v=C.a([],w)
for(u=l.length,t=0;t<l.length;l.length===u||(0,C.M)(l),++t){s=l[t]
r=s.c==="power"
q=r?D.bI:D.co
p=B.Cz[s.b]
o=r?"\u26a1 Power":"\ud83d\udeb0 Leak"
r=r?D.bI:D.co
v.push(n.Py(C.x(C.a([new C.cb(D.aM,D.e,D.j,D.m,m,D.p,m,0,C.a([new A.acj(p.e,44,m),D.as,new C.bA(1,D.bd,new C.y(p.b,m,D.hI,m,m,m,m,m,m,m,m,m),m),n.Zw(o+"  +"+s.e,r)],w),m),D.N,new C.y('"'+s.d+'"',m,B.fgO,m,m,m,m,m,m,m,m,m),D.R,new C.bK(D.a8,m,m,n.adO("\ud83d\udd27 Go and fix it",new A.dNT(n,s)),m)],w),D.E,m,D.e,D.j,0,D.p),q))}return C.x(v,D.m,m,D.e,D.j,0,D.p)},
c68(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=x.p,k=C.a([],l),j=d.c
j===$&&C.c()
w=j.length
v=0
for(;v<j.length;j.length===w||(0,C.M)(j),++v){u=j[v]
t=u.f
if(!t)s=D.aZ
else s=u.gTZ()==="fine"?D.bo:D.cs
t=t?1:0.5
r=u.a
q=u.gaCX(0)
p=u.gTZ()
o=u.gTZ()==="fine"?D.eo:D.f3
r=C.a([new C.cb(D.aM,D.e,D.j,D.m,m,D.p,m,0,C.a([new A.acj(r.e,50,m),D.as,new C.bA(1,D.bd,C.x(C.a([new C.y(r.b+"  "+q,m,D.hI,m,m,m,m,m,m,m,m,m),new C.y(r.f,m,B.aQZ,m,m,m,m,m,m,m,m,m),new C.y("Now: "+p,m,new C.F(!0,o,m,m,m,m,12.5,D.H,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m,m,m,m,m,m,m)],l),D.E,m,D.e,D.j,0,D.p),m)],l),m),D.N,n.Wa("Food",100-u.b,D.cY),n.Wa("Health",u.c,D.bo),n.Wa("Home",u.d,D.co)],l)
if(u.f){q=n.adO("\ud83c\udf5e Feed",new A.dO_(n,d,u))
p=n.Px("\ud83d\udc8a Medicine",u.e?new A.dO0(n,d,u):m,D.by)
D.d.v(r,C.a([D.am,new C.Cl(D.bB,8,8,D.bs,C.a([q,p,n.Px("\ud83c\udfe5 Hospital",u.r>=0?m:new A.dO1(n,d,u),D.cs),n.Px("\ud83c\udfe0 Visit",new A.dO2(n,u),D.b1)],l),m)],l))}k.push(n.Py(new C.kH(t,C.x(r,D.E,m,D.e,D.j,0,D.p),m),s))}return C.x(k,D.m,m,D.e,D.j,0,D.p)},
c67(d){var w,v,u,t,s=null,r=x.p,q=C.a([B.egt],r)
for(w=d.e,v=0;v<w.length;++v){u=w[v].a<0
t=u?D.aZ:D.cs
q.push(this.Py(u?new C.cb(D.aM,D.e,D.j,D.m,s,D.p,s,0,C.a([B.fFP,D.as,new C.y("Bed "+(v+1)+": empty",s,B.fam,s,s,s,s,s,s,s,s,s)],r),s):new C.fd(new A.dNX(this,d,v),s),t))}return C.x(q,D.m,s,D.e,D.j,0,D.p)},
c69(d){var w=this,v=null,u=x.p,t=w.Py(C.B(C.a([B.frr,D.as,B.bC4,w.adO("Buy",new A.dO7(w,d))],u),D.m,v,D.e,D.j,0,v,v),D.cY),s=w.Py(C.B(C.a([B.fMM,D.as,B.bCj,w.Px("Buy",new A.dO8(w,d),D.by)],u),D.m,v,D.e,D.j,0,v,v),D.by),r=C.a([B.fGP,D.am,C.d("Calls answered: "+d.y+"\nPatients sent home better: "+d.z+"\nPeople lost: "+d.gcKR(),v,v,v,v,v,v,B.aRV,v,v,v)],u)
if(d.gBY().length===0)D.d.v(r,C.a([D.R,w.adO("Start a new community",new A.dO9(w))],u))
return C.x(C.a([t,s,w.c66(C.x(r,D.E,v,D.e,D.j,0,D.p))],u),D.m,v,D.e,D.j,0,D.p)},
B(d){var w,v,u,t,s,r,q=this,p=null,o=q.d
if(o==null)w=D.ml
else{w=x.p
v=C.B(C.a([C.aI(p,p,p,p,R.nq,p,p,p,new A.dOf(d),p,p,p,p,p,p),B.bBL,q.Zw("\u2b50 "+o.r,D.aE)],w),D.m,p,D.e,D.j,0,p,p)
u=q.Zw("\ud83c\udf5e "+o.w,D.cY)
t=q.Zw("\ud83d\udc8a "+o.x,D.by)
s=o.e
s=C.B(C.a([u,D.ab,t,D.ab,q.Zw("\ud83c\udfe5 "+new C.Z(s,new A.dOg(),C.S(s).k("Z<1>")).gL(0)+"/"+s.length,D.cs)],w),D.m,p,D.b7,D.j,0,p,p)
t=C.B(C.a([q.aYW("calls","\ud83d\udcde Calls",o.d.length),q.awT("people","\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc67 People"),q.awT("hospital","\ud83c\udfe5 Hospital"),q.awT("shop","\ud83d\uded2 Shop")],w),D.m,p,D.e,D.j,0,p,p)
r=q.gbiC()
A:{if("people"===r){u=q.c68(o)
break A}if("hospital"===r){u=q.c67(o)
break A}if("shop"===r){u=q.c69(o)
break A}u=q.bF1(o)
break A}w=C.a([new C.D(B.bAc,v,p),new C.D(D.Bp,s,p),new C.D(B.bB5,t,p),D.N,C.E(C.ct(C.a([u],w),p,D.MI,p,p,D.ag,!1),1)],w)
if(q.w!=null){v=D.dX.j(0.96)
u=C.m(14)
t=C.I(D.bo,D.r,1)
s=q.w
s.toString
w.push(C.p(p,C.d(s,p,p,p,p,p,p,B.fcX,p,p,p),D.f,p,p,new C.o(v,p,t,u,p,p,D.n),p,p,p,G.ain,D.bj,p,p,1/0))}w=C.x(w,D.m,p,D.e,D.j,0,D.p)}return C.c5(p,D.bZ,C.bm(!0,w,!0,!1,D.af,!0,!0),p,!1,!1,p,p)}}
A.acj.prototype={
B(d){var w=null,v=this.d
return new C.a8(v,v,C.b4(w,w,w,new A.bec(this.c,w),D.az),w)},
gY(d){return this.d}}
A.bec.prototype={
a6(d,e){var w,v,u,t,s=e.a,r=s/2,q=$.W(),p=C.K()
p.r=D.dr.gp(0)
d.ae(new C.t(r,r),r,p)
p=d.a
J.bq(p.save())
q=new C.aJ(q.r,D.ak,null,null,C.a([],x.g))
r=0+s
q.D(new C.jy(new C.a5(0,0,r,r)))
d.mB(0,q)
q=s*0.1
r=s*0.78
w=s*0.5
v=C.K()
u=this.b
v.r=u.c.gp(0)
d.e1(new C.a5(q,r,q+s*0.8,r+w),v)
v=s*0.27
r=s*0.16
t=C.K()
t.r=u.a.gp(0)
d.e1(new C.a5(v,r,v+s*0.46,r+s*0.56),t)
t=s*0.24
r=C.K()
r.r=u.b.gp(0)
d.e0(new C.a5(t,q,t+s*0.52,q+w),3.14,3.14,!0,r)
r=s*0.44
q=s*0.035
t=C.K()
t.r=D.n5.gp(0)
d.ae(new C.t(s*0.42,r),q,t)
t=C.K()
t.r=D.n5.gp(0)
d.ae(new C.t(s*0.58,r),q,t)
t=s*0.4
q=C.K()
q.b=D.ac
q.c=1.4
q.r=D.ev.gp(0)
d.e0(new C.a5(t,w,t+s*0.2,w+s*0.12),0.2,2.7,!1,q)
p.restore()},
aw(d){return!1}}
A.fG.prototype={}
A.Ck.prototype={}
A.ju.prototype={}
A.SH.prototype={}
A.b84.prototype={
gjK(){return this.a==="ok"}}
A.m8.prototype={}
A.fn.prototype={}
A.DN.prototype={}
A.pN.prototype={}
A.abi.prototype={}
A.oh.prototype={}
A.aV8.prototype={
gwv(){var w=this.c
return w.c>=2&&A.KS(A.rZ(this.a),w).a==="ok"},
gda(d){return this.c}}
A.a4S.prototype={
gyW(){var w,v,u=this.p4,t=u==="ptrap"
if(t||u==="faucet"){w=this.RG
if(w==null)return!1
if(t)if(w.a.a===3){u=w.b
u=new C.bc(u,C.a6(u).k("bc<2>")).d8(0,new A.bRY())&&w.c}else u=!1
else u=A.fur(w)&&w.f
return u}v=this.R8
return v!=null&&v.c>=2&&A.KS(A.rZ(u),v).a==="ok"},
Ib(d){var w
if(this.c!=="outside"){w=this.CW
w=w!=null?w.t5(d):!this.ay}else w=!0
return w},
ga5C(){var w=this.p4
if(w.length===0)w=this.Ib(2)
else w=w!=="fan"||this.gyW()
return w},
gLY(){var w=this.p4
if(w.length===0)w=this.Ib(3)
else w=!D.d.q(B.jP,w)||this.gyW()
return w},
gamS(){var w=this.p4
if(w.length===0)w=this.Ib(0)
else w=!D.d.q(B.lA,w)||this.gyW()
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
ghm(d){var w,v=180
if(!this.ok){w=this.c
A:{if("bathroom"===w){v=100
break A}if("kitchen"===w){v=110
break A}if("living"===w){v=120
break A}if("hall"===w)break A
if("outside"===w){v=2100
break A}v=112
break A}}return v},
gkF(){var w,v=this
if(v.c!=="outside"){w=v.p4
if(w.length!==0)w=w==="ptrap"||w==="faucet"||v.gyW()
else{w=v.CW
w=w==null?null:w.gbjn()
if(w==null)w=!v.ay}}else w=!0
return w},
gjM(){var w=this,v=w.c
if(v==="bathroom"||v==="kitchen"){v=w.p4
if(v.length!==0)v=!(v==="ptrap"||v==="faucet")||w.gyW()
else{v=w.fr
v=v==null?null:v.gwv()
if(v==null)v=!w.ch}}else v=!0
return v},
BL(d){var w,v,u,t
for(w=this.x,v=w.length,u=0;u<v;++u){t=w[u]
if(t.a===d)return t}return null},
dv(d,e,f,g){var w=this,v=w.y++,u=f==null?0:f,t=new A.m8(v,e,u,g==null?w.ghm(0)*0.6:g)
w.x.push(t)
w.a3w(0,t)
return t},
M(d,e){return this.dv(0,e,null,null)},
cGS(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=d.k1
if(a0!=null){w=d.c
w=w==="outside"||w==="hall"}else w=!0
if(w)return
v=A.h3L(d,A.aOG(a0),0)
w=v.c
u=v.a/2
t=w-u-6
s=w+u+6
for(w=D.d.gaf(d.x),u=new C.f5(w,new A.bRX());u.C();){r=w.gT(0)
q=B.hr.h(0,r.b)
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
if(f<=d.ghm(0)-m-1)r.d=f
else if(e>=m+1)r.d=e
else r.c=q?h+52+l+1:h-52-l-1}}},
a3w(d,e){var w,v,u,t,s,r=this,q=e.b,p=B.hr.h(0,q)
p.toString
w=(e.e&1)===1
v=w?p.d:p.c
u=w?p.c:p.d
p=v/2
e.c=D.k.E(e.c,-r.gev(0)/2+p+1,r.gev(0)/2-p-1)
p=e.d
t=u/2
s=r.c==="outside"?-760+t:t+1
e.d=D.k.E(p,s,r.ghm(0)-t-1)
if(D.d.q(B.Rb,q)){e.c=D.k.V(e.c/40)*40
e.d=D.k.V(e.d/40)*40}}}
A.aVd.prototype={
bxU(d){var w,v,u
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
break B}u=A.z9(0,w,v,0,0,1,1,C.a([],x.dY))
u.p4=d
u.go=d==="fan"?"fan":"light"
if(d==="gfci")u.Q=5
u.ch=u.ay=!1
u.Q=v==="bathroom"||v==="kitchen"?5:0
u.ok=!0
u.k1="tv150"
u.p2=!0
u.p3=Math.max(0,D.d.bg(E.kg,new A.bSy()))
this.d=C.a([u],x.D)},
cQG(){var w,v,u,t,s,r
for(w=this.gqH(),v=w.length,u=0;u<w.length;w.length===v||(0,C.M)(w),++u){t=w[u]
t.fr=t.CW=null
s=t.ay=!0
r=t.c
t.ch=r!=="bathroom"?r==="kitchen":s
t.fy=!1
t.fx.a8(0)
D.d.a8(t.id)}},
c6b(){var w,v,u,t,s,r,q,p=this,o="back",n="bedroom",m="bathroom",l=new C.en()
l.df(p.b)
w=new A.bSz()
v=x.dY
u=C.a([B.bFD,B.bFA,B.bFB],v)
for(t=0;t<7;++t){s=B.cgk[t]
u.push(new A.oh(!0,o,-150+s.a*50,s.b))}r=p.d=C.a([A.z9(0,"Bedroom 1",n,0,0,2,2,C.a([w.$1(-48)],v)),A.z9(1,"Bedroom 2",n,2,0,2,2,C.a([w.$1(-48)],v)),A.z9(2,"Bathroom 1",m,4,0,1,2,C.a([B.a_T],v)),A.z9(3,"Bedroom 3",n,5,0,2,2,C.a([w.$1(-48)],v)),A.z9(4,"Bathroom 2",m,7,0,2,2,C.a([B.a_T],v)),A.z9(5,"Hall","hall",0,2,9,1,u),A.z9(6,"Bedroom 4",n,0,3,2,2,C.a([w.$1(-48)],v)),A.z9(7,"Bedroom 5",n,2,3,2,2,C.a([w.$1(-48)],v)),A.z9(8,"Bathroom 3",m,4,3,1,2,C.a([B.a_T],v)),A.z9(9,"Kitchen","kitchen",5,3,2,2,C.a([new A.oh(!1,o,-26,5),B.bFF],v)),A.z9(10,"Living room","living",7,3,2,2,C.a([new A.oh(!1,o,-70,5),B.bFE,B.bFC],v)),A.z9(11,"Garden","outside",0,5,9,1,C.a([B.bFz],v))],x.D)
for(v=r.length,t=0;t<r.length;r.length===v||(0,C.M)(r),++t){q=r[t]
u=q.c
if(u==="outside"){p.aTh(q)
continue}q.go=u==="bedroom"?"fan":"light"
q.ay=l.aj()<0.6
q.ch=(u==="bathroom"||u==="kitchen")&&l.aj()<0.7
D.d.hs(q.z,0,3,l.au(8))
A:{if("bathroom"===u){u=5+l.au(2)
break A}if("kitchen"===u){u=5+l.au(2)
break A}if("bedroom"===u){u=2+l.au(3)
break A}if("living"===u){u=l.au(2)
break A}u=l.au(2)
break A}q.Q=u
q.as=l.au(4)
p.aTh(q)}v=p.d
u=v[5]
u.k2=u.k1="tv100"
u.p2=!0
v[3].ay=!0
v[2].ch=!0},
aTh(b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4="plant",a5="roadcross",a6="road",a7="roundabout",a8="house2",a9="bighouse",b0="adboard",b1="flowers",b2=b3.gev(0)/2
switch(b3.c){case"bedroom":b3.dv(0,"rug",0,b3.ghm(0)*0.55)
b3.dv(0,"bed",24,46)
b3.dv(0,"nightstand",-8,14)
b3.dv(0,"wardrobe",-b2+12,70).e=1
b3.dv(0,"desk",b2-14,100).e=3
break
case"living":b3.dv(0,"rug",0,70)
b3.dv(0,"sofa",0,100)
b3.dv(0,"coffee",0,68)
b3.dv(0,"armchair",66,70)
b3.dv(0,a4,76,14)
b3.dv(0,"lamp",-76,14)
break
case"kitchen":b3.dv(0,"dining",0,78)
b3.dv(0,"chair",-24,78).e=1
b3.dv(0,"chair",24,78).e=3
b3.dv(0,a4,58,20)
break
case"bathroom":b3.dv(0,"rug",0,62).e=0
b3.dv(0,a4,b3.gev(0)/2-12,b3.ghm(0)-12)
break
case"outside":for(w=-780;w<=780;w+=40){v=Math.abs(w)<1
b3.dv(0,v?a5:a6,w,420)
b3.dv(0,v?a5:a6,w,860)}for(u=200;u<=820;u+=40){if(Math.abs(u-420)<1||Math.abs(u-860)<1)continue
b3.dv(0,a6,0,u).e=1}for(t=0;t<2;++t){s=B.dhO[t]
for(u=460;u<859;u+=40)b3.dv(0,a6,s,u).e=1}for(t=0;t<3;++t){s=B.dhN[t]
b3.dv(0,a7,s,420)
b3.dv(0,a7,s,860)}r=new A.bSA(b3)
b3.dv(0,"shop",-250,225)
b3.dv(0,"hospital",250,215)
b3.dv(0,"firestation",-480,225)
b3.dv(0,"school",520,210)
for(t=0;t<14;++t){v=B.d6b[t]
w=v.a
u=v.b
if(r.$4(w,u,60,40))b3.dv(0,"billboard",w,u)}for(t=0;t<4;++t){v=B.dlS[t]
w=v.a
u=v.b
if(r.$2(w,u))b3.dv(0,a8,w,u)}for(t=0;t<3;++t){v=B.cUO[t]
u=v.a
q=v.b
p=v.c
for(v=u<900,w=-800;w<=800;w+=q){o=Math.abs(w)
if(o<100)continue
if(v&&o>400)continue
if(r.$2(w,u))b3.dv(0,p&&D.o.F(D.k.e8(w,q),2)===0?a9:a8,w,u)}}for(t=0;t<2;++t){v=B.ctC[t]
w=v.a
u=v.b
if(r.$2(w,u))b3.dv(0,a9,w,u)}for(w=-1220;w<=1220;w+=40){if(Math.abs(w)>780){b3.dv(0,a6,w,420)
b3.dv(0,a6,w,860)}b3.dv(0,a6,w,1460)
b3.dv(0,a6,w,1700)}for(u=900;u<1459;u+=40)b3.dv(0,a6,0,u).e=1
v=C.a([],x._)
for(o=b3.x,n=o.length,t=0;t<o.length;o.length===n||(0,C.M)(o),++t){m=o[t]
l=m.b
if(D.d.q(B.Rb,l)||l==="roundabout")v.push(m)}k=new A.bSC(v,b3)
j=new A.bSD(b3,new A.bSG(b3))
j.$3("gasstation",6,B.d14)
j.$3("dmv",1,B.doy)
j.$3("ubstation",3,B.cT1)
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
e=B.hr.h(0,f)
if(k.$4(w,u,e.c,e.d)){b3.dv(0,f,w,u);++i}}++g}++h}for(d=0,t=0;t<11;++t,d=a0){v=B.cVI[t]
a0=d+1
b3.dv(0,v.b,v.a,1560).f=D.o.F(d,6)}for(t=0;t<11;++t,d=a0){v=B.djN[t]
a0=d+1
b3.dv(0,v.b,v.a,1860).f=D.o.F(d,6)}b3.dv(0,"townsign",0,640)
for(t=0;t<4;++t){v=B.den[t]
b3.dv(0,"cornersign",v.a,v.b)}for(t=0;t<5;++t)b3.dv(0,b0,B.d4m[t],2045)
for(t=0;t<4;++t)b3.dv(0,b0,B.dhR[t],-690)
for(t=0;t<4;++t){u=B.co_[t]
a1=b3.dv(0,b0,-1245,u)
a1.e=1
a1.c=-1245
b3.a3w(0,a1)
a2=b3.dv(0,b0,1245,u)
a2.e=3
a2.c=1245
b3.a3w(0,a2)}for(w=-1200;w<=1200;w+=480){for(t=0;t<4;++t)b3.dv(0,"pole",w,B.csk[t])
for(v=Math.abs(w)<1100,o=w+240,t=0;t<4;++t){u=B.czr[t]
if(v)b3.dv(0,"lamppost",o,u)}}b3.dv(0,"car",-300,490).e=2
b3.dv(0,"ambulance",110,345)
b3.dv(0,"firetruck",-385,345)
for(t=0;t<10;++t){v=B.dns[t]
w=v.a
u=v.b
b3.dv(0,Math.abs(w)>400||u>1000?"pine":"tree",w,u)}b3.dv(0,"bush",-70,20)
b3.dv(0,"bush",70,20)
b3.dv(0,b1,-30,24)
b3.dv(0,b1,30,24)
b3.dv(0,b1,90,205)
b3.dv(0,"bench",-60,195)
b3.dv(0,"bench",150,300)
b3.dv(0,"pond",-160,1340)
b3.dv(0,"dog",60,60)
b3.dv(0,"cat",-50,80)
b3.dv(0,"cow",-640,1280)
b3.dv(0,"cow",-570,1330)
b3.dv(0,"sheep",-500,1300)
b3.dv(0,"horse",560,1330)
b3.dv(0,"chicken",-440,1340)
for(a3=0;a3<4;++a3)b3.dv(0,"fence",-680+a3*64,1220)
for(t=0;t<6;++t){v=B.cz_[t]
b3.dv(0,"crate",v.a,v.b)}break
case"hall":default:}},
gqH(){var w,v,u,t=C.a([],x.D),s=this.d
s===$&&C.c()
w=s.length
v=0
for(;v<s.length;s.length===w||(0,C.M)(s),++v){u=s[v]
if(u.c!=="outside")t.push(u)}return t},
gcXh(){var w=this.gqH()
return new C.Z(w,new A.bSK(),C.S(w).k("Z<1>")).gL(0)},
gcU1(){var w=this.d
w===$&&C.c()
return new C.Z(w,new A.bSJ(),C.S(w).k("Z<1>")).gL(0)},
gcU0(){var w=this.d
w===$&&C.c()
return new C.Z(w,new A.bSI(),C.S(w).k("Z<1>")).gL(0)},
gcMO(){var w=this.gqH()
return new C.Z(w,new A.bSH(),C.S(w).k("Z<1>")).gL(0)}}
A.IE.prototype={
U(){var w,v,u,t,s=new C.y2()
$.yM()
s.hE(0)
w=$.aw()
v=$.hrq()
u=x.S
t=C.a([],x.aQ)
return new A.aDO(s,B.ayj,new C.eI("",w),B.dcE,B.rt,B.rt,D.CF,C.aY(x.N),new C.cy(null,x.eF),v,C.U(u,x.i),C.aY(u),t,D.cW)}}
A.aDO.prototype={
ghH(){var w,v,u=$.ajr
if(u!=null){w=u.a
v=this.d
v===$&&C.c()
v=w===v.b
w=v}else w=!1
return w?u:null},
ayY(){var w,v,u=this.ghH()
if(u==null)u=null
else{w=this.d
w===$&&C.c()
v=w.d
v===$&&C.c()
w=u.bdR(w,v[w.e].a)
u=w}this.fr=u==null?B.ayj:u},
gbhy(){var w=this.d
w===$&&C.c()
w=w.gqH()
return new C.Z(w,new A.e8x(),C.S(w).k("Z<1>")).gL(0)},
a_(){var w,v,u,t,s,r=this
r.a1()
w=r.a.r
if(w.length!==0)w=r.d=A.hAj(w)
else{w=$.DS==null
if(w){w=D.o.F(Date.now(),1e5)
$.DS=A.aVe(w)
r.eg=!0}w=$.DS
w.toString
w=r.d=w}v=r.a
v.toString
u=w.c
w.c=u
u=new A.x5(-0.05,0.1,120,B.fRn,$.aw())
u.f=560
r.e=u
v=v.f
if(v==="city")w.e=11
if(v.length!==0){w=w.gqH()
t=new C.Z(w,new A.e8u(r),C.S(w).k("Z<1>"))
if(!t.gam(0)){w=r.d
w===$&&C.c()
w.e=t.gI(0).a}}A.aV0($.ahe)
A.hck()
r.aik()
r.ayY()
w=r.d
w===$&&C.c()
v=w.d
v===$&&C.c()
w=v[w.e]
v=r.gbhy()
u=r.d
s=u.d
s===$&&C.c()
r.f=A.hmi(w,s[u.e].c!=="outside",B.aOO,"look",v,r.fr,0)
r.adP(!0)
r.Yz()
r.fx=C.dq(D.fP,new A.e8v(r))
$.aV.x1$.push(new A.e8w(r))},
t(){var w=this,v=w.p1
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
v=w.bu
if(v!=null)v.a4(0)
v=w.P
if(v!=null)v.a4(0)
w.a2()},
c0a(){var w,v=this.d
v===$&&C.c()
w=v.a
A:{if("switch"===w){v="The ceiling light is already in. Tap the red switch on the wall and wire it. Then flip it to see the light work."
break A}if("outlet"===w){v="Tap the red outlet on the wall and wire it. Then plug in a lamp or a TV to test it."
break A}if("gfci"===w){v="Tap the red GFCI outlet and wire it. Then plug in a hair dryer to test it."
break A}if("fan"===w){v="Tap the ceiling fan and wire it. Then flip the wall switch and watch it spin."
break A}if("ptrap"===w){v="The sink has no drain yet. Tap the sink and build the drain under it."
break A}v="The faucet is not connected yet. Tap the sink and connect the hoses."
break A}return v},
adP(d){var w,v,u,t,s,r,q=this,p=q.d
p===$&&C.c()
w=p.d
w===$&&C.c()
v=w[p.e]
if(q.z){u=new A.r(0,40,v.ghm(0)*0.5)
t=Math.max(v.gev(0),v.ghm(0))*0.6
p=q.e
p===$&&C.c()
p.e=20
p.f=260
p.w=-1.2
p.x=1.2
p.qX(!0)
s=0.12
r=-0.05}else if(v.c==="outside"){p=q.e
p===$&&C.c()
p.e=30
p.f=2400
p.w=0.03
p.x=1.35
p.qX(!0)
u=B.fRk
t=540
s=0.35
r=-0.25}else if(q.x){u=new A.r(0,46,v.ghm(0)*0.1)
t=v.ghm(0)*0.74
p=q.e
p===$&&C.c()
p.e=6
p.f=v.ghm(0)*0.78
p.w=0.02
p.x=1.35
p.qX(!0)
s=0.05
r=0}else{u=new A.r(0,30,v.ghm(0)*0.45)
t=(v.gev(0)*1.2>v.ghm(0)*1.4?v.gev(0)*1.2:v.ghm(0)*1.4)+30
p=q.e
p===$&&C.c()
p.e=6
p.f=560
p.w=0.1
p.x=1.35
p.qX(!0)
s=0.5
r=-0.12}p=q.e
if(d){p===$&&C.c()
p.d=u
p.c=t
p.a=r
p.b=s}else{p===$&&C.c()
p.hP(t,s,u,r)}},
xO(){return this.adP(!1)},
bMf(d,e){var w,v,u,t,s,r,q,p,o=this,n=o.e
n===$&&C.c()
w=n.cMX(d,e)
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
r=D.k.E(w.c,10,u.ghm(0)-10)
o.e.ap6(new A.r(s,48,r))}else{n=u.c==="outside"
if(n&&o.aK&&o.aB!=null){n=o.aB
n.toString
n.at=new C.z(D.k.E(w.a,-u.gev(0)/2+12,u.gev(0)/2-12),D.k.E(w.c,-290,u.ghm(0)-12))}else{v=o.e
q=w.a
p=w.c
if(n)v.ap7(Math.max(70,v.c*0.4),0.32,new A.r(q,30,p))
else{n=D.k.E(q,-u.gev(0)/2+8,u.gev(0)/2-8)
p=D.k.E(p,8,u.ghm(0)-8)
v.ap7(Math.max(36,o.e.c*0.35),0.2,new A.r(n,40,p))}}}A.fT(560,50,0.25,"tri")},
iz(){var w,v,u,t,s,r,q,p,o=this
o.ayY()
w=o.aH
if(w!=null){v=w.ay
v===$&&C.c()}else{v=o.d
v===$&&C.c()
u=v.d
u===$&&C.c()
v=u[v.e]
u=o.r
t=o.Q
s=o.gbhy()
if(!o.z)if(o.x){r=o.d
q=r.d
q===$&&C.c()
r=q[r.e].c!=="outside"&&o.cx==null}else r=!1
else r=!0
q=o.fr
p=o.bD
v=A.hmi(v,r,p!=null?C.ey([100+p.a],x.S):B.aOO,u,s,q,t)}o.f=v},
ef(d,e){var w=this,v=w.ch
if(v!=null)v.a4(0)
w.m(new A.e7h(w,d,e))
w.ch=C.cM(D.em,new A.e7i(w))},
iA(d){return this.ef(d,!0)},
Pz(d){this.m(new A.e7j(this,d))
A.fT(660,50,0.25,"tri")},
awU(d,e){var w,v=this,u=v.d
u===$&&C.c()
if(d!==u.e){u=u.d
u===$&&C.c()
u=d>=u.length}else u=!0
if(u)return
if(v.aK&&d!==11)v.a2f()
v.cK=v.bD=v.aH=null
if(!e&&v.cx!=null)v.RO()
v.m(new A.e5Q(v,d))
u=v.d
w=u.d
w===$&&C.c()
u=w[u.e]
if(u.c==="outside")v.aB=A.hfL(u,0,24)
v.xO()
A.fT(520,60,0.25,"tri")},
Ar(d){return this.awU(d,!1)},
aWH(d){var w,v,u,t=this
if(d===700){w=t.d
w===$&&C.c()
v=w.d
v===$&&C.c()
return v[w.e].gamS()}if(d===701){w=t.d
w===$&&C.c()
v=w.d
v===$&&C.c()
w=v[w.e]
return w.p4.length!==0||w.Ib(1)}if(d===702){w=t.d
w===$&&C.c()
v=w.d
v===$&&C.c()
return v[w.e].gLY()}if(d===703){w=t.d
w===$&&C.c()
v=w.d
v===$&&C.c()
return v[w.e].ga5C()}if(d>=800&&d<820){u=d-800
w=t.d
w===$&&C.c()
v=w.d
v===$&&C.c()
w=v[w.e].id
return u<w.length&&w[u].gwv()}if(d===720){w=t.d
w===$&&C.c()
v=w.d
v===$&&C.c()
return v[w.e].gamS()}if(d===721){w=t.d
w===$&&C.c()
v=w.d
v===$&&C.c()
w=v[w.e]
return w.p4.length!==0||w.Ib(1)}if(d>=722&&d<728){u=d-720-2
w=t.d
w===$&&C.c()
v=w.d
v===$&&C.c()
w=v[w.e].id
return u<w.length&&w[u].gwv()}w=t.d
w===$&&C.c()
v=w.d
v===$&&C.c()
return v[w.e].gkF()},
b7I(){var w,v,u=this,t=u.d
t===$&&C.c()
w=t.d
w===$&&C.c()
v=w[t.e].go==="fan"
u.m(new A.e7K(u))
t=u.d
w=t.d
w===$&&C.c()
if(w[t.e].fy)t=v?"The fan spins.":"The light is on."
else t=v?"The fan stops.":"The light is off."
u.iA(t)
t=u.d
w=t.d
w===$&&C.c()
A.fT(w[t.e].fy?900:500,60,0.25,"tri")},
c6j(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this
if(a0===0)return
if(a0>=19e3&&a0<19004){w=a0-19e3
v=d.d
v===$&&C.c()
u=v.d
u===$&&C.c()
t=u[v.e]
v=D.o.F(w,2)===0?-1:1
s=v*(t.gev(0)/2-14)
r=w<2?14:t.ghm(0)-14
q=Math.atan2(-s,-(t.ghm(0)/2-r))
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
A.fT(700,70,0.25,"tri")
return}if(a0>=2e4&&a0<23e3){w=d.d
w===$&&C.c()
v=w.d
v===$&&C.c()
m=v[w.e].BL(a0-2e4)
if(m!=null)d.bSj(m)
return}if(a0===19502){w=d.aH
if((w==null?null:w.a==="tower")===!0)d.m(new A.e6N(d))
return}if(a0===19500||a0===19501){l=d.aH
if(l!=null)if(l.c)d.Y8(l)
else d.ef("This one works: the house has power.",!0)
return}if(a0>=900&&a0<920){d.cpc(a0-900)
return}if(a0>=100&&a0<200){w=d.d
w===$&&C.c()
v=w.d
v===$&&C.c()
k=v[w.e].BL(a0-100)
w=d.d
v=w.d
v===$&&C.c()
u=!1
if(v[w.e].c==="outside")if(d.r!=="furniture")if(k!=null){w=k.b
w=w==="hospital"||w==="shop"}else w=u
else w=u
else w=u
if(w){d.zV(k.b)
return}if(d.r!=="furniture")return
d.m(new A.e6O(d,a0))
w=d.d
v=w.d
v===$&&C.c()
m=v[w.e].BL(d.Q)
if(m!=null)d.iA(B.hr.h(0,m.b).a+": move it with the arrows.")
return}if(a0===300||a0===301||a0===302){if(d.r!=="walls")return
d.m(new A.e6P(d,a0))
d.iA("Wall picked. Choose a paint colour.")
return}if(a0>=600&&a0<620){j=a0-600
w=d.d
w===$&&C.c()
v=w.d
v===$&&C.c()
if(j>=v[w.e].w.length)return
if(d.r==="doors"){d.m(new A.e6Q(d,j))
w=d.d
v=w.d
v===$&&C.c()
A.fT(v[w.e].at.q(0,j)?700:450,70,0.25,"tri")
return}d.bM8(j)
return}w=a0===700
v=!w
i=!0
if(v)if(a0!==701){if(a0!==702)if(a0!==703)if(!(a0>=800&&a0<820))u=a0>=720&&a0<728
else u=i
else u=i
else u=i
i=u}if(d.w&&i){h=d.aWH(a0)
A.fT(h?1400:500,160,0.25,"tri")
w=h?"The tester glows and beeps: LIVE, 120 volts. Never touch a live wire. Switch the breaker off first.":"The tester stays dark: no power here. It still needs wiring."
d.ef(w,!h)
return}if(!v||a0===701){if(d.aWH(a0))d.ayz(w?0:1)
else d.aSY()
return}if(a0>=800&&a0<820){j=a0-800
w=d.d
w===$&&C.c()
v=w.d
v===$&&C.c()
w=v[w.e].id
if(j>=w.length)return
g=w[j]
if(!g.gwv())d.ajC(j)
else if(g.a==="switch")d.b7I()
else d.ayz(2+j)
return}if(a0===702||a0===703){w=d.d
w===$&&C.c()
v=w.d
v===$&&C.c()
if(v[w.e].gLY()){w=d.d
v=w.d
v===$&&C.c()
w=!v[w.e].ga5C()}else w=!0
if(w)d.aSY()
else d.b7I()
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
if(!w[u].p2){d.m(new A.e6R(d))
w=d.d
v=w.d
v===$&&C.c()
d.iA("The TV is on and playing "+E.kg[v[w.e].p3].a+".")}else{e=A.aOG(f)
w=d.c
w.toString
I.h3z(w,0,e.a,!0,D.xV,e.b)}return}if(a0>=720&&a0<728){w=d.d
w===$&&C.c()
v=w.d
v===$&&C.c()
u=a0-720
f=v[w.e].fx.h(0,u)
if(f==null)return
e=A.aOG(f)
if(e.d>0||e.e){w=d.c
w.toString
I.h3z(w,0,e.a,!0,D.xV,e.b)}else d.ayz(u)
return}if(a0===710||a0===711||a0===712||a0===713){w=d.d
w===$&&C.c()
v=w.d
v===$&&C.c()
if(!v[w.e].gjM())if(d.d.a.length!==0)d.Ec()
else d.a_M()
else{w=d.f
w===$&&C.c()
j=w.b.h(0,a0)
if(j!=null)d.iA(j.a+": "+j.b)}}},
bM8(d){var w,v,u,t=this.d
t===$&&C.c()
w=t.d
w===$&&C.c()
v=w[t.e].w[d].d
u=v<w.length?w[v].b:"the next room"
t=this.c
t.toString
return C.bT(E.lp,null,new A.e5j(this,u,d,v),t,!0,!0,!1,D.jW,!1,!1,x.H)},
bO9(){var w,v,u=this
u.m(new A.e5s(u))
if(!u.aK){w=u.d
w===$&&C.c()
v=w.d
v===$&&C.c()
w=v[w.e].c==="outside"}else w=!1
if(w)u.a2b()
w=u.d
w===$&&C.c()
v=w.d
v===$&&C.c()
if(v[w.e].c!=="outside")u.xO()},
bOb(){this.m(new A.e5t(this))
this.ef("Phone view: the city fills your phone standing up. Pick a drone film and start filming.",!0)},
bOv(){var w=this
if(w.p4)w.a2e()
w.m(new A.e5u(w))},
ciA(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.c
n.toString
w=C.aH(n,o,x.w).w
n=new A.e6G(p)
v=x.p
u=C.a([C.bU(0,d,0,0,0)],v)
t=w.r.b
if(p.fu)u.push(C.ao(o,C.aB(D.is,B.f00,D.y,!1,o,new A.e6J(p),o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!1,D.a4),o,o,0,o,t,o))
else{s=n.$2(D.cx,p.gbOu())
r=p.p4?D.GK:D.C_
r=n.$2(r,new A.e6K(p))
q=p.h3?B.amG:M.C1
u.push(C.ao(o,C.B(C.a([s,r,n.$2(q,new A.e6L(p)),n.$2(D.un,new A.e6M(p))],v),D.m,o,D.e,D.j,0,o,o),o,o,10,o,t+8,o))}return C.c5(o,D.w,new C.an(D.a_,o,D.aa,D.t,u,o),o,!1,!1,o,o)},
bGy(d){var w,v,u,t,s,r,q=this,p=null,o=q.c
o.toString
w=C.aH(o,p,x.w).w
o=new A.e4U(q)
if(q.er){v=w.a
u=v.b
v=v.a
t=q.a9
s=w.bcn(D.af,new C.at(u,v),D.af)
return C.c5(p,D.w,C.au(new C.xZ(t,C.rm(new C.a8(u,v,new C.an(D.a_,p,D.aa,D.t,C.a([C.bU(0,d,0,0,0),C.ao(p,C.aB(D.is,B.f06,D.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,o,p,p,p,p,p,p,!1,D.a4),p,p,0,p,0,p)],x.p),p),p),s),p),p,p,p),p,!1,!1,p,p)}r=q.f_?w.r.b:0
return C.c5(p,D.w,new C.an(D.a_,p,D.aa,D.t,C.a([C.bU(0,d,0,0,0),C.ao(p,C.aB(D.is,B.f07,D.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,o,p,p,p,p,p,p,!1,D.a4),p,p,0,p,r,p)],x.p),p),p,!1,!1,p,p)},
bQx(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.c
k.toString
w=C.aH(k,l,x.w).w
k=w.a
v=k.b
k=k.a
u=new A.e5E(m)
t=m.a9
s=w.bcn(D.af,new C.at(v,k),D.af)
r=x.p
q=C.a([C.bU(0,d,0,0,0)],r)
if(m.fu)q.push(C.ao(l,C.aB(D.is,B.f0_,D.y,!1,l,new A.e5H(m),l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,!1,D.a4),l,l,0,l,0,l))
else{p=u.$2(Af.a0Q,new A.e5I(m))
o=u.$2(D.a1e,new A.e5J(m))
n=m.h3?B.amG:M.C1
r=C.a([p,o,u.$2(n,new A.e5K(m)),u.$2(D.un,new A.e5L(m))],r)
p=m.d
p===$&&C.c()
o=p.d
o===$&&C.c()
if(o[p.e].c==="outside"){p=m.p4?D.GK:D.C_
r.push(u.$2(p,new A.e5M(m)))}if(m.gajD())r.push(C.aB(l,C.p(l,B.bTa,D.f,l,l,new C.o(D.cS,l,C.I(D.c,D.r,1),l,l,l,D.a6),l,40,l,D.ir,l,l,l,40),D.y,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,m.gaPQ(),l,l,l,l,l,l,!1,D.a4))
q.push(C.ao(l,C.B(r,D.m,l,D.e,D.j,0,l,l),l,l,10,l,10,l))}return C.c5(l,D.w,C.au(new C.xZ(t,C.rm(new C.a8(v,k,new C.an(D.a_,l,D.aa,D.t,q,l),l),s),l),l,l,l),l,!1,!1,l,l)},
czy(d){var w,v,u,t=B.Cz[d.b]
if(d.c==="power")w=t.c
else{v=t.d
w=v>=0?v:t.c}v=this.d
v===$&&C.c()
v=v.d
v===$&&C.c()
u=w<v.length?v[w].b:"the house"
v=this.c
v.toString
return C.bT(D.av,null,new A.e7J(this,t,new A.e7I(),d,u,w),v,!0,!0,!0,S.a7j,!1,!1,x.H)},
c1h(){var w,v,u=this,t=u.d
t===$&&C.c()
w=t.d
w===$&&C.c()
v=w[t.e]
if(v.c==="outside")return
u.m(new A.e63(u))
t=u.e
t===$&&C.c()
t.e=20
t.f=300
t.w=-0.95
t.x=1.35
t.qX(!0)
t=u.e
w=v.ghm(0)
t.hP(Math.max(v.gev(0),v.ghm(0))*0.75,-0.5,new A.r(0,118,w*0.5),-0.05)
u.ef("Looking up at the ceiling from the floor. Drag to look round.",!0)},
gpe(){var w,v,u=this.d
u===$&&C.c()
u=u.d
u===$&&C.c()
w=new C.Z(u,new A.e3T(),C.S(u).k("Z<1>"))
if(!w.gaf(0).C())return null
v=w.gI(0)
u=v.dx
return u==null?v.dx=A.hy8(v):u},
aR6(d){var w,v,u=this
if(d==null)return
w=d.c
if(w>0){v=u.ghH()
if(v!=null)v.r+=w}w=d.a
A.fT(w==="pickup"?700:940,120,0.25,"tri")
u.ef(d.b,w!=="expired")
u.m(u.giP())},
gKi(){var w,v,u,t=this.d
t===$&&C.c()
t=t.d
t===$&&C.c()
w=new C.Z(t,new A.e8a(),C.S(t).k("Z<1>"))
if(!w.gaf(0).C())return null
v=w.gI(0)
t=v.dy
if(t==null){t=C.a([],x.bz)
u=new C.en()
u.df(11)
t=new A.cxd(v,u,t)
t.byD(v,11)
v.dy=t}return t},
bEF(){var w,v,u=this,t=u.ghH()
if(t==null)return
w=u.c5
if(w.w)u.ef("You already have your Uber licence.",!0)
else{v=t.r
if(v<40)u.ef("The licence costs 40 points. You have "+v+". Earn more with jobs and deliveries.",!1)
else{t.r=v-40
w.w=!0
A.fT(880,140,0.25,"tri")
u.ef("You passed! Here is your Uber licence. Drive a car to an Uber station and the people waiting will get in.",!0)}}u.m(new A.e4j())
w=u.aH
if(w!=null)w.B(u.ghH())},
c0f(){var w,v,u,t,s=this,r=null,q=s.ghH(),p=s.c5.w,o=D.w.j(0.55),n=C.m(28),m=C.I(D.aZ,D.r,1),l=x.p,k=C.B(C.a([B.fuB,D.as,B.bCR,C.aB(r,D.rp,D.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new A.e5Z(s),r,r,r,r,r,r,!1,D.a4)],l),D.m,r,D.e,D.j,0,r,r),j=C.d(p?"You are a licensed Uber driver. Drive a car to an Uber station (the yellow and black shelter): the people waiting get in, and you take them to their house. The fare is paid when you get there.":"With the Uber licence you can take the people waiting at the Uber stations home and be paid for every ride. The car needs gas, so watch the gas bar.",r,r,r,r,r,r,B.fb1,r,r,r),i=q==null,h=i?r:q.r
h=C.d("You have "+(h==null?0:h)+" \u2b50",r,r,r,r,r,r,B.fiP,r,r,r)
w=p?new A.e6_(s):s.gbEE()
if(p)v=D.be
else{v=i?r:q.r
v=(v==null?0:v)>=40?D.bI:D.bz}u=C.m(16)
t=p?"\u2713 Licensed":"Get the licence \xb7 40 \u2b50"
if(!p){i=i?r:q.r
i=(i==null?0:i)>=40}else i=!0
return C.p(D.A,C.p(r,C.x(C.a([k,D.R,j,D.R,h,D.R,C.aB(r,C.p(D.A,C.d(t,r,r,r,r,r,r,C.l(r,r,i?D.w:D.bX,r,r,r,r,r,r,r,r,16,r,r,D.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),D.f,r,r,new C.o(v,r,r,u,r,r,D.n),r,50,r,r,r,r,r,r),D.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,w,r,r,r,r,r,r,!1,D.a4)],l),D.ai,r,D.e,D.P,0,D.p),D.f,r,r,new C.o(r,r,m,n,r,B.z1,D.n),r,r,r,D.bC,D.bR,r,r,330),D.f,o,r,r,r,r,r,r,r,r,r,r)},
cBV(d){var w,v,u,t=this,s=t.gKi()
if(s!=null){w=s.c
w===$&&C.c()
w=w.length===0}else w=!0
if(w)return
v=s.cLO(d.f,d.r,t.CW.gii()/1000)
if(v>0){w=t.ghH()
if(w!=null)w.r+=v
A.fT(940,140,0.25,"tri")
t.ef("\ud83d\ude96 You dropped the passenger at the house. Fare: +"+v+" points. Thank you!",!0)
t.m(t.giP())
return}if(s.f==null&&s.apJ(d.f,d.r)!=null&&D.d.b3(s.e,new A.e8b(s,d))){w=t.c5
if(!w.w){if(Date.now()-t.k1>2e4){t.k1=Date.now()
t.ef("People are waiting for a ride, but you need an Uber licence first. Get it at the licence office.",!1)}return}if(w.b<=0)return
u=s.cTT(d.f,d.r)
if(u!=null){A.fT(700,100,0.25,"tri")
t.ef("\ud83d\ude96 "+u.b+" got in. Take them to their house (follow the yellow line): "+u.f+" points.",!0)
t.m(t.giP())}}},
cBU(){var w,v,u,t,s,r,q,p=this,o=p.gKi()
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
return}p.S1(D.d.gI(v))
p.ef("You are at the licence office. Walk in through the door and onto the blue mat to get your Uber licence.",!0)
return}v=o.c
v===$&&C.c()
if(v.length===0){p.ef("There is no Uber station in this town yet.",!1)
return}q=p.aB
v=C.C(v,x.eB)
D.d.aV(v,new A.e89(q))
p.S1(D.d.gI(v))
p.ef("You are at an Uber station. Get in the car parked next to it and drive up to the people waiting. They get in by themselves.",!0)},
aOt(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=" points for the ",i=k.ghH()
if(i==null)return
w=d.a
v=w==="bread"
if(v||w==="medicine"){u=i.aD8(v?"food":"medicine")
t=!D.a.a0(u,"You need")}else{v=d.r
t=!1
if(v>0){w=w==="tank"
s=w?A.h14(k.c5.b):d.e
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
u="You had the "+d.c.toLowerCase()+". "+w}t=!l}}}A.fT(t?880:300,90,0.25,"tri")
k.ef(u,t)
w=k.aH
if(w!=null)w.B(k.ghH())
k.m(k.giP())},
ctY(){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.ghH(),i=l.aH
i=i==null?k:i.b.b==="gasstation"
w=i===!0
i=l.c
i.toString
v=C.aH(i,k,x.w).w.a
i=v.a
u=i>v.b*1.15
t=new A.e7m(u,new A.e7n(l,j,u))
s=C.d(w?"\u26fd":"\ud83d\uded2",k,k,k,k,k,k,D.wN,k,k,k)
r=C.d(w?"NGMY Gas shop":"NGMY Mart",k,k,k,k,k,k,D.fy,k,k,k)
q=j==null?k:j.r
p=x.p
q=C.a([s,D.as,C.E(C.x(C.a([r,C.d("You have "+(q==null?0:q)+" \u2b50",k,k,k,k,k,k,B.fdo,k,k,k)],p),D.E,k,D.e,D.j,0,D.p),1)],p)
if(u)q.push(new C.a8(190,k,new A.U8(l.c5,w,14,k),k))
q.push(D.bc)
q.push(C.aB(k,B.bPU,D.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new A.e7l(l),k,k,k,k,k,k,!1,D.a4))
o=C.B(q,D.m,k,D.e,D.j,0,k,k)
n=t.$2("FOOD AND DRINKS (energy)",B.d5A)
s=w?"GAS":"HEALTH AND THE TOWN"
m=t.$2(s,w?B.dhD:B.der)
t=D.w.j(0.55)
i=u?Math.min(i-24,820):340
s=C.m(28)
r=C.I(D.aZ,D.r,1)
q=C.a([o,D.R],p)
if(!u)D.d.v(q,C.a([new A.U8(l.c5,w,14,k),D.N],p))
if(u)q.push(C.B(C.a([C.E(n,5),D.es,C.E(m,3)],p),D.E,k,D.e,D.j,0,k,k))
else D.d.v(q,C.a([n,m],p))
return C.p(D.A,C.eN(D.A,C.p(k,C.x(q,D.ai,k,D.e,D.P,0,D.p),D.f,k,k,new C.o(k,k,r,s,k,B.z1,D.n),k,k,k,D.bj,D.bR,k,k,i),D.f,D.e0),D.f,t,k,k,k,k,k,k,k,k,k,k)},
cfc(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=this,a1=null,a2=a0.gpe()
a2.toString
w=a0.aB
v=w==null
u=v?a1:w.f
if(u==null)u=0
t=v?a1:w.r
if(t==null)t=300
s=a2.x
r=new A.e6o()
q=new A.e6k(a0,u,t,r,new A.e6n(),s,a2)
p=a2.cW9()
o=["\ud83e\udd47","\ud83e\udd48","\ud83e\udd49","4","5","6"]
v=D.w.j(0.55)
n=C.m(28)
m=C.I(D.aZ,D.r,1)
l=x.p
k=C.a([C.B(C.a([B.fBT,D.as,C.E(C.x(C.a([B.fDE,C.d("Race "+a2.as+": first to 8 wins +40",a1,a1,a1,a1,a1,a1,H.v2,a1,a1,a1)],l),D.E,a1,D.e,D.j,0,D.p),1),C.aB(a1,D.rp,D.y,!1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,new A.e6i(a0),a1,a1,a1,a1,a1,a1,!1,D.a4)],l),D.m,a1,D.e,D.j,0,a1,a1),D.ad],l)
if(s!=null){j=D.bI.j(0.14)
i=C.m(16)
h=C.I(D.bI,D.r,1)
g=s.b
f=C.d(A.KR(g).b,a1,a1,a1,a1,a1,a1,D.JC,a1,a1,a1)
k.push(C.p(a1,C.B(C.a([f,D.as,C.E(C.d(s.r?"You have the "+A.KR(g).c.toLowerCase()+". Take it to the house (follow the yellow line).":"Go to the "+r.$1(s.c).toLowerCase()+" to pick up the "+A.KR(g).c.toLowerCase()+".",a1,a1,a1,a1,a1,a1,D.oy,a1,a1,a1),1),C.aB(a1,B.fsb,D.y,!1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,new A.e6j(a0,a2),a1,a1,a1,a1,a1,a1,!1,D.a4)],l),D.m,a1,D.e,D.j,0,a1,a1),D.f,a1,a1,new C.o(j,a1,h,i,a1,a1,D.n),a1,a1,a1,D.d3,D.bj,a1,a1,a1))}else{j=C.a([B.fGr,D.N],l)
for(a2=a2.qP(0,u,t),a2=C.d1(a2,0,C.dB(6,"count",x.S),C.S(a2).c),i=a2.$ti,a2=new C.bS(a2,a2.gL(0),i.k("bS<ak.E>")),i=i.k("ak.E");a2.C();){h=a2.d
j.push(q.$1(h==null?i.a(h):h))}D.d.v(k,j)}k.push(D.am)
k.push(B.fvu)
k.push(D.N)
for(e=0;e<p.length;++e){a2=p[e].a==="You"?D.aR.j(0.18):D.c.j(0.05)
j=new C.aQ(12,12)
i=p[e]
h=i.a
g=h==="You"
d=new C.ay(g?D.aR:D.dr,1,D.r,-1)
f=o[e]
g=g?D.u:D.O
k.push(C.p(a1,new C.cb(D.aM,D.e,D.j,D.m,a1,D.p,a1,0,C.a([new C.a8(26,a1,new C.y(f,a1,D.aQO,a1,a1,a1,a1,a1,a1,a1,a1,a1),a1),new C.bA(1,D.bd,new C.y(h,a1,new C.F(!0,D.c,a1,a1,a1,a1,a1,g,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1,a1,a1,a1,a1,a1,a1),a1),new C.y(""+i.b+"/8",a1,K.JE,a1,a1,a1,a1,a1,a1,a1,a1,a1),D.as,new C.y(""+i.c+" pts",a1,B.faS,a1,a1,a1,a1,a1,a1,a1,a1,a1)],l),a1),D.f,a1,a1,new C.o(a2,a1,new C.bJ(d,d,d,d),new C.bk(j,j,j,j),a1,a1,D.n),a1,a1,a1,D.eG,D.l2,a1,a1,a1))}return C.p(D.A,C.eN(D.A,C.p(a1,C.x(k,D.ai,a1,D.e,D.P,0,D.p),D.f,a1,a1,new C.o(a1,a1,m,n,a1,B.z1,D.n),a1,a1,a1,D.bC,D.bR,a1,a1,340),D.f,D.e0),D.f,v,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1)},
bSi(d){var w,v,u=this,t=u.aH
if(t==null||t.a!=="tower"||u.ok!=null)return
w=t.f
if(d===w){u.m(new A.e5N(u))
return}u.p2=t
w=new A.eVM(w,d,Date.now())
v=t.at
v===$&&C.c()
w.r=v.f
w.w=v.r
u.ok=w
t.y=u.bb=u.b0=0
u.m(new A.e5O(u))
w=u.e
w===$&&C.c()
w.hP(175,0.28,B.fRo,0)
u.ef("Going to level "+d+": walking to the elevator.",!0)
w=u.p1
if(w!=null)w.bR(0)
w=new A.a4N(u.gcpX(),W.Bh)
w.hE(0)
u.p1=w},
DE(d){var w=D.k.E(d,0,1)
return w*w*(3-2*w)},
cpY(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d="tri",a0=e.ok,a1=e.p2
if(a0==null||a1==null||e.c==null){w=e.p1
if(w!=null)w.bR(0)
return}v=Date.now()
u=(v-a0.c)/1000
w=a0.b
t=a0.a
s=w>t
switch(a0.d){case 0:r=a1.at
r===$&&C.c()
if(u<1){q=e.DE(u/1)
p=a0.r
r.f=p*(1-q)
o=a0.w
n=62-o
r.r=o+n*q
r.w=Math.atan2(-p,n)
r.x=!0}else if(u<1.8){r.f=0
r.r=62
r.w=3.141592653589793
r.x=!1}else if(u<2.5){r.r=62-44*e.DE((u-1.8)/0.7)
r.w=3.141592653589793
r.x=!0}else r.x=!1
r.y+=0.3
a1.y=e.DE((u-0.8)/0.8)
if(u>=2.6){a0.d=1
a0.c=v
a0.f=3+D.o.E(Math.abs(w-t)-1,0,99)*1.1
a0.e=t
m=A.fTy("cabin",a1.b,!1)
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
e.m(e.giP())
w=e.e
w===$&&C.c()
w.N4(54,0.1,B.fRC,3.141592653589793)
A.fT(520,70,0.25,d)}break
case 1:m=e.aH
if(m==null||m.a!=="cabin")return
l=a0.f
if(u<0.9)r=1-e.DE(u/0.9)
else{r=l-0.9
r=u>r?e.DE((u-r)/0.9):0}m.y=r
k=u>0.9&&u<l-0.9
if(k){j=D.o.E(t+D.k.V((w-t)*e.DE((u-0.9)/(l-1.8))),1,m.gLP())
if(j!==a0.e){m.z=a0.e=j
t=s?"\u25b2":"\u25bc"
e.p3.sp(0,t+"  "+C.w(j===1?"L":j))
A.fT(500+j*22,45,0.2,d)}}i=k?1:0.25
t=e.e
t===$&&C.c()
r=Math.sin(u*5.3)
p=Math.sin(u*2.1)
o=Math.sin(u*0.9)
n=Math.sin(u*8)
t.N4(54+p*1.2,0.1+Math.sin(u*6.1)*0.007*i,new A.r(0,52+r*0.5*i,52),3.141592653589793+o*0.5+n*0.01*i)
if(u>l-0.9&&!a0.x){a0.x=!0
m.z=w
e.p3.sp(0,C.w(w===1?"L":w))
A.fT(880,140,0.3,d)
C.bN(D.fF,new A.e7d(),x.H)}if(u>=l){a0.d=2
a0.c=v
h=a1.b.a
t=e.d
t===$&&C.c()
r=t.d
r===$&&C.c()
t=r[t.e].cy.h(0,h)
g=e.gIm().h(0,h*100+w)
a1.f=D.o.E(w,1,a1.gLP())
a1.c=t===w
w=a1.at
w===$&&C.c()
w.f=0
w.r=112
w.w=3.141592653589793
a1.x=!1
a1.CW.a8(0)
a1.B(a1.ch)
e.aiE(a1,g)
a1.B(e.ghH())
w.f=0
w.r=16
w.w=0
w.x=!1
a1.y=1
e.aH=a1
e.m(e.giP())
e.e.N4(175,0.28,B.fRp,0)}break
default:w=a1.at
w===$&&C.c()
q=e.DE(u/1.6)
w.f=0
w.r=16+96*q
w.w=0
w.x=u<1.6
w.y+=0.3
a1.y=1-e.DE((u-1.3)/0.8)
t=e.e
t===$&&C.c()
t.ap6(new A.r(0,40,w.r*0.7+14))
if(u>=2.2){f=a1.c
t=e.p1
if(t!=null)t.bR(0)
e.ok=null
w.x=!1
a1.y=0
e.m(e.giP())
e.e.hP(170,0.4,B.fR3,0)
A.fT(660,80,0.25,d)
w=""+a1.f
e.ef(f?"Level "+w+". This office has no power: walk onto the red mat at the breaker panel, or tap the red frames.":"Level "+w+" of "+a1.gLP()+".",!0)}}},
bND(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.aH
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
r=g.gLP()
q=x.p
s=C.B(C.a([B.fKt,D.as,C.E(C.x(C.a([B.fCF,C.d("You are on level "+s+" of "+r,h,h,h,h,h,h,H.v2,h,h,h)],q),D.E,h,D.e,D.j,0,D.p),1),C.aB(h,D.rp,D.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new A.e5q(i),h,h,h,h,h,h,!1,D.a4)],q),D.m,h,D.e,D.j,0,h,h)
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
if(m)l.push(B.fKN)
p.push(C.aB(h,C.p(D.A,C.x(l,D.m,h,D.b7,D.j,0,D.p),D.f,h,h,new C.o(o,h,new C.bJ(j,j,j,j),new C.bk(n,n,n,n),h,h,D.n),h,52,h,h,h,h,h,58),D.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new A.e5r(i,r),h,h,h,h,h,h,!1,D.a4))}return C.p(D.A,C.eN(D.A,C.p(h,C.x(C.a([s,D.ad,B.fIJ,D.R,C.bX(D.bB,p,D.bs,8,8),D.am,B.ftZ],q),D.ai,h,D.e,D.P,0,D.p),D.f,h,h,new C.o(h,h,t,v,h,B.z1,D.n),h,h,h,D.bC,D.bR,h,h,330),D.f,D.e0),D.f,w,h,h,h,h,h,h,h,h,h,h)},
ati(){var w,v,u,t,s,r,q=this,p=q.e
p===$&&C.c()
w=Math.cos(p.b)
v=Math.sin(q.e.b)
p=q.e
u=p.d
t=p.c
p=Math.sin(p.a)
s=q.e
r=s.c
return new C.z(u.aa(0,new A.r(-t*w*p,r*v,r*w*Math.cos(s.a))),q.e.d)},
aQq(d,e,f,g,h){var w=new A.e5c(h)
return new A.r(w.$4(d.a,e.a,f.a,g.a),w.$4(d.b,e.b,f.b,g.b),w.$4(d.c,e.c,f.c,g.c))},
c1P(d){var w=this.d
w===$&&C.c()
w=w.d
w===$&&C.c()
return A.i0L(D.d.h_(w,new A.e64()),d)},
cwI(d){var w,v,u=this
u.AW()
u.RO()
if(u.aK)u.a2f()
u.aH=null
w=u.c1P(d)
if(w.length===0)return
u.m(new A.e7p(u,w))
v=u.e
v===$&&C.c()
v.r=4800
v.e=6
v.f=2600
v.w=-1.2
v.x=1.4
v.qX(!0)
u.ade()
v=u.RG
if(v!=null)v.bR(0)
v=new A.a4N(u.gbMS(),W.Bh)
v.hE(0)
u.RG=v},
ade(){var w,v,u,t,s,r,q,p=this,o=++p.ry,n=p.rx
if(o>=n.length){p.a2e()
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
u=A.fTy(v,o,u.k4.q(0,t))
u.B(p.ghH())
p.aH=u
p.aiE(u,p.gIm().h(0,t))
t=p.aH
t.toString
t.B(p.ghH())
p.m(p.giP())}s=w.r
if(s&&p.aH!=null){p.aH=null
p.m(p.giP())}if(w.w==null&&w.x==null){s=!n||s
r=p.ati()
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
D.d.M(o,n+Math.max(1,new A.r(u.a-v.a,u.b-v.b,u.c-v.c).guI()))}}o=w.e
if(o!=null)p.ef("\ud83d\ude81 "+o,!0)},
bMT(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this
if(!a2.p4||a2.c==null)return
w=a2.rx[a2.ry]
v=(Date.now()-a2.to)/1000
u=w.x
if(u!=null){t=a2.CW.gii()/1000
s=B.a3A[u].a
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
h=a2.ati()
k=A.o_(h.a,k,i)
m=A.o_(h.b,m,i)}if(v>=w.d){a2.ade()
return}}else{u=w.w
if(u!=null){u=B.kh[u]
t=a2.CW.gii()
t=$.aQr().cU7(0,D.d.cD(B.kh,u),t/1000).a
u=t[0]
m=new A.r(u,26,t[1])
l=v*0.6+0.8
k=new A.r(u+Math.sin(l)*190,85,t[1]+Math.cos(l)*190)
if(v<2.5){j=v/2.5
i=j*j*(3-2*j)
g=a2.ati()
k=A.o_(g.a,k,i)
m=A.o_(g.b,m,i)}if(v>=w.d){a2.ade()
return}}else{f=v*w.c
if(a2.x1.length<2||f>=D.d.gal(a2.xr)){a2.ade()
return}u=a2.xr
t=u.length
e=0
for(;;){s=e+2
if(!(s<t&&u[e+1]<=f))break;++e}t=u[e]
n=e+1
d=D.k.E((f-t)/(u[n]-t),0,1)
t=new A.e5o()
u=e-1
k=a2.aQq(t.$2(a2.x1,u),t.$2(a2.x1,e),t.$2(a2.x1,n),t.$2(a2.x1,s),d)
m=a2.aQq(t.$2(a2.x2,u),t.$2(a2.x2,e),t.$2(a2.x2,n),t.$2(a2.x2,s),d)}}a0=m.aF(0,k)
a1=Math.max(8,a0.guI())
u=a2.e
u===$&&C.c()
t=Math.atan2(a0.a,-a0.c)
u.N4(a1,Math.asin(D.k.E(-a0.b/a1,-1,1)),m,t)},
a2e(){var w=this,v=w.e
v===$&&C.c()
v.r=0
v=w.RG
if(v!=null)v.bR(0)
w.RG=null
if(w.c==null)return
w.m(new A.e7A(w))
w.xO()
w.ef("The drone has landed.",!0)},
bMR(){var w=null,v=new A.e5m(this),u=D.w.j(0.55),t=C.m(28),s=C.I(D.aZ,D.r,1),r=x.p
return C.p(D.A,C.eN(D.A,C.p(w,C.x(C.a([C.B(C.a([B.fIw,D.as,B.bCo,C.aB(w,D.rp,D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new A.e5l(this),w,w,w,w,w,w,!1,D.a4)],r),D.m,w,D.e,D.j,0,w,w),B.fvz,v.$4("\ud83c\udf06","The whole city","High flights over every street","city"),v.$4("\ud83e\udea7","Billboards and NGMY logos","Close to every ad, and the big logo board","billboards"),v.$4("\ud83c\udfc1","Edge billboards only","A tour round the big boards at the edges of the city","edges"),v.$4("\ud83c\udfe0","Houses","Fly by the houses, then go inside a big one","houses"),v.$4("\ud83c\udfe5","Hospital, shop and school","Fly in and look round inside each","hospital"),v.$4("\ud83d\ude8c","Traffic","Follow the self-driving buses and police cars","traffic"),v.$4("\ud83c\udfac","Everything","A little of all of it","all")],r),D.ai,w,D.e,D.P,0,D.p),D.f,w,w,new C.o(w,w,s,t,w,B.z1,D.n),w,w,w,D.bC,D.bR,w,w,330),D.f,D.e0),D.f,u,w,w,w,w,w,w,w,w,w,w)},
gIm(){var w=this.d
w===$&&C.c()
w=w.d
w===$&&C.c()
return D.d.h_(w,new A.e5U()).cx},
atu(d){var w,v=C.a([],x.u)
for(w=0;w<4;++w)v.push(d.t5(w))
return v},
cx4(d){var w,v,u=C.a([],x.t)
for(w=0;w<4;++w){if(!d.t5(w)){v=d.d
v===$&&C.c()
v=w>=v.length}else v=!0
u.push(v?0:new A.e7z(d,w).$0())}return u},
cE9(d,e){var w,v,u,t,s,r=d.d
r===$&&C.c()
if(e>=r.length)return""
w=r[e]
r=w.a
v=d.at.h(0,r)
u=v==null
t=u?null:v.a
s=A.ago(t==null?w.b:t).toLowerCase()
if(u||!A.fXP(w.b,v.a))return"nothing put in yet at "+A.jQ(r).b
if(v.b.c<2)return"the "+s+" at "+A.jQ(r).b+" is not finished: fasten every wire and close it"
return"the "+s+" at "+A.jQ(r).b+" works but is NOT wired safely: "+d.aoE(r).b},
aiE(d,e){var w=e==null
d.d=w?B.ayu:this.atu(e)
d.e=w?B.a24:this.cx4(e)},
gb9G(){var w,v,u=this.aH
if(u==null||!u.c)return null
w=u.a
v=u.b.a
return w==="tower"?v*100+u.f:v},
gajD(){var w,v=this.gb9G(),u=v==null?null:this.gIm().h(0,v)
if(u!=null)w=u.gbjn()||D.d.d8(this.atu(u),new A.e8o())
else w=!1
return w},
arV(){var w,v,u,t,s,r=this,q=r.aH,p=r.gb9G(),o=p==null,n=o?null:r.gIm().h(0,p)
if(q==null||o||n==null)return
if(!D.d.d8(r.atu(n),new A.e4W())){r.ef("Not quite done: the wiring is not right yet. Open the wiring bench again (tap the panel) and check every wire.",!1)
return}w=q.b
r.gIm().W(0,p)
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
s=10+r.iJ.au(26)
v=r.ghH()
if(v!=null)v.r+=s
r.l8=Date.now()
r.lt=0
q.d=B.dmy
q.e=B.a24
q.B(r.ghH())
r.m(r.giP())
A.fT(880,120,0.3,"tri")
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
Y8(d){return this.bYO(d)},
bYO(d){var w=0,v=C.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k
var $async$Y8=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:l=d.b
k=l.a
if(d.a==="tower")k=k*100+d.f
s=t.gIm().c4(0,k,new A.e5R(l,d))
w=3
return C.b(t.y3(C.e_(new A.e5S(s),!1,null,x.H)),$async$Y8)
case 3:if(t.c==null){w=1
break}t.aiE(d,s)
if(t.gajD())t.arV()
else{d.B(t.ghH())
t.m(t.giP())
r=x.s
q=C.a([],r)
if(s.t5(0))q.push("outlet 1")
if(s.t5(1))q.push("outlet 2")
if(s.t5(2))q.push("the ceiling light")
if(s.t5(3))q.push("the switch")
p=C.a([],r)
if(!s.t5(0))p.push("outlet 1")
if(!s.t5(1))p.push("outlet 2")
if(!s.t5(2))p.push("the ceiling light")
if(!s.t5(3))p.push("the switch")
r=C.a([],r)
for(o=0;o<4;++o)if(!s.t5(o))r.push(t.cE9(s,o))
n=x.cc
m=C.C(new C.Z(r,new A.e5T(),n),n.k("J.E"))
r=q.length===0?"Nothing is fixed yet":"Fixed so far: "+D.d.aG(q,", ")
p=D.d.aG(p,", ")
q=m.length===0?"":"Why: "+C.d1(m,0,C.dB(2,"count",x.S),C.S(m).c).aG(0,"; ")+". "
t.ef(r+". Still to do: "+p+". "+q+"Tap the red frames to carry on.",!1)}case 1:return C.h(u,v)}})
return C.i($async$Y8,v)},
aaO(d){return this.bPG(d)},
bPG(d){var w=0,v=C.j(x.H),u,t=this,s,r,q,p,o
var $async$aaO=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:o=t.d
o===$&&C.c()
s=o.d
s===$&&C.c()
r=d.a
q=s[o.e].db.c4(0,r,new A.e5w())
w=3
return C.b(t.y3(C.e_(new A.e5x(q),!1,null,x.H)),$async$aaO)
case 3:if(t.c==null){w=1
break}if(q.c>=2&&A.KS(A.rZ("light"),q).a==="ok"){o=t.d
s=o.d
s===$&&C.c()
s[o.e].db.W(0,r)
o=t.d
s=o.d
s===$&&C.c()
s[o.e].k3.W(0,r)
p=10+t.iJ.au(26)
r=t.ghH()
if(r!=null)r.r+=p
t.m(t.giP())
t.ef("The street light is on again. You wired it correctly: black to black, white to white, ground to ground. +"+p+" stars.",!0)}else t.ef("The light is still out: finish the wiring and fit the cover, then it comes on.",!1)
case 1:return C.h(u,v)}})
return C.i($async$aaO,v)},
c6d(){var w,v,u=this,t=u.aB
if(t==null)return
w=u.d
w===$&&C.c()
v=w.d
v===$&&C.c()
v[w.e].dv(0,"crate",t.f+Math.sin(t.w)*34,t.r+Math.cos(t.w)*34)
u.ak=null
u.m(u.giP())
u.ef("You put the crate down.",!0)},
c3J(){var w,v,u,t,s,r,q,p,o=this,n=o.d
n===$&&C.c()
n=n.d
n===$&&C.c()
w=D.d.h_(n,new A.e66())
if(o.gaW2())return
n=x._
v=C.a([],n)
for(u=w.x,t=u.length,s=w.k4,r=0;r<u.length;u.length===t||(0,C.M)(u),++r){q=u[r]
p=q.b
if(p==="house2"||p==="bighouse"){p=q.a
p=!s.q(0,p)&&p!==o.j9}else p=!1
if(p)v.push(q)}if(s.a<2&&v.length!==0&&o.by==null&&o.bz==null){q=v[o.iJ.au(v.length)]
v=q.a
s.M(0,v)
o.j9=v
o.b3v(new A.PZ(q,q.b==="bighouse"?"the big house":"the house","power","",0))}n=C.a([],n)
for(v=u.length,t=w.k3,r=0;r<u.length;u.length===v||(0,C.M)(u),++r){q=u[r]
s=q.b
if((s==="pole"||s==="lamppost")&&!t.q(0,q.a))n.push(q)}if(t.a<3&&n.length!==0&&D.o.F(o.bW,90)===0){t.M(0,n[D.o.F(o.bW*5,n.length)].a)
o.ef("\u26a1 A street light went out in the town. Find it (it is dark, with a red sign) and fix it.",!1)}n=o.d
v=n.d
v===$&&C.c()
if(v[n.e].c==="outside"&&o.aH==null)o.m(o.giP())},
awj(d){return this.c3K(d)},
c3K(d){var w=0,v=C.j(x.H),u=this
var $async$awj=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:u.m(new A.e67(u,d))
return C.h(null,v)}})
return C.i($async$awj,v)},
aWd(){var w,v=this.cI,u=v==null?null:v.a
if(u==null)return null
w=A.vp(new A.r(0,0,B.hr.h(0,u.b).d/2+60),u.e*3.141592653589793/2)
return new C.z(u.c+w.a,u.d+w.c)},
avr(){var w=this.aB,v=this.aWd()
if(w==null||v==null)return null
return D.k.V(Math.sqrt(Math.pow(v.a-w.f,2)+Math.pow(v.b-w.r,2))/10)},
cqf(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.aB,g=j.gKi()
g=g==null?i:g.ga6n(0)
if(g==null){g=j.gpe()
g=g==null?i:g.ga6n(0)
w=g}else w=g
if(w==null)w=j.aWd()
g=!1
if(j.cI==null){v=j.gpe()
if((v==null?i:v.x)==null){g=j.gKi()
g=(g==null?i:g.f)==null}}v=!0
if(!g)if(h!=null)if(w!=null){g=j.d
g===$&&C.c()
v=g.d
v===$&&C.c()
g=v[g.e].c!=="outside"||j.aH!=null}else g=v
else g=v
else g=v
if(g)return B.ayn
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
u.aD0(new A.r(h.f+o*k,1.4,h.r+n*k),B.h6H,D.bI,p)
k+=26;++l}}u.f=3
u.d=0.4
u.dL(new A.r(v,0,s),new A.r(v,170,s),4,D.bI,8)
u.dL(new A.r(v,0,s),new A.r(v,1.6,s),24,D.bI,14)
return g},
bFh(){var w,v,u,t,s,r,q,p=this,o=null,n=p.y1,m=new A.e4q(),l=new A.e4p(),k=x.p
if(n!=null){w=p.avr()
v=C.a([C.B(C.a([C.h5(D.aE,o,C.d(n.gbdt(),o,o,o,o,o,o,D.pr,o,o,o),o,24),D.bc,C.E(C.x(C.a([C.d(n.gaDa(),o,o,o,o,o,o,D.df,o,o,o),B.fE0],k),D.E,o,D.e,D.j,0,D.p),1),C.aB(o,D.rp,D.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new A.e4r(p),o,o,o,o,o,o,!1,D.a4)],k),D.m,o,D.e,D.j,0,o,o),D.ad],k)
for(u=n.gaGn(0),t=0;t<3;++t)v.push(m.$1(u[t]))
u=D.bI.j(0.12)
s=C.m(14)
r=C.I(D.bI.j(0.5),D.r,1)
v.push(C.p(o,C.B(C.a([B.bWA,D.as,C.E(C.d(w==null?"A yellow line on the ground will show you the way.":"Follow the yellow line on the ground. It is about "+C.w(w)+" metres away.",o,o,o,o,o,o,D.oy,o,o,o),1)],k),D.m,o,D.e,D.j,0,o,o),D.f,o,o,new C.o(u,o,r,s,o,o,D.n),o,o,o,D.kZ,D.bU,o,o,o))
v.push(l.$5$primary(A4.GC,"Show me the way",D.bI,new A.e4s(p),!0))
v.push(l.$4(B.bJa,"Take me there",D.bo,new A.e4t(p,n)))
v.push(l.$4(D.jO,"Later",D.aE,new A.e4u(p,n)))
q=C.x(v,D.ai,o,D.e,D.P,0,D.p)}else q=C.x(C.a([B.eVZ,D.ad,m.$1("Hello, this is the City office. A few calls were missed."),m.$1("Please answer the phone, so you can keep working."),m.$1("Every call is a person who needs help. Thank you for answering!"),l.$5$primary(D.hD,"OK, I will answer",D.bo,new A.e4v(p),!0)],k),D.ai,o,D.e,D.P,0,D.p)
k=D.w.j(0.55)
v=C.m(28)
return C.p(D.A,C.eN(D.A,C.p(o,q,D.f,o,o,new C.o(o,o,C.I(D.aZ,D.r,1),v,B.dmc,B.z1,D.n),o,o,o,D.bC,D.bR,o,o,330),D.f,D.e0),D.f,k,o,o,o,o,o,o,o,o,o,o)},
csx(){var w,v,u,t,s=this,r=s.d
r===$&&C.c()
w=r.d
w===$&&C.c()
v=w[r.e].BL(s.Q)
if(v==null)return
u=B.dtX.h(0,v.b)
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
s.m(s.giP())
s.ef("Sold for "+C.w(u)+" points.",!0)},
zV(d){return this.bGm(d)},
bGm(d){var w=0,v=C.j(x.H),u,t=this,s
var $async$zV=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return C.b(C.bT(D.K,null,new A.e4S(d),s,!0,!0,!0,null,!1,!1,x.H),$async$zV)
case 3:if(t.c==null){w=1
break}t.m(new A.e4T(t))
case 1:return C.h(u,v)}})
return C.i($async$zV,v)},
cpc(d){var w,v,u=this.ghH()
if(u!=null){w=u.c
w===$&&C.c()
w=d>=w.length}else w=!0
if(w)return C.f8(null,x.H)
w=u.c
w===$&&C.c()
v=w[d]
w=this.c
w.toString
return C.bT(E.lp,null,new A.e7c(this,v,u),w,!0,!0,!0,D.jW,!1,!1,x.H)},
ayz(d){var w=this.c
w.toString
return C.bT(E.lp,null,new A.e6X(this,d),w,!0,!0,!1,D.jW,!1,!1,x.H)},
cBO(){var w=this.c
w.toString
return C.bT(E.lp,null,new A.e88(this),w,!0,!0,!0,D.jW,!1,!1,x.H)},
cBc(){var w=this.c
w.toString
return C.bT(D.K,null,new A.e7V(this),w,!0,!0,!0,null,!1,!1,x.H)},
b6l(d,e){var w,v,u,t=this,s=t.dx
if(s!=null)s.a4(0)
s=t.d
s===$&&C.c()
s=s.gqH()
w=s.length
v=0
for(;v<w;++v){u=s[v]
if(u.k1==null)u.k1="tv100"
if(u.c==="hall")if(u.k2==null)u.k2="tv100"
u.p2=!0}t.z=!1
s=x.fG
w=t.d
if(e){s=new A.aVf(!0,w,d,C.a([],s))
s.aZ5()}else{s=new A.aVf(!1,w,d,C.a([],s))
s.aZ5()}t.cx=s
t.cy=t.CW.gii()/1000
t.x=!0
t.r="look"
t.w=!1
s=D.d.gI(t.cx.d)
t.bi.a8(0)
t.b8=!1
t.m(new A.e7w(t,s.a))
t.xO()
t.dx=C.dq(D.jt,new A.e7x(t))
t.m(new A.e7y())},
cx0(d){return this.b6l(d,!1)},
bM9(d,e){var w,v=d.w[e],u=v.b
A:{if("left"===u){w=new A.r(-d.gev(0)/2,40,v.c+d.ghm(0)/2-40)
break A}if("right"===u){w=new A.r(d.gev(0)/2,40,v.c+d.ghm(0)/2-40)
break A}w=new A.r(v.c,40,0)
break A}return w},
cBd(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=i.cx
if(h==null||i.c==null)return
w=i.CW.gii()/1000-i.cy
v=h.e
v===$&&C.c()
if(w>=v){i.RO()
i.iA("The tour is over. Press Tour to walk the house again.")
return}if(i.b8)return
u=h.baD(w)
v=i.d
v===$&&C.c()
t=v.e
if(u.a!==t){i.aj1(u)
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
if(t&&v<s.w.length){o=1.25*D.e_.av(0,D.k.E(u.ay,0,1))
q=s.ax
n=q.h(0,v)
if((n==null?0:n)!==o){q.n(0,v,o)
p=!0}}q=u.at
if(D.a.a0(q,"ad")&&i.bi.M(0,q)){s.p3=D.o.F(s.p3+1,8)
A.fT(1000,50,0.25,"tri")
p=!0}if(p)i.m(i.giP())
m=Math.max(s.gev(0)*0.95,s.ghm(0)*1.15)+20
t=t&&v<s.w.length
q=u.b
if(t){l=i.bM9(s,v)
k=D.dA.av(0,D.k.E(u.ay,0,1))
j=s.w[v].b
v=i.e
v===$&&C.c()
t=j==="back"?14:0
if(j==="left")n=0.55*k
else n=j==="right"?-0.55*k:-0.03
v.hP(m+(70-m)*k,0.2-0.07*k,new A.r(l.a*0.9+q*0.1,36,l.c+t),n)}else{v=i.e
v===$&&C.c()
v.hP(m,0.24,new A.r(q*0.7,30,u.c*0.6+8),-0.05-q/(s.gev(0)/2)*0.2)}if(u.as!==i.dy)i.m(new A.e7W(i,u))},
aj1(d){return this.cBb(d)},
cBb(d){var w=0,v=C.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j
var $async$aj1=C.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:l={}
r.b8=!0
l.a=null
t=4
p=$.aV.ak$.x.h(0,r.Z)
p=p==null?null:p.gba()
q=x.cU.a(p)
p=q
p=p==null?null:p.m0(0.6).d9(0,D.kB)
j=l
w=7
return C.b(x.fa.b(p)?p:C.dS(p,x.eT),$async$aj1)
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
r.awU(d.a,!0)
p=r.d
n=p.d
n===$&&C.c()
m=n[p.e]
p=d.ch
if(p>=0&&p<m.w.length)m.ax.n(0,p,1.25)
r.m(new A.e7L(l,r))
l=r.e
l===$&&C.c()
l.d=new A.r(d.b,36,d.c+4)
l.c=70
l.a=-0.03
l.b=0.15
r.b8=!1
case 1:return C.h(u,v)
case 2:return C.f(s.at(-1),v)}})
return C.i($async$aj1,v)},
RO(){var w,v,u,t=this,s=t.dx
if(s!=null)s.a4(0)
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
t.m(new A.e7D(t))
t.xO()},
cjV(){var w,v,u,t,s,r,q,p,o,n=this,m=n.cx
if(m!=null)return m.baD(n.CW.gii()/1000-n.cy)
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
return A.ata(n.c5.d>0,0,-1,"",!1,o,"",-1,q,!1,!1,!1,v.a,p,r,u,s,t)}return null},
b74(){var w,v=this,u=v.c5,t=u.r
if(t<=0)return
u.r=0
w=v.ghH()
if(w!=null)w.r=Math.max(0,w.r-t)
if(v.c!=null)v.m(new A.e7E())},
a2b(){var w,v=this,u=v.d
u===$&&C.c()
w=u.d
w===$&&C.c()
u=w[u.e]
if(u.c!=="outside")return
w=v.aB;(w==null?v.aB=A.hfL(u,0,24):w).Mf(0)
v.aK=!0
v.bK=Date.now()
u=v.b1
if(u!=null)u.bR(0)
u=new A.a4N(v.gcDT(),D.YX)
u.hE(0)
v.b1=u
v.m(new A.e7v())
v.iA("Slide the round stick to walk. Walk up to a door to go in: the house, the hospital or the shop. Double tap a spot to go there.")},
a2f(){var w,v=this
v.aK=!1
v.bb=v.b0=0
v.bh=!1
w=v.b1
if(w!=null)w.bR(0)
v.b1=null
w=v.aB
if(w!=null)w.x=!1
v.m(new A.e7C())},
cDU(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.aH,e=f==null
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
w.Mf(0)
w.z=g.bh&&g.bD==null
if(g.bD==null)w.aIG()
w.cMv(s)
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
m=w.aKU(0,r*v+q*u,-q*v+r*u,s)}else m=w.Ft(0,s)
v=!m
if(v)w.x=!1
if(g.bZ===0){u=g.d
u===$&&C.c()
p=u.d
p===$&&C.c()
l=p[u.e].c==="outside"}else l=!1
if(l){u=m&&g.bD==null
k=o.biD(s,m&&g.bD!=null,u)}else k=null
if(k!=null)g.ef(k,!1)
g.b74()
if(!v||w.Q>0){v=g.e
u=w.f
p=w.r
v.as=null
v.d=new A.r(u,30,p)
v.aT()}if(!e){f.cx=g.ak
j=f.fG(0,g.ghH())
g.ak=f.cx
if(j!=null){g.iA(j)
g.m(g.giP())}if(f.cy){f.cy=!1
g.Y8(f)}if(f.dx){f.dx=!1
if(!g.id)g.m(new A.e8j(g))}if(f.db){f.db=!1
if(!g.k2)g.m(new A.e8k(g))}if(f.w){f.w=!1
if(!g.k3)g.m(new A.e8l(g))}e=f.x
if(e!==g.k4){g.k4=e
v=g.e
if(e)v.hP(330,0.35,B.fU1,1.35)
else v.hP(170,0.4,new A.r(0,30,110),0)}e=f.at
e===$&&C.c()
v=!1
if(e.r>308)if(Math.abs(e.f)<36)e=!(f.a==="tower"&&f.f>1)
else e=v
else e=v
if(e)g.aWu()
if(!g.k4&&g.ok==null)g.c_A()
return}e=!1
if(g.bD==null){e=g.gpe()
e=(e==null?null:e.x)!=null}if(e){e=g.gpe()
e.toString
g.aR6(e.bjb(w.f,w.r,g.CW.gii()/1000))}e=!1
if(g.bD==null){e=g.d
e===$&&C.c()
v=e.d
v===$&&C.c()
e=v[e.e].c==="outside"&&g.ok==null&&g.bZ===0}if(e){e=$.aQr()
e.Ft(0,g.CW.gii()/1000)
i=e.cOR(w.f,w.r)
if(i>=0)g.cq1(i)}e=g.bD
if(e!=null)g.cBV(w)
if(m&&g.bD==null){if(Math.abs(w.f)<24){e=w.r
e=e>-2&&e<14}else e=!1
if(e)if(!(Math.abs(w.w)>2.2)){e=w.at
e=e!=null&&e.b<4}else e=!0
else e=!1
if(e){g.a2f()
g.Ar(10)
g.iA("You are inside the living room. Use Go outside to come back out.")
return}e=g.d
e===$&&C.c()
v=e.d
v===$&&C.c()
e=D.d.gaf(v[e.e].x)
v=new C.f5(e,new A.e8m())
while(v.C()){u=e.gT(0)
h=A.vp(new A.r(0,0,B.hr.h(0,u.b).d/2+10),u.e*3.141592653589793/2)
if(Math.abs(w.f-(u.c+h.a))<22&&Math.abs(w.r-(u.d+h.c))<16){g.aax(u)
return}}}g.cCd(w)},
c_A(){var w,v,u,t,s,r,q,p,o,n,m=this,l=m.e
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
if(s!==w)l.bmJ(s)},
aax(d){var w,v,u,t,s,r,q=this
q.bb=q.b0=0
w=d.b
if(w==="store"||w==="gasstation")w="shop"
else if(w==="hq")w="tower"
v=q.d
v===$&&C.c()
u=v.d
u===$&&C.c()
t=d.a
s=A.fTy(w,d,u[v.e].k4.q(0,t))
s.cx=q.ak
s.B(q.ghH())
q.aiE(s,q.gIm().h(0,t))
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
v.qX(!0)
q.e.hP(170,0.4,new A.r(0,30,110),0)
q.m(q.giP())
A:{if("hospital"===w){w="The hospital. Walk onto the blue mat to admit the sick, and up to a bed to treat the patient. Walk to the green mat to go out."
break A}if("dmv"===w){w="The licence office. Walk onto the blue mat at the desk to get your Uber licence. Walk to the green mat to go out."
break A}if("tower"===w){w="The lobby of an office tower. Walk onto the blue mat (or tap the elevator) to choose a level. Walk to the green mat to go out."
break A}if("house2"===w||"bighouse"===w){w="The house. Walk onto the red or green mat at the breaker panel. Walk to the green mat to go out."
break A}if("school"===w){w="The school. Walk onto the mats to teach the class or read in the library. Walk to the green mat to go out."
break A}if("firestation"===w){w="The fire station. Walk onto the mats to check the equipment. Walk to the green mat to go out."
break A}w="The shop. Walk onto the yellow mat for food and the purple mat for medicine. Walk to the green mat to go out."
break A}q.iA(w)
A.fT(660,80,0.25,"tri")},
aWu(){var w,v,u,t=this,s=t.aH,r=t.aB
if(s==null||r==null)return
w=s.b
v=B.hr.h(0,w.b)
v.toString
t.ak=s.cx
t.aH=null
t.bb=t.b0=0
u=A.vp(new A.r(0,0,v.d/2+30),w.e*3.141592653589793/2)
r.f=w.c+u.a
r.r=w.d+u.c
r.w=0
r.at=null
r.Mf(0)
t.m(t.giP())
t.xO()
v=t.e
v===$&&C.c()
v.ap6(new A.r(r.f,30,r.r))
t.iA("You are back in the city.")},
cCd(d){var w,v,u,t,s,r,q,p,o,n,m=this,l={}
l.a=null
w=m.bD==null
v=!1
if(!w||m.ak==null){u=m.c5.b
if(u<(!w?0.7:0.99)){u=m.d
u===$&&C.c()
t=u.d
t===$&&C.c()
u=D.d.b3(t[u.e].x,new A.e8c(d))
v=u}}if(v)l.a=new C.FZ(new A.e8d(m),"\u26fd Buy gas ("+A.h14(m.c5.b)+" \u2b50)")
else if(!w)l.a=new C.FZ(m.gbRK(),"\ud83d\udeaa Get out")
else{if(m.ak!=null)l.a=new C.FZ(m.gc6c(),"\u2b07 Put the crate down")
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
p=B.hr.h(0,t).a.toLowerCase()
if(l.a!=null)break
if(t==="crate"&&q<46){l.a=new C.FZ(new A.e8e(m,r),"\ud83d\udce6 Pick up the crate")
break}if(t==="pole"||t==="lamppost"){o=m.d
n=o.d
n===$&&C.c()
o=n[o.e].k3.q(0,r.a)&&q<60}else o=!1
if(o){l.a=new C.FZ(new A.e8f(m,r),"\ud83d\udd27 Fix the street light")
break}if(D.d.q(B.Hr,t)&&q<36){l.a=new C.FZ(new A.e8g(m,r),"\ud83c\udf4e Feed the "+p)
break}if(D.d.q(B.db2,t)&&q<60){l.a=new C.FZ(new A.e8h(m,r),"\ud83d\ude97 Get in the "+p)
break}}}w=l.a
w=w==null?null:w.b
u=m.cK
if(w!=(u==null?null:u.b))m.m(new A.e8i(l,m))},
bOX(d){var w,v=this,u=v.cl,t=d.a,s=u.h(0,t),r=B.hr.h(0,d.b).a
if(s!=null&&v.CW.gii()/1000-s<30){v.ef("The "+r.toLowerCase()+" has just eaten. Come back in a little while.",!1)
return}u.n(0,t,v.CW.gii()/1000)
u=v.ghH()
if(u==null)w=null
else{++u.r
w="You fed the "+r.toLowerCase()+". +1 point."
u.Pw(w)}if(w==null)w="You fed the "+r.toLowerCase()+"."
A.fT(880,90,0.25,"tri")
v.m(new A.e5v())
v.iA(w)},
bRz(d){var w=this,v=w.aB
if(v==null)return
w.bD=d
v.CW=d.a
v.ay=22
v.ch=2.4
v.f=d.c
v.r=d.d
v.w=Math.atan2(Math.cos(d.e*3.141592653589793/2),-Math.sin(d.e*3.141592653589793/2))
v.at=null
v.Mf(0)
w.m(w.giP())
w.iA("You are driving the "+B.hr.h(0,d.b).a.toLowerCase()+". Slide the stick to drive. Press Get out to stop.")
A.fT(300,120,0.25,"tri")},
bRL(){var w,v,u,t,s,r,q=this,p=q.bD,o=q.aB
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
o.Mf(0)
for(w=[46,62,80],u=0;u<3;++u){t=w[u]
s=o.f+Math.sin(v)*t
r=o.r+Math.cos(v)*t
if(!o.KA(s,r)){o.f=s
o.r=r
break}}o.aIG()
q.m(q.giP())
q.iA("You got out.")},
bMQ(){var w=this.bD,v=this.aB
if(w==null||v==null)return null
return new C.e9([w.b,v.f,v.r,v.w,w.f])},
y3(d){return this.cm_(d)},
cm_(d){var w=0,v=C.j(x.H),u=1,t=[],s=[],r=this,q
var $async$y3=C.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:++r.bZ
u=2
q=r.c
q.toString
w=5
return C.b(C.a3(q,!1).cg(d),$async$y3)
case 5:s.push(4)
w=3
break
case 2:s=[1]
case 3:u=1;--r.bZ
w=s.pop()
break
case 4:return C.h(null,v)
case 1:return C.f(t.at(-1),v)}})
return C.i($async$y3,v)},
Yz(){var w=0,v=C.j(x.H),u=1,t=[],s,r,q
var $async$Yz=C.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
w=6
return C.b(C.az(),$async$Yz)
case 6:s=e
w=C.ew(J.q(s.a,"ngmy_city_locked_until"))!=null?7:8
break
case 7:w=9
return C.b(J.hy(s,"ngmy_city_locked_until"),$async$Yz)
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
return C.i($async$Yz,v)},
aB_(d){var w=this,v=++w.hJ
if(v>=3){w.hJ=0
w.AW()
w.b_r()}else if(v===2){w.ef(d+". That is two in a row.",!1)
w.b_r()}else w.ef(d+". Answer the phone and finish the job, or you lose your place.",!1)},
b_r(){A.fT(1046,160,0.3,"sine")
this.m(new A.e6b(this))},
gaW2(){return this.bZ>0||this.cI!=null||Date.now()<0||this.p4},
c6g(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this,a2=a1.d
a2===$&&C.c()
a2=a2.d
a2===$&&C.c()
w=D.d.h_(a2,new A.e68())
v=a1.ghH()
a2=x._
u=C.a([],a2)
for(t=w.x,s=t.length,r=w.k4,q=0;q<t.length;t.length===s||(0,C.M)(t),++q){p=t[q]
o=p.b
if(o==="house2"||o==="bighouse"){o=p.a
o=!r.q(0,o)&&o!==a1.j9}else o=!1
if(o)u.push(p)}s=C.a([],a2)
for(o=t.length,n=w.k3,q=0;q<t.length;t.length===o||(0,C.M)(t),++q){p=t[q]
m=p.b
if((m==="pole"||m==="lamppost")&&!n.q(0,p.a))s.push(p)}l=new C.Z(t,new A.e69(),C.S(t).k("Z<1>"))
k=C.a([0,1,2,3],x.t)
o=a1.iJ
D.d.ec(k,o)
a2=C.a([],a2)
for(m=t.length,j=w.cy,q=0;q<t.length;t.length===m||(0,C.M)(t),++q){p=t[q]
i=p.b
if((i==="tower"||i==="hq")&&!j.ai(0,p.a))a2.push(p)}for(t=k.length,m=v!=null,q=0;q<k.length;k.length===t||(0,C.M)(k),++q){h=k[q]
if(h===0&&u.length!==0&&r.a<4){p=u[o.au(u.length)]
a2=p.a
r.M(0,a2)
a1.j9=a2
return new A.PZ(p,p.b==="bighouse"?"the big house":"the house","power","",0)}if(h===1&&m&&!l.gam(0)){i=v.gBY()
g=C.S(i).k("Z<1>")
f=C.C(new C.Z(i,new A.e6a(),g),g.k("J.E"))
i=f.length
if(i!==0){e=f[o.au(i)]
e.e=!0
e.c=Math.min(e.c,70)
d=l.gaf(0)
if(!d.C())C.b8(C.ft())
return new A.PZ(d.gT(0),"the hospital","sick",e.a.b,0)}}if(h===3&&a2.length!==0&&j.a<3){p=a2[o.au(a2.length)]
a0=2+o.au(A.hra(p)-1)
j.n(0,p.a,a0)
return new A.PZ(p,p.b==="hq"?"the NGMY company building":"the office tower","office","",a0)}if(h===2&&s.length!==0&&n.a<4){p=s[o.au(s.length)]
n.M(0,p.a)
return new A.PZ(p,"the street","light","",0)}}return null},
aWc(d){var w,v,u,t=this.d
t===$&&C.c()
t=t.d
t===$&&C.c()
w=D.d.h_(t,new A.e5V())
switch(d.c){case"power":return!w.k4.q(0,d.a.a)
case"light":return!w.k3.q(0,d.a.a)
case"office":return!w.cy.ai(0,d.a.a)
default:v=this.ghH()
if(v==null)return!1
t=v.c
t===$&&C.c()
u=new C.Z(t,new A.e5W(d),C.S(t).k("Z<1>"))
if(!u.gaf(0).C())return!0
return u.gI(0).r>=0||!u.gI(0).e||!u.gI(0).f}},
S1(d){var w,v,u,t=this,s=t.aB
if(s!=null){w=t.d
w===$&&C.c()
v=w.d
v===$&&C.c()
w=v[w.e].c!=="outside"}else w=!0
if(w)return
if(t.aH!=null)t.aWu()
s.at=null
s.Mf(0)
u=t.bQu(d,s)
s.f=u.a
s.r=u.b
s.aIG()
w=t.e
w===$&&C.c()
w.x8(170,new A.r(s.f,30,s.r))
if(!t.aK)t.a2b()},
bQu(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=d.b,i=B.hr.h(0,j)
i.toString
w=B.aOF.q(0,j)
v=w?i.d/2+32:34
u=A.vp(new A.r(0,0,1),d.e*3.141592653589793/2)
j=u.c
i=u.a
t=-i
s=C.a([],x.f)
if(w)for(r=0;r<5;++r)for(q=v+B.d80[r],p=i*q,q=j*q,o=0;o<5;++o){n=B.cYC[o]
s.push(new C.z(d.c+p+j*n,d.d+q+t*n))}else for(m=0;m<12;++m){l=m*3.141592653589793/6
s.push(new C.z(d.c+Math.cos(l)*v,d.d+Math.sin(l)*v))}for(j=s.length,r=0;r<s.length;s.length===j||(0,C.M)(s),++r){k=s[r]
if(!e.KA(k.a,k.b))return k}return D.d.gI(s)},
cwQ(d){var w,v,u=this
u.cI=d
u.hK=0
u.S1(d.a)
w=d.c
A:{if("sick"===w){v="New job: "+d.d+" is sick. Go into the hospital and onto the desk."
break A}if("light"===w){v="New job: a street light is out. Tap the dark light to fix it."
break A}v="New job: a house has no power. Walk in and fix it at the panel."
break A}u.ef(v,!0)
u.m(new A.e7q())},
bSj(d){var w,v=this,u=v.d
u===$&&C.c()
w=u.d
w===$&&C.c()
if(w[u.e].c!=="outside")return
v.S1(d)
u=d.b
if(u==="house2"||u==="bighouse")v.aax(d)
else if(u==="tower"||u==="hq"){v.aax(d)
v.m(new A.e5P(v))}else v.ef(y.Y,!0)},
cBl(){var w,v,u,t=$.aQr(),s=C.a([],x.f),r=this.gpe()
r=r==null?null:r.alI(this.CW.gii()/1000)
if(r==null)r=B.HA
w=r.length
v=0
for(;v<r.length;r.length===w||(0,C.M)(r),++v){u=r[v]
s.push(new C.z(u.b,u.c))}t.d=s
return A.idb(this.CW.gii()/1000)},
cq1(d){var w,v,u,t,s,r=this,q=Date.now()
if(q-r.mF<1e4)return
r.mF=q
w=r.aB
if(w==null)return
A.fT(110,600,0.5,"noise")
C.fF()
r.bb=r.b0=0
w.at=null
v=r.c5
v.a=Math.min(v.a,0.2)
v.c=v.d=0
u=B.kh[d].a==="bus"?"bus":"police car"
v=r.d
v===$&&C.c()
t=v.d
t===$&&C.c()
v=t[v.e].x
t=C.S(v).k("Z<1>")
s=C.C(new C.Z(v,new A.e7e(),t),t.k("J.E"))
if(s.length===0){r.ef("A "+u+" ran you over! Always cross at the zebra crossing when the green walking person shows.",!1)
return}v=r.gpe()
if(v!=null)v.cUe(D.d.gI(s))
r.S1(D.d.gI(s))
r.aax(D.d.gI(s))
r.ef("\ud83d\ude91 A "+u+" ran you over! An ambulance brought you to the hospital. Medicine and food are being ordered for you: they are on the Orders board. Cross at the zebra crossing when the green walking person shows.",!1)
r.m(new A.e7f(r))},
aik(){var w=0,v=C.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g
var $async$aik=C.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:h=r.d
h===$&&C.c()
if(h.a.length!==0){w=1
break}q=null
p=$.ajr
w=p==null||p.a!==h.b?3:4
break
case 3:t=6
w=9
return C.b(A.aSQ(),$async$aik)
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
break}n=$.ajr
if(n!=null&&n.a===r.d.b)m=n
else{if(q!=null){h=C.aK(J.q(q,"seed"))
h=h==null?null:D.k.O(h)
if(h==null)h=-1
h=h===r.d.b}else h=!1
if(h)m=A.fTF(q)
else if(q!=null&&r.eg){h=C.aK(J.q(q,"seed"))
l=h==null?null:D.k.O(h)
h=A.aVe(l==null?r.d.b:l)
r.d=$.DS=h
A.h6w(h,q)
m=A.fTF(q)}else{h=r.d.b
m=A.fTE(h,h)
m.Nj(r.d)}}$.ajr=m
for(h=m.d,k=h.length,j=r.bI,i=0;i<h.length;h.length===k||(0,C.M)(h),++i)j.M(0,h[i].a)
r.m(new A.e7r(r))
r.bu=C.dq(D.fO,new A.e7s(r))
case 1:return C.h(u,v)
case 2:return C.f(s.at(-1),v)}})
return C.i($async$aik,v)},
c6f(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=i.ghH()
if(h==null||i.c==null)return
if(i.cx==null){w=i.d
w===$&&C.c()
h.aCE(0,1,w)}if(++i.bW%8===0){w=i.d
w===$&&C.c()
h.CK(0,w)}if(i.aH!=null&&i.gajD())i.arV()
w=!1
if(!i.aK)if(i.bZ===0){v=i.d
v===$&&C.c()
u=v.d
u===$&&C.c()
if(u[v.e].c==="outside"){w=i.c5
w=w.c>0||w.d>0}}if(w){t=i.c5.a6p(1)
if(t!=null)i.ef(t,!1)
i.b74()}if(i.aK){w=i.d
w===$&&C.c()
v=w.d
v===$&&C.c()
w=v[w.e].c==="outside"&&!i.c5.f&&i.iJ.au(240)===0}else w=!1
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
w=v}}if(w)i.c3J()
w=i.d
w===$&&C.c()
if(w.a.length===0){v=w.d
v===$&&C.c()
v=v[w.e].c==="outside"}else v=!1
if(v){w=i.gpe()
s=w==null?null:w.Ft(0,i.CW.gii()/1000)
if(s!=null)i.ef("\ud83c\udfc1 "+s,!0)
r=i.aB
if(r!=null){w=i.gpe()
w=(w==null?null:w.x)!=null&&i.aH==null}else w=!1
if(w){w=i.gpe()
w.toString
i.aR6(w.bjb(r.f,r.r,i.CW.gii()/1000))}q=i.cI
if(q!=null){++i.hK
if(i.aWc(q)){i.hJ=0
i.l8=Date.now()
i.lt=0
i.cI=null
i.hK=0
if(q.c==="sick"){p=10+i.iJ.au(26)
w=i.ghH()
if(w!=null)w.r+=p
i.ef("The sick person is at the hospital. +"+p+" stars. Well done.",!0)}if(i.c!=null)i.m(i.giP())}else if(i.hK>=240){i.cI=null
i.hK=0
i.aB_("The job was not finished in time")}}else{w=i.eF
if(w.length!==0&&i.aH==null&&i.by==null&&i.bz==null&&Date.now()-i.l8>1e4){o=D.d.cG(w,0)
if(!i.aWc(o))i.cwQ(o)}else if(i.by==null&&i.bz==null&&++i.lt>=45)i.csS()}}else{v=w.d
v===$&&C.c()
if(v[w.e].c!=="outside")i.lt=0}for(w=h.d,v=w.length,u=i.bI,n=0;n<w.length;w.length===v||(0,C.M)(w),++n){m=w[n]
l=i.d
k=l.d
k===$&&C.c()
if(k[l.e].c!=="outside")continue
if((i.bZ>0||i.cI!=null||Date.now()<0||i.p4)&&!u.q(0,m.a))continue
if(u.M(0,m.a)){i.lt=0
i.by=m
i.bz=null
i.b6f()}}u.ph(new A.e61(h),!0)
j=i.by
if(j!=null&&!D.d.b3(w,new A.e62(j)))i.AW()},
csS(){var w,v,u=this
u.lt=0
w=u.c6g()
if(w==null)return
if(u.gaW2()){v=u.eF
if(v.length<3)v.push(w)
return}u.b3v(w)},
b3v(d){var w=this
w.lt=0
w.by=null
w.bz=d
w.b6f()},
b6f(){var w,v=this
v.S=0
w=v.P
if(w!=null)w.a4(0)
v.P=C.dq(D.r8,new A.e7t(v))
v.m(new A.e7u())},
AW(){var w=this,v=w.P
if(v!=null)v.a4(0)
w.P=null
if(w.c==null)return
w.m(new A.e7B(w))},
cfp(){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null
if(l.ok!=null)return k
if(l.aK){w=l.d
w===$&&C.c()
v=w.d
v===$&&C.c()
u=v[w.e].c==="outside"}else u=!1
t=l.by
s=l.bz
if(!u&&t==null&&s==null)return k
r=l.ex
w=new A.e6q()
v=new A.e6z(r)
q=x.p
p=C.a([],q)
if(s!=null){o=C.h5(D.aE,k,C.d(s.gbdt(),k,k,k,k,k,k,D.nB,k,k,k),k,28)
n=s.gaDa()
p.push(v.$7$about$avatar$glow$onAnswer$onDecline$onLater$who(s.gbpw(),o,D.bI,new A.e6s(l,s),new A.e6t(l),new A.e6u(l,s),n))}if(t!=null){o=B.Cz[t.b]
n=o.b
p.push(v.$6$about$avatar$glow$onAnswer$onDecline$who("NGMY City \xb7 mobile",C.h5(o.e.c,k,C.d(n[0],k,k,k,k,k,k,D.Ju,k,k,k),k,28),D.bo,new A.e6v(l,t),l.gcxl(),n))}if(u){v=C.a([],q)
o=l.cK
if(o!=null)v.push(w.$3$col("\u270b "+o.b,o.a,D.bI))
o=C.a([],q)
if(l.bD==null){n=l.bh
m=n?"\ud83c\udfc3 Run: on":"\ud83c\udfc3 Run"
o.push(w.$3$on(m,new A.e6w(l),n))}if(l.bD==null)o.push(w.$3$col("\u2b06 Jump",new A.e6x(l),D.co))
v.push(C.B(o,D.m,k,D.e,D.P,0,k,k))
w=l.bD==null
o=w?206:140
v.push(new C.D(D.ZV,new C.a8(o,k,new A.U8(l.c5,!w,12,k),k),k))
p.push(new C.D(B.byE,C.B(C.a([new A.aHZ(new A.e6y(l),k),C.x(v,D.dC,k,D.e,D.P,0,D.p)],q),D.dC,k,D.ix,D.j,0,k,k),k))}return new C.a8(r,k,C.x(p,D.m,k,D.e,D.P,0,D.p),k)},
aSY(){var w=this.d
w===$&&C.c()
if(w.a.length!==0)this.Ec()
else this.a_V()},
Ec(){var w=0,v=C.j(x.H),u,t=this,s,r,q,p
var $async$Ec=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:p=t.d
p===$&&C.c()
s=p.d
s===$&&C.c()
r=s[p.e]
if(r.gyW()){t.iA("This lesson is done. Try everything: it all works.")
w=1
break}p=r.p4
w=p==="ptrap"||p==="faucet"?3:5
break
case 3:if(r.RG==null)r.RG=A.fXo()
w=6
return C.b(t.y3(C.e_(new A.e6c(r),!1,null,x.H)),$async$Ec)
case 6:w=4
break
case 5:if(r.R8==null)r.R8=new A.Ck(C.U(x.S,x.N))
w=7
return C.b(t.y3(C.e_(new A.e6d(r),!1,null,x.H)),$async$Ec)
case 7:case 4:if(t.c==null){w=1
break}t.m(t.giP())
if(r.gyW()){p=t.ghH()
if(p!=null)p.r+=10
q=r.p4
A:{p="Done! Tap the outlet and plug something in."
if("switch"===q){p="Done! Tap the switch on the wall: the light comes on."
break A}if("fan"===q){p="Done! Tap the wall switch and the fan spins."
break A}if("outlet"===q||"gfci"===q)break A
s=D.d.q(B.jP,q)
if(s){p="Done! Tap the switch on the wall: it works."
break A}s=D.d.q(B.lA,r.p4)
if(s)break A
p="Done! The sink works."
break A}t.iA(p)}case 1:return C.h(u,v)}})
return C.i($async$Ec,v)},
ajC(d){return this.cEi(d)},
cEi(d){var w=0,v=C.j(x.H),u,t=this,s,r,q,p
var $async$ajC=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:p=t.d
p===$&&C.c()
s=p.d
s===$&&C.c()
r=s[p.e].id[d]
q=r.gwv()
w=3
return C.b(t.y3(C.e_(new A.e8n(r),!1,null,x.H)),$async$ajC)
case 3:if(t.c==null){w=1
break}t.m(t.giP())
if(r.gwv()&&!q){p=t.ghH()
if(p!=null)p.r+=8}if(r.gwv()){p=q?"":"You are paid 8 stars. "
s=r.a==="switch"?"Tap it to turn the light on and off.":"Tap it to plug something in."
t.iA("Wired! "+p+s)}case 1:return C.h(u,v)}})
return C.i($async$ajC,v)},
a_V(){var w=0,v=C.j(x.H),u,t=this,s,r,q,p,o,n
var $async$a_V=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:n=t.d
n===$&&C.c()
s=n.d
s===$&&C.c()
r=s[n.e]
if(r.c==="outside"){w=1
break}s=r.CW
if(s==null){q=A.cp_(A.ie2(r),r.b,!1,n.b*37+r.a,!1)
q.alx()
if(!r.ay)q.cHi()
r.CW=q
n=q}else n=s
n.b=t.d.c
p=r.gkF()
w=3
return C.b(t.y3(C.e_(new A.e6f(r),!1,null,x.H)),$async$a_V)
case 3:if(t.c==null){w=1
break}t.m(t.giP())
if(r.gkF()&&!p){o=10+t.iJ.au(26)
n=t.ghH()
if(n!=null)n.r+=o
n=r.gjM()?"":" The room still needs its plumbing, so it stays red until the pipes are done too."
t.ef(r.b+": the wiring is finished and the light has power. You are paid "+o+" stars!"+n,!0)}else if(r.gkF()){n=r.gjM()?"":" The room still needs its plumbing."
t.iA(r.b+": the wiring is finished. The light has power."+n)}case 1:return C.h(u,v)}})
return C.i($async$a_V,v)},
a_M(){var w=0,v=C.j(x.H),u,t=this,s,r,q,p,o,n
var $async$a_M=C.e(function(d,e){if(d===1)return C.f(e,v)
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
s=r.fr=A.fXn(!1,n.b*41+r.a,s)
n=s}else n=q
if(!r.ch&&!n.ga3c())r.fr.cHh()
r.fr.b=t.d.c
p=r.gjM()
w=3
return C.b(t.y3(C.e_(new A.e6e(r),!1,null,x.H)),$async$a_M)
case 3:if(t.c==null){w=1
break}t.m(t.giP())
if(r.gjM()&&!p){o=10+t.iJ.au(26)
n=t.ghH()
if(n!=null)n.r+=o
t.ef(r.b+": the plumbing is finished and nothing leaks. You are paid "+o+" stars!",!0)}else if(r.gjM())t.iA(r.b+": the plumbing is finished and nothing leaks.")
case 1:return C.h(u,v)}})
return C.i($async$a_M,v)},
bzZ(){var w=this.c
w.toString
return C.bT(E.lp,null,new A.e3S(this),w,!0,!0,!1,D.jW,!1,!1,x.H)},
bzD(d){var w,v,u,t,s,r,q,p,o=this,n=o.d
n===$&&C.c()
w=n.d
w===$&&C.c()
v=w[n.e]
n=v.c
if(n==="outside"||n==="hall"){o.ef("Add devices in a room, not in the hall or the garden.",!1)
return}n=v.id
if(n.length>=4){o.ef("This room already has four added devices.",!1)
return}w=C.a([-v.gev(0)/4,v.gev(0)/4],x.n)
for(u=v.w,t=D.d.gaf(u),s=new C.f5(t,new A.e3M());s.C();)w.push(t.gT(0).c)
for(u=D.d.gaf(u),t=new C.f5(u,new A.e3N());t.C();)w.push(u.gT(0).c+24)
for(u=n.length,r=0;r<n.length;n.length===u||(0,C.M)(n),++r)w.push(n[r].b)
p=-v.gev(0)/2+14
for(;;){if(!(p<=v.gev(0)/2-14)){q=null
break}if(D.d.d8(w,new A.e3O(p))){q=p
break}p+=6}if(q==null){o.ef("There is no free place left on the back wall.",!1)
return}o.m(new A.e3P(o,v,d,q))
o.iA("Added. It is red because it is not wired: tap it to wire it.")},
adQ(d,e){var w,v,u=this,t=u.d
t===$&&C.c()
w=t.d
w===$&&C.c()
v=w[t.e].BL(u.Q)
if(v==null)return
u.m(new A.e65(u,v,D.d.q(B.Rb,v.b),d,e))},
c6n(){var w,v,u=this,t=u.d
t===$&&C.c()
w=t.d
w===$&&C.c()
v=w[t.e].BL(u.Q)
if(v==null)return
u.m(new A.e7X(u,v))},
cn9(){var w,v,u=this,t=u.d
t===$&&C.c()
w=t.d
w===$&&C.c()
v=w[t.e].BL(u.Q)
if(v==null)return
u.m(new A.e73(u,v))
u.iA(B.hr.h(0,v.b).a+": "+B.cT7[v.f]+".")},
c6l(d){var w,v,u=this,t=u.d
t===$&&C.c()
w=t.d
w===$&&C.c()
v=w[t.e].BL(u.Q)
if(v==null)return
u.m(new A.e74(u,v))},
bzG(d){var w,v=this,u=v.d
u===$&&C.c()
w=u.d
w===$&&C.c()
v.m(new A.e3Q(v,w[u.e].M(0,d)))
v.iA(B.hr.h(0,d).a+" added. Move it with the arrows.")},
Aq(d,e,f,g,h){var w=null,v=e?g.j(0.25):D.c.j(0.07),u=C.m(14),t=e?g:D.aZ
t=C.I(t,D.r,e?2:1)
v=C.a([C.p(w,C.d(d,w,w,w,w,w,w,C.l(w,w,e?g:D.c,w,w,w,w,w,w,w,w,11,w,w,D.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),D.f,w,w,new C.o(v,w,t,u,w,w,D.n),w,w,w,w,D.eH,w,w,w)],x.p)
if(h)v.push(C.ao(w,C.p(w,w,D.f,w,w,new C.o(D.aw,w,C.I(B.F4,D.r,2),w,w,w,D.a6),w,11,w,w,w,w,w,11),w,w,w,-2,-3,w))
return new C.D(D.fv,C.aB(w,new C.an(D.a_,w,D.aa,D.f,v,w),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,!1,D.a4),w)},
ie(d,e,f,g){return this.Aq(d,e,f,g,!1)},
IS(d,e,f){return this.Aq(d,e,f,D.aE,!1)},
aB6(d,e,f,g){var w=null,v=g==null,u=v?34:w,t=v?w:D.l0,s=C.m(10),r=e?D.c:D.aZ
r=C.I(r,D.r,e?3:1)
if(v)v=w
else v=C.au(C.d(g,w,w,w,w,w,w,C.l(w,w,d.jn()>0.5?D.w:D.c,w,w,w,w,w,w,w,w,12,w,w,D.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,w,w)
return new C.D(E.tS,C.aB(w,C.p(w,v,D.f,w,w,new C.o(d,w,r,s,w,w,D.n),w,34,w,w,t,w,w,u),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,!1,D.a4),w)},
cye(d,e,f){return this.aB6(d,e,f,null)},
Dd(d,e){var w=null,v=D.c.j(0.1),u=C.m(10),t=C.I(D.aZ,D.r,1)
return new C.D(D.fv,C.aB(w,C.p(w,C.X(d,D.c,w,w,w,20),D.f,w,w,new C.o(v,w,t,u,w,w,D.n),w,36,w,w,w,w,w,40),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,e,w,w,w,w,w,w,!1,D.a4),w)},
bI5(){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null
if(k.cx!=null){w=k.dy
return C.B(C.a([C.E(C.d("\ud83c\udfac "+(w.length===0?"Walking in":w),j,1,D.a1,j,j,j,B.ffK,j,j,j),1),k.ie("\u23f9 Stop the tour",!0,k.gcxo(),D.cs)],x.p),D.m,j,D.e,D.j,0,j,j)}switch(k.r){case"furniture":w=k.d
w===$&&C.c()
v=w.d
v===$&&C.c()
u=v[w.e].BL(k.Q)
w=x.p
v=C.a([],w)
if(u!=null){t=C.a([k.Dd(D.mB,new A.e51(k)),k.Dd(D.kE,new A.e52(k)),k.Dd(D.w2,new A.e53(k)),k.Dd(D.u6,new A.e54(k)),k.Dd(G.anz,k.gc6m()),k.Dd(D.no,k.gcn8())],w)
s=k.d
r=s.d
r===$&&C.c()
if(r[s.e].c==="outside")t.push(k.Dd(D.Ok,k.gcsw()))
t.push(k.Dd(D.ec,k.gc6k(k)))
v.push(new C.a8(j,30,C.ct(t,j,j,j,j,D.aM,!1),j))}else v.push(B.aYe)
w=C.a([],w)
for(t=B.hr.gdR(B.hr),t=t.gaf(t);t.C();){s=t.gT(t)
r=D.d.q(B.dee,s.a)
q=k.d
p=q.d
p===$&&C.c()
if(r===(p[q.e].c==="outside")){r=s.b
w.push(k.ie(r.b+" "+r.a,!1,new A.e55(k,s),D.b1))}}v.push(new C.a8(j,30,C.ct(w,j,j,j,j,D.aM,!1),j))
return C.x(v,D.m,j,D.e,D.P,0,D.p)
case"walls":w=k.as
v=w<0
w=v?"All walls":"Wall "+(w+1)+": tap Look to reset"
v=C.a([k.IS(w,v,new A.e56(k))],x.p)
for(o=0;o<8;++o)v.push(k.aB6(B.axT[o],!1,new A.e57(k,o),B.dos[o]))
return new C.a8(j,30,C.ct(v,j,j,j,j,D.aM,!1),j)
case"floor":w=C.a([],x.p)
for(o=0;o<7;++o){v=B.axC[o]
t=k.d
t===$&&C.c()
s=t.d
s===$&&C.c()
w.push(k.aB6(v.b,s[t.e].Q===o,new A.e58(k,o),v.a))}return new C.a8(j,30,C.ct(w,j,j,j,j,D.aM,!1),j)
case"ceiling":w=k.d
w===$&&C.c()
v=w.d
v===$&&C.c()
w=v[w.e].go==="fan"?"\ud83c\udf00 Fan (tap for light)":"\ud83d\udca1 Light (tap for fan)"
w=C.a([k.ie(w,!1,new A.e59(k),D.bb)],x.p)
for(o=0;o<4;++o){v=B.awt[o]
t=k.d
s=t.d
s===$&&C.c()
w.push(k.cye(v,s[t.e].as===o,new A.e5a(k,o)))}return new C.a8(j,30,C.ct(w,j,j,j,j,D.aM,!1),j)
default:n=C.aY(x.S)
w=C.a([k.ie("\u26f6 Full screen",!1,k.gbO8(),D.aR)],x.p)
v=k.d
v===$&&C.c()
t=v.d
t===$&&C.c()
if(t[v.e].c==="outside")w.push(k.ie("\ud83d\udcf1 Phone",!1,k.gbOa(),D.c7))
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
r=s.gkF()&&s.gjM()
w.push(k.Aq("\ud83d\udeaa "+s.b,!1,new A.e5b(k,l),D.b1,!r))}}return new C.a8(j,30,C.ct(w,j,j,j,j,D.aM,!1),j)}},
B(d){var w,v=this,u=null
if(Date.now()<0){w=C.dE(0,0,0,0-Date.now(),0,0).a
return C.c5(u,F.n3,C.bm(!0,C.au(new C.D(D.rd,C.x(C.a([B.fF0,D.ad,B.fF7,D.R,B.fFk,D.aA,C.d("It opens again in "+D.o.an(w,36e8)+"h "+D.o.F(D.o.an(w,6e7),60)+"m",u,u,u,u,u,u,B.fhB,u,u,u),D.dY,C.bG(D.aSv,new A.e8q(d),u)],x.p),D.m,u,D.e,D.P,0,D.p),u),u,u,u),!0,!1,D.af,!0,!0),u,!1,!1,u,u)}w=C.a([C.bU(0,new C.eG(v.bE3(d),v.Z),0,0,0)],x.p)
if(v.az!=null)w.push(C.bU(0,C.e2(C.mh(new A.e8r(v),u,D.dA,D.iq,new C.cz(v.aE,x.ac),new A.e8s(v),new C.bp(1,0,x.g6),x.i),!0,u),0,0,0))
return new C.an(D.a_,u,D.aa,D.t,w,u)},
bGl(){var w,v,u=this,t=null,s=C.a([],x.p)
if(u.gajD())s.push(u.ie("\u2705 Complete work",!0,u.gaPQ(),D.be))
w=u.aK
v=w?"\u23f9 Stop walking":"\ud83d\udeb6 Walk the city"
s.push(u.ie(v,w,w?u.gb6x():u.gb6i(),D.bo))
s.push(u.ie("\ud83c\udfd7 Build",!1,u.gaMF(),D.bo))
w=u.ghH()
w=w==null?t:w.d.length
if(w==null)w=0
s.push(u.Aq("\ud83d\udcde Calls",!1,new A.e4E(u),D.c7,w>0))
s.push(u.ie("\ud83c\udfe5 Hospital",!1,new A.e4F(u),D.cs))
s.push(u.ie("\ud83d\uded2 Shop",!1,new A.e4G(u),D.cY))
s.push(u.ie("\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc67 People",!1,new A.e4K(u),D.co))
s.push(u.ie("\ud83c\udfe0 Go inside",!1,new A.e4L(u),D.bo))
w=u.aH
if((w==null?t:w.a==="shop")===!0)s.push(u.ie("\ud83d\uded2 Buy things",u.k2,new A.e4M(u),D.bI))
w=u.aH
if((w==null?t:w.a==="tower")===!0)s.push(u.ie("\ud83c\udfe2 Level "+w.f+" of "+w.gLP(),!1,new A.e4N(u),D.co))
if(u.cI!=null)s.push(u.ie("\ud83d\udccb My job"+(u.avr()==null?"":" \xb7 "+C.w(u.avr())+" m"),!1,new A.e4O(u),D.bI))
w=u.eF.length
if(w!==0)s.push(u.ie("\u23f3 Waiting: "+w,!1,new A.e4P(u),D.aE))
s.push(u.Aq("\ud83d\udef5 Orders",u.gpe().x!=null,new A.e4Q(u),D.bI,u.gpe().x==null))
w=u.p4
v=w?"\u23f9 Stop drone":"\ud83d\ude81 Drone"
s.push(u.ie(v,w,new A.e4R(u),D.aR))
w=u.h3
v=w?"\ud83c\udff7 Show tags":"\ud83c\udff7 Hide tags"
s.push(u.ie(v,w,new A.e4H(u),D.cs))
s.push(u.ie("\ud83d\udc41 Hide all",!1,new A.e4I(u),D.bL))
w=u.gKi()
s.push(u.ie("\ud83d\ude96 Uber",(w==null?t:w.f)!=null,u.gcBT(),D.bI))
s.push(u.ie("\ud83d\uddfa Map",u.y,new A.e4J(u),D.by))
return s},
gcvw(){var w,v,u,t,s,r,q,p,o=this
if(!o.h3){w=o.f
w===$&&C.c()
return w}w=o.rT
v=o.f
v===$&&C.c()
if(w===v&&o.qG!=null){w=o.qG
w.toString
return w}o.rT=v
w=C.a([],x.E)
for(u=o.f.c,t=u.length,s=0;s<u.length;u.length===t||(0,C.M)(u),++s){r=u[s]
q=!1
if(r.d===0)if(!r.c.A(0,D.bx)){p=r.b
if(!C.cU(p,"rooms still need work",0))q=!C.cU(p,"house is finished",0)}if(q)w.push(r)}u=o.f
return o.qG=new A.tG(v.a,v.b,w,u.d,u.e,0)},
bE3(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d=f.d
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
w=w.a.length!==0?e:new A.e3Z(f)
s=f.gcvw()
r=f.e
r===$&&C.c()
q=f.at
p=f.ax
o=f.ay
n=f.ah
if(f.er)d=62
else if(f.f_)d=C.aH(a0,e,d).w.r.b+66
else d=f.y&&f.d.a.length===0?104:10
m=f.cfp()
l=x.p
k=C.a([],l)
if(f.y&&f.d.a.length===0&&!f.er)k.push(new A.bij(f.d,f.gc6e(),Math.min(138,u*0.36),e))
j=A.XI(n,m,r,new A.e4_(f),new A.e40(f),o,q,e,e,new A.e4b(),p,d,f.gbMe(),new A.e4c(f),f.gc6i(),s,t,w,k,e)
i=f.y1!=null||f.y2||f.R8||f.k3||f.go||f.k2||f.id
d=f.ok
h=(d==null?e:d.d)===1
if((i||h)&&!f.ah){d=C.a([j],l)
if(i){if(f.id)w=f.c0f()
else if(f.k2)w=f.ctY()
else if(f.go)w=f.cfc()
else if(f.k3)w=f.bND()
else w=f.R8?f.bMR():f.bFh()
d.push(C.bU(0,w,0,0,0))}if(h)d.push(C.ao(e,C.e2(C.au(new C.jK(f.p3,new A.e4d(),e,e,x.cI),e,e,e),!0,e),e,e,0,0,74,e))
g=new C.an(D.a_,e,D.b2,D.t,d,e)}else g=j
if(f.ah)return f.bGy(g)
if(f.er)return f.bQx(g)
if(f.f_)return f.ciA(g)
d=f.d
if(d.a.length!==0)d=v.gyW()?"Done \u2713":"To do"
else d=""+d.gcMO()+"/"+f.d.gqH().length+" done"
w=f.d
t=w.d
t===$&&C.c()
w=t[w.e].c==="outside"
t=!w?e:new A.U8(f.c5,f.bD!=null,12,e)
if(w)w=f.bGl()
else{w=f.x?"\ud83d\udd2d See the whole room":"\ud83c\udfe0 Be inside"
w=C.a([f.ie(w,!1,new A.e4e(f),D.b1)],l)
if(f.d.a.length===0){s=f.cx!=null
r=s?"\u23f9 Stop tour":"\ud83c\udfac Tour"
w.push(f.ie(r,s,new A.e4f(f),D.c7))}w.push(f.ie("\u2b06 Look up at the ceiling",!1,f.gc1g(),D.b1))
s=f.z
r=s?"\ud83d\udeb6 Stop looking round":"\ud83d\udd04 Look all round (360)"
w.push(f.ie(r,s,new A.e4g(f),D.cY))
w.push(f.ie("\ud83d\udcfa TV",!1,f.gcBN(),D.co))
s=f.d
if(s.a.length===0){r=s.d
r===$&&C.c()
s=r[s.e].c!=="outside"?"\ud83c\udf33 Go outside":"\ud83c\udfe0 Go inside"
w.push(f.ie(s,!1,new A.e4h(f),D.bo))}s=f.d
r=s.d
r===$&&C.c()
if(r[s.e].c==="outside"){s=f.aK
r=s?"\u23f9 Stop walking":"\ud83d\udeb6 Walk about"
w.push(f.ie(r,s,s?f.gb6x():f.gb6i(),D.bo))}if(f.d.a.length===0)w.push(f.ie("\u2795 Add",!1,f.gaMF(),D.bo))
if(f.d.a.length===0){s=f.ghH()
s=s==null?e:s.d.length
if(s==null)s=0
w.push(f.Aq("\ud83c\udfd8 Community",!1,new A.e4i(f),D.c7,s>0))}w.push(f.ie("\ud83d\udd26 Tester",f.w,new A.e41(f),D.cY))
if(f.d.a.length!==0)w.push(f.Aq("\ud83d\udd27 Do the lesson",!1,f.gc6h(),D.bI,!v.gyW()))
else{s=f.Aq("\u26a1 Wiring",!1,f.gcf5(),D.bI,!v.gkF())
r=v.c
r=(r==="bathroom"||r==="kitchen")&&!v.gjM()
D.d.v(w,C.a([s,f.Aq("\ud83d\udeb0 Plumbing",!1,f.gcev(),D.co,r),f.ie("\ud83d\uddfa Map",f.y,new A.e42(f),D.by)],l))}}return A.TE(D.aE,new A.e43(f,a0),C.x(C.a([new C.a8(e,30,C.ct(w,e,e,e,e,D.aM,!1),e),D.au,new C.a8(e,30,C.ct(C.a([f.IS("\ud83d\udc41 Look",f.r==="look",new A.e44(f)),f.IS("\ud83d\udecb Furniture",f.r==="furniture",new A.e45(f)),f.IS("\ud83e\uddf1 Walls",f.r==="walls",new A.e46(f)),f.IS("\ud83d\udfeb Floor",f.r==="floor",new A.e47(f)),f.IS("\u2b1c Ceiling",f.r==="ceiling",new A.e48(f)),f.IS("\ud83d\udeaa Doors",f.r==="doors",new A.e49(f)),f.ie("\ud83d\udcd8 Learn",!1,new A.e4a(a0),D.by)],l),e,e,e,e,D.aM,!1),e),D.au,f.bI5()],l),D.E,e,D.e,D.P,0,D.p),g,d,v.b,t)},
cl9(d){return C.bT(E.lp,null,new A.e72(this),d,!0,!0,!0,D.jW,!1,!1,x.H)}}
A.bij.prototype={
B(d){var w=null,v=D.k.E((this.e-10)/126,0.5,1),u=D.w.j(0.6),t=C.m(12),s=C.I(D.aZ,D.r,1)
return C.p(w,new C.a8(126*v,84*v,C.aB(w,C.eN(D.A,C.b4(w,w,w,new A.bhJ(this.c,w),B.f_2),D.f,D.xg),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new A.dqY(this,v),w,w,w,w,!1,D.a4),w),D.f,w,w,new C.o(u,w,s,t,w,w,D.n),w,w,w,w,D.lZ,w,w,w)}}
A.bhJ.prototype={
a6(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=this.b,e=f.d
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
if(t.gkF()&&t.gjM())m=D.be
else m=!t.gkF()?D.aw:D.d0
l=C.bz(o,D.hG)
$.W()
k=new C.aq(D.W,D.T,D.Y,D.Z,D.X)
k.r=m.j(t.gkF()&&t.gjM()?0.35:0.5).gp(0)
j=k.H()
v.drawRRect(C.eU(l),j)
j.delete()
l=C.bz(o,D.hG)
k=new C.aq(D.W,D.T,D.Y,D.Z,D.X)
k.b=D.ac
k.c=n?2.2:0.8
k.r=(n?D.c:D.bX).gp(0)
j=k.H()
v.drawRRect(C.eU(l),j)
j.delete()
i=t.c
A:{if("bedroom"===i){l="\ud83d\udecf"
break A}if("bathroom"===i){l="\ud83d\udebf"
break A}if("kitchen"===i){l="\ud83c\udf73"
break A}if("living"===i){l="\ud83d\udecb"
break A}if("outside"===i){l="\ud83c\udf33"
break A}l=""
break A}h=new C.l3(new C.eS(l,g,g,D.d_,g,g,g,g,g,g,B.feY),D.a5,D.c8,new C.kK(1),g,g,g,g,D.c6,g)
h.eT()
l=h.b
k=l.c
l=l.a.c
h.a6(d,new C.t(s+(q-s)/2-k/2,r+(p-r)/2-l.gbd(l)/2))}},
aw(d){return!0}}
A.aHZ.prototype={
U(){return new A.bsa()},
bgS(d,e){return this.c.$2(d,e)}}
A.bsa.prototype={
aYY(d){var w,v,u={},t=u.a=d.aF(0,B.ecL),s=t.gcH()>46?u.a=t.eO(0,t.gcH()).aI(0,46):t,r=s.a/46,q=-s.b/46,p=Math.sqrt(r*r+q*q)
s=this.a
s.toString
w=p<0.15
v=w?0:r
s.bgS(v,w?0:q)
this.m(new A.f03(u,this))},
aYX(){this.a.bgS(0,0)
this.m(new A.f02(this))},
B(d){var w=this,v=null,u=C.p(v,v,D.f,v,v,new C.o(D.w.j(0.42),v,C.I(D.bo.j(0.9),D.r,2.4),v,v,v,D.a6),v,132,v,v,v,v,v,132),t=C.p(v,v,D.f,v,v,new C.o(v,v,C.I(D.bo.j(0.25),D.r,1.5),v,v,v,D.a6),v,66,v,v,v,v,v,66),s=w.d,r=s==null
if(r)s=D.J
return C.nI(D.cg,new C.a8(132,132,new C.an(D.A,v,D.aa,D.t,C.a([u,t,C.dU(C.p(v,v,D.f,v,v,new C.o(D.bo.j(r?0.55:0.9),v,C.I(D.c,D.r,2),v,v,v,D.a6),v,56,v,v,v,v,v,56),s)],x.p),v),v),v,new A.f04(w),new A.f05(w),v,new A.f06(w),v,v,new A.f07(w))}}
A.eVM.prototype={}
A.M5.prototype={}
A.PZ.prototype={
gbdt(){var w,v=this.c
A:{if("sick"===v){w="\ud83e\udd12"
break A}if("light"===v){w="\ud83d\udca1"
break A}if("office"===v){w="\ud83c\udfe2"
break A}w="\u26a1"
break A}return w},
gaDa(){var w,v=this.c
A:{if("sick"===v){w=this.d
if(w.length===0)w="A neighbour"
break A}if("light"===v){w="City lights office"
break A}if("office"===v){w="Office manager"
break A}w="Your neighbour"
break A}return w},
gbpw(){var w,v=this.c
A:{if("sick"===v){w="Needs a doctor"
break A}if("light"===v){w="A street light is out"
break A}if("office"===v){w="No power in an office"
break A}w="No power at a house"
break A}return w},
gaGn(d){var w,v=this,u="I will pay you between 10 and 35 stars. Thank you!",t=v.c
A:{if("sick"===t){w=C.a(["Hello! "+v.gaDa()+" is very sick and cannot get up.","Please take them to the hospital: walk into the hospital and onto the desk to admit them.",u],x.s)
break A}if("office"===t){w=""+v.e
w=C.a(["Hello, this is the office manager. The office on level "+w+" of "+v.b+" has lost its power and nobody can work.","Please take the elevator up to level "+w+", and fix the wiring at the breaker panel there.",u],x.s)
break A}if("light"===t){w=C.a(["Hello! A street light is out and the street is dark.","It is the dark one with the red sign. Could you fix its wiring?",u],x.s)
break A}w=C.a(["Hello! All the lights went out in "+v.b+". The power is off in the whole house.","Could you check the breaker panel inside and fix the wiring? Switch the power off before you touch anything.",u],x.s)
break A}return w}}
A.bSN.prototype={}
A.ps.prototype={}
A.Nq.prototype={
U(){return new A.bjd()}}
A.bjd.prototype={
ro(d){var w=this.c
w.toString
return C.a3(w,!1).cg(C.e_(new A.dOh(d),!1,null,x.H))},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null
$.arY="tech"
w=C.aI(m,m,m,m,R.nq,m,m,m,new A.dOi(d),m,m,m,m,m,m)
v=D.aE.j(0.16)
u=C.m(13)
t=x.p
u=C.B(C.a([w,C.p(m,B.b7L,D.f,m,m,new C.o(v,m,C.I(D.aE.j(0.6),D.r,1),u,m,m,D.n),m,40,m,m,m,m,m,40),D.as,B.bBZ],t),D.m,m,D.e,D.j,0,m,m)
v=C.m(26)
w=C.I(D.aE,D.r,1.8)
s=x.V
r=C.a([new C.ac(0,D.G,D.aE.j(0.28),D.dp,26)],s)
r=C.aB(m,C.p(m,C.x(C.a([C.p(m,B.b8b,D.f,m,m,new C.o(D.aE.j(0.2),m,C.I(D.aE,D.r,2),m,C.a([new C.ac(0,D.G,D.aE.j(0.5),D.J,22)],s),m,D.a6),m,78,m,m,m,m,m,78),D.ad,B.fy8,D.au,B.fEP,D.aA,C.p(m,B.fy4,D.f,m,m,new C.o(D.aE,m,m,C.m(20),m,m,D.n),m,m,m,m,Z.ajx,m,m,m)],t),D.m,m,D.e,D.j,0,D.p),D.f,m,m,new C.o(m,m,w,v,r,B.c_N,D.n),m,m,m,m,D.vR,m,m,m),D.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new A.dOj(n),m,m,m,m,m,m,!1,D.a4)
v=D.w.j(0.6)
w=C.m(16)
w=C.a([r,C.ao(m,C.aB(m,C.p(m,B.fMu,D.f,m,m,new C.o(v,m,C.I(F.fu,D.r,1.4),w,m,m,D.n),m,m,m,m,B.bvo,m,m,m),D.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new A.dOk(n),m,m,m,m,m,m,!1,D.a4),m,m,m,10,10,m)],t)
v=n.aZ_("JOBS")
r=n.aYZ(C.a([n.vC("\ud83d\udd0c","Wire a room","Go to a room that needs wiring",D.be,new A.dOo(n)),n.vC("\ud83d\udebd","Plumb a room","Go to a bathroom or kitchen",D.aR,new A.dOp(n)),n.vC("\ud83d\udd27","Fix a house","Walk the house and fix every sign",D.aE,new A.dOq(n)),n.vC("\ud83e\uddf1","Build a room","Frame, drywall, then wire",D.bo,new A.dOr(n)),n.vC("\u26a1","Wiring bench","Just the wiring, one room",D.bI,new A.dOs(n)),n.vC("\ud83e\uddea","Safety inspection","A test job: marked when you submit",D.by,new A.dOt(n)),n.vC("\ud83d\udcde","Service calls","A customer rings with problems",D.i5,new A.dOu(n)),n.vC("\ud83c\udfd8","Neighbourhood jobs","Fix lights and wiring around the city",D.aR,new A.dOv(n))],t))
s=n.aZ_("LESSONS")
q=C.a([],t)
for(p=0;p<17;++p){o=B.dcV[p]
q.push(n.vC(o.b,o.c,o.d,o.e,new A.dOl(n,o)))}q.push(n.vC("\ud83e\udde0","Diagram lessons","Three-way switch, fan with light",D.by,new A.dOm(n)))
q.push(n.vC("\ud83d\udcd8","Learn the trades","Short cards for beginners",D.by,new A.dOn(n)))
return C.c5(m,D.bZ,C.bm(!0,C.ct(C.a([u,D.ad,new C.an(D.a_,m,D.aa,D.t,w,m),v,r,s,n.aYZ(q)],t),m,B.aiP,m,m,D.ag,!1),!0,!1,D.af,!0,!0),m,!1,!1,m,m)},
aZ_(d){var w=null
return new C.D(B.bzY,C.B(C.a([C.E(C.p(w,w,D.f,D.aE.j(0.35),w,w,w,1,w,w,w,w,w,w),1),new C.D(D.fQ,C.d(d,w,w,w,w,w,w,B.fbr,w,w,w),w),C.E(C.p(w,w,D.f,D.aE.j(0.35),w,w,w,1,w,w,w,w,w,w),1)],x.p),D.m,w,D.e,D.j,0,w,w),w)},
aYZ(d){var w,v,u,t,s=null,r=x.p,q=C.a([],r)
for(w=0;v=d.length,w<v;w+=2){u=d[w]
t=w+1
v=t<v?d[t]:D.bJ
q.push(new C.D(D.cu,new C.E1(new C.cb(D.aM,D.e,D.j,D.ai,s,D.p,s,0,C.a([new C.bA(1,D.bd,u,s),D.ab,new C.bA(1,D.bd,v,s)],r),s),s),s))}return C.x(q,D.m,s,D.e,D.j,0,D.p)},
vC(d,e,f,g,h){var w=null,v=C.a([g.j(0.2),B.F4],x.O),u=C.m(22),t=C.I(g.j(0.55),D.r,1.4),s=x.V,r=C.a([new C.ac(0,D.G,g.j(0.18),D.cv,16)],s),q=g.j(0.22),p=C.I(g.j(0.7),D.r,1.5)
s=C.a([new C.ac(0,D.G,g.j(0.35),D.J,14)],s)
return C.aB(w,C.p(w,C.x(C.a([C.p(w,C.au(C.d(d,w,w,w,w,w,w,D.wN,w,w,w),w,w,w),D.f,w,w,new C.o(q,w,p,w,s,w,D.a6),w,56,w,w,w,w,w,56),D.R,C.d(e,w,w,w,w,w,w,D.iY,D.L,w,w),D.cO,C.d(f,w,2,D.a1,w,w,w,B.fmS,D.L,w,w)],x.p),D.m,w,D.b7,D.j,0,D.p),D.f,w,w,new C.o(w,w,t,u,r,new C.a9(D.b3,D.b6,D.x,v,w,w),D.n),w,w,w,w,B.bv6,w,w,w),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,h,w,w,w,w,w,w,!1,D.a4)}}
A.avJ.prototype={
U(){return new A.brZ()},
bpc(){return this.c.$0()}}
A.brZ.prototype={
a_(){this.a1()
this.d=C.dq(D.ne,new A.f_U(this))},
t(){var w=this.d
if(w!=null)w.a4(0)
this.a2()},
B(d){var w=null,v=D.w.j(0.6),u=C.m(18),t=C.I(D.bI,D.r,1.5)
return C.p(w,C.d("\u2b50 "+C.w(this.a.bpc()),w,w,w,w,w,w,B.fbM,w,w,w),D.f,w,w,new C.o(v,w,t,u,w,w,D.n),w,w,w,D.ir,D.rb,w,w,w)}}
A.b6w.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null
if(n.d)return A.fXS(E.B0,n.r,n.z,n.Q,n.y,n.as,n.db,n.w,n.f,n.c)
w=n.r
v=x.p
u=C.a([C.bU(0,A.fXS(E.B0,w,n.z,n.Q,n.y,n.as,n.db,n.w,n.f,n.c),0,0,0)],v)
t=n.ch
s=t!=null
if(s)u.push(C.ao(m,C.x(t,D.E,m,D.e,D.j,0,D.p),m,m,8,m,8,m))
t=C.a([],v)
r=n.CW
if(r!=null)D.d.v(t,r)
r=C.a([],v)
q=n.e
if(q!=null)r.push(new A.avJ(q,m))
r.push(new A.afj(D.hC,"Zoom in",w,!1,m))
t.push(C.B(r,D.m,m,D.e,D.P,0,m,m))
t.push(new A.afj(D.yJ,"Zoom out",w,!0,m))
w=n.x
t.push(n.awV(B.bIP,"Back to the whole view",w))
t.push(n.awV(Ai.C8,"Flip up and down swiping",new A.ctE()))
t.push(n.awV(D.ke,"Flip left and right swiping",new A.ctF()))
u.push(C.ao(m,C.x(t,D.dC,m,D.e,D.j,0,D.p),m,m,m,8,8,m))
t=n.dx
if(t!=null)u.push(C.ao(14,C.au(t,m,m,m),m,m,0,0,m,m))
t=n.at
if(t!=null){r=n.cy
if(r==null)s=s?60:10
else s=r
r=n.ax
q=(r?D.dX:D.ev).j(0.95)
p=C.m(14)
o=C.I(r?D.bo:D.cs,D.r,1)
u.push(C.ao(m,C.p(m,C.d(t,m,m,m,m,m,m,B.fc2,m,m,m),D.f,m,m,new C.o(q,m,o,p,m,m,D.n),m,m,m,m,D.ni,m,m,m),m,m,10,62,s,m))}t=n.ay
if(t!=null){s=C.m(16)
r=C.I(D.aZ,D.r,1)
t=C.a([C.d(t.a,m,m,m,m,m,m,B.fnp,m,m,m),D.cO,C.d(t.b,m,m,m,m,m,m,E.Uh,m,m,m)],v)
q=n.cx
if(q!=null)D.d.v(t,C.a([D.am,q],v))
u.push(C.ao(8,C.p(m,C.B(C.a([C.E(C.x(t,D.E,m,D.e,D.j,0,D.p),1),C.aI(m,m,m,m,D.GV,m,m,m,w,m,m,m,m,m,D.cc)],v),D.E,m,D.e,D.j,0,m,m),D.f,m,m,new C.o(E.ad7,m,r,s,m,m,D.n),m,m,m,m,E.aiz,m,m,m),m,m,10,10,m,m))}return new C.an(D.a_,m,D.aa,D.t,u,m)},
awV(d,e,f){var w=null,v=D.w.j(0.55),u=C.I(D.aZ,D.r,1)
return new C.D(D.eG,C.hp(C.aB(w,C.p(w,C.X(d,D.c,w,w,w,20),D.f,w,w,new C.o(v,w,u,w,w,w,D.a6),w,38,w,w,w,w,w,38),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,!1,D.a4),w,e,w,w),w)}}
A.aWC.prototype={
B(d){var w,v=this,u=null,t=x.p,s=C.a([C.aI(u,u,u,u,R.nq,u,u,u,new A.bUS(d),u,u,u,u,u,u)],t),r=v.x,q=v.c,p=v.d
if(r==null)s.push(C.E(C.d(q,u,u,u,u,u,u,C.l(u,u,p,u,u,u,u,u,u,u,u,16,u,u,D.u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),1))
else D.d.v(s,C.a([C.d(q,u,u,u,u,u,u,C.l(u,u,p,u,u,u,u,u,u,u,u,16,u,u,D.u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),D.as,C.E(r,1),D.as],t))
r=p.j(0.15)
q=C.m(16)
w=C.I(p.j(0.6),D.r,1)
s.push(C.aB(u,C.p(u,C.B(C.a([C.X(Aj.am3,p,u,u,u,17),D.ej,C.d(v.w,u,u,u,u,u,u,C.l(u,u,p,u,u,u,u,u,u,u,u,12,u,u,D.u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],t),D.m,u,D.e,D.P,0,u,u),D.f,u,u,new C.o(r,u,w,q,u,u,D.n),u,u,u,u,D.rb,u,u,u),D.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,v.r,u,u,u,u,u,u,!1,D.a4))
s=C.B(s,D.m,u,D.e,D.j,0,u,u)
q=C.aH(d,u,x.w).w
return C.c5(u,D.bZ,C.bm(!0,C.x(C.a([new C.D(B.bAa,s,u),C.p(u,C.ce(v.f,D.t,u,D.y,u,u,u,u,D.ag),D.f,u,new C.aX(0,1/0,0,q.a.b*0.34),B.b3e,u,u,u,u,E.Ze,u,u,1/0),C.E(C.bx(Ah.abl,v.e,D.aq),1)],t),D.m,u,D.e,D.j,0,D.p),!0,!1,D.af,!0,!0),u,!1,!1,u,u)}}
A.DF.prototype={
U(){var w=new C.y2()
$.yM()
w.hE(0)
return new A.azH(w)},
gda(d){return this.d}}
A.azH.prototype={
gyV(){var w,v=this,u=v.d
if(u===$){w=A.rZ(v.a.c)
v.d!==$&&C.bH()
v.d=w
u=w}return u},
gep(d){var w,v=this.e
if(v===$){w=this.a.d
v=this.e=w==null?new A.Ck(C.U(x.S,x.N)):w}return v},
gark(){var w=this.gyV().a
return w==="light"||w==="fan"},
gih(){var w,v=this,u=v.f
if(u===$){w=v.gark()?new A.x5(1.15,0.12,11,B.UO,$.aw()):new A.x5(0.42,0.26,12,B.fYH,$.aw())
v.f!==$&&C.bH()
u=v.f=w}return u},
goX(){var w=this,v=w.r
return v===$?w.r=A.h0J(w.gyV(),w.gep(0),!0):v},
aA3(d){var w
this.m(new A.d6L(this,d))
A:{if("practice"===d){w="Practice: you can put a wire anywhere. The mistake shows when the power goes on."
break A}if("test"===d){w="Test: put every wire where you think it goes. Nothing is marked until you submit."
break A}w="Learn: a wrong wire is refused and explained."
break A}this.j6(w,!0)},
t(){var w=this.as
if(w!=null)w.a4(0)
this.a2()},
j6(d,e){var w=this,v=w.as
if(v!=null)v.a4(0)
w.m(new A.d6J(w,d,e))
w.as=C.cM(D.lr,new A.d6K(w))},
nv(d){return this.j6(d,!1)},
qq(){var w=this.gep(0)
w.d=w.d&&w.a&&w.c>=2
this.r=A.h0J(this.gyV(),w,!0)},
oc(){var w,v,u,t=this
if(t.gark()&&t.gep(0).c===0){t.gih().hP(11,0.12,B.UO,1.15)
t.m(new A.d6w(t))
return}w=t.gih()
v=t.gep(0).c===0
u=v?2.8:0.4
v=v?12:10
w.hP(v,0.26,new A.r(0,0.1,u),0.42)
t.m(new A.d6x(t))},
aWR(d){var w=this
if(w.gark()){w.gih().hP(9,0.12,B.UO,1.15)
return}if(d==="ground")w.gih().hP(8,0.55,B.h1q,0.15)
else if(d==="white")w.gih().hP(8.5,0.2,B.h5q,0.95)
else w.gih().hP(8.5,0.2,B.fVq,-0.95)},
c6o(){var w,v,u,t,s="ground",r=this.gep(0),q=!r.a||r.c>0,p=new A.d6v(this),o=this.gyV()
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
IV(d){var w,v,u,t,s,r,q,p,o,n=this,m="square",l="STOP! The power is still on. Turn the breaker OFF before you touch any wire.",k="Recorded."
if(d===0){n.oc()
return}if(B.aOJ.q(0,d))return
w=n.gyV()
v=w.f
u=C.S(v).k("Z<1>")
t=C.C(new C.Z(v,new A.d6y(d),u),u.k("J.E"))
v=w.a
s=A.hrg(v,d)
u=s!=null
if(u){r=n.gep(0)
r=r.c===0&&r.b.iF(0,s)}else r=!1
if(r){w=n.gep(0)
if(w.a){A.fT(180,220,0.25,m)
n.nv(l)
return}w=w.b
w.bt(w,new A.d6z(s))
n.m(n.gc6r())
n.j6("Wire taken off the screw.",!0)
return}r=!1
if(t.length!==0){q=n.gep(0)
if(q.c===0){q=q.b
if(q.ai(0,d))r=n.w.length===0||q.h(0,d)===n.w}}if(r){w=n.gep(0)
if(w.a){A.fT(180,220,0.25,m)
n.nv(l)
return}w.b.W(0,d)
n.m(new A.d6A(n))
n.j6(w.y?k:"Wire taken off.",!0)
return}if(u){u=n.gep(0)
u=u.c===0&&!u.b.iF(0,s)&&D.d.b3(w.e,new A.d6B(s))}else u=!1
if(u){n.m(new A.d6C(n,s,d))
if(n.w.length!==0){n.aWR(s)
n.j6(D.d.h_(w.e,new A.d6D(s)).b+": picked up. Now tap the screw, nut or wire it joins.",!0)}return}if(t.length!==0&&n.w.length!==0&&n.gep(0).c===0){u=n.gep(0)
p=A.hrc(w,u,n.w,D.d.gI(t),!1)
if(p!=null){++n.Q
A.fT(180,220,0.25,m)
n.nv(p)}else if(u.y){A.fT(520,60,0.25,"tri")
n.m(new A.d6E(n,d))
n.j6(k,!0)
n.w=""}else{A.yA()
n.m(new A.d6F(n,d))
if(u.r)n.j6(D.d.gI(t).b+": fastened.",!0)
else if(A.bDr(w,u))n.j6("Every wire is on the right screw. Now push the device into the box.",!0)
else n.j6(D.d.gI(t).b+": fastened correctly.",!0)
n.gih().x8(7,A.aOR(v,d,u))
n.w=""}return}o=n.goX().b.h(0,d)
if(o!=null){n.m(new A.d6G(n,d))
w=n.gih()
v=o.c
w.x8(o.d,v)}},
ck8(){var w,v=this
v.m(new A.d6H(v))
w=v.gep(0)
if(w.a){A.fT(120,200,0.25,"saw")
if(w.c===0)v.nv("The breaker is ON. The wires are LIVE at 120 volts. Turn it OFF before you touch anything.")}else{A.fT(600,100,0.25,"tri")
v.j6("Breaker OFF. It is safe to work on the wires. (In real life, always test them with a tester first.)",!0)}},
czt(){var w,v,u=this,t="The tester glows: this outlet has 120 volts and is wired correctly. The lesson is complete! Mistakes: ",s=" is wired correctly: every wire is on the terminal that belongs to it. The lesson is complete! Mistakes: ",r=u.gyV(),q=u.gep(0),p=A.KS(r,q)
if(p.a!=="ok"){u.m(new A.d6M(u,p));++u.Q
A.fT(180,220,0.25,"square")
C.fF()
r=p.r==="arc"
w=r?95:150
A.fT(w,450,0.5,r?"saw":"noise")
if(q.y)r=p.d?"The breaker tripped.":"Power is on."
else r=p.b+"\nHow to fix it: "+p.w
u.nv(r)
return}u.m(new A.d6N(u))
A.yA()
v=r.a
A:{if("switch"===v){r="Power on. Flip the switch and the light turns on: both black wires are on brass screws, so the switch opens and closes the hot wire. The lesson is complete! Mistakes: "+u.Q+"."
break A}if("gfci"===v){r="Power on. Press RESET (it clicks), then TEST: it must shut the outlet off. Wired on LINE, it protects the whole circuit. The lesson is complete! Mistakes: "+u.Q+"."
break A}if("outlet"===v){r=t+u.Q+"."
break A}q=D.d.q(B.jP,v)
if(q){r="Power on. "+r.b+(s+u.Q+".")
break A}if(v!=="light"&&v!=="fan"){r="Power on. The "+r.b.toLowerCase()+(s+u.Q+".")
break A}r=t+u.Q+"."
break A}u.j6(r,!0)},
B(a1){var w,v=this,u=null,t=v.c6o(),s=D.d.bg(t,new A.d6W()),r=s<0?"All done":"Step "+(s+1)+"/"+v.gyV().d.length,q=v.gyV(),p=v.gep(0),o=A.bDr(q,p)&&!p.a,n=v.goX(),m=v.gih(),l=v.x,k=v.y,j=v.z,i=l!==0?v.goX().b.h(0,v.x):u,h=(p.a?D.ev:D.dX).j(0.95),g=C.m(18),f=p.a,e=C.I(f?D.cs:D.bo,D.r,1.5),d=C.X(f?D.ho:B.bKs,D.c,u,u,u,18),a0=x.p
g=C.a([C.aB(u,C.p(u,C.B(C.a([d,D.ej,C.d(f?"Breaker ON (live)":"Breaker OFF (safe)",u,u,u,u,u,u,D.ox,u,u,u)],a0),D.m,u,D.e,D.P,0,u,u),D.f,u,u,new C.o(h,u,e,g,u,u,D.n),u,u,u,u,D.hb,u,u,u),D.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,v.gck7(),u,u,u,u,u,u,!1,D.a4)],a0)
h=!p.r&&!p.y
h=C.a([A.wK("Learn",D.bo,D.we,h,new A.d6X(v)),D.am,A.wK("Practice",D.cs,D.p_,p.r,new A.d6Y(v)),D.am,A.wK("Test",D.by,D.ua,p.y,new A.d75(v)),D.am],a0)
if(!p.y)D.d.v(h,C.a([A.wK("Hints",D.aE,D.rj,p.e,new A.d76(v)),D.am,A.wK("Labels",D.aR,M.C1,p.f,new A.d77(v)),D.am,A.wK("Wire guide",D.ms,D.o7,!1,new A.d78(a1)),D.am],a0))
h.push(A.wK("Brass side",B.bng,E.an_,!1,new A.d79(v)))
h.push(D.am)
h.push(A.wK("Silver side",B.LF,D.Oi,!1,new A.d7a(v)))
h.push(D.N)
n=A.XI(!1,u,m,new A.d7b(v),u,j,l,i,u,u,k,u,u,v.gIT(),v.gIU(),n,!1,u,g,h)
m=C.a([],a0)
l=p.c
if(l===0){l=C.a([],a0)
for(k=D.d.gaf(q.e),j=new C.f5(k,new A.d7c(v));j.C();){i=k.gT(0)
h=i.c
g=new C.aQ(14,14)
f=v.w
e=i.a
f=f===e
d=f?D.b1:D.aZ
w=new C.ay(d,f?3:1,D.r,-1)
d=C.a([],a0)
if(p.b.iF(0,e))d.push(new C.D(D.fv,C.X(D.eb,i.d,u,u,u,18),u))
f=i.b
e=i.d
d.push(new C.y(f,u,new C.F(!0,e,u,u,u,u,13,D.u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u),u,u,u,u,u,u,u,u,u))
l.push(new C.D(D.ir,C.aB(u,C.p(u,new C.cb(D.aM,D.e,D.j,D.m,u,D.p,u,0,d,u),D.f,u,u,new C.o(h,u,new C.bJ(w,w,w,w),new C.bk(g,g,g,g),u,u,D.n),u,u,u,u,D.hA,u,u,u),D.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new A.d6Z(v,i),u,u,u,u,u,u,!1,D.a4),u))}l=C.a([C.bX(D.bB,l,D.bs,6,8)],a0)
if(p.y)D.d.v(l,C.a([C.B(C.a([A.u3("Submit the test",D.ua,new A.d7_(v,a1),D.by)],a0),D.m,u,D.e,D.j,0,u,u),D.N],a0))
l.push(D.N)
if(o)p="Push it into the box"
else p=p.a?"Turn the breaker OFF first":"Fasten every wire first"
l.push(C.B(C.a([A.u3(p,B.anx,o?new A.d70(v):u,D.aE)],a0),D.m,u,D.e,D.j,0,u,u))
D.d.v(m,l)}else if(l===1)D.d.v(m,C.a([C.B(C.a([A.u3("Pull it back out",D.rn,new A.d71(v),D.ae),D.ab,A.u3("Put the cover plate on",A_.w3,new A.d72(v),D.aE)],a0),D.m,u,D.e,D.j,0,u,u)],a0))
else{l=A.u3("Start over",D.l6,new A.d73(v),D.ae)
p=p.d
k=p?"Tested \u2713":"Power on and test"
D.d.v(m,C.a([C.B(C.a([l,D.ab,A.u3(k,D.ho,p?u:v.gczs(),D.aE)],a0),D.m,u,D.e,D.j,0,u,u)],a0))}return A.TE(D.aE,new A.d74(v,a1,t),C.x(m,D.m,u,D.e,D.P,0,D.p),n,r,q.b,u)}}
A.a9e.prototype={
U(){return new A.aFw()},
gda(d){return this.c}}
A.aFw.prototype={
gep(d){var w,v=this.d
if(v===$){w=this.a.c
v=this.d=w==null?A.fXo():w}return v},
gih(){var w=this.e
return w===$?this.e=new A.x5(-0.3,0.18,40,B.aUI,$.aw()):w},
goX(){var w=this.f
return w===$?this.f=A.bAT(this.gep(0)):w},
t(){var w=this.z
if(w!=null)w.a4(0)
this.a2()},
j6(d,e){var w=this,v=w.z
if(v!=null)v.a4(0)
w.m(new A.eQk(w,d,e))
w.z=C.cM(D.lr,new A.eQl(w))},
nv(d){return this.j6(d,!1)},
oc(){this.gih().hP(40,0.18,B.aUI,-0.3)
this.m(new A.eQd(this))},
IV(d){var w,v,u,t,s,r,q=this,p="square"
if(d===0){q.oc()
return}w=C.G([41,"tail",42,"trap",43,"arm"],x.S,x.N).h(0,d)
if(w!=null&&!q.gep(0).a.q(0,w)){v=q.r
if(v.length===0){if(w==="tail")v="tailpiece"
else v=w==="trap"?"P-trap":"trap arm"
q.nv("Pick the "+v+" from the buttons below first, then tap its glowing outline.")
return}if(v!==w){A.fT(180,220,0.25,p)
u=q.r
A:{if("tail"===u){v="The tailpiece is the straight pipe that hangs from the sink. It goes at the very top, under the drain."
break A}if("trap"===u){v="The P-trap is the U-shaped bend. It goes right under the tailpiece, in the middle."
break A}v="The trap arm is the long straight pipe that goes into the wall. It goes last, on the right."
break A}q.nv(v)
return}if(w==="trap"&&!q.gep(0).a.q(0,"tail")){A.fT(180,220,0.25,p)
q.nv("Start from the top: put the tailpiece on first, then the trap under it.")
return}if(w==="arm"&&!q.gep(0).a.q(0,"trap")){A.fT(180,220,0.25,p)
q.nv("The trap arm joins the trap. Put the P-trap on first.")
return}q.m(new A.eQe(q,w))
A.yA()
q.j6("Piece in place. "+(q.gep(0).a.a===3?"Now tighten the two slip nuts: tap each nut.":"Pick the next piece."),!0)
return}v=d===44
if(v||d===45){t=v?"n1":"n2"
if(q.gep(0).b.h(0,t)!==!0){q.m(new A.eQf(q,t))
A.yA()
q.j6("Slip nut hand tightened. In real life give it a quarter turn more with pliers, but never over-tighten plastic.",!0)
return}}s=q.goX().b.h(0,d)
if(s!=null){q.m(new A.eQg(q,d))
v=q.gih()
r=s.c
v.x8(s.d,r)}},
c6t(){var w=this,v=x.cc,u=C.C(new C.Z(C.a(["n1","n2"],x.s),new A.eQh(w),v),v.k("J.E"))
w.m(new A.eQi(w,u))
if(u.length!==0){A.fT(180,220,0.25,"square")
w.nv("It is dripping from a loose slip nut! Tap the nut and tighten it, then run the water again.")}else{A.yA()
w.j6("No leaks. The water flows through the trap and into the wall. The little pool in the U-bend stays there and blocks sewer gas. The lesson is complete!",!0)}},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.gep(0),i=j.a,h=i.q(0,"tail"),g=i.q(0,"trap"),f=i.q(0,"arm"),e=j.b
e=e.h(0,"n1")===!0&&e.h(0,"n2")===!0
w=C.a([h,g,f,e,j.c&&j.d.length===0],x.u)
v=D.d.bg(w,new A.eQp())
u=i.a===3
j=v<0?"All done":"Step "+(v+1)+"/5"
h=l.goX()
g=l.gih()
f=l.w
e=l.x
t=l.y
s=f!==0?l.goX().b.h(0,l.w):k
h=A.XI(!1,k,g,new A.eQq(l),k,t,f,s,k,k,e,k,k,l.gIT(),l.gIU(),h,!1,k,k,k)
e=x.p
s=C.a([],e)
for(r=0;r<3;++r){q=B.dmq[r]
g=i.q(0,q)?k:new A.eQr(l,q)
f=i.q(0,q)?D.dr:D.fE
t=new C.aQ(14,14)
p=l.r===q
o=p?D.b1:D.aZ
n=new C.ay(o,p?3:1,D.r,-1)
o=C.a([],e)
if(i.q(0,q))o.push(B.egJ)
p=B.duw.h(0,q)
p.toString
m=i.q(0,q)?D.bX:D.c
o.push(new C.y(p,k,new C.F(!0,m,k,k,k,k,13,D.u,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k),k,k,k,k,k,k,k,k,k))
s.push(new C.D(D.ir,C.aB(k,C.p(k,new C.cb(D.aM,D.e,D.j,D.m,k,D.p,k,0,o,k),D.f,k,k,new C.o(f,k,new C.bJ(n,n,n,n),new C.bk(t,t,t,t),k,k,D.n),k,k,k,k,D.hA,k,k,k),D.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,g,k,k,k,k,k,k,!1,D.a4),k))}i=C.bX(D.bB,s,D.bs,6,8)
g=A.u3("Start over",D.l6,new A.eQs(l),D.ae)
f=u?"Run the water":"Build the drain first"
return A.TE(D.co,new A.eQt(d,w),C.x(C.a([i,D.N,C.B(C.a([g,D.ab,A.u3(f,D.qg,u?l.gc6s():k,D.co)],e),D.m,k,D.e,D.j,0,k,k)],e),D.m,k,D.e,D.P,0,D.p),h,j,"Sink drain (P-trap)",k)}}
A.a4E.prototype={
U(){return new A.azX()},
gda(d){return this.c}}
A.azX.prototype={
gep(d){var w,v=this.d
if(v===$){w=this.a.c
v=this.d=w==null?A.fXo():w}return v},
gih(){var w=this.e
return w===$?this.e=new A.x5(-0.25,0.2,36,B.aU3,$.aw()):w},
goX(){var w=this.f
return w===$?this.f=A.aOI(this.gep(0)):w},
t(){var w=this.z
if(w!=null)w.a4(0)
this.a2()},
j6(d,e){var w=this,v=w.z
if(v!=null)v.a4(0)
w.m(new A.d9N(w,d,e))
w.z=C.cM(D.lr,new A.d9O(w))},
nv(d){return this.j6(d,!1)},
oc(){this.gih().hP(36,0.2,B.aU3,-0.25)
this.m(new A.d9F(this))},
IV(d){var w,v,u,t,s,r,q=this
if(d===0){q.oc()
return}w=x.fZ
v=C.C(new C.Z(B.a49,new A.d9I(d),w),w.k("J.E"))
if(v.length!==0&&q.r.length!==0){w=q.gep(0)
u=A.idg(w,q.r,D.d.gI(v))
if(u!=null){A.fT(180,220,0.25,"square")
q.nv(u)}else{A.yA()
q.m(new A.d9J(q,d))
q.gih().x8(12,A.ags(d))
q.j6(A.fur(w)?"All four ends are connected. Now open the valves.":D.d.gI(v).b+": connected.",!0)}return}w=d===68
if(w||d===69){t=w?"hot":"cold"
if(q.gep(0).e.iF(0,t)){q.m(new A.d9K(q,t))
q.j6("Hose taken off.",!0)
return}}s=q.goX().b.h(0,d)
if(s!=null){q.m(new A.d9L(q,d))
w=q.gih()
r=s.c
w.x8(s.d,r)}},
c6q(d){var w,v=this
v.m(new A.d9G(v))
w=v.gep(0)
if(!w.f){v.j6("Valves closed.",!0)
return}if(A.fur(w)){A.yA()
v.j6("Hot and cold flow through the hoses and out of the faucet. No leaks. The lesson is complete!",!0)}else{A.fT(180,220,0.25,"square")
v.nv("Water is spraying out of a valve that has no hose! Close the valves and finish connecting the hoses first.")}},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=n.gep(0),k=l.r||l.e.a!==0,j=l.e,i=j.h(0,61)==="hot"&&j.h(0,63)==="hot",h=j.h(0,62)==="cold"&&j.h(0,64)==="cold",g=C.a([k,i,h,l.f&&A.fur(l)],x.u),f=D.d.bg(g,new A.d9S())
k=f<0?"All done":"Step "+(f+1)+"/4"
i=n.goX()
h=n.gih()
w=n.w
v=n.x
u=n.y
t=w!==0?n.goX().b.h(0,n.w):m
s=x.p
i=A.XI(!1,m,h,new A.d9T(n),m,u,w,t,m,m,v,m,m,n.gIT(),n.gIU(),i,!1,m,m,C.a([A.wK("Hints",D.aE,D.rj,l.r,new A.d9U(n)),D.N],s))
v=C.a([],s)
for(r=0;r<2;++r){h={}
w=B.dlT[r]
h.a=null
q=w.a
h.a=q
u=new C.aQ(14,14)
t=n.r===q
p=t?D.b1:D.aZ
o=new C.ay(p,t?3:1,D.r,-1)
p=C.a([],s)
t=C.a6(j).k("bc<2>")
if(new C.Z(new C.bc(j,t),new A.d9V(h),t.k("Z<J.E>")).gL(0)===2)p.push(B.egL)
p.push(new C.y(w.b,m,D.t0,m,m,m,m,m,m,m,m,m))
v.push(new C.D(D.ir,C.aB(m,C.p(m,new C.cb(D.aM,D.e,D.j,D.m,m,D.p,m,0,p,m),D.f,m,m,new C.o(w.c,m,new C.bJ(o,o,o,o),new C.bk(u,u,u,u),m,m,D.n),m,m,m,m,D.hA,m,m,m),D.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new A.d9W(h,n),m,m,m,m,m,m,!1,D.a4),m))}j=C.bX(D.bB,v,D.bs,6,8)
h=A.u3("Start over",D.l6,new A.d9X(n),D.ae)
l=l.f?"Close the valves":"Open the valves"
return A.TE(D.cs,new A.d9Y(d,g),C.x(C.a([j,D.N,C.B(C.a([h,D.ab,A.u3(l,D.qg,n.gc6p(n),D.cs)],s),D.m,m,D.e,D.j,0,m,m)],s),D.m,m,D.e,D.P,0,D.p),i,k,"Faucet supply lines",m)}}
A.aAP.prototype={
U(){return new A.aAQ(A.h7X())}}
A.aAQ.prototype={
gih(){var w,v=this.e
if(v===$){w=new A.x5(-0.3,0.48,46,B.UM,$.aw())
w.f=80
this.e=w
v=w}return v},
goX(){var w=this.f
return w===$?this.f=A.agf(this.d):w},
t(){var w=this.z
if(w!=null)w.a4(0)
this.a2()},
j6(d,e){var w=this,v=w.z
if(v!=null)v.a4(0)
w.m(new A.dgS(w,d,e))
w.z=C.cM(D.lr,new A.dgT(w))},
nv(d){return this.j6(d,!1)},
oc(){this.gih().hP(46,0.48,B.UM,-0.3)
this.m(new A.dgM(this))},
IV(d){var w,v,u,t=this
if(d===0){t.oc()
return}if(d===72){w=t.d
w=w.d.q(0,72)&&w.a>=5}else w=!1
if(w){t.m(new A.dgO(t,d))
A.yA()
t.j6("You flipped the breaker fully OFF and then ON. The living room light is back on. A breaker trips when a circuit is overloaded: find out why before it trips again.",!0)
t.gih().x8(22,B.h2P)
return}w=d===87
if(w||d===86){v=t.d
v=v.b&&!v.c&&v.a>=5}else v=!1
if(v){if(t.w==="wrench"&&w){t.m(new A.dgP(t,d))
A.yA()
t.j6("You tightened the slip nut with the wrench. The drip has stopped.",!0)
return}A.fT(180,220,0.25,"square")
t.nv(w?"Hand tightening is not enough here. Pick the wrench first, then tap the nut.":"The water is dripping from the slip nut on the trap. Pick the wrench, then tap the nut.")}u=t.goX().b.h(0,d)
if(u!=null){t.m(new A.dgQ(t,d))
w=t.gih()
v=u.c
w.x8(u.d,v)}},
ce9(d){var w,v
A:{if("ptrap"===d){w=B.emO
break A}if("faucet"===d){w=B.bDO
break A}w=new A.DF(d,null,null)
break A}v=this.c
v.toString
C.a3(v,!1).cg(C.e_(new A.dgN(w),!1,null,x.H))},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.d,l=B.dgM[m.a],k=o.r,j=k===0?n:A.i2w(k)
k=m.d.q(0,72)
w=!m.b||m.c
v=C.a([!k,w],x.u)
w=m.a
k=o.goX()
u=o.gih()
t=o.r
s=o.x
r=o.y
q=t!==0?o.goX().b.h(0,o.r):n
p=j==null?n:C.aB(n,C.p(n,B.foH,D.f,n,n,new C.o(D.aE,n,n,C.m(12),n,n,D.n),n,n,n,n,D.rb,n,n,n),D.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new A.dgW(o,j),n,n,n,n,n,n,!1,D.a4)
k=A.XI(!1,n,u,new A.dgX(o),n,r,t,q,p,new A.dgY(o),s,n,n,o.gIT(),o.gIU(),k,!1,n,n,n)
s=l.a
p=x.p
q=C.B(C.a([C.E(C.d(""+(m.a+1)+". "+s,n,n,n,n,n,n,B.fh3,n,n,n),1),A.wK("Wrench",D.aR,D.p_,o.w==="wrench",new A.dgZ(o))],p),D.m,n,D.e,D.j,0,n,n)
t=C.d(l.b,n,3,D.a1,n,n,n,B.fi7,n,n,n)
m=C.l2(D.by,6,s,6,0,new A.dh_(o),m.a)
u=v[0]
s=u?"\u2705 Living room power fixed":"\u26a0 Living room has no power"
s=C.E(C.d(s,n,n,n,n,n,n,C.l(n,n,u?D.eo:D.f3,n,n,n,n,n,n,n,n,11.5,n,n,D.H,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),1)
u=v[1]
r=u?"\u2705 Sink leak fixed":"\u26a0 Kitchen sink drips"
return A.TE(D.by,new A.dh0(d,v),C.x(C.a([q,D.bA,t,m,C.B(C.a([s,C.E(C.d(r,n,n,n,n,n,n,C.l(n,n,u?D.eo:D.f3,n,n,n,n,n,n,n,n,11.5,n,n,D.H,n,n,!0,n,n,n,n,n,n,n,n),D.dT,n,n),1)],p),D.m,n,D.e,D.j,0,n,n)],p),D.m,n,D.e,D.P,0,D.p),k,"Stage "+(w+1)+"/7","Build and fix a house",n)}}
A.afj.prototype={
U(){return new A.bvB()}}
A.bvB.prototype={
b6t(){var w=this,v=w.d
if(v!=null)v.a4(0)
w.d=null
if(w.e&&w.c!=null)w.m(new A.fbb(w))},
c6u(d){var w,v,u=this
u.m(new A.fb9(u))
w=u.a
v=w.e
v.aoI(w.f?1.45:0.69)
v=u.d
if(v!=null)v.a4(0)
u.d=C.cM(D.kA,new A.fba(u))},
t(){var w=this.d
if(w!=null)w.a4(0)
this.a2()},
B(d){var w=this,v=null,u=w.a.d,t=D.w.j(w.e?0.8:0.55),s=w.e,r=s?D.bI:D.aZ
r=C.I(r,D.r,s?2:1)
return new C.D(D.eG,C.hp(C.nI(D.cg,C.p(v,C.X(w.a.c,D.c,v,v,v,22),D.f,v,v,new C.o(t,v,r,v,v,v,D.a6),v,44,v,v,v,v,v,44),v,new A.fbc(w),new A.fbd(w),v,v,v,v,new A.fbe(w)),v,u,v,v),v)}}
A.jF.prototype={}
A.MO.prototype={}
A.a6I.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=x.p,k=C.a([C.B(C.a([C.aI(m,m,m,m,R.nq,m,m,m,new A.c9p(d),m,m,m,m,m,m),B.fyK],l),D.m,m,D.e,D.j,0,m,m)],l)
for(w=0;w<5;++w){v=B.do9[w]
u=v.c
t=C.a([new C.D(D.ajM,new C.y(v.b+"  "+v.a.toUpperCase(),m,new C.F(!0,u,m,m,m,m,12,D.u,m,1.1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m,m,m,m,m,m,m),m)],l)
for(s=v.d,r=s.length,q=0;q<r;++q){p=s[q]
o=new C.aQ(14,14)
n=new C.ay(u.j(0.35),1,D.r,-1)
t.push(C.p(m,C.x(C.a([new C.y(p.a,m,D.iY,m,m,m,m,m,m,m,m,m),D.cO,new C.y(p.b,m,E.Uh,m,m,m,m,m,m,m,m,m)],l),D.E,m,D.e,D.j,0,D.p),D.f,m,m,new C.o(B.F4,m,new C.bJ(n,n,n,n),new C.bk(o,o,o,o),m,m,D.n),m,m,m,D.cu,D.bj,m,m,m))}D.d.v(k,t)}return C.c5(m,D.bZ,C.bm(!0,C.ct(k,m,B.aiP,m,m,D.ag,!1),!0,!1,D.af,!0,!0),m,!1,!1,m,m)}}
A.cke.prototype={}
A.EW.prototype={}
A.nq.prototype={}
A.WP.prototype={}
A.ck4.prototype={
byi(d,e,f){var w,v=this
if(f!=null)w=D.d.h_(B.axg,new A.ck8(f))
else{w=new C.en()
w.df(v.a)
w=B.axg[w.au(2)]}v.c!==$&&C.aP()
v.c=w
w=new C.en()
w.df(v.a+7)
w=w.he()
v.d!==$&&C.aP()
v.d=w},
va(d,e){var w=this.c
w===$&&C.c()
return D.d.h_(w.c,new A.ck9(e))},
P6(d){++this.w
return new A.ex(!1,d,!1,"")},
c3I(d){var w=d.d
return new C.N(w,new A.ck5(this),C.S(w).k("N<1,n>")).aG(0," and ")},
bhj(d,e){var w,v,u,t,s=this,r=s.va(0,e),q=s.e
if(q.q(0,e))return s.P6("The "+r.c.toLowerCase()+" is already there.")
if(d!==r.b)return s.P6(s.b?"That does not go here.":"That does not go here. This spot is for the "+r.c.toLowerCase()+".")
for(w=r.d,v=w.length,u=0;u<v;++u)if(!q.q(0,w[u])){q=s.b?"Not yet: something has to go in first.":"Not yet. "+r.e+" Put in the "+s.c3I(r)+" first.";++s.w
return new A.ex(!1,q,!1,"")}if(r.f&&s.r)return s.P6(s.b?"The water is still on!":"Stop! The water is still on. Cutting into a pipe with the water on floods the room. Turn the water off at the main valve first (pick the hand and tap the main valve).")
q.M(0,e)
s.y=!1
s.x.a8(0)
if(r.r>0)t=s.b?"":" It is only loose. Pick the wrench and tap it to tighten the joints."
else t=""
return new A.ex(!0,r.c+" fitted."+t,!1,"")},
biE(d){var w,v,u,t,s=this,r=s.va(0,d)
if(!s.e.q(0,d))return s.P6(s.b?"Nothing to tighten yet.":"There is nothing to tighten yet: the "+r.c.toLowerCase()+" is not fitted.")
w=r.r
if(w===0)return s.P6(s.b?"That does not need tightening.":"The "+r.c.toLowerCase()+" does not have joints to tighten. It just sits in place.")
v=s.f
u=v.h(0,d)
if(u==null)u=0
if(u>=w)return s.P6("Already tight. More force would crack it.")
t=u+1
v.n(0,d,t)
s.x.a8(0)
s.y=!1
v=r.c
return new A.ex(!0,t>=w?v+": every joint is tight now.":v+": one joint tightened, one to go.",!1,"")},
aGv(d){var w=this.va(0,d),v=this.f.h(0,d)
if(v==null)v=0
return w.r-v},
aIz(){var w,v,u,t,s,r,q=this
q.r=!q.r
w=q.x
w.a8(0)
if(!q.r)return B.aXU
v=q.c
v===$&&C.c()
u=v.c
t=C.S(u).k("Z<1>")
s=C.C(new C.Z(u,new A.cka(q),t),t.k("J.E"))
v=v.c
u=C.S(v).k("Z<1>")
r=C.C(new C.Z(v,new A.ckb(q),u),u.k("J.E"))
q.y=!0
if(s.length!==0){w.v(0,new C.N(s,new A.ckc(),C.S(s).k("N<1,n>")));++q.w
return new A.ex(!1,"Water is spraying from an open pipe where the "+D.d.gI(s).c.toLowerCase()+" should be! Turn the water off and finish the job.",!0,"")}if(r.length!==0){w.v(0,new C.N(r,new A.ckd(),C.S(r).k("N<1,n>")));++q.w
return new A.ex(!1,"The "+D.d.gI(r).c.toLowerCase()+" is leaking from a loose joint. Turn the water off, tighten it with the wrench, then test again.",!0,"")}if(!q.ga3c())return B.aXK
return B.aXw},
cHh(){var w,v,u,t,s,r,q,p=this
p.r=!0
p.aIz()
w=p.c
w===$&&C.c()
v=w.c
u=v.length
t=0
for(;t<u;++t){s=v[t]
p.bhj(s.b,s.a)}for(w=w.c,v=w.length,t=0;t<v;++t){s=w[t]
for(u=s.r,r=s.a,q=0;q<u;++q)p.biE(r)}p.aIz()
p.w=0},
ga3c(){var w=this.c
w===$&&C.c()
return D.d.d8(w.c,new A.ck6(this))},
gcFu(){var w=this.c
w===$&&C.c()
return D.d.d8(w.c,new A.ck7(this))},
gwv(){var w=this
return w.ga3c()&&w.gcFu()&&w.r&&w.y&&w.x.a===0}}
A.VR.prototype={
U(){var w,v=new A.x5(-0.25,0.4,135,B.aVo,$.aw())
v.f=200
w=new C.y2()
$.yM()
w.hE(0)
return new A.aEe(v,w)}}
A.aEe.prototype={
gCL(d){var w=this.d
if(w===$){this.a.toString
w=D.o.F(Date.now(),1e5)
this.d=w}return w},
a_(){var w,v=this
v.a1()
w=v.a.d
if(w==null){w=v.gCL(0)
v.a.toString
w=A.fXn(!1,w,null)}v.e=w
v.r=A.hmk(w,v.x,!w.b)},
t(){var w=this.at
if(w!=null)w.a4(0)
this.a2()},
Zx(){var w=this.e
w===$&&C.c()
return this.r=A.hmk(w,this.x,!w.b)},
awX(d,e){var w=this,v=w.at
if(v!=null)v.a4(0)
w.m(new A.ekj(w,d,e))
w.at=C.cM(D.js,new A.ekk(w))},
aZ1(){this.f.hP(135,0.4,B.aVo,-0.25)
this.m(new A.ekc(this))},
cxb(d){var w,v,u=this.e
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
axM(d){var w=this.e
w===$&&C.c();++w.w
return new A.ex(!1,d,!1,"")},
c6y(d){return this.aZ0(d)},
cws(d){var w
A:{if("main"===d){w=9400
break A}w=this.e
w===$&&C.c()
w=w.c
w===$&&C.c()
w=9100+D.d.bg(w.c,new A.eko(d))
break A}this.aZ0(w)},
b61(){var w,v,u,t,s,r,q,p=this,o=p.x
if(o==="hand")return C.a([B.eG7],x.L)
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
q=r.va(0,s)
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
aZ0(d){var w,v,u,t,s,r=this
if(d===0)return
w=r.r
w===$&&C.c()
v=w.b.h(0,d)
if(r.x.length===0){r.m(new A.ek1(r,d))
if(v!=null)r.awX(v.a+": "+v.b,!0)
return}u=r.cxb(d)
w=r.x
if(w==="hand")if(d===9400){w=r.e
w===$&&C.c()
t=w.aIz()}else{w=r.e
w===$&&C.c()
t=r.axM(w.b?"Your hand is only for the main water valve.":"Your hand is for the main water valve. Parts are placed by picking them from the tray.")}else if(w==="wrench")if(u==null){w=r.e
w===$&&C.c()
t=r.axM(w.b?"Nothing to tighten.":"There is nothing to tighten there.")}else{w=r.e
w===$&&C.c()
t=w.biE(u)}else if(u==null){w=r.e
w===$&&C.c()
t=r.axM(w.b?"Not there.":"That does not go there. Tap one of the glowing spots.")}else{s=r.e
s===$&&C.c()
t=s.bhj(w,u)}w=t.a
if(w)A.yA()
else A.fT(180,220,0.25,"square")
r.m(new A.ek2(r,d))
w=w&&!t.c
r.awX(t.b,w)
w=r.e
w===$&&C.c()
if(w.gwv()&&!r.as){r.as=!0
$.aV.x1$.push(new A.ek3(r))}},
c6v(){var w=null,v=this.c
v.toString
C.cf(w,w,!0,w,new A.ek8(this),v,w,!0,!0,x.H)},
aXS(){this.m(new A.ekh(this))
this.aZ1()},
gcBy(){var w,v,u,t=C.a([],x.s)
for(w=0;w<11;++w){v=B.c2G[w]
u=this.e
u===$&&C.c()
u=u.c
u===$&&C.c()
if(D.d.b3(u.c,new A.ekp(v)))t.push(v)}return t},
c44(){var w,v,u,t,s=this.e
s===$&&C.c()
s=s.c
s===$&&C.c()
s=s.c
w=s.length
v=0
for(;v<w;++v){u=s[v]
if(!this.e.e.q(0,u.a)){t=this.e.e
t=D.d.d8(u.d,t.gkL(t))}else t=!1
if(t)return u}return null},
aUk(){var w,v,u,t=this,s=t.e
s===$&&C.c()
if(s.x.a!==0){s=s.c
s===$&&C.c()
s=s.c
w=C.S(s)
v=new C.cQ(new C.Z(s,new A.ek9(t),w.k("Z<1>")),new A.eka(),w.k("cQ<1,n>")).aG(0,", ")
s=t.e
if(s.r)return new C.bj("\ud83d\udca7 Water is leaking at: "+v+". First turn the main water OFF: pick Hand and tap the main valve.","hand","main")
return new C.bj("\ud83d\udca7 It leaked at: "+v+". Pick the Wrench and tap it to tighten the joint. Then turn the water ON again to test.","wrench",s.x.gI(0))}if(!s.ga3c()){u=t.c44()
if(u==null)return B.eQ0
if(u.f&&t.e.r)return B.ePz
s=u.b
w=B.aEN.h(0,s)
if(w==null)w=s
return new C.bj("Next: pick "+w+" from the tray, then tap "+u.c.toLowerCase()+" (the glowing spot). "+u.e,s,u.a)}s=t.e.c
s===$&&C.c()
s=s.c
w=C.S(s).k("Z<1>")
v=C.C(new C.Z(s,new A.ekb(t),w),w.k("J.E"))
if(v.length!==0)return new C.bj("Everything is fitted. Now tighten each joint: pick the Wrench and tap "+D.d.gI(v).c.toLowerCase()+".","wrench",D.d.gI(v).a)
if(!t.e.r)return B.eOx
return B.eQp},
cuO(){var w,v,u,t,s=this,r={}
r.a=r.b=null
w=s.aUk()
r.b=w.b
r.a=w.c
s.m(new A.ekl(r,s))
v=r.a
if(v!=null){if(v==="main")u=9400
else{v=s.e
v===$&&C.c()
v=v.c
v===$&&C.c()
u=9100+D.d.bg(v.c,new A.ekm(r))}r=s.r
r===$&&C.c()
t=r.b.h(0,u)
if(t!=null)s.f.hP(70,0.3,t.c,-0.2)
s.m(new A.ekn(s,u))}s.awX(w.a,!0)},
awW(d,e,f){var w,v=null,u=this.x===d,t=u?D.aE.j(0.25):D.c.j(0.07),s=C.m(14),r=u?D.aE:D.aZ
r=C.I(r,D.r,u?2:1)
w=C.X(f,u?D.aE:D.ae,v,v,v,19)
return new C.D(E.tS,C.aB(v,C.p(v,C.B(C.a([w,D.bn,C.d(e,v,v,v,v,v,v,C.l(v,v,u?D.aE:D.c,v,v,v,v,v,v,v,v,12.5,v,v,D.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),D.m,v,D.e,D.j,0,v,v),D.f,v,v,new C.o(t,v,r,s,v,v,D.n),v,v,v,v,D.fQ,v,v,v),D.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new A.ek5(this,u,d),v,v,v,v,v,v,!1,D.a4),v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.e
h===$&&C.c()
h=h.c
h===$&&C.c()
h=h.c
w=new C.Z(h,new A.ekq(j),C.S(h).k("Z<1>")).gL(0)
h=j.e.c
h===$&&C.c()
v=j.r
v===$&&C.c()
u=j.y
t=j.z
s=j.Q
r=u!==0?v.b.h(0,u):i
v=A.XI(!1,i,j.f,new A.ekr(j),i,s,u,r,i,new A.eks(),t,i,i,j.gc6w(),j.gc6x(),v,!1,i,i,i)
t=x.p
r=C.a([],t)
if(!j.e.b){u=D.aR.j(0.12)
s=C.m(12)
q=C.I(D.aR.j(0.6),D.r,1)
r.push(C.p(i,C.B(C.a([C.E(C.d("\ud83d\udc49 "+j.aUk().a,i,4,D.a1,i,i,i,B.fnP,i,i,i),1),D.bn,C.bG(B.frs,j.gcuN(),C.bn(i,i,i,i,i,B.eZT,D.l0,i,i,i,i,i))],t),D.m,i,D.e,D.j,0,i,i),D.f,i,i,new C.o(u,i,q,s,i,i,D.n),i,i,i,D.eG,D.Zg,i,i,1/0))}if(j.x.length!==0&&j.b61().length!==0){u=C.a([],t)
for(s=j.b61(),q=s.length,p=0;p<s.length;s.length===q||(0,C.M)(s),++p){o={}
n=s[p]
o.a=null
o.a=n.a
m=new C.aQ(12,12)
l=new C.ay(D.b1,1,D.r,-1)
u.push(C.aB(i,C.p(i,new C.y("\ud83d\udccd "+n.b,i,D.ou,i,i,i,i,i,i,i,i,i),D.f,i,i,new C.o(D.f5.j(0.35),i,new C.bJ(l,l,l,l),new C.bk(m,m,m,m),i,i,D.n),i,i,i,i,B.Zh,i,i,i),D.y,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new A.ekt(o,j),i,i,i,i,i,i,!1,D.a4))}r.push(new C.D(D.eG,C.bX(D.bB,u,D.bs,6,6),i))}u=j.e
if(u.b)u="Practice mode: no hints. Build it in the right order."
else if(u.ga3c())u="Everything is fitted. Tighten every joint, then turn the main water on to test."
else{u=j.e.c
u===$&&C.c()
u="Job: "+u.d}r.push(new C.bK(D.a3,i,i,C.d(u,i,2,D.a1,i,i,i,B.aRb,i,i,i),i))
r.push(D.N)
t=C.a([j.awW("hand","Hand",B.anr),j.awW("wrench","Wrench",D.p_)],t)
for(u=j.gcBy(),s=u.length,p=0;p<u.length;u.length===s||(0,C.M)(u),++p){k=u[p]
q=B.aEN.h(0,k)
q.toString
t.push(j.awW(k,q,Ac.amU))}r.push(new C.a8(i,52,C.ct(t,i,i,i,i,D.aM,!1),i))
return A.TE(D.aR,new A.eku(j,d),C.x(r,D.m,i,D.e,D.P,0,D.p),v,""+w+"/"+h.c.length+" fitted","Plumbing job: "+h.b,i)},
c0u(d){return C.bT(E.lp,null,new A.ekg(this),d,!0,!0,!0,D.jW,!1,!1,x.H)}}
A.yX.prototype={}
A.os.prototype={}
A.Xu.prototype={}
A.avh.prototype={}
A.aTC.prototype={}
A.ex.prototype={
gjK(){return this.a}}
A.Xi.prototype={
cjy(d,e,f){var w,v,u,t,s=this,r=null,q="outlet",p="switch",o=new C.en()
o.df(s.a)
w=d==null?o.au(3):d
v=C.a([0,1,2],x.t)
D.d.ec(v,o)
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
s.d=t}if(f){t[1]=new A.os(t[1].a,B.dgx[o.au(5)],r)
t=s.d
t===$&&C.c()
t[3]=new A.os(t[3].a,B.di4[o.au(5)],r)}},
gamP(){var w,v,u=C.aY(x.S),t=this.d
t===$&&C.c()
w=t.length
v=0
for(;v<t.length;t.length===w||(0,C.M)(t),++v)u.M(0,t[v].a)
return u},
cTh(d){var w,v,u,t=this.d
t===$&&C.c()
w=t.length
v=0
for(;v<w;++v){u=t[v]
if(u.a===d)return u}return null},
fS(d){++this.f
return new A.ex(!1,d,!1,"")},
alx(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.d
g===$&&C.c()
w=g.length
v=h.x
u=0
for(;u<g.length;g.length===w||(0,C.M)(g),++u){t=g[u].a
s=A.jQ(t)
if(s.e==="fan")r="fan"
else r=s.c?"ceiling":"wall"
v.n(0,t,r)}g=C.a([],x.t)
for(q=0;q<$.GY().length;++q)g.push(q)
h.y.v(0,g)
h.z.v(0,h.gamP())
for(g=h.Q,w=x.S,u=0;u<3;++u){p=B.oj[u]
v=C.aY(w)
t=C.aY(w)
o=new A.avh(v,t)
o.d=o.e=o.a=!0
for(r=h.apN(p),n=r.length,m=0;m<r.length;r.length===n||(0,C.M)(r),++m)for(l=r[m]*10,k=0;k<6;++k)t.M(0,l+k)
for(t=h.gamP(),r=C.a6(t),n=new C.mi(t,t.r,r.k("mi<1>")),n.c=t.e,r=r.c,t=p+48;n.C();){l=n.d
if(l==null)l=r.a(l)
s=A.jQ(l)
if(!s.c){j=s.d.a
j=j>=p&&j<=t}else j=!1
if(j)v.M(0,l)}g.n(0,p,o)}for(g=h.as,u=0;u<2;++u){i=g[u]
i.a=!0
i.b=3
i.d=i.c=!0}},
cHi(){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=k.d
j===$&&C.c()
w=j.length
v=0
for(;v<j.length;j.length===w||(0,C.M)(j),++v){u=j[v]
k.bfj(u.a,u.b)}for(w=j.length,t=x.S,s=x.N,r=k.at,v=0;v<j.length;j.length===w||(0,C.M)(j),++v){q=j[v].a
p=r.h(0,q)
if(p==null)continue
o=p.a
n=A.rZ(o)
if(n.w.length!==0)m=n.z
else{A:{if("outlet"===o){o=C.G([25,"ground",23,"white",21,"black"],t,s)
break A}if("gfci"===o){o=C.G([25,"ground",24,"white",22,"black"],t,s)
break A}if("switch"===o){o=C.G([25,"ground",21,"blackLine",22,"blackLoad"],t,s)
break A}o=C.G([53,"ground",52,"white",51,"black"],t,s)
break A}m=o}for(o=m.gdR(m),o=o.gaf(o);o.C();){l=o.gT(o)
k.bdF(q,l.b,l.a)}k.bhD(q)
k.bct(q)}if(!k.ax)k.aIx()
for(w=j.length,v=0;v<j.length;j.length===w||(0,C.M)(j),++v){u=j[v]
if(D.d.q(B.lA,u.b)){t=u.a
k.bhl(t,"lamp")
k.biY(t)}}for(j=D.d.gaf(j),w=new C.f5(j,new A.cp4());w.C();){t=j.gT(0).a
k.aF7(t)
k.aF7(t)}},
aKX(d){var w,v,u=A.jQ(d).d.a,t=C.a([],x.t)
for(w=0;v=$.GY(),w<v.length;++w){v=v[w]
if(v>u&&v<64)t.push(w)}return t},
cRa(d,e){var w,v,u=this,t=u.x
if(t.ai(0,d))return u.fS("There is already a box at "+A.jQ(d).b+".")
w=A.jQ(d)
v=w.c
if(!v&&e!=="wall")return u.fS("That is a ceiling box. On the wall you use a plain wall box (the blue one with ears).")
if(v&&e==="wall")return u.fS("A wall box cannot go in the ceiling. Use a round ceiling box.")
if(w.e==="fan"&&e!=="fan"){if(!u.b)return u.fS('A fan is heavy and it shakes. It needs a box that says "fan rated". A plain ceiling box can let the fan fall.')
t.n(0,d,e);++u.f
return B.aY7}t.n(0,d,e)
t=v?"ceiling joist":"side of the stud"
return new A.ex(!0,w.b+": box fixed to the "+t+".",!1,"")},
cLN(d){var w,v=this
if(d<0||d>=$.GY().length)return B.aY1
w=v.y
if(w.q(0,d))return v.fS("That stud already has a hole.")
if(v.x.a===0)return v.fS("Mount the boxes first. Then you know where the cable has to go and which studs need a hole.")
w.M(0,d)
return B.aXM},
cUm(d){var w,v,u,t,s=this,r=A.jQ(d)
if(!s.x.ai(0,d))return s.fS("There is no box at "+r.b+". Mount the box first, then pull the cable to it.")
w=s.z
if(w.q(0,d))return s.fS("The cable is already there.")
v=s.aKX(d)
u=C.S(v).k("Z<1>")
t=C.C(new C.Z(v,new A.cpb(s),u),u.k("J.E"))
if(t.length!==0){w=D.o.V($.GY()[D.d.gI(t)])
v=t.length
u=v===1?"it":"the studs"
return s.fS("The cable is stuck: the stud at "+w+" inches has no hole. Drill "+u+" first ("+v+" left on the way).")}w.M(0,d)
return new A.ex(!0,"Cable pulled from the panel to "+r.b+", through the studs and along the ceiling.",!1,"")},
gaIo(){return this.gamP().d8(0,new A.cpc(this))},
apt(d){var w,v,u,t
for(w=this.Q,w=new C.cJ(w,C.a6(w).k("cJ<1,2>")).gaf(0);w.C();){v=w.d
u=v.b
if(u.a){t=v.a
t=d>=t&&d<=t+48}else t=!1
if(t)return u}return null},
cOx(d){var w,v,u=this
if(!u.gaIo())return u.fS("Finish the rough-in first. The cable and the boxes must be in before the drywall hides the studs.")
if(!D.d.q(B.a4b,d))return B.aXA
if(!D.d.q(B.oj,d))return u.fS("The edge of the sheet would land between two studs. The sheet needs a stud under every edge, so there is nothing to screw it to. Start at the left corner (a stud) and move one sheet width (48 inches) at a time.")
w=u.Q
v=w.h(0,d)
if((v==null?null:v.a)===!0)return u.fS("There is already a sheet there.")
v=w.h(0,d)
if(v==null){v=x.S
v=new A.avh(C.aY(v),C.aY(v))}v.a=!0
w.n(0,d,v)
return B.aXL},
apN(d){var w,v,u,t=C.a([],x.t)
for(w=d+48,v=0;u=$.GY(),v<u.length;++v){u=u[v]
if(u>=d&&u<=w)t.push(v)}return t},
cKJ(d){var w,v,u=this,t=A.jQ(d)
if(t.c)return u.fS("Ceiling fixtures do not need an opening in the wall.")
if(!u.x.ai(0,d))return u.fS("There is no box at "+t.b+".")
w=u.apt(t.d.a)
if(w==null)return u.fS("There is no sheet over this box yet. Hang the sheet first, then cut the opening.")
v=w.b
if(v.q(0,d))return u.fS("The opening is already cut.")
v.M(0,d)
return B.aXV},
aKb(d,e,f){var w,v,u,t,s,r=this
if(f)return r.fS("Missed the stud! There is only air behind the sheet here. The screw would pull through the paper. Screw only where a stud is behind the sheet (every 16 inches).")
w=x.dD
v=C.C(new C.Z(B.oj,new A.cpd(r,d),w),w.k("J.E"))
if(v.length===0)return r.fS("There is no sheet here yet.")
u=d*10+e
if(D.d.d8(v,new A.cpe(r,u)))return r.fS("There is already a screw there.")
for(w=v.length,t=r.Q,s=0;s<v.length;v.length===w||(0,C.M)(v),++s)t.h(0,v[s]).c.M(0,u)
return B.aXX},
bn1(d,e){return this.aKb(d,e,!1)},
boy(d){var w=this.Q.h(0,d)
if(w==null||!w.a)return!1
return D.d.d8(this.apN(d),new A.cpg(w))},
gaCG(){return D.d.d8(B.oj,new A.cp3(this))},
gaCF(){var w=this.gamP()
return new C.Z(w,new A.cp1(),C.a6(w).k("Z<cp.E>")).d8(0,new A.cp2(this))},
cWf(d){var w,v=this
if(!v.gaCG())return v.fS("Hang all the sheets first.")
if(!D.d.d8(B.oj,v.gapu()))return v.fS("Finish screwing every sheet to the studs first. Tape goes on a solid wall.")
w=v.as[d]
if(w.a)return v.fS("This seam already has tape.")
w.c=w.a=!0
return B.aXE},
cRd(d){var w,v=this,u=v.as[d]
if(!u.a)return v.fS("Tape first. The mud goes over the tape.")
if(!u.c)return v.fS("The last coat is still wet. Let it dry before the next coat.")
w=u.b
if(w>=3)return v.fS("Three coats are enough. Now sand it.");++w
u.b=w
u.c=!1
return new A.ex(!0,"Coat "+w+" of joint compound spread. Let it dry.",!1,"")},
cQ9(){var w,v=this.as
if(D.d.d8(v,new A.cp9()))return B.aXS
for(w=0;w<2;++w)v[w].c=!0
return B.aY5},
bmO(d){var w=this,v=w.as[d]
if(v.b<3)return w.fS("Put on all three coats of mud first. Sanding now would just rub off the tape.")
if(!v.c)return w.fS("The mud is still wet. Let it dry first.")
if(v.d)return w.fS("Already sanded.")
v.d=!0
return B.aXB},
cTw(d){var w=this,v=w.Q.h(0,d)
if(v==null||!v.a)return w.fS("There is no sheet there.")
if(!w.gaCF())return w.fS("Cut the openings for the boxes before you paint. Otherwise the paint covers the boxes.")
if(!D.d.d8(w.as,new A.cpa()))return w.fS("Sand the seams first. Paint shows every bump.")
if(v.e)return w.fS("This sheet is already painted.")
v.e=!0
return B.aXx},
gwx(){var w=this
return w.gaCG()&&D.d.d8(B.oj,w.gapu())&&w.gaCF()&&D.d.d8(w.as,new A.cp5())&&D.d.d8(B.oj,new A.cp6(w))},
Nk(){var w,v
for(w=this.at,w=new C.dt(w,w.r,w.e);w.C();){v=w.d.b
v.a=this.ax&&!this.ay}},
c_I(d,e){if(d.c)return e==="light"||e==="fan"?"":"A ceiling box holds a light or a fan, not an outlet or a switch."
return D.d.q(B.lA,e)||D.d.q(B.jP,e)?"":"A light or a fan hangs from the ceiling. A wall box holds an outlet, a GFCI or a switch."},
bfj(d,e){var w,v,u,t,s,r=this,q=A.jQ(d)
if(!r.gwx())return r.fS("Finish the drywall first. Devices go in after the walls are painted.")
w=r.x
if(!w.ai(0,d)||!r.z.q(0,d))return r.fS("There is no box with cable at "+q.b+".")
v=r.at
if(v.ai(0,d))return r.fS("There is already a device there. Pull it out first if you want to move it.")
u=r.c_I(q,e)
if(u.length!==0)return r.fS(u)
if(!(D.d.q(B.jP,e)&&q.e==="low"))t=!D.d.q(B.jP,e)&&!q.c&&q.e==="switch"
else t=!0
if(t){if(!r.b)return r.fS(D.d.q(B.jP,e)?"A switch goes about 48 inches from the floor, where a hand falls naturally. This box is down at outlet height.":"Outlets go low, about 16 inches from the floor. This box is up at switch height.");++r.f
r.cy.push("Wrong height at "+q.b+".")}t=e==="fan"
if(t&&w.h(0,d)!=="fan")if(!r.b)return r.fS("This box is not fan rated. A fan on it can fall. Take the box out and put in a fan-rated one.")
s=new A.Ck(C.U(x.S,x.N))
s.r=r.b
s.y=r.dx
s.x=!(t&&w.h(0,d)!=="fan")
s.a=r.ax&&!r.ay
v.n(0,d,new A.aTC(e,s))
if(e==="light")w="Light fixture"
else if(t)w="Ceiling fan"
else if(e==="gfci")w="GFCI outlet"
else w=e==="switch"?"Switch":A.ago(e)
return new A.ex(!0,w+" is held up to "+q.b+". Turn the breaker OFF, then wire it.",!1,"")},
bhY(d){var w=this,v=w.at,u=v.h(0,d)
if(u==null)return B.aXI
if(w.ax&&!w.ay&&!u.b.w){if(w.b)return w.a1S()
return w.a26()}v.W(0,d)
w.CW.W(0,d)
w.cx.W(0,d)
w.ch.W(0,d)
return B.aY_},
a26(){++this.r;++this.f
return B.aXY},
a1S(){var w,v,u=this;++u.r;--u.e
u.ax=!1
u.Nk()
w=u.e
if(w<=0){u.w=!0
return B.aXH}v=w===1?"life":"lives"
return new A.ex(!1,"ZAP! You touched a live wire and got a shock. The breaker is now off. "+w+" "+v+" left. Always turn the breaker OFF and test the wires first.",!0,"shock")},
bdF(d,e,f){var w,v,u,t,s=this,r=s.at.h(0,d)
if(r==null)return B.aaO
s.Nk()
w=A.rZ(r.a)
v=D.d.h_(w.f,new A.cp7(f))
u=A.hrc(w,r.b,e,v,!0)
t=u==null
if(t&&s.dx)return B.aXz
if(t){if(!s.b&&!v.c.q(0,e)){++s.f
return new A.ex(!0,v.b+": fastened. Careful: "+C.w(w.r.$2(e,v))+" It will burn or trip the breaker when the power comes on.",!0,"")}return new A.ex(!0,v.b+": wire fastened.",!1,"")}if(D.a.a0(u,"SHOCK"))return s.a1S()
if(D.a.a0(u,"STOP"))return s.a26();++s.f
return new A.ex(!1,u,!1,"")},
biW(d,e){var w,v=this,u=v.at.h(0,d)
if(u==null)return B.VG
v.Nk()
w=u.b
if(w.a&&w.c===0){if(v.b)return v.a1S()
return v.a26()}w=w.b
w.bt(w,new A.cph(e))
return B.aY4},
bhD(d){var w,v,u=this,t=u.at.h(0,d)
if(t==null)return B.aaO
w=A.rZ(t.a)
v=t.b
if(!A.bDr(w,v))return u.fS("Every wire must be fastened first.")
if(u.ax&&!u.ay){if(u.b)return u.a1S()
return u.a26()}v.c=1
return B.aXQ},
bhB(d){var w,v=this,u=v.at.h(0,d)
if(u==null)return B.VG
if(v.ax&&!v.ay){if(v.b)return v.a1S()
return v.a26()}w=u.b
w.c=0
w.d=!1
return B.aXW},
bct(d){var w=this.at.h(0,d)
if(w==null||w.b.c!==1)return this.fS("Push the device into the box first.")
w.b.c=2
return B.aXZ},
cWg(){var w,v,u,t,s,r,q,p,o,n=C.a([],x.fJ),m=this.d
m===$&&C.c()
w=m.length
v=this.at
u=0
for(;u<m.length;m.length===w||(0,C.M)(m),++u){t=m[u]
s=t.a
r=v.h(0,s)
q=t.b
p=A.rZ(q)
o=A.jQ(s).b+": "+p.b
if(r==null||r.a!==q){n.push(new A.aaI(o,A.fJw(p),B.dcF,!0))
continue}s=A.fJw(p)
q=r.b
n.push(new A.aaI(o,s,A.h0V(p,q),q.x))}return n},
cWh(){var w,v,u,t,s,r=C.aY(x.N),q=this.d
q===$&&C.c()
w=q.length
v=0
for(;v<q.length;q.length===w||(0,C.M)(q),++v)r.M(0,q[v].b)
q=C.a([],x.W)
for(r=C.em(r,r.r,r.$ti.c),w=r.$ti.c;r.C();){u=r.d
u=B.aF0.h(0,u==null?w.a(u):u)
if(u==null)u=B.ayi
t=C.S(u)
s=new C.lR(u,0,2,t.k("lR<1>"))
s.vf(u,0,2,t.c)
D.d.v(q,s)}return q},
aoE(d){var w=this.at
return A.KS(A.rZ(w.h(0,d).a),w.h(0,d).b)},
aIx(){var w=this
if(w.ay){w.ax=w.ay=!1
w.Nk()
return B.aXO}w.ax=!w.ax
w.Nk()
if(!w.ax)return B.aXG
return w.c6z()},
c6z(){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=C.a([],x.s),i=k.db
i.a8(0)
for(w=k.at,v=new C.cJ(w,C.a6(w).k("cJ<1,2>")).gaf(0),u=k.cx,t=!1,s=!1,r=!1;v.C();){q=v.d
p=q.b.b
if(p.c===0)continue
o=q.a
n=A.KS(A.rZ(w.h(0,o).a),w.h(0,o).b)
p.d=p.c>=2
m=n.r
if(m!=="none"){i.n(0,o,m)
p.z=m
r=!0}if(n.d)t=!0
if(n.e){p.w=!0
u.M(0,o)
s=!0}if(n.a!=="ok"&&!k.dx)j.push(A.jQ(o).b+": "+n.b)}if(t){k.ay=!0
k.Nk()
l=s?"BANG! Sparks, smoke and flames. ":"Snap! "
i=k.dx?"The breaker tripped.":l+" The breaker tripped. "+D.d.aG(j," ")+" Fix it, then flip the breaker OFF and ON again."
return new A.ex(!1,i,!0,s?"burn":"trip")}if(r)return new A.ex(!1,k.dx?"Power is on.":"Power is on, and something is wrong. "+D.d.aG(j," "),!0,"arc")
if(j.length!==0)return new A.ex(!0,"Power is on. "+D.d.aG(j," "),!0,"")
return B.aXT},
aF7(d){var w,v,u,t,s,r,q=this,p=q.at,o=p.h(0,d)
if(o==null||!D.d.q(B.jP,o.a)||o.b.c<2)return B.aY3
w=q.ch
if(w.q(0,d))w.W(0,d)
else w.M(0,d)
v=q.d
v===$&&C.c()
u=C.S(v).k("Z<1>")
t=C.C(new C.Z(v,new A.cp8(d),u),u.k("J.E"))
if(t.length===0)return B.aXP
s=D.d.gI(t)
v=s.a
r=q.amD(v)
if(w.q(0,d)&&r){p=p.h(0,v)
if(p!=null)p.c=!0
return new A.ex(!0,(s.b==="fan"?"The fan spins":"The light turns on")+". The switch works.",!1,"")}if(w.q(0,d)){p=s.b
return new A.ex(!1,(p==="fan"?"The fan":"The light")+" did not come on. Check the breaker and the wires on the switch and on the "+p+".",!1,"")}return B.aY2},
a47(d){var w,v=this.at.h(0,d)
if(v!=null){w=v.b
w=w.c<2||w.w}else w=!0
if(w)return!1
return this.aoE(d).c},
amD(d){var w=this,v=w.cTh(d),u=v==null,t=u?null:v.c,s=!0
if(!u)if(t!=null)u=!(w.ax&&!w.ay)||!w.a47(d)||!w.a47(t)
else u=s
else u=s
if(u)return!1
return w.ch.q(0,t)},
bhl(d,e){var w,v,u,t=this,s="Nothing happens.",r=t.at.h(0,d)
if(r==null||!D.d.q(B.lA,r.a)||r.b.c<2)return t.fS("There is no finished outlet there to plug into.")
w=t.CW
if(w.ai(0,d))return t.fS("Something is already plugged in.")
w.n(0,d,e)
w=r.b
if(w.w)return B.aXJ
v=t.aoE(d)
if(t.ax&&!t.ay&&t.a47(d)){r.c=!0
if(v.a!=="ok"){w=t.dx
u=w?A.cp0(e)+" runs.":A.cp0(e)+" runs, but this outlet is NOT safe. "+v.b
return new A.ex(!0,u,!w,"")}return new A.ex(!0,A.cp0(e)+" runs. The outlet works.",!1,"")}if(!(t.ax&&!t.ay))return B.aXN
u=v.r
if(u!=="none"){t.db.n(0,d,u)
w.z=u
w=t.dx?s:A.cp0(e)+" does not run. "+v.b
return new A.ex(!1,w,!0,u==="fire"?"burn":"arc")}return new A.ex(!1,t.dx?s:"Nothing happens. "+v.b,!0,"")},
biY(d){if(this.CW.W(0,d)==null)return B.VG
return B.aXF},
bh5(d){var w,v=this
if(d>=0){w=v.d
w===$&&C.c()
w=d>=w.length}else w=!0
if(w)return 2
if(v.t5(d))return 2
w=v.d
w===$&&C.c()
return v.at.h(0,w[d].a)==null?0:1},
t5(d){var w,v,u,t=this
if(d>=0){w=t.d
w===$&&C.c()
w=d>=w.length}else w=!0
if(w)return!0
w=t.d
w===$&&C.c()
v=w[d]
w=v.a
u=t.at.h(0,w)
if(u==null||!A.fXP(v.b,u.a)||u.b.c<2)return!1
return t.aoE(w).a==="ok"},
gbjn(){var w,v,u,t,s,r,q,p,o,n=this.d
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
if(q!==p)if(!(D.d.q(B.lA,q)&&D.d.q(B.lA,p)))if(!(D.d.q(B.jP,q)&&D.d.q(B.jP,p)))if(q==="light"||q==="fan")q=p==="light"||p==="fan"
else q=!1
else q=o
else q=o
else q=o
q=!q||r.b.c<2}else q=!0
if(q)return!1
if(A.KS(A.rZ(v.h(0,s).a),v.h(0,s).b).a!=="ok")return!1}return!0},
gbcY(){var w,v,u,t,s,r,q,p,o,n=this.d
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
if(q!==p)if(!(D.d.q(B.lA,q)&&D.d.q(B.lA,p)))if(!(D.d.q(B.jP,q)&&D.d.q(B.jP,p)))if(q==="light"||q==="fan")q=p==="light"||p==="fan"
else q=!1
else q=o
else q=o
else q=o
q=!q||r.b.c<2}else q=!0
if(q)return!1
if(A.KS(A.rZ(v.h(0,s).a),v.h(0,s).b).a!=="ok")return!1
s=t.b
if(D.d.q(B.lA,s)){if(!r.c)return!1}else if(!D.d.q(B.jP,s)&&!r.c)return!1}return!0}}
A.iV.prototype={}
A.O0.prototype={
U(){var w,v=new A.x5(-0.12,0.4,205,B.a9J,$.aw())
v.f=300
v.z=0.7
v.w=0.05
w=new C.y2()
$.yM()
w.hE(0)
return new A.aEl(v,w,C.U(x.S,x.i))}}
A.aEl.prototype={
gCL(d){var w=this.e
if(w===$){this.a.toString
w=D.o.F(Date.now(),1e5)
this.e=w}return w},
a_(){var w,v,u=this
u.a1()
w=u.a.e
if(w==null){w=u.gCL(0)
u.a.toString
w=A.cp_(null,null,!1,w,!0)}u.d=w
v=u.a
if(v.c)w.dx=!0
if(v.e!=null&&w.gwx())u.y=2
if(u.a.f){u.d.alx()
u.y=2}u.r=A.wJ(u.d,new A.rE(u.z,u.Q,!1))
w=u.f
w.y=0
w.z=1.1},
t(){var w=this.cy
if(w!=null)w.a4(0)
this.a2()},
c6I(){var w=this,v=w.d
v===$&&C.c()
w.r=A.wJ(v,new A.rE(w.z,w.Q,!1))},
qr(d,e){var w=this,v=w.cy
if(v!=null)v.a4(0)
w.m(new A.eoY(w,d,e))
w.cy=C.cM(D.js,new A.eoZ(w))},
adS(d){return this.qr(d,!1)},
jx(d){var w,v,u,t,s,r,q,p,o=this,n=d.a
if(n)A.yA()
else A.fT(180,220,0.25,"square")
w=d.d
if(w==="shock"){C.fF()
o.m(new A.eo_(o))
C.bN(D.nf,new A.eo0(o),x.P)}v=w==="burn"
if(v||w==="trip"||w==="arc"){u=o.d
u===$&&C.c()
u=u.db
u=new C.hB(u,u.r,u.e)
t=o.x
s=o.w
while(u.C()){r=u.d
q=s.gii()
p=o.d.db.h(0,r)==="fire"?7:4.5
t.n(0,r,q/1000+p)}C.fF()
w=w==="arc"
u=w?95:150
t=w?500:300
A.fT(u,t,0.5,w?"saw":"noise")
if(v){o.m(new A.eo1(o))
C.bN(D.eO,new A.eo2(o),x.P)}}w=o.d
w===$&&C.c()
o.r=A.wJ(w,new A.rE(o.z,o.Q,!1))
n=n&&!d.c
o.qr(d.b,n)
if(o.d.w&&o.c!=null)$.aV.x1$.push(new A.eo3(o))
if(o.d.gbcY()&&!o.cx){o.cx=!0
$.aV.x1$.push(new A.eo4(o))}},
b3y(){var w=this.ch?3.141592653589793:-0.12
this.f.hP(205,0.4,B.a9J,w)},
c6C(d,e){var w,v,u,t,s
if(this.Q>=0)return
w=this.f
v=w.cXd(d,e)
if(v==null||Math.abs(v.a)>78||Math.abs(v.b)>52)v=w.be1(d,e,-47)
if(v==null)return
u=D.k.E(v.a,-70,70)
t=D.k.E(v.b,-46,48)
s=D.k.E(v.c,-6,100)
w.x8(Math.max(34,w.c*0.45),new A.r(u,t,s))
A.fT(560,50,0.25,"tri")},
aTg(){var w,v,u=this
u.ch=!1
w=u.f
w.w=0.05
w.z=0.7
w.qX(!1)
w.y=0
u.m(new A.eoe(u))
v=u.d
v===$&&C.c()
u.r=A.wJ(v,new A.rE(u.z,u.Q,!1))
w.hP(205,0.4,B.a9J,-0.12)},
c1f(){var w,v,u=this
u.ch=!1
w=u.f
w.qX(!1)
w.w=-0.95
w.y=0
w.z=1
u.m(new A.eog(u))
v=u.d
v===$&&C.c()
u.r=A.wJ(v,new A.rE(u.z,u.Q,!1))
w.hP(82,-0.55,B.fRs,-0.12)},
bCx(){var w,v,u,t,s=this,r=s.d
r===$&&C.c()
r=r.CW
w=C.a6(r).k("cJ<1,2>")
v=w.k("Z<J.E>")
u=C.C(new C.Z(new C.cJ(r,w),new A.eo5(),v),v.k("J.E"))
if(u.length===0){s.adS("Plug a TV into an outlet first. Then you can look behind it.")
return}t=A.jQ(D.d.gI(u).a).d.a
s.ch=!1
r=s.f
r.qX(!1)
r.w=0.02
r.y=0
r.z=1.7
s.m(new A.eo6(s))
s.r=A.wJ(s.d,new A.rE(s.z,s.Q,!1))
w=t<0?-1.4:1.4
r.hP(60,0.12,new A.r(t,-30,14),w)
s.qr("This is the back of the TV. Tap the TV or its plug to pull the plug.",!0)},
bCv(){var w,v,u=this
u.ch=!0
w=u.f
w.qX(!0)
u.m(new A.eo7(u))
v=u.d
v===$&&C.c()
u.r=A.wJ(v,new A.rE(u.z,u.Q,!1))
w.hP(190,0.3,B.fRW,3.141592653589793)},
Zy(d,e){var w,v,u,t,s=this,r=A.jQ(e),q=s.f
q.qX(!1)
q.y=0
s.m(new A.eox(s,e))
w=s.d
w===$&&C.c()
s.r=A.wJ(w,new A.rE(s.z,s.Q,!1))
v=A.ahF(r,B.fPU)
w=r.c
u=w?20:15
t=w?1.2:0.3
q.hP(u,w?-0.12:0.26,v,t)},
adR(){var w,v=this
v.m(new A.eof(v))
w=v.d
w===$&&C.c()
v.r=A.wJ(w,new A.rE(v.z,v.Q,!1))
v.b3y()},
c6G(d){var w,v,u,t,s,r,q,p=this
if(d===0){if(p.Q<0)p.m(new A.eoU(p))
return}w=p.Q
if(w>=0)v=!(d>=5000&&d<5700)
else v=!1
if(v)return
if(d>=5000&&d<5700){v=d-5000
u=D.o.an(v,100)
if(w!==u){if(p.z==="tester")p.aBm(u)
else{p.m(new A.eoV(p))
p.Zy(0,u)}return}p.b1g(u,D.o.F(v,100))
return}if(d>=1000&&d<1010)if(p.z==="drill"){w=p.d
w===$&&C.c()
p.jx(w.cLN(d-1000))
return}if(d>=2000&&d<2007){p.b1i(d-2000)
return}if(d>=3000&&d<3007){p.b1h(d-3000)
return}if(d>=6000&&d<6005){if(p.z==="sheet"){w=p.d
w===$&&C.c()
p.jx(w.cOx(B.a4b[d-6000]))}return}if(d>=6100&&d<6103){t=B.oj[d-6100]
if(p.z==="paint"){w=p.d
w===$&&C.c()
p.jx(w.cTw(t))
return}}if(d>=6200&&d<6202){s=d-6200
switch(p.z){case"tape":w=p.d
w===$&&C.c()
p.jx(w.cWf(s))
return
case"mud":w=p.d
w===$&&C.c()
p.jx(w.cRd(s))
return
case"sand":w=p.d
w===$&&C.c()
p.jx(w.bmO(s))
return}}if(d>=7000&&d<7100){if(p.z==="screw"){w=p.d
w===$&&C.c()
v=d-7000
p.jx(w.bn1(D.o.an(v,10),D.o.F(v,10)))}return}if(d>=7500&&d<7600){if(p.z==="screw"){w=p.d
w===$&&C.c()
v=d-7500
p.jx(w.aKb(D.o.an(v,10),D.o.F(v,10),!0))}return}if(d===8000){w=p.d
w===$&&C.c()
p.jx(w.aIx())
return}if(d>=8200&&d<8207){w=p.d
w===$&&C.c()
p.jx(w.biY(d-8200))
return}if(d>=8100&&d<8107){w=p.d
w===$&&C.c()
r=w.CW.h(0,d-8100)
A:{if("tv"===r){w="The TV"
break A}if("lamp"===r){w="The lamp"
break A}if("toaster"===r){w="The toaster"
break A}w="The hair dryer"
break A}p.qr(w+" is plugged in. To pull the plug, go behind it (the Behind the TV button) and tap the plug on the wall.",!0)
return}if(p.z==="look"){w=p.r
w===$&&C.c()
q=w.b.h(0,d)
if(q!=null){p.m(new A.eoW(p,d))
p.qr(q.a+": "+q.b,!0)}}},
b1i(d){var w,v,u,t=this,s=t.d
s===$&&C.c()
if(s.at.ai(0,d)){s=t.z
s=s!=="tester"&&s!=="look"&&!D.d.q(B.HD,s)}else s=!1
if(s){t.m(new A.eoS(t))
t.Zy(0,d)
return}s=t.z
switch(s){case"wall":case"ceiling":case"fanbox":w=t.d
t.jx(w.cRa(d,s==="fanbox"?"fan":s))
return
case"cable":t.jx(t.d.cUm(d))
return
case"knife":t.jx(t.d.cKJ(d))
return
case"outlet":case"gfci":case"switch":case"split":case"v240four":case"v240three":case"v240only":case"isolated":case"switch2p":case"switch3":case"switch4":case"switchsmart":case"switchcombo":case"light":case"fan":v=t.d.bfj(d,s)
t.jx(v)
if(v.a){s=t.d.at.h(0,d).b
w=t.d
s.f=!w.b&&!w.dx
t.z=""
t.Zy(0,d)}return
case"tester":t.aBm(d)
return}if(t.d.at.ai(0,d)){t.Zy(0,d)
return}if(t.d.gwx()&&t.d.x.ai(0,d)&&!t.d.at.ai(0,d)){t.qr("This box is empty. Pick what you want to put in (an outlet, a switch, a light or a fan) from the tray, then tap the box.",!0)
return}s=t.r
s===$&&C.c()
u=s.b.h(0,2000+d)
if(u!=null){t.m(new A.eoT(t,d))
t.qr(u.a+": "+u.b,!0)}},
aBm(d){var w,v=this.d
v===$&&C.c()
w=v.ax&&!v.ay&&v.x.ai(0,d)&&this.d.z.q(0,d)
v=w?"The tester glows: this box is LIVE (120 volts). Turn the breaker OFF before you touch any wire.":"The tester stays dark: no power here. It is safe to work. (Test again after you turn the breaker off, every time.)"
this.qr(v,!w)
A.fT(w?1400:500,120,0.25,"tri")},
b1h(d){var w,v=this,u=v.d
u===$&&C.c()
w=u.at.h(0,d)
if(w==null)return
if(D.d.q(B.HD,v.z)){v.jx(v.d.bhl(d,v.z))
return}u=v.z
if(u==="tester"){v.aBm(d)
return}if(u==="flip"){if(D.d.q(B.jP,w.a)&&w.b.c>=2)v.jx(v.d.aF7(d))
else v.adS("Only a finished switch can be flipped.")
return}v.m(new A.eoR(v))
v.Zy(0,d)},
b1g(d,e){var w,v,u,t,s,r,q,p,o=this,n=o.d
n===$&&C.c()
w=n.at.h(0,d)
if(w==null)return
if(B.aOJ.q(0,e))return
n=w.a
v=A.rZ(n)
u=v.f
t=C.S(u).k("Z<1>")
s=C.C(new C.Z(u,new A.eoJ(e),t),t.k("J.E"))
r=A.hrg(n,e)
n=r!=null
if(n){u=w.b
u=u.b.iF(0,r)&&u.c===0}else u=!1
if(u){o.jx(o.d.biW(d,r))
return}u=!1
if(s.length!==0){t=w.b
if(t.c===0){t=t.b
if(t.h(0,e)!=null)u=o.at.length===0||t.h(0,e)===o.at}}if(u){n=o.d
u=w.b.b.h(0,e)
u.toString
o.jx(n.biW(d,u))
o.m(new A.eoK(o))
return}if(n){n=w.b
n=n.c===0&&!n.b.iF(0,r)&&D.d.b3(v.e,new A.eoL(r))}else n=!1
if(n){o.m(new A.eoM(o,r,d,e))
if(o.at.length!==0)o.qr(D.d.h_(v.e,new A.eoN(r)).b+": picked up. Now tap where it joins.",!0)
return}if(s.length!==0&&w.b.c===0){n=o.at
if(n.length===0){o.adS("Pick a wire below first, then tap "+D.d.gI(s).b+".")
o.m(new A.eoO(o,d,e))
return}q=o.d.bdF(d,n,e)
o.jx(q)
if(q.a)o.m(new A.eoP(o))
return}n=o.r
n===$&&C.c()
p=n.b.h(0,5000+d*100+e)
if(p!=null){o.m(new A.eoQ(o,d,e))
o.qr(p.a+": "+p.b,!0)}},
c6J(){var w,v,u,t,s,r,q=this,p=C.a([],x.ek)
for(w=0;w<7;++w){v=B.ur[w]
u=q.d
u===$&&C.c()
t=v.a
s=u.at.ai(0,t)
r=q.z
A:{if("wall"===r){u=!v.c&&!q.d.x.ai(0,t)
break A}if("ceiling"===r||"fanbox"===r){u=v.c&&!q.d.x.ai(0,t)
break A}if("cable"===r){u=q.d.x.ai(0,t)&&!q.d.z.q(0,t)
break A}if("knife"===r){u=!v.c&&q.d.x.ai(0,t)
break A}u=D.d.q(B.lA,r)||D.d.q(B.jP,q.z)
if(u){u=!v.c&&q.d.x.ai(0,t)&&!s
break A}if("light"===r||"fan"===r){u=v.c&&q.d.x.ai(0,t)&&!s
break A}if("tv"===r||"lamp"===r||"toaster"===r||"hairdryer"===r){u=s&&D.d.q(B.lA,q.d.at.h(0,t).a)
break A}if("tester"===r){u=q.d.x.ai(0,t)
break A}u=!1
break A}if(u)p.push(new C.z(t,v.b))}return p},
cwt(){var w,v,u,t,s,r,q,p=null,o=this.c6J()
if(o.length===0)return D.bJ
w=C.a([],x.p)
for(v=o.length,u=0;u<o.length;o.length===v||(0,C.M)(o),++u){t={}
s=o[u]
t.a=null
t.a=s.a
r=new C.aQ(12,12)
q=new C.ay(D.b1,1,D.r,-1)
w.push(C.aB(p,C.p(p,new C.y("\ud83d\udccd "+s.b,p,D.ou,p,p,p,p,p,p,p,p,p),D.f,p,p,new C.o(D.f5.j(0.35),p,new C.bJ(q,q,q,q),new C.bk(r,r,r,r),p,p,D.n),p,p,p,p,B.Zh,p,p,p),D.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new A.ep_(t,this),p,p,p,p,p,p,!1,D.a4))}return new C.D(D.i9,C.bX(D.bB,w,D.bs,6,6),p)},
bOW(){var w=null,v=this.c
v.toString
C.cf(w,w,!1,w,new A.eod(this),v,w,!0,!0,x.H)},
c6A(){var w=null,v=this.c
v.toString
C.cf(w,w,!0,w,new A.eoa(this),v,w,!0,!0,x.H)},
awY(d){this.m(new A.eoh(this,d))
this.aTg()},
aZ2(){return this.awY(!1)},
c6E(){var w,v,u,t,s,r,q,p,o,n=this,m=n.d
m===$&&C.c()
if(m.w)return"The job is over."
switch(n.y){case 0:m=m.d
m===$&&C.c()
w=C.S(m).k("Z<1>")
v=C.C(new C.Z(m,new A.eoi(n),w),w.k("J.E"))
if(v.length!==0){u=D.d.gI(v)
t=A.jQ(u.a)
m=A.ago(u.b)
if(t.c)w=t.e==="fan"?"fan box":"ceiling box"
else w="wall box"
return"Mount a box at "+t.b+" ("+m.toLowerCase()+" goes here): pick a "+w+", then tap the glowing spot."}m=n.d.d
m===$&&C.c()
w=C.S(m).k("Z<1>")
s=C.C(new C.Z(m,new A.eoj(n),w),w.k("J.E"))
if(s.length!==0){t=D.d.gI(s).a
m=n.d.aKX(t)
r=new C.Z(m,new A.eok(n),C.S(m).k("Z<1>")).gL(0)
return r>0?"The cable comes from the panel on the right. Pick the drill and tap each stud on the way to "+A.jQ(t).b+" ("+r+" left).":"Pick the cable roll and tap "+A.jQ(t).b+"."}return"Rough-in done! Open 2 Drywall."
case 1:if(!m.gaIo())return"Finish the rough-in first (tab 1). Drywall hides the wires."
if(!n.d.gaCG())return"Pick a drywall sheet and tap a stud edge to hang it. Three sheets cover the wall."
if(!n.d.gaCF())return"Pick the drywall saw and tap each box to cut its opening."
if(!D.d.d8(B.oj,n.d.gapu()))return"Pick the screw gun and put a screw in every glowing spot on the studs."
if(D.d.b3(n.d.as,new A.eon()))return"Pick the tape and tap each seam between two sheets."
if(D.d.b3(n.d.as,new A.eoo()))return D.d.b3(n.d.as,new A.eop())?'The mud is wet. Press "Let it dry", then the next coat.':"Pick the mud and tap each seam. It needs three coats, with drying in between."
if(D.d.b3(n.d.as,new A.eoq()))return D.d.b3(n.d.as,new A.eor())?'Press "Let it dry", then sand.':"Pick the sander and tap each seam."
if(!n.d.gwx())return"Pick the roller and paint each sheet."
return"Drywall done! Open 3 Devices."
default:if(!m.gwx())return"Finish the drywall first (tab 2)."
m=n.d.d
m===$&&C.c()
w=C.S(m).k("Z<1>")
q=C.C(new C.Z(m,new A.eos(n),w),w.k("J.E"))
if(q.length!==0){u=D.d.gI(q)
return"The breaker being on is not the end: the job is done only when every device is in and wired. Tap the blue square at "+A.jQ(u.a).b+" to put in the "+A.ago(u.b).toLowerCase()+". ("+C.w(new A.eov().$1(new C.N(q,new A.eot(),C.S(q).k("N<1,H>"))))+" still need a device.)"}m=n.d.d
m===$&&C.c()
w=C.S(m).k("Z<1>")
p=C.C(new C.Z(m,new A.eou(n),w),w.k("J.E"))
if(p.length!==0)return"Tap "+A.jQ(D.d.gI(p).a).b+" to work on it: breaker OFF, wires, push in, cover on."
m=n.d
if(!m.ax)return"Turn the breaker ON (tap the panel or the breaker button) and test."
m=m.d
m===$&&C.c()
w=C.S(m).k("Z<1>")
o=C.C(new C.Z(m,new A.eol(n),w),w.k("J.E"))
if(o.length!==0)return"Pick the TV or the lamp and plug it into "+A.jQ(D.d.gI(o).a).b+" to test it."
m=n.d.d
m===$&&C.c()
return"Flip the wall switch to test the "+(D.d.b3(m,new A.eom())?"fan":"light")+"."}},
B(a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this,a2=null,a3=B.dmE[a1.y],a4=a1.Q
if(a4>=0){w=a1.d
w===$&&C.c()
v=w.at.h(0,a4)}else v=a2
a4=v==null
u=a4?a2:A.rZ(v.a)
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
for(l=0;l<3;++l)m.push(new C.D(D.MD,new C.y(l<a1.d.e?"\u2764\ufe0f":"\ud83d\udda4",a2,D.A3,a2,a2,a2,a2,a2,a2,a2,a2,a2),a2))
m.push(D.bn)
k=a1.d
if(k.ay)k=D.k7
else{k=k.ax
k=k?D.ev:D.dX}k=k.j(0.95)
j=C.m(16)
i=a1.d
h=i.ay
if(h)g=D.cY
else{g=i.ax
g=g?D.cs:D.bo}g=C.I(g,D.r,1.4)
if(h)i="TRIPPED: tap to reset"
else{i=i.ax
i=i?"Breaker ON":"Breaker OFF"}m.push(C.aB(a2,C.p(a2,C.d(i,a2,a2,a2,a2,a2,a2,B.ffs,a2,a2,a2),D.f,a2,a2,new C.o(k,a2,g,j,a2,a2,D.n),a2,a2,a2,a2,D.ra,a2,a2,a2),D.y,!1,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,new A.ep7(a1),a2,a2,a2,a2,a2,a2,!1,D.a4))
m=C.a([C.B(m,D.m,a2,D.e,D.P,0,a2,a2)],n)
k=a1.ch
j=k?"In front":"Behind the wall"
i=k?G.amq:G.amp
k=C.a([A.wK(j,D.by,i,k,k?a1.gbQt():a1.gbCu()),D.am,A.wK("Look up",D.b1,B.bL_,!1,a1.gc1e()),D.am,A.wK("Behind the TV",D.cY,V.a1j,!1,a1.gbCw()),D.am],n)
if(!a4){j=v.b
D.d.v(k,C.a([A.wK("Labels",D.aR,M.C1,j.f,new A.ep8(a1,v)),D.am,A.wK("Hints",D.aE,D.rj,j.e,new A.ep9(a1,v)),D.N],n))}s=A.XI(!1,a2,a1.f,new A.epj(a1),a2,p,r,o,a2,a2,q,a2,a1.gc6B(),new A.epk(a1),a1.gc6F(),s,!1,a2,m,k)
r=C.a([],n)
if(a4){a4=C.a([],n)
for(l=0;l<3;++l){q=l<2?6:0
p=a1.y===l?D.aE.j(0.2):D.dr
o=new C.aQ(12,12)
f=new C.ay(a1.y===l?D.aE:D.bz,1,D.r,-1)
if(l===0)m=a1.d.gaIo()
else{m=a1.d
m=l===1?m.gwx():m.gbcY()}m=m?"\u2705 ":""
k=B.dkT[l]
j=a1.y===l?D.aE:D.ae
a4.push(new C.bA(1,D.bd,C.aB(a2,C.p(a2,new C.cn(D.A,a2,a2,new C.y(m+k,a2,new C.F(!0,j,a2,a2,a2,a2,12,D.u,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2),a2,a2,a2,a2,a2,a2,a2,a2,a2),a2),D.f,a2,a2,new C.o(p,a2,new C.bJ(f,f,f,f),new C.bk(o,o,o,o),a2,a2,D.n),a2,a2,a2,new C.Q(0,0,q,0),A2.MG,a2,a2,a2),D.y,!1,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,new A.epl(a1,l),a2,a2,a2,a2,a2,a2,!1,D.a4),a2))}a4=C.a([C.B(a4,D.m,a2,D.e,D.j,0,a2,a2),D.am],n)
if(!a1.d.b){q=D.aR.j(0.1)
p=C.m(10)
o=C.I(D.aR.j(0.4),D.r,1)
a4.push(C.p(a2,C.d("\ud83d\udc49 "+a1.c6E(),a2,2,D.a1,a2,a2,a2,B.fgZ,a2,a2,a2),D.f,a2,a2,new C.o(q,a2,o,p,a2,a2,D.n),a2,a2,a2,a2,D.cm,a2,a2,1/0))}else a4.push(B.fzi)
a4.push(D.am)
q=C.a([],n)
if(a1.y<2&&!a1.d.gwx())q.push(new C.D(E.tS,C.aB(a2,C.p(a2,B.b7v,D.f,a2,a2,new C.o(D.dI,a2,a2,C.m(14),a2,a2,D.n),a2,a2,a2,a2,D.fQ,a2,a2,a2),D.y,!1,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,new A.epm(a1),a2,a2,a2,a2,a2,a2,!1,D.a4),a2))
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
q.push(new C.D(E.tS,C.aB(a2,C.p(a2,new C.cb(D.aM,D.e,D.j,D.m,a2,D.p,a2,0,C.a([j,D.bn,new C.y(d.b,a2,new C.F(!0,o,a2,a2,a2,a2,12.5,D.H,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2),a2,a2,a2,a2,a2,a2,a2,a2,a2)],n),a2),D.f,a2,a2,new C.o(m,a2,new C.bJ(f,f,f,f),new C.bk(k,k,k,k),a2,a2,D.n),a2,a2,a2,a2,D.fQ,a2,a2,a2),D.y,!1,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,new A.epn(a1,d),a2,a2,a2,a2,a2,a2,!1,D.a4),a2))}if(a1.y===1)q.push(new C.D(E.tS,C.aB(a2,C.p(a2,B.b7n,D.f,a2,a2,new C.o(D.dX,a2,a2,C.m(14),a2,a2,D.n),a2,a2,a2,a2,D.fQ,a2,a2,a2),D.y,!1,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,new A.epo(a1),a2,a2,a2,a2,a2,a2,!1,D.a4),a2))
a4.push(new C.a8(a2,52,C.ct(q,a2,a2,a2,a2,D.aM,!1),a2))
if(a1.z.length!==0)a4.push(a1.cwt())
D.d.v(r,a4)}else{a4=C.a([],n)
q=v.b
if(q.c===0)for(p=D.d.gaf(u.e),o=new C.f5(p,new A.epp(v)),m=q.b;o.C();){k=p.gT(0)
j=k.c
i=new C.aQ(14,14)
h=a1.at
g=k.a
h=h===g
a0=h?D.b1:D.aZ
f=new C.ay(a0,h?3:1,D.r,-1)
a0=C.a([],n)
if(m.iF(0,g))a0.push(new C.D(D.ME,C.X(D.eb,k.d,a2,a2,a2,17),a2))
h=k.b
g=k.d
a0.push(new C.y(h,a2,new C.F(!0,g,a2,a2,a2,a2,12.5,D.u,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2),a2,a2,a2,a2,a2,a2,a2,a2,a2))
a4.push(C.aB(a2,C.p(a2,new C.cb(D.aM,D.e,D.P,D.m,a2,D.p,a2,0,a0,a2),D.f,a2,a2,new C.o(j,a2,new C.bJ(f,f,f,f),new C.bk(i,i,i,i),a2,a2,D.n),a2,a2,a2,a2,D.y1,a2,a2,a2),D.y,!1,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,new A.epq(a1,v,k),a2,a2,a2,a2,a2,a2,!1,D.a4))}a4=C.a([C.bX(D.bB,a4,D.bs,6,8)],n)
if(q.c===0&&a1.at.length!==0){p=C.a([],n)
for(o=D.d.gaf(u.f),m=new C.f5(o,new A.epa(v));m.C();){k=o.gT(0)
j=D.f5.j(0.35)
i=new C.aQ(12,12)
f=new C.ay(D.b1,1,D.r,-1)
p.push(C.aB(a2,C.p(a2,new C.y("\u279c "+k.b,a2,D.ou,a2,a2,a2,a2,a2,a2,a2,a2,a2),D.f,a2,a2,new C.o(j,a2,new C.bJ(f,f,f,f),new C.bk(i,i,i,i),a2,a2,D.n),a2,a2,a2,a2,B.Zh,a2,a2,a2),D.y,!1,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,new A.epb(a1,k),a2,a2,a2,a2,a2,a2,!1,D.a4))}a4.push(new C.D(D.jK,C.bX(D.bB,p,D.bs,6,6),a2))}a4.push(D.N)
p=C.a([A.u3("Back to the room",D.mB,a1.gc6D(),D.ae),D.ab],n)
if(q.c===0){u.toString
o=A.bDr(u,q)?"Push it into the box":"Fasten every wire"
p.push(A.u3(o,B.anx,A.bDr(u,q)?new A.epc(a1):a2,D.aE))}if(q.c===1)D.d.v(p,C.a([A.u3("Pull it out",D.rn,new A.epd(a1),D.ae),D.ab,A.u3("Cover on",A_.w3,new A.epe(a1),D.aE)],n))
o=q.c>=2
if(o&&q.w)p.push(A.u3("Take out the burnt one",B.ami,new A.epf(a1),D.cs))
else if(o)p.push(A.u3("Pull it out of the wall",B.ami,new A.epg(a1),D.ae))
a4.push(C.B(p,D.m,a2,D.e,D.j,0,a2,a2))
if(!q.w)D.d.v(a4,C.a([D.N,C.B(C.a([A.u3("Take it out and put in a different "+(D.d.q(B.jP,v.a)?"switch":"one"),D.ke,new A.eph(a1,v),D.aR)],n),D.m,a2,D.e,D.j,0,a2,a2)],n))
D.d.v(r,a4)}a4=C.a([A.TE(D.aE,new A.epi(a1,a5),C.x(r,D.m,a2,D.e,D.P,0,D.p),s,"Phase "+(w+1)+"/3",t+" job",a2)],n)
if(a1.CW)a4.push(C.bU(0,C.e2(C.p(a2,a2,D.f,B.agN,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2),!0,a2),0,0,0))
return new C.an(D.a_,a2,D.aa,D.t,a4,a2)},
cq4(d){var w=this.d
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
break A}this.qr(w,!0)},
cfb(d){return C.bT(E.lp,null,new A.eoI(this,d),d,!0,!0,!0,D.jW,!1,!1,x.H)}}
A.rE.prototype={}
A.rb.prototype={
a3(){return"FaultKind."+this.b}}
A.um.prototype={}
A.Me.prototype={}
A.csq.prototype={
byv(d,e,f){var w,v,u,t,s,r,q,p=this,o=new C.en()
o.df(p.a)
w=C.C(B.da4,x.eP)
D.d.ec(w,o)
v=C.aY(x.S)
u=C.a([],x.gw)
for(t=w.length,s=0;s<w.length;w.length===t||(0,C.M)(w),++s){r=w[s]
q=B.wt.h(0,r).e
if(v.q(0,q))continue
v.M(0,q)
u.push(new A.Me(r,o.au(3)))
if(u.length>=d)break}p.c!==$&&C.aP()
p.c=u
p.awZ()},
pQ(d,e){var w=this.c
w===$&&C.c()
return D.d.b3(w,new A.csv(e))},
awZ(){var w,v,u,t,s=this,r=s.d,q=r.d
q.a8(0)
if(s.pQ(0,B.a_D))q.M(0,72)
if(s.pQ(0,B.a_E))q.M(0,75)
q=s.pQ(0,B.Nk)
r.b=q
r.c=!q
r.w=s.pQ(0,B.Nl)
r.x=s.pQ(0,B.a_I)
r.y=s.pQ(0,B.a_J)
r.z=s.pQ(0,B.a_H)
r.Q=s.pQ(0,B.a_K)
r.as=s.pQ(0,B.a_L)
r.at=s.pQ(0,B.a_G)
q=r.f
q.a8(0)
r=r.r
r.a8(0)
w=s.c
w===$&&C.c()
w=D.d.gaf(w)
v=new C.f5(w,new A.csr())
while(v.C()){u=w.gT(0)
t=u.c
u=u.b
if(t)r.M(0,u)
else q.M(0,u)}},
gcFs(){var w=this.c
w===$&&C.c()
return D.d.d8(w,new A.cst())},
gcMT(){var w=this.c
w===$&&C.c()
return new C.Z(w,new A.csu(),C.S(w).k("Z<1>")).gL(0)},
cMw(d){var w,v,u,t,s,r,q,p=this.c
p===$&&C.c()
w=p.length
v=d===86
u=d===92
t=0
for(;t<p.length;p.length===w||(0,C.M)(p),++t){s=p[t]
r=s.a
q=!0
if(B.wt.h(0,r).e!==d)if(!(r===B.Nk&&v))r=r===B.Nl&&u
else r=q
else r=q
if(r)return s}return null},
aZ3(d){++this.f
return new A.ex(!1,d,!1,"")},
c6K(){var w,v,u,t,s=this;++s.r;--s.e
for(w=s.d,v=w.d,w=w.e,u=0;u<4;++u){t=B.avO[u]
if(!v.q(0,t))w.M(0,t)}w=s.e
if(w<=0){s.w=!0
return B.aXD}v=w===1?"life":"lives"
return new A.ex(!1,"ZAP! You touched a live wire and got a shock. All the breakers were knocked off. "+w+" "+v+" left. Turn the breaker OFF first.",!0,"shock")},
cX2(d,e){var w,v,u,t,s=this
if(s.w)return B.aXy
if(D.d.q(B.avO,e))return s.bD0(d,e)
w=s.cMw(e)
if(d==="inspect"){if(w==null||w.c)return B.aXC
return new A.ex(!0,"You look and test: "+B.wt.h(0,w.a).b,!1,"")}if(w==null||w.c)return new A.ex(!1,s.b?"Nothing needs fixing there.":"There is nothing wrong with this, so the "+C.w(B.RF.h(0,d))+' is not needed. Use "Look and test" on things to find the problem.',!1,"")
v=B.wt.h(0,w.a)
if(d!==v.c){++s.f
return new A.ex(!1,s.b?"That is not the right tool for this problem.":"The "+C.w(B.RF.h(0,d))+" does not fix this. "+v.b,!1,"")}u=v.f
if(u!==0){t=s.d
u=!t.d.q(0,u)&&!t.e.q(0,u)}else u=!1
if(u){if(s.b)return s.c6K()
return s.aZ3("STOP! "+v.r+" The wires here are live (120 volts). Tap the breaker in the panel (with your hand) to switch it off.")}w.c=!0
s.awZ()
return new A.ex(!0,v.d,!1,"")},
bD0(d,e){var w,v,u,t,s=this
if(d==="inspect"){w=s.d
if(w.d.q(0,e))w="This breaker has tripped: it sits in the middle (orange)."
else w=w.e.q(0,e)?"This breaker is switched OFF.":"This breaker is ON."
return new A.ex(!0,w,!1,"")}if(d!=="hand")return s.aZ3(s.b?"Use your hand on a breaker.":"A breaker is switched with your hand, not with a "+C.w(B.RF.h(0,d))+".")
w=s.d
v=w.d
if(v.q(0,e)){w=s.c
w===$&&C.c()
u=C.S(w).k("Z<1>")
t=C.C(new C.Z(w,new A.css(e),u),u.k("J.E"))
if(t.length!==0){D.d.gI(t).c=!0
s.awZ()
return new A.ex(!0,B.wt.h(0,D.d.gI(t).a).d,!1,"")}v.W(0,e)
return B.aY6}w=w.e
if(w.q(0,e)){w.W(0,e)
return B.aY0}w.M(0,e)
return B.aXR}}
A.arl.prototype={
U(){var w,v=new A.x5(-0.3,0.48,46,B.UM,$.aw())
v.f=80
w=new C.y2()
$.yM()
w.hE(0)
return new A.aEp(v,w)}}
A.aEp.prototype={
gK(){var w=this.d
w===$&&C.c()
return w},
gCL(d){var w=this.e
if(w===$){this.a.toString
w=D.o.F(Date.now(),1e5)
this.e=w}return w},
a_(){var w,v=this
v.a1()
w=v.gCL(0)
v.a.toString
w=A.hex(!1,w)
v.d=w
v.r=A.agf(w.d)},
t(){var w=this.ax
if(w!=null)w.a4(0)
this.a2()},
c6P(d,e){var w=this,v=w.ax
if(v!=null)v.a4(0)
w.m(new A.eqN(w,d,e))
w.ax=C.cM(D.js,new A.eqO(w))},
aZ4(){this.f.hP(46,0.48,B.UM,-0.3)
this.m(new A.eqC(this))},
c6O(d){var w,v,u=this
if(d===0)return
w=u.d
w===$&&C.c()
v=w.cX2(u.x,d)
w=v.a
if(w)A.yA()
else A.fT(180,220,0.25,"square")
if(v.d==="shock"){C.fF()
u.m(new A.eqH(u))
C.bN(D.nf,new A.eqI(u),x.P)}u.m(new A.eqJ(u,d))
w=w&&!v.c
u.c6P(v.b,w)
w=u.d
if(w.w)$.aV.x1$.push(new A.eqK(u))
else if(w.gcFs()&&!u.at){u.at=!0
$.aV.x1$.push(new A.eqL(u))}},
cfj(){var w=null,v=this.c
v.toString
C.cf(w,w,!1,w,new A.eqF(this),v,w,!0,!0,x.H)},
c6L(){var w=null,v=this.c
v.toString
C.cf(w,w,!0,w,new A.eqB(this),v,w,!0,!0,x.H)},
awl(){this.m(new A.eqD(this))
this.aZ4()},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.d
g===$&&C.c()
g=g.gcMT()
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
for(o=0;o<3;++o)p.push(new C.D(D.MD,new C.y(o<i.d.e?"\u2764\ufe0f":"\ud83d\udda4",h,D.A3,h,h,h,h,h,h,h,h,h),h))
v=A.XI(!1,h,i.f,new A.eqV(i),h,s,u,r,h,new A.eqW(),t,h,h,i.gc6M(),i.gc6N(),v,!1,h,C.a([C.B(p,D.m,h,D.e,D.P,0,h,h)],q),h)
u=i.d.c
u===$&&C.c()
t=C.S(u)
t=new C.cQ(new C.Z(u,new A.eqX(),t.k("Z<1>")),new A.eqY(),t.k("cQ<1,n>")).aG(0,"  \xb7  ")
u=C.d("Customer: "+(t.length===0?"All fixed!":t),h,2,D.a1,h,h,h,B.aRb,h,h,h)
t=C.a([],q)
for(n=0;n<10;++n){m=B.dpa[n]
s=i.x===m?D.aE.j(0.25):D.c.j(0.07)
r=new C.aQ(14,14)
p=i.x===m
l=p?D.aE:D.aZ
k=new C.ay(l,p?2:1,D.r,-1)
l=B.duU.h(0,m)
p=C.X(l,i.x===m?D.aE:D.ae,h,h,h,19)
l=B.RF.h(0,m)
l.toString
j=i.x===m?D.aE:D.c
t.push(new C.D(E.tS,C.aB(h,C.p(h,new C.cb(D.aM,D.e,D.j,D.m,h,D.p,h,0,C.a([p,D.bn,new C.y(l,h,new C.F(!0,j,h,h,h,h,12.5,D.H,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h),h,h,h,h,h,h,h,h,h)],q),h),D.f,h,h,new C.o(s,h,new C.bJ(k,k,k,k),new C.bk(r,r,r,r),h,h,D.n),h,h,h,h,D.fQ,h,h,h),D.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new A.eqZ(i,m),h,h,h,h,h,h,!1,D.a4),h))}g=C.a([A.TE(D.aR,new A.er_(i,d),C.x(C.a([new C.bK(D.a3,h,h,u,h),D.N,new C.a8(h,52,C.ct(t,h,h,h,h,D.aM,!1),h)],q),D.m,h,D.e,D.P,0,D.p),v,""+g+"/"+w+" fixed","Service call",h)],q)
if(i.as)g.push(C.bU(0,C.e2(C.p(h,h,D.f,B.agN,h,h,h,h,h,h,h,h,h,h),!0,h),0,0,0))
return new C.an(D.a_,h,D.aa,D.t,g,h)},
cA1(d){return C.bT(E.lp,null,new A.eqT(this),d,!0,!0,!0,D.jW,!1,!1,x.H)},
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
A.xS.prototype={
gkA(d){return this.x}}
A.rC.prototype={}
A.a9A.prototype={}
A.i8.prototype={
aFN(d,e,f){var w=this
return d>w.a-f&&d<w.b+f&&e>w.c-f&&e<w.d+f}}
A.coZ.prototype={
c6Q(d){return-this.a.gev(0)/2+d*4},
a4H(d,e){var w,v,u=this.a
if(d<-u.gev(0)/2+6||d>u.gev(0)/2-6||e<6||e>u.ghm(0)-6)return!1
for(u=this.b,w=u.length,v=0;v<w;++v)if(u[v].aFN(d,e,9))return!1
return!0},
aZ6(d,e,f){var w,v,u=e.a,t=f.a-u,s=e.b,r=f.b-s,q=Math.max(1,D.k.dk(Math.sqrt(Math.pow(t,2)+Math.pow(r,2))/2))
for(w=0;w<=q;++w){v=w/q
if(!this.a4H(u+t*v,s+r*v))return!1}return!0},
aXJ(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=a0.a,f=h.a,e=D.k.V((g+f.gev(0)/2)/4),d=h.c
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
if(!h.a4H(-f.gev(0)/2+k,j))continue
i=Math.pow(-f.gev(0)/2+k-g,2)+Math.pow(j-e,2)
if(i<o){p=new C.z(n,l)
o=i}}if(p!=null)return p}return null},
ao6(b9,c0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5=this,b6=1e9,b7=b5.aXJ(b9),b8=b5.aXJ(c0)
if(b7==null||b8==null)return C.a([b9,c0],x.f)
w=b8.a
v=b5.c6Q(w)
u=b8.b
t=new C.z(v,u*4)
if(b5.aZ6(0,b9,t))return C.a([b9,t],x.f)
v=b7.a
s=b5.d
s===$&&C.c()
r=b7.b
q=x.S
p=C.ey([v*s+r],q)
o=C.U(q,q)
n=x.i
m=C.G([v*s+r,0],q,n)
l=C.G([v*s+r,b5.bSA(v,r,b8)],q,n)
k=w*s+u
v=b5.a
r=p.$ti
q=r.k("mi<1>")
r=r.c
i=0
for(;;){if(p.a!==0){h=i+1
n=i<6000
i=h}else n=!1
if(!n){j=!1
break}g=p.e
if(g==null)C.b8(C.bd("No elements"))
f=g.a
for(n=new C.mi(p,p.r,q),n.c=g;n.C();){e=n.d
d=e==null?r.a(e):e
e=l.h(0,d)
if(e==null)e=b6
a0=l.h(0,f)
if(e<(a0==null?b6:a0))f=d}if(f===k){j=!0
break}p.W(0,f)
a1=D.o.e8(f,s)
a2=D.o.F(f,s)
for(n=a2*4,e=a1*4,a3=-1;a3<=1;++a3)for(a0=a3===0,a4=!a0,a5=a1+a3,a6=a5*4,a7=a5-w,a8=-1;a8<=1;++a8){if(a0&&a8===0)continue
a9=a2+a8
b0=!0
if(a5>=0)if(a9>=0){b0=b5.c
b0===$&&C.c()
b0=a5>=b0||a9>=s||!b5.a4H(-v.gev(0)/2+a6,a9*4)}if(b0)continue
b0=!1
if(a4)if(a8!==0)b0=!b5.a4H(-v.gev(0)/2+a6,n)||!b5.a4H(-v.gev(0)/2+e,a9*4)
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
e=D.o.e8(n,s)
u.push(new C.z(-v.gev(0)/2+e*4,D.o.F(n,s)*4))}b4=C.a([D.d.gI(u)],w)
for(a5=0;a9=u.length-1,a5<a9;a5=a9){w=a5+1
for(;;){if(!(a9>w&&!b5.aZ6(0,u[a5],u[a9])))break;--a9}b4.push(u[a9])}return b4},
bSA(d,e,f){return Math.sqrt(Math.pow(d-f.a,2)+Math.pow(e-f.b,2))}}
A.Ar.prototype={}
A.bqx.prototype={
byL(d,e,f,g,h,i,j,k,l,m,n,o){var w,v,u,t,s=this.b
if(s!=null)for(w=this.as,v=1;v<s.length;++v){u=v-1
t=Math.sqrt(Math.pow(s[v].a-s[u].a,2)+Math.pow(s[v].b-s[u].b,2))
w.push(t)
this.at+=t}}}
A.aVf.prototype={
aue(d){var w,v,u=d.gev(0),t=new A.bSL(d,u)
switch(d.c){case"living":w=t.$1(46)
return C.a([B.hay,new A.Ar(w.a,w.b,4,"Switching the ad on the big TV",!1,!0,!0,"ad")],x.h)
case"kitchen":return C.a([new A.Ar(new C.z(-u/2+40,42),3.141592653589793,2.8,"Getting a drink from the fridge",!0,!1,!1,""),B.hax],x.h)
case"bathroom":return B.dlV
case"bedroom":v=t.$1(44)
return C.a([new A.Ar(v.a,v.b,3.4,"Switching the ad on the TV",!1,!0,!0,"ad")],x.h)
case"hall":if(!this.a)return B.aym
return C.a([new A.Ar(new C.z(-d.gev(0)/2+80,90),3.141592653589793,3,"Looking at the left video wall",!1,!1,!0,""),new A.Ar(B.eon,0,2.4,"Looking over the lounge and the logo carpet",!1,!1,!1,""),new A.Ar(new C.z(d.gev(0)/2-80,90),3.141592653589793,3,"Looking at the right video wall",!1,!1,!0,"")],x.h)
default:return B.aym}},
acf(a0,a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=e.b.d
d===$&&C.c()
w=d[a0]
v=new A.coZ(w,A.iaO(w))
v.c=D.k.dk(w.gev(0)/4)+1
v.d=D.k.dk(w.ghm(0)/4)+1
u=A.hiC(w,a1)
t=u.a
s=u.c
d=e.d
r=d.length
q=a3.length===0?"Walking in":a3
d.push(A.bqy(a0,"",!1,q,-1,null,!1,!1,0.5,t.a,u.b,t.b))
for(q=e.aue(w),p=q.length,o=t,n=0;n<q.length;q.length===p||(0,C.M)(q),++n){m=q[n]
l=v.ao6(o,m.a)
k=m.e
if(k)j=C.cU(m.d,"Having",0)
else j=!1
d.push(A.bqy(a0,"",j,"Walking",-1,l,!1,!1,0,0,0,0))
o=D.d.gal(l)
d.push(A.bqy(a0,m.w,k,m.d,-1,null,m.r,m.f,m.c,o.a,m.b,o.b))}if(a2!=null){i=A.hiC(w,a2)
h=i.c
l=v.ao6(o,i.a)
g=e.aue(w).length!==0&&D.d.gal(e.aue(w)).e
d.push(A.bqy(a0,"",g,"Walking to the next room",-1,l,!1,!1,0,0,0,0))
o=D.d.gal(l)
d.push(A.bqy(a0,"",g,"Opening the door",h,null,!1,!1,1.8,o.a,e.bMa(w,h),o.b))}for(f=r;f<d.length;++f)d[f].ay=s},
aWw(d,e,f){return this.acf(d,e,f,"")},
bMa(d,e){var w,v=d.w[e].b
A:{if("left"===v){w=-1.5707963267948966
break A}if("right"===v){w=1.5707963267948966
break A}w=3.141592653589793
break A}return w},
aZ5(){var w,v,u=this
if(u.a){u.acf(5,10,9,"Walking into the hall")
u.aZ7()
return}u.acf(10,11,9,"Coming in through the front door")
u.aWw(9,10,5)
u.acf(5,9,0,"Walking down the hall")
for(w=0;w<8;++w){v=B.cV2[w]
u.aWw(v,5,w===7?null:5)}u.aZ7()},
aZ7(){var w,v,u,t,s,r,q,p,o=this,n=o.c,m=Math.min(1,n/120)
for(w=o.d,v=w.length,u=0,t=0,s=0;s<v;++s){r=w[s]
if(r.b==null)u+=r.f*=m
else t+=r.at}q=t/Math.max(4,n-u)
for(n=q<=0,p=0,s=0;s<v;++s){r=w[s]
if(r.b!=null)r.f=n?0.1:Math.max(0.05,r.at/q)
r.ax=p
p+=r.f}o.e!==$&&C.aP()
o.e=p},
baD(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g={},f=this.e
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
return A.ata(!1,n,f.ay,p,f.w,0,f.r,o,0,!1,s,f.x,v,!1,!1,f.c,f.e,f.d)}v=new A.bSM(g)
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
return A.ata(!1,0,o.ay,"",o.w,0,o.r,-1,m/12,!1,!1,!1,f.a,!1,!0,v,p,s)}}
A.b8w.prototype={
Mf(d){var w=this.a
if(w!=null)this.ax=A.hqc(w,this.CW)},
aIG(){var w,v,u,t,s,r,q=this
if(!q.KA(q.f,q.r))return!1
for(w=6;w<=320;w+=6){v=Math.max(8,D.k.V(w/6)*3)
for(u=0;u<v;++u){t=u*2*3.141592653589793/v
s=q.f+Math.cos(t)*w
r=q.r+Math.sin(t)*w
if(!q.KA(s,r)){q.f=s
q.r=r
q.at=null
return!0}}}return!1},
KA(d,e){var w,v,u,t,s=this
if(d<s.b||d>s.c||e<s.d||e>s.e)return!0
for(w=s.ax,v=w.length,u=s.ay,t=0;t<v;++t)if(w[t].aFN(d,e,u))return!0
return!1},
aKU(d,e,f,g){var w,v,u,t,s,r,q,p,o=this,n=Math.sqrt(e*e+f*f)
if(n<0.000001)return o.x=!1
w=e/n
v=f/n
u=o.ch
t=o.z?1.9:1
s=115*u*t*Math.min(1,n)*g
r=o.f+w*s
q=o.r+v*s
p=!0
if(o.KA(r,q))if(!o.KA(r,o.r))q=o.r
else{p=!o.KA(o.f,q)
if(p)r=o.f}if(p){o.f=r
o.r=q
o.w=Math.atan2(w,v)
o.y=o.y+s/12}return o.x=p},
cMv(d){var w,v=this,u=v.Q
if(u<=0&&v.as<=0)return
w=v.as
u+=w*d
v.Q=u
v.as=w-560*d
if(u<=0)v.as=v.Q=0},
Ft(d,e){var w,v,u,t=this,s=t.at
if(s==null)return!1
w=s.a-t.f
v=s.b-t.r
if(Math.sqrt(w*w+v*v)<4){t.at=null
return t.x=!1}u=t.aKU(0,w,v,e)
if(!u){t.at=null
t.x=!1}return u}}
A.ajW.prototype={}
A.apx.prototype={
U(){var w=x.N
return new A.bd1(C.U(w,w))}}
A.bd1.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=x.p,g=C.eD(C.a([C.aI(i,i,i,i,B.bOs,i,i,i,new A.d3l(d),i,i,i,i,i,i)],h),i,i,!0,!0,E.lp,i,1,i,i,i,!1,i,!1,i,i,i,i,!0,i,i,i,i,i,B.fwc,i,i,i,1,i,!0),f=C.a([],h)
for(w=0;w<2;++w)f.push(C.j0(i,i,i,new C.y(D.d.gI(B.zc[w].b.split(" (")),i,i,i,i,i,i,i,i,i,i,i),i,new A.d3m(j,w),j.d===w,i,i,i,i))
f=C.bX(D.bB,f,D.bs,0,8)
v=j.e
v=C.bX(D.bB,C.a([C.j0(i,i,i,B.fLj,i,new A.d3n(j),!v,i,i,i,i),C.j0(i,i,i,B.fHx,i,new A.d3o(j),v,i,i,i,i)],h),D.bs,0,8)
u=B.zc[j.d]
u=C.a([f,D.N,v,D.R,C.d(u.b,i,i,i,i,i,i,D.df,i,i,i),D.au,C.d(u.c,i,i,i,i,i,i,Ab.DN,i,i,i),D.R],h)
for(f=B.zc[j.d].e,f=J.aW(f.ges(f)),v=x.N,t=x.e7,s=j.f,r=x.bP;f.C();){q=f.gT(f)
p=s.h(0,q)
o=C.a([],r)
for(n=B.zc[j.d].d,m=0;m<5;++m){l=n[m]
o.push(new C.eE(l,new C.y(l,i,D.oy,i,i,i,i,i,i,i,i,i),D.f1,i,t))}p=C.a([new C.y(q,i,B.fjG,i,i,i,i,i,i,i,i,i),C.SF(i,E.lp,B.frH,i,!1,!0,o,new A.d3p(j,q),i,i,p,v)],h)
if(!j.e&&s.h(0,q)!=null)p.push(new C.fd(new A.d3q(j,q),i))
p.push(D.am)
D.d.v(u,p)}u.push(C.bG(C.d(j.e?"Submit the test":"Check my wiring",i,i,i,i,i,i,i,i,i,i),new A.d3r(j),i))
f=j.r
if(f!=null){f=f.a
v=f===B.uW
t=v?"CORRECT: every lead follows the diagram.":A.fXR(f)+": not passed"
if(v)f=D.bo
else f=f===B.Tb?D.bI:D.cs
h=C.a([D.R,C.d(t,i,i,i,i,i,i,C.l(i,i,f,i,i,i,i,i,i,i,i,16,i,i,D.u,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)],h)
for(f=j.r.b,v=f.length,m=0;m<f.length;f.length===v||(0,C.M)(f),++m){k=f[m]
h.push(new C.y(k.c+"\nRule: "+k.d+"\nFix: "+k.e+"\n",i,B.fej,i,i,i,i,i,i,i,i,i))}for(f=B.zc[j.d].f,m=0;m<2;++m)h.push(new C.y("\u2022 "+f[m],i,D.v7,i,i,i,i,i,i,i,i,i))
D.d.v(u,h)}return C.c5(g,E.B0,C.ct(u,i,D.bC,i,i,D.ag,!1),i,!1,!1,i,i)}}
A.Jp.prototype={
a3(){return"SafetyStatus."+this.b}}
A.Fs.prototype={
a3(){return"TerminalRole."+this.b}}
A.Fz.prototype={
a3(){return"WireFunction."+this.b}}
A.cvr.prototype={}
A.cyM.prototype={}
A.a3Q.prototype={}
A.bKq.prototype={}
A.wd.prototype={}
A.te.prototype={}
A.b5b.prototype={}
A.aaI.prototype={}
A.aaJ.prototype={}
A.v1.prototype={}
A.b3U.prototype={}
A.b73.prototype={}
A.cvt.prototype={
bpu(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=C.a([],x.dH)
for(w=this.a,v=w.length,u=0;u<w.length;w.length===v||(0,C.M)(w),++u){t=w[u]
s=t.b
r=t.c
q=A.hmG(s,r,t.d)
p=new C.Z(r,new A.cvu(),C.S(r).k("Z<1>")).gL(0)
r=s.d?1:0
o=s.b+s.c+r
n=o===0?0:D.o.E(D.k.V(p*100/o),0,100)
if(q.a!==B.uW)n=D.o.E(n,0,79)
i.push(new A.aaJ(t.a,q,n))}w=C.a([],x.gl)
for(v=this.b,s=this.c,m=0;m<v.length;++m){r=v[m]
l=s.h(0,m)
w.push(new A.b3U(r,l==null?-1:l))}v=C.a([],x.t)
for(s=i.length,u=0;u<i.length;i.length===s||(0,C.M)(i),++u)v.push(i[u].c)
for(s=w.length,u=0;u<w.length;w.length===s||(0,C.M)(w),++u){k=w[u]
v.push(k.b===k.a.c?100:0)}j=v.length===0?0:D.k.V(D.d.f9(v,new A.cvv())/v.length)
return new A.b73(i,w,j,D.d.d8(i,new A.cvw())&&j>=80)}}
A.Ps.prototype={}
A.a0K.prototype={
U(){var w=x.S
return new A.btf(C.U(w,w))}}
A.btf.prototype={
B(d){var w=null,v=this.e,u=C.aH(d,w,x.w).w
return C.bm(!0,new C.cT(new C.aX(0,1/0,0,u.a.b*0.9),C.ct(v==null?this.cmd():this.cpE(v),w,D.bR,w,w,D.ag,!0),w),!0,!1,D.af,!0,!0)},
cmd(){var w,v,u,t,s,r,q=this,p=null,o=q.a,n=o.c.b,m=x.p
o=C.a([C.d("Test: "+o.d,p,p,p,p,p,p,D.df,p,p,p),D.au,B.fpW,D.R],m)
for(w=q.d,v=x.cE,u=0;u<n.length;u=t){t=u+1
s=C.a([new C.y(""+t+". "+n[u].a,p,D.ot,p,p,p,p,p,p,p,p,p)],m)
for(r=0;r<3;++r)s.push(new A.a9l(r,w.h(0,u),new A.f3S(q,u),new C.y(n[u].b[r],p,D.A2,p,p,p,p,p,p,p,p,p),!0,p,v))
s.push(D.au)
D.d.v(o,s)}o.push(D.N)
o.push(C.bG(B.fud,new A.f3T(q),p))
return o},
cpE(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=d.d,g=h?D.bo:D.cs
h=h?"Passed":"Not passed"
w=x.p
h=C.a([C.d(h,i,i,i,i,i,i,C.l(i,i,g,i,i,i,i,i,i,i,i,22,i,i,D.u,i,i,!0,i,i,i,i,i,i,i,i),i,i,i),C.d("Score "+d.c+"%  (pass mark 80%)",i,i,i,i,i,i,D.Ud,i,i,i)],w)
v=d.a
if(D.d.b3(v,new A.f3U()))h.push(B.ego)
h.push(D.R)
for(u=v.length,t=0;t<v.length;v.length===u||(0,C.M)(v),++t){s=v[t]
r=s.b
q=r.a
p=A.h0o(q).j(0.1)
o=new C.aQ(12,12)
n=new C.ay(A.h0o(q).j(0.6),1,D.r,-1)
m=A.fXR(q)
q=A.h0o(q)
q=C.a([new C.y(s.a+": "+m+" ("+s.c+"%)",i,new C.F(!0,q,i,i,i,i,13.5,D.u,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i),i,i,i,i,i,i,i,i,i)],w)
r=r.b
if(r.length===0)q.push(B.fDS)
for(m=r.length,l=0;l<r.length;r.length===m||(0,C.M)(r),++l){k=r[l]
D.d.v(q,C.a([D.au,new C.y(A.fXR(k.b)+": "+k.c,i,B.f8s,i,i,i,i,i,i,i,i,i),new C.y("Rule: "+k.d,i,L.a90,i,i,i,i,i,i,i,i,i),new C.y("Fix: "+k.e,i,B.fel,i,i,i,i,i,i,i,i,i)],w))}h.push(C.p(i,C.x(q,D.E,i,D.e,D.j,0,D.p),D.f,i,i,new C.o(p,i,new C.bJ(n,n,n,n),new C.bk(o,o,o,o),i,i,D.n),i,i,i,D.cu,D.y_,i,i,i))}for(v=d.b,u=v.length,t=0;t<v.length;v.length===u||(0,C.M)(v),++t){j=v[t]
r=D.c.j(0.05)
q=new C.aQ(12,12)
p=j.a
o=p.c
m=j.b===o
n=new C.ay(m?D.bo:D.cs,1,D.r,-1)
m=m?"\u2705":"\u274c"
h.push(C.p(i,C.x(C.a([new C.y(m+" "+p.a,i,D.lH,i,i,i,i,i,i,i,i,i),new C.y("Correct answer: "+p.b[o],i,D.t_,i,i,i,i,i,i,i,i,i),new C.y(p.d,i,L.a90,i,i,i,i,i,i,i,i,i)],w),D.E,i,D.e,D.j,0,D.p),D.f,i,i,new C.o(r,i,new C.bJ(n,n,n,n),new C.bk(q,q,q,q),i,i,D.n),i,i,i,D.cu,D.y_,i,i,i))}h.push(D.au)
h.push(C.bG(D.pt,new A.f3V(this),i))
return h}}
A.a4N.prototype={
hE(d){var w,v=this
if(v.c)return
v.c=!0
w=$.aV
w.toString
if(D.a.q(C.vj(C.b_(w).a,null),"Test"))v.d=C.dq(v.b,new A.bQn(v))
else v.aZm()},
aZm(){$.eR.H_(new A.bQm(this))},
bR(d){var w
this.c=!1
w=this.d
if(w!=null)w.a4(0)
this.d=null}}
var z=a.updateTypes(["~()","R(nq)","n(n,fG)","R(m8)","R(a4S)","r(r)","~(fk)","R(ju)","R(os)","R(Xu)","ai<lN>(L)","~(H)","R(fG)","R(a9A)","R(a3Q)","R(Me)","R(oh)","R(OI)","R(HQ)","H(m8,m8)","aA<~>()","r(L,L)","R(r)","R(pN)","n(nq)","DF(Y)","~(m8)","~(x6,at,L)","r(L,L,L)","r(H)","IE(Y)","R(LK)","R(aaJ)","R(wd)","R(A9)","~(t,at)","H(xa,xa)","R(z1)","O0(Y)","r(hk)","R(r2)","R(EW)","R(yX)","r(L)","R(SH)","Fz(n)","wd(wd,wd)","~(H,r,r,n,u)","~(H,ai<r>)","L(lx)","pN()","H(H,m8)","R(vW)","oh(L)","fJ(r,r,r,r,H,L,L)","~(H{keepTour:R})","~(r,r,r,r)","H(A9)","H(A9,A9)","v(rG)","v(n,ai<rG>)","n(m8)","v(xa)","r(ai<r>,H)","Xi()","~(r,L,L,L,~(x6,at,L){px:L})","Ck()","+(r,r)(H)","VR(Y)","ai<+(r,r)>()","m8?(n)","ai<fJ>(L)","a6I(Y)","~(r,r{note:n?})","m8?(r,r)","R(r,r)","r?(r,r)","L(r)","ai<r>(r,r[H])","~(m8,L,L,L,L,L{note:n?})","+(L,L,L,n,n)(OI,H)","~(aD?)","ai<lN>()","ai<lN>(ai<lN>)","L(oh)","~(r,r,r,L,L)","~(r,r,r,L,H)","~(r,r,r,r{poster:H})","r(L,L[L])","~(~(fk),r,r)","~(r,r,L,L,u)","r(H,H)","~(r,r,H{alongX:R})","~(ai<r>,u)","~(ai<r>)","~(ai<r>{col:u})","~(H,r,u{h:L,w:L})","hk(H)","~(H,ai<r>,u,L,n)","~(H,n,r,r,r,R)","R(WP)","L(Ap)","L(m8)","ai<r>(ai<r>)","~(n,ai<r>{r:L})","~(n,r,r)","~(nq,r,n)","~(n,r,r,H)","n(ju)","R(H)","H(Ap,Ap)","Fs(n)","H(os)","~(H,r,r{col:u,round:R})","cW()","z1()","n(Me)","~(n,Jp,n,n,n)","H(Fz,Fs)","aA<Ml?>()","R(xa)","a0K(Y)","~({done:R})"])
A.bYG.prototype={
$1(d){var w=this.a
w=w===0?d:A.vp(d,w)
return w.aa(0,this.b)},
$S:z+5}
A.bYH.prototype={
$1(d){var w=this.a
return w===0?d:A.vp(d,w)},
$S:z+5}
A.bYF.prototype={
$4(b5,b6,b7,b8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=this
for(w=b4.b,v=b7.a,u=b7.b,t=b7.c,s=b6.a,r=b6.b,q=b6.c,p=b8.a,o=b8.b,n=b8.c,m=1/w,l=v*m,k=u*m,j=t*m,i=p*m,h=o*m,m=n*m,g=b4.a,f=g.a,e=b4.c,d=x.o,a0=b4.d,a1=b4.e,a2=b4.f,a3=0;a3<w;++a3)for(a4=a3/w,a5=s+v*a4,a6=r+u*a4,a4=q+t*a4,a7=0;a7<w;++a7){a8=a7/w
a9=a5+p*a8
b0=a6+o*a8
a8=a4+n*a8
b1=a9+l
b2=b0+k
b3=a8+j
f.push(new A.lN(C.a([e.$1(new A.r(a9,b0,a8)),e.$1(new A.r(b1,b2,b3)),e.$1(new A.r(b1+i,b2+h,b3+m)),e.$1(new A.r(a9+i,b0+h,a8+m))],d),a0.$1(b5),a1,g.b,a2,g.d,!1,g.c,g.e,g.f,g.w))}},
$S:z+56}
A.bYI.prototype={
$1(d){var w=d*2*3.141592653589793/this.b
return this.a.aI(0,Math.cos(w)).aa(0,this.c.aI(0,Math.sin(w)))},
$S:z+29}
A.bYE.prototype={
$2(d,e){var w=3.141592653589793*d/this.a,v=6.283185307179586*e/this.b
return new A.r(Math.sin(w)*Math.cos(v),Math.cos(w),Math.sin(w)*Math.sin(v))},
$S:z+91}
A.bYJ.prototype={
$1(d){var w=d*2*3.141592653589793/this.b
return this.a.aI(0,Math.cos(w)).aa(0,this.c.aI(0,Math.sin(w)))},
$S:z+29}
A.fRI.prototype={
$1(d){var w=d.b,v=this.a,u=d.c,t=this.b
return new A.r(d.a,w*v-u*t,w*t+u*v)},
$S:z+5}
A.fRG.prototype={
$1(d){var w=this.a
return w===0?d:A.vp(d,w)},
$S:z+5}
A.fRH.prototype={
$1(d){var w=this,v=w.b===0?d:w.c.$1(d)
return J.fST(w.a.$1(v),w.d)},
$S:z+5}
A.fRF.prototype={
$1(d){var w=this.b===0?d:this.c.$1(d)
return this.a.$1(w)},
$S:z+5}
A.fRu.prototype={
$4(d,e,f,g){var w=-d
return 0.5*(2*e+(w+f)*this.a+(2*d-5*e+4*f-g)*this.b+(w+3*e-3*f+g)*this.c)},
$S:285}
A.bHB.prototype={
$1(d){var w=d.a,v=J.a4(w),u=C.jM(v.h(w,"ngmy_swipe_x3"))
$.aiR=u===!0
w=C.jM(v.h(w,"ngmy_swipe_y3"))
$.aiS=w!==!1},
$S:295}
A.bHC.prototype={
$1(d){},
$S:28}
A.bHD.prototype={
$1(d){d.aq("Bool","ngmy_swipe_x3",$.aiR)
d.aq("Bool","ngmy_swipe_y3",$.aiS)},
$S:295}
A.bHE.prototype={
$1(d){},
$S:28}
A.bHG.prototype={
$1(d){var w=this,v=-d.c,u=d.b,t=w.a,s=w.b,r=v*t-u*s,q=d.a,p=w.c,o=w.d
return new A.r(q*p-r*o,u*t+v*s,q*o+r*p)},
$S:z+5}
A.bHF.prototype={
$1(d){var w=this,v=w.a
return v.d.aa(0,w.b.$1(new A.r(w.c*d,w.d*d,d-v.c)))},
$S:z+43}
A.bHA.prototype={
$1(d){var w=this,v=-d.c,u=d.b,t=w.a,s=w.b,r=v*t-u*s,q=d.a,p=w.c,o=w.d
return new A.r(q*p-r*o,u*t+v*s,q*o+r*p)},
$S:z+5}
A.bHz.prototype={
$1(d){var w=this,v=w.a
return v.d.aa(0,w.b.$1(new A.r(w.c*d,w.d*d,d-v.c)))},
$S:z+43}
A.cq_.prototype={
$1(d){var w=this,v=d.a,u=w.a,t=d.c,s=w.b,r=-v*s+t*u,q=d.b,p=w.c,o=w.d
return new A.r(v*u+t*s,q*p-r*o,-(q*o+r*p))},
$S:z+5}
A.cq0.prototype={
$1(d){var w=this.a.c,v=this.b.$1(d.aF(0,w.d))
return new A.r(v.a,v.b,v.c+w.c)},
$S:z+5}
A.cpT.prototype={
$1(d){return d.c>=1},
$S:z+22}
A.cpU.prototype={
$1(d){var w,v,u,t,s,r,q,p,o=this,n=!o.c||o.d>=o.e[0],m=o.f,l=o.b
if(n)A.hSG(d,m,o.r,l.gMw(0))
else{n=$.htV()
C.HA(m)
w=n.a
v=w.get(m)
u=D.k.bm(l.gMw(0)*5)
t=v==null
if(t)s=o.a.b<10
else s=v.a!==u&&o.a.a<3
if(s){$.W()
r=new C.pH()
m.c.$3(C.yY(r,null),new C.at(m.d,m.e),l.gMw(0))
if(!t)v.b.t()
n.n(0,m,new A.czw(u,r.nP()))
n=o.a
if(t)++n.b
else ++n.a}C.HA(m)
n=w.get(m)
q=n==null?null:n.b
if(q!=null){n=m.d
m=m.e
p=A.h03(o.r,n,m)
if(p!=null){l=d.a
J.bq(l.save())
d.av(0,p.a)
l.clipRect(C.bQ(new C.a5(0,0,n,0+m)),$.nc()[1],!0)
m=q.b
m===$&&C.c()
m=m.a
m===$&&C.c()
m=m.a
m.toString
l.drawPicture(m)
l.restore()}}else{$.W()
n=C.K()
n.r=D.cp.gp(0)
d.aJ(o.w,n)}}},
$S:698}
A.cpS.prototype={
$2(d,e){var w=this.a
return A.o_(A.o_(w[0],w[1],d),A.o_(w[3],w[2],d),e)},
$S:z+21}
A.cpV.prototype={
$1(d){return d.c<1},
$S:z+22}
A.cpW.prototype={
$1(d){return A.hSH(d,this.b,this.c,8,6,this.a.gMw(0))},
$S:698}
A.cpX.prototype={
$2(d,e){return D.k.aL(e,d)},
$S:1763}
A.cpZ.prototype={
$1(d){var w,v=d.b
if(v!==0){w=this.a.h(0,v)
w.toString
v=this.b.h(0,v)
v.toString
v=w/v}else v=d.r
return v},
$S:z+101}
A.cpY.prototype={
$2(d,e){var w,v,u=D.o.aL(d.a,e.a)
if(u!==0)return u
w=this.a
v=J.B2(w.$1(e),w.$1(d))
return v!==0?v:D.o.aL(d.c,e.c)},
$S:z+110}
A.eWS.prototype={
$1(d){var w=this.a,v=w.r,u=d.a
w.r=d
w.a.d.a6p(D.k.E((u-v.a)/1e6,0,0.1))
w.f.sp(0,u/1e6)},
$S:9}
A.eWR.prototype={
$1(d){if(x.ej.b(d))this.a.a.d.aoI(1+d.gtl().b*0.0012)},
$S:270}
A.eWO.prototype={
$1(d){var w=this.a
w.w=1
w.x=d.c},
$S:235}
A.eWP.prototype={
$1(d){var w,v,u,t,s,r=d.w,q=this.a
if(r!==q.x){q.x=r
q.w=d.d}if(r>=2){r=d.d
w=q.w/r
q.w=r
if(isFinite(w)&&w>0)q.a.d.aoI(w)}else{r=q.a.d
q=d.a
v=$.aiR?-1:1
v=q.a*0.009*v
u=$.aiS?-1:1
r.ay=r.ax=null
v=r.a+=v
if(!r.Q){t=r.y
s=r.z
r.a=D.k.E(v,t-s,t+s)}r.b=D.k.E(r.b+-q.b*0.009*u,r.w,r.x)
r.aT()}},
$S:211}
A.eWQ.prototype={
$1(d){var w=this.a,v=w.a.f
return v==null?null:v.$1(w.e.cTN(d.b))},
$S:64}
A.eWM.prototype={
$1(d){return this.a.y=d.b},
$S:23}
A.eWN.prototype={
$0(){var w,v=this.a,u=v.a.as
u.toString
v=v.y
w=this.b.gY(0)
return u.$2(v,w==null?D.az:w)},
$S:0}
A.bRr.prototype={
$0(){var w=0,v=C.j(x.c),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j
var $async$$0=C.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return C.b($.r_().jI(0,q.a),$async$$0)
case 7:p=e
m=q.b
l=x.N
o=new A.Ml(m,C.U(l,x.J),C.U(l,x.bB),C.a([],x.dQ),C.U(l,x.gN))
w=8
return C.b(o.Pf(p),$async$$0)
case 8:$.fUo.n(0,m,o)
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
$.fUn.W(0,q.b)
w=r.pop()
break
case 6:case 1:return C.h(u,v)
case 2:return C.f(s.at(-1),v)}})
return C.i($async$$0,v)},
$S:z+119}
A.bRj.prototype={
$1(d){return D.a.q(d,"hips")},
$S:3}
A.bRg.prototype={
$2(d,e){var w,v=Math.floor(d),u=Math.floor(e),t=this.b,s=t.a,r=Math.min(s-1,D.k.bm((d-v)*s))
v=t.b
w=(Math.min(v-1,D.k.bm((e-u)*v))*s+r)*4
s=this.a
t=t.c
s.c=s.c+t[w]
s.b=s.b+t[w+1]
s.a=s.a+t[w+2]},
$S:245}
A.bRf.prototype={
$1(d){return D.k.V(D.k.E(d,0,1)*255)},
$S:257}
A.bRl.prototype={
$2(d,e){var w,v,u,t,s,r=x.S,q=C.U(r,r)
r=this.b
w=new Int32Array(r)
for(v=this.c.a,u=this.a,t=0;t<r;++t){s=t*3
w[t]=q.c4(0,(D.k.bm((v[s]-u.c)/d)*1024+D.k.bm((v[s+1]-u.b)/d))*1024+D.k.bm((v[s+2]-u.a)/d),new A.bRm(q))}e[0]=q.a
return w},
$S:1765}
A.bRm.prototype={
$0(){return this.a.a},
$S:98}
A.bRn.prototype={
$1(d){var w,v,u,t,s,r,q=C.aY(x.S)
for(w=this.a.e,v=w.length,u=0;u<v;u+=3){t=d[w[u]]
s=d[w[u+1]]
r=d[w[u+2]]
if(t===s||s===r||t===r)continue
q.M(0,A.h7M(t,s,r))}return q.a},
$S:1766}
A.bRk.prototype={
$2(d,e){var w,v,u,t=this.a,s=this.b.h(0,d)
s.toString
w=J.a4(e)
v=D.k.V(w.h(e,0)/w.h(e,3))
u=D.k.V(w.h(e,1)/w.h(e,3))
w=D.k.V(w.h(e,2)/w.h(e,3))
t.$flags&2&&C.aj(t)
t[s]=(v<<16|u<<8|w|4278190080)>>>0},
$S:1767}
A.bRh.prototype={
$0(){return new Float64Array(this.a*16)},
$S:700}
A.bRi.prototype={
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
if(n<0)D.ok.hi(k,j,j+16,h)
else A.h7N(k,n*16,h,0,k,j)
k=u.f
k===$&&C.c()
k=k[a1]
j=k.length
m=0
for(;m<k.length;k.length===j||(0,C.M)(k),++m)l.$1(k[m])},
$S:29}
A.bRq.prototype={
$1(d){var w,v,u
for(w=this.a.z,w=new C.hB(w,w.r,w.e);w.C();){v=w.d
u=v.toLowerCase()
if(C.cU(u,d,0))return v}return null},
$S:314}
A.bRo.prototype={
$1(d){return!D.a.q(d.toLowerCase(),"pose")},
$S:3}
A.bRp.prototype={
$0(){var w=this.a.z
return new C.cs(w,C.a6(w).k("cs<1>")).gI(0)},
$S:22}
A.bRs.prototype={
$1(d){var w=this,v=w.c,u=d*3,t=w.a,s=w.d,r=(v[u]-t.b)*s,q=v[u+1],p=w.b.ay,o=(v[u+2]-t.a)*s
t=w.f
u=w.r
return new A.r(r*t+o*u+w.w,(q-p)*s+w.e,-r*u+o*t+w.x)},
$S:z+29}
A.fq7.prototype={
$2(d,e){return D.k.V(d+(D.k.E(e,0,255)-d)*0.8)},
$S:1769}
A.bG5.prototype={
$1(d){return d.d+this.a.f*d.e},
$S:z+49}
A.bG4.prototype={
$1(d){return d.a===J.q(this.a,"template")},
$S:z+40}
A.fIM.prototype={
$6$lines$w(d,e,f,g,h,i){var w=null,v=C.fX("\u2026",w,h,w,C.cZ(w,w,w,w,w,w,w,w,w,C.l(w,w,f,w,w,w,w,w,w,w,w,e,w,w,i,w,1.1,!0,w,w,w,w,w,w,w,w),d),D.a5,D.c8,w,D.dQ,D.c6)
v.t0(g)
return v},
$4(d,e,f,g){return this.$6$lines$w(d,e,f,g,2,D.u)},
$5$w(d,e,f,g,h){return this.$6$lines$w(d,e,f,g,2,h)},
$S:1770}
A.frx.prototype={
$1(d){var w=this.a
return A.vp(d,w.c).aa(0,new A.r(w.a,0,w.b))},
$S:z+5}
A.fry.prototype={
$6$px(d,e,f,g,h,i){var w=new A.frz(e,d),v=-f/2,u=g/2,t=f/2,s=-g/2
this.a.push(new A.fJ(C.a([w.$2(v,u),w.$2(t,u),w.$2(t,s),w.$2(v,s)],x.o),0,h,i,i*g/f,30,this.b,0,!1))},
$5(d,e,f,g,h){return this.$6$px(d,e,f,g,h,260)},
$S:z+65}
A.frz.prototype={
$2(d,e){return A.vp(new A.r(d,e,0),this.a).aa(0,this.b)},
$S:z+21}
A.frq.prototype={
$3(d,e,f){return A.bzT(d,e,f,0)},
$S:24}
A.frr.prototype={
$3(d,e,f){return A.bzT(d,e,f,3)},
$S:24}
A.frs.prototype={
$3(d,e,f){return A.bzT(d,e,f,8)},
$S:24}
A.frt.prototype={
$3(d,e,f){return A.bzT(d,e,f,9+this.a)},
$S:24}
A.fru.prototype={
$3(d,e,f){return A.bzT(d,e,f,12+this.a)},
$S:24}
A.frv.prototype={
$3(d,e,f){return A.hqf(d,e,f,this.a,this.b)},
$S:24}
A.frw.prototype={
$3(d,e,f){return A.hqf(d,e,f,this.a,this.b)},
$S:24}
A.fdU.prototype={
$4(d,e,f,g){var w=-d,v=this.a
return 0.5*(2*e+(w+f)*v+(2*d-5*e+4*f-g)*v*v+(w+3*e-3*f+g)*v*v*v)},
$S:285}
A.fhg.prototype={
$1(d){var w=this.a,v=J.a4(w)
return v.h(w,D.o.E(d,0,v.gL(w)-1))},
$S:z+67}
A.fqd.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n=A.hm_(this.a),m=x.n,l=C.a([],m)
for(w=J.a4(n),v=0;v<w.gL(n)-1;v=u){u=v+1
t=w.h(n,u).a
s=w.h(n,v).a
l.push(Math.pow(Math.max(new A.r(t.a-s.a,t.b-s.b,t.c-s.c).guI(),250),0.75))}r=D.d.f9(l,new A.fqc())
q=C.a([0],m)
for(m=l.length,p=0;p<l.length;l.length===m||(0,C.M)(l),++p){o=l[p]
q.push(D.d.gal(q)+30*o/r)}return q},
$S:1772}
A.fqc.prototype={
$2(d,e){return d+e},
$S:78}
A.fqa.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8=this.a,a9=B.duc.h(0,a8.a)
if(a9==null){w=C.a([],x.t)
v=a8.w.length
u=v===0
t=0
for(;;){if(!(t<(u?1:v)))break
w.push(t);++t}a9=new C.z(w,0)}s=Math.max(Math.max(a8.gaoq(),a8.gbcV()),a8.gGE()*1.3)
w=a8.r
r=new A.r(a8.ga3V(0),w+a8.gGE()/2,a8.ga3W())
q=w+a8.gGE()
v=s*0.55
p=C.a([new C.z(new A.r(a8.ga3V(0)+v,q+s*0.5,a8.ga3W()+s*1.15),r)],x.dt)
for(u=a9.a,o=x.o,n=a8.w,m=a8.e,l=a8.f,k=a9.b,v=q+v,j=null,i=0;i<u.length;++i,j=a2){h=n[u[i]]
g=h.e
f=m*g
e=l*g
d=new A.r(h.a,w+h.d+e/2,h.b)
g=h.c
a0=Math.sin(g)
a1=Math.cos(g)
a2=new A.r(a0,0,a1)
a3=new A.fqb(d,a2,f*1.5,new A.r(Math.cos(g),0,-Math.sin(g)),f,e)
a4=D.o.F(k+i,3)
A:{if(0===a4){g=C.a([a3.$3(1.8,0,1.1),a3.$3(1,-0.22,-0.35),a3.$3(0.9,0.3,-0.2)],o)
break A}if(1===a4){g=C.a([a3.$3(0.9,1.5,-0.25),a3.$3(1.05,0,0.05),a3.$3(0.85,-1.3,0.15)],o)
break A}g=C.a([a3.$3(1.3,0.2,-0.45),a3.$3(1.1,0,0.45),a3.$3(1.7,-0.3,1.3)],o)
break A}if(j!=null&&j.a*a0+j.c*a1<0.3){a0=D.d.gal(p).a
a1=D.d.gI(g)
p.push(new C.z(new A.r((a0.a+a1.a)*0.5+j.c*s*0.5,v,(a0.c+a1.c)*0.5-j.a*s*0.5),r))}for(a5=0;a5<3;++a5)p.push(new C.z(g[a5],d))}a6=new A.r(a8.ga3V(0)-s*0.7,q+s*0.6,a8.ga3W()-s)
if(j!=null){a7=D.d.gal(p).a.aa(0,a6).aI(0,0.5)
p.push(new C.z(new A.r(a7.a+j.c*s*0.5,v,a7.c-j.a*s*0.5),r))}p.push(new C.z(a6,r))
return p},
$S:z+69}
A.fqb.prototype={
$3(d,e,f){var w=this
return w.a.aa(0,w.b.aI(0,w.c*d)).aa(0,w.d.aI(0,w.e*e)).aa(0,new A.r(0,w.f*f,0))},
$S:z+28}
A.fri.prototype={
$1(d){var w=this.b,v=w*d.b,u=d.c,t=this.c
return this.a.aa(0,new A.r(Math.sin(v)*u*t.ged(0)+w*d.e*t.gaoq(),d.d*t.gGE(),Math.cos(v)*u*t.ged(0)))},
$S:z+39}
A.frj.prototype={
$1(d){var w=this.c
return this.a.aa(0,new A.r(this.b*d.f*w.gaoq(),d.r*w.gGE(),0))},
$S:z+39}
A.frk.prototype={
$1(d){var w=this.a
return w[D.o.E(d,0,w.length-1)]},
$S:z+97}
A.c1G.prototype={
$1(d){return d.a===this.a.d.a},
$S:z+40}
A.c1E.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new A.c1D())},
$S:30}
A.c1D.prototype={
$0(){},
$S:0}
A.c1r.prototype={
$0(){var w=this.a
w.f=A.h0K(w.gzo(),w.d)
w.aaW()},
$S:0}
A.c1x.prototype={
$0(){return this.a.x=this.b},
$S:0}
A.c1F.prototype={
$0(){var w=this.a
w.x=0
w.y=!1
w.z=""},
$S:0}
A.c1u.prototype={
$0(){var w=this.a
w.x=-1
w.y=!1
w.z=this.b?"That was the 30 second drone shot. Press it again any time, or change the board and film it again.":""},
$S:0}
A.c1t.prototype={
$0(){var w=this.a
return w.f=A.h0K(w.gzo(),w.d)},
$S:0}
A.c11.prototype={
$0(){},
$S:0}
A.c1s.prototype={
$0(){return this.a.z="That picture could not be opened."},
$S:0}
A.c1w.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=C.aH(d,k,x.w).w,i=x.p,h=C.a([],i)
for(w=this.a,v=w.d,u=0;u<12;++u){t=B.a2w[u]
s=t.a
r=v.a===s
q=r?D.d7:D.cp
p=new C.aQ(16,16)
o=r?F.fu:D.bz
n=new C.ay(o,r?2:1,D.r,-1)
o=C.a([new C.y(t.b,k,D.nB,k,k,k,k,k,k,k,k,k),D.b0],i)
r=t.w.length
m=r===0
if((m?1:r)>1){l=new C.aQ(10,10)
o.push(C.p(k,new C.y(""+(m?1:r)+" boards",k,Y.aRs,k,k,k,k,k,k,k,k,k),D.f,k,k,new C.o(D.dX,k,k,new C.bk(l,l,l,l),k,k,D.n),k,k,k,k,D.yd,k,k,k))}if(v.a===s)o.push(B.egd)
h.push(C.aB(k,C.p(k,C.x(C.a([new C.cb(D.aM,D.e,D.j,D.m,k,D.p,k,0,o,k),D.am,new C.y(t.c,k,D.iY,k,k,k,k,D.a1,k,2,k,k),D.cO,new C.bA(1,D.bd,new C.y(t.d,k,B.fbA,k,k,k,k,D.TV,k,k,k,k),k)],i),D.E,k,D.e,D.j,0,D.p),D.f,k,k,new C.o(q,k,new C.bJ(n,n,n,n),new C.bk(p,p,p,p),k,k,D.n),k,k,k,k,B.bv0,k,k,k),D.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new A.c1v(w,d,t),k,k,k,k,k,k,!1,D.a4))}return C.bm(!0,new C.D(B.bwm,C.x(C.a([B.fMA,D.au,B.fFE,D.ad,new C.cT(new C.aX(0,1/0,0,j.a.b*0.66),C.kG(1.05,h,2,10,10,k,k,!0),k)],i),D.E,k,D.e,D.P,0,D.p),k),!0,!1,D.af,!0,!0)},
$S:25}
A.c1v.prototype={
$0(){C.a3(this.b,!1).N(null)
this.a.ctj(this.c.a)},
$S:0}
A.c1q.prototype={
$0(){var w=this,v=w.b.d.b[w.a.a]
w.c.saU(0,v.b)
w.d.saU(0,v.c)
w.e.saU(0,v.d)},
$S:0}
A.c1p.prototype={
$1(d){var w=this
return new C.dY(new A.c1m(w.a,w.b,w.c,w.d,w.e,w.f),null)},
$S:19}
A.c1m.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=this,o=null,n=p.b,m=p.a,l=n.d.b[m.a],k=new A.c1n(m,n),j=new A.c1o(e),i=C.aH(d,o,x.w).w,h=x.p,g=C.a([B.fsR,D.au,C.d(l.a?"Now it shows the NGMY logo, words and ads. Change anything and it becomes yours.":"This sign is your own.",o,o,o,o,o,o,H.v2,o,o,o)],h),f=n.gzo().w.length
if((f===0?1:f)>1){f=C.a([],h)
w=p.c
v=0
for(;;){u=n.gzo().w.length
if(!(v<(u===0?1:u)))break
u=m.a===v
t=u?D.d7:D.cp
s=new C.aQ(18,18)
r=new C.ay(u?F.fu:D.aZ,2,D.r,-1)
q=v+1
f.push(C.aB(o,C.p(o,new C.y("Sign "+q,o,D.lH,o,o,o,o,o,o,o,o,o),D.f,o,o,new C.o(t,o,new C.bJ(r,r,r,r),new C.bk(s,s,s,s),o,o,D.n),o,o,o,o,D.ls,o,o,o),D.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new A.c16(m,v,w,e),o,o,o,o,o,o,!1,D.a4))
v=q}D.d.v(g,C.a([D.R,B.fMF,D.am,C.bX(D.bB,f,D.bs,8,8)],h))}g.push(D.ad)
g.push(k.$3("Big words",p.d,new A.c17(l)))
g.push(k.$3("Smaller words",p.e,new A.c18(l)))
g.push(k.$3("Bottom line (web address)",p.f,new A.c19(l)))
f=l.f!=null
w=f?"Your logo is on (change)":"Put your own logo (default: NGMY logo)"
g.push(j.$4(w,f,new A.c1a(m,n),new A.c1b(m,n,l)))
f=l.r!=null
w=f?"Your picture is on (change)":"Put your own picture"
g.push(j.$4(w,f,new A.c1c(m,n),new A.c1d(m,n,l)))
g.push(D.au)
g.push(B.fGL)
g.push(D.am)
f=C.a([],h)
for(w=x.O,v=0;v<6;++v){u=B.a4e[v]
u=C.a([u.b,u.c],w)
t=new C.aQ(10,10)
r=new C.ay(l.e===v&&!l.a?F.fu:D.aZ,2,D.r,-1)
s=B.a4e[v]
f.push(C.aB(o,C.p(o,new C.cn(D.A,o,o,new C.y(s.a,o,new C.F(!0,s.d,o,o,o,o,11,D.H,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),o,o,o,o,o,o,o,o,o),o),D.f,o,o,new C.o(o,o,new C.bJ(r,r,r,r),new C.bk(t,t,t,t),o,new C.a9(D.a3,D.a8,D.x,u,o,o),D.n),o,o,o,o,D.hz,o,o,74),D.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new A.c1e(m,n,l,v,e),o,o,o,o,o,o,!1,D.a4))}g.push(C.bX(D.bB,f,D.bs,8,8))
g.push(D.aA)
m=n.gzo().w.length
g.push(C.B(C.a([C.E(C.es(B.bTf,C.d((m===0?1:m)>1?"All signs back to the NGMY default":"Back to the NGMY default",o,o,o,o,o,o,B.fny,o,o,o),new A.c1f(n,l,p.c,e),o),1),D.as,C.bG(D.wP,new A.c1g(d),o)],h),D.m,o,D.e,D.j,0,o,o))
return new C.D(new C.Q(16,16,16,i.f.d+16),C.ce(C.x(g,D.E,o,D.e,D.P,0,D.p),D.t,o,D.y,o,o,o,o,D.ag),o)},
$S:102}
A.c1n.prototype={
$3(d,e,f){var w=null
return new C.D(D.d3,C.aM(w,D.V,!1,w,!0,D.t,w,C.aO(),e,w,w,w,w,w,2,C.bs(w,new C.b5(4,C.m(12),D.a0),w,w,w,w,w,w,!0,w,w,w,w,w,w,D.cp,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,D.Uc,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w),D.y,!0,w,!0,w,!1,w,D.aj,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,new A.c1h(this.a,this.b,f),w,w,w,!1,w,w,!1,w,!0,w,D.a9,w,w,w,w,w,w,w,w,w,w,w,D.dd,!0,D.a5,w,D.ao,w,w,w,w),w)},
$S:1773}
A.c1h.prototype={
$1(d){this.c.$1(d)
this.b.Zc(this.a.a)},
$S:2}
A.c1o.prototype={
$4(d,e,f,g){var w=null,v=this.a,u=e?D.eb:D.u4
u=C.a([C.E(C.es(C.X(u,e?D.bo:D.ae,w,w,w,w),C.d(d,w,w,w,w,w,w,D.dd,w,w,w),new A.c1k(f,v),w),1)],x.p)
if(e)u.push(C.aI(w,w,w,w,D.rp,w,w,w,new A.c1l(g,v),w,w,w,w,w,w))
return new C.D(D.cu,C.B(u,D.m,w,D.e,D.j,0,w,w),w)},
$S:1774}
A.c1k.prototype={
$0(){var w=0,v=C.j(x.H),u=this
var $async$$0=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:u.a.$0()
w=2
return C.b(C.bN(D.ne,null,x.H),$async$$0)
case 2:u.b.$1(new A.c1j())
return C.h(null,v)}})
return C.i($async$$0,v)},
$S:1}
A.c1j.prototype={
$0(){},
$S:0}
A.c1l.prototype={
$0(){this.a.$0()
this.b.$1(new A.c1i())},
$S:0}
A.c1i.prototype={
$0(){},
$S:0}
A.c16.prototype={
$0(){var w=this
w.a.a=w.b
w.c.$0()
w.d.$1(new A.c15())},
$S:0}
A.c15.prototype={
$0(){},
$S:0}
A.c17.prototype={
$1(d){return this.a.b=d},
$S:2}
A.c18.prototype={
$1(d){return this.a.c=d},
$S:2}
A.c19.prototype={
$1(d){return this.a.d=d},
$S:2}
A.c1a.prototype={
$0(){return this.b.IG(this.a.a,!0)},
$S:0}
A.c1b.prototype={
$0(){var w=this.c
w.w=w.f=null
this.b.Zc(this.a.a)},
$S:0}
A.c1c.prototype={
$0(){return this.b.IG(this.a.a,!1)},
$S:0}
A.c1d.prototype={
$0(){var w=this.c
w.x=w.r=null
this.b.Zc(this.a.a)},
$S:0}
A.c1e.prototype={
$0(){var w=this
w.c.e=w.d
w.b.Zc(w.a.a)
w.e.$1(new A.c14())},
$S:0}
A.c14.prototype={
$0(){},
$S:0}
A.c1f.prototype={
$0(){var w=this,v=w.a,u=v.gzo().w.length
if((u===0?1:u)>1)v.d.cVK()
else w.b.bih()
w.c.$0()
v.m(new A.c12())
v.IH()
w.d.$1(new A.c13())},
$S:0}
A.c12.prototype={
$0(){},
$S:0}
A.c13.prototype={
$0(){},
$S:0}
A.c1g.prototype={
$0(){C.a3(this.a,!1).N(null)
return null},
$S:0}
A.c1A.prototype={
$0(){return C.a3(this.a,!1).iW()},
$S:0}
A.c1B.prototype={
$0(){var w=this.a
return w.m(new A.c1z(w))},
$S:0}
A.c1z.prototype={
$0(){return this.a.y=!1},
$S:0}
A.c1C.prototype={
$0(){var w=this.a
return w.m(new A.c1y(w))},
$S:0}
A.c1y.prototype={
$0(){return this.a.y=!0},
$S:0}
A.ftO.prototype={
$1(d){return d.a===this.a},
$S:z+37}
A.ftP.prototype={
$0(){return D.d.gI(B.Qy)},
$S:z+115}
A.bKi.prototype={
$1(d){return d.d.q(0,this.a.b)},
$S:z+37}
A.bKk.prototype={
$2(d,e){var w=this.a,v=this.b
return D.k.aL(w.a9V(d.c,d.d,new C.z(v.c,v.d)),w.a9V(e.c,e.d,new C.z(v.c,v.d)))},
$S:z+19}
A.bKl.prototype={
$1(d){return d.f==null},
$S:z+120}
A.bKh.prototype={
$2(d,e){var w,v=d.w
if(v!==e.w)return v?-1:1
v=this.a
w=this.b
return D.k.aL(v.aYJ(w,A.yC(d.c)),v.aYJ(w,A.yC(e.c)))},
$S:z+36}
A.bKm.prototype={
$2(d,e){var w=D.o.aL(e.b,d.b)
return w!==0?w:D.o.aL(e.c,d.c)},
$S:1775}
A.bKj.prototype={
$2(d,e){var w,v,u=d.w
if(u!==e.w)return u?-1:1
u=this.a
w=this.b
v=this.c
return D.k.aL(u.a9V(w,v,A.yC(d.c)),u.a9V(w,v,A.yC(e.c)))},
$S:z+36}
A.bIn.prototype={
$2(d,e){return(d^D.k.V(e.c)*31+D.k.V(e.d))>>>0},
$S:z+51}
A.c_h.prototype={
$2(d,e){var w,v,u,t,s=null,r=this.a,q=r.c,p=q.d>0
if(p)w=0
else{w=q.c
w=w>0?(1-w/180)*0.5:q.a}v=r.e
if(p)p="\ud83d\udc1b"
else p=q.c>0?"\ud83d\ude34":"\u26a1"
u=x.p
w=C.a([A.fUY(v,p,w)],u)
p=q.e
if(p<0.3||q.f){t=q.f
if(t)p=0.2
t=t?"\ud83e\udd12":"\ud83d\udca7"
D.d.v(w,C.a([new C.a8(s,v/4,s,s),A.fUY(v*0.7,t,p)],u))}if(r.d)D.d.v(w,C.a([new C.a8(s,v/3,s,s),A.fUY(v,"\u26fd",q.b)],u))
return C.x(w,D.m,s,D.e,D.P,0,D.p)},
$S:428}
A.fx6.prototype={
$4(d,e,f,g){var w=f+g/100
return new C.cx([d+100*Math.cos(w),e+100*Math.sin(w),-Math.sin(w),Math.cos(w)])},
$S:1776}
A.fb7.prototype={
$1(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this.b,h=A.KX(i,a0).a,g=h[0],f=h[1],e=h[2],d=h[3]
for(h=this.a,w=h.a,v=h.b,u=h.c,h=h.d,t=0;t<5;++t){s=B.cUk[t]
for(r=d*s,q=e*s,p=0;p<3;++p){o=B.d7o[p]
n=i.a==="bus"
m=n?120:95.94999999999999
l=n?33.54:31.45
k=g+q*m-d*o*l
m=n?120:95.94999999999999
n=n?33.54:31.45
j=f+r*m+e*o*n
if(k>w&&k<v&&j>u&&j<h)return!0}}return!1},
$S:127}
A.bIp.prototype={
$1(d){return d<=0?0:Math.sqrt(220*d)},
$S:5}
A.fRD.prototype={
$7(d,e,f,g,h,i,j){return new A.fJ(C.a([d,e,f,g],x.o),0,new A.fRE(h),i,j,6,2,0,!1)},
$S:z+54}
A.fRE.prototype={
$3(d,e,f){return A.nb(d,e,f,this.a+D.k.bm(f/7))},
$S:24}
A.fRB.prototype={
$3(d,e,f){var w=this.a,v=w.b
w=w.a
return A.vp(new A.r(d,e,f),this.b).aa(0,new A.r(v,0,w))},
$S:z+28}
A.fRC.prototype={
$2(d,e){var w=this
return A.vp(new A.r(d,e,0),w.a).aa(0,new A.r(w.b,w.c,w.d))},
$S:z+21}
A.ftm.prototype={
$8(d,e,f,g,h,i,j,k){var w=-g,v=new A.ftn(d+f*h+w*i,f,w,e+g*h+f*i,g,f),u=-j/2,t=-k/2,s=j/2,r=k/2
this.a.Gs(v.$2(u,t),v.$2(s,t),v.$2(s,r),v.$2(u,r),D.bO,B.e8)},
$S:1777}
A.ftn.prototype={
$2(d,e){var w=this
return new A.r(w.a+w.b*d+w.c*e,0.95,w.d+w.e*d+w.f*e)},
$S:z+21}
A.cxf.prototype={
$1(d){return d.d===this.a},
$S:z+34}
A.cxg.prototype={
$1(d){return d.r},
$S:z+57}
A.cxe.prototype={
$2(d,e){return D.k.aL(d.x,e.x)},
$S:z+58}
A.bIb.prototype={
$1(d){var w
if(d.r<0)w=d.e||d.c<60
else w=!1
return w},
$S:z+17}
A.bIi.prototype={
$3(d,e,f){var w=this.a
return A.nb(d,e,f,w.b.a+w.f+D.k.bm(f/7))},
$S:24}
A.bIj.prototype={
$3(d,e,f){var w=this.a
return A.nb(d,e,f,w.b.a+w.f+3+D.k.bm(f/7))},
$S:24}
A.bIk.prototype={
$3(d,e,f){var w=this.a
return A.nb(d,e,f,w.b.a+w.f+7+D.k.bm(f/7))},
$S:24}
A.bIl.prototype={
$3(d,e,f){return A.nb(d,e,f,this.a.b.a+2+D.k.bm(f/7))},
$S:24}
A.bIc.prototype={
$3(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=this.a,i=j.z
j=j.Q
w=e.a
v=e.b
u=new C.a5(0,0,0+w,0+v)
t=C.bz(u,D.iA)
s=$.W()
r=C.K()
r.r=D.dJ.gp(0)
d.aD(t,r)
r=C.bz(u.cs(-6),D.kK)
t=C.K()
t.b=D.ac
t.c=5
t.r=D.bb.gp(0)
d.aD(r,t)
t=D.k.bm(f*3)
q=new C.aJ(s.r,D.ak,k,k,C.a([],x.g))
p=w*0.2
o=v*0.5
n=v*0.3
s=p+n
r=n*0.7
m=p-n
if(j){q.D(new C.b1(p,o-n))
j=o+r
q.D(new C.ap(s,j))
q.D(new C.ap(m,j))
q.D(new C.bv())}else{q.D(new C.b1(p,o+n))
j=o-r
q.D(new C.ap(s,j))
q.D(new C.ap(m,j))
q.D(new C.bv())}j=C.K()
j.r=((t&1)===0?D.bb:D.f5).gp(0)
d.aJ(q,j)
j=i===1?"L":""+i
l=C.fX(k,k,k,k,C.cZ(k,k,k,k,k,k,k,k,k,C.l(k,k,D.bI,k,k,k,k,k,k,k,k,v*0.78,k,k,D.u,k,k,!0,k,k,k,k,k,k,k,k),j),D.a5,D.c8,k,D.dQ,D.c6)
l.eT()
j=l.b
i=j.c
j=j.a.c
l.a6(d,new C.t(w*0.62-i/2,v/2-j.gbd(j)/2))
return k},
$S:24}
A.bId.prototype={
$3(d,e,f){return A.nb(d,e,f,1+D.k.bm(f/7))},
$S:24}
A.bIe.prototype={
$3(d,e,f){return A.nb(d,e,f,4+D.k.bm(f/7))},
$S:24}
A.bIf.prototype={
$2(d,e){var w=this.a,v=C.S(d),u=new C.cQ(new C.Z(d,new A.bIg(w),v.k("Z<1>")),new A.bIh(w),v.k("cQ<1,H>")).cM(0,0,D.Az)
if(u===2)w="works but is NOT wired safely: open it and check every wire"
else w=u===1?"started: finish the wiring":e
return w},
$S:1778}
A.bIg.prototype={
$1(d){return!this.a.d[d]},
$S:34}
A.bIh.prototype={
$1(d){return this.a.e[d]},
$S:75}
A.bJ_.prototype={
$1(d){return!d.f},
$S:z+17}
A.bIX.prototype={
$1(d){return d.b===this.a.a.a},
$S:z+18}
A.bIY.prototype={
$1(d){return d.b===this.a&&d.c===this.b},
$S:z+18}
A.bIZ.prototype={
$1(d){return d.a<0},
$S:z+31}
A.bJ3.prototype={
$1(d){var w,v,u,t
for(w=this.a.x,v=w.length,u=0;u<v;++u){t=w[u]
if(t.b===d)return t}return null},
$S:z+70}
A.bJ1.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n=this,m=new A.bJ2()
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
A.bJ2.prototype={
$4(d,e,f,g){return Math.atan2(f-d,g-e)},
$S:285}
A.bJ0.prototype={
$1(d){return d.b===this.a.a.a},
$S:z+18}
A.bJ4.prototype={
$1(d){var w=d.c
return w==="bathroom"||w==="kitchen"},
$S:z+4}
A.dNY.prototype={
$0(){return this.b.d=this.a.a},
$S:0}
A.dNZ.prototype={
$1(d){return this.a.c6a()},
$S:11}
A.dOa.prototype={
$0(){},
$S:0}
A.dO4.prototype={
$0(){return this.a.w=this.b},
$S:0}
A.dO5.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.dO3(w))},
$S:0}
A.dO3.prototype={
$0(){return this.a.w=null},
$S:0}
A.dNU.prototype={
$1(d){return B.aGo},
$S:z+30}
A.dNV.prototype={
$0(){},
$S:0}
A.dOd.prototype={
$1(d){return B.aGo},
$S:z+30}
A.dOe.prototype={
$0(){},
$S:0}
A.dOc.prototype={
$0(){var w=this.a
return w.m(new A.dOb(w,this.b))},
$S:0}
A.dOb.prototype={
$0(){return this.a.r=this.b},
$S:0}
A.dNT.prototype={
$0(){return this.a.abm(this.b)},
$S:0}
A.dO_.prototype={
$0(){return this.a.IR(this.b.bdG(this.c))},
$S:0}
A.dO0.prototype={
$0(){return this.a.IR(this.b.aJZ(this.c))},
$S:0}
A.dO1.prototype={
$0(){return this.a.IR(this.b.aCD(this.c))},
$S:0}
A.dO2.prototype={
$0(){return this.a.aju(this.b)},
$S:0}
A.dNX.prototype={
$1(d){var w,v,u=null,t=this.b,s=this.c,r=t.e[s],q=t.c
q===$&&C.c()
q=q[r.a].a
w=this.a
v=x.p
s=C.B(C.a([new A.acj(q.e,44,u),D.as,C.E(C.d("Bed "+(s+1)+": "+q.b,u,u,u,u,u,u,D.hI,u,u,u),1),w.Px("\ud83d\udc89 Treat",new A.dNW(w,t,s),D.cs)],v),D.m,u,D.e,D.j,0,u,u)
t=r.b
return C.x(C.a([s,D.N,w.Wa("Care",t,t<30?D.aw:D.aR),w.Wa("Getting better",r.c,D.bo)],v),D.E,u,D.e,D.j,0,D.p)},
$S:325}
A.dNW.prototype={
$0(){return this.a.IR(this.b.biR(this.c))},
$S:0}
A.dO7.prototype={
$0(){return this.a.IR(this.b.aD8("food"))},
$S:0}
A.dO8.prototype={
$0(){return this.a.IR(this.b.aD8("medicine"))},
$S:0}
A.dO9.prototype={
$0(){var w=0,v=C.j(x.H),u,t=this,s,r
var $async$$0=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:w=3
return C.b(A.aSP(),$async$$0)
case 3:$.DS=null
s=t.a
if(s.c==null){w=1
break}r=s.f
if(r!=null)r.a4(0)
$.ajr=null
s.m(new A.dO6(s))
s.Zv()
case 1:return C.h(u,v)}})
return C.i($async$$0,v)},
$S:1}
A.dO6.prototype={
$0(){return this.a.d=null},
$S:0}
A.dOf.prototype={
$0(){return C.a3(this.a,!1).iW()},
$S:0}
A.dOg.prototype={
$1(d){return d.a>=0},
$S:z+31}
A.fvg.prototype={
$2(d,e){var w
A:{if("black"===d){w=e.a===25?"The black wire carries the power (hot). It never goes on the green ground screw. Hot goes to a BRASS screw.":"The black (hot) wire goes on a BRASS screw, not on the silver one. Silver is for white (neutral)."
break A}if("white"===d){w=e.a===25?"The white wire is the neutral. The green screw is only for the ground wire. Neutral goes to a SILVER screw.":"The white (neutral) wire goes on a SILVER screw, not on brass. Brass is for the black (hot) wire."
break A}w="The bare copper ground wire only goes on the GREEN screw. It keeps you safe if something goes wrong."
break A}return w},
$S:z+2}
A.fvh.prototype={
$2(d,e){return d==="ground"?y.t:"A black (hot) wire never goes on the green ground screw. The two black wires go on the two BRASS screws."},
$S:z+2}
A.fvi.prototype={
$2(d,e){var w
if(e.e)w="Those are the LOAD screws. They are covered with tape because power must come in on the LINE side. If you wire the LOAD side the GFCI will not protect you."
else A:{if("black"===d){w="The black (hot) wire goes on the BRASS LINE screw."
break A}if("white"===d){w="The white (neutral) wire goes on the SILVER LINE screw."
break A}w=y.t
break A}return w},
$S:z+2}
A.fvj.prototype={
$2(d,e){var w
A:{if("black"===d){w="The black (hot) wire joins the fixture BLACK wire. Not the white one, and never the green ground."
break A}if("white"===d){w="The white (neutral) wire joins the fixture WHITE wire. Not the black one, and never the green ground."
break A}w="The bare copper ground wire joins the fixture GREEN ground wire only."
break A}return w},
$S:z+2}
A.fvk.prototype={
$2(d,e){var w
A:{if("black"===d){w="The black (hot) wire joins the fan BLACK wire. Not the white one, and never the green ground."
break A}if("white"===d){w="The white (neutral) wire joins the fan WHITE wire. Not the black one, and never the green ground."
break A}w="The bare copper ground wire joins the fan GREEN ground wire only."
break A}return w},
$S:z+2}
A.ftY.prototype={
$1(d){return d.a===this.a},
$S:z+44}
A.fSb.prototype={
$1(d){return d.a},
$S:z+108}
A.ft9.prototype={
$1(d){var w
A:{if("hot"===d){w=B.UT
break A}if("neutral"===d){w=B.UU
break A}if("ground"===d){w=B.UV
break A}w=B.aVT
break A}return w},
$S:z+45}
A.fta.prototype={
$1(d){var w
A:{if("hot"===d){w=B.Jl
break A}if("neutral"===d){w=B.Jm
break A}if("ground"===d){w=B.Jn
break A}w=B.aQv
break A}return w},
$S:z+111}
A.ft7.prototype={
$1(d){return d.a===this.a.a},
$S:z+12}
A.ft8.prototype={
$1(d){return d.a===this.a.b},
$S:z+7}
A.fJx.prototype={
$1(d){return d.e==="hot"},
$S:z+7}
A.fJy.prototype={
$1(d){return d.e==="neutral"},
$S:z+7}
A.fua.prototype={
$1(d){return D.d.b3(this.a.b,new A.fub(d))},
$S:3}
A.fub.prototype={
$1(d){return d.a===this.a},
$S:z+33}
A.fu7.prototype={
$2(d,e){return A.auK(e.b)>A.auK(d.b)?e:d},
$S:z+46}
A.fu8.prototype={
$1(d){return d.a===this.a.a},
$S:z+12}
A.fu9.prototype={
$1(d){return d.a===this.a.b},
$S:z+7}
A.fro.prototype={
$5(d,e,f,g,h){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=j.a
i.b=d
w=j.b
v=w.b
u=C.a6(v).k("cJ<1,2>")
t=u.k("Z<J.E>")
s=C.C(new C.Z(new C.cJ(v,u),new A.frp(g),t),t.k("J.E"))
r=g==="ground"
q=r?B.vB:h
p=r?0.6:0.3
if(w.c>0){o=e.aa(0,B.h0L)
i.jd(A.ahG(C.a([e,e.aa(0,B.fZN),o],x.o),4),0.12,q,!1,p,8)
return}if(s.length!==0){n=A.aOR(j.c,D.d.gI(s).a,w)
w=A.o_(e,n,0.5)
v=n.a>0
m=w.aa(0,new A.r(v?0.5:-0.5,0.2,0.9))
w=e.aa(0,B.h4X)
if(j.d)v=0
else v=v?0.06:-0.06
l=A.ahG(C.a([e,w,m,n.aa(0,new A.r(v,0,0.08)),n],x.o),5)
k=D.d.dt(l,0,D.k.bm(l.length*0.8))
i.jd(k,0.12,q,!1,p,8)
if(!r)i.jd(D.d.fP(l,k.length-1),0.08639999999999999,B.vB,!1,0.6,8)}else{l=A.ahG(C.a([e,e.aa(0,B.fW3),A.o_(e,f,0.6),f],x.o),5)
k=r?l:D.d.dt(l,0,D.k.bm(l.length*0.86))
i.jd(k,0.12,q,!1,p,8)
if(!r)i.jd(D.d.fP(l,k.length-1),0.08639999999999999,B.vB,!1,0.6,8)}},
$S:z+47}
A.frp.prototype={
$1(d){return d.b===this.a},
$S:702}
A.fcR.prototype={
$2(d,e){var w,v=this.a
v.b=d
w=A.GQ(e,0.9,6)
if(this.b)v.jd(w,0.2,B.XE,!1,0.35,10)
this.c.push(D.d.gal(w))},
$S:z+48}
A.fSa.prototype={
$1(d){return d.a===this.a},
$S:z+44}
A.fea.prototype={
$6$taped(d,e,f,g,h,i){var w,v,u,t=this.a
t.e=0.9
t.b=d
w=this.b
v=w.a+e*0.75
u=w.b+f
w=w.c-0.45
t.aW(new A.r(v,u,w),B.h6o,h,0.7)
t.dP(new A.r(v,u,w),new A.r(v+e*0.22,u,w),0.17,g,0.9,12)
t.aO(new A.r(v+e*0.23,u,w),B.h2S,B.EM)
if(i)t.aW(new A.r(v+e*0.05,u,w),B.h2J,D.bI,0.2)},
$5(d,e,f,g,h){return this.$6$taped(d,e,f,g,h,!1)},
$S:1780}
A.fvl.prototype={
$2(d,e){var w
if(d==="ground")w=y.t
else w=e.a===25?y.T:"A double-pole switch has two LINE screws on top (power in) and two LOAD screws on the bottom (power out to the heater). Each leg goes straight down the same side: left leg on the left screws, right leg on the right ones."
return w},
$S:z+2}
A.fvm.prototype={
$2(d,e){var w
if(d==="ground")w=y.t
else if(e.a===25)w=y.T
else w=d==="common"?"The COMMON wire does not go on a traveler screw. It goes on the odd-coloured COMMON screw.":"The travelers go on the two brass TRAVELER screws. The COMMON screw is for the black power wire only."
return w},
$S:z+2}
A.fvn.prototype={
$2(d,e){var w
if(d==="ground")w=y.t
else w=e.a===25?"A traveler never goes on the green ground screw.":"A four-way has a pair of screws for the travelers coming IN (top) and a pair for the travelers going OUT (bottom). Do not mix the two pairs."
return w},
$S:z+2}
A.fvo.prototype={
$2(d,e){var w
A:{if("ground"===d){w=y.t
break A}if("neutral"===d){w="The white neutral wire goes on the silver NEUTRAL screw only."
break A}if(e.a===25)w=y.T
else w=d==="line"?"The wire from the panel is the LINE: it goes on the LINE screw.":"The wire to the light is the LOAD: it goes on the LOAD screw."
break A}return w},
$S:z+2}
A.fvp.prototype={
$2(d,e){var w
if(d==="ground")w=y.t
else if(e.a===25)w=y.T
else w=d==="feed"?"The feed goes on the FEED screw, where the two switches are joined.":"The wires to the lights go on the separate screws, one for each switch."
return w},
$S:z+2}
A.fvq.prototype={
$2(d,e){var w,v=y.T
A:{if("ground"===d){w=y.t
break A}if("neutral"===d){w="The white neutral wire goes on a SILVER screw."
break A}if("always"===d){w=e.a===25?v:"The always-hot wire goes on the BOTTOM brass screw. The top one is for the switched wire."
break A}w=e.a===25?v:"The switched hot wire (red) goes on the TOP brass screw."
break A}return w},
$S:z+2}
A.fvr.prototype={
$2(d,e){var w
A:{if("ground"===d){w=y.t
break A}if("neutral"===d){w=y.I
break A}w=e.a===25?y.T:"The black and red hot wires go on the two brass screws, X and Y. The silver W screw is for the neutral."
break A}return w},
$S:z+2}
A.fvs.prototype={
$2(d,e){return d==="neutral"?y.I:"The black and red hot wires go on the two brass screws, X and Y."},
$S:z+2}
A.fvt.prototype={
$2(d,e){var w
if(d==="ground")w=y.t
else w=e.a===25?y.T:"Both hot wires go on the two brass screws."
return w},
$S:z+2}
A.fvu.prototype={
$2(d,e){var w
A:{if("isoground"===d){w="The isolated ground wire only goes on the green screw with the orange triangle."
break A}if("neutral"===d){w=y.c
break A}w=e.a===25?"A hot wire never goes on the ground screw.":y.u
break A}return w},
$S:z+2}
A.fr9.prototype={
$1(d){return d.a===this.a},
$S:z+23}
A.fra.prototype={
$0(){return B.akS},
$S:z+50}
A.fS9.prototype={
$1(d){var w=d>60?62:99
return Math.min(d*0.5625,w)},
$S:5}
A.fS6.prototype={
$1(d){return d>40?30+d/2:58},
$S:5}
A.fS7.prototype={
$2(d,e){return D.k.aL(d.a,e.a)},
$S:1781}
A.fS8.prototype={
$2(d,e){var w=this.a
if(e-d>w.a-w.b){w.b=d
w.a=e}},
$S:245}
A.bRY.prototype={
$1(d){return d},
$S:120}
A.bRX.prototype={
$1(d){return B.eXJ.q(0,d.b)},
$S:z+3}
A.bSy.prototype={
$1(d){return d.a==="Jobs"},
$S:z+52}
A.bSz.prototype={
$1(d){return new A.oh(!1,"back",d,5)},
$S:z+53}
A.bSA.prototype={
$4(d,e,f,g){return!D.d.b3(this.a.x,new A.bSB(d,f,e,g))},
$2(d,e){return this.$4(d,e,135,115)},
$3(d,e,f){return this.$4(d,e,f,115)},
$S:1782}
A.bSB.prototype={
$1(d){var w=this,v=d.b
return!D.d.q(B.a48,v)&&!D.d.q(B.Hr,v)&&Math.abs(d.c-w.a)<w.b&&Math.abs(d.d-w.c)<w.d},
$S:z+3}
A.bSC.prototype={
$4(d,e,f,g){var w,v,u,t,s,r,q,p,o,n
for(w=this.a,v=w.length,u=f/2+90,t=g/2+20,s=0;s<v;++s){r=w[s]
if(Math.abs(r.c-d)<u){q=r.d
p=q>e?70:30
p=Math.abs(q-e)<t+p
q=p}else q=!1
if(q)return!1}for(w=this.b.x,v=w.length,s=0;s<w.length;w.length===v||(0,C.M)(w),++s){o=w[s]
u=o.b
if(D.d.q(B.Rb,u)||u==="roundabout"||u==="rug"||u==="flowers")continue
n=B.hr.h(0,u)
if(Math.abs(o.c-d)<(f+n.c)/2+130){u=o.d
t=n.d
q=u>e?150:110
q=Math.abs(u-e)<(g+t)/2+q
u=q}else u=!1
if(u)return!1}return!0},
$S:703}
A.bSG.prototype={
$4(d,e,f,g){var w,v,u,t,s,r,q,p,o,n,m,l,k,j
if(Math.abs(d)>1150||e<-600||e>1450)return!1
for(w=this.a.x,v=w.length,u=f/2+40,t=g/2+40,s=0;s<w.length;w.length===v||(0,C.M)(w),++s){r=w[s]
q=r.b
if(q==="rug"||q==="flowers"||q==="pond")continue
p=B.hr.h(0,q)
p.toString
o=(r.e&1)===1
n=o?p.d:p.c
m=o?p.c:p.d
if(Math.abs(r.c-d)<(f+n)/2+34&&Math.abs(r.d-e)<(g+m)/2+34)return!1
if(B.eXW.q(0,q)){l=r.e*3.141592653589793/2
q=r.c
o=Math.sin(l)
p=p.d/2+30
k=r.d
j=Math.cos(l)
if(Math.abs(q+o*p-d)<u&&Math.abs(k+j*p-e)<t)return!1}}return!0},
$S:703}
A.bSD.prototype={
$3(d,e,f){var w,v,u,t,s,r,q,p,o,n={},m=B.hr.h(0,d)
m.toString
w=n.a=0
v=this.a
u=new A.bSF(n,v,d)
for(t=f.length,s=this.b,r=m.c,m=m.d;w<t;++w){q=f[w]
p=q.a
o=q.b
if(n.a>=e)return
if(s.$4(p,o,r,m))u.$2(p,o)}v=v.x
o=-500
for(;;){if(!(o<1400&&n.a<e))break
p=-1100
for(;;){if(!(p<=1100&&n.a<e))break
A:{if(D.d.b3(v,new A.bSE(d,p,o)))break A
if(s.$4(p,o,r,m))u.$2(p,o)}p+=110}o+=100}},
$S:1784}
A.bSF.prototype={
$2(d,e){var w=this.b,v=this.c
w.dv(0,v,d,e)
if(v==="ubstation")w.dv(0,"car",d+96,e+6);++this.a.a},
$S:245}
A.bSE.prototype={
$1(d){return d.b===this.a&&Math.abs(d.c-this.b)<420&&Math.abs(d.d-this.c)<420},
$S:z+3}
A.bSK.prototype={
$1(d){return d.gkF()},
$S:z+4}
A.bSJ.prototype={
$1(d){var w=d.c
return(w==="bathroom"||w==="kitchen")&&d.gjM()},
$S:z+4}
A.bSI.prototype={
$1(d){var w=d.c
return w==="bathroom"||w==="kitchen"},
$S:z+4}
A.bSH.prototype={
$1(d){return d.gkF()&&d.gjM()},
$S:z+4}
A.e8x.prototype={
$1(d){return!(d.gkF()&&d.gjM())},
$S:z+4}
A.e8u.prototype={
$1(d){var w,v=this.a.a.f
A:{if("wiring"===v){w=!d.gkF()
break A}if("plumbing"===v){w=!d.gjM()
break A}w=!(d.gkF()&&d.gjM())
break A}return w},
$S:z+4}
A.e8v.prototype={
$1(d){var w,v,u,t,s,r,q=this.a,p=q.ghH()
if(Date.now()<0){if(q.c!=null)q.m(new A.e8t())
return}if(p==null||q.c==null||q.cx!=null||q.bZ>0)return
w=q.d
w===$&&C.c()
v=w.d
v===$&&C.c()
u=p.bdR(w,v[w.e].a)
w=C.a([],x.s)
for(v=u.length,t=0;t<u.length;u.length===v||(0,C.M)(u),++t){s=u[t]
w.push(""+s.a+":"+D.k.V(s.c)+":"+D.k.V(s.d)+":"+s.x+":"+s.Q)}r=D.d.aG(w,"|")
if(q.aH==null&&r!==q.dr){q.dr=r
q.m(q.giP())}w=p.f
if(w.length!==0&&D.d.gI(w)!==q.fy){w=D.d.gI(w)
q.fy=w
q.iA(w)}},
$S:11}
A.e8t.prototype={
$0(){},
$S:0}
A.e8w.prototype={
$1(d){var w,v=this.a
if(v.c==null)return
w=v.d
w===$&&C.c()
if(w.a.length!==0)v.iA(v.c0a())
else{w=v.a.f
if(w.length!==0){A:{if("wiring"===w){w="This room needs wiring: press the Wiring button, or tap the red outlet or the light."
break A}if("plumbing"===w){w="This room needs plumbing: press the Plumbing button, or tap the toilet or the sink."
break A}w="Walk through the house and fix what the signs say is wrong."
break A}v.iA(w)}}},
$S:9}
A.e7h.prototype={
$0(){var w=this.a
w.ax=this.b
w.ay=this.c},
$S:0}
A.e7i.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.e7g(w))},
$S:0}
A.e7g.prototype={
$0(){return this.a.ax=null},
$S:0}
A.e7j.prototype={
$0(){var w=this.a
w.r=this.b
w.Q=0
w.as=-1
w.at=0
w.iz()},
$S:0}
A.e5Q.prototype={
$0(){var w=this.a,v=w.d
v===$&&C.c()
v.e=this.b
w.Q=0
w.as=-1
w.at=0
w.ax=null
w.iz()},
$S:0}
A.e7K.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.d
w===$&&C.c()
u=w[u.e]
u.fy=!u.fy
v.iz()},
$S:0}
A.e6N.prototype={
$0(){return this.a.k3=!0},
$S:0}
A.e6O.prototype={
$0(){var w=this.a,v=this.b
w.Q=v-100
w.at=v
w.iz()},
$S:0}
A.e6P.prototype={
$0(){var w=this.a,v=this.b
w.as=v-300
w.at=v},
$S:0}
A.e6Q.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&C.c()
w=t.d
w===$&&C.c()
v=this.b
if(!w[t.e].at.W(0,v)){t=u.d
w=t.d
w===$&&C.c()
w[t.e].at.M(0,v)}u.iz()},
$S:0}
A.e6R.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.d
w===$&&C.c()
w[u.e].p2=!0
v.iz()},
$S:0}
A.e5j.prototype={
$1(d){var w,v,u,t,s,r=this,q=null,p=C.d("Door to "+r.b,q,q,q,q,q,q,D.df,q,q,q),o=r.a,n=o.d
n===$&&C.c()
w=n.d
w===$&&C.c()
v=r.c
u=C.d(w[n.e].at.q(0,v)?"The door is open.":"The door is closed.",q,q,q,q,q,q,D.lG,q,q,q)
n=o.d
w=n.d
w===$&&C.c()
t=C.X(w[n.e].at.q(0,v)?B.bHM:B.bHY,q,q,q,q,q)
n=o.d
w=n.d
w===$&&C.c()
s=x.p
return C.bm(!0,new C.D(D.bR,C.x(C.a([p,D.au,u,D.ad,C.bX(D.bB,C.a([C.dp(t,C.d(w[n.e].at.q(0,v)?"Close the door":"Open the door",q,q,q,q,q,q,q,q,q,q),new A.e5h(o,d,v),q),C.es(B.bOg,B.fwg,new A.e5i(o,d,v,r.d),q)],s),D.bs,10,10)],s),D.E,q,D.e,D.P,0,D.p),q),!0,!1,D.af,!0,!0)},
$S:25}
A.e5h.prototype={
$0(){var w,v,u
C.a3(this.b,!1).N(null)
w=this.a
v=this.c
w.m(new A.e5g(w,v))
w=w.d
w===$&&C.c()
u=w.d
u===$&&C.c()
A.fT(u[w.e].at.q(0,v)?700:450,70,0.25,"tri")},
$S:0}
A.e5g.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&C.c()
w=t.d
w===$&&C.c()
v=this.b
if(!w[t.e].at.W(0,v)){t=u.d
w=t.d
w===$&&C.c()
w[t.e].at.M(0,v)}u.iz()},
$S:0}
A.e5i.prototype={
$0(){var w,v,u=this
C.a3(u.b,!1).N(null)
w=u.a
v=u.c
w.m(new A.e5e(w,v))
A.fT(700,70,0.25,"tri")
C.bN(D.nf,new A.e5f(w,v,u.d),x.P)},
$S:0}
A.e5e.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.d
w===$&&C.c()
w[u.e].at.M(0,this.b)
v.iz()},
$S:0}
A.e5f.prototype={
$0(){var w=this.a
if(w.c==null)return
w.m(new A.e5d(w,this.b))
w.Ar(this.c)},
$S:12}
A.e5d.prototype={
$0(){var w,v=this.a.d
v===$&&C.c()
w=v.d
w===$&&C.c()
return w[v.e].at.W(0,this.b)},
$S:0}
A.e5s.prototype={
$0(){return this.a.er=!0},
$S:0}
A.e5t.prototype={
$0(){var w=this.a
w.f_=!0
w.fu=!1
w.R8=!w.p4},
$S:0}
A.e5u.prototype={
$0(){var w=this.a
w.R8=w.f_=!1},
$S:0}
A.e6G.prototype={
$2(d,e){var w=null,v=D.w.j(0.55),u=C.I(D.bX,D.r,1)
return C.aB(w,C.p(w,C.X(d,D.c,w,w,w,22),D.f,w,w,new C.o(v,w,u,w,w,w,D.a6),w,44,w,D.MB,w,w,w,44),D.y,!1,w,new A.e6I(this.a),w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,e,w,w,w,w,w,w,!1,D.a4)},
$S:381}
A.e6I.prototype={
$0(){var w=this.a
return w.m(new A.e6H(w))},
$S:0}
A.e6H.prototype={
$0(){return this.a.fu=!0},
$S:0}
A.e6J.prototype={
$0(){var w=this.a
return w.m(new A.e6F(w))},
$S:0}
A.e6F.prototype={
$0(){return this.a.fu=!1},
$S:0}
A.e6K.prototype={
$0(){var w=this.a
return w.p4?w.a2e():w.m(new A.e6E(w))},
$S:0}
A.e6E.prototype={
$0(){return this.a.R8=!0},
$S:0}
A.e6L.prototype={
$0(){var w=this.a
return w.m(new A.e6D(w))},
$S:0}
A.e6D.prototype={
$0(){var w=this.a
return w.h3=!w.h3},
$S:0}
A.e6M.prototype={
$0(){var w=this.a
return w.m(new A.e6C(w))},
$S:0}
A.e6C.prototype={
$0(){return this.a.ah=!0},
$S:0}
A.e4U.prototype={
$0(){var w=this.a
return w.m(new A.e4V(w))},
$S:0}
A.e4V.prototype={
$0(){return this.a.ah=!1},
$S:0}
A.e5E.prototype={
$2(d,e){var w=null,v=D.w.j(0.55),u=C.I(D.bX,D.r,1)
return C.aB(w,C.p(w,C.X(d,D.c,w,w,w,20),D.f,w,w,new C.o(v,w,u,w,w,w,D.a6),w,40,w,D.ir,w,w,w,40),D.y,!1,w,new A.e5G(this.a),w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,e,w,w,w,w,w,w,!1,D.a4)},
$S:381}
A.e5G.prototype={
$0(){var w=this.a
return w.m(new A.e5F(w))},
$S:0}
A.e5F.prototype={
$0(){return this.a.fu=!0},
$S:0}
A.e5H.prototype={
$0(){var w=this.a
return w.m(new A.e5D(w))},
$S:0}
A.e5D.prototype={
$0(){return this.a.fu=!1},
$S:0}
A.e5I.prototype={
$0(){var w,v,u=this.a
u.m(new A.e5C(u))
w=u.d
w===$&&C.c()
v=w.d
v===$&&C.c()
if(v[w.e].c!=="outside")u.xO()},
$S:0}
A.e5C.prototype={
$0(){return this.a.er=!1},
$S:0}
A.e5J.prototype={
$0(){var w=this.a
return w.m(new A.e5B(w))},
$S:0}
A.e5B.prototype={
$0(){var w=this.a
return w.a9=w.a9===1?3:1},
$S:0}
A.e5K.prototype={
$0(){var w=this.a
return w.m(new A.e5A(w))},
$S:0}
A.e5A.prototype={
$0(){var w=this.a
return w.h3=!w.h3},
$S:0}
A.e5L.prototype={
$0(){var w=this.a
return w.m(new A.e5z(w))},
$S:0}
A.e5z.prototype={
$0(){return this.a.ah=!0},
$S:0}
A.e5M.prototype={
$0(){var w=this.a
return w.p4?w.a2e():w.m(new A.e5y(w))},
$S:0}
A.e5y.prototype={
$0(){return this.a.R8=!0},
$S:0}
A.e7I.prototype={
$2$mine(d,e){var w=null,v=e?D.a8:D.a3,u=e?D.bi:D.e5,t=C.m(18)
return new C.bK(v,w,w,C.p(w,C.d(d,w,w,w,w,w,w,B.aRt,w,w,w),D.f,w,B.abS,new C.o(u,w,w,t,w,w,D.n),w,w,w,D.cu,D.iP,w,w,w),w)},
$1(d){return this.$2$mine(d,!1)},
$S:1785}
A.e7J.prototype={
$1(d){var w=this,v=null,u=w.b,t=u.b,s=x.p,r=C.B(C.a([C.h5(u.e.c,v,C.d(t[0],v,v,v,v,v,v,D.iX,v,v,v),v,18),D.as,C.d(t,v,v,v,v,v,v,D.jZ,v,v,v),D.b0,B.fHK],s),D.m,v,D.e,D.j,0,v,v),q=w.c,p=w.d,o=q.$1("Hi, it's "+t+". "+p.d),n=w.e,m="Please come to "+n,l=w.a
return C.bm(!0,new C.D(A7.y7,C.x(C.a([r,M.Mq,o,q.$1(p.c==="power"?m+" and fix the wiring. I can't stay in the dark.":m+" and fix the leak before it floods."),q.$1("I'll pay "+p.e+" points. Thank you!"),q.$2$mine("On my way!",!0),D.am,C.bX(D.bB,C.a([C.dp(B.bSl,C.d("Show me where "+t+" is",v,v,v,v,v,v,v,v,v,v),new A.e7G(l,d,p,u),v),C.dp(B.bVc,C.d("Go and fix it ("+n+")",v,v,v,v,v,v,v,v,v,v),new A.e7H(l,d,w.f,n),v)],s),D.bs,8,10)],s),D.E,v,D.e,D.P,0,D.p),v),!0,!1,D.af,!0,!0)},
$S:25}
A.e7G.prototype={
$0(){var w,v,u,t,s=this
C.a3(s.b,!1).N(null)
w=s.a
v=w.fr
u=C.S(v).k("Z<1>")
t=C.C(new C.Z(v,new A.e7F(s.c),u),u.k("J.E"))
if(t.length!==0){v=w.d
v===$&&C.c()
u=v.d
u===$&&C.c()
v=u[v.e].c==="outside"}else v=!1
if(v){v=w.e
v===$&&C.c()
v.x8(160,new A.r(D.d.gI(t).c,30,D.d.gI(t).d))}w.ef(s.d.b+" is the one with the phone sign.",!0)},
$S:0}
A.e7F.prototype={
$1(d){return d.a===this.a.b},
$S:z+13}
A.e7H.prototype={
$0(){var w,v=this
C.a3(v.b,!1).N(null)
w=v.a
if(w.aK)w.a2f()
w.er=!1
w.Ar(v.c)
w.ef("You are in "+v.d+". Fix the problem with the Wiring or Plumbing button.",!0)},
$S:0}
A.e63.prototype={
$0(){var w=this.a
w.x=!0
w.z=!1
w.r="ceiling"
w.iz()},
$S:0}
A.e3T.prototype={
$1(d){return d.c==="outside"},
$S:z+4}
A.e8a.prototype={
$1(d){return d.c==="outside"},
$S:z+4}
A.e4j.prototype={
$0(){},
$S:0}
A.e5Z.prototype={
$0(){var w=this.a
return w.m(new A.e5Y(w))},
$S:0}
A.e5Y.prototype={
$0(){return this.a.id=!1},
$S:0}
A.e6_.prototype={
$0(){var w=this.a
return w.m(new A.e5X(w))},
$S:0}
A.e5X.prototype={
$0(){return this.a.id=!1},
$S:0}
A.e8b.prototype={
$1(d){var w=this.b
return d.d===this.a.apJ(w.f,w.r)},
$S:z+34}
A.e89.prototype={
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
A.e7n.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=d.a==="tank"?A.h14(l.a.c5.b):d.e,i=l.b
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
if(i){i=C.d(p,k,k,k,k,k,k,D.wN,k,k,k)
o=C.d(o,k,1,D.a1,k,k,k,D.JL,D.L,k,k)
n=C.d(n,k,2,D.a1,k,k,k,B.fe3,D.L,k,k)
p=w?D.bI:D.bz
m=C.m(12)
i=C.x(C.a([i,D.bA,o,n,D.fI,C.p(k,C.d(""+j+" \u2b50",k,k,k,k,k,k,C.l(k,k,w?D.w:D.bX,k,k,k,k,k,k,k,k,13,k,k,D.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),D.f,k,k,new C.o(p,k,k,m,k,k,D.n),k,k,k,k,D.MK,k,k,k)],x.p),D.m,k,D.e,D.P,0,D.p)}else{i=C.d(p,k,k,k,k,k,k,D.nB,k,k,k)
p=x.p
n=C.E(C.x(C.a([C.d(o,k,k,k,k,k,k,D.ot,k,k,k),C.d(n,k,k,k,k,k,k,B.aQZ,k,k,k)],p),D.E,k,D.e,D.j,0,D.p),1)
o=w?D.bI:D.bz
m=C.m(14)
i=C.B(C.a([i,D.as,n,C.p(k,C.d(""+j+" \u2b50",k,k,k,k,k,k,C.l(k,k,w?D.w:D.bX,k,k,k,k,k,k,k,k,k,k,k,D.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),D.f,k,k,new C.o(o,k,k,m,k,k,D.n),k,k,k,k,D.ni,k,k,k)],p),D.m,k,D.e,D.j,0,k,k)}return C.aB(k,C.p(k,i,D.f,k,k,new C.o(s,k,q,r,k,k,D.n),k,k,k,D.cu,new C.Q(u,t,u,t),k,k,v),D.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new A.e7o(l.a,d),k,k,k,k,k,k,!1,D.a4)},
$S:z+59}
A.e7o.prototype={
$0(){return this.a.aOt(this.b)},
$S:0}
A.e7m.prototype={
$2(d,e){var w,v,u,t=null,s=x.p,r=C.a([new C.D(B.buB,C.d(d,t,t,t,t,t,t,B.fk7,t,t,t),t)],s)
if(this.a){s=C.a([],s)
for(w=e.length,v=this.b,u=0;u<w;++u)s.push(v.$1(e[u]))
r.push(C.bX(D.bB,s,D.bs,0,8))}else for(s=e.length,w=this.b,u=0;u<s;++u)r.push(w.$1(e[u]))
return C.x(r,D.E,t,D.e,D.P,0,D.p)},
$S:z+60}
A.e7l.prototype={
$0(){var w=this.a
return w.m(new A.e7k(w))},
$S:0}
A.e7k.prototype={
$0(){return this.a.k2=!1},
$S:0}
A.e6n.prototype={
$2(d,e){var w=null,v=e.j(0.2),u=C.m(10)
return C.p(w,C.d(d,w,w,w,w,w,w,C.l(w,w,e,w,w,w,w,w,w,w,w,11.5,w,w,D.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),D.f,w,w,new C.o(v,w,w,u,w,w,D.n),w,w,w,w,D.fG,w,w,w)},
$S:1786}
A.e6o.prototype={
$1(d){return B.hr.h(0,d.b).a},
$S:z+61}
A.e6k.prototype={
$1(d){var w,v,u,t,s=this,r=null,q=d.c,p=A.yC(q),o=D.k.V(Math.sqrt(Math.pow(p.a-s.b,2)+Math.pow(p.b-s.c,2))/10),n=D.c.j(0.07),m=C.m(16),l=C.I(D.bz,D.r,1),k=d.b,j=C.d(A.KR(k).b,r,r,r,r,r,r,D.nB,r,r,r),i=s.d
k=C.d(d.w?"\ud83d\ude91 "+A.KR(k).c+": "+C.w(i.$1(q))+" \u2192 "+C.w(i.$1(d.d))+" (somebody was run over)":A.KR(k).c+": "+C.w(i.$1(q))+" \u2192 a house",r,r,r,r,r,r,B.aSo,r,r,r)
w=s.e
v=w.$2(""+d.e+" points",D.bI)
u=w.$2(""+o+" m to the shop",D.aR)
p=A.yC(q)
t=A.yC(d.d)
q=x.p
w=C.E(C.x(C.a([k,D.cO,C.bX(D.bB,C.a([v,u,w.$2(""+D.k.V(Math.sqrt(Math.pow(p.a-t.a,2)+Math.pow(p.b-t.b,2))/10)+" m trip",D.bo)],q),D.bs,0,6)],q),D.E,r,D.e,D.j,0,D.p),1)
k=s.f!=null
i=k?r:new A.e6m(s.a,s.r,d,i)
v=k?D.bz:D.bI
u=C.m(14)
return C.p(r,C.B(C.a([j,D.as,w,D.ab,C.aB(r,C.p(r,C.d("Take",r,r,r,r,r,r,C.l(r,r,k?D.bX:D.w,r,r,r,r,r,r,r,r,r,r,r,D.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),D.f,r,r,new C.o(v,r,r,u,r,r,D.n),r,r,r,r,D.iP,r,r,r),D.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,i,r,r,r,r,r,r,!1,D.a4)],q),D.m,r,D.e,D.j,0,r,r),D.f,r,r,new C.o(n,r,l,m,r,r,D.n),r,r,r,D.cu,D.bU,r,r,r)},
$S:z+62}
A.e6m.prototype={
$0(){var w=this,v=w.c,u=w.a
if(w.b.cWb(0,v,u.CW.gii()/1000)){u.m(new A.e6l(u))
if(!u.aK)u.a2b()
u.ef(A.KR(v.b).b+" Order taken: go to the "+w.d.$1(v.c).toLowerCase()+" (follow the yellow line), then to the house.",!0)}},
$S:0}
A.e6l.prototype={
$0(){return this.a.go=!1},
$S:0}
A.e6i.prototype={
$0(){var w=this.a
return w.m(new A.e6h(w))},
$S:0}
A.e6h.prototype={
$0(){return this.a.go=!1},
$S:0}
A.e6j.prototype={
$0(){var w=this.a
return w.m(new A.e6g(w,this.b))},
$S:0}
A.e6g.prototype={
$0(){this.b.a4(0)
this.a.ef("Order given back.",!0)},
$S:0}
A.e5N.prototype={
$0(){return this.a.k3=!1},
$S:0}
A.e5O.prototype={
$0(){return this.a.k3=!1},
$S:0}
A.e7d.prototype={
$0(){return A.fT(1175,220,0.3,"tri")},
$S:0}
A.e5q.prototype={
$0(){var w=this.a
return w.m(new A.e5p(w))},
$S:0}
A.e5p.prototype={
$0(){return this.a.k3=!1},
$S:0}
A.e5r.prototype={
$0(){return this.a.bSi(this.b)},
$S:0}
A.e5c.prototype={
$4(d,e,f,g){var w=-d,v=this.a
return 0.5*(2*e+(w+f)*v+(2*d-5*e+4*f-g)*v*v+(w+3*e-3*f+g)*v*v*v)},
$S:285}
A.e64.prototype={
$1(d){return d.c==="outside"},
$S:z+4}
A.e7p.prototype={
$0(){var w=this.a
w.R8=!1
w.y1=null
w.p4=!0
w.rx=this.b
w.ry=-1},
$S:0}
A.e5o.prototype={
$2(d,e){return d[D.o.E(e,0,d.length-1)]},
$S:z+63}
A.e7A.prototype={
$0(){var w=this.a
w.p4=!1
w.aH=null
w.iz()},
$S:0}
A.e5m.prototype={
$4(d,e,f,g){var w=null,v=D.c.j(0.07),u=C.m(16),t=C.I(D.bz,D.r,1),s=x.p
return C.aB(w,C.p(w,C.B(C.a([C.d(d,w,w,w,w,w,w,D.nB,w,w,w),D.bc,C.E(C.x(C.a([C.d(e,w,w,w,w,w,w,D.hI,w,w,w),C.d(f,w,w,w,w,w,w,D.hg,w,w,w)],s),D.E,w,D.e,D.j,0,D.p),1),A0.Ou],s),D.m,w,D.e,D.j,0,w,w),D.f,w,w,new C.o(v,w,t,u,w,w,D.n),w,w,w,D.jK,D.bj,w,w,w),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new A.e5n(this.a,g),w,w,w,w,w,w,!1,D.a4)},
$S:1787}
A.e5n.prototype={
$0(){return this.a.cwI(this.b)},
$S:0}
A.e5l.prototype={
$0(){var w=this.a
return w.m(new A.e5k(w))},
$S:0}
A.e5k.prototype={
$0(){return this.a.R8=!1},
$S:0}
A.e5U.prototype={
$1(d){return d.c==="outside"},
$S:z+4}
A.e7z.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&C.c()
w=t[this.b]
v=u.at.h(0,w.a)
if(v==null||!A.fXP(w.b,v.a))return 0
return v.b.c<2?1:2},
$S:98}
A.e8o.prototype={
$1(d){return d},
$S:120}
A.e4W.prototype={
$1(d){return d},
$S:120}
A.e5R.prototype={
$0(){var w=A.cp_(0,null,!1,this.a.a*13+5+this.b.f,!0)
w.alx()
return w},
$S:z+64}
A.e5S.prototype={
$1(d){return A.cfR(!1,this.a,!1)},
$S:z+38}
A.e5T.prototype={
$1(d){return d.length!==0},
$S:3}
A.e5w.prototype={
$0(){return new A.Ck(C.U(x.S,x.N))},
$S:z+66}
A.e5x.prototype={
$1(d){return new A.DF("light",this.a,null)},
$S:z+25}
A.e66.prototype={
$1(d){return d.c==="outside"},
$S:z+4}
A.e67.prototype={
$0(){return this.a.y1=this.b},
$S:0}
A.e4q.prototype={
$1(d){var w=null
return new C.bK(D.a3,w,w,C.p(w,C.d(d,w,w,w,w,w,w,B.aRt,w,w,w),D.f,w,B.abS,B.b3k,w,w,w,D.cu,D.iP,w,w,w),w)},
$S:146}
A.e4p.prototype={
$5$primary(d,e,f,g,h){var w=null,v=h?f:f.j(0.14),u=C.m(16),t=C.I(f,D.r,1),s=C.X(d,h?D.w:f,w,w,w,21)
return C.aB(w,C.p(w,C.B(C.a([s,D.ab,C.d(e,w,w,w,w,w,w,C.l(w,w,h?D.w:D.c,w,w,w,w,w,w,w,w,14.5,w,w,D.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),D.m,w,D.b7,D.j,0,w,w),D.f,w,w,new C.o(v,w,t,u,w,w,D.n),w,48,w,D.jK,w,w,w,w),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,!1,D.a4)},
$4(d,e,f,g){return this.$5$primary(d,e,f,g,!1)},
$S:1788}
A.e4r.prototype={
$0(){var w=this.a
return w.m(new A.e4o(w))},
$S:0}
A.e4o.prototype={
$0(){return this.a.y1=null},
$S:0}
A.e4s.prototype={
$0(){var w,v,u=this.a
u.m(new A.e4n(u))
if(!u.aK)u.a2b()
w=u.aB
if(w!=null){v=u.e
v===$&&C.c()
v.ap7(220,0.5,new A.r(w.f,30,w.r))}u.ef("Follow the yellow line on the ground to get there.",!0)},
$S:0}
A.e4n.prototype={
$0(){return this.a.y1=null},
$S:0}
A.e4t.prototype={
$0(){var w,v=this.a
v.m(new A.e4m(v))
if(v.cI==null){v.cI=this.b
v.hK=0}w=this.b
v.S1(w.a)
w=w.c
if(w==="power")w="You are at the house. Walk in and onto the red mat at the breaker panel."
else w=w==="sick"?"You are at the hospital. Walk in and onto the desk.":y.Y
v.ef(w,!0)},
$S:0}
A.e4m.prototype={
$0(){return this.a.y1=null},
$S:0}
A.e4u.prototype={
$0(){var w=this.a
w.m(new A.e4l(w,this.b))
w.ef("Saved on your waiting list.",!0)},
$S:0}
A.e4l.prototype={
$0(){var w,v=this.a
v.y1=null
w=this.b
if(v.cI===w)v.cI=null
v=v.eF
if(!D.d.q(v,w))v.push(w)},
$S:0}
A.e4v.prototype={
$0(){var w=this.a
return w.m(new A.e4k(w))},
$S:0}
A.e4k.prototype={
$0(){return this.a.y2=!1},
$S:0}
A.e4S.prototype={
$1(d){var w=null
return C.bx(D.qM,new C.a8(w,C.aH(d,w,x.w).w.a.b*0.82,new A.apb(this.a,w),w),D.aq)},
$S:1789}
A.e4T.prototype={
$0(){var w=this.a
w.ayY()
w.iz()},
$S:0}
A.e7c.prototype={
$1(d){return new C.dY(new A.e7a(this.a,this.b,this.c),null)},
$S:19}
A.e7a.prototype={
$2(d,e){var w,v,u,t,s=null,r=new A.e7b(this.a,e),q=this.b,p=q.a,o=C.d(p.b+" "+q.gaCX(0),s,s,s,s,s,s,P.rX,s,s,s)
p=C.d(p.f,s,s,s,s,s,s,D.v7,s,s,s)
w=C.d("Now: "+q.gTZ()+"\nFood "+D.k.V(100-q.b)+"%   Health "+D.k.V(q.c)+"%   Home "+D.k.V(q.d)+"%",s,s,s,s,s,s,B.aRV,s,s,s)
v=this.c
u=x.p
t=C.a([r.$2("\ud83c\udf5e Feed",new A.e77(v,q))],u)
if(q.e)t.push(r.$3$col("\ud83d\udc8a Medicine",new A.e78(v,q),D.by))
if(q.e||q.c<60)t.push(r.$3$col("\ud83c\udfe5 Hospital",new A.e79(v,q),D.cs))
return C.bm(!0,new C.D(D.bR,C.x(C.a([o,p,D.N,w,D.ad,C.bX(D.bB,t,D.bs,8,8)],u),D.E,s,D.e,D.P,0,D.p),s),!0,!1,D.af,!0,!0)},
$S:87}
A.e7b.prototype={
$3$col(d,e,f){var w=null,v=f.j(0.22),u=C.m(12),t=C.I(f,D.r,1)
return C.aB(w,C.p(w,C.d(d,w,w,w,w,w,w,C.l(w,w,f,w,w,w,w,w,w,w,w,13,w,w,D.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),D.f,w,w,new C.o(v,w,t,u,w,w,D.n),w,w,w,w,X.y3,w,w,w),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new A.e76(this.a,e,this.b),w,w,w,w,w,w,!1,D.a4)},
$2(d,e){return this.$3$col(d,e,D.aE)},
$S:1790}
A.e76.prototype={
$0(){var w,v=this.b.$0()
this.c.$1(new A.e75())
w=this.a
w.m(w.giP())
w.iA(v)},
$S:0}
A.e75.prototype={
$0(){},
$S:0}
A.e77.prototype={
$0(){return this.a.bdG(this.b)},
$S:22}
A.e78.prototype={
$0(){return this.a.aJZ(this.b)},
$S:22}
A.e79.prototype={
$0(){return this.a.aCD(this.b)},
$S:22}
A.e6X.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=x.p,k=C.a([],l)
for(w=D.d.gaf(B.a2O),v=new C.f5(w,new A.e6U()),u=this.a,t=this.b;v.C();){s=w.gT(0)
r=D.c.j(0.08)
q=new C.aQ(12,12)
p=u.d
p===$&&C.c()
o=p.d
o===$&&C.c()
n=new C.ay(o[p.e].fx.h(0,t)===s.a?D.aE:D.aZ,1,D.r,-1)
k.push(C.aB(m,C.p(m,new C.y(s.c+" "+s.b,m,D.JL,m,m,m,m,m,m,m,m,m),D.f,m,m,new C.o(r,m,new C.bJ(n,n,n,n),new C.bk(q,q,q,q),m,m,D.n),m,m,m,m,D.ex,m,m,m),D.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new A.e6V(u,d,t,s),m,m,m,m,m,m,!1,D.a4))}w=u.d
w===$&&C.c()
v=w.d
v===$&&C.c()
if(v[w.e].fx.h(0,t)!=null)k.push(C.aB(m,C.p(m,B.fF1,D.f,m,m,new C.o(D.ev,m,m,C.m(12),m,m,D.n),m,m,m,m,D.ex,m,m,m),D.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new A.e6W(u,d,t),m,m,m,m,m,m,!1,D.a4))
return C.bm(!0,new C.D(D.bR,C.x(C.a([B.fB8,D.R,C.bX(D.bB,k,D.bs,8,8)],l),D.E,m,D.e,D.P,0,D.p),m),!0,!1,D.af,!0,!0)},
$S:25}
A.e6U.prototype={
$1(d){return!(d.d>70||d.e)},
$S:z+23}
A.e6V.prototype={
$0(){var w,v,u,t=this
C.a3(t.b,!1).N(null)
w=t.a
v=t.d
w.m(new A.e6T(w,t.c,v))
u=v.d>0||v.e
v=v.b
w.iA(u?v+" is on and playing NGMY ads. Tap it to watch full screen.":v+" is plugged in and running.")
A.fT(820,70,0.25,"tri")},
$S:0}
A.e6T.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.d
w===$&&C.c()
w[u.e].fx.n(0,this.b,this.c.a)
v.iz()},
$S:0}
A.e6W.prototype={
$0(){C.a3(this.b,!1).N(null)
var w=this.a
w.m(new A.e6S(w,this.c))
w.iA("Unplugged.")},
$S:0}
A.e6S.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.d
w===$&&C.c()
w[u.e].fx.W(0,this.b)
v.iz()},
$S:0}
A.e88.prototype={
$1(d){return new C.dY(new A.e86(this.a),null)},
$S:19}
A.e86.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.a,k=new A.e87(l,e),j=l.d
j===$&&C.c()
w=j.d
w===$&&C.c()
j=C.d("TV in "+w[j.e].b,m,m,m,m,m,m,D.df,m,m,m)
w=x.p
v=C.a([],w)
for(u=D.d.gaf(B.a2O),t=new C.f5(u,new A.e8_());t.C();){s=u.gT(0)
r=s.b
q=l.d
p=q.d
p===$&&C.c()
q=p[q.e].k1===s.a?D.aE:D.f5
v.push(k.$3$color(r,new A.e80(l,s),q))}j=C.a([j,D.R,C.bX(D.bB,v,D.bs,8,8)],w)
if(l.d.a.length!==0){v=C.a([],w)
for(o=0;o<3;++o){u={}
t=B.d2L[o]
u.a=null
n=t.a
u.a=n
s=l.d
r=s.d
r===$&&C.c()
s=r[s.e].p1===n?D.aE:D.f5
v.push(k.$3$color(t.b,new A.e81(u,l),s))}D.d.v(j,C.a([B.fom,D.am,C.bX(D.bB,v,D.bs,8,8)],w))}j.push(D.R)
w=C.a([],w)
v=l.d
u=v.d
u===$&&C.c()
v=u[v.e]
if(v.k1!=null){v=v.p2?"\u23fb Turn this TV off":"\u23fb Turn this TV on"
w.push(k.$2(v,new A.e82(l)))}v=l.d
u=v.d
u===$&&C.c()
if(u[v.e].k1!=null&&v.a.length===0)w.push(k.$3$color("\ud83d\uddd1 Take it down",new A.e83(l),D.ev))
if(l.d.a.length===0)w.push(k.$3$color("\ud83d\udcfa A TV in every room, all on",new A.e84(l),D.cS))
if(l.d.a.length===0)w.push(k.$3$color("\u23fb All TVs off",new A.e85(l),D.bl))
j.push(C.bX(D.bB,w,D.bs,8,8))
return C.bm(!0,new C.D(D.bR,C.x(j,D.E,m,D.e,D.P,0,D.p),m),!0,!1,D.af,!0,!0)},
$S:87}
A.e87.prototype={
$3$color(d,e,f){var w=null,v=f.j(0.4),u=C.m(12),t=C.I(f,D.r,1)
return C.aB(w,C.p(w,C.d(d,w,w,w,w,w,w,F.A_,w,w,w),D.f,w,w,new C.o(v,w,t,u,w,w,D.n),w,w,w,w,X.y3,w,w,w),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new A.e7Z(this.a,e,this.b),w,w,w,w,w,w,!1,D.a4)},
$2(d,e){return this.$3$color(d,e,D.f5)},
$S:1791}
A.e7Z.prototype={
$0(){this.b.$0()
this.c.$1(new A.e7Y())
var w=this.a
w.m(w.giP())},
$S:0}
A.e7Y.prototype={
$0(){},
$S:0}
A.e8_.prototype={
$1(d){return d.d>0||d.e},
$S:z+23}
A.e80.prototype={
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
A.e81.prototype={
$0(){var w,v=this.b.d
v===$&&C.c()
w=v.d
w===$&&C.c()
return w[v.e].p1=this.a.a},
$S:0}
A.e82.prototype={
$0(){var w,v=this.a.d
v===$&&C.c()
w=v.d
w===$&&C.c()
v=w[v.e]
return v.p2=!v.p2},
$S:0}
A.e83.prototype={
$0(){var w,v=this.a.d
v===$&&C.c()
w=v.d
w===$&&C.c()
v=w[v.e]
v.k1=null
v.p2=!1},
$S:0}
A.e84.prototype={
$0(){var w,v,u,t=this.a.d
t===$&&C.c()
t=t.gqH()
w=t.length
v=0
for(;v<w;++v){u=t[v]
if(u.k1==null)u.k1="tv100"
if(u.c==="hall")if(u.k2==null)u.k2="tv100"
u.p2=!0}},
$S:0}
A.e85.prototype={
$0(){var w,v,u=this.a.d
u===$&&C.c()
u=u.gqH()
w=u.length
v=0
for(;v<w;++v)u[v].p2=!1},
$S:0}
A.e7V.prototype={
$1(d){return new C.dY(new A.e7T(this.a),null)},
$S:19}
A.e7T.prototype={
$2(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new A.e7U(),e=C.au(C.p(g,g,D.f,g,g,new C.o(D.aZ,g,g,C.m(2),g,g,D.n),g,4,g,g,g,g,g,42),g,g,g),d=x.p,a0=C.B(C.a([C.p(g,G.ao1,D.f,g,g,new C.o(g,g,g,C.m(16),g,B.bZK,D.n),g,52,g,g,g,g,g,52),D.es,B.bBQ],d),D.m,g,D.e,D.j,0,g,g),a1=f.$1("Who walks the house"),a2=C.a([],d)
for(w=B.aFe.gdR(B.aFe),w=w.gaf(w),v=x.s,u=x.N,t=x.ec,s=this.a;w.C();){r=w.gT(w)
q=$.ahe
p=r.a
q=q===p?D.aR.j(0.18):D.c.j(0.06)
o=new C.aQ(18,18)
n=$.ahe===p
m=n?D.aR:D.bz
l=new C.ay(m,n?2:1,D.r,-1)
n=n?D.aR:D.aZ
m=r.b
k=D.d.gI(m.split(" "))
m=C.a(m.split(" "),v)
j=new C.lR(m,1,g,t)
j.vf(m,1,g,u)
j=j.aG(0," ")
p=$.ahe===p?D.aR:D.c
a2.push(new C.D(D.MB,C.aB(g,C.db(g,C.x(C.a([new C.pG(new C.y(k,g,D.pr,g,g,g,g,g,g,g,g,g),n,g,20,g),D.am,new C.y(j,g,new C.F(!0,p,g,g,g,g,12.5,D.H,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g),g,g,g,g,D.a1,g,1,g,g)],d),D.m,g,D.b7,D.j,0,D.p),g,g,D.b8,new C.o(q,g,new C.bJ(l,l,l,l),new C.bk(o,o,o,o),g,g,D.n),D.hm,g,g,g,D.FU,g,g,92),D.y,!1,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,new A.e7P(s,a4,r),g,g,g,g,g,g,!1,D.a4),g))}a2=C.ct(a2,g,g,g,g,D.aM,!1)
w=f.$1("How long")
v=D.c.j(0.06)
u=C.m(16)
t=C.a([],d)
for(i=0;i<5;++i){h=B.dnl[i]
r=s.db===h
q=r?D.aE:D.K
p=new C.aQ(12,12)
if(h<60)o=""+h+" seconds"
else o=h===60?"1 minute":""+(h/60|0)+" minutes"
r=r?D.w:D.ae
t.push(new C.bA(1,D.bd,C.aB(g,C.db(g,new C.cn(D.A,g,g,new C.y(o,g,new C.F(!0,r,g,g,g,g,12.5,D.u,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g),g,D.L,g,g,g,g,g,g,g),g),g,g,D.b8,new C.o(q,g,g,new C.bk(p,p,p,p),g,g,D.n),D.hm,g,g,g,D.tT,g,g,g),D.y,!1,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,new A.e7Q(s,a4,h),g,g,g,g,g,g,!1,D.a4),g))}v=C.p(g,C.B(t,D.m,g,D.e,D.j,0,g,g),D.f,g,g,new C.o(v,g,g,u,g,g,D.n),g,g,g,g,D.ey,g,g,g)
u=C.aB(g,C.p(g,B.eW7,D.f,g,g,new C.o(g,g,g,C.m(18),C.a([new C.ac(0,D.G,D.aw.j(0.35),D.cv,16)],x.V),B.c_I,D.n),g,56,g,g,g,g,g,g),D.y,!1,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,new A.e7R(s,a3),g,g,g,g,g,g,!1,D.a4)
t=D.c.j(0.06)
r=C.m(18)
return C.p(g,C.bm(!0,C.ce(C.x(C.a([e,D.aO,a0,a1,new C.a8(g,96,a2,g),w,v,D.dY,u,D.ad,C.aB(g,C.p(g,B.eW1,D.f,g,g,new C.o(t,g,C.I(D.bz,D.r,1),r,g,g,D.n),g,g,g,g,D.bC,g,g,g),D.y,!1,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,new A.e7S(s,a3),g,g,g,g,g,g,!1,D.a4)],d),D.E,g,D.e,D.P,0,D.p),D.t,g,D.y,g,D.ajq,g,g,D.ag),!0,!1,D.af,!0,!0),D.f,g,g,B.b2o,g,g,g,g,g,g,g,g)},
$S:158}
A.e7U.prototype={
$1(d){var w=null
return new C.D(G.aia,C.d(d.toUpperCase(),w,w,w,w,w,w,N.rZ,w,w,w),w)},
$S:146}
A.e7P.prototype={
$0(){var w=this.c
this.b.$1(new A.e7N(w))
A.fUp(w.a)
this.a.m(new A.e7O())},
$S:0}
A.e7N.prototype={
$0(){return $.ahe=this.a.a},
$S:0}
A.e7O.prototype={
$0(){},
$S:0}
A.e7Q.prototype={
$0(){return this.b.$1(new A.e7M(this.a,this.c))},
$S:0}
A.e7M.prototype={
$0(){return this.a.db=this.b},
$S:0}
A.e7R.prototype={
$0(){C.a3(this.b,!1).N(null)
var w=this.a
w.cx0(w.db)},
$S:0}
A.e7S.prototype={
$0(){C.a3(this.b,!1).N(null)
this.a.b6l(45,!0)},
$S:0}
A.e7w.prototype={
$0(){var w=this.a,v=w.d
v===$&&C.c()
v.e=this.b
w.ax=null
w.iz()},
$S:0}
A.e7x.prototype={
$1(d){return this.a.cBd()},
$S:11}
A.e7y.prototype={
$0(){},
$S:0}
A.e7W.prototype={
$0(){return this.a.dy=this.b.as},
$S:0}
A.e7L.prototype={
$0(){var w=this.b
w.iz()
w.az=this.a.a;++w.aE},
$S:0}
A.e7D.prototype={
$0(){var w=this.a
w.cx=null
w.dy=""},
$S:0}
A.e7E.prototype={
$0(){},
$S:0}
A.e7v.prototype={
$0(){},
$S:0}
A.e7C.prototype={
$0(){},
$S:0}
A.e8j.prototype={
$0(){return this.a.id=!0},
$S:0}
A.e8k.prototype={
$0(){return this.a.k2=!0},
$S:0}
A.e8l.prototype={
$0(){return this.a.k3=!0},
$S:0}
A.e8m.prototype={
$1(d){return B.aOF.q(0,d.b)},
$S:z+3}
A.e8c.prototype={
$1(d){var w
if(d.b==="gasstation"){w=this.a
w=Math.sqrt(Math.pow(w.f-d.c,2)+Math.pow(w.r-d.d,2))<135}else w=!1
return w},
$S:z+3}
A.e8d.prototype={
$0(){return this.a.aOt(B.aOX)},
$S:0}
A.e8e.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.d
w===$&&C.c()
D.d.W(w[u.e].x,this.b)
v.ak="crate"
v.m(v.giP())
v.ef("You picked up a crate. Carry it to the shop and walk onto the green mat by the counter to sell it at the market.",!0)
A.fT(700,60,0.25,"tri")
return null},
$S:0}
A.e8f.prototype={
$0(){return this.a.aaO(this.b)},
$S:0}
A.e8g.prototype={
$0(){return this.a.bOX(this.b)},
$S:0}
A.e8h.prototype={
$0(){return this.a.bRz(this.b)},
$S:0}
A.e8i.prototype={
$0(){return this.b.cK=this.a.a},
$S:0}
A.e5v.prototype={
$0(){},
$S:0}
A.e6b.prototype={
$0(){var w=this.a
w.y1=null
w.y2=!0},
$S:0}
A.e68.prototype={
$1(d){return d.c==="outside"},
$S:z+4}
A.e69.prototype={
$1(d){return d.b==="hospital"},
$S:z+3}
A.e6a.prototype={
$1(d){return!d.e&&d.r<0},
$S:z+17}
A.e5V.prototype={
$1(d){return d.c==="outside"},
$S:z+4}
A.e5W.prototype={
$1(d){return d.a.b===this.a.d},
$S:z+17}
A.e7q.prototype={
$0(){},
$S:0}
A.e5P.prototype={
$0(){return this.a.k3=!0},
$S:0}
A.e7e.prototype={
$1(d){return d.b==="hospital"},
$S:z+3}
A.e7f.prototype={
$0(){return this.a.go=!1},
$S:0}
A.e7r.prototype={
$0(){var w=this.a
w.iz()
w.adP(!0)},
$S:0}
A.e7s.prototype={
$1(d){return this.a.c6f()},
$S:11}
A.e61.prototype={
$1(d){return!D.d.b3(this.a.d,new A.e60(d))},
$S:34}
A.e60.prototype={
$1(d){return d.a===this.a},
$S:z+18}
A.e62.prototype={
$1(d){return d.a===this.a.a},
$S:z+18}
A.e7t.prototype={
$1(d){var w,v,u=this.a
if(u.c==null)return
w=++u.S
if(w>36){v=u.bz
u.AW()
if(v!=null)u.aB_("Nobody answered the phone")
return}if(w%8<4){A.fT((w&1)===0?1046:1318,160,0.3,"sine")
if(D.o.F(u.S,8)===0)C.T7()}},
$S:11}
A.e7u.prototype={
$0(){},
$S:0}
A.e7B.prototype={
$0(){var w=this.a
w.bz=w.by=null},
$S:0}
A.e6q.prototype={
$4$col$on(d,e,f,g){var w=null,v=g?f.j(0.45):D.w.j(0.62),u=C.m(18),t=C.I(f,D.r,1.8)
return C.aB(w,C.p(w,C.d(d,w,w,w,w,w,w,D.iY,w,w,w),D.f,w,w,new C.o(v,w,t,u,w,w,D.n),w,w,w,D.ZV,B.bB6,w,w,w),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new A.e6r(e),w,w,w,w,!1,D.a4)},
$2(d,e){return this.$4$col$on(d,e,D.bo,!1)},
$3$col(d,e,f){return this.$4$col$on(d,e,f,!1)},
$3$on(d,e,f){return this.$4$col$on(d,e,D.bo,f)},
$S:1792}
A.e6r.prototype={
$1(d){return this.a.$0()},
$S:23}
A.e6z.prototype={
$7$about$avatar$glow$onAnswer$onDecline$onLater$who(d,e,f,g,h,i,j){var w=null,v=new A.e6A(),u=Math.min(this.a-28,340),t=C.m(30),s=C.I(D.aZ,D.r,2),r=C.a([new C.ac(0,D.G,f.j(0.35),D.J,24)],x.V),q=x.p,p=C.B(C.a([e,D.es,C.E(C.x(C.a([B.fCz,D.bA,C.d(j,w,1,D.a1,w,w,w,D.a8v,w,w,w),D.bA,C.d(d,w,2,D.a1,w,w,w,K.a92,w,w,w)],q),D.E,w,D.e,D.P,0,D.p),1)],q),D.m,w,D.e,D.j,0,w,w),o=C.a([v.$4(B.bIK,"Decline",D.aw,h)],q)
if(i!=null)o.push(v.$4(D.jO,"Later",D.aE,i))
o.push(v.$5$big(D.it,"Answer",D.be,g,!0))
return C.p(w,C.x(C.a([p,D.aA,C.B(o,D.E,w,D.e,D.j,0,w,w)],q),D.ai,w,D.e,D.P,0,D.p),D.f,w,w,new C.o(w,w,s,t,r,B.z1,D.n),w,w,w,D.d3,Ae.ZB,w,w,u)},
$6$about$avatar$glow$onAnswer$onDecline$who(d,e,f,g,h,i){return this.$7$about$avatar$glow$onAnswer$onDecline$onLater$who(d,e,f,g,h,null,i)},
$S:1793}
A.e6A.prototype={
$5$big(d,e,f,g,h){var w=null,v=h?58:50,u=h?58:50
return C.E(C.aB(w,C.x(C.a([C.p(w,C.X(d,D.c,w,w,w,h?30:26),D.f,w,w,new C.o(f,w,w,w,w,w,D.a6),w,u,w,w,w,w,w,v),D.fI,C.d(e,w,w,w,w,w,w,L.A1,w,w,w)],x.p),D.m,w,D.e,D.P,0,D.p),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new A.e6B(g),w,w,w,w,!1,D.a4),1)},
$4(d,e,f,g){return this.$5$big(d,e,f,g,!1)},
$S:1794}
A.e6B.prototype={
$1(d){return this.a.$0()},
$S:23}
A.e6t.prototype={
$0(){var w=this.a
w.AW()
w.aB_("You turned the call down")},
$S:0}
A.e6u.prototype={
$0(){var w=this.a
w.AW()
w.eF.push(this.b)
w.ef("Saved on your waiting list. You will be taken there when you are free.",!0)},
$S:0}
A.e6s.prototype={
$0(){var w=this.b,v=this.a
v.AW()
v.cI=w
v.hK=0
v.awj(w)},
$S:0}
A.e6v.prototype={
$0(){var w=this.a
w.AW()
w.czy(this.b)},
$S:0}
A.e6y.prototype={
$2(d,e){var w=this.a
w.b0=d
w.bb=e},
$S:245}
A.e6w.prototype={
$0(){var w=this.a
return w.m(new A.e6p(w))},
$S:0}
A.e6p.prototype={
$0(){var w=this.a
return w.bh=!w.bh},
$S:0}
A.e6x.prototype={
$0(){var w=this.a,v=w.aH
if(v==null)v=null
else{v=v.at
v===$&&C.c()}w=v==null?w.aB:v
if(w!=null)if(w.Q<=0.01)w.as=160
return null},
$S:0}
A.e6c.prototype={
$1(d){var w=this.a,v=w.p4
w=w.RG
return v==="ptrap"?new A.a9e(w,null):new A.a4E(w,null)},
$S:1795}
A.e6d.prototype={
$1(d){var w=this.a
return new A.DF(w.p4,w.R8,null)},
$S:z+25}
A.e8n.prototype={
$1(d){var w=this.a
return new A.DF(w.a,w.c,null)},
$S:z+25}
A.e6f.prototype={
$1(d){return A.cfR(!1,this.a.CW,!1)},
$S:z+38}
A.e6e.prototype={
$1(d){return new A.VR(this.a.fr,null)},
$S:z+68}
A.e3S.prototype={
$1(d){var w,v,u,t,s,r,q,p=null,o=this.a,n=o.d
n===$&&C.c()
w=n.d
w===$&&C.c()
n=C.d("Add to "+w[n.e].b,p,p,p,p,p,p,D.df,p,p,p)
w=x.p
v=C.a([],w)
for(u=0;u<3;++u){t={}
s=B.dp0[u]
t.a=null
t.a=s.a
r=new C.aQ(12,12)
q=new C.ay(D.b1,1,D.r,-1)
v.push(C.aB(p,C.p(p,new C.y(s.b,p,D.t0,p,p,p,p,p,p,p,p,p),D.f,p,p,new C.o(D.f5.j(0.4),p,new C.bJ(q,q,q,q),new C.bk(r,r,r,r),p,p,D.n),p,p,p,p,X.y3,p,p,p),D.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new A.e3R(t,o,d),p,p,p,p,p,p,!1,D.a4))}return C.bm(!0,new C.D(D.bR,C.x(C.a([n,D.au,B.fJx,D.ad,C.bX(D.bB,v,D.bs,8,8)],w),D.E,p,D.e,D.P,0,D.p),p),!0,!1,D.af,!0,!0)},
$S:25}
A.e3R.prototype={
$0(){C.a3(this.c,!1).N(null)
this.b.bzD(this.a.a)},
$S:0}
A.e3M.prototype={
$1(d){return d.b==="back"},
$S:z+16}
A.e3N.prototype={
$1(d){return d.b==="back"},
$S:z+16}
A.e3O.prototype={
$1(d){return Math.abs(d-this.a)>13},
$S:127}
A.e3P.prototype={
$0(){var w=this
w.b.id.push(new A.aV8(w.c,w.d,new A.Ck(C.U(x.S,x.N))))
w.a.iz()},
$S:0}
A.e65.prototype={
$0(){var w,v=this,u=v.b,t=u.c,s=v.c,r=v.d
u.c=t+(s?D.o.gVs(r)*40:r)
t=u.d
r=v.e
u.d=t+(s?D.o.gVs(r)*40:r)
t=v.a
r=t.d
r===$&&C.c()
w=r.d
w===$&&C.c()
w[r.e].a3w(0,u)
t.iz()},
$S:0}
A.e7X.prototype={
$0(){var w,v,u,t=this.b
t.e=D.o.F(t.e+1,4)
w=this.a
v=w.d
v===$&&C.c()
u=v.d
u===$&&C.c()
u[v.e].a3w(0,t)
w.iz()},
$S:0}
A.e73.prototype={
$0(){var w=this.b
w.f=(w.f+1)%6
this.a.iz()},
$S:0}
A.e74.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.d
w===$&&C.c()
D.d.W(w[u.e].x,this.b)
v.at=v.Q=0
v.iz()},
$S:0}
A.e3Q.prototype={
$0(){var w=this.a,v=this.b.a
w.Q=v
w.at=100+v
w.iz()},
$S:0}
A.e51.prototype={
$0(){return this.a.adQ(-6,0)},
$S:0}
A.e52.prototype={
$0(){return this.a.adQ(6,0)},
$S:0}
A.e53.prototype={
$0(){return this.a.adQ(0,-6)},
$S:0}
A.e54.prototype={
$0(){return this.a.adQ(0,6)},
$S:0}
A.e55.prototype={
$0(){return this.a.bzG(this.b.a)},
$S:0}
A.e56.prototype={
$0(){var w=this.a
return w.m(new A.e50(w))},
$S:0}
A.e50.prototype={
$0(){return this.a.as=-1},
$S:0}
A.e57.prototype={
$0(){var w=this.a
w.m(new A.e5_(w,this.b))},
$S:0}
A.e5_.prototype={
$0(){var w,v=this.a,u=v.as,t=this.b,s=v.d
if(u<0){s===$&&C.c()
u=s.d
u===$&&C.c()
D.d.hs(u[s.e].z,0,3,t)}else{s===$&&C.c()
w=s.d
w===$&&C.c()
w[s.e].z[u]=t}v.iz()},
$S:0}
A.e58.prototype={
$0(){var w=this.a
w.m(new A.e4Z(w,this.b))},
$S:0}
A.e4Z.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.d
w===$&&C.c()
w[u.e].Q=this.b
v.iz()},
$S:0}
A.e59.prototype={
$0(){var w=this.a
w.m(new A.e4Y(w))},
$S:0}
A.e4Y.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.d
w===$&&C.c()
u=w[u.e]
u.go=u.go==="fan"?"light":"fan"
v.iz()},
$S:0}
A.e5a.prototype={
$0(){var w=this.a
w.m(new A.e4X(w,this.b))},
$S:0}
A.e4X.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.d
w===$&&C.c()
w[u.e].as=this.b
v.iz()},
$S:0}
A.e5b.prototype={
$0(){return this.a.Ar(this.b.d)},
$S:0}
A.e8q.prototype={
$0(){return C.a3(this.a,!1).iW()},
$S:0}
A.e8s.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.e8p(w))},
$S:0}
A.e8p.prototype={
$0(){return this.a.az=null},
$S:0}
A.e8r.prototype={
$3(d,e,f){var w=null
return C.dd(C.clz(D.A,w,w,w,w,D.ce,D.xg,w,this.a.az,!1,!1,!1,w,D.p8,1,w),e)},
$S:106}
A.e4E.prototype={
$0(){return this.a.zV("calls")},
$S:0}
A.e4F.prototype={
$0(){return this.a.zV("hospital")},
$S:0}
A.e4G.prototype={
$0(){return this.a.zV("shop")},
$S:0}
A.e4K.prototype={
$0(){return this.a.zV("people")},
$S:0}
A.e4L.prototype={
$0(){return this.a.Ar(10)},
$S:0}
A.e4M.prototype={
$0(){var w=this.a
return w.m(new A.e4D(w))},
$S:0}
A.e4D.prototype={
$0(){return this.a.k2=!0},
$S:0}
A.e4N.prototype={
$0(){var w=this.a
return w.m(new A.e4C(w))},
$S:0}
A.e4C.prototype={
$0(){return this.a.k3=!0},
$S:0}
A.e4O.prototype={
$0(){var w=this.a
return w.m(new A.e4B(w))},
$S:0}
A.e4B.prototype={
$0(){var w=this.a
return w.y1=w.cI},
$S:0}
A.e4P.prototype={
$0(){var w=this.a,v=w.eF.length,u=v===1?"":"s"
return w.ef(""+v+" job"+u+" waiting. You are taken to the next one when you finish this one.",!0)},
$S:0}
A.e4Q.prototype={
$0(){var w=this.a
return w.m(new A.e4A(w))},
$S:0}
A.e4A.prototype={
$0(){return this.a.go=!0},
$S:0}
A.e4R.prototype={
$0(){var w=this.a
return w.p4?w.a2e():w.m(new A.e4z(w))},
$S:0}
A.e4z.prototype={
$0(){return this.a.R8=!0},
$S:0}
A.e4H.prototype={
$0(){var w=this.a
return w.m(new A.e4y(w))},
$S:0}
A.e4y.prototype={
$0(){var w=this.a
return w.h3=!w.h3},
$S:0}
A.e4I.prototype={
$0(){var w=this.a
return w.m(new A.e4x(w))},
$S:0}
A.e4x.prototype={
$0(){return this.a.ah=!0},
$S:0}
A.e4J.prototype={
$0(){var w=this.a
return w.m(new A.e4w(w))},
$S:0}
A.e4w.prototype={
$0(){var w=this.a
return w.y=!w.y},
$S:0}
A.e3Z.prototype={
$0(){var w=this.a.ghH()
w=w==null?null:w.r
return w==null?0:w},
$S:98}
A.e4c.prototype={
$0(){return this.a.xO()},
$S:0}
A.e4b.prototype={
$1(d){return d<=5},
$S:34}
A.e4_.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n=null,m=this.a,l=m.aH,k=m.CW
if(l!=null){m=k.gii()
k=B.aFf.h(0,$.ahe)
if(k==null)k=B.SM
k=l.cLS(m/1000,k)
m=k}else{l=m.d
l===$&&C.c()
w=l.d
w===$&&C.c()
l=w[l.e]
w=k.gii()
v=m.cjV()
u=B.aFf.h(0,$.ahe)
if(u==null)u=B.SM
t=m.fr
s=m.r
r=m.bMQ()
if(m.ak==null){q=m.gpe()
if(q==null)q=n
else{q=q.x
q=(q==null?n:q.r)===!0}q=q===!0}else q=!0
p=m.d
o=p.d
o===$&&C.c()
if(o[p.e].c!=="outside")k=B.HA
else{p=m.gpe()
p=p==null?n:p.alI(k.gii()/1000)
if(p==null)p=B.HA
p=C.C(p,x.hg)
o=m.gKi()
k=o==null?n:o.alI(k.gii()/1000)
D.d.v(p,k==null?B.HA:k)
k=p}l=C.C(A.i2v(l,w/1000,q,k,r,s,v,u,t),x.fX)
k=m.d
w=k.d
w===$&&C.c()
if(w[k.e].c==="outside")D.d.v(l,m.cBl())
k=!0
if(m.cI==null){w=m.gpe()
if((w==null?n:w.x)==null){k=m.gKi()
k=(k==null?n:k.f)!=null}}D.d.v(l,k?m.cqf():B.ayn)
m=l}return m},
$S:z+10}
A.e40.prototype={
$1(d){var w,v,u=this.a
if(u.aH==null){w=u.d
w===$&&C.c()
v=w.d
v===$&&C.c()
w=v[w.e].c==="outside"}else w=!1
return w?A.idc(u.CW.gii()/1000):B.wp},
$S:z+71}
A.e4d.prototype={
$3(d,e,f){var w=null,v=D.dJ.j(0.82),u=C.m(18),t=C.I(D.bb,D.r,2)
return C.p(w,C.d(e,w,w,w,w,w,w,B.fmt,w,w,w),D.f,w,w,new C.o(v,w,t,u,w,w,D.n),w,w,w,w,B.bzl,w,w,w)},
$S:1796}
A.e43.prototype={
$0(){var w=this.a,v=w.d
v===$&&C.c()
return v.a.length!==0?w.Ec():w.cl9(this.b)},
$S:0}
A.e4e.prototype={
$0(){var w=this.a
w.m(new A.e3Y(w))
w.xO()},
$S:0}
A.e3Y.prototype={
$0(){var w=this.a
w.x=!w.x
w.iz()},
$S:0}
A.e4f.prototype={
$0(){var w=this.a
return w.cx!=null?w.RO():w.cBc()},
$S:0}
A.e4g.prototype={
$0(){var w=this.a
w.m(new A.e3X(w))
w.xO()
if(w.z)w.iA("Drag to turn all the way round. Double tap a spot on the floor to walk there.")},
$S:0}
A.e3X.prototype={
$0(){var w=this.a,v=!w.z
w.z=v
if(v&&w.cx!=null)w.RO()
w.iz()},
$S:0}
A.e4h.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.d
w===$&&C.c()
return v.Ar(w[u.e].c!=="outside"?11:10)},
$S:0}
A.e4i.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.d
w===$&&C.c()
if(w[u.e].c!=="outside")v.Ar(11)
v.zV("calls")},
$S:0}
A.e41.prototype={
$0(){var w=this.a
return w.m(new A.e3W(w))},
$S:0}
A.e3W.prototype={
$0(){var w=this.a,v=!w.w
w.w=v
if(v)w.iA("Voltage tester in your hand: tap an outlet, a switch or the light.")},
$S:0}
A.e42.prototype={
$0(){var w=this.a
return w.m(new A.e3V(w))},
$S:0}
A.e3V.prototype={
$0(){var w=this.a
return w.y=!w.y},
$S:0}
A.e44.prototype={
$0(){return this.a.Pz("look")},
$S:0}
A.e45.prototype={
$0(){return this.a.Pz("furniture")},
$S:0}
A.e46.prototype={
$0(){return this.a.Pz("walls")},
$S:0}
A.e47.prototype={
$0(){return this.a.Pz("floor")},
$S:0}
A.e48.prototype={
$0(){return this.a.Pz("ceiling")},
$S:0}
A.e49.prototype={
$0(){return this.a.Pz("doors")},
$S:0}
A.e4a.prototype={
$0(){return C.a3(this.a,!1).cg(C.e_(new A.e3U(),!1,null,x.H))},
$S:0}
A.e3U.prototype={
$1(d){return B.aGe},
$S:z+72}
A.e72.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=C.aH(d,m,x.w).w,k=this.a,j=k.d
j===$&&C.c()
w=x.p
j=C.a([B.fxM,D.au,C.d("Wiring "+j.gcXh()+"/"+k.d.gqH().length+" \xb7 Plumbing "+k.d.gcU1()+"/"+k.d.gcU0(),m,m,m,m,m,m,B.Jx,m,m,m),D.R],w)
for(v=k.d.gqH(),u=v.length,t=0;t<v.length;v.length===u||(0,C.M)(v),++t){s=v[t]
r=D.c.j(0.05)
q=new C.aQ(12,12)
p=new C.ay(s.gkF()&&s.gjM()?D.bo.j(0.5):D.bz,1,D.r,-1)
if(s.gkF()&&s.gjM())o="\u2705 finished"
else{o=s.gkF()?"":"\u26a1 wiring  "
o+=s.gjM()?"":"\ud83d\udeb0 plumbing"}n=s.gkF()&&s.gjM()?D.eo:D.ae
j.push(C.aB(m,C.p(m,new C.cb(D.aM,D.e,D.j,D.m,m,D.p,m,0,C.a([new C.bA(1,D.bd,new C.y(s.b,m,B.aSo,m,m,m,m,m,m,m,m,m),m),new C.y(o,m,new C.F(!0,n,m,m,m,m,12,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m,m,m,m,m,m,m)],w),m),D.f,m,m,new C.o(r,m,new C.bJ(p,p,p,p),new C.bk(q,q,q,q),m,m,D.n),m,m,m,D.eG,D.bU,m,m,m),D.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new A.e7_(k,d,s),m,m,m,m,m,m,!1,D.a4))}j.push(D.N)
j.push(C.dQ(B.fuO,new A.e70(k,d),m))
j.push(D.N)
j.push(C.bG(B.fr0,new A.e71(k,d),m))
return C.bm(!0,new C.cT(new C.aX(0,1/0,0,l.a.b*0.75),C.ct(j,m,D.bR,m,m,D.ag,!0),m),!0,!1,D.af,!0,!0)},
$S:25}
A.e7_.prototype={
$0(){C.a3(this.b,!1).N(null)
this.a.Ar(this.c.a)},
$S:0}
A.e70.prototype={
$0(){C.a3(this.b,!1).N(null)
var w=this.a
w.m(new A.e6Z(w))
w.iA("Every room needs its wiring and plumbing again. Wire the whole house from the start.")},
$S:0}
A.e6Z.prototype={
$0(){var w=this.a,v=w.d
v===$&&C.c()
v.cQG()
w.iz()},
$S:0}
A.e71.prototype={
$0(){C.a3(this.b,!1).N(null)
$.DS=A.aVe(D.o.F(Date.now(),1e5))
var w=this.a
w.m(new A.e6Y(w))
w.adP(!0)},
$S:0}
A.e6Y.prototype={
$0(){var w=this.a,v=$.DS
v.toString
w.d=v
w.r="look"
w.Q=0
w.as=-1
w.at=0
w.iz()},
$S:0}
A.dqY.prototype={
$1(d){var w,v,u,t,s,r=d.b,q=14*this.b,p=D.k.e8(r.a,q),o=D.k.e8(r.b,q)
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
A.f03.prototype={
$0(){return this.b.d=this.a.a},
$S:0}
A.f02.prototype={
$0(){return this.a.d=null},
$S:0}
A.f05.prototype={
$1(d){return this.a.aYY(d.gfg())},
$S:77}
A.f06.prototype={
$1(d){return this.a.aYY(d.gfg())},
$S:234}
A.f07.prototype={
$1(d){return this.a.aYX()},
$S:118}
A.f04.prototype={
$1(d){return this.a.aYX()},
$S:173}
A.frJ.prototype={
$1$speed(d){var w,v,u,t=null,s=this.a,r=s.a
if(r.length===0)return
w=s.b
v=s.d
u=s.c
u=u.length===0?t:D.d.gI(u)
this.b.push(new A.M5(r,w,d,8,u,t,v,t,t))
v=x.o
s.a=C.a([],v)
s.b=C.a([],v)
s.c=C.a([],x.s)
s.d=!1},
$0(){return this.$1$speed(130)},
$S:1797}
A.frQ.prototype={
$3$note(d,e,f){var w=this.a
w.a.push(d)
w.b.push(e)
if(f!=null)w.c.push(f)},
$2(d,e){return this.$3$note(d,e,null)},
$S:z+73}
A.frL.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m,l,k
for(w=this.a.x,v=w.length,u=d.a,t=d.c,s=d.b,r=0;r<v;++r){q=w[r]
p=q.b
if(p!=="billboard"&&p!=="cornersign"&&p!=="townsign"&&p!=="adboard")continue
A:{if("townsign"===p){p=B.a78
break A}if("cornersign"===p){p=B.a7a
break A}if("adboard"===p){p=B.a77
break A}p=B.a79
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
A.frR.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
for(w=this.a.x,v=w.length,u=0;u<=1;u+=0.02){t=A.o_(d,e,u)
for(s=t.a,r=t.c,q=t.b,p=0;p<v;++p){o=w[p]
n=o.b
if(n!=="billboard"&&n!=="cornersign"&&n!=="townsign"&&n!=="adboard")continue
A:{if("townsign"===n){n=B.a78
break A}if("cornersign"===n){n=B.a7a
break A}if("adboard"===n){n=B.a77
break A}n=B.a79
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
A.frK.prototype={
$2(d,e){return this.a.$2(d,e)!=null},
$S:z+75}
A.frH.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this.a.$2(d,e)
if(i==null)return null
w=i.b
A:{if("townsign"===w){v=B.a78
break A}if("cornersign"===w){v=B.a7a
break A}if("adboard"===w){v=B.a77
break A}v=B.a79
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
n=new A.frI(d,e)
o=this.b
k=!o.$1(m)
j=!o.$1(l)
if(k&&j)return n.$1(m)<=n.$1(l)?m:l
if(k)v=m
else v=j?l:null
return v},
$S:z+76}
A.frI.prototype={
$1(d){return d.aF(0,this.a).guI()+this.b.aF(0,d).guI()},
$S:z+77}
A.frB.prototype={
$3(d,e,f){var w,v,u,t=this
if(!t.a.$2(d,e))return B.rt
w=f>=3?null:t.b.$2(d,e)
if(w==null)return C.a([new A.r((d.a+e.a)/2,430,(d.c+e.c)/2)],x.o)
v=f+1
u=C.C(t.$3(d,w,v),x.Q)
u.push(w)
D.d.v(u,t.$3(w,e,v))
return u},
$2(d,e){return this.$3(d,e,0)},
$S:z+78}
A.frN.prototype={
$7$note(a2,a3,a4,a5,a6,a7,a8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=A.hmF(a2),a1=new A.r(a2.c,a4,a2.d)
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
A.frP.prototype={
$1(d){var w=d.b,v=this.a
switch(w){case"townsign":v.$7$note(d,255,250,430,520,60,"The biggest billboard in the city: NGMY Town")
break
case"cornersign":v.$7$note(d,115,120,210,260,50,"A corner billboard: NGMY Town")
break
case"adboard":v.$7$note(d,160,142,330,410,55,"A big NGMY ad billboard")
break
case"tower":v.$7$note(d,430,(w==="hq"?278:A.hm0(B.z4[d.f]))+40,150,210,20,"A tower with NGMY ad boards")
break
case"hq":v.$7$note(d,440,312,190,250,20,"The NGMY company building")
break
default:v.$7$note(d,75,48,130,175,45,"An NGMY billboard")}},
$S:z+26}
A.frO.prototype={
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
D.d.c9(p.a,v,w.h(u,q));++q
D.d.c9(p.b,v,A.o_(s,r,q/(w.gL(u)+1)))}}}},
$S:z+26}
A.frM.prototype={
$1(d){var w
this.b.$0()
w=x.o
this.c.push(new A.M5(C.a([B.h3n,B.fQ1,B.fS2],w),C.a([B.h3U,B.fRi,B.fUE],w),55,8,"Inside the "+B.hr.h(0,d.b).a.toLowerCase(),d,!1,null,null))
this.a.d=!0},
$S:z+26}
A.frC.prototype={
$1(d){return d.b==="townsign"},
$S:z+3}
A.frD.prototype={
$2(d,e){var w=this.a
return D.k.aL(Math.pow(d.c-w.a.a,2)+Math.pow(d.d-w.a.c,2),Math.pow(e.c-w.a.a,2)+Math.pow(e.d-w.a.c,2))},
$S:z+19}
A.frA.prototype={
$1(d){return Math.atan2(d.d-1000,d.c)},
$S:z+102}
A.frE.prototype={
$2(d,e){var w=this.a
return J.B2(w.$1(d),w.$1(e))},
$S:z+19}
A.frF.prototype={
$1(d){return d.b==="bighouse"},
$S:z+3}
A.frG.prototype={
$1(d){return d.b===this.a},
$S:z+3}
A.ce5.prototype={
$0(){var w=0,v=C.j(x.P),u=1,t=[],s,r,q,p,o,n
var $async$$0=C.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
w=6
return C.b($.r_().jI(0,"assets/images/ngmy_logo.png"),$async$$0)
case 6:s=e
w=7
return C.b(C.fvc(J.eV(J.vt(s)),null),$async$$0)
case 7:r=e
o=$
n=J
w=8
return C.b(r.lF(),$async$$0)
case 8:o.VL=n.a2J(e)
u=1
w=5
break
case 3:u=2
p=t.pop()
$.VL=null
w=5
break
case 2:w=1
break
case 5:return C.h(null,v)
case 1:return C.f(t.at(-1),v)}})
return C.i($async$$0,v)},
$S:51}
A.fIW.prototype={
$4(d,e,f,g){var w,v,u=null,t=e*0.05,s=C.fX(u,u,1,u,C.cZ(u,u,u,u,u,u,u,u,u,C.l(u,u,f,u,u,u,u,u,u,u,u,e,u,u,D.u,u,u,!0,u,t,u,u,u,u,u,u),d),D.a5,D.c8,u,D.dQ,D.c6)
s.eT()
w=s.b.c
v=this.a
if(w>v){s=C.fX(u,u,1,u,C.cZ(u,u,u,u,u,u,u,u,u,C.l(u,u,f,u,u,u,u,u,u,u,u,e*v/w,u,u,D.u,u,u,!0,u,t,u,u,u,u,u,u),d),D.a5,D.c8,u,D.dQ,D.c6)
s.eT()}s.a6(this.b,new C.t(this.c+v/2-s.b.c/2,g))},
$S:1798}
A.fIU.prototype={
$1(d){var w,v,u,t,s,r=null,q=this.a,p=this.b,o=d.d-d.b
if(q!=null){w=q.c
v=q.d
u=Math.min((d.c-d.a)/w,o/v)
o=C.bP(d.gbN(),v*u,w*u)
$.W()
t=C.K()
t.Q=D.ce
p.os(q,new C.a5(0,0,w,v),o,t)}else{s=C.fX(r,r,r,r,C.cZ(r,r,r,r,r,r,r,r,r,C.l(r,r,this.c,r,r,r,r,r,r,r,r,o*0.6,r,r,D.u,r,r,!0,r,r,r,r,r,r,r,r),"NGMY"),D.a5,D.c8,r,D.dQ,D.c6)
s.eT()
q=d.gbN()
o=s.b
w=o.c
o=o.a.c
s.a6(p,q.aF(0,new C.t(w/2,o.gbd(o)/2)))}},
$S:1799}
A.fIT.prototype={
$4$w(d,e,f,g){var w=null,v=C.fX(w,w,w,w,C.cZ(w,w,w,w,w,w,w,w,w,C.l(w,w,this.a,w,w,w,w,w,w,w,w,f,w,w,g,w,w,!0,w,f*0.08,w,w,w,w,w,w),d),D.a5,D.c8,w,D.dQ,D.c6)
v.t0(this.b.a*0.9)
v.a6(this.c,e.aF(0,new C.t(v.b.c/2,0)))},
$3(d,e,f){return this.$4$w(d,e,f,D.u)},
$S:1800}
A.fIV.prototype={
$1(d){var w=null,v=this.a.b*0.16
v=C.fX(w,w,w,w,C.cZ(w,w,w,w,w,w,w,w,w,C.l(w,w,w,w,w,w,w,w,w,w,w,v,w,w,D.u,w,w,!0,w,v*0.08,w,w,w,w,w,w),d),D.a5,D.c8,w,D.dQ,D.c6)
v.eT()
return v.b.c},
$S:704}
A.fs6.prototype={
$2(d,e){return this.a===d?e:0},
$S:705}
A.frT.prototype={
$1(d){return d.b==="right"},
$S:z+16}
A.fs3.prototype={
$0(){var w=C.a([],x.z),v=new A.fk(w)
v.f=1
v.x=$.dP=$.dP+1
v.aO(B.h6d,B.fUM,B.AY)
v.aW(B.fPQ,B.h_L,B.hO,0.5)
v.aO(B.aUq,B.h1k,B.AY)
v.aO(B.aUq,B.fYu,B.AY)
return w},
$S:z+82}
A.fs4.prototype={
$1(d){var w=this,v=w.a,u=v.b
A:{if("left"===u){v=A.o8(d,0,1.5707963267948966,new A.r(-w.b/2,0,v.c+w.c/2-40))
break A}if("right"===u){v=A.o8(d,0,-1.5707963267948966,new A.r(w.b/2,0,v.c+w.c/2-40))
break A}v=A.o8(d,0,0,new A.r(v.c,0,0))
break A}return v},
$S:z+83}
A.frU.prototype={
$1(d){return d.b==="back"},
$S:z+16}
A.frV.prototype={
$1(d){return d.c},
$S:z+84}
A.frW.prototype={
$2(d,e){return e},
$S:78}
A.frX.prototype={
$3(d,e,f){return I.Rz(d,e,0,f+this.a)},
$S:24}
A.frZ.prototype={
$2(a8,a9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this
if(a8==null)return
w=A.aOG(a8)
v=a7.a
u=A.h3L(v,w,a9)
t=u.a
s=u.b
r=u.d
q=t-2.5
p=s-2.5
o=v.p3+a9*2
n=a7.b
m=n.b=730+a9
l=n.x=$.dP=$.dP+1
n.e=5
k=v.c==="hall"
if(!(k&&a9<2))j=!k&&v.p1!=="back"
else j=!0
if(j){i=k?a9===1:v.p1==="left"
k=a7.c
h=i?-k/2:k/2
g=i?1:-1
f=u.c
n.aW(new A.r(h+g*1.4,r,f),new A.r(2.6,s+3,t+3),B.Lj,0.5)
n.aW(new A.r(h+g*2.8,r,f),new A.r(0.2,s,t),F.n3,0.7)
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
k.push(new A.fJ(C.a([new A.r(e,a1,d),new A.r(e,a1,a0),new A.r(e,j,a0),new A.r(e,j,d)],a2),m,new A.fs_(o,v,a9),320,a3,9,1,l,!1))
a4=h+g*0.05
k.push(new A.fJ(C.a([new A.r(a4,a1,a0),new A.r(a4,a1,d),new A.r(a4,j,d),new A.r(a4,j,a0)],a2),m,new A.fs0(o,v,a9),320,a3,9,1,l,!1))}}else{h=u.c
n.aW(new A.r(h,r,1.4),new A.r(t+3,s+3,2.6),B.Lj,0.5)
n.aW(new A.r(h,r,2.8),new A.r(t,s,0.2),F.n3,0.7)
if(v.p2){k=a7.d
j=q/2
a1=h-j
a2=p/2
a3=r+a2
j=h+j
a2=r-a2
a5=x.o
a6=320*p/q
k.push(new A.fJ(C.a([new A.r(a1,a3,2.95),new A.r(j,a3,2.95),new A.r(j,a2,2.95),new A.r(a1,a2,2.95)],a5),m,new A.fs1(o,v,a9),320,a6,9,1,l,!1))
k.push(new A.fJ(C.a([new A.r(j,a3,0.05),new A.r(a1,a3,0.05),new A.r(a1,a2,0.05),new A.r(j,a2,0.05)],a5),m,new A.fs2(o,v,a9),320,a6,9,1,l,!1))}}n.e=n.x=0
v=v.p2?"It is on and playing "+E.kg[D.o.F(o,8)].a+". Tap it to watch full screen with the remote.":"The TV is off. Tap it to turn it on."
a7.e.n(0,m,new A.cW(w.b,v,new A.r(0,r,4),110))},
$S:1803}
A.fs_.prototype={
$3(d,e,f){return I.Rz(d,e,this.a,f+this.b.a+this.c*3)},
$S:24}
A.fs0.prototype={
$3(d,e,f){return I.Rz(d,e,this.a,f+this.b.a+this.c*3)},
$S:24}
A.fs1.prototype={
$3(d,e,f){return I.Rz(d,e,this.a,f+this.b.a+this.c*3)},
$S:24}
A.fs2.prototype={
$3(d,e,f){return I.Rz(d,e,this.a,f+this.b.a+this.c*3)},
$S:24}
A.fs5.prototype={
$2(d,e){var w=this.a,v=w.f,u=w.r
w.f=1
w.r=!1
w.b=0
w.dP(new A.r(d,e,0),new A.r(d,e,2.2),0.7,B.L9,0.7,10)
w.f=v
w.r=u},
$S:245}
A.frY.prototype={
$1(d){return d.b===this.a.a},
$S:z+13}
A.flj.prototype={
$2(d,e){return this.a===d?e:0},
$S:705}
A.flk.prototype={
$5(d,e,f,g,h){var w=d.aa(0,e.aI(0,g)).aa(0,new A.r(0,h,0)),v=this.a
A.kz(v,w.aa(0,f.aI(0,0.1)),e,B.e8,26,30,B.kw,f,0)
A.kz(v,w.aa(0,f.aI(0,0.2)),e,B.e8,22,26,B.hO,f,0.6)
A.kz(v,w.aa(0,f.aI(0,0.3)),e,B.e8,22,1.2,B.kw,f,0)
A.kz(v,w.aa(0,f.aI(0,0.3)),e,B.e8,1.2,26,B.kw,f,0)},
$S:z+85}
A.flf.prototype={
$5(d,e,f,g,h){var w=d.aa(0,e.aI(0,g)),v=this.a,u=v.b
A.kz(v,w.aa(0,new A.r(0,42,0)).aa(0,f.aI(0,0.1)),e,B.e8,34,84,B.kw,f,0)
v.b=h
A.kz(v,w.aa(0,new A.r(0,41,0)).aa(0,f.aI(0,0.2)),e,B.e8,28,80,B.vp,f,0.2)
v.b=0
A.kz(v,w.aa(0,new A.r(0,58,0)).aa(0,f.aI(0,0.3)),e,B.e8,20,26,B.M8,f,0)
A.kz(v,w.aa(0,new A.r(0,22,0)).aa(0,f.aI(0,0.3)),e,B.e8,20,26,B.M8,f,0)
v.aW(w.aa(0,e.aI(0,9)).aa(0,new A.r(0,40,0)).aa(0,f.aI(0,1)),new A.r(2.6,2.6,2.6),B.EC,0.8)
v.b=u},
$S:z+86}
A.flg.prototype={
$5$poster(d,e,f,g,h){var w=C.a([d,e,f,g],x.o),v=h<0?A.h3b():new A.flh(h),u=h===0,t=u?1000:256
u=u?424:256
return this.a.push(new A.fJ(w,0,v,t,u,1,2,this.b,!1))},
$4(d,e,f,g){return this.$5$poster(d,e,f,g,-1)},
$S:z+87}
A.flh.prototype={
$3(d,e,f){return A.fIS(d,e,f,this.a)},
$S:24}
A.fkH.prototype={
$1(d){var w=d.b
return w==="pole"||w==="lamppost"},
$S:z+3}
A.fkI.prototype={
$2(d,e){return D.k.aL(d.c,e.c)},
$S:z+19}
A.fkJ.prototype={
$1(d){return this.a.cy.ai(0,d.a)},
$S:z+3}
A.fkU.prototype={
$1(d){return this.a.k4.q(0,d.a)},
$S:z+3}
A.fl4.prototype={
$1(d){return B.eXZ.q(0,d.b)},
$S:z+3}
A.fli.prototype={
$3(d,e,f){var w=this.b
return A.vp(new A.r(d,e,f),this.a).aa(0,new A.r(w.c,0,w.d))},
$S:z+28}
A.fl9.prototype={
$3(d,e,f){return A.nb(d,e,f,this.a.a+D.k.bm(f/7))},
$S:24}
A.fla.prototype={
$3(d,e,f){return A.nb(d,e,f,this.a.a+D.k.bm(f/7))},
$S:24}
A.flb.prototype={
$3(d,e,f){return A.GP(d,e,f,"NGMY TOWN",this.a)},
$S:24}
A.flc.prototype={
$3(d,e,f){return A.GP(d,e,f,"NGMY TOWN",this.a)},
$S:24}
A.fld.prototype={
$3(d,e,f){return A.nb(d,e,f,this.a.a+D.k.bm(f/7))},
$S:24}
A.fle.prototype={
$3(d,e,f){return A.nb(d,e,f,this.a.a+4+D.k.bm(f/7))},
$S:24}
A.fkK.prototype={
$3(d,e,f){return A.nb(d,e,f,this.a.a+D.k.bm(f/7))},
$S:24}
A.fkL.prototype={
$3(d,e,f){return A.nb(d,e,f,this.a.a+7+D.k.bm(f/7))},
$S:24}
A.fkM.prototype={
$3(d,e,f){return A.nb(d,e,f,this.a.a+3+D.k.bm(f/7))},
$S:24}
A.fkN.prototype={
$3(d,e,f){return A.nb(d,e,f,this.a.a+5+D.k.bm(f/7))},
$S:24}
A.fkO.prototype={
$3(d,e,f){return A.nb(d,e,f,this.a.a+1+D.k.bm(f/7))},
$S:24}
A.fkP.prototype={
$3(d,e,f){return A.nb(d,e,f,this.a.a+2+D.k.bm(f/7))},
$S:24}
A.fkQ.prototype={
$3(d,e,f){return A.GP(d,e,f,"NGMY COMPANY","Building the movement")},
$S:24}
A.fkR.prototype={
$3(d,e,f){return A.GP(d,e,f,"NGMY","New Global Movement for Youth")},
$S:24}
A.fkS.prototype={
$3(d,e,f){return A.GP(d,e,f,"NGMY COMPANY","Building the movement")},
$S:24}
A.fkT.prototype={
$3(d,e,f){return A.GP(d,e,f,"NGMY","New Global Movement for Youth")},
$S:24}
A.fkV.prototype={
$3(d,e,f){return A.nb(d,e,f,this.a.a+4+D.k.bm(f/7))},
$S:24}
A.fkW.prototype={
$3(d,e,f){return A.nb(d,e,f,this.a.a+6+D.k.bm(f/7))},
$S:24}
A.fkX.prototype={
$3(d,e,f){return A.nb(d,e,f,this.a.a+2+D.k.bm(f/7))},
$S:24}
A.fkY.prototype={
$3(d,e,f){return A.nb(d,e,f,this.a.a+3+D.k.bm(f/7))},
$S:24}
A.fkZ.prototype={
$3(d,e,f){return A.GP(d,e,f,"NGMY STORE","Everything you need")},
$S:24}
A.fl_.prototype={
$3(d,e,f){return A.GP(d,e,f,"NGMY UBER","Rides home")},
$S:24}
A.fl0.prototype={
$3(d,e,f){return A.GP(d,e,f,"NGMY UBER","Rides home")},
$S:24}
A.fl1.prototype={
$3(d,e,f){return A.GP(d,e,f,"NGMY LICENCE","Get your Uber licence")},
$S:24}
A.fl2.prototype={
$3(d,e,f){return A.GP(d,e,f,"NGMY GAS","Open 24 hours")},
$S:24}
A.fl3.prototype={
$3(d,e,f){return A.nb(d,e,f,this.a.a*2+this.b+1)},
$S:24}
A.fl5.prototype={
$1(d){return d.b===this.a.a&&!d.x&&d.Q.length!==0},
$S:z+13}
A.fl6.prototype={
$1(d){return d.b===this.a.a&&d.x},
$S:z+13}
A.fl7.prototype={
$3(d,e,f){return A.fIS(d,e,f,0)},
$S:24}
A.fl8.prototype={
$3(d,e,f){return A.fIS(d,e,f,0)},
$S:24}
A.fv2.prototype={
$1(d){return D.d.q(B.Hr,d.b)},
$S:z+3}
A.fv3.prototype={
$1(d){return d.b===this.a.a},
$S:z+13}
A.fv4.prototype={
$1(d){return d.b===this.a.a},
$S:z+13}
A.fbD.prototype={
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
$S:1804}
A.fbt.prototype={
$3(d,e,f){var w=this.a,v=this.b,u=this.c
return new A.r(w.c+v*d+u*f,e,w.d+u*d-v*f)},
$2(d,e){return this.$3(d,e,0)},
$S:z+88}
A.flR.prototype={
$3(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k=x.z,j=C.a([],k),i=new A.fk(j)
i.b=this.a
i.r=!0
d.$1(i)
k=C.a([],k)
for(j=A.fpJ(j,e,B.f_),w=j.length,v=f.a,u=f.b,t=f.c,s=x.o,r=0;r<j.length;j.length===w||(0,C.M)(j),++r){q=j[r]
p=C.a([],s)
for(o=q.a,n=o.length,m=0;m<o.length;o.length===n||(0,C.M)(o),++m){l=o[m]
p.push(new A.r(l.a+v,l.b+u,l.c+t))}k.push(new A.lN(p,q.b,q.c,q.d,q.e,q.f,q.r,q.w,q.x,q.y,q.z))}D.d.v(this.b.a,k)},
$S:z+89}
A.flD.prototype={
$5(d,e,f,g,h){var w=this.a
w.bcG(d,e,f,h,!1,g,10)
w.fn(e,g*1.04,h,4,8)},
$S:z+90}
A.flE.prototype={
$1(d){return d.fT(B.f_,2.6,B.XI,4,8,0.15)},
$S:z+6}
A.flF.prototype={
$1(d){return d.fn(B.f_,2.6,D.bO,3,8)},
$S:z+6}
A.flG.prototype={
$1(d){return d.fn(B.f_,5.2,this.a,4,10)},
$S:z+6}
A.flJ.prototype={
$1(d){return d.bcG(B.f_,B.a9E,4.9,this.a,!1,6.5,12)},
$S:z+6}
A.flK.prototype={
$1(d){return d.aEf(B.f_,B.fZQ,5.1,B.bdg,!1,12)},
$S:z+6}
A.flL.prototype={
$1(d){return d.fn(B.f_,6.7,this.a,4,10)},
$S:z+6}
A.flM.prototype={
$1(d){return d.fn(B.f_,4.7,this.a,6,12)},
$S:z+6}
A.flN.prototype={
$1(d){return d.fn(B.f_,3,this.a,4,8)},
$S:z+6}
A.flO.prototype={
$1(d){return d.fn(B.f_,5,this.a,5,10)},
$S:z+6}
A.flP.prototype={
$1(d){return d.fn(B.f_,3.6,this.a,3,8)},
$S:z+6}
A.flQ.prototype={
$1(d){return d.fn(B.f_,1,D.c,3,6)},
$S:z+6}
A.flH.prototype={
$1(d){return d.fn(B.f_,1,this.a,3,6)},
$S:z+6}
A.flI.prototype={
$1(d){return d.fn(B.f_,1.9,this.a,4,8)},
$S:z+6}
A.ffr.prototype={
$4(d,e,f,g){var w,v,u,t,s,r,q,p
for(w=this.a,v=e/2+0.2,u=d-8,t=-e/2-0.2,s=d/2+0.2,r=e-8,q=-d/2-0.2,p=f;p<g;p+=22){A.kz(w,new A.r(0,p,v),B.hu,B.e8,u,9,B.hO,B.ig,0.6)
A.kz(w,new A.r(0,p,t),B.qD,B.e8,u,9,B.hO,B.t4,0.6)
A.kz(w,new A.r(s,p,0),B.t4,B.e8,r,9,B.hO,B.hu,0.6)
A.kz(w,new A.r(q,p,0),B.ig,B.e8,r,9,B.hO,B.qD,0.6)}},
$S:1805}
A.fsb.prototype={
$4$alongX(d,e,f,g){var w,v,u,t,s,r,q,p,o,n
for(w=this.a,v=0;v<=f;++v){u=A.o_(d,e,v/f)
w.aD1(new A.r(u.a,4,u.c),B.h6L,B.Xw,!1,0.05)}t=A.o_(d,e,0.5)
for(s=e.aF(0,d).guI()+0.15,r=t.a,q=t.c,p=0;p<2;++p){o=B.dbb[p]
n=g?new A.r(s,0.16,0.3):new A.r(0.3,0.16,s)
w.aW(new A.r(r,o,q),n,B.Xw,0.05)}},
$3(d,e,f){return this.$4$alongX(d,e,f,!0)},
$S:z+92}
A.fs8.prototype={
$2(d,e){return this.a.jd(A.GQ(d,0.35,3),0.06,e,!1,0.4,6)},
$S:z+93}
A.fs7.prototype={
$1(d){return this.a.jd(A.GQ(d,0.5,3),0.14,B.pK,!1,0.3,8)},
$S:z+94}
A.fsa.prototype={
$2$col(d,e){return this.a.jd(A.GQ(d,0.4,3),0.055,e,!1,0.35,6)},
$1(d){return this.$2$col(d,B.XE)},
$S:z+95}
A.fs9.prototype={
$5$h$w(d,e,f,g,h){var w=this.a
w.b=d
w.aW(e,new A.r(h,g,0.06),f,0.3)},
$3(d,e,f){return this.$5$h$w(d,e,f,0.7,0.45)},
$4$w(d,e,f,g){return this.$5$h$w(d,e,f,0.7,g)},
$S:z+96}
A.ft6.prototype={
$0(){return A.fT(1320,120,0.25,"tri")},
$S:0}
A.dOh.prototype={
$1(d){return this.a},
$S:38}
A.dOi.prototype={
$0(){return C.a3(this.a,!1).iW()},
$S:0}
A.dOj.prototype={
$0(){return this.a.ro(A.b_G("","",!1))},
$S:0}
A.dOk.prototype={
$0(){return this.a.ro(B.dye)},
$S:0}
A.dOo.prototype={
$0(){return this.a.ro(A.b_G("wiring","",!1))},
$S:0}
A.dOp.prototype={
$0(){return this.a.ro(A.b_G("plumbing","",!1))},
$S:0}
A.dOq.prototype={
$0(){return this.a.ro(A.b_G("fix","",!1))},
$S:0}
A.dOr.prototype={
$0(){return this.a.ro(A.cfR(!1,null,!1))},
$S:0}
A.dOs.prototype={
$0(){return this.a.ro(A.cfR(!1,null,!0))},
$S:0}
A.dOt.prototype={
$0(){return this.a.ro(B.e2V)},
$S:0}
A.dOu.prototype={
$0(){return this.a.ro(new A.arl(!1,null))},
$S:0}
A.dOv.prototype={
$0(){return this.a.ro(B.dIf)},
$S:0}
A.dOl.prototype={
$0(){var w=this.b.a
w=w==="house"?B.haG:A.b_G("",w,!1)
return this.a.ro(w)},
$S:0}
A.dOm.prototype={
$0(){return this.a.ro(B.dEZ)},
$S:0}
A.dOn.prototype={
$0(){return this.a.ro(B.aGe)},
$S:0}
A.f_U.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new A.f_T())},
$S:11}
A.f_T.prototype={
$0(){},
$S:0}
A.ctE.prototype={
$0(){$.aiS=!$.aiS
A.h6d()
A.fT($.aiS?520:420,60,0.25,"tri")},
$S:0}
A.ctF.prototype={
$0(){$.aiR=!$.aiR
A.h6d()
A.fT($.aiR?520:420,60,0.25,"tri")},
$S:0}
A.fK0.prototype={
$1(d){var w,v,u,t,s,r,q,p,o=null,n=C.aH(d,o,x.w).w,m=this.b,l=this.c,k=l.length,j=x.p,i=C.a([C.d(this.a,o,o,o,o,o,o,D.df,o,o,o),D.au,C.d(""+new C.Z(m,new A.fK_(),C.S(m).k("Z<1>")).gL(0)+" of "+k+" steps done",o,o,o,o,o,o,B.Jx,o,o,o),D.R],j)
for(w=0;w<k;++w){v=D.c.j(0.05)
u=new C.aQ(14,14)
t=new C.ay(m[w]?D.bo.j(0.6):D.bz,1,D.r,-1)
s=m[w]
r=s?"\u2705":""+(w+1)+"."
q=s?D.c:D.aE
p=l[w]
s=s?D.aB:D.c
i.push(C.p(o,new C.cb(D.aM,D.e,D.j,D.E,o,D.p,o,0,C.a([new C.y(r,o,new C.F(!0,q,o,o,o,o,14,D.u,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),o,o,o,o,o,o,o,o,o),D.as,new C.bA(1,D.bd,new C.y(p,o,new C.F(!0,s,o,o,o,o,13,o,o,o,o,o,1.4,o,o,o,o,o,o,o,o,o,o,o,o,o),o,o,o,o,o,o,o,o,o),o)],j),o),D.f,o,o,new C.o(v,o,new C.bJ(t,t,t,t),new C.bk(u,u,u,u),o,o,D.n),o,o,o,D.cu,D.bj,o,o,o))}return C.bm(!0,new C.cT(new C.aX(0,1/0,0,n.a.b*0.75),C.ct(i,o,D.bR,o,o,D.ag,!0),o),!0,!1,D.af,!0,!0)},
$S:25}
A.fK_.prototype={
$1(d){return d},
$S:120}
A.bUS.prototype={
$0(){return C.a3(this.a,!1).iW()},
$S:0}
A.d6L.prototype={
$0(){var w=this.a,v=w.gep(0),u=this.b
v.r=u==="practice"
u=u==="test"
v.y=u
if(u)v.f=v.e=!1
w.qq()},
$S:0}
A.d6J.prototype={
$0(){var w=this.a
w.y=this.b
w.z=this.c},
$S:0}
A.d6K.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.d6I(w))},
$S:0}
A.d6I.prototype={
$0(){return this.a.y=null},
$S:0}
A.d6w.prototype={
$0(){return this.a.x=0},
$S:0}
A.d6x.prototype={
$0(){return this.a.x=0},
$S:0}
A.d6v.prototype={
$1(d){var w=this.a.gep(0).b
return new C.bc(w,C.a6(w).k("bc<2>")).q(0,d)},
$S:3}
A.d6y.prototype={
$1(d){return d.a===this.a},
$S:z+12}
A.d6z.prototype={
$2(d,e){return e===this.a},
$S:449}
A.d6A.prototype={
$0(){var w=this.a
w.w=""
w.qq()},
$S:0}
A.d6B.prototype={
$1(d){return d.a===this.a},
$S:z+7}
A.d6C.prototype={
$0(){var w=this.a,v=this.b
if(w.w===v)v=""
w.w=v
w.x=v.length===0?0:this.c},
$S:0}
A.d6D.prototype={
$1(d){return d.a===this.a},
$S:z+7}
A.d6E.prototype={
$0(){var w=this.a
w.qq()
w.x=this.b},
$S:0}
A.d6F.prototype={
$0(){var w=this.a
w.qq()
w.x=this.b},
$S:0}
A.d6G.prototype={
$0(){return this.a.x=this.b},
$S:0}
A.d6H.prototype={
$0(){var w=this.a,v=w.gep(0),u=v.a
v.a=!u
if(u)v.d=!1
w.qq()},
$S:0}
A.d6M.prototype={
$0(){var w,v=this.a,u=v.gep(0)
u.a=!0
u.d=!1
w=this.b
if(w.e)u.w=!0
u.z=w.r
v.ax=v.at.gii()/1000
v.qq()},
$S:0}
A.d6N.prototype={
$0(){var w=this.a,v=w.gep(0)
v.d=v.a=!0
w.qq()},
$S:0}
A.d6W.prototype={
$1(d){return!d},
$S:120}
A.d74.prototype={
$0(){var w=this.a.gyV()
return A.fJZ(this.b,w.b,w.d,this.c)},
$S:0}
A.d7b.prototype={
$1(d){var w,v,u,t,s=C.a([],x.z),r=this.a,q=r.gep(0),p=q.z
if(p.length!==0){p=r.at.gii()
w=r.ax
v=q.z
u=v==="fire"?7:4.5
t=p/1000-w<u
p=v}else t=!1
if(!t)q=q.w&&p.length!==0
else q=!0
if(q){q=t?p:"smolder"
A.hmK(new A.fk(s),q,new A.d6T(),0.32,r.at.gii()/1000)}return s},
$S:z+10}
A.d6T.prototype={
$1(d){return new A.r(d.a*0.32,-0.2+d.b*0.32,0.8+d.c*0.32)},
$S:z+5}
A.d6X.prototype={
$0(){return this.a.aA3("learn")},
$S:0}
A.d6Y.prototype={
$0(){return this.a.aA3("practice")},
$S:0}
A.d75.prototype={
$0(){return this.a.aA3("test")},
$S:0}
A.d76.prototype={
$0(){var w=this.a
return w.m(new A.d6V(w))},
$S:0}
A.d6V.prototype={
$0(){var w=this.a,v=w.gep(0)
v.e=!v.e
w.qq()},
$S:0}
A.d77.prototype={
$0(){var w=this.a
return w.m(new A.d6U(w))},
$S:0}
A.d6U.prototype={
$0(){var w=this.a,v=w.gep(0)
v.f=!v.f
w.qq()},
$S:0}
A.d78.prototype={
$0(){return A.h3A(this.a)},
$S:0}
A.d79.prototype={
$0(){var w=this.a,v=w.gih()
return v.hP(10,0.2,new A.r(0.6,0,w.gep(0).c===0?4.2:0.4),-0.95)},
$S:0}
A.d7a.prototype={
$0(){var w=this.a,v=w.gih()
return v.hP(10,0.2,new A.r(-0.6,0,w.gep(0).c===0?4.2:0.4),0.95)},
$S:0}
A.d7c.prototype={
$1(d){return!this.a.gep(0).b.iF(0,d.a)},
$S:z+7}
A.d6Z.prototype={
$0(){var w=this.a,v=this.b,u=v.a
if(w.gep(0).b.iF(0,u)){w.nv("That wire is already fastened. Tap the wire in the 3D view to take it off if you want to move it.")
return}w.m(new A.d6S(w,v))
if(w.w.length!==0){w.aWR(u)
w.j6(v.b+": now tap the screw it belongs on.",!0)}},
$S:0}
A.d6S.prototype={
$0(){var w=this.a,v=this.b.a
return w.w=w.w===v?"":v},
$S:0}
A.d7_.prototype={
$0(){var w=this.a,v=w.gyV(),u=v.b,t=A.fJw(v)
w=w.gep(0)
w=C.a([new A.aaI(u,t,A.h0V(v,w),w.x)],x.fJ)
v=B.aF0.h(0,v.a)
if(v==null)v=B.ayi
return A.hr2(this.b,w,v,u)},
$S:0}
A.d70.prototype={
$0(){var w=this.a
w.m(new A.d6R(w))
A.yA()
w.j6("The wires are folded back and the device is pushed into the box. Now put the cover plate on.",!0)
w.oc()},
$S:0}
A.d6R.prototype={
$0(){var w=this.a
w.gep(0).c=1
w.qq()},
$S:0}
A.d71.prototype={
$0(){var w=this.a
w.m(new A.d6Q(w))
w.oc()},
$S:0}
A.d6Q.prototype={
$0(){var w=this.a
w.gep(0).c=0
w.qq()},
$S:0}
A.d72.prototype={
$0(){var w=this.a
w.m(new A.d6P(w))
A.yA()
w.j6("Cover plate on. Now turn the power on and test.",!0)},
$S:0}
A.d6P.prototype={
$0(){var w=this.a
w.gep(0).c=2
w.qq()},
$S:0}
A.d73.prototype={
$0(){var w=this.a
w.m(new A.d6O(w))
w.oc()},
$S:0}
A.d6O.prototype={
$0(){var w=this.a,v=w.gep(0)
v.c=0
v.b.a8(0)
v.a=!0
v.w=v.d=!1
v.z=""
w.Q=0
w.w=""
w.x=0
w.qq()},
$S:0}
A.eQk.prototype={
$0(){var w=this.a
w.x=this.b
w.y=this.c},
$S:0}
A.eQl.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.eQj(w))},
$S:0}
A.eQj.prototype={
$0(){return this.a.x=null},
$S:0}
A.eQd.prototype={
$0(){return this.a.w=0},
$S:0}
A.eQe.prototype={
$0(){var w=this.a,v=w.gep(0)
v.a.M(0,this.b)
v.c=!1
v.d=""
w.f=A.bAT(v)
w.r=""},
$S:0}
A.eQf.prototype={
$0(){var w=this.a,v=w.gep(0)
v.b.n(0,this.b,!0)
v.d=""
w.f=A.bAT(v)},
$S:0}
A.eQg.prototype={
$0(){return this.a.w=this.b},
$S:0}
A.eQh.prototype={
$1(d){return this.a.gep(0).b.h(0,d)!==!0},
$S:3}
A.eQi.prototype={
$0(){var w,v=this.a,u=v.gep(0)
u.c=!0
w=this.b
u.d=w.length===0?"":D.d.gI(w)
v.f=A.bAT(u)},
$S:0}
A.eQp.prototype={
$1(d){return!d},
$S:120}
A.eQt.prototype={
$0(){return A.fJZ(this.a,"Sink drain (P-trap)",B.ddK,this.b)},
$S:0}
A.eQq.prototype={
$1(d){return A.ibc(this.a.gep(0),d)},
$S:z+10}
A.eQr.prototype={
$0(){var w=this.a
return w.m(new A.eQo(w,this.b))},
$S:0}
A.eQo.prototype={
$0(){var w=this.a,v=this.b
return w.r=w.r===v?"":v},
$S:0}
A.eQs.prototype={
$0(){var w=this.a
w.m(new A.eQn(w))
w.oc()},
$S:0}
A.eQn.prototype={
$0(){var w,v=this.a,u=v.gep(0)
u.a.a8(0)
w=u.b
w.aIH(w,new A.eQm())
u.c=!1
v.r=u.d=""
v.w=0
v.f=A.bAT(u)},
$S:0}
A.eQm.prototype={
$2(d,e){return!1},
$S:1807}
A.d9N.prototype={
$0(){var w=this.a
w.x=this.b
w.y=this.c},
$S:0}
A.d9O.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.d9M(w))},
$S:0}
A.d9M.prototype={
$0(){return this.a.x=null},
$S:0}
A.d9F.prototype={
$0(){return this.a.w=0},
$S:0}
A.d9I.prototype={
$1(d){return d.a===this.a},
$S:z+41}
A.d9J.prototype={
$0(){var w=this.a,v=w.gep(0)
v.f=!1
w.f=A.aOI(v)
w.w=this.b},
$S:0}
A.d9K.prototype={
$0(){var w=this.a,v=w.gep(0),u=v.e
u.bt(u,new A.d9H(this.b))
v.f=!1
w.f=A.aOI(v)},
$S:0}
A.d9H.prototype={
$2(d,e){return e===this.a},
$S:449}
A.d9L.prototype={
$0(){return this.a.w=this.b},
$S:0}
A.d9G.prototype={
$0(){var w=this.a,v=w.gep(0)
v.f=!v.f
w.f=A.aOI(v)},
$S:0}
A.d9S.prototype={
$1(d){return!d},
$S:120}
A.d9Y.prototype={
$0(){return A.fJZ(this.a,"Faucet supply lines",B.dqb,this.b)},
$S:0}
A.d9T.prototype={
$1(d){return A.i23(this.a.gep(0),d)},
$S:z+10}
A.d9U.prototype={
$0(){var w=this.a
return w.m(new A.d9R(w))},
$S:0}
A.d9R.prototype={
$0(){var w=this.a,v=w.gep(0)
v.r=!v.r
w.f=A.aOI(v)},
$S:0}
A.d9W.prototype={
$0(){var w=this.b
return w.m(new A.d9Q(this.a,w))},
$S:0}
A.d9Q.prototype={
$0(){var w=this.b,v=w.r,u=this.a.a
return w.r=v===u?"":u},
$S:0}
A.d9V.prototype={
$1(d){return d===this.a.a},
$S:3}
A.d9X.prototype={
$0(){var w=this.a
w.m(new A.d9P(w))
w.oc()},
$S:0}
A.d9P.prototype={
$0(){var w=this.a,v=w.gep(0)
v.e.a8(0)
v.f=!1
w.r=""
w.w=0
w.f=A.aOI(v)},
$S:0}
A.dgS.prototype={
$0(){var w=this.a
w.x=this.b
w.y=this.c},
$S:0}
A.dgT.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.dgR(w))},
$S:0}
A.dgR.prototype={
$0(){return this.a.x=null},
$S:0}
A.dgM.prototype={
$0(){return this.a.r=0},
$S:0}
A.dgO.prototype={
$0(){var w=this.a,v=w.d
v.d.W(0,72)
w.f=A.agf(v)
w.r=this.b},
$S:0}
A.dgP.prototype={
$0(){var w=this.a,v=w.d
v.c=!0
v.b=!1
w.f=A.agf(v)
w.r=this.b},
$S:0}
A.dgQ.prototype={
$0(){return this.a.r=this.b},
$S:0}
A.dgN.prototype={
$1(d){return this.a},
$S:38}
A.dh0.prototype={
$0(){return A.fJZ(this.a,"Fix the house",B.cn7,this.b)},
$S:0}
A.dgW.prototype={
$0(){return this.a.ce9(this.b)},
$S:0}
A.dgY.prototype={
$1(d){return d<=this.a.d.a},
$S:34}
A.dgX.prototype={
$1(d){return A.hn0(this.a.d,d)},
$S:z+10}
A.dgZ.prototype={
$0(){var w=this.a
return w.m(new A.dgV(w))},
$S:0}
A.dgV.prototype={
$0(){var w=this.a
return w.w=w.w==="wrench"?"":"wrench"},
$S:0}
A.dh_.prototype={
$1(d){var w=this.a
return w.m(new A.dgU(w,d))},
$S:7}
A.dgU.prototype={
$0(){var w=this.a,v=w.d,u=D.k.V(this.b)
v.a=u
if(u<5)w.r=0
w.f=A.agf(v)},
$S:0}
A.fbb.prototype={
$0(){return this.a.e=!1},
$S:0}
A.fb9.prototype={
$0(){return this.a.e=!0},
$S:0}
A.fba.prototype={
$0(){var w=this.a
w.d=C.dq(B.btL,new A.fb8(w))},
$S:0}
A.fb8.prototype={
$1(d){var w=this.a.a,v=w.e
return v.aoI(w.f?1.06:0.94)},
$S:11}
A.fbd.prototype={
$1(d){return this.a.c6u(0)},
$S:77}
A.fbe.prototype={
$1(d){return this.a.b6t()},
$S:118}
A.fbc.prototype={
$1(d){return this.a.b6t()},
$S:173}
A.c9p.prototype={
$0(){return C.a3(this.a,!1).iW()},
$S:0}
A.fsN.prototype={
$5(d,e,f,g,h){var w=this.a.a.q(0,h),v=this.b
v.b=d
if(w)v.a6C(e,0.66,f,!1,!0,!0,g,14)
else{v.d=0.3
v.aIE(e,0.74,D.b1,!1,!0,0,8)
v.d=1}},
$S:z+98}
A.fsM.prototype={
$6(d,e,f,g,h,i){var w,v
if(!i)return
w=this.a.b.h(0,e)
v=w===!0?f:f.aa(0,h)
w=this.b
w.e=0.5
w.b=d
w.dP(v.aF(0,g.aI(0,0.6)),v.aa(0,g.aI(0,0.6)),1.12,B.pK,0.35,8)
w.zg(v.aF(0,g.aI(0,0.62)),v.aF(0,g.aI(0,0.5)),1.2,0.5,B.WU,0.2,8)
w.b=0
w.zg(f.aF(0,g.aI(0,0.05)),f.aa(0,g.aI(0,0.08)),0.82,0.55,B.bmg,0.1,12)
w.e=0},
$S:z+99}
A.fsL.prototype={
$1(d){return d.b<-0.6},
$S:z+22}
A.frS.prototype={
$1(d){return this.a.e.h(0,d)===this.b},
$S:34}
A.fut.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=A.ags(d)
for(w=this.a*1.6,v=this.b,u=p.a,t=p.b,s=p.c,r=0;r<7;++r){q=D.k.F(w+r/7,1)
v.fT(new A.r(u+Math.sin(r*2.1)*q*1.4,t+(q*2.4-q*q*6.5),s+(1+q*2.5)),0.2,e,3,6,0.9)}},
$S:1808}
A.fus.prototype={
$1(d){return this.a.e.h(0,d.a)!=null},
$S:z+41}
A.ck8.prototype={
$1(d){return d.a===this.a},
$S:z+100}
A.ck9.prototype={
$1(d){return d.a===this.a},
$S:z+1}
A.ck5.prototype={
$1(d){return this.a.va(0,d).c.toLowerCase()},
$S:14}
A.cka.prototype={
$1(d){var w
if(!this.a.e.q(0,d.a)){w=d.b
w=w==="valve"||D.a.a0(w,"hose")}else w=!1
return w},
$S:z+1}
A.ckb.prototype={
$1(d){var w=this.a,v=d.a
return w.e.q(0,v)&&w.aGv(v)>0},
$S:z+1}
A.ckc.prototype={
$1(d){return d.a},
$S:z+24}
A.ckd.prototype={
$1(d){return d.a},
$S:z+24}
A.ck6.prototype={
$1(d){return this.a.e.q(0,d.a)},
$S:z+1}
A.ck7.prototype={
$1(d){var w=this.a,v=d.a
return w.aGv(v)<=0||!w.e.q(0,v)},
$S:z+1}
A.fsK.prototype={
$1(d){var w=this.a
w.b=0
w.dP(new A.r(d,8,0),new A.r(d,8,1.6),0.5,B.L9,0.7,10)},
$S:7}
A.fsI.prototype={
$1(d){var w,v,u,t,s,r,q=C.a([],x.o)
for(w=d.length,v=this.a,u=v.a,t=v.b,v=v.c,s=0;s<d.length;d.length===w||(0,C.M)(d),++s){r=d[s]
q.push(new A.r(r.a+u,r.b+t,r.c+v))}return q},
$S:z+103}
A.fsC.prototype={
$3$r(d,e,f){var w=this.a,v=this.b.c
v===$&&C.c()
w.b=9100+D.d.bg(v.c,new A.fsF(d))
w.d=0.32
w.aIE(e,f,D.b1,!1,!0,0,8)
w.d=1},
$2(d,e){return this.$3$r(d,e,1.2)},
$S:z+104}
A.fsF.prototype={
$1(d){return d.a===this.a},
$S:z+1}
A.fsD.prototype={
$3(d,e,f){var w=this.a,v=this.b.c
v===$&&C.c()
w.b=9100+D.d.bg(v.c,new A.fsE(d))
w.d=0.32
w.aO(e,f,D.b1)
w.d=1},
$S:z+105}
A.fsE.prototype={
$1(d){return d.a===this.a},
$S:z+1}
A.fsJ.prototype={
$3(d,e,f){var w,v,u,t=this,s=t.a,r=s.c
r===$&&C.c()
w=D.d.cD(r.c,d)
r=d.c
v=s.e
u=d.a
if(v.q(0,u))s="Fitted."
else{s=s.b?"":d.e
s="A spot for the "+r.toLowerCase()+". "+s}t.b.n(0,9100+w,new A.cW(r,s,e,26))
if(t.c&&!v.q(0,u)&&t.d.length!==0)t.e.push(new A.hd(e.aa(0,B.fRF),f,D.f5,0))},
$S:z+106}
A.fsy.prototype={
$0(){return this.a.$3(this.b.a,new A.r(this.c-10,9,2.4),B.a9L)},
$S:0}
A.fsz.prototype={
$0(){return this.a.$3(this.b.a,new A.r(this.c-8,9,2.4),B.a9L)},
$S:0}
A.fsA.prototype={
$0(){return this.a.$3(this.b.a,new A.r(this.c+8,9,2.4),B.a9L)},
$S:0}
A.fsG.prototype={
$4(d,e,f,g){var w,v,u,t,s=this
if(D.d.bg(s.a,new A.fsH(d))<0||!s.b.e.q(0,d))return
w=s.b.f.h(0,d)
v=(w==null?0:w)>=1
w=s.c
u=9260+g
w.b=u
t=v?e:e.aa(0,f.aI(0,1.7))
w.dP(t.aF(0,f.aI(0,0.6)),t.aa(0,f.aI(0,0.6)),1.12,B.pK,0.35,8)
w.zg(t.aF(0,f.aI(0,0.62)),t.aF(0,f.aI(0,0.5)),1.2,0.5,B.WU,0.2,8)
w=v?"Tight.":"Loose. Tap it with the wrench to tighten it."
s.d.n(0,u,new A.cW("Slip nut",w,e,10))},
$S:z+107}
A.fsH.prototype={
$1(d){return d.a===this.a},
$S:z+1}
A.fsB.prototype={
$1(d){return d.a===this.a},
$S:z+1}
A.fJ8.prototype={
$1(d){return d.a===this.a},
$S:z+1}
A.ekj.prototype={
$0(){var w=this.a
w.z=this.b
w.Q=this.c},
$S:0}
A.ekk.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.eki(w))},
$S:0}
A.eki.prototype={
$0(){return this.a.z=null},
$S:0}
A.ekc.prototype={
$0(){return this.a.y=0},
$S:0}
A.eko.prototype={
$1(d){return d.a===this.a},
$S:z+1}
A.ek1.prototype={
$0(){return this.a.y=this.b},
$S:0}
A.ek2.prototype={
$0(){var w=this.a
w.Zx()
w.y=this.b},
$S:0}
A.ek3.prototype={
$1(d){return this.a.c6v()},
$S:9}
A.ek8.prototype={
$1(d){var w,v=null,u=this.a,t=u.e
t===$&&C.c()
w=t.c
w===$&&C.c()
t=C.d("The "+w.b.toLowerCase()+" is finished and nothing leaks.\n\nMistakes: "+t.w+"\n\nThe next job is different.",v,v,v,v,v,v,B.a8C,v,v,v)
return C.ek(C.a([C.bM(!1,B.aT0,v,v,!0,v,v,new A.ek6(d),v,v),C.bG(B.fxX,new A.ek7(u,d),v)],x.p),v,v,E.n7,t,v,v,v,v,B.fzB,v)},
$S:18}
A.ek6.prototype={
$0(){C.a3(this.a,!1).N(null)
return null},
$S:0}
A.ek7.prototype={
$0(){C.a3(this.b,!1).N(null)
this.a.aXS()},
$S:0}
A.ekh.prototype={
$0(){var w,v,u=this.a
u.d=D.o.F(Date.now(),1e5)
w=u.gCL(0)
v=u.e
v===$&&C.c()
u.e=A.fXn(v.b,w,null)
u.x=""
u.as=!1
u.z=null
u.y=0
u.Zx()},
$S:0}
A.ekp.prototype={
$1(d){return d.b===this.a},
$S:z+1}
A.ek9.prototype={
$1(d){var w=this.a.e
w===$&&C.c()
return w.x.q(0,d.a)},
$S:z+1}
A.eka.prototype={
$1(d){return d.c.toLowerCase()},
$S:z+24}
A.ekb.prototype={
$1(d){var w=this.a.e
w===$&&C.c()
return w.aGv(d.a)>0},
$S:z+1}
A.ekl.prototype={
$0(){var w=this.b
w.x=this.a.b
w.Zx()},
$S:0}
A.ekm.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
A.ekn.prototype={
$0(){return this.a.y=this.b},
$S:0}
A.ek5.prototype={
$0(){var w=this.a
return w.m(new A.ek4(w,this.b,this.c))},
$S:0}
A.ek4.prototype={
$0(){var w=this.a
w.x=this.b?"":this.c
w.Zx()},
$S:0}
A.ekq.prototype={
$1(d){var w=this.a.e
w===$&&C.c()
return w.e.q(0,d.a)},
$S:z+1}
A.eku.prototype={
$0(){return this.a.c0u(this.b)},
$S:0}
A.eks.prototype={
$1(d){return d<=5},
$S:34}
A.ekr.prototype={
$1(d){var w=this.a,v=w.e
v===$&&C.c()
return A.ib4(v,w.w.gii()/1000)},
$S:z+10}
A.ekt.prototype={
$0(){return this.b.cws(this.a.a)},
$S:0}
A.ekg.prototype={
$1(d){var w,v,u,t,s,r,q,p=null,o=this.a,n=o.e
n===$&&C.c()
w=x.p
n=C.a([B.fLo,D.au,C.d("Mistakes "+n.w,p,p,p,p,p,p,B.Jx,p,p,p),D.R],w)
v=o.e.c
v===$&&C.c()
v=v.c
u=v.length
t=0
for(;t<u;++t){s=v[t]
r=D.c.j(0.05)
q=new C.aQ(12,12)
n.push(C.p(p,new C.y((o.e.e.q(0,s.a)?"\u2705":"\ud83d\udd27")+" "+s.c,p,B.f92,p,p,p,p,p,p,p,p,p),D.f,p,p,new C.o(r,p,p,new C.bk(q,q,q,q),p,p,D.n),p,p,p,D.eG,D.bU,p,p,p))}n.push(D.am)
n.push(B.fpB)
n.push(D.N)
n.push(C.B(C.a([B.bBE,C.XM(p,p,p,p,!1,D.y,p,p,p,p,p,p,new A.eke(o,d),p,p,p,p,p,p,p,p,o.e.b)],w),D.m,p,D.e,D.j,0,p,p))
n.push(C.bG(B.aT2,new A.ekf(o,d),p))
return C.bm(!0,C.ct(n,p,D.bR,p,p,D.ag,!0),!0,!1,D.af,!0,!0)},
$S:25}
A.eke.prototype={
$1(d){var w=this.a
w.m(new A.ekd(w,d))
C.a3(this.b,!1).N(null)},
$S:8}
A.ekd.prototype={
$0(){var w=this.a,v=w.e
v===$&&C.c()
v.b=this.b
w.Zx()},
$S:0}
A.ekf.prototype={
$0(){C.a3(this.b,!1).N(null)
this.a.aXS()},
$S:0}
A.fRt.prototype={
$1(d){return d.a===this.a},
$S:z+42}
A.cp4.prototype={
$1(d){return D.d.q(B.jP,d.b)},
$S:z+8}
A.cpb.prototype={
$1(d){return!this.a.y.q(0,d)},
$S:34}
A.cpc.prototype={
$1(d){var w=this.a
return w.x.ai(0,d)&&w.z.q(0,d)},
$S:34}
A.cpd.prototype={
$1(d){var w=$.GY()[this.b],v=!1
if(w>=d)if(w<=d+48){w=this.a.Q.h(0,d)
w=(w==null?null:w.a)===!0}else w=v
else w=v
return w},
$S:34}
A.cpe.prototype={
$1(d){return this.a.Q.h(0,d).c.q(0,this.b)},
$S:34}
A.cpg.prototype={
$1(d){var w,v=J.e4(6,x.S)
for(w=0;w<6;++w)v[w]=w
return D.d.d8(v,new A.cpf(this.a,d))},
$S:34}
A.cpf.prototype={
$1(d){return this.a.c.q(0,this.b*10+d)},
$S:34}
A.cp3.prototype={
$1(d){var w=this.a.Q.h(0,d)
return(w==null?null:w.a)===!0},
$S:34}
A.cp1.prototype={
$1(d){return!A.jQ(d).c},
$S:34}
A.cp2.prototype={
$1(d){var w=this.a.apt(A.jQ(d).d.a)
return(w==null?null:w.b.q(0,d))===!0},
$S:34}
A.cp9.prototype={
$1(d){return d.c},
$S:z+9}
A.cpa.prototype={
$1(d){return d.d},
$S:z+9}
A.cp5.prototype={
$1(d){return d.d},
$S:z+9}
A.cp6.prototype={
$1(d){var w=this.a.Q.h(0,d)
return(w==null?null:w.e)===!0},
$S:34}
A.cp7.prototype={
$1(d){return d.a===this.a},
$S:z+12}
A.cph.prototype={
$2(d,e){return e===this.a},
$S:449}
A.cp8.prototype={
$1(d){return d.c===this.a},
$S:z+8}
A.eoY.prototype={
$0(){var w=this.a
w.ax=this.b
w.ay=this.c},
$S:0}
A.eoZ.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.eoX(w))},
$S:0}
A.eoX.prototype={
$0(){return this.a.ax=null},
$S:0}
A.eo_.prototype={
$0(){return this.a.CW=!0},
$S:0}
A.eo0.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.enZ(w))},
$S:12}
A.enZ.prototype={
$0(){return this.a.CW=!1},
$S:0}
A.eo1.prototype={
$0(){return this.a.CW=!0},
$S:0}
A.eo2.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.enY(w))},
$S:12}
A.enY.prototype={
$0(){return this.a.CW=!1},
$S:0}
A.eo3.prototype={
$1(d){return this.a.bOW()},
$S:9}
A.eo4.prototype={
$1(d){return this.a.c6A()},
$S:9}
A.eoe.prototype={
$0(){return this.a.Q=-1},
$S:0}
A.eog.prototype={
$0(){return this.a.Q=-1},
$S:0}
A.eo5.prototype={
$1(d){return d.b==="tv"},
$S:702}
A.eo6.prototype={
$0(){return this.a.Q=-1},
$S:0}
A.eo7.prototype={
$0(){return this.a.Q=-1},
$S:0}
A.eox.prototype={
$0(){var w=this.a
w.Q=this.b
w.z=w.at=""
w.ch=!1},
$S:0}
A.eof.prototype={
$0(){var w=this.a
w.Q=-1
w.at=""},
$S:0}
A.eoU.prototype={
$0(){return this.a.as=0},
$S:0}
A.eoV.prototype={
$0(){return this.a.z=""},
$S:0}
A.eoW.prototype={
$0(){return this.a.as=this.b},
$S:0}
A.eoS.prototype={
$0(){return this.a.z=""},
$S:0}
A.eoT.prototype={
$0(){return this.a.as=2000+this.b},
$S:0}
A.eoR.prototype={
$0(){return this.a.z=""},
$S:0}
A.eoJ.prototype={
$1(d){return d.a===this.a},
$S:z+12}
A.eoK.prototype={
$0(){return this.a.at=""},
$S:0}
A.eoL.prototype={
$1(d){return d.a===this.a},
$S:z+7}
A.eoM.prototype={
$0(){var w=this,v=w.a,u=w.b
if(v.at===u)u=""
v.at=u
v.as=u.length===0?0:5000+w.c*100+w.d},
$S:0}
A.eoN.prototype={
$1(d){return d.a===this.a},
$S:z+7}
A.eoO.prototype={
$0(){return this.a.as=5000+this.b*100+this.c},
$S:0}
A.eoP.prototype={
$0(){var w=this.a
w.at=""
w.as=0},
$S:0}
A.eoQ.prototype={
$0(){return this.a.as=5000+this.b*100+this.c},
$S:0}
A.ep_.prototype={
$0(){var w=this.b,v=D.d.q(B.HD,w.z),u=this.a.a
if(v)w.b1h(u)
else w.b1i(u)},
$S:0}
A.eod.prototype={
$1(d){var w=null
return C.ek(C.a([C.bM(!1,B.fBy,w,w,!0,w,w,new A.eob(d),w,w),C.bG(D.JP,new A.eoc(this.a,d),w)],x.p),w,w,E.n7,B.fqK,w,w,w,w,B.fyn,w)},
$S:18}
A.eob.prototype={
$0(){C.a3(this.a,!1).N(null)
return null},
$S:0}
A.eoc.prototype={
$0(){C.a3(this.b,!1).N(null)
this.a.awY(!0)},
$S:0}
A.eoa.prototype={
$1(d){var w,v=null,u=this.a,t=u.d
t===$&&C.c()
w=t.c
w===$&&C.c()
t=C.d("The "+w.toLowerCase()+" is built, wired, painted and tested.\n\nMistakes: "+t.f+"\nShocks: "+t.r+"\nLives left: "+t.e+"\n\nEvery job is a little different. Ready for another one?",v,v,v,v,v,v,B.a8C,v,v,v)
return C.ek(C.a([C.bM(!1,B.fMe,v,v,!0,v,v,new A.eo8(d),v,v),C.bG(B.fyg,new A.eo9(u,d),v)],x.p),v,v,E.n7,t,v,v,v,v,B.fGe,v)},
$S:18}
A.eo8.prototype={
$0(){C.a3(this.a,!1).N(null)
return null},
$S:0}
A.eo9.prototype={
$0(){C.a3(this.b,!1).N(null)
this.a.aZ2()},
$S:0}
A.eoh.prototype={
$0(){var w,v,u
if(!this.b)this.a.e=D.o.F(Date.now(),1e5)
w=this.a
v=w.gCL(0)
u=w.d
u===$&&C.c()
w.d=A.cp_(null,null,u.b,v,!0)
w.y=0
w.z=""
w.Q=-1
w.at=""
w.as=0
w.cx=!1
w.x.a8(0)
w.ax=null
w.r=A.wJ(w.d,new A.rE(w.z,w.Q,!1))},
$S:0}
A.eov.prototype={
$1(d){return new C.N(d,new A.eow(),d.$ti.k("N<ak.E,n>")).aG(0,", ")},
$S:1809}
A.eow.prototype={
$1(d){return A.jQ(d).b},
$S:80}
A.eoi.prototype={
$1(d){var w=this.a.d
w===$&&C.c()
return!w.x.ai(0,d.a)},
$S:z+8}
A.eoj.prototype={
$1(d){var w=this.a.d
w===$&&C.c()
return!w.z.q(0,d.a)},
$S:z+8}
A.eok.prototype={
$1(d){var w=this.a.d
w===$&&C.c()
return!w.y.q(0,d)},
$S:34}
A.eon.prototype={
$1(d){return!d.a},
$S:z+9}
A.eoo.prototype={
$1(d){return d.b<3},
$S:z+9}
A.eop.prototype={
$1(d){return!d.c},
$S:z+9}
A.eoq.prototype={
$1(d){return!d.d},
$S:z+9}
A.eor.prototype={
$1(d){return!d.c},
$S:z+9}
A.eos.prototype={
$1(d){var w=this.a.d
w===$&&C.c()
w=w.at.h(0,d.a)
w=w==null?null:w.a
return w!==d.b},
$S:z+8}
A.eot.prototype={
$1(d){return d.a},
$S:z+112}
A.eou.prototype={
$1(d){var w=this.a.d
w===$&&C.c()
w=w.at.h(0,d.a)
w=w==null?null:w.b.c
return(w==null?0:w)<2},
$S:z+8}
A.eol.prototype={
$1(d){var w
if(D.d.q(B.lA,d.b)){w=this.a.d
w===$&&C.c()
w=w.at.h(0,d.a)
w=(w==null?null:w.c)!==!0}else w=!1
return w},
$S:z+8}
A.eom.prototype={
$1(d){return d.b==="fan"},
$S:z+8}
A.epi.prototype={
$0(){return this.a.cfb(this.b)},
$S:0}
A.epk.prototype={
$0(){var w=this.a
if(w.Q>=0)w.adR()
else{w.m(new A.ep4(w))
w.b3y()}},
$S:0}
A.ep4.prototype={
$0(){return this.a.as=0},
$S:0}
A.epj.prototype={
$1(d){var w=this.a,v=w.d
v===$&&C.c()
return A.ibl(v,w.w.gii()/1000,w.x)},
$S:z+10}
A.ep7.prototype={
$0(){var w=this.a,v=w.d
v===$&&C.c()
return w.jx(v.aIx())},
$S:0}
A.ep8.prototype={
$0(){var w=this.a
return w.m(new A.ep6(w,this.b))},
$S:0}
A.ep6.prototype={
$0(){var w,v=this.b.b
v.f=!v.f
v=this.a
w=v.d
w===$&&C.c()
v.r=A.wJ(w,new A.rE(v.z,v.Q,!1))},
$S:0}
A.ep9.prototype={
$0(){var w=this.a
return w.m(new A.ep5(w,this.b))},
$S:0}
A.ep5.prototype={
$0(){var w,v=this.b.b
v.e=!v.e
v=this.a
w=v.d
w===$&&C.c()
v.r=A.wJ(w,new A.rE(v.z,v.Q,!1))},
$S:0}
A.epl.prototype={
$0(){var w=this.a
return w.m(new A.ep3(w,this.b))},
$S:0}
A.ep3.prototype={
$0(){var w,v=this.a
v.y=this.b
v.z=""
w=v.d
w===$&&C.c()
v.r=A.wJ(w,new A.rE("",v.Q,!1))},
$S:0}
A.epm.prototype={
$0(){var w=this.a
return w.m(new A.ep2(w))},
$S:0}
A.ep2.prototype={
$0(){var w=this.a,v=w.d
v===$&&C.c()
v.alx()
w.y=2
w.z=""
w.r=A.wJ(w.d,new A.rE("",w.Q,!1))
w.qr("The boxes, the cable and the walls are done. Now the wiring: pick an Outlet or a Switch from the tray, then tap its box on the wall.",!0)},
$S:0}
A.epn.prototype={
$0(){var w=this.a
return w.m(new A.ep1(w,this.b))},
$S:0}
A.ep1.prototype={
$0(){var w,v=this.a,u=this.b.a,t=v.z===u?"":u
v.z=t
v.as=0
w=v.d
w===$&&C.c()
v.r=A.wJ(w,new A.rE(t,v.Q,!1))
if(v.z.length!==0)v.cq4(u)},
$S:0}
A.epo.prototype={
$0(){var w=this.a,v=w.d
v===$&&C.c()
return w.jx(v.cQ9())},
$S:0}
A.epp.prototype={
$1(d){return!this.a.b.b.iF(0,d.a)},
$S:z+7}
A.epq.prototype={
$0(){var w=this.a
return w.m(new A.ep0(w,this.b,this.c))},
$S:0}
A.ep0.prototype={
$0(){var w,v=this,u=v.c,t=u.a
if(v.b.b.b.iF(0,t)){v.a.adS("That wire is already fastened. Tap the wire in the 3D view to take it off.")
return}w=v.a
if(w.at===t)t=""
w.at=t
if(t.length!==0)w.qr(u.b+": now tap the screw it belongs on, or press the matching button below.",!0)},
$S:0}
A.epa.prototype={
$1(d){return!this.a.b.b.ai(0,d.a)},
$S:z+12}
A.epb.prototype={
$0(){var w=this.a
return w.b1g(w.Q,this.b.a)},
$S:0}
A.epc.prototype={
$0(){var w=this.a,v=w.d
v===$&&C.c()
return w.jx(v.bhD(w.Q))},
$S:0}
A.epd.prototype={
$0(){var w=this.a,v=w.d
v===$&&C.c()
return w.jx(v.bhB(w.Q))},
$S:0}
A.epe.prototype={
$0(){var w=this.a,v=w.d
v===$&&C.c()
return w.jx(v.bct(w.Q))},
$S:0}
A.epf.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.bhY(v.Q)
v.jx(w)
if(w.a)v.adR()},
$S:0}
A.epg.prototype={
$0(){var w=this.a,v=w.d
v===$&&C.c()
return w.jx(v.bhB(w.Q))},
$S:0}
A.eph.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.bhY(v.Q)
v.jx(w)
if(w.a){v.adR()
v.qr("The "+A.ago(this.b.a)+" is out and the box is empty. Pick the kind you want from the tray (a different outlet or switch is fine), then tap the box.",!0)}},
$S:0}
A.eoI.prototype={
$1(d){return new C.dY(new A.eoH(this.a,this.b),null)},
$S:19}
A.eoH.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=C.aH(d,k,x.w).w,i=this.a,h=i.d
h===$&&C.c()
w=h.c
w===$&&C.c()
v=x.p
h=C.a([C.d("Job: "+w,k,k,k,k,k,k,D.df,k,k,k),D.au,C.d("Mistakes "+h.f+" \xb7 Shocks "+h.r+" \xb7 Lives "+h.e,k,k,k,k,k,k,B.Jx,k,k,k),D.R,B.fC7,D.am],v)
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
else m=m==="fan"?"A ceiling fan":"A "+A.ago(m).toLowerCase()
o=A.jQ(o)
l=s.c
l=l!=null?", turned on by "+A.jQ(l).b:""
h.push(C.p(k,new C.y(n+" "+m+" at "+o.b+l,k,D.oy,k,k,k,k,k,k,k,k,k),D.f,k,k,new C.o(r,k,new C.bJ(p,p,p,p),new C.bk(q,q,q,q),k,k,D.n),k,k,k,D.eG,D.bU,k,k,k))}h.push(D.R)
h.push(C.B(C.a([B.bCK,C.XM(k,k,k,k,!1,D.y,k,k,k,k,k,k,new A.eoB(i,e),k,k,k,k,k,k,k,k,i.d.b)],v),D.m,k,D.e,D.j,0,k,k))
h.push(C.B(C.a([B.bC0,C.XM(k,k,k,k,!1,D.y,k,k,k,k,k,k,new A.eoC(i,e),k,k,k,k,k,k,k,k,i.d.dx)],v),D.m,k,D.e,D.j,0,k,k))
h.push(D.am)
w=this.b
h.push(C.B(C.a([C.E(C.dQ(B.fzD,new A.eoD(w),k),1),D.ab,C.E(C.bG(B.fxy,new A.eoE(i,d,w),k),1)],v),D.m,k,D.e,D.j,0,k,k))
h.push(D.am)
h.push(D.am)
h.push(C.B(C.a([C.E(C.dQ(B.frS,new A.eoF(i,d),k),1),D.ab,C.E(C.bG(B.aT2,new A.eoG(i,d),k),1)],v),D.m,k,D.e,D.j,0,k,k))
return C.bm(!0,new C.cT(new C.aX(0,1/0,0,j.a.b*0.8),C.ct(h,k,D.bR,k,k,D.ag,!0),k),!0,!1,D.af,!0,!0)},
$S:87}
A.eoB.prototype={
$1(d){var w=this.a,v=w.d
v===$&&C.c()
v.b=d
for(v=v.at,v=new C.dt(v,v.r,v.e);v.C();)v.d.b.r=d
this.b.$1(new A.eoz())
w.m(new A.eoA())},
$S:8}
A.eoz.prototype={
$0(){},
$S:0}
A.eoA.prototype={
$0(){},
$S:0}
A.eoC.prototype={
$1(d){var w,v=this.a,u=v.d
u===$&&C.c()
u.dx=d
for(u=u.at,u=new C.dt(u,u.r,u.e);u.C();){w=u.d.b
w.y=d
if(d)w.f=!1}this.b.$1(new A.eoy())
v.m(v.gc6H())},
$S:8}
A.eoy.prototype={
$0(){},
$S:0}
A.eoD.prototype={
$0(){return A.h3A(this.a)},
$S:0}
A.eoE.prototype={
$0(){var w=0,v=C.j(x.H),u=this,t,s,r
var $async$$0=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:C.a3(u.b,!1).N(null)
t=u.a
s=t.d
s===$&&C.c()
r=s.c
r===$&&C.c()
w=2
return C.b(A.hr2(u.c,s.cWg(),t.d.cWh(),r),$async$$0)
case 2:return C.h(null,v)}})
return C.i($async$$0,v)},
$S:1}
A.eoF.prototype={
$0(){C.a3(this.b,!1).N(null)
this.a.awY(!0)},
$S:0}
A.eoG.prototype={
$0(){C.a3(this.b,!1).N(null)
this.a.aZ2()},
$S:0}
A.fll.prototype={
$1(d){var w=this.a,v=d.a
return w>v[0]&&w<v[1]},
$S:707}
A.flm.prototype={
$1(d){var w=this.a,v=d.a
return w>v[2]&&w<v[3]},
$S:707}
A.fsO.prototype={
$1(d){return 5000+this.a.a*100+d},
$S:75}
A.fsP.prototype={
$1(d){return 3000+this.a.a},
$S:75}
A.fsQ.prototype={
$1(d){return 2000+this.a.a},
$S:75}
A.fsT.prototype={
$5$col$round(d,e,f,g,h){var w=this.a
w.f=3
w.b=d
w.d=0.5
w.e=0.9
if(h)w.dL(e.aF(0,B.e8),e.aa(0,B.e8),f.a/2,g,14)
else w.aO(e,f,g)
w.e=0
w.d=1
w.f=2},
$3(d,e,f){return this.$5$col$round(d,e,f,D.b1,!1)},
$4$round(d,e,f,g){return this.$5$col$round(d,e,f,D.b1,g)},
$4$col(d,e,f,g){return this.$5$col$round(d,e,f,g,!1)},
$S:z+113}
A.fsR.prototype={
$3(d,e,f){return I.Rz(d,e,0,f+this.a.a*5)},
$S:24}
A.fsS.prototype={
$0(){var w,v=this.a
if(v.c)w="A place in the ceiling for a "+(v.e==="fan"?"fan (needs a fan-rated box)":"light")+"."
else w="A place on the wall at "+(v.e==="switch"?"switch height, about 48 inches from the floor":"outlet height, about 16 inches from the floor")+"."
return new A.cW(v.b,w,A.ahF(v,B.a9B),26)},
$S:z+114}
A.fJs.prototype={
$1(d){return d.e==="fan"},
$S:z+42}
A.fJt.prototype={
$1(d){return d.b==="light"},
$S:z+8}
A.fJu.prototype={
$1(d){return A.ahF(this.a,d)},
$S:z+5}
A.csv.prototype={
$1(d){return d.a===this.a&&!d.c},
$S:z+15}
A.csr.prototype={
$1(d){return d.a===B.a_F},
$S:z+15}
A.cst.prototype={
$1(d){return d.c},
$S:z+15}
A.csu.prototype={
$1(d){return d.c},
$S:z+15}
A.css.prototype={
$1(d){return B.wt.h(0,d.a).e===this.a&&!d.c},
$S:z+15}
A.eqN.prototype={
$0(){var w=this.a
w.z=this.b
w.Q=this.c},
$S:0}
A.eqO.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.eqM(w))},
$S:0}
A.eqM.prototype={
$0(){return this.a.z=null},
$S:0}
A.eqC.prototype={
$0(){return this.a.y=0},
$S:0}
A.eqH.prototype={
$0(){return this.a.as=!0},
$S:0}
A.eqI.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.eqG(w))},
$S:12}
A.eqG.prototype={
$0(){return this.a.as=!1},
$S:0}
A.eqJ.prototype={
$0(){var w=this.a,v=w.d
v===$&&C.c()
w.r=A.agf(v.d)
w.y=this.b},
$S:0}
A.eqK.prototype={
$1(d){return this.a.cfj()},
$S:9}
A.eqL.prototype={
$1(d){return this.a.c6L()},
$S:9}
A.eqF.prototype={
$1(d){var w=null
return C.ek(C.a([C.bG(B.fzw,new A.eqE(this.a,d),w)],x.p),w,w,E.n7,B.fyE,w,w,w,w,B.fEU,w)},
$S:18}
A.eqE.prototype={
$0(){C.a3(this.b,!1).N(null)
this.a.awl()},
$S:0}
A.eqB.prototype={
$1(d){var w=null,v=this.a,u=v.d
u===$&&C.c()
u=C.d("Every problem on the customer's list is fixed.\n\nMistakes: "+u.f+"\nShocks: "+u.r+"\nLives left: "+u.e+"\n\nThe next call will have different problems.",w,w,w,w,w,w,B.a8C,w,w,w)
return C.ek(C.a([C.bM(!1,B.aT0,w,w,!0,w,w,new A.eqz(d),w,w),C.bG(B.fAL,new A.eqA(v,d),w)],x.p),w,w,E.n7,u,w,w,w,w,B.fHk,w)},
$S:18}
A.eqz.prototype={
$0(){C.a3(this.a,!1).N(null)
return null},
$S:0}
A.eqA.prototype={
$0(){C.a3(this.b,!1).N(null)
this.a.awl()},
$S:0}
A.eqD.prototype={
$0(){var w,v,u=this.a
u.e=D.o.F(Date.now(),1e5)
w=u.gCL(0)
v=u.d
v===$&&C.c()
w=A.hex(v.b,w)
u.d=w
u.r=A.agf(w.d)
u.at=!1
u.z=null
u.y=0},
$S:0}
A.er_.prototype={
$0(){return this.a.cA1(this.b)},
$S:0}
A.eqW.prototype={
$1(d){return d<=5},
$S:34}
A.eqV.prototype={
$1(d){var w=this.a,v=w.d
v===$&&C.c()
return A.hn0(v.d,w.w.gii()/1000)},
$S:z+10}
A.eqX.prototype={
$1(d){return!d.c},
$S:z+15}
A.eqY.prototype={
$1(d){return B.wt.h(0,d.a).a},
$S:z+116}
A.eqZ.prototype={
$0(){var w=this.a
return w.m(new A.eqU(w,this.b))},
$S:0}
A.eqU.prototype={
$0(){return this.a.x=this.b},
$S:0}
A.eqT.prototype={
$1(d){return new C.dY(new A.eqS(this.a),null)},
$S:19}
A.eqS.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=this.a,j=k.d
j===$&&C.c()
w=x.p
j=C.a([B.fx1,D.au,C.d("Mistakes "+j.f+" \xb7 Shocks "+j.r+" \xb7 Lives "+j.e,l,l,l,l,l,l,B.Jx,l,l,l),D.R],w)
v=k.d.c
v===$&&C.c()
u=v.length
t=0
for(;t<v.length;v.length===u||(0,C.M)(v),++t){s=v[t]
r=D.c.j(0.05)
q=new C.aQ(14,14)
p=new C.ay(s.c?D.bo.j(0.6):D.bz,1,D.r,-1)
o=s.c?"\u2705":"\ud83d\udd27"
n=B.wt.h(0,s.a).a
m=s.c?D.aB:D.c
j.push(C.p(l,new C.y(o+" "+n,l,new C.F(!0,m,l,l,l,l,13.5,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l),l,l,l,l,l,l,l,l,l),D.f,l,l,new C.o(r,l,new C.bJ(p,p,p,p),new C.bk(q,q,q,q),l,l,D.n),l,l,l,D.cu,D.bj,l,l,l))}j.push(D.am)
j.push(B.fCi)
j.push(D.N)
j.push(C.B(C.a([B.bBC,C.XM(l,l,l,l,!1,D.y,l,l,l,l,l,l,new A.eqQ(k,e),l,l,l,l,l,l,l,l,k.d.b)],w),D.m,l,D.e,D.j,0,l,l))
j.push(C.bG(B.fFm,new A.eqR(k,d),l))
return C.bm(!0,C.ct(j,l,D.bR,l,l,D.ag,!0),!0,!1,D.af,!0,!0)},
$S:87}
A.eqQ.prototype={
$1(d){var w=this.a.d
w===$&&C.c()
w.b=d
this.b.$1(new A.eqP())},
$S:8}
A.eqP.prototype={
$0(){},
$S:0}
A.eqR.prototype={
$0(){C.a3(this.b,!1).N(null)
this.a.awl()},
$S:0}
A.feb.prototype={
$1(d){return d.d===this.a},
$S:z+16}
A.bSL.prototype={
$1(d){var w,v,u,t,s=this.a,r=s.p1
if(r!=="back"){s=r==="left"?-1.5707963267948966:1.5707963267948966
return new C.z(new C.z(0,d),s)}r=s.k1
w=A.h3L(s,A.aOG(r==null?"tv100":r),0)
s=w.c
r=w.a/2
v=s-r-18
u=this.b
t=-u/2+14
if(v<t)v=s+r+18
v=D.k.E(v,t,u/2-14)
return new C.z(new C.z(v,d),Math.atan2(s-v,-d))},
$S:1811}
A.bSM.prototype={
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
$S:1812}
A.d3l.prototype={
$0(){return A.h3A(this.a)},
$S:0}
A.d3m.prototype={
$1(d){var w=this.a
return w.m(new A.d3k(w,this.b))},
$S:8}
A.d3k.prototype={
$0(){var w=this.a
w.d=this.b
w.f.a8(0)
w.r=null},
$S:0}
A.d3n.prototype={
$1(d){var w=this.a
return w.m(new A.d3j(w))},
$S:8}
A.d3j.prototype={
$0(){var w=this.a
w.e=!1
w.r=null},
$S:0}
A.d3o.prototype={
$1(d){var w=this.a
return w.m(new A.d3i(w))},
$S:8}
A.d3i.prototype={
$0(){var w=this.a
w.e=!0
w.r=null},
$S:0}
A.d3p.prototype={
$1(d){var w=this.a
return w.m(new A.d3h(w,this.b,d))},
$S:33}
A.d3h.prototype={
$0(){var w=this.a,v=this.c
v.toString
w.f.n(0,this.b,v)
w.r=null},
$S:0}
A.d3q.prototype={
$1(d){var w,v,u=null,t=this.a,s=B.zc[t.d],r=this.b,q=s.e.h(0,r)
q.toString
w=x.N
q=C.G([r,q],w,w)
t=t.f.h(0,r)
t.toString
v=A.hmH(s.b,q,C.G([r,t],w,w))
t=v.a
s=t===B.uW
if(s)r="Right: this follows the diagram."
else{r=v.b
r=D.d.gI(r).c+" "+D.d.gI(r).e}if(s)t=D.bo
else t=t===B.Tb?D.bI:D.cs
return C.d(r,u,u,u,u,u,u,C.l(u,u,t,u,u,u,u,u,u,u,u,12.5,u,u,u,u,1.3,!0,u,u,u,u,u,u,u,u),u,u,u)},
$S:422}
A.d3r.prototype={
$0(){var w=this.a
return w.m(new A.d3g(w))},
$S:0}
A.d3g.prototype={
$0(){var w=this.a,v=B.zc[w.d]
return w.r=A.hmH(v.b,v.e,w.f)},
$S:0}
A.fuv.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=this
for(w=k.a*1.8,v=k.b,u=k.c,t=k.d,s=0.3*t,t=0.05*t,r=0;r<d;++r){q=w+r*0.173
p=D.k.F(q,1)
o=Math.sin((r*3.1+D.k.bm(q))*12.9898)*43758.5453
n=(o-Math.floor(o))*3.141592653589793*2
o=Math.sin((r+5)*12.9898)*43758.5453
m=e*(0.6+(o-Math.floor(o))*0.8)
q=u.$1(new A.r(Math.cos(n)*p*m,Math.sin(n)*p*m-p*p*6,3+p*3))
l=C.ar(E.Ye,F.M3,p)
l.toString
v.fT(q,s*(1-p*0.6)+t,l,3,5,0)}},
$S:1813}
A.fuu.prototype={
$3(d,e,f){var w,v,u,t,s,r,q,p,o,n=this,m=n.a
m.d=0.34
for(w=n.b,v=w*0.45,u=n.c,t=n.d,s=1-e,r=0;r<d;++r){q=D.k.F(v+r/d,1)
p=u.$1(new A.r(Math.sin(r*1.7+w)*1.4+q*1.5,q*f-1,3.5+q*4))
o=C.ar(E.AZ,B.bmx,s)
o.toString
o=C.ar(o,B.b9S,q)
o.toString
m.fT(p,(1.1+q*3.4)*t,o,3,6,0)}m.d=1},
$S:1814}
A.fu_.prototype={
$5(d,e,f,g,h){return this.a.push(new A.wd(d,e,f,g,h))},
$S:z+117}
A.fu4.prototype={
$2(d,e){var w=this.a
return new C.Z(w,new A.fu5(d,e),C.S(w).k("Z<1>")).gL(0)},
$S:z+118}
A.fu5.prototype={
$1(d){return d.a.c===this.a&&d.b.c===this.b},
$S:z+14}
A.fu0.prototype={
$1(d){return d.b.c===B.aQv},
$S:z+14}
A.fu1.prototype={
$1(d){return d.a.c===B.aVT},
$S:z+14}
A.fu2.prototype={
$1(d){return!1},
$S:z+14}
A.fu3.prototype={
$1(d){return!1},
$S:z+14}
A.fdJ.prototype={
$1(d){return D.d.b3(this.a,new A.fdK(d))},
$S:3}
A.fdK.prototype={
$1(d){return d.a===this.a},
$S:z+33}
A.cvu.prototype={
$1(d){return A.hM7(d)},
$S:z+14}
A.cvv.prototype={
$2(d,e){return d+e},
$S:69}
A.cvw.prototype={
$1(d){return d.b.a===B.uW},
$S:z+32}
A.fu6.prototype={
$2(d,e){var w=this.a.h(0,d)
if(w==null)this.b.push(new A.wd("LEAD_MISSING",B.Tb,"The "+d+" lead is not connected.","Every lead on the diagram needs its connection.","Connect the "+d+" lead to "+e+"."))
else if(w!==e)this.b.push(new A.wd("LEAD_WRONG",B.aO3,"The "+d+" lead is connected to "+w+", but the diagram says "+e+".","Connections follow the approved wiring diagram.","Move the "+d+" lead to "+e+"."))},
$S:114}
A.fRq.prototype={
$1(d){var w,v,u,t,s,r=null,q=C.aH(d,r,x.w).w,p=x.p,o=C.a([B.fo9,D.am,B.fHo,D.R],p)
for(w=0;w<5;++w){v=B.d7A[w]
u=D.c.j(0.05)
t=new C.aQ(12,12)
s=new C.ay(D.bz,1,D.r,-1)
o.push(C.p(r,C.x(C.a([new C.y(v.a+": "+v.b,r,D.aRK,r,r,r,r,r,r,r,r,r),D.cO,new C.y("Goes to: "+v.c+"\nCircuit: "+v.d,r,E.DR,r,r,r,r,r,r,r,r,r),D.cO,new C.y(v.e,r,D.aSr,r,r,r,r,r,r,r,r,r),D.cO,new C.y("Exception: "+v.f,r,B.fgI,r,r,r,r,r,r,r,r,r)],p),D.E,r,D.e,D.j,0,D.p),D.f,r,r,new C.o(u,r,new C.bJ(s,s,s,s),new C.bk(t,t,t,t),r,r,D.n),r,r,r,D.cu,D.y_,r,r,r))}o.push(D.am)
o.push(B.fpr)
return C.bm(!0,new C.cT(new C.aX(0,1/0,0,q.a.b*0.85),C.ct(o,r,D.bR,r,r,D.ag,!0),r),!0,!1,D.af,!0,!0)},
$S:25}
A.fRo.prototype={
$1(d){return new A.a0K(this.a,this.b,null)},
$S:z+121}
A.f3S.prototype={
$1(d){var w=this.a,v=w.a.c,u=this.b
d.toString
v.c.n(0,u,d)
w.m(new A.f3R(w,u,d))},
$S:180}
A.f3R.prototype={
$0(){var w=this.c
this.a.d.n(0,this.b,w)
return w},
$S:0}
A.f3T.prototype={
$0(){var w=this.a
w.m(new A.f3Q(w,w.a.c.bpu(0)))},
$S:0}
A.f3Q.prototype={
$0(){return this.a.e=this.b},
$S:0}
A.f3U.prototype={
$1(d){return d.b.a!==B.uW},
$S:z+32}
A.f3V.prototype={
$0(){var w=this.a,v=w.c
v.toString
w=w.e
C.a3(v,!1).N(w)
return null},
$S:0}
A.bQn.prototype={
$1(d){return this.a.a.$0()},
$S:11}
A.bQm.prototype={
$1(d){var w=this.a
if(!w.c)return
w.a.$0()
if(w.c)w.aZm()},
$S:9};(function aliases(){var w=A.aMP.prototype
w.bwZ=w.t})();(function installTearOffs(){var w=a._instance_0u,v=a._instance_1u,u=a.installStaticTearOff,t=a.installInstanceTearOff,s=a._instance_2u,r=a._instance_0i
var q
w(q=A.adQ.prototype,"gbUI","bUJ",0)
v(q,"gLu","a4I",81)
u(A,"i9Q",3,null,["$3"],["hWM"],27,0)
w(q=A.aoc.prototype,"gc50","c51",0)
w(q,"gbpo","bpp",0)
t(q,"gcxm",0,0,null,["$1$done","$0"],["aAR","cxn"],122,0,0)
w(q,"gczp","czq",0)
w(q,"gbNc","bNd",0)
v(A.aSO.prototype,"gcPO","cPP",17)
s(q=A.aDO.prototype,"gbMe","bMf",35)
w(q,"giP","iz",0)
t(q,"gc6e",0,1,null,["$2$keepTour","$1"],["awU","Ar"],55,0,0)
v(q,"gc6i","c6j",11)
w(q,"gbO8","bO9",0)
w(q,"gbOa","bOb",0)
w(q,"gbOu","bOv",0)
w(q,"gc1g","c1h",0)
w(q,"gbEE","bEF",0)
w(q,"gcBT","cBU",0)
w(q,"gcpX","cpY",0)
w(q,"gbMS","bMT",0)
w(q,"gaPQ","arV",0)
w(q,"gc6c","c6d",0)
w(q,"gcsw","csx",0)
w(q,"gcBN","cBO",20)
w(q,"gcxo","RO",0)
w(q,"gb6i","a2b",0)
w(q,"gb6x","a2f",0)
w(q,"gcDT","cDU",0)
w(q,"gbRK","bRL",0)
w(q,"gcxl","AW",0)
w(q,"gc6h","Ec",20)
w(q,"gcf5","a_V",20)
w(q,"gcev","a_M",20)
w(q,"gaMF","bzZ",20)
w(q,"gc6m","c6n",0)
w(q,"gcn8","cn9",0)
r(q,"gc6k","c6l",0)
u(A,"hq6",3,null,["$3"],["iaX"],27,0)
u(A,"h3b",3,null,["$3"],["hqk"],27,0)
w(q=A.azH.prototype,"gc6r","qq",0)
w(q,"gIT","oc",0)
v(q,"gIU","IV",11)
w(q,"gck7","ck8",0)
w(q,"gczs","czt",0)
w(q=A.aFw.prototype,"gIT","oc",0)
v(q,"gIU","IV",11)
w(q,"gc6s","c6t",0)
w(q=A.azX.prototype,"gIT","oc",0)
v(q,"gIU","IV",11)
r(q,"gc6p","c6q",0)
w(q=A.aAQ.prototype,"gIT","oc",0)
v(q,"gIU","IV",11)
w(q=A.aEe.prototype,"gc6w","aZ1",0)
v(q,"gc6x","c6y",11)
w(q,"gcuN","cuO",0)
v(A.Xi.prototype,"gapu","boy",109)
w(q=A.aEl.prototype,"gc6H","c6I",0)
s(q,"gc6B","c6C",35)
w(q,"gbQt","aTg",0)
w(q,"gc1e","c1f",0)
w(q,"gbCw","bCx",0)
w(q,"gbCu","bCv",0)
w(q,"gc6D","adR",0)
v(q,"gc6F","c6G",11)
w(q=A.aEp.prototype,"gc6M","aZ4",0)
v(q,"gc6N","c6O",11)})();(function inheritance(){var w=a.mixin,v=a.mixinHard,u=a.inheritMany,t=a.inherit
u(C.lW,[A.eTo,A.rb,A.Jp,A.Fs,A.Fz])
u(C.ag,[A.a9l,A.auP,A.aob,A.apb,A.IE,A.aHZ,A.Nq,A.avJ,A.DF,A.a9e,A.a4E,A.aAP,A.afj,A.VR,A.O0,A.arl,A.apx,A.a0K])
u(C.ah,[A.aMG,A.aMP,A.aoc,A.bjc,A.aDO,A.bsa,A.bjd,A.brZ,A.azH,A.aFw,A.azX,A.aAQ,A.bvB,A.aEe,A.aEl,A.aEp,A.bd1,A.btf])
t(A.adQ,A.aMG)
t(A.bnN,O.atK)
u(C.aD,[A.r,A.lN,A.cW,A.hd,A.tG,A.fJ,A.fk,A.bSw,A.czw,A.Ap,A.baN,A.bb7,A.bg8,A.dl0,A.Ml,A.dqy,A.dfd,A.lx,A.r2,A.H7,A.aRU,A.bG3,A.hk,A.FD,A.z1,A.xa,A.aT2,A.a3V,A.ajR,A.bKg,A.bIm,A.dfG,A.rG,A.Sc,A.aSo,A.bvy,A.bIo,A.A9,A.cxd,A.pv,A.bIa,A.F7,A.OI,A.HQ,A.LK,A.aSO,A.fG,A.Ck,A.ju,A.SH,A.b84,A.m8,A.fn,A.DN,A.pN,A.abi,A.oh,A.aV8,A.a4S,A.aVd,A.eVM,A.M5,A.PZ,A.bSN,A.ps,A.jF,A.MO,A.cke,A.EW,A.nq,A.WP,A.ck4,A.yX,A.os,A.Xu,A.avh,A.aTC,A.ex,A.Xi,A.iV,A.rE,A.um,A.Me,A.csq,A.xS,A.rC,A.a9A,A.i8,A.coZ,A.Ar,A.bqx,A.aVf,A.b8w,A.ajW,A.cvr,A.cyM,A.a3Q,A.bKq,A.wd,A.te,A.b5b,A.aaI,A.aaJ,A.v1,A.b3U,A.b73,A.cvt,A.Ps,A.a4N])
u(C.hS,[A.bYG,A.bYH,A.bYF,A.bYI,A.bYJ,A.fRI,A.fRG,A.fRH,A.fRF,A.fRu,A.bHB,A.bHC,A.bHD,A.bHE,A.bHG,A.bHF,A.bHA,A.bHz,A.cq_,A.cq0,A.cpT,A.cpU,A.cpV,A.cpW,A.cpZ,A.eWS,A.eWR,A.eWO,A.eWP,A.eWQ,A.eWM,A.bRj,A.bRf,A.bRn,A.bRi,A.bRq,A.bRo,A.bRs,A.bG5,A.bG4,A.fIM,A.frx,A.fry,A.frq,A.frr,A.frs,A.frt,A.fru,A.frv,A.frw,A.fdU,A.fhg,A.fqb,A.fri,A.frj,A.frk,A.c1G,A.c1E,A.c1w,A.c1p,A.c1n,A.c1h,A.c1o,A.c17,A.c18,A.c19,A.ftO,A.bKi,A.bKl,A.fx6,A.fb7,A.bIp,A.fRD,A.fRE,A.fRB,A.ftm,A.cxf,A.cxg,A.bIb,A.bIi,A.bIj,A.bIk,A.bIl,A.bIc,A.bId,A.bIe,A.bIg,A.bIh,A.bJ_,A.bIX,A.bIY,A.bIZ,A.bJ3,A.bJ2,A.bJ0,A.bJ4,A.dNZ,A.dNU,A.dOd,A.dNX,A.dOg,A.ftY,A.fSb,A.ft9,A.fta,A.ft7,A.ft8,A.fJx,A.fJy,A.fua,A.fub,A.fu8,A.fu9,A.fro,A.frp,A.fSa,A.fea,A.fr9,A.fS9,A.fS6,A.bRY,A.bRX,A.bSy,A.bSz,A.bSA,A.bSB,A.bSC,A.bSG,A.bSD,A.bSE,A.bSK,A.bSJ,A.bSI,A.bSH,A.e8x,A.e8u,A.e8v,A.e8w,A.e5j,A.e7I,A.e7J,A.e7F,A.e3T,A.e8a,A.e8b,A.e7n,A.e6o,A.e6k,A.e5c,A.e64,A.e5m,A.e5U,A.e8o,A.e4W,A.e5S,A.e5T,A.e5x,A.e66,A.e4q,A.e4p,A.e4S,A.e7c,A.e7b,A.e6X,A.e6U,A.e88,A.e87,A.e8_,A.e7V,A.e7U,A.e7x,A.e8m,A.e8c,A.e68,A.e69,A.e6a,A.e5V,A.e5W,A.e7e,A.e7s,A.e61,A.e60,A.e62,A.e7t,A.e6q,A.e6r,A.e6z,A.e6A,A.e6B,A.e6c,A.e6d,A.e8n,A.e6f,A.e6e,A.e3S,A.e3M,A.e3N,A.e3O,A.e8r,A.e4b,A.e4_,A.e40,A.e4d,A.e3U,A.e72,A.dqY,A.f05,A.f06,A.f07,A.f04,A.frJ,A.frQ,A.frL,A.frI,A.frB,A.frN,A.frP,A.frO,A.frM,A.frC,A.frA,A.frF,A.frG,A.fIW,A.fIU,A.fIT,A.fIV,A.frT,A.fs4,A.frU,A.frV,A.frX,A.fs_,A.fs0,A.fs1,A.fs2,A.frY,A.flk,A.flf,A.flg,A.flh,A.fkH,A.fkJ,A.fkU,A.fl4,A.fli,A.fl9,A.fla,A.flb,A.flc,A.fld,A.fle,A.fkK,A.fkL,A.fkM,A.fkN,A.fkO,A.fkP,A.fkQ,A.fkR,A.fkS,A.fkT,A.fkV,A.fkW,A.fkX,A.fkY,A.fkZ,A.fl_,A.fl0,A.fl1,A.fl2,A.fl3,A.fl5,A.fl6,A.fl7,A.fl8,A.fv2,A.fv3,A.fv4,A.fbD,A.fbt,A.flR,A.flD,A.flE,A.flF,A.flG,A.flJ,A.flK,A.flL,A.flM,A.flN,A.flO,A.flP,A.flQ,A.flH,A.flI,A.ffr,A.fsb,A.fs7,A.fsa,A.fs9,A.dOh,A.f_U,A.fK0,A.fK_,A.d6v,A.d6y,A.d6B,A.d6D,A.d6W,A.d7b,A.d6T,A.d7c,A.eQh,A.eQp,A.eQq,A.d9I,A.d9S,A.d9T,A.d9V,A.dgN,A.dgY,A.dgX,A.dh_,A.fb8,A.fbd,A.fbe,A.fbc,A.fsN,A.fsM,A.fsL,A.frS,A.fus,A.ck8,A.ck9,A.ck5,A.cka,A.ckb,A.ckc,A.ckd,A.ck6,A.ck7,A.fsK,A.fsI,A.fsC,A.fsF,A.fsD,A.fsE,A.fsJ,A.fsG,A.fsH,A.fsB,A.fJ8,A.eko,A.ek3,A.ek8,A.ekp,A.ek9,A.eka,A.ekb,A.ekm,A.ekq,A.eks,A.ekr,A.ekg,A.eke,A.fRt,A.cp4,A.cpb,A.cpc,A.cpd,A.cpe,A.cpg,A.cpf,A.cp3,A.cp1,A.cp2,A.cp9,A.cpa,A.cp5,A.cp6,A.cp7,A.cp8,A.eo3,A.eo4,A.eo5,A.eoJ,A.eoL,A.eoN,A.eod,A.eoa,A.eov,A.eow,A.eoi,A.eoj,A.eok,A.eon,A.eoo,A.eop,A.eoq,A.eor,A.eos,A.eot,A.eou,A.eol,A.eom,A.epj,A.epp,A.epa,A.eoI,A.eoB,A.eoC,A.fll,A.flm,A.fsO,A.fsP,A.fsQ,A.fsT,A.fsR,A.fJs,A.fJt,A.fJu,A.csv,A.csr,A.cst,A.csu,A.css,A.eqK,A.eqL,A.eqF,A.eqB,A.eqW,A.eqV,A.eqX,A.eqY,A.eqT,A.eqQ,A.feb,A.bSL,A.bSM,A.d3m,A.d3n,A.d3o,A.d3p,A.d3q,A.fuu,A.fu_,A.fu5,A.fu0,A.fu1,A.fu2,A.fu3,A.fdJ,A.fdK,A.cvu,A.cvw,A.fRq,A.fRo,A.f3S,A.f3U,A.bQn,A.bQm])
u(C.k7,[A.bYE,A.cpS,A.cpX,A.cpY,A.bRg,A.bRl,A.bRk,A.fq7,A.frz,A.fqc,A.c1m,A.bKk,A.bKh,A.bKm,A.bKj,A.bIn,A.c_h,A.fRC,A.ftn,A.cxe,A.bIf,A.bJ1,A.fvg,A.fvh,A.fvi,A.fvj,A.fvk,A.fu7,A.fcR,A.fvl,A.fvm,A.fvn,A.fvo,A.fvp,A.fvq,A.fvr,A.fvs,A.fvt,A.fvu,A.fS7,A.fS8,A.bSF,A.e6G,A.e5E,A.e89,A.e7m,A.e6n,A.e5o,A.e7a,A.e86,A.e7T,A.e6y,A.frR,A.frK,A.frH,A.frD,A.frE,A.fs6,A.frW,A.frZ,A.fs5,A.flj,A.fkI,A.fs8,A.d6z,A.eQm,A.d9H,A.fut,A.cph,A.eoH,A.eqS,A.fuv,A.fu4,A.cvv,A.fu6])
u(C.oV,[A.x5,A.aSp])
u(C.mT,[A.b5e,A.bec,A.bhJ])
t(A.bql,A.aMP)
u(C.jb,[A.eWN,A.bRr,A.bRm,A.bRh,A.bRp,A.fqd,A.fqa,A.c1D,A.c1r,A.c1x,A.c1F,A.c1u,A.c1t,A.c11,A.c1s,A.c1v,A.c1q,A.c1k,A.c1j,A.c1l,A.c1i,A.c16,A.c15,A.c1a,A.c1b,A.c1c,A.c1d,A.c1e,A.c14,A.c1f,A.c12,A.c13,A.c1g,A.c1A,A.c1B,A.c1z,A.c1C,A.c1y,A.ftP,A.dNY,A.dOa,A.dO4,A.dO5,A.dO3,A.dNV,A.dOe,A.dOc,A.dOb,A.dNT,A.dO_,A.dO0,A.dO1,A.dO2,A.dNW,A.dO7,A.dO8,A.dO9,A.dO6,A.dOf,A.fra,A.e8t,A.e7h,A.e7i,A.e7g,A.e7j,A.e5Q,A.e7K,A.e6N,A.e6O,A.e6P,A.e6Q,A.e6R,A.e5h,A.e5g,A.e5i,A.e5e,A.e5f,A.e5d,A.e5s,A.e5t,A.e5u,A.e6I,A.e6H,A.e6J,A.e6F,A.e6K,A.e6E,A.e6L,A.e6D,A.e6M,A.e6C,A.e4U,A.e4V,A.e5G,A.e5F,A.e5H,A.e5D,A.e5I,A.e5C,A.e5J,A.e5B,A.e5K,A.e5A,A.e5L,A.e5z,A.e5M,A.e5y,A.e7G,A.e7H,A.e63,A.e4j,A.e5Z,A.e5Y,A.e6_,A.e5X,A.e7o,A.e7l,A.e7k,A.e6m,A.e6l,A.e6i,A.e6h,A.e6j,A.e6g,A.e5N,A.e5O,A.e7d,A.e5q,A.e5p,A.e5r,A.e7p,A.e7A,A.e5n,A.e5l,A.e5k,A.e7z,A.e5R,A.e5w,A.e67,A.e4r,A.e4o,A.e4s,A.e4n,A.e4t,A.e4m,A.e4u,A.e4l,A.e4v,A.e4k,A.e4T,A.e76,A.e75,A.e77,A.e78,A.e79,A.e6V,A.e6T,A.e6W,A.e6S,A.e7Z,A.e7Y,A.e80,A.e81,A.e82,A.e83,A.e84,A.e85,A.e7P,A.e7N,A.e7O,A.e7Q,A.e7M,A.e7R,A.e7S,A.e7w,A.e7y,A.e7W,A.e7L,A.e7D,A.e7E,A.e7v,A.e7C,A.e8j,A.e8k,A.e8l,A.e8d,A.e8e,A.e8f,A.e8g,A.e8h,A.e8i,A.e5v,A.e6b,A.e7q,A.e5P,A.e7f,A.e7r,A.e7u,A.e7B,A.e6t,A.e6u,A.e6s,A.e6v,A.e6w,A.e6p,A.e6x,A.e3R,A.e3P,A.e65,A.e7X,A.e73,A.e74,A.e3Q,A.e51,A.e52,A.e53,A.e54,A.e55,A.e56,A.e50,A.e57,A.e5_,A.e58,A.e4Z,A.e59,A.e4Y,A.e5a,A.e4X,A.e5b,A.e8q,A.e8s,A.e8p,A.e4E,A.e4F,A.e4G,A.e4K,A.e4L,A.e4M,A.e4D,A.e4N,A.e4C,A.e4O,A.e4B,A.e4P,A.e4Q,A.e4A,A.e4R,A.e4z,A.e4H,A.e4y,A.e4I,A.e4x,A.e4J,A.e4w,A.e3Z,A.e4c,A.e43,A.e4e,A.e3Y,A.e4f,A.e4g,A.e3X,A.e4h,A.e4i,A.e41,A.e3W,A.e42,A.e3V,A.e44,A.e45,A.e46,A.e47,A.e48,A.e49,A.e4a,A.e7_,A.e70,A.e6Z,A.e71,A.e6Y,A.f03,A.f02,A.ce5,A.fs3,A.ft6,A.dOi,A.dOj,A.dOk,A.dOo,A.dOp,A.dOq,A.dOr,A.dOs,A.dOt,A.dOu,A.dOv,A.dOl,A.dOm,A.dOn,A.f_T,A.ctE,A.ctF,A.bUS,A.d6L,A.d6J,A.d6K,A.d6I,A.d6w,A.d6x,A.d6A,A.d6C,A.d6E,A.d6F,A.d6G,A.d6H,A.d6M,A.d6N,A.d74,A.d6X,A.d6Y,A.d75,A.d76,A.d6V,A.d77,A.d6U,A.d78,A.d79,A.d7a,A.d6Z,A.d6S,A.d7_,A.d70,A.d6R,A.d71,A.d6Q,A.d72,A.d6P,A.d73,A.d6O,A.eQk,A.eQl,A.eQj,A.eQd,A.eQe,A.eQf,A.eQg,A.eQi,A.eQt,A.eQr,A.eQo,A.eQs,A.eQn,A.d9N,A.d9O,A.d9M,A.d9F,A.d9J,A.d9K,A.d9L,A.d9G,A.d9Y,A.d9U,A.d9R,A.d9W,A.d9Q,A.d9X,A.d9P,A.dgS,A.dgT,A.dgR,A.dgM,A.dgO,A.dgP,A.dgQ,A.dh0,A.dgW,A.dgZ,A.dgV,A.dgU,A.fbb,A.fb9,A.fba,A.c9p,A.fsy,A.fsz,A.fsA,A.ekj,A.ekk,A.eki,A.ekc,A.ek1,A.ek2,A.ek6,A.ek7,A.ekh,A.ekl,A.ekn,A.ek5,A.ek4,A.eku,A.ekt,A.ekd,A.ekf,A.eoY,A.eoZ,A.eoX,A.eo_,A.eo0,A.enZ,A.eo1,A.eo2,A.enY,A.eoe,A.eog,A.eo6,A.eo7,A.eox,A.eof,A.eoU,A.eoV,A.eoW,A.eoS,A.eoT,A.eoR,A.eoK,A.eoM,A.eoO,A.eoP,A.eoQ,A.ep_,A.eob,A.eoc,A.eo8,A.eo9,A.eoh,A.epi,A.epk,A.ep4,A.ep7,A.ep8,A.ep6,A.ep9,A.ep5,A.epl,A.ep3,A.epm,A.ep2,A.epn,A.ep1,A.epo,A.epq,A.ep0,A.epb,A.epc,A.epd,A.epe,A.epf,A.epg,A.eph,A.eoz,A.eoA,A.eoy,A.eoD,A.eoE,A.eoF,A.eoG,A.fsS,A.eqN,A.eqO,A.eqM,A.eqC,A.eqH,A.eqI,A.eqG,A.eqJ,A.eqE,A.eqz,A.eqA,A.eqD,A.er_,A.eqZ,A.eqU,A.eqP,A.eqR,A.d3l,A.d3k,A.d3j,A.d3i,A.d3h,A.d3r,A.d3g,A.f3R,A.f3T,A.f3Q,A.f3V])
u(C.av,[A.aXE,A.U8,A.acj,A.bij,A.b6w,A.aWC,A.a6I])
w(A.aMG,O.atJ)
v(A.aMP,C.cq)})()
C.jL(b.typeUniverse,JSON.parse('{"a9l":{"ag":[],"v":[]},"adQ":{"ah":["a9l<1>"]},"auP":{"ag":[],"v":[]},"x5":{"aC":[]},"b5e":{"aC":[]},"bql":{"ah":["auP"]},"aob":{"ag":[],"v":[]},"aoc":{"ah":["aob"]},"aSp":{"aC":[]},"aXE":{"av":[],"v":[]},"U8":{"av":[],"v":[]},"apb":{"ag":[],"v":[]},"bjc":{"ah":["apb"]},"acj":{"av":[],"v":[]},"bec":{"aC":[]},"IE":{"ag":[],"v":[]},"aHZ":{"ag":[],"v":[]},"aDO":{"ah":["IE"]},"bij":{"av":[],"v":[]},"bhJ":{"aC":[]},"bsa":{"ah":["aHZ"]},"avJ":{"ag":[],"v":[]},"DF":{"ag":[],"v":[]},"a9e":{"ag":[],"v":[]},"a4E":{"ag":[],"v":[]},"aAP":{"ag":[],"v":[]},"afj":{"ag":[],"v":[]},"Nq":{"ag":[],"v":[]},"bjd":{"ah":["Nq"]},"brZ":{"ah":["avJ"]},"b6w":{"av":[],"v":[]},"aWC":{"av":[],"v":[]},"azH":{"ah":["DF"]},"aFw":{"ah":["a9e"]},"azX":{"ah":["a4E"]},"aAQ":{"ah":["aAP"]},"bvB":{"ah":["afj"]},"a6I":{"av":[],"v":[]},"VR":{"ag":[],"v":[]},"aEe":{"ah":["VR"]},"O0":{"ag":[],"v":[]},"aEl":{"ah":["O0"]},"arl":{"ag":[],"v":[]},"aEp":{"ah":["arl"]},"apx":{"ag":[],"v":[]},"bd1":{"ah":["apx"]},"a0K":{"ag":[],"v":[]},"btf":{"ah":["a0K"]}}'))
C.G6(b.typeUniverse,JSON.parse('{"bnN":1,"aMG":1}'))
var y={T:"A hot wire never goes on the green ground screw.",W:"A shut-off valve goes on the pipe that comes out of the wall.",v:"Both black wires go on brass screws. It does not matter which one.",r:"Brass screws are for the HOT wire (black).",q:"Each switch has its own screw on the other side, and each goes to its own light.",R:"Fasten the bare copper ground to the GREEN screw.",E:"Fasten the black hot to one HOT (X or Y) brass screw.",k:"Fasten the red hot to the other HOT brass screw.",N:"Fasten the white neutral to the silver NEUTRAL (W) screw.",b:"Fold the wires back and push the device into the box.",P:"LOAD is for feeding other outlets further down the line. It is covered with tape. Power comes in on the LINE screws.",x:"Look at the device and the wires. Learn which wire is which before you touch a screw.",M:"Move it with the arrow buttons, turn it, change its colour or take it out.",G:"Neutral goes on a silver screw. The silver screws stay joined, so one wire feeds both halves.",o:"Pick a paint colour above to change this wall.",n:"Put the cover plate on, turn the power on and test.",Q:"Silver screws are for the NEUTRAL wire (white).",f:"Switch the power on and flip the wall switch.",t:"The bare copper ground wire only goes on the GREEN screw.",u:"The black hot wire goes on a brass screw.",C:"The gold screws are BRASS. They are for the HOT wire (black).",Z:"The green screw is for the bare copper ground wire.",l:"The two hot wires (black and red) go on the two brass screws, X and Y, in either order.",p:"The two hot wires go on the two brass screws, in either order.",X:"The two traveler wires go on the two brass traveler screws, in either order.",g:"The two travelers coming from the first three-way go on the two top screws.",_:"The two travelers going to the second three-way go on the two bottom screws.",c:"The white neutral wire goes on a silver screw.",I:"The white neutral wire goes on the silver W screw.",B:"The white-silver screws are NICKEL. They are for the NEUTRAL wire (white).",D:"There is no medicine left. Buy some in the shop.",O:"Turn the breaker OFF and test that the wires are dead.",Y:"You are at the street light. Press Fix the street light."}
var x=(function rtii(){var w=C.ax
return{dw:w("m4<u?>"),ff:w("aRU"),l:w("bu<n,n>"),e:w("bu<n,L>"),M:w("dD<n>"),hg:w("a3V"),cD:w("aTC"),e7:w("eE<n>"),eP:w("rb"),gN:w("HK"),eB:w("m8"),fa:w("aA<Mw?>"),v:w("dv<H,n>"),fC:w("HQ"),m:w("O<lx>"),gQ:w("O<LK>"),V:w("O<ac>"),O:w("O<u>"),bm:w("O<a3Q>"),fW:w("O<aT2>"),B:w("O<a3V>"),C:w("O<xa>"),dI:w("O<M5>"),bP:w("O<eE<n>>"),gw:w("O<Me>"),dh:w("O<HK>"),_:w("O<m8>"),dY:w("O<oh>"),cX:w("O<aV8>"),D:w("O<a4S>"),ha:w("O<HQ>"),r:w("O<fG>"),E:w("O<hd>"),Z:w("O<jF>"),gL:w("O<ai<H>>"),ez:w("O<a7<n,aD>>"),c7:w("O<a7<n,@>>"),f4:w("O<a7<n,ci>>"),T:w("O<i8>"),dN:w("O<t>"),F:w("O<os>"),fI:w("O<nq>"),g:w("O<he>"),z:w("O<lN>"),gl:w("O<b3U>"),a6:w("O<+(a8E,H)>"),L:w("O<+(n,n)>"),dt:w("O<+(r,r)>"),d6:w("O<+(L,n)>"),f:w("O<+(L,L)>"),ek:w("O<+(H,n)>"),aJ:w("O<+(n,H,H)>"),dV:w("O<+(L,L,u)>"),al:w("O<+(H,L,R)>"),gp:w("O<+(H,H,ai<t>)>"),dQ:w("O<+(H,H,H)>"),eV:w("O<+(L,L,L,L)>"),az:w("O<+(H,H,L,R,n)>"),fP:w("O<OI>"),e3:w("O<a9A>"),fB:w("O<wd>"),a:w("O<fJ>"),gD:w("O<Xu>"),y:w("O<rG>"),s:w("O<n>"),fJ:w("O<aaI>"),dH:w("O<aaJ>"),W:w("O<v1>"),bz:w("O<A9>"),o:w("O<r>"),p:w("O<v>"),d:w("O<ju>"),gR:w("O<baN>"),bl:w("O<Ap>"),h:w("O<Ar>"),I:w("O<iV>"),x:w("O<hk>"),aQ:w("O<PZ>"),fG:w("O<bqx>"),X:w("O<pv>"),u:w("O<R>"),n:w("O<L>"),t:w("O<H>"),dS:w("O<aC?>"),k:w("O<ci>"),eF:w("cy<ah<ag>>"),dg:w("ai<L>"),j:w("ai<@>"),b:w("a7<n,@>"),G:w("a7<@,@>"),w:w("iE"),P:w("cr"),q:w("cW"),aU:w("aD"),dx:w("t"),ej:w("J9"),fX:w("lN"),cE:w("a9l<H>"),J:w("+(L,L)"),c5:w("dx<H>"),cR:w("Xi"),K:w("fJ"),cH:w("avh"),N:w("n"),ec:w("lR<n>"),dZ:w("b73"),g6:w("bp<L>"),Q:w("r"),ac:w("cz<H>"),cI:w("jK<n>"),am:w("Z<m8>"),fZ:w("Z<EW>"),cc:w("Z<n>"),dD:w("Z<H>"),c1:w("hj"),gh:w("Ck"),bB:w("bb7"),c9:w("bg8"),R:w("R"),i:w("L"),A:w("@"),S:w("H"),c:w("Ml?"),eT:w("Mw?"),U:w("ai<@>?"),dy:w("a7<n,@>?"),fF:w("a7<@,@>?"),cU:w("q4?"),Y:w("ci"),H:w("~")}})();(function constants(){var w=a.makeConstList
B.aXw=new A.ex(!0,"The water is on and nothing leaks. Perfect job!",!1,"")
B.aXx=new A.ex(!0,"Primer and paint rolled on.",!1,"")
B.aXy=new A.ex(!1,"This call is over. Start a new one.",!1,"")
B.aXz=new A.ex(!0,"Recorded.",!1,"")
B.aXA=new A.ex(!1,"That is not a place for a sheet.",!1,"")
B.aXB=new A.ex(!0,"Sanded smooth. Wear a mask: the dust is bad to breathe.",!1,"")
B.aaO=new A.ex(!1,"There is no device here.",!1,"")
B.aXC=new A.ex(!0,"You look closely. Everything looks fine here.",!1,"")
B.aXD=new A.ex(!1,"ZAP! You were shocked badly and it was your last life. Always turn the breaker OFF and test before you touch wires.",!0,"shock")
B.aXE=new A.ex(!0,"Paper tape pressed into the seam.",!1,"")
B.aXF=new A.ex(!0,"Unplugged.",!1,"")
B.aXG=new A.ex(!0,"Breaker OFF. It is safe to work on the wires.",!1,"")
B.aXH=new A.ex(!1,"ZAP! You were shocked badly. That was your last life: the job is over. Lesson: ALWAYS turn the breaker OFF and test the wires before you touch them.",!0,"shock")
B.aXI=new A.ex(!1,"There is nothing there.",!1,"")
B.aXJ=new A.ex(!1,"The outlet is burnt. Nothing works. Pull it out and put in a new one.",!0,"")
B.aXK=new A.ex(!0,"The water is on and nothing leaks yet, but the job is not finished.",!1,"")
B.aXL=new A.ex(!0,"Sheet hung. Now screw it to the studs.",!1,"")
B.aXM=new A.ex(!0,"Hole drilled through the middle of the stud, at the cable height. Holes go in the center so a nail cannot reach the cable.",!1,"")
B.aXN=new A.ex(!0,"Plugged in. Nothing happens because the breaker is off. Turn it on to test.",!1,"")
B.aXO=new A.ex(!0,"You flipped the tripped breaker fully OFF. Fix the problem before you turn it on again.",!1,"")
B.aXP=new A.ex(!0,"Click.",!1,"")
B.aXQ=new A.ex(!0,"The wires are folded back and the device is in the box. Now put the cover on.",!1,"")
B.aXR=new A.ex(!0,"Breaker OFF. The wires on this circuit are dead now. (Always test them to be sure.)",!1,"")
B.aXS=new A.ex(!1,"Nothing is wet.",!1,"")
B.aXT=new A.ex(!0,"Power is on.",!1,"")
B.aXU=new A.ex(!0,"Water OFF at the main valve. You can cut into the pipes safely now.",!1,"")
B.aXV=new A.ex(!0,"Opening cut around the box with the drywall saw. Keep it tight: the plate has to cover the edge.",!1,"")
B.aXW=new A.ex(!0,"Device pulled out of the box.",!1,"")
B.aXX=new A.ex(!0,"Screw set just below the paper, not through it.",!1,"")
B.aXY=new A.ex(!1,"ZAP! You touched a live wire. In Learn mode you are not hurt, but in real life this can kill. Switch the breaker OFF and test the wires first.",!0,"shock")
B.aXZ=new A.ex(!0,"Cover on. Now you can turn the breaker on and test.",!1,"")
B.VG=new A.ex(!1,"",!1,"")
B.aY_=new A.ex(!0,"Device taken out. You can put it somewhere else, or put in a new one.",!1,"")
B.aY0=new A.ex(!0,"Breaker back ON.",!1,"")
B.aY1=new A.ex(!1,"That is not a stud.",!1,"")
B.aY2=new A.ex(!0,"Off.",!1,"")
B.aY3=new A.ex(!1,"Nothing to flip yet.",!1,"")
B.aY4=new A.ex(!0,"Wire taken off.",!1,"")
B.aY5=new A.ex(!0,"The mud is dry.",!1,"")
B.aY6=new A.ex(!0,"Breaker reset.",!1,"")
B.aY7=new A.ex(!0,"Box mounted. (Careful: this is not a fan-rated box. A fan on it could fall.)",!1,"")
B.fGQ=new C.y("Tap a piece of furniture, or add one:",null,N.DK,null,null,null,null,null,null,null,null,null)
B.eh8=new C.D(D.ng,B.fGQ,null)
B.aYe=new C.bK(D.a3,null,null,B.eh8,null)
B.abg=new A.lx(0,0,0,0,1)
B.abS=new C.aX(0,290,0,1/0)
B.b_o=new C.bk(G.T_,G.T_,D.bG,D.bG)
B.bpc=new C.u(1,0.12156862745098039,0.13725490196078433,0.18823529411764706,D.q)
B.bpk=new C.u(1,0.054901960784313725,0.06274509803921569,0.09411764705882353,D.q)
B.d1X=w([B.bpc,B.bpk],x.O)
B.bZt=new C.a9(D.b3,D.b6,D.x,B.d1X,null,null)
B.b2o=new C.o(null,null,G.abG,B.b_o,null,B.bZt,D.n)
B.F4=new C.u(1,0.08627450980392157,0.10588235294117647,0.1411764705882353,D.q)
B.b0L=new C.bJ(D.a0,D.a0,Aa.vk,D.a0)
B.b3e=new C.o(B.F4,null,B.b0L,null,null,null,D.n)
B.b_z=new C.bk(D.rM,D.iA,D.iA,D.iA)
B.b3k=new C.o(D.aJ,null,null,B.b_z,null,null,D.n)
B.fHt=new C.y("\u2600\ufe0f Let it dry",null,F.A_,null,null,null,null,null,null,null,null,null)
B.b7n=new C.cn(D.A,null,null,B.fHt,null)
B.fHd=new C.y("\u23e9 Skip to the wiring",null,F.A_,null,null,null,null,null,null,null,null,null)
B.b7v=new C.cn(D.A,null,null,B.fHd,null)
B.fvJ=new C.y("\ud83c\udfd7\ufe0f",null,D.pr,null,null,null,null,null,null,null,null,null)
B.b7L=new C.cn(D.A,null,null,B.fvJ,null)
B.fvw=new C.y("\ud83c\udfe0",null,D.aRX,null,null,null,null,null,null,null,null,null)
B.b8b=new C.cn(D.A,null,null,B.fvw,null)
B.b9A=new C.u(1,0.9294117647058824,0.9098039215686274,0.8627450980392157,D.q)
B.L_=new C.u(1,0.1803921568627451,0.20392156862745098,0.25098039215686274,D.q)
B.b9M=new C.u(1,0.9725490196078431,0.9647058823529412,0.9333333333333333,D.q)
B.vp=new C.u(1,0.5450980392156862,0.3686274509803922,0.20392156862745098,D.q)
B.b9S=new C.u(1,0.5568627450980392,0.5568627450980392,0.5882352941176471,D.q)
B.ad9=new C.u(1,0.611764705882353,0.5568627450980392,0.4588235294117647,D.q)
B.EA=new C.u(1,0.24705882352941178,0.5607843137254902,0.30980392156862746,D.q)
B.ba6=new C.u(1,0.8392156862745098,0.9333333333333333,0.984313725490196,D.q)
B.oI=new C.u(1,0.9450980392156862,0.9450980392156862,0.9176470588235294,D.q)
B.bau=new C.u(1,0.9098039215686274,0.9254901960784314,0.9372549019607843,D.q)
B.baw=new C.u(1,0.4823529411764706,0.5098039215686274,0.5450980392156862,D.q)
B.baD=new C.u(1,0.10588235294117647,0.4980392156862745,0.20392156862745098,D.q)
B.adp=new C.u(1,0.7215686274509804,0.7450980392156863,0.7725490196078432,D.q)
B.nN=new C.u(1,0.5450980392156862,0.3686274509803922,0.23529411764705882,D.q)
B.adr=new C.u(1,0.8509803921568627,0.8274509803921568,0.7725490196078432,D.q)
B.adv=new C.u(1,0.6549019607843137,0.6784313725490196,0.7098039215686275,D.q)
B.hj=new C.u(1,0.16862745098039217,0.17647058823529413,0.2,D.q)
B.EC=new C.u(1,0.8980392156862745,0.7529411764705882,0.4823529411764706,D.q)
B.L9=new C.u(1,0.8156862745098039,0.5098039215686274,0.27450980392156865,D.q)
B.WH=new C.u(1,0.5411764705882353,0.41568627450980394,0.2784313725490196,D.q)
B.adC=new C.u(1,0.1843137254901961,0.4196078431372549,0.23529411764705882,D.q)
B.WK=new C.u(1,0.2980392156862745,0.5450980392156862,0.2901960784313726,D.q)
B.xs=new C.u(1,0.788235294117647,0.6274509803921569,0.22745098039215686,D.q)
B.adI=new C.u(1,0.9411764705882353,0.5411764705882353,0.1411764705882353,D.q)
B.EI=new C.u(1,0.9921568627450981,0.9882352941176471,0.9686274509803922,D.q)
B.WO=new C.u(1,0.5568627450980392,0.5843137254901961,0.6196078431372549,D.q)
B.bch=new C.u(1,0.47843137254901963,0.35294117647058826,0.22745098039215686,D.q)
B.jE=new C.u(1,0.788235294117647,0.807843137254902,0.8392156862745098,D.q)
B.adR=new C.u(1,0.4196078431372549,0.45098039215686275,0.5019607843137255,D.q)
B.adS=new C.u(1,0.5568627450980392,0.35294117647058826,0.2901960784313726,D.q)
B.AP=new C.u(1,0.9294117647058824,0.9176470588235294,0.8784313725490196,D.q)
B.bd5=new C.u(1,0.9137254901960784,0.7254901960784313,0.28627450980392155,D.q)
B.bdg=new C.u(1,0.22745098039215686,0.22745098039215686,0.24705882352941178,D.q)
B.bdo=new C.u(1,0.5490196078431373,0.5764705882352941,0.6078431372549019,D.q)
B.EM=new C.u(1,0.22745098039215686,0.24705882352941178,0.2784313725490196,D.q)
B.WU=new C.u(1,0.8980392156862745,0.8980392156862745,0.8666666666666667,D.q)
B.Lj=new C.u(1,0.10588235294117647,0.11372549019607843,0.13333333333333333,D.q)
B.bdB=new C.u(1,0.22745098039215686,0.23529411764705882,0.25882352941176473,D.q)
B.WY=new C.u(1,0.30980392156862746,0.6588235294117647,0.3764705882352941,D.q)
B.ae5=new C.u(1,0.8509803921568627,0.803921568627451,0.7215686274509804,D.q)
B.ae6=new C.u(1,0.4196078431372549,0.2901960784313726,0.16862745098039217,D.q)
B.Ll=new C.u(1,0.11764705882352941,0.11764705882352941,0.12549019607843137,D.q)
B.bdO=new C.u(1,0.8862745098039215,0.8745098039215686,0.8235294117647058,D.q)
B.ae9=new C.u(1,0.9490196078431372,0.7803921568627451,0.611764705882353,D.q)
B.bdS=new C.u(1,0.42745098039215684,0.2901960784313726,1,D.q)
B.bdX=new C.u(1,0.3686274509803922,0.27450980392156865,0.18823529411764706,D.q)
B.be_=new C.u(1,0.9058823529411765,0.8470588235294118,0.7450980392156863,D.q)
B.be7=new C.u(1,0.5411764705882353,0.4823529411764706,0.41568627450980394,D.q)
B.beb=new C.u(1,0.24705882352941178,0.16470588235294117,0.10980392156862745,D.q)
B.bed=new C.u(1,0.34901960784313724,0.3176470588235294,0.29411764705882354,D.q)
B.bef=new C.u(1,0.24705882352941178,0.6470588235294118,0.3568627450980392,D.q)
B.bem=new C.u(1,0.8117647058823529,0.792156862745098,0.7411764705882353,D.q)
B.X2=new C.u(1,0.8117647058823529,0.8901960784313725,0.9176470588235294,D.q)
B.beq=new C.u(1,0.7215686274509804,0.7450980392156863,0.7843137254901961,D.q)
B.Ln=new C.u(1,0.3333333333333333,0.396078431372549,0.4823529411764706,D.q)
B.X3=new C.u(1,0.5529411764705883,0.7843137254901961,1,D.q)
B.X6=new C.u(1,1,0.9019607843137255,0.5019607843137255,D.q)
B.beP=new C.u(1,0.9490196078431372,0.7607843137254902,0.10588235294117647,D.q)
B.aet=new C.u(1,0.9490196078431372,0.9411764705882353,0.9019607843137255,D.q)
B.bf7=new C.u(1,0.8509803921568627,0.7725490196078432,0.6392156862745098,D.q)
B.bfa=new C.u(1,0.9686274509803922,0.9607843137254902,0.9333333333333333,D.q)
B.X9=new C.u(1,0.9529411764705882,0.788235294117647,0.2901960784313726,D.q)
B.aex=new C.u(1,0.6823529411764706,0.6941176470588235,0.7372549019607844,D.q)
B.nV=new C.u(1,0.1843137254901961,0.49019607843137253,0.8823529411764706,D.q)
B.bfk=new C.u(1,0.788235294117647,0.7176470588235294,0.6078431372549019,D.q)
B.Xa=new C.u(1,0.8901960784313725,0.6627450980392157,0.10980392156862745,D.q)
B.EV=new C.u(1,0.7137254901960784,0.7372549019607844,0.7686274509803922,D.q)
B.bfo=new C.u(1,0.8431372549019608,0.8509803921568627,0.8784313725490196,D.q)
B.aeC=new C.u(1,0.7215686274509804,0.7529411764705882,0.8,D.q)
B.bfz=new C.u(1,0.22745098039215686,0.49019607843137253,0.26666666666666666,D.q)
B.vt=new C.u(1,0.9019607843137255,0.8823529411764706,0.8352941176470589,D.q)
B.Xe=new C.u(1,0.3686274509803922,0.17647058823529413,0.13725490196078433,D.q)
B.bfM=new C.u(1,0.0196078431372549,0.027450980392156862,0.050980392156862744,D.q)
B.aeL=new C.u(1,0.6039215686274509,0.6274509803921569,0.6588235294117647,D.q)
B.EX=new C.u(1,0.09019607843137255,0.09411764705882353,0.10588235294117647,D.q)
B.AU=new C.u(1,0.9725490196078431,0.9725490196078431,0.9568627450980393,D.q)
B.aeR=new C.u(1,0.9450980392156862,0.9568627450980393,0.9725490196078431,D.q)
B.aeS=new C.u(1,0.9019607843137255,0.9019607843137255,0.8784313725490196,D.q)
B.bgo=new C.u(1,0.29411764705882354,0.21176470588235294,0.12941176470588237,D.q)
B.Xi=new C.u(1,0.8941176470588236,0.9058823529411765,0.9176470588235294,D.q)
B.jn=new C.u(1,0.7686274509803922,0.6039215686274509,0.3843137254901961,D.q)
B.af6=new C.u(1,1,0.35294117647058826,0.12156862745098039,D.q)
B.af7=new C.u(1,0.5411764705882353,0.5607843137254902,0.596078431372549,D.q)
B.Lw=new C.u(1,0.16470588235294117,0.10196078431372549,0.06274509803921569,D.q)
B.af9=new C.u(1,0.5411764705882353,0.29411764705882354,0.29411764705882354,D.q)
B.Lx=new C.u(1,0.9098039215686274,0.8509803921568627,0.7372549019607844,D.q)
B.bh6=new C.u(1,0.48627450980392156,0.3215686274509804,0.18823529411764706,D.q)
B.nZ=new C.u(1,1,0.9450980392156862,0.6588235294117647,D.q)
B.bhw=new C.u(1,0.5411764705882353,0.5411764705882353,0.5176470588235295,D.q)
B.bhy=new C.u(1,0.9647058823529412,0.9568627450980393,0.9254901960784314,D.q)
B.LA=new C.u(1,0.47843137254901963,0.23137254901960785,0.1803921568627451,D.q)
B.bhI=new C.u(1,0.3333333333333333,0.6274509803921569,0.3333333333333333,D.q)
B.afi=new C.u(1,0.7058823529411765,0.3254901960784314,0.3254901960784314,D.q)
B.bhQ=new C.u(1,0.6078431372549019,0.6078431372549019,0.592156862745098,D.q)
B.AY=new C.u(1,0.9568627450980393,0.9450980392156862,0.9176470588235294,D.q)
B.tz=new C.u(1,0.8862745098039215,0.23137254901960785,0.23137254901960785,D.q)
B.pK=new C.u(1,0.9490196078431372,0.9490196078431372,0.9254901960784314,D.q)
B.bi0=new C.u(1,0.30980392156862746,0.615686274509804,0.3568627450980392,D.q)
B.afm=new C.u(1,0.788235294117647,0.8117647058823529,0.8392156862745098,D.q)
B.bi5=new C.u(1,0.9294117647058824,0.9215686274509803,0.8941176470588236,D.q)
B.Xw=new C.u(1,0.8392156862745098,0.6823529411764706,0.4470588235294118,D.q)
B.afp=new C.u(1,0.9098039215686274,0.9098039215686274,0.9098039215686274,D.q)
B.LC=new C.u(1,0.2901960784313726,0.2980392156862745,0.32941176470588235,D.q)
B.Xy=new C.u(1,0.3686274509803922,0.43137254901960786,0.5176470588235295,D.q)
B.biM=new C.u(1,0.20784313725490197,0.47843137254901963,0.26666666666666666,D.q)
B.biP=new C.u(1,0.3568627450980392,0.10196078431372549,0.09019607843137255,D.q)
B.afz=new C.u(1,0.23137254901960785,0.1843137254901961,0.14901960784313725,D.q)
B.afA=new C.u(1,0.8509803921568627,0.788235294117647,0.6588235294117647,D.q)
B.kw=new C.u(1,0.9686274509803922,0.9568627450980393,0.9254901960784314,D.q)
B.afD=new C.u(1,0.13333333333333333,0.1450980392156863,0.16862745098039217,D.q)
B.XB=new C.u(1,0.4980392156862745,0.7215686274509804,1,D.q)
B.xE=new C.u(1,0.16470588235294117,0.1450980392156863,0.13725490196078433,D.q)
B.bj8=new C.u(1,0.5411764705882353,0.23137254901960785,0.23137254901960785,D.q)
B.bj9=new C.u(1,0.9450980392156862,0.9294117647058824,0.8784313725490196,D.q)
B.LF=new C.u(1,0.796078431372549,0.8156862745098039,0.8392156862745098,D.q)
B.XE=new C.u(1,0.8980392156862745,0.7254901960784313,0.11764705882352941,D.q)
B.bjw=new C.u(1,0.7490196078431373,0.8901960784313725,1,D.q)
B.afR=new C.u(1,0.6039215686274509,0.4196078431372549,0.24705882352941178,D.q)
B.XI=new C.u(1,0.10588235294117647,0.10588235294117647,0.11372549019607843,D.q)
B.bjQ=new C.u(1,0.3686274509803922,0.2235294117647059,0.12549019607843137,D.q)
B.bjS=new C.u(1,0.9529411764705882,0.9058823529411765,0.6313725490196078,D.q)
B.afX=new C.u(1,0.9490196078431372,0.9490196078431372,0.9333333333333333,D.q)
B.bke=new C.u(1,0.6274509803921569,0.6509803921568628,0.6823529411764706,D.q)
B.bkq=new C.u(0,0.2196078431372549,0.7411764705882353,0.9725490196078431,D.q)
B.bky=new C.u(1,0.8156862745098039,0.35294117647058826,0.22745098039215686,D.q)
B.bkE=new C.u(1,0.8509803921568627,0.788235294117647,0.6274509803921569,D.q)
B.XN=new C.u(1,0.9490196078431372,0.9176470588235294,0.8274509803921568,D.q)
B.age=new C.u(1,0.10588235294117647,0.07058823529411765,0.03529411764705882,D.q)
B.bkY=new C.u(1,0.3607843137254902,0.7019607843137254,0.9098039215686274,D.q)
B.LN=new C.u(1,0.24705882352941178,0.26666666666666666,0.3137254901960784,D.q)
B.bl7=new C.u(1,0.12549019607843137,0.13333333333333333,0.14901960784313725,D.q)
B.LR=new C.u(1,0.8862745098039215,0.27058823529411763,0.35294117647058826,D.q)
B.blo=new C.u(1,0.12156862745098039,0.43529411764705883,0.2627450980392157,D.q)
B.xK=new C.u(1,0.17254901960784313,0.4196078431372549,0.8392156862745098,D.q)
B.vB=new C.u(1,0.7607843137254902,0.4627450980392157,0.22745098039215686,D.q)
B.LU=new C.u(1,0.7254901960784313,0.7450980392156863,0.7764705882352941,D.q)
B.agm=new C.u(1,0.611764705882353,0.35294117647058826,0.27058823529411763,D.q)
B.blQ=new C.u(1,0.611764705882353,0.5882352941176471,0.5450980392156862,D.q)
B.LZ=new C.u(1,0.9686274509803922,0.9490196078431372,0.9019607843137255,D.q)
B.bmg=new C.u(1,0.2,0.21176470588235294,0.23137254901960785,D.q)
B.bml=new C.u(1,0.7098039215686275,0.7333333333333333,0.7647058823529411,D.q)
B.bmm=new C.u(1,0.9294117647058824,0.9294117647058824,0.9098039215686274,D.q)
B.bms=new C.u(1,0.9098039215686274,0.8941176470588236,0.8549019607843137,D.q)
B.bmx=new C.u(1,0.23137254901960785,0.23137254901960785,0.25098039215686274,D.q)
B.agE=new C.u(1,0.7686274509803922,0.5411764705882353,0.11764705882352941,D.q)
B.bmD=new C.u(1,0.43529411764705883,0.7137254901960784,1,D.q)
B.bmP=new C.u(1,0.9450980392156862,0.9019607843137255,0.8156862745098039,D.q)
B.bmR=new C.u(1,0.9137254901960784,0.8980392156862745,0.8549019607843137,D.q)
B.agL=new C.u(1,0.18823529411764706,0.2,0.22745098039215686,D.q)
B.M0=new C.u(1,0.9372549019607843,0.9372549019607843,0.9176470588235294,D.q)
B.agN=new C.u(0.6666666666666666,1,0.16470588235294117,0.10196078431372549,D.q)
B.bn6=new C.u(1,0.9372549019607843,0.9137254901960784,0.8627450980392157,D.q)
B.bn9=new C.u(1,0.9294117647058824,0.9019607843137255,0.8156862745098039,D.q)
B.Y4=new C.u(1,0.4196078431372549,0.24705882352941178,0.19215686274509805,D.q)
B.bne=new C.u(1,0.12156862745098039,0.6392156862745098,0.2627450980392157,D.q)
B.bng=new C.u(1,0.803921568627451,0.6274509803921569,0.2,D.q)
B.Y7=new C.u(1,0.3607843137254902,0.7019607843137254,1,D.q)
B.bnW=new C.u(1,0.48627450980392156,0.2901960784313726,0.17647058823529413,D.q)
B.Y8=new C.u(1,0.9568627450980393,0.9568627450980393,0.9411764705882353,D.q)
B.bnY=new C.u(1,0.8431372549019608,0.8,0.6588235294117647,D.q)
B.boA=new C.u(1,0.9019607843137255,0.8745098039215686,0.796078431372549,D.q)
B.boC=new C.u(1,0.30980392156862746,0.6588235294117647,1,D.q)
B.boI=new C.u(1,1,0.6196078431372549,0.6196078431372549,D.q)
B.ah9=new C.u(1,0.8431372549019608,0.16470588235294117,0.16470588235294117,D.q)
B.M8=new C.u(1,0.47843137254901963,0.30980392156862746,0.1568627450980392,D.q)
B.boW=new C.u(1,0.9294117647058824,0.9372549019607843,0.9529411764705882,D.q)
B.B9=new C.u(1,0.6901960784313725,0.5411764705882353,0.3568627450980392,D.q)
B.hO=new C.u(1,0.6078431372549019,0.8274509803921568,0.9607843137254902,D.q)
B.bpe=new C.u(1,0.48627450980392156,0.2901960784313726,0.22745098039215686,D.q)
B.Yh=new C.u(1,0.7490196078431373,0.8901960784313725,0.9686274509803922,D.q)
B.Yi=new C.u(1,0.23137254901960785,0.6078431372549019,1,D.q)
B.ahg=new C.u(1,0.8509803921568627,0.8235294117647058,0.7607843137254902,D.q)
B.pV=new C.u(1,0.4196078431372549,0.2901960784313726,0.19607843137254902,D.q)
B.bps=new C.u(1,0.8509803921568627,0.7450980392156863,0.5725490196078431,D.q)
B.Yk=new C.u(1,0.13333333333333333,0.14901960784313725,0.17254901960784313,D.q)
B.bpu=new C.u(1,0.8117647058823529,0.788235294117647,0.7215686274509804,D.q)
B.bpy=new C.u(1,0.7176470588235294,0.4745098039215686,0.12156862745098039,D.q)
B.bpD=new C.u(1,0.9294117647058824,0.9294117647058824,0.9176470588235294,D.q)
B.bpE=new C.u(1,0.7529411764705882,0.5411764705882353,0.35294117647058826,D.q)
B.bpG=new C.u(1,0.5450980392156862,0.4196078431372549,0.24705882352941178,D.q)
B.bqJ=new A.te("none","Nothing happens: the device gets no power.",!1,!1,!1)
B.bqK=new A.te("none","It cannot be judged: the wire functions were not verified.",!1,!1,!1)
B.bqL=new A.te("smoke","The loose connection overheats: it glows, smokes and chars the device. In a real wall this can start a fire.",!1,!1,!0)
B.bqM=new A.te("none","It does not work as it should: some part runs wrongly or not at all. That does not tell you what is wrong, so check against the diagram.",!1,!1,!1)
B.bqN=new A.te("none","It runs. There is nothing to see, and that is the danger: with no ground, a fault would energize the metal parts.",!0,!1,!1)
B.bqO=new A.te("none","It works as the diagram says.",!0,!1,!1)
B.bqP=new A.te("none","It works, and every safety rule is met.",!0,!1,!1)
B.bqQ=new A.te("none","Nothing happens: it is dead. But the hot wire is connected, so it can still be live. No sparks, no smoke: that does not make it safe.",!1,!1,!1)
B.bqR=new A.te("spark","Bare copper touches something it should not: sparks. The circuit is not safe.",!1,!1,!1)
B.bqS=new A.te("none","It looks fine for now. But the support cannot carry the weight, and it can fall later.",!1,!1,!1)
B.bqT=new A.te("fire","BANG. A short circuit: a flash, sparks, smoke and a flame at the device. The breaker trips and the device is ruined. The wires and the device are not safe to use.",!1,!0,!0)
B.bqU=new A.te("arc","Hot and neutral are reversed: the parts that should be dead are live. Blue arcs show the energized metal. The simulator does not let anything run on this: it is unsafe, even if a real appliance might seem to work.",!1,!1,!1)
B.bqV=new A.te("arc","Current flows through the ground wire and the metal parts it joins. Arcs crackle at the box. This is a shock hazard.",!1,!1,!1)
B.bqW=new A.te("spark","The neutral and ground are joined: the protective device trips with a snap of sparks.",!1,!0,!1)
B.brO=new A.ajR("expired","That order took too long and went back on the board.",0)
B.btL=new C.bb(55e3)
B.buB=new C.Q(0,2,0,6)
B.bv0=new C.Q(10,10,10,8)
B.bv6=new C.Q(10,16,10,14)
B.bvo=new C.Q(11,7,11,7)
B.Zh=new C.Q(11,9,11,9)
B.bwm=new C.Q(14,16,14,10)
B.aiP=new C.Q(14,8,14,24)
B.by2=new C.Q(1,0,0,0)
B.byE=new C.Q(22,0,22,44)
B.bzl=new C.Q(26,8,26,8)
B.bzY=new C.Q(4,22,4,12)
B.bAa=new C.Q(4,4,8,4)
B.bAc=new C.Q(4,6,12,4)
B.bB5=new C.Q(9,0,9,0)
B.bB6=new C.Q(9,12,9,12)
B.fMC=new C.y("Practice mode (no explanations, real shocks)",null,D.JK,null,null,null,null,null,null,null,null,null)
B.bBC=new C.bA(1,D.bd,B.fMC,null)
B.fIg=new C.y("Practice mode (no hints, no labels)",null,D.JK,null,null,null,null,null,null,null,null,null)
B.bBE=new C.bA(1,D.bd,B.fIg,null)
B.fpq=new C.y("\ud83c\udfd8 Community",null,P.rX,null,null,null,null,null,null,null,null,null)
B.b7h=new C.cn(D.A,null,null,B.fpq,null)
B.bBL=new C.bA(1,D.bd,B.b7h,null)
B.ftW=new C.y("House tour",null,D.md,null,null,null,null,null,null,null,null,null)
B.aR4=new C.F(!0,D.aQ,null,null,null,null,13,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fAk=new C.y("A film of your whole house, with every TV on.",null,B.aR4,null,null,null,null,null,null,null,null,null)
B.dhk=w([B.ftW,D.bA,B.fAk],x.p)
B.bqH=new C.fj(D.ag,D.e,D.j,D.E,null,D.p,null,0,B.dhk,null)
B.bBQ=new C.bA(1,D.bd,B.bqH,null)
B.fzW=new C.y("Construction Lab",null,P.rX,null,null,null,null,null,null,null,null,null)
B.foQ=new C.y("Wire it. Plumb it. Fix a house.",null,D.hg,null,null,null,null,null,null,null,null,null)
B.d86=w([B.fzW,B.foQ],x.p)
B.bqq=new C.fj(D.ag,D.e,D.j,D.E,null,D.p,null,0,B.d86,null)
B.bBZ=new C.bA(1,D.bd,B.bqq,null)
B.fH6=new C.y("Test mode (an inspection: nothing is explained until you submit)",null,D.JK,null,null,null,null,null,null,null,null,null)
B.bC0=new C.bA(1,D.bd,B.fH6,null)
B.aRn=new C.F(!0,D.c,null,null,null,null,14,D.H,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fI7=new C.y("5 portions of food\n10 points",null,B.aRn,null,null,null,null,null,null,null,null,null)
B.bC4=new C.bA(1,D.bd,B.fI7,null)
B.fut=new C.y("3 doses of medicine\n12 points",null,B.aRn,null,null,null,null,null,null,null,null,null)
B.bCj=new C.bA(1,D.bd,B.fut,null)
B.fFO=new C.y("Drone film",null,D.fy,null,null,null,null,null,null,null,null,null)
B.bCo=new C.bA(1,D.bd,B.fFO,null)
B.fHU=new C.y("Practice mode (no hints, real shocks and fires)",null,D.JK,null,null,null,null,null,null,null,null,null)
B.bCK=new C.bA(1,D.bd,B.fHU,null)
B.fMd=new C.y("Uber licence",null,D.fy,null,null,null,null,null,null,null,null,null)
B.bCR=new C.bA(1,D.bd,B.fMd,null)
B.bDO=new A.a4E(null,null)
B.a_D=new A.rb(0,"tripped")
B.a_E=new A.rb(1,"noHotWater")
B.a_F=new A.rb(10,"wallHole")
B.a_G=new A.rb(11,"clogged")
B.Nk=new A.rb(2,"nutLeak")
B.Nl=new A.rb(3,"pexLeak")
B.a_H=new A.rb(5,"flicker")
B.a_I=new A.rb(6,"burntOutlet")
B.a_J=new A.rb(7,"gfciTripped")
B.a_K=new A.rb(8,"runningToilet")
B.a_L=new A.rb(9,"dripFaucet")
B.bFz=new A.oh(!1,"back",0,10)
B.bFA=new A.oh(!1,"back",0,9)
B.bFB=new A.oh(!1,"back",50,0)
B.bFC=new A.oh(!1,"back",56,11)
B.bFD=new A.oh(!1,"back",-50,10)
B.bFE=new A.oh(!1,"left",40,9)
B.bFF=new A.oh(!1,"right",40,10)
B.a_T=new A.oh(!1,"right",50,5)
B.akS=new A.pN("tv100",'Giant 100"',"\ud83d\udcfa",89,!1)
B.bHM=new C.a1(61419,"MaterialIcons",!1)
B.bHY=new C.a1(61888,"MaterialIcons",!1)
B.bIK=new C.a1(62978,"MaterialIcons",!1)
B.bIP=new C.a1(63015,"MaterialIcons",!1)
B.bJa=new C.a1(63165,"MaterialIcons",!1)
B.ami=new C.a1(63228,"MaterialIcons",!1)
B.amG=new C.a1(63547,"MaterialIcons",!0)
B.bKs=new C.a1(983222,"MaterialIcons",!1)
B.bL_=new C.a1(983666,"MaterialIcons",!1)
B.anr=new C.a1(983775,"MaterialIcons",!1)
B.anx=new C.a1(983894,"MaterialIcons",!1)
B.bOg=new C.ae(D.kE,null,null,null,null,null)
B.bOs=new C.ae(D.o7,null,null,null,null,null)
B.bPU=new C.ae(D.cx,26,D.aB,null,null,null)
B.bSl=new C.ae(D.mD,null,null,null,null,null)
B.bTa=new C.ae(D.C9,22,D.c,null,null,null)
B.bTf=new C.ae(D.l6,null,F.fu,null,null,null)
B.bVc=new C.ae(D.p_,null,null,null,null,null)
B.bWA=new C.ae(A4.GC,null,D.bI,null,null,null)
B.fQ_=new A.r(0,100,20)
B.bYt=new A.hd(B.fQ_,"No power in this house",D.bx,0)
B.h4g=new A.r(-60,40,130)
B.bYu=new A.hd(B.h4g,"\ud83e\uddef Walk here to check the equipment",D.d8,0)
B.fRG=new A.r(0,62,12)
B.bYv=new A.hd(B.fRG,"\ud83d\uded7 Elevator: walk onto the blue mat or tap",D.jr,19502)
B.fRz=new A.r(0,50,80)
B.bYw=new A.hd(B.fRz,"\ud83d\udcda Walk here to teach the class",D.d8,0)
B.fS9=new A.r(105,52,100)
B.bYx=new A.hd(B.fS9,"\ud83c\udf06 Balcony: step here to see the city",D.eh,0)
B.h4u=new A.r(-80,70,40)
B.bYy=new A.hd(B.h4u,"\ud83d\udc69\u200d\u2695\ufe0f Nurse",D.cM,0)
B.fRD=new A.r(0,52,78)
B.bYz=new A.hd(B.fRD,"\ud83e\udeaa Walk here to get your Uber licence",D.jr,0)
B.h4v=new A.r(-84,84,120)
B.bYA=new A.hd(B.h4v,"\ud83c\udf5e Food and drinks",D.d8,0)
B.fRm=new A.r(0,40,176)
B.bYB=new A.hd(B.fRm,"\ud83c\udf4e Fresh fruit",D.el,0)
B.aTV=new A.r(0,26,312)
B.bYC=new A.hd(B.aTV,"\u2b07 Walk here to go out",D.eh,0)
B.bYD=new A.hd(B.aTV,"\ud83d\uded7 Take the elevator down to go out",D.jr,0)
B.fXI=new A.r(90,40,56)
B.bYE=new A.hd(B.fXI,"\ud83d\udcd6 Library",D.dI,0)
B.fXg=new A.r(80,40,56)
B.bYF=new A.hd(B.fXg,"\ud83d\udd25 Fire drill",D.bx,0)
B.aTQ=new A.r(0,100,36)
B.bYG=new A.hd(B.aTQ,"\ud83e\udeaa NGMY Licence office",D.M,0)
B.aUw=new A.r(34,56,18)
B.bYH=new A.hd(B.aUw,"\ud83e\uddd1\u200d\ud83d\udcbc Clerk",D.cM,0)
B.h3g=new A.r(-0.4,4.2,-2.4)
B.bYI=new A.hd(B.h3g,"LIVE 120 V",D.bx,0)
B.h4t=new A.r(-80,52,66)
B.bYJ=new A.hd(B.h4t,"\ud83c\udfe5 Walk here to admit the sick",D.f5,0)
B.fRA=new A.r(0,50,84)
B.bYK=new A.hd(B.fRA,"\ud83d\udcb0 Counter: walk here to pay or sell",D.eh,0)
B.bYL=new A.hd(B.aUw,"\ud83e\uddd1\u200d\ud83d\udcbc Cashier",D.cM,0)
B.bZK=new C.a9(D.a3,D.a8,D.x,L.axq,null,null)
B.c_I=new C.a9(D.a3,D.a8,D.x,L.avU,null,null)
B.bmF=new C.u(1,0.2901960784313726,0.20392156862745098,0.0784313725490196,D.q)
B.bjy=new C.u(1,0.12156862745098039,0.10196078431372549,0.07058823529411765,D.q)
B.bcx=new C.u(1,0.16470588235294117,0.12156862745098039,0.07058823529411765,D.q)
B.djb=w([B.bmF,B.bjy,B.bcx],x.O)
B.c_N=new C.a9(D.ax,D.aD,D.x,B.djb,null,null)
B.bep=new C.u(1,0.8509803921568627,0.6039215686274509,0.11764705882352941,D.q)
B.d69=w([F.fu,B.bep],x.O)
B.c_V=new C.a9(D.ax,D.aD,D.x,B.d69,null,null)
B.blT=new C.u(1,0.0392156862745098,0.058823529411764705,0.1803921568627451,D.q)
B.boB=new C.u(1,0.1411764705882353,0.08235294117647059,0.3215686274509804,D.q)
B.cIz=w([E.aew,B.blT,B.boB],x.O)
B.c0C=new C.a9(D.b3,D.b6,D.x,B.cIz,null,null)
B.d2I=w([E.jH,E.Lg,E.jH],x.O)
B.apH=new C.a9(D.a3,D.a8,D.x,B.d2I,null,null)
B.bjo=new C.u(1,0.8901960784313725,0.9254901960784314,0.9803921568627451,D.q)
B.d1g=w([D.c,B.bjo],x.O)
B.c1S=new C.a9(D.b3,D.b6,D.x,B.d1g,null,null)
B.bpv=new C.u(1,0.07058823529411765,0.22745098039215686,0.47843137254901963,D.q)
B.cVS=w([E.jH,B.bpv],x.O)
B.c22=new C.a9(D.ax,D.aD,D.x,B.cVS,null,null)
B.djT=w([D.cp,D.dc],x.O)
B.z1=new C.a9(D.b3,D.b6,D.x,B.djT,null,null)
B.cfP=w([E.jH,E.Lg],x.O)
B.c2h=new C.a9(D.a3,D.a8,D.x,B.cfP,null,null)
B.e9P={ground:0}
B.J1=new C.dD(B.e9P,1,x.M)
B.vY=new A.fG(25,"Green screw: GROUND",B.J1,"The bare copper ground goes on the green screw.",!1,"ground")
B.ea4={lineA:0}
B.eXN=new C.dD(B.ea4,1,x.M)
B.bGw=new A.fG(23,"LINE screw 1 (top left)",B.eXN,"Hot leg 1 from the panel goes on the top left screw.",!1,"hot")
B.ea5={lineB:0}
B.eXB=new C.dD(B.ea5,1,x.M)
B.bGo=new A.fG(21,"LINE screw 2 (top right)",B.eXB,"Hot leg 2 from the panel goes on the top right screw.",!1,"hot")
B.ea7={loadA:0}
B.eXM=new C.dD(B.ea7,1,x.M)
B.bG5=new A.fG(24,"LOAD screw 1 (bottom left)",B.eXM,"Hot leg 1 to the heater goes on the bottom left screw: it is switched through from the top left one.",!1,"hot")
B.ea9={loadB:0}
B.eYk=new C.dD(B.ea9,1,x.M)
B.bGg=new A.fG(22,"LOAD screw 2 (bottom right)",B.eYk,"Hot leg 2 to the heater goes on the bottom right screw.",!1,"hot")
B.c2C=w([B.vY,B.bGw,B.bGo,B.bG5,B.bGg],x.r)
B.c2G=w(["flange","wax","toilet","bolts","valve","hosehot","hosecold","faucet","tail","trap","arm"],x.s)
B.a24=w([0,0,0,0],x.t)
B.c2R=w([0,0,0,1],x.k)
B.cbS=w([139,161],x.n)
B.cbZ=w([145,158],x.n)
B.cfF=w([U.qt,A3.T5,Q.lh,Z.aNn],x.f)
B.cfT=w([1,1,1],x.k)
B.cfU=w([1,1,1,1],x.k)
B.h1d=new A.r(-57.8,-32,0)
B.b4O=new A.yX(0,"Outlet spot 1",!1,B.h1d,"low")
B.h1Y=new A.r(-9.8,-32,0)
B.b4L=new A.yX(1,"Outlet spot 2",!1,B.h1Y,"low")
B.h2u=new A.r(38.2,-32,0)
B.b4R=new A.yX(2,"Outlet spot 3",!1,B.h2u,"low")
B.h0Q=new A.r(-25.8,0,0)
B.b4P=new A.yX(3,"Switch spot 1",!1,B.h0Q,"switch")
B.h1S=new A.r(22.2,0,0)
B.b4N=new A.yX(4,"Switch spot 2",!1,B.h1S,"switch")
B.h3W=new A.r(-30,48,40)
B.b4Q=new A.yX(5,"Ceiling light spot",!0,B.h3W,"light")
B.fUF=new A.r(30,48,40)
B.b4M=new A.yX(6,"Ceiling fan spot",!0,B.fUF,"fan")
B.ur=w([B.b4O,B.b4L,B.b4R,B.b4P,B.b4N,B.b4Q,B.b4M],C.ax("O<yX>"))
B.es0=new C.z(4,6)
B.esx=new C.z(5,7)
B.esW=new C.z(6,8)
B.cgk=w([Q.lh,Ag.uU,E.T3,E.T4,B.es0,B.esx,B.esW],C.ax("O<+(H,H)>"))
B.cgn=w([2],x.t)
B.cn7=w(["The living room has no power: find the tripped breaker in the panel and reset it.","The kitchen sink drips: pick the wrench and tighten the slip nut under the sink. (Build the house up to Fixtures to see the problems.)"],x.s)
B.h2d=new A.r(11,4.6,-6)
B.fY2=new A.r(11,5.4,-7.85)
B.h1v=new A.r(3.4,5.4,-7.85)
B.aUZ=new A.r(3.4,3.4,-7.85)
B.cn9=w([B.h2d,B.fY2,B.h1v,B.aUZ],x.o)
B.cnQ=w([3],x.t)
B.co_=w([300,800,1300,1800],x.n)
B.cq_=w([32,80],x.n)
B.hc9=new A.hk(0,0.7,2.2,2,0,0,0)
B.hbZ=new A.hk(3,0.1,0.95,-0.42,-0.3,-0.2,0.05)
B.hci=new A.hk(6.5,0,0.9,-0.38,0.3,0.2,0.05)
B.hcr=new A.hk(9.5,-0.9,1.15,0.1,0,0,0)
B.hco=new A.hk(12.5,-1.7,1.45,1.6,0,0,0)
B.hbY=new A.hk(15.5,-2.8,1,-0.35,0,0,0)
B.hch=new A.hk(18.5,-3.6,0.9,0.05,0,0,0)
B.hcl=new A.hk(21.5,-4.6,1.5,1.5,0,0,0)
B.hca=new A.hk(24.5,-5.4,0.9,-0.4,0,0,0)
B.hct=new A.hk(27.5,-6.28,0.75,0.05,0,0,0)
B.hcb=new A.hk(30,-6,2.4,1.7,0,0,0)
B.d_H=w([B.hc9,B.hbZ,B.hci,B.hcr,B.hco,B.hbY,B.hch,B.hcl,B.hca,B.hct,B.hcb],x.x)
B.hc1=new A.hk(0,-3.14,1.2,-0.3,0,0,0)
B.hbV=new A.hk(4,-2.2,1.1,0,0,0,0)
B.hcs=new A.hk(8,-1.2,1,0.4,0,0,0)
B.hc_=new A.hk(12,-0.4,1,0.9,0,0,0)
B.hc2=new A.hk(15,0.1,0.85,1.7,0,0,0)
B.hbU=new A.hk(18,0.3,0.8,0,0,0,0)
B.hc0=new A.hk(21,0,0.9,-0.2,0.35,0.25,0)
B.hc6=new A.hk(24,0.6,1.4,0.1,-0.2,0,0)
B.hc7=new A.hk(27,1.4,1.2,0.8,0,0,0)
B.hc5=new A.hk(30,2.4,2.3,1.5,0,0,0)
B.d6K=w([B.hc1,B.hbV,B.hcs,B.hc_,B.hc2,B.hbU,B.hc0,B.hc6,B.hc7,B.hc5],x.x)
B.hc3=new A.hk(0,0.3,2.6,0.5,0,0,0)
B.hcn=new A.hk(3,0.1,1,0,0,0,0)
B.hcq=new A.hk(6,0,0.95,0.05,0.2,0.15,0)
B.hce=new A.hk(9,-0.8,1.6,0.3,0,0,0)
B.hcj=new A.hk(12,-1.57,1,-0.2,0,0,0)
B.hcc=new A.hk(15,-2.4,1.5,0.9,0,0,0)
B.hcg=new A.hk(18,-3.14,1,0.1,0,0,0)
B.hc8=new A.hk(21,-3.9,1.5,0.6,0,0,0)
B.hcu=new A.hk(24,-4.71,1,-0.3,0,0,0)
B.hbW=new A.hk(27,-5.5,1.3,0.5,0,0,0)
B.hbT=new A.hk(30,-6.28,2.6,0.9,0,0,0)
B.cDC=w([B.hc3,B.hcn,B.hcq,B.hce,B.hcj,B.hcc,B.hcg,B.hc8,B.hcu,B.hbW,B.hbT],x.x)
B.hcm=new A.hk(0,0,0.5,3.5,0,0,0)
B.hbX=new A.hk(4,0.2,1,-0.3,0,0,0)
B.hcp=new A.hk(8,1,1,0,0,0,0)
B.hbR=new A.hk(12,1.57,1.2,0.3,0,0,0)
B.hck=new A.hk(16,3.14,1.4,1.2,0,0,0)
B.hbS=new A.hk(20,3.5,0.9,-0.35,0,0,0)
B.hc4=new A.hk(24,4.7,1.1,0,0,0,0)
B.hcd=new A.hk(28,6,1,0.3,0,0,0)
B.hcf=new A.hk(30,6.3,2.2,1.4,0,0,0)
B.d_l=w([B.hcm,B.hbX,B.hcp,B.hbR,B.hck,B.hbS,B.hc4,B.hcd,B.hcf],x.x)
B.csj=w([B.d_H,B.d6K,B.cDC,B.d_l],C.ax("O<ai<hk>>"))
B.csk=w([380,820,1420,1660],x.n)
B.eag={neutral:0}
B.J3=new C.dD(B.eag,1,x.M)
B.bGn=new A.fG(23,"Silver screw (top): NEUTRAL",B.J3,y.G,!1,"neutral")
B.bFX=new A.fG(24,"Silver screw (bottom): NEUTRAL",B.J3,y.G,!1,"neutral")
B.eaw={switched:0}
B.eYp=new C.dD(B.eaw,1,x.M)
B.bFV=new A.fG(21,"Brass screw (top): SWITCHED hot",B.eYp,"The top half is the switched one: the red wire that comes back from the wall switch goes here.",!1,"hot")
B.e9u={always:0}
B.eXy=new C.dD(B.e9u,1,x.M)
B.bGj=new A.fG(22,"Brass screw (bottom): ALWAYS hot",B.eXy,"The bottom half is always on: the black wire straight from the panel goes here.",!1,"hot")
B.ctx=w([B.vY,B.bGn,B.bFX,B.bFV,B.bGj],x.r)
B.eHU=new C.z(-820,640)
B.ety=new C.z(820,640)
B.ctC=w([B.eHU,B.ety],x.f)
B.hjl=new A.pv(0,-80,66,24)
B.hjm=new A.pv(1,20,48,20)
B.hju=new A.pv(2,20,98,20)
B.hjv=new A.pv(3,20,148,20)
B.cu0=w([B.hjl,B.hjm,B.hju,B.hjv],x.X)
B.CI=w([],x.m)
B.aZR=new A.r2("highway","\ud83d\udee3\ufe0f","Highway board","Huge and wide, on two thick poles, with a walkway under it",420,170,150,B.CI,0,1)
B.aZO=new A.r2("tower","\ud83d\uddfc","Tall tower sign","A big sign high up on one very thick pole",400,210,270,B.CI,0,1)
B.aZU=new A.r2("neon","\ud83c\udf03","Neon board","A big black board with a glowing neon edge",380,190,120,B.CI,0,1)
B.aZT=new A.r2("roof","\ud83c\udfe0","Rooftop board","A tall house with two big TVs, the NGMY carpet on its back, and a huge board on its roof",460,180,308,B.CI,800,1)
B.aZN=new A.r2("screen","\ud83d\udcfa","Big screen","A giant TV screen on a stand",440,250,60,B.CI,0,1)
B.aZV=new A.r2("gate","\ud83d\udeaa","Town gate","A huge arch with the board across it",600,200,200,B.CI,0,1)
B.aZz=new A.lx(-420,140,0.35,0,1)
B.aZx=new A.lx(460,-420,-0.3,160,1.35)
B.cYE=w([B.aZz,B.aZx],x.m)
B.aZM=new A.r2("duo","\ud83e\udea7","Two far apart","Two separate boards: a near one and a taller one far behind it",320,160,140,B.cYE,0,0.7)
B.aZs=new A.lx(-460,0,0,0,1)
B.aZA=new A.lx(460,0,0,0,1)
B.dio=w([B.aZs,B.abg,B.aZA],x.m)
B.aZX=new A.r2("line3","\u2194\ufe0f","Three in a row","Three separate boards standing in one straight line",300,150,150,B.dio,0,0.6)
B.aZq=new A.lx(-950,250,0.5,0,1)
B.aZp=new A.lx(150,-700,-0.2,220,1.55)
B.aZt=new A.lx(1000,60,-0.55,0,0.9)
B.cOY=w([B.aZq,B.aZp,B.aZt],x.m)
B.aZP=new A.r2("far3","\ud83d\udef0\ufe0f","Three scattered far","Three separate boards far from each other, one of them tall and far behind",320,160,140,B.cOY,0,0.6)
B.aZF=new A.lx(-360,300,0.15,0,1)
B.aZu=new A.lx(360,300,-0.15,0,1)
B.aZC=new A.lx(0,-120,0,100,1.25)
B.aZw=new A.lx(-160,-640,0.1,260,1.6)
B.c3j=w([B.aZF,B.aZu,B.aZC,B.aZw],x.m)
B.aZS=new A.r2("skyline","\ud83c\udf06","Skyline","Four separate boards, the taller ones standing behind the shorter ones",300,150,130,B.c3j,0,0.6)
B.aZo=new A.lx(-440,160,0,0,1)
B.aZD=new A.lx(0,160,0,0,1)
B.aZn=new A.lx(440,160,0,0,1)
B.aZE=new A.lx(-440,-420,3.141592653589793,130,1.2)
B.aZr=new A.lx(0,-420,3.141592653589793,130,1.2)
B.aZB=new A.lx(440,-420,3.141592653589793,130,1.2)
B.dk1=w([B.aZo,B.aZD,B.aZn,B.aZE,B.aZr,B.aZB],x.m)
B.aZQ=new A.r2("lines6","\ud83d\udee4\ufe0f","Two lines of three","Six separate boards: a straight line of three facing front, and a taller line of three behind it facing back",280,140,140,B.dk1,0,0.6)
B.aZy=new A.lx(0,300,0,0,1)
B.aZl=new A.lx(0,-300,3.141592653589793,0,1)
B.aZv=new A.lx(-560,0,-1.5707963267948966,0,1)
B.aZm=new A.lx(560,0,1.5707963267948966,0,1)
B.doX=w([B.aZy,B.aZl,B.aZv,B.aZm],x.m)
B.aZW=new A.r2("scatter","\ud83c\udf10","Billboard park","Four separate boards: one at the front, one at the back and one on each side, all facing out",320,160,150,B.doX,0,0.6)
B.a2w=w([B.aZR,B.aZO,B.aZU,B.aZT,B.aZN,B.aZV,B.aZM,B.aZX,B.aZP,B.aZS,B.aZQ,B.aZW],C.ax("O<r2>"))
B.dvQ=new A.i8(-134,-36,16,44)
B.dvD=new A.i8(34,118,30,66)
B.dvE=new A.i8(34,118,80,116)
B.dvC=new A.i8(34,118,130,166)
B.dvR=new A.i8(-134,-76,140,160)
B.cu4=w([B.dvQ,B.dvD,B.dvE,B.dvC,B.dvR],x.T)
B.cu7=w([y.O,y.x,y.R,"Fasten the single black feed from the panel to the FEED screw (it powers both switches through a joined tab).","Fasten the black wire to the first light to the screw of switch 1.","Fasten the black wire to the second light to the screw of switch 2.",y.b,y.n],x.s)
B.eHE=new C.z(-600,1250)
B.eHC=new C.z(-520,1260)
B.eHA=new C.z(-460,1250)
B.esi=new C.z(520,1280)
B.esG=new C.z(600,1270)
B.eHo=new C.z(-300,1300)
B.cz_=w([B.eHE,B.eHC,B.eHA,B.esi,B.esG,B.eHo],x.f)
B.czr=w([460,900,1500,1740],x.n)
B.cBl=w([50,130],x.n)
B.cBm=w([50,140],x.n)
B.cC8=w([51,52,53],x.t)
B.exB=new C.z(-9.5,4.6)
B.eA_=new C.z(-5.9,2.3)
B.eFT=new C.z(8.8,4.4)
B.cDp=w([B.exB,B.eA_,B.eFT],x.f)
B.cDL=w([5,35],x.n)
B.cEl=w([61,63],x.t)
B.cEy=w([62,64],x.t)
B.cFy=w([68,172],x.n)
B.beI=new C.u(1,0.6039215686274509,0.30980392156862746,0.30980392156862746,D.q)
B.bpx=new C.u(1,0.30980392156862746,0.47843137254901963,0.3686274509803922,D.q)
B.z4=w([B.nN,B.Xy,B.beI,B.bpx,B.afA,D.j7],x.O)
B.bm7=new C.u(1,0.23137254901960785,0.07058823529411765,0.07058823529411765,D.q)
B.bfQ=new C.u(1,0.23137254901960785,0.1843137254901961,0.0392156862745098,D.q)
B.bd4=new C.u(1,0.043137254901960784,0.1803921568627451,0.09019607843137255,D.q)
B.cGp=w([B.bm7,B.bfQ,B.bd4],x.O)
B.t7=new A.ju("ground","Bare copper \xb7 ground",B.vB,D.c,"ground")
B.tG=new C.u(1,0.14901960784313725,0.14901960784313725,0.16470588235294117,D.q)
B.h88=new A.ju("feed","Black \xb7 hot feed from the panel",B.tG,D.c,"hot")
B.LD=new C.u(1,0.22745098039215686,0.1803921568627451,0.1803921568627451,D.q)
B.h83=new A.ju("loadA","Black \xb7 to light 1",B.LD,D.c,"hot")
B.bcl=new C.u(1,0.16862745098039217,0.16862745098039217,0.2,D.q)
B.h85=new A.ju("loadB","Black \xb7 to light 2",B.bcl,D.c,"hot")
B.cGX=w([B.t7,B.h88,B.h83,B.h85],x.d)
B.avO=w([72,73,74,75],x.t)
B.eHl=new C.z(-25,-15)
B.epF=new C.z(25,-15)
B.eHk=new C.z(-25,15)
B.epE=new C.z(25,15)
B.cKT=w([B.eHl,B.epF,B.eHk,B.epE],x.f)
B.fXF=new A.r(-125,292,-114.5)
B.h_Z=new A.r(125,292,-114.5)
B.h2z=new A.r(125,208,-114.5)
B.h_F=new A.r(-125,208,-114.5)
B.cL9=w([B.fXF,B.h_Z,B.h2z,B.h_F],x.o)
B.bFH=new A.pN("wall","Whole-wall TV","\ud83c\udfac",0,!0)
B.bFP=new A.pN("tv200",'Cinema 200"',"\ud83c\udfac",175,!1)
B.bFK=new A.pN("tv150",'Cinema 150"',"\ud83c\udfac",130,!1)
B.bFL=new A.pN("bangtv",'Beovision TV 77"',"\ud83d\udcfa",66,!1)
B.bFG=new A.pN("sonytv",'Sony Bravia 75"',"\ud83d\udcfa",64,!1)
B.bFQ=new A.pN("lgtv",'LG OLED 65"',"\ud83d\udcfa",56,!1)
B.bFJ=new A.pN("tv",'Samsung Neo QLED 55"',"\ud83d\udcfa",48,!1)
B.bFO=new A.pN("appletv",'Apple TV 4K 50"',"\ud83d\udcfa",44,!1)
B.bFN=new A.pN("lamp","Table lamp","\ud83d\udca1",0,!1)
B.bFM=new A.pN("toaster","Toaster","\ud83c\udf5e",0,!1)
B.bFI=new A.pN("hairdryer","Hair dryer","\ud83d\udc87",0,!1)
B.a2O=w([B.bFH,B.bFP,B.bFK,B.akS,B.bFL,B.bFG,B.bFQ,B.bFJ,B.bFO,B.bFN,B.bFM,B.bFI],C.ax("O<pN>"))
B.cLk=w([y.O,y.x,y.R,y.N,y.E,y.k,y.b,y.n],x.s)
B.bf5=new C.u(1,0.7764705882352941,0.5254901960784314,0.25882352941176473,D.q)
B.bfY=new C.u(1,0.43529411764705883,0.2901960784313726,0.1803921568627451,D.q)
B.bn2=new C.u(1,0.6627450980392157,0.44313725490196076,0.29411764705882354,D.q)
B.aw5=w([F.n8,B.bf5,E.aee,B.bfY,B.bn2],x.O)
B.cSD=w([y.O,"Two cables come into the box: one from the breaker panel (LINE) and one going to the light (LOAD).","Twist the two white wires together with a wire nut. A switch does not cut the neutral.",y.R,"Fasten the black wire from the panel to one BRASS screw.","Fasten the black wire that goes to the light to the other BRASS screw.","Push the switch into the box, put the plate on and test with the power on."],x.s)
B.eop=new C.z(0,330)
B.eHb=new C.z(-120,1080)
B.eoT=new C.z(120,1080)
B.eHm=new C.z(-300,1000)
B.eq2=new C.z(300,1000)
B.eHO=new C.z(-700,800)
B.et4=new C.z(700,800)
B.cT1=w([B.eop,B.eHb,B.eoT,B.eHm,B.eq2,B.eHO,B.et4],x.f)
B.cT7=w(["Walnut","Blue grey","Brick red","Sage green","Sand","Charcoal"],x.s)
B.jP=w(["switch","switch2p","switch3","switch4","switchsmart","switchcombo"],x.s)
B.fZv=new A.r(-6.5,7.5,-7.85)
B.fZA=new A.r(-6.5,7.8,-3)
B.cTo=w([B.fZv,B.fZA],x.o)
B.h8y=new A.FD("NGMY JOBS","Find work. Get hired. Get paid.",D.aE,D.im,D.vu)
B.h8G=new A.FD("NGMY LOANS","Help when you need it most.",D.cS,D.dX,D.vA)
B.h8B=new A.FD("KISWAHILI SCHOOL","Learn Swahili and English, step by step.",D.bP,D.ts,D.vE)
B.h8D=new A.FD("CIVIC REGISTRY","Your family, your community, registered.",D.d0,D.d7,D.nP)
B.h8x=new A.FD("CORE PROTOCOL","Studios for curious minds.",D.b5,D.jm,D.pJ)
B.h8C=new A.FD("BUILD AND FIX","The Construction Lab: wire it, plumb it.",D.ft,D.hy,D.tD)
B.h8r=new A.FD("CREATE WITH NGMY","Videos, slides, bios and books.",D.bD,D.kv,D.pF)
B.cTs=w([B.h8y,B.h8G,B.h8B,B.h8D,B.h8x,B.h8C,B.h8r],C.ax("O<FD>"))
B.hji=new A.pv(0,-100,100,24)
B.hjp=new A.pv(1,90,100,24)
B.cTE=w([B.hji,B.hjp],x.X)
B.eHY=new C.z(-95,160)
B.eHu=new C.z(-35,175)
B.etQ=new C.z(95,170)
B.cTI=w([B.eHY,B.eHu,B.etQ],x.f)
B.bfx=new C.u(1,0.9176470588235294,0.9490196078431372,0.9686274509803922,D.q)
B.bkQ=new C.u(1,0.9647058823529412,0.9098039215686274,0.9098039215686274,D.q)
B.bjR=new C.u(1,0.9529411764705882,0.9215686274509803,0.7843137254901961,D.q)
B.awt=w([B.AY,B.bfx,B.bkQ,B.bjR],x.O)
B.e9D={common:0}
B.eYb=new C.dD(B.e9D,1,x.M)
B.bG4=new A.fG(23,"COMMON screw (the odd one)",B.eYb,"The COMMON screw is the one with a different colour. The black wire that brings the power in, or goes to the light, belongs here.",!1,"hot")
B.eay={trav1:0,trav2:1}
B.aOT=new C.dD(B.eay,2,x.M)
B.bGa=new A.fG(21,"Traveler screw (top)",B.aOT,y.X,!1,"hot")
B.bGp=new A.fG(22,"Traveler screw (bottom)",B.aOT,y.X,!1,"hot")
B.cTV=w([B.vY,B.bG4,B.bGa,B.bGp],x.r)
B.dvX=new A.i8(-60,60,28,50)
B.dvT=new A.i8(-150,-100,70,170)
B.dvw=new A.i8(100,150,70,170)
B.dvY=new A.i8(-60,-20,156,186)
B.dvB=new A.i8(20,60,156,186)
B.cU9=w([B.dvX,B.dvT,B.dvw,B.dvY,B.dvB],x.T)
B.cUb=w([y.O,"The cable comes in through the top of the box. Strip about 3/4 inch of insulation from each wire.","Fasten the bare copper ground wire to the GREEN screw.","Fasten the white (neutral) wire to a SILVER screw.","Fasten the black (hot) wire to a BRASS screw. Wrap each wire clockwise under its screw.","Fold the wires back and push the outlet into the box.","Put the cover plate on, then turn the power on and test."],x.s)
B.h5J=new A.r(-3.6,7.5,-7.85)
B.fYX=new A.r(-3.6,4.2,-7.85)
B.cUi=w([B.h5J,B.fYX],x.o)
B.cUk=w([-0.5,-0.25,0,0.25,0.5],x.n)
B.eNv=new C.bj(600,400,!0)
B.eN2=new C.bj(1030,400,!0)
B.eN3=new C.bj(1210,400,!0)
B.cUO=w([B.eNv,B.eN2,B.eN3],C.ax("O<+(L,L,R)>"))
B.cV2=w([0,2,1,3,4,6,7,8],x.t)
B.eO8=new C.bj(-0.1,0,0.5)
B.eQ_=new C.bj(0.35,-0.4,0.3)
B.eOX=new C.bj(-0.4,0.55,0.35)
B.cV8=w([B.eO8,B.eQ_,B.eOX],C.ax("O<+(L,L,L)>"))
B.eH5=new C.z(-1050,"store")
B.aNA=new C.z(-840,"tower")
B.eHG=new C.z(-630,"tower")
B.eHw=new C.z(-420,"gasstation")
B.aNz=new C.z(-210,"tower")
B.eot=new C.z(0,"hq")
B.aNo=new C.z(210,"tower")
B.eqA=new C.z(420,"store")
B.esI=new C.z(630,"tower")
B.aNq=new C.z(840,"tower")
B.eoJ=new C.z(1050,"gasstation")
B.cVI=w([B.eH5,B.aNA,B.eHG,B.eHw,B.aNz,B.eot,B.aNo,B.eqA,B.esI,B.aNq,B.eoJ],x.d6)
B.a3b=w(["Always switch the breaker OFF and test the wires with a tester before you touch them.","Never use water on an electrical fire: switch the power off at the breaker first.","Reversed hot and neutral can look fine and still be a shock hazard.","A GFCI outlet protects you near water: press TEST every month.","A ceiling fan needs a fan-rated box, because it is heavy and it shakes."],x.s)
B.h2G=new A.r(9.8,6,-7.85)
B.fY7=new A.r(9.8,7.5,-7.85)
B.h64=new A.r(-8,7.5,-7.85)
B.h_H=new A.r(-8,1.5,-7.85)
B.cVV=w([B.h2G,B.fY7,B.h64,B.h_H],x.o)
B.bfn=new C.u(1,0.5411764705882353,0.35294117647058826,0.23529411764705882,D.q)
B.aef=new C.u(1,0.10588235294117647,0.07058823529411765,0.06274509803921569,D.q)
B.bpp=new C.u(1,0.8509803921568627,0.27450980392156865,0.49411764705882355,D.q)
B.ad5=new C.u(1,0.23137254901960785,0.24705882352941178,0.3607843137254902,D.q)
B.ekP=new A.rC(B.bfn,B.aef,B.bpp,B.ad5,"xbot")
B.eV9=new A.F7(0,"Ama",0,2,B.ekP,"A nurse who works nights.")
B.bhp=new C.u(1,0.4196078431372549,0.27058823529411763,0.18823529411764706,D.q)
B.beC=new C.u(1,0.08627450980392157,0.06274509803921569,0.06274509803921569,D.q)
B.bmT=new C.u(1,0.1803921568627451,0.5607843137254902,0.3568627450980392,D.q)
B.ekR=new A.rC(B.bhp,B.beC,B.bmT,B.L_,"soldier")
B.eVa=new A.F7(1,"Joseph",1,2,B.ekR,"A student who is always hungry.")
B.bkU=new C.u(1,0.6274509803921569,0.4196078431372549,0.2784313725490196,D.q)
B.bfF=new C.u(1,0.2901960784313726,0.24705882352941178,0.4196078431372549,D.q)
B.ekN=new A.rC(B.bkU,B.Lw,D.aE,B.bfF,"xbot")
B.eV8=new A.F7(2,"Grace",3,4,B.ekN,"A teacher who marks papers late.")
B.adi=new C.u(1,0.8784313725490196,0.6431372549019608,0.48627450980392156,D.q)
B.ah6=new C.u(1,0.1843137254901961,0.43529411764705883,0.7098039215686275,D.q)
B.ekO=new A.rC(B.adi,D.afg,B.ah6,B.L_,"soldier")
B.eV5=new A.F7(3,"Daniel",6,8,B.ekO,"A driver who sleeps in the day.")
B.bnv=new C.u(1,0.788235294117647,0.5450980392156862,0.3686274509803922,D.q)
B.bfR=new C.u(1,0.16862745098039217,0.17647058823529413,0.22745098039215686,D.q)
B.ekS=new A.rC(B.bnv,B.aef,D.aC,B.bfR,"xbot")
B.eVb=new A.F7(4,"Fatima",7,8,B.ekS,"A baker who gets up at four.")
B.agY=new C.u(1,0.47843137254901963,0.29411764705882354,0.18823529411764706,D.q)
B.bm0=new C.u(1,0.24705882352941178,0.22745098039215686,0.2,D.q)
B.ekT=new A.rC(B.agY,D.e2,D.d8,B.bm0,"soldier")
B.eV7=new A.F7(5,"Papa Moses",10,-1,B.ekT,"The oldest in the house. He watches TV all day.")
B.bjL=new C.u(1,0.5490196078431373,0.3568627450980392,0.23137254901960785,D.q)
B.ekM=new A.rC(B.bjL,B.af7,D.aw,B.ad5,"xbot")
B.eV6=new A.F7(6,"Mama Rose",9,-1,B.ekM,"Cooks for everybody in the kitchen.")
B.Cz=w([B.eV9,B.eVa,B.eV8,B.eV5,B.eVb,B.eV7,B.eV6],C.ax("O<F7>"))
B.aV8=new A.r(5,1.8,-7.85)
B.h0F=new A.r(5,-0.1,-7.85)
B.h1F=new A.r(12.5,-0.1,-7.85)
B.cWX=w([B.aV8,B.h0F,B.h1F],x.o)
B.lA=w(["outlet","gfci","split","v240four","v240three","v240only","isolated"],x.s)
B.fPS=new A.r(3,3.1,-7.1)
B.aV0=new A.r(3,1.7,-7.1)
B.h1A=new A.r(3,1,-7.1)
B.fUh=new A.r(3.65,0.5,-7.1)
B.fW7=new A.r(4.3,1,-7.1)
B.h0A=new A.r(4.3,1.8,-7.1)
B.h67=new A.r(5,1.8,-7.1)
B.cXp=w([B.fPS,B.aV0,B.h1A,B.fUh,B.fW7,B.h0A,B.h67,B.aV8],x.o)
B.akW=new A.fG(23,"Silver screw W: NEUTRAL",B.J3,y.I,!1,"neutral")
B.e9R={hot1:0,hot2:1}
B.Tr=new C.dD(B.e9R,2,x.M)
B.bFR=new A.fG(21,"Brass screw X: HOT",B.Tr,y.l,!1,"hot")
B.bGv=new A.fG(22,"Brass screw Y: HOT",B.Tr,y.l,!1,"hot")
B.cXy=w([B.vY,B.akW,B.bFR,B.bGv],x.r)
B.cXT=w(["My outlet is dead and it is dark in here. Please come and wire it.","The light in my room does not work, and my phone will not charge. Can you fix the wiring?","I have no power in my room at all. Can an electrician come?"],x.s)
B.eRI=new C.cx([-0.35,-0.2,0.42,0.3])
B.eRV=new C.cx([0.3,0.25,0.32,0.38])
B.eQL=new C.cx([0.05,-0.55,0.22,0.14])
B.eRd=new C.cx([-0.5,0.45,0.2,0.16])
B.cY4=w([B.eRI,B.eRV,B.eQL,B.eRd],x.eV)
B.cY5=w([D.aw,D.be,D.aE,D.d0,D.bO,D.f2],x.O)
B.h5o=new A.r(0.6,11,-3.4)
B.fX0=new A.r(0.6,3.2,-3.2)
B.h4S=new A.r(0.6,2.2,-1.9)
B.fWD=new A.r(0.6,0.7,-1.5)
B.cYq=w([B.h5o,B.fX0,B.h4S,B.fWD],x.o)
B.cYC=w([0,24,-24,48,-48],x.n)
B.K7=new A.ju("neutral","White \xb7 neutral",B.oI,D.av,"neutral")
B.h7S=new A.ju("line","Black \xb7 hot from the panel (LINE)",B.tG,D.c,"hot")
B.h89=new A.ju("load","Black \xb7 hot to the light (LOAD)",B.LD,D.c,"hot")
B.cYO=w([B.t7,B.K7,B.h7S,B.h89],x.d)
B.cZ4=w([y.O,y.x,y.R,"Fasten the white NEUTRAL wire to the NEUTRAL (silver) screw. A regular switch never touches the neutral, this one does.","Fasten the black wire from the panel to the LINE screw.","Fasten the black wire that goes to the light to the LOAD screw.",y.b,y.n],x.s)
B.eHN=new C.z(-700,330)
B.et3=new C.z(700,380)
B.eH7=new C.z(-1100,-420)
B.eoP=new C.z(1100,-480)
B.eHd=new C.z(-1300,100)
B.eoW=new C.z(1350,30)
B.eou=new C.z(0,-900)
B.eHe=new C.z(-1500,-300)
B.eoX=new C.z(1550,-200)
B.cZ7=w([B.eHN,B.et3,B.eH7,B.eoP,B.eHd,B.eoW,B.eou,B.eHe,B.eoX],x.f)
B.cZd=w([U.qt,A3.T5,Q.lh],x.f)
B.hjk=new A.pv(0,-64,120,26)
B.hjn=new A.pv(1,64,120,26)
B.hjs=new A.pv(2,0,84,24)
B.cZL=w([B.hjk,B.hjn,B.hjs],x.X)
B.fVb=new A.r(0,8.3,0)
B.aUB=new A.r(0,3.9,0)
B.a3l=w([B.fVb,B.aUB],x.o)
B.d_0=w([y.O,"Make sure the box is rated for a fan. A plain light box cannot carry the weight and the shaking.","Join the house ground wire to the fan ground.","Join the house white wire to the fan white wire with a wire nut.","Join the house black wire to the fan black wire with a wire nut.","Push the wires up into the box and fasten the canopy to the ceiling.",y.f],x.s)
B.eGa=new C.z(-3.5,11)
B.evZ=new C.z(3.5,11)
B.eui=new C.z(-3.5,-11)
B.erV=new C.z(3.5,-11)
B.d_h=w([B.eGa,B.evZ,B.eui,B.erV],x.f)
B.h32=new A.r(-0.6,11,-3.4)
B.fYe=new A.r(-0.6,3.2,-3.2)
B.h25=new A.r(-0.6,2.2,-1.9)
B.h6r=new A.r(-0.6,0.7,-1.5)
B.d_j=w([B.h32,B.fYe,B.h25,B.h6r],x.o)
B.Hr=w(["dog","cat","cow","sheep","chicken","horse"],x.s)
B.eDg=new C.z(-1.2,0)
B.eLR=new C.z(1.2,0)
B.d_Y=w([B.eDg,B.eLR],x.f)
B.d0q=w([40,70,100,130,160],x.n)
B.bG6=new A.fG(23,"NEUTRAL screw (silver)",B.J3,"The electronics inside need the neutral wire to run. White goes on the silver screw.",!1,"neutral")
B.ea6={line:0}
B.eYj=new C.dD(B.ea6,1,x.M)
B.bGi=new A.fG(21,"LINE screw (brass, hot in)",B.eYj,"The black wire from the breaker panel goes on the LINE screw.",!1,"hot")
B.eaa={load:0}
B.eXs=new C.dD(B.eaa,1,x.M)
B.bGl=new A.fG(22,"LOAD screw (brass, hot out)",B.eXs,"The black wire that goes to the light goes on the LOAD screw.",!1,"hot")
B.d0A=w([B.vY,B.bG6,B.bGi,B.bGl],x.r)
B.efX=new A.nq("flange","flange","Toilet flange",D.V,"The flange is fixed to the floor over the drain. Everything else sits on it.",!1,0)
B.ddq=w(["flange"],x.s)
B.efV=new A.nq("wax","wax","Wax ring",B.ddq,"The wax ring goes on the flange before the toilet. It makes the seal against sewer gas and water.",!1,0)
B.doe=w(["wax"],x.s)
B.efS=new A.nq("toilet","toilet","Toilet",B.doe,"The toilet is lowered straight down onto the wax ring. The ring has to be there first.",!1,0)
B.dmw=w(["toilet"],x.s)
B.efW=new A.nq("bolts","bolts","Toilet bolts",B.dmw,"The two bolts hold the toilet to the flange. Set the toilet first.",!1,2)
B.efT=new A.nq("tvalve","valve","Toilet shut-off valve",D.V,"The shut-off valve goes on the pipe that comes out of the wall.",!0,0)
B.dmD=w(["tvalve","toilet"],x.s)
B.efU=new A.nq("those","hosecold","Toilet supply hose",B.dmD,"The hose joins the valve to the toilet tank, so both must be there first.",!1,2)
B.aIA=new A.nq("faucet","faucet","Faucet",D.V,"The faucet goes through the hole in the counter.",!1,0)
B.aID=new A.nq("vhot","valve","Hot shut-off valve (left)",D.V,y.W,!0,0)
B.aIB=new A.nq("vcold","valve","Cold shut-off valve (right)",D.V,y.W,!0,0)
B.dnD=w(["vhot","faucet"],x.s)
B.aIE=new A.nq("hhot","hosehot","Hot supply hose",B.dnD,"The hose joins the hot valve to the faucet, so the valve and the faucet must be there first.",!1,2)
B.dnA=w(["vcold","faucet"],x.s)
B.aIC=new A.nq("hcold","hosecold","Cold supply hose",B.dnA,"The hose joins the cold valve to the faucet, so the valve and the faucet must be there first.",!1,2)
B.aIz=new A.nq("tail","tail","Tailpiece",D.V,"The tailpiece hangs from the sink drain. It is the first piece of the drain.",!1,0)
B.dmp=w(["tail"],x.s)
B.aIF=new A.nq("trap","trap","P-trap",B.dmp,"The P-trap joins the tailpiece. Build the drain from the top down.",!1,1)
B.dmx=w(["trap"],x.s)
B.aIG=new A.nq("arm","arm","Trap arm",B.dmx,"The trap arm joins the trap and goes into the wall.",!1,1)
B.cWs=w([B.efX,B.efV,B.efS,B.efW,B.efT,B.efU,B.aIA,B.aID,B.aIB,B.aIE,B.aIC,B.aIz,B.aIF,B.aIG],x.fI)
B.elG=new A.WP("bathroom","Bathroom",B.cWs,"Fit out a bathroom: a toilet and a sink with its faucet, supply hoses and drain.")
B.dfi=w([B.aIA,B.aID,B.aIB,B.aIE,B.aIC,B.aIz,B.aIF,B.aIG],x.fI)
B.elH=new A.WP("kitchen","Kitchen",B.dfi,"Fit out a kitchen sink: the faucet, the hot and cold supplies and the drain.")
B.axg=w([B.elG,B.elH],C.ax("O<WP>"))
B.eHX=new C.z(-900,400)
B.etM=new C.z(900,400)
B.eHV=new C.z(-900,1000)
B.etK=new C.z(900,1000)
B.eHn=new C.z(-300,1260)
B.eq3=new C.z(300,1260)
B.eH3=new C.z(-1000,700)
B.eoG=new C.z(1000,700)
B.eHH=new C.z(-640,90)
B.esJ=new C.z(640,90)
B.eHW=new C.z(-900,1400)
B.etL=new C.z(900,1400)
B.d14=w([B.eHX,B.etM,B.eHV,B.etK,B.eHn,B.eq3,B.eH3,B.eoG,B.eHH,B.esJ,B.eHW,B.etL],x.f)
B.fPP=new A.r(8.2,0.9,-6.3)
B.h2h=new A.r(8.2,-0.1,-6.3)
B.fTB=new A.r(8.2,-0.1,-7.85)
B.d1H=w([B.fPP,B.h2h,B.fTB],x.o)
B.esF=new C.z(-4.5,10)
B.eIK=new C.z(4.5,10)
B.eLP=new C.z(-4.5,-10)
B.eIG=new C.z(4.5,-10)
B.d1S=w([B.esF,B.eIK,B.eLP,B.eIG],x.f)
B.d1T=w([-0.28,0.28],x.n)
B.dw_=new A.i8(-70,70,20,44)
B.dvL=new A.i8(-110,-50,80,100)
B.dvG=new A.i8(50,110,80,100)
B.dvK=new A.i8(-110,-50,130,150)
B.dvF=new A.i8(50,110,130,150)
B.d24=w([B.dw_,B.dvL,B.dvG,B.dvK,B.dvF],x.T)
B.d2k=w([D.aw,D.aE,D.be,D.mZ,D.d0,D.ca,D.f2],x.O)
B.eBL=new C.z("back","Back wall")
B.eLA=new C.z("left","Left wall")
B.eDT=new C.z("right","Right wall")
B.d2L=w([B.eBL,B.eLA,B.eDT],x.L)
B.e9x={black:0}
B.J4=new C.dD(B.e9x,1,x.M)
B.bFY=new A.fG(51,"Black wire nut: HOT",B.J4,"The house black wire joins the fixture black wire.",!1,"hot")
B.eaE={white:0}
B.J0=new C.dD(B.eaE,1,x.M)
B.bGs=new A.fG(52,"White wire nut: NEUTRAL",B.J0,"The house white wire joins the fixture white wire.",!1,"neutral")
B.bFT=new A.fG(53,"Green ground connection",B.J1,"The bare copper house ground joins the green fixture ground wire.",!1,"ground")
B.d2W=w([B.bFY,B.bGs,B.bFT],x.r)
B.eHt=new C.z(-34,-6)
B.eq5=new C.z(30,10)
B.eH6=new C.z(-10,24)
B.d30=w([B.eHt,B.eq5,B.eH6],x.f)
B.d38=w([y.O,y.x,y.R,"Fasten hot leg 1 from the panel (black) to the top LEFT screw.","Fasten hot leg 2 from the panel (red) to the top RIGHT screw.","Fasten hot leg 1 to the heater (black) to the bottom LEFT screw.","Fasten hot leg 2 to the heater (red) to the bottom RIGHT screw.",y.b,y.n],x.s)
B.bEs=new A.DN("Oak",B.B9,"wood")
B.bEu=new A.DN("Dark wood",B.pV,"wood")
B.agZ=new C.u(1,0.5529411764705883,0.5647058823529412,0.5882352941176471,D.q)
B.bEw=new A.DN("Grey carpet",B.agZ,"carpet")
B.bno=new C.u(1,0.3568627450980392,0.4980392156862745,0.6509803921568628,D.q)
B.bEt=new A.DN("Blue carpet",B.bno,"carpet")
B.bkP=new C.u(1,0.8470588235294118,0.803921568627451,0.7058823529411765,D.q)
B.bEq=new A.DN("Cream carpet",B.bkP,"carpet")
B.bEv=new A.DN("White tile",B.Xi,"tile")
B.bEr=new A.DN("Slate tile",B.adR,"tile")
B.axC=w([B.bEs,B.bEu,B.bEw,B.bEt,B.bEq,B.bEv,B.bEr],C.ax("O<DN>"))
B.a9X=new A.ju("hot1","Black \xb7 hot 1",B.tG,D.c,"hot")
B.AK=new C.u(1,0.8196078431372549,0.29411764705882354,0.22745098039215686,D.q)
B.a9Y=new A.ju("hot2","Red \xb7 hot 2",B.AK,D.c,"hot")
B.d3S=w([B.K7,B.a9X,B.a9Y],x.d)
B.eNA=new C.bj(-80,100,D.aw)
B.ePt=new C.bj(80,100,D.be)
B.eOC=new C.bj(-80,150,D.aE)
B.d3T=w([B.eNA,B.ePt,B.eOC],x.dV)
B.hjg=new A.pv(0,0,78,26)
B.d40=w([B.hjg],x.X)
B.eav={store:0,gasstation:1}
B.eYl=new C.dD(B.eav,2,x.M)
B.brR=new A.z1("food","\ud83c\udf54","Food",B.eYl)
B.eas={shop:0,store:1}
B.eXV=new C.dD(B.eas,2,x.M)
B.brQ=new A.z1("groceries","\ud83d\uded2","Groceries",B.eXV)
B.e9Q={hospital:0}
B.eXQ=new C.dD(B.e9Q,1,x.M)
B.brT=new A.z1("medicine","\ud83d\udc8a","Medicine",B.eXQ)
B.e9T={hq:0,tower:1}
B.eYh=new C.dD(B.e9T,2,x.M)
B.brP=new A.z1("package","\ud83d\udce6","Package",B.eYh)
B.e91={school:0,firestation:1,hq:2}
B.eXD=new C.dD(B.e91,3,x.M)
B.brS=new A.z1("letters","\u2709\ufe0f","Letters",B.eXD)
B.Qy=w([B.brR,B.brQ,B.brT,B.brP,B.brS],C.ax("O<z1>"))
B.d4f=w([y.O,y.x,"Fasten the white neutral to a SILVER screw.","Fasten the black hot to a BRASS screw.","Fasten the green wire with the yellow stripe (the isolated ground, which runs all the way to the panel) to the GREEN screw with the orange triangle. The box itself is grounded with its own bare copper wire.",y.b,y.n],x.s)
B.d4m=w([-1000,-500,0,500,1000],x.n)
B.h26=new A.r(3,3.2,-7.85)
B.h6t=new A.r(3,4,-7.85)
B.h5K=new A.r(3,4.2,-7.4)
B.fRY=new A.r(3,3.95,-7)
B.d5k=w([B.h26,B.h6t,B.h5K,B.fRY],x.o)
B.d5m=w(["The sink leaks and there is water on the floor. Please fix the plumbing.","The toilet is not connected and the water is running everywhere. Help!","There is no water at my sink and the pipes are open. Can a plumber come?"],x.s)
B.WJ=new C.u(1,0.23137254901960785,0.3568627450980392,0.47843137254901963,D.q)
B.d5x=w([D.al,B.WJ,D.bL,D.br],x.O)
B.eYQ=new A.rG("apple","\ud83c\udf4e","Apple","A little energy",3,0.12,0,0.1,!1)
B.eYR=new A.rG("water","\ud83d\udca7","Water","Quenches your thirst",2,0,0,0.8,!1)
B.eYS=new A.rG("juice","\ud83e\udd64","Juice","Some energy and a drink",4,0.18,0,0.5,!1)
B.eYX=new A.rG("sandwich","\ud83e\udd6a","Sandwich","A good bit of energy",6,0.3,0,0,!1)
B.eYP=new A.rG("meal","\ud83c\udf54","Burger meal","Lots of energy",10,0.55,0,0,!1)
B.d5A=w([B.eYQ,B.eYR,B.eYS,B.eYX,B.eYP],x.y)
B.eHI=new C.z(-660,340)
B.eHq=new C.z(-330,340)
B.eq6=new C.z(330,340)
B.esL=new C.z(660,340)
B.eHJ=new C.z(-660,500)
B.eHr=new C.z(-330,500)
B.eq7=new C.z(330,500)
B.esM=new C.z(660,500)
B.eHK=new C.z(-660,780)
B.eHs=new C.z(-330,780)
B.eq9=new C.z(330,780)
B.esN=new C.z(660,780)
B.eHB=new C.z(-500,940)
B.esf=new C.z(500,940)
B.d6b=w([B.eHI,B.eHq,B.eq6,B.esL,B.eHJ,B.eHr,B.eq7,B.esM,B.eHK,B.eHs,B.eq9,B.esN,B.eHB,B.esf],x.f)
B.h2K=new A.r(6,0.2,0)
B.h14=new A.r(6,2.6,0)
B.aVC=new A.r(8.6,2.6,0)
B.d6D=w([B.h2K,B.h14,B.aVC],x.o)
B.d76=w([D.c,D.ds,D.eo,D.f3,D.bN,D.bM],x.O)
B.eHR=new C.z(-7,-7)
B.eti=new C.z(7,-7)
B.eHQ=new C.z(-7,7)
B.eth=new C.z(7,7)
B.d7l=w([B.eHR,B.eti,B.eHQ,B.eth],x.f)
B.d7n=w([-2.4,2.4],x.n)
B.d7o=w([-0.5,0,0.5],x.n)
B.akV=new A.fG(21,"Brass screw X: HOT",B.Tr,y.p,!1,"hot")
B.akT=new A.fG(22,"Brass screw Y: HOT",B.Tr,y.p,!1,"hot")
B.d7w=w([B.vY,B.akV,B.akT],x.r)
B.h8e=new A.Ps("Black","Hot (line or switched)","Brass terminal","120 V branch circuit","Carries the power from the breaker. Treat it as live until it is tested dead.","Can be a traveler in a three-way switch, or a switched hot. Verify with a tester.")
B.h8c=new A.Ps("Red","Hot (second hot or traveler)","Brass or the marked traveler terminal","Switch legs, travelers, fan and light controls","Often the switched wire to a fan or light, or a traveler.","Check the diagram: red can be a traveler or a second circuit.")
B.h8b=new A.Ps("White","Neutral","Silver terminal","120 V branch circuit","The return path for the current. It can still be live if something is wrong.","In a switch loop a white wire can be re-marked as a hot. A white wire is not always neutral.")
B.h8a=new A.Ps("Bare copper or green","Equipment ground","Green screw or the ground lead","Every grounded device","Not for current in normal use. It is the safety path if a fault happens.","Never use the neutral as a ground. Older homes may have no ground at all: that needs verification.")
B.h8d=new A.Ps("Gray / blue / others","Depends on the installation","See the device diagram","Low voltage, control wires, other systems","Do not guess what a wire does from its color.","Colors and their meaning are not the same everywhere. REQUIRES VERIFICATION.")
B.d7A=w([B.h8e,B.h8c,B.h8b,B.h8a,B.h8d],C.ax("O<Ps>"))
B.QG=w([-1.6,1.6],x.n)
B.h7Q=new A.ju("blackLine","Black \xb7 from the breaker",B.tG,D.c,"hot")
B.h86=new A.ju("blackLoad","Black \xb7 to the light",B.LD,D.c,"hot")
B.d7J=w([B.h7Q,B.h86,B.t7],x.d)
B.d80=w([0,10,22,36,52],x.n)
B.hjj=new A.pv(0,-60,130,26)
B.hjo=new A.pv(1,80,56,22)
B.d81=w([B.hjj,B.hjo],x.X)
B.d8o=w([D.bm,D.bI,D.aw,D.aR,D.br],x.O)
B.e9Y={isoground:0}
B.eXw=new C.dD(B.e9Y,1,x.M)
B.bGr=new A.fG(25,"Isolated-ground screw (green, orange triangle)",B.eXw,"The dedicated ground wire goes on the green screw with the orange triangle. It does not touch the box or the strap.",!1,"ground")
B.bGk=new A.fG(23,"Silver screw: NEUTRAL",B.J3,y.c,!1,"neutral")
B.e9S={hot:0}
B.a7F=new C.dD(B.e9S,1,x.M)
B.bG1=new A.fG(21,"Brass screw: HOT",B.a7F,y.u,!1,"hot")
B.d8z=w([B.bGr,B.bGk,B.bG1],x.r)
B.bce=new C.u(1,0.9294117647058824,0.9019607843137255,0.8392156862745098,D.q)
B.bal=new C.u(1,0.9137254901960784,0.8274509803921568,0.8274509803921568,D.q)
B.b9z=new C.u(1,0.8352941176470589,0.8941176470588236,0.8156862745098039,D.q)
B.afl=new C.u(1,0.9529411764705882,0.8901960784313725,0.6549019607843137,D.q)
B.beS=new C.u(1,0.7254901960784313,0.7647058823529411,0.8666666666666667,D.q)
B.bnx=new C.u(1,0.5607843137254902,0.6392156862745098,0.6588235294117647,D.q)
B.axT=w([B.bce,B.X2,B.bal,B.b9z,B.afl,B.beS,B.afp,B.bnx],x.O)
B.e9w={blackLine:0,blackLoad:1}
B.aOC=new C.dD(B.e9w,2,x.M)
B.bG7=new A.fG(21,"Brass screw (top)",B.aOC,y.v,!1,"hot")
B.bFU=new A.fG(22,"Brass screw (bottom)",B.aOC,y.v,!1,"hot")
B.akU=new A.fG(25,"Green screw: GROUND",B.J1,y.Z,!1,"ground")
B.d98=w([B.bG7,B.bFU,B.akU],x.r)
B.eHT=new C.z(-80,90)
B.etw=new C.z(80,90)
B.eHS=new C.z(-80,140)
B.etv=new C.z(80,140)
B.d9Q=w([B.eHT,B.etw,B.eHS,B.etv],x.f)
B.bGt=new A.fG(51,"Black wire nut: HOT",B.J4,"The house black wire joins the fan black wire.",!1,"hot")
B.bFS=new A.fG(52,"White wire nut: NEUTRAL",B.J0,"The house white wire joins the fan white wire.",!1,"neutral")
B.bGe=new A.fG(53,"Green ground connection",B.J1,"The bare copper house ground joins the green fan ground wire.",!1,"ground")
B.d9X=w([B.bGt,B.bFS,B.bGe],x.r)
B.b9k=new A.Sc("bus",-575,-25,0,1)
B.b9m=new A.Sc("police",-575,-25,854,5)
B.b9l=new A.Sc("bus",25,575,850,3)
B.b9n=new A.Sc("police",25,575,1704,6)
B.kh=w([B.b9k,B.b9m,B.b9l,B.b9n],C.ax("O<Sc>"))
B.akD=new A.rb(4,"deadOutlet")
B.da4=w([B.a_D,B.a_E,B.Nk,B.Nl,B.akD,B.a_H,B.a_I,B.a_J,B.a_K,B.a_L,B.a_F,B.a_G],C.ax("O<rb>"))
B.eQE=new C.cx([0,560,240,7])
B.eQF=new C.cx([0,560,300,9])
B.a3A=w([B.eQE,B.eQF],C.ax("O<+(L,L,L,H)>"))
B.h84=new A.ju("always","Black \xb7 always hot (from the panel)",B.tG,D.c,"hot")
B.h7Y=new A.ju("switched","Red \xb7 switched hot (from the wall switch)",B.AK,D.c,"hot")
B.dav=w([B.t7,B.K7,B.h84,B.h7Y],x.d)
B.day=w([y.O,"Find the LINE and LOAD screws. LOAD is covered with yellow tape. Leave it covered unless you feed another outlet.",y.R,"Fasten the white wire to the silver LINE screw.","Fasten the black wire to the brass LINE screw.","Push the GFCI into the box and put the plate on.","Turn the power on, press RESET, then press TEST. It must click off."],x.s)
B.daB=w([y.O,y.x,y.R,"Fasten the black wire (power in, or to the light) to the COMMON screw: the odd-coloured one.","Fasten the first traveler (red) to a TRAVELER screw.","Fasten the second traveler (white wire taped black) to the other TRAVELER screw.",y.b,y.n],x.s)
B.hjh=new A.pv(0,0,80,26)
B.hjq=new A.pv(1,90,56,22)
B.daT=w([B.hjh,B.hjq],x.X)
B.db2=w(["car","ambulance","firetruck"],x.s)
B.dvZ=new A.i8(-62,62,6,46)
B.dvM=new A.i8(-117,-73,149,171)
B.dvW=new A.i8(-57,-13,164,186)
B.dvH=new A.i8(73,117,159,181)
B.dvz=new A.i8(120,144,140,160)
B.dvx=new A.i8(108,142,48,60)
B.db7=w([B.dvZ,B.dvM,B.dvW,B.dvH,B.dvz,B.dvx],x.T)
B.dbb=w([0.1,8.05],x.n)
B.fS1=new A.r(1000,900,1500)
B.fQA=new A.r(0,200,0)
B.aNy=new C.z(B.fS1,B.fQA)
B.fUx=new A.r(300,70,1000)
B.fQV=new A.r(0,250,300)
B.eC0=new C.z(B.fUx,B.fQV)
B.h3J=new A.r(-200,90,780)
B.fQR=new A.r(0,240,300)
B.ey8=new C.z(B.h3J,B.fQR)
B.h46=new A.r(-420,520,1000)
B.fQP=new A.r(0,230,300)
B.etT=new C.z(B.h46,B.fQP)
B.fWJ=new A.r(700,330,900)
B.fUv=new A.r(300,230,200)
B.eGC=new C.z(B.fWJ,B.fUv)
B.fSk=new A.r(1100,80,300)
B.fVT=new A.r(560,250,0)
B.eFD=new C.z(B.fSk,B.fVT)
B.fSa=new A.r(1080,100,-250)
B.fVS=new A.r(560,240,-100)
B.eJr=new C.z(B.fSa,B.fVS)
B.fS0=new A.r(1000,700,-700)
B.fTG=new A.r(200,230,-300)
B.eLw=new C.z(B.fS0,B.fTG)
B.fTH=new A.r(200,90,-860)
B.fQX=new A.r(0,250,-300)
B.eI6=new C.z(B.fTH,B.fQX)
B.h3R=new A.r(-300,110,-820)
B.fQS=new A.r(0,240,-300)
B.eyJ=new C.z(B.h3R,B.fQS)
B.h4B=new A.r(-900,600,-600)
B.h3S=new A.r(-300,230,-100)
B.exl=new C.z(B.h4B,B.h3S)
B.h3s=new A.r(-1100,90,-200)
B.h4c=new A.r(-560,250,0)
B.eLu=new C.z(B.h3s,B.h4c)
B.h3r=new A.r(-1100,120,250)
B.h4b=new A.r(-560,240,0)
B.eBt=new C.z(B.h3r,B.h4b)
B.h4l=new A.r(-700,520,1000)
B.h3o=new A.r(-100,230,100)
B.evo=new C.z(B.h4l,B.h3o)
B.fTF=new A.r(200,170,1300)
B.fQO=new A.r(0,230,150)
B.eLi=new C.z(B.fTF,B.fQO)
B.dbq=w([B.aNy,B.eC0,B.ey8,B.etT,B.eGC,B.eFD,B.eJr,B.eLw,B.eI6,B.eyJ,B.exl,B.eLu,B.eBt,B.evo,B.eLi,B.aNy],x.dt)
B.h_3=new A.r(-0.35,11,-3.4)
B.fYo=new A.r(-0.35,3.2,-3.2)
B.h1c=new A.r(-0.35,2.2,-1.9)
B.fWx=new A.r(-0.35,0.7,-1.5)
B.dbr=w([B.h_3,B.fYo,B.h1c,B.fWx],x.o)
B.h5B=new A.r(5.2,7.5,-7.85)
B.h1_=new A.r(5.2,4,-7.85)
B.dbx=w([B.h5B,B.h1_],x.o)
B.bG0=new A.fG(21,"LOAD hot (brass, taped)",D.J2,y.P,!0,"load")
B.bG3=new A.fG(22,"LINE hot (brass)",B.J4,"The black (hot) wire from the breaker goes on the brass LINE screw.",!1,"hot")
B.bG_=new A.fG(23,"LOAD neutral (silver, taped)",D.J2,y.P,!0,"load")
B.bGb=new A.fG(24,"LINE neutral (silver)",B.J0,"The white (neutral) wire from the breaker goes on the silver LINE screw.",!1,"neutral")
B.dbZ=w([B.bG0,B.bG3,B.bG_,B.bGb,B.akU],x.r)
B.aVm=new A.r(0,15.5,-3.6)
B.h_i=new A.r(0,20,-3.6)
B.h6c=new A.r(0,22.5,-2)
B.fXX=new A.r(0,22.5,1.1999999999999997)
B.h_s=new A.r(0,21.1,1.6)
B.dc4=w([B.aVm,B.h_i,B.h6c,B.fXX,B.h_s],x.o)
B.dcF=w([],x.bm)
B.HA=w([],x.B)
B.dcE=w([],x.dI)
B.zb=w([],x.E)
B.dcG=w([],x.T)
B.ayn=w([],x.z)
B.ayj=w([],x.e3)
B.wp=w([],x.a)
B.ayi=w([],x.W)
B.rt=w([],x.o)
B.aym=w([],x.h)
B.ayl=w([],x.f)
B.hcH=new A.ps("outlet","\ud83d\udd0c","Wall outlet","Black to brass, white to silver",D.aE)
B.hcB=new A.ps("switch","\ud83d\udca1","Light switch","Two blacks and a wire nut",D.aR)
B.hcC=new A.ps("gfci","\ud83d\udee1\ufe0f","GFCI outlet","LINE and LOAD near water",D.bu)
B.hcI=new A.ps("fan","\ud83c\udf00","Ceiling fan","Black, white, green and a fan box",D.bb)
B.hcw=new A.ps("switch2p","\ud83d\udd25","Double-pole switch","240 V: breaks both hot legs",D.i5)
B.hcD=new A.ps("switch3","\ud83d\udd00","Three-way switch","Common and two travelers",D.aR)
B.hcM=new A.ps("switch4","\ud83d\udd01","Four-way switch","Between two three-ways",D.co)
B.hcL=new A.ps("switchsmart","\ud83d\udcf6","Smart, motion or timer switch","Needs the neutral wire",D.by)
B.hcE=new A.ps("switchcombo","\ud83c\udf9a\ufe0f","Combination switch","Two switches, one feed",D.iI)
B.hcz=new A.ps("split","\ud83c\udf17","Split (half-switched) outlet","Break the tab: switched and always-on",D.aT)
B.hcJ=new A.ps("v240four","\ud83e\uddfa","4-wire 240 V outlet","Dryer, range and EV: two hots, neutral, ground",D.cs)
B.hcK=new A.ps("v240three","\ud83d\udd70\ufe0f","3-wire 240 V outlet","Old dryer or range: no separate ground",D.cY)
B.hcy=new A.ps("v240only","\u2744\ufe0f","240 V only outlet","Window AC, welder: two hots and ground",D.bb)
B.hcF=new A.ps("isolated","\ud83c\udfed","Isolated-ground outlet","Its own ground wire to the panel",D.bu)
B.hcG=new A.ps("ptrap","\ud83e\udea0","Sink drain (P-trap)","Build a drain with a water seal",D.co)
B.hcA=new A.ps("faucet","\ud83d\udeb0","Faucet supply lines","Hot left, cold right",D.cs)
B.hcx=new A.ps("house","\ud83c\udfd7\ufe0f","Build and fix a house","Stage by stage, then repair",D.by)
B.dcV=w([B.hcH,B.hcB,B.hcC,B.hcI,B.hcw,B.hcD,B.hcM,B.hcL,B.hcE,B.hcz,B.hcJ,B.hcK,B.hcy,B.hcF,B.hcG,B.hcA,B.hcx],C.ax("O<ps>"))
B.exE=new C.z(-1.6,3.5)
B.exe=new C.z(1.6,3.5)
B.ezb=new C.z(-1.6,-3.5)
B.evX=new C.z(1.6,-3.5)
B.dcW=w([B.exE,B.exe,B.ezb,B.evX],x.f)
B.ayu=w([!1,!1,!1,!1],x.u)
B.e9X={in1:0,in2:1}
B.aOB=new C.dD(B.e9X,2,x.M)
B.bFW=new A.fG(23,"IN screw (top left)",B.aOB,y.g,!1,"hot")
B.bGm=new A.fG(21,"IN screw (top right)",B.aOB,y.g,!1,"hot")
B.eal={out1:0,out2:1}
B.aOI=new C.dD(B.eal,2,x.M)
B.bGd=new A.fG(24,"OUT screw (bottom left)",B.aOI,y._,!1,"hot")
B.bGf=new A.fG(22,"OUT screw (bottom right)",B.aOI,y._,!1,"hot")
B.ddo=w([B.vY,B.bFW,B.bGm,B.bGd,B.bGf],x.r)
B.ddy=w(["city","billboards","edges","houses","hospital","traffic"],x.s)
B.ddK=w(["Look at the pieces: the tailpiece, the P-trap and the trap arm. Pick the tailpiece first and tap its glowing outline under the sink.","Pick the P-trap (the U-shaped bend) and tap its glowing outline. It joins the tailpiece.","Pick the trap arm and tap its outline. It joins the trap to the wall drain.","Slide each slip nut up to its joint and hand tighten it: tap the nuts.","Run the water and look for leaks. The U-bend keeps a plug of water that blocks sewer gas."],x.s)
B.doM=w(["Switch 1 common","Switch 2 common","Traveler terminal (both switches)","Green ground screw","Neutral splice (not on a switch)"],x.s)
B.e9k={"Line (from the breaker)":0,"Load (to the light)":1,"Traveler A":2,"Traveler B":3,Ground:4,Neutral:5}
B.dsS=new C.bu(B.e9k,["Switch 1 common","Switch 2 common","Traveler terminal (both switches)","Traveler terminal (both switches)","Green ground screw","Neutral splice (not on a switch)"],x.l)
B.diT=w(["Never assume the dark screw is the same on every brand: read the diagram on the switch.","A switch loop or an old house may not follow the colors: verify the wires."],x.s)
B.bsN=new A.ajW("Three-way switch (two switches, one light)","Two three-way switches control one light from two places. Each switch has a COMMON terminal (dark screw) and two TRAVELER terminals. Power (line) goes to the common of the first switch, the light (load) to the common of the second, and two travelers join the switches. The ground goes to the green screw. A standard single-pole switch cannot do this job.",B.doM,B.dsS,B.diT)
B.cUl=w(["Fan (motor) control wire","Light control wire","Neutral","Ground","Fan-rated support"],x.s)
B.e9Z={"Motor lead (black)":0,"Light lead (blue)":1,"Neutral (white)":2,"Ground (green)":3,Support:4}
B.dtp=new C.bu(B.e9Z,["Fan (motor) control wire","Light control wire","Neutral","Ground","Fan-rated support"],x.l)
B.cYD=w(["A blue wire is a light-kit lead on many fans, but not on all: read the diagram.","A fan that spins does not prove the installation is safe."],x.s)
B.bsM=new A.ajW("Ceiling fan with a light kit","A fan has a motor and often a light kit, and they are not always switched together. Follow the fan maker's diagram: the motor lead goes to the fan control (or switched hot), the light lead to the light control, the white to neutral and the green to the ground. The box must be fan rated.",B.cUl,B.dtp,B.cYD)
B.zc=w([B.bsN,B.bsM],C.ax("O<ajW>"))
B.fBB=new C.y("\u2728",null,D.aQY,null,null,null,null,null,null,null,null,null)
B.fLW=new C.y("Nobody needs help right now.",null,D.fV,null,D.L,null,null,null,null,null,null,null)
B.flP=new C.F(!0,D.aQ,null,null,null,null,13,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fDV=new C.y("Everybody's wiring and plumbing works. Keep an eye on food and health: things break when you least expect it.",null,B.flP,null,D.L,null,null,null,null,null,null,null)
B.de8=w([B.fBB,D.N,B.fLW,D.au,B.fDV],x.p)
B.dee=w(["road","roundabout","roadturn","roadtee","roadcross","house2","bighouse","billboard","tower","hq","store","gasstation","dmv","ubstation","townsign","cornersign","adboard","shop","hospital","firestation","school","car","firetruck","ambulance","dog","cat","cow","sheep","chicken","horse","tree","pine","bush","flowers","fence","lamppost","bench","pond","swing","shed","doghouse"],x.s)
B.eHa=new C.z(-1150,80)
B.eoS=new C.z(1150,80)
B.eH9=new C.z(-1150,1990)
B.eoR=new C.z(1150,1990)
B.den=w([B.eHa,B.eoS,B.eH9,B.eoR],x.f)
B.eYV=new A.rG("pills","\ud83e\ude79","Pain pills","Cures a headache or a cold: you walk normally again",8,0,0,0,!0)
B.eYU=new A.rG("bread","\ud83c\udf5e","Food for the town","5 portions for the people who live here",10,0,0,0,!1)
B.eYT=new A.rG("medicine","\ud83d\udc8a","Medicine","3 doses for the sick",12,0,0,0,!1)
B.der=w([B.eYV,B.eYU,B.eYT],x.y)
B.deu=w([D.aw,D.bI,D.be],x.O)
B.h3b=new A.r(125,292,-121.5)
B.h63=new A.r(-125,292,-121.5)
B.fRZ=new A.r(-125,208,-121.5)
B.h2T=new A.r(125,208,-121.5)
B.dey=w([B.h3b,B.h63,B.fRZ,B.h2T],x.o)
B.fT2=new A.r(11.4,4.6,-6)
B.h_B=new A.r(11.4,5,-7.85)
B.fWy=new A.r(2.6,5,-7.85)
B.fX9=new A.r(2.6,3.4,-7.85)
B.deA=w([B.fT2,B.h_B,B.fWy,B.fX9],x.o)
B.deE=w(["hospital","shop","school"],x.s)
B.deF=w(["hot","cold"],x.s)
B.deI=w([D.aw,D.be,D.aE,D.f2,D.bS],x.O)
B.h82=new A.ju("black","Black \xb7 hot",B.tG,D.c,"hot")
B.h7W=new A.ju("white","White \xb7 neutral",B.oI,D.av,"neutral")
B.R3=w([B.h82,B.h7W,B.t7],x.d)
B.eug=new C.z(-3.5,4)
B.eB4=new C.z(3.5,4)
B.ewo=new C.z(-3.5,-4)
B.eoh=new C.z(3.5,-4)
B.df7=w([B.eug,B.eB4,B.ewo,B.eoh],x.f)
B.dfc=w(["Ada","Ben","Chidi","Dina","Efe","Farah","Gus","Halima","Ivo","Jamal","Kemi","Lola"],x.s)
B.eLE=new C.z(-2.4,5)
B.eCs=new C.z(2.4,5)
B.ezK=new C.z(-2.4,-5)
B.eyu=new C.z(2.4,-5)
B.dfd=w([B.eLE,B.eCs,B.ezK,B.eyu],x.f)
B.dfG=w([y.O,"Break off the little brass tab between the two brass screws, so the two halves are separate.",y.R,"Fasten the white neutral to a SILVER screw (the silver tab stays joined).","Fasten the always-hot black wire to the bottom BRASS screw.","Fasten the switched hot (red, from the wall switch) to the top BRASS screw.",y.b,y.n],x.s)
B.ePy=new C.bj(-6,-4,D.c7)
B.eOc=new C.bj(5,-5,D.bI)
B.ePx=new C.bj(0,1,D.aw)
B.eQ1=new C.bj(-5,5,D.by)
B.eNr=new C.bj(6,4,D.c)
B.dg_=w([B.ePy,B.eOc,B.ePx,B.eQ1,B.eNr],x.dV)
B.dgt=w([U.qt,Q.lh],x.f)
B.dgx=w(["split","v240four","v240three","v240only","isolated"],x.s)
B.e9L={feed:0}
B.eY0=new C.dD(B.e9L,1,x.M)
B.bFZ=new A.fG(21,"FEED screw (joined tab)",B.eY0,"The one feed wire goes on the side where the brass screws are joined by a tab: it powers both switches.",!1,"hot")
B.ea8={loadA:0,loadB:1}
B.aOH=new C.dD(B.ea8,2,x.M)
B.bGq=new A.fG(22,"Switch 1 screw \u2192 light 1",B.aOH,y.q,!1,"hot")
B.bGu=new A.fG(24,"Switch 2 screw \u2192 light 2",B.aOH,y.q,!1,"hot")
B.dgJ=w([B.vY,B.bFZ,B.bGq,B.bGu],x.r)
B.eGE=new C.z("Slab","First the concrete slab (the foundation) is poured and left to cure. Every wall sits on it.")
B.eJv=new C.z("Framing","The carpenters build the wall frames from 2x4 studs, spaced 16 inches apart, with plates on the top and bottom.")
B.eyd=new C.z("Plumbing rough-in","The plumber runs the hot (red) and cold (blue) water lines and the white drain pipes inside the walls and floor before anything is closed up.")
B.eEU=new C.z("Electrical rough-in","The electrician runs the yellow and white cables from the breaker panel to every box, and fixes the boxes to the studs.")
B.eFW=new C.z("Drywall","Drywall covers the frame. Here it is see-through so you can still look at the pipes and wires behind it.")
B.eyE=new C.z("Fixtures","Last come the outlets, switches, light, sink, toilet and water heater. This is where most repairs happen.")
B.ezV=new C.z("Roof","The roof goes on to keep everything dry. It is see-through here so you can keep looking inside.")
B.dgM=w([B.eGE,B.eJv,B.eyd,B.eEU,B.eFW,B.eyE,B.ezV],x.L)
B.dvJ=new A.i8(-100,100,24,90)
B.dvO=new A.i8(-134,-110,100,190)
B.dvy=new A.i8(110,134,100,190)
B.dgQ=w([B.dvJ,B.dvO,B.dvy],x.T)
B.eHg=new C.z(-17,-9)
B.ep0=new C.z(17,-9)
B.eHf=new C.z(-17,9)
B.ep_=new C.z(17,9)
B.dhn=w([B.eHg,B.ep0,B.eHf,B.ep_],x.f)
B.dht=w([-100,0,100],x.n)
B.dhu=w([-110,-80,80,110],x.n)
B.a3Z=w([-14,14],x.n)
B.dhw=w([-150,150],x.n)
B.dhx=w([-178,178],x.n)
B.dhz=w([-18,18],x.n)
B.ayR=w([-20,0,20],x.n)
B.dhB=w([-21,21],x.n)
B.a40=w([-26,26],x.n)
B.dhC=w([-27,27],x.n)
B.eYW=new A.rG("can","\ud83d\udee2","Gas can","Half a tank of gas",8,0,0.5,0,!1)
B.aOX=new A.rG("tank","\u26fd","Fill the tank","A full tank",12,0,1,0,!1)
B.dhD=w([B.eYW,B.aOX],x.y)
B.dhF=w([-30,-10,10,30],x.n)
B.dhG=w([-32,32],x.n)
B.dhH=w([-32,-8,34],x.n)
B.ayS=w([-34,34],x.n)
B.dhI=w([-3,3],x.n)
B.dhJ=w([-47,47],x.n)
B.dhK=w([-48,48],x.n)
B.dhL=w([-52,52],x.n)
B.ayU=w([-55,55],x.n)
B.dhN=w([-600,0,600],x.n)
B.dhO=w([-600,600],x.n)
B.dhP=w([-70,70],x.n)
B.oj=w([-72,-24,24],x.t)
B.ayV=w([-80,80],x.n)
B.dhR=w([-900,-300,300,900],x.n)
B.dhS=w([-90,0,90],x.n)
B.dhT=w([-90,-52,52,90],x.n)
B.ayY=w([-9,9],x.n)
B.di4=w(["switch2p","switch3","switch4","switchsmart","switchcombo"],x.s)
B.dib=w(["medicine","food"],x.s)
B.din=w([y.O,y.x,y.R,"The first traveler from the FIRST three-way goes on a top screw (IN).","The second traveler from the FIRST three-way goes on the other top screw (IN).","The first traveler to the SECOND three-way goes on a bottom screw (OUT).","The second traveler to the SECOND three-way goes on the other bottom screw (OUT).",y.b,y.n],x.s)
B.fWG=new A.r(8.2,5,-7.85)
B.h13=new A.r(8.2,1.2,-7.85)
B.h37=new A.r(8.2,1,-7.4)
B.djv=w([B.fWG,B.h13,B.h37],x.o)
B.h7P=new A.ju("common","Black \xb7 COMMON (power in or to the light)",B.tG,D.c,"hot")
B.h7N=new A.ju("trav1","Red \xb7 traveler 1",B.AK,D.c,"hot")
B.h8_=new A.ju("trav2","White taped black \xb7 traveler 2",B.oI,D.av,"hot")
B.djw=w([B.t7,B.h7P,B.h7N,B.h8_],x.d)
B.a48=w(["rug","road","roundabout","roadturn","roadtee","roadcross","pond","flowers"],x.s)
B.djJ=w(["human","soldier","michelle","xbot","human"],x.s)
B.eH4=new C.z(-1050,"hospital")
B.eHF=new C.z(-630,"store")
B.eHx=new C.z(-420,"tower")
B.eov=new C.z(0,"tower")
B.eqB=new C.z(420,"tower")
B.esH=new C.z(630,"store")
B.eoK=new C.z(1050,"hospital")
B.djN=w([B.eH4,B.aNA,B.eHF,B.eHx,B.aNz,B.eov,B.aNo,B.eqB,B.esH,B.aNq,B.eoK],x.d6)
B.elE=new A.EW(61,"Hot shut-off valve (left)",B.a7F,"Hot is always on the LEFT. The red hose goes on the left valve.")
B.e9C={cold:0}
B.aOS=new C.dD(B.e9C,1,x.M)
B.elF=new A.EW(62,"Cold shut-off valve (right)",B.aOS,"Cold is always on the RIGHT. The blue hose goes on the right valve.")
B.elC=new A.EW(63,"Hot faucet inlet (left)",B.a7F,"The left faucet inlet takes the hot (red) hose.")
B.elD=new A.EW(64,"Cold faucet inlet (right)",B.aOS,"The right faucet inlet takes the cold (blue) hose.")
B.a49=w([B.elE,B.elF,B.elC,B.elD],C.ax("O<EW>"))
B.a4b=w([-72,-48,-24,0,24],x.t)
B.dkT=w(["1 Rough-in","2 Drywall","3 Devices"],x.s)
B.dw1=new A.i8(-90,10,130,160)
B.dvV=new A.i8(-50,50,70,100)
B.dvP=new A.i8(-134,-110,20,70)
B.dlm=w([B.dw1,B.dvV,B.dvP],x.T)
B.Rb=w(["road","roadturn","roadtee","roadcross"],x.s)
B.bG8=new A.fG(21,"Brass screw (top): HOT side",B.J4,y.r,!1,"hot")
B.bGh=new A.fG(22,"Brass screw (bottom): HOT side",B.J4,y.r,!1,"hot")
B.bGc=new A.fG(23,"Silver screw (top): NEUTRAL side",B.J0,y.Q,!1,"neutral")
B.bG2=new A.fG(24,"Silver screw (bottom): NEUTRAL side",B.J0,y.Q,!1,"neutral")
B.bG9=new A.fG(25,"Green screw: GROUND",B.J1,"The green screw is for the bare copper or green GROUND wire.",!1,"ground")
B.dlx=w([B.bG8,B.bGh,B.bGc,B.bG2,B.bG9],x.r)
B.dlC=w([y.O,y.x,y.R,"Fasten the black hot to one HOT brass screw.","Fasten the red hot to the other HOT brass screw. There is no neutral and no silver screw in use.",y.b,y.n],x.s)
B.eHM=new C.z(-700,225)
B.eHc=new C.z(-120,160)
B.eoU=new C.z(120,160)
B.et6=new C.z(720,225)
B.dlS=w([B.eHM,B.eHc,B.eoU,B.et6],x.f)
B.eNN=new C.bj("hot","Hot hose (red)",B.tz)
B.eOt=new C.bj("cold","Cold hose (blue)",B.nV)
B.dlT=w([B.eNN,B.eOt],C.ax("O<+(n,n,u)>"))
B.eqb=new C.z(34,40)
B.haz=new A.Ar(B.eqb,3.141592653589793,2.6,"Washing hands at the sink",!1,!1,!1,"")
B.dlV=w([B.haz],x.h)
B.aZG=new A.H7("NGMY navy",E.jH,E.Lg,D.c,F.fu)
B.aZL=new A.H7("Purple",D.oN,D.dD,D.c,D.bM)
B.aZJ=new A.H7("Green",D.h0,D.bP,D.c,D.lS)
B.aZH=new A.H7("Sunset",D.el,D.aE,D.c,D.ik)
B.aZI=new A.H7("Night",D.M,D.aJ,D.b1,D.c7)
B.aZK=new A.H7("Light",D.c,D.nP,E.jH,D.dV)
B.a4e=w([B.aZG,B.aZL,B.aZJ,B.aZH,B.aZI,B.aZK],C.ax("O<H7>"))
B.a9R=new A.r(15,2.6,0)
B.a4f=w([B.aVC,B.a9R],x.o)
B.dmb=w([B.t7,B.K7,B.a9X,B.a9Y],x.d)
B.b49=new C.ac(0,D.G,D.aW,D.J,24)
B.dmc=w([B.b49],x.V)
B.dmq=w(["tail","trap","arm"],x.s)
B.dmy=w([!0,!0,!0,!0],x.u)
B.HD=w(["tv","lamp","toaster","hairdryer"],x.s)
B.aad=new A.iV("look","Look",D.fi)
B.hbb=new A.iV("wall","Wall box",N.amc)
B.hb9=new A.iV("ceiling","Ceiling box",D.rg)
B.hbo=new A.iV("fanbox","Fan box",M.NQ)
B.hbx=new A.iV("drill","Drill",D.yy)
B.hbp=new A.iV("cable","Cable roll",E.am2)
B.ddN=w([B.aad,B.hbb,B.hb9,B.hbo,B.hbx,B.hbp],x.I)
B.hbv=new A.iV("sheet","Drywall sheet",D.Cd)
B.hbf=new A.iV("knife","Drywall saw",D.Gm)
B.hbd=new A.iV("screw","Screw gun",A1.Gw)
B.hbz=new A.iV("tape","Tape",D.ue)
B.hbt=new A.iV("mud","Mud",Ad.a0O)
B.hbE=new A.iV("sand","Sander",D.Gk)
B.bLy=new C.a1(985109,"MaterialIcons",!1)
B.hbj=new A.iV("paint","Roller",B.bLy)
B.dac=w([B.aad,B.hbv,B.hbf,B.hbd,B.hbz,B.hbt,B.hbE,B.hbj],x.I)
B.Og=new C.a1(983223,"MaterialIcons",!1)
B.hbA=new A.iV("outlet","Outlet",B.Og)
B.hbh=new A.iV("gfci","GFCI",D.uk)
B.hby=new A.iV("switch","Switch",E.um)
B.hbc=new A.iV("split","Split outlet",B.Og)
B.hbC=new A.iV("v240four","240 V 4-wire",T.BX)
B.hba=new A.iV("v240three","240 V 3-wire",T.BX)
B.hbm=new A.iV("v240only","240 V only",T.BX)
B.hbe=new A.iV("isolated","Isolated ground",B.Og)
B.hbu=new A.iV("switch2p","Double-pole",E.um)
B.hbw=new A.iV("switch3","3-way switch",E.um)
B.hbn=new A.iV("switch4","4-way switch",E.um)
B.hbl=new A.iV("switchsmart","Smart switch",E.um)
B.hb8=new A.iV("switchcombo","Double switch",E.um)
B.hbs=new A.iV("light","Light",D.rj)
B.bLw=new C.a1(985094,"MaterialIcons",!1)
B.hbk=new A.iV("fan","Fan",B.bLw)
B.hbr=new A.iV("tv","TV",V.a1j)
B.bJS=new C.a1(63571,"MaterialIcons",!1)
B.hbi=new A.iV("lamp","Lamp",B.bJS)
B.bIG=new C.a1(62944,"MaterialIcons",!1)
B.hbg=new A.iV("toaster","Toaster",B.bIG)
B.bJf=new C.a1(63209,"MaterialIcons",!1)
B.hbD=new A.iV("hairdryer","Hair dryer",B.bJf)
B.hbB=new A.iV("flip","Flip switch",E.um)
B.hbq=new A.iV("tester","Voltage tester",D.ub)
B.d3G=w([B.aad,B.hbA,B.hbh,B.hby,B.hbc,B.hbC,B.hba,B.hbm,B.hbe,B.hbu,B.hbw,B.hbn,B.hbl,B.hb8,B.hbs,B.hbk,B.hbr,B.hbi,B.hbg,B.hbD,B.hbB,B.hbq],x.I)
B.dmE=w([B.ddN,B.dac,B.d3G],C.ax("O<ai<iV>>"))
B.dmS=w([B.t7,B.a9X,B.a9Y],x.d)
B.bp1=new C.u(1,0.1843137254901961,0.30980392156862746,0.30980392156862746,D.q)
B.bmu=new C.u(1,0.3568627450980392,0.4196078431372549,0.5490196078431373,D.q)
B.dmT=w([B.WJ,D.br,B.bp1,B.bmu,D.bl,D.aJ],x.O)
B.dmZ=w([D.bD,D.bP,D.c9,D.ca,D.vw,D.cC],x.O)
B.dn0=w([-400,400,-900,900,-1400,1400],x.n)
B.dn1=w([D.aw,D.bI,D.be,D.d0],x.O)
B.dnc=w([y.O,"Hold the fixture up to the ceiling box. It has three short wires: black, white and green.","Join the house ground wire to the fixture ground.","Join the house white wire to the fixture white wire with a wire nut.","Join the house black wire to the fixture black wire with a wire nut.","Push the wires into the box and fasten the fixture to the ceiling.",y.f],x.s)
B.dw0=new A.i8(-70,70,28,52)
B.dvS=new A.i8(-134,-96,100,170)
B.dvI=new A.i8(96,134,100,170)
B.dnk=w([B.dw0,B.dvS,B.dvI],x.T)
B.dnl=w([30,60,120,180,300],x.t)
B.eHj=new C.z(-210,60)
B.epB=new C.z(210,90)
B.eHp=new C.z(-330,120)
B.eq8=new C.z(330,60)
B.eH8=new C.z(-110,330)
B.eoQ=new C.z(110,330)
B.eHD=new C.z(-560,640)
B.esn=new C.z(560,640)
B.eHv=new C.z(-420,1100)
B.eqz=new C.z(420,1100)
B.dns=w([B.eHj,B.epB,B.eHp,B.eq8,B.eH8,B.eoQ,B.eHD,B.esn,B.eHv,B.eqz],x.f)
B.bZ4=new A.jF("Breaker off, then test","Before you touch any wire, switch its breaker OFF, then check with a voltage tester that the wire is dead. A switch on the wall is not enough.")
B.bYS=new A.jF("Lock out, tag out","On a real job you put a lock or a note on the panel so nobody switches the power back on while you work.")
B.bZb=new A.jF("Water and power","Water carries electricity. Near sinks, tubs and outdoors the outlets must be GFCI, and wet hands never touch wires.")
B.bYX=new A.jF("Eyes, ears, lungs","Safety glasses for drilling and cutting, ear protection for loud tools, and a mask when you sand drywall dust or cut tile.")
B.bZa=new A.jF("Shut the water off","Before you cut or loosen a pipe, close the main water valve and open a faucet to drain the line.")
B.dgf=w([B.bZ4,B.bYS,B.bZb,B.bYX,B.bZa],x.Z)
B.bZn=new A.MO("Safety first","\ud83e\uddba",D.cs,B.dgf)
B.bZc=new A.jF("Wire colours","Black is hot (it carries the power), white is neutral (the way back), bare copper or green is ground (the safety path). Red is a second hot, often used for a switched line.")
B.bZj=new A.jF("Screw colours","On an outlet the brass screw takes the hot wire, the silver screw takes the neutral and the green screw takes the ground.")
B.bZ6=new A.jF("Wire size","14 gauge wire is for 15 amp circuits (lights and outlets). 12 gauge is for 20 amp circuits (kitchens). A thinner wire than the breaker allows can overheat and start a fire.")
B.bZ0=new A.jF("Breakers","A breaker is a safety switch. It trips when a circuit carries too much current, so the wires never get hot enough to burn.")
B.bZe=new A.jF("Wire nuts","Strip about 3/4 inch, twist the bare ends together clockwise, and screw on the nut until no bare copper shows. Give each wire a gentle tug.")
B.bZk=new A.jF("Switches","A switch cuts the hot wire only. The neutral goes straight through to the light.")
B.bZl=new A.jF("GFCI","A GFCI outlet watches the current going out and coming back. If a little leaks (through water or a person) it cuts the power in a fraction of a second.")
B.bYU=new A.jF("Ceiling fans","A fan shakes and is heavy. It needs a box that says fan rated, fixed to the joist, not a plain light box.")
B.bYW=new A.jF("Heights","Outlets sit about 16 inches from the floor. Switches sit about 48 inches up, where your hand falls.")
B.d8C=w([B.bZc,B.bZj,B.bZ6,B.bZ0,B.bZe,B.bZk,B.bZl,B.bYU,B.bYW],x.Z)
B.bZq=new A.MO("Wiring basics","\u26a1",D.bI,B.d8C)
B.bYT=new A.jF("Hot left, cold right","On a faucet, hot is on the left and cold on the right. Hot lines are marked red and cold lines blue.")
B.bZ5=new A.jF("The P-trap","The curved pipe under a sink always holds a little water. That water seal stops sewer gas coming up the drain.")
B.bZg=new A.jF("Shut-off valves","Every sink and toilet has its own small valve, so you can stop the water to one fixture without turning off the whole house.")
B.bYZ=new A.jF("Slip nuts","Drain joints are sealed by a washer and a slip nut. Tighten by hand and a quarter turn: too much force cracks plastic.")
B.bYY=new A.jF("Wax ring","A toilet sits on a wax ring that seals it to the floor drain. A toilet is lowered straight down once, and cannot be slid around.")
B.bZd=new A.jF("Drain slope","Drains fall about 1/4 inch per foot so water and waste keep moving. Too flat and it clogs, too steep and the water leaves the solids behind.")
B.bZi=new A.jF("Order of work","Plumbing goes from the top down on the drain (tailpiece, trap, arm) and from the wall out on the supply (valve, hose, fixture).")
B.cga=w([B.bYT,B.bZ5,B.bZg,B.bYZ,B.bYY,B.bZd,B.bZi],x.Z)
B.bZo=new A.MO("Plumbing basics","\ud83d\udeb0",D.co,B.cga)
B.bYV=new A.jF("Studs","Studs are the vertical 2x4 posts inside a wall, 16 inches apart from centre to centre. Everything is fixed to them.")
B.bZ8=new A.jF("Drilling studs","Holes for cable go through the middle of the stud, so a nail or screw cannot reach the wire.")
B.bZ_=new A.jF("Drywall","A sheet is 4 feet wide, so its edges land on studs 48 inches apart. Screws go into studs only, just under the paper.")
B.bZ2=new A.jF("Taping and mud","Seams get paper tape and three thin coats of joint compound, sanded smooth between coats, then primer and paint.")
B.bZh=new A.jF("Order of a build","Frame, run the pipes and wires (rough-in), inspect, hang drywall, finish it, paint, then fit the fixtures and devices.")
B.cUM=w([B.bYV,B.bZ8,B.bZ_,B.bZ2,B.bZh],x.Z)
B.bZm=new A.MO("Framing and walls","\ud83c\udfe0",D.dV,B.cUM)
B.bZ3=new A.jF("Voltage tester","A pen that glows or beeps near live wires. Test it on a known live outlet first, so you know it works.")
B.bZ9=new A.jF("Wire strippers","Strip the plastic off without nicking the copper. A nick weakens the wire.")
B.bZf=new A.jF("Adjustable wrench","For nuts on valves and hoses. Hold the fitting steady with a second wrench so you do not twist the pipe.")
B.bZ7=new A.jF("Drill and screw gun","A drill makes holes through studs. A screw gun sets drywall screws to the right depth.")
B.bZ1=new A.jF("Level and tape measure","Measure twice, cut once. A level makes sure outlets, shelves and pipes are straight.")
B.doz=w([B.bZ3,B.bZ9,B.bZf,B.bZ7,B.bZ1],x.Z)
B.bZp=new A.MO("Tools","\ud83e\uddf0",D.bu,B.doz)
B.do9=w([B.bZn,B.bZq,B.bZo,B.bZm,B.bZp],C.ax("O<MO>"))
B.doc=w([y.O,"There is no separate ground wire here: the neutral also grounds the frame of the old appliance. This is only allowed in old installations.",y.N,y.E,y.k,y.b,y.n],x.s)
B.bdk=new C.u(1,0.48627450980392156,0.22745098039215686,0.22745098039215686,D.q)
B.bkI=new C.u(1,0.24705882352941178,0.4196078431372549,0.30980392156862746,D.q)
B.bj6=new C.u(1,0.4196078431372549,0.30980392156862746,0.48627450980392156,D.q)
B.bg6=new C.u(1,0.47843137254901963,0.41568627450980394,0.23137254901960785,D.q)
B.dog=w([B.WJ,B.bdk,B.bkI,B.bj6,B.bg6],x.O)
B.dos=w(["Cream","Sky","Blush","Mint","Butter","Periwinkle","White","Slate"],x.s)
B.h7R=new A.ju("in1","Red \xb7 traveler in 1 (from the first 3-way)",B.AK,D.c,"hot")
B.h7X=new A.ju("in2","White taped red \xb7 traveler in 2",B.oI,D.av,"hot")
B.add=new C.u(1,0.6901960784313725,0.22745098039215686,0.16862745098039217,D.q)
B.h7O=new A.ju("out1","Red \xb7 traveler out 1 (to the second 3-way)",B.add,D.c,"hot")
B.h81=new A.ju("out2","White taped red \xb7 traveler out 2",D.bO,D.av,"hot")
B.dov=w([B.t7,B.h7R,B.h7X,B.h7O,B.h81],x.d)
B.eHP=new C.z(-760,330)
B.et7=new C.z(760,330)
B.eHz=new C.z(-450,1080)
B.erO=new C.z(450,1080)
B.doy=w([B.eHP,B.et7,B.eHz,B.erO],x.f)
B.doF=w([0.72,-0.72],x.n)
B.h7Z=new A.ju("hot","Black \xb7 hot",B.tG,D.c,"hot")
B.XS=new C.u(1,0.1843137254901961,0.6352941176470588,0.30980392156862746,D.q)
B.h7U=new A.ju("isoground","Green with yellow stripe \xb7 isolated ground",B.XS,D.c,"ground")
B.doP=w([B.K7,B.h7Z,B.h7U],x.d)
B.dp_=w([B.akW,B.akV,B.akT],x.r)
B.euH=new C.z("outlet","\ud83d\udd0c Outlet")
B.eIB=new C.z("gfci","\ud83d\udee1\ufe0f GFCI outlet")
B.eEg=new C.z("switch","\ud83d\udca1 Light switch")
B.dp0=w([B.euH,B.eIB,B.eEg],x.L)
B.dpa=w(["inspect","hand","screwdriver","pliers","wrench","crimper","plunger","flapper","newoutlet","patch"],x.s)
B.hjf=new A.pv(0,0,70,26)
B.hjr=new A.pv(1,-100,110,24)
B.hjt=new A.pv(2,105,100,26)
B.dpH=w([B.hjf,B.hjr,B.hjt],x.X)
B.h7V=new A.ju("lineA","Black \xb7 hot leg 1 (from the panel)",B.tG,D.c,"hot")
B.h80=new A.ju("lineB","Red \xb7 hot leg 2 (from the panel)",B.AK,D.c,"hot")
B.h87=new A.ju("loadA","Black \xb7 hot leg 1 (to the heater)",B.LD,D.c,"hot")
B.h7T=new A.ju("loadB","Red \xb7 hot leg 2 (to the heater)",B.add,D.c,"hot")
B.dq2=w([B.t7,B.h7V,B.h80,B.h87,B.h7T],x.d)
B.dq8=w(["Maya","Kofi","Amara","Tunde","Zawadi"],x.s)
B.dqb=w(["Look under the sink. The wall has two shut-off valves: hot on the LEFT (red handle) and cold on the RIGHT (blue handle).","Pick the red hot hose. Tap the left shut-off valve, then the left faucet inlet.","Pick the blue cold hose. Tap the right shut-off valve, then the right faucet inlet.","Open the valves slowly and turn on the faucet. Check every connection for drips."],x.s)
B.e9O={flange:0,wax:1,toilet:2,bolts:3,valve:4,hosehot:5,hosecold:6,faucet:7,tail:8,trap:9,arm:10}
B.aEN=new C.bu(B.e9O,["Flange","Wax ring","Toilet","Bolts","Shut-off valve","Hot hose","Cold hose","Faucet","Tailpiece","P-trap","Trap arm"],x.l)
B.dsw=new C.dv([25,"ground",23,"lineA",21,"lineB",24,"loadA",22,"loadB"],x.v)
B.dsx=new C.dv([25,"ground",23,"in1",21,"in2",24,"out1",22,"out2"],x.v)
B.e9i={xbot:0,michelle:1,soldier:2}
B.a4K=new C.bu(B.e9i,["assets/avatars/Xbot.glb","assets/avatars/Michelle.glb","assets/avatars/Soldier.glb"],x.l)
B.e8t={highway:0,tower:1,neon:2,roof:3,screen:4,gate:5}
B.aNm=new C.z(0,!1)
B.epk=new C.z(1,!1)
B.eqo=new C.z(3,!1)
B.epV=new C.z(2,!0)
B.epm=new C.z(1,!0)
B.eqp=new C.z(3,!0)
B.dsI=new C.bu(B.e8t,[B.aNm,B.epk,B.eqo,B.epV,B.epm,B.eqp],C.ax("bu<n,+(H,R)>"))
B.dsN=new C.dv([25,"ground",23,"neutral",21,"hot1",22,"hot2"],x.v)
B.dsO=new C.dv([25,"ground",23,"common",21,"trav1",22,"trav2"],x.v)
B.dsP=new C.dv([25,"ground",23,"neutral",21,"line",22,"load"],x.v)
B.dsQ=new C.dv([25,"ground",23,"neutral",21,"switched",22,"always"],x.v)
B.dt2=new C.dv([25,"ground",21,"hot1",22,"hot2"],x.v)
B.e9e={bed:0,nightstand:1,wardrobe:2,desk:3,rug:4,sofa:5,armchair:6,coffee:7,tvstand:8,dining:9,chair:10,plant:11,lamp:12,console:13,shelf:14,tree:15,pine:16,bush:17,flowers:18,fence:19,lamppost:20,bench:21,car:22,road:23,roundabout:24,roadturn:25,roadtee:26,roadcross:27,house2:28,bighouse:29,pole:30,crate:31,billboard:32,tower:33,hq:34,store:35,gasstation:36,dmv:37,ubstation:38,townsign:39,cornersign:40,adboard:41,shop:42,hospital:43,firestation:44,school:45,firetruck:46,ambulance:47,dog:48,cat:49,cow:50,sheep:51,chicken:52,horse:53,pond:54,swing:55,shed:56,doghouse:57}
B.bF5=new A.fn("Bed","\ud83d\udecf\ufe0f",48,64)
B.bFh=new A.fn("Night table","\ud83e\ude91",13,13)
B.bEP=new A.fn("Wardrobe","\ud83d\udeaa",35,16)
B.bF0=new A.fn("Desk","\ud83d\udda5\ufe0f",38,19)
B.bEQ=new A.fn("Rug","\ud83d\udfe5",56,40)
B.bEL=new A.fn("Sofa","\ud83d\udecb\ufe0f",64,26)
B.bF9=new A.fn("Armchair","\ud83d\udcba",24,24)
B.bFo=new A.fn("Coffee table","\u2615",32,19)
B.bEN=new A.fn("Media cabinet","\ud83d\uddc4\ufe0f",45,14)
B.bFm=new A.fn("Dining table","\ud83c\udf7d\ufe0f",45,29)
B.bFg=new A.fn("Chair","\ud83e\ude91",14,14)
B.bFn=new A.fn("Plant","\ud83e\udeb4",14,14)
B.bFi=new A.fn("Floor lamp","\ud83d\udca1",10,10)
B.bF6=new A.fn("Console table","\ud83d\uddc4\ufe0f",35,11)
B.bFf=new A.fn("Bookshelf","\ud83d\udcda",29,10)
B.bFs=new A.fn("Tree","\ud83c\udf33",36,36)
B.bF3=new A.fn("Pine tree","\ud83c\udf32",30,30)
B.bEK=new A.fn("Bush","\ud83c\udf3f",18,18)
B.bFc=new A.fn("Flowers","\ud83c\udf37",22,22)
B.bED=new A.fn("Fence","\ud83d\udea7",64,6)
B.bER=new A.fn("Street lamp","\ud83c\udfee",8,8)
B.bF8=new A.fn("Bench","\ud83e\ude91",44,16)
B.bEE=new A.fn("Car","\ud83d\ude97",84,40)
B.bF_=new A.fn("Road","\ud83d\udee3\ufe0f",40,40)
B.bFt=new A.fn("Roundabout","\ud83d\udd04",80,80)
B.bEJ=new A.fn("Road corner","\u21aa\ufe0f",40,40)
B.bFv=new A.fn("Road T-junction","\u22a4",40,40)
B.bF1=new A.fn("Crossroads","\u271a",40,40)
B.bEM=new A.fn("House","\ud83c\udfe0",108,90)
B.bF4=new A.fn("Big house","\ud83c\udfe2",158,120)
B.bEF=new A.fn("Electric pole","\ud83d\udd0c",10,10)
B.bEZ=new A.fn("Crate","\ud83d\udce6",28,28)
B.bFr=new A.fn("Billboard","\ud83e\udea7",72,10)
B.bEI=new A.fn("Office tower","\ud83c\udfe2",100,70)
B.bEU=new A.fn("NGMY company","\ud83c\udfdb\ufe0f",170,90)
B.bET=new A.fn("NGMY store","\ud83c\udfec",130,80)
B.bFu=new A.fn("NGMY gas station","\u26fd",150,90)
B.bFe=new A.fn("NGMY licence office","\ud83e\udeaa",130,80)
B.bEW=new A.fn("NGMY Uber","\ud83d\ude96",120,60)
B.bEG=new A.fn("NGMY Town sign","\ud83e\udea7",380,14)
B.bFa=new A.fn("NGMY Town billboard","\ud83e\udea7",150,10)
B.bEY=new A.fn("NGMY ad billboard","\ud83d\udcfa",330,14)
B.bF2=new A.fn("Shop","\ud83c\udfea",126,90)
B.bEV=new A.fn("Hospital","\ud83c\udfe5",165,105)
B.bEC=new A.fn("Fire station","\ud83d\ude92",135,96)
B.bFd=new A.fn("School","\ud83c\udfeb",186,105)
B.bFl=new A.fn("Fire truck","\ud83d\ude92",96,40)
B.bF7=new A.fn("Ambulance","\ud83d\ude91",84,40)
B.bES=new A.fn("Dog","\ud83d\udc15",22,10)
B.bEX=new A.fn("Cat","\ud83d\udc08",16,8)
B.bFj=new A.fn("Cow","\ud83d\udc04",38,16)
B.bEO=new A.fn("Sheep","\ud83d\udc11",26,14)
B.bFk=new A.fn("Chicken","\ud83d\udc14",12,8)
B.bEH=new A.fn("Horse","\ud83d\udc0e",46,16)
B.bFp=new A.fn("Pond","\ud83d\udca7",80,56)
B.bFb=new A.fn("Swing set","\ud83c\udfa0",56,40)
B.bFq=new A.fn("Shed","\ud83d\uded6",50,42)
B.bFw=new A.fn("Dog house","\ud83d\udc15",24,22)
B.hr=new C.bu(B.e9e,[B.bF5,B.bFh,B.bEP,B.bF0,B.bEQ,B.bEL,B.bF9,B.bFo,B.bEN,B.bFm,B.bFg,B.bFn,B.bFi,B.bF6,B.bFf,B.bFs,B.bF3,B.bEK,B.bFc,B.bED,B.bER,B.bF8,B.bEE,B.bF_,B.bFt,B.bEJ,B.bFv,B.bF1,B.bEM,B.bF4,B.bEF,B.bEZ,B.bFr,B.bEI,B.bEU,B.bET,B.bFu,B.bFe,B.bEW,B.bEG,B.bFa,B.bEY,B.bF2,B.bEV,B.bEC,B.bFd,B.bFl,B.bF7,B.bES,B.bEX,B.bFj,B.bEO,B.bFk,B.bEH,B.bFp,B.bFb,B.bFq,B.bFw],C.ax("bu<n,fn>"))
B.dtU=new C.dv([25,"isoground",23,"neutral",21,"hot"],x.v)
B.e8B={outlet:0,switch:1,light:2,fan:3,gfci:4}
B.d45=w(["Silver","Brass","Green"],x.s)
B.f7A=new A.v1("On a standard receptacle, which terminal does the hot wire go on?",B.d45,1,"Brass is the hot side. Silver is neutral and green is the ground.")
B.cGd=w(["Yes, it works","No: reversed polarity leaves live parts that should be dead","Yes if there is a ground"],x.s)
B.f7y=new A.v1("The outlet works with hot and neutral swapped. Is it safe?",B.cGd,1,"Working is not the same as safe. Reversed polarity energizes the wrong parts.")
B.cYT=w(["Yes","No, never","Only in old houses"],x.s)
B.f7u=new A.v1("May the neutral be used as the equipment ground?",B.cYT,1,"The ground is a separate safety path. The neutral carries current in normal use.")
B.d9a=w([B.f7A,B.f7y,B.f7u],x.W)
B.c2P=w(["The hot to the light","The neutral","The ground"],x.s)
B.f7B=new A.v1("A single-pole switch opens and closes which conductor?",B.c2P,0,"The switch breaks the hot conductor to the load.")
B.cWE=w(["Yes","No, never","If the wire is thick"],x.s)
B.f7C=new A.v1("May the ground wire be used to carry current to the light?",B.cWE,1,"The equipment ground is only for safety.")
B.d32=w(["Yes","No: never assume it does","Only new houses"],x.s)
B.f7v=new A.v1("Does every switch box have a neutral?",B.d32,1,"Many switch boxes have no neutral. Smart switches need to be chosen for that.")
B.dod=w([B.f7B,B.f7C,B.f7v],x.W)
B.dg2=w(["Yes","No: the wires, the ground and the support must be right","Only with a switch"],x.s)
B.f7z=new A.v1("Does a light that turns on prove the fixture is wired safely?",B.dg2,1,"A fixture can light up with an unsafe connection.")
B.df5=w(["Its wires","A box or mount rated for its weight","Tape"],x.s)
B.f7D=new A.v1("A fixture must hang from:",B.df5,1,"The box carries the weight. The wires never do.")
B.d3s=w([B.f7z,B.f7D],x.W)
B.d4u=w(["Any ceiling box","Rated for a fan","Plastic only"],x.s)
B.f7x=new A.v1("A ceiling fan needs a box that is:",B.d4u,1,"A fan shakes and is heavy. A plain light box can let it fall.")
B.diY=w(["Yes","No: support, ground and wiring must all be right","Yes if it is quiet"],x.s)
B.f7w=new A.v1("The fan spins. Is the installation safe?",B.diY,1,"A spinning fan says nothing about the box, the ground or the connections.")
B.d3L=w([B.f7x,B.f7w],x.W)
B.d_w=w(["LINE","LOAD","Either"],x.s)
B.f7t=new A.v1("On a GFCI, power from the breaker goes on:",B.d_w,0,"LINE is the supply. LOAD feeds outlets further down the line.")
B.cKW=w([B.f7t],x.W)
B.aF0=new C.bu(B.e8B,[B.d9a,B.dod,B.d3s,B.d3L,B.cKW],C.ax("bu<n,ai<v1>>"))
B.e9d={house2:0,bighouse:1,shop:2,billboard:3,crate:4,car:5,tree:6,bench:7,tower:8,hq:9,store:10,gasstation:11,cornersign:12}
B.dtX=new C.bu(B.e9d,[40,80,70,15,4,25,5,4,120,200,90,90,30],C.ax("bu<n,H>"))
B.bDQ=new A.um("The living room has no power at all.","The living room breaker is sitting in the middle (orange). It has tripped. Flip it fully OFF and ON again, by hand.","hand","Breaker reset. The living room has power again.",72,0,"")
B.bE_=new A.um("There is no hot water.","The water heater breaker has tripped (orange). Reset it by hand.","hand","Breaker reset. The water heater is heating again.",75,0,"")
B.bDX=new A.um("Water is dripping under the kitchen sink.","The slip nut on the P-trap is loose and the joint drips. Tighten it with the wrench.","wrench","Slip nut tightened. The drip stopped.",87,0,"")
B.bDP=new A.um("There is a wet spot on the wall behind the kitchen.","A crimped joint in the hot water line is leaking. A crimp joint is squeezed with a crimping tool, not tightened with a wrench.","crimper","The joint is crimped again and it does not leak.",96,0,"")
B.bDU=new A.um("The outlet by the sofa does not work, but the lights do.","The tester finds power at the box but the outlet is dead: a screw on the outlet has come loose. Turn the breaker off first, then tighten the screws with the screwdriver.","screwdriver","You tightened the loose screw. The outlet works again.",81,72,"Turn the living room breaker OFF first.")
B.bDR=new A.um("The living room light flickers.","A wire nut in the light box has worked loose. Turn the breaker off, then twist the wire nut tight with the pliers.","pliers","You twisted the wire nut tight. The light is steady.",83,72,"Turn the living room breaker OFF first.")
B.bDS=new A.um("The kitchen outlet sparks and smells burnt.","The outlet has burnt. Turn the breaker off and replace it with a new outlet.","newoutlet","New outlet fitted. No more sparks.",84,73,"Turn the kitchen breaker OFF first.")
B.bDY=new A.um("The kitchen outlets are dead.","The GFCI outlet has tripped. Press its RESET button by hand.","hand","You pressed RESET. The kitchen outlets work.",84,0,"")
B.bDT=new A.um("The toilet keeps running.","The rubber flapper in the tank no longer seals, so water leaks into the bowl all the time. Replace the flapper.","flapper","New flapper fitted. The toilet stops running.",88,0,"")
B.bDW=new A.um("The kitchen faucet drips.","The faucet washer is worn. Tighten the packing nut with the wrench, then check.","wrench","The faucet is sealed. No more drips.",85,0,"")
B.bDV=new A.um("There is a hole in the wall.","A hole in the drywall. Stick a drywall patch over it, then tape, mud, sand and paint it.","patch","Patch fitted. Now it only needs mud, sanding and paint.",95,0,"")
B.bDZ=new A.um("The kitchen sink drains very slowly.","The drain is clogged. Use the plunger.","plunger","The clog is gone. The sink drains fast.",94,0,"")
B.wt=new C.dv([B.a_D,B.bDQ,B.a_E,B.bE_,B.Nk,B.bDX,B.Nl,B.bDP,B.akD,B.bDU,B.a_H,B.bDR,B.a_I,B.bDS,B.a_J,B.bDY,B.a_K,B.bDT,B.a_L,B.bDW,B.a_F,B.bDV,B.a_G,B.bDZ],C.ax("dv<rb,um>"))
B.eaJ={duo:0,line3:1,far3:2,skyline:3,lines6:4}
B.eya=new C.z(D.a25,0)
B.eL9=new C.z(Y.aq3,1)
B.cnm=w([2,0,1],x.t)
B.et8=new C.z(B.cnm,2)
B.c2T=w([0,1,2,3],x.t)
B.eKe=new C.z(B.c2T,0)
B.dh5=w([0,1,2,5,4,3],x.t)
B.eBc=new C.z(B.dh5,1)
B.duc=new C.bu(B.eaJ,[B.eya,B.eL9,B.et8,B.eKe,B.eBc],C.ax("bu<n,+(ai<H>,H)>"))
B.ead={michelle:0}
B.dud=new C.bu(B.ead,[0.55],x.e)
B.RD=new C.bu(D.hX,[],C.ax("bu<H,cW>"))
B.HW=new C.bu(D.hX,[],C.ax("bu<H,n>"))
B.dus=new C.dv([23,"neutral",21,"hot1",22,"hot2"],x.v)
B.duu=new C.dv([25,"ground",21,"feed",22,"loadA",24,"loadB"],x.v)
B.e9M={tail:0,trap:1,arm:2}
B.duw=new C.bu(B.e9M,["Tailpiece","P-trap","Trap arm"],x.l)
B.aHD={xbot:0,michelle:1,soldier:2,human:3}
B.aFe=new C.bu(B.aHD,["\ud83e\udd16 X Bot","\ud83d\udc83 Dancer","\ud83e\ude96 Soldier","\ud83d\ude42 Person"],x.l)
B.adK=new C.u(1,0.9137254901960784,0.9215686274509803,0.9372549019607843,D.q)
B.bis=new C.u(1,0.8549019607843137,0.8666666666666667,0.8901960784313725,D.q)
B.SL=new A.rC(B.adK,E.ade,B.adK,B.bis,"xbot")
B.bkk=new C.u(1,0.0784313725490196,0.047058823529411764,0.03137254901960784,D.q)
B.ekQ=new A.rC(B.agY,B.bkk,D.cp,D.av,"michelle")
B.bp7=new C.u(1,0.8509803921568627,0.6470588235294118,0.48627450980392156,D.q)
B.bo4=new C.u(1,0.3568627450980392,0.4196078431372549,0.22745098039215686,D.q)
B.bdl=new C.u(1,0.5411764705882353,0.4823529411764706,0.3333333333333333,D.q)
B.IH=new A.rC(B.bp7,D.LG,B.bo4,B.bdl,"soldier")
B.SM=new A.rC(B.adi,B.Lw,B.ah6,B.L_,"human")
B.aFf=new C.bu(B.aHD,[B.SL,B.ekQ,B.IH,B.SM],C.ax("bu<n,rC>"))
B.eau={soldier:0}
B.duO=new C.bu(B.eau,[3.141592653589793],x.e)
B.h2F=new A.r(0,0,-1.2)
B.e7u=new A.cW("Electrical box","The box is ready. Pull a cable to it, then wire a device.",B.h2F,9)
B.duQ=new C.dv([3,B.e7u],C.ax("dv<H,cW>"))
B.aHw={inspect:0,hand:1,screwdriver:2,pliers:3,wrench:4,crimper:5,plunger:6,flapper:7,newoutlet:8,patch:9}
B.RF=new C.bu(B.aHw,["Look and test","Hand","Screwdriver","Pliers","Wrench","Crimp tool","Plunger","New flapper","New outlet","Drywall patch"],x.l)
B.bJ_=new C.a1(63072,"MaterialIcons",!1)
B.duU=new C.bu(B.aHw,[D.fi,B.anr,A1.Gw,D.Gm,D.p_,B.bJ_,A8.a1k,D.qg,B.Og,A_.w3],C.ax("bu<n,a1>"))
B.dvA=new A.i8(18,50,0,20)
B.dvN=new A.i8(-126,126,-66,5)
B.dvU=new A.i8(-4,16,0,24)
B.dye=new A.aob(null)
B.aGe=new A.a6I(null)
B.dEZ=new A.apx(null)
B.dIf=new A.IE(!1,"city","",null)
B.aGo=new A.IE(!1,"","",null)
B.e2V=new A.O0(!0,null,!0,!1,null)
B.h5P=new A.r(16,2.6,0)
B.e7d=new A.cW("Wall drain","The pipe stub that comes out of the wall. The trap arm slides into it.",B.h5P,8)
B.fRg=new A.r(0,3,-6)
B.e7e=new A.cW("Wall","The copper supply pipes come out of the wall here.",B.fRg,24)
B.h2_=new A.r(8.2,1,-7)
B.e7f=new A.cW("Toilet","The tank fills from the cold supply on the wall. The bowl drains into the white pipe in the floor.",B.h2_,7)
B.fPV=new A.r(0,0,40)
B.e7g=new A.cW("The room","A room to build from bare studs to finished, working electrics. The walls hold the cable, the boxes and the devices.",B.fPV,190)
B.fZY=new A.r(-2.4,11.5,-3.6)
B.e7h=new A.cW("Hot faucet inlet","The threaded tail under the faucet where the hot supply hose screws on.",B.fZY,7)
B.fUo=new A.r(-3.6,4,-7.8)
B.e7i=new A.cW("Light switch","Controls the ceiling light. Tap Open lesson to wire one.",B.fUo,4.5)
B.h0y=new A.r(0,0.5,2)
B.e7j=new A.cW("Voltage tester","A tester that glows when it touches live power.",B.h0y,6)
B.e7k=new A.cW("Pipe joint","A crimped joint in the hot water line.",B.aUZ,4)
B.h_l=new A.r(0,-0.2,0.2)
B.e7l=new A.cW("Cover plate","The plate covers the box and the edges of the drywall so nobody touches the wires.",B.h_l,8)
B.h4M=new A.r(-4.6,0.5,-3.4)
B.e7m=new A.cW("Hot shut-off valve","The angle stop valve on the hot pipe. Turn the handle to stop the water to the faucet without shutting off the whole house. Hot is always on the left.",B.h4M,8)
B.UO=new A.r(0,-0.3,3.2)
B.e7n=new A.cW("White wire nut: NEUTRAL","Twist the house white wire and the fixture white wire together under this cap.",B.UO,6)
B.h0k=new A.r(4.6,0.5,-3.4)
B.e7o=new A.cW("Cold shut-off valve","The angle stop valve on the cold pipe. Cold is always on the right.",B.h0k,8)
B.fTy=new A.r(2.4,11.5,-3.6)
B.e7p=new A.cW("Cold faucet inlet","The threaded tail under the faucet where the cold supply hose screws on.",B.fTy,7)
B.h6N=new A.r(0.8,-0.8,1.2)
B.e7q=new A.cW("Black wire to the light","This black wire carries power to the light once the switch is on. It goes on the other brass screw.",B.h6N,7)
B.fZU=new A.r(10.05,5.2,-7.5)
B.e7r=new A.cW("Water heater breaker","A big circuit for the water heater. It is ON.",B.fZU,3.5)
B.aTX=new A.r(0,40,0)
B.e7s=new A.cW("Back wall",y.o,B.aTX,140)
B.h1T=new A.r(3,3.8,-7.4)
B.e7t=new A.cW("Kitchen faucet","Hot on the left, cold on the right. Tap Open lesson to connect the supply hoses.",B.h1T,4.5)
B.Aa=new A.r(0,6,0)
B.e7v=new A.cW("Tailpiece","The straight pipe that hangs from the sink drain. Its bottom end is smooth so the slip nut can slide on and grip it.",B.Aa,10)
B.h4h=new A.r(-60,40,50)
B.e7w=new A.cW("Left wall",y.o,B.h4h,140)
B.fV5=new A.r(3,1,0)
B.e7x=new A.cW("P-trap","The U-shaped bend. It always keeps a little water inside, and that water plug blocks sewer gas from coming back up into the house.",B.fV5,11)
B.fQE=new A.r(0,20,5)
B.e7y=new A.cW("The room","A bare room with the water supply stubs and the drain stub already in the wall and floor.",B.fQE,120)
B.fRX=new A.r(0,-8,0)
B.e7z=new A.cW("Cabinet","The cabinet under the sink where the drain is built.",B.fRX,22)
B.fPT=new A.r(0,0,150)
B.e7A=new A.cW("Lawn","The grass. Walls, floors and the sky stay as they are, but you can add things to the garden with the Furniture button.",B.fPT,400)
B.fRy=new A.r(0,4,-8)
B.e7B=new A.cW("Wall framing","2x4 studs 16 inches apart. Pipes and cables run through holes drilled in the middle of the studs, never along the edge where a nail could hit them.",B.fRy,18)
B.aVd=new A.r(0,-0.2,5.1)
B.e7C=new A.cW("TEST and RESET buttons","Press TEST to make the GFCI trip. Press RESET to turn it back on. Test it once a month.",B.aVd,5)
B.aTS=new A.r(0,11,0)
B.e7D=new A.cW("Sink","The sink bowl and the counter. The drain flange at the bottom is where the tailpiece starts.",B.aTS,16)
B.f_=new A.r(0,0,0)
B.e7E=new A.cW("Drywall","The wall surface. A hole is cut in it for the electrical box.",B.f_,22)
B.fWo=new A.r(60,40,50)
B.e7F=new A.cW("Right wall",y.o,B.fWo,140)
B.fQm=new A.r(0,14,-3)
B.e7G=new A.cW("Counter and sink","The faucet is mounted through a hole in the counter.",B.fQm,20)
B.fYB=new A.r(0,-1.9,5)
B.e7H=new A.cW("GREEN screw: GROUND",y.Z,B.fYB,5)
B.fRv=new A.r(0,47,-2)
B.e7I=new A.cW("Top and bottom plate","The horizontal 2x4s at the top and the bottom of the wall. The studs stand between them.",B.fRv,70)
B.fPZ=new A.r(0,0,-8)
B.e7J=new A.cW("Wall","Behind the wall the drain pipe goes down to the sewer line.",B.fPZ,22)
B.fQy=new A.r(0,19,-3)
B.e7K=new A.cW("Faucet","The faucet with hot on the left (red) and cold on the right (blue).",B.fQy,14)
B.fWY=new A.r(3.5,2,-7.2)
B.e7L=new A.cW("Kitchen counter and cabinet","The cabinet under the sink is where the drain and the shut-off valves live.",B.fWY,9)
B.fZ0=new A.r(10.05,5.7,-7.5)
B.e7M=new A.cW("Kitchen breaker","Protects the kitchen outlets. It is ON.",B.fZ0,3.5)
B.h_5=new A.r(4,6,-2.5)
B.e7N=new A.cW("Cold supply hose","A braided steel hose with a rubber liner and a blue band.",B.h_5,9)
B.h0t=new A.r(-1,0.6,4.3)
B.e7O=new A.cW("SILVER screw: NEUTRAL side",y.B,B.h0t,5)
B.a9M=new A.r(0,3.7,0)
B.e7P=new A.cW("Slip nut","A big plastic nut. Slide it on the pipe first, then the washer, then join the pieces and hand tighten. A rubber washer inside makes the seal.",B.a9M,7)
B.UN=new A.r(0,-1,-0.6)
B.e7Q=new A.cW("Wire nut","A twist-on cap that joins wires safely. The two white wires are joined here because a switch only cuts the hot wire.",B.UN,5)
B.h_d=new A.r(-1.5,-0.3,3.2)
B.e7R=new A.cW("Black wire nut: HOT","Twist the house black wire and the fixture black wire together under this cap.",B.h_d,6)
B.fZ_=new A.r(-1.9,0,-2)
B.e7S=new A.cW("Wood stud","The 2x4 frame inside the wall. The electrical box is nailed or screwed to a stud so it cannot move.",B.fZ_,16)
B.h2D=new A.r(-1,-0.8,4.3)
B.e7T=new A.cW("SILVER screw: NEUTRAL side",y.B,B.h2D,5)
B.h6b=new A.r(6,3,-7.8)
B.e7U=new A.cW("Water and drain pipes","Red is hot water, blue is cold water (PEX tubing). The white pipes are drains. They slope down so the waste flows away.",B.h6b,14)
B.h2I=new A.r(1,0.6,4.3)
B.e7V=new A.cW("BRASS screw: HOT side",y.C,B.h2I,5)
B.h39=new A.r(0,-0.2,4.9)
B.e7W=new A.cW("Mounting strap (yoke)","The metal strap with two screw slots. Long screws through the ears hold the device in the box.",B.h39,7)
B.h6K=new A.r(9.55,4.7,-7.5)
B.e7X=new A.cW("Spare breaker","A spare circuit.",B.h6K,3.5)
B.fQF=new A.r(0,20,8)
B.e7Y=new A.cW("Vanity and counter","The cabinet that holds the sink. The pipes live inside it.",B.fQF,70)
B.h5s=new A.r(-3.2,1.3,-7.8)
B.e7Z=new A.cW("Living room outlet","A standard outlet. Tap Open lesson to wire one in 3D.",B.h5s,4.5)
B.h3c=new A.r(1.5,-0.3,3.2)
B.e8_=new A.cW("Green ground connection","Join the bare copper house ground wire to the green fixture ground wire.",B.h3c,6)
B.fYJ=new A.r(12,2.6,0)
B.e80=new A.cW("Trap arm","The pipe that carries the waste water from the trap into the wall. It must slope down toward the wall, about 1/4 inch per foot.",B.fYJ,9)
B.h02=new A.r(0,6.5,-7.8)
B.e81=new A.cW("Electrical cables","Cables run from the breaker panel to every outlet, switch and light. Yellow is 12 gauge for 20 amps. White is 14 gauge for 15 amps.",B.h02,16)
B.h0O=new A.r(11.2,2.3,-6)
B.e82=new A.cW("Water heater","Heats the water. The cold line goes in at the top and the hot line comes out at the top.",B.h0O,9)
B.h1t=new A.r(9.55,5.2,-7.5)
B.e83=new A.cW("Bathroom breaker","Protects the bathroom. It is ON.",B.h1t,3.5)
B.fZ6=new A.r(5.2,3.9,-7.8)
B.e84=new A.cW("Kitchen GFCI outlet","Outlets near water must be GFCI. Tap Open lesson to wire one.",B.fZ6,4.5)
B.fRq=new A.r(0,40,-3)
B.e85=new A.cW("Electrical cable","Yellow 12/2 cable with ground: it carries power from the breaker panel through the holes in the studs to each box.",B.fRq,80)
B.fZR=new A.r(-8.4,1.2,-6.4)
B.e86=new A.cW("Sofa","Just furniture, to show the size of the room.",B.fZR,10)
B.e87=new A.cW("Outlet face","Two outlets. The short slot is hot, the long slot is neutral, and the round hole is ground.",B.aVd,6)
B.fYj=new A.r(0,4,-7.8)
B.e88=new A.cW("Wall","The drywall of the back wall.",B.fYj,16)
B.h5x=new A.r(0,0,0.6)
B.e89=new A.cW("Canopy","The round cover that hides the box and the wire connections against the ceiling.",B.h5x,8)
B.e8a=new A.cW("Concrete slab","The foundation. It carries the whole weight of the house. Plumbing drains are placed before it is poured.",B.f_,30)
B.fRj=new A.r(0,40,12)
B.e8b=new A.cW("Front door","Tap the door to go inside the house.",B.fRj,260)
B.a9O=new A.r(8.9,2.6,0)
B.e8c=new A.cW("Slip nut","Hand tighten it, then about a quarter turn with pliers. Over-tightening cracks the plastic.",B.a9O,7)
B.h1s=new A.r(1,-0.8,4.3)
B.e8d=new A.cW("BRASS screw: HOT side",y.C,B.h1s,5)
B.fY1=new A.r(0.6,1.5,-1.8)
B.e8e=new A.cW("Cable to the light (LOAD)","This cable carries the switched power on to the light. The black wire here only has power when the switch is on.",B.fY1,8)
B.fYw=new A.r(9.8,5,-7.5)
B.e8f=new A.cW("Breaker panel","The main electrical panel. Each breaker protects one circuit. A breaker that is in the middle position has TRIPPED. Flip it fully OFF and then ON to reset.",B.fYw,6)
B.h_a=new A.r(-4,6,-2.5)
B.e8g=new A.cW("Hot supply hose","A braided steel hose with a rubber liner and a red band. Hand tighten the nuts, then a quarter turn with a wrench.",B.h_a,9)
B.ecL=new C.t(66,66)
B.bPO=new C.ae(D.eb,20,F.fu,null,null,null)
B.egd=new C.D(D.vT,B.bPO,null)
B.fnK=new C.F(!0,D.ms,null,null,null,null,12.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fug=new C.y("A circuit that is not CORRECT and safe can never pass, even if the light or fan would have worked.",null,B.fnK,null,null,null,null,null,null,null,null,null)
B.ego=new C.D(D.i9,B.fug,null)
B.fE4=new C.y("Sick people can stay in a hospital bed. Treat each patient before their care runs out, and they go home better.",null,D.Uj,null,D.L,null,null,null,null,null,null,null)
B.egt=new C.D(D.ajY,B.fE4,null)
B.bP0=new C.ae(D.eb,18,D.bo,null,null,null)
B.egJ=new C.D(D.fv,B.bP0,null)
B.egL=new C.D(D.fv,G.aoV,null)
B.ekG=new A.xS(0,0,18,0,!1,!1,!1,!1,!1,0,!1,!1,"","",-1,0,-1,0)
B.ekH=new A.xS(0,100,120,-2.2,!1,!1,!1,!1,!1,0,!1,!1,"","",-1,0,-1,0)
B.ekI=new A.xS(0,40,150,0.5,!1,!1,!1,!1,!1,0,!1,!1,"","",-1,0,-1,0)
B.ekJ=new A.xS(0,0,0,0,!1,!1,!1,!1,!1,0,!1,!1,"","",-1,0,-1,0)
B.ekK=new A.xS(0,-80,50,0,!1,!1,!1,!1,!1,0,!1,!1,"","",-1,0,-1,0)
B.ekL=new A.xS(0,0,56,0,!1,!1,!1,!1,!1,0,!1,!1,"","",-1,0,-1,0)
B.emO=new A.a9e(null,null)
B.bgA=new C.u(1,0.30980392156862746,0.7019607843137254,0.9647058823529412,D.q)
B.boH=new C.u(1,0.11372549019607843,0.37254901960784315,0.7686274509803922,D.q)
B.blv=new C.u(1,0.043137254901960784,0.16470588235294117,0.4196078431372549,D.q)
B.cYP=w([B.bgA,B.boH,B.blv],x.O)
B.enx=new C.c0(A6.x9,0.5,D.x,null,0,B.cYP,null,null)
B.boY=new C.u(1,0.8392156862745098,0.9019607843137255,0.9176470588235294,D.q)
B.eoe=new C.z(B.boY,B.Xi)
B.eon=new C.z(0,120)
B.eoo=new C.z(0,300)
B.eoD=new C.z(B.oI,B.f_)
B.eqd=new C.z(64,2.4)
B.erR=new C.z("LOAD (taped)",D.d8)
B.bdj=new C.u(1,0.9450980392156862,0.8901960784313725,0.7764705882352941,D.q)
B.bgg=new C.u(1,0.8470588235294118,0.7686274509803922,0.6274509803921569,D.q)
B.etc=new C.z(B.bdj,B.bgg)
B.df8=w([D.aw,D.ca,D.aw],x.O)
B.etB=new C.z(-40,B.df8)
B.euZ=new C.z(63,-2.4)
B.bfi=new C.u(1,0.8901960784313725,0.9254901960784314,0.9607843137254902,D.q)
B.bas=new C.u(1,0.7372549019607844,0.7843137254901961,0.8392156862745098,D.q)
B.evu=new C.z(B.bfi,B.bas)
B.evL=new C.z(51,B.adI)
B.bbA=new C.u(1,0.9137254901960784,0.8705882352941177,0.7607843137254902,D.q)
B.eyo=new C.z(B.bbA,B.B9)
B.bbX=new C.u(1,0.9137254901960784,0.9372549019607843,0.9490196078431372,D.q)
B.bcv=new C.u(1,0.8509803921568627,0.8941176470588236,0.9098039215686274,D.q)
B.ezc=new C.z(B.bbX,B.bcv)
B.bkK=new C.u(1,0.9058823529411765,0.8235294117647058,0.8156862745098039,D.q)
B.bcw=new C.u(1,0.7058823529411765,0.7176470588235294,0.7411764705882353,D.q)
B.eA8=new C.z(B.bkK,B.bcw)
B.b9T=new C.u(1,0.7647058823529411,0.8117647058823529,0.9019607843137255,D.q)
B.eAZ=new C.z(B.b9T,B.agZ)
B.bjj=new C.u(1,0.3568627450980392,0.39215686274509803,0.4392156862745098,D.q)
B.eCG=new C.z("SILVER \xb7 NEUTRAL",B.bjj)
B.h5H=new A.r(-1.5,0,0)
B.eCP=new C.z(B.Ll,B.h5H)
B.eEk=new C.z(52,B.AK)
B.bfT=new C.u(1,0.12156862745098039,0.47843137254901963,0.22745098039215686,D.q)
B.eFa=new C.z("GREEN \xb7 GROUND",B.bfT)
B.bnR=new C.u(1,0.9450980392156862,0.9098039215686274,0.8235294117647058,D.q)
B.eFR=new C.z(B.bnR,B.B9)
B.eG7=new C.z("main","Main water valve")
B.cKI=w([D.vw,D.bI,D.be],x.O)
B.eIm=new C.z(40,B.cKI)
B.h6O=new A.r(1.5,0,0)
B.eK6=new C.z(B.XS,B.h6O)
B.bcb=new C.u(1,0.9529411764705882,0.9411764705882353,0.9098039215686274,D.q)
B.biR=new C.u(1,0.4823529411764706,0.5294117647058824,0.5803921568627451,D.q)
B.eKJ=new C.z(B.bcb,B.biR)
B.eLF=new C.z(B.hO,B.WK)
B.bf_=new C.u(1,0.9529411764705882,0.9019607843137255,0.7843137254901961,D.q)
B.blC=new C.u(1,0.788235294117647,0.7098039215686275,0.5490196078431373,D.q)
B.eLX=new C.z(B.bf_,B.blC)
B.bbO=new C.u(1,0.6039215686274509,0.4196078431372549,0.047058823529411764,D.q)
B.eMr=new C.z("BRASS \xb7 HOT",B.bbO)
B.eMT=new C.z(53,B.XS)
B.a77=new C.bj(180,40,215)
B.a78=new C.bj(215,40,345)
B.a79=new C.bj(60,60,90)
B.eND=new C.bj(61,-4.6,B.tz)
B.a7a=new C.bj(95,40,185)
B.eOx=new C.bj("Turn the main water ON to test for leaks: pick Hand and tap the main valve.","hand","main")
B.ePp=new C.bj(62,4.6,B.nV)
B.ePz=new C.bj("The water must be OFF before you cut into the pipes: pick Hand and tap the main valve.","hand","main")
B.eQ0=new C.bj("Fit the parts in the order of the job list.","",null)
B.eQp=new C.bj("Looks good. Watch for leaks; if none, the job is done.","",null)
B.eRf=new C.cx([0,17.1,16.4,5.8])
B.eRi=new C.cx([0,-0.1,16.4,4.2])
B.eSl=new C.cx([15.6,9,14.8,22])
B.eSp=new C.cx([-15.6,9,14.8,22])
B.eSy=new C.e9([72,60,44,B.Lx,B.LA])
B.boD=new C.u(1,0.8941176470588236,0.6901960784313725,0.47843137254901963,D.q)
B.eSP=new C.e9([124,70,44,B.boD,B.pV])
B.eSW=new C.e9([90,64,46,B.afi,D.ha])
B.eTe=new C.e9([110,70,62,D.bN,D.al])
B.eTj=new C.e9([84,60,40,B.afl,B.LA])
B.fsU=new C.y("\u260e",null,D.pr,null,null,null,null,null,null,null,null,null)
B.b8F=new C.pG(B.fsU,D.aw,null,24,null)
B.fvm=new C.y("City office",null,D.df,null,null,null,null,null,null,null,null,null)
B.d6H=w([B.b8F,D.bc,B.fvm],x.p)
B.eVZ=new C.cb(D.aM,D.e,D.j,D.m,null,D.p,null,0,B.d6H,null)
B.bQz=new C.ae(D.Od,26,D.c7,null,null,null)
B.fIr=new C.y("Hallway tour",null,D.hI,null,null,null,null,null,null,null,null,null)
B.ftS=new C.y("Just the hall and its big TVs, 45 seconds",null,D.v7,null,null,null,null,null,null,null,null,null)
B.do_=w([B.fIr,B.ftS],x.p)
B.bqn=new C.fj(D.ag,D.e,D.j,D.E,null,D.p,null,0,B.do_,null)
B.bCy=new C.bA(1,D.bd,B.bqn,null)
B.cUT=w([B.bQz,D.bc,B.bCy,A0.Ou],x.p)
B.eW1=new C.cb(D.aM,D.e,D.j,D.m,null,D.p,null,0,B.cUT,null)
B.bOd=new C.ae(D.iu,30,D.c,null,null,null)
B.fKr=new C.y("Play the tour",null,D.jZ,null,null,null,null,null,null,null,null,null)
B.d2u=w([B.bOd,D.bn,B.fKr],x.p)
B.eW7=new C.cb(D.aM,D.b7,D.j,D.m,null,D.p,null,0,B.d2u,null)
B.uW=new A.Jp(0,"correct")
B.aO3=new A.Jp(1,"incorrect")
B.rN=new A.Jp(2,"unsafe")
B.Tb=new A.Jp(3,"incomplete")
B.eWl=new A.Jp(4,"requiresVerification")
B.e8N={hospital:0,shop:1,school:2,firestation:3,house2:4,bighouse:5,store:6,gasstation:7,dmv:8,tower:9,hq:10}
B.aOF=new C.dD(B.e8N,11,x.M)
B.e8x={wardrobe:0,shelf:1,lamp:2,console:3}
B.eXJ=new C.dD(B.e8x,4,x.M)
B.aOJ=new C.jl([1,2,3,4,5],C.ax("jl<H>"))
B.e8h={house2:0,bighouse:1,shop:2,hospital:3,school:4,firestation:5,store:6,gasstation:7,tower:8,hq:9,dmv:10}
B.eXW=new C.dD(B.e8h,11,x.M)
B.eax={billboard:0,bighouse:1,townsign:2,cornersign:3,adboard:4,tower:5,hq:6,store:7,gasstation:8,ubstation:9,dmv:10}
B.eXZ=new C.dD(B.eax,11,x.M)
B.aOO=new C.dD(D.hX,0,C.ax("dD<H>"))
B.eZT=new C.at(0,36)
B.f_2=new C.at(126,84)
B.f0_=new C.a8(110,64,null,null)
B.f00=new C.a8(120,70,null,null)
B.f06=new C.a8(270,64,null,null)
B.f07=new C.a8(270,70,null,null)
B.Jl=new A.Fs(0,"hot")
B.Jm=new A.Fs(1,"neutral")
B.Jn=new A.Fs(2,"ground")
B.aQv=new A.Fs(3,"load")
B.f8s=new C.F(!0,D.c,null,null,null,null,12.5,null,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.f92=new C.F(!0,D.c,null,null,null,null,13.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.f97=new C.F(!0,D.c,null,null,null,null,16,D.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,S.awq,null,null,null)
B.fam=new C.F(!0,D.aB,null,null,null,null,14,D.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.aQZ=new C.F(!0,D.aB,null,null,null,null,11.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.faS=new C.F(!0,D.bI,null,null,null,null,12,D.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fb1=new C.F(!0,D.ae,null,null,null,null,13.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fbr=new C.F(!0,D.aE,null,null,null,null,12.5,D.u,null,2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fbA=new C.F(!0,D.aQ,null,null,null,null,11.5,null,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fbM=new C.F(!0,D.bI,null,null,null,null,15,D.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fc2=new C.F(!0,D.c,null,null,null,null,12.5,D.O,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.aRb=new C.F(!0,D.ae,null,null,null,null,12,D.O,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fcX=new C.F(!0,D.c,null,null,null,null,13,D.O,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.a8C=new C.F(!0,D.ae,null,null,null,null,null,null,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fdo=new C.F(!0,D.bI,null,null,null,null,13,D.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fe3=new C.F(!0,D.aB,null,null,null,null,9.5,null,null,null,null,null,1.15,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fej=new C.F(!0,D.ae,null,null,null,null,12.5,null,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fel=new C.F(!0,D.fh,null,null,null,null,12,null,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.feY=new C.F(!0,null,null,null,null,null,9,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.Jx=new C.F(!0,D.aE,null,null,null,null,12.5,D.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.ffs=new C.F(!0,D.c,null,null,null,null,11.5,D.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.aRt=new C.F(!0,D.c,null,null,null,null,14,null,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.ffK=new C.F(!0,D.bM,null,null,null,null,13,D.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fgI=new C.F(!0,D.ms,null,null,null,null,12,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fgO=new C.F(!0,D.ae,null,null,null,null,13.5,null,D.cE,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fgZ=new C.F(!0,D.fh,null,null,null,null,11.5,D.O,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fh3=new C.F(!0,D.eF,null,null,null,null,14,D.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fhB=new C.F(!0,D.bI,null,null,null,null,18,D.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fi7=new C.F(!0,D.aQ,null,null,null,null,12,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fiP=new C.F(!0,D.bI,null,null,null,null,null,D.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.aRV=new C.F(!0,D.ae,null,null,null,null,13.5,null,null,null,null,null,1.5,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fjG=new C.F(!0,D.aE,null,null,null,null,null,D.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fk7=new C.F(!0,D.aB,null,null,null,null,11,D.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fmt=new C.F(!0,D.bI,null,null,null,null,44,D.u,null,2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.aSo=new C.F(!0,D.c,null,null,null,null,13.5,D.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fmS=new C.F(!0,D.aQ,null,null,null,null,11.5,null,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fnp=new C.F(!0,D.b1,null,null,null,null,14.5,D.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fny=new C.F(!0,F.fu,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fnP=new C.F(!0,D.fh,null,null,null,null,12,D.O,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fo9=new C.y("Wire guide (U.S. houses)",null,D.df,null,null,null,null,null,null,null,null,null)
B.fom=new C.y("Which wall?",null,D.Ur,null,null,null,null,null,null,null,null,null)
B.f9h=new C.F(!0,D.w,null,null,null,null,12,D.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.foH=new C.y("Open the 3D lesson",null,B.f9h,null,null,null,null,null,null,null,null,null)
B.fpr=new C.y("Never rely on color alone. With the power off, prove what each wire does with a tester and the device diagram. A licensed electrician does real house wiring.",null,K.a8E,null,null,null,null,null,null,null,null,null)
B.fpB=new C.y("Tip: pick a part, then tap its glowing spot. Joints on hoses, bolts and the drain are only loose: pick the Wrench and tap them. Use your Hand on the main water valve: turn the water OFF before you cut into a pipe, and ON to test for leaks.",null,E.a8w,null,null,null,null,null,null,null,null,null)
B.fpW=new C.y("Answer, then submit. Nothing is marked until you submit.",null,H.v2,null,null,null,null,null,null,null,null,null)
B.fqK=new C.y("You used all three lives. Electricity does not give second chances, so in real life you turn the breaker OFF and test the wires every single time. Try the job again.",null,D.A4,null,null,null,null,null,null,null,null,null)
B.fr0=new C.y("A different house",null,null,null,null,null,null,null,null,null,null,null)
B.frr=new C.y("\ud83c\udf5e",null,D.v8,null,null,null,null,null,null,null,null,null)
B.frs=new C.y("Show me",null,D.me,null,null,null,null,null,null,null,null,null)
B.frH=new C.y("Connect it to...",null,D.lG,null,null,null,null,null,null,null,null,null)
B.frS=new C.y("Start this job again",null,null,null,null,null,null,null,null,null,null,null)
B.fj1=new C.F(!0,D.cs,null,null,null,null,12.5,D.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fsb=new C.y("Give back",null,B.fj1,null,null,null,null,null,null,null,null,null)
B.fsR=new C.y("Edit your billboard",null,D.df,null,null,null,null,null,null,null,null,null)
B.ftZ=new C.y("L is the lobby. On every level there is a balcony with a view of the town.",null,H.DM,null,null,null,null,null,null,null,null,null)
B.fud=new C.y("Submit the test",null,null,null,null,null,null,null,null,null,null,null)
B.fuB=new C.y("\ud83e\udeaa",null,D.v8,null,null,null,null,null,null,null,null,null)
B.fuO=new C.y("Start from a bare house (wire everything)",null,null,null,null,null,null,null,null,null,null,null)
B.fvu=new C.y("THE RACE",null,N.rZ,null,null,null,null,null,null,null,null,null)
B.fvz=new C.y("What should the drone show you?",null,B.aR4,null,null,null,null,null,null,null,null,null)
B.fwc=new C.y("Diagram lessons",null,null,null,null,null,null,null,null,null,null,null)
B.fwg=new C.y("Go through",null,null,null,null,null,null,null,null,null,null,null)
B.fx1=new C.y("The customer says\u2026",null,D.df,null,null,null,null,null,null,null,null,null)
B.fxy=new C.y("Submit for inspection",null,null,null,null,null,null,null,null,null,null,null)
B.fxM=new C.y("What the house needs",null,D.df,null,null,null,null,null,null,null,null,null)
B.fxX=new C.y("Next job",null,null,null,null,null,null,null,null,null,null,null)
B.faN=new C.F(!0,D.w,null,null,null,null,14,D.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fy4=new C.y("Go in",null,B.faN,null,null,null,null,null,null,null,null,null)
B.fk1=new C.F(!0,D.aE,null,null,null,null,22,D.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fy8=new C.y("My House",null,B.fk1,null,D.L,null,null,null,null,null,null,null)
B.fyg=new C.y("New job",null,null,null,null,null,null,null,null,null,null,null)
B.aRy=new C.F(!0,D.cs,null,null,null,null,null,D.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fyn=new C.y("Job over",null,B.aRy,null,null,null,null,null,null,null,null,null)
B.fyE=new C.y("Three shocks. In real life you switch the breaker off and test the wires, every time. Try another call.",null,D.A4,null,null,null,null,null,null,null,null,null)
B.fyK=new C.y("Learn the trades",null,P.rX,null,null,null,null,null,null,null,null,null)
B.fzi=new C.y("Practice mode: no hints. You will only hear from me when something is wrong.",null,H.DM,null,null,null,null,null,null,null,null,null)
B.fzw=new C.y("New call",null,null,null,null,null,null,null,null,null,null,null)
B.fzB=new C.y("Job done! \ud83c\udf89",null,K.JE,null,null,null,null,null,null,null,null,null)
B.fzD=new C.y("Wire guide",null,null,null,null,null,null,null,null,null,null,null)
B.fAL=new C.y("Next call",null,null,null,null,null,null,null,null,null,null,null)
B.fB8=new C.y("Plug in",null,D.df,null,null,null,null,null,null,null,null,null)
B.fBy=new C.y("Look around",null,null,null,null,null,null,null,null,null,null,null)
B.fBT=new C.y("\ud83d\udef5",null,D.wN,null,null,null,null,null,null,null,null,null)
B.fC7=new C.y("The customer wants:",null,D.Ud,null,null,null,null,null,null,null,null,null)
B.fCi=new C.y('Tip: pick "Look and test" and tap things to find out what is wrong. Then pick the right tool. Turn the breaker off (hand) before you touch any wire.',null,E.a8w,null,null,null,null,null,null,null,null,null)
B.ffL=new C.F(!0,D.aB,null,null,null,null,11.5,D.H,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fCz=new C.y("INCOMING CALL",null,B.ffL,null,null,null,null,null,null,null,null,null)
B.fCF=new C.y("Elevator",null,D.fy,null,null,null,null,null,null,null,null,null)
B.fDE=new C.y("Deliveries",null,D.fy,null,null,null,null,null,null,null,null,null)
B.fDS=new C.y("Every connection is on the right terminal and every safety check passes.",null,D.t_,null,null,null,null,null,null,null,null,null)
B.fE0=new C.y("Message \xb7 now",null,D.v1,null,null,null,null,null,null,null,null,null)
B.fEP=new C.y("5 bedrooms, 3 bathrooms and a garden. Walk in, look all round, fix what is wrong.",null,A5.U_,null,D.L,null,null,null,null,null,null,null)
B.fEU=new C.y("Call over",null,B.aRy,null,null,null,null,null,null,null,null,null)
B.fF0=new C.y("\ud83d\udd12",null,Z.Ue,null,null,null,null,null,null,null,null,null)
B.fF1=new C.y("\u23cf Unplug",null,F.A_,null,null,null,null,null,null,null,null,null)
B.fF7=new C.y("The game is closed for now",null,D.md,null,D.L,null,null,null,null,null,null,null)
B.faw=new C.F(!0,D.ae,null,null,null,null,14.5,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fFk=new C.y("You missed 3 jobs in a row. The City office needs people who answer the phone and finish the job.",null,B.faw,null,D.L,null,null,null,null,null,null,null)
B.fFm=new C.y("A different call",null,null,null,null,null,null,null,null,null,null,null)
B.fFE=new C.y("One board on its own, or several boards standing apart.",null,H.v2,null,null,null,null,null,null,null,null,null)
B.fFP=new C.y("\ud83d\udecf\ufe0f",null,D.nB,null,null,null,null,null,null,null,null,null)
B.fGe=new C.y("Job complete! \ud83c\udf89",null,K.JE,null,null,null,null,null,null,null,null,null)
B.fGr=new C.y("OPEN ORDERS",null,N.rZ,null,null,null,null,null,null,null,null,null)
B.fGL=new C.y("Colours",null,D.DF,null,null,null,null,null,null,null,null,null)
B.fGP=new C.y("How you are doing",null,D.hI,null,null,null,null,null,null,null,null,null)
B.fHk=new C.y("All fixed! \ud83c\udf89",null,K.JE,null,null,null,null,null,null,null,null,null)
B.fHo=new C.y("These are the usual U.S. house wiring colors. Colors are a hint, not proof: old work, switch loops and other countries differ. A real installer proves what each wire does with a tester, with the power off, and follows the device diagram.",null,A9.a8D,null,null,null,null,null,null,null,null,null)
B.fHx=new C.y("Test (marked on submit)",null,null,null,null,null,null,null,null,null,null,null)
B.fHK=new C.y("Messages",null,D.v1,null,null,null,null,null,null,null,null,null)
B.aT0=new C.y("Stay",null,null,null,null,null,null,null,null,null,null,null)
B.fIw=new C.y("\ud83d\ude81",null,D.wN,null,null,null,null,null,null,null,null,null)
B.fIJ=new C.y("Choose a level. A red one has an office with no power.",null,D.A2,null,null,null,null,null,null,null,null,null)
B.aT2=new C.y("A different job",null,null,null,null,null,null,null,null,null,null,null)
B.fJx=new C.y("It goes on the back wall, not wired yet. Tap the red one to wire it yourself.",null,H.v2,null,null,null,null,null,null,null,null,null)
B.fKt=new C.y("\ud83d\uded7",null,D.wN,null,null,null,null,null,null,null,null,null)
B.fKN=new C.y("\u26a1",null,D.pq,null,null,null,null,null,null,null,null,null)
B.fLj=new C.y("Practice (instant feedback)",null,null,null,null,null,null,null,null,null,null,null)
B.fLo=new C.y("The job",null,D.df,null,null,null,null,null,null,null,null,null)
B.fMe=new C.y("Stay in the room",null,null,null,null,null,null,null,null,null,null,null)
B.flT=new C.F(!0,F.fu,null,null,null,null,12,D.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fMu=new C.y("\ud83e\udea7 Billboards",null,B.flT,null,null,null,null,null,null,null,null,null)
B.fMA=new C.y("Choose a billboard",null,D.df,null,null,null,null,null,null,null,null,null)
B.fMF=new C.y("Which sign?",null,D.DF,null,null,null,null,null,null,null,null,null)
B.fMM=new C.y("\ud83d\udc8a",null,D.v8,null,null,null,null,null,null,null,null,null)
B.fPO=new A.r(3.6,2.6,0.6)
B.fPQ=new A.r(0,56,0.9)
B.fPR=new A.r(-146.4,62,84)
B.ig=new A.r(0,0,1)
B.fPU=new A.r(0,0,3)
B.a9B=new A.r(0,0,4)
B.fPW=new A.r(0,0,500)
B.fPX=new A.r(0,0,640)
B.fPY=new A.r(0,0,800)
B.t4=new A.r(0,0,-1)
B.a9C=new A.r(0,0,-60)
B.fQ0=new A.r(0,101,38)
B.fQ1=new A.r(0,105,280)
B.aTR=new A.r(0,10,0)
B.fQ2=new A.r(0,10,3)
B.fQ3=new A.r(0,110,10)
B.fQ4=new A.r(0,110,95)
B.fQ5=new A.r(0,112,36)
B.fQ6=new A.r(0,116,0)
B.fQ7=new A.r(0,11,-15)
B.fQ8=new A.r(0,120,0)
B.fQ9=new A.r(0,122,0)
B.fQa=new A.r(0,124,0)
B.fQb=new A.r(0,126,4)
B.aTT=new A.r(0,12,0)
B.fQc=new A.r(0,12,3)
B.fQd=new A.r(0,130,-3)
B.a9D=new A.r(0,13,0)
B.fQe=new A.r(0,13,56)
B.fQf=new A.r(0,13,-8)
B.fQg=new A.r(0,142,0)
B.K1=new A.r(0,14,0)
B.fQh=new A.r(0,14,11)
B.fQi=new A.r(0,14,150)
B.fQj=new A.r(0,14,2)
B.fQk=new A.r(0,14,32)
B.aTU=new A.r(0,14,40)
B.fQl=new A.r(0,14,5)
B.fQn=new A.r(0,14,-9)
B.fQo=new A.r(0,150,-150)
B.fQp=new A.r(0,159,0)
B.fQq=new A.r(0,165,3)
B.fQr=new A.r(0,165,-63)
B.fQs=new A.r(0,16,0)
B.fQt=new A.r(0,178,-30)
B.a9E=new A.r(0,17,0)
B.fQu=new A.r(0,17,21)
B.fQv=new A.r(0,188,0)
B.fQw=new A.r(0,19,0)
B.fQx=new A.r(0,19,14)
B.fQz=new A.r(0,19,-30)
B.e8=new A.r(0,1,0)
B.fQB=new A.r(0,202,0)
B.fQC=new A.r(0,20,0)
B.fQD=new A.r(0,20,16)
B.fQG=new A.r(0,20,-14)
B.fQH=new A.r(0,20,-6)
B.fQI=new A.r(0,210,-150)
B.fQJ=new A.r(0,216,-30)
B.fQK=new A.r(0,21,0)
B.fQL=new A.r(0,22,-11)
B.fQM=new A.r(0,22,-12)
B.fQN=new A.r(0,22,-39)
B.fQQ=new A.r(0,23,0)
B.fQT=new A.r(0,24,0)
B.fQU=new A.r(0,24,13)
B.fQW=new A.r(0,250,640)
B.A9=new A.r(0,250,-118)
B.fQY=new A.r(0,252,0)
B.fQZ=new A.r(0,25,-15)
B.fR_=new A.r(0,26,-24)
B.UL=new A.r(0,28,0)
B.fR0=new A.r(0,28,-8)
B.aTW=new A.r(0,29,40)
B.fR1=new A.r(0,2,14)
B.fR2=new A.r(0,304,-150)
B.a9F=new A.r(0,30,0)
B.fR3=new A.r(0,30,110)
B.fR4=new A.r(0,316,0)
B.fR5=new A.r(0,31,46)
B.fR6=new A.r(0,31,-6)
B.fR7=new A.r(0,330,260)
B.fR8=new A.r(0,34,0)
B.fR9=new A.r(0,36,0)
B.fRa=new A.r(0,36,19)
B.fRb=new A.r(0,36,-3)
B.fRc=new A.r(0,37,22)
B.fRd=new A.r(0,3,0)
B.fRe=new A.r(0,3,150)
B.fRf=new A.r(0,3,-30)
B.fRh=new A.r(0,400,60)
B.fRi=new A.r(0,40,100)
B.fRk=new A.r(0,40,150)
B.fRl=new A.r(0,40,17)
B.fRn=new A.r(0,40,40)
B.fRo=new A.r(0,40,45)
B.fRp=new A.r(0,40,50)
B.fRr=new A.r(0,40,-6)
B.aTY=new A.r(0,44,46)
B.fRs=new A.r(0,44,55)
B.fRt=new A.r(0,46,0)
B.fRu=new A.r(0,47,0)
B.aTZ=new A.r(0,48,0)
B.fRw=new A.r(0,48,20)
B.fRx=new A.r(0,48,82)
B.UM=new A.r(0,4,-2)
B.fRB=new A.r(0,520,1450)
B.aU_=new A.r(0,52,0)
B.fRC=new A.r(0,52,52)
B.fRE=new A.r(0,55,0)
B.a9G=new A.r(0,58,0)
B.fRF=new A.r(0,5,4)
B.fRH=new A.r(0,66,0)
B.fRI=new A.r(0,66,1)
B.fRJ=new A.r(0,6,-15)
B.fRK=new A.r(0,75,-30)
B.aU0=new A.r(0,76,36)
B.a9H=new A.r(0,7,0)
B.fRL=new A.r(0,7,-5)
B.aU1=new A.r(0,82,0)
B.wW=new A.r(0,8,0)
B.fRM=new A.r(0,8,6)
B.fRN=new A.r(0,8,90)
B.fRO=new A.r(0,8,-16)
B.fRP=new A.r(0,8,-19)
B.fRQ=new A.r(0,8,-4)
B.fRR=new A.r(0,900,1600)
B.fRS=new A.r(0,91,80)
B.aU2=new A.r(0,92,1)
B.fRT=new A.r(0,94,13)
B.fRU=new A.r(0,98,8)
B.fRV=new A.r(0,99,38)
B.a9I=new A.r(0,9,0)
B.aU3=new A.r(0,9,-3)
B.a9J=new A.r(0,-4,28)
B.fRW=new A.r(0,-4,-20)
B.fS_=new A.r(-100,38,0.7)
B.fS2=new A.r(100,100,320)
B.fS3=new A.r(100,14,36)
B.fS4=new A.r(100,24,36)
B.fS5=new A.r(100,24,8)
B.fS6=new A.r(100,290,-330)
B.fS7=new A.r(100,7,7)
B.fS8=new A.r(101,4,37)
B.fSb=new A.r(10,12,10)
B.fSc=new A.r(10,12,16)
B.fSd=new A.r(10,16,3)
B.fSe=new A.r(10,26,2)
B.fSf=new A.r(10,34,1)
B.fSg=new A.r(10,3,7)
B.fSh=new A.r(10,60,14)
B.fSi=new A.r(10,8,10)
B.fSj=new A.r(10,8,15)
B.fSl=new A.r(110,0,20)
B.fSm=new A.r(110,130,20)
B.fSn=new A.r(110,14,2)
B.fSo=new A.r(110,8,34)
B.fSp=new A.r(110,96,120)
B.aU4=new A.r(112,22,3)
B.fSq=new A.r(112,46,2)
B.fSr=new A.r(11,12,30)
B.aU5=new A.r(11,16,7)
B.fSs=new A.r(11,1,11)
B.fSt=new A.r(120,0,-30)
B.fSu=new A.r(120,28,22)
B.fSv=new A.r(120,40,100)
B.fSw=new A.r(124,2,26)
B.fSx=new A.r(124,4,60)
B.fSy=new A.r(125,8,54)
B.fSz=new A.r(126,2,62)
B.aU6=new A.r(12,3,9)
B.fSA=new A.r(12,4,22)
B.fSB=new A.r(12,86,0)
B.fSC=new A.r(130,18,12)
B.fSD=new A.r(130,28,24)
B.aU7=new A.r(130,4,14)
B.aU8=new A.r(130,56,80)
B.fSE=new A.r(130,5,50)
B.fSF=new A.r(132,14,150)
B.fSG=new A.r(132,2,52)
B.aU9=new A.r(134,4,84)
B.fSH=new A.r(13,0,0)
B.fSI=new A.r(13,12,13)
B.fSJ=new A.r(13,15,2)
B.aUa=new A.r(13,18,8)
B.fSK=new A.r(13,28,3)
B.fSL=new A.r(0,0.52,2.35)
B.fSM=new A.r(140,28,22)
B.fSN=new A.r(140,9,43)
B.fSO=new A.r(144,2,26)
B.fSP=new A.r(146,3,40)
B.fSQ=new A.r(148,60,120)
B.fSR=new A.r(14,10,2)
B.aUb=new A.r(14,11,14)
B.fSS=new A.r(14,13,28)
B.fST=new A.r(14,14,3)
B.fSU=new A.r(14,17,4)
B.fSV=new A.r(14,20,-28)
B.fSW=new A.r(14,30,14)
B.fSX=new A.r(14,36,14)
B.fSY=new A.r(14,3,14)
B.fSZ=new A.r(150,30,42)
B.fT_=new A.r(150,70,5)
B.fT0=new A.r(151,3,43)
B.fT1=new A.r(152,4,7)
B.fT3=new A.r(16,10,10)
B.fT4=new A.r(16,16,16)
B.fT5=new A.r(16,3,11)
B.fT6=new A.r(16,80,60)
B.fT7=new A.r(16,9,2)
B.fT8=new A.r(17,1,0)
B.aUc=new A.r(17,3,17)
B.fT9=new A.r(27,1.4,27)
B.fTa=new A.r(18,18,14)
B.fTb=new A.r(18,20,18)
B.fTc=new A.r(18,22,2)
B.fTd=new A.r(18,28,16)
B.fTe=new A.r(18,2,18)
B.fTf=new A.r(18,3,0)
B.fTg=new A.r(18,6,0)
B.fTh=new A.r(18,80,2)
B.fTi=new A.r(18,90,5)
B.fTj=new A.r(18,9,11)
B.fTk=new A.r(190,20,60)
B.fTl=new A.r(190,320,100)
B.fTm=new A.r(19,13,7)
B.fTn=new A.r(70,0.6,50)
B.fTo=new A.r(0,3,-6.5)
B.fTp=new A.r(-4,20.4,0)
B.fTq=new A.r(1,1,0.64)
B.fTr=new A.r(-4.6,1.5,-3.6)
B.fTs=new A.r(0,-13.5,-1.5)
B.fTt=new A.r(4,10,3.5)
B.aUd=new A.r(0.95,1.7,0.85)
B.hu=new A.r(1,0,0)
B.fTu=new A.r(1,16,36)
B.fTv=new A.r(1,18,18)
B.aUe=new A.r(1,22,11)
B.fTw=new A.r(1,26,14)
B.fTx=new A.r(1,28,14)
B.aUf=new A.r(1,2,1)
B.aUg=new A.r(1,3,1)
B.a9K=new A.r(1,3,6)
B.fTz=new A.r(1,0.9,0.06)
B.fTA=new A.r(1.2,44,34)
B.fTC=new A.r(200,0,500)
B.fTD=new A.r(200,0,900)
B.fTE=new A.r(200,140,200)
B.fTI=new A.r(1.6,15,1.6)
B.fTJ=new A.r(20,12,14)
B.aUh=new A.r(20,14,7)
B.fTK=new A.r(20,2,2)
B.fTL=new A.r(20,2,8)
B.fTM=new A.r(20,30,26)
B.fTN=new A.r(20,3,14)
B.fTO=new A.r(20,4,26)
B.fTP=new A.r(20,92,26)
B.fTQ=new A.r(216,8,216)
B.fTR=new A.r(22,12,34)
B.fTS=new A.r(22,14,0)
B.fTT=new A.r(22,14,2)
B.fTU=new A.r(22,14,3)
B.fTV=new A.r(22,16,3)
B.fTW=new A.r(22,18,14)
B.fTX=new A.r(22,2,28)
B.fTY=new A.r(22,3,10)
B.fTZ=new A.r(22,3,22)
B.fU_=new A.r(22,4,20)
B.fU0=new A.r(230,330,-210)
B.fU1=new A.r(230,-40,100)
B.fU2=new A.r(240,150,60)
B.fU3=new A.r(244,6,64)
B.fU4=new A.r(140,15,3.6)
B.fU5=new A.r(24,12,34)
B.fU6=new A.r(24,14,22)
B.fU7=new A.r(24,38,0)
B.aUi=new A.r(24,6,14)
B.fU8=new A.r(250,92,6)
B.fU9=new A.r(260,300,-160)
B.fUa=new A.r(262,3,5)
B.fUb=new A.r(262,3,56)
B.fUc=new A.r(26,14,26)
B.fUd=new A.r(26,2,26)
B.aUj=new A.r(26,4,22)
B.fUe=new A.r(26,72,26)
B.fUf=new A.r(26,8,18)
B.fUg=new A.r(26,-34,96)
B.fUi=new A.r(7.4,6,10.4)
B.fUj=new A.r(-0.1,0,0)
B.aUk=new A.r(2,100,90)
B.fUk=new A.r(2,10,2)
B.aUl=new A.r(2,12,60)
B.fUl=new A.r(2,13,2)
B.aUm=new A.r(2,23,12)
B.aUn=new A.r(2,28,22)
B.fUm=new A.r(2,5,1)
B.fUn=new A.r(2,700,900)
B.aUo=new A.r(2,8,2)
B.fUp=new A.r(64,10,-1.4)
B.aUp=new A.r(0,9.4,-1.5)
B.fUq=new A.r(47,48,3.5)
B.fUr=new A.r(19.6,0,-1.5)
B.aUq=new A.r(0,56,1.3)
B.fUs=new A.r(0,15.5,0)
B.fUt=new A.r(3000,0,3000)
B.fUu=new A.r(3000,0,-3000)
B.fUw=new A.r(300,6,3)
B.fUy=new A.r(30,16,30)
B.aUr=new A.r(30,16,72)
B.fUz=new A.r(30,22,0)
B.fUA=new A.r(30,24,8)
B.fUB=new A.r(30,28,18)
B.fUC=new A.r(30,29,0)
B.fUD=new A.r(30,34,40)
B.fUE=new A.r(30,40,100)
B.fUG=new A.r(30,6,12)
B.fUH=new A.r(324,114,6)
B.aUs=new A.r(324,6,10)
B.fUI=new A.r(32,2,20)
B.fUJ=new A.r(33,11,10)
B.fUK=new A.r(34,10,1)
B.fUL=new A.r(34,22,3)
B.aUt=new A.r(34,25,18)
B.fUM=new A.r(34,30,1)
B.aUu=new A.r(34,39,18)
B.aUv=new A.r(34,42,18)
B.fUN=new A.r(34,4,28)
B.aUx=new A.r(34,8,18)
B.fUO=new A.r(-1,-1.7,2.3)
B.fUP=new A.r(366,124,6)
B.aUy=new A.r(366,6,10)
B.fUQ=new A.r(36,22,0)
B.fUR=new A.r(36,30,0)
B.fUS=new A.r(36,30,1)
B.fUT=new A.r(36,4,3)
B.fUU=new A.r(36,60,12)
B.fUV=new A.r(0,93,3.5)
B.fUW=new A.r(37,16,0)
B.fUX=new A.r(37,50,38)
B.fUY=new A.r(38,10,24)
B.fUZ=new A.r(38,20,3)
B.fV_=new A.r(38,2,6)
B.fV0=new A.r(-0.2,-0.3,-0.4)
B.fV1=new A.r(60,62,3.6)
B.fV2=new A.r(0,9.5,-1.5)
B.fV3=new A.r(0,48.6,55)
B.aUz=new A.r(3,12,12)
B.aUA=new A.r(3,14,18)
B.fV4=new A.r(3,16,3)
B.fV6=new A.r(3,22,2)
B.fV7=new A.r(3,26,3)
B.a9L=new A.r(3,3,3)
B.fV8=new A.r(3,42,70)
B.fV9=new A.r(3,46,90)
B.fVa=new A.r(3,5,3)
B.fVc=new A.r(40,12,2)
B.fVd=new A.r(40,16,18)
B.fVe=new A.r(40,1,14)
B.fVf=new A.r(40,28,1)
B.fVg=new A.r(40,2,104)
B.fVh=new A.r(40,2,24)
B.fVi=new A.r(40,30,26)
B.fVj=new A.r(40,60,40)
B.fVk=new A.r(40,80,3)
B.fVl=new A.r(40,8,104)
B.fVm=new A.r(42,2,28)
B.fVn=new A.r(44,10,2)
B.aUC=new A.r(44,2,14)
B.fVo=new A.r(44,3,22)
B.fVp=new A.r(44,72,20)
B.fVq=new A.r(0.9,0,4.4)
B.fVr=new A.r(8.2,1.9,-7.55)
B.fVs=new A.r(46,10,34)
B.fVt=new A.r(46,3,10)
B.fVu=new A.r(46,3,3)
B.fVv=new A.r(48,2,24)
B.fVw=new A.r(120.6,140,-52)
B.fVx=new A.r(0,-47.25,-2.25)
B.fVy=new A.r(-147.6,54,45)
B.fVz=new A.r(0.6,68,0.4)
B.fVA=new A.r(64,49,8.4)
B.fVB=new A.r(1.5,28,120)
B.fVC=new A.r(0,1.59,0.14)
B.fVD=new A.r(4,108,0)
B.fVE=new A.r(4,80,104)
B.fVF=new A.r(4,96,0)
B.fVG=new A.r(0,-3.4,1)
B.fVH=new A.r(25,79,1.4)
B.fVI=new A.r(1,0,-1.2)
B.fVJ=new A.r(0.6,4,2.4)
B.fVK=new A.r(50,12,32)
B.fVL=new A.r(50,1,2)
B.fVM=new A.r(50,28,42)
B.fVN=new A.r(50,4,28)
B.fVO=new A.r(51,7,33)
B.fVP=new A.r(52,10,22)
B.fVQ=new A.r(52,56,1)
B.fVR=new A.r(54,5,18)
B.fVU=new A.r(56,18,18)
B.fVV=new A.r(56,2,36)
B.fVW=new A.r(56,3,32)
B.fVX=new A.r(56,3,48)
B.fVY=new A.r(58,0,30)
B.fVZ=new A.r(58,14,9)
B.fW_=new A.r(58,64,22)
B.fW0=new A.r(58,92,30)
B.fW1=new A.r(58,96,30)
B.fW2=new A.r(58,9,74)
B.fW3=new A.r(0,-0.8,0.9)
B.fW4=new A.r(11.9,0,-8)
B.fW5=new A.r(20,7,34.4)
B.fW6=new A.r(-47,48,3.5)
B.aUD=new A.r(1.6,1.6,0.4)
B.fW8=new A.r(0.16,0.32,0.07)
B.fW9=new A.r(5,10,5)
B.aUE=new A.r(5,12,26)
B.fWa=new A.r(5,17,2)
B.fWb=new A.r(5,1,2)
B.fWc=new A.r(5,34,24)
B.fWd=new A.r(5,5,5)
B.fWe=new A.r(5,6,10)
B.fWf=new A.r(5,6,3)
B.fWg=new A.r(5,9,8)
B.fWh=new A.r(-120.1,150,0)
B.fWi=new A.r(0,14.3,-1.5)
B.fWj=new A.r(0,0,3.2)
B.aUF=new A.r(-13,8.6,-9.5)
B.fWk=new A.r(60,12,56)
B.fWl=new A.r(60,12,80)
B.fWm=new A.r(60,16,28)
B.fWn=new A.r(60,30,3)
B.fWp=new A.r(620,300,270)
B.fWq=new A.r(62,11,0)
B.fWr=new A.r(62,18,20)
B.fWs=new A.r(62,22,6)
B.fWt=new A.r(62,5,0)
B.fWu=new A.r(632,10,282)
B.fWv=new A.r(640,8,290)
B.fWw=new A.r(64,10,0)
B.fWz=new A.r(14,9,0.5)
B.aUG=new A.r(6,14,20)
B.aUH=new A.r(6,14,32)
B.fWA=new A.r(6,28,6)
B.fWB=new A.r(6,4,4)
B.fWC=new A.r(6,6,6)
B.fWE=new A.r(-150.6,70,160)
B.fWF=new A.r(0,-0.2,0.14)
B.fWH=new A.r(120.6,140,-8)
B.fWI=new A.r(0.3,38,2)
B.fWK=new A.r(700,430,1150)
B.fWL=new A.r(70,175,-45)
B.fWM=new A.r(70,194,-45)
B.fWN=new A.r(70,6,36)
B.fWO=new A.r(720,100,105)
B.fWP=new A.r(720,360,320)
B.fWQ=new A.r(72,32,3)
B.fWR=new A.r(72,-17,70)
B.fWS=new A.r(12,5,0.4)
B.fWT=new A.r(74,20,5)
B.fWU=new A.r(76,2,90)
B.fWV=new A.r(76,8,3)
B.fWW=new A.r(34,30,0.6)
B.fWX=new A.r(1.6,1.7,3.6)
B.fWZ=new A.r(-72.8,0,55)
B.fX_=new A.r(-146.4,15,84)
B.fX1=new A.r(25,79,0.2)
B.fX2=new A.r(7,0,-8)
B.fX3=new A.r(7,18,10)
B.fX4=new A.r(7,27,10)
B.fX5=new A.r(7,2,7)
B.aUI=new A.r(7,3,0)
B.fX6=new A.r(7,6,3)
B.fX7=new A.r(7,8,3)
B.aUJ=new A.r(7,96,7)
B.fX8=new A.r(2200,0.4,560)
B.fXa=new A.r(0,11,9.2)
B.fXb=new A.r(-3.2,1.3,-7.82)
B.fXc=new A.r(20,0.8,12)
B.fXd=new A.r(80,16,32)
B.fXe=new A.r(80,26,8)
B.fXf=new A.r(80,38,26)
B.fXh=new A.r(80,4,14)
B.fXi=new A.r(80,6,32)
B.aUK=new A.r(147,1.5,3.5)
B.fXj=new A.r(82,46,3)
B.aUL=new A.r(-6.5,6.9,-3)
B.fXk=new A.r(84,10,38)
B.fXl=new A.r(84,18,38)
B.fXm=new A.r(84,84,120)
B.fXn=new A.r(84,8,36)
B.fXo=new A.r(0.93,0.92,1)
B.fXp=new A.r(4.6,4.2,9.5)
B.fXq=new A.r(88,24,28)
B.fXr=new A.r(88,84,3)
B.fXs=new A.r(0.4,6,8)
B.fXt=new A.r(0,-48.6,55)
B.fXu=new A.r(2.6,2,2.6)
B.fXv=new A.r(5.5,8.5,3)
B.fXw=new A.r(0,0,0.26)
B.fXx=new A.r(120.6,96,-52)
B.fXy=new A.r(8,18,8)
B.aUM=new A.r(8,2,16)
B.fXz=new A.r(8,2,6)
B.aUN=new A.r(8,2,8)
B.fXA=new A.r(8,6,6)
B.fXB=new A.r(8,8,12)
B.fXC=new A.r(8,9,8)
B.fXD=new A.r(8,9,9)
B.fXE=new A.r(-140,62,3.6)
B.fXG=new A.r(15,19,0.5)
B.fXH=new A.r(900,2,700)
B.fXJ=new A.r(92,2,32)
B.fXK=new A.r(95,26,1)
B.fXL=new A.r(95,50,6)
B.fXM=new A.r(96,14,38)
B.fXN=new A.r(0.4,0.38,0.12)
B.fXO=new A.r(0,0,-0.43)
B.aUO=new A.r(11.2,4.5,-6)
B.aUP=new A.r(1.2,96,112)
B.aUQ=new A.r(0.08,3.8,2.4)
B.aUR=new A.r(9,1,9)
B.fXP=new A.r(9,40,4)
B.fXQ=new A.r(9,5,9)
B.fXR=new A.r(0,70,-0.6)
B.fXS=new A.r(-34.6,86,69)
B.fXT=new A.r(-3.5,26,15)
B.fXU=new A.r(34,6,0.6)
B.fXV=new A.r(1.5,1.3,0.6)
B.fXW=new A.r(-120.6,96,-8)
B.fXY=new A.r(0,-1.78,0.27)
B.aUS=new A.r(1.2,9,1.2)
B.fXZ=new A.r(0,0.62,0)
B.fY_=new A.r(5.5,1.4,12)
B.fY0=new A.r(-50,0.6,50)
B.fY3=new A.r(20,11.5,0)
B.fY4=new A.r(20,66,1.4)
B.fY5=new A.r(3.2,0.12,-6.7)
B.fY6=new A.r(12,0,-8.1)
B.fY8=new A.r(-34.6,86,7)
B.aUT=new A.r(0,0,3.4)
B.fY9=new A.r(1.25,0.28,0.1)
B.fYa=new A.r(100,38,0.7)
B.fYb=new A.r(0,36,10.2)
B.fYc=new A.r(24,0.08,16)
B.fYd=new A.r(34,1.4,1.4)
B.fYf=new A.r(0,4,-7.9)
B.fYg=new A.r(11.9,0,8)
B.fYh=new A.r(0,41.5,-4.9)
B.fYi=new A.r(-26,146,0.6)
B.aUU=new A.r(0.8,1.7,0.78)
B.fYk=new A.r(21,1.4,8)
B.fYl=new A.r(0.8,0.8,1.6)
B.fYm=new A.r(1.4,1,1)
B.fYn=new A.r(30,36,0.8)
B.fYp=new A.r(71.2,46.6,55)
B.fYq=new A.r(3,3.28,-7.2)
B.fYr=new A.r(1.4,0.3,1)
B.fYs=new A.r(0,42,1.5)
B.fYt=new A.r(-6.1,1.2,-6.4)
B.fYu=new A.r(1.4,26,0.4)
B.fYv=new A.r(76,0.6,4)
B.fYx=new A.r(26,0.3,130)
B.fYy=new A.r(0,-45.5,0.5)
B.fYz=new A.r(1.8,4,1)
B.fYA=new A.r(5,1.6,0.5)
B.fYC=new A.r(18,10,0.6)
B.fYD=new A.r(0,11,8.5)
B.fYE=new A.r(0.1,-2,2.4)
B.fYF=new A.r(302.4,1.2,322)
B.fYG=new A.r(-1,33.4,-4.9)
B.fYH=new A.r(0,0.2,2.8)
B.fYI=new A.r(6,10,1.4)
B.fYK=new A.r(24,32,0.8)
B.fYL=new A.r(0,10,5.2)
B.fYM=new A.r(0,-1.2,4.7)
B.fYN=new A.r(18.9,2.6,0)
B.fYO=new A.r(-2200,0.4,720)
B.fYP=new A.r(66,89,3.8)
B.fYQ=new A.r(-12,0,-8.1)
B.fYR=new A.r(3,11,0.5)
B.fYS=new A.r(0,70,320.6)
B.fYT=new A.r(11.8,4,0)
B.fYU=new A.r(0.97,0.18,2.25)
B.fYV=new A.r(58,96,31.7)
B.fYW=new A.r(14,20,1.2)
B.aUV=new A.r(-71.7,6,55)
B.fYY=new A.r(64,57,8.4)
B.fYZ=new A.r(5.6,0.3,1.9)
B.fZ1=new A.r(52,8,0.4)
B.fZ2=new A.r(0,14,51.2)
B.fZ3=new A.r(4.6,7.6,3)
B.fZ4=new A.r(-1,0,-1.2)
B.fZ5=new A.r(0,1.7,0)
B.fZ7=new A.r(-1,0,1.5)
B.fZ8=new A.r(27,19,0.4)
B.fZ9=new A.r(90,2,0.5)
B.fZa=new A.r(-17,98,77.2)
B.fZb=new A.r(5,8,0.4)
B.fZc=new A.r(0,98,6.6)
B.fZd=new A.r(5,14,8.5)
B.fZe=new A.r(5,2.2,0.8)
B.fZf=new A.r(-120.6,140,-52)
B.fZg=new A.r(-2200,0.4,560)
B.fZh=new A.r(0.18,0.12,0.08)
B.fZi=new A.r(50,0.6,50)
B.fZj=new A.r(147,3,1.4)
B.fZk=new A.r(20,0.6,50)
B.fZl=new A.r(0,6.6,0)
B.fZm=new A.r(4,16.2,0)
B.fZn=new A.r(60,0.4,12)
B.fZo=new A.r(10,15,0.5)
B.fZp=new A.r(144,5,0.7)
B.fZq=new A.r(1.2,-1.7,2.3)
B.fZr=new A.r(31.5,23,0)
B.fZs=new A.r(0,0.9,0)
B.fZt=new A.r(2.4,2.4,70)
B.fZu=new A.r(-120.6,140,-8)
B.fZw=new A.r(-146.4,15,172)
B.fZx=new A.r(0.82,1.7,0.3)
B.fZy=new A.r(47,7,34.4)
B.fZz=new A.r(-0.12,0,0)
B.fZB=new A.r(3.5,94,0.2)
B.fZC=new A.r(1.1,2.05,0.04)
B.fZD=new A.r(25,79,1.2)
B.fZE=new A.r(1.12,0.78,0.76)
B.fZF=new A.r(1.2,3.6,18)
B.fZG=new A.r(10,14,0.5)
B.fZH=new A.r(0,138.8,95)
B.fZI=new A.r(0,35.5,-4.9)
B.fZJ=new A.r(5,8,0.5)
B.fZK=new A.r(1.1,0.5,0.7)
B.fZL=new A.r(-20,11.5,0)
B.fZM=new A.r(0,1.1,0)
B.fZN=new A.r(0,-0.5,0.6)
B.fZO=new A.r(32,6,0.5)
B.fZP=new A.r(0,9.8,-1.5)
B.fZQ=new A.r(0,1.4,0)
B.fZS=new A.r(1,3,0.8)
B.fZT=new A.r(0,3.4,0.8)
B.fZV=new A.r(0.1,0.1,0.1)
B.fZW=new A.r(0,-0.6,38)
B.fZX=new A.r(-0.85,4,-3.2)
B.fZZ=new A.r(-7.1,19,4)
B.h__=new A.r(0,58,-14.2)
B.h_0=new A.r(40,7.2,1.2)
B.aUW=new A.r(0.42,0.34,0.12)
B.h_1=new A.r(1.7,0.08,1.2)
B.h_2=new A.r(0,0,0.38)
B.h_4=new A.r(5.2,3.9,-7.76)
B.h_6=new A.r(146.2,52,120)
B.h_7=new A.r(30,22,0.8)
B.h_8=new A.r(2.6,0.45,0.5)
B.h_9=new A.r(0.07,0.3,0.03)
B.h_b=new A.r(41.5,11,12)
B.h_c=new A.r(36.2,60,38)
B.h_e=new A.r(20,1.4,8)
B.h_f=new A.r(75.4,24,0)
B.h_g=new A.r(0,-0.2,0.19)
B.h_h=new A.r(-20,0.6,-50)
B.h_j=new A.r(1.2,49,36)
B.h_k=new A.r(0,9.3,0)
B.h_m=new A.r(9,12,0.6)
B.h_n=new A.r(0,-0.6,160)
B.aUX=new A.r(1.4,3,1.6)
B.h_o=new A.r(0,40,0.95)
B.h_p=new A.r(11,3,0.5)
B.h_q=new A.r(34.6,34,7)
B.h_r=new A.r(190,0.6,90)
B.h_t=new A.r(0,-1.9,-1.2)
B.h_u=new A.r(-3.2,1.15,-7.78)
B.h_v=new A.r(0,-3.4,1.2)
B.h_w=new A.r(64,10,0.2)
B.h_x=new A.r(0,-1.78,0.53)
B.h_y=new A.r(0.8,2.6,0.3)
B.aUY=new A.r(-6.5,7.4,-3)
B.h_z=new A.r(0,76,1.1)
B.h_A=new A.r(-4.6,-2,1.2)
B.h_C=new A.r(0,40,1.4)
B.aV_=new A.r(0.6,32,34)
B.h_D=new A.r(-3,36,10.6)
B.h_E=new A.r(0,14.5,-1.5)
B.h_G=new A.r(0,0.2,0)
B.h_I=new A.r(2.5,30,2.5)
B.h_J=new A.r(160,1.2,120)
B.h_K=new A.r(7,40,2.4)
B.h_L=new A.r(30,26,0.6)
B.h_M=new A.r(3.4,3.25,-7.85)
B.h_N=new A.r(1.12,0.5,0.62)
B.h_O=new A.r(72.8,0,55)
B.h_P=new A.r(0.5,62,30)
B.h_Q=new A.r(0,76,37.8)
B.h_R=new A.r(146.4,62,120)
B.h_S=new A.r(34.6,86,7)
B.h_T=new A.r(2.2,1.1,6.4)
B.h_U=new A.r(17,98,77.2)
B.h_V=new A.r(3,1.55,-7.1)
B.h_W=new A.r(0.4,3,3)
B.aV1=new A.r(0,-0.1,0.1)
B.h_X=new A.r(-52,96,-60.6)
B.h_Y=new A.r(0,0,0.04)
B.h0_=new A.r(0,14,-19.3)
B.h00=new A.r(2.4,11.6,-3.6)
B.h01=new A.r(4,11,3.5)
B.h03=new A.r(5,8.6,-2.25)
B.h04=new A.r(0,-1.78,0.3)
B.h05=new A.r(2.2,2.2,1.8)
B.h06=new A.r(0,1.9,-1.2)
B.h07=new A.r(0,56,2.1)
B.h08=new A.r(0.26,0.04,0.02)
B.h09=new A.r(-2.4,11.6,-3.6)
B.h0a=new A.r(11.25,0,-2.25)
B.h0b=new A.r(1,-1.8,2.4)
B.h0c=new A.r(-26,43,3.8)
B.h0d=new A.r(-60,15,3.6)
B.h0e=new A.r(20,0.6,-50)
B.h0f=new A.r(-11.8,4,0)
B.h0g=new A.r(1.2,4,7)
B.h0h=new A.r(11.2,4.7,-6)
B.h0i=new A.r(66,43,3.8)
B.aV2=new A.r(0,2.8,0)
B.h0j=new A.r(24,8,0.05)
B.aV3=new A.r(86,52,1.4)
B.h0l=new A.r(0.12,0,0)
B.h0m=new A.r(1.1,1.1,0.03)
B.h0n=new A.r(-50,0.6,-50)
B.h0o=new A.r(-26,94,0.6)
B.h0p=new A.r(0,32,320.9)
B.h0q=new A.r(0,5,1.1)
B.h0r=new A.r(4.6,5.4,3.2)
B.h0s=new A.r(3.4,3.55,-7.85)
B.h0u=new A.r(71.6,-22,62)
B.h0v=new A.r(0,3,1.2)
B.h0w=new A.r(22,18,0.4)
B.h0x=new A.r(-20,0.6,50)
B.h0z=new A.r(1,1,0.62)
B.aV4=new A.r(1.5,18,3.5)
B.h0B=new A.r(3.5,3.1,-7.15)
B.h0C=new A.r(0,1.5,-0.9)
B.h0D=new A.r(-0.28,0.55,-0.8)
B.h0E=new A.r(0,-0.2,0.24000000000000002)
B.h0G=new A.r(0,-3.3,4)
B.h0H=new A.r(46,0.8,46)
B.h0I=new A.r(1,-0.2,0.14)
B.h0J=new A.r(0,137,1.6)
B.aV5=new A.r(84,3,0.5)
B.h0K=new A.r(-1.9,0,-2.25)
B.h0L=new A.r(0,-0.9,1.1)
B.h0M=new A.r(8.2,1.05,-6.7)
B.h0N=new A.r(0,9.6,11.6)
B.h0P=new A.r(34.6,34,69)
B.h0R=new A.r(-149.3,38,128)
B.h0S=new A.r(0.07,0.4,0.03)
B.h0T=new A.r(2,3.8,0.08)
B.h0U=new A.r(31,83,0.9)
B.h0V=new A.r(64,40,-3.2)
B.h0W=new A.r(0.95,0.62,2.2)
B.aV6=new A.r(1.4,3,112)
B.h0X=new A.r(1,33.4,-4.9)
B.h0Y=new A.r(0,0.3,314)
B.aV7=new A.r(302.4,140,1.2)
B.h0Z=new A.r(0,46.6,0.8)
B.h10=new A.r(6.5,6.4,13)
B.h11=new A.r(0,0,-8.8)
B.h12=new A.r(0,0.7,-1)
B.h15=new A.r(-11.9,0,8)
B.h16=new A.r(7,0,1.5)
B.h17=new A.r(-8.4,0.7,-6.4)
B.h18=new A.r(-3.2,1.45,-7.78)
B.h19=new A.r(34,25,21.6)
B.h1a=new A.r(0,41,0.45)
B.h1b=new A.r(-6.575,0,-0.25)
B.aV9=new A.r(0,0,-2.3)
B.a9N=new A.r(-13,12.5,0)
B.h1e=new A.r(0,0,0.62)
B.h1f=new A.r(-60,62,3.6)
B.h1g=new A.r(0.2,-0.3,-0.4)
B.aVa=new A.r(10.85,18,0.5)
B.h1h=new A.r(120.1,174,-30)
B.h1i=new A.r(0.6,70,0.6)
B.h1j=new A.r(1.4,1.3,0.02)
B.h1k=new A.r(30,1.4,0.4)
B.h1l=new A.r(6.3,1.5,-7.2)
B.h1m=new A.r(8,14,1.2)
B.h1n=new A.r(-120.1,150,-60)
B.h1o=new A.r(0,5,11.2)
B.aVb=new A.r(0,0.62,2.85)
B.h1p=new A.r(37.5,23,0)
B.aVc=new A.r(0.05,8,16)
B.h1q=new A.r(0,-1.2,5)
B.h1r=new A.r(0.2,-2,2.6)
B.h1u=new A.r(11.2,2.4,-5.18)
B.h1w=new A.r(-1,-0.2,0.14)
B.h1x=new A.r(-17,83,77.2)
B.h1y=new A.r(0.5,8,6)
B.h1z=new A.r(1.2,1.2,0.3)
B.aVe=new A.r(2,0.08,2.4)
B.h1B=new A.r(9.5,13.5,1.4)
B.h1C=new A.r(2.2,18,2.2)
B.h1D=new A.r(22,0.2,0.8)
B.h1E=new A.r(-0.32,0,0.5)
B.aVf=new A.r(1.3,4,0.8)
B.h1G=new A.r(-26,89,3.8)
B.h1H=new A.r(-120.1,174,-30)
B.h1I=new A.r(1,0.8,0.95)
B.h1J=new A.r(0.8,0.55,0.05)
B.h1K=new A.r(0.14,0.35,17)
B.h1L=new A.r(1.4,2.4,0.3)
B.h1M=new A.r(0,11,8.2)
B.h1N=new A.r(52,96,-60.6)
B.h1O=new A.r(26,146,0.6)
B.h1P=new A.r(3.2,5,0.8)
B.h1Q=new A.r(0,24,-0.6)
B.h1R=new A.r(40,1.6,14)
B.h1U=new A.r(150,0.6,90)
B.h1V=new A.r(0,11.5,19.3)
B.h1W=new A.r(0,1.95,0.31)
B.h1X=new A.r(150,1.2,112)
B.aVg=new A.r(0.75,4.5,0.1)
B.h1Z=new A.r(0.12,0,0.05)
B.h20=new A.r(-34.6,34,69)
B.h21=new A.r(-11.5,4,-1.5)
B.h22=new A.r(9,1.2,9)
B.h23=new A.r(120.1,150,-60)
B.h24=new A.r(0,-0.5,0)
B.h27=new A.r(0,37.5,-4.9)
B.h28=new A.r(-2.4,14,8)
B.h29=new A.r(-190,160,-14.2)
B.h2a=new A.r(0,0,3.6)
B.h2b=new A.r(3,14,1.5)
B.h2c=new A.r(5.5,8.5,0.5)
B.aVh=new A.r(0.05,8,9.6)
B.h2e=new A.r(1.5,94,3.5)
B.h2f=new A.r(0,8.2,0)
B.h2g=new A.r(-120.6,96,-52)
B.h2i=new A.r(4,94,0.4)
B.aVi=new A.r(1.4,8,1)
B.h2j=new A.r(120.6,96,-8)
B.h2k=new A.r(114,30,0.4)
B.h2l=new A.r(3.7,1.2,-7.1)
B.h2m=new A.r(1.5,1.35,1.5)
B.h2n=new A.r(8.2,0.05,-6.7)
B.h2o=new A.r(0,-0.3,0)
B.h2p=new A.r(6.575,0,-0.25)
B.aVj=new A.r(150.6,70,160)
B.h2q=new A.r(52,140,-60.6)
B.aVk=new A.r(0,1.8,0)
B.h2r=new A.r(3,3.21,-7.2)
B.h2s=new A.r(100,14,0.6)
B.h2t=new A.r(9,5,0.6)
B.h2v=new A.r(26,94,0.6)
B.h2w=new A.r(9.8,5,-7.75)
B.aVl=new A.r(0,2.4,0)
B.h2x=new A.r(1.5,3.5,112)
B.h2y=new A.r(-8,31.5,6)
B.h2A=new A.r(22,7,34.4)
B.h2B=new A.r(0,9.6,-1.5)
B.h2C=new A.r(3,1.85,-7.1)
B.h2E=new A.r(40,1.4,60)
B.h2H=new A.r(16,0.4,16)
B.a9P=new A.r(13,12.5,0)
B.h2J=new A.r(0.34,0.66,0.9)
B.h2L=new A.r(0.9,1.08,0.98)
B.h2M=new A.r(12,0.4,6)
B.h2N=new A.r(-6.5,7.9,-3)
B.h2O=new A.r(1.5,1.5,0.05)
B.h2P=new A.r(-6.5,5,-3)
B.h2Q=new A.r(58.4,1.6,50)
B.h2R=new A.r(16,22,0.6)
B.h2S=new A.r(0.02,0.28,0.05)
B.h2U=new A.r(0,0.7,1)
B.h2V=new A.r(26,22,1.4)
B.h2W=new A.r(0,9.5,-7)
B.aVn=new A.r(13,8.6,9.5)
B.h2X=new A.r(-140,15,3.6)
B.h2Y=new A.r(5,5,0.8)
B.h2Z=new A.r(-3.6,4,-7.76)
B.h3_=new A.r(0.82,0.9,0.05)
B.h30=new A.r(0,-5.5,-0.25)
B.h31=new A.r(0,11,21.2)
B.h33=new A.r(34.6,86,69)
B.h34=new A.r(64,50,6.6)
B.h35=new A.r(-34,40,36.4)
B.h36=new A.r(2.2,1.8,2)
B.h38=new A.r(190,160,-14.2)
B.h3a=new A.r(0,0.6,0)
B.h3d=new A.r(1.9,0,0)
B.h3e=new A.r(0.45,0.72,0.06)
B.h3f=new A.r(95,26,1.8)
B.h3h=new A.r(14,0.4,7)
B.h3i=new A.r(64,24,-3.2)
B.a9Q=new A.r(1.2,140,320)
B.h3j=new A.r(1,4.5,0.8)
B.h3k=new A.r(0,9.2,0)
B.h3l=new A.r(120.1,150,0)
B.h3m=new A.r(0,0.03,0)
B.h3n=new A.r(-100,100,320)
B.h3p=new A.r(-100,400,350)
B.h3q=new A.r(-10,22,0)
B.h3t=new A.r(-110,96,120)
B.h3u=new A.r(-112,38,24)
B.h3v=new A.r(-120,0,-30)
B.h3w=new A.r(-120,300,-320)
B.h3x=new A.r(-125,16,30)
B.h3y=new A.r(-13,15,2)
B.h3z=new A.r(-144,82,45)
B.h3A=new A.r(-147,54,45)
B.h3B=new A.r(-148,56,120)
B.h3C=new A.r(-14,17,4)
B.h3D=new A.r(-14,20,-28)
B.h3E=new A.r(-18,6,0)
B.qD=new A.r(-1,0,0)
B.h3F=new A.r(-1,0,-8)
B.h3G=new A.r(-200,0,500)
B.h3H=new A.r(-200,0,900)
B.h3I=new A.r(-200,100,480)
B.h3K=new A.r(-20,4,26)
B.h3L=new A.r(-20,92,26)
B.h3M=new A.r(-22,14,0)
B.h3N=new A.r(-24,38,0)
B.h3O=new A.r(-260,330,-80)
B.h3P=new A.r(-3000,0,3000)
B.h3Q=new A.r(-3000,0,-3000)
B.h3T=new A.r(-30,36,38)
B.h3U=new A.r(-30,40,100)
B.h3V=new A.r(-30,44,33)
B.h3X=new A.r(-330,40,760)
B.h3Y=new A.r(-34,34,38)
B.h3Z=new A.r(-34,40,38)
B.h4_=new A.r(-37,16,0)
B.h40=new A.r(-37,50,38)
B.h41=new A.r(-380,470,1300)
B.h42=new A.r(-390,144,-120)
B.h43=new A.r(-390,70,-120)
B.h44=new A.r(-40,12,150)
B.h45=new A.r(-40,30,164)
B.h47=new A.r(-42,-34,96)
B.h48=new A.r(0,-0.6,22)
B.h49=new A.r(-4,20,0)
B.h4a=new A.r(-4,22,150)
B.aVo=new A.r(-4,22,8)
B.h4d=new A.r(-5,17,0)
B.h4e=new A.r(0,36.5,0)
B.h4f=new A.r(-60,28,56)
B.h4i=new A.r(-60,50,1)
B.h4j=new A.r(-60,70,6)
B.h4k=new A.r(-700,430,1150)
B.h4m=new A.r(-70,0,34)
B.h4n=new A.r(-70,95,34)
B.h4o=new A.r(-70,96,34)
B.h4p=new A.r(-720,360,320)
B.h4q=new A.r(-72,6,55)
B.h4r=new A.r(-80,12,30)
B.h4s=new A.r(-80,25,30)
B.h4w=new A.r(-8,24,0)
B.h4x=new A.r(-8,25,0)
B.h4y=new A.r(-8,42,-5)
B.h4z=new A.r(-8,-28,104)
B.h4A=new A.r(-8,-39,96)
B.h4C=new A.r(0,0.35,0.78)
B.h4D=new A.r(0.6,6,14)
B.h4E=new A.r(-11.9,0,-8)
B.h4F=new A.r(32,3,0.5)
B.h4G=new A.r(38,1.4,12)
B.h4H=new A.r(25,0.5,66)
B.h4I=new A.r(-8.4,1.9,-7.2)
B.h4J=new A.r(1.6,8,5)
B.h4K=new A.r(0.8,1.6,1.4)
B.h4L=new A.r(0.85,1.15,0.9)
B.h4N=new A.r(25,6,0.2)
B.aVp=new A.r(1.25,1,0.1)
B.h4O=new A.r(11.2,0,-6)
B.h4P=new A.r(-146.4,62,172)
B.h4Q=new A.r(0.4,7,9)
B.h4R=new A.r(1.2,1.1,0.8)
B.h4T=new A.r(150,49,1.2)
B.h4U=new A.r(41.5,11,-12)
B.h4V=new A.r(62,0.2,42)
B.h4W=new A.r(4.6,1.5,-3.6)
B.h4X=new A.r(0,-0.7,0.8)
B.h4Y=new A.r(0.6,9,9)
B.h4Z=new A.r(8.9,1.9,0.9)
B.h5_=new A.r(42,84,1.2)
B.h50=new A.r(-34.6,34,7)
B.h51=new A.r(60,15,3.6)
B.aVq=new A.r(1.6,58,66)
B.h52=new A.r(0,-1.55,-0.6)
B.h53=new A.r(36.2,32.2,0.6)
B.h54=new A.r(1.78,4.25,0.08)
B.h55=new A.r(27,0.6,19)
B.h56=new A.r(1.4,52,96)
B.h57=new A.r(0,5.5,-0.25)
B.h58=new A.r(28,2.5,26)
B.h59=new A.r(0,0.7,0)
B.h5a=new A.r(-1.2,-1.6,2.2)
B.h5b=new A.r(11,25,0.3)
B.h5c=new A.r(17,83,77.2)
B.aVr=new A.r(-12,14,19.4)
B.aVs=new A.r(13,8.6,-9.5)
B.aVt=new A.r(0.05,0.12,0.03)
B.aVu=new A.r(8.2,0.95,-6.7)
B.h5d=new A.r(40,1.2,22)
B.h5e=new A.r(0.7,1.5,-7.2)
B.h5f=new A.r(0,15.3,-3.6)
B.h5g=new A.r(62,2.4,8)
B.h5h=new A.r(-1.6,11,6)
B.h5i=new A.r(0.1,0,0)
B.h5j=new A.r(0.32,0,0.5)
B.h5k=new A.r(2200,0.4,720)
B.h5l=new A.r(1.6,11,6)
B.h5m=new A.r(-10,0.5,150)
B.h5n=new A.r(1.1,0.8,0.6)
B.h5p=new A.r(-60,50,1.8)
B.h5q=new A.r(-0.9,0,4.4)
B.h5r=new A.r(-6.5,7.2,-3)
B.h5t=new A.r(300,6,1.6)
B.h5u=new A.r(6.2,0.18,2.1)
B.h5v=new A.r(76,64,0.6)
B.h5w=new A.r(7.1,18,-3)
B.h5y=new A.r(74,1.2,90)
B.h5z=new A.r(36,1.6,12)
B.h5A=new A.r(15.5,2.6,0)
B.h5C=new A.r(-8,-47.8,70)
B.h5D=new A.r(14,1.5,3.5)
B.aVv=new A.r(17,24,0.3)
B.h5E=new A.r(5.2,3.9,-7.82)
B.h5F=new A.r(0,0.7,2.4)
B.h5G=new A.r(0,0.3,0)
B.aVw=new A.r(2.3,7,0.5)
B.h5I=new A.r(0,66,1.8)
B.aVx=new A.r(-13,8.6,9.5)
B.h5L=new A.r(0.6,28,52)
B.h5M=new A.r(6.5,6,14)
B.h5N=new A.r(0,-1.99,0.14)
B.h5O=new A.r(0.4,36,34)
B.h5Q=new A.r(4.6,-2,1.2)
B.h5R=new A.r(11.5,4,-1.5)
B.h5S=new A.r(0,14,19.3)
B.aVy=new A.r(0,0,-2.4)
B.h5T=new A.r(-36.2,60,38)
B.h5U=new A.r(110,18,0.6)
B.h5V=new A.r(0,-1.78,0.52)
B.h5W=new A.r(0.12,0.1,0.03)
B.h5X=new A.r(9.8,5,-7.58)
B.h5Y=new A.r(14,1.5,5)
B.aVz=new A.r(0.5,1.4,2)
B.h5Z=new A.r(3.5,0.15,-7.2)
B.aVA=new A.r(64,2,1.2)
B.h6_=new A.r(1.2,26.4,20)
B.h60=new A.r(-3.6,4,-7.82)
B.h61=new A.r(-3,37,-4.9)
B.h62=new A.r(0.3,2,36)
B.h65=new A.r(24,0.8,6.5)
B.h66=new A.r(-28,76,38.3)
B.h68=new A.r(22,0.5,5)
B.h69=new A.r(9,10,0.6)
B.h6a=new A.r(0,22,2.1)
B.h6d=new A.r(0,56,0.5)
B.h6e=new A.r(150,1.2,70)
B.h6f=new A.r(58,104,31.7)
B.h6g=new A.r(100,52,2.4)
B.h6h=new A.r(2.1,0.4,0.5)
B.h6i=new A.r(0,14.7,-1.5)
B.aVB=new A.r(0.4,29,31)
B.h6j=new A.r(-19.5,-1,-1.5)
B.h6k=new A.r(80,0.5,60)
B.h6l=new A.r(6.85,4,-3.2)
B.h6m=new A.r(52,58,0.6)
B.h6n=new A.r(0,14.4,0)
B.aVD=new A.r(0.12,3,1.9)
B.h6o=new A.r(0.06,0.62,0.8)
B.h6p=new A.r(0,18.5,0)
B.h6q=new A.r(50,0.6,-50)
B.h6s=new A.r(9.55,5.7,-7.5)
B.h6u=new A.r(-400,80,-19.2)
B.h6v=new A.r(0.8,2.4,0.3)
B.aVE=new A.r(0,0.7,2)
B.h6w=new A.r(3.5,26,15)
B.aVF=new A.r(0,24,40.2)
B.h6x=new A.r(0.8,1.1,1.2)
B.h6y=new A.r(0,51.5,20)
B.h6z=new A.r(-20,0.5,145)
B.h6A=new A.r(2.4,14,8)
B.h6B=new A.r(0,47.25,-2.25)
B.h6C=new A.r(-8,31.5,-6)
B.h6D=new A.r(0.5,0.5,0.04)
B.h6E=new A.r(12.5,39,0.6)
B.h6F=new A.r(140,62,3.6)
B.h6G=new A.r(0,3,0.9)
B.h6H=new A.r(9,0.7,15)
B.h6I=new A.r(3,36,10.6)
B.h6J=new A.r(25,10,0.2)
B.h6L=new A.r(0.14,8,0.3)
B.h6M=new A.r(1.9,0.05,1.35)
B.h6P=new A.r(0.6,0.12,0.03)
B.h6Q=new A.r(-10.7,1.2,-6.4)
B.h6R=new A.r(-52,140,-60.6)
B.h6S=new A.r(-71.2,46.6,55)
B.h6T=new A.r(5,4.5,3)
B.h6U=new A.r(120,36,1.4)
B.h6V=new A.r(0,3.7,2.6)
B.UT=new A.Fz(0,"hot")
B.UU=new A.Fz(1,"neutral")
B.UV=new A.Fz(2,"ground")
B.aVT=new A.Fz(3,"unknown")
B.eHi=new C.z(-20,46)
B.hax=new A.Ar(B.eHi,0,2.4,"Having the drink",!0,!1,!1,"")
B.eqc=new C.z(34,62)
B.hay=new A.Ar(B.eqc,3.141592653589793,2.2,"Picking up the remote",!1,!0,!1,"")
B.haG=new A.aAP(null)
B.hll=new A.eTo(0,"material")})();(function staticFields(){$.dP=0
$.aiR=!1
$.aiS=!0
$.h6c=!1
$.fUo=C.U(x.N,C.ax("Ml"))
$.fUn=C.U(x.N,C.ax("aA<Ml?>"))
$.i_w=C.U(x.N,C.ax("ai<+(r,r)>"))
$.i_u=C.U(x.N,x.dg)
$.hlW=C.U(x.N,C.ax("l3"))
$.ajr=null
$.DS=null
$.VL=null
$.hcj=null
$.ahe="xbot"})();(function lazyInitializers(){var w=a.lazyFinal
w($,"ijG","htV",()=>C.fU7())
w($,"ieA","hrq",()=>new A.aSp($.aw()))
w($,"imd","bDR",()=>{var v,u,t=C.ax("O<aSo>"),s=C.a([],t)
for(v=0;v<2;++v){u=v*9
D.d.v(s,C.a([A.fTz(v,175,u),A.fTz(v,612,u+14),A.fTz(v,1013,u+7)],t))}return s})
w($,"ilQ","fSJ",()=>C.a([A.hhm(-80,80,400,565),A.hhm(-80,80,715,885)],C.ax("O<bvy>")))
w($,"ieB","aQr",()=>A.hxg())
w($,"imc","hvj",()=>{var v=C.a([A.vF("Wire a standard 120 volt receptacle: black to brass, white to silver, bare copper to green.",B.R3,B.dlx,"outlet","",!0,B.HW,B.cUb,!1,"Wall outlet",new A.fvg()),A.vF("A single-pole switch breaks the hot wire to the light: two black wires go on the two brass screws.",B.d7J,B.d98,"switch","",!0,B.HW,B.cSD,!1,"Light switch",new A.fvh()),A.vF("A GFCI protects you near water. Power comes in on LINE. The LOAD screws (covered with tape) feed other outlets.",B.R3,B.dbZ,"gfci","",!0,B.HW,B.day,!1,"GFCI outlet",new A.fvi()),A.vF("Join the house wires to the fixture wires with wire nuts: black to black, white to white, ground to ground.",B.R3,B.d2W,"light","",!0,B.HW,B.dnc,!1,"Ceiling light",new A.fvj()),A.vF("A fan hangs from a strong fan-rated box. Join black, white and ground with wire nuts, then fasten the canopy.",B.R3,B.d9X,"fan","",!0,B.HW,B.d_0,!1,"Ceiling fan",new A.fvk())],C.ax("O<SH>"))
D.d.v(v,$.fSP())
return v})
w($,"ime","fSP",()=>{var v="switch",u="outlet"
return C.a([A.vF("Breaks BOTH hot legs of a 240 volt circuit at once: water heaters and baseboard heat.",B.dq2,B.c2C,"switch2p",v,!0,B.dsw,B.d38,!0,"Double-pole switch (240 V)",new A.fvl()),A.vF("One light, two switches. One COMMON screw and two TRAVELER screws; it pairs with a second three-way.",B.djw,B.cTV,"switch3",v,!0,B.dsO,B.daB,!0,"Three-way switch",new A.fvm()),A.vF("Sits in the middle of two three-way switches: two traveler wires in on one side, two out on the other.",B.dov,B.ddo,"switch4",v,!0,B.dsx,B.din,!0,"Four-way switch",new A.fvn()),A.vF("Needs a NEUTRAL wire in the box as well: hot in, hot out to the light, neutral and ground.",B.cYO,B.d0A,"switchsmart",v,!0,B.dsP,B.cZ4,!0,"Smart, motion or timer switch",new A.fvo()),A.vF("Two switches in one device: one hot feed is split between them, and two separate lights come out.",B.cGX,B.dgJ,"switchcombo",v,!0,B.duu,B.cu7,!0,"Combination (double) switch",new A.fvp()),A.vF("The tab between the brass screws is broken off: the top half is switched, the bottom half is always on.",B.dav,B.ctx,"split",u,!0,B.dsQ,B.dfG,!0,"Split (half-switched) outlet",new A.fvq()),A.vF("Two hots, a neutral and a ground: the dryer 14-30, and the range and car charger 14-50.",B.dmb,B.cXy,"v240four",u,!0,B.dsN,B.cLk,!0,"4-wire 240 V outlet (dryer, range, EV)",new A.fvr()),A.vF("Two hots and a neutral, with no separate ground: the old 10-30 and 10-50, from before 1996.",B.d3S,B.dp_,"v240three",u,!1,B.dus,B.doc,!0,"3-wire 240 V outlet (old dryer or range)",new A.fvs()),A.vF("Two hots and a ground, and no neutral at all: the 6-series outlets.",B.dmS,B.d7w,"v240only",u,!0,B.dt2,B.dlC,!0,"240 V only outlet (window AC, welder)",new A.fvt()),A.vF("Hot and neutral as usual, but the ground goes on its own wire straight back to the panel: shops and offices.",B.doP,B.d8z,"isolated",u,!0,B.dtU,B.d4f,!0,"Isolated-ground outlet",new A.fvu())],C.ax("O<SH>"))})
w($,"imp","GY",()=>{var v,u=C.a([],x.n)
for(v=0;v<10;++v)u.push(-72+16*v)
return u})})()};
(a=>{a["nCxYDsWObakyiUerTjqLxsmq7MI="]=a.current})($__dart_deferred_initializers__);